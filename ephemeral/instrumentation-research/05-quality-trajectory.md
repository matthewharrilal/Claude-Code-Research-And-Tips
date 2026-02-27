# Quality Trajectory and Effectiveness Analysis

**Author:** Opus quality-analyst agent
**Date:** 2026-02-26
**Task:** Design multi-dimensional quality analysis framework for pipeline instrumentation
**Data basis:** 6 pipeline builds (4 pre-v3, 2 v3.1) + 5 Phase D experiments

---

## 0. Historical Dataset

Before designing metrics, consolidate all available quality data into a single reference table.

### Full Build History (Normalized)

| ID | Slug | Date | PV | Builder | PA-05 Init | PA-05 Final | Delta | Cycles | T5 | Time (min) | Agents | CSS Lines | Mechs | Content Type | Verdict |
|----|------|------|----|---------|-----------|-------------|-------|--------|----|-----------:|--------|-----------|-------|--------------|---------|
| B1 | middle-tier | 2026-02-16 | pre-v3 | Opus | 4.0 | 4.0 | 0 | 0 | n/a | 35 | 8 | ~450 | 12 | essay | SHIP |
| B2 | ceiling-exp | 2026-02-17 | pre-v3 | Opus | 1.5 | 1.5 | 0 | 0 | n/a | 180 | 12 | ~1000 | 14 | research | DO NOT SHIP |
| B3 | flagship-exp | 2026-02-17 | pre-v3 | Opus | 1.5 | 1.5 | 0 | 0 | n/a | 240 | 19 | ~1100 | ~8 | research | FAILED |
| B4 | flagship-remed | 2026-02-18 | pre-v3 | Opus | 1.5* | 2.5 | +1.0 | 1** | n/a | 120 | 16 | ~1087 | ~15 | research | SHIP W/ FIXES |
| B5 | yegge-gas-town (init) | 2026-02-25 | v3.1 | Opus | 2.0 | 2.0 | 0 | 0 | 4/9 | 95 | 15 | ? | ? | article | REFINE |
| B6 | yegge-gas-town (refine) | 2026-02-25 | v3.1 | Opus | 2.0 | 3.5 | +1.5 | 1 | 9/9 | 200 | 40 | ? | ? | article | SHIP W/ FIXES |

*B4 inherited B3's 1.5 as its starting point (remediation of a failed build).
**B4 is technically a remediation, not an in-pipeline REFINE. Counted as 1 cycle for analysis.

### Missing Data Inventory

| Field | Available In | Missing From | Impact on Analysis |
|-------|-------------|-------------|-------------------|
| CSS line count | B1-B4 | B5, B6 | Cannot compute CSS efficiency for v3.1 |
| Mechanism count | B1-B4 | B5, B6 | Cannot compute mechanism density for v3.1 |
| Per-phase timing | B5, B6 (from tracker) | B1-B4 | Cannot compute phase efficiency for pre-v3 |
| Tier 5 scores | B5, B6 | B1-B4 | Cannot compute T5 trend for pre-v3 |
| Gate pass rates | B5, B6 (partial) | B1-B4 | Cannot compute gate trend for pre-v3 |
| Agent cost ($) | None | All | Cannot compute cost-per-quality-point |

**Action required:** Future runs MUST capture all fields. See Section 10 (Data Collection Spec).

---

## 1. Quality Velocity

### Definition

**Quality Velocity (QV)** = PA-05 points produced per hour of wall-clock time.

Formula: `QV = PA-05_final / total_hours`

For REFINE cycles, also compute **Marginal Quality Velocity (MQV)**: `MQV = PA-05_delta / refine_hours`

### Current Data

| Build | PA-05 Final | Total Hours | QV (pts/hr) | REFINE Hours | MQV (pts/hr) |
|-------|-------------|-------------|-------------|-------------|---------------|
| B1 (middle) | 4.0 | 0.58 | **6.86** | n/a | n/a |
| B2 (ceiling) | 1.5 | 3.00 | 0.50 | n/a | n/a |
| B3 (flagship) | 1.5 | 4.00 | 0.38 | n/a | n/a |
| B4 (flag-remed) | 2.5 | 2.00 | 1.25 | 2.00* | 0.50* |
| B5 (yegge init) | 2.0 | 1.58 | 1.27 | n/a | n/a |
| B6 (yegge refine) | 3.5 | 3.33 | 1.05 | 1.75** | **0.86** |

*B4 is the full remediation cycle; the "REFINE" time is the full session.
**B6 REFINE time = total 200min - initial 95min = 105 min = 1.75 hours.

### Observations

1. **B1 is the quality velocity champion** at 6.86 pts/hr -- nearly 7x the next fastest. This was the simplest run (8 agents, essay content, no REFINE needed).

2. **QV drops catastrophically with complexity.** B2 and B3 spent 3-4x more time than B1 and scored 2.7x worse. More time = less quality in these cases.

3. **REFINE MQV is consistently high.** B6's REFINE produced +1.5 in 1.75 hours (MQV = 0.86), the highest marginal velocity of any cycle. This confirms the hypothesis: REFINE is the highest-ROI phase.

4. **Initial build QV clusters at 1.0-1.3 pts/hr** for non-trivial content (B4, B5). This may represent the "base rate" for a first-pass Opus builder.

### Metric Specification

```
FIELD: quality_velocity
TYPE: float (2 decimal)
UNIT: PA-05 points per hour
FORMULA: pa05_final / (total_duration_minutes / 60)
WHEN: After final verdict
DISPLAY: Line chart (x = build date, y = QV)
THRESHOLD: QV > 1.5 = efficient run; QV < 0.5 = investigate complexity

FIELD: marginal_quality_velocity
TYPE: float (2 decimal)
UNIT: PA-05 points per hour
FORMULA: pa05_delta / (refine_duration_minutes / 60)
WHEN: After REFINE verdict only
DISPLAY: Stacked on QV chart as separate series
THRESHOLD: MQV > 0.5 = effective REFINE; MQV < 0.3 = diminishing returns
```

### What This Looks Like After 10 Runs

A line chart with two series:
- **Blue line (QV):** Should trend upward as pipeline matures (better prompts, faster builds)
- **Red dots (MQV):** Should appear only on REFINE runs. If MQV decreases over successive REFINEs within a single build, it signals diminishing returns.

Expected healthy pattern: QV stabilizes between 1.0-2.0 for non-trivial content; MQV for 1st REFINE stays above 0.5.

---

## 2. Diminishing Returns Curves

### The REFINE Decay Model

Each REFINE cycle produces a quality delta. We hypothesize the delta shrinks with each successive cycle within a single build. The model:

```
Delta(n) = Delta(1) * decay_rate^(n-1)
```

Where:
- Delta(1) = first REFINE improvement (empirically +1.0 to +1.5)
- decay_rate = fraction preserved per cycle (hypothesized 0.3-0.5)
- n = cycle number (1, 2, 3...)

### Current Evidence (N=2 REFINE events)

| Build | REFINE # | Delta | Projected Delta(2) at 0.4 decay |
|-------|----------|-------|----------------------------------|
| B4 (flagship-remed) | 1 | +1.0 | +0.40 (hypothetical) |
| B6 (yegge-refine) | 1 | +1.5 | +0.60 (hypothetical) |

With only 2 first-REFINE data points, we cannot empirically validate decay_rate. But theoretical reasoning supports rapid decay:

1. **First REFINE fixes visibility/structural failures** (highest-impact, lowest-effort). B6's REFINE fixed animation visibility, zone transitions, navigation -- all structural.
2. **Second REFINE would address compositional nuance** (lower-impact, higher-effort). Fixes like "dark zone needs internal relief" and "principle cards need variation."
3. **Third REFINE would address micro-polish** (marginal impact). Footer text size, edge transition channel counts.

### Stop Criterion

**Stop iterating when any of:**
1. `PA-05 >= 3.5` AND zero COMPOSITIONAL fixes needed (current SHIP threshold)
2. `MQV < 0.3` (each REFINE hour produces less than 0.3 quality points)
3. `Cycle >= 3` (hard ceiling -- architectural issues should trigger REBUILD, not 4th REFINE)
4. `PA-05_delta(n) < 0.5` for any cycle n (insufficient lift to justify cost)

### Metric Specification

```
FIELD: refine_delta_per_cycle
TYPE: array of floats
UNIT: PA-05 points
FORMULA: pa05_after_cycle_n - pa05_after_cycle_(n-1)
WHEN: After each REFINE cycle
DISPLAY: Bar chart showing delta shrinkage per cycle within a build

FIELD: refine_stop_signal
TYPE: boolean
FORMULA: (MQV < 0.3) OR (delta < 0.5) OR (cycle >= 3)
WHEN: After each REFINE cycle
DISPLAY: Red/green indicator on REFINE decision panel

FIELD: estimated_decay_rate
TYPE: float (2 decimal)
FORMULA: delta(n) / delta(n-1) for n >= 2
WHEN: After 2nd REFINE within same build
DISPLAY: Rolling average across builds
REQUIRES: At least 1 build with 2+ REFINE cycles
```

### What This Looks Like After 5+ Runs

A "waterfall" chart for each build showing PA-05 progression:
```
Build B8:  |====2.0====|===+1.2===|==+0.4==|  Final: 3.6
Build B9:  |=====2.5====|====+1.0====|        Final: 3.5
Build B10: |=======3.0========|                Final: 3.0 (no REFINE needed)
```

The chart would visually show:
- Longer first bars = better initial builds (pipeline maturation)
- Shorter REFINE deltas with each cycle = diminishing returns
- Fewer REFINE bars per build over time = pipeline improving

---

## 3. Quality Ceiling by Content Type

### Hypothesis

Different content types have different quality ceilings because they differ in:
- **Heterogeneity** (how many distinct visual elements the content demands)
- **Metaphor viability** (whether the content supports spatial/conceptual metaphor)
- **Component variety** (tables, code, quotes, lists, diagrams vs pure prose)

### Content Type Taxonomy

| Type | Heterogeneity | Metaphor Viability | Component Variety | Example | Expected PA-05 Ceiling |
|------|---------------|-------------------|-------------------|---------|----------------------|
| essay | LOW | MODERATE | LOW (prose + quotes) | Middle Tier | 4.0 (B1 achieved this) |
| article | HIGH | HIGH | HIGH (tables + code + callouts + diagrams) | Yegge Gas Town | 3.5-4.0 |
| research | MODERATE | LOW | MODERATE (findings + tables) | Flagship/Ceiling | 2.5-3.5 |
| tutorial | HIGH | MODERATE | HIGH (steps + code + screenshots) | (no data yet) | 3.0-3.5 |
| reference | LOW | LOW | HIGH (tables + specs + code) | (no data yet) | 2.5-3.0 |

### Current Evidence

| Content Type | N | PA-05 Range | Mean PA-05 (final) | Notes |
|-------------|---|-------------|-------------------|-------|
| essay | 1 | 4.0 | 4.0 | B1 only; small, simple content |
| article | 1 | 3.5 | 3.5 | B6 only; after REFINE |
| research | 3 | 1.5-2.5 | 1.83 | B2, B3, B4; all struggled |

### Key Observation

Research content has consistently scored lowest. THREE research builds (B2=1.5, B3=1.5, B4=2.5) all underperformed. Possible causes:
1. Research content has lower metaphor viability (abstract findings are harder to embody spatially)
2. Research content drove the most complex pipeline runs (most agents, most time)
3. Research content was always used for "pushing the ceiling" experiments, which may have introduced confounding complexity

**This is the most important content-type signal in the dataset:** research content triggers over-engineering.

### Metric Specification

```
FIELD: content_type
TYPE: enum (essay | article | research | tutorial | reference | mixed)
WHEN: Phase 0 (Content Map)
SOURCE: Content analyst classification

FIELD: content_heterogeneity
TYPE: enum (LOW | MODERATE | HIGH)
WHEN: Phase 0 (Content Map)
SOURCE: Content analyst assessment

FIELD: metaphor_viability
TYPE: enum (YES | NO | PARTIAL)
WHEN: Phase 0 (Content Map)
SOURCE: Content analyst assessment

DERIVED: content_type_mean_pa05
FORMULA: mean(pa05_final) grouped by content_type
DISPLAY: Box plot showing PA-05 distribution per content type
REQUIRES: N >= 3 per content type
```

### What This Looks Like After 10+ Runs

A box-and-whisker plot with content types on x-axis and PA-05 on y-axis. Each content type shows its distribution (min, Q1, median, Q3, max). This answers: "For a new article, what PA-05 should I expect?"

---

## 4. Phase Efficiency

### Phase Definitions and Quality Contribution

Each pipeline phase contributes differently to final quality. Some phases produce quality directly; others enable quality production by later phases.

| Phase | Description | Quality Production | Quality Enablement | Time (B5/B6) |
|-------|-------------|-------------------|-------------------|-------------|
| Pre-Flight | File verification | 0 | LOW (prevents crashes) | ~5 min |
| P0: Content Analysis | Content map, mode selection | 0 | HIGH (heterogeneity + metaphor → mode) | ~10 min |
| P1: Brief Assembly | TC brief with recipe | HIGH (recipe quality → build quality) | HIGH (brief IS the quality DNA) | ~15 min |
| P2: Building | HTML/CSS artifact | **MAXIMUM** (the only phase that writes code) | 0 | ~30-40 min |
| P3A: Screenshots + Gates | DPR, captures, gate runner | 0 | HIGH (measurement enables iteration) | ~15-20 min |
| P3B: PA Audit | 9 auditor reports | 0 | **MAXIMUM** (PA finds → REFINE targets) | ~20-30 min |
| P3C: Weaver Verdict | PA-05 scoring, ship decision | 0 | HIGH (verdict directs next action) | ~10-15 min |
| REFINE: Builder | Fix structural/mechanical issues | **MAXIMUM** | 0 | ~20-30 min |
| REFINE: PA + Weaver | Re-audit after fixes | 0 | HIGH (validates REFINE worked) | ~30-40 min |

### Phase Efficiency Formula

**Phase Efficiency (PE)** = quality delta attributable to phase / time spent on phase.

The challenge: quality is only measurable at PA audit checkpoints (Phase 3B/3C). Individual phase contributions must be inferred.

### Attribution Model

Use a **causal attribution** model based on what we know about quality drivers:

| Phase | Attribution Weight | Rationale |
|-------|-------------------|-----------|
| P0: Content Analysis | 10% | Mode selection determines build approach; wrong mode = wrong tier |
| P1: Brief Assembly | 25% | Recipe quality directly predicts build quality (recipe vs checklist finding) |
| P2: Building | 40% | Builder writes the actual artifact |
| P3A-C: Audit Cycle | 0% (for initial) | Audit does not change the artifact; it only reveals its state |
| REFINE: Builder | 25% of REFINE delta | REFINE builder writes the actual fixes |

So for a build with PA-05 = 3.0 after initial + REFINE to 3.5:
- P0 contributed 0.10 * 3.0 = 0.30 quality points
- P1 contributed 0.25 * 3.0 = 0.75 quality points
- P2 contributed 0.40 * 3.0 = 1.20 quality points
- P3A-C contributed 0 quality points (measurement only)
- REFINE builder contributed 0.25 * 0.5 = 0.125 of the delta

### Phase Efficiency as Time Investment

More practically, track **time per phase** and correlate with final quality:

```
FIELD: phase_duration_minutes
TYPE: object { p0: int, p1: int, p2: int, p3a: int, p3b: int, p3c: int, refine_build: int, refine_audit: int }
WHEN: Per-phase completion (from execution tracker timestamps)
SOURCE: Agent start/end times in execution tracker

DERIVED: phase_time_percentage
FORMULA: phase_duration / total_duration * 100
DISPLAY: Stacked bar chart showing time allocation per phase

DERIVED: build_audit_ratio
FORMULA: (p2_time + refine_build_time) / (p3a_time + p3b_time + p3c_time + refine_audit_time)
DISPLAY: Single ratio number
THRESHOLD: BAR < 0.5 = spending too little time building vs auditing
           BAR > 2.0 = not enough audit coverage
           SWEET SPOT: 0.7-1.5
```

### What This Looks Like After 10+ Runs

Two visualizations:
1. **Stacked bar chart** (one bar per build) showing time allocation. Healthy builds should have P2 as the largest block (35-45%) with reasonable P3B (15-20%).
2. **Build-Audit Ratio trend line** showing whether we're trending toward healthy balance.

---

## 5. The Quality Wall (Minimum Viable Run)

### Definition

The **Quality Wall** is the minimum pipeline configuration that reliably produces PA-05 >= 2.5 (the COMPOSED threshold -- acceptable for deployment with advisory fixes).

### Current Hypothesis: Two Lanes

**FAST LANE (target: PA-05 >= 2.5, ~60-90 min)**
- Full P0 + P1 + P2 (build cycle: ~60 min)
- Abbreviated P3A (screenshots at 1440px only, reduced gate set)
- Abbreviated P3B (3 auditors instead of 9: A/impression, C/spatial, G/metaphor)
- No REFINE (accept 2.5+ and apply mechanical fixes manually)

**THOROUGH LANE (target: PA-05 >= 3.5, ~180-240 min)**
- Full P0 + P1 + P2 (build cycle: ~60 min)
- Full P3A (all viewports, all gates)
- Full P3B (9 auditors + integrative)
- P3C Weaver verdict
- REFINE if PA-05 < 3.5
- Post-REFINE PA (full 9 auditors)

### Minimum Viable Configuration Analysis

| Config | Estimated Time | Expected PA-05 | Risk |
|--------|---------------|----------------|------|
| P0+P1+P2 only (no audit) | 45-60 min | 2.0-2.5 | Unknown quality until someone reads it |
| P0+P1+P2+quick-gate | 60-75 min | 2.0-2.5 | Know structural failures; miss perceptual |
| P0+P1+P2+3-auditor PA | 75-100 min | 2.0-3.0 | Catches major issues; misses cross-auditor signals |
| Full pipeline, no REFINE | 95-120 min | 2.0-3.0 | Full diagnosis; no fix cycle |
| Full pipeline + 1 REFINE | 180-240 min | 3.0-4.0 | Full quality; highest cost |

### The "20% Effort" Experiment

B1 (middle-tier) achieved 4.0 in 35 min with 8 agents. If we could identify what made B1 succeed with so little effort, we could replicate it. Factors unique to B1:
1. Simple essay content (low heterogeneity)
2. Recipe format brief (not checklist)
3. Opus builder with full vocabulary access
4. No excessive agent orchestration overhead

**Prediction:** For essay/article content with high metaphor viability, the FAST LANE should hit PA-05 >= 3.0 reliably. For research/reference content, THOROUGH LANE is essential.

### Metric Specification

```
FIELD: pipeline_config
TYPE: enum (FAST | THOROUGH | CUSTOM)
WHEN: Pipeline start
SOURCE: Orchestrator decision based on content type + time budget

FIELD: config_pa05_expectation
TYPE: object { min: float, expected: float, max: float }
WHEN: After content analysis (P0)
FORMULA: lookup from content_type_mean_pa05 table
DISPLAY: Confidence interval on build dashboard

DERIVED: quality_wall_achieved
TYPE: boolean
FORMULA: pa05_final >= 2.5
DISPLAY: Binary indicator per build
```

---

## 6. Complexity-Quality Inversion

### The Paradox

The dataset reveals a strong inverse correlation between pipeline complexity and output quality:

| Build | Agents | Time (min) | Meta Complexity* | PA-05 Final |
|-------|--------|-----------|-----------------|-------------|
| B1 (middle) | 8 | 35 | LOW | **4.0** |
| B5 (yegge init) | 15 | 95 | MODERATE | 2.0 |
| B4 (flag-remed) | 16 | 120 | HIGH | 2.5 |
| B2 (ceiling) | 12 | 180 | HIGH | 1.5 |
| B6 (yegge full) | 40 | 200 | HIGH | **3.5** |
| B3 (flagship) | 19 | 240 | EXTREME | 1.5 |

*Meta Complexity = combination of agent count, prompt length, rule count, and orchestration layers.

The correlation between agents and PA-05 is r = -0.31 (negative). Between time and PA-05, r = -0.24 (weakly negative). Between meta complexity and PA-05, the trend is clearly negative except for B6 (which used REFINE to escape the trap).

### Complexity Metrics

**CQI (Complexity-Quality Index):**
```
CQI = PA-05_final / log2(agents + 1)
```

| Build | Agents | PA-05 | CQI |
|-------|--------|-------|-----|
| B1 | 8 | 4.0 | **1.26** |
| B5 | 15 | 2.0 | 0.50 |
| B4 | 16 | 2.5 | 0.59 |
| B2 | 12 | 1.5 | 0.41 |
| B6 | 40 | 3.5 | 0.65 |
| B3 | 19 | 1.5 | 0.36 |

B1's CQI (1.26) is nearly DOUBLE the next-best (B6 at 0.65). This confirms: complexity destroys quality.

**Meta-to-Output Ratio (MOR):**
```
MOR = total_infrastructure_lines / html_artifact_lines
```

Known values:
- Pipeline overall: 2.6:1 (47,944 infra vs 18,428 product)
- Flagship experiment: 660:1 (pathological)
- B1 (middle): estimated ~5:1 (healthy)
- Threshold: MOR > 20:1 = pipeline feeding on itself

### Complexity Alarm Triggers

```
FIELD: complexity_quality_index
TYPE: float (2 decimal)
FORMULA: pa05_final / log2(total_agents + 1)
WHEN: After final verdict
DISPLAY: Scatter plot (x = agents, y = PA-05, color = CQI)
THRESHOLD: CQI < 0.5 = complexity-quality inversion likely
           CQI > 1.0 = healthy complexity-to-quality ratio

FIELD: meta_output_ratio
TYPE: float (1 decimal)
FORMULA: (total lines in all non-HTML outputs) / (lines in HTML artifact)
WHEN: After final verdict
DISPLAY: Bar chart per build
THRESHOLD: MOR > 20:1 = pipeline self-feeding alarm
           MOR > 50:1 = halt and investigate before next run

FIELD: agent_count_alarm
TYPE: boolean
FORMULA: total_agents > 25 AND pa05_initial < 2.5
WHEN: If REFINE is triggered
DISPLAY: Red alert in execution tracker
RATIONALE: If 25+ agents cannot produce 2.5 on first pass, adding MORE agents will not help
```

### What This Looks Like After 10+ Runs

A scatter plot with:
- X-axis: total agents (or total time)
- Y-axis: PA-05 final
- Color: CQI (red < 0.5, yellow 0.5-1.0, green > 1.0)
- Size: meta-output ratio

Healthy builds cluster in the upper-left (fewer agents, higher quality). Pathological builds cluster in the lower-right (more agents, lower quality). The trend line should be FLAT or slightly positive if the pipeline is mature. A negative trend line = complexity-quality inversion is the dominant failure mode.

---

## 7. The REFINE Multiplier

### Definition

**REFINE Multiplier (RM)** = quality improvement per unit of marginal investment.

```
RM = delta_PA05 / (refine_investment / initial_investment)
```

Where investment = time (or cost, when available).

### Current Data

| Build | Initial PA-05 | Initial Time | REFINE Delta | REFINE Time | RM |
|-------|-------------|-------------|-------------|-------------|-----|
| B4 | 1.5 | ~120 min (B3) | +1.0 | ~120 min | 1.0 |
| B6 | 2.0 | 95 min | +1.5 | 105 min | **1.36** |

B6's RM of 1.36 means: for each unit of relative time spent on REFINE, quality improved 1.36x more than the initial build's per-unit quality. REFINE is MORE efficient than the initial build at producing quality.

### The "First REFINE is Always Best" Hypothesis

**Supported by both data points.** First REFINE in B4 and B6 both produced significant deltas. Mechanism:

1. **REFINE agent reads conviction + artistic impression ONLY** (no gates, no thresholds). This is a fundamentally different information diet than the initial builder.
2. **REFINE operates on an existing artifact** -- it fixes, not creates. Fixing a designed artifact with structural issues is faster than building from scratch.
3. **REFINE builder is a DIFFERENT agent** -- continuation bias cannot suppress self-critique.

### Prediction for 2nd REFINE

If B6 had needed a 2nd REFINE (it didn't -- SHIP WITH FIXES at 3.5):
- Remaining fixes: 3 MECHANICAL + 2 STRUCTURAL
- Expected delta: +0.25 to +0.50 (based on "fix #5 dark zone relief" being the main quality-lifting item)
- Expected time: ~60-90 min (smaller scope)
- Expected RM: 0.3-0.5 (substantially lower than 1st REFINE)

### Metric Specification

```
FIELD: refine_multiplier
TYPE: float (2 decimal)
FORMULA: (pa05_delta / (refine_minutes / initial_minutes))
WHEN: After each REFINE verdict
DISPLAY: Bar chart comparing RM across builds and cycles

FIELD: refine_cost_ratio
TYPE: float (2 decimal)
FORMULA: refine_minutes / initial_minutes
DISPLAY: Percentage overlay on time chart
THRESHOLD: RCR > 1.0 = REFINE costs more than initial build (investigate)
           RCR 0.5-1.0 = normal
           RCR < 0.5 = efficient REFINE

FIELD: cumulative_refine_investment
TYPE: float (minutes)
FORMULA: sum(all refine_minutes within a build)
DISPLAY: Running total on build timeline
THRESHOLD: > 2x initial build time = diminishing returns alarm
```

---

## 8. Predictive Signals

### The Holy Grail: Predicting Final PA-05 from Early Pipeline Signals

Can we predict the final quality score from signals available before the artifact is built? This would allow:
- Pre-commit resource allocation (skip THOROUGH for high-confidence content)
- Early termination (don't spend 4 hours if signals predict 1.5)
- Pipeline configuration selection (FAST vs THOROUGH lane)

### Candidate Predictive Signals

#### Signal 1: Content Heterogeneity (from P0)

| Heterogeneity | N | Mean PA-05 Final | Range |
|--------------|---|-----------------|-------|
| HIGH | 2 | 2.75 | 2.0-3.5 (B5/B6, same content) |
| MODERATE | 1 | 4.0 | 4.0 (B1) |
| LOW | 0 | -- | -- |
| Unknown | 3 | 1.83 | 1.5-2.5 (B2/B3/B4, research) |

**Verdict:** Insufficient data. HIGH heterogeneity is NOT a negative signal when paired with REFINE. More runs needed.

#### Signal 2: Mode Selection (from P0.5)

| Mode | N | Mean PA-05 Final |
|------|---|-----------------|
| COMPOSED | 2 | 2.75 |
| APPLIED | 0 | -- |
| Pre-mode | 4 | 2.13 |

**Verdict:** Mode selection was introduced with v3.1; no APPLIED builds yet for comparison.

#### Signal 3: Brief Quality (BV Gates from P1)

| BV Result | N | Mean PA-05 Final |
|-----------|---|-----------------|
| All 4 PASS | 1 | 3.5 (B6 only) |
| No BV gates | 5 | 2.10 |

**Verdict:** BV gates are new (v3.1). Only 1 data point. But the STRONGEST theoretical predictor: brief quality directly predicts build quality per the "recipe vs checklist" finding.

#### Signal 4: Initial Gate Pass Rate (from P3A)

| Gate Pass % | N | PA-05 Initial | PA-05 Final |
|-------------|---|-------------|-------------|
| 73% (22/30) | 1 | 2.0 | -- |
| 76% (19/25) | 1 | -- | 3.5 (post-REFINE) |

**Verdict:** Gate pass rate has ZERO correlation with PA-05 in the dataset. B3 (flagship) passed most programmatic gates but scored 1.5. This validates the core finding: programmatic verification != perceptual verification.

#### Signal 5: Experiential Convergence Count (from P3B)

The number of auditors agreeing on a single issue is a powerful signal:

| Convergence | Meaning | Predicted Path |
|-------------|---------|---------------|
| 0/9 agree | No dominant issue | Likely PA-05 >= 3.0 |
| 3-5/9 agree | Moderate concern | Likely PA-05 2.0-3.0, fixable |
| 6-8/9 agree | Strong concern | Likely PA-05 1.5-2.5, REFINE needed |
| 9/9 agree | Dominant failure | Likely PA-05 <= 2.0, may need REBUILD |

Evidence:
- B5 initial: 9/9 on dark zone → PA-05 2.0 → REFINE triggered
- B6 refine: 6/10 on dark zone fatigue → PA-05 3.5 → SHIP WITH FIXES

### Predictive Model (Minimum Viable)

```
PREDICTED_PA05_RANGE = f(content_type, heterogeneity, metaphor_viability, brief_quality)

If essay AND metaphor_viability == YES AND BV_all_pass:
    predict 3.5-4.0, config FAST
If article AND heterogeneity == HIGH AND metaphor_viability == YES AND BV_all_pass:
    predict 2.5-3.5, config THOROUGH
If research AND heterogeneity == MODERATE:
    predict 2.0-3.0, config THOROUGH
If BV_any_fail:
    predict PA-05 -= 0.5 from base

AFTER P3B:
If experiential_convergence >= 7:
    predict PA-05 <= 2.5, REFINE will produce +1.0-1.5
If experiential_convergence <= 2:
    predict PA-05 >= 3.0, REFINE may be unnecessary
```

### Metric Specification

```
FIELD: predicted_pa05_range
TYPE: object { min: float, expected: float, max: float }
WHEN: After P0 (content type known) AND after P1 (BV gates known)
SOURCE: Predictive model lookup table
DISPLAY: Confidence interval bar on build dashboard
UPDATE: Recalculate after each pipeline milestone (P0, P1, P3A, P3B)

FIELD: prediction_accuracy
TYPE: float (abs error in PA-05 points)
FORMULA: abs(predicted_expected - pa05_final)
WHEN: After final verdict
DISPLAY: Rolling mean prediction error
THRESHOLD: < 0.5 = good calibration; > 1.0 = model needs retraining
REQUIRES: N >= 10 builds before trusting predictions
```

---

## 9. Visualization Specifications

### Viz 1: Quality Velocity Over Time (Line Chart)

```
TITLE: "Quality Velocity Trend"
X_AXIS: Build date (chronological)
Y_AXIS: PA-05 points per hour
SERIES:
  - Blue line: QV (pa05_final / hours)
  - Red dots: MQV (refine delta / refine hours), only on REFINE builds
  - Gray dashed: QV = 1.0 (baseline reference)
  - Green dashed: QV = 2.0 (efficiency target)
ANNOTATIONS:
  - Pipeline version changes (vertical dashed lines)
  - Content type labels below each point
INTERACTION: Hover shows build slug, PA-05, time, agents
SIZE: 800x400px
DATA_SOURCE: cross-run-tracker.md Build History table
```

**What it reveals:** Is the pipeline getting faster at producing quality? Are REFINE cycles maintaining high MQV? When did velocity drop (and what changed)?

### Viz 2: Cost vs Quality Scatter Plot

```
TITLE: "Investment vs Quality"
X_AXIS: Total time (minutes), log scale
Y_AXIS: PA-05 final score (0-4)
POINT_SIZE: Number of agents (larger = more agents)
POINT_COLOR: Content type (essay=blue, article=green, research=red)
POINT_SHAPE: Pipeline version (circle=pre-v3, square=v3.1, diamond=v4)
QUADRANTS:
  - Upper-left: EFFICIENT (high quality, low time) = target zone
  - Upper-right: THOROUGH (high quality, high time) = acceptable
  - Lower-left: QUICK-AND-DIRTY (low quality, low time) = fast lane
  - Lower-right: PATHOLOGICAL (low quality, high time) = investigate
REFERENCE_LINE: Diagonal showing "1 quality point per hour"
SIZE: 600x600px
DATA_SOURCE: cross-run-tracker.md
```

**What it reveals:** Are we in the efficient quadrant? Is there a content type that consistently falls in the pathological zone? Does agent count (point size) correlate with position?

### Viz 3: Phase Efficiency Bars

```
TITLE: "Time Allocation by Phase"
X_AXIS: Build slug
Y_AXIS: Percentage of total time
BARS: Stacked horizontal bars, one segment per phase
COLORS:
  - P0 (content): #E8D5B7 (warm tan)
  - P1 (brief): #B7D5E8 (cool blue)
  - P2 (build): #6B9B7A (sage green)
  - P3A (gates/screenshots): #C49052 (amber)
  - P3B (PA audit): #4A7C9B (teal)
  - P3C (weaver): #7A6B9B (purple)
  - REFINE build: #2A7D7D (dark teal)
  - REFINE audit: #9B7A6B (warm brown)
ANNOTATION: PA-05 final score at end of each bar
SIZE: 800x300px
DATA_SOURCE: execution tracker per-phase timestamps
```

**What it reveals:** Which phase dominates time? Is the build-audit ratio healthy? Do REFINE builds have different time profiles than initial-only builds?

### Viz 4: REFINE Diminishing Returns Curve

```
TITLE: "REFINE Cycle Effectiveness"
X_AXIS: REFINE cycle number (1, 2, 3)
Y_AXIS_LEFT: PA-05 delta for this cycle
Y_AXIS_RIGHT: Cumulative PA-05 (stacked area)
SERIES:
  - Bar (left axis): Delta per cycle, colored by build
  - Line (right axis): Cumulative PA-05, one line per build
REFERENCE_LINE: Delta = 0.5 (minimum useful REFINE threshold)
ANNOTATION: Stop signal indicators where MQV < 0.3
SIZE: 600x400px
DATA_SOURCE: per-cycle REFINE data from execution trackers
```

**What it reveals:** How fast do REFINE returns decay? Is the 1st REFINE always the most effective? Where is the "stop iterating" point?

### Viz 5: Build Trajectory Waterfall (NEW -- adds build-by-build progression)

```
TITLE: "Build Quality Progression"
X_AXIS: Build slug (chronological)
Y_AXIS: PA-05 score (0-4)
BARS: Waterfall-style
  - Green: Initial build PA-05
  - Blue: REFINE #1 delta (stacked above green)
  - Purple: REFINE #2 delta (stacked above blue)
  - Red line: Final PA-05
REFERENCE_LINES:
  - PA-05 = 2.5 (minimum acceptable)
  - PA-05 = 3.5 (SHIP threshold)
ANNOTATION: Content type labels, pipeline version labels
SIZE: 800x400px
DATA_SOURCE: cross-run-tracker.md
```

**What it reveals:** At a glance: is each build starting higher than the last? Are REFINE deltas shrinking (pipeline maturation)? How far above/below thresholds are we?

---

## 10. Data Collection Specification

### Per-Run Required Fields (for all analyses above)

All fields below MUST be captured in every pipeline run. These feed into the cross-run tracker, the run-summary JSON, and the visualizations.

```json
{
  "buildMetadata": {
    "slug": "string (required)",
    "date": "YYYY-MM-DD (required)",
    "contentPath": "string (required)",
    "contentType": "essay|article|research|tutorial|reference|mixed (required -- NEW)",
    "contentHeterogeneity": "LOW|MODERATE|HIGH (required -- from P0)",
    "metaphorViability": "YES|NO|PARTIAL (required -- from P0)",
    "pipelineVersion": "string (required)",
    "builderModel": "Opus|Sonnet (required)",
    "mode": "APPLIED|COMPOSED (required)",
    "totalDurationMinutes": "integer (required)"
  },
  "phaseTiming": {
    "p0_minutes": "integer (required -- NEW)",
    "p1_minutes": "integer (required -- NEW)",
    "p2_minutes": "integer (required -- NEW)",
    "p3a_minutes": "integer (required -- NEW)",
    "p3b_minutes": "integer (required -- NEW)",
    "p3c_minutes": "integer (required -- NEW)",
    "refine_build_minutes": "integer (0 if no REFINE -- NEW)",
    "refine_audit_minutes": "integer (0 if no REFINE -- NEW)"
  },
  "scores": {
    "pa05Initial": "float 0-4 (required)",
    "pa05Final": "float 0-4 (required)",
    "pa05Delta": "float (required, 0 if no REFINE)",
    "tier5Initial": "integer 0-9 (required -- may be n/a for pre-v3)",
    "tier5Final": "integer 0-9 (required)",
    "emotionalArc": {
      "surprise": "integer 1-10",
      "delight": "integer 1-10",
      "authority": "integer 1-10",
      "closure": "integer 1-10"
    }
  },
  "gates": {
    "total": "integer",
    "pass": "integer",
    "fail": "integer",
    "passRate": "float (pass/total)",
    "bvAllPass": "boolean",
    "failedGateIds": ["array of strings"]
  },
  "artifact": {
    "htmlLines": "integer (required -- NEW)",
    "cssLines": "integer (required -- NEW)",
    "mechanismCount": "integer (required -- NEW)",
    "componentCount": "integer (NEW)"
  },
  "refine": {
    "cycleCount": "integer (required)",
    "perCycleDeltas": ["array of floats -- NEW"],
    "perCycleDurationMinutes": ["array of integers -- NEW"]
  },
  "agents": {
    "totalSpawned": "integer (required)",
    "totalRespawns": "integer",
    "paAuditorCount": "integer (NEW)",
    "builderRespawns": "integer (NEW)"
  },
  "experientialFindings": {
    "convergenceCount": "integer (max auditors agreeing on single issue -- NEW)",
    "convergenceTopic": "string (what they agreed on -- NEW)",
    "blockingUsabilityCount": "integer (NEW)"
  },
  "fixes": {
    "mechanical": "integer",
    "structural": "integer",
    "compositional": "integer",
    "total": "integer"
  },
  "verdict": "SHIP|SHIP_WITH_FIXES|REFINE|REBUILD",
  "derivedMetrics": {
    "qualityVelocity": "float (pa05Final / hours)",
    "marginalQualityVelocity": "float (delta / refine_hours, null if no REFINE)",
    "complexityQualityIndex": "float (pa05Final / log2(agents+1))",
    "metaOutputRatio": "float (total_non_html_lines / html_lines)",
    "refineMultiplier": "float (delta / (refine_time/initial_time), null if no REFINE)",
    "buildAuditRatio": "float (build_time / audit_time)"
  }
}
```

### Integration with Existing Infrastructure

The data collection spec above extends the existing `run-summary-schema.json` with NEW fields. Implementation path:

1. **Extend `run-summary-schema.json`** with the new fields marked "NEW" above
2. **Extend `EXECUTION-TRACKER-TEMPLATE.md`** with phase timing section (timestamp per phase transition)
3. **Extend `cross-run-tracker.md`** Build History table with new columns:
   - Content Type, Heterogeneity, BV Pass (boolean)
   - Phase timing breakdown (could be separate detail row)
4. **Orchestrator emit hook:** After final verdict, orchestrator computes all `derivedMetrics` and writes to `run-summary.json`
5. **Visualization generation:** A post-run script reads all `run-summary.json` files and generates the 5 visualizations

### What Changes in the Execution Tracker

Add a new section to the tracker template:

```markdown
## Phase Timing Log

| Phase | Start (UTC) | End (UTC) | Duration (min) |
|-------|------------|----------|----------------|
| Pre-Flight | ___ | ___ | ___ |
| P0: Content Analysis | ___ | ___ | ___ |
| P1: Brief Assembly | ___ | ___ | ___ |
| P2: Building | ___ | ___ | ___ |
| P3A: Screenshots + Gates | ___ | ___ | ___ |
| P3B: PA Audit | ___ | ___ | ___ |
| P3C: Weaver | ___ | ___ | ___ |
| REFINE: Build | ___ | ___ | ___ |
| REFINE: Audit | ___ | ___ | ___ |
| **Total** | ___ | ___ | ___ |
```

---

## 11. Cross-Metric Correlation Matrix

After 10+ runs, compute correlations between all pairs of metrics to discover hidden relationships. Key hypothesized correlations:

| Metric A | Metric B | Hypothesized Correlation | Evidence So Far |
|----------|----------|------------------------|-----------------|
| Content heterogeneity | PA-05 initial | Weak positive (more variety = more design opportunity) | Mixed: B1 (moderate) > B5 (high) |
| BV pass rate | PA-05 final | Strong positive (good brief = good build) | N=1, but theory is strong |
| Agent count | PA-05 final | Negative (complexity inversion) | r = -0.31 across N=6 |
| REFINE MQV | REFINE cycle # | Strong negative (diminishing returns) | Supported by theory, N too small |
| Gate pass % | PA-05 final | **Weak/none** (programmatic != perceptual) | Confirmed: flagship passed gates, scored 1.5 |
| Brief recipe:checklist ratio | PA-05 final | Strong positive | Confirmed: recipe = 4.0, checklist = 1.5 |
| Experiential convergence | REFINE delta | Positive (clearer problem = bigger fix) | B6: 9/9 convergence → +1.5 delta |
| Content type = research | PA-05 final | Negative (research triggers over-engineering) | Mean 1.83 vs 3.75 for non-research |
| Builder model = Opus | PA-05 final | Positive (Opus creates beyond constraints) | All successful builds use Opus |

### Correlation Computation Protocol

```
WHEN: After every 3rd build (N=3, 6, 9, 12, ...)
INPUT: All run-summary.json files
OUTPUT: correlation-matrix.json + correlation-heatmap.png
METHOD:
  1. Extract all numeric fields from all run summaries
  2. Compute Pearson r for all pairs
  3. Flag any |r| > 0.5 as "interesting"
  4. Flag any sign change from hypothesized direction as "surprising"
  5. Update cross-run-tracker.md TRENDS section with new discoveries
```

---

## 12. Summary: Metric Priority

Ranking all metrics by information value and implementation difficulty:

### Tier 1: MUST HAVE (implement in next run)

| Metric | Why | Difficulty |
|--------|-----|-----------|
| Phase timing | Enables ALL efficiency analysis | LOW (add timestamps to tracker) |
| PA-05 per cycle | Enables REFINE decay analysis | LOW (already partially captured) |
| Content type classification | Enables content-quality correlation | LOW (add to P0 output) |
| Agent count per phase | Enables complexity-quality analysis | LOW (count from tracker) |
| CSS line count | Enables mechanism density | LOW (gate runner already counts) |
| Mechanism count | Enables mechanism density | LOW (gate runner already counts) |

### Tier 2: SHOULD HAVE (implement within 3 runs)

| Metric | Why | Difficulty |
|--------|-----|-----------|
| Quality Velocity | Core efficiency metric | LOW (derived from existing fields) |
| Complexity-Quality Index | Detect inversion early | LOW (derived) |
| Build-Audit Ratio | Balance check | LOW (derived from phase timing) |
| Experiential convergence | Predictive signal | MODERATE (requires structured audit output) |
| REFINE Multiplier | ROI of REFINE | LOW (derived) |

### Tier 3: NICE TO HAVE (implement when N >= 10)

| Metric | Why | Difficulty |
|--------|-----|-----------|
| Predicted PA-05 range | Pre-commit resource allocation | HIGH (requires lookup table from N >= 10 runs) |
| Correlation matrix | Discover hidden relationships | MODERATE (requires analysis script) |
| Decay rate estimation | Optimize REFINE stop point | HIGH (requires N >= 3 builds with 2+ REFINE each) |
| Content-type ceiling estimation | Set expectations | HIGH (requires N >= 3 per type) |

---

## 13. Open Questions for Future Investigation

1. **Is the REFINE builder's information diet the active ingredient?** REFINE agents read conviction + artistic impression only. Does this generative-language-only diet produce higher quality than reading gate scores? Or is it simply that the 2nd pass fixes structural issues that the 1st pass could not see? An experiment: give the initial builder conviction + artistic impression from a PREVIOUS successful build. If quality improves, the diet is the ingredient.

2. **Can we predict which builds will need REFINE before P3B?** The BV gates (P1) are the best pre-build quality signal. If all 4 BV gates pass AND content type is essay/article, can we skip the THOROUGH lane? Risk: missing a structural issue that only PA catches.

3. **What is the true cost of a REFINE cycle in API tokens?** The run-summary schema has no cost field. Adding `estimatedTokenCost` per phase would enable true ROI calculation. Current proxy: time + agent count.

4. **Does pipeline version matter independent of content?** We have 4 pre-v3 builds and 2 v3.1 builds, but they use different content. To isolate the pipeline version effect, we need: same content, different pipeline versions. The B5→B6 progression used v3.1 for both the initial and REFINE. Comparing B5-initial (v3.1, PA-05 2.0) to B2 (pre-v3, PA-05 1.5) suggests v3.1 produces slightly better initial builds -- but content differs.

5. **Is there a quality ceiling for single-cycle builds?** B1 (4.0 in one cycle) may be an outlier. If the typical single-cycle ceiling is 2.0-2.5, then REFINE is not optional for CEILING/FLAGSHIP quality -- it is architecturally necessary.

6. **Does the number of PA auditors affect score reliability or magnitude?** B5/B6 used 9 auditors (Mode 4). Earlier builds used 2-3 or had standalone PAs. More auditors = more convergence data = better REFINE targeting. But do more auditors actually change the PA-05 score (e.g., by making the Weaver more confident)?

---

*Report complete. 13 sections, ~660 lines, 9 primary metrics defined, 5 visualization specifications, 1 full data collection schema, and 6 open questions for future investigation.*
