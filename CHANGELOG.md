# OERF Lab Website Change Log

This file records material content, data, and layout changes so future updates can begin with the current site state.

## 2026-07-23

### Bilingual site

- Added a complete Chinese site under `/zh/` while preserving every existing English URL.
- Added shared bilingual page views for Home, Research, Team, member profiles, Publications, and Contact so the two languages cannot drift structurally.
- Migrated site metadata, all four faculty profiles, all four research areas, and all four featured highlights to typed English/Chinese content.
- Kept all 245 publication titles, author lists, journal metadata, DOI links, and paper links in their original academic English.
- Added page-preserving language switches. The control intentionally displays the target language: `中文` on English pages and `EN` on Chinese pages.
- Added an adaptive English/Chinese 404 page for GitHub Pages.

### SEO and platform reliability

- Added canonical URLs plus `en`, `zh-CN`, and `x-default` alternate links to every bilingual page.
- Added bilingual sitemap alternates.
- Made the shared Open Graph image a `BaseLayout` default so pages do not need to pass an `ogImage` prop; optional per-page overrides remain supported.
- Added a real shared Open Graph asset at `public/images/og/oerf-lab-share.webp`.
- Removed runtime Google Fonts requests and self-hosted Inter through the project dependency, with system Chinese-font fallbacks.

### Verification

- Added `npm run verify`, combining Astro type checks, bilingual source validation, a production build, built-page SEO checks, sitemap checks, and internal link/resource checks.
- Validation asserts 4 members, 4 research areas, 4 featured highlights, and 245 publications, and verifies every English/Chinese route pair and language switch.
- Updated the GitHub Pages workflow to run the full verification suite before uploading `dist/`.

## 2026-07-22

### Homepage and navigation

- Moved the **Our Team** section ahead of **Research Areas** on the homepage.
- Added a stable `#research-areas` anchor for direct navigation.
- Expanded **Latest Highlights** with four featured papers and custom scientific artwork:
  - Nature Electronics (2026): memristor-chip computational spectrometry.
  - Nature Synthesis (2026): electrified vapour deposition.
  - Science Advances (2025): tunable optoelectronic spectral sensing.
  - Nature (2023): stable atmospheric-pressure plasma synthesis.
- Corrected the featured-paper image links and “Read the paper” destinations.
- Removed the duplicated Nature Synthesis entry from **More selected work**.

### Research Areas

- Added responsive 16:9 image support to research cards with intrinsic dimensions, lazy loading, descriptive alternative text, and uncropped `object-fit: contain` display.
- Added optimized WebP artwork for all four research directions:
  - Extreme Reaction Flow Diagnostics.
  - Computational Imaging & Miniature Spectrometers.
  - Ultrafast Laser Spectroscopy & Plasma Energy Conversion.
  - Reacting Flow Simulation & Data Assimilation.

### Publications

- Rebuilt the Publications dataset from the Google Scholar profiles of Weiwei Cai, Yutao Zheng, Ning Liu, and Shijie Xu.
- Merged and reviewed 307 unique records.
- Published 245 verified journal papers, grouped by year from 2026 to 2008.
- Excluded 62 conference papers, preprints, theses, corrections, repository records, and invalid profile entries.
- Added DOI links where available and direct paper-page fallbacks for records without a DOI.
- Preserved the IDs used by the four homepage highlights so existing anchors and featured layouts continue to work.

### Verification and recovery

- Verified the production build with `npm run build`.
- Checked the homepage and Publications page in the local browser for missing images, horizontal overflow, broken grouping, and client-side errors.
- Created a local pre-rebuild backup at `backups/pre-publications-rebuild-20260722-2230/`.
- The `backups/` directory is intentionally ignored by Git and must not be deployed.

### Primary publication sources

- Weiwei Cai: <https://scholar.google.com/citations?user=4mYjOrsAAAAJ&hl=en>
- Yutao Zheng: <https://scholar.google.com/citations?user=jfSi29QAAAAJ&hl=en>
- Ning Liu: <https://scholar.google.com/citations?user=DlHZ61MAAAAJ&hl=en>
- Shijie Xu: <https://scholar.google.com/citations?user=aj2fimUAAAAJ&hl=en>
