export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: "brief" | "shoot" | "edit" | "deliver";
};

export const processContent = {
  title: "Work Process",
  steps: [
    {
      id: "review",
      step: "Step 1",
      title: "Review The Brief",
      description:
        "Understand the goal, audience, platform, references, deadline, and final deliverables.",
      icon: "brief",
    },
    {
      id: "plan",
      step: "Step 2",
      title: "Plan The Shoot",
      description:
        "Decide the shot direction, location flow, gear needs, framing, and production approach.",
      icon: "shoot",
    },
    {
      id: "film-edit",
      step: "Step 3",
      title: "Film & Edit",
      description:
        "Capture the footage, cut the story, shape pacing, add motion graphics, and build the main edit.",
      icon: "edit",
    },
    {
      id: "polish-deliver",
      step: "Step 4",
      title: "Polish & Deliver",
      description:
        "Color grade, clean audio, export platform-ready files, and apply final revisions.",
      icon: "deliver",
    },
  ] satisfies ProcessStep[],
};
