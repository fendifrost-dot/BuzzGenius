import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleStripeWebhook } from "../server/handlers/webhook.js";
import { ApiError, toErrorMessage } from "../server/lib/errors.js";
import { readRawBody } from "../server/lib/vercel-buffer.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const rawBody = await readRawBody(req);
    const result = await handleStripeWebhook(
      rawBody,
      req.headers["stripe-signature"] as string | undefined,
    );
    return res.status(200).json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    return res.status(status).json({ error: toErrorMessage(error) });
  }
}
