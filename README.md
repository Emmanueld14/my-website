# Manuel — Personal Website

A production-ready personal site for Manuel: Form 3 student in Nairobi, founder of [Bloomly](https://bloomly.co.ke).

Elegant, calm, story-driven — Vite + React 19 + TypeScript + Tailwind + Framer Motion + GSAP + Lenis.

## Live site (GitHub Pages)

**https://emmanueld14.github.io/my-website/** (redirects to `/docs/`)

Direct URL: **https://emmanueld14.github.io/my-website/docs/**

The production build is committed in `/docs` so GitHub Pages (branch `main`) can serve it.

## Quick start

```bash
npm install
npm run dev
```

Dev URL: `http://localhost:5173/my-website/docs/`

```bash
npm run build   # writes to /docs — commit docs/ when shipping
npm run preview
```

## Edit content

All copy, achievements, photos, timeline beats, projects, and places live in typed data files:

- `web/src/data/profile.ts` — name, intro, socials, hero photo, resume link
- `web/src/data/timeline.ts` — My Story timeline
- `web/src/data/achievements.ts` — Proof cards
- `web/src/data/projects.ts` — Bloomly + other projects
- `web/src/data/photos.ts` — photography gallery
- `web/src/data/places.ts` — map pins
- `web/src/data/nav.ts` — navbar items

Replace placeholder Unsplash images and contact URLs with your own. Drop your real CV at `public/resume.pdf`.

## Features

- Light/dark mode
- ⌘K / Ctrl+K command menu
- Scroll progress + Lenis smooth scroll
- GSAP ScrollTrigger story timeline
- Photography masonry + lightbox
- Custom cursor (fine pointers only)
- First-paint loading screen (session-scoped)
- Functional sticky navbar with mobile menu
