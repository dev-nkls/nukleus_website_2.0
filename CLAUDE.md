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
  app/         # App Router routes
  components/
    ui/        # shadcn primitives
  lib/         # utils
public/
  brand/       # logos, favicons (drop logo here)
docs/
  PLAN.md      # high-level plan & decisions for collaborators
amplify.yml    # Amplify Hosting build spec
```

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
- See `docs/PLAN.md` for the project roadmap and outstanding decisions.
