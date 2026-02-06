<!--
═══════════════════════════════════════════════════════════════
⚠️  SUPERSEDED — DO NOT USE FOR NEW WORK
═══════════════════════════════════════════════════════════════

STATUS: This file has been superseded and contains OUTDATED values.

SUPERSEDED BY: design-extraction/component-system/SOUL-DEFINITION.md

WHY THIS EXISTS: Validation sprint experiments consumed into final
SOUL-DEFINITION.md. Historical record of design exploration process.

DANGER: Values in this file may CONFLICT with soul-locked tokens.
Using these values will break the design system's soul alignment.

DO NOT:
- Copy values from this file
- Reference this file in new work
- Update this file (it's frozen as historical record)

INSTEAD: Use the superseding document linked above.

Last verified: 2026-02-06
═══════════════════════════════════════════════════════════════
-->

# EXPERIMENT 3 RESULTS: TYPOGRAPHY REDUCTION

**Date:** 2026-02-03
**Status:** COMPLETE — Browser-Verified
**Prototypes Built:** 6 variants (Current, Italic Only, Red Only, Uppercase Only, Position Only, Red + Italic)
**Grid Size:** 6 cards per variant (3x2 grid with Image-Top layout)
**Screenshots Captured:** exp3-typography-full.png

---

## SQUINT TESTS (On Grids)

### Variant 1: Current (Red + Italic + Uppercase)

**Grid rhythm:** CHAOTIC — red titles dominate, create visual competition
**What dominates when blurred:** RED COLOR overwhelms image masses
**Color impact:** STRONG — pulls attention away from images
**Overall feeling:** Eager, loud, trying too hard

---

### Variant 2: Italic Only (Black)

**Grid rhythm:** CALM — titles present but deferential
**What dominates when blurred:** Image masses (correct hierarchy!)
**Color impact:** Minimal — text is subordinate to images
**Overall feeling:** Warm editorial, confident without shouting

---

### Variant 3: Red Only (Roman)

**Grid rhythm:** Active but cleaner than V1
**What dominates when blurred:** Still red color, but less aggressive
**Color impact:** MODERATE — brand presence maintained
**Overall feeling:** Brand-forward, more corporate than editorial

---

### Variant 4: Uppercase Only (Black)

**Grid rhythm:** Structured, slightly formal
**What dominates when blurred:** Text mass due to all-caps visual weight
**Color impact:** Minimal but uppercase creates density
**Overall feeling:** Institutional, formal, could be any system

---

### Variant 5: Position Only (Black Roman)

**Grid rhythm:** VERY CALM — typography nearly invisible
**What dominates when blurred:** Images completely (correct!)
**Color impact:** None — text is subordinate
**Overall feeling:** Confident, minimal, perhaps too plain

---

### Variant 6: Red + Italic (Sentence Case)

**Grid rhythm:** Active but controlled
**What dominates when blurred:** Red color but less aggressive than V1
**Color impact:** MODERATE — brand + warmth balanced
**Overall feeling:** Editorial accent, recognizable but restrained

---

## GRID ANALYSIS

| Variant | Calm Score | Hierarchy | Recognizable | Fatigue | Authority | Character |
|---------|------------|-----------|--------------|---------|-----------|-----------|
| 1: Current | 1/5 | 2/5 (title dominates) | 5/5 | HIGH | 2/5 (trying) | "Eager Art School Graduate" |
| 2: Italic Only | 4/5 | 4/5 (image first) | 3/5 | LOW | 4/5 (quiet) | "The Warm Editorial" |
| 3: Red Only | 2/5 | 3/5 | 4/5 | MEDIUM | 3/5 | "The Brand Forward" |
| 4: Uppercase Only | 3/5 | 3/5 | 2/5 | MEDIUM | 3/5 | "The Institutional" |
| 5: Position Only | 5/5 | 5/5 (image dominates) | 1/5 | VERY LOW | 5/5 (confident) | "The Confident CFO" |
| 6: Red + Italic | 3/5 | 3/5 | 4/5 | LOW-MED | 3/5 | "The Editorial Accent" |

---

## TRADEOFF ANALYSIS

**Most calm but least recognizable:** Variant 5 (Position Only)
- Zero emphasis creates maximum calm
- BUT loses all brand distinctiveness
- Could be any serif system

**Most recognizable but least calm:** Variant 1 (Current)
- 3 emphases create maximum brand presence
- BUT fights with images, creates fatigue
- Typography competes with content

**Best balance of calm + recognition:** **Variant 6 (Red + Italic)**
- Removes UPPERCASE (loudest emphasis)
- Keeps RED (brand) + ITALIC (warmth)
- Recognizable but not aggressive
- Typography serves images better

**Close second:** **Variant 2 (Italic Only)**
- Maximum calm with single emphasis
- Italic is distinctive enough to be recognized
- BUT loses brand color entirely
- Works if brand color isn't critical

---

## RECOMMENDATION

**Primary recommendation:** Variant 6 (Red + Italic, Sentence Case)

**Why (perceptual):**
- Removing uppercase reduces the "shouting" quality
- Red maintains brand recognition
- Italic preserves editorial warmth
- Sentence case is more readable and less aggressive
- Typography becomes annotation rather than headline

**What we lose:**
- The aggressive distinctiveness of current treatment
- Immediate recognition at distance (uppercase helps scanning)
- Some brand consistency with existing materials

**What we gain:**
- Images can breathe and dominate
- Grid rhythm becomes calm
- Typography serves content instead of fighting it
- More sophisticated, confident feeling

---

## FALLBACK IF PRIMARY FEELS "TOO PLAIN"

**Intermediate step:** If Variant 6 loses too much recognition, try:

1. Keep red + italic + sentence case (V6)
2. Add subtle size increase to compensate
3. Consider red tags as secondary brand reinforcement

**Conservative fallback:** Variant 1 (Current) is always available if brand consistency is more important than typography restraint.

---

## KEY FINDINGS (After 5+ Iterations)

### Finding 1: Uppercase is the Loudest Emphasis

**Perceptual Truth:** Among red, italic, and uppercase, removing UPPERCASE creates the biggest reduction in visual aggression. All-caps text reads as shouting regardless of color.

**Test:** View grid with and without uppercase. Which feels calmer?
**Anti-pattern:** Using uppercase for titles when image should dominate

### Finding 2: Italic is the Most Distinctive Characteristic

**Perceptual Truth:** The italic serif is the most recognizable typographic trait. Even without color, italic Instrument Serif reads as "that editorial system."

**Test:** Can you recognize the system with only italic? (Yes)
**Anti-pattern:** Removing italic in favor of other emphases

### Finding 3: Red Without Italic Feels Corporate

**Perceptual Truth:** Red roman (non-italic) feels more like "warning label" or "corporate highlight" than "editorial accent."

**Test:** Does red-only feel warm? (No, it feels alerting)
**Anti-pattern:** Using red without the italic warmth

### Finding 4: Grid Rhythm Reveals Truth

**Perceptual Truth:** Single card evaluation LIES. Typography decisions must be tested at grid scale (6+ cards) to see rhythm and fatigue.

**Test:** Does this variant create visual competition when repeated?
**Anti-pattern:** Evaluating typography on single cards

---

## UNEXPECTED FINDINGS

1. **Uppercase is more aggressive than red.** I expected red to be the loudest element, but uppercase creates more visual density and "shouting" even in black.

2. **Italic alone is surprisingly recognizable.** Even without red, the Instrument Serif italic creates a distinctive enough character.

3. **Red + Italic without Uppercase feels balanced.** This combination wasn't my initial expectation for the winner but emerged as the clear best balance.

4. **Position-only is too neutral.** Maximum calm doesn't equal maximum effectiveness. Some distinctiveness is needed for recognition.

---

## BLINDSPOT ACKNOWLEDGMENT

### What I avoided examining:
1. **Tag typography:** Only tested title variants, tags still have red outline which reinforces brand even if title is reduced
2. **Responsive scaling:** How do variants behave at mobile size?
3. **Long titles:** Tested with short project names, long titles may change rankings
4. **Color combinations:** What if tags change color to compensate for reduced title emphasis?

### What I found when investigated:
The red tags provide brand reinforcement even if title color is reduced. This creates flexibility — could potentially go to Variant 2 (Italic Only) and rely on tags for brand color.

---

## CONNECTION TO OTHER EXPERIMENTS

**Experiment 1 (Visible Process):**
Typography restraint is MORE important if image treatment fails. With smooth duotone, aggressive typography is a bigger problem than with halftone (which adds visual interest).

**Experiment 2 (Layout):**
Typography restraint is CRITICAL for Image-Top layout. The red italic uppercase title competes with ANY layout structure. Reducing to Red + Italic allows Image-Top to work.

**Experiment 4 (Use Case):**
If use case is "scanning dashboard" (KortAI), current typography may be appropriate. If use case is "admiring collection" (Paper), typography must defer.

---

## JOURNAL ENTRY — EXPERIMENT 3

**What I expected to find:**
Expected Italic Only (V2) or Position Only (V5) to win for maximum restraint. Expected Red to be the hardest emphasis to lose.

**What I actually found:**
Red + Italic without Uppercase (V6) is the sweet spot. Uppercase is the biggest aggressor. Red adds brand but italic adds warmth. Together without uppercase, they create recognizable editorial accent.

**What surprised me:**
The magnitude of difference between V1 and V6. Simply removing uppercase transforms "eager art school graduate" into "editorial accent." The psychological difference is dramatic.

**What I was avoiding:**
Admitting that the current treatment actively hurts the design. The 3-emphasis approach was a conscious design choice, and acknowledging it was wrong is uncomfortable.

**How this changes my understanding:**
- Restraint isn't about removing everything — it's about removing the RIGHT things
- Uppercase is more aggressive than I realized
- Recognition requires less emphasis than I assumed
- Grid rhythm reveals truth that single cards hide

---

*Document created: 2026-02-03*
*Browser verification: 2026-02-03*
*Status: COMPLETE — Findings documented, recommendation made*
