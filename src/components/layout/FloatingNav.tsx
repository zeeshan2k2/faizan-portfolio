"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  FileText,
  HelpCircle,
  Home,
  Layers,
  ListChecks,
  MessageSquare,
  Route,
  Tags,
} from "lucide-react";

import { siteContent, type NavIcon } from "@/content/site";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  experience: ListChecks,
  work: Layers,
  brands: BadgeCheck,
  tech: FileText,
  services: Tags,
  process: Route,
  faq: HelpCircle,
  contact: MessageSquare,
} satisfies Record<NavIcon, typeof Home>;

export function FloatingNav() {
  const sectionIds = useMemo(
    () => siteContent.navigation.map((item) => item.href.slice(1)),
    [],
  );
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const viewportAnchor = window.innerHeight * 0.46;
      let nextActiveId = sectionIds[0] ?? "home";
      let closestDistance = Number.POSITIVE_INFINITY;
      let matchedSection = false;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;
        const distance = Math.abs(rect.top - viewportAnchor);

        if (isInView) {
          matchedSection = true;
          nextActiveId = id;
          return;
        }

        if (!matchedSection && distance < closestDistance) {
          closestDistance = distance;
          nextActiveId = id;
        }
      });

      setActiveId(nextActiveId);
    }

    function scheduleUpdate() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [sectionIds]);

  return (
    <nav
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-[400px] bg-white/10 p-1 opacity-100 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl md:block xl:right-12"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col items-center gap-2.5">
        {siteContent.navigation.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = item.href === `#${activeId}`;

          return (
            <li key={item.id}>
              <a
                href={item.href}
                aria-label={item.label}
                title={item.label}
                className={cn(
                  "group grid size-12 place-items-center rounded-full text-white transition duration-200 hover:bg-white/10",
                  isActive &&
                    "bg-white text-black shadow-[0_0_26px_rgba(255,255,255,0.18)] hover:bg-white",
                )}
              >
                <Icon
                  className={cn(
                    "size-5 stroke-[2.1] transition-transform duration-200 group-hover:scale-105",
                    isActive && "stroke-[2.4] text-black",
                  )}
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
