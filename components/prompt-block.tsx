"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy, Download } from "lucide-react";

export function PromptBlock({ kind, prompt }: { kind: "video" | "frontend"; prompt: string }) {
  const t = useTranslations("blog.portfolio");
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return (
    <section className="prompt-block" aria-labelledby={`${kind}-prompt-title`}>
      <div className="prompt-toolbar">
        <div><span className="eyebrow">{t("original")}</span><h3 id={`${kind}-prompt-title`}>{t(`${kind}Title`)}</h3></div>
        <div className="prompt-actions">
          <a href={`/prompts/${kind}-prompt.txt`} download aria-label={t("download", { name: t(`${kind}Title`) })}><Download size={17} /><span>TXT</span></a>
          <button onClick={copy} type="button">{status === "copied" ? <Check size={16} /> : <Copy size={16} />}{t(status === "copied" ? "copied" : "copy")}</button>
        </div>
      </div>
      <p className="prompt-note">{t("originalNote")}</p>
      <details className="prompt-details" open={kind === "video"}>
        <summary>{t("fullPrompt")}</summary>
        <pre lang="en" tabIndex={0} aria-label={t(`${kind}Title`)}>{prompt}</pre>
      </details>
      <span className={status === "error" ? "prompt-error" : "sr-only"} role="status">{status === "error" ? t("copyError") : status === "copied" ? t("copied") : ""}</span>
    </section>
  );
}
