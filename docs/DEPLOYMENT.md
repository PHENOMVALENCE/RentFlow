# RentFlow Deployment and Environments

## Purpose

This document defines the expected deployment model for RentFlow and separates local, preview/test and production-like environments.

## Target Architecture

Initial deployment target:

- Next.js application: Vercel
- PostgreSQL/Auth/Storage: Supabase or equivalent managed PostgreSQL platform
- Source control: GitHub
- CI: GitHub Actions and/or Vercel build checks
- SMS: Africa's Talking through a server-side adapter
- Payments: server-side payment-provider adapter

The application must not depend on provider-specific code inside UI components.

## Environments

### Local Development

Purpose: implementation and isolated testing.

```bash
git checkout masterchanges
npm install
cp .env.example .env.local
npm run dev
```

Use sandbox/test credentials only.

### Preview / Test

Purpose: pull-request validation, integration testing and supervisor/demo review.

Recommended characteristics:

- separate test database/project;
- sandbox payment credentials;
- sandbox or restricted SMS configuration;
- seeded synthetic data;
- no production tenant records;
- deployment tied to non-main branches/PRs where practical.

### Production-like / Pilot

Purpose: final demonstration or tightly controlled pilot after security review.

Required before using real user data:

- production database separated from test environments;
- RLS/authorization policies enabled and tested;
- secure secrets configured through deployment environment variables;
- payment webhook verification enabled;
- rate limiting and abuse controls for sensitive endpoints;
- private document storage;
- backups and recovery procedures documented;
- logging and error monitoring configured;
- privacy/data-retention decisions documented.

## Environment Variables

`.env.example` is the canonical variable-name reference and must never contain real credentials.

Expected groups include:

```text
Application URL / environment
Database / Supabase
Authentication
Storage
SMS provider
Payment provider
Webhook secrets
Observability
```

Only intentionally public configuration may use `NEXT_PUBLIC_*`. Provider secrets, service-role keys and webhook secrets must remain server-side.

## Deployment Workflow

1. Start work from `masterchanges` or an approved feature branch according to repository policy.
2. Implement a small logical unit.
3. Run lint, typecheck and applicable tests.
4. Commit using a conventional commit message.
5. Repeat until the change is complete.
6. Run the full quality gate.
7. Push the implementation branch.
8. Open a PR targeting `main`.
9. Review automated checks and preview deployment.
10. Resolve defects before merge.
11. Do not let coding agents self-merge unless the repository owner explicitly changes that policy.

## Database Migrations

All schema changes must use committed migrations.

Rules:

- never make undocumented manual production schema changes;
- migrations must be reviewable in Git;
- destructive migrations require explicit review and migration/rollback planning;
- migration documentation must stay aligned with `docs/DATABASE_SCHEMA.md`;
- seed scripts must use synthetic/demo data.

## Payment Webhooks

Payment callback routes must:

- be server-side;
- validate provider authenticity/signatures where supported;
- validate amount, currency and reference relationships;
- process idempotently;
- persist event processing state;
- avoid exposing secrets in logs;
- return provider-appropriate HTTP responses;
- tolerate duplicate delivery.

Production webhook endpoints must use HTTPS.

## SMS Operations

SMS sending should use a server-side service boundary. Business transactions should not fail solely because an SMS provider is unavailable. Record delivery attempts/status where supported and provide retry logic where appropriate.

## Health and Observability

At minimum, the deployed system should support:

- structured server error logging;
- payment-integration failure logging;
- SMS integration failure logging;
- failed webhook visibility;
- request correlation or stable internal transaction IDs for payment workflows;
- deployment/build failure visibility.

Do not log passwords, access tokens, full secret values or unnecessary sensitive tenant information.

## Backups and Recovery

Before a real pilot, document:

- database backup frequency;
- storage backup/recovery approach;
- restoration procedure;
- responsible operator;
- recovery verification process.

The FYP demonstration may use managed-provider backup features, but the report should distinguish configured recovery measures from theoretical provider capabilities.

## Release Checklist

Before calling a release ready:

- `npm run lint` passes;
- `npm run typecheck` passes;
- automated tests pass;
- `npm run build` passes;
- migrations are reviewed;
- `.env.example` is current;
- no secrets are committed;
- authorization tests pass;
- payment sandbox tests pass;
- duplicate webhook test passes;
- mobile critical flows are verified;
- relevant docs are updated;
- known limitations are recorded.

## Rollback Principle

A failed application release should be reversible independently of irreversible financial data. Payment and audit records should use append/update-safe domain transitions rather than destructive rewrites. Database migrations that cannot be safely rolled back require explicit forward-recovery planning.
