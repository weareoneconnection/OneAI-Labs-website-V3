import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

import { TheOneMark } from "@/components/brand/TheOneMark";
import { SectionIndex } from "@/components/sections/SectionIndex";
import { theOneFacts } from "@/data/theone";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const labels = {
  en: {
    official: "Visit the official site",
    open: "Open the web app",
    download: "Download Desktop",
    learn: "TheOne inside the OneAI platform",
    imageAlt: "TheOne web workspace with example content",
    imageNote: "Current product interface with example content; not a live task or benchmark result."
  },
  zh: {
    official: "访问 TheOne 官网",
    open: "打开网页版",
    download: "下载桌面版",
    learn: "了解 TheOne 在 OneAI 平台中的位置",
    imageAlt: "TheOne 网页工作空间，包含示例内容",
    imageNote: "当前产品界面，包含示例内容；不是实时任务或性能测试结果。"
  }
} as const;

export function TheOneSection({ locale, index }: { locale: Locale; index?: number }) {
  const t = theOneFacts[locale];
  const label = labels[locale];

  return (
    <section id="theone" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-oneai-gold/25 bg-oneai-gold/[0.07] p-3 pr-5">
              <span className="rounded-xl bg-[#faf9f5] p-1.5"><TheOneMark size={36} /></span>
              <span className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold">THEONE</span>
            </div>
            <div className="mt-8"><SectionIndex index={index} label={t.eyebrow} /></div>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">{t.headline}</h2>
            <p className="mt-5 text-xl font-medium leading-8 text-cyan-100">{t.position}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.summary}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={site.theOneWebsiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">
                {label.official} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={site.theOneAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-oneai-cyan/35 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-oneai-cyan">
                {label.open} <ArrowRight className="h-4 w-4" />
              </a>
              <a href={site.theOneDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-gold/60">
                {label.download} <Download className="h-4 w-4" />
              </a>
            </div>

            <Link href={localePath(locale, "/theone")} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-oneai-gold hover:text-amber-200">
              {label.learn} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="min-w-0">
            <figure className="overflow-hidden rounded-3xl border border-white/10 bg-[#faf9f5] p-2 shadow-glow sm:p-3">
              <Image
                src={`${site.theOneWebsiteUrl}/screens/home-${locale}.jpg`}
                alt={label.imageAlt}
                width={2400}
                height={1500}
                loading="lazy"
                unoptimized
                className="block h-auto w-full rounded-2xl"
              />
              <figcaption className="px-3 py-3 text-xs leading-5 text-slate-600">{label.imageNote}</figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {t.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
              <strong className="font-mono-accent text-3xl font-semibold text-white">{stat.value}</strong>
              <p className="mt-2 text-sm leading-5 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">{t.snapshotNote}</p>
      </div>
    </section>
  );
}
