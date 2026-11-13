// Neutral image placeholder for projects without a screenshot.
export function PhotoPlaceholder({ size = 56 }: { size?: number }) {
  return (
    <span className="photo-placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
        <circle cx="9" cy="10" r="1.75" />
        <path d="m3.5 17.5 5-5 3.5 3.5 2.5-2.5 5.5 5.5" />
      </svg>
    </span>
  );
}
