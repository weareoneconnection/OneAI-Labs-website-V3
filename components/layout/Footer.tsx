import Link from "next/link";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { LogoMark } from "@/components/brand/LogoMark";

const content = {
  en: {
    blurb: "An integrated AI operating platform connecting model access, capability evolution, agent coordination, governed execution, memory and real-world applications.",
    incorporated: "Incorporated",
    openCore: "Open OneAI Core",
    docs: "Core Docs",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    columns: [
      {
        heading: "Platform",
        links: [
          ["OneAI Core", "/core"],
          ["OneForge", "/forge"],
          ["Agent Systems", "/agent-os"],
          ["Studio", "/studio"],
          ["Pricing", "/pricing"]
        ]
      },
      {
        heading: "Products",
        links: [
          ["All products", "/products"],
          ["OneAI Construction", "/construction"],
          ["OneVideo Studio", "/video"],
          ["Industries", "/industries"],
          ["AI agent development", "/solutions/agents"],
          ["Enterprise AI training", "/solutions/training"]
        ]
      },
      {
        heading: "Developers",
        links: [["Developers", "/developers"]]
      },
      {
        heading: "Company",
        links: [
          ["About", "/company"],
          ["Contact", "/contact"],
          ["Privacy", "/privacy"],
          ["Terms", "/terms"]
        ]
      }
    ]
  },
  zh: {
    blurb: "连接模型接入、能力进化、Agent 协同、受治理执行、长期记忆与真实应用的一体化 AI 运行平台。",
    incorporated: "注册于",
    openCore: "打开 OneAI Core",
    docs: "Core 文档",
    rights: "保留所有权利。",
    privacy: "隐私政策",
    terms: "使用条款",
    columns: [
      {
        heading: "平台",
        links: [
          ["OneAI Core", "/core"],
          ["OneForge", "/forge"],
          ["Agent 系统", "/agent-os"],
          ["Studio", "/studio"],
          ["定价", "/pricing"]
        ]
      },
      {
        heading: "产品",
        links: [
          ["全部产品", "/products"],
          ["OneAI Construction", "/construction"],
          ["OneVideo Studio", "/video"],
          ["行业", "/industries"],
          ["AI 智能体开发", "/solutions/agents"],
          ["企业 AI 训练", "/solutions/training"]
        ]
      },
      {
        heading: "开发者",
        links: [["开发者文档", "/developers"]]
      },
      {
        heading: "公司",
        links: [
          ["关于我们", "/company"],
          ["联系我们", "/contact"],
          ["隐私政策", "/privacy"],
          ["使用条款", "/terms"]
        ]
      }
    ]
  }
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <footer className="border-t border-white/10 bg-oneai-bg">
      <div className="site-shell-wide grid gap-10 py-10 sm:py-12 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10 shrink-0" />
            <div>
              <div className="text-lg font-semibold">OneAI Labs</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">{t.blurb}</p>
          <p className="mt-4 break-words text-xs leading-6 text-slate-500">
            {site.legalName} · {site.registrationNo} · {t.incorporated} {site.incorporatedOn}
          </p>
        </div>
        {t.columns.map((column) => (
          <div key={column.heading} className="min-w-0">
            <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
            <div className="mt-4 grid gap-2">
              {column.links.map(([label, href]) => (
                <Link key={href} href={localePath(locale, href)} className="text-sm text-slate-400 hover:text-white">
                  {label}
                </Link>
              ))}
              {/* The off-site surfaces hang off the column they belong to rather than
                  in a separate "Ecosystem" list nobody was looking for. */}
              {column.heading === "Platform" || column.heading === "平台" ? (
                <a href={site.appUrl} className="text-sm text-slate-400 hover:text-white">{t.openCore}</a>
              ) : null}
              {column.heading === "Developers" || column.heading === "开发者" ? (
                <>
                  <a href={site.docsUrl} className="text-sm text-slate-400 hover:text-white">{t.docs}</a>
                  <a href={site.apiUrl} className="break-all text-sm text-slate-400 hover:text-white">{site.apiUrl.replace("https://", "")}</a>
                </>
              ) : null}
              {column.heading === "Company" || column.heading === "公司" ? (
                <>
                  <a href={site.waocUrl} className="text-sm text-slate-400 hover:text-white">WAOC Network</a>
                  <a href={`mailto:${site.email}`} className="break-all text-sm text-slate-400 hover:text-white">{site.email}</a>
                </>
              ) : null}
            </div>
          </div>
        ))}
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
