import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { articleIds } from "@/data/profile";
import { PortfolioStory } from "@/components/portfolio-story";
import { SkyClouds } from "@/components/sky-clouds";
export default async function Article({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (!articleIds.some((id) => id === slug)) notFound();
  const t = await getTranslations("blog");
  return (
    <main id="main" className="content-page article-page">
      <section className="page-hero">
        <SkyClouds />
        <div className="page-heading">
          <Link className="text-link" href="/blog">
            ← {t("back")}
          </Link>
          <p className="eyebrow">
          {t(`${slug}.category`)} · {t(slug === "portfolio" ? "portfolio.readTime" : "readTime")}
        </p>
          <h1>{t(`${slug}.title`)}</h1>
          <p className="article-lead">{t(`${slug}.excerpt`)}</p>
        </div>
      </section>
      <div className="page-body">
      <article>
        {slug === "portfolio" ? <PortfolioStory /> : [1, 2, 3].map((n) => (
          <section key={n}>
            <h2>{t(`${slug}.heading${n}`)}</h2>
            <p>{t(`${slug}.body${n}`)}</p>
          </section>
        ))}
      </article>
      <Link className="pill-button dark" href="/contact">
        {t("discuss")} ↗
      </Link>
      </div>
    </main>
  );
}
