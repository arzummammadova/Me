type IconProps = { name: string; size?: number };

const paths: Record<string, React.ReactNode> = {
  // Next.js / React web apps: browser window with code brackets
  code: (
    <>
      <rect x="2.75" y="4" width="18.5" height="16" rx="3" className="duo" />
      <rect x="2.75" y="4" width="18.5" height="16" rx="3" />
      <path d="M2.75 8.5h18.5" />
      <path d="M9.5 12l-2.25 2.25L9.5 16.5M14.5 12l2.25 2.25-2.25 2.25" />
    </>
  ),
  // Figma -> pixel-perfect UI: frame with alignment guides
  pen: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" className="duo" />
      <path d="M6 2.75v18.5M18 2.75v18.5M2.75 6h18.5M2.75 18h18.5" strokeDasharray="0" opacity=".45" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 14.5l4-5" />
    </>
  ),
  // animated landing pages: play + motion lines
  spark: (
    <>
      <circle cx="14" cy="12" r="7.25" className="duo" />
      <circle cx="14" cy="12" r="7.25" />
      <path d="M12.25 9.25v5.5L16.75 12l-4.5-2.75z" fill="currentColor" stroke="none" />
      <path d="M2.75 8.5h2.5M1.75 12h3.5M2.75 15.5h2.5" />
    </>
  ),
  // dashboards: panel with bars and a sidebar
  grid: (
    <>
      <rect x="2.75" y="3.75" width="18.5" height="16.5" rx="3" className="duo" />
      <rect x="2.75" y="3.75" width="18.5" height="16.5" rx="3" />
      <path d="M8.25 3.75v16.5" />
      <path d="M12 16.5v-3M15 16.5v-6M18 16.5v-4.5" />
    </>
  ),
  // performance: speed gauge
  gauge: (
    <>
      <path d="M3.5 17.5a8.75 8.75 0 1117 0z" className="duo" />
      <path d="M3.5 17.5a8.75 8.75 0 1117 0" />
      <path d="M12 15l4.25-5" />
      <circle cx="12" cy="15" r="1.6" fill="currentColor" />
      <path d="M6.5 13.25h1M16.5 13.25h1M12 7.75v1" />
    </>
  ),
  // accessibility: person in a circle
  eye: (
    <>
      <circle cx="12" cy="12" r="9.25" className="duo" />
      <circle cx="12" cy="12" r="9.25" />
      <circle cx="12" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M7.5 10l4.5 1 4.5-1M12 11v3.25M9.75 17.5L12 14.25l2.25 3.25" />
    </>
  ),
  // i18n: globe with language bubble
  globe: (
    <>
      <circle cx="11" cy="12" r="8.25" className="duo" />
      <circle cx="11" cy="12" r="8.25" />
      <path d="M2.75 12h16.5M11 3.75c2.25 2.4 3.3 5.15 3.3 8.25S13.25 17.85 11 20.25C8.75 17.85 7.7 15.1 7.7 12S8.75 6.15 11 3.75z" />
    </>
  ),
  // PWA / offline: phone with download arrow
  offline: (
    <>
      <rect x="6" y="2.75" width="12" height="18.5" rx="3" className="duo" />
      <rect x="6" y="2.75" width="12" height="18.5" rx="3" />
      <path d="M12 7.5v6.25M9.5 11.5L12 14l2.5-2.5M10.5 18h3" />
    </>
  ),
  // SEO: magnifier with rising chart
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="7" className="duo" />
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="M15.5 15.5l5.25 5.25" />
      <path d="M7 12.5l2.25-2.25 1.75 1.75L14 9" />
    </>
  ),
  // UI/UX design in Figma: bezier pen tool with nodes
  uiux: (
    <>
      <path d="M12 3.25l5.5 9.25L12 20.75 6.5 12.5z" className="duo" />
      <path d="M12 3.25l5.5 9.25L12 20.75 6.5 12.5z" />
      <path d="M12 3.25v8.5" />
      <circle cx="12" cy="13" r="1.6" fill="currentColor" stroke="none" />
      <path d="M2.75 20.75h4.5M16.75 20.75h4.5" />
    </>
  ),
  // AI video generation: video frame with sparkle
  aivideo: (
    <>
      <rect x="2.75" y="5.5" width="13.5" height="13" rx="3" className="duo" />
      <rect x="2.75" y="5.5" width="13.5" height="13" rx="3" />
      <path d="M16.25 10.25l5-2.75v9l-5-2.75" />
      <path d="M9.5 8.75l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="currentColor" stroke="none" />
    </>
  ),
  arrow: <path d="M7 17L17 7M8.5 7H17v8.5" />,
  arrowRight: <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
};

export function ServiceIcon({ name, size }: IconProps) {
  const s = size ?? (name.startsWith("arrow") ? 18 : 26);
  return (
    <svg
      className="svc-icon"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
