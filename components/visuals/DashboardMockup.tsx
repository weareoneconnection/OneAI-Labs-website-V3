import type { ReactNode } from "react";
import { Activity, KeyRound, LineChart, ShieldCheck } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl md:rounded-[2rem]">
      <div className="mb-4 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] text-oneai-gold sm:tracking-[0.25em]">OneAI Core</p>
          <h3 className="mt-1 break-words text-lg font-semibold">Commercial Control Plane</h3>
        </div>
        <div className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Metric label="Requests" value="50K" icon={<Activity className="h-4 w-4" />} />
        <Metric label="Cost guard" value="$500" icon={<LineChart className="h-4 w-4" />} />
        <Metric label="API Keys" value="18" icon={<KeyRound className="h-4 w-4" />} />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium"><ShieldCheck className="h-4 w-4 text-oneai-cyan" /> Policy Guardrails</div>
          <div className="space-y-2">
            {["maxCostUsd per request", "Plan gates", "Provider allowlist"].map((item) => (
              <div key={item} className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                <span className="min-w-0 break-words">{item}</span><span className="shrink-0 text-oneai-gold">Enabled</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 text-sm font-medium">Task Activity</div>
          <div className="space-y-3">
            {[
              ["business_strategy", "82%"],
              ["market_research", "68%"],
              ["support_brain", "54%"]
            ].map(([name, width]) => (
              <div key={name}>
                <div className="mb-1 flex justify-between gap-3 text-xs text-slate-400"><span className="min-w-0 break-all">{name}</span><span className="shrink-0">{width}</span></div>
                <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-gradient-to-r from-oneai-blue to-oneai-cyan" style={{ width }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between text-oneai-cyan">{icon}<span className="text-xs text-slate-400">30d</span></div>
      <div className="mt-3 text-2xl font-semibold">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}
