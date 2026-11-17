import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeLuxe, revealViewport } from "../../lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
};

/** Content slides upward and fades in once, as it enters the viewport. */
export default function Reveal({ children, className, delay = 0, y = 32, duration = 0.95 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration, ease: easeLuxe, delay }}
    >
      {children}
    </motion.div>
  );
}
