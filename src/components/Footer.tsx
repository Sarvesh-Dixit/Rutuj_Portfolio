import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";
import RevealText from "./RevealText";
import GoldLine from "./ui/GoldLine";

export default function Footer() {
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
  };

  return (
    <footer className="relative overflow-hidden bg-charcoal pt-20">
      <div className="container-x">
        <RevealText
          as="p"
          className="display whitespace-nowrap text-center text-[clamp(3.4rem,15.5vw,15rem)] leading-[0.9] text-cream"
          lines={[
            <>
              Rutuj <em className="text-gold">Patil</em>
            </>,
          ]}
        />

        <GoldLine origin="center" className="mt-14 w-full" />

        <div className="flex flex-col gap-8 py-10 md:grid md:grid-cols-3 md:items-center">
          <a href="#top" className="font-serif text-3xl leading-none" aria-label="Back to the top">
            RP<span className="text-gold">.</span>
          </a>
          <p className="font-serif text-lg italic text-cream-muted md:text-center">Designed &amp; Developed with Intention.</p>
          <p className="eyebrow text-cream-muted md:text-right">© 2026 {profile.name}</p>
        </div>

        <div className="flex flex-col-reverse gap-8 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 eyebrow text-cream-muted">
            {profile.socials.map((s) =>
              s.url ? (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-cream">
                    {s.label}
                  </a>
                </li>
              ) : (
                <li key={s.label} className="text-cream-muted/50" title="Profile link coming soon">
                  {s.label}
                </li>
              ),
            )}
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline hover:text-cream">
                Email
              </a>
            </li>
          </ul>
          <button type="button" onClick={toTop} className="group flex min-h-11 items-center gap-3 self-start eyebrow text-cream-muted hover:text-cream sm:self-auto">
            Back to top
            <span className="grid size-10 place-items-center rounded-full border border-line-strong transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
              <ArrowUp aria-hidden="true" className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.25} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
