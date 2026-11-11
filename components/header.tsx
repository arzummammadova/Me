"use client";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

function Flag({ locale }: { locale: string }) {
  if (locale === "az") {
    return (
      <svg viewBox="0 0 36 24" className="lang-flag" aria-hidden="true">
        <rect width="36" height="8" fill="#00AFCA" />
        <rect y="8" width="36" height="8" fill="#EF3340" />
        <rect y="16" width="36" height="8" fill="#509E2F" />
        <circle cx="16.2" cy="12" r="3.15" fill="#fff" />
        <circle cx="17.35" cy="12" r="2.55" fill="#EF3340" />
        <polygon
          fill="#fff"
          points="21.4,12 22.05,13.35 20.55,12.55 20.55,14.2 19.8,12.8 18.4,13.55 19.4,12.2 18.05,11.55 19.55,11.45 19.4,9.9 20.35,11.2 21.7,10.05 21.1,11.45 22.55,11.7"
        />
      </svg>
    );
  }
  if (locale === "en") {
    return (
      <svg viewBox="0 0 36 24" className="lang-flag" aria-hidden="true">
        <rect width="36" height="24" fill="#012169" />
        <path d="M0,0 L36,24 M36,0 L0,24" stroke="#fff" strokeWidth="5" />
        <path d="M0,0 L36,24 M36,0 L0,24" stroke="#C8102E" strokeWidth="2" />
        <path d="M18,0 V24 M0,12 H36" stroke="#fff" strokeWidth="8" />
        <path d="M18,0 V24 M0,12 H36" stroke="#C8102E" strokeWidth="5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 36 24" className="lang-flag" aria-hidden="true">
      <rect width="36" height="8" fill="#fff" />
      <rect y="8" width="36" height="8" fill="#0039A6" />
      <rect y="16" width="36" height="8" fill="#D52B1E" />
    </svg>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const home = pathname === "/";
  return (
    <>
      <a className="skip-link" href="#main">
        {t("skip")}
      </a>
      <header className={"site-header " + (home ? "home-header" : "page-header")}>
        {!home && (
          <Link href="/" className="home-mark" aria-label={t("home")}>
            <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
              <circle
                cx="16"
                cy="16"
                r="11.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="16" cy="16" r="5" fill="currentColor" />
            </svg>
          </Link>
        )}
        <nav aria-label={t("navigation")} className="header-nav">
          <Link
            className="header-block"
            href="/blog"
            aria-current={pathname.startsWith("/blog") ? "page" : undefined}
          >
            {t("blog")}
          </Link>
          <Link
            className="header-block"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            {t("contact")}
          </Link>
          <Link
            className="header-block"
            href="/cv"
            aria-current={pathname === "/cv" ? "page" : undefined}
          >
            {t("cv")}
          </Link>
        </nav>
        <nav className="language-switch" aria-label={t("language")}>
          {routing.locales.map((l) => (
            <Link
              key={l}
              href={pathname}
              locale={l}
              lang={l}
              hrefLang={l}
              aria-current={locale === l ? "true" : undefined}
              aria-label={t(l)}
            >
              <Flag locale={l} />
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}