import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

/**
 * Subtle scroll-linked vertical drift using GSAP ScrollTrigger.
 * Disabled on small screens and for users who prefer reduced motion.
 * Apply the ref to a wrapper — not to an element Framer Motion also transforms.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(distance = 60) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
      gsap.fromTo(
        el,
        { y: -distance / 2 },
        {
          y: distance / 2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
        },
      );
    });
    return () => mm.revert();
  }, [distance]);

  return ref;
}
