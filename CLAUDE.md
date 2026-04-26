@AGENTS.md

# Nukleus Website (nukleus.ai)

Marketing site for Nukleus. Greenfield rebuild started 2026-04-26 — the prior repo content was abandoned and history was force-pushed to a clean slate.

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
    nukleus_logo_2026.png         # full lockup (mark + wordmark) — used in hero
    nukleus_particle_aligned.svg  # particle mark only — used in header
docs/
  PLAN.md      # high-level plan & decisions for collaborators
amplify.yml    # Amplify Hosting build spec
```

### Brand assets

- Mark + wordmark lockup: `public/brand/nukleus_logo_2026.png`
- Mark-only (particle), source SVG: `public/brand/nukleus_particle_aligned.svg`
- Favicon: `src/app/icon.svg` (Next auto-detects this filename — no `<link>` tag needed). Regenerate from the source SVG if the mark changes; viewBox is cropped (`100 20 400 400`) and the off-white background rect + wordmark are stripped.
- Brand red (placeholder until Claude Design tokens land): `#cc1010` mid / `#d40d0d` hot — pulled from the SVG gradients.

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
