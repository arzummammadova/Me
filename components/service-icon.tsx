export function ServiceIcon({ name }: { name: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M12 19l7-7 2 2-7 7-2-2z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.6 7.6" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z" />
          <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M4.5 18a9 9 0 1115 0" />
          <path d="M12 13l4-5" />
          <circle cx="12" cy="13" r="1.4" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="1.8" />
          <path d="M5 8.5l7 1.5 7-1.5M12 10v4.5M9 21l3-6.5 3 6.5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.8 3.8 5.8 3.8 9s-1.2 6.2-3.8 9c-2.6-2.8-3.8-5.8-3.8-9S9.4 5.8 12 3z" />
        </svg>
      );
    case "offline":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common} width={18} height={18}>
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      );
    default:
      return null;
  }
}
