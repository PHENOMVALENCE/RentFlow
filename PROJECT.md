# RentFlow Project Specification

## 1. Executive Summary

RentFlow is a 2027 Final Year Project and market-oriented digital rental management platform designed for Tanzanian residential tenancies. It replaces fragmented paper agreements, WhatsApp chats, notebooks, spreadsheets, mobile-money screenshots and informal maintenance follow-up with one auditable workflow:

**property → unit → tenant → tenancy → agreement → rent invoice → payment → receipt → maintenance → inspection → renewal or exit**

The project is intentionally broader than a basic rent-tracking CRUD system. It combines tenancy lifecycle management, financial workflows, mobile-money integration, SMS communication, maintenance operations, inspections, deposit accounting, analytics and auditability.

## 2. Vision

Become trusted digital infrastructure for rental relationships in Tanzania: **one agreement, one payment trail, one source of truth.**

## 3. Mission

Give landlords, tenants and property managers a shared and auditable system for occupancy, rent obligations, mobile-money payments, receipts, maintenance, agreements, inspections and tenancy history while remaining practical on mobile devices and constrained networks.

## 4. Problem Statement

Rental relationships are commonly managed across disconnected channels: paper or verbal agreements, WhatsApp, handwritten notebooks, spreadsheets, mobile-money SMS, payment screenshots, phone calls and informal maintenance requests.

Landlords can struggle to know who has paid, calculate outstanding rent, track partial payments, issue receipts, monitor lease expiry, manage several properties, retain documents and follow maintenance work.

Tenants can struggle to retrieve agreements, prove payment, understand balances, obtain receipts, follow maintenance progress and preserve a reliable history of their tenancy.

RentFlow addresses this fragmentation by turning the tenancy lifecycle into a structured, digital and auditable workflow.

## 5. Product Positioning

RentFlow is primarily a **rental operations and rent-assurance platform**, not a property-listing marketplace.

The initial market context is Tanzania:

- TZS as the default currency;
- Tanzanian phone-number formats;
- mobile-money-first payment design;
- SMS as an important operational channel;
- mobile-first and low-bandwidth-aware UX;
- English and Kiswahili localization architecture.

## 6. Target Users

### Landlords
Individuals or businesses managing one or more residential rental properties.

### Tenants
People renting houses, apartments, rooms or residential units.

### Property Managers
Users managing assigned properties on behalf of landlords with delegated permissions.

### Administrators
Platform operators supporting configuration, troubleshooting and audit processes without bypassing privacy controls.

## 7. Core Value Proposition

Instead of:

- agreement → paper;
- payment → screenshot;
- receipt → manual message;
- reminder → phone call;
- maintenance → chat;
- inspection → memory/photos in a phone;
- records → notebook/spreadsheet;

RentFlow provides:

**Digital agreement → automated rent obligation → mobile-money payment → verified reconciliation → digital receipt → SMS notification → maintenance tracking → inspection/deposit record → tenancy history → renewal/exit.**

## 8. Product Principles

1. Shared source of truth for authorized participants.
2. Financial records are explicit and auditable.
3. Invoices and payments are separate domain concepts.
4. Partial payments are supported through allocations.
5. External-provider callbacks are untrusted until verified.
6. Mobile-first and low-bandwidth aware.
7. Provider-agnostic payments and notifications.
8. Least privilege and tenant privacy.
9. Complete vertical workflows over feature sprawl.
10. Honest product claims: no fake legal certification, credit scoring or automatic blacklisting.

## 9. Core Modules

1. Authentication and Identity
2. Role-Based Access Control
3. Landlord Profiles
4. Tenant Profiles
5. Property Management
6. Unit Management
7. Property-Manager Assignment
8. Tenancy Lifecycle Management
9. Digital Rental Agreements
10. Rent Billing / Invoice Engine
11. Payment Initiation
12. Payment Reconciliation
13. Partial Payment Allocation
14. Digital Receipts
15. SMS and In-App Notifications
16. Maintenance Management
17. Move-In and Move-Out Inspections
18. Security-Deposit Ledger
19. Document Vault
20. Audit Trail / Tenancy Timeline
21. Landlord Analytics and Reporting
22. Tenant Self-Service Dashboard
23. Localization Architecture (English/Kiswahili)
24. Optional USSD Workflows

Detailed functional requirements are defined in `docs/SRS.md`.

## 10. Rent Engine

Rent billing is a core domain capability.

A tenancy defines rules such as:

- rent amount;
- billing frequency;
- due-day/date;
- tenancy start/end dates;
- optional grace rules;
- deposit/accounting information.

The system generates invoice/obligation records independently from payments. Supported invoice states should include, where applicable:

- DRAFT
- UPCOMING
- DUE
- PARTIALLY_PAID
- PAID
- OVERDUE
- WAIVED
- CANCELLED

Balances are derived from invoice totals minus valid payment allocations, not from a single `paid=true` flag.

## 11. Payment Architecture

Payment implementation must be provider-agnostic.

The initial FYP may use a sandbox adapter, followed by a production-capable mobile-money provider when credentials are available.

Store at minimum:

- internal payment ID;
- invoice/tenancy references;
- amount and currency;
- payer identity/phone as appropriate;
- provider;
- provider reference;
- payment status;
- initiation/completion timestamps;
- safe provider metadata;
- allocation records.

Critical requirements:

- idempotent webhook processing;
- server-side verification;
- duplicate-event protection;
- amount/currency/reference validation;
- explicit handling of failed/cancelled payments;
- manual payments clearly distinguishable from provider-verified payments.

## 12. Notification Strategy

SMS is a first-class operational channel. The architecture should support Africa's Talking or another suitable provider through an adapter.

Notification events include:

- tenant invitations;
- agreement ready/accepted events;
- rent due reminders;
- overdue rent reminders;
- payment success/failure;
- receipt availability;
- maintenance updates;
- lease-expiry alerts.

Notification delivery failure must not corrupt the business transaction that caused the notification.

## 13. Maintenance Workflow

A maintenance ticket should support:

- category;
- description;
- priority;
- attachments/images;
- reporting tenant;
- responsible landlord/property manager;
- optional assigned service provider;
- timestamps and notes;
- status history.

Suggested states:

**REPORTED → ACKNOWLEDGED → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED**, with REOPENED when required.

## 14. Inspections and Security Deposits

Move-in and move-out inspections should record condition, notes, meter readings where relevant and photographic evidence.

The deposit component is initially an **accounting ledger**, not a custody/escrow product. It should show:

- deposit required;
- amount recorded as received;
- documented deductions;
- reason/evidence for deductions;
- refundable balance;
- settlement status.

RentFlow must not claim to hold customer deposits unless a compliant financial custody mechanism is later implemented.

## 15. Agreement Strategy

Agreements may be created from structured tenancy data and versioned.

Acceptance should record:

- agreement version;
- accepting user;
- acceptance timestamp;
- relevant audit metadata;
- optional OTP or verification event when implemented.

The product must not state that ordinary in-app acceptance is automatically a legally certified electronic signature. Legal claims must match the implemented mechanism and applicable law.

## 16. Analytics and Reporting

Landlord/property-manager analytics should include, where implemented:

- total properties and units;
- occupancy/vacancy;
- expected rent;
- rent collected;
- outstanding/overdue rent;
- collection rate;
- partial-payment count;
- upcoming lease expiries;
- maintenance workload and resolution metrics;
- property-by-property financial summaries.

All figures must be derived from authoritative transaction data.

## 17. Audit Trail

Critical tenancy events should form a chronological timeline covering agreements, invoices, payments, receipts, maintenance, inspections, renewals and closure.

Financial/audit records should avoid destructive rewriting. Changes should remain traceable.

## 18. Localization and Accessibility

- English and Kiswahili should be supported through translation keys rather than business-logic duplication.
- Dates, currency and numbers should be appropriate for Tanzania.
- Core flows must remain usable on small mobile screens.
- Forms and controls should use semantic, accessible patterns.
- Low-bandwidth usage should avoid unnecessary polling and oversized assets.

## 19. FYP Scope

### Required FYP Vertical

1. Landlord authenticates.
2. Creates property and unit.
3. Links/invites tenant.
4. Creates tenancy.
5. Creates/sends agreement.
6. Tenant reviews and accepts.
7. Rent invoice is generated.
8. Tenant sees amount due.
9. Tenant initiates payment.
10. Payment provider/sandbox returns authoritative result.
11. Backend reconciles payment idempotently.
12. Partial/full payment state is reflected correctly.
13. Receipt is generated.
14. SMS/in-app confirmation is recorded/sent.
15. Tenant submits maintenance issue.
16. Landlord/property manager updates it.
17. Both parties see history.
18. Dashboard reflects collections and outstanding rent.
19. Inspection/deposit close-out is demonstrated if included in final implementation.

### Explicitly Out of Initial Scope

- property marketplace/search as the primary product;
- mortgage/lending;
- tax filing;
- payroll;
- customer-fund custody/escrow;
- automatic tenant blacklists;
- automated tenant credit scores;
- claims of legally certified e-signature without validated implementation;
- multi-country expansion;
- production integrations with every Tanzanian payment provider at once.

## 20. Technical Direction

Current project direction:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- PostgreSQL
- Supabase for PostgreSQL/Auth/Storage unless architecture changes
- Zod for validation where appropriate
- provider adapters for payments and SMS
- Vercel deployment
- GitHub source control and CI/CD

Architecture details: `docs/ARCHITECTURE.md`.

Database details: `docs/DATABASE_SCHEMA.md`.

Integration details: `docs/API_INTEGRATIONS.md`.

## 21. Security and Privacy

Mandatory principles:

- server-side authorization;
- least privilege;
- Row Level Security before real Supabase pilot/production use;
- private storage for tenancy documents;
- webhook validation and idempotency;
- input and upload validation;
- secrets only in environment variables/secret stores;
- no public tenant payment history;
- no real customer/research data in Git;
- consent for any portable rental-history sharing.

## 22. Research and Evaluation

This is an evaluated Final Year Project, not only an implementation exercise.

Academic baseline: `docs/FYP_PROPOSAL.md`.

Evaluation methodology: `docs/RESEARCH_AND_EVALUATION.md`.

Testing strategy: `docs/TESTING.md`.

Potential metrics include payment reconciliation correctness, task completion time, maintenance resolution time, SMS delivery results, authorization test results, usability outcomes and application response times.

## 23. Success Criteria

The FYP is successful when it demonstrates a coherent, secure and measurable rental lifecycle with no fake provider/legal claims and no critical dead ends in the primary flow.

A strong final demonstration should show:

**Landlord dashboard → property/unit → tenancy/agreement → rent invoice → partial/full mobile-money payment → verified receipt → SMS → maintenance → audit timeline → reports/close-out.**

## 24. Future Product Direction

After the FYP core is stable, possible extensions include:

- production mobile-money integrations;
- USSD tenant self-service;
- WhatsApp notifications;
- property-manager SaaS plans;
- utility/service-charge billing;
- vendor management for maintenance;
- PDF agreements with verification IDs;
- advanced portfolio analytics;
- carefully designed, consent-controlled rental history portability;
- native/mobile application only if the web/PWA approach proves insufficient.

Future features should extend the core rental-management proposition rather than distract from it.
