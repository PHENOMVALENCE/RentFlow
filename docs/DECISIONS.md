# Architecture Decision Log — RentFlow

Add a new ADR when a significant architectural choice is made. Do not erase superseded decisions; preserve why the project changed direction.

## ADR-001 — Original Next.js App Router Prototype

**Status:** Superseded by ADR-008

**Context:** The original 2026 hackathon prototype prioritized rapid web UI delivery.

**Decision:** The first prototype used Next.js App Router, React and TypeScript.

**Consequences:** This produced the initial application shell but introduced a stack that is no longer preferred for the 2027 FYP implementation.

## ADR-002 — Original TypeScript-First Implementation

**Status:** Superseded by ADR-008

**Context:** The original prototype used TypeScript for frontend/server code.

**Decision:** Strict TypeScript was used in the prototype.

**Consequences:** The previous codebase has since been intentionally cleared. TypeScript is no longer the canonical backend/application language.

## ADR-003 — Original Supabase / PostgreSQL Direction

**Status:** Superseded by ADR-009

**Context:** Supabase offered rapid Auth/PostgreSQL/Storage setup for the original hackathon.

**Decision:** The prototype planned Supabase for relational data, authentication and storage.

**Consequences:** The FYP no longer depends on Supabase-specific Auth, Storage or RLS architecture.

## ADR-004 — Provider-Independent Payment Layer

**Status:** Accepted

**Context:** Tanzanian collections may involve M-Pesa, Mixx by Yas, Airtel Money, HaloPesa and other gateways.

**Decision:** RentFlow business logic depends on an internal payment-provider contract/service. Sandbox/test provider first; production adapters later.

**Consequences:** Additional adapter code is required, but billing/reconciliation logic remains independent of one payment provider.

## ADR-005 — Use `masterchanges` Development Branch

**Status:** Accepted

**Context:** `main` is the base/release branch and implementation should be reviewable before merge.

**Decision:** Implement on `masterchanges` or an explicitly approved branch derived from it; open PRs into `main`; repository owner merges.

**Consequences:** No direct feature implementation on `main`. Coding agents do not self-merge.

## ADR-006 — Keep AI Secondary to Core Rental Workflows

**Status:** Accepted

**Context:** AI features do not solve the primary rental-management problem by themselves.

**Decision:** Prioritize tenancy, billing, payments, maintenance, records and communications. AI may later provide advisory assistance where justified.

**Consequences:** FYP evaluation remains focused on measurable rental-management outcomes rather than decorative AI features.

## ADR-007 — Licensing Undecided

**Status:** Accepted

**Context:** No repository license has been selected.

**Decision:** Do not invent a license.

**Consequences:** Consumers must not assume open-source usage rights until a license is explicitly chosen.

## ADR-008 — Use Laravel as the Canonical Application Framework

**Status:** Accepted — 10 September 2026

**Context:** The repository owner is substantially more comfortable and productive with Laravel. RentFlow's requirements—relational tenancy data, authentication, authorization, scheduled billing, queues, notifications, webhooks, file storage and server-rendered dashboards—map naturally to Laravel's built-in capabilities. A single framework also reduces FYP implementation and operational complexity.

**Decision:** Rebuild RentFlow as a Laravel monolith using PHP, Blade, Livewire and Tailwind CSS. Use Laravel conventions for routing, validation, policies, queues, scheduler, notifications, filesystem, migrations and testing.

**Consequences:**

- the previous Next.js codebase is intentionally removed;
- one Laravel application owns UI, domain logic and server integrations;
- no separate JavaScript API/backend is required for the initial FYP;
- future API/mobile access can be added through Laravel API routes and Sanctum if justified;
- implementation agents must not reintroduce Next.js/React/Vue as the primary architecture without a new approved ADR.

## ADR-009 — Use MySQL as the Default Relational Database

**Status:** Accepted — 10 September 2026

**Context:** RentFlow requires relational integrity, transactions, indexing and mature Laravel integration. MySQL is widely supported by Laravel hosting environments and is familiar operationally.

**Decision:** Use MySQL 8+ with Eloquent and committed Laravel migrations as the default database stack.

**Consequences:**

- authorization is enforced through Laravel Policies/Gates/middleware and query/resource boundaries rather than Supabase RLS;
- schema changes live in `database/migrations`;
- financial state transitions use database transactions where atomicity matters;
- migration design should remain reasonably portable where practical, but MySQL is the baseline target.

## ADR-010 — Blade + Livewire for the Primary Web Experience

**Status:** Accepted — 10 September 2026

**Context:** RentFlow needs responsive dashboards and interactive forms but does not initially require a separate SPA.

**Decision:** Use Blade for server-rendered views, Livewire for stateful UI interactions, and Tailwind CSS for styling.

**Consequences:**

- less duplicated frontend/backend state management;
- lower JavaScript complexity;
- mobile/low-bandwidth optimization remains easier to reason about;
- JavaScript may still be used where necessary, but should not drive a second application architecture.
