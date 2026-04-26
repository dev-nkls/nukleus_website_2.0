# Nukleus Website — Plan

Living document for the rebuild of nukleus.ai. Update as decisions land.

## Goal

A modern, impressive marketing site for Nukleus at **nukleus.ai**. Built with Claude Code; visual design system sourced from Claude Design.

## Decisions (locked)

| Area | Choice | Date | Notes |
|---|---|---|---|
| Framework | Next.js (App Router, TS) | 2026-04-26 | Leaves room for app features later (auth, dashboards) |
| Styling | Tailwind CSS v4 | 2026-04-26 | Configured via `src/app/globals.css` |
| Components | shadcn/ui (neutral) | 2026-04-26 | lucide icons |
| Hosting | AWS Amplify Hosting | 2026-04-26 | `amplify.yml` at repo root |
| Domain | nukleus.ai (GoDaddy) | — | DNS to be pointed at Amplify |
| Design source | Claude Design (claude.ai) | 2026-04-26 | Tokens pasted into `globals.css` once exported |
| Repo history | Fresh — prior content discarded via force-push | 2026-04-26 | Old project was abandoned |

## Status

- [x] Scaffold Next.js + Tailwind + shadcn
- [x] Add Amplify build spec
- [x] Document stack in `CLAUDE.md` + this plan
- [ ] Drop logo into `public/brand/`
- [ ] Generate design system in Claude Design
- [ ] Paste tokens into `src/app/globals.css`
- [ ] Build out marketing pages (home, product, about, contact — TBD)
- [ ] Connect Amplify Hosting to GitHub `main`
- [ ] Point GoDaddy DNS at Amplify (A/CNAME records per Amplify console)
- [ ] Verify SSL + custom domain in Amplify

## Open questions

- **Site map.** What pages do we need at launch? (home + about + contact at minimum?)
- **Content.** Source of marketing copy — write fresh, or adapt from elsewhere?
- **CMS.** Static MDX in-repo, or headless CMS (Sanity, Contentful)? Start static; revisit if non-devs need to edit.
- **Forms.** Contact/lead capture — Amplify backend? Resend + a serverless route? TBD.
- **Analytics.** Vercel Analytics is out (we're on Amplify). Plausible or PostHog?

## Deployment notes

The Amplify build spec runs `npm ci && npm run build` and serves `.next`. For the custom domain:
1. In Amplify Console → Hosting → Custom domains → add `nukleus.ai` and `www.nukleus.ai`.
2. Amplify provides DNS records. In GoDaddy DNS, add the CNAME(s) Amplify specifies (and the apex ANAME/ALIAS if Amplify supports it on this domain — otherwise use the provided A records).
3. Wait for SSL provisioning.

## Memory

Persistent project context is mirrored in `~/.claude/projects/-Users-ahmedaman-Dev-nukleus-website-2-0/memory/` for future Claude Code sessions, but this `PLAN.md` is the source of truth for human collaborators.
