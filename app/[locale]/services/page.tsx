import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ServiceIcon } from "@/components/service-icon";
import { NeedPicker } from "@/components/need-picker";
import { ServicesBrowser } from "@/components/services-browser";
import { Link } from "@/i18n/navigation";
import { services, serviceGroups, processSteps } from "@/data/site";

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
        <h2 id="services-list-title" className="sr-only">
          {t("listTitle")}
        </h2>
        <ServicesBrowser
          groups={serviceGroups}
          items={services.map((s) => ({
            id: s.id,
            group: s.group,
            icon: s.icon,
            title: t(`items.${s.id}.title`),
            subtitle: t(`items.${s.id}.sub`),
            text: t(`items.${s.id}.text`),
          }))}
          labels={{
            filters: {
              all: t("filters.all"),
              dev: t("filters.dev"),
              design: t("filters.design"),
              growth: t("filters.growth"),
            },
            grid: t("view.grid"),
            list: t("view.list"),
            filterLabel: t("filters.label"),
            viewLabel: t("view.label"),
          }}
        />
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-head">
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
      <NeedPicker />
    </PageShell>
  );
}
