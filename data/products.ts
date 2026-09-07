import { Anvil, BadgeCheck, Bot, Boxes, Building2, Clapperboard, Eye, Layers3, LineChart, ShieldCheck, Target, Zap, type LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";

// Maturity is assigned by an objective, checkable rule rather than by ambition:
//   GA      — own domain, published SLA, paying customers
//   Beta    — own domain, usable today, no SLA commitment
//   Preview — still on a default platform domain, or no public surface yet
// Nothing here may be labelled above what its evidence supports.
export type ProductStage = "GA" | "Beta" | "Preview";

export type Product = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  stage: ProductStage;
  poweredBy: string;
  icon: LucideIcon;
};

export const products: Record<Locale, Product[]> = {
  en: [
    {
      name: "OneForge",
      tagline: "AI Capability Control Plane",
      description: "Govern the AI lifecycle: versioned data, evaluated training, approved releases and audited runs.",
      href: "https://forge.oneai.network/",
      poweredBy: "Governance + lineage + approvals",
      stage: "Beta",
      icon: Anvil
    },
    {
      name: "OneAI Bot",
      tagline: "AI Assistant Interface",
      description: "A conversational AI entry point for users, teams and communities.",
      href: "https://t.me/WAOCOneAIBot",
      poweredBy: "Core Gateway + Task API",
      stage: "Beta",
      icon: Bot
    },
    {
      name: "OneClaw",
      tagline: "Action & Execution Layer",
      description: "Turn AI outputs into workflows, reports, actions and API calls.",
      poweredBy: "Task output + execution flow",
      stage: "Preview",
      icon: Zap
    },
    {
      name: "OneVideo Studio",
      tagline: "AI Short-Drama Operating System",
      description: "Turn one sentence into a scripted, voiced and publishable short drama.",
      href: "https://www.onevideo.studio/",
      poweredBy: "Drama beat engine + native-voice pipeline",
      stage: "Beta",
      icon: Clapperboard
    },
    {
      name: "TheOne",
      tagline: "Execution OS & Orchestration Shell",
      description: "Turn one intent into one coordinated system and execution layer.",
      href: "https://theone-eta.vercel.app/",
      poweredBy: "Agent OS + execution orchestration",
      stage: "Preview",
      icon: Layers3
    },
    {
      name: "OneAI Mirror",
      tagline: "Civilization Mirror & Belief Simulation",
      description: "Turn one belief, instinct or behavior into a shareable civilization-scale outcome.",
      href: "https://onemirror-v1.vercel.app/",
      poweredBy: "OneAI Core + Agent OS",
      stage: "Preview",
      icon: Eye
    },
    {
      name: "OneAI Trading OS",
      tagline: "AI Market Research, Risk & Discipline Tools",
      description: "Market briefs, risk radar, strategy review and trading journal.",
      href: "https://oneaitradingbot.vercel.app/",
      poweredBy: "Market research + risk guard",
      stage: "Preview",
      icon: LineChart
    },
    {
      name: "OneAI Construction OS",
      tagline: "The operating system for construction intelligence",
      description: "Document intelligence, project knowledge, RFI / NCR / inspection workflows, construction agents, governance and audit.",
      href: "https://www.oneaiconstruction.com/en/products/construction-os",
      poweredBy: "Core routing + Forge governance",
      stage: "Beta",
      icon: Building2
    },
    {
      name: "OneAI Construction Twin",
      tagline: "A living AI representation of your project",
      description: "IFC / BIM ingestion, 4D schedule, twin entities, an evidence graph, risk intelligence and forecast simulation.",
      href: "https://www.oneaiconstruction.com/en/products/construction-twin",
      poweredBy: "Project world model + OneField evidence",
      stage: "Beta",
      icon: Boxes
    },
    {
      name: "OneMission",
      tagline: "Mission & Task Coordination",
      description: "Turn goals into missions, missions into tasks, and tasks into coordinated execution.",
      href: "https://one-mission.vercel.app/",
      poweredBy: "Agent plans + campaign missions",
      stage: "Preview",
      icon: Target
    },
    {
      name: "OneField",
      tagline: "Proof of Contribution & Reputation",
      description: "Record contribution, verify work and build reputation profiles.",
      href: "https://onefield.vercel.app/",
      poweredBy: "Usage, identity and records",
      stage: "Preview",
      icon: BadgeCheck
    }
  ],
  zh: [
    {
      name: "OneForge",
      tagline: "AI 能力控制平面",
      description: "治理 AI 生命周期：数据版本、训练评估、发布审批与可审计的运行。",
      href: "https://forge.oneai.network/",
      poweredBy: "治理 + 血缘 + 审批",
      stage: "Beta",
      icon: Anvil
    },
    {
      name: "OneAI Bot",
      tagline: "AI 助手界面",
      description: "面向用户、团队和社区的对话式 AI 入口。",
      href: "https://t.me/WAOCOneAIBot",
      poweredBy: "Core 网关 + 任务 API",
      stage: "Beta",
      icon: Bot
    },
    {
      name: "OneClaw",
      tagline: "动作与执行层",
      description: "把 AI 输出变成工作流、报告、动作和 API 调用。",
      poweredBy: "任务输出 + 执行流",
      stage: "Preview",
      icon: Zap
    },
    {
      name: "OneVideo Studio",
      tagline: "AI 短剧操作系统",
      description: "一句话变成有剧本、有配音、可直接发布的短剧。",
      href: "https://www.onevideo.studio/",
      poweredBy: "剧情节拍引擎 + 原声演出管线",
      stage: "Beta",
      icon: Clapperboard
    },
    {
      name: "TheOne",
      tagline: "执行 OS 与编排壳层",
      description: "把一个意图变成一套协同系统和执行层。",
      href: "https://theone-eta.vercel.app/",
      poweredBy: "Agent OS + 执行编排",
      stage: "Preview",
      icon: Layers3
    },
    {
      name: "OneAI Mirror",
      tagline: "文明镜像与信念模拟",
      description: "把一个信念、本能或行为，放大成可分享的文明级结果。",
      href: "https://onemirror-v1.vercel.app/",
      poweredBy: "OneAI Core + Agent OS",
      stage: "Preview",
      icon: Eye
    },
    {
      name: "OneAI Trading OS",
      tagline: "AI 市场研究、风险与纪律工具",
      description: "市场简报、风险雷达、策略复盘和交易日志。",
      href: "https://oneaitradingbot.vercel.app/",
      poweredBy: "市场研究 + 风险守护",
      stage: "Preview",
      icon: LineChart
    },
    {
      name: "OneAI Construction OS",
      tagline: "建筑智能的操作系统",
      description: "文档智能、项目知识、RFI / NCR / 验收工作流、建筑 Agent、治理与审计。",
      href: "https://www.oneaiconstruction.com/zh/products/construction-os",
      poweredBy: "Core 路由 + Forge 治理",
      stage: "Beta",
      icon: Building2
    },
    {
      name: "OneAI Construction Twin",
      tagline: "你的项目的活体 AI 映射",
      description: "IFC / BIM 摄取、4D 进度、孪生实体、证据图谱、风险智能与预测模拟。",
      href: "https://www.oneaiconstruction.com/zh/products/construction-twin",
      poweredBy: "项目世界模型 + OneField 证据",
      stage: "Beta",
      icon: Boxes
    },
    {
      name: "OneMission",
      tagline: "任务与协作编排",
      description: "把目标变成任务书，任务书变成任务，任务变成协同执行。",
      href: "https://one-mission.vercel.app/",
      poweredBy: "智能体计划 + 战役任务",
      stage: "Preview",
      icon: Target
    },
    {
      name: "OneField",
      tagline: "贡献证明与声誉",
      description: "记录贡献、验证工作，构建声誉档案。",
      href: "https://onefield.vercel.app/",
      poweredBy: "用量、身份与记录",
      stage: "Preview",
      icon: BadgeCheck
    }
  ]
};

export type CoreFeature = { title: string; description: string; icon: LucideIcon };

export const coreFeatures: Record<Locale, CoreFeature[]> = {
  en: [
    { title: "OpenAI-compatible gateway", description: "Use familiar chat completion calls while OneAI handles provider routing and product visibility.", icon: ShieldCheck },
    { title: "Task Intelligence API", description: "Package repeatable business workflows as typed task contracts with structured JSON outputs.", icon: Target },
    { title: "API key and customer control", description: "Issue keys, scope access, separate environments and connect usage back to customers.", icon: ShieldCheck },
    { title: "Usage, cost and latency tracking", description: "Record provider, model, tokens, estimated cost, latency, requestId and error state.", icon: LineChart },
    { title: "Routing policy and cost guards", description: "Apply cheap, balanced, fast, auto, premium or explicit provider:model behavior with maxCostUsd.", icon: ShieldCheck },
    { title: "Billing-ready operations", description: "Run AI like a SaaS product with plans, limits, commercial visibility and operator workflows.", icon: Bot }
  ],
  zh: [
    { title: "OpenAI 兼容网关", description: "沿用熟悉的 chat completion 调用方式，供应商路由和产品可见性交给 OneAI。", icon: ShieldCheck },
    { title: "任务智能 API", description: "把可复用的业务工作流封装成有类型的任务契约，输出结构化 JSON。", icon: Target },
    { title: "API 密钥与客户管理", description: "签发密钥、限定权限、区分环境，并把用量关联回每个客户。", icon: ShieldCheck },
    { title: "用量、成本与延迟追踪", description: "记录供应商、模型、token、预估成本、延迟、requestId 和错误状态。", icon: LineChart },
    { title: "路由策略与成本护栏", description: "支持 cheap、balanced、fast、auto、premium 或指定 provider:model，配合 maxCostUsd。", icon: ShieldCheck },
    { title: "可计费的运营体系", description: "像运营 SaaS 一样运营 AI：套餐、限额、商业可见性和运营者工作流。", icon: Bot }
  ]
};
