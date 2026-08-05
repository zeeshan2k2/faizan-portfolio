"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

type RevealCharacterProps = {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
};

function RevealCharacter({
  char,
  index,
  total,
  progress,
  reducedMotion,
}: RevealCharacterProps) {
  const start = total <= 1 ? 0 : (index / total) * 0.82;
  const end = Math.min(start + 0.12, 1);
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(255,255,255,0.34)", "rgba(255,255,255,0.96)"],
  );

  if (char === " ") {
    return " ";
  }

  return (
    <motion.span
      style={{ color: reducedMotion ? "rgba(255,255,255,0.96)" : color }}
    >
      {char}
    </motion.span>
  );
}

export function Experience() {
  const { experience } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 78%", "start 18%"],
  });

  const headlineCharacters = Array.from(experience.headline);
  const visibleCharacterCount = headlineCharacters.filter(
    (char) => char !== " ",
  ).length;
  let visibleIndex = 0;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[920px] px-[30px] py-9 sm:px-10 sm:py-12 lg:py-14"
      aria-labelledby="experience-heading"
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

      <div>
        <div className="mb-6 flex items-start gap-3 pt-2 text-base font-medium text-white/88 sm:float-left sm:mb-3 sm:mr-16 sm:w-[220px] sm:text-lg">
          <span className="mt-2.5 size-2 rounded-full bg-white" />
          <span>{experience.eyebrow}</span>
        </div>

        <h2
          id="experience-heading"
          className="w-full max-w-none font-sans text-[clamp(1.75rem,2.85vw,2.85rem)] font-normal leading-[1.12] tracking-[-0.01em]"
        >
          {headlineCharacters.map((char, index) => {
            const characterIndex = char === " " ? visibleIndex : visibleIndex++;

            return (
              <RevealCharacter
                key={`${char}-${index}`}
                char={char}
                index={characterIndex}
                total={visibleCharacterCount}
                progress={scrollYProgress}
                reducedMotion={reducedMotion}
              />
            );
          })}
        </h2>
        <div className="clear-both" />
      </div>

      <div className="mt-9 space-y-0 sm:mt-12">
        {experience.roles.map((role) => {
          const roleKey = `${role.title}-${role.company}-${role.date}`;
          const isActive = activeRole === roleKey;

          return (
            <button
              key={roleKey}
              type="button"
              aria-expanded={isActive}
              aria-label={`${role.title} at ${role.company}, ${role.date}. ${experience.hoverLabel}`}
              onClick={() => setActiveRole(isActive ? null : roleKey)}
              className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-6">
                <div className="min-w-0">
                  <h3 className="font-sans text-[clamp(1.35rem,1.85vw,1.8rem)] font-normal leading-none tracking-[-0.005em] text-white transition duration-300 group-hover:text-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/42 sm:text-base">
                    {role.company}
                  </p>
                </div>

                <span className="relative h-11 w-52 shrink-0 [perspective:900px] sm:h-12 sm:w-60">
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateY(180deg)]",
                      isActive && "[transform:rotateY(180deg)]",
                    )}
                  >
                    <span className="absolute inset-0 grid place-items-center rounded-full bg-white/[0.08] px-5 text-base font-medium tracking-[-0.005em] text-white/82 [backface-visibility:hidden] sm:text-lg">
                      {role.date}
                    </span>
                    <span className="absolute inset-0 grid place-items-center rounded-full bg-[var(--accent)] px-5 text-base font-semibold tracking-[-0.005em] text-black [backface-visibility:hidden] [transform:rotateY(180deg)] sm:text-lg">
                      {experience.hoverLabel}
                    </span>
                  </span>
                </span>
              </div>

              <div
                className={cn(
                  "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out",
                  isActive && "grid-rows-[1fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p
                    className={cn(
                      "max-w-2xl -translate-y-1 pb-5 text-sm leading-6 text-white/48 opacity-0 transition duration-300 sm:text-base",
                      isActive && "translate-y-0 opacity-100",
                    )}
                  >
                    {role.description}
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "h-px w-full bg-white/12 transition-colors duration-300 group-hover:bg-[var(--accent)]",
                  isActive && "bg-[var(--accent)]",
                )}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
