# 19 -- ORCHESTRATOR CROSS-REFERENCE: Design vs. Proven Patterns

**Agent:** metacog-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference every orchestrator step against architectures that actually worked
**Inputs:** 04-orchestrator-research.md (831 lines), 07-INPUT-SPEC.md (689 lines), 08-VERIFICATION-SPEC.md (620 lines), memory/agent-team-lessons.md (81 lines), memory/MEMORY.md

---

## REFERENCE ARCHITECTURES (What Actually Worked)

| Architecture | Result | Key Properties |
|-------------|--------|----------------|
| **CD-006** | 39/40, PA-05 ~3.5/4 (Ceiling tier, NOT Flagship) | Single Opus, full catalog access, rich reference material, no pipeline overhead |
| **Middle Experiment** | PA-05 4/4 DESIGNED | 8 agents, flat file-bus, Opus planner + Opus builder, 100-line recipe, ~35 min, zero inter-agent messaging |
| **Remediation Execution** | PA-05 2.5/4 (+1.0 from 1.5) | Opus builder, 1,025-line spec, Mode 4 PA, same builder for fix cycle |
| **Mode 4 PA** | 48 questions answered, 9/9 caught whitespace void | Screenshot pre-capture (102 images), 9 Opus auditors parallel, 1 weaver, zero Playwright contention |

**CRITICAL FRAMING:** CD-006 is Ceiling tier. Flagship 4/4 has NEVER been achieved. The orchestrator targets BEYOND CD-006 — into territory with N=0 evidence. Every "match" below means the orchestrator replicates a proven pattern; every "mismatch" means the orchestrator departs into untested territory.

---

## STEP-BY-STEP CROSS-REFERENCE

### Step 1: INTAKE (Content Selection + Validation)

**Orchestrator design (04-orchestrator-research.md):**
- Receives content file path from user
- Validates content exists and is readable
- No content generation — curation only

**Cross-reference against proven patterns:**

| Pattern | CD-006 | Middle | Remediation | Match? |
|---------|--------|--------|-------------|--------|
| Content pre-selected by human | YES | YES | YES (inherited HTML) | **MATCH** |
| No content generation by pipeline | YES | YES | YES | **MATCH** |
| Content complexity assessment | N/A | N/A | N/A | **UNTESTED** — orchestrator adds content complexity routing that no proven architecture used |

**Verdict: MATCH with one addition.** The intake step is conservative — content comes from outside. The content complexity assessment is new but low-risk (informational, not behavioral).

**Risk:** LOW. The only failure mode is the orchestrator rejecting valid content or misclassifying complexity. Neither blocks the build.

---

### Step 2: SPAWN OPUS BUILDER (Single Agent, Rich Reference)

**Orchestrator design:**
- Single Opus agent plans AND builds (Fat Core)
- Builder reads 6 files: content, conventions brief (~225 lines), tokens.css, prohibitions.md, mechanism-catalog.md, merged-components.css
- Total ~2,120 non-content lines, ~315 effective instruction lines
- Reading order: content first -> constraints+principles -> vocabulary -> execution

**Cross-reference:**

| Pattern | CD-006 | Middle | Remediation | Match? |
|---------|--------|--------|-------------|--------|
| Opus as builder | YES | YES | YES | **MATCH** (N=4, zero exceptions for quality builds) |
| Single agent plans + builds | YES | NO (separate planner) | NO (inherited plan) | **PARTIAL** — CD-006 match, Middle mismatch |
| Direct mechanism catalog access | YES | YES (told "Read mechanism-catalog.md") | NO (catalog not referenced) | **MATCH** for the 2 highest-scoring builds |
| Builder instruction volume 100-300 lines | ~100 (CD-006) | ~100 (Middle recipe) | ~1,025 (Remediation) | **MATCH at ~315** — sits in the sweet spot. CD-006/Middle at ~100; Remediation at 1,025 scored lower |
| Recipe format (not checklist) | Constitutional (CD-006) | Recipe (Middle) | Recipe-like spec | **DEPENDS on conventions brief format** — if dispositional/recipe, MATCH; if checklist, MISMATCH |
| tokens.css + prohibitions.md access | YES (full design system) | YES (via planner routing) | YES | **MATCH** |

**Verdict: STRONG MATCH with one critical dependency.**

The architecture replicates the CD-006 pattern (single Opus + rich reference) almost exactly. The ~315 effective instruction lines sit between the proven sweet spots (100 for CD-006/Middle, 1,025 for Remediation). Direct catalog access matches both highest-scoring builds.

**Critical dependency:** The conventions brief MUST be recipe/dispositional format, not checklist. Middle experiment used a 100-line recipe with sequenced steps and action verbs ("Read/Select/Deploy/Assess"). If the conventions brief drifts to "Verify/Fail if/Must be" constraint language, it reproduces the Flagship failure mode (71-line checklist -> 1.5/4).

**Risk:** MEDIUM. The step itself is proven. The risk is in the BRIEF FORMAT, not the architecture.

---

### Step 3: GATE RUNNER (21 Gates via Playwright)

**Orchestrator design:**
- 21 gates: 12 composition-critical (Tier A), 7 identity (Tier B), 2 behavioral (Tier C)
- All gates run via Playwright against served HTML
- Sequential execution (one gate at a time)
- Flagship-elevated thresholds for 6 gates
- Structured JSON output per gate

**Cross-reference:**

| Pattern | CD-006 | Middle | Remediation | Flagship Experiment | Match? |
|---------|--------|--------|-------------|-------------------|--------|
| Programmatic gates | NO | NO | NO (manual verification) | YES (6 gates) | **NEW** — only Flagship used gates, and they PASSED while PA FAILED |
| Sequential Playwright scheduling | N/A | N/A | N/A | YES (sequential) | **MATCH** with Flagship + memory lessons |
| Gate count | 0 | 0 | 0 | 6 | **EXPANSION** — 6 -> 21 gates is a 3.5x increase with N=0 validation |
| Flagship threshold elevations | N/A | N/A | N/A | YES | **MATCH** with Flagship design |

**Verdict: EXPANSION INTO UNTESTED TERRITORY.**

This is the most significant departure from proven patterns. NO successful build (CD-006, Middle, Remediation) used programmatic gates. The ONE build that used gates (Flagship) PASSED all gates but FAILED perceptually. This is the "programmatic verification ≠ perceptual verification" finding in action.

The 21-gate design is theoretically sound (catches soul violations, measurable defects) but empirically unvalidated. The key insight from 08-VERIFICATION-SPEC.md is correct: "Gates cover ~26% of compositional quality. 65% is inherently un-gateable. PA is the composition quality gate."

**Risk:** MEDIUM-LOW for correctness (gates catch real defects), MEDIUM for false confidence (passing gates may create "we're done" psychology that dampens PA rigor). The Flagship experiment is the evidence: all gates passed, page was still unusable.

**Specific concern:** The orchestrator runs gates BEFORE PA. If gates pass, the orchestrator proceeds to screenshots + PA. This sequencing is correct — but the orchestrator must treat gate passage as NECESSARY, NOT SUFFICIENT. The current design does this (PA is the success bar, not gates), which matches the lesson learned.

---

### Step 4: SCREENSHOT CAPTURE (3 Viewports)

**Orchestrator design:**
- Serve HTML via local HTTP server
- Capture at 3 viewports: 1440px, 768px, 375px
- Disable scroll animations before capture
- Full-page screenshots at each viewport
- Save to predictable file paths for auditor access

**Cross-reference:**

| Pattern | Mode 4 PA (proven) | Remediation PA | Match? |
|---------|-------------------|----------------|--------|
| Screenshot pre-capture before spawning auditors | YES (102 screenshots) | YES (36 screenshots) | **MATCH** |
| Team lead captures, auditors read via Read tool | YES | YES | **MATCH** |
| Disable scroll animations | YES (`animation: none !important; opacity: 1 !important`) | YES | **MATCH** |
| Multiple viewports | YES (1440 + 768) | YES (1440 + 768) | **PARTIAL** — proven at 2 viewports; orchestrator adds 375px (mobile) |
| Full-page screenshots | YES | YES | **MATCH** |
| Predictable file paths | YES | YES | **MATCH** |

**Verdict: STRONG MATCH.**

This step directly replicates the Mode 4 PA screenshot pre-capture pattern — the most battle-tested pattern in the project (used twice, eliminated Playwright contention both times). The 375px mobile viewport is an addition but low-risk.

**Risk:** LOW. This is a proven pattern applied without modification.

**One note:** The orchestrator should use `document.fonts.ready` before screenshot capture (memory lesson: "CRITICAL before checking computed font"). This is not explicitly mentioned in 04-orchestrator-research.md but IS mentioned in MEMORY.md. If missing from the implementation, it could produce screenshots with fallback fonts.

---

### Step 5: PA DEPLOYMENT (9 Opus Auditors Parallel)

**Orchestrator design:**
- 9 Opus auditors spawned in parallel
- Each auditor gets: screenshot file paths + assigned questions (5-7 per auditor from 56 total)
- Auditors read screenshots via Read tool (no Playwright)
- Zero Playwright contention (all screenshots pre-captured)
- Fresh-eyes: auditors receive NO context about the build process, only screenshots + questions

**Cross-reference:**

| Pattern | Mode 4 PA (proven) | Remediation PA | Match? |
|---------|-------------------|----------------|--------|
| 9 parallel auditors | YES (9 auditors) | YES (9 auditors) | **EXACT MATCH** |
| Opus model for auditors | YES (all Opus) | YES (all Opus) | **MATCH** |
| Question assignment (5-7 per auditor) | YES (48 questions distributed) | YES | **MATCH** |
| Auditors read saved images | YES (via Read tool) | YES | **MATCH** |
| Zero Playwright during PA | YES (zero contention) | YES | **MATCH** |
| Fresh-eyes (no build context) | YES | YES | **MATCH** |
| Total questions: 56 (48 standard + 8 Tier 5) | Mode 4 used 48 | Mode 4 used 48 | **EXPANSION** — 8 additional Tier 5 questions are new |

**Verdict: NEAR-EXACT MATCH.**

This is the most faithful replication of a proven pattern in the entire orchestrator. The Mode 4 PA pattern (screenshot pre-capture -> 9 parallel Opus auditors -> weaver synthesis) is reproduced almost identically. The only addition is 8 Tier 5 questions (PA-60 through PA-67: design moments, multi-voice, transitions, fractal, restraint, music analogy, negative space, novelty).

**Risk:** LOW. The 8 additional questions are an expansion but don't change the architecture. The core insight — breadth of perspectives catches what 2 PAs miss — is preserved.

**Specific validation:** The orchestrator correctly assigns PA-05 to ALL 9 auditors (not just some). This matches Mode 4 PA where PA-05 was the dominant convergent finding (9/9 flagged whitespace void). Having all auditors evaluate the primary quality question maximizes the breadth signal.

---

### Step 6: WEAVER SYNTHESIS

**Orchestrator design:**
- Single Opus weaver reads all 9 auditor reports
- Produces unified PA verdict with structured scoring
- Determines: PASS (proceed to success bar) or FAIL (proceed to fix cycle)
- Extracts specific, actionable fix directives if FAIL

**Cross-reference:**

| Pattern | Mode 4 PA (proven) | Remediation PA | Match? |
|---------|-------------------|----------------|--------|
| Single weaver synthesizes 9 reports | YES (1 weaver) | YES (1 weaver) | **MATCH** |
| Opus model for weaver | YES | YES | **MATCH** |
| Structured verdict with scoring | YES (PA-05 score + soul + accessibility) | YES | **MATCH** |
| Actionable fix extraction | PARTIAL (weaver provided verdict, fixes came from separate process) | YES (3 BLOCKING + 3 SIGNIFICANT) | **MATCH** with Remediation pattern |

**Verdict: STRONG MATCH.**

**Risk:** LOW. The weaver pattern is proven. The only subtlety is whether the weaver should produce DIRECTION-LEVEL feedback (for the builder's compositional sense) or INSTRUCTION-LEVEL feedback (specific CSS changes). The 07-INPUT-SPEC.md recommends direction for PA feedback, instruction for gate feedback. This dual-mode feedback is new but well-reasoned.

---

### Step 7: FIX CYCLE (Same Builder, Max 3)

**Orchestrator design:**
- Same Opus builder receives fix directives
- Builder has access to its own previous output + weaver feedback
- Maximum 3 fix cycles before declaring failure
- Each cycle: builder edits -> gates -> screenshots -> PA -> weaver
- Gate feedback: structured JSON (specific, measurable)
- PA feedback: direction-level (compositional, qualitative)

**Cross-reference:**

| Pattern | Remediation (proven) | CD-006 | Match? |
|---------|---------------------|--------|--------|
| Same builder for fixes | YES (Opus builder self-corrected from PA) | YES (single agent, iterative) | **MATCH** |
| Preserves compositional memory | YES (builder retained context across cycles) | YES | **MATCH** |
| Max cycle limit | Not explicitly limited | Not explicitly limited | **NEW** — max 3 is a reasonable guard against infinite loops |
| Full re-verification per cycle | YES (Mode 4 PA after remediation) | N/A | **MATCH** |

**Verdict: MATCH with reasonable addition.**

The same-builder pattern is proven in Remediation (Opus self-corrected from PA-05 1.5 to 2.5, +1.0). The max-3-cycles limit is new but prudent — prevents resource waste on builds that aren't converging.

**Risk:** LOW. The main risk is the builder not receiving feedback in a format it can act on. The dual-mode feedback (JSON for gates, direction for PA) addresses this.

**Specific concern:** In Remediation, the builder had the FULL enhanced remediation spec (1,025 lines) as context for what "good" looks like. In the orchestrator, the fix cycle builder only has its own previous output + weaver feedback. If the weaver feedback is too abstract ("improve spatial confidence"), the builder may lack concrete CSS models to follow. The conventions brief should include enough CSS examples that the builder can self-reference during fix cycles.

---

### Step 8: SUCCESS BAR CHECK

**Orchestrator design:**
- PA-05 >= 3.5/4 (COMPOSED or DESIGNED)
- Tier 5 >= 6/8
- Zero soul violations (S-01 through S-09)
- Metaphor rating: STRUCTURAL (not announced or absent)
- All 21 gates passed
- 6 additional compositional criteria

**Cross-reference:**

| Criterion | CD-006 (Ceiling) | Middle | Remediation | Achievable? |
|-----------|-----------------|--------|-------------|-------------|
| PA-05 >= 3.5 | ~3.5 (Ceiling) | 4/4 (DESIGNED) | 2.5/4 | YES at Ceiling/Middle; UNKNOWN at Flagship complexity |
| Tier 5 >= 6/8 | Not measured | Not measured | Not measured | **N=0** — Tier 5 questions have NEVER been scored |
| Zero soul violations | 0 violations (CD-006) | 7/7 soul | 20 PASS / 2 WARNING | YES (achievable) |
| Metaphor STRUCTURAL | Not assessed | Not assessed | Not assessed | **N=0** — "structural" vs "announced" has been applied retroactively but never as a gate |
| All 21 gates passed | N/A | N/A | N/A | **N=0** — 21-gate battery never tested |

**Verdict: AMBITIOUS but PARTIALLY UNTESTED.**

The success bar combines proven criteria (PA-05 >= 3.5, zero soul violations) with novel criteria that have N=0 empirical validation (Tier 5 >= 6/8, metaphor STRUCTURAL, 21-gate battery). The PA-05 threshold is proven achievable at Ceiling (CD-006 ~3.5) and Middle (4/4) but NEVER at Flagship complexity.

**Risk:** MEDIUM-HIGH. The success bar may be unachievable — not because the criteria are wrong, but because Flagship-complexity content may have a PA-05 ceiling below 3.5. The Mode 4 PA on the Ceiling experiment downgraded the metaphor from "structural" to "announced" (40% without labels) — and that was the BEST build to date.

**Recommendation:** The success bar should have a FIRST-RUN escape hatch. If the first Flagship build scores PA-05 3.0-3.4, the orchestrator should report this as "APPROACHING" rather than "FAIL" — to prevent the 3-cycle fix limit from discarding a build that's actually the best achievable at Flagship complexity.

---

## PATTERN VERIFICATION SUMMARY

### Five Key Patterns Verified

| Pattern | Orchestrator | Proven In | Match? | Notes |
|---------|-------------|-----------|--------|-------|
| **Sequential Playwright scheduling** | YES — gates sequential, screenshots sequential, PA has zero Playwright | Mode 4 PA, Remediation | **FULL MATCH** | 2 concurrent safe; orchestrator uses 0-1 concurrent |
| **Screenshot pre-capture before spawning auditors** | YES — Step 4 captures all, Step 5 auditors read images | Mode 4 PA (102 screenshots), Remediation (36) | **FULL MATCH** | THE most battle-tested pattern |
| **Per-file builder ownership** | YES — single builder owns the output file exclusively | CD-006, Middle, Remediation | **FULL MATCH** | Fat Core's single-builder architecture eliminates contention structurally |
| **Same builder for fix cycles** | YES — Step 7 preserves builder context across fix iterations | Remediation (PA-05 1.5 -> 2.5 with same builder) | **FULL MATCH** | Compositional memory preservation confirmed |
| **All Opus for Flagship** | YES — builder Opus, 9 auditors Opus, weaver Opus | CD-006 (Opus), Middle (Opus), Remediation (Opus) | **FULL MATCH** | N=4, zero exceptions for quality |

**Result: 5/5 key patterns FULLY MATCH proven architectures.**

---

## DEPARTURES FROM PROVEN PATTERNS

### Departure 1: 21-Gate Battery (N=0)

**What's new:** No successful build used programmatic gates. The Flagship experiment used 6 gates — all passed, page still failed perceptually.

**Risk assessment:** LOW for correctness (gates catch real defects), MEDIUM for psychology (false confidence from gate passage).

**Mitigation in design:** The orchestrator treats gates as NECESSARY but NOT SUFFICIENT. PA is the success bar. This is the correct architecture per the "programmatic ≠ perceptual" lesson.

**Recommendation:** KEEP but monitor. If first experiment shows builders relaxing after gate passage, add explicit "Gates are NOT quality validation" warning to fix cycle feedback.

### Departure 2: Flagship Threshold Elevations (N=0)

**What's new:** 6 gates have Flagship-specific thresholds beyond Middle/Ceiling. None have been tested.

**Risk assessment:** MEDIUM. Elevated thresholds may be too strict (causing false failures) or too lenient (not capturing Flagship quality).

**Recommendation:** KEEP with calibration. First experiment provides empirical data to adjust thresholds.

### Departure 3: Tier 5 Questions (N=0)

**What's new:** 8 additional PA questions (PA-60 through PA-67) have never been scored against any build.

**Risk assessment:** LOW. Additional questions expand auditor coverage without changing the architecture. Worst case: questions are ambiguous and auditors produce inconsistent scores.

**Recommendation:** KEEP. The questions (design moments, multi-voice, transitions, fractal, restraint, music analogy, negative space, novelty) target exactly the properties that differentiate Flagship from Ceiling.

### Departure 4: Metaphor STRUCTURAL as Gate (N=0 as formal gate)

**What's new:** "Structural" vs "announced" metaphor classification has been applied retroactively but never as a pass/fail gate. The best build to date (Ceiling experiment) was downgraded from structural to announced (40% without labels).

**Risk assessment:** HIGH. If the current best build fails this gate, the success bar may be permanently unachievable.

**Recommendation:** SOFTEN. Make metaphor rating a SCORING dimension (contributes to PA-05) rather than a separate binary gate. This matches how it functions in Mode 4 PA — as part of the compositional assessment, not a standalone pass/fail.

### Departure 5: Content Complexity Routing (unused in proven builds)

**What's new:** The orchestrator assesses content complexity at intake. No proven build did this.

**Risk assessment:** LOW. Informational only — doesn't change the build process. However, the ALWAYS FLAGSHIP directive from PV2 means routing is moot: every build gets the same treatment.

**Recommendation:** SIMPLIFY. If ALWAYS FLAGSHIP, remove complexity routing code. Dead code creates maintenance burden and confusion.

### Departure 6: Conventions Brief as Delivery Vehicle (N=0)

**What's new:** The ~225-line conventions brief replaces both the Middle experiment's 100-line recipe AND the Flagship's 530-line master prompt. It has never been tested.

**Risk assessment:** MEDIUM-HIGH. This is the single most important untested component. The brief's FORMAT (recipe vs checklist) determines whether it reproduces the Middle success or the Flagship failure.

**Recommendation:** VALIDATE FIRST. The conventions brief should be written and reviewed by a fresh-eyes agent for checklist drift BEFORE the first experiment. Look for:
- Action verbs ("Deploy" / "Read" / "Compose") vs constraint verbs ("Verify" / "Ensure" / "Must be")
- Sequenced steps vs unordered rules
- Specific CSS examples vs abstract principles
- "Because" clauses at seasoning density (1:5-10) vs saturation (1:1-3)

---

## ARCHITECTURE-LEVEL COMPARISON

### Agent Count

| Architecture | Agents | Outcome |
|-------------|--------|---------|
| CD-006 | 1 | 39/40 (Ceiling) |
| Middle | 8 | PA-05 4/4 |
| Remediation | 16+ | PA-05 2.5/4 |
| Flagship | 19 | PA-05 1.5/4 |
| **Orchestrator** | **11 minimum** (1 builder + 9 PA + 1 weaver) | **UNTESTED** |

**Observation:** There is an INVERSE correlation between agent count and quality in the data. CD-006 (1 agent, highest quality) < Middle (8, second highest) < Remediation (16+, third) < Flagship (19, lowest). The orchestrator at 11 agents sits between Middle and Remediation. This correlation is likely spurious (the content complexity and prompt format varied too), but it reinforces the Fat Core thesis: fewer agents, richer context per agent.

### Builder Input Volume

| Architecture | Builder-Facing Lines | Outcome |
|-------------|---------------------|---------|
| CD-006 | ~100 (full design system access) | 39/40 |
| Middle | ~100 (recipe) | PA-05 4/4 |
| Flagship | ~75 (from 530 total) | PA-05 1.5/4 |
| Remediation | ~1,025 | PA-05 2.5/4 |
| **Orchestrator** | **~315 effective** | **UNTESTED** |

**Observation:** The ~315 lines is in the sweet spot between the proven-effective ~100 and the mixed-results ~1,025. The key is not volume but FORMAT — recipe (Middle) vs checklist (Flagship).

### Topology

| Architecture | Topology | Communication | Outcome |
|-------------|----------|---------------|---------|
| CD-006 | Single node | N/A | 39/40 |
| Middle | Flat file-bus | Zero SendMessage | PA-05 4/4 |
| Remediation | Hub-spoke | File + messaging | PA-05 2.5/4 |
| Flagship | Multi-layer | File + messaging | PA-05 1.5/4 |
| **Orchestrator** | **Hub-spoke** (orchestrator -> builder -> orchestrator -> PA) | **File + orchestrator routing** | **UNTESTED** |

**Observation:** The orchestrator's hub-spoke topology matches Remediation, which is reasonable. The orchestrator acts as a thin routing layer, not a deep planning layer. This avoids the Flagship's multi-layer compression problem (50:1 information loss across boundaries).

---

## OVERALL VERDICT

### What the orchestrator gets RIGHT (proven patterns replicated):

1. **Opus builder with direct catalog access** — matches both highest-scoring builds
2. **Screenshot pre-capture before PA** — most battle-tested pattern, exactly replicated
3. **9 parallel Opus auditors** — Mode 4 PA pattern, exactly replicated
4. **Same builder for fix cycles** — Remediation pattern, exactly replicated
5. **Sequential Playwright scheduling** — zero contention by design
6. **Per-file builder ownership** — structural contention elimination
7. **PA as the success bar** — gates necessary but not sufficient
8. **Fat Core single-agent build** — matches CD-006 pattern (highest quality)

### What the orchestrator gets PARTIALLY RIGHT (reasonable extensions):

1. **21-gate battery** — theoretically sound, N=0, risk is false confidence
2. **Tier 5 questions** — expand PA coverage into Flagship dimensions, N=0
3. **Dual-mode feedback** — JSON for gates, direction for PA — well-reasoned but untested
4. **Max 3 fix cycles** — prudent resource guard, no proven precedent

### What the orchestrator gets POTENTIALLY WRONG:

1. **Metaphor STRUCTURAL as binary gate** — best build to date fails this. Soften to scoring dimension.
2. **Success bar may be unachievable** — PA-05 >= 3.5 at Flagship complexity is N=0. Need escape hatch for "APPROACHING."
3. **Conventions brief format is the critical unknown** — if it drifts to checklist, reproduces Flagship failure.
4. **Content complexity routing is dead code** — ALWAYS FLAGSHIP means no routing needed.

### CONFIDENCE ASSESSMENT

**Probability that the orchestrator ARCHITECTURE is correct:** 80-85%. The architectural decisions (Fat Core, screenshot pre-capture, 9 PA auditors, same-builder fix cycles) faithfully replicate proven patterns.

**Probability that the orchestrator PRODUCES 4/4 at Flagship:** 30-45%. The architecture is correct, but:
- Flagship 4/4 has NEVER been achieved (N=0)
- The conventions brief is the critical untested delivery vehicle
- The success bar's achievability is unknown
- Content complexity at Flagship level may have a PA-05 ceiling below 3.5

**Probability that the orchestrator produces >= 3.0 at Flagship:** 55-65%. More realistic target. The architecture removes the known failure modes (inverted quality routing, checklist format, Sonnet builder) while preserving the known success factors (Opus, catalog access, Mode 4 PA).

---

## RECOMMENDATIONS

### Must-Do Before First Experiment

1. **Review conventions brief for checklist drift.** Fresh-eyes agent reads the brief and flags any constraint verbs, unordered rules, or abstract principles without CSS examples.
2. **Soften metaphor gate.** Change from binary pass/fail to scoring dimension within PA-05.
3. **Add APPROACHING status.** PA-05 3.0-3.4 = "APPROACHING" (not FAIL). Preserves the build for analysis.
4. **Remove content complexity routing.** ALWAYS FLAGSHIP makes it dead code.
5. **Add `document.fonts.ready` to screenshot step.** Memory lesson confirmed critical.

### Should-Do Before First Experiment

6. **Add anti-checklist self-test to conventions brief.** Count action verbs vs constraint verbs. Ratio must be >= 2:1.
7. **Include 3-5 CSS examples in conventions brief.** Builder needs concrete models, not just principles.
8. **Specify weaver feedback format.** Direction-level for PA findings, instruction-level for gate failures. Both in one structured output.

### Can Wait Until After First Experiment

9. **Calibrate Flagship threshold elevations** based on empirical gate results.
10. **Adjust Tier 5 question wording** based on auditor consistency.
11. **Determine if 21 gates is the right number** — some may be redundant or too granular.
