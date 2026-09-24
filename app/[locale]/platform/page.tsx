import Link from "next/link";
import { Anvil, ArrowDown, ArrowUpRight, BadgeCheck, Cpu, Network, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { products } from "@/data/products";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "OneAI Platform · One Operating Architecture for Governed AI",
    description: "Core, Forge, TheOne, OneClaw and OneField are five governed systems that form one operating architecture — model access, capability lifecycle, planning, execution and evidence, in that order."
  },
  zh: {
    title: "OneAI Platform · 一套受治理的 AI 运行架构",
    description: "Core、Forge、TheOne、OneClaw 与 OneField 是五个受治理的系统，组成同一套运行架构——模型接入、能力生命周期、规划、执行与证据，依次相连。"
  }
};

const flow = [
  { key: "core", icon: Network, tone: "text-cyan-200 border-cyan-300/25 bg-cyan-300/[0.07]" },
  { key: "forge", icon: Anvil, tone: "text-violet-200 border-violet-300/25 bg-violet-300/[0.07]" },
  { key: "theone", icon: Cpu, tone: "text-blue-200 border-blue-300/25 bg-blue-300/[0.07]" },
  { key: "claw", icon: Zap, tone: "text-amber-200 border-amber-300/25 bg-amber-300/[0.07]" },
  { key: "field", icon: BadgeCheck, tone: "text-emerald-200 border-emerald-300/25 bg-emerald-300/[0.07]" }
] as const;

const content = {
  en: {
    hero: {
      eyebrow: "OneAI Platform",
      title: "One operating architecture for governed AI.",
      description: "Core, Forge, TheOne, OneClaw and OneField are not five competing products. They are the five systems this company is built on — request in, evidence out, and a loop back to Forge that turns every result into the next release.",
      ctaLabel: "Start Building"
    },
    flowEyebrow: "Request to evidence",
    flowHeading: "One request moves through five systems in a fixed order.",
    flowBody: "Nothing skips a step. A result only becomes production traffic after it has been through evaluation, planning, execution and evidence — in that order, every time.",
    flowLoop: "Evidence returns to Forge as the input for the next release — the loop is Evolution, not a dead end.",
    detail: {
      core: { name: "OneAI Core", role: "Model access, routing, cost guards, usage" },
      forge: { name: "OneForge", role: "Versioned data, evaluated training, approved releases" },
      theone: { name: "TheOne", role: "Planning, coordination, task decomposition" },
      claw: { name: "OneClaw", role: "Integration and execution of approved actions" },
      field: { name: "OneField", role: "Memory, contribution records, evidence" }
    },
    axesEyebrow: "Two axes, kept separate",
    axesHeading: "Role says what it is. Maturity says how proven it is.",
    axesBody: "TheOne and OneClaw are core platform systems whether their stage badge says Preview or GA — the role does not move with the evidence. Conflating the two is what made OneClaw and OneField read as afterthoughts next to Core and Forge.",
    roleLabel: "Role",
    roleValue: "Core platform system",
    maturityLabel: "Maturity",
    functionLabel: "Function",
    productsLink: "See every product, grouped by role",
    evidenceLink: "See the evidence this platform produces"
  },
  zh: {
    hero: {
      eyebrow: "OneAI Platform",
      title: "一套受治理的 AI 运行架构。",
      description: "Core、Forge、TheOne、OneClaw 与 OneField 不是五个互相竞争的产品，而是这家公司赖以建立的五个系统——请求进来，证据出去，再回到 Forge 形成闭环，把每一次结果变成下一次发布的输入。",
      ctaLabel: "开始构建"
    },
    flowEyebrow: "从请求到证据",
    flowHeading: "一次请求，按固定顺序流经五个系统。",
    flowBody: "没有任何一步可以跳过。一个结果只有依次经过评测、规划、执行与留证之后，才会成为生产流量——每一次都一样。",
    flowLoop: "证据会回到 Forge，成为下一次发布的输入——这是一个闭环 Evolution，不是终点。",
    detail: {
      core: { name: "OneAI Core", role: "模型接入、路由、成本护栏、用量" },
      forge: { name: "OneForge", role: "数据版本、训练评估、发布审批" },
      theone: { name: "TheOne", role: "规划、协同、任务拆解" },
      claw: { name: "OneClaw", role: "已批准动作的集成与执行" },
      field: { name: "OneField", role: "记忆、贡献记录、证据" }
    },
    axesEyebrow: "两个维度，彼此独立",
    axesHeading: "角色回答“它是什么”，成熟度回答“它被证明到什么程度”。",
    axesBody: "不论阶段徽章是 Preview 还是 GA，TheOne 和 OneClaw 始终是核心平台系统——角色不会随证据变化。把这两件事混为一谈，才是 OneClaw 和 OneField 在 Core、Forge 旁边显得像陪衬的原因。",
    roleLabel: "角色",
    roleValue: "核心平台系统",
    maturityLabel: "成熟度",
    functionLabel: "职能",
    productsLink: "查看按角色分组的全部产品",
    evidenceLink: "查看这套平台产生的证据"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/platform", meta);
}

export default async function PlatformPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];
  const platformProducts = products[locale].filter((product) => product.role === "platform");

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.appUrl}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.flowEyebrow}</p>
            <h2 className="section-title mt-4">{t.flowHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.flowBody}</p>
          </div>

          <div className="mt-12 flex flex-col items-stretch gap-2">
            {flow.map(({ key, icon: Icon, tone }, index) => {
              const d = t.detail[key as keyof typeof t.detail];
              return (
                <div key={key} className="flex flex-col items-center">
                  <div className="flex w-full max-w-2xl items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5 sm:p-6">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${tone}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-white">{d.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{d.role}</p>
                    </div>
                  </div>
                  {index < flow.length - 1 ? <ArrowDown className="my-1 h-5 w-5 text-slate-600" /> : null}
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/[0.05] p-4 text-sm leading-6 text-cyan-100/90">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-oneai-cyan" /> {t.flowLoop}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.axesEyebrow}</p>
            <h2 className="section-title mt-4">{t.axesHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.axesBody}</p>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
            {platformProducts.map((product) => {
              const Icon: LucideIcon = product.icon;
              return (
                <div key={product.name} className="flex h-full min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-oneai-bg text-oneai-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{product.name}</h3>
                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-4 text-xs">
                    <div>
                      <p className="uppercase tracking-[0.14em] text-slate-500">{t.roleLabel}</p>
                      <p className="mt-1 text-slate-300">{t.roleValue}</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.14em] text-slate-500">{t.maturityLabel}</p>
                      <p className="mt-1 text-slate-300">{product.stage}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="uppercase tracking-[0.14em] text-slate-500">{t.functionLabel}</p>
                      <p className="mt-1 text-slate-300">{product.capabilities?.join(" · ")}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localePath(locale, "/products")} className="inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
              {t.productsLink} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href={localePath(locale, "/evidence")} className="inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
              {t.evidenceLink} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection locale={locale} />
    </>
  );
}
