import Image from "next/image";
import { useTranslations } from "next-intl";
import { PromptBlock } from "./prompt-block";
import prompts from "@/data/portfolio-prompts.json";

export function PortfolioStory() {
  const t = useTranslations("blog.portfolio");
  return <>
    <figure className="story-cover"><Image src="/assets/portfolio-reference.png" alt={t("referenceAlt")} width={1440} height={906} priority sizes="(max-width: 768px) 86vw, 780px" /><figcaption>{t("referenceCaption")}</figcaption></figure>
    <nav className="story-chapters" aria-label={t("chapters")}><a href="#idea">01 / {t("idea")}</a><a href="#video">02 / {t("video")}</a><a href="#frontend">03 / {t("frontend")}</a></nav>
    <section id="idea"><p className="eyebrow">01 / {t("idea")}</p><h2>{t("heading1")}</h2><p>{t("body1")}</p><div className="story-stack">{["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "next-intl"].map(item=><span key={item}>{item}</span>)}</div></section>
    <section id="video"><p className="eyebrow">02 / {t("video")}</p><h2>{t("heading2")}</h2><p>{t("body2")}</p>
      <figure className="story-video"><video controls playsInline preload="none" poster="/assets/portfolio-reference.png" aria-label={t("videoAlt")}><source src="/media/portfolio-reference.mp4" type="video/mp4" /><a href="/media/portfolio-reference.mp4">{t("videoFallback")}</a></video><figcaption>{t("videoCaption")}</figcaption></figure>
      <ol className="story-timeline">{[1,2,3].map((n)=><li key={n}><span>{t(`time${n}`)}</span><div><h3>{t(`scene${n}`)}</h3><p>{t(`scene${n}Text`)}</p></div></li>)}</ol>
      <PromptBlock kind="video" prompt={prompts.video}/>
    </section>
    <section id="frontend"><p className="eyebrow">03 / {t("frontend")}</p><h2>{t("heading3")}</h2><p>{t("body3")}</p><PromptBlock kind="frontend" prompt={prompts.frontend}/></section>
    <aside className="story-takeaway"><p className="eyebrow">{t("takeawayLabel")}</p><h2>{t("takeawayTitle")}</h2><p>{t("takeawayText")}</p></aside>
  </>;
}
