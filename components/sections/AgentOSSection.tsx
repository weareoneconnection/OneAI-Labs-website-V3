import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Cpu, ListChecks, Zap } from "lucide-react";
import { AgentFlowDiagram } from "@/components/visuals/AgentFlowDiagram";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Agent Systems",
    heading: "Govern intent. Persist the mission. Execute and prove the result.",
    body: "TheOne, OneMission, OneClaw and OneField separate reasoning, operational truth, side effects and shared evidence. Independent verification sits between action and accepted fact.",
    cards: [
      { title: "TheOne", description: "The governed agent kernel: turns a goal into a policy-aware plan and execution contract.", icon: Cpu, href: "/theone" },
      { title: "OneMission", description: "The durable mission runtime: task graphs, assignments, leases, recovery, approvals and verified completion.", icon: ListChecks, href: "/mission" },
      { title: "OneClaw", description: "The execution layer that turns an approved plan into workflows, reports and API actions.", icon: Zap, href: undefined },
      { title: "OneField", description: "The shared reality layer: tenant-scoped context, consent and verifier-linked evidence across systems.", icon: BadgeCheck, href: "/field" }
    ],
    goDeeper: "Go deeper on TheOne"
  },
  zh: {
    eyebrow: "Agent Systems",
    heading: "治理意图，持久化 Mission，执行并验证结果。",
    body: "TheOne、OneMission、OneClaw 与 OneField 将推理、运行事实、副作用和共享证据分离；独立验证位于动作与可信事实之间。",
    cards: [
      { title: "TheOne", description: "受治理的 Agent 内核：把目标转化为符合策略的计划与执行契约。", icon: Cpu, href: "/theone" },
      { title: "OneMission", description: "持久 Mission 运行时：任务图、分配、租约、恢复、审批与验证后完成。", icon: ListChecks, href: "/mission" },
      { title: "OneClaw", description: "执行层，把已批准的计划变成工作流、报告和 API 动作。", icon: Zap, href: undefined },
      { title: "OneField", description: "共享现实层：跨系统的租户化上下文、授权与 Verifier 关联证据。", icon: BadgeCheck, href: "/field" }
    ],
    goDeeper: "深入了解 TheOne"
  }
} as const;

export function AgentOSSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell section-y">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>
        <AgentFlowDiagram />
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
        {t.cards.map((card) =>
          card.href ? (
            <Link key={card.title} href={localePath(locale, card.href)} className="group block">
              <FeatureCard title={card.title} description={card.description} icon={card.icon} />
            </Link>
          ) : (
            <FeatureCard key={card.title} title={card.title} description={card.description} icon={card.icon} />
          )
        )}
      </div>
      <Link href={localePath(locale, "/theone")} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
        {t.goDeeper} <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
