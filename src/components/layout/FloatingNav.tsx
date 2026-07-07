import {
  FileText,
  Home,
  Layers,
  ListChecks,
  Mail,
  MessageSquare,
  Tags,
  UserRound,
} from "lucide-react";

import { siteContent, type NavIcon } from "@/content/site";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  experience: ListChecks,
  work: Layers,
  about: UserRound,
  tech: FileText,
  services: Tags,
  contact: MessageSquare,
  email: Mail,
} satisfies Record<NavIcon, typeof Home>;

type FloatingNavProps = {
  activeId?: string;
};

export function FloatingNav({ activeId = "home" }: FloatingNavProps) {
  return (
    <nav
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-[400px] bg-white/10 p-1 opacity-100 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl md:block xl:right-12"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col items-center gap-2.5">
        {siteContent.navigation.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = item.id === activeId;

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
