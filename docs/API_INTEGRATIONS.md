# API integrations — RentFlow

No live third-party credentials are configured in Phase 0. This document describes **planned** boundaries.

Never commit secrets. Use `.env.example` as the template.

## Supabase

**Purpose:** PostgreSQL, Auth, Storage.

**Interface:** `src/lib/supabase/` — currently public config detection only. Future: browser client (anon key) and server client (service role, cookies).

**Environment:**

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)

**Flow:** User authenticates via Supabase Auth → session cookie → server components load profile and authorize.

**Errors / retries:** Treat auth and network failures as user-safe errors. Do not retry writes without idempotency keys.

**Sandbox:** Local project or Supabase preview. Production project is separate.

## Africa's Talking

**Purpose:** SMS reminders and transactional notices.

**Interface:** `src/lib/notifications/` `SmsProvider`.

**Environment:**

- `AFRICASTALKING_USERNAME`
- `AFRICASTALKING_API_KEY`
- `AFRICASTALKING_SENDER_ID`

**Flow:** Domain event → notification service → SMS adapter → delivery receipt (when available).

**Webhooks:** If delivery callbacks are used, verify authenticity and treat as untrusted.

**Retries:** Bounded retries for transient HTTP failures; do not double-send without an idempotency key.

**Sandbox:** Africa's Talking sandbox or a local logger adapter for demos.

## Payment provider abstraction

**Purpose:** Collect rent without coupling the domain to one operator.

**Interface:** `src/lib/payments/types.ts`.

**Environment:**

- `PAYMENT_PROVIDER` (e.g. `sandbox`)
- `PAYMENT_API_KEY` (server)
- `PAYMENT_WEBHOOK_SECRET` (server)

**Flow:** Tenant initiates payment → adapter returns pending reference → webhook or poll → mark SUCCESSFUL/FAILED → issue receipt.

**Webhooks:** Verify signatures. Idempotency on provider transaction IDs. Never trust client-reported success.

**Sandbox:** In-app simulator for the hackathon path.

**Production:** Operator-specific adapters behind the same interface.

## Potential mobile-money providers

| Provider | Role | Status |
| --- | --- | --- |
| Sandbox simulator | Demo | Planned first |
| M-Pesa | Collection | Planned |
| Mixx by Yas | Collection | Planned |
| Airtel Money | Collection | Planned |
| HaloPesa | Collection | Planned |
| Bank transfer | Alternative | Planned |
| Manual reconciliation | Exception handling | Planned |

## Vercel

**Purpose:** Hosting, previews, production HTTPS, env vars.

**Interface:** GitHub integration. No Vercel API usage required at bootstrap.

**Production concerns:** Separate env for preview vs production; protect `main`.

## Future AI provider

**Purpose:** Optional advisory maintenance image classification.

**Environment:** `AI_PROVIDER_API_KEY` (server only).

**Rule:** Suggestions are advisory. Tenant confirms category and urgency. AI is not the product.
