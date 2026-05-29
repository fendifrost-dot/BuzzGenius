export type CheckoutSessionResponse = {
  sessionId: string;
  url: string;
};

export type CheckoutSessionStatus = {
  id: string;
  status: string | null;
  paymentStatus: string | null;
  customerEmail: string | null;
  planId: string | null;
  planName: string | null;
  mode: string | null;
};

export type CreateInvoiceResponse = {
  invoiceId: string;
  hostedInvoiceUrl: string | null;
  status: string | null;
};

const apiBase = import.meta.env.VITE_API_URL ?? "";

async function parseJson<T>(res: Response): Promise<T> {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error ?? "Request failed");
  }
  return data as T;
}

export async function createCheckoutSession(
  planId: string,
  customerEmail?: string,
): Promise<CheckoutSessionResponse> {
  const res = await fetch(`${apiBase}/api/create-checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ planId, customerEmail }),
  });
  return parseJson(res);
}

export async function getCheckoutSession(sessionId: string): Promise<CheckoutSessionStatus> {
  const res = await fetch(
    `${apiBase}/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`,
  );
  return parseJson(res);
}

export async function createPortalSession(sessionId: string): Promise<{ url: string }> {
  const res = await fetch(`${apiBase}/api/create-portal-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId }),
  });
  return parseJson(res);
}

export async function createInvoice(
  email: string,
  planId: string,
): Promise<CreateInvoiceResponse> {
  const res = await fetch(`${apiBase}/api/create-invoice`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, planId }),
  });
  return parseJson(res);
}
