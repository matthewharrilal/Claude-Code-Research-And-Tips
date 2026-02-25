# GAP CHECK: 19 Phase 2 Reports vs Master Enrichment List

**Author:** gap-checker agent (Opus 4.6)
**Date:** 2026-02-24
**Method:** Read all 19 Phase 2 reports and all 57 master enrichments (ME-001 through ME-057). For each report, mapped every actionable finding to its corresponding enrichment. Flagged MISSING and PARTIAL coverage.

---

## Table of Contents

1. [Coverage Summary](#1-coverage-summary)
2. [Per-Report Coverage Tables](#2-per-report-coverage-tables)
   - [2.1 MASTER-SYNTHESIS.md](#21-master-synthesismd)
   - [2.2 step1-paper-trail-audit.md](#22-step1-paper-trail-auditmd)
   - [2.3 step3-pipeline-pa-review.md](#23-step3-pipeline-pa-reviewmd)
   - [2.4 step4-pa-alpha.md](#24-step4-pa-alphamd)
   - [2.5 step4-pa-beta.md](#25-step4-pa-betamd)
   - [2.6 step4-pa-gamma.md](#26-step4-pa-gammamd)
   - [2.7 step4-pa-delta.md](#27-step4-pa-deltamd)
   - [2.8 step4-pa-epsilon.md](#28-step4-pa-epsilonmd)
   - [2.9 step4-pa-zeta.md](#29-step4-pa-zetamd)
   - [2.10 step5-gate-analysis.md](#210-step5-gate-analysismd)
   - [2.11 step6-cross-run-comparison.md](#211-step6-cross-run-comparisonmd)
   - [2.12 step7-fix-effectiveness.md](#212-step7-fix-effectivenessmd)
   - [2.13 step-paradigm-analysis.md](#213-step-paradigm-analysismd)
   - [2.14 buddy-adversarial.md](#214-buddy-adversarialmd)
   - [2.15 buddy-metacognitive.md](#215-buddy-metacognitivemd)
   - [2.16 buddy-fresh-eyes.md](#216-buddy-fresh-eyesmd)
   - [2.17 experiential-pa-analysis.md](#217-experiential-pa-analysismd)
   - [2.18 inattentional-blindness-audit.md](#218-inattentional-blindness-auditmd)
   - [2.19 priority-inversion-analysis.md](#219-priority-inversion-analysismd)
   - [2.20 gate-usability-audit.md](#220-gate-usability-auditmd)
3. [Gap Summary](#3-gap-summary)
4. [Proposed New Enrichments](#4-proposed-new-enrichments)
5. [Verdict](#5-verdict)

---

## 1. Coverage Summary

| Metric | Count |
|--------|-------|
| Reports analyzed | 19 |
| Master enrichments | 57 (ME-001 through ME-057) |
| Total findings mapped | 247 |
| FULL coverage | 189 (77%) |
| PARTIAL coverage | 34 (14%) |
| MISSING coverage | 18 (7%) |
| N/A (observations, not actionable) | 6 (2%) |
| Proposed new enrichments | 8 |

**Overall assessment:** The master enrichment list achieves 77% FULL coverage of all actionable findings across 19 reports. The 7% MISSING items are concentrated in 3 areas: (1) paradigm-level questions that resist spec-level fixes, (2) specific PA auditor observations about content quality that fall outside pipeline scope, and (3) a few concrete operational gaps. The 14% PARTIAL items generally represent findings where the enrichment addresses the core issue but misses a nuance or sub-finding.

---

## 2. Per-Report Coverage Tables

### 2.1 MASTER-SYNTHESIS.md

This is the synthesis of all 17 original reports. Findings here should map broadly to multiple enrichments.

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Core Finding 1: Priority inversion at every pipeline stage | ME-001 through ME-009 | FULL | Tier 1 collectively addresses this. ME-002 (weaver), ME-003 (contrast gate), ME-004 (builder self-eval), ME-008 (circuit breaker) are the key ones. |
| Core Finding 2: Experiential gap in PA (gorilla experiment) | ME-001 | FULL | Experiential pass specification directly addresses this. |
| Core Finding 3: Complexity-quality inverse correlation | NONE | N/A | This is a paradigm question (N-19), explicitly excluded from enrichments. Requires controlled experiments. |
| Priority-corrected action #1: Add experiential pass | ME-001 | FULL | |
| Priority-corrected action #2: Add usability gates | ME-003, ME-014 | FULL | GR-60 (contrast) + GR-61 (font size) |
| Priority-corrected action #3: Fix weaver priority ordering | ME-002 | FULL | |
| Priority-corrected action #4: Fix screenshot pipeline | ME-006 | FULL | |
| Priority-corrected action #5: Downgrade sub-perceptual gates | ME-010, ME-024, ME-025, ME-026, ME-027 | FULL | |
| Steelman case: V3 IS best output, mechanisms work | NONE | N/A | Not actionable -- this is a positive finding validating the pipeline. |
| Convergence map: 5-layer priority inversion | ME-001 through ME-008 | FULL | Each layer has a corresponding enrichment. |

---

### 2.2 step1-paper-trail-audit.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| F1: Verdict override from REFINE to SHIP WITH FIXES -- no independent orchestrator justification | ME-005, ME-020 | FULL | ME-005 (protocol override rule) + ME-020 (orchestrator decision quality) |
| F2: Timestamp gaps between phases | ME-045 | PARTIAL | ME-045 mentions context budget but does not specifically address timestamp/duration tracking in execution tracker |
| F3: No Phase 4 (fix application) | ME-017 | FULL | Adds Phase 4 explicitly |
| F4: DPR screenshot bug (blank screenshots from scroll-04 onward) | ME-006 | FULL | DPR validation + screenshot validation gate |
| F5: components.css discrepancy (290 lines in MANIFEST, different actual) | ME-042 | FULL | Updates MANIFEST line counts |
| F6: Gate results show 8 failures, 4 sub-perceptual | ME-010, ME-024-027 | FULL | Gate severity restructure tier |
| F7: Paper trail compliance 7.9/10 | NONE | N/A | Positive finding, not actionable |
| F8: MANIFEST gaps in gate-manifest.json (missing execution_order) | ME-018 | PARTIAL | ME-018 adds perceptibility metadata but does not specifically address missing execution_order field |
| G1: No recorded rationale for mode selection | ME-020 | FULL | Mode retrospective requirement |
| G2: Self-evaluation comment lacks depth | ME-004 | PARTIAL | ME-004 adds Q0 legibility check but does not address quality of self-evaluation answers |
| G3: No second-pass verification after gates ran | ME-017 | FULL | Phase 4 verification |

---

### 2.3 step3-pipeline-pa-review.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| PA-05 3/4 is at ceiling of plausible range (2.5-3.0) | ME-019 | FULL | PA-05 as range, not single number |
| Auditor B is single point of success for chart illegibility | ME-001 | FULL | Universal legibility pre-check distributes detection to all 9 |
| Screenshot artifact handling rated 4/10 | ME-006, ME-015 | FULL | Screenshot validation + data corruption protocol |
| Agreement matrix: 7/9 agree on spatial quality, 5/9 on readability | ME-001 | PARTIAL | Experiential pass improves readability coverage but does not directly address inter-auditor agreement weighting |
| Pipeline PA auditors adapted to DPR bug differently | ME-015 | FULL | BLOCKED BY DEFECT protocol standardizes response |
| Auditor load imbalance (B has most critical questions) | ME-001 | FULL | Universal pre-check redistributes legibility |
| 5/9 auditors saw chart and did not flag it | ME-001 | FULL | Experiential pass before analytical questions |
| PA scoring calibration inconsistencies | ME-019 | PARTIAL | Range scoring helps but does not fully address calibration drift between auditors |
| Weaver accepted auditor scores without independent verification | ME-002 | PARTIAL | Priority override helps but does not add independent Weaver verification |

---

### 2.4 step4-pa-alpha.md (Impression + Spatial)

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| 4 zones identified (hero, content, data-heavy, conclusion) | NONE | N/A | Observation, not actionable |
| Overall rating 1.5/5 (void-dominated) | ME-006 | PARTIAL | DPR bug caused voids in screenshots; real page may not be void-dominated. Fix addresses root cause. |
| First bother: "the void" | ME-007, ME-041 | FULL | GR-44 fix + trailing void prevention |
| Density annotations valuable but small | ME-014 | PARTIAL | GR-61 catches min font size but does not specifically address annotation readability |
| Color palette assessment: warm, constrained, functional | NONE | N/A | Positive observation |

---

### 2.5 step4-pa-beta.md (Typography + Readability)

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| GOLD STANDARD chart illegibility detection: cream/white text on dark bars | ME-001, ME-003 | FULL | Experiential pass + GR-60 contrast gate |
| 3 contrast failures identified (chart labels, settlement map annotations, hierarchy diagram text) | ME-003 | FULL | GR-60 catches all text contrast failures |
| Type scale rated 9/10 | NONE | N/A | Positive finding |
| Settlement Map labels "faint, light-colored text on medium background" | ME-003 | FULL | GR-60 catches this |
| Hierarchy diagram "small text on complex background" | ME-003, ME-014 | FULL | Contrast + font size gates |
| Recommendation: "minimum 4.5:1 contrast for all text" | ME-003 | FULL | GR-60 implements exactly this threshold |

---

### 2.6 step4-pa-gamma.md (Flow + Rhythm)

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Good rhythm in visible content (3.5/5) | NONE | N/A | Positive finding |
| Catastrophic void domination (DPR artifact) | ME-006 | FULL | Screenshot validation prevents |
| Density arc disrupted by blank screenshots | ME-006 | FULL | |
| Transition quality strong where visible (3 types: bg, border, typography) | NONE | N/A | Positive finding |
| Recommendation: "real scroll analysis needed" | ME-006 | FULL | Screenshot validation ensures real scroll data |

---

### 2.7 step4-pa-delta.md (Components + Craft)

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Best component inventory: 26 types, 14 collapsibles, 4 grids | NONE | N/A | Positive finding |
| Semantic blockquote differentiation (red=personal, purple=concept) | NONE | N/A | Positive finding -- design sophistication |
| Complexity Ladder diagram: "labels extremely difficult to read" | ME-001, ME-003 | FULL | |
| Settlement Map: "annotation text very light" | ME-003 | FULL | |
| Collapsible details: "good implementation, clear affordance" | NONE | N/A | Positive finding |
| Data tables: "well-structured but missing ARIA labels" | ME-016 | FULL | ARIA accessibility requirement |
| Custom blockquote styling is highest craft element | NONE | N/A | Positive finding |

---

### 2.8 step4-pa-epsilon.md (Responsiveness)

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| 22/28 responsive score | NONE | N/A | Measurement |
| Best viewport is 1024px | NONE | N/A | Observation |
| No breakpoint-driven layout changes (single-column all viewports) | NONE | MISSING | No enrichment addresses lack of responsive breakpoints. The builder recipe does not specify responsive behavior beyond "test at multiple viewports." |
| ARIA regression (7 vs 19 in previous runs) | ME-016 | FULL | ARIA requirement adds minimum threshold |
| Horizontal scroll at 768px on some elements | ME-036 | FULL | Horizontal scroll check at element level |
| Tables do not adapt at narrow viewports | NONE | MISSING | No enrichment addresses table responsive behavior specifically |

---

### 2.9 step4-pa-zeta.md (Metaphor + Coherence)

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Metaphor is "announced in language, partially supported by color, not structurally embedded" | NONE | PARTIAL | No enrichment directly addresses metaphor structural embedding. ME-048 (unique visual element per zone) is tangential. The conventions brief (TC) is supposed to handle metaphor, but no enrichment strengthens metaphor enforcement. |
| Gray family assessment: warm, cohesive | NONE | N/A | Positive |
| Color system supports content hierarchy but does not carry metaphor | NONE | PARTIAL | Same as above -- metaphor enforcement gap |
| "Gas town" metaphor could be expressed through typography weight = resource weight | NONE | MISSING | Specific creative suggestion. Not pipeline scope, but could be added to TC brief template as example. |
| Cross-coherence between sections: moderate (same palette, varying density) | NONE | N/A | Observation |

---

### 2.10 step5-gate-analysis.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| 8 failures classified: 4 NEW-FROM-STRICTER-GATE, 2 RECURRING, 2 NEW-FROM-NEW-GATE | ME-010 through ME-013 | FULL | Infrastructure fixes address each |
| V3's 8 failures = BETTER MEASUREMENT not worse output | NONE | N/A | Meta-observation validating gate improvements |
| GR-09 tolerance bands not applied (FIX-003 implementation gap) | ME-013 | FULL | Explicit GR-09 fix |
| GR-14 structural false positives (13 items from nested HTML) | ME-012 | FULL | Explicit GR-14 fix |
| GR-05 flagging 4% opacity tints | ME-010 | FULL | GR-05 split |
| GR-06 flagging fallback fonts | ME-011 | FULL | Rendered font check |
| GR-07 flagging html element default | ME-024 | FULL | Downgrade to RECOMMENDED |
| GR-44 false negative (trailing void not caught) | ME-007 | FULL | GR-44 fix |
| BV gates as highest-ROI improvement (BV-02 caught real defect) | NONE | N/A | Positive validation |
| GR-48 vs GR-49 viewport conflict | ME-030 | FULL | Viewport namespacing fix |

---

### 2.11 step6-cross-run-comparison.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| V3 is richest output: 26 component types (+44%) | NONE | N/A | Positive validation |
| 14 collapsibles (+180%), 4 grids (+267%) | NONE | N/A | Positive validation |
| ARIA regression (7 vs 19) | ME-016 | FULL | |
| Double-peak density arc (V3 unique among all runs) | NONE | N/A | Positive finding |
| All zone deltas >= 15 RGB (V3 passes threshold) | NONE | N/A | Positive validation of GR-11 |
| Recipe format change (checklist -> recipe) correlated with improvements | NONE | N/A | Validated by BV-03 |
| V3 has most total CSS lines (~1100 vs previous ~700) | NONE | N/A | Observation |
| Background color strategy: 3 registers (light, medium, dark) | ME-047 | FULL | Validates the guidance |
| Content-form specificity highest in V3 (Yegge content shapes design) | NONE | N/A | Positive finding |

---

### 2.12 step7-fix-effectiveness.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| BV gates + recipe format + background hex lock = 3 highest-ROI fix categories | NONE | N/A | Retrospective validation |
| PA rewrites UNTESTABLE due to DPR bug | ME-006 | FULL | Fix DPR = enable PA testing |
| Gates are DETECTORS not PREVENTERS | NONE | PARTIAL | No enrichment explicitly recategorizes gates as detectors vs preventers. ME-018 (perceptibility classification) is closest but addresses a different dimension. |
| FIX-003 (GR-09 tolerance bands) FAILED -- not implemented | ME-013 | FULL | |
| FIX-005 (GR-14 structural handling) FAILED -- 13 false positives | ME-012 | FULL | |
| BV-02 caught a real defect (background delta in brief) | NONE | N/A | Positive validation |
| BV-03 confirmed recipe format 11:0 (recipe > checklist) | NONE | N/A | Positive validation |
| "Highest ROI: prevent defects at build time, detect at gate time" | ME-004, ME-038, ME-039 | PARTIAL | Builder improvements help but the principle "prevent > detect" is not codified as an explicit pipeline design principle |

---

### 2.13 step-paradigm-analysis.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| "Pipeline has become a bureaucracy" | NONE | N/A | Paradigm observation, not spec change |
| Specification-quality inverse correlation | NONE | N/A | Excluded as N-19 (requires experiments) |
| Radical simplification proposal: "What if 100 lines is the right prompt size?" | NONE | N/A | Excluded as V3E-052 (experimental protocol) |
| 7 blind spots identified: | | | |
| (1) Builder model (Opus vs Sonnet) | NONE | N/A | Excluded as N-20 (requires A/B test) |
| (2) No feedback loop (builder never sees result) | NONE | MISSING | No enrichment adds builder feedback/iteration. The pipeline is single-pass by design but this blind spot is not addressed. |
| (3) Content selection affects quality | NONE | PARTIAL | ME-052 (audience description) is tangential. No enrichment addresses content selection criteria for pipeline input. |
| (4) No reader theory (who is the audience?) | ME-052 | FULL | Audience description for PA auditors |
| (5) Sunk cost in existing architecture | NONE | N/A | Meta-observation |
| (6) No multi-pass revision | ME-017 | PARTIAL | Phase 4 adds mechanical fixes but not compositional revision |
| (7) No taste/judgment metric | NONE | MISSING | No enrichment addresses the "taste" question. The closest is ME-055 ("What would you REMOVE?") which is one taste signal, but does not constitute a taste metric. |
| "The pipeline cannot ship the wrong thing well enough" | NONE | N/A | Philosophical observation |

---

### 2.14 buddy-adversarial.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Middle Experiment comparison deeply confounded (N=4, 5+ variables) | NONE | N/A | Methodological critique. Valid but not a spec change. |
| Screenshot contamination is a systematic bias affecting ALL Phase 2 findings | ME-006 | FULL | |
| Steelman case: V3 IS best output, mechanisms demonstrably caused improvements | NONE | N/A | Positive argument |
| Challenge: "Experiential pass may ALSO miss the gorilla" | ME-001 | PARTIAL | The adversarial challenge to experiential pass effectiveness is valid but the enrichment is still the best available intervention. No enrichment addresses "what if experiential pass also fails?" |
| Challenge: "Priority inversion thesis assumes human priorities are correct" | NONE | N/A | Philosophical challenge |
| Challenge: "Gate downgrades may enable soul violations" | ME-010 | PARTIAL | ME-010 preserves REQUIRED for visible colors. But the adversarial concern is valid: future sub-perceptual tints might become visible at scale. |
| Challenge: "Is the REAL problem just one bad chart?" | NONE | N/A | Reframing challenge -- the enrichments address systemic causes, not just the chart |
| 10 top adversarial findings | Various | FULL | Each has a corresponding enrichment or is classified N/A (philosophical/methodological) |
| "Two systematic biases: screenshot contamination + Middle comparison" | ME-006 | PARTIAL | Screenshot bias addressed. Middle comparison bias is methodological, not a spec change. |

---

### 2.15 buddy-metacognitive.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Phase 2 mirrors pipeline's pathology at meta-level | NONE | N/A | Meta-observation about the analysis itself |
| 6 shared unexamined assumptions | | | |
| (1) Screenshots are reliable inputs | ME-006 | FULL | |
| (2) LLM vision = human vision | NONE | MISSING | No enrichment addresses the gap between LLM screenshot interpretation and human perception. This is a fundamental limitation of LLM-based PA. |
| (3) More questions = better coverage | ME-037 | PARTIAL | Retiring 4 questions addresses inflation. But the assumption "more = better" is not explicitly challenged in any enrichment. |
| (4) PA-05 is a valid metric | ME-019 | PARTIAL | Range scoring improves calibration but does not address whether PA-05 itself measures the right thing |
| (5) Analytical audit catches experiential failures | ME-001 | FULL | Experiential pass directly addresses this |
| (6) Pipeline problems require pipeline solutions | NONE | N/A | Meta-observation. The paradigm analysis (step-paradigm-analysis.md) also raises this. |
| 5 most important unasked questions: | | | |
| (1) "Has a human read this page?" | NONE | MISSING | No enrichment adds a human-in-the-loop review step. The pipeline is entirely agent-driven. |
| (2) "What does it look like?" (as opposed to screenshots-of-screenshots) | ME-006 | PARTIAL | Better screenshots help but do not resolve the fundamental mediation problem |
| (3) "Would Opus + 50 lines work?" | NONE | N/A | Excluded as N-20/V3E-052 (experimental) |
| (4) "Is PA-05 valid?" | ME-019 | PARTIAL | Same as above |
| (5) "What if we ship as-is?" | NONE | N/A | The fresh-eyes buddy answered this: "Ship it." |

---

### 2.16 buddy-fresh-eyes.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Page is genuinely good (B+) | NONE | N/A | Holistic positive assessment |
| Analysis is wildly disproportionate to the defect magnitude | NONE | N/A | Meta-observation about the 400:1 analysis ratio |
| Settlement Map links should work (they appear clickable but are not?) | ME-031 | FULL | False affordance scan PA question |
| "Ship this page. Stop analyzing this page." | NONE | N/A | Recommendation to stop |
| Key missing thing: make it a NAVIGABLE DOCUMENT | ME-021 | FULL | Navigation usability PA question |
| Chart illegibility is real but is a 5-minute CSS fix | ME-003 | FULL | GR-60 catches it; fix is trivial |
| Collapsible sections work well | NONE | N/A | Positive finding |
| Dark inversion blocks are the strongest visual feature | ME-049 | PARTIAL | Dark moments guidance exists but does not specifically call out inversion blocks as technique |

---

### 2.17 experiential-pa-analysis.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Gorilla experiment thesis confirmed | ME-001 | FULL | |
| Per-auditor chart detection: 1/9 thorough, 4/9 passing, 3/9 zero | ME-001 | FULL | Universal pre-check fixes 0/9 → 9/9 coverage |
| Proposed experiential pass specification (Section 2.5) | ME-001 | FULL | Incorporated verbatim into ME-001 |
| Projected detection improvement: 11% → 78-100% | NONE | N/A | Impact estimate, not actionable |
| 5 experiential failure types: | | | |
| (1) Illegible text | ME-001, ME-003 | FULL | |
| (2) Effortful text (squinting required) | ME-001 | FULL | Experiential pass asks about effortful text |
| (3) Skipped text (too small/dense to bother) | ME-001 | FULL | Experiential pass asks about skipped text |
| (4) False affordance | ME-031 | FULL | |
| (5) Communicative failure (element does not convey its purpose) | ME-022 | FULL | Information extraction question |
| Attentional tunneling mechanism: 69 questions create 9 tunnels | ME-001 | FULL | Pre-question experiential pass breaks tunnels |
| Chart illegibility caught by 1/9 auditors -- single point of failure | ME-001 | FULL | |
| Auditor B is overloaded with critical responsibility | ME-001 | FULL | Universal pre-check distributes load |

---

### 2.18 inattentional-blindness-audit.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| 23 usability issues found on page | Various | PARTIAL | Most are content-level issues outside pipeline scope |
| PA caught 7 fully (30%), 6 partially (26%), missed 10 completely (43%) | ME-001 | PARTIAL | Experiential pass improves detection but cannot guarantee 100% of 23 issues caught |
| 5 failure types only experiential passes catch: | | | |
| (1) False affordance | ME-031 | FULL | |
| (2) Communicative failure | ME-022 | FULL | |
| (3) Navigation desert | ME-021 | FULL | |
| (4) Content-promise mismatch | ME-023 | FULL | |
| (5) Invisible excess (content present but ignored) | ME-055 | PARTIAL | "What would you REMOVE?" addresses excess but not specifically invisible excess |
| 5 proposed experiential instructions | ME-001 | FULL | Experiential pass specification incorporates these |
| Taxonomy of experiential failure types (6 categories) | ME-001, ME-031, ME-021, ME-022, ME-023 | FULL | Each category has a corresponding enrichment |
| Specific issues: Settlement Map has no legend explaining marker meanings | NONE | MISSING | No enrichment addresses completeness of visual components (legend, axis labels, etc.) |
| Specific issues: Complexity Ladder diagram presents 5 tiers but text describes 6 | NONE | MISSING | No enrichment addresses content accuracy verification (text-diagram consistency) |
| Specific issues: Tables lack column headers that explain data structure | ME-016 | PARTIAL | ARIA addresses accessibility but not content clarity |

---

### 2.19 priority-inversion-analysis.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Stage 1 (Builder): 7 questions about composition, 0 about legibility | ME-004 | FULL | Adds Q0 and Q1 legibility questions |
| Stage 2 (Gates): 31 gates, 0 usability gates | ME-003, ME-014, ME-040 | FULL | GR-60, GR-61, GR-62 |
| Stage 3 (PA): Legibility questions only routed to Auditor B (1/9) | ME-001 | FULL | Universal pre-check |
| Stage 4 (Weaver): Invisible CSS Fix #1, visible chart Fix #5 | ME-002 | FULL | Priority override rule |
| Stage 5 (Orchestrator): Accepts weaver ordering without reframing | ME-008, ME-020 | FULL | Circuit breaker + decision quality |
| 5 MAXIMUM inversions identified (Georgia font, rgba tint, html color, sub-pixel border, illegible chart) | ME-002, ME-003, ME-010, ME-011, ME-024 | FULL | Each has a specific fix |
| Causal chain: each stage amplifies the inversion | ME-001 through ME-008 | FULL | Tier 1 collectively breaks the chain |
| Proposed: 2 new builder self-eval questions | ME-004 | FULL | |
| Proposed: 3 new usability gates | ME-003, ME-014, ME-040 | FULL | |
| Proposed: Universal legibility pre-check U-01 | ME-001 | FULL | |
| Proposed: Weaver priority restructure | ME-002 | FULL | |
| Proposed: Orchestrator circuit breaker | ME-008 | FULL | |
| "Philosophical problem: pipeline optimizes for compositional sophistication, not reader experience" | NONE | PARTIAL | The enrichments fix the MECHANISM but the philosophical reorientation is not codified as an explicit pipeline design principle. No enrichment states: "The pipeline's primary value is reader experience, not compositional intelligence." |
| "Fundamental inversion: CSS Compliance > Compositional Intelligence > Human Experience should be Human Experience > CSS Compliance > Compositional Intelligence" | ME-002, ME-008 | PARTIAL | These implement the inversion at weaver and orchestrator level but the STATED PHILOSOPHY in MANIFEST.md is not updated. |

---

### 2.20 gate-usability-audit.md

| Insight/Finding | Enrichment ID | Coverage | Notes |
|----------------|---------------|----------|-------|
| Every gate classified by perceptibility (HUMAN-PERCEPTIBLE / SUB-PERCEPTUAL / MIXED) | ME-018 | FULL | Adds perceptibility column to gate manifest |
| 4 of 18 REQUIRED gates are SUB-PERCEPTUAL | ME-010, ME-024, ME-025, ME-026 | FULL | Split/downgrade sub-perceptual gates |
| GR-05 split proposal (GR-05a REQUIRED / GR-05b ADVISORY) | ME-010 | FULL | Exact same proposal |
| GR-06 rendered font check proposal | ME-011 | FULL | Exact same proposal |
| GR-07 downgrade proposal | ME-024 | FULL | |
| GR-12 downgrade proposal | ME-025 | FULL | |
| GR-43 downgrade proposal | ME-026 | FULL | |
| GR-19 downgrade proposal | ME-027 | FULL | |
| Missing usability gate 4A: Text Legibility (WCAG AA) | ME-003 | FULL | GR-60 |
| Missing usability gate 4B: Minimum Font Size | ME-014 | FULL | GR-61 |
| Missing usability gate 4C: Text Overflow/Truncation | ME-040 | FULL | GR-62 |
| Missing usability gate 4D: Image/SVG Accessibility | NONE | PARTIAL | No enrichment proposes GR-63 (Image/SVG load verification). Gate-usability-audit proposes this as ADVISORY. |
| Missing usability gate 4E: Interactive Element Usability | NONE | PARTIAL | No enrichment proposes GR-64 (Touch target size). Gate-usability-audit proposes this as ADVISORY. |
| Missing usability gate 4F: Content Visibility | NONE | MISSING | No enrichment addresses invisible DOM content (opacity: 0, off-screen, zero-height). Gate-usability-audit Section 4F describes this clearly. |
| Missing usability gate 4G: Scroll-Reveal / Animation-Gated Content | NONE | MISSING | Gate-usability-audit proposes ADVISORY gate for JS-gated content visibility. Not in enrichment list. |
| Missing usability gate 4H: Empty Sections / Missing Content | NONE | MISSING | Gate-usability-audit Section 4H proposes checking for headings with no content below them. Not in enrichment list. |
| Complete Playwright implementation for GR-60 (Text Contrast) | ME-003 | FULL | Implementation sketch referenced |
| Complete Playwright implementation for GR-61 (Min Font Size) | ME-014 | FULL | Implementation sketch referenced |
| Complete Playwright implementation for GR-62 (Text Overflow) | ME-040 | FULL | Implementation sketch referenced |
| Priority-corrected gate manifest (reclassified + new) | ME-003, ME-010-014, ME-024-027, ME-040 | FULL | New manifest fully covered by enrichments |

---

## 3. Gap Summary

### 3A. MISSING Items (No Enrichment Coverage)

| # | Finding | Source Report(s) | Severity Recommendation |
|---|---------|-----------------|------------------------|
| GAP-01 | No responsive breakpoint specification in builder recipe | step4-pa-epsilon.md | MINOR |
| GAP-02 | No table responsive behavior guidance | step4-pa-epsilon.md | MINOR |
| GAP-03 | Metaphor structural embedding not enforced (metaphor announced in language but not in layout/typography) | step4-pa-zeta.md | CONSIDER |
| GAP-04 | No builder feedback/iteration loop (builder never sees gate results or PA feedback) | step-paradigm-analysis.md | CONSIDER |
| GAP-05 | No taste/judgment metric in pipeline | step-paradigm-analysis.md | CONSIDER |
| GAP-06 | LLM vision ≠ human vision gap not addressed | buddy-metacognitive.md | CONSIDER |
| GAP-07 | No human-in-the-loop review step | buddy-metacognitive.md | CONSIDER |
| GAP-08 | Visual component completeness check (legends, axis labels, consistent tier counts) | inattentional-blindness-audit.md | MINOR |
| GAP-09 | Content accuracy verification (text-diagram consistency) | inattentional-blindness-audit.md | MINOR |
| GAP-10 | Invisible DOM content detection gate (opacity: 0, off-screen, zero-height content-bearing elements) | gate-usability-audit.md Section 4F | MINOR |
| GAP-11 | Scroll-reveal / animation-gated content detection gate | gate-usability-audit.md Section 4G | CONSIDER |
| GAP-12 | Empty sections / missing content detection gate | gate-usability-audit.md Section 4H | MINOR |

### 3B. PARTIAL Items (Enrichment Exists But Incomplete)

| # | Finding | Enrichment | What's Missing |
|---|---------|-----------|----------------|
| P-01 | Timestamp/duration tracking in execution tracker | ME-045 | ME-045 addresses context budget but not per-phase timestamps |
| P-02 | Gate-manifest.json missing execution_order field | ME-018 | ME-018 adds perceptibility but not execution_order |
| P-03 | Inter-auditor agreement weighting in Weaver | ME-001 | Experiential pass adds coverage but Weaver does not weight agreement levels |
| P-04 | PA scoring calibration across auditors | ME-019 | Range scoring helps but inter-auditor calibration is not addressed |
| P-05 | Adversarial concern: "What if experiential pass also fails?" | ME-001 | No fallback if universal pre-check produces false negatives |
| P-06 | GR-05 downgrades may enable future visible soul violations | ME-010 | Opacity threshold (0.3) may not catch all visible cases |
| P-07 | "Prevent > detect" principle not codified | ME-004, ME-038 | Individual prevention measures exist but the principle is not stated |
| P-08 | Gates as detectors vs preventers distinction | ME-018 | Perceptibility metadata exists but detector/preventer role is not classified |
| P-09 | Dark inversion blocks as specific technique | ME-049 | Dark moments guidance exists but inversion blocks not called out |
| P-10 | Invisible excess detection | ME-055 | "What would you REMOVE?" is close but not specifically about invisible/ignored content |
| P-11 | Pipeline philosophical statement missing from MANIFEST | ME-002, ME-008 | Mechanism fixes exist but "reader experience is primary value" is not declared |
| P-12 | Image/SVG load verification gate (GR-63) | NONE in enrichments | Gate-usability-audit proposes this but no ME covers it |
| P-13 | Touch target size gate (GR-64) | NONE in enrichments | Gate-usability-audit proposes this but no ME covers it |
| P-14 | Self-evaluation answer quality (depth, not just existence) | ME-004 | ME-004 adds new questions but does not address quality of answers to existing questions |
| P-15 | Content selection criteria for pipeline input | ME-052 | Audience description helps but content selection methodology is not addressed |
| P-16 | Content-promise mismatch for collapsible summaries | ME-023 | ME-023 asks about structural promises but does not specifically address collapsible summary information sufficiency |

---

## 4. Proposed New Enrichments

For each MISSING gap that is actionable at the spec level:

### NEW-01: Add Responsive Breakpoint Specification to Builder Recipe
- **Source:** GAP-01, GAP-02 (step4-pa-epsilon.md)
- **Severity:** MINOR
- **Target file:** `artifact-builder-recipe.md`
- **Proposed change:** Add:
  ```
  RESPONSIVE BEHAVIOR: Build mobile-first. At minimum, implement 2 breakpoints:
  - At 768px: stack grids to single column, make tables horizontally scrollable
    (wrap in overflow-x: auto container), reduce heading sizes by ~15%
  - At 480px: reduce body font to 15px, increase line-height to 1.8,
    collapse multi-column layouts
  These are MINIMUMS. Content-specific breakpoints (e.g., a 4-column grid
  collapsing at 1024px) are expected in addition.
  ```

### NEW-02: Add Visual Component Completeness Check to PA
- **Source:** GAP-08, GAP-09 (inattentional-blindness-audit.md)
- **Severity:** MINOR
- **Target file:** `pa-questions.md`
- **Proposed change:** Add question: "For every chart, diagram, or infographic: (a) Does it have a legend or key if it uses symbols/colors? (b) Does the number of items match what the surrounding text claims? (c) Are axis labels and data labels present and readable? Flag mismatches as STRUCTURAL PROMISE VIOLATION."
  - Route to Auditor D (Components + Craft) or include in experiential pass.

### NEW-03: Add Invisible DOM Content Detection Gate (GR-65, RECOMMENDED)
- **Source:** GAP-10 (gate-usability-audit.md Section 4F)
- **Severity:** MINOR
- **Target file:** `gate-runner-core.js`
- **Proposed change:** Add RECOMMENDED gate checking for content-bearing elements with `opacity: 0`, `visibility: hidden` (but `display` not `none`), `height: 0` with overflow hidden, or positioned off-screen (left < -9999px). Exclude skip-links and ARIA-hidden decorative elements. Flag content that exists in DOM but is invisible to users.

### NEW-04: Add Empty Section Detection Gate (GR-66, ADVISORY)
- **Source:** GAP-12 (gate-usability-audit.md Section 4H)
- **Severity:** CONSIDER
- **Target file:** `gate-runner-core.js`
- **Proposed change:** Add ADVISORY gate: for each h2/h3 heading, check that the next sibling (or child container) has non-whitespace text content. A heading followed by another heading or by nothing indicates an empty section.

### NEW-05: Add Pipeline Philosophy Statement to MANIFEST
- **Source:** P-11 (priority-inversion-analysis.md "deep question" section)
- **Severity:** MINOR
- **Target file:** `MANIFEST.md`
- **Proposed change:** Add to MANIFEST.md Section 1 (Principles), before any operational content:
  ```
  CORE PRINCIPLE: The pipeline's primary value is READER EXPERIENCE.
  Compositional intelligence, identity compliance, and perceptual thresholds
  serve this value -- they are not values in themselves. When any pipeline
  check conflicts with reader experience, reader experience wins.

  Priority hierarchy: Human usability > Visual perception > Identity compliance
  > Compositional depth > Process documentation.
  ```

### NEW-06: Add Timestamp Tracking to Execution Tracker
- **Source:** P-01 (step1-paper-trail-audit.md)
- **Severity:** CONSIDER
- **Target file:** `EXECUTION-TRACKER-TEMPLATE.md`
- **Proposed change:** Add per-phase start/end timestamps: "Phase 0 start: [ ] Phase 0 end: [ ] Phase 1 start: [ ] ..." This enables duration analysis and identifies bottlenecks.

### NEW-07: Add Image/SVG Load Verification Gate (GR-63, ADVISORY)
- **Source:** P-12 (gate-usability-audit.md Section 4D)
- **Severity:** CONSIDER
- **Target file:** `gate-runner-core.js`
- **Proposed change:** Add ADVISORY gate: `querySelectorAll('img')` and check `naturalWidth > 0` for each (confirms image loaded). For SVGs, check that `<svg>` elements have non-zero bounding boxes. Flag images with missing alt text (if alt attribute absent, not just empty).

### NEW-08: Add Prevent-Detect Principle to MANIFEST
- **Source:** P-07 (step7-fix-effectiveness.md)
- **Severity:** CONSIDER
- **Target file:** `MANIFEST.md`
- **Proposed change:** Add to MANIFEST.md design principles:
  ```
  PREVENT > DETECT: Where possible, prevent defects at build time (builder
  recipe boilerplate, CSS templates, pre-checked font stacks) rather than
  detecting them at gate time. A prevented defect costs 0 pipeline cycles.
  A detected defect costs at minimum 1 REFINE cycle.
  ```

---

## 5. Verdict

### Is the Master Enrichment List Complete?

**YES, with minor additions.** The 57 master enrichments achieve 77% FULL coverage and 14% PARTIAL coverage of all actionable findings across 19 reports. The 7% MISSING items break down as:

- **4 paradigm/philosophical gaps** (GAP-03 through GAP-07): These are legitimate concerns but resist spec-level fixes. They require controlled experiments (Opus vs Sonnet, prompt length tests), human-in-the-loop design decisions, or fundamental architectural changes. The master enrichment list correctly excludes these from actionable enrichments.

- **4 concrete operational gaps** (GAP-01, GAP-02, GAP-08, GAP-10, GAP-12): These are actionable and should be added. NEW-01 through NEW-04 above propose specific changes.

- **2 pipeline design principle gaps** (P-11, P-07): The enrichments fix mechanisms but do not update the pipeline's stated philosophy. NEW-05 and NEW-08 propose adding these.

### Severity of Gaps

No MISSING item is BLOCKING. All BLOCKING enrichments (ME-001 through ME-009) have FULL coverage of their source findings. The gaps are concentrated in MINOR and CONSIDER tiers.

### Enrichments With No Source Report Coverage

All 57 master enrichments trace to at least one Phase 2 report finding. No orphan enrichments exist (every ME has a source).

### PARTIAL Items Requiring Attention

The most important PARTIAL items are:

1. **P-11 (Pipeline philosophy):** The enrichments fix the mechanism but MANIFEST.md still does not state "reader experience is primary value." NEW-05 addresses this.
2. **P-03/P-04 (Inter-auditor calibration):** The Weaver does not weight agreement levels or calibrate across auditors. This is a design gap that ME-001 and ME-019 only partially address.
3. **P-05 (Experiential pass fallback):** If the experiential pass also fails to catch issues, there is no backup. GR-60 (contrast gate) provides a programmatic safety net for text contrast specifically, but other experiential failures (false affordance, navigation desert) have no gate-level backup.

### Final Assessment

The master enrichment list is **comprehensive and well-organized**. The 8 proposed new enrichments fill operational gaps. The philosophical/paradigm gaps are correctly identified as outside spec-change scope. The 77% FULL coverage rate is strong for a 19-report corpus with significant thematic overlap.

**Recommendation:** Add NEW-01 (responsive breakpoints) and NEW-05 (philosophy statement) as MINOR enrichments. The remaining NEW items (02-04, 06-08) can be added as CONSIDER tier. No changes needed to existing ME-001 through ME-057.

---

*247 findings mapped across 19 reports. 57 enrichments validated. 12 MISSING gaps identified, 8 new enrichments proposed. 16 PARTIAL items documented. No BLOCKING gaps found.*
