"use client";
import { useRef, useLayoutEffect } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { Asset } from "@/components/asset";
import { projects } from "@/data/profile";
import { ServiceIcon } from "@/components/service-icon";

export function Showcase({
  index,
  onNext,
}: {
  index: number;
  onNext: () => void;
}) {
  const t = useTranslations("showcase");
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const first = useRef(true);
  const project = projects[index];
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const context = gsap.context(() => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      timeline.current = gsap.timeline().fromTo(
        ".changing",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: reduced ? 0 : 0.55,
          ease: "power2.out",
          stagger: reduced ? 0 : 0.045,
        },
      );
    }, root);
    return () => context.revert();
  }, [index]);
  useLayoutEffect(
    () => () => {
      timeline.current?.kill();
    },
    [],
  );
  return (
    <section
      ref={root}
      id="work"
      className={"showcase-scene state-" + project.id}
      aria-label={t("title")}
    >
      <div className="project-name changing" aria-hidden="true">
        {project.name}
      </div>
      <div className="laptop changing">
        <Asset
          key={project.id}
          name={"laptop-" + project.id + ".png"}
          className="macbook"
          alt={t(project.id + "Alt")}
          sizes="85vw"
        />
      </div>
      <Asset
        name={project.left}
        className={"project-left " + project.id + " changing"}
        sizes="27vw"
      />
      <Asset
        name={project.right}
        className={"project-right " + project.id + " changing"}
        sizes="15vw"
      />
      <div className="reader-cluster">
        <div className="reader-wrap changing">
          <Asset name="reader.png" className="reader" sizes="40vw" />
          <div className="book-copy">
            <h2>{project.name}</h2>
            <p>{t(project.id + "Tagline")}</p>
          </div>
        </div>
        <div className="showcase-controls">
          <button className="pill-button next-pill" onClick={onNext}>
            {t("next")}
            <ServiceIcon name="arrowRight" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
