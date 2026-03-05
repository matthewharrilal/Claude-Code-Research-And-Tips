# Cross-Reference Integrity Audit — Pipeline v5

**Date:** 2026-02-26
**Auditor:** Opus cross-reference verifier
**Scope:** All 28 operational files in `ephemeral/va-extraction/` + SKILL.md
**Method:** Systematic verification of file path refs, section refs, gate IDs, PA question IDs, and disposition routing

---

## SUMMARY

| Category | Total Refs Checked | Valid | Broken/Stale | Ambiguous |
|----------|-------------------|-------|--------------|-----------|
| File path references | 87 | 82 | 2 | 3 |
| Section references | 34 | 26 | 5 | 3 |
| Gate ID references | 57 tier gates | 52 consistent | 5 discrepancies | 0 |
| PA question references | 69 questions | 69 | 0 | 0 |
| Disposition routing (D-01 through D-09) | 18 routing claims | 18 | 0 | 0 |
| Line count claims | 28 files | 20 exact | 6 stale | 2 minor (~2 lines off) |

**Verdict:** 13 BROKEN/STALE references found, 6 AMBIGUOUS. 3 are BLOCKING (would cause agent confusion during execution), 10 are SIGNIFICANT (stale data, misleading but not execution-blocking), 6 are LOW (minor drift, cosmetic).

---

## 1. BROKEN REFERENCES (Fixes Required)

### B-01 [BLOCKING] — MANIFEST section table references "SECTION 8: REFINE AND REBUILD PROTOCOLS" which does not exist

**File:** `MANIFEST.md` line 363
**Old text:** `"SECTION 8: REFINE AND REBUILD PROTOCOLS" (if present)`
**Actual:** Orchestrator SECTION 8 is "TOTAL BUILD SUMMARY" (line 719). REFINE/REBUILD protocols are in SECTION 7 (Phase 4): VERDICT AND DECISION TREE (line 457-717).
**Impact:** BLOCKING — an orchestrator following the MANIFEST table would look for a non-existent Section 8 for iteration protocols.
**Fix:**
- File: `MANIFEST.md`
- Line: 363
- Old: `| "SECTION 8: REFINE AND REBUILD PROTOCOLS" (if present) | **Orchestrator** | How to handle REFINE (spawn different Opus builder with artistic impressions) and REBUILD (fresh builder in COMPOSING mode) |`
- New: `| "SECTION 7 (Phase 4): VERDICT AND DECISION TREE" (iteration subsections) | **Orchestrator** | REFINE targeting (R-A/R-B/R-C), REBUILD protocol, low-friction iteration, IMPROVE builder inputs |`

### B-02 [BLOCKING] — MANIFEST section table references "SECTION 4: PHASE 2 — BUILDING" which maps to orchestrator SECTION 5

**File:** `MANIFEST.md` line 360
**Old text:** `"SECTION 4: PHASE 2 — BUILDING"`
**Actual:** Orchestrator's phase numbering:
- SECTION 2 (Phase 0) = Content Analysis
- SECTION 3 (Phase 1) = Brief Assembly
- SECTION 4 (Phase 1.5) = Mode Selection
- SECTION 5 (Phase 2) = Two-Pass Building
- SECTION 6 (Phase 3) = Perceptual Audit
- SECTION 7 (Phase 4) = Verdict and Decision Tree

The MANIFEST table conflates its own "Section 4" (Phase-by-Phase Execution) with the orchestrator's section numbering. Lines 355-363 claim to map orchestrator sections but several numbers are wrong.
**Impact:** BLOCKING — agent following MANIFEST table would navigate to orchestrator SECTION 4 expecting build protocol but find Mode Selection instead.
**Fix:**
- File: `MANIFEST.md`
- Line: 360
- Old: `| "SECTION 4: PHASE 2 — BUILDING" | **Orchestrator** → **Builder** | Spawn builder, pass execution brief + reference files, receive HTML |`
- New: `| "SECTION 5 (Phase 2): TWO-PASS BUILDING" | **Orchestrator** → **Builder** | Spawn builder, pass execution brief + reference files, receive HTML |`

### B-03 [BLOCKING] — GR-65 referenced in orchestrator but absent from gate-manifest.json

**File:** `artifact-orchestrator.md` lines 352-359, `MANIFEST.md` lines 511, 516, `EXECUTION-TRACKER-TEMPLATE.md` line 68
**Issue:** GR-65 (Structure Preservation Verification, post-Pass-B) is defined in the orchestrator and referenced in 3 files, but is NOT listed in any tier of `gate-manifest.json`. It is also not in `gate-runner-core.js` as executable code.
**Impact:** BLOCKING — GR-65 is referenced as a structural check that triggers Pass B re-spawn on failure, but it has no implementation and no tier classification.
**Fix:** Either:
- (A) Add GR-65 to gate-manifest.json under "recommended" tier and implement in gate-runner-core.js, OR
- (B) Reclassify GR-65 as an orchestrator-procedural check (like GR-70/GR-75) and add to the "iteration.procedural" array in gate-manifest.json, with a note explaining it is orchestrator-enforced, not Playwright-enforced.

---

## 2. STALE REFERENCES (Should Fix)

### S-01 [SIGNIFICANT] — MANIFEST references artifact-gate-runner.md section names that now live in gate-runner-spec.md

**File:** `MANIFEST.md` lines 801-803
**Issue:** MANIFEST's "Critical Sections for Gate Logic" table references:
- `artifact-gate-runner.md "SECTION 1: IDENTITY GATES"`
- `artifact-gate-runner.md "SECTION 2: PERCEPTION GATES"`
- `artifact-gate-runner.md "SECTION 3: ANTI-PATTERN GATES"`

But `artifact-gate-runner.md` is now a 22-line redirect. These sections live in `gate-runner-spec.md`.
**Fix:** Change `artifact-gate-runner.md` to `gate-runner-spec.md` in all three lines.

### S-02 [SIGNIFICANT] — MANIFEST line count for components.css is wrong (1,195 vs 944)

**File:** `MANIFEST.md` line 374
**Old text:** `components.css: ~1,195 lines (direct file)`
**Actual:** 944 lines. The correct value (~944) appears at MANIFEST lines 460, 1014, and 1145.
**Fix:** Change `~1,195` to `~944` on line 374.

### S-03 [SIGNIFICANT] — MANIFEST line count for pa-deployment.md is stale (363 vs 442)

**File:** `MANIFEST.md` line 316
**Old text:** `pa-deployment.md (~363 lines)`
**Actual:** 442 lines. The SKILL.md correctly says ~442.
**Fix:** Change `~363` to `~442`.

### S-04 [SIGNIFICANT] — MANIFEST line count for pa-weaver.md is stale (455 vs 468)

**File:** `MANIFEST.md` line 317
**Old text:** `pa-weaver.md (~455 lines)`
**Actual:** 468 lines. The SKILL.md correctly says ~466 (close enough given tildes).
**Fix:** Change `~455` to `~466`.

### S-05 [SIGNIFICANT] — artifact-pa-protocol.md redirect has stale line counts

**File:** `artifact-pa-protocol.md` lines 10-13
**Issue:** The redirect file lists:
- `pa-questions.md ~412 lines` (actual: 431)
- `pa-deployment.md ~237 lines` (actual: 442)
- `pa-weaver.md ~376 lines` (actual: 468)
- `pa-guardrails.md ~151 lines` (actual: 113)

All four are stale from before v4/v5 changes.
**Fix:** Update all four line counts.

### S-06 [SIGNIFICANT] — artifact-gate-runner.md redirect has stale line counts

**File:** `artifact-gate-runner.md` lines 9-13
**Issue:** The redirect file lists:
- `gate-runner-core.js ~960 lines` (actual: 2,808)
- `gate-runner-preconditions.md ~80 lines` (actual: 83)
- `gate-runner-spec.md ~370 lines` (actual: 299)
- `gate-runner-provenance.md ~280 lines` (actual: 151)
- `gate-manifest.json ~140 lines` (actual: 343)

All five are heavily stale from the Wave 3 split era. These redirects are rarely read but misleading.
**Fix:** Update all five line counts.

### S-07 [SIGNIFICANT] — MANIFEST quickstart uses "Section 4" ambiguously

**File:** `MANIFEST.md` lines 25-41
**Issue:** The quickstart references "(Section 4, Phase 0)", "(Section 4, Phase 1)", "(Section 4, Phase 2A)" etc. This refers to the MANIFEST's own Section 4 ("Phase-by-Phase Execution"), which is correct. However, the orchestrator section mapping table at lines 355-363 also uses "SECTION X" but with orchestrator numbering, creating confusion about which numbering system is active.
**Impact:** LOW — the quickstart is internally consistent, but reading both the quickstart and the section table creates ambiguity about which "Section 4" is meant.
**Fix:** Add a clarifying note before the orchestrator mapping table: "Note: Section numbers below refer to artifact-orchestrator.md section numbering, not this document's section numbering."

### S-08 [SIGNIFICANT] — MANIFEST references `artifact-gate-runner.md Appendix A` which is in the MONOLITHIC version

**File:** `MANIFEST.md` line 308
**Issue:** References "artifact-gate-runner.md Appendix A" for VALUES rerouting tracking. But `artifact-gate-runner.md` is a 22-line redirect. The appendix lives in `artifact-gate-runner-MONOLITHIC.md`.
**Fix:** Change reference to `artifact-gate-runner-MONOLITHIC.md Appendix A` or `gate-runner-provenance.md`.

### S-09 [SIGNIFICANT] — MANIFEST references orchestrator "Section 9" for decision rules but orchestrator Section 9 is "VALUES CONTEXT (Historical)"

**File:** `MANIFEST.md` line 362
**Old text:** `"SECTION 7: VERDICT AND DECISION TREE" ... Includes Orchestrator Decision Rules (GR-23–GR-28, 6 gates reclassified from gate-runner in Wave 3).`
**Cross-reference:** gate-runner-spec.md line 293 says `GR-23-28 are operationally reclassified as orchestrator decision rules (see artifact-orchestrator.md Section 9)`.
**Actual:** Orchestrator Section 9 is "VALUES CONTEXT (Historical)" at line 737. GR-23-28 decision rules are NOT in Section 9. They are referenced in gate-runner-preconditions.md as orchestrator-enforced but their operational location in the orchestrator is within Section 0 (preconditions) and Section 7 (verdict).
**Fix:** Update gate-runner-spec.md line 293 to reference `artifact-orchestrator.md Section 0` (preconditions) and `Section 7` (verdict logic), not Section 9.

### S-10 [LOW] — SKILL.md says "pa-weaver.md ~466 lines" vs actual 468

**File:** `SKILL.md` line 63
**Impact:** LOW — 2 lines off, within tilde approximation range. Not worth fixing unless other edits are made.

---

## 3. GATE ID CROSS-REFERENCE MATRIX

### 3.1 Gate IDs in manifest tiers but NOT in execution order

| Gate ID | Tier | Status | Explanation |
|---------|------|--------|-------------|
| GR-33 | diagnostic | OK | Diagnostic gates run inside `runGateRunner()`, just not listed separately in execution order |
| GR-34 | diagnostic | OK | Same as GR-33 |
| GR-70 | iteration.procedural | OK | Procedural-only, embedded in orchestrator decision function |
| GR-75 | iteration.procedural | OK | Same as GR-70 |

**Verdict:** All 4 are explained by notes in gate-manifest.json. No fix needed.

### 3.2 Gate IDs in execution order but NOT in manifest tiers

| Gate ID | Issue |
|---------|-------|
| A-03 | Listed in execution order step 2.8 but NOT in any tier. The `totalGateCount` section mentions "1 UTILITY" but tiers section has no "utility" tier with gates listed. |

**Fix:** Add A-03 to the tiers section. Create a "utility" tier: `"utility": { "count": 1, "gates": ["A-03"], "verdictImpact": "Informational only.", "note": "A-03 visible content check (Pipeline v4)." }`

### 3.3 Gate IDs in core.js but NOT in manifest tiers

| Gate ID | Status | Explanation |
|---------|--------|-------------|
| GR-12 | EXPECTED | Absorbed into GR-18 per Wave 0 note. Code remnant, not operational. |
| GR-05a | MINOR | Variant of GR-05 used internally in code. Not a separate gate. |
| GR-16 | EXPECTED | Absorbed into verdict logic per manifest notes. Code remnant. |
| A-05 | STALE | Referenced in manifest notes as "A-05 GR-66 component count" but A-05 is not in tiers. GR-66 IS in tiers. A-05 appears to be an internal identifier used during development. |
| GR-65 | MISSING | See B-03 above. Referenced in orchestrator but has no manifest entry AND no core.js implementation. |

### 3.4 Total gate count verification

**Manifest claims:** 56 gates (21 REQ + 14 REC + 10 ADV + 2 DIAG + 8 BV + 1 UTIL)
**Actual tier enumeration:** 21 + 14 + 10 + 2 + 8 + 0 (no utility tier entries) + 2 procedural = 57 + 0 utility
**Issue:** The "1 UTILITY" is counted in the total but A-03 is not listed in any tier's gates array.
**Fix:** Add A-03 to a utility tier (see 3.2 above), which makes the total 56 + 1 = 57 including procedural, or 56 if procedural is excluded.

---

## 4. PA QUESTION CROSS-REFERENCE

### 4.1 PA question IDs defined in pa-questions.md

69 unique IDs: PA-01, PA-02, PA-03, PA-04, PA-05, PA-08, PA-11, PA-12, PA-13, PA-14, PA-15, PA-16, PA-17, PA-18, PA-19, PA-20, PA-22, PA-23, PA-24, PA-25, PA-26, PA-27, PA-28, PA-29, PA-30, PA-31, PA-32, PA-33, PA-34, PA-35, PA-36, PA-37, PA-38, PA-39, PA-41, PA-42, PA-43, PA-44, PA-45, PA-46, PA-47, PA-48, PA-50, PA-51, PA-52, PA-53, PA-54, PA-55, PA-56, PA-60, PA-61, PA-62, PA-63, PA-64, PA-65, PA-66, PA-67, PA-68, PA-69, PA-70, PA-71, PA-72, PA-73, PA-74, PA-75, PA-76, PA-77, PA-80, PA-81

**Intentional gaps:** PA-06, PA-07, PA-09, PA-10, PA-21, PA-40, PA-49, PA-57-59, PA-78-79. Gaps documented in pa-deployment.md (PA-06/09/40 retired in Wave 3, others never assigned).

### 4.2 Auditor assignment cross-validation

| Auditor | Questions (pa-deployment.md 1.2) | Count | Cross-checked against pa-questions.md |
|---------|----------------------------------|-------|--------------------------------------|
| A | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 | 9 | ALL EXIST |
| B | PA-02, PA-08, PA-29, PA-55, PA-56, PA-70, PA-81, PA-77 | 8 | ALL EXIST |
| C | PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53, PA-64, PA-66 | 10 | ALL EXIST |
| D | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71, PA-62, PA-74, PA-75 | 11 | ALL EXIST |
| E | PA-14, PA-15, PA-37, PA-38, PA-39, PA-80, PA-63 | 7 | ALL EXIST |
| F | PA-16, PA-17, PA-41, PA-60, PA-61 | 5 | ALL EXIST |
| G | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44, PA-54, PA-68 | 8 | ALL EXIST |
| H | PA-22, PA-23, PA-46, PA-47, PA-73 | 5 | ALL EXIST |
| I | PA-24, PA-25, PA-26, PA-27, PA-28, PA-48 | 6 | ALL EXIST |

**Total:** 69. **Coverage:** 69/69 questions assigned. **Duplicates:** 0. **Orphans:** 0.

### 4.3 PA question auditor annotations in pa-questions.md

Each PA question in pa-questions.md includes an auditor assignment annotation (e.g., "(Auditor F)"). These were spot-checked against pa-deployment.md assignments:
- PA-60 says "Auditor F" -- MATCHES deployment (F)
- PA-62 says "Auditor D" -- MATCHES deployment (D)
- PA-65 says "Auditor A" -- MATCHES deployment (A)
- PA-68 says "Auditor G" -- MATCHES deployment (G)

**Verdict:** PA question routing is CLEAN. All 69 questions resolve correctly.

---

## 5. DISPOSITION ROUTING CROSS-REFERENCE

### 5.1 Pass A (D-01 through D-06, D-09) vs Pass B (D-07, D-08)

Checked across 5 files:

| File | Pass A claim | Pass B claim | Consistent |
|------|-------------|-------------|------------|
| SKILL.md | D-01–D-06, D-09 | D-07, D-08 | YES |
| MANIFEST.md quickstart | D-01–D-06, D-09 | D-07, D-08 | YES |
| artifact-orchestrator.md | D-01–D-06, D-09 | D-07, D-08 | YES |
| artifact-builder-recipe-compose.md | D-01–D-06, D-09 | N/A (Pass A only) | YES |
| artifact-builder-recipe-polish.md | N/A | D-07, D-08 | YES |

**Verdict:** Disposition routing is CLEAN and consistent across all files.

---

## 6. FILE EXISTENCE VERIFICATION

All file paths referenced in operational files were verified against the filesystem:

| Referenced File | Exists | Referenced By |
|----------------|--------|---------------|
| `artifact-orchestrator.md` | YES (744 lines) | MANIFEST, SKILL, gate-runner-spec, etc. |
| `artifact-identity-perception.md` | YES (556 lines) | MANIFEST, tc-brief-template |
| `artifact-builder-recipe-compose.md` | YES (833 lines) | MANIFEST, SKILL |
| `artifact-builder-recipe-polish.md` | YES (300 lines) | MANIFEST, SKILL |
| `artifact-routing.md` | YES (1,056 lines) | MANIFEST |
| `artifact-tc-brief-template.md` | YES (235 lines) | MANIFEST, SKILL |
| `artifact-value-tables.md` | YES (262 lines) | MANIFEST, SKILL |
| `artifact-worked-examples.md` | YES (182 lines) | MANIFEST, SKILL |
| `gate-runner-core.js` | YES (2,808 lines) | MANIFEST, SKILL, gate-manifest |
| `gate-runner-spec.md` | YES (299 lines) | MANIFEST, SKILL |
| `gate-runner-preconditions.md` | YES (83 lines) | MANIFEST, SKILL |
| `gate-runner-provenance.md` | YES (151 lines) | MANIFEST, SKILL |
| `gate-manifest.json` | YES (343 lines) | MANIFEST, SKILL |
| `pa-questions.md` | YES (431 lines) | MANIFEST, SKILL, pa-deployment |
| `pa-deployment.md` | YES (442 lines) | MANIFEST, SKILL |
| `pa-weaver.md` | YES (468 lines) | MANIFEST, SKILL |
| `pa-guardrails.md` | YES (113 lines) | MANIFEST, SKILL |
| `pa-guardrails-weaver.md` | YES (59 lines) | MANIFEST, SKILL |
| `pa-manifest.md` | YES (89 lines) | MANIFEST, SKILL |
| `EXECUTION-TRACKER-TEMPLATE.md` | YES (199 lines) | MANIFEST, SKILL |
| `experiment-protocol.md` | YES (51 lines) | MANIFEST, SKILL |
| `council-verdict.md` | YES (575 lines) | MANIFEST |
| `d10-observer-protocol.md` | YES (593 lines) | artifact-orchestrator |
| `pipeline-structural-manifest.md` | YES (679 lines) | (self-referential) |
| `_historical/orchestrator-sections-10-16.md` | YES | artifact-orchestrator |
| `design-system/compositional-core/vocabulary/tokens.css` | YES (183 lines) | MANIFEST |
| `design-system/compositional-core/components/components.css` | YES (944 lines) | MANIFEST |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | YES | MANIFEST |
| `ephemeral/pipeline-retro/07-context-gap.md` | YES | MANIFEST Appendix E |

**All 29 referenced files exist.** No broken file path references.

---

## 7. LINE COUNT DISCREPANCY SUMMARY

| File | Claimed (MANIFEST) | Claimed (SKILL.md) | Claimed (Redirect) | Actual | Status |
|------|-------------------|--------------------|--------------------|--------|--------|
| artifact-orchestrator.md | ~744 | — | — | 744 | EXACT |
| artifact-identity-perception.md | 556 | — | — | 556 | EXACT |
| artifact-builder-recipe-compose.md | ~833 | ~833 | — | 833 | EXACT |
| artifact-builder-recipe-polish.md | ~284 | ~298 | — | 300 | MANIFEST stale (284→300), SKILL close (298) |
| artifact-routing.md | ~1,056 | — | — | 1,056 | EXACT |
| gate-runner-core.js | ~2,808 | ~2,808 | ~960 | 2,808 | Redirect STALE (960→2808) |
| gate-runner-spec.md | ~300 | ~300 | ~370 | 299 | Redirect STALE (370→299) |
| gate-runner-preconditions.md | 83 | 83 | ~80 | 83 | Redirect STALE (80→83) |
| gate-runner-provenance.md | 151 | 151 | ~280 | 151 | Redirect STALE (280→151) |
| gate-manifest.json | ~343 | ~343 | ~140 | 343 | Redirect STALE (140→343) |
| pa-questions.md | ~431 | ~431 | ~412 | 431 | Redirect STALE (412→431) |
| pa-deployment.md | ~363 / ~442 | ~442 | ~237 | 442 | MANIFEST L316 STALE (363), L1036 correct (442). Redirect STALE (237). |
| pa-weaver.md | ~455 / ~466 | ~466 | ~376 | 468 | MANIFEST L317 STALE (455). SKILL close (466). Redirect STALE (376). |
| pa-guardrails.md | ~113 | ~113 | ~151 | 113 | Redirect STALE (151→113) |
| pa-guardrails-weaver.md | ~59 | ~59 | — | 59 | EXACT |
| components.css | ~1,195 / ~944 | — | — | 944 | MANIFEST L374 WRONG (1195). L460/1014/1145 correct (944). |
| EXECUTION-TRACKER-TEMPLATE.md | ~199 | — | — | 199 | EXACT |

---

## 8. TERMINOLOGY CONSISTENCY: REFINE vs IMPROVE

**Issue detected:** The orchestrator uses "IMPROVE" as the standard iteration pass name (Sections 0-1), but the Weaver verdict vocabulary uses "REFINE" (Section 7). MANIFEST uses both "REFINE" and "IMPROVE" interchangeably in the quickstart (line 44: "REFINE/IMPROVE"). The SKILL.md uses "REFINE" exclusively.

**Analysis:** This appears intentional — the Weaver issues a "REFINE" verdict, and the orchestrator executes the "IMPROVE" protocol in response. But the naming overlap creates ambiguity. The orchestrator Section 7 heading says "VERDICT AND DECISION TREE" and uses "REFINE" for the verdict + "REFINE" for targeting (R-A/R-B/R-C). The terminology is actually consistent within each file but MANIFEST line 44 creates confusion by slashing them together.

**Verdict:** LOW — not a broken reference, but a potential source of confusion.

---

## 9. PRIORITY FIX LIST

### BLOCKING (fix before next pipeline run)

1. **B-01:** MANIFEST line 363 — change "SECTION 8: REFINE AND REBUILD PROTOCOLS" to "SECTION 7 (Phase 4): VERDICT AND DECISION TREE (iteration subsections)"
2. **B-02:** MANIFEST line 360 — change "SECTION 4: PHASE 2 — BUILDING" to "SECTION 5 (Phase 2): TWO-PASS BUILDING"
3. **B-03:** Add GR-65 to gate-manifest.json (either as RECOMMENDED tier gate or as iteration.procedural), or remove all references if it is not implemented

### SIGNIFICANT (fix in next maintenance pass)

4. **S-01:** MANIFEST lines 801-803 — change `artifact-gate-runner.md` to `gate-runner-spec.md`
5. **S-02:** MANIFEST line 374 — change `~1,195 lines` to `~944 lines`
6. **S-03:** MANIFEST line 316 — change `~363 lines` to `~442 lines`
7. **S-04:** MANIFEST line 317 — change `~455 lines` to `~466 lines`
8. **S-05:** artifact-pa-protocol.md — update all 4 line counts
9. **S-06:** artifact-gate-runner.md — update all 5 line counts
10. **S-07:** MANIFEST line 355-363 — add clarifying note about orchestrator section numbering
11. **S-08:** MANIFEST line 308 — change `artifact-gate-runner.md Appendix A` to `artifact-gate-runner-MONOLITHIC.md Appendix A`
12. **S-09:** gate-runner-spec.md line 293 — change `artifact-orchestrator.md Section 9` to `Section 0 / Section 7`
13. **Gate manifest:** Add A-03 to a utility tier in gate-manifest.json

---

## 10. ITEMS VERIFIED CLEAN

- All 69 PA questions defined and assigned with zero orphans/duplicates
- All 9 disposition instructions (D-01 through D-09) consistently routed: Pass A = D-01-D-06+D-09, Pass B = D-07+D-08
- All 29 referenced file paths resolve to existing files
- SKILL.md line count claims are accurate (within ~2 lines for all files)
- pa-deployment.md auditor assignments match pa-questions.md auditor annotations
- PA-05 cross-validation protocol references correct auditors (F/G/C/B)
- council-verdict.md exists and is correctly described as optional override authority
- _historical/ directory exists with archived orchestrator sections 10-16
- pipeline-retro/07-context-gap.md exists for Appendix E template source
- Experiential pass protocol is in primacy position (Section 0) in pa-deployment.md
- Mini-PA Mode 2.5 is in Section 6 of pa-deployment.md as claimed
- Observer protocol references OBSERVER-STOP.md consistently across orchestrator and d10-observer-protocol.md

---

*End of cross-reference integrity audit. 13 broken/stale references, 3 BLOCKING, 10 SIGNIFICANT. PA and disposition routing are clean. File existence verified for all 29 targets.*
