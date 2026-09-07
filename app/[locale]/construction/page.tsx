import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, ClipboardList, Layers, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectTwin } from "@/components/visuals/ProjectTwin";
import { constructionProductUrl, site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

/**
 * The Labs-side landing page for OneAI Construction.
 *
 * OneAI Construction is a separate brand on a separate domain with its own full
 * product site. This page therefore does one job the other site cannot: it explains
 * what Construction is *to the platform* — which layers it consumes, and why a
 * governed AI stack is what an industry with liability needs. Everything past that
 * introduction hands off to oneaiconstruction.com rather than being restated here,
 * so there is only ever one place to update product copy.
 */

const meta = {
  en: {
    title: "OneAI Construction · Intelligence for the Built World",
    description: "Construction OS and Construction Twin — BIM, schedules, documents, field evidence and agents in one governed project intelligence system, built on the OneAI platform."
  },
  zh: {
    title: "OneAI Construction · 面向建成环境的智能",
    description: "Construction OS 与 Construction Twin——把 BIM、进度、文档、现场证据与 Agent 收进同一套受治理的项目智能系统，构建于 OneAI 平台之上。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneAI Construction",
      title: "Intelligence for the built world.",
      description: "Construction carries liability, multi-party coordination and records that must survive audit. It is the hardest test of a governed AI platform — which is why we built a business on it."
    },
    productsEyebrow: "Two products",
    productsHeading: "An operating system, and a living project twin.",
    productsBody: "Used independently, or together as one project intelligence layer. Both are documented and demonstrated in full on their own site.",
    products: [
      {
        id: "01",
        name: "Construction OS",
        tagline: "The operating system for construction intelligence.",
        points: ["Document intelligence", "Project knowledge", "RFI / NCR / inspection", "Workflow automation", "Construction agents", "Governance & audit"],
        slug: "construction-os",
        icon: ClipboardList
      },
      {
        id: "02",
        name: "Construction Twin",
        tagline: "A living AI representation of your project.",
        points: ["IFC / BIM ingestion", "4D schedule", "Twin entities", "Evidence graph", "Risk intelligence", "Forecast & simulation"],
        slug: "construction-twin",
        icon: Boxes
      }
    ],
    twinCaption: "Figures are what the running product reports on its demo project, calibration status included.",
    stackEyebrow: "How it connects",
    stackHeading: "Which parts of the platform Construction actually runs on.",
    stackBody: "Construction is not a separate stack with a shared logo. It consumes the same layers described across this site, which is why its governance claims are the platform's governance claims.",
    stack: [
      { layer: "OneAI Core", role: "Model access, routing and cost guards behind every document, answer and forecast.", icon: Layers },
      { layer: "OneForge", role: "The capability lifecycle: evaluated training, release gates and rollback for the models it runs.", icon: ShieldCheck },
      { layer: "TheOne + OneClaw", role: "Planning and coordination for construction agents, and the execution boundary they act within.", icon: ArrowRight },
      { layer: "OneField", role: "The evidence graph: records, provenance and the citations behind every claim the Twin makes.", icon: Boxes }
    ],
    honestyEyebrow: "What it will not do",
    honestyHeading: "It says when it cannot support an answer.",
    honesty: [
      "An answer with no matching record is capped at 0.4 confidence and labelled as such.",
      "Citations are verified against the source, and unsupported ones are named.",
      "Forecasts report their calibration state; an uncalibrated range says so on its face."
    ],
    honestyNote: "Outputs support professional review. They do not replace the judgment of qualified engineers, quantity surveyors or legal advisers.",
    ctaHeading: "The full product site lives at oneaiconstruction.com.",
    ctaBody: "Interactive project twin, evidence-first Ask Twin, a 4D forecast you can drag, security posture, pricing and the enterprise pilot programme.",
    visit: "Visit oneaiconstruction.com",
    demo: "Request a demo",
    platform: "Explore the platform underneath"
  },
  zh: {
    hero: {
      eyebrow: "OneAI Construction",
      title: "面向建成环境的智能。",
      description: "建筑业背负着法律责任、多方协同，以及必须经得起审计的记录。它是对一套受治理 AI 平台最严苛的考验——所以我们直接在上面做了一门生意。"
    },
    productsEyebrow: "两个产品",
    productsHeading: "一套操作系统，加一个活的项目孪生。",
    productsBody: "可以独立使用，也可以合为同一层项目智能。两者的完整文档和演示都在它们自己的站点上。",
    products: [
      {
        id: "01",
        name: "Construction OS",
        tagline: "建筑智能的操作系统。",
        points: ["文档智能", "项目知识", "RFI / NCR / 验收", "工作流自动化", "建筑 Agent", "治理与审计"],
        slug: "construction-os",
        icon: ClipboardList
      },
      {
        id: "02",
        name: "Construction Twin",
        tagline: "你的项目的活体 AI 映射。",
        points: ["IFC / BIM 摄取", "4D 进度", "孪生实体", "证据图谱", "风险智能", "预测与模拟"],
        slug: "construction-twin",
        icon: Boxes
      }
    ],
    twinCaption: "图中数字来自运行中的产品在其演示项目上的真实输出，包含其校准状态。",
    stackEyebrow: "如何连接",
    stackHeading: "Construction 实际跑在平台的哪几层上。",
    stackBody: "Construction 不是一套换了标的独立技术栈。它消费的就是本站描述的同一批层次——所以它的治理承诺，就是平台的治理承诺。",
    stack: [
      { layer: "OneAI Core", role: "每一份文档、每一个回答、每一次预测背后的模型接入、路由与成本护栏。", icon: Layers },
      { layer: "OneForge", role: "能力生命周期：它所用模型的评测训练、发布门禁与回滚。", icon: ShieldCheck },
      { layer: "TheOne + OneClaw", role: "建筑 Agent 的规划协同，以及它们行动时的执行边界。", icon: ArrowRight },
      { layer: "OneField", role: "证据图谱：记录、来源，以及 Twin 每一条结论背后的引用。", icon: Boxes }
    ],
    honestyEyebrow: "它不会做什么",
    honestyHeading: "支撑不足时，它会直说。",
    honesty: [
      "没有匹配记录的回答，置信度封顶 0.4，并明确标注。",
      "引用会与原始来源核对，无法支撑的会被点名。",
      "预测会报告自身的校准状态；未校准的区间会写在脸上。"
    ],
    honestyNote: "输出用于辅助专业审阅，不能替代合格工程师、工料测量师或法律顾问的判断。",
    ctaHeading: "完整的产品站点在 oneaiconstruction.com。",
    ctaBody: "可交互的项目孪生、证据优先的 Ask Twin、可拖动的 4D 预测、安全说明、定价与企业试点计划。",
    visit: "访问 oneaiconstruction.com",
    demo: "预约演示",
    platform: "了解底层平台"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/construction", meta);
}

export default async function ConstructionPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.constructionUrl}
        ctaLabel={t.visit}
      />

      <section className="site-shell-wide section-y">
        <ProjectTwin locale={locale} />
        <p className="mt-4 max-w-3xl text-xs leading-5 text-slate-500">{t.twinCaption}</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.productsEyebrow}</p>
            <h2 className="section-title mt-4">{t.productsHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.productsBody}</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {t.products.map((product) => {
              const Icon = product.icon;
              return (
                <a
                  key={product.name}
                  href={constructionProductUrl(locale, product.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-oneai-cyan/50 hover:bg-white/[0.05] sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-oneai-cyan" />
                    <span className="font-mono-accent text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">{product.id}</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-oneai-cyan" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-200">{product.tagline}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-oneai-cyan/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.stackEyebrow}</p>
          <h2 className="section-title mt-4">{t.stackHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.stackBody}</p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.stack.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.layer} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Icon className="h-5 w-5 text-oneai-cyan" />
                <h3 className="mt-4 text-base font-semibold text-white">{item.layer}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.role}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="min-w-0">
              <p className="section-eyebrow">{t.honestyEyebrow}</p>
              <h2 className="section-title mt-4">{t.honestyHeading}</h2>
            </div>
            <div className="min-w-0">
              <ul className="grid gap-3">
                {t.honesty.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-oneai-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/[0.07] p-4 text-sm leading-6 text-amber-100/90">
                {t.honestyNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <h2 className="section-title">{t.ctaHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.ctaBody}</p>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={site.constructionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold"
          >
            {t.visit} <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href={localePath(locale, "/contact")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] px-6 py-3.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60"
          >
            {t.demo} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={localePath(locale, "/products")}
            className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
          >
            {t.platform}
          </Link>
        </div>
      </section>
    </>
  );
}
