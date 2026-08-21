import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useCases } from "@/data/useCases";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Use cases",
    heading: "What OneAI Labs can power.",
    productLabel: "Related product"
  },
  zh: {
    eyebrow: "应用场景",
    heading: "OneAI Labs 能驱动什么。",
    productLabel: "相关产品"
  }
} as const;

export function UseCasesSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell section-y">
      <div className="text-center">
        <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {useCases[locale].map((item, index) => {
          const isExternal = item.href.startsWith("http");
          const cardClass =
            "group flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-oneai-cyan/40 hover:bg-white/[0.06]";

          const card = (
            <>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-oneai-gold/80 to-oneai-cyan/80 text-sm font-bold text-oneai-bg">{index + 1}</div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-600 transition group-hover:text-oneai-cyan" />
              </div>
              <h3 className="mt-4 break-words text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{item.description}</p>
              <div className="mt-5 break-words rounded-xl border border-oneai-cyan/20 bg-oneai-bg/70 px-3 py-2 text-xs text-slate-300">
                <span className="text-oneai-cyan">{t.productLabel}</span> {item.product}
              </div>
            </>
          );

          if (isExternal) {
            return (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {card}
              </a>
            );
          }

          return (
            <Link key={item.title} href={localePath(locale, item.href)} className={cardClass}>
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
