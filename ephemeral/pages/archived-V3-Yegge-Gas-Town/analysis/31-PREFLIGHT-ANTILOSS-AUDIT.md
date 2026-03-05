# MUST-00 Pre-Flight Anti-Loss Audit
**Date:** 2026-02-25
**Auditor:** Pre-flight agent (Opus)
**Scope:** 8 HIGH RISK anti-loss mechanisms across 10 pipeline spec files
**Status:** READ-ONLY audit — no edits made

---

## Baseline Line Counts (Pre-Surgery)

| # | File | Lines | Notes |
|---|------|-------|-------|
| 1 | MANIFEST.md | 1,192 | Master orchestration spec |
| 2 | gate-runner-core.js | 1,436 | Executable Playwright JS (6 functions) |
| 3 | pa-deployment.md | 237 | Auditor assignments + screenshot protocol |
| 4 | pa-questions.md | 418 | 69 PA question definitions |
| 5 | pa-weaver.md | 376 | Weaver protocol (INFORMATION ISOLATION) |
| 6 | artifact-builder-recipe.md | 934 | Scaffolding + Disposition recipe (Layers 3-4) |
| 7 | gate-manifest.json | 159 | JSON TOC, tiers, execution order |
| 8 | gate-runner-spec.md | 188 | Human-readable gate specifications |
| 9 | artifact-orchestrator.md | 1,058 | Master control document for orchestrator |
| 10 | EXECUTION-TRACKER-TEMPLATE.md | 327 | Per-build accountability tracking |
| | **TOTAL** | **6,325** | |

---

## M-04: Information Isolation

**Mechanism:** Gate thresholds (PASS/FAIL format) must NOT appear in auditor-facing files. Calibration data must NOT reach builders as binary thresholds.

### Check 1: pa-questions.md — auditor-facing content

**Status: WARNING**

**Finding:** pa-questions.md Section 4 (lines 310-416) contains quality framework content explicitly marked as WEAVER AND ORCHESTRATOR USE ONLY:

> Line 312-316: `> **WARNING — WEAVER AND ORCHESTRATOR USE ONLY (FIX-084 extension)**`
> `> This section contains tier definitions, PA-05 score ranges, and quality targets.`
> `> It MUST NOT be included in PA Auditor A-I prompts`

The file CORRECTLY includes this warning. However, the **structural risk** is that Section 4 lives in the same file (pa-questions.md) that auditors receive subsets of. The warning at line 312-316 says "The orchestrator MUST send only Sections 1-3 + Appendices A-B to auditors" — this is the correct isolation instruction.

**Appendix A** (lines 362-377) contains a "Perception Threshold Reference Table" with specific thresholds (>= 15 RGB, >= 0.025em, >= 0.5px, etc.). This IS included in auditor-visible content per the warning ("Sections 1-3 + Appendices A-B to auditors"). These are framed as "Minimum Perceptible Delta" / "What to Look For" — observation-oriented, not gate-oriented.

**Appendix B** (lines 381-414) contains "Quantitative Guardrails (FLOORS)" with MIN/OPTIMAL/MAX tables. This IS also sent to auditors. These include specific pass/fail thresholds:

> Line 409-413: `| Max consecutive blank viewports | 1.5 viewport-heights | 0-1 = PASS, 2+ = FAIL |`

This is a **PASS/FAIL format** in an auditor-facing appendix. It violates the spirit of M-04.

**Fix needed:** Appendix B line 409-413 contains explicit PASS/FAIL language. Either (a) reframe as observation language ("more than 1 consecutive blank viewport is concerning"), or (b) move the Void Prevention table from Appendix B to Section 4 (weaver-only). The rest of Appendix B (Content Width, Typographic Spacing, Layout) uses MIN/OPTIMAL/MAX format without PASS/FAIL — those are acceptable as calibration references.

### Check 2: pa-deployment.md Sections 1-3 — auditor-facing deployment info

**Status: PASS**

pa-deployment.md contains 3 sections:
- Section 1: 9-Auditor Deployment Architecture (assignments, cross-validation, agent requirements)
- Section 2: Screenshot Pre-Capture Pattern
- Section 3: Fresh-Eyes Principle

**Finding:** No gate thresholds in PASS/FAIL format appear in Sections 1-3. The file correctly keeps auditor instructions observation-focused. Section 3 (line 201-235) enforces the fresh-eyes principle with explicit "do NOT provide" list including "Mechanism counts, Pattern names, Build plan details, Prior experiment results, Tier 5 expected scores, Compositional stack theory."

### Check 3: artifact-builder-recipe.md — builder-facing content

**Status: PASS**

**Finding:** Perception thresholds are delivered as CALIBRATION throughout, consistent with M-04:

> Line 108-111: `**Calibration (from perception thresholds — delivered as calibration, not pass/fail):**`
> `- 15 RGB delta = FLOOR (minimum to be perceptible)`
> `- 25-50 RGB delta = COMPOSITIONAL (creates distinct atmosphere per zone)`

The recipe uses "aim for" / calibration language, never "FAIL if" / "PASS when" gate language. D-02 (line 422-435) replaces threshold rules with perceptual instructions. Step 2.1 (line 102-131) uses calibration framing ("15 RGB delta = FLOOR", "25 RGB delta = COMPOSITIONAL TARGET").

No gate threshold numbers in PASS/FAIL format found in builder-facing content.

---

## M-06: Result Schema Consistency

**Mechanism:** Gate runner result objects must use consistent schema `{ gate, name, status, measured, threshold }`.

**Status: PASS**

**Checked:** gate-runner-core.js — all result object patterns across all 6 functions.

**Finding:** Every `results.push()` call uses the consistent 5-field schema:

| Function | Gates | Schema Fields Present | Extra Fields |
|----------|-------|----------------------|--------------|
| `runBriefVerification` (L29-120) | BV-01 to BV-04 | gate, name, status, measured, threshold | None |
| `runGateRunner` (L128-779) | GR-01 to GR-15, GR-43, GR-44 | gate, name, status, measured, threshold | `note` on GR-08, GR-10 |
| `runAntiPatternGates` (L786-1038) | GR-17 to GR-22 | gate, name, status, measured, threshold | `evidence`, `note` on GR-21, GR-22 |
| `runWave2Gates` (L1045-1323) | GR-45 to GR-53 | gate, name, status, measured, threshold | `evidence`, `note` on most |
| `runGateCoverage` (L1330-1374) | GR-48 | gate, name, status, measured, threshold | `evidence`, `note` |
| `checkGateResultIntegrity` (L1377-1416) | GR-49 | gate, name, status, measured, threshold | `evidence` |

All 6 functions produce objects with the required 5 fields. Some include optional `evidence` and `note` fields — these are additive, not breaking. The schema is consistent.

**Cross-check with gate-runner-spec.md:** Line 40-48 documents the output schema as:
```json
{
  "gate": "GR-XX",
  "name": "Human-readable gate name",
  "status": "PASS | FAIL",
  "measured": { },
  "threshold": { },
  "evidence": "FACT | OBSERVED | CONFOUNDED | THEORETICAL"
}
```
This matches the implementation. The `evidence` field is documented in the spec but not in every result object — some gates omit it. This is acceptable (spec says it's part of the schema, implementation includes it where relevant).

**Integrity check (GR-49):** The `checkGateResultIntegrity` function (L1377-1416) validates that result objects have all required fields: `!r.gate || !r.name || !r.status || !r.measured || !r.threshold` — correctly enforcing the 5-field schema.

---

## M-11: Fresh-Eyes Principle

**Mechanism:** PA auditors must NOT see pipeline history, mechanism counts, or tier definitions.

**Status: PASS**

### pa-questions.md

**Finding:** Sections 1-3 (lines 1-307) contain question definitions with scoring guidance. The scoring guidance uses perceptual language:

> PA-05 sub-criteria (lines 28-48): "Look for: multi-scale coherence, rhythm variation..." — observation verbs
> PA-60 (line 99): "Can you identify at least 3 distinct 'design moments'..." — observation question

Section 4 (lines 310-416) contains tier definitions and calibration data, but is explicitly fenced:
> Line 312-316: WARNING block stating it "MUST NOT be included in PA Auditor A-I prompts"

**No mechanism counts, no tier definitions, no pipeline history** appear in Sections 1-3 or Appendices A-B.

### pa-deployment.md

**Finding:** Section 3 (lines 201-235) explicitly enforces fresh-eyes:

> Line 205-211: "PA auditors MUST be context-starved. Do NOT provide: Mechanism counts, Pattern names, Build plan details, Prior experiment results, Tier 5 expected scores, Compositional stack theory"

No calibration leaks found. The auditor assignment table (lines 42-52) contains only question IDs and roles — no pipeline context.

**One observation:** pa-deployment.md Section 1.3 (lines 72-92) describes the PA-05 cross-validation protocol. Cross-validators rate "ONLY their assigned sub-criterion as a SECONDARY assessment." The protocol says "Cross-validators do NOT see Auditor A's scores" (line 92). This is correct isolation.

---

## M-12: Warm Palette Lock (World-Description Framing)

**Mechanism:** Builder-facing content uses world-description framing (ranges, not thresholds).

**Status: PASS**

### artifact-builder-recipe.md

**Finding:** The recipe consistently uses world-description and calibration framing:

- Line 13: "80% creative authority within identity constraints — this recipe provides PURPOSE (why) and VOCABULARY (what's available)"
- Line 108-111: "Calibration (from perception thresholds — delivered as calibration, not pass/fail)"
- Line 115-119: "Targets" section uses descriptive ranges: "20 RGB delta = FLOOR for adjacent zones", "25 RGB delta = COMPOSITIONAL TARGET", "50+ RGB delta = DRAMATIC"
- Line 124: "15 is the floor, not the target. Subtle and dramatic should be DIFFERENT values." — coaching language, not gate language

**No binary threshold language found** ("FAIL if", ">= N channels", "pass/fail threshold"). The recipe format is maintained throughout: Read/Select/Deploy/Assess verb sequence (PHASE 1 through PHASE 6).

The disposition instructions (D-01 through D-09, lines 406-569) all use "PURPOSE" + "VOCABULARY" framing with design intention language ("creates conditions for"), not gate language.

---

## M-13: Net-Zero Budget / Binary Rules (Gate Array Consistency)

**Mechanism:** REQUIRED_GATES and RECOMMENDED_GATES arrays in gate-runner-core.js must be complete and consistent with gate-manifest.json.

**Status: WARNING**

### gate-runner-core.js arrays (lines 1331-1340)

```javascript
const REQUIRED_GATES = [
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15',
    'GR-43', 'GR-44'
]; // 17 REQUIRED gates (not counting GR-48 itself)

const RECOMMENDED_GATES = [
    'GR-17', 'GR-18', 'GR-19', 'GR-20',
    'GR-45', 'GR-49', 'GR-51', 'GR-52'
]; // 8 RECOMMENDED gates
```

### gate-manifest.json arrays (lines 18-33)

```json
"required": {
    "count": 18,
    "gates": ["GR-01"..."GR-15", "GR-43", "GR-44", "GR-48"]
},
"recommended": {
    "count": 8,
    "gates": ["GR-17", "GR-18", "GR-19", "GR-20", "GR-45", "GR-49", "GR-51", "GR-52"]
}
```

### Comparison

| Array | gate-runner-core.js | gate-manifest.json | Match? |
|-------|--------------------|--------------------|--------|
| REQUIRED | 17 gates (GR-01-15, GR-43, GR-44) | 18 gates (same + GR-48) | PARTIAL |
| RECOMMENDED | 8 gates (GR-17-20, GR-45, GR-49, GR-51, GR-52) | 8 gates (same) | MATCH |
| ADVISORY | Not tracked in array | 5 gates (GR-21, GR-22, GR-46, GR-50, GR-53) | N/A |

**Discrepancy:** gate-manifest.json lists 18 REQUIRED gates (includes GR-48). gate-runner-core.js REQUIRED_GATES has 17 (excludes GR-48). The code comment on line 1335 says "17 REQUIRED gates (not counting GR-48 itself)" — this is intentional because `runGateCoverage` IS GR-48; it cannot check for itself in the results. This is a correct design decision, but the manifest count (18) includes GR-48 while the code array (17) excludes it.

**Assessment:** This is architecturally sound — GR-48 checking for itself would be circular. The manifest documents the TOTAL required count including GR-48; the code array documents what GR-48 checks FOR. The comment explains the difference. However, the manifest says `"count": 18` while the code enforces 17/17 in the `requiredCoverage` threshold (line 1366: `'17/17 (100%)'`).

**Fix needed (MINOR):** Consider adding a note to gate-manifest.json clarifying that GR-48 is self-referential and excluded from its own check, to prevent future confusion. Alternatively, update the manifest comment or the coverage threshold string to be consistent. This is cosmetic, not functional.

### gate-runner-core.js header comment consistency

Lines 16-18 declare:
```
//   REQUIRED (18): GR-01 through GR-15, GR-43, GR-44, GR-48
//   RECOMMENDED (8): GR-17, GR-18, GR-19, GR-20, GR-45, GR-49, GR-51, GR-52
//   ADVISORY (5): GR-21, GR-22, GR-46, GR-50, GR-53
```

Header says REQUIRED = 18 (includes GR-48). Array has 17 (excludes GR-48). This is consistent with the "not counting GR-48 itself" comment. No fix needed on the header.

---

## M-19: Propagation Cascade (6 Function Signatures)

**Mechanism:** gate-runner-core.js must contain exactly 6 function signatures.

**Status: PASS**

**Checked:** gate-runner-core.js for all 6 required function signatures.

| # | Function | Line | Found? | Signature |
|---|----------|------|--------|-----------|
| 1 | `runBriefVerification` | 29 | YES | `function runBriefVerification(briefText)` |
| 2 | `runGateRunner` | 128 | YES | `async function runGateRunner(page)` |
| 3 | `runAntiPatternGates` | 786 | YES | `async function runAntiPatternGates(page)` |
| 4 | `runWave2Gates` | 1045 | YES | `async function runWave2Gates(page)` |
| 5 | `runGateCoverage` | 1330 | YES | `function runGateCoverage(allResults)` |
| 6 | `checkGateResultIntegrity` | 1377 | YES | `function checkGateResultIntegrity(resultFiles, resultData)` |

All 6 function signatures exist and match the execution order documented in the header comment (lines 8-13) and gate-manifest.json executionOrder (lines 62-111).

**Execution order cross-check:**

| Step | gate-runner-core.js header | gate-manifest.json | Match? |
|------|---------------------------|--------------------|--------|
| 1 | runBriefVerification(briefText) | runBriefVerification(briefText) | MATCH |
| 2 | runGateRunner(page) | runGateRunner(page) | MATCH |
| 3 | runAntiPatternGates(page) | runAntiPatternGates(page) | MATCH |
| 4 | runWave2Gates(page) | runWave2Gates(page) | MATCH |
| 5 | runGateCoverage(allResults) | runGateCoverage(allResults) | MATCH |
| 6 | checkGateResultIntegrity(files,data) | checkGateResultIntegrity(resultFiles, resultData) | MATCH |

---

## M-20: Observation Verbs

**Mechanism:** PA deployment instructions must use observation verbs ("Describe what you see") NOT measurement verbs ("Verify that").

**Status: PASS**

### pa-deployment.md

**Finding:** The file consistently uses observation-oriented language:

- Line 108: "YES / NO / CONDITIONAL + for each finding: [screenshot reference] + [1-sentence description of what you see]"
- Line 193-194: "Apply Cold Look Protocol to cold-look screenshots independently"
- Line 196-197: "Assessment is purely VISUAL. Describe what you SEE using perceptual language ('The background shifts from warm cream to cooler gray') not CSS language"
- Line 224-227: "React to what you see before you check what you know"
- Line 229-233: Three Laws: "answer must require a screenshot", "describable in plain language", "non-designer must be able to validate"

**Searched for measurement verbs:** "Verify that", "Check that", "Ensure that", "Confirm that", "Measure" — none found in auditor-facing instructions (Sections 1-3).

The one instance of "Verify" in the file is in the MANIFEST-level header context (line 18, "PA-05 cross-validation"), describing what the protocol does at a meta level, not instructing auditors to "verify."

---

## M-22: 9-Auditor Deployment (Question Count Cross-Check)

**Mechanism:** PA deployment protocol must specify all 9 auditor assignments correctly with question counts matching pa-questions.md.

**Status: PASS**

### Cross-check: pa-deployment.md (Section 1.2) vs pa-questions.md (Section 3)

| Auditor | pa-deployment.md Assignments | Count (deployment) | Questions verified in pa-questions.md | Match? |
|---------|-----------------------------|--------------------|--------------------------------------|--------|
| **A** | PA-01,03,04,05,45,65,67,72,76 | 9 | PA-01 (L151), PA-03 (L153), PA-04 (L154), PA-05 (L155), PA-45 (L261), PA-65 (L124), PA-67 (L134), PA-72 (L299), PA-76 (L303) | MATCH |
| **B** | PA-02,06,08,29,55,56,70,77 | 8 | PA-02 (L152), PA-06 (L163), PA-08 (L165), PA-29 (L165), PA-55 (L280), PA-56 (L281), PA-70 (L288), PA-77 (L304) | MATCH |
| **C** | PA-09,11,30-33,50,51,53,64,66 | 11 | PA-09 (L171), PA-11 (L172), PA-30-33 (L173-176), PA-50 (L267), PA-51 (L268), PA-53 (L270), PA-64 (L119), PA-66 (L129) | MATCH |
| **D** | PA-12,13,34-36,52,62,69,71,74,75 | 11 | PA-12 (L182), PA-13 (L183), PA-34-36 (L184-186), PA-52 (L269), PA-62 (L109), PA-69 (L287), PA-71 (L289), PA-74 (L301), PA-75 (L302) | MATCH |
| **E** | PA-14,15,37-39,63 | 6 | PA-14 (L192), PA-15 (L193), PA-37-39 (L194-196), PA-63 (L114) | MATCH |
| **F** | PA-16,17,40,41,60,61 | 6 | PA-16 (L202), PA-17 (L203), PA-40 (L204), PA-41 (L205), PA-60 (L98), PA-61 (L104) | MATCH |
| **G** | PA-18-20,42-44,68 | 7 | PA-18 (L212), PA-19 (L213), PA-20 (L215), PA-42 (L252), PA-43 (L254), PA-44 (L255), PA-68 (L139) | MATCH |
| **H** | PA-22,23,46,47,73 | 5 | PA-22 (L223), PA-23 (L224), PA-46 (L225), PA-47 (L226), PA-73 (L300) | MATCH |
| **I** | PA-24-28,48 | 6 | PA-24 (L231), PA-25 (L233), PA-26 (L239), PA-27 (L240), PA-28 (L246), PA-48 (L247) | MATCH |

**Total:** 9+8+11+11+6+6+7+5+6 = **69 questions**

pa-deployment.md line 54 states: "Total: 69 questions across 9 auditors (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)"

pa-questions.md line 306 states: "Total: 69 questions (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)"

**Both totals match: 69.** All 9 auditor assignments verified. Question IDs confirmed present in pa-questions.md.

### Cross-check: MANIFEST.md Agent Roster (Section 2)

MANIFEST.md lines 149-157 list the same assignments. Spot-checked:
- Auditor A: "PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 (9 questions)" -- MATCHES
- Auditor C: "PA-09, PA-11, PA-30-33, PA-50, PA-51, PA-53, PA-64, PA-66 (11 questions)" -- MATCHES
- MANIFEST line 159: "Total: 69 questions across 9 auditors" -- MATCHES

All three files agree on assignments and totals.

---

## Summary Table

| # | Mechanism | Status | Severity | Fix Needed? |
|---|-----------|--------|----------|-------------|
| M-04 | Information Isolation | **WARNING** | MINOR | Appendix B of pa-questions.md has PASS/FAIL language in Void Prevention table (lines 409-413). Reframe or relocate. |
| M-06 | Result Schema | **PASS** | -- | None |
| M-11 | Fresh-Eyes Principle | **PASS** | -- | None |
| M-12 | Warm Palette Lock | **PASS** | -- | None |
| M-13 | Net-Zero Budget | **WARNING** | COSMETIC | gate-manifest.json says 18 REQUIRED, code enforces 17/17 (GR-48 self-exclusion). Add clarifying note. |
| M-19 | Propagation Cascade | **PASS** | -- | None |
| M-20 | Observation Verbs | **PASS** | -- | None |
| M-22 | 9-Auditor Deployment | **PASS** | -- | None |

**Overall verdict: 6 PASS, 2 WARNING (both MINOR). Zero FAIL. Zero BLOCKING.**

The pipeline spec files are in good shape for surgery. The two warnings are:
1. **M-04** — A small Void Prevention table in pa-questions.md Appendix B uses PASS/FAIL language in auditor-visible content. Low risk because auditors rarely consult appendix tables, but should be reframed.
2. **M-13** — Cosmetic mismatch between manifest count (18) and code array (17) for REQUIRED gates. Architecturally correct (GR-48 self-exclusion), but could confuse future maintainers.

Neither warning blocks Wave 0 from proceeding.

---

*End of MUST-00 Pre-Flight Anti-Loss Audit. All 10 files read, all 8 mechanisms checked.*
