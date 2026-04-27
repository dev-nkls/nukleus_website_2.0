# Nukleus Website

Marketing site for Nukleus — live at **https://www.nukleus.ai**.

Tailor-made AI systems, built around your business. Custom AI, shipped fast, priced on outcomes.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (neutral, lucide icons)
- **Hosting:** AWS Amplify (us-east-2 / Ohio), auto-deploy from `main`
- **Domain:** nukleus.ai (GoDaddy DNS, GoDaddy domain forwarding for apex → www)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # production build
npm run lint
```

## Documentation

- [`CLAUDE.md`](./CLAUDE.md) — full stack reference, conventions, brand assets, DNS state. Read this first if you're new to the repo.
- [`docs/PLAN.md`](./docs/PLAN.md) — living plan, locked decisions, status checklist, open questions.

## Deployment

Pushing to `main` triggers an auto-build on AWS Amplify Hosting. Build spec lives in [`amplify.yml`](./amplify.yml).
