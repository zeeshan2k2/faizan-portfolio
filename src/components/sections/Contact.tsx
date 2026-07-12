"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { contactContent } from "@/content/contact";

export function Contact() {
  const [selectedBudget, setSelectedBudget] = useState(contactContent.budgets[0]);

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-5xl px-[30px] py-9 sm:px-12 sm:py-14 lg:py-16"
      aria-labelledby="contact-heading"
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

      <div className="rounded-[28px] bg-[#151515]/90 px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_26px_80px_rgba(0,0,0,0.48)] ring-1 ring-white/[0.045] sm:rounded-[34px] sm:px-14 sm:py-16 lg:px-16 lg:py-20">
        <div className="flex items-center gap-3 text-base font-medium tracking-[-0.01em] text-white/82 sm:text-lg">
          <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
          <span>{contactContent.eyebrow}</span>
        </div>

        <h2
          id="contact-heading"
          className="mt-6 font-sans text-[clamp(3.8rem,8vw,7.2rem)] font-normal leading-[0.92] tracking-[-0.06em] text-white"
        >
          {contactContent.title}
        </h2>

        <form
          className="mt-16 max-w-4xl"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="space-y-10 sm:space-y-12">
            <label className="block">
              <span className="block font-sans text-[clamp(1.25rem,2vw,1.8rem)] font-medium leading-none tracking-[-0.025em] text-white/92">
                {contactContent.fields.email.label}
              </span>
              <input
                type="email"
                name="email"
                placeholder={contactContent.fields.email.placeholder}
                className="mt-5 w-full border-0 border-b border-white/12 bg-transparent pb-3 font-sans text-xl font-medium tracking-[-0.02em] text-white outline-none transition-colors placeholder:text-white/24 focus:border-[var(--accent)] sm:text-2xl"
              />
            </label>

            <label className="block">
              <span className="block font-sans text-[clamp(1.25rem,2vw,1.8rem)] font-medium leading-none tracking-[-0.025em] text-white/92">
                {contactContent.fields.phone.label}
              </span>
              <input
                type="tel"
                name="phone"
                placeholder={contactContent.fields.phone.placeholder}
                className="mt-5 w-full border-0 border-b border-white/12 bg-transparent pb-3 font-sans text-xl font-medium tracking-[-0.02em] text-white outline-none transition-colors placeholder:text-white/24 focus:border-[var(--accent)] sm:text-2xl"
              />
            </label>

            <label className="block">
              <span className="block font-sans text-[clamp(1.25rem,2vw,1.8rem)] font-medium leading-none tracking-[-0.025em] text-white/92">
                {contactContent.fields.message.label}
              </span>
              <textarea
                name="message"
                rows={4}
                className="mt-5 min-h-32 w-full resize-y border-0 border-b border-white/12 bg-transparent pb-3 font-sans text-xl font-medium tracking-[-0.02em] text-white outline-none transition-colors placeholder:text-white/24 focus:border-[var(--accent)] sm:text-2xl"
              />
            </label>
          </div>

          <fieldset className="mt-12">
            <legend className="font-sans text-[clamp(1.25rem,2vw,1.65rem)] font-semibold leading-none tracking-[-0.025em] text-white/80">
              {contactContent.budgetLabel}
            </legend>

            <div className="mt-7 flex max-w-3xl flex-wrap gap-4">
              {contactContent.budgets.map((budget) => {
                const isSelected = selectedBudget === budget;

                return (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`rounded-full border px-6 py-3 font-sans text-lg font-semibold leading-none tracking-[-0.02em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
                      isSelected
                        ? "border-white/28 bg-white/[0.08] text-white"
                        : "border-white/12 bg-transparent text-white/72 hover:border-[var(--accent)] hover:text-white"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {budget}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            className="group mt-20 inline-flex h-16 w-full max-w-sm items-center justify-between rounded-full bg-white py-1 pl-9 pr-1 font-sans text-black transition duration-300 hover:shadow-[0_0_44px_rgba(255,255,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:h-[72px] sm:max-w-md"
          >
            <span className="text-[1.45rem] font-normal leading-none tracking-[-0.025em] transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-[1.75rem]">
              {contactContent.submitLabel}
            </span>
            <span className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-black text-white transition-colors duration-300 group-hover:text-[var(--accent)] sm:size-16">
              <ArrowUpRight
                className="absolute size-6 stroke-current transition-all duration-300 ease-out group-hover:translate-x-14 group-hover:-translate-y-14 sm:size-7 sm:group-hover:translate-x-16 sm:group-hover:-translate-y-16"
                aria-hidden="true"
              />
              <ArrowUpRight
                className="absolute size-6 -translate-x-14 translate-y-14 stroke-current transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 sm:size-7 sm:-translate-x-16 sm:translate-y-16"
                aria-hidden="true"
              />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
