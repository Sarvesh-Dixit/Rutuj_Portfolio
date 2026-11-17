import { motion } from "framer-motion";
import { easeLuxe, revealViewport } from "../../lib/motion";

type SectionLabelProps = {
  number: string;
  text: string;
  tone?: "dark" | "light";
  className?: string;
};

/** Editorial section marker: "01 —— THE PERSON BEHIND THE CODE". */
export default function SectionLabel({ number, text, tone = "dark", className = "" }: SectionLabelProps) {
  const numberColor = tone === "dark" ? "text-gold" : "text-claret";
  const textColor = tone === "dark" ? "text-cream-muted" : "text-burgundy/75";
  const lineColor = tone === "dark" ? "bg-gold/60" : "bg-claret/50";

  return (
    <motion.p
      className={`eyebrow flex items-center gap-4 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.8, ease: easeLuxe }}
    >
      <span className={`${numberColor} font-serif text-base italic tracking-normal`}>{number}</span>
      <motion.span
        aria-hidden="true"
        className={`h-px w-10 shrink-0 origin-left ${lineColor}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={revealViewport}
        transition={{ duration: 1, ease: easeLuxe, delay: 0.2 }}
      />
      <span className={textColor}>{text}</span>
    </motion.p>
  );
}
