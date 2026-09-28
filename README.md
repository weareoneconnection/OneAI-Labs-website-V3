# OneAI Labs Website

A production Next.js + TypeScript + Tailwind CSS website for OneAI Labs.

The site is the public map of the OneAI operating platform, its applied businesses,
evidence standard and enterprise engagement path. Company facts live in
[`docs/COMPANY_REFERENCE.md`](docs/COMPANY_REFERENCE.md); routes, deployment and
release validation live in [`docs/WEBSITE_OPERATIONS.md`](docs/WEBSITE_OPERATIONS.md).

## Positioning

OneAI Labs is a commercial website focused on:

- OneAI Core: AI SaaS Operating Layer
- Seven-system platform: Core, Forge, TheOne, OneMission, OneClaw, OneField and Independent Verifier
- Applied businesses: OneAI Construction and OneVideo Studio
- Conversion: product access, assessment and a bounded 30-day governed agent pilot

## Quick Start

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Why `dev` and `build` pass `--webpack`

Turbopack derives its chunk names from the absolute project path and then slices
that string by byte offset. When the path contains non-ASCII characters the slice
can land inside a multi-byte character and Turbopack panics:

```txt
start byte index 9 is not a char boundary; it is inside '核'
```

This checkout currently lives under a directory with Chinese characters, which
triggers the panic on both `next dev` and `next build`. The webpack builder has no
such assumption, so `dev` and `build` pin `--webpack` and both work as they are.

The real fix is to move the checkout to a path with no non-ASCII characters. Once
that happens, drop `--webpack` from both scripts — Turbopack is meaningfully
faster, and `npm run dev:turbopack` is kept so the panic can be re-checked without
editing the scripts.

## Source-of-truth map

| Concern | Canonical source |
| --- | --- |
| Legal identity and official email | `lib/constants.ts` |
| Company position and claims boundaries | `docs/COMPANY_REFERENCE.md` |
| Product ownership, maturity and public links | `data/products.ts` |
| Navigation | `data/nav.ts` |
| Canonical routes | `app/sitemap.ts` |
| Compatibility redirects and security headers | `next.config.ts` |
| Release process | `docs/WEBSITE_OPERATIONS.md` |

V2 and V3 notes are historical release records. Do not use them as current product
or company documentation.

## Configure public links

Edit `lib/constants.ts`:

```ts
export const site = {
  appUrl: "https://app.oneai.network",
  apiUrl: "https://api.oneai.network",
  oneMissionUrl: "https://onemission-agent-production.up.railway.app/",
  oneClawUrl: "https://oneclaw-production.up.railway.app/",
  oneFieldUrl: "https://www.waoc.network/",
  email: "info@oneailabs.ai"
};
```

## Route Structure

- `/` - OneAI Labs commercial homepage
- `/core` - OneAI Core details
- `/forge` - OneForge capability control plane
- `/agent-os` - Agent systems overview
- `/theone` - TheOne governed Agent OS
- `/mission` - OneMission durable work runtime
- `/field` - OneField shared reality layer
- `/evidence` - Independent evidence and verification
- `/studio` - OneAI Studio
- `/video` - OneVideo Studio (AI short-drama OS)
- `/products` - Product matrix
- `/developers` - API / developer page
- `/pricing` - Core plans and enterprise pilot entry
- `/pilot` - 30-day governed agent pilot
- `/company` - Company page
- `/careers` - Current hiring status
- `/contact` - Contact and pilot assessment
- `/trading` - OneAI Trading OS
- `/construction` - OneAI Construction OS
- `/privacy` - Privacy policy
- `/terms` - Terms of use

## Design Direction

- Dark navy / black background
- Premium gold + electric blue accents
- SaaS / AI infrastructure style
- Commercial, clean, credible
- Light WAOC mention only; ecosystem pages belong on `waoc.io`

## Environment Variables

All optional — each falls back to a sensible default when unset.

```bash
NEXT_PUBLIC_APP_URL=   # OneAI Core app URL
NEXT_PUBLIC_API_URL=   # OneAI API URL
NEXT_PUBLIC_ONE_MISSION_URL= # OneMission public URL
NEXT_PUBLIC_ONE_CLAW_URL=    # OneClaw public URL
NEXT_PUBLIC_GA_ID=     # Google Analytics measurement ID (G-XXXXXXXXXX)
```

Analytics only loads when `NEXT_PUBLIC_GA_ID` is set, so local and preview
builds stay clean.

## SEO

- Every route sets its own title/description/canonical via `pageMetadata()` in `lib/seo.ts`.
- Favicon and OG image are generated at build time from `app/icon.tsx` and `app/opengraph-image.tsx` — no binary assets to maintain.
- `Organization` JSON-LD ships from `app/layout.tsx` using the real registration details in `lib/constants.ts`.

## Release

```bash
npm ci
npm run check
npm audit --omit=dev
git diff --check
```

After deployment, follow the exact route, redirect, hand-off and header checks in
`docs/WEBSITE_OPERATIONS.md`.
