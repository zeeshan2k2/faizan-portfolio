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

export type SocialIcon = "code" | "profile" | "gallery" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type ExperienceRole = {
  title: string;
  date: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: "Faizan",
    logoLabel: "FZ",
  },
  hero: {
    name: "Faizan",
    signatureName: "Faizan",
    introPrefix: "Hi, I'm",
    introName: "Faizan",
    rolePrefix: "Working as",
    roleTitle: "Web-designer and Developer",
    supportingLine: "Available for focused product, portfolio, and brand-led web builds.",
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
        label: "GitHub",
        href: "https://github.com/",
        icon: "code",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: "profile",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: "gallery",
      },
      {
        label: "Email",
        href: "mailto:hello@example.com",
        icon: "mail",
      },
    ] satisfies SocialLink[],
  },
  availability: {
    text: "Available for 3 projects",
    status: "available",
  },
  location: {
    line1: "San Francisco, CA",
    line2: "USA",
  },
  experience: {
    eyebrow: "Experiences",
    headline:
      "Faizan offers more than just a website it's a digital space designed to reflect your unique style inspiration",
    hoverLabel: "Visit Framer",
    roles: [
      {
        title: "Product Designer",
        date: "2023 - Present",
        href: "https://www.framer.com/",
      },
      {
        title: "UI/UX Designer",
        date: "2022 - 2023",
        href: "https://www.framer.com/",
      },
      {
        title: "Intern UI Designer",
        date: "2020 - 2021",
        href: "https://www.framer.com/",
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
