# Crack-Safe Instrumentation Architecture

**Agent:** crack-safe-architect (Opus)
**Date:** 2026-02-26
**Mission:** Design instrumentation that CANNOT propagate the pipeline's 14 crack dimensions.

---

## 0. Design Axiom

**Every instrumentation component must pass this 5-question filter:**

| # | Question | Reject If |
|---|----------|-----------|
| F1 | Does this add orchestrator cognitive load? | YES |
| F2 | Does this add agent prompt length? | YES |
| F3 | Is this extractable from existing artifacts? | NO (prefer YES) |
| F4 | Could this become another "prose instruction that gets ignored"? | YES |
| F5 | Does this increase the meta-to-output ratio? | YES and unmeasured |

If a component fails ANY of F1, F2, or F4, it is REJECTED. If it fails F3, it must justify why new collection is needed. If it fails F5, it must self-measure its own cost (the instrumentation must instrument ITSELF).

---

## 1. The 14 Crack Dimensions — Summarized with Instrumentation Implications

For each crack, I identify: what the crack IS, how instrumentation could PROPAGATE it, and the architectural constraint that prevents propagation.

### C-01: Prose Instruction Compliance (~72% at best)

**What:** LLM agents comply with ~72% of prose instructions. Each additional prose rule has diminishing compliance.

**Propagation risk:** Instrumentation that says "remember to log X" is prose. It will be followed ~72% of the time, producing unreliable data.

**Constraint:** ALL instrumentation data must be extracted POST-HOC from artifacts the pipeline already produces. Zero "remember to" instructions.

### C-02: Orchestrator Attention Degradation

**What:** Orchestrators managing 17+ agents over 90-120 minutes experience cognitive load. Late-pipeline decisions are worse than early ones.

**Propagation risk:** "After the weaver finishes, also run this analysis script" adds one more thing to the orchestrator's late-pipeline mental stack.

**Constraint:** All extraction runs AFTER the pipeline completes, in a separate phase with zero interaction with the running pipeline. The orchestrator does not know instrumentation exists during execution.

### C-03: Agent Prompt Bloat

**What:** Every line added to an agent's prompt reduces signal-to-noise ratio. Builders at 2,500 lines are near maximum effective capacity.

**Propagation risk:** "Include a structured metadata block in your output" adds 5-10 lines to every agent prompt.

**Constraint:** Zero agent prompt modifications. Instrumentation extracts from outputs agents already produce in their natural format.

### C-04: Information Compression Loss at Handoff Junctions

**What:** 50:1 compression from research to prompt means 98% information loss at handoffs. Each junction loses signal.

**Propagation risk:** If instrumentation data passes through agent handoffs, it gets compressed too. Summary statistics replace raw data.

**Constraint:** Instrumentation never passes through agent handoffs. All data stays in raw artifact form until post-hoc extraction reads it directly.

### C-05: Continuation Bias

**What:** A single agent cannot meaningfully self-revise. It will continue in its initial direction.

**Propagation risk:** Asking an agent to "evaluate the quality of your own output" produces unreliable self-assessment.

**Constraint:** Instrumentation never asks agents to self-measure. The builder's self-evaluation is already captured as a pipeline artifact; instrumentation reads it as DATA, not TRUTH.

### C-06: Recipe vs Checklist Format

**What:** Recipe format (sequenced verbs: Read, Select, Deploy, Assess) produces DESIGNED output. Checklist format (Verify, Fail if, Must be) produces FLAT output.

**Propagation risk:** If instrumentation outputs are checklists ("does this metric pass?"), the conversation layer inherits a checklist mentality.

**Constraint:** Instrumentation output is NARRATIVE (trajectory, story, comparison) not checklist. The post-run conversation presents trends and hypotheses, not pass/fail lists.

### C-07: Guardrail-to-Playbook Ratio (7.9:1)

**What:** Builders receive 7.9x more "what NOT to do" than "what TO do." This produces cautious, minimal output.

**Propagation risk:** If instrumentation flags mostly FAILURES and VIOLATIONS, the conversation becomes "what went wrong" instead of "what to try differently."

**Constraint:** Every failure signal must be paired with a directional signal. "PA-05 dropped 0.5" must be accompanied by "the sub-criterion that dropped was PROPORTIONATE, which historically responds to grid layout changes."

### C-08: Builder Visibility Cap (13.4%)

**What:** Builders see only 13.4% of total pipeline intelligence. Most knowledge never reaches the CSS-writing agent.

**Propagation risk:** If instrumentation data is visible only to the orchestrator, the same visibility asymmetry reproduces.

**Constraint:** Instrumentation outputs are structured for multiple audiences. The post-run conversation can present builder-relevant insights separately from orchestrator-relevant insights.

### C-09: Inverted Quality Routing

**What:** The best reference files go to planners who don't write CSS. Builders get constraints + prohibitions.

**Propagation risk:** If instrumentation recommends "send this finding to the planner," quality-relevant data gets routed away from the builder again.

**Constraint:** Instrumentation tracks WHO received WHAT and whether the recipient could ACT on it. Routing effectiveness is a first-class metric.

### C-10: CSS Budget Misallocation

**What:** Flagship spent 22% of CSS on imperceptible micro-typography. Budget went to invisible refinement instead of visible structure.

**Propagation risk:** Instrumentation that emphasizes "number of CSS lines" rewards bloat. "More CSS = better" is the wrong signal.

**Constraint:** CSS metrics must be PERCEPTUAL, not volumetric. Track "CSS lines per visible mechanism" and "CSS lines producing sub-threshold changes," not raw line count.

### C-11: S-09 Stacking Loophole

**What:** Individual spacing values pass the 96px gate but stacked values at section boundaries create 210-276px voids.

**Propagation risk:** Instrumentation that reports per-gate results without cross-gate analysis reproduces the loophole.

**Constraint:** Instrumentation must include COMPOSITE metrics that span multiple gates. The stacking check is already a gate (GR-14); instrumentation adds the cross-reference: "how many gates pass individually but fail in combination?"

### C-12: Sonnet vs Opus Model Gap

**What:** Sonnet complies meticulously; Opus complies AND creates beyond constraints. Builder model choice is highest-leverage.

**Propagation risk:** If instrumentation doesn't track builder model, the variable can't be analyzed.

**Constraint:** Builder model is already tracked in the execution tracker. Instrumentation extracts it and correlates with PA-05.

### C-13: Meta-to-Output Ratio Ratchet

**What:** Infrastructure grows monotonically. 2.6:1 at healthy, 660:1 at pathological. Rules accumulate without retirement.

**Propagation risk:** Instrumentation IS meta. Every line of instrumentation code increases the meta-to-output ratio.

**Constraint:** The instrumentation MUST measure its OWN cost. Every extraction script reports: (a) how many lines it adds to the meta corpus, (b) how long it took to run, (c) whether its output was used in the post-run conversation. If (c) is NO for 3 consecutive runs, the component self-sunsets.

### C-14: Complexity Accumulation Without Sunset

**What:** Rules only accumulate. The pipeline has no mechanism to retire rules that are always-pass or never-relevant.

**Propagation risk:** Instrumentation metrics accumulate too. "We tracked 47 metrics but only looked at 5."

**Constraint:** Every metric has a USAGE counter. Post-run conversation references are counted. Metrics referenced 0 times in 3 consecutive runs are flagged for sunset. The instrumentation deck SHRINKS by default.

---

## 2. Architecture: Three Layers, Zero Runtime Cost

### Layer 0: Artifact Inventory (what already exists)

Before designing ANY new collection, map what the pipeline already produces:

| Artifact | Format | Existing Data Points | Where |
|----------|--------|---------------------|-------|
| Content Map | Markdown (~30-50 lines) | Content type, heterogeneity, metaphor viability, section count, density arc | `p0-content-map.md` |
| Execution Brief | Markdown (~100-165 lines) | Tier line counts, zone backgrounds, recipe verbs, mode | `p1-execution-brief.md` |
| BV Gate Results | Embedded in tracker | BV-01 through BV-08 PASS/FAIL, revision cycles | Execution Tracker |
| Pass A HTML | HTML (~400-700 CSS lines) | Conviction statement, self-eval (7 questions), section count, CSS content | `p2a-*.html` |
| Structural Check Results | JSON or tracker | Identity gates, heading hierarchy, zone count, CSS floor | Execution Tracker |
| Pass B HTML | HTML (~800-1200 CSS lines) | Final artifact, conviction, self-eval, all CSS | `p2b-*.html` or `p2-*.html` |
| Gate Runner Results | JSON (~60 lines) | 57 gates: PASS/FAIL with detail strings, summary counts, verdict inputs | `p3a-gate-results.json` |
| Screenshots | PNG files | Visual state at 1440/1024/768px | `screenshots/` directory |
| 9 PA Auditor Reports | Markdown (~20-30k each) | Per-question scores, experiential pass, evidence, severity | `p3b-pa-auditor-{A-I}.md` |
| Integrative Report | Markdown | Gestalt synthesis, cross-cutting patterns, convergence | `p3b-integrative.md` |
| Weaver Diagnostic | Markdown | PA-05 (sub-criteria), Tier 5, verdict, fix types, emotional arc | `p3c-weaver-diagnostic.md` |
| Weaver Artistic | Markdown | Generative language, no scores | `p3c-weaver-artistic.md` |
| Execution Tracker | Markdown (~150 lines populated) | Timestamps, agent routing, gate results, iteration log | `EXECUTION-TRACKER.md` |
| Builder Self-Eval | HTML comments | 7 structured self-assessment answers | Inside HTML files |
| Builder Conviction | HTML comments | 3-sentence design intent | Inside HTML files |
| Builder IMPROVEMENTS | HTML comments | Builder's own ideas for improvement | Inside HTML files |
| Observer Report | Markdown | 30 binary compliance checks | `observer-report.md` |

**Total: 16 artifact types, all already produced by the pipeline.** This is the extraction surface.

### Layer 1: Post-Hoc Extraction Scripts

These run AFTER the pipeline completes. They read existing artifacts. They produce structured JSON. They add ZERO runtime cost.

Each extraction script:
- Takes ONE argument: the build output directory path
- Reads ONLY files that already exist in that directory
- Outputs ONE JSON file to a `_metrics/` subdirectory
- Reports its own execution time and output size

#### E-01: Timing Extractor

**Source artifacts:** Execution Tracker (timestamps), file modification times (`stat -f %m`)
**Extraction method:** Parse tracker timestamps + stat all output files
**Output:** `_metrics/timing.json`

```json
{
  "phases": {
    "phase0": {"start": "...", "end": "...", "duration_min": 12},
    "phase1": {"start": "...", "end": "...", "duration_min": 15},
    "phase2a": {"start": "...", "end": "...", "duration_min": 28},
    "phase2b": {"start": "...", "end": "...", "duration_min": 25},
    "phase3a": {"start": "...", "end": "...", "duration_min": 8},
    "phase3b": {"start": "...", "end": "...", "duration_min": 18},
    "phase3c": {"start": "...", "end": "...", "duration_min": 5}
  },
  "total_duration_min": 111,
  "improve_cycles": 1,
  "improve_durations_min": [65],
  "time_to_first_html_min": 55,
  "time_in_audit_min": 31,
  "audit_to_build_ratio": 0.56
}
```

**Crack safety:** Extracted entirely from file timestamps (F3=YES). No orchestrator action (F1=NO). No agent prompts (F2=NO). No prose instructions (F4=NO). Self-measures via `_meta.extraction_ms` field.

#### E-02: Quality Trajectory Extractor

**Source artifacts:** Gate results JSON (per cycle), Weaver diagnostic (per cycle)
**Extraction method:** Parse JSON gate results + regex-extract PA-05 scores from weaver reports
**Output:** `_metrics/quality-trajectory.json`

```json
{
  "cycles": [
    {
      "cycle": 0,
      "pa05": 2.0,
      "pa05_sub": {"designed": false, "coherent": false, "proportionate": false, "polished": true},
      "tier5": null,
      "gates_pass": 22,
      "gates_fail": 7,
      "gates_total": 30,
      "identity_fails": 2,
      "perception_fails": 2,
      "antipattern_fails": 1,
      "verdict": "REFINE",
      "fix_types": {"mechanical": 3, "structural": 2, "compositional": 0}
    },
    {
      "cycle": 1,
      "pa05": 3.5,
      "pa05_sub": {"designed": true, "coherent": true, "proportionate": true, "polished": true},
      "tier5": 9,
      "gates_pass": 19,
      "gates_fail": 6,
      "gates_total": 25,
      "identity_fails": 1,
      "perception_fails": 2,
      "antipattern_fails": 0,
      "verdict": "SHIP WITH FIXES",
      "fix_types": {"mechanical": 3, "structural": 2, "compositional": 0}
    }
  ],
  "pa05_delta_per_cycle": [1.5],
  "converged": true,
  "convergence_reason": "SHIP WITH FIXES verdict",
  "total_cycles": 2
}
```

**Crack safety:** Gate results JSON is machine-readable (F3=YES, trivial parse). Weaver PA-05 is in a predictable location in the diagnostic report. No runtime cost.

#### E-03: CSS Composition Extractor

**Source artifacts:** Pass A HTML, Pass B HTML (or combined HTML per cycle)
**Extraction method:** Extract `<style>` content, parse CSS properties, categorize by type
**Output:** `_metrics/css-composition.json`

```json
{
  "cycles": [
    {
      "cycle": 0,
      "total_css_lines": 1180,
      "custom_properties": 48,
      "component_types": 6,
      "component_instances": 46,
      "mechanism_count": 14,
      "channel_shifts": 4,
      "zones": 5,
      "budget_allocation": {
        "layout": 280,
        "typography": 210,
        "color": 180,
        "spacing": 170,
        "borders": 90,
        "responsive": 120,
        "animation": 0,
        "other": 130
      },
      "sub_perceptual_lines": 12,
      "sub_perceptual_pct": 1.0,
      "css_per_mechanism": 84.3,
      "css_per_zone": 236.0
    }
  ]
}
```

**Crack safety:** Extracted from HTML files that already exist (F3=YES). The CSS parser is a script, not an agent instruction. Specifically addresses C-10 (CSS budget misallocation) by categorizing WHERE CSS lines go, not just counting them.

#### E-04: PA Convergence Extractor

**Source artifacts:** 9 PA auditor reports + Integrative report + Weaver diagnostic
**Extraction method:** Regex extract per-question scores, severity levels, and experiential findings from all reports
**Output:** `_metrics/pa-convergence.json`

```json
{
  "cycles": [
    {
      "cycle": 0,
      "auditor_count": 9,
      "questions_answered": 82,
      "experiential_convergence": {
        "count": 9,
        "finding": "Dark zone content invisible",
        "threshold_met": true
      },
      "severity_distribution": {
        "blocking": 2,
        "significant": 3,
        "minor": 8,
        "cosmetic": 4
      },
      "inter_auditor_agreement": {
        "pa05_designed": {"pass": 1, "fail": 7, "conditional": 1},
        "pa05_coherent": {"pass": 2, "fail": 5, "conditional": 2},
        "pa05_proportionate": {"pass": 0, "fail": 9, "conditional": 0},
        "pa05_polished": {"pass": 3, "fail": 4, "conditional": 2}
      },
      "unique_findings_count": 17,
      "cross_auditor_patterns": 5
    }
  ]
}
```

**Crack safety:** All data exists in the 9+1+1 text reports. Extraction is pattern matching on structured markdown sections. No agents asked to produce extra data.

#### E-05: Gate-PA Divergence Extractor

**Source artifacts:** Gate results JSON + Weaver diagnostic
**Extraction method:** Compare gate PASS/FAIL with PA findings on the same dimension
**Output:** `_metrics/gate-pa-divergence.json`

```json
{
  "divergences": [
    {
      "dimension": "background_delta",
      "gate": "GR-11",
      "gate_status": "PASS",
      "pa_finding": "Z3-Z4 transition perceived as abrupt despite passing RGB delta",
      "pa_auditors_flagging": 7,
      "classification": "GATE_PASS_PA_FAIL",
      "explanation": "Programmatic RGB delta >= 15 but perceptual contrast insufficient in dark-to-light transition"
    },
    {
      "dimension": "heading_hierarchy",
      "gate": "GR-51",
      "gate_status": "FAIL",
      "pa_finding": "No auditor flagged heading hierarchy as a readability issue",
      "pa_auditors_flagging": 0,
      "classification": "GATE_FAIL_PA_PASS",
      "explanation": "h2->h4 skip is technically incorrect but perceptually invisible"
    }
  ],
  "summary": {
    "gate_pass_pa_pass": 18,
    "gate_pass_pa_fail": 3,
    "gate_fail_pa_pass": 4,
    "gate_fail_pa_fail": 5,
    "divergence_rate": 0.23
  }
}
```

**Crack safety:** This is the highest-value extraction because it directly addresses the core pipeline tension: programmatic verification != perceptual verification (a finding confirmed in every pipeline iteration). Both sources already exist as files. The divergence MAP is new analysis, but the DATA is not.

#### E-06: Agent Routing Extractor

**Source artifacts:** Execution Tracker (routing checklists)
**Extraction method:** Parse tracker routing verification sections
**Output:** `_metrics/agent-routing.json`

```json
{
  "agents": {
    "content_analyst": {
      "received": ["raw_content", "content_analysis_protocol", "reader_model"],
      "did_not_receive": ["gate_thresholds"],
      "routing_correct": true
    },
    "brief_assembler": {
      "received": ["content_map", "tc_brief_template", "soul_world_descriptions", "perception_thresholds", "recipe_phases", "dispositions"],
      "did_not_receive": ["gate_thresholds", "raw_prohibitions"],
      "routing_correct": true
    },
    "pass_a_builder": {
      "received": ["execution_brief", "tokens_css", "components_css", "mechanism_catalog", "value_tables"],
      "did_not_receive": ["gate_thresholds", "prohibitions", "research"],
      "model": "opus",
      "total_input_lines": 2340,
      "routing_correct": true
    }
  },
  "routing_violations": 0,
  "builder_input_lines": 2340,
  "builder_input_ceiling": 2500,
  "builder_visibility_pct": 14.2
}
```

**Crack safety:** Extracted from execution tracker which the orchestrator already fills. Directly measures C-08 (builder visibility cap) and C-09 (inverted quality routing) without adding any orchestrator burden.

#### E-07: Build Identity Extractor

**Source artifacts:** Content Map, Execution Brief, HTML conviction statement, Weaver artistic
**Extraction method:** Extract mode, metaphor, content type, emotional arc
**Output:** `_metrics/build-identity.json`

```json
{
  "content_type": "MIXED",
  "heterogeneity": "HIGH",
  "metaphor_viability": true,
  "mode": "COMPOSED",
  "conviction": {
    "metaphor": "gas town as descending industrial levels",
    "emotional_arc": "curiosity → technical depth → practical empowerment",
    "compositional_strategy": "dark/light zone alternation tracking conceptual depth"
  },
  "weaver_emotional_arc": {
    "authority": 8,
    "closure": 7,
    "surprise": 6,
    "delight": 4
  },
  "zone_count": 5,
  "section_count": 12
}
```

**Crack safety:** All fields extracted from existing artifacts. The conviction statement is already an HTML comment the builder writes as part of the recipe. Emotional arc is already in the weaver diagnostic.

### Layer 2: Derived Metrics (computed from Layer 1 outputs)

These are computed from Layer 1 JSON files. They require no additional artifact reading. They run as a second pass over the `_metrics/` directory.

#### D-01: Quality Efficiency Index

**Formula:** `QEI = PA-05_final / total_duration_hours`

This answers: "How much quality per hour did this run produce?"

**Inputs:** `timing.json` + `quality-trajectory.json`

#### D-02: Convergence Rate

**Formula:** `CR = PA-05_delta_per_cycle[0] / improve_cycle_duration_hours`

This answers: "How fast does the IMPROVE cycle add quality?"

**Inputs:** `timing.json` + `quality-trajectory.json`

#### D-03: Gate Relevance Score

**Formula:** For each gate: `GRS = 1 if gate result diverges from PA finding, 0 if aligned`

Aggregated: `overall_GRS = sum(divergent) / total_gates`

This answers: "What percentage of gates are measuring something the PA doesn't care about (or vice versa)?"

**Inputs:** `gate-pa-divergence.json`

#### D-04: CSS Efficiency Score

**Formula:** `CES = mechanism_count / (total_css_lines / 100)`

This answers: "How many visible mechanisms per 100 CSS lines?" Higher = more efficient. CD-006 baseline: ~14 mechanisms in ~1000 lines = 1.4.

**Inputs:** `css-composition.json`

#### D-05: Instrumentation Self-Cost

**Formula:** `ISC = sum(extraction_script_lines) + sum(output_json_lines)`

This answers: "How many meta-lines did instrumentation itself add?" Tracked per run to detect ratchet (C-13).

**Inputs:** Script file sizes + output file sizes

### Layer 3: Post-Run Conversation Data Package

The 7 Layer 1 JSON files + 5 Layer 2 derived metrics are packaged into a single `_metrics/summary.json` that serves as the data source for the post-run conversation. The conversation engine reads THIS file, not the raw artifacts.

This layer is the INTERFACE between instrumentation and the conversation engine. The conversation engine is a separate design concern (see `03-conversation-engine.md`).

---

## 3. Crack Safety Matrix

For each instrumentation component (7 extractors + 5 derived metrics), I assess against each crack dimension. Scale: IMMUNE (structurally impossible to propagate), SAFE (not propagated by design), RISK (could propagate without mitigation), PROPAGATES (actively propagates).

### Extraction Scripts (E-01 through E-07)

| Component | C-01 Prose | C-02 Orch Load | C-03 Prompt Bloat | C-04 Compression | C-05 Continuation | C-06 Recipe/Check | C-07 Guard/Play | C-08 Visibility | C-09 Routing | C-10 CSS Budget | C-11 Stacking | C-12 Model | C-13 Meta Ratio | C-14 Accumulation |
|-----------|-----------|-----------------|-------------------|-------------------|--------------------|--------------------|-----------------|-----------------|--------------|-----------------|----------------|------------|-----------------|-------------------|
| E-01 Timing | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[1] | SAFE[2] |
| E-02 Quality | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[3] | SAFE[4] | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[1] | SAFE[2] |
| E-03 CSS | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[5] | SAFE[6] | IMMUNE | SAFE[1] | SAFE[2] |
| E-04 PA Conv | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[4] | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[1] | SAFE[2] |
| E-05 Diverge | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[4] | IMMUNE | IMMUNE | IMMUNE | SAFE[6] | IMMUNE | SAFE[1] | SAFE[2] |
| E-06 Routing | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[7] | SAFE[8] | IMMUNE | IMMUNE | SAFE[9] | SAFE[1] | SAFE[2] |
| E-07 Identity | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | IMMUNE | SAFE[1] | SAFE[2] |

**IMMUNE count: 84/98 cells (85.7%). SAFE count: 14/98 cells (14.3%). RISK count: 0. PROPAGATES count: 0.**

### Notes on SAFE ratings:

1. **[1] C-13 Self-cost:** Each extractor adds ~50-100 lines of script + ~30-80 lines of JSON output. Total instrumentation: ~500 lines scripts + ~400 lines output = ~900 lines. Against a typical build producing ~3,000-5,000 lines of artifacts, this is a 0.18-0.30 meta-to-output ratio for instrumentation alone. ACCEPTABLE because the pipeline's existing meta is ~50,000+ lines — instrumentation adds <2% to the meta corpus. Self-measured via D-05.

2. **[2] C-14 Accumulation:** Each metric has a built-in usage counter. If a metric is referenced 0 times in the post-run conversation across 3 consecutive runs, it is flagged for removal. The instrumentation deck SHRINKS by default. This is the sunset mechanism the pipeline itself lacks.

3. **[3] C-06 Recipe format risk:** The quality trajectory presents PA-05 as a SCORE (number), which is inherently a checklist-style data point. Mitigated by Layer 3: the conversation engine transforms scores into narrative trajectory ("PA-05 improved from 2.0 to 3.5 in one IMPROVE cycle, the fastest convergence yet — the PROPORTIONATE sub-criterion flipped from FAIL to PASS, suggesting the grid restructuring was the key intervention").

4. **[4] C-07 Guardrail/Playbook balance:** Quality and convergence metrics report WHAT happened but not WHY or WHAT TO TRY. The conversation engine must pair each finding with directional guidance. This is a conversation-layer concern, not an extraction-layer concern. The extraction layer provides DATA; the conversation layer provides INTERPRETATION.

5. **[5] C-10 CSS budget:** E-03 explicitly categorizes CSS by type (layout, typography, color, spacing, borders, responsive, animation, other). This directly DETECTS C-10 instead of propagating it. If 22% of CSS is typography and mechanisms are low, E-03 surfaces that.

6. **[6] C-11 Stacking:** E-05 detects gate-PA divergence, which catches cases where GR-14 (stacking) passes but PA auditors perceive voids. E-03 measures spacing budget. Together they detect stacking loophole without adding gates.

7. **[7] C-08 Builder visibility:** E-06 computes `builder_visibility_pct` by dividing builder input lines by total pipeline intelligence. This MEASURES the cap instead of propagating it. If visibility drops below 10%, it's a signal.

8. **[8] C-09 Routing inversion:** E-06 captures what each agent received. If the mechanism catalog (the CSS-richest file) went to the planner but not the builder, E-06 surfaces it.

9. **[9] C-12 Model tracking:** E-06 records builder model from the execution tracker. No new tracking needed.

### Derived Metrics (D-01 through D-05)

All derived metrics inherit the IMMUNE/SAFE profile of their inputs. They add no new artifact reading. The only additional risk is C-13 (meta-to-output), mitigated by D-05 self-measurement.

---

## 4. What This Architecture Does NOT Do (and Why)

### Rejected: Real-time dashboards or live metrics

**Why rejected:** Would require the orchestrator to run a dashboard server during the pipeline (C-02 violation). Would require agents to emit structured events (C-03 violation). Would add "check the dashboard" prose instruction (C-01 violation).

### Rejected: Agent self-reporting of quality scores

**Why rejected:** Continuation bias (C-05) makes self-assessment unreliable. The pipeline already mitigates this with the two-pass build (Pass A/B = different agents) and fresh-eyes PA (no context). Asking agents to additionally self-score adds prompt burden (C-03) for unreliable data.

### Rejected: Per-agent token usage tracking

**Why rejected:** Token counts are API-level data not available in artifacts. Extracting them would require wrapping API calls (runtime modification = C-02 risk) or post-hoc log parsing (dependent on logging infrastructure not currently in the pipeline). DEFERRED until the orchestrator SDK exposes token metadata in a standard format.

### Rejected: Automated A/B testing within a single run

**Why rejected:** Running two builders with different configurations doubles runtime and halves the orchestrator's attention budget (C-02). A/B testing across RUNS (comparing run N to run N-1) is the correct approach — this is what the cross-run trend analysis dimension handles.

### Rejected: Instrumentation-specific agent prompts

**Why rejected:** Adding "also output your reasoning in JSON" to any agent prompt violates C-03 and C-01 simultaneously. The builder already outputs conviction + self-eval + HTML. The PA auditors already output per-question structured responses. Asking for MORE structured output reduces quality of PRIMARY output.

### Rejected: Orchestrator post-phase journaling

**Why rejected:** "After each phase, write 3 sentences about what you observed" adds 7 journaling steps to a pipeline that already has 17 agent management tasks. C-02 violation. The execution tracker already captures phase completion; that is sufficient.

---

## 5. Implementation Specification

### File Structure

```
build-output-dir/
  _metrics/                    # Created by instrumentation, not by pipeline
    timing.json                # E-01
    quality-trajectory.json    # E-02
    css-composition.json       # E-03
    pa-convergence.json        # E-04
    gate-pa-divergence.json    # E-05
    agent-routing.json         # E-06
    build-identity.json        # E-07
    derived.json               # D-01 through D-05
    summary.json               # Unified package for conversation engine
    _meta.json                 # Self-measurement: extraction time, script sizes, usage counters
```

### Execution Protocol

```
1. Pipeline runs to completion (no instrumentation involvement)
2. Orchestrator runs: `extract-metrics.sh <build-output-dir>`
3. Script sequentially runs E-01 through E-07
4. Script runs derived metric calculations (D-01 through D-05)
5. Script assembles summary.json
6. Script writes _meta.json (self-measurement)
7. Conversation engine reads summary.json
```

**Total added orchestrator burden:** One command after pipeline completion.

### Script Design Principles

Each extraction script (E-01 through E-07) is a FUNCTION in a single shell script or JS file. NOT a separate agent. NOT a separate prompt. A deterministic program that reads files and outputs JSON.

Why a script and not an LLM agent:
- Scripts have 100% instruction compliance (C-01 = IMMUNE)
- Scripts don't experience attention degradation (C-02 = IMMUNE)
- Scripts don't have prompts to bloat (C-03 = IMMUNE)
- Scripts don't compress information (C-04 = IMMUNE)
- Scripts don't have continuation bias (C-05 = IMMUNE)

The ONLY place an LLM is involved is the conversation engine that INTERPRETS the metrics — and that is a separate design.

### Self-Sunset Protocol

```json
// In _meta.json
{
  "run_number": 5,
  "extraction_time_ms": 3200,
  "total_script_lines": 480,
  "total_output_lines": 390,
  "metric_usage": {
    "timing": {"referenced_in_conversation": true, "consecutive_unused": 0},
    "quality_trajectory": {"referenced_in_conversation": true, "consecutive_unused": 0},
    "css_composition": {"referenced_in_conversation": false, "consecutive_unused": 2},
    "pa_convergence": {"referenced_in_conversation": true, "consecutive_unused": 0},
    "gate_pa_divergence": {"referenced_in_conversation": true, "consecutive_unused": 0},
    "agent_routing": {"referenced_in_conversation": false, "consecutive_unused": 1},
    "build_identity": {"referenced_in_conversation": false, "consecutive_unused": 2}
  },
  "sunset_candidates": ["css_composition", "build_identity"]
}
```

When `consecutive_unused >= 3`, the metric is flagged in `summary.json` as a sunset candidate. The conversation engine presents this to the user: "CSS composition metrics haven't been referenced in 3 runs. Remove from instrumentation?"

This is how instrumentation prevents C-14 (complexity accumulation) in ITSELF.

---

## 6. Crack Safety Summary

| Property | Value |
|----------|-------|
| Total instrumentation components | 12 (7 extractors + 5 derived) |
| Cells in crack safety matrix | 98 (7 extractors x 14 cracks) |
| IMMUNE cells | 84 (85.7%) |
| SAFE cells | 14 (14.3%) |
| RISK cells | 0 (0%) |
| PROPAGATES cells | 0 (0%) |
| Runtime cost during pipeline | ZERO |
| Agent prompt modifications | ZERO |
| New prose instructions | ZERO |
| Orchestrator actions during pipeline | ZERO |
| Orchestrator actions after pipeline | ONE (run extraction script) |
| Self-measurement | YES (D-05 + _meta.json) |
| Self-sunset mechanism | YES (usage counters, 3-run threshold) |
| LLM involvement in extraction | ZERO (all deterministic scripts) |

The architecture achieves structural immunity to all 14 crack dimensions by a single design choice: **all instrumentation is post-hoc extraction from existing artifacts by deterministic scripts.** No runtime cost. No agent modifications. No prose instructions. No orchestrator burden.

The only SAFE-rated (vs IMMUNE) cells are in the INTERPRETATION layer — how metrics are presented in the post-run conversation. That is a conversation engine design problem, not an instrumentation architecture problem.

---

## 7. Open Questions for Conversation Engine

These questions are NOT instrumentation questions — they are conversation engine questions that the instrumentation architecture surfaces but does not answer:

1. **How does the conversation engine transform scores into narrative?** (Mitigates C-06 recipe-vs-checklist in the presentation layer)
2. **How does the conversation engine pair failures with directional guidance?** (Mitigates C-07 guardrail-to-playbook ratio)
3. **How does the conversation engine present metrics for different audiences?** (Builder-relevant vs orchestrator-relevant insights — C-08, C-09)
4. **How does the conversation engine detect when a metric is trending vs noise?** (Cross-run analysis — deferred to dimension 8)
5. **How does the conversation engine handle the first run (no comparison baseline)?** (Cold start problem)

These are the interface points between this architecture and the conversation engine design (`03-conversation-engine.md`).
