# New Instrumentation Dimensions — Beyond the Existing 10

**Author:** Opus research agent (instrumentation-design team)
**Date:** 2026-02-26
**Scope:** Novel measurement dimensions not covered by the 10 existing dimensions (Economics, Time, Information Flow, Decision Quality, Gate Effectiveness, PA Calibration, Iteration Effectiveness, Cross-Run Trends, Builder Behavior, Meta-Instrumentation)
**Method:** Forensic analysis of yegge-gas-town build artifacts, retrospective reports, crack taxonomy, flagship analysis, weaver diagnostics, and execution tracker to identify recurring questions that lack data

---

## Summary: 15 New Dimensions

| # | Dimension | Conversation Type | Difficulty | 1-Run Value | 5-Run Value |
|---|-----------|------------------|------------|-------------|-------------|
| 11 | Content-Quality Correlation | Diagnostic + Comparative | Medium | Low | **Very High** |
| 12 | Prompt Archaeology | Diagnostic + Strategic | Medium | High | **Very High** |
| 13 | Emotional Arc Trajectory | Diagnostic + Comparative | Easy | **High** | Very High |
| 14 | Failure Pattern Taxonomy | Strategic + Comparative | Easy | **High** | Very High |
| 15 | Constraint Effectiveness | Strategic | Hard | Medium | **Very High** |
| 16 | Creative Agency vs Compliance | Diagnostic + Strategic | Medium | **High** | Very High |
| 17 | Information Density Metrics | Diagnostic + Comparative | Easy | Medium | High |
| 18 | Accessibility as Quality Proxy | Comparative | Trivial | Low | **High** |
| 19 | Component Library Utilization | Diagnostic + Strategic | Trivial | **High** | Very High |
| 20 | Cross-Agent Information Propagation | Diagnostic | Hard | **Very High** | Very High |
| 21 | Attention Budget Allocation | Diagnostic + Strategic | Medium | **High** | Very High |
| 22 | Brief-to-HTML Fidelity | Diagnostic | Medium | **Very High** | Very High |
| 23 | Perceptual vs Programmatic Divergence | Strategic | Easy | **High** | Very High |
| 24 | Rendering Environment Sensitivity | Diagnostic | Medium | Medium | **High** |
| 25 | Metaphor Depth Spectrum | Diagnostic + Comparative | Hard | High | **Very High** |

---

## Dimension 11: Content-Quality Correlation

### What questions it answers
- Does certain content inherently produce better pipeline results?
- What content features (word count, section count, heterogeneity, rhetorical variety, presence of lists/tables/code, reading level) predict PA-05 score?
- Is the pipeline better at prose-heavy or mixed-format content?
- Should content be pre-processed or restructured before pipeline entry?

### What data to collect

**At pipeline entry (Phase 0):**
```
content_word_count: 3,847
content_section_count: 14
content_format_types: [prose, list, code-block, table, blockquote, heading-hierarchy]
content_format_ratio: { prose: 0.62, list: 0.15, code: 0.12, table: 0.08, other: 0.03 }
content_reading_level: grade_12  (Flesch-Kincaid or similar)
content_heterogeneity: HIGH  (from Content Analyst)
content_metaphor_viability: YES  (from Content Analyst)
content_rhetorical_registers: [expository, argumentative, narrative, instructional]
content_register_count: 4
content_max_section_length: 847 words
content_min_section_length: 42 words
content_section_length_variance: 0.73  (coefficient of variation)
content_has_visual_elements: true  (diagrams, images described in markdown)
```

**At pipeline end:**
```
pa05_score: 3.5
tier5_score: 9/9
emotional_arc: { authority: 8, closure: 7, surprise: 6, delight: 4 }
```

### Why it matters for post-run conversations

Every post-run conversation starts with "why did this score X?" Content is the one variable the pipeline cannot control. If heterogeneity=HIGH correlates with PA-05>=3.0 across runs, that tells us the pipeline needs content with inherent compositional affordance. If long monolithic prose sections always produce flat zones, that tells us to add a content restructuring pre-step. Without this data, content is a confounding variable in every quality comparison.

The contrarian finding from the Flagship 4/4 Recipe research (N=4 dataset has confounded variables: model, format, content, team) is directly addressable by this dimension -- it isolates the content variable.

### Practical difficulty: Medium
Content features are computable from the source markdown. Heterogeneity and metaphor viability come from the Content Analyst output (already produced). The correlation requires 5+ runs to be meaningful, but the data collection adds ~0 effort per run (automated script against source markdown).

### Value after 1 run vs 5+ runs
- **1 run:** Low. A single data point establishes no correlation. Useful only as baseline.
- **5+ runs:** Very High. Correlation analysis reveals which content features predict quality, enabling content selection guidance and pre-processing recommendations.

---

## Dimension 12: Prompt Archaeology

### What questions it answers
- Which specific prompt phrasings drive agent behavior?
- Which rules in the spec are followed vs ignored vs misinterpreted?
- Do recipe-format instructions produce higher compliance than checklist-format?
- Does position in the prompt (early vs late) predict execution probability?
- Which disposition (D-01 through D-09) produces the strongest HTML fidelity?

### What data to collect

**Per prompt sent to any agent (brief, recipe, PA assignment):**
```
prompt_total_lines: 272
prompt_rule_count: 34  (unique imperative statements)
prompt_rules_executed: [
  { id: "D-01", text: "Content-register reading", position: 193, executed: true, evidence: "zone typography adapts" },
  { id: "D-07", text: "Edge intentionality: hover, selection, tabular-nums", position: 252, executed: "partial", evidence: "tabular-nums yes, hover no, selection yes" },
  { id: "Step 2.7", text: "Select hover behavior patterns", position: null, executed: false, evidence: "ABSENT FROM PROMPT" },
]
prompt_recipe_verb_count: 18
prompt_checklist_verb_count: 3
prompt_format_ratio: 6:1  (recipe:checklist)
prompt_judgment_rules: 0  (rules requiring subjective assessment)
prompt_binary_rules: 34  (rules with binary pass/fail)
```

**Derived metrics:**
```
execution_rate_by_position: { top_quartile: 94%, second: 87%, third: 71%, bottom: 52% }
execution_rate_by_format: { recipe: 91%, checklist: 67%, judgment: 12% }
disposition_fidelity: { D-01: 1.0, D-02: 0.9, ..., D-07: 0.4 }
```

### Why it matters for post-run conversations

The crack taxonomy identifies "Position Effect / Attention Decay" (Dimension 5) as a primary failure mechanism: D-07 appears at line 252 of 272 and was partially lost. The retrospective identifies "Recipe vs Checklist" as the single most important formatting insight. But these are qualitative observations from N=1. Prompt archaeology turns them into quantitative patterns: WHICH position matters, WHICH format matters, for WHICH types of instructions.

This dimension directly serves the "what to change strategically" conversation pattern. If D-07 has 40% fidelity across runs because it always appears last, the fix is structural (move it earlier, or split into a separate pass) rather than just adding more emphasis.

### Practical difficulty: Medium
Rule extraction from prompts requires manual annotation for the first run (identify each imperative statement). Subsequent runs can reuse the rule catalog. Execution verification requires comparing HTML output against each rule, which is partially automatable (grep for hover states, count border configs) but partially requires judgment (did the builder "read" the content register?).

### Value after 1 run vs 5+ runs
- **1 run:** High. Even one run reveals the position-vs-execution gradient and identifies which rules were ignored. The yegge-gas-town data already shows this pattern clearly.
- **5+ runs:** Very High. Statistical significance on which rules are reliably followed vs reliably dropped. Enables prompt restructuring to place fragile rules in high-attention positions.

---

## Dimension 13: Emotional Arc Trajectory

### What questions it answers
- How does the page's emotional arc (authority, closure, surprise, delight) relate to structural decisions?
- Does the REFINE cycle improve some emotional registers more than others?
- Is delight systematically the weakest register, or is this content-specific?
- What CSS patterns produce each emotional register?
- Can the pipeline predict emotional arc from the brief?

### What data to collect

**From weaver (already produced but not structured):**
```
emotional_arc_initial: { authority: 6, closure: 5, surprise: 4, delight: 2 }
emotional_arc_refine: { authority: 8, closure: 7, surprise: 6, delight: 4 }
emotional_arc_delta: { authority: +2, closure: +2, surprise: +2, delight: +2 }
weakest_register: "delight"
strongest_register: "authority"
```

**From PA auditors (extract from existing prose):**
```
delight_moments_count: 2  (dark inversion, threshold markers)
surprise_moments_count: 3  (complexity ladder, factory entry, pull-quote scale break)
closure_signals_count: 4  (footer bar, section numbering, density taper, color return)
authority_signals_count: 6  (serif headings, dark header, red accent, callout borders, structured tables, container discipline)
```

**Correlated with HTML features:**
```
hover_state_count: 1  (tr:hover only)
transition_count: 0  (no CSS transitions)
animation_count: 0
custom_selection_colors: 1  (partial -- Z1 only)
print_stylesheet: false
micro_typography_features: 2  (tabular-nums, ::first-letter on pull-quote)
```

### Why it matters for post-run conversations

The yegge-gas-town weaver scored delight 4/10 -- the weakest register by far. The flagship analysis traces this directly to hover loss (Step 2.7). But is delight ALWAYS the weakest? If 5 runs all show delight < 5, the pipeline has a structural delight deficit (maybe the recipe never communicates interaction patterns well). If delight varies with content type, the issue is content-specific.

This dimension also serves the "how does this compare" conversation. Instead of comparing PA-05 scores (a single number), you compare emotional arc shapes. Two pages scoring 3.5 might have very different arc shapes -- one with high authority/low delight, another with balanced registers. Arc shape is more diagnostic than the aggregate score.

### Practical difficulty: Easy
The weaver already produces emotional arc assessments. Structuring this as a JSON object (4 integers) adds ~5 lines to the weaver output template. Delight moment counting requires minor extraction from PA reports.

### Value after 1 run vs 5+ runs
- **1 run:** High. Identifies which register is weakest and what CSS patterns correlate with it.
- **5+ runs:** Very High. Reveals whether the pipeline has a structural bias (always weak on delight) or if it varies with content. Enables targeted recipe improvements for specific registers.

---

## Dimension 14: Failure Pattern Taxonomy (Crack Dimension Tracking)

### What questions it answers
- Are the same crack dimensions recurring across runs?
- Is the pipeline fixing old cracks and creating new ones?
- Which crack dimensions are structural (always present) vs situational?
- What is the pipeline's "failure signature"?

### What data to collect

**Per run, classify every finding into crack dimensions:**
```
cracks: [
  { dimension: "template_slot_absence", count: 2, items: ["hover Step 2.7", "signal Step 3.4c"], severity: "P1" },
  { dimension: "compression_loss", count: 3, items: ["spacing progressions", "typography combos", "recipe long tail"], severity: "P2" },
  { dimension: "voluntary_non_execution", count: 4, items: ["GR-48", "GR-60 rerun", "content-form fit", "S(x) function"], severity: "P0" },
  { dimension: "execution_recording_divergence", count: 5, items: ["L2 unfilled", "BV rubber stamps", "GR-05 hand-constructed", "GR-08 hand-constructed", "timestamp drift"], severity: "P0" },
  { dimension: "position_effect", count: 3, items: ["D-07 partial", "edge boundary channels", "preflight checkboxes"], severity: "P1" },
  { dimension: "dpr_rendering", count: 2, items: ["dark zone opacity", "768px total failure"], severity: "P0" },
  // ... 14 dimensions total from crack taxonomy
]
crack_summary: {
  total_instances: 28,
  unique_dimensions: 11,  // of 14 possible
  most_frequent: "execution_recording_divergence",
  most_severe: "voluntary_non_execution",
  new_since_last_run: ["dpr_rendering"],
  resolved_since_last_run: []
}
```

### Why it matters for post-run conversations

The crack taxonomy identified 14 dimensions in the yegge-gas-town build. Without tracking across runs, each retrospective rediscovers the same failure modes. The strategic conversation "what to change" needs to know: "is this a new crack or the same crack from 3 runs ago that we keep not fixing?" If template_slot_absence appears in every run, the fix priority escalates from "nice to have" to "structural deficiency."

The 14-dimension framework from the crack taxonomy (`ephemeral/builds/yegge-gas-town-2026-02-25/crack-analysis/01-crack-taxonomy.md`) provides the canonical classification. Each subsequent run maps its findings into this framework, enabling true cross-run comparison.

### Practical difficulty: Easy
The crack taxonomy already exists. Classification requires reading the retrospective findings and tagging each one. ~30 minutes of manual classification per run, automatable for some dimensions (template slot absence can be detected by BV-05, execution-recording divergence can be detected by L0-vs-L2 comparison).

### Value after 1 run vs 5+ runs
- **1 run:** High. The taxonomy itself is diagnostic -- it tells you which dimension to focus on.
- **5+ runs:** Very High. Reveals the pipeline's structural failure signature. If the same 4 dimensions appear in every run, those are architectural issues requiring redesign, not patch fixes.

---

## Dimension 15: Constraint Effectiveness

### What questions it answers
- Which pipeline constraints actually drive quality improvements?
- Which constraints are ignored by agents with zero consequence?
- Which constraints are counterproductive (the builder spends effort complying but the output is worse)?
- What is the ROI of each constraint?

### What data to collect

**Per constraint (gate, rule, disposition, prohibition):**
```
constraint_registry: [
  {
    id: "SC-01",
    text: "Container width 940-960px",
    type: "soul_prohibition",
    compliance: true,
    effort_estimate: "trivial",  // builder time spent
    quality_impact: "positive_high",  // PA auditor assessment
    removal_prediction: "catastrophic"  // what happens without it
  },
  {
    id: "D-09",
    text: "The Quiet Zone",
    type: "disposition",
    compliance: true,
    effort_estimate: "medium",
    quality_impact: "positive_medium",
    removal_prediction: "Z2 becomes cluttered"
  },
  {
    id: "SC-14",
    text: "No sub-perceptual CSS (letter-spacing < 0.025em)",
    type: "gate_threshold",
    compliance: true,
    effort_estimate: "trivial",
    quality_impact: "zero",  // preventing waste, not creating quality
    removal_prediction: "builder wastes 50-200 CSS lines on invisible effects"
  },
]
constraint_summary: {
  total_constraints: 57,
  complied: 49,
  ignored: 5,
  partially_complied: 3,
  positive_impact: 31,
  neutral_impact: 18,
  negative_impact: 2,  // constraints that HURT quality
  never_tested: 6
}
```

### Why it matters for post-run conversations

The flagship failure had a 7.9:1 guardrail-to-playbook ratio. The pipeline's defining lesson is "constraints don't create quality -- recipes do." But not all constraints are equal. SC-01 (container width) prevents the single most common failure mode. SC-14 (sub-perceptual CSS) prevents waste. D-09 (quiet zone) creates compositional breathing. Some constraints may be actively harmful -- forcing the builder to satisfy a threshold that conflicts with the metaphor's needs.

This dimension serves the "what to change strategically" conversation directly. If a constraint has 100% compliance but zero quality impact across 5 runs, it is a candidate for removal (reducing builder attention load). If a constraint has 40% compliance and high quality impact, it needs enforcement improvement. If a constraint has high compliance and negative impact, it needs redesign.

### Practical difficulty: Hard
Requires judgment calls about "quality impact" that resist automation. Impact can be assessed by comparing the constraint's intent against PA findings, but there is no simple metric. The "removal prediction" requires counterfactual reasoning. Best assessed as part of a structured retrospective, not automated.

### Value after 1 run vs 5+ runs
- **1 run:** Medium. One data point per constraint establishes the compliance baseline.
- **5+ runs:** Very High. Reveals which constraints are load-bearing vs decorative. Enables systematic constraint pruning and prioritization.

---

## Dimension 16: Creative Agency vs Compliance

### What questions it answers
- How much does the builder deviate from the brief?
- Does deviation correlate with quality (positive deviation = creative agency, negative deviation = ignoring specs)?
- At what point does compliance become overcompliance (satisfying thresholds but producing flat output)?
- Does the REFINE builder deviate more than the initial builder?

### What data to collect

**Per-brief specification vs HTML output:**
```
brief_specifications: [
  { id: "bg_z1", spec: "#FEF9F5", actual: "#FEF9F5", deviation: "none" },
  { id: "bg_z3", spec: "#1A1A1A", actual: "#1A1A1A", deviation: "none" },
  { id: "channels_z1_z2", spec: 4, actual: 2, deviation: "under (-2)" },
  { id: "channels_z2_z3", spec: 6, actual: 7, deviation: "over (+1)" },
  { id: "component_count", spec: "8+", actual: 6, deviation: "under (-2)" },
  { id: "metaphor", spec: "factory/refinery", actual: "factory/refinery with loading dock, factory floor, finishing bay", deviation: "extension (positive)" },
]
deviation_summary: {
  total_specs: 42,
  exact_match: 28,
  positive_deviation: 5,  // builder exceeded spec in quality-enhancing way
  negative_deviation: 7,  // builder fell short of spec
  creative_extension: 2,  // builder invented beyond spec
  deviation_quality_correlation: 0.6  // positive deviations correlate with higher PA scores
}
```

**REFINE builder specifically:**
```
refine_changes: {
  prescribed_by_artistic: 3,  // "turn on the lights," "mediate transition," "let factory be seen"
  creative_invention: 4,  // nav rail, back-to-top, threshold markers, font-weight shifts
  ratio_prescribed_to_creative: 0.75
}
```

### Why it matters for post-run conversations

The yegge-gas-town REFINE cycle is the strongest evidence for creative agency: the REFINE builder received only a conviction statement + artistic impression (53 lines total), yet invented sticky navigation, threshold markers, and multi-coherence refinements that no spec prescribed. 60% of the +1.5 PA-05 improvement came from revealing existing quality (compliance), but 15% came from fresh creative choices (agency).

The "recipe vs checklist" finding says compliance alone produces FLAT output. But the pipeline needs SOME compliance (container width, soul constraints). This dimension tracks the balance: where compliance is essential, where creative agency produces quality, and where the builder over-complies (e.g., spending CSS budget on imperceptible micro-typography per the flagship failure analysis: 22% of CSS on letter-spacing 0.001-0.01em).

### Practical difficulty: Medium
Brief-to-HTML comparison requires structured extraction from both documents. Background colors are trivially compared. Channel counts require running (or re-running) the gate runner. Creative extensions require judgment (is this deviation positive or negative?). Semi-automatable.

### Value after 1 run vs 5+ runs
- **1 run:** High. Reveals the compliance/agency balance for this specific build.
- **5+ runs:** Very High. Shows whether creative agency consistently produces quality gains, and at which spec points compliance matters most.

---

## Dimension 17: Information Density Metrics

### What questions it answers
- How dense is the final page, measured in content per viewport?
- Are there viewport-sized gaps (the "whitespace void" pattern)?
- Does density vary appropriately across zones (density arc compliance)?
- What is the relationship between density and PA scores?

### What data to collect

**From screenshots (automatable via Playwright):**
```
viewport_density: [
  { viewport: 1, text_percentage: 45, element_count: 12, content_type: "header + intro" },
  { viewport: 2, text_percentage: 62, element_count: 8, content_type: "biography + table" },
  { viewport: 3, text_percentage: 0, element_count: 0, content_type: "VOID" },  // dark zone invisible
  // ... per viewport
]
density_summary: {
  average_text_percentage: 38,
  void_viewports: 3,  // <10% content
  max_consecutive_voids: 19,  // the dark zone catastrophe
  density_arc_shape: "cliff",  // vs intended "ARCH"
  density_arc_match: false
}
```

**From HTML (automatable):**
```
content_per_zone: {
  z1: { words: 420, elements: 14, estimated_read_time_sec: 126 },
  z2: { words: 280, elements: 8, estimated_read_time_sec: 84 },
  z3: { words: 1847, elements: 42, estimated_read_time_sec: 554 },
  z4: { words: 890, elements: 22, estimated_read_time_sec: 267 },
  z5: { words: 410, elements: 11, estimated_read_time_sec: 123 },
}
total_estimated_read_time_min: 19.2
content_balance_coefficient: 0.58  // 0 = all in one zone, 1 = perfectly distributed
```

### Why it matters for post-run conversations

The whitespace void was the DOMINANT failure in multiple builds (9/9 auditors flagged it in the ceiling experiment, 9/9 flagged dark zone invisibility in yegge-gas-town initial). Density metrics would have caught this before PA deployment -- a void viewport is a number, not a judgment call.

This also serves the comparative conversation: is page A denser than page B? Does higher density correlate with higher PA-05? The density arc (CRESCENDO, ARCH, WAVE) is specified in the brief; comparing spec vs actual reveals whether the builder achieved the intended rhythm.

### Practical difficulty: Easy
Viewport text percentage is computable via Playwright (`document.body.innerText.length` within viewport bounds). Element counting is trivial. Read time estimation is word_count / 200. The gate runner already traverses the DOM; density metrics add minimal code.

### Value after 1 run vs 5+ runs
- **1 run:** Medium. Identifies voids and arc shape for this build.
- **5+ runs:** High. Reveals whether certain content types always produce voids, whether the density arc spec is reliably achieved, and what density patterns correlate with higher PA scores.

---

## Dimension 18: Accessibility as Quality Proxy

### What questions it answers
- Does WCAG compliance correlate with overall visual quality?
- Are accessibility failures a leading indicator of quality issues?
- Does the REFINE cycle improve or degrade accessibility?

### What data to collect

**From gate runner (partially existing, GR-60):**
```
accessibility: {
  wcag_violations_initial: 48,  // GR-60 pre-REFINE
  wcag_violations_refine: null,  // GR-60 NOT RERUN post-REFINE
  aria_landmarks: 6,  // GR-13
  skip_link: true,  // GR-14
  heading_hierarchy_valid: false,  // GR-51 initially, fixed in REFINE
  color_contrast_ratio_min: 1.2,  // the dark zone catastrophe
  color_contrast_ratio_max: 12.1,
  keyboard_navigable: "untested",
  focus_indicators: "untested"
}
```

**Correlation with PA-05:**
```
accessibility_pa_correlation: {
  run_1: { wcag_violations: 48, pa05: 2.0 },
  run_1_refine: { wcag_violations: "unknown", pa05: 3.5 },
  // accumulates across runs
}
```

### Why it matters for post-run conversations

The yegge-gas-town build had 48 WCAG violations that directly caused the 2.0 PA-05 score. Accessibility and visual quality are correlated because they share root causes: contrast failures are both accessibility violations AND perceptual failures. If this correlation holds across runs, WCAG violation count becomes a fast quality predictor -- run the accessibility check before the full PA, and if violations > threshold, fix first.

GR-60 was NOT rerun after REFINE (Dimension 3: Voluntary Non-Execution). This is itself data: the pipeline does not track accessibility delta across cycles.

### Practical difficulty: Trivial
GR-60 already exists. Making it mandatory post-REFINE and recording both values adds 2 lines to the execution tracker and 0 code changes.

### Value after 1 run vs 5+ runs
- **1 run:** Low. One data point establishes the pattern but not the correlation.
- **5+ runs:** High. If WCAG violations consistently predict PA-05 (even roughly), it becomes a cheap pre-screening metric that saves PA audit costs on obviously deficient builds.

---

## Dimension 19: Component Library Utilization

### What questions it answers
- How much of the design system component library (components.css) is used per build?
- Is library utilization increasing or decreasing across pipeline versions?
- Which components are never used? Which are overused?
- Does higher utilization correlate with higher quality?

### What data to collect

**From HTML output (automatable):**
```
component_utilization: {
  available_in_library: 26,  // from component-inventory.md
  used_in_build: 6,
  utilization_rate: 0.23,
  components_used: ["callout", "pull-quote", "blockquote-accent", "code-block", "table-wrapper", "section-header"],
  components_available_unused: ["card-grid", "progress-bar", "accordion", "tab-panel", ...],
  classes_from_library: 5,  // GR-46 counts
  target: 8,
  deficit: 3,
  builder_declared_components: null,  // A-05 not yet implemented
}
```

**Cross-run tracking:**
```
component_usage_history: {
  "callout": { used_in: [1, 2, 3, 4, 5], usage_rate: 1.0 },
  "pull-quote": { used_in: [1, 3, 5], usage_rate: 0.6 },
  "card-grid": { used_in: [], usage_rate: 0.0 },  // DEAD component?
  // ...
}
```

### Why it matters for post-run conversations

CD-006 (the CEILING reference) used 18 component types. The yegge-gas-town build used 5-6. The adversarial review upgraded component adoption from P2 to P1 precisely because this 3x regression matters: the library exists to provide structural variety that prevents visual monotony.

But the question is nuanced. High utilization of INAPPROPRIATE components is worse than low utilization of appropriate ones. A page about a person's philosophy doesn't need card-grid; forcing it degrades quality. This dimension tracks the balance: is the builder making informed choices (low utilization + high quality = the page didn't need more components) or lazy choices (low utilization + low quality = the builder didn't read components.css)?

### Practical difficulty: Trivial
CSS class matching against the component inventory is fully automatable. `grep -c` against the HTML for each component class. ~10 lines of JavaScript in the gate runner.

### Value after 1 run vs 5+ runs
- **1 run:** High. Immediately reveals whether the builder engaged with the library.
- **5+ runs:** Very High. Component usage patterns across runs reveal which components are practical (always used) vs theoretical (in inventory but never deployed). Dead components should be removed; always-used components should be enriched.

---

## Dimension 20: Cross-Agent Information Propagation

### What questions it answers
- What percentage of Content Analyst insights reach the final HTML?
- What does the Brief Assembler add that isn't in the Content Map?
- What does the builder add that isn't in the Brief?
- Where does information originate, and where does it die?

### What data to collect

**Trace specific insights through the pipeline:**
```
propagation_trace: [
  {
    insight: "Content has industrial/manufacturing vocabulary (pipelines, valves, pressure)",
    origin: "Content Analyst (Content Map line 23)",
    in_brief: true,  // Brief maps this to factory metaphor
    in_html: true,   // HTML uses --factory-floor, --loading-dock CSS custom properties
    propagation: "FULL"
  },
  {
    insight: "Section 8 has comparison table structure (vs patterns, tradeoffs)",
    origin: "Content Analyst (Content Map line 41)",
    in_brief: false,  // Brief doesn't mention this section's table structure
    in_html: "partial",  // Tables exist but not comparison-styled
    propagation: "PARTIAL_LOSS"
  },
  {
    insight: "Hover behavior vocabulary should include link transitions",
    origin: "Recipe Step 2.7",
    in_brief: false,  // Template has no slot for this
    in_html: false,   // Zero link hover transitions
    propagation: "COMPLETE_LOSS"
  },
]
propagation_summary: {
  content_analyst_insights: 18,
  reached_brief: 14,
  reached_html: 11,
  full_propagation_rate: 0.61,
  brief_assembly_loss_rate: 0.22,
  builder_execution_loss_rate: 0.18,
  brief_assembler_additions: 8,  // things in brief NOT from content map
  builder_additions: 5,  // creative extensions not in brief
}
```

### Why it matters for post-run conversations

The information loss analysis for yegge-gas-town traced 7 specific losses: hover vocabulary, signal declarations, S(x) function, GR-48, 1024px viewport, tracker L2, and integrative auditor timing. But this was done by 10 retrospective agents reconstructing what happened. This dimension SYSTEMATIZES that trace so it happens automatically.

The core question in post-run conversations is "why didn't the builder do X?" The answer is almost always "because X never reached the builder." Propagation tracking makes this visible without retrospective archaeology.

This is the single most diagnostic dimension for the "root cause" conversation pattern. It replaces 10 agents with a data structure.

### Practical difficulty: Hard
Requires manual annotation of "insights" in Content Map, Brief, and HTML. The insight boundary is fuzzy (what counts as one insight vs a cluster?). Partially automatable for specific categories (background hex values trivially traced, metaphor naming trivially traced), but holistic propagation requires judgment. Consider a simplified version: trace only the 9 dispositions (D-01 through D-09) and the recipe steps (20 numbered items). That reduces the trace to ~30 items with clear definitions.

### Value after 1 run vs 5+ runs
- **1 run:** Very High. Immediately reveals the pipeline's information loss map for this build. Replaces retrospective archaeology.
- **5+ runs:** Very High. Reveals structural loss patterns: if D-07 is always lost and D-01 always survives, the fix is structural (move D-07 earlier, or split into its own pass).

---

## Dimension 21: Attention Budget Allocation

### What questions it answers
- Where does the builder spend its "attention" (measured by CSS lines, detail level, time)?
- Does the builder front-load quality (strong opening, weak ending) or distribute evenly?
- How does attention allocation correlate with PA findings?
- Does the REFINE builder allocate attention differently than the initial builder?

### What data to collect

**From HTML output (automatable):**
```
attention_by_zone: {
  z1: { css_lines: 120, html_lines: 280, mechanisms: 8, unique_components: 4 },
  z2: { css_lines: 60, html_lines: 180, mechanisms: 3, unique_components: 2 },
  z3: { css_lines: 310, html_lines: 890, mechanisms: 14, unique_components: 6 },
  z4: { css_lines: 140, html_lines: 420, mechanisms: 7, unique_components: 4 },
  z5: { css_lines: 70, html_lines: 200, mechanisms: 4, unique_components: 3 },
}
attention_distribution: {
  coefficient_of_variation: 0.62,
  front_loading_ratio: 0.26,  // z1 as fraction of total
  dramatic_center_ratio: 0.44,  // z3 as fraction of total
  tail_ratio: 0.10,  // z5 as fraction of total
}
css_budget_allocation: {
  total_css_lines: 700,
  structural_css: 280,  // grid, layout, container
  decorative_css: 180,  // borders, backgrounds, colors
  typography_css: 120,  // font-size, weight, spacing, line-height
  interactive_css: 20,   // hover, transitions, selection
  responsive_css: 80,   // media queries, breakpoints
  sub_perceptual_css: 20,  // letter-spacing < 0.025em, bg delta < 15 RGB
  sub_perceptual_percentage: 0.029  // vs flagship's catastrophic 0.22
}
```

### Why it matters for post-run conversations

The flagship failure analysis found 22% of CSS budget spent on imperceptible micro-typography. The yegge-gas-town build spent 85% of the CSS delta at the Z2-Z3 boundary (dramatic center) and left edge boundaries at 2 channels instead of the specified 4. Both are attention allocation failures.

This dimension makes the builder's attention visible. If every builder front-loads quality at the dramatic center and neglects the edges, the recipe needs to address edge quality explicitly (maybe with a second pass focused on edges).

The CSS budget allocation is particularly valuable: it catches the "sub-perceptual waste" pattern where the builder spends significant effort on invisible effects. The 22% threshold from the flagship failure is a concrete alert level.

### Practical difficulty: Medium
CSS line counting per zone requires parsing the HTML and associating CSS rules with HTML elements -- doable but not trivial. Mechanism counting per zone uses the mechanism catalog as reference. The gate runner already traverses zone boundaries; extending it to count CSS properties per zone adds moderate code.

### Value after 1 run vs 5+ runs
- **1 run:** High. Immediately reveals attention distribution and budget allocation for this build.
- **5+ runs:** Very High. Reveals whether builders consistently neglect edges, whether REFINE builders redistribute attention, and what CSS budget shapes correlate with higher PA scores.

---

## Dimension 22: Brief-to-HTML Fidelity

### What questions it answers
- For every specific value in the brief, does the HTML match?
- What is the brief's "hit rate" -- fraction of specifications that survive into the output?
- Which categories of specifications have the highest/lowest fidelity?
- Does brief length correlate with fidelity?

### What data to collect

**Structured comparison of every testable spec in the brief:**
```
brief_fidelity: [
  { category: "background", spec: "#FEF9F5", actual: "#FEF9F5", match: true },
  { category: "background", spec: "#F5F0E8", actual: "#F5F0E8", match: true },
  { category: "channels", spec: "Z1->Z2: 4", actual: 2, match: false, delta: -2 },
  { category: "metaphor", spec: "factory/refinery", actual: "factory/refinery", match: true },
  { category: "component_target", spec: "8+", actual: 6, match: false, delta: -2 },
  { category: "density_arc", spec: "ARCH", actual: "cliff->ARCH (after REFINE)", match: "partial" },
  { category: "zone_count", spec: 5, actual: 5, match: true },
  { category: "font_hierarchy", spec: "Instrument Serif for display", actual: true, match: true },
  // ...
]
fidelity_summary: {
  total_testable_specs: 42,
  exact_match: 28,
  partial_match: 7,
  no_match: 5,
  not_testable: 2,
  fidelity_rate: 0.667,  // exact matches / total
  fidelity_by_category: {
    background: 1.0,
    typography: 0.85,
    spacing: 0.70,
    channels: 0.50,
    components: 0.60,
    interaction: 0.0,  // hover states
  }
}
```

### Why it matters for post-run conversations

This is the most direct diagnostic dimension. When the weaver says "PA-05 3.5 but delight is 4/10," the immediate question is "why?" Brief-to-HTML fidelity answers: "because the brief specified hover behaviors and the HTML has none; because the brief specified 4 channels at Z1-Z2 and the HTML has 2."

The fidelity rate also calibrates the brief itself. If background specifications have 100% fidelity but channel specifications have 50%, the brief needs to encode channel specs more forcefully (binary rules with concrete numbers, not descriptive prose). The category breakdown is the actionable part.

### Practical difficulty: Medium
Backgrounds are trivially extracted. Font families are trivially checked. Channel counts require running the gate runner's multi-coherence check per boundary. Component counts are automated. The challenge is defining "testable spec" -- some brief content is intentionally vague ("the density should taper") and doesn't have a binary match/no-match. Best to focus on the 30-40 specs that ARE testable: hex values, counts, binary features.

### Value after 1 run vs 5+ runs
- **1 run:** Very High. Immediately shows where the brief was followed and where it was ignored.
- **5+ runs:** Very High. Reveals systematic fidelity patterns: which spec categories are reliably executed and which require reinforcement.

---

## Dimension 23: Perceptual vs Programmatic Divergence

### What questions it answers
- Where do gate results say PASS but PA auditors say FAIL (or vice versa)?
- Which gates are good predictors of perceived quality and which are meaningless?
- What perceptual qualities are unmeasured by any gate?
- How much PA variance is explained by gate results?

### What data to collect

**Per gate, correlate with PA findings:**
```
gate_pa_divergence: [
  {
    gate: "GR-11",
    gate_result: "PASS (3 of 6 channels)",
    pa_finding: "Edge boundaries feel flat -- only 2 channels perceived (C, E auditors)",
    divergence: "GATE_OVER_REPORTS",
    explanation: "Gate counts CSS properties changed; auditors evaluate perceptual impact. 3 CSS channel shifts may be imperceptible if deltas are small."
  },
  {
    gate: "GR-13",
    gate_result: "PASS (6 ARIA landmarks)",
    pa_finding: "No auditor mentions accessibility positively or negatively",
    divergence: "GATE_IRRELEVANT",
    explanation: "ARIA landmarks don't affect visual perception. Gate measures technical compliance, not perceptual quality."
  },
  {
    gate: "GR-51",
    gate_result: "FAIL (h4 before h3)",
    pa_finding: "Auditors B, D note heading hierarchy feels broken",
    divergence: "ALIGNED",
    explanation: "Gate and PA agree: heading hierarchy is wrong."
  },
]
divergence_summary: {
  total_gates: 30,
  aligned_with_pa: 18,
  gate_over_reports: 5,  // gate says fine, PA says problem
  gate_under_reports: 2,  // gate says problem, PA doesn't notice
  gate_irrelevant: 5,  // gate checks something PA never comments on
  pa_perception_unmeasured_by_gates: 8,  // PA findings with no corresponding gate
  unmeasured_perceptions: ["scroll fatigue", "zone transition abruptness", "emotional delight", "navigation absence", "dark zone contrast", "component repetition", "section opening monotony", "footer adequacy"]
}
```

### Why it matters for post-run conversations

"Programmatic verification is not perceptual verification" is a core finding repeated across multiple retrospectives. The flagship experiment passed all gates but failed perceptually. The yegge-gas-town initial build failed perceptually in ways no gate caught (dark zone invisibility was a DPR-specific rendering issue outside gate measurement).

This dimension quantifies the gap. It answers: "can we trust the gates?" and "which PA findings should become new gates?" The 8 unmeasured perceptions in the example above are candidates for new gates or new PA questions. Over 5+ runs, this dimension evolves the gate system toward genuine quality prediction.

### Practical difficulty: Easy
Gate results are structured JSON. PA findings are prose but classifiable by the retrospective agent. The correlation is manual but structured (~30 minutes per run). The value is in the "unmeasured" list -- perceptual qualities no gate catches.

### Value after 1 run vs 5+ runs
- **1 run:** High. Reveals which gates are trustworthy and which PA findings are ungated.
- **5+ runs:** Very High. Shows whether the gate system is converging toward perceptual reality or diverging. Enables evidence-based gate creation and retirement.

---

## Dimension 24: Rendering Environment Sensitivity

### What questions it answers
- Does the page look different at different DPR values?
- Which CSS patterns are DPR-sensitive?
- Does the screenshot capture environment match the intended viewing environment?
- Are there rendering differences between browsers?

### What data to collect

**Per build, record environment and rendering:**
```
rendering_environment: {
  dpr: 0.667,  // yegge-gas-town's DPR
  dpr_workaround_applied: true,  // 960x600 -> 1440x900 CSS viewport
  screenshot_tool: "Playwright Chromium",
  screenshot_count: 53,
  dark_screenshots: 8,  // screenshots where content is invisible due to rendering
  dark_screenshot_percentage: 0.15,
}
dpr_sensitivity: {
  elements_affected_by_dpr: ["rgba opacity values", "thin borders", "subtle backgrounds"],
  elements_dpr_safe: ["solid backgrounds", "text", "thick borders"],
  estimated_pa05_at_dpr_1: "3.5+",  // the REFINE result suggests full-DPR would have been higher
  estimated_pa05_at_dpr_0667: "2.0",  // initial score was largely DPR-caused
  dpr_pa05_gap: 1.5,
}
```

### Why it matters for post-run conversations

The yegge-gas-town build lost 1.5 PA-05 points to DPR rendering. The initial builder wrote CSS assuming DPR 1.0 (standard), but screenshots were captured at DPR 0.667. This caused rgba opacity values to render as invisible on the dark background. 60% of the REFINE improvement was simply revealing existing quality by fixing contrast.

This is a confounding variable in every build comparison. If one run uses DPR 1.0 and another uses DPR 0.667, their PA-05 scores are not comparable. Recording the rendering environment and its known sensitivity enables correct comparisons.

### Practical difficulty: Medium
DPR is already recorded in the execution tracker. The sensitivity analysis (which CSS patterns are affected) requires one-time research, not per-run measurement. The dark-screenshot count is a simple automated check. The "estimated PA-05 at different DPR" requires the REFINE delta analysis to separate rendering fixes from quality improvements.

### Value after 1 run vs 5+ runs
- **1 run:** Medium. Documents the environment and flags DPR as a confound.
- **5+ runs:** High. If all builds use the same DPR, the confound is eliminated. If DPR varies, this dimension provides the correction factor for fair comparison.

---

## Dimension 25: Metaphor Depth Spectrum

### What questions it answers
- How "deep" is the metaphor -- ANNOUNCED (labels only), STRUCTURAL (organizes layout), or ATMOSPHERIC (generates micro-decisions)?
- What specific CSS decisions are metaphor-derived vs convention-derived vs arbitrary?
- Does metaphor depth correlate with PA-05 and Tier 5 scores?
- At what point does deeper metaphor produce diminishing returns?

### What data to collect

**Per build, classify metaphor application:**
```
metaphor_depth: {
  metaphor_name: "factory/refinery",
  metaphor_type: "industrial/manufacturing",
  depth_classification: "STRUCTURAL",  // from flagship analysis: structural but not yet atmospheric
  evidence: {
    labels: 5,  // "Loading Dock", "Inspection Bay", "Factory Floor", etc.
    css_custom_properties: 8,  // --loading-dock, --factory-floor, etc.
    layout_decisions_derived: 3,  // dark inversion = interior, zone count = building floors, density arc = production flow
    component_adaptations_derived: 2,  // callouts modulate per zone, table styling varies
    micro_css_decisions_derived: 0,  // no letter-spacing, hover, or selection from metaphor
    total_metaphor_derived_decisions: 18,
    total_css_decisions: 87,
    metaphor_derivation_rate: 0.207,
  },
  depth_score: {
    announced: 5,  // labels present
    structural: 3,  // layout organized by metaphor
    atmospheric: 0,  // no micro-decisions from metaphor
    total: 8,  // out of hypothetical 15
  },
  tier5_correlation: {
    pa60_voice_independence: "YES",
    pa61_fractal_micro: "YES",
    pa62_cross_section_dialogue: "YES -- factory floor references earlier loading dock",
    pa63_structural_not_labeling: "CONDITIONAL -- structural but approaching atmospheric",
    // ...
  }
}
```

### Why it matters for post-run conversations

The flagship analysis synthesis explicitly defines the gap between 3.5 and 4.0 PA-05 as the gap between STRUCTURAL metaphor and ATMOSPHERIC metaphor. The page "organizes by factory" but doesn't "breathe like a factory" -- no stencil-font tracking on labels, no mechanical grid rhythm, no heat-signature backgrounds.

Tracking metaphor depth per run enables the conversation: "is the pipeline getting deeper over time?" and "which content types enable atmospheric depth?" If the metaphor derivation rate stays at 20% across runs, the pipeline needs structural changes to enable deeper metaphor application (maybe a dedicated micro-CSS disposition that maps metaphor to letter-spacing, hover, selection).

### Practical difficulty: Hard
Metaphor depth classification requires judgment. Counting labels is trivial. Counting CSS decisions "derived from" the metaphor requires understanding the metaphor's implications -- would a factory metaphor predict this spacing value? This is inherently subjective. Best approached as a structured rubric (5 categories, 3 levels each) rather than an exact count.

### Value after 1 run vs 5+ runs
- **1 run:** High. Classifies the metaphor depth and identifies the gap to atmospheric.
- **5+ runs:** Very High. Reveals whether the pipeline systematically produces shallow metaphors (a structural problem) or if depth varies with content (a content-selection problem). The tier system evolution (Floor -> Middle -> Ceiling -> Flagship) is directly measured by this dimension.

---

## Implementation Priority

### Tier 1: Implement Immediately (high value, low effort)

| Dim | Name | Effort | Why Now |
|-----|------|--------|---------|
| 13 | Emotional Arc Trajectory | ~5 lines in weaver template | Weaver already produces this; just structure it |
| 14 | Failure Pattern Taxonomy | ~30 min classification per run | Crack taxonomy exists; just track across runs |
| 19 | Component Library Utilization | ~10 lines JS in gate runner | Fully automatable, immediately diagnostic |
| 22 | Brief-to-HTML Fidelity | ~30 specs to track per run | Most diagnostic single dimension for "why?" |
| 23 | Perceptual vs Programmatic Divergence | ~30 min per run | Critical for gate system evolution |

### Tier 2: Implement Next (high value, moderate effort)

| Dim | Name | Effort | Why Soon |
|-----|------|--------|----------|
| 12 | Prompt Archaeology | ~2h first run, ~30 min subsequent | Position-vs-execution data is the highest-leverage strategic insight |
| 16 | Creative Agency vs Compliance | ~1h per run | Answers the recipe-vs-checklist question quantitatively |
| 17 | Information Density Metrics | ~50 lines JS in gate runner | Catches void patterns automatically |
| 21 | Attention Budget Allocation | ~100 lines JS in gate runner | CSS budget analysis prevents sub-perceptual waste |

### Tier 3: Implement When 5+ Runs Exist (needs data volume)

| Dim | Name | Effort | Why Wait |
|-----|------|--------|----------|
| 11 | Content-Quality Correlation | Automated collection, manual analysis | Meaningless at N<5 |
| 15 | Constraint Effectiveness | ~2h per run | Requires judgment calls best done in batch |
| 18 | Accessibility as Quality Proxy | ~0 effort per run | Requires correlation data |
| 20 | Cross-Agent Information Propagation | ~3h per run | Hard, high-value, but needs simplified protocol first |
| 24 | Rendering Environment Sensitivity | ~15 min per run | Primarily a confound-control measure |
| 25 | Metaphor Depth Spectrum | ~1h per run | Requires the Flagship definition framework |

---

## Cross-Dimensional Interactions

Some dimensions reinforce each other and should be analyzed together:

**The "Why Quality?" Cluster (11 + 22 + 16):**
Content features (11) predict brief difficulty. Brief fidelity (22) measures execution. Creative agency (16) measures what the builder adds beyond the brief. Together they answer: was quality determined by content affordance, spec compliance, or creative extension?

**The "Fix the Pipeline" Cluster (12 + 14 + 15):**
Prompt archaeology (12) reveals which rules are followed. Crack taxonomy (14) reveals which failures recur. Constraint effectiveness (15) reveals which constraints help. Together they tell you which rules to keep, add, remove, and restructure.

**The "Quality Prediction" Cluster (13 + 17 + 23 + 25):**
Emotional arc (13), density (17), gate-PA divergence (23), and metaphor depth (25) together predict PA-05 from measurable features. If these four dimensions are tracked across 10+ runs, a linear model could estimate PA-05 from automation alone -- replacing (or at least pre-screening) the 9-agent PA audit.

**The "Builder Understanding" Cluster (16 + 20 + 21):**
Creative agency (16), information propagation (20), and attention budget (21) together reveal the builder's mental model: what it received, what it prioritized, where it invested, and what it invented. This is the "builder black box" made visible.

---

*Research complete. 15 new dimensions identified, classified by conversation type, difficulty, and time-value curve. Implementation priority organized into 3 tiers based on effort-to-value ratio.*
