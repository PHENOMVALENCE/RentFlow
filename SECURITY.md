# RentFlow Security Policy

RentFlow will handle tenancy agreements, payment metadata, phone numbers and other sensitive rental information. Confidentiality, integrity and authorization are product requirements, not later hardening work.

## Reporting a Vulnerability

Do not open a public GitHub issue for security-sensitive reports. Contact the repository owner through an appropriate private channel.

Include where possible:

- a description of the issue;
- affected surface (route, webhook, storage path, job, command, etc.);
- reproduction notes that do not contain live secrets;
- impact assessment if known.

## Current Repository State

The active `masterchanges` branch is currently documentation-only. The previous Next.js implementation has been removed and the Laravel application has not yet been initialized.

Do not treat RentFlow as production-ready until the documented Laravel security controls are actually implemented and tested.

## Secrets

When Laravel implementation begins:

- never commit `.env`;
- never commit API keys, payment credentials, SMS credentials, database passwords, webhook secrets or private keys;
- keep `.env.example` limited to safe variable names/placeholders;
- expose only values explicitly intended for browser use;
- consume secrets through Laravel configuration rather than scattering direct `env()` access through application code.

## Laravel Security Baseline

The implementation is expected to use:

- Laravel session authentication;
- secure password hashing;
- CSRF protection;
- Policies/Gates/middleware;
- Form Request/server-side validation;
- controlled Eloquent mass assignment;
- private file storage;
- payment webhook verification and idempotency;
- rate limiting for sensitive endpoints;
- database transactions for atomic financial workflows;
- audit trails for material financial/tenancy actions.

## Real Data

Do not use real tenant, landlord, payment or research-participant data until authorization, storage, privacy, backup and security controls have been implemented and reviewed.

Use synthetic data for development, automated tests and demonstrations where possible.

## Related Documentation

- `docs/SECURITY.md` — detailed Laravel security design
- `docs/API_INTEGRATIONS.md` — provider boundaries
- `docs/TESTING.md` — security/authorization/payment tests
- `docs/DEPLOYMENT.md` — production environment controls
- `AGENTS.md` — implementation-agent security rules
