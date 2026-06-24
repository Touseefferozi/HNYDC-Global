type IconProps = {
  className?: string;
};

export function GlobalPerspectiveIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="7" ry="18" stroke="currentColor" strokeWidth="2" />
      <path d="M6 24h36M8 15h32M8 33h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PartnershipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 28v-8c0-4 3-7 7-7h2M38 28v-8c0-4-3-7-7-7h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 32c0 4 3 6 8 6s8-2 8-6M24 26v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20l10-6 10 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GrowthIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 38V14M8 38h32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 30l8-10 6 6 12-16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M34 10v8h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EmergingMarketsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 36c4-10 10-16 14-22 4 6 10 12 14 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6 38h36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 30l6 4 6-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
