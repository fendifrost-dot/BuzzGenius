export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  type: "package";
  /** When false, checkout uses contact form instead of Stripe */
  checkoutEnabled?: boolean;
};

// Mirrors the four packages in BUZZ GENIUS — Pricing Structure.pdf.
export const consultingPackages: PricingPlan[] = [
  {
    id: "strategy-session",
    name: "Initial Business Strategy Session",
    price: "$1,000",
    description:
      "A focused advisory session reviewing a business concept, operational challenge, or growth opportunity, with actionable recommendations.",
    features: [
      "Pre-session intake and review",
      "Single advisory session",
      "Actionable recommendations",
      "Written engagement summary",
    ],
    checkoutEnabled: true,
    type: "package",
  },
  {
    id: "growth-ops",
    name: "Growth & Operations Consulting Package",
    price: "$3,000",
    description:
      "A structured engagement focused on operational improvements, marketing strategy, and business development planning.",
    features: [
      "Operational and marketing review",
      "Multi-session engagement",
      "Implementation guidance",
      "Documented growth plan",
    ],
    checkoutEnabled: true,
    highlighted: true,
    type: "package",
  },
  {
    id: "business-dev",
    name: "Business Development Strategy Package",
    price: "$5,000",
    description:
      "A comprehensive advisory engagement addressing revenue growth, brand positioning, and operational scaling strategies.",
    features: [
      "Revenue and positioning review",
      "Scaling-stage operational plan",
      "Multi-session strategy work",
      "Written deliverables and roadmap",
    ],
    checkoutEnabled: true,
    type: "package",
  },
  {
    id: "advanced-advisory",
    name: "Advanced Advisory & Implementation Package",
    price: "$6,000",
    description:
      "A higher-level engagement with multiple strategy sessions, implementation planning, and ongoing advisory guidance.",
    features: [
      "Multiple strategy sessions",
      "Implementation planning",
      "Ongoing advisory guidance",
      "Custom deliverables on scope",
    ],
    checkoutEnabled: true,
    type: "package",
  },
];

// Backwards-compatible exports for components that still import the old names.
export const retainerPlans: PricingPlan[] = [];
export const projectPlans: PricingPlan[] = consultingPackages;
