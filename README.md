# OERF Lab Website

Optical & Extreme Reaction Flow (OERF) Lab research group website at Shanghai Jiao Tong University.

## Tech Stack

- **Framework:** [Astro](https://astro.build) 5.x — static site generator
- **CSS:** Vanilla CSS with custom properties
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev     # Start dev server at localhost:4321
npm run build   # Build static site to dist/
npm run preview # Preview the built site
```

## Project Structure

```
src/
├── layouts/BaseLayout.astro   # Page shell (nav, footer, SEO)
├── components/                # Reusable UI components
├── data/                      # TypeScript data files
│   ├── members.ts             # Team member data
│   ├── publications.ts        # Publication list
│   └── research.ts            # Research area descriptions
├── styles/global.css          # Design system & global styles
└── pages/                     # Route pages
    ├── index.astro            # Home
    ├── research.astro         # Research overview
    ├── team.astro             # Team overview
    ├── team/[slug].astro      # Individual member profiles
    ├── publications.astro     # Publication list
    └── contact.astro          # Contact information
```

## Maintenance

### Adding a team member
1. Add photo to `public/images/team/`
2. Add member data to `src/data/members.ts`
3. Create profile page `src/pages/team/[slug].astro`

### Adding a publication
- Edit `src/data/publications.ts`

### Adding a research area
- Edit `src/data/research.ts`

## Deployment

Push to `main` branch — GitHub Actions auto-deploys to GitHub Pages.
