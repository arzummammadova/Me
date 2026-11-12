"use client";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ContactForm } from "./contact-form";

const topics = ["website", "design", "video", "seo"] as const;

export function ContactFormWithTopic() {
  const params = useSearchParams();
  const t = useTranslations("needPicker");
  const topic = params.get("topic");
  const known = topics.find((x) => x === topic);
  const message = known ? t(`prefill.${known}`) : "";
  return <ContactForm key={known ?? "none"} initialMessage={message} />;
}
