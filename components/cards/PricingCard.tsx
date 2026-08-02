import { Check } from "lucide-react";

export function PricingCard({ name, price, description, features, highlighted = false }: { name: string; price: string; description: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={highlighted ? "min-w-0 rounded-2xl border border-oneai-gold/40 bg-oneai-gold/10 p-5 shadow-gold" : "min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5"}>
      <h3 className="break-words text-lg font-semibold">{name}</h3>
      <p className="mt-2 break-words text-2xl font-semibold text-oneai-gold">{price}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <ul className="mt-5 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-slate-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-oneai-cyan" />
            <span className="min-w-0 break-words">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
