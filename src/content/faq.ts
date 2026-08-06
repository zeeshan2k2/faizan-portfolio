export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqContent = {
  title: "FAQS",
  footerQuestion: "Do you have any other questions?",
  footerLinkLabel: "Ask me directly",
  footerHref: "mailto:gfaiz6896@gmail.com",
  items: [
    {
      id: "video-types",
      question: "What type of videos do you create?",
      answer:
        "I create social media ads, UGC videos, commercials, documentaries, corporate videos, event coverage, real estate reels, automotive content, and short-form brand videos.",
    },
    {
      id: "shoot-edit",
      question: "Do you handle both shooting and editing?",
      answer:
        "Yes. I can handle the full production flow, including filming, editing, color correction, color grading, sound design, motion graphics, and final exports.",
    },
    {
      id: "existing-footage",
      question: "Can you edit footage I already have?",
      answer:
        "Yes. If you already have raw footage, I can turn it into a polished edit with pacing, sequencing, audio cleanup, color work, motion graphics, and platform-ready formatting.",
    },
    {
      id: "timeline",
      question: "How long does delivery usually take?",
      answer:
        "Timeline depends on the scope, length, platform, and revision needs. Short-form edits are usually faster, while shoots, commercials, and documentary-style videos need more planning and post-production time.",
    },
    {
      id: "start-project",
      question: "How do we start a project?",
      answer:
        "Send the project details, goals, references, deadline, and where the video will be used. From there, I can confirm the scope, plan the workflow, and guide the next steps.",
    },
  ] satisfies FaqItem[],
};
