import { AlertTriangle, BarChart3, Boxes, MessageSquareWarning, Puzzle, WalletCards } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Why the platform exists",
    heading: "The AI stack is fragmented. The business outcome should not be.",
    body: "Enterprises are forced to assemble gateways, training tools, agent frameworks, memory stores and execution layers. OneAI Labs unifies these responsibilities without collapsing their governance boundaries.",
    problems: [
      { title: "Model access is not a product", description: "Commercial AI needs keys, customers, plan limits, usage visibility and billing-ready operations.", icon: Boxes },
      { title: "Provider choice creates complexity", description: "Teams need routing policy and provider:model control without rewriting every product integration.", icon: WalletCards },
      { title: "Loose prompts do not scale", description: "Repeatable products need structured task contracts, predictable inputs and measurable outputs.", icon: MessageSquareWarning },
      { title: "Costs need guardrails", description: "AI products need maxCostUsd, routing modes, plan gates and monthly cost protection.", icon: BarChart3 },
      { title: "Answers are only the first step", description: "Agent products must move from intelligence to interface to execution, not stop at text.", icon: AlertTriangle },
      { title: "Small teams need a platform", description: "Founders should ship AI products, not rebuild gateway, policy, usage and console layers.", icon: Puzzle }
    ]
  },
  zh: {
    eyebrow: "平台存在的原因",
    heading: "AI 技术栈高度碎片化，但业务结果不应如此。",
    body: "企业不得不拼接模型网关、训练工具、Agent 框架、记忆系统和执行层。OneAI Labs 在保持治理边界清晰的前提下，将这些关键职责统一起来。",
    problems: [
      { title: "模型访问不等于产品", description: "商业化 AI 需要密钥、客户、套餐限额、用量可见性和可计费的运营体系。", icon: Boxes },
      { title: "多供应商带来复杂度", description: "团队需要路由策略和 provider:model 级别的控制，而不是重写每一个产品集成。", icon: WalletCards },
      { title: "松散提示词无法规模化", description: "可复用的产品需要结构化任务契约、可预期的输入和可度量的输出。", icon: MessageSquareWarning },
      { title: "成本需要护栏", description: "AI 产品需要 maxCostUsd、路由模式、套餐闸门和月度成本保护。", icon: BarChart3 },
      { title: "答案只是第一步", description: "智能体产品必须从智能走向界面、走向执行，而不是停在一段文字。", icon: AlertTriangle },
      { title: "小团队需要平台", description: "创始人应该专注发布 AI 产品，而不是重复搭建网关、策略、用量和控制台。", icon: Puzzle }
    ]
  }
} as const;

export function ProblemSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell section-y">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {t.problems.map((item) => <FeatureCard key={item.title} {...item} />)}
      </div>
    </section>
  );
}
