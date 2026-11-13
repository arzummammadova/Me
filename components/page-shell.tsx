import { useTranslations } from "next-intl";
import { SkyClouds } from "@/components/sky-clouds";

export function PageShell({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) {
  const t = useTranslations(section);
  const intro = t.has("intro") ? t("intro") : "";
  return (
    <main id="main" className={"content-page " + section + "-page"}>
      <section className="page-hero">
        <SkyClouds />
        <div className="page-heading">
          <h1>{t("title")}</h1>
          {intro ? <p className="page-intro">{intro}</p> : null}
        </div>
      </section>
      <div className="page-body">{children}</div>
    </main>
  );
}
