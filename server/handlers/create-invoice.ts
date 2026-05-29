import { z } from "zod";
import { ApiError } from "../lib/errors.js";
import { getPlan } from "../lib/plans.js";
import { getStripe } from "../lib/stripe.js";

const bodySchema = z.object({
  email: z.string().email(),
  planId: z.string().min(1),
  daysUntilDue: z.number().int().min(1).max(90).optional().default(14),
});

export type CreateInvoiceInput = z.infer<typeof bodySchema>;

export type CreateInvoiceResult = {
  invoiceId: string;
  hostedInvoiceUrl: string | null;
  status: string | null;
};

export async function handleCreateInvoice(body: unknown): Promise<CreateInvoiceResult> {
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    throw new ApiError(parsed.error.errors[0]?.message ?? "Invalid request", 400);
  }

  const { email, planId, daysUntilDue } = parsed.data;
  const plan = getPlan(planId);
  if (!plan) {
    throw new ApiError(`Plan "${planId}" is not available`, 404);
  }

  const stripe = getStripe();

  const existing = await stripe.customers.list({ email, limit: 1 });
  const customer =
    existing.data[0] ??
    (await stripe.customers.create({
      email,
      metadata: { source: "buzzgenius_website" },
    }));

  await stripe.invoiceItems.create({
    customer: customer.id,
    price: plan.priceId,
    description: plan.name,
  });

  const invoice = await stripe.invoices.create({
    customer: customer.id,
    collection_method: "send_invoice",
    days_until_due: daysUntilDue,
    metadata: { planId, planName: plan.name },
    auto_advance: true,
  });

  const finalized = await stripe.invoices.finalizeInvoice(invoice.id);
  await stripe.invoices.sendInvoice(finalized.id);

  return {
    invoiceId: finalized.id,
    hostedInvoiceUrl: finalized.hosted_invoice_url,
    status: finalized.status,
  };
}
