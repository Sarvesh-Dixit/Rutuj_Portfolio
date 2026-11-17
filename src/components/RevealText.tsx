import { motion, useInView } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";
import { easeLuxe } from "../lib/motion";

type RevealTextProps = {
  /** Each entry is rendered as its own masked line. */
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** When provided, the animation also waits for this flag (e.g. preloader finished). */
  ready?: boolean;
  id?: string;
};

/**
 * Rolling / masked typography: every line sits in an overflow-hidden mask and
 * slides up from below into place, staggered line by line.
 */
export default function RevealText({
  lines,
  as = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.1,
  duration = 1.1,
  ready = true,
  id,
}: RevealTextProps) {
  const Tag = as;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = inView && ready;

  return (
    <Tag ref={ref} id={id} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pt-[0.06em] pb-[0.14em] -mb-[0.1em] pr-[0.08em]">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            initial={{ y: "115%", rotate: 2 }}
            animate={show ? { y: "0%", rotate: 0 } : { y: "115%", rotate: 2 }}
            transition={{ duration, ease: easeLuxe, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
