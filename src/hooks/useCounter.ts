import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { easeLuxe } from "../lib/motion";

type Options = { duration?: number; decimals?: number };

/**
 * Counts from 0 to `target` once `start` becomes true. Runs a single time —
 * scrolling away and back never restarts it.
 */
export function useCounter(target: number, start: boolean, { duration = 2.2, decimals = 0 }: Options = {}) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (reduce) {
      setValue(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: easeLuxe,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [start, target, duration, reduce]);

  return value.toFixed(decimals);
}
