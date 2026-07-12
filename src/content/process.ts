export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: "brief" | "wireframe" | "design";
};

export const processContent = {
  title: "Work Process",
  steps: [
    {
      id: "review",
      step: "Step 1",
      title: "Review The Brief",
      description: "Understand project goals and client expectations.",
      icon: "brief",
    },
    {
      id: "wireframe",
      step: "Step 2",
      title: "Sketch The WireFrame",
      description: "Lay out structure to guide interface creation",
      icon: "wireframe",
    },
    {
      id: "design",
      step: "Step 3",
      title: "Design Progress",
      description: "Refine the layout, colors, fonts, and spacing now",
      icon: "design",
    },
  ] satisfies ProcessStep[],
};
