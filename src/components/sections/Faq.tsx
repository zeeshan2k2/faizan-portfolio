"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import { faqContent } from "@/content/faq";

export function Faq() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  function toggleItem(id: string) {
    setOpenItems((current) => {
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
      id="faq"
      className="relative mx-auto w-full max-w-5xl px-[30px] py-9 sm:px-12 sm:py-14 lg:py-16"
      aria-labelledby="faq-heading"
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

      <h2
        id="faq-heading"
        className="text-center font-sans text-[clamp(4rem,9vw,7.25rem)] font-normal leading-none tracking-[-0.055em] text-white"
      >
        {faqContent.title}
      </h2>

      <div className="mt-16 sm:mt-24">
        {faqContent.items.map((item) => {
          const isOpen = openItems.has(item.id);

          return (
            <div key={item.id} className="border-b border-white/12">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-answer`}
                onClick={() => toggleItem(item.id)}
                className="group flex w-full items-start justify-between gap-6 py-8 text-left outline-none sm:gap-10 sm:py-10"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-[clamp(1.85rem,3vw,3rem)] font-normal leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-white">
                    {item.question}
                  </span>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.span
                        id={`${item.id}-answer`}
                        initial={{ height: 0, opacity: 0, y: -8 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="block overflow-hidden"
                      >
                        <span className="block max-w-2xl pt-7 font-sans text-[clamp(1.15rem,1.75vw,1.65rem)] font-medium leading-[1.35] tracking-[-0.025em] text-white/40">
                          {item.answer}
                        </span>
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </span>

                <span className="mt-1 grid size-14 shrink-0 place-items-center rounded-full border border-white/10 bg-black/20 text-white transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] sm:size-16">
                  {isOpen ? (
                    <Minus className="size-7 stroke-[2.4]" aria-hidden="true" />
                  ) : (
                    <Plus className="size-7 stroke-[2.4]" aria-hidden="true" />
                  )}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-14 text-center font-sans text-[clamp(1.1rem,1.6vw,1.45rem)] font-medium leading-tight tracking-[-0.025em] text-white/56 sm:mt-16">
        <p>{faqContent.footerQuestion}</p>
        <a
          href={faqContent.footerHref}
          className="mt-3 inline-block text-white underline decoration-white/70 underline-offset-4 transition-colors duration-300 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
        >
          {faqContent.footerLinkLabel}
        </a>
      </div>
    </section>
  );
}
