export type PlanConfig = {
  priceId: string;
  mode: "subscription" | "payment";
  name: string;
};

const env = (key: string) => process.env[key]?.trim() || "";

/** Server-side plan → Stripe Price ID mapping. */
export const getPlanCatalog = (): Record<string, PlanConfig> => {
  const catalog: Record<string, PlanConfig | null> = {
    "strategy-session": env("STRIPE_PRICE_STRATEGY_SESSION")
      ? { priceId: env("STRIPE_PRICE_STRATEGY_SESSION"), mode: "payment", name: "Initial Business Strategy Session" }
      : null,
    "growth-ops": env("STRIPE_PRICE_GROWTH_OPS")
      ? { priceId: env("STRIPE_PRICE_GROWTH_OPS"), mode: "payment", name: "Growth & Operations Consulting Package" }
      : null,
    "business-dev": env("STRIPE_PRICE_BUSINESS_DEV")
      ? { priceId: env("STRIPE_PRICE_BUSINESS_DEV"), mode: "payment", name: "Business Development Strategy Package" }
      : null,
    "advanced-advisory": env("STRIPE_PRICE_ADVANCED_ADVISORY")
      ? { priceId: env("STRIPE_PRICE_ADVANCED_ADVISORY"), mode: "payment", name: "Advanced Advisory & Implementation Package" }
      : null,
  };

  return Object.fromEntries(
    Object.entries(catalog).filter((entry): entry is [string, PlanConfig] => entry[1] !== null),
  );
};

export const getPlan = (planId: string): PlanConfig | undefined => getPlanCatalog()[planId];
