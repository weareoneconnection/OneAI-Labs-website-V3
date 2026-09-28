# OneAI Labs company reference

This is the canonical source for company facts and public positioning used by the
corporate website. Product pages may explain a system in more detail, but they must
not contradict this document.

Last reviewed: 28 September 2026.

## Legal identity

- Legal name: **ONEAI LABS SDN. BHD.**
- Registration number: **202601020394 (1682491-W)**
- Incorporated: **18 May 2026**
- Jurisdiction: **Malaysia**
- Corporate website: **https://www.oneailabs.ai**
- Official public email: **info@oneailabs.ai**

## Company position

OneAI Labs builds a governed AI operating platform and applied businesses that run
on it. The platform turns model access into durable, authorized, executed and
independently verified work. Applied businesses put that platform under real domain
pressure rather than serving as disconnected demos.

The public company line is:

> Governed AI infrastructure for real-world work.

Do not describe the company as a model wrapper, a chatbot studio or an autonomous
self-evolving system.

## Platform architecture

The platform consists of seven systems with separate production responsibilities:

1. **OneAI Core** — model access, routing, usage, cost and commercial control.
2. **OneForge** — capability evaluation, release, promotion and rollback.
3. **TheOne** — goals, authority, governed decisions, memory and learning foundation.
4. **OneMission** — durable mission and task state, assignment, leases and recovery.
5. **OneClaw** — approved tools, actions, integrations and execution.
6. **OneField** — tenant-scoped context, consent, receipts and shared evidence.
7. **Independent Verifier** — verifies outcomes outside the actor that produced them
   and signs verification evidence.

The operating loop is:

```text
Goal → Govern → Plan → Persist → Execute → Verify → Record → Learn → Controlled release
```

OneMission is the source of truth for current work. OneField is the shared context
and evidence layer, not a second scheduler. Independent verification is a service
boundary, not a self-attestation made by the executing agent.

## Applied businesses and Labs

Applied businesses are products OneAI Labs builds and operates in a domain:

- **OneAI Construction** — intelligence for the built world.
- **OneVideo Studio** — governed creative production from script to episode.

Labs surfaces are smaller or earlier explorations. They must not be presented as
equivalent in maturity or commercial weight to the platform or applied businesses.

## Maturity and claims policy

Public maturity labels have specific meanings:

- **GA** — own domain, published SLA and paying customers.
- **Beta** — own domain and usable today, without an SLA commitment.
- **Preview** — no public surface yet or still running on a platform-default domain.

Architecture direction is not production evidence. TheOne may be described as an
L4 learning Agent OS foundation because durable execution, governed authority,
memory, experience, a self model and independent verification are connected. Do not
claim autonomous self-evolution, unsupervised production promotion or an independently
proven L5 system.

Metrics must come from a queryable operating system. If live evidence is unavailable,
the website must say so or show a clearly dated snapshot.

## Commercial path

The public path for enterprise agent work is:

```text
Use case → Assessment → Written scope → 30-day pilot → Outcome review → Proposal or stop
```

The pilot is bounded to one operational workflow, up to five named actors, explicit
authority, written success criteria, governed execution and an evidence-backed review.
Scope and pricing are set after assessment. Starting a pilot does not imply a production
SLA, unrestricted access or automatic expansion.

Founder-led delivery is currently limited to two concurrent engagements.

## Public product endpoints

- OneAI Core: https://app.oneai.network
- Core API: https://api.oneai.network
- Core documentation: https://app.oneai.network/docs
- OneForge: https://forge.oneai.network
- TheOne: https://www.the1os.io
- OneMission: https://onemission-agent-production.up.railway.app
- OneClaw: https://oneclaw-production.up.railway.app
- OneField: https://www.waoc.network
- OneAI Construction: https://www.oneaiconstruction.com
- OneVideo Studio: https://www.onevideo.studio

Environment variables may override product URLs at deployment time. The live website
and deployment configuration remain the final source for current endpoints.

## Document ownership

When company facts, platform ownership or maturity change:

1. update this file;
2. update `lib/constants.ts` and `data/products.ts`;
3. update the affected English and Chinese pages together;
4. run the release gate in `docs/WEBSITE_OPERATIONS.md`;
5. record the change in the current release note.

Historical V2 and V3 notes are preserved only as release history and are not current
company documentation.
