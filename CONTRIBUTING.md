# Contributing to RentFlow

Thank you for helping build RentFlow. This document covers both human contributors and coding agents working in this repository.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm
- Git
- A GitHub account with access to [PHENOMVALENCE/RentFlow](https://github.com/PHENOMVALENCE/RentFlow)

## Local setup

```bash
git clone https://github.com/PHENOMVALENCE/RentFlow.git
cd RentFlow
git checkout masterchanges
npm install
cp .env.example .env.local
npm run dev
```

The app is served at [http://localhost:3000](http://localhost:3000).

## Environment configuration

Copy `.env.example` to `.env.local`. Leave unused provider keys empty until those integrations are implemented. Never commit `.env.local` or other files containing secrets.

## Branch policy

- `main` is the production/base branch.
- All implementation work happens on `masterchanges`.
- Never implement features directly on `main`.
- Open pull requests from `masterchanges` (or a short-lived branch based on it) into `main`.
- Do not merge your own pull request unless the repository owner has explicitly asked you to.

## `masterchanges` workflow

1. `git checkout masterchanges`
2. `git pull` if the branch already tracks origin
3. Implement one coherent change
4. Lint / typecheck (and tests when available)
5. Commit with a conventional message
6. Push `masterchanges`
7. Open or update a pull request targeting `main`

## Commit conventions

Use conventional commits:

- `feat:` new product capability
- `fix:` bug fix
- `docs:` documentation
- `chore:` tooling, bootstrap, or maintenance
- `refactor:` internal change with no intended behavior change
- `test:` tests
- `perf:`, `build:`, `ci:` as needed

Commits should be small, reviewable, and keep the application buildable whenever practical.

## Code standards

- TypeScript strict mode; avoid `any`
- Server-side validation for untrusted input
- No secrets in client bundles
- Accessible, mobile-first UI
- TZS formatting and Tanzanian date display for financial values
- Keep business rules out of giant page components

## Testing

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Add `npm test` when a test runner is introduced. New domain logic should ship with tests.

## Documentation updates

Update docs when architecture, schema, environment variables, APIs, setup, workflows, or product behavior change. Start with `PROJECT.md`, `README.md`, and the relevant file in `docs/`.

## Pull request expectations

PRs should describe:

- what changed and why
- validation performed
- documentation updates
- known limitations
- screenshots for UI work

## Review requirements

The repository owner reviews and merges into `main`. Do not auto-merge.

## Security reporting

See [SECURITY.md](./SECURITY.md). Do not file public issues for sensitive vulnerabilities.

## Authorship policy

Commits must use the repository owner's configured Git identity when they are intentionally being made on behalf of the owner.

Contributions generated with development tools or coding agents must still use that configured identity in those cases.

No automated agent attribution should be inserted into commits unless the repository owner explicitly requests it. Do not add `Co-authored-by` lines for Cursor, Claude, Codex, ChatGPT, or other agents.
