import { Building2, CalendarDays, FileCheck2, Mail, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    registryEyebrow: "Official Registry",
    registryBody: "The incorporated company behind OneAI Labs, OneAI Core and the OneAI product ecosystem.",
    incorporatedBadge: "Incorporated",
    stats: { number: "Company number", incorporated: "Incorporated", jurisdiction: "Jurisdiction" },
    facts: [
      { label: "Legal entity", value: site.legalName, icon: Building2 },
      { label: "Registration no.", value: site.registrationNo, icon: FileCheck2 },
      { label: "Incorporated", value: site.incorporatedOn, icon: CalendarDays },
      { label: "Jurisdiction", value: site.jurisdiction, icon: MapPin },
      { label: "Entity type", value: "Private company limited by shares", icon: ShieldCheck }
    ],
    certLabel: "Certificate note",
    certBody: `Certificate of Incorporation received for ${site.legalName}. The company was incorporated on ${site.incorporatedOn} and operates from Malaysia as the legal entity behind OneAI Labs.`,
    contactEyebrow: "Official Contact",
    contactHeading: "Use the registered company channel",
    notices: [
      "Registered as a private company limited by shares under the Companies Act 2016.",
      "OneAI Core is the flagship operating layer behind the company product ecosystem.",
      "Official communication should use the company email listed on this page."
    ]
  },
  zh: {
    registryEyebrow: "官方注册信息",
    registryBody: "OneAI Labs、OneAI Core 与 OneAI 产品生态背后的注册公司。",
    incorporatedBadge: "已注册",
    stats: { number: "公司编号", incorporated: "注册日期", jurisdiction: "注册地" },
    facts: [
      { label: "法律实体", value: site.legalName, icon: Building2 },
      { label: "注册编号", value: site.registrationNo, icon: FileCheck2 },
      { label: "注册日期", value: site.incorporatedOn, icon: CalendarDays },
      { label: "注册地", value: site.jurisdiction, icon: MapPin },
      { label: "实体类型", value: "股份制私人有限公司", icon: ShieldCheck }
    ],
    certLabel: "注册证书说明",
    certBody: `${site.legalName} 已取得公司注册证书。公司于 ${site.incorporatedOn} 注册成立，注册地为马来西亚，是 OneAI Labs 背后的法律实体。`,
    contactEyebrow: "官方联系方式",
    contactHeading: "请使用注册公司渠道联系",
    notices: [
      "依据马来西亚《2016 年公司法》注册为股份制私人有限公司。",
      "OneAI Core 是公司产品生态背后的旗舰运营层。",
      "正式沟通请使用本页列出的公司邮箱。"
    ]
  }
} as const;

export function CompanyProfileSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell-wide section-y">
      <div className="m-carousel gap-5 md:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] lg:gap-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-glow md:rounded-[2rem]">
          <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.registryEyebrow}</p>
                <h2 className="mt-4 break-words text-3xl font-semibold leading-tight text-white sm:text-5xl">{site.legalName}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {t.registryBody}
                </p>
              </div>
              <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-4 py-2 text-sm font-semibold text-oneai-cyan">
                <ShieldCheck className="h-4 w-4" /> {t.incorporatedBadge}
              </div>
            </div>

            <div className="mt-8 m-carousel gap-3 md:grid sm:grid-cols-3">
              <RegistryStat label={t.stats.number} value={site.registrationNo} />
              <RegistryStat label={t.stats.incorporated} value={site.incorporatedOn} />
              <RegistryStat label={t.stats.jurisdiction} value={site.jurisdiction} />
            </div>
          </div>

          <div className="grid gap-4 p-5 sm:p-8 md:grid-cols-2 lg:p-10">
            {t.facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex min-w-0 gap-4 rounded-3xl border border-white/10 bg-oneai-bg/70 p-4 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-oneai-bg text-oneai-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                    <p className="mt-2 break-words text-base font-semibold leading-6 text-white sm:text-lg">{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-oneai-gold sm:text-sm">{t.certLabel}</p>
            <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
              {t.certBody}
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 sm:p-8 md:rounded-[2rem]">
          <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.contactEyebrow}</p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{t.contactHeading}</h3>
          <a href={`mailto:${site.email}`} className="mt-6 inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold">
            <Mail className="h-4 w-4 shrink-0" /> <span className="min-w-0 break-all">{site.email}</span>
          </a>

          <div className="mt-8 grid gap-3">
            {t.notices.map((notice) => (
              <div key={notice} className="rounded-2xl border border-white/10 bg-oneai-bg/70 p-4 text-sm leading-6 text-slate-300">
                {notice}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function RegistryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-oneai-bg/70 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
