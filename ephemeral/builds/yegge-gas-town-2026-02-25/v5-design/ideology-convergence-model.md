# Ideology Redesign: From Crystallization to Convergence

**Date:** 2026-02-26
**Agent:** ideology-convergence-designer (Opus)
**Task:** #25 — Redesign quality model from crystallization to convergence
**Files analyzed:**
- `ephemeral/va-extraction/MANIFEST.md` (748+ lines)
- `ephemeral/va-extraction/artifact-orchestrator.md` (800+ lines)
- `ephemeral/va-extraction/artifact-builder-recipe.md` (660+ lines)
- `ephemeral/va-extraction/pa-weaver.md` (466 lines)
- `ephemeral/va-extraction/pa-guardrails-weaver.md` (59 lines)

---

## 1. Current Quality Ideology — Evidence and Diagnosis

### 1.1 The Master Equation Has No Iteration Term

The pipeline's foundational quality model is:

```
Quality = Agent Capability x Content Affordance x Spec Fidelity
```

> Source: MANIFEST.md L58-59, artifact-orchestrator.md L25-26

This equation is **static**. It models quality as the product of three fixed inputs. There is no term for iteration, convergence, or improvement over time. The implication: if you get the three inputs right, quality emerges in a single pass. If quality is low, one of the three inputs was wrong — not that the process needed more passes.

**What's missing:** `Quality_n = f(Quality_{n-1}, Builder_Ideas, PA_Findings)`. The equation should model quality as something that GROWS through successive passes, not something that APPEARS from correct inputs.

### 1.2 REFINE Is Framed as Recovery, Not Enhancement

Evidence of recovery framing:

| File | Line/Section | Quote | Framing |
|------|-------------|-------|---------|
| MANIFEST.md | L41 | "If REFINE: execute REFINE protocol... spawn different Opus builder, then RETURN TO PHASE 3 FOR FULL RE-AUDIT" | REFINE is a response to failure |
| MANIFEST.md | L44 | "Iteration budget: 1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3 between passes (diminishing returns)." | Iteration is BUDGETED and CAPPED — something to be minimized |
| artifact-orchestrator.md | L86-89 | "DEFAULT: Build with REFINE iteration (up to 3 cycles)" + "Evidence: N=1 at PA-05 4/4 (Middle), N=1 at PA-05 3.5 (Gas Town). Both single-pass." | Evidence cited is single-pass successes — REFINE is the backup plan |
| artifact-orchestrator.md | L107-116 | "Iteration Policy: REBUILD Not FIX" — five OLD/NEW comparisons, all framing iteration as replacing a broken approach | Iteration = correcting errors |
| artifact-orchestrator.md | L554 | "REFINE (PA-05 2.5-3.5)" — threshold-triggered | You only iterate when the score says you must |
| artifact-orchestrator.md | L610 | "Fixing alone will not reach Flagship — but COMPOSING through successive REFINE passes will. Each REFINE is a fresh act of composition, not a repair." | **BEST existing language** — but buried in line 610, after 600 lines of crystallization framing |
| pa-weaver.md | L265 | "REFINE has proven ROI: +1.0 to +1.5 PA-05 per cycle." | Framed as cost-benefit, not as the natural path |
| pa-weaver.md | L286-292 | "DIFFERENT Opus agent... Reads conviction + PA artistic impressions... Refine agent NEVER sees gate scores" | Strong protocol — but triggered only by PA-05 < 3.5 |

The single best sentence in the entire pipeline is on orchestrator L610: "Each REFINE is a fresh act of composition, not a repair." But this sentence is buried after 600 lines that say the opposite. The pipeline talks about REFINE as recovery for 95% of its text and as enhancement for 5%.

### 1.3 Single-Pass Is the Default Architecture

| File | Section | Evidence |
|------|---------|----------|
| MANIFEST.md L67 | Architecture | "Default mode: ITERATIVE-TO-CONVERGENCE" — but the dependency graph (L553-583) shows a LINEAR flow with no loop back |
| MANIFEST.md L704 | Total Build Summary | Section 8 title: "Default Pipeline (Single-Pass)" — explicit naming |
| artifact-orchestrator.md L706-711 | Timeline table | Phase 0 through 3C with no REFINE row — the "default" timeline is single-pass |
| artifact-orchestrator.md L726-729 | Cost Estimates | "Build with convergence: ~80-180 min" vs "single-pass: ~80-105 min" — convergence is the MORE EXPENSIVE option |
| MANIFEST.md L612 | Circuit Breaker | "Iteration budget: 1 REBUILD + 2 REFINE passes" — iteration is limited, not expected |

The architecture SAYS "iterative-to-convergence" is the default (MANIFEST L67), but the STRUCTURE treats single-pass as default:
- The dependency graph has no feedback arrow
- The timeline assumes single-pass
- The cost estimates treat iteration as overhead
- The iteration budget is a CAP, not a FLOOR

### 1.4 The Verdict Taxonomy Is Stop-Centric

Current verdicts: **SHIP / SHIP WITH FIXES / REFINE / REBUILD**

| Verdict | Signal | Builder Experience |
|---------|--------|-------------------|
| SHIP | Stop now, it's done | Relief — the test is over |
| SHIP WITH FIXES | Stop after tweaks | Minor remediation |
| REFINE | You didn't pass, try again | Failure with reprieve |
| REBUILD | You failed badly, start over | Catastrophic failure |

3 of 4 verdicts are STOP signals. Only REFINE is a CONTINUE signal, and it's the one framed as "you didn't pass." The emotional register of this taxonomy: success = stopping, continuing = something went wrong.

### 1.5 Phase Completion Is the Tracked Metric

The Execution Tracker template (referenced in MANIFEST.md L23) tracks PHASE COMPLETION: "Phase 0 complete, Phase 1 complete, Phase 2 complete..." The tracked artifact of success is a checkbox. There is no field for "PA-05 trajectory" or "improvement per pass" or "builder ideas surfaced."

### 1.6 The 21-Idea Problem

From the autopsy: a builder produced a page with 21 ideas for improvement, then stopped because the architecture said "Phase 2 complete." The pipeline has no mechanism for:
- Asking the builder what it would improve
- Collecting improvement ideas before the PA
- Acting on builder self-knowledge during REFINE

The RESIDUAL artifact (orchestrator L566) is the closest thing — the builder documents "what was preserved, what was changed, what would come next, what trade-offs were made." But the RESIDUAL is required only for REFINE (post-verdict), not as standard output. The builder's self-knowledge about its own work is discarded by default.

### 1.7 Budget Expectation Contradicts Default

Line 44 of artifact-orchestrator.md: "Budget expectation: 40-60% of builds will use at least one REFINE cycle." This means the pipeline EXPECTS most builds to iterate — but frames iteration as the exception. The architecture's own data says two-pass is the norm, but its structure says one-pass is the default.

---

## 2. Proposed Convergence Model — New Quality Philosophy (~200 words)

**Quality is not a property of inputs; quality is a trajectory.** The pipeline's job is not to produce a perfect artifact in one pass — it is to produce a trajectory of improving artifacts, where each pass compounds the builder's compositional intelligence with the PA's perceptual feedback.

The master equation becomes:

```
Quality_n = Quality_{n-1} + f(Builder_Intent, PA_Perception, Convergence_Protocol)
Quality_0 = g(Agent_Capability, Content_Affordance, Spec_Fidelity)
```

Pass 0 (the initial build) establishes the STARTING POINT. Its quality depends on the three original factors. Every subsequent pass adds a convergence term: builder ideas + PA findings + the protocol that connects them. The pipeline's success metric is not "did Pass 0 ship?" but "did the trajectory converge to shippable quality in <= 3 passes?"

**Two-pass is the default.** Single-pass is the exception — reserved for content so simple that Pass 0 is likely to ship. The standard path is: BUILD, EVALUATE, IMPROVE, EVALUATE. This matches the pipeline's own data (40-60% of builds need REFINE) and its own best insight (orchestrator L610: "Each REFINE is a fresh act of composition, not a repair").

**The builder is the primary quality source, not the spec.** The spec creates conditions; the builder creates quality. Each pass deepens what the builder already knows — it doesn't fix what the spec failed to specify.

---

## 3. Language Change Inventory

### 3.1 Master Equation Changes

| File | Location | Old Text | New Text | Rationale |
|------|----------|----------|----------|-----------|
| MANIFEST.md | L58-62 | `Quality = Agent Capability x Content Affordance x Spec Fidelity` + "Zero in ANY factor = zero quality. This is non-negotiable." | `Quality_0 = Agent Capability x Content Affordance x Spec Fidelity` + `Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)` + "Pass 0 depends on inputs. Every subsequent pass depends on what the builder learned and what the PA revealed. The pipeline converges toward quality — it does not produce it in a single step." | Adds iteration term to foundational equation |
| artifact-orchestrator.md | L25-29 | `Quality = Agent Capability x Content Affordance x Spec Fidelity` + "Zero in ANY factor = zero quality" | Same replacement as MANIFEST.md | Consistency — both docs carry the master equation |

### 3.2 Architecture Default Changes

| File | Location | Old Text | New Text | Rationale |
|------|----------|----------|----------|-----------|
| MANIFEST.md | L67 | "Default mode: ITERATIVE-TO-CONVERGENCE. Initial build + PA audit + REFINE if needed." | "Default mode: TWO-PASS CONVERGENCE. Initial build + PA audit + IMPROVE pass + PA re-audit. Single-pass SHIP is the welcome exception, not the expected outcome." | Makes two-pass the explicit default |
| MANIFEST.md | L704 (Section 8 header in orchestrator) | Section title: "Default Pipeline (Single-Pass)" | "Default Pipeline (Two-Pass Convergence)" | Name change reflects new default |
| artifact-orchestrator.md | L86 | "DEFAULT: Build with REFINE iteration (up to 3 cycles)" | "DEFAULT: Two-pass convergence (BUILD + IMPROVE). Third pass available if improvement trajectory is strong (delta >= 0.3)." | Frames two-pass as default, third pass as optional extension |
| artifact-orchestrator.md | L706-711 | Timeline table showing only single-pass phases | Add row: "Phase 4: IMPROVE (~45 min, 1 Opus) — Standard improvement pass by different Opus builder" and "Phase 5: Re-Audit (~20 min, 11 agents) — Full PA re-audit of improved artifact" | Timeline includes iteration by default |

### 3.3 REFINE Reframing Changes

| File | Location | Old Text | New Text | Rationale |
|------|----------|----------|----------|-----------|
| MANIFEST.md | L41 | "If REFINE: execute REFINE protocol" | "If IMPROVE: execute standard improvement protocol" | Rename REFINE to IMPROVE throughout |
| artifact-orchestrator.md | L554 | "REFINE (PA-05 2.5-3.5)" | "IMPROVE (standard convergence pass — triggered by two-pass default or PA-05 2.5-3.5)" | IMPROVE is no longer only failure-triggered |
| artifact-orchestrator.md | L560-584 | Full REFINE protocol section | Rename section header from "REFINE protocol" to "IMPROVE protocol" and add preamble: "The IMPROVE pass is the pipeline's primary quality mechanism. It is the EXPECTED path for all non-trivial content — not a recovery from failure. Historical data shows +1.0 to +1.5 PA-05 improvement per IMPROVE pass." | Reframes improvement as the expected path |
| artifact-orchestrator.md | L570 | "Builder enters COMPOSITIONAL mode: deepening relationships, not fixing defects." | "Builder enters COMPOSITIONAL mode: deepening what Pass 0 established, revealing what Pass 0 hinted at, completing what Pass 0 started." | More generative framing |
| pa-weaver.md | L265 | "REFINE has proven ROI: +1.0 to +1.5 PA-05 per cycle." | "IMPROVE is the pipeline's highest-value phase: +1.0 to +1.5 PA-05 per pass. The IMPROVE pass consistently produces larger quality jumps than any other single intervention." | Promotes from ROI note to primary value statement |

### 3.4 Verdict Language Changes

| File | Location | Old Text | New Text | Rationale |
|------|----------|----------|----------|-----------|
| pa-weaver.md | Throughout | SHIP / SHIP WITH FIXES / REFINE / REBUILD | RELEASE / POLISH / IMPROVE / RETHINK | New taxonomy (see Section 5 below) |
| MANIFEST.md | L41 | "SHIP / SHIP WITH FIXES / REFINE / REBUILD" | "RELEASE / POLISH / IMPROVE / RETHINK" | Consistency |
| artifact-orchestrator.md | L533+ | All SHIP/REFINE/REBUILD references | RELEASE/IMPROVE/RETHINK throughout | Consistency |

### 3.5 Budget Expectation Promotion

| File | Location | Old Text | New Text | Rationale |
|------|----------|----------|----------|-----------|
| artifact-orchestrator.md | L44 | "Budget expectation: 40-60% of builds will use at least one REFINE cycle (per operational evidence). REFINE is not failure — it is the convergence mechanism." | Move to Section 0 (before master equation), promote to bold: "**Standard path:** 60-80% of builds converge in two passes. Single-pass RELEASE is the exception reserved for simple content. Budget for 2 passes as the norm, 3 as the ceiling." | Moves from buried footnote to prominent position |

### 3.6 Tracker Metric Changes

| File | Location | Old Text | New Text | Rationale |
|------|----------|----------|----------|-----------|
| EXECUTION-TRACKER-TEMPLATE.md | Phase completion fields | Phase checkboxes: "Phase 0 complete [Y/N]" ... "Phase 3C complete [Y/N]" | Add convergence tracking fields: "PA-05 Pass 0: ___", "PA-05 Pass 1: ___", "PA-05 Delta: ___", "Builder Improvement Ideas (Pass 0): ___", "Builder Improvement Ideas Acted On (Pass 1): ___", "Convergence Assessment: ACCELERATING / STEADY / STALLING" | Tracks outcome quality, not phase completion |

---

## 4. REFINE Protocol Redesign — From "Recovery" to "Standard Improvement"

### 4.1 Current REFINE Trigger

```
IF PA-05 < 3.5:
  → REFINE (recovery)
```

The only trigger is a PA score below the ship threshold. The builder has no voice. The PA must find problems.

### 4.2 Proposed IMPROVE Trigger

```
AFTER Pass 0:
  IF PA-05 >= 3.5 AND builder_residual.next_steps == EMPTY AND tier5 >= 6:
    → RELEASE (exceptional — page was great on first pass, builder has nothing to add)
  ELSE:
    → IMPROVE (standard — the default path)

AFTER Pass 1:
  IF PA-05 >= 3.5:
    → RELEASE
  ELIF PA-05 >= 3.0 AND all fixes MECHANICAL:
    → POLISH
  ELIF PA-05 delta >= 0.3 AND pass_count < 3:
    → IMPROVE (another pass is worthwhile)
  ELIF PA-05 delta < 0.3:
    → HALT (diminishing returns — ship best version)
  ELIF PA-05 < 2.5:
    → RETHINK

AFTER Pass 2:
  → RELEASE or POLISH or HALT (no more IMPROVE passes)
```

Key changes:
1. **IMPROVE is the default after Pass 0** — you only skip it if the page is already excellent AND the builder has nothing to add
2. **Builder residual is a trigger** — if the builder documents "what would come next," that alone justifies an IMPROVE pass
3. **HALT replaces budget exhaustion** — when improvement stalls (delta < 0.3), the pipeline ships the best version rather than declaring failure
4. **RELEASE requires builder agreement** — the builder must have an empty "next steps" for single-pass to be appropriate

### 4.3 IMPROVE Protocol (Revised REFINE)

**Renamed section header:** "IMPROVE Protocol — The Standard Improvement Pass"

**Preamble (NEW):**
> The IMPROVE pass is the pipeline's most valuable phase. Historical evidence: +1.0 to +1.5 PA-05 per IMPROVE pass. This is not recovery from failure — it is the standard path to excellence. Every page benefits from a second perspective on its own potential.

**BEFORE:**
1. Assemble IMPROVE builder inputs:
   - Conviction artifact from Pass 0
   - **Builder's own RESIDUAL artifact** (what they would improve)
   - PA artistic impression (generative language only)
   - **Builder's IMPROVEMENT IDEAS list** (new — see Section 6)
   - Original brief
   - Pass 0 HTML
2. Verify RESIDUAL artifact exists and contains >= 3 of 4 sections
3. **NEW: Verify IMPROVEMENT IDEAS list exists** — if builder produced one, include it. If not, the IMPROVE builder works from PA findings + residual only.

**DURING:**
- DIFFERENT Opus agent (unchanged — defeats continuation bias)
- Builder enters COMPOSITIONAL mode (unchanged)
- Builder receives generative verbs only (unchanged)
- **NEW: Builder receives the Pass 0 builder's IMPROVEMENT IDEAS as "The previous builder had these ideas for what to deepen next: [list]"** — framed as creative opportunity, not fix list
- Builder does NOT receive gate scores, threshold numbers, diagnostic language (unchanged)

**AFTER:**
- Full re-audit at Phase 3 (unchanged)
- Compare PA-05 trajectory (new tracking)
- Record "Builder ideas acted on: N of M" (new metric)

---

## 5. Verdict Language Redesign — New Taxonomy

### 5.1 Proposed Taxonomy

| Old Verdict | New Verdict | Signal | Emotional Register |
|-------------|-------------|--------|-------------------|
| SHIP | **RELEASE** | Page has converged — ready for readers | Achievement through process |
| SHIP WITH FIXES | **POLISH** | Page is sound, needs mechanical touches | Almost there — minor refinement |
| REFINE | **IMPROVE** | Standard improvement pass — the expected path | Creative opportunity to deepen |
| REBUILD | **RETHINK** | Compositional concept needs rethinking | Fresh start with lessons learned |

### 5.2 Rationale

**RELEASE** replaces SHIP:
- "Ship" implies a gate you pass through. "Release" implies readiness — the page has arrived at quality.
- "Ship" is binary (shipped/not-shipped). "Release" carries the sense of convergence: the page was held, improved, and now released.

**POLISH** replaces SHIP WITH FIXES:
- "Ship with fixes" is internally contradictory (it ships, but also has fixes needed). "Polish" is clear: the composition is sound, the surface needs minor touches.
- "Polish" is a continuation of the creative process, not a remediation.

**IMPROVE** replaces REFINE:
- "Refine" implies there were impurities to remove. "Improve" implies there is more potential to realize.
- "Refine" is reactive (something was wrong). "Improve" is proactive (something could be better).
- Aligns with the best existing language: orchestrator L610 "Each [IMPROVE] is a fresh act of composition, not a repair."

**RETHINK** replaces REBUILD:
- "Rebuild" implies destruction + reconstruction. "Rethink" implies learning + reconception.
- "Rethink" preserves the builder's conviction and ideas — the CONCEPT is rethought, not the effort discarded.
- Aligns with existing protocol: RETHINK builder receives "original brief, content, conviction artifact from failed build" — they learn from what came before.

### 5.3 Signal Balance After Redesign

| Verdict | Signal Type | Count |
|---------|-------------|-------|
| RELEASE | Stop (earned completion) | 1 |
| POLISH | Pause briefly (minor touches) | 1 |
| IMPROVE | Continue (creative opportunity) | 1 |
| RETHINK | Reset (fresh approach) | 1 |

Before: 3 stop, 1 continue. After: 1 stop, 1 pause, 1 continue, 1 reset. Balanced.

---

## 6. Builder Idea Capture — Mechanism for Surfacing and Acting on Ideas

### 6.1 The Problem

The builder produces a page, documents a conviction statement, writes 7 self-evaluation questions as HTML comments — and then STOPS. If the builder had 21 ideas for improvement (as in the autopsy), those ideas are lost. The pipeline asks "did you build it?" but never asks "what would you make better?"

### 6.2 The Solution: IMPROVEMENT IDEAS Artifact

Add to the builder's required output sequence (artifact-builder-recipe.md, after the self-evaluation in PHASE 5):

**PHASE 5B: WHAT WOULD YOU IMPROVE? (MANDATORY)**

> Before you declare this page complete, pause. You have been living inside this design for 45 minutes. You know things about it that no auditor will see. Write a structured IMPROVEMENT IDEAS list as an HTML comment block:
>
> ```html
> <!-- IMPROVEMENT-IDEAS:
> 1. [COMPOSITIONAL] What I wish I had time to deepen: ...
> 2. [STRUCTURAL] What I know is working but could be better: ...
> 3. [MECHANICAL] What I see but didn't fix: ...
> 4. [EXPERIMENTAL] What I wanted to try but held back: ...
> -->
> ```
>
> This is not a confession of failure. This is a record of your creative intelligence about this page. Your ideas will be read by the IMPROVE builder — a different Opus agent who will use your insights as a starting point for the improvement pass.
>
> There is no penalty for having ideas. The opposite: a builder with zero improvement ideas has either not looked carefully enough or has produced something truly exceptional. Zero ideas triggers RELEASE evaluation; four or more ideas confirms the IMPROVE path is warranted.

### 6.3 How Ideas Flow to the IMPROVE Builder

The IMPROVE builder's prompt includes:

> **From the Pass 0 builder (your predecessor):** Here are their ideas for what to deepen:
> 1. [COMPOSITIONAL] ...
> 2. [STRUCTURAL] ...
> 3. [MECHANICAL] ...
> 4. [EXPERIMENTAL] ...
>
> You are not obligated to follow these ideas. You may have better ones. But these represent the Pass 0 builder's insider knowledge of the page — what they saw from the inside that auditors may not see from outside.

### 6.4 Tracking

Execution Tracker new fields:
- `BUILDER_IDEAS_COUNT`: Number of improvement ideas from Pass 0 builder
- `BUILDER_IDEAS_CATEGORIES`: Counts per category (COMPOSITIONAL/STRUCTURAL/MECHANICAL/EXPERIMENTAL)
- `IMPROVE_BUILDER_IDEAS_USED`: Number of Pass 0 ideas the IMPROVE builder acted on
- `IMPROVE_BUILDER_NEW_IDEAS`: Number of new ideas the IMPROVE builder generated

Over time, this data reveals: which categories of builder ideas predict the largest PA-05 improvements? Which ideas are routinely validated by the PA?

---

## 7. Success Metric Shift — From Phase Completion to Outcome Quality

### 7.1 Current Success Metric

The pipeline's success is tracked by phase checkboxes:
- [ ] Phase 0 complete
- [ ] Phase 1 complete
- [ ] Phase 2 complete
- [ ] Phase 3A complete
- [ ] Phase 3B complete
- [ ] Phase 3C complete
- [ ] Verdict: SHIP

Completing all phases = pipeline ran. But completing all phases says nothing about quality trajectory.

### 7.2 Proposed Success Metrics

Replace phase-completion tracking with outcome-quality tracking:

**Primary metric: PA-05 Trajectory**
```
PA-05 Pass 0: ___/4
PA-05 Pass 1: ___/4
PA-05 Delta:  ___
Convergence:  ACCELERATING / STEADY / STALLING / N/A (single-pass)
```

**Secondary metrics:**
```
Builder Ideas Surfaced:     ___ (Pass 0)
Builder Ideas Acted On:     ___ (Pass 1)
Tier 5 Trajectory:          Pass 0: ___/9 → Pass 1: ___/9
Emotional Arc Strongest:    ___ (register name)
Emotional Arc Weakest:      ___ (register name)
Fix Type Distribution:      ___ MECHANICAL / ___ STRUCTURAL / ___ COMPOSITIONAL
```

**Success definition:**
- Single-pass RELEASE: PA-05 >= 3.5 AND builder ideas == 0 (exceptional)
- Two-pass RELEASE: PA-05 delta >= 0.5 across passes (strong convergence)
- POLISH: PA-05 >= 3.0 AND all remaining fixes MECHANICAL (near convergence)
- Needs improvement: PA-05 delta < 0.3 after 2 passes (stalling convergence)

Phase completion remains tracked (for operational integrity) but moves to an APPENDIX section of the tracker. The HEADLINE section tracks quality trajectory.

### 7.3 Run-Over-Run Learning

Across builds, track:
```
| Build | Pass 0 PA-05 | Pass 1 PA-05 | Delta | Ideas Surfaced | Ideas Used |
|-------|-------------|-------------|-------|----------------|------------|
| Gas Town | 2.0 | 3.5 | +1.5 | ? (pre-v5) | ? |
| [next] | ___ | ___ | ___ | ___ | ___ |
```

This table becomes the pipeline's self-knowledge: does iteration consistently help? Which content types converge faster? Does builder idea count predict delta size?

---

## 8. Exact Edit Specifications

### Edit 1: Master Equation — MANIFEST.md

**File:** `ephemeral/va-extraction/MANIFEST.md`
**Location:** Lines 57-62 (Section: Master Equation)
**Old:**
```
### Master Equation

```
Quality = Agent Capability x Content Affordance x Spec Fidelity
```

**Zero in ANY factor = zero quality.** This is non-negotiable.
```
**New:**
```
### Master Equation

```
Quality_0 = Agent Capability x Content Affordance x Spec Fidelity
Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)
```

**Pass 0 depends on inputs. Every subsequent pass adds the builder's creative ideas and the PA's perceptual findings.** The pipeline converges toward quality through iteration — it does not produce quality in a single step. Zero in any Pass 0 factor = zero starting point. The convergence term is where quality grows.
```

### Edit 2: Architecture Default — MANIFEST.md

**File:** `ephemeral/va-extraction/MANIFEST.md`
**Location:** Line 67
**Old:**
```
- **Default mode:** ITERATIVE-TO-CONVERGENCE. Initial build + PA audit + REFINE if needed. The pipeline iterates until PA-05 reaches SHIP threshold or improvement stalls (delta < 0.3). The 3-pass Compositional Critic architecture remains EXPERIMENTAL (blocked until Experiment #21).
```
**New:**
```
- **Default mode:** TWO-PASS CONVERGENCE. Initial build (Pass 0) + PA audit + IMPROVE pass (Pass 1) + PA re-audit. Single-pass RELEASE is the welcome exception, not the expected outcome. Standard path: 60-80% of builds converge to RELEASE in two passes. Third pass available when improvement trajectory is strong (delta >= 0.3).
```

### Edit 3: Verdict Labels — MANIFEST.md

**File:** `ephemeral/va-extraction/MANIFEST.md`
**Location:** Lines 41-44 (Quickstart step 11)
**Old:**
```
11. If SHIP WITH FIXES: pipeline completes with mechanical fix list. If REFINE: execute REFINE protocol (artifact-orchestrator.md Section 7) — spawn different Opus builder, then RETURN TO PHASE 3 FOR FULL RE-AUDIT. If REBUILD: execute REBUILD protocol (artifact-orchestrator.md Section 7) — full Phase 0-3 re-execution. Pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES.
```
**New:**
```
11. If POLISH: pipeline completes with mechanical fix list. If IMPROVE (the standard path): execute IMPROVE protocol (artifact-orchestrator.md Section 7) — spawn different Opus builder with Pass 0 builder's improvement ideas + PA artistic impression, then RETURN TO PHASE 3 FOR FULL RE-AUDIT. If RETHINK: execute RETHINK protocol (artifact-orchestrator.md Section 7) — full Phase 0-3 re-execution with lessons from the previous attempt. Pipeline is NOT complete until verdict is RELEASE or POLISH.
```

### Edit 4: Iteration Budget — MANIFEST.md

**File:** `ephemeral/va-extraction/MANIFEST.md`
**Location:** Line 44
**Old:**
```
**Iteration budget:** 1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3 between passes (diminishing returns). If a second REBUILD is triggered, pipeline halts with diagnostic output for human review.
```
**New:**
```
**Convergence budget:** 1 RETHINK + 2 IMPROVE passes maximum. Pass 1 (first IMPROVE) is the standard path — not an exception. Stop when PA-05 delta < 0.3 between passes (convergence achieved or stalling). If a second RETHINK is triggered, pipeline halts with diagnostic output for human review.
```

### Edit 5: Master Equation — artifact-orchestrator.md

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** Lines 24-29
**Old:**
```
### Quality Equation
> Quality = Agent Capability x Content Affordance x Spec Fidelity
> Zero in ANY factor = zero quality
```
**New:**
```
### Quality Equation
> Quality_0 = Agent Capability x Content Affordance x Spec Fidelity
> Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)
> Pass 0 depends on inputs; subsequent passes grow quality through iteration
> Zero in any Pass 0 factor = zero starting point
```

### Edit 6: Budget Expectation Promotion — artifact-orchestrator.md

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** Line 44 (currently buried in VALUES Context)
**Action:** Move to BEFORE the Quality Equation (line 24), promote to bold:
**New text (insert before Quality Equation):**
```
### Standard Path
**60-80% of builds converge in two passes.** Single-pass RELEASE is the exception reserved for simple content. Budget for 2 passes as the norm, 3 as the ceiling. The IMPROVE pass is the pipeline's highest-value phase: +1.0 to +1.5 PA-05 per pass. A build that goes straight to RELEASE is a welcome surprise, not the expected outcome.
```

### Edit 7: Iteration Architecture — artifact-orchestrator.md

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** Lines 84-89
**Old:**
```
### Iteration Architecture

**DEFAULT: Build with REFINE iteration (up to 3 cycles)**
- **ITEM 98** (extract-d01-d03.md L243) Single builder, self-evaluating (new)
- **ITEM 97** (extract-d01-d03.md L243) Multi-pass build (3-5 passes) = OLD [META/historical]
- Evidence: N=1 at PA-05 4/4 (Middle), N=1 at PA-05 3.5 (Gas Town). Both single-pass.
```
**New:**
```
### Iteration Architecture

**DEFAULT: Two-pass convergence (BUILD + IMPROVE + RE-AUDIT)**
- Pass 0: Initial build by Builder A (Opus). Produces HTML + conviction + IMPROVEMENT IDEAS.
- Pass 1 (standard): IMPROVE build by Builder B (different Opus). Receives Builder A's ideas + PA artistic impression. Deepens what Pass 0 established.
- Pass 2 (optional): Available when PA-05 delta >= 0.3 after Pass 1 (strong improvement trajectory).
- Evidence: Gas Town Pass 0 → Pass 1: 2.0 → 3.5 (+1.5). Historical IMPROVE ROI: +1.0 to +1.5 per pass.
- Single-pass RELEASE: Reserved for content where Pass 0 achieves PA-05 >= 3.5 AND builder reports zero improvement ideas.
```

### Edit 8: REFINE Section Rename — artifact-orchestrator.md

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** Line 554 onwards (REFINE protocol)
**Action:** Rename all instances of "REFINE" to "IMPROVE" in this section. Add preamble:
**New preamble (insert before BEFORE/DURING/AFTER):**
```
### IMPROVE Protocol — The Standard Improvement Pass

> The IMPROVE pass is the pipeline's most valuable phase. Historical evidence: +1.0 to +1.5 PA-05 per IMPROVE pass. This is not recovery from failure — it is the standard path to excellence. Every page benefits from a second perspective on its own potential. The path from 3.0 to 4.0 is "compose, evaluate, compose again" — not "fix, fix, fix."
```

### Edit 9: Verdict Thresholds — pa-weaver.md

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Location:** Lines 268-276 (Section 5.1 Ship Thresholds)
**Old:**
```
| Condition | Decision |
|-----------|----------|
| PA-05 >= 3.5/4 AND zero soul violations | **SHIP** |
| PA-05 >= 3/4 AND all identity gates PASS AND <= 3 MECHANICAL fixes needed | **SHIP WITH FIXES** (see 5.1.1) |
| PA-05 2.5-3.5 | **REFINE** (see 5.2) |
| PA-05 < 2.5 | **REBUILD** (see 5.3) |
```
**New:**
```
| Condition | Decision |
|-----------|----------|
| PA-05 >= 3.5/4 AND zero soul violations AND (pass >= 1 OR builder_ideas == 0) | **RELEASE** |
| PA-05 >= 3/4 AND all identity gates PASS AND <= 3 MECHANICAL fixes needed | **POLISH** (see 5.1.1) |
| Pass 0 complete (standard two-pass default) OR PA-05 2.5-3.5 | **IMPROVE** (see 5.2) |
| PA-05 < 2.5 | **RETHINK** (see 5.3) |
```

Note the RELEASE gate now includes: `pass >= 1 OR builder_ideas == 0`. You cannot RELEASE from Pass 0 if the builder reported improvement ideas — those ideas are evidence that the page has more potential.

### Edit 10: Builder Recipe — IMPROVEMENT IDEAS Phase

**File:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Location:** After PHASE 5 (Self-Evaluate), insert new phase:
**New text:**
```
## PHASE 5B: WHAT WOULD YOU IMPROVE?

Before declaring this page complete, pause. You have been building inside this design for 45 minutes. You know things about it that no outside auditor will see.

Write an IMPROVEMENT IDEAS block as an HTML comment:

```html
<!-- IMPROVEMENT-IDEAS:
1. [COMPOSITIONAL] What I wish I had time to deepen: ...
2. [STRUCTURAL] What I know is working but could be better: ...
3. [MECHANICAL] What I see but didn't fix: ...
4. [EXPERIMENTAL] What I wanted to try but held back: ...
-->
```

This is not a confession of failure. This is a record of your creative intelligence about this page. A different Opus builder will read these ideas during the IMPROVE pass and use them as a starting point for deepening your work.

There is no penalty for having ideas. Zero ideas triggers single-pass RELEASE evaluation; four or more ideas confirms the standard IMPROVE path.
```

### Edit 11: Weaver Sections Rename — pa-weaver.md

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Action:** Global rename throughout the file:
- "SHIP" → "RELEASE" (except in historical quotes)
- "SHIP WITH FIXES" → "POLISH"
- "REFINE" → "IMPROVE"
- "REBUILD" → "RETHINK"

### Edit 12: Weaver Section 5.2 Rename — pa-weaver.md

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Location:** Line 286 (Section 5.2)
**Old:** "### 5.2 REFINE Protocol"
**New:** "### 5.2 IMPROVE Protocol"

### Edit 13: Weaver Section 5.3 Rename — pa-weaver.md

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Location:** Line 295 (Section 5.3)
**Old:** "### 5.3 REBUILD Protocol"
**New:** "### 5.3 RETHINK Protocol"

### Edit 14: Guardrails Revision Degradation — pa-guardrails-weaver.md

**File:** `ephemeral/va-extraction/pa-guardrails-weaver.md`
**Location:** Lines 38-49 (Section 4: Revision Degradation Warnings)
**Old header:** "## 4. REVISION DEGRADATION WARNINGS"
**New header:** "## 4. IMPROVEMENT PASS AWARENESS (Watch for Unintended Side Effects)"
**Old intro:** "Fix cycles can DEGRADE composition. Watch for:"
**New intro:** "IMPROVE passes deepen composition, but changes can have side effects. Watch for:"

### Edit 15: Rendering vs Composition — pa-weaver.md

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Location:** Lines 245-265 (Section 5.0)
**Old:** "Rendering failures (REFINE can fix):" / "Composition failures (REBUILD needed):"
**New:** "Rendering gaps (IMPROVE can address):" / "Composition gaps (RETHINK needed):"
**Old:** "If ALL flagged issues are rendering failures: verdict is REFINE (not REBUILD)."
**New:** "If ALL flagged issues are rendering gaps: verdict is IMPROVE (standard path). If ANY issue is a composition gap: verdict is RETHINK."

---

## 9. Summary of Philosophical Shift

| Dimension | Old (Crystallization) | New (Convergence) |
|-----------|----------------------|-------------------|
| Quality model | Quality = inputs | Quality = trajectory |
| Master equation | Q = A x C x S | Q_n = Q_{n-1} + Convergence(...) |
| Default path | Single-pass, iterate if needed | Two-pass, single-pass if exceptional |
| Iteration framing | Recovery from failure | Standard improvement |
| Builder role | Execute the spec correctly | Create, then deepen |
| Builder self-knowledge | Discarded (RESIDUAL only on REFINE) | Captured always (IMPROVEMENT IDEAS) |
| Verdict taxonomy | SHIP / SHIP WITH FIXES / REFINE / REBUILD | RELEASE / POLISH / IMPROVE / RETHINK |
| Stop:continue ratio | 3:1 (stop-centric) | 1:1:1:1 (balanced) |
| Success metric | Phase completion | PA-05 trajectory |
| Tracked data | Checkboxes | Delta, ideas surfaced, ideas used |
| The 21-idea agent | Stops (phase complete) | Continues (ideas justify IMPROVE) |
| Budget expectation | "40-60% need REFINE" (buried footnote) | "60-80% converge in two passes" (headline) |
| Core principle location | Line 610 (buried) | Line 24 (foundational) |

**Total edits:** 15 specification changes across 5 files
**Files modified:** MANIFEST.md, artifact-orchestrator.md, artifact-builder-recipe.md, pa-weaver.md, pa-guardrails-weaver.md
**New artifacts:** IMPROVEMENT IDEAS HTML comment block (builder output)
**New tracker fields:** 6 convergence-tracking fields

---

*End of ideology-convergence-model.md. Task #25 complete.*
