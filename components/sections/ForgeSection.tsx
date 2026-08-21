import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck, ScrollText, Anvil } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    badge: "AI Capability Control Plane",
    eyebrow: "OneForge",
    heading: "Build intelligence. Keep humans in control.",
    body: "OneForge is the governance layer of the OneAI stack — one operating surface for the whole AI capability lifecycle, from versioned data and evaluated training to reviewable releases, production traffic and sandboxed engineering.",
    open: "Open OneForge",
    explore: "Explore OneForge",
    pillarsLabel: "Three guarantees",
    pillars: [
      { title: "Reproducible", text: "Every artifact has lineage.", icon: GitBranch },
      { title: "Governed", text: "Every release has an approver.", icon: ShieldCheck },
      { title: "Observable", text: "Every run leaves evidence.", icon: ScrollText }
    ],
    panelLabel: "Governed promotion",
    approval: "Dual-principal approval",
    approvalNote: "A promotion always requires a second principal with separate credentials. Tokens are held in memory only and cleared on reload.",
    stages: ["Versioned data", "Evaluated training", "Reviewable release", "Production traffic"]
  },
  zh: {
    badge: "AI 能力控制平面",
    eyebrow: "OneForge",
    heading: "构建智能，让人类始终掌控。",
    body: "OneForge 是 OneAI 技术栈中的治理层——用一个操作面覆盖 AI 能力的完整生命周期：从数据版本、训练评估，到可审阅的发布、生产流量和沙箱工程。",
    open: "打开 OneForge",
    explore: "了解 OneForge",
    pillarsLabel: "三重保证",
    pillars: [
      { title: "可复现", text: "每一个产物都有血缘。", icon: GitBranch },
      { title: "受治理", text: "每一次发布都有审批人。", icon: ShieldCheck },
      { title: "可观测", text: "每一次运行都留下证据。", icon: ScrollText }
    ],
    panelLabel: "受治理的晋级",
    approval: "双主体审批",
    approvalNote: "晋级始终需要第二主体用独立凭证签核。令牌仅驻留内存，刷新即清除。",
    stages: ["数据版本", "训练评估", "可审阅发布", "生产流量"]
  }
} as const;

export function ForgeSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-b border-white/10">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-3 py-2 text-xs font-semibold text-oneai-cyan sm:px-4 sm:text-sm">
              <Anvil className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">{t.badge}</span>
            </div>

            <p className="mt-8 font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.body}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Icon className="h-5 w-5 text-oneai-cyan" />
                    <h3 className="mt-3 text-sm font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{pillar.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.forgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto"
              >
                {t.open} <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={localePath(locale, "/forge")}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60 sm:w-auto"
              >
                {t.explore}
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-oneai-bg/80 p-4 shadow-glow sm:p-5 md:rounded-[2rem]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 sm:p-6 md:rounded-[1.5rem]">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-oneai-gold">
                    {t.panelLabel}
                  </p>
                  <h3 className="mt-2 break-words text-2xl font-semibold text-white">
                    {t.approval}
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/10 text-oneai-cyan">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {t.stages.map((stage, index) => (
                  <div key={stage} className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-oneai-bg text-xs font-semibold text-oneai-cyan">
                      {index + 1}
                    </div>
                    <p className="min-w-0 break-words text-sm font-medium text-slate-200">{stage}</p>
                    {index < t.stages.length - 1 ? (
                      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-600" />
                    ) : (
                      <span className="ml-auto shrink-0 rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-2.5 py-0.5 text-[11px] font-medium text-oneai-cyan">live</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-4">
                <p className="text-sm leading-6 text-amber-100">{t.approvalNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
