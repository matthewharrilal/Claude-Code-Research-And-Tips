# Buddy Review: Gate Runner Changes
Reviewer: pa-fixer (Opus 4.6)
Date: 2026-02-25
Reviewing: gate-runner-fixer's changes to gate-runner-core.js, gate-runner-spec.md, gate-manifest.json
Changelog: ephemeral/pipeline-surgery/cleanup-gate-runner-changelog.md

---

## 1. SYNTAX VERIFICATION

- `node --check gate-runner-core.js` -- PASS (no syntax errors)
- `JSON.parse(gate-manifest.json)` -- PASS (valid JSON)

---

## 2. GATE COUNT ARITHMETIC

### Header Comment (core.js lines 18-23)
- "36 GR (in this file)" -- VERIFIED. Grep for `gate: 'GR-` produces 36 unique GR-* IDs (GR-01 through GR-64, including GR-05b). Duplicates (GR-61, GR-64 appearing in multiple code branches) are correctly deduplicated.
- "4 BV (in this file)" -- VERIFIED. BV-01 through BV-04 present in `runBriefVerification()`.
- "40 in-file executable + 2 diagnostic = 42 total" -- CORRECT.
- "REQUIRED (20)" -- VERIFIED. Listed gates: GR-01-06 (6) + GR-08-11 (4) + GR-13-15 (3) + GR-44 + GR-60 + GR-61 + GR-62 + GR-63 + GR-64 + GR-48 = 20.
- "RECOMMENDED (9)" -- VERIFIED. GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 = 9.
- "ADVISORY (7)" -- VERIFIED. GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 = 7.

### GR-48 Coverage Array (core.js lines 1374-1380)
- Array contains 19 gates (excludes GR-48 itself). CORRECT.
- Comment says "19 REQUIRED gates (not counting GR-48 itself)." CORRECT.
- Threshold string: `'19/19 (100%)'`. CORRECT.
- RECOMMENDED array: 9 gates. Comment says "9 RECOMMENDED." CORRECT.

### Manifest (gate-manifest.json)
- `tiers.required.count`: 20 -- MATCHES code.
- `tiers.required.gates`: 20 items -- MATCHES code.
- `tiers.recommended.count`: 9 -- MATCHES code.
- `tiers.recommended.gates`: 9 items -- MATCHES code.
- `tiers.advisory.count`: 7 -- MATCHES.
- `totalGateCount.inGateRunner`: 36 -- MATCHES grep count.
- `totalGateCount.total`: 42 -- MATCHES.
- `coverageStatus.requiredPresent`: "19/19" -- MATCHES GR-48 array.

### Spec (gate-runner-spec.md)
- Categorization table: 20 REQUIRED, 9 RECOMMENDED, 7 ADVISORY. MATCHES.
- Line 23: "Total executable gates: 42" -- MATCHES.
- Line 217: "20 REQUIRED, 9 RECOMMENDED, 7 ADVISORY, 2 DIAGNOSTIC, 4 BRIEF = 42" -- CORRECT arithmetic.
- Summary table (lines 172-215): 44 rows total. Counted by tier: 4 BV + 9 REQUIRED identity + 6 REQUIRED perception + 6 anti-pattern (2 REC, 1 ADVISORY, 1 REC, 2 ADVISORY) + 2 RECOMMENDED output + 2 ADVISORY mode detection + 7 Wave 2 (mixed tiers) + 4 REQUIRED experiential + 4 BV = matches. All tiers labeled correctly in table.

**VERDICT: All gate count arithmetic is consistent across all 3 files.** PASS.

---

## 3. GR-63/GR-64 PROMOTION

### GR-63
- core.js header: Listed under REQUIRED (line 19). CORRECT.
- core.js REQUIRED_GATES array (line 1379): Contains 'GR-63'. CORRECT.
- core.js verdict logic (line 848): `else if (experientialFail) verdict = 'REFINE';` CORRECT.
- core.js GR-63 comment (line 791): "Tier: REQUIRED." CORRECT.
- Manifest tiers.required.gates: Contains "GR-63". CORRECT.
- Manifest verdictImpact: "GR-63 FAIL = REFINE (send to builder)." CORRECT.
- Manifest verdict logic: "GR-63 FAIL (experiential marker)" under REFINE. CORRECT.
- Spec categorization table: GR-63 listed with count 20. CORRECT.
- Spec verdict logic (line 55): "GR-63 FAIL = REFINE." CORRECT.
- Spec Section 7 (line 153): "REQUIRED." CORRECT.
- Spec summary table (line 214): GR-63 | Experiential | REQUIRED. CORRECT.
- Spec blocking behavior (line 165): "GR-63 FAIL = REFINE verdict." CORRECT.

**GR-63 promotion: FULLY PROPAGATED.** PASS.

### GR-64
- core.js header: Listed under REQUIRED (line 19). CORRECT.
- core.js REQUIRED_GATES array (line 1379): Contains 'GR-64'. CORRECT.
- core.js GR-64 function comment (line 1561): "Tier: REQUIRED." CORRECT.
- core.js GR-64 decision rule (line 1562): "If GR-64 FAIL and weaver verdict is SHIP or SHIP WITH FIXES, downgrade to REFINE." CORRECT.
- core.js GR-64 note output (line 1609): Includes decision rule text. CORRECT.
- Manifest tiers.required.gates: Contains "GR-64". CORRECT.
- Manifest verdictImpact: Mentions GR-64 FAIL + SHIP = downgrade. CORRECT.
- Manifest verdictLogic.REFINE: Mentions GR-64. CORRECT.
- Manifest executionOrder step 5.5 note: "REQUIRED." CORRECT.
- Spec categorization table: GR-64 included in 20 REQUIRED. CORRECT.
- Spec verdict logic (line 56): "GR-64 FAIL = if weaver verdict is SHIP or SHIP WITH FIXES, downgrade to REFINE." CORRECT.
- Spec Section 7 (line 154): "REQUIRED." CORRECT.
- Spec summary table (line 215): GR-64 | Experiential | REQUIRED. CORRECT.
- Spec blocking behavior (line 166): Decision rule documented. CORRECT.

**GR-64 promotion: FULLY PROPAGATED.** PASS.

---

## 4. DPR FIX (GR-61)

- Old behavior (dividing viewport by DPR): REMOVED. CORRECT.
- New behavior: Returns FAIL with instruction to recreate browser context with `{ deviceScaleFactor: 1 }`. CORRECT.
- Comment explains why viewport division is wrong (line 1483-1484): "Playwright viewport is already in CSS pixels, so do NOT divide viewport dimensions by DPR." CORRECT.
- Still reports viewport dimensions for debugging (line 1495). GOOD.
- Does NOT attempt to modify viewport. CORRECT (viewport cannot be "fixed" after context creation).
- Spec GR-61 description (line 151): Updated to match. CORRECT.

**DPR fix: CORRECT and does not break screenshot workflow.** PASS.

---

## 5. BV-02 SCOPING LOGIC

- Regex pattern `/(?:Zone\s*Backgrounds?|...)([\s\S]*?)(?=^#+\s|\n---|\n\*\*[A-Z]|$)/im` -- uses multiline flag for `^` anchor. CORRECT.
- Uses `bgSectionMatch[0]` (full match including header). CORRECT -- hex values may appear in the header line itself.
- Fallback to full brief text if no section found. CORRECT -- prevents false negatives from missing section headers.
- `scopedToSection: !!bgSectionMatch` in result object. CORRECT -- provides transparency.
- Warning note when using fallback. CORRECT.
- Still checks ADJACENT pairs only (sequential hex values). The comparison logic `hexValues[i]` vs `hexValues[i+1]` is unchanged and correct.

**BV-02 scoping: CORRECT.** PASS.

---

## 6. FINDINGS

### SIGNIFICANT (2)

**F-1: Stale tier label in manifest executionOrder step 2 note.**
File: `gate-manifest.json`, line 84
Text: `"GR-63 (RECOMMENDED, Wave 4) checks for builder experiential marker HTML comment."`
Should be: `"GR-63 (REQUIRED, Wave 4)"`
Impact: An orchestrator reading the manifest executionOrder would see GR-63 labeled RECOMMENDED, contradicting the tier definition 60 lines above. Confusion only -- the actual code behavior is correct.

**F-2: Stale GR-48 self-reference count in manifest notes.**
File: `gate-manifest.json`, line 195
Text: `"GR-48 is self-referential: excluded from its own REQUIRED_GATES coverage array (17 gates) but counted in tier total (18)"`
Should be: `"... coverage array (19 gates) but counted in tier total (20)"`
Impact: The note describes the old pre-promotion state (17 required gates in the array, 18 total). The actual code has 19 in the array and 20 total. A reader verifying the self-referential exclusion would get confused.

### MINOR (2)

**F-3: Cross-file stale reference: pa-weaver.md Section 5.0 renamed to 4.5.**
Files: `gate-runner-core.js` lines 1560 and 1609, `gate-manifest.json` line 131
Text: `"pa-weaver.md Section 5.0"` (3 occurrences)
Should be: `"pa-weaver.md Section 4.5"`
Impact: The PA fixer (me) renumbered Section 5.0 to 4.5 in pa-weaver.md. These cross-file references are now stale. The content still exists (just renumbered), so the impact is navigational only.

**F-4: Manifest executionOrder step 5 gate list is informal.**
File: `gate-manifest.json`, line 122
Text: `"GR-01 through GR-15 (minus GR-12), GR-60, GR-44, GR-43, GR-63, GR-07 (re-run)"`
This is a prose description, not a proper array like the other steps. It also mentions "(re-run)" which is ambiguous -- does it mean GR-07 is re-run specifically, or all gates are re-run? Low impact since this is documentation only.

---

## 7. OVERALL VERDICT

**PASS WITH 2 SIGNIFICANT AND 2 MINOR FINDINGS.**

The gate-runner changes are correct in their primary objectives:
- Gate counts reconciled and consistent across all 3 files
- GR-63/GR-64 fully promoted to REQUIRED with verdict logic
- DPR fix is architecturally correct
- BV-02 scoping prevents false positives while maintaining fallback
- GR-63 regex tightened (minLength 100, visual clarity + structural ref required)
- GR-62 minimum file count prevents false-positive empty directory

The 2 SIGNIFICANT findings are stale notes in gate-manifest.json that need updating. The 2 MINOR findings are cross-file reference staleness (introduced by the PA fixer's renumbering, not by the gate-runner fixer's changes).

**Recommended fixes (all in gate-manifest.json):**
1. Line 84: Change "RECOMMENDED" to "REQUIRED" in GR-63 note
2. Line 195: Change "(17 gates)" to "(19 gates)" and "(18)" to "(20)"
3. Line 131: Change "Section 5.0" to "Section 4.5" (also fix core.js lines 1560/1609)
