"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navEntries, type NavEntry, type NavLink } from "@/data/nav";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { LogoMark } from "@/components/brand/LogoMark";

const chrome = {
  en: { requestDemo: "Request Demo", openCore: "Open Core", tagline: "AI Operating Platform" },
  zh: { requestDemo: "预约演示", openCore: "打开 Core", tagline: "AI 运行平台" }
} as const;

/** Panel links, grouped under their section heading in the order they were declared. */
function sectioned(items: NavLink[], locale: Locale) {
  const groups: { section: string | null; links: NavLink[] }[] = [];
  for (const item of items) {
    const section = item.section?.[locale] ?? null;
    const last = groups[groups.length - 1];
    if (last && last.section === section) last.links.push(item);
    else groups.push({ section, links: [item] });
  }
  return groups;
}

/**
 * One top-level entry.
 *
 * Opens on hover for the mouse and on click for everything else, because a panel
 * that only opens on hover is unreachable by keyboard and by touch. The trigger is
 * a real button with aria-expanded, Escape closes it, and moving focus out of the
 * entry closes it too — so tabbing through the bar behaves the way tabbing should.
 */
function DesktopEntry({ entry, locale }: { entry: NavEntry; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!entry.items) {
    return (
      <Link href={localePath(locale, entry.href ?? "/")} className="text-sm text-slate-300 transition hover:text-white">
        {entry.label[locale]}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-white"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {entry.label[locale]}
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open ? (
        <div className="absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3">
          <div className="glass-panel overflow-hidden rounded-2xl p-2">
            {sectioned(entry.items, locale).map((group) => (
              <div key={group.section ?? "default"}>
                {group.section ? (
                  <p className="px-3 pb-1 pt-3 font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
                    {group.section}
                  </p>
                ) : null}
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={localePath(locale, link.href)}
                    className="block rounded-xl px-3 py-2.5 transition hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    <span className="block text-sm font-medium text-white">{link.label[locale]}</span>
                    {link.hint ? <span className="mt-0.5 block text-xs leading-5 text-slate-400">{link.hint[locale]}</span> : null}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

/** On a phone the panels are always expanded: a drawer has room, and a tap to
    reveal a tap is a tax. */
function MobileEntry({ entry, locale, onNavigate }: { entry: NavEntry; locale: Locale; onNavigate: () => void }) {
  if (!entry.items) {
    return (
      <Link
        href={localePath(locale, entry.href ?? "/")}
        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-oneai-cyan/50 hover:text-white"
        onClick={onNavigate}
      >
        {entry.label[locale]}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
      <p className="px-2 pb-1 pt-2 font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-oneai-cyan">
        {entry.label[locale]}
      </p>
      {entry.items.map((link) => (
        <Link
          key={link.href}
          href={localePath(locale, link.href)}
          className="block rounded-xl px-2 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
          onClick={onNavigate}
        >
          {link.label[locale]}
        </Link>
      ))}
    </div>
  );
}

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

        <nav className="hidden items-center gap-7 lg:flex">
          {navEntries.map((entry) => (
            <DesktopEntry key={entry.label.en} entry={entry} locale={locale} />
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
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-oneai-bg/95 lg:hidden">
          <nav className="site-shell-wide grid gap-2 py-4">
            {navEntries.map((entry) => (
              <MobileEntry key={entry.label.en} entry={entry} locale={locale} onNavigate={() => setOpen(false)} />
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
