import { z } from "zod";
import { ApiError } from "../lib/errors.js";
import { getPlan } from "../lib/plans.js";
import { getSiteUrl, getStripe } from "../lib/stripe.js";

const bodySchema = z.object({
  planId: z.string().min(1),
  customerEmail: z.string().email().optional(),
});

export type CreateCheckoutSessionInput = z.infer<typeof bodySchema>;

export type CreateCheckoutSessionResult = {
  sessionId: string;
  url: string;
};

export async function handleCreateCheckoutSession(
  body: unknown,
): Promise<CreateCheckoutSessionResult> {
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    throw new ApiError(parsed.error.errors[0]?.message ?? "Invalid request", 400);
  }

  const { planId, customerEmail } = parsed.data;
  const plan = getPlan(planId);
  if (!plan) {
    throw new ApiError(`Plan "${planId}" is not available. Configure Stripe price IDs on the server.`, 404);
  }

  const stripe = getStripe();
  const siteUrl = getSiteUrl();

  const session = await stripe.checkout.sessions.create({
    mode: plan.mode,
    line_items: [{ price: plan.priceId, quantity: 1 }],
    success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/checkout/cancel`,
    customer_email: customerEmail,
    allow_promotion_codes: true,
    billing_address_collection: "auto",
    metadata: {
      planId,
      planName: plan.name,
    },
    ...(plan.mode === "subscription"
      ? {
          subscription_data: {
            metadata: { planId, planName: plan.name },
          },
        }
      : {
          payment_intent_data: {
            metadata: { planId, planName: plan.name },
          },
        }),
  });

  if (!session.url) {
    throw new ApiError("Failed to create checkout session", 500);
  }

  return { sessionId: session.id, url: session.url };
}
