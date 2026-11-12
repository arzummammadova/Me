import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ServiceIcon } from "@/components/service-icon";
import { Link } from "@/i18n/navigation";
import { profile } from "@/data/profile";
import { techGroups } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("metaTitle"), description: t("intro") };
}

const experience = ["clomni", "bein", "alfin", "jobing"] as const;
const education = ["atu", "sdu", "code", "technest"] as const;

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const cv = await getTranslations("cv");
  const certificates = cv("certificateList").split("\n");
  return (
    <PageShell section="about">
      <section className="about-intro">
        <div className="about-bio">
          <p className="eyebrow">{t("bioEyebrow")}</p>
          <h2>{t("bioTitle")}</h2>
          <p>{t("bio1")}</p>
          <p>{t("bio2")}</p>
          <p>{t("bio3")}</p>
        </div>
        <aside className="about-card reveal">
          <dl className="about-facts">
            <div>
              <dt>{t("factRole")}</dt>
              <dd>{cv("role")}</dd>
            </div>
            <div>
              <dt>{t("factEmail")}</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>{cv("languages")}</dt>
              <dd>{cv("languageList")}</dd>
            </div>
          </dl>
          <Link className="pill-button dark about-card-cta" href="/contact">
            {t("cta")}
            <ServiceIcon name="arrow" />
          </Link>
        </aside>
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div className="section-head">
          <p className="eyebrow">{t("stackEyebrow")}</p>
          <h2 id="stack-title">{t("stackTitle")}</h2>
        </div>
        <div className="stack-groups">
          {techGroups.map((group) => (
            <section
              key={group.id}
              className={"stack-group stack-group-" + group.id}
              aria-labelledby={"stack-" + group.id}
            >
              <h3 id={"stack-" + group.id}>{t(`groups.${group.id}`)}</h3>
              <ul className="stack-grid">
                {group.items.map((tech, i) => (
                  <li
                    key={tech.name}
                    className="stack-item reveal"
                    style={{ "--i": i % 8 } as React.CSSProperties}
                  >
                    <span className="stack-icon" aria-hidden="true">
                      {tech.icon ? (
                        <Image src={`/assets/tech/${tech.icon}`} alt="" width={34} height={34} />
                      ) : (
                        <span className="stack-mono">
                          {tech.name.replace(/[^A-Za-z]/g, "").slice(0, 2)}
                        </span>
                      )}
                    </span>
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="journey-title">
        <div className="section-head">
          <p className="eyebrow">{t("journeyEyebrow")}</p>
          <h2 id="journey-title">{t("journeyTitle")}</h2>
        </div>
        <div className="timeline-columns">
          <div>
            <h3>{cv("experience")}</h3>
            <ol className="timeline">
              {experience.map((key) => (
                <li key={key}>
                  <span className="timeline-date">{cv(`${key}Date`)}</span>
                  <h4>{cv(`${key}Name`)}</h4>
                  <p>{cv(`${key}Role`)}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3>{cv("education")}</h3>
            <ol className="timeline">
              {education.map((key) => (
                <li key={key}>
                  <span className="timeline-date">{cv(`${key}Date`)}</span>
                  <h4>{cv(`${key}Name`)}</h4>
                  <p>{cv(`${key}Degree`)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="certificates">
          <h3>{cv("certificates")}</h3>
          <ul>
            {certificates.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-panel reveal" aria-labelledby="about-cta">
        <div>
          <h2 id="about-cta">{t("ctaTitle")}</h2>
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
