import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border-white/10 bg-white/18 text-white shadow-[0_18px_60px_rgba(255,255,255,0.1)] hover:bg-white/22",
  secondary:
    "border-white/10 bg-black/12 text-white hover:border-white/18 hover:bg-white/[0.035]",
};

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = false,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-13 items-center justify-center rounded-full border text-base font-medium tracking-[-0.04em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:min-h-[58px] sm:text-xl",
        showArrow ? "gap-5 py-1.5 pl-7 pr-1.5 sm:pl-8" : "px-8 sm:px-12",
        variantClassNames[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.18)] sm:size-12">
          <ArrowUpRight
            className="absolute size-5 transition-transform duration-300 ease-out group-hover:translate-x-7 group-hover:-translate-y-7"
            aria-hidden="true"
          />
          <ArrowUpRight
            className="absolute size-5 -translate-x-7 translate-y-7 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
            aria-hidden="true"
          />
        </span>
      ) : null}
    </a>
  );
}
