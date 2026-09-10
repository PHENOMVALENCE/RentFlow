# RentFlow Testing and Quality Strategy

## Purpose

This document defines how the Laravel implementation of RentFlow will be verified before Final Year Project submission and before any real-world pilot.

## Quality Goals

RentFlow must be functionally correct, secure across role boundaries, resilient to duplicate external events, usable on mobile devices, and auditable for financial and tenancy workflows.

## Laravel Testing Direction

Use Laravel's testing stack with PHPUnit or Pest. The exact runner/style should be selected during Laravel bootstrap and then used consistently.

Primary command:

```bash
php artisan test
```

Tests should use Laravel factories, seeders/fakes, database refresh/transaction helpers and HTTP/Livewire testing facilities where appropriate.

Real SMS or payment provider calls must not be required for the normal automated test suite.

## Test Levels

### Unit Tests

Focus on deterministic domain logic:

- rent due-date generation;
- invoice status transitions;
- partial-payment allocation;
- outstanding balance calculations;
- tenancy-state transitions;
- deposit-ledger calculations;
- Tanzanian phone-number normalization;
- notification scheduling rules;
- payment state-transition rules;
- webhook idempotency helpers.

### Feature / Integration Tests

Use Laravel feature tests to verify interactions between HTTP/application/domain/persistence layers:

- registration and authentication;
- landlord/tenant role boundaries;
- property → unit → tenancy creation;
- agreement acceptance and version persistence;
- scheduled/manual invoice generation from tenancy rules;
- payment initiation;
- payment creation and allocation;
- receipt generation;
- webhook processing;
- maintenance status history;
- file metadata persistence;
- queued notification dispatch;
- Laravel Policy/Gate authorization boundaries.

### Livewire Tests

Where Livewire is used, test material component behaviour such as:

- form validation;
- authorization-sensitive actions;
- tenancy/payment/maintenance state rendering;
- server-side actions initiated from interactive components.

Do not duplicate every feature test at the Livewire layer if lower-level tests already provide sufficient coverage.

### End-to-End / Browser Tests

Critical browser journeys may be tested with Laravel-compatible browser tooling when it materially improves confidence.

Primary scenarios:

1. landlord registration/login;
2. property and unit creation;
3. tenant onboarding;
4. tenancy activation;
5. agreement review/acceptance;
6. invoice visibility;
7. payment initiation and sandbox completion;
8. receipt retrieval;
9. maintenance submission and landlord update;
10. landlord dashboard reporting;
11. move-out/inspection flow where implemented.

Browser tests should not become a prerequisite for testing simple domain rules that are more reliably covered through unit/feature tests.

## Database Testing

Use a dedicated test database/environment. Never run automated tests against real tenant/pilot data.

Test database behaviour must include:

- foreign-key integrity;
- uniqueness/idempotency constraints;
- transaction rollback behaviour where applicable;
- prevention of duplicate rent invoices;
- payment allocation consistency;
- audit/history persistence.

Migrations should be runnable from an empty database in CI/test environments.

## Payment Test Matrix

At minimum test:

- successful full payment;
- successful partial payment;
- second payment completing the invoice;
- failed payment;
- cancelled payment;
- reversed payment if supported;
- duplicate webhook delivery;
- webhook delivered out of order where applicable;
- unknown provider reference;
- amount mismatch;
- currency mismatch;
- invalid signature when signature verification is supported;
- provider timeout;
- frontend refresh after payment initiation;
- repeated user submission/idempotency handling;
- transaction rollback when reconciliation fails midway.

Payment state must never be trusted solely from client-side success messages.

Use fake/sandbox adapters in automated tests.

## SMS Test Matrix

Test:

- rent reminder queued successfully;
- payment confirmation SMS;
- overdue reminder;
- lease-expiry notification;
- maintenance status notification;
- invalid phone number;
- provider failure;
- provider timeout;
- queue retry behaviour;
- duplicate-send prevention where applicable;
- preferred-language rendering when localization is enabled.

Notification failure must not roll back a valid payment or tenancy transaction.

Use Laravel notification fakes or provider fakes where appropriate.

## Authorization and Privacy Tests

Mandatory negative tests:

- Tenant A cannot access Tenant B's tenancy.
- Tenant A cannot access Tenant B's receipts.
- Tenant A cannot download Tenant B's files.
- Landlord A cannot access Landlord B's property or tenants.
- A property manager can access only explicitly assigned properties.
- Tenants cannot mutate landlord-only fields.
- Client-provided ownership/role identifiers cannot elevate privileges.
- Direct route-model binding/ID guessing cannot bypass policies.
- Private documents cannot be fetched through predictable public URLs.
- Admin operations remain explicit and auditable.

Authorization should be tested at the HTTP/Livewire/action boundary, not only at helper-method level.

## Security Tests

Include:

- validation of all external input;
- CSRF protection for browser forms;
- authentication/session controls;
- mass-assignment protection;
- malicious/oversized file upload rejection;
- rate-limit behaviour for sensitive endpoints where implemented;
- secret scanning before release;
- Composer dependency vulnerability review;
- npm dependency review for frontend tooling;
- XSS/HTML injection checks for tenant-generated content;
- SQL injection resistance through Eloquent/query binding;
- webhook authenticity and replay protection where provider support exists;
- authorization tests for protected web/API routes.

## Scheduler Tests

Scheduled jobs must be testable without waiting for real calendar time.

Test scenarios include:

- invoice generation for eligible active tenancies;
- no duplicate invoice on repeated scheduler execution;
- reminders triggered at expected windows;
- expired/terminated tenancies excluded from future billing;
- lease-expiry jobs only notify appropriate users.

## Queue Tests

Test that:

- slow external work is dispatched to queues where designed;
- successful financial transactions do not depend on immediate SMS completion;
- jobs retry safely;
- repeated job execution is idempotent where necessary;
- failed jobs provide observable failure information.

## Performance Tests

Representative workloads should cover:

- landlord dashboard for multiple properties and units;
- invoice listing with pagination;
- transaction history;
- maintenance history;
- report calculations;
- concurrent webhook processing;
- scheduled invoice generation across multiple active tenancies.

For the FYP, record actual dataset sizes and measured response times rather than claiming production-scale capacity without evidence.

## Mobile and Low-Bandwidth Tests

Verify at minimum:

- 320px mobile width;
- 375px mobile width;
- tablet width;
- desktop width;
- usable forms with mobile keyboard;
- compressed/responsive images;
- acceptable operation under throttled network conditions;
- no critical flow that requires hover;
- useful error/retry states for interrupted payment and upload flows;
- Livewire interactions do not create excessive/unnecessary round trips.

## Usability Testing

Recruit representative participants where feasible, such as landlords, tenants or property-management users. Give them task-based scenarios rather than explaining the interface first.

Suggested tasks:

- determine how much rent is outstanding;
- find the latest receipt;
- create a new tenancy;
- report a leaking sink;
- identify leases expiring soon;
- determine whether a payment is provider-verified or manual.

Measure task completion, completion time, errors, observed confusion and participant feedback.

## CI Quality Gate

Once Laravel bootstrap/tooling is configured, the expected minimum CI gate is:

```bash
composer install --no-interaction
php artisan test
npm ci
npm run build
```

Also run the selected formatter/static-analysis tools when they are added to the repository.

Migrations should be tested against a clean test database as part of CI/integration setup.

Do not document a quality tool as mandatory until it is actually configured.

## Regression Policy

Every confirmed defect affecting billing, payments, authorization, tenancy state, receipts or maintenance history should receive a regression test before closure where technically practical.

## Requirement Traceability

Where practical, tests/issues should reference requirement identifiers from `SRS.md`, especially for critical FYP flows.

## FYP Evidence

The final report should preserve evidence including:

- test cases and expected results;
- automated test summaries;
- screenshots or recordings of critical flows;
- authorization/security test results;
- usability-test results;
- performance measurements;
- defects discovered and corrected;
- known limitations that remain.
