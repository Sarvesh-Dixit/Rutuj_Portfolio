import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeCurtain, revealViewport } from "../../lib/motion";

type ClipRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right";
};

const start = {
  bottom: "inset(100% 0% 0% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

/** Images / visuals unveil through a clipping mask, like a curtain lifting. */
export default function ClipReveal({ children, className, delay = 0, from = "bottom" }: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: start[from] }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={revealViewport}
      transition={{ duration: 1.3, ease: easeCurtain, delay }}
    >
      {children}
    </motion.div>
  );
}
