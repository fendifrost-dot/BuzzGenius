import type Stripe from "stripe";
import { getStripe } from "../lib/stripe.js";
import { ApiError } from "../lib/errors.js";

export async function handleStripeWebhook(
  rawBody: Buffer | string,
  signature: string | undefined,
): Promise<{ received: true }> {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new ApiError("STRIPE_WEBHOOK_SECRET is not configured", 500);
  }
  if (!signature) {
    throw new ApiError("Missing Stripe signature", 400);
  }

  const stripe = getStripe();
  const payload = typeof rawBody === "string" ? rawBody : rawBody.toString("utf8");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    throw new ApiError("Webhook signature verification failed", 400);
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.info("[stripe] checkout.session.completed", {
        sessionId: session.id,
        planId: session.metadata?.planId,
        customerEmail: session.customer_details?.email,
      });
      break;
    }
    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      console.info("[stripe] invoice.paid", {
        invoiceId: invoice.id,
        customerId: invoice.customer,
        amountPaid: invoice.amount_paid,
      });
      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      console.info(`[stripe] ${event.type}`, {
        subscriptionId: subscription.id,
        status: subscription.status,
        planId: subscription.metadata?.planId,
      });
      break;
    }
    default:
      console.info("[stripe] unhandled event", event.type);
  }

  return { received: true };
}
