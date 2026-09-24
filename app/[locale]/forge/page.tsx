import Link from "next/link";
import {
  Anvil,
  ArrowRight,
  Bot,
  Boxes,
  Cpu,
  FlaskConical,
  GitBranch,
  GitPullRequest,
  Layers,
  RefreshCw,
  Repeat2,
  ScrollText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "OneForge · AI Capability Control Plane",
    description: "Govern the whole AI capability lifecycle — versioned data, evaluated training, reviewable releases, production traffic and sandboxed engineering. Reproducible, governed, observable."
  },
  zh: {
    title: "OneForge · AI 能力控制平面",
    description: "治理 AI 能力的完整生命周期——数据版本、训练评估、可审阅发布、生产流量和沙箱工程。可复现、受治理、可观测。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneForge",
      title: "Build intelligence. Keep humans in control.",
      description: "OneForge is the AI capability control plane — one operating surface that governs the complete path from versioned data and evaluated training to reviewable releases, production traffic and sandboxed engineering.",
      ctaLabel: "Open OneForge"
    },
    pillars: {
      eyebrow: "Three guarantees",
      heading: "One operating surface for the AI capability lifecycle.",
      body: "Most teams ship models faster than they can govern them. OneForge closes that gap: every artifact is traceable, every release is approved, and every run is auditable.",
      items: [
        { title: "Reproducible", description: "Every artifact has lineage. Data versions, training runs and releases trace back to exactly what produced them.", icon: GitBranch },
        { title: "Governed", description: "Every release has an approver. Nothing reaches production without a designated sign-off.", icon: ShieldCheck },
        { title: "Observable", description: "Every run leaves evidence. Executions generate auditable records for support, compliance and review.", icon: ScrollText }
      ]
    },
    lines: {
      eyebrow: "One control plane, three capability lines",
      heading: "OneForge doesn't just govern models. It governs a factory for each kind of capability.",
      body: "Version, evaluation, approval, canary, rollback, audit and tenant isolation live in one control plane. Model, Agent and Evolution are three factories that register into it — not three separate products with three separate release paths.",
      items: [
        {
          title: "Model factory",
          status: "Verified for single-machine release and real cloud GPU training",
          description: "Idea, dataset and training run through evaluation, checkpoint and registry into the same governed release path — shadow, canary, production, rollback.",
          icon: Cpu,
          highlight: null
        },
        {
          title: "Agent factory",
          status: "A real single-repository task path is verified",
          description: "Agents are managed the way models are: their own data, evaluation, version and release. OneCoder — a real coding agent — clones a repository, opens a branch, edits in an isolated sandbox, tests its own change, hashes the evidence and opens a reviewable pull request.",
          icon: Bot,
          highlight: { icon: GitPullRequest, text: "OneCoder: clone → branch → sandboxed edit → test → evidence hash → reviewable PR" }
        },
        {
          title: "Evolution",
          status: "The loop runs end to end; no candidate has cleared its own quality gate yet",
          description: "Real usage becomes a failure record, a candidate, a real training run and a real independent evaluation — gated by the same production baseline as everything else. Weak candidates get rejected, not shipped.",
          icon: RefreshCw,
          highlight: null
        }
      ]
    },
    lifecycle: {
      eyebrow: "The lifecycle",
      heading: "From versioned data to governed production.",
      steps: [
        { label: "Version data", text: "Track and version the data behind every model, with full lineage." },
        { label: "Evaluate training", text: "Run and evaluate training so releases are backed by evidence, not vibes." },
        { label: "Review releases", text: "Package reviewable releases that a designated approver signs off before promotion." },
        { label: "Manage traffic", text: "Promote to production, manage traffic and keep sandboxed engineering environments." }
      ]
    },
    capabilities: {
      eyebrow: "Capabilities",
      heading: "Control built for teams that answer for their AI.",
      items: [
        { title: "Lineage tracking", description: "Full artifact lineage across data, training and releases.", icon: GitBranch },
        { title: "Dual-principal approval", description: "A second principal with separate credentials must sign off. Not a setting — an invariant: the requester can never approve their own promotion.", icon: UserCheck },
        { title: "Audit evidence", description: "Every run produces records you can hand to support, security or compliance.", icon: ScrollText },
        { title: "Sandboxed engineering", description: "Isolated environments to build and test without touching production.", icon: FlaskConical },
        { title: "Release management", description: "Reviewable releases and controlled production traffic in one surface.", icon: Layers },
        { title: "Secure workspace", description: "Approval tokens held in memory only and cleared on reload.", icon: ShieldCheck }
      ]
    },
    maturity: {
      eyebrow: "Where it stands today",
      heading: "M2, moving toward M3 and M4.",
      body: "Every milestone below can only be Verified, Implemented — pending acceptance, or Planned. Code existing is not evidence; a milestone only moves up when a specific environment produces a repeatable trace, log, hash or drill report.",
      levels: [
        { level: "M0", title: "Execution truth baseline", text: "Real and simulated execution stay permanently distinguishable.", status: "verified", current: false },
        { level: "M1", title: "Single-machine real release", text: "Proves the governance control plane itself: real training, independent evaluation, second-principal approval, shadow, canary and rollback all traced.", status: "verified", current: false },
        { level: "M2", title: "External GPU & isolated execution", text: "Real vLLM inference, AWS two-node T4 training and a governed cloud GPU release have passed; EFA and gVisor isolation are still open.", status: "partial", current: true },
        { level: "M3", title: "High availability & disaster recovery", text: "HA, backup and budget code exists; 30-day SLO observation and drilled recovery are not yet accepted.", status: "pending", current: false },
        { level: "M4", title: "First fully-real evolution gain loop", text: "The loop runs end to end and correctly rejects weak candidates — its best real score, 0.5417, still hasn't cleared its own 0.6 gate.", status: "pending", current: false },
        { level: "M5", title: "Agent factory at production scale", text: "OneCoder's single-repository path is real; multi-team, multi-tool, 90-day production use is not yet proven.", status: "pending", current: false },
        { level: "M6", title: "Multi-tenant AI capability factory", text: "Enterprise SSO, tenant isolation penetration testing and the cross-product flywheel.", status: "planned", current: false }
      ],
      disclaimer: "Commercialization has not started, and is planned to follow — not precede — this internal verification. The flywheel with OneAI Labs' other products also depends on those products reaching real usage, which is outside what OneForge itself can prove.",
      statusLabels: { verified: "Verified", partial: "Partially verified", pending: "Implemented — pending acceptance", planned: "Planned" }
    },
    audience: {
      eyebrow: "Who it is for",
      heading: "For organizations that have to answer for their AI.",
      items: [
        { title: "AI platform teams", description: "Give model and data workflows a governed home instead of scattered scripts and notebooks." },
        { title: "Compliance & risk", description: "Get lineage, approvals and audit evidence built into the lifecycle, not bolted on after." },
        { title: "Regulated industries", description: "Meet human-oversight and traceability expectations for production AI." }
      ]
    },
    fit: {
      eyebrow: "Where it fits",
      heading: "The governance layer of the OneAI stack.",
      body: "OneAI Core runs AI as a commercial product. OneForge governs how that AI capability is built, released and audited — so speed never comes at the cost of control.",
      exploreCore: "Explore OneAI Core",
      seeProducts: "See all products",
      coreLabel: "OneAI Core",
      coreText: "Gateway, routing, cost guards and usage — the commercial operating layer.",
      forgeLabel: "OneForge",
      forgeText: "Lineage, evaluated training, reviewable releases and approver sign-off.",
      resultLabel: "Governed production AI",
      resultText: "Capability that ships fast and stays reproducible, governed and observable."
    }
  },
  zh: {
    hero: {
      eyebrow: "OneForge",
      title: "构建智能，让人类始终掌控。",
      description: "OneForge 是 AI 能力控制平面——用一个操作面治理完整路径：从数据版本、训练评估，到可审阅的发布、生产流量和沙箱工程。",
      ctaLabel: "打开 OneForge"
    },
    pillars: {
      eyebrow: "三重保证",
      heading: "用一个操作面覆盖 AI 能力生命周期。",
      body: "大多数团队发布模型的速度，快过他们治理模型的能力。OneForge 弥合这道鸿沟：每个产物可追溯、每次发布有审批、每次运行可审计。",
      items: [
        { title: "可复现", description: "每个产物都有血缘。数据版本、训练运行和发布，都能追溯到究竟由什么产生。", icon: GitBranch },
        { title: "受治理", description: "每次发布都有审批人。没有指定签核，任何东西都进不了生产。", icon: ShieldCheck },
        { title: "可观测", description: "每次运行都留下证据。执行生成可审计记录，服务于支持、合规与审查。", icon: ScrollText }
      ]
    },
    lines: {
      eyebrow: "一个控制平面，三条能力线",
      heading: "OneForge 治理的不只是模型，是每一类能力各自的工厂。",
      body: "版本、评测、审批、灰度、回滚、审计与租户隔离都活在同一个控制平面里。Model、Agent 与 Evolution 是三条注册进控制平面的能力线——不是三个各自有发布路径的独立产品。",
      items: [
        {
          title: "模型工厂",
          status: "单机发布与真实云端 GPU 训练已验证",
          description: "从想法、数据集到训练，都经过评测、Checkpoint 与注册表，走进同一条受治理的发布路径——Shadow、Canary、Production、回滚。",
          icon: Cpu,
          highlight: null
        },
        {
          title: "Agent 工厂",
          status: "真实单仓库任务链已验证",
          description: "Agent 像模型一样被管理：拥有自己的数据、评测、版本与发布。OneCoder——一个真实的编码 Agent——能克隆仓库、建分支、在隔离沙箱里修改代码、自己跑测试、生成证据哈希，并开出可审查的 Pull Request。",
          icon: Bot,
          highlight: { icon: GitPullRequest, text: "OneCoder：克隆 → 建分支 → 沙箱内修改 → 测试 → 证据哈希 → 可审查 PR" }
        },
        {
          title: "持续进化",
          status: "闭环已跑通，但还没有候选通过自己的质量门禁",
          description: "真实使用变成失败记录、候选方案、真实训练与真实独立评测——用和其他一切相同的生产基线做门禁。不合格的候选会被拒绝，而不是被放行。",
          icon: RefreshCw,
          highlight: null
        }
      ]
    },
    lifecycle: {
      eyebrow: "生命周期",
      heading: "从数据版本，到受治理的生产。",
      steps: [
        { label: "数据版本", text: "追踪并版本化每个模型背后的数据，血缘完整。" },
        { label: "训练评估", text: "运行并评估训练，让发布有证据支撑，而不是凭感觉。" },
        { label: "审阅发布", text: "打包可审阅的发布，由指定审批人签核后才可晋级。" },
        { label: "管理流量", text: "晋级到生产、管理流量，并维护沙箱工程环境。" }
      ]
    },
    capabilities: {
      eyebrow: "核心能力",
      heading: "为要对自己的 AI 负责的团队而建。",
      items: [
        { title: "血缘追踪", description: "跨数据、训练和发布的完整产物血缘。", icon: GitBranch },
        { title: "双主体审批", description: "必须由持独立凭证的第二主体签核。这不是可配置项，而是不变量：申请人永远无法批准自己的晋级。", icon: UserCheck },
        { title: "审计证据", description: "每次运行生成的记录，可直接交给支持、安全或合规团队。", icon: ScrollText },
        { title: "沙箱工程", description: "隔离环境中构建与测试，不触碰生产。", icon: FlaskConical },
        { title: "发布管理", description: "可审阅的发布与受控的生产流量，收拢在同一个操作面。", icon: Layers },
        { title: "安全工作区", description: "审批令牌仅驻留内存，刷新即清除。", icon: ShieldCheck }
      ]
    },
    maturity: {
      eyebrow: "当前所处阶段",
      heading: "M2 阶段，正在走向 M3 与 M4。",
      body: "下面每一项里程碑只能标注已验证、已实现待验收，或已规划三种状态之一。代码存在不等于证据成立——只有在指定环境里留下可重复的 Trace、日志、哈希或演练报告，里程碑才会升级。",
      levels: [
        { level: "M0", title: "执行真相基线", text: "真实执行与模拟执行永久可区分。", status: "verified", current: false },
        { level: "M1", title: "单机真实模型发布", text: "证明治理控制平面本身成立：真实训练、独立评测、第二人审批、Shadow、Canary 与回滚全部留痕。", status: "verified", current: false },
        { level: "M2", title: "外部 GPU 与隔离执行", text: "真实 vLLM 推理、AWS 双节点 T4 训练与一次受治理的云端 GPU 发布已通过；EFA 与 gVisor 隔离仍待验收。", status: "partial", current: true },
        { level: "M3", title: "高可用与灾难恢复", text: "高可用、备份与预算相关代码已存在；30 天 SLO 观测与真实恢复演练尚未验收。", status: "pending", current: false },
        { level: "M4", title: "首个全真实 Evolution 收益闭环", text: "闭环已端到端跑通，并正确拒绝了不合格候选——但目前最好的真实成绩 0.5417，仍没过自己 0.6 的门禁。", status: "pending", current: false },
        { level: "M5", title: "Agent 工厂规模化生产", text: "OneCoder 的单仓库路径是真实的；多团队、多工具、90 天生产使用尚未验证。", status: "pending", current: false },
        { level: "M6", title: "多租户 AI 能力工厂", text: "企业级 SSO、租户隔离穿透测试与跨产品飞轮。", status: "planned", current: false }
      ],
      disclaimer: "商业化尚未开始，且按计划应在这些内部验收之后、而不是之前。与 OneAI Labs 其他产品的数据飞轮，也取决于那些产品能否获得真实用量——这不是 OneForge 自身能够独立证明的事。",
      statusLabels: { verified: "已验证", partial: "部分已验证", pending: "已实现待验收", planned: "已规划" }
    },
    audience: {
      eyebrow: "适合谁",
      heading: "为必须对自己的 AI 负责的组织而建。",
      items: [
        { title: "AI 平台团队", description: "给模型和数据工作流一个受治理的归宿，而不是散落的脚本和笔记本。" },
        { title: "合规与风控", description: "让血缘、审批和审计证据内建于生命周期，而不是事后补丁。" },
        { title: "受监管行业", description: "满足生产 AI 对人类监督和可追溯性的要求。" }
      ]
    },
    fit: {
      eyebrow: "所处位置",
      heading: "OneAI 技术栈中的治理层。",
      body: "OneAI Core 把 AI 当商业产品来运营。OneForge 治理这份 AI 能力如何被构建、发布和审计——让速度不必以失控为代价。",
      exploreCore: "了解 OneAI Core",
      seeProducts: "查看全部产品",
      coreLabel: "OneAI Core",
      coreText: "网关、路由、成本护栏和用量——商业化运营层。",
      forgeLabel: "OneForge",
      forgeText: "血缘、训练评估、可审阅发布和审批签核。",
      resultLabel: "受治理的生产级 AI",
      resultText: "既能快速交付，又始终可复现、受治理、可观测的能力。"
    }
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/forge", meta);
}

export default async function ForgePage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.forgeUrl}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {t.pillars.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.pillars.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.pillars.body}
            </p>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3">
            {t.pillars.items.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 md:rounded-[1.5rem]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-oneai-cyan/30 bg-oneai-cyan/10">
                    <Icon className="h-6 w-6 text-oneai-cyan" />
                  </div>
                  <h3 className="mt-5 break-words text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.lines.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.lines.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.lines.body}
            </p>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3">
            {t.lines.items.map((line) => {
              const Icon = line.icon;
              return (
                <div key={line.title} className="flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 md:rounded-[1.5rem]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-oneai-cyan/30 bg-oneai-cyan/10">
                    <Icon className="h-6 w-6 text-oneai-cyan" />
                  </div>
                  <h3 className="mt-5 break-words text-xl font-semibold text-white">{line.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-oneai-gold">{line.status}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{line.description}</p>
                  {line.highlight ? (
                    <div className="mt-4 flex items-start gap-2 rounded-xl border border-oneai-cyan/20 bg-oneai-cyan/[0.06] p-3">
                      <line.highlight.icon className="mt-0.5 h-4 w-4 shrink-0 text-oneai-cyan" />
                      <p className="text-xs leading-5 text-cyan-100/90">{line.highlight.text}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.lifecycle.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.lifecycle.heading}
            </h2>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
            {t.lifecycle.steps.map((step, index) => (
              <div
                key={step.label}
                className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 text-sm font-semibold text-oneai-cyan">
                  {index + 1}
                </div>
                <h3 className="mt-5 break-words text-lg font-semibold text-white">{step.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {t.capabilities.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.capabilities.heading}
            </h2>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.items.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-oneai-gold/30 bg-oneai-gold/10">
                    <Icon className="h-5 w-5 text-oneai-gold" />
                  </div>
                  <h3 className="mt-5 break-words text-lg font-semibold text-white">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {t.maturity.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.maturity.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.maturity.body}
            </p>
          </div>

          <div className="mt-10 grid gap-3">
            {t.maturity.levels.map((level) => (
              <div
                key={level.level}
                className={`flex min-w-0 flex-col gap-2 rounded-2xl border p-5 sm:flex-row sm:items-center sm:gap-6 ${
                  level.current ? "border-oneai-gold/40 bg-oneai-gold/[0.06]" : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex shrink-0 items-center gap-3 sm:w-48">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      level.status === "verified"
                        ? "bg-emerald-400/20 text-emerald-200"
                        : level.status === "planned"
                          ? "border border-white/15 text-slate-500"
                          : "bg-oneai-cyan/20 text-oneai-cyan"
                    }`}
                  >
                    {level.level}
                  </span>
                  <span className="text-sm font-semibold text-white">{level.title}</span>
                </div>
                <p className="text-sm leading-6 text-slate-400">{level.text}</p>
                <span
                  className={`mt-1 w-fit shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] sm:ml-auto sm:mt-0 ${
                    level.status === "verified"
                      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
                      : level.status === "planned"
                        ? "border-white/15 text-slate-500"
                        : "border-oneai-gold/40 bg-oneai-gold/10 text-oneai-gold"
                  }`}
                >
                  {t.maturity.statusLabels[level.status as keyof typeof t.maturity.statusLabels]}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-5 text-slate-500">{t.maturity.disclaimer}</p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.audience.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.audience.heading}
            </h2>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3">
            {t.audience.items.map((item) => (
              <div key={item.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]">
                <h3 className="break-words text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
                {t.fit.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {t.fit.heading}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {t.fit.body}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={localePath(locale, "/core")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {t.fit.exploreCore}
                </Link>
                <Link
                  href={localePath(locale, "/products")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {t.fit.seeProducts}
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-5 sm:p-6 md:rounded-[2rem]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-cyan sm:tracking-[0.25em]">
                    {t.fit.coreLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{t.fit.coreText}</p>
                </div>

                <div className="flex justify-center">
                  <Repeat2 className="h-5 w-5 text-oneai-cyan" />
                </div>

                <div className="rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/10 p-5">
                  <div className="flex items-center gap-2">
                    <Anvil className="h-4 w-4 text-oneai-cyan" />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-cyan sm:tracking-[0.25em]">
                      {t.fit.forgeLabel}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{t.fit.forgeText}</p>
                </div>

                <div className="flex justify-center">
                  <Boxes className="h-5 w-5 text-oneai-cyan" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold sm:tracking-[0.25em]">
                    {t.fit.resultLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{t.fit.resultText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTASection locale={locale} />
    </>
  );
}
