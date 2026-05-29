export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  type: "retainer" | "project" | "enterprise";
  /** When false, checkout uses contact form instead of Stripe */
  checkoutEnabled?: boolean;
};

export const retainerPlans: PricingPlan[] = [
  {
    id: "social-starter",
    name: "Social Starter",
    price: "$750/mo",
    description: "Essential social presence for growing brands.",
    features: ["Content scheduling", "Caption writing", "Basic graphics", "Monthly reporting"],
    checkoutEnabled: true,
    type: "retainer",
  },
  {
    id: "growth",
    name: "Growth Partnership",
    price: "$1,500/mo",
    description: "Full-funnel marketing support with creative and analytics.",
    features: [
      "Social + content support",
      "Campaign coordination",
      "Performance reporting",
      "Priority support",
    ],
    checkoutEnabled: true,
    highlighted: true,
    type: "retainer",
  },
  {
    id: "enterprise",
    name: "Enterprise Retainer",
    price: "$3,500+/mo",
    description: "Dedicated account management and multi-channel execution.",
    features: [
      "Dedicated account manager",
      "Custom deliverables",
      "AI automation support",
      "Executive reporting",
    ],
    checkoutEnabled: false,
    type: "enterprise",
  },
];

export const projectPlans: PricingPlan[] = [
  {
    id: "brand-kit",
    name: "Brand Identity",
    price: "From $1,500",
    description: "Complete brand foundation for launches and rebrands.",
    features: ["Brand strategy", "Logo & guidelines", "Messaging", "Social assets"],
    checkoutEnabled: true,
    type: "project",
  },
  {
    id: "website",
    name: "Website Build",
    price: "From $2,500",
    description: "Responsive, conversion-optimized websites with integrations.",
    features: ["Custom design", "SEO setup", "Stripe & CRM", "Analytics"],
    checkoutEnabled: true,
    type: "project",
  },
  {
    id: "automation",
    name: "AI Automation",
    price: "From $3,500",
    description: "Workflow and CRM automation for operational efficiency.",
    features: ["Workflow design", "CRM automations", "AI support systems", "Reporting"],
    checkoutEnabled: true,
    type: "project",
  },
];
