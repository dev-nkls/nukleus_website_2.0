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
  - **AWS account:** Nukleus (009160072854)
  - **Region:** us-east-2 (Ohio)
  - **Amplify app name / ID:** `nukleus_website_2.0` / `dozwvccrxzlf2`
  - **Default deploy URL:** https://main.dozwvccrxzlf2.amplifyapp.com (live until DNS cuts over to nukleus.ai)
- **Domain:** nukleus.ai (registered at GoDaddy; DNS will point at Amplify)
- **Design system:** Tokens come from Claude Design (claude.ai). Paste exports into `src/app/globals.css` under the existing `:root` / `.dark` blocks.

## Layout

```
src/
  app/
    icon.svg                  # auto-served by Next as the favicon (mark-only crop)
    layout.tsx                # root metadata + chrome (SiteHeader / SiteFooter wrap all pages)
    globals.css               # Tailwind v4 + shadcn CSS vars + brand-* tokens
    page.tsx                  # home — full lockup hero
    services/page.tsx         # /services — placeholder
    approach/page.tsx         # /approach — placeholder
    about/page.tsx            # /about — placeholder
    contact/page.tsx          # /contact — placeholder
  components/
    site-header.tsx           # mark + "NUKLEUS" wordmark + nav
    site-footer.tsx           # mark + nav + © line
    page-placeholder.tsx      # shared placeholder body for inner routes
    ui/                       # shadcn primitives (do not hand-edit)
  lib/                        # utils
public/
  brand/
    nukleus_logo_2026.png                  # full lockup (mark + wordmark) — used in hero
    nukleus_mark.svg                       # mark-only, tight square viewBox — used in header/footer & as icon source
    nukleus_particle_aligned.svg           # original full-canvas variant (kept for reference)
    nukleus_particle_aligned_cropped.svg   # full-canvas variant with red underline (kept for reference)
docs/
  PLAN.md      # high-level plan & decisions for collaborators
amplify.yml    # Amplify Hosting build spec
```

### Site map

`/`, `/services`, `/approach`, `/about`, `/contact`. The four inner routes use `<PagePlaceholder>` until real content lands. `SiteHeader` and `SiteFooter` are mounted in `app/layout.tsx` so every page gets the chrome automatically — pages should render only their unique section content (no wrapping `<main>`; the layout provides one).

### Brand assets

- Mark + wordmark lockup (PNG): `public/brand/nukleus_logo_2026.png` — used full-size in the home hero
- Header mark (SVG): `public/brand/nukleus_mark.svg` — true mark-only crop (square viewBox `100 20 400 400`, bg rect / wordmark / underline stripped). Rendered small (36×36) in the header next to a separate "NUKLEUS" text label.
- Reference variants (not currently referenced from code, kept as source-of-truth assets): `public/brand/nukleus_particle_aligned.svg` (original full canvas) and `nukleus_particle_aligned_cropped.svg` (same canvas + red underline).
- Favicon: `src/app/icon.svg` (Next auto-detects this filename — no `<link>` tag needed). Identical content to `public/brand/nukleus_mark.svg`. Regenerate both files together with the same `sed` recipe when the source SVG changes.
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
