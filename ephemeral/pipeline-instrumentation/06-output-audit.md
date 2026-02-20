# Output Data Quality Audit: /build-page Pipeline

**Date:** 2026-02-19
**Author:** Data Quality Analyst (Opus 4.6)
**Sources:** MASTER-EXECUTION-PROMPT.md, DRAFT-09 through DRAFT-11, flagship-experiment/ artifacts, flagship-remediation/ artifacts
**Scope:** What data the pipeline captures, what it misses, and what the ideal output architecture looks like

---

## 1. CURRENT OUTPUT INVENTORY

### 1A. Builder Stage

**output.html** (the page)
- Format: Self-contained HTML with inline CSS and Google Fonts link
- Size: 2,000-2,200 lines, 56-93KB (observed range across experiments)
- Structure: `<!DOCTYPE html>` + `<head>` (fonts, inline CSS) + `<body>` (header/main/footer)
- Contains: All CSS inline in `<style>`, all content in semantic HTML, ARIA landmarks
- Machine-parseable: YES (standard HTML, CSS extractable via Playwright)
- Reference: DRAFT-11 Section 5, builder spawn prompt lines 239-243

**_build-log.md** (builder decisions)
- Format: Prose markdown with embedded tables
- Specified contents (from DRAFT-11 builder spawn prompt):
  - Conviction statement (zones, metaphor, direction)
  - Fractal echo table (5 scales x CSS evidence)
  - Transition plan (per-boundary direction + channel list)
  - Override log (what, from, to, why)
  - Midpoint observation (self-assessment during build)
  - Final self-assessment (five-question responses)
  - Restraint log (3+ absent mechanisms + reasoning)
- Actual observed format (flagship-experiment/03-build-plan.md): Prose with tables, section map, mechanism deployment plan, zone transition plan. NO structured YAML or JSON. NOT machine-parseable without NLP.
- Reference: DRAFT-09 Section "Deliverables" item 2

**_cascade-value-table.md** (computed CSS at boundaries)
- Format: Markdown table
- Specified contents: Computed background, font-size, font-weight, letter-spacing, border-left, padding at every section boundary
- Actual observed format (flagship-remediation/_verification/computed-styles-data.md): Markdown tables with RGB values, hex approximations, typography groups, section gaps. Prose annotations mixed with data. NOT machine-parseable as structured data.
- Reference: DRAFT-09 Section "Deliverables" item 3

**Conviction card** (pre-build commitment)
- Format: Embedded within _build-log.md as a text block
- Specified contents: Content filename, zone count/names, organizing principle, coherence direction, metaphor name + structural connection, 6 commitments
- Actual observed format: Part of build plan prose, not a separate file
- Reference: DRAFT-09 Section "CONVICTION CARD"

### 1B. Gate Runner Stage

**_verification/gate-results.json** (specified but never actually produced as JSON)
- Format SPECIFIED (DRAFT-10 line 53-67): Structured JSON per gate:
  ```json
  {
    "gate": "SC-XX",
    "status": "PASS" | "FAIL" | "ADVISORY",
    "measured": { },
    "threshold": { },
    "fix": { "instruction": "...", "css": "...", "alternative": "...", "reference": "..." }
  }
  ```
- Format ACTUALLY PRODUCED (flagship-remediation/_verification/programmatic-verification.md): Prose markdown with embedded tables. Per-check narrative including measured values, verdicts, and mitigating factors. 16KB of prose.
- Gap: The spec calls for structured JSON. Actual output is unstructured prose. Measured values ARE present but buried in narrative. Pass/fail IS stated but requires text parsing to extract. Fix recipes are NOT included (just diagnostic text).
- Reference: DRAFT-10 Section "How to Run Gates" + DRAFT-11 Section 3.2

**soul-compliance report** (separate from gate results)
- Format: Prose markdown, per-prohibition PASS/WARNING/FAIL
- Actual observed: flagship-remediation/_verification/soul-compliance.md (18KB)
- Contains: Per-prohibition check with CSS evidence, computed style references, verdict table
- Not specified as a separate file -- emerged as ad hoc output

**computed-styles-data.md** (raw extraction)
- Format: Markdown tables of computed CSS values
- Actual observed: flagship-remediation/_verification/computed-styles-data.md (5.1KB)
- Contains: Container width, zone backgrounds (RGB + hex), typography per zone group, structural borders, callout inventory, table inventory, section gaps
- Not specified as a separate file -- emerged as ad hoc intermediate output

### 1C. PA Auditor Stage

**pa-auditor-{A-I}.md** (9 reports)
- Format: Prose markdown, per-question analysis
- Size: 14-20KB each (observed from flagship-remediation/_verification/)
- Structure: Header (auditor role, date, screenshots reviewed), raw first impression, then per-question blocks with Answer, Evidence, scoring
- Per-question structure observed (from pa-auditor-A.md):
  - Answer: Prose paragraph (qualitative)
  - Evidence: Bulleted list of observations
  - Optional: Sub-scores (e.g., "Visual Confidence Score: 3/5")
  - Optional: Issues list
- YES/NO captured: PARTIALLY. Some auditors give explicit YES/NO, others give prose descriptions. No enforced schema.
- Evidence captured: Auditors reference screenshot names but not specific pixel coordinates or element selectors. Evidence is descriptive, not machine-linkable.
- Reference: DRAFT-11 Section 5.1 auditor spawn prompt

### 1D. Weaver Stage

**_pa-report.md** (specified) or FINAL-VERDICT.md (actual)
- Format: Prose markdown with tables
- Size: 23KB (observed)
- Structure (from FINAL-VERDICT.md, flagship-remediation):
  1. Executive summary
  2. Consensus findings (HIGH/MEDIUM/LOW confidence by auditor agreement count)
  3. PA-05 score analysis (individual auditor scores + consensus + rationale)
  4. Top issues ranked by severity (BLOCKING/HIGH/MINOR/NOTED)
  5. Comparison to pre-remediation baseline
  6. Ship decision with gate checklist
- Per-question matrix: NOT explicitly included. The weaver synthesizes by FINDING, not by question ID.
- Inter-auditor agreement: CAPTURED implicitly via "Flagged by Auditors A, B, D, E, F, H, I" notation. Not in a structured matrix.
- Reference: DRAFT-11 Section 5.3 weaver spawn prompt

**Synthesis verdict** (flagship-experiment, pre-remediation version)
- Format: Prose markdown with auditor scoreboard table
- Size: 10KB (observed from _perceptual-audit/10-SYNTHESIS-VERDICT.md)
- Structure: Auditor scoreboard (domain/score/verdict), PA-05 score, critical findings, defect inventory (BLOCKING/HIGH/MINOR/NOTED), ship decision

### 1E. Orchestrator Stage

**Run manifest: DOES NOT EXIST.**
No file tracks: when the run started, what stages completed, how long each took, which agents were spawned, what model versions were used, or what the pipeline configuration was.

**Timing data: NOT CAPTURED.**
The spec provides timing ESTIMATES (DRAFT-11 Section 9 "Timing Estimates") but no actual timing is recorded during execution.

**Stage completion signals: AD HOC.**
The orchestrator monitors file existence (DRAFT-11 Section 2 "Wave 1 Monitoring") but does not record timestamps or completion status to any file.

### 1F. Fix Cycle Stage

**fix-instructions-cycle-N.md** (specified)
- Format: Markdown with sections for gate failures, PA top-3 issues, Tier 5 gaps, protected elements
- Contains: Structured fix directions per DRAFT-11 Section 6.1
- ACTUALLY PRODUCED: builder-changelog.md in flagship-remediation (12KB). Documents what was changed, not what was requested. The fix instruction file was not produced as a separate artifact.

**Lock sheet** (specified in master prompt Section 5 adjustment #6)
- Format: Markdown tables categorizing elements as LOCKED (Soul), LOCKED (Research), CHALLENGEABLE (Builder)
- ACTUALLY PRODUCED: lock-sheet.md (7.7KB) in flagship-remediation/_verification/
- Contains: Soul constraints, typography rules, color palette, perception thresholds -- all as quick-reference tables

---

## 2. GAP ANALYSIS

Ranked by value for post-run retrospection (CRITICAL > HIGH > MEDIUM > LOW).

### CRITICAL GAPS (without these, cross-run comparison is impossible)

**GAP-01: No structured gate results file.**
- What's missing: gate-results.json as specified in DRAFT-10. Instead, gates produce prose.
- Impact: Cannot programmatically compare gate results across runs. Cannot compute gate pass rates, cannot detect threshold regressions, cannot auto-generate fix instructions.
- Value: 10/10. This is the single highest-value missing output.
- Cost to add: ZERO additional pipeline time. The gate runner already computes all values in Playwright. It just needs to write them as JSON instead of (or in addition to) prose.

**GAP-02: No run manifest / timing data.**
- What's missing: A JSON file recording run start time, stage completion times, agent IDs, model versions, content source, pipeline configuration, fix cycle count.
- Impact: Cannot measure pipeline efficiency. Cannot compare build times across content types. Cannot detect when stages are bottlenecking.
- Value: 9/10. Without timing data, every retrospective must reconstruct timelines from file modification dates.
- Cost to add: ~10 lines of orchestrator code at each stage boundary. Negligible runtime.

**GAP-03: No per-question PA matrix.**
- What's missing: A structured 56-question x 9-auditor matrix with YES/NO/PARTIAL per cell plus confidence and evidence reference.
- Impact: Cannot compute inter-auditor agreement rates. Cannot identify which questions are diagnostic (high variance = interesting) vs which are noise (all YES = not discriminating). Cannot track question-level trends across runs.
- Value: 9/10. The entire PA system's value depends on question-level data, but currently only prose summaries survive.
- Cost to add: Modify auditor spawn prompt to require structured output alongside prose. Add ~2 min weaver processing to compile matrix. Or: post-process auditor reports with a parsing agent.

### HIGH GAPS (needed for meaningful retrospection)

**GAP-04: No mechanism inventory.**
- What's missing: A structured list of which mechanisms from mechanism-catalog.md were deployed, where (which section), and how (which CSS properties). Currently buried in build log prose.
- Impact: Cannot compare mechanism deployment patterns across runs. Cannot validate fractal gate (DG-1) claims against actual CSS. Cannot measure "mechanism vocabulary breadth" quantitatively.
- Value: 8/10.
- Cost to add: Builder already plans mechanisms in the conviction card. Require structured YAML/JSON output alongside prose. ~5 min additional builder time.

**GAP-05: No CSS budget breakdown.**
- What's missing: CSS lines categorized by purpose (layout, typography, color, borders, spacing, responsive, animation, component-specific). The flagship retrospective discovered that 22% of CSS was sub-perceptual micro-typography -- this was only discoverable through manual forensic analysis.
- Impact: Cannot detect CSS budget misallocation (the primary Flagship failure mode). Cannot compare CSS investment patterns across runs.
- Value: 8/10.
- Cost to add: Post-build automated parsing of the `<style>` block. ~30 sec Playwright/JS execution. Could be a gate or a post-gate analysis step.

**GAP-06: No absorption evidence (brief-to-output mapping).**
- What's missing: Tracing which sections of the conventions brief influenced which builder decisions. The 91.2% compression loss finding was only discoverable through manual analysis across multiple retrospective teams.
- Impact: Cannot measure brief effectiveness. Cannot identify which brief sections are being ignored vs which are generative.
- Value: 7/10.
- Cost to add: Require builder to annotate decisions with brief section references in build log. ~10 min additional builder time. Moderate cost.

**GAP-07: No fix cycle delta tracking.**
- What's missing: Structured before/after data for each fix cycle. What gate values changed? What PA scores changed? What CSS was modified?
- Impact: Cannot measure fix cycle effectiveness. Cannot determine if fix cycles converge or oscillate.
- Value: 7/10.
- Cost to add: Diff gate-results.json between cycles. Requires GAP-01 to be resolved first.

### MEDIUM GAPS (useful for optimization)

**GAP-08: No screenshot metadata.**
- What's missing: JSON mapping screenshot filenames to viewport width, scroll position (px), visible section range, capture timestamp.
- Impact: When auditors reference "screenshot-1440px-05-scroll.png" there is no structured way to know which sections are visible. Cross-referencing auditor evidence to page location requires manual inspection.
- Value: 6/10.
- Cost to add: The orchestrator already captures screenshots sequentially. Record position data during capture. ~5 lines of code, negligible runtime.

**GAP-09: No DG-2 cross-validation data.**
- What's missing: Structured comparison of builder-claimed cascade values vs programmatically-measured values. Currently, computed-styles-data.md has measured values, _cascade-value-table.md has claimed values, but no file compares them.
- Impact: Cannot quantify builder self-assessment accuracy. Cannot detect systematic builder over/under-estimation.
- Value: 6/10.
- Cost to add: Automated comparison after both files exist. ~30 sec processing.

**GAP-10: No content analysis metadata.**
- What's missing: Structured description of the input content: word count, section count, code block count, table count, content mode distribution, structural heterogeneity score.
- Impact: Cannot correlate content characteristics with pipeline outcomes. Cannot predict difficulty.
- Value: 5/10.
- Cost to add: Automated markdown parsing at intake. ~10 sec.

**GAP-11: No agent spawn/completion log.**
- What's missing: Which agents were spawned, when, with what model, how long they ran, whether they completed successfully.
- Impact: Cannot diagnose agent failures. Cannot measure agent efficiency.
- Value: 5/10.
- Cost to add: Orchestrator logging at TeamCreate and completion. ~10 lines.

### LOW GAPS (nice to have)

**GAP-12: No weaver reasoning trace.**
- What's missing: How the weaver resolved conflicting auditor assessments. Currently the FINAL-VERDICT.md explains its reasoning in prose, but not in a structured decision log.
- Value: 4/10.

**GAP-13: No responsive audit data.**
- What's missing: Gate results at 768px and 375px viewports (gates currently run only at 1440px).
- Value: 4/10.

**GAP-14: No conviction card verification.**
- What's missing: Structured comparison of builder commitments (from conviction card) vs actual output. Did they sustain multi-coherence at every boundary as promised? Did they place a designed moment below midpoint?
- Value: 4/10.

---

## 3. IDEAL OUTPUT ARCHITECTURE

```
ephemeral/pages/[content-slug]/
├── output.html                         # The page (self-contained)
├── _run-manifest.json                  # Pipeline execution metadata
├── _content-analysis.json              # Input content characteristics
├── _build-log.md                       # Builder decisions (prose, human-readable)
├── _conviction-card.json               # Structured builder commitments
├── _mechanism-inventory.json           # What was deployed, where, how
├── _cascade-value-table.json           # Builder-claimed CSS at boundaries
├── _verification/
│   ├── gate-results.json               # Structured 21-gate results
│   ├── computed-styles.json            # Programmatic CSS extraction
│   ├── cross-validation.json           # Claimed vs measured comparison
│   ├── css-budget-breakdown.json       # CSS lines by purpose category
│   └── soul-compliance.json            # 22-prohibition check results
├── _screenshots/
│   ├── manifest.json                   # Screenshot metadata (viewport, scroll, sections)
│   ├── 1440px-00-cold.png
│   ├── 1440px-01-scroll.png
│   │   ...
│   ├── 768px-00-cold.png
│   │   ...
│   └── 375px-00-cold.png (if responsive gates added)
├── _pa/
│   ├── pa-auditor-A.md                 # Full prose report
│   ├── pa-auditor-A.json               # Structured per-question YES/NO
│   │   ... (B through I)
│   ├── pa-matrix.json                  # 56x9 compiled matrix
│   └── _pa-report.md                   # Weaver synthesis (prose)
├── _fixes/
│   ├── fix-instructions-cycle-1.md     # Directed fix instructions
│   ├── gate-results-cycle-1.json       # Gate state after cycle 1
│   │   ... (up to cycle 3)
│   └── fix-delta-summary.json          # Before/after per cycle
└── _retrospective-scorecard.json       # Auto-generated summary
```

### 3A. Schema Definitions

**_run-manifest.json**
```json
{
  "run_id": "run-001",
  "content_source": "extractions/deep/yegge-gas-town-extraction.md",
  "content_slug": "gas-town",
  "pipeline_version": "1.0",
  "started_at": "2026-02-19T10:00:00Z",
  "completed_at": "2026-02-19T13:15:00Z",
  "total_duration_min": 195,
  "stages": {
    "intake": { "started": "...", "completed": "...", "duration_min": 1 },
    "builder": { "started": "...", "completed": "...", "duration_min": 120, "model": "opus-4.6", "agent_id": "builder-001" },
    "gate_runner": { "started": "...", "completed": "...", "duration_min": 2, "gates_passed": 17, "gates_failed": 2, "gates_advisory": 2 },
    "screenshot_capture": { "started": "...", "completed": "...", "duration_min": 5, "screenshot_count": 24 },
    "pa_deployment": { "started": "...", "completed": "...", "duration_min": 25, "auditor_count": 9, "model": "opus-4.6" },
    "weaver": { "started": "...", "completed": "...", "duration_min": 15 },
    "fix_cycles": [
      { "cycle": 1, "started": "...", "completed": "...", "duration_min": 35, "trigger": "FIX", "pa05_before": 2.5, "pa05_after": 3.0 }
    ]
  },
  "final_verdict": "SHIP",
  "pa05_score": 3.5,
  "tier5_score": 6,
  "fix_cycles_used": 1,
  "total_agents_spawned": 12
}
```

**_content-analysis.json**
```json
{
  "source_file": "extractions/deep/yegge-gas-town-extraction.md",
  "word_count": 5200,
  "line_count": 1324,
  "section_count": 12,
  "code_block_count": 4,
  "table_count": 5,
  "blockquote_count": 3,
  "list_count": 8,
  "content_modes": ["exposition", "analysis", "code", "tabular", "quotation"],
  "structural_heterogeneity": 0.78,
  "estimated_page_height_px": 12000,
  "difficulty_indicators": {
    "mode_transitions": 14,
    "domain_shifts": 4,
    "has_ascii_diagrams": true,
    "longest_prose_run_words": 450
  }
}
```

**_conviction-card.json**
```json
{
  "content_file": "gas-town-extraction.md",
  "zone_count": 4,
  "zone_names": ["intake", "analysis", "synthesis", "resolution"],
  "organizing_principle": "Progressive refinement from varied raw input to unified output",
  "coherence_direction": "DEEPENING",
  "metaphor": {
    "name": "Assay Laboratory",
    "structural_connection": "Content moves from mixed raw samples through analytical separation to purified conclusions"
  },
  "commitments": {
    "channel_shifts_per_boundary": ">= 3",
    "coherence_direction": "DEEPENING",
    "designed_moment_below_midpoint": true,
    "midpoint_render_check": true,
    "override_log": true,
    "absent_mechanisms_documented": ">= 3"
  },
  "planned_mechanisms": ["border-weight-gradient", "dense-sparse-alternation", "width-variation", "two-zone-DNA", "color-encoding"],
  "planned_mechanism_count": 15,
  "deliberately_absent_mechanisms": ["scroll-witness", "bento-grid"],
  "absent_mechanism_reasoning": {
    "scroll-witness": "JS dependency inappropriate for single-read page",
    "bento-grid": "Content doesn't support 4+ items of comparable weight"
  }
}
```

**_mechanism-inventory.json**
```json
{
  "total_deployed": 14,
  "per_category": {
    "Spatial": { "count": 2, "mechanisms": ["dense-sparse-alternation", "width-variation"] },
    "Hierarchy": { "count": 3, "mechanisms": ["border-weight-gradient", "spacing-compression", "type-scale"] },
    "Component": { "count": 4, "mechanisms": ["two-zone-DNA", "color-encoding", "border-left", "code-block"] },
    "Depth_Emphasis": { "count": 2, "mechanisms": ["solid-offset", "zone-backgrounds"] },
    "Structure_Navigation": { "count": 3, "mechanisms": ["dark-header", "footer-mirror", "data-table"] }
  },
  "deployment_map": [
    { "section": 1, "mechanisms": ["dark-header", "drop-cap", "zone-backgrounds"] },
    { "section": 2, "mechanisms": ["solid-offset", "type-scale"] }
  ],
  "absent_mechanisms": ["scroll-witness", "bento-grid", "progressive-disclosure"],
  "absent_reasoning": { "scroll-witness": "JS dependency" }
}
```

**gate-results.json** (per DRAFT-10 spec, but COMPLETE)
```json
{
  "run_id": "run-001",
  "timestamp": "2026-02-19T12:02:00Z",
  "viewport": "1440x900",
  "cycle": 0,
  "summary": { "pass": 17, "fail": 2, "advisory": 2, "total": 21 },
  "gates": [
    {
      "gate": "SC-01",
      "name": "Container Width",
      "tier": "A",
      "status": "PASS",
      "measured": { "max_width_px": 960 },
      "threshold": { "min": 940, "max": 960 },
      "fix": null
    },
    {
      "gate": "SC-09",
      "name": "Background Delta",
      "tier": "A",
      "status": "FAIL",
      "measured": {
        "boundaries": [
          { "from": "S1", "to": "S2", "r_delta": 9, "g_delta": 8, "b_delta": 9, "max_delta": 9 },
          { "from": "S2", "to": "S3", "r_delta": 6, "g_delta": 6, "b_delta": 6, "max_delta": 6 }
        ],
        "failing_boundaries": ["S1-S2", "S2-S3", "S4-S5", "S7-S8", "S9-S10", "S10-S11", "S11-S12"],
        "passing_boundaries": ["S3-S4", "S5-S6", "S6-S7", "S8-S9"]
      },
      "threshold": { "min_max_channel_delta": 15 },
      "fix": {
        "instruction": "Increase background color delta at failing boundaries to >= 15 RGB on at least one channel",
        "css": ".zone-s2 { background: #F0EBE3; } /* delta from S1 = 14R, 10G, 18B */",
        "alternatives": [".zone-s2 { background: #EDE5D9; } /* delta = 17R, 16G, 28B */"]
      }
    },
    {
      "gate": "SC-13",
      "name": "Multi-Coherence",
      "tier": "A",
      "status": "PASS",
      "measured": {
        "boundaries": [
          { "from": "S1", "to": "S2", "shifts": 4, "channels": ["chromatic", "typographic", "spatial", "structural"] },
          { "from": "S2", "to": "S3", "shifts": 3, "channels": ["chromatic", "spatial", "material"] }
        ],
        "min_shifts": 3,
        "avg_shifts": 4.2,
        "all_above_3": true
      },
      "threshold": { "min_per_boundary": 3, "min_average": 4.0 }
    }
  ]
}
```

**css-budget-breakdown.json**
```json
{
  "total_css_lines": 847,
  "categories": {
    "layout": { "lines": 142, "pct": 16.8, "details": "grids, flexbox, positioning" },
    "typography": { "lines": 128, "pct": 15.1, "details": "font-size, weight, line-height, letter-spacing" },
    "color_background": { "lines": 95, "pct": 11.2, "details": "zone backgrounds, accent colors" },
    "borders": { "lines": 67, "pct": 7.9, "details": "structural borders, dividers" },
    "spacing": { "lines": 112, "pct": 13.2, "details": "padding, margin, gap" },
    "responsive": { "lines": 89, "pct": 10.5, "details": "@media breakpoints" },
    "components": { "lines": 156, "pct": 18.4, "details": "callout, table, code-block styling" },
    "accessibility": { "lines": 24, "pct": 2.8, "details": "focus-visible, reduced-motion, skip-link" },
    "resets_base": { "lines": 34, "pct": 4.0, "details": "*, html, body, soul enforcement" }
  },
  "sub_perceptual_lines": 0,
  "sub_perceptual_pct": 0.0,
  "perceptible_lines": 847,
  "flags": {
    "typography_pct_over_20": false,
    "sub_perceptual_pct_over_5": false,
    "responsive_pct_under_5": false
  }
}
```

**pa-auditor-{X}.json** (structured companion to prose report)
```json
{
  "auditor": "A",
  "role": "Impression+Emotion",
  "model": "opus-4.6",
  "screenshots_reviewed": ["1440px-00-cold.png", "1440px-01-scroll.png", "768px-00-cold.png"],
  "questions": [
    {
      "id": "PA-01",
      "text": "First Impression",
      "answer": "YES",
      "confidence": "HIGH",
      "severity": "WOULD-SHIP",
      "evidence_screenshots": ["1440px-00-cold.png"],
      "evidence_elements": ["dark header", "drop cap", "callout system"],
      "summary": "Above-average first impression driven by confident header and editorial palette"
    },
    {
      "id": "PA-05",
      "text": "Designed Assessment",
      "answer": "PARTIALLY",
      "sub_scores": {
        "designed": 3,
        "coherent": 2.5,
        "proportionate": 2.5,
        "polished": 2
      },
      "composite_score": 2.5,
      "confidence": "HIGH",
      "severity": "CONDITIONAL",
      "evidence_screenshots": ["1440px-00-cold.png", "1440px-05-scroll.png"],
      "summary": "Designed but not composed. Header excellent, middle section uniform."
    }
  ]
}
```

**pa-matrix.json** (compiled from all auditor JSONs)
```json
{
  "dimensions": { "questions": 56, "auditors": 9 },
  "matrix": {
    "PA-01": { "A": "YES", "B": null, "C": null, "D": null, "E": null, "F": null, "G": null, "H": null, "I": null },
    "PA-05": { "A": "PARTIAL:2.5", "B": null, "C": null, "D": null, "E": null, "F": null, "G": null, "H": null, "I": null }
  },
  "agreement": {
    "PA-01": { "assigned_to": "A", "answer": "YES" },
    "PA-09": { "assigned_to": "C", "answer": "NO" }
  },
  "tier5_scores": {
    "PA-60": "YES",
    "PA-61": "NO",
    "PA-62": "YES",
    "PA-63": "YES",
    "PA-64": "NO",
    "PA-65": "YES",
    "PA-66": "YES",
    "PA-67": "NO"
  },
  "tier5_total": 5,
  "tier5_verdict": "APPROACHING",
  "pa05_scores": {
    "A": 2.5, "F": 0.5, "I": 2.5
  },
  "pa05_consensus": 2.5,
  "pa05_outlier_excluded": "F (screenshot artifact)",
  "inter_auditor_disagreements": [
    { "topic": "border rendering", "auditors_flagging": ["A", "B", "D", "E", "F", "H", "I"], "auditors_not": ["C", "G"] }
  ]
}
```

**_retrospective-scorecard.json** (auto-generated from all structured data)
```json
{
  "run_id": "run-001",
  "content_slug": "gas-town",
  "final_scores": {
    "pa05": 3.5,
    "tier5": 6,
    "tier5_verdict": "COMPOSED",
    "verdict": "SHIP"
  },
  "gate_summary": { "pass": 19, "fail": 0, "advisory": 2 },
  "mechanism_summary": { "total": 14, "categories_covered": 5, "absent_documented": 3 },
  "css_summary": { "total_lines": 847, "sub_perceptual_pct": 0, "top_category": "components" },
  "timing_summary": { "total_min": 195, "builder_min": 120, "pa_min": 40, "fix_cycles": 1 },
  "conviction_fidelity": {
    "committed_zones": 4, "actual_zones": 4,
    "committed_direction": "DEEPENING", "actual_direction": "DEEPENING",
    "committed_mechanisms": 15, "actual_mechanisms": 14,
    "midpoint_check_done": true
  },
  "cross_run_comparisons": {
    "pa05_vs_previous_best": "+0.5 (previous: 3.0 on RESEARCH-SYNTHESIS)",
    "mechanism_count_vs_average": "+2 (average: 12)"
  },
  "known_issues": [
    { "severity": "HIGH", "description": "S4-S5 bg delta 2 RGB (below 15)", "gate": "SC-09" }
  ]
}
```

---

## 4. IMPLEMENTATION COST

| Output File | Additional Runtime | Implementation Complexity | Dependencies |
|-------------|-------------------|--------------------------|-------------|
| _run-manifest.json | ~0 min (timestamp logging) | LOW (10 lines of orchestrator code) | None |
| _content-analysis.json | ~10 sec (markdown parsing) | LOW (automated) | None |
| _conviction-card.json | ~5 min (builder formats structured) | MEDIUM (modify builder prompt) | Builder prompt change |
| _mechanism-inventory.json | ~5 min (builder formats structured) | MEDIUM (modify builder prompt) | Builder prompt change |
| gate-results.json (structured) | ~0 min (reformat existing output) | LOW (change gate runner output format) | None |
| computed-styles.json | ~0 min (reformat existing extraction) | LOW (already computed, just format) | None |
| cross-validation.json | ~30 sec (diff two JSON files) | LOW (automated) | GAP-01 resolved |
| css-budget-breakdown.json | ~30 sec (parse `<style>` block) | MEDIUM (classification heuristics) | None |
| soul-compliance.json | ~0 min (reformat existing checks) | LOW | None |
| screenshots/manifest.json | ~0 min (record during capture) | LOW (5 lines) | None |
| pa-auditor-{X}.json | ~2 min per auditor (structured companion) | MEDIUM (modify auditor prompt) | Auditor prompt change |
| pa-matrix.json | ~2 min (compile from auditor JSONs) | LOW (automated merge) | pa-auditor JSONs |
| fix-delta-summary.json | ~30 sec per cycle | LOW | gate-results.json per cycle |
| _retrospective-scorecard.json | ~1 min (aggregate all JSONs) | LOW (automated) | All other JSONs |

**Total additional runtime for ALL new outputs: ~20 minutes** (primarily from asking builder and auditors to produce structured companions to their prose).

**Most of the cost is in prompt changes, not runtime.** The builder and auditor spawn prompts need to specify the structured output format. This adds ~30 lines to each spawn prompt.

---

## 5. PRIORITIZED ADDITIONS

### Priority 1: Add IMMEDIATELY (highest value, lowest cost)

| # | File | Value | Cost | Resolves |
|---|------|-------|------|----------|
| 1 | gate-results.json | 10/10 | ~0 min | GAP-01 |
| 2 | _run-manifest.json | 9/10 | ~0 min | GAP-02 |
| 3 | screenshots/manifest.json | 6/10 | ~0 min | GAP-08 |

These three files require ZERO additional pipeline runtime. They are reformats of data already computed. The gate runner already evaluates all JS checks -- it just needs to serialize results as JSON. The orchestrator already tracks stage progression -- it just needs to write timestamps. Screenshot capture already records viewport and scroll position -- just write a manifest.

**Total lines of orchestrator code to add: ~40.**
**Total additional runtime: 0 minutes.**

### Priority 2: Add in NEXT iteration (high value, moderate cost)

| # | File | Value | Cost | Resolves |
|---|------|-------|------|----------|
| 4 | pa-auditor-{X}.json | 9/10 | ~2 min/auditor | GAP-03 |
| 5 | pa-matrix.json | 9/10 | ~2 min | GAP-03 |
| 6 | css-budget-breakdown.json | 8/10 | ~30 sec | GAP-05 |
| 7 | _content-analysis.json | 5/10 | ~10 sec | GAP-10 |

These require auditor prompt changes (items 4-5) or new automated analysis steps (items 6-7). The auditor prompt change is the highest-impact single modification: adding a required JSON output block to the auditor spawn template. This enables pa-matrix.json, which in turn enables inter-auditor agreement analysis, question diagnostics, and cross-run PA trend tracking.

**Total additional runtime: ~22 minutes (mostly auditor structured output).**

### Priority 3: Add when builder prompt is revised (high value, moderate complexity)

| # | File | Value | Cost | Resolves |
|---|------|-------|------|----------|
| 8 | _conviction-card.json | 4/10 | ~5 min | GAP-14 |
| 9 | _mechanism-inventory.json | 8/10 | ~5 min | GAP-04 |
| 10 | cross-validation.json | 6/10 | ~30 sec | GAP-09 |
| 11 | fix-delta-summary.json | 7/10 | ~30 sec/cycle | GAP-07 |

These require builder prompt modifications (items 8-9) or depend on Priority 1 outputs (items 10-11). Bundle with the next builder prompt revision.

### Priority 4: Add when retrospective system is built

| # | File | Value | Cost | Resolves |
|---|------|-------|------|----------|
| 12 | _retrospective-scorecard.json | 7/10 | ~1 min | Multiple |

This file is a pure aggregate of all other structured outputs. It cannot exist without items 1-11. Once those are in place, the scorecard is a trivial merge operation.

---

## 6. KEY FINDINGS SUMMARY

1. **The pipeline specifies structured JSON output (DRAFT-10 lines 53-67) but actual runs produce only prose markdown.** This is the single largest data quality gap. Closing it costs zero additional runtime.

2. **No run metadata exists.** Timing, agent identity, model version, pipeline configuration -- all lost after every run. Reconstructing this information costs 10-50x more than capturing it would have.

3. **PA auditor output is unstructured.** The 9-auditor x 56-question matrix -- the pipeline's most expensive data product (~25 min of 9 parallel Opus agents) -- degrades to prose narrative that requires manual parsing. Adding a 10-line JSON block to each auditor prompt preserves the full matrix at ~zero marginal cost.

4. **The pipeline's most diagnostic data (mechanism inventory, CSS budget, conviction fidelity) is buried in prose build logs.** Extracting it post-hoc requires dedicated analysis teams (as demonstrated by the 16-agent flagship dissection). Capturing it at source costs ~10 min of builder time.

5. **Priority 1 additions (3 files, 0 min runtime, ~40 lines of code) would transform retrospection capability.** Priority 2 additions (4 files, ~22 min runtime) would make cross-run comparison possible. Together, these 7 files resolve 8 of 14 identified gaps.

---

**END OF AUDIT**

**Statistics:**
- Current output files: 14 (3 builder + 2-4 ad hoc verification + 9 PA + 1 weaver verdict)
- Missing structured outputs: 14 proposed new files
- Gap count: 14 (3 CRITICAL, 4 HIGH, 4 MEDIUM, 3 LOW)
- Priority 1 implementation cost: 0 minutes additional runtime
- Total implementation cost (all priorities): ~22 minutes additional runtime per run
- Lines: ~480
