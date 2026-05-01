# Nukleus Website — Plan

Living document for the rebuild of nukleus.ai. Update as decisions land.

**Status:** Live at https://www.nukleus.ai (verified 2026-04-27). Real design system landed locally 2026-04-28 — pending push.

## Goal

A modern, impressive marketing site for Nukleus at **nukleus.ai**. Built with Claude Code; visual design system sourced from Claude Design.

## Decisions (locked)

| Area | Choice | Date | Notes |
|---|---|---|---|
| Framework | Next.js (App Router, TS) | 2026-04-26 | Leaves room for app features later (auth, dashboards) |
| Styling | Tailwind CSS v4 | 2026-04-26 | Configured via `src/app/globals.css` |
| Components | shadcn/ui (neutral) | 2026-04-26 | lucide icons |
| Hosting | AWS Amplify Hosting | 2026-04-26 | `amplify.yml` at repo root |
| Amplify app + region | App ID `dozwvccrxzlf2` in us-east-2 (Ohio), AWS account `Nukleus` (009160072854) | 2026-04-27 | Default URL `https://main.dozwvccrxzlf2.amplifyapp.com` until custom domain cuts over |
| Domain | nukleus.ai (GoDaddy) | 2026-04-27 | DNS managed at GoDaddy (not Route 53). Email: Microsoft 365 via GoDaddy, untouched |
| Design source | Claude Design (claude.ai) | 2026-04-26 | Tokens pasted into `globals.css` once exported |
| Repo history | Fresh — prior content discarded via force-push | 2026-04-26 | Old project was abandoned |
| Tagline | H1: *Tailor-made AI systems, built around your business.* / sub: *Custom AI, shipped fast, priced on outcomes.* | 2026-04-26 | Layered: clarity-first headline, opinion-first sub-head |
| Brand palette (placeholder) | Red `#a01818` / hot `#d40d0d` / deep `#5c0000` / surface `#f8f8fc` | 2026-04-26 | Sampled from logo gradients; replaced when Claude Design tokens land |
| Site map | `/`, `/services`, `/approach`, `/about`, `/contact` | 2026-04-26 | Five-page B2B marketing structure; placeholder content until real copy lands |
| Canonical URL | `https://www.nukleus.ai` (www); apex `nukleus.ai` 301-forwards to www | 2026-04-27 | Forced by GoDaddy DNS limitation — no ANAME/ALIAS at apex. Apex forwarding is HTTPS via GoDaddy. |
| DNS strategy | Stay on GoDaddy DNS; don't move to Route 53 | 2026-04-27 | Preserves Microsoft 365 email for 4 partners (MX, TXT/SPF, autodiscover etc. all stay) — cutover risk wasn't worth the cleanup |
| Heading font | Fraunces (variable serif, opsz axis, italic) | 2026-04-28 | Approved during Claude Design iteration; loaded via `next/font/google` — no licensed cut needed |
| Visual direction | "Bold" variant from Claude Design | 2026-04-28 | Selected after A/B against a restrained variant. Cinematic hero video (light only), dark manifesto band, industries marquee, hover-reveal services list, flip pillars, timeline. Includes a light↔dark-red theme toggle in the header. |
| Hero video | `public/brand/hero_bg.mp4` (3MB greyscale particle field) | 2026-04-28 | Heavy filter: `grayscale(1) brightness(1.55) contrast(0.78)` + white veil. Hidden in dark-red mode and under `prefers-reduced-motion`. |
| Hero-mark orbit drive | JS (requestAnimationFrame), not CSS keyframes | 2026-05-01 | A CSS `animation-duration` swap on hover re-mapped elapsed-time and snapped the electron to a different angle on hover-out. JS-integrated rotation lerps speed between 30°/s and 300°/s while preserving the current angle. |
| Contact form delivery | `mailto:` handoff (stopgap) | 2026-05-01 | Recipient `NEXT_PUBLIC_CONTACT_EMAIL` (default `hello@nukleus.ai`). No backend / signup needed; form opens user's email client with subject + body prefilled. Replace with Resend or SES + Server Action when an account exists. |
| Header / footer mark rendering | Inline SVG via `<HeaderMark />` (replaces `<Image>`) | 2026-05-01 | Lets CSS recolor `.header-mark-trail circle` to white in `[data-theme="dark-red"]` so the dark-mode lockup reads as red nucleus + red electron + white orbit (matches favicon). Header mark scaled up: 54×54 desktop / 37×37 mobile (was 36 / 28). |

## Status

- [x] Scaffold Next.js + Tailwind + shadcn
- [x] Add Amplify build spec
- [x] Document stack in `CLAUDE.md` + this plan
- [x] Drop logo into `public/brand/` and wire into header + favicon
- [x] Lock tagline + provisional brand palette (placeholders in `globals.css` until Claude Design tokens land)
- [x] Lock site map and scaffold routes + nav + footer (placeholders in inner routes)
- [x] Generate design system in Claude Design (handoff received 2026-04-28)
- [x] Paste tokens into `src/app/globals.css` (full token system + bold-variant component CSS)
- [x] Replace placeholder content on each route with real copy (six services, three pillars, five-phase engagement, four-paragraph about, contact form)
- [x] Push the design-system implementation to `main` (Amplify auto-deploys)
- [x] Mobile polish pass (2026-05-01): hamburger menu, sticky single-host page-bg video, tap-to-flip pillar + timeline cards, hero fits 100vh, eyebrow accent across center-hero pages, horizontal-scroll fix
- [x] Hero-mark orbit fix (2026-05-01): JS-driven rotation so hover speed-up no longer snaps the electron position on hover-out
- [x] Contact page desktop layout (2026-05-01): 1fr 1fr stretch grid so intro card and form panel match in width AND height
- [x] Wire contact form via mailto (2026-05-01): submit opens user's email client prefilled with all fields. Stopgap until SMTP / transactional service lands.
- [x] Header / footer mark dark-mode + scale-up (2026-05-01): `<HeaderMark />` inlines the SVG so dark-red mode shows red nucleus + electron + white orbit; header lockup grew 50% on desktop / 33% on mobile.
- [x] Contact page mobile overflow (2026-05-01): grid columns now use `minmax(0, 1fr)`, inputs forced to `width: 100%; min-width: 0` so two-column field-rows fit narrow phones; field-rows collapse to 1-col below 420px.
- [ ] Dark-mode polish pass (next): audit `html[data-theme="dark-red"]` on every page + new component (panels, mobile menu, tap-to-flip cards) on desktop AND mobile
- [ ] Contact form backend upgrade: replace `mailto:` with Resend / SES + Server Action (env: `RESEND_API_KEY` etc.) so submission works without leaving the page
- [ ] Decide on analytics (Plausible / PostHog / none)
- [x] Connect Amplify Hosting to GitHub `main` (us-east-2 / Ohio)
- [x] Add `nukleus.ai` + `www.nukleus.ai` custom domain in Amplify Console
- [x] Point GoDaddy DNS at Amplify (SSL validation CNAME + www CNAME + apex forwarding)
- [x] Wait for Amplify SSL validation + domain activation
- [x] Verify `https://www.nukleus.ai` loads with valid SSL and apex 301-forwards (verified 2026-04-27)

## Open questions

- **Content.** Source of marketing copy for `/services`, `/approach`, `/about`, `/contact` — write fresh, or adapt from elsewhere?
- **CMS.** Static MDX in-repo, or headless CMS (Sanity, Contentful)? Start static; revisit if non-devs need to edit.
- **Forms.** Contact/lead capture currently no-ops on submit and shows a toast. Pick a real path: Amplify backend? Resend + a serverless route? Calendar booking (Cal.com)? TBD.
- **Analytics.** Plausible / PostHog / GA4 / none?
- **Email SPF.** Current SPF on `nukleus.ai` is `v=spf1 include:secureserver.net -all` — unusual for Microsoft 365 (standard would `include:spf.protection.outlook.com`). Working as-is, but worth auditing if email deliverability issues come up. Out of scope for the website rebuild.

## Deployment

Live at **https://www.nukleus.ai**. Auto-deploy on every push to `main` via AWS Amplify Hosting (build spec: `amplify.yml`).

**DNS layout (at GoDaddy):**
- Apex `nukleus.ai` → 301-forwards to `https://www.nukleus.ai` via GoDaddy domain forwarding (HTTPS auto-provisioned). DNS A records still point to GoDaddy's HTTPS forwarding service IPs.
- `www.nukleus.ai` → CNAME → `d3h2d8y1d1585p.cloudfront.net` (Amplify-managed CloudFront).
- SSL validation CNAME `_76879b64ce8bd83e2f586564776d1ed0` → `_3abc260c858b9f31ed5afb1cd96c5a5f.jkddzztszm.acm-validations.aws` (used by AWS ACM to renew the cert; do not delete).

**Email DNS records (Microsoft 365 via GoDaddy) — untouched:**
- MX `@` → `nukleus-ai.mail.protection.outlook.com` (priority 0)
- TXT `@` → `NETORGFT12495029.onmicrosoft.com` (M365 domain verification)
- TXT `@` → `v=spf1 include:secureserver.net -all` (SPF)
- CNAMEs: `autodiscover`, `email`, `lyncdiscover`, `msoid`, `sip`, `_domainconnect`, `pay`
- SRVs: `_sip._tls`, `_sipfederationtls._tcp`

## Memory

Persistent project context is mirrored in `~/.claude/projects/-Users-ahmedaman-Dev-nukleus-website-2-0/memory/` for future Claude Code sessions, but this `PLAN.md` is the source of truth for human collaborators.
