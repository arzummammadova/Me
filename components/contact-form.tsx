"use client";
import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
export function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const t = useTranslations("contact");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = t("nameError");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t("emailError");
    if (message.length < 20) next.message = t("messageError");
    setErrors(next);
    setReady(false);
    if (Object.keys(next).length) return;
    const body = `${t("name")}: ${name}\n${t("email")}: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(t("subject", { name }))}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        {["name", "email"].map((key) => (
          <div className="field" key={key}>
            <label htmlFor={key}>
              {t(key)} <span>*</span>
            </label>
            <input
              id={key}
              name={key}
              type={key === "email" ? "email" : "text"}
              autoComplete={key}
              maxLength={key === "email" ? 254 : 100}
              required
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
              placeholder={t(`${key}Placeholder`)}
            />
            {errors[key] && (
              <p role="alert" id={`${key}-error`} className="field-error">
                {errors[key]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor="message">
          {t("message")} <span>*</span>
        </label>
        <textarea
              defaultValue={initialMessage}
          id="message"
          name="message"
          rows={6}
          maxLength={5000}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder={t("messagePlaceholder")}
        />
        {errors.message && (
          <p role="alert" id="message-error" className="field-error">
            {errors.message}
          </p>
        )}
      </div>
      <p className="form-note">{t("formNote")}</p>
      <button type="submit" className="pill-button dark">
        {t("send")}
        <ArrowUpRight size={18} />
      </button>
      {ready && (
        <p role="status" className="form-status">
          {t("ready")}
        </p>
      )}
    </form>
  );
}
