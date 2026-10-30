import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  FileCheck2,
  FileText,
  Layers3,
  LineChart,
  Mic2,
  Network,
  Plug,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";

import { TheOneMark } from "@/components/brand/TheOneMark";
import { theOneCapabilities, theOneFacts, theOneSystemRoles } from "@/data/theone";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "TheOne · Beyond Answers. Into Action.",
    description: "TheOne is OneAI Labs' governed AI operating system for coding, research, documents, voice, goals and automations."
  },
  zh: {
    title: "TheOne · 不止回答，开始行动",
    description: "TheOne 是 OneAI Labs 面向编程、调研、文档、语音、目标与自动化的受治理 AI 操作系统。"
  }
};

const content = {
  en: {
    official: "Visit the official site",
    open: "Open the web app",
    download: "Download Desktop",
    imageAlt: "TheOne workspace showing the current product interface with example content",
    imageNote: "Current product interface with example content; not a live task or benchmark result.",
    capabilityEyebrow: "What it does",
    capabilityHeading: "One workspace for the work you hand off.",
    capabilityBody: "The product website goes deeper on every area. This company page keeps the map short and sends you to the source.",
    what: {
      eyebrow: "Not another chatbot",
      heading: "TheOne is not a demo shell. It is a kernel.",
      body: "TheOne does not aim to be another chatbot, workflow builder or automation tool — those are capabilities it can use, not what it is. Its identity is a persistent root intelligence: it keeps its own state, memory, goals and responsibility chain across sessions, so closing the window does not reset what it was doing or what it has learned.",
      quote: "A governed, verifiable and persistent intelligence that understands human intent, acts across digital and physical systems, learns from verified outcomes, and improves only through controlled release gates."
    },
    loopEyebrow: "How it works",
    loopHeading: "Understand. Act. Verify. Learn. Improve.",
    loopBody: "TheOne can carry work forward, but action, accepted evidence and product improvement remain separate decisions.",
    loop: [
      { title: "Understand", text: "Turn intent and constraints into a policy-aware plan.", icon: BrainCircuit },
      { title: "Act", text: "Coordinate intelligence, skills and approved execution.", icon: Workflow },
      { title: "Verify", text: "Check the outcome against proof, cost and quality.", icon: ShieldCheck },
      { title: "Learn", text: "Keep only verified outcomes as reusable experience.", icon: Database },
      { title: "Improve", text: "Evaluate candidates before canary, promotion or rollback.", icon: Activity }
    ],
    systemEyebrow: "Inside the OneAI platform",
    systemHeading: "TheOne coordinates. The platform supplies the rest.",
    systemBody: "The boundary matters: one product does not silently become the model provider, executor, scheduler, evidence store and release authority.",
    technicalEyebrow: "For technical readers",
    technicalHeading: "The architecture and maturity stay public.",
    technicalBody: "Open the sections below for the seven-layer model and the L1–L6 maturity ladder. They explain how the product is built without replacing the product website.",
    architectureSummary: "Seven layers that keep identity, authority and proof stable",
    maturitySummary: "Maturity: L4 foundation verified, L5 independently unproven",
    layers: [
      ["Root intelligence", "Understanding, reasoning, decisions, delegation, reflection and adaptation."],
      ["Trusted kernel", "Identity, state, runs, policy, approval, budget, permission, scheduling and recovery."],
      ["Cognitive plane", "Model routing, planning, reasoning and capability awareness."],
      ["Memory & experience", "Context, episodic and semantic memory, and governed experience."],
      ["Agent & execution plane", "Skills, sub-agents, durable work and approved external execution."],
      ["Trust plane", "Independent verification, artifacts, receipts, evidence and audit."],
      ["Evolution layer", "Failure mining, candidates, benchmark, canary, promotion and rollback."]
    ],
    levels: [
      ["L1", "Assistant", "Conversation and model calls.", true],
      ["L2", "Agent", "Tool use and an agent loop.", true],
      ["L3", "Agent OS", "Durable runtime, memory, policy and verification.", true],
      ["L4", "Learning Agent OS", "Governed experience, self model and independent verification.", true],
      ["L5", "Self-evolving intelligence", "Governed candidates across skills, strategy, prompts and models.", false],
      ["L6", "Intelligence organization", "Dynamic multi-agent, long-horizon enterprise operation.", false]
    ],
    maturityNote: "Claimed today: the connected L4 learning foundation and its governance boundaries. Not claimed: autonomous self-evolution, unsupervised production promotion, or an independently proven L5 system.",
    kernel: {
      eyebrow: "Current engineering focus",
      heading: "A governed learning foundation — not an autonomous one.",
      body: "Every entry point — chat, automation, event, API, coding and multi-agent — resolves into the same governed run. Verified outcomes may become experience; candidate improvements still pass evaluation, approval, canary and rollback gates.",
      principle: "One Run. One State Machine. One Trust Model. One Recovery Model.",
      items: [
        "Strict run state machine — illegal transitions like completed → executing are rejected by default.",
        "Immutable run events — the full, tamper-evident history behind every run, not a mutable log field.",
        "Run-bound approval — a grant is checked against tenant, user, run, action and policy version, and cannot be reused by another task.",
        "Full checkpoint contract — state, plan, tool state, budget, pending approvals and artifacts, so a run survives a restart or a deploy.",
        "Unified entry points — automation, webhook, API and chat all create the same run and hand it to the same kernel.",
        "Governed experience — only verified outcomes can become reusable experience, linked back to their evidence.",
        "Controlled evolution — candidates are evaluated against a baseline, approved, canaried, monitored and reversible."
      ]
    },
    finalEyebrow: "The product now has its own home",
    finalHeading: "Explore TheOne where the product stays current.",
    finalBody: "Use OneAI Labs for the company and platform context. Use the1os.io for product capabilities, downloads and the app."
  },
  zh: {
    official: "访问 TheOne 官网",
    open: "打开网页版",
    download: "下载桌面版",
    imageAlt: "TheOne 工作空间当前产品界面，包含示例内容",
    imageNote: "当前产品界面，包含示例内容；不是实时任务或性能测试结果。",
    capabilityEyebrow: "能做什么",
    capabilityHeading: "一个工作空间，承接你交出去的工作。",
    capabilityBody: "每项能力的具体介绍都由 TheOne 官网维护。公司官网只保留清晰的产品地图，并把你送到真正的产品来源。",
    what: {
      eyebrow: "不是另一个聊天机器人",
      heading: "TheOne 不是演示壳层，它是一个内核。",
      body: "TheOne 不以成为另一个聊天机器人、工作流构建器或自动化工具为终点——这些是它可以调用的能力，而不是它的定位。它的身份是一个持续存在的根智能体：跨会话维护自己的状态、记忆、目标与责任链，关闭界面不会重置正在推进的工作，也不会抹去已经学到的东西。",
      quote: "一个受治理、可验证、持续存在的数字智能体。它理解人的目标，在数字与物理系统中行动，从经过验证的结果中学习，并且只通过受控发布门禁持续改进。"
    },
    loopEyebrow: "如何运作",
    loopHeading: "理解、行动、验证、学习、改进。",
    loopBody: "TheOne 可以持续推进工作，但执行动作、接受证据和改进产品始终是相互分离的决策。",
    loop: [
      { title: "理解", text: "把意图和约束转成符合策略的计划。", icon: BrainCircuit },
      { title: "行动", text: "协调智能、技能与经过批准的执行。", icon: Workflow },
      { title: "验证", text: "根据证据、成本与质量核对真实结果。", icon: ShieldCheck },
      { title: "学习", text: "只有经过验证的结果才能沉淀为可复用经验。", icon: Database },
      { title: "改进", text: "候选改进先评测，再金丝雀、晋级或回滚。", icon: Activity }
    ],
    systemEyebrow: "在 OneAI 平台中的位置",
    systemHeading: "TheOne 负责协调，平台各系统各司其职。",
    systemBody: "边界很重要：一个产品不会悄悄同时成为模型服务商、执行器、调度器、证据库和发布权威。",
    technicalEyebrow: "给技术读者",
    technicalHeading: "架构与成熟度继续公开。",
    technicalBody: "展开下面两个部分，可以查看七层架构和 L1–L6 成熟度阶梯。它们解释产品如何构建，但不会取代产品官网。",
    architectureSummary: "维持身份、权限与证据稳定的七层架构",
    maturitySummary: "成熟度：L4 基础已验证，L5 尚未获得独立证明",
    layers: [
      ["根智能层", "理解、推理、决策、委派、反思与适应。"],
      ["可信内核", "身份、状态、运行、策略、审批、预算、权限、调度与恢复。"],
      ["认知平面", "模型路由、规划、推理与能力认知。"],
      ["记忆与经验", "上下文、情景与语义记忆，以及受治理经验。"],
      ["Agent 与执行平面", "技能、子 Agent、持久工作和经过批准的外部执行。"],
      ["信任平面", "独立验证、产物、回执、证据与审计。"],
      ["进化层", "失败挖掘、候选能力、基准评测、金丝雀、晋级与回滚。"]
    ],
    levels: [
      ["L1", "助手", "对话与模型调用。", true],
      ["L2", "Agent", "工具使用与 Agent 循环。", true],
      ["L3", "Agent OS", "持久运行时、记忆、策略与验证。", true],
      ["L4", "学习型 Agent OS", "受治理经验、自我模型与独立验证。", true],
      ["L5", "自进化智能", "技能、策略、提示词与模型候选的受治理进化。", false],
      ["L6", "智能组织", "动态多 Agent、长期目标与企业级持续运行。", false]
    ],
    maturityNote: "当前可宣称的是已连接的 L4 学习基础及其治理边界。尚未宣称：自主自我进化、无人监督的生产晋级，或经独立证明的 L5 系统。",
    kernel: {
      eyebrow: "当前工程焦点",
      heading: "受治理的学习基础，而不是自主进化。",
      body: "所有入口——Chat、Automation、Event、API、Coding、Multi-Agent——都收敛进同一个受治理的 Run。验证通过的结果可以沉淀为经验；候选改进仍必须经过评测、审批、Canary 与回滚门禁。",
      principle: "One Run. One State Machine. One Trust Model. One Recovery Model.",
      items: [
        "严格的 Run 状态机——像 completed → executing 这样的非法回退，默认被拒绝。",
        "不可变的 Run 事件——每一次运行完整、不可篡改的历史，而不是一段可覆写的日志字段。",
        "与 Run 绑定的审批——授权同时校验租户、用户、Run、动作与策略版本，不能被另一个任务复用。",
        "完整的 Checkpoint 契约——状态、计划、工具状态、预算、待处理审批与产物，让运行能扛住重启或一次部署。",
        "统一入口——Automation、Webhook、API 与 Chat 都创建同一种 Run，交给同一个内核。",
        "受治理经验——只有经过验证的结果才能成为可复用经验，并且必须能追溯到证据。",
        "受控进化——候选改进先与基线评测，再审批、Canary、监控，并保持可回滚。"
      ]
    },
    finalEyebrow: "产品现在有了自己的官网",
    finalHeading: "在持续更新的产品官网里认识 TheOne。",
    finalBody: "OneAI Labs 官网负责公司与平台背景；the1os.io 负责产品能力、下载与网页版入口。"
  }
} as const;

const capabilityIcons = {
  coding: Code2,
  voice: Mic2,
  research: BriefcaseBusiness,
  documents: FileText,
  goals: Workflow,
  memory: Database,
  skills: Sparkles,
  integrations: Plug,
  markets: LineChart,
  evolution: Activity
} as const;

function productUrl(locale: "en" | "zh", path: string) {
  return `${site.theOneWebsiteUrl}${locale === "zh" ? "/zh" : ""}${path}`;
}

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/theone", meta);
}

export default async function TheOnePage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];
  const facts = theOneFacts[locale];
  const officialUrl = locale === "zh" ? `${site.theOneWebsiteUrl}/zh` : site.theOneWebsiteUrl;
  const downloadUrl = locale === "zh" ? `${site.theOneWebsiteUrl}/zh/download` : site.theOneDownloadUrl;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TheOne",
    url: site.theOneWebsiteUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, macOS, Windows",
    description: meta[locale].description,
    creator: { "@type": "Organization", name: site.name, url: site.url },
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-radial-blue">
        <div className="grid-mask absolute inset-0 opacity-60" />
        <div className="relative site-shell-wide section-y">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-oneai-gold/25 bg-oneai-gold/[0.07] p-3 pr-5">
            <span className="rounded-xl bg-[#faf9f5] p-1.5"><TheOneMark size={38} /></span>
            <span className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold">THEONE</span>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-oneai-gold sm:text-sm">{facts.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-7xl">{facts.headline}</h1>
          <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-cyan-100 sm:text-2xl">{facts.position}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{facts.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">{t.official} <ArrowUpRight className="h-4 w-4" /></a>
            <a href={site.theOneAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-oneai-cyan/35 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-oneai-cyan">{t.open} <ArrowRight className="h-4 w-4" /></a>
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-gold/60">{t.download} <Download className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-[#faf9f5] p-2 shadow-glow sm:p-3">
            <Image src={`${site.theOneWebsiteUrl}/screens/home-${locale}.jpg`} alt={t.imageAlt} width={2400} height={1500} priority unoptimized className="block h-auto w-full rounded-2xl" />
            <figcaption className="px-3 py-3 text-xs leading-5 text-slate-600">{t.imageNote}</figcaption>
          </figure>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {facts.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <strong className="font-mono-accent text-3xl text-white">{stat.value}</strong>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">{facts.snapshotNote}</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.capabilityEyebrow}</p>
            <h2 className="section-title mt-4">{t.capabilityHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.capabilityBody}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {theOneCapabilities.map((capability) => {
              const Icon = capabilityIcons[capability.key as keyof typeof capabilityIcons];
              return (
                <a key={capability.key} href={productUrl(locale, capability.path)} target="_blank" rel="noopener noreferrer" className="group min-w-0 rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition hover:border-oneai-cyan/45 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200"><Icon className="h-5 w-5" /></span>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-oneai-cyan" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{capability.title[locale]}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{capability.description[locale]}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="section-eyebrow">{t.what.eyebrow}</p>
              <h2 className="section-title mt-4">{t.what.heading}</h2>
              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.what.body}</p>
            </div>
            <div className="rounded-3xl border border-oneai-gold/20 bg-oneai-gold/[0.06] p-6 sm:p-7">
              <Sparkles className="h-5 w-5 text-oneai-gold" />
              <p className="mt-4 text-base italic leading-7 text-amber-100/90">&ldquo;{t.what.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.loopEyebrow}</p>
            <h2 className="section-title mt-4">{t.loopHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.loopBody}</p>
          </div>
          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-5">
            {t.loop.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <Icon className="h-5 w-5 text-oneai-cyan" />
                  <p className="mt-5 font-mono-accent text-xs text-slate-600">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-eyebrow">{t.systemEyebrow}</p>
              <h2 className="section-title mt-4">{t.systemHeading}</h2>
              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.systemBody}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {theOneSystemRoles.map((system) => (
                <article key={system.name} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <div className="flex items-center gap-3"><Network className="h-4 w-4 text-oneai-gold" /><h3 className="font-semibold text-white">{system.name}</h3></div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{system.role[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.technicalEyebrow}</p>
            <h2 className="section-title mt-4">{t.technicalHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.technicalBody}</p>
          </div>
          <div className="mt-10 grid gap-4">
            <details className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <summary className="flex cursor-pointer list-none items-center gap-3 text-lg font-semibold text-white"><Layers3 className="h-5 w-5 text-oneai-cyan" />{t.architectureSummary}<span className="ml-auto text-oneai-gold group-open:rotate-45">+</span></summary>
              <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {t.layers.map(([title, text], index) => <article key={title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"><span className="font-mono-accent text-xs text-slate-600">0{index + 1}</span><h3 className="mt-2 font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></article>)}
              </div>
            </details>
            <details className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <summary className="flex cursor-pointer list-none items-center gap-3 text-lg font-semibold text-white"><FileCheck2 className="h-5 w-5 text-oneai-gold" />{t.maturitySummary}<span className="ml-auto text-oneai-gold group-open:rotate-45">+</span></summary>
              <div className="mt-6 grid gap-3">
                {t.levels.map(([level, title, text, done]) => (
                  <div key={level} className={`flex flex-col gap-2 rounded-2xl border p-4 sm:flex-row sm:items-center sm:gap-5 ${level === "L4" ? "border-oneai-gold/40 bg-oneai-gold/[0.06]" : "border-white/10 bg-slate-950/40"}`}>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${done ? "bg-oneai-cyan/20 text-oneai-cyan" : "border border-white/15 text-slate-500"}`}>{level}</span>
                    <strong className="sm:w-48 text-white">{title}</strong>
                    <p className="text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-4xl text-xs leading-5 text-slate-500">{t.maturityNote}</p>
            </details>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-eyebrow">{t.kernel.eyebrow}</p>
              <h2 className="section-title mt-4">{t.kernel.heading}</h2>
              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.kernel.body}</p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4 text-sm leading-6 text-cyan-100/90">
                <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" /> {t.kernel.principle}
              </div>
            </div>
            <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
              <div className="space-y-3">
                {t.kernel.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-oneai-gold" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-radial-blue">
        <div className="site-shell-narrow section-y text-center">
          <Bot className="mx-auto h-8 w-8 text-oneai-gold" />
          <p className="section-eyebrow mt-5">{t.finalEyebrow}</p>
          <h2 className="section-title mx-auto mt-4 max-w-4xl">{t.finalHeading}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.finalBody}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">{t.official} <ArrowUpRight className="h-4 w-4" /></a>
            <a href={site.theOneAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-oneai-cyan/35 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-oneai-cyan">{t.open} <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
