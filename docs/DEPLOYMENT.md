# RentFlow Deployment and Environments

## Purpose

This document defines the deployment model for the Laravel implementation of RentFlow and separates local, test/preview and production-like environments.

## Target Architecture

Initial production shape:

- Laravel application
- PHP runtime
- Blade + Livewire frontend
- MySQL 8+
- queue worker
- Laravel Scheduler triggered by cron
- private file storage through Laravel Filesystem
- HTTPS
- GitHub source control
- SMS through an internal adapter, with Africa's Talking as the current target
- payment providers through server-side Laravel service adapters

The architecture should remain deployable on conventional Laravel hosting, a VPS, or a containerized environment without changing core domain code.

## Environments

### Local Development

Purpose: isolated implementation and testing.

Expected flow after Laravel initialization:

```bash
git checkout masterchanges
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run build
php artisan serve
```

Use local/test databases and sandbox provider credentials only.

### Test / Staging

Purpose: integration testing, supervisor review, user testing and pre-release validation.

Recommended characteristics:

- separate MySQL database;
- sandbox payment credentials;
- sandbox/restricted SMS configuration;
- synthetic seeded data;
- no production tenant records;
- queue worker configured;
- scheduler configured if scheduled flows are being tested;
- HTTPS for external webhook testing.

### Production-like / Pilot

Purpose: final demonstration or controlled pilot after security review.

Required before real user data is introduced:

- production database separated from development/staging;
- role/resource authorization tested;
- secure secrets outside Git;
- payment webhook verification enabled;
- rate limiting and abuse controls for sensitive endpoints;
- private document storage;
- HTTPS;
- queue supervision/restart strategy;
- scheduler/cron configured;
- backups and recovery documented;
- logs/error monitoring configured;
- privacy/data-retention decisions documented.

## Environment Variables

`.env.example` becomes the canonical variable-name reference once implementation starts. It must never contain real credentials.

Expected groups:

```text
APP_*
DB_*
CACHE_*
QUEUE_*
SESSION_*
FILESYSTEM_*
MAIL_*
SMS provider credentials
Payment provider credentials
Webhook secrets
Logging/observability
```

Use Laravel config files to map environment variables into application configuration. Avoid calling `env()` throughout domain/application code.

## Deployment Workflow

1. Work from `masterchanges` or an approved branch based on it.
2. Implement one coherent change.
3. Run tests and configured quality checks.
4. Review migrations and environment changes.
5. Commit using a small conventional commit.
6. Repeat until the delivery unit is complete.
7. Run the full release gate.
8. Push the branch.
9. Open/update a PR targeting `main`.
10. Resolve review/CI issues.
11. Repository owner reviews and merges.

Coding agents must not self-merge.

## Application Deployment Requirements

A conventional Linux/VPS deployment will typically require:

- PHP and required Laravel extensions;
- Composer dependencies installed with production settings;
- web server configuration (Nginx/Apache);
- document root pointing to Laravel `public/`;
- writable storage/cache directories;
- application key configured;
- MySQL credentials configured;
- production environment variables configured;
- optimized configuration/routes/views where appropriate;
- queue worker supervised;
- scheduler cron entry configured;
- frontend assets built;
- HTTPS certificate configured.

## Shared Hosting

RentFlow may be deployed on Laravel-compatible shared hosting for the FYP if it supports the required PHP version, CLI/Composer workflow, cron jobs, queues or a suitable queue strategy, MySQL and secure environment configuration.

Do not compromise architecture/security simply to fit a weak hosting environment. If queue workers or webhook handling are unreliable, prefer a VPS or Laravel-capable platform.

## Queue Workers

Production queue processing must have a restart/recovery strategy. Suitable approaches include process supervision or the mechanisms offered by the deployment platform.

Queued work may include:

- SMS delivery;
- reminders;
- PDF/receipt generation;
- retryable provider synchronization.

Queue failure must be observable.

## Scheduler

Laravel Scheduler should be invoked by cron at the expected Laravel cadence.

Scheduled application jobs may include:

- rent invoice generation;
- due-soon reminders;
- overdue scans;
- lease-expiry warnings.

Scheduled jobs must be written so repeated execution does not create duplicate financial records.

## Database Migrations

All schema changes use Laravel migrations.

Rules:

- never make undocumented manual production schema changes;
- migrations must be reviewable in Git;
- destructive migrations require explicit review;
- payment/audit data should not be casually deleted;
- seeders use synthetic/demo data;
- production migration procedures should include backup/forward-recovery planning where appropriate.

## Payment Webhooks

Webhook routes must:

- execute server-side;
- verify provider authenticity/signatures where supported;
- validate amount, currency and internal references;
- process duplicate events idempotently;
- use transactions around reconciliation where needed;
- persist processing/audit evidence;
- avoid exposing secrets in logs;
- return provider-appropriate HTTP responses;
- tolerate retries and out-of-order events where the provider contract requires it.

Production webhook endpoints require HTTPS.

## SMS Operations

SMS sending should pass through a Laravel service/notification boundary. Business transactions should not fail solely because an SMS gateway is unavailable.

Record delivery attempts/status where supported and retry asynchronously where appropriate.

## File Storage

Private tenancy files may include:

- agreements;
- receipts;
- maintenance evidence;
- inspection evidence.

Development may use local private storage. Production should use secure private storage accessible through authorization-controlled download routes or temporary signed URLs where supported.

## Logging and Observability

At minimum, production-like environments should provide visibility into:

- application exceptions;
- payment-provider failures;
- webhook failures;
- duplicate/invalid callback handling;
- SMS failures;
- queue failures;
- scheduler failures;
- authentication/authorization anomalies;
- deployment failures.

Do not log passwords, API keys, OTPs, webhook secrets or unnecessary personal information.

## Backups and Recovery

Before a real pilot, document:

- database backup frequency;
- storage backup/recovery approach;
- restoration procedure;
- responsible operator;
- recovery verification process.

The FYP report must distinguish backup features that are actually configured from features merely offered by a provider.

## Release Checklist

Before calling a Laravel release ready:

- `composer install`/dependency state is valid;
- `php artisan test` passes;
- selected formatter/static-analysis checks pass;
- frontend production assets build successfully;
- migrations are reviewed;
- `.env.example` is current;
- no secrets are committed;
- authorization tests pass;
- payment sandbox tests pass;
- duplicate webhook tests pass;
- queues/scheduler are verified where relevant;
- mobile critical flows are verified;
- relevant docs are updated;
- known limitations are recorded.

## Rollback Principle

Application code should be deployable/rollbackable without corrupting financial history. Financial and audit records should use safe state transitions and append/update patterns rather than destructive rewrites.

Database migrations that cannot safely roll back require explicit forward-recovery planning.
