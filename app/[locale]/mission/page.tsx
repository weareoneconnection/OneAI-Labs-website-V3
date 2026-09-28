import { Activity, BadgeCheck, GitBranch, RefreshCcw, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { VerticalDetail, type VerticalDetailContent } from "@/components/sections/VerticalDetail";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: { title: "OneMission · Durable Mission and Work Runtime", description: "OneMission turns governed plans into durable task graphs, assignments, leases, approvals, retries and independently verifiable completion." },
  zh: { title: "OneMission · 持久化使命与工作运行时", description: "OneMission 把受治理计划变成持久任务图、分配、租约、审批、重试与可独立验证的完成结果。" }
};

const content = {
  en: {
    hero: { eyebrow: "OneMission", title: "Work that survives retries, restarts and handoffs.", description: "TheOne decides what should happen. OneMission is the operational source of truth for what is assigned, running, waiting, verified and complete." },
    features: [
      { title: "Durable Task Graphs", description: "Dependencies and readiness live in PostgreSQL rather than in an agent's temporary context.", icon: GitBranch },
      { title: "Leases & Recovery", description: "Assignments heartbeat, expire and recover without silently duplicating work.", icon: RefreshCcw },
      { title: "Human Approval", description: "Risk-based approval and separation of duties pause consequential work safely.", icon: Users },
      { title: "Verified Completion", description: "Required evidence and signed verification receipts gate completion.", icon: BadgeCheck }
    ],
    detail: {
      workflow: { eyebrow: "Runtime contract", heading: "A plan becomes operational truth.", steps: [
        { label: "Materialize", text: "TheOne submits a complete goal plan; OneMission creates the mission, metrics, tasks and dependencies atomically." },
        { label: "Dispatch", text: "A durable orchestrator assigns ready work with leases, capability requirements and idempotency." },
        { label: "Govern", text: "Approvals, authority references, retries and recovery are enforced independently of the model." },
        { label: "Settle", text: "Only required evidence and valid verification can complete a task or mission." }
      ]},
      audience: { eyebrow: "Boundary", heading: "Operational truth, not another reasoning agent.", items: [
        { title: "TheOne plans", description: "OneMission does not replace cognition, authority or goal reasoning." },
        { title: "OneClaw acts", description: "Assignment is not authority; executors receive only scoped, approved work." },
        { title: "OneField remembers", description: "Settled mission facts can become cross-system evidence and future context." }
      ]},
      cta: { heading: "Inspect the mission runtime.", body: "Open the current OneMission surface or talk to us about connecting an agent workforce.", openLabel: "Open OneMission", href: site.oneMissionUrl, demoLabel: "Request Demo" }
    } satisfies VerticalDetailContent
  },
  zh: {
    hero: { eyebrow: "OneMission", title: "跨重试、重启与交接仍能继续的工作。", description: "TheOne 决定应该发生什么；OneMission 是任务已分配、运行中、等待中、已验证或已完成的运行事实来源。" },
    features: [
      { title: "持久任务图", description: "依赖与就绪状态保存在 PostgreSQL，而不是 Agent 的临时上下文里。", icon: GitBranch },
      { title: "租约与恢复", description: "分配可以心跳续租、到期和恢复，不会悄悄重复执行。", icon: RefreshCcw },
      { title: "人工审批", description: "按风险分级的审批与职责分离，让关键工作安全暂停。", icon: Users },
      { title: "验证后完成", description: "需要证据的任务只有在签名验证回执有效后才能完成。", icon: BadgeCheck }
    ],
    detail: {
      workflow: { eyebrow: "运行契约", heading: "计划变成运行事实。", steps: [
        { label: "固化", text: "TheOne 提交完整目标计划；OneMission 原子化创建 Mission、指标、任务与依赖。" },
        { label: "调度", text: "持久调度器依据租约、能力要求和幂等规则分配就绪任务。" },
        { label: "治理", text: "审批、Authority 引用、重试与恢复独立于模型执行。" },
        { label: "结算", text: "只有必需证据和有效验证通过后，任务或 Mission 才能完成。" }
      ]},
      audience: { eyebrow: "职责边界", heading: "它负责运行事实，不是另一个推理 Agent。", items: [
        { title: "TheOne 负责规划", description: "OneMission 不替代认知、Authority 或目标推理。" },
        { title: "OneClaw 负责行动", description: "任务分配不等于授权；执行器只接收限定范围且获准的工作。" },
        { title: "OneField 负责记忆", description: "结算后的 Mission 事实可以成为跨系统证据和未来上下文。" }
      ]},
      cta: { heading: "查看 Mission 运行时。", body: "打开当前 OneMission，或联系我们接入 Agent 工作队伍。", openLabel: "打开 OneMission", href: site.oneMissionUrl, demoLabel: "预约演示" }
    } satisfies VerticalDetailContent
  }
} as const;

export async function generateMetadata({ params }: PageParams) { const { locale } = await params; return pageMetadata(locale, "/mission", meta); }
export default async function MissionPage({ params }: PageParams) { const { locale } = await params; const t = content[locale]; return <><PageHero {...t.hero} /><section className="site-shell py-16 sm:py-20"><div className="m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">{t.features.map((item) => <FeatureCard key={item.title} {...item} />)}</div><div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-5 text-sm leading-6 text-slate-300"><Activity className="h-5 w-5 shrink-0 text-cyan-200" /><span>Mission → Task Graph → Assignment → Task Run → Evidence → Verification</span><ShieldCheck className="ml-auto hidden h-5 w-5 text-emerald-300 sm:block" /></div></section><VerticalDetail locale={locale} content={t.detail} /><FinalCTASection locale={locale} /></>; }
