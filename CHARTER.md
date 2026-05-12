# Agent Volumes Charter

This charter defines the mission, scope, authority, and boundaries of the Agent Volumes Organization.

Agent Volumes begins as a lightweight open specification project governed by a provisional **Technical Steering Committee
(TSC)**. The project may adopt a more formal governance home, foundation relationship, trademark policy, or certification
program later, but none is created by this charter.

## 1. Mission

The Agent Volumes Organization develops an open, vendor-neutral specification for packaging, distributing, and verifying
components used by AI agent runtimes, registries, package managers, and developer tools.

The primary deliverable is [the Agent Volumes Specification and its companion artifacts](https://github.com/agent-volumes/agent-volumes-spec). Together, they define an
interoperable supply-chain model for agentic AI ecosystems without making any single runtime, registry, vendor, or
hosted service the source of truth.

## 2. Scope

The organization may develop and maintain:

- Normative prose for the Agent Volumes Specification
- JSON Schemas and other machine-readable validation artifacts
- OpenAPI contracts for registry and discovery protocols
- Conformance fixtures and conformance report schemas
- Architecture Decision Records (ADRs)
- Implementer guidance, security guidance, and supply-chain guidance
- Community health files, issue templates, review policy, and reusable workflow policy for organization repositories

Specification work is focused on interoperability. Where possible, Agent Volumes should build on existing standards and
widely used conventions, including package URLs, SemVer, SPDX, OpenAPI, JSON Schema, and related supply-chain security
practices.

## 3. Out of Scope

The organization does not currently define or operate:

- A hosted bibliotheca, registry, marketplace, or moderation program
- Registry pricing, ranking, takedown, or content policy for any specific service
- Token issuance, account policy, billing policy, or hosted identity-provider policy
- A universal trust root or mandatory key infrastructure
- A lockfile format or package-manager-local install policy
- Runtime execution semantics for any AI agent runtime
- A commercial certification program, compatibility badge, or trademark compliance program
- Windlass internal roadmap, product commitments, customer commitments, or implementation-specific behavior

Topics outside this scope may still provide useful implementation feedback. They become normative only if accepted
through the governance process and incorporated into the published specification or companion artifacts.

## 4. Governance Authority

The normative authority for Agent Volumes is the published specification and companion artifacts approved through the
Agent Volumes governance process.

The organization operates in public by default. Proposals, pull requests, design discussions, ADRs, and release notes
should be visible in public repositories unless a security issue requires private handling under [SECURITY.md](SECURITY.md).

This charter does not create a legal standards body, foundation membership program, trademark license, certification
authority, or commercial approval process.

## 5. Technical Steering Committee

The Technical Steering Committee (TSC) is the project's specification authority. During the early project phase, it is a
Provisional Technical Steering Committee.

The TSC is responsible for:

- Maintaining the technical scope and roadmap of the Agent Volumes Specification
- Approving normative specification changes
- Ensuring schemas, OpenAPI definitions, conformance fixtures, and prose requirements remain aligned
- Reviewing and accepting ADRs that affect normative behavior or long-term architecture
- Resolving technical disputes that cannot be resolved by consensus
- Appointing or confirming maintainers and editors under [GOVERNANCE.md](GOVERNANCE.md)
- Reviewing this governance model after six months or after the `v0.1.0` milestone, whichever comes first

The TSC should seek diverse participation from independent contributors, runtime implementers, registry operators,
security practitioners, package-management maintainers, and organizations evaluating or implementing the specification.
During the provisional phase, diversity is a goal and best-effort constraint, not a claim that vendor diversity already
exists.

## 6. Relationship to Implementations

Implementations provide feedback, interoperability evidence, and operational experience. They do not define the
standard.

Windlass-maintained implementations, including projects such as `shelf` or Alexandria, may provide implementation
experience and feedback, but they are not the normative authority for the Agent Volumes Specification. The normative
authority remains the published specification and companion artifacts approved through the Agent Volumes governance
process.

Reference implementations, examples, fixtures, and tools should be treated as non-normative unless a specification
section explicitly incorporates their behavior as a normative requirement.

## 7. Conformance Boundary

Agent Volumes may define technical conformance requirements, fixtures, and report formats for offline compatibility
checks.

Agent Volumes conformance fixtures and reports describe offline artifact and vector compatibility only. They do not
constitute product certification, trademark authorization, hosted service approval, commercial registry approval, or a
live interoperability guarantee.

No official certification program, compatibility badge, trademark compliance badge, or certification mark is currently
defined. Any future program of that kind requires a separate public proposal, governance review, and policy document.

## 8. Intellectual Property and Licensing

Specification documents, documentation, schemas, OpenAPI definitions, conformance fixtures, and code are released under
the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) unless a repository states a different license.

All contributions require a Developer Certificate of Origin (DCO) sign-off. The DCO certifies that the contributor has
the right to submit the contribution under the project's license. It does not transfer copyright, and contributors retain
ownership of their contributions.

This project does not currently require a separate contributor license agreement or formal standards participation
agreement. If the project later needs a different patent or standards-mode process, that change requires public review
and approval under the amendment process in this charter.

## 9. Security and Responsible Disclosure

Security issues must follow [SECURITY.md](SECURITY.md). Public issues and pull requests are appropriate for
non-sensitive security policy questions, hardening guidance, and supply-chain process improvements. Vulnerabilities,
proof-of-concept exploits, secrets, unreleased advisory details, or embargoed findings must use the private reporting
path described in the security policy.

Security-sensitive specification changes may be discussed privately until disclosure is safe, but the final normative
change should be recorded publicly once the risk is resolved.

## 10. Amendments

Charter amendments require:

1. A public proposal in `agent-volumes/.github` while governance documents are maintained here
2. A review period of at least 14 calendar days
3. TSC approval by two-thirds of voting TSC members, with quorum as defined in [GOVERNANCE.md](GOVERNANCE.md)
4. A recorded decision in the issue, pull request, ADR, or release note associated with the amendment

Editorial corrections that do not change governance meaning may be approved through the routine maintainer process.

## 11. Review Cadence

The TSC must review this charter and [GOVERNANCE.md](GOVERNANCE.md) after six months or after the `v0.1.0` milestone,
whichever comes first.

That review should consider whether the project needs:

- A non-provisional TSC selection or election process
- Working Groups or editor teams
- A dedicated `agent-volumes/governance` or `agent-volumes/community` repository
- Trademark, logo, certification, or badge policy
- External foundation hosting or a separate legal structure
- A more explicit standards participation or patent policy

## License

By contributing to this project, you agree that your contributions will be licensed under the
[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
