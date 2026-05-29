export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
};

// Mirrors the six advisory areas in BUZZ GENIUS — Service Overview.pdf.
export const serviceCategories: ServiceCategory[] = [
  {
    id: "business-strategy",
    name: "Business Strategy Development",
    description:
      "Structured strategic planning for entrepreneurs and small businesses evaluating direction, positioning, or new opportunities.",
    deliverables: [
      "Strategic review of business concept",
      "Market and positioning analysis",
      "Actionable strategic recommendations",
      "Engagement summary documentation",
    ],
  },
  {
    id: "operational-consulting",
    name: "Operational Consulting & Workflow Improvement",
    description:
      "Practical operational guidance for owners and managers seeking to improve workflow, efficiency, and execution discipline.",
    deliverables: [
      "Operational diagnostic",
      "Workflow and process recommendations",
      "Roles and accountability mapping",
      "Implementation roadmap",
    ],
  },
  {
    id: "marketing-strategy",
    name: "Marketing & Brand Positioning Strategy",
    description:
      "Advisory engagements focused on clarifying brand positioning, audience strategy, and a sustainable approach to marketing.",
    deliverables: [
      "Positioning and brand-narrative review",
      "Target audience definition",
      "Channel and message recommendations",
      "Practical next-step plan",
    ],
  },
  {
    id: "revenue-growth",
    name: "Revenue Growth Planning",
    description:
      "Disciplined revenue planning for early-stage and growing businesses preparing for the next stage of scale.",
    deliverables: [
      "Revenue model assessment",
      "Pricing and offer review",
      "Pipeline and conversion analysis",
      "Quarterly growth plan",
    ],
  },
  {
    id: "startup-advisory",
    name: "Startup Advisory & Launch Guidance",
    description:
      "Hands-on advisory for founders preparing to launch or build their first operational systems.",
    deliverables: [
      "Launch checklist and timeline",
      "Founder operational guidance",
      "Vendor and tooling recommendations",
      "Early customer acquisition plan",
    ],
  },
  {
    id: "business-structure",
    name: "Business Structure & Operational Planning",
    description:
      "Advisory on entity structure, internal operations, and the documentation needed to operate professionally.",
    deliverables: [
      "Entity and structure review",
      "Operational documentation guidance",
      "Internal controls overview",
      "Compliance and record-keeping plan",
    ],
  },
];
