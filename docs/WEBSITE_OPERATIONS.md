# OneAI Labs website operations

This document is the canonical runbook for routes, deployment configuration, release
validation and rollback of the corporate website.

Last reviewed: 28 September 2026.

## Canonical routes

| Purpose | English route | Chinese route |
| --- | --- | --- |
| Homepage | `/` | `/zh` |
| Platform | `/platform` | `/zh/platform` |
| OneAI Core | `/core` | `/zh/core` |
| OneForge | `/forge` | `/zh/forge` |
| Agent systems | `/agent-os` | `/zh/agent-os` |
| TheOne | `/theone` | `/zh/theone` |
| OneMission | `/mission` | `/zh/mission` |
| OneField | `/field` | `/zh/field` |
| Independent evidence | `/evidence` | `/zh/evidence` |
| Products | `/products` | `/zh/products` |
| 30-day pilot | `/pilot` | `/zh/pilot` |
| Company | `/company` | `/zh/company` |
| Careers | `/careers` | `/zh/careers` |
| Contact | `/contact` | `/zh/contact` |

The full generated route list lives in `app/sitemap.ts`.

## Compatibility redirects

Common guessed or historical URLs are permanently redirected:

| Alias | Destination |
| --- | --- |
| `/docs` | `https://app.oneai.network/docs` |
| `/about` | `/company` |
| `/oneai-core` | `/core` |
| `/agent-systems` | `/agent-os` |
| `/oneforge` | `/forge` |
| `/onevideo-studio` | `/video` |

English and `/zh`-prefixed variants are covered in `next.config.ts`. Careers has a
real status page and is not redirected.

## Deployment configuration

Public configuration:

```ini
NEXT_PUBLIC_APP_URL=https://app.oneai.network
NEXT_PUBLIC_API_URL=https://api.oneai.network
NEXT_PUBLIC_ONE_MISSION_URL=https://onemission-agent-production.up.railway.app/
NEXT_PUBLIC_ONE_CLAW_URL=https://oneclaw-production.up.railway.app/
NEXT_PUBLIC_GA_ID=<optional Google Analytics measurement ID>
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<optional Search Console value>
```

Server-only evidence integration:

```ini
ONEFORGE_API_URL=<OneForge API base URL>
ONEFORGE_SERVICE_TOKEN=<read-only evidence token>
```

Never expose service tokens with a `NEXT_PUBLIC_` prefix.

## Release gate

Run from the repository root:

```bash
npm ci
npm run check
npm audit --omit=dev
git diff --check
```

`npm run check` executes TypeScript, ESLint and the production build.

## Post-deploy verification

1. Confirm the deployment provider reports success for the exact commit SHA.
2. Confirm `/`, `/zh`, `/pilot`, `/zh/pilot`, `/company`, `/careers`, `/sitemap.xml`
   and `/opengraph-image` return 200.
3. Confirm every compatibility alias returns a permanent redirect to its canonical
   destination.
4. Confirm English/Chinese navigation preserves the intended route.
5. Confirm OneMission, OneClaw and OneField links resolve to their production surfaces.
6. Confirm `info@oneailabs.ai` appears in the footer and contact flow.
7. Confirm the contact form requires privacy consent. Do not submit a live test without
   authorization because it sends a real external message.
8. Confirm response headers include clickjacking, MIME-sniffing, referrer and browser
   permission protections.

## Rollback

Rollback when navigation, locale routing, contact submission, compatibility redirects
or any platform hand-off fails. Use the deployment provider's previous known-good
deployment, then revert or fix forward in Git. Record the failed commit, observed
symptom and verification evidence in the release note.
