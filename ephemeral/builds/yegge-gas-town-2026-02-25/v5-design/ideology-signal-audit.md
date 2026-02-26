# Ideology Signal Audit: Stop vs Continue in Pipeline v3

**Date:** 2026-02-26
**Auditor:** Opus ideology-signal-auditor
**Scope:** All 10 operational pipeline files
**Method:** Full read of every file, manual signal extraction with line references

---

## 1. Signal Inventory

### STOP Signals (language/structure that says "you're done")

#### MANIFEST.md (~998 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 1 | 6 | "This file is an ORCHESTRATION SPEC. It is NOT modified during execution." | Immutability/locked |
| 2 | 41 | "SHIP / SHIP WITH FIXES / REFINE / REBUILD" | Terminal verdict (exit states) |
| 3 | 42 | "If SHIP WITH FIXES: pipeline completes with mechanical fix list." | Pipeline terminates |
| 4 | 44 | "Iteration budget: 1 REBUILD + 2 REFINE passes maximum." | Budget exhaustion |
| 5 | 44 | "Stop when PA-05 delta < 0.3 between passes (diminishing returns)." | Diminishing returns stop |
| 6 | 44 | "If a second REBUILD is triggered, pipeline halts with diagnostic output" | Hard stop |
| 7 | 62 | "Zero in ANY factor = zero quality. This is non-negotiable." | Non-negotiable framing |
| 8 | 67 | "Default mode: ITERATIVE-TO-CONVERGENCE" | Convergence = endpoint |
| 9 | 238 | "FORMAT IS CRITICAL" | Rigid specification |
| 10 | 277 | "EXECUTION TIMING: Gates run AFTER the builder completes" | Post-hoc verification only |
| 11 | 312-318 | PA-05 scoring definitions: FLAT/ASSEMBLED/COMPOSED/DESIGNED | Classification, not aspiration |
| 12 | 321 | "FRESH-EYES IS NON-NEGOTIABLE." | Non-negotiable framing |
| 13 | 452 | "Quality Floor (verified by gates, NOT seen by builder)" | Builder excluded from quality goals |
| 14 | 475 | "Optimization: orchestrator MAY skip PA deployment and proceed directly to REBUILD" | Fast-track to exit |
| 15 | 495 | "USABILITY CIRCUIT BREAKER" | Emergency stop mechanism |
| 16 | 513-517 | 8-rule verdict priority: REBUILD / REFINE / SHIP | Terminal classification tree |
| 17 | 522 | "Output: SHIP / SHIP WITH FIXES / REFINE / REBUILD verdict" | Final output is verdict |
| 18 | 551 | "SHIP (PA-05 >= 3.5)... Pipeline complete. Page is ready." | Pipeline complete = done |
| 19 | 582 | "VERDICT: SHIP / REFINE / REBUILD" (dependency graph endpoint) | Pipeline terminates at verdict |
| 20 | 610-612 | "Circuit Breaker: Iteration budget: 1 REBUILD + 2 REFINE passes." | Hard budget cap |
| 21 | 612 | "Stop when PA-05 delta < 0.3 between passes (diminishing returns)" | Stop signal repeated |
| 22 | 785-790 | "STOP HERE FOR EXECUTION" HTML comment block | Explicit stop marker |

#### artifact-orchestrator.md (~1,193 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 23 | 13 | "Iterative-to-convergence = DEFAULT" | Convergence = done |
| 24 | 14 | "Compositional Critic = REMOVED from default pipeline" | Feature removed/locked |
| 25 | 42-44 | "All 20 historical suppressors INACTIVE in v3" | Locked state |
| 26 | 44 | "Budget expectation: 40-60% of builds will use at least one REFINE cycle" | Sets expectation of 1 cycle |
| 27 | 86 | "DEFAULT: Build with REFINE iteration (up to 3 cycles)" | Caps at 3 |
| 28 | 109-116 | "Fix cycles (FIX->FIX->FIX) = OLD... REBUILD with fresh builder (new)" | Framing iteration as "old" |
| 29 | 533-544 | "SECTION 7: VERDICT AND DECISION TREE" | Decision tree = terminal routing |
| 30 | 551 | "SHIP (PA-05 >= 3.5) Pipeline complete." | Done signal |
| 31 | 554-559 | "REFINE (PA-05 2.5-3.5)" with BEFORE/DURING/AFTER checklist | REFINE framed as protocol compliance, not creative opportunity |
| 32 | 575 | "Did you return to Phase 3 for full re-audit? [Y/N — if N, STOP]" | Stop if non-compliant |
| 33 | 586 | "Post-REFINE Mechanical Sweep" | Mechanical verification, not creative assessment |
| 34 | 590 | "WARNING: GATES PASSED does not mean SHIP." | Warning language |
| 35 | 594-606 | "REBUILD (PA-05 < 2.5)" protocol | REBUILD is terminal action |
| 36 | 610-611 | "Fixing alone will not reach Flagship" | Discouraging statement |
| 37 | 615-629 | Iteration Decision Function (IF/HALT/HALT/HALT) | 3 HALT conditions, 1 PROCEED |
| 38 | 700 | "SECTION 8: TOTAL BUILD SUMMARY" | Summary = finality |
| 39 | 735-737 | "Post-Pipeline Archival" | Post-pipeline = done |
| 40 | 784-790 | "STOP HERE FOR EXECUTION" comment block | Explicit stop |
| 41 | 796 | "STATUS: BLOCKED until experiment #21" | Blocked/locked |

#### artifact-builder-recipe.md (~833 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 42 | 263 | "Single-pass output target: Complete HTML page with 800-1200 CSS lines." | Single-pass framing |
| 43 | 314-321 | "Step 3.5: Assess scaffolding" | Assessment, then move on |
| 44 | 460-477 | "Assess Disposition Deployment" checklist | Assessment checklist, not iteration prompt |
| 45 | 475-477 | "Emotional arc is EMERGENT, not SPECIFIED. It cannot be gate-checked. The PA auditor will assess it after build." | Defers quality judgment entirely to PA |
| 46 | 481 | "PHASE 5: SELF-EVALUATE AND REFINE" (title) | Self-evaluate as final phase |
| 47 | 536-540 | "Step 5.3: Screenshot and assess vs conviction" | Assess, not iterate |
| 48 | 557-563 | "Step 5.7: Assess output targets" | Final assessment step |
| 49 | 572-574 | "PHASE 6: TEMPORAL COMPOSITION... This phase is verified during Phase 5 self-evaluation" | Verification, not creation |

#### pa-weaver.md (~466 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 50 | 91 | "Ship Decision (SHIP / SHIP WITH FIXES / REFINE / REBUILD)" | Terminal verdict |
| 51 | 93 | "Ship Decision... the Weaver's verdict is INCOMPLETE if either is missing" | Completeness check = finality |
| 52 | 271-276 | Ship threshold table: 4 outcomes, all terminal | Decision tree exits |
| 53 | 322-323 | "If ANY finding is REGRESSION: flag as BLOCKING and recommend HALT" | HALT signal |
| 54 | 326-327 | "Do NOT predict post-fix PA-05 scores. Report what IS, not what MIGHT BE." | Suppresses forward-looking thinking |
| 55 | 355-365 | "Revision Degradation Warnings" | Framing iteration as degradation risk |

#### pa-deployment.md (~376 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 56 | 132 | "All agents run in PARALLEL (except Weaver, which is sequential after all auditors complete)" | Sequential endpoint |
| 57 | 228-231 | "Integrative Auditor MUST NOT be spawned until ALL 9 PA Auditor reports exist" | Structural dependency = pipeline |
| 58 | 298 | "If ANY check fails: DO NOT deploy auditors. Re-capture first." | Hard stop |

#### pa-guardrails.md (~113 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 59 | 95-99 | "This is intentional. Your job is to react to what you see." | Classification, not improvement |

#### pa-guardrails-weaver.md (~59 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 60 | 55-56 | "<= 120px: PASS | > 120px: VOID-RISK | > 200px: CATASTROPHIC VOID" | Binary pass/fail |

#### artifact-identity-perception.md (~556 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 61 | 42-43 | "Gate check | FAIL if any element has border-radius > 0" | Binary gate (10 like this) |
| 62 | 202-205 | "Gate check | FAIL if any adjacent zone background delta < 15 RGB" | Binary gate |
| 63 | All SC tables | "FAIL if..." (appears 10 times) | Binary gate language throughout |

#### EXECUTION-TRACKER-TEMPLATE.md (~162 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 64 | 78 | "Verdict: ___ (SHIP / SHIP WITH FIXES / REFINE / REBUILD)" | Terminal field |
| 65 | 97 | "Iteration State | _INITIAL / REFINE-1 / REFINE-2 / BUDGET-EXHAUSTED_" | Budget exhaustion as state |
| 66 | 107 | "Derived completion check: If Iteration State != INITIAL AND no -refine PA reports exist" | Completion check |
| 67 | 117 | "Triage values: INTENTIONAL (design choice) / FALSE-POS (gate too strict) / GENUINE (real defect)" | Triage = categorize, not improve |
| 68 | 128 | "Total tracker fill rate: ___% (count filled / total fields)" | Bureaucratic completion metric |

#### SKILL.md (~99 lines)

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 69 | 87-88 | "Stop when PA-05 delta < 0.3 between passes (diminishing returns). The pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES." | Stop + completion signal |
| 70 | 93-99 | "Non-negotiables" list (5 items) | Rigid constraint framing |

**TOTAL STOP SIGNALS: 70**

---

### CONTINUE Signals (language/structure that says "keep improving")

#### MANIFEST.md

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 1 | 42 | "If REFINE: execute REFINE protocol" | Iteration exists |
| 2 | 526 | "REFINE is the pipeline's highest-ROI intervention" | Positive framing of iteration |
| 3 | 528 | "REFINE and REBUILD are ACTION TRIGGERS" | Action, not failure |

#### artifact-orchestrator.md

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 4 | 44 | "REFINE is not failure — it is the convergence mechanism." | Iteration is normal |
| 5 | 570 | "Builder enters COMPOSITIONAL mode: deepening relationships, not fixing defects." | Creative framing for REFINE |
| 6 | 571 | "Builder receives generative verbs only ('illuminate', 'reveal', 'deepen', 'intensify')." | Generative language |
| 7 | 610 | "COMPOSING through successive REFINE passes will. Each REFINE is a fresh act of composition, not a repair." | Iteration as composition |

#### artifact-builder-recipe.md

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 8 | 13 | "You have 80% creative authority within identity constraints" | Creative authority |
| 9 | 106-107 | "Anti-pattern: threshold gaming... 15 is the floor, not the target." | Aspiration beyond floor |
| 10 | 183-185 | "Step 2.9: Assess — are your selections coherent? ... revisit the structural metaphor and let it unify them." | Self-assessment with creative action |
| 11 | 297-298 | "ASSESS: Do components feel like they BELONG to their zone?" | Quality aspiration question |
| 12 | 317-320 | "Step 3.5: Assess scaffolding" with 4 assessment questions | Self-assessment prompts |
| 13 | 334 | "Builder disposition toward quality: Optimize for quality, not gate compliance." | Quality aspiration |
| 14 | 392-400 | D-05 vocabulary: "The three dimensions of scroll rhythm" | Creative discovery frame |

#### pa-deployment.md

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 15 | 367-368 | "REFINE is compositional discovery, not defect repair." | Creative framing |

#### pa-weaver.md

| # | Line | Exact Text | Signal Type |
|---|------|-----------|-------------|
| 16 | 265 | "REFINE has proven ROI: +1.0 to +1.5 PA-05 per cycle." | Positive framing of iteration |

**TOTAL CONTINUE SIGNALS: 16**

---

## 2. Signal Ratio

### Overall: 70 STOP : 16 CONTINUE = **4.4:1**

### Per-File Breakdown

| File | Lines | STOP | CONTINUE | Ratio | Dominant Verb Class |
|------|-------|------|----------|-------|-------------------|
| MANIFEST.md | ~998 | 22 | 3 | 7.3:1 | verify, fail, check, complete |
| artifact-orchestrator.md | 1,193 | 19 | 4 | 4.8:1 | halt, stop, blocked, budget |
| artifact-builder-recipe.md | 833 | 8 | 7 | 1.1:1 | deploy, select, assess, read |
| pa-weaver.md | 466 | 6 | 1 | 6.0:1 | verdict, halt, ship, fail |
| pa-deployment.md | 376 | 3 | 1 | 3.0:1 | deploy, verify, must |
| pa-guardrails.md | 113 | 1 | 0 | inf | react, describe |
| pa-guardrails-weaver.md | 59 | 1 | 0 | inf | pass, fail, void |
| artifact-identity-perception.md | 556 | 3 | 0 | inf | fail if |
| EXECUTION-TRACKER-TEMPLATE.md | 162 | 5 | 0 | inf | verdict, complete, triage |
| SKILL.md | 99 | 2 | 0 | inf | stop, non-negotiable |

### Key observation

The builder-facing file (artifact-builder-recipe.md) is the ONLY file close to balance (1.1:1). Every orchestrator-facing and evaluator-facing file is heavily stop-dominant. This means the BUILDER might feel creative freedom, but the ORCHESTRATOR running the pipeline receives overwhelming "wrap it up" messaging.

---

## 3. Cluster Analysis

### Cluster 1: The Quickstart (MANIFEST.md lines 10-44) — **8 stop signals in 34 lines**
The quickstart is an 11-step procedure where every step ends with "Receive [output]" or "Proceed to step N." The only iteration signal is step 11, which mentions REFINE as a conditional. The quickstart reads as a factory assembly line: input -> process -> output -> done.

### Cluster 2: Phase Transitions (MANIFEST.md lines 360-500) — **6 stop signals**
Every phase ends with an "Output:" line and a "Decision Gate:" that routes to ABORT, REBUILD, or "proceed to Phase N+1." The gates are all EXIT routes. Not one gate says "this is good but could be better — iterate if you want."

### Cluster 3: Verdict System (orchestrator lines 533-660 + weaver lines 91-327) — **16 stop signals**
The verdict system is the densest stop cluster. The decision tree has 4 terminal states (SHIP/SHIP WITH FIXES/REFINE/REBUILD), 3 HALT conditions in the iteration function, revision degradation warnings, and prediction suppression. Even REFINE — the only continue signal — is wrapped in compliance checklists ("Did you re-read this section? [Y/N — if N, STOP]").

### Cluster 4: The Tracker (EXECUTION-TRACKER-TEMPLATE.md) — **5 stop signals, 0 continue**
The tracker is entirely about recording completion status. Every field is a binary: done/not done, PASS/FAIL. There is no field for "ideas the builder had but didn't implement" or "potential improvements for next cycle." The tracker measures PIPELINE COMPLETION, not PAGE QUALITY TRAJECTORY.

### Cluster 5: Non-Negotiables (spread across all files) — **~10 signals**
"Non-negotiable," "MUST," "REQUIRED," "FAIL if" — these appear in every file. They are necessary for identity constraints but they set a psychological tone: the pipeline is a compliance regime, not a creative workshop.

---

## 4. The 10 Highest-Leverage Insertion Points for Continue Signals

### Insertion Point 1: Builder Recipe Phase 5 — After Self-Evaluation
**File:** artifact-builder-recipe.md, after line ~563 (end of Step 5.7)
**Why:** This is where the builder finishes and hands off. Currently the recipe ends with "Assess output targets" and then... nothing. The builder has no prompt to think about what MORE they would do. The Gas Town builder had 21 improvement ideas but no invitation to pursue them.

### Insertion Point 2: MANIFEST Quickstart Step 11 — After SHIP WITH FIXES
**File:** MANIFEST.md, after line 42
**Why:** "If SHIP WITH FIXES: pipeline completes with mechanical fix list" is the most common good outcome. But "completes" means STOP. This is the exact point where the orchestrator could instead ask: "Before closing, does the builder have improvement ideas beyond the mechanical fixes?"

### Insertion Point 3: Weaver Verdict Output — New "Improvement Vector" Field
**File:** pa-weaver.md, after line 93 (the 7-item output list)
**Why:** The Weaver produces 7 outputs, all diagnostic. None say "here is what would make this page BETTER." Adding an 8th output — "Improvement vector: the single change that would most elevate this page" — gives the orchestrator ammunition to iterate even on SHIP WITH FIXES.

### Insertion Point 4: Builder Recipe Phase 2 — After Creative Selections
**File:** artifact-builder-recipe.md, after line 185 (Step 2.9 coherence assessment)
**Why:** Step 2.9 asks "are your selections coherent?" but frames it as a gate (if not, revisit). Add: "What excites you most about these selections? What would you try if you had more time?" This primes the builder to think beyond minimum compliance.

### Insertion Point 5: Orchestrator REFINE Protocol — Before Spawning REFINE Builder
**File:** artifact-orchestrator.md, after line 565 (REFINE protocol BEFORE section)
**Why:** The REFINE protocol is currently a compliance checklist (Did you re-read? Did you assemble inputs?). Before the compliance steps, add: "Review the initial builder's self-evaluation comments. What ideas did they have that weren't implemented? The REFINE builder should be briefed on these."

### Insertion Point 6: Execution Tracker — New "Builder Ideas" Section
**File:** EXECUTION-TRACKER-TEMPLATE.md, after line 42 (Phase 2 fields)
**Why:** The tracker has no field for builder improvement ideas. Add a text field: "Builder improvement ideas (from self-eval comments): ___". This makes unrealized ideas VISIBLE to the orchestrator, who can decide whether to iterate.

### Insertion Point 7: SKILL.md — After Iteration Support Section
**File:** SKILL.md, after line 91
**Why:** The SKILL.md frames iteration as error recovery: "If the Weaver verdict is REFINE." Add: "Even if the verdict is SHIP WITH FIXES, the orchestrator SHOULD assess whether the builder's self-evaluation flagged improvement opportunities worth pursuing before closing the pipeline."

### Insertion Point 8: MANIFEST Verdict Logic — Between SHIP WITH FIXES and REFINE
**File:** MANIFEST.md, after line 514
**Why:** Currently: PA-05 >= 3.0 AND fixes MECHANICAL = SHIP WITH FIXES. PA-05 2.5-3.5 = REFINE. There is NO state for "PA-05 3.0, good page, but builder says they have ideas." Add a new verdict state or an orchestrator decision point: "SHIP WITH FIXES + builder has unrealized ideas -> orchestrator MAY elect REFINE if iteration budget allows."

### Insertion Point 9: Builder Recipe Self-Evaluation — Add "What Would You Improve?"
**File:** artifact-builder-recipe.md, within Phase 5 (around line 446)
**Why:** The 7 self-evaluation questions (zone transitions, transition types, skeleton test, scroll surprise, section heights, density arc, ending) are all diagnostic. None ask "what would you change if you could?" Add an 8th question: "If you had one more hour with this page, what would you improve?" This generates the improvement ideas that currently die unspoken.

### Insertion Point 10: Orchestrator Phase 3C — After Verdict, Before Closing
**File:** artifact-orchestrator.md, after line 528 (verdict behavior section)
**Why:** The verdict behavior section says "REFINE and REBUILD are ACTION TRIGGERS." But there is no equivalent for SHIP WITH FIXES. Add: "Before closing SHIP WITH FIXES: review builder self-evaluation HTML comments. If the builder identified improvement ideas beyond the mechanical fixes, log them in the execution tracker as DEFERRED-IMPROVEMENTS for future runs."

---

## 5. Language Pattern Analysis

### Dominant Verbs by Frequency

**STOP verbs (verification/compliance):**
| Verb | Approx Count | Files |
|------|-------------|-------|
| FAIL (if) | 38 | identity-perception, gates, manifest, orchestrator |
| verify / verified | 22 | all files |
| must / MUST | 47 | all files |
| check | 19 | orchestrator, manifest, tracker |
| STOP | 8 | orchestrator, manifest, skill |
| complete / completes | 12 | manifest, tracker, orchestrator |
| HALT | 5 | orchestrator |
| non-negotiable | 4 | manifest, deployment, skill |
| locked / LOCKED | 4 | manifest, recipe |
| ABORT | 4 | manifest, orchestrator |
| BLOCKED | 3 | orchestrator |

**CONTINUE verbs (creative/aspirational):**
| Verb | Approx Count | Files |
|------|-------------|-------|
| select / choose | 14 | recipe only |
| deploy | 12 | recipe only |
| read | 11 | recipe only |
| assess | 9 | recipe only |
| improve / improvement | 5 | orchestrator, deployment |
| explore / discover | 0 | ZERO appearances |
| try | 0 | ZERO appearances |
| experiment (as verb) | 0 | ZERO (appears only as noun "experiment #21") |
| what would you | 0 | ZERO appearances |
| imagine | 0 | ZERO appearances |

### Critical Finding

The verbs "explore," "discover," "try," "what would you," and "imagine" appear ZERO times across all 10 operational pipeline files. The pipeline has no creative invitation language at all. The closest is "80% creative authority" (appears 3 times) — but this is a PERMISSION, not an INVITATION. Permission says "you may." Invitation says "what would you?"

### Verb Ratio

**Compliance verbs** (fail, verify, must, check, stop, complete, halt, abort, blocked): ~162
**Creative verbs** (select, deploy, read, assess, improve): ~51
**Aspirational verbs** (explore, discover, try, imagine, what-would-you): 0

Ratio: **162 : 51 : 0** = compliance dominates 3.2:1, and aspiration is ABSENT.

---

## 6. Exact Edit Specifications

### Edit 1: Builder Recipe — Add "What Would You Improve?" Self-Evaluation Question

**File:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Location:** After line 476 (after "Per council verdict: 'D-04 creates conditions for surprise (not guaranteed)' — all D-emotion links are design intentions.")
**Add:**

```markdown
### Step 4.10: What would you improve?

Before handing off, answer this question as an HTML comment:

<!-- IMPROVEMENT-IDEAS:
If I had one more pass on this page, I would:
1. [specific change]
2. [specific change]
3. [specific change]
-->

This is not self-criticism — it is creative forward-thinking. A builder who
sees no room for improvement is not paying attention. A builder who sees
opportunities they did not pursue is demonstrating compositional awareness.
These ideas are logged in the execution tracker and may inform a REFINE pass.
```

### Edit 2: Builder Recipe Phase 5 — Add Iteration Invitation

**File:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Location:** After line 563 (end of Step 5.7 "Assess output targets")
**Add:**

```markdown
### Step 5.8: What excites you about this page?

Write a 2-3 sentence HTML comment describing what you are MOST proud of in
this build and what SINGLE CHANGE would most elevate it:

<!-- BUILDER-REFLECTION:
Proudest: [what worked best]
Would elevate: [the one thing that would take this further]
-->

This reflection is captured by the orchestrator and serves two purposes:
1. If REFINE is triggered, the REFINE builder reads this as creative context
2. If SHIP WITH FIXES, the orchestrator logs it as DEFERRED-IMPROVEMENT
```

### Edit 3: Weaver — Add "Improvement Vector" Output

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Location:** After line 93 (after item 7 "Ship Decision")
**Add:**

```markdown
8. **Improvement Vector** (REQUIRED) — Based on all auditor reports, identify the single
   change (not a fix — a creative improvement) that would most elevate this page. Frame
   as aspiration, not defect: "The page would come alive if..." or "The strongest
   unrealized potential is..." This is distinct from the fix list. Fixes address defects;
   the improvement vector addresses POTENTIAL.
```

### Edit 4: MANIFEST Quickstart — Add Builder Ideas Capture

**File:** `ephemeral/va-extraction/MANIFEST.md`
**Location:** After line 42 (after step 11, before "Iteration budget")
**Add:**

```markdown
11a. **Before closing any verdict:** Read the builder's `<!-- IMPROVEMENT-IDEAS -->` and
     `<!-- BUILDER-REFLECTION -->` HTML comments. Log in execution tracker under
     "Builder Ideas." If verdict is SHIP WITH FIXES AND builder identified COMPOSITIONAL
     improvements AND iteration budget allows, the orchestrator MAY elect to REFINE
     instead — treating the builder's ideas as the artistic brief for the REFINE builder.
```

### Edit 5: Orchestrator REFINE — Brief REFINE Builder on Unrealized Ideas

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** After line 565 (REFINE BEFORE section, after "Assemble REFINE builder inputs")
**Add:**

```markdown
- Extract builder IMPROVEMENT-IDEAS and BUILDER-REFLECTION comments from Pass 1 HTML.
  Include as addendum to the artistic impression: "The original builder's unrealized
  ideas were: [ideas]. Treat these as creative seeds, not as directives."
```

### Edit 6: Execution Tracker — Add Builder Ideas Field

**File:** `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md`
**Location:** After line 42 (after "Self-eval 7 questions answered")
**Add:**

```markdown
- Builder improvement ideas: ___ (manual: extract from <!-- IMPROVEMENT-IDEAS --> comment)
- Builder proudest element: ___ (manual: extract from <!-- BUILDER-REFLECTION --> comment)
- Deferred improvements: ___ (manual: any SHIP WITH FIXES ideas logged for future)
```

### Edit 7: Orchestrator Verdict — Add SHIP-WITH-POTENTIAL State

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** After line 554 (after SHIP threshold, before REFINE threshold)
**Add:**

```markdown
**SHIP WITH POTENTIAL (PA-05 >= 3.0, <= 3 MECHANICAL fixes, builder has COMPOSITIONAL ideas)**
- All SHIP WITH FIXES criteria met
- PLUS: builder's IMPROVEMENT-IDEAS contain at least one COMPOSITIONAL idea
- Orchestrator decision: ELECT REFINE (if budget allows) or SHIP WITH FIXES + log deferred
- This is NOT a mandatory REFINE — it is an orchestrator judgment call
- Default: SHIP WITH FIXES (safe). Override: REFINE (if orchestrator judges the idea has high potential)
```

### Edit 8: SKILL.md — Add Orchestrator Judgment on Closing

**File:** `~/.claude/skills/build-page/SKILL.md`
**Location:** After line 91 (after "All REFINE artifacts use `-refine` suffix")
**Add:**

```markdown
### Quality aspiration (beyond compliance)
Before closing with SHIP WITH FIXES, review the builder's self-evaluation HTML comments.
If the builder identified unrealized improvement ideas, assess whether a REFINE pass would
be worth the investment. The goal is not minimum viable page — it is the best page the
content deserves within the iteration budget.
```

### Edit 9: Weaver — Replace Prediction Suppression with Forward-Looking Frame

**File:** `ephemeral/va-extraction/pa-weaver.md`
**Location:** Lines 326-327 (prediction suppression section)
**Replace:**

```markdown
### 5.6 Prediction Suppression

Do NOT predict post-fix PA-05 scores. Report what IS, not what MIGHT BE. Predictive language ("this should bring PA-05 to 3.0") anchors expectations and distorts REFINE builder behavior. Enforced by GR-81 (ADVISORY).
```

**With:**

```markdown
### 5.6 Forward Assessment

Do NOT predict post-fix PA-05 SCORES (numeric predictions anchor expectations). Instead,
describe the PAGE'S TRAJECTORY: "The composition has strong bones — the metaphor is
structural, transitions are varied, the density arc has shape. The unrealized potential
is in [specific area]." Frame what the page COULD BECOME, not what score it might reach.
Enforced by GR-81 (ADVISORY — no numeric predictions).
```

### Edit 10: Builder Recipe Step 2.9 — Add Creative Excitement Prompt

**File:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Location:** After line 185 (end of Step 2.9)
**Add:**

```markdown
**Creative check:** Before proceeding to Phase 3, pause. Are you EXCITED about
building this page? Can you see the finished product in your mind? If the
selections feel like compliance rather than creation, revisit the structural
metaphor (Step 2.3). The metaphor should make you want to build, not just
make you able to build.
```

---

## 7. Summary

The pipeline has a **4.4:1 stop-to-continue signal ratio**. The word "FAIL" appears 38 times. The word "explore" appears zero times. The builder recipe is the only balanced file (1.1:1), but it is wrapped in an orchestration layer that is 5-7x stop-dominant.

The 10 edits above add ~45 lines of continue-signal language across 7 files. They do not remove any stop signals (which are necessary for quality assurance). Instead, they add:
- A builder self-improvement prompt (Edit 1, 2, 10)
- A weaver improvement vector output (Edit 3)
- A builder-ideas capture mechanism (Edit 4, 6)
- An orchestrator judgment point for quality aspiration (Edit 5, 7, 8)
- A forward-looking assessment frame (Edit 9)

**Projected impact:** These edits would shift the ratio from 4.4:1 to approximately 3.5:1 (70:26), and more importantly, would create a PATHWAY for builder improvement ideas to survive the pipeline instead of dying at the builder-to-audit handoff.

The fundamental ideology shift: the pipeline currently treats SHIP WITH FIXES as an EXIT. These edits treat it as a DECISION POINT where the orchestrator can choose to exit OR continue based on creative potential, not just defect presence.
