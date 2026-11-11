import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { profile, skills, projects } from "@/data/profile";
import { Download, ArrowUpRight } from "lucide-react";
export default async function CV({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cv");
  return (
    <PageShell section="cv">
      <a className="pill-button dark download-cv" href={profile.cv} download>
        <Download size={17} />
        {t("download")}
        <small>PDF</small>
      </a>
      <div className="resume-grid">
        <aside>
          <h2>{profile.name}</h2>
          <p>{t("role")}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href="tel:+994555140199">{profile.phone}</a>
          <p>{t("location")}</p>
          <h3>{t("skills")}</h3>
          <div className="skill-tags small">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <h3>{t("languages")}</h3>
          <p>{t("languageList")}</p>
        </aside>
        <div className="resume-main">
          <section>
            <h2>{t("experience")}</h2>
            {["clomni", "bein", "alfin", "jobing"].map((key) => (
              <article className="resume-entry" key={key}>
                <span>{t(`${key}Date`)}</span>
                <div>
                  <h3>{t(`${key}Name`)}</h3>
                  <p>{t(`${key}Role`)}</p>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h2>{t("education")}</h2>
            {["atu", "sdu", "code", "technest"].map((key) => (
              <article className="resume-entry" key={key}>
                <span>{t(`${key}Date`)}</span>
                <div>
                  <h3>{t(`${key}Name`)}</h3>
                  <p>{t(`${key}Degree`)}</p>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h2>{t("projects")}</h2>
            {projects.map((p) => (
              <article className="resume-project" key={p.id}>
                <a href={p.url} target="_blank" rel="noreferrer">
                  <h3>{p.name}</h3>
                  <ArrowUpRight size={18} />
                </a>
                <p>{t(`${p.id}Description`)}</p>
                <div className="skill-tags small">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </section>
          <section>
            <h2>{t("certificates")}</h2>
            <p>{t("certificateList")}</p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
