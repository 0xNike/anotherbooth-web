# CLAUDE.md — Another Booth Website

> This file is the primary brief for any agent working on the Another Booth website. Read it completely before writing any code.

---

## What Is Another Booth?

Another Booth (アナザーブース) is a commercial multi-room immersive photobooth business on **Level 5 of Orchard Plaza — #05-50, 150 Orchard Road, Singapore**. Groups of 2–4 move sequentially through four themed photobooth rooms, then select and print photo strips in a foyer. **Walk-in — no appointment needed**; open 10AM–3AM daily.

The brand identity is **editorial, moody, dark-luxe** — paparazzi flash energy, Gentle Monster vibes, Japanese cultural themes. Think dark luxury meets street editorial. (Note: the venue is on the **fifth floor**, not a basement — never describe it as "underground"; that reads as a literal location claim and is wrong.)

---

## What Are We Building?

A small **marketing website** at `anotherbooth.sg` (or equivalent domain) — a home page plus **`/about` and `/contact`** routes. The sole purpose is **brand awareness and social proof** — not bookings, not e-commerce. The venue is **walk-in (no booking at all)**, so the site has no reservation flow. The single call-to-action is **"Follow us on Instagram"** (TBD — use `#` placeholder href until the real profile URL is provided).

This is NOT the photobooth software (that's a separate Python/FastAPI system for the in-venue tablets and PC). This is a standalone public-facing website.

---

## Design Direction: Metallic Black / Silver / Gen Z

The aesthetic is **dark chrome luxury meets street editorial**. A reference HTML file exists at `another-booth-landing.html` in this repo — it is the design prototype and source of truth for the visual language.

### Color System

```
--chrome-1: #e8e8e8    (primary text, highlights)
--chrome-2: #b0b0b0    (secondary text, nav links)
--chrome-3: #808080    (tertiary text, muted elements)
--chrome-4: #4a4a4a    (labels, hints, faintest text)
--black: #0a0a0a       (card/section backgrounds)
--deep-black: #050505  (page background)
--amber: #d4a04a       (accent — room numbers, hover states, CTA highlights)
--amber-dim: #a07830   (amber secondary)
--white: #f0f0f0       (hero text, maximum emphasis)
```

Amber is used sparingly as the sole warm accent — it's derived from the izakaya room's lighting. Everything else is achromatic.

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / headings | Outfit | 800–900 | Tight letter-spacing (-2px to -4px), uppercase |
| Mono / labels / nav | Space Mono | 400–700 | All-caps, wide letter-spacing (3–6px) |
| Japanese (katakana) | Noto Sans JP | 400–900 | Used for アナザーブース and room kanji accents |

Do NOT use: Inter, Roboto, Arial, system fonts, or any generic sans-serif.

### Visual Treatments

- **Chrome gradients** on hero text (vertical white→dark silver; animated gold-to-chrome on "BOOTH")
- **Film grain overlay** via SVG noise filter on `body::after`, fixed position, ~4% opacity
- **Cursor glow** — 300px radial gradient follows mouse, very subtle (4% opacity chrome)
- **Shimmer lines** — horizontal lines with shimmer animation across hero
- **Scroll-triggered reveals** — elements fade up (translateY 30px → 0, opacity 0 → 1) with staggered delays
- **Glassmorphism nav** — backdrop-filter blur, semi-transparent black background
- **Hover states** — border/glow transitions on CTAs, slide-in fill on buttons
- No emojis. No rounded-corner card carousels. No gradients-on-white. No startup landing page energy.

### Layout Principles

- Full-bleed sections, edge-to-edge
- Room cards: CSS grid, aspect-ratio 3:4, atmospheric gradient backgrounds per room
- Steps: 4-column grid with 1px gap borders
- Stats: centered flex row
- Generous vertical padding (120px sections)
- Mobile: 2-col → 1-col room grid, 2-col → 1-col steps, stacked nav

---

## Content Architecture (Single Page)

The page has these sections in order:

### 1. Navigation (fixed)
- Logo: the official `anotherbooth` wordmark (white-on-transparent SVG)
- Links: About (`/about`), Experience (`/#experience` — the flow section on home), Contact (`/contact`)
- No CTA button in the nav (booking removed)
- The logo lives in a separate pinned bar above the hero; the menu band is links-only, centered, dark-grey (`--nav-bg`), and shared across all pages (it sits below the hero on home, at the top of sub-pages)

### 2. Hero
- Tagline: "Singapore's Immersive Photobooth Experience"
- Centerpiece: the official `anotherbooth` logo lockup (wordmark + アナザーブース), white-on-transparent SVG
- No CTA button — the scroll cue invites entry; the only CTA is "Follow us on Instagram" in the final section
- Scroll indicator at bottom

### 3. Rooms Section
- No visible heading (screen-reader-only h2 "The Rooms" for hierarchy)
- A **full-screen GSAP Observer slider**: the section pins and each wheel/swipe advances one room (incoming room slides up, content staggers in), releasing to the next section at the ends. Reduced-motion / no-JS falls back to stacked, natively-scrolling full-screen panels.
- The four rooms:

| Card | Room Name | Kanji | Description |
|---|---|---|---|
| Room 01 | Sakura Room | 桜花 | Cherry blossom in permanent bloom, soft pink light, petals overhead |
| Room 02 | Convenience Store | コンビニ | Late-night konbini — fluorescent light, packed shelves, drink chiller |
| Room 03 | Batting Cage | 野球 | Chain-link fence, fake turf, jerseys, paparazzi flash |
| Room 04 | Izakaya | 居酒屋 | Wooden table, fake noodles/bottles, warm amber glow |

Each room panel has: a per-room atmospheric gradient wash, a giant faint ghost kanji (vertical, top-right), and content pinned bottom-left (room number in the room's palette colour, name, description — always visible).

### 4. How It Works ("02 — The Flow")
- 4 steps: Arrive → Shoot → Select → Print
- Step 01 — Arrive: "No booking needed. Walk in at Orchard Plaza, Level 5. Drop your bags in the vanity room."
- Step 02 — Shoot: "Move through four themed rooms. Tap, pose, flash. Every room hits different."
- Step 03 — Select: "Browse your shots in the foyer. Pick your favourites for the strip."
- Step 04 — Print: "Walk out with physical photo strips. The kind you actually keep."

### 5. Stats Banner
- `4` Themed Rooms
- `2–4` Guests per Session
- `10am` to 3am Daily

### 6. Final CTA (`#visit`)
- Location label: "Orchard Plaza · Level 5 · #05-50"
- Title: "Ready to step inside?"
- Address: "150 Orchard Road, Singapore · Walk in any time"
- CTA: "Follow us on Instagram →" (links to the Instagram profile — placeholder `#`)

### 7. Footer
- © 2026 Another Booth
- Social links: Instagram, TikTok, X (hrefs TBD — use `#` placeholder)

---

## Technical Requirements

### Stack

Choose the appropriate modern stack. Recommendations:

- **Next.js** (App Router) or **Astro** for static site generation — this is a single marketing page, it should be fast and SEO-optimized
- **Tailwind CSS** for utility classes — but the color system and typography above are the source of truth, not Tailwind defaults
- **Framer Motion** or CSS animations for scroll reveals and hover transitions
- Deploy target: **Vercel** or **Cloudflare Pages** (static export)

### Performance

- Lighthouse score targets: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- No heavy JS frameworks if avoidable — this is a content page
- Lazy-load any images below the fold
- Preload fonts (Outfit, Space Mono, Noto Sans JP)
- No layout shift — reserve space for all elements

### SEO

- Title: `Another Booth — アナザーブース | Singapore's Immersive Photobooth Experience`
- Meta description: `Four themed rooms. One continuous photobooth journey. Find us on Level 5 of Orchard Plaza, Singapore — walk in any time.`
- Open Graph image: TBD (will be provided — use a placeholder 1200×630 for now)
- Canonical URL: TBD
- Schema.org LocalBusiness structured data for the Orchard Plaza location

### Accessibility

- All text meets WCAG AA contrast on dark backgrounds (the chrome palette already does)
- Reduced motion: respect `prefers-reduced-motion` — disable grain animation, shimmer, scroll reveals, cursor glow
- Keyboard-navigable: visible focus states on all interactive elements
- Semantic HTML: proper heading hierarchy (single h1 in hero, h2 for section titles)
- Skip-to-content link

### Assets Not Yet Available

These will be provided later. Use placeholders for now:

- Room photography (real photos of the four rooms — currently rooms are not built yet)
- Open Graph / social share image
- Favicon / app icons
- Instagram profile URL (the site's only CTA)
- Other social media profile URLs (TikTok, X)
- Google Maps embed or link for location

---

## Room Reference (Physical Details)

For context if you need to write copy or choose atmospheric treatments. Note: decor themes were updated — R2 is now Sakura, R3 is now Convenience Store. Dimensions/camera positions are physical (unchanged); walls/camera/lighting for the re-themed rooms are TBD and should be re-confirmed.

| Room | Dimensions (cm) | Theme | Walls | Camera | Lighting |
|---|---|---|---|---|---|
| R1 | 112×130 | Vanity / bags locker | — | — | Utility only, not a photobooth room |
| R2 | 200×120 | Sakura Room (cherry blossom) | TBD | TBD | TBD — soft pink (re-themed) |
| R3 | 218×148 | Convenience Store (konbini) | TBD | TBD | TBD — bright fluorescent (re-themed) |
| R4 | 218×148 | Batting cage | Black | Corner, fisheye | Flash + cool 6500K ambient |
| R5 | 200×145 | Izakaya | Black | Corner, chest-height 100cm | Warm 2700K amber + ring light |

---

## What NOT to Build

- No booking/reservation system — the venue is walk-in, no reservations at all
- No user accounts or authentication
- No gallery/portfolio page (home + About + Contact only — no other routes)
- No blog or CMS
- No pricing page — pricing is communicated at booking
- No chat widget or contact form
- No cookie banner (no tracking cookies needed for a static awareness page)

---

## File Structure Suggestion

```
anotherbooth-web/
├── public/
│   ├── fonts/              # Self-hosted Outfit, Space Mono, Noto Sans JP
│   ├── og-image.png        # Placeholder 1200×630
│   └── favicon.ico         # Placeholder
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, font loading, metadata
│   │   └── page.tsx        # Single landing page
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Rooms.tsx       # Room card grid
│   │   ├── HowItWorks.tsx  # 4-step flow
│   │   ├── Stats.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── GrainOverlay.tsx
│   │   └── CursorGlow.tsx
│   ├── styles/
│   │   └── globals.css     # CSS variables, base styles
│   └── lib/
│       └── constants.ts    # Colors, copy, room data
├── another-booth-landing.html  # Original design prototype (reference only)
├── CLAUDE.md               # This file
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Development Workflow

1. Read this file first. Then read `another-booth-landing.html` for the visual reference.
2. Scaffold the project with Next.js + Tailwind.
3. Implement section by section, matching the HTML prototype exactly for visual fidelity.
4. Add scroll animations and micro-interactions.
5. Run Lighthouse audit and fix any issues.
6. Deploy to Vercel/Cloudflare for preview.

---

## Brand Quick Reference

- **Name**: Another Booth (not "Another Room")
- **Katakana**: アナザーブース
- **Location**: Orchard Plaza, Level 5, #05-50, 150 Orchard Road, Singapore (fifth floor — not underground)
- **Hours**: 10AM–3AM daily
- **Entry**: Walk-in, no booking/appointment
- **Capacity**: 2–4 guests per session
- **Rooms**: 4 themed photobooth rooms + 1 vanity/utility room
- **Aesthetic**: Editorial, moody, dark-luxe, Japanese-inflected, paparazzi flash energy
- **Website tone**: Confident, minimal copy, no exclamation marks, no "fun for the whole family" energy. Speak like a fashion brand, not a tourist attraction.