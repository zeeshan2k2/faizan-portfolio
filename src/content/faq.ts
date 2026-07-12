export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqContent = {
  title: "FAQS",
  footerQuestion: "Do you have any other questions?",
  footerLinkLabel: "Ask me directly",
  footerHref: "mailto:hello@example.com",
  items: [
    {
      id: "process",
      question: "What's the Jayden's progress like?",
      answer:
        "I specialize in UX/UI design, web development, and branding for individuals and businesses.",
    },
    {
      id: "delivery",
      question: "Design delivery time estimate?",
      answer:
        "Designs are typically delivered within 3-5 business days, depending on project scope and complexity.",
    },
    {
      id: "services",
      question: "What Service do You offer?",
      answer:
        "I offer UI/UX design, Webflow/Framer builds, and full-stack implementation using React, WordPress, or Laravel.",
    },
    {
      id: "revisions",
      question: "What if I don't like design?",
      answer:
        "You'll receive revisions based on your feedback until you're satisfied, within the scope of the plan.",
    },
    {
      id: "refund",
      question: "Are there any Refund?",
      answer:
        "Refunds aren't available once work has started, but I ensure satisfaction through clear communication and revisions.",
    },
  ] satisfies FaqItem[],
};
