import { Bot, BrainCircuit, Zap } from "lucide-react";
import { AgentFlowDiagram } from "@/components/visuals/AgentFlowDiagram";
import { FeatureCard } from "@/components/cards/FeatureCard";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Agent OS",
    heading: "Agent OS turns Core infrastructure into product experience.",
    body: "Most AI tools stop at answers. OneAI Agent OS connects intelligence, interface and execution so OneAI products can move from intent to plan, from plan to action, and from action to result.",
    cards: [
      { title: "OneAI Intelligence", description: "Turns goals and context into structured plans powered by Core task contracts.", icon: BrainCircuit },
      { title: "OneAI Bot", description: "The conversational interface that brings Core-powered intelligence to users and communities.", icon: Bot },
      { title: "OneClaw", description: "The execution layer that turns structured outputs into workflows, reports and API actions.", icon: Zap }
    ]
  },
  zh: {
    eyebrow: "Agent OS",
    heading: "Agent OS 把 Core 基础设施变成产品体验。",
    body: "大多数 AI 工具止步于答案。OneAI Agent OS 把智能、界面和执行连接起来，让 OneAI 产品从意图走到计划、从计划走到行动、从行动走到结果。",
    cards: [
      { title: "OneAI Intelligence", description: "基于 Core 任务契约，把目标和上下文变成结构化计划。", icon: BrainCircuit },
      { title: "OneAI Bot", description: "对话式界面，把 Core 驱动的智能带给用户和社区。", icon: Bot },
      { title: "OneClaw", description: "执行层，把结构化输出变成工作流、报告和 API 动作。", icon: Zap }
    ]
  }
} as const;

export function AgentOSSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell section-y">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>
        <AgentFlowDiagram />
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3">
        {t.cards.map((card) => <FeatureCard key={card.title} {...card} />)}
      </div>
    </section>
  );
}
