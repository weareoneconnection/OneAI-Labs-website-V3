import Link from "next/link";
import { ArrowUpRight, Ban, CheckCircle2, RotateCcw, ScrollText, XCircle } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { getEvidenceSummary } from "@/lib/evidence";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Evidence · What OneAI Labs Can Show, Not Just Claim",
    description: "The audit figures behind OneAI Labs' governance claims, taken from OneForge's own control plane — including a real run a governance gate rejected."
  },
  zh: {
    title: "证据 · OneAI Labs 能出示的东西，而不只是声称",
    description: "OneAI Labs 治理主张背后的审计数字，取自 OneForge 自身的控制平面——包括一次被治理门禁驳回的真实运行。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "Evidence",
      title: "Measured, not claimed.",
      description: "\"Governed AI\" is a claim any vendor can make. Below is what OneAI Labs can actually show for it — the same figures OneForge's own control plane would return if you queried it yourself.",
      ctaLabel: "Open OneForge"
    },
    snapshot: {
      eyebrow: "Snapshot, not a live feed",
      note: "These are point-in-time figures from OneForge's control plane, refreshed by hand — not a real-time API connection. Building a genuinely live feed is real engineering work, tracked separately from this page, and we would rather show an honest snapshot than a fake ticker.",
      liveEyebrow: "Connected to OneForge",
      liveNote: "This figure was read directly from OneForge's control plane for this request, not typed in by hand.",
      asOfLabel: "As of",
      stats: [
        { label: "Audit records", note: "Append-only. Nothing edited, nothing deleted." },
        { label: "Approved / rejected", note: "A gate that never rejects is not a gate." },
        { label: "Rollbacks executed", note: "Reversibility proven, not promised." }
      ]
    },
    record: {
      eyebrow: "What one record actually looks like",
      heading: "The 941 above aren't a marketing number. Here is one of them.",
      body: "This is a real training run from OneForge's control plane, not a staged example. The candidate scored below the production baseline. The gate rejected it. Production never changed.",
      runId: "RUN / QWEN3-8B",
      candidateLabel: "Candidate",
      candidateNote: "assistant-v6",
      baselineLabel: "Baseline",
      baselineNote: "production",
      candidateScore: "0.5667",
      baselineScore: "0.6167",
      verdict: "REJECTED",
      verdictNote: "Production version unchanged.",
      punch: "The model failed. The system didn't.",
      log: [
        { time: "10:53:07", event: "eval.score", detail: "candidate 0.5667", status: "warn" as const },
        { time: "10:53:08", event: "gate.compare", detail: "baseline 0.6167", status: "fail" as const },
        { time: "10:53:09", event: "release.guard", detail: "assistant-v6 rejected", status: "held" as const },
        { time: "10:53:10", event: "production", detail: "current version unchanged", status: "ok" as const }
      ]
    },
    maturityEyebrow: "The same discipline, applied to the whole platform",
    maturityBody: "OneForge and TheOne both publish exactly which parts of themselves are verified, which are implemented but not yet accepted, and which are only planned — see their maturity ladders.",
    maturityForge: "OneForge's M0–M6 ladder",
    maturityTheOne: "TheOne's L1–L6 ladder"
  },
  zh: {
    hero: {
      eyebrow: "证据",
      title: "实测，而非声称。",
      description: "“受治理的 AI”这句话任何厂商都能说。下面是 OneAI Labs 真正能拿出来的东西——如果你自己去查 OneForge 的控制平面，得到的会是同一组数字。",
      ctaLabel: "打开 OneForge"
    },
    snapshot: {
      eyebrow: "这是快照，不是实时数据流",
      note: "下面是 OneForge 控制平面在某个时间点的数字，靠人工刷新——不是接了实时 API。做一个真正实时的数据流是真实的工程工作，会单独跟踪，不在这个页面里；比起一个假的实时滚动条，我们更愿意给一份诚实的快照。",
      liveEyebrow: "已接入 OneForge",
      liveNote: "这个数字是本次请求时直接从 OneForge 控制平面读取的，不是人工填写的。",
      asOfLabel: "数据截至",
      stats: [
        { label: "条审计记录", note: "只增不改。没有编辑，没有删除。" },
        { label: "次审批通过 / 驳回", note: "从不驳回的门禁不是门禁。" },
        { label: "次真实回滚", note: "可回退是被证明的，不是被承诺的。" }
      ]
    },
    record: {
      eyebrow: "一条记录实际长什么样",
      heading: "上面的 941 不是一个营销数字。这是其中一条。",
      body: "这是 OneForge 控制平面里一次真实的训练运行，不是摆拍出来的例子。候选得分低于生产基线，门禁将其驳回，线上版本自始至终没有改变。",
      runId: "运行 / QWEN3-8B",
      candidateLabel: "候选",
      candidateNote: "assistant-v6",
      baselineLabel: "基线",
      baselineNote: "生产版本",
      candidateScore: "0.5667",
      baselineScore: "0.6167",
      verdict: "驳回",
      verdictNote: "生产版本未受影响。",
      punch: "模型失败了。系统没有。",
      log: [
        { time: "10:53:07", event: "eval.score", detail: "候选 0.5667", status: "warn" as const },
        { time: "10:53:08", event: "gate.compare", detail: "基线 0.6167", status: "fail" as const },
        { time: "10:53:09", event: "release.guard", detail: "assistant-v6 被驳回", status: "held" as const },
        { time: "10:53:10", event: "production", detail: "当前版本未变", status: "ok" as const }
      ]
    },
    maturityEyebrow: "同一套纪律，用在整个平台上",
    maturityBody: "OneForge 和 TheOne 都公开标注了自己哪些部分已验证、哪些已实现但待验收、哪些只是规划——见它们各自的成熟度阶梯。",
    maturityForge: "OneForge 的 M0–M6 阶梯",
    maturityTheOne: "TheOne 的 L1–L6 阶梯"
  }
} as const;

const logStyle: Record<"ok" | "warn" | "fail" | "held", string> = {
  ok: "text-emerald-300",
  warn: "text-amber-300",
  fail: "text-red-300",
  held: "text-slate-300"
};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/evidence", meta);
}

export default async function EvidencePage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];
  const evidence = await getEvidenceSummary();
  const values = [
    String(evidence.auditTotal),
    `${evidence.approved} / ${evidence.rejected}`,
    String(evidence.rollbacks)
  ];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.forgeUrl}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className={`flex items-start gap-3 rounded-2xl border p-4 text-sm leading-6 ${evidence.live ? "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-100/90" : "border-oneai-gold/20 bg-oneai-gold/[0.06] text-amber-100/90"}`}>
            <ScrollText className={`mt-0.5 h-5 w-5 shrink-0 ${evidence.live ? "text-emerald-300" : "text-oneai-gold"}`} />
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${evidence.live ? "text-emerald-300" : "text-oneai-gold"}`}>
                {evidence.live ? t.snapshot.liveEyebrow : t.snapshot.eyebrow}
              </p>
              <p className="mt-2">{evidence.live ? t.snapshot.liveNote : t.snapshot.note}</p>
              <p className="mt-2 text-xs text-slate-500">{t.snapshot.asOfLabel}: {evidence.asOf}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-9 sm:grid-cols-3 sm:gap-6">
            {t.snapshot.stats.map((stat, index) => (
              <div key={stat.label} className="min-w-0">
                <div className="font-mono-accent text-4xl font-medium leading-none text-white sm:text-5xl">{values[index]}</div>
                <div className="mt-3 text-sm font-semibold text-cyan-200">{stat.label}</div>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.record.eyebrow}</p>
            <h2 className="section-title mt-4">{t.record.heading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.record.body}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-7">
              <p className="font-mono-accent text-xs uppercase tracking-[0.18em] text-slate-500">{t.record.runId}</p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-oneai-gold">{t.record.candidateLabel}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{t.record.candidateScore}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.record.candidateNote}</p>
                </div>
                <XCircle className="h-8 w-8 shrink-0 text-red-400/70" />
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-oneai-cyan">{t.record.baselineLabel}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{t.record.baselineScore}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.record.baselineNote}</p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-red-200">
                <Ban className="h-3.5 w-3.5" /> {t.record.verdict}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{t.record.verdictNote}</p>
              <p className="mt-6 text-lg font-semibold text-white">{t.record.punch}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 sm:p-7">
              <p className="font-mono-accent text-xs uppercase tracking-[0.18em] text-slate-500">Execution log</p>
              <div className="mt-4 space-y-2">
                {t.record.log.map((row) => (
                  <div key={row.time} className="flex items-center gap-3 border-b border-white/5 pb-2 font-mono-accent text-xs last:border-0">
                    <span className="text-slate-600">{row.time}</span>
                    <span className="text-slate-400">{row.event}</span>
                    <span className="flex-1 truncate text-slate-300">{row.detail}</span>
                    <span className={`shrink-0 font-semibold ${logStyle[row.status]}`}>{row.status.toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <RotateCcw className="h-3.5 w-3.5" /> <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.maturityEyebrow}</p>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.maturityBody}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localePath(locale, "/forge")} className="inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
              {t.maturityForge} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href={localePath(locale, "/theone")} className="inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
              {t.maturityTheOne} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection locale={locale} />
    </>
  );
}
