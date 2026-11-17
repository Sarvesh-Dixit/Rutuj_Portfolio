import { about } from "../data/portfolio";
import { useParallax } from "../hooks/useParallax";
import RevealText from "./RevealText";
import ClipReveal from "./ui/ClipReveal";
import GoldLine from "./ui/GoldLine";
import Monogram from "./ui/Monogram";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

export default function About() {
  const monogramRef = useParallax<HTMLDivElement>(80);

  return (
    <section id="about" aria-labelledby="about-title" className="section-y relative">
      <div className="container-x">
        <SectionLabel number="01" text="The person behind the code" />

        <RevealText
          id="about-title"
          className="display mt-10 max-w-[15ch] text-[clamp(2.5rem,5.6vw,6rem)] lg:max-w-none"
          lines={[
            "Curiosity drives the process.",
            <>
              <em className="text-gold">Purpose</em> shapes the outcome.
            </>,
          ]}
        />

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* Left — story */}
          <div className="lg:col-span-6">
            <div className="space-y-6 text-[1.02rem] leading-[1.8] text-cream-muted">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className={i === 0 ? "font-serif text-[1.65rem] leading-snug text-cream sm:text-3xl" : undefined}>{p}</p>
                </Reveal>
              ))}
            </div>

            <GoldLine className="mt-14 w-24" />

            <Reveal className="mt-8" delay={0.1}>
              <p className="eyebrow mb-4 text-gold">Personal philosophy</p>
              <p className="font-serif text-3xl font-light italic leading-tight text-cream sm:text-4xl">
                {about.philosophy.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>

          {/* Right — monogram panel */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ClipReveal className="relative aspect-[4/5] overflow-hidden border border-line bg-wine">
              <div aria-hidden="true" className="arch-grid absolute inset-0" />
              {/* architectural arch */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="none">
                <path d="M70 500 V200 A130 130 0 0 1 330 200 V500" fill="none" stroke="#C5A15B" strokeOpacity="0.35" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <path d="M100 500 V205 A100 100 0 0 1 300 205 V500" fill="#350D19" fillOpacity="0.45" stroke="#C5A15B" strokeOpacity="0.15" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              </svg>

              <div ref={monogramRef} className="absolute inset-x-0 top-[24%] mx-auto w-[62%]">
                <Monogram className="w-full" title="RP monogram" />
              </div>

              {/* floating metadata */}
              <dl className="absolute inset-0 p-5 sm:p-7">
                {about.facts.map((fact, i) => {
                  const pos = [
                    "left-5 top-5 sm:left-7 sm:top-7",
                    "right-5 top-5 text-right sm:right-7 sm:top-7",
                    "bottom-5 left-5 sm:bottom-7 sm:left-7",
                    "bottom-5 right-5 text-right sm:bottom-7 sm:right-7",
                  ][i];
                  return (
                    <div key={fact.label} className={`absolute ${pos}`}>
                      <dt className="eyebrow text-[0.6rem] text-gold">{fact.label}</dt>
                      <dd className="mt-1 font-serif text-base italic text-cream sm:text-lg">{fact.value}</dd>
                    </div>
                  );
                })}
              </dl>
            </ClipReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Slow, editorial ticker repeating the personal philosophy. */
export function PhilosophyMarquee() {
  const items = [...about.philosophy, ...about.philosophy];
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-line bg-burgundy py-7">
      <div className="anim-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((text, i) => (
              <span key={`${copy}-${i}`} className="flex items-center font-serif text-4xl font-light italic text-cream/85 sm:text-5xl">
                <span className="px-10">{text}</span>
                <span className="block size-2 rotate-45 border border-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
