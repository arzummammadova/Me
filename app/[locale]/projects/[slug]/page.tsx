import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SkyClouds } from "@/components/sky-clouds";
import { ServiceIcon } from "@/components/service-icon";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { portfolioProjects, projectSlug, findProject, type ShowcaseBlock } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    portfolioProjects.map((p) => ({ locale, slug: projectSlug(p.id) })),
  );
}

type Params = Promise<{ locale: string; slug: string }>;

function embedUrl(url: string) {
  const drive = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  return null;
}

async function describe(locale: string, id: string) {
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  const cv = await getTranslations({ locale, namespace: "cv" });
  return id === "ingri" || id === "vribbe" ? cv(`${id}Description`) : t(`items.${id}`);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return { title: project.name, description: await describe(locale, project.id) };
}

const sizes: Record<ShowcaseBlock["layout"], string> = {
  full: "(max-width: 900px) 92vw, 1200px",
  pair: "(max-width: 700px) 92vw, 600px",
  grid: "(max-width: 700px) 92vw, 420px",
};

export default async function ProjectDetails({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = findProject(slug);
  if (!project) notFound();
  const t = await getTranslations("projectsPage");
  const description = await describe(locale, project.id);
  const extra = t.has(`extra.${project.id}`) ? t(`extra.${project.id}`) : "";
  // FoodLens uses its wide gallery artwork in the detail view; the card cover stays list-only.
  const hero = project.id === "foodlens" ? undefined : project.image;
  const rest = (project.gallery ?? []).filter((src) => src !== hero);
  const blocks: ShowcaseBlock[] =
    project.showcase ??
    (rest.length === 1
      ? [{ layout: "full", tone: "sky", images: rest }]
      : rest.length
        ? [{ layout: "pair", tone: "sky", images: rest.slice(0, 2) }]
        : []);
  const videos = project.links.filter((l) => l.kind === "video");
  const external = project.links.filter((l) => l.kind !== "video");
  const shots = [...(hero ? [hero] : []), ...blocks.flatMap((b) => b.images)];
  const alt = (src: string) =>
    t("galleryAlt", { name: project.name, n: shots.indexOf(src) + 1 });

  return (
    <>
      <main id="main" className="content-page projectsPage-page project-detail-page">
        <section className="page-hero">
          <SkyClouds />
            <div className="page-heading detail-heading">
              <Link className="back-link" href="/projects">
                <ServiceIcon name="arrowRight" size={18} />
                {t("back")}
              </Link>
              <h1>{project.name}</h1>
              {t.has(`roles.${project.id}`) ? (
                <p className="page-intro">{t(`roles.${project.id}`)}</p>
              ) : null}
            </div>
        </section>

        <div className="page-body detail-body">
          {hero ? (
            <figure className="detail-hero">
              <Image src={hero} alt={alt(hero)} fill priority sizes="(max-width: 900px) 92vw, 1300px" />
            </figure>
          ) : null}

          <section className="detail-intro" aria-labelledby="detail-about-title">
            <div className="detail-intro-side">
              <h2 id="detail-about-title">{t("aboutTitle")}</h2>
              {external.length ? (
                <ul className="detail-links">
                  {external.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer">
                        {l.label ?? t(`links.${l.kind}`)}
                        <ServiceIcon name="arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="detail-intro-text">
              <p className="detail-lead">{description}</p>
              {extra ? <p>{extra}</p> : null}
            </div>
          </section>

          {blocks.map((block, bi) => (
            <section
              key={bi}
              className={`showcase-block layout-${block.layout} tone-${block.tone ?? "sky"}`}
              aria-label={t("galleryTitle")}
            >
              {block.images.map((src) => (
                <figure key={src} className="showcase-shot">
                  <Image
                    src={src}
                    alt={alt(src)}
                    width={1600}
                    height={1200}
                    sizes={sizes[block.layout]}
                  />
                </figure>
              ))}
            </section>
          ))}

          {videos.length ? (
            <section className="detail-videos" aria-labelledby="detail-video-title">
              <h2 id="detail-video-title">{t("videoTitle")}</h2>
              <div className="video-list">
                {videos.map((v, i) => {
                  const src = embedUrl(v.url);
                  return (
                    <div key={v.url} className="video-frame">
                      {src ? (
                        <iframe
                          src={src}
                          title={`${project.name} — ${t("videoTitle")} ${i + 1}`}
                          loading="lazy"
                          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      ) : /\.(mp4|webm)$/i.test(v.url) ? (
                        <video src={v.url} controls preload="metadata" playsInline />
                      ) : (
                        <a href={v.url} target="_blank" rel="noopener noreferrer">
                          {t("links.video")}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          <div className="detail-footer">
            <Link className="back-link dark" href="/projects">
              <ServiceIcon name="arrowRight" size={18} />
              {t("back")}
            </Link>
            <Link className="pill-button cta-button" href="/contact">
              {t("cta")}
              <ServiceIcon name="arrow" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
