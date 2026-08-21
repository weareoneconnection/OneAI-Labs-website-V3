import Link from "next/link";
import {
  Anvil,
  ArrowRight,
  Boxes,
  FlaskConical,
  GitBranch,
  Layers,
  Repeat2,
  ScrollText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ProductMatrixSection } from "@/components/sections/ProductMatrixSection";
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

      <ProductMatrixSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}
