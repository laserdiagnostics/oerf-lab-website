import fs from "node:fs";
import { load } from "cheerio";
import {
  BASE_PATH,
  DIST_DIR,
  failAndExit,
  htmlFileToSitePath,
  internalUrlToFile,
  pagePair,
  relativeDistPath,
  walkFiles,
} from "./lib/site-checks.mjs";

const failures = [];
const htmlFiles = walkFiles(DIST_DIR, ".html").filter((file) => relativeDistPath(file) !== "404.html");
const builtPaths = new Set(htmlFiles.map(htmlFileToSitePath));

const staleManifests = walkFiles(DIST_DIR).filter((file) => /(^|[\\/])manifest_[^\\/]+\.mjs$/.test(file));
if (staleManifests.length > 0) {
  failures.push(`production dist contains ${staleManifests.length} stale development manifest file(s)`);
}
const fontFiles = walkFiles(DIST_DIR, ".woff2");
if (fontFiles.length !== 1) {
  failures.push(`production dist must contain exactly one Latin WOFF2 font, found ${fontFiles.length}`);
}

for (const file of htmlFiles) {
  const relative = relativeDistPath(file);
  const sitePath = htmlFileToSitePath(file);
  const pair = pagePair(sitePath);
  const expectedUrl = pair.locale === "zh" ? pair.zhUrl : pair.enUrl;
  const expectedLang = pair.locale === "zh" ? "zh-CN" : "en";
  const expectedOgLocale = pair.locale === "zh" ? "zh_CN" : "en_US";
  const $ = load(fs.readFileSync(file, "utf8"));

  const checkValue = (selector, attribute, expected, label) => {
    const elements = $(selector);
    if (elements.length !== 1) {
      failures.push(`${relative}: expected one ${label}, found ${elements.length}`);
      return;
    }
    const actual = elements.attr(attribute);
    if (actual !== expected) failures.push(`${relative}: ${label} is ${actual}, expected ${expected}`);
  };

  if ($("html").attr("lang") !== expectedLang) {
    failures.push(`${relative}: html lang is ${$("html").attr("lang")}, expected ${expectedLang}`);
  }
  checkValue('link[rel="canonical"]', "href", expectedUrl, "canonical URL");
  checkValue('link[rel="alternate"][hreflang="en"]', "href", pair.enUrl, "English hreflang");
  checkValue('link[rel="alternate"][hreflang="zh-CN"]', "href", pair.zhUrl, "Chinese hreflang");
  checkValue('link[rel="alternate"][hreflang="x-default"]', "href", pair.enUrl, "x-default hreflang");
  checkValue('meta[property="og:url"]', "content", expectedUrl, "Open Graph URL");
  checkValue('meta[property="og:locale"]', "content", expectedOgLocale, "Open Graph locale");

  const counterpart = pair.locale === "zh" ? pair.enPath : pair.zhPath;
  if (!builtPaths.has(counterpart)) failures.push(`${relative}: missing counterpart page ${counterpart}`);

  const ogImage = $('meta[property="og:image"]').attr("content");
  const ogTarget = internalUrlToFile(ogImage);
  if (!ogImage) failures.push(`${relative}: missing og:image`);
  else if (!ogTarget || ogTarget.error || !fs.existsSync(ogTarget.file)) {
    failures.push(`${relative}: og:image does not resolve to a built asset (${ogImage})`);
  }

  const switcher = $("a.language-switch");
  const expectedSwitchText = pair.locale === "zh" ? "EN" : "中文";
  const expectedSwitchLabel = pair.locale === "zh" ? "Switch to English" : "切换到中文";
  const expectedSwitchHref = pair.locale === "zh" ? pair.enPath : pair.zhPath;
  if (switcher.length !== 1) failures.push(`${relative}: expected one language switch, found ${switcher.length}`);
  else {
    if (switcher.text().trim() !== expectedSwitchText) {
      failures.push(`${relative}: language switch must show target language ${expectedSwitchText}`);
    }
    if (switcher.attr("aria-label") !== expectedSwitchLabel) {
      failures.push(`${relative}: language switch aria-label is incorrect`);
    }
    if (switcher.attr("href") !== expectedSwitchHref) {
      failures.push(`${relative}: language switch points to ${switcher.attr("href")}, expected ${expectedSwitchHref}`);
    }
  }

  if (relative === "publications/index.html" || relative === "zh/publications/index.html") {
    const count = $(".publication-card").length;
    if (count !== 245) failures.push(`${relative}: expected 245 publications, found ${count}`);
  }

  if (relative === "index.html" || relative === "zh/index.html") {
    if ($(".research-card").length !== 4) failures.push(`${relative}: expected 4 research areas`);
    if ($(".featured-highlight").length !== 4) failures.push(`${relative}: expected 4 featured highlights`);
  }

  if (relative === "research/index.html" || relative === "zh/research/index.html") {
    if ($(".research-grid > .research-card").length !== 4) {
      failures.push(`${relative}: expected 4 research areas in the overview grid`);
    }
  }

  if (/^(zh\/)?team\/[^/]+\/index\.html$/.test(relative)) {
    const expectedTeamPath = pair.locale === "zh" ? `${BASE_PATH}/zh/team/` : `${BASE_PATH}/team/`;
    if ($('.navbar-links > a.active').attr("href") !== expectedTeamPath) {
      failures.push(`${relative}: member page must mark Team as the active navigation item`);
    }
  }

  const source = $.html();
  if (source.includes("/zh/zh/")) failures.push(`${relative}: contains duplicate /zh/zh/ path`);
  if (source.includes(`${BASE_PATH}${BASE_PATH}`)) failures.push(`${relative}: contains duplicate base path`);
  if (/fonts\.(googleapis|gstatic)\.com/.test(source)) failures.push(`${relative}: still depends on Google Fonts`);
  if ($('link[rel="preload"][as="font"][type="font/woff2"]').length !== 1) {
    failures.push(`${relative}: expected one self-hosted font preload`);
  }
}

const notFoundFile = `${DIST_DIR}/404.html`;
if (!fs.existsSync(notFoundFile)) {
  failures.push("missing dist/404.html");
} else {
  const $404 = load(fs.readFileSync(notFoundFile, "utf8"));
  if ($404('meta[name="robots"]').attr("content") !== "noindex") failures.push("404.html: missing noindex");
  if ($404('link[rel="preload"][as="font"][type="font/woff2"]').length !== 1) {
    failures.push("404.html: expected one self-hosted font preload");
  }
  if ($404('[data-error-locale="en"]').length !== 1 || $404('[data-error-locale="zh"]').length !== 1) {
    failures.push("404.html: must contain one English and one Chinese state");
  }
}

const sitemapFile = `${DIST_DIR}/sitemap-0.xml`;
if (!fs.existsSync(sitemapFile)) {
  failures.push("missing dist/sitemap-0.xml");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  const enAlternates = (sitemap.match(/hreflang="en"/g) || []).length;
  const zhAlternates = (sitemap.match(/hreflang="zh-CN"/g) || []).length;
  if (urlCount !== htmlFiles.length) failures.push(`sitemap: expected ${htmlFiles.length} URLs, found ${urlCount}`);
  if (enAlternates !== urlCount || zhAlternates !== urlCount) {
    failures.push("sitemap: every URL must include English and Chinese alternates");
  }
  if (sitemap.includes("/zh/zh/") || sitemap.includes(`${BASE_PATH}${BASE_PATH}`)) {
    failures.push("sitemap: contains a duplicated locale or base path");
  }
}

failAndExit("Built HTML validation", failures);
console.log(`Built HTML validation passed for ${htmlFiles.length} bilingual pages.`);
