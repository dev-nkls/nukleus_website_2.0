@AGENTS.md

# Nukleus Website (nukleus.ai)

Marketing site for Nukleus. Greenfield rebuild started 2026-04-26 — the prior repo content was abandoned and history was force-pushed to a clean slate.

**Positioning:** Nukleus designs tailor-made AI systems for businesses to solve problems and scale. Core promise: quality, speed, value-based pricing. Audience: businesses (not developers, not consumers). Tone: confident, bold, technical-but-approachable for business buyers.

**Tagline (locked 2026-04-26):**
- Headline (h1): *Tailor-made AI systems, built around your business.*
- Sub-head: *Custom AI, shipped fast, priced on outcomes.*
- Page title: *Nukleus — Tailor-made AI for business*

## Stack

- **Framework:** Next.js (App Router, TypeScript) — scaffolded with `create-next-app` (Turbopack enabled)
- **Styling:** Tailwind CSS v4 (`src/app/globals.css`)
- **Components:** shadcn/ui (`src/components/ui/`, neutral base color, lucide icons). Add components with `npx shadcn@latest add <name>`.
- **Path alias:** `@/*` → `src/*`
- **Hosting:** AWS Amplify Hosting, auto-deploy from `main` (see `amplify.yml`)
- **Domain:** nukleus.ai (registered at GoDaddy; DNS will point at Amplify)
- **Design system:** Tokens come from Claude Design (claude.ai). Paste exports into `src/app/globals.css` under the existing `:root` / `.dark` blocks.

## Layout

```
src/
  app/
    icon.svg          # auto-served by Next as the favicon (cropped mark)
    layout.tsx        # root metadata (title template, OG/Twitter)
    page.tsx          # home — placeholder hero, logo + "Coming soon"
    globals.css       # Tailwind v4 + shadcn CSS vars
  components/
    site-header.tsx   # logo mark + "NUKLEUS" wordmark
    ui/               # shadcn primitives (do not hand-edit)
  lib/                # utils
public/
  brand/
    nukleus_logo_2026.png                  # full lockup (mark + wordmark) — used in hero
    nukleus_particle_aligned.svg           # original mark variant (kept; not currently referenced)
    nukleus_particle_aligned_cropped.svg   # current header + favicon source (mark + wordmark + red underline)
docs/
  PLAN.md      # high-level plan & decisions for collaborators
amplify.yml    # Amplify Hosting build spec
```

### Brand assets

- Mark + wordmark lockup (PNG): `public/brand/nukleus_logo_2026.png` — used full-size in the home hero
- Header + favicon source (SVG): `public/brand/nukleus_particle_aligned_cropped.svg` — full lockup at canvas size 680×510 (mark + wordmark + red underline). Rendered small (36×36) in the header next to a separate "NUKLEUS" text label.
- Original mark SVG (kept for reference): `public/brand/nukleus_particle_aligned.svg` — same composition without the red underline.
- Favicon: `src/app/icon.svg` (Next auto-detects this filename — no `<link>` tag needed). Derived from the cropped SVG with the bg rect, wordmark text, and red underline stripped, and a square viewBox `100 20 400 400` to focus on the mark. Regenerate when the source SVG changes.
- Brand tokens are wired as CSS vars in `src/app/globals.css` (mapped via `@theme inline` so `bg-brand`, `text-brand`, `bg-brand-hot`, `bg-brand-deep`, `bg-surface` work as Tailwind utilities). Light-mode hex placeholders sampled from the logo: brand `#a01818`, brand-hot `#d40d0d`, brand-deep `#5c0000`, surface `#f8f8fc`. Dark mode lifts brand to `#c42626` / `#ee3636` and flips surface to `#0e0e18`. **These are placeholders** — replace wholesale when Claude Design tokens land.

## Local dev

```
npm run dev      # http://localhost:3000 (Turbopack)
npm run build
npm run start
npm run lint
```

## Conventions

- Server Components by default; only mark `"use client"` when interactivity is needed.
- Co-locate route-specific UI in the route folder; promote to `src/components/` only when reused.
- Don't hand-edit `src/components/ui/*` shadcn primitives — re-run the shadcn CLI to update.
- **Keep this file fresh.** Every push that adds components/pages/conventions/scripts/env/dirs, or that changes deploy/design-token state, should bundle a `CLAUDE.md` update in the same commit. If the change moves the roadmap, update `docs/PLAN.md` too (flip checklist items, log decisions in the table).
- See `docs/PLAN.md` for the project roadmap and outstanding decisions.
