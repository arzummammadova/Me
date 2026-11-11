"use client";
import { useLayoutEffect, type MutableRefObject, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export type ShowcaseScrollApi = {
  goTo: (index: number) => void;
};

export function useHomeAnimation(
  root: RefObject<HTMLDivElement | null>,
  setProjectIndex: (index: number) => void,
  apiRef: MutableRefObject<ShowcaseScrollApi | null>,
) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const indexRef = { current: 0 };
    media.add(
      {
        desktop: "(min-width: 769px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduce } = context.conditions!;
        const applyIndex = (next: number) => {
          if (next === indexRef.current) return;
          indexRef.current = next;
          setProjectIndex(next);
        };
        apiRef.current = {
          goTo(index) {
            setProjectIndex(index);
            indexRef.current = index;
          },
        };
        if (reduce) return;
        gsap.to(".card-link", {
          rotation: 1.15,
          duration: 3.8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          transformOrigin: "50% 0%",
        });
        gsap.utils
          .toArray<HTMLElement>(".hero-scene .floating")
          .forEach((el, i) =>
            gsap.to(el, {
              y: i % 2 ? -7 : 8,
              duration: 3 + i * 0.5,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            }),
          );
        const stage = root.current!.querySelector(".scroll-stage");
        const hero = root.current!.querySelector(".hero-scene") as HTMLElement;
        const work = root.current!.querySelector(
          ".showcase-scene",
        ) as HTMLElement;
        if (!desktop) {
          const st = ScrollTrigger.create({
            trigger: work,
            start: "top top",
            end: "+=90%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              applyIndex(self.progress > 0.45 ? 1 : 0);
            },
          });
          apiRef.current = {
            goTo(index) {
              const y = st.start + (st.end - st.start) * (index === 0 ? 0.12 : 0.88);
              window.scrollTo({ top: y, behavior: "smooth" });
            },
          };
          return () => {
            apiRef.current = null;
          };
        }
        let switchAt = 0.62;
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: "+=280%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const active = self.progress > 0.4;
              hero.inert = active;
              work.inert = !active;
              applyIndex(self.progress >= switchAt ? 1 : 0);
            },
          },
        });
        work.inert = true;
        timeline
          .to(
            ".hero-name",
            { scale: 1.16, yPercent: -10, opacity: 0, duration: 0.4, ease: "power1.in" },
            0.08,
          )
          .to(".card-link", { xPercent: -70, opacity: 0, duration: 0.4, ease: "power1.in" }, 0.12)
          .to(".hero-scene .floating", { opacity: 0, duration: 0.24 }, 0.16)
          .to(".scroll-cue", { opacity: 0, duration: 0.12 }, 0)
          .to(
            ".hero-portrait",
            {
              scale: 1.28,
              xPercent: 18,
              yPercent: 8,
              opacity: 0,
              duration: 0.48,
              ease: "power1.inOut",
            },
            0.2,
          )
          .fromTo(
            ".showcase-scene",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.28, ease: "power1.out" },
            0.28,
          )
          .fromTo(
            ".laptop",
            {
              xPercent: 8,
              yPercent: 22,
              scale: 0.62,
              rotationY: -38,
              rotationZ: -4,
            },
            {
              xPercent: 0,
              yPercent: 0,
              scale: 1,
              rotationY: 0,
              rotationZ: 0,
              duration: 0.58,
              ease: "power2.inOut",
            },
            0.28,
          )
          .fromTo(
            ".project-left, .project-right, .reader-wrap, .project-name",
            { opacity: 0, scale: 0.86, yPercent: 6 },
            { opacity: 1, scale: 1, yPercent: 0, duration: 0.36, ease: "power2.out" },
            0.58,
          )
          .fromTo(
            ".showcase-controls",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.22 },
            0.74,
          )
          .addLabel("ingri")
          .to({}, { duration: 0.36 })
          .addLabel("switch")
          .to({}, { duration: 0.5 })
          .addLabel("vribbe")
          .to({}, { duration: 0.36 });
        switchAt = timeline.labels.switch / timeline.duration();
        const trigger = timeline.scrollTrigger!;
        apiRef.current = {
          goTo(index) {
            const label = index === 0 ? "ingri" : "vribbe";
            const p = timeline.labels[label] / timeline.duration();
            const y = trigger.start + (trigger.end - trigger.start) * p;
            window.scrollTo({ top: y, behavior: "smooth" });
          },
        };
        return () => {
          hero.inert = false;
          work.inert = false;
          apiRef.current = null;
        };
      },
      root,
    );
    return () => media.revert();
  }, [root, setProjectIndex, apiRef]);
}
