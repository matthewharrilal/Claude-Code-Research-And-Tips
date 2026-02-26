# Cross-File Consistency Verification — Pipeline v5

**Date:** 2026-02-26
**Auditor:** audit-consistency (Opus agent)
**Scope:** All modified pipeline files post v5 implementation (D2, D5, D6, D10, D13, D14, ideology changes)
**Method:** Automated checker (`check-consistency.js`) + manual cross-reference verification

---

## 1. Automated Checker Results

**Summary:** 159 checks, 136 PASS, 23 FAIL (85.5%)

The checker identifies 23 failures across 6 categories. These are analyzed below with manual verification.

---

## 2. Gate Count Consistency

### Status: INCONSISTENT — 2 files stale

**Canonical source:** `gate-manifest.json` = **56 gates** (21 REQ + 14 REC + 10 ADV + 2 DIAG + 8 BV + 1 UTIL)

| File | Claims | Actual | Delta | Severity |
|------|--------|--------|-------|----------|
| gate-manifest.json | 56 | 56 | 0 | OK |
| gate-runner-core.js (header) | 56 | 56 | 0 | OK |
| gate-runner-spec.md | 56 | 56 | 0 | OK |
| **MANIFEST.md** | **54** | 56 | **-2** | **BLOCKING** |
| **SKILL.md (build-page)** | **54** | 56 | **-2** | **BLOCKING** |

**Root cause:** D2 crack gates (BV-08, GR-83) were added to gate-manifest.json, gate-runner-core.js, and gate-runner-spec.md but MANIFEST.md and SKILL.md were NOT updated to reflect the new total.

### Specific stale references in MANIFEST.md:
- Line 166: "Run 54 programmatic gate checks" → should be 56
- Line 274: "54 gate-runner gates (21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY)" → should be 56 (14 REC + 8 BV)
- Line 275: same stale count
- Line 287: "BV-01–BV-07" → should be BV-01–BV-08
- Line 570: "54 gates: PASS/FAIL"
- Line 870: "54 gates (21 REQUIRED + 13 RECOMMENDED..." → stale
- Line 907: "All 54 gates..."
- Line 943: "54 gates"

### Specific stale references in SKILL.md:
- Line 46: "22 executable Playwright JS functions (54 gates...)" → 25 functions, 56 gates
- Line 50: "21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BRIEF + 1 UTILITY = 54" → 14 REC + 8 BRIEF = 56
- Line 76: "9 functions, 54 gates" → 25 functions, 56 gates

### BV-08 and GR-83 registration gaps:
- **gate-manifest.json:** REGISTERED (lines 56, 72, 150, 158)
- **gate-runner-core.js:** REGISTERED (lines 9-10, 25-27, 32, 1651, 1974-2471)
- **gate-runner-spec.md:** REGISTERED (lines 19, 21, 33-34, 201-214, 288-289)
- **MANIFEST.md:** NOT REGISTERED — zero mentions of BV-08 or GR-83 by ID
- **SKILL.md:** NOT REGISTERED — zero mentions of BV-08 or GR-83
- **pa-deployment.md:** N/A (not a gate file)
- **EXECUTION-TRACKER-TEMPLATE.md:** NOT REGISTERED (line 32 says "___/7 PASS" should be "___/8 PASS")

---

## 3. Function Count Consistency

### Status: INCONSISTENT — stale claims

**Actual function count in gate-runner-core.js:** 25 top-level function declarations

MANIFEST.md (line 278) and SKILL.md (line 46) both claim "22 functions." The automated checker found 18 (different counting method).

**Actual 25 functions:**
1. runBriefVerification, 2. checkAntiRegressionLanguage, 3. runGateRunner, 4. runAntiPatternGates, 5. runWave2Gates, 6. runGateCoverage, 7. checkGateResultIntegrity, 8. checkDPR, 9. checkScreenshotQuality, 10. checkUsabilityPriority, 11. checkPredictionSuppression, 12. checkFindingStatusMap, 13. checkBuilderInputVolume, 14. parseIntentComments (NEW — D2), 15. verifyIntentComments (NEW — D2), 16. checkBriefOutputDiff (NEW — D2), 17. checkResidualArtifact, 18. checkRefineCompletion, 19. checkIterationLogAutoFill, 20. checkVisibleContent, 21. elementLevelScreenshotFallback, 22. runPhase3Gates, 23. runPostWeaverGates, 24. runMetaGates, 25. runAllGates

The "22 functions" claim was pre-D2 (before +3 new functions). But even 22 was questionable — it likely counted only "exported" or "top-level phase" functions. The header comment lists 11 named exports.

**Severity:** MODERATE. The exact count matters less than the file being available and functional, but stale counts reduce spec trustworthiness.

---

## 4. PA Question Count Consistency

### Status: MOSTLY CONSISTENT — 1 header stale

**Actual:** 69 unique questions defined in pa-questions.md (range PA-01 through PA-81, with gaps)

| File | Claims | Actual | Status |
|------|--------|--------|--------|
| pa-questions.md (footer, line 431) | "PA-01 through PA-81" | PA-81 highest | CORRECT |
| pa-questions.md (header, line 5) | "PA-01 through PA-77" | PA-81 highest | **STALE** |
| pa-deployment.md | 69 total | 69 | CORRECT |
| MANIFEST.md | 69 total | 69 | CORRECT |
| SKILL.md (build-page) | 69 | 69 | CORRECT |
| SKILL.md (perceptual-auditing) | 69 | 69 | CORRECT |

**Root cause:** pa-questions.md header on line 5 was not updated when PA-80 and PA-81 were added. The footer on line 431 was updated correctly.

**Auditor question assignments:** All 9 auditors sum correctly (9+8+10+11+7+5+8+5+6 = 69). All MANIFEST/pa-deployment cross-references match.

**Severity:** LOW. Header is cosmetic; actual question definitions and routing are correct.

---

## 5. Line Count Claims (Appendix D)

### Status: 6 STALE claims

| File | Claimed | Actual | Delta | Severity |
|------|---------|--------|-------|----------|
| **gate-runner-core.js** | ~2,273 | 2,809 | **+536 (+24%)** | **BLOCKING** |
| **gate-runner-spec.md** | ~265 | 300 | **+35 (+13%)** | MODERATE |
| **pa-deployment.md** | ~376 | 443 | **+67 (+18%)** | MODERATE |
| **artifact-orchestrator.md** | ~1,193 | 745 | **-448 (-38%)** | **BLOCKING** |
| **EXECUTION-TRACKER-TEMPLATE.md** | ~162 | 200 | **+38 (+23%)** | MODERATE |
| gate-manifest.json | ~326 | 344 | +18 (+6%) | OK (within tolerance) |
| All other files | within 2% | — | — | OK |

**Root causes:**
- gate-runner-core.js: D2 crack gates added ~536 lines (BV-08, GR-83, parseIntentComments). The ~2,273 claim is pre-D2.
- gate-runner-spec.md: D2 crack gate specifications added ~35 lines.
- pa-deployment.md: Mini-PA section + iteration deployment protocol added ~67 lines.
- artifact-orchestrator.md: D14 complexity reduction removed Sections 10-16 (~448 lines). The MANIFEST has TWO references — line 348 still says "~1,193 lines" (stale), line 1072 correctly says "~744 lines (down from ~1,193 after D14 complexity reduction)."
- EXECUTION-TRACKER-TEMPLATE.md: D13/D5 changes added iteration log, two-pass fields, observer fields (+38 lines).

**MANIFEST Appendix D (line 1021):** Lists `artifact-orchestrator.md | ~744 lines` — CORRECT. But Section 3 header (line 348) says `artifact-orchestrator.md (~1,193 lines)` — STALE.

**SKILL.md** mirrors the stale MANIFEST Appendix D claims for core.js (~2,273) and spec.md (~265) and pa-deployment.md (~376).

---

## 6. Two-Pass Recipe References

### Status: PARTIALLY CONSISTENT — routing works but naming gaps exist

**Architecture:** artifact-builder-recipe.md is now a REDIRECT to two split files:
- `artifact-builder-recipe-compose.md` — Pass A Recipe (D-01 through D-06, D-09)
- `artifact-builder-recipe-polish.md` — Pass B Recipe (D-07, D-08, accessibility, self-eval)

**Cross-file reference check:**

| File | References split files? | References "Pass A/B Recipe"? |
|------|------------------------|-------------------------------|
| artifact-builder-recipe.md | YES (lines 10-13) — redirect with file names | YES |
| artifact-orchestrator.md | NO (uses "Pass A Recipe" / "Pass B Recipe" abstractly) | YES (lines 293, 332) |
| MANIFEST.md | NO (references `artifact-builder-recipe.md` in Appendix D only) | YES (lines 36, 38, 256-257, 464, 503, 941-942) |
| SKILL.md | NO | YES ("Two-pass build" line 72) |

**Issue:** Neither MANIFEST.md Appendix D nor SKILL.md list the split recipe files (`artifact-builder-recipe-compose.md`, `artifact-builder-recipe-polish.md`) by name. The orchestrator following MANIFEST would not know these files exist unless it reads the redirect in `artifact-builder-recipe.md`. The route works (MANIFEST -> recipe.md redirect -> compose.md/polish.md) but is indirect.

**D-01 through D-05 / D-06 through D-09 split:**
- MANIFEST.md line 256-257: CORRECT (D-01-D-05 to Pass A, D-06-D-09 to Pass B)
- artifact-orchestrator.md line 293: CORRECT ("D-01 through D-05")
- artifact-orchestrator.md line 332: CORRECT ("D-06 through D-09")
- artifact-builder-recipe-compose.md: Lists D-01 through D-06 + D-09 — DISCREPANCY (includes D-06 and D-09, MANIFEST says D-01-D-05)
- artifact-builder-recipe.md redirect line 10: "D-01 through D-06, D-09" — matches compose.md

**D-06 disposition routing inconsistency:**
- MANIFEST says D-06 goes to Pass B (line 257)
- artifact-builder-recipe-compose.md includes D-06 in Pass A
- artifact-builder-recipe.md redirect says compose.md has "D-01 through D-06, D-09"

This is a **genuine inconsistency** in disposition routing. D-06 (Negative Space as Shape) is claimed by both Pass A (in compose.md) and Pass B (in MANIFEST.md).

**Severity:** MODERATE. The orchestrator will follow MANIFEST, which routes D-06 to Pass B. But if a builder reads compose.md directly, it will see D-06 included.

---

## 7. Mini-PA References

### Status: CONSISTENT

| File | References Mini-PA? | Section 6? | Consistent? |
|------|-------------------|-----------|-------------|
| MANIFEST.md (line 203) | YES | References pa-deployment.md Section 6 | YES |
| artifact-orchestrator.md (lines 603-646) | YES | Describes full protocol | YES |
| pa-deployment.md (lines 418-438) | YES | Section 6 present with protocol | YES |

Mini-PA references are consistent across all 3 files. Auditor selection (A, C, G), question count (15), and viewport (1440px only) match. Escalation triggers match.

---

## 8. Observer Protocol References

### Status: BROKEN FILE REFERENCE

| File | References Observer? | Protocol file path? |
|------|---------------------|-------------------|
| MANIFEST.md (lines 72, 146-155, 201) | YES — "17 agents" includes Observer | References "artifact-orchestrator.md Section 1" |
| artifact-orchestrator.md (lines 124-155) | YES — full protocol description | References `d10-observer-protocol.md` Section 4 |
| EXECUTION-TRACKER-TEMPLATE.md (lines 17-18, 180) | YES — OBSERVER_SPAWNED, OBSERVER_COMPLIANCE, Observer Report row | N/A |
| SKILL.md | NO explicit mention | N/A |

**BROKEN REFERENCE:** artifact-orchestrator.md line 130 references `d10-observer-protocol.md` for the copy-paste-ready observer prompt. This file exists at `ephemeral/builds/yegge-gas-town-2026-02-25/v5-design/d10-observer-protocol.md` but NOT in `ephemeral/va-extraction/`. The orchestrator reading the artifact would NOT find this file at the expected relative path.

**Severity:** BLOCKING for observer deployment. The observer protocol is described in orchestrator Section 1 but the detailed prompt is in a file that's not in the pipeline directory.

---

## 9. BV-08 and GR-83 Registration

### Status: PARTIALLY REGISTERED — missing from 3 key files

| File | BV-08 | GR-83 | Status |
|------|-------|-------|--------|
| gate-manifest.json | YES | YES | OK |
| gate-runner-core.js | YES | YES | OK |
| gate-runner-spec.md | YES | YES | OK |
| **MANIFEST.md** | **NO** | **NO** | **MISSING** |
| **SKILL.md** | **NO** | **NO** | **MISSING** |
| **EXECUTION-TRACKER-TEMPLATE.md** | **NO** (BV "___/7") | **NO** | **MISSING** |

MANIFEST.md line 287 describes BV gates as "BV-01–BV-07" — should be BV-01–BV-08. No mention of GR-83 by ID anywhere in MANIFEST. No mention of brief-output diff or narration protocol in MANIFEST's Section 3 artifact routing table.

SKILL.md has zero references to either gate.

EXECUTION-TRACKER-TEMPLATE.md line 32 says "BV gates: ___/7 PASS" — should be ___/8 PASS.

**Severity:** BLOCKING. An orchestrator following MANIFEST would not know BV-08 or GR-83 exist, would not run them, and would count BV gates incorrectly.

---

## 10. Dangling References to Deleted Content (D14 Reductions)

### Status: CLEAN — no dangling references in active files

D14 removed Sections 10-16 from artifact-orchestrator.md (archived to `_historical/orchestrator-sections-10-16.md`).

**Checked:** artifact-orchestrator.md, MANIFEST.md, SKILL.md, all gate files, all PA files — NO references to "Section 10" through "Section 16" in any active pipeline file.

References to Sections 10-16 exist only in:
- `_historical/orchestrator-sections-10-16.md` (archive)
- `_backup-pre-implementation/artifact-orchestrator.md` (backup)
- Pre-implementation buddy/verify/meta files (audit artifacts)

All dangling references were cleanly removed.

---

## 11. IMPROVEMENTS Comment and Convergence Model

### Status: MOSTLY CONSISTENT — 1 gap in polish recipe

**IMPROVEMENTS comment (`<!-- IMPROVEMENTS: ... -->`):**

| File | References IMPROVEMENTS? | Consistent? |
|------|------------------------|-------------|
| MANIFEST.md (line 45) | YES | YES |
| artifact-orchestrator.md (lines 303, 350, 475, 526-535) | YES — both Pass A and Pass B | YES |
| artifact-builder-recipe-compose.md (lines 559-566) | YES | YES |
| **artifact-builder-recipe-polish.md** | **NO** | **MISSING** |
| Appendix E Builder Prompt (line 1165-1174) | Only self-eval, not IMPROVEMENTS | PARTIAL |

The Pass B (polish) recipe does NOT instruct the builder to include `<!-- IMPROVEMENTS: ... -->`. But artifact-orchestrator.md line 350 says Pass B output should "Include `<!-- IMPROVEMENTS: ... -->`." This means the orchestrator expects it but the recipe doesn't tell the builder to produce it.

**Convergence model (`Quality_0 = Agent Capability x Content Affordance x Spec Fidelity`):**

Referenced consistently in:
- MANIFEST.md lines 62-66
- artifact-orchestrator.md lines 25-26
- artifact-routing.md (Content Affordance mapping)

**Severity:** MODERATE. The IMPROVEMENTS gap in polish.md could cause Pass B builders to omit improvement ideas, breaking the iteration pipeline.

---

## 12. Stale Line Counts in Modified Files

### Status: 6 files with stale counts (see Section 5)

Files changed during v5 implementation that now have incorrect line count claims:

| File | Pre-v5 Claimed | Post-v5 Actual | Changed By |
|------|---------------|----------------|-----------|
| gate-runner-core.js | ~2,273 | 2,809 | D2 (BV-08, GR-83 + shared utility) |
| gate-runner-spec.md | ~265 | 300 | D2 (gate specifications) |
| pa-deployment.md | ~376 | 443 | Ideology (Mini-PA, iteration protocol) |
| artifact-orchestrator.md | ~744 (correct in Appendix D) / ~1,193 (stale in Section 3) | 745 | D14 (already correct in one place, stale in another) |
| EXECUTION-TRACKER-TEMPLATE.md | ~162 | 200 | D5/D13 (two-pass fields, iteration log, observer) |

---

## 13. Appendix E Builder Prompt (Single vs Two-Pass)

### Status: INCONSISTENT — single builder prompt but two-pass architecture

MANIFEST Appendix E (line 1135) has `### Builder Prompt (Phase 2)` — a SINGLE unified builder prompt. This prompt does not distinguish between Pass A and Pass B. It includes all D-01 through D-09 dispositions and all 7 self-eval questions.

The two-pass architecture (Sections 2-4 of MANIFEST) clearly defines separate Pass A and Pass B with different disposition subsets and different instructions. But Appendix E provides only one builder prompt.

**Impact:** An orchestrator using Appendix E templates would spawn one builder with all dispositions instead of two builders with split dispositions.

**Severity:** SIGNIFICANT. The prompt template needs to be split into Pass A and Pass B variants, or at minimum the Appendix E should reference the split recipe files and note the single prompt is a placeholder.

---

## 14. Agent Count — Checker False Positive

The checker flagged `MANIFEST.md total agent count is 15: expected 15, got 17`. This is a **checker error**. MANIFEST correctly states 17 agents (1 orchestrator + 16 workers: Observer + Content Analyst + Brief Assembler + Pass A Builder + Pass B Builder + 9 PA Auditors + Integrative Auditor + Weaver). The 17 count reflects:
- +1 Observer (D10 addition)
- Pass A + Pass B = 2 builders instead of 1

The checker's expected value of 15 is stale (pre-D5/D10).

---

## Summary: All Inconsistencies

### BLOCKING (must fix before next pipeline run)

| # | Issue | Files Affected | Fix Effort |
|---|-------|---------------|-----------|
| B1 | Gate count 54→56 not propagated | MANIFEST.md (8 locations), SKILL.md (3 locations) | ~15 min |
| B2 | BV-08 and GR-83 not registered in MANIFEST | MANIFEST.md (Section 3 routing table, BV range) | ~10 min |
| B3 | BV count 7→8 not propagated | MANIFEST.md, SKILL.md, EXECUTION-TRACKER-TEMPLATE.md | ~5 min |
| B4 | Observer protocol file not in va-extraction/ | d10-observer-protocol.md missing from pipeline dir | ~5 min (copy) |
| B5 | Line count claims stale for 5 files | MANIFEST.md Appendix D, SKILL.md | ~10 min |

### SIGNIFICANT (should fix)

| # | Issue | Files Affected | Fix Effort |
|---|-------|---------------|-----------|
| S1 | Appendix E has single builder prompt, not Pass A/B | MANIFEST.md Appendix E | ~20 min |
| S2 | IMPROVEMENTS not in polish recipe | artifact-builder-recipe-polish.md | ~5 min |
| S3 | D-06 disposition routing inconsistency (compose.md vs MANIFEST) | artifact-builder-recipe-compose.md or MANIFEST.md | ~5 min (decide which is authoritative) |
| S4 | Function count claims (22 vs 25 actual) | MANIFEST.md, SKILL.md | ~5 min |
| S5 | Orchestrator line count stale in MANIFEST Section 3 (1,193 vs 745) | MANIFEST.md line 348 | ~2 min |

### LOW (cosmetic)

| # | Issue | Files Affected |
|---|-------|---------------|
| L1 | pa-questions.md header says "PA-77" but range extends to PA-81 | pa-questions.md line 5 |
| L2 | Split recipe files not listed in Appendix D file registry | MANIFEST.md Appendix D |
| L3 | SKILL.md doesn't mention IMPROVEMENTS, observer, BV-08, or GR-83 | SKILL.md |

### CONFIRMED CONSISTENT (no action needed)

- PA question counts (69) — match across all files
- PA auditor assignments — all 9 auditors sum correctly
- Mini-PA references — consistent across MANIFEST, orchestrator, pa-deployment
- Convergence model (master equation) — consistent
- Verdict logic — consistent
- BV-01 through BV-05 — consistent
- Observer references in MANIFEST and orchestrator — consistent (except broken file path)
- Dangling Section 10-16 references — CLEAN (none in active files)
- All file existence checks — PASS (27/27 files exist)
- REQUIRED_GATES coverage array — correct
- GR-48 self-referential exclusion — correct

---

## Recommended Fix Priority

1. **B1+B2+B3:** Update MANIFEST.md and SKILL.md gate counts from 54→56, RECOMMENDED 13→14, BV 7→8. Add BV-08 and GR-83 to Section 3 routing table. Update tracker BV count.
2. **B4:** Copy `d10-observer-protocol.md` to `ephemeral/va-extraction/` and verify orchestrator reference resolves.
3. **B5:** Update all stale line counts in MANIFEST Appendix D and SKILL.md.
4. **S1:** Split Appendix E builder prompt into Pass A and Pass B variants.
5. **S2:** Add IMPROVEMENTS instruction to polish recipe.
6. **S3:** Resolve D-06 disposition routing (MANIFEST says Pass B, compose.md includes it in Pass A).

**Total fix effort estimate:** ~80 min for all BLOCKING + SIGNIFICANT items.

---

## Consistency Checker Accuracy Assessment

The automated checker (`check-consistency.js`) correctly identified 20 of the 23 reported failures as genuine. 3 findings need adjustment:
- **Agent count (expected 15, got 17):** Checker expectation is stale. MANIFEST's 17 is correct post-D5/D10.
- **Function count (expected 18, got 22):** Both numbers are wrong — actual is 25. Checker's counting method excludes some function types.
- **pa-questions header range:** Correctly flagged but LOW severity.

The checker does NOT catch:
- D-06 disposition routing inconsistency
- Missing IMPROVEMENTS in polish recipe
- Appendix E single vs two-pass builder prompt
- Observer protocol broken file reference
- Orchestrator line count stale in Section 3 (only checks Appendix D)

**Recommendation:** Update checker to also verify:
1. Split recipe file references in Appendix D
2. BV-08/GR-83 presence in MANIFEST routing table
3. Observer protocol file existence
4. Appendix E template count vs agent roster

---

*End of consistency verification report.*
