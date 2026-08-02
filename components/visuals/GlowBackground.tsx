export function GlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-oneai-gold/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="grid-mask absolute inset-0 opacity-60" />
    </div>
  );
}
