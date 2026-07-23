import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isDevCommand = process.argv.includes("dev");

export default defineConfig({
  site: "https://laserdiagnostics.github.io",
  base: "/oerf-lab-website",
  // Keep the long-running development server from mutating production build artifacts.
  outDir: isDevCommand ? "./.astro-dev" : "./dist",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          zh: "zh-CN",
        },
      },
    }),
  ],
  build: {
    format: "directory",
  },
});
