import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/profile";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
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
          <a href={`mailto:${profile.email}`}>
            <Mail size={19} />
            {profile.email}
          </a>
          <a href="tel:+994555140199">
            <Phone size={19} />
            {profile.phone}
          </a>
          <span>
            <MapPin size={19} />
            {t("location")}
          </span>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </aside>
        <ContactForm />
      </div>
    </PageShell>
  );
}
