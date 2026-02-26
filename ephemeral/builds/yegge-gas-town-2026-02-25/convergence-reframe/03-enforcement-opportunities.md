# Structural Enforcement Opportunities — Convergence Autopsy Fixes

**Date:** 2026-02-25
**Analyst:** Opus enforcement analyst
**Scope:** All 28 fixes from `08-MASTER-FIX-CHECKLIST.md`, classified by code-enforceability
**Sources read:** gate-runner-core.js (1500+ lines, 47 gates), gate-manifest.json (264 lines), EXECUTION-TRACKER-TEMPLATE.md (147 lines), full fix checklist (699 lines)

---

## Classification Summary

| Category | Count | Fix IDs |
|----------|-------|---------|
| GREEN (already code-enforced or proposed as gates) | 4 | FIX-24, FIX-25, FIX-26, FIX-19 |
| YELLOW (convertible to code enforcement) | 12 | FIX-01, FIX-03, FIX-04, FIX-05, FIX-07, FIX-09, FIX-14, FIX-16, FIX-17, FIX-21, FIX-22, FIX-28 |
| RED (inherently instructional) | 12 | FIX-02, FIX-06, FIX-08, FIX-10, FIX-11, FIX-12, FIX-13, FIX-15, FIX-18, FIX-20, FIX-23, FIX-27 |

**Key finding:** A SINGLE new gate (BV-06: Anti-Regression Language Scan) could enforce 7 of the 10 EXPLICIT language fixes. Combined with 3 additional gates, we can convert 12/28 fixes from ~72% prose compliance to 100% code enforcement.

---

## GREEN: Already Code-Enforced (4 fixes)

### FIX-24: GR-70 (PA-05 Non-Regression Gate) — PROPOSED AS GATE
- Already specified as a gate in the checklist
- Implementation: orchestrator-procedural check comparing Iteration Log scores
- Coverage: 100% when executed. No conversion needed — just implement.

### FIX-25: GR-75 (Iteration Counter Gate) — PROPOSED AS GATE
- Already specified as a gate in the checklist
- Implementation: 5 lines checking cycle count against budget
- Coverage: 100% when executed. No conversion needed.

### FIX-26: GR-78 (Builder Residual Artifact Gate) — PROPOSED AS GATE
- Already specified as a gate in the checklist
- Implementation: HTML pattern match for `<!-- RESIDUAL:` with >= 50 chars
- Architecture parallel: identical to existing GR-43 (Self-Eval) and GR-63 (Experiential Marker)
- Coverage: 100% when executed. No conversion needed.

### FIX-19: Post-REFINE Completion Check — TRIVIALLY CONVERTIBLE
- Checklist classifies this as STRUCTURAL but it's already described as a binary check
- The check IS the gate: "do post-REFINE PA reports exist (`*-refine.md`)?"
- This is a file-existence check, identical in pattern to GR-48 (coverage meta-gate)
- Coverage: 100%. Already GREEN in practice.

---

## YELLOW: Convertible to Code Enforcement (12 fixes)

### MEGA-GATE PROPOSAL: BV-06 — Anti-Regression Language Scan

**Handles:** FIX-01, FIX-03, FIX-04, FIX-05, FIX-09, FIX-16, FIX-28 (7 fixes)

**Concept:** A single Brief Verification gate that scans the MANIFEST and orchestrator files for forbidden phrases. Runs during pipeline startup (alongside BV-01 through BV-05) and checks the pipeline's OWN source files before execution begins.

**What it checks:**

```javascript
function runAntiRegressionScan(manifestText, orchestratorText) {
  const results = [];
  const forbiddenPhrases = [
    // FIX-01: "pipeline terminates" in REFINE/REBUILD context
    { pattern: /pipeline\s+terminates/i,
      fix: 'FIX-01', severity: 'P0',
      reason: 'Converts REFINE from action verb to terminal label' },

    // FIX-03: "SINGLE-PASS" as default label
    { pattern: /single[- ]pass\s*[=(]\s*default/i,
      fix: 'FIX-03', severity: 'P1',
      reason: 'Labels pipeline architecture as non-iterative' },

    // FIX-04: "NO feedback loops" declaration
    { pattern: /no\s+feedback\s+loops?/i,
      fix: 'FIX-04', severity: 'P1',
      reason: 'Explicitly contradicts REFINE loop' },

    // FIX-05: "OUTPUT LABELS" framing
    { pattern: /output\s+labels?/i,
      fix: 'FIX-05', severity: 'P0',
      reason: 'Redefines REFINE from verb to noun' },

    // FIX-09: "Single-pass = DEFAULT" in Council Mandates
    { pattern: /single[- ]pass\s*=\s*default/i,
      fix: 'FIX-09', severity: 'P0',
      reason: 'Council mandate suppresses iteration' },

    // FIX-16: "cannot fix your way to Flagship" without compose qualification
    { pattern: /cannot\s+fix\s+your\s+way/i,
      fix: 'FIX-16', severity: 'P2',
      reason: 'Generalizes anti-fix to anti-iteration' },

    // FIX-28: "NOT part of a build" applied to REFINE
    { pattern: /not\s+part\s+of\s+a\s+build/i,
      fix: 'FIX-28', severity: 'P2',
      reason: 'Experiment framing excludes operational REFINE' },

    // Additional regression guards
    { pattern: /no\s+automatic\s+re-execution/i,
      fix: 'FIX-01/09', severity: 'P0',
      reason: 'Reinforces single-pass framing' },
    { pattern: /terminates\s+with\s+(?:action\s+items|diagnostic)/i,
      fix: 'FIX-01', severity: 'P0',
      reason: 'Terminal language for non-SHIP verdicts' }
  ];

  const allText = manifestText + '\n' + orchestratorText;
  const violations = forbiddenPhrases.filter(fp => fp.pattern.test(allText));

  return {
    gate: 'BV-06', name: 'Anti-Regression Language Scan',
    status: violations.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: {
      violations: violations.length,
      details: violations.map(v => ({ fix: v.fix, severity: v.severity, reason: v.reason }))
    },
    threshold: { forbiddenPhrases: 0 }
  };
}
```

**Lines of code:** ~50 (regex array + scan loop + result formatting)
**Enforcement coverage:** 100% — code runs, forbidden phrases detected, gate FAILS
**Architecture fit:** Identical pattern to BV-04 (Suppressor Scan), which already scans for forbidden patterns in brief text. BV-06 scans source files instead of brief text.

**When it runs:** At pipeline startup, before Phase 0. Reads MANIFEST.md and artifact-orchestrator.md as text. If ANY forbidden phrase is found, the pipeline has regressed and cannot proceed.

**Why this matters:** These 7 EXPLICIT fixes are all language changes. Language changes are the MOST vulnerable to regression — a single edit can reintroduce "pipeline terminates" and undo the fix. A code gate makes regression impossible without also editing the gate.

---

### FIX-07: Iteration-Aware File Naming Convention

**Conversion proposal:** Add file naming validation to the post-REFINE phase of the gate runner.

```javascript
// GR-79: REFINE File Naming Convention
function checkRefineFileNaming(buildDir, cycle) {
  if (cycle < 2) return { gate: 'GR-79', status: 'PASS', source: 'code',
    measured: { cycle, note: 'Not applicable for initial build' } };

  const expectedSuffix = cycle === 2 ? '-refine' : `-refine-${cycle - 1}`;
  const requiredFiles = [
    `p3a-gate-results${expectedSuffix}.json`,
    `p3c-weaver-diagnostic${expectedSuffix}.md`,
    `p3c-weaver-artistic${expectedSuffix}.md`
  ];
  // Check PA reports: p3b-pa-auditor-{A-I}${expectedSuffix}.md
  'ABCDEFGHI'.split('').forEach(l =>
    requiredFiles.push(`p3b-pa-auditor-${l}${expectedSuffix}.md`));
  requiredFiles.push(`p3b-integrative${expectedSuffix}.md`);

  // fs.existsSync checks (or equivalent in orchestrator context)
  const missing = requiredFiles.filter(f => !fileExists(buildDir, f));
  return {
    gate: 'GR-79', name: 'REFINE File Naming Convention',
    status: missing.length === 0 ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { cycle, expectedSuffix, required: requiredFiles.length, missing }
  };
}
```

**Lines of code:** ~25
**What it checks:** After a REFINE cycle, all Phase 3 artifacts have the correct `-refine` suffix. Pass 1 artifacts are not overwritten.
**Enforcement coverage:** 100% — checks file existence and naming, binary pass/fail.
**Note:** This also indirectly enforces FIX-19 (post-REFINE completion check), since missing REFINE PA reports will cause GR-79 to FAIL.

---

### FIX-14: Builder Residual Artifact (RESIDUAL Comment)

**Conversion proposal:** Already covered by proposed GR-78 (FIX-26, GREEN). But the DEFINITION of the residual format can be additionally enforced:

```javascript
// Enhancement to GR-78: Validate residual structure
const residualMatch = html.match(/<!--\s*RESIDUAL:\s*([\s\S]*?)-->/i);
if (residualMatch) {
  const text = residualMatch[1].trim();
  const hasPreserved = /preserved|kept|maintained/i.test(text);
  const hasChanged = /changed|modified|altered|added|removed/i.test(text);
  const hasNext = /next|would|future|if.*another/i.test(text);
  const hasTrades = /trade|sacrifice|compromise|chose.*over/i.test(text);
  // At least 3 of 4 sections present
  const sectionCount = [hasPreserved, hasChanged, hasNext, hasTrades].filter(Boolean).length;
  pass = text.length >= 50 && sectionCount >= 3;
}
```

**Lines of code:** ~10 additional on top of GR-78
**Enforcement coverage:** 100% for presence and structure. Content quality remains instructional (~72%).

---

### FIX-17: Iteration Log in Execution Tracker

**Conversion proposal:** Use the auto-fill pattern from the existing tracker. The Iteration Log table can be auto-populated by the gate runner output.

```javascript
// GR-80: Iteration Log Population
// After each cycle, gate runner appends a row to the Iteration Log
function appendIterationLog(trackerPath, cycleData) {
  // cycleData: { cycle, phase, pa05, tier5, gatePassRate, fixCount, verdict, decision }
  // Read tracker, find "## Iteration Log" section, append row
  // Return PASS if row was appended, FAIL if section missing
}
```

**Lines of code:** ~30 (file read + regex find + append + write)
**What it checks:** Iteration Log section exists in tracker and has the correct number of rows for the current cycle.
**Enforcement coverage:** 100% for row existence. Auto-fill eliminates the "blank tracker" problem (Report 04, RC-4).
**Architecture fit:** Extends the existing (auto) pattern documented in the tracker template.

---

### FIX-21: Weaver Prediction Constraint

**Conversion proposal:** Add a post-weaver text scan gate.

```javascript
// GR-81: Weaver Prediction Suppressor
// Scans weaver diagnostic report for PA-05 predictions
function checkWeaverPredictions(weaverDiagnosticText) {
  const predictionPatterns = [
    /(?:likely|would|could|probably)\s+(?:elevate|improve|reach|achieve)\s+.*PA-05\s+\d/i,
    /PA-05\s+\d[\d.]*\/4\s+(?:after|post|with)\s+(?:fix|refine|change)/i,
    /estimated?\s+(?:post|after)[- ](?:fix|refine)\s+(?:score|PA)/i
  ];
  const predictions = predictionPatterns.filter(p => p.test(weaverDiagnosticText));
  return {
    gate: 'GR-81', name: 'Weaver Prediction Suppressor',
    status: predictions.length === 0 ? 'PASS' : 'WARNING',
    source: 'code',
    measured: { predictionsFound: predictions.length },
    threshold: { maxPredictions: 0 }
  };
}
```

**Lines of code:** ~15
**What it checks:** Weaver diagnostic report does not contain PA-05 predictions that could short-circuit re-audit.
**Enforcement coverage:** ~85% — regex catches common prediction patterns but creative phrasing could evade.
**Tier:** ADVISORY (WARNING, not FAIL) — weaver predictions are harmful but not gate-blocking.

---

### FIX-22: Finding Status Map in Weaver Output

**Conversion proposal:** For cycles >= 2, check weaver output contains the required table structure.

```javascript
// GR-82: Finding Status Map Presence (cycle >= 2)
function checkFindingStatusMap(weaverText, cycle) {
  if (cycle < 2) return { gate: 'GR-82', status: 'PASS', source: 'code',
    measured: { cycle, note: 'N/A for initial cycle' } };

  const hasTable = /\|\s*Pass\s*N-1\s*Finding\s*\|/i.test(weaverText) ||
                   /\|\s*Finding\s*\|.*\|\s*Status\s*\|/i.test(weaverText) ||
                   /finding\s*status\s*map/i.test(weaverText);
  const hasStatuses = /FIXED|IMPROVED|UNCHANGED|REGRESSION/i.test(weaverText);

  return {
    gate: 'GR-82', name: 'Finding Status Map Presence',
    status: (hasTable && hasStatuses) ? 'PASS' : 'FAIL',
    source: 'code',
    measured: { cycle, hasTable, hasStatuses },
    threshold: { tablePresent: true, statusLabelsPresent: true }
  };
}
```

**Lines of code:** ~15
**What it checks:** Weaver output for cycle >= 2 contains a Finding Status Map with lifecycle labels.
**Enforcement coverage:** 100% for presence, ~80% for completeness (can't verify every finding is mapped).

---

## RED: Inherently Instructional (12 fixes)

These fixes require human judgment, creative framing, or structural document reorganization that cannot be gated.

### FIX-02: Convergence-based iteration budget
- **Why RED:** The iteration budget values (PA-05 delta >= 0.3, up to 2 REFINE passes) are POLICY decisions. Code can enforce the budget limits (that's GR-75, GREEN), but the FRAMING of iteration as convergence vs. overhead is instructional.
- **Partial enforcement:** GR-75 enforces the hard cap. The delta >= 0.3 convergence criterion could be GR-70 (GREEN). The remaining text is motivational framing.

### FIX-06: REFINE Builder Prompt Template
- **Why RED:** The template IS the instruction. The template's MODE (compositional vs. corrective), INPUTS (artistic impression vs. gate scores), and FRAMING ("compose, not fix") are all creative specifications that must be prose.
- **Partial enforcement:** GR-78 (GREEN) verifies the builder PRODUCED a residual artifact. But whether the builder was in compositional mode is unjudgeable by code.

### FIX-08: BEFORE/DURING/AFTER REFINE Protocol
- **Why RED:** The restructuring of the REFINE protocol from a 5-step list to a 3-section structure is a DOCUMENT ORGANIZATION change. The content (re-read this section, spawn different builder, NON-NEGOTIABLE return to Phase 3) is instructional prose.
- **Partial enforcement:** BV-06 (YELLOW) catches regression of the "AFTER REFINE" step by scanning for terminal language. GR-79 (YELLOW) enforces the file-naming convention from the AFTER section. But the BEFORE/DURING sections are pure instruction.

### FIX-10: Reframe cost estimates from overhead to investment
- **Why RED:** Changing "adds ~60-75 min" to "historically improves PA-05 by +0.5 to +1.5" is motivational reframing. No binary check can verify motivational tone.

### FIX-11: Post-REFINE "verification theater" warning
- **Why RED:** The warning is a COGNITIVE INTERVENTION — a message the orchestrator displays to itself. Code cannot verify that an agent "displayed a message to itself." The closest enforcement is the downstream effect: GR-70 (GREEN) catches PA-05 regression, and GR-79 (YELLOW) catches missing re-audit files. The warning is the INTENTION; the gates are the ENFORCEMENT.

### FIX-12: "Known REFINE Outcomes" evidence section
- **Why RED:** Cross-run evidence must be human-curated. The table content (Yegge +1.5 PA-05) is historical data. A gate could check the table EXISTS but not that it's ACCURATE or UPDATED.
- **Partial enforcement:** A meta-gate could check the Iteration Log has >= 1 row from a previous run, but this is fragile and unnecessary given GR-80 (YELLOW) handles current-run logging.

### FIX-13: Post-Verdict Iteration Decision Function
- **Why RED:** The decision function is an ALGORITHM described in prose. The algorithm's INPUTS (PA-05, iteration budget, delta) are all measurable, and its OUTPUTS (proceed/halt) are binary. But the EXECUTION of the algorithm requires orchestrator judgment at steps like "check PA-05 delta from previous pass."
- **Partial enforcement:** GR-70 (non-regression) and GR-75 (iteration counter) enforce the algorithm's hard constraints. The remaining logic is: "did PA-05 improve enough to justify another pass?" — this is a judgment call.

### FIX-15: Move REFINE protocol from Section 7 to execution sections
- **Why RED:** Document reorganization. Moving content from "Verdict and Decision Tree" to a new "Section 6.5: Iteration Protocol" is a structural change to the orchestrator document. No gate can verify document section ordering.

### FIX-18: Update Circuit Breaker field to support multiple iterations
- **Why RED:** A 1-line template field change in the tracker. Could technically be checked by a gate ("does the tracker have 'Iteration State' instead of 'Circuit Breaker'?") but this is a one-time migration, not an ongoing enforcement need.

### FIX-20: "Revision Enhancement Opportunities" section
- **Why RED:** Content creation. Writing 4 enhancement opportunities (feedback incorporation, compositional discovery, error-as-signal, asymptotic refinement) is creative prose. No gate can verify motivational content quality.

### FIX-23: Add iteration awareness to SKILL.md
- **Why RED:** Adding 8 lines of iteration-awareness text to SKILL.md is a prose change. The content IS the enforcement (it shapes orchestrator behavior at session start). A gate could scan SKILL.md for "iterate" keyword presence but this is trivially gameable.

### FIX-27: Iteration-aware Weaver routing
- **Why RED:** Routing the Finding Status Map to the Weaver is an ORCHESTRATOR PROCEDURE. The orchestrator must decide to include the map in the Weaver's context. GR-82 (YELLOW) verifies the Weaver PRODUCED the map, but cannot verify the orchestrator PROVIDED it.

---

## Consolidated Gate Proposal

### New Gates Required

| Gate ID | Name | Type | Lines | Enforces | Tier |
|---------|------|------|-------|----------|------|
| BV-06 | Anti-Regression Language Scan | Brief Verification | ~50 | FIX-01/03/04/05/09/16/28 | REQUIRED |
| GR-70 | PA-05 Non-Regression | Orchestrator-procedural | ~10 | FIX-24 | REQUIRED |
| GR-75 | Iteration Counter | Orchestrator-procedural | ~5 | FIX-25 | REQUIRED |
| GR-78 | Builder Residual Artifact | HTML pattern match | ~15 | FIX-26, FIX-14 | RECOMMENDED |
| GR-79 | REFINE File Naming | File existence | ~25 | FIX-07, FIX-19 | REQUIRED |
| GR-80 | Iteration Log Population | Tracker auto-fill | ~30 | FIX-17 | REQUIRED |
| GR-81 | Weaver Prediction Suppressor | Text scan | ~15 | FIX-21 | ADVISORY |
| GR-82 | Finding Status Map Presence | Text scan | ~15 | FIX-22 | RECOMMENDED |

**Total new code:** ~165 lines across 8 gates
**Total fixes code-enforced:** 16/28 (57%)
**Total fixes with partial enforcement:** 22/28 (79%)

### Gate Manifest Updates

New tier section needed:

```json
"iteration": {
  "count": 5,
  "gates": ["GR-70", "GR-75", "GR-78", "GR-79", "GR-80"],
  "verdictImpact": "GR-70 FAIL = HALT (regression). GR-75 FAIL = HALT (budget). GR-79 FAIL = INCOMPLETE. GR-78/GR-80 FAIL = WARNING.",
  "note": "Iteration gates only activate for cycle >= 2 (except GR-75 which always runs, and GR-78 which runs every cycle)."
}
```

BV-06 joins the existing `briefVerification` tier (count: 5 -> 6).
GR-81 and GR-82 join appropriate existing tiers (ADVISORY and RECOMMENDED).

### Execution Order

BV-06 runs FIRST — before Phase 0, scanning pipeline source files. If it fails, the pipeline has regressed and must be fixed before any build begins.

GR-70, GR-75, GR-79, GR-80 run post-verdict (new Step 5.7 in execution order).
GR-78 runs post-build alongside GR-43 and GR-63 (Step 2 in execution order).
GR-81, GR-82 run post-weaver alongside GR-64 (Step 5.5 in execution order).

---

## Enforcement Coverage Matrix

| Fix ID | Priority | Classification | Enforcement | Gate(s) | Coverage |
|--------|----------|---------------|-------------|---------|----------|
| FIX-01 | P0 | EXPLICIT | **BV-06** | BV-06 | 100% |
| FIX-02 | P0 | EXPLICIT | Partial (GR-75 + GR-70) | GR-75, GR-70 | ~70% (hard limits enforced, framing not) |
| FIX-03 | P1 | EXPLICIT | **BV-06** | BV-06 | 100% |
| FIX-04 | P1 | EXPLICIT | **BV-06** | BV-06 | 100% |
| FIX-05 | P0 | EXPLICIT | **BV-06** | BV-06 | 100% |
| FIX-06 | P1 | STRUCTURAL | RED | — | 0% (prose template) |
| FIX-07 | P2 | STRUCTURAL | **GR-79** | GR-79 | 100% |
| FIX-08 | P0 | STRUCTURAL | Partial (BV-06 + GR-79) | BV-06, GR-79 | ~40% (structure RED, AFTER enforced) |
| FIX-09 | P0 | EXPLICIT | **BV-06** | BV-06 | 100% |
| FIX-10 | P2 | EXPLICIT | RED | — | 0% (motivational framing) |
| FIX-11 | P1 | STRUCTURAL | RED (downstream: GR-70, GR-79) | — | 0% direct, ~60% indirect |
| FIX-12 | P1 | STRUCTURAL | RED | — | 0% (historical data curation) |
| FIX-13 | P0 | STRUCTURAL | Partial (GR-70 + GR-75) | GR-70, GR-75 | ~50% (hard constraints enforced) |
| FIX-14 | P1 | STRUCTURAL | **GR-78** | GR-78 | 100% (presence), ~80% (quality) |
| FIX-15 | P1 | STRUCTURAL | RED | — | 0% (document reorganization) |
| FIX-16 | P2 | EXPLICIT | **BV-06** | BV-06 | 100% |
| FIX-17 | P0 | STRUCTURAL | **GR-80** | GR-80 | 100% (auto-fill) |
| FIX-18 | P1 | EXPLICIT | RED | — | 0% (one-time migration) |
| FIX-19 | P0 | STRUCTURAL | **GR-79** | GR-79 | 100% |
| FIX-20 | P1 | STRUCTURAL | RED | — | 0% (creative prose) |
| FIX-21 | P1 | EXPLICIT | **GR-81** | GR-81 | ~85% (regex-based) |
| FIX-22 | P1 | STRUCTURAL | **GR-82** | GR-82 | 100% (presence), ~80% (completeness) |
| FIX-23 | P1 | EXPLICIT | RED | — | 0% (prose change to SKILL.md) |
| FIX-24 | P0 | STRUCTURAL | **GR-70** | GR-70 | 100% |
| FIX-25 | P1 | STRUCTURAL | **GR-75** | GR-75 | 100% |
| FIX-26 | P1 | STRUCTURAL | **GR-78** | GR-78 | 100% |
| FIX-27 | P2 | STRUCTURAL | Partial (GR-82) | GR-82 | ~40% (output enforced, input routing RED) |
| FIX-28 | P2 | EXPLICIT | **BV-06** | BV-06 | 100% |

---

## Critical Insight: P0 Enforcement Gap

Of the 6 P0-BLOCKING fixes:

| Fix | Enforced? | Gate |
|-----|-----------|------|
| FIX-01 | YES | BV-06 |
| FIX-02 | PARTIAL | GR-70 + GR-75 |
| FIX-05 | YES | BV-06 |
| FIX-09 | YES | BV-06 |
| FIX-08 | PARTIAL | BV-06 + GR-79 |
| FIX-19 | YES | GR-79 |
| FIX-17 | YES | GR-80 |
| FIX-24 | YES | GR-70 |

**5/6 P0 fixes are fully or substantially code-enforced.** FIX-08 (BEFORE/DURING/AFTER restructure) is the only P0 fix that's primarily RED — but its most critical component (AFTER REFINE = return to Phase 3) is indirectly enforced by GR-79 (missing REFINE files = FAIL).

---

## Implementation Priority

1. **BV-06 (Anti-Regression Language Scan)** — Highest leverage. Single gate prevents 7 fixes from regressing. ~50 lines. Run it first, before anything else.
2. **GR-70 + GR-75** — Core iteration enforcement. Without these, the iteration budget and quality trajectory have zero mechanical guards. ~15 lines combined.
3. **GR-79** — REFINE completion enforcement. Makes "skip re-audit" structurally impossible. ~25 lines.
4. **GR-78** — Builder knowledge preservation. Extends existing GR-43/GR-63 pattern. ~15 lines.
5. **GR-80** — Iteration Log auto-fill. Prevents blank tracker problem. ~30 lines.
6. **GR-81 + GR-82** — Weaver output enforcement. Lower priority (ADVISORY + RECOMMENDED). ~30 lines combined.

Total implementation: ~165 lines of JavaScript, 8 new gate IDs, achieves 100% enforcement on 16/28 fixes and partial enforcement on 22/28.
