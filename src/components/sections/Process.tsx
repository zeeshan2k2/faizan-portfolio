"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brush, Crop, Pen } from "lucide-react";

import { processContent, type ProcessStep } from "@/content/process";

const processIconMap = {
  brief: Pen,
  wireframe: Crop,
  design: Brush,
} satisfies Record<ProcessStep["icon"], typeof Pen>;

function ProcessCard({ step }: { step: ProcessStep }) {
  const Icon = processIconMap[step.icon];

  return (
    <article className="relative overflow-hidden rounded-[18px] bg-[#151515]/90 px-7 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_22px_66px_rgba(0,0,0,0.44)] ring-1 ring-white/[0.045] sm:rounded-[20px] sm:px-12 sm:py-12 lg:px-14">
      <div className="flex flex-col gap-10 sm:min-h-[250px] sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.055] px-4 py-2 font-sans text-sm font-medium leading-none tracking-[-0.015em] text-white/72 sm:text-base">
              <span className="size-1.5 rounded-full bg-white/70" aria-hidden="true" />
              {step.step}
            </span>
          </div>

          <div className="mt-12 sm:mt-14">
            <h3 className="font-sans text-[clamp(2.25rem,4.2vw,3.8rem)] font-normal leading-none tracking-[-0.04em] text-white">
              {step.title}
            </h3>
            <p className="mt-6 max-w-xl font-sans text-[clamp(1rem,1.45vw,1.35rem)] font-medium leading-tight tracking-[-0.02em] text-white/62">
              {step.description}
            </p>
          </div>
        </div>

        <div className="grid size-36 shrink-0 place-items-center self-end rounded-full bg-black shadow-[inset_0_0_0_2px_rgba(255,255,255,0.035),0_18px_48px_rgba(0,0,0,0.45)] sm:size-44 sm:self-center lg:size-52">
          <Icon
            className="size-16 stroke-[2.2] text-[var(--accent)] drop-shadow-[0_0_16px_rgba(255,106,26,0.42)] sm:size-20 lg:size-24"
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}

export function Process() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      id="process"
      className="relative mx-auto w-full max-w-5xl px-[30px] py-9 sm:px-12 sm:py-14 lg:py-16"
      aria-labelledby="process-heading"
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
        id="process-heading"
        className="text-center font-sans text-[clamp(4rem,8vw,6.8rem)] font-normal leading-none tracking-[-0.055em] text-white"
        initial={reducedMotion ? false : { opacity: 0, x: 72 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {processContent.title}
      </motion.h2>

      <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-10">
        {processContent.steps.map((step) => (
          <ProcessCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
