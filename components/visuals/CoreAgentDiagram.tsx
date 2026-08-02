import type { ReactNode } from "react";
import { ArrowRight, Bot, BrainCircuit, KeyRound, LineChart, TerminalSquare, Zap } from "lucide-react";

function MiniPill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{children}</span>;
}

export function CoreAgentDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-glow backdrop-blur-xl sm:p-4 md:rounded-[2rem]">
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-oneai-gold/20 via-cyan-400/10 to-blue-600/20 opacity-70 blur md:rounded-[2rem]" />
      <div className="relative rounded-3xl border border-white/10 bg-oneai-bg/80 p-4 sm:p-5 md:rounded-[1.5rem]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-oneai-gold sm:tracking-[0.3em]">OneAI Labs</p>
            <h3 className="mt-1 break-words text-lg font-semibold sm:text-xl">Commercial AI Stack</h3>
          </div>
          <div className="shrink-0 rounded-full border border-oneai-gold/30 bg-oneai-gold/10 p-2 text-oneai-gold">
            <BrainCircuit className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
            <div className="flex items-center gap-2 text-blue-100">
              <TerminalSquare className="h-5 w-5 text-oneai-cyan" />
              <span className="font-semibold">OneAI Core</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">Commercial AI Operating Layer</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <MiniPill>Gateway</MiniPill>
              <MiniPill>Task API</MiniPill>
              <MiniPill>Routing</MiniPill>
              <MiniPill>Policy</MiniPill>
              <MiniPill>Usage</MiniPill>
              <MiniPill>Console</MiniPill>
            </div>
          </div>

          <div className="rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-4">
            <div className="flex items-center gap-2 text-amber-100">
              <Zap className="h-5 w-5 text-oneai-gold" />
              <span className="font-semibold">Agent OS</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">Intelligence to interface to execution</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <span>OneAI</span><ArrowRight className="h-3 w-3" /><span>Bot</span><ArrowRight className="h-3 w-3" /><span>OneClaw</span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400 sm:tracking-[0.25em]">Request lifecycle</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-200 sm:grid-cols-4">
            <div className="flex items-center gap-2"><Bot className="h-4 w-4 text-oneai-cyan" />shape</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-oneai-gold" />route</div>
            <div className="flex items-center gap-2"><LineChart className="h-4 w-4 text-oneai-cyan" />guard</div>
            <div className="flex items-center gap-2"><KeyRound className="h-4 w-4 text-oneai-gold" />track</div>
          </div>
        </div>
      </div>
    </div>
  );
}
