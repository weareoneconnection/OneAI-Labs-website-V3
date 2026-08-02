import { ArrowRight, Bot, BrainCircuit, MousePointerClick, Sparkles, Zap } from "lucide-react";

const nodes = [
  { label: "Human Intent", icon: MousePointerClick },
  { label: "OneAI", icon: BrainCircuit },
  { label: "OneAI Bot", icon: Bot },
  { label: "OneClaw", icon: Zap },
  { label: "Result", icon: Sparkles }
];

export function AgentFlowDiagram() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-glow backdrop-blur sm:p-4 md:rounded-[2rem]">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="relative">
              <div className="flex h-full min-h-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-oneai-panel/80 p-4 text-center sm:min-h-28">
                <Icon className="mb-3 h-6 w-6 text-oneai-gold" />
                <span className="break-words text-sm font-medium">{node.label}</span>
              </div>
              {index < nodes.length - 1 && (
                <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-oneai-cyan md:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
