import { z } from "zod";
import { ApiError } from "../lib/errors.js";
import { getSiteUrl, getStripe } from "../lib/stripe.js";

const bodySchema = z.object({
  sessionId: z.string().min(1),
});

export type CreatePortalSessionResult = { url: string };

/** Opens Stripe Customer Portal for subscription management (requires completed checkout session). */
export async function handleCreatePortalSession(body: unknown): Promise<CreatePortalSessionResult> {
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    throw new ApiError("sessionId is required", 400);
  }

  const stripe = getStripe();
  const checkoutSession = await stripe.checkout.sessions.retrieve(parsed.data.sessionId);

  const customerId =
    typeof checkoutSession.customer === "string"
      ? checkoutSession.customer
      : checkoutSession.customer?.id;

  if (!customerId) {
    throw new ApiError("No customer found for this session", 400);
  }

  const portal = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${getSiteUrl()}/services#pricing`,
  });

  return { url: portal.url };
}
