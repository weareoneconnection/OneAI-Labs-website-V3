export function TheOneMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="TheOne">
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
