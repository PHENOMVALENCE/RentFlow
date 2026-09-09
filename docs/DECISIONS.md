# Architecture decision log

Add a new ADR when a significant architectural choice is made.

## ADR-001 — Use Next.js App Router

**Status:** Accepted

**Context:** RentFlow needs a web and mobile-capable UI with server rendering for low-bandwidth devices.

**Decision:** Use current stable Next.js with the App Router, TypeScript, and `src/`.

**Consequences:** One deployable app on Vercel. Server Components by default. No separate Laravel/API monolith.

## ADR-002 — Use TypeScript

**Status:** Accepted

**Context:** Tenancy, money, and roles are easy to get wrong in untyped code.

**Decision:** Strict TypeScript. Avoid `any`.

**Consequences:** Slightly more boilerplate; safer refactors.

## ADR-003 — Use Supabase / PostgreSQL

**Status:** Accepted (not yet provisioned)

**Context:** Need auth, relational data, and file storage quickly for a hackathon.

**Decision:** Supabase (Postgres, Auth, Storage). Schema via committed migrations.

**Consequences:** RLS is required before production. Service role is server-only.

## ADR-004 — Provider-independent payment layer

**Status:** Accepted

**Context:** Tanzanian collections span M-Pesa, Mixx by Yas, Airtel Money, HaloPesa, and banks.

**Decision:** Domain talks to a `PaymentProvider` interface. Sandbox first.

**Consequences:** Extra adapter code; avoids rewriting invoices when a rail changes.

## ADR-005 — Use `masterchanges` development branch

**Status:** Accepted

**Context:** `main` is the production base. The repository started empty and needed a one-time `main` baseline.

**Decision:** Implement on `masterchanges`; PR into `main`; owner merges.

**Consequences:** No feature work on `main`. Agents never self-merge.

## ADR-006 — Keep AI secondary to the core rental workflow

**Status:** Accepted

**Context:** AI is fashionable but is not the rental trust problem.

**Decision:** No decorative AI. Optional later: advisory maintenance image classification.

**Consequences:** Demo energy stays on agreement → pay → receipt → maintenance.

## ADR-007 — Licensing undecided

**Status:** Accepted

**Context:** No license was specified for the repository.

**Decision:** Do not invent a license file. Document that licensing is undecided.

**Consequences:** Consumers should not assume OSI terms until a license is chosen.
