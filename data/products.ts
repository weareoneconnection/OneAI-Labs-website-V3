import { Anvil, Bot, Boxes, Clapperboard, Cpu, Database, Eye, LineChart, Network, ScanSearch, ShieldCheck, Target, Zap, type LucideIcon } from "lucide-react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

// Maturity is assigned by an objective, checkable rule rather than by ambition:
//   GA      — own domain, published SLA, paying customers
//   Beta    — own domain, usable today, no SLA commitment
//   Preview — still on a default platform domain, or no public surface yet
// Nothing here may be labelled above what its evidence supports.
export type ProductStage = "GA" | "Beta" | "Preview";

// Tier is editorial weight, not maturity. A mature product can still be a small
// surface, and a flagship is what we want a first-time reader to leave remembering.
// The two are independent on purpose: every card keeps its own honest stage badge,
// so a Beta product listed under Labs still reads Beta.
export type ProductTier = "flagship" | "labs";

// Role is architectural, not editorial: which part of the company this product is.
// It answers a different question than tier or stage —
//   platform — one of the seven systems the whole company runs on
//   applied  — a business built on top of the platform, in one industry
//   labs     — a smaller surface or early exploration
// A product's role does not change with its maturity: TheOne is "platform" whether
// its stage badge says Preview or GA, because the role describes what it is, not how
// finished it is. Conflating the two was the exact confusion "Four flagships" caused —
// OneClaw and OneField read as also-rans next to Core and Forge, when architecturally
// they are the same kind of thing.
export type ProductRole = "platform" | "applied" | "labs";

export type Product = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  stage: ProductStage;
  tier: ProductTier;
  role: ProductRole;
  poweredBy: string;
  /** Short capability words, shown only for role: "platform" products. */
  capabilities?: string[];
  /** For a flagship that is more than one product on one domain. */
  includes?: string[];
  icon: LucideIcon;
};

export const products: Record<Locale, Product[]> = {
  en: [
    {
      name: "OneAI Core",
      tagline: "Commercial AI Operating Layer",
      description: "Model access, routing, cost guards, API keys, usage tracking and billing-ready operations behind one commercial API.",
      href: site.appUrl,
      poweredBy: "The layer every product below runs on",
      capabilities: ["Model access", "Routing", "Usage", "Cost"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Network
    },
    {
      name: "OneForge",
      tagline: "AI Capability Control Plane",
      description: "One governed control plane, three factories — Model, Agent and Evolution — where nothing reaches production without evaluation, approval and a rollback path.",
      href: "https://forge.oneai.network/",
      poweredBy: "Governed control plane + Model, Agent & Evolution factories",
      capabilities: ["Capabilities", "Evaluation", "Release", "Rollback"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Anvil
    },
    {
      name: "TheOne",
      tagline: "Governed Agent OS",
      description: "Persistent root intelligence for goals, authority, governed computers, independent verification, experience and controlled evolution.",
      href: site.theOneUrl,
      poweredBy: "Authority + Sentinel + Governed Computer + Experience",
      capabilities: ["Goals", "Authority", "Verification", "Evolution"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Cpu
    },
    {
      name: "OneMission",
      tagline: "Durable Mission & Work Runtime",
      description: "Turns governed plans into durable task graphs, assignments, leases, retries, approvals and verified completion across humans and agents.",
      href: site.oneMissionUrl,
      poweredBy: "PostgreSQL task graph + durable orchestrator + signed service API",
      capabilities: ["Task graphs", "Assignment", "Recovery", "Approval"],
      stage: "Preview",
      tier: "flagship",
      role: "platform",
      icon: Target
    },
    {
      name: "OneClaw",
      tagline: "Action & Execution Layer",
      description: "Turn AI outputs into workflows, reports, actions and API calls.",
      href: site.oneClawUrl,
      poweredBy: "Task output + execution flow",
      capabilities: ["Tools", "Actions", "Execution"],
      stage: "Preview",
      tier: "flagship",
      role: "platform",
      icon: Zap
    },
    {
      name: "OneField",
      tagline: "Trusted Shared Reality Layer",
      description: "Tenant-scoped evidence, consent, context and verifier-linked records that give every One system a shared, auditable view of reality.",
      href: site.oneFieldUrl,
      poweredBy: "Tenant isolation + consent + context packs + verifier evidence",
      capabilities: ["Evidence", "Context", "Consent", "Reconciliation"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Database
    },
    {
      name: "Independent Verifier",
      tagline: "Cryptographic Outcome Verification",
      description: "An independently deployed service that verifies execution outcomes and signs evidence before results can be trusted, promoted or learned from.",
      href: "/evidence",
      poweredBy: "Independent service boundary + signed verification evidence",
      capabilities: ["Verify", "Sign", "Attest", "Audit"],
      stage: "Preview",
      tier: "flagship",
      role: "platform",
      icon: ScanSearch
    },
    {
      // One business on one domain. Splitting it into two cards made the largest
      // applied bet on this site read as two small ones.
      name: "OneAI Construction",
      tagline: "Intelligence for the built world",
      description: "Construction OS for documents, knowledge and RFI / NCR workflows; Construction Twin for BIM, 4D schedule, risk and evidence. Its own brand, on its own domain.",
      href: site.constructionUrl,
      poweredBy: "Core routing + Forge governance + OneField evidence",
      stage: "Beta",
      tier: "flagship",
      role: "applied",
      includes: ["Construction OS", "Construction Twin"],
      icon: Boxes
    },
    {
      name: "OneVideo Studio",
      tagline: "AI Short-Drama Operating System",
      description: "Turn one sentence into a scripted, voiced and publishable short drama.",
      href: "https://www.onevideo.studio/",
      poweredBy: "Drama beat engine + native-voice pipeline",
      stage: "Beta",
      tier: "flagship",
      role: "applied",
      icon: Clapperboard
    },
    {
      name: "OneAI Bot",
      tagline: "AI Assistant Interface",
      description: "A conversational AI entry point for users, teams and communities.",
      href: "https://t.me/WAOCOneAIBot",
      poweredBy: "Core Gateway + Task API",
      stage: "Beta",
      tier: "labs",
      role: "labs",
      icon: Bot
    },
    {
      name: "OneAI Mirror",
      tagline: "Civilization Mirror & Belief Simulation",
      description: "Turn one belief, instinct or behavior into a shareable civilization-scale outcome.",
      href: "https://onemirror-v1.vercel.app/",
      poweredBy: "OneAI Core + Agent Systems",
      stage: "Preview",
      tier: "labs",
      role: "labs",
      icon: Eye
    },
    {
      name: "OneAI Trading OS",
      tagline: "AI Market Research, Risk & Discipline Tools",
      description: "Market briefs, risk radar, strategy review and trading journal.",
      href: "https://oneaitradingbot.vercel.app/",
      poweredBy: "Market research + risk guard",
      stage: "Preview",
      tier: "labs",
      role: "labs",
      icon: LineChart
    }
  ],
  zh: [
    {
      name: "OneAI Core",
      tagline: "商业化 AI 运行层",
      description: "模型接入、路由、成本护栏、API 密钥、用量追踪与可计费运营，收在同一个商业 API 之下。",
      href: site.appUrl,
      poweredBy: "下面每一个产品都跑在这一层上",
      capabilities: ["模型接入", "路由", "用量", "成本"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Network
    },
    {
      name: "OneForge",
      tagline: "AI 能力控制平面",
      description: "一个受治理的控制平面，三条能力线——Model、Agent 与 Evolution——没有评测、审批和回滚路径，任何东西都进不了生产。",
      href: "https://forge.oneai.network/",
      poweredBy: "受治理控制平面 + Model / Agent / Evolution 三条能力线",
      capabilities: ["能力", "评测", "发布", "回滚"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Anvil
    },
    {
      name: "TheOne",
      tagline: "受治理的 Agent OS",
      description: "面向目标、Authority、受治理计算机、独立验证、经验沉淀与受控进化的持续根智能。",
      href: site.theOneUrl,
      poweredBy: "Authority + Sentinel + 受治理计算机 + 经验",
      capabilities: ["目标", "Authority", "验证", "进化"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Cpu
    },
    {
      name: "OneMission",
      tagline: "持久化使命与工作运行时",
      description: "把受治理计划变成持久任务图、分配、租约、重试、审批，以及人类与 Agent 共同完成的可验证结果。",
      href: site.oneMissionUrl,
      poweredBy: "PostgreSQL 任务图 + 持久调度器 + 签名服务 API",
      capabilities: ["任务图", "分配", "恢复", "审批"],
      stage: "Preview",
      tier: "flagship",
      role: "platform",
      icon: Target
    },
    {
      name: "OneClaw",
      tagline: "动作与执行层",
      description: "把 AI 输出变成工作流、报告、动作和 API 调用。",
      href: site.oneClawUrl,
      poweredBy: "任务输出 + 执行流",
      capabilities: ["工具", "动作", "执行"],
      stage: "Preview",
      tier: "flagship",
      role: "platform",
      icon: Zap
    },
    {
      name: "OneField",
      tagline: "可信共享现实层",
      description: "用租户隔离的证据、授权、上下文与 Verifier 关联记录，为整个 One 系统建立共享且可审计的现实。",
      href: site.oneFieldUrl,
      poweredBy: "租户隔离 + 授权 + 上下文包 + Verifier 证据",
      capabilities: ["证据", "上下文", "授权", "对账"],
      stage: "Beta",
      tier: "flagship",
      role: "platform",
      icon: Database
    },
    {
      name: "Independent Verifier",
      tagline: "结果的密码学独立验证",
      description: "以独立部署边界验证执行结果并签署证据；结果在被信任、晋级或沉淀为经验之前，必须先经过验证。",
      href: "/evidence",
      poweredBy: "独立服务边界 + 签名验证证据",
      capabilities: ["验证", "签名", "证明", "审计"],
      stage: "Preview",
      tier: "flagship",
      role: "platform",
      icon: ScanSearch
    },
    {
      name: "OneAI Construction",
      tagline: "面向建成环境的智能",
      description: "Construction OS 负责文档、项目知识与 RFI / NCR 工作流；Construction Twin 负责 BIM、4D 进度、风险与证据。独立品牌，独立域名。",
      href: site.constructionUrl,
      poweredBy: "Core 路由 + Forge 治理 + OneField 证据",
      stage: "Beta",
      tier: "flagship",
      role: "applied",
      includes: ["Construction OS", "Construction Twin"],
      icon: Boxes
    },
    {
      name: "OneVideo Studio",
      tagline: "AI 短剧操作系统",
      description: "一句话变成有剧本、有配音、可直接发布的短剧。",
      href: "https://www.onevideo.studio/",
      poweredBy: "剧情节拍引擎 + 原声演出管线",
      stage: "Beta",
      tier: "flagship",
      role: "applied",
      icon: Clapperboard
    },
    {
      name: "OneAI Bot",
      tagline: "AI 助手界面",
      description: "面向用户、团队和社区的对话式 AI 入口。",
      href: "https://t.me/WAOCOneAIBot",
      poweredBy: "Core 网关 + 任务 API",
      stage: "Beta",
      tier: "labs",
      role: "labs",
      icon: Bot
    },
    {
      name: "OneAI Mirror",
      tagline: "文明镜像与信念模拟",
      description: "把一个信念、本能或行为，放大成可分享的文明级结果。",
      href: "https://onemirror-v1.vercel.app/",
      poweredBy: "OneAI Core + Agent Systems",
      stage: "Preview",
      tier: "labs",
      role: "labs",
      icon: Eye
    },
    {
      name: "OneAI Trading OS",
      tagline: "AI 市场研究、风险与纪律工具",
      description: "市场简报、风险雷达、策略复盘和交易日志。",
      href: "https://oneaitradingbot.vercel.app/",
      poweredBy: "市场研究 + 风险守护",
      stage: "Preview",
      tier: "labs",
      role: "labs",
      icon: LineChart
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
