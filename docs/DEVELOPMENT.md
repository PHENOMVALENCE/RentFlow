# Development — RentFlow

## Local URL

[http://localhost:3000](http://localhost:3000)

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm test` is reserved for when a test runner is introduced. Do not assume tests exist yet.

## Node and package manager

Use npm. Recorded application versions live in `package.json` / `package-lock.json`.

## Environment

```bash
cp .env.example .env.local
```

Leave unused keys empty. `.env.local` is gitignored.

## TypeScript

Strict mode is enabled. `npm run typecheck` runs `tsc --noEmit`.

## Testing strategy (planned)

**Unit:** currency formatting, phone normalization, invoice balances, status transitions.

**Integration:** tenancy creation, agreement acceptance, payment recording, webhook idempotency.

**End-to-end:** landlord onboarding, tenant accept + pay, maintenance request.

Do not add a large test framework until the first domain logic needs it. When added, document the runner here and add an `npm test` script.

## Branch reminder

```bash
git branch --show-current
```

Expected: `masterchanges`.
