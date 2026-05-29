export type PlanConfig = {
  priceId: string;
  mode: "subscription" | "payment";
  name: string;
};

const env = (key: string) => process.env[key]?.trim() || "";

/** Server-side plan → Stripe Price ID mapping. */
export const getPlanCatalog = (): Record<string, PlanConfig> => {
  const c: Record<string, PlanConfig | null> = {
    // Consulting & Advisory packages
    "strategy-session": env("STRIPE_PRICE_STRATEGY_SESSION")
      ? { priceId: env("STRIPE_PRICE_STRATEGY_SESSION"), mode: "payment", name: "Initial Business Strategy Session" } : null,
    "growth-ops": env("STRIPE_PRICE_GROWTH_OPS")
      ? { priceId: env("STRIPE_PRICE_GROWTH_OPS"), mode: "payment", name: "Growth & Operations Consulting Package" } : null,
    "business-dev": env("STRIPE_PRICE_BUSINESS_DEV")
      ? { priceId: env("STRIPE_PRICE_BUSINESS_DEV"), mode: "payment", name: "Business Development Strategy Package" } : null,
    "advanced-advisory": env("STRIPE_PRICE_ADVANCED_ADVISORY")
      ? { priceId: env("STRIPE_PRICE_ADVANCED_ADVISORY"), mode: "payment", name: "Advanced Advisory & Implementation Package" } : null,
    // Marketing retainers
    "social-starter": env("STRIPE_PRICE_SOCIAL_STARTER")
      ? { priceId: env("STRIPE_PRICE_SOCIAL_STARTER"), mode: "subscription", name: "Social Starter Retainer" } : null,
    growth: env("STRIPE_PRICE_GROWTH")
      ? { priceId: env("STRIPE_PRICE_GROWTH"), mode: "subscription", name: "Growth Partnership Retainer" } : null,
    // Project plans
    "brand-kit": env("STRIPE_PRICE_BRAND")
      ? { priceId: env("STRIPE_PRICE_BRAND"), mode: "payment", name: "Brand Identity Package" } : null,
    website: env("STRIPE_PRICE_WEBSITE")
      ? { priceId: env("STRIPE_PRICE_WEBSITE"), mode: "payment", name: "Website Build Package" } : null,
    automation: env("STRIPE_PRICE_AUTOMATION")
      ? { priceId: env("STRIPE_PRICE_AUTOMATION"), mode: "payment", name: "AI Automation Package" } : null,
  };
  return Object.fromEntries(Object.entries(c).filter((e): e is [string, PlanConfig] => e[1] !== null));
};

export const getPlan = (planId: string): PlanConfig | undefined => getPlanCatalog()[planId];
