import { motion } from "framer-motion";
import { easeLuxe, revealViewport } from "../../lib/motion";

type GoldLineProps = {
  className?: string;
  vertical?: boolean;
  delay?: number;
  origin?: "start" | "center";
};

/** A fine gold divider that draws itself when it scrolls into view. */
export default function GoldLine({ className = "", vertical = false, delay = 0, origin = "start" }: GoldLineProps) {
  const transformOrigin = origin === "center" ? "center" : vertical ? "top" : "left";
  return (
    <motion.span
      aria-hidden="true"
      className={`block bg-line-strong ${vertical ? "w-px" : "h-px"} ${className}`}
      style={{ transformOrigin }}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={revealViewport}
      transition={{ duration: 1.4, ease: easeLuxe, delay }}
    />
  );
}
