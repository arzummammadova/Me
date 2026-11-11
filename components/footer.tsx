"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { profile } from "@/data/profile";
export function Footer() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-name">
        ARZU MAMMADOVA<span>{t("role")}</span>
      </Link>
      <nav aria-label={t("navigation")}>
        {[
          ["/why-me", "why"],
          ["/blog", "blog"],
          ["/contact", "contact"],
          ["/cv", "cv"],
        ].map(([href, label]) => (
          <Link href={href} key={href}>
            {t(label)}
          </Link>
        ))}
      </nav>
      <div className="socials">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
