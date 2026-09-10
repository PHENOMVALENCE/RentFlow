# Roadmap — RentFlow 2027 Final Year Project

This roadmap prioritizes a complete, testable rental lifecycle before advanced commercial features. `main` remains the base/release branch; implementation proceeds through `masterchanges` with small iterative commits and pull requests.

## Phase 0 — Historical Prototype

**Status:** Superseded.

The original 2026 prototype used Next.js/TypeScript and was merged through PR #1. That application codebase has since been intentionally removed from `masterchanges` so the 2027 FYP can start from a clean Laravel baseline.

The historical prototype remains available through Git history only; it is not the canonical implementation direction.

## Phase 1 — FYP Documentation and Laravel Architecture Baseline

**Status:** In progress / documentation baseline established.

Deliverables:

- FYP proposal;
- formal SRS;
- product requirements;
- Laravel architecture decision;
- MySQL schema blueprint;
- payment/SMS integration strategy;
- testing strategy;
- deployment strategy;
- research/evaluation plan;
- agent/contribution workflow;
- clean documentation-only repository baseline.

Acceptance:

- Laravel is the canonical implementation stack;
- MySQL is the default database;
- no active documentation instructs agents to build the old Next.js/Supabase architecture;
- P0 product requirements can be traced to modules and planned tests.

## Phase 2 — Clean Laravel Bootstrap

Objective: establish the new application foundation without implementing broad product features prematurely.

Deliverables:

- initialize Laravel in repository root while preserving existing docs;
- PHP/Composer configuration;
- Blade + Livewire + Tailwind foundation;
- MySQL configuration and `.env.example`;
- base authentication starter stack;
- base test runner;
- code formatter/static-analysis tooling selected and documented;
- GitHub CI baseline;
- health/home page and basic responsive layout.

Acceptance:

- clean clone can be installed using documented commands;
- application connects to a local test/development MySQL database;
- `php artisan test` passes;
- production frontend assets build;
- no secrets are committed.

## Phase 3 — Authentication and Role Isolation

Objective: establish secure identity and server-side authorization.

Deliverables:

- landlord and tenant registration/sign-in;
- user/profile/role model;
- protected dashboards;
- Laravel Policies/Gates/middleware;
- secure password/session handling;
- negative authorization tests;
- initial administrator role boundary;
- property-manager role architecture without overbuilding it.

Acceptance:

- authenticated roles reach correct dashboards;
- Tenant A cannot access Tenant B data;
- Landlord A cannot access Landlord B data;
- changing IDs/URLs cannot bypass Laravel authorization policies.

## Phase 4 — Property, Unit and Tenancy Lifecycle

Objective: model the core rental relationship.

Deliverables:

- property CRUD;
- unit CRUD;
- occupancy/vacancy logic;
- tenant invite/link flow;
- tenancy creation and activation;
- rent amount and billing rules;
- lease start/end dates;
- deposit metadata;
- tenancy status/history;
- lease-expiry indicators.

Acceptance:

- landlord can create property/unit and activate a valid tenancy;
- conflicting active tenancy rules are enforced;
- tenant sees only their own linked tenancy;
- factories/seeders produce synthetic demo data.

## Phase 5 — Digital Agreements and Audit Trail

Objective: create traceable structured rental agreements.

Deliverables:

- agreement generation from tenancy data;
- versioning;
- send/view/accept lifecycle;
- acceptance timestamps and audit metadata;
- tenancy timeline events;
- private agreement document access.

Optional robustness:

- OTP acceptance;
- PDF generation;
- verification/reference ID.

Acceptance:

- accepted agreement is traceable to exact version, user and timestamp;
- unauthorized users cannot retrieve the agreement;
- product does not claim legal certification beyond the implemented mechanism.

## Phase 6 — Rent Engine and Invoicing

Objective: implement reliable rent obligations independently from payments.

Deliverables:

- recurring tenancy billing schedule;
- Laravel Scheduler command/job orchestration;
- invoice generation service/action;
- due dates and billing periods;
- DRAFT, UPCOMING, DUE, PARTIALLY_PAID, PAID, OVERDUE, WAIVED and CANCELLED logic where applicable;
- balance calculations;
- landlord and tenant invoice views;
- duplicate invoice prevention.

Acceptance:

- invoices are generated correctly from tenancy rules;
- repeated scheduler execution does not create duplicates;
- calculations/status rules are covered by automated tests.

## Phase 7 — Payments, Partial Allocation and Receipts

Objective: build a robust mobile-money-ready financial workflow.

Deliverables:

- Laravel payment-provider contract/service;
- sandbox adapter first;
- internal payment records;
- payment initiation;
- provider reference mapping;
- webhook/callback controller;
- signature/authenticity checks where supported;
- idempotent processing;
- amount/currency/reference validation;
- database-transaction reconciliation;
- partial-payment allocations;
- digital receipts;
- manual-payment distinction if supported.

Acceptance:

- full payment settles an invoice exactly once;
- partial payment creates the correct remaining balance;
- duplicate webhook cannot duplicate allocation/receipt;
- failed/cancelled payment cannot settle invoice;
- rollback leaves records consistent when reconciliation fails midway.

## Phase 8 — SMS and Notification Automation

Objective: reduce manual landlord/tenant communication.

Deliverables:

- Laravel notification/SMS service boundary;
- Africa's Talking sandbox or equivalent;
- queued SMS delivery;
- rent due reminders;
- overdue reminders;
- payment confirmations;
- agreement notifications;
- lease-expiry notifications;
- maintenance updates;
- delivery logging/retry strategy.

Acceptance:

- SMS provider failure does not corrupt originating transaction;
- queued delivery can retry safely;
- representative SMS workflows are covered by tests/fakes.

## Phase 9 — Maintenance Management

Objective: create a transparent maintenance workflow.

Deliverables:

- tenant issue reporting;
- categories and priority;
- validated/private attachments;
- landlord/property-manager handling;
- REPORTED → ACKNOWLEDGED → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED flow;
- REOPENED where required;
- chronological status history;
- notifications.

Acceptance:

- tenant and authorized manager/landlord see the same ticket state/history;
- unauthorized users cannot view/modify unrelated tickets.

## Phase 10 — Landlord Analytics and Portfolio Reporting

Objective: turn transactional records into reliable management information.

Deliverables:

- expected rent;
- collected rent;
- outstanding/overdue rent;
- collection rate;
- occupancy/vacancy;
- upcoming lease expiries;
- maintenance workload/resolution indicators;
- property-level summaries;
- efficient Eloquent queries with pagination/eager loading where needed.

Acceptance:

- dashboard values derive from authoritative invoices/payments/allocations;
- no duplicated manually maintained financial totals;
- representative dataset performance is measured.

## Phase 11 — Inspections and Security-Deposit Accounting

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
- calculations are tested;
- platform does not claim to custody deposit funds.

## Phase 12 — Property Manager, Localization and Accessibility

Objective: improve market readiness and inclusion.

Deliverables:

- delegated property-manager permissions;
- English/Kiswahili Laravel localization resources;
- SMS language preference;
- accessibility review;
- mobile/low-bandwidth optimization.

Acceptance:

- delegated manager cannot access unrelated properties;
- primary tenant/landlord journeys work at common mobile widths;
- critical flows remain understandable in both supported languages where translated.

## Phase 13 — FYP Evaluation and Hardening

Objective: validate the system academically and technically.

Deliverables:

- complete automated quality gate;
- end-to-end FYP demo path;
- authorization/security test evidence;
- performance measurements;
- usability study;
- problem/solution evaluation;
- dissertation diagrams/tables/evidence;
- production-like Laravel deployment;
- queue/scheduler verification;
- backup/recovery documentation;
- known limitations register.

Acceptance:

- FYP requirements are traceable to implementation/tests;
- critical demo flow works without dead ends;
- evaluation results use measured/collected evidence rather than invented claims;
- application can be reproduced from repository documentation.

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
- public API with Laravel Sanctum where a real consumer exists;
- native mobile application only if responsive Laravel web/PWA constraints justify it.

Commercial expansion must preserve tenant privacy and avoid opaque automated housing-access decisions.
