# EXPERIMENT 1 RESULTS: VISIBLE PROCESS APPROACHES

**Date:** 2026-02-03
**Status:** COMPLETE — Browser-Verified
**Prototypes Built:** 6 (Halftone, Grain, Stipple, Lines, Paper BG, Current)
**Screenshots Captured:** exp1-halftone-full.png, exp1-grain-full.png, exp1-stipple-full.png, exp1-lines-full.png, exp1-paper-bg-full.png, exp1-current-full.png

---

## SQUINT TESTS

### Prototype A: Halftone (CSS Mask)

**What persists:** The dot grid dominates completely. A strong, uniform field of red circles arranged in a perfect grid. The pattern itself becomes the visual subject.

**What disappears:** The underlying image content vanishes almost entirely. I cannot perceive what the photograph depicts - only the halftone pattern.

**Overall feeling:** Mechanical, overwhelming, like looking through a patterned screen. The dots feel like a WALL rather than a filter.

**Treatment visibility:** VERY PRESENT - too present. The mechanism is visible but dominates rather than serves.

**Critical observation:** The dots are UNIFORM SIZE. In the KortAI and Paper reference images, halftone dots VARY with image luminance (smaller in highlights, larger in shadows). This is the key difference between "applied pattern" and "true halftone printing."

---

### Prototype B: Grain Overlay

**What persists:** Solid color blocks. Very little texture visible at normal viewing distance.

**What disappears:** Both the image AND the grain are barely perceptible. The duotone color dominates.

**Overall feeling:** Like looking at tinted paper, not printed photographs. No visible process.

**Treatment visibility:** FADES when not zoomed in. Grain is too fine to count or perceive as mechanism.

**Critical observation:** Grain adds TEXTURE not MECHANISM. You cannot imagine "what made this" - it just looks slightly rough. This fails the "Visible Process" soul piece.

---

### Prototype C: Stipple (Irregular Dots)

**What persists:** Organic dot clusters with visible variation. The irregular spacing creates visual "breathing" that the halftone grid lacks.

**What disappears:** Image content, similar to halftone but with more visual interest in the pattern itself.

**Overall feeling:** Hand-drawn, illustrative. More like pen-and-ink artwork than mechanical printing. Could evoke "risograph" or "screen print" associations.

**Treatment visibility:** PRESENT and interesting. The irregularity feels intentional, not broken.

**Critical observation:** The stipple feels more ARTISTIC than EDITORIAL. It suggests illustration rather than photographic reproduction. May conflict with our "print heritage" soul piece.

---

### Prototype D: Lines (Engraving Style)

**What persists:** Strong horizontal or diagonal line patterns. Very architectural, formal feeling.

**What disappears:** Image content becomes abstracted into banded tones.

**Overall feeling:**
- Horizontal lines: Calm, stable, like Venetian blinds
- Crosshatch: More dynamic, closer to engraving/etching aesthetic
- Scanlines: Retro CRT monitor, digital artifact feeling

**Treatment visibility:** VERY PRESENT. Lines are countable, mechanism is clear.

**Critical observation:** Lines evoke DIFFERENT print heritage than dots. This is woodcut/engraving, not photographic reproduction. The crosshatch version is closest to "fine art print" but may feel too classical for our editorial direction.

---

### Prototype E: Paper Background (No Image Treatment)

**What persists:** Subtle texture in the card background. A fine grid/grain visible when looking closely.

**What disappears:** The texture becomes invisible at normal reading distance. Images appear smooth and "digital."

**Overall feeling:** Like high-quality paper with smooth photos printed on it. The paper texture and the image treatment feel DISCONNECTED - two different material worlds.

**Treatment visibility:** MINIMAL on background, NONE on images.

**Critical observation:** Paper background alone does NOT achieve "Visible Process." The smooth images floating on textured paper feel like "digital stickers on analog surface" - the exact dissonance we feared. Material presence requires consistency.

---

### Prototype F: Current System (Baseline)

**What persists:** Smooth color gradients. The duotone treatment creates a tinted photograph effect.

**What disappears:** Any sense of physical process. This could be an Instagram filter.

**Overall feeling:** Digital, filtered, smooth. Like Spotify wrapped images or social media photo filters.

**Treatment visibility:** NONE. No visible mechanism. Cannot count elements. Cannot imagine physical process.

**Critical observation:** Current system FAILS the Visible Process soul piece. It achieves color treatment but not material presence. The images feel processed, not printed.

---

## INITIAL SOUL PIECE ALIGNMENT MATRIX

| Prototype | Visible Process | Interior Porosity | Material Presence | Earned Imperfection | TOTAL |
|-----------|-----------------|-------------------|-------------------|---------------------|-------|
| A: Halftone | 4 | 1 | 3 | 2 | 10/20 |
| B: Grain | 1 | 2 | 2 | 1 | 6/20 |
| C: Stipple | 3 | 2 | 3 | 4 | 12/20 |
| D: Lines | 4 | 1 | 3 | 2 | 10/20 |
| E: Paper BG | 1 | 1 | 2 | 1 | 5/20 |
| F: Current | 1 | 2 | 1 | 1 | 5/20 |

**Scoring Notes:**
- Visible Process: Can you see and count the mechanism?
- Interior Porosity: Does background show through light areas?
- Material Presence: Could you imagine holding this?
- Earned Imperfection: Is there organic variation?

---

## KEY INSIGHT: THE HALFTONE PROBLEM

**Observation after 5 iterations:**

Our CSS mask halftone creates UNIFORM dots. But looking at the KortAI and Paper reference images, their halftone creates VARIABLE SIZE dots that respond to image luminance. This is the difference between:

1. **Pattern overlay** (what we built) - Applies the same pattern everywhere, image just shows through the holes
2. **True halftone** (what references show) - Dot size varies with image brightness, creating tonal reproduction

**Why this matters:**
- Pattern overlay = "I put a screen over a photo"
- True halftone = "This image was MADE through a halftone process"

The feeling is fundamentally different. One is decoration, the other is reproduction.

**Technical path forward:**
To achieve true halftone, we need image processing that converts brightness to dot size. This cannot be done with CSS masks alone. Options:
1. Server-side image processing (Sharp, Jimp)
2. Canvas-based client-side processing
3. WebGL shaders
4. Pre-processed images

---

## ZONE IMPACT MATRIX (Initial Assessment)

| Prototype | Typography | Spacing | Containers | Hierarchy | Composition |
|-----------|------------|---------|------------|-----------|-------------|
| A: Halftone | HURTS (visual noise) | NEUTRAL | NEUTRAL | HURTS (pattern competes) | ADDS ENERGY |
| B: Grain | NEUTRAL | NEUTRAL | NEUTRAL | NEUTRAL | NEUTRAL |
| C: Stipple | HELPS (organic) | HELPS (breathing) | NEUTRAL | NEUTRAL | HELPS (artistic) |
| D: Lines | HURTS (direction conflict) | HURTS (rigid) | NEUTRAL | HURTS (competes) | ADDS TENSION |
| E: Paper BG | NEUTRAL | NEUTRAL | HELPS (material) | NEUTRAL | NEUTRAL |
| F: Current | NEUTRAL | NEUTRAL | NEUTRAL | NEUTRAL | NEUTRAL |

---

## PRELIMINARY RANKING

### 1st Place: Stipple Pattern
**Score:** 12/20
**Why it works (perceptual):** The organic dot clustering creates visual interest without overwhelming the image. It feels intentional and artistic rather than mechanical. The irregularity adds "earned imperfection" that perfect halftone grids lack.
**Risks:** May feel too "illustrative" rather than "editorial." Could suggest risograph/zine aesthetic rather than magazine.
**Needs iteration:** Test different densities. Consider whether stipple conflicts with our "print heritage" direction.

### 2nd Place (tie): Halftone / Lines
**Score:** 10/20
**Why they work:** Both achieve clear "visible process" - the mechanism is countable and imaginable. Both evoke print heritage.
**Why they're limited:** Both produce UNIFORM patterns that don't respond to image content. The mechanism dominates rather than serves.
**Path forward:** Halftone needs variable dot size (true halftone). Lines may work better as accent element than primary treatment.

### 3rd Place: Grain
**Score:** 6/20
**Why it fails:** Grain is too fine to perceive as mechanism. It adds texture but not "visible process." You cannot count grain particles or imagine the physical process.

### 4th Place (tie): Paper BG / Current
**Score:** 5/20
**Why they fail:** Neither achieves visible process. Current is smooth digital filtering. Paper BG creates material dissonance (textured background + smooth images = two incompatible material worlds).

---

## UNEXPECTED FINDINGS

1. **Uniform patterns feel aggressive.** Both halftone and line grids feel like they're fighting the image rather than serving it. The perfect regularity becomes the subject.

2. **Stipple's irregularity is a feature.** What I expected to feel "broken" actually feels "intentional." The organic variation adds life that mechanical patterns lack.

3. **Paper background fails.** I hypothesized that background texture might provide material presence without treating images. But the disconnection feels worse than no texture at all - like two incompatible materials colliding.

4. **Grain adds nothing.** At viewable sizes, grain is invisible. It might add something in print at 300dpi, but on screen it's wasted computation.

5. **True halftone requires image processing.** CSS masks cannot achieve variable-size dots. This is a fundamental technical limitation that changes our implementation path.

---

## BLINDSPOT ACKNOWLEDGMENT

### What I avoided examining:
1. **Performance impact** - I focused on visual quality without testing render performance of mask patterns at scale.
2. **Responsive behavior** - How do these patterns behave at different screen sizes? Do dots become too small/large?
3. **Image quality dependency** - My test images were low-contrast placeholders. High-contrast photography might change rankings.
4. **Motion/interaction** - How do patterns feel when scrolling or hovering?

### What I found when I investigated:
The test images being placeholders actually HELPED reveal the pattern behavior in isolation. With high-detail photos, I might have been distracted by image content rather than evaluating the treatment mechanism.

---

## NEXT STEPS

1. **Test with high-contrast images** - Get real photography to evaluate treatment quality
2. **Investigate true halftone** - Research image processing approaches for variable dot size
3. **Consider hybrid approach** - Stipple for artistic projects, halftone for photography
4. **Test at grid scale** - Single cards can deceive; need 6+ cards to evaluate rhythm

---

## JOURNAL ENTRY — EXPERIMENT 1

**What I expected to find:**
I expected halftone dots to be the clear winner, directly matching the Paper and KortAI references. I expected grain to add film-like warmth. I expected paper background to be a reasonable fallback.

**What I actually found:**
Halftone WITH UNIFORM DOTS fails the soul test. The mechanism is visible but wrong - it's "pattern applied" not "image printed." Stipple, which I considered a secondary option, actually achieves more of the "visible process" feeling through organic irregularity. Grain adds nothing perceptible. Paper background creates material dissonance.

**What surprised me:**
The reference images (KortAI, Paper) use VARIABLE SIZE dots, not uniform masks. This is a fundamental technical difference I didn't appreciate until seeing my uniform-dot prototypes fail to capture the same feeling.

**What I was avoiding:**
I was avoiding admitting that CSS-only halftone might be insufficient. The implementation complexity of true halftone (server-side image processing) felt like scope creep. But visual inspection confirms the technique matters more than I wanted to acknowledge.

**How this changes my understanding:**
- "Visible Process" isn't just "can I see the mechanism" - it's "does the mechanism reveal how the IMAGE was made"
- Uniform patterns dominate images; variable patterns serve images
- Organic irregularity can be a feature, not a bug
- Material presence requires consistency - you can't mix material languages

**Connections to other experiments:**
- Experiment 2 (Layout): Image treatment success depends on image size. Larger images make pattern flaws more visible.
- Experiment 3 (Typography): Pattern density affects readability. Dense halftone creates visual noise that competes with text.
- Experiment 4 (Use Case): KortAI uses true halftone because their cards are image-dominant. Our current layout is text-dominant, which may change treatment requirements.

---

---

## REFERENCE COMPARISON (Per REFERENCE-BASELINE.md)

| Prototype | Closer to KortAI | Closer to Paper | Gap from References |
|-----------|------------------|-----------------|---------------------|
| A: Halftone | PARTIAL - visible dots but uniform | PARTIAL - visible dots but uniform | MAJOR: No variable dot size |
| B: Grain | FAR - no visible mechanism | FAR - no visible mechanism | CRITICAL: Cannot see process |
| C: Stipple | FAR - not halftone | PARTIAL - organic feel | MODERATE: Different print tradition |
| D: Lines | FAR - engraving not halftone | FAR - engraving not halftone | MAJOR: Wrong print heritage |
| E: Paper BG | FAR - smooth images | FAR - smooth images | CRITICAL: Material dissonance |
| F: Current | FAR - Instagram filter feel | FAR - Instagram filter feel | CRITICAL: No visible process |

**Reference Test Results:**
- [ ] Variable dot size: FAIL (all prototypes use uniform patterns)
- [ ] Countable dots: PARTIAL (halftone, stipple, lines achieve this)
- [ ] Background infiltrating light areas: FAIL (none achieve interior porosity)
- [ ] Image feels like foundation: NEUTRAL (depends on layout, not treatment)
- [ ] "Printed" feeling: PARTIAL (stipple closest, but wrong tradition)

---

## FINAL RECOMMENDATION

**Primary approach:** NONE of the CSS-only treatments fully achieve the reference quality.

**Best achievable with CSS:** Stipple (12/20) — provides visible process and earned imperfection, but evokes illustration not halftone printing.

**True solution:** Implement server-side true halftone image processing to achieve variable dot sizes that respond to image luminance. This is a technical scope expansion but necessary to match reference quality.

**Fallback strategy:**
1. If true halftone is out of scope: Use stipple with sparse density
2. If stipple feels too illustrative: Use horizontal lines with fine spacing
3. If all patterns fail: Accept current smooth duotone and focus on other soul pieces

---

*Document created: 2026-02-03*
*Browser verification: 2026-02-03*
*Portrait testing added: 2026-02-03*
*Status: COMPLETE — Findings documented, recommendation made*

---

## ADDITIONAL TESTING: Portrait Image (2026-02-03 Update)

### Test Setup

Created comprehensive test page (`exp1-visible-process.html`) with:
- 12 prototype variants across 6 approaches
- High-quality portrait image with varied tonal range
- Systematic comparison of all treatments

Screenshot captured: `exp1-visible-process-portrait.png`

### Key Observations with Portrait Content

**A-SMALL (Small Halftone):**
Face visible through dense blue dot pattern. Dots barely visible at distance — treatment fades to smooth appearance.

**A-MEDIUM (Medium Halftone):**
Clearer dot pattern visible. Face recognizable but dots create newspaper-like quality. Better balance of visibility vs image preservation.

**A-LARGE (Large Halftone):**
Very prominent checkerboard pattern. Face becomes secondary to the dot grid. Pop art aesthetic but too dominant.

**Grain variants (5%, 15%, 30%):**
Confirms original finding: grain is invisible at distance. Even 30% grain doesn't create "countable" visible process.

**Stipple:**
Organic irregular dots create interesting texture. Face remains recognizable. Best "earned imperfection" of all variants.

**Lines (Horizontal, Diagonal, Crosshatch):**
Strong interference with facial features. The portrait subject conflicts with linear patterns. Lines work against human faces.

**Paper BG:**
Smooth portrait on textured background confirms material dissonance finding.

**Current (Baseline):**
Smooth red duotone — pure Instagram filter aesthetic, no visible mechanism.

### Revised Scoring (Portrait-Based)

| Prototype | Visible Process | Interior Porosity | Material Presence | Earned Imperfection | TOTAL |
|-----------|-----------------|-------------------|-------------------|---------------------|-------|
| A-SMALL | 2/5 | 2/5 | 2/5 | 2/5 | 8/20 |
| A-MEDIUM | 4/5 | 3/5 | 4/5 | 3/5 | 14/20 |
| A-LARGE | 5/5 | 4/5 | 4/5 | 3/5 | 16/20 |
| B-5% | 1/5 | 1/5 | 1/5 | 1/5 | 4/20 |
| B-15% | 2/5 | 1/5 | 2/5 | 2/5 | 7/20 |
| B-30% | 3/5 | 1/5 | 3/5 | 3/5 | 10/20 |
| C-VARIABLE | 4/5 | 2/5 | 4/5 | 5/5 | 15/20 |
| D-HORIZONTAL | 4/5 | 2/5 | 3/5 | 2/5 | 11/20 |
| D-DIAGONAL | 4/5 | 2/5 | 4/5 | 2/5 | 12/20 |
| D-CROSSHATCH | 5/5 | 3/5 | 4/5 | 3/5 | 15/20 |
| E-PAPER | 1/5 | 1/5 | 2/5 | 2/5 | 6/20 |
| F-CURRENT | 1/5 | 1/5 | 1/5 | 1/5 | 4/20 |

### Updated Ranking (Post-Portrait Testing)

1. **A-LARGE (16/20)** — Best interior porosity through larger gaps between dots
2. **C-VARIABLE (15/20)** — Best earned imperfection through organic irregularity
3. **D-CROSSHATCH (15/20)** — Strong visible process but interferes with portraits
4. **A-MEDIUM (14/20)** — Good balance but less effective than A-LARGE

### Critical Finding: Lines Fail for Portraits

Linear treatments (horizontal, diagonal, crosshatch) create strong interference with human faces. The eye attempts to read facial features THROUGH the lines, creating uncomfortable visual conflict. Lines may work for landscapes/objects but fail for portrait-heavy content.

### Updated Recommendation

**Primary:** A-LARGE for image-centric content where interior porosity matters most
**Fallback 1:** C-VARIABLE (Stipple) if halftone feels too Pop Art
**Fallback 2:** A-MEDIUM if A-LARGE is too dominant
**Avoid:** Line treatments for portrait/face content
