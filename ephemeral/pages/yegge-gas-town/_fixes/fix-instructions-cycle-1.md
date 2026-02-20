# FIX INSTRUCTIONS (Cycle 1)

## Gate Failures (4 BLOCKING)

### 1. SC-04: Warm palette violation (3 callout backgrounds)
**Measured:** rgba(74,157,107,0.04), rgba(124,58,237,0.04), rgba(74,144,217,0.04) on callout elements
**Threshold:** R >= G >= B on ALL backgrounds
**Fix:** Replace callout rgba tints with warm equivalents that maintain R>=G>=B:
- Green callout (essence/tip): `rgba(157,130,74,0.06)` (warm amber tint)
- Purple callout (gotcha/warning): `rgba(157,107,74,0.06)` (warm rust tint)
- Blue callout (challenge/info): `rgba(144,120,74,0.06)` (warm sand tint)
Keep the semantic left-border colors different -- only the background tints need to be warm.

### 2. SC-05: Pure black/white violation (7 instances)
**Measured:** HTML element has default rgb(0,0,0) color and borders; DIV.bento-cell has rgb(255,255,255) background
**Threshold:** No rgb(0,0,0) or rgb(255,255,255) anywhere
**Fix:**
```css
html { color: #3d3d3d; }
.bento-cell { background: #fef9f5; }  /* or appropriate warm cream */
```
Also ensure no other elements inherit pure black from the HTML default.

### 3. SC-13: Multi-coherence FAIL (4/6 interior boundaries only 1-2 shifts)
**Measured:** Interior zone boundaries shift only background + sometimes padding. Heading typography (h2), font-weight, letter-spacing, and border-left are IDENTICAL across all 5 content zones.
**Threshold:** >= 3 of 6 channels shift at EVERY zone boundary, average >= 4
**This is the MOST IMPORTANT fix.** The page currently reads as "one zone with alternating backgrounds" rather than "5 distinct zones."
**Fix direction (not prescriptive -- use your compositional judgment):**
- **h2 font-size:** Compress across zones (e.g., Z1: 28px, Z2: 26px, Z3: 24px, Z4: 22px, Z5: 24px) -- reflecting the "progressive mechanization" metaphor where headings become more operational
- **Zone-level letter-spacing:** Vary section-indicator or h2 letter-spacing per zone (e.g., 0.08em overview, 0.06em architecture, 0.04em implementation)
- **Border-left on zones:** Add a 3px+ border-left to alternating content sections (e.g., Z2 and Z4 get border-left: 3px solid accent-color)
- **Zone entry padding:** Vary first-content-element padding per zone to create rhythm
The goal: a fresh-eyes viewer should perceive zone changes from MULTIPLE simultaneous shifts, not just background color.

### 4. DG-4: Only 2 transition types (need >= 3)
**Measured:** Transition table has BRIDGE and SMOOTH only
**Threshold:** >= 3 distinct transition types
**Fix:** Convert one boundary to a BREATHING transition. The T3 boundary (Z3 Memory → Z4 Principles) is a natural candidate:
- Increase gap to 80-96px
- Add a visible structural element (3px+ horizontal rule or border)
- Make the background shift more dramatic at this boundary
- Update the transition table in _build-log.md to reflect the change

## DO NOT TOUCH (protected elements)
- Container: 960px (SC-01 PASS)
- border-radius: 0, box-shadow: none (SC-02 PASS)
- Font trinity (SC-03 PASS)
- Zone background colors #FEF9F5 and #F5EDE0 (SC-09 PASS, >= 21 RGB delta)
- Stacked gaps (SC-10 PASS, max 112px)
- Skip link (SC-07 PASS)
- ARIA landmarks (SC-06 PASS)
- Component variety (SC-08 PASS)
- Fractal echo and cascade tables (DG-1, DG-2 PASS)
- Mechanism count: 16 across 5 categories (PASS)
- Dark header/footer bookends
- Drop caps (2)
- Metaphor: ASSEMBLY LINE

## PROCESS
1. Read this fix instruction file
2. Read _lock-sheet.md to understand what is LOCKED vs CHALLENGEABLE
3. Apply fixes to output.html
4. Update _build-log.md transition table (change one transition to BREATHING)
5. Update _cascade-value-table.md with new values
6. Write all 3 updated files
