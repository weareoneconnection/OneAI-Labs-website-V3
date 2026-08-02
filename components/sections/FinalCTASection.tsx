import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    badge: "Build for production",
    heading: "Your AI should not stop at a demo.",
    body: "Operate it with OneAI Core. Evolve it with OneForge. Orchestrate it with TheOne. Bring it into the real world with the OneAI Labs capability stack.",
    platform: "Explore OneAI Labs",
    forge: "Open OneForge",
    contact: "Request enterprise demo"
  },
  zh: {
    badge: "面向生产构建",
    heading: "你的 AI 不应该停在演示阶段。",
    body: "用 OneAI Core 运营，用 OneForge 进化，用 TheOne 编排，并通过 OneAI Labs 能力技术栈进入真实世界。",
    platform: "探索 OneAI Labs",
    forge: "打开 OneForge",
    contact: "预约企业演示"
  }
} as const;

export function FinalCTASection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24">
      <div className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="relative site-shell-narrow rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-indigo-400/[0.04] px-6 py-12 text-center shadow-[0_30px_120px_rgba(0,0,0,.35)] sm:px-10 sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100"><Sparkles className="h-4 w-4" />{t.badge}</div>
        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">{t.heading}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.body}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href={localePath(locale, "/products")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">{t.platform}<ArrowRight className="h-4 w-4" /></Link>
          <a href={site.forgeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 px-6 py-3.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10">{t.forge}</a>
          <Link href={localePath(locale, "/contact")} className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.04]">{t.contact}</Link>
        </div>
      </div>
    </section>
  );
}
