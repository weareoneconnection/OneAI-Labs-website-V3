# OneAI Labs V5 commercial launch record

Last reviewed: 30 October 2026

## 1. Repository and production audit

| Item | Audited result | Evidence / boundary |
| --- | --- | --- |
| GitHub repository | `https://github.com/weareoneconnection/OneAI-Labs-website-V3` | `origin` remote in this checkout |
| Production baseline | `origin/main` at the start of this change | The checkout was on `main`; no production deploy API was available in the repository |
| V5 branch | `feature/v5-global-commercial-launch` | Current local release branch; it must not be merged without review |
| Vercel project | `one-ai-labs-website-v3` (`prj_6dtDkjg1NGJDCBeIEHqa1sEGsCUU`) | Vercel account `waoc`, team `weareoneconnections-projects`; production URL is `https://www.oneailabs.ai`; no project metadata or token is committed |
| Corporate canonical URL | `https://www.oneailabs.ai` | `lib/constants.ts`, metadata, sitemap and robots |

The release is intentionally based on the existing Next.js App Router architecture. It does
not rewrite the application, add a backend, or alter Core/OneForge billing behavior.

## 2. Existing architecture and source-of-truth map

- Next.js `16.4.3`, React `19.2.6`, TypeScript and Tailwind CSS.
- Locale routing is `/` for English and `/zh` for Chinese, rewritten internally by `proxy.ts`.
- Page metadata is generated from `lib/seo.ts` and the locale layout.
- Navigation is defined in `data/nav.ts`; product maturity and public endpoints are in
  `data/products.ts`; Core plan copy is in `data/pricing.ts`.
- The seven platform systems remain separate: OneAI Core, OneForge, TheOne, OneMission,
  OneClaw, OneField and Independent Verifier.
- `/evidence` reads the public OneForge evidence endpoint only when both server-only
  `ONEFORGE_API_URL` and `ONEFORGE_SERVICE_TOKEN` exist. Otherwise it renders the dated,
  hand-checked snapshot in `lib/evidence.ts` and labels it as such.
- Contact forms POST to the configured Formspree endpoint in `lib/constants.ts`. The site
  does not proxy or transform form submissions.
- Pricing and product data in this repository are maintained configuration, not a claim that
  the marketing site is the billing authority. The Core application remains the source of
  truth for entitlements, enforcement and invoices.

## 3. V5 page and experience changes

- Homepage keeps the canonical line **From Intelligence to Verified Outcomes** and adds a
  real product-oriented, read-only Agent Mission Demo after the user entry lanes.
- Top-level navigation now says **Industry Products**, **Enterprise**, and **Developers**;
  platform systems and their existing ownership boundaries are unchanged.
- `/mission` also exposes the same demo next to the OneMission runtime explanation so the
  interactive experience is not a decorative homepage-only module.
- `/theone` now shows the official product preview, dated product-inventory source note,
  browser/download entry points and ten capability links; product counts are explicitly
  labelled as inventory, not engineering benchmarks or customer outcomes.
- The demo has three scenarios: Software Engineering, Enterprise Operations and Construction
  Intelligence. Each presents Goal → Plan → Approval → Execution → Independent Verification
  → Evidence.
- Demo state is local React state only. The data in `data/mission-demo.ts` is a static,
  redacted simulation. It contains no customer identifiers, credentials, production API
  calls, external writes, benchmark or certification claim.
- `/pricing` now explains subscription fee, included request allowance, Cost Guard meaning and
  overage boundary. It explicitly does not invent automatic overage billing; the Core app's
  live plan enforcement and billing terms remain authoritative.
- Hero, page-level CTA, developer, pricing and pilot paths emit conversion events without
  sending form fields or message content to analytics.
- Homepage evidence figures now state their OneForge source, hand-check date and non-live
  status, matching the Evidence page's source discipline.

## 4. Commercial conversion event dictionary

All events are emitted by `lib/analytics.ts`. If `NEXT_PUBLIC_GA_ID` is unset, the site does
not load Google Analytics; a browser `oneai:analytics` event is still dispatched for local
and preview testing.

| Event | Trigger | Safe parameters |
| --- | --- | --- |
| `cta_click` | Page Hero, pricing, demo or other tracked CTA click | `surface`, `source`, `locale`, `destination` |
| `api_signup_click` | OneAI Core / API access link click | `source`, `locale`, `destination` |
| `product_open` | Reserved for product surface links | `product`, `locale`, `destination` |
| `pilot_form_start` | First focus inside the contact/pilot form | `intent`, `locale` |
| `lead_form_submit` | Contact or pilot form submit attempt | `intent`, `locale` |
| `contact_form_success` | Formspree returns a successful response | `intent`, `locale` |
| `contact_form_error` | Formspree/network failure | `intent`, `locale`, optional HTTP `status` |
| `mission_demo_scenario_select` | Demo scenario selection | `scenario`, `locale` |
| `mission_demo_step_select` | Demo stage selection | `scenario`, `stage`, `locale` |
| `pricing_view` | Pricing page mounts | `locale` |

No name, email, company, industry, free-text message, API key, cookie value or credential is
included in this dictionary.

## 5. Evidence and claim policy

- `Demo` means the local interactive simulation described above.
- `Preview` means no public surface yet or a platform-default domain, per
  `docs/COMPANY_REFERENCE.md`.
- `Beta` means a usable public surface without a published SLA.
- `Production` is not inferred from architecture copy; it requires the actual product
  surface and current deployment evidence.
- No customer case study, certification, performance benchmark or independent audit is
  introduced by this release.
- The Evidence page remains honest about API availability, fallback date, rollback evidence
  and uncompleted certifications.

## 6. Verification record

Commands to run from the repository root:

```bash
npm ci
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
git diff --check
```

The repository currently has no configured unit-test or Playwright package script, and no
Lighthouse CI configuration. Those checks must be run in the deployment environment or added
as a separately approved test harness. The local release gate passed after the rebase:
`npm ci`, `npm run check`, `npm audit --omit=dev` and `git diff --check` all passed.
Local production smoke checks also covered the listed routes, compatibility redirects, security
headers, privacy-consent markup, static Demo content and the no-GA fallback. Browser keyboard,
touch, mobile-width and reduced-motion checks remain Preview acceptance work.

Manual acceptance before Preview:

1. Check `/`, `/zh`, `/mission`, `/zh/mission`, `/pricing`, `/zh/pricing`, `/contact`,
   `/zh/contact`, `/sitemap.xml` and `/robots.txt` return successfully.
2. Switch all three demo scenarios and all six stages with keyboard and touch.
3. Confirm no network request is made by the demo when the browser Network panel is open.
4. Confirm external Core, docs, OneMission, OneClaw, OneField and industry links resolve.
5. Confirm the contact form requires privacy consent. Do not submit a live request without
   authorization because the endpoint sends an external message.
6. Validate mobile widths at 375px and 390px, focus visibility, tab order and reduced motion.
7. With `NEXT_PUBLIC_GA_ID` unset, confirm no GA script is injected; with an approved test ID,
   confirm only the dictionary events appear.

## 7. Release, Preview and rollback

This branch has not been pushed and no Pull Request or Vercel Preview URL is claimed here.
The target project is linked locally through ignored `.vercel` metadata, but no deployment token
is committed. Production and Preview public variables are configured; OneForge secrets remain
server-side in Production only. A release owner should:

1. Review this branch and create the Pull Request in GitHub.
2. Connect the PR to Vercel project `one-ai-labs-website-v3` and create a Preview from the PR commit; verify the configured production branch in the Vercel Git settings.
3. Set public variables from `docs/WEBSITE_OPERATIONS.md`; set `ONEFORGE_*` only as server-side
   secrets and use a read-only evidence token.
4. Run the route, locale, link, form, accessibility, mobile and performance acceptance list.
5. Promote only after explicit authorization; do not merge to `main` automatically.

Rollback uses the deployment provider's previous known-good deployment for the exact commit
before this branch. If a fix is required, record the failed SHA, symptom and verification
output, then revert or fix forward in Git. Do not roll back by changing marketing copy to
match backend billing, evidence or production state.

## 8. Known risks

- The Formspree endpoint is an external dependency and was not live-submitted during local
  verification.
- Live Evidence depends on a deployed OneForge endpoint and a valid server-only token; the
  static snapshot is the safe fallback.
- `NEXT_PUBLIC_GA_ID` is optional; funnel reporting is incomplete until an approved property
  is configured.
- Vercel ownership, project linkage and Preview generation require access outside this
  checkout and remain release-owner actions.
