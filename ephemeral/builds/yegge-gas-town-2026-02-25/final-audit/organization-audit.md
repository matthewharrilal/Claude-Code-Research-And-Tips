# Pipeline Organization Audit

**Date:** 2026-02-25
**Auditor:** organization-auditor (Opus)
**Scope:** `ephemeral/va-extraction/` — all files in Pipeline v3 extraction directory
**Method:** File inventory, cross-reference analysis, duplication scan, navigation assessment

---

## File Inventory

### Operational Files (Referenced in MANIFEST.md — Required for Pipeline Execution)

| File | Lines | Purpose | Status |
|------|-------|---------|--------|
| MANIFEST.md | 1,300 | Routing authority + execution map + agent roster + prompt templates | ACTIVE |
| artifact-orchestrator.md | 1,193 | Execution authority — step-by-step protocol for all phases | ACTIVE |
| artifact-builder-recipe.md | 833 | Builder recipe (Phases 1-6), disposition D-01-D-09 | ACTIVE |
| artifact-identity-perception.md | 556 | Soul constraints + perception thresholds (L1+L2) | ACTIVE |
| artifact-routing.md | 1,056 | Content analysis protocol + routing rules (L8) | ACTIVE |
| artifact-tc-brief-template.md | 235 | TC Brief template for Brief Assembler | ACTIVE |
| artifact-value-tables.md | 262 | Value tables for Builder reference | ACTIVE |
| artifact-worked-examples.md | 182 | Worked examples from prior builds | ACTIVE |
| council-verdict.md | 575 | Override authority (optional — artifacts are self-sufficient) | ACTIVE |
| gate-runner-core.js | 2,273 | Executable Playwright JavaScript (all gates) | ACTIVE |
| gate-runner-spec.md | 265 | Human-readable gate specifications | ACTIVE |
| gate-runner-preconditions.md | 83 | Text-based pre-build checks | ACTIVE |
| gate-runner-provenance.md | 151 | Gate history and traceability | ACTIVE |
| gate-manifest.json | 326 | Canonical gate registry (JSON TOC) | ACTIVE |
| EXECUTION-TRACKER-TEMPLATE.md | 162 | Per-build tracking template | ACTIVE |
| experiment-protocol.md | 51 | Experiment stages GR-36-GR-39 | ACTIVE |
| pa-questions.md | 431 | 69 PA question definitions (PA-01-PA-77) | ACTIVE |
| pa-deployment.md | 376 | 9-auditor assignments + screenshot protocol | ACTIVE |
| pa-weaver.md | 466 | Weaver protocol + verdicts + calibration (ISOLATED) | ACTIVE |
| pa-guardrails.md | 113 | PA auditor constraints + scoring anchors | ACTIVE |
| pa-guardrails-weaver.md | 59 | Weaver-only guardrails (anti-patterns, S-09) | ACTIVE |
| pa-manifest.md | 89 | Per-run PA tracking template | ACTIVE |
| artifact-gate-runner.md | 22 | Redirect stub -> split files | ACTIVE (stub) |
| artifact-pa-protocol.md | 22 | Redirect stub -> split files | ACTIVE (stub) |
| **SUBTOTAL** | **11,081** | **24 operational files** | |

### Monolithic Backups (Preserved Originals)

| File | Lines | Purpose | Status |
|------|-------|---------|--------|
| artifact-gate-runner-MONOLITHIC.md | 2,410 | Pre-split gate runner (full document) | ARCHIVE |
| artifact-pa-protocol-MONOLITHIC.md | 1,141 | Pre-split PA protocol (full document) | ARCHIVE |
| **SUBTOTAL** | **3,551** | **2 archive files** | |

### Historical/Research Files (NOT Referenced in MANIFEST)

| File | Lines | Purpose | Status |
|------|-------|---------|--------|
| extract-d01-d03.md | 1,094 | Raw extraction from diagrams 1-3 | HISTORICAL |
| extract-d04-d05.md | 373 | Raw extraction from diagrams 4-5 | HISTORICAL |
| extract-d06-d08.md | 763 | Raw extraction from diagrams 6-8 | HISTORICAL |
| extract-d09-d11.md | 907 | Raw extraction from diagrams 9-11 | HISTORICAL |
| extract-d12-d14.md | 762 | Raw extraction from diagrams 12-14 | HISTORICAL |
| extract-d15-d17.md | 699 | Raw extraction from diagrams 15-17 | HISTORICAL |
| extract-d18-d20.md | 663 | Raw extraction from diagrams 18-20 | HISTORICAL |
| extract-d21-d25.md | 1,347 | Raw extraction from diagrams 21-25 | HISTORICAL |
| buddy-d01-d03.md | 83 | Buddy review of extraction d01-d03 | HISTORICAL |
| buddy-d04-d05.md | 137 | Buddy review of extraction d04-d05 | HISTORICAL |
| buddy-d06-d08.md | 117 | Buddy review of extraction d06-d08 | HISTORICAL |
| buddy-d09-d11.md | 58 | Buddy review of extraction d09-d11 | HISTORICAL |
| buddy-d12-d14.md | 108 | Buddy review of extraction d12-d14 | HISTORICAL |
| buddy-d15-d17.md | 98 | Buddy review of extraction d15-d17 | HISTORICAL |
| buddy-d18-d20.md | 94 | Buddy review of extraction d18-d20 | HISTORICAL |
| buddy-d21-d25.md | 240 | Buddy review of extraction d21-d25 | HISTORICAL |
| buddy-review-d06-d08.md | 180 | Second buddy review of d06-d08 | HISTORICAL |
| buddy-review-d12-d14.md | 251 | Second buddy review of d12-d14 | HISTORICAL |
| buddy-review-actionability.md | 97 | Buddy review: actionability | HISTORICAL |
| buddy-artifact-recipe.md | 347 | Buddy review of recipe artifact | HISTORICAL |
| buddy-artifact-orchestrator.md | 307 | Buddy review of orchestrator artifact | HISTORICAL |
| buddy-artifact-gates.md | 281 | Buddy review of gate runner artifact | HISTORICAL |
| buddy-artifact-pa.md | 267 | Buddy review of PA protocol artifact | HISTORICAL |
| buddy-artifact-identity.md | 162 | Buddy review of identity artifact | HISTORICAL |
| buddy-artifact-routing.md | 185 | Buddy review of routing artifact | HISTORICAL |
| meta-buddy-orchestrator.md | 215 | Meta-review of orchestrator buddy | HISTORICAL |
| meta-buddy-recipe.md | 180 | Meta-review of recipe buddy | HISTORICAL |
| meta-buddy-identity.md | 160 | Meta-review of identity buddy | HISTORICAL |
| meta-buddy-gates.md | 139 | Meta-review of gate runner buddy | HISTORICAL |
| classify-by-layer.md | 999 | Layer classification of 885 items | REFERENCE |
| classify-by-agent.md | 889 | Agent classification of 885 items | REFERENCE |
| unified-registry.md | 995 | Item-by-item tracking of 885 items | REFERENCE |
| contradiction-candidates.md | 146 | Contradiction candidates for council | HISTORICAL |
| council-actionability.md | 213 | Council actionability analysis | HISTORICAL |
| council-adversarial.md | 162 | Council adversarial analysis | HISTORICAL |
| phase7-flow-simulation.md | 485 | Phase 7 flow simulation | HISTORICAL |
| phase7-adversarial.md | 395 | Phase 7 adversarial review | HISTORICAL |
| phase7-fresh-eyes.md | 309 | Phase 7 fresh-eyes review | HISTORICAL |
| phase7-gap-analysis.md | 302 | Phase 7 gap analysis | HISTORICAL |
| phase7-final-verification.md | 262 | Phase 7 final verification | HISTORICAL |
| phase7-fix-changelog.md | 260 | Phase 7 fix changelog | HISTORICAL |
| phase7-coverage-audit.md | 220 | Phase 7 coverage audit | HISTORICAL |
| pipeline-structural-manifest.md | 675 | Structural integrity checklist (STALE) | STALE |
| verify-fix-identity.md | 39 | Verification of identity fixes | HISTORICAL |
| verify-fix-orchestrator.md | 97 | Verification of orchestrator fixes | HISTORICAL |
| verify-fix-recipe.md | 124 | Verification of recipe fixes | HISTORICAL |
| wave0-completion-report.md | 109 | Wave 0 implementation report | HISTORICAL |
| wave3-cleanup-report.md | 109 | Wave 3 cleanup report | HISTORICAL |
| gate-naming-map.md | 118 | GR-XX to SC-XX naming map | UTILITY |
| verify-pipeline-structure.js | 600 | Programmatic structural verifier (STALE) | STALE |
| _merge-script.py | 484 | Python merge script (one-time tooling) | UTILITY |
| **SUBTOTAL** | **18,306** | **50 files** | |

### Backup Directory

| Directory | Contents | Status |
|-----------|----------|--------|
| _backup-pre-implementation/ | 10 files (pre-Wave 0-4 snapshots) | ARCHIVE |

### Summary

| Category | Files | Lines | % of Total |
|----------|-------|-------|------------|
| Operational | 24 | 11,081 | 33.6% |
| Monolithic backups | 2 | 3,551 | 10.8% |
| Historical/Research | 50 | 18,306 | 55.6% |
| **Total** | **76** | **32,938** | **100%** |

**55.6% of the directory is historical content not required for pipeline execution.** The directory functions as both a working pipeline AND a research archive.

---

## Naming Issues

### Consistent Patterns (GOOD)
- `artifact-*` prefix: 9 files (all operational artifacts). Clear and correct.
- `gate-runner-*` prefix: 5 files (split architecture). Clear and correct.
- `pa-*` prefix: 6 files (PA protocol split). Clear and correct.
- `extract-d*` prefix: 8 files (raw extractions). Consistent.
- `buddy-*` prefix: 16 files (reviews). Consistent.
- `phase7-*` prefix: 7 files (phase 7 audits). Consistent.

### Naming Issues Found

1. **`pa-guardrails-weaver.md` breaks the `pa-guardrails*` pattern.** It is semantically distinct from `pa-guardrails.md` (different audience: Weaver vs Auditors), but the name suggests it's a variant, not a separate file. Consider: `pa-weaver-guardrails.md` to group with weaver files.
   - Severity: LOW (documented clearly in MANIFEST)

2. **Two competing council files with similar names.** `council-actionability.md` and `council-adversarial.md` are both historical, but `council-verdict.md` is operational. Only the verdict file is clearly distinguished by name.
   - Severity: LOW (only council-verdict.md is operational)

3. **`_merge-script.py` uses underscore prefix convention inconsistently.** Only `_backup-pre-implementation/` and `_merge-script.py` use the `_` prefix. No clear convention established.
   - Severity: LOW

4. **`verify-pipeline-structure.js` naming ambiguity.** Could be confused with the gate runner (`gate-runner-core.js`). Both are JavaScript, but one is meta-tooling and the other is operational.
   - Severity: LOW

---

## Duplication Found

### CRITICAL: Verbatim Duplication Between artifact-routing.md and artifact-worked-examples.md

**Location:** `artifact-routing.md:993-1036` and `artifact-worked-examples.md:116-163`

Both files contain the IDENTICAL 48-line block:
- Soul Constraints table (SC-01 through SC-10)
- Perception Thresholds table (PT-01 through PT-05)
- Background Colors by Zone table
- "What this shows" analysis (4 bullet points)

This is a **drift risk**: if one file is updated, the other will become inconsistent. Both are operational files given to different agents (routing goes to Content Analyst/Brief Assembler; worked-examples goes to all agents).

**Recommendation:** Keep the worked example in artifact-worked-examples.md (that is its home). In artifact-routing.md, replace the block with a cross-reference: "See artifact-worked-examples.md for prior run gate results."

### MODERATE: Soul Constraints Summary Appears in 3 Places

- MANIFEST.md lines 74-85 (summary table, 10 rows)
- artifact-identity-perception.md Section 1.2 (authoritative definitions, 10 constraints)
- artifact-builder-recipe.md (inline references)

MANIFEST.md correctly labels its table as a "Summary" and points to artifact-identity-perception.md for "full definitions." This is acceptable routing, not true duplication. However, threshold values (e.g., 940-960px) appear in 8+ operational files. Any threshold change requires updating many files.

### MODERATE: Gate Count References Are Scattered

The canonical count (54 gates) is defined in gate-manifest.json but restated in:
- MANIFEST.md (8 mentions)
- gate-runner-spec.md (2 mentions)
- gate-runner-core.js (1 mention)
- artifact-orchestrator.md (via orchestrator decision rules)

If the count changes, 4+ files need manual updates.

---

## Dead Content

### STALE FILES (contain factually incorrect content)

1. **pipeline-structural-manifest.md (675 lines)** — Contains hardcoded expectations for "42 gates" throughout (11 check items). Actual gate count is now 54. Also expects "20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY" which does not match current "21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY." **This file will produce false failures if run against current pipeline.**

2. **verify-pipeline-structure.js (600 lines)** — Expects "47 gates" in multiple checks (GC-02, GC-05, GC-07, GC-19) and "20 REQUIRED" in others (GC-03, GC-14, GC-21). The "47" number does not appear anywhere in current MANIFEST.md (which uses "54"). **This script will fail if executed.**

3. **wave0-completion-report.md** — References "1,436 (before) -> 1,405 (after)" line count for gate-runner-core.js. Actual current count is 2,273 lines. Historical record only.

### STALE CONTENT WITHIN OPERATIONAL FILES

4. **gate-runner-spec.md INTERNAL CONTRADICTION:**
   - Line 23: "Total executable gates: 54 (21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BRIEF + 1 utility)"
   - Line 257: "Tier totals (gate-runner scope): 20 REQUIRED, 10 RECOMMENDED, 9 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 5 BRIEF, 1 UTILITY = 47 executable gates"
   - These are **two different counts within the same file.** The gate categorization table at the top (lines 16-21) matches the "54" count. The execution order table at the bottom (line 257) uses the stale "47" count.
   - **BLOCKING SEVERITY** — agents reading different parts of this file get different gate counts.

5. **MANIFEST.md line 468 INTERNAL CONTRADICTION:**
   - Line 468: "47-gate inventory: 21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY"
   - Lines 142, 247, 248, 501, 787, 824, 858: all say "54 gates"
   - The breakdown (21+13+10+2+7+1) adds up to 54, but the "47-gate" prefix is stale.

6. **artifact-gate-runner-MONOLITHIC.md line 33:** States "Total: 43 gates" — this was the count BEFORE the final wave of additions. The canonical count is now 54.

7. **Historical files reference "42 gates"**: phase7-adversarial.md (line 268), phase7-fresh-eyes.md (line 231), meta-buddy-gates.md (line 135), artifact-routing.md (line 1033), artifact-worked-examples.md (line 159). These are historical/reference contexts so they are not operationally harmful, but the worked-examples file IS operational.

### MANIFEST.md LINE COUNT DRIFT

| File | MANIFEST Claims | Actual | Delta |
|------|----------------|--------|-------|
| artifact-orchestrator.md | ~1,100 | 1,193 | +93 |
| artifact-builder-recipe.md | ~828 | 833 | +5 |
| artifact-routing.md | ~900 | 1,056 | +156 |
| gate-runner-core.js | ~1,626 | 2,273 | +647 |
| gate-runner-spec.md | ~223 | 265 | +42 |
| gate-manifest.json | ~200 | 326 | +126 |
| pa-deployment.md | ~363 | 376 | +13 |
| pa-weaver.md | ~455 | 466 | +11 |
| EXECUTION-TRACKER-TEMPLATE.md | ~595 | 162 | -433 |
| pa-questions.md | ~431 | 431 | 0 |
| pa-guardrails.md | ~113 | 113 | 0 |
| artifact-tc-brief-template.md | ~223 | 235 | +12 |

gate-runner-core.js is the worst offender: MANIFEST says ~1,626 lines, actual is 2,273 (+647, 40% larger). EXECUTION-TRACKER-TEMPLATE claims ~595 lines but is actually 162 (73% smaller — likely a copy-paste from a different file's stats).

---

## Size Balance

### Disproportionately Large Files

| File | Lines | Role | Concern |
|------|-------|------|---------|
| gate-runner-core.js | 2,273 | Executable gates | Largest file. Contains ALL gate code. Justified by being a single executable unit — splitting would complicate orchestrator execution. |
| MANIFEST.md | 1,300 | Routing authority | Dense but organized with clear sections. Appendix D file paths (lines 928-978) and Appendix E prompt templates (lines 987-1300) account for ~370 lines of reference material. |
| artifact-orchestrator.md | 1,193 | Execution protocol | MANIFEST acknowledges density at line 983. Sections 10+ (~470 lines) are historical/theoretical. Could split into execution (Sections 0-9, ~720 lines) and context (Sections 10+, ~470 lines). |
| artifact-routing.md | 1,056 | Content analysis + routing | Contains embedded worked example (lines 993-1036) that duplicates artifact-worked-examples.md. |
| unified-registry.md | 995 | Item tracking | Reference-only, 885 items. Size justified by scope. |
| classify-by-layer.md | 999 | Layer classification | Reference-only. Could be archived. |
| classify-by-agent.md | 889 | Agent classification | Reference-only. Could be archived. |

### Files Too Small to Justify Being Separate

| File | Lines | Role | Assessment |
|------|-------|------|------------|
| artifact-gate-runner.md | 22 | Redirect stub | JUSTIFIED — clear redirect pattern for backward compat |
| artifact-pa-protocol.md | 22 | Redirect stub | JUSTIFIED — same pattern |
| verify-fix-identity.md | 39 | Fix verification | HISTORICAL — could merge into a single verify-fixes.md |
| experiment-protocol.md | 51 | Experiment stages | JUSTIFIED — separate concern, clean scope |
| pa-guardrails-weaver.md | 59 | Weaver guardrails | JUSTIFIED — information isolation requires separation |

---

## Navigation Assessment

**Rating: ADEQUATE (trending CLEAR)**

### Strengths
- MANIFEST.md provides a comprehensive 11-step quickstart procedure (lines 10-43)
- Clear agent roster with I/O specifications (Section 2)
- Appendix D (lines 928-978) lists every operational file with paths and sizes
- Split architecture uses redirect stubs (artifact-gate-runner.md, artifact-pa-protocol.md) to preserve old references
- gate-manifest.json self-declares as canonical with "If counts differ elsewhere, THIS FILE wins"
- MANIFEST.md correctly separates operational files, external dependencies, pipeline integrity files, and tracking files

### Weaknesses
- **No MANIFEST reference for 50 historical files.** An agent exploring the directory finds 76 files but MANIFEST only maps 24. No "Appendix G: Historical Files" or similar exists. An unfamiliar agent might read extract-d01-d03.md (1,094 lines) thinking it's operational.
- **pipeline-structural-manifest.md** appears to be a structural health checker but is stale. An agent could mistakenly run it and get false failures (42 gates vs 54 actual).
- **verify-pipeline-structure.js** same problem — stale verification tool that would produce incorrect results.
- **No upstream authority links in most files.** artifact-identity-perception.md, artifact-builder-recipe.md, etc. do not link back to MANIFEST.md. Each file's provenance must be inferred from MANIFEST.md, not from the files themselves.

---

## Recommendations (Prioritized)

### P0 (BLOCKING — Causes Incorrect Pipeline Behavior)

1. **Fix gate-runner-spec.md internal contradiction.** Line 257 says "47 executable gates" but line 23 says "54." The line 257 tier breakdown ("20 REQUIRED, 10 RECOMMENDED, 9 ADVISORY, 2 DIAGNOSTIC, 5 BRIEF, 1 UTILITY") adds to 47, which is stale. Must align with the line 23 counts (21 REQUIRED, 13 RECOMMENDED, 10 ADVISORY, 2 DIAGNOSTIC, 7 BRIEF, 1 UTILITY = 54).

2. **Fix MANIFEST.md line 468 "47-gate inventory" stale prefix.** Should read "54-gate inventory" to match all other references in the same file.

3. **Fix MANIFEST.md EXECUTION-TRACKER-TEMPLATE.md line count.** Claims ~595 lines, actual is 162. This will cause agents to expect a much larger file than exists.

### P1 (HIGH — Drift Risk or Information Confusion)

4. **Update MANIFEST.md line counts** for gate-runner-core.js (~1,626 -> ~2,273), artifact-routing.md (~900 -> ~1,056), gate-manifest.json (~200 -> ~326), and gate-runner-spec.md (~223 -> ~265). These are >15% drift.

5. **Eliminate verbatim duplication between artifact-routing.md and artifact-worked-examples.md.** Replace the 48-line duplicated block in artifact-routing.md with a cross-reference to artifact-worked-examples.md.

6. **Mark pipeline-structural-manifest.md as STALE** by adding a header warning: "WARNING: This file contains stale gate counts (42, not 54) and stale tier breakdowns. Do NOT use for verification. See gate-manifest.json for canonical counts." Or better: update it to match current counts.

7. **Mark verify-pipeline-structure.js as STALE** with same warning treatment. Its expected counts (47 gates) do not match any current file.

### P2 (MEDIUM — Navigability and Maintenance)

8. **Add "Historical Files" appendix to MANIFEST.md** listing the 50 non-operational files with a 1-line description each. This prevents agents from mistaking research artifacts for operational files.

9. **Fix artifact-worked-examples.md stale gate reference** at line 159: "Only 14 of 42 gates" should note the current gate count is 54 (or add a note that this describes a historical run).

10. **Consider archiving historical files into a subdirectory** (e.g., `_historical/` or `_research/`). The 50 non-operational files (18,306 lines, 55.6% of directory) create navigational noise. Alternatively, add a `_` prefix convention to distinguish them from operational files.

### P3 (LOW — Polish)

11. **Unify the 3 verify-fix-*.md files** (39+97+124=260 lines) into a single `verify-fixes.md` historical record.

12. **Add upstream authority link** to each operational artifact's header: "Authority: MANIFEST.md Section X". Currently only gate-runner split files do this consistently.

13. **Rename pa-guardrails-weaver.md** to `pa-weaver-guardrails.md` for better alphabetical grouping with other pa-weaver files.

---

## Appendix: Gate Count Evolution (for context)

| Source | Count | When |
|--------|-------|------|
| Original extraction | 42 | Phase 7 (2026-02-23) |
| Post Wave 0-3 | 37 | Wave 3 (2026-02-24) |
| Post Wave 0-3 (with new gates) | 43 | Wave 3 MONOLITHIC header |
| Backup pre-implementation | 37 | Backup snapshot |
| verify-pipeline-structure.js | 47 | Stale (never updated) |
| gate-runner-spec.md line 257 | 47 | Stale (partially updated) |
| gate-manifest.json (CANONICAL) | **54** | Current (2026-02-25) |
| MANIFEST.md (majority refs) | **54** | Current (2026-02-25) |
| MANIFEST.md line 468 | 47 | Stale (missed update) |

The count has evolved 42 -> 37 -> 43 -> 47 -> 54 through successive waves. Each transition left stale references in files that were not fully updated.

---

*End of Pipeline Organization Audit.*
