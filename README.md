# Buzz Genius

Growth infrastructure website for Buzz Genius — marketing, media production, AI automation, and enterprise-ready service packages.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion
- **Stripe Checkout** (server-side API)
- Supabase (contact form)
- Vercel (frontend + serverless API)

## Development

```bash
npm install
cp .env.example .env
# Add STRIPE_SECRET_KEY and STRIPE_PRICE_* values
npm run dev
```

This runs:

- **Frontend** at `http://localhost:8080` (Vite)
- **API** at `http://localhost:3001` (Express), proxied via `/api/*`

- Home: `/`
- Services: `/services`

## Stripe backend

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/create-checkout-session` | POST | Start Checkout (subscription or one-time) |
| `/api/checkout-session` | GET | Verify session after payment |
| `/api/create-portal-session` | POST | Customer billing portal |
| `/api/create-invoice` | POST | Send Stripe invoice by email |
| `/api/stripe-webhook` | POST | Webhook events |

### Setup

1. Create [Stripe Products & Prices](https://dashboard.stripe.com/products) for each plan.
2. Add Price IDs to `.env` as `STRIPE_PRICE_*` (see `.env.example`).
3. Set `STRIPE_SECRET_KEY` and `SITE_URL`.
4. For webhooks locally: `stripe listen --forward-to localhost:3001/api/stripe-webhook`
5. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`.

### Deploy (Vercel)

Add the same env vars in the Vercel project settings (no `VITE_` prefix for secrets).

Configure Stripe webhook endpoint: `https://your-domain.com/api/stripe-webhook`

Events to enable: `checkout.session.completed`, `invoice.paid`, `customer.subscription.*`

Enable **Stripe Customer Portal** in Dashboard → Settings → Billing → Customer portal.

## Project structure

```
api/                 # Vercel serverless routes
server/
  handlers/          # Shared Stripe logic
  dev.ts             # Local Express API
src/
  lib/stripe-api.ts  # Frontend API client
  components/stripe/
```
