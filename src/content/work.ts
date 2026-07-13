export type WorkCategory = {
  id: "videography" | "editing";
  label: string;
  title: string;
  description: string;
  cta: string;
  image: {
    src: string;
    alt: string;
  };
  groups: WorkGroup[];
};

export type WorkGroup = {
  id: string;
  title: string;
  description: string;
  layout: "portrait-cluster" | "mixed-feature" | "cinematic-stack" | "wide-stack";
};

export const workCategories = [
  {
    id: "videography",
    label: "Creative Service",
    title: "Videography",
    description: "Reels, brand shoots, event coverage, and cinematic social content.",
    cta: "View Work",
    image: {
      src: "/images/work-card.png",
      alt: "Preview image for videography work",
    },
    groups: [
      {
        id: "fashion-reels",
        title: "Fashion Reels",
        description: "Editorial fashion clips, product moments, and vertical brand visuals.",
        layout: "portrait-cluster",
      },
      {
        id: "real-estate",
        title: "Real Estate",
        description: "Property tours, interior details, and premium listing sequences.",
        layout: "mixed-feature",
      },
      {
        id: "cinematic-reels",
        title: "Cinematic Reels",
        description: "Mood-led reels with pacing, motion, and cinematic framing.",
        layout: "cinematic-stack",
      },
      {
        id: "automotive",
        title: "Automotive",
        description: "Car reels, detail shots, launch edits, and movement-focused visuals.",
        layout: "portrait-cluster",
      },
    ],
  },
  {
    id: "editing",
    label: "Creative Service",
    title: "Editing",
    description: "Short-form edits, pacing, color, sound, and polished final delivery.",
    cta: "View Work",
    image: {
      src: "/images/work-card.png",
      alt: "Preview image for editing work",
    },
    groups: [
      {
        id: "short-films",
        title: "Short Films",
        description: "Narrative edits, compact story cuts, and polished film sequences.",
        layout: "wide-stack",
      },
      {
        id: "behind-scenes",
        title: "Behind the Scenes",
        description: "Process clips, creator moments, production footage, and raw stories.",
        layout: "portrait-cluster",
      },
      {
        id: "islamic-content",
        title: "Islamic Content",
        description: "Clean edits for reminders, talks, education, and respectful social clips.",
        layout: "wide-stack",
      },
    ],
  },
] satisfies WorkCategory[];
