/**
 * Vector recreation of the OneAI Labs mark: orbit ring with trailing dots,
 * slanted "1" in brand gradient, "A" with a four-point spark between its legs.
 * Designed for dark backgrounds (the "A" renders white).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="oneai-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#00D6F5" />
        </linearGradient>
        <linearGradient id="oneai-one" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#00D6F5" />
        </linearGradient>
      </defs>

      {/* Orbit ring, gap at top-right */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#oneai-ring)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="205 46.3"
      />

      {/* Trailing dots inside the ring gap */}
      <circle cx="72.9" cy="17.2" r="2.8" fill="url(#oneai-ring)" />
      <circle cx="80.6" cy="24.3" r="2.2" fill="url(#oneai-ring)" />
      <circle cx="86.2" cy="33.1" r="1.6" fill="url(#oneai-ring)" />

      {/* "1" — slanted numeral in brand gradient */}
      <path
        d="M42 26 L53 26 L41 74 L30 74 L39.5 36 L31 40 Z"
        fill="url(#oneai-one)"
      />

      {/* "A" — open apex letterform */}
      <path d="M63 26 L70 26 L82 74 L72.5 74 Z" fill="#FFFFFF" />
      <path d="M63 26 L70 26 L57 74 L47.5 74 Z" fill="#FFFFFF" opacity="0.92" />

      {/* Four-point spark between the legs of the A */}
      <path
        d="M64.5 52 L66.6 58.4 L73 60.5 L66.6 62.6 L64.5 69 L62.4 62.6 L56 60.5 L62.4 58.4 Z"
        fill="url(#oneai-ring)"
      />
    </svg>
  );
}
