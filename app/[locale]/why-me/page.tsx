import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { Asset } from "@/components/asset";
import { skills } from "@/data/profile";
import { Link } from "@/i18n/navigation";
export default async function WhyMe({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("why");
  return (
    <PageShell section="why">
      <div className="why-grid">
        <div className="why-portrait">
          <Asset name="portrait.png" alt={t("portraitAlt")} sizes="45vw" />
        </div>
        <div className="principles">
          {["detail", "product", "team"].map((key, i) => (
            <article key={key}>
              <span className="number">0{i + 1}</span>
              <div>
                <h2>{t(`${key}Title`)}</h2>
                <p>{t(`${key}Text`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <section className="skills-section">
        <h2>{t("skillsTitle")}</h2>
        <div className="skill-tags">
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <p>{t("learning")}</p>
      </section>
      <div className="inline-cta">
        <h2>{t("cta")}</h2>
        <Link className="pill-button dark" href="/contact">
          {t("contact")} ↗
        </Link>
      </div>
    </PageShell>
  );
}
