# Git workflow — RentFlow

## Branches

- `main` — production / base. Do not implement features here.
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

## Bootstrap exception

The first commit on `main` established an empty-repository baseline. All application work after that belongs on `masterchanges`.

## Before editing

```bash
git branch --show-current
```

If the result is `main`, switch to `masterchanges`.

## Commits

Conventional, small, reviewable. Inspect diff and status first. No secrets. No AI/agent author or `Co-authored-by` agent trailers.

Use the Git identity already configured on the machine. Do not change `user.name` or `user.email`.

## Pull requests

- Base: `main`
- Compare: `masterchanges`
- Do not merge the PR unless the repository owner asks

## Authorship

Commits made on behalf of the owner must appear as the owner. Coding agents must not rewrite author metadata or advertise themselves in commit messages.
