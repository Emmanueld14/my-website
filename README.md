# Manuel — Personal Website

A production-ready personal site for Manuel: Form 3 student in Nairobi, founder of [Bloomly](https://bloomly.co.ke).

Elegant, calm, story-driven — Vite + React 19 + TypeScript + Tailwind + Framer Motion + GSAP + Lenis.

## Live site

**https://emmanueld14.github.io/my-website/**

GitHub Pages serves the production build from the repo root (`index.html` + `assets/`). Source code lives in `web/`.

## Quick start

```bash
npm install
npm run dev
```

Dev URL: `http://localhost:5173/my-website/`

```bash
npm run build:pages   # build + sync dist → root for GitHub Pages
# then commit index.html, assets/, favicon.svg, etc.
npm run preview
```

## Edit content

Typed data files (edit these, then `npm run build:pages` before shipping):

- `web/src/data/profile.ts`
- `web/src/data/timeline.ts`
- `web/src/data/achievements.ts`
- `web/src/data/projects.ts`
- `web/src/data/photos.ts`
- `web/src/data/places.ts`
- `web/src/data/nav.ts`

Drop your real CV at `public/resume.pdf`.

## Features

- Light/dark mode, ⌘K command menu, Lenis smooth scroll
- GSAP story timeline, photography lightbox
- Sticky navbar with scroll-spy + mobile menu
