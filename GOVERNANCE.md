# Agent Volumes Governance

This document describes how the Agent Volumes Organization makes decisions, manages roles, reviews changes, and records
technical direction under the [Agent Volumes Charter](CHARTER.md).

Agent Volumes currently uses a provisional TSC plus maintainer model. It is intended to be lightweight enough for an
early open specification project while giving contributors a clear, vendor-neutral standards process.

## 1. Principles

- **Open participation.** Anyone may open issues, join discussions, submit pull requests, and review proposals.
- **Vendor neutrality.** No runtime, registry, vendor, hosted service, or downstream implementation defines the standard.
- **Consensus seeking.** Decisions should be made by rough consensus whenever possible, with voting used as a fallback.
- **Recorded decisions.** Material decisions should be recorded in issues, pull requests, ADRs, release notes, or meeting
  notes.
- **Normative clarity.** Normative requirements belong in the specification and companion artifacts, not in reference
  implementations or private discussions.
- **Security first.** Security-sensitive work follows [SECURITY.md](SECURITY.md), including private reporting when needed.

## 2. Roles

### Contributor

Anyone who participates in the project is a contributor. Contributors may open issues, submit pull requests, participate
in discussions, review proposals, and provide implementation feedback.

No formal membership is required to contribute.

### Maintainer

Maintainers are trusted contributors with write or administrative access to one or more repositories.

Maintainers are responsible for:

- Triaging issues and pull requests
- Reviewing editorial and non-normative changes
- Merging approved changes
- Maintaining repository hygiene, labels, templates, and release mechanics
- Escalating normative, security-sensitive, or disputed changes to the TSC

Maintainers are nominated by an existing maintainer or TSC member and confirmed by the TSC.

### Editor

Editors are maintainers or contributors who shepherd a draft, release, ADR, or specification section. Editors do not gain
extra governance authority unless they are also maintainers or TSC members.

Editors are responsible for:

- Coordinating review feedback
- Keeping prose, schemas, OpenAPI definitions, and fixtures aligned
- Preparing changelog or release-note summaries
- Calling out unresolved technical objections before merge or release

### TSC Member

TSC members are responsible for specification direction and governance decisions. During the provisional phase, TSC
members may be founder-appointed or confirmed by the existing TSC.

TSC members are responsible for:

- Reviewing normative changes and ADRs
- Resolving disputes that maintainers cannot resolve by consensus
- Confirming maintainers and future TSC members
- Reviewing release readiness for material specification milestones
- Guarding against vendor capture and implementation-specific requirements

## 3. Provisional Technical Steering Committee

The current TSC is provisional.

| Name                                        | Affiliation | Role              | Since    |
| :------------------------------------------ | :---------- | :---------------- | :------- |
| [Yunseo Kim](https://github.com/yunseo-kim) | Windlass    | Provisional Chair | 12026 HE |

The project should seek a TSC of 3-5 members as participation grows. The TSC should make a best-effort attempt to avoid
single-company or single-implementation dominance, but the initial phase may not yet have enough contributors to enforce
a strict company cap.

The provisional TSC must review its structure after six months or after the `v0.1.0` milestone, whichever comes first.
That review should decide whether to keep appointments, introduce elections, create Working Groups, move governance
records to a dedicated repository, or seek external foundation hosting.

## 4. Maintainers

Maintainer access is granted for one or more repositories, not automatically for every repository in the organization.

A maintainer candidate should have:

- A sustained record of useful contributions, reviews, or implementation feedback
- Good judgment about normative versus non-normative changes
- A history of constructive collaboration under the [Code of Conduct](CODE_OF_CONDUCT.md)
- Familiarity with DCO sign-off, security reporting, and repository workflow expectations

Maintainer nominations should be public unless there is a privacy or safety reason to handle the discussion privately.
The TSC confirms maintainer changes by consensus or fallback vote.

## 5. Decision Process

Agent Volumes uses public discussion and rough consensus as the default decision process.

The normal path is:

1. A proposal is opened as an issue, discussion, pull request, or ADR.
2. Contributors discuss technical concerns in public.
3. Maintainers determine whether the change is editorial, non-normative, normative, security-sensitive, or governance
   affecting.
4. Normative and governance-affecting changes are made visible to the TSC with `status:needs-tsc` or an equivalent
   agenda marker.
5. If technical objections are resolved or sufficiently answered, a maintainer or TSC member records the decision.
6. If consensus cannot be reached, the TSC may call a fallback vote.

For material normative changes, the review period should be at least 7 calendar days unless the TSC records an urgent
reason to shorten it. Charter amendments require the longer review period defined in [CHARTER.md](CHARTER.md).

### Fallback Voting

Voting is a fallback, not the normal path.

- Each TSC member has one vote.
- Routine TSC decisions require a simple majority of voting TSC members.
- Charter amendments require a two-thirds supermajority of voting TSC members.
- Quorum requires two-thirds of current TSC members.
- Abstentions count for quorum but not for or against the decision.
- Vote outcomes must be recorded in the relevant issue, pull request, ADR, release note, or meeting note.

When the TSC has fewer than three members, the provisional chair should prefer public consensus and documented review
periods over formal votes whenever possible.

## 6. Change Categories

| Change type                 | Examples                                     | Process                                                                                   |
| :-------------------------- | :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Editorial                   | Typos, grammar, links, formatting            | Maintainer review                                                                         |
| Non-normative clarification | Examples, explanatory notes, guidance        | Maintainer review and public pull request                                                 |
| Normative prose             | MUST, SHOULD, MAY, protocol behavior         | Public issue or discussion, TSC-visible review, recorded decision                         |
| Schema or OpenAPI           | Validation rules, API contracts              | Normative prose lockstep, affected fixtures or examples checked, TSC-visible review       |
| Conformance fixture         | Test vectors, reports, expected outcomes     | Requirement traceability, coverage review, TSC-visible review                             |
| Security-sensitive          | Vulnerability handling, trust model, secrets | Private path allowed under [SECURITY.md](SECURITY.md), public record when safe            |
| Governance                  | Charter, TSC, role, voting, repository home  | Public governance proposal, review window, TSC approval                                   |
| Implementation-local        | Runtime behavior, registry operations        | Route to the owning implementation unless it exposes a specification interoperability gap |

Material schema, OpenAPI, or conformance fixture changes are normative when they change what an implementation must do
to interoperate.

## 7. Pull Request and Review Rules

All pull requests must follow [CONTRIBUTING.md](CONTRIBUTING.md), including DCO sign-off.

Minimum review expectations:

- Editorial changes require one maintainer approval.
- Non-normative clarifications require one maintainer approval and passing checks.
- Normative changes require TSC-visible review before merge.
- Schema, OpenAPI, and conformance fixture changes require prose alignment checks.
- Security-sensitive changes must follow the private reporting path when public discussion would increase risk.
- Governance changes require the public review period and approval rules in this document and [CHARTER.md](CHARTER.md).

Maintainers should not merge their own material normative changes without review from another maintainer or TSC member.

## 8. Release Process

The prose specification is the final normative authority. Schemas, OpenAPI definitions, conformance fixtures, and report
schemas are version-aligned companion artifacts.

Before a material specification release, the release shepherd should verify:

- Prose and schema requirements are aligned
- OpenAPI definitions match the prose requirements they represent
- Conformance fixtures trace back to requirements or explicit compatibility goals
- Artifact validation passes
- Security-sensitive changes have been reviewed under [SECURITY.md](SECURITY.md)
- Breaking changes and migration notes are documented
- Changelog or release notes summarize normative changes

Draft releases may be incomplete and may contain breaking changes. Stable releases should avoid breaking changes except
through a documented compatibility process approved by the TSC.

## 9. Working Groups

The TSC may create Working Groups for focused topics such as schemas, registry API, conformance, security, or adopter
experience.

A Working Group should have:

- A public charter or issue describing scope
- Named facilitators or editors
- A public discussion path
- Clear handoff rules for proposals that need TSC approval

Working Groups may make recommendations, but they do not override the TSC or the published specification.

## 10. Conflict of Interest

Participants should disclose material conflicts when a decision could directly affect their employer, company, product,
or implementation.

TSC members and maintainers should not use their role to give special status to any vendor, hosted service, registry,
runtime, or Windlass-maintained implementation. Implementation experience is valuable evidence, but it is not normative
authority.

If a conflict could reasonably affect trust in a decision, the affected participant should disclose it and may abstain
from fallback votes.

## 11. Code of Conduct and Security Escalation

All participants must follow the [Contributor Covenant 3.0 Code of Conduct](CODE_OF_CONDUCT.md). Conduct reports should
use the reporting path in that document.

Security vulnerabilities must follow [SECURITY.md](SECURITY.md). Public governance or specification discussions must not
include exploit details, proof-of-concept code, secrets, unreleased advisory details, or embargoed findings.

## 12. Amendments

Governance changes must be proposed publicly in `agent-volumes/.github` while governance documents are maintained here.

Changes to this document require:

1. A public proposal or pull request
2. A review period of at least 7 calendar days for material changes
3. TSC approval by consensus or fallback vote
4. A recorded decision

Changes that modify the charter must follow the amendment process in [CHARTER.md](CHARTER.md).

## License

By contributing to this project, you agree that your contributions will be licensed under the
[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
