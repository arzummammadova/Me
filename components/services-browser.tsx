"use client";
import { useState } from "react";
import { ServiceIcon } from "@/components/service-icon";

type Item = {
  id: string;
  group: string;
  icon: string;
  title: string;
  subtitle: string;
  text: string;
};

type Labels = {
  filters: Record<string, string>;
  grid: string;
  list: string;
  filterLabel: string;
  viewLabel: string;
};

export function ServicesBrowser({
  items,
  groups,
  labels,
}: {
  items: Item[];
  groups: readonly string[];
  labels: Labels;
}) {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const shown = filter === "all" ? items : items.filter((s) => s.group === filter);
  return (
    <div className="svc-browser">
      <div className="svc-toolbar">
        <div className="svc-toggle" role="group" aria-label={labels.filterLabel}>
          {["all", ...groups].map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={filter === g}
              onClick={() => setFilter(g)}
            >
              {labels.filters[g]}
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
      <ul className={"svc-browse view-" + view} aria-live="polite">
        {shown.map((s) => (
          <li key={s.id}>
            <article className="svc-item">
              <div className={"svc-visual tone-" + s.id} aria-hidden="true">
                <span className="svc-mark">
                  <ServiceIcon name={s.icon} size={44} />
                </span>
              </div>
              <div className="svc-meta">
                <h3>{s.title}</h3>
                <p className="svc-sub">{s.subtitle}</p>
                {view === "list" ? <p className="svc-text">{s.text}</p> : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
