import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Three groups, split by what a product architecturally IS, not by how finished it is.
 *
 * "Four flagships, then everything else" conflated two different questions: how much
 * editorial weight does this get, and what kind of thing is this. That put OneClaw and
 * OneField — two of the five systems the whole company runs on — in the same bucket as
 * a Telegram bot, because their stage badge still reads Preview. Role fixes that: the
 * five platform systems are grouped together regardless of maturity, each carrying its
 * own honest stage badge so nothing is quietly promoted. Applied Businesses and Labs
 * keep the previous visual treatment — this only changes what "flagship" used to hide.
 */

const content = {
  en: {
    platformEyebrow: "The operating architecture",
    platformHeading: "Five systems. One governed platform.",
    platformBody: "Role and maturity are independent on purpose. All five below are core platform systems — what a reader should remember the company by — regardless of which stage badge they currently carry. See how they connect on the platform page.",
    platformLink: "See the full architecture",
    roleLabel: "Role",
    roleValue: "Core platform system",
    maturityLabel: "Maturity",
    functionLabel: "Function",
    appliedEyebrow: "Applied businesses",
    appliedHeading: "Two industries where we build and operate a product ourselves.",
    appliedBody: "Everything the platform proves gets used here first: Construction and OneVideo run on Core, Forge and the rest of the stack, in production, under their own brand.",
    labsEyebrow: "Labs",
    labsHeading: "Everything else, on the same stack.",
    labsBody: "Smaller surfaces and early explorations. They share the platform below them, and each still carries the stage its evidence supports — grouping here is about focus, not about demoting anything.",
    poweredByLabel: "Powered by",
    includesLabel: "Includes",
    stageNote: "Stage is assigned by an objective rule: Beta means its own domain and usable today, with no SLA commitment. Preview means no public surface yet, or still on a platform domain.",
    coreLink: "Read about OneAI Core"
  },
  zh: {
    platformEyebrow: "运行架构",
    platformHeading: "五个系统，一个受治理的平台。",
    platformBody: "角色和成熟度是两个独立的维度。下面五个都是核心平台系统——是读者应该记住这家公司的地方——不论它们当前的阶段徽章是什么。它们如何连接，见平台页面。",
    platformLink: "查看完整架构",
    roleLabel: "角色",
    roleValue: "核心平台系统",
    maturityLabel: "成熟度",
    functionLabel: "职能",
    appliedEyebrow: "落地生意",
    appliedHeading: "我们自己建设并运营产品的两个行业。",
    appliedBody: "平台证明过的一切，最先在这里被使用：Construction 和 OneVideo 跑在 Core、Forge 和整套技术栈之上，以自己的品牌，在生产环境里运行。",
    labsEyebrow: "Labs",
    labsHeading: "其余的，跑在同一套技术栈上。",
    labsBody: "更小的入口和早期探索。它们共用下面这套平台，并且各自仍标注着证据支持的阶段——这里的分组关乎重心，不代表降级。",
    poweredByLabel: "技术底座",
    includesLabel: "包含",
    stageNote: "阶段由客观规则判定：Beta 表示有自有域名、当下可用，但尚未做出 SLA 承诺。Preview 表示还没有公开入口，或仍挂在平台默认域名下。",
    coreLink: "了解 OneAI Core"
  }
} as const;

export function ProductHierarchy({ locale }: { locale: Locale }) {
  const t = content[locale];
  const all = products[locale];
  const platform = all.filter((product) => product.role === "platform");
  const applied = all.filter((product) => product.role === "applied");
  const labs = all.filter((product) => product.role === "labs");

  return (
    <>
      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.platformEyebrow}</p>
          <h2 className="section-title mt-4">{t.platformHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.platformBody}</p>
        </div>

        <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
          {platform.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.name} className="flex h-full min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="shrink-0 rounded-2xl border border-white/10 bg-oneai-bg p-3 text-oneai-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  {product.href ? <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500" /> : null}
                </div>

                <h3 className="mt-5 break-words text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-1 break-words text-sm font-medium text-oneai-gold">{product.tagline}</p>

                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-5 text-xs">
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

                <p className="mt-5 text-sm leading-6 text-slate-400">{product.description}</p>

                {product.href ? (
                  <a
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200"
                  >
                    {product.name} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>

        <Link
          href={localePath(locale, "/platform")}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200"
        >
          {t.platformLink} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.appliedEyebrow}</p>
            <h2 className="section-title mt-4">{t.appliedHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.appliedBody}</p>
          </div>

          {/* Two across: exactly two applied businesses today. */}
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {applied.map((product) => {
              const Icon = product.icon;
              const external = product.href?.startsWith("http");
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-oneai-bg p-3 text-oneai-cyan">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-oneai-cyan">
                        {product.stage}
                      </span>
                      {product.href ? <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-oneai-gold" /> : null}
                    </div>
                  </div>

                  <h3 className="mt-6 break-words text-2xl font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 break-words text-sm font-medium text-oneai-gold">{product.tagline}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{product.description}</p>

                  {product.includes ? (
                    <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="text-slate-500">{t.includesLabel}</span>
                      {product.includes.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                          {item}
                        </span>
                      ))}
                    </p>
                  ) : null}

                  <div className="mt-6 break-words rounded-xl border border-oneai-cyan/20 bg-oneai-bg/70 px-3 py-2 text-xs text-slate-300">
                    <span className="text-oneai-cyan">{t.poweredByLabel}</span> {product.poweredBy}
                  </div>
                </>
              );

              const className = "group flex h-full min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-oneai-gold/40 hover:bg-white/[0.06] sm:p-8";

              return external ? (
                <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {inner}
                </a>
              ) : (
                <div key={product.name} className={className}>{inner}</div>
              );
            })}
          </div>

          <Link
            href={localePath(locale, "/core")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200"
          >
            {t.coreLink} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.labsEyebrow}</p>
            <h2 className="section-title mt-4">{t.labsHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.labsBody}</p>
          </div>

          <div className="mt-10 m-carousel gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
            {labs.map((product) => (
              <ProductCard key={product.name} {...product} poweredByLabel={t.poweredByLabel} />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-5 text-slate-500">{t.stageNote}</p>
        </div>
      </section>
    </>
  );
}
