import type { Locale } from "@/lib/i18n";

export type UseCase = {
  title: string;
  description: string;
  /** Internal path ("/core") or external URL; internal paths get locale-prefixed in the section. */
  href: string;
  product: string;
};

export const useCases: Record<Locale, UseCase[]> = {
  en: [
    {
      title: "Commercial AI Feature",
      description: "Launch AI features with API keys, model routing, plan limits, usage and cost tracking.",
      href: "/core",
      product: "OneAI Core"
    },
    {
      title: "Structured Task API",
      description: "Turn business_strategy, content_engine, support_brain and market_research into product contracts.",
      href: "/developers",
      product: "Task Intelligence API"
    },
    {
      title: "AI Bot Interface",
      description: "Create Core-powered assistants for websites, communities, customers and internal teams.",
      href: "/agent-os",
      product: "OneAI Bot"
    },
    {
      title: "Execution Workflow",
      description: "Use OneClaw-style flows to move from structured output to reports, actions and API calls.",
      href: "/agent-os",
      product: "OneClaw"
    },
    {
      title: "AI Short-Drama Factory",
      description: "Turn one sentence into scripted, voiced, publishable episodes for Douyin, TikTok and YouTube.",
      href: "/video",
      product: "OneVideo Studio"
    },
    {
      title: "Market Research OS",
      description: "Create market briefs, risk analysis, strategy review and research dashboards.",
      href: "/trading",
      product: "OneAI Trading OS"
    },
    {
      title: "Construction Intelligence",
      description: "Generate project reports, contract summaries, BOQ/BQ support and site records.",
      href: "/construction",
      product: "OneAI Construction OS"
    },
    {
      title: "Mission and Field Systems",
      description: "Coordinate tasks, contribution records, proof of work and reputation profiles.",
      href: "/mission",
      product: "OneMission + OneField"
    },
    {
      title: "Public AI Experience",
      description: "Ship a shareable consumer AI product like OneAI Mirror on the same Core stack.",
      href: "https://onemirror-v1.vercel.app/",
      product: "OneAI Mirror"
    }
  ],
  zh: [
    {
      title: "商业化 AI 功能",
      description: "带着 API 密钥、模型路由、套餐限额、用量和成本追踪上线 AI 功能。",
      href: "/core",
      product: "OneAI Core"
    },
    {
      title: "结构化任务 API",
      description: "把 business_strategy、content_engine、support_brain、market_research 变成产品级契约。",
      href: "/developers",
      product: "任务智能 API"
    },
    {
      title: "AI 机器人界面",
      description: "为网站、社区、客户和内部团队创建 Core 驱动的智能助手。",
      href: "/agent-os",
      product: "OneAI Bot"
    },
    {
      title: "执行工作流",
      description: "用 OneClaw 式的流程，从结构化输出走向报告、动作和 API 调用。",
      href: "/agent-os",
      product: "OneClaw"
    },
    {
      title: "AI 短剧工厂",
      description: "一句话生成有剧本、有配音、可发布的剧集，直达抖音、TikTok 和 YouTube。",
      href: "/video",
      product: "OneVideo Studio"
    },
    {
      title: "市场研究 OS",
      description: "生成市场简报、风险分析、策略复盘和研究看板。",
      href: "/trading",
      product: "OneAI Trading OS"
    },
    {
      title: "建筑行业智能",
      description: "生成项目报告、合同摘要、BOQ/BQ 支持和现场记录。",
      href: "/construction",
      product: "OneAI Construction OS"
    },
    {
      title: "任务与声誉系统",
      description: "协调任务、贡献记录、工作证明和声誉档案。",
      href: "/mission",
      product: "OneMission + OneField"
    },
    {
      title: "大众 AI 体验",
      description: "在同一套 Core 技术栈上发布像 OneAI Mirror 这样可传播的大众 AI 产品。",
      href: "https://onemirror-v1.vercel.app/",
      product: "OneAI Mirror"
    }
  ]
};
