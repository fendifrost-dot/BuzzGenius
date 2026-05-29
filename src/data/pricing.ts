export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  type: "retainer" | "project" | "enterprise" | "package";
  checkoutEnabled?: boolean;
};

// Official packages from BUZZ GENIUS — Pricing Structure.pdf
export const consultingPackages: PricingPlan[] = [
  { id: "strategy-session", name: "Initial Business Strategy Session", price: "$1,000",
    description: "A focused advisory session reviewing a business concept, operational challenge, or growth opportunity, with actionable recommendations.",
    features: ["Pre-session intake and review","Single advisory session","Actionable recommendations","Written engagement summary"],
    checkoutEnabled: true, type: "package" },
  { id: "growth-ops", name: "Growth & Operations Consulting Package", price: "$3,000",
    description: "A structured engagement focused on operational improvements, marketing strategy, and business development planning.",
    features: ["Operational and marketing review","Multi-session engagement","Implementation guidance","Documented growth plan"],
    checkoutEnabled: true, highlighted: true, type: "package" },
  { id: "business-dev", name: "Business Development Strategy Package", price: "$5,000",
    description: "A comprehensive advisory engagement addressing revenue growth, brand positioning, and operational scaling strategies.",
    features: ["Revenue and positioning review","Scaling-stage operational plan","Multi-session strategy work","Written deliverables and roadmap"],
    checkoutEnabled: true, type: "package" },
  { id: "advanced-advisory", name: "Advanced Advisory & Implementation Package", price: "$6,000",
    description: "A higher-level engagement with multiple strategy sessions, implementation planning, and ongoing advisory guidance.",
    features: ["Multiple strategy sessions","Implementation planning","Ongoing advisory guidance","Custom deliverables on scope"],
    checkoutEnabled: true, type: "package" },
];

export const retainerPlans: PricingPlan[] = [
  { id: "social-starter", name: "Social Starter", price: "$750/mo",
    description: "Essential social presence for growing brands.",
    features: ["Content scheduling","Caption writing","Basic graphics","Monthly reporting"],
    checkoutEnabled: true, type: "retainer" },
  { id: "growth", name: "Growth Partnership", price: "$1,500/mo",
    description: "Full-funnel marketing support with creative and analytics.",
    features: ["Social + content support","Campaign coordination","Performance reporting","Priority support"],
    checkoutEnabled: true, highlighted: true, type: "retainer" },
  { id: "enterprise", name: "Enterprise Retainer", price: "$3,500+/mo",
    description: "Dedicated account management and multi-channel execution.",
    features: ["Dedicated account manager","Custom deliverables","AI automation support","Executive reporting"],
    checkoutEnabled: false, type: "enterprise" },
];

export const projectPlans: PricingPlan[] = [
  { id: "brand-kit", name: "Brand Identity", price: "From $1,500",
    description: "Complete brand foundation for launches and rebrands.",
    features: ["Brand strategy","Logo & guidelines","Messaging","Social assets"],
    checkoutEnabled: true, type: "project" },
  { id: "website", name: "Website Build", price: "From $2,500",
    description: "Responsive, conversion-optimized websites with integrations.",
    features: ["Custom design","SEO setup","Stripe & CRM","Analytics"],
    checkoutEnabled: true, type: "project" },
  { id: "automation", name: "AI Automation", price: "From $3,500",
    description: "Workflow and CRM automation for operational efficiency.",
    features: ["Workflow design","CRM automations","AI support systems","Reporting"],
    checkoutEnabled: true, type: "project" },
];
