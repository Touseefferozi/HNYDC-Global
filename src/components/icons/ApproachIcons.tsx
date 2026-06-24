type IconProps = {
  className?: string;
};

export function MarketAnalysisIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M32 32l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 22h12M22 16v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StrategicPartnershipsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 38c0-6 4-10 10-10M38 38c0-6-4-10-10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M22 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ExecutionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M14 20h20M14 28h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M30 28l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
