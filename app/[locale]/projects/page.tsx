import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ServiceIcon } from "@/components/service-icon";
import { NeedPicker } from "@/components/need-picker";
import { ProjectsBrowser } from "@/components/projects-browser";
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
      <PageShell section="projectsPage">
        <ProjectsBrowser
          items={portfolioProjects.map((p) => ({
            slug: projectSlug(p.id),
            name: p.name,
            image: p.image,
            alt: t("imageAlt", { name: p.name }),
            subtitle: t(`subs.${p.id}`),
            text: description(p.id),
          }))}
          labels={{
            newest: t("sort.newest"),
            oldest: t("sort.oldest"),
            grid: t("view.grid"),
            list: t("view.list"),
            sortLabel: t("sort.label"),
            viewLabel: t("view.label"),
            details: t("details"),
          }}
        />

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
