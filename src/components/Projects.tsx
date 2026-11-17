import { AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { projects, type Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import RevealText from "./RevealText";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelected(project);
  }, []);

  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="work" aria-labelledby="work-title" className="section-y relative">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <SectionLabel number="04" text="Selected works" />
            <RevealText
              id="work-title"
              className="display mt-10 text-[clamp(2.6rem,5.8vw,6.2rem)]"
              lines={[
                "Experiments, ideas",
                <>
                  <em className="text-gold">&amp;</em> things built.
                </>,
              ]}
            />
          </div>
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={0.15}>
            <p className="leading-relaxed text-cream-muted">
              Five concept studies, each exploring a different kind of product. Presented as demonstrations — live demos and source links are added as they are published.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 space-y-32 lg:mt-36 lg:space-y-48">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      <AnimatePresence onExitComplete={() => triggerRef.current?.focus()}>
        {selected && <ProjectDetail key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
