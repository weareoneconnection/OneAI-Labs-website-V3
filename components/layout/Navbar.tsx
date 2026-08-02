"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { LogoMark } from "@/components/brand/LogoMark";

const chrome = {
  en: { requestDemo: "Request Demo", openCore: "Open Core", tagline: "AI Operating Platform" },
  zh: { requestDemo: "预约演示", openCore: "打开 Core", tagline: "AI 运行平台" }
} as const;

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = chrome[locale];

  const basePath = pathname.startsWith("/zh") ? pathname.slice(3) || "/" : pathname;
  const switchTarget = locale === "zh" ? basePath : localePath("zh", basePath);
  const switchLabel = locale === "zh" ? "EN" : "中文";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-oneai-bg/90 backdrop-blur-xl">
      <div className="site-shell-wide flex h-16 items-center justify-between">
        <Link href={localePath(locale, "/")} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-9 w-9 shrink-0" />
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-none">OneAI Labs</div>
            <div className="mt-1 hidden text-[10px] uppercase tracking-[0.24em] text-slate-500 min-[380px]:block">{t.tagline}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={localePath(locale, item.href)} className="text-sm text-slate-300 transition hover:text-white">
              {item.label[locale]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={switchTarget}
            className="inline-flex h-10 items-center rounded-full border border-white/10 px-3.5 text-xs font-semibold text-slate-300 transition hover:border-oneai-gold/50 hover:text-oneai-gold"
            aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
          >
            {switchLabel}
          </Link>
          <Link href={localePath(locale, "/contact")} className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-oneai-cyan/50 hover:text-white sm:inline-flex">{t.requestDemo}</Link>
          <a href={site.appUrl} className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-oneai-bg transition hover:bg-oneai-gold min-[500px]:inline-flex">{t.openCore}</a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-oneai-cyan/60 lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-oneai-bg/95 lg:hidden">
          <nav className="site-shell-wide grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-oneai-cyan/50 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label[locale]}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 min-[420px]:grid-cols-2">
              <Link href={localePath(locale, "/contact")} className="rounded-full border border-oneai-gold/30 px-4 py-3 text-center text-sm font-semibold text-oneai-gold" onClick={() => setOpen(false)}>
                {t.requestDemo}
              </Link>
              <a href={site.appUrl} className="rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-oneai-bg" onClick={() => setOpen(false)}>
                {t.openCore}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
