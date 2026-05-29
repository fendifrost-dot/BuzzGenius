import { z } from "zod";
import { ApiError } from "../lib/errors.js";
import { getStripe } from "../lib/stripe.js";

const querySchema = z.object({
  sessionId: z.string().min(1),
});

export type CheckoutSessionStatus = {
  id: string;
  status: string | null;
  paymentStatus: string | null;
  customerEmail: string | null;
  planId: string | null;
  planName: string | null;
  mode: string | null;
};

export async function handleGetCheckoutSession(query: unknown): Promise<CheckoutSessionStatus> {
  const parsed = querySchema.safeParse(query);
  if (!parsed.success) {
    throw new ApiError("sessionId is required", 400);
  }

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(parsed.data.sessionId);

  return {
    id: session.id,
    status: session.status,
    paymentStatus: session.payment_status,
    customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
    planId: session.metadata?.planId ?? null,
    planName: session.metadata?.planName ?? null,
    mode: session.mode,
  };
}
