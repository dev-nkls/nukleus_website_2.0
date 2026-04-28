@AGENTS.md

# Nukleus Website (nukleus.ai)

Marketing site for Nukleus. **Live at https://www.nukleus.ai** (auto-deploy from `main` via AWS Amplify; apex `nukleus.ai` 301-forwards to www).

Greenfield rebuild started 2026-04-26 — the prior repo content was abandoned and history was force-pushed to a clean slate.

**Positioning:** Nukleus designs tailor-made AI systems for businesses to solve problems and scale. Core promise: quality, speed, value-based pricing. Audience: businesses (not developers, not consumers). Tone: confident, bold, technical-but-approachable for business buyers.

**Tagline (locked 2026-04-26):**
- Headline (h1): *Tailor-made AI systems, built around your business.*
- Sub-head: *Custom AI, shipped fast, priced on outcomes.*
- Page title: *Nukleus — Tailor-made AI for business*

## Stack

- **Framework:** Next.js (App Router, TypeScript) — scaffolded with `create-next-app` (Turbopack enabled)
- **Styling:** Tailwind CSS v4 (`src/app/globals.css`) — tokens + bold-variant component CSS live in this one file
- **Components:** shadcn/ui (`src/components/ui/`, neutral base color, lucide icons). Add components with `npx shadcn@latest add <name>`.
- **Fonts (next/font/google):** Geist Sans (`--font-sans`), Geist Mono (`--font-geist-mono`), **Fraunces** variable serif with italic + opsz axis (`--font-fraunces` → `--font-heading`). Loaded in `src/app/layout.tsx`.
- **Path alias:** `@/*` → `src/*`
- **Hosting:** AWS Amplify Hosting, auto-deploy from `main` (see `amplify.yml`)
  - **AWS account:** Nukleus (009160072854)
  - **Region:** us-east-2 (Ohio)
  - **Amplify app name / ID:** `nukleus_website_2.0` / `dozwvccrxzlf2`
  - **Default deploy URL:** https://main.dozwvccrxzlf2.amplifyapp.com (live until DNS cuts over to nukleus.ai)
- **Domain:** nukleus.ai (registered at GoDaddy; DNS managed at GoDaddy, not Route 53)
  - **Canonical URL:** `https://www.nukleus.ai` (www is canonical because GoDaddy DNS doesn't support ANAME/ALIAS at apex). `https://nukleus.ai` 301-redirects to `https://www.nukleus.ai` via GoDaddy's domain forwarding (HTTPS auto-provisioned by GoDaddy).
  - **DNS records added at GoDaddy for the website:** one CNAME `_76879b64...` → `…acm-validations.aws` (SSL validation), and the existing `www` CNAME edited to point at `d3h2d8y1d1585p.cloudfront.net` (the Amplify-issued CloudFront target).
  - **Records left untouched:** all Microsoft 365 email records (MX → `nukleus-ai.mail.protection.outlook.com`, autodiscover/msoid/lyncdiscover/sip CNAMEs, SRV records, TXT verification + SPF), apex A records, NS/SOA, GoDaddy `_domainconnect`/`pay`/`email` CNAMEs.
- **Design system:** Generated in [Claude Design](https://claude.ai/design) and handed off as a tarball on 2026-04-28 (handoff URL: `https://api.anthropic.com/v1/design/h/SqAfITrNkXCpo1EtFGperg`). The design medium is HTML/CSS prototypes — the tokens, semantic CSS, and bold-variant component classes are translated into `src/app/globals.css`; the prototype's structural decisions are recreated in real React components rather than copied verbatim. Re-run the handoff workflow only if a fresh design pass is needed.

## Layout

```
src/
  app/
    icon.svg                  # auto-served by Next as the favicon (mark-only crop)
    layout.tsx                # root metadata + Geist/Fraunces fonts + chrome wrap
    globals.css               # Tailwind v4 + shadcn vars + Nukleus tokens + bold-variant component CSS
    page.tsx                  # home — bold hero (video bg) + manifesto + industries + services + proof + CTA
    services/page.tsx         # /services — full-page video bg + headline-only hover-reveal rows
    approach/page.tsx         # /approach — full-page video bg + flip pillars + hover-reveal timeline
    about/page.tsx            # /about — prose with red drop cap
    contact/page.tsx          # /contact — centered hero + ContactForm
  components/
    site-header.tsx           # mark + "NUKLEUS" wordmark (19.5px) + nav + ThemeToggle (server)
    site-footer.tsx           # mark + nav + © line (no year)
    hero-video.tsx            # client — video + mesh + veil layers; sets .is-ready when video loads
    scroll-cue.tsx            # client — animated scroll chevron, fades on scroll
    theme-toggle.tsx          # client — toggles html[data-theme="dark-red"] (light ⇄ red-tinted dark)
    contact-form.tsx          # client — form + toast (no backend yet — TBD)
    ui/                       # shadcn primitives (do not hand-edit)
  lib/                        # utils
public/
  brand/
    nukleus_logo_2026.png     # full lockup (mark + wordmark)
    nukleus_mark.svg          # original mark — used in header/footer
    nukleus_mark_clean.svg    # halo-stripped variant — used in home hero (sits cleanly on the video)
    nukleus_mark_padded.svg   # wider-viewBox variant (kept for future hero treatments)
    hero_bg.mp4               # cinematic particle-field hero video (greyscale-filtered, light mode only)
docs/
  PLAN.md      # high-level plan & decisions for collaborators
amplify.yml    # Amplify Hosting build spec
```

### Site map

`/`, `/services`, `/approach`, `/about`, `/contact`. `SiteHeader` and `SiteFooter` are mounted in `app/layout.tsx` so every page gets the chrome automatically — pages render only their unique section content (no wrapping `<main>`; the layout provides one).

### Brand assets

- **Full lockup PNG:** `public/brand/nukleus_logo_2026.png` — kept for collateral; not currently used on the site.
- **Header / footer mark:** `public/brand/nukleus_mark.svg` — original mark with the baked-in atmospheric halo. Rendered ~36×36 in the header and ~24×24 in the footer.
- **Home hero mark:** `public/brand/nukleus_mark_clean.svg` — same mark with the soft white-ish atmospheric ellipse stripped, so it sits directly on the video without a visible boundary.
- **Padded mark variant:** `public/brand/nukleus_mark_padded.svg` — wider viewBox so the outer particles aren't clipped. Kept for future hero treatments.
- **Hero video:** `public/brand/hero_bg.mp4` — 3MB cinematic particle field. Greyscale-filtered + brightened via CSS; visible in light mode only (hidden in `data-theme="dark-red"` and disabled under `prefers-reduced-motion`).
- **Favicon:** `src/app/icon.svg` (Next auto-detects). Mirrors `nukleus_mark.svg` — regenerate both together if the mark changes.

### Design tokens

All tokens live in `src/app/globals.css`:
- `:root` — light mode (Nukleus seed: brand `#a01818`, hot `#d40d0d`, deep `#5c0000`, surface `#f8f8fc`, ink ramp from `#ffffff` to `#06060c`).
- `.dark` — standard dark (kept for shadcn primitives; not user-toggleable yet).
- `html[data-theme="dark-red"]` — bold-variant red-tinted dark, toggled by `ThemeToggle` in the header. Hides the hero video and shifts surfaces to deep maroon.
- Tailwind utilities `bg-brand`, `text-brand`, `bg-brand-hot`, `bg-brand-deep`, `bg-surface`, `font-heading` etc. are wired via `@theme inline`.

### Bold-variant component classes

The bold variant brought a lot of opinionated CSS that pages reach into directly via plain class names (rather than utility soup). Anything new should follow this pattern — define the class in `globals.css`, apply it in TSX:

- `.hero.bold` — full-viewport hero with `<HeroVideo />` (video + mesh + veil layers).
- `.manifesto` — dark gradient band with oversized italic Fraunces blockquote (home page).
- `.industries-band` + `.industries-track` — scrolling marquee of industries served.
- `.services-grid.bold` — 6 tiles with oversized italic outlined numerals (home page).
- `.proof.bold` — italic blockquote with giant " backdrop (home pricing).
- `.cta-band.bold` — full-bleed dark red CTA above footer (home page).
- `.services-page-bold` / `.approach-page-bold` — wrap the whole page so the video backdrop spans hero + content.
- `.service-row` — headline-only row that floods red on hover and reveals the description.
- `.approach-pillars` + `.pillar-inner` / `.pillar-front` / `.pillar-back` — flip-card pillars (front: numeral + title; back: red card with description).
- `.timeline` + `.timeline-step` — vertical timeline with red connector; description appears as a red callout on hover.
- `.about-prose` — single-column prose with red Fraunces drop cap on `p.first`.
- `.scroll-cue` — bottom-of-hero chevron that fades out on scroll.

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
