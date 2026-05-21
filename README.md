# Another Booth — アナザーブース

> Singapore's underground photobooth experience. Four themed rooms. One continuous journey.

---

## About

This is the public marketing website for [Another Booth](https://anotherbooth.sg), a multi-room immersive photobooth at Orchard Plaza #05-50, Singapore. The site is a single-page brand awareness landing — no bookings, no accounts, no CMS. Just the brand.

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js (App Router) | Static export, SSG, SEO metadata API |
| Styling | Tailwind CSS + CSS variables | Utility classes with custom dark chrome palette |
| Animations | Framer Motion / CSS | Scroll reveals, shimmer, chrome gradients |
| Fonts | Outfit · Space Mono · Noto Sans JP | Self-hosted in `/public/fonts` |
| Deploy | Vercel | Static export, edge CDN, preview deploys |

## Getting Started

```bash
# Clone
git clone https://github.com/anotherbooth/anotherbooth-web.git
cd anotherbooth-web

# Install
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build

# Preview production build locally
npm run start
```

## Project Structure

```
anotherbooth-web/
├── public/
│   ├── fonts/              # Outfit, Space Mono, Noto Sans JP (self-hosted)
│   ├── og-image.png        # Social share image (1200×630)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, font preloading, global metadata
│   │   └── page.tsx        # The single landing page
│   ├── components/
│   │   ├── Nav.tsx          # Fixed glassmorphism nav with Book Now CTA
│   │   ├── Hero.tsx         # Chrome gradient title, shimmer lines, scroll hint
│   │   ├── Rooms.tsx        # 4-card grid — Graffiti Press, Fridge POV, Batting Cage, Izakaya
│   │   ├── HowItWorks.tsx   # Arrive → Shoot → Select → Print
│   │   ├── Stats.tsx        # 4 rooms · 2–4 guests · 10am–3am
│   │   ├── FinalCTA.tsx     # Location + Book Your Session
│   │   ├── Footer.tsx       # © + social links
│   │   ├── GrainOverlay.tsx # SVG noise filter, fixed, 4% opacity
│   │   └── CursorGlow.tsx   # Mouse-following radial gradient
│   ├── styles/
│   │   └── globals.css      # CSS variables, base resets, grain, animations
│   └── lib/
│       └── constants.ts     # Color tokens, room data, copy strings
├── another-booth-landing.html  # Design prototype (reference only — do not deploy)
├── CLAUDE.md                # Full agent brief with design specs and context
├── README.md                # This file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Design System

### Palette

| Token | Hex | Usage |
|---|---|---|
| `--deep-black` | `#050505` | Page background |
| `--black` | `#0a0a0a` | Card / section backgrounds |
| `--chrome-1` | `#e8e8e8` | Primary text |
| `--chrome-2` | `#b0b0b0` | Secondary text |
| `--chrome-3` | `#808080` | Tertiary / muted |
| `--chrome-4` | `#4a4a4a` | Labels, hints |
| `--amber` | `#d4a04a` | Accent (room numbers, hover, CTA glow) |
| `--white` | `#f0f0f0` | Hero text, max emphasis |

### Typography

- **Outfit** (800–900) — Display headings. Uppercase, tight tracking.
- **Space Mono** (400–700) — Navigation, labels, CTAs. Uppercase, wide tracking.
- **Noto Sans JP** (400–900) — Katakana (アナザーブース) and room kanji accents.

### Key Visual Effects

- Chrome-to-amber animated gradient on "BOOTH" title
- SVG film grain overlay (body::after, fixed)
- Cursor-following metallic glow (desktop only)
- Shimmer lines across hero section
- Scroll-triggered fade-up reveals with staggered delays
- Glassmorphism navigation bar

## Content Sections

1. **Nav** — Logo + katakana, anchor links, Book Now CTA
2. **Hero** — Tagline, chrome gradient title, animated subtitle, primary CTA
3. **Rooms** — 4 cards (Graffiti Press · Fridge POV · Batting Cage · Izakaya) with atmospheric gradients and ghost kanji
4. **How It Works** — Arrive → Shoot → Select → Print (4-column grid)
5. **Stats** — 4 rooms · 2–4 guests · 10am–3am
6. **Final CTA** — Location at Orchard Plaza + booking CTA
7. **Footer** — Copyright + Instagram / TikTok / X

## Placeholders (Assets TBD)

These are not yet available and should use placeholders:

- [ ] Room photography (rooms not yet built)
- [ ] Open Graph image (`public/og-image.png` — use 1200×630 solid `#050505`)
- [ ] Favicon and app icons
- [ ] External booking URL (currently `#book`)
- [ ] Social media profile URLs (currently `#`)

## Performance Targets

- Lighthouse: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- `prefers-reduced-motion` support: disable grain, shimmer, scroll animations, cursor glow
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Self-hosted fonts with `font-display: swap`

## Deployment

```bash
# Build static export
npm run build

# Deploy to Vercel
vercel --prod

# Or Cloudflare Pages
npx wrangler pages deploy out
```

## Reference

- `CLAUDE.md` — Full agent brief with design specs, room details, brand guidelines, and copy
- `another-booth-landing.html` — Original design prototype (the visual source of truth)

## License

Proprietary. © 2026 Another Booth. All rights reserved.