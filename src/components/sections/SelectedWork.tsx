"use client";

import { motion, useReducedMotion } from "framer-motion";

import { selectedWork } from "@/content/projects";

function MarqueeTitle({ reducedMotion }: { reducedMotion: boolean }) {
  const label = (
    <span className="flex items-center gap-8 px-8 sm:gap-10 sm:px-12">
      <span className="font-sans text-[clamp(3rem,7vw,5.8rem)] font-normal leading-none tracking-[-0.055em] text-white">
        {selectedWork.marqueeLabel}
      </span>
      <span className="size-7 rounded-full bg-[linear-gradient(135deg,var(--accent)_0%,#ff3b13_76%)] shadow-[0_0_32px_rgba(255,106,26,0.3)] sm:size-10" />
    </span>
  );

  return (
    <div className="overflow-hidden rounded-[24px] bg-[#151515]/88 px-0 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.42)] ring-1 ring-white/[0.035] sm:rounded-[32px] sm:py-12 lg:py-14">
      {reducedMotion ? (
        <div className="flex justify-center">{label}</div>
      ) : (
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 13, ease: "linear", repeat: Infinity }}
        >
          {label}
          {label}
          {label}
          {label}
        </motion.div>
      )}
    </div>
  );
}

export function SelectedWork() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-5xl px-[30px] py-9 sm:px-12 sm:py-14 lg:py-16"
      aria-label={selectedWork.marqueeLabel}
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

      <MarqueeTitle reducedMotion={reducedMotion} />
    </section>
  );
}
