# 09 -- Measurement Protocol for Pipeline Enrichment Validation

## 0. Purpose

This document defines how to determine whether enriching the `/build-page` pipeline with compositional intelligence concepts (scales, channels, metaphor, multi-coherence) produces measurably better pages than the current pipeline. It specifies baselines, measurement instruments, success criteria, content selection, variance management, and overfitting controls.

---

## 1. BASELINE: What the Current Pipeline Produces

### 1.1 Historical Score Data

| Experiment | Date | Content | PA-05 | Tier 5 | Builder Model | Key Notes |
|------------|------|---------|-------|--------|---------------|-----------|
| Middle-Tier Experiment | 2026-02-16 | Gas Town | 4/4 (DESIGNED) | 3/3 STRONGLY NOVEL | Opus | 12 mechanisms, F-pattern, 960px, 7/7 soul. Missing footer. |
| Flagship Experiment | 2026-02-17 | RESEARCH-SYNTHESIS | 1.5/4 | Not scored (failed) | Sonnet builders | Zero borders, uniform typography, imperceptible backgrounds, 6 whitespace voids |
| Flagship Remediation | 2026-02-18 | RESEARCH-SYNTHESIS | 2.5/4 | Not fully scored | Opus builder | +1.0 from 1.5. 3 BLOCKING issues remaining. Projected 3.0-3.2 after fix. |

### 1.2 Baseline Performance Estimate

The current `/build-page` pipeline (SKILL.md at 408 lines) has never been run end-to-end. Historical data comes from earlier, different pipeline configurations:

- **Middle-tier experiment** used a DIFFERENT prompt (100-line recipe), DIFFERENT orchestration (file-bus, no `/build-page`), and Gas Town content. The 4/4 result is NOT attributable to the current pipeline.
- **Flagship experiment** used a 963-line master prompt (predecessor to `/build-page`), Sonnet builders, and RESEARCH-SYNTHESIS. The 1.5/4 result reflects a DIFFERENT system.
- **Flagship remediation** used targeted CSS fixes on the Flagship output. The 2.5/4 result is from a remediation cycle, not a fresh build.

**CRITICAL IMPLICATION:** We have NO baseline for the current `/build-page` pipeline. The first run IS the baseline. This fundamentally changes the experimental design -- we cannot do A/B on "current vs enriched" because "current" has zero data points. Instead:

**Option A:** Run current pipeline first (1-2 times) to establish baseline, THEN enrich, THEN re-run.
**Option B:** Run both versions in parallel on the same content, accepting that neither has prior data.

**Recommendation:** Option A. Run current pipeline once on each content type to establish baseline. This costs 2 runs but eliminates the confound of comparing to historical data from different systems.

### 1.3 Expected Current Pipeline Performance

Based on architectural analysis (not empirical data):

| Score | Predicted Range | Reasoning |
|-------|----------------|-----------|
| PA-05 | 2.5-3.5 | Conventions brief contains perception thresholds + richness formula. Builder is Opus. Gates enforce mechanical floor. But conventions brief has zero scale/channel vocabulary. |
| Tier 5 | 2-4/8 | No explicit Tier 5 guidance reaches the builder. PA-60 through PA-67 require compositional depth that the builder has no instructions to produce. |
| Gate pass rate | 85-95% | Gates are well-specified with fix recipes. Most gate failures self-correct in fix cycles. |

---

## 2. A/B COMPARISON DESIGN

### 2.1 Structure

```
                    CONTENT FILE
                        |
            +-----------+-----------+
            |                       |
    PIPELINE A (Current)    PIPELINE B (Enriched)
            |                       |
      Same builder model      Same builder model
      Same gates              Same gates
      Same PA protocol        Same PA protocol
            |                       |
      OUTPUT A                OUTPUT B
            |                       |
    MEASUREMENT BATTERY     MEASUREMENT BATTERY
            |                       |
         COMPARE ------------------>
```

### 2.2 Controlled Variables (Must Be Identical)

| Variable | Value | Why It Matters |
|----------|-------|----------------|
| Builder model | Opus (always) | Sonnet-for-builders was THE unexamined variable in Flagship failure |
| Content file | Identical bytes | Content difficulty is a confound |
| Gate runner | Identical gate-runner.md | Gates are the floor, not the differentiator |
| PA question set | All 56 (48 standard + 8 Tier 5) | Measurement instrument must be constant |
| PA auditor count | 9 per run | Inter-auditor agreement is a measurement signal |
| PA auditor model | Opus | Auditor model affects scoring |
| Screenshot protocol | Identical (1440/1024/768, cold + scroll) | Input to auditors must be consistent |
| Fix cycle limit | 3 max | More cycles = more improvement opportunity = confound |

### 2.3 Independent Variable (What Changes)

The ONLY difference between Pipeline A and Pipeline B is the content that reaches the **builder agent**. Specifically:

| Pipeline A (Current) | Pipeline B (Enriched) |
|----------------------|----------------------|
| conventions-brief.md as-is | conventions-brief.md + enrichments |
| Current reference file routing | Modified reference file routing |
| Current builder spawn prompt | Enriched builder spawn prompt |

The enrichments are defined by the other research agents' deliverables (tasks #1-#8). The measurement protocol is agnostic to WHAT is enriched -- it measures WHETHER enrichment helped.

### 2.4 Run Order and Timing

Run Pipeline A first for each content file, then Pipeline B on the same content. This allows:
1. Baseline establishment before enrichment
2. Gate result comparison (same content, different builder context)
3. PA comparison (same content, different visual output)

**Do NOT randomize order.** Pipeline A must run first because Pipeline B cannot be designed without knowing what Pipeline A's gaps are. This introduces a temporal confound (the second run benefits from system familiarity), but this confound is SMALLER than the confound of designing enrichments without baseline data.

---

## 3. MEASUREMENT BATTERY

### 3.1 Primary Scores (Decision-Making)

These scores determine the verdict:

| Metric | Source | Scale | Current Pipeline Target | Enriched Pipeline Target |
|--------|--------|-------|------------------------|-------------------------|
| **PA-05** | Weaver synthesis | 0-4 (0.5 precision) | 2.5-3.5 (predicted) | >= 3.5 |
| **Tier 5** | 8 PA questions | 0-8 YES count | 2-4 (predicted) | >= 6 |

### 3.2 Secondary Scores (Diagnostic)

These scores explain WHY primary scores differ:

#### 3.2.1 Gate Measurements (JSON, 21 gates)

| Gate | What It Measures | Enrichment-Sensitive? |
|------|-----------------|----------------------|
| SC-09 | Background delta at boundaries | YES -- enriched builder should produce more deliberate bg shifts |
| SC-10 | Stacked gap | PARTIALLY -- enriched builder should avoid whitespace voids |
| SC-11 | Typography zone count | YES -- enriched builder should produce more distinct type zones |
| SC-13 | Multi-coherence channel count | YES -- THE primary enrichment target. Average should increase. |
| SC-13B | Direction coherence | YES -- enriched builder should produce directionally aligned shifts |
| SC-14 | Sub-perceptual prevention | NO -- already caught by current gates |
| SC-15 | Border presence | YES -- enriched builder should produce more structural variety |
| SC-16 | Monotonic progression | YES -- enriched builder should create deliberate progressions |

**Key comparison:** SC-13 average across boundaries. If enrichment works, this should increase from ~3.5 (predicted current) to >= 4.5 (enriched).

#### 3.2.2 Builder Absorption (Build Log Analysis)

Read `_build-log.md` and check whether the builder's reflection mentions:

| Concept | Binary Check | What Presence Indicates |
|---------|-------------|------------------------|
| "scale" or "scales" | Y/N | Builder internalized scale vocabulary |
| "channel" or "channels" | Y/N | Builder internalized channel vocabulary |
| "multi-coherence" | Y/N | Builder understood multi-coherence principle |
| "direction" or "directional" | Y/N | Builder understood direction coherence |
| "restraint" | Y/N | Builder understood restraint principle |
| "monotonic" or "progression" | Y/N | Builder understood monotonic progression |
| "fractal" or "echo" | Y/N | Builder understood fractal self-similarity |
| Mechanism names from catalog | Count | How many named mechanisms appear in reflection |
| Override log entries | Count | How many builder overrides were compositionally motivated |

**Key comparison:** Total concept absorption count (0-9). If enrichment works, Pipeline B should have higher absorption than Pipeline A.

#### 3.2.3 CSS Analysis (Computed from Output)

| Metric | How to Measure | What It Indicates |
|--------|---------------|-------------------|
| Total CSS lines | Count lines in `<style>` | Raw CSS budget |
| Mechanism count | Count distinct mechanism deployments (border-left variants, background shifts, component types) | Compositional vocabulary breadth |
| Channel patterns at boundaries | From SC-13 data: which channels shift at each boundary | Whether shifts are coordinated or random |
| Direction consistency | From SC-13B data: % of boundaries where >= 3 channels share direction | Compositional coherence |
| Sub-perceptual waste | Count CSS rules with deltas below perception thresholds | CSS budget efficiency |
| Component type count | From SC-08 data | Spatial vocabulary |
| Grid layout count | Count distinct CSS grid/flexbox layout patterns | Layout variety |
| Unique font-size values | Count distinct computed font-size values | Typographic hierarchy depth |

### 3.3 Tertiary Scores (Calibration)

These scores validate the measurement instruments themselves:

| Metric | Source | What It Calibrates |
|--------|--------|-------------------|
| Inter-auditor agreement on PA-05 sub-criteria | PA matrix | Whether PA-05 scoring is reliable across auditors |
| Tier 5 question disagreement rate | PA matrix | Whether Tier 5 questions are well-calibrated |
| Gate-PA correlation | Gate results vs PA scores | Whether gates predict PA outcomes |
| Build time | Timestamps in build log | Whether enrichment increases build time (cost) |
| Fix cycle count | Run manifest | Whether enrichment reduces fix cycles needed |

---

## 4. SUCCESS CRITERIA

### 4.1 Minimum Viable Improvement

The enrichment effort is justified if:

| Criterion | Threshold | Rationale |
|-----------|-----------|-----------|
| PA-05 delta | >= +0.5 | Half a point on a 4-point scale is perceptually significant. Less than 0.5 could be LLM variance. |
| Tier 5 delta | >= +2 YES answers | 2 additional Tier 5 questions answered YES indicates real compositional depth improvement |
| SC-13 average delta | >= +0.5 channels | Half a channel average increase indicates more coordinated multi-coherence |
| Zero regression | No gate that PASSED in A now FAILS in B | Enrichment must not break existing compliance |

**All four criteria must be met.** A PA-05 improvement with gate regressions indicates the enrichment traded compliance for composition -- not acceptable.

### 4.2 Strong Improvement (Validates Enrichment Approach)

| Criterion | Threshold |
|-----------|-----------|
| PA-05 delta | >= +1.0 |
| Tier 5 delta | >= +3 YES answers |
| SC-13 average delta | >= +1.0 channels |
| Builder absorption count | >= 5 concepts mentioned (vs <= 2 in baseline) |

### 4.3 Failure Indicators

Enrichment should be REJECTED if:

| Signal | What It Means |
|--------|--------------|
| PA-05 delta < 0 | Enrichment confused the builder |
| Gate regression count > 0 | Enrichment broke compliance |
| Build time > 2x baseline | Enrichment overloaded the builder |
| Fix cycles increased | Enrichment made first-pass quality worse |
| Tier 5 delta = 0 despite PA-05 improvement | Improvement is mechanical, not compositional |

---

## 5. CONTENT SELECTION

### 5.1 Content Difficulty Analysis

| Content | Type | Difficulty | Why |
|---------|------|------------|-----|
| Gas Town | Heterogeneous (stats, tables, prose, Q&A) | EASY | Multiple content types naturally suggest different visual treatments, component diversity, layout variation. Builder has many "handles" to grab. |
| RESEARCH-SYNTHESIS | Uniform (dense analytical prose) | HARD | Long stretches of similar content provide fewer natural breakpoints. Compositional depth must come from the BUILDER, not the content. |

### 5.2 Recommendation: Both, in Sequence

**Run 1: Gas Town (easy).** This is the "can it work at all?" test.
- If enrichment fails on Gas Town, it fails everywhere. Stop.
- If enrichment succeeds on Gas Town, proceed to Run 2.
- Gas Town provides a generous baseline: the middle-tier experiment already scored 4/4 on similar content. Current pipeline should also score well.

**Run 2: RESEARCH-SYNTHESIS (hard).** This is the "does it scale to hard content?" test.
- RESEARCH-SYNTHESIS is the Flagship failure content. Historical PA-05: 1.5/4.
- This is where enrichment SHOULD matter most -- the content provides no free help.
- If enrichment produces PA-05 >= 3.0 on RESEARCH-SYNTHESIS, it demonstrates real compositional intelligence transfer.

### 5.3 Content File Paths

| Content | Path | Lines | Last Used |
|---------|------|-------|-----------|
| Gas Town | Locate via `design-system/tension-test/` content files | ~TBD | Middle-tier experiment (2026-02-16) |
| RESEARCH-SYNTHESIS | `design-system/research/RESEARCH-SYNTHESIS.md` | ~TBD | Flagship experiment (2026-02-17) |

---

## 6. LLM VARIANCE MANAGEMENT

### 6.1 The Variance Problem

The same prompt + same content can produce different output on different runs. LLM output is non-deterministic. This means:

- A single run of Pipeline A and a single run of Pipeline B cannot distinguish enrichment effects from random variance.
- A PA-05 delta of +0.5 on a single run might be luck.

### 6.2 Ideal: Multiple Runs

| Runs per Pipeline-Content Pair | Statistical Power | Cost (Agents) | Calendar Time |
|-------------------------------|-------------------|---------------|---------------|
| 1 | None (anecdotal) | ~12 agents/run | ~2 hours |
| 2 | Low (can detect +1.0 delta) | ~24 agents/run | ~4 hours |
| 3 | Medium (can detect +0.5 delta) | ~36 agents/run | ~6 hours |
| 5 | Good (proper comparison) | ~60 agents/run | ~10 hours |

**Cost per run:** 1 builder + 1 orchestrator + 9 PA auditors + 1 weaver = 12 agents.
**Cost for 2 content files x 2 pipeline versions x 1 run each** = 4 runs = 48 agents.
**Cost for 2 content files x 2 pipeline versions x 3 runs each** = 12 runs = 144 agents.

### 6.3 Recommendation: 1-2 Runs per Cell (Pragmatic)

**Minimum viable experiment: 4 runs (1 per cell).**

| | Gas Town | RESEARCH-SYNTHESIS |
|--|----------|-------------------|
| Pipeline A (current) | 1 run | 1 run |
| Pipeline B (enriched) | 1 run | 1 run |

This gives 48 agents total and ~8 hours calendar time. It cannot distinguish +0.5 PA-05 delta from variance, but it CAN detect:

- Categorical changes: PA-05 jumping from FLAT (< 2.0) to DESIGNED (>= 3.0)
- Gate pattern shifts: SC-13 average going from 3 to 5
- Presence/absence of compositional concepts in builder reflection

**If the first 4 runs show promising deltas (>= +0.5), run 2 more replication runs on the most informative content (likely RESEARCH-SYNTHESIS).** This gives n=3 for the hardest test case at a cost of 24 additional agents.

### 6.4 Variance Controls (Per-Run)

Even with n=1 per cell, these controls reduce noise:

| Control | Method | Why |
|---------|--------|-----|
| Fixed builder model | Opus always | Model is the largest variance source |
| Fixed temperature | System default (no override) | Temperature affects creativity |
| Fixed prompt structure | Same spawn prompt template | Prompt phrasing affects output |
| Fixed gate order | Same gate runner | Gate failure order affects fix cycles |
| Fixed PA protocol | Same auditor assignments | Auditor question routing affects scores |
| Content hash verification | SHA-256 of content file before each run | Ensures identical input |

---

## 7. OVERFITTING RISK ASSESSMENT

### 7.1 What Could Go Wrong

**Risk 1: Optimizing for PA-05 instead of actual quality.**
PA-05 is a proxy for "is this DESIGNED?" scored by LLM auditors. If enrichment teaches the builder to produce output that SCORES well on PA-05 but does not actually look better to humans, we have overfit to the measurement instrument.

**Mitigation:** Tier 5 questions are designed to detect this. PA-60 through PA-67 ask about compositional depth that cannot be faked with surface compliance. If PA-05 improves but Tier 5 does not, the improvement is surface-level.

**Risk 2: Optimizing for gates instead of perception.**
This is the exact failure mode of the Flagship experiment. All programmatic gates passed. Perceptual audit failed catastrophically. The builder satisfied the letter of every gate while producing an imperceptible page.

**Mitigation:** The current gate runner already addresses this (SC-14 prevents sub-perceptual CSS, SC-09 enforces >= 15 RGB deltas). But the risk remains: enrichment could teach the builder to hit GATE THRESHOLDS precisely (e.g., background deltas of exactly 15 RGB) rather than producing genuinely perceptible variation.

**Detection:** Check whether gate measurements cluster near thresholds. If SC-09 shows deltas of 15-20 RGB in enriched output vs 25-40 RGB in baseline, the builder is threshold-hunting rather than composing.

**Risk 3: Training the measurement instrument.**
PA auditors are themselves LLMs. If enrichment embeds the same vocabulary that PA auditors use to score (e.g., "multi-coherence", "fractal self-similarity"), the builder might produce output that uses the RIGHT WORDS in ways auditors recognize, without the underlying visual reality.

**Mitigation:** PA auditors NEVER see the builder's vocabulary. They see screenshots only. The language barrier between builder (CSS) and auditor (perception) is the primary defense against vocabulary contamination.

**Risk 4: Content-specific overfitting.**
An enrichment that works on Gas Town but fails on RESEARCH-SYNTHESIS is content-specific. It learned the answer to one test, not the general principle.

**Mitigation:** Running both content types. Gas Town (easy) and RESEARCH-SYNTHESIS (hard) test different failure modes. An enrichment must improve both to be considered general.

### 7.2 Anti-Overfitting Checks

Run these checks on enriched output BEFORE declaring success:

| Check | Method | Overfitting Signal |
|-------|--------|-------------------|
| Threshold clustering | Plot SC-09 deltas, SC-13 channel counts, SC-11 type zone counts. Check for clustering at exact thresholds. | Values at threshold + 0-5% = threshold hunting |
| Vocabulary leakage | Search output.html source for enrichment vocabulary (scale names, channel names, mechanism names) | Enrichment terms appearing as visible text = vocabulary leak |
| Content-form coupling | Compare CSS structure between Gas Town and RESEARCH-SYNTHESIS runs | Identical CSS structure on different content = template behavior, not composition |
| Regression on soul | Verify all Tier B gates still pass | Soul violations in enriched output = compliance trade-off |
| Fresh-eyes validation | Have 1 Opus agent with ZERO pipeline context look at both outputs side-by-side. "Which looks more designed?" | If fresh-eyes disagrees with PA-05 scores, measurement is broken |

---

## 8. RECOMMENDED EXPERIMENT

### 8.1 Minimum Viable Experiment (MVE)

**Total cost:** 4 runs x 12 agents = 48 agents. ~8 hours calendar time.

**Phase 1: Baseline (2 runs)**

```
Run 1: /build-page gas-town-content.md → Pipeline A output
Run 2: /build-page research-synthesis.md → Pipeline A output
```

Collect: PA-05, Tier 5, all gate JSON, build log, CSS analysis.

**Phase 2: Enrichment Application**

Apply enrichments designed by agents #1-#8 to the pipeline files. The specific enrichments are:
- Conventions brief modifications (from agent #4)
- Orchestrator routing changes (from agent #6)
- Gate runner additions (from agent #5)
- Reference file routing changes (from agent #2, #3)

**Phase 3: Enriched Runs (2 runs)**

```
Run 3: /build-page gas-town-content.md → Pipeline B output
Run 4: /build-page research-synthesis.md → Pipeline B output
```

Collect: Same measurement battery as Phase 1.

**Phase 4: Comparison**

For each content file, compute:
- PA-05 delta (B minus A)
- Tier 5 delta (B minus A)
- SC-13 average delta (B minus A)
- Builder absorption count delta (B minus A)
- Gate regression count (gates that PASSED in A but FAILED in B)
- CSS analysis comparison (mechanism count, channel patterns, direction consistency)
- Anti-overfitting checks (threshold clustering, vocabulary leakage, fresh-eyes)

**Phase 5: Verdict**

| Outcome | Interpretation | Next Step |
|---------|---------------|-----------|
| All 4 success criteria met on BOTH contents | Enrichment validated | Ship enrichments to permanent pipeline |
| Success on Gas Town only | Content-specific enrichment | Investigate why RESEARCH-SYNTHESIS failed. Possibly content-dependent enrichment needed. |
| Success on RESEARCH-SYNTHESIS only | Counterintuitive -- enrichment helps hard content but hurts easy content | Investigate regression mechanism on Gas Town. |
| Failure on both | Enrichment does not help or actively hurts | Reject enrichments. Investigate why. |
| Mixed signals (PA-05 up, Tier 5 flat) | Surface improvement only | Enrichment needs compositional depth, not just compliance. |
| Variance-ambiguous (deltas < 0.5) | Cannot determine with n=1 | Run 2 more replication runs on RESEARCH-SYNTHESIS. |

### 8.2 Extended Experiment (If MVE Shows Promise)

If Phase 4 shows PA-05 delta >= +0.5 on either content:

```
Run 5-6: /build-page research-synthesis.md → Pipeline B output (2 replication runs)
```

This gives n=3 for Pipeline B on RESEARCH-SYNTHESIS. Compare the 3 PA-05 scores:
- If all 3 are >= 3.0: enrichment reliably helps on hard content.
- If 2/3 are >= 3.0: enrichment probably helps (variance margin).
- If 1/3 is >= 3.0: enrichment is unreliable.
- If 0/3 are >= 3.0: Run 3 was lucky. Enrichment does not reliably help.

Total extended experiment cost: 6 runs x 12 agents = 72 agents. ~12 hours.

### 8.3 What NOT to Do

**Do not run > 6 total runs.** Beyond 6 runs, the cost exceeds the enrichment effort itself. If 6 runs cannot demonstrate improvement, the enrichment is either too subtle to detect or does not work.

**Do not compare to historical experiments.** The Middle-tier 4/4, Flagship 1.5/4, and Remediation 2.5/4 scores were produced by DIFFERENT systems. Comparing `/build-page` output to these scores introduces system-level confounds. Only compare Pipeline A to Pipeline B within this experiment.

**Do not modify gates between runs.** If a gate threshold seems wrong, log it for post-experiment calibration. Changing gates mid-experiment invalidates comparison.

**Do not let the enrichment designer see PA auditor reports from baseline runs.** This prevents the enrichment from being reverse-engineered to satisfy specific auditor concerns. The enrichment should be designed from PRINCIPLES (compositional intelligence concepts), not from SYMPTOMS (specific auditor feedback).

---

## 9. MEASUREMENT INSTRUMENT CALIBRATION

### 9.1 First-Run Calibration Targets

The first MVE run provides calibration data for measurement instruments that have never been used with `/build-page`:

| Instrument | Calibration Question | Data Source |
|------------|---------------------|-------------|
| PA-05 sub-criterion scoring | Do the 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) produce similar scores, or is one consistently lower? | Weaver synthesis |
| Tier 5 question difficulty | Which Tier 5 questions (PA-60 through PA-67) are consistently YES vs consistently NO? | PA matrix |
| Inter-auditor agreement | On which questions do 9 auditors agree vs disagree? | PA matrix calibration targets |
| Gate diagnostic value | Which gates' measured values correlate with PA-05 scores? | Gate JSON vs PA-05 |
| Builder absorption baseline | How many compositional concepts does an unguided builder mention? | Build log analysis |
| DG-2 cross-validation tolerance | Are the engineering defaults (5 RGB, 1px, 0.01em) appropriate? | DG-2 discrepancy analysis |

### 9.2 Post-Experiment Gate Threshold Review

After all runs, review whether gate thresholds are appropriate:

| Gate | Review Question |
|------|----------------|
| SC-09 (>= 15 RGB) | Did any page PASS SC-09 but fail PA perception checks? If so, 15 RGB may be too low. |
| SC-10 (<= 120px) | Did any page PASS SC-10 but have perceptible whitespace voids? If so, 120px may be too high. |
| SC-13 (avg >= 4.0) | Is 4.0 the right average? If all successful pages average >= 5.0, the threshold is too generous. |
| SC-14 (letter-spacing) | Did the sub-perceptual gate catch ALL waste? Or did new waste patterns emerge? |

---

## 10. REPORTING FORMAT

### 10.1 Per-Run Report

Each run produces a `_run-manifest.md` (per SKILL.md spec). Additionally, for this experiment, each run should produce:

```markdown
## Experiment Run Report

### Identity
- Run ID: [A1/A2/B1/B2/B5/B6]
- Pipeline version: [A (current) / B (enriched)]
- Content file: [path + SHA-256]
- Timestamp: [ISO 8601]

### Primary Scores
- PA-05: [score] (DESIGNED: [n], COHERENT: [n], PROPORTIONATE: [n], POLISHED: [n])
- Tier 5: [count]/8 ([verdict label])

### Gate Summary
- Pass: [count]/17 blocking
- Fail: [list of failing gate IDs]
- SC-13 average: [value]
- SC-13B direction coherence: [%]

### Builder Absorption
- Concepts mentioned: [list]
- Absorption count: [N]/9
- Override count: [N]

### CSS Analysis
- Total CSS lines: [N]
- Mechanism count: [N]
- Component type count: [N]
- Grid layout count: [N]
- Unique font-sizes: [N]
- Sub-perceptual waste lines: [N]

### Fix Cycles
- Cycles used: [N]/3
- Fixes applied: [list]

### Anti-Overfitting
- Threshold clustering: [CLEAN / SUSPICIOUS]
- Vocabulary leakage: [CLEAN / LEAKED]
- Fresh-eyes: [N/A for baseline / AGREES / DISAGREES]
```

### 10.2 Comparison Report

After all runs, produce a comparison table:

```markdown
## Enrichment Comparison

| Metric | Gas Town A | Gas Town B | Delta | RESEARCH A | RESEARCH B | Delta |
|--------|-----------|-----------|-------|-----------|-----------|-------|
| PA-05 | | | | | | |
| Tier 5 | | | | | | |
| SC-13 avg | | | | | | |
| Absorption | | | | | | |
| Gate pass | | | | | | |
| Fix cycles | | | | | | |
| CSS lines | | | | | | |
| Mechanisms | | | | | | |

### Verdict
[VALIDATED / CONTENT-SPECIFIC / REJECTED / INCONCLUSIVE]

### Evidence
[Specific data points supporting verdict]

### Calibration Notes
[What we learned about measurement instruments]
```

---

## 11. IMPLEMENTATION CHECKLIST

Before starting the experiment:

- [ ] Verify Gas Town content file path and SHA-256
- [ ] Verify RESEARCH-SYNTHESIS content file path and SHA-256
- [ ] Verify `/build-page` SKILL.md is at expected version (408 lines)
- [ ] Verify gate-runner.md is at expected version (992 lines)
- [ ] Verify flagship-pa-questions.md is at expected version (144 lines)
- [ ] Verify conventions-brief.md is at expected version
- [ ] Document current pipeline file versions (git hash or line counts)
- [ ] Prepare enriched pipeline files (from agents #1-#8 outputs) but DO NOT install them
- [ ] Reserve ~8 hours for MVE (4 runs) or ~12 hours for extended experiment (6 runs)

During the experiment:

- [ ] Run A1 (Pipeline A, Gas Town): collect all outputs
- [ ] Run A2 (Pipeline A, RESEARCH-SYNTHESIS): collect all outputs
- [ ] CHECKPOINT: Review A1 and A2 outputs. Establish baseline scores. Log calibration data.
- [ ] Install enrichments (Pipeline A -> Pipeline B)
- [ ] Run B1 (Pipeline B, Gas Town): collect all outputs
- [ ] Run B2 (Pipeline B, RESEARCH-SYNTHESIS): collect all outputs
- [ ] CHECKPOINT: Compute deltas. Check success criteria. Run anti-overfitting checks.
- [ ] IF promising: Run B5-B6 (Pipeline B, RESEARCH-SYNTHESIS replication)
- [ ] Final comparison report

---

## 12. COST-BENEFIT FRAMING

### 12.1 Enrichment Cost

The enrichment research itself (agents #1-#11) represents ~50-100 agent-hours of analysis. The enrichment APPLICATION is ~2-4 hours of file editing. Total investment: ~100 agent-hours.

### 12.2 Measurement Cost

MVE: 4 runs x 12 agents x ~2 hours = ~96 agent-hours.
Extended: 6 runs x 12 agents x ~2 hours = ~144 agent-hours.

### 12.3 Break-Even

If `/build-page` is expected to be run ~50 times for full migration, even a small per-run quality improvement compounds. A PA-05 improvement of +0.5 means ~50 pages at DESIGNED instead of APPROACHING. The enrichment cost (~100 hours) amortizes to ~2 hours per page -- far less than the alternative of manual fix cycles.

The measurement cost (~96-144 hours) is a one-time validation cost. It should be viewed as insurance against shipping an enrichment that does not work or actively hurts quality.

### 12.4 When to Skip Measurement

If the enrichment is CLEARLY beneficial (e.g., fixing a missing reference file routing that causes a known failure), formal A/B measurement is overkill. Reserve the full experiment protocol for enrichments where the effect size is uncertain.

**Rule of thumb:** If you can predict the effect with > 90% confidence, skip formal measurement. If the effect is uncertain (which it usually is for "compositional intelligence" enrichments), measure.

---

## 13. OPEN QUESTIONS

1. **Temperature control:** Should we force temperature=0 for the builder to reduce variance? This trades variance reduction for creativity reduction -- counterproductive for compositional quality.

2. **Auditor blinding:** Should PA auditors know whether they are auditing Pipeline A or Pipeline B output? Current protocol: NO (auditors are always fresh-eyes with zero build context). This is correct by design.

3. **Content hash stability:** Does RESEARCH-SYNTHESIS.md change between runs? If the repo is active, git hash verification is needed.

4. **Cross-run contamination:** If the same Claude Code instance runs both Pipeline A and Pipeline B, does conversational context from A influence B? Mitigation: separate `/clear` between runs, or separate sessions.

5. **Gate calibration loop:** If the experiment reveals gate thresholds are wrong (e.g., SC-13 average >= 4.0 is too generous), should we adjust thresholds and re-run? Recommendation: log the finding, adjust AFTER the experiment, re-validate in the next experiment cycle.
