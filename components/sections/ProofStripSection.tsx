"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Figures, not adjectives.
 *
 * These come from OneForge's own control plane and the strip says so. They are proof
 * that the governance chain is exercised rather than theoretical — they are NOT
 * customer-scale metrics, and presenting them as such would be the exact dishonesty
 * the product is built to prevent.
 */
const content = {
  en: {
    eyebrow: "Measured, not claimed",
    source: "From OneForge's own control plane — every figure below is a query away.",
    stats: [
      { value: 941, label: "Audit records", note: "Append-only. Nothing edited, nothing deleted." },
      { value: 37, suffix: " / 11", label: "Approved / rejected", note: "A gate that never rejects is not a gate." },
      { value: 34, label: "Rollbacks executed", note: "Reversibility proven, not promised." }
    ]
  },
  zh: {
    eyebrow: "实测，而非声称",
    source: "数据来自 OneForge 自身控制平面——下面每一个数字都可以当场查询验证。",
    stats: [
      { value: 941, label: "条审计记录", note: "只增不改。没有编辑，没有删除。" },
      { value: 37, suffix: " / 11", label: "次审批通过 / 驳回", note: "从不驳回的门禁不是门禁。" },
      { value: 34, label: "次真实回滚", note: "可回退是被证明的，不是被承诺的。" }
    ]
  }
} as const;

function useCountUp(target: number, animate: boolean) {
  // Default to the real figure. If the observer never fires, if JavaScript fails, or
  // if the markup is read without hydration, the strip still shows the truth — a
  // number frozen at zero would be worse than no animation at all.
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!animate) return;
    let raf = 0;
    const started = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      // Ease-out so the number settles rather than stopping dead.
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    // A backgrounded tab throttles rAF, so guarantee the final value regardless.
    const safety = setTimeout(() => setValue(target), 2500);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, [target, animate]);

  return value;
}

function Stat({ value, suffix, label, note, animate }: {
  value: number; suffix?: string; label: string; note: string; animate: boolean;
}) {
  const shown = useCountUp(value, animate);
  return (
    <div className="min-w-0">
      <div className="font-mono-accent text-4xl font-medium leading-none text-white sm:text-5xl lg:text-[3.4rem]">
        {shown}
        {suffix ? <span className="text-slate-500">{suffix}</span> : null}
      </div>
      <div className="mt-3 text-sm font-semibold text-cyan-200">{label}</div>
      <p className="mt-1.5 text-sm leading-6 text-slate-500">{note}</p>
    </div>
  );
}

export function ProofStripSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;
    // Already on screen when the page loaded: showing the figure and then snapping it
    // back to zero to count up would look like a glitch. Only animate what arrives.
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-b border-white/10 bg-white/[0.02]">
      <div ref={ref} className="site-shell-wide py-14 lg:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <p className="max-w-xl text-xs leading-5 text-slate-500">{t.source}</p>
        </div>
        <div className="mt-9 grid gap-9 sm:grid-cols-3 sm:gap-6">
          {t.stats.map((stat) => (
            <Stat key={stat.label} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
