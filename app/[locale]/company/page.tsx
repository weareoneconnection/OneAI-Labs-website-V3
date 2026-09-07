import Link from "next/link";
import { ArrowUpRight, GitBranch, RotateCcw, ScrollText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CompanyProfileSection } from "@/components/sections/CompanyProfileSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

/**
 * A company page, with the registry filing at the end where it belongs.
 *
 * This used to open on "Official Company Profile" and a table of incorporation
 * details, which answers a question nobody arrives with. A reader who reaches this
 * page wants to know what we build and how we work; the registration number matters
 * to them only once they have decided to care.
 *
 * Every principle below is one this site already demonstrates elsewhere and links
 * to — rejected releases, executed rollbacks, named approvers. Nothing here is an
 * aspiration, because a company page full of aspirations is the least credible page
 * on any site, and especially on this one.
 */

const meta = {
  en: {
    title: "Company",
    description: `${site.legalName} builds AI infrastructure and applied intelligence systems — the OneAI operating platform, and the businesses that run on it.`
  },
  zh: {
    title: "公司",
    description: `${site.legalName} 构建 AI 基础设施与应用智能系统——OneAI 运行平台，以及跑在它上面的业务。`
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "Company",
      title: "We build intelligence systems for the real world.",
      description: "OneAI Labs builds the operating platform that turns models into governed capabilities, and the applied businesses that put it under real load.",
      ctaLabel: "Talk to us"
    },
    buildEyebrow: "What we build",
    buildHeading: "One platform, and the businesses that test it.",
    buildBody: "We do not build the platform and then look for something to run on it. The applied businesses come first as a source of pressure, and what they need is what the platform grows.",
    build: [
      { name: "The OneAI platform", text: "Model access and routing, the capability lifecycle, agent orchestration, execution and evidence — five layers under one governed architecture.", href: "/products", external: false },
      { name: "OneAI Construction", text: "Intelligence for the built world: BIM, schedules, documents, field evidence and agents in one project state. Its own brand, on its own domain.", href: "/construction", external: false },
      { name: "OneVideo Studio", text: "Creative intelligence: script, shot structure, native voice and a finished episode, produced as a governed pipeline rather than a prompt.", href: "/video", external: false }
    ],
    principlesEyebrow: "How we operate",
    principlesHeading: "Principles we can point at, not principles we assert.",
    principlesBody: "Each of these is visible in the product, with a figure behind it from OneForge's own control plane.",
    principles: [
      { title: "Evidence over claims", text: "Where we publish a number, it comes from a system we run and can be queried. Where a system cannot support an answer, it says so.", icon: ScrollText },
      { title: "A gate that rejects", text: "Releases are approved and rejected. A promotion path that has never stopped anything is not a control.", icon: ShieldCheck },
      { title: "Reversible by default", text: "Promotions can be rolled back, and have been. Reversibility is demonstrated rather than promised.", icon: RotateCcw },
      { title: "Named accountability", text: "Every release has an approver, and a promotion needs a second principal with separate credentials.", icon: GitBranch }
    ],
    proofNote: "The figures behind these are on the homepage, taken from OneForge's control plane.",
    proofLink: "See the measured figures",
    whereEyebrow: "Where we are",
    whereHeading: "Incorporated in Malaysia. Built for a global stack.",
    whereBody: "OneAI Labs is a Malaysian company operating on infrastructure and standards that are not region-specific — OpenAI-compatible interfaces, portable model routing and governance that an enterprise review can read anywhere."
  },
  zh: {
    hero: {
      eyebrow: "公司",
      title: "我们为真实世界构建智能系统。",
      description: "OneAI Labs 构建把模型变成受治理能力的运行平台，以及让这个平台承受真实负载的应用业务。",
      ctaLabel: "联系我们"
    },
    buildEyebrow: "我们做什么",
    buildHeading: "一个平台，以及检验它的业务。",
    buildBody: "我们不是先造平台再找东西跑在上面。应用业务先行，作为压力来源；它们需要什么，平台就长出什么。",
    build: [
      { name: "OneAI 平台", text: "模型接入与路由、能力生命周期、Agent 编排、执行与证据——同一套受治理架构下的五个层次。", href: "/products", external: false },
      { name: "OneAI Construction", text: "面向建成环境的智能：BIM、进度、文档、现场证据与 Agent 收进同一份项目状态。独立品牌，独立域名。", href: "/construction", external: false },
      { name: "OneVideo Studio", text: "创意智能：剧本、分镜结构、原生配音，直到一集成片——按受治理的流水线产出，而不是靠一句提示词。", href: "/video", external: false }
    ],
    principlesEyebrow: "我们怎么做事",
    principlesHeading: "能指出来的原则，而不是宣称的原则。",
    principlesBody: "下面每一条都能在产品里看到，背后都有一个来自 OneForge 自身控制平面的数字。",
    principles: [
      { title: "证据高于宣称", text: "我们公布的每个数字，都来自我们自己运行、并且可以当场查询的系统。系统支撑不了的回答，它会直说。", icon: ScrollText },
      { title: "会驳回的门禁", text: "发布有通过也有驳回。一条从未拦下任何东西的晋级路径，不是控制。", icon: ShieldCheck },
      { title: "默认可回退", text: "晋级可以回滚，而且真的回滚过。可回退是被证明的，不是被承诺的。", icon: RotateCcw },
      { title: "责任落到人", text: "每一次发布都有审批人，每一次晋级都需要第二主体用独立凭证签核。", icon: GitBranch }
    ],
    proofNote: "支撑这些原则的数字在首页，取自 OneForge 的控制平面。",
    proofLink: "查看实测数字",
    whereEyebrow: "我们在哪",
    whereHeading: "注册于马来西亚，面向全球技术栈构建。",
    whereBody: "OneAI Labs 是一家马来西亚公司，但所依托的基础设施与标准不绑定地区——OpenAI 兼容接口、可迁移的模型路由，以及在任何地方的企业审查中都读得懂的治理机制。"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/company", meta);
}

export default async function CompanyPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={`mailto:${site.email}`}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.buildEyebrow}</p>
          <h2 className="section-title mt-4">{t.buildHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.buildBody}</p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {t.build.map((item) => (
            <Link
              key={item.name}
              href={localePath(locale, item.href)}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-oneai-cyan/50 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-oneai-cyan" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.principlesEyebrow}</p>
            <h2 className="section-title mt-4">{t.principlesHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.principlesBody}</p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Icon className="h-5 w-5 text-oneai-cyan" />
                  <h3 className="mt-4 text-base font-semibold text-white">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{principle.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-sm leading-6 text-slate-500">{t.proofNote}</p>
            <Link
              href={localePath(locale, "/")}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200"
            >
              {t.proofLink} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.whereEyebrow}</p>
          <h2 className="section-title mt-4">{t.whereHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.whereBody}</p>
        </div>
      </section>

      {/* The filing, last: it is what a reader checks after deciding to care. */}
      <CompanyProfileSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}
