# .github

![The Agent Volumes Organization Logo](./assets/logo/banner/solid-bg/agent-volumes-logo-banner-with-bg-4-1.svg)

[![Markdown Lint and Format](https://github.com/agent-volumes/.github/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/agent-volumes/.github/actions/workflows/markdown-lint.yml)
[![CodeQL](https://github.com/agent-volumes/.github/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/agent-volumes/.github/actions/workflows/github-code-scanning/codeql)
[![Dependency Review](https://github.com/agent-volumes/.github/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/agent-volumes/.github/actions/workflows/dependency-review.yml)
[![OSV Scanner Smoke](https://github.com/agent-volumes/.github/actions/workflows/osv-scanner-smoke.yml/badge.svg)](https://github.com/agent-volumes/.github/actions/workflows/osv-scanner-smoke.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/agent-volumes/.github/badge)](https://scorecard.dev/viewer/?uri=github.com/agent-volumes/.github)

Centralized documents and information for the Agent Volumes Organization and its projects.

This is the organization's special `.github` repository — a [GitHub convention](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) that automatically applies its files across all repositories in the Agent Volumes Organization that don't have their own versions.

## Repository Contents

### Community Health Files

| File                                         | Purpose                                                                                | Scope             |
| :------------------------------------------- | :------------------------------------------------------------------------------------- | :---------------- |
| [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) | Contributor Covenant 3.0 — behavioral expectations for community participation         | Organization-wide |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md)       | Contribution guidelines: scope boundaries, process, RFC path, development expectations | Organization-wide |
| [`SECURITY.md`](./SECURITY.md)               | Security policy: vulnerability reporting, SLSA compliance, supply chain integrity      | Organization-wide |

### Translations

The Code of Conduct is available in multiple languages:

| Language                      | File                                                               |
| :---------------------------- | :----------------------------------------------------------------- |
| English (default)             | [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)                       |
| 한국어 (Korean)               | [`docs/CODE_OF_CONDUCT.ko.md`](./docs/CODE_OF_CONDUCT.ko.md)       |
| 简体中文 (Chinese Simplified) | [`docs/CODE_OF_CONDUCT.zh-cn.md`](./docs/CODE_OF_CONDUCT.zh-cn.md) |
| Deutsch (German)              | [`docs/CODE_OF_CONDUCT.de.md`](./docs/CODE_OF_CONDUCT.de.md)       |
| Français (French)             | [`docs/CODE_OF_CONDUCT.fr.md`](./docs/CODE_OF_CONDUCT.fr.md)       |
| বাংলা (Bengali)               | [`docs/CODE_OF_CONDUCT.bn.md`](./docs/CODE_OF_CONDUCT.bn.md)       |
| Magyar (Hungarian)            | [`docs/CODE_OF_CONDUCT.hu.md`](./docs/CODE_OF_CONDUCT.hu.md)       |

### Issue and PR Templates

| Template                   | Location                                                                                                           | Purpose                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Pull Request Template      | [`.github/PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md)                                           | Standardized PR format with summary, change type, checklists for CI, testing, and security |
| Routing Help               | [`.github/ISSUE_TEMPLATE/routing-help.yml`](./.github/ISSUE_TEMPLATE/routing-help.yml)                             | Help routing issues to the correct repository                                              |
| Organization Policy Change | [`.github/ISSUE_TEMPLATE/organization-policy-change.yml`](./.github/ISSUE_TEMPLATE/organization-policy-change.yml) | Propose changes to organization-wide health files and policies                             |
| Governance Proposal        | [`.github/ISSUE_TEMPLATE/governance-proposal.yml`](./.github/ISSUE_TEMPLATE/governance-proposal.yml)               | Propose changes to TSC structure or decision-making                                        |
| Security Policy Question   | [`.github/ISSUE_TEMPLATE/security-policy-question.yml`](./.github/ISSUE_TEMPLATE/security-policy-question.yml)     | Ask non-sensitive security policy or hardening questions                                   |

### Documentation

| File                                               | Purpose                                         |
| :------------------------------------------------- | :---------------------------------------------- |
| [`docs/issue-routing.md`](./docs/issue-routing.md) | Detailed routing reference for the organization |
| [`docs/labels.md`](./docs/labels.md)               | Canonical label taxonomy and status meanings    |

### CI/CD Workflows

| Workflow                 | File                                                                                                     | Purpose                                                                                | Reusable |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | :------: |
| Markdown Lint and Format | [`.github/workflows/markdown-lint.yml`](./.github/workflows/markdown-lint.yml)                           | Automated linting and formatting checks for Markdown files on PRs and pushes to `main` |    No    |
| Dependency Review        | [`.github/workflows/dependency-review-reusable.yml`](./.github/workflows/dependency-review-reusable.yml) | Reusable workflow for PR dependency vulnerability and license checks                   |   Yes    |
| Scorecard                | [`.github/workflows/scorecard-reusable.yml`](./.github/workflows/scorecard-reusable.yml)                 | Reusable workflow for OpenSSF Scorecard supply-chain security analysis                 |   Yes    |
| OSV Scanner PR           | [`.github/workflows/osv-scanner-pr-reusable.yml`](./.github/workflows/osv-scanner-pr-reusable.yml)       | Reusable workflow for PR diff vulnerability scans                                      |   Yes    |
| OSV Scanner Full         | [`.github/workflows/osv-scanner-full-reusable.yml`](./.github/workflows/osv-scanner-full-reusable.yml)   | Reusable workflow for full repository vulnerability scans                              |   Yes    |
| OSV Scanner Smoke        | [`.github/workflows/osv-scanner-smoke.yml`](./.github/workflows/osv-scanner-smoke.yml)                   | Validates OSV Scanner integration in this repository                                   |    No    |

## How Organization-Wide Files Work

GitHub automatically applies files from this repository to all other repositories in the Agent Volumes Organization:

- **Default behavior**: If a repository doesn't have its own `CODE_OF_CONDUCT.md`, it will inherit the one from this repository.
- **Override**: Individual repositories can override by adding their own version of any file.
- **Visibility**: Files in this repository are visible across the organization via GitHub's UI (e.g., when creating issues or PRs).

## Reusable Workflows

This repository provides reusable workflows for common security and compliance checks. Consumer repositories can call these workflows with a single `uses:` line.

> [!NOTE]
> Reusable workflows from `agent-volumes/.github` are an **exception** to [the SHA-pinning requirement](./docs/security/workflow-hardening.md#action-references). This repository does not publish semantic version tags, and Dependabot cannot propose updates for SHA-pinned internal reusable workflows. Adding tags or introducing an additional automation bot solely for this purpose would create more operational overhead than value. Consumer repositories may reference these workflows by branch name (e.g., `@main`).

### Which Workflows Are Reusable

| Workflow          | Reusable | Reason                                                         |
| :---------------- | :------: | :------------------------------------------------------------- |
| OSV Scanner PR    |   Yes    | Standard scan behavior across all repositories                 |
| OSV Scanner Full  |   Yes    | Standard full repository scan behavior                         |
| Dependency Review |   Yes    | Centralized policy with per-repo overrides                     |
| Scorecard         |   Yes    | Standardized supply-chain security analysis                    |
| Markdown Lint     |    No    | Tightly coupled to this repo's Bun/Prettier/markdownlint setup |
| OSV Scanner Smoke |    No    | Repository-specific validation of the reusable OSV workflows   |

### OSV Scanner Reusable Workflow

Provides reusable workflows for [OSV Scanner](https://google.github.io/osv-scanner/) vulnerability detection.

#### Available Workflows

| Workflow     | File                            | Trigger                                 | Behavior                                                                    |
| :----------- | :------------------------------ | :-------------------------------------- | :-------------------------------------------------------------------------- |
| PR Diff Scan | `osv-scanner-pr-reusable.yml`   | `pull_request`, `merge_group`           | Compares base vs head branch, reports only newly introduced vulnerabilities |
| Full Scan    | `osv-scanner-full-reusable.yml` | `push`, `schedule`, `workflow_dispatch` | Reports all known vulnerabilities in the repository                         |

#### Standard Defaults

- `scan-args` defaults to `--recursive ./` — OSV Scanner auto-detects supported lockfiles across ecosystems
- `upload-sarif` defaults to `true` — set to `false` for repositories where SARIF upload is not available
- `fail-on-vuln` defaults to `true` — the workflow fails when vulnerabilities are found

#### Consumer Usage

```yaml
name: OSV Scanner PR
on:
  pull_request:
  merge_group:
permissions:
  contents: read
jobs:
  osv:
    permissions:
      actions: read
      contents: read
      security-events: write
    uses: agent-volumes/.github/.github/workflows/osv-scanner-pr-reusable.yml@main
```

```yaml
name: OSV Scanner Full
on:
  schedule:
    - cron: '30 12 * * 1'
  push:
    branches: [main]
permissions:
  contents: read
jobs:
  osv:
    permissions:
      actions: read
      contents: read
      security-events: write
    uses: agent-volumes/.github/.github/workflows/osv-scanner-full-reusable.yml@main
```

#### Multi-Ecosystem Support

These workflows support all ecosystems that OSV Scanner recognizes, including JavaScript, Python, Go, Rust, Java, .NET, PHP, and others. Standard lockfiles are auto-detected when scanning recursively from the repository root.

Repositories with nonstandard layouts may override `scan-args`:

- Explicit lockfile targeting: `--lockfile=./path/to/custom.lock`
- Path exclusions: `--experimental-exclude=./vendor`

#### Rollout Notes

- For initial calibration, a repository may temporarily set `fail-on-vuln: false` for the first 1-2 runs
- After calibration, revert to the standard default of `true`
- Always pin the workflow reference to a specific commit SHA

### Dependency Review Reusable Workflow

Provides standardized dependency vulnerability and license checking across all repositories with a centralized configuration.

#### Available Inputs

| Input                   | Required | Default                                                           | Description                                                      |
| :---------------------- | :------: | :---------------------------------------------------------------- | :--------------------------------------------------------------- |
| `config-file`           |    No    | `agent-volumes/.github/.github/dependency-review-config.yml@main` | Path to dependency review configuration file                     |
| `fail-on-severity`      |    No    | (from config)                                                     | Minimum severity to fail (`low`, `moderate`, `high`, `critical`) |
| `comment-summary-in-pr` |    No    | `on-failure`                                                      | Post summary comment to PR (`always`, `on-failure`, `never`)     |
| `warn-only`             |    No    | `false`                                                           | Report only, never fail                                          |
| `external-repo-token`   |    No    | (empty)                                                           | Token for accessing external repository configs                  |

#### Consumer Usage

```yaml
name: Dependency Review
on:
  pull_request:
  merge_group:
permissions:
  contents: read
jobs:
  dependency-review:
    permissions:
      contents: read
      pull-requests: write
    uses: agent-volumes/.github/.github/workflows/dependency-review-reusable.yml@main
```

#### With Custom Configuration

```yaml
name: Dependency Review
on:
  pull_request:
permissions:
  contents: read
jobs:
  dependency-review:
    permissions:
      contents: read
      pull-requests: write
    uses: agent-volumes/.github/.github/workflows/dependency-review-reusable.yml@main
    with:
      fail-on-severity: moderate
      warn-only: false
```

### Dependency Review Configuration

The reusable workflow references a centralized configuration file that defines organization-wide policies for dependency vulnerability and license checking.

| Policy Area           | Default Setting           | Description                                                                   |
| :-------------------- | :------------------------ | :---------------------------------------------------------------------------- |
| **Vulnerability**     | `moderate`                | Minimum severity that fails the check (`low`, `moderate`, `high`, `critical`) |
| **Scopes**            | `development` + `runtime` | Both dev and runtime dependencies are checked                                 |
| **License**           | Allow-list                | Only permissive licenses (MIT, Apache-2.0, BSD, ISC, CC0, etc.) are permitted |
| **OpenSSF Scorecard** | `true`                    | Displays Scorecard information for dependencies                               |
| **GHSA Allow-list**   | (empty)                   | Security advisories can be temporarily exempted with approval                 |

**Configuration file location:** `.github/dependency-review-config.yml`

**Repository-specific overrides:** Individual repositories can override the centralized policy by passing different values to the reusable workflow inputs (e.g., `fail-on-severity: high` for stricter or `warn-only: true` for observation mode).

### Scorecard Reusable Workflow

Provides standardized OpenSSF Scorecard supply-chain security analysis with configurable publishing and artifact options.

#### Available Inputs

| Input                  | Required | Default         | Description                                      |
| :--------------------- | :------: | :-------------- | :----------------------------------------------- |
| `results-file`         |    No    | `results.sarif` | Path to the SARIF results file                   |
| `results-format`       |    No    | `sarif`         | Results format (`sarif`, `json`, `csv`)          |
| `publish-results`      |    No    | `true`          | Publish results to OpenSSF REST API              |
| `repo-token`           |    No    | (empty)         | Fine-grained PAT for Branch-Protection check     |
| `file-mode`            |    No    | (empty)         | File mode for `.gitattributes` export-ignore     |
| `retention-days`       |    No    | `5`             | Artifact retention days                          |
| `upload-artifact`      |    No    | `true`          | Upload results as artifact                       |
| `upload-code-scanning` |    No    | `true`          | Upload results to GitHub code scanning dashboard |

#### Consumer Usage

```yaml
name: Scorecard supply-chain security
on:
  branch_protection_rule:
  schedule:
    - cron: '20 7 * * 2'
  push:
    branches: [main]
permissions:
  contents: read
jobs:
  analysis:
    permissions:
      contents: read
      issues: read
      pull-requests: read
      checks: read
      security-events: write
      id-token: write
    uses: agent-volumes/.github/.github/workflows/scorecard-reusable.yml@main
```

#### Private Repository Usage

```yaml
name: Scorecard supply-chain security
on:
  schedule:
    - cron: '20 7 * * 2'
  push:
    branches: [main]
permissions:
  contents: read
jobs:
  analysis:
    permissions:
      contents: read
      issues: read
      pull-requests: read
      checks: read
      security-events: write
      id-token: write
    uses: agent-volumes/.github/.github/workflows/scorecard-reusable.yml@main
    with:
      publish-results: false
      upload-code-scanning: false
      repo-token: ${{ secrets.SCORECARD_TOKEN }}
```

### Why Markdown Lint Is Not Reusable

The `markdown-lint.yml` workflow is intentionally not provided as a reusable workflow because it is tightly coupled to this repository's specific tooling stack:

- **Package manager**: Uses `bun` with `bun.lock`
- **Linting tools**: Assumes `markdownlint-cli2` and `prettier` are installed via `package.json`
- **Configuration files**: Expects `.markdownlint-cli2.jsonc` and `.prettierrc` to exist at repository root
- **Scripts**: Calls `bun run format:check` and `bun run lint:md` which are defined in this repo's `package.json`

Consumer repositories using different package managers (npm, yarn, pnpm) or different linting configurations should implement their own markdown linting workflow tailored to their stack.

## Development

### Markdown Linting and Formatting

This repository uses [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) and [Prettier](https://prettier.io/) for consistent Markdown style.

#### Setup

```bash
bun install
```

#### Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `bun run lint:md`      | Lint all Markdown files                  |
| `bun run lint:md:fix`  | Lint and auto-fix issues                 |
| `bun run format`       | Format all Markdown files with Prettier  |
| `bun run format:check` | Check formatting without modifying files |

#### Configuration

- **markdownlint**: `.markdownlint-cli2.jsonc` — Configured to avoid conflicts with Prettier
- **Prettier**: `.prettierrc` — Uses default Prettier settings for Markdown

#### Pre-commit Hooks

This repository uses [Lefthook](https://lefthook.dev/) to automatically lint and format Markdown files before each commit.

When you commit changes:

1. Staged `.md` and `.mdx` files are automatically linted with `markdownlint-cli2 --fix`
2. Files are formatted with `prettier --write`
3. Fixed files are re-staged automatically
4. If there are unfixable errors, the commit is blocked

The hooks are installed automatically when you run `bun install` via the `prepare` script.

To manually run the pre-commit hook:

```bash
bunx lefthook run pre-commit
```

#### CI/CD

Pull requests and pushes to `main` that modify Markdown files trigger automated linting and formatting checks via GitHub Actions.

### SVG Optimization

SVG logo assets are managed in two forms for maintainability and performance:

- **`assets/logo/src/`** — Source of truth with full readability (hand-editable)
- **`assets/logo/`** — Deploy-optimized versions consumed by README and other docs

The optimized versions are generated with [SVGO](https://github.com/svg/svgo) from the readable source files. The configuration (`svgo.config.mjs`) preserves `viewBox` for responsive rendering while removing unnecessary metadata.

#### Available Scripts

| Script                       | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `bun run format:svg`         | Format readable source SVGs in `src/`         |
| `bun run format:svg:check`   | Check source SVG formatting without modifying |
| `bun run svg:optimize`       | Regenerate optimized SVGs from `src/`         |
| `bun run svg:optimize:check` | Preview output without writing files          |

#### Pre-commit Hooks

When SVG source files under `assets/logo/src/` are staged, Prettier first normalizes the editable source SVGs for readability and style consistency, then SVGO regenerates the optimized deploy versions in `assets/logo/` and re-stages both source and output files.
