"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { techStackContent, type TechItem } from "@/content/tech";

function TechCard({ item }: { item: TechItem }) {
  return (
    <article className="flex h-[350px] w-[calc((100%_-_2rem)/2)] min-w-[calc((100%_-_2rem)/2)] shrink-0 flex-col items-center justify-between rounded-[24px] bg-[#151515]/90 px-7 py-11 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_70px_rgba(0,0,0,0.46)] ring-1 ring-white/[0.035] sm:h-[400px] sm:rounded-[30px] sm:px-10">
      <h3 className="font-sans text-[clamp(2.35rem,4vw,3.75rem)] font-normal leading-none tracking-[-0.045em] text-white">
        {item.name}
      </h3>

      <div className="grid size-32 place-items-center rounded-[16px] bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:size-40 sm:rounded-[20px]">
        <img
          src={item.iconUrl}
          alt={`${item.name} icon`}
          className="size-20 object-contain sm:size-24"
          loading="lazy"
        />
      </div>

      <p className="font-sans text-[clamp(1.05rem,1.6vw,1.35rem)] font-normal leading-tight tracking-[-0.035em] text-white/88">
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
      className="relative mx-auto w-full max-w-[920px] px-[30px] py-9 sm:px-10 sm:py-12 lg:py-14"
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
        className="text-center font-sans text-[clamp(3.5rem,7.5vw,6rem)] font-normal leading-none tracking-[-0.06em] text-white"
        initial={reducedMotion ? false : { opacity: 0, x: 72 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {techStackContent.title}
      </motion.h2>

      <div className="mt-14 overflow-hidden sm:mt-20">
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
