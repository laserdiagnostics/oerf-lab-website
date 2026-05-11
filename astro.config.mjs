import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://laserdiagnostics.github.io",
  base: "/oerf-lab-website",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
