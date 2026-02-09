# Triage Report: Provenance Directories

**Worker:** triage-provenance-dirs
**Target:** `_provenance-gap-analysis/` + `_provenance-deep-dive/` + `_remediation/`
**Files:** 36
**Size:** ~1.3MB
**Date:** 2026-02-09

## Summary

Three directories containing working artifacts from the Provenance Chain Remediation phase (18-agent team, 5 waves). Gap analysis produced the remediation plan; deep-dive contained the analysis; remediation executed the fixes. All work has been completed and verified. The handoff document (`PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md`) captures the outcomes. None of these files are referenced by rendered HTML/TSX content. Internal cross-references exist between these directories (self-referential).

---

## _provenance-gap-analysis/ (15 files, ~724KB)

| File | Size | TR-01 | TR-02 | TR-03 | TR-04 | Decision | Justification |
|------|------|-------|-------|-------|-------|----------|---------------|
| 01-dd-vs-od-comparison.md | ~48KB | NO | YES | NO | MEANINGFUL | ARCHIVE | DD vs OD structural comparison — unique analysis |
| 02-inline-identity-audit.md | ~45KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Identity audit of inline threading headers |
| 03-pipeline-infrastructure-map.md | ~50KB | NO | YES | YES | MEANINGFUL | ARCHIVE | Infrastructure map — useful orientation for future agents |
| 04-ad-readiness-assessment.md | ~42KB | NO | YES | YES | MEANINGFUL | ARCHIVE | AD readiness — relevant for next phase |
| 05-traversal-chain-tests.md | ~48KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Chain traversal test results |
| 06-root-cause-analysis.md | ~52KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Root cause analysis of provenance gaps |
| 07-perfect-state-gap-audit.md | ~55KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Perfect state vs actual gap analysis |
| 10-dark-matter-census.md | ~48KB | NO | YES | YES | MEANINGFUL | ARCHIVE | Census of undocumented connections |
| 11-od-quality-assessment.md | ~45KB | NO | YES | NO | MEANINGFUL | ARCHIVE | OD quality assessment |
| 12-prior-stage-chain-audit.md | ~50KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Prior stage chain audit |
| 13-target-topology.md | ~48KB | NO | YES | YES | MEANINGFUL | ARCHIVE | Target topology for remediation |
| 14-triage-protocol.md | ~42KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Triage protocol for gaps |
| 15-phase-architecture.md | ~45KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Phase architecture design |
| 16-agent-team-topology.md | ~48KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Agent team topology design |
| 17-verification-framework.md | ~42KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Verification framework |

---

## _provenance-deep-dive/ (10 files, ~340KB)

| File | Size | TR-01 | TR-02 | TR-03 | TR-04 | Decision | Justification |
|------|------|-------|-------|-------|-------|----------|---------------|
| 01-core-gaps.md | ~35KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Core gap identification |
| 02-evidence-chain.md | ~32KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Evidence chain analysis |
| 03-architecture.md | ~38KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Architecture analysis |
| 04-context-and-chain.md | ~30KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Context and chain analysis |
| 05-synthesis-reflection.md | ~28KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Synthesis reflection |
| CLAUDE-PLAN-FOR-REVISION.md | ~40KB | NO | NO | NO | STALE | ARCHIVE | Plan for revision — completed phase |
| CONSOLIDATED-REVISIONS.md | ~45KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Consolidated revision proposals |
| revisions-architecture.md | ~30KB | NO | NO | NO | STALE | ARCHIVE | Architecture revisions — applied |
| revisions-diagnostic.md | ~28KB | NO | NO | NO | STALE | ARCHIVE | Diagnostic revisions — applied |
| revisions-foundation.md | ~25KB | NO | NO | NO | STALE | ARCHIVE | Foundation revisions — applied |

---

## _remediation/ (11 files, ~224KB)

| File | Size | TR-01 | TR-02 | TR-03 | TR-04 | Decision | Justification |
|------|------|-------|-------|-------|-------|----------|---------------|
| REMEDIATION-STATE.md | ~8KB | NO | NO | NO | STALE | DELETE | Phase tracking — completed and superseded by handoff |
| doc-audit-chain-state.md | ~18KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Chain state audit results |
| doc-audit-claude-md.md | ~22KB | NO | YES | NO | MEANINGFUL | ARCHIVE | CLAUDE.md audit results |
| doc-audit-readme.md | ~15KB | NO | YES | NO | MEANINGFUL | ARCHIVE | README audit results |
| extract-audit-data.md | ~20KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Extracted audit data |
| finding-registry.md | ~25KB | NO | YES | YES | MEANINGFUL | ARCHIVE | Finding registry — unique OD-F/EXT finding data |
| reference-graph.md | ~22KB | NO | YES | YES | MEANINGFUL | ARCHIVE | Reference graph — inbound/outbound linkage data |
| traversal-baseline.md | ~18KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Traversal baseline measurements |
| verification-results-a.md | ~20KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Verification results batch A |
| verification-results-b.md | ~18KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Verification results batch B |
| verification-results-c.md | ~20KB | NO | YES | NO | MEANINGFUL | ARCHIVE | Verification results batch C |

## Decision Summary (All 3 Directories)

| Decision | Count |
|----------|-------|
| KEEP | 0 |
| ARCHIVE | 35 |
| DELETE | 1 |

**Rationale:** All three directories are working artifacts from a completed phase (Provenance Chain Remediation). Outcomes are captured in `PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md`. The gap analysis files contain unique structural analyses that have historical value. The remediation directory's finding-registry.md and reference-graph.md contain unique data that could be useful for future provenance work. REMEDIATION-STATE.md is the only true stale tracking file (superseded by handoff).
