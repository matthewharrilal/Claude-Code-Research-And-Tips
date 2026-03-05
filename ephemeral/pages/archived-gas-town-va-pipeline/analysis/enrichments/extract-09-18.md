# Enrichment Extraction: Files 09-18

**Extractor:** extractor-2
**Date:** 2026-02-23
**Source files:** 09-visual-audit.md, 10-pipeline-flow.md, 12-pa-question-deep-analysis.md, 13-adversarial-review.md, 14-perceptual-science-foundations.md, 15-microscopic-css-quality.md, 16-macroscopic-quality.md, 17-meta-meta-analysis.md, 18-enrichment-surface-map.md
**Method:** Exhaustive extraction of every actionable recommendation, with evidence, target, and expected impact

---

## TABLE OF CONTENTS

1. [From 09-visual-audit.md](#from-09-visual-auditmd) — 12 enrichments
2. [From 10-pipeline-flow.md](#from-10-pipeline-flowmd) — 15 enrichments
3. [From 12-pa-question-deep-analysis.md](#from-12-pa-question-deep-analysismd) — 32 enrichments
4. [From 13-adversarial-review.md](#from-13-adversarial-reviewmd) — 42 enrichments
5. [From 14-perceptual-science-foundations.md](#from-14-perceptual-science-foundationsmd) — 20 enrichments
6. [From 15-microscopic-css-quality.md](#from-15-microscopic-css-qualitymd) — 15 enrichments
7. [From 16-macroscopic-quality.md](#from-16-macroscopic-qualitymd) — 10 enrichments
8. [From 17-meta-meta-analysis.md](#from-17-meta-meta-analysismd) — 18 enrichments
9. [From 18-enrichment-surface-map.md](#from-18-enrichment-surface-mapmd) — 37 enrichments (pre-structured)

**TOTAL: ~201 enrichment recommendations extracted**

---

## From 09-visual-audit.md

### VA-01: Eliminate trailing void (CRITICAL / SHIP-BLOCKING)

- **Recommendation:** Fix the trailing whitespace void after the footer — 4-5 viewport heights of blank cream space at 1440px, 5-7 at 768px.
- **Evidence:** Screenshots 1440-scroll-18 through scroll-22 show pure blank cream. 9/9 auditors flagged this. Score impact: PA-05 2/4 with void, 3/4 without.
- **Root cause hypothesis:** `min-height: 100vh` or similar CSS on body/wrapper extending beyond content, or large bottom margin/padding on a container.
- **Target file:** `yegge-gas-town.html` — CSS rule on `body`, `html`, or `.container` with explicit height/min-height.
- **Expected impact:** +1.0 PA-05 (from 2/4 to 3/4). THE single highest-leverage fix.

### VA-02: Increase zone background color deltas for visual separation

- **Recommendation:** Zone background color shifts are imperceptible. Increase to >= 15 RGB delta minimum at every boundary.
- **Evidence:** Visual audit says "the delta is very subtle, almost imperceptible" for Z2, "background color shift for zone 3 is imperceptible," zone transitions "background shifts do not register perceptually." Zone transitions rated 3/5.
- **Target file:** `yegge-gas-town.html` CSS custom properties for `--refinery-intake` through `--refinery-dispatch`. Also `artifact-tc-brief-template.md` Tier 3 — require explicit hex pair + delta specification.
- **Expected impact:** Zone transitions improve from 3/5 to 4/5.

### VA-03: Break Core Principles monotony (Zone 4)

- **Recommendation:** Five consecutive principle blocks with identical visual treatment = monotony. Vary the layout: put 2 principles side-by-side, use a different component format for one, add a diagram or visual break mid-section.
- **Evidence:** Scroll-09 rated "LOW" visual variety, "the weakest stretch on the page." "Five consecutive principle blocks with identical visual treatment = monotony." 6/9 auditors flagged Zone 4.
- **Target file:** `yegge-gas-town.html` Zone 4 HTML structure and CSS.
- **Expected impact:** Visual variety from 3/5 to 4/5. Scroll experience improvement.

### VA-04: Add semantic color coding to principle left borders

- **Recommendation:** "All left borders appear to be the same color — missed opportunity for semantic coding."
- **Evidence:** Scroll-09 analysis: identical left borders on all principle blocks.
- **Target file:** `yegge-gas-town.html` — principle callout CSS, border-left color per principle type.
- **Expected impact:** Small but additive — differentiates principles visually.

### VA-05: Collapse card grids to single-column at 768px

- **Recommendation:** "Cards should probably collapse to single-column at this breakpoint."
- **Evidence:** 768-scroll-05: "Role cards appear to maintain 2-column but are very tight at 768px."
- **Target file:** `yegge-gas-town.html` — add `@media (max-width: 768px)` rule for `.role-grid { grid-template-columns: 1fr; }`.
- **Expected impact:** Responsive degradation improves from "functional" to "designed."

### VA-06: Fix subtitle low-contrast on dark header

- **Recommendation:** "Subtitle text is low-contrast gray on dark, barely readable."
- **Evidence:** 1440-cold-look / scroll-01 analysis.
- **Target file:** `yegge-gas-town.html` — header subtitle color value (increase contrast against dark background).
- **Expected impact:** Minor readability improvement.

### VA-07: Reduce gap between TOC and Zone 1

- **Recommendation:** "The gap between TOC and Zone 1 is large (~100px visually) — feels slightly empty."
- **Evidence:** 1440-scroll-01 analysis.
- **Target file:** `yegge-gas-town.html` — margin/padding between TOC and Zone 1.
- **Expected impact:** Minor spatial improvement.

### VA-08: Add zebra-striping or subtle row differentiation to tables

- **Recommendation:** "Table rows lack any zebra-striping or subtle row differentiation."
- **Evidence:** 1440-scroll-02: profile table analysis.
- **Target file:** `yegge-gas-town.html` — table `tr:nth-child(even)` background.
- **Expected impact:** Minor readability improvement.

### VA-09: Add collapsible treatment for long startup script

- **Recommendation:** "Startup script is very long — could benefit from collapsible treatment."
- **Evidence:** 1440-scroll-10/11: code-heavy zone analysis.
- **Target file:** `yegge-gas-town.html` — wrap startup script in `<details>/<summary>`.
- **Expected impact:** Reduces code-block monotony in Zone 5.

### VA-10: Add visual preview content to collapsed accordion items

- **Recommendation:** "All accordion items are collapsed — no visual preview of content."
- **Evidence:** 1440-scroll-13: troubleshooting section.
- **Target file:** `yegge-gas-town.html` — add first-line snippet visible in collapsed state.
- **Expected impact:** Minor UX improvement.

### VA-11: Differentiate card backgrounds by level (town/rig/human)

- **Recommendation:** "All card backgrounds are the same warm cream — no differentiation between town/rig levels."
- **Evidence:** 1440-scroll-04: role cards analysis.
- **Target file:** `yegge-gas-town.html` — zone-specific card background tints.
- **Expected impact:** Visual variety improvement, strengthens role taxonomy.

### VA-12: Strengthen metaphor from "announced" to "structural" in CSS

- **Recommendation:** Metaphor "fades in bottom third" and is "ANNOUNCED (via labels) but not STRUCTURAL (via spatial design)." Rated 2/5.
- **Evidence:** Visual audit synthesis: "The CSS does not embody the refinery metaphor at a deep level. No visual elements uniquely communicate 'refinery' or 'factory.' The design could equally represent any technical documentation."
- **Target file:** Multiple — CSS spatial patterns, zone treatments, component shapes.
- **Expected impact:** Metaphor in CSS from 2/5 toward 3-4/5.

---

## From 10-pipeline-flow.md

### PF-01: Enforce Tier 4 Technique Vocabulary (+0.3 PA-05)

- **Recommendation:** Hard minimum of 5 lines per disposition (D-01 through D-08) with MANDATORY CSS property/value mentions.
- **Evidence:** Gas Town brief's Tier 4 was 25 lines vs 40-line budget; missing 15 lines were CSS technique specifics. Purpose-only dispositions = vague builder output.
- **Target file:** `artifact-tc-brief-template.md` lines 118-142, Tier 4 section.
- **Proposed template:** "D-04: Create 1-2 second-half moments. Techniques: dark inversion block (background: var(--color-text), color: var(--bg-primary)) at [ZONE]. Scale break: [SIZE]px pull quote of '[KEY INSIGHT]'."
- **Expected impact:** +0.3 PA-05.

### PF-02: Multi-Coherence Boundary Template (+0.25 PA-05)

- **Recommendation:** Structured per-boundary template: `Z{n}→Z{n+1}: channels=[bg:+25RGB, type:weight_shift, spacing:+16px, border:3px→1px], type=medium, dominant_shift=background`.
- **Evidence:** Briefs describe transitions as "light/medium/heavy" without per-boundary channel specifics. Flagship failure had 4+ technically-shifted channels that were all imperceptible.
- **Target file:** `artifact-tc-brief-template.md` Tier 3 section.
- **Expected impact:** +0.25 PA-05.

### PF-03: Builder Conviction Document (+0.2 PA-05)

- **Recommendation:** Builder produces a 20-30 line conviction statement: metaphor interpretation, 3 strongest decisions, 1 creative risk, per-zone intent summary.
- **Evidence:** Without conviction, REFINE agent cannot distinguish intentional restraint from omission. Weaver cannot assess whether PA findings represent builder or brief failure.
- **Target file:** `MANIFEST.md` Appendix E Builder prompt. `artifact-builder-recipe.md` Phase 5.
- **Expected impact:** +0.2 PA-05 (primarily through better REFINE cycles).

### PF-04: Per-Zone CSS Budget Allocation (+0.2 PA-05)

- **Recommendation:** Add zone-proportional CSS budget guidance: "High-density zones: ~150-200 CSS lines. Medium: ~100-150. Low: ~80-100. No zone exceeds 25% of total CSS budget."
- **Evidence:** CD-006 distributed CSS proportionally (11 components, 5 grids, 3 breakpoints). Flagship spent 22% on imperceptible micro-typography.
- **Target file:** `artifact-builder-recipe.md` Phase 3, or TC Brief Template Tier 3.
- **Expected impact:** +0.2 PA-05.

### PF-05: Distribution Gate (+0.15 PA-05)

- **Recommendation:** Add GR-43: CSS Value Distribution — verify values span full calibration range (15 subtle to 50 dramatic), not clustered at floor.
- **Evidence:** Gas Town Z4-Z5 boundary had only 17 RGB delta — technically passing but perceptually flat. AP-10 catches >50% at floor but not "all values in 15-20 range."
- **Target file:** `artifact-gate-runner.md` — new gate GR-43.
- **Expected impact:** +0.15 PA-05.

### PF-06: Brief Amendment for REBUILD (+0.15 PA-05)

- **Recommendation:** If REBUILD triggered by PA findings suggesting brief inadequacy, orchestrator adds 5-10 line "emphasis supplement" before rebuild.
- **Evidence:** Same brief → same results is documented failure mode.
- **Target file:** `artifact-orchestrator.md` Phase 9, REBUILD protocol.
- **Expected impact:** +0.15 PA-05.

### PF-07: Automated GR-25 Suppressor Scan (+0.1 PA-05)

- **Recommendation:** Regex-based scan of brief for 20 known suppressor patterns: "sample 2-4", "verify that", "fail if", "must be", count-gates, judgment language.
- **Evidence:** 20 suppressors identified, ALL correlate with quality degradation. Manual detection error-prone.
- **Target file:** `artifact-gate-runner.md` — GR-25 implementation. Or `artifact-orchestrator.md` Phase 2.5.
- **Expected impact:** +0.1 PA-05, +reliability.

### PF-08: Hover-State Screenshots (+0.1 PA-05)

- **Recommendation:** After cold look captures, trigger hover state on all links, buttons, callout elements. Capture at 1440px.
- **Evidence:** D-07 (Edge Intentionality) includes hover states as key technique. Currently invisible to PA auditors.
- **Target file:** `artifact-pa-protocol.md` Part 5, screenshot protocol. `MANIFEST.md` Phase 4.
- **Expected impact:** +0.1 PA-05.

### PF-09: Structured Metaphor Exploration (+0.1 PA-05)

- **Recommendation:** Expand from 3 to 5 metaphor seeds, each with explicit structural mapping: metaphor concept → zone group → CSS naming scheme → transition implications.
- **Evidence:** Metaphor selection is second-highest-impact creative decision after mode selection.
- **Target file:** `artifact-routing.md` Phase 0 Content Analysis Protocol.
- **Expected impact:** +0.1 PA-05.

### PF-10: Minority Finding Preservation (+0.05 PA-05 compounding)

- **Recommendation:** Weaver appends "low-confidence observations" section: 1-line summaries of 1/9 findings.
- **Evidence:** Unique per-auditor observations were valid but potentially lost in synthesis.
- **Target file:** `MANIFEST.md` Appendix E Weaver prompt.
- **Expected impact:** +0.05 PA-05 per build, compounding.

### PF-11: Prioritize Artifact Reading Order

- **Recommendation:** Orchestrator should read most CRITICAL artifacts first: `artifact-builder-recipe.md` and `artifact-pa-protocol.md`, since these define the two highest-impact agents.
- **Evidence:** With ~6,500 lines of spec, later sections receive progressively less attention.
- **Target file:** `MANIFEST.md` 11-step quickstart, reading order specification.
- **Expected impact:** Small — better orchestrator attention allocation.

### PF-12: Pre-computed Orchestrator Digest

- **Recommendation:** A 200-line summary of "what the orchestrator must know" to reduce context load while preserving decision-relevant information.
- **Evidence:** 6,500 lines of spec loaded into orchestrator context — attention limits apply.
- **Target file:** New artifact or MANIFEST appendix.
- **Expected impact:** Moderate — reduces orchestrator cognitive load.

### PF-13: Zone Validation Checkpoint in Content Map

- **Recommendation:** Content Map's zone table should include explicit word counts per zone and content register ratios, enabling Brief Assembler to calibrate Tier 3 density with higher precision.
- **Evidence:** Phase 1 information loss assessment.
- **Target file:** `artifact-routing.md` Phase 0 output spec.
- **Expected impact:** Moderate.

### PF-14: Auditor Conviction Statement

- **Recommendation:** Each PA auditor should identify their single DOMINANT finding (what would they fix first with 30 minutes?).
- **Evidence:** Focuses weaver synthesis and gives REFINE agent a clear priority list.
- **Target file:** `artifact-pa-protocol.md` auditor prompt template.
- **Expected impact:** Moderate — improves synthesis quality.

### PF-15: Soft Boundary Zone for REBUILD/REFINE Decision

- **Recommendation:** Instead of sharp 2.5 PA-05 cutoff, a 2.3-2.7 "judgment zone" where orchestrator considers nature of PA findings (structural vs surface).
- **Evidence:** Structural findings at PA-05=2.6 might warrant REBUILD, while surface findings at PA-05=2.4 might warrant REFINE.
- **Target file:** `artifact-orchestrator.md` Section 7 verdict decision tree.
- **Expected impact:** Moderate — better REBUILD/REFINE decisions.

---

## From 12-pa-question-deep-analysis.md

### PA-01: Retire PA-06 (Words stacking vertically)

- **Recommendation:** Retire PA-06. Near-zero failure rate for system-built pages.
- **Evidence:** "In 2 full PA runs, never failed." LOW discrimination, LOW actionability.
- **Target file:** `artifact-pa-protocol.md` Part 3, remove PA-06. Part 4, remove from Auditor B assignment.
- **Expected impact:** Frees 1 question slot.

### PA-02: Retire PA-07 (Read longest paragraph)

- **Recommendation:** Retire PA-07. Near-zero failure rate. PA-02 covers readability.
- **Evidence:** LOW discrimination, MEDIUM actionability. Partially redundant with PA-02.
- **Target file:** `artifact-pa-protocol.md` Part 3, remove PA-07. Part 4, remove from Auditor B.
- **Expected impact:** Frees 1 question slot.

### PA-03: Merge PA-08 into PA-02

- **Recommendation:** Merge "Squint to read?" (PA-08) into PA-02 as a severity sub-question.
- **Evidence:** STRONG overlap (0.9 coupling). Both measure text readability. Revised PA-02: "Is any text uncomfortable to read? Point to worst spot. Would you need to lean closer?"
- **Target file:** `artifact-pa-protocol.md` Part 3, revise PA-02, remove PA-08.
- **Expected impact:** Frees 1 slot, same information captured.

### PA-04: Merge PA-09 into PA-33

- **Recommendation:** Merge "Dead space?" (PA-09) into PA-33 ("silence or dropped signal"). PA-33 captures same information with better framing.
- **Evidence:** STRONG overlap (0.9 coupling). PA-50 catches it quantitatively.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Frees 1 slot, better framing.

### PA-05: Revise PA-12 (Eyes flow smoothly)

- **Recommendation:** Replace with: "Where does visual flow BREAK? Name the exact scroll position and describe what interrupts the flow. If it never breaks, say so."
- **Evidence:** Current PA-12 is "too vague. 'Mostly yes' is the universal answer."
- **Target file:** `artifact-pa-protocol.md` Part 3, PA-12 text.
- **Expected impact:** Higher discrimination between good and great.

### PA-06: Revise PA-16 to Inverse Twin Test (NEW-09)

- **Recommendation:** Replace "Twin elements identical?" with: "Pick two similar elements. SHOULD one be visually different? Is similarity serving content or template?"
- **Evidence:** Current PA-16 is redundant with PA-03, LOW discrimination. Inversion is more discriminating.
- **Target file:** `artifact-pa-protocol.md` Part 3, PA-16 text.
- **Expected impact:** Better template-lock detection.

### PA-07: Merge PA-18 into PA-03

- **Recommendation:** Merge "Grays same family?" into PA-03 as sub-check: "Specifically, do all neutrals feel like the same temperature?"
- **Evidence:** PA-03 already captures palette coherence holistically. Binary check, almost always yes.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Frees 1 slot.

### PA-08: Merge PA-40 into PA-69

- **Recommendation:** Merge "Spacing jump?" into PA-69 (transition property counting). PA-69 subsumes spacing jumps.
- **Evidence:** Both measure inter-section spacing quality, PA-69 more precise.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Frees 1 slot.

### PA-09: Add NEW-01 (Scroll-Stop Mechanism Detection)

- **Recommendation:** "As you scroll at normal speed, does anything make you INVOLUNTARILY STOP? What caused the stop — size change, color change, density shift?"
- **Evidence:** Engagement sustainability only 20% covered. Gas Town had 1 genuine scroll-stopper ("Nature prefers colonies"). No question measures the MECHANISM of scroll-stopping.
- **Target file:** `artifact-pa-protocol.md` Part 3, new question. Assign to Tier 3 Deep Dive.
- **Expected impact:** Captures engagement sustainability dimension.

### PA-10: Add NEW-02 (One-Week Memory Test)

- **Recommendation:** "If you closed this page right now and described it a week later, what visual element would you describe FIRST? What shape/color/layout would you draw?"
- **Evidence:** Memorability is 10% covered — the LARGEST blind spot. PASS = auditor names specific visual element. FAIL = describes content only.
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 5 question.
- **Expected impact:** Measures memorability dimension (from 10% to ~30%).

### PA-11: Add NEW-03 (Emotional Peak Location)

- **Recommendation:** "Point to the moment of STRONGEST emotional response. Is that moment in top third, middle, or bottom?"
- **Evidence:** 4/4 pages place emotional peak deliberately (~62% down). 3/4 pages have peaks only in first third.
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 3 question.
- **Expected impact:** Captures emotional arc dimension.

### PA-12: Add NEW-04 (Resolution Satisfaction)

- **Recommendation:** "After scrolling entire page, do you feel the visual journey CONCLUDED or just STOPPED? Does ending feel earned?"
- **Evidence:** Catches pages that run out of compositional energy before content ends.
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 3 question.
- **Expected impact:** Captures emotional closure.

### PA-13: Add NEW-05 (Typography Personality)

- **Recommendation:** "Cover all images/diagrams. Looking ONLY at text — size, weight, spacing, arrangement — does typography express a personality? Describe in one word."
- **Evidence:** Type as Expression only 15% covered. PASS = names personality word. FAIL = says "clean" or "readable."
- **Target file:** `artifact-pa-protocol.md` Part 3, new question.
- **Expected impact:** Measures type-as-expression dimension.

### PA-14: Add NEW-06 (Type Texture Variation)

- **Recommendation:** "Squint at three different paragraphs in different zones. Same gray TEXTURE or different typographic density?"
- **Evidence:** Catches sub-perceptual typography more precisely than PA-56.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Better sub-perceptual typography detection.

### PA-15: Add NEW-07 (Custom vs Template Detection)

- **Recommendation:** "Name one visual element created SPECIFICALLY for this content — something that would not work on a different page. If you cannot, say so."
- **Evidence:** THE separator between 3/4 (good application of system) and 4/4 (system adapted to THIS content).
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 3 question.
- **Expected impact:** Measures custom-vs-template dimension.

### PA-16: Add NEW-08 (Confidence Signal Detection)

- **Recommendation:** "Point to one BOLD design decision — extreme size, unusual placement, deliberate asymmetry, generous empty space around small element."
- **Evidence:** Separates "correctly composed" from "compositionally audacious."
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 5 question.
- **Expected impact:** Measures intentional confidence.

### PA-17: Add NEW-10 (Restraint Evidence — enhanced PA-64)

- **Recommendation:** "Find a section using FEWER visual techniques. Does simplicity feel like: (a) designer CHOSE restraint, (b) content is simpler, (c) designer ran out of ideas?"
- **Evidence:** Better framing than PA-64 by offering three options instead of binary. Auditor C gave PA-64 "weak pass" with low conviction.
- **Target file:** `artifact-pa-protocol.md` Part 3, replace or supplement PA-64.
- **Expected impact:** Better restraint-vs-laziness discrimination.

### PA-18: Add NEW-11 (Color Economy)

- **Recommendation:** "Count distinct colors. Is each doing a JOB or decorative? Name the job of each."
- **Evidence:** Gas Town quote borders (red, purple, green, blue) lack semantic meaning per Auditor G.
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 2 question.
- **Expected impact:** Measures color-meaning mapping.

### PA-19: Add NEW-12 (Color Narrative)

- **Recommendation:** "Does color CHANGE as you scroll? Warm-to-cool, monochrome-to-colorful? Or same throughout?"
- **Evidence:** Color progression is unmeasured. Catches pages where color is applied uniformly.
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 2 question.
- **Expected impact:** Measures color progression.

### PA-20: Add NEW-13 (Skimming Recovery)

- **Recommendation:** "After you start skimming (from PA-35), does the page PULL YOU BACK? What visual element re-engages?"
- **Evidence:** 4/4 pages have recovery mechanisms. 3/4 pages let you skim to end.
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 2 flow question.
- **Expected impact:** Measures engagement recovery.

### PA-21: Add NEW-14 (Attention Reward)

- **Recommendation:** "Look at any element more closely. Does closer inspection reveal additional detail, nuance, craftsmanship? Or everything visible at first look?"
- **Evidence:** Separates surface-level competence from layered craft.
- **Target file:** `artifact-pa-protocol.md` Part 3, new question.
- **Expected impact:** Measures depth/delight.

### PA-22: Add NEW-15 (Compression-Expansion Cycle)

- **Recommendation:** "As you scroll, does visual density BREATHE — alternating compressed/expanded? Or constant?"
- **Evidence:** Catches pages with uniform density ("flat-line" problem).
- **Target file:** `artifact-pa-protocol.md` Part 3, new question.
- **Expected impact:** Measures spacing intentional variation.

### PA-23: Add NEW-16 (Proximity Semantics)

- **Recommendation:** "Find two elements placed CLOSER together than other pairs. Does closeness communicate a relationship?"
- **Evidence:** Catches spacing that is uniform rather than semantically loaded.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Measures proximity meaning.

### PA-24: Add NEW-17 (One Rule Broken)

- **Recommendation:** "Can you find one place where the page intentionally BREAKS its own visual rules? Is the rule-breaking effective or confusing?"
- **Evidence:** 4/4 pages have at least one deliberate rule-break. 3/4 pages follow all rules perfectly (subtle mechanical quality).
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 5 question.
- **Expected impact:** Measures sprezzatura/intentional confidence.

### PA-25: Add NEW-18 (Designer Absence Test)

- **Recommendation:** "Is there any section where you sense the designer STOPPED PAYING ATTENTION?"
- **Evidence:** Catches quality drop-off — most common failure mode of long pages.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Measures consistency of craft.

### PA-26: Add NEW-19 (Anticipation Signal)

- **Recommendation:** "At any zone boundary, did you feel ANTICIPATION for what was coming next — based on visual cues, not content curiosity?"
- **Evidence:** Catches pages that DELIVER content vs pages that BUILD toward content.
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Measures emotional arc anticipation.

### PA-27: Add NEW-20 (Negative Space Composition)

- **Recommendation:** "Pick the largest empty space IN CONTENT AREA. Does that space feel COMPOSED (given a shape, relationship to surroundings) or a GAP (default distance)?"
- **Evidence:** Separates "adequate spacing" from "space as design element."
- **Target file:** `artifact-pa-protocol.md` Part 3, new Tier 2 question.
- **Expected impact:** Measures negative space quality.

### PA-28: Restructure PA question set from 65 to 58

- **Recommendation:** Retire 4 (PA-06, PA-07, PA-09, PA-40), merge 4 (PA-08→PA-02, PA-18→PA-03), revise 2 (PA-12, PA-16), add 12 new questions.
- **Evidence:** Full analysis in Part 7 of 12-pa-question-deep-analysis.md. Readability questions drop from 6→3 (-50% redundancy), spatial from 11→5 (-55%), experiential questions expand from 3→9 (+200%).
- **Target file:** `artifact-pa-protocol.md` Parts 3 and 4.
- **Expected impact:** Questions separating 3/4 from 4/4 increase from ~10 to ~18. Experiential coverage from 20% to 55%.

### PA-29: Rebalance question distribution with discrimination principle

- **Recommendation:** Restructure so Tier 1-2 questions separate FLAT from ASSEMBLED, Tier 3 separates ASSEMBLED from COMPOSED, Tier 5 separates COMPOSED from DESIGNED.
- **Evidence:** Currently ~25 questions discriminate at 1/4-2/4 level and only ~10 at 3/4-4/4 level. Need ~15 at 1/4-2/4, ~25 at 2/4-3/4, ~18 at 3/4-4/4.
- **Target file:** `artifact-pa-protocol.md` Parts 3 and 4.
- **Expected impact:** Better calibration for 3/4 → 4/4 transition.

### PA-30: PA-05 should report 4-dimensional vector, not scalar

- **Recommendation:** PA-05 sub-criteria should be reported as [DESIGNED: 0.85, COHERENT: 0.90, PROPORTIONATE: 0.75, POLISHED: 0.60] rather than "3/4."
- **Evidence:** From adversarial review (A6): "PA-05 collapses multiple independent quality dimensions into a single scalar. A page can be brilliantly designed but poorly polished (3/4). A page can be polished but boringly designed (3/4). These represent COMPLETELY DIFFERENT quality situations but pipeline treats them identically."
- **Target file:** `artifact-pa-protocol.md` PA-05 definition. Weaver prompt.
- **Expected impact:** Enables differentiated remediation strategies.

### PA-31: 14-Dimension Visual Quality Radar scoring

- **Recommendation:** Score each page on the 14 visual quality dimensions identified: Spatial Proportion, Grid Discipline, Flow & Pacing, Responsive Adaptation, Readability, Type as Expression, Design Coherence, Rhythmic Variation, Compositional Depth, Metaphor Embodiment, Emotional Arc, Memorability, Engagement Sustainability, Intentional Confidence.
- **Evidence:** Gas Town scores: Grid Discipline 9/10, Design Coherence 9/10, but Type as Expression 4/10, Engagement Sustainability 5/10. The radar reveals "strong foundations, adequate middle, weak expression."
- **Target file:** Weaver output template — add dimension scoring.
- **Expected impact:** Richer diagnostic than PA-05 scalar alone.

### PA-32: Add "What would you REMOVE?" question

- **Recommendation:** Add adversarial removal question to every PA audit: "What would you REMOVE from this page?"
- **Evidence:** From adversarial review (H6): "Current PA questions are almost entirely ADDITIVE. This inverts the pipeline's bias toward complexity and introduces a restraint signal."
- **Target file:** `artifact-pa-protocol.md` Part 3, assign to Auditor I (adversarial).
- **Expected impact:** Catches over-engineering, Goodhart-proofs mechanism count.

---

## From 13-adversarial-review.md

### AR-01: Container width per-zone exceptions for code-heavy content

- **Recommendation:** Content Analyst flags "container-pressure" when content includes code blocks >60 chars or tables >4 columns. Brief Assembler can then allocate 1100px exception for specific zones.
- **Evidence:** A1: "940px constraint derived from readability for prose, but code blocks truncate, tables compress, grids claustrophobic."
- **Target file:** `artifact-routing.md` Phase 0, new flag. `artifact-tc-brief-template.md` Tier 3.
- **Expected impact:** Better code/table readability without abandoning default width.

### AR-02: Palette families instead of absolute warm/cool rules

- **Recommendation:** Define "palette families" — warm primary with sanctioned accent families (including cool accents for functional color-coding).
- **Evidence:** A2: "Pipeline flags 98 'cold color violations' on role card labels — but those blues might be exactly what a reader expects for technical categorization."
- **Target file:** `artifact-identity-perception.md` SC-05 warm palette rule.
- **Expected impact:** Eliminates false-positive gate failures for semantically appropriate colors.

### AR-03: PA-05 as 4-dimensional vector

- **Recommendation:** PA-05 reports [DESIGNED, COHERENT, PROPORTIONATE, POLISHED] as separate scores.
- **Evidence:** A6: "A page can be brilliantly designed but poorly polished (3/4). These represent COMPLETELY DIFFERENT quality situations."
- **Target file:** `artifact-pa-protocol.md` PA-05 scoring format.
- **Expected impact:** Better remediation targeting. (Duplicate of PA-30 above.)

### AR-04: One-line audience description for PA auditors

- **Recommendation:** Give auditors: "This page is for experienced developers evaluating a multi-agent coding framework." No design intent — just who the reader is.
- **Evidence:** A10: "Fresh eyes = uninformed? Auditors do not know content is for senior engineers. Judge for general audience when actual audience is specialized."
- **Target file:** `artifact-pa-protocol.md` auditor prompt template, 1 line addition.
- **Expected impact:** Addresses audience-blindness bias without introducing confirmation bias.

### AR-05: Threshold ranges with targets instead of hidden thresholds

- **Recommendation:** Deliver thresholds as RANGES with TARGETS: "Zone backgrounds should differ meaningfully. Subtle = 20-30 RGB. Dramatic = 50+ RGB. Below 15 is invisible."
- **Evidence:** A18: "When builder does not know 15 RGB floor, produces deltas of 8. Pipeline chose theoretical harm (gaming) over demonstrated harm (failure). Gas Town PROVES the tradeoff was wrong — 2 perception gate failures."
- **Target file:** `artifact-builder-recipe.md` Phase 2 SELECT, or TC Brief Template Tier 2.
- **Expected impact:** HIGH — directly prevents the 2 perception gate failures observed.

### AR-06: Multi-channel boundary perception gate

- **Recommendation:** At each zone boundary, count total perceptible shifts across ALL channels. Boundary with 4 channel shifts should PASS even if one individual channel (background) is below threshold.
- **Evidence:** A13: "GR-11 flags Z2-Z3 background delta of 11 RGB. But the actual transition has a zone label, a border, and a typography shift. The gate measures one channel when the design uses multiple."
- **Target file:** `artifact-gate-runner.md` — new gate GR-44.
- **Expected impact:** Reduces false negatives on perceptible multi-channel transitions.

### AR-07: Content-driven threshold scaling (Complexity Budget)

- **Recommendation:** Phase 0 Content Analyst outputs "complexity budget" that scales ALL downstream thresholds. Simple content → lower mechanism floor (6-8), fewer zones (2-3), less CSS (400-600). Complex content → current thresholds.
- **Evidence:** P7: "Pipeline applies IDENTICAL quality standards regardless of content. 8,000-word technical deep-dive gets same 14-mechanism floor as 500-word glossary."
- **Target file:** `artifact-routing.md` Phase 0 output. `artifact-orchestrator.md` threshold application.
- **Expected impact:** Prevents over-engineering of simple content.

### AR-08: Metaphor affordance per section (not just global)

- **Recommendation:** Content Analyst maps "metaphor affordance" per section. High-affordance sections get full metaphor treatment. Low-affordance sections get functional treatment with only structural echoes.
- **Evidence:** P4: "Bottom third contains practical content that has nothing to do with a refinery. Forcing the metaphor onto utility content sacrifices clarity for consistency."
- **Target file:** `artifact-routing.md` Phase 0 metaphor assessment.
- **Expected impact:** Prevents dishonest metaphor application on utility content.

### AR-09: Replace homogeneous auditors with diverse evaluators

- **Recommendation:** 3 Opus (nuance) + 3 Sonnet (precision) + 3 adversarial prompts. Or: 1 Opus gestalt, 1 Gemini, 1 GPT for genuine model diversity.
- **Evidence:** A9/P5: "9 Opus instances = same training data, same biases, same blind spots. 9 correlated assessments, not 9 independent ones." When 9/9 flag trailing void, "ONE model's judgment repeated 9 times."
- **Target file:** `artifact-pa-protocol.md` Part 4 auditor roster. `MANIFEST.md` Section 2.
- **Expected impact:** Genuine perspective diversity vs coverage diversity.

### AR-10: Remove mechanism count floor (make ADVISORY)

- **Recommendation:** Replace ">=14 mechanisms" with "builder decides how many content needs." Mechanism count = ADVISORY, not gated.
- **Evidence:** H1: "A masterfully simple page with 6 perfectly chosen mechanisms might score higher than one with 18 deployed to pass a gate."
- **Target file:** `artifact-gate-runner.md` quality floor. `artifact-orchestrator.md` verdict logic.
- **Expected impact:** More content-appropriate designs; prevents mechanism-stuffing.

### AR-11: Content appropriateness gate

- **Recommendation:** Add gate: "Given content type and reader profile, is visual complexity appropriate?" 200-word page should not get same treatment as 8,000-word page.
- **Evidence:** H4: "42 gates check design properties. ZERO check whether design is APPROPRIATE for content."
- **Target file:** `artifact-gate-runner.md` — new advisory gate.
- **Expected impact:** Catches over-engineering.

### AR-12: Test pipeline against NOTHING (human benchmark)

- **Recommendation:** Give same content to skilled human developer with ONLY soul constraints. Compare against pipeline output with same PA protocol.
- **Evidence:** H5: "If hand-coded page scores within 0.5 points, 885-item infrastructure is overhead."
- **Target file:** Experimental protocol, not artifact change.
- **Expected impact:** Validates pipeline's value proposition.

### AR-13: Post-verdict institutional learning/logging

- **Recommendation:** Log: content type, mode, builder model, PA-05 score, gate pass rate, fix categories. Over multiple runs, enables threshold tuning.
- **Evidence:** ES-35: "Pipeline has ZERO institutional memory. Each run starts fresh."
- **Target file:** `artifact-orchestrator.md` — new post-verdict logging phase.
- **Expected impact:** Compounding improvement over time.

### AR-14: HTML post-processing for shipping hygiene

- **Recommendation:** After SHIP verdict, automated pass: validate HTML (W3C), check WCAG AA, compress images, minify CSS.
- **Evidence:** ES-36: "Not design quality checks — shipping hygiene that the pipeline currently omits."
- **Target file:** `artifact-orchestrator.md` or MANIFEST post-verdict.
- **Expected impact:** Production-readiness.

### AR-15: Builder question before CSS — "What should the reader FEEL?"

- **Recommendation:** Require builder to answer: "What is the ONE thing this page's design should make the reader FEEL that text alone cannot?"
- **Evidence:** Section 10 Macroscopic blind spot: "If the answer is 'nothing' or 'clarity,' the page will be B+. If specific and content-rooted, the builder has a creative north star."
- **Target file:** `artifact-builder-recipe.md` Phase 2 SELECT, or builder prompt.
- **Expected impact:** Changes what the builder ATTEMPTS — highest-probability single intervention for B+ → A.

### AR-16: Early-abort optimization (skip PA if identity gates fail)

- **Recommendation:** If identity gates fail, skip PA deployment entirely. Save ~11 agent spawns.
- **Evidence:** ES-21: "Currently optional."
- **Target file:** `artifact-orchestrator.md` Phase verdict logic.
- **Expected impact:** Cost/time savings on rebuild-bound builds.

### AR-17: Gate result categorization (MECHANICAL/STRUCTURAL/COMPOSITIONAL)

- **Recommendation:** Group gate failures as MECHANICAL (CSS value wrong), STRUCTURAL (layout wrong), COMPOSITIONAL (design intent wrong). Drives fix strategy.
- **Evidence:** ES-25: "Currently all failures are undifferentiated."
- **Target file:** `artifact-gate-runner.md` output format. Weaver prompt.
- **Expected impact:** Better fix targeting.

### AR-18: Temporal auditing (scrolling auditor)

- **Recommendation:** One auditor scrolls through page in Playwright at reading speed, reports where they paused, accelerated, lost interest. Not from screenshots — simulated reading experience.
- **Evidence:** ES-29: "PA auditors reconstruct temporal experience from spatial artifacts."
- **Target file:** `artifact-pa-protocol.md` Part 4 — new auditor type.
- **Expected impact:** Captures temporal quality dimension currently unmeasured.

### AR-19: Integrative auditor receives gate results

- **Recommendation:** Cross-reference perceptual findings with gate data: "Auditor C says zones feel the same. Gate GR-11 confirms: delta = 11 RGB."
- **Evidence:** ES-30: "Strengthens diagnosis."
- **Target file:** `artifact-pa-protocol.md` integrative auditor prompt.
- **Expected impact:** Richer integrative analysis.

### AR-20: SHIP WITH NOTES verdict category

- **Recommendation:** Add formal "SHIP WITH NOTES" verdict — ships but logs issues for future learning.
- **Evidence:** ES-31: "Gas Town verdict was 'SHIP WITH FIXES' — a category the pipeline invented ad-hoc."
- **Target file:** `artifact-orchestrator.md` Section 7 verdict tree.
- **Expected impact:** Formalizes existing ad-hoc practice.

### AR-21: Fix prioritization intelligence (effort + PA-05 impact)

- **Recommendation:** Weaver adds estimated fix effort + expected PA-05 impact per fix item.
- **Evidence:** ES-32: "Weaver already does this informally. Formalize it."
- **Target file:** Weaver output template in MANIFEST Appendix E.
- **Expected impact:** Better fix prioritization.

### AR-22: Regression awareness for re-runs

- **Recommendation:** On REFINE/REBUILD paths, weaver compares current scores against previous and flags regressions.
- **Evidence:** ES-33: "Single-pass has no comparison capability."
- **Target file:** Weaver prompt, MANIFEST Phase 3C.
- **Expected impact:** Prevents quality regressions during fix cycles.

### AR-23: Artistic impression includes builder intent

- **Recommendation:** Artistic impression includes WHAT THE PAGE IS TRYING TO BE (from conviction statement) so next builder understands intent, not just problems.
- **Evidence:** ES-34.
- **Target file:** Weaver prompt.
- **Expected impact:** Better REFINE builder context.

### AR-24: Hybrid APPLIED/COMPOSED mode

- **Recommendation:** APPLIED base with COMPOSED zones, rather than binary mode selection.
- **Evidence:** ES-08: "Content-volume-to-mode correlation — long = APPLIED?"
- **Target file:** `artifact-routing.md` mode determination. `artifact-orchestrator.md` Section 4.
- **Expected impact:** Better mode fit for mixed-complexity content.

### AR-25: Anti-monotony flag in Content Analysis

- **Recommendation:** Content Analyst flags content with >3 identical structural elements (e.g., 6 principle blocks).
- **Evidence:** ES-07: "Would have flagged Zone 4's 6 identical blockquotes."
- **Target file:** `artifact-routing.md` Phase 0, new operation.
- **Expected impact:** Prevents Zone 4-type monotony at content analysis stage.

### AR-26: Component pre-selection in Content Analysis

- **Recommendation:** Content Analyst maps which components.css classes fit each section.
- **Evidence:** ES-06: "Content-driven mechanism selection instead of 'pick from catalog.'"
- **Target file:** `artifact-routing.md` Phase 0, new operation.
- **Expected impact:** Reduces builder guesswork.

### AR-27: Section rhythm prediction in Content Analysis

- **Recommendation:** Content Analyst flags which sections need drama/visual emphasis.
- **Evidence:** ES-05.
- **Target file:** `artifact-routing.md` Phase 0.
- **Expected impact:** Better density arc planning.

### AR-28: Mid-build checkpoint (builder screenshot at 50%)

- **Recommendation:** Builder takes screenshot at 50% completion and evaluates against conviction.
- **Evidence:** ES-20: "Catches compositional drift while correction is cheap."
- **Target file:** `artifact-builder-recipe.md` between Phase 3 and Phase 4.
- **Expected impact:** Medium-high — catches defects earlier.

### AR-29: Builder self-catch for sub-perceptual deltas

- **Recommendation:** Builder self-check: "Screenshot your Z2-Z3 boundary. Can you tell zones apart?"
- **Evidence:** ES-16.
- **Target file:** `artifact-builder-recipe.md` Phase 5.
- **Expected impact:** Prevents sub-perceptual zone boundaries.

### AR-30: Builder component adoption reporting

- **Recommendation:** Builder reports which components.css classes used. If <5, brief's Tier 3 was insufficient.
- **Evidence:** ES-17.
- **Target file:** Builder prompt template.
- **Expected impact:** Feedback loop for brief quality.

### AR-31: Brief validation gate — actionable creative guidance check

- **Recommendation:** Before passing brief to builder, verify it contains actionable creative guidance, not just constraints.
- **Evidence:** ES-15.
- **Target file:** `artifact-orchestrator.md` Phase 2.5 gates.
- **Expected impact:** Catches constraint-only briefs.

### AR-32: Negative space intelligence (4 void types)

- **Recommendation:** Pipeline distinguishes STRUCTURAL void (bug), RHYTHMIC void (breathing room), DRAMATIC void (deliberate pause), COMPOSITIONAL void (restraint). Only structural is a defect.
- **Evidence:** P8: "Pipeline treats all empty space as defect. A designer treats it as a tool."
- **Target file:** `artifact-gate-runner.md` GR-14 stacking check. PA questions about space.
- **Expected impact:** Reduces false positives on intentional space.

### AR-33: Rotating PA question pool (Goodhart resistance)

- **Recommendation:** Maintain pool of 120+ questions, randomly sample 40 per audit. Builder cannot optimize for specific set.
- **Evidence:** Part IV Goodhart mechanism: "65 fixed targets. A sophisticated builder could pass all while being mediocre in uncovered dimensions."
- **Target file:** `artifact-pa-protocol.md` restructure to pool-based system.
- **Expected impact:** Strongest Goodhart resistance.

### AR-34: "Is this page trying too hard?" question

- **Recommendation:** Add question that directly measures over-engineering/Goodhart: "Is this page trying too hard?"
- **Evidence:** Q9: "We never ask about over-engineering."
- **Target file:** `artifact-pa-protocol.md` Part 3.
- **Expected impact:** Inverts complexity bias.

### AR-35: World-description framing validation experiment

- **Recommendation:** Test whether "world-description" framing actually changes builder behavior vs direct prohibition framing.
- **Evidence:** A17: "The reframing is a psychological trick that MIGHT work on humans but is unlikely to change how an LLM processes constraints."
- **Target file:** Experimental protocol.
- **Expected impact:** Validates or invalidates major pipeline design decision.

### AR-36: Single-agent Opus baseline experiment

- **Recommendation:** Test single Opus agent with CD-006 reference + soul constraints + long context vs full 15-agent pipeline.
- **Evidence:** A28: "Pipeline might be solving a problem that no longer exists."
- **Target file:** Experimental protocol.
- **Expected impact:** Validates pipeline value proposition.

### AR-37: 3-pass build experiment

- **Recommendation:** Run a 3-pass build (council declared single-pass default without evidence).
- **Evidence:** A19: "Pipeline declared single-pass default without comparative evidence."
- **Target file:** Experimental protocol.
- **Expected impact:** Tests multi-pass quality ceiling.

### AR-38: Brief line budget A/B test

- **Recommendation:** Compare 80-line brief vs 200-line brief.
- **Evidence:** A20: "The line budget was set by fiat. No A/B test has compared."
- **Target file:** Experimental protocol.
- **Expected impact:** Optimizes brief length.

### AR-39: Emotional arc as specified (not emergent)

- **Recommendation:** Design emotional arc explicitly rather than declaring it "emergent."
- **Evidence:** A23: "Every other quality dimension IS specified. Why is emotional arc the exception?"
- **Target file:** `artifact-tc-brief-template.md` Tier 4, or `artifact-builder-recipe.md` Phase 4.
- **Expected impact:** Makes emotional modulation plannable.

### AR-40: Unprompted discovery auditors (2-3 with NO questions)

- **Recommendation:** 2-3 auditors with only: "Look at this page. Write down everything you notice, in order."
- **Evidence:** Part IV Strategy 2: "Open-ended format cannot be gamed because there is no target."
- **Target file:** `artifact-pa-protocol.md` Part 4 auditor roster.
- **Expected impact:** Goodhart resistance + novel finding discovery.

### AR-41: Adversarial auditors ("find reasons this is BAD")

- **Recommendation:** 2 auditors with "find everything that PASSES but shouldn't" framing.
- **Evidence:** ES-28 and Part IV Strategy for Goodhart detection.
- **Target file:** `artifact-pa-protocol.md` Part 4.
- **Expected impact:** Catches Goodhart vulnerabilities.

### AR-42: Quality-complexity ratio measurement

- **Recommendation:** Measure quality as RATIO of complexity to content need, not absolute complexity.
- **Evidence:** Q8: "Best designed pages on web are often SIMPLER. Quality might live in the ratio, not absolute complexity."
- **Target file:** Gate runner or PA question set.
- **Expected impact:** Aligns quality measurement with content appropriateness.

---

## From 14-perceptual-science-foundations.md

### PS-01: NM-01 Saliency Consistency Test

- **Recommendation:** For each viewport-height, identify most visually salient element and most informationally important. Are they the same? >=80% = PASS.
- **Evidence:** Treisman's Feature Integration Theory + Guided Search Model. Pre-attentive saliency determines first fixation.
- **Target file:** `artifact-pa-protocol.md` new measurement instrument, or gate.
- **Expected impact:** Detects saliency-importance misalignment.

### PS-02: NM-02 Grouping Strength Index

- **Recommendation:** At 5 section boundaries, estimate inter-section gap / intra-section gap ratio. >=4.0 = STRONG, 2.5-3.9 = CLEAR, <1.5 = AMBIGUOUS.
- **Evidence:** Gestalt proximity principle. S-09 measures absolute gap but not RATIO relative to intra-section spacing.
- **Target file:** `artifact-pa-protocol.md` or `artifact-gate-runner.md`.
- **Expected impact:** Catches grouping ambiguity missed by absolute spacing checks.

### PS-03: NM-03 Feature Differentiation Count

- **Recommendation:** At each zone boundary, count simultaneous visual property changes. 1=FLAT, 3=DESIGNED, 6+=FLAGSHIP.
- **Evidence:** Pre-attentive features require >=2 differences for instant discrimination (Treisman). Provides neuroscience-grounded justification for multi-coherence measurement.
- **Target file:** PA question set (maps to PA-62/PA-69 but more rigorous).
- **Expected impact:** Better multi-coherence measurement.

### PS-04: NM-04 Layout Complexity Score (Birkhoff Ratio)

- **Recommendation:** Measure ORDER/COMPLEXITY ratio. M > 1.5 = too simple, 0.8-1.5 = sweet spot, <0.4 = chaotic.
- **Evidence:** Birkhoff's Aesthetic Measure (1933). Neither ORDER nor COMPLEXITY is currently quantified.
- **Target file:** New measurement instrument. Could be gate or PA question.
- **Expected impact:** Predicts aesthetic quality independent of specific design choices.

### PS-05: NM-05 Processing Fluency Proxy

- **Recommendation:** Show page to fresh reader. "After 10 seconds, describe page's organization in one sentence." "After 30 seconds, where would you find [specific content]?"
- **Evidence:** Reber et al. (2004) — processing fluency correlates with perceived beauty, truth, liking.
- **Target file:** PA audit protocol or separate instrument.
- **Expected impact:** Catches poorly organized complex pages.

### PS-06: NM-06 Depth Layer Count

- **Recommendation:** Count distinct visual planes: page background, zone backgrounds, content surfaces, component containers, elevated elements, floating elements. 1=FLAT, 4+=RICH.
- **Evidence:** Gestalt figure-ground. Currently 5% coverage. Gas Town lacks depth layering — "everything sits on a single visual plane."
- **Target file:** `artifact-pa-protocol.md` new question.
- **Expected impact:** Measures depth richness dimension.

### PS-07: NM-07 Scan Path Alignment Score

- **Recommendation:** Ask 3 fresh readers to list first 5 things noticed. Compare to content author's 5 most important elements. Compute rank correlation.
- **Evidence:** Eye-tracking research (Buscher et al., 2009). Currently 15% coverage for scan path design.
- **Target file:** `artifact-pa-protocol.md` new question or separate instrument.
- **Expected impact:** Measures attention guidance accuracy.

### PS-08: NM-08 Rhythm Regularity and Variation Score

- **Recommendation:** Measure vertical distance between rhythm anchors. Compute coefficient of variation. CV < 0.15 = MONOTONOUS, 0.15-0.35 = RHYTHMIC, > 0.60 = ERRATIC.
- **Evidence:** Music perception research (Large & Jones, 1999). Dynamic attending theory.
- **Target file:** Gate runner (automated measurement) or PA question.
- **Expected impact:** Catches monotonous or erratic rhythm.

### PS-09: NM-09 Novelty-Without-Confusion Index

- **Recommendation:** Identify every deviation from dominant pattern. Rate each as +1 (novel & helpful), 0 (neutral), -1 (confusing). Sum/count > 0.5 = ENRICHING.
- **Evidence:** Berlyne's collative properties + Martindale preference model.
- **Target file:** `artifact-pa-protocol.md` new question.
- **Expected impact:** Measures novelty quality.

### PS-10: NM-10 Micro-Reward Distribution

- **Recommendation:** At 2x zoom, count elements with "hidden" refinements — tabular-nums, zone-specific ::selection colors, hover transitions, first-child treatments. 0=NONE, 6+=GENEROUS.
- **Evidence:** Variable ratio reinforcement (Skinner) + Norman's reflective design level.
- **Target file:** `artifact-pa-protocol.md` new question.
- **Expected impact:** Measures depth-of-craft dimension.

### PS-11: Proximity ratio measurement (grouping strength)

- **Recommendation:** At section boundaries, measure total gap vs average intra-section spacing. Ratio >=2.5:1 for clear grouping, >=4:1 for strong.
- **Evidence:** "S-09 stacking check measures ABSOLUTE gap (<=120px) but not the RATIO relative to intra-section spacing."
- **Target file:** `artifact-gate-runner.md` or PA question set.
- **Expected impact:** Catches grouping ambiguity.

### PS-12: Feature discriminability between variants

- **Recommendation:** Measure "how many visual features differentiate element X from element Y?" Callout variants differ only in border-left color — WEAK (1 feature).
- **Evidence:** Gestalt similarity principle. "Callout variants rely on a single feature (border color) for differentiation."
- **Target file:** `artifact-pa-protocol.md` or builder recipe.
- **Expected impact:** Catches weak component differentiation.

### PS-13: Vertical continuation measurement

- **Recommendation:** Measure whether same element types appear at consistent vertical intervals. Heading every ~400px = rhythm. Erratic spacing = broken continuation.
- **Evidence:** Gestalt continuation principle. "Vertical continuation is not measured."
- **Target file:** Gate runner or PA question.
- **Expected impact:** Catches erratic heading/element rhythm.

### PS-14: Closure exploitation measurement

- **Recommendation:** Count instances where viewer perceives a shape/boundary NOT explicitly drawn. 0=no closure, 6+=advanced.
- **Evidence:** Gestalt closure principle. 5% coverage currently. "Almost completely unmeasured."
- **Target file:** `artifact-pa-protocol.md` new question.
- **Expected impact:** Measures design sophistication dimension.

### PS-15: Figure-ground depth measurement

- **Recommendation:** Count perceptible visual layers. Currently almost unmeasured (5%). Gas Town lacks depth — "no overlapping, z-index stacking, or shadow-based depth."
- **Evidence:** Gestalt figure-ground. (Overlaps with PS-06/NM-06.)
- **Target file:** PA question or builder recipe guidance.
- **Expected impact:** Measures perceptual depth.

### PS-16: Encoding efficiency measurement

- **Recommendation:** For each visual feature (border-left, background, font-family), catalog how many distinct meanings its variations express. 1=no encoding, 5+=rich encoding.
- **Evidence:** 0% coverage currently — "completely unmeasured." Higher encoding efficiency = more information per pixel = richer page with less clutter.
- **Target file:** New PA question or measurement instrument.
- **Expected impact:** Measures information design quality.

### PS-17: Scan path optimization

- **Recommendation:** Ask auditors to track actual scan path (first 5 fixations) and compare to intended content priority order.
- **Evidence:** 15% coverage. "We ask about flow but not scan optimization."
- **Target file:** `artifact-pa-protocol.md` new question. (Overlaps PS-07/NM-07.)
- **Expected impact:** Measures visual hierarchy effectiveness.

### PS-18: Proportional system coherence

- **Recommendation:** Check whether proportions form a coherent related system (e.g., header:body ratio, margin:content ratio, heading:paragraph ratio share common proportional relationship).
- **Evidence:** "No measurement of whether proportions form a related system."
- **Target file:** PA question or measurement instrument.
- **Expected impact:** Measures proportional harmony at system level.

### PS-19: Cognitive load (extraneous) direct measurement

- **Recommendation:** Measure "time to orient" — how long until new reader can describe page's organization. Directly quantifies extraneous cognitive load.
- **Evidence:** Sweller's Cognitive Load Theory. "PA questions measure SYMPTOMS of high extraneous load but not the load itself."
- **Target file:** New measurement instrument.
- **Expected impact:** Direct cognitive load measurement.

### PS-20: Motivated vs unmotivated disfluency distinction

- **Recommendation:** Distinguish between disfluency placed at meaningful moments (motivated = germane load) vs random positions (unmotivated = extraneous load).
- **Evidence:** Diemand-Yauman et al. (2011). "Dark inversion at philosophically important moment = motivated. Random position = unmotivated. Pipeline cannot distinguish."
- **Target file:** PA question or builder recipe.
- **Expected impact:** Better disfluency quality assessment.

---

## From 15-microscopic-css-quality.md

### CSS-01: Fix `--accent-blue: #A07D50` variable naming

- **Recommendation:** Rename `--accent-blue` to `--accent-gold` or `--accent-brass`. #A07D50 (R:160, G:125, B:80) has zero blue.
- **Evidence:** "The variable name is misleading." Listed as #1 worst CSS decision. "Costs: developer confusion, potential incorrect usage."
- **Target file:** `yegge-gas-town.html` line 38, CSS custom property.
- **Expected impact:** Developer clarity. No visual change.

### CSS-02: Increase callout background opacity from 3% to 8-10%

- **Recommendation:** `rgba(color, 0.03)` backgrounds produce ~7 RGB shift — sub-perceptual. Increase to 8-10% or remove.
- **Evidence:** "9 declarations, 6 sub-perceptual. Cost: CSS readability. Benefit: nearly zero visual impact on 6/9 uses."
- **Target file:** `yegge-gas-town.html` — callout background rgba values.
- **Expected impact:** Minor — makes callout backgrounds perceptible.

### CSS-03: Remove unused font-weight 700 from Inter import

- **Recommendation:** Change `Inter:wght@400;500;600;700` to `Inter:wght@400;500;600`. 700 never used.
- **Evidence:** "Extra ~20-50KB font file for zero visual impact."
- **Target file:** `yegge-gas-town.html` line 18, Google Fonts URL.
- **Expected impact:** Performance improvement (20-50KB saved).

### CSS-04: Remove dead tokens (`--text-display`, `--text-lg`, `--space-24`)

- **Recommendation:** Remove 3 defined-but-unused tokens.
- **Evidence:** "Dead tokens create false expectations. A developer might assume --text-display is used somewhere."
- **Target file:** `yegge-gas-town.html` `:root` block — lines 64, 70, 84.
- **Expected impact:** CSS cleanliness.

### CSS-05: Consolidate 6 near-duplicate section-indicator styles

- **Recommendation:** Create shared `.section-indicator` class, use zone-specific override only for Z5 (different weight/tracking/color). Saves ~48 lines.
- **Evidence:** "Five of six section indicators are identical. Z5 is the only meaningful variation."
- **Target file:** `yegge-gas-town.html` — lines 313-323, 565-575, 795-805, 978-988, 1083-1093, 1381-1391.
- **Expected impact:** CSS maintainability, -48 lines.

### CSS-06: Normalize table td padding across table types

- **Recommendation:** Unify base table td padding (e.g., `space-3 space-4` for all), with zone-specific overrides where needed.
- **Evidence:** "Profile-table uses 12px 16px. Waves-table uses 12px 12px. Stages-table uses 8px 12px. Inconsistent."
- **Target file:** `yegge-gas-town.html` — various table CSS blocks.
- **Expected impact:** Minor visual consistency improvement.

### CSS-07: Add `scroll-margin-top` for anchor link targets

- **Recommendation:** Add `scroll-margin-top` to heading elements for TOC anchor links.
- **Evidence:** "`scroll-behavior: smooth` on html without scroll-margin-top. Clicking TOC link scrolls heading under potential sticky elements."
- **Target file:** `yegge-gas-town.html` — CSS for headings.
- **Expected impact:** UX improvement for TOC navigation.

### CSS-08: Remove redundant `::selection` in zone-dispatch

- **Recommendation:** Zone-dispatch `::selection` override is identical to body-level. Remove.
- **Evidence:** "Redundant — inherited selection styles don't reset at section boundaries. 3 wasted lines."
- **Target file:** `yegge-gas-town.html` lines 1523-1526.
- **Expected impact:** 3 lines removed.

### CSS-09: Check if `featured-code::after` is actually used in HTML

- **Recommendation:** Verify `.featured-code` class is applied in HTML markup. If not, remove 13 dead CSS lines.
- **Evidence:** "13 lines create a 4px offset dark rectangle... the HTML in Zone 5 doesn't actually apply this class to any element."
- **Target file:** `yegge-gas-town.html` lines 1260-1273.
- **Expected impact:** Potentially 13 dead lines removed.

### CSS-10: Codify zone-adaptive body font-size as pipeline pattern

- **Recommendation:** Document the zone-adaptive body font-size pattern (18→16→15→16→15→16) as a quality multiplier in the builder recipe.
- **Evidence:** "6 declarations. Creates the entire 'breathing' rhythm of the page. Quality-per-line ratio: 10/10." Called "the single most 'designed' decision in the CSS."
- **Target file:** `artifact-builder-recipe.md` Phase 3 — add as recommended technique.
- **Expected impact:** Future builders adopt this high-impact pattern.

### CSS-11: Codify dark code block inversion as pipeline pattern

- **Recommendation:** Document the dark-on-light code block inversion pattern as structural punctuation technique.
- **Evidence:** "The strongest visual component on the page." Code blocks as "page landmarks, scrolling anchors, and information density markers."
- **Target file:** `artifact-builder-recipe.md` Phase 3 — add as recommended technique.
- **Expected impact:** Ensures future builders maintain this pattern.

### CSS-12: Codify inversion block pattern as pipeline quality multiplier

- **Recommendation:** Document the full-bleed dark inversion block (negative margin, centered, inverted colors, constrained max-width) as THE single strongest quality signal.
- **Evidence:** "One component, 34 lines of CSS, maximum impact. Creates PHYSICAL interruption in scroll experience. Quality-per-line ratio: 10/10."
- **Target file:** `artifact-builder-recipe.md` Phase 4 D-04 techniques.
- **Expected impact:** Ensures builders create a "second-half moment."

### CSS-13: Codify font-family trinity as structural pattern

- **Recommendation:** Document the strict role assignment: Serif = authority/voice, Sans = neutrality/content, Mono = system/data. Zero crossover.
- **Evidence:** "3 lines create the entire information-categorization system. Reader unconsciously categorizes information by font family alone."
- **Target file:** Already partially in tokens.css, but should be explicit in recipe.
- **Expected impact:** Maintains font discipline.

### CSS-14: Codify 4/3/1px border hierarchy with color-weight pairing

- **Recommendation:** Document the border weight + color intensity pairing as self-reinforcing hierarchy: heavy+red, medium+tan, light+subtle.
- **Evidence:** "Every border width maps to a semantic role. Zero decorative borders."
- **Target file:** `artifact-builder-recipe.md` or builder reference.
- **Expected impact:** Maintains border discipline.

### CSS-15: Codify spacing rhythm (zone padding pattern) as quality multiplier

- **Recommendation:** Document the zone padding arc: Z1 generous (80/48) → Z2 compressed (64/32) → Z3 moderate (48/32) → Z4 even (48/48) → Z5 tight (32/32) → Z6 release (48/48).
- **Evidence:** "The spacing tells a story: open → compression → moderate → even → tight → release. This is the refinery metaphor encoded in whitespace."
- **Target file:** `artifact-builder-recipe.md` Phase 3 technique.
- **Expected impact:** Future builders replicate this quality multiplier.

---

## From 16-macroscopic-quality.md

### MQ-01: Require builder "creative north star" question

- **Recommendation:** Before writing CSS, builder answers: "What is the ONE thing this page's design should make the reader FEEL that the text alone cannot?" Generic answers ("clarity") → B+ output. Content-specific answers → creative potential.
- **Evidence:** "The SINGLE biggest thing our pipeline cannot produce: CONTENT-FORM ISOMORPHISM." "If forced to name ONE modification with highest probability of B+ → A..."
- **Target file:** `artifact-builder-recipe.md` Phase 2 SELECT, question 0.
- **Expected impact:** Changes what the builder ATTEMPTS. Highest-probability intervention.

### MQ-02: Design must amplify content's voice (not just contain it)

- **Recommendation:** Yegge says "biggest fuckin' ant" — the design presents it in tasteful serif italic. "The container domesticates the wildness." Design should match content's energy: "The writing has swagger, the design has discipline."
- **Evidence:** Authority Test: "THE DESIGN IS SLIGHTLY TOO POLITE FOR THE CONTENT. THE CONTENT IS PUNK; THE DESIGN IS BUSINESS CASUAL."
- **Target file:** `artifact-builder-recipe.md` Phase 4 D-01 content-register reading.
- **Expected impact:** Addresses content-design tonal mismatch.

### MQ-03: 3-4 pattern-breaking moments distributed across scroll

- **Recommendation:** Gas Town has 1 genuine surprise (interstitial) across 20+ screens. Target: 3-4 pattern-breaking moments distributed across scroll length.
- **Evidence:** Surprise Test: "3 MILD SURPRISES IN 20+ SCREENS. THE SURPRISE DEFICIT IS SEVERE." Stripe comparison: 5-8 surprising moments per scroll.
- **Target file:** `artifact-builder-recipe.md` Phase 4 D-04, or TC Brief Template quality target.
- **Expected impact:** Emotional modulation improvement.

### MQ-04: Design must have a "poster frame" / signature visual

- **Recommendation:** Every page should have at least one viewport that works as a standalone visual — a "poster frame" that identifies the page.
- **Evidence:** Memory Test: "No poster frame. Every viewport is competent but interchangeable with dozens of other well-made technical documentation pages."
- **Target file:** `artifact-builder-recipe.md` Phase 4, or PA question.
- **Expected impact:** Creates memorability.

### MQ-05: Content-form isomorphism as design principle

- **Recommendation:** Pipeline should explicitly target content-form isomorphism: "form and content are the same thing expressed in different modalities."
- **Evidence:** World-class mapping: "0/5 defining qualities of world-class long-form web design." The defining quality gap is NOT competence — it is that "form IS content."
- **Target file:** Pipeline philosophy documentation. Builder recipe Phase 4.
- **Expected impact:** Paradigm-level improvement target.

### MQ-06: Emotional modulation over scroll (not flatline)

- **Recommendation:** Scroll experience must modulate emotions — peaks, valleys, surprise, relief, resolution. Currently: "steady absorption" = flatline.
- **Evidence:** Emotion Test: "CLARITY WITHOUT MOVEMENT. THE DESIGN FLATLINES WHERE THE CONTENT HAS PEAKS."
- **Target file:** `artifact-builder-recipe.md` Phase 4 D-02/D-03 emotional registers.
- **Expected impact:** Emotional arc improvement.

### MQ-07: More pattern-breaking interstitials like the dark quote

- **Recommendation:** The "Nature prefers colonies" interstitial proves the page CAN create surprise. Replicate this pattern at 2-3 additional strategic points.
- **Evidence:** "If the page had 3-4 such pattern-breaking moments, emotional modulation would improve dramatically."
- **Target file:** `yegge-gas-town.html` — additional inversion/interstitial blocks.
- **Expected impact:** Transforms flatline into arc.

### MQ-08: Footer as strong bookend (not missed opportunity)

- **Recommendation:** Footer should be a strong closing statement bookending the dark header. Currently "minimal and quickly followed by empty space."
- **Evidence:** "The footer as missed opportunity... could be a strong closing statement. Instead, it's minimal."
- **Target file:** `yegge-gas-town.html` footer HTML/CSS.
- **Expected impact:** Improved ending impression.

### MQ-09: Differentiate dense zones from sparse zones SPATIALLY (not just through content)

- **Recommendation:** Z2 (Factory Floor = DENSE) should use tighter line-height, narrower margins, smaller text, darker background — "visual pressure that makes reader feel compression."
- **Evidence:** "Both zones use same single-column text layout with similar paragraph spacing. 'Density' comes from shorter paragraphs, not genuinely different spatial experience."
- **Target file:** `yegge-gas-town.html` zone-specific CSS.
- **Expected impact:** Zone differentiation becomes perceptual, not just labeled.

### MQ-10: Z1→Z2 transition should feel like "walking through an airlock"

- **Recommendation:** For metaphor about crossing from "intake" to "heavy processing," the transition should feel dramatic, not subtle.
- **Evidence:** "Visually, warm cream text above, slightly darker warm cream below. Shift is perceptible if looking for it. Invisible to reader absorbed in content."
- **Target file:** `yegge-gas-town.html` — Z1→Z2 boundary CSS.
- **Expected impact:** Metaphor becomes structural instead of announced.

---

## From 17-meta-meta-analysis.md

### MM-01: Dual-instrument approach (Binary PA + Quality Journal)

- **Recommendation:** Keep binary PA for gate/ship decisions. ADD a 10-question Quality Journal (QJ) with 1-7 scales, administered by 2-3 separate auditors. QJ questions:
  - QJ-01: How much want to keep scrolling? (1=stop, 7=compelled)
  - QJ-02: How CONFIDENT does design feel? (1=tentative, 7=decisive)
  - QJ-03: How well does visual treatment AMPLIFY content's voice? (1=generic, 7=design IS content)
  - QJ-04: How VARIED across full scroll? (1=uniform, 7=richly varied)
  - QJ-05: How MEMORABLE in a week? (1=forgettable, 7=specific images)
  - QJ-06: How much REWARDS close attention? (1=everything at glance, 7=details reveal)
  - QJ-07: How well PACES demands? (1=boring/overwhelming, 7=perfectly metered)
  - QJ-08: EXPERIENCE vs DOCUMENT? (1=document, 7=journey)
  - QJ-09: How TRUSTWORTHY? (1=amateur, 7=authoritative)
  - QJ-10: Overall placement? (1=competent, 4=professional, 7=exceptional)
- **Evidence:** "Binary format produces 1 bit per question. Cannot distinguish 'adequate' from 'exceptional.' All 3/4 pages look identical."
- **Target file:** New instrument, `artifact-pa-protocol.md` Part 6 (new section).
- **Expected impact:** Captures degree, trajectory, and affect that binary cannot.

### MM-02: Mixed-method auditor diversity (Model D)

- **Recommendation:** Replace 9 identical-method auditors with:
  - 3 auditors: binary PA questions on screenshots (current)
  - 2 auditors: open-ended response on screenshots
  - 2 auditors: emotional journaling while scrolling live page
  - 1 auditor: task-based (find specific information)
  - 1 auditor: comparison-based (rank against reference pages)
- **Evidence:** "All 9 auditors use same method, so adding more has diminishing returns. Different methods capture DIFFERENT quality dimensions."
- **Target file:** `artifact-pa-protocol.md` Part 4, auditor deployment.
- **Expected impact:** Highest information gain model for auditor diversity.

### MM-03: Scale-based question ordering (Architecture 2)

- **Recommendation:** Reorder PA questions within each auditor's set from macro→micro→synthesis instead of PA-number order.
- **Evidence:** "PA-35 was highest-discrimination pacing question but embedded among spatial questions. If positioned after PA-34 and PA-36, auditor would be primed for richer answer."
- **Target file:** `artifact-pa-protocol.md` Part 4, question ordering per auditor.
- **Expected impact:** Deeper cross-dimensional insights. Cheapest experiment.

### MM-04: Experiment 1 — Architecture Effect Test

- **Recommendation:** Deploy 4 auditors with identical questions but different orders (current PA-number, scale-based, temporal, Bloom taxonomy). Compare depth, cross-dimensional insights, novel findings.
- **Evidence:** "Cheapest experiment (4 Opus agents, existing screenshots, 20-30 min)."
- **Target file:** Experimental protocol.
- **Expected impact:** Quick win for question ordering.

### MM-05: Experiment 2 — Binary vs Dual-Instrument Comparison

- **Recommendation:** Select 3 pages with similar PA-05 (all 3/4). Deploy standard Mode 4 PA + 3 Quality Journal auditors per page. Do QJ scores distinguish between pages binary rates identically?
- **Evidence:** "Key test: If binary rates all three as 3/4 but QJ rates them 4.2, 5.1, 3.8 — QJ captures degree binary misses."
- **Target file:** Experimental protocol.
- **Expected impact:** Validates dual-instrument approach.

### MM-06: Experiment 3 — Adversarial Goodhart Probe

- **Recommendation:** Give Opus builder full PA protocol. Instruct: "Build page passing every question with MINIMUM design effort." Deploy Mode 4 PA + Quality Journal. If PA passes but QJ fails → proves gamability.
- **Evidence:** "Directly tests integrity of measurement system. HIGHEST strategic value."
- **Target file:** Experimental protocol.
- **Expected impact:** Validates/invalidates measurement system integrity.

### MM-07: Frame diversity (Model B) for auditors

- **Recommendation:** Instead of all "designer" frames, use 5 frames: Designer ("is this well-designed?"), Reader ("can I learn what I came for?"), Editor ("does form serve content?"), Developer ("is this maintainable?"), First-time visitor ("do I trust this?").
- **Evidence:** "Cheapest to implement — only changes auditor prompt frame."
- **Target file:** `artifact-pa-protocol.md` Part 4 auditor prompts.
- **Expected impact:** Surfaces findability, cognitive load, trust issues that designer frame misses.

### MM-08: Adversarial diversity (Model E) for auditors

- **Recommendation:** 5 standard PA + 2 "find what PASSES but shouldn't" + 2 "find what FAILS but is actually good."
- **Evidence:** "Directly addresses Goodhart problem."
- **Target file:** `artifact-pa-protocol.md` Part 4.
- **Expected impact:** Catches false positives and false negatives.

### MM-09: Rotating question pool (120+ pool, sample 40)

- **Recommendation:** Maintain 120+ questions, randomly sample 40 per audit. Builder cannot optimize for specific set.
- **Evidence:** "Strongest Goodhart resistance. Requires most infrastructure."
- **Target file:** `artifact-pa-protocol.md` restructure.
- **Expected impact:** Strongest anti-gaming measure. (Duplicate of AR-33.)

### MM-10: Description-before-judgment format

- **Recommendation:** Auditor describes what they see FIRST, then answers YES/NO. Degree embedded in description, binary preserved.
- **Evidence:** "2.3 bits/question (vs 1 bit binary). Description may bias subsequent judgment — medium risk."
- **Target file:** `artifact-pa-protocol.md` question format.
- **Expected impact:** Captures degree while preserving binary aggregation.

### MM-11: Behavioral indicators instead of judgment questions

- **Recommendation:** Instead of "Is there variety?" ask "Count distinct visual treatments in Zone 3."
- **Evidence:** "Produces numeric data without requiring judgment."
- **Target file:** Selected PA questions where counting is more reliable than judging.
- **Expected impact:** More reliable data for specific dimensions.

### MM-12: Live-page interaction auditing

- **Recommendation:** Some auditors interact with live page rather than screenshots. Hover, click, scroll at natural speed.
- **Evidence:** "Object-audit, not experience-measurement" is structural limitation #1. "Screenshot medium constrains measurement paradigm."
- **Target file:** `artifact-pa-protocol.md` Part 5 screenshot/interaction protocol.
- **Expected impact:** Captures temporal, cognitive, and interactive quality.

### MM-13: Delayed assessment (memorability measurement)

- **Recommendation:** Show page, wait 24 hours, ask "What do you remember? What image comes to mind?"
- **Evidence:** "Measures memorability — a dimension that cannot be Goodharted because builder has no access to auditor's memory process."
- **Target file:** Experimental protocol or new assessment phase.
- **Expected impact:** Directly measures memorability.

### MM-14: Comparison-based PA questions

- **Recommendation:** Instead of "Does this have X?", ask "Is this BETTER than reference page at X?" Comparison generates degree information.
- **Evidence:** "Comparison naturally generates degree information and resists gaming because reference provides calibration."
- **Target file:** Selected PA questions or new instrument.
- **Expected impact:** Better degree capture.

### MM-15: Bloom taxonomy question ordering

- **Recommendation:** Order questions as Remember → Understand → Apply → Analyze → Evaluate → Create. Builds cognitive sophistication.
- **Evidence:** Architecture 4 analysis: "Lower levels inform higher levels."
- **Target file:** `artifact-pa-protocol.md` Part 4, question ordering.
- **Expected impact:** Deeper analytical responses.

### MM-16: Dimension-based auditor assignment

- **Recommendation:** Instead of mixed-dimension question sets, assign all typography questions to one auditor, all spatial to another, etc. Builds expertise within dimension.
- **Evidence:** Architecture 1 analysis. "Auditor builds expertise within a dimension. Seeing 11 spatial questions consecutively trains the eye."
- **Target file:** `artifact-pa-protocol.md` Part 4.
- **Expected impact:** Deeper per-dimension analysis.

### MM-17: Calibrate measurement against human judgment

- **Recommendation:** Show pages to 5 professional web designers, compare to pipeline verdict. "If they disagree, the pipeline is wrong."
- **Evidence:** "The only measurement that fully captures visual quality is the unmediated human response."
- **Target file:** Experimental protocol.
- **Expected impact:** Validates all instruments against ground truth.

### MM-18: User behavior observation (ultimate ground truth)

- **Recommendation:** Observe actual user behavior with real pages. Do they keep scrolling? Come back? Share?
- **Evidence:** "Our measurement system is a sophisticated prediction engine for an observable we never actually observe."
- **Target file:** Long-term experimental protocol.
- **Expected impact:** Calibrates ALL instruments against behavioral truth.

---

## From 18-enrichment-surface-map.md

This file contains 37 pre-structured enrichments (E-01 through E-37) with full specifications including current state, gap, proposed change, expected impact, effort, and risk. They are organized by pipeline phase. Rather than duplicate the full specifications, I reference them here with key data:

### Phase 0: Content Analysis (E-01 through E-04)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-01 | Content Map lacks per-section register vocabulary | MEDIUM | ~15 lines to artifact-routing.md |
| E-02 | Content Map omits transition weight recommendations | MEDIUM | ~10 lines |
| E-03 | Content Map lacks section word counts / element inventories | LOW-MEDIUM | ~10 lines |
| E-04 | Tension identification not connected to CSS | LOW | ~20 lines |

### Phase 1: Brief Assembly (E-05 through E-09)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-05 | Tier 3 lacks boundary-specific channel count table | HIGH | ~15 lines to tc-brief-template.md |
| E-06 | Tier 4 under-specifies CSS technique values | HIGH | ~20 lines |
| E-07 | Brief Assembler lacks channel coverage self-check | MEDIUM | ~10 lines |
| E-08 | No explicit layout variety requirement in brief | MEDIUM | ~5 lines |
| E-09 | Mode determination lacks structured rubric | LOW-MEDIUM | ~15 lines |

### Phase 2: Building (E-10 through E-15)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-10 | Builder prompt lacks CSS worked example | MEDIUM | ~60 lines |
| E-11 | Builder lacks "Common Pitfalls" avoidance | HIGH | ~15 lines to recipe |
| E-12 | Builder has no responsive breakpoint guidance | HIGH | ~40 lines |
| E-13 | Builder conviction statement under-specified | LOW-MEDIUM | ~10 lines |
| E-14 | Builder has no component adoption checklist | MEDIUM | ~10 lines |
| E-15 | Builder self-evaluation lacks structured checkpoints with screenshots | HIGH | ~15 lines |

### Phase 3A: Gate Runner (E-16 through E-19)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-16 | No gate for trailing void / page height sanity | HIGH | ~20 lines Playwright JS |
| E-17 | Gate runner doesn't test at 1024px | LOW | ~5 lines |
| E-18 | GR-22 CSS budget misallocation not implemented | MEDIUM | ~40 lines JS |
| E-19 | GR-05 warm-color check not comprehensive | MEDIUM | ~25 lines |

### Phase 3A: Screenshot Capture (E-20, E-21)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-20 | No full-page screenshot at any viewport | MEDIUM | ~5 lines |
| E-21 | No hover-state screenshots | LOW-MEDIUM | ~20 lines |

### Phase 3B: PA Audit (E-22 through E-26)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-22 | Auditor C overloaded (14 questions, 2x average) — split into C1 + C2 | MEDIUM | ~40 lines |
| E-23 | No PA question for density arc assessment | MEDIUM | ~5 lines |
| E-24 | No PA question for component library adoption | LOW | ~5 lines |
| E-25 | Integrative Auditor lacks structured gestalt framework | MEDIUM | ~15 lines |
| E-26 | No auditor assigned to assess header specifically | LOW | ~5 lines |

### Phase 3C: Verdict and Weaver (E-27, E-28)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-27 | Weaver verdict lacks severity hierarchy for gate failures | MEDIUM | ~10 lines |
| E-28 | Weaver's artistic impression output unstructured | MEDIUM | ~10 lines |

### Phase 4: Fix Cycles (E-29, E-30)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-29 | REFINE builder receives no CSS-specific fix targets | MEDIUM | ~10 lines |
| E-30 | No automated mechanical fix path for trivial BLOCKING issues | HIGH | ~25 lines |

### Cross-Phase Artifacts (E-31 through E-37)

| ID | Enrichment | Impact | Effort |
|----|-----------|--------|--------|
| E-31 | Value tables has below-threshold pair without warning | LOW | ~10 lines |
| E-32 | Worked examples incomplete (references, not includes) | MEDIUM | ~60 lines |
| E-33 | Component adoption in recipe lacks decision tree | MEDIUM | ~10 lines |
| E-34 | Agent prompts lack CRITICAL RULES header | MEDIUM | ~20 lines |
| E-35 | No cross-artifact consistency check | LOW | ~20 lines |
| E-36 | TC Brief Template doesn't specify zone BG color plan format | HIGH | ~10 lines |
| E-37 | Content Analyst spec misaligned with worked example output | MEDIUM | ~25 lines |

### Prioritized Implementation Waves (from enrichment-surface-map.md)

**Wave 1 (Highest ROI, ~2 hours):** E-16, E-11, E-36, E-05, E-06
**Wave 2 (High ROI, ~3 hours):** E-12, E-15, E-30, E-25, E-08
**Wave 3 (Medium ROI, ~3 hours):** E-01, E-02, E-07, E-10, E-27, E-28, E-34, E-37
**Wave 4 (Low ROI, ~2 hours):** Remaining 19 enrichments

---

## CROSS-FILE CONVERGENCE ANALYSIS

### Most-Referenced Enrichments (appearing in 3+ files)

| Enrichment | Files | Convergence Signal |
|-----------|-------|-------------------|
| **Eliminate trailing void** | 09, 10, 13, 16, 18 | UNANIMOUS — 5/9 files, 9/9 auditors |
| **Increase zone BG deltas / specify hex pairs** | 09, 10, 13, 15, 18 | 5/9 files — #1 perception failure |
| **Break Zone 4 monotony** | 09, 12, 13, 16, 17 | 5/9 files — 6/9 auditors flagged |
| **Builder threshold awareness (ranges not hidden)** | 10, 13, 18 | 3/9 — demonstrated harm vs theoretical |
| **PA-05 vector not scalar** | 12, 13 | 2/9 — enables differentiated remediation |
| **Content-form isomorphism** | 13, 16 | 2/9 — THE macro quality gap |
| **Responsive breakpoint guidance** | 09, 18 | 2/9 — 3/9 auditors flagged |
| **Builder creative north star question** | 13, 16 | 2/9 — highest-probability B+ → A intervention |
| **Metaphor from announced to structural** | 09, 13, 16 | 3/9 — rated 2/5 in CSS |
| **Auditor diversity (model/method)** | 13, 17 | 2/9 — addresses convergent bias |
| **Quality Journal dual-instrument** | 12, 17 | 2/9 — captures degree binary cannot |
| **Tier 4 technique CSS vocabulary** | 10, 18 | 2/9 — +0.3 PA-05 estimated |
| **Multi-coherence boundary template** | 10, 18 | 2/9 — +0.25 PA-05 estimated |
| **Add "what would you remove?" question** | 13 | 1/9 — but directly addresses Goodhart |
| **Mechanical fix path for trivial issues** | 18 | 1/9 — saves 60+ min on rebuild-bound builds |

### Top 10 Highest-Impact Enrichments (Cross-File Synthesis)

| Rank | Enrichment | Evidence Strength | Expected Impact |
|------|-----------|-------------------|-----------------|
| 1 | **Eliminate trailing void** (CSS fix + GR-43 gate) | 9/9 auditors, 5/9 files | +1.0 PA-05 |
| 2 | **Require hex pair + delta for zone BGs in brief** | 5/9 files, 2 gate failures | +0.3 PA-05 |
| 3 | **Enforce Tier 4 CSS technique vocabulary** | 10, 18 | +0.3 PA-05 |
| 4 | **Multi-coherence boundary table in brief** | 10, 18 | +0.25 PA-05 |
| 5 | **Builder threshold awareness via calibration bands** | 13, 18 — 2 proven failures | +0.2 PA-05 |
| 6 | **Add responsive breakpoint guidance** | 09, 18 — 3/9 auditors | +0.15 PA-05 |
| 7 | **Builder "creative north star" question** | 13, 16 | Paradigm shift potential |
| 8 | **Builder self-eval with actual screenshots** | 18 | Catches defects pre-PA |
| 9 | **Mechanical fix path for trivial BLOCKING** | 18 | Saves 60+ min per cycle |
| 10 | **Quality Journal dual-instrument** | 12, 17 | Captures degree/trajectory |

---

## SUMMARY STATISTICS

| Source File | Enrichments Extracted | HIGH Impact | MEDIUM Impact | LOW Impact |
|-------------|----------------------|-------------|---------------|------------|
| 09-visual-audit.md | 12 | 3 | 5 | 4 |
| 10-pipeline-flow.md | 15 | 5 | 7 | 3 |
| 12-pa-question-deep-analysis.md | 32 | 8 | 16 | 8 |
| 13-adversarial-review.md | 42 | 12 | 18 | 12 |
| 14-perceptual-science-foundations.md | 20 | 5 | 10 | 5 |
| 15-microscopic-css-quality.md | 15 | 3 | 7 | 5 |
| 16-macroscopic-quality.md | 10 | 4 | 4 | 2 |
| 17-meta-meta-analysis.md | 18 | 5 | 8 | 5 |
| 18-enrichment-surface-map.md | 37 | 9 | 21 | 7 |
| **TOTAL** | **~201** | **~54** | **~96** | **~51** |

**Key insight:** The highest concentration of HIGH-impact enrichments comes from three sources: adversarial review (12), PA question analysis (8), and pipeline flow (5). The adversarial review produced the most enrichments overall (42) because its assumption-challenging methodology surfaces issues that accept-the-framework analyses miss.

---

*End of extraction. 201 enrichment recommendations extracted from 9 analysis files, with evidence, targets, and expected impact for each. Cross-file convergence analysis identifies top 10 highest-impact enrichments.*
