"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Item = {
  slug: string;
  name: string;
  image?: string;
  alt: string;
  subtitle: string;
  text: string;
  initials: string;
};

type Labels = {
  newest: string;
  oldest: string;
  grid: string;
  list: string;
  sortLabel: string;
  viewLabel: string;
};

// Data order is newest first; "oldest" simply reverses it.
export function ProjectsBrowser({ items, labels }: { items: Item[]; labels: Labels }) {
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const shown = sort === "newest" ? items : [...items].reverse();
  return (
    <div className="svc-browser">
      <div className="svc-toolbar">
        <div className="svc-toggle" role="group" aria-label={labels.sortLabel}>
          {(["newest", "oldest"] as const).map((s) => (
            <button key={s} type="button" aria-pressed={sort === s} onClick={() => setSort(s)}>
              {labels[s]}
            </button>
          ))}
        </div>
        <div className="svc-toggle" role="group" aria-label={labels.viewLabel}>
          {(["grid", "list"] as const).map((v) => (
            <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)}>
              {labels[v]}
            </button>
          ))}
        </div>
      </div>
      <ul className={"svc-browse proj-browse view-" + view}>
        {shown.map((p) => (
          <li key={p.slug}>
            <Link className="svc-item proj-link" href={`/projects/${p.slug}`}>
              <div
                className={"svc-visual" + (p.image ? " has-image" : " tone-p" + (p.name.length % 6))}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes={
                      view === "list"
                        ? "120px"
                        : "(max-width: 620px) 92vw, (max-width: 1024px) 46vw, 460px"
                    }
                  />
                ) : (
                  <span className="svc-mark proj-mark" aria-hidden="true">
                    {p.initials}
                  </span>
                )}
              </div>
              <div className="svc-meta">
                <h2>{p.name}</h2>
                <p className="svc-sub">{p.subtitle}</p>
                {view === "list" ? <p className="svc-text">{p.text}</p> : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
