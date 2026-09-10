# RentFlow Testing and Quality Strategy

## Purpose

This document defines how RentFlow will be verified before Final Year Project submission and before any real-world pilot.

## Quality Goals

RentFlow must be functionally correct, secure across role boundaries, resilient to duplicate external events, usable on mobile devices, and auditable for financial and tenancy workflows.

## Test Levels

### Unit Tests

Focus on deterministic domain logic:

- rent due-date generation;
- invoice status transitions;
- partial-payment allocation;
- outstanding balance calculations;
- tenancy-state transitions;
- deposit-ledger calculations;
- phone-number normalization;
- notification scheduling rules;
- permission helper logic;
- webhook idempotency helpers.

### Integration Tests

Test interactions between modules and persistence:

- property → unit → tenancy creation;
- agreement acceptance and version persistence;
- invoice generation from tenancy rules;
- payment creation and allocation;
- receipt generation;
- webhook processing;
- maintenance status history;
- file metadata persistence;
- notification queue/log persistence;
- Row Level Security / authorization boundaries.

### End-to-End Tests

Critical browser flows:

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

## Payment Test Matrix

At minimum test:

- successful full payment;
- successful partial payment;
- second payment completing the invoice;
- failed payment;
- cancelled payment;
- duplicate webhook delivery;
- webhook delivered out of order;
- unknown provider reference;
- amount mismatch;
- currency mismatch;
- webhook with invalid signature when signature validation is supported;
- provider timeout;
- frontend refresh after payment initiation;
- repeated user submission/idempotency handling.

Payment state must never be trusted solely from client-side success messages.

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
- duplicate-send prevention where applicable;
- preferred-language rendering when localization is enabled.

Notification failure must not roll back a valid payment or tenancy transaction.

## Authorization and Privacy Tests

Mandatory negative tests:

- Tenant A cannot access Tenant B's tenancy.
- Tenant A cannot access Tenant B's receipts.
- Landlord A cannot access Landlord B's property or tenants.
- A property manager can access only explicitly assigned properties.
- Tenants cannot mutate landlord-only fields.
- Client-provided role identifiers cannot elevate privileges.
- Private documents cannot be fetched through predictable public URLs.
- Admin operations are explicit and auditable.

## Security Tests

Include:

- validation of all external input;
- malicious/oversized file upload rejection;
- rate-limit behaviour for sensitive endpoints where implemented;
- secret scanning before release;
- dependency vulnerability review;
- CSRF/session protections appropriate to the chosen auth model;
- XSS/HTML injection checks for tenant-generated content;
- SQL injection protection through parameterized/ORM access;
- webhook authenticity and replay protection where provider support exists;
- authorization tests for server actions/API routes.

## Performance Tests

Representative workloads should cover:

- landlord dashboard for multiple properties and units;
- invoice listing with pagination;
- transaction history;
- maintenance history;
- report calculations;
- concurrent webhook processing.

For the FYP, record measurable response times and dataset sizes rather than claiming production-scale capacity without evidence.

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
- error/retry states for interrupted payment and upload flows.

## Usability Testing

Recruit representative participants where feasible, such as landlords, tenants or property-management users. Give them task-based scenarios rather than explaining the interface first.

Suggested tasks:

- determine how much rent is outstanding;
- find the latest receipt;
- create a new tenancy;
- report a leaking sink;
- identify leases expiring soon;
- determine whether a payment is verified or manual.

Measure task completion, completion time, errors, observed confusion and participant feedback.

## CI Quality Gate

Before a pull request is considered ready:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

If a test runner has not yet been configured, the missing command must be documented as technical debt rather than silently skipped.

## Regression Policy

Every confirmed defect affecting billing, payments, authorization, tenancy state, receipts or maintenance history should receive a regression test before closure where technically practical.

## FYP Evidence

The final report should preserve evidence including:

- test cases and expected results;
- automated test summaries;
- screenshots or recordings of critical flows;
- usability-test results;
- performance measurements;
- defects discovered and corrected;
- limitations that remain.
