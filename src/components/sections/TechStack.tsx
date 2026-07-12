"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { techStackContent, type TechItem } from "@/content/tech";

function FramerIcon() {
  return (
    <svg
      aria-label="Framer icon"
      className="size-24 sm:size-28"
      viewBox="0 0 120 120"
      role="img"
    >
      <path d="M34 22h54v28H61L34 22Z" fill="#55D7F8" />
      <path d="M34 50h54L61 78H34V50Z" fill="#0997FF" />
      <path d="M34 78h27v28L34 78Z" fill="#075CFB" />
    </svg>
  );
}

function TechCard({ item }: { item: TechItem }) {
  return (
    <article className="flex h-[410px] w-[calc((100%_-_2rem)/2)] min-w-[calc((100%_-_2rem)/2)] shrink-0 flex-col items-center justify-between rounded-[28px] bg-[#151515]/90 px-8 py-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_70px_rgba(0,0,0,0.46)] ring-1 ring-white/[0.035] sm:h-[470px] sm:rounded-[34px] sm:px-12">
      <h3 className="font-sans text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-none tracking-[-0.045em] text-white">
        {item.name}
      </h3>

      <div className="grid size-40 place-items-center rounded-[18px] bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:size-48 sm:rounded-[22px]">
        {item.id === "framer" ? (
          <FramerIcon />
        ) : (
          <img
            src={item.iconUrl}
            alt={`${item.name} icon`}
            className="size-24 object-contain sm:size-28"
            loading="lazy"
          />
        )}
      </div>

      <p className="font-sans text-[clamp(1.15rem,2vw,1.7rem)] font-normal leading-tight tracking-[-0.035em] text-white/88">
        {item.description}
      </p>
    </article>
  );
}

export function TechStack() {
  const reducedMotion = Boolean(useReducedMotion());
  const items = techStackContent.items;
  const loopItems = [...items, ...items.slice(0, 2)];
  const [activeIndex, setActiveIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setWithTransition(true);
      setActiveIndex((current) => current + 1);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  function handleTransitionEnd() {
    if (activeIndex < items.length) {
      return;
    }

    setWithTransition(false);
    setActiveIndex(0);
  }

  return (
    <section
      id="tech-stack"
      className="relative mx-auto w-full max-w-5xl px-[30px] py-9 sm:px-12 sm:py-14 lg:py-16"
      aria-labelledby="tech-stack-heading"
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

      <motion.h2
        id="tech-stack-heading"
        className="text-center font-sans text-[clamp(4rem,9vw,7.25rem)] font-normal leading-none tracking-[-0.06em] text-white"
        initial={reducedMotion ? false : { opacity: 0, x: 72 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {techStackContent.title}
      </motion.h2>

      <div className="mt-20 overflow-hidden sm:mt-28">
        <motion.div
          className="flex gap-8"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: `calc(-${activeIndex} * (50% + 1rem))`,
                }
          }
          transition={
            withTransition
              ? { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0 }
          }
          onAnimationComplete={handleTransitionEnd}
        >
          {(reducedMotion ? items : loopItems).map((item, index) => (
            <TechCard key={`${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
