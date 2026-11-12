// Phrases shown in the home mascot bubble. Each phrase can point to its own
// page later; for now every one opens the contact page.
export const mascotPhrases = [
  { key: "website", href: "/contact" },
  { key: "design", href: "/contact" },
  { key: "video", href: "/contact" },
  { key: "english", href: "/contact" },
  { key: "store", href: "/contact" },
  { key: "lessons", href: "/contact" },
] as const;

export const MASCOT_INTERVAL_MS = 2500;
