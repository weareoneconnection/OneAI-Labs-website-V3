# OneAI Labs Website V2

## What changed

- Repositioned the homepage around the **AI Capability Operating Platform** narrative.
- Added a premium hero with a five-layer capability-system visual.
- Added the unified platform stack: OneAI Core, OneForge, TheOne, OneClaw and OneField.
- Added a direct competitive-positioning section.
- Elevated OneForge as a strategic infrastructure product.
- Reorganized vertical applications as proof points of the shared platform.
- Added a long-term roadmap from enterprise AI to Physical AI.
- Rebuilt the final CTA around enterprise conversion.
- Preserved existing product pages, API destinations and operational links.

## Files added

- `components/visuals/CapabilityOrb.tsx`
- `components/sections/PlatformStackSection.tsx`
- `components/sections/WhyWinSection.tsx`
- `components/sections/ApplicationsSection.tsx`
- `components/sections/RoadmapSection.tsx`

## Files updated

- `app/[locale]/page.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/FinalCTASection.tsx`
- `components/layout/Navbar.tsx`
- `app/globals.css`

## Deployment

Use the existing environment variables and deployment workflow. No API contract or backend route was changed.

## Validation note

A production build could not be completed in the current execution environment because its internal npm registry returned a 404 while resolving ESLint dependencies. Run the following in your normal GitHub/Railway environment:

```bash
npm ci
npm run build
```
