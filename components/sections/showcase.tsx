"use client";
import { useRef, useLayoutEffect } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { Asset } from "@/components/asset";
import { projects } from "@/data/profile";
import { ServiceIcon } from "@/components/service-icon";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";

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
  const isLast = index === projects.length - 1;
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
        <div className="laptop-screen">
          <Asset
            key={project.id}
            name={project.screen}
            className="screen-image"
            alt={t(project.id + "Alt")}
            sizes="54vw"
          />
        </div>
        <Asset
          name="macbook.png"
          className="macbook"
          alt=""
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
      <motion.div
        className="reader-cluster"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="reader-wrap changing">
          <Asset name="reader.png" className="reader" sizes="40vw" />
          <div className="book-copy">
            <h2>{project.name}</h2>
            <p>{t(project.id + "Tagline")}</p>
          </div>
        </div>
        <div className="showcase-controls">
          {isLast ? (
            <Link className="pill-button next-pill" href="/projects">
              {t("viewAll")}
              <ServiceIcon name="arrowRight" size={18} />
            </Link>
          ) : (
            <button type="button" className="pill-button next-pill" onClick={onNext}>
              {t("next")}
              <ServiceIcon name="arrowRight" size={18} />
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
