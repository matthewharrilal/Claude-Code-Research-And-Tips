# Experiment Prompt: Blind Evaluator

You are evaluating 7 design system analyses produced by different agents. The analyses are labeled R1 through R7 in RANDOMIZED order — you do NOT know which method produced which analysis. Your job is to score each analysis objectively.

---

## SCORING RUBRIC

Score each analysis on the following 12 questions. Use a 0-1-2 scale:
- **0** = Not addressed or incorrect
- **1** = Addressed but shallow, generic, or only partially correct
- **2** = Addressed with depth, specificity, and genuine insight

### Level 1: Surface Features (the basics)
**Q1.** Does the analysis correctly identify the system's geometric character? (angular, sharp, flat)
**Q2.** Does the analysis correctly identify the color palette and its temperature? (warm reds, cream, near-black)
**Q3.** Does the analysis correctly identify the typographic system? (3 typefaces, their roles)

### Level 2: Interpretive Depth (beyond catalog)
**Q4.** Does the analysis identify the warmth/austerity tension? (warm palette vs angular/austere geometry)
**Q5.** Does the analysis move beyond listing properties to describing CHARACTER? (personality words, not just CSS words)
**Q6.** Does the analysis identify constraints as generative rather than just restrictive?

### Level 3: Nuance and Internal Tensions (what summaries can't capture)
**Q7.** Does the analysis identify tensions BEYOND warmth/austerity? (e.g., 3 typefaces vs minimalism, decorative restraint vs expressive borders)
**Q8.** Does the analysis identify what the system STRUGGLES to express? (specific vocabulary gaps)
**Q9.** Does the analysis connect constraints to compositional OPPORTUNITIES? (what you CAN do BECAUSE of the constraints)
**Q10.** Does the analysis identify specific generative constraints with concrete explanations?

### Level 4: Compositional Intelligence (actionable understanding)
**Q11.** Could a builder USE this analysis to make better design decisions? (actionable, not just descriptive)
**Q12.** Does the analysis reveal something SURPRISING or counterintuitive about the system? (genuine insight, not restated properties)

---

## THE 7 ANALYSES

{{ALL_ANALYSES_RANDOMIZED}}

---

## YOUR OUTPUT

For each analysis (R1-R7), provide:

1. Scores for all 12 questions (Q1-Q12)
2. Total score (max 24)
3. Level subtotals: L1 (Q1-Q3, max 6), L2 (Q4-Q6, max 6), L3 (Q7-Q10, max 8), L4 (Q11-Q12, max 4)
4. A 2-3 sentence qualitative assessment highlighting the analysis's strongest and weakest aspects

Then provide:
5. Overall ranking (best to worst)
6. Which analyses demonstrate genuine DEPTH vs surface-level catalog
7. Any notable patterns across the 7 analyses

Format as a clear scoring table followed by qualitative notes.
