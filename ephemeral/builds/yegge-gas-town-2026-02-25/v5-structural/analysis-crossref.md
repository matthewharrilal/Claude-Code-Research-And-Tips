# Cross-Reference Integrity Analysis — Pipeline v5

**Date:** 2026-02-26
**Analyst:** crossref-analyst (Opus)
**Scope:** BLOCK-02, BLOCK-03, BLOCK-04, SIG-07, SIG-08, SIG-14, SIG-15
**Status:** ANALYSIS ONLY — no files modified

---

## BLOCK-02: MANIFEST Section Number Mismatches

### Current State

MANIFEST.md lines 349-365 contain the artifact-orchestrator.md routing table. The artifact-orchestrator.md has the following section structure:

| Section | Header | Orchestrator Line |
|---------|--------|-------------------|
| 0 | MASTER EQUATION AND PRECONDITIONS | 22 |
| 1 | TOPOLOGY AND ARCHITECTURE | 66 |
| 2 | PHASE 0 — CONTENT ANALYSIS | 159 |
| 3 | PHASE 1 — BRIEF ASSEMBLY | 200 |
| 4 | PHASE 1.5 — MODE SELECTION | 243 |
| 5 | PHASE 2 — TWO-PASS BUILDING | 282 |
| 6 | PHASE 3 — PERCEPTUAL AUDIT | 367 |
| 7 | PHASE 4 — VERDICT AND DECISION TREE | 459 |
| 8 | TOTAL BUILD SUMMARY | 721 |
| 9 | VALUES CONTEXT (Historical) | 739 |

**Error on line 359:**
```
| Mode Selection (within SECTION 3) | **Orchestrator** | Select APPLIED or COMPOSED based on content affordance. Builder receives ONE mode — implicit in recipe format, not as a label. |
```

Mode Selection is NOT "within SECTION 3." It is its own section: **SECTION 4 (Phase 1.5): MODE SELECTION** (orchestrator line 243). MANIFEST jumps from SECTION 3 (line 358) to SECTION 5 (line 360), omitting SECTION 4 entirely.

Lines 360 and 362-363 are actually CORRECT (SECTION 5 and SECTION 7 match their orchestrator counterparts). The mismatch is isolated to line 359.

### Proposed Fix

**MANIFEST.md line 359** — replace:
```
| Mode Selection (within SECTION 3) | **Orchestrator** | Select APPLIED or COMPOSED based on content affordance. Builder receives ONE mode — implicit in recipe format, not as a label. |
```
with:
```
| "SECTION 4 (Phase 1.5): MODE SELECTION" | **Orchestrator** | Select APPLIED or COMPOSED based on content affordance. Builder receives ONE mode — implicit in recipe format, not as a label. |
```

### Regression Risk
LOW. This is a documentation-only change in a routing table. No executable code or agent prompts reference this line.

### Dependencies
None.

### Verification
After fix: `grep "SECTION 4" MANIFEST.md` should return matches including this routing table row. Verify no row references "within SECTION 3" for Mode Selection.

---

## BLOCK-03: GR-65 Phantom Gate

### Current State

GR-65 (Structure Preservation Verification) is referenced in 4 locations:

1. **artifact-orchestrator.md lines 352-359** — Full definition:
   ```
   ### GR-65: Structure Preservation Verification (post-Pass-B)
   After Pass B completes, run GR-65 to verify Pass B preserved Pass A's structure:
   - Same `<section>` count
   - Same heading hierarchy (h1, h2, h3, h4 sequence matches)
   - Grid-template-columns preserved
   If GR-65 FAILS: discard Pass B output, re-spawn with escalated instructions. Max 1 retry.
   ```

2. **MANIFEST.md line 511:** `Pass B Builder preserves Pass A's section count, heading hierarchy, and grid-template-columns (verified post-build by GR-65).`

3. **MANIFEST.md line 516:** `**GR-65 Structure Preservation (post-Pass-B):** Orchestrator verifies Pass B preserved Pass A's section count, heading hierarchy, and grid-template-columns. FAIL = re-spawn Pass B with explicit preservation instruction.`

4. **EXECUTION-TRACKER-TEMPLATE.md line 68:** `- GR-65 structure preservation: ___ (auto: PASS/FAIL)`

5. **gate-manifest.json lines 85-86** — Listed under `tiers.iteration.procedural`:
   ```json
   "procedural": ["GR-65", "GR-70", "GR-75"],
   "note": "GR-65 is orchestrator-procedural: post-Pass-B structure preservation..."
   ```

**GR-65 has NO entry in gate-manifest.json `tiers.required/recommended/advisory` arrays.**
**GR-65 has NO implementation in gate-runner-core.js** (`grep "GR-65" gate-runner-core.js` returns zero matches).
**GR-65 IS listed in gate-manifest.json `tiers.iteration.procedural`** alongside GR-70 and GR-75.

### Analysis

GR-65 is deliberately classified as "orchestrator-procedural" — it is a manual comparison check the orchestrator performs (compare Pass A vs Pass B section count, heading hierarchy, grid-template-columns). It is NOT a Playwright gate, NOT executed by gate-runner-core.js, and NOT counted in the 56-gate total. This is the same classification as GR-70 (PA-05 non-regression) and GR-75 (iteration counter), which are also procedural checks embedded in the orchestrator's decision function.

The current state is **intentionally designed** — GR-65 is procedural, not programmatic. The "phantom" appearance is because it's categorized separately from the tier arrays.

### Proposed Fix: DOCUMENT (no removal needed)

GR-65's status is already clarified in gate-manifest.json line 86. However, two improvements would reduce confusion:

**1. gate-runner-spec.md** — Add a note in the GATE SUMMARY TABLE (after line 289) or in the NOTE on line 293:

Add after the existing NOTE paragraph on line 293:
```
**Orchestrator-procedural gates (GR-65, GR-70, GR-75):** These are NOT executable gates. They are manual orchestrator checks embedded in artifact-orchestrator.md Sections 5 and 7. They do NOT appear in tier arrays or gate-runner-core.js. GR-65 compares Pass A vs Pass B structure. GR-70 checks PA-05 non-regression. GR-75 enforces iteration counter.
```

**2. gate-manifest.json** — The `totalGateCount` section (line 313+) should explicitly note that procedural gates are not included in the 56 total. Current text mentions this implicitly but could be clearer. Add to the `note` field:

Add to the existing `totalGateCount.note` (line 322), append:
```
Procedural-only gates (GR-65, GR-70, GR-75) are NOT counted in these totals — they are orchestrator manual checks, not executable code.
```

### Regression Risk
LOW. Documentation-only. No executable code changes.

### Dependencies
None.

### Verification
After fix: `grep -c "GR-65" gate-runner-spec.md` should return >= 2 (existing line 293 reference + new explanatory note). `grep "procedural" gate-manifest.json` should confirm existing classification.

---

## BLOCK-04: Background Delta Floor Contradiction

### Current State

Four documents reference different RGB delta values:

| Document | Line | Text | Value | Role |
|----------|------|------|-------|------|
| artifact-builder-recipe-compose.md | 115 | "20 RGB delta = BUILDER MINIMUM for adjacent zones (gate floor is 15, but 15-19 feels flat)" | 20 RGB | Builder compositional guidance |
| artifact-tc-brief-template.md | 45 | "Adjacent backgrounds differ by at least 15 RGB points... 15 is the floor, not the target. Calibration: 15 = subtle, 25 = confident, 50 = dramatic." | 15 RGB (floor) | Builder calibration |
| gate-runner-spec.md (GR-11) | 100 | "Adjacent zone bg delta >= 15 RGB" | 15 RGB | Gate pass/fail threshold |
| gate-runner-spec.md (GR-51) | 152 | ">= 50% of deltas >= 25 RGB" | 25 RGB | Distribution target |
| artifact-tc-brief-template.md | 92 | "Every delta >= 15 RGB (perception floor). Compositional target: >= 25 RGB at 3+ boundaries." | 15 floor, 25 target | Zone background rules |
| artifact-builder-recipe-compose.md | 116-117 | "25 RGB delta = COMPOSITIONAL TARGET... 50+ RGB delta = DRAMATIC" | 25 target, 50 dramatic | Builder guidance |

### Analysis

These values are NOT contradictory — they form an intentional 3-tier system:

| Tier | Value | Document | Purpose |
|------|-------|----------|---------|
| **GATE FLOOR** | >= 15 RGB | GR-11, tc-brief-template | Binary pass/fail. Below 15 = imperceptible. |
| **BUILDER MINIMUM** | >= 20 RGB | recipe-compose | Compositional guidance. 15-19 passes the gate but "feels flat." Builder should aim higher. |
| **DISTRIBUTION TARGET** | >= 25 RGB at 50%+ boundaries | GR-51, tc-brief-template | Half or more boundaries should reach "confident" intensity. |

The recipe says "gate floor is 15, but 15-19 feels flat" — this explicitly acknowledges the gate floor (15) while recommending a higher builder target (20). This is intentional layering: the gate catches perceptual invisibility, the recipe guides toward compositional quality.

### Proposed Fix: MINOR CLARIFICATION ONLY

The system is coherent. The only improvement is making the tc-brief-template.md calibration range align with the recipe's "20 = builder minimum" guidance. Currently the template jumps from 15 to 25 without mentioning 20.

**artifact-tc-brief-template.md line 45** — replace:
```
Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them. 15 is the floor, not the target. Calibration: 15 = subtle, 25 = confident, 50 = dramatic. Use the full range.
```
with:
```
Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them. 15 is the floor, not the target. Calibration: 15 = subtle (floor), 20 = minimum compositional (aim here), 25 = confident, 50 = dramatic. Use the full range.
```

### Regression Risk
LOW. Adds one calibration point to builder guidance. Does not change any gate threshold.

### Dependencies
None. The gate thresholds (GR-11 at 15, GR-51 at 25) are unchanged.

### Verification
After fix: `grep "20 = minimum" artifact-tc-brief-template.md` should return 1 match. Verify GR-11 threshold remains 15 in gate-runner-spec.md. Verify GR-51 threshold remains 25.

---

## SIG-07: 9 Stale Line Counts in Redirect Files

### Current State

**artifact-pa-protocol.md** (redirect file) contains this table:

| File | Stated Lines | Actual Lines (wc -l) | Delta |
|------|-------------|---------------------|-------|
| pa-questions.md | ~431 | 431 | 0 (CORRECT) |
| pa-deployment.md | ~442 | 442 | 0 (CORRECT) |
| pa-weaver.md | ~466 | 468 | +2 |
| pa-guardrails.md | ~113 | 113 | 0 (CORRECT) |
| pa-manifest.md | ~89 | 89 | 0 (CORRECT) |

Note: artifact-pa-protocol.md has only 5 file entries (no pa-guardrails-weaver.md listed in its table). pa-guardrails-weaver.md actual lines: 59.

**artifact-gate-runner.md** (redirect file) contains this table:

| File | Stated Lines | Actual Lines (wc -l) | Delta |
|------|-------------|---------------------|-------|
| gate-runner-core.js | ~2,930 | 2,929 | -1 |
| gate-runner-preconditions.md | ~83 | 83 | 0 (CORRECT) |
| gate-runner-spec.md | ~300 | 299 | -1 |
| gate-runner-provenance.md | ~151 | 151 | 0 (CORRECT) |
| gate-manifest.json | ~344 | 343 | -1 |

### Analysis

Most counts are accurate or off by 1-2 lines (within `~` approximation tolerance). Only pa-weaver.md is off by 2 lines. The `~` prefix on all values indicates these are approximations. The deltas are trivial.

However, the redirect files should be accurate since they serve as routing documents. Two files also have structural issues:
- artifact-pa-protocol.md omits pa-guardrails-weaver.md from its table (6 files exist, only 5 listed)
- artifact-gate-runner.md line 21 says "31 gates remain in gate-runner scope" but the current count is 45 GR gates in core.js (per line 29 of gate-runner-core.js: "45 GR + 8 BV + 1 utility (A-03) = 54")

### Proposed Fixes

**artifact-pa-protocol.md:**

1. Line 11 — change `~466` to `~468`:
```
| `pa-weaver.md` | Weaver protocol, verdicts, calibration (INFORMATION ISOLATION) | ~468 | Weaver ONLY |
```

2. Add missing row after line 12 (pa-guardrails.md row):
```
| `pa-guardrails-weaver.md` | Weaver/Orchestrator-only guardrails | ~59 | Weaver, Orchestrator (NOT PA Auditors) |
```

3. Line 1 — change "5 operational files" to "6 operational files":
```
**This file has been split into 6 operational files per FIX-091 (2026-02-24).**
```

**artifact-gate-runner.md:**

1. Line 9 — change `~2,930` to `~2,929`:
```
| `gate-runner-core.js` | All executable Playwright JavaScript code | ~2,929 |
```

2. Line 11 — change `~300` to `~299`:
```
| `gate-runner-spec.md` | Human-readable gate specifications (no code) | ~299 |
```

3. Line 13 — change `~344` to `~343`:
```
| `gate-manifest.json` | JSON table of contents, tier breakdown, execution order | ~343 |
```

4. Line 21 — change "31 gates remain in gate-runner scope" to "45 GR gates + 8 BV + 1 utility (A-03) = 54 executable gates in gate-runner scope":
```
- 45 GR gates + 8 BV + 1 utility in gate-runner scope (Playwright + text-executable)
```

### Regression Risk
LOW. Documentation-only. Line counts are informational.

### Dependencies
The gate count fix on artifact-gate-runner.md line 21 depends on no new gates being added. Current state: 45 GR + 8 BV + 1 utility = 54 in core.js, 56 total with 2 diagnostic.

### Verification
After fix: `wc -l pa-weaver.md` should match the stated count. `grep "6 operational files" artifact-pa-protocol.md` should return 1 match. `grep "pa-guardrails-weaver" artifact-pa-protocol.md` should return 1 match.

---

## SIG-08: MANIFEST Gate File References Stale

### Current State

MANIFEST.md Section 7 "Critical Sections Index" (lines 797-804) contains gate runner file references:

**Lines 801-803:**
```
| gate-runner-spec.md | "SECTION 1: IDENTITY GATES" (GR-01–GR-10) | ANY fail = REBUILD |
| gate-runner-spec.md | "SECTION 2: PERCEPTION GATES" (GR-11–GR-15, GR-44, GR-60) | ANY fail = REFINE |
| gate-runner-spec.md | "SECTION 3: ANTI-PATTERN GATES" (GR-17–GR-22) | 3+ fail = REBUILD |
```

These reference `gate-runner-spec.md` with section headers. Verified against gate-runner-spec.md:
- Line 76: "## SECTION 1: IDENTITY GATES (REQUIRED)" — MATCH
- Line 96: "## SECTION 2: PERCEPTION GATES (REQUIRED)" — MATCH
- Line 113: "## SECTION 3: ANTI-PATTERN GATES" — MATCH

**These references are CORRECT.** The file name `gate-runner-spec.md` is the current split file, and the section headers exist there. The task brief suggested these still referenced `artifact-gate-runner.md`, but they have already been updated to `gate-runner-spec.md`.

**Line 308 "Appendix A" reference:** The task brief claims line 308 references "Appendix A" that exists only in a monolithic version. Let me check.

MANIFEST.md line 308 reads:
```
**VALUES REROUTING (34 items):** Per council verdict Pattern 5, 34 Layer 5 VALUES items originally classified as GATE-RUNNER were rerouted AWAY from the gate runner: 15 to ORCHESTRATOR (planning/calibration), 10 to PA_AUDITOR (quality assessment framework), 9 to DOCUMENTATION (historical data). These are tracked in gate-runner-provenance.md.
```

Line 308 does NOT reference "Appendix A." Searching MANIFEST.md for "Appendix A": it appears only on line 915 as "## Appendix A: Evidence Taxonomy" — which is a section within MANIFEST.md itself, not a reference to a monolithic file.

**Conclusion: SIG-08 findings are NOT confirmed.** Lines 801-803 correctly reference `gate-runner-spec.md`. Line 308 does not reference "Appendix A." The references appear to have been updated in a prior wave.

### Proposed Fix
NONE NEEDED. References are already correct.

### Regression Risk
N/A.

### Dependencies
N/A.

### Verification
Confirm: `grep "gate-runner-spec.md" MANIFEST.md` returns the 3 rows in the critical sections index. `grep "artifact-gate-runner.md" MANIFEST.md` should return only the redirect/historical references (line 273, 283, 300) — NOT the critical sections index.

---

## SIG-14: Orchestrator Section Reference Wrong Number

### Current State

**gate-runner-spec.md line 293:**
```
**NOTE (FIX-094):** GR-23 through GR-28 (precondition gates) and GR-33, GR-34 (mode detection) are documented here for reference. GR-23-28 are operationally reclassified as orchestrator decision rules (see `artifact-orchestrator.md` Section 0 for preconditions and Section 7 for verdict logic). GR-33 and GR-34 remain in gate-runner as ADVISORY diagnostic gates with Playwright code.
```

This says GR-23-28 are in "Section 0 for preconditions and Section 7 for verdict logic."

**gate-manifest.json line 327:**
```
"GR-23-28 reclassified to orchestrator Section 0 (preconditions) and Section 7 (verdict logic) (FIX-094)"
```

Same claim: split between Section 0 and Section 7.

**Actual location in artifact-orchestrator.md:**

GR-23 through GR-28 are ALL defined in **Section 7** (line 677):
```
### Orchestrator Decision Rules (formerly GR-23 through GR-28) — Reclassified Wave 3 (FIX-094, FIX-098)
```

**Section 0** (line 22) contains the master equation, VALUES context, standard path, and input preconditions — but NOT GR-23-28 definitions.

The "Section 0 for preconditions" phrasing is misleading. While Section 0 has general preconditions, GR-23-28 are NOT there. They are ALL in Section 7.

**Note:** The task brief stated "Section 9" as the wrong reference, but the actual text says "Section 0" — which is a different kind of wrong. Section 9 is VALUES CONTEXT (Historical), and the reference does NOT point there.

### Proposed Fix

**gate-runner-spec.md line 293** — replace:
```
GR-23-28 are operationally reclassified as orchestrator decision rules (see `artifact-orchestrator.md` Section 0 for preconditions and Section 7 for verdict logic).
```
with:
```
GR-23-28 are operationally reclassified as orchestrator decision rules (see `artifact-orchestrator.md` Section 7 "Orchestrator Decision Rules").
```

**gate-manifest.json line 327** — replace:
```
"GR-23-28 reclassified to orchestrator Section 0 (preconditions) and Section 7 (verdict logic) (FIX-094)"
```
with:
```
"GR-23-28 reclassified to orchestrator Section 7 (Orchestrator Decision Rules) (FIX-094)"
```

### Regression Risk
LOW. Documentation-only. The actual GR-23-28 definitions in artifact-orchestrator.md Section 7 are unchanged.

### Dependencies
None.

### Verification
After fix: `grep "Section 0" gate-runner-spec.md` should return 0 matches related to GR-23-28. `grep "Section 7" gate-runner-spec.md` should confirm the updated reference. Similarly for gate-manifest.json.

---

## SIG-15: A-03 Not Listed in Gate Manifest Tiers

### Current State

**A-03 (Visible Content Check)** exists in:

1. **gate-runner-core.js** — Implemented at line 2681+:
   ```javascript
   // A-03: checkVisibleContent(screenshotDir)
   ```
   Returns result with `gate: 'A-03', name: 'Visible Content Check'` (line 2709).

2. **gate-manifest.json executionOrder** — Listed at step 2.8:
   ```json
   {
     "step": 2.8,
     "phase": "Post-screenshot (visible content check)",
     "function": "checkVisibleContent(screenshotDir)",
     "gates": ["A-03"],
     "note": "Pipeline v4: A-03 visible content check. WARNING if >= 3 consecutive screenshots < 5KB."
   }
   ```

3. **gate-manifest.json totalGateCount** — Referenced in the note (line 322):
   ```
   "utility": 1
   ```
   and in the grandTotal note: "+1 utility (A-03)"

4. **gate-runner-spec.md** — Listed in SECTION 8 table (line 191):
   ```
   | A-03 | Visible Content Check | UTILITY | No 3+ consecutive screenshots < 5KB in any viewport directory | OBSERVED |
   ```
   And in the GATE SUMMARY TABLE (line 280):
   ```
   | A-03 | Visible Content | UTILITY | Post-screenshot | Node.js filesystem |
   ```

**A-03 is NOT in any tier array** in gate-manifest.json (`tiers.required`, `tiers.recommended`, `tiers.advisory`, `tiers.briefVerification`, `tiers.diagnosticOnly`). It has its own implicit "utility" category but no explicit tier listing.

### Analysis

A-03 is classified as UTILITY — it's not REQUIRED, RECOMMENDED, ADVISORY, BV, or DIAGNOSTIC. It's a standalone check that returns WARNING, not PASS/FAIL. The gate-manifest.json `totalGateCount` accounts for it: "1 utility" contributes to the 56 total.

The issue is that no `tiers.utility` array exists in gate-manifest.json. The tier structure has `required`, `recommended`, `advisory`, `briefVerification`, `diagnosticOnly`, and `iteration` — but no `utility`.

### Proposed Fix

**gate-manifest.json** — Add a `utility` tier after `diagnosticOnly` (after line 80):

```json
"utility": {
  "count": 1,
  "gates": ["A-03"],
  "verdictImpact": "WARNING only. Does not block or flag.",
  "note": "Pipeline v4: A-03 visible content check. If WARNING, record in execution tracker and consider REFINE before PA deployment."
}
```

### Regression Risk
LOW. Adding a tier array is additive — no existing code or references change. GR-48 coverage check excludes utility gates (it checks REQUIRED gates only), so this addition does not affect GR-48 logic.

### Dependencies
None.

### Verification
After fix: `grep "A-03" gate-manifest.json` should return matches in both the `utility` tier and the `executionOrder`. The `totalGateCount.utility` field (value: 1) should match the new `tiers.utility.count` (value: 1).

---

## Summary Table

| Issue | Severity | Fix Complexity | Files Modified | Depends On |
|-------|----------|---------------|----------------|------------|
| BLOCK-02: MANIFEST section mismatch | BLOCKING | 1 line | MANIFEST.md | None |
| BLOCK-03: GR-65 phantom gate | BLOCKING | 2 additions (clarifying notes) | gate-runner-spec.md, gate-manifest.json | None |
| BLOCK-04: Background delta contradiction | BLOCKING | 1 line | artifact-tc-brief-template.md | None |
| SIG-07: Stale line counts | SIGNIFICANT | 7 line edits | artifact-pa-protocol.md, artifact-gate-runner.md | None |
| SIG-08: MANIFEST gate file refs | SIGNIFICANT | **NONE NEEDED** (already correct) | None | None |
| SIG-14: Orchestrator section ref | SIGNIFICANT | 2 line edits | gate-runner-spec.md, gate-manifest.json | None |
| SIG-15: A-03 tier listing | SIGNIFICANT | 1 JSON block addition | gate-manifest.json | None |

**Total changes:** 6 files affected, ~15 line edits, 0 executable code changes, 0 inter-issue dependencies.

**All fixes are documentation-only.** No gate thresholds, no executable JavaScript, no agent prompt templates are modified.
