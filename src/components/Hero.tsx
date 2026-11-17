import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero } from "../data/portfolio";
import { easeLuxe } from "../lib/motion";
import RevealText from "./RevealText";
import ArrowLink from "./ui/ArrowLink";
import HeroGraphic from "./visuals/HeroGraphic";

export default function Hero({ ready }: { ready: boolean }) {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: { duration: 1, ease: easeLuxe, delay },
  });

  return (
    <section id="top" tabIndex={-1} aria-labelledby="hero-title" className="relative outline-none flex min-h-[100svh] flex-col overflow-hidden pt-[4.5rem]">
      {/* background architecture */}
      <div aria-hidden="true" className="arch-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[42rem] rounded-full bg-claret/30 blur-3xl" />

      <div className="container-x relative grid flex-1 items-center gap-14 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-7">
          <motion.p className="eyebrow mb-8 flex items-center gap-4 text-cream-muted" {...fadeUp(0.2)}>
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {hero.label}
          </motion.p>

          <RevealText
            as="h1"
            id="hero-title"
            ready={ready}
            delay={0.3}
            stagger={0.12}
            duration={1.25}
            className="display text-[clamp(2.85rem,6.4vw,6.9rem)]"
            lines={[
              "Building digital",
              "experiences with",
              <>
                purpose &amp; <em className="font-normal text-gold">precision.</em>
              </>,
            ]}
          />

          <motion.p className="mt-9 max-w-[32rem] text-[0.98rem] leading-relaxed text-cream-muted sm:text-base" {...fadeUp(0.85)}>
            {hero.description}
          </motion.p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <motion.div {...fadeUp(1.05)}>
              <ArrowLink href="#work">Explore my work</ArrowLink>
            </motion.div>
            <motion.div {...fadeUp(1.18)}>
              <a href="#contact" className="link-underline eyebrow inline-flex min-h-12 items-center px-2 pb-0.5 text-cream">
                Let&apos;s connect
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[22rem] sm:max-w-md lg:col-span-5 lg:max-w-none">
          <HeroGraphic ready={ready} />
        </div>
      </div>

      <motion.div
        className="container-x relative"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="flex items-center justify-between border-t border-line py-6">
          <a href="#about" className="group flex items-center gap-4 eyebrow text-cream-muted transition-colors hover:text-cream">
            <span className="relative block h-9 w-px overflow-hidden bg-line" aria-hidden="true">
              <span className="anim-scroll-cue absolute inset-0 bg-gold" />
            </span>
            Scroll to discover
            <ArrowDown aria-hidden="true" strokeWidth={1.25} className="size-3.5 transition-transform duration-500 group-hover:translate-y-1" />
          </a>
          <ul className="hidden gap-10 eyebrow text-cream-muted/80 md:flex" aria-label="Principles">
            {hero.meta.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
