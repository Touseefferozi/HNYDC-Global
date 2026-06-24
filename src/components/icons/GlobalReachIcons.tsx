type IconProps = {
  className?: string;
};

export function TradeNetworkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 8v32M8 24h32M12 12l24 24M36 12L12 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="8" r="2" fill="currentColor" />
      <circle cx="40" cy="24" r="2" fill="currentColor" />
      <circle cx="24" cy="40" r="2" fill="currentColor" />
      <circle cx="8" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function AfricaFocusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 38c2-12 6-20 10-26 4 6 8 14 10 26M24 12c0-4 2-6 4-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 38h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PrivateSectorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="14" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="8" width="14" height="30" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 22h6M12 28h6M30 16h6M30 22h6M30 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 38h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
