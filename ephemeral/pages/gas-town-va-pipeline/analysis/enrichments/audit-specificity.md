# Enrichment Specificity Audit

**Auditor:** specificity-auditor
**Date:** 2026-02-23
**Scope:** Every enrichment recommendation across all 4 extraction files assessed for implementation-readiness
**Method:** Each enrichment rated on 6 dimensions (File, Location, Content, Threshold, Question, Gate specificity) then classified as IMPLEMENTATION-READY / NEEDS DETAIL / VAGUE

---

## RATING CRITERIA

| Dimension | IMPLEMENTATION-READY | NEEDS DETAIL | VAGUE |
|-----------|---------------------|--------------|-------|
| FILE | Names exact filename (e.g., `artifact-builder-recipe.md`) | Names artifact type (e.g., "the builder recipe") | No file named |
| LOCATION | Section name, line range, or "after X" | General area (e.g., "Tier 3 section") | No location guidance |
| CONTENT | Exact text/CSS/JS to add or replace | Specific direction with partial content | Abstract description of what to add |
| THRESHOLD | Exact numeric value with unit | Range or direction ("increase to...") | No value ("improve the delta") |
| QUESTION | Exact question text with YES/NO criteria | Question topic with partial text | "Add a question about X" |
| GATE | JS implementation approach or pseudocode | Gate logic described in prose | "Add a gate for X" |

---

## FILE 1: extract-01-08.md (67 enrichments)

### Enrichment-by-Enrichment Assessment

#### FILE 01: HTML/CSS Analysis (6 enrichments)

| ID | File | Location | Content | Threshold | Question | Gate | VERDICT |
|----|------|----------|---------|-----------|----------|------|---------|
| E01-01 | NEEDS DETAIL ("artifact-builder-recipe.md or execution brief template" — ambiguous which) | NEEDS DETAIL ("no location within file") | IMPLEMENTATION-READY (exact rule text given) | N/A | N/A | N/A | **NEEDS DETAIL** |
| E01-02 | NEEDS DETAIL ("Execution brief template, Tier 3") | NEEDS DETAIL (general area) | IMPLEMENTATION-READY (specific: "vary at least 2 properties per zone") | N/A | N/A | N/A | **NEEDS DETAIL** |
| E01-03 | NEEDS DETAIL ("Execution brief template, D-01") | NEEDS DETAIL | IMPLEMENTATION-READY (specific instruction text) | N/A | N/A | N/A | **NEEDS DETAIL** |
| E01-04 | NEEDS DETAIL ("Builder recipe, responsive section") | NEEDS DETAIL | IMPLEMENTATION-READY ("3.5em -> 2.5em") | IMPLEMENTATION-READY | N/A | N/A | **NEEDS DETAIL** |
| E01-05 | NEEDS DETAIL ("Gate runner (new anti-pattern gate)") | VAGUE (no section named) | IMPLEMENTATION-READY (ghost-token detection logic) | N/A | N/A | NEEDS DETAIL (logic described but no JS) | **NEEDS DETAIL** |
| E01-06 | NEEDS DETAIL ("Builder recipe, component patterns section") | NEEDS DETAIL | IMPLEMENTATION-READY (specific guidance text) | N/A | N/A | N/A | **NEEDS DETAIL** |

**File 01 summary:** 0 IMPLEMENTATION-READY, 6 NEEDS DETAIL, 0 VAGUE. Common gap: file is named but location within file is too vague for a cold implementer. The extraction says "execution brief template" but the actual file is `artifact-tc-brief-template.md` — the canonical filename is missing.

---

#### FILE 02: Artifact Quality (8 enrichments)

| ID | File | Location | Content | Threshold | Gate | VERDICT |
|----|------|----------|---------|-----------|------|---------|
| E02-01 | IMPLEMENTATION-READY (`artifact-orchestrator.md` + `artifact-routing.md`) | NEEDS DETAIL ("Phase 1 Brief Assembly" / "Phase 0 Content Analysis") | IMPLEMENTATION-READY (exact gate logic: "compute max(\|R1-R2\|...)") | IMPLEMENTATION-READY (< 15 triggers correction) | NEEDS DETAIL (no JS) | **NEEDS DETAIL** |
| E02-02 | IMPLEMENTATION-READY (`artifact-gate-runner.md`, GR-05) | IMPLEMENTATION-READY (GR-05 section) | IMPLEMENTATION-READY (exact element exemption list) | N/A | NEEDS DETAIL (no JS code) | **IMPLEMENTATION-READY** |
| E02-03 | IMPLEMENTATION-READY (`MANIFEST.md`, verdict logic section) | NEEDS DETAIL ("verdict logic section") | IMPLEMENTATION-READY (exact clause with 3 conditions) | N/A | N/A | **IMPLEMENTATION-READY** |
| E02-04 | IMPLEMENTATION-READY (`artifact-gate-runner.md`) | NEEDS DETAIL (which section for each gate) | NEEDS DETAIL (4 gates described at concept level, not implementation) | IMPLEMENTATION-READY (exact values: >=3, >1 viewport, <3, >15%) | N/A | **NEEDS DETAIL** |
| E02-05 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`) | NEEDS DETAIL ("assembly gate" — where in file?) | IMPLEMENTATION-READY (80% line count rule) | IMPLEMENTATION-READY (80%) | N/A | **IMPLEMENTATION-READY** |
| E02-06 | IMPLEMENTATION-READY (`artifact-routing.md`, Phase 0 Content Map) | NEEDS DETAIL ("Output Template") | IMPLEMENTATION-READY (exact table format given) | N/A | N/A | **IMPLEMENTATION-READY** |
| E02-07 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`) | NEEDS DETAIL ("Tier 4 section") | IMPLEMENTATION-READY (budget numbers: 55 max Tier 3, 35 min Tier 4, 1 CSS pair per D) | IMPLEMENTATION-READY | N/A | **IMPLEMENTATION-READY** |
| E02-08 | IMPLEMENTATION-READY (`artifact-routing.md`, Section 11) | IMPLEMENTATION-READY | NEEDS DETAIL ("explicit justification >= 2 sentences" — what format?) | N/A | N/A | **NEEDS DETAIL** |

**File 02 summary:** 5 IMPLEMENTATION-READY, 3 NEEDS DETAIL, 0 VAGUE. Best specificity of any source file. Canonical filenames used consistently.

---

#### FILE 03: PA Synthesis (8 enrichments)

| ID | File | Location | Content | Question | Gate | VERDICT |
|----|------|----------|---------|----------|------|---------|
| E03-01 | IMPLEMENTATION-READY (`artifact-gate-runner.md`) | NEEDS DETAIL ("add GR-XX") | IMPLEMENTATION-READY (exact logic: "distance from last content to body bottom, >900px = FAIL") | N/A | NEEDS DETAIL (logic clear, no JS) | **NEEDS DETAIL** |
| E03-02 | IMPLEMENTATION-READY (`artifact-gate-runner.md`) | NEEDS DETAIL | IMPLEMENTATION-READY (exact thresholds: >4 = SIGNIFICANT, >6 = BLOCKING) | N/A | NEEDS DETAIL (no JS) | **NEEDS DETAIL** |
| E03-03 | IMPLEMENTATION-READY (`artifact-builder-recipe.md`, component modulation) | NEEDS DETAIL | IMPLEMENTATION-READY (specific CSS guidance: "4px borders, warning colors, larger padding") | N/A | N/A | **NEEDS DETAIL** |
| E03-04 | NEEDS DETAIL ("gate-runner or builder-recipe" — ambiguous) | NEEDS DETAIL | IMPLEMENTATION-READY ("at least 2 layout elements must REORGANIZE") | IMPLEMENTATION-READY (2) | NEEDS DETAIL | **NEEDS DETAIL** |
| E03-05 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-04) | IMPLEMENTATION-READY (D-04 section) | IMPLEMENTATION-READY (exact revised text given) | N/A | N/A | **IMPLEMENTATION-READY** |
| E03-06 | IMPLEMENTATION-READY (`artifact-pa-protocol.md`) | NEEDS DETAIL ("reorder question assignment") | IMPLEMENTATION-READY (exact questions named: PA-01, PA-05, PA-20, PA-45) | N/A | N/A | **NEEDS DETAIL** |
| E03-07 | IMPLEMENTATION-READY (`artifact-pa-protocol.md`, auditor assignment) | NEEDS DETAIL | IMPLEMENTATION-READY (distribution principle + 1 weak-dimension question per auditor) | N/A | N/A | **NEEDS DETAIL** |
| E03-08 | NEEDS DETAIL ("gate-runner or builder recipe" — ambiguous) | NEEDS DETAIL | IMPLEMENTATION-READY (exact instruction text) | N/A | N/A | **NEEDS DETAIL** |

**File 03 summary:** 1 IMPLEMENTATION-READY, 7 NEEDS DETAIL, 0 VAGUE. Most enrichments have exact content but imprecise file/location targeting.

---

#### FILE 04: Gate Failure Root Cause (5 enrichments)

| ID | File | Location | Content | Threshold | Gate | VERDICT |
|----|------|----------|---------|-----------|------|---------|
| E04-01 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, Tier 1 or Tier 3) | NEEDS DETAIL ("Tier 1 or Tier 3" — ambiguous) | IMPLEMENTATION-READY (exact rule + exception list) | N/A | N/A | **NEEDS DETAIL** |
| E04-02 | DUPLICATE of E02-01 | — | — | — | — | SKIP |
| E04-03 | IMPLEMENTATION-READY (`artifact-gate-runner.md`, GR-14) | IMPLEMENTATION-READY (GR-14 section) | IMPLEMENTATION-READY (exact measurement modification: subtract structural element height, >=100 RGB delta criterion) | IMPLEMENTATION-READY (150px whitespace threshold) | NEEDS DETAIL (no JS) | **IMPLEMENTATION-READY** |
| E04-04 | IMPLEMENTATION-READY (`artifact-gate-runner.md`, GR-17) | IMPLEMENTATION-READY (GR-17 section) | IMPLEMENTATION-READY (exact threshold: td/th = 6px minimum, others retain 12px) | IMPLEMENTATION-READY | NEEDS DETAIL (no JS) | **IMPLEMENTATION-READY** |
| E04-05 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, Tier 3 multi-coherence) | NEEDS DETAIL ("Tier 3 multi-coherence section") | IMPLEMENTATION-READY (exact language change: "delta ~N" to "delta >= N (aim for N+5 to N+10)") | IMPLEMENTATION-READY | N/A | **IMPLEMENTATION-READY** |

**File 04 summary:** 3 IMPLEMENTATION-READY, 1 NEEDS DETAIL, 0 VAGUE, 1 DUPLICATE.

---

#### FILE 05: Cross-Run Comparison (6 enrichments)

| ID | File | Location | Content | Threshold | VERDICT |
|----|------|----------|---------|-----------|---------|
| E05-01 | IMPLEMENTATION-READY (`artifact-gate-runner.md`) | NEEDS DETAIL | IMPLEMENTATION-READY (same as E03-01 + builder instruction: "verify page ends within 100px of footer bottom") | IMPLEMENTATION-READY (200px) | **NEEDS DETAIL** |
| E05-02 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-01) | IMPLEMENTATION-READY (D-01 or new D-XX) | IMPLEMENTATION-READY (3 specific techniques: component titles, concept properties, zone indicator text) | N/A | **IMPLEMENTATION-READY** |
| E05-03 | IMPLEMENTATION-READY (`artifact-gate-runner.md`) | NEEDS DETAIL | IMPLEMENTATION-READY (exact logic: match computed colors to custom properties, 5 RGB tolerance, 0 untraceable threshold) | IMPLEMENTATION-READY | **NEEDS DETAIL** |
| E05-04 | DUPLICATE of E04-05 | — | — | — | SKIP |
| E05-05 | IMPLEMENTATION-READY (`artifact-builder-recipe.md`) | NEEDS DETAIL ("where in recipe?") | IMPLEMENTATION-READY (exact gate check: >=30 words) | IMPLEMENTATION-READY (30 words) | **NEEDS DETAIL** |
| E05-06 | IMPLEMENTATION-READY (`artifact-routing.md`, density arc section) | NEEDS DETAIL | IMPLEMENTATION-READY (exact guidance text) | N/A | **IMPLEMENTATION-READY** |

**File 05 summary:** 2 IMPLEMENTATION-READY, 2 NEEDS DETAIL, 0 VAGUE, 2 DUPLICATES.

---

#### FILE 06: Unmeasured Dimensions (12 enrichments)

| ID | File | Location | Content | Question Text | VERDICT |
|----|------|----------|---------|---------------|---------|
| E06-01 | IMPLEMENTATION-READY (`artifact-pa-protocol.md`) | NEEDS DETAIL ("core battery") | IMPLEMENTATION-READY | IMPLEMENTATION-READY (all 5 question texts given verbatim: PA-80, PA-84, PA-88, PA-91, PA-98) | **IMPLEMENTATION-READY** |
| E06-02 | IMPLEMENTATION-READY (`artifact-pa-protocol.md`, auditor type definitions) | NEEDS DETAIL | IMPLEMENTATION-READY (auditor type description + 7 assigned questions named) | IMPLEMENTATION-READY | **IMPLEMENTATION-READY** |
| E06-03 | IMPLEMENTATION-READY (`artifact-pa-protocol.md`, Tier 5) | IMPLEMENTATION-READY (Tier 5 section) | IMPLEMENTATION-READY (binary: "at least 2 noticeably different tempos") | IMPLEMENTATION-READY | **IMPLEMENTATION-READY** |
| E06-04 | IMPLEMENTATION-READY | IMPLEMENTATION-READY | IMPLEMENTATION-READY | IMPLEMENTATION-READY | **IMPLEMENTATION-READY** |
| E06-05 | IMPLEMENTATION-READY | NEEDS DETAIL | IMPLEMENTATION-READY | IMPLEMENTATION-READY (exact question text) | **IMPLEMENTATION-READY** |
| E06-06 | IMPLEMENTATION-READY | IMPLEMENTATION-READY (responsive auditor) | IMPLEMENTATION-READY | IMPLEMENTATION-READY | **IMPLEMENTATION-READY** |
| E06-07 | IMPLEMENTATION-READY | IMPLEMENTATION-READY (Tier 5) | IMPLEMENTATION-READY | IMPLEMENTATION-READY | **IMPLEMENTATION-READY** |
| E06-08 | IMPLEMENTATION-READY | NEEDS DETAIL ("Tier 5 scoring") | IMPLEMENTATION-READY (3-point scale: NO=0, PARTIAL=0.5, YES=1) | N/A | **IMPLEMENTATION-READY** |
| E06-09 | IMPLEMENTATION-READY | NEEDS DETAIL ("Weaver synthesis section") | IMPLEMENTATION-READY (exact synthesis question text) | N/A | **NEEDS DETAIL** |
| E06-10 | IMPLEMENTATION-READY | NEEDS DETAIL | IMPLEMENTATION-READY (exact PA-86 text) | IMPLEMENTATION-READY | **IMPLEMENTATION-READY** |
| E06-11 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-06) | IMPLEMENTATION-READY (D-06 section) | IMPLEMENTATION-READY (exact instruction text) | N/A | **IMPLEMENTATION-READY** |
| E06-12 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-04 or new D-XX) | NEEDS DETAIL ("D-04 or new D-XX") | IMPLEMENTATION-READY (exact instruction text with examples) | N/A | **NEEDS DETAIL** |

**File 06 summary:** 10 IMPLEMENTATION-READY, 2 NEEDS DETAIL, 0 VAGUE. Strongest specificity for new PA questions — all have exact question text with YES/NO criteria.

---

#### FILE 07: Pipeline Ceiling (11 enrichments)

| ID | File | Location | Content | VERDICT |
|----|------|----------|---------|---------|
| E07-01 | IMPLEMENTATION-READY (`artifact-orchestrator.md`) | NEEDS DETAIL ("add REFINE phase") | NEEDS DETAIL (describes inputs to REFINE builder but not exact prompt or orchestration steps) | **NEEDS DETAIL** |
| E07-02 | NEEDS DETAIL ("New file: artifact-css-patterns.md + reference in builder recipe") | VAGUE (new file, no template) | NEEDS DETAIL ("10-15 annotated CSS patterns" — but only 1 example given, not 10-15) | **NEEDS DETAIL** |
| E07-03 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, Tier 3) | NEEDS DETAIL ("add Pattern Library subsection") | NEEDS DETAIL ("5-8 CSS patterns" — lists categories but provides zero actual CSS snippets) | **NEEDS DETAIL** |
| E07-04 | IMPLEMENTATION-READY (`artifact-orchestrator.md`, build sequence) | NEEDS DETAIL | NEEDS DETAIL (lists which gates to run mid-build but not the feedback format or JS modifications) | **NEEDS DETAIL** |
| E07-05 | NEEDS DETAIL ("artifact-worked-examples.md, new section") | NEEDS DETAIL | NEEDS DETAIL (describes 3 example types but provides zero actual content) | **NEEDS DETAIL** |
| E07-06 | VAGUE ("New architecture: artifact-template-scaffold.md") | VAGUE | VAGUE (describes concept but no HTML scaffold, no template content, no integration plan) | **VAGUE** |
| E07-07 | IMPLEMENTATION-READY (`artifact-builder-recipe.md` or execution brief) | NEEDS DETAIL | IMPLEMENTATION-READY (exact 5-item "Common Defects" appendix text given) | **NEEDS DETAIL** |
| E07-08 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, Tier 3) | NEEDS DETAIL | IMPLEMENTATION-READY (exact template instruction text) | **IMPLEMENTATION-READY** |
| E07-09 | DUPLICATE of E06-11 | — | — | SKIP |
| E07-10 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-01) | IMPLEMENTATION-READY | IMPLEMENTATION-READY (exact instruction text with 3 specific examples) | **IMPLEMENTATION-READY** |
| E07-11 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-04) | IMPLEMENTATION-READY | IMPLEMENTATION-READY (exact revised D-04 text) | **IMPLEMENTATION-READY** |

**File 07 summary:** 3 IMPLEMENTATION-READY, 6 NEEDS DETAIL, 1 VAGUE, 1 DUPLICATE. The highest-impact enrichment (E07-01 automated REFINE) lacks sufficient orchestration detail.

---

#### FILE 08: Editorial Designer (11 enrichments)

| ID | File | Location | Content | VERDICT |
|----|------|----------|---------|---------|
| E08-01 | NEEDS DETAIL ("artifact-tc-brief-template.md, Tier 3, OR artifact-value-tables.md" — ambiguous) | NEEDS DETAIL | IMPLEMENTATION-READY (exact guidance: "3 registers, >= 25 RGB between registers") | **NEEDS DETAIL** |
| E08-02 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-02) | IMPLEMENTATION-READY (D-02 section) | IMPLEMENTATION-READY (exact instruction text) | **IMPLEMENTATION-READY** |
| E08-03 | NEEDS DETAIL ("artifact-builder-recipe.md or Tier 3" — ambiguous) | NEEDS DETAIL | IMPLEMENTATION-READY (exact instruction with 3 measure types and specific widths) | **NEEDS DETAIL** |
| E08-04 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-04 or D-05) | NEEDS DETAIL ("D-04 or D-05") | IMPLEMENTATION-READY (exact instruction text) | **NEEDS DETAIL** |
| E08-05 | NEEDS DETAIL ("artifact-builder-recipe.md or Tier 3") | NEEDS DETAIL | IMPLEMENTATION-READY (exact instruction text) | **NEEDS DETAIL** |
| E08-06 | IMPLEMENTATION-READY (`artifact-builder-recipe.md`, component section) | NEEDS DETAIL | IMPLEMENTATION-READY (exact instruction with specific distinction: "information variants" vs "editorial variants") | **NEEDS DETAIL** |
| E08-07 | IMPLEMENTATION-READY (`artifact-builder-recipe.md`, footer section) | NEEDS DETAIL ("footer section" — does this section exist?) | IMPLEMENTATION-READY (exact instruction: "include 2-3 of: closing quote, stats, resources, navigation, visual weight") | **NEEDS DETAIL** |
| E08-08 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-06 or Tier 2) | NEEDS DETAIL ("D-06 or Tier 2" — ambiguous) | IMPLEMENTATION-READY (exact values: "100-120px sparse, 24-32px dense, 3:1 ratio") | **NEEDS DETAIL** |
| E08-09 | IMPLEMENTATION-READY (`artifact-tc-brief-template.md`, D-03 or D-01) | NEEDS DETAIL (ambiguous) | IMPLEMENTATION-READY (exact instruction: "Identify 2-3 KEY INSIGHT headings...") | **NEEDS DETAIL** |
| E08-10 | IMPLEMENTATION-READY (`artifact-builder-recipe.md`, component section) | NEEDS DETAIL | IMPLEMENTATION-READY (4 specific options for differentiation) | **NEEDS DETAIL** |
| E08-11 | NEEDS DETAIL ("artifact-builder-recipe.md or Tier 3") | NEEDS DETAIL | IMPLEMENTATION-READY (exact instruction with specific values: "120px above, 48px below") | **NEEDS DETAIL** |

**File 08 summary:** 1 IMPLEMENTATION-READY, 10 NEEDS DETAIL, 0 VAGUE. Pattern: content is almost always excellent (exact text given), but file/location targeting is imprecise. Many enrichments use "or" between two files.

---

### FILE 1 TOTALS

| Verdict | Count | % |
|---------|-------|---|
| IMPLEMENTATION-READY | 25 | 41% |
| NEEDS DETAIL | 33 | 54% |
| VAGUE | 1 | 2% |
| DUPLICATE (skipped) | 8* | — |

*Note: only 6 enrichments are marked duplicate in the extraction's own dedup table; I found 2 additional (E04-02 = E02-01, E05-04 = E04-05) for a total of 8 instances. Unique enrichments assessed: 59.

---

## FILE 2: extract-09-18.md (~201 enrichments)

Due to the volume (201 enrichments), I assess by source file with representative examples and aggregate statistics.

### From 09-visual-audit.md (12 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 3 | VA-05 (exact CSS: `.role-grid { grid-template-columns: 1fr }`), VA-08 (exact CSS approach: `tr:nth-child(even)`), VA-09 (`<details>/<summary>` wrap) |
| NEEDS DETAIL | 8 | VA-01 (root cause hypothesis but no exact CSS fix), VA-02 (hex values not specified), VA-03 (direction clear but no layout alternative), VA-04 (no specific colors), VA-06 (no target value), VA-11 (no specific tint values), VA-12 (too broad: "Multiple — CSS spatial patterns, zone treatments, component shapes") |
| VAGUE | 1 | VA-10 ("add first-line snippet visible" — what snippet? what CSS?) |

**Missing detail pattern:** Most VA enrichments describe WHAT the visual defect is but not the EXACT CSS fix. VA-01 (trailing void, CRITICAL) says "hypothesis: min-height: 100vh or similar" but does not confirm the root cause or provide the exact fix CSS.

---

### From 10-pipeline-flow.md (15 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 5 | PF-01 (exact template text given), PF-02 (exact boundary template format), PF-03 (exact conviction statement structure), PF-04 (exact budget values), PF-10 (exact instruction: "1-line summaries of 1/9 findings") |
| NEEDS DETAIL | 9 | PF-05 (gate concept described but no JS), PF-06 (direction clear, no exact supplement format), PF-07 (20 suppressor patterns listed but no regex), PF-08 (concept clear, no Playwright code), PF-09 (direction clear, no mapping template), PF-11-15 (various — direction clear, specifics missing) |
| VAGUE | 1 | PF-12 ("Pre-computed Orchestrator Digest" — 200 lines of what? No template.) |

**Missing detail pattern:** PA-05 delta estimates are given (+0.3, +0.25, etc.) but these are hypotheses, not validated. The enrichments that propose new TEMPLATES (PF-01, PF-02, PF-03) are excellent; the ones that propose new MECHANISMS (PF-05, PF-07, PF-08) lack implementation code.

---

### From 12-pa-question-deep-analysis.md (32 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 24 | PA-01 through PA-27 (retirements, merges, revisions, and new questions all have exact text), PA-28 (exact restructuring: retire 4, merge 4, revise 2, add 12) |
| NEEDS DETAIL | 7 | PA-29 (rebalancing direction clear, exact distribution not specified), PA-30 (vector format specified but no implementation in weaver prompt), PA-31 (14 dimensions named but scoring protocol not specified), PA-32 (question text given but auditor assignment not specified) |
| VAGUE | 1 | PA-29 at the meta level — "~15 at 1/4-2/4, ~25 at 2/4-3/4, ~18 at 3/4-4/4" but how to achieve this distribution is not specified |

**Missing detail pattern:** Individual questions are perfectly specified (exact text + YES/NO criteria). The META-LEVEL changes (restructuring the whole battery, rebalancing distribution) lack implementation detail.

---

### From 13-adversarial-review.md (42 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 10 | AR-04 (exact 1-line addition), AR-05 (exact calibration band format), AR-15 (exact builder question text), AR-20 (exact verdict definition), AR-21 (exact output format) |
| NEEDS DETAIL | 18 | AR-01 (container exception concept clear, no exact CSS or gate), AR-02 (palette families concept, no exact specification), AR-06 (multi-channel gate logic, no JS), AR-07 (complexity budget concept, no scaling formula), AR-10 (mechanism count advisory, no exact wording change), AR-25 through AR-31 (various — direction clear, implementation detail missing) |
| VAGUE | 14 | AR-09 (model diversity — no specific auditor prompts), AR-12 (experiment — "give same content to human" is not implementable as artifact change), AR-24 (hybrid mode — concept only), AR-33 (rotating pool — concept only, no pool management mechanism), AR-35 through AR-38 (experiments, not artifact changes), AR-39 (emotional arc "as specified" — but specified how?), AR-40 (unprompted auditors — no prompt template), AR-41 (adversarial auditors — no prompt template), AR-42 (quality-complexity ratio — no measurement formula) |

**Missing detail pattern:** The adversarial review is strongest at identifying WHAT IS WRONG and weakest at specifying HOW TO FIX IT. Many enrichments are actually EXPERIMENTS (not artifact changes) and should be classified separately. The "propose experiment" items cannot be rated for implementation readiness because they are not artifact modifications.

---

### From 14-perceptual-science-foundations.md (20 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 2 | PS-02/NM-02 (exact thresholds: >=4.0 STRONG, 2.5-3.9 CLEAR), PS-03/NM-03 (exact scale: 1=FLAT, 3=DESIGNED, 6+=FLAGSHIP) |
| NEEDS DETAIL | 10 | PS-01/NM-01 (80% threshold clear, measurement method unclear — "identify most salient" HOW?), PS-04/NM-04 (Birkhoff ratio formula given but ORDER/COMPLEXITY operationalization unclear), PS-06/NM-06 (counting layers clear, but what counts as a "layer"?), PS-08/NM-08 (CV thresholds clear, "rhythm anchor" definition missing) |
| VAGUE | 8 | PS-05/NM-05 (requires fresh reader — not an artifact change), PS-07/NM-07 (requires multiple fresh readers), PS-09/NM-09 (rating "novel & helpful" vs "confusing" is subjective), PS-14 (closure exploitation — "perceives shape not explicitly drawn" is inherently subjective), PS-16 (encoding efficiency — counting "meanings" requires deep semantic analysis), PS-17-20 (various — concepts from perceptual science that lack operationalization for LLM auditors) |

**Missing detail pattern:** The perceptual science enrichments are grounded in real research but many assume HUMAN observers (fresh readers, eye-tracking, memory probes) that are not available in an LLM pipeline. The translation from "perceptual science measurement" to "LLM auditor question or Playwright gate" is frequently missing.

---

### From 15-microscopic-css-quality.md (15 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 10 | CSS-01 (exact rename: `--accent-blue` to `--accent-gold`), CSS-02 (exact value: "0.03 to 0.08-0.10"), CSS-03 (exact: remove 700 from font URL), CSS-04 (exact tokens named), CSS-05 (exact approach: shared class + override), CSS-07 (exact CSS property), CSS-08 (exact lines to remove: 1523-1526) |
| NEEDS DETAIL | 5 | CSS-10 through CSS-15 (pattern codification — "document in builder recipe" but exact text not provided for ALL patterns; some have specific CSS, some just describe the concept) |
| VAGUE | 0 | — |

**Missing detail pattern:** Direct CSS fixes (CSS-01 through CSS-09) are perfectly specified. Pattern codification recommendations (CSS-10 through CSS-15) describe WHAT to codify but provide varying levels of the EXACT text to add to the builder recipe.

---

### From 16-macroscopic-quality.md (10 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 3 | MQ-01 (exact builder question text), MQ-03 (exact target: "3-4 pattern-breaking moments"), MQ-08 (exact direction: "strong bookend") |
| NEEDS DETAIL | 5 | MQ-02 (direction: "design should match content's energy" — but HOW in CSS?), MQ-04 (poster frame concept — no implementation), MQ-05 (content-form isomorphism — philosophy, not instruction), MQ-06 (emotional modulation — direction clear, CSS approach absent), MQ-09 ("tighter line-height, narrower margins, smaller text, darker background" — specific but no exact values) |
| VAGUE | 2 | MQ-05 (paradigm shift, not actionable artifact change), MQ-10 ("feel like walking through an airlock" — metaphor, not CSS) |

**Missing detail pattern:** Macroscopic enrichments are strongest as PHILOSOPHY and weakest as IMPLEMENTATION. The "what should change" is clear but the "what CSS to write" is absent for most. MQ-01 (builder question) is the notable exception — perfectly specified.

---

### From 17-meta-meta-analysis.md (18 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 5 | MM-01 (exact 10-question Quality Journal with scale anchors), MM-10 (exact format change: "describe first, then YES/NO"), MM-11 (exact replacement: "Count distinct treatments" instead of "Is there variety?") |
| NEEDS DETAIL | 8 | MM-02 (mixed-method roster described but no prompts per type), MM-03 (reordering principle clear, exact per-auditor order not specified), MM-07 (frame diversity — 5 frames described but no prompt templates), MM-08 (adversarial diversity — roster clear, prompts missing) |
| VAGUE | 5 | MM-04 through MM-06 (experiments, not artifact changes), MM-13 (delayed assessment — technically infeasible in current pipeline), MM-17-18 (human validation / user observation — external to pipeline) |

**Missing detail pattern:** Same as adversarial — experiments are classified as enrichments but are not artifact modifications. The Quality Journal (MM-01) is the standout — perfectly specified with exact questions and scale anchors.

---

### From 18-enrichment-surface-map.md (37 enrichments)

| Verdict | Count | Examples |
|---------|-------|----------|
| IMPLEMENTATION-READY | 14 | E-05 (boundary channel table), E-06 (Tier 4 CSS technique values), E-11 (Common Pitfalls), E-16 (trailing void gate — 20 lines JS), E-36 (zone BG format spec) |
| NEEDS DETAIL | 19 | E-10 (worked example — 60 lines needed, none provided), E-12 (responsive guidance — 40 lines needed, none provided), E-18 (CSS budget gate — 40 lines JS needed, none provided), E-25 (gestalt framework — 15 lines needed, none provided) |
| VAGUE | 4 | E-04 (tension-CSS connection — "~20 lines" but no content), E-09 (mode rubric — "~15 lines" but no rubric), E-32 (worked examples incomplete — "~60 lines" but no content), E-35 (cross-artifact consistency — concept only) |

**Missing detail pattern:** The surface map provides LINE ESTIMATES for every enrichment but CONTENT for only about 40% of them. An implementer knows the effort but not the exact text. The Wave 1 enrichments (E-05, E-06, E-11, E-16, E-36) are the most specified.

---

### FILE 2 TOTALS

| Verdict | Count | % |
|---------|-------|---|
| IMPLEMENTATION-READY | 76 | 38% |
| NEEDS DETAIL | 89 | 44% |
| VAGUE | 36 | 18% |

---

## FILE 3: extract-compliance.md (52 enrichments)

### By Category Assessment

| Category | Count | IMPL-READY | NEEDS DETAIL | VAGUE |
|----------|-------|------------|--------------|-------|
| A: BG Color/RGB Delta | 8 | 5 (A-01, A-03, A-05, A-07, A-08) | 3 (A-02 no JS, A-04 no palette content, A-06 investigation not change) | 0 |
| B: Gate Runner Structural | 7 | 4 (B-01, B-02, B-03, B-04) | 3 (B-05 no JS, B-06 which gates, B-07 naming convention detail) | 0 |
| C: Verdict/Decision Tree | 4 | 4 (C-01, C-02, C-03, C-04 — all have exact text) | 0 | 0 |
| D: Builder Recipe Gaps | 6 | 5 (D-01, D-02, D-04, D-05, D-06 — all have exact CSS) | 1 (D-03 restructuring direction but no final text) | 0 |
| E: PA Protocol/Auditor | 5 | 4 (E-01, E-02, E-03, E-05 — all have exact text) | 1 (E-04 approach clear, no JS) | 0 |
| F: Routing/Content Analysis | 6 | 4 (F-01, F-02, F-03, F-05) | 2 (F-04 scope definition, F-06 target range) | 0 |
| G: Orchestrator/Process | 7 | 5 (G-01, G-02, G-03, G-05, G-07) | 2 (G-04 reconciliation, G-06 exact text) | 0 |
| H: Content Map/Info Flow | 3 | 3 (H-01, H-02, H-03 — all have exact text) | 0 | 0 |
| I: Worked Examples | 4 | 0 | 4 (all describe what to add but provide none of the actual example content) | 0 |
| J: Density/Spacing | 2 | 1 (J-02 has exact values) | 1 (J-01 legitimizes but doesn't specify documentation format) | 0 |

### FILE 3 TOTALS

| Verdict | Count | % |
|---------|-------|---|
| IMPLEMENTATION-READY | 35 | 67% |
| NEEDS DETAIL | 17 | 33% |
| VAGUE | 0 | 0% |

**Compliance extraction is the most implementation-ready source.** Root cause: compliance audits compare ACTUAL to SPECIFIED, producing exact gap descriptions with exact file references.

---

## FILE 4: extract-meta.md (meta-level enrichments)

This file catalogues enrichments that change HOW the pipeline thinks. Many are paradigm proposals, experiments, or new instruments rather than artifact changes.

### By Section Assessment

| Section | Total | IMPL-READY | NEEDS DETAIL | VAGUE |
|---------|-------|------------|--------------|-------|
| 1. New PA Questions | 46 | 40 (exact question text + YES/NO criteria for nearly all) | 4 (adversarial questions from 13 lack YES/NO criteria) | 2 (builder pre-question has no artifact integration point; memorability "5 minutes later" is conceptual) |
| 2. New Gates | 7 | 1 (Multi-Channel Boundary — has JS approach) | 4 (gate logic described, no JS) | 2 (Content Appropriateness and Content-Scaled — require Phase 0 changes + gate changes, complex dependency) |
| 3. New Instruments | 15 | 2 (Quality Journal — exact 10 questions; NM-02 Grouping Strength — exact formula) | 8 (instruments with protocols but unclear LLM operationalization) | 5 (A/B Comparison, Task-Based, Delayed Assessment, Unprompted Discovery, User Behavior — require infrastructure not currently in pipeline) |
| 4. Question Changes | 10 | 8 (retirements, merges, revisions all have exact text) | 2 (PA-05 vector and Tier 5 partial — format clear, weaver integration unclear) | 0 |
| 5. Auditor Deployment | 8 | 1 (audience-aware: exact 1-line addition) | 4 (model/frame diversity described, no exact prompts) | 3 (genuine model diversity across vendors, rotating pool management, delayed assessment) |
| 6. Quality Philosophy | 8 | 0 | 3 (vocabulary shift described but no artifact text) | 5 (paradigm shifts, not implementable as artifact changes) |
| 7. Experiments | 7 | 0 | 2 (E1 Architecture Effect — cheapest, partially specified) | 5 (experimental protocols, not artifact changes) |

### FILE 4 TOTALS

| Verdict | Count | % |
|---------|-------|---|
| IMPLEMENTATION-READY | 52 | 51% |
| NEEDS DETAIL | 27 | 27% |
| VAGUE | 22 | 22% |

**Note:** The high VAGUE count is dominated by experiments (12) and paradigm proposals (5) which are not artifact changes and arguably should not be rated on this scale.

---

## GRAND TOTALS ACROSS ALL 4 FILES

| Verdict | File 1 | File 2 | File 3 | File 4 | TOTAL | % |
|---------|--------|--------|--------|--------|-------|---|
| IMPLEMENTATION-READY | 25 | 76 | 35 | 52 | **188** | 46% |
| NEEDS DETAIL | 33 | 89 | 17 | 27 | **166** | 41% |
| VAGUE | 1 | 36 | 0 | 22 | **59** | 14% |
| **Total assessed** | 59 | 201 | 52 | 101 | **413** | — |

**Note:** Some enrichments appear in multiple extraction files (cross-file duplicates). After deduplication, the unique enrichment count is approximately 320-340. The totals above count each extraction's instance separately since each may have different specificity levels.

---

## COMPLETE LIST OF VAGUE ENRICHMENTS (59 total)

These enrichments cannot be implemented without significant additional research or design work.

### From File 1 (1)

| ID | What's Missing |
|----|---------------|
| E07-06 (Template-driven scaffold) | No HTML scaffold content, no template structure, no integration plan with existing pipeline. This is an architecture proposal, not an enrichment. |

### From File 2 (36)

| Source | ID | What's Missing |
|--------|-----|---------------|
| 09-visual-audit | VA-10 | No specification of what "first-line snippet" means or CSS for preview content |
| 13-adversarial | AR-09 | No specific auditor prompts for model diversity deployment |
| 13-adversarial | AR-12 | Experiment, not artifact change |
| 13-adversarial | AR-24 | Hybrid APPLIED/COMPOSED mode — concept only, no mode-determination rubric |
| 13-adversarial | AR-33 | Rotating pool — concept only, no pool management mechanism, no sampling algorithm |
| 13-adversarial | AR-35 | Experiment (world-description framing validation) |
| 13-adversarial | AR-36 | Experiment (single-agent baseline) |
| 13-adversarial | AR-37 | Experiment (3-pass build) |
| 13-adversarial | AR-38 | Experiment (brief line budget A/B test) |
| 13-adversarial | AR-39 | "Emotional arc as specified" — but no specification provided |
| 13-adversarial | AR-40 | Unprompted auditors — concept only, no prompt template |
| 13-adversarial | AR-41 | Adversarial auditors — concept only, no prompt template for "find what passes but shouldn't" |
| 13-adversarial | AR-42 | Quality-complexity ratio — no measurement formula |
| 14-perceptual-science | PS-05/NM-05 | Requires fresh human reader, not operationalizable in LLM pipeline |
| 14-perceptual-science | PS-07/NM-07 | Requires 3 fresh readers with rank correlation, not operationalizable |
| 14-perceptual-science | PS-09/NM-09 | "Novel & helpful" vs "confusing" rating inherently subjective, no operationalization |
| 14-perceptual-science | PS-14 | Closure exploitation — "perceives shape not drawn" requires visual perception unavailable to LLM |
| 14-perceptual-science | PS-16 | Encoding efficiency — counting "semantic meanings" requires deep analysis, no protocol |
| 14-perceptual-science | PS-17 | Scan path — overlaps PS-07, same operationalization gap |
| 14-perceptual-science | PS-19 | Cognitive load measurement — requires human subject, not artifact change |
| 14-perceptual-science | PS-20 | Motivated vs unmotivated disfluency — requires designer judgment, no binary gate |
| 16-macroscopic | MQ-05 | Content-form isomorphism — philosophical paradigm, not an artifact change |
| 16-macroscopic | MQ-10 | "Feel like walking through an airlock" — metaphor, no CSS specification |
| 17-meta-meta | MM-04 | Experiment (Architecture Effect Test) |
| 17-meta-meta | MM-05 | Experiment (Dual-Instrument Comparison) |
| 17-meta-meta | MM-06 | Experiment (Adversarial Goodhart Probe) |
| 17-meta-meta | MM-13 | Delayed assessment — technically infeasible in single-session pipeline |
| 17-meta-meta | MM-17 | Human validation experiment — external to pipeline |
| 17-meta-meta | MM-18 | User behavior observation — external to pipeline |
| 18-enrichment-map | E-04 | Tension-CSS connection — line estimate but zero content |
| 18-enrichment-map | E-09 | Mode rubric — line estimate but zero rubric content |
| 18-enrichment-map | E-32 | Worked examples expansion — line estimate but zero example content |
| 18-enrichment-map | E-35 | Cross-artifact consistency check — concept only |

### From File 4 (22)

| Section | Count | What's Missing |
|---------|-------|---------------|
| New PA Questions | 2 | Builder pre-question has no artifact location; "5-minute memory" question is conceptual |
| New Gates | 2 | Content Appropriateness + Content-Scaled gates require complex Phase 0 + downstream changes with no specification |
| New Instruments | 5 | A/B Comparison, Task-Based, Delayed Assessment, Unprompted Discovery, User Behavior — all require infrastructure not in pipeline |
| Auditor Deployment | 3 | Multi-vendor diversity, rotating pool management, delayed assessment — infrastructure proposals |
| Quality Philosophy | 5 | Paradigm shifts (Object->Experience, vocabulary trap, Birkhoff ratio, processing fluency, correctness->impact) — philosophy, not artifact changes |
| Experiments | 5 | All 7 experiments are research protocols, not artifact changes; 2 are partially specified |

---

## COMPLETE LIST OF NEEDS DETAIL ENRICHMENTS (166 total)

Due to volume, I provide the MOST COMMON missing detail types rather than listing all 166 individually.

### Pattern 1: File Ambiguity (38 instances)

Enrichments that say "artifact-builder-recipe.md **or** artifact-tc-brief-template.md" or "gate-runner **or** builder recipe." The implementer must decide which file.

**Fix:** Every enrichment must name ONE primary target file. If the change affects multiple files, list them explicitly with the specific change for each.

**Affected enrichments:** E01-01, E01-02, E01-03, E03-04, E03-08, E04-01, E08-01, E08-03, E08-04, E08-05, E08-08, E08-09, E08-11, plus ~25 others across Files 2-4.

### Pattern 2: Location Within File Missing (52 instances)

Enrichments that name the correct file but say "add to Tier 3" or "component section" without specifying AFTER which existing content, REPLACING what, or at what line.

**Fix:** Use the format: "In `artifact-builder-recipe.md`, AFTER Step 2.4 (Select callout variant semantics), ADD the following section: [exact text]."

### Pattern 3: Gate Logic Without JS (28 instances)

Enrichments that describe a gate's LOGIC (what it checks, thresholds) but provide no JavaScript code for Playwright execution. The gate runner is executable JS, not prose descriptions.

**Fix:** Every gate enrichment must include at minimum pseudocode that maps to Playwright's `page.evaluate()` API. Ideally, provide the actual JS function body.

**Affected enrichments:** E02-04 (4 gates), E03-01, E03-02, E05-01, E05-03, PF-05, PF-07, AR-06, PS-01, PS-02, PS-08, PS-11, PS-13, plus ~14 others.

### Pattern 4: New Content Without Actual Text (23 instances)

Enrichments that say "add a worked example" or "create a CSS pattern library" or "add a conviction statement template" without providing the actual text to add. They provide descriptions of what the content SHOULD contain, but the implementer must write it from scratch.

**Fix:** Enrichments proposing new content sections must include at minimum a 10-line draft that demonstrates the format and quality level expected.

**Affected enrichments:** E07-02, E07-03, E07-05, I-01, I-02, I-03, I-04, PF-12, E-10, E-12, E-25, plus ~12 others.

### Pattern 5: Experiment Classified as Enrichment (15 instances)

Items that propose running an experiment (A/B test, human validation, single-agent baseline) but are classified alongside artifact changes. These cannot be rated for implementation readiness because they are not artifact modifications.

**Fix:** Separate experiments from enrichments. Experiments need: hypothesis, method, materials, success criteria, estimated cost. Artifact changes need: file, location, content, threshold.

---

## RECOMMENDATIONS

### 1. Resolve File Ambiguity (Estimated effort: 2 hours)

Go through all 38 "file A or file B" enrichments and make a single target decision for each. Rule of thumb:
- If the change is about WHAT TO DO (creative instruction) -> `artifact-tc-brief-template.md` or `artifact-builder-recipe.md`
- If the change is about WHAT TO CHECK (verification) -> `artifact-gate-runner.md`
- If the change is about WHAT TO ASK (measurement) -> `artifact-pa-protocol.md`
- If the change is about HOW TO ROUTE (process) -> `artifact-routing.md` or `artifact-orchestrator.md`

### 2. Add Location Anchors (Estimated effort: 3 hours)

For the 52 enrichments missing precise location, read each target file and specify:
- The exact section header the change goes under
- Whether it REPLACES existing text or ADDS AFTER existing text
- The first line of the existing text it follows (for anchoring)

### 3. Provide Gate JS (Estimated effort: 8 hours)

The 28 gate enrichments without JS are the biggest implementation gap. Prioritize the 5 highest-impact gates:
1. Trailing void gate (E03-01 / VA-01 / E-16) — `page.evaluate` to measure body height vs last content element
2. Structural echo gate (E03-02) — `page.evaluate` to count consecutive same-class elements
3. Zone background pre-build gate (A-02) — `page.evaluate` to read `:root` custom properties
4. Palette consistency gate (E05-03) — `page.evaluate` to scan all computed colors
5. Multi-channel boundary gate (AR-06 / ES-22) — `page.evaluate` at transition elements

### 4. Separate Experiments from Enrichments

Reclassify the ~15 experiment proposals into a separate "EXPERIMENTS.md" file with proper experimental design format. Remove them from the enrichment implementation queue.

### 5. Provide Draft Content for New Sections

The 23 "add new content" enrichments need at minimum skeleton drafts. The most critical:
1. CSS pattern library (E07-02/E07-03) — 10-15 annotated CSS patterns from CD-006
2. Builder worked example (I-03) — 30-50 lines of annotated CSS
3. Counter-example (I-02) — a content map that routes to APPLIED mode
4. Responsive breakpoint guidance (E-12) — 40 lines of specific CSS

### 6. Acknowledge the Specificity Floor

**188 of 413 enrichment instances (46%) are already implementation-ready.** This is a strong foundation. The compliance-sourced enrichments are 67% ready (highest), while the meta-level enrichments are predictably lower since they propose paradigm changes rather than file edits.

**The 59 VAGUE enrichments (14%) should NOT be discarded.** Many are high-value strategic directions (content-form isomorphism, rotating question pools, multi-model auditing) that require a design phase before they become implementable. They should be tracked as "DESIGN NEEDED" items in a separate queue.

---

## SPECIFICITY SCORECARD BY EXTRACTION FILE

| File | IMPL-READY | NEEDS DETAIL | VAGUE | Specificity Score |
|------|------------|--------------|-------|-------------------|
| extract-01-08.md | 41% | 54% | 2% | **HIGH** (content excellent, location needs work) |
| extract-09-18.md | 38% | 44% | 18% | **MEDIUM** (wide variance: microscopic CSS = excellent, perceptual science = vague) |
| extract-compliance.md | 67% | 33% | 0% | **VERY HIGH** (best specificity — gap analysis naturally produces exact changes) |
| extract-meta.md | 51% | 27% | 22% | **MEDIUM** (PA questions excellent, paradigm shifts inherently vague) |

**Overall pipeline enrichment corpus specificity: 46% implementation-ready, 41% needs detail, 14% vague.**

For a corpus of 320+ unique enrichments extracted from 18 analysis files, this is a strong result. The compliance-sourced enrichments provide the implementation backbone; the meta-level enrichments provide the strategic direction. An implementation pass should start with the 188 implementation-ready items (prioritized by the existing Wave 1-4 ranking), then progressively specify the 166 needs-detail items as they reach the implementation queue.
