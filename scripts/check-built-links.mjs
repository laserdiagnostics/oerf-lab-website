import fs from "node:fs";
import { load } from "cheerio";
import {
  DIST_DIR,
  failAndExit,
  internalUrlToFile,
  relativeDistPath,
  walkFiles,
} from "./lib/site-checks.mjs";

const failures = [];
const checked = new Set();
const htmlFiles = walkFiles(DIST_DIR, ".html");

for (const file of htmlFiles) {
  const relative = relativeDistPath(file);
  const $ = load(fs.readFileSync(file, "utf8"));

  $("a[href], img[src], link[href], script[src]").each((_, element) => {
    const attribute = element.tagName === "img" || element.tagName === "script" ? "src" : "href";
    const rawUrl = $(element).attr(attribute);
    if (!rawUrl || rawUrl.startsWith("#")) return;

    const result = internalUrlToFile(rawUrl);
    if (!result) return;
    if (result.error) {
      failures.push(`${relative}: ${result.error}`);
      return;
    }

    const key = `${relative}|${rawUrl}`;
    if (checked.has(key)) return;
    checked.add(key);
    if (!fs.existsSync(result.file)) failures.push(`${relative}: broken internal resource ${rawUrl}`);
  });
}

failAndExit("Built link validation", failures);
console.log(`Built link validation passed across ${htmlFiles.length} HTML files (${checked.size} references).`);
