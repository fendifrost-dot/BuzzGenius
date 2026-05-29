import "dotenv/config";
import cors from "cors";
import express from "express";
import { ApiError, toErrorMessage } from "./lib/errors.js";
import { handleCreateCheckoutSession } from "./handlers/create-checkout-session.js";
import { handleCreateInvoice } from "./handlers/create-invoice.js";
import { handleCreatePortalSession } from "./handlers/create-portal-session.js";
import { handleGetCheckoutSession } from "./handlers/get-checkout-session.js";
import { handleStripeWebhook } from "./handlers/webhook.js";

const app = express();
const port = Number(process.env.API_PORT) || 3001;

app.use(cors({ origin: true }));

app.post(
  "/api/stripe-webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const result = await handleStripeWebhook(
        req.body as Buffer,
        req.headers["stripe-signature"] as string | undefined,
      );
      res.json(result);
    } catch (error) {
      const status = error instanceof ApiError ? error.statusCode : 500;
      res.status(status).json({ error: toErrorMessage(error) });
    }
  },
);

app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const result = await handleCreateCheckoutSession(req.body);
    res.json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    res.status(status).json({ error: toErrorMessage(error) });
  }
});

app.get("/api/checkout-session", async (req, res) => {
  try {
    const result = await handleGetCheckoutSession({
      sessionId: req.query.session_id ?? req.query.sessionId,
    });
    res.json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    res.status(status).json({ error: toErrorMessage(error) });
  }
});

app.post("/api/create-portal-session", async (req, res) => {
  try {
    const result = await handleCreatePortalSession(req.body);
    res.json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    res.status(status).json({ error: toErrorMessage(error) });
  }
});

app.post("/api/create-invoice", async (req, res) => {
  try {
    const result = await handleCreateInvoice(req.body);
    res.json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    res.status(status).json({ error: toErrorMessage(error) });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.info(`Stripe API dev server listening on http://localhost:${port}`);
});
