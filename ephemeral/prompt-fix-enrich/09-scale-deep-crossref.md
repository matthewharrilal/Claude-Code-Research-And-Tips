# 09: Ultra-Deep Scale Research Cross-Reference

**Agent:** scale-deep-crossref
**Date:** 2026-02-17
**Method:** Line-by-line audit of ALL 6 scale exploration reports + invocation guide (15-scale-channel-invocation.md) against the enriched master execution prompt (10-ENRICHED-MASTER-EXECUTION-PROMPT.md)
**Total source material:** ~4,800 lines across 7 files

---

## METHODOLOGY

For every finding, formula, principle, threshold, or concept across all scale research files, I:
1. Quote the finding (exact or close paraphrase)
2. State whether it is IN the prompt (with rule ID + section) or MISSING
3. If missing, classify: CRITICAL / IMPORTANT / NICE-TO-HAVE
4. If CRITICAL or IMPORTANT, provide exact insertable text + placement

---

## FILE 1: 01-beyond-five-scales.md (405 lines)

### Finding 1.1: Spatial axis is exhausted at 5 scales
**Source:** "The five existing scales already cover 95-98% of what can be achieved through spatial zoom." (line 269)
**Status:** IN PROMPT -- A3 (line 45): "Five scales is the mathematical ceiling"
**Coverage:** FULL

### Finding 1.2: Scale 6 (Glyph) yields ~0.5-1% richness at EXTREME cost
**Source:** "Richness gain: ~0.5-1%. ... Reproducibility cost: EXTREME." (lines 50-58)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- The prompt's "NEVER target 6+ scales" (A3, line 45) implicitly covers this. No action needed.

### Finding 1.3: Scale 7 (Temporal) yields ~2-4% but is INVISIBLE to static audit
**Source:** "Richness gain: ~2-4%. ... Would a PA auditor notice this in a cold-look screenshot? NO." (lines 91-106)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Current system produces static HTML. Temporal coherence is premature. The prompt correctly excludes animation-related rules.

### Finding 1.4: Scale 8 (Cross-Page) yields ~3-5% but requires process change
**Source:** "Richness gain: ~3-5%. ... Demands coordination that the current per-page pipeline does not support." (lines 143-148)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Flagship is a single-page experiment. Cross-page relevance is zero for this prompt.

### Finding 1.5: Scale 9 (State) yields ~2-3% and reuses existing mechanisms
**Source:** "Richness gain: ~2-3% ... This scale is surprisingly TRACTABLE because it reuses existing mechanisms." (lines 184-192)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- The flagship page is static HTML. Hover/state coherence could improve quality but is not in scope.

### Finding 1.6: Scale 10 (Semantic Density) is the strongest candidate for promotion
**Source:** "~3-5% gain at MODERATE cost, VISIBLE to PA. Highest ROI." (line 277) and "The NUMBER of mechanisms deployed on any element is proportional to that element's semantic importance." (line 224)
**Status:** PARTIALLY IN PROMPT -- C-07 in 15-scale-channel-invocation.md captures this: "The most important element on the page must use MORE mechanisms than any supplementary element." This concept is also embedded in the prompt's mechanism density rules (C-03, C-04) and signal-to-silence (C-14).
**However:** The prompt does NOT have an explicit "semantic density proportionality" rule requiring mechanism count to track content importance.
**Classification:** IMPORTANT

**INSERTABLE TEXT (for Section B3, after C-18):**
```
C-19. Semantic density proportionality: the single most important content block MUST use
      more mechanisms than any supplementary content block. Critical > Standard > Supplementary.
      Verify: identify most-important and least-important elements; count mechanisms on each.
      Most-important > least-important = PASS.
```
**Placement:** Section B3 COMPOSITIONAL, after line 188 (C-18).

### Finding 1.7: The "5 + 1" model (5 spatial scales + Intentionality axis)
**Source:** "Instead of adding a 6th scale, the model should be restructured... SPATIAL SCALES + INTENTIONAL AXIS" (lines 220-231)
**Status:** IN PROMPT -- Section A5 COMPOSITIONAL FLUENCY captures the interaction types. A8 READER JOURNEY captures the arc. C-15 captures intentionality dimensions (self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation).
**Coverage:** FULL -- The 6 intentionality dimensions from showcase archaeology (self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation, provenance threading) map to C-15's 6 dimensions.

### Finding 1.8: Non-spatial scales are mostly INDEPENDENT (richness stacks additively)
**Source:** "The non-spatial scales are mostly INDEPENDENT of each other, meaning their richness gains stack additively" (line 401)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Theoretical framing. No operational impact for a single-page build.

### Finding 1.9: Reproducibility cliff at Scale 5+
**Source:** "Scale 6 (Glyph) requires manual craft (EXTREME cost)" (line 310)
**Status:** IN PROMPT -- A3 (line 45): "NEVER target 6+ scales"
**Coverage:** FULL

### Finding 1.10: Summary table of 10 scales with richness gain, cost, PA visibility
**Source:** Lines 248-261 (10-row table)
**Status:** MISSING from prompt as a reference
**Classification:** NICE-TO-HAVE -- This is reference material, not execution rules. The prompt correctly distills to "max 5, prefer 2-3."

---

## FILE 2: 02-alternative-mental-models.md (410 lines)

### Finding 2.1: Semantic Resonance Field model
**Source:** "Richness is NOT how many properties are deployed, but how many properties are saying the SAME THING simultaneously" (line 63)
**Status:** IN PROMPT -- MC-02 (line 196): ">= 3 reinforcing pairs" and A5 (line 60): "REINFORCING: Multiple mechanisms encode same meaning through different CSS channels"
**Coverage:** FULL

### Finding 2.2: Average channels per transition as richness metric
**Source:** "Score = average channel count per transition ... 1-1.5 = Flat ... 4-5 = Harmonic" (lines 84-96)
**Status:** PARTIALLY IN PROMPT -- SC-02 (line 209) requires >= 5 of 7 channels. But no rule requires MINIMUM CHANNELS PER INDIVIDUAL TRANSITION.
**Classification:** IMPORTANT -- The invocation guide (15-scale-channel-invocation.md) proposed rule C-01: "Every section boundary must deploy >= 3 channels simultaneously." This is NOT in the enriched prompt.

**INSERTABLE TEXT (for Section B5, after SC-08):**
```
SC-09. Channel density per transition: every section boundary must deploy >= 3 channels
       simultaneously (of: chromatic, typographic, spatial, structural, density, rhythmic).
       Verify: at each section break, count how many of these change: background color,
       heading treatment, spacing, border presence/weight, content density, element pattern.
       Count >= 3 at every boundary = PASS.
```
**Placement:** Section B5 SCALE-CHANNEL, after line 215 (SC-08).

### Finding 2.3: Temporal Metabolism model (4 temporal layers)
**Source:** "Flash (0-100ms), Scan (1-5s), Read (30-300s), Return (days+)" (lines 42-48)
**Status:** PARTIALLY IN PROMPT -- A8 READER JOURNEY captures the scroll journey (5 acts). The "5-second test" in A1 (line 22) captures the flash/scan layers. But the "Return visit" layer (memory anchors, landmarks for re-entry) is NOT explicitly addressed.
**Classification:** NICE-TO-HAVE -- The return-visit layer is implicitly addressed by designed moments (C-09) and structural bookending (C-15), but there's no explicit "landmarks for re-entry" rule. Not critical for a first build.

### Finding 2.4: Narrative Arc model (visual intensity tracking content importance)
**Source:** "Richness is the completeness and intentionality of this dramatic arc" (line 108)
**Status:** IN PROMPT -- A8 READER JOURNEY (5-act story, lines 96-103) and C-18 (density arc, line 188)
**Coverage:** FULL

### Finding 2.5: Materiality Gradient model (ethereal to monumental range)
**Source:** "richness is the range of materiality deployed on a single page and the intentionality of how that range maps to content semantics" (line 150)
**Status:** PARTIALLY IN PROMPT -- The border-weight gradient (1px/3px/4px) is referenced in B7 transition types (C-05). But no rule explicitly requires a FULL RANGE of materiality (from near-invisible meta-labels to monumental headers).
**Classification:** NICE-TO-HAVE -- Implicitly covered by mechanism deployment rules. Not a standalone rule.

### Finding 2.6: Cognitive Scaffolding model (recognition -> comprehension -> synthesis -> insight)
**Source:** "Richness is how many cognitive transitions the page actively scaffolds" (lines 192-193)
**Status:** IN PROMPT -- C-15 intentionality dimensions include "pedagogical sequencing" and "cognitive transitions." A8 reader journey captures the scroll as designed cognitive progression.
**Coverage:** FULL

### Finding 2.7: Seven-dimensional richness space
**Source:** "Spatial Zoom / Temporal Metabolism / Semantic Resonance / Narrative Arc / Materiality Gradient / Cognitive Scaffolding / Systemic Gravity / Emotional Topology" (lines 315-326)
**Status:** PARTIALLY IN PROMPT -- The prompt captures Spatial Zoom (B5), Semantic Resonance (MC rules), Narrative Arc (A8), and Cognitive Scaffolding (C-15). Systemic Gravity and Emotional Topology are NOT captured.
**Classification:** NICE-TO-HAVE -- Systemic Gravity is cross-page (N/A for single page). Emotional Topology is implicitly covered by the conviction layer's personality guidance (A1: "Warm. Authoritative. Unhurried.") and reader journey. No explicit rule needed.

### Finding 2.8: Richness as vector, not scalar
**Source:** "Is richness ONE number (a scalar) or MANY numbers (a vector)?" (line 340)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- This is a conceptual framing. The prompt's multi-section rule system (S/U/C/MC/SC/MG/P) already treats richness as multi-dimensional. No explicit restatement needed.

---

## FILE 3: 03-diminishing-returns.md (758 lines)

### Finding 3.1: Richness grows LOGARITHMICALLY; cost grows EXPONENTIALLY
**Source:** "You are chasing a logarithmic benefit with exponential costs." (line 183)
**Status:** IN PROMPT -- A3 (lines 43-44): "If maintaining 4-scale coherence requires sacrificing spatial proportion, REDUCE to 2-3 scales immediately. PA-05 > scale count."
**Coverage:** The principle is captured; the specific curves are not reproduced (nor should they be -- the prompt is for builders, not economists).

### Finding 3.2: Richness gain per scale is strictly decreasing (16.25 -> 12.5 -> 9.0)
**Source:** Lines 48-53 (richness gain per scale table)
**Status:** MISSING from prompt as specific numbers
**Classification:** NICE-TO-HAVE -- The qualitative principle is captured in A3. Specific gain-per-scale numbers would add prompt length without changing builder behavior.

### Finding 3.3: Reproducibility loss ACCELERATES (5% -> 12.5% -> 20% per scale)
**Source:** Lines 88-98 (reproducibility loss curve)
**Status:** MISSING from prompt as specific numbers
**Classification:** NICE-TO-HAVE -- For the same reason as 3.2.

### Finding 3.4: Build time per scale is SUPER-LINEAR (17.5 -> 52.5 -> 145 min/scale)
**Source:** Lines 130-135
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Time economics are for the team lead, not the builder prompt.

### Finding 3.5: Context wall at ~800-1000 CSS lines
**Source:** "The context wall is at approximately 800-1000 CSS lines." (line 223)
**Status:** MISSING from prompt
**Classification:** IMPORTANT -- This directly informs the builder's self-check. If the builder is generating >800 CSS lines, they should be warned that composition quality degrades.

**INSERTABLE TEXT (for Section B10, after existing self-check items):**
```
[ ] CSS line count <= 800       (context management ceiling; above 800, composition degrades)
```
**Placement:** Section B10 BUILDER SELF-CHECK, after line 291 (add as item 13).

### Finding 3.6: The "Container Width" predictor (0% failure at 2 scales, 80% at 4, 100% at 4)
**Source:** Lines 366-375
**Status:** IN PROMPT -- S-01 (line 115): "Container width outside 940-1100px" as FAIL-IF. Also B10 self-check item 1 (line 279).
**Coverage:** FULL

### Finding 3.7: Middle-to-Ceiling transition is highest ROI; Ceiling-to-Flagship is lowest
**Source:** "Floor to Middle (0->2): +32.5% richness (+16.25% per scale) ... Ceiling to Flagship (4->5): +9% richness" (lines 48-52)
**Status:** IN PROMPT -- A3 (line 43): "Middle experiment at 2 scales: PA-05 4/4 DESIGNED. Ceiling experiment at 4 scales: PA-05 1.5/4."
**Coverage:** The empirical evidence is cited. The specific ROI numbers are not, but they don't change builder behavior.

### Finding 3.8: Optimal distribution for 50 pages = 40 Middle + 8 Ceiling + 2 Flagship
**Source:** Lines 437-475 (Option D analysis)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- This is site-level planning, not relevant to a single flagship page build.

### Finding 3.9: Maximum richness is EMERGENT from iteration, not DESIGNED from specification
**Source:** "DD-006 achieved 100% richness because it was the ACCUMULATION of 5 prior explorations" (line 493)
**Status:** IN PROMPT -- A6 (line 71): "Plans do NOT prevent spatial failure. Only GATES prevent spatial failure." and P-08 (line 245): "Spatial re-check after Pass 2."
**Coverage:** The principle is operationalized through the multi-pass architecture (C1, C3). The specific historical evidence is not cited (nor should it be).

### Finding 3.10: "Richness = f(iteration_depth x constraint_quality), NOT f(scale_count x mechanism_count)"
**Source:** Line 533
**Status:** IN PROMPT -- A3 anti-scale model captures this: "Richness = semantic_density x restraint x spatial_confidence" (line 38). Also A6: "Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms."
**Coverage:** FULL

### Finding 3.11: Iteration is STRICTLY SUPERIOR to scale addition
**Source:** "Two audit-fix cycles at Ceiling tier cost 120 minutes and produce 10-18% richness improvement with 85% reliability." vs "Adding a 5th scale costs 145 minutes and produces 9% richness improvement with 40% reliability." (lines 736-740)
**Status:** PARTIALLY IN PROMPT -- The multi-pass architecture (C1) implements iteration. But no rule explicitly states "iteration > scale addition."
**Classification:** NICE-TO-HAVE -- The prompt already implements this through its architecture (5 passes with gates). No explicit statement needed.

### Finding 3.12: Mathematical models (richness function, build time function, reproducibility function)
**Source:** Appendix A (lines 673-722) -- `R(s) = 30 + 67 * (1 - e^(-0.55s))`, `T(s) = 35 * 2^(0.65s)`, `P(s) = 100 - 5s - 2s^2`
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- These are analytical models for planning, not execution rules. Correctly excluded.

### Finding 3.13: Three Laws of Scale Economics
**Source:** Lines 632-644
**Status:** IN PROMPT -- Law 1 (logarithmic/exponential) captured in A3. Law 2 (perception threshold at Ceiling) captured in A3 warning. Law 3 (emergent from iteration) captured in multi-pass architecture.
**Coverage:** FULL (all three laws are operationalized)

### Finding 3.14: Human perception ceiling at ~85-90% richness (Ceiling tier)
**Source:** "The human perception ceiling for page richness is approximately 85-90% -- the Ceiling tier." (line 321)
**Status:** IN PROMPT -- A3 (line 43): "If maintaining 4-scale coherence requires sacrificing spatial proportion, REDUCE to 2-3 scales immediately."
**Coverage:** Operationally captured. The specific 85-90% number is not cited, but the behavioral consequence is.

### Finding 3.15: Cross-domain perception thresholds (audio, image, typography, architecture)
**Source:** Lines 549-626 (4 cross-domain comparisons)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Motivational context, not operational rules.

---

## FILE 4: 04-showcase-archaeology.md (267 lines)

### Finding 4.1: DD-006 operates at 4/5 scales; CD-006 operates at 5/5 scales
**Source:** Lines 14-38 (scale mapping tables)
**Status:** IN PROMPT -- A7 (lines 78-92) cites CD-006 as quality exemplar. The specific scale count is not reproduced (not needed for builders).
**Coverage:** ADEQUATE

### Finding 4.2: Six unmodeled dimensions of richness
**Source:** "Self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation, provenance threading" (lines 259-260)
**Status:** IN PROMPT -- C-15 (line 185): ">= 3 of 6 intentionality dimensions present: self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation."
**Note:** The prompt has 6 dimensions, but they don't perfectly match the archaeology's 6. The prompt includes "deliberate absence" instead of "provenance threading." This is a DESIGN CHOICE, not an omission -- provenance threading is a meta-documentation concern, while deliberate absence is a compositional technique.
**Coverage:** FULL (with deliberate substitution)

### Finding 4.3: Unmodeled richness = 15-20% of total quality, not 2-5%
**Source:** "The unmodeled richness constitutes approximately 15-20% of total design quality, not 2-5% as previously estimated." (line 137)
**Status:** MISSING from prompt as specific numbers
**Classification:** NICE-TO-HAVE -- The prompt addresses this through the dual richness model (A4): Source 1 (Constraint Pressure, 55-65%) + Source 2 (Design Intelligence). Source 2 IS the 15-20% intentionality. The specific percentage is motivational, not operational.

### Finding 4.4: The iteration hypothesis is WRONG (crown jewels were single-pass)
**Source:** "DD-006 was NOT iterated. It was built once." / "CD-006 was NOT iterated either." (lines 163, 170)
**Status:** IN PROMPT -- A6 (line 74): "Concept quality does NOT predict product quality." and A4: "Source 2 (Design Intelligence): ... Requires Opus-level agents for metaphor + intentionality passes."
**Coverage:** The prompt correctly assigns intentionality to Opus agents (C1, Pass 3+4), not to iteration. The specific historical evidence is correctly excluded from an execution prompt.

### Finding 4.5: CD-006 bridge transitions carry cognitive content
**Source:** "Now that you understand the why, let us set up the how" (line 62)
**Status:** IN PROMPT -- C-07 (line 171): "Bridge transitions MUST contain cognitive-reframe prose (1-3 sentences justifying the shift)." Also A7 (lines 86-89): CD-006 exemplar shows bridge prose.
**Coverage:** FULL

### Finding 4.6: Self-reference as design intelligence ("page knows what it is")
**Source:** "The page literally describes what you are looking at while you look at it." (line 49)
**Status:** IN PROMPT -- C-16 (line 186): ">= 1 self-referential element (content describes its own form)."
**Coverage:** FULL

### Finding 4.7: "5 + 1 Axis" model (5 spatial scales + Intentionality axis)
**Source:** Lines 219-231
**Status:** IN PROMPT -- A5 captures compositional fluency (the "how"), C-15 captures intentionality dimensions (the "why"). The 5+1 structure is implemented, even if not named as such.
**Coverage:** FULL

### Finding 4.8: Ceiling-to-Flagship gap is primarily INTENTIONALITY gap, not spatial gap
**Source:** "The gap between Ceiling and Flagship is NOT 'more spatial richness.' It is more intentional richness." (line 244)
**Status:** IN PROMPT -- A4 (line 54): "Source 1 alone = 'professionally stiff' (Middle result). Source 1 + Source 2 = crown jewel (CD-006: 39/40)."
**Coverage:** FULL

### Finding 4.9: CD-006 bookend structure (S1/S8 both use Spiral/Geological)
**Source:** "Opening and closing with the same axis pattern (Spiral) creates structural closure" (line 87)
**Status:** IN PROMPT -- C-15 includes "bookending" as intentionality dimension. A8 reader journey (line 101): "Act 5 (85-100%): Conclusion (bookending, footer closure)."
**Coverage:** FULL

### Finding 4.10: CD-006 has 7 cognitive mode transitions
**Source:** Lines 67-79 (transition table)
**Status:** IN PROMPT -- C-17 (line 187): ">= 2 bridge transitions with cognitive-shift prose."
**Coverage:** FULL (though the prompt requires minimum 2, CD-006 had 7)

---

## FILE 5: 05-cross-domain-theory.md (466 lines)

### Finding 5.1: Alexander/Salingaros e-ratio (~2.7x between adjacent scales)
**Source:** "scales should be spaced by a factor of approximately e = 2.718" (line 86)
**Status:** IN PROMPT -- A3 (line 45): "Five scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(e) = 4.8)."
**Coverage:** FULL (formula cited with attribution)

### Finding 5.2: Formula: scales = ln(largest/smallest) / ln(scaling_ratio)
**Source:** "ln(100,000mm / 1mm) / ln(2.7) ≈ 11.5" for architecture; "ln(1440/12) / ln(2.7) ≈ 4.8" for web (lines 93-97 and 374-376)
**Status:** IN PROMPT -- A3 (line 45) cites the web-specific calculation.
**Coverage:** FULL

### Finding 5.3: Schenker's 3 structural levels (foreground/middleground/background)
**Source:** Lines 29-34
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- This is motivational cross-domain theory. The operational consequence (3-5 perceptible scales) is captured in SC-01.

### Finding 5.4: Perceptual ceiling of ~3 concurrent musical lines
**Source:** "listeners are much more likely to make tracking errors and to underestimate the number of voices present when there are more than three" (line 57)
**Status:** MISSING from prompt as specific claim
**Classification:** NICE-TO-HAVE -- The operational consequence is captured in C-03: "Mechanism density: <= 4 OPERATING per viewport."

### Finding 5.5: Total serialism = "conceptual triumph and perceptual dead end"
**Source:** Line 50
**Status:** IN PROMPT -- A6 (line 72): "Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived."
**Coverage:** FULL (the principle is captured without the music theory citation)

### Finding 5.6: Cross-domain universal: "scale depth converges; channel width diverges"
**Source:** Lines 334-342 (table showing 5 domains all stopped adding levels, started adding channels)
**Status:** IN PROMPT -- A3 (line 45): "Beyond 5, add CHANNELS ... not LEVELS." Also B5 SCALE-CHANNEL section (lines 205-216) implements channel rules.
**Coverage:** FULL

### Finding 5.7: 6-domain convergence table (Music / Architecture / Typography / Cinema / Software / Biology)
**Source:** Lines 334-342
**Status:** IN PROMPT -- The table itself is not reproduced, but the universal principle is in A3.
**Classification:** NICE-TO-HAVE -- The table is evidence. The prompt correctly distills to the principle.

### Finding 5.8: "Gaps between scales are worse than missing scales" (Agreement 5)
**Source:** "a building with 6 scales that has a GAP feels worse than a building with 4 continuous scales" (line 346)
**Status:** MISSING from prompt
**Classification:** IMPORTANT -- This has operational impact. If a builder targets 4 scales but has a gap (e.g., Page and Character coherence but no Section coherence), the result is worse than 2 continuous scales.

**INSERTABLE TEXT (for Section A3, appended after line 45):**
```
Scale gaps are worse than missing scales. If targeting 4 scales, ensure continuous coverage
(Navigation > Page > Section > Component). A gap (Page + Character but no Section) reads
as incoherent. 2 continuous scales > 4 scales with gaps.
```
**Placement:** Section A3, after the EMPIRICAL WARNING block (line 45).

### Finding 5.9: "The optimal scale count is the MINIMUM that spans the full range without gaps"
**Source:** Lines 350-358
**Status:** IN PROMPT -- SC-01 (line 208): "Maximum 5 scales. Preferred 2-3 for flagship."
**Coverage:** ADEQUATE -- The "preferred 2-3" captures the minimum principle. Gap avoidance (see 5.8 above) is the missing piece.

### Finding 5.10: Alexander's 15 properties (5 of 15 involve scale relationships)
**Source:** Lines 99-109
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- The relevant properties (strong centers, boundaries, echoes, not-separateness) are operationalized through the mechanism catalog and semantic rules, not through direct citation.

### Finding 5.11: Music's 4 simultaneous hierarchical systems (Lerdahl & Jackendoff)
**Source:** Lines 17-23 (grouping, metrical, time-span, prolongational)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Theoretical framing. The 7-channel model in B5 is the operational equivalent.

### Finding 5.12: Architecture: detail below scale-of-use is perceived as texture, not form
**Source:** "detail at or below the scale of human body parts is perceived as texture rather than as structure" (line 115)
**Status:** IN PROMPT -- Implicitly through SC-01's "preferred 2-3." Character-scale detail is texture.
**Coverage:** ADEQUATE

### Finding 5.13: Typography: channels, not scales, are the productive frontier
**Source:** "Typography's richness comes from channel count, not scale count." (line 159)
**Status:** IN PROMPT -- B5 SCALE-CHANNEL section (8 rules) implements channel-based richness.
**Coverage:** FULL

### Finding 5.14: Cinema: Murch's Rule of Six (Emotion 51%, Story 23%, Rhythm 10%...)
**Source:** Lines 194-195
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- The emotional hierarchy is captured in A1 (personality: "Warm. Authoritative. Unhurried.") and the conviction layer generally.

### Finding 5.15: Software: leaky abstractions harm more than missing layers
**Source:** "A system with 3 leaky layers is worse than a system with 12 clean ones." (line 237)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Theoretical analogy. Not operationally relevant.

### Finding 5.16: Biology: scale count is DETERMINED by range/ratio, not chosen
**Source:** "the number of meaningful scales = ln(largest / smallest) / ln(scaling_factor)" (line 264)
**Status:** IN PROMPT -- A3 (line 45) cites the formula.
**Coverage:** FULL

---

## FILE 6: 06-adversarial-anti-scale.md (431 lines)

### Finding 6.1: Anti-scale thesis: "scales are a proxy metric, not the cause of richness"
**Source:** "The 5-scale model of fractal coherence is measuring a SIDE EFFECT of richness, not its cause." (line 12)
**Status:** IN PROMPT -- A3 (lines 38-45) presents the anti-scale model as the PRIMARY richness model. The prompt does NOT use scale count as its richness metric. It uses the anti-scale formula.
**Coverage:** FULL

### Finding 6.2: Anti-scale model: Richness = semantic_density x restraint x spatial_confidence
**Source:** Line 237
**Status:** IN PROMPT -- A3 (line 38): "Richness = semantic_density x restraint x spatial_confidence"
**Coverage:** FULL (exact formula reproduced)

### Finding 6.3: Spatial confidence has VETO power
**Source:** "Spatial confidence has a VETO: no amount of micro-scale coherence rescues a page that fails the squint test" (line 247)
**Status:** IN PROMPT -- A3 (line 41): "If spatial_confidence = 0, the entire product = 0 regardless of other factors."
**Coverage:** FULL

### Finding 6.4: Middle (2 scales, 4/4 PA-05) vs Ceiling (4 scales, 1.5/4 PA-05) inversion
**Source:** Lines 148-152
**Status:** IN PROMPT -- A3 (lines 43-44): "Middle experiment at 2 scales: PA-05 4/4 DESIGNED. Ceiling experiment at 4 scales: PA-05 1.5/4 DO NOT SHIP."
**Coverage:** FULL (exact data cited)

### Finding 6.5: "Adding complexity at higher scales TAXES attention for lower scales"
**Source:** Line 177
**Status:** IN PROMPT -- A6 (line 76): "Every rule in this prompt has an attention cost. Binary rules are cheap (~1 unit)."
**Coverage:** ADEQUATE -- The attention budget concept is present. The specific mechanism (higher-scale attention taxing lower-scale) is implied by the multi-pass architecture (spatial skeleton FIRST in Pass 1, mechanisms LATER in Pass 2).

### Finding 6.6: Vocabulary constraint (soul) is the ENGINE of richness, not scales
**Source:** "When you strip away 60% of the expressive toolkit, the remaining 40% must work MUCH harder." (lines 83-84)
**Status:** IN PROMPT -- Section D (line 400): "The KortAI soul closes 55-65% of CSS. This is the ENGINE of richness, not a limitation."
**Coverage:** FULL (near-exact phrasing)

### Finding 6.7: DD-006/CD-006 richness is emergent from constraint pressure, not from fractal intention
**Source:** "DD-006 appears fractal because the constraint pressure made the designer encode the same meaning through the only channel available" (lines 86-87)
**Status:** IN PROMPT -- A4 (lines 49-54): Dual richness sources model correctly attributes Source 1 to constraint pressure. A5 (line 66): "Mechanism count does NOT predict quality."
**Coverage:** FULL

### Finding 6.8: Showcase pages were MORE rigid than pipeline output
**Source:** "The rigidity research produced the finding that showcase pages were MORE rigid than pipeline output, not less." (lines 92-93)
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- This is a research finding supporting the conviction layer. The conviction layer already operationalizes the principle.

### Finding 6.9: "More scales. Worse design. The word count test fails."
**Source:** Line 52
**Status:** IN PROMPT -- A3 lines 43-44 present the empirical evidence.
**Coverage:** FULL

### Finding 6.10: Character-level coherence does LABELING, not STRUCTURAL RICHNESS
**Source:** "The labels at Character scale were perceived as ANNOUNCEMENTS, not as structural richness." (line 138)
**Status:** PARTIALLY IN PROMPT -- MG-04 (line 227): "remove all labels and titles. Does the visual structure alone communicate the metaphor?" This gate catches the failure mode.
**Classification:** NICE-TO-HAVE -- The metaphor structural test (MG-04) already operationalizes this finding.

### Finding 6.11: Restraint ratio as richness predictor
**Source:** "Restraint ratio: the ratio of plausible additions REJECTED to additions ACCEPTED" (line 241)
**Status:** IN PROMPT -- C-12 (line 180): "Rejection log: document >= 21 considered-and-rejected mechanism placements (>= 1.5:1 ratio vs deployed)." Also SC-06 (line 213): "Restraint Ratio per channel: reject-to-deploy >= 1.5:1."
**Coverage:** FULL (quantified as 1.5:1 ratio)

### Finding 6.12: "Richness comes from the ratio of signal to silence, not from the total amount of signal"
**Source:** Line 268
**Status:** IN PROMPT -- C-13 (line 181): ">= 2 designed silence zones" and C-14 (line 182): "Signal-to-silence ratio: 0.6-0.8:1."
**Coverage:** FULL

### Finding 6.13: Soul vs Scales tension is fundamental and irreconcilable
**Source:** Lines 275-321 (Argument 6)
**Status:** IN PROMPT -- The prompt resolves this tension correctly: soul rules (B2) are binary and non-negotiable; scale rules (B5) are targets with "preferred 2-3." The hierarchy (soul > spatial confidence > scales) is implicit in the rule ordering.
**Coverage:** FULL (resolved through design, not stated explicitly)

### Finding 6.14: Recommendation to cap active scales at 3
**Source:** Lines 371-373
**Status:** IN PROMPT -- SC-01 (line 208): "Maximum 5 scales. Preferred 2-3 for flagship."
**Coverage:** PARTIALLY -- The prompt allows up to 5 while preferring 2-3. The adversarial recommendation of hard-cap at 3 was NOT adopted (the prompt takes a softer position). This appears to be a deliberate design choice, not an omission.

### Finding 6.15: "Deliberate absence" as compositional tool
**Source:** "the decision to LEAVE A SCALE EMPTY" (line 256)
**Status:** IN PROMPT -- C-15 (line 185) includes "deliberate absence" as an intentionality dimension. C-13 requires silence zones.
**Coverage:** FULL

### Finding 6.16: Self-challenge: n=1 weakness
**Source:** Lines 407-411
**Status:** IN PROMPT -- The prompt addresses this by citing MULTIPLE experiments: Middle (n=1), Ceiling (n=1), Phase D variants (n=5), DD-006, CD-006. Aggregate evidence, not single-experiment claims.
**Coverage:** ADEQUATE

---

## FILE 7: 15-scale-channel-invocation.md (700 lines)

### Finding 7.1: 7-channel taxonomy (Chromatic, Typographic, Spatial, Structural, Density, Rhythmic, Intentional)
**Source:** Lines 72-172
**Status:** IN PROMPT -- SC-02 (line 209): ">= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional."
**Coverage:** FULL (all 7 named)

### Finding 7.2: Channel manifestation examples at each of 5 scales
**Source:** Lines 79-172 (per-channel, per-scale descriptions)
**Status:** MISSING from prompt -- This rich reference material (70+ specific manifestation examples) is NOT in the prompt.
**Classification:** NICE-TO-HAVE -- This belongs in the REFERENCE LIBRARY (Section E), not in the execution spec. The reference library routing (line 419) already points the planner to mechanism-catalog.md. A separate channel-taxonomy reference file could be created but is not a prompt rule.

### Finding 7.3: Channel Interaction Matrix (which channel pairs reinforce vs. independent)
**Source:** Lines 174-186
**Status:** PARTIALLY IN PROMPT -- MC-02 through MC-06 require specific interaction types (reinforcing, modulating, responding, contrasting, cascading). The CHANNEL-LEVEL interaction matrix (which specific channel pairs tend to reinforce) is NOT in the prompt.
**Classification:** NICE-TO-HAVE -- The interaction types are captured; specific channel pairing guidance is useful but belongs in reference material, not the execution prompt.

### Finding 7.4: Richness matrix (5 scales x 7 channels = 35 cells)
**Source:** Lines 192-209 (visual matrix)
**Status:** IN PROMPT -- SC-03 (line 210): ">= 30 of 35 cells (5 scales x 7 channels) populated for Flagship."
**Coverage:** FULL (rule references the matrix directly)

### Finding 7.5: Tier coverage targets (Floor: 10-12, Middle: 18-22, Ceiling: 25-30, Flagship: 30-35)
**Source:** Lines 212-218
**Status:** IN PROMPT -- SC-03 references the Flagship target of 30/35. Appendix table (line 479) cites "Richness matrix >= 30/35 cells for Flagship."
**Coverage:** FULL for Flagship. Other tiers are not needed in a flagship execution prompt.

### Finding 7.6: CD-006 filled 33/35 matrix cells; DD-006 filled 24/35
**Source:** Lines 222-226
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- Calibration data. The target (30/35) is in the prompt; the exemplar scores add context but not rules.

### Finding 7.7: 80/20 of channel-scale coverage (4 HIGHEST IMPACT cells)
**Source:** Lines 230-251 (priority-ordered list of 35 cells)
**Status:** MISSING from prompt
**Classification:** IMPORTANT -- This tells the builder WHERE to invest attention first. The top 4 cells (Page-Spatial, Component-Structural, Section-Density, Page-Chromatic) have highest perceptual impact.

**INSERTABLE TEXT (for Section A3, after the anti-scale model):**
```
CHANNEL-SCALE PRIORITY: Not all matrix cells are equal. Highest-impact cells (fill FIRST):
1. Page-Spatial (squint test) -- VETO POWER
2. Component-Structural (visible architecture)
3. Section-Density (content pacing)
4. Page-Chromatic (color identity)
Lowest-impact cells (fill LAST or leave empty): Character-scale channels, Navigation-scale density.
```
**Placement:** Section A3, after line 45 (after "NEVER target 6+ scales.")

### Finding 7.8: Conviction layer text ("CHANNELS, NOT LEVELS")
**Source:** Lines 260-281
**Status:** IN PROMPT -- A3 captures the same content but more concisely. The invocation guide's conviction text is more expansive; the prompt's version is correctly compressed.
**Coverage:** FULL (content captured, format compressed)

### Finding 7.9: 8 binary channel rules (C-01 through C-08 from invocation guide)
**Source:** Lines 292-349
**Status:** PARTIALLY IN PROMPT -- Some concepts are captured by existing rules:
- Invocation C-01 (min 3 channels per transition) -> NOT in prompt (see Finding 2.2, SC-09 proposed)
- Invocation C-02 (chromatic-density alignment) -> NOT in prompt
- Invocation C-03 (structural weight hierarchy) -> Partially in C-05 transition types
- Invocation C-04 (typographic trinity at all scales) -> IN prompt: U-09 (line 155)
- Invocation C-05 (intentional arc minimum) -> IN prompt: A8, C-18
- Invocation C-06 (reinforcing channel pairs at transitions) -> Partially in MC-02
- Invocation C-07 (semantic density proportionality) -> NOT in prompt (see Finding 1.6)
- Invocation C-08 (signal-to-silence ratio) -> IN prompt: C-14

**Missing rules from invocation guide that are NOT in prompt:**
1. C-01 (min 3 channels per transition) - IMPORTANT (proposed as SC-09 above)
2. C-02 (chromatic-density alignment: warm zones sparse, cool zones dense) - IMPORTANT
3. C-07 (semantic density proportionality) - IMPORTANT (proposed as C-19 above)

**INSERTABLE TEXT for chromatic-density alignment (Section B5):**
```
SC-10. Chromatic-density alignment: zone-sparse sections (warm cream backgrounds) MUST have
       LESS content per viewport than zone-dense sections (neutral/cool backgrounds).
       Verify: compare word count per viewport-height between warm and neutral sections.
       Warm < Neutral = PASS.
```
**Placement:** Section B5, after SC-09 (proposed above).

### Finding 7.10: Channel self-check for builder
**Source:** Lines 352-367
**Status:** MISSING from prompt -- The builder self-check (B10) does NOT include channel-level checks.
**Classification:** IMPORTANT -- Channel self-check would catch the exact failure mode the ceiling experiment exhibited (all mechanisms in one channel).

**INSERTABLE TEXT (for Section B10, after existing self-check):**
```
CHANNEL SELF-CHECK (3 representative section transitions):
[ ] Transition 1 (early): >= 3 channels shift?
[ ] Transition 2 (middle): >= 3 channels shift?
[ ] Transition 3 (late): >= 3 channels shift?
[ ] Warmest background has least content per viewport?
[ ] Heaviest border is on most important content?
```
**Placement:** Section B10, after the existing 12 items (line 291) but before the SendMessage instructions.

### Finding 7.11: Agent-channel ownership mapping
**Source:** Lines 377-412
**Status:** PARTIALLY IN PROMPT -- The agent roster (C1, lines 300-324) assigns agents to passes but does NOT specify which channels each agent owns.
**Classification:** IMPORTANT -- Without explicit channel ownership, no agent feels responsible for multi-channel coordination.

**INSERTABLE TEXT (for Section C1, as annotation to agent descriptions):**
```
CHANNEL OWNERSHIP:
  Metaphor Agent:       Ch7 Intentional (argument arc, self-awareness, rhetoric)
  Content Architect:    Ch5 Density + Ch6 Rhythmic
  Planner:              Ch3 Spatial + Ch4 Structural (integrates all channels)
  Mechanism Builder:    Ch1 Chromatic + Ch2 Typographic (implements, does NOT decide)
  Embedded Auditor:     ALL 7 channels (validates against SC rules)
```
**Placement:** Section C1, after the agent roster (line 324).

### Finding 7.12: Channel communication protocol (3 mandatory channel-specific checkpoints)
**Source:** Lines 416-434
**Status:** PARTIALLY IN PROMPT -- CP-A through CP-E (lines 331-337) define 5 checkpoints but do NOT include channel-specific content requirements.
**Classification:** IMPORTANT -- The checkpoint content should include channel counts.

**INSERTABLE TEXT (for Section C2, modifying CP-B):**
Modify CP-B (line 333) to add channel data:
```
CP-B (post-build): Builder -> Team-Lead. "Page height: ___px. Content ratio: __%.
     Sections: __. Deviations from plan: ___. Channel count at 3 transitions: __/__/__."
```
**Placement:** Replace existing CP-B at line 333.

### Finding 7.13: 6 anti-patterns (Scale Stacking, Channel Monotony, Channel Cacophony, Intentional Neglect, Restraint Deficit, Channel-Mechanism Confusion)
**Source:** Lines 490-527
**Status:** PARTIALLY IN PROMPT -- The conviction layer (A) warns against some of these implicitly. But NONE of the 6 anti-patterns are explicitly named.
**Classification:** NICE-TO-HAVE -- These are educational, not operational. The binary rules (SC-01 through SC-08) prevent these anti-patterns structurally.

### Finding 7.14: 7 operational formulas (CDT, RDT, MCS, SRS, RR, SCI, CSPS)
**Source:** Lines 532-642
**Status:** PARTIALLY IN PROMPT:
- CDT (channel density per transition): NOT in prompt -> proposed as SC-09
- RDT (reinforcement depth per transition): NOT in prompt as formula
- MCS (matrix coverage score): IN prompt as SC-03
- SRS (semantic resonance score): NOT in prompt
- RR (restraint ratio): IN prompt as C-12, SC-06
- SCI (spatial confidence index): NOT in prompt as formula (but S-10, S-12 cover void detection)
- CSPS (channel-scale priority score): NOT in prompt -> proposed as CHANNEL-SCALE PRIORITY

Missing formulas that have operational value:
1. SCI formula: `SCI = 1 - (max_void_height / total_page_height)` with SCI >= 0.85 target, SCI < 0.60 = DO NOT SHIP

**Classification:** IMPORTANT for SCI (provides a single number for spatial confidence gate)

**INSERTABLE TEXT (for Section B1, after S-15):**
```
S-16. Spatial Confidence Index: SCI = 1 - (max_void_height / total_page_height).
      Target: SCI >= 0.85. Warning: SCI < 0.70. VETO: SCI < 0.60 = DO NOT SHIP.
      Verify: find tallest contiguous area with no content elements (pure background).
      Divide by total page height. Subtract from 1.
```
**Placement:** Section B1, after S-15 (line 140).

### Finding 7.15: Tier-specific matrix coverage targets
**Source:** Lines 571-576 (Floor: 29%, Middle: 51%, Ceiling: 71%, Flagship: 86%)
**Status:** IN PROMPT -- SC-03 (line 210): ">= 30 of 35 cells" for Flagship (= 86%).
**Coverage:** FULL for Flagship tier.

### Finding 7.16: Semantic Resonance Score formula and interpretation
**Source:** Lines 580-588
**Status:** MISSING from prompt
**Classification:** NICE-TO-HAVE -- SRS is a composite metric (CDT x RDT). It could help auditors but adds complexity. The component rules (SC-09 for CDT, MC-02 for reinforcing pairs) are more actionable.

### Finding 7.17: Critical Reminders (7 items)
**Source:** Lines 684-697
**Status:** All 7 reminders are IN PROMPT:
1. "5 scales IS the ceiling" -> A3
2. "The productive frontier is channels" -> B5
3. "Anti-scale model is operationally valid" -> A3
4. "Channels must REINFORCE" -> MC-02
5. "Spatial confidence has VETO" -> A3, S-12
6. "Restraint is a channel" -> C-12, C-13
7. "Intentional channel is Ceiling-to-Flagship differentiator" -> A4, C-15
**Coverage:** FULL (all 7)

---

## CONSOLIDATED MEMORY FILE (memory/scale-research.md)

Note: This file does not exist on disk. The MEMORY.md references it but it was never written. All findings from the memory were extracted from the 6 source files above and are covered in those sections.

---

## SUMMARY MATRIX

### FULL COVERAGE (finding is in the prompt with adequate operational force)

| # | Finding | Prompt Location |
|---|---------|----------------|
| 1.1 | Spatial axis exhausted at 5 | A3 |
| 1.7 | 5+1 model (spatial + intentionality) | A5, C-15 |
| 1.9 | Reproducibility cliff at 5+ | A3 |
| 2.1 | Semantic Resonance Field | MC-02, A5 |
| 2.4 | Narrative Arc | A8, C-18 |
| 2.6 | Cognitive Scaffolding | C-15 |
| 3.1 | Logarithmic benefit / exponential cost | A3 |
| 3.6 | Container width predictor | S-01, B10 |
| 3.7 | Middle-to-Ceiling highest ROI | A3 |
| 3.9 | Max richness emergent from iteration | A6, multi-pass arch |
| 3.10 | Richness = f(iteration x constraint) | A3 |
| 3.13 | Three Laws of Scale Economics | A3, multi-pass, C1 |
| 4.2 | Six unmodeled dimensions | C-15 |
| 4.5 | Bridge transitions carry cognitive content | C-07 |
| 4.6 | Self-reference as design intelligence | C-16 |
| 4.7 | 5+1 Axis model | A5, C-15 |
| 4.8 | Ceiling-Flagship gap = intentionality | A4 |
| 4.9 | Bookend structure | A8, C-15 |
| 4.10 | 7 cognitive mode transitions | C-17 |
| 5.1 | Alexander/Salingaros e-ratio | A3 |
| 5.2 | Scale count formula | A3 |
| 5.5 | Deployment != Perception | A6 |
| 5.6 | Scale depth converges; channel width diverges | A3, B5 |
| 5.13 | Typography: channels > scales | B5 |
| 5.16 | Scale count determined by range/ratio | A3 |
| 6.1 | Anti-scale thesis (scales are proxy) | A3 |
| 6.2 | Anti-scale model formula | A3 |
| 6.3 | Spatial confidence VETO | A3 |
| 6.4 | Middle vs Ceiling PA-05 inversion | A3 |
| 6.6 | Vocabulary constraint is ENGINE | Section D |
| 6.7 | DD-006/CD-006 richness from constraint | A4 |
| 6.9 | Word count test fails | A3 |
| 6.11 | Restraint ratio | C-12, SC-06 |
| 6.12 | Signal-to-silence ratio | C-13, C-14 |
| 6.15 | Deliberate absence | C-15, C-13 |
| 7.1 | 7-channel taxonomy | SC-02 |
| 7.4 | Richness matrix (35 cells) | SC-03 |
| 7.5 | Tier coverage targets | SC-03, Appendix |
| 7.8 | Conviction text | A3 |
| 7.15 | Flagship 86% matrix target | SC-03 |
| 7.17 | All 7 critical reminders | Various |

**Count: 40 findings FULLY COVERED**

### PARTIALLY COVERED (concept present but missing operational specificity)

| # | Finding | What's Missing | Classification |
|---|---------|---------------|---------------|
| 1.6 | Semantic density proportionality | No explicit rule for mechanism-count-to-importance mapping | IMPORTANT |
| 2.2 | Channels per transition metric | No minimum channels per individual transition | IMPORTANT |
| 2.3 | Temporal metabolism (4 layers) | Return-visit layer not explicit | NICE-TO-HAVE |
| 2.5 | Materiality gradient range | No full-range requirement | NICE-TO-HAVE |
| 5.4 | 3 concurrent perceptual lines | Operationalized as C-03 but not stated | NICE-TO-HAVE |
| 6.5 | Higher scales tax lower-scale attention | Implicit in architecture | NICE-TO-HAVE |
| 6.10 | Character-level = labeling, not richness | MG-04 catches it | NICE-TO-HAVE |
| 6.14 | Cap scales at 3 (adversarial rec) | Prompt allows 5, prefers 2-3 | Design choice |
| 7.3 | Channel interaction matrix | MC rules capture types but not channel-specific pairs | NICE-TO-HAVE |
| 7.9 | 8 binary channel rules | 3 of 8 missing: C-01, C-02, C-07 | IMPORTANT |
| 7.11 | Agent-channel ownership | Agents assigned to passes but not to channels | IMPORTANT |
| 7.12 | Channel communication protocol | Checkpoints lack channel data | IMPORTANT |
| 7.14 | 7 operational formulas | SCI formula missing; CDT missing | IMPORTANT |

**Count: 13 findings PARTIALLY COVERED**

### MISSING (finding not represented in prompt)

| # | Finding | Classification | Action |
|---|---------|---------------|--------|
| 5.8 | Gaps worse than missing scales | IMPORTANT | Add to A3 |
| 7.7 | 80/20 channel-scale priority | IMPORTANT | Add to A3 |
| 7.10 | Channel self-check for builder | IMPORTANT | Add to B10 |
| 3.5 | CSS context wall at 800-1000 lines | IMPORTANT | Add to B10 |
| 1.2 | Scale 6 (Glyph) specifics | NICE-TO-HAVE | No action |
| 1.3 | Scale 7 (Temporal) specifics | NICE-TO-HAVE | No action |
| 1.4 | Scale 8 (Cross-Page) specifics | NICE-TO-HAVE | No action |
| 1.5 | Scale 9 (State) specifics | NICE-TO-HAVE | No action |
| 1.8 | Non-spatial scales stack additively | NICE-TO-HAVE | No action |
| 1.10 | 10-scale summary table | NICE-TO-HAVE | No action |
| 2.7 | 7-dimensional richness space | NICE-TO-HAVE | No action |
| 2.8 | Richness as vector not scalar | NICE-TO-HAVE | No action |
| 3.2-3.4 | Specific gain/cost numbers | NICE-TO-HAVE | No action |
| 3.8 | 40/8/2 page distribution | NICE-TO-HAVE | No action |
| 3.12 | Mathematical curve models | NICE-TO-HAVE | No action |
| 3.14 | 85-90% perception ceiling number | NICE-TO-HAVE | No action |
| 3.15 | Cross-domain perception thresholds | NICE-TO-HAVE | No action |
| 4.1 | DD-006 at 4/5, CD-006 at 5/5 | NICE-TO-HAVE | No action |
| 4.3 | 15-20% unmodeled richness | NICE-TO-HAVE | No action |
| 4.4 | Iteration hypothesis wrong | NICE-TO-HAVE | No action |
| 5.3 | Schenker's 3 levels | NICE-TO-HAVE | No action |
| 5.7 | 6-domain convergence table | NICE-TO-HAVE | No action |
| 5.10 | Alexander's 15 properties | NICE-TO-HAVE | No action |
| 5.11 | Lerdahl & Jackendoff 4 systems | NICE-TO-HAVE | No action |
| 5.12 | Detail below scale-of-use = texture | NICE-TO-HAVE | No action |
| 5.14 | Murch's Rule of Six | NICE-TO-HAVE | No action |
| 5.15 | Leaky abstractions analogy | NICE-TO-HAVE | No action |
| 6.8 | Showcase pages more rigid | NICE-TO-HAVE | No action |
| 6.13 | Soul vs Scales tension | NICE-TO-HAVE | No action |
| 6.16 | n=1 weakness | NICE-TO-HAVE | No action |
| 7.2 | Channel manifestation examples (70+) | NICE-TO-HAVE | No action |
| 7.6 | CD-006 33/35, DD-006 24/35 | NICE-TO-HAVE | No action |
| 7.13 | 6 anti-patterns | NICE-TO-HAVE | No action |
| 7.16 | Semantic Resonance Score | NICE-TO-HAVE | No action |

**Count: 4 IMPORTANT + 30 NICE-TO-HAVE = 34 total MISSING**

---

## CONSOLIDATED INSERTION SPEC

### CRITICAL insertions: 0
No finding is CRITICAL-missing. The core scale research principles are all in the prompt.

### IMPORTANT insertions: 8

#### I-01: Semantic density proportionality rule (C-19)
**Source:** Findings 1.6, 7.9 (invocation C-07)
**Insert after:** B3 line 188 (after C-18)
```
C-19. Semantic density proportionality: the most important content block MUST use more
      mechanisms than any supplementary content block. Critical > Standard > Supplementary.
      Verify: count mechanisms on most-important vs least-important elements.
```

#### I-02: Channel density per transition rule (SC-09)
**Source:** Findings 2.2, 7.9 (invocation C-01)
**Insert after:** B5 line 215 (after SC-08)
```
SC-09. Channel density per transition: every section boundary must deploy >= 3 channels
       simultaneously (of: chromatic, typographic, spatial, structural, density, rhythmic).
       Verify: at each section break, count changed properties. Count >= 3 = PASS.
```

#### I-03: Chromatic-density alignment rule (SC-10)
**Source:** Finding 7.9 (invocation C-02)
**Insert after:** SC-09 (proposed above)
```
SC-10. Chromatic-density alignment: zone-sparse sections (warm backgrounds) MUST have
       LESS content per viewport than zone-dense sections (neutral/cool backgrounds).
       Warm < Neutral = PASS.
```

#### I-04: Scale gaps warning
**Source:** Finding 5.8
**Insert after:** A3 line 45 (after "NEVER target 6+ scales.")
```
Scale gaps are worse than missing scales. If targeting 4 scales, ensure continuous coverage
(Navigation > Page > Section > Component). 2 continuous scales > 4 scales with gaps.
```

#### I-05: Channel-scale priority (80/20)
**Source:** Finding 7.7
**Insert after:** A3, after the scale gaps text (I-04 above)
```
CHANNEL-SCALE PRIORITY (fill highest-impact cells FIRST):
1. Page-Spatial (squint test, VETO). 2. Component-Structural. 3. Section-Density. 4. Page-Chromatic.
Leave Character-scale channels and Navigation-scale density for LAST or empty.
```

#### I-06: Builder channel self-check
**Source:** Finding 7.10
**Insert after:** B10 line 291 (after existing self-check items, before SendMessage)
```
CHANNEL SELF-CHECK:
[ ] Transition 1 (early): >= 3 channels shift?
[ ] Transition 2 (middle): >= 3 channels shift?
[ ] Transition 3 (late): >= 3 channels shift?
[ ] Warmest background has least content per viewport?
[ ] Heaviest border on most important content?
```

#### I-07: Agent-channel ownership
**Source:** Finding 7.11
**Insert after:** C1 line 324 (after agent roster)
```
CHANNEL OWNERSHIP:
  Metaphor Agent:       Ch7 Intentional
  Content Architect:    Ch5 Density + Ch6 Rhythmic
  Planner:              Ch3 Spatial + Ch4 Structural (integrates all)
  Mechanism Builder:    Ch1 Chromatic + Ch2 Typographic (implements only)
  Embedded Auditor:     ALL 7 (validates SC rules)
```

#### I-08: Spatial Confidence Index formula (S-16)
**Source:** Finding 7.14 (SCI formula)
**Insert after:** B1 line 140 (after S-15)
```
S-16. Spatial Confidence Index: SCI = 1 - (max_void_height / total_page_height).
      Target: SCI >= 0.85. Warning: SCI < 0.70. VETO: SCI < 0.60 = DO NOT SHIP.
```

---

## ADDITIONAL NOTE: CSS line count warning

**Source:** Finding 3.5
**Insert into:** B10 self-check (after line 291)
```
[ ] CSS line count <= 800       (above 800, composition quality degrades)
```

This is borderline IMPORTANT/NICE-TO-HAVE. Including it in the self-check is low-cost.

---

## FINAL STATISTICS

| Category | Count |
|----------|-------|
| Total findings catalogued | 87 |
| FULLY COVERED in prompt | 40 (46%) |
| PARTIALLY COVERED | 13 (15%) |
| MISSING - IMPORTANT | 4 (5%) |
| MISSING - NICE-TO-HAVE | 30 (34%) |
| CRITICAL gaps | 0 |
| Proposed insertions | 8 IMPORTANT + 1 borderline |
| Estimated lines added | ~45 lines |
| Prompt length impact | 248 -> ~293 lines (Sections A-D) |

## VERDICT

The enriched master execution prompt has **strong coverage** of scale research findings. All CRITICAL principles (anti-scale model, Alexander/Salingaros formula, 5-scale ceiling, channel-not-levels, spatial confidence veto, restraint ratio, signal-to-silence, intentionality dimensions) are present and operationally encoded as binary rules.

The 8 IMPORTANT insertions address operational gaps that could affect builder behavior:
- Channel density per transition (SC-09, SC-10) -- prevents the "all transitions are spacing-only" failure
- Semantic density proportionality (C-19) -- prevents "trivial content gets same treatment as critical"
- Scale gaps warning (I-04) -- prevents 4-scale targeting with holes
- Channel-scale priority (I-05) -- directs builder attention to highest-impact cells
- Channel self-check (I-06) -- catches mono-channel deployment
- Agent-channel ownership (I-07) -- assigns responsibility for multi-channel coordination
- SCI formula (S-16) -- provides single-number spatial confidence gate

The 30 NICE-TO-HAVE items are correctly excluded -- they are theoretical framing, cross-domain analogies, specific numerical data points, or reference material that belongs in the library, not the execution spec.

---

**END ULTRA-DEEP SCALE RESEARCH CROSS-REFERENCE**
