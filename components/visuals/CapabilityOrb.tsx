import { Anvil, BrainCircuit, Database, Layers3, Network, Sparkles, Zap } from "lucide-react";

const nodes = [
  { label: "OneAI Core", detail: "Operate", icon: Layers3, pos: "left-0 top-[18%]" },
  { label: "OneForge", detail: "Evolve", icon: Anvil, pos: "right-0 top-[16%]" },
  { label: "TheOne", detail: "Orchestrate", icon: BrainCircuit, pos: "left-[4%] bottom-[14%]" },
  { label: "OneClaw", detail: "Execute", icon: Zap, pos: "right-[2%] bottom-[14%]" },
  { label: "OneField", detail: "Remember", icon: Database, pos: "left-1/2 -translate-x-1/2 bottom-0" },
];

export function CapabilityOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[650px]">
      <div className="absolute inset-[8%] rounded-full border border-cyan-300/15 bg-[radial-gradient(circle_at_50%_46%,rgba(34,211,238,.18),transparent_36%),radial-gradient(circle_at_50%_50%,rgba(99,102,241,.16),transparent_62%)] shadow-[0_0_120px_rgba(34,211,238,.14)]" />
      <div className="absolute inset-[17%] rounded-full border border-white/10" />
      <div className="absolute inset-[29%] animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-cyan-300/20" />
      <div className="absolute inset-[39%] animate-[spin_14s_linear_infinite_reverse] rounded-full border border-indigo-300/20" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="#f8fafc" stopOpacity="0.38" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {[['50','50','18','25'],['50','50','82','24'],['50','50','18','78'],['50','50','82','78'],['50','50','50','93']].map((line, index) => (
          <line key={index} x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke="url(#lineGradient)" strokeWidth="0.35" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-slate-950/85 text-center shadow-[0_0_70px_rgba(34,211,238,.22)] backdrop-blur-xl sm:h-48 sm:w-48">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
          <Network className="h-6 w-6" />
        </div>
        <div className="mt-4 text-sm font-semibold tracking-[0.18em] text-white">ONEAI LABS</div>
        <div className="mt-2 text-xs text-slate-400">Capability OS</div>
      </div>

      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className={`absolute ${node.pos} min-w-[132px] rounded-2xl border border-white/10 bg-slate-950/75 p-3 shadow-[0_16px_50px_rgba(0,0,0,.35)] backdrop-blur-xl sm:min-w-[150px] sm:p-4`}>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{node.label}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-500">{node.detail}</div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute left-1/2 top-[3%] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-xl">
        <Sparkles className="mr-2 inline h-3.5 w-3.5" /> Continuous intelligence
      </div>
    </div>
  );
}
