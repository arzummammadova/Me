"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { mascotPhrases, MASCOT_INTERVAL_MS } from "@/data/mascot";

export function HomeMascot() {
  const t = useTranslations("home");
  const isHome = usePathname() === "/";
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % mascotPhrases.length);
    }, MASCOT_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);
  const current = mascotPhrases[index];
  const prev = (index - 1 + mascotPhrases.length) % mascotPhrases.length;
  const label = t(`mascotPhrases.${current.key}`);
  return (
    <Link
      href={current.href}
      className={"home-mascot" + (isHome ? " is-home" : " is-subpage")}
      aria-label={`${label} — ${t("mascotAriaSuffix")}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className="mascot-bubble" aria-hidden="true">
        <span className="mascot-phrases">
          {mascotPhrases.map((p, i) => (
            <span
              key={p.key}
              className={
                "mascot-phrase" +
                (i === index ? " is-active" : i === prev ? " is-prev" : "")
              }
            >
              {t(`mascotPhrases.${p.key}`)}
            </span>
          ))}
        </span>
      </span>
      <span className="mascot-figure" aria-hidden="true">
        <Image src="/assets/mascot.png" alt="" width={287} height={272} sizes="110px" priority />
      </span>
    </Link>
  );
}
