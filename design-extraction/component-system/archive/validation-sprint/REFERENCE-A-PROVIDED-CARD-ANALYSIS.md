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

# REFERENCE A: KortAI Card Detail — Perceptual Analysis

**Source:** User-provided screenshot (REFERENCE-IMAGE-KORTAI-CARD-DETAIL.png)
**Analyzed:** 2026-02-03
**Analysis Type:** Direct perceptual observation — card-level detail

---

## FIRST IMPRESSION (3-Second Test)

What I see immediately:
- **Two cards side by side** — different halftone treatments (color vs monochrome)
- **Left card:** Blue/purple/lavender halftone of a landscape (field/flowers)
- **Right card:** Black/gray halftone of a butterfly — more dramatic contrast
- **Feeling:** "Investment module meets art print"
- **Density:** HIGH — 6 distinct zones per card

---

## CARD-BY-CARD ANALYSIS

### Left Card: "Capital Metamorphosis"

**Image Treatment:**
- Blue/lavender halftone over landscape photo
- Shows rolling hills or flower field with sky
- Dots CLEARLY VISIBLE — can count them
- Light areas (sky): White background shows through completely
- Mid-tones: Medium dot density creates that topographic feel
- Shadows: Dense dots, almost solid but still granular

**Color Palette:**
- Soft lavender/periwinkle blue
- NOT harsh blue — gentle, almost pastel
- Creates "dreamy data" feeling

**Interior Porosity Test:**
The sky area is MOSTLY WHITE with scattered blue dots. The background paper/card stock is clearly infiltrating the light areas. This is TRUE interior porosity — not a white overlay, but absence of dots revealing the substrate.

### Right Card: "Sensitive Dependencies"

**Image Treatment:**
- BLACK/GRAY monochrome halftone (not blue)
- Subject: Detailed butterfly
- EXTREMELY visible dots — almost newspaper-coarse
- Dramatic contrast between butterfly wings and white background
- Dots follow the CONTOURS of the butterfly wings

**Key Difference from Left Card:**
- Higher contrast (black vs soft blue)
- Subject more defined (butterfly silhouette vs landscape)
- Feels more "editorial print" than "data visualization"

**Interior Porosity Test:**
Background is PURE WHITE where butterfly isn't. The halftone creates a clean figure-ground relationship. Even within the butterfly, wing membrane areas show white through sparse dots.

---

## INTERNAL ZONE STRUCTURE (Both Cards)

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              IMAGE ZONE                     │  ← Zone 1: ~55% of card
│         (halftone treatment)                │     Dominates, anchors eye
│                                             │
│    [decorative dot pattern in corner]       │
│                                             │
├─────────────────────────────────────────────┤
│ MY CARD                      [📎 Add Card]  │  ← Zone 2: Category + Action (~5%)
├─────────────────────────────────────────────┤
│ 📅 Dec 05      ⏰ 11:00 AM                  │  ← Zone 3: Temporal metadata (~5%)
├─────────────────────────────────────────────┤
│ Capital                           Today     │
│ Metamorphosis              📊 ▼ 6.2%       │  ← Zone 4: Title + Status (~10%)
├─────────────────────────────────────────────┤
│ Moving from static savings to active        │
│ yield. Your cash flow is currently          │  ← Zone 5: Description (~15%)
│ being re-indexed for maximum efficiency.    │
│ Monitor the delta below.                    │
├─────────────────────────────────────────────┤
│ ◐ Efficiency Delta                    →     │  ← Zone 6: Widget/CTA (~10%)
└─────────────────────────────────────────────┘
```

### Zone Analysis

| Zone | Purpose | Height % | Density |
|------|---------|----------|---------|
| 1. Image | Visual anchor, emotional | 55% | Single element (image) |
| 2. Category | Classification | 5% | 2 elements |
| 3. Temporal | When context | 5% | 2 elements |
| 4. Title | Identification + status | 10% | 3 elements |
| 5. Description | Explanation | 15% | 1 text block |
| 6. Widget | Action/metric | 10% | 2-3 elements |

### Zone Separation Method
- **Primary:** Whitespace (generous vertical gaps between zones)
- **Secondary:** Subtle horizontal alignment shifts
- **No:** Visible lines, borders, or color bands
- **Feeling:** "Zones breathe, don't collide"

---

## HALFTONE DETAIL EXAMINATION

### Dot Characteristics (Left Card - Blue)

**Size at Different Luminances:**
- Highlights (sky): ~1-2px dots, sparse, background dominant
- Mid-tones (distant hills): ~3-4px dots, medium density
- Shadows (foreground): ~4-5px dots, dense but countable

**Dot Shape:** Circular, not square or irregular
**Dot Pattern:** Regular grid (45° angle), not random
**Dot Spacing:** Consistent grid spacing, size varies

### Dot Characteristics (Right Card - Black)

**Size at Different Luminances:**
- Highlights (wing membrane): Tiny dots or absent
- Mid-tones (wing pattern): Medium dots, clear gradation
- Shadows (body, wing edges): Large dots, almost solid

**Key Observation:** The black halftone is COARSER than the blue
- Dots are larger overall
- More visible at the same viewing distance
- Creates more dramatic, "print-shop" feeling

---

## COMPARISON: Blue vs Black Halftone

| Aspect | Blue (Left) | Black (Right) |
|--------|-------------|---------------|
| Mood | Dreamy, soft, data-like | Bold, editorial, dramatic |
| Dot coarseness | Medium-fine | Coarse |
| Process visibility | Present but subtle | Very prominent |
| Material feel | "Thermal print" | "Newsprint" |
| Subject suitability | Landscapes, abstract | Figures, silhouettes |

**Insight:** KortAI uses DIFFERENT halftone densities for different subjects. This is sophisticated — not one-size-fits-all.

---

## TYPOGRAPHY DETAIL

### Title Treatment
- **Text:** "Capital Metamorphosis" / "Sensitive Dependencies"
- **Style:** Sans-serif, medium weight, sentence case
- **Size:** Large relative to other text
- **Color:** Black (no color, no italics, no uppercase)

### Description Treatment
- **Style:** Sans-serif, regular weight
- **Size:** Small but readable
- **Color:** Dark gray (softer than title)
- **Length:** 2-3 lines of context

### Metadata Treatment
- **Date/Time:** Icons + small text, light gray
- **Category:** Uppercase "MY CARD" — subtle labeling
- **Metric:** Red/green percentage with icon

### Typography Restraint Assessment
- NO red text (unlike our current system)
- NO italics on titles (unlike our current system)
- NO uppercase titles (unlike our current system)
- Hierarchy achieved through SIZE and WEIGHT only
- Color used ONLY for status indicators (% change)

**Score:** 5/5 restraint — our system has 0/5 by comparison

---

## WIDGET/ACTION ZONE DETAIL

**Left Card:** "Efficiency Delta" with progress ring
- Circular progress indicator (donut chart)
- Three-color segmented ring
- Arrow (→) as navigation hint

**Right Card:** "Variance Threshold" with progress ring
- Similar pattern
- Different colors in ring

**Widget Characteristics:**
- Contained, self-explanatory
- Adds information density without chaos
- Navigation arrow keeps card actionable
- Feels like "dashboard widget" not "button"

---

## CORNER DECORATION

Both cards have **decorative dot pattern** in top-right of image zone:
- Small cluster of halftone-style dots
- Purely decorative, doesn't contain information
- Creates visual interest, breaks monotony
- Subtle brand watermark feeling

**Purpose:** Adds "designed" feeling, prevents images from feeling too raw

---

## 10 SOUL PIECES ASSESSMENT (Card Level)

| # | Soul Piece | Score | Observation |
|---|------------|-------|-------------|
| 1 | Visible Process | 5/5 | Halftone dots are prominent, countable |
| 2 | Material Presence | 5/5 | Feels like printed trading card |
| 3 | Constraint as Identity | 4/5 | Halftone + white + zones = system |
| 4 | Image as Foundation | 5/5 | Image is 55% of card, anchors everything |
| 5 | Typography Restraint | 5/5 | No color, no italic, no uppercase |
| 6 | Interior Porosity | 5/5 | Background shows through everywhere |
| 7 | Earned Imperfection | 4/5 | Dot variation creates organic texture |
| 8 | Organized Density | 5/5 | 6 zones, dense but clear |
| 9 | Multi-Axis Movement | N/A | Card-level, not page-level |
| 10 | Internal Card Structure | 5/5 | Perfect zone hierarchy |

**Total (9 applicable):** 43/45 (96%)

---

## KEY PERCEPTUAL TRUTHS (Card Level)

### Truth 1: Image Zone is Non-Negotiable at ~55%
The image consumes MORE than half the card. This is what makes the halftone treatment effective — there's enough area for dots to create patterns, for porosity to breathe.

**Test:** Does image feel like "main event" or "illustration"?
**Anti-pattern:** Image as small thumbnail (our current ~25%)

### Truth 2: Zone Separation by Space, Not Lines
The 6 zones are clearly distinct despite NO visible dividers. Whitespace does all the work. This requires generous vertical padding.

**Test:** Can I identify zone boundaries without squinting?
**Anti-pattern:** Tight stacking, lines between sections

### Truth 3: Typography Earns Through Position
Title is large, positioned prominently, black. That's it. No italics, no color, no uppercase needed when position and size do the work.

**Test:** Would title still command attention without any styling?
**Anti-pattern:** Styling to compensate for poor positioning

### Truth 4: Halftone Density Can Vary by Subject
KortAI uses coarser halftone for high-contrast subjects (butterfly), finer for atmospheric (landscape). This is intelligent application, not dogma.

**Test:** Does halftone density serve the image content?
**Anti-pattern:** Same halftone settings for all images

### Truth 5: Status Color is Reserved for Data
Red and green appear ONLY on the metric percentage. This makes them meaningful — "data state" not "decoration."

**Test:** Is colored text showing me data state?
**Anti-pattern:** Red titles, colored labels

---

## IMPLICATIONS FOR OUR EXPERIMENTS

### For Experiment 1 (Visible Process):
- Need TRUE variable-size halftone, not uniform dot mask
- Consider different coarseness for different image types
- Ensure 55%+ of card is image for halftone to breathe

### For Experiment 2 (Layout):
- Image at TOP, consuming 55%+ of card
- 6 zones below image, separated by space
- Content dense but structured

### For Experiment 3 (Typography):
- Remove ALL title styling (red, italic, uppercase)
- Rely on size and position alone
- Reserve color for data states only

### For Experiment 5 (Integration):
- All elements must coexist without fighting
- Density through structure, not compression
- Halftone needs room to work

---

## BLINDSPOT CHECK

**What I might be missing:**
- How do these cards look in a grid of 20+?
- Does the 6-zone structure scale down to mobile?
- Is this density appropriate for our "project portfolio" use case?

**What made me uncomfortable:**
- The HIGH information density — our audience may not need this much
- The dashboard-like widgets — our use case may be more editorial
- The lack of ANY title styling — feels bold to strip everything

**Investigation needed:**
- Experiment 4 will determine if we need KortAI's density or Paper's minimalism
