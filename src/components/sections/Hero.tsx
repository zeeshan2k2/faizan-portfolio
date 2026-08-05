"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import NextImage from "next/image";
import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBehance, SiGmail, SiInstagram } from "react-icons/si";

import { siteContent, type SocialIcon } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const socialIconMap = {
  behance: SiBehance,
  linkedin: FaLinkedinIn,
  instagram: SiInstagram,
  gmail: SiGmail,
} satisfies Record<SocialIcon, IconType>;


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0 },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = siteContent;
  const transition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-80px)] items-start justify-center px-0 pb-12 pt-8 sm:min-h-[calc(100svh-112px)] sm:pb-14 sm:pt-12 lg:pt-14"
      aria-label="Hero"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute bottom-0 left-[calc(50%-520px)] size-2 bg-white/55" />
        <div className="absolute bottom-0 right-[calc(50%-520px)] size-2 bg-white/55" />
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-[860px] flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.11 }}
      >
        <motion.div
          variants={fadeUp}
          transition={transition}
          className="relative w-[min(84vw,480px)] sm:w-[min(60vw,500px)] lg:w-[min(48vw,500px)]"
        >
          <div className="relative h-[clamp(280px,38svh,340px)] overflow-hidden rounded-[22px] bg-[#100a08] shadow-[0_28px_96px_rgba(0,0,0,0.58)] sm:h-[clamp(350px,50svh,500px)] sm:rounded-[28px] lg:h-[clamp(370px,52svh,520px)]">
            <NextImage
              src={hero.media.src}
              alt={hero.media.alt}
              fill
              priority
              sizes="(max-width: 640px) 84vw, (max-width: 1024px) 60vw, 500px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.04)_42%,rgba(0,0,0,0.26)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/76 via-black/12 to-transparent" />
          </div>

          <motion.h1
            variants={fadeFromLeft}
            transition={transition}
            className={cn(
              "signature-font pointer-events-none absolute inset-x-0 bottom-0 mx-auto translate-y-1/2 text-center text-[clamp(4rem,15vw,8rem)] font-normal leading-none text-white drop-shadow-[0_18px_34px_rgba(0,0,0,0.62)]",
            )}
          >
            {hero.signatureName}
          </motion.h1>
        </motion.div>

        <motion.div
          variants={fadeFromRight}
          transition={transition}
          className="mt-[4.5rem] max-w-2xl sm:mt-20"
        >
          <p className="font-sans text-balance text-2xl font-normal leading-snug tracking-[0.01em] text-white/58 sm:text-[1.7rem] lg:text-[2rem]">
            {hero.introPrefix}{" "}
            <span className="text-white">{hero.introName}</span>,
            <br />
            {hero.rolePrefix}{" "}
            <span className="text-white">{hero.roleTitle}</span>
          </p>
          <p className="mx-auto mt-4 hidden max-w-xl text-pretty text-sm leading-6 text-[var(--muted)] sm:block sm:text-base">
            {hero.supportingLine}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={transition}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          {hero.socials.map((social) => {
            const Icon = socialIconMap[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/95 transition duration-200 hover:border-white/24 hover:bg-white/[0.1] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                <Icon className="size-[22px]" aria-hidden="true" />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={transition}
          className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row"
        >
          <Button
            href={hero.ctas.primary.href}
            showArrow
            className="w-full max-w-[240px] justify-between sm:w-auto sm:min-w-[240px]"
          >
            {hero.ctas.primary.label}
          </Button>
          <Button
            href={hero.ctas.secondary.href}
            variant="secondary"
            className="w-full max-w-[250px] sm:w-auto sm:min-w-[250px]"
          >
            {hero.ctas.secondary.label}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
