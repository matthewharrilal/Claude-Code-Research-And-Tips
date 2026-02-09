# Captain-Triage Mission Brief

**Captain:** Captain-Triage
**Phase:** Comprehensive Audit Phase 1 — Triage
**Created:** 2026-02-09

## Objective

Assess every working artifact directory under `knowledge-architecture/` for usefulness. Produce KEEP/ARCHIVE/DELETE decision for every file.

## Scope

7 underscore directories + top-level .md files:

| Directory | Files | Worker |
|-----------|-------|--------|
| `_od-audit-scratchpad/` | 29 | triage-od-scratchpad |
| `_workflow-metacognition/` | 10 | triage-metacognition |
| `_provenance-gap-analysis/` | 15 | triage-provenance-dirs |
| `_provenance-deep-dive/` | 10 | triage-provenance-dirs |
| `_remediation/` | 11 | triage-provenance-dirs |
| `_od-reenrichment/` | 34 + 6 research + 2 screenshots | triage-reenrichment |
| `_execution-journal/` | 5 | triage-journal-toplevel |
| Top-level .md files | 28 | triage-journal-toplevel |

**Total:** ~150 files across 5 workers

## Decision Framework

Per file, 4 binary questions:
- **TR-01:** Referenced by rendered content? (inbound from .html/.tsx/.md)
- **TR-02:** Unique information not duplicated elsewhere?
- **TR-03:** Fresh agent needs this for J-03 orientation?
- **TR-04:** Meaningful record vs stale scratchpad?

Decision logic:
- **KEEP** if TR-01=YES OR (TR-02=YES AND TR-03=NEEDED AND TR-04=MEANINGFUL)
- **ARCHIVE** if not referenced but historical value
- **DELETE** if duplicate + stale + no inbound references
- **WHEN IN DOUBT: ARCHIVE over DELETE**

## Internal Gates

- CT-01: All 5 worker reports exist
- CT-02: All 7 underscore directories covered
- CT-03: Per-file decisions documented

## Workers

5 parallel workers spawned, output to `_comprehensive-audit/triage/triage-{area}.md`

## Compilation

Final: `CAPTAIN-TRIAGE-REPORT.md` with KEEP/ARCHIVE/DELETE counts, archive manifest, deletion manifest.
