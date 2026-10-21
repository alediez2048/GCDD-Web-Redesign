# GCDD Group Web Redesign

A redesign of the marketing site for GCDD Group, a firm working on high-end architectural and commercial spaces.

Live preview: https://alediez2048.github.io/GCDD-Web-Redesign/

## Pages

Home, About, Services, Portfolio and Contact, each under `src/app/<page>/page.tsx`. Shared layout pieces (navbar, footer) are in `src/components/layout`, small UI primitives (button, card, input) in `src/components/ui`, and the shared Framer Motion animation variants in `src/lib/animations/variants.ts`.

## Stack

Next.js 16 (App Router) with React 19, Tailwind CSS 4, Framer Motion for scroll and entrance animations, and lucide-react icons. `next.config.js` uses static export (`output: 'export'`), so `npm run build` writes a plain static site to `out/`, served from the `/GCDD-Web-Redesign` base path on GitHub Pages.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
npm run lint
```
