import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export function ProductCard({
  name,
  tagline,
  description,
  href,
  poweredBy,
  poweredByLabel = "Powered by",
  icon: Icon
}: {
  name: string;
  tagline: string;
  description: string;
  href: string;
  poweredBy?: string;
  poweredByLabel?: string;
  icon: LucideIcon;
}) {
  const className = "group block h-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-oneai-gold/40 hover:bg-white/[0.06] sm:min-h-64 sm:p-6";
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="shrink-0 rounded-2xl border border-white/10 bg-oneai-bg p-3 text-oneai-cyan">
          <Icon className="h-6 w-6" />
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-oneai-gold" />
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

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
