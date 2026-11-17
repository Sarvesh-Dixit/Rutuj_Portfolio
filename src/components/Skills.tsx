import { motion } from "framer-motion";
import { skillCategories, skillLevels, type Skill } from "../data/skills";
import { easeLuxe, revealViewport } from "../lib/motion";
import RevealText from "./RevealText";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

function LevelMark({ level, inverted = false }: { level: Skill["level"]; inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2" title={skillLevels[level]}>
      <span
        aria-hidden="true"
        className={`block size-2 rounded-full border transition-colors duration-500 ${
          inverted ? "border-claret" : "border-claret group-hover:border-gold group-focus-visible:border-gold"
        } ${level === "working" ? "bg-claret group-hover:bg-gold group-focus-visible:bg-gold" : "bg-transparent"}`}
      />
      <span className="sr-only">{skillLevels[level]}</span>
    </span>
  );
}

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.8, ease: easeLuxe, delay: index * 0.06 }}
    >
      <div
        tabIndex={0}
        className="group relative flex h-full flex-col border border-burgundy/15 p-5 outline-offset-2 focus-visible:outline-claret transition-colors duration-500 ease-(--ease-luxe) hover:border-burgundy hover:bg-burgundy focus-visible:border-burgundy focus-visible:bg-burgundy sm:p-6"
      >
        <div className="flex items-center justify-between">
          <Icon
            aria-hidden="true"
            strokeWidth={1.2}
            className="size-5 text-claret transition-colors duration-500 group-hover:text-gold group-focus-visible:text-gold"
          />
          <LevelMark level={skill.level} />
        </div>

        <h4 className="mt-8 font-serif text-2xl font-normal text-burgundy transition-colors duration-500 group-hover:text-cream group-focus-visible:text-cream">
          {skill.name}
        </h4>

        <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-(--ease-luxe) can-hover:grid-rows-[0fr] can-hover:group-hover:grid-rows-[1fr] can-hover:group-focus-visible:grid-rows-[1fr]">
          <p className="overflow-hidden text-sm leading-relaxed text-burgundy/75 transition-colors duration-500 group-hover:text-cream-muted group-focus-visible:text-cream-muted">
            <span className="block pt-2">{skill.description}</span>
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y relative bg-cream text-burgundy">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <SectionLabel number="03" text="Technical arsenal" tone="light" />
            <RevealText
              id="skills-title"
              className="display mt-10 text-[clamp(2.6rem,5.4vw,5.6rem)]"
              lines={[
                "Tools that turn",
                <>
                  ideas into <em className="text-claret">reality.</em>
                </>,
              ]}
            />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.15}>
            <p className="leading-relaxed text-burgundy/75">
              A working toolkit, grouped by where it sits in the stack. Honest about depth: some tools are used regularly, others are still being explored.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 eyebrow text-[0.625rem] text-burgundy/80" aria-label="Legend">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="block size-2 rounded-full border border-claret bg-claret" />
                {skillLevels.working}
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="block size-2 rounded-full border border-claret" />
                {skillLevels.exploring}
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          {skillCategories.map((cat, ci) => (
            <div key={cat.id} className="grid gap-8 border-t border-burgundy/15 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
              <Reveal className="lg:col-span-3">
                <p className="font-serif text-lg italic text-claret">{String(ci + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 eyebrow text-[0.75rem] text-burgundy">{cat.title}</h3>
                <p className="mt-3 font-serif text-xl italic text-burgundy/70">{cat.summary}</p>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
                {cat.skills.map((skill, si) => (
                  <SkillTile key={skill.name} skill={skill} index={si} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
