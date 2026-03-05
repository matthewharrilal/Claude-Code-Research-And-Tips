# Section 8: The Implementation Order

*What to build first, second, third -- and why each step depends on the one before it.*

---

## The Dependency Diagram

Before we get into the details, here is the entire implementation sequence as a picture. Every arrow means "this step needs the one above it to exist first."

```
Step 1: Foundation Edits          (30-45 min)
  |     Small fixes to 3 existing files
  |     -- perception thresholds, stacking rule, stacking token
  |
  v
Step 2: Conventions Brief         (1-2 hours)
  |     The MOST IMPORTANT new file
  |     -- the builder's only spec document (~100 lines)
  |
  v
Step 3: Experiment A              (2-3 hours)
  |     The $5 test
  |     -- 1 Opus agent + conventions brief + content
  |
  | <-- DECISION GATE: PA-05 >= 3.0? Continue. PA-05 < 2.0? Investigate.
  |
  v
Step 4: Gate Infrastructure       (3-5 hours)
  |     gate-registry.js + gate-runner.js
  |     -- 15 programmatic checks via Playwright
  |
  v
Step 5: Orchestrator Skill        (4-6 hours)
  |     /build-page SKILL.md
  |     -- the conductor that ties everything together
  |
  v
Step 6: Experiment B              (3-4 hours)
  |     Full Fat Core end-to-end
  |     -- orchestrator + core agent + 9 PA auditors + weaver
  |
  | <-- DECISION GATE: PA-05 >= 3.0? Ship. PA-05 < 3.0? Debug.
  |
  v
Step 7: Polish                    (1-2 hours)
        Update CLAUDE.md files, add /build-page routing
```

**Total estimated time: 15-25 hours of work, spread across multiple sessions.**

Each step below explains WHAT you build, WHY it comes at this position in the sequence, what it DEPENDS ON, and what DEPENDS ON IT.

---

## Step 1: Foundation Edits

**Time:** 30-45 minutes
**What:** Small, precise edits to 3 existing files
**Why first:** Every other step references these values. They are the ground truth.

### Edit 1A: Perception Thresholds in PA SKILL.md

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Size of change:** ~30 lines inserted

The perceptual-auditing skill currently has zero minimum perceptual delta thresholds. The flagship experiment proved this was catastrophic -- backgrounds differed by 1-8 RGB points (invisible to humans) and the programmatic gates said "PASS" because variation technically existed.

Insert the threshold table after the Void Guardrail Specifications section:

| CSS Property | Minimum Delta | Why |
|---|---|---|
| Background color | >= 15 RGB points (any channel) | Flagship used 1-8 point differences -- invisible |
| Letter-spacing | >= 0.5px (~0.03em at 16px) | Flagship used 0.001-0.01em -- no human can see this |
| Padding/margin between zones | >= 24px | Adjacent zones with 4px difference look identical |
| Font-size | >= 2px between levels | 15px vs 16px is imperceptible at reading distance |
| Font-weight | >= 200 units | 400 vs 500 is barely visible; 400 vs 600 is clear |

**Why first:** The conventions brief (Step 2) references these thresholds. The gate runner (Step 4) enforces them programmatically. If the threshold values do not exist in a canonical location, every downstream consumer must invent them independently -- and they will invent different numbers.

### Edit 1B: S-09 Stacking Rule in semantic-rules.md

**File:** `design-system/compositional-core/guidelines/semantic-rules.md`
**Size of change:** ~25 lines inserted

The current S-09 rule caps individual spacing properties at 96px. This is necessary but not sufficient. The ceiling experiment proved why: each individual value was under 96px, but they stacked at section boundaries to create 210-276px whitespace voids. Nine out of nine auditors flagged these voids as the dominant visual failure.

The stacking rule adds:
- Binary test: `padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 192px`
- A worked example showing how three compliant values (80px + 80px + 64px) create a 224px void
- Fix options when the total exceeds 192px

**Why first:** The conventions brief (Step 2) references the 192px stacking maximum. The gate runner (Step 4) enforces it as SC-10.

### Edit 1C: Stacking Token in tokens.css

**File:** `design-system/compositional-core/vocabulary/tokens.css`
**Size of change:** ~5 lines

Add one new token: `--space-max-stacked: 192px` with a comment explaining that it caps the TOTAL visual gap at any section boundary, not just individual properties.

**Why first:** The gate runner (Step 4) reads this token value. Builders read tokens.css as part of their input set. The token makes the stacking rule discoverable in the same place where all other spacing values live.

### Step 1 Summary

| File | Lines Added | What |
|---|---|---|
| PA SKILL.md | ~30 | Perception threshold table |
| semantic-rules.md | ~25 | S-09 stacking rule |
| tokens.css | ~5 | --space-max-stacked token |
| **Total** | **~60** | **3 existing files edited** |

**After Step 1:** The design system has canonical perception thresholds, a stacking rule, and a stacking token. These are the atomic values that everything else references.

---

## Step 2: Conventions Brief

**Time:** 1-2 hours
**What:** Write `design-system/compositional-core/guidelines/conventions-brief.md` (~100 lines)
**Depends on:** Step 1 (threshold values must exist to reference)
**Why second:** This is the single most important new file. It is the ONLY document the builder reads beyond content and tokens. If this file is wrong, the entire pipeline produces wrong output.

The conventions brief has 5 sections:

**Section 1: Perception Thresholds (~20 lines)**
References the values from Step 1. Background >= 15 RGB. Typography >= 2px. Spacing >= 24px. Maximum stacked gap <= 192px. Border presence >= 1 per 400px scroll.

**Section 2: Soul Constraints (~20 lines)**
The 8 absolute prohibitions (border-radius: 0, box-shadow: none, etc.), palette lock, typography trinity, container 940-960px.

**Section 3: Spatial Rules (~20 lines)**
F-pattern or Z-pattern attention topology, progressive disclosure (3+ depth levels), compression ratio <= 40%, responsive at 1440px and 768px.

**Section 4: Quality Floor (~20 lines)**
Minimum 8 distinct mechanisms across 5 categories (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+). Minimum 3 multi-coherence transitions. Minimum 5 distinct component types. Zero whitespace voids > 192px.

**Section 5: Creative Authority (~20 lines)**
The builder may override any non-soul value with logged reasoning. May introduce mechanisms not in the catalog. May deviate from suggested patterns when content demands it. Compositional judgment supersedes this document on all non-soul matters. After building: stop, scroll the full page, write 3 observations, adjust.

**Why this format matters:** The conventions brief is PROSCRIPTIVE (what not to violate), not PRESCRIPTIVE (what to do step by step). This is the key architectural distinction from the flagship's approach. The flagship gave builders a 530-line checklist of constraints. Quality was inversely correlated with input volume:

| Experiment | Builder Input | PA-05 Score |
|---|---|---|
| CD-006 | ~50 lines | ~3/4 COMPOSED (39/40 soul score, CEILING tier) |
| Middle | ~100 lines | 4/4 DESIGNED |
| Remediation | ~300 lines | 2.5/4 COMPOSED |
| Flagship | ~530 lines | 1.5/4 FLAT |

The conventions brief sits in the sweet spot: enough structure to prevent soul violations, enough freedom for the builder's compositional intelligence to emerge.

**After Step 2:** The design system has the document that defines Pipeline v2's approach. A builder could use this file right now, manually, to build a page. That is exactly what Step 3 tests.

---

## Step 3: Experiment A -- The $5 Test

**Time:** 2-3 hours (30 min build + 1-1.5 hr PA + 30 min scoring)
**What:** One Opus agent builds a page using only the conventions brief
**Depends on:** Steps 1-2 (threshold values and conventions brief must exist)
**Why third:** This is the cheapest possible validation of the entire approach. Do not build infrastructure for an approach that does not work.

### What Happens

1. Spawn a single Opus agent
2. Give it: `RESEARCH-SYNTHESIS.md` (the same content the flagship used) + `conventions-brief.md` + `tokens.css` + prohibitions summary
3. No pipeline. No orchestrator. No gate runner. No verification shell.
4. The agent reads the content, plans, and builds in one pass
5. Run Mode 4 PA: 9 fresh-eyes Opus auditors score the output blind

### Why This Is the Right Test

If a single Opus agent with ~230 lines of input produces PA-05 >= 3.0/4, then the entire pipeline infrastructure -- orchestrator, gate runner, multi-wave architecture -- is unnecessary. The conventions brief alone is the pipeline.

If it produces PA-05 2.0-2.9/4, the approach is sound but the verification shell adds value. Proceed to Step 4.

If it produces PA-05 < 2.0/4, something is wrong with the conventions brief. Investigate before proceeding.

### The Decision Gate

```
PA-05 >= 3.0  -->  Pipeline v2 = conventions brief. Skip Steps 4-5, go to Step 7.
PA-05 2.0-2.9 -->  Approach is sound. Continue to Step 4.
PA-05 < 2.0   -->  Conventions brief needs work. Revise Step 2, re-test.
```

**This decision gate is non-negotiable.** The entire reason for running the cheapest experiment first is to avoid building infrastructure for a broken approach. The flagship spent 660:1 meta-to-output ratio on infrastructure that was never validated. Experiment A breaks that pattern.

### Cost

- API cost: ~$5-10 (single Opus agent + 9 PA auditors)
- Wall-clock time: ~2-3 hours
- If it succeeds at >= 3.0, it saves 10-15 hours of Steps 4-6

**After Step 3:** You know whether the approach works. You have a concrete PA-05 score to compare against. You have a decision: continue building infrastructure, or ship the conventions brief as the pipeline.

---

## Step 4: Gate Infrastructure

**Time:** 3-5 hours
**What:** Write `gate-runner.js` (~400 lines) and supporting infrastructure
**Depends on:** Step 1 (threshold values for gate criteria), Step 3 (confirms approach is sound)
**Why fourth:** Gates are needed for the full pipeline but not for the single-agent experiment. Building them before confirming the approach is sound would be premature.

### What Gets Built

**gate-runner.js (~400 lines):**
A JavaScript module that opens one Playwright browser, navigates to the built HTML page, runs `getComputedStyle` and DOM queries against 15 gates (SC-01 through SC-15), and returns structured PASS/FAIL results with specific CSS fix recipes for every failure.

The 15 gates fall into three categories:

**Soul gates (SC-01 through SC-05):** Container width 940-960px, border-radius: 0, font trinity, warm palette R >= G >= B, no pure black/white. These are binary threshold checks with ~95% confidence.

**Structure gates (SC-06 through SC-08, SC-12, SC-15):** ARIA landmarks >= 3, skip link present, component library classes >= 3, zone count 2-5, border presence. These check for the presence of required structural patterns.

**Perception gates (SC-09 through SC-11, SC-13, SC-14):** Background delta >= 15 RGB, stacked gap <= 192px, typography zones >= 2px delta, multi-coherence >= 3 channels per boundary, no sub-perceptual CSS values. These enforce the perception thresholds from Step 1.

**Every gate failure produces a fix recipe** -- not "fix the typography" (a judgment verb the builder will interpret differently each time) but "set h1 to 36px because display-body delta is 2px and needs to be >= 10" (an action verb with a measurement and a threshold).

### Technical Details

- Single Playwright session, sequential gate execution (~5-15 seconds total)
- Must serve HTML via HTTP (Playwright MCP blocks `file://` protocol)
- Waits for `document.fonts.ready` before measuring (font metrics depend on loaded fonts)
- Disables animations before measuring

### Why Not Earlier

Building the gate runner before Experiment A would mean:
- 3-5 hours invested before knowing if the approach works
- If Experiment A scores >= 3.0, gates might be unnecessary (the conventions brief alone produces quality)
- The gate runner is infrastructure, not the core product

**After Step 4:** The design system has programmatic verification. Any HTML page can be checked against 15 binary gates in under 15 seconds, with specific CSS fix recipes for every failure.

---

## Step 5: Orchestrator Skill

**Time:** 4-6 hours
**What:** Write `~/.claude/skills/build-page/SKILL.md` (~350-500 lines)
**Depends on:** Step 2 (conventions brief must exist), Step 4 (gate runner must exist)
**Why fifth:** The orchestrator ties everything together. It needs instruments to conduct. Without the conventions brief, it has nothing to give the builder. Without the gate runner, it has nothing to verify with.

### What the Orchestrator Does

When a user types `/build-page path/to/content.md`, the orchestrator:

1. **Reads content** and produces a brief (~30 lines: what to build, for whom, key tensions)
2. **Spawns ONE Opus core agent** with: content + conventions brief + tokens.css + prohibitions summary (~230 lines total)
3. **Runs phase-locked gates** at 4 checkpoints during the build (subsets of the 15 gates, ~2 seconds each)
4. **Pre-captures screenshots** after the build completes (at 1440px and 768px)
5. **Spawns 9 PA auditors** in parallel with pre-captured screenshots (Mode 4, fresh eyes)
6. **Spawns 1 PA weaver** to synthesize the 9 reports into a verdict and fix list
7. **Routes fixes** to the SAME core agent if PA-05 < 3/4 (preserves compositional memory)
8. **Repeats** fix cycle up to 3 times; escalates to user if still < 3/4 after 3 cycles
9. **Deposits output:** `output.html` + `_pa-report.md` + `_build-log.md`

### Why This Comes After Gates

The orchestrator invokes the gate runner at 4 mid-build checkpoints and 1 comprehensive post-build check. If the gate runner does not exist, the orchestrator has no verification layer. Building the orchestrator without gates is like building a factory without quality inspection stations -- the product ships but quality is unverified.

### Why This Comes After the Conventions Brief

The orchestrator's primary job is routing the conventions brief to the core agent. If the conventions brief does not exist, the orchestrator routes nothing meaningful. The core agent would build blind.

**After Step 5:** The pipeline is complete. A user can type `/build-page` and walk away. The orchestrator handles everything.

---

## Step 6: Experiment B -- Full Fat Core

**Time:** 3-4 hours (90 min build + 1.5 hr PA + 30 min scoring)
**What:** Run the full pipeline end-to-end: orchestrator + core agent + gate runner + 9 PA auditors + weaver
**Depends on:** Steps 1-5 all complete
**Why sixth:** This is the full pipeline validation. It tests every component working together.

### What Happens

1. Type `/build-page design-system/research/RESEARCH-SYNTHESIS.md`
2. The orchestrator spawns the core agent with the conventions brief
3. The core agent plans and builds in one pass
4. The gate runner checks at 4 mid-build points and 1 comprehensive post-build check
5. Screenshots are pre-captured
6. 9 PA auditors score the output blind
7. The weaver synthesizes findings
8. If PA-05 < 3/4, the fix cycle engages

### The Decision Gate

```
PA-05 >= 3.0 + all gates pass  -->  Ship. Pipeline v2 is complete.
PA-05 2.5-2.9                  -->  Debug specific issues. One more fix cycle.
PA-05 < 2.5                    -->  Something is wrong. Compare to Experiment A.
```

### Comparing A and B

| If... | Then... |
|---|---|
| B scores higher than A by >= 0.5 | The verification shell adds value. Ship the full pipeline. |
| B scores about the same as A | The shell is overhead. Simplify to single agent + PA only. |
| B scores lower than A | The orchestrator is degrading quality. Debug the routing. |

**After Step 6:** You have a validated, working pipeline. You know exactly what it produces, how long it takes, and whether it meets the quality bar.

---

## Step 7: Polish

**Time:** 1-2 hours
**What:** Update navigation files, add routing, clean up
**Depends on:** Step 6 (must know the final architecture from experiment results)
**Why last:** Polish depends on knowing the final shape. If Experiment A succeeds at >= 3.0, the polish is different (no orchestrator to document) than if Experiment B is the winning architecture.

### What Gets Updated

1. **`design-system/CLAUDE.md`** -- Add /build-page to the Skills section, update current phase status
2. **`design-system/compositional-core/CLAUDE.md`** -- Update Track 2 workflow to reference the new pipeline
3. **TC SKILL.md** -- If Fat Core wins, narrow the skill to planning-only phases (~660 lines from 1,878)
4. **`design-system/pipeline/PV2-PIPELINE-DIAGRAM.md`** -- Update with experiment results and final architecture

### What Gets Documented

- Experiment A and B results (PA-05 scores, comparison)
- Final architecture decision (conventions brief only, or full Fat Core)
- Known limitations and future work

**After Step 7:** Pipeline v2 is complete, documented, and integrated into the design system navigation.

---

## The Complete Timeline

| Step | What | Time | Running Total |
|---|---|---|---|
| 1 | Foundation Edits | 30-45 min | 30-45 min |
| 2 | Conventions Brief | 1-2 hours | 1.5-2.75 hours |
| 3 | Experiment A | 2-3 hours | 3.5-5.75 hours |
| -- | *Decision gate* | -- | -- |
| 4 | Gate Infrastructure | 3-5 hours | 6.5-10.75 hours |
| 5 | Orchestrator Skill | 4-6 hours | 10.5-16.75 hours |
| 6 | Experiment B | 3-4 hours | 13.5-20.75 hours |
| -- | *Decision gate* | -- | -- |
| 7 | Polish | 1-2 hours | 14.5-22.75 hours |
| **Total** | | | **~15-23 hours** |

This is not 15-23 hours in one sitting. This is work spread across multiple sessions, with natural stopping points between steps. Each step has a clear deliverable. Each step can be verified independently.

---

## The Fast Path

If Experiment A (Step 3) produces PA-05 >= 3.0/4, the entire pipeline collapses to:

```
Step 1: Foundation Edits     (30-45 min)
Step 2: Conventions Brief    (1-2 hours)
Step 3: Experiment A         (2-3 hours)  -->  PA-05 >= 3.0!
Step 7: Polish               (1-2 hours)
                              ─────────
Total:                        4-8 hours
```

This is the best possible outcome. It means the conventions brief IS the pipeline. No orchestrator. No gate runner. No multi-agent coordination. Just one Opus agent, one 100-line document, and one verification pass.

The fast path is not wishful thinking. The evidence supports it: CD-006 (1 agent, minimal input) scored 39/40. Middle (tight core, 100-line input) scored 4/4 DESIGNED. Quality inversely correlates with infrastructure complexity.

---

## What NOT to Build

Just as important as the sequence is what we deliberately defer or skip entirely:

**Do not build before experiments:**
- The 650-line operational recipe (the recipe ceiling analysis predicts it will cap at 3/4)
- TC skill narrowing (wait to see if the Fat Core architecture even uses TC as a separate step)
- Transition table YAML format (let the core agent create its own transitions)
- Fractal echo table (let the core agent discover fractal patterns organically)
- Per-agent memory files (the Fat Core eliminates the need by merging planner and builder)

**Do not build at all (unless experiments prove otherwise):**
- Multi-wave linear pipeline (the architecture we are replacing)
- Separate TC planner agent (merged into the core agent)
- Separate builder agent (merged into the core agent)
- 650-line builder input package (replaced by ~100-line conventions brief)

The flagship spent 660:1 meta-to-output ratio building infrastructure that was never validated. This sequence puts validation (Step 3) BEFORE infrastructure (Steps 4-5). That is the single most important structural decision in the implementation order.

---

## Summary

Seven steps. Two decision gates. One clear sequence.

The foundation comes first because everything references it. The conventions brief comes second because it is the core product. The experiment comes third because it validates the approach before we invest in infrastructure. The gates come fourth because the orchestrator needs them. The orchestrator comes fifth because it needs the gates and the brief. The full experiment comes sixth because it needs everything working. The polish comes last because it needs to know the final shape.

Every step depends on the one before it. No step can be skipped. But the fast path -- if Experiment A succeeds -- skips 60% of the work.

Build the cheapest, most important thing first. Test it. Then decide whether to build more.
