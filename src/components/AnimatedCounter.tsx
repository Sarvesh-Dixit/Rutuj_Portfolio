import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "../hooks/useCounter";

type AnimatedCounterProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
};

/**
 * Counts smoothly from zero to `value` the first time it enters the viewport.
 * Supports decimals and suffixes (e.g. "%"). Never restarts.
 * Screen readers get the final value immediately.
 */
export default function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 2.2,
  className = "",
  suffixClassName = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const current = useCounter(value, inView, { duration, decimals });
  const final = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className={`lining-nums tabular-nums ${className}`}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true">
        {prefix}
        {current}
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </span>
    </span>
  );
}
