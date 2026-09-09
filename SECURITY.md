# RentFlow Security Policy

RentFlow handles tenancy agreements, payment metadata, phone numbers, and other personally identifiable information. Treat confidentiality and integrity as product requirements, not later hardening work.

## Reporting a vulnerability

Email the repository owner at the Git identity associated with [PHENOMVALENCE/RentFlow](https://github.com/PHENOMVALENCE/RentFlow). Do not open a public GitHub issue for security-sensitive reports.

Include:

- a description of the issue
- affected surfaces (route, API, webhook, storage path)
- reproduction notes that do not include live secrets
- impact assessment if known

## Secrets

- Never commit API keys, service-role keys, webhook secrets, or `.env.local`.
- Use `.env.example` as the public template.
- Only `NEXT_PUBLIC_*` values may be exposed to the browser, and only when they are intentionally public.

## Current bootstrap status

Authentication, Row Level Security, payment webhooks, and SMS providers are **planned**. Until they are implemented, do not treat the application as production-ready for real tenant or payment data.

## Related documentation

- `docs/SECURITY.md` — detailed security design
- `docs/API_INTEGRATIONS.md` — provider boundaries
- `AGENTS.md` — agent security rules
