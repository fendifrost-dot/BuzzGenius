import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export const getStripe = (): Stripe => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(key);
  }
  return stripeClient;
};

export const getSiteUrl = (): string => {
  const url = process.env.SITE_URL || process.env.VITE_SITE_URL || "http://localhost:8080";
  return url.replace(/\/$/, "");
};
