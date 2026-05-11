import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sjtume.github.io/oerf-lab",
  base: "/",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
