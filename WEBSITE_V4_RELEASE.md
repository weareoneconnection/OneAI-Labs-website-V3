# OneAI Labs Website V4 release

This release changes the corporate site from a product catalogue into the public map of the One operating platform.

## The public operating model

- OneAI Core supplies model access, routing and commercial control.
- OneForge governs capability evaluation, release and rollback.
- TheOne turns goals into governed decisions.
- OneMission owns durable mission and task state.
- OneClaw performs approved actions.
- Independent verification checks results outside the actor that produced them.
- OneField preserves tenant-scoped context, consent, receipts and shared evidence.

OneMission is the source of truth for current work. OneField is the shared evidence and context layer; it is not a second scheduler.

## Deployment configuration

Required public configuration:

```ini
NEXT_PUBLIC_APP_URL=https://app.oneai.network
NEXT_PUBLIC_API_URL=https://api.oneai.network
NEXT_PUBLIC_ONE_MISSION_URL=<current OneMission public URL>
```

Optional integrations:

```ini
NEXT_PUBLIC_GA_ID=<Google Analytics measurement ID>
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<Search Console verification value>
ONEFORGE_API_URL=<OneForge control-plane URL>
ONEFORGE_API_TOKEN=<read-only evidence token>
```

Never expose server tokens with a `NEXT_PUBLIC_` prefix.

## Release gate

Run before deployment:

```bash
npm ci
npm run check
```

After deployment verify:

1. `/`, `/zh`, `/platform`, `/mission`, `/field` and `/evidence` return 200.
2. English/Chinese switching preserves the current route.
3. The OneMission and OneField hand-off links resolve to the intended production services.
4. The contact form requires privacy consent and completes successfully.
5. `/robots.txt`, `/sitemap.xml` and `/opengraph-image` return 200.
6. Response headers include clickjacking, MIME-sniffing, referrer and browser-permission protections.

Rollback to the previous deployment if navigation, contact submission, locale routing or any platform hand-off fails.
