import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Project } from "../data/projects";
import { useParallax } from "../hooks/useParallax";
import { easeLuxe, revealViewport } from "../lib/motion";
import RevealText from "./RevealText";
import ClipReveal from "./ui/ClipReveal";
import Reveal from "./ui/Reveal";
import ProjectVisual from "./visuals/ProjectVisuals";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project, trigger: HTMLElement) => void;
};

/** One large, editorial project showcase. Image/text sides alternate. */
export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const reversed = index % 2 === 1;
  const parallaxRef = useParallax<HTMLDivElement>(34);
  const titleId = `project-${project.id}-title`;

  return (
    <article aria-labelledby={titleId} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
      {/* Visual */}
      <div ref={parallaxRef} className={`lg:col-span-7 ${reversed ? "lg:order-2 lg:col-start-6" : ""}`}>
        <ClipReveal from={reversed ? "right" : "left"} className="border border-line p-2 sm:p-3">
          <button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            aria-label={`View details for ${project.title}`}
            className="group relative block w-full overflow-hidden text-left"
            data-cursor
          >
            <div className="transition-transform duration-[1400ms] ease-(--ease-luxe) group-hover:scale-[1.03]">
              <ProjectVisual visual={project.visual} alt={project.visualAlt} />
            </div>
            <span className="pointer-events-none absolute inset-0 bg-burgundy/0 transition-colors duration-700 group-hover:bg-burgundy/15" />
            <span className="pointer-events-none absolute bottom-4 right-4 flex translate-y-3 items-center gap-2 bg-cream px-4 py-2.5 eyebrow text-[0.6rem] text-burgundy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              <Plus aria-hidden="true" className="size-3" strokeWidth={1.5} /> View details
            </span>
          </button>
        </ClipReveal>
      </div>

      {/* Text */}
      <div className={`lg:col-span-4 ${reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
        <motion.p
          aria-hidden="true"
          className="font-serif text-[clamp(4.5rem,9vw,8.5rem)] font-light italic leading-[0.8] text-gold/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 1.2, ease: easeLuxe }}
        >
          {project.number}
        </motion.p>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 eyebrow text-[0.625rem] text-cream-muted">
          <span>{project.category}</span>
          <span aria-hidden="true" className="text-gold">/</span>
          <span>{project.year}</span>
          <span className="ml-1 border border-line-strong px-2 py-0.5 text-gold">{project.status}</span>
        </Reveal>

        <RevealText as="h3" id={titleId} className="display mt-5 text-[clamp(2.6rem,4.6vw,4.4rem)]" lines={[project.title]} />

        <Reveal delay={0.1}>
          <p className="mt-6 leading-relaxed text-cream-muted">{project.description}</p>
          <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cream" aria-label="Technology stack">
            {project.stack.map((tech, i) => (
              <li key={tech} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="block h-3 w-px rotate-12 bg-gold/60" />}
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            className="group inline-flex min-h-11 items-center gap-2.5 border-b border-gold/60 pb-1 eyebrow text-cream transition-colors hover:border-gold hover:text-gold"
          >
            View project
            <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex min-h-11 items-center eyebrow text-cream-muted hover:text-cream"
            >
              GitHub
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 eyebrow text-cream-muted/60" title="The repository will be linked once it is published">
              GitHub <span className="normal-case tracking-normal italic font-serif text-sm">— coming soon</span>
            </span>
          )}
        </Reveal>
      </div>
    </article>
  );
}
