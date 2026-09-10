# Contributing to RentFlow

Thank you for helping build RentFlow. This document covers both human contributors and coding agents working in this repository.

## Current State

The repository is currently documentation-first. The previous application codebase has been removed so the Laravel implementation can begin from a clean baseline.

## Planned Prerequisites

Once the Laravel application is initialized, contributors should expect:

- PHP compatible with the selected Laravel release
- Composer
- Node.js/npm for frontend asset compilation
- MySQL 8+
- Git
- a GitHub account with access to `PHENOMVALENCE/RentFlow`

## Planned Local Setup

After the Laravel bootstrap is committed, the standard flow should resemble:

```bash
git clone https://github.com/PHENOMVALENCE/RentFlow.git
cd RentFlow
git checkout masterchanges
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run build
php artisan serve
```

Exact setup commands must be kept current once implementation begins.

## Environment Configuration

Never commit `.env` or credentials. `.env.example` should contain variable names and safe placeholders only.

Laravel configuration should consume environment variables through files in `config/`. Avoid scattered direct `env()` access throughout domain/application code.

## Branch Policy

- `main` is the base/release branch.
- All implementation work happens on `masterchanges` or an explicitly approved branch derived from it.
- Never implement features directly on `main`.
- Open pull requests back to `main`.
- Coding agents do not merge their own pull requests.

## Commit Conventions

Use small conventional commits:

- `feat:` new product capability
- `fix:` bug fix
- `docs:` documentation
- `chore:` tooling/bootstrap/maintenance
- `refactor:` internal change without intended behaviour change
- `test:` tests
- `perf:`, `build:`, `ci:` as needed

Commits should remain focused and reviewable.

## Laravel Code Standards

- follow Laravel conventions unless a documented requirement justifies deviation;
- keep controllers thin;
- use Form Requests/validators for input validation;
- use Policies/Gates/middleware for authorization;
- use Eloquent relationships intentionally and prevent N+1 queries;
- use Services/Actions for reusable business workflows;
- use Jobs/Queues for slow or retryable work;
- use migrations for every schema change;
- use factories/seeders with synthetic data;
- use database transactions for atomic financial state changes;
- keep secrets in server-side configuration;
- keep business rules out of Blade/Livewire presentation code.

## Testing

Primary application test command:

```bash
php artisan test
```

Formatting/static-analysis commands will be documented once selected. Asset compilation should also be validated when frontend changes occur.

New financial and authorization logic must ship with tests.

## Documentation Updates

Update docs whenever architecture, schema, environment variables, APIs, setup, workflows, security assumptions or product behaviour changes.

## Pull Request Expectations

PRs should describe:

- what changed and why;
- requirements addressed;
- migrations introduced;
- tests/validation performed;
- documentation updates;
- known limitations;
- screenshots for material UI changes.

## Security Reporting

See `SECURITY.md`. Do not file public issues for sensitive vulnerabilities.

## Authorship Policy

Commits intentionally made on behalf of the repository owner must preserve the configured owner identity. Automated development tools must not add themselves as authors or co-authors unless explicitly requested by the repository owner.
