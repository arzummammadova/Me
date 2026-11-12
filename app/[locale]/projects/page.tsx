import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ServiceIcon } from "@/components/service-icon";
import { Link } from "@/i18n/navigation";
import { portfolioProjects } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  return { title: t("metaTitle"), description: t("intro") };
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
  const featured = portfolioProjects.filter((p) => p.featured);
  const rest = portfolioProjects.filter((p) => !p.featured);
  const description = (id: string) =>
    id === "ingri" || id === "vribbe" ? cv(`${id}Description`) : t(`items.${id}`);
  const links = (p: (typeof portfolioProjects)[number]) =>
    p.links.length ? (
      <div className="project-links">
        {p.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name}: ${t(`links.${l.kind}`)}`}
          >
            {t(`links.${l.kind}`)}
            <ServiceIcon name="arrow" />
          </a>
        ))}
      </div>
    ) : (
      <p className="project-note">{t("noPublicLink")}</p>
    );
  return (
    <PageShell section="projectsPage">
      <section aria-labelledby="featured-title">
        <div className="section-head">
          <p className="eyebrow">{t("featuredEyebrow")}</p>
          <h2 id="featured-title">{t("featuredTitle")}</h2>
        </div>
        <div className="featured-projects">
          {featured.map((p, i) => (
            <article
              key={p.id}
              className={"feature-project reveal state-" + p.id}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="project-media">
                <Image
                  src={p.image}
                  alt={t("imageAlt", { name: p.name })}
                  fill
                  sizes="(max-width: 900px) 92vw, 45vw"
                />
              </div>
              <div className="project-body">
                <p className="eyebrow">{t(`roles.${p.id}`)}</p>
                <h3>{p.name}</h3>
                <p>{description(p.id)}</p>
                <ul className="tag-row">
                  {p.tech.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {links(p)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="more-projects" aria-labelledby="more-title">
        <div className="section-head">
          <p className="eyebrow">{t("moreEyebrow")}</p>
          <h2 id="more-title">{t("moreTitle")}</h2>
        </div>
        <ul className="project-grid">
          {rest.map((p, i) => (
            <li
              key={p.id}
              className="project-card reveal"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="project-media">
                <Image
                  src={p.image}
                  alt={t("imageAlt", { name: p.name })}
                  fill
                  sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw"
                />
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{description(p.id)}</p>
                <ul className="tag-row">
                  {p.tech.slice(0, 6).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                  {p.tech.length > 6 ? <li>+{p.tech.length - 6}</li> : null}
                </ul>
                {links(p)}
              </div>
            </li>
          ))}
        </ul>
      </section>

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
    </PageShell>
  );
}
