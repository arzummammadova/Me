import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { Link } from "@/i18n/navigation";
import { articleIds, mediumArticles } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function formatPostDate(iso: string, locale: string) {
  return new Intl.DateTimeFormat(
    locale === "az" ? "az-AZ" : locale,
    { day: "numeric", month: "short", year: "numeric" },
  ).format(new Date(iso + "T12:00:00"));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  return (
    <PageShell section="blog">
      <div className="article-list">
        {articleIds.map((id, i) => (
          <Link className={"article-card " + (id === "portfolio" ? "featured-article" : "")} href={"/blog/" + id} key={id}>
            <div className={"article-art art-" + (i - 1)} aria-hidden="true">
              {id === "portfolio" ? (
                <Image src="/assets/portfolio-reference.png" alt="" fill sizes="(max-width: 768px) 86vw, 55vw" />
              ) : null}
            </div>
            <div className="article-card-copy">
              <p className="eyebrow">
                {t(id + ".category")} · {t(id === "portfolio" ? "portfolio.readTime" : "readTime")}
              </p>
              <h2>{t(id + ".title")}</h2>
              <p>{t(id + ".excerpt")}</p>
              <span className="text-link">
                {t("read")}
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        ))}
        {mediumArticles.map((post) => (
          <a
            className="article-card"
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={"article-art " + (post.image ? "article-art-photo" : "art-medium")} aria-hidden="true">
              {post.image ? (
                <Image src={post.image} alt="" fill sizes="(max-width: 768px) 86vw, 30vw" />
              ) : (
                <span>Medium</span>
              )}
            </div>
            <div className="article-card-copy">
              <p className="eyebrow">
                {t("medium")} · {formatPostDate(post.date, locale)}
              </p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="text-link">
                {t("read")}
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
