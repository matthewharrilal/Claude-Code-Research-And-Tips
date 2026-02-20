# Section 7: The Experiments -- What We Test Before Building

## The Problem We're Solving

We've designed an architecture (Fat Core), written specifications, and created
gate systems. But we have never tested any of it. The project's history carries
a painful lesson: the Flagship experiment spent 660 lines of meta-infrastructure
for every 1 line of output -- and the output scored 1.5/4. Architecture without
validation is expensive fiction.

Before codifying Pipeline v2 into permanent files, we run experiments. Each one
is cheap, fast, and answers a specific question. The experiments are sequenced
so each one either confirms we're on the right track or tells us exactly what
to change.

---

## The Evidence That Demands Experiments

Four data points define everything we know about what works:

| Build | Agents | Builder Input | PA-05 Score | Key Trait |
|-------|--------|---------------|-------------|-----------|
| CD-006 | 1 Opus | ~50 lines (tokens + soul) | ~4/4 (39/40) | Crown jewel. Minimal input, maximum freedom. |
| Middle | 8 | ~100 lines (recipe) | 4/4 DESIGNED | Best pipeline result. Sequenced steps. |
| Remediation | 16+ | ~300 lines (targeted spec) | 2.5/4 | Improved from Flagship. Specific CSS values. |
| Flagship | 19 | ~530 lines (full recipe) | 1.5/4 | Failed. Zero perceptible borders, uniform type. |

The pattern is suggestive: quality degrades as input volume and agent count
increase. But suggestive is not proven. We have N=4 data points with multiple
variables changing between each. The experiments isolate those variables.

---

## The Decision Tree

All experiments use the same content (RESEARCH-SYNTHESIS.md), the same PA
protocol (Mode 4, 9 blind Opus auditors), and the same success criteria. This
makes scores directly comparable.

```
START
  |
  v
Experiment A: The $5 Test
(1 Opus agent + conventions brief, ~2 hours, ~$5-10)
  |
  |-- PA-05 >= 3.0/4 -----> Pipeline is UNNECESSARY.
  |                          Just ship conventions brief.
  |                          (Most radical outcome. Celebrate if true.)
  |
  |-- PA-05 2.0-2.9 ------> Good but not great. Proceed to Experiment B.
  |
  |-- PA-05 < 2.0 --------> Something wrong with conventions brief.
  |                          Investigate before proceeding.
  v
Experiment B: Fat Core Full Test
(Orchestrator + Core Agent + 9 PA auditors + Weaver, ~4 hours, ~$20-60)
  |
  |-- PA-05 >= 3.0/4 AND
  |   improvement >= 0.5     The verification shell adds value.
  |   over Exp A ----------> Fat Core is the architecture. BUILD IT.
  |
  |-- PA-05 improvement
  |   < 0.5 over Exp A ----> Shell is overhead. Simplify to
  |                          single agent + PA only.
  v
Experiment C: Recipe Comparison (OPTIONAL)
(Fat Core + 650-line recipe instead of conventions brief, ~6 hours, ~$40-80)
  |
  |-- Recipe PA-05 <         Recipe ceiling confirmed.
  |   Conventions PA-05 ---> Conventions brief is superior.
  |
  |-- Recipe PA-05 >=        Ceiling hypothesis rejected.
  |   Conventions PA-05 ---> Investigate what the recipe adds.
  |
  v
DONE: Architecture decision made with evidence.
```

---

## Experiment A: The $5 Test

### The Story

Imagine giving a talented architect a building site, a style guide, and saying:
"Build something beautiful. Here are the rules you can't break. Everything else
is your call." That's Experiment A.

CD-006 -- the crown jewel that scored 39/40 -- was built exactly this way. One
Opus agent, minimal constraints, maximum creative freedom. The question is: can
that pattern reproduce?

### What Happens

1. A single Opus agent receives:
   - The content to build (RESEARCH-SYNTHESIS.md, ~384 lines)
   - The conventions brief (~100 lines: perception thresholds, soul constraints,
     spatial rules, quality floor, creative authority)
   - tokens.css (~174 lines: colors, fonts, spacing)
   - A prohibitions summary (the 8 absolute rules)
2. The agent plans AND builds in a single pass. No handoffs. No orchestrator.
   No pipeline. Just one agent and one prompt.
3. The output HTML is evaluated by Mode 4 PA (9 blind Opus auditors + 1 weaver).

### What It Tests

**The most radical question: does any pipeline infrastructure help at all?**

If a single Opus agent with ~100 lines of guidance produces PA-05 >= 3.0/4,
then the entire Fat Core architecture -- orchestrators, gate runners, phase
locks, fix cycles -- is unnecessary overhead. The project's 660:1 meta-to-output
ratio would be revealed as self-inflicted complexity.

This is not a failure scenario. It is the best possible outcome. The simplest
architecture that meets quality targets is the correct architecture.

### Success Criteria

- **PA-05 >= 3.0/4** (COMPOSED or DESIGNED): Pipeline is unnecessary. Ship the
  conventions brief as the entire "pipeline."
- **PA-05 2.0-2.9**: Conventions brief gets most of the way there. The
  verification shell might close the gap. Proceed to Experiment B.
- **PA-05 < 2.0**: The conventions brief alone is insufficient. Either the brief
  is missing something critical, or the single-agent approach needs more
  structure than a brief can provide.

### Cost

- ~$5-10 in API calls
- ~30 minutes build + ~60 minutes PA evaluation
- Total wall clock: ~2 hours

### Why This Runs First

It is the cheapest and most informative experiment. Every other experiment
assumes infrastructure is necessary. This one tests that assumption directly.

---

## Experiment B: Fat Core Full Test

### The Story

Experiment A tested one agent with no safety net. Experiment B adds the safety
net: an orchestrator that prepares the content brief, the same Core agent that
plans and builds, three phase-locked gates that check work during the build
(not just after), and a Mode 4 PA with a fix cycle.

This is the full Fat Core architecture described in Sections 2 and 6. The
question is: does all that structure improve the output enough to justify its
cost?

### What Happens

1. **Orchestrator** reads the content and design system files, produces a
   content brief (~50-80 lines: content arc, zone plan, mechanism suggestions).
2. **Core Agent** (single Opus) receives the conventions brief + content brief +
   tokens + prohibitions. Plans the page, then builds it in one pass. Three
   gates fire during the build:
   - After HTML skeleton: structural completeness check
   - After CSS foundation: perception threshold check
   - After full build: programmatic gate runner (all 15 gates)
3. **Mode 4 PA**: 9 blind Opus auditors evaluate the output.
4. **Weaver** synthesizes PA reports into a verdict.
5. **Fix Cycle** (if needed): The SAME Core agent receives PA feedback and
   revises. This preserves compositional memory -- the agent that built it is
   the one that fixes it.

### What It Tests

**Does the verification shell and fix cycle add measurable value over a naked
single-agent build?**

The comparison is direct: same content, same conventions brief, same PA
evaluation. The only difference is the infrastructure around the Core agent.

### Success Criteria

- **PA-05 >= 3.0/4 AND improvement >= 0.5 over Experiment A**: The shell adds
  real value. Fat Core is validated as the architecture.
- **PA-05 improvement < 0.5 over Experiment A**: The shell is overhead. Simplify
  to single agent + PA (no orchestrator, no phase locks).
- **PA-05 < 2.5/4**: Something in the architecture is actively harmful. The
  orchestrator's content brief may be compressing intelligence, or the gates may
  be interrupting creative flow.

### Cost

- ~$20-60 in API calls (12 agents: 1 orchestrator + 1 core + 9 PA + 1 weaver)
- ~90 minutes build + ~90 minutes PA evaluation
- Total wall clock: ~4 hours

### When This Runs

Only if Experiment A scores below 3.0/4. If A passes, B is unnecessary -- the
simpler architecture wins.

---

## Experiment C: Recipe Comparison (Optional)

### The Story

Throughout this project, there has been a recurring question: should the builder
get a detailed recipe (sequenced steps with exact CSS values) or a conventions
brief (constraints with creative authority)?

The evidence leans toward conventions. The Middle experiment used a 100-line
recipe and scored 4/4. But the Flagship used a 530-line recipe and scored 1.5/4.
The remediation used 300 targeted lines and scored 2.5/4. Is the issue recipe
length, recipe format, or recipes themselves?

Experiment C settles this by running the same architecture with different
builder input.

### What Happens

1. Same Fat Core architecture as Experiment B.
2. The Core agent receives the full 650-line operational recipe (from File 42
   of the pipeline analysis corpus) INSTEAD of the 100-line conventions brief.
3. Same PA evaluation.

### What It Tests

**The recipe ceiling hypothesis.** Report 85 from the pipeline analysis predicts
that recipes cap quality at 3/4 for complex content because they prescribe
creative decisions that should emerge from the agent. If the recipe variant
scores lower than the conventions variant, the ceiling is real. If it scores
higher, the hypothesis is wrong and recipes are genuinely useful.

### Success Criteria

- **Recipe PA-05 < Conventions PA-05**: Recipe ceiling confirmed. Conventions
  brief is the correct format.
- **Recipe PA-05 >= Conventions PA-05**: Recipe ceiling hypothesis rejected.
  More investigation needed into what recipes provide that conventions don't.

### Cost

- ~$40-80 in API calls
- ~90 minutes build + ~90 minutes PA evaluation + comparison scoring
- Total wall clock: ~6 hours

### When This Runs

Only if Experiment A scores below 3.0/4 AND you want to validate the recipe
ceiling theory. This experiment is scientifically interesting but not
architecturally necessary. If A or B already meets the quality target, the
architecture decision is made regardless of recipe performance.

---

## The Q20 Pre-Test (From Pipeline Analysis)

### The Story

There is a cheaper test that could run before any of the above. The pipeline
analysis corpus identified a 3-variable confound: between the failed Flagship
(PA-05 1.5/4) and the successful Remediation (PA-05 2.5/4), THREE things
changed simultaneously:

| Variable | Flagship (FAILED) | Remediation (SUCCEEDED) |
|----------|-------------------|-------------------------|
| Format | Checklist (scattered rules) | Recipe (sequential phases) |
| Specificity | Abstract ("channel actively used") | Concrete ("font-size: 17px") |
| Perception | Zero thresholds | 8-property threshold table |

The Q20 experiment changes ONLY one variable -- perception thresholds -- while
keeping format and specificity identical to the Flagship. It adds a 25-line
threshold appendix to the exact same 71-line builder prompt that produced the
Flagship failure, then re-runs with the same team topology.

### What It Would Tell Us

- **If thresholds alone produce PA-05 >= 2.5/4**: Perception was the primary
  failure cause. Pipeline v2 just needs thresholds appended to existing prompts.
  Recipe format is optional.
- **If thresholds alone produce PA-05 < 2.0/4**: Thresholds are insufficient
  without recipe format. Pipeline v2 MUST change instruction format.
- **If the builder ignores the thresholds** (still produces 23%+ sub-perceptual
  CSS): Having the information is not enough. The FORMAT of delivery determines
  whether information gets acted on. This would be the strongest evidence for
  the recipe-format thesis.

### Cost and Status

- ~$40-80 (runs both conditions back-to-back for comparison)
- ~4-10 hours total
- **Status**: Designed but not yet run. The protocol is fully specified in
  `ephemeral/pipeline-analysis/_meta-cognitive/q20-experiment-protocol.md`
  (~400 lines, including confound controls, gate structure, and failure criteria).

### Relationship to Experiments A/B/C

Q20 is a diagnostic experiment -- it explains WHY the Flagship failed. Experiments
A/B/C are architectural experiments -- they test what Pipeline v2 should BE.
Q20 could run independently if we want to resolve the 3-variable confound before
committing to an architecture. But if Experiment A scores >= 3.0/4, Q20 becomes
academic -- the answer is "just use conventions + Opus."

---

## Shared Protocol: How Every Experiment Gets Scored

Consistency across experiments is what makes the scores comparable. Every
experiment follows this exact protocol:

### Content
- RESEARCH-SYNTHESIS.md (~384 lines) -- the same content used in the Flagship,
  so PA-05 scores are directly comparable to the 1.5/4 baseline.

### Builder Model
- claude-opus-4-6 for all builder agents. This is non-negotiable. The Flagship
  used Sonnet for some passes and Opus for others -- a known confound. All
  experiments standardize on Opus.

### PA Evaluation (Mode 4)
- Team lead pre-captures all screenshots at 1440px and 768px (cold look +
  scroll-through at each viewport).
- 9 independent Opus auditors receive screenshots only. No context about which
  experiment produced the artifact. This is a BLIND evaluation.
- Each auditor is assigned specific PA questions (PA-01 through PA-48).
- 1 Opus weaver synthesizes all 9 reports into a verdict with PA-05 score.

### Success Metrics
- **PA-05**: >= 3.0/4 (COMPOSED or DESIGNED) is the target
- **Soul**: 0 violations (absolute requirement)
- **Container**: 940-960px (absolute requirement)
- **Mechanisms**: >= 8 distinct, across >= 4 categories
- **Multi-coherence**: >= 3 transitions with >= 3 channels shifting
- **Accessibility**: WCAG 2.1 AA basic compliance
- **Perception thresholds**: All CSS deltas above minimums

---

## The 2D Model: Why We Test These Specific Approaches

The pipeline analysis produced a crucial insight: instruction style is not a
1D spectrum (checklist to recipe to convention). It maps to TWO dimensions:

```
                    HIGH SPECIFICITY
                    (exact values, thresholds, constraints)
                         |
         Flagship        |        Fat Core (D)
         (1.5/4)         |        (UNTESTED -- predicted 3.0-3.5/4)
         HIGH spec       |        HIGH spec
         LOW freedom     |        MAX freedom
                         |
  LOW FREEDOM -----------+----------- HIGH FREEDOM
                         |
         Floor           |        CD-006 / Middle
         (baseline)      |        (4/4 / 4/4)
         LOW spec        |        LOW spec
         LOW freedom     |        HIGH freedom
                         |
                    LOW SPECIFICITY
```

Every successful build (CD-006, Middle) sits in the HIGH FREEDOM quadrant. The
Flagship sits in the HIGH SPECIFICITY + LOW FREEDOM quadrant -- maximum
constraints, minimum creative authority. The conventions brief is designed
to occupy the upper-right: HIGH SPECIFICITY (perception thresholds, soul
constraints) combined with HIGH FREEDOM (explicit creative authority).

The experiments test whether this upper-right quadrant delivers on its promise.

---

## What Happens After the Experiments

The experiment results determine what gets codified into permanent files:

| Outcome | What We Codify |
|---------|----------------|
| Exp A >= 3.0/4 | conventions-brief.md only. No orchestrator, no gate runner updates, no TC narrowing. Simplest possible pipeline. |
| Exp A < 3.0, Exp B >= 3.0 | Full Fat Core: orchestrator, conventions brief, 3 phase-locked gates, fix cycle protocol. |
| Exp A < 3.0, Exp B < 3.0, Exp C recipe wins | Operational recipe replaces conventions brief. Recipe format is necessary. |
| All experiments < 3.0 | Return to analysis. Something fundamental is wrong with the approach. |

**The commitment**: we codify ONLY what experiments validate. No more 660:1
meta-to-output ratios. No more speculative infrastructure. Architecture follows
evidence.

---

## Timeline

```
Day 1 (~4 hours):
  Write conventions-brief.md ............. 1 hour
  Run Experiment A ....................... 30 min build + 1 hour PA
  Score and document results ............. 1 hour

Day 2 (~4-6 hours, IF Experiment A < 3.0):
  Build Fat Core orchestrator ............ 2 hours
  Run Experiment B ....................... 1.5 hour build + 1.5 hour PA
  Score and document results ............. 1 hour

Day 3 (~4-6 hours, IF recipe comparison desired):
  Run Experiment C ....................... 1.5 hour build + 1.5 hour PA
  Compare all results .................... 1-2 hours
  Write final architecture decision ...... 1 hour
```

Best case: Experiment A passes on Day 1 and we're done in 4 hours with a
validated architecture. Worst case: all three experiments run across 3 days
(~14-16 hours) and we have comprehensive evidence for the final decision.

Either way, the answer is in the artifact, not in more reports.
