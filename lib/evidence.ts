/**
 * Live evidence, with a static fallback that is never allowed to look live.
 *
 * OneForge now has a scoped endpoint for this — GET /api/v1/public/evidence-summary,
 * added in OneTrainer-v4.0 (apps/api/app/api/routes/public.py) and covered by
 * apps/api/tests/test_public_evidence.py — but it still needs to be deployed, and a
 * service token still needs to be issued and set here. Until ONEFORGE_API_URL and
 * ONEFORGE_SERVICE_TOKEN are set (see WEBSITE_V3_LAUNCH_NOTES.md), this silently
 * returns the same hand-checked snapshot already on the homepage. No network call is
 * attempted without both values, and any failure — timeout, non-200, malformed body —
 * falls back the same way. A stale "live" badge would be a worse lie than an honest
 * snapshot, which is the one thing this page exists to avoid.
 */
export type EvidenceSummary = {
  auditTotal: number;
  approved: number;
  rejected: number;
  rollbacks: number;
  /** ISO timestamp when this figure was produced — by the API, or by hand for the fallback. */
  asOf: string;
  /** True only when this came back from OneForge's own API in this request. */
  live: boolean;
};

const STATIC_SNAPSHOT: EvidenceSummary = {
  auditTotal: 941,
  approved: 37,
  rejected: 11,
  rollbacks: 34,
  asOf: "2026-09-24",
  live: false
};

function isSummaryShape(value: unknown): value is {
  audit_total: number; approved: number; rejected: number; rollbacks: number; as_of?: string;
} {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.audit_total === "number" &&
    typeof v.approved === "number" &&
    typeof v.rejected === "number" &&
    typeof v.rollbacks === "number"
  );
}

export async function getEvidenceSummary(): Promise<EvidenceSummary> {
  const apiUrl = process.env.ONEFORGE_API_URL;
  const token = process.env.ONEFORGE_SERVICE_TOKEN;
  if (!apiUrl || !token) return STATIC_SNAPSHOT;

  try {
    const res = await fetch(`${apiUrl.replace(/\/$/, "")}/api/v1/public/evidence-summary`, {
      headers: { Authorization: `Bearer ${token}` },
      // Five-minute cache: this figure does not need to be second-fresh, and OneForge's
      // control plane should not get a request per page view.
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(3000)
    });
    if (!res.ok) return STATIC_SNAPSHOT;
    const data: unknown = await res.json();
    if (!isSummaryShape(data)) return STATIC_SNAPSHOT;
    return {
      auditTotal: data.audit_total,
      approved: data.approved,
      rejected: data.rejected,
      rollbacks: data.rollbacks,
      asOf: data.as_of ?? new Date().toISOString(),
      live: true
    };
  } catch {
    return STATIC_SNAPSHOT;
  }
}
