export type TechItem = {
  id: "premiere-pro" | "after-effects" | "photoshop" | "firefly";
  name: string;
  description: string;
  iconUrl: string;
};

export const techStackContent = {
  title: "Tech Stack",
  items: [
    {
      id: "premiere-pro",
      name: "Premiere Pro",
      description: "Primary timeline editing and final delivery",
      iconUrl: "/logos/tech/premiere-pro.svg",
    },
    {
      id: "after-effects",
      name: "After Effects",
      description: "Motion graphics, visual effects, and polish",
      iconUrl: "/logos/tech/after-effects.svg",
    },
    {
      id: "photoshop",
      name: "Photoshop",
      description: "Creative retouching and visual asset prep",
      iconUrl: "/logos/tech/photoshop.svg",
    },
    {
      id: "firefly",
      name: "Adobe Firefly",
      description: "AI-assisted ideation and generative visuals",
      iconUrl: "/logos/tech/firefly.svg",
    },
  ] satisfies TechItem[],
};
