# Buzz Genius — Developer Handoff (Claude / Next Agent)

**Repo path:** `/Users/gocrazyglobal/BuzzGenius`  
**GitHub:** https://github.com/fendifrost-dot/BuzzGenius  
**Last updated:** May 28, 2026

---

## Executive summary

Buzz Genius is a **lender-friendly marketing/growth services website** built on the existing **Vite + React + TypeScript + Tailwind + shadcn/ui** stack (not Next.js). A full **Services page** was implemented per product spec, plus a **Stripe backend** for Checkout, invoicing, webhooks, and billing portal.

**Dev servers were running** via `npm run dev`:
- Frontend: http://localhost:8080
- API: http://localhost:3001 (proxied at `/api/*`)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Frontend | Vite 5, React 18, React Router, Tailwind, shadcn/ui, Framer Motion |
| Forms / DB | Supabase (`contact_submissions` table) |
| Payments | Stripe Checkout Sessions (server-side) |
| API (local) | Express (`server/dev.ts`) |
| API (prod) | Vercel serverless (`api/*.ts`) |
| Deploy target | Vercel (`vercel.json` → `dist` + API routes) |

---

## Routes

| Path | Page |
|------|------|
| `/` | Home (intro + link to services) |
| `/services` | Full lender-friendly services page (main deliverable) |
| `/checkout/success` | Post-payment confirmation |
| `/checkout/cancel` | Checkout abandoned |

---

## Services page sections (in order)

1. Hero — “Growth Infrastructure for Modern Brands” + trust indicators  
2. Business overview  
3. Core services grid — **9 categories** with pricing/deliverables (`src/data/services.ts`)  
4. Recurring revenue / partnerships  
5. Pricing tables — retainers + projects (`src/data/pricing.ts`)  
6. Industries grid (`src/data/industries.ts`)  
7. Process timeline (4 steps)  
8. Case studies (`src/data/caseStudies.ts` — placeholder metrics)  
9. FAQ accordion (`src/data/faq.ts`)  
10. Final CTA  
11. Contact form (Supabase)  
12. Sticky “Schedule Strategy Call” bar  

**Design:** Black/white/charcoal + electric blue/violet accents (Inter font). Corporate, not “freelance agency.”

---

## Stripe backend

### Endpoints

| Endpoint | Method | Handler |
|----------|--------|---------|
| `/api/create-checkout-session` | POST | `{ planId, customerEmail? }` → `{ sessionId, url }` |
| `/api/checkout-session` | GET | `?session_id=` → session status |
| `/api/create-portal-session` | POST | `{ sessionId }` → billing portal URL |
| `/api/create-invoice` | POST | `{ email, planId }` → Stripe invoice |
| `/api/stripe-webhook` | POST | Raw body + Stripe signature |
| `/api/health` | GET | Local dev only |

### Plan IDs → env vars (server-side only)

| `planId` | Env var | Mode |
|----------|---------|------|
| `social-starter` | `STRIPE_PRICE_SOCIAL_STARTER` | subscription |
| `growth` | `STRIPE_PRICE_GROWTH` | subscription |
| `brand-kit` | `STRIPE_PRICE_BRAND` | payment |
| `website` | `STRIPE_PRICE_WEBSITE` | payment |
| `automation` | `STRIPE_PRICE_AUTOMATION` | payment |
| `enterprise` | — | Contact form only (no checkout) |

Mapping lives in `server/lib/plans.ts`. Handlers in `server/handlers/`.

### Frontend Stripe usage

- `src/lib/stripe-api.ts` — fetch wrappers  
- `src/components/stripe/StripeCheckoutButton.tsx` — redirects to Checkout URL  
- `src/components/stripe/RequestInvoiceButton.tsx` — project plans only  

**Security:** Never put `STRIPE_SECRET_KEY` or Price IDs in `VITE_*` vars.

---

## Environment variables

See `.env.example`. Current `.env` has **Supabase only** — Stripe is **not configured yet**.

```bash
# Required for checkout
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
SITE_URL=http://localhost:8080

STRIPE_PRICE_SOCIAL_STARTER=price_...
STRIPE_PRICE_GROWTH=price_...
STRIPE_PRICE_BRAND=price_...
STRIPE_PRICE_WEBSITE=price_...
STRIPE_PRICE_AUTOMATION=price_...

# Client
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...  # optional if only using redirect Checkout
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

---

## Commands

```bash
cd /Users/gocrazyglobal/BuzzGenius
npm install
npm run dev          # Vite :8080 + API :3001
npm run build        # → dist/
npm run lint
npm run test

# Stripe webhooks (local)
stripe listen --forward-to localhost:3001/api/stripe-webhook
```

---

## Key directories

```
api/                          # Vercel serverless entrypoints
server/
  dev.ts                      # Local Express API
  handlers/                   # Stripe business logic
  lib/plans.ts, stripe.ts
src/
  data/                       # services, pricing, faq, industries, caseStudies
  components/
    services/                 # Page sections
    layout/                   # SiteHeader, StickyCTA, SiteLayout
    stripe/                   # Checkout + invoice UI
  pages/
    Index.tsx, Services.tsx, CheckoutSuccess.tsx, CheckoutCancel.tsx
  lib/stripe-api.ts
```

---

## Original product spec (reference)

Full architecture doc from stakeholder included:
- Lender-friendly positioning (recurring revenue, enterprise readiness)
- 9 service categories with pricing/deliverables
- Stripe subscriptions + invoicing
- SEO keywords, schema markup (basic JSON-LD in `StructuredData.tsx`)
- Top nav: Home, Services, Industries, Case Studies, About, Contact, Client Portal, Book Consultation

**Not yet built as separate pages:** Industries, Case Studies, About (only sections/anchors on `/services` or home). Client Portal links to `https://portal.buzzgeniusinc.com` (placeholder).

---

## Known gaps / recommended next steps

1. **Configure Stripe** — Create Products/Prices in Dashboard; fill `.env`; test checkout + webhook.  
2. **Enable Stripe Customer Portal** in Dashboard for subscription management.  
3. **Deploy to Vercel** — Set env vars; webhook URL `https://<domain>/api/stripe-webhook`.  
4. **Replace placeholder case studies** in `src/data/caseStudies.ts`.  
5. **Real logo/assets** — `src/assets/logo.png` exists (~2.2MB; consider optimizing).  
6. **Git** — Repo was downloaded via tarball to `~/BuzzGenius`; ensure `git remote` points to GitHub if pushing.  
7. **Optional:** Persist webhook events to Supabase; admin dashboard; separate route pages; migrate to Next.js if required.  
8. **Contact email** in UI: `Info@buzzgeniusinc.com`, phone `(708) 320-9838`.

---

## Build status

- `npm run build` — **passes** (May 2026)
- Supabase contact form — wired; needs valid Supabase project
- Stripe checkout — **blocked until env vars set**

---

## Contact / business context

Positioning shift from original repo copy (“Technical Strategy & Operational Development”) to **“Growth Infrastructure for Modern Brands”** — marketing agency + AI automation + media production, optimized for lender/underwriter perception (recurring contracts, standardized pricing, nationwide).

---

*End of handoff.*
