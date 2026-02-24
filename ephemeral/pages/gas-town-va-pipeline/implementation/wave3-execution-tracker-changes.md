# Wave 3 — Execution Tracker Changes

**Date:** 2026-02-24
**Author:** execution-tracker-creator agent
**File:** `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md`
**Lines:** ~210

---

## What Was Created

New file: `EXECUTION-TRACKER-TEMPLATE.md` — a copy-paste-ready execution tracker that the orchestrator fills in during each pipeline run.

## FIX Coverage

### FIX-087: Execution Tracker Template
- Build metadata header: BUILD_DATE, CONTENT_PATH, SLUG, MODE, BUILDER_MODEL, START_TIME, END_TIME, TOTAL_DURATION
- Pre-flight checklist: 15 items covering content, all 10 artifacts, 3 design system files, council-verdict.md, output directory
- Per-phase sections (Phase 0 through 3C) with routing verification checkboxes
- Execution summary table with aggregate metrics
- Structure derived from MANIFEST routing tables (Section 2 Agent Roster, Section 3 Artifact-to-Agent Routing, Section 4 Phase-by-Phase Execution)

### FIX-111: Post-Run Verification
- Completeness check: all checkboxes marked, total count, unmarked list
- Consistency check: cross-field validation (mode, model, BV results, PA-05, verdict), anomaly keyword scan
- Output correspondence: every manifest file exists, non-empty checks for all outputs, valid JSON for gate results
- Automation hints: parseable patterns for `[x]` counting, keyword search, file existence, field comparison

### FIX-128: Per-Agent Output Path Fields
- Phase 0: Content Map output path field
- Phase 1: Execution Brief output path field
- Phase 2: HTML artifact output path field
- Phase 3A: Gate results JSON path, screenshot directory path
- Phase 3B: Individual path fields for all 9 PA auditors (A-I), integrative auditor output path
- Phase 3C: Weaver diagnostic path, weaver artistic impression path
- Output Files Manifest table with existence checkboxes for all 17 output files

## Design Decisions

1. **Template is MANIFEST-faithful.** All agent names, model recommendations, question assignments, and gate groupings match MANIFEST Section 2 (Agent Roster) exactly.
2. **BV gates included in Phase 1.** The 4 Brief Verification gates (BV-01 through BV-04) are tracked with individual PASS/FAIL fields and revision cycle count.
3. **Gate runner categories match MANIFEST Section 3.** Identity (GR-01-10), Perception (GR-11-15 + GR-44), Anti-Pattern (GR-17-22), Precondition (GR-23-28), Output (GR-43) = 29 gates total.
4. **PA auditor table includes question assignments.** Pulled from MANIFEST Section 2 Phase 3B roster, with exact PA-XX IDs and question counts per auditor.
5. **Fresh-eyes verification is explicit.** Separate routing checkboxes confirm no auditor received brief, content map, build intent, or other auditor reports.
6. **Automation-friendly.** All checkboxes use standard `[ ]` / `[x]` markdown. Field placeholders use `___`. Automation hints section provides grep-ready patterns.
