# Product Requirements — RentFlow

## Background

RentFlow is a 2027 Final Year Project and market-oriented Tanzanian rental-management platform. It is designed to replace fragmented rental administration across paper agreements, WhatsApp chats, notebooks, spreadsheets, mobile-money confirmations, screenshots and manual maintenance follow-up.

## Product Goal

Create one auditable rental lifecycle for landlords, tenants and property managers:

**Property → Unit → Tenancy → Agreement → Rent Invoice → Payment → Receipt → Maintenance → Inspection → Renewal / Exit**

## Primary Problems

- landlords lack clear visibility into expected, paid, partially paid and overdue rent;
- payment evidence is often scattered across SMS messages and screenshots;
- tenants may struggle to retrieve receipts and agreement records;
- rent reminders and lease-expiry tracking are manual;
- maintenance complaints lack structured status history;
- deposit and move-out disagreements may lack documented inspection evidence;
- multi-property landlords need portfolio-level reporting;
- rental systems that assume constant broadband/smartphone access can exclude users.

## Product Principles

- one shared source of truth for authorized participants;
- invoices and payments are separate concepts;
- financial state is derived from authoritative records;
- mobile-money-first, provider-agnostic payment design;
- SMS as an operational channel;
- mobile-first and low-bandwidth-aware UX;
- English/Kiswahili localization architecture;
- tenant privacy and least privilege;
- no automatic blacklisting or tenant credit-score claims;
- no legally certified e-signature claims unless the implemented mechanism supports them;
- no representation that RentFlow holds security-deposit money unless a compliant custody model exists.

## Personas

### Landlord
Needs property/unit visibility, tenant records, agreements, rent collection, arrears, receipts, maintenance, lease expiry and reporting.

### Tenant
Needs clear rent obligations, payment options, proof of payment, agreements, maintenance tracking and tenancy history.

### Property Manager
Needs delegated access to assigned properties, tenant operations, maintenance and reporting without unrestricted landlord-account access.

### Administrator
Needs auditable support/operations capabilities and integration-failure visibility.

## Priority Definitions

- **P0 — FYP Core:** required for the primary end-to-end demonstration and evaluation.
- **P1 — FYP Robustness:** important for a strong production-style FYP if time permits after P0 is stable.
- **P2 — Product Expansion:** commercial/future extensions after the core is validated.

## Functional Requirements by Priority

### Authentication and Authorization — P0

- secure registration/sign-in;
- landlord and tenant roles;
- server-side authorization;
- protected dashboards;
- tenant/landlord data isolation.

Property-manager role is P1 if not included in the first authentication implementation.

### Properties and Units — P0

- create/edit/archive properties;
- create/edit units;
- TZS rent configuration;
- occupancy/vacancy state;
- unit details and tenancy linkage.

### Tenant and Tenancy Management — P0

- invite/link tenant;
- create tenancy;
- start/end dates;
- billing rules;
- deposit metadata;
- tenancy status and history;
- lease-expiry visibility.

### Digital Agreements — P0

- agreement generated from structured tenancy data;
- versioning;
- review/send/accept workflow;
- acceptance audit metadata.

PDF rendering and OTP acceptance can be P1 if the structured workflow is already correct.

### Rent Billing — P0

- generate invoices/obligations independently of payments;
- calculate amount due and balance;
- support DRAFT, UPCOMING, DUE, PARTIALLY_PAID, PAID, OVERDUE, WAIVED and CANCELLED where applicable;
- support recurring monthly rental schedules;
- retain invoice history.

### Payments — P0 sandbox / P1 production-capable rail

- initiate payment against an invoice;
- provider-agnostic adapter;
- record provider/internal references;
- process success/failure/cancelled states;
- idempotent webhook processing;
- server-side verification;
- partial-payment allocation;
- distinguish manual vs provider-verified payments.

### Receipts — P0

- create auditable digital receipt after valid payment allocation;
- show amount, date, tenant/unit, invoice allocation and payment reference;
- historical receipt retrieval.

### Notifications and SMS — P0 sandbox/logging / P1 production-capable

Events:

- tenant invitation;
- agreement ready/accepted;
- rent reminder;
- overdue rent;
- payment success/failure;
- receipt ready;
- maintenance update;
- lease expiry.

Provider target: Africa's Talking through an adapter boundary.

### Maintenance — P0

- tenant creates issue;
- category, description, priority and attachments;
- landlord/property manager updates status;
- chronological status history;
- tenant sees progress.

### Audit Timeline — P0

- major tenancy events appear chronologically;
- agreement, invoice, payment, receipt and maintenance events are traceable;
- sensitive payloads/secrets are excluded from user-facing history.

### Analytics — P1

- expected rent;
- collected rent;
- outstanding/overdue rent;
- collection rate;
- occupancy/vacancy;
- upcoming lease expiries;
- maintenance workload and resolution metrics;
- property-by-property summary.

### Move-In/Move-Out Inspections — P1

- checklist and condition records;
- notes and photographic evidence;
- move-in vs move-out comparison;
- meter readings where relevant.

### Security-Deposit Accounting — P1

- deposit required/received record;
- documented deductions;
- refundable balance;
- settlement status;
- no custody/escrow claim in the initial implementation.

### Property Manager — P1

- landlord assigns manager to selected properties;
- delegated permissions;
- no access to unrelated landlord resources;
- actions remain auditable.

### Localization — P1

- English and Kiswahili translation keys;
- locale-appropriate currency/date/number formatting;
- SMS copy respects preferred language when configured.

### USSD — P2

Potential low-bandwidth self-service:

- check rent balance;
- initiate payment flow;
- view due date;
- submit simple maintenance request/status inquiry.

### Rental History / Portable Passport — P2

A future tenant-controlled history may summarize verified tenancies and payments. It must be consent-controlled and must not be branded or used as an automatic credit score/blacklist.

## Non-Goals for Initial FYP

- property marketplace/search as the central product;
- mortgage or consumer lending;
- automated tenant credit decisions;
- automatic blacklisting;
- payroll or tax filing;
- customer-fund escrow/custody;
- integration with every payment operator at once;
- multi-country support;
- native iOS/Android apps before the responsive web/PWA experience is validated.

## Non-Functional Requirements

Detailed requirements and identifiers are in `docs/SRS.md`.

Key expectations:

- secure server-side authorization;
- RLS before real Supabase pilot/production use;
- idempotent financial integrations;
- structured logs without secrets;
- responsive mobile-first UI;
- accessibility-minded controls and status communication;
- efficient low-bandwidth behaviour;
- maintainable TypeScript/domain separation;
- testable business logic;
- documented migrations and environment configuration.

## Primary FYP Acceptance Flow

A reviewer should be able to complete the following without dead ends:

1. landlord authenticates;
2. creates property and unit;
3. links/invites tenant;
4. creates tenancy and agreement;
5. tenant reviews/accepts;
6. rent invoice is generated;
7. tenant initiates payment;
8. payment result is reconciled server-side;
9. partial/full payment status is correct;
10. digital receipt is available;
11. notification/SMS event is sent or reliably logged;
12. tenant raises maintenance issue;
13. landlord updates it;
14. both parties see the history;
15. landlord dashboard reflects authoritative collections/balances.

## Success Metrics

The product and dissertation may evaluate:

- payment reconciliation correctness;
- invoice/balance calculation correctness;
- task completion time;
- receipt retrieval time;
- maintenance traceability and resolution time;
- SMS delivery results;
- authorization test results;
- mobile usability;
- application response time;
- user satisfaction/usability results.

See `docs/RESEARCH_AND_EVALUATION.md` and `docs/TESTING.md`.
