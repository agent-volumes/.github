# Label Taxonomy

This document defines the canonical label taxonomy for the Agent Volumes Organization. Labels help maintainers classify work, route issues to the right repository, and track issue lifecycle state consistently.

> [!NOTE]
> This document defines the taxonomy. Labels still need to be created in each repository before issue forms can apply them automatically.

## Type Labels

Type labels define the nature of an issue or pull request. Each item should have exactly one `type:` label.

| Label             | Description                                                                          |
| :---------------- | :----------------------------------------------------------------------------------- |
| `type:bug`        | Something is broken or doesn't follow the specification                              |
| `type:proposal`   | New feature, section, or significant behavioral change                               |
| `type:question`   | Requests for clarification or help with routing                                      |
| `type:editorial`  | Non-normative changes: typos, grammar, formatting, or broken links                   |
| `type:security`   | Security-related policy questions or hardening; not for public vulnerability reports |
| `type:governance` | Changes to organization policy, TSC membership, or decision-making processes         |
| `type:docs`       | Improvements to documentation, guides, or examples                                   |

## Status Labels

Status labels track the progress of an item through its lifecycle.

| Label                 | Description                                                           |
| :-------------------- | :-------------------------------------------------------------------- |
| `status:needs-triage` | New item that has not yet been reviewed by maintainers                |
| `status:accepted`     | Problem or proposal is valid and ready for implementation             |
| `status:deferred`     | Item is valid but not currently a priority; may be revisited later    |
| `status:blocked`      | Progress is stalled pending an external dependency or decision        |
| `status:needs-tsc`    | Requires discussion or decision from the Technical Steering Committee |

## Impact Labels

Impact labels indicate whether a change affects normative requirements in the specification.

| Label                  | Description                                                              |
| :--------------------- | :----------------------------------------------------------------------- |
| `impact:normative`     | Changes that affect MUST/SHOULD/MAY requirements or behavioral protocols |
| `impact:non-normative` | Informational or editorial changes that do not affect implementation     |

## Area Labels

Area labels identify the affected part of a repository. Repositories should create only the area labels that match their scope.

### Common Area Labels

| Label             | Description                                     |
| :---------------- | :---------------------------------------------- |
| `area:templates`  | Issue templates, issue forms, or PR templates   |
| `area:workflows`  | GitHub Actions workflows and reusable CI policy |
| `area:policy`     | Organization policy and community health files  |
| `area:governance` | Charter, governance, TSC process, and elections |

### Specification Repository Area Labels

The `agent-volumes/agent-volumes-spec` repository should additionally use these labels for specification-specific routing.

| Label                 | Description                                         |
| :-------------------- | :-------------------------------------------------- |
| `area:spec`           | Core specification text and requirements            |
| `area:schema`         | JSON Schema definitions and validation rules        |
| `area:openapi`        | API definitions and documentation standards         |
| `area:conformance`    | Conformance testing and validation suites           |
| `area:adrs`           | Architectural Decision Records                      |
| `area:implementers`   | Guidance and requirements for volume implementation |
| `area:security-model` | Threat modeling and security requirements           |
| `area:registry-api`   | Volume registry and discovery protocols             |
| `area:compatibility`  | Versioning and backward compatibility               |
| `area:trust`          | Verification, signatures, and trust anchors         |
| `area:adopters`       | Onboarding and ecosystem integration                |

## Automated and Dependency Labels

These labels are applied by automation or dependency-management workflows. They may not follow the `prefix:value` pattern because upstream tools often expect simpler labels.

| Label            | Description                                         |
| :--------------- | :-------------------------------------------------- |
| `dependencies`   | Dependency update opened or managed by Dependabot   |
| `javascript`     | JavaScript, Bun, or npm ecosystem dependency update |
| `github-actions` | GitHub Actions dependency update                    |
| `security`       | Security-related automated dependency update        |

## Label Selection Guidelines

- Start every new issue with `status:needs-triage`.
- Apply exactly one `type:` label after triage.
- Apply `impact:normative` only when a change affects requirements or implementer behavior.
- Apply `status:needs-tsc` when a proposal requires TSC discussion or decision.
- Keep vulnerability reports out of public issue labels; route them through [`SECURITY.md`](../SECURITY.md).
