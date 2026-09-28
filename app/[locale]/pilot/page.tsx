import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileCheck2, Gauge, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";
import { site } from "@/lib/constants";

const meta = {
  en: {
    title: "30-Day Governed Agent Pilot",
    description: "A scoped 30-day pilot for one operational workflow, with authority boundaries, durable execution, independent verification and an evidence-backed outcome review."
  },
  zh: {
    title: "30 天受治理 Agent 试点",
    description: "围绕一个真实业务流程开展 30 天试点，包含权限边界、持久执行、独立验证和有证据支撑的结果复盘。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "Enterprise pilot",
      title: "Prove one governed agent workflow in 30 days.",
      description: "Start with one accountable workflow, explicit authority and written success criteria. At the end, you receive verified evidence and a clear scale, revise or stop decision.",
      cta: "Request a pilot assessment"
    },
    scopeEyebrow: "A bounded offer",
    scopeHeading: "One workflow. Named boundaries. Evidence before expansion.",
    scopeBody: "This is not a broad transformation programme or a promise that every scenario is viable. We assess first, then write down the exact workflow, authority and proof required before the 30-day clock starts.",
    scope: [
      { title: "One operational workflow", text: "A real task with a named owner, systems in scope and a measurable outcome.", icon: ClipboardCheck },
      { title: "Up to five named actors", text: "Human owners, agents or executors with explicit roles and authority boundaries.", icon: ShieldCheck },
      { title: "Governed execution", text: "Durable mission state, approvals, retries, recovery and a defined rollback path.", icon: Gauge },
      { title: "Verified outcome report", text: "Independent verification, signed evidence and a final decision record — not a demo video.", icon: FileCheck2 }
    ],
    processEyebrow: "Commercial path",
    processHeading: "Assessment → Pilot → verified decision.",
    process: [
      ["01", "Assessment", "We review the workflow, data, integrations, authority and cost of failure."],
      ["02", "Written scope", "Success criteria, exclusions, responsibilities and evidence requirements are agreed in writing."],
      ["03", "30-day pilot", "The workflow is connected, exercised and observed under the agreed governance boundary."],
      ["04", "Outcome review", "We review evidence, failure modes, operating cost and whether the result is repeatable."],
      ["05", "Proposal or stop", "Scale, revise or stop. No expansion is implied by starting the pilot."]
    ],
    boundariesTitle: "Commercial boundaries",
    boundaries: [
      "Pilot scope and pricing are set after assessment; this page is not a fixed-price quotation.",
      "A production SLA, autonomous operation or unrestricted system access is not implied.",
      `Founder-led delivery is limited to ${site.concurrentEngagements} concurrent engagements.`,
      "If the scenario is not viable or does not need an agent, we will say so before proposing a pilot."
    ],
    closeHeading: "Bring one workflow, not a transformation slogan.",
    closeBody: "Tell us what should happen, who owns the decision today, what systems are involved and what a wrong action would cost.",
    closePrimary: "Start the assessment",
    closeSecondary: "See how agent engagements work"
  },
  zh: {
    hero: {
      eyebrow: "企业试点",
      title: "用 30 天证明一个受治理的 Agent 工作流。",
      description: "从一个有明确责任人的流程开始，先写清权限和成功标准。结束时获得经过验证的证据，以及扩展、调整或停止的明确结论。",
      cta: "申请试点评估"
    },
    scopeEyebrow: "边界明确的方案",
    scopeHeading: "一个流程，明确边界，先有证据再扩展。",
    scopeBody: "这不是一场泛化的数字化转型，也不承诺每个场景都可行。我们先评估，再在 30 天开始前写清具体流程、权限与所需证据。",
    scope: [
      { title: "一个真实业务流程", text: "有明确负责人、系统范围和可衡量结果的真实任务。", icon: ClipboardCheck },
      { title: "最多五个具名行动者", text: "人类负责人、Agent 或执行器，各自具备明确角色与权限边界。", icon: ShieldCheck },
      { title: "受治理的执行", text: "持久任务状态、审批、重试、恢复，以及预先定义的回滚路径。", icon: Gauge },
      { title: "经验证的结果报告", text: "独立验证、签名证据和最终决策记录，而不是一段演示视频。", icon: FileCheck2 }
    ],
    processEyebrow: "商业路径",
    processHeading: "评估 → 试点 → 有证据的决策。",
    process: [
      ["01", "评估", "审查流程、数据、集成、权限和失败成本。"],
      ["02", "书面范围", "把成功标准、排除项、责任与证据要求写清楚。"],
      ["03", "30 天试点", "在约定的治理边界内接入、运行并观察真实流程。"],
      ["04", "结果复盘", "复核证据、失败模式、运营成本与结果是否可重复。"],
      ["05", "提案或停止", "扩展、调整或停止；启动试点不等于默认扩张。"]
    ],
    boundariesTitle: "商业边界",
    boundaries: [
      "试点范围和价格在评估后确定；本页不是固定报价。",
      "试点不默认包含生产 SLA、自主运行或不受限制的系统访问。",
      `项目由创始人直接负责，同期最多 ${site.concurrentEngagements} 个。`,
      "如果场景不可行，或根本不需要 Agent，我们会在提出试点前明确说明。"
    ],
    closeHeading: "带来一个真实流程，而不是一句转型口号。",
    closeBody: "告诉我们应该发生什么、今天谁负责决策、涉及哪些系统，以及一次错误动作的代价。",
    closePrimary: "开始评估",
    closeSecondary: "了解 Agent 合作方式"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/pilot", meta);
}

export default async function PilotPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={`${localePath(locale, "/contact")}?intent=pilot`}
        ctaLabel={t.hero.cta}
      />

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.scopeEyebrow}</p>
            <h2 className="section-title mt-4">{t.scopeHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.scopeBody}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.scope.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="h-6 w-6 text-oneai-cyan" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.processEyebrow}</p>
          <h2 className="section-title mt-4">{t.processHeading}</h2>
        </div>
        <div className="mt-12 grid gap-3 lg:grid-cols-5">
          {t.process.map(([number, title, text]) => (
            <article key={number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono-accent text-xs font-semibold text-oneai-gold">{number}</p>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-oneai-gold/20 bg-oneai-gold/[0.06] p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-amber-100">{t.boundariesTitle}</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {t.boundaries.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-amber-100/80">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-oneai-gold" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="site-shell-narrow section-y text-center">
          <h2 className="section-title">{t.closeHeading}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{t.closeBody}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={`${localePath(locale, "/contact")}?intent=pilot`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">
              {t.closePrimary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={localePath(locale, "/solutions/agents")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-oneai-cyan/50">
              {t.closeSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
