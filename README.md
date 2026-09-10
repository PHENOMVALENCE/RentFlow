# RentFlow

**One agreement. One payment trail. One source of truth.**

RentFlow is a 2027 Final Year Project and market-oriented rental management platform for Tanzanian landlords, tenants and property managers.

Repository: https://github.com/PHENOMVALENCE/RentFlow

## Current Repository State

The application codebase has intentionally been reset. The repository currently serves as a **documentation-first project baseline** from which the Laravel implementation will be built cleanly.

There is no production-ready application in this branch yet. Do not describe planned functionality as implemented.

## Overview

RentFlow digitizes the rental lifecycle after a landlord and tenant enter a rental relationship. Instead of managing agreements, rent, receipts, maintenance and tenancy history across paper, WhatsApp, notebooks, spreadsheets and mobile-money screenshots, RentFlow provides one auditable workflow:

**Property → Unit → Tenant → Tenancy → Agreement → Rent Invoice → Payment → Reconciliation → Receipt → SMS → Maintenance → Inspection → Renewal / Exit**

RentFlow is not primarily a property-listing marketplace. Its focus is rental operations, rent assurance, communication, payment traceability and accountability.

## Problem

Rental management can become fragmented and difficult to verify. Landlords need reliable visibility into expected rent, collected rent, partial payments, arrears, occupancy, lease expiries and maintenance. Tenants need access to agreements, balances, payment proof, receipts and maintenance history.

RentFlow addresses these problems through structured tenancy records, automated rent billing, mobile-money integrations, SMS notifications, digital receipts, maintenance workflows, inspections, deposit accounting and dashboards.

## Planned Core Capabilities

- role-based authentication and authorization;
- landlord, tenant, property-manager and administrator roles;
- property and unit management;
- tenant onboarding and tenancy lifecycle management;
- digital rental agreements and acceptance audit trail;
- recurring rent schedules and invoice generation;
- partial and full payment allocation;
- mobile-money payment integrations behind provider adapters;
- idempotent payment webhook reconciliation;
- digital receipts;
- SMS reminders and notifications;
- maintenance ticketing and status history;
- move-in and move-out inspections;
- security-deposit accounting ledger;
- landlord financial and occupancy analytics;
- tenancy audit timeline;
- English and Kiswahili localization;
- optional USSD and external API support in later phases.

## Final Year Project Positioning

The FYP studies whether a unified rental platform can improve rent-management efficiency, transaction visibility and accountability between landlords and tenants.

Academic baseline: [`docs/FYP_PROPOSAL.md`](docs/FYP_PROPOSAL.md)

Software requirements: [`docs/SRS.md`](docs/SRS.md)

Research and evaluation plan: [`docs/RESEARCH_AND_EVALUATION.md`](docs/RESEARCH_AND_EVALUATION.md)

## Canonical Technology Stack

RentFlow will be implemented as a **Laravel monolith**.

- **Backend / Web Framework:** Laravel
- **Language:** PHP
- **Frontend:** Blade + Livewire + Tailwind CSS
- **Database:** MySQL 8+
- **ORM:** Eloquent
- **Authentication:** Laravel authentication stack; Fortify/Breeze-compatible approach where appropriate
- **Authorization:** Laravel Policies, Gates and middleware
- **Validation:** Laravel Form Requests / validation rules
- **Background Work:** Laravel Queues and Jobs
- **Scheduling:** Laravel Scheduler
- **Notifications:** Laravel Notifications with SMS adapter integration
- **Payments:** provider-agnostic Laravel service layer
- **SMS target:** Africa's Talking through an adapter/service
- **File Storage:** Laravel Filesystem with private local/S3-compatible storage depending on environment
- **Testing:** PHPUnit or Pest, selected during implementation
- **Source Control:** GitHub
- **Deployment:** standard PHP/Laravel hosting or VPS/container deployment depending on final environment

The architecture intentionally avoids a separate JavaScript SPA backend unless a future requirement proves it necessary.

## Planned Repository Structure

```text
app/
  Http/
  Models/
  Policies/
  Services/
  Jobs/
  Notifications/
  Actions/
  Domain/
bootstrap/
config/
database/
  factories/
  migrations/
  seeders/
resources/
  views/
  css/
  js/
routes/
  web.php
  api.php
tests/
docs/
```

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Development Workflow

- `main` is the base/release branch.
- Application implementation belongs on `masterchanges` or an explicitly approved branch derived from it.
- Make small iterative conventional commits.
- Preserve the repository owner's configured Git authorship.
- Do not add AI co-author attribution unless explicitly requested.
- Validate formatting, tests and production build/assets before delivery.
- Open a PR back to `main`.
- Coding agents must not self-merge.

Full rules: [`AGENTS.md`](AGENTS.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), and [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md).

## Financial Workflow Principles

RentFlow models **rent invoices separately from payments**. A single invoice may receive multiple partial payments, and a single payment may later support explicit allocation logic where needed.

Payment provider callbacks must be validated server-side and processed idempotently. A frontend success message, SMS screenshot or manually uploaded proof is not sufficient by itself to settle an invoice automatically.

Laravel database transactions should be used around financial state transitions where atomicity matters.

## Security Principles

Critical controls include:

- server-side authorization using policies and middleware;
- least-privilege role access;
- CSRF protection for browser workflows;
- input validation through Form Requests;
- private tenancy/document storage;
- encrypted secrets outside source control;
- verified payment callbacks;
- rate limiting for sensitive routes;
- audit logs for financial and tenancy events;
- safe file-upload validation;
- no destructive rewriting of financial history.

See [`SECURITY.md`](SECURITY.md) and [`docs/SECURITY.md`](docs/SECURITY.md).

## Testing

Testing must cover rent calculations, allocations, tenancy workflows, authorization boundaries, duplicate webhooks, payment failures, SMS failures, maintenance workflows, mobile UX and end-to-end landlord/tenant journeys.

See [`docs/TESTING.md`](docs/TESTING.md).

## Documentation Index

- [`PROJECT.md`](PROJECT.md) — canonical product specification
- [`AGENTS.md`](AGENTS.md) — mandatory implementation-agent rules
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contribution workflow
- [`SECURITY.md`](SECURITY.md) — vulnerability reporting
- [`docs/FYP_PROPOSAL.md`](docs/FYP_PROPOSAL.md) — Final Year Project proposal baseline
- [`docs/RESEARCH_AND_EVALUATION.md`](docs/RESEARCH_AND_EVALUATION.md) — research/evaluation methodology
- [`docs/SRS.md`](docs/SRS.md) — software requirements specification
- [`docs/PRODUCT_REQUIREMENTS.md`](docs/PRODUCT_REQUIREMENTS.md) — product requirements
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — Laravel system architecture
- [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md) — relational data model
- [`docs/API_INTEGRATIONS.md`](docs/API_INTEGRATIONS.md) — external integration strategy
- [`docs/TESTING.md`](docs/TESTING.md) — testing and quality strategy
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — Laravel environments and release strategy
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) — Laravel development setup
- [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md) — Git workflow
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — phased implementation roadmap
- [`docs/PROGRESS.md`](docs/PROGRESS.md) — current implementation state
- [`docs/DECISIONS.md`](docs/DECISIONS.md) — architecture/product decisions
- [`docs/SECURITY.md`](docs/SECURITY.md) — security design
- [`docs/HACKATHON.md`](docs/HACKATHON.md) — historical 2026 hackathon context retained for reference

## Current Status

**Documentation baseline established. Application code reset. Laravel implementation not started.**

The next engineering step is to initialize a clean Laravel application on `masterchanges`, establish the database/authentication foundation, and implement RentFlow vertically according to `docs/ROADMAP.md`.

## License

Licensing is currently undecided. Do not assume an open-source license until one is explicitly selected.
