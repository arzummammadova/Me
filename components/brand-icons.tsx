const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

export function ChannelIcon({ name }: { name: string }) {
  switch (name) {
    case "email":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="3" />
          <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.6 3.25h2.6l1.45 4.1-1.9 1.25a12 12 0 006.65 6.65l1.25-1.9 4.1 1.45v2.6a2.35 2.35 0 01-2.55 2.35C10.6 19.2 4.8 13.4 4.25 5.8A2.35 2.35 0 016.6 3.25z" />
        </svg>
      );
    case "location":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.45 2H3.55A1.55 1.55 0 002 3.55v16.9A1.55 1.55 0 003.55 22h16.9A1.55 1.55 0 0022 20.45V3.55A1.55 1.55 0 0020.45 2zM8.1 18.9H5.15V9.6H8.1zM6.62 8.3a1.72 1.72 0 110-3.43 1.72 1.72 0 010 3.43zM18.9 18.9h-2.95v-4.53c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.61H9.76V9.6h2.83v1.27h.04a3.1 3.1 0 012.79-1.53c2.99 0 3.54 1.96 3.54 4.52z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5.25" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.3" cy="6.7" r="1.05" fill="currentColor" stroke="none" />
        </svg>
      );
    case "medium":
      return (
        <svg {...common} fill="currentColor">
          <ellipse cx="6.8" cy="12" rx="5.3" ry="5.6" />
          <ellipse cx="15.6" cy="12" rx="2.65" ry="5.25" />
          <ellipse cx="20.6" cy="12" rx=".95" ry="4.7" />
        </svg>
      );
    case "web":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z" />
        </svg>
      );
    default:
      return null;
  }
}
