"use client";

import { motion, useReducedMotion } from "framer-motion";

import { brandCarouselContent, type BrandItem } from "@/content/brands";

function BrandMark({ mark }: { mark: BrandItem["mark"] }) {
  if (mark === "shield") {
    return (
      <svg className="size-12" viewBox="0 0 56 56" aria-hidden="true">
        <path d="M8 10h40v18c0 10.5-7.8 19.7-20 23.5C15.8 47.7 8 38.5 8 28V10Z" fill="currentColor" />
        <path d="M8 28h40L28 51.5 8 28Z" fill="black" fillOpacity="0.52" />
      </svg>
    );
  }

  if (mark === "split") {
    return (
      <svg className="size-12" viewBox="0 0 56 56" aria-hidden="true">
        <path d="M8 8h40v40H8V8Z" fill="currentColor" />
        <path d="M28 8a20 20 0 0 1 0 40V8Z" fill="black" fillOpacity="0.58" />
      </svg>
    );
  }

  if (mark === "diamond") {
    return (
      <svg className="size-12" viewBox="0 0 56 56" aria-hidden="true">
        <path d="M28 4 52 28 28 52 4 28 28 4Z" fill="currentColor" />
        <path d="M28 4v48L4 28 28 4Z" fill="black" fillOpacity="0.5" />
      </svg>
    );
  }

  if (mark === "rings") {
    return (
      <svg className="h-12 w-20" viewBox="0 0 80 48" aria-hidden="true">
        <rect x="4" y="10" width="34" height="28" rx="14" fill="currentColor" />
        <rect x="42" y="10" width="34" height="28" rx="14" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg className="h-12 w-16" viewBox="0 0 72 48" aria-hidden="true">
      <rect x="4" y="12" width="44" height="24" rx="12" fill="currentColor" />
      <circle cx="56" cy="24" r="12" fill="currentColor" />
    </svg>
  );
}

function BrandLogo({ item }: { item: BrandItem }) {
  return (
    <div className="flex min-w-max items-center gap-4 px-5 text-white/92 sm:px-6">
      <BrandMark mark={item.mark} />
      <span className="font-sans text-[clamp(2.6rem,4.4vw,4.6rem)] font-bold leading-none tracking-[-0.08em]">
        {item.name}
      </span>
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
      className="relative mx-auto flex min-h-[360px] w-full max-w-5xl flex-col justify-center px-[30px] py-9 sm:min-h-[430px] sm:px-12 sm:py-14 lg:min-h-[480px] lg:py-16"
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

      <p className="mx-auto flex items-center gap-3 font-sans text-[clamp(1rem,1.6vw,1.35rem)] leading-none tracking-[-0.025em] text-white/80">
        <span className="size-2 rounded-full bg-white/90" aria-hidden="true" />
        {brandCarouselContent.label}
      </p>

      <div className="relative mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_9%,black_91%,transparent_100%)] sm:mt-24">
        <motion.div
          className="flex w-max items-center gap-4 sm:gap-6"
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
