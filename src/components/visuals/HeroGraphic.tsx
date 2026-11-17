import { motion } from "framer-motion";
import { useParallax } from "../../hooks/useParallax";
import { easeLuxe } from "../../lib/motion";

const RING_TEXT = "RUTUJ PATIL · DEVELOPER · DESIGN THINKER · DIGITAL BUILDER · ";

/**
 * Abstract monogram composition: an architectural arch, fine gold rings,
 * a slowly rotating inscription and floating geometric marks. Pure SVG/CSS.
 */
export default function HeroGraphic({ ready }: { ready: boolean }) {
  const baseRef = useParallax<HTMLDivElement>(70);
  const floatRef = useParallax<HTMLDivElement>(-140);

  return (
    <motion.div
      className="relative aspect-square w-full"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 1.6, ease: easeLuxe, delay: 0.35 }}
    >
      <div ref={baseRef} className="absolute inset-0">
        <svg viewBox="0 0 600 600" className="h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <path id="ring-path" d="M300,300 m-232,0 a232,232 0 1,1 464,0 a232,232 0 1,1 -464,0" />
            <linearGradient id="arch-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#641D32" stopOpacity="0.55" />
              <stop offset="1" stopColor="#350D19" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* architectural grid */}
          <g stroke="#C5A15B" strokeOpacity="0.09" strokeWidth="0.6">
            {Array.from({ length: 11 }, (_, i) => (
              <line key={`v${i}`} x1={50 + i * 50} y1="0" x2={50 + i * 50} y2="600" />
            ))}
            {Array.from({ length: 11 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={50 + i * 50} x2="600" y2={50 + i * 50} />
            ))}
          </g>

          {/* outer rings */}
          <circle cx="300" cy="300" r="268" fill="none" stroke="#C5A15B" strokeOpacity="0.35" strokeWidth="0.8" />
          <circle cx="300" cy="300" r="196" fill="none" stroke="#C5A15B" strokeOpacity="0.18" strokeWidth="0.6" />

          {/* rotating inscription */}
          <g className="anim-spin-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <circle cx="300" cy="300" r="250" fill="none" stroke="#C5A15B" strokeOpacity="0.3" strokeWidth="0.6" strokeDasharray="1 7" />
            <text fill="#C9BBAE" fontFamily="DM Sans, sans-serif" fontSize="11">
              <textPath href="#ring-path" textLength="1452" lengthAdjust="spacing">
                {RING_TEXT.repeat(2)}
              </textPath>
            </text>
          </g>

          {/* counter-rotating tick ring */}
          <g className="anim-spin-reverse" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <circle cx="300" cy="300" r="212" fill="none" stroke="transparent" />
            {Array.from({ length: 60 }, (_, i) => {
              const a = (i / 60) * Math.PI * 2;
              const r1 = 206;
              const r2 = i % 5 === 0 ? 216 : 210;
              return (
                <line
                  key={i}
                  x1={300 + Math.cos(a) * r1}
                  y1={300 + Math.sin(a) * r1}
                  x2={300 + Math.cos(a) * r2}
                  y2={300 + Math.sin(a) * r2}
                  stroke="#C5A15B"
                  strokeOpacity={i % 5 === 0 ? 0.6 : 0.25}
                  strokeWidth="0.8"
                />
              );
            })}
          </g>

          {/* arch */}
          <path d="M190 470 V290 A110 110 0 0 1 410 290 V470 Z" fill="url(#arch-fill)" stroke="#C5A15B" strokeOpacity="0.55" strokeWidth="0.9" />
          <path d="M206 470 V292 A94 94 0 0 1 394 292 V470" fill="none" stroke="#C5A15B" strokeOpacity="0.2" strokeWidth="0.6" />
          <line x1="150" y1="470" x2="450" y2="470" stroke="#C5A15B" strokeOpacity="0.55" strokeWidth="0.9" />
          <line x1="170" y1="478" x2="430" y2="478" stroke="#C5A15B" strokeOpacity="0.22" strokeWidth="0.6" />

          {/* monogram */}
          <text x="268" y="430" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="300" fontSize="230" fill="#F3EBDD">
            R
          </text>
          <text x="352" y="452" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="230" fill="#C5A15B">
            P
          </text>

          {/* axis marks */}
          <g stroke="#C5A15B" strokeOpacity="0.5" strokeWidth="0.8">
            <line x1="300" y1="14" x2="300" y2="40" />
            <line x1="300" y1="560" x2="300" y2="586" />
            <line x1="14" y1="300" x2="40" y2="300" />
            <line x1="560" y1="300" x2="586" y2="300" />
          </g>
        </svg>
      </div>

      {/* floating geometric elements, on their own parallax layer */}
      <div ref={floatRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="anim-float absolute left-[12%] top-[18%] block size-3 rotate-45 border border-gold/70" />
        <span className="anim-float-delayed absolute right-[10%] top-[14%] block size-2 rounded-full bg-gold" />
        <span className="anim-float absolute bottom-[16%] right-[8%] block size-10 rounded-full border border-gold/40" />
        <span className="anim-float-delayed absolute bottom-[22%] left-[6%] block h-px w-14 bg-gold/60" />
        <span className="absolute left-[4%] top-[48%] font-label text-[0.6rem] tracking-[0.3em] text-cream-muted/80 [writing-mode:vertical-rl]">
          FIG. 01 — MONOGRAM
        </span>
        <span className="absolute right-[2%] top-[42%] font-serif text-sm italic text-gold/80">N° 01</span>
      </div>
    </motion.div>
  );
}
