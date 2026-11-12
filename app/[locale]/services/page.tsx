import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ServiceIcon } from "@/components/service-icon";
import { Link } from "@/i18n/navigation";
import { services, processSteps } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("metaTitle"), description: t("intro") };
}

export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  return (
    <PageShell section="services">
      <section className="services-section" aria-labelledby="services-list-title">
        <div className="section-head">
          <p className="eyebrow">{t("listEyebrow")}</p>
          <h2 id="services-list-title">{t("listTitle")}</h2>
        </div>
        <ul className="service-grid">
          {services.map((s, i) => (
            <li
              key={s.id}
              className="service-card reveal"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{t(`items.${s.id}.title`)}</h3>
              <p>{t(`items.${s.id}.text`)}</p>
              <ul className="tag-row" aria-label={t("tagsLabel")}>
                {s.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-head">
          <p className="eyebrow">{t("processEyebrow")}</p>
          <h2 id="process-title">{t("processTitle")}</h2>
        </div>
        <ol className="process-steps">
          {processSteps.map((step, i) => (
            <li
              key={step}
              className="process-step reveal"
              style={{ "--i": i + 2 } as React.CSSProperties}
            >
              <span className="step-dot" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{t(`steps.${step}.title`)}</h3>
              <p>{t(`steps.${step}.text`)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta-panel reveal" aria-labelledby="services-cta">
        <div>
          <h2 id="services-cta">{t("ctaTitle")}</h2>
          <p>{t("ctaText")}</p>
        </div>
        <Link className="pill-button cta-button" href="/contact">
          {t("cta")}
          <ServiceIcon name="arrow" />
        </Link>
      </section>
    </PageShell>
  );
}
