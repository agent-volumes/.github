# docs KNOWLEDGE BASE

**Generated:** 12026-05-04

## OVERVIEW

Translated community health files and security policy documentation.

## WHERE TO LOOK

| Task                          | Location                                        |
| ----------------------------- | ----------------------------------------------- |
| Code of Conduct translations  | `CODE_OF_CONDUCT.<lang>.md` — ko, zh-cn, de, fr |
| Issue routing reference       | `issue-routing.md`                              |
| Label taxonomy                | `labels.md`                                     |
| Dependency security guidance  | `security/dependency-security.md`               |
| SLSA compliance framework     | `security/slsa-compliance-framework.md`         |
| Workflow hardening guidelines | `security/workflow-hardening.md`                |

## CONVENTIONS

- **Translation naming:** `CODE_OF_CONDUCT.<lang>.md` where `<lang>` is ISO 639-1 or BCP 47 code
- **Security docs:** Placed under `security/` subdirectory; cross-referenced by `SECURITY.md` at root
- **Markdown:** All docs follow root-level `.markdownlint-cli2.jsonc` and `.prettierrc` rules

## ANTI-PATTERNS

- Do not add non-documentation files here — this directory is for human-readable policy text only
- Keep translations in sync with root `CODE_OF_CONDUCT.md` — English is the canonical version
