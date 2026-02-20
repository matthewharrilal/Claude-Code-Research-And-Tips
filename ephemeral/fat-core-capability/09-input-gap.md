# 09 — Fat Core Input Gap: What Compositional Intelligence Does the Core Agent NOT Receive?

**Agent:** gap-mapper
**Task:** #9
**Date:** 2026-02-19

---

## Executive Summary

Fat Core's single builder agent reads approximately **230 lines** of input (original design) or **~300 lines** (enhanced Flagship variant with Options A+C+E):
- conventions brief (~100-170 lines) -- soul constraints, palette, fonts, spacing, border weights, + compositional principles (30 lines, Option A), + self-check protocol (25 lines, Option C), + conviction card (20 lines, Option E)
- tokens.css (~65 usable properties) -- CSS custom properties
- prohibitions summary (~22 rules extracted into brief) -- what NOT to do
- content (variable)
- reference files (tokens, prohibitions, catalog -- trimmed from 2,645 to 1,574 lines per Report 10)

The full compositional intelligence stack across the design system totals approximately **14,600+ lines** of compositional guidance (see complete inventory below). Under the original design, the builder receives **~4% (~230 lines)**. Under the enhanced Flagship variant, with trimmed reference files included, the builder receives **~12% (~1,744 lines)** -- still an 8.4:1 compression ratio.

**Original compression ratio: ~63:1 (230 of 14,600)**
**Enhanced Flagship variant: ~8.4:1 (1,744 of 14,600)**

But not all lost intelligence matters equally. This report maps every piece and assesses whether Opus can compensate from inherent knowledge.

**NOTE:** The PV2 Flagship Variant (updated 2026-02-19) recommends the enhanced configuration -- conventions brief ~170 lines + trimmed reference files 1,574 lines. The analysis below uses the ORIGINAL ~230-line input as baseline, with annotations where the enhanced variant closes specific gaps.

---

## Method

I read every file in the compositional intelligence stack (verified line counts 2026-02-19):

**Layer 1 -- Identity (419 lines)**
1. `prohibitions.md` (419 lines) -- 22 prohibitions with evidence chains (PARTIALLY REACHES as ~22-line summary)

**Layer 2 -- Vocabulary (183 lines)**
2. `tokens.css` (183 lines) -- CSS custom properties (REACHES BUILDER)

**Layer 3 -- Grammar (2,850 lines)**
3. `mechanism-catalog.md` (1,218 lines) -- 18 mechanisms + impact profiles + application modes + transition grammar + restraint protocol + scales
4. `compositional-rules.md` (527 lines) -- 11 grammar rules (nesting, rhythm, zones, density)
5. `border-system.md` (658 lines) -- 3-category border encoding
6. `mechanism-combinations.md` (447 lines) -- compatible/incompatible pairings

**Layer 4 -- Components (3,295 lines)**
7. `components.css` (1,195 lines) -- merged CSS
8. `components-cd-tt.css` (666 lines) -- CD + TT components
9. `components-dd-od.css` (555 lines) -- DD + OD components
10. `component-inventory.md` (879 lines) -- confidence levels

**Layer 5 -- Case Studies (5,120 lines)**
11. 13 case study files (4,579 lines total) -- process proofs with tension narratives
12. `case-studies/README.md` (541 lines) -- Jazz Real Book methodology

**Layer 6 -- Guidelines (1,137 lines)**
13. `semantic-rules.md` (529 lines) -- 7 semantic decision rules
14. `usage-criteria.md` (337 lines) -- when to use what
15. `responsive-strategy.md` (271 lines) -- 768px breakpoint

**Skills (2,779 lines)**
16. TC skill `SKILL.md` (1,932 lines) -- full tension-composition pipeline
17. PA skill `SKILL.md` (847 lines) -- perceptual auditing questions

**Research (4,104 lines)**
18. R1-R5 research files (3,721 lines) -- 337 findings
19. `RESEARCH-SYNTHESIS.md` (383 lines) -- cross-research unified insights

**GRAND TOTAL: ~19,887 lines**
**Unique compositional intelligence (excluding pure reference/research): ~14,600 lines**

For each piece of intelligence, I assessed: REACHES BUILDER, PARTIALLY REACHES, or LOST.

---

## Complete Intelligence Map

### CATEGORY 1: IDENTITY CONSTRAINTS (Prohibitions)

| Intelligence Item | Lines in Source | Fat Core Input | Status | Opus Compensation |
|---|---|---|---|---|
| 8 absolute prohibitions (border-radius:0, box-shadow:none, no gradients, etc.) | 88 lines | ~8-line summary | PARTIALLY REACHES | HIGH -- Opus can memorize 8 rules from summary |
| 14 conditional prohibitions (no 2px borders, no cool grays, etc.) | 186 lines | ~14-line summary | PARTIALLY REACHES | MEDIUM -- rules present but EVIDENCE CHAINS lost |
| 2 meta-prohibitions (no justification without provenance, no patterns without tension) | 46 lines | ~2 lines or omitted | LIKELY LOST | LOW -- these are process rules, not CSS rules |
| Prohibition evidence chains (WHY each rule exists) | ~300 lines | 0 lines | LOST | N/A -- evidence chains are pedagogical, not functional |
| Measurement protocols (binary tests for P21 void, P22 concentration) | ~60 lines | 0 lines | LOST | LOW -- without these, builder can't self-verify spatial distribution |
| Content density floor rules (min content per zone, zone count ceiling) | ~80 lines | 0 lines | LOST | MEDIUM -- Opus has general sense of "don't make empty zones" |

**Subtotal:** 760 source lines. ~24 lines reach builder (~3.2%). But the 8+14 rules DO reach as compact summary. Evidence chains and measurement protocols are LOST.

**DOES IT MATTER?** The rule summaries are sufficient for COMPLIANCE. What's lost is the WHY (pedagogical) and the HOW-TO-VERIFY (measurement). For Fat Core, compliance is what matters -- verdict: **MODERATE IMPACT**.

---

### CATEGORY 2: VOCABULARY (Tokens)

| Intelligence Item | Lines in Source | Fat Core Input | Status | Opus Compensation |
|---|---|---|---|---|
| Full :root block with all CSS custom properties | 161 lines | ~65 lines | REACHES | N/A -- tokens are input |
| Soul constraints as CSS (--border-radius:0, --box-shadow:none) | 3 lines | Yes | REACHES | N/A |
| Color palette (8 primary + 5 accent + 8 background + 3 zone + 4 text hierarchy) | ~50 lines | Yes | REACHES | N/A |
| Typography trinity (3 font families + 2 type scales) | ~25 lines | Yes | REACHES | N/A |
| Spacing scale (14 values + 3 semantic aliases + 2 max constraints) | ~30 lines | Yes | REACHES | N/A |
| Mutability classification (IMMUTABLE/MUTABLE/AVAILABLE) | ~20 lines in comments | Unclear | PARTIALLY REACHES | LOW -- builder doesn't know which tokens are flexible |
| Spacing maximum rules (--space-max-zone: 96px, stacking prohibition) | 8 lines | Likely omitted | LOST | LOW -- critical for avoiding void |

**Subtotal:** 183 source lines. ~65 lines reach builder (35.5%). Tokens themselves are well-represented.

**DOES IT MATTER?** Tokens are the BEST-transferred category. The gap is in mutability classification (which tokens can vary) and spacing maxima (which prevent void accumulation). Verdict: **LOW IMPACT** for token presence, **MODERATE** for spacing maxima.

---

### CATEGORY 3: MECHANISM CATALOG (18 Mechanisms)

This is the **largest single gap**. The mechanism catalog is 1,218 lines. The builder receives **0 lines** from it.

| Intelligence Item | Lines | Status | Opus Compensation |
|---|---|---|---|
| **Mechanism definitions** (18 mechanisms, CSS patterns, cross-file frequency) | ~400 lines | LOST | **HIGH** -- Opus inherently knows border-weight gradient, 2-zone layout, code blocks, etc. |
| **Impact profiles** (perceptual effectiveness: HIGH/MEDIUM/LOW for each) | ~36 lines | LOST | **LOW** -- this is project-specific empirical data Opus cannot derive |
| **Application modes** (Progressive vs Discrete for border-weight; semantic mappings for zones) | ~100 lines | LOST | **LOW** -- these are nuanced deployment strategies |
| **Per-category taxonomy** (5 families: Spatial, Hierarchy, Component, Depth, Structure) | ~20 lines | LOST | **MEDIUM** -- Opus can classify mechanisms but won't know the 5-family structure |
| **Tier-mechanism mapping** (Middle: content-structure; Ceiling: metaphor-driven multi-channel) | ~50 lines | LOST | **MEDIUM** -- Opus knows tiers conceptually but not the selection logic distinction |
| **Combination rules** (compatible/incompatible pairs) | ~30 lines | LOST | **MEDIUM** -- Opus has general design sense |
| **Mechanism selection flow** (7-question decision tree) | ~25 lines | LOST | **MEDIUM** -- Opus can derive similar logic |
| **Transition grammar** (3 types: Hard Cut, Spacing Shift, Checkpoint) | ~80 lines | LOST | **LOW** -- this is the CRITICAL gap that prevents void |
| **Restraint protocol** (density cap per viewport, distribution requirement, restraint ratio) | ~60 lines | LOST | **LOW** -- without this, mechanisms concentrate in first third |
| **Scales section** (5 named scales, fractal coherence, tier-to-scale mapping) | ~65 lines | LOST | **LOW** -- Opus doesn't inherently know the 5-zoom-level model |
| **Provenance & family resemblance** (why pages look similar = vocabulary, not copying) | ~30 lines | LOST | N/A -- pedagogical framing |

**Subtotal:** 1,218 source lines. 0 lines reach builder (0%).

**DOES IT MATTER?** This is the crux question. Breaking it down:

**Opus CAN compensate for:**
- Basic mechanism CSS patterns (border-weight, zone backgrounds, code blocks, dark headers) -- these are standard CSS techniques Opus knows from training
- Basic combination sense (don't put conflicting patterns together)
- General typography hierarchy

**Opus CANNOT compensate for:**
- **Transition grammar** -- knowing that zone boundaries need HARD CUT / SPACING SHIFT / CHECKPOINT is project-specific. Without this, Opus uses empty space (the void failure).
- **Restraint protocol** -- knowing max 4 mechanisms per viewport, that every third of the page needs 2+ mechanisms. Without this, mechanisms cluster in the header.
- **Impact profiles** -- knowing border-weight is HIGH impact but spacing compression is LOW impact. This guides allocation of CSS effort.
- **Application modes** -- knowing when to use Progressive vs Discrete border-weight. This is the difference between semantic richness and mechanical repetition.
- **Per-category minimums** -- the 5-family taxonomy that ensures vocabulary breadth. Without this, Opus defaults to its training distribution (heavy on typography, light on spatial/depth).
- **Scale model** -- 5 zoom levels where design direction should be visible. Without this, Opus designs at Page scale only.

**Verdict: HIGH IMPACT.** The mechanism catalog is the single largest intelligence loss. Basic mechanisms Opus already knows; deployment intelligence it does not.

---

### CATEGORY 4: COMPOSITIONAL GRAMMAR RULES (11 Rules)

| Intelligence Item | Lines | Status | Opus Compensation |
|---|---|---|---|
| N1-N4: Nesting rules (callouts in zones not callouts, max depth 2) | ~70 lines | LOST | HIGH -- Opus knows not to deeply nest |
| R1-R4: Spacing rhythm (dense/sparse alternation, max 3 consecutive dense, breathing triggers, inside:between ratio 1:3-4) | ~70 lines | LOST | MEDIUM -- Opus has general rhythm sense but not the 1:3 ratio |
| Z1-Z3: Background zone rules (color = content type shift, max 2-3 zone changes per viewport, transition weight) | ~60 lines | LOST | MEDIUM -- Opus knows background differentiation |
| D1-D2: Density limits (max 3-4 components per viewport, overwhelm triggers) | ~40 lines | LOST | MEDIUM -- Opus has general density sense |

**Subtotal:** ~240 source lines. 0 lines reach builder (0%).

**DOES IT MATTER?** These rules codify RHYTHM -- the inhale/exhale pattern that prevents monotony. Opus has intuitive rhythm sense from training on well-designed websites. However, the specific ratios (inside:between = 1:3, max 3 dense consecutive, max 2-3 zone changes per viewport) are calibrated to THIS design system's personality. Without them, Opus will produce rhythm, but not necessarily KortAI-specific rhythm.

**Verdict: MODERATE IMPACT.** Opus compensates partially; the calibrated ratios are lost.

---

### CATEGORY 5: SEMANTIC DECISION RULES (7 Gaps)

| Intelligence Item | Lines | Status | Opus Compensation |
|---|---|---|---|
| Gap 1: Info vs Note callout selection (section-level vs inline) | ~50 lines | LOST | LOW -- project-specific semantic distinction |
| Gap 2: Inline vs block code threshold (1 line / 50 chars) | ~40 lines | LOST | HIGH -- standard coding practice |
| Gap 3: Table styling (clean, no zebra-striping) | ~45 lines | LOST | MEDIUM -- Opus may default to zebra |
| Gap 4: Breathing zone triggers (position, content, spacing) | ~50 lines | LOST | MEDIUM -- Opus has general sense |
| Gap 5: 5 callout semantic colors (blue info, green tip, amber essence, red gotcha, purple challenge) | ~50 lines | LOST | LOW -- project-specific color semantics |
| Gap 6: Content density floors (min content per zone, zone count ceiling by word count) | ~80 lines | LOST | LOW -- critical void prevention |
| Gap 7: Content-form fit (min content for bento/progressive disclosure/zone) | ~80 lines | LOST | LOW -- critical over-formation prevention |
| Semantic value framework (3-question test: WHAT varies, WHY, WHY THESE VALUES) | ~90 lines | LOST | LOW -- this is the semantic justification methodology |

**Subtotal:** ~529 source lines. 0 lines reach builder (0%).

**DOES IT MATTER?** Gaps 6 and 7 are CRITICAL. These are the rules that prevent the flagship experiment's catastrophic failure: zones with insufficient content to fill them. Gap 5 (callout colors) matters for semantic correctness. The 3-question test (semantic value framework) matters for whether varying CSS values have MEANING or are arbitrary.

**Verdict: HIGH IMPACT** for Gaps 6-7 and semantic framework. MODERATE for others.

---

### CATEGORY 6: CASE STUDIES (9 Studies + Methodology)

| Intelligence Item | Lines | Status | Opus Compensation |
|---|---|---|---|
| Jazz Real Book methodology (541-line README) | 541 lines | LOST | N/A -- pedagogical framing |
| Anti-prescription template (471 lines) | 471 lines | LOST | N/A -- methodology |
| 9 case studies showing tension -> metaphor -> layout process | ~3,000 lines | LOST | N/A -- process documentation |
| Divergence methodology (5-dimension comparison) | ~60 lines | LOST | N/A -- quality assurance |

**Subtotal:** ~4,072 source lines. 0 lines reach builder (0%).

**DOES IT MATTER?** Case studies serve TWO functions:
1. **Process proof** -- showing HOW tension analysis works (pedagogical)
2. **Usage examples** -- showing mechanisms IN CONTEXT (practical)

For Fat Core, the pedagogical function is irrelevant (single agent doesn't need to learn the pipeline). The practical function is PARTIALLY relevant: seeing how border-weight was used for confidence encoding helps, but Opus can derive similar applications from inherent knowledge.

**Verdict: LOW IMPACT** for Fat Core specifically. The case studies matter for the multi-agent pipeline (teaching builders) but the Fat Core agent doesn't need process training.

---

### CATEGORY 7: TENSION-COMPOSITION PIPELINE (1,878 Lines)

| Intelligence Item | Lines | Status | Opus Compensation |
|---|---|---|---|
| Phase 0: Content assessment + tier routing | ~160 lines | LOST | MEDIUM -- Opus can assess content |
| Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + 5 extended + 5 conditional) | ~80 lines | LOST | LOW -- the 14-axis framework is project-specific |
| Phase 2: Tension derivation (richness formula, genuine vs cosmetic, BECAUSE test) | ~200 lines | LOST | LOW -- multiplicative richness formula is novel |
| Phase 3: Metaphor collapse (structural overlap, search query, domain menu, candidate scoring) | ~350 lines | LOST | LOW -- this is the creative methodology |
| Phase 3.5: Perceptual risk/cost assessment | ~120 lines | LOST | LOW -- empirical risk model |
| Phase 4: Mechanism deployment per tier | ~200 lines | LOST | MEDIUM -- Opus deploys mechanisms intuitively |
| Phase 5: Implementation (CSS generation, token application) | ~150 lines | LOST | HIGH -- Opus knows CSS |
| Phase 6: Verification gates | ~150 lines | LOST | MEDIUM -- partial overlap with conventions |
| Density pattern library (CRESCENDO/F-PATTERN/BENTO/PULSE) | ~40 lines | LOST | LOW -- named patterns with specific definitions |
| KortAI personality profile (8-axis spectrum) | ~15 lines | LOST | LOW -- quantified personality is project-specific |
| Domain search menu (10 compatible metaphor families for angular/flat systems) | ~20 lines | LOST | MEDIUM -- Opus has domain knowledge |
| Incompatible metaphor families (organic, liquid, atmospheric, textile, musical) | ~10 lines | LOST | MEDIUM -- Opus can reason about compatibility |

**Subtotal:** 1,878 source lines. 0 lines reach builder (0%).

**DOES IT MATTER?** The TC pipeline is the entire CREATIVE METHODOLOGY for Ceiling+ pages. For Middle-tier (which skips Phases 1-3), most of this is irrelevant. For Ceiling+, the loss is enormous -- but Opus at Ceiling tier would need to independently derive metaphor anyway, so the question is whether the pipeline's STRUCTURE improves Opus's output vs. Opus's inherent creative process.

Key intelligence that matters regardless of tier:
- **Density patterns** (CRESCENDO/F-PATTERN/BENTO/PULSE) -- page-scale spatial organization
- **Personality profile** -- quantified design system character
- **Perceptual risk assessment** -- prevents fragile metaphors
- **Incompatible families** -- prevents soul violations from metaphor choice

**Verdict: HIGH IMPACT for Ceiling+.** LOW-MODERATE for Middle tier.

---

## Aggregate Gap Analysis

### What REACHES the Builder -- ORIGINAL (~230 lines, ~1.6% of grand total)

1. Soul constraints (border-radius:0, box-shadow:none, no gradients) -- COMPACT SUMMARY
2. Color palette (8 primary colors) -- EXACT VALUES
3. Typography trinity (3 font families) -- EXACT VALUES
4. Spacing scale (14 values) -- EXACT VALUES
5. Border weight categories (4px/3px/1px) -- EXACT VALUES
6. Prohibition rules (22 as compact list) -- RULE TEXT WITHOUT EVIDENCE

### What REACHES the Builder -- ENHANCED Flagship Variant (~1,744 lines, ~12%)

All of the above PLUS:
7. Compositional principles (30 lines, Option A) -- spatial confidence, restraint, component texture, transition musicality, semantic density
8. Self-check protocol (25 lines, Option C) -- 5 circuit-breaker checkpoints during build
9. Conviction card (20 lines, Option E) -- 3 design convictions the agent carries through
10. Trimmed reference files (1,574 lines per Report 10) -- partial mechanism catalog, tokens, components

The enhanced variant CLOSES several critical gaps: compositional principles encode restraint and transition intelligence in compressed form; self-check protocol provides mid-build spatial verification; trimmed reference files provide mechanism definitions. However, it does NOT provide: transition grammar specifics (3 types), content density floors, content-form fit rules, application modes, or the scale model. The CRITICAL 444-line gap below is reduced to approximately **~250-300 lines** under the enhanced variant.

### What is LOST (~5,570+ lines under original, ~4,056+ under enhanced)

**CRITICAL LOSSES (would directly prevent known failures):**

| Lost Intelligence | Lines | Known Failure Prevented |
|---|---|---|
| Transition grammar (3 types) | 80 | Flagship void (210-276px empty gaps between zones) |
| Restraint protocol (density cap, distribution) | 60 | Flagship front-loading (all interest in first third) |
| Content density floors (min content per zone) | 80 | Flagship empty zones (zones declared for 1-2 paragraphs) |
| Content-form fit rules | 80 | Flagship over-formation (bento grid for 2 items) |
| Spacing maxima (96px cap, stacking prohibition) | 8 | Flagship stacked spacing (192px+ voids) |
| Impact profiles (HIGH/MEDIUM/LOW per mechanism) | 36 | CSS budget misallocation (22% on imperceptible micro-typography) |
| Application modes (Progressive vs Discrete) | 100 | Mechanical repetition (same treatment on all h3s) |
| **SUBTOTAL: CRITICAL** | **444** | |

**SIGNIFICANT LOSSES (improve quality but Opus partially compensates):**

| Lost Intelligence | Lines | Quality Dimension Affected |
|---|---|---|
| Per-category taxonomy (5 families) | 20 | Vocabulary breadth |
| Scale model (5 zoom levels) | 65 | Fractal coherence |
| Spacing rhythm ratios (1:3 inside:between) | 70 | KortAI-specific rhythm calibration |
| Zone background rules (max 2-3 changes per viewport) | 60 | Visual harmony |
| Density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) | 40 | Page-scale spatial strategy |
| Callout semantic colors (5 types) | 50 | Semantic correctness |
| Semantic value framework (3-question test) | 90 | Value justification methodology |
| **SUBTOTAL: SIGNIFICANT** | **395** | |

**LOW-IMPACT LOSSES (pedagogical/process, Opus compensates well):**

| Lost Intelligence | Lines | Why Low Impact for Fat Core |
|---|---|---|
| Case studies + methodology | ~4,072 | Process training irrelevant for single agent |
| Evidence chains for prohibitions | ~300 | WHY doesn't change WHAT for compliance |
| TC pipeline (Phases 1-3 creative methodology) | ~630 | Opus has inherent creative process |
| Provenance/family resemblance framing | ~30 | Pedagogical |
| Anti-gravity mechanisms (R1-R6) | ~200 | Multi-agent coordination concern |
| **SUBTOTAL: LOW** | **~5,232** | |

---

## Key Finding: The 444-Line Critical Gap

If the Fat Core conventions brief (~100 lines) were expanded by approximately **444 lines** of critical intelligence, it would contain the specific rules that prevent EVERY known failure mode from the flagship experiment:

1. **Transition grammar** (80 lines) -- prevents void between zones
2. **Restraint protocol** (60 lines) -- prevents front-loading
3. **Content density floors** (80 lines) -- prevents empty zones
4. **Content-form fit** (80 lines) -- prevents over-formation
5. **Spacing maxima** (8 lines) -- prevents stacked void
6. **Impact profiles** (36 lines) -- prevents CSS budget waste
7. **Application modes** (100 lines) -- prevents mechanical repetition

This would bring the builder's input from ~230 to ~674 lines -- a 2.9x increase that captures the CRITICAL gap while leaving pedagogical/process content out.

---

## Does What's Lost MATTER for 4/4?

### Assessment by PA-05 Dimension

**Spatial Confidence (PA-05 dimension 1):**
- LOST: Transition grammar, spacing maxima, density floors, restraint protocol
- Opus compensation: LOW -- these are the exact rules the flagship LACKED and Opus did NOT compensate
- **Verdict: CRITICAL GAP**

**Mechanism Vocabulary (PA-05 dimension 2):**
- LOST: 18 mechanism definitions, per-category taxonomy, impact profiles
- Opus compensation: HIGH for basic mechanisms (Opus knows border-weight, zone backgrounds, code blocks) but LOW for deployment strategy
- **Verdict: MODERATE GAP** -- Opus has the tools, lacks the playbook

**Compositional Coherence (PA-05 dimension 3):**
- LOST: Scale model, multi-channel encoding logic, fractal coherence requirements
- Opus compensation: MEDIUM -- Opus can create coherent designs but may not achieve the specific 5-scale fractal depth
- **Verdict: MODERATE-HIGH GAP at Ceiling+, LOW at Middle**

**Semantic Justification (PA-05 dimension 4):**
- LOST: Semantic value framework, application modes, content-form fit
- Opus compensation: MEDIUM -- Opus makes semantic choices but may not achieve the specific RATIO justification methodology
- **Verdict: MODERATE GAP**

### Bottom Line

**For Middle tier (the pragmatic target):**
The critical 444-line gap matters more than the other ~5,200 lines. Middle tier doesn't need metaphor derivation, case study methodology, or multi-agent coordination. It needs:
- Transition grammar (HOW to handle zone boundaries)
- Content density floors (WHEN a zone has enough content)
- Spacing maxima (WHAT prevents void accumulation)
- Basic mechanism deployment guidance (WHICH mechanisms for WHICH content)

With these additions, Opus's inherent design knowledge likely bridges the remaining gaps.

**For Ceiling+ tier:**
The full ~5,800 lines become more relevant. The TC pipeline's creative methodology, scale model, multi-channel coherence logic, and case studies all contribute. But even here, the 444-line critical gap is the highest-leverage addition.

**Compression Assessment:**
- Original design: ~63:1 compression (~230 of ~14,600 lines)
- Enhanced Flagship variant: ~8.4:1 compression (~1,744 of ~14,600 lines)
- Enhanced + critical gap fix: ~5.6:1 compression (~2,188 of ~14,600 lines, closing remaining ~250-300 lines)
- Ideal for Middle: ~10:1 compression (~1,460 lines, CRITICAL + SIGNIFICANT)
- For Ceiling+: ~5:1 compression (~2,900 lines) approaches context window limits

The question is not "can Fat Core produce 4/4 with ~230 lines?" (answer: probably not for Ceiling+, possibly for Middle). The question is "what's the minimum addition that crosses the threshold?"

Under the **original** design, the answer is the 444-line critical gap (brings input to ~674 lines).
Under the **enhanced** Flagship variant, most of the critical gap is partially addressed by Options A+C+E and trimmed reference files -- but transition grammar specifics, content density floors, and application modes remain absent. The residual critical gap is **~250-300 lines**.

---

## Appendix A: Complete Intelligence Flow Diagram (Original ~230-line Design)

```
FULL DESIGN SYSTEM (~14,600 lines of compositional intelligence)
│
├── REACHES BUILDER (~230 lines, 1.6%)
│   ├── Soul constraints (8 rules, compact)
│   ├── Color palette (8 values, exact)
│   ├── Font families (3, exact)
│   ├── Spacing scale (14 values, exact)
│   ├── Border weights (3 categories, exact)
│   └── Prohibition rules (22, text only)
│
├── CRITICAL GAP (~444 lines, 3.0%) ← HIGHEST LEVERAGE ADDITION
│   ├── Transition grammar (3 types, 80 lines)
│   ├── Restraint protocol (caps + distribution, 60 lines)
│   ├── Content density floors (min per zone, 80 lines)
│   ├── Content-form fit (min for each form treatment, 80 lines)
│   ├── Spacing maxima (96px cap, 8 lines)
│   ├── Impact profiles (HIGH/MED/LOW, 36 lines)
│   └── Application modes (Progressive/Discrete, 100 lines)
│
├── SIGNIFICANT GAP (~395 lines, 2.7%)
│   ├── Per-category taxonomy (5 families)
│   ├── Scale model (5 zoom levels)
│   ├── Spacing rhythm ratios (inside:between)
│   ├── Zone background rules
│   ├── Density patterns (4 named patterns)
│   ├── Callout semantic colors
│   └── Semantic value framework
│
└── LOW-IMPACT GAP (~13,531 lines, 92.7%)
    ├── Case studies + methodology (~5,120)
    ├── Components CSS (~3,295)
    ├── Research files (~4,104)
    ├── TC pipeline (~1,932)
    ├── PA skill (~847)
    ├── Evidence chains (~300)
    ├── Anti-gravity mechanisms (~200)
    └── Pedagogical framing (~30)
```

## Appendix B: Enhanced Flagship Variant Flow Diagram (~1,744 lines)

```
FULL DESIGN SYSTEM (~14,600 lines)
│
├── REACHES BUILDER (~1,744 lines, 12%)
│   ├── Conventions brief (~170 lines)
│   │   ├── Soul constraints + palette + fonts + spacing (original ~100)
│   │   ├── Option A: Compositional principles (+30 lines)
│   │   ├── Option C: Self-check protocol (+25 lines)
│   │   └── Option E: Conviction card (+20 lines)
│   └── Trimmed reference files (~1,574 lines per Report 10)
│       ├── tokens.css (partial)
│       ├── prohibitions.md (partial)
│       └── mechanism-catalog.md (partial)
│
├── RESIDUAL CRITICAL GAP (~250-300 lines, ~2%)
│   ├── Transition grammar specifics (Hard Cut / Spacing Shift / Checkpoint)
│   ├── Content density floor rules (min content per zone)
│   ├── Content-form fit rules (min content for bento/grid/disclosure)
│   ├── Application modes detail (Progressive vs Discrete deployment)
│   └── Spacing stacking prohibition (total gap measurement)
│
├── PARTIALLY ADDRESSED BY OPTIONS A+C+E
│   ├── Restraint → encoded in Option A "restraint as strength" principle
│   ├── Spatial confidence → encoded in Option A "spatial confidence" principle
│   ├── Mid-build verification → encoded in Option C self-check protocol
│   └── Impact profiles → partially encoded in trimmed catalog
│
└── REMAINING LOW-IMPACT GAP (~12,556 lines, ~86%)
    ├── Full case studies + methodology
    ├── Full components CSS
    ├── Full research corpus
    ├── TC pipeline creative methodology
    ├── PA skill questions (handled by separate PA auditors)
    └── Pedagogical/process documentation
```

**Summary:**
- The 1.6% that reaches the builder (original) tells it WHAT to use.
- The enhanced 12% tells it WHAT + partial HOW + WHY (via Options A+C+E).
- The 3.0% critical gap tells it HOW to deploy (transition grammar, density floors).
- The 2.7% significant gap tells it WHY to choose (semantic justification).
- The 86-93% low-impact gap teaches PROCESS of derivation.

For a single Opus agent with inherent design knowledge, the PROCESS training is largely redundant. The HOW-TO-DEPLOY intelligence is the bottleneck. The enhanced Flagship variant reduces this bottleneck from ~444 lines to ~250-300 lines -- a 40% improvement -- but does NOT eliminate it. The three specific gaps that remain (transition grammar, content density floors, content-form fit) are exactly the rules that prevent the flagship experiment's catastrophic void failure.
