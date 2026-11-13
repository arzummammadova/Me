import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ServiceIcon } from "@/components/service-icon";
import { NeedPicker } from "@/components/need-picker";
import { SkyClouds } from "@/components/sky-clouds";
import { Link } from "@/i18n/navigation";
import { portfolioProjects, projectSlug } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  return { title: t("metaTitle"), description: t("intro") };
}

function projectInitials(name: string) {
  return name
    .split(/[\s.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projectsPage");
  const cv = await getTranslations("cv");
  const description = (id: string) =>
    id === "ingri" || id === "vribbe" ? cv(`${id}Description`) : t(`items.${id}`);
  return (
    <>
      <SkyClouds />
      <PageShell section="projectsPage">
        <ul className="project-grid unified">
          {portfolioProjects.map((p, i) => (
            <li
              key={p.id}
              className={"project-card reveal" + (p.featured ? " is-featured" : "")}
              style={{ "--i": i % 8 } as React.CSSProperties}
            >
              <Link className="project-card-link" href={`/projects/${projectSlug(p.id)}`}>
                <div className={"project-media" + (p.image ? "" : " project-media-empty")}>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={t("imageAlt", { name: p.name })}
                      fill
                      sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw"
                    />
                  ) : (
                    <span className="project-monogram" aria-hidden="true">
                      {projectInitials(p.name)}
                    </span>
                  )}
                </div>
                <div className="project-body">
                  {t.has(`roles.${p.id}`) ? <p className="eyebrow">{t(`roles.${p.id}`)}</p> : null}
                  <h2>{p.name}</h2>
                  <p>{description(p.id)}</p>
                  {p.tech.length ? (
                    <ul className="tag-row">
                      {p.tech.slice(0, 5).map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                      {p.tech.length > 5 ? <li>+{p.tech.length - 5}</li> : null}
                    </ul>
                  ) : null}
                  <span className="project-more">
                    {t("details")}
                    <ServiceIcon name="arrowRight" size={18} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className="cta-panel reveal" aria-labelledby="projects-cta">
          <div>
            <h2 id="projects-cta">{t("ctaTitle")}</h2>
            <p>{t("ctaText")}</p>
          </div>
          <Link className="pill-button cta-button" href="/contact">
            {t("cta")}
            <ServiceIcon name="arrow" />
          </Link>
        </section>
        <NeedPicker />
      </PageShell>
    </>
  );
}
