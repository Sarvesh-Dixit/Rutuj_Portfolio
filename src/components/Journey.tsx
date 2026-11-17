import { motion } from "framer-motion";
import { journey } from "../data/portfolio";
import { easeLuxe, revealViewport } from "../lib/motion";
import RevealText from "./RevealText";
import GoldLine from "./ui/GoldLine";
import SectionLabel from "./ui/SectionLabel";

/** Learning milestones — horizontal on desktop, vertical on mobile. */
export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="section-y relative overflow-hidden bg-wine">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] right-[-0.04em] select-none font-serif text-[clamp(10rem,30vw,30rem)] font-light italic leading-none text-burgundy/60"
      >
        RP
      </span>

      <div className="container-x relative">
        <SectionLabel number="05" text="The journey" />
        <RevealText
          id="journey-title"
          className="display mt-10 text-[clamp(2.6rem,5.6vw,6rem)]"
          lines={[
            "Every step adds",
            <>
              another <em className="text-gold">layer.</em>
            </>,
          ]}
        />

        <ol className="relative mt-20 grid gap-14 pl-10 lg:mt-28 lg:grid-cols-3 lg:gap-10 lg:pl-0 lg:pt-14">
          {/* connecting line: vertical on mobile, horizontal on desktop */}
          <GoldLine vertical className="absolute bottom-2 left-[5px] top-2 lg:hidden" />
          <GoldLine className="absolute left-0 right-0 top-[5px] hidden lg:block" />

          {journey.map((step, i) => (
            <motion.li
              key={step.year}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 1, ease: easeLuxe, delay: 0.2 + i * 0.18 }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-10 top-3 grid size-[11px] place-items-center rounded-full border border-gold bg-wine lg:-top-14 lg:left-0"
              >
                <span className={`size-[5px] rounded-full bg-gold ${i === journey.length - 1 ? "anim-pulse-dot" : ""}`} />
              </span>
              <p className="font-serif text-[clamp(4rem,7vw,6.5rem)] font-light leading-none text-cream lining-nums">{step.year}</p>
              <h3 className="mt-6 eyebrow text-gold">{step.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-cream-muted">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
