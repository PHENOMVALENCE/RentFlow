# Roadmap — RentFlow 2027 Final Year Project

This roadmap prioritizes a complete, testable rental lifecycle before advanced commercial features. `main` remains the base/release branch; implementation proceeds through `masterchanges` with small iterative commits and pull requests.

## Phase 0 — Repository and Product Foundation

**Status:** Complete.

Deliverables:

- Next.js + TypeScript + Tailwind foundation;
- Git workflow and agent instructions;
- public/auth UI shell;
- initial domain/payment/SMS abstractions;
- environment template;
- baseline product and architecture documentation.

Historical bootstrap was merged through PR #1.

## Phase 1 — FYP Requirements and Architecture Baseline

**Status:** Documentation baseline established; implementation validation remains ongoing.

Deliverables:

- FYP proposal;
- formal SRS;
- research/evaluation plan;
- testing strategy;
- deployment strategy;
- updated project/product scope;
- architecture/database/integration review against the SRS.

Acceptance:

- all P0 product requirements can be traced to system modules and planned tests;
- no hackathon-only assumptions remain in the active project scope.

## Phase 2 — Authentication and Role Isolation

Objective: establish secure identity and authorization.

Deliverables:

- Supabase project/environment;
- landlord and tenant sign-up/sign-in;
- profiles and role model;
- protected dashboards;
- server-side authorization;
- RLS policies for core data;
- automated negative authorization tests.

Acceptance:

- authenticated roles reach correct dashboards;
- Tenant A cannot access Tenant B data;
- Landlord A cannot access Landlord B data.

## Phase 3 — Property, Unit and Tenancy Lifecycle

Objective: model the core rental relationship.

Deliverables:

- property CRUD;
- unit CRUD;
- occupancy/vacancy state;
- tenant invite/link flow;
- tenancy creation and activation;
- rent amount, billing frequency and due rules;
- lease start/end dates and expiry indicators.

Acceptance:

- landlord can create a property/unit and activate a valid tenancy;
- tenant can see only their linked tenancy.

## Phase 4 — Digital Agreements and Audit Trail

Objective: create traceable structured agreements.

Deliverables:

- agreement generation from tenancy data;
- agreement versions;
- send/view/accept lifecycle;
- acceptance timestamps and audit metadata;
- tenancy activity timeline.

Optional robustness:

- OTP acceptance;
- PDF generation/verification ID.

Acceptance:

- accepted agreement can be traced to an exact version and user.

## Phase 5 — Rent Engine and Invoicing

Objective: implement reliable rental obligations independent of payments.

Deliverables:

- recurring rent schedule;
- invoice generation;
- due dates/periods;
- DRAFT, UPCOMING, DUE, PARTIALLY_PAID, PAID, OVERDUE, WAIVED and CANCELLED logic where applicable;
- balance calculations;
- landlord and tenant invoice views.

Acceptance:

- invoices are generated correctly from tenancy rules;
- calculations are covered by unit tests.

## Phase 6 — Payments, Partial Allocations and Receipts

Objective: build a robust mobile-money-ready financial workflow.

Deliverables:

- payment-provider abstraction;
- sandbox adapter first;
- payment initiation;
- payment status lifecycle;
- idempotent webhook processing;
- amount/currency/reference verification;
- partial-payment allocation;
- digital receipts;
- manual-payment distinction if supported.

Acceptance:

- full payment settles invoice once;
- partial payment produces correct remaining balance;
- duplicate webhook cannot duplicate payment/allocation/receipt;
- failed payment cannot settle invoice.

## Phase 7 — SMS and Notification Automation

Objective: reduce manual landlord/tenant communication.

Deliverables:

- notification service/adapter;
- Africa's Talking sandbox or equivalent;
- rent due reminders;
- overdue reminders;
- payment confirmations;
- agreement notifications;
- lease-expiry notifications;
- maintenance updates;
- delivery logging/retry strategy.

Acceptance:

- provider failure does not corrupt originating transactions;
- representative SMS workflows are testable.

## Phase 8 — Maintenance Management

Objective: create a transparent maintenance workflow.

Deliverables:

- tenant issue reporting;
- categories, priority and attachments;
- REPORTED → ACKNOWLEDGED → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED workflow;
- REOPENED where required;
- status history;
- notifications.

Acceptance:

- both parties see the same chronological ticket state.

## Phase 9 — Landlord Analytics and Portfolio Reporting

Objective: turn transactional records into useful management information.

Deliverables:

- expected rent;
- collected rent;
- overdue amount;
- collection rate;
- occupancy/vacancy;
- upcoming lease expiries;
- maintenance workload/resolution indicators;
- property-level summaries.

Acceptance:

- dashboard values are derived from authoritative invoices/payments rather than duplicated manual totals.

## Phase 10 — Inspections and Security-Deposit Accounting

Objective: improve move-in/move-out traceability.

Deliverables:

- move-in inspection;
- move-out inspection;
- checklist/condition/notes/images;
- optional meter readings;
- comparison view;
- deposit accounting ledger;
- deduction evidence and refundable balance.

Acceptance:

- closing record is auditable;
- platform does not claim to custody deposit funds.

## Phase 11 — Property Manager, Localization and Accessibility

Objective: improve market readiness and inclusion.

Deliverables:

- delegated property-manager permissions;
- English/Kiswahili localization;
- SMS language preference;
- accessibility review;
- mobile/low-bandwidth optimization.

Acceptance:

- delegated users cannot access unrelated properties;
- primary tenant/landlord journeys work at common mobile widths.

## Phase 12 — FYP Evaluation and Hardening

Objective: validate the system academically and technically.

Deliverables:

- complete automated quality gate;
- end-to-end FYP demo path;
- performance measurements;
- authorization/security test results;
- usability study;
- problem/solution evaluation;
- dissertation evidence and diagrams;
- deployment/demo environment;
- known limitations register.

Acceptance:

- FYP requirements are traceable to implementation/tests;
- critical demo flow works without dead ends;
- evaluation results are based on measured/collected evidence rather than invented claims.

## Post-FYP Product Expansion

Potential future work:

- production mobile-money rails at scale;
- USSD balance/payment/maintenance workflows;
- WhatsApp notifications;
- maintenance vendor management;
- service-charge/utility billing;
- portfolio forecasting and operational anomaly detection;
- tenant-controlled portable rental history;
- commercial subscription/billing model;
- native/mobile app only if responsive web/PWA constraints justify it.

Commercial expansion must preserve tenant privacy and avoid automated housing-access decisions based on opaque scoring.
