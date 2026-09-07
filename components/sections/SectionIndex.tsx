/**
 * The numbered eyebrow that gives the homepage its spine.
 *
 * Sections are numbered 01…08 so the page reads as one argument in sequence rather
 * than as a stack of independent pitches: the reader always knows where they are and
 * that there is a next step. The index is decorative to a screen reader — the heading
 * that follows carries the meaning — so it is hidden from the accessibility tree.
 *
 * Omitting `index` renders the label alone, which is what the inner pages that reuse
 * these sections need: outside the homepage sequence a number would be a lie.
 */
export function SectionIndex({ index, label }: { index?: number; label: string }) {
  return (
    <p className="section-eyebrow flex items-center gap-3">
      {index === undefined ? null : (
        <span aria-hidden="true" className="text-slate-500">
          {String(index).padStart(2, "0")} /
        </span>
      )}
      <span>{label}</span>
      <span aria-hidden="true" className="h-px w-8 bg-oneai-cyan/60 shadow-[0_0_9px_rgba(0,214,245,0.6)]" />
    </p>
  );
}

/**
 * A full-width assertion between sections.
 *
 * These are the lines the page is built to earn — "The model failed. The system
 * didn't." The muted first clause sets up the claim and the bright second clause
 * lands it, so the contrast does the work that an exclamation mark would otherwise
 * be asked to do.
 */
export function Assertion({ lead, punch }: { lead: string; punch: string }) {
  return (
    <p className="mt-12 flex flex-col gap-1 text-[clamp(2rem,4.2vw,4.4rem)] font-light leading-[0.98] tracking-[-0.055em] sm:flex-row sm:gap-4">
      <span className="text-slate-500">{lead}</span>
      <strong className="font-semibold text-cyan-100">{punch}</strong>
    </p>
  );
}
