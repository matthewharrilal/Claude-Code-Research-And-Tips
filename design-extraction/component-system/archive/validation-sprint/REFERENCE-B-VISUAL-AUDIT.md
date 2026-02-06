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

# REFERENCE B: Paper Theme / Dither Cards — Perceptual Analysis

**Sources:**
- Playwright captures from Contra community posts (ref-b-paper-theme-*.png)
- Plan baseline description (Japan/Brazil series)
**Analyzed:** 2026-02-03
**Analysis Type:** Direct perceptual observation + baseline documentation

---

## SOURCE CLARIFICATION

The Contra URLs led to Praveen Kumar's "Dither Cards" and "Cards" posts showing blue/monochrome halftone treatments. These appear to be variations on the "Paper Theme" concept but differ from the Japan/Brazil series described in the plan baseline.

**What I captured:**
- Blue/purple monochrome dither cards (similar to KortAI style)
- Dashboard-like UI cards with halftone images
- Various subjects: eagle, astronaut, portraits, abstract patterns

**What the plan describes (Paper Theme Japan/Brazil):**
- DIFFERENT duotone color PER CARD (blue, green, red, sepia)
- Image fills 90%+ of card (much larger than captured examples)
- Minimal typography (just title at top left)
- Sharp corners, no shadows, cream background showing through
- Risograph/poster aesthetic rather than dashboard

**For this analysis, I'll document BOTH:**
1. What I observed in Playwright captures (Section A)
2. The Paper Theme characteristics from plan baseline (Section B)

---

## SECTION A: CAPTURED DITHER CARDS (Praveen Kumar)

### First Impression

What I see immediately:
- **Treatment:** Blue/purple monochrome halftone (similar to KortAI)
- **Subjects:** Human figures, animals, abstract patterns
- **Dots:** CLEARLY VISIBLE — can count individual dots
- **Background:** Light gray/white showing through in light areas
- **Layout:** Dashboard-style cards with content below image

### Halftone Characteristics

**Dot Visibility:**
- Dots are VERY PROMINENT — newspaper-coarse
- Can easily count dots at viewing distance
- Dots create the entire image, not just texture

**Dot Size Variation:**
- Variable size based on luminance
- Dark areas: Large, closely-spaced dots
- Light areas: Small, sparse dots or absent
- White background shows through where dots are absent

**Color Palette:**
- Single color (blue/purple OR black/gray)
- NOT duotone (not mixing two distinct colors)
- More like "monochrome dither" than "duotone risograph"

### Card Structure (Captured Examples)

```
┌─────────────────────────────────────┐
│   ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐   │
│   │                           │    │
│   │     HALFTONE IMAGE        │    │  ← ~60% of card
│   │    (blue/purple dots)     │    │
│   │                           │    │
│   └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   │
│                                     │
│ Title Text Here                  ■  │  ← Title + icon
│                                     │
│ Description text below...           │  ← Description
│ Additional context                  │
│                                     │
│ ═══ ═══ ═══                    ○○○ │  ← Progress + actions
│ [Copy Link]        [Share Now]      │  ← Buttons
└─────────────────────────────────────┘
```

**Key Observation:** These are DASHBOARD cards, not POSTER cards. They have:
- Multiple content zones below image
- Progress indicators, buttons, actions
- Information density similar to KortAI
- NOT the minimal "art print" feel of Paper Theme

### Soul Piece Assessment (Captured Examples)

| # | Soul Piece | Score | Observation |
|---|------------|-------|-------------|
| 1 | Visible Process | 5/5 | Dots are extremely prominent |
| 2 | Material Presence | 4/5 | Feels printed, newsprint quality |
| 3 | Constraint as Identity | 3/5 | Single color but varies by card |
| 4 | Image as Foundation | 3/5 | Image ~60%, not dominant |
| 5 | Typography Restraint | 3/5 | Has titles but also buttons, actions |
| 6 | Interior Porosity | 5/5 | Background shows through clearly |
| 7 | Earned Imperfection | 4/5 | Dot variation creates texture |
| 8 | Organized Density | 4/5 | Dense but structured |
| 9 | Multi-Axis Movement | N/A | Single posts, not page layouts |
| 10 | Internal Card Structure | 4/5 | Clear zones but busy |

**Total:** 35/45 (78%)

---

## SECTION B: PAPER THEME BASELINE (From Plan Description)

### Described Characteristics

Based on the plan's baseline documentation:

**Image Treatment:**
- TRUE halftone with COARSE visible dots
- Different DUOTONE color per card (blue/cream, green/cream, red/cream, sepia/cream)
- Dots are LARGE and COUNTABLE — newspaper-like
- Cream background infiltrates ALL light areas

**Card Structure:**
```
┌─────────────────────────────────────┐
│ Japan                           🔖  │  ← Minimal title + icon
├─────────────────────────────────────┤
│                                     │
│                                     │
│                                     │
│         HALFTONE IMAGE              │
│       (fills entire card)           │  ← 90%+ of card
│                                     │
│        Cream shows through          │
│        in all light areas           │
│                                     │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Key Differentiators from KortAI:**
- Image is 90%+ of card (not 60%)
- Typography is ALMOST ABSENT (not present but restrained)
- Different color per card (not consistent palette)
- SHARP corners (not rounded)
- NO shadows (completely flat)
- Cards feel like "collectible prints" not "dashboard modules"

### Named Characters

**Paper Theme Card Character:** "The Risograph Poster"
- Image IS the card
- Text is annotation, not information
- Designed for ADMIRATION not SCANNING
- Feels like holding a vintage art print

**Paper Theme Image Treatment Character:** "The Coarse Grain Print"
- Dots you could almost touch
- Cream paper showing through everywhere
- Each card is a color study
- Process is celebrated, not hidden

### Soul Piece Assessment (Paper Theme Baseline)

| # | Soul Piece | Score | Observation |
|---|------------|-------|-------------|
| 1 | Visible Process | 5/5 | Dots are the entire aesthetic |
| 2 | Material Presence | 5/5 | Feels like risograph print |
| 3 | Constraint as Identity | 5/5 | One duotone color per card IS the identity |
| 4 | Image as Foundation | 5/5 | Image is 90%+ of card |
| 5 | Typography Restraint | 5/5 | Almost no typography |
| 6 | Interior Porosity | 5/5 | Cream infiltrates everything |
| 7 | Earned Imperfection | 5/5 | Coarse dots, organic variation |
| 8 | Organized Density | 2/5 | LOW density by design |
| 9 | Multi-Axis Movement | N/A | Individual cards/posters |
| 10 | Internal Card Structure | 2/5 | Minimal zones (just image + title) |

**Total:** 39/45 (87%) — but optimized for DIFFERENT use case

---

## COMPARISON: Captured vs Baseline vs KortAI

| Aspect | Captured Dither | Paper Theme (Baseline) | KortAI |
|--------|-----------------|------------------------|--------|
| Image % | 60% | 90%+ | 55-60% |
| Information density | HIGH | VERY LOW | HIGH |
| Color approach | Single monochrome | Different duotone per card | Single monochrome |
| Typography | Present + actions | Almost absent | Present but restrained |
| Card purpose | DASHBOARD MODULE | ART PRINT | DASHBOARD MODULE |
| User behavior | SCAN | ADMIRE | SCAN |
| Corner style | Rounded | Sharp | Rounded |
| Background | Light gray | Cream | White |

### Key Insight

The captured Dither Cards are actually CLOSER TO KORTAI than to Paper Theme:
- Both use dashboard-like card structure
- Both have high information density
- Both use single color halftone (not different color per card)

Paper Theme represents a DIFFERENT design direction:
- Art/poster aesthetic
- Minimal information
- Image-dominant
- Collectible feeling

---

## IMPLICATIONS FOR OUR EXPERIMENTS

### Experiment 1 (Visible Process)
Both references confirm: **VARIABLE SIZE halftone dots are essential**
- Not uniform pattern overlay
- Dots must respond to image luminance
- Background must show through in light areas

### Experiment 2 (Layout)
**Choice depends on use case:**
- If we're building DASHBOARD → KortAI layout (image 55-60%, content below)
- If we're building GALLERY → Paper Theme layout (image 90%+, minimal text)

### Experiment 3 (Typography)
**Paper Theme confirms restraint is possible:**
- Cards CAN work with almost no typography
- If we keep typography, it should be servant to image
- NO red, NO italic needed if position carries hierarchy

### Experiment 4 (Use Case)
**This is the CRITICAL decision:**
- KortAI + Captured Dither = Dashboard/information cards
- Paper Theme = Art gallery/portfolio cards
- Our use case will determine which direction

---

## BLINDSPOT CHECK

**What I might be missing:**
- The actual Paper Theme Japan/Brazil series may look different than described
- Captured examples may not represent full range of dither aesthetics
- Mobile responsiveness of either approach unclear

**What made me uncomfortable:**
- Paper Theme's extreme minimalism (90% image, no content)
- The gap between what I captured and what was described
- Uncertainty about which reference better fits our actual use case

**Investigation needed:**
- Experiment 4 will force the dashboard vs gallery decision
- May need to find actual Paper Theme Japan/Brazil screenshots

---

## PERCEPTUAL TRUTHS (Reference B)

### Truth 1: Duotone Color CAN Be the Identity
Paper Theme proves that a different color per card creates variety within constraint. This is the OPPOSITE of KortAI's single-color consistency.

**Test:** Does each card have its own color mood?
**Anti-pattern:** Same color for all cards (loses Paper Theme's variety)

### Truth 2: Image CAN Be the Card
Paper Theme proves that 90%+ image with minimal annotation works. This is the OPPOSITE of information-dense dashboard cards.

**Test:** Could this card exist without any text?
**Anti-pattern:** Equal weight to image and content

### Truth 3: Coarseness Creates Material Presence
Both references show that VISIBLE, COUNTABLE dots create the "printed" feeling. The coarser the dots, the more material the feel.

**Test:** Can I count the dots at arm's length?
**Anti-pattern:** Smooth gradients, fine noise, invisible processing

### Truth 4: Interior Porosity Requires Light Areas
For background to show through, images need LIGHT AREAS. High-contrast, dark images won't demonstrate porosity as well.

**Test:** Does the image have highlights where background infiltrates?
**Anti-pattern:** Dark, moody images with no light areas
