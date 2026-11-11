"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <main id="main" className="content-page">
      <p className="eyebrow">404</p>
      <h1>{t("title")}</h1>
      <Link href="/" className="pill-button dark">
        {t("home")} ↗
      </Link>
    </main>
  );
}
