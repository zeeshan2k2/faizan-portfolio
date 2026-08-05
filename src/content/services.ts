export type Service = {
  id: string;
  label: string;
  index: string;
  href: string;
  icon: "videography" | "editing" | "ugc" | "ads" | "grading" | "photography";
  points: string[];
};

export const servicesContent = {
  eyebrow: "My Services",
  availability: "Available Worldwide",
  contactLabel: "Contact me",
  contactHref: "mailto:gfaiz6896@gmail.com",
  services: [
    {
      id: "videography",
      label: "Videography",
      index: "01",
      href: "#videography",
      icon: "videography",
      points: [
        "Commercials, events, and documentaries",
        "Real estate, automotive, and brand shoots",
        "Shot planning and on-site production",
      ],
    },
    {
      id: "video-editing",
      label: "Video Editing",
      index: "02",
      href: "#editing",
      icon: "editing",
      points: [
        "Short-form reels and promotional edits",
        "Story pacing, sequencing, and cleanup",
        "Platform-ready exports for social media",
      ],
    },
    {
      id: "ugc-ad-production",
      label: "UGC Ad Production",
      index: "03",
      href: "#ugc-ad-production",
      icon: "ugc",
      points: [
        "AI-assisted UGC concepts and edits",
        "Hook-focused short ads for paid campaigns",
        "Fast turnaround social-first deliverables",
      ],
    },
    {
      id: "commercial-ads",
      label: "Commercial Ads",
      index: "04",
      href: "#commercial-ads",
      icon: "ads",
      points: [
        "Product, service, and campaign videos",
        "Brand-aligned visuals and messaging",
        "Edits built for attention and conversion",
      ],
    },
    {
      id: "color-grading-sound-design",
      label: "Color Grading",
      index: "05",
      href: "#color-grading-sound-design",
      icon: "grading",
      points: [
        "Color correction and mood matching",
        "Audio cleanup, balancing, and sound design",
        "Polished finishing for final delivery",
      ],
    },
    {
      id: "photography",
      label: "Photography",
      index: "06",
      href: "#photography",
      icon: "photography",
      points: [
        "Brand, product, and lifestyle captures",
        "Event and behind-the-scenes coverage",
        "Social-ready photo selections",
      ],
    },
  ] satisfies Service[],
};
