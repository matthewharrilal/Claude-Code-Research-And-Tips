# 04 — Execution Gap Analysis: Spec vs Enforcement

**Build:** yegge-gas-town-2026-02-25
**Analyst:** execution-analyst (Opus)
**Scope:** Why do structurally enforced things work while spec-mandated voluntary things fail?

---

## 1. The Central Pattern

The pipeline exhibits a clean binary divide:

| Category | Example | Worked? | Why? |
|----------|---------|---------|------|
| **Structural** | BV gates halt Phase 2 | YES | Builder literally cannot spawn if BV fails |
| **Structural** | PA isolation (no brief to auditors) | YES | Orchestrator prompt construction omits the files |
| **Structural** | Screenshot pre-capture before PA | YES | Screenshots are input to PA spawn — can't spawn without them |
| **Voluntary** | GR-48 meta-gate | NO | Nobody calls `runGateCoverage()` after collecting results |
| **Voluntary** | Tracker L2 fields | NO | Nothing checks whether fields are filled |
| **Voluntary** | Pre-flight checkboxes | NO | Work happened, tracking didn't |
| **Voluntary** | GR-60 re-run post-REFINE | NO | Orchestrator chose not to re-run despite REFINE targeting contrast |
| **Voluntary** | Integrative Auditor sequencing | NO | Ran in parallel with PA auditors instead of after |

**The dividing line is not complexity. It is whether the next step physically depends on the current step completing correctly.**

BV gates work because Phase 2 cannot begin without BV results. PA isolation works because the orchestrator constructs the prompt, and the files simply are not included. But GR-48 has no downstream consumer — nothing fails if it never runs. Tracker L2 fields have no reader — nothing checks them during the pipeline.

---

## 2. Complete Map: Spec-Mandated Actions Without Enforcement

### 2.1 Gate Execution Gaps

| Spec Mandate | Source | What Should Happen | What Actually Happened | Enforcement Mechanism |
|-------------|--------|-------------------|----------------------|----------------------|
| Run ALL 20 REQUIRED gates | gate-manifest.json tiers.required | 20 gates produce results | 30/42 ran, 12 missing. Of 20 REQUIRED: ~15-17 actually ran | **NONE.** No wrapper forces all gates. |
| GR-48 runs after all results collected | gate-manifest.json executionOrder step 6 | `runGateCoverage(allResults)` called with unified array | Never called. Results were split across JSON + tracker + notes. | **NONE.** No code assembles unified results. |
| GR-49 runs after results file written | gate-manifest.json executionOrder step 7 | `checkGateResultIntegrity()` called | Never called | **NONE.** No trigger after file write. |
| GR-07 runs as RECOMMENDED | gate-manifest.json tiers.recommended | Pure B/W check executed | Result absent from JSON | **NONE.** Function exists in code but result not collected. |
| GR-60 re-run after REFINE targeting contrast | Logical necessity | Gate verifying fix effectiveness | Orchestrator skipped it, noted "no REFINE changes affected these" — FALSE, REFINE explicitly targeted contrast | **NONE.** No "re-run failed gates" rule enforced. |
| Gates run at 768px viewport | gate-manifest.json executionOrder step 5 | `runGateRunner(page)` at 768px | Unclear if step 5 ran — no 768px gate results in JSON | **NONE.** No multi-viewport gate orchestration. |

### 2.2 Tracker Population Gaps

| Spec Mandate | Source | What Should Happen | What Actually Happened | Enforcement Mechanism |
|-------------|--------|-------------------|----------------------|----------------------|
| ALL `___` fields populated by pipeline end | Tracker instructions line 3 | 100% fill rate | 67% fill rate (200/298 items filled) | **NONE.** No completion check. |
| L2 checkboxes for Pre-Flight (22 items) | Tracker PF-1/2/3 | Each file verified individually | 0/22 checked despite work happening | **NONE.** |
| L2 checkboxes for Phase 0 (7 items) | Tracker P0-1/2 | Routing verification recorded | 0/7 checked | **NONE.** |
| L2 checkboxes for Phase 1 (18 items) | Tracker P1-1/2/3 | Brief structure verified per-field | 0/18 checked | **NONE.** |
| L2 checkboxes for Phase 2 (16 items) | Tracker P2-1/2/3 | Builder routing + output verified | 0/16 checked | **NONE.** |
| BV gate detail values | Tracker P1-3 | Per-tier counts, delta values, ratios recorded | All `___` despite "all PASS" at L0 | **NONE.** |
| Agent detail tables (Model/Start/End/Output) | Tracker L3 sections | 6 agent tables filled | 3/6 blank (Phases 0, 1, 2) | **NONE.** |
| Post-Run Verification | Tracker bottom section | All consistency checks run | 0% completed | **NONE.** |

### 2.3 Orchestrator Process Gaps

| Spec Mandate | Source | What Should Happen | What Actually Happened | Enforcement Mechanism |
|-------------|--------|-------------------|----------------------|----------------------|
| GR-23-28 orchestrator decision rules | orchestrator.md Section 9 | 6 pre-build checks run as text verification | Not documented as run | **NONE.** Text-based checks with no programmatic enforcement. |
| Experiential scan BEFORE PA deployment | orchestrator.md Section 6 Phase 3A+ | Scan results recorded in tracker, THEN PA spawned | Scan happened but experiential pass verification table (P3B-3) left blank for all 9 auditors | **PARTIAL.** Scan happened; verification of auditor compliance didn't. |
| Integrative Auditor runs AFTER all 9 PA reports | orchestrator.md Section 6, pa-deployment.md | Sequential: 9 PA -> Integrative reads all 9 | Integrative ran in parallel with PA auditors (received screenshots only, not reports) | **NONE.** The manifest says "receives all 9 reports" but nothing prevents early spawn. |
| Gate result JSON includes ALL results | GR-48 spec | Unified array with BV + GR + experiential gates | Results split: BV in tracker, GR-61/62/64 tracked separately, core gates in JSON | **NONE.** No unified collection mechanism. |

### 2.4 Quality/Consistency Gaps

| Spec Mandate | Source | What Should Happen | What Actually Happened | Enforcement Mechanism |
|-------------|--------|-------------------|----------------------|----------------------|
| Gate results match code output | gate-runner-core.js | JSON values = what code computes | At least 3 gates (GR-05, GR-08, GR-15) have results that don't match code logic | **NONE.** No code-to-result validation. |
| GR-50 = Conviction Statement | gate-manifest.json | GR-50 checks conviction statement | Used for multi-coherence reporting (gate ID collision) | **NONE.** No schema enforcement on result IDs. |
| DPR corrected before ANY gate execution | gate-runner-core.js checkDPR() | `deviceScaleFactor: 1` set before all gates | DPR workaround applied only to viewport size, not to browser context | **PARTIAL.** Workaround incomplete. |

---

## 3. Why BV Gates Work but GR-48 Doesn't

Both are REQUIRED in the manifest. Both have executable code. The difference:

| Property | BV Gates (BV-01-04) | GR-48 (Gate Coverage) |
|----------|---------------------|----------------------|
| **When it runs** | BETWEEN Phase 1 and Phase 2 | AFTER all other gates |
| **What depends on it** | Phase 2 builder spawn | Nothing |
| **Failure consequence** | Builder literally cannot be spawned | An "INCOMPLETE" label nobody reads |
| **Structural position** | GATEWAY — blocks the pipeline's most expensive step | EPILOGUE — runs after the pipeline is essentially done |
| **Input availability** | Brief text (single document, immediately available) | ALL gate results (scattered across phases, formats, and tracking locations) |
| **Cognitive load to execute** | Low: run one function, check result | High: collect results from 3+ sources, assemble array, then run function |

**The fatal asymmetry is positional.** BV gates are positioned as a gateway — the pipeline's most valuable asset (the builder) depends on them. GR-48 is positioned as an afterthought — by the time you'd run it, you've already spent the PA budget and have a verdict. There is no incentive to run it because its failure doesn't change any decision.

**Secondary factor: input complexity.** BV takes a single string (`briefText`). GR-48 takes `allResults` — an array that must be manually assembled from:
1. BV results (tracked in execution tracker, not JSON)
2. Core gate results (in JSON)
3. GR-61/62 results (tracked separately in execution tracker)
4. GR-64 result (tracked post-weaver, separate from core JSON)

The orchestrator would need to write code that collects from 4 different sources into one array. Nobody did.

---

## 4. Could a Single `runAllGates()` Wrapper Solve the Gate Problem?

**Partially yes, but it's insufficient alone.**

### What `runAllGates()` Would Fix

```javascript
async function runAllGates(page, briefText, screenshotDir, auditorReports, weaverReport) {
  const allResults = [];

  // Step 1: Brief verification
  allResults.push(...runBriefVerification(briefText));

  // Step 2: Core gates at 1440px
  allResults.push(...await runGateRunner(page));

  // Step 2.5: DPR
  allResults.push(await checkDPR(page));

  // Step 2.7: Screenshot quality
  allResults.push(await checkScreenshotQuality(screenshotDir));

  // Step 3: Anti-pattern gates
  allResults.push(...await runAntiPatternGates(page));

  // Step 4: Wave 2 gates
  allResults.push(...await runWave2Gates(page));

  // Step 5: 768px re-run
  await page.setViewportSize({ width: 768, height: 1024 });
  allResults.push(...await runGateRunner(page));

  // Step 5.5: Usability priority (post-weaver)
  if (auditorReports && weaverReport) {
    allResults.push(checkUsabilityPriority(auditorReports, weaverReport));
  }

  // Step 6: Meta-gate (NOW GUARANTEED TO RUN)
  allResults.push(runGateCoverage(allResults));

  // Step 7: Integrity check
  allResults.push(checkGateResultIntegrity(resultFiles, allResults));

  return allResults;
}
```

**This would fix:**
- GR-48 never running (it's step 6 in the sequence, automatically called)
- GR-49 never running (step 7, automatically called)
- Missing gates at 768px (step 5 forces viewport change)
- Scattered results (single `allResults` array)
- GR-07/GR-05b being missed (included in step 2)

**This would NOT fix:**
- GR-60 not re-running after REFINE (need a "re-run failed gates" policy)
- Tracker L2 population (different system entirely)
- Gate result recording accuracy (manual vs code output)
- GR-64 timing (needs weaver report, which comes much later)

### The Timing Problem

`runAllGates()` cannot be a single call because gates span 3 pipeline phases:
1. **Phase 1:** BV-01 through BV-04 (before builder)
2. **Phase 3A:** GR-01 through GR-53, GR-60, GR-61, GR-62 (after builder)
3. **Phase 3C-post:** GR-64 (after weaver)
4. **Meta:** GR-48, GR-49 (after everything)

**Better design: 4 gate execution functions** that the orchestrator calls at the right moment, with all results accumulating in a single array:

```
Phase 1:    bvResults = runBriefVerification(brief)
Phase 3A:   grResults = runPhase3Gates(page, screenshotDir)
Phase 3C:   postResults = runPostWeaverGates(reports, weaver)
Final:      metaResults = runMetaGates(bvResults + grResults + postResults)
```

The key insight: **GR-48 and GR-49 MUST be the last functions called**, and they MUST receive the accumulated results from all prior phases. This requires the orchestrator to maintain a running results array throughout the pipeline.

---

## 5. What About Tracker Population?

The tracker problem is fundamentally different from the gate problem. Gates are executable code; the tracker is a markdown document that requires manual text editing.

### Why the Tracker Fails

1. **Time pressure asymmetry.** L0 takes 1 second (one `[x]`). L2 takes 2-5 minutes per phase (5-22 individual items). Under time pressure, L0 wins every time.
2. **No downstream consumer.** Nobody reads L2 during the pipeline. The only consumer is the post-run verification, which itself was not completed.
3. **Cognitive switching cost.** Filling tracker fields requires switching from "pipeline operator" mode (spawn agents, check results) to "documentation" mode (find the right field, enter the right value). Each switch costs ~30 seconds of reorientation.
4. **Template verbosity.** 298 trackable items for a pipeline that takes ~93 minutes = 1 item every 19 seconds if tracking were continuous. This is unrealistic.

### What Would Fix Tracker Population

**Option A: Programmatic auto-fill.** A `tracker-populate.sh` script that:
- Checks file existence (PF-1a through PF-2e)
- Counts lines (P0-2a, P1-2a)
- Extracts BV gate values from JSON
- Records timestamps
- Checks for HTML markers (conviction, self-eval, experiential)
- Counts screenshots per viewport

Per the retrospective's estimate: 2-3 hours to write, covers ~60% of fields. The remaining 40% are judgment calls (routing verification, quality assessments) that require manual entry.

**Option B: Eliminate L0 manual entry. Auto-derive from L2.** If L2 is empty, L0 cannot be `[x]`. This makes the two-story problem impossible. But it doesn't solve the root problem — L2 still needs filling.

**Option C: Reduce tracker to 50 critical fields.** The current 298 items include many that are either:
- Auto-derivable (file existence, line counts, timestamps)
- Redundant (L0 summarizes L2 which summarizes L3)
- Rarely useful (compression ratios, per-agent timing)

A 50-field tracker with auto-fill for 30 of them leaves 20 manual entries — realistic at ~1 per phase.

**Recommendation: Option C + Option A.** Drastically reduce the tracker to ~50 fields. Auto-fill 60% of those. Leave 20 manual entries that the orchestrator MUST complete before the next phase can begin (making them structural, not voluntary).

---

## 6. What Would a "Deterministic Runtime" Look Like?

A script that FORCES every step. Not a document that DESCRIBES every step.

### Architecture: Pipeline Controller Script

```bash
#!/bin/bash
# pipeline-controller.sh — Deterministic Pipeline v3 Runtime
# Every step either completes or the pipeline halts.

set -euo pipefail  # Halt on ANY error

BUILD_DIR="ephemeral/builds/${SLUG}-$(date +%Y-%m-%d)"
RESULTS_JSON="${BUILD_DIR}/gate-results-unified.json"
TRACKER="${BUILD_DIR}/execution-tracker.md"

# ============ PRE-FLIGHT ============
echo "Phase: PRE-FLIGHT"
# Verify every file exists. Script halts if ANY is missing.
for f in $REQUIRED_FILES; do
  [ -f "$f" ] || { echo "HALT: Missing $f"; exit 1; }
  echo "  OK: $f ($(wc -l < "$f") lines)"
done
# Auto-populate tracker PF-1a through PF-2e

# ============ PHASE 0: CONTENT ANALYSIS ============
echo "Phase: 0 — Content Analysis"
# Spawn content analyst, capture output path
P0_OUTPUT=$(claude_spawn "content-analyst" --model opus ...)
[ -f "$P0_OUTPUT" ] || { echo "HALT: No content map"; exit 1; }
P0_LINES=$(wc -l < "$P0_OUTPUT")
# Auto-populate tracker P0-2a, P0-2b, P0-2c, P0-2d

# ============ PHASE 1: BRIEF ASSEMBLY ============
echo "Phase: 1 — Brief Assembly"
P1_OUTPUT=$(claude_spawn "brief-assembler" --model opus ...)
[ -f "$P1_OUTPUT" ] || { echo "HALT: No brief"; exit 1; }

# BV GATES — STRUCTURAL ENFORCEMENT
BV_RESULTS=$(node -e "
  const fs = require('fs');
  const brief = fs.readFileSync('$P1_OUTPUT', 'utf-8');
  // ... run runBriefVerification(brief) ...
  // Output JSON
")
BV_PASS=$(echo "$BV_RESULTS" | jq 'all(.status == "PASS")')
if [ "$BV_PASS" != "true" ]; then
  echo "BV FAIL — returning to brief assembler (cycle 1/2)"
  # ... revision cycle ...
fi
# Auto-populate tracker P1-3 (BV detail values from JSON)

# ============ PHASE 2: BUILDING ============
# ... similar pattern ...

# ============ PHASE 3A: GATES ============
echo "Phase: 3A — Gate Runner"
# Run ALL gates in sequence via runAllGates()
GATE_RESULTS=$(node gate-runner-orchestrator.js "$HTML_PATH" "$BRIEF_PATH" "$SCREENSHOT_DIR")
# Write unified JSON
echo "$GATE_RESULTS" > "$RESULTS_JSON"

# Check for REQUIRED failures
REQUIRED_FAILS=$(echo "$GATE_RESULTS" | jq '[.[] | select(.tier=="required" and .status=="FAIL")] | length')
if [ "$REQUIRED_FAILS" -gt 0 ]; then
  echo "REQUIRED gate failure — verdict: REBUILD or REFINE per category"
  # ... verdict logic ...
fi

# GR-48 RUNS HERE — GUARANTEED
GR48=$(echo "$GATE_RESULTS" | jq '.[] | select(.gate=="GR-48")')
echo "GR-48 coverage: $GR48"

# Auto-populate tracker P3A-4 (gate results table from JSON)

# ============ PHASE 3B: PA AUDIT ============
# ... spawn auditors ...

# ============ PHASE 3C: VERDICT ============
# ... spawn weaver ...

# ============ POST-WEAVER GATES ============
# GR-64 runs here — GUARANTEED
GR64=$(node -e "checkUsabilityPriority(auditorReports, weaverReport)")
echo "$GR64" >> "$RESULTS_JSON"

# ============ META-GATES (FINAL) ============
# GR-48 re-run with complete results — GUARANTEED
# GR-49 integrity check — GUARANTEED

# ============ TRACKER FINALIZATION ============
# Auto-populate all automatable fields
# Check L2 completion rate
L2_EMPTY=$(grep -c '\[ \]' "$TRACKER")
if [ "$L2_EMPTY" -gt 20 ]; then
  echo "WARNING: $L2_EMPTY tracker fields still empty"
fi
```

### What This Would Fix

| Current Problem | Script Solution |
|----------------|----------------|
| GR-48 never runs | Built into the script sequence |
| 12/42 gates missing | Script runs ALL gates, halts on missing |
| Tracker L2 empty | Script auto-populates automatable fields |
| Pre-flight 0/22 | Script verifies files before proceeding |
| BV detail missing | Script extracts values from BV JSON output |
| Gate results scattered | Single unified JSON file |
| DPR not corrected | Script sets `deviceScaleFactor: 1` before any gate |
| REFINE doesn't re-run failed gates | Script has explicit "re-run failed gates" step in REFINE branch |

### What This Would NOT Fix

- **Judgment-based tracking** (routing verification, quality assessments)
- **Orchestrator ad-hoc decisions** (skipping GR-60 re-run, parallel Integrative)
- **Gate result accuracy** (manual edits to JSON after code runs)
- **Creative decisions** (mode selection, REFINE focus areas)

---

## 7. Is the Orchestrator Overwhelmed?

**Yes. This is an attention problem disguised as an execution problem.**

### Evidence of Cognitive Overload

1. **885 items across 9 artifacts.** The orchestrator spec alone is ~900 lines. The manifest is ~900 lines. Gate runner is ~1,650 lines. Gate manifest is ~200 lines. Execution tracker template is ~600 lines. Total orchestrator reading: ~4,250 lines BEFORE the pipeline starts.

2. **222 items in the orchestrator doc itself.** The orchestrator must hold 222 specific mandates in working memory while also making creative decisions (mode selection, REFINE focus areas) and managing parallel agents.

3. **Tracker has 298 trackable items.** That is approximately 1 tracking action every 19 seconds during a 93-minute pipeline. No orchestrator — human or LLM — can maintain that cadence.

4. **Progressive degradation pattern.** Tracker fill rate is INVERSELY correlated with pipeline phase:
   - Pre-Flight (Phase -1): 0% filled
   - Phase 0: 0% filled
   - Phase 1: 0% filled
   - Phase 2: 0% filled
   - Phase 3A screenshots/setup: ~80% filled
   - Phase 3B PA deployment: ~70% filled
   - Phase 3C Weaver: ~90% filled

   The orchestrator filled what was IMMEDIATELY relevant (Phase 3 details needed for PA deployment and verdict) and skipped what was NOT immediately relevant (early phases already completed). This is classic attention triage under load.

5. **L0/L2 divergence is a rationalization pattern.** The orchestrator marked L0 as complete because the WORK was complete. L2 documents the EVIDENCE that the work was complete. Under attention pressure, the orchestrator substituted "I did the work" for "I documented that I did the work."

### The Attention Budget

An LLM orchestrator has a finite context window and finite "deliberate attention" per turn. Each pipeline phase requires:
- Read the relevant spec section (~100-200 lines)
- Construct the agent prompt (~50-200 lines)
- Spawn the agent
- Read the output
- Decide the next step
- Fill the tracker

That last step — fill the tracker — is the one that gets dropped because it doesn't contribute to the NEXT step. It is pure documentation overhead with no immediate return on attention investment.

### Counter-Argument: The Orchestrator DID Track Phase 3

The Phase 3 sections (screenshots, PA deployment, Weaver) are well-tracked. PA auditor deployment (P3B-1a through P3B-1g) is 100% checked. This suggests the orchestrator CAN track when:
1. The tracking is immediately useful (PA deployment verification prevents costly errors)
2. The phase is novel/complex (first time deploying 9 parallel auditors)
3. The orchestrator is in "verification mode" rather than "production mode"

The early phases (0, 1, 2) were routine — content analysis, brief assembly, builder spawn. The orchestrator had done these before (or they were straightforward enough to not require verification). Phase 3 was where novelty and risk concentrated, so attention concentrated there.

---

## 8. Minimal Enforcement Set: Maximum Coverage with Minimum Mechanism

Based on the analysis, here are the interventions ranked by coverage/effort ratio:

### Tier 1: Do These First (Cover 60% of Gaps)

**1. Unified Gate Runner Wrapper (`runPhase3Gates` + `runMetaGates`)**
- Creates: Single function that runs ALL Phase 3A gates in sequence
- Fixes: GR-48 never running, missing gates (GR-07, GR-05b, GR-49), scattered results, 768px gap
- Effort: 2-4 hours (wrapper around existing functions)
- Coverage: 6/12 missing gates, 1/4 tracker sections (gate detail auto-population)

**2. Gate Results Accumulator**
- Creates: A `results[]` array that persists across all pipeline phases
- Fixes: BV results missing from JSON, GR-61/62/64 tracked separately, GR-48 input problem
- Effort: 1-2 hours (modify orchestrator to maintain array)
- Coverage: Enables GR-48 to work, enables unified JSON output

**3. Post-REFINE Failed-Gate Re-Run Rule**
- Creates: "After REFINE, re-run every gate that FAILED in initial pass" (binary rule)
- Fixes: GR-60 not re-verified after contrast REFINE, GR-50/51 not re-checked
- Effort: 30 minutes (add to REFINE protocol + wrapper)
- Coverage: Closes the "did the fix work?" verification gap

### Tier 2: Do These Next (Cover 25% of Gaps)

**4. Tracker Auto-Population Script**
- Creates: `tracker-populate.sh` that fills automatable fields
- Fixes: Pre-flight 0/22, file existence checks, line counts, timestamps, screenshot counts
- Effort: 3-4 hours
- Coverage: ~60% of tracker fields (the easy ones)

**5. Phase-Gated Tracker Check**
- Creates: Before spawning Phase N+1 agent, verify Phase N tracker section is >80% filled
- Fixes: L0/L2 divergence, early phase tracking gaps
- Effort: 1 hour (add check to orchestrator prompt)
- Coverage: Makes tracker population structural instead of voluntary

### Tier 3: Do These Eventually (Cover 15% of Gaps)

**6. Reduced Tracker (298 -> ~50 Critical Fields)**
- Creates: Slim tracker with only decision-relevant fields
- Fixes: Cognitive overload, unrealistic tracking cadence
- Effort: 4-6 hours (redesign tracker, test)
- Coverage: Makes 100% fill rate achievable

**7. Gate Result Schema Enforcement**
- Creates: JSON schema for gate results (gate ID, tier, status, measured values)
- Fixes: GR-50 ID collision, result recording diverging from code output
- Effort: 2-3 hours
- Coverage: Result integrity, prevents manual edits breaking semantics

---

## 9. Root Cause Taxonomy

Synthesizing all the above, the execution gaps have 3 root causes, not 1:

### Root Cause 1: No Execution Engine (MECHANICAL)

The pipeline has specs but no runtime. Specs describe what should happen; nothing forces it to happen. The gate-manifest.json lists 42 gates with execution order, but there is no script that walks through that execution order. The orchestrator must read the manifest, remember the order, invoke each function, collect results, and ensure nothing is skipped. This is a mechanical problem solvable with code.

**Fix:** Wrapper functions + accumulator (Tier 1 items 1-3)

### Root Cause 2: Attention Budget Exhaustion (COGNITIVE)

The orchestrator has 222+ mandates, 298 tracker fields, and ~4,250 lines of spec to hold in working memory. Under this load, it correctly triages: critical-path items (agent spawning, PA deployment, verdict logic) get attention; documentation/verification items (tracker fields, meta-gates) get dropped. This is not a failure of diligence — it is a predictable consequence of overload.

**Fix:** Reduce cognitive load (Tier 2-3 items 4-6) + auto-fill where possible

### Root Cause 3: Missing Feedback Loops (ARCHITECTURAL)

Nothing in the pipeline reads tracker L2 fields or GR-48 output or Post-Run Verification results. They are write-only data. Humans write documentation because other humans read it. The pipeline writes documentation that nobody reads. This creates a rational-neglect dynamic: the orchestrator learns (implicitly) that skipping L2 has no consequences, so it skips L2.

**Fix:** Create consumers for verification data. Make tracker fields gate subsequent phases (Tier 2 item 5). Make GR-48 output determine whether the verdict is valid.

---

## 10. The Single Most Important Change

If I could make only ONE change to close the most gaps:

**Add GR-48 as a verdict PRECONDITION, and give it a unified results array.**

Currently the verdict flow is:
```
PA reports -> Weaver -> Verdict (SHIP/REFINE/REBUILD)
```

Change to:
```
PA reports -> Weaver -> Verdict DRAFT -> GR-48 check -> Verdict FINAL
```

If GR-48 fails (required gates missing), the verdict becomes INCOMPLETE regardless of PA-05 score. The orchestrator cannot SHIP or REFINE an incomplete run. This:
- Forces GR-48 to actually run (it's a precondition for the most valuable output)
- Forces result collection (GR-48 needs all results as input)
- Creates a feedback loop (missing gates delay the verdict)
- Leverages the same structural enforcement pattern that makes BV gates work

**Current state:** GR-48 is an epilogue nobody reads.
**Proposed state:** GR-48 is a gateway nobody can skip.

The manifest already says "GR-48 FAIL = INCOMPLETE" in the verdictLogic. The problem is that nobody invokes the check that would produce the FAIL. Moving GR-48 from "optional meta-gate" to "required verdict precondition" costs zero implementation effort beyond calling the function at the right time.

---

## 11. Summary: The Execution Gap Is Three Problems, Not One

| Problem | Type | Solution Class | Priority |
|---------|------|---------------|----------|
| No runtime engine for gate execution | MECHANICAL | Write wrapper functions | P0 |
| Orchestrator attention exhaustion | COGNITIVE | Reduce tracker, auto-fill | P1 |
| No consumers for verification data | ARCHITECTURAL | Make verification gate subsequent steps | P2 |

The pipeline's specs are detailed and largely correct. The execution gap is not about spec quality — it is about the absence of machinery that converts specs into runtime behavior. The closest analogy: having a detailed test suite that nobody runs. The tests exist, the assertions are correct, but `npm test` is never invoked.

The fix is not more spec. It is a `pipeline-controller` that executes the spec deterministically, collects results into a unified store, gates subsequent phases on prior verification, and auto-populates what can be auto-populated.
