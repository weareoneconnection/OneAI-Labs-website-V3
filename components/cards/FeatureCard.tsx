import type { LucideIcon } from "lucide-react";

export function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon?: LucideIcon }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-oneai-cyan/40 hover:bg-white/[0.06] sm:min-h-48 sm:p-6">
      {Icon && <Icon className="mb-4 h-6 w-6 text-oneai-gold" />}
      <h3 className="break-words text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
