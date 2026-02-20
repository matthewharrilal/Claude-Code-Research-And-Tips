# Middle-Tier Bias Audit of PV2-PIPELINE-DIAGRAM.md

**Auditor:** Bias-Auditor (Opus, fresh-eyes)
**Source:** `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (1,354 lines, all read)
**Date:** 2026-02-19
**Critical User Insight:** "Everything we made up to this point has been biased for Middle 4/4, not knowing we want Flagship 4/4."

---

## Executive Summary

The PV2 diagram is **deeply and structurally biased toward Middle-tier success (PA-05 3/4)**, not Flagship success (PA-05 4/4). This is not a surface-level issue -- it pervades the architecture, the cost model, the decision gates, the success criteria, and the experiment design. The bias is so consistent that it appears unintentional: the entire investigation was anchored by Middle's success (4/4 with 8 agents, 100-line input, 35 minutes) and Flagship's failure (1.5/4 with 19 agents, 530-line input), and drew conclusions that OPTIMIZE FOR SIMPLICITY rather than for Flagship quality.

**Bias count: 31 distinct Middle-tier biases identified across 8 audit dimensions.**

The master synthesis verdict -- "Fat Core, one agent, minimal constraints, maximum freedom" -- is the distilled expression of Middle bias. It says: "Middle succeeded with simplicity, so simplicity IS the answer." This ignores that Middle's content (a single research synthesis page) is categorically different from Flagship content (complex multi-section research with 12+ semantic zones, cross-references, data tables, and narrative arcs).

---

## (a) FAT CORE = 1 Agent Plans + Builds -- Middle Assumption?

### VERDICT: YES, STRONG MIDDLE BIAS

**What PV2 says (lines 988-1055):**
Fat Core merges TC planner + builder into a SINGLE Opus agent. "Plans AND builds in 1 pass." 100-line conventions brief. NO handoff = NO Boundary 3 compression.

**Why this is Middle bias:**

1. **Middle's success came from a tight core.** The diagram explicitly cites this: "CD-006 (39/40) used ONE agent. Middle (4/4) had tight core" (line 1043). But Middle built a page with 3-4 zones, ~8-10 mechanisms, 350-500 CSS lines. Flagship needs 16-18 mechanisms, 1000-1500 CSS lines, 12+ semantic zones, and multi-coherence at EVERY boundary.

2. **Context window saturation.** A single Opus agent building Flagship must hold:
   - Content analysis (~200 lines of content understanding)
   - Zone architecture (12+ zones, each with semantic direction)
   - Mechanism deployment (16-18 mechanisms across 5 categories)
   - Transition table (6 channels x 11+ boundaries = 66+ CSS value pairs)
   - Fractal echo table (5 scales x 16-18 mechanism expressions)
   - Component library references (31KB merged-components.css)
   - Typography system (3-zone arc across 12+ sections)
   - Accessibility layer (WCAG 2.1 AA, ~180 CSS lines)
   - Multi-coherence verification at every boundary
   This is 3,000-5,000 lines of active reasoning. The diagram acknowledges "Core agent holds 2,500-4,000 lines. Context degradation risk" (line 1050) but treats it as a minor risk rather than a STRUCTURAL LIMITATION for Flagship complexity.

3. **Self-assessment blindness at Flagship scale.** At Middle scale, an agent can hold its entire composition in working memory and self-assess. At Flagship scale (1000-1500 CSS lines, 12+ zones), the agent wrote CSS 800 lines ago and cannot perceptually verify coherence between Section 2 and Section 11 from memory alone. This is precisely WHY the original Flagship failed -- the builder literally could not perceive its own output quality at scale.

**What Flagship requires instead:**
- Either: Fat Core agent + MANDATORY mid-build render-and-assess cycles (not just Phase 6.5's "observation pause" -- full Playwright verification at Phases 3, 5, and 7)
- Or: Specialized sub-agents for distinct architectural concerns (zone structure agent + typography agent + mechanism deployment agent + coherence binding agent) with a compositional conductor
- The key insight: at Flagship scale, the NUMBER of simultaneous design decisions exceeds single-agent working memory. The answer is not "more input" but "structured cognition" -- breaking the 66+ transition values into manageable chunks.

---

## (b) Conventions Brief ~100 Lines -- Enough for Flagship?

### VERDICT: NO, CRITICALLY INSUFFICIENT FOR FLAGSHIP

**What PV2 says (lines 418-427, 1244-1247):**
~100-line conventions brief with 5 sections: Perception Thresholds | Soul | Spatial Rules | Quality Floor | Creative Authority.

**Why this is Middle bias:**

1. **100 lines encodes Middle complexity.** Middle needs ~8-10 mechanisms, 3-4 zones, 5 boundaries. 100 lines can specify: soul constraints (~20 lines), perception thresholds (~15 lines), spatial rules (~20 lines), quality floor (~15 lines), creative authority (~10 lines), and still have ~20 lines for content-specific guidance. This is EXACTLY the Middle recipe's structure.

2. **Flagship's combinatorial complexity overflows 100 lines.** Flagship needs:
   - 16-18 mechanisms across 5 categories with deployment guidance per category (~40 lines)
   - 11+ zone boundaries with multi-coherence requirements at EACH boundary (~30 lines)
   - 5-scale fractal echo specifications with CSS at each scale (~25 lines)
   - 6-channel transition specifications (chromatic, typographic, spatial, structural, behavioral, material) (~30 lines)
   - Component library adoption guidance (10+ components from 26-component library) (~15 lines)
   - Accessibility requirements (WCAG 2.1 AA, landmark structure, skip links) (~15 lines)
   - Anti-patterns specific to Flagship (sub-perceptual CSS waste, stacked spacing, uniform typography) (~15 lines)
   That is ~170 lines of ESSENTIAL Flagship specification -- before soul constraints, perception thresholds, or creative authority.

3. **The "100 lines" number comes directly from Middle's success.** The diagram says "Middle (100 lines input -> 4/4)" (line 983). The conventions brief length was DERIVED from Middle's working input volume, not from Flagship's actual requirements.

**What Flagship requires instead:**
- ~250-350 line conventions brief that includes Flagship-specific sections:
  - Multi-coherence binding rules (~30 lines)
  - Fractal echo requirements with scale-specific CSS (~25 lines)
  - Per-category mechanism minimums with deployment contexts (~40 lines)
  - Flagship anti-pattern catalog (~20 lines: the specific failures from the 1.5/4 experiment)
- OR: a 100-line brief that REFERENCES external detailed specification documents (maintaining SNR while providing depth-on-demand)

---

## (c) 15 Gates -- Verify Middle-Tier or Flagship-Tier Properties?

### VERDICT: PREDOMINANTLY MIDDLE-TIER VERIFICATION WITH 3 FLAGSHIP ADDITIONS

**What PV2 says (lines 678-730):**
15 binary gates (SC-01 through SC-15). SC-01 through SC-12 are original. SC-13/14/15 are new.

**Analysis of each gate's tier alignment:**

| Gate | What It Checks | Middle? | Flagship? | Gap |
|------|---------------|---------|-----------|-----|
| SC-01 | Container 940-960px | Both | Both | None |
| SC-02 | Soul properties (radius 0, shadow none) | Both | Both | None |
| SC-03 | Font trinity (3 fonts) | Both | Both | None |
| SC-04 | Warm palette (R >= G >= B) | Both | Both | None |
| SC-05 | No pure extremes (#000/#FFF) | Both | Both | None |
| SC-06 | ARIA landmarks >= 3 | MIDDLE | Flagship needs >= 8+ | **Flagship gap** |
| SC-07 | Skip link present | Both | Both | None |
| SC-08 | Component library >= 3 classes | MIDDLE | Flagship needs >= 10 | **Flagship gap** |
| SC-09 | Background delta >= 15 RGB | Both | Both | None |
| SC-10 | Stacked gap <= 108px | Both | Both | None |
| SC-11 | Typography zones >= 2px delta | MIDDLE | Flagship needs 3-zone arc | **Flagship gap** |
| SC-12 | Zone count 2-5 | MIDDLE | Flagship pushes 4-5 consistently | Narrow gap |
| SC-13 | Multi-coherence >= 3 channels | NEW | Flagship-directed | Partial fix |
| SC-14 | Sub-perceptual prevention | NEW | Flagship-directed | Partial fix |
| SC-15 | Border presence >= 1 | MIDDLE | Flagship needs varied border system | **Flagship gap** |

**Specific Middle biases in the gates:**

1. **SC-06: ARIA landmarks >= 3.** Middle pages with 3-4 zones need 3-4 landmarks. Flagship pages with 12+ sections need 8+ landmarks minimum. The threshold is Middle-calibrated.

2. **SC-08: Component library >= 3 classes.** Middle's 3-4 zones might use 3-5 component classes. Flagship with 12+ sections should adopt 10+ from the 26-component library. The threshold is Middle-calibrated (the diagram itself says the Flagship remediation targeted "component library adoption 3/26 -> 10/26").

3. **SC-11: Typography zones >= 2px delta.** This checks that SOME typography variation exists. Flagship requires a specific 3-zone typographic arc with distinct weights, sizes, and letter-spacing across zones. A page with 16px body and 18px headings passes SC-11 but fails Flagship typography.

4. **SC-15: Border presence >= 1.** One border-left passes this gate. Flagship needs a structured border system (3-4 border weights, alternating presence/absence creating rhythm, focal-point borders in accent colors). SC-15 is a floor gate, not a Flagship gate.

5. **MISSING: Fractal echo verification.** No gate checks whether the metaphor pattern appears at all 5 scales. The Handoff Gate (Wave 0.9) checks the TABLE exists, but no post-build gate verifies the BUILT HTML actually implements fractal echo at 5 scales.

6. **MISSING: Mechanism category coverage.** No gate checks that mechanisms span all 5 categories (Spatial, Temporal, Material, Behavioral, Relational). A page with 8 Spatial mechanisms and 0 of everything else passes all gates.

7. **MISSING: Section-level richness variance.** No gate checks that individual sections have distinct visual treatment. A page where all 12 sections have identical padding, identical backgrounds (all passing SC-09 at zone level), and identical typography passes all gates but is perceptually FLAT within zones.

**What Flagship requires instead:**
- SC-06 threshold raised to >= 6 landmarks (or scaled to zone count)
- SC-08 threshold raised to >= 8 component classes
- SC-11 enhanced to check 3-zone typographic arc (not just any 2px delta)
- SC-15 enhanced to check >= 3 distinct border treatments
- NEW SC-16: Fractal echo verification (pattern appears at >= 4 of 5 scales in built HTML)
- NEW SC-17: Mechanism category span (mechanisms present in >= 4 of 5 categories)
- NEW SC-18: Section-level richness variance (within a zone, sections show distinct visual treatment beyond just backgrounds)

---

## (d) The 5 Experiments -- Test Middle Success or Flagship Success?

### VERDICT: ALL 5 EXPERIMENTS ARE MIDDLE-SUCCESS TESTS WITH FLAGSHIP-LEVEL CONTENT

**What PV2 says (lines 438-504):**
5 experiments (A through E) on RESEARCH-SYNTHESIS.md, all evaluated by Mode 4 PA (9 auditors).

**Why this is Middle bias:**

1. **The success criterion is PA-05 >= 3.0/4 everywhere.** (Lines 497-501, 1312-1313, 1345-1348.) 3.0/4 = COMPOSED. The user wants 4/4 = DESIGNED. Every decision gate in the experiment tree uses >= 3.0 as the threshold. If Experiment E (single Opus, no pipeline, $5) hits 3.0/4, the diagram says "STOP. Pipeline is UNNECESSARY." But 3.0/4 is NOT the target -- the user explicitly wants Flagship 4/4.

2. **The decision tree optimizes for CHEAPEST SUFFICIENT, not BEST POSSIBLE.** (Lines 471-503.) The experiments run cheapest-first, and STOP the moment any approach hits >= 3.0. This is a cost-optimization strategy, not a quality-maximization strategy. For Flagship, the correct approach is: run ALL experiments, then compare PA-05 scores to find which approach achieves the HIGHEST score, not which achieves "good enough."

3. **No experiment tests the SPECIFIC conditions that differentiate Flagship from Middle:**
   - Multi-coherence at 10+ boundaries (Middle has 3-4)
   - Fractal echo across 5 scales with 12+ sections (Middle has 3-4 sections)
   - 16+ mechanisms deployed across 5 categories (Middle needs 8-10)
   - Typography arc across 12+ zones (Middle uses 3-4)
   - Component library adoption at 10+ components (Middle uses 3-5)

4. **All experiments use RESEARCH-SYNTHESIS.md.** This is a single content type. The experiments will tell you which APPROACH works for this content, but not whether the approach works for Flagship-tier content complexity in general. Moreover, RESEARCH-SYNTHESIS.md was also the Flagship experiment content -- and the Flagship FAILED. The experiments may be testing whether the same content can hit 3.0/4 with less infrastructure, when the real question is whether it can hit 4.0/4 with BETTER infrastructure.

5. **Experiment E (single Opus, $5) would declare the pipeline unnecessary at 3.0/4.** But if the target is 4/4, the question isn't "Can one Opus agent hit 3.0?" but "Can one Opus agent hit 4.0 consistently on complex content?" 3.0 is Middle's bar, not Flagship's.

**What Flagship requires instead:**
- Success criterion: PA-05 >= 3.5/4 to proceed, targeting 4.0/4
- ALL experiments run (don't stop at first >= 3.0), then compare scores
- Additional experiment: "Flagship complexity test" -- use content with 12+ semantic zones, cross-references, data tables, AND narrative arcs (not just a research synthesis)
- Decision tree revised: "Which approach achieves the HIGHEST PA-05?" not "Which approach clears the bar cheapest?"
- Experiment F: "Structured multi-agent with compositional conductor" -- tests whether STRUCTURED complexity (not just "more agents") outperforms Fat Core on Flagship content

---

## (e) Cost Model -- Optimized for Cheap (Middle) or Quality (Flagship)?

### VERDICT: EXPLICITLY OPTIMIZED FOR CHEAPNESS

**What PV2 says (lines 1262-1295):**
PV2 Full Pipeline: ~$20-60/page. Fat Core: ~$15-40. Single Opus: ~$5-10. "QUESTION NO REPORT ANSWERS: Is compositional richness WORTH $20-60/page?"

**Why this is Middle bias:**

1. **The cost model frames cost as the PRIMARY concern.** Lines 1188-1194 (Risk 6): "No report evaluates whether compositional richness is WORTH this." This frames the pipeline's value as uncertain, pushing toward cheaper approaches. But the user HAS answered this question: they want Flagship 4/4. The cost question is settled by user intent.

2. **Experiments prioritized cheapest-first.** The entire experiment ordering (E first at $5, D second at $15-40, others at $30-50) is a cost-minimization strategy. The cheapest test that "works" (at 3.0) terminates the search. For Flagship, cost is a CONSTRAINT, not an OBJECTIVE -- you spend what's needed to hit 4/4.

3. **Fat Core's cost advantage is cited as evidence.** Lines 1039-1040: Fat Core ~$15-40/page vs pipeline ~$20-60. This cost advantage is presented as a feature. But if Fat Core achieves 3.0/4 and the full pipeline achieves 3.5/4, the extra $20-40 per page is trivially worth it for Flagship quality.

4. **The cost model doesn't include REWORK costs.** If a $15 Fat Core build produces 3.0/4 (COMPOSED, not DESIGNED), and the user wants 4/4, the rework cycle costs another $15-30. The full pipeline at $40-60 that produces 3.5-4.0/4 on first pass may be CHEAPER than two Fat Core iterations.

**What Flagship requires instead:**
- Cost model reframed: "What is the minimum cost to RELIABLY achieve PA-05 >= 3.5/4?"
- Include rework costs in the model (cheap first-build + expensive fix cycles vs. expensive first-build + minimal fixes)
- Remove "Is compositional richness WORTH this?" framing -- user has already decided YES
- Add "cost of NOT achieving Flagship" estimate (pages that ship at 3.0 need manual CSS revision later)

---

## (f) Core Agent Input ~230 Lines -- Middle-Appropriate or Flagship-Appropriate?

### VERDICT: MIDDLE-APPROPRIATE, FLAGSHIP-INSUFFICIENT

**What PV2 says (lines 535-548):**
Builder file set: 8 files, ~1,300 lines total. _build-recipe.md (~200-400), transition table (~80-150), fractal echo table, operational-recipe-template (~300), tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md (FULL 18 mechanisms).

**Note:** The question mentions "~230 lines" but the diagram says ~1,300 lines across 8 files. The conventions brief (Fat Core path) is ~100 lines. The recipe path provides ~1,300 lines. I'll address both.

**100-line conventions brief (Fat Core) -- Middle bias:**
- See section (b) above. 100 lines is calibrated to Middle complexity.

**1,300-line recipe path -- closer to Flagship but still biased:**
1. **The _build-recipe.md is ~200-400 lines.** For Middle (3-4 zones, 8-10 mechanisms), 200 lines suffices. For Flagship (12+ zones, 16-18 mechanisms, 11+ boundaries), the recipe needs ~400-600 lines to specify mechanism deployment at each zone, transition values at each boundary, and fractal echo at each scale. The lower bound (200 lines) is Middle; the upper bound (400) approaches Flagship minimum.

2. **Transition table ~80-150 lines.** For Middle (3-4 boundaries x 6 channels), 80 lines suffices. For Flagship (11+ boundaries x 6 channels), you need 150-200+ lines. The estimate skews Middle.

3. **No Flagship-specific guidance files.** The 8-file set doesn't include:
   - Multi-coherence binding examples (how 3+ channels shift together at a boundary)
   - Flagship anti-pattern catalog (the specific CSS waste patterns from the 1.5/4 failure)
   - Scale-channel interaction matrix (how channels behave differently at different scales)

**What Flagship requires instead:**
- _build-recipe.md: 400-600 lines (not 200-400) for Flagship content complexity
- Transition table: 150-250 lines for 11+ boundaries
- Additional file: Flagship anti-patterns reference (~30 lines of "NEVER do this" with CSS examples)
- Builder input total: ~1,500-1,800 lines for Flagship (vs ~1,300 estimated)
- OR (Fat Core): 250-350 line conventions brief (not 100) with depth-on-demand references

---

## (g) The "Fast Path" (If B Passes, Skip Everything) -- Middle Optimization?

### VERDICT: YES, MIDDLE OPTIMIZATION THAT UNDERMINES FLAGSHIP

**What PV2 says (lines 496-498):**
"E >= 3/4? -> Pipeline unnecessary (highest leverage finding)"
"D >= 3/4? -> Fat Core architecture wins. Codify that."

**Why this is Middle bias:**

1. **The fast path TERMINATES exploration at 3.0/4.** If single Opus (Exp E) achieves 3.0, the diagram says STOP. No further experiments. No investigation of whether the pipeline could achieve 3.5 or 4.0. This is the textbook Middle optimization: "3.0 is good enough, stop spending."

2. **"Pipeline unnecessary" at 3.0 is a Middle conclusion.** For Flagship, 3.0 means COMPOSED, one full tier below DESIGNED. The pipeline might be the difference between 3.0 and 4.0. Declaring it "unnecessary" because a cheap test hit 3.0 forecloses the investigation.

3. **The fast path assumes a MONOTONIC relationship between approach complexity and quality.** It assumes: if simple works, complex is waste. But the evidence doesn't support this for Flagship. CD-006 (the crown jewel at 39/40) used a single Opus agent ON SIMPLE CONTENT. The Flagship content is categorically more complex. What works for CD-006's content may not work for Flagship's content.

4. **Skip logic prevents discovering the OPTIMAL approach.** Maybe Experiment A hits 3.0, Experiment B hits 3.2, Experiment C hits 3.5, and Experiment D (Fat Core with structured gates) hits 3.8. The fast path would stop at A and declare 3.0 victory, missing the 3.8 that was within reach.

**What Flagship requires instead:**
- No fast path. Run ALL experiments.
- Compare scores across approaches to find the MAXIMUM, not the MINIMUM-SUFFICIENT.
- Decision criterion: "Which approach achieves the highest PA-05 on Flagship-complexity content?" not "Which approach clears 3.0 cheapest?"
- If multiple approaches hit >= 3.5, THEN optimize for cost among those.

---

## (h) The Decision Tree -- "PA-05 >= 3.0" Is a Middle Bar

### VERDICT: YES, 3.0 IS EXPLICITLY THE MIDDLE SUCCESS BAR

**What PV2 says (lines 765-783, 1312-1348):**
- SHIP threshold: "ALL PASS + PA-05 >= 3/4" (line 765)
- Decision gates: "PA-05 >= 3.0 -> Pipeline is UNNECESSARY" (line 1312)
- Fix cycle: "PA-05 < 3/4 -> FIX CYCLE" (line 766)

**Why this is Middle bias:**

1. **PA-05 3.0/4 = COMPOSED.** The PA-05 scale is: 1/4 FLAT, 2/4 STYLED, 3/4 COMPOSED, 4/4 DESIGNED. COMPOSED means: "Multiple visual techniques work together coherently." DESIGNED means: "Visual form feels inevitable -- every decision reinforces the whole." The user wants DESIGNED. The pipeline ships at COMPOSED.

2. **The SHIP gate at 3.0 means Flagship pages will routinely ship at COMPOSED.** If the pipeline's SHIP criterion is 3.0, and the builder achieves exactly 3.0, the page ships without further iteration. But the user's expectation is 4.0. Shipping at 3.0 leaves a full tier of quality on the table.

3. **The Convention Escalation Path is "optional."** Lines 796-800: "When PA-05 = exactly 3/4 and the user wants 4/4, the pipeline can OPTIONALLY escalate." This makes Flagship quality an afterthought, not a design target. The escalation path should be AUTOMATIC for Flagship pages, not optional.

4. **The fix cycle targets 3.0, not 3.5+.** The fix cycle (Wave 3) loops until PA-05 >= 3/4 or 3 cycles exhausted. This means the fix cycle is SATISFIED at 3.0. For Flagship, the fix cycle should target >= 3.5/4 and only SHIP at >= 3.5, with an escalation at 3.0-3.4 that involves re-engaging the compositional planning stage (not just applying "top-3 fixes").

**What Flagship requires instead:**
- SHIP threshold: PA-05 >= 3.5/4 (COMPOSED+, approaching DESIGNED)
- Fix cycle target: >= 3.5/4 (not >= 3.0)
- At PA-05 3.0-3.4: AUTOMATIC convention escalation (re-engage TC for metaphor-driven 2nd pass, not optional)
- At PA-05 >= 3.5 but < 4.0: SHIP with notation "Flagship target: review for 4.0 opportunities"
- Decision tree criterion: >= 3.5 for experiments, not >= 3.0
- Experiment success: "Which approach MOST OFTEN achieves >= 3.5?" not "Which approach EVER achieves >= 3.0?"

---

## Additional Biases Not Covered by (a)-(h)

### (i) The "Quality Inversely Correlates with Input Volume" Thesis

**Lines 982-985, 1207-1214:**
"Middle (100 lines -> 4/4). Flagship (530 lines -> 1.5/4). Quality INVERSELY correlates with agent count AND input volume."

**Why this is Middle bias:**
This correlation was observed with N=3 (Middle, Flagship, Remediation) on ONE content type. The causal claim ignores confounds:
- Middle's content was SIMPLER than Flagship's (fewer zones, fewer semantic boundaries)
- Flagship's failure was caused by specific prompt defects (checklist vs recipe, guardrail factory, sub-perceptual CSS waste), not by input volume per se
- Remediation succeeded with ~300 lines on the SAME content that failed with 530 lines, but Remediation had CSS-specific fix recipes, not more of the same kind of input

The correlation is spurious. The real variable is INPUT QUALITY (recipe vs checklist, specific CSS vs generic guidance), not INPUT QUANTITY. Drawing the conclusion "less input = better" from N=3 with confounded variables is a Middle-tier optimization masquerading as an empirical finding.

### (j) "ALWAYS FLAGSHIP" Directive vs Actual Architecture

**Line 7, 32, 157:**
The diagram says "ALWAYS FLAGSHIP" as a directive. But the architecture it describes is NOT Flagship-capable:
- 100-line conventions brief (Middle-calibrated)
- PA-05 >= 3.0 success criterion (Middle bar)
- Cost optimization (cheapest-sufficient)
- Fast path (stop at first 3.0)
- Gate thresholds (Middle-calibrated)

"ALWAYS FLAGSHIP" is aspirational text contradicted by operational specification. The directive says "every page gets maximum intensity" but the architecture delivers Middle intensity with Flagship labeling.

### (k) Build Time Estimates

**Line 384, 661:**
Wave 1 build: 90-150 min. Total pipeline: 160-270 min.

Middle tier model (from MEMORY.md): Build time 70-100 min, CSS 350-500 lines.
Flagship tier model: Build time 240-400 min, CSS 1000-1500 lines.

The PV2 build time estimate (90-150 min) is squarely in the Middle-to-Ceiling range, not the Flagship range. A single Opus agent building 1000-1500 CSS lines with 16-18 mechanisms across 12+ zones needs 150-250 min minimum, potentially more.

### (l) "Trust the Agent, Constrain the Soul" Philosophy

**Lines 1226-1230:**
"Trust the agent, constrain the soul. Verify the output, not the process."

This philosophy works for Middle because Middle's design space is small enough for a single agent to navigate successfully with minimal guidance. For Flagship, the design space is combinatorially larger (16-18 mechanisms x 12+ zones x 6 channels x 5 scales = thousands of possible configurations). "Trust the agent" means trusting the agent to navigate a space that is 10-100x larger than Middle's space, with the same level of guidance. This is the core Middle bias: assuming that what works at Middle scale works at Flagship scale.

### (m) The Comparison Table (Lines 1109-1146)

The comparison table positions Fat Core as SUPERIOR across almost every dimension. But the "PA-05 ceiling" row reveals the bias:
- Master Prompt: 1.5/4 (checklist)
- Original PV2: 3/4 (recipe)
- Updated PV2: 3-4/4 (recipe+WHY)
- Fat Core: 4/4 possible (convention)

"4/4 possible" is aspirational, based on N=0. "3-4/4" for Updated PV2 is also aspirational, based on N=0. The only MEASURED data points are: Master Prompt 1.5/4 (N=1) and Middle 4/4 (N=1, different content, different complexity). The comparison table presents Middle's 4/4 as evidence for Fat Core's "4/4 possible" ceiling, conflating Middle-complexity success with Flagship-complexity potential.

---

## Summary: 31 Middle-Tier Biases

| # | Location | Bias | Severity |
|---|----------|------|----------|
| 1 | Fat Core arch | 1 agent for Flagship complexity | CRITICAL |
| 2 | Fat Core context | 2500-4000 lines treated as minor risk | HIGH |
| 3 | Fat Core self-assessment | No perceptual verification mid-build at Flagship scale | HIGH |
| 4 | Conventions brief | 100 lines calibrated to Middle | CRITICAL |
| 5 | Conventions brief | 5-section structure omits Flagship-specific sections | HIGH |
| 6 | SC-06 threshold | ARIA >= 3 (Middle) vs >= 8 (Flagship) | MODERATE |
| 7 | SC-08 threshold | Components >= 3 (Middle) vs >= 10 (Flagship) | MODERATE |
| 8 | SC-11 threshold | 2px delta (any variation) vs 3-zone arc (Flagship) | MODERATE |
| 9 | SC-15 threshold | 1 border (Middle) vs structured border system (Flagship) | MODERATE |
| 10 | Missing gate | No fractal echo verification in post-build gates | HIGH |
| 11 | Missing gate | No mechanism category coverage gate | MODERATE |
| 12 | Missing gate | No section-level richness variance gate | HIGH |
| 13 | Experiment success | PA-05 >= 3.0 (COMPOSED, not DESIGNED) | CRITICAL |
| 14 | Experiment order | Cheapest-first with early termination | HIGH |
| 15 | Experiment scope | Tests ONE content type, not Flagship complexity range | HIGH |
| 16 | Experiment E | "Pipeline unnecessary" at 3.0 forecloses Flagship investigation | CRITICAL |
| 17 | Decision tree | Every gate uses >= 3.0, not >= 3.5 or 4.0 | CRITICAL |
| 18 | Cost model | Cost as primary concern, not quality | HIGH |
| 19 | Cost model | No rework costs included | MODERATE |
| 20 | Cost model | "Is richness WORTH it?" framing (user already decided) | MODERATE |
| 21 | Cost priority | Cheapest-sufficient, not best-possible | HIGH |
| 22 | Build recipe | 200-400 lines (Middle-Ceiling) vs 400-600 (Flagship) | MODERATE |
| 23 | Transition table | 80-150 lines (Middle) vs 150-250 (Flagship) | MODERATE |
| 24 | SHIP threshold | 3.0/4 ships the page (Middle bar) | CRITICAL |
| 25 | Fix cycle | Targets 3.0, not 3.5+ | HIGH |
| 26 | Convention escalation | "Optional" for Flagship quality (should be automatic) | HIGH |
| 27 | Inverse correlation | N=3 with confounded variables treated as causal law | HIGH |
| 28 | "ALWAYS FLAGSHIP" | Directive contradicted by operational specification | CRITICAL |
| 29 | Build time | 90-150 min (Middle-Ceiling), not 240-400 (Flagship) | MODERATE |
| 30 | "Trust the agent" | Assumes Middle-scale design space at Flagship scale | HIGH |
| 31 | Comparison table | N=0 "4/4 possible" presented as evidence | HIGH |

---

## What Flagship Actually Requires: Corrective Recommendations

### Architecture
1. Fat Core MAY work for Flagship, but needs MANDATORY mid-build verification cycles (Playwright at Phase 3, 5, 7 -- not just Phase 6.5 observation pause)
2. Consider "Fat Core + Specialist Sub-Agents" hybrid: core agent handles 80% of build, specialist agents handle multi-coherence binding and fractal echo verification during build
3. If single-agent, builder must RENDER AND ASSESS at 3 mandatory checkpoints, not just at the end

### Conventions Brief
4. 250-350 lines for Flagship (not 100)
5. Include: multi-coherence binding rules, fractal echo requirements, per-category mechanism minimums, Flagship anti-patterns, scale-channel interaction guidance
6. Or: 100-line brief + 150-line Flagship appendix (depth-on-demand)

### Gates
7. Raise thresholds: SC-06 >= 6, SC-08 >= 8, SC-11 3-zone arc, SC-15 >= 3 border treatments
8. Add gates: SC-16 (fractal echo in HTML), SC-17 (mechanism category span), SC-18 (section-level richness variance)
9. Tier-parameterize ALL gates (one set of thresholds for Middle, one for Flagship)

### Experiments
10. Success criterion: PA-05 >= 3.5/4 (not >= 3.0)
11. Run ALL experiments, compare scores (no early termination)
12. Add Experiment F: structured multi-agent with compositional conductor
13. Test on 2+ content types (one simple, one Flagship-complex)

### Decision Tree
14. SHIP at >= 3.5/4 (not >= 3.0)
15. AUTOMATIC convention escalation at 3.0-3.4 (not optional)
16. Fix cycle targets 3.5+ (not 3.0+)
17. Decision: "Which approach achieves HIGHEST PA-05?" not "Which clears 3.0 cheapest?"

### Cost Model
18. Reframe as "minimum cost to reliably achieve >= 3.5/4"
19. Include rework costs in per-approach estimates
20. Remove "is richness worth it?" framing (user decision already made)

---

## The Root Cause

The PV2 diagram was produced by 50+ Opus agents who analyzed Middle success (4/4) and Flagship failure (1.5/4). They drew the correct conclusion that the Flagship's PROCESS was broken (checklist format, guardrail factory, sub-perceptual CSS waste, compressed handoff). But they drew the incorrect meta-conclusion: "simplicity caused Middle success, complexity caused Flagship failure, therefore simplicity is the answer."

The correct meta-conclusion is: "The RIGHT kind of structure caused Middle success (recipe format, specific CSS values, tight scope). The WRONG kind of structure caused Flagship failure (checklist format, generic guidance, bloated scope). Flagship needs the RIGHT kind of structure at the RIGHT scale -- not less structure."

Middle's success with 100-line input does not prove that 100 lines is optimal for Flagship. It proves that 100 lines is optimal for MIDDLE-COMPLEXITY CONTENT. Flagship content has 3-5x the number of zones, boundaries, mechanisms, and design decisions. It needs 3-5x the structural support -- but the same kind of support (recipe-style, specific CSS, telescope+microscope).

The entire PV2 diagram needs to be re-evaluated with PA-05 >= 3.5/4 as the success criterion and Flagship-complexity content as the test case.
