import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "solid" | "ghost";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

/** Luxury CTA: on hover a gold fill wipes in from the left. */
export default function ArrowLink({ href, children, variant = "solid", className = "" }: ArrowLinkProps) {
  const base =
    "group relative isolate inline-flex min-h-12 items-center gap-3 overflow-hidden px-7 py-3.5 eyebrow transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "border border-cream/70 text-cream hover:text-burgundy hover:border-gold"
      : "border border-line text-cream-muted hover:text-cream hover:border-gold/60";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {variant === "solid" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-(--ease-luxe) group-hover:scale-x-100"
        />
      )}
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </a>
  );
}
