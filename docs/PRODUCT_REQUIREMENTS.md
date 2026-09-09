# Product Requirements — RentFlow

## Background

RentFlow is a Tanzanian rental-relationship platform for the RIDC PT Innovation Hackathon 2026. Landlords and tenants currently coordinate agreements, rent, receipts, and maintenance across paper, chat, and mobile-money messages.

## Problem

There is no shared system of record for tenancy terms, rent due, payments made, receipts, or maintenance. Trust is expensive to establish and easy to lose.

## Goals

- Deliver one end-to-end digital tenancy workflow for the hackathon demo.
- Model rent obligations independently from payments.
- Support TZS, Tanzanian phone numbers, and mobile-money providers through abstractions.
- Keep the product honest: no fake legal e-signature claims, no credit-score branding, no tenant blacklists.

## Non-goals

- Replacing licensed banking or credit bureaus
- Building a property marketplace
- Shipping a property-manager product in MVP
- Connecting every mobile-money operator in Phase 0
- Native iOS/Android apps in MVP

## Personas

See `PROJECT.md`. Primary: landlord with multiple units; tenant paying monthly by mobile money.

## Functional requirements

### Authentication & identity — P0 (hackathon)

- Landlord and tenant can register and sign in.
- Roles are distinct; a user may later hold more than one role, but MVP may use a single active role.
- Session secrets never leak to the client beyond intended public config.

### Properties & units — P0

- Landlord can create a property and one or more units.
- Units have rent amount in TZS and occupancy state.

### Tenancy & invitations — P0

- Landlord can invite a tenant (phone and/or email).
- Tenancy binds landlord, tenant, property, and unit.

### Digital agreements — P0

- Agreement is generated from structured tenancy data.
- Statuses: DRAFT, SENT, VIEWED, ACCEPTED, ACTIVE, EXPIRED, TERMINATED, RENEWED.
- Acceptance stores version, user, timestamp, and audit metadata.
- PDF generation is P1; legal e-signature certification is P2 / production legal work.

### Billing — P0

- System generates rent invoices/obligations with ID, tenancy, amount, period, due date, status, amount paid, balance.
- Invoice is not 1:1 with a single payment.

### Payments — P0 (sandbox), P1 (live rails)

- Tenant can initiate or simulate payment.
- Landlord sees successful payment without refresh gymnastics in the demo.
- Provider adapter supports sandbox now; M-Pesa, Mixx by Yas, Airtel Money, HaloPesa, bank, and manual later.

### Receipts — P0

- Successful payment produces a digital receipt the tenant can view.

### Notifications — P0 (sandbox or logged), P1 (Africa's Talking)

- Events: invitation, agreement, rent reminder, payment, receipt, maintenance, expiry.

### Maintenance — P0

- Tenant submits category, title, description, urgency.
- Landlord updates status; tenant sees progress; history is kept.

### Timeline & Rental Passport — P0 (summary), P1 (full)

- Major events appear on a tenancy timeline.
- Passport is consent-controlled and is not a credit score.

### Analytics — P2

- Collection summaries and charts after the demo path is solid.

## Non-functional requirements

| Area | Requirement | Priority |
| --- | --- | --- |
| Locale | TZS, `en-TZ` dates, Tanzanian phones | P0 |
| Performance | Usable on low-cost Android and slow networks | P0 |
| Accessibility | Labels, keyboard, not color-only status | P0 |
| Security | Server authz, no public PII, env secrets | P0 |
| RLS | Required before production data | P0 for production, P1 for demo if sandbox-only |
| Availability | Vercel hosting | P1 |
| Swahili | Architecture now, UI later | P1/P2 |
| Observability | Structured logs, no secrets in logs | P1 |

## Workflows

Documented in `PROJECT.md` section 14 and `docs/HACKATHON.md`.

## Acceptance criteria (MVP)

- A reviewer can complete the 20-step vertical without unimplemented dead ends on the demo path.
- Amounts display as TZS with thousands separators.
- Placeholder integrations are labeled as planned or sandbox.
- Lint, typecheck, and production build succeed.

## MVP requirements

P0 items in the functional list that sit on the demo path.

## Post-MVP requirements

Live payment rails, production SMS, PDF agreements, Swahili, property-manager role, advisory maintenance intelligence, formal legal review of agreements.

## Accessibility

Visible labels, focus states, semantic errors, status text plus color, WCAG-minded contrast.

## Responsiveness

Mobile-first tenant flows; desktop-capable landlord dashboards. Tables collapse to cards on small screens.

## Performance

Server rendering where appropriate, paginated lists, compressed assets, minimal client JS.

## Low-bandwidth support

Avoid heavy hero media, avoid chatty client polling, prefer SMS for critical reminders.

## Observability

Log payment and webhook handling with correlation IDs. Never log full PAN-like secrets, API keys, or raw ID documents.

## Success metrics

See `PROJECT.md` section 23.
