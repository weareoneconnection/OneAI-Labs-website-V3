# OneAI Labs Website V3 — Launch Candidate

## Strategic decision
V3 is rebuilt from V2 rather than the earlier V3 experiment. It removes the founder-vision section and keeps the company message product-led, enterprise-ready and verifiable.

## New company theme
**From models to missions. One platform for real-world AI.**

The phrase “Build, govern and continuously evolve AI” remains useful as a capability statement, but it is no longer the entire company theme. The new positioning covers:
- AI infrastructure and model access
- capability development and evolution
- agent coordination and governance
- action execution and integrations
- persistent memory and evidence
- creative, enterprise, industry and future physical-AI applications

## Homepage architecture
1. Hero — broader real-world AI platform positioning
2. Operating architecture — upgraded five-system map and feedback loop
3. Market problem — fragmented stack, unified outcome
4. Governed operating loop — Intent → Plan → Act → Verify → Remember → Evolve
5. OneForge — capability lifecycle
6. OneAI Core — commercial AI operations
7. Applications — primary and secondary ecosystem environments
8. Developer platform
9. Trust and security
10. Future-ready architecture — software AI → industry AI → physical AI
11. Final enterprise CTA

## Product ownership model
- OneAI Core: model access, routing, usage, cost and commercial operations
- OneForge: data, training, evaluation, release governance and evolution
- TheOne: planning, policy, approvals and workflow coordination
- OneClaw: tools, integrations, APIs and real-world action runtime
- OneField: memory, evidence, relationships and learning context

## Launch safeguards
- No fabricated customer logos, revenue, usage or performance metrics
- Product maturity labels remain explicit
- Founder narrative removed from homepage
- Existing routes, forms, external URLs and application links retained
- Reduced-motion support added

## Recommended environment variables
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_API_URL
- NEXT_PUBLIC_GA_ID
- NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

## Live evidence (optional)
`/evidence` shows a hand-checked static snapshot until both of these are set, then
switches to a live read from OneForge's control plane — see `lib/evidence.ts`.
- `ONEFORGE_API_URL` — OneForge's API base URL, without a path (e.g.
  `https://api.forge.oneai.network`) — not the web app on forge.oneai.network
- `ONEFORGE_SERVICE_TOKEN` — a service token for a low-privilege reporting account,
  issued from OneForge with `python scripts/issue_service_token.py --email
  website@oneforge.local --org <org> --days 90`. Server-only: never expose this to
  the browser or prefix it with NEXT_PUBLIC_.

The endpoint itself — `GET /api/v1/public/evidence-summary`, returning
`{ audit_total, approved, rejected, rollbacks, as_of }` — now exists in the OneForge
repo (`apps/api/app/api/routes/public.py`, registered in `main.py`, covered by
`apps/api/tests/test_public_evidence.py`, all passing). It still needs to be deployed
to production before a service token issued against prod will have anything to call.
Two remaining steps, both outside this repo and requiring production access this
session does not have:
1. Deploy the OneForge change (build + push, same as any other OneForge release).
2. Issue a production service token and set the two env vars above in Vercel.

## Pre-launch validation
```bash
npm ci
npm run build
```

Then verify:
- `/` and `/zh`
- mobile navigation
- all CTAs and product links
- contact form submission
- Open Graph preview
- canonical/hreflang tags
- Lighthouse performance and accessibility
