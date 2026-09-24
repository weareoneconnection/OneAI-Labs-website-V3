import {
  Activity,
  BrainCircuit,
  Cpu,
  Database,
  FileCheck2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "TheOne · Governed Agent Kernel",
    description: "TheOne is OneAI Labs' persistent root intelligence — a governed, verifiable agent kernel built on a strict run state machine, run-bound approvals and provable outcomes."
  },
  zh: {
    title: "TheOne · 受治理的 Agent 内核",
    description: "TheOne 是 OneAI Labs 的持续根智能体——一个受治理、可验证的 Agent 内核，建立在严格的运行状态机、与运行绑定的审批和可证明的结果之上。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "TheOne",
      title: "One agent on the surface. An intelligence operating system underneath.",
      description: "TheOne is OneAI Labs' persistent root intelligence: a governed, verifiable agent kernel that understands human intent, acts across digital and physical systems, and learns from every verified outcome.",
      ctaLabel: "Open TheOne"
    },
    what: {
      eyebrow: "Not another chatbot",
      heading: "TheOne is not a demo shell. It is a kernel.",
      body: "TheOne does not aim to be another chatbot, workflow builder or automation tool — those are capabilities it can use, not what it is. Its identity is a persistent root intelligence: it keeps its own state, memory, goals and responsibility chain across sessions, so closing the window does not reset what it was doing or what it has learned.",
      quote: "A governed, verifiable, persistent and self-evolving intelligence that understands human intent, acts across the digital and physical world, learns from every verified outcome, and continuously improves its ability to accomplish human goals."
    },
    loop: {
      eyebrow: "The permanent core loop",
      heading: "Every capability serves the same cycle.",
      body: "No action becomes trusted experience without verification, and no improvement reaches production without evidence.",
      steps: [
        { title: "Understand", text: "Classify intent and build a policy-aware plan.", icon: BrainCircuit },
        { title: "Act", text: "Route work to sub-agents, tools and connected systems under policy.", icon: Workflow },
        { title: "Verify", text: "Score real outcomes against proof, cost and quality checks.", icon: ShieldCheck },
        { title: "Learn", text: "Turn a verified run into retrievable, reusable experience.", icon: Database },
        { title: "Evolve", text: "Propose, evaluate and gate candidate improvements against a baseline.", icon: Activity }
      ]
    },
    layers: {
      eyebrow: "Seven-layer architecture",
      heading: "Models and tools change. These seven layers hold identity and trust steady.",
      body: "TheOne is built to let providers, models and product surfaces keep changing underneath it, without identity, governance, verification or accountability drifting.",
      items: [
        { title: "Root Intelligence", text: "Understanding, reasoning, decisions, delegation, reflection and adaptation.", icon: BrainCircuit },
        { title: "Trusted Kernel", text: "Identity, state, runs, policy, approval, budget, permission, scheduling and recovery.", icon: ShieldCheck },
        { title: "Cognitive Plane", text: "Model routing, planning, reasoning and capability self-awareness.", icon: Cpu },
        { title: "Memory & Experience", text: "Context, episodic memory, semantic memory and an experience graph.", icon: Database },
        { title: "Agent & Execution Plane", text: "Skills, sub-agents, durable runs, OneClaw, desktop, API, code and OneField.", icon: Workflow },
        { title: "Trust Plane", text: "Verification, evaluation, artifacts, receipts, evidence, proof and audit.", icon: FileCheck2 },
        { title: "Evolution Layer", text: "Reflection, failure mining, candidate capabilities, benchmark, canary, promotion and rollback.", icon: Activity }
      ]
    },
    roadmap: {
      eyebrow: "Where it stands today",
      heading: "TheOne is at L3, moving into L4 — not further.",
      body: "Maturity is stated as a level TheOne has evidence for, not a level it is aiming at. L4 through L6 are the long-term direction, not a claim about what ships today.",
      levels: [
        { level: "L1", title: "Assistant", text: "Conversation and model calls.", done: true, current: false },
        { level: "L2", title: "Agent", text: "Tool use and an agent loop.", done: true, current: false },
        { level: "L3", title: "Agent OS", text: "Durable runtime, memory, policy and verification.", done: true, current: true },
        { level: "L4", title: "Learning Intelligence", text: "Experience, failure intelligence, adaptive routing.", done: false, current: true },
        { level: "L5", title: "Self-Evolving Intelligence", text: "Governed evolution of skills, strategy, prompts and model candidates.", done: false, current: false },
        { level: "L6", title: "Intelligence Organization", text: "Dynamic multi-agent, long-horizon goals, enterprise-scale operation.", done: false, current: false }
      ],
      disclaimer: "This describes long-term direction and architecture, not a commitment about the current shipped version. Specific capabilities are defined by the repository, test results, release notes and production status."
    },
    kernel: {
      eyebrow: "Current engineering focus",
      heading: "Kernel V2.1 — before Experience, before self-evolution.",
      body: "Before TheOne earns Experience, Adaptive Routing or any self-evolution, every entry point — chat, automation, event, API, coding, multi-agent — must resolve into the same governed run.",
      principle: "One Run. One State Machine. One Trust Model. One Recovery Model.",
      items: [
        "Strict run state machine — illegal transitions like completed → executing are rejected by default.",
        "Immutable run events — the full, tamper-evident history behind every run, not a mutable log field.",
        "Run-bound approval — a grant is checked against tenant, user, run, action and policy version, and cannot be reused by another task.",
        "Full checkpoint contract — state, plan, tool state, budget, pending approvals and artifacts, so a run survives a restart or a deploy.",
        "Unified entry points — automation, webhook, API and chat all create the same run and hand it to the same kernel."
      ]
    }
  },
  zh: {
    hero: {
      eyebrow: "TheOne",
      title: "表面是一个智能体，底层是一套完整的智能操作系统。",
      description: "TheOne 是 OneAI Labs 的持续根智能体：一个受治理、可验证的 Agent 内核，理解人的目标，在数字与物理系统中行动，并从每一次经过验证的结果中学习。",
      ctaLabel: "打开 TheOne"
    },
    what: {
      eyebrow: "不是另一个聊天机器人",
      heading: "TheOne 不是演示壳层，它是一个内核。",
      body: "TheOne 不以成为另一个聊天机器人、工作流构建器或自动化工具为终点——这些是它可以调用的能力，而不是它的定位。它的身份是一个持续存在的根智能体：跨会话维护自己的状态、记忆、目标与责任链，关闭界面不会重置正在推进的工作，也不会抹去已经学到的东西。",
      quote: "一个受治理、可验证、持续存在并能够自我进化的数字智能体。它理解人的目标，在数字与物理世界中行动，从每一次经过验证的结果中学习，并持续提升完成目标的能力。"
    },
    loop: {
      eyebrow: "永久不变的核心闭环",
      heading: "所有能力最终都服务于同一个循环。",
      body: "没有验证的行动不能直接成为可靠经验，没有证据支持的改进不能直接进入生产系统。",
      steps: [
        { title: "理解", text: "识别意图，构建符合策略的计划。", icon: BrainCircuit },
        { title: "行动", text: "在策略约束下，把工作路由给子智能体、工具与连接系统。", icon: Workflow },
        { title: "验证", text: "用证据、成本与质量检查核对真实结果。", icon: ShieldCheck },
        { title: "学习", text: "把经过验证的运行，变成可检索、可复用的经验。", icon: Database },
        { title: "进化", text: "提出候选改进，与基线比较评估，再决定发布或回滚。", icon: Activity }
      ]
    },
    layers: {
      eyebrow: "七层架构",
      heading: "模型和工具会变，这七层维持身份与信任的稳定。",
      body: "TheOne 的架构允许底层的供应商、模型和产品形态持续变化，同时保持身份、治理、验证与责任边界稳定。",
      items: [
        { title: "Root Intelligence", text: "理解、推理、决策、委派、反思与适应。", icon: BrainCircuit },
        { title: "Trusted Kernel", text: "身份、状态、运行、策略、审批、预算、权限、调度与恢复。", icon: ShieldCheck },
        { title: "Cognitive Plane", text: "模型路由、规划、推理与能力自我认知。", icon: Cpu },
        { title: "Memory & Experience", text: "上下文、情景记忆、语义记忆与经验图谱。", icon: Database },
        { title: "Agent & Execution Plane", text: "技能、子 Agent、Durable Runs、OneClaw、Desktop、API、代码与 OneField。", icon: Workflow },
        { title: "Trust Plane", text: "验证、评估、Artifact、Receipt、Evidence、Proof 与 Audit。", icon: FileCheck2 },
        { title: "Evolution Layer", text: "反思、失败挖掘、候选能力、Benchmark、Canary、Promotion 与 Rollback。", icon: Activity }
      ]
    },
    roadmap: {
      eyebrow: "当前所处阶段",
      heading: "TheOne 处于 L3，正在进入 L4——不早于此。",
      body: "成熟度只陈述 TheOne 已有证据支撑的等级，而不是它想达到的等级。L4 到 L6 是长期方向，不是对当前交付能力的承诺。",
      levels: [
        { level: "L1", title: "Assistant", text: "对话与模型调用。", done: true, current: false },
        { level: "L2", title: "Agent", text: "Tool Use 与 Agent Loop。", done: true, current: false },
        { level: "L3", title: "Agent OS", text: "Durable Runtime、Memory、Policy、Verification。", done: true, current: true },
        { level: "L4", title: "Learning Intelligence", text: "Experience、Failure Intelligence、Adaptive Routing。", done: false, current: true },
        { level: "L5", title: "Self-Evolving Intelligence", text: "Skill、Strategy、Prompt 与 Model Candidate 的受控进化。", done: false, current: false },
        { level: "L6", title: "Intelligence Organization", text: "动态多 Agent、长期目标与企业级持续运行。", done: false, current: false }
      ],
      disclaimer: "本页描述长期方向与架构，不是对当前发布版本的承诺。具体能力以仓库实现、测试结果、发布说明和生产状态为准。"
    },
    kernel: {
      eyebrow: "当前工程焦点",
      heading: "Kernel V2.1——先于 Experience，先于自我进化。",
      body: "在 TheOne 获得 Experience、Adaptive Routing 或任何自我进化能力之前，所有入口——Chat、Automation、Event、API、Coding、Multi-Agent——都必须先收敛进同一个受治理的 Run。",
      principle: "One Run. One State Machine. One Trust Model. One Recovery Model.",
      items: [
        "严格的 Run 状态机——像 completed → executing 这样的非法回退，默认被拒绝。",
        "不可变的 Run 事件——每一次运行完整、不可篡改的历史，而不是一段可覆写的日志字段。",
        "与 Run 绑定的审批——授权同时校验租户、用户、Run、动作与策略版本，不能被另一个任务复用。",
        "完整的 Checkpoint 契约——状态、计划、工具状态、预算、待处理审批与产物，让运行能扛住重启或一次部署。",
        "统一入口——Automation、Webhook、API 与 Chat 都创建同一种 Run，交给同一个内核。"
      ]
    }
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/theone", meta);
}

export default async function TheOnePage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.theOneUrl}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
                {t.what.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">{t.what.heading}</h2>
              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.what.body}</p>
            </div>
            <div className="rounded-3xl border border-oneai-gold/20 bg-oneai-gold/[0.06] p-6 sm:p-7">
              <Sparkles className="h-5 w-5 text-oneai-gold" />
              <p className="mt-4 text-base italic leading-7 text-amber-100/90">&ldquo;{t.what.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.loop.eyebrow}</p>
            <h2 className="section-title mt-4">{t.loop.heading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.loop.body}</p>
          </div>
          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3 lg:grid-cols-5">
            {t.loop.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/50 p-5 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.layers.eyebrow}</p>
            <h2 className="section-title mt-4">{t.layers.heading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.layers.body}</p>
          </div>
          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
            {t.layers.items.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={layer.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-oneai-cyan" />
                    <span className="text-xs font-semibold text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{layer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{layer.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.roadmap.eyebrow}</p>
            <h2 className="section-title mt-4">{t.roadmap.heading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.roadmap.body}</p>
          </div>
          <div className="mt-10 grid gap-3">
            {t.roadmap.levels.map((level) => (
              <div
                key={level.level}
                className={`flex min-w-0 flex-col gap-2 rounded-2xl border p-5 sm:flex-row sm:items-center sm:gap-6 ${
                  level.current
                    ? "border-oneai-gold/40 bg-oneai-gold/[0.06]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex shrink-0 items-center gap-3 sm:w-40">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      level.done ? "bg-oneai-cyan/20 text-oneai-cyan" : "border border-white/15 text-slate-500"
                    }`}
                  >
                    {level.level}
                  </span>
                  <span className="text-sm font-semibold text-white">{level.title}</span>
                </div>
                <p className="text-sm leading-6 text-slate-400">{level.text}</p>
                {level.current ? (
                  <span className="mt-1 w-fit shrink-0 rounded-full border border-oneai-gold/40 bg-oneai-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-oneai-gold sm:ml-auto sm:mt-0">
                    {locale === "zh" ? "当前阶段" : "Current"}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-5 text-slate-500">{t.roadmap.disclaimer}</p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
                {t.kernel.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">{t.kernel.heading}</h2>
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

      <FinalCTASection locale={locale} />
    </>
  );
}
