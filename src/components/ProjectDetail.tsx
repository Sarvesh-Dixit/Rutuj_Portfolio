import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { useScrollLock } from "../hooks/useScrollLock";
import { easeCurtain, easeLuxe } from "../lib/motion";
import ProjectVisual from "./visuals/ProjectVisuals";

type ProjectDetailProps = { project: Project; onClose: () => void };

const FOCUSABLE = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

/** Side-panel case study for a project. Accessible dialog: focus trap, Esc to close. */
export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useScrollLock(true);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const titleId = `detail-${project.id}`;
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.div className="fixed inset-0 z-[100]" initial="hidden" animate="visible" exit="hidden">
      <motion.div
        className="absolute inset-0 bg-charcoal/75 backdrop-blur-sm"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-y-0 right-0 flex w-full max-w-3xl flex-col overflow-y-auto overscroll-contain border-l border-line bg-burgundy"
        variants={{ hidden: { x: "100%" }, visible: { x: "0%" } }}
        transition={{ duration: 0.85, ease: easeCurtain }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-burgundy/95 px-5 py-4 backdrop-blur sm:px-10">
          <span className="eyebrow text-cream-muted">
            <span className="font-serif text-base italic normal-case tracking-normal text-gold">{project.number}</span>
            <span className="mx-3 text-gold">/</span>
            Case study
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="group -mr-2 flex min-h-11 items-center gap-2 px-2 eyebrow text-cream-muted hover:text-cream"
          >
            Close
            <X aria-hidden="true" strokeWidth={1.25} className="size-5 transition-transform duration-500 group-hover:rotate-90" />
          </button>
        </div>

        <motion.div
          className="px-5 pb-16 pt-10 sm:px-10"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: easeLuxe, delay: 0.25 }}
        >
          <p className="eyebrow text-[0.625rem] text-gold">{project.category}</p>
          <h2 id={titleId} className="display mt-4 text-[clamp(3rem,8vw,5.5rem)]">
            {project.title}
          </h2>

          <div className="mt-10 border border-line p-2">
            <ProjectVisual visual={project.visual} alt={project.visualAlt} />
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
            {[
              ["Year", project.year],
              ["Type", project.category.split(" / ")[0]],
              ["Status", project.status],
              ["Role", "Design & build"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-[0.6rem] text-gold">{k}</dt>
                <dd className="mt-1.5 font-serif text-lg">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="eyebrow text-gold">Overview</h3>
              <p className="mt-4 leading-relaxed text-cream-muted">{project.description}</p>
            </div>
            <div>
              <h3 className="eyebrow text-gold">What it explores</h3>
              <ul className="mt-4 space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={h} className="flex gap-4 border-b border-line pb-4 text-cream">
                    <span className="font-serif italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="eyebrow text-gold">Technology</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="border border-line-strong px-4 py-2 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            {hasLinks ? (
              <div className="flex flex-wrap gap-6">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 eyebrow">
                    Live project <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 eyebrow">
                    Source on GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            ) : (
              <p className="font-serif text-xl italic text-cream-muted">
                This is a concept study. A live demo and source code will be linked here once they are published.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
