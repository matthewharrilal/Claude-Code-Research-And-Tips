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

File: component-system/archive/validation-sprint/EXPERIMENT-2-CARD-LAYOUT.md
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

# EXPERIMENT 2 RESULTS: CARD LAYOUT STRUCTURE

**Date:** 2026-02-03
**Status:** COMPLETE — Browser-Verified
**Prototypes Built:** 6 (Image-Top, Image-Bottom-Large, Side-by-Side, Image-as-Background, Split/Overlap, Current)
**Screenshots Captured:** exp2-layout-top-full.png, exp2-layout-bottom-large-full.png, exp2-layout-side-full.png, exp2-layout-background-full.png, exp2-layout-split-full.png, exp2-layout-current-full.png

---

## SQUINT TESTS

### Layout 1: Image-Top (Paper Style)

**Dominant shape:** Large rectangular image mass at top, small text band below
**Weight concentration:** Top 65-70% of card
**Balance type:** Top-heavy, but intentionally so (image as anchor)
**Overall feeling:** Magazine layout, image-driven, content as annotation

---

### Layout 2: Image-Bottom-Large (Current + Enlarged)

**Dominant shape:** Text at top, large rectangular image mass at bottom
**Weight concentration:** Bottom 65-70% of card
**Balance type:** Bottom-heavy, image as visual anchor below content
**Overall feeling:** Current layout evolved, but eye still reads title first

---

### Layout 3: Side-by-Side (KortAI Inspired)

**Dominant shape:** Two vertical columns of roughly equal weight
**Weight concentration:** Split horizontally between image and content
**Balance type:** Symmetric, horizontal tension
**Overall feeling:** Dashboard module, content and image as equals, functional

---

### Layout 4: Image-as-Background

**Dominant shape:** Full card is image, text floats on surface
**Weight concentration:** Image IS the card, text is thin overlay
**Balance type:** Image dominates completely
**Overall feeling:** Cinematic, poster-like, most literal "Image as Foundation"

---

### Layout 5: Split/Overlap (Experimental)

**Dominant shape:** Asymmetric split, dynamic tension
**Weight concentration:** Depends on variant (40/60 or 60/40 split)
**Balance type:** Intentional asymmetry, creates energy
**Overall feeling:** Magazine editorial, designed tension, interesting overlap variant

---

### Layout 6: Current (Baseline)

**Dominant shape:** Text band at top, small image rectangle at bottom
**Weight concentration:** Top (typography dominates due to color/style)
**Balance type:** Text-heavy, image as afterthought
**Overall feeling:** Content-first, image is supporting illustration

---

## EYE LANDING ANALYSIS

| Layout | Eye Lands First | Second | Third | Image Feels Like Foundation? |
|--------|-----------------|--------|-------|------------------------------|
| 1: Image-Top | IMAGE (large, top) | Title | Tags/Year | **YES** - image commands attention |
| 2: Bottom-Large | TITLE (top position) | Tags | Image | PARTIAL - image is big but read second |
| 3: Side-by-Side | IMAGE (left in L→R) | Title | Tags | PARTIAL - depends on reading direction |
| 4: Background | IMAGE (fills card) | Title overlay | Tags | **YES** - image IS the card |
| 5: Split/Overlap | Variable | Variable | Variable | PARTIAL - depends on variant |
| 6: Current | **TITLE** (red, emphasized) | Tags | Image | **NO** - typography dominates |

---

## COMPOSITION ANALYSIS

| Layout | Energy Level | Designed vs Stacked | Tension Type | Edge Awareness |
|--------|--------------|---------------------|--------------|----------------|
| 1: Image-Top | Calm, confident | DESIGNED | Vertical flow | Image fills to edges |
| 2: Bottom-Large | Moderate | Partially designed | Top-to-bottom flow | Standard |
| 3: Side-by-Side | Functional | DESIGNED | Horizontal pull | Columnar |
| 4: Background | Dramatic | DESIGNED | Text-image contrast | Full bleed |
| 5: Split/Overlap | Dynamic | DESIGNED | Asymmetric tension | Overlap creates layers |
| 6: Current | Static, text-heavy | Stacked | Minimal | Standard |

---

## KEY INSIGHT: "IMAGE AS FOUNDATION" TEST

**Can "Image as Foundation" be achieved WITHOUT top position?**

**Answer:** PARTIALLY, but top position is the most reliable way to achieve it.

**Findings:**

1. **Image-Top (Paper Style):** Most directly achieves "Image as Foundation" - eye lands on image first, content elaborates below. This matches the Paper Theme reference.

2. **Image-as-Background:** Achieves "Image as Foundation" most literally - the image IS the foundation. Everything sits on the image surface. However, requires careful text treatment for readability.

3. **Image-Bottom-Large:** Improving the current layout by enlarging the image HELPS but doesn't fully achieve "Image as Foundation." The eye still reads title first due to reading habits.

4. **Side-by-Side:** Creates EQUALITY between image and content, not hierarchy. Works for dashboard/scanning use cases but doesn't establish image as primary.

5. **Split/Overlap:** The overlap variant is interesting - content box ON the image creates annotation feeling similar to Paper Theme's museum label approach.

6. **Current:** FAILS "Image as Foundation" - typography dominates, image is afterthought.

---

## RECOMMENDATION

**Primary recommendation:** Image-Top (Layout 1)

**Why (perceptual):**
- Eye lands on image FIRST, establishing it as foundation
- Content below feels like elaboration, not competition
- Matches Paper Theme reference most closely
- Achieves "Image as Foundation" soul piece directly

**Fallback recommendation:** Image-as-Background (Layout 4)

**Why:**
- Most literal "Image as Foundation"
- Works well for high-quality imagery
- Creates poster/collectible feel
- BUT requires careful text treatment

**What we preserve from current:**
- Typography hierarchy (title, year, tags)
- Transparent container approach
- Sharp corners, no chrome

**What we change:**
- Image moves from BOTTOM to TOP
- Image size increases from ~25% to ~65-70%
- Content becomes annotation, not headline

---

## USE CASE CONSIDERATION

| Use Case | Best Layout | Why |
|----------|-------------|-----|
| Portfolio/showcase (scanning) | Image-Top or Side-by-Side | Clear hierarchy, efficient scanning |
| Art/collectible (admiring) | Image-as-Background or Image-Top | Maximum image impact |
| Dashboard (information) | Side-by-Side or Current | Content accessibility |
| Mixed content (some no-image) | Image-Bottom-Large or Current | Graceful degradation |

---

## REFERENCE COMPARISON

| Layout | Closer to KortAI | Closer to Paper | Recommendation |
|--------|------------------|-----------------|----------------|
| 1: Image-Top | PARTIAL | **CLOSE** | Paper-aligned (editorial) |
| 2: Bottom-Large | FAR | PARTIAL | Compromise option |
| 3: Side-by-Side | **CLOSE** | FAR | KortAI-aligned (dashboard) |
| 4: Background | FAR | **CLOSE** | Paper-aligned (collectible) |
| 5: Split/Overlap | PARTIAL | PARTIAL | Unique direction |
| 6: Current | FAR | FAR | Neither reference |

---

## KEY FINDINGS (After 5+ Iterations)

### Finding 1: Position Determines Hierarchy

**Perceptual Truth:** In vertical card layouts, what's at the TOP captures attention first. "Image as Foundation" requires image at top OR image filling the entire card.

**Test:** Where does your eye land in the first second?
**Anti-pattern:** Putting emphasized text above the image (current approach)

### Finding 2: Size Amplifies but Doesn't Override Position

**Perceptual Truth:** Making the bottom image larger helps but doesn't overcome reading habit of top-to-bottom scanning.

**Test:** Does enlarging image at bottom make it feel like foundation?
**Anti-pattern:** Assuming size alone creates hierarchy

### Finding 3: Overlap Creates Annotation Feeling

**Perceptual Truth:** When content overlaps the image area (rather than sitting outside it), the content feels like annotation rather than headline.

**Test:** Does text feel like it's describing the image or competing with it?
**Anti-pattern:** Keeping text fully outside image boundaries

### Finding 4: Typography Emphasis Competes with Image

**Perceptual Truth:** Strong typography emphasis (red, italic, uppercase) pulls attention away from image regardless of position.

**Test:** Does the typography draw more attention than the image?
**Anti-pattern:** Multiple emphases on title when image should dominate

---

## UNEXPECTED FINDINGS

1. **Side-by-side feels "dashboard":** Expected it to feel editorial, but horizontal split feels functional/informational rather than artistic.

2. **Overlap is underrated:** The split/overlap variant creates interesting layering that achieves annotation feeling without full background image.

3. **Typography emphasis matters more than expected:** Even with large images, the red italic uppercase title pulls focus in current system.

4. **Bottom position is surprisingly weak:** Even 70% bottom image doesn't overcome top-reading habit.

---

## BLINDSPOT ACKNOWLEDGMENT

### What I avoided examining:
1. **Mobile behavior:** All testing was desktop. Mobile may change optimal layout due to screen shape.
2. **Animation/hover states:** How do layouts feel when interacting, not just viewing?
3. **Real photography vs placeholders:** Actual high-contrast images might shift rankings.
4. **Grid rhythm at scale:** Single cards look different than grids of 12+.

### What I found when investigated:
The placeholder images actually helped isolate LAYOUT behavior from IMAGE quality. The cream rectangles made structural hierarchy visible without distraction.

---

## JOURNAL ENTRY — EXPERIMENT 2

**What I expected to find:**
I expected Image-Top to clearly win, but thought Image-Bottom-Large might be a viable compromise. Expected Side-by-Side to feel balanced.

**What I actually found:**
Image-Top is the clear winner for "Image as Foundation." Image-Bottom-Large is less effective than expected - position matters more than size. Side-by-Side feels functional, not editorial. The overlap variant in Split layout was a pleasant surprise.

**What surprised me:**
Typography emphasis competes with image more than position does. The red italic uppercase title draws the eye even when image is large. This suggests Typography Restraint (Experiment 3) may be crucial for Image as Foundation to work.

**What I was avoiding:**
I was avoiding admitting that the current layout fundamentally fails "Image as Foundation." The fix isn't incremental - it requires restructuring.

**How this changes my understanding:**
- Layout structure is foundational - you can't fix hierarchy with styling alone
- Typography restraint and image position work together
- "Image as Foundation" requires BOTH top position AND reduced typography emphasis

**Connections to other experiments:**
- **Experiment 1:** Image treatment (halftone) will be more visible with larger images from Image-Top layout
- **Experiment 3:** Typography restraint is CRITICAL - current red italic uppercase competes with any layout
- **Experiment 4:** Use case will determine whether Paper-style (Image-Top) or KortAI-style (Side-by-Side) is appropriate
- **Experiment 5:** Integration must combine Image-Top layout WITH typography restraint

---

*Document created: 2026-02-03*
*Browser verification: 2026-02-03*
*Status: COMPLETE — Findings documented, recommendation made*
