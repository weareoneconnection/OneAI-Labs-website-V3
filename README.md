# OneAI Labs Website

A production-ready Next.js + TypeScript + Tailwind CSS website for OneAI Labs.

## Positioning

OneAI Labs is a commercial website focused on:

- OneAI Core: AI SaaS Operating Layer
- OneAI Agent OS: OneAI + OneAI Bot + OneClaw
- Product matrix: Bot, OneClaw, Trading OS, Construction OS, OneMission, OneField
- Conversion: Launch App, Request Demo, API access

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

## Configure Links

Edit `lib/constants.ts`:

```ts
export const site = {
  appUrl: "https://oneai-saas-web-production.up.railway.app",
  apiUrl: "https://api.oneai.network",
  waocUrl: "https://waoc.io",
  email: "info@weareoneconnection.com"
};
```

When your custom domain is ready, change:

```ts
appUrl: "https://app.oneai.network"
```

## Route Structure

- `/` - OneAI Labs commercial homepage
- `/core` - OneAI Core details
- `/agent-os` - OneAI Agent OS details
- `/studio` - OneAI Studio
- `/video` - OneVideo Studio (AI short-drama OS)
- `/products` - Product matrix
- `/use-cases` - Use cases
- `/developers` - API / developer page
- `/pricing` - Early access pricing
- `/company` - Company page
- `/contact` - Contact / demo request
- `/trading` - OneAI Trading OS
- `/construction` - OneAI Construction OS
- `/mission` - OneMission
- `/field` - OneField

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
NEXT_PUBLIC_GA_ID=     # Google Analytics measurement ID (G-XXXXXXXXXX)
```

Analytics only loads when `NEXT_PUBLIC_GA_ID` is set, so local and preview
builds stay clean.

## SEO

- Every route sets its own title/description/canonical via `pageMetadata()` in `lib/seo.ts`.
- Favicon and OG image are generated at build time from `app/icon.tsx` and `app/opengraph-image.tsx` — no binary assets to maintain.
- `Organization` JSON-LD ships from `app/layout.tsx` using the real registration details in `lib/constants.ts`.

## Next Steps

1. Replace mockup placeholders with real screenshots.
2. Bind the app URL to `app.oneai.network`.
3. Set `NEXT_PUBLIC_GA_ID` in the production environment.
4. Add real pricing when ready.
5. Deepen the vertical pages (`/trading`, `/construction`, `/mission`, `/field`) with real scenarios and screenshots.
