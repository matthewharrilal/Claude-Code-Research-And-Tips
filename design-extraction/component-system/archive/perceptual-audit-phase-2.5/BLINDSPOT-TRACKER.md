<!--
═══════════════════════════════════════════════════════════════
⚠️  SUPERSEDED — DO NOT USE FOR NEW WORK
═══════════════════════════════════════════════════════════════

STATUS: This file has been superseded and contains OUTDATED values.

SUPERSEDED BY: design-extraction/component-system/perceptual-audit-v2/

WHY THIS EXISTS: Phase 2.5 audit superseded by v2. Evolution: 7 soul
pieces → 5.

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

# BLINDSPOT TRACKER
## What We Almost Missed

*Tracking the uncomfortable corners and avoided examinations*

---

## PHASE 0: CURRENT SYSTEM BASELINE

### Typography Blindspots
- **Line length edge cases** — Didn't examine how "ALPHA PROJECT" vs "COMPREHENSIVE DESIGN SYSTEM OVERHAUL" affect composition
- **Responsive behavior** — Only looked at desktop; high-contrast serif might fail at small sizes
- **Cultural associations** — Italic serif carries baggage (fashion magazines, luxury) that may not fit all content
- **Repetition fatigue** — Analyzed few cards; 50+ cards might reveal exhaustion

### Spacing Blindspots
- **Line-height within text** — Focused on gaps BETWEEN elements, not breathing WITHIN paragraphs
- **Responsive collapse** — How does spacing transform on mobile?
- **Reading direction flow** — Does spacing support left-to-right scanning?

### Container Blindspots
- **Negative space as container** — The gaps between cards do containment work
- **Page background relationship** — Cards are white-on-cream; this contrast does work
- **Hover state changes** — Only analyzed static state

### Hierarchy Blindspots
- **Hover/interaction hierarchy** — How does hierarchy shift on interaction?
- **Scroll position hierarchy** — Which card "wins" when partially visible?
- **Color fatigue** — Does red lose punch with multiple titles in view?

### Composition Blindspots
- **Negative space as shape** — What do the VOIDS look like?
- **Diagonal energy** — Everything analyzed was horizontal/vertical
- **Scale relationships** — Badge-to-text ratios not examined

### Image Treatment Blindspots
- **Real photographs** — All demos use placeholders; real photos behave differently
- **Loading sequence** — What happens BEFORE image loads?
- **Print/export** — How does screen-optimized blend translate to print?

---

## PHASE 1: REFERENCE ANALYSIS

### KortAI Blindspots (Investigated)
- **Initially dismissed as "tech dashboard"** — Almost missed the editorial qualities beneath the data
- **Focused on dots, missed hierarchy** — The calmness comes from clear hierarchy, not just texture
- **Ignored the metadata system** — Dates/locations/counts are treated with unusual dignity

### Paper Theme Blindspots (Investigated)
- **Assumed duotone, was actually monotone** — Key distinction that almost slipped by
- **Missed corner punctuation** — The logo and expand buttons create compositional tension
- **Overlooked vertical text** — Japanese kanji running vertically is compositional, not decorative

---

## PHASE 2-3: SYNTHESIS & GAP ANALYSIS

### Blindspots Caught
1. **The CSS Ceiling** — Kept trying to solve soul pieces with blend modes when the soul pieces require different technology. Investigated: confirmed that CSS cannot create visible dots.

2. **Process-Visibility Connection** — Initially thought "color treatment" and "texture" were separate concerns. Investigated: they're the same concern (visible vs invisible transformation).

3. **The Typography Trap** — Assumed red italic uppercase was correct because Sanrok uses it. Investigated: in context of full editorial layout it works differently than isolated in a card grid.

4. **The Perfection Instinct** — Kept smoothing things that needed to be rough. Investigated: the instinct to "clean up" works against material presence.

5. **The Image Position Assumption** — Web convention says "image first = visual impact." Investigated: references put images first STRUCTURALLY (as foundation), not just visually.

---

## SOUL REFINEMENT BLINDSPOTS

### Visible Process
- **Performance cost avoidance** — Real halftone is computationally expensive; kept hoping for easy CSS solution
- **Uncanny valley avoidance** — Bad halftone looks worse than no halftone; avoided commitment

### Material Presence
- **"Just add texture overlay" temptation** — Avoided facing that texture overlays look fake; this requires design-as-if-printing mindset
- **Removing things** — Avoided that material presence might mean LESS animation, fewer effects

### Constraint as Identity
- **Rigidity discomfort** — Avoided that true constraint means accepting "worse" results sometimes
- **Current system isn't constrained enough** — Avoided that duotone might need to become MORE limiting

### Image as Foundation
- **Radical implication** — Avoided that some cards should be MOSTLY image (80/20 inversion)
- **Accessibility concerns** — What about content that needs to be text-first?

### Typography Restraint
- **Plainness fear** — Avoided that restraint might feel "boring" (references prove it doesn't)
- **Brand recognition concern** — What if we lose distinctiveness by reducing emphasis?

### Interior Porosity
- **Implementation difficulty** — SVG filters, canvas, preprocessing — all harder than blend modes
- **Degree calibration** — How MUCH porosity is enough?

### Earned Imperfection
- **The cost** — Implementing controlled variation is harder than smoothness
- **The risk** — Imperfection done wrong looks like errors

---

## OVERALL BLINDSPOTS (META)

### What We Were Avoiding
1. **The technology change** — Hoped CSS could do it; it can't
2. **The typography identity crisis** — Red italic uppercase IS our current identity; changing it is scary
3. **The image inversion** — Bottom-to-top is a structural change, not a styling tweak
4. **The perfection reversal** — Everything in web dev says "smooth is better"

### What We Finally Faced
All of the above. The soul pieces demand:
- New technology (halftone implementation)
- Typography reduction (lose 2 of 3 emphases)
- Structural change (image position)
- Philosophy reversal (controlled imperfection)

---

## LESSONS FOR FUTURE AUDITS

1. **Name the discomfort early** — If something feels uncomfortable to examine, that's where the insight lives
2. **Question the tools** — The available tools shape what we can see; ask "what can't this tool do?"
3. **Test assumptions against references** — "Sanrok uses X" doesn't mean X works in our context
4. **Examine the instincts** — The instinct to smooth, to perfect, to polish may be working against the goal
5. **Composite over individual** — Single elements can look fine; the blindspot is often in how they compose together

---

*Blindspot tracking complete. 2026-02-03*
