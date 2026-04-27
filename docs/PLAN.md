# Nukleus Website — Plan

Living document for the rebuild of nukleus.ai. Update as decisions land.

**Status:** Live at https://www.nukleus.ai (verified 2026-04-27).

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

## Status

- [x] Scaffold Next.js + Tailwind + shadcn
- [x] Add Amplify build spec
- [x] Document stack in `CLAUDE.md` + this plan
- [x] Drop logo into `public/brand/` and wire into header + favicon
- [x] Lock tagline + provisional brand palette (placeholders in `globals.css` until Claude Design tokens land)
- [x] Lock site map and scaffold routes + nav + footer (placeholders in inner routes)
- [ ] Generate design system in Claude Design
- [ ] Paste tokens into `src/app/globals.css`
- [ ] Replace placeholder content on each route with real copy
- [ ] Decide on contact form backend (Amplify / Resend / other)
- [ ] Decide on analytics (Plausible / PostHog / none)
- [x] Connect Amplify Hosting to GitHub `main` (us-east-2 / Ohio)
- [x] Add `nukleus.ai` + `www.nukleus.ai` custom domain in Amplify Console
- [x] Point GoDaddy DNS at Amplify (SSL validation CNAME + www CNAME + apex forwarding)
- [x] Wait for Amplify SSL validation + domain activation
- [x] Verify `https://www.nukleus.ai` loads with valid SSL and apex 301-forwards (verified 2026-04-27)

## Open questions

- **Content.** Source of marketing copy for `/services`, `/approach`, `/about`, `/contact` — write fresh, or adapt from elsewhere?
- **CMS.** Static MDX in-repo, or headless CMS (Sanity, Contentful)? Start static; revisit if non-devs need to edit.
- **Forms.** Contact/lead capture — Amplify backend? Resend + a serverless route? Calendar booking (Cal.com)? TBD.
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
