import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const dist = path.resolve(root, "dist");

if (path.dirname(dist) !== root || path.basename(dist) !== "dist") {
  throw new Error(`Refusing to clean an unexpected build directory: ${dist}`);
}

fs.mkdirSync(dist, { recursive: true });
for (const entry of fs.readdirSync(dist)) {
  const target = path.resolve(dist, entry);
  if (path.dirname(target) !== dist) {
    throw new Error(`Refusing to clean an unexpected build artifact: ${target}`);
  }
  fs.rmSync(target, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
console.log(`Cleaned production build directory: ${dist}`);
