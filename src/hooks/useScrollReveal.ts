import { useInView } from "framer-motion";
import { useRef } from "react";
import { revealViewport } from "../lib/motion";

/** Returns a ref and a boolean that flips to true once the element enters the viewport. */
export function useScrollReveal<T extends Element = HTMLDivElement>(margin: string = revealViewport.margin) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` });
  return { ref, inView };
}
