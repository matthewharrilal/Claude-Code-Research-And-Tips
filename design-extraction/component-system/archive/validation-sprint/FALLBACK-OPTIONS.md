# FALLBACK OPTIONS
## Validated Alternatives If Primary Approaches Fail

**Date:** 2026-02-03
**Based on:** Validation Sprint Experiments 1-5

---

## IMAGE TREATMENT FALLBACKS

| Rank | Approach | Soul Score | When to Use |
|------|----------|------------|-------------|
| 1 | **True Halftone** (server-side) | 20/20 | Default when server processing available |
| 2 | **Stipple Pattern** (CSS mask) | 12/20 | If server processing unavailable, want visible mechanism |
| 3 | **Current Duotone** (CSS blend) | 5/20 | If all patterns feel gimmicky or performance is critical |
| 4 | **Horizontal Lines** (CSS mask) | 10/20 | If stipple feels too "illustrative" |
| 5 | **Grain Overlay** (SVG filter) | 6/20 | NOT RECOMMENDED — invisible at web sizes |
| 6 | **Paper Background Only** | 5/20 | NOT RECOMMENDED — creates material dissonance |

### Implementation Notes

**True Halftone (Rank 1):**
```javascript
// Server-side processing required
// Sharp, Jimp, or image CDN (Cloudinary, Imgix)
// Converts luminance → dot size
// Creates Paper/KortAI reference quality
```

**Stipple Pattern (Rank 2):**
```css
/* CSS-only fallback */
.stipple {
  mask-image: url('stipple-pattern.svg');
  mask-size: 8px 8px;
}
/* Achieves visible mechanism but not true halftone */
/* Feels "illustrative" rather than "editorial" */
```

**Current Duotone (Rank 3):**
```css
/* No change from current implementation */
/* Smooth, digital, no visible process */
/* Acceptable for Phase 1 while building Phase 2 */
```

---

## LAYOUT FALLBACKS

| Rank | Layout | Foundation Score | When to Use |
|------|--------|------------------|-------------|
| 1 | **Image-Top** (Paper style) | 5/5 | Default — achieves "Image as Foundation" |
| 2 | **Image-Background** (full bleed) | 5/5 | If cards need maximum visual impact |
| 3 | **Image-Bottom-Large** (70%) | 3/5 | If content must remain accessible at top |
| 4 | **Side-by-Side** (50/50) | 2/5 | If dashboard/scanning is primary use |
| 5 | **Current** (content first) | 1/5 | NOT RECOMMENDED — fails Image as Foundation |

### Implementation Notes

**Image-Top (Rank 1):**
```css
.project-card {
  display: flex;
  flex-direction: column;
}
.project-card__media { order: -1; }
/* Clear hierarchy, image dominates */
```

**Image-Background (Rank 2):**
```css
.project-card {
  position: relative;
  min-height: 400px;
  background-image: url(...);
}
.project-card__content {
  position: absolute;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
}
/* Most literal "Image as Foundation" */
/* Requires careful text treatment for readability */
```

---

## TYPOGRAPHY FALLBACKS

| Rank | Variant | Calm + Recognition | When to Use |
|------|---------|-------------------|-------------|
| 1 | **Red + Italic** (sentence case) | 7/10 | Default — best balance |
| 2 | **Italic Only** (black) | 8/10 | If red feels too aggressive |
| 3 | **Red Only** (roman) | 6/10 | If serif italic feels too casual |
| 4 | **Position Only** (no emphasis) | 6/10 | For maximum restraint |
| 5 | **Red + Italic + Uppercase** (current) | 5/10 | NOT RECOMMENDED — too aggressive |

### Implementation Notes

**Red + Italic (Rank 1):**
```css
.project-card__title {
  color: #E83025;
  font-style: italic;
  text-transform: none; /* No uppercase */
}
/* Removes aggression while keeping brand + warmth */
```

**Italic Only (Rank 2):**
```css
.project-card__title {
  color: #1A1A1A; /* Black */
  font-style: italic;
  text-transform: none;
}
/* Maximum calm, relies on serif italic for distinction */
/* Tags still provide red brand reinforcement */
```

---

## COMBINED FALLBACK SCENARIOS

### Scenario A: Halftone Looks Gimmicky

**Symptom:** Stipple/halftone pattern feels like a filter, not print heritage

**Fallback Strategy:**
- Switch image treatment to: **Current Duotone** (smooth, no pattern)
- Keep layout: **Image-Top**
- Keep typography: **Red + Italic**
- Expected soul alignment: 3/7 (same as Phase 1 baseline)

**Rationale:** Better to have smooth professional duotone than gimmicky halftone. Visible Process can wait for true server-side halftone.

---

### Scenario B: Image-Top Layout Doesn't Fit Content

**Symptom:** Content requires more metadata visibility, or images are low quality

**Fallback Strategy:**
- Keep image treatment: **Current Duotone**
- Switch layout to: **Image-Bottom-Large** (70% image at bottom)
- Keep typography: **Red + Italic**
- Expected soul alignment: 2/7

**Rationale:** Maintains large image presence while keeping content accessible at top for scanning.

---

### Scenario C: Typography Reduction Loses Brand Recognition

**Symptom:** Without uppercase, cards are no longer recognizable as "that system"

**Fallback Strategy:**
- Keep image treatment: **Current Duotone**
- Keep layout: **Image-Top**
- Switch typography to: **Red + Italic + Uppercase** (current)
- Consider: Smaller title size even with uppercase
- Expected soul alignment: 2/7

**Rationale:** Brand recognition may be more important than typography restraint. Can compensate with smaller size.

---

### Scenario D: Multiple Issues Compound

**Symptom:** Image quality varies wildly, content is dense, brand recognition critical

**Fallback Strategy:**
1. Layout: **Side-by-Side** (50/50 split)
2. Typography: **Red + Italic** (sentence case)
3. Image treatment: **Current Duotone**
4. Accept: This is more KortAI than Paper alignment
5. Expected soul alignment: 1/7

**Minimum acceptable soul alignment:** 1/7 (at least maintain constraint as identity with duotone)

**When to escalate:** If even Side-by-Side + Duotone doesn't work, the content may need restructuring rather than design changes.

---

## DECISION TREE

```
START
│
├─ Is server-side image processing available?
│   ├─ YES → Use True Halftone
│   └─ NO → Continue to CSS fallbacks
│
├─ Does stipple pattern look acceptable?
│   ├─ YES → Use Stipple Pattern
│   └─ NO → Use Current Duotone
│
├─ Does Image-Top work with actual content?
│   ├─ YES → Use Image-Top
│   └─ NO → Use Image-Bottom-Large
│
├─ Does Red + Italic preserve brand recognition?
│   ├─ YES → Use Red + Italic
│   └─ NO → Consider Red + Italic + Uppercase (smaller)
│
END → Implement chosen combination
```

---

## SOUL ALIGNMENT BY FALLBACK COMBINATION

| Image | Layout | Typography | Soul Score | Viable? |
|-------|--------|------------|------------|---------|
| True Halftone | Image-Top | Red + Italic | 7/7 | **IDEAL** |
| Stipple | Image-Top | Red + Italic | 4/7 | Good |
| Duotone | Image-Top | Red + Italic | 3/7 | **PHASE 1** |
| Duotone | Image-Top | R+I+Uppercase | 2/7 | Acceptable |
| Duotone | Bottom-Large | Red + Italic | 2/7 | Acceptable |
| Duotone | Side-by-Side | Red + Italic | 1/7 | Minimum |
| Duotone | Current | R+I+Uppercase | 0/7 | **CURRENT** |

---

## RECOVERY CHECKLIST

If a fallback is needed during implementation:

1. [ ] Document which primary approach failed
2. [ ] Note the specific failure mode (visual, performance, content fit)
3. [ ] Select fallback from ranked list
4. [ ] Verify fallback achieves minimum soul alignment (≥1/7)
5. [ ] Test fallback at grid scale (6+ cards)
6. [ ] Update VALIDATED-IMPLEMENTATION-SPEC.md with changes
7. [ ] Add to BLINDSPOT-TRACKER.md for future reference

---

*Fallback options documented: 2026-02-03*
*Based on: Validation Sprint Experiments 1-5*
