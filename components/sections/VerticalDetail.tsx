import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

export type VerticalDetailContent = {
  workflow: {
    eyebrow: string;
    heading: string;
    steps: { label: string; text: string }[];
  };
  audience: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  cta: {
    heading: string;
    body: string;
    openLabel: string;
    href: string;
    demoLabel: string;
  };
  disclaimer?: string;
};

export function VerticalDetail({ locale, content }: { locale: Locale; content: VerticalDetailContent }) {
  return (
    <>
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {content.workflow.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {content.workflow.heading}
            </h2>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
            {content.workflow.steps.map((step, index) => (
              <div
                key={step.label}
                className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 text-sm font-semibold text-oneai-cyan">
                  {index + 1}
                </div>
                <h3 className="mt-5 break-words text-lg font-semibold text-white">{step.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {content.audience.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {content.audience.heading}
            </h2>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-3">
            {content.audience.items.map((item) => (
              <div key={item.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]">
                <h3 className="break-words text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-oneai-gold/20 bg-oneai-gold/[0.06] p-6 sm:p-8 md:rounded-[2rem]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{content.cta.heading}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{content.cta.body}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href={content.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto"
                >
                  {content.cta.openLabel} <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={localePath(locale, "/contact")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {content.cta.demoLabel}
                </Link>
              </div>
            </div>
            {content.disclaimer ? (
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-slate-500">
                {content.disclaimer}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
