type MonogramProps = { className?: string; title?: string };

/** The RP monogram: upright R, italic gold P, framed by a fine ring. Pure SVG. */
export default function Monogram({ className = "", title }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <circle cx="100" cy="100" r="96" fill="none" stroke="#C5A15B" strokeOpacity="0.55" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#C5A15B" strokeOpacity="0.25" strokeWidth="0.6" strokeDasharray="1 4" />
      <text x="84" y="128" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="300" fontSize="92" fill="#F3EBDD">
        R
      </text>
      <text x="122" y="138" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="300" fontSize="92" fill="#C5A15B">
        P
      </text>
    </svg>
  );
}
