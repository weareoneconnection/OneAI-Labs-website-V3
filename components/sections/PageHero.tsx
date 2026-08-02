import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, description, ctaHref = "/contact", ctaLabel = "Request Demo" }: { eyebrow: string; title: string; description: string; ctaHref?: string; ctaLabel?: string }) {
  const cta = (
    <>
      {ctaLabel} <ArrowRight className="h-4 w-4" />
    </>
  );

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-radial-blue">
      <div className="grid-mask absolute inset-0 opacity-60" />
      <div className="relative site-shell-wide section-y">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{description}</p>
        <div className="mt-8 flex">
          {ctaHref.startsWith("http") || ctaHref.startsWith("mailto:") ? (
            <a href={ctaHref} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">
              {cta}
            </a>
          ) : (
            <Link href={ctaHref} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">
              {cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
