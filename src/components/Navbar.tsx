import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollLock } from "../hooks/useScrollLock";
import { easeCurtain, easeLuxe } from "../lib/motion";

const observedSections = ["top", ...navLinks.flatMap((l) => l.covers)];

export default function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(observedSections);
  const activeLink = navLinks.find((l) => l.covers.includes(active))?.id;

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[90] transition-[background-color,border-color,backdrop-filter] duration-700 ${
          scrolled && !open
            ? "border-b border-line bg-burgundy/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -24, opacity: 0 }}
        transition={{ duration: 1, ease: easeLuxe, delay: 0.5 }}
      >
        <nav aria-label="Primary" className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <a href="#top" className="font-serif text-2xl leading-none tracking-wide" aria-label={`${profile.name} — back to top`}>
            RP<span className="text-gold">.</span>
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative eyebrow py-2 transition-colors duration-300 ${
                      isActive ? "text-cream" : "text-cream-muted hover:text-cream"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ease-(--ease-luxe) ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-end gap-5">
            <a href="#contact" className="hidden items-center gap-2.5 eyebrow text-cream-muted transition-colors hover:text-cream md:flex">
              <span aria-hidden="true" className="anim-pulse-dot size-1.5 rounded-full bg-gold" />
              {profile.availability}
            </a>
            <button
              type="button"
              className="-mr-2 grid size-11 place-items-center text-cream lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X strokeWidth={1.25} className="size-6" /> : <Menu strokeWidth={1.25} className="size-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[80] flex flex-col bg-wine pt-[4.5rem] lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: easeCurtain }}
          >
            <div aria-hidden="true" className="arch-grid absolute inset-0 opacity-60" />
            <ul className="container-x relative mt-10 flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.id} className="overflow-hidden border-b border-line">
                  <motion.a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 py-5"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, ease: easeLuxe, delay: 0.25 + i * 0.07 }}
                  >
                    <span className="font-serif text-base italic text-gold">0{i + 1}</span>
                    <span className="font-serif text-5xl font-light">{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="container-x relative mt-auto flex items-center gap-2.5 pb-10 eyebrow text-cream-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span aria-hidden="true" className="anim-pulse-dot size-1.5 rounded-full bg-gold" />
              {profile.availability}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
