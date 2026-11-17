import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { easeLuxe, revealViewport } from "../lib/motion";
import AnimatedCounter from "./AnimatedCounter";
import RevealText from "./RevealText";
import GoldLine from "./ui/GoldLine";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-y relative bg-wine">
      <div aria-hidden="true" className="arch-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />

      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel number="02" text="Academic foundation" />
            <RevealText
              id="education-title"
              className="display mt-10 text-[clamp(2.6rem,5.2vw,5.4rem)]"
              lines={[
                "Learning,",
                "evolving,",
                <em key="b" className="text-gold">
                  building.
                </em>,
              ]}
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm leading-relaxed text-cream-muted">
                Three chapters of study, each one laying the ground for the next — from school, through a diploma, to an engineering degree in progress.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="relative lg:col-span-7">
          <GoldLine vertical className="absolute bottom-4 left-[5px] top-3" />
          {education.map((m, i) => (
            <motion.li
              key={m.institution}
              className="relative pb-16 pl-10 last:pb-0 sm:pl-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 1, ease: easeLuxe, delay: i * 0.12 }}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-2 grid size-[11px] place-items-center rounded-full border border-gold bg-wine`}
              >
                <span className={`size-[5px] rounded-full ${m.current ? "anim-pulse-dot bg-gold" : "bg-gold/70"}`} />
              </span>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 eyebrow">
                <span className="font-serif text-base normal-case italic tracking-normal text-gold">Stage {m.stage}</span>
                <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
                <span className="text-cream-muted">{m.period}</span>
                {m.current && (
                  <span className="border border-gold/50 px-2.5 py-1 text-[0.6rem] text-gold">Currently pursuing</span>
                )}
              </div>

              <h3 className="mt-5 font-serif text-[1.9rem] font-light leading-tight sm:text-4xl">{m.institution}</h3>
              <p className="mt-2 eyebrow text-cream-muted">{m.qualification}</p>

              <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-[auto_1fr] sm:gap-10">
                <div>
                  <AnimatedCounter
                    value={m.score.value}
                    decimals={m.score.decimals}
                    suffix={m.score.suffix}
                    className="font-serif text-6xl font-light leading-none text-gold"
                    suffixClassName="text-4xl"
                  />
                  <p className="mt-3 eyebrow text-[0.6rem] text-cream-muted">{m.score.caption}</p>
                </div>
                <p className="max-w-md self-end leading-relaxed text-cream-muted">{m.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
