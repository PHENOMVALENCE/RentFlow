# Roadmap — RentFlow

## PHASE 0 — Repository bootstrap

**Objective:** Establish the Git workflow, Next.js app, documentation, and public shell.

**Deliverables:** `main` baseline, `masterchanges`, Next.js + TypeScript + Tailwind + ESLint, docs, `.env.example`, landing shell.

**Dependencies:** GitHub repository.

**Acceptance:** lint, typecheck, and production build pass; PR opened to `main` and not auto-merged.

## PHASE 1 — UI foundation and authentication

**Objective:** Sign-up / sign-in for landlord and tenant.

**Deliverables:** Auth routes, profile row, role-aware redirects, protected layouts.

**Dependencies:** Supabase project.

**Acceptance:** Both roles can register, log in, and reach an empty dashboard.

## PHASE 2 — Property + unit management

**Objective:** Landlord can model buildings and units with TZS rent.

**Deliverables:** CRUD for properties and units; occupancy flags.

**Dependencies:** Phase 1.

**Acceptance:** Landlord creates a property and a unit with monthly rent.

## PHASE 3 — Tenant onboarding + tenancy management

**Objective:** Invite tenant and bind a tenancy to a unit.

**Deliverables:** Invitation, tenancy record, tenant view of assigned unit.

**Dependencies:** Phase 2.

**Acceptance:** Tenant accepts invite and sees the unit.

## PHASE 4 — Digital agreements

**Objective:** Structured agreement draft, send, view, accept.

**Deliverables:** Agreement statuses, acceptance audit row.

**Dependencies:** Phase 3.

**Acceptance:** Tenant acceptance is stored with version and timestamp.

## PHASE 5 — Rent billing

**Objective:** Generate invoices independent of payments.

**Deliverables:** Invoice statuses, due dates, balances.

**Dependencies:** Phase 4.

**Acceptance:** After acceptance, a rent obligation is visible to both parties.

## PHASE 6 — Payments

**Objective:** Record rent payment through the provider abstraction.

**Deliverables:** Sandbox adapter, payment statuses, landlord live view, receipts.

**Dependencies:** Phase 5.

**Acceptance:** Simulated payment marks invoice paid and issues a receipt.

## PHASE 7 — SMS reminders

**Objective:** Notify parties of invitations, due rent, and payments.

**Deliverables:** SMS adapter (Africa's Talking or sandbox logger).

**Dependencies:** Phase 6.

**Acceptance:** A payment or reminder event produces a sent or logged SMS.

## PHASE 8 — Maintenance

**Objective:** Tenant reports issues; landlord updates status.

**Deliverables:** Categories, priorities, status history, optional attachments.

**Dependencies:** Phase 3.

**Acceptance:** Tenant sees landlord status changes.

## PHASE 9 — Rental Passport + timeline

**Objective:** Tenancy timeline and consent-controlled passport summary.

**Deliverables:** Event log UI; passport stats; no public exposure.

**Dependencies:** Phases 4–8.

**Acceptance:** Demo can show timeline and passport without calling it a credit score.

## PHASE 10 — Analytics + polish

**Objective:** Collection summaries and UX hardening.

**Deliverables:** Simple landlord totals; accessibility and low-bandwidth passes.

**Dependencies:** Phase 6.

**Acceptance:** Landlord can see paid vs overdue in TZS.

## PHASE 11 — Hackathon demo hardening

**Objective:** Reliable 15-step demo.

**Deliverables:** Seed demo accounts (non-secret), script, failure fallbacks.

**Dependencies:** Phases 1–9 as available.

**Acceptance:** Full vertical can be demonstrated without crashes.
