import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Company",
    heading: "Built by OneAI Labs",
    body1: "OneAI Labs builds commercial AI infrastructure and agent-powered products. Our flagship product, OneAI Core, provides the operating layer behind API access, task intelligence, routing, policy, usage, cost and product operations.",
    body2: "On top of Core, we build Agent OS, OneAI Bot, OneClaw and vertical systems for trading, construction, missions and field reputation.",
    facts: {
      legal: "Legal entity",
      regNo: "Registration no.",
      incorporated: "Incorporated",
      jurisdiction: "Jurisdiction"
    },
    entityNote: "Private company limited by shares. Part of WAOC Network.",
    profileCta: "Official Company Profile",
    emailCta: "Email OneAI Labs"
  },
  zh: {
    eyebrow: "公司",
    heading: "由 OneAI Labs 打造",
    body1: "OneAI Labs 打造商业化 AI 基础设施与智能体产品。旗舰产品 OneAI Core 提供 API 访问、任务智能、路由、策略、用量、成本和产品运营背后的运营层。",
    body2: "在 Core 之上，我们构建 Agent OS、OneAI Bot、OneClaw，以及面向交易、建筑、任务协作和声誉体系的垂直系统。",
    facts: {
      legal: "法律实体",
      regNo: "注册编号",
      incorporated: "注册日期",
      jurisdiction: "注册地"
    },
    entityNote: "股份制私人有限公司，隶属 WAOC Network。",
    profileCta: "官方公司档案",
    emailCta: "邮件联系 OneAI Labs"
  }
} as const;

export function CompanySection({ locale, showProfileLink = true }: { locale: Locale; showProfileLink?: boolean }) {
  const t = content[locale];

  return (
    <section className="site-shell section-y">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 sm:p-8 md:rounded-[2rem] md:p-12">
        <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.body1}</p>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.body2}</p>
        <div className="mt-8 m-carousel gap-3 md:grid md:grid-cols-4">
          <CompanyFact label={t.facts.legal} value={site.legalName} />
          <CompanyFact label={t.facts.regNo} value={site.registrationNo} />
          <CompanyFact label={t.facts.incorporated} value={site.incorporatedOn} />
          <CompanyFact label={t.facts.jurisdiction} value={site.jurisdiction} />
        </div>
        <p className="mt-5 text-sm text-slate-400">{t.entityNote}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {showProfileLink ? (
            <Link href={localePath(locale, "/company")} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">
              {t.profileCta} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          <a href={site.waocUrl} className="inline-flex w-full justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60 sm:w-auto">WAOC Network</a>
          <a href={`mailto:${site.email}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-oneai-gold/30 px-6 py-3 text-sm font-semibold text-oneai-gold transition hover:bg-oneai-gold/10 sm:w-auto">
            <Mail className="h-4 w-4 shrink-0" /> {t.emailCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function CompanyFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-oneai-bg/70 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
