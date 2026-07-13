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
      id: "videography",
      category: "Creative Service",
      title: "Videography",
      date: "View Work",
      href: "#work",
      image: {
        src: "/images/work-card.png",
        alt: "Preview image for videography work",
      },
    },
    {
      id: "editing",
      category: "Creative Service",
      title: "Editing",
      date: "View Work",
      href: "#work",
      image: {
        src: "/images/work-card.png",
        alt: "Preview image for editing work",
      },
    },
  ] satisfies Project[],
};
