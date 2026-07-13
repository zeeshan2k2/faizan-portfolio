"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { selectedWork } from "@/content/projects";
import {
  workCategories,
  type WorkCategory,
  type WorkGroup,
} from "@/content/work";

const layoutMap = {
  "portrait-cluster": [
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
  ],
  "mixed-feature": [
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-3 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
  ],
  "cinematic-stack": [
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-3 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-3 row-span-1",
  ],
  "wide-stack": ["col-span-3 row-span-1", "col-span-3 row-span-1"],
} satisfies Record<WorkGroup["layout"], string[]>;

function WorkPlaceholderGrid({ group }: { group: WorkGroup }) {
  return (
    <div className="mt-6 grid grid-cols-3 auto-rows-[64px] gap-3 sm:auto-rows-[92px] sm:gap-4 lg:auto-rows-[112px]">
      {layoutMap[group.layout].map((className, index) => (
        <div
          key={`${group.id}-${index}`}
          className={`rounded-[8px] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] ${className}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function WorkGroupBlock({ group }: { group: WorkGroup }) {
  return (
    <div id={group.id} className="scroll-mt-28">
      <h4 className="font-sans text-[clamp(1.9rem,3.4vw,3.25rem)] font-semibold italic leading-none tracking-[-0.035em] text-white">
        {group.title}
      </h4>
      <p className="mt-3 max-w-2xl font-sans text-base font-medium leading-tight tracking-[-0.02em] text-white/58 sm:text-lg">
        {group.description}
      </p>
      <WorkPlaceholderGrid group={group} />
    </div>
  );
}

function WorkCategoryDetails({ category }: { category: WorkCategory }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, y: -16 }}
      animate={{ height: "auto", opacity: 1, y: 0 }}
      exit={{ height: 0, opacity: 0, y: -16 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="rounded-[22px] bg-[#101010]/76 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_60px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.035] sm:rounded-[28px] sm:p-7">
        <div className="space-y-12 sm:space-y-16">
          {category.groups.map((group) => (
            <WorkGroupBlock key={group.id} group={group} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function WorkCategoryCard({
  category,
  isOpen,
  onToggle,
}: {
  category: WorkCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="group relative h-[360px] overflow-hidden rounded-[24px] bg-[#101010] shadow-[0_22px_72px_rgba(0,0,0,0.56)] sm:h-[420px] sm:rounded-[30px] lg:h-[460px]"
      aria-label={category.title}
    >
      <Image
        src={category.image.src}
        alt={category.image.alt}
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
              {category.label}
            </p>
            <h3 className="mt-2 truncate font-sans text-[clamp(2rem,4.1vw,3.6rem)] font-normal leading-none tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
              {category.title}
            </h3>
            <p className="mt-3 line-clamp-2 max-w-2xl font-sans text-base font-medium leading-tight tracking-[-0.02em] text-white/52 sm:text-lg">
              {category.description}
            </p>
            <span className="mt-5 inline-flex rounded-full bg-white/[0.1] px-6 py-2.5 font-sans text-base font-medium leading-none text-white/86 sm:text-lg">
              {category.cta}
            </span>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`${category.id}-details`}
            aria-label={`${isOpen ? "Hide" : "View"} ${category.title}`}
            title={`${isOpen ? "Hide" : "View"} ${category.title}`}
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
          </button>
        </div>
      </div>
    </article>
  );
}

function MarqueeTitle({ reducedMotion }: { reducedMotion: boolean }) {
  const label = (
    <span className="flex items-center gap-7 px-7 sm:gap-9 sm:px-10">
      <span className="font-sans text-[clamp(2.75rem,6vw,5rem)] font-normal leading-none tracking-[-0.055em] text-white">
        {selectedWork.marqueeLabel}
      </span>
      <span className="size-7 rounded-full bg-[linear-gradient(135deg,var(--accent)_0%,#ff3b13_76%)] shadow-[0_0_32px_rgba(255,106,26,0.3)] sm:size-10" />
    </span>
  );

  return (
    <div className="overflow-hidden rounded-[24px] bg-[#151515]/88 px-0 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.42)] ring-1 ring-white/[0.035] sm:rounded-[30px] sm:py-10 lg:py-12">
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
  const [openCategoryId, setOpenCategoryId] = useState<WorkCategory["id"] | null>(
    null,
  );
  const categoryRefs = useRef<Map<WorkCategory["id"], HTMLDivElement>>(
    new Map(),
  );
  const pendingAnchorRef = useRef<{
    id: WorkCategory["id"];
    top: number;
  } | null>(null);

  useLayoutEffect(() => {
    const pendingAnchor = pendingAnchorRef.current;

    if (!pendingAnchor) {
      return;
    }

    pendingAnchorRef.current = null;

    const keepAnchored = () => {
      const categoryElement = categoryRefs.current.get(pendingAnchor.id);

      if (!categoryElement) {
        return;
      }

      const nextTop = categoryElement.getBoundingClientRect().top;
      const delta = nextTop - pendingAnchor.top;

      if (Math.abs(delta) > 0.5) {
        window.scrollBy(0, delta);
      }
    };

    keepAnchored();

    if (reducedMotion) {
      return;
    }

    const startTime = performance.now();
    const duration = 520;
    let animationFrame = 0;

    const keepAnchoredDuringAnimation = (now: number) => {
      keepAnchored();

      if (now - startTime < duration) {
        animationFrame = window.requestAnimationFrame(
          keepAnchoredDuringAnimation,
        );
      }
    };

    animationFrame = window.requestAnimationFrame(keepAnchoredDuringAnimation);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [openCategoryId, reducedMotion]);

  function toggleCategory(categoryId: WorkCategory["id"]) {
    const categoryElement = categoryRefs.current.get(categoryId);

    if (categoryElement) {
      pendingAnchorRef.current = {
        id: categoryId,
        top: categoryElement.getBoundingClientRect().top,
      };
    }

    setOpenCategoryId((currentId) =>
      currentId === categoryId ? null : categoryId,
    );
  }

  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-[920px] px-[30px] py-9 sm:px-10 sm:py-12 lg:py-14"
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

      <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-7 lg:mt-16">
        {workCategories.map((category) => {
          const isOpen = openCategoryId === category.id;

          return (
            <div
              key={category.id}
              ref={(node) => {
                if (node) {
                  categoryRefs.current.set(category.id, node);
                } else {
                  categoryRefs.current.delete(category.id);
                }
              }}
              className="space-y-6 sm:space-y-8"
            >
              <WorkCategoryCard
                category={category}
                isOpen={isOpen}
                onToggle={() => toggleCategory(category.id)}
              />
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <div id={`${category.id}-details`}>
                    <WorkCategoryDetails category={category} />
                  </div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
