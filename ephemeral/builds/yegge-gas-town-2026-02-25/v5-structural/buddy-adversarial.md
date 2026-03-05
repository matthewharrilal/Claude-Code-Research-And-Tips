# Adversarial Review — Pipeline v5 Structural Changes

**Date:** 2026-02-26
**Reviewer:** Opus (adversarial role)
**Scope:** All changes in the v5 structural implementation across 15+ operational files
**Method:** 9 attack vectors tested systematically

---

## Summary

**Overall: MOSTLY CLEAN with 1 BLOCKING + 2 SIGNIFICANT + 3 ADVISORY findings**

The 14 core operational files in `ephemeral/va-extraction/` have been migrated correctly. The consistency checker passes 209/209. JavaScript syntax is valid, JSON is valid. The BLOCKING finding is in SKILL.md (outside the va-extraction directory) which was NOT migrated.

---

## Attack Vector Results

### 1. INCOMPLETE MIGRATION — PASS (core files) / FAIL (SKILL.md)

**Method:** Grep for `SHIP WITH FIXES`, `REBUILD`, `REFINE` (as verdict terms) across all 14 operational files.

**Core operational files (14 files in va-extraction/):** PASS
- MANIFEST.md: zero hits
- artifact-orchestrator.md: zero hits
- gate-runner-core.js: zero hits
- gate-manifest.json: zero hits
- pa-weaver.md: zero hits
- pa-deployment.md: zero hits
- pa-questions.md: zero hits
- pa-manifest.md: zero hits
- EXECUTION-TRACKER-TEMPLATE.md: zero hits
- gate-runner-spec.md: zero hits
- d10-observer-protocol.md: zero hits
- artifact-builder-recipe-compose.md: zero hits
- artifact-builder-recipe-enrich.md: zero hits
- experiment-protocol.md: zero hits

**SKILL.md:** FAIL

| Line | Old Term | Should Be | Severity |
|------|----------|-----------|----------|
| 94 | `1 REBUILD + 2 IMPROVE` | `1 RETHINK + 2 IMPROVE` | **BLOCKING** |
| 96 | `verdict is SHIP or SHIP WITH FIXES` | `verdict is RELEASE or POLISH` | **BLOCKING** |
| 99 | `use -refine suffix` | `use -improve suffix` | **BLOCKING** |

**Location:** `~/.claude/skills/build-page/SKILL.md` lines 94-99

**Impact:** BLOCKING. SKILL.md is the ENTRY POINT to the pipeline. When the user invokes `/build-page`, these are the first instructions the orchestrator reads. An orchestrator following SKILL.md instructions will use the wrong verdict terms and wrong artifact suffixes, causing mismatches with the operational files.

**Fix:** Three string replacements:
- Line 94: `1 REBUILD + 2 IMPROVE` → `1 RETHINK + 2 IMPROVE`
- Line 96: `verdict is SHIP or SHIP WITH FIXES` → `verdict is RELEASE or POLISH`
- Line 99: `use -refine suffix (e.g., p3b-pa-auditor-A-refine.md)` → `use -improve suffix (e.g., p3b-pa-auditor-A-improve.md)`

### 2. BROKEN LOGIC PATHS — PASS

**Method:** Trace verdict flow: Builder outputs -> gates -> PA -> Weaver -> Orchestrator decision tree.

Traced path:
1. **Builder** outputs HTML with `<!-- IMPROVEMENTS: ... -->` and `<!-- CONVICTION: ... -->` comments
2. **Gate Runner** (gate-runner-core.js) runs `checkImprovementsComment(htmlText)` → returns GR-84 result. No verdict strings in gate runner code (correct — gate runner checks are PASS/FAIL, not verdict decisions)
3. **PA Auditors** answer 69 questions → produce findings
4. **Integrative Auditor** synthesizes 9 reports
5. **Weaver** (pa-weaver.md) scores PA-05, classifies fixes, issues verdict: `RELEASE / POLISH / IMPROVE / RETHINK` (Section 5.1, lines 271-276) — CORRECT
6. **Orchestrator** (artifact-orchestrator.md Section 7) receives verdict and executes decision tree:
   - RELEASE (PA-05 >= 3.5, line 485) — CORRECT
   - POLISH override (PA-05 >= 3.0, line 495) — CORRECT
   - IMPROVE (PA-05 2.5-3.5, line 502) — CORRECT
   - RETHINK targeting (line 526-528) — CORRECT

**gate-manifest.json verdictLogic:** Uses RETHINK, IMPROVE, INCOMPLETE, BLOCK_SCREENSHOTS, BLOCK_PA_DEPLOYMENT, PROCEED_TO_PA — all CORRECT.

**No verdict-bearing string literals in gate-runner-core.js.** The JS file does not produce or compare verdict strings — it returns PASS/FAIL results that the orchestrator interprets.

### 3. COLLISION RISKS — PASS

**"POLISH" collision:**
- Found 1 occurrence of lowercase "polish" as a verb in artifact-builder-recipe-compose.md line 546: "after adding polish" — This is the English verb, NOT the verdict. Lowercase vs UPPERCASE distinguishes them. No confusion risk.
- MANIFEST.md uses "POLISH" exclusively as a verdict term (lines 43-45, 199, 304, etc.)

**"IMPROVE" collision:**
- "IMPROVE" appears frequently in artifact-orchestrator.md as both a verdict AND an action verb, but context always clarifies: "IMPROVE protocol", "IMPROVE builder", "IMPROVE pass", "IMPROVE cycle", "IMPROVE targeting". These are all derivative uses of the verdict term and are self-consistent. No collision with non-verdict usage.

**"Cycle" collision:**
- "Cycle A" / "Cycle B": zero occurrences (PASS — Pass A/B preserved)
- "Cycle 0", "Cycle 1", "Cycle 2": used correctly in artifact-orchestrator.md and MANIFEST.md for iteration numbering
- No collision with other "cycle" usage (e.g., "revision cycles" in brief verification — contextually distinct)

### 4. GATE COUNT DRIFT — PASS

**Method:** `node check-consistency.js` — 209/209 PASS

Full output:
- Gate Count Consistency: all tier arrays match counts
- Gate ID Cross-Validation: GR-33, GR-34 correctly diagnostic-only
- Function Count: 27 matches claims in MANIFEST and SKILL
- PA Question Count: 69 matches everywhere
- Auditor Assignment Sums: all 9 auditors match between MANIFEST and pa-deployment
- Line Count Claims: all within tolerance
- BV Gate Range: BV-01 through BV-08 consistent
- Tier Breakdown: REQUIRED/RECOMMENDED/ADVISORY match across all files
- Agent Count: 17 matches everywhere
- Cross-File References: all 30 referenced files exist
- GR-48 Coverage: all 21 required gates in array
- Verdict Terminology: zero old terms in operational files, all new terms present

### 5. JAVASCRIPT CORRECTNESS — PASS

**Method:** `node -c gate-runner-core.js` — passed with zero errors.

Also verified:
- `checkImprovementsComment(htmlText)` function (GR-84) exists, is RECOMMENDED tier, parses `<!-- IMPROVEMENTS: ... -->` comments correctly
- `runGateCoverage()` (GR-48) has correct REQUIRED_GATES array (21 items = 22 required minus self)
- `verifyIntentComments(htmlText)` (GR-83) exists and is RECOMMENDED tier
- `checkBriefOutputDiff(briefText, htmlText)` (BV-08) exists

### 6. JSON VALIDITY — PASS

**Method:** `node -e "JSON.parse(require('fs').readFileSync('gate-manifest.json','utf8'))"` — valid.

Verified structure:
- Version 4.2.0
- 57 total = 22 REQ + 15 REC + 9 ADV + 2 DIAG + 8 BV + 1 UTIL
- verdictLogic uses correct terms (RETHINK, IMPROVE, INCOMPLETE, etc.)
- executionOrder has 15 steps covering all phases

### 7. APPLIED MODE TRAP — PASS (with ADVISORY)

**Method:** Traced APPLIED mode through builder -> gates -> PA -> weaver.

**Builder side (artifact-builder-recipe-compose.md):**
- 6 APPLIED mode callouts found (lines 32, 135, 148, 216, 408, 467)
- D-04 (Second-Half Moment) correctly marked SKIP for APPLIED
- D-09 (Quiet Zone) correctly marked Optional for APPLIED
- D-02 correctly uses SUBTLE (15-25 RGB) not dramatic for APPLIED
- Component callouts correctly allow uniform styling for APPLIED
- Disposition forward-reference table (line 216) includes APPLIED column — CORRECT

**PA scoring side:**
- pa-deployment.md line 159: Auditors F and G informed of mode; "no metaphor" = correct APPLIED outcome
- MANIFEST.md line 269-270: APPLIED PA-05 target 2.5-3.0, Tier 5 denominator = 5
- pa-weaver.md line 389: PA-65 "choir in unison" = APPLIED (not a defect)

**ADVISORY (ADV-01):** The pa-weaver.md does NOT explicitly mention a PA-05 ceiling of 3.0 for APPLIED mode. The MANIFEST.md mentions the target range (2.5-3.0) and the threshold adjustments, but the weaver's Ship Thresholds table (pa-weaver.md lines 271-276) does not have separate APPLIED/COMPOSED rows. An APPLIED page scoring PA-05 3.5 would trigger RELEASE even though APPLIED mode should cap at 3.0. The gate-runner mode detection gates (GR-33, GR-34) are DIAGNOSTIC only and do not block.

**Risk:** Low — an APPLIED page scoring 3.5 would be an unexpectedly excellent result, and RELEASE would not be wrong. But the mode-adjusted ceiling is not enforced.

### 8. REGRESSION ON PASS A/B — PASS

**Method:** Grep for "Cycle A" and "Cycle B" — zero hits.

"Pass A" and "Pass B" are preserved correctly throughout:
- MANIFEST.md: 15+ correct occurrences (lines 36-38, 128-144, 221, 253-257, etc.)
- artifact-orchestrator.md: used correctly in Section 5 (Phase 2A, 2B)
- artifact-builder-recipe-compose.md: "Pass A of a two-pass build" (line 15)
- artifact-builder-recipe-enrich.md: Pass B context preserved
- EXECUTION-TRACKER-TEMPLATE.md: Phase 2A/2B fields use Pass A/Pass B

No accidental conversion of "Pass A/B" to "Cycle A/B" detected.

### 9. SKILL.md INTEGRITY — FAIL (see Attack Vector 1)

**Location:** `~/.claude/skills/build-page/SKILL.md` lines 91-99

**Additional finding beyond verdict terms:**

**SIGNIFICANT (SIG-01):** artifact-orchestrator.md Phase 3B (lines 449-452) contains a STALE question assignment summary:

```
- PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42 (7 auditors x 6 questions)
- PA-8 Q43-48
- PA-9 Q49-54 (total 54 PA questions across 9 auditors)
```

This describes the OLD assignment scheme (54 questions, sequential ranges). The ACTUAL assignment is 69 questions across 9 auditors with thematic groupings (per MANIFEST.md lines 173-182 and pa-deployment.md lines 141-151). The MANIFEST quickstart correctly says 69 questions (line 41) and the pa-deployment section below these lines also correctly references 69 questions with thematic assignments.

**Impact:** SIGNIFICANT. If the orchestrator reads this section of artifact-orchestrator.md without cross-referencing MANIFEST.md or pa-deployment.md, it could deploy auditors with the wrong question assignments. The correct assignments are specified elsewhere (MANIFEST.md, pa-deployment.md), but this creates a contradiction within artifact-orchestrator.md itself.

**Fix:** Replace lines 449-452 with:
```
**Auditor Question Assignments:** See MANIFEST.md Section 2, Phase 3B for thematic question assignments (69 questions across 9 auditors). Canonical source: pa-deployment.md Section 1.2.
```

**SIGNIFICANT (SIG-02):** pa-weaver.md uses "Ship Decision" and "SHIP DECISION" as section headers and field names in 3 locations:

| Location | Text | Issue |
|----------|------|-------|
| pa-weaver.md line 91 | `the Ship Decision: POLISH requires...` | "Ship Decision" as term |
| pa-weaver.md line 93 | `**Ship Decision** (RELEASE / POLISH / IMPROVE / RETHINK)` | "Ship Decision" as field name |
| pa-weaver.md line 244 | `## 5. SHIP DECISION AND FEEDBACK LOOP` | Section header |
| pa-weaver.md line 267 | `### 5.1 Ship Thresholds` | Subsection header |
| pa-manifest.md line 71 | `Ship Decision \| RELEASE / POLISH...` | Template field |
| pa-manifest.md line 85 | `Ship Decision justified` | Template field |

The verdict values inside these fields ARE correct (RELEASE / POLISH / IMPROVE / RETHINK). But the field NAME "Ship Decision" uses the old term. Should be "Verdict Decision" or just "Verdict" for consistency.

**Impact:** SIGNIFICANT. The weaver agent reads pa-weaver.md as its primary protocol document. Seeing "Ship Decision" as a field name while the actual values are "RELEASE / POLISH / IMPROVE / RETHINK" creates cognitive dissonance. Could cause a weaver to write "Ship Decision: RELEASE" instead of "Verdict: RELEASE", which is confusing but not logically broken.

**Fix:** Rename "Ship Decision" to "Verdict" and "SHIP DECISION" to "VERDICT" in:
- pa-weaver.md lines 91, 93, 244, 267
- pa-manifest.md lines 71, 85

---

## ADVISORY Findings

### ADV-01: APPLIED Mode PA-05 Ceiling Not Enforced
**Location:** pa-weaver.md Section 5.1
**Issue:** Ship thresholds table does not distinguish APPLIED vs COMPOSED. An APPLIED page hitting 3.5 would get RELEASE verdict, exceeding the stated 3.0 ceiling for APPLIED mode.
**Risk:** Low — this would be an unexpectedly good APPLIED result. RELEASE would not be wrong, just surprising.
**Fix:** Add "(COMPOSED mode only)" qualifier to the >= 3.5 RELEASE row, or add a separate APPLIED row.

### ADV-02: "WOULD-NOT-SHIP" and "NOT SHIP-READY" in Quality Tables
**Location:** pa-weaver.md lines 121, 146-147; pa-questions.md lines 381-382; MANIFEST.md line 1379
**Issue:** These use "SHIP" in a descriptive/quality-label context (severity scales, PA-05xTier5 matrix), not as verdict terms. They were NOT migrated.
**Decision:** CORRECT — these are English descriptions ("would not ship this product") not verdict terms. No migration needed. Flagging for documentation completeness.

### ADV-03: Lowercase "polish" in Compose Recipe
**Location:** artifact-builder-recipe-compose.md line 546: "after adding polish"
**Issue:** "polish" as a verb in a Pass A self-evaluation note. Distinct from verdict "POLISH" (uppercase).
**Decision:** CORRECT — case-distinguished. No collision. Flagging for awareness.

---

## Findings Summary

| ID | Severity | File | Issue | Fix Effort |
|----|----------|------|-------|------------|
| BLOCK-01 | **BLOCKING** | `~/.claude/skills/build-page/SKILL.md` lines 94-99 | Old verdict terms: REBUILD, SHIP, SHIP WITH FIXES, -refine suffix | 3 string replacements, ~2 min |
| SIG-01 | SIGNIFICANT | `artifact-orchestrator.md` lines 449-452 | Stale PA question assignment (54 sequential → should reference 69 thematic) | Replace 3 lines with cross-reference, ~2 min |
| SIG-02 | SIGNIFICANT | `pa-weaver.md` + `pa-manifest.md` | "Ship Decision" / "SHIP DECISION" / "Ship Thresholds" field names not migrated | 6 string replacements across 2 files, ~5 min |
| ADV-01 | ADVISORY | `pa-weaver.md` Section 5.1 | APPLIED mode PA-05 ceiling not enforced in threshold table | Add qualifier to RELEASE row |
| ADV-02 | ADVISORY | Multiple files | "WOULD-NOT-SHIP" / "NOT SHIP-READY" in quality tables | No action needed (correct as-is) |
| ADV-03 | ADVISORY | `artifact-builder-recipe-compose.md` | Lowercase "polish" as verb | No action needed (case-distinguished) |

---

## Verdict

**1 BLOCKING + 2 SIGNIFICANT + 3 ADVISORY**

The BLOCKING issue (SKILL.md) must be fixed before the next pipeline run. The SIGNIFICANT issues should be fixed to prevent confusion but do not break logic. The ADVISORY items are informational.

**Total fix effort: ~10 minutes for all BLOCKING + SIGNIFICANT items.**
