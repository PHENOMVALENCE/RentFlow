# Git Workflow — RentFlow

## Branches

- `main` — base/release branch. Do not implement features directly here.
- `masterchanges` — active development branch.

```text
main
  └── masterchanges
        └── small iterative commits
              └── push
                    └── pull request into main
                          └── human review
                                └── merge (owner only)
```

## Current Baseline

The original Next.js prototype was merged into `main` through PR #1. The `masterchanges` branch has since been reset to documentation only and now defines a clean Laravel implementation direction.

The next application bootstrap must initialize Laravel on `masterchanges` while preserving the documentation files.

## Before Editing

```bash
git branch --show-current
```

If the result is `main`, switch to `masterchanges` before implementation.

## Commits

Use conventional, small and reviewable commits. Inspect diff/status before committing.

Examples:

- `chore: initialize Laravel application`
- `chore: configure MySQL environment template`
- `feat: add landlord authentication`
- `feat: add property management`
- `test: cover invoice generation rules`
- `docs: update payment integration design`

Do not combine the entire FYP into one giant commit.

## Secrets

Never commit:

- `.env`;
- database passwords;
- payment-provider keys;
- SMS-provider keys;
- webhook secrets;
- private keys;
- real customer/research data.

## Authorship

Use the Git identity already configured for the repository owner. Do not change `user.name` or `user.email` unless explicitly requested.

Coding agents must not advertise themselves as authors or add AI `Co-authored-by` trailers unless the repository owner explicitly asks for that attribution.

## Pull Requests

- Base: `main`
- Compare: `masterchanges` or the approved implementation branch
- Describe requirements addressed, migrations, tests, documentation changes and known limitations
- Do not self-merge as a coding agent

## Laravel Delivery Check

Once Laravel implementation exists, completed delivery units should verify the checks actually configured in the repository, expected to include:

```bash
php artisan test
npm run build
```

Additional formatter/static-analysis commands should be included after those tools are configured.
