"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export const dockLinks = [
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/services", key: "services" },
] as const;

// Frosted floating bar shown on subpages (not on home, where the slides own the bottom edge).
export function FloatingDock() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/") return null;
  const goBack = () => {
    const sameOrigin =
      typeof document !== "undefined" &&
      document.referrer.startsWith(window.location.origin);
    if (sameOrigin && window.history.length > 1) router.back();
    else router.push("/");
  };
  return (
    <nav className="floating-dock" aria-label={t("dock")}>
      <button type="button" className="dock-back" onClick={goBack} aria-label={t("back")}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </svg>
      </button>
      <ul className="dock-links">
        {dockLinks.map((link) => {
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <li key={link.href}>
              <Link href={link.href} aria-current={active ? "page" : undefined}>
                {t(link.key)}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link className="dock-cta" href="/contact?topic=website">
        <span className="dock-avatar" aria-hidden="true">
          <Image src="/assets/mascot.png" alt="" width={287} height={272} sizes="32px" />
        </span>
        <span className="dock-cta-label">{t("orderSite")}</span>
      </Link>
    </nav>
  );
}
