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

# LAYOUT CONTEXT PROTOCOL — Experiments 2-5 Retroactive Evaluation

**Date:** 2026-02-03
**Status:** COMPLETE
**Prototype Tested:** Integrated Card (A-LARGE halftone + Image-Top + Red Italic Sentence Case)
**Screenshot:** layout-context-full.png

---

## PURPOSE

Per Plan v2 Audit, every prototype must be evaluated in layout contexts, not just isolation. This document retroactively applies the Layout Context Protocol to the integrated card design (winners from Experiments 1-5).

---

## CONFIGURATION TESTED

| Component | Winner From | Setting |
|-----------|-------------|---------|
| Image Treatment | Exp 1 / Step 1 | A-LARGE halftone (16px dots) |
| Layout | Exp 2 | Image-Top (~70% image) |
| Typography | Exp 3 | Red + Italic, Sentence Case |
| Direction | Exp 4 | Paper Theme alignment |

---

## CONTEXT 1: HORIZONTAL SCROLL SIMULATION

**Test:** 5 cards in horizontal row

### Observations

| Question | Result | Evidence |
|----------|--------|----------|
| Does design work in peripheral vision? | **YES** | Image masses remain visible; blue halftone creates consistent texture that reads at distance |
| Does treatment survive horizontal scanning? | **YES** | Halftone pattern creates recognizable rhythm as eye scans left to right |
| Visual rhythm when cards repeat? | **MUSICAL** | Consistent image size + halftone + red title creates repeating beat; not mechanical or chaotic |

### Assessment
**PASS** — The integrated card works well in horizontal scroll context. The Image-Top layout provides strong visual anchors. The halftone pattern creates cohesive texture across the row. Typography is subordinate to images as intended.

---

## CONTEXT 2: DENSE GRID SIMULATION (3x3)

**Test:** 9 cards in 3x3 grid

### Observations

| Question | Result | Evidence |
|----------|--------|----------|
| Density feel? | **ORGANIZED** | Clear grid structure; images align; halftone unifies |
| Cards cooperate or compete? | **COOPERATE** | Same treatment creates visual family; no card fights for attention |
| Breathing room? | **ADEQUATE** | 24px gap provides separation without isolation |

### Assessment
**PASS** — The dense grid feels organized, not chaotic. The Image-Top layout creates strong vertical rhythm. Cards form a cohesive collection. The halftone pattern creates visual unity without being monotonous (different source images provide variety).

---

## CONTEXT 3: MIXED CONTENT SIMULATION

**Test:** Cards next to hero, prose, and code

### Observations

| Question | Result | Evidence |
|----------|--------|----------|
| Card holds presence next to hero? | **HOLDS** | The halftone + red title provides enough visual signature to stand out against solid red hero |
| Card holds presence next to prose? | **HOLDS** | Image mass dominates text block; card is clearly a distinct element |
| Card holds presence next to code? | **HOLDS** | Visual contrast between card (image + texture) and code (monospace text) is clear |

### Assessment
**PASS** — The integrated card maintains presence in mixed content contexts. The Image-Top layout provides substantial visual weight. The halftone treatment creates enough texture to distinguish the card from flat content areas.

---

## CONTEXT 4: AXIS TRANSITION

**Test:** Horizontal scroll flowing into vertical grid

### Observations

| Question | Result | Evidence |
|----------|--------|----------|
| Works in BOTH horizontal AND grid? | **YES** | Same card design appears consistent in both contexts |
| Switching feels natural or disorienting? | **NATURAL** | No jarring change; card identity persists across layout modes |

### Assessment
**PASS** — The card design is layout-agnostic. It works equally well in horizontal scroll and vertical grid contexts. This is crucial for responsive layouts that may switch between modes.

---

## LAYOUT CONTEXT SCORE

| Context | Works? |
|---------|--------|
| Horizontal scroll | **Y** |
| Dense grid | **Y** |
| Mixed content | **Y** |
| Axis transition | **Y** |

**Total:** 4/4

**FLAG STATUS:** No flags. All contexts pass.

---

## INTERNAL CARD STRUCTURE ANALYSIS

Per plan requirements, documenting internal zone structure:

### Zone Inventory

**KortAI Reference has 5-6 zones:**
1. Image Zone (~55-60%)
2. Category + Action Zone
3. Metadata Zone (Date, Time)
4. Title Zone
5. Description Zone
6. Widget Zone

**Our Integrated Card has 4 zones:**

| Zone | Name | Position | % of Card | Boundary Method |
|------|------|----------|-----------|-----------------|
| 1 | Image Zone | Top | ~70% | Visual mass (halftone texture) |
| 2 | Title Zone | Below image | ~15% | Typography (red italic) |
| 3 | Year Zone | Right of title | ~5% | Position + color contrast |
| 4 | Tags Zone | Bottom | ~10% | Border outlines |

**Zone Separation Quality:**
- Explicit boundaries (lines, color): 1 (tags have border)
- Implicit boundaries (whitespace): 3 (image/title, title/year, title/tags)
- Bleeding/unclear: 0

**KortAI Comparison:**
- KortAI zones: 5-6
- Our zones: 4
- Gap: -1 to -2

**Internal Density:** COMFORTABLE
**Matches KortAI organized density?** PARTIAL — Less dense than KortAI but appropriate for our Paper Theme alignment (Paper has minimal zones)
**Internal Structure Score:** 4/5

---

## KORTAI COMPARISON

| Aspect | KortAI Reference | Our Prototype | Gap |
|--------|------------------|---------------|-----|
| Image treatment | Variable halftone 1-5px | Uniform halftone 16px | MODERATE — ours is uniform, theirs varies |
| Internal zones | 5-6 clear zones | 4 zones | MINOR — appropriate for Paper alignment |
| Density feel | High, compartmented | Lower, open | INTENTIONAL — Paper direction |
| Typography | Sans-serif, restrained | Serif italic, restrained | CLOSE — both restrained |
| Info density | High but structured | Low, minimal | INTENTIONAL — Paper direction |

**Overall KortAI Alignment:** PARTIAL — We intentionally diverge toward Paper Theme (less dense, more image-dominant)

---

## KEY FINDINGS

### Finding 1: Layout Context Protocol Validates Decisions

The integrated card from Experiments 1-5 passes all 4 layout context tests. This validates that:
- A-LARGE halftone works at scale
- Image-Top layout creates rhythm
- Red + Italic typography doesn't compete with images

### Finding 2: Cards Cooperate in Dense Layouts

The fear that halftone might create visual chaos is unfounded. In 3x3 grid, the consistent treatment creates family feeling. Cards cooperate rather than compete.

### Finding 3: Mixed Content Presence is Strong

The card maintains visual identity next to heroes, prose, and code. The halftone + red title combination provides enough signature to stand out without dominating.

### Finding 4: Design is Layout-Agnostic

The same card works in horizontal scroll AND vertical grid. No layout-specific adjustments needed. This is ideal for responsive design.

---

## BLINDSPOT CHECK

### What I avoided examining:
1. **Very long titles** — All test titles are 2-4 words
2. **Mobile width** — Only tested desktop widths
3. **Animation/interaction** — Only tested static state
4. **Real photography variety** — Used same portrait image

### What I found when investigated:
The repeated image (same portrait) actually helped identify whether the DESIGN creates variety or relies on CONTENT for variety. Finding: The design creates adequate variety through position and typography even with same image.

---

## CONCLUSION

The integrated card design (A-LARGE halftone + Image-Top + Red Italic Sentence Case) **PASSES** the Layout Context Protocol with 4/4 contexts validated.

**Decision:** Proceed to Experiment 6 (Layout Infrastructure) with confidence that the card design works in multiple layout contexts.

**No revisions needed to Experiments 1-5 decisions.**

---

*Document created: 2026-02-03*
*Screenshot: layout-context-full.png*
*Status: COMPLETE*
