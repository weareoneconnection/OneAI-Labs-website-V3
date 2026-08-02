import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";
import { OperatingSystemMap } from "@/components/visuals/OperatingSystemMap";

const content = {
  en: {
    eyebrow: "The OneAI operating architecture",
    heading: "Five systems. One production loop.",
    body: "Each system owns a clear responsibility. Together they create a closed loop from model access and capability development to coordinated execution, evidence, memory and continuous improvement.",
    cta: "Explore all platform systems",
    principles: [
      ["Clear ownership", "No duplicated control planes or competing sources of truth."],
      ["Governed handoffs", "Plans, approvals, proofs and results move through explicit contracts."],
      ["Closed-loop learning", "Production outcomes return as evidence for the next capability release."]
    ]
  },
  zh: {
    eyebrow: "OneAI 运行架构",
    heading: "五大系统，一个生产闭环。",
    body: "每个系统拥有清晰且唯一的职责，整体形成从模型接入、能力锻造，到协同执行、证据沉淀、长期记忆与持续改进的完整闭环。",
    cta: "查看全部平台系统",
    principles: [
      ["职责唯一", "避免重复控制平面与相互冲突的数据真相源。"],
      ["受治理交接", "计划、审批、证据与结果通过明确契约流转。"],
      ["闭环学习", "生产结果转化为证据，驱动下一次能力发布。"]
    ]
  }
} as const;

export function PlatformStackSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="relative border-y border-white/10 bg-white/[0.015]">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-eyebrow">{t.eyebrow}</p>
            <h2 className="section-title mt-4">{t.heading}</h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
            <Link href={localePath(locale, "/products")} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              {t.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <OperatingSystemMap locale={locale} />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {t.principles.map(([title, body], index) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">0{index + 1}</div>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
