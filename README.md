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

See [I18N.md](./I18N.md) for bilingual content, routing, SEO, and verification rules.

### Adding a team member
1. Add photo to `public/images/team/`
2. Add bilingual member data to `src/data/members.ts`
3. The English and Chinese profile pages are generated automatically from the stable member ID

### Adding a publication
- Edit `src/data/publications.ts`

### Adding a research area
- Edit `src/data/research.ts`

## Deployment

Run `npm run verify`, then push to `main`. GitHub Actions repeats the full verification suite and deploys to GitHub Pages.
