# Security Policy

Thank you for helping keep the Agent Volumes project and its community safe. As an independent non-profit organization focused on open specifications and documentation, we take security seriously and follow a coordinated disclosure process.

## Scope

This policy applies to all public repositories under the Agent Volumes organization, including:

- Specification documents
- Documentation assets
- Conformance and validation assets

We do not maintain private repositories, backend code, or internal infrastructure.

## Out of Scope

The following are out of scope for this policy:

- Cosmetic or content issues without security impact
- Vulnerabilities in upstream projects or tools that we use but do not maintain
- Denial of Service (DoS) testing against organization assets
- Reports based only on missing best-practice headers without a demonstrable exploit

## Reporting a Vulnerability

Please report vulnerabilities privately:

- **Preferred:** GitHub Security Advisories — Use the `Security > Advisories` tab in the relevant repository to submit a private report.
- **Alternate:** Send a report to [security@agentvolumes.org](mailto:security@agentvolumes.org).

### What to Include

1. The affected repository and specific version or commit
2. A description of the vulnerability and its potential impact
3. Detailed reproduction steps or a proof of concept
4. Suggested mitigation or fix (if available)

### Response Timeline

| Step                              | Timeline                                      |
| --------------------------------- | --------------------------------------------- |
| Acknowledgment of report          | 3 business days                               |
| Triage and severity assessment    | 7 business days                               |
| Fix for critical or high severity | 14 days                                       |
| Fix for medium or low severity    | 30 days                                       |
| Public disclosure                 | After fix is released, or 90 days from report |

These timelines are best-effort commitments. We will keep you informed of progress at least every 7 business days until the issue is closed.

## Disclosure Policy

We follow coordinated disclosure:

1. The reporter submits a private vulnerability report.
2. We acknowledge, triage, and work on a fix privately.
3. Once a fix is applied, we publish a GitHub Security Advisory with full details.
4. The reporter is credited in the advisory unless they request anonymity.
5. If no fix is released within 90 days, the reporter may disclose publicly.

We will not take legal action against researchers who report vulnerabilities in good faith and follow this policy.

## Safe Harbor

We support good-faith security research. We ask that you:

- Access data only to the extent required to prove impact
- Avoid degrading service availability for others
- Refrain from social engineering or destructive testing

## Supply Chain Integrity

Agent Volumes follows the [SLSA (Supply-chain Levels for Software Artifacts)](https://slsa.dev/) framework as aspirational guidance to ensure the integrity of our specifications and documentation.

### At a Glance

- Build L1/L2 required; Build L3 target
- Source L1/L2 required; Source L3 target
- Source L4 not achievable in a 1-person organization
- SHA-pinned workflows, hardened runners, least-privilege permissions
- Lockfiles committed, dependency review, OSV scanning
- Signed commits & protected branches required

### Detailed Requirements

| Topic                     | Companion document                                                                         |
| :------------------------ | :----------------------------------------------------------------------------------------- |
| SLSA compliance framework | [docs/security/slsa-compliance-framework.md](./docs/security/slsa-compliance-framework.md) |
| Workflow hardening        | [docs/security/workflow-hardening.md](./docs/security/workflow-hardening.md)               |
| Dependency security       | [docs/security/dependency-security.md](./docs/security/dependency-security.md)             |

### Source Integrity

#### Commit Signing

All commits to protected branches must be cryptographically signed. We support:

- **GPG signing**
- **SSH signing**
- **Sigstore gitsign**

#### Branch Protection

All repositories must enforce:

- Require signed commits
- Require pull request reviews (minimum 1 reviewer)
- Require status checks to pass before merging
- Require linear history (no merge commits)
- Restrict force pushes

### Aspiration: Release Integrity

While we currently focus on documentation and specifications, we aim to provide signed attestations and SLSA provenance for any future software artifacts or conformance tools released by the organization.

## Security Monitoring

### Audit Logging

- All workflow runs are logged via GitHub's audit log
- Access to secrets is logged
- Deployment activity is tracked

### Vulnerability Scanning

- Dependabot alerts are enabled on all repositories
- Code scanning with CodeQL and/or Semgrep runs on all PRs
- OSV Scanner runs on PRs and scheduled full scans
- Secret scanning prevents credential leakage

### Security Scorecard

This organization uses [OpenSSF Scorecard](https://securityscorecards.dev/) to continuously monitor security posture:

- Binary artifacts
- Branch protection
- Code review
- Dependency update tool
- Fuzzing
- License
- Maintained
- Pinned dependencies
- SAST
- Security policy
- Signed releases
- Token permissions
- Vulnerabilities

## References

Detailed reference lists for each topic are available in the companion documents:

- [SLSA Framework references](./docs/security/slsa-compliance-framework.md#references)
- [GitHub Security and Step Security references](./docs/security/workflow-hardening.md#references)
- [OSV Scanner and Additional Resources](./docs/security/dependency-security.md#references)
