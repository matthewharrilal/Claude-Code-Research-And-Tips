# 32 — MASTER SYNTHESIS: Pipeline v2 Architectural Recommendation

**Status:** DEFINITIVE — This file resolves 6 open decisions based on 50+ investigation reports.
**Date:** 2026-02-19
**Input:** Reports 31, 67, 72, 84, 85, 94, 95, 102, 103, 104, 105, PV2-PIPELINE-DIAGRAM.md
**Authority:** Synthesis of ALL compositional intelligence investigation findings.

---

## THE VERDICT

**Pipeline v2 should be a FAT CORE architecture: one Opus agent that plans AND builds, surrounded by a thin verification shell.**

The investigation converged on a single insight from multiple angles: the pipeline's
primary failure mode is not insufficient intelligence — it is intelligence destruction
at handoff boundaries. The most effective architecture eliminates the most destructive
boundary (TC planner to builder) rather than trying to compress intelligence across it.

Evidence trail:
- CD-006 (1 Opus agent, minimal pipeline) scored 39/40
- Middle experiment (8 agents, 100-line builder input) scored PA-05 4/4
- Flagship (19 agents, 530-line builder input) scored PA-05 1.5/4
- Remediation (Opus builder, ~300-line input) scored PA-05 2.5/4

Quality inversely correlates with agent count AND builder input volume.
The highest-scoring artifacts were built by single agents with high autonomy.

---

## THE ARCHITECTURE

### Fat Core + Thin Shell (12 agents)

```
Wave 0: ORCHESTRATOR (Sonnet)
  - Selects content, invokes TC skill, sets tier
  - Produces: content brief (~30 lines)
  - Reads: content source + tier parameters

Wave 1: CORE AGENT (Opus) ← THE CRITICAL NODE
  - Plans AND builds in one continuous session
  - Reads: content brief + conventions brief (~100 lines) + tokens.css + prohibitions.md
  - Does NOT receive: 650-line recipe, mechanism catalog, research digest
  - Instead receives: ~100-line conventions brief (perception thresholds + soul + spatial rules)
  - Produces: complete HTML artifact + restraint log + transition inventory

Wave 2: VERIFICATION SHELL
  - 9 PA auditors (Sonnet) — Mode 4 perceptual audit, pre-captured screenshots
  - 1 Weaver (Opus) — synthesizes 9 reports into verdict + fix list

Wave 3: FIX CYCLE (if needed)
  - Core agent receives fix list (~30 lines)
  - Applies fixes in same session (continuation, not re-derivation)
```

### Boundary Count: 7 (0 destructive)

| Boundary | From → To | Intelligence Loss | Classification |
|----------|-----------|-------------------|----------------|
| B0 | User → Orchestrator | ~0% (passthrough) | Transparent |
| B1 | Orchestrator → Core | ~5% (content brief) | Minimal |
| B2 | Core internal: plan → build | 0% (same agent) | ELIMINATED |
| B3 | Core → PA screenshots | ~10% (visual only) | Acceptable |
| B4 | PA auditors → Weaver | ~15% (9→1 synthesis) | Acceptable |
| B5 | Weaver → Core (fixes) | ~10% (targeted list) | Acceptable |
| B6 | Core → Final artifact | 0% (direct output) | Transparent |

Compare to current PV2: 11 boundaries, 4 destructive (35-65% loss each).

### Why This Works

The Fat Core eliminates Boundary 3 — the TC-to-builder handoff that the intelligence
flow audit (Report 103) identified as the site of 65% intelligence loss. Instead of
compressing 5 layers of compositional intelligence into a recipe/brief that a separate
builder must re-derive, the same agent that DISCOVERS the compositional logic IMPLEMENTS
it. Zero re-derivation. Zero compression at the critical creative junction.

### What the Core Agent Receives (~230 lines total)

1. **Content brief** (~30 lines) — what to build, for whom, key tensions
2. **Conventions brief** (~100 lines) — perception thresholds, soul constraints, spatial rules
3. **tokens.css** (~65 lines) — exact CSS values
4. **prohibitions.md reference** (~35 lines summary) — the 8 absolute prohibitions

This is LESS than Middle's 100 lines but MORE structured. The core agent brings its
own compositional intelligence — we provide CONSTRAINTS, not INSTRUCTIONS.

### What the Core Agent Does NOT Receive

- 650-line operational recipe (compression artifact)
- Mechanism catalog (the agent discovers mechanisms from content)
- Research digest (pre-digested intelligence degrades to checklist)
- Transition table (the agent creates its own transitions)
- Fractal echo table (the agent discovers fractal patterns organically)

---

## THE 5 DECISIONS

### Decision 1: Fat Core vs Linear Pipeline

**VERDICT: FAT CORE.**

The linear pipeline (orchestrator → planner → builder → verifier) was designed to
prevent a single point of failure. Instead, it created 4 points of intelligence
destruction. Every boundary between creative agents loses 35-65% of compositional
intelligence (Report 103, cell-by-cell audit).

The Fat Core merges the two most tightly coupled roles — the agent that DISCOVERS
what the page should be and the agent that BUILDS what the page should be. These are
not separable functions. Separating them forces compression of the most nuanced,
context-dependent knowledge (metaphor logic, tension resolution, proportional
decisions) into a format that cannot carry it.

**Dissenting evidence:** Report 31 asks an even more radical question — why not a
SINGLE Opus agent with NO pipeline at all? This is the $5 experiment (see Decision 4).
If it succeeds, the Fat Core is already over-engineered. If it fails, the Fat Core is
the right level of structure.

**Risk mitigation:** The verification shell (9 PA auditors) provides the same breadth
of perspective that caught the whitespace void in Mode 4. The Fat Core does not
eliminate verification — it eliminates unnecessary creative handoffs.

---

### Decision 2: Builder Input Volume

**VERDICT: ~230 LINES MAXIMUM. Conventions brief, not recipe.**

The evidence is unambiguous:

| Experiment | Builder Input | PA-05 Score | Quality |
|------------|---------------|-------------|---------|
| CD-006 | ~50 lines (tokens + soul) | ~3/4 COMPOSED (39/40 soul, CEILING tier) | Best empirical reference |
| Middle | ~100 lines (recipe) | 4/4 DESIGNED | Best pipeline result |
| Remediation | ~300 lines (targeted spec) | 2.5/4 COMPOSED | Improved but capped |
| Flagship | ~530 lines (full recipe) | 1.5/4 FLAT | Failure |

Quality degrades monotonically with input volume. Report 31 correctly identifies this
as the primary variable, not handoff compression per se. More input = more constraints
competing for attention = less compositional freedom = flatter output.

The ~230-line cap includes everything the Core agent reads (content brief + conventions
brief + tokens + prohibitions summary). This is in the sweet spot between Middle (100)
and Remediation (300).

**The conventions brief replaces the recipe.** A recipe tells agents WHAT TO DO step
by step (prescriptive). A conventions brief tells agents WHAT NOT TO VIOLATE (proscriptive).
The critical difference: recipes cap quality at their own specificity level (Report 85
ceiling analysis); conventions briefs allow quality to reach the agent's native capability.

**Report 85's recipe ceiling:** Recipes achieve 3/4 on complex content, 4/4 on simple.
Conventions briefs achieve whatever the agent is capable of — 3.5-4.0/4 for Opus on
complex content. The ceiling is the agent, not the document.

---

### Decision 3: Recipe vs Convention vs Hybrid

**VERDICT: CONVENTIONS BRIEF (~100 lines) for the Core agent. NO recipe. NO hybrid.**

The three approaches (Report 72):

| Property | Recipe | Conventions Brief | Hybrid |
|----------|--------|-------------------|--------|
| Builder freedom | ~15% | ~80% | ~50% |
| Content agnosticism | 3/5 | 5/5 | 4/5 |
| Ceiling (complex) | 3/4 | Agent-native | 3.5/4 |
| Risk of flat output | LOW | MEDIUM | LOW |
| Risk of soul violation | LOW | MEDIUM | LOW |

The conventions brief wins because the Fat Core architecture changes the risk profile.
When the builder IS the planner, the risk of "misunderstanding intent" drops to zero —
there is no intent to misunderstand. The conventions brief provides guardrails without
prescribing creative decisions.

**What goes in the conventions brief (~100 lines):**

```
SECTION 1: PERCEPTION THRESHOLDS (20 lines)
- Background deltas: >=15 RGB points between adjacent sections
- Typography shifts: >=2px font-size, >=0.5px letter-spacing between zones
- Spacing: >=24px padding difference between hierarchy levels
- Maximum gap: <=108px (S-09 stacking rule: total, not per-property)
- Border presence: >=1 structural border per 400px scroll

SECTION 2: SOUL CONSTRAINTS (20 lines)
- 8 absolute prohibitions (border-radius: 0, box-shadow: none, etc.)
- Palette lock (8 values)
- Typography trinity (3 fonts)
- Container: 940-960px

SECTION 3: SPATIAL RULES (20 lines)
- F-pattern or Z-pattern attention topology
- Progressive disclosure (3+ depth levels)
- Compression ratio <=40% (content:chrome)
- Responsive: 1440px + 768px required

SECTION 4: QUALITY FLOOR (20 lines)
- >=8 distinct mechanisms (per-category minimum: Spatial 1+, Temporal 1+,
  Material 1+, Behavioral 1+, Relational 1+)
- >=3 multi-coherence transitions (3+ channels shift at boundary)
- >=5 distinct component types
- Zero whitespace voids >108px

SECTION 5: CREATIVE AUTHORITY (20 lines)
- You may override any non-soul value if you log the override and reason
- You may introduce mechanisms not in the catalog
- You may deviate from any suggested pattern if content demands it
- Your compositional judgment supersedes this document on all non-soul matters
- After building: stop, scroll full page, write 3 observations, adjust (Phase 6.5)
```

**The Creative Authority section is non-negotiable.** Report 85 identifies 4 capabilities
that exist beyond any recipe: content-form resonance, proportional intelligence, creative
surprise, and emergent coherence. These can only emerge from an agent with explicit
permission to exercise judgment. The conventions brief grants that permission while
constraining the soul.

---

### Decision 4: Experiment Priority

**VERDICT: Three experiments in strict sequence. Run Experiment A first.**

#### Experiment A: The $5 Experiment (FIRST)
**Input:** Same content as Flagship (RESEARCH-SYNTHESIS). Single Opus agent.
Receives ONLY: content + conventions brief (~100 lines) + tokens.css + prohibitions.
No pipeline. No orchestrator. No verification shell. Just one agent and one prompt.

**Purpose:** Establishes the BASELINE. If a single Opus agent with minimal input
produces PA-05 >= 3.0/4, the entire pipeline infrastructure is unnecessary overhead.
If it produces < 2.5/4, the verification shell adds value.

**Cost:** ~$5-10 in API. ~30 minutes wall clock.
**Decision gate:** PA-05 >= 3.0 → Pipeline v2 is JUST the conventions brief.
PA-05 2.0-2.9 → Proceed to Experiment B (Fat Core).
PA-05 < 2.0 → Investigate; something is wrong with conventions brief.

#### Experiment B: Fat Core (SECOND, if needed)
**Input:** Same content. Full Fat Core architecture (12 agents). Orchestrator
produces content brief. Core agent plans + builds. 9 PA auditors verify. Weaver
synthesizes. Fix cycle if needed.

**Purpose:** Tests whether the verification shell and fix cycle add value beyond
the single-agent baseline.

**Cost:** ~$30-50 in API. ~90 minutes wall clock.
**Decision gate:** PA-05 improvement >= 0.5 over Experiment A → Shell adds value.
PA-05 improvement < 0.5 → Shell is overhead; simplify to single agent + PA.

#### Experiment C: Recipe Comparison (THIRD, only if needed)
**Input:** Same content. Fat Core architecture but Core agent receives full
650-line recipe instead of 100-line conventions brief.

**Purpose:** Directly tests the recipe ceiling hypothesis. If the recipe produces
LOWER scores than the conventions brief, the ceiling is confirmed.

**Cost:** ~$30-50. ~90 minutes.
**Decision gate:** Recipe PA-05 < Conventions PA-05 → Recipe ceiling confirmed.
Recipe PA-05 >= Conventions PA-05 → Ceiling hypothesis rejected; investigate.

**Why this order:** Experiment A is cheapest and most informative. It answers the
most radical question first: does any pipeline help at all? If yes, Experiment B
tests the Fat Core specifically. Experiment C is only needed if we want to validate
the recipe ceiling theory — it is scientifically interesting but not architecturally
necessary.

---

### Decision 5: What to Codify Now

**VERDICT: Codify ONLY the conventions brief and the experiment protocol. Defer everything else.**

Reports 31, 94, 102, and 105 all converge on the same warning: the project has spent
660:1 meta-to-output ratio on infrastructure that has never been validated by experiment.
Codifying more architecture before running experiments reproduces the exact failure
pattern that created the Flagship disaster.

**Codify NOW (before Experiment A):**

1. **`conventions-brief.md`** (~100 lines) — the 5-section document described in Decision 3.
   This is the ONLY new file that goes into the permanent design system.

2. **`experiment-protocol.md`** (~80 lines) — the 3 experiments described in Decision 4,
   with exact inputs, success criteria, and decision gates.

**Codify AFTER experiments (based on results):**

3. Pipeline v2 orchestrator (if Experiment B proves the shell adds value)
4. Gate runner updates (SC-13 through SC-15)
5. TC skill scope narrowing (~660 lines from 1,878)
6. Operational recipe (if experiments show recipes outperform conventions)

**Codify NEVER:**

7. Transition table (let the Core agent create its own)
8. Fractal echo table (let the Core agent discover patterns)
9. 650-line recipe (the recipe ceiling makes this counterproductive)
10. Per-agent memory files (Fat Core eliminates the need)

---

### Decision 6: The Recipe Ceiling

**VERDICT: The ceiling is REAL but VARIABLE. Conventions brief + Opus + creative authority is the ceiling-breaker.**

Report 85 establishes the two-dimensional model:

```
                    HIGH SPECIFICITY
                         |
         Flagship        |        Architecture D
         (1.5/4)         |        (UNTESTED)
                         |
  LOW FREEDOM -----------+----------- HIGH FREEDOM
                         |
         Floor           |        CD-006 / Middle
         (baseline)      |        (4/4)
                         |
                    LOW SPECIFICITY
```

All successful experiments (CD-006, Middle) are in the HIGH FREEDOM quadrant.
The Flagship is in the HIGH SPECIFICITY + LOW FREEDOM quadrant — maximum constraints,
minimum creative authority. Architecture D (HIGH SPECIFICITY + HIGH FREEDOM) is untested.

The conventions brief occupies Architecture D: it provides specific perception
thresholds (high specificity) while granting explicit creative authority (high freedom).
This is the quadrant Report 85 predicts will achieve 3.0-3.5/4 on first build and
3.5-4.0/4 with a fix cycle.

**Four irreducible capabilities beyond any recipe:**
1. Content-form resonance — the page FEELS like its content (HIGH difficulty to encode)
2. Proportional intelligence — spatial distribution matches semantic weight (MEDIUM)
3. Creative surprise — unexpected-yet-correct compositional choices (HIGH)
4. Emergent coherence — the whole exceeds the sum of parts (MEDIUM-HIGH)

These capabilities exist in the AGENT, not in any document. The conventions brief does
not try to encode them. It provides the space for them to emerge by constraining only
what would break the soul.

---

## THE EXPERIMENT PLAN

### Timeline

```
Day 1 (4 hours):
  - Write conventions-brief.md (1 hour)
  - Write experiment-protocol.md (30 min)
  - Run Experiment A: single Opus + conventions brief (30 min build + 1 hour PA)
  - Score and document results (1 hour)

Day 2 (4-6 hours, IF Experiment A < 3.0):
  - Build Fat Core orchestrator (~2 hours)
  - Run Experiment B: full Fat Core (1.5 hours build + 1.5 hours PA)
  - Score and document results (1 hour)

Day 3 (4-6 hours, IF recipe ceiling validation desired):
  - Run Experiment C: Fat Core + recipe (1.5 hours build + 1.5 hours PA)
  - Score and compare all three (1-2 hours)
  - Write final architecture decision document
```

### Success Criteria (All Experiments)

- **Content:** RESEARCH-SYNTHESIS (same as Flagship, for direct comparison)
- **PA-05 target:** >= 3.0/4 (COMPOSED or DESIGNED)
- **Soul:** 0 violations (absolute requirement)
- **Container:** 940-960px (absolute requirement)
- **Mechanisms:** >= 8 distinct, across >= 4 categories
- **Multi-coherence:** >= 3 transitions with >= 3 channels shifting
- **Accessibility:** WCAG 2.1 AA basic compliance
- **Perception thresholds:** All deltas above minimums

### Measurement

Each experiment gets identical Mode 4 PA:
- Screenshot pre-capture at 1440px + 768px (team lead)
- 9 independent Opus auditors (no context about which experiment)
- 1 Opus weaver synthesizing all 9 reports
- Blind scoring: auditors do NOT know which experiment produced the artifact

---

## WHAT TO CODIFY IMMEDIATELY

**Two files. ~180 lines total. Write them before Experiment A.**

### File 1: `conventions-brief.md` (~100 lines)
Location: `design-system/compositional-core/guidelines/conventions-brief.md`

Contains the 5 sections described in Decision 3: Perception Thresholds, Soul
Constraints, Spatial Rules, Quality Floor, Creative Authority. This is the ONLY
document the Core agent reads beyond content and tokens.

### File 2: `experiment-protocol.md` (~80 lines)
Location: `ephemeral/compositional-intelligence/experiment-protocol.md`

Contains Experiments A/B/C with exact inputs, procedures, success criteria, and
decision gates. Ephemeral because the protocol itself may be revised based on results.

---

## WHAT TO DEFER

1. **Pipeline v2 orchestrator code** — Until Experiment B proves the shell adds value
2. **TC skill narrowing** — Until experiments clarify what the Core agent actually needs
3. **Gate runner updates (SC-13 to SC-15)** — Until experiments reveal which gates catch real defects
4. **Transition table format** — Until we see what the Core agent produces organically
5. **Operational recipe** — INDEFINITELY, unless experiments prove conventions brief insufficient
6. **Per-agent memory architecture** — Fat Core eliminates the need for most of this
7. **PV2-PIPELINE-DIAGRAM.md revision** — The diagram is a planning artifact; the experiment results supersede it

---

## DISSENTING EVIDENCE

### Against Fat Core: The Accountability Gap
Report 94 acknowledges that a single agent doing everything has no external check on
its creative logic until Wave 2. If the metaphor is wrong or the content interpretation
is off, 9 PA auditors will find visual defects but may not catch conceptual misalignment.

**Mitigation:** The orchestrator's content brief (~30 lines) sets the content frame.
The Core agent must produce a restraint log documenting key decisions. The PA weaver
checks conceptual alignment as part of synthesis.

**Assessment:** This is a real risk but a SMALLER risk than the proven 65% intelligence
loss at Boundary 3. Trading a theoretical accountability gap for a measured compression
catastrophe is the correct trade.

### Against Conventions Brief: The Soul Violation Risk
Without a recipe dictating exact steps, the Core agent might produce soul violations
(wrong fonts, wrong colors, border-radius > 0). Middle experiment had 66.5% token
compliance despite a recipe — conventions brief might be worse.

**Mitigation:** Soul constraints are in Section 2 of the conventions brief AND in
prohibitions.md (always-loaded). The gate runner catches soul violations programmatically.
Token compliance is a verification problem, not a recipe problem.

**Assessment:** Soul violations are DETECTABLE and FIXABLE. Recipe-induced flatness is
neither detectable by programmatic gates nor fixable without rebuilding. Optimize for
the harder-to-fix failure mode.

### Against Single Agent: The Verification Value
Report 31's $5 experiment might show that a single agent produces 3.0/4 without any
pipeline. This would make the Fat Core unnecessary. But it would also mean the project's
entire infrastructure investment (50+ agents, 200+ reports, 1.7MB of analysis) was
solving a problem that didn't exist.

**Assessment:** This is EXACTLY why Experiment A runs first. If a single agent
achieves 3.0+, we should celebrate, not rationalize. The simplest architecture that
meets quality targets is the correct architecture.

### Against This Synthesis: The N=1 Problem
All conclusions are based on 4 experiments (CD-006, Middle, Flagship, Remediation).
This is not a statistically significant sample. Any single experiment could be an
outlier driven by content difficulty, model temperature, or random variation.

**Assessment:** Acknowledged. The experiment plan is designed to increase N. Each
experiment adds a data point with controlled variables (same content, same model,
different architecture). After 3 more experiments, N=7 — still small but directional.

---

## THE COMPRESSION WARNING

This synthesis compresses 50+ reports (~1.7MB, ~40,000 lines) into 400 lines.
That is a 100:1 compression ratio. By the project's own findings, compression
ratios above 5:1 trigger deletion of nuance.

What this synthesis CANNOT carry:

1. The 55-cell intelligence flow matrix (Report 103) — read it for boundary-by-boundary detail
2. The 28 anti-degradation patterns (Report 95) — read it for implementation specifics
3. The 2D recipe ceiling model's edge cases (Report 85) — read it for the full theory
4. The adversarial diagram review's 8 missing findings (Report 102) — read it for honest gaps
5. Report 84's 5 integration mechanisms — the telescope+microscope model has value
   beyond what the Fat Core captures

**If you disagree with any verdict above, read the source reports before arguing.**
The verdicts are defensible but not unchallengeable. The source material is richer
than any synthesis can be.

---

## CLOSING

The investigation asked: how should Pipeline v2 carry compositional intelligence
from research to rendered page?

The answer, after 50+ reports: **it shouldn't try.**

Intelligence cannot be compressed into documents and survive handoff between agents.
The Flagship proved this catastrophically. Instead, put the intelligence WHERE IT
WILL BE USED — inside one capable agent with minimal constraints and maximum creative
authority. Verify the output, not the process. Trust the agent, constrain the soul.

The next step is not more analysis. It is Experiment A: one Opus agent, one conventions
brief, one page. $5. 30 minutes. The answer is in the artifact, not in more reports.

---

*This synthesis was produced by reading reports 31, 67, 72, 84, 85, 94, 95, 102, 103,
104, 105, and PV2-PIPELINE-DIAGRAM.md. All verdicts are the author's interpretation
of converging evidence across these sources. Where reports disagree, the disagreement
is noted in DISSENTING EVIDENCE.*
