import { motion } from "framer-motion";
import { statements, stats } from "../data/portfolio";
import { easeLuxe, revealViewport } from "../lib/motion";
import AnimatedCounter from "./AnimatedCounter";
import RevealText from "./RevealText";
import SectionLabel from "./ui/SectionLabel";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="section-y relative bg-claret">
      <div aria-hidden="true" className="arch-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-x relative">
        <div className="text-center">
          <SectionLabel number="06" text="The numbers" className="justify-center" />
          <RevealText
            id="achievements-title"
            className="display mx-auto mt-10 text-[clamp(2.6rem,5.6vw,6rem)]"
            lines={[
              <>
                Progress, <em className="text-gold">measured</em>
              </>,
              "differently.",
            ]}
          />
        </div>

        <dl className="mt-20 grid border-y border-line-strong md:grid-cols-3 lg:mt-28">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={`flex flex-col items-center px-6 py-12 text-center lg:py-16 ${
                i > 0 ? "border-t border-line-strong md:border-l md:border-t-0" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 1, ease: easeLuxe, delay: i * 0.12 }}
            >
              <dt className="mb-6 eyebrow text-gold">{s.label}</dt>
              <dd>
                <AnimatedCounter
                  value={s.value}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  duration={2.4}
                  className="font-serif text-[clamp(5rem,10vw,9rem)] font-light leading-none text-cream"
                  suffixClassName="text-gold italic"
                />
              </dd>
              <dd className="mt-5 max-w-[16rem] font-serif text-lg italic leading-snug text-cream-muted">{s.source}</dd>
            </motion.div>
          ))}
        </dl>

        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {statements.map((s, i) => (
            <motion.li
              key={s.title}
              className="flex gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.9, ease: easeLuxe, delay: 0.1 + i * 0.1 }}
            >
              <span aria-hidden="true" className="mt-2.5 block size-2 shrink-0 rotate-45 border border-gold" />
              <div>
                <h3 className="font-serif text-2xl font-normal leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-muted">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
