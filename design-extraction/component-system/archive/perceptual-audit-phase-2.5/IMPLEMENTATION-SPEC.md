# IMPLEMENTATION SPEC
## Closing the Soul Gaps

*Phase 4 of Perceptual Deepening Protocol*

---

## CRITICAL INSIGHT

**The current CSS-based approach cannot achieve the soul pieces.**

Blend modes and gradients create smooth, invisible transformations. The soul pieces require **visible, granular, textured** transformations. This is not a refinement problem — it's a **technology choice** problem.

---

## IMPLEMENTATION TRACKS

### TRACK A: Image Treatment System (P0)

**Objective:** Implement visible halftone/dot pattern that enables:
- Visible Process
- Interior Porosity
- Earned Imperfection

**Technical Approaches (Choose One):**

#### Option A1: SVG Filter-Based Halftone
Create an SVG filter that applies halftone dot pattern to images.

**Perceptual Verification:**
- Can I see individual dots at normal viewing distance? → YES required
- Does the background show through in light areas? → YES required
- Is there controlled variation in dot spacing? → YES required

**Pros:** Real-time, resolution-independent, adjustable
**Cons:** Complex to implement well, performance considerations

#### Option A2: CSS Mask with Dot Pattern
Apply a PNG mask of a halftone pattern over images.

**Perceptual Verification:**
- Same as A1

**Pros:** Simple, performant, predictable
**Cons:** Static pattern, may look "applied" rather than "intrinsic"

#### Option A3: Preprocessed Images
Process images through a halftone pipeline before deployment.

**Perceptual Verification:**
- Same as A1

**Pros:** Highest fidelity, true print simulation
**Cons:** Build step required, no runtime adjustment

#### Option A4: Canvas-Based Runtime Processing
Use JavaScript canvas to generate halftone in browser.

**Perceptual Verification:**
- Same as A1

**Pros:** True halftone generation, can respond to image content
**Cons:** Performance cost, implementation complexity

**Recommended:** Start with **A2 (CSS Mask)** for rapid validation, then upgrade to **A1 (SVG Filter)** or **A3 (Preprocessed)** for production.

---

### TRACK B: Card Composition Restructure (P1)

**Objective:** Flip image position from bottom to top, increase proportion.

**Changes Required:**

1. **HTML Structure:**
   - Move `.project-card__media` from after tags to before header
   - OR: Create new card variant `project-card--image-led`

2. **CSS Adjustments:**
   - Image zone: min-height 40% of card, max 70%
   - Content zone: flows below image
   - Tags: may move to overlay on image (corner punctuation)

**Perceptual Verification:**
- Does my eye land on image FIRST? → YES required
- Does image claim 40%+ of card? → YES required
- Could I remove text and still have a "card"? → YES required

---

### TRACK C: Typography Restraint (P2)

**Objective:** Reduce emphasis stacking from 3 techniques to 1.

**Current:** RED + ITALIC + UPPERCASE

**Options:**
- Keep: Italic + Uppercase, Remove: Red → "Editorial Confident"
- Keep: Red, Remove: Italic + Uppercase → "Brand Forward"
- Keep: Italic, Remove: Red + Uppercase → "Warm Editorial"

**Perceptual Verification:**
- When viewing grid of cards, does typography create calm rhythm? → YES required
- Does hierarchy feel inevitable rather than insisted? → YES required

**Recommended:** Test **Option C** (keep italic only) first. Italic is the most distinctive characteristic; red and uppercase may be overcompensation.

---

### TRACK D: Constraint Strengthening (P2)

**Objective:** Make constraint visible and unusual.

**Options:**

#### Option D1: True Single-Color (like Paper theme)
Each card uses ONE color for halftone, not two-color duotone.

**Impact:** Very unusual, creates collectibility, strong identity
**Risk:** More limiting, requires color strategy per content type

#### Option D2: Consistent Dot Pattern Across System
Same halftone grid density everywhere, no variation.

**Impact:** Constraint becomes recognizable signature
**Risk:** May feel monotonous

#### Option D3: Sharp Edges + No Hover States
Enforce complete flatness — no shadows, no lifts, no transitions on cards.

**Impact:** Print-like honesty, distinguishes from web patterns
**Risk:** May feel "broken" to users expecting interaction feedback

**Recommended:** Implement **D1 (Single-Color)** if the halftone track succeeds. Single-color halftone is more unusual than two-color smooth blend.

---

## IMPLEMENTATION ORDER

```
PHASE 1: Foundation
├── A2: CSS Mask halftone (quick validation)
├── Verify: dots visible, background infiltrates
└── Duration: 1 sprint

PHASE 2: Composition
├── B: Image position flip (image-led variant)
├── Verify: eye lands on image first
└── Duration: 1 sprint

PHASE 3: Refinement
├── C: Typography reduction (remove red + uppercase)
├── D1: Single-color constraint
├── Verify: calm rhythm, clear constraint
└── Duration: 1 sprint

PHASE 4: Polish
├── A1/A3: Upgrade halftone (SVG or preprocess)
├── Add controlled variation (3-15%)
├── Verify: earned imperfection present
└── Duration: 1-2 sprints
```

---

## VERIFICATION PROTOCOL

After each phase, run these perceptual tests:

### Foundation Tests (After Phase 1)
- [ ] Can I see dots at arm's length?
- [ ] Does cream show through in light image areas?
- [ ] Does image feel "printed" not "filtered"?

### Composition Tests (After Phase 2)
- [ ] Does eye land on image first?
- [ ] Does image claim 40%+ of card?
- [ ] Does content feel like it elaborates the image?

### Refinement Tests (After Phase 3)
- [ ] Is typography calm across a grid of cards?
- [ ] Can I identify the constraint in 3 seconds?
- [ ] Can I complete "This system always ___"?

### Polish Tests (After Phase 4)
- [ ] Is there organic variation in the dot pattern?
- [ ] Do edges breathe rather than snap?
- [ ] Does the design feel handmade?

---

## RISK MITIGATION

### Risk: Halftone looks gimmicky
**Mitigation:** Start subtle (smaller dots, less contrast). The references show that halftone can be elegant when density is calibrated.

### Risk: Typography loses brand recognition
**Mitigation:** Keep ONE strong characteristic. Italic serif is the most distinctive; red can be accent, uppercase can be reserved for special uses.

### Risk: Image-led cards don't work for all content
**Mitigation:** Create variants: `card--image-led` (new soul) and `card--content-led` (current structure) for content without images.

### Risk: Single-color feels limiting
**Mitigation:** Create a color system where content type determines color. Finance = blue, Identity = green, Digital = purple, etc.

### Risk: Performance impact from halftone processing
**Mitigation:** Use CSS mask (static pattern) for most cases, reserve SVG/canvas for hero moments.

---

## SUCCESS CRITERIA

The implementation is complete when a naive viewer:

1. **Perceives "print" not "web"** when looking at card images
2. **Lands on image first** when scanning cards
3. **Feels calm** when viewing a grid (no competing elements)
4. **Can identify one unusual constraint** within 3 seconds
5. **Describes the design as "warm"** despite it being on screen

---

## DELIVERABLES AFTER IMPLEMENTATION

- [ ] Updated `halftone.css` with dot pattern system
- [ ] New card variant `project-card--image-led`
- [ ] Updated typography with reduced emphasis
- [ ] Test page comparing old vs. new
- [ ] Perceptual verification checklist results

---

## STOP POINT

**This spec is ready for audit review.**

Implementation should NOT proceed until:
1. Soul Discoveries are approved
2. Gap Analysis is approved
3. Implementation approach is approved
4. Priority order is confirmed

---

*Implementation Spec complete. Awaiting audit approval.*
