export type Service = {
  id: string;
  label: string;
  index: string;
  href: string;
  icon: "brand" | "ui" | "webflow" | "framer";
  points: string[];
};

export const servicesContent = {
  eyebrow: "My Services",
  availability: "Available Worldwide",
  contactLabel: "Contact me",
  contactHref: "mailto:hello@example.com",
  services: [
    {
      id: "brand-design",
      label: "Brand Design",
      index: "01",
      href: "#brand-design",
      icon: "brand",
      points: [
        "Typography & Color Systems",
        "Logo Design",
        "Brand Guidelines",
      ],
    },
    {
      id: "ui-ux-design",
      label: "UI/UX Design",
      index: "02",
      href: "#ui-ux-design",
      icon: "ui",
      points: [
        "Iconography",
        "Imagery & Photography Style",
        "Grid & Layout Systems",
      ],
    },
    {
      id: "webflow-dev",
      label: "Webflow Dev",
      index: "03",
      href: "#webflow-dev",
      icon: "webflow",
      points: [
        "UI Components",
        "Library Motion & Animation Guidelines",
        "Design Tokens",
      ],
    },
    {
      id: "framer-dev",
      label: "Framer Dev",
      index: "04",
      href: "#framer-dev",
      icon: "framer",
      points: [
        "Social Media Guidelines",
        "Brand Architecture",
        "Print Assets",
      ],
    },
  ] satisfies Service[],
};
