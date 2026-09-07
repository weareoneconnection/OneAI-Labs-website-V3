import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CircleAlert, type LucideIcon } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * The shape both engagement pages share.
 *
 * Symptoms first in the reader's own words, then our position, then a sample of
 * what an engagement produces, then how it starts — and then, plainly, the limits.
 *
 * Every one of these pages opens with an assessment rather than a delivery promise,
 * because we do not yet have the delivery capacity to promise. Saying so is not a
 * weakness on this particular site: it is the same rule the platform enforces on
 * itself, applied to what we sell. A page that advertised throughput we do not have
 * would cost more than the leads it won.
 */

export type SolutionContent = {
  symptomsEyebrow: string;
  symptomsHeading: string;
  symptomsBody: string;
  symptoms: string[];
  stanceEyebrow: string;
  stanceHeading: string;
  stanceBody: string;
  stance: { title: string; text: string; icon: LucideIcon }[];
  sampleEyebrow: string;
  sampleHeading: string;
  sampleBody: string;
  sampleCaption: string;
  processEyebrow: string;
  processHeading: string;
  processBody: string;
  steps: { label: string; text: string }[];
  limitsTitle: string;
  limits: string[];
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
};

export function SolutionDetail({ locale, content, sample }: { locale: Locale; content: SolutionContent; sample: ReactNode }) {
  const t = content;

  return (
    <>
      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.symptomsEyebrow}</p>
          <h2 className="section-title mt-4">{t.symptomsHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.symptomsBody}</p>
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {t.symptoms.map((symptom) => (
            <li key={symptom} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-slate-300">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-oneai-gold" aria-hidden="true" />
              {symptom}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.stanceEyebrow}</p>
            <h2 className="section-title mt-4">{t.stanceHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.stanceBody}</p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {t.stance.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <Icon className="h-5 w-5 text-oneai-cyan" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.sampleEyebrow}</p>
          <h2 className="section-title mt-4">{t.sampleHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.sampleBody}</p>
        </div>
        <div className="mt-12">{sample}</div>
        <p className="mt-4 max-w-3xl text-xs leading-5 text-slate-500">{t.sampleCaption}</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{t.processEyebrow}</p>
            <h2 className="section-title mt-4">{t.processHeading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.processBody}</p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, index) => (
              <div key={step.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-oneai-cyan/30 bg-oneai-cyan/10 font-mono-accent text-xs font-semibold text-oneai-cyan">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{step.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Stated plainly and early rather than discovered by a prospect later. */}
          <div className="mt-8 max-w-3xl rounded-2xl border border-oneai-gold/20 bg-oneai-gold/[0.07] p-5">
            <h3 className="text-sm font-semibold text-amber-100">{t.limitsTitle}</h3>
            <ul className="mt-3 grid gap-2">
              {t.limits.map((limit) => (
                <li key={limit} className="flex items-start gap-2 text-sm leading-6 text-amber-100/85">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-oneai-gold/70" />
                  {limit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <h2 className="section-title">{t.ctaHeading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.ctaBody}</p>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href={localePath(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">
            {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={localePath(locale, t.ctaSecondaryHref)} className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30">
            {t.ctaSecondary}
          </Link>
        </div>
      </section>
    </>
  );
}
