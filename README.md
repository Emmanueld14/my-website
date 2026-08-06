# Manuel — Personal Website

A production-ready personal site for Manuel: Form 3 student in Nairobi, founder of [Bloomly](https://bloomly.co.ke).

Elegant, calm, story-driven — Vite + React 19 + TypeScript + Tailwind + Framer Motion + GSAP + Lenis.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Edit content

All copy, achievements, photos, timeline beats, projects, and places live in typed data files:

- `src/data/profile.ts` — name, intro, socials, hero photo, resume link
- `src/data/timeline.ts` — My Story timeline
- `src/data/achievements.ts` — Proof cards
- `src/data/projects.ts` — Bloomly + other projects
- `src/data/photos.ts` — photography gallery
- `src/data/places.ts` — map pins + nav sections

Replace placeholder Unsplash images and contact URLs with your own. Drop your real CV at `public/resume.pdf`.

## Features

- Light/dark mode
- ⌘K / Ctrl+K command menu
- Scroll progress + Lenis smooth scroll
- GSAP ScrollTrigger story timeline
- Photography masonry + lightbox
- Custom cursor (fine pointers only)
- First-paint loading screen (session-scoped)
