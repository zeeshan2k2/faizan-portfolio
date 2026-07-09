export type Project = {
  id: string;
  category: string;
  title: string;
  date: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export const selectedWork = {
  marqueeLabel: "Selected work",
  projects: [
    {
      id: "x-direct-mobile",
      category: "Mobile App Design",
      title: "X-direct Mobile",
      date: "May 2026",
      href: "#",
      image: {
        src: "/images/work-card.png",
        alt: "Mobile app mockup preview for X-direct Mobile",
      },
    },
    {
      id: "x-direct-mobile-02",
      category: "Mobile App Design",
      title: "X-direct Mobile",
      date: "May 2026",
      href: "#",
      image: {
        src: "/images/work-card.png",
        alt: "Mobile app mockup preview for X-direct Mobile",
      },
    },
    {
      id: "x-direct-mobile-03",
      category: "Mobile App Design",
      title: "X-direct Mobile",
      date: "May 2026",
      href: "#",
      image: {
        src: "/images/work-card.png",
        alt: "Mobile app mockup preview for X-direct Mobile",
      },
    },
  ] satisfies Project[],
};
