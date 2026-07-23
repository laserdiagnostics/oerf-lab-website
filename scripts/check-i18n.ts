import fs from "node:fs";
import { SITE } from "../src/config";
import { featuredHighlightConfigs } from "../src/data/highlights";
import { members } from "../src/data/members";
import { publications } from "../src/data/publications";
import { researchAreas } from "../src/data/research";
import { pageCopy } from "../src/i18n/pages";
import { ui } from "../src/i18n/ui";

const failures: string[] = [];

function fail(message: string): void {
  failures.push(message);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function compareShape(en: unknown, zh: unknown, label: string): void {
  if (Array.isArray(en) || Array.isArray(zh)) {
    if (!Array.isArray(en) || !Array.isArray(zh)) {
      fail(`${label}: English and Chinese types differ`);
      return;
    }
    if (en.length !== zh.length) {
      fail(`${label}: English has ${en.length} entries but Chinese has ${zh.length}`);
      return;
    }
    en.forEach((value, index) => compareShape(value, zh[index], `${label}[${index}]`));
    return;
  }

  if (isRecord(en) || isRecord(zh)) {
    if (!isRecord(en) || !isRecord(zh)) {
      fail(`${label}: English and Chinese types differ`);
      return;
    }
    const enKeys = Object.keys(en).sort();
    const zhKeys = Object.keys(zh).sort();
    if (enKeys.join("|") !== zhKeys.join("|")) {
      fail(`${label}: key mismatch (en: ${enKeys.join(", ")}; zh: ${zhKeys.join(", ")})`);
      return;
    }
    enKeys.forEach((key) => compareShape(en[key], zh[key], `${label}.${key}`));
    return;
  }

  if (typeof en === "string" && en.trim() === "") fail(`${label}: empty English text`);
  if (typeof zh === "string" && zh.trim() === "") fail(`${label}: empty Chinese text`);
}

function checkBilingual(value: unknown, label: string): void {
  if (!isRecord(value) || !("en" in value) || !("zh" in value)) {
    fail(`${label}: missing en or zh content`);
    return;
  }
  compareShape(value.en, value.zh, label);
}

checkBilingual(ui, "ui");
checkBilingual(pageCopy, "pageCopy");
checkBilingual(SITE.content, "SITE.content");
members.forEach((member) => checkBilingual(member.content, `members.${member.id}.content`));
researchAreas.forEach((area) => checkBilingual(area.content, `research.${area.id}.content`));
featuredHighlightConfigs.forEach((highlight) =>
  checkBilingual(highlight.content, `highlights.${highlight.id}.content`),
);

const memberIds = members.map(({ id }) => id);
if (new Set(memberIds).size !== memberIds.length) fail("Member IDs must be unique");

const publicationIds = new Set(publications.map(({ id }) => id));
if (publicationIds.size !== publications.length) fail("Publication IDs must be unique");
for (const highlight of featuredHighlightConfigs) {
  if (!publicationIds.has(highlight.id)) {
    fail(`Highlight ${highlight.id} does not match a publication ID`);
  }
}

if (publications.length !== 245) {
  fail(`Expected 245 publications, found ${publications.length}`);
}

const requiredRoutes = ["home", "research", "team", "publications", "contact"];
const routeManifest = fs.readFileSync(new URL("../src/i18n/routes.ts", import.meta.url), "utf8");
for (const route of requiredRoutes) {
  if (!new RegExp(`\\b${route}\\s*:`).test(routeManifest)) {
    fail(`Missing route manifest entry: ${route}`);
  }
}

if (failures.length > 0) {
  console.error("i18n source validation failed:\n" + failures.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(
  `i18n source validation passed: ${members.length} members, ${researchAreas.length} research areas, ` +
    `${featuredHighlightConfigs.length} highlights, ${publications.length} publications.`,
);
