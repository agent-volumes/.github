# .github/workflows KNOWLEDGE BASE

**Generated:** 12026-05-04

## OVERVIEW

Reusable and local CI workflows for security scanning, dependency review, and Markdown quality. Designed for org-wide consumption via `workflow_call`.

## WHERE TO LOOK

| Workflow                  | File                             | Purpose                                 | Reusable |
| ------------------------- | -------------------------------- | --------------------------------------- | -------- |
| Markdown Lint             | `markdown-lint.yml`              | Lint/format checks on PR/push to `main` | No       |
| OSV Scanner Smoke         | `osv-scanner-smoke.yml`          | Validates OSV integration in this repo  | No       |
| OSV Scanner PR            | `osv-scanner-pr-reusable.yml`    | PR diff vulnerability scans             | Yes      |
| OSV Scanner Full          | `osv-scanner-full-reusable.yml`  | Full repo vulnerability scans           | Yes      |
| Dependency Review         | `dependency-review-reusable.yml` | PR dependency vuln + license checks     | Yes      |
| Scorecard                 | `scorecard-reusable.yml`         | OpenSSF Scorecard analysis              | Yes      |
| Scorecard (local)         | `scorecard.yml`                  | Invokes reusable scorecard workflow     | No       |
| Dependency Review (local) | `dependency-review.yml`          | Invokes reusable dependency review      | No       |

## CONVENTIONS

- **Reusable workflows:** Expose `workflow_call` inputs with sensible defaults (e.g., `fail-on-vuln: true`, `upload-sarif: true`)
- **Action pinning:** External actions pinned to commit SHA + version comment (e.g., `actions/checkout@de0fac2e... # v6.0.2`)
- **Internal reusables:** Referenced by branch (`@main`) — exception to SHA-pinning for cross-repo consumption
- **Runner hardening:** All workflows start with `step-security/harden-runner` in `egress-policy: audit` mode
- **Permission minimalism:** Default `contents: read`; job-level permissions escalated only as needed

## ANTI-PATTERNS

- `osv-scanner-full-reusable.yml` line ~51: `continue-on-error: true` on the scanner step — can mask scan failures. Pair with `fail-on-vuln` downstream or remove.
- Do not convert `markdown-lint.yml` to reusable — tightly coupled to this repo's Bun toolchain.
