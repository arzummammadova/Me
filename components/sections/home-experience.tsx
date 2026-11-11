"use client";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Asset } from "@/components/asset";
import { Showcase } from "./showcase";
import {
  useHomeAnimation,
  type ShowcaseScrollApi,
} from "@/hooks/use-home-animation";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/profile";
export function HomeExperience() {
  const root = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const scrollApi = useRef<ShowcaseScrollApi | null>(null);
  const t = useTranslations("home");
  useHomeAnimation(root, setIndex, scrollApi);
  function goToProject(next: number) {
    if (scrollApi.current) scrollApi.current.goTo(next);
    else setIndex(next);
  }
  return (
    <div ref={root} className="home-experience">
      <div className="scroll-stage">
        <section className="hero-scene" aria-label={t("intro")}>
          <div className="hero-name" aria-hidden="true">
            ARZU MAMMADOVA
          </div>
          <h1 className="sr-only">{t("title")}</h1>
          <Asset
            name="folder-pink.png"
            className="hero-pink floating"
            priority
            sizes="12vw"
          />
          <Asset
            name="folder-blue.png"
            className="hero-blue floating"
            priority
            sizes="16vw"
          />
          <Asset
            name="folder-blue.png"
            className="hero-blue-right floating"
            priority
            sizes="16vw"
          />
          <Link href="/why-me" className="card-link" aria-label={t("cardLink")}>
            <Asset
              name="developer-card.png"
              className="developer-card"
              alt={t("cardAlt")}
              priority
              sizes="25vw"
            />
          </Link>
          <Asset
            name="portrait.png"
            className="hero-portrait"
            alt={t("portraitAlt")}
            priority
            sizes="(max-width: 640px) 95vw, 60vw"
          />
          <a
            href="#work"
            className="scroll-cue"
            onClick={(e) => {
              e.preventDefault();
              goToProject(0);
            }}
          >
            {t("scroll")} <span>↓</span>
          </a>
        </section>
        <Showcase
          index={index}
          onNext={() => goToProject(index === projects.length - 1 ? 0 : index + 1)}
        />
      </div>
    </div>
  );
}
