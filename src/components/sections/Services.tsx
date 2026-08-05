"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Aperture,
  Camera,
  Clapperboard,
  Globe2,
  ImagePlay,
  Megaphone,
  SlidersHorizontal,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { servicesContent, type Service } from "@/content/services";

const serviceIconMap = {
  videography: Clapperboard,
  editing: ImagePlay,
  ugc: Aperture,
  ads: Megaphone,
  grading: SlidersHorizontal,
  photography: Camera,
} satisfies Record<Service["icon"], typeof Clapperboard>;

export function Services() {
  const [openServices, setOpenServices] = useState<Set<string>>(new Set());
  const reducedMotion = Boolean(useReducedMotion());

  function toggleService(id: string) {
    setOpenServices((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-[920px] px-[30px] py-9 sm:px-10 sm:py-12 lg:py-14"
      aria-labelledby="services-heading"
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

      <div className="rounded-[24px] bg-[#151515]/88 px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_26px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.035] sm:rounded-[30px] sm:px-10 sm:py-11 lg:px-14 lg:py-14">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
        >
        <div className="flex items-center gap-3 text-base font-medium tracking-[-0.01em] text-white/82 sm:text-xl">
          <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
          <span>{servicesContent.eyebrow}</span>
        </div>

        <div
          id="services-heading"
          className="mt-14 space-y-7 sm:mt-[4.5rem] sm:space-y-9 lg:mt-20 lg:space-y-10"
        >
          {servicesContent.services.map((service) => {
            const isOpen = openServices.has(service.id);
            const Icon = serviceIconMap[service.icon];

            return (
              <div key={service.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${service.id}-details`}
                  onClick={() => toggleService(service.id)}
                  className="group flex w-full items-center rounded-[18px] text-left outline-none transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[var(--accent)]"
                >
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{
                      width: isOpen ? 56 : 0,
                      marginRight: isOpen ? 24 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.34, ease: "easeOut" }}
                    className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-[13px] bg-[linear-gradient(135deg,#8c2608_0%,var(--accent)_72%)] text-white shadow-[0_16px_40px_rgba(255,106,26,0.18)]"
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </motion.span>

                  <span className="min-w-0 truncate font-sans text-[clamp(3rem,7vw,6.25rem)] font-normal leading-[0.86] tracking-[-0.055em] text-white/30 transition-colors duration-300 group-hover:text-white/72">
                    {service.label}
                    <span className="relative -top-[2.92em] ml-3 inline-block text-[0.18em] font-medium leading-none tracking-[-0.03em] text-white/30 transition-colors duration-300 group-hover:text-[var(--accent)]">
                      [{service.index}]
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.ul
                      id={`${service.id}-details`}
                      initial={{ height: 0, opacity: 0, y: -8 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                      className="ml-0 mt-6 overflow-hidden space-y-4 text-base font-medium leading-none tracking-[-0.02em] text-white/62 sm:ml-20 sm:text-lg"
                    >
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-4">
                          <span className="size-1 bg-white/82" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-6 text-base font-medium tracking-[-0.03em] text-white/55 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:text-lg">
          <div className="flex items-center gap-4">
            <Globe2 className="size-7 text-white/72" aria-hidden="true" />
            <span>{servicesContent.availability}</span>
          </div>

          <a
            href={servicesContent.contactHref}
            className="group inline-flex items-center gap-3 self-start text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:self-auto"
          >
            <span className="text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
              {servicesContent.contactLabel}
            </span>
            <span className="relative grid size-8 place-items-center overflow-hidden text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
              <ArrowUpRight
                className="absolute size-7 stroke-current transition-all duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
                aria-hidden="true"
              />
              <ArrowUpRight
                className="absolute size-7 -translate-x-8 translate-y-8 stroke-current transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
