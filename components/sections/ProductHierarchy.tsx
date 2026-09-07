import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Four flagships, then everything else.
 *
 * The previous version split by maturity, which gave eleven products the same
 * visual weight and let a Telegram bot sit beside the governed control plane. A
 * company can have eleven products; a company's site does not give them eleven
 * equal claims on a reader's attention.
 *
 * Tier and stage are deliberately separate. Tier is our editorial choice about what
 * matters; stage stays on every card and is still assigned by the evidence rule in
 * products.ts. That is why a Beta product can appear under Labs — its badge still
 * says Beta, and nothing is quietly demoted or promoted by being grouped.
 */

const content = {
  en: {
    flagshipEyebrow: "The four that matter",
    flagshipHeading: "One platform, one lifecycle, two applied businesses.",
    flagshipBody: "Core is what everything runs on. Forge is how capabilities are allowed into production. Construction and OneVideo are the two industries where we build and operate a product ourselves.",
    labsEyebrow: "Labs",
    labsHeading: "Everything else, on the same stack.",
    labsBody: "Smaller surfaces and early explorations. They share the platform below them, and each still carries the stage its evidence supports — grouping here is about focus, not about demoting anything.",
    poweredByLabel: "Powered by",
    includesLabel: "Includes",
    stageNote: "Stage is assigned by an objective rule: Beta means its own domain and usable today, with no SLA commitment. Preview means no public surface yet, or still on a platform domain.",
    coreLink: "Read about the platform"
  },
  zh: {
    flagshipEyebrow: "真正要紧的四个",
    flagshipHeading: "一个平台，一条生命周期，两门落地生意。",
    flagshipBody: "Core 是所有东西运行的底座。Forge 决定什么样的能力才被允许进入生产。Construction 和 OneVideo 是我们自己建设并运营产品的两个行业。",
    labsEyebrow: "Labs",
    labsHeading: "其余的，跑在同一套技术栈上。",
    labsBody: "更小的入口和早期探索。它们共用下面这套平台，并且各自仍标注着证据支持的阶段——这里的分组关乎重心，不代表降级。",
    poweredByLabel: "技术底座",
    includesLabel: "包含",
    stageNote: "阶段由客观规则判定：Beta 表示有自有域名、当下可用，但尚未做出 SLA 承诺。Preview 表示还没有公开入口，或仍挂在平台默认域名下。",
    coreLink: "了解这个平台"
  }
} as const;

export function ProductHierarchy({ locale }: { locale: Locale }) {
  const t = content[locale];
  const all = products[locale];
  const flagships = all.filter((product) => product.tier === "flagship");
  const labs = all.filter((product) => product.tier === "labs");

  return (
    <>
      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.flagshipEyebrow}</p>
          <h2 className="section-title mt-4">{t.flagshipHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.flagshipBody}</p>
        </div>

        {/* Two across, not three: a flagship should not be the size of a Labs card. */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {flagships.map((product) => {
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

            const className =
              "group flex h-full min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-oneai-gold/40 hover:bg-white/[0.06] sm:p-8";

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
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
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
