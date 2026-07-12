export type TechItem = {
  id: "slack" | "figma" | "framer" | "loom";
  name: string;
  description: string;
  iconUrl: string;
};

export const techStackContent = {
  title: "Tech Stack",
  items: [
    {
      id: "slack",
      name: "Slack",
      description: "Smart messaging for modern teams",
      iconUrl: "https://api.iconify.design/logos:slack-icon.svg",
    },
    {
      id: "figma",
      name: "Figma",
      description: "Leading collaborative design tool",
      iconUrl: "https://api.iconify.design/logos:figma.svg",
    },
    {
      id: "framer",
      name: "Framer",
      description: "Design and ship interactive sites",
      iconUrl: "https://api.iconify.design/simple-icons:framer.svg?color=%23ffffff",
    },
    {
      id: "loom",
      name: "Loom",
      description: "Instantly share video messages",
      iconUrl: "https://api.iconify.design/simple-icons:loom.svg?color=%23f59e0b",
    },
  ] satisfies TechItem[],
};
