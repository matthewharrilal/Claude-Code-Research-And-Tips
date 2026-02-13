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

<!-- LIGHT SECTION
Full Context For ALL Files: perceptual-audit-v2/synthesis/

File: component-system/archive/validation-sprint/VALIDATION-SPRINT-DECISION-LOG.md
Scope: LIGHT — Minimal context for quick lookup
Part Of: component-system/archive — Validation sprint (superseded)
Contributed To: Soul validation methodology; superseded by perceptual-audit-v2/

What this file does:
Validation sprint experimental work and findings consumed into SOUL-DEFINITION.md.
Historical record of design exploration, testing, and validation methodology.

Who uses this:
- Agents researching soul validation methodology (historical context)
- Designers understanding validation and experiment process
- Archival/historical reference for validation sprint work

Status: SUPERSEDED — Validation sprint work consumed into perceptual-audit-v2/
Superseded By: component-system/SOUL-DEFINITION.md (T1 authority)
Links to: perceptual-audit-v2/synthesis/ for current soul definition
-->

# VALIDATION SPRINT v2 — DECISION LOG

**Started:** 2026-02-03
**Status:** ACTIVE — Experiment 2: Card Layout
**Current Position:** Experiment 1 COMPLETE, Ready for Experiment 2

---

## DECISION LOG INDEX

| ID | Title | Experiment | Status |
|----|-------|------------|--------|
| D-0-01 | Reference Selection Priority | Phase 0 | LOCKED |
| D-0-02 | Reference B Source Gap | Phase 0 | LOCKED |
| D-0-03 | Current System Baseline Score | Phase 0 | LOCKED |
| D-1-01 | Experiment 1 Image Treatment Winner | Experiment 1 | LOCKED |
| D-1-02 | CSS Halftone Limitation Acknowledged | Experiment 1 | LOCKED |
| D-1-04 | Blue Noise Evaluation | Step 1 | LOCKED |
| D-LCP-01 | Layout Context Protocol | Post-Exp 5 | LOCKED |
| D-6-01 | Layout Infrastructure Winner | Experiment 6 | LOCKED |
| D-P2-01 | Component Library Approved | Phase 2 | LOCKED |
| D-7.5-01 | Coexistence Testing Passed | Step 7.5 | LOCKED |

---

## STATE SNAPSHOTS

### SNAPSHOT 0: Initialization
**Timestamp:** 2026-02-03 (start)
**Position:** Phase 0, Step 0.1
**Action:** Created directory structure, initialized decision log
**Next:** Analyze provided KortAI reference images

### SNAPSHOT 1: Phase 0 Complete
**Timestamp:** 2026-02-03
**Position:** Phase 0 COMPLETE, ready for Experiment 1
**Completed:**
- Analyzed provided KortAI images (page layout + card detail)
- Created REFERENCE-A-PROVIDED-ANALYSIS.md (page-level)
- Created REFERENCE-A-PROVIDED-CARD-ANALYSIS.md (card-level)
- Captured Paper Theme via Playwright (6 screenshots)
- Created REFERENCE-B-VISUAL-AUDIT.md
- Captured current system screenshot
- Created VISUAL-COMPARISON-BASELINE.md (10 soul pieces)
- Established scoring criteria for all experiments

**Key Findings:**
1. KortAI uses VARIABLE SIZE halftone dots (1-5px based on luminance)
2. Paper Theme baseline describes 90%+ image dominance with duotone per card
3. Current system scores 42% on soul alignment vs 90% for KortAI
4. P0 gaps: Visible Process, Interior Porosity, Earned Imperfection (all 1/5)
5. P1 gaps: Image as Foundation, Typography Restraint, Material Presence (all 2/5)

**Next:** Create Experiment 1 prototypes (halftone variants first)

### SNAPSHOT 2: Experiment 1 Complete
**Timestamp:** 2026-02-03
**Position:** Experiment 1 COMPLETE, ready for Experiment 2
**Completed:**
- Created exp1-visible-process.html with 12 prototype variants
- Downloaded and tested with high-quality portrait image
- Performed squint tests on all variants
- Scored all variants against 4 soul pieces (Visible Process, Interior Porosity, Material Presence, Earned Imperfection)
- Identified CSS halftone limitation (uniform dots vs variable dots)
- Established ranking and recommendations

**Key Findings (Experiment 1):**
1. CSS halftone creates "pattern overlay" not "true halftone" — dots don't vary with luminance
2. A-LARGE (16/20) scores highest due to better interior porosity from larger gaps
3. C-VARIABLE Stipple (15/20) best for "earned imperfection" through organic irregularity
4. Line treatments interfere with portrait content — avoid for face-heavy imagery
5. Grain/noise approaches fail "visible process" test — cannot count particles

**Recommendation:**
- Primary: A-LARGE (Large Halftone) for image-centric content
- Fallback 1: C-VARIABLE (Stipple) if halftone feels too Pop Art
- Fallback 2: A-MEDIUM if A-LARGE is too dominant
- Note: True variable halftone requires server-side image processing

**Next:** Create Experiment 2 prototypes (card layout variants)

---

## DECISIONS

### DECISION D-0-01: Reference Selection Priority

**ID:** D-0-01.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Phase 0 - Reference Baseline

**DECISION STATEMENT:** Analyze provided KortAI images as primary reference source before using Playwright for additional captures.

**OPTIONS EVALUATED:**
| Option | Pros | Cons |
|--------|------|------|
| A: Provided images first | Direct observation, no rendering delays, user-selected views | May miss angles |
| B: Playwright captures first | Consistent capture method | Redundant if provided images cover needs |

**REASONING CHAIN:**
1. User provided specific reference images showing page layout and card detail
2. These images represent user-selected "important views"
3. Playwright supplements only what provided images don't show
4. This prioritizes direct observation over automated capture

**DECISION:** Option A - Provided images as primary source
**CONFIDENCE:** HIGH
**LOCKED:** YES

---

### DECISION D-0-02: Reference B Source Gap

**ID:** D-0-02.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Phase 0 - Reference Baseline

**DECISION STATEMENT:** The Contra URLs led to "Dither Cards" examples which are closer to KortAI than to Paper Theme. Will proceed using plan's Paper Theme baseline description as Reference B.

**EVIDENCE CONSULTED:**
- Playwright captures show blue monochrome dither cards
- Plan baseline describes duotone with different colors per card
- Captured examples have dashboard layout, not art poster layout

**REASONING CHAIN:**
1. Captured examples show single-color halftone (like KortAI)
2. Plan describes Paper Theme as different-color-per-card duotone
3. Captured examples have high info density (like KortAI)
4. Plan describes Paper Theme as 90%+ image, minimal text
5. Using plan baseline ensures we test both extremes (dashboard vs gallery)

**DECISION:** Use plan's Paper Theme baseline description, not captured dither cards
**CONFIDENCE:** MEDIUM (would prefer actual Paper Theme screenshots)
**REVISION CONDITIONS:** If actual Paper Theme screenshots become available
**LOCKED:** YES

---

### DECISION D-0-03: Current System Baseline Score

**ID:** D-0-03.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Phase 0 - Reference Baseline

**DECISION STATEMENT:** Current system scores 19/45 (42%) on soul alignment, with critical gaps in Visible Process (1/5), Interior Porosity (1/5), and Earned Imperfection (1/5).

**EVIDENCE CONSULTED:**
- Screenshot: current-system-L1-page.png
- Visual analysis against 10 soul pieces
- 5-point scale scoring

**SCORING BREAKDOWN:**
| Soul Piece | Score | Reason |
|------------|-------|--------|
| 1. Visible Process | 1/5 | CSS blend mode = smooth gradients, no dots |
| 2. Material Presence | 2/5 | Feels filtered, not printed |
| 3. Constraint as Identity | 4/5 | Red+cream+italic identifiable |
| 4. Image as Foundation | 2/5 | Image ~25% at bottom |
| 5. Typography Restraint | 2/5 | 3 emphases (red+italic+uppercase) |
| 6. Interior Porosity | 1/5 | Solid color overlay |
| 7. Earned Imperfection | 1/5 | Perfect digital gradients |
| 8. Organized Density | 3/5 | Adequate structure |
| 9. Multi-Axis Movement | N/A | Demo page |
| 10. Internal Card Structure | 3/5 | 3 zones, adequate |

**DECISION:** Accept 42% as baseline, target 70%+ after experiments
**CONFIDENCE:** HIGH
**LOCKED:** YES

---

### DECISION D-1-01: Experiment 1 Image Treatment Winner

**ID:** D-1-01.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Experiment 1 - Visible Process

**DECISION STATEMENT:** A-LARGE (Large Halftone with 8px dots, 16px spacing) is the primary recommendation for image treatment, with C-VARIABLE (Stipple) as fallback.

**OPTIONS EVALUATED:**
| Option | Soul Score | Pros | Cons |
|--------|------------|------|------|
| A-LARGE | 16/20 | Best interior porosity, clear visible process | May feel Pop Art, pattern competes with content |
| C-VARIABLE | 15/20 | Best earned imperfection, organic feel | Different print tradition (illustrated vs mechanical) |
| A-MEDIUM | 14/20 | Good balance | Less porosity than A-LARGE |
| D-CROSSHATCH | 15/20 | Strong visible process | Interferes with portraits |

**EVIDENCE CONSULTED:**
- Screenshot: exp1-visible-process-portrait.png
- Squint tests on all 12 variants
- Soul piece scoring matrix

**REASONING CHAIN:**
1. Interior porosity requires GAPS between pattern elements
2. Larger dots create larger gaps
3. A-LARGE achieves best porosity despite "too much" aesthetic concern
4. Soul piece evaluation should override aesthetic comfort
5. Stipple offers organic alternative if halftone feels wrong

**DECISION:** A-LARGE as primary, C-VARIABLE as fallback
**CONFIDENCE:** MEDIUM (concern about Pop Art feel)
**DEPENDENCIES:** May need revision based on Experiment 4 (use case alignment)
**REVISION CONDITIONS:** If use case determines we need subtler approach
**LOCKED:** YES

---

### DECISION D-1-02: CSS Halftone Limitation Acknowledged

**ID:** D-1-02.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Experiment 1 - Visible Process

**DECISION STATEMENT:** CSS mask halftone creates "pattern overlay" not "true halftone." This is a fundamental technical limitation. Accept this constraint or invest in server-side image processing.

**EVIDENCE CONSULTED:**
- KortAI reference: Variable dot size (1-5px based on luminance)
- Paper Theme reference: Coarse dots absent in highlights
- Our CSS approach: Uniform dot size, image shows through holes

**REASONING CHAIN:**
1. References achieve dots that RESPOND to image luminance
2. CSS masks cannot compute per-pixel dot sizes
3. Our approach creates "screen over photo" not "printed reproduction"
4. True matching requires image processing (server-side or canvas)
5. Decision: Accept limitation for now, note for future enhancement

**DECISION:** Accept CSS limitation, use best available CSS approach (A-LARGE)
**CONFIDENCE:** HIGH (technical fact)
**DEPENDENCIES:** None
**LOCKED:** YES

---

### DECISION D-1-04: Blue Noise Evaluation

**ID:** D-1-04.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Step 1 - Blue Noise Exploration (Plan v2)

**DECISION STATEMENT:** Blue noise pattern does NOT surpass A-LARGE halftone (16/20). A-LARGE remains the primary image treatment. No update to D-1-01.

**OPTIONS EVALUATED:**
| Option | Soul Score | Layout Context | Pros | Cons |
|--------|------------|----------------|------|------|
| G-STATIC (Blue Noise) | 12/20 | Untested | Organic distribution, no grid | Less visible mechanism, dense |
| G-SHIMMER (Blue Noise + animation) | 13/20 | Untested | Adds subtle life | Animation may distract, same density issue |
| A-LARGE (Control) | 16/20 | Untested | Clear visible process, best porosity | Grid regularity, mechanical feel |

**EVIDENCE CONSULTED:**
- Screenshot: exp1-blue-noise-comparison.png
- Visual comparison of three treatments side-by-side
- Blue noise pattern from momentsingraphics.de (128x128 HDR_L)

**SCORING BREAKDOWN:**

| Soul Piece | G-STATIC | G-SHIMMER | A-LARGE (Control) |
|------------|----------|-----------|-------------------|
| Visible Process | 2/5 | 2/5 | 5/5 |
| Interior Porosity | 2/5 | 2/5 | 4/5 |
| Material Presence | 4/5 | 4/5 | 4/5 |
| Earned Imperfection | 4/5 | 5/5 | 3/5 |
| **TOTAL** | **12/20** | **13/20** | **16/20** |

**SCORING RATIONALE:**

1. **Visible Process:** Blue noise fails this test. It looks like film grain—you cannot "count" the mechanism or perceive how the image was made. A-LARGE's grid is clearly countable, showing a mechanical printing process.

2. **Interior Porosity:** Blue noise creates dense, uniform coverage. A-LARGE's larger dots with clear gaps allow more background to show through light areas.

3. **Material Presence:** Similar scores. Blue noise feels photographic/filmic. A-LARGE feels printed. Both evoke physical processes.

4. **Earned Imperfection:** Blue noise wins here—its irregular distribution feels organic. A-LARGE's perfect grid feels mechanical. But this 2-point advantage doesn't overcome the 4-point deficit in other areas.

**SHIMMER EVALUATION:**
- SUBLIMINAL TEST: Animation not visible in static screenshot (requires live observation)
- Assessment: Even with shimmer bonus (+1 for earned imperfection), score remains below A-LARGE

**REASONING CHAIN:**
1. Blue noise excels at "organic feel" but fails "visible process" test
2. "Visible Process" requires countable, perceivable mechanism (plan definition)
3. Blue noise looks like film grain—you cannot imagine "what made this"
4. A-LARGE achieves visible process through its clear dot grid
5. Interior porosity also favors A-LARGE (larger gaps)
6. Blue noise's earned imperfection advantage (+2) doesn't overcome deficits (-4)
7. Net: A-LARGE remains superior for our soul piece priorities

**DECISION:** Continue with A-LARGE halftone as primary treatment. Blue noise does not supersede.
**CONFIDENCE:** HIGH
**DEPENDENCIES:** None
**LOCKED:** YES

**REVISION CONDITIONS:** Would reconsider if:
- "Visible Process" priority is downgraded from P0 to P2
- Film/photographic aesthetic becomes preferred over print aesthetic
- Server-side true halftone becomes available (may make blue noise comparison moot)

---

### SNAPSHOT 3: Step 1 Blue Noise Complete
**Timestamp:** 2026-02-03
**Position:** Step 1 COMPLETE, ready for Layout Context Protocol application

**Completed:**
- Downloaded blue noise textures from momentsingraphics.de
- Created exp1-blue-noise.html with G-STATIC, G-SHIMMER, A-LARGE variants
- Captured comparison screenshot
- Scored all three variants against 4 soul pieces
- Confirmed A-LARGE (16/20) > G-SHIMMER (13/20) > G-STATIC (12/20)
- Decision D-1-04 logged and locked

**Key Finding:**
Blue noise creates organic irregularity (good for "earned imperfection") but fails "visible process" test (cannot count/perceive mechanism). For our KortAI/Paper-aligned print aesthetic, the mechanical halftone pattern is more appropriate than film-grain-like blue noise.

**Next:** Apply Layout Context Protocol to Experiments 2-5 (missing from original execution)

---

### DECISION D-LCP-01: Layout Context Protocol Validation

**ID:** D-LCP-01.v1
**Timestamp:** 2026-02-03
**Experiment Context:** Post-Experiment 5 — Retroactive Layout Context Evaluation

**DECISION STATEMENT:** The integrated card (A-LARGE halftone + Image-Top + Red Italic Sentence Case) passes all 4 layout context tests (4/4). No revisions needed to Experiments 1-5 decisions.

**LAYOUT CONTEXT SCORES:**

| Context | Result | Notes |
|---------|--------|-------|
| Horizontal Scroll | **PASS** | Cards create musical rhythm, treatment survives scanning |
| Dense Grid (3x3) | **PASS** | Organized density, cards cooperate, adequate breathing room |
| Mixed Content | **PASS** | Card holds presence next to hero, prose, and code |
| Axis Transition | **PASS** | Works in both horizontal and grid, switching feels natural |

**EVIDENCE CONSULTED:**
- Screenshot: layout-context-full.png
- Created layout-context-test.html with all 4 contexts
- Visual analysis of integrated card in multiple layouts

**KEY FINDINGS:**
1. A-LARGE halftone creates visual unity across card arrays
2. Cards cooperate (not compete) in dense layouts
3. Image-Top layout provides consistent rhythm
4. Red + Italic typography doesn't fight with images at scale
5. Design is layout-agnostic (works in H-scroll and grid)

**INTERNAL CARD STRUCTURE:**
- Our card: 4 zones (Image, Title, Year, Tags)
- KortAI: 5-6 zones
- Gap: -1 to -2 zones (intentional — Paper Theme alignment)
- Structure Score: 4/5

**DECISION:** Proceed to Experiment 6. No revisions to Exp 1-5 decisions.
**CONFIDENCE:** HIGH
**LOCKED:** YES

---

### SNAPSHOT 4: Layout Context Protocol Complete
**Timestamp:** 2026-02-03
**Position:** Layout Context Protocol COMPLETE, ready for Experiment 6

**Completed:**
- Created layout-context-test.html with all 4 contexts
- Tested integrated card in horizontal scroll (5 cards)
- Tested in dense grid (9 cards in 3x3)
- Tested in mixed content (hero, prose, code)
- Tested axis transition (H-scroll into grid)
- All 4 contexts PASS
- Decision D-LCP-01 logged and locked

**Key Finding:**
The integrated card design is validated for multiple layout contexts. No adjustments needed. The design is layout-agnostic and creates cohesive visual rhythm in both horizontal and vertical arrangements.

**Next:** Execute Experiment 6 (Layout Infrastructure)

---

## OPEN QUESTIONS (Updated)

1. ~~What is the exact halftone dot size range in KortAI reference?~~ **ANSWERED: 1-5px based on luminance**
2. ~~How does Paper Theme achieve interior porosity?~~ **ANSWERED: Coarse dots allow cream to show through all light areas**
3. ~~What is the current system's baseline soul alignment score?~~ **ANSWERED: 42% (19/45)**
4. **NEW:** What halftone technique will best achieve variable dot size in CSS/browser?
5. **NEW:** Should we optimize for KortAI (dashboard) or Paper Theme (gallery) direction?

---

## VALIDATED FINDINGS (Phase 0)

### Finding P0-1: Variable Dot Size is Non-Negotiable
**Perceptual Truth:** Both references achieve "Visible Process" through dots that VARY IN SIZE based on image luminance. Uniform dots fail the test.
**Test:** Are dots larger in shadows, smaller/absent in highlights?
**Anti-pattern:** Uniform grid of same-size dots overlaid on image
**Iterations:** Confirmed by KortAI page, KortAI card detail, plan baseline

### Finding P0-2: Interior Porosity Requires Light Areas in Image
**Perceptual Truth:** Background can only show through where dots are sparse or absent. High-contrast images with highlights demonstrate porosity best.
**Test:** Is background color visible within the image area?
**Anti-pattern:** Dark, moody images with no light areas; solid color fills
**Iterations:** Confirmed by both references, contrasts with current system

### Finding P0-3: Current Typography Fights Itself
**Perceptual Truth:** Stacking RED + ITALIC + UPPERCASE creates competition, not hierarchy. References use max 1 emphasis.
**Test:** In a grid of 6 cards, is the typography calm or shouting?
**Anti-pattern:** Multiple emphases on the same element
**Iterations:** Confirmed by KortAI (size only), Paper Theme (position only)

---

## RESUME INSTRUCTIONS (If Context Lost)

**WHERE WE ARE:**
- Phase: 0 COMPLETE
- Ready for: Experiment 1 (Visible Process)
- Next action: Create halftone prototype variants

**WHAT WAS JUST COMPLETED:**
- Full reference baseline analysis
- 10 soul piece comparison matrix
- Current system scored at 42%
- P0/P1/P2 gap priorities established

**WHAT TO DO NEXT:**
1. Create Experiment 1 prototype HTML files
2. Start with halftone variants (A-small, A-medium, A-large)
3. Use test images from card-system/assets/
4. Serve via http://localhost:8765
5. Screenshot each with Playwright
6. Deploy sub-agents for analysis

**FILES TO READ FIRST:**
1. This file (VALIDATION-SPRINT-DECISION-LOG.md)
2. VISUAL-COMPARISON-BASELINE.md (scoring criteria)
3. REFERENCE-A-PROVIDED-ANALYSIS.md (KortAI baseline)
4. REFERENCE-A-PROVIDED-CARD-ANALYSIS.md (Card details)

**SOUL PIECE STATUS:**
| # | Soul Piece | Status | Winner/Approach |
|---|------------|--------|-----------------|
| 1 | Visible Process | **DECIDED** | A-LARGE halftone (CSS limited) |
| 2 | Material Presence | **DECIDED** | A-LARGE halftone or C-VARIABLE stipple |
| 3 | Constraint as Identity | BASELINE OK | Current system adequate |
| 4 | Image as Foundation | TESTING (Exp 2) | - |
| 5 | Typography Restraint | TESTING (Exp 3) | - |
| 6 | Interior Porosity | **DECIDED** | A-LARGE halftone (best gaps) |
| 7 | Earned Imperfection | **DECIDED** | C-VARIABLE stipple (fallback) |
| 8 | Organized Density | TESTING (Exp 6) | - |
| 9 | Multi-Axis Movement | TESTING (Exp 6) | - |
| 10 | Internal Card Structure | TESTING (Exp 2, 6) | - |

**IF RESUMING, START BY:**
Creating Experiment 2 layout prototypes (image-top, image-bottom-large, side-by-side, etc.)

---

## EXPERIMENT 1 PREPARATION

### Prototypes to Create (18 total):

**Priority batch (create first):**
1. exp1-halftone-medium.html (A-medium: 4-6px dots)
2. exp1-grain-15-multiply.html (B-15%-multiply)
3. exp1-stipple-variable.html (C-variable)
4. exp1-lines-diagonal.html (D-diagonal)
5. exp1-paper-bg-medium.html (E-medium)
6. exp1-current.html (F-baseline) — or screenshot existing

**Full batch (after priority analysis):**
- A-small, A-large
- B-5%/30% multiply, B-5%/15%/30% overlay
- C-uniform
- D-horizontal, D-crosshatch
- E-subtle, E-heavy

### Test Image Requirements:
- Need image with BOTH light and dark areas
- Portrait or landscape with clear subject
- Check card-system/assets/ for available images
