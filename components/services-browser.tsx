"use client";
import { useState } from "react";
import { ServiceIcon } from "@/components/service-icon";
import { GridIcon, ListIcon } from "@/components/view-toggle-icons";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";

type Item = {
  id: string;
  group: string;
  icon: string;
  title: string;
  subtitle: string;
  text: string;
  topic: string;
};

type Labels = {
  filters: Record<string, string>;
  grid: string;
  list: string;
  filterLabel: string;
  viewLabel: string;
  details: string;
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
            <button
              key={v}
              type="button"
              className="view-icon-btn"
              aria-pressed={view === v}
              aria-label={labels[v]}
              title={labels[v]}
              onClick={() => setView(v)}
            >
              {v === "grid" ? <GridIcon /> : <ListIcon />}
            </button>
          ))}
        </div>
      </div>
      <ul className={"svc-browse view-" + view} aria-live="polite">
        {shown.map((s) => (
          <li key={s.id}>
            <motion.div
              layout
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link className="svc-item proj-link" href={`/contact?topic=${s.topic}`}>
              <div className={"svc-visual tone-" + s.id}>
                <span className="svc-mark" aria-hidden="true">
                  <ServiceIcon name={s.icon} size={44} />
                </span>
                <span className="card-overlay" aria-hidden="true">
                  <span className="card-overlay-text">{s.text}</span>
                  <span className="card-overlay-btn">
                    {labels.details}
                    <ServiceIcon name="arrowRight" size={16} />
                  </span>
                </span>
              </div>
              <div className="svc-meta">
                <h3>{s.title}</h3>
                <p className="svc-sub">{s.subtitle}</p>
                {view === "list" ? <p className="svc-text">{s.text}</p> : null}
              </div>
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
