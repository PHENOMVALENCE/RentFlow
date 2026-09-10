# RentFlow Project Specification

## 1. Executive Summary

RentFlow is a 2027 Final Year Project and market-oriented digital rental management platform designed for Tanzanian residential tenancies. It replaces fragmented paper agreements, WhatsApp chats, notebooks, spreadsheets, mobile-money screenshots and informal maintenance follow-up with one auditable workflow:

**property → unit → tenant → tenancy → agreement → rent invoice → payment → reconciliation → receipt → SMS → maintenance → inspection → renewal or exit**

The project is intentionally broader than a basic rent-tracking CRUD system. It combines tenancy lifecycle management, financial workflows, mobile-money integration, SMS communication, maintenance operations, inspections, deposit accounting, analytics and auditability.

The implementation stack is a Laravel monolith using PHP, Blade, Livewire, Tailwind CSS, MySQL, Eloquent, Laravel queues/jobs, scheduler, notifications, policies and migrations.

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
Platform operators supporting configuration, troubleshooting and audit processes through explicit, auditable privileges.

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
11. Prefer Laravel conventions and a single maintainable application over unnecessary distributed architecture.

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
23. Localization (English/Kiswahili)
24. Optional USSD Workflows

Detailed functional requirements are defined in `docs/SRS.md`.

## 10. Canonical Technology Stack

RentFlow will be implemented as a **Laravel monolith**.

### Application

- Laravel
- PHP
- Blade
- Livewire
- Tailwind CSS

### Data

- MySQL 8+
- Eloquent ORM
- Laravel migrations
- factories and seeders using synthetic data

### Application Services

- Laravel Policies/Gates/middleware for authorization
- Laravel Form Requests / validation rules
- Laravel Queues and Jobs
- Laravel Scheduler
- Laravel Notifications
- Laravel Filesystem
- provider-specific payment/SMS implementations behind internal services/interfaces

### Testing

- PHPUnit or Pest through Laravel's testing stack
- Laravel feature tests for HTTP/domain integration
- provider fakes/sandbox adapters for payments and SMS

### Deployment

- standard Laravel-compatible hosting, VPS or container environment
- MySQL
- queue worker
- cron-triggered Laravel Scheduler
- HTTPS
- private file storage
- GitHub source control/CI

The FYP does **not** require a separate Next.js/React frontend, Supabase backend, or microservice fleet.

## 11. Rent Engine

Rent billing is a core domain capability.

A tenancy defines rules such as:

- rent amount;
- billing frequency;
- due-day/date;
- tenancy start/end dates;
- optional grace rules;
- deposit/accounting information.

The system generates invoice/obligation records independently from payments.

Supported invoice states should include, where applicable:

- DRAFT
- UPCOMING
- DUE
- PARTIALLY_PAID
- PAID
- OVERDUE
- WAIVED
- CANCELLED

Balances are derived from invoice totals minus valid payment allocations, not from a single `paid=true` flag.

Laravel Scheduler should orchestrate recurring billing jobs. Domain billing services must prevent duplicate invoices for the same tenancy and period.

## 12. Payment Architecture

Payment implementation must be provider-agnostic.

The initial FYP may use a sandbox adapter, followed by a production-capable mobile-money provider when credentials are available.

Store at minimum:

- internal payment ID;
- tenancy reference;
- amount and currency;
- payer identity/phone as appropriate;
- provider;
- provider reference;
- payment status;
- initiation/completion timestamps;
- safe provider metadata;
- explicit payment allocations.

Critical requirements:

- idempotent webhook processing;
- server-side verification;
- duplicate-event protection;
- amount/currency/reference validation;
- explicit handling of failed/cancelled payments;
- manual payments clearly distinguishable from provider-verified payments;
- database transactions around atomic reconciliation/allocation/state changes.

Payment-provider code should live behind Laravel service/interface boundaries rather than controllers or Livewire components.

## 13. Notification Strategy

SMS is a first-class operational channel. Africa's Talking is the initial target provider, accessed through a Laravel adapter/service.

Notification events include:

- tenant invitations;
- agreement ready/accepted events;
- rent due reminders;
- overdue rent reminders;
- payment success/failure;
- receipt availability;
- maintenance updates;
- lease-expiry alerts.

Slow/retryable SMS work should normally use Laravel queues.

Notification delivery failure must not corrupt the business transaction that caused the notification.

## 14. Maintenance Workflow

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

Laravel authorization must ensure only tenancy participants or properly delegated managers can access the ticket.

## 15. Inspections and Security Deposits

Move-in and move-out inspections should record condition, notes, meter readings where relevant and photographic evidence.

The deposit component is initially an **accounting ledger**, not a custody/escrow product. It should show:

- deposit required;
- amount recorded as received;
- documented deductions;
- reason/evidence for deductions;
- refundable balance;
- settlement status.

RentFlow must not claim to hold customer deposits unless a compliant financial custody mechanism is later implemented.

## 16. Agreement Strategy

Agreements may be created from structured tenancy data and versioned.

Acceptance should record:

- agreement version;
- accepting user;
- acceptance timestamp;
- relevant audit metadata;
- optional OTP or verification event when implemented.

Agreement documents are private tenancy records and should be served through authorization-controlled Laravel routes/storage mechanisms.

The product must not state that ordinary in-app acceptance is automatically a legally certified electronic signature. Legal claims must match the implemented mechanism and applicable law.

## 17. Analytics and Reporting

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

All figures must be derived from authoritative invoice/payment/allocation records.

Use efficient Eloquent queries, eager loading, aggregation and pagination. Avoid manually duplicated dashboard totals.

## 18. Audit Trail

Critical tenancy events should form a chronological timeline covering agreements, invoices, payments, receipts, maintenance, inspections, renewals and closure.

Financial/audit records should avoid destructive rewriting. Changes should remain traceable.

## 19. Localization and Accessibility

- English and Kiswahili should use Laravel localization resources rather than business-logic duplication.
- Dates, currency and numbers should be appropriate for Tanzania.
- Core flows must remain usable on small mobile screens.
- Blade/Livewire forms and controls should use semantic, accessible patterns.
- Low-bandwidth usage should avoid unnecessary polling and oversized assets.

## 20. Authentication and Authorization

The browser application should use Laravel session authentication.

Authorization is enforced server-side through Policies, Gates, middleware and scoped Eloquent relationships/queries.

Important boundaries:

- tenant accesses only their tenancy records;
- landlord accesses only owned properties and related records;
- property manager accesses only assigned properties;
- administrator actions remain explicit/auditable;
- client-controlled IDs/role fields cannot elevate privileges.

A future mobile/external API may use Laravel Sanctum if a real API consumer is introduced.

## 21. FYP Scope

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
11. Laravel backend reconciles payment idempotently.
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
- production integrations with every Tanzanian payment provider at once;
- microservices without a demonstrated requirement;
- a separate frontend/backend framework split without a real need.

## 22. Security and Privacy

Mandatory principles:

- Laravel server-side authorization;
- least privilege;
- CSRF/session protection;
- safe Form Request validation;
- controlled Eloquent mass assignment;
- private storage for tenancy documents;
- webhook validation and idempotency;
- input and upload validation;
- secrets only in environment variables/secret stores;
- no public tenant payment history;
- no real customer/research data in Git;
- consent for any portable rental-history sharing;
- database transactions for sensitive multi-record financial changes.

See `docs/SECURITY.md`.

## 23. Research and Evaluation

This is an evaluated Final Year Project, not only an implementation exercise.

Academic baseline: `docs/FYP_PROPOSAL.md`.

Evaluation methodology: `docs/RESEARCH_AND_EVALUATION.md`.

Testing strategy: `docs/TESTING.md`.

Potential metrics include payment reconciliation correctness, task completion time, maintenance resolution time, SMS delivery results, authorization test results, usability outcomes and application response times.

## 24. Success Criteria

The FYP is successful when it demonstrates a coherent, secure and measurable rental lifecycle with no fake provider/legal claims and no critical dead ends in the primary flow.

A strong final demonstration should show:

**Landlord dashboard → property/unit → tenancy/agreement → rent invoice → partial/full mobile-money payment → verified receipt → SMS → maintenance → audit timeline → reports/close-out.**

## 25. Current Repository State

The previous Next.js application implementation has been intentionally removed from `masterchanges`.

The repository currently contains the FYP/product documentation baseline. The next engineering step is a clean Laravel bootstrap according to `docs/ROADMAP.md` and `docs/DEVELOPMENT.md`.

Do not assume any product capability is currently implemented merely because it is documented here.

## 26. Future Product Direction

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
- public API using Laravel API routes/Sanctum when justified;
- native/mobile application only if the responsive web approach proves insufficient.

Future features should extend the core rental-management proposition rather than distract from it.
