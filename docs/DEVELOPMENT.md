# Development — RentFlow

## Current State

The application codebase has intentionally been cleared. This document defines the expected Laravel development workflow once the clean Laravel bootstrap is created.

## Canonical Stack

- Laravel
- PHP
- Composer
- Blade + Livewire
- Tailwind CSS
- MySQL 8+
- Node.js/npm only for frontend asset tooling

## Initial Bootstrap

The first implementation task should initialize Laravel directly in the repository root on `masterchanges`, without deleting the existing documentation.

After initialization, verify that all generated files are reviewed before committing and that the existing documentation/governance files remain intact.

## Expected Local Setup

Once Laravel is initialized:

```bash
git checkout masterchanges
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Configure the local MySQL connection in `.env`, then:

```bash
php artisan migrate
npm run build
php artisan serve
```

The default local URL is expected to be:

```text
http://127.0.0.1:8000
```

## Development Mode

A typical development session may use separate terminals for:

```bash
php artisan serve
php artisan queue:work
npm run dev
```

The scheduler can be exercised locally using Laravel's scheduler tooling once scheduled tasks exist.

## Environment

`.env` must never be committed.

`.env.example` should document required variable names without real credentials.

Expected configuration groups include:

- `APP_*`
- `DB_*`
- queue configuration
- mail/notification configuration
- SMS provider credentials
- payment provider credentials
- webhook secrets
- filesystem/storage configuration
- logging/observability configuration

Application code should use Laravel `config()` values. Direct `env()` access should normally remain inside configuration files.

## Database

Default: MySQL 8+.

Rules:

- use migrations for schema changes;
- use factories/seeders for synthetic development data;
- use foreign keys and indexes deliberately;
- never use floating point for money;
- use transactions for atomic financial workflows;
- do not manually mutate production/pilot schemas outside migrations.

## Code Organization

Prefer framework conventions first.

As domain complexity grows, reusable workflows may be organized into:

- `app/Actions`
- `app/Services`
- `app/Domain`
- `app/Jobs`
- `app/Notifications`
- `app/Policies`

Do not create abstraction layers before they have a concrete responsibility.

## Controllers and Livewire

Controllers/Livewire components should coordinate requests and presentation, not own complex billing or payment logic.

Domain rules such as rent generation, payment allocation, reconciliation and maintenance transitions should live in reusable application/domain services.

## Validation

Use Laravel Form Requests and reusable validation rules for server-side validation.

Important validators include:

- Tanzanian phone numbers;
- currency amounts;
- dates and tenancy periods;
- property/unit ownership;
- uploads;
- payment callbacks;
- state transitions.

## Authorization

Use Laravel Policies/Gates and middleware. Never rely only on hidden buttons or route names to protect data.

Tests must include attempts by unrelated tenants/landlords to access resources they do not own.

## Queues

Use Laravel Jobs/Queues for work that is external, slow or retryable, such as:

- SMS;
- reminder batches;
- expensive document generation;
- selected provider synchronization.

Queue jobs should be idempotent/retry-safe where practical.

## Scheduler

Use Laravel Scheduler for recurring operations such as:

- generating due rent invoices;
- scanning for rent reminders;
- marking/processing overdue obligations;
- lease expiry notifications.

Scheduler commands should orchestrate domain services instead of duplicating business logic.

## Testing

Primary command:

```bash
php artisan test
```

Testing strategy:

- **Unit:** rent calculations, allocations, statuses, formatting/validation where isolated logic exists.
- **Feature/Integration:** authentication, policies, tenancy creation, invoice generation, payment callbacks, receipt generation, maintenance workflows.
- **Critical negative cases:** duplicate webhooks, cross-tenant access, cross-landlord access, incorrect amounts, invalid state transitions.

See `TESTING.md`.

## Formatting / Static Analysis

Use the Laravel/PHP formatter and static-analysis tooling selected during implementation. Once selected, record exact commands here and in CI.

Do not claim a tool is configured before it exists in the repository.

## Frontend Assets

Blade + Livewire + Tailwind is the default UI direction.

Use JavaScript only where needed. Avoid creating a separate SPA merely for presentation.

Expected asset commands after Laravel initialization:

```bash
npm run dev
npm run build
```

## Branch Reminder

```bash
git branch --show-current
```

Expected implementation branch:

```text
masterchanges
```

## Before a Pull Request

At minimum, run the checks actually configured in the repository, expected to include:

```bash
php artisan test
npm run build
```

Also review migrations, authorization, `.env.example`, docs and `git status`.
