# Security Design — RentFlow

## Authentication

RentFlow will use Laravel's authentication/session mechanisms. Passwords must be hashed using Laravel-supported hashing. Do not build custom password storage or authentication cryptography.

Future phone OTP or API authentication may be added only through documented flows that preserve server-side authorization.

## Authorization

Every protected tenancy, invoice, payment, agreement, document, maintenance request, inspection and report must be authorized server-side.

Use Laravel:

- Policies;
- Gates where appropriate;
- middleware for broad role boundaries;
- scoped queries/ownership checks.

UI hiding is not security.

## Tenant Isolation

Tenants may access only tenancy data for which they are an authorized participant. A tenant must not retrieve another tenant's agreements, invoices, payments, receipts, documents or maintenance records by guessing identifiers.

## Landlord Boundaries

A landlord may access only properties they own and resources derived from those properties, unless a documented delegated relationship exists.

Property managers may access only explicitly assigned properties.

## Administrator Access

Administrator actions must be explicit and auditable. Administrator status must not silently bypass privacy expectations without a legitimate support/operations reason.

## Laravel Security Controls

Use Laravel's built-in protections and conventions wherever applicable:

- CSRF protection for browser forms;
- session security;
- password hashing;
- route/model authorization;
- validation/Form Requests;
- signed/temporary URLs where appropriate;
- rate limiting;
- mass-assignment protection;
- escaped Blade output by default;
- trusted proxy/HTTPS configuration in deployed environments.

## Payment Security

- Payment/provider API keys remain server-side.
- Never trust client-provided payment success as authoritative.
- Amounts/currency/references are validated against server-side invoice/payment records.
- Provider callbacks are verified where signatures/secrets are supported.
- Webhook processing is idempotent.
- Duplicate provider events must not create duplicate allocations or receipts.
- Atomic reconciliation uses database transactions where required.
- Financial history should not be destructively rewritten.

## Webhook Validation

Treat all callbacks as untrusted external input.

Validate:

- provider authenticity/signature;
- known internal reference;
- amount;
- currency;
- event/transaction identifier;
- allowed state transition.

Reject or safely ignore replay/duplicate events according to the provider contract.

## Input Validation

Use Laravel Form Requests or reusable validation rules.

Important validation areas include:

- Tanzanian phone numbers;
- TZS amounts;
- dates and tenancy periods;
- IDs/resource relationships;
- file uploads;
- provider callback payloads;
- state transitions.

## Mass Assignment

Eloquent models must deliberately define allowed assignment behavior. Do not allow request payloads to arbitrarily set sensitive fields such as:

- role;
- landlord/user ownership IDs;
- payment status;
- provider references;
- invoice paid status;
- audit fields.

Sensitive state changes should flow through explicit services/actions.

## File Upload Security

Validate:

- MIME type;
- extension where useful;
- file size;
- storage path/naming;
- authorization to upload to the related tenancy/resource.

Tenancy documents and evidence are private by default.

Do not expose sensitive uploads through predictable public filesystem paths.

## Agreement Access

Agreement files are not public assets. Retrieval must pass tenancy/role authorization. Future generated PDFs should use controlled download routes or temporary/private storage mechanisms.

## Personally Identifiable Information

Names, phone numbers, addresses, agreement data, payment metadata and uploaded identity/tenancy records are sensitive personal information.

Principles:

- collect only necessary fields;
- minimize logs;
- never commit real participant/customer data to Git;
- avoid public rental-history pages;
- require consent for future portable history sharing;
- document retention/deletion rules before a real pilot.

## Logging

Log operational evidence without exposing secrets.

Never log:

- passwords;
- API keys;
- webhook secrets;
- OTP codes unless a tightly controlled debug case explicitly requires it and production logging prevents it;
- unnecessary full provider payloads containing personal data.

Use correlation/internal IDs for payment troubleshooting.

## Secrets and Environment Variables

Laravel `.env` files are never committed.

Once application bootstrap exists, `.env.example` should list required variable names using safe placeholders.

Application code should normally consume secrets through Laravel `config()` values rather than calling `env()` throughout the codebase.

## HTTPS

HTTPS is mandatory for production-like deployment, especially for authentication, payment initiation, webhooks and document access.

## Rate Limiting and Abuse Controls

Apply appropriate throttling to:

- login/credential-reset flows;
- OTP endpoints if introduced;
- payment initiation;
- SMS-triggering endpoints;
- sensitive API routes;
- webhook routes where compatible with provider delivery patterns.

## Database Security

MySQL credentials remain server-side.

Use least-privilege database accounts where practical. Avoid exposing the database directly to the public internet unless the hosting architecture securely requires remote access.

Authorization is enforced by the Laravel application through policies, middleware and scoped resource queries.

## Backup and Recovery

Before any pilot involving real records, configure and document:

- MySQL backups;
- uploaded-document backups/recovery;
- restoration procedure;
- retention schedule;
- responsible operator;
- restore verification.

Do not claim backups exist merely because a hosting provider offers them; verify configuration.

## Dependency Security

Before significant releases:

- review Composer dependency vulnerabilities;
- review npm dependency vulnerabilities for frontend tooling;
- keep Laravel/framework dependencies supported;
- do not install packages without a concrete requirement.

## Security Testing

Critical tests must include:

- Tenant A cannot access Tenant B records;
- Landlord A cannot access Landlord B properties;
- property manager scope is restricted;
- direct URL/ID guessing fails safely;
- invalid payment callbacks cannot settle invoices;
- duplicate webhooks are idempotent;
- mass-assignment attempts cannot change protected state;
- unsupported/malicious uploads are rejected;
- CSRF/session protections remain active.

See `TESTING.md`.

## Explicit Non-Goals / Claims

RentFlow must not:

- implement automatic tenant blacklists;
- expose public credit-style scores;
- claim certified Tanzanian e-signature status without validated legal/technical implementation;
- claim to custody customer security-deposit funds without an appropriate regulated mechanism.
