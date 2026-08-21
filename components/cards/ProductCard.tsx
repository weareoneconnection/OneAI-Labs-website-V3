import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { ProductStage } from "@/data/products";

// A product with no public surface is shown without a link rather than pointed at
// something that is not the product. Saying "not yet" is cheaper than a dead end.
const stageStyle: Record<ProductStage, string> = {
  GA: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  Beta: "border-oneai-cyan/30 bg-oneai-cyan/10 text-oneai-cyan",
  Preview: "border-white/15 bg-white/[0.06] text-slate-400"
};

export function ProductCard({
  name,
  tagline,
  description,
  href,
  stage,
  poweredBy,
  poweredByLabel = "Powered by",
  icon: Icon
}: {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  stage: ProductStage;
  poweredBy?: string;
  poweredByLabel?: string;
  icon: LucideIcon;
}) {
  const base = "group block h-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition sm:min-h-64 sm:p-6";
  const interactive = " hover:-translate-y-1 hover:border-oneai-gold/40 hover:bg-white/[0.06]";
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="shrink-0 rounded-2xl border border-white/10 bg-oneai-bg p-3 text-oneai-cyan">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-2">
          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${stageStyle[stage]}`}>
            {stage}
          </span>
          {href ? <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-oneai-gold" /> : null}
        </div>
      </div>
      <h3 className="mt-5 break-words text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 break-words text-sm text-oneai-gold">{tagline}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      {poweredBy ? (
        <div className="mt-5 break-words rounded-xl border border-oneai-cyan/20 bg-oneai-bg/70 px-3 py-2 text-xs text-slate-300">
          <span className="text-oneai-cyan">{poweredByLabel}</span> {poweredBy}
        </div>
      ) : null}
    </>
  );

  if (!href) {
    return <div className={base}>{content}</div>;
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base + interactive}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={base + interactive}>
      {content}
    </Link>
  );
}
