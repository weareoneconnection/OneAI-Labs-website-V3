import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, Clapperboard, FileWarning, Scale, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

/**
 * Two industries, described in depth, rather than a grid of sectors we have not
 * entered.
 *
 * The page this replaced listed nine use cases at equal weight, which reads as
 * "we can do anything" — the opposite of what an enterprise buyer is checking for.
 * The structure here is the fit test first (what makes an industry worth entering)
 * and then the two we have actually built businesses in. When a third arrives it
 * is added to the list; until then the list stays honest at two.
 */

const meta = {
  en: {
    title: "Industries",
    description: "Where the OneAI platform meets an industry: the built world with OneAI Construction, and creative production with OneVideo Studio."
  },
  zh: {
    title: "行业",
    description: "OneAI 平台落地的行业：以 OneAI Construction 进入建成环境，以 OneVideo Studio 进入创意生产。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "Industries",
      title: "Where governed AI is worth the cost.",
      description: "Not every industry needs approvals, evidence and rollback. The ones that do are the ones we build in.",
      ctaLabel: "Request a demo"
    },
    fitEyebrow: "The fit test",
    fitHeading: "Three conditions make an industry worth entering.",
    fitBody: "Governance is overhead until something goes wrong. These are the conditions under which it stops being overhead and becomes the reason the system is usable at all.",
    fit: [
      { title: "Liability travels with the output", text: "Someone signs the drawing, the report or the claim. An answer that cannot be traced to a record is an answer nobody can put their name on.", icon: Scale },
      { title: "Many parties, one truth", text: "Contractors, consultants, clients, reviewers. Coordination fails when each party holds a different version of what happened.", icon: Users },
      { title: "Records must survive audit", text: "Work is checked months or years later, by people who were not there. Append-only evidence is the only thing that still answers then.", icon: FileWarning }
    ],
    sectorsEyebrow: "Where we build",
    sectorsHeading: "Two industries, two businesses.",
    sectorsBody: "Each runs as its own product on the same governed platform. We list the industries we have built in — not the ones we could.",
    sectors: [
      {
        id: "01",
        name: "Built world",
        product: "OneAI Construction",
        tagline: "Construction, infrastructure and capital projects.",
        text: "BIM and IFC geometry, schedules, documents, field evidence and agents brought into one living project state — with risk, forecast and the calibration status of that forecast reported on its face.",
        points: ["Digital project state", "4D schedule and forecast", "Evidence-first answers", "Risk intelligence"],
        href: "/construction",
        external: site.constructionUrl,
        icon: Boxes
      },
      {
        id: "02",
        name: "Creative production",
        product: "OneVideo Studio",
        tagline: "Short drama and serialised video.",
        text: "Script intelligence, shot structure, provider routing, continuity state, dialogue validation and mastering — a production pipeline rather than a prompt box.",
        points: ["Script to episode", "Shot and continuity state", "Native voice", "Sequel and multi-act"],
        href: "/video",
        external: site.videoUrl,
        icon: Clapperboard
      }
    ],
    exploreLabel: "Read more",
    visitLabel: "Open the product",
    nextEyebrow: "What comes next",
    nextHeading: "New industries are added when there is a business, not when there is a slide.",
    nextBody: "The platform is not industry-specific, so the constraint is never whether it could apply. It is whether we have built something in that industry that can be shown working. If you operate in a sector that meets the fit test above, that conversation is worth having.",
    talk: "Talk to us",
    platform: "See the platform underneath"
  },
  zh: {
    hero: {
      eyebrow: "行业",
      title: "什么行业值得为治理付出代价。",
      description: "不是每个行业都需要审批、证据和回滚。需要的那些，就是我们做业务的地方。",
      ctaLabel: "预约演示"
    },
    fitEyebrow: "适配判据",
    fitHeading: "三个条件决定一个行业值不值得进入。",
    fitBody: "在出事之前，治理都是额外成本。以下这些条件让它不再是成本，而是系统能不能用的前提。",
    fit: [
      { title: "责任随交付物一起流转", text: "图纸、报告、索赔总要有人签字。一个追溯不到记录的回答，没人敢在上面署名。", icon: Scale },
      { title: "多方协同，一份事实", text: "承包商、顾问、业主、审核方。当每一方手里的「发生了什么」版本不同，协同就会失败。", icon: Users },
      { title: "记录必须经受审计", text: "工作会在几个月甚至几年后，被当时不在场的人复核。到那时还答得上来的，只有只增不改的证据。", icon: FileWarning }
    ],
    sectorsEyebrow: "我们在哪里做",
    sectorsHeading: "两个行业，两门生意。",
    sectorsBody: "各自作为独立产品，跑在同一套受治理的平台上。我们只列已经做进去的行业——不列「可以做」的。",
    sectors: [
      {
        id: "01",
        name: "建成环境",
        product: "OneAI Construction",
        tagline: "建筑、基础设施与资本项目。",
        text: "把 BIM/IFC 几何、进度、文档、现场证据与 Agent 收进同一份活的项目状态——风险、预测，以及那个预测的校准状态，都写在明面上。",
        points: ["项目数字状态", "4D 进度与预测", "证据优先的回答", "风险智能"],
        href: "/construction",
        external: site.constructionUrl,
        icon: Boxes
      },
      {
        id: "02",
        name: "创意生产",
        product: "OneVideo Studio",
        tagline: "短剧与连载视频。",
        text: "剧本智能、分镜结构、模型路由、连续性状态、台词校验与母版输出——是一条生产流水线，不是一个提示词输入框。",
        points: ["从剧本到成片", "分镜与连续性状态", "原生配音", "续集与多幕合并"],
        href: "/video",
        external: site.videoUrl,
        icon: Clapperboard
      }
    ],
    exploreLabel: "了解更多",
    visitLabel: "打开产品",
    nextEyebrow: "接下来",
    nextHeading: "新行业在有生意的时候加进来，不在有 PPT 的时候。",
    nextBody: "平台本身不绑定行业，所以限制从来不是「能不能适用」，而是我们有没有在那个行业里做出可以演示的东西。如果你所在的领域符合上面的适配判据，这个对话值得展开。",
    talk: "联系我们",
    platform: "了解底层平台"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/industries", meta);
}

export default async function IndustriesPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={localePath(locale, "/contact")}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.fitEyebrow}</p>
          <h2 className="section-title mt-4">{t.fitHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.fitBody}</p>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {t.fit.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <Icon className="h-5 w-5 text-oneai-cyan" />
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.sectorsEyebrow}</p>
            <h2 className="section-title mt-4">{t.sectorsHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.sectorsBody}</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {t.sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article key={sector.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-oneai-cyan" />
                    <span className="font-mono-accent text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">{sector.id}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{sector.name}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-200">{sector.product} · {sector.tagline}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{sector.text}</p>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {sector.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-oneai-cyan/70" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={localePath(locale, sector.href)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-oneai-cyan/60"
                    >
                      {t.exploreLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={sector.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60"
                    >
                      {t.visitLabel} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.nextEyebrow}</p>
          <h2 className="section-title mt-4">{t.nextHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.nextBody}</p>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href={localePath(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">
            {t.talk} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={localePath(locale, "/products")} className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30">
            {t.platform}
          </Link>
        </div>
      </section>

      <FinalCTASection locale={locale} />
    </>
  );
}
