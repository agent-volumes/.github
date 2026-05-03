# PROJECT KNOWLEDGE BASE

**Generated:** 12026-05-04
**Commit:** 2cfd9da
**Branch:** main

## OVERVIEW

Organization-wide `.github` repository for the Agent Volumes org. Contains no runtime code — only community health files, reusable CI workflows, documentation, and branding assets. GitHub automatically applies health files (CODE_OF_CONDUCT, CONTRIBUTING, SECURITY) to all repos in the org that lack their own copies.

## STRUCTURE

```text
./
├── .github/
│   ├── workflows/          # CI workflows (reusable + local)
│   ├── CODEOWNERS
│   ├── dependabot.yml
│   ├── dependency-review-config.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── CODE_OF_CONDUCT.*.md   # Translations (ko, zh-cn, de, fr)
│   └── security/              # Security policy docs
├── assets/logo/            # Org branding (banners, square)
├── package.json            # Bun-based dev tooling only
├── lefthook.yml            # Pre-commit hooks (currently empty/example)
├── CODE_OF_CONDUCT.md      # English (default)
├── CONTRIBUTING.md         # Spec contribution guidelines
├── SECURITY.md             # Vulnerability reporting policy
├── README.md               # Org documentation index
└── GOVERNANCE.md           # TSC governance
```

## WHERE TO LOOK

| Task                     | Location                               | Notes                                         |
| ------------------------ | -------------------------------------- | --------------------------------------------- |
| Add/modify CI workflow   | `.github/workflows/`                   | Reusable workflows consumed by other repos    |
| Update org health files  | Root (`CODE_OF_CONDUCT.md`, etc.)      | Auto-inherited by all org repos               |
| Translate CoC            | `docs/CODE_OF_CONDUCT.<lang>.md`       | Korean, Chinese, German, French               |
| Security policy docs     | `docs/security/`                       | SLSA, workflow hardening, dependency security |
| Org branding             | `assets/logo/`                         | Banner + square variants, light/dark themes   |
| Dependency review config | `.github/dependency-review-config.yml` | Centralized allow-list + severity policy      |
| PR template              | `.github/PULL_REQUEST_TEMPLATE.md`     | Auto-applied to all org PRs                   |

## CONVENTIONS

- **Package manager:** Bun (`bun install`, `bun run`, `bunx`)
- **Pre-commit:** Lefthook (installed via `prepare` script; config in `lefthook.yml`)
- **Markdown linting:** `markdownlint-cli2` with `.markdownlint-cli2.jsonc`
- **Formatting:** Prettier with `.prettierrc` (default settings for Markdown)
- **CI:** GitHub Actions, Ubuntu-latest runners, Read-only permissions by default
- **Action pinning:** All external actions pinned to commit SHA + comment with version tag
  - **Reusable workflows:** Internal reusables referenced by branch (`@main`) — **exception** to SHA-pinning rule (see README note)
- **DCO required:** All commits must include a `Signed-off-by` line. Use `git commit -s` or configure your Git client to sign off automatically. See `CONTRIBUTING.md` §"Commit Sign-Off (DCO)" for details.

## ANTI-PATTERNS (THIS PROJECT)

- **Do not** make `markdown-lint.yml` reusable — it is tightly coupled to this repo's Bun/Prettier/markdownlint stack
- **Do not** SHA-pin internal reusable workflows from this repo — Dependabot cannot update them; use `@main`
- **Do not** leave `continue-on-error: true` on scanner steps without explicit justification — OSV full scanner currently has this (review before relying on it for security gating)
- **Do not** add runtime code or `src/` — this is a docs/config repo, not a library

## UNIQUE STYLES

- **Special `.github` repo:** Files at root auto-apply org-wide. Other repos inherit `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, PR template unless they provide their own.
- **Reusable workflow architecture:** 4 reusable workflows (OSV PR, OSV Full, Dependency Review, Scorecard) designed for cross-repo consumption with standardized inputs/defaults.
- **Security-first CI:** All workflows include `step-security/harden-runner` egress audit, minimal permissions, SARIF upload to code scanning.
- **Spec-style contributing:** `CONTRIBUTING.md` follows OCI/W3C/IETF convention — trunk-based development, DCO sign-off, RFC 2119 keywords for normative requirements.

## COMMANDS

```bash
# Setup
bun install                    # Installs deps + lefthook pre-commit hooks

# Lint / format
bun run lint:md               # Lint all Markdown files
bun run lint:md:fix           # Lint and auto-fix
bun run format                # Format with Prettier
bun run format:check          # Check formatting without modifying

# Pre-commit (manual)
bunx lefthook run pre-commit
```
