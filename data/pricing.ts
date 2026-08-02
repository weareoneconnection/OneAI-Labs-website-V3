import type { Locale } from "@/lib/i18n";

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

export const pricingPlans: Record<Locale, PricingPlan[]> = {
  en: [
    {
      name: "Free",
      price: "$0",
      description: "For local testing and validating structured tasks.",
      features: ["1,000 requests / month", "$10 model cost guard", "30 RPM", "cheap + balanced modes"]
    },
    {
      name: "Pro",
      price: "$29/mo",
      description: "For builders shipping apps on OneAI API.",
      features: ["50,000 requests / month", "$500 model cost guard", "120 RPM", "cheap, balanced, fast, auto modes"]
    },
    {
      name: "Team",
      price: "$99/mo",
      description: "For teams needing shared billing and controls.",
      features: ["250,000 requests / month", "$2,500 model cost guard", "600 RPM", "premium mode, debug trace, model registry"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For custom providers, limits and production support.",
      features: ["Custom request volume", "Dedicated provider policy", "Custom models and health checks", "Support and onboarding"]
    }
  ],
  zh: [
    {
      name: "Free",
      price: "$0",
      description: "适合本地测试和验证结构化任务。",
      features: ["每月 1,000 次请求", "$10 模型成本护栏", "30 RPM", "cheap + balanced 模式"]
    },
    {
      name: "Pro",
      price: "$29/月",
      description: "适合基于 OneAI API 上线应用的开发者。",
      features: ["每月 50,000 次请求", "$500 模型成本护栏", "120 RPM", "cheap、balanced、fast、auto 模式"]
    },
    {
      name: "Team",
      price: "$99/月",
      description: "适合需要共享计费与管控的团队。",
      features: ["每月 250,000 次请求", "$2,500 模型成本护栏", "600 RPM", "premium 模式、调试追踪、模型注册表"]
    },
    {
      name: "Enterprise",
      price: "定制",
      description: "适合定制供应商、限额与生产级支持。",
      features: ["定制请求量", "专属供应商策略", "定制模型与健康检查", "支持与入驻服务"]
    }
  ]
};
