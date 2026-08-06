export type NavIcon =
  | "home"
  | "experience"
  | "work"
  | "brands"
  | "tech"
  | "services"
  | "process"
  | "faq"
  | "contact";

export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
  icon: NavIcon;
};

export type SocialIcon = "behance" | "linkedin" | "instagram" | "gmail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type ExperienceRole = {
  title: string;
  company: string;
  date: string;
  description: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: "Faizan",
    logoLabel: "FZ",
  },
  hero: {
    name: "Faizan Waheed",
    signatureName: "Faizan",
    introPrefix: "Hi, I'm",
    introName: "Faizan",
    rolePrefix: "Working as",
    roleTitle: "Videographer and Video Editor",
    supportingLine:
      "Karachi-based creative focused on high-converting ads, UGC content, social media videos, commercials, documentaries, and brand stories.",
    ctas: {
      primary: {
        label: "Get Started",
        href: "#contact",
      },
      secondary: {
        label: "View My Work",
        href: "#work",
      },
    },
    media: {
      label: "Hero media placeholder",
      status: "Hero portrait",
      src: "/images/home.png",
      alt: "Portrait for the hero section",
    },
    socials: [
      {
        label: "Behance",
        href: "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
        icon: "behance",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/faizan-waheed-787ba723b",
        icon: "linkedin",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/fw._.motion/",
        icon: "instagram",
      },
      {
        label: "Gmail",
        href: "mailto:gfaiz6896@gmail.com",
        icon: "gmail",
      },
    ] satisfies SocialLink[],
  },
  availability: {
    text: "Available for 3 projects",
    status: "available",
  },
  location: {
    line1: "Karachi, Sindh",
    line2: "Pakistan",
  },
  experience: {
    eyebrow: "Experiences",
    headline:
      "Faizan brings 3+ years of filming editing color grading sound design and motion graphics into stories that convert",
    hoverLabel: "View Details",
    roles: [
      {
        title: "Video Editor",
        company: "The Shutters Freak",
        date: "May 2026 - Jul 2026",
        description:
          "Produced commercial video content for social media, advertising campaigns, and corporate events while handling filming, editing, color correction, sound design, and motion graphics.",
        href: "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
      },
      {
        title: "AI Video Editor",
        company: "Talent Bridge Consulting",
        date: "Sep 2025 - Dec 2025",
        description:
          "Created AI-powered UGC ads and marketing videos by combining AI tools with traditional editing for fast, conversion-focused short-form content.",
        href: "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
      },
      {
        title: "Videographer",
        company: "Daamin Estate & Builder",
        date: "Mar 2025 - Present",
        description:
          "Captured commercial, documentary, and event footage, then edited raw material into polished final cuts with color correction, audio enhancement, and visual effects.",
        href: "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
      },
      {
        title: "Video Editor",
        company: "Showcase Phoenix LLC",
        date: "Apr 2025 - Jun 2025",
        description:
          "Worked with international clients remotely, managing multiple projects and organized asset workflows while delivering polished video edits on tight deadlines.",
        href: "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
      },
      {
        title: "Senior Video Editor",
        company: "BAA UL ILM Studios",
        date: "2023 - 2025",
        description:
          "Edited commercials, promotional campaigns, and social content with strong storytelling, pacing, color grading, and visual/audio balance across multiple clients.",
        href: "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
      },
    ] satisfies ExperienceRole[],
  },
  navigation: [
    {
      id: "home",
      label: "Home",
      href: "#home",
      icon: "home",
    },
    {
      id: "experience",
      label: "Experience",
      href: "#experience",
      icon: "experience",
    },
    {
      id: "work",
      label: "Selected work",
      href: "#work",
      icon: "work",
    },
    {
      id: "services",
      label: "Services",
      href: "#services",
      icon: "services",
    },
    {
      id: "tech-stack",
      label: "Tech stack",
      href: "#tech-stack",
      icon: "tech",
    },
    {
      id: "brands",
      label: "Brands",
      href: "#brands",
      icon: "brands",
    },
    {
      id: "process",
      label: "Process",
      href: "#process",
      icon: "process",
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      icon: "contact",
    },
    {
      id: "faq",
      label: "FAQ",
      href: "#faq",
      icon: "faq",
    },
  ] satisfies NavItem[],
};
