# Progress — RentFlow

Last updated: 10 September 2026

## Current Phase

**Phase 1 — Documentation baseline and Laravel architecture reset.**

The previous application codebase has intentionally been removed from `masterchanges`. RentFlow is now a documentation-first repository ready for a clean Laravel implementation.

## Historical Context

- PR #1 merged the original Next.js prototype/bootstrap into `main` on 9 September 2026.
- That prototype is preserved in Git history.
- On 10 September 2026, the project direction changed to Laravel for the 2027 Final Year Project.
- The implementation code on `masterchanges` was removed so the Laravel application can be initialized cleanly rather than mixing frameworks.

## Current Repository State

Retained:

- `README.md`
- `PROJECT.md`
- `AGENTS.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `CHANGELOG.md`
- `docs/` project/FYP/engineering documentation
- repository/Git history

Removed from the active implementation branch:

- previous `src/` application code;
- Next.js configuration;
- TypeScript configuration;
- npm application package manifests/lockfile;
- previous Supabase scaffolding;
- previous application environment template.

No Laravel application has been initialized yet.

## Canonical Implementation Direction

The planned FYP implementation is now:

- Laravel
- PHP
- Blade + Livewire
- Tailwind CSS
- MySQL 8+
- Eloquent ORM
- Laravel authentication/session stack
- Policies/Gates/middleware
- Form Requests/validation
- Laravel Queues/Jobs
- Laravel Scheduler
- Laravel Notifications
- Laravel Filesystem
- PHPUnit or Pest
- payment/SMS providers behind internal Laravel service interfaces

See `docs/DECISIONS.md` and `docs/ARCHITECTURE.md`.

## Documentation Baseline

Current documentation includes:

- `docs/FYP_PROPOSAL.md` — academic problem, aim, objectives, questions and scope;
- `docs/SRS.md` — formal functional/non-functional requirements;
- `docs/PRODUCT_REQUIREMENTS.md` — prioritized product scope;
- `docs/ARCHITECTURE.md` — Laravel architecture;
- `docs/DATABASE_SCHEMA.md` — MySQL/Eloquent schema blueprint;
- `docs/API_INTEGRATIONS.md` — payment/SMS/provider boundaries;
- `docs/TESTING.md` — Laravel testing and quality strategy;
- `docs/DEPLOYMENT.md` — Laravel deployment/environment strategy;
- `docs/RESEARCH_AND_EVALUATION.md` — FYP research/evaluation plan;
- `docs/ROADMAP.md` — phased Laravel implementation plan;
- `docs/DECISIONS.md` — architecture decision log including superseded Next.js decisions.

## Next Engineering Phase

**Phase 2 — Clean Laravel Bootstrap**

The next implementation should:

1. initialize Laravel in the repository root without removing documentation;
2. establish PHP/Composer dependencies;
3. configure Blade + Livewire + Tailwind;
4. configure MySQL and `.env.example`;
5. configure the base authentication stack;
6. establish Laravel tests;
7. establish formatting/static-analysis conventions;
8. add GitHub CI checks;
9. verify a clean install/build/test flow;
10. commit the bootstrap in small logical commits.

Do not begin broad feature implementation until the bootstrap is reproducible.

## Following Product Vertical

After bootstrap:

1. authentication and role isolation;
2. property/unit management;
3. tenant onboarding and tenancy lifecycle;
4. digital agreements and audit timeline;
5. rent engine/invoicing;
6. payments, partial allocations and receipts;
7. SMS reminders/notifications;
8. maintenance;
9. analytics;
10. inspections/deposit accounting;
11. property-manager/localization/accessibility hardening;
12. FYP evaluation and final deployment.

See `docs/ROADMAP.md` for acceptance criteria.

## Dependencies / Future Credentials

Implementation will eventually require environment-specific configuration for:

- MySQL;
- SMS sandbox/production provider;
- payment sandbox/production provider;
- storage where production requires external object storage;
- mail/observability services where selected.

No credentials belong in Git.

## Quality Status

There is currently **no active application code to build or test** after the reset.

The next meaningful quality gate starts after Laravel initialization. Expected baseline commands will include:

```bash
php artisan test
npm run build
```

Additional formatter/static-analysis commands will be documented only after they are actually configured.

## Notes for the Next Agent

Read `AGENTS.md`, `PROJECT.md`, this file, `docs/SRS.md`, `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` before implementation.

Stay off `main` for implementation. Preserve the repository owner's Git authorship. Make small iterative commits. Open a PR to `main` for completed delivery units. Do not self-merge.
