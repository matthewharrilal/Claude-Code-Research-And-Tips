# Friction Fix: Low-Cost Iteration Path for Pipeline v3

Date: 2026-02-26
Author: Pipeline Economics Agent
Status: DESIGN COMPLETE

---

## 1. Current Friction Analysis

### Cost of STOPPING (declaring SHIP WITH FIXES or SHIP)

| Action | Agents | Time | Approximate Cost |
|--------|--------|------|-----------------|
| Weaver writes verdict | 0 (already done) | 0 min | $0 |
| Orchestrator updates tracker | 0 | 2 min | $0 |
| **TOTAL** | **0 new agents** | **~2 min** | **~$0** |

### Cost of ITERATING (one REFINE cycle under current protocol)

| Action | Agents | Time | Approximate Cost |
|--------|--------|------|-----------------|
| Spawn REFINE builder (Opus) | 1 | 15-30 min | $5-10 |
| Re-serve HTML + re-capture screenshots (3 viewports) | 0 (orchestrator) | 10 min | $0 |
| Re-run all programmatic gates | 0 (orchestrator code) | 5 min | $0 |
| Orchestrator experiential scan | 0 (orchestrator) | 2 min | $0 |
| Spawn 9 PA Auditors (all Opus) | 9 | 15-25 min (parallel) | $30-45 |
| Spawn Integrative Auditor (Opus) | 1 | 5-10 min | $3-5 |
| Spawn Weaver (Opus) | 1 | 10-15 min | $5-8 |
| **TOTAL** | **12 new agents** | **~60-90 min** | **~$43-68** |

### The Friction Ratio

```
FRICTION RATIO = Cost(iterate) / Cost(stop)
               = (~$55, ~75 min, 12 agents) / (~$0, ~2 min, 0 agents)
               = INFINITY:1 (technically)
               = ~30:1 (using amortized human attention cost)
```

The problem is not that iteration is expensive in absolute terms. The problem is that the MARGINAL cost of proving an improvement exists is disproportionate to the improvement itself. A builder with 21 improvement ideas could implement 5 of them in 15 minutes. But verifying those improvements requires 60+ minutes and $50+ of PA re-audit -- even if the improvements are obviously good (adding backgrounds to blank zones, increasing typographic contrast, etc.).

### Why This Creates Rational Stopping

The orchestrator (or any agent making the REFINE/SHIP decision) faces:

1. **Certain cost:** $50-65 and 60-90 min for each REFINE cycle
2. **Uncertain benefit:** Maybe +0.5 PA-05, maybe +0 (diminishing returns)
3. **Halt condition:** PA-05 delta < 0.3 = HALT (so even a successful REFINE might trigger halt)
4. **Continuation bias:** A DIFFERENT Opus builder must be spawned, losing all context

The economically rational choice is ALWAYS to stop at the first SHIP-eligible score, even if the page has known improvable defects. The pipeline's own iteration budget (2 REFINE max) tacitly acknowledges this: it caps iteration not because 2 is optimal, but because each iteration is so expensive that more than 2 exhausts patience and budget.

---

## 2. Evaluation of 6 Design Options

### Option 1: Mini-PA (Mode 2.5)

**Description:** 3 auditors instead of 9, 15 key questions instead of 69, 1 viewport (1440px) instead of 3.

**Pros:**
- ~70% cost reduction ($10-15 vs $50-65)
- ~65% time reduction (20-25 min vs 60-90 min)
- Still uses independent auditors (not self-assessment)
- Still produces a PA-05 score (Auditor A always included)

**Cons:**
- Loses coverage breadth (Mode 4 catches issues Mode 2 misses -- proven historically)
- PA-05 from 3 auditors has no cross-validation (normally 5 auditors cross-validate PA-05 sub-criteria)
- Responsive issues invisible (no 768px viewport)
- Risk: a regression at 768px passes undetected

**Risk Level:** MEDIUM. Acceptable for REFINE validation where we're looking for improvement/no-regression, not initial discovery.

**Recommended question subset (15 of 69):**
- PA-01 (first impression), PA-03 (one designer?), PA-05 (the metric), PA-45 (single moment)
- PA-02 (readability), PA-08 (font distinction)
- PA-11 (spatial proportions), PA-30 (visual weight)
- PA-12 (scroll rhythm), PA-13 (clear ending)
- PA-14 (grid), PA-17 (transitions)
- PA-18 (metaphor visible?), PA-19 (identity)
- PA-24 (system coherence)

These 15 questions cover all 4 PA-05 sub-criteria + Tier 5 metaphor + the most common failure modes.

### Option 2: Builder Self-Validation

**Description:** After REFINE, the builder runs a self-check against original PA findings. If it addressed the top 3 issues, proceed without re-PA.

**Pros:**
- Near-zero marginal cost ($0-1, 2-3 min)
- Builder has the deepest context on what changed
- Fast feedback loop enables multiple improvements

**Cons:**
- D10 (self-assessment unreliable) is a PROVEN failure mode
- Builder continuation bias: will always claim improvement
- No independent verification of any kind
- PA-05 score becomes stale/fictional after self-validated changes
- Violates the pipeline's core principle: builders COMPOSE, auditors VERIFY

**Risk Level:** HIGH. Self-assessment is the single most documented failure mode in the pipeline's history. The entire PA architecture exists because self-assessment doesn't work.

### Option 3: Gate-Only Validation

**Description:** After REFINE, run ONLY programmatic gates (no PA). If all pass AND builder claims improvement, accept.

**Pros:**
- Very fast (~5 min, $0 additional agents)
- Gates are objective (binary pass/fail)
- Catches identity violations and perception threshold failures

**Cons:**
- Gates cannot measure composition quality (that's the whole point of PA)
- Historical proof: Flagship PASSED all gates with PA-05 1.5/4
- "All gates pass" is a NECESSARY but not SUFFICIENT condition
- Missing exactly the class of improvements REFINE is meant to deliver (compositional quality)
- The improvements a REFINE builder makes (deepening metaphor, enriching transitions) are invisible to gates

**Risk Level:** HIGH for final validation. But LOW as an intermediate check -- gates catch mechanical regressions (broken container, lost borders) that would waste PA auditor time.

### Option 4: Differential PA

**Description:** Only re-audit CHANGED aspects. If REFINE added backgrounds to 3 zones, only ask auditors about those 3 zones.

**Pros:**
- Targets audit effort precisely where changes occurred
- Could reduce from 69 to 10-20 questions
- Maintains independent assessment

**Cons:**
- REFINE changes can have non-local effects (fixing one zone's background changes how adjacent zones read)
- Composition is HOLISTIC -- you cannot assess PA-05 ("does this look designed?") from 3 zones
- Requires orchestrator to determine which questions are affected by which changes (complex, error-prone)
- PA-05 sub-criterion COHERENT explicitly requires whole-page assessment
- Risk: a REFINE that improves 3 zones but degrades overall coherence passes differential PA

**Risk Level:** MEDIUM-HIGH. The holistic nature of compositional quality makes differential assessment fundamentally unreliable for PA-05 scoring. However, it works for TARGETED questions (was this specific fix applied? is this specific zone improved?).

### Option 5: Staged Iteration (RECOMMENDED PRIMARY)

**Description:** Do 2-3 quick REFINE cycles with gate-only validation, THEN one final Mode 4 PA on the improved version. Amortize PA cost across multiple improvements.

**Pros:**
- Multiple improvement cycles at near-zero marginal cost per cycle
- Final Mode 4 PA still provides rigorous, independent assessment
- PA cost amortized across all improvements (not per-improvement)
- Builder can implement ALL 21 ideas across 2-3 quick cycles
- Gates between cycles catch mechanical regressions early
- Total cost: $55-70 for N improvements vs $55-70 PER improvement under current protocol
- Maintains the "compose, evaluate, compose again" philosophy

**Cons:**
- Risk of compounding errors across intermediate cycles without PA check
- Gate-only intermediate checks miss perceptual regressions
- If final PA-05 drops, wasted all intermediate builder cycles
- REFINE builder isolation rules require DIFFERENT Opus per cycle (3 cycles = 3 different builders)

**Risk Level:** LOW-MEDIUM. The compounding error risk is mitigated by: (a) gate checks catch mechanical breaks between cycles, (b) the final Mode 4 PA catches everything that matters, (c) if PA-05 drops, the intermediates were bad anyway and we'd have caught it.

**Mitigations for cons:**
- Add an ABORT GATE between intermediate cycles: if gate runner shows ANY identity FAIL or 2+ perception FAILs, stop intermediate iteration and go to full PA
- Allow same builder for intermediate cycles (isolation only for final), since the point of isolation is fresh eyes for EVALUATION not for BUILDING
- Cap intermediate cycles at 3 (hard limit), then mandatory PA

### Option 6: Improvement Threshold (Trust Builder)

**Description:** If builder's improvement list has 5+ items AND builder implements them, accept on faith without re-PA.

**Pros:**
- Zero verification cost
- Respects builder's compositional judgment

**Cons:**
- Pure trust-based quality ("the builder says it's better")
- No PA-05 measurement = no quality signal
- Pipeline becomes unfalsifiable ("every build is good because the builder said so")
- Violates D10 (self-assessment unreliable)
- Historical: builders have "improved" pages into LOWER PA-05 scores (revision degradation)

**Risk Level:** VERY HIGH. This is not an iteration path; it's an abdication of quality verification. The entire pipeline exists because builder self-assessment is unreliable.

---

## 3. Recommended Approach: Staged Iteration + Mini-PA Hybrid

### The Two-Track Protocol

**Track A: Staged Iteration with Gate-Only Intermediate Checks**
For REFINE verdicts where PA-05 is 2.5-3.5 and the builder has multiple improvement ideas:

```
REFINE BUILD #1 (gate-only) → REFINE BUILD #2 (gate-only) → FULL PA (Mode 4 or Mini-PA)
     ~20 min, ~$8              ~20 min, ~$8                  ~25-75 min, ~$15-55
```

Total for 2 intermediate + 1 final: ~65-95 min, ~$31-71
Compare: 2 full PA cycles under current protocol: ~150 min, ~$100-130

**Track B: Mini-PA for REFINE Validation (Mode 2.5)**
For SHIP WITH FIXES verdicts where changes are mechanical, or for REFINE cycle 1 when the orchestrator wants a lighter check before committing to full Mode 4:

```
REFINE BUILD → MINI-PA (3 auditors, 15 questions, 1440px only)
    ~20 min       ~20 min, ~$12-15
```

Total: ~40 min, ~$20-23

### Decision Tree for Which Track

```
WEAVER VERDICT:

IF SHIP → done
IF SHIP WITH FIXES → apply fixes → gate-only verify → done

IF REFINE:
  COUNT builder improvement ideas from Weaver artistic impression

  IF ideas >= 5:
    → TRACK A (staged iteration)
    → 2-3 gate-only intermediate cycles
    → THEN final PA (Mode 4 if PA-05 was < 3.0, Mini-PA if PA-05 was >= 3.0)

  IF ideas 2-4:
    → TRACK B (single REFINE + Mini-PA)
    → IF Mini-PA shows PA-05 < previous: escalate to Mode 4 PA
    → IF Mini-PA shows PA-05 >= previous + 0.3: SHIP
    → IF Mini-PA shows PA-05 stagnant (delta < 0.3): HALT (diminishing returns)

  IF ideas 0-1:
    → HALT (no actionable improvement path)

IF REBUILD → full pipeline re-run (no shortcut possible)
```

### When to Escalate Mini-PA to Full Mode 4

Mini-PA (Mode 2.5) is a SCREENING tool, not a replacement for Mode 4. Escalation triggers:

1. Mini-PA shows PA-05 DECREASE (possible regression -- need full assessment)
2. Mini-PA auditors flag a NEW issue not in the original PA (need breadth)
3. The build is targeting FLAGSHIP tier (PA-05 >= 3.5 required, Mini-PA insufficient)
4. Mini-PA shows PA-05 >= 3.5 (before declaring FLAGSHIP, MUST verify with Mode 4)

---

## 4. Mini-PA Specification (Mode 2.5)

### Architecture

| Component | Mode 4 (Current) | Mode 2.5 (Mini-PA) |
|-----------|------------------|---------------------|
| PA Auditors | 9 (A-I) | 3 (A, C, G) |
| Integrative Auditor | 1 | 0 (skip) |
| Weaver | 1 (Opus) | 1 (Opus, same protocol) |
| Total agents | 11 | 4 |
| Questions | 69 | 15 |
| Viewports | 3 (1440, 1024, 768) | 1 (1440px only) |
| Screenshots | 24-40 | 8-12 |
| Experiential pass | Full (all auditors) | Full (all 3 auditors) |
| Cross-validation | 4 secondary validators | 0 (Auditor A primary only) |
| Estimated time | 30-45 min (audit phase) | 12-18 min (audit phase) |
| Estimated cost | $43-58 (audit phase) | $12-18 (audit phase) |

### Auditor Selection Rationale

**Auditor A (Impression + Emotion):** ALWAYS included. Owns PA-05 (the primary metric), PA-01 (first impression), PA-45 (best moment). Cannot produce a PA-05 score without A.

**Auditor C (Spatial + Proportion):** Catches the most common REFINE-relevant failures: spatial balance, whitespace voids, proportional relationships. PA-05c (PROPORTIONATE) cross-validator.

**Auditor G (Metaphor + Ideology):** Catches compositional coherence issues: is the metaphor visible? Does identity persist? PA-05b (COHERENT) cross-validator.

**Why not B, D, E, F, H, I:**
- B (Readability): Important but gates cover most readability issues (GR-60 WCAG contrast, GR-21 typography variation)
- D (Flow/Pacing): Important but less likely to change between REFINE cycles (flow is structural, not mechanical)
- E (Grid/Layout): Grid changes are structural -- if REFINE changes the grid, that's REBUILD territory
- F (Consistency): 5 questions, highly specific; most valuable in initial PA, less in re-check
- H (Responsive): Excluded because Mini-PA uses 1 viewport only
- I (Cross-page): Not relevant within a single REFINE cycle

### Mini-PA Question Set (15 questions)

**From Auditor A (9 → 5):**
- PA-01: Does this page make a strong first impression?
- PA-03: Does this feel like one designer or three?
- PA-05: Designed / Coherent / Proportionate / Polished (THE metric)
- PA-45: Single moment to show someone as good design
- PA-65: Music analogy -- ensemble or choir in unison?

**From Auditor C (10 → 5):**
- PA-11: Are spatial proportions intentional or accidental?
- PA-30: Visual weight distribution -- top-heavy, balanced, bottom-heavy?
- PA-31: White space -- breathing or abandoned?
- PA-50: Does the page use the full width or feel constrained?
- PA-66: Can you feel the density arc (compressed → released)?

**From Auditor G (8 → 5):**
- PA-18: Is there a visible governing metaphor?
- PA-19: Does the identity persist throughout or only in the header?
- PA-42: Could you name the metaphor without being told?
- PA-54: Does the content promise match the visual delivery?
- PA-68: Does the metaphor expression deepen or dilute as you scroll?

### Mini-PA Weaver Protocol (Modified)

The Mini-PA Weaver follows the same pa-weaver.md protocol with these adjustments:

1. Still performs experiential anchor (Section 0) -- NON-NEGOTIABLE
2. Scores PA-05 from Auditor A primary scores ONLY (no cross-validation available)
3. Scores Tier 5 from available questions only (5 of 9 Tier 5 questions covered: PA-60 absent, PA-61 absent, PA-62 absent, PA-63 absent, PA-64 absent, PA-65 present, PA-66 present, PA-67 absent, PA-68 present). Report as "X/3 (of 3 assessable)" not "X/9"
4. Fix classification still applies (MECHANICAL / STRUCTURAL / COMPOSITIONAL)
5. Ship thresholds unchanged
6. Finding Status Map required if cycle >= 2

### Mini-PA Limitations (Explicitly Documented)

The Mini-PA CANNOT detect:
- Responsive layout failures (no 768px/1024px viewport)
- Typography detail issues (Auditor B excluded)
- Flow/pacing problems (Auditor D excluded)
- Grid/layout regressions (Auditor E excluded)
- Cross-page coherence issues (Auditor I excluded)
- Subtle consistency/rhythm problems (Auditor F excluded)

These are acceptable omissions for REFINE validation because:
1. Responsive issues don't change in a CSS-only REFINE (same HTML structure)
2. Typography/flow/grid are structural -- REFINE should not be changing them
3. If REFINE IS changing them, that's a sign it should be REBUILD, not REFINE
4. Initial Mode 4 PA already identified these issues; REFINE is about IMPROVEMENT, not DISCOVERY

---

## 5. Protocol Integration

### Modified Orchestrator Decision Flow

Current flow (artifact-orchestrator.md Section 7):
```
VERDICT → REFINE → spawn DIFFERENT Opus builder → Phase 3 FULL RE-AUDIT → VERDICT
```

New flow:
```
VERDICT → REFINE:
  IF improvement_ideas >= 5:
    → STAGED ITERATION:
      → spawn builder, gate-only check (repeat up to 3x)
      → AFTER final intermediate cycle: FULL PA (Mode 4 if PA-05 < 3.0, Mini-PA if >= 3.0)
  ELIF improvement_ideas 2-4:
    → spawn builder → MINI-PA (Mode 2.5)
    → IF PA-05 dropped: escalate to Mode 4
    → IF PA-05 rose >= 0.3: apply ship thresholds
    → IF PA-05 stagnant: HALT
  ELSE:
    → HALT (nothing actionable)
```

### Intermediate Gate-Only Validation Protocol

Between staged iteration cycles, the orchestrator runs:

1. Re-serve the updated HTML
2. Run identity gates (GR-01 through GR-10) -- MUST PASS
3. Run perception gates (GR-11 through GR-15) -- must not WORSEN
4. Run anti-pattern gates (GR-17 through GR-22) -- must not WORSEN
5. Quick visual spot-check: orchestrator looks at 1440px cold-look screenshot, compares to previous

**ABORT conditions between intermediate cycles:**
- Any identity gate that PASSED before now FAILS → ABORT, escalate to full PA
- 2+ perception gates worsen → ABORT, escalate to full PA
- Orchestrator visual spot-check shows obvious regression → ABORT, escalate to full PA

### Builder Isolation Rules for Staged Iteration

Current rule: REFINE builder must be DIFFERENT Opus agent (defeats continuation bias).

Modified rule for staged iteration:
- **Intermediate cycles (gate-only):** SAME builder permitted. Rationale: the builder is COMPOSING, not EVALUATING. Continuation is an ADVANTAGE during composition (builder deepens its own work). Continuation bias is only harmful when the builder EVALUATES its own work -- and it's not evaluating during intermediate cycles.
- **Final PA cycle:** Builder output is assessed by INDEPENDENT auditors. The auditors have fresh eyes regardless of builder continuity.
- **If final PA shows REGRESSION:** The next REFINE cycle MUST use a DIFFERENT builder (continuation led to degradation, not improvement).

This relaxation saves the overhead of spawning a new Opus agent for every intermediate cycle while preserving the independence of evaluation.

---

## 6. Exact Edit Specifications

### 6.1 artifact-orchestrator.md — Section 7 (Phase 4: Verdict and Decision Tree)

**Location:** After "Iteration Decision Function" block (around line 615-630)

**ADD new subsection:**

```markdown
### Low-Friction Iteration Protocol (Staged + Mini-PA)

The standard REFINE protocol requires a full Mode 4 PA re-audit after every REFINE cycle.
This is the FULL VALIDATION path. When the cost of full validation exceeds the expected
benefit, use these low-friction alternatives:

#### Track A: Staged Iteration (5+ improvement ideas)

When the Weaver's artistic impression identifies 5+ actionable improvements:

1. Spawn REFINE builder (Opus). Same builder permitted for intermediate cycles.
2. Builder implements improvements. Output: updated HTML.
3. INTERMEDIATE CHECK (gate-only, no PA):
   - Re-serve HTML. Re-capture 1440px cold-look screenshot only.
   - Re-run identity gates (GR-01–GR-10). All must PASS.
   - Re-run perception gates (GR-11–GR-15). Must not worsen vs previous pass.
   - Re-run anti-pattern gates (GR-17–GR-22). Must not worsen.
   - Orchestrator visual spot-check: compare cold-look to previous.
   - If ANY identity gate FAILED that previously PASSED: ABORT → escalate to Mode 4 PA.
   - If 2+ perception gates worsen: ABORT → escalate to Mode 4 PA.
4. Repeat steps 1-3 up to 3 intermediate cycles.
5. AFTER final intermediate cycle: proceed to FINAL VALIDATION.
   - If previous PA-05 < 3.0: use Mode 4 PA (full re-audit).
   - If previous PA-05 >= 3.0: use Mini-PA (Mode 2.5, see pa-deployment.md Section 6).

#### Track B: Single REFINE + Mini-PA (2-4 improvement ideas)

When the Weaver identifies 2-4 improvements:

1. Spawn DIFFERENT Opus REFINE builder (standard isolation).
2. Builder implements improvements.
3. Run Mini-PA (Mode 2.5): 3 auditors (A, C, G), 15 questions, 1440px only.
4. Decision:
   - PA-05 dropped: ESCALATE to Mode 4 PA (possible regression).
   - PA-05 rose >= 0.3: apply standard ship thresholds.
   - PA-05 stagnant (delta < 0.3): HALT (diminishing returns).

#### Mini-PA Escalation Triggers

Mini-PA (Mode 2.5) must escalate to Mode 4 PA when:
- PA-05 DECREASED vs previous cycle
- Auditors flag a NEW issue not in original PA findings
- Build targets FLAGSHIP tier (PA-05 >= 3.5 threshold)
- Mini-PA shows PA-05 >= 3.5 (FLAGSHIP must be confirmed by Mode 4)
```

### 6.2 pa-deployment.md — New Section 6

**Location:** After Section 5 (Iteration Deployment Notes), before the end-of-file marker

**ADD:**

```markdown
## 6. MINI-PA DEPLOYMENT (Mode 2.5 — Iteration Validation)

### 6.1 When to Use

Mode 2.5 is for REFINE validation only. It is NOT appropriate for:
- Initial PA (always Mode 4)
- REBUILD assessment (always Mode 4)
- FLAGSHIP confirmation (always Mode 4)

Mode 2.5 IS appropriate for:
- REFINE cycle validation when previous PA-05 >= 3.0
- Staged iteration final check when previous PA-05 >= 3.0
- Quick regression screening after mechanical fixes

### 6.2 Auditor Deployment (3 of 9)

| Auditor | Role | Questions |
|---------|------|-----------|
| **A** | Impression + Emotion | PA-01, PA-03, PA-05, PA-45, PA-65 |
| **C** | Spatial + Proportion | PA-11, PA-30, PA-31, PA-50, PA-66 |
| **G** | Metaphor + Ideology | PA-18, PA-19, PA-42, PA-54, PA-68 |

**Total: 15 questions across 3 auditors.**

### 6.3 Screenshot Capture (Reduced)

1 viewport only: 1440px.
Same capture protocol as Mode 4 (Section 2): cold look + scroll-through + animation disable + font wait.
Save to: `screenshots/mini-pa/1440/`

### 6.4 Weaver Protocol (Modified)

Same weaver protocol (pa-weaver.md) with adjustments:
- PA-05: Auditor A primary only (no cross-validation)
- Tier 5: Score from available questions (3 of 9 Tier 5 Qs assessable)
- Report as "Tier 5: X/3 (of 3 assessable, Mini-PA)"
- Finding Status Map: REQUIRED if this is cycle >= 2
- Experiential anchor: REQUIRED (non-negotiable even in Mini-PA)

### 6.5 Mini-PA Limitations

Mode 2.5 CANNOT detect: responsive failures, typography detail issues,
flow/pacing problems, grid regressions, cross-page coherence, consistency/rhythm.
These are acceptable omissions for REFINE validation (see rationale in Section 6.1).

### 6.6 Escalation to Mode 4

If ANY of these triggers fire, abort Mini-PA verdict and run full Mode 4:
1. PA-05 decreased vs previous cycle
2. Any auditor flags a NEW BLOCKING issue not in original PA
3. Target is FLAGSHIP (PA-05 >= 3.5 required)
4. Mini-PA PA-05 >= 3.5 (FLAGSHIP must be Mode 4 confirmed)
```

### 6.3 MANIFEST.md — Quickstart Section (around line 43-44)

**MODIFY** the iteration budget line:

Current:
```
**Iteration budget:** 1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3 between passes (diminishing returns). If a second REBUILD is triggered, pipeline halts with diagnostic output for human review.
```

New:
```
**Iteration budget:** 1 REBUILD + 2 REFINE passes maximum (each with full Mode 4 PA).
Additionally: up to 3 intermediate gate-only cycles within a single REFINE pass (see
artifact-orchestrator.md "Low-Friction Iteration Protocol"). Stop when PA-05 delta < 0.3
between PA-verified passes (diminishing returns). Mini-PA (Mode 2.5) available for REFINE
validation when previous PA-05 >= 3.0 (see pa-deployment.md Section 6).
```

### 6.4 MANIFEST.md — Agent Roster (after Phase 3B agents table)

**ADD note:**

```
**Mini-PA (Mode 2.5) Alternative:** For REFINE validation, a reduced PA deployment is
available: 3 auditors (A, C, G) + 1 weaver = 4 agents, 15 questions, 1 viewport.
See pa-deployment.md Section 6 for deployment protocol and escalation triggers.
```

---

## 7. New Friction Ratio

### Before (Current Protocol)

| Path | Cost | Time | Agents |
|------|------|------|--------|
| STOP | ~$0 | 2 min | 0 |
| ITERATE (1 cycle) | ~$55 | 75 min | 12 |
| **Ratio** | **infinity:1** | **37:1** | **12:0** |

### After (Staged Iteration + Mini-PA)

**Track A: Staged Iteration (5+ ideas, 2 intermediate + 1 Mini-PA)**

| Path | Cost | Time | Agents |
|------|------|------|--------|
| STOP | ~$0 | 2 min | 0 |
| ITERATE (1 intermediate cycle) | ~$8 | 20 min | 1 |
| ITERATE (final Mini-PA) | ~$23 | 35 min | 5 |
| ITERATE (2 intermediate + Mini-PA) | ~$39 | 75 min | 7 |
| **Per-intermediate-cycle ratio** | **~$8** | **10:1** | **1:0** |
| **Full staged ratio** | **~$39** | **37:1** | **7:0** |

**Track B: Single REFINE + Mini-PA (2-4 ideas)**

| Path | Cost | Time | Agents |
|------|------|------|--------|
| STOP | ~$0 | 2 min | 0 |
| ITERATE (1 REFINE + Mini-PA) | ~$23 | 40 min | 5 |
| **Ratio** | **~$23** | **20:1** | **5:0** |

### Effective Friction Reduction

| Metric | Before | After (Track B) | After (Track A per-cycle) | Improvement |
|--------|--------|-----------------|---------------------------|-------------|
| Cost per iteration | ~$55 | ~$23 | ~$8 (intermediate) | 58-85% reduction |
| Time per iteration | 75 min | 40 min | 20 min (intermediate) | 47-73% reduction |
| Agents per iteration | 12 | 5 | 1 (intermediate) | 58-92% reduction |
| Effective friction ratio (time) | 37:1 | 20:1 | 10:1 | 46-73% reduction |

The key insight: **intermediate cycles at ~$8 and 20 min make the marginal cost of trying ONE more improvement very low.** A rational agent now faces:
- "$8 and 20 min to try 5 more improvements" vs "$0 and 0 min to stop"
- Instead of: "$55 and 75 min to try 5 more improvements" vs "$0 and 0 min to stop"

The ratio drops from 37:1 to 10:1 for intermediate work. This is still not 1:1, but it's low enough that the expected benefit of improvement (a noticeably better page) can plausibly outweigh the cost.

### The Critical Insight: Amortization

The old protocol charged the FULL cost of Mode 4 PA for EVERY improvement. The new protocol charges:
- Near-zero for each intermediate improvement (gate-only)
- One Mini-PA or Mode 4 PA at the END, amortized across ALL improvements

This is the same insight as database write batching: don't commit after every row; commit after the batch.

---

## 8. Summary

**Problem:** 30:1+ friction ratio makes stopping always rational, even when improvement is clearly possible.

**Solution:** Two-track low-friction iteration with gate-only intermediate cycles and Mini-PA (Mode 2.5) for final validation.

**Key design decisions:**
1. Mini-PA uses 3 auditors (A, C, G) covering the 3 most REFINE-relevant dimensions
2. Intermediate cycles use gate-only validation (fast, cheap, catches regressions)
3. Same builder permitted for intermediate cycles (continuation aids composition)
4. Escalation to Mode 4 is automatic when Mini-PA detects anomalies
5. FLAGSHIP confirmation always requires Mode 4 (no shortcut)

**What this does NOT change:**
- Initial PA is always Mode 4 (discovery needs breadth)
- REBUILD always triggers full re-run (composition failure needs full re-assessment)
- PA-05 is still the primary metric
- Fresh-eyes principle still applies to all auditors
- Final page must still pass all REQUIRED gates

**New friction ratio:** 10:1 for intermediate cycles, 20:1 for Mini-PA validated cycles.
Down from 37:1 (or effectively infinity:1 in cost terms).
