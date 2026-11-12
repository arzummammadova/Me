import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ServiceIcon } from "@/components/service-icon";

const needs = [
  { id: "website", icon: "code" },
  { id: "design", icon: "uiux" },
  { id: "video", icon: "aivideo" },
  { id: "seo", icon: "seo" },
] as const;

export async function NeedPicker() {
  const t = await getTranslations("needPicker");
  return (
    <section className="need-picker reveal" aria-labelledby="need-picker-title">
      <div className="need-picker-head">
        <h2 id="need-picker-title">{t("title")}</h2>
        <p>{t("text")}</p>
      </div>
      <ul className="need-options">
        {needs.map((n) => (
          <li key={n.id}>
            <Link href={`/contact?topic=${n.id}`} className="need-option">
              <span className="service-icon small">
                <ServiceIcon name={n.icon} size={22} />
              </span>
              <span className="need-copy">
                <strong>{t(`options.${n.id}.title`)}</strong>
                <span>{t(`options.${n.id}.text`)}</span>
              </span>
              <ServiceIcon name="arrowRight" size={18} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
