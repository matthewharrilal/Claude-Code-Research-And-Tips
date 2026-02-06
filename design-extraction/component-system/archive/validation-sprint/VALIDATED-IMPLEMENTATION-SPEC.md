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

# VALIDATED IMPLEMENTATION SPEC

**Based on:** Validation Sprint — Full Perceptual Deepening Protocol
**Date:** 2026-02-03
**Status:** Ready for Implementation

---

## EXECUTIVE SUMMARY

The validation sprint tested 5 core hypotheses across layout, typography, image treatment, and use case alignment. Key findings:

1. **Image-Top layout** achieves "Image as Foundation" (Experiment 2)
2. **Red + Italic, sentence case** achieves typography restraint (Experiment 3)
3. **CSS-only halftone fails** — true halftone requires image processing (Experiment 1)
4. **Paper Theme alignment** is correct for our use case (Experiment 4)
5. **Integrated prototype** shows major improvement over current (Experiment 5)

**Recommendation:** Implement layout and typography changes immediately. Defer image treatment to future enhancement phase.

---

## IMPLEMENTATION PHASES

### Phase 1: Immediate (CSS-Only Changes)

**Layout Structure:**
```css
/* Card structure changes from content-first to image-first */
.project-card {
  display: flex;
  flex-direction: column;
}

.project-card__media {
  order: -1; /* Move image to top */
  margin-bottom: 16px;
}

.project-card__media img {
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
}
```

**Typography Changes:**
```css
/* Remove uppercase, keep red + italic */
.project-card__title {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-weight: normal;
  text-transform: none; /* CHANGED: was uppercase */
  color: #E83025;
  font-size: clamp(18px, 2.5vw, 24px); /* CHANGED: reduced from 32px max */
  letter-spacing: -0.01em;
  line-height: 1.1;
}
```

**Preserve:**
- Tags with red outline (brand continuity)
- Transparent container (no background, border, shadow)
- Sharp corners (0 border-radius)
- Duotone image treatment (color constraint)

### Phase 2: Future Enhancement (Server-Side)

**True Halftone Image Processing:**
- Requires server-side image processing (Sharp, Jimp, or similar)
- Convert image luminance to variable dot size
- Create dots that vary: large in shadows, small/absent in highlights
- Background color (cream) shows through sparse dot areas

**Implementation approaches:**
1. Build-time: Process images during build, generate halftone versions
2. Runtime: Use serverless function to process on-demand
3. CDN: Use image processing CDN (Cloudinary, Imgix) with custom transforms

---

## SOUL PIECE ACHIEVEMENT

| Soul Piece | Phase 1 (CSS) | Phase 2 (Server) | Priority |
|------------|---------------|------------------|----------|
| Image as Foundation | **YES** | YES | P0 |
| Typography Restraint | **YES** | YES | P1 |
| Constraint as Identity | **YES** | YES | P2 |
| Material Presence | PARTIAL | **YES** | P1 |
| Visible Process | NO | **YES** | P1 |
| Interior Porosity | NO | **YES** | P2 |
| Earned Imperfection | NO | **YES** | P2 |

**Phase 1 achieves:** 3/7 soul pieces (core structural improvement)
**Phase 2 achieves:** 7/7 soul pieces (full vision)

---

## DETAILED SPECIFICATIONS

### Card Layout (Phase 1)

**HTML Structure:**
```html
<article class="project-card">
  <!-- Image FIRST (top) -->
  <div class="project-card__media duotone">
    <img src="image.jpg" alt="Project image">
  </div>

  <!-- Content SECOND (below) -->
  <div class="project-card__content">
    <header class="project-card__header">
      <h3 class="project-card__title">Project Name Here</h3>
      <span class="project-card__year">2025</span>
    </header>
    <div class="project-card__tags">
      <span class="tag">Category</span>
    </div>
  </div>
</article>
```

**CSS Variables (Updated):**
```css
:root {
  /* Layout */
  --card-image-ratio: 4 / 3;
  --card-content-gap: 16px;

  /* Typography - UPDATED */
  --title-size-min: 18px;
  --title-size-max: 24px; /* Was 32px */
  --title-transform: none; /* Was uppercase */

  /* Colors - UNCHANGED */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
}
```

### Typography (Phase 1)

**Title Treatment:**
- Font: Instrument Serif, italic
- Color: #E83025 (brand red)
- Transform: None (sentence case, NOT uppercase)
- Size: 18-24px (responsive)
- Weight: Normal (400)

**Year:**
- Font: Inter, regular
- Color: #1A1A1A
- Size: 14px

**Tags:**
- Font: Inter, 500 weight
- Transform: Uppercase (maintains brand in tags)
- Border: 1px solid #E83025
- Background: Transparent

### Image Treatment (Phase 1 — Fallback)

**Duotone (CSS Blend Mode):**
```css
.duotone {
  position: relative;
  isolation: isolate;
}

.duotone::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #C25C4E; /* Shadow tone */
  mix-blend-mode: darken;
  pointer-events: none;
}

.duotone::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #F5F0E8; /* Highlight tone */
  mix-blend-mode: lighten;
  pointer-events: none;
}

.duotone img {
  filter: grayscale(100%) contrast(1.1);
}
```

### Image Treatment (Phase 2 — True Halftone)

**Processing Pipeline:**
1. Input: Original image
2. Convert to grayscale
3. Map luminance to dot size (0-255 → 0-8px dot radius)
4. Render dots on grid (10px spacing)
5. Apply duotone colors
6. Output: Halftone image

**Expected Result:**
- Dark areas: Large dots (visible, merge together)
- Light areas: Small dots (sparse, background shows through)
- Mid-tones: Medium dots (countable at arm's length)

---

## VALIDATION CRITERIA

### Phase 1 Validation

Before shipping Phase 1, verify:

- [ ] Eye lands on IMAGE first (not title)
- [ ] Grid of 6+ cards feels CALM (not competitive)
- [ ] Typography feels like ANNOTATION (not headline)
- [ ] Image dominates ~70% of card height
- [ ] Tags maintain brand recognition
- [ ] Works with mixed-quality images
- [ ] Responsive behavior is acceptable

### Phase 2 Validation

Before shipping Phase 2, verify:

- [ ] Dots are COUNTABLE at arm's length
- [ ] Dot SIZE varies with image luminance
- [ ] Background (cream) shows through light areas
- [ ] Can imagine "printing process" that made this
- [ ] Works across varied image content
- [ ] Performance is acceptable at scale

---

## RISK MITIGATION

### Phase 1 Risks

| Risk | Mitigation |
|------|------------|
| Long titles break layout | Test with real content, add truncation if needed |
| Missing images cause issues | Design graceful fallback (placeholder or text-only) |
| Brand recognition loss | Tags maintain red, provides continuity |
| Mobile layout issues | Test responsive behavior, adjust breakpoints |

### Phase 2 Risks

| Risk | Mitigation |
|------|------------|
| Processing performance | Cache processed images, use CDN |
| Low-quality source images | Halftone can mask quality issues (feature!) |
| Build time increase | Process images in parallel, cache results |
| Server costs | Start with build-time processing, evaluate usage |

---

## REFERENCE ALIGNMENT CHECKLIST

Compared to Paper Theme reference:

| Aspect | Paper | Our Target | Gap |
|--------|-------|------------|-----|
| Image dominance | 90% | 70% | Acceptable (we need more content) |
| Typography volume | Minimal | Minimal + tags | Acceptable (brand needs) |
| Dot visibility | Very visible | TBD (Phase 2) | Requires implementation |
| Sharp corners | Yes | Yes | Aligned |
| Interior porosity | Yes | TBD (Phase 2) | Requires implementation |
| Collectible feel | Strong | Medium | Improving |

---

## SUCCESS METRICS

### Qualitative (Perceptual)

1. **Squint Test:** Images dominate when blurred
2. **Calm Test:** 6+ card grid feels browsable not competitive
3. **Foundation Test:** Eye lands on image first
4. **Restraint Test:** Typography serves rather than fights

### Quantitative (Measurable)

1. Image height: ≥65% of card height
2. Title size: ≤24px max
3. Performance: <100ms render time per card
4. Accessibility: Readable without images (graceful degradation)

---

*Spec created: 2026-02-03*
*Based on: Validation Sprint Experiments 1-5*
*Status: Ready for Implementation (Phase 1)*
