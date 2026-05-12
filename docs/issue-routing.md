# Issue Routing Reference

This document explains where to report issues, ask questions, or propose changes across the Agent Volumes Organization. Correct routing keeps policy discussions centralized while sending specification and implementation work to the repositories that own those decisions.

## Routing Principles

- **Centralize policy documents** in `agent-volumes/.github`.
- **Route work issues to the repository that owns the artifact** being changed.
- **Keep vulnerabilities private** by using the process in [`SECURITY.md`](../SECURITY.md), not public issues.
- **Use routing help** when the right repository is unclear.

## Quick Routing Table

| If you have a...                                | Use this repository                                               | Preferred path                          |
| :---------------------------------------------- | :---------------------------------------------------------------- | :-------------------------------------- |
| Question about where to file something          | `agent-volumes/.github`                                           | Routing Help issue form                 |
| Organization-wide contributor process change    | `agent-volumes/.github`                                           | Organization Policy Change issue form   |
| Common issue/PR template change                 | `agent-volumes/.github`                                           | Organization Policy Change issue form   |
| Reusable workflow policy or implementation      | `agent-volumes/.github`                                           | Organization Policy Change issue form   |
| Governance, charter, or TSC process proposal    | `agent-volumes/.github` while governance docs are maintained here | Governance Proposal issue form          |
| Non-sensitive security policy question          | `agent-volumes/.github`                                           | Security Policy Question issue form     |
| **Security vulnerability report**               | Private channel                                                   | See [`SECURITY.md`](../SECURITY.md)     |
| Specification ambiguity or normative conflict   | `agent-volumes/agent-volumes-spec`                                | Repository-local issue form             |
| Schema, OpenAPI, or conformance fixture issue   | `agent-volumes/agent-volumes-spec`                                | Repository-local issue form             |
| Specification text, schema, or ADR pull request | `agent-volumes/agent-volumes-spec`                                | Pull request against the spec repo      |
| Implementation bug in a CLI or registry         | Affected implementation repository                                | Repository-local issue form             |
| Future cross-repo roadmap or election process   | Future `governance`/`community` repo                              | Move there after that repository exists |

## `agent-volumes/.github`

Use this repository for organization-wide defaults and community governance documents.

### Issues accepted here

- Routing questions such as "Which repository should receive this issue?"
- Organization-wide contributor process improvements
- Common issue template, pull request template, or issue form improvements
- Common security policy or coordinated disclosure policy questions
- Reusable workflow policy questions
- Governance process proposals while the organization maintains governance documents in this repository

### Pull requests accepted here

- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, or `SECURITY.md` changes
- Common issue template, issue form, or pull request template changes
- Organization-wide workflow policy or reusable workflow changes
- Common label taxonomy documentation
- Charter or governance document changes while those documents are maintained here

### Not accepted here

- Specification text changes
- Schema bugs
- OpenAPI endpoint issues
- Conformance fixture gaps
- CLI implementation bugs
- Registry implementation bugs

Route those issues to the repository that owns the affected artifact.

## `agent-volumes/agent-volumes-spec`

Use the specification repository for the standard itself. It is the system of record for normative requirements, schemas, API definitions, conformance fixtures, implementer guidance, and adopter listings.

### Issues accepted there

- Ambiguous specification prose
- Conflicting normative requirements
- BCP 14 keyword usage problems
- Schema/prose drift
- OpenAPI/prose drift
- Conformance fixture coverage gaps
- Requirement ID or conformance label problems
- ADR proposals or amendments
- v0.1 scope boundary discussions
- Implementation feedback that should change the standard
- Adopter listing requests
- Public review feedback

### Pull requests accepted there

- Specification text changes
- `schemas/`, `openapi/`, or `conformance/fixtures/` changes
- `IMPLEMENTERS.md` or `ADOPTERS.md` changes
- ADR additions or amendments
- Typo and editorial corrections

### Not accepted there unless they trigger a standard-boundary discussion

- Specific CLI implementation bugs
- Bibliotheca-specific operating policy
- Token issuance implementation details
- Registry moderation or pricing policy
- Lockfile format proposals
- Registry priority policy
- Scanner interchange formats
- Multipart upload implementation details
- Universal trust root policy
- Product certification or badge requests

If an implementation-local topic reveals a gap in the standard, open it as a specification discussion and explain why it affects interoperability.

## Future `governance` or `community` Repository

The `.github` repository is the right initial home for governance-process defaults and may host governance documents while the organization is small. A separate `agent-volumes/governance` or `agent-volumes/community` repository becomes preferable once the organization needs to manage:

- TSC meeting agendas or minutes
- Working Group charters
- Elections
- Member or maintainer registries
- Public roadmap coordination
- Cross-repository proposals
- Logo, trademark, or certification policy
- Process RFCs

After such a repository exists, route governance-process issues there and keep `.github` focused on default community health files, templates, and reusable workflow policy.

## Security Reporting

**Do not open public issues for security vulnerabilities.**

All vulnerability reports must follow the private reporting process in [`SECURITY.md`](../SECURITY.md). Public issues are only for non-sensitive security policy questions, such as:

- SLSA compliance questions
- CI/CD hardening standards
- Dependency policy clarifications

Do not include exploit details, proof-of-concept code, secrets, private vulnerability information, or unreleased advisory details in public issue forms.

## Labeling

Maintainers use a standardized label taxonomy to route and triage issues. For label meanings and repository-specific labels, see [`labels.md`](./labels.md).

Issue forms can request default labels, but those labels must exist in the target repository before GitHub can apply them automatically.
