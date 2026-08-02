import Link from "next/link";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { LogoMark } from "@/components/brand/LogoMark";

const content = {
  en: {
    blurb: "An integrated AI operating platform connecting model access, capability evolution, agent coordination, governed execution, memory and real-world applications.",
    incorporated: "Incorporated",
    siteHeading: "Site",
    ecosystemHeading: "Ecosystem",
    openCore: "Open OneAI Core",
    docs: "Core Docs",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    tagline: "One Intelligence · Infinite Possibilities",
    links: [
      ["Core", "/core"],
      ["Forge", "/forge"],
      ["Agent OS", "/agent-os"],
      ["Studio", "/studio"],
      ["Video", "/video"],
      ["Products", "/products"],
      ["Use Cases", "/use-cases"],
      ["Developers", "/developers"],
      ["Pricing", "/pricing"],
      ["Company", "/company"],
      ["Contact", "/contact"]
    ]
  },
  zh: {
    blurb: "连接模型接入、能力进化、Agent 协同、受治理执行、长期记忆与真实应用的一体化 AI 运行平台。",
    incorporated: "注册于",
    siteHeading: "站点",
    ecosystemHeading: "生态",
    openCore: "打开 OneAI Core",
    docs: "Core 文档",
    rights: "保留所有权利。",
    privacy: "隐私政策",
    terms: "使用条款",
    tagline: "一份智能 · 无限可能",
    links: [
      ["Core", "/core"],
      ["Forge", "/forge"],
      ["Agent OS", "/agent-os"],
      ["Studio", "/studio"],
      ["短剧", "/video"],
      ["产品", "/products"],
      ["应用场景", "/use-cases"],
      ["开发者", "/developers"],
      ["定价", "/pricing"],
      ["公司", "/company"],
      ["联系我们", "/contact"]
    ]
  }
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <footer className="border-t border-white/10 bg-oneai-bg">
      <div className="site-shell-wide grid gap-10 py-10 sm:py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10 shrink-0" />
            <div>
              <div className="text-lg font-semibold">OneAI Labs</div>
              <div className="text-xs text-slate-500">{t.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">{t.blurb}</p>
          <p className="mt-4 break-words text-xs leading-6 text-slate-500">
            {site.legalName} · {site.registrationNo} · {t.incorporated} {site.incorporatedOn}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{t.siteHeading}</h3>
          <div className="mt-4 grid gap-2">
            {t.links.map(([label, href]) => (
              <Link key={href} href={localePath(locale, href)} className="text-sm text-slate-400 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{t.ecosystemHeading}</h3>
          <div className="mt-4 grid gap-2">
            <a href={site.waocUrl} className="text-sm text-slate-400 hover:text-white">WAOC Network</a>
            <a href={site.appUrl} className="text-sm text-slate-400 hover:text-white">{t.openCore}</a>
            <a href={site.docsUrl} className="text-sm text-slate-400 hover:text-white">{t.docs}</a>
            <a href={`mailto:${site.email}`} className="break-all text-sm text-slate-400 hover:text-white">{site.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-500">
        <span>© {new Date().getFullYear()} OneAI Labs. {t.rights}</span>
        <span className="mx-2 text-slate-700">·</span>
        <Link href={localePath(locale, "/privacy")} className="hover:text-slate-300">{t.privacy}</Link>
        <span className="mx-2 text-slate-700">·</span>
        <Link href={localePath(locale, "/terms")} className="hover:text-slate-300">{t.terms}</Link>
      </div>
    </footer>
  );
}
