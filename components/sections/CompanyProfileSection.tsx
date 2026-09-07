import { Building2, CalendarDays, FileCheck2, Mail, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

/**
 * The registry block, said once.
 *
 * It used to state the registration number, incorporation date and jurisdiction
 * three times over — a stat row, a facts grid, and then a "Certificate note"
 * paragraph that restated all of it in prose — plus a notices list repeating the
 * entity type already shown above it. Legal identity is the one place on a company
 * site where repetition reads as insecurity rather than thoroughness.
 *
 * Four facts, once each, and the channel to reach the company. Nothing else.
 */

const content = {
  en: {
    eyebrow: "Corporate",
    body: "The incorporated entity behind OneAI Labs and the OneAI product ecosystem.",
    badge: "Incorporated",
    facts: [
      { label: "Legal entity", value: site.legalName, icon: Building2 },
      { label: "Registration no.", value: site.registrationNo, icon: FileCheck2 },
      { label: "Incorporated", value: site.incorporatedOn, icon: CalendarDays },
      { label: "Jurisdiction", value: `${site.jurisdiction} · Private company limited by shares`, icon: MapPin }
    ],
    contactEyebrow: "Official contact",
    contactHeading: "The registered company channel",
    contactNote: "Formal correspondence — contracts, security review, legal notice — should use this address."
  },
  zh: {
    eyebrow: "公司主体",
    body: "OneAI Labs 与 OneAI 产品生态背后的注册实体。",
    badge: "已注册",
    facts: [
      { label: "法律实体", value: site.legalName, icon: Building2 },
      { label: "注册编号", value: site.registrationNo, icon: FileCheck2 },
      { label: "注册日期", value: site.incorporatedOn, icon: CalendarDays },
      { label: "注册地", value: `${site.jurisdiction} · 股份制私人有限公司`, icon: MapPin }
    ],
    contactEyebrow: "官方联系方式",
    contactHeading: "公司注册渠道",
    contactNote: "正式往来——合同、安全审查、法律通知——请使用此邮箱。"
  }
} as const;

export function CompanyProfileSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-t border-white/10 bg-white/[0.02]">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.5fr)] lg:gap-12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <p className="section-eyebrow">{t.eyebrow}</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-oneai-cyan/25 bg-oneai-cyan/[0.08] px-3 py-1 text-xs font-semibold text-oneai-cyan">
                <ShieldCheck className="h-3.5 w-3.5" /> {t.badge}
              </span>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">{t.body}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="flex min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-oneai-cyan" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                      <p className="mt-1.5 break-words text-sm font-medium leading-6 text-white">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="min-w-0">
            <p className="section-eyebrow">{t.contactEyebrow}</p>
            <h3 className="mt-4 text-lg font-semibold text-white">{t.contactHeading}</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60 hover:text-oneai-cyan"
            >
              <Mail className="h-4 w-4 shrink-0" /> <span className="min-w-0 break-all">{site.email}</span>
            </a>
            <p className="mt-4 text-xs leading-5 text-slate-500">{t.contactNote}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
