import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, ClipboardList } from "lucide-react";
import { constructionProductUrl, site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { ProjectTwin } from "@/components/visuals/ProjectTwin";
import { Assertion, SectionIndex } from "@/components/sections/SectionIndex";

/**
 * Applied intelligence: the platform argument, tested against an industry.
 *
 * Everything above this point on the homepage describes the operating platform.
 * This section is the answer to "so what runs on it" — a real vertical business
 * with its own brand, its own domain and paying-customer ambitions, whose own
 * architecture names OneAI Forge as its infrastructure layer.
 *
 * It deliberately stops at an introduction. OneAI Construction maintains its
 * product copy on oneaiconstruction.com; restating it here would give us two
 * surfaces to keep in sync and one of them would always be stale.
 */
const content = {
  en: {
    index: "Applied intelligence",
    heading: "One stack. Then one industry that proves it.",
    body: "OneAI Construction is the platform under load — BIM, schedules, documents, field evidence and agents brought into one living project state. It runs as its own brand on its own domain, on the same governed infrastructure described above.",
    assertionLead: "Construction does not need another dashboard.",
    assertionPunch: "It needs a system that understands the project.",
    products: [
      {
        id: "01",
        name: "Construction OS",
        tagline: "The operating system for construction intelligence.",
        text: "Document intelligence, project knowledge, RFI / NCR / inspection workflows, construction agents, governance and audit.",
        slug: "construction-os",
        icon: ClipboardList
      },
      {
        id: "02",
        name: "Construction Twin",
        tagline: "A living AI representation of the project.",
        text: "IFC / BIM ingestion, 4D schedule, twin entities, an evidence graph, risk intelligence and forecast simulation.",
        slug: "construction-twin",
        icon: Boxes
      }
    ],
    caption: "Figures shown are what the running product reports on its demo project, calibration status included.",
    visit: "Visit oneaiconstruction.com",
    learn: "How it connects to the platform"
  },
  zh: {
    index: "应用智能",
    heading: "一套技术栈，然后用一个行业去验证它。",
    body: "OneAI Construction 是这套平台的实战负载——把 BIM、进度、文档、现场证据和 Agent 收进同一份活的项目状态。它以独立品牌运行在独立域名上，底层就是上面描述的同一套受治理基础设施。",
    assertionLead: "建筑业不需要又一个仪表盘。",
    assertionPunch: "它需要一个真正理解项目的系统。",
    products: [
      {
        id: "01",
        name: "Construction OS",
        tagline: "建筑智能的操作系统。",
        text: "文档智能、项目知识、RFI / NCR / 验收工作流、建筑 Agent、治理与审计。",
        slug: "construction-os",
        icon: ClipboardList
      },
      {
        id: "02",
        name: "Construction Twin",
        tagline: "项目的活体 AI 映射。",
        text: "IFC / BIM 摄取、4D 进度、孪生实体、证据图谱、风险智能与预测模拟。",
        slug: "construction-twin",
        icon: Boxes
      }
    ],
    caption: "图中数字来自运行中的产品在其演示项目上的真实输出，包含其校准状态。",
    visit: "访问 oneaiconstruction.com",
    learn: "它与平台的关系"
  }
} as const;

export function ConstructionSection({ locale, index }: { locale: Locale; index?: number }) {
  const t = content[locale];

  return (
    <section id="construction" className="scroll-mt-20 border-b border-white/10">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-14">
          <div className="min-w-0">
            <SectionIndex index={index} label={t.index} />
            <h2 className="section-title mt-6">{t.heading}</h2>
          </div>
          <p className="min-w-0 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>

        <div className="mt-12">
          <ProjectTwin locale={locale} />
          <p className="mt-4 max-w-3xl text-xs leading-5 text-slate-500">{t.caption}</p>
        </div>

        <Assertion lead={t.assertionLead} punch={t.assertionPunch} />

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {t.products.map((product) => {
            const Icon = product.icon;
            return (
              <a
                key={product.name}
                href={constructionProductUrl(locale, product.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-oneai-cyan/50 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-oneai-cyan" />
                  <span className="font-mono-accent text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">{product.id}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-oneai-cyan" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-cyan-200">{product.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{product.text}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.constructionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold"
          >
            {t.visit} <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href={localePath(locale, "/construction")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60"
          >
            {t.learn} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
