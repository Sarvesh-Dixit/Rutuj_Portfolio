import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { profile } from "../data/portfolio";
import { easeCurtain, easeLuxe } from "../lib/motion";

type PreloaderProps = { onComplete: () => void };

/**
 * ~1.8s intro: monogram scales in, a gold line draws, the name rises through a
 * mask — then the whole curtain lifts to reveal the hero.
 */
export default function Preloader({ onComplete }: PreloaderProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(onComplete, reduce ? 500 : 1850);
    return () => window.clearTimeout(t);
  }, [onComplete, reduce]);

  return (
    <motion.div
      role="status"
      aria-label={`Loading ${profile.name}'s portfolio`}
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-burgundy text-cream"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.95, ease: easeCurtain }}
    >
      <div aria-hidden="true" className="arch-grid absolute inset-0 opacity-40" />

      <motion.div
        className="relative flex flex-col items-center"
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.6, ease: easeCurtain }}
      >
        {/* RP monogram */}
        <motion.div
          className="relative grid size-24 place-items-center"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeLuxe }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0" aria-hidden="true">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#C5A15B"
              strokeWidth="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, ease: easeLuxe, delay: 0.1 }}
            />
          </svg>
          <span className="font-serif text-4xl font-light tracking-wide">
            R<em className="text-gold">P</em>
          </span>
        </motion.div>

        {/* Gold line */}
        <motion.span
          aria-hidden="true"
          className="mt-8 block h-px w-40 origin-center bg-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: easeLuxe, delay: 0.45 }}
        />

        {/* Name — masked reveal */}
        <span className="mt-7 block overflow-hidden">
          <motion.span
            className="block font-serif text-3xl font-light tracking-[0.32em] sm:text-4xl"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: easeLuxe, delay: 0.65 }}
          >
            RUTUJ PATIL
          </motion.span>
        </span>

        <motion.span
          className="eyebrow mt-4 px-4 text-center text-[0.625rem] text-cream-muted"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeLuxe, delay: 0.95 }}
        >
          {profile.roles.join(" • ")}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
