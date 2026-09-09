# RentFlow

**One agreement. One payment trail. One source of truth.**

Digital rental relationship and financial management for Tanzanian landlords and tenants.

Remote repository: [https://github.com/PHENOMVALENCE/RentFlow](https://github.com/PHENOMVALENCE/RentFlow)

## Overview

RentFlow modernizes how landlords and tenants manage residential tenancies. Instead of paper agreements, WhatsApp screenshots, notebooks, and disconnected mobile-money messages, both parties share one digital workflow covering property, unit, tenancy, agreement, rent, payment, receipt, maintenance, and history.

Alternative messaging: *Rent. Pay. Maintain. Trust.*

## Problem

Rental relationships in Tanzania are often informal and fragmented. Landlords cannot reliably see who has paid. Tenants cannot reliably prove they paid or access their agreement. Maintenance and reminders live in chats that disappear.

## Solution

A shared source of truth:

Digital Agreement → Automated Rent Obligation → Mobile-Money Payment → Verified Digital Receipt → Maintenance Tracking → Rental History → Renewal / Exit

## Core capabilities

| Capability | Status |
| --- | --- |
| Public landing page (`/`) | Implemented |
| Planned login, register, landlord, and tenant shells | Implemented (placeholders) |
| Next.js / TypeScript / Tailwind foundation | Implemented |
| Authentication (Supabase Auth) | Planned |
| Properties, units, tenancies | Planned |
| Digital agreements | Planned |
| Rent invoices independent of payments | Planned |
| Provider-agnostic payments + sandbox | Planned |
| Digital receipts | Planned |
| SMS via Africa's Talking | Planned |
| Maintenance requests | Planned |
| Tenancy timeline | Planned |
| Consent-controlled Rental Passport | Planned |

Do not treat planned capabilities as live product features.

## Hackathon context

RentFlow is being built for the **RIDC PT Innovation Hackathon 2026**.

Portal: [https://hackathon.ubunifu.ega.go.tz/](https://hackathon.ubunifu.ega.go.tz/)

Primary positioning: Software / Web & Mobile, with Financial Inclusion and Fintech characteristics. Details are in [`docs/HACKATHON.md`](docs/HACKATHON.md).

## User roles

- **Landlord** — properties, units, tenants, agreements, collections, maintenance
- **Tenant** — agreement, rent, receipts, maintenance, rental history / passport
- **Property manager** — future; not MVP

## Technology stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- ESLint
- npm
- Planned: Supabase (PostgreSQL, Auth, Storage), Vercel, GitHub

Supporting libraries will be added only when required (for example Zod, React Hook Form, shadcn/ui).

## Architecture summary

The application is a Next.js App Router project. Domain types, payment adapters, notification adapters, and validation helpers live under `src/`. Supabase, SMS, and payment providers are behind interfaces and environment variables. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Repository structure

```text
src/app          App Router routes
src/components   UI (created as screens are built)
src/config       Site and public environment config
src/lib          Payments, notifications, validation, formatting
src/types        Shared domain types
docs/            Product and engineering documentation
supabase/        Future migrations
```

## Local development

```bash
git checkout masterchanges
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](.env.example). Only `NEXT_PUBLIC_*` values are safe for the browser. Leave provider secrets empty until those integrations exist.

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |

## Development workflow

Work on `masterchanges`, commit small conventional commits, open a PR to `main`, and do not self-merge. Full rules: [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md).

## Testing

No test runner is configured in Phase 0. Strategy is documented in [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md). Domain logic added later must include tests.

## Deployment

Production target is Vercel, with GitHub as source control. Deployment is not configured in this bootstrap.

## Documentation index

- [`PROJECT.md`](PROJECT.md) — canonical product specification
- [`AGENTS.md`](AGENTS.md) — instructions for coding agents
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contribution workflow
- [`SECURITY.md`](SECURITY.md) — vulnerability reporting
- [`docs/PRODUCT_REQUIREMENTS.md`](docs/PRODUCT_REQUIREMENTS.md)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md)
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)
- [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md)
- [`docs/API_INTEGRATIONS.md`](docs/API_INTEGRATIONS.md)
- [`docs/SECURITY.md`](docs/SECURITY.md)
- [`docs/HACKATHON.md`](docs/HACKATHON.md)
- [`docs/ROADMAP.md`](docs/ROADMAP.md)
- [`docs/PROGRESS.md`](docs/PROGRESS.md)
- [`docs/DECISIONS.md`](docs/DECISIONS.md)

## Contribution information

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Security note

RentFlow will handle sensitive tenancy and payment metadata. Do not commit secrets. Review [`SECURITY.md`](SECURITY.md) and [`docs/SECURITY.md`](docs/SECURITY.md).

## Roadmap summary

Phase 0 is complete on `masterchanges`. Next is authentication and UI foundation, then property/unit/tenancy, agreements, billing, payments, SMS, maintenance, passport, and demo hardening. See [`docs/ROADMAP.md`](docs/ROADMAP.md) and [`docs/PROGRESS.md`](docs/PROGRESS.md).

## Project status

**Phase 0 — repository bootstrap: complete** (PR open, not merged). The application shell and documentation exist. Authentication and domain workflows are not implemented. Track status in [`docs/PROGRESS.md`](docs/PROGRESS.md).

## License

Licensing is currently undecided. Do not assume an open-source license until one is explicitly selected.
