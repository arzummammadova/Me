import { useTranslations } from "next-intl";
export function PageShell({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) {
  const t = useTranslations(section);
  return (
    <main id="main" className={"content-page " + section + "-page"}>
      <div className="page-heading">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h1>{t("title")}</h1>
        <p className="page-intro">{t("intro")}</p>
      </div>
      <div className="page-body">{children}</div>
    </main>
  );
}
