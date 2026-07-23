import fs from "node:fs";
import path from "node:path";

export const ROOT_DIR = process.cwd();
export const DIST_DIR = path.join(ROOT_DIR, "dist");
export const SITE_ORIGIN = "https://laserdiagnostics.github.io";
export const BASE_PATH = "/oerf-lab-website";
export const SITE_ROOT = `${SITE_ORIGIN}${BASE_PATH}`;

export function walkFiles(directory, suffix = "") {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkFiles(target, suffix);
    return !suffix || entry.name.endsWith(suffix) ? [target] : [];
  });
}

export function relativeDistPath(file) {
  return path.relative(DIST_DIR, file).split(path.sep).join("/");
}

export function htmlFileToSitePath(file) {
  const relative = relativeDistPath(file);
  if (relative === "index.html") return `${BASE_PATH}/`;
  if (relative === "404.html") return `${BASE_PATH}/404.html`;
  if (relative.endsWith("/index.html")) {
    return `${BASE_PATH}/${relative.slice(0, -"index.html".length)}`;
  }
  return `${BASE_PATH}/${relative}`;
}

export function pagePair(sitePath) {
  const relative = sitePath.slice(BASE_PATH.length).replace(/^\/+/, "");
  const isChinese = relative === "zh/" || relative.startsWith("zh/");
  const route = isChinese ? relative.slice(3) : relative;
  const normalizedRoute = route === "" ? "" : route.replace(/^\/+/, "");
  const enPath = `${BASE_PATH}/${normalizedRoute}`;
  const zhPath = `${BASE_PATH}/zh/${normalizedRoute}`;
  return {
    locale: isChinese ? "zh" : "en",
    enPath,
    zhPath,
    enUrl: `${SITE_ORIGIN}${enPath}`,
    zhUrl: `${SITE_ORIGIN}${zhPath}`,
  };
}

export function internalUrlToFile(rawUrl) {
  if (!rawUrl || rawUrl.startsWith("#") || rawUrl.startsWith("mailto:") || rawUrl.startsWith("tel:")) {
    return null;
  }

  let url;
  try {
    url = new URL(rawUrl, SITE_ORIGIN);
  } catch {
    return { error: `invalid URL: ${rawUrl}` };
  }

  if (url.origin !== SITE_ORIGIN) return null;
  if (!(url.pathname === BASE_PATH || url.pathname.startsWith(`${BASE_PATH}/`))) {
    return { error: `internal URL is outside the configured base: ${rawUrl}` };
  }

  const relative = decodeURIComponent(url.pathname.slice(BASE_PATH.length)).replace(/^\/+/, "");
  if (!relative) return { file: path.join(DIST_DIR, "index.html") };
  if (url.pathname.endsWith("/")) return { file: path.join(DIST_DIR, relative, "index.html") };

  const direct = path.join(DIST_DIR, relative);
  if (path.extname(relative)) return { file: direct };
  if (fs.existsSync(direct)) return { file: direct };
  return { file: path.join(DIST_DIR, relative, "index.html") };
}

export function failAndExit(label, failures) {
  if (failures.length === 0) return;
  console.error(`${label} failed:\n${failures.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}
