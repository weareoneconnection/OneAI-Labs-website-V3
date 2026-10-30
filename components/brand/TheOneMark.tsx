/** TheOne's mark, as on the1os.io: an open orbit with one warm point. */
export function TheOneMark({ size = 44, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="TheOne" className={className}>
      <rect x="1" y="1" width="22" height="22" rx="7" fill="#201f1d" />
      <path
        d="M17.6 11.9 A5.6 5.6 0 1 1 12.1 6.4"
        fill="none"
        stroke="#faf9f5"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="15.96" cy="8.04" r="1.95" fill="#d9774d" />
    </svg>
  );
}
