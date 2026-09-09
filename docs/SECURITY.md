# Security design — RentFlow

## Authentication

Planned via Supabase Auth. Sessions on the server. No custom password storage.

## Authorization

Every tenancy, invoice, payment, agreement, and maintenance object is authorized server-side. UI hiding is not security.

## Tenant isolation

Tenants see only their tenancies. Landlords see only properties they own and related records. Cross-tenant listing of people or passports is forbidden.

## Landlord access boundaries

A landlord cannot open another landlord’s property by guessing IDs. Use scoped queries plus RLS.

## Row Level Security

RLS is mandatory before production data. Service role bypasses RLS and must stay server-only.

## Payment security

- No API keys in the browser
- Webhooks verified
- Idempotent transaction IDs
- Amounts sourced from invoices, not from client POST bodies as the source of truth

## Webhook validation

Treat callbacks as untrusted. Verify signatures/secrets. Reject replay where timestamps allow.

## Input validation

Validate on the server. Phone helpers live in `src/lib/validation/phone.ts`. Prefer schema validation (Zod) when forms land.

## File-upload validation

Limit type, size, and path. Scan or at least constrain content types. Private storage.

## Secure agreement access

Agreements are not public URLs. Access through tenancy membership. Future PDFs should use unguessable IDs plus authorization.

## Personally identifiable information

Names, phones, addresses, payment metadata, and IDs are PII. Minimize logs. No public rental-history pages.

## Audit logs

Agreement acceptances, payment transactions, maintenance updates, and timeline events form the audit trail.

## Secrets and environment variables

See `.env.example`. `.env.local` is gitignored. Only `NEXT_PUBLIC_*` may be exposed.

## HTTPS

Required in preview and production (Vercel default).

## Rate limiting and abuse controls

Protect login, SMS send, payment initiation, and webhooks. Exact middleware is post-bootstrap.

## Backup and recovery

Rely on Supabase backups once a project exists. Document restore drills before production.

## Data retention

Keep financial and tenancy history as long as legally required; allow tenant-controlled sharing, not silent publication. Retention policy to be finalized with legal review.

## Explicit non-goals

- Automatic tenant blacklists
- Public credit-style scores
- Claiming Tanzanian e-signature legal validity without counsel
