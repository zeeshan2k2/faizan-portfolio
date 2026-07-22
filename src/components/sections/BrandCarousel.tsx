"use client";

import { motion, useReducedMotion } from "framer-motion";

import { brandCarouselContent, type BrandItem } from "@/content/brands";
import { cn } from "@/lib/utils";

function BrandLogo({ item }: { item: BrandItem }) {
  return (
    <div
      className={cn(
        "flex h-36 min-w-[180px] items-center justify-center px-4 sm:h-44 sm:min-w-[220px] sm:px-5",
        item.wrapperClassName,
      )}
    >
      <img
        src={item.logo}
        alt={`${item.name} logo`}
        className={cn(
          "max-h-20 max-w-[170px] object-contain opacity-90 transition duration-300 [filter:brightness(0)_invert(1)] hover:opacity-100 sm:max-h-24 sm:max-w-[210px]",
          item.logoClassName,
        )}
        loading="lazy"
      />
    </div>
  );
}

export function BrandCarousel() {
  const reducedMotion = Boolean(useReducedMotion());
  const items = brandCarouselContent.items;
  const loopItems = [...items, ...items];

  return (
    <section
      id="brands"
      className="relative mx-auto flex min-h-[320px] w-full max-w-[920px] flex-col justify-center px-[30px] py-9 sm:min-h-[380px] sm:px-10 sm:py-12 lg:min-h-[420px] lg:py-14"
      aria-label={brandCarouselContent.label}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-[var(--line)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[var(--line)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute bottom-0 left-[calc(50%-520px)] size-2 bg-white/55" />
        <div className="absolute bottom-0 right-[calc(50%-520px)] size-2 bg-white/55" />
      </div>

      <p className="mx-auto flex items-center gap-3 font-sans text-[clamp(1rem,1.4vw,1.2rem)] leading-none tracking-[-0.025em] text-white/80">
        <span className="size-2 rounded-full bg-white/90" aria-hidden="true" />
        {brandCarouselContent.label}
      </p>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_9%,black_91%,transparent_100%)] sm:mt-[4.5rem]">
        <motion.div
          className="flex w-max items-center gap-5 sm:gap-7"
          animate={reducedMotion ? undefined : { x: "-50%" }}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 18,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {loopItems.map((item, index) => (
            <BrandLogo key={`${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
