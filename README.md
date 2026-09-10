# RentFlow

**One agreement. One payment trail. One source of truth.**

RentFlow is a 2027 Final Year Project and market-oriented digital rental management platform for Tanzanian landlords, tenants and property managers.

Repository: https://github.com/PHENOMVALENCE/RentFlow

## Overview

RentFlow digitizes the rental lifecycle after a landlord and tenant enter a rental relationship. Instead of managing agreements, rent, receipts, maintenance and tenancy history across paper, WhatsApp, notebooks, spreadsheets and mobile-money screenshots, RentFlow provides one auditable workflow:

**Property → Unit → Tenant → Tenancy → Agreement → Rent Invoice → Payment → Receipt → Maintenance → Inspection → Renewal / Exit**

RentFlow is not primarily a property-listing marketplace. Its focus is rental operations, rent assurance, communication and traceability.

## Problem

Rental management can become fragmented and difficult to verify. Landlords need reliable visibility into expected rent, collected rent, partial payments, arrears, occupancy, lease expiries and maintenance. Tenants need access to agreements, balances, payment proof, receipts and maintenance history.

RentFlow addresses these problems using structured tenancy records, a rent engine, provider-agnostic mobile-money integration, SMS notifications, digital receipts, maintenance workflows, inspections, deposit accounting and dashboards.

## Core Capabilities

| Capability | Direction |
| --- | --- |
| Public landing/auth UI | Existing foundation |
| Role-based authentication | Planned implementation |
| Properties and units | Planned implementation |
| Tenant/tenancy lifecycle | Planned implementation |
| Digital agreements | Planned implementation |
| Rent invoices independent of payments | Planned implementation |
| Partial payment allocation | Planned implementation |
| Provider-agnostic mobile-money payments | Planned implementation |
| Verified reconciliation/webhooks | Planned implementation |
| Digital receipts | Planned implementation |
| SMS via adapter (Africa's Talking target) | Planned implementation |
| Maintenance workflow | Planned implementation |
| Move-in/move-out inspections | Planned implementation |
| Security-deposit accounting ledger | Planned implementation |
| Property-manager role | Planned implementation |
| Landlord analytics/reporting | Planned implementation |
| Tenancy audit timeline | Planned implementation |
| English/Kiswahili localization | Planned implementation |
| Optional USSD self-service | Future extension |

Do not represent planned or sandbox capabilities as production-live features.

## Final Year Project Positioning

The FYP studies whether a unified rental platform can improve transaction visibility, operational efficiency and accountability between landlords and tenants.

Academic baseline: [`docs/FYP_PROPOSAL.md`](docs/FYP_PROPOSAL.md)

Research/evaluation plan: [`docs/RESEARCH_AND_EVALUATION.md`](docs/RESEARCH_AND_EVALUATION.md)

Software requirements: [`docs/SRS.md`](docs/SRS.md)

## User Roles

- **Landlord** — properties, units, tenancies, agreements, rent, collections, maintenance, inspections and reports.
- **Tenant** — agreement, invoices, payments, receipts, maintenance, inspections and tenancy history.
- **Property Manager** — manages explicitly assigned properties under delegated permissions.
- **Administrator** — platform operations/support with auditable privileges.

## Technology Stack

Current direction:

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

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Repository Structure

```text
src/app          App Router routes
src/components   Reusable UI and feature components
src/config       Application/public configuration
src/lib          Domain services, adapters, validation and helpers
src/types        Shared domain types
docs/            Product, FYP and engineering documentation
supabase/        Database migrations/configuration
```

## Local Development

```bash
git checkout masterchanges
npm install
cp .env.example .env.local
npm run dev
```

Then open `http://localhost:3000`.

## Development Workflow

- `main` is the base/release branch.
- Implementation work belongs on `masterchanges` (or an explicitly approved branch derived from it).
- Make small iterative conventional commits.
- Keep the configured repository owner's Git authorship.
- Do not add AI co-author attribution unless explicitly requested.
- Validate lint/typecheck/tests/build before delivery.
- Open a PR back to `main`.
- Coding agents must not self-merge.

Full rules: [`AGENTS.md`](AGENTS.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), and [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md).

## Financial Workflow Principles

RentFlow models invoices separately from payments. A rent invoice can be due, partially paid, fully paid or overdue. Payments are allocated against invoices, allowing accurate balances and partial payments.

Provider callbacks must be processed server-side and idempotently. A client-side success message or payment screenshot is not sufficient evidence to settle an invoice.

## Security

RentFlow is expected to handle sensitive tenancy and payment metadata. Critical rules include server-side authorization, least privilege, private document access, webhook validation, secrets outside source control, and RLS before real Supabase pilot/production use.

See [`SECURITY.md`](SECURITY.md) and [`docs/SECURITY.md`](docs/SECURITY.md).

## Testing

Testing must cover domain calculations, tenancy workflows, authorization boundaries, payments, duplicate webhook delivery, SMS failures, mobile UX and end-to-end landlord/tenant journeys.

See [`docs/TESTING.md`](docs/TESTING.md).

## Deployment

Deployment/environment policy is documented in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md). Production-like environments must be separated from test/sandbox data and credentials.

## Documentation Index

- [`PROJECT.md`](PROJECT.md) — canonical product specification
- [`AGENTS.md`](AGENTS.md) — mandatory coding-agent rules
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contribution workflow
- [`SECURITY.md`](SECURITY.md) — vulnerability reporting
- [`docs/FYP_PROPOSAL.md`](docs/FYP_PROPOSAL.md) — Final Year Project proposal baseline
- [`docs/RESEARCH_AND_EVALUATION.md`](docs/RESEARCH_AND_EVALUATION.md) — research/evaluation methodology
- [`docs/SRS.md`](docs/SRS.md) — software requirements specification
- [`docs/PRODUCT_REQUIREMENTS.md`](docs/PRODUCT_REQUIREMENTS.md) — product requirements
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — system architecture
- [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md) — data model/schema direction
- [`docs/API_INTEGRATIONS.md`](docs/API_INTEGRATIONS.md) — external integration strategy
- [`docs/TESTING.md`](docs/TESTING.md) — testing and quality strategy
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — environments and release strategy
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) — development notes
- [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md) — Git workflow
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — phased implementation roadmap
- [`docs/PROGRESS.md`](docs/PROGRESS.md) — current implementation state
- [`docs/DECISIONS.md`](docs/DECISIONS.md) — architecture/product decisions
- [`docs/SECURITY.md`](docs/SECURITY.md) — security design
- [`docs/HACKATHON.md`](docs/HACKATHON.md) — historical 2026 hackathon context retained for reference

## Current Status

The original repository bootstrap and public UI foundation were merged through PR #1. The next workstream is to mature RentFlow from that prototype foundation into the 2027 Final Year Project implementation. Track the exact status in [`docs/PROGRESS.md`](docs/PROGRESS.md).

## License

Licensing is currently undecided. Do not assume an open-source license until one is explicitly selected.
