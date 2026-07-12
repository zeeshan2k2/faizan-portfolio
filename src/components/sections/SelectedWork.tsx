"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { selectedWork, type Project } from "@/content/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative h-[420px] overflow-hidden rounded-[24px] bg-[#101010] shadow-[0_22px_72px_rgba(0,0,0,0.56)] sm:h-[500px] sm:rounded-[32px] lg:h-[540px]"
      aria-label={project.title}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 1024px"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.04)_46%,rgba(0,0,0,0.68)_100%)]" />

      <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/8 bg-black/58 p-4 shadow-[0_18px_56px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:rounded-[26px] sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <p className="font-sans text-lg font-medium tracking-[-0.02em] text-white/58 sm:text-xl">
              {project.category}
            </p>
            <h3 className="mt-2 truncate font-sans text-[clamp(2rem,4.1vw,3.6rem)] font-normal leading-none tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
              {project.title}
            </h3>
            <span className="mt-5 inline-flex rounded-full bg-white/[0.1] px-6 py-2.5 font-sans text-base font-medium leading-none text-white/86 sm:text-lg">
              {project.date}
            </span>
          </div>

          <a
            href={project.href}
            aria-label={`View ${project.title}`}
            title={`View ${project.title}`}
            className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-[20px] border border-white/22 bg-black/12 transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_34px_rgba(255,106,26,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:size-24 sm:rounded-[26px]"
          >
            <ArrowUpRight
              className="absolute size-8 transform-gpu stroke-white transition-all duration-300 ease-out group-hover:translate-x-16 group-hover:-translate-y-16 group-hover:stroke-[var(--accent)] sm:size-12 sm:group-hover:translate-x-24 sm:group-hover:-translate-y-24"
              aria-hidden="true"
            />
            <ArrowUpRight
              className="absolute size-8 -translate-x-16 translate-y-16 transform-gpu stroke-white transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:stroke-[var(--accent)] sm:size-12 sm:-translate-x-24 sm:translate-y-24"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

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

      <div className="mt-14 space-y-6 sm:mt-16 sm:space-y-8 lg:mt-20">
        {selectedWork.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
