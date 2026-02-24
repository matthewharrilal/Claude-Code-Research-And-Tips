# Phase 3B Analysis: 9 PA Auditors
## Pipeline v3 Retrospective — Deep Analysis

**Analyst:** Opus 4.6
**Date:** 2026-02-23
**Scope:** All 9 PA auditor reports in `_pa/` directory, cross-referenced against artifact-pa-protocol.md (1,004 lines) and MANIFEST.md Phase 3B instructions
**Final Scores:** A=23/25, B=22/25, C=22/25, D=20/25, E=24/25, F=22/25, G=23/25, H=19/25, I=3/4 (Integrative)

---

## 1. QUESTION GRANULARITY ANALYSIS

### 1.1 Questions That Produced the Most Actionable Insights

**TOP TIER — Highly actionable, precise findings:**

| Question | Auditor | Why Actionable |
|----------|---------|---------------|
| PA-07 (zone boundaries perceptible?) | B | Produced specific per-boundary RGB delta table with perceptibility verdict for each. Directly identified Z4->Z5 as weakest (17 RGB, 1px border). This is the kind of output that leads to a one-line CSS fix. |
| PA-15 (multi-channel shifts at boundaries) | C | Produced the most rigorous analysis in the entire audit — a 5-channel x 7-boundary matrix with specific CSS evidence for each cell. The "4.64 channels per boundary average" is a precise compositional metric. |
| PA-22 (mechanism count) | D | Enumerated 17-18 specific mechanisms with CSS line references and category coverage (5/5 categories). Directly verifiable. |
| PA-35 (distinct typographic treatments) | G | Enumerated 36 unique typographic combinations in a structured table. This is the most thorough typographic inventory I have seen in any PA report — far exceeding what the question asked for. |
| PA-34 (accessibility basics) | F | Produced a 10-point accessibility audit with specific line numbers for skip link, landmarks, heading hierarchy, ARIA labels, focus indicators, reduced motion, sr-only, selection colors, lang attribute, viewport meta. Highly actionable. |
| PA-25 (design serves content?) | E | Produced 5 specific evidence points for content-form alignment, each with structural reasoning. The "factory metaphor is native to content" finding is the strongest single insight across all 9 reports. |

**MID TIER — Useful but less precise:**

| Question | Auditor | Limitation |
|----------|---------|-----------|
| PA-17 (density arc) | C | Good narrative of the SPARSE->MODERATE->DENSE->MODERATE->SURPRISE->RELEASE pattern, but "intentional" is hard to falsify. Every arc can be rationalized post-hoc. |
| PA-20/PA-21 (metaphor identification/extension) | D | Strong qualitative analysis but partially subjective. Whether serif italic headings "undercut industrial grittiness" is a judgment call, not a measurement. |
| PA-43 (visual rhythm) | H | Identified the wave pattern but the analysis is essentially a restatement of the density arc from PA-17. These two questions overlap significantly. |
| PA-23 (rich or flat?) | D | The RICH verdict is well-supported but the question is inherently binary — it doesn't capture the gradient between "rich" and "DESIGNED-level rich." |

**BOTTOM TIER — Too broad, produced generic insights:**

| Question | Auditor | Problem |
|----------|---------|---------|
| PA-20 (personality in three words) | G | NOT ASKED — this question was assigned to Auditor G per protocol but does not appear in the report. Instead G focused on typography. This is a question reassignment issue, not a granularity issue. |
| PA-50/PA-51/PA-52/PA-53 (first impression, scroll, ship, weakness) | I | These Integrative questions are valuable in aggregate but individually too open-ended. PA-50 ("first 3 seconds") and PA-51 ("scroll experience") both produced narrative accounts that overlap heavily. |
| PA-29 (header text styles fighting?) | B | NOT ANSWERED by Auditor B. This question was assigned per protocol but does not appear in the report. Auditor B answered different questions (PA-07 through PA-11). |

### 1.2 Question Granularity Verdict

**The most actionable questions are MEASUREMENT questions** — ones that ask "count X," "identify Y at each boundary," "enumerate Z." These produce structured data that can be compared across builds.

**The least actionable questions are IMPRESSION questions** — ones that ask "does this feel like..." or "describe in three words." These produce narrative accounts that vary by auditor temperament and are hard to compare across builds.

**Recommendation:** For each PA question, tag it as MEASUREMENT (produces structured data) or IMPRESSION (produces qualitative narrative). Weight MEASUREMENT questions higher in scoring. Ensure every auditor has at least 2 MEASUREMENT questions.

---

## 2. GAP ANALYSIS — Missing Questions

### 2.1 Gaps Identified from Cross-Auditor Patterns

**GAP 1: CSS Budget Distribution**
Multiple auditors noted mechanism count (17-18) but NO question asks: "What percentage of CSS lines are spent on PERCEPTIBLE vs IMPERCEPTIBLE effects?" The Flagship experiment failure was caused by 22% of CSS on sub-perceptual micro-typography. Gate GR-22 checks this programmatically but no PA question asks the auditor to verify perceptibility of claimed CSS richness.

**Proposed question:**
> **PA-71:** "Pick the 3 most complex CSS treatments on this page (e.g., letter-spacing variations, background gradients, border patterns). For each, can you SEE the effect without inspecting code? If not, flag as CSS budget waste."
> Auditor: B (Perception)

**GAP 2: Second-Half Structural Variety**
Auditors C, D, H, and I all independently flagged that the page "flattens in the second half" (Zones 4-5-6). But no question specifically targets STRUCTURAL VARIETY across halves. PA-52 (each third has a designed moment) is close but asks about presence, not variety.

**Proposed question:**
> **PA-72:** "Compare the first half and second half of the page. Does the second half introduce ANY structural layout that does not appear in the first half? (e.g., new grid layout, new component type, asymmetric column break). Name it or flag the absence."
> Auditor: E (Grid + Layout)

**GAP 3: Zone Template Uniformity**
Auditor D explicitly identified: "The zones all use the same structural template: zone indicator -> h2 -> content." Auditor I echoed: "No spatial surprise beyond the inversion block." No question specifically asks about zone-to-zone STRUCTURAL TEMPLATE variation.

**Proposed question:**
> **PA-73:** "Look at the opening pattern of each zone (first 200px). Do they all follow the same template (label -> heading -> paragraph), or do some zones open with a different structural element (diagram, grid, image, full-width component)? Count unique opening patterns."
> Auditor: E (Grid + Layout)

**GAP 4: Color Temperature Consistency**
Auditor A flagged cold blue (#4A90D9) and purple (#7C3AED) accents in a warm palette. Auditor I flagged the "warm cream zone problem." But no question specifically measures COLOR TEMPERATURE COHERENCE — whether ALL colors share the same warm/cool bias.

**Proposed question:**
> **PA-74:** "Ignore the dominant background colors. Look at accent colors (borders, labels, highlights, callout tints). Do they all feel like they belong to the same color family (warm or cool), or are some accents fighting the palette?"
> Auditor: G (Metaphor + Ideology) or A (Soul)

**GAP 5: Hover/Interaction Consistency**
Auditor F (Responsive) noted accessibility details but did not evaluate interaction patterns. The page has table hover states, accordion expand/collapse, link hover transitions, and collapsible details — but no question asks whether these INTERACTIVE behaviors are consistent and deliberate.

**Proposed question:**
> **PA-75:** "Interact with 3 different hoverable/clickable elements (table rows, links, accordions). Do they all use the same timing, the same type of visual feedback, and the same color logic? Or does each feel like it was styled independently?"
> Auditor: F (Consistency + Rhythm)

**GAP 6: Code Block Interior Quality**
Multiple auditors noted the dark code blocks as rhythm-creating elements. But no question evaluates code block INTERIOR quality — whether syntax highlighting is consistent, whether code formatting is readable, whether the code itself is well-presented.

**Proposed question:**
> **PA-76:** "Pick 3 code blocks. Is the syntax highlighting consistent between them (same colors for same token types)? Is the code formatted for readability (line length, indentation)? Do all code blocks use the same dark background and font size, or are some inconsistent?"
> Auditor: B (Readability + Typography)

### 2.2 Gap Summary

| Gap | What's Missing | Impact | Proposed Question |
|-----|---------------|--------|-------------------|
| CSS Budget Distribution | Perceptibility of CSS investment | HIGH — prevents Flagship failure mode | PA-71 |
| Second-Half Variety | Structural asymmetry detection | MEDIUM — 4/9 auditors flagged this independently | PA-72 |
| Zone Template Uniformity | Opening pattern variation | MEDIUM — template repetition is a COMPOSED->DESIGNED barrier | PA-73 |
| Color Temperature Coherence | Accent color family analysis | MEDIUM — palette violations flagged but not systematically | PA-74 |
| Interaction Consistency | Hover/click behavior audit | LOW-MEDIUM — behavioral mechanisms are underexamined | PA-75 |
| Code Block Interior | Code presentation quality | LOW — but code blocks are ~15% of page visual area | PA-76 |

---

## 3. AUDITOR ASSIGNMENT ANALYSIS

### 3.1 Actual vs Protocol Question Assignments

**CRITICAL FINDING: Massive question reassignment occurred.** The PA protocol assigns 65 specific questions across 9 auditors. The actual reports show significant deviation from these assignments.

| Auditor | Protocol Assignment | Actually Answered | Match |
|---------|-------------------|-------------------|-------|
| **A (Soul)** | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 | PA-01 (soul: sharp surfaces), PA-02 (container), PA-03 (palette), PA-04 (font trinity), PA-06 (zero decorative) | **MISMATCH — answered soul constraint checks, not PA protocol questions** |
| **B (Perception)** | PA-02, PA-06, PA-07, PA-08, PA-29, PA-56 | PA-07, PA-08, PA-09, PA-10, PA-11 | **PARTIAL MISMATCH — answered perception thresholds, dropped PA-02/06/29/56, added PA-09/10/11** |
| **C (Coherence)** | PA-09-11, PA-30-33, PA-50-53, PA-55, PA-64, PA-66 (14 questions) | PA-15 (multi-channel), PA-16 (zone count), PA-17 (density arc), PA-18 (zone-adapted components), PA-19 (crescendo) | **MAJOR MISMATCH — answered 5 custom questions instead of assigned 14** |
| **D (Metaphor)** | PA-12, PA-13, PA-34-36, PA-69, PA-70, PA-62 (8 questions) | PA-20, PA-21, PA-22, PA-23, PA-24 | **MAJOR MISMATCH — answered metaphor/richness questions, not flow/pacing** |
| **E (Content)** | PA-14, PA-15, PA-37-39, PA-63 (6 questions) | PA-25, PA-26, PA-27, PA-28, PA-29 | **MAJOR MISMATCH — answered content-form questions, not grid/layout** |
| **F (Responsive)** | PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 (6 questions) | PA-30, PA-31, PA-32, PA-33, PA-34 | **MAJOR MISMATCH — answered responsive+accessibility questions, not consistency/rhythm** |
| **G (Typography)** | PA-18-20, PA-42-44, PA-68 (7 questions) | PA-35, PA-36, PA-37, PA-38, PA-39 | **MAJOR MISMATCH — answered typography questions, not metaphor/ideology** |
| **H (Spatial)** | PA-21-23, PA-46, PA-47 (5 questions) | PA-40, PA-41, PA-42, PA-43, PA-44 | **MAJOR MISMATCH — answered spatial questions, not responsiveness** |
| **I (Integrative)** | PA-24-28, PA-48 (6 questions) | PA-05, PA-50, PA-51, PA-52, PA-53, PA-54 | **PARTIAL MATCH — PA-05 is correct per integrative role, but others are custom** |

**VERDICT: 0 of 9 auditors followed the exact protocol question assignments.** However, the auditor ROLES (Soul, Perception, Coherence, Metaphor, Content-Form, Responsive, Typography, Spatial, Integrative) were followed correctly — each auditor answered questions appropriate to their thematic role. The disconnect is between the PA question ID numbering in the protocol and what was actually assigned by the orchestrator.

**Root Cause Hypothesis:** The orchestrator likely composed auditor prompts by ROLE DESCRIPTION rather than by copying the exact PA question IDs from the protocol. The auditors received "You are the Perception Auditor — evaluate zone boundary perceptibility, whitespace voids, spacing deliberateness, typography variety, and border hierarchy" rather than "Answer PA-02, PA-06, PA-07, PA-08, PA-29, PA-56."

**Impact Assessment:**
- **POSITIVE:** The thematic coherence within each auditor's report is strong. Each auditor answered questions relevant to their expertise area.
- **NEGATIVE:** 65 protocol questions exist but only ~45 were actually answered. Approximately 20 questions were NEVER asked, including all Tier 5 questions (PA-60 through PA-68), void prevention (PA-50-53), sub-perceptual CSS detection (PA-55-56), and pipeline integration (PA-69-70).
- **CRITICAL:** PA-05 was answered by Auditor I (Integrative) rather than Auditor A (Soul). The protocol assigns PA-05 to Auditor A, but the Integrative auditor is the one who actually scored it. This is arguably correct (the Integrative role is designed to produce the PA-05 score), but it means Auditor A never gave a PA-05 impression.

### 3.2 Questions NEVER Answered (Coverage Gap)

The following protocol questions were not answered by ANY auditor:

**Tier 1 (Critical — should always be asked):**
- PA-01 ("What's the first thing that bothers you?") — Auditor A answered it as "sharp surfaces" (soul check), not as a genuine first-impression bother
- PA-03 ("One designer or three?") — Not explicitly answered
- PA-04 ("Where does your eye go first?") — Not explicitly answered

**Tier 2:**
- PA-06 ("Words stacking vertically?")
- PA-08 ("Lean in or squint?")
- PA-29 ("Header text styles fighting?")
- PA-30 ("Designed for this width or centered in extra space?")
- PA-31 ("Surrounding space designed or leftover?")
- PA-32 ("Visual weight distributed purposefully?")
- PA-33 ("Largest empty space: silence or dropped signal?")
- PA-56 ("Can you FEEL the tracking difference?")

**Tier 3:**
- PA-46 ("At 768px, reorganization SENSE or just shrunk?")
- PA-47 ("At what scroll position 'seen this before'?")
- PA-48 ("First or last choice among 5 options?")

**Tier 5 (ALL NINE MISSING):**
- PA-60 through PA-68: Design moment density, multi-voice composition, transition variation, fractal zoom, restraint as expression, compositional voice, negative space variety, novelty beyond competence, metaphor spatial coverage — NONE of these were asked.

**This means the Tier 5 score (compositional depth detection) cannot be calculated.** The combined verdict matrix (PA-05 x Tier 5) was not populated.

### 3.3 Should Themes Be Reorganized?

**YES — but the actual execution suggests a BETTER thematic grouping than the protocol specifies.** Here is what actually happened vs what was specified:

| Auditor | Protocol Role | Actual Role | Better Fit? |
|---------|--------------|-------------|-------------|
| A | Impression + Emotion | Soul Constraint Verification | WORSE — soul checks are gate-runner territory, not PA |
| B | Readability + Typography | Perception Thresholds | BETTER — perception thresholds are more concrete and measurable |
| C | Spatial + Proportion (14 questions!) | Multi-Coherence Analysis | BETTER — multi-coherence is the strongest report in the set |
| D | Flow + Pacing | Metaphor + Richness | NEUTRAL — the protocol already has a metaphor auditor (G) |
| E | Grid + Layout | Content-Form Fit | BETTER — content-form is a holistic assessment suited to one auditor |
| F | Consistency + Rhythm | Responsive + Accessibility | BETTER — accessibility is a concrete, measurable domain |
| G | Metaphor + Ideology | Typography Depth | BETTER — G produced the deepest typography audit |
| H | Responsiveness | Spatial Composition | NEUTRAL — the reassignment is lateral |
| I | Cross-Page + Adversarial | Integrative Assessment | CORRECT — this IS the integrative role |

**Key insight:** The protocol assigns Auditor C **14 questions** while Auditor H gets only **5 questions**. This is a severe load imbalance. Auditor C's actual report (5 multi-coherence questions) was more focused and higher quality than a 14-question assignment would have produced.

**Recommended reorganization (next section).**

---

## 4. AUDITOR CONTEXT ANALYSIS

### 4.1 What Context Was Actually Provided?

Based on report content, auditors received:
1. Screenshots (1440px, 1024px, 768px — full-page + cold-look)
2. The HTML source file (output.html) — multiple auditors reference specific CSS line numbers
3. Gate runner results — Auditors A and B cite specific gate pass/fail results
4. Their role description and question set

### 4.2 Fresh-Eyes Principle Compliance

**VIOLATION: Multiple auditors had access to source code AND gate results.**

The PA protocol (Part 13) states: "PA auditors MUST be context-starved. Do NOT provide mechanism counts, pattern names, build plan details, prior experiment results."

**Evidence of violation:**
- Auditor A references "line 27, `--border-radius: 0;`", "line 160", "line 174" — clearly reading CSS source
- Auditor A cites "Gate SC-03: PASS", "Gate PT-05: PASS" — has gate runner results
- Auditor B references "gate report" for RGB deltas — has gate runner results
- Auditor C references ".zone-intake .callout" CSS selectors and exact padding values
- Auditor D references "lines 843-877 CSS", exact CSS custom property names
- Auditor E references "yegge-gas-town-extraction.md (first 500 lines + content map)" — has content map
- Auditor F references specific CSS line numbers (133, 281, 438, etc.)
- Auditor G references "CSS lines 107-1273"
- Auditor H references CSS variables and exact spacing values from source

**VERDICT: 9/9 auditors had access to source code. At least 2 (A, B) had gate results. At least 1 (E) had the content map.** The fresh-eyes principle was NOT enforced.

**Impact Assessment:** This is a SIGNIFICANT protocol deviation. However, the reports are genuinely perceptual in character — auditors describe what they SEE and FEEL, not just what the CSS says. The source code access was used to SUPPORT perceptual findings with evidence, not to generate findings from code alone. The gate result leakage is more concerning because it could create anchoring bias (e.g., knowing "SC-03 PASS" before visually evaluating container discipline).

### 4.3 What Additional Context Would Improve Report Quality?

**Context that SHOULD be provided (does not violate fresh-eyes):**

1. **Explicit scoring rubric per question.** Currently, auditors use 5-point or 4-point scales inconsistently. A standardized rubric (what does 3/5 mean vs 4/5 for THIS question?) would reduce inter-auditor scoring variance.

2. **Reference screenshots from prior builds.** Showing "this is what 2/4 looks like" and "this is what 4/4 looks like" from CD-006 and the Flagship experiment would calibrate perceptual judgment. This does not violate fresh-eyes because it provides QUALITY CALIBRATION, not build intent.

3. **Explicit instruction to answer ALL assigned questions.** Multiple auditors answered 5 questions instead of their full assignment. A prompt template that lists each question as a mandatory section heading would prevent this.

**Context that MUST NOT be provided (fresh-eyes violation):**

1. Source code / CSS — auditors should judge ONLY from screenshots
2. Gate runner results — creates anchoring bias
3. Content map / brief — reveals build intent
4. Mechanism count expectations — creates confirmation bias
5. Other auditors' reports — prevents independent assessment

---

## 5. CONTRADICTION ANALYSIS

### 5.1 Direct Contradictions Between Auditors

**CONTRADICTION 1: Zone 4->5 Boundary Significance**

| Auditor | Claim | Score Impact |
|---------|-------|-------------|
| B | "Weakest boundary... 17 RGB delta, just above threshold. Perceptible but requires attention." | -1 on PA-07 |
| C | "Zone 4->5 boundary is the subtlest boundary on the page" | -1 on PA-16 |
| D | "The inversion block rescues Zone 5's identity" | Neutral — acknowledges weakness but credits surprise |
| H | "Zones 4 and 5 (Archive and Output) are nearly identical spatially" | -1 on PA-41 |
| I | "The transition from Zone 4 to Zone 5 (Archive to Output) is the weakest boundary" | Used as primary evidence against DESIGNED |

**Verdict:** 5/9 auditors independently flagged Z4->Z5 as the weakest boundary. This is the STRONGEST cross-auditor consensus in the entire audit. The convergence is remarkably specific — all five identify the same boundary, cite similar evidence (background delta, border weight, spatial similarity). This is a genuine finding, not noise.

**CONTRADICTION 2: Warm Cream Zone Problem — How Severe?**

| Auditor | Claim |
|---------|-------|
| A | "MINOR VIOLATIONS — pure white zone bg, cold blue/purple accents" (3/5) |
| B | Z4->Z5 is "near-threshold" but "content shift provides semantic reinforcement" |
| I | "3 of the 6 zones share a visual identity" — this is "the primary barrier between COMPOSED and DESIGNED" |

Auditor A rates the palette issue 3/5 (minor), while Auditor I frames the same observation as THE primary compositional weakness. The discrepancy is scope: A evaluates palette COMPLIANCE (do colors match the spec?), while I evaluates palette EFFECTIVENESS (do colors create distinct zone identities?).

**CONTRADICTION 3: Typography Richness**

| Auditor | Claim |
|---------|-------|
| G | "22+ perceptually distinct treatments" — 5/5, "genuinely rich type palette" |
| I | "Typography variation is present but restrained... body text stays uniform" |

G evaluates the TYPE SYSTEM as a whole (all 36 unique combinations), while I evaluates PERCEPTUAL IMPACT of typography in reading flow. Both can be true simultaneously: the system is rich, but the richness is concentrated in labels/meta/headings while body text is relatively uniform.

**CONTRADICTION 4: Spatial Quality**

| Auditor | Claim |
|---------|-------|
| B | "No whitespace voids detected" — 5/5 |
| H | "Approximately 200-300px of blank background color trailing after the footer" — 3/5 on PA-42 |

B evaluated the INTER-ZONE spaces (all 0px stacked gaps, no voids). H evaluated the POST-FOOTER trailing space. These are different regions — B's assessment of zone interiors is correct while H's assessment of page termination is also correct. The protocol should clarify the scope of "whitespace void."

### 5.2 Contradiction Assessment

| Contradiction | Severity | Resolution |
|--------------|----------|------------|
| Z4->Z5 boundary | LOW (agreement, not contradiction) | Convergent finding — all auditors agree |
| Warm cream severity | MEDIUM | Frame as complementary perspectives (compliance vs effectiveness) |
| Typography richness | LOW | Both correct at different scales (system vs reading experience) |
| Spatial quality | MEDIUM | Clarify void scope: zone interiors vs page termination |

---

## 6. QUALITY VARIATION BETWEEN AUDITORS

### 6.1 Report Quality Ranking

**TIER 1 — Outstanding Reports:**

1. **Auditor C (Multi-Coherence):** The best report in the set. The 5-channel x 7-boundary matrix is a systematic, falsifiable analysis that could be replicated by another auditor. Every claim is evidenced with CSS selectors AND perceptual description. The distinction between "channels shifted independently" vs "channels shifted in coordinated ways" elevates the analysis beyond enumeration to compositional assessment. Lines: ~200, signal-to-noise: 95%.

2. **Auditor G (Typography):** The 36-treatment enumeration table is extraordinary. Each treatment is specified with family, size, weight, style, spacing, and context. The hierarchy analysis identifies 7 levels with size steps. The label/caption system analysis ("system voice") identifies a design pattern that no other auditor noticed. Lines: ~220, signal-to-noise: 90%.

3. **Auditor E (Content-Form):** The strongest qualitative report. Every claim is supported by specific structural reasoning ("the factory metaphor is native to content"). The reading flow analysis (Orient -> Buy-in -> Specify -> Memory -> Transform -> Implement) is a useful abstraction that captures the page's narrative arc. The "respects the reader" analysis identifies specific design decisions that serve the audience. Lines: ~155, signal-to-noise: 90%.

**TIER 2 — Solid Reports:**

4. **Auditor B (Perception):** Clean, structured, per-boundary analysis with specific RGB deltas. The S-09 stacking check and zone-adapted callout padding analysis add value beyond the basic threshold check. The weakness is that this report leans heavily on gate results for evidence rather than pure perceptual observation.

5. **Auditor D (Metaphor):** Strong mechanism enumeration and metaphor analysis. The "STRUCTURAL vs ANNOUNCED" distinction and the specific evidence for each (border hierarchy, density compression, zone backgrounds) is well-organized. Slightly overlaps with C's boundary analysis.

6. **Auditor F (Responsive):** Thorough accessibility audit with specific line numbers and HTML elements. The responsive analysis is competent but the single-breakpoint observation is repeated across multiple questions.

**TIER 3 — Adequate Reports:**

7. **Auditor A (Soul):** Rigorous soul constraint verification, but this is essentially a GATE-RUNNER task performed by a PA auditor. The per-constraint scoring (sharp surfaces, container, palette, font trinity, decorative elements) duplicates what programmatic gates already check. The cold blue/purple accent finding IS genuinely perceptual, but the rest could be automated.

8. **Auditor H (Spatial):** Identifies real issues (post-footer void, Z4-Z5 similarity, dark block stacking in Z3) but the analysis is less structured than C or G. The rhythm analysis (PA-43) largely restates C's density arc finding. At 19/25, H is the lowest-scoring auditor, which may reflect the genuine spatial weaknesses but may also reflect less sharp analysis.

9. **Auditor I (Integrative):** The PA-05 score (3/4 COMPOSED) is well-reasoned with 5 positive and 5 negative evidence points. The "single biggest weakness" and "single biggest strength" are useful synthesizing devices. However, the report is shorter than others (~100 lines) and the scroll experience (PA-51) largely summarizes what other auditors found rather than adding unique perspective. The Integrative role is supposed to catch what NO individual auditor catches — but most of I's findings are echoes of C, D, and H.

### 6.2 Report Length and Density

| Auditor | Approx Lines | Questions Answered | Lines/Question | Unique Insights |
|---------|-------------|-------------------|----------------|-----------------|
| A (Soul) | 117 | 5 | 23 | 1 (cold accent colors) |
| B (Perception) | 142 | 5 | 28 | 2 (boundary reinforcement mechanism, S-09 stacking) |
| C (Coherence) | 199 | 5 | 40 | 4 (channel matrix, coordinated shifts, zone-specific adaptation, crescendo analysis) |
| D (Metaphor) | 165 | 5 | 33 | 3 (mechanism enumeration, structural vs announced, border hierarchy as org chart) |
| E (Content-Form) | 155 | 5 | 31 | 3 (content-form alignment, reading flow taxonomy, reader respect analysis) |
| F (Responsive) | 163 | 5 | 33 | 2 (comprehensive accessibility, single-breakpoint observation) |
| G (Typography) | 220 | 5 | 44 | 4 (36-treatment inventory, system voice, zone-adaptive body text, hierarchy analysis) |
| H (Spatial) | 116 | 5 | 23 | 2 (post-footer void, dark block stacking) |
| I (Integrative) | 99 | 6 | 17 | 1 (synthesized PA-05 verdict) |

**Key pattern:** Report depth (lines/question) correlates with insight quality. Auditors C and G produced the richest reports because they spent ~40 lines per question, allowing room for structured evidence tables. Auditor I at 17 lines/question produced the thinnest analysis.

---

## 7. SCALE AND SPECIALIZATION ANALYSIS

### 7.1 Should There Be More or Fewer Auditors?

**Current:** 9 specialized + 1 integrative = 10 agents
**Protocol:** 9 specialized + 1 integrative + 1 weaver = 11 agents

**Argument for FEWER (7-8):**

- Auditor A (Soul) duplicates gate-runner checks. Soul constraint verification is a BINARY task (border-radius: 0 or not) that the gate runner already performs. The one genuinely perceptual finding (cold accent colors) could be absorbed into Auditor G's palette assessment.
- Auditors C and H have significant overlap. C evaluates multi-coherence (channel shifts at boundaries, density arc) and H evaluates spatial composition (spacing consistency, gaps, rhythm, negative space). The density arc finding appears in BOTH reports with nearly identical content.
- The Integrative auditor (I) adds little unique value when other auditors already provide thorough analysis. I's report is a synthesis of C, D, and H rather than a fresh perspective.

**Argument for SAME (9):**

- The 5/9 convergence on Z4->Z5 weakness ONLY emerged because 9 independent perspectives evaluated the same page. With 5 auditors, this convergence might be 2/5, which is statistically weaker.
- Parallel execution means adding auditors adds ~0 wall-clock time. The cost is tokens, not time.
- The BREADTH of 9 perspectives catches cross-cutting issues that any individual misses.

**Argument for MORE (11-12):**

- The 20+ UNANSWERED protocol questions suggest the current 9 auditors cannot cover 65 questions adequately. Either reduce question count or add auditors.
- No auditor specifically evaluates BEHAVIORAL mechanisms (hover states, animations, interactions). A dedicated Interaction Auditor would fill this gap.
- The Tier 5 questions (PA-60 through PA-68) were entirely skipped. A dedicated Compositional Depth Auditor could handle all 9.

### 7.2 Recommendation: 8 Specialized + 1 Compositional + 1 Integrative + 1 Weaver = 11

**Merge Auditor A into Gate Runner.** Soul constraints are binary — remove them from PA entirely. The one perceptual soul question (color temperature coherence) moves to the Metaphor auditor.

**Merge H's unique content into C.** C already handles spatial proportion and density arc. H's unique contributions (post-footer void, dark block stacking, negative space) can become additional questions for C.

**Add Auditor J: Compositional Depth.** Handles all 9 Tier 5 questions (PA-60 through PA-68). This is the DESIGNED-detection battery that was entirely missing from this execution.

**Revised roster:**

| Auditor | Role | Questions | Count |
|---------|------|-----------|-------|
| B | Perception + Readability | PA-02, 06-08, 29, 56, 71, 76 | 8 |
| C | Spatial + Multi-Coherence | PA-09-11, 15-17, 30-33, 40-44, 50-53, 55 | 17 (but many are quick measurements) |
| D | Flow + Pacing | PA-12-13, 34-36, 69-70 | 7 |
| E | Grid + Content-Form | PA-14-15, 25-28, 37-39, 63, 72-73 | 12 |
| F | Responsive + Consistency | PA-16, 21-23, 30-31, 34, 40-41, 46-47, 75 | 11 |
| G | Metaphor + Typography | PA-18-20, 35-39, 42-44, 68, 74 | 12 |
| I | Cross-Page + Adversarial | PA-24-25, 26-28, 48 | 6 |
| **J (NEW)** | Compositional Depth | PA-60-68 (all Tier 5) | 9 |
| **Integrative** | Gestalt + PA-05 | PA-01, 03-05, 45, 50-54 | 10 |
| **Weaver** | Verdict synthesis | All reports | N/A |

This is 8 specialized + 1 depth + 1 integrative + 1 weaver = 11 agents, matching the protocol's intended count while better allocating questions.

---

## 8. PROMPT TEMPLATE CODIFICATION

### 8.1 Current State

No standardized prompt templates exist. The orchestrator composed prompts ad-hoc, resulting in:
- Different question numbering than the protocol
- Source code and gate results leaking into auditor context
- Auditors answering 5 questions instead of 6-14
- Inconsistent scoring scales (5-point vs 4-point)

### 8.2 Recommended Prompt Template (Universal)

```
# PA Auditor [LETTER]: [ROLE NAME]
Date: [DATE]
Page: [PAGE NAME]

## Your Role
You are a [ROLE DESCRIPTION]. You evaluate ONLY what you can SEE
in the provided screenshots. You have ZERO knowledge of the build
process, design intent, or technical implementation.

## What You Receive
- Screenshots at 3 viewports (1440px, 1024px, 768px):
  cold-look + scroll-through
- This question set

## What You Do NOT Receive (and must not infer)
- Source code or CSS
- Gate runner results
- Content map or brief
- Other auditors' reports
- Mechanism count expectations

## Scoring Scale
For each question, score 1-5:
- 5/5 = Exemplary — no improvements visible
- 4/5 = Strong — one minor concern
- 3/5 = Adequate — 2-3 concerns, none blocking
- 2/5 = Weak — significant issues visible
- 1/5 = Failing — fundamental problem

## Your Questions (ANSWER ALL — each is a required section)

### Q1: [PA-XX] [Question text]
[Specific scoring criteria for this question]

### Q2: [PA-XX] [Question text]
[Specific scoring criteria for this question]

[... one section per question ...]

## Output Requirements
1. Answer EVERY question above as a separate section
2. Use PERCEPTUAL language ("the background shifts from warm cream
   to cooler gray") not CSS language ("background-color changes
   from #FEF9F5 to #F0EBE3")
3. Point to specific scroll positions or regions, not line numbers
4. Score each question on the 1-5 scale
5. End with a Summary Table and overall score
```

### 8.3 Role-Specific Prompt Additions

**Auditor C (Spatial + Multi-Coherence) — Additional instruction:**
```
For multi-coherence questions, build a CHANNEL x BOUNDARY matrix.
At each zone boundary, evaluate whether Background, Typography,
Spacing, Borders, and Components shift. Count channels shifted.
Present as a structured table.
```

**Auditor G (Metaphor + Typography) — Additional instruction:**
```
For typography questions, enumerate ALL distinct typographic
treatments visible on the page. A "treatment" is a unique
combination of font family + size + weight + style + spacing +
color context. Present as a structured table.
```

**Auditor J (Compositional Depth) — Additional instruction:**
```
These 9 questions detect compositional depth ABOVE the "designed"
threshold. Answer with YES/NO first, then explain.
For YES: name the specific element, technique, or pattern.
For NO: explain what would need to exist for YES.
Your total YES count determines the Tier 5 score.
```

**Integrative Auditor — Additional instruction:**
```
You are the LAST auditor to run. You receive ALL 9 specialist
reports. Your job is to:
1. Identify patterns that NO specialist caught
2. Identify contradictions BETWEEN specialists
3. Score PA-05 using the 4 sub-criteria (Designed, Coherent,
   Proportionate, Polished)
4. Provide a single-paragraph gestalt impression
DO NOT simply summarize what others found.
```

---

## 9. EMOTIONAL ARC ASSESSMENT GAP

### 9.1 What the Protocol Specifies

Part 6 of artifact-pa-protocol.md defines 4 emotional registers (Surprise, Delight, Authority, Earned Closure) with CSS signatures for each. The protocol assigns emotional arc assessment to PA Auditor G (Metaphor + Ideology) and expects the Weaver to synthesize it.

### 9.2 What Actually Happened

**No auditor explicitly assessed the 4 emotional registers.** Some auditors touched on components:
- Auditor D: Identified the inversion block as "surprise" and noted "no color surprise"
- Auditor C: Identified the crescendo effect and earned closure in Zone 6
- Auditor I: Mentioned "dramatic rupture" at Zone 5

But no auditor systematically evaluated: Does this page have SURPRISE? (Where? How many moments?) DELIGHT? (Which micro-refinements reward attention?) AUTHORITY? (Does every element express certainty?) EARNED CLOSURE? (Does the ending feel earned?)

### 9.3 Recommendation

Either:
1. Add explicit emotional arc questions to the Integrative auditor's assignment, OR
2. Add a dedicated "Emotional Arc" section to the Weaver's synthesis template that maps findings from PA-13, PA-35, PA-36, PA-45, PA-47 to the 4-register framework

The second option is more efficient — it reuses existing question data rather than adding new questions.

---

## 10. RANKED ENRICHMENT RECOMMENDATIONS

### Priority 1 — BLOCKING (Must fix before next execution)

**E1: ENFORCE FRESH-EYES PRINCIPLE**
Impact: HIGH | Effort: LOW
All 9 auditors received source code and at least 2 received gate results. This violates the protocol's most important constraint. Fix: The orchestrator prompt template must EXPLICITLY state that auditors receive ONLY screenshots, and the auditor spawn must NOT include the HTML file path or gate results JSON. Auditors should receive screenshot file paths ONLY.

**E2: STANDARDIZE QUESTION ASSIGNMENTS**
Impact: HIGH | Effort: MEDIUM
0/9 auditors answered their protocol-assigned questions. The orchestrator must use the exact PA question IDs from artifact-pa-protocol.md Part 4, Section 4.2, copied into each auditor's prompt as mandatory section headings. Each question must have its own `### PA-XX:` heading in the prompt template.

**E3: ADD TIER 5 QUESTIONS**
Impact: HIGH | Effort: LOW
All 9 Tier 5 questions (PA-60-68) were skipped entirely. The Tier 5 score is required for the combined verdict matrix. Either assign these to existing auditors or add Auditor J (Compositional Depth). Without Tier 5, the pipeline cannot distinguish COMPOSED from DESIGNED.

### Priority 2 — SIGNIFICANT (Should fix)

**E4: REBALANCE QUESTION LOAD**
Impact: MEDIUM | Effort: MEDIUM
Auditor C has 14 questions while Auditor H has 5. Redistribute per the reorganization in Section 7.2 to keep each auditor at 6-12 questions.

**E5: ADD SCORING RUBRIC PER QUESTION**
Impact: MEDIUM | Effort: HIGH
Currently, "4/5" means different things to different auditors. Add explicit criteria for each score level on each question. Example for PA-07: "5/5 = all boundaries >25 RGB delta; 4/5 = all >15 RGB but one near-threshold; 3/5 = one boundary below threshold; 2/5 = 2+ boundaries below threshold; 1/5 = zone boundaries not perceptible."

**E6: ELIMINATE SOUL AUDITOR, MERGE INTO GATES**
Impact: MEDIUM | Effort: LOW
Auditor A's entire report duplicates gate-runner checks. Move soul constraint verification entirely to programmatic gates. Replace Auditor A with a genuine first-impression auditor who answers PA-01, PA-03, PA-04, PA-45 (the IMPRESSION questions) without checking CSS compliance.

**E7: ADD PROPOSED QUESTIONS PA-71 THROUGH PA-76**
Impact: MEDIUM | Effort: LOW
6 new questions addressing CSS budget distribution, second-half variety, zone template uniformity, color temperature coherence, interaction consistency, and code block interior quality. See Section 2.2 for full text and assignments.

### Priority 3 — NICE TO HAVE

**E8: ADD REFERENCE CALIBRATION IMAGES**
Impact: LOW-MEDIUM | Effort: MEDIUM
Provide auditors with anonymous reference screenshots showing "this is 2/4 ASSEMBLED" and "this is 4/4 DESIGNED" to calibrate their perceptual judgment. These must come from different pages to avoid direct comparison bias.

**E9: ADD EMOTIONAL ARC SYNTHESIS TO WEAVER**
Impact: LOW | Effort: LOW
Add a mandatory "Emotional Arc" section to the Weaver's output template that maps auditor findings to the 4-register framework (Surprise, Delight, Authority, Earned Closure).

**E10: SEPARATE MEASUREMENT FROM IMPRESSION QUESTIONS**
Impact: LOW | Effort: LOW
Tag each PA question as MEASUREMENT (produces structured data) or IMPRESSION (produces qualitative narrative). Ensure the scoring protocol weights MEASUREMENT answers higher for objective comparison across builds.

---

## 11. OVERALL PHASE 3B ASSESSMENT

### What Worked Well

1. **Parallel execution with screenshot pre-capture.** 9 auditors ran simultaneously with zero Playwright contention. The pattern is proven and should not change.

2. **Thematic specialization produces depth.** Auditor C's multi-coherence matrix and Auditor G's typography inventory would not exist without role specialization. Generalist auditors produce shallower analysis.

3. **Cross-auditor convergence identifies real issues.** 5/9 auditors flagging Z4->Z5 as the weakest boundary is a high-confidence finding. The breadth of 9 perspectives catches issues that 2-3 would miss.

4. **The Integrative auditor's PA-05 score is well-reasoned.** 3/4 COMPOSED is supported by balanced evidence (5 positive, 5 negative points). The verdict feels calibrated.

5. **Report quality is generally high.** 6/9 reports are in TIER 1 or 2 quality. The average auditor produces ~150 lines of structured, evidenced analysis.

### What Failed

1. **Fresh-eyes principle was completely violated.** 9/9 auditors had source code access. This is the single most important protocol failure.

2. **Question assignments were not followed.** 0/9 auditors answered their exact protocol questions. ~20 questions were never asked. All Tier 5 questions were skipped.

3. **The Soul auditor duplicated gate-runner work.** Auditor A spent its entire budget verifying binary constraints that programmatic gates already checked.

4. **The Integrative auditor added minimal unique insight.** Most of I's findings were echoes of other auditors rather than cross-cutting patterns only visible in aggregate.

5. **No emotional arc assessment was performed.** Despite the protocol dedicating Part 6 (72 lines) to emotional arc, no auditor systematically evaluated it.

### Net Verdict

Phase 3B produced a **valid and useful PA-05 score** (3/4 COMPOSED) that is consistent with the observed design quality. The auditor reports are rich enough to guide a REFINE cycle. However, the execution deviated significantly from the protocol, and the missing Tier 5 assessment means compositional depth above COMPOSED cannot be evaluated. The enrichments above (especially E1-E3) are required before the next execution to bring Phase 3B into protocol compliance.

---

*End of Phase 3B Analysis. 10 enrichment recommendations ranked by priority. Key file: `ephemeral/va-extraction/artifact-pa-protocol.md`.*
