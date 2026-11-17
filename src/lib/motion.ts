/** Shared easing curves and timings so every animation speaks the same language. */
export const easeLuxe = [0.22, 1, 0.36, 1] as const; // long, soft deceleration
export const easeCurtain = [0.76, 0, 0.24, 1] as const; // symmetrical, for curtains/wipes

export const durations = {
  fast: 0.6,
  base: 0.9,
  slow: 1.2,
} as const;

/** Viewport options used by scroll-triggered reveals: fire once, slightly before fully in view. */
export const revealViewport = { once: true, margin: "0px 0px -12% 0px" } as const;
