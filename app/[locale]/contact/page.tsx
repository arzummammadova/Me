import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { ContactFormWithTopic } from "@/components/contact-form-topic";
import { ChannelIcon } from "@/components/brand-icons";
import { profile, socials } from "@/data/profile";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  return (
    <PageShell section="contact">
      <div className="contact-grid">
        <aside className="contact-details">
          <p>{t("aside")}</p>
          <ul className="contact-channels">
            <li>
              <a href={`mailto:${profile.email}`}>
                <span className="channel-icon"><ChannelIcon name="email" /></span>
                <span>{profile.email}</span>
              </a>
            </li>
            <li>
              <a href="tel:+994555140199">
                <span className="channel-icon"><ChannelIcon name="phone" /></span>
                <span>{profile.phone}</span>
              </a>
            </li>
            <li>
              <span className="channel-static">
                <span className="channel-icon"><ChannelIcon name="location" /></span>
                <span>{t("location")}</span>
              </span>
            </li>
          </ul>
          <p className="socials-label">{t("socialsLabel")}</p>
          <ul className="contact-social-grid">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"social-chip social-" + s.id}
                  aria-label={`${s.label}: ${s.handle}`}
                >
                  <span className="channel-icon"><ChannelIcon name={s.id} /></span>
                  <span className="social-text">
                    <strong>{s.label}</strong>
                    <span>{s.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <Suspense fallback={<ContactForm />}>
          <ContactFormWithTopic />
        </Suspense>
      </div>
    </PageShell>
  );
}
