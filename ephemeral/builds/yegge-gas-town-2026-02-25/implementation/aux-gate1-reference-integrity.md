# Reference Integrity Scan

**Date:** 2026-02-25
**Scanner:** Opus agent (aux-gate1)
**Files scanned:** 9 (MANIFEST.md, artifact-orchestrator.md, gate-runner-core.js, gate-manifest.json, gate-runner-spec.md, EXECUTION-TRACKER-TEMPLATE.md, pa-weaver.md, pa-deployment.md, SKILL.md)

## References Checked: 147
## VALID: 131
## BROKEN: 4
## STALE: 12

---

## Methodology

Every cross-file reference found in the 9 scanned files was categorized:
1. **File existence references** — does the referenced file exist on disk?
2. **Section/header references** — does the named section exist in the target?
3. **Gate ID references** — does the gate exist in gate-runner-core.js and gate-manifest.json?
4. **Function name references** — does the function exist in gate-runner-core.js?
5. **Count/metric references** — are the stated counts consistent across files?

---

## BROKEN References (4)

### B-1. MANIFEST.md line ~246 — Gate count "47 gates" vs actual 54

**File:** MANIFEST.md, Section 3 (artifact-gate-runner.md routing table)
**Reference text:** "47 gate-runner gates + 6 orchestrator decision rules"
**What's wrong:** MANIFEST.md was written when the gate count was 47 (Pipeline v3). After Pipeline v4 and convergence reframe additions, gate-manifest.json now reports **54 total gates** (21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL). The MANIFEST's Section 3 still says "47 gate-runner gates."
**Impact:** MEDIUM — gate count discrepancy between manifest and canonical source. gate-manifest.json is the canonical count per its own `_canonical` field.
**Fix:** Update MANIFEST.md Section 3 gate count references from 47 to 54.

### B-2. MANIFEST.md Phase 3A line ~468 — "47-gate inventory: 20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BV + 1 UTILITY"

**File:** MANIFEST.md, Section 4, Phase 3A
**Reference text:** "47-gate inventory: 20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BV + 1 UTILITY"
**What's wrong:** Count is stale. gate-manifest.json (canonical) now has: 21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL = 54 total. gate-runner-core.js header says "Total: 51 gates" which is ALSO inconsistent (it counts only in-file executable). The MANIFEST should reference gate-manifest.json and say "see gate-manifest.json for canonical breakdown."
**Impact:** HIGH — a running orchestrator would use the wrong count for GR-48 coverage verification.
**Fix:** Update to "54 gates (see gate-manifest.json for canonical breakdown: 21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY)."

### B-3. gate-runner-spec.md line 18 — REQUIRED count says "20" but gate-manifest.json says "21"

**File:** gate-runner-spec.md, Gate Categorization table, line ~18
**Reference text:** "REQUIRED | GR-01-GR-06, GR-08-GR-11, GR-13-GR-15, GR-44, GR-60, GR-61, GR-62, GR-63, GR-64, GR-48 | 20"
**What's wrong:** This list has 20 items. But gate-manifest.json lists 21 REQUIRED, including **GR-79** which is missing from gate-runner-spec.md's REQUIRED list. GR-79 (REFINE File Completion) was added in the convergence reframe and is marked REQUIRED in gate-manifest.json.
**Impact:** HIGH — spec doc is authoritative for human readers; discrepancy could cause orchestrators to miss GR-79 as a required gate.
**Fix:** Add GR-79 to REQUIRED row in gate-runner-spec.md. Update count from 20 to 21.

### B-4. gate-runner-spec.md lines 19-20 — RECOMMENDED count says "10", ADVISORY count says "9"

**File:** gate-runner-spec.md, Gate Categorization table
**Reference text:** "RECOMMENDED | ... | 10" and "ADVISORY | ... | 9"
**What's wrong:** gate-manifest.json says RECOMMENDED = 13 (adds GR-78, GR-80, GR-82) and ADVISORY = 10 (adds GR-81). gate-runner-spec.md was not updated to include the convergence reframe gates. BV count also says "5" but should be "7" (adds BV-06, BV-07). Total in spec says "47 executable gates" but should be 54.
**Impact:** HIGH — spec is the primary human-readable gate reference.
**Fix:** Update gate-runner-spec.md categorization table and summary table to match gate-manifest.json counts. Add entries for GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07.

---

## STALE References (12)

### S-1. MANIFEST.md line ~142 — "47 programmatic gate checks (see gate-manifest.json)"

**File:** MANIFEST.md, Phase 3A, Gate Runner row in Agent Roster
**Reference text:** "Run 47 programmatic gate checks"
**What changed:** Pipeline v4 + convergence reframe increased total to 54.
**Fix:** Change "47" to "54" or replace with "all programmatic gate checks (see gate-manifest.json for canonical count)."

### S-2. MANIFEST.md line ~501 — "47 gates: PASS/FAIL — see gate-manifest.json"

**File:** MANIFEST.md, Phase 3C, Weaver receives
**What changed:** Same count inflation.
**Fix:** Update 47 to current canonical count or say "see gate-manifest.json."

### S-3. SKILL.md line ~46 — "47 gates — see gate-manifest.json for canonical tier breakdown"

**File:** ~/.claude/skills/build-page/SKILL.md, gate-runner-core.js description
**Reference text:** "~1,654 lines — 9 executable Playwright JS functions (47 gates)"
**What changed:** gate-runner-core.js now has more gates. Also, "~1,654 lines" is stale — the file is likely larger after convergence reframe additions.
**Fix:** Update to "all executable Playwright JS functions (see gate-manifest.json for canonical count)."

### S-4. SKILL.md line ~50 — "20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BRIEF + 1 UTILITY = 47"

**File:** ~/.claude/skills/build-page/SKILL.md, gate-manifest.json description
**Reference text:** "CANONICAL GATE REGISTRY, tiers (20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BRIEF + 1 UTILITY = 47)"
**What changed:** gate-manifest.json now says 21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL = 54.
**Fix:** Update the tier breakdown to match gate-manifest.json.

### S-5. SKILL.md line ~76 — "9 functions, 47 gates"

**File:** ~/.claude/skills/build-page/SKILL.md, gate runner execution rule
**Reference text:** "9 functions, 47 gates — see gate-manifest.json for canonical tier breakdown"
**What changed:** Function count and gate count are both stale.
**Fix:** Update to match current gate-runner-core.js function count and gate-manifest.json gate count.

### S-6. MANIFEST.md line ~936 — "gate-runner-core.js ... ~1,626 lines"

**File:** MANIFEST.md, Appendix D, File Path Registry
**Reference text:** "gate-runner-core.js | ~1,626 lines"
**What changed:** The file has grown with convergence reframe gates (GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07). Line count is now higher.
**Fix:** Update line count estimate.

### S-7. MANIFEST.md line ~940 — "gate-manifest.json ... ~200 lines"

**File:** MANIFEST.md, Appendix D, File Path Registry
**Reference text:** "gate-manifest.json | ~200 lines"
**What changed:** File has grown from additions. Now 327 lines.
**Fix:** Update line count estimate.

### S-8. MANIFEST.md line ~941 — "EXECUTION-TRACKER-TEMPLATE.md ... ~595 lines"

**File:** MANIFEST.md, Appendix D, File Path Registry
**Reference text:** "EXECUTION-TRACKER-TEMPLATE.md | ~595 lines"
**What changed:** The file was trimmed. It is now ~163 lines (confirmed by reading).
**Fix:** Update line count estimate.

### S-9. MANIFEST.md Appendix D — "pa-weaver.md ... ~455 lines"

**File:** MANIFEST.md, Appendix D
**Reference text:** "pa-weaver.md | ~455 lines"
**What changed:** The file has been updated (467 lines on disk). Minor variance.
**Fix:** Update to ~467 or leave as approximate (within tolerance).

### S-10. gate-runner-core.js line 4 — "Pipeline v4 Programmatic Verification"

**File:** gate-runner-core.js, header comment
**Reference text:** "Pipeline v4 Programmatic Verification"
**What changed:** Not broken, but MANIFEST.md still says "Pipeline v3" in its title ("Pipeline v3 Visual Architecture — Execution Manifest"). The gate runner now says "Pipeline v4" while the manifest says "Pipeline v3." These should agree.
**Fix:** Either update MANIFEST title to "Pipeline v4" or decide on canonical pipeline version.

### S-11. MANIFEST.md line ~251 — "gate-runner-core.js (~1,654 lines)"

**File:** MANIFEST.md, Section 3, Wave 3 split files description
**Reference text:** "`gate-runner-core.js` (~1,654 lines)"
**What changed:** Line count has grown due to convergence reframe additions.
**Fix:** Update line count.

### S-12. gate-runner-spec.md line 23 — "Total executable gates: 47"

**File:** gate-runner-spec.md, summary near top
**Reference text:** "Total executable gates: 47 (20 REQUIRED + 10 RECOMMENDED + 9 ADVISORY + 2 DIAGNOSTIC + 5 BRIEF + 1 utility)"
**What changed:** Same count inflation as B-4 above. Should be 54 with updated tier breakdown.
**Fix:** Update counts to match gate-manifest.json (canonical).

---

## VALID References (131 — sampling, not exhaustive listing)

### File Existence References (all verified present on disk)
- `artifact-identity-perception.md` — EXISTS
- `artifact-builder-recipe.md` — EXISTS
- `artifact-gate-runner.md` (redirect) — EXISTS
- `artifact-pa-protocol.md` (redirect) — EXISTS
- `artifact-routing.md` — EXISTS
- `artifact-orchestrator.md` — EXISTS
- `artifact-tc-brief-template.md` — EXISTS
- `artifact-worked-examples.md` — EXISTS
- `artifact-value-tables.md` — EXISTS
- `gate-runner-core.js` — EXISTS
- `gate-runner-spec.md` — EXISTS
- `gate-runner-preconditions.md` — EXISTS
- `gate-runner-provenance.md` — EXISTS
- `gate-manifest.json` — EXISTS
- `pa-questions.md` — EXISTS
- `pa-deployment.md` — EXISTS
- `pa-weaver.md` — EXISTS
- `pa-guardrails.md` — EXISTS
- `pa-guardrails-weaver.md` — EXISTS
- `pa-manifest.md` — EXISTS
- `EXECUTION-TRACKER-TEMPLATE.md` — EXISTS
- `experiment-protocol.md` — EXISTS
- `council-verdict.md` — EXISTS
- `unified-registry.md` — EXISTS
- `artifact-gate-runner-MONOLITHIC.md` — EXISTS
- `artifact-pa-protocol-MONOLITHIC.md` — EXISTS
- `design-system/compositional-core/vocabulary/tokens.css` — EXISTS
- `design-system/compositional-core/components/components.css` — EXISTS
- `design-system/compositional-core/grammar/mechanism-catalog.md` — EXISTS
- `design-system/pipeline/crack-dimensions.md` — EXISTS
- `design-system/pipeline/AUXILIARY-PROMPT.md` — EXISTS

### Function Name References (all verified in gate-runner-core.js)
- `runBriefVerification(briefText)` — EXISTS (line 37)
- `runPhase3Gates(page)` — EXISTS (line 2208)
- `runPostWeaverGates(reports, weaver)` — EXISTS (line 2215)
- `runMetaGates(allResults)` — EXISTS (line 2219)
- `runAllGates(page, briefText)` — EXISTS (line 2225)
- `checkDPR(page)` — EXISTS (line 1736)
- `checkScreenshotQuality(screenshotDir)` — EXISTS (line 1772)
- `checkVisibleContent(screenshotDir)` — EXISTS (line 2146)
- `checkAntiRegressionLanguage(manifestText, orchestratorText)` — EXISTS (line 209)
- `checkResidualArtifact(htmlText)` — EXISTS (line 1977)
- `checkRefineCompletion(outputDir, iterationCycle)` — EXISTS (line 2020)
- `checkIterationLogAutoFill(...)` — EXISTS (line 2072)
- `checkFindingStatusMap(weaverReport, iterationCycle)` — EXISTS (line 1915)
- `checkPredictionSuppression(weaverReport)` — EXISTS (line 1889)
- `checkBuilderInputVolume(builderInputFiles)` — EXISTS (line 1951)

### Gate ID Cross-References (all verified present in both gate-manifest.json AND gate-runner-core.js)
- BV-01 through BV-07 — ALL PRESENT in code
- GR-01 through GR-15 (minus GR-12) — ALL PRESENT in code
- GR-17 through GR-22 — ALL PRESENT in code
- GR-33, GR-34 — PRESENT in code (DIAGNOSTIC)
- GR-43, GR-44, GR-45, GR-46 — ALL PRESENT
- GR-48, GR-49 — PRESENT (META)
- GR-50, GR-51, GR-52, GR-53 — ALL PRESENT
- GR-55, GR-60 — PRESENT
- GR-61, GR-62, GR-63, GR-64 — ALL PRESENT (experiential enforcement)
- GR-66, GR-67 — PRESENT (Pipeline v4)
- GR-78, GR-79, GR-80, GR-81, GR-82 — ALL PRESENT (convergence reframe)

### Section Header References (verified in target files)
- MANIFEST refs to artifact-orchestrator.md "SECTION 0: MASTER EQUATION AND PRECONDITIONS" — EXISTS
- MANIFEST refs to artifact-orchestrator.md "SECTION 7: VERDICT AND DECISION TREE" — EXISTS (labeled SECTION 7)
- MANIFEST refs to artifact-orchestrator.md "Gate Logic Relocated from Gate Runner" — EXISTS (within Section 7)
- MANIFEST refs to artifact-identity-perception.md "1.2 Soul Constraints" — VALID (section verified to exist)
- MANIFEST refs to artifact-routing.md "Phase 0: Content Analysis Protocol" — VALID
- MANIFEST refs to artifact-routing.md "Brief Template Structure" (TOC #10) — VALID
- MANIFEST refs to pa-deployment.md "1.2 Auditor Assignments" — VALID (exists as Section 1.2)
- MANIFEST refs to pa-deployment.md "Screenshot Pre-Capture Pattern" — VALID (Section 2)
- pa-weaver.md refs to pa-deployment.md Section 0 — VALID (experiential pass protocol exists)
- pa-weaver.md refs to pa-weaver.md Section 5.5 Finding Status Map — VALID (exists)
- pa-weaver.md refs to gate-runner-core.js GR-82 — VALID (function exists)
- SKILL.md refs to MANIFEST.md Appendix E — VALID (agent prompt templates exist)
- artifact-orchestrator.md refs to "SECTION 7" for REFINE/REBUILD — VALID (exists)

### Routing/Information Isolation References (verified consistent)
- PA Auditors receive: pa-questions.md + pa-guardrails.md — CONSISTENT across MANIFEST, pa-deployment, SKILL.md
- PA Auditors do NOT receive: pa-guardrails-weaver.md — CONSISTENT across MANIFEST, pa-deployment
- Weaver receives: pa-weaver.md + pa-guardrails-weaver.md — CONSISTENT across MANIFEST
- Builder does NOT receive gate thresholds — CONSISTENT across MANIFEST, artifact-orchestrator.md, SKILL.md
- GR-23-28 reclassified to orchestrator — CONSISTENT across MANIFEST Section 3, artifact-orchestrator.md Section 7

---

## Consistency Analysis: Gate Counts Across Files

| File | Total Count Claimed | Breakdown Claimed | Actual (gate-manifest.json canonical) |
|------|--------------------|--------------------|--------------------------------------|
| gate-manifest.json | **54** | 21R + 13Rec + 10Adv + 2Diag + 7BV + 1Util | **CANONICAL SOURCE** |
| gate-runner-core.js header | 51 in-file executable | 21R + 13Rec + 10Adv + 7BV (excl 2 DIAG) | Close but claims 51 not 54 |
| gate-runner-spec.md | 47 | 20R + 10Rec + 9Adv + 2Diag + 5BV + 1Util | **STALE** — needs update |
| MANIFEST.md | 47 (multiple locations) | 20R + 10Rec + 9Adv + 2Diag + 5BV + 1Util | **STALE** — needs update |
| SKILL.md | 47 (multiple locations) | 20R + 10Rec + 9Adv + 2Diag + 5BV + 1Util | **STALE** — needs update |

**Root cause:** Pipeline v4 and convergence reframe added 7 new gates (GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07) and promoted existing gates. gate-manifest.json and gate-runner-core.js were updated. MANIFEST.md, gate-runner-spec.md, and SKILL.md were NOT updated to reflect the new counts.

---

## Consistency Analysis: Pipeline Version Naming

| File | Version Name Used |
|------|-------------------|
| MANIFEST.md | "Pipeline v3" (title) |
| gate-runner-core.js | "Pipeline v4" (header) |
| gate-manifest.json | "Pipeline v4" (description) |
| gate-runner-spec.md | No explicit version (references "Council Verdict + Wave 0 + Pipeline v4") |
| SKILL.md | "Pipeline v3" (frontmatter) |
| artifact-orchestrator.md | "Pipeline v3" (line 1) |
| pa-weaver.md | "Pipeline v3" (line 2) |
| pa-deployment.md | "Pipeline v3" (line 2) |

**Inconsistency:** gate-runner-core.js and gate-manifest.json say "Pipeline v4" while all other files say "Pipeline v3." Either harmonize to v4 or treat v4 as an internal gate-runner version.

---

## Verdict: FAIL

**Reason:** 4 BROKEN references (B-1 through B-4) and 12 STALE references, with the dominant issue being **gate count inflation from 47 to 54 that was not propagated** to MANIFEST.md, gate-runner-spec.md, and SKILL.md. The stale counts are HIGH impact because:

1. GR-48 (gate coverage verification) uses REQUIRED_GATES array — if the gate-manifest.json says 21 REQUIRED but the orchestrator uses a stale spec saying 20, GR-48 could false-pass.
2. An orchestrator reading gate-runner-spec.md would not know GR-79 is REQUIRED.
3. SKILL.md's stale counts could mislead the orchestrator about what gates to expect.

**Recommended fixes (priority order):**
1. **P0 (BLOCKING):** Update gate-runner-spec.md categorization table + summary to match gate-manifest.json (B-3, B-4, S-12). Add GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 entries.
2. **P1:** Update MANIFEST.md all gate count references from 47 to 54, updating tier breakdowns (B-1, B-2, S-1, S-2, S-6, S-7, S-8, S-11).
3. **P1:** Update SKILL.md gate count references (S-3, S-4, S-5).
4. **P2:** Decide on pipeline version naming (v3 vs v4) and harmonize (S-10).
