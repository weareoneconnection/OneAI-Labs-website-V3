import Link from "next/link";
import { ArrowRight, GitBranch, ScrollText, ShieldCheck } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { ForgeControlRoom } from "@/components/visuals/ForgeControlRoom";
import { Assertion, SectionIndex } from "@/components/sections/SectionIndex";

/**
 * OneForge, argued through a failure.
 *
 * The previous version of this section described the promotion pipeline as four
 * green stages, which is what every AI platform's site shows and therefore proves
 * nothing. This one leads with an archived run where the gate rejected the
 * candidate and production stayed untouched — the only evidence that the gate is
 * real. The three guarantees still follow, but now they read as a description of
 * what the panel above just did rather than as claims.
 */
const content = {
  en: {
    index: "OneForge",
    heading: "AI capabilities should evolve.\nAnd be rejected when they fail.",
    body: "OneForge is the governance layer of the OneAI stack — one operating surface for the whole capability lifecycle: versioned data, evaluated training, release gates, rejection, rollback and audit. Not merely a training job that finished.",
    assertionLead: "The model failed.",
    assertionPunch: "The system didn't.",
    caption: "One archived run from OneForge's control plane. The candidate scored below the production baseline, the gate rejected it, and the live version never changed.",
    pillars: [
      { title: "Reproducible", text: "Every artifact has lineage.", icon: GitBranch },
      { title: "Governed", text: "Every release has an approver.", icon: ShieldCheck },
      { title: "Observable", text: "Every run leaves evidence.", icon: ScrollText }
    ],
    approvalNote: "A promotion always requires a second principal with separate credentials. Tokens are held in memory only and cleared on reload.",
    open: "Open OneForge",
    explore: "Explore OneForge"
  },
  zh: {
    index: "OneForge",
    heading: "AI 能力应该持续进化。\n也应该在不合格时被驳回。",
    body: "OneForge 是 OneAI 技术栈的治理层——用一个操作面覆盖完整的能力生命周期：数据版本、训练评估、发布门禁、驳回、回滚与审计。而不只是一次跑完的训练任务。",
    assertionLead: "模型失败了。",
    assertionPunch: "系统没有。",
    caption: "来自 OneForge 控制平面的一次归档运行。候选版本得分低于生产基线，门禁将其驳回，线上版本自始至终没有改变。",
    pillars: [
      { title: "可复现", text: "每一个产物都有血缘。", icon: GitBranch },
      { title: "受治理", text: "每一次发布都有审批人。", icon: ShieldCheck },
      { title: "可观测", text: "每一次运行都留下证据。", icon: ScrollText }
    ],
    approvalNote: "晋级始终需要第二主体用独立凭证签核。令牌仅驻留内存，刷新即清除。",
    open: "打开 OneForge",
    explore: "了解 OneForge"
  }
} as const;

export function ForgeSection({ locale, index }: { locale: Locale; index?: number }) {
  const t = content[locale];

  return (
    <section id="forge" className="scroll-mt-20 border-b border-white/10">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-14">
          <div className="min-w-0">
            <SectionIndex index={index} label={t.index} />
            <h2 className="section-title mt-6 whitespace-pre-line">{t.heading}</h2>
          </div>
          <p className="min-w-0 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {t.body}
          </p>
        </div>

        <div className="mt-12">
          <ForgeControlRoom locale={locale} />
          <p className="mt-4 max-w-3xl text-xs leading-5 text-slate-500">{t.caption}</p>
        </div>

        <Assertion lead={t.assertionLead} punch={t.assertionPunch} />

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {t.pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Icon className="h-5 w-5 text-oneai-cyan" />
                <h3 className="mt-3 text-sm font-semibold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">{pillar.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-3xl rounded-2xl border border-oneai-gold/20 bg-oneai-gold/[0.07] p-4 text-sm leading-6 text-amber-100/90">
            {t.approvalNote}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.forgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold"
            >
              {t.open} <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={localePath(locale, "/forge")}
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60"
            >
              {t.explore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
