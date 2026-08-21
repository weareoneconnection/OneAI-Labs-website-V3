import { FeatureCard } from "@/components/cards/FeatureCard";
import { BriefcaseBusiness, Building, Code2, Package, Users } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Who it is for",
    heading: "Built for teams turning AI into a product line.",
    body: "OneAI Labs is designed for people who need to ship AI products, package reusable intelligence, control usage and automate real work without rebuilding infrastructure from scratch.",
    audiences: [
      { title: "AI Builders", description: "Build AI products without rebuilding gateway, policy, usage and console layers.", icon: Code2 },
      { title: "SaaS Founders", description: "Add commercial AI features with keys, plans, model routing and cost visibility.", icon: Building },
      { title: "AI Product Teams", description: "Standardize model access and package repeatable workflows as product APIs.", icon: Users },
      { title: "Digital Product Operators", description: "Turn structured intelligence into sellable tools, services and client products.", icon: Package },
      { title: "Agencies", description: "Deliver AI tools, bots and workflow automation on top of one reusable Core stack.", icon: BriefcaseBusiness }
    ]
  },
  zh: {
    eyebrow: "适合谁",
    heading: "为把 AI 做成产品线的团队而建。",
    body: "OneAI Labs 面向需要上线 AI 产品、封装可复用智能、管控用量并自动化真实工作的团队——而不必从零重建基础设施。",
    audiences: [
      { title: "AI 开发者", description: "构建 AI 产品，无需重建网关、策略、用量和控制台。", icon: Code2 },
      { title: "SaaS 创始人", description: "带着密钥、套餐、模型路由和成本可见性上线商业 AI 功能。", icon: Building },
      { title: "AI 产品团队", description: "统一模型访问方式，把可复用的工作流封装成产品 API。", icon: Users },
      { title: "数字产品运营者", description: "把结构化智能变成可售卖的工具、服务和客户产品。", icon: Package },
      { title: "服务机构", description: "基于一套可复用的 Core 技术栈，交付 AI 工具、机器人和工作流自动化。", icon: BriefcaseBusiness }
    ]
  }
} as const;

export function AudienceSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell section-y">
      <div className="max-w-3xl">
        <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-5">
        {t.audiences.map((item) => <FeatureCard key={item.title} {...item} />)}
      </div>
    </section>
  );
}
