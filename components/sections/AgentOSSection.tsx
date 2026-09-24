import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Cpu, Zap } from "lucide-react";
import { AgentFlowDiagram } from "@/components/visuals/AgentFlowDiagram";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Agent Systems",
    heading: "Plan with TheOne. Execute with OneClaw. Prove it with OneField.",
    body: "Most AI tools stop at answers. OneAI Agent Systems connects intelligence, governed planning and execution so OneAI products can move from intent to plan, from plan to action, and from action to evidence.",
    cards: [
      { title: "TheOne", description: "The governed agent kernel: turns a goal into a policy-aware plan and execution contract.", icon: Cpu, href: "/theone" },
      { title: "OneClaw", description: "The execution layer that turns an approved plan into workflows, reports and API actions.", icon: Zap, href: undefined },
      { title: "OneField", description: "The evidence layer: memory, contribution records and proof behind every action agents take.", icon: BadgeCheck, href: "/field" }
    ],
    goDeeper: "Go deeper on TheOne"
  },
  zh: {
    eyebrow: "Agent Systems",
    heading: "用 TheOne 规划，用 OneClaw 执行，用 OneField 留证。",
    body: "大多数 AI 工具止步于答案。OneAI Agent Systems 把智能、受治理的规划和执行连接起来，让 OneAI 产品从意图走到计划、从计划走到行动、从行动走到证据。",
    cards: [
      { title: "TheOne", description: "受治理的 Agent 内核：把目标转化为符合策略的计划与执行契约。", icon: Cpu, href: "/theone" },
      { title: "OneClaw", description: "执行层，把已批准的计划变成工作流、报告和 API 动作。", icon: Zap, href: undefined },
      { title: "OneField", description: "证据层：记忆、贡献记录，以及 Agent 每一次行动背后的证明。", icon: BadgeCheck, href: "/field" }
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
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3">
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
