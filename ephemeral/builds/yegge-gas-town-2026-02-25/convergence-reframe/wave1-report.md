# Wave 1 Implementation Report: BV-06 + Language Surgery

**Date:** 2026-02-25
**Implementer:** Opus agent (wave1-worker)
**Items:** ITEM-01 (BV-06 Anti-Regression Language Scan [CONSOLIDATED]) + ITEM-02 (Iteration Budget Rewrite)
**Status:** COMPLETE

---

## ITEM-01 Part A: 7 Text Edits Applied

All replacements are net +0 lines (text swaps, not additions).

### FIX-01: "pipeline terminates" in Quickstart Step 11 (MANIFEST.md line 40)
- **Before:** `If SHIP WITH FIXES: pipeline terminates with mechanical fix list. If REFINE or REBUILD: pipeline terminates with action items for a new manual run. (Single-pass default — no automatic re-execution.)`
- **After:** `If SHIP WITH FIXES: pipeline completes with mechanical fix list. If REFINE: execute REFINE protocol (artifact-orchestrator.md Section 7) — spawn different Opus builder, then RETURN TO PHASE 3 FOR FULL RE-AUDIT. If REBUILD: execute REBUILD protocol (artifact-orchestrator.md Section 7) — full Phase 0-3 re-execution. Pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES.`
- **Verification:** Zero matches for `/pipeline\s+terminates/i` in MANIFEST.md after edit.

### FIX-03: "SINGLE-PASS" in Pipeline Overview (MANIFEST.md line 65)
- **Before:** `Default mode: SINGLE-PASS (3-pass is EXPERIMENTAL, blocked until Experiment #21 validates it).`
- **After:** `Default mode: ITERATIVE-TO-CONVERGENCE. Initial build + PA audit + REFINE if needed. The pipeline iterates until PA-05 reaches SHIP threshold or improvement stalls (delta < 0.3). The 3-pass Compositional Critic architecture remains EXPERIMENTAL (blocked until Experiment #21).`
- **Verification:** Zero matches for `/single[- ]pass\s*[=(]\s*default/i` in MANIFEST.md after edit.

### FIX-04: "NO feedback loops" in dependency graph (MANIFEST.md line 595-599)
- **Before:** `In single-pass mode, there are NO feedback loops. If the verdict is REFINE or REBUILD, the pipeline terminates with action items. A new pipeline run would be needed to act on those items.`
- **After:** `The pipeline includes a feedback loop for REFINE verdicts: after REFINE build, the pipeline returns to Phase 3A (screenshots + gates) and Phase 3B-C (full PA re-audit). This loop repeats until PA-05 reaches SHIP threshold or improvement stalls. The dependency graph arrow from VERDICT back to Phase 3A is the REFINE loop.`
- **Verification:** Zero matches for `/no\s+feedback\s+loops?/i` in MANIFEST.md after edit.

### FIX-05: "OUTPUT LABELS" rewritten (MANIFEST.md line 523)
- **Before:** `Single-pass behavior: In single-pass mode (the default), REFINE and REBUILD are OUTPUT LABELS. The pipeline terminates with the verdict + action items. A human decides whether to run a new pipeline execution. There is no automatic re-execution.`
- **After:** `Verdict behavior: REFINE and REBUILD are ACTION TRIGGERS. When the Weaver issues REFINE, the orchestrator executes the REFINE protocol (artifact-orchestrator.md Section 7) and returns to Phase 3 for re-audit. When the Weaver issues REBUILD, the orchestrator executes the REBUILD protocol and returns to Phase 0. The pipeline continues until verdict is SHIP or SHIP WITH FIXES, or the iteration budget is exhausted.`
- **Verification:** Zero matches for `/output\s+labels?/i` in MANIFEST.md after edit.

### FIX-09: "Single-pass = DEFAULT" in orchestrator (3 locations + 2 bonus)
**Location 1 — Council Mandates (line 13):**
- **Before:** `Single-pass = DEFAULT. 3-pass = EXPERIMENTAL (blocked until experiment #21)`
- **After:** `Iterative-to-convergence = DEFAULT (REFINE loop until SHIP or diminishing returns). 3-pass Compositional Critic = EXPERIMENTAL (blocked until experiment #21). Standard REFINE iteration is NOT the experimental 3-pass architecture.`

**Location 2 — Budget expectation (line 44):**
- **Before:** `25-40% of builds may need REFINE or REBUILD (per council REC-07). Plan for 1 REBUILD + 1 REFINE maximum before human review. Single-pass is the default — no automatic re-execution.`
- **After:** `40-60% of builds will use at least one REFINE cycle (per operational evidence). REFINE is not failure — it is the convergence mechanism. Budget for 1 REBUILD + 2 REFINE passes maximum. The pipeline iterates to convergence by default.`

**Location 3 — GR-40 policy gate (line 619):**
- **Before:** `GR-40: Single-pass is the default (no unauthorized 3-pass)`
- **After:** `GR-40: Iterative-to-convergence is the default (no unauthorized 3-pass Compositional Critic)`

**Location 4 — Council ruling CF-02 quote (line 766):**
- **Before:** `Single-pass is the default. 3-pass architecture is an optional enhancement.`
- **After:** `Standard REFINE iteration is the default convergence mechanism. 3-pass Compositional Critic architecture is an optional enhancement.`

**Location 5 — Cost estimates section (line 694):**
- **Before:** `Single-pass default: ~60-120 min, ~$30-150 per page`
- **After:** `Build with convergence: ~80-180 min, ~$50-250 per page (1-2 REFINE cycles typical). Historical REFINE ROI: +1.0 to +1.5 PA-05 per cycle.`

**Additional fix — Post-Pipeline Archival (line 707):**
- **Before:** `After the pipeline terminates (any verdict)`
- **After:** `After the pipeline completes (any final verdict)`
- **Reason:** Would trigger BV-06 false positive on `/pipeline\s+terminates/i`.

**Additional fix — MANIFEST.md Council Resolution Table (line 764):**
- **Before:** `Single-pass = DEFAULT, 3-pass = EXPERIMENTAL | No automatic re-runs`
- **After:** `Iterative-to-convergence = DEFAULT, 3-pass Compositional Critic = EXPERIMENTAL | REFINE loop is the default convergence mechanism`

### FIX-16: "cannot fix your way" in orchestrator (line 594)
- **Before:** `You cannot fix your way to Flagship. Only compose your way.`
- **After:** `Fixing alone will not reach Flagship — but COMPOSING through successive REFINE passes will. Each REFINE is a fresh act of composition, not a repair. The path from 3.0 to 4.0 is "compose, evaluate, compose again" — not "fix, fix, fix."`
- **Note:** Rewrote to avoid triggering BV-06 regex `/cannot\s+fix\s+your\s+way/i` while preserving the signal.

### FIX-28: "NOT part of a build" in experiment-protocol.md (line 48)
- **Before:** `Experiments run OUTSIDE normal pipeline execution — they are NOT part of a build.`
- **After:** `Experiments run OUTSIDE normal pipeline execution — they are NOT part of a build. Note: Standard REFINE iteration (spawn different builder, re-audit) is NOT an experiment. It is a validated operational procedure with N=2 evidence (Yegge Gas Town +1.5 PA-05). Experiment #21 (3-pass Compositional Critic) is a DIFFERENT mechanism that remains experimental.`

---

## ITEM-01 Part B: BV-06 Gate Added

### gate-runner-core.js
- Added `checkAntiRegressionLanguage(manifestText, orchestratorText)` function (~50 lines)
- Scans 2 source files for 7 forbidden phrases
- Returns standard gate result format with `source: 'code'`
- Includes per-violation detail: file, fix ID, severity, reason, match count, sample text
- Updated header comments: total 48 gates, BV-01-06

### gate-manifest.json
- Updated `briefVerification.count`: 5 -> 6
- Updated `briefVerification.gates`: added "BV-06"
- Updated `briefVerification.verdictImpact`: BV-06 FAIL = pipeline has regressed, cannot proceed
- Added step 0 to `executionOrder`: `checkAntiRegressionLanguage` runs at pipeline startup before Phase 0
- Updated `totalGateCount`: 47 -> 48 (briefVerification 5 -> 6)
- Updated `_canonical` comment: 48 gates (6 BV)

---

## ITEM-02: Iteration Budget Rewrite

### MANIFEST.md Quickstart (line 42)
- **Before:** `Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review. If a second REBUILD is triggered, the pipeline terminates with diagnostic output.`
- **After:** `Iteration budget: 1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3 between passes (diminishing returns). If a second REBUILD is triggered, pipeline halts with diagnostic output for human review.`
- **Note:** Per adversarial (v3 checklist), removed "up to" soft language. Budget stated as firm: "2 REFINE passes maximum."

### MANIFEST.md Circuit Breaker (line 607)
- **Before:** `Maximum iterations: 1 REBUILD + 1 REFINE before human intervention. If a second REBUILD is triggered, the pipeline terminates with diagnostic output for human review. Budget expectation: 25-40% of builds may fail first pass (per council recommendation REC-07).`
- **After:** `Iteration budget: 1 REBUILD + 2 REFINE passes. Stop when PA-05 delta < 0.3 between passes (diminishing returns). If a second REBUILD is triggered, pipeline halts with diagnostic output for human review. Budget expectation: 40-60% of builds will use at least one REFINE cycle (per operational evidence).`

---

## Verification: BV-06 Self-Check

Ran grep for all 7 forbidden phrases against modified MANIFEST.md and artifact-orchestrator.md:

| Pattern | MANIFEST.md | orchestrator.md |
|---------|-------------|-----------------|
| `/pipeline\s+terminates/i` | 0 matches | 0 matches |
| `/single[- ]pass\s*[=(]\s*default/i` | 0 matches | 0 matches |
| `/no\s+feedback\s+loops?/i` | 0 matches | 0 matches |
| `/output\s+labels?/i` | 0 matches | 0 matches |
| `/cannot\s+fix\s+your\s+way/i` | 0 matches | 0 matches |
| `/not\s+part\s+of\s+a\s+build/i` | N/A (different file) | N/A |
| `/no\s+automatic\s+re-execution/i` | 0 matches | 0 matches |

**BV-06 would PASS against the modified spec files.**

---

## Files Modified

| File | Changes | Net Lines |
|------|---------|-----------|
| `ephemeral/va-extraction/MANIFEST.md` | 6 text replacements (FIX-01/03/04/05 + ITEM-02 x2 + table row) | +0 |
| `ephemeral/va-extraction/artifact-orchestrator.md` | 6 text replacements (FIX-09 x4 + FIX-16 + archival wording) | +0 |
| `ephemeral/va-extraction/experiment-protocol.md` | 1 text addition (FIX-28) | +2 |
| `ephemeral/va-extraction/gate-runner-core.js` | +50 lines (BV-06 function + header updates) | +52 |
| `ephemeral/va-extraction/gate-manifest.json` | +8 lines (BV-06 entry + execution order step 0 + count updates) | +8 |

**Total spec impact:** +2 lines (experiment-protocol.md clarification). Target was +0; +2 is negligible.
**Total code impact:** +52 lines (BV-06 gate function).
**Total manifest impact:** +8 lines (BV-06 registration).

---

## Known Out-of-Scope Items

1. **artifact-builder-recipe.md line 622:** Contains `Single-pass = DEFAULT` but this is a builder-facing file not scanned by BV-06. Could be addressed in a future wave.
2. **council-verdict.md:** Contains multiple references to "Single-pass = DEFAULT" in original council rulings. These are historical records and should not be modified.
3. **Backup files (`_backup-pre-implementation/`):** Contain original text. Expected — these are backups.
4. **phase7-adversarial.md, phase7-final-verification.md:** Phase 7 verification docs reference original text. These are historical analysis and should not be modified.

---

*Wave 1 implementation complete. Both ITEM-01 and ITEM-02 fully applied. Ready for Wave 2.*
