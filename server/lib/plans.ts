export type PlanConfig = {
  priceId: string;
  mode: "subscription" | "payment";
  name: string;
};

const env = (key: string) => process.env[key]?.trim() || "";

/** Server-side plan → Stripe Price ID mapping (never expose secret keys to the client). */
export const getPlanCatalog = (): Record<string, PlanConfig> => {
  const catalog: Record<string, PlanConfig | null> = {
    "social-starter": env("STRIPE_PRICE_SOCIAL_STARTER")
      ? {
          priceId: env("STRIPE_PRICE_SOCIAL_STARTER"),
          mode: "subscription",
          name: "Social Starter Retainer",
        }
      : null,
    growth: env("STRIPE_PRICE_GROWTH")
      ? {
          priceId: env("STRIPE_PRICE_GROWTH"),
          mode: "subscription",
          name: "Growth Partnership Retainer",
        }
      : null,
    "brand-kit": env("STRIPE_PRICE_BRAND")
      ? {
          priceId: env("STRIPE_PRICE_BRAND"),
          mode: "payment",
          name: "Brand Identity Package",
        }
      : null,
    website: env("STRIPE_PRICE_WEBSITE")
      ? {
          priceId: env("STRIPE_PRICE_WEBSITE"),
          mode: "payment",
          name: "Website Build Package",
        }
      : null,
    automation: env("STRIPE_PRICE_AUTOMATION")
      ? {
          priceId: env("STRIPE_PRICE_AUTOMATION"),
          mode: "payment",
          name: "AI Automation Package",
        }
      : null,
  };

  return Object.fromEntries(
    Object.entries(catalog).filter((entry): entry is [string, PlanConfig] => entry[1] !== null),
  );
};

export const getPlan = (planId: string): PlanConfig | undefined => getPlanCatalog()[planId];
