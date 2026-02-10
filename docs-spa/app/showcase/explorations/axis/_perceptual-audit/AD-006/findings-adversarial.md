# AD-006 Perceptual Audit: Adversarial Convention Challenge
## Adversarial Agent Findings (Lead Direct — based on 4 auditor reports + lock sheet + convention spec)

---

### PA-26: Pick one locked convention and argue it should change. What visual evidence supports your case?

#### Challenge Target: SCROLL-TRIGGERED REVEAL ANIMATION (Lock Sheet: CHALLENGEABLE — Convention Section 15.3)

**The convention allows** `opacity: 0->1; translateY: 20px->0` as an optional entrance animation triggered by IntersectionObserver.

**I argue it should be REMOVED entirely from AD-006, and reconsidered for all AD explorations.** Here is the visual evidence:

1. **Sections 6-7 are INVISIBLE at all viewports.** The single most catastrophic finding across all 4 auditors is that Sections 6 (Decision Matrix) and 7 (Fractal Meta) — the narrative climax and reflective conclusion — render as blank cream because scroll-triggered animations fail to fire with programmatic scrolling. But this isn't just a programmatic scroll issue — **any user whose scroll behavior doesn't trigger the IntersectionObserver at the exact threshold will see blank page.** Fast scrollers, keyboard navigators (Page Down), users with assistive scrolling, and touch-swipe users on tablets all risk hitting this failure mode.

2. **The animation contradicts ANTI-PHYSICAL identity.** The convention spec (Section 15.2) explicitly bans `transform: scale()`, `rotate()`, hover-lift, parallax, and `perspective`. The rationale: these imply physical objects moving in space. But `translateY: 20px->0` IS physical movement — an element sliding upward into position IS a physical metaphor. The convention draws a distinction ("reveal ≠ movement") that is philosophically incoherent. A fade-in without translation would be more identity-consistent.

3. **The animation adds nothing to comprehension.** The page's sections are already numbered (01-07), have clear headings, and use breathing zones between them. The progressive reveal doesn't help the reader orient — it DELAYS orientation. A user who scrolls to Section 04 expects to see Section 04 immediately, not watch it fade in over 0.3s.

4. **Evidence from Auditor C (Spatial+Grid):** "The rhythm STOPS. After Section 05, the next 5-6 screenfuls are blank cream." This rhythm death is a DIRECT consequence of the scroll-triggered animation. Without it, all 7 sections would be visible immediately, and the page's narrative arc would be complete.

5. **The lock sheet classifies this as CHALLENGEABLE.** It states: "Entrance animation feels unnecessary or jarring. Allowed by Convention Section 15.3, but is a builder choice (can be omitted)." All 4 auditors independently flagged the invisible sections as WOULD-NOT-SHIP. The convention PERMITS the animation but does not REQUIRE it. Removing it is convention-compliant.

**Verdict: REMOVE.** The animation's cost (invisible content, identity contradiction, zero comprehension benefit) vastly exceeds its benefit (aesthetic entrance). This is the single highest-impact fix available.

---

#### Secondary Challenge: DARK CODE BLOCKS (Lock Sheet: LOCKED — but auditable execution noted)

The lock sheet notes: "Code block contrast against warm cream background is CHALLENGEABLE (all 6 fresh-eyes flagged it as disruptive, but convention locks it)."

All 4 auditors noted the dark code blocks as visually disruptive:
- **Auditor A (PA-19):** "feels like a terminal window dropped into a book... every time the eye hits a dark code block, it jolts out of the warm reading experience"
- **Auditor B (Pass 1):** "body text comfortable except... code block well-formatted" (implicit: code block is the exception to reading flow)
- **Auditor D (PA-16):** "Section 06 (Decision Matrix) has a code block that visually disrupts the warm pattern"

I acknowledge this is LOCKED by convention and cannot be changed. However, the **frequency and placement** of code blocks is a builder choice. If code blocks appear in every section, the "terminal hole" effect compounds. The convention locks the STYLING but not the USAGE. Auditors should note: consider whether every code block is necessary, and whether some code content could be presented as styled pre-formatted text within the warm palette instead.

---

### PA-27: If you could only fix THREE things about this page, what would they be and in what order?

**Fix 1: REMOVE SCROLL-TRIGGERED ANIMATIONS (all viewports)**
- **Impact:** Instantly restores Sections 6-7 (Decision Matrix + Fractal Meta — approximately 4,800 vertical units of content). Restores the narrative climax and page conclusion. Fixes the "page just stops" finding. Eliminates the #1 WOULD-NOT-SHIP finding shared by all 4 auditors.
- **Effort:** LOW — delete the IntersectionObserver JS and remove `opacity: 0` initial state from sections.
- **Convention compliance:** FULLY COMPLIANT — convention says animation is optional.
- **Risk:** ZERO — removing animation cannot introduce soul violations.

**Fix 2: ADD RESPONSIVE BREAKPOINT FOR BENTO GRID AT 768px (768px)**
- **Impact:** Fixes the catastrophic one-character-per-line text stacking in the featured "Compound Axis" card. Restores readability for iPad portrait users. Eliminates the #2 WOULD-NOT-SHIP finding.
- **Effort:** MEDIUM — need to add CSS `@media (max-width: 768px)` rule that collapses the bento grid to single-column layout. The lock sheet confirms "Responsive collapse to 1-column at 768px" is a LOCKED convention — so the current multi-column behavior at 768px is actually a CONVENTION VIOLATION.
- **Convention compliance:** FIX REQUIRED — the convention MANDATES single-column collapse at 768px. The page is currently non-compliant.
- **Risk:** LOW — single-column is the simplest responsive layout.

**Fix 3: REDUCE HEADER-TO-SECTION-01 GAP (1440px, 1024px)**
- **Impact:** Eliminates the "held breath" / "something is missing" dead zone that all 4 auditors flagged. Improves first impression and scroll rhythm.
- **Effort:** LOW — adjust margin/padding between header and first section container.
- **Convention compliance:** CHALLENGEABLE per lock sheet — no locked value for this gap. Builder choice.
- **Risk:** LOW — but need to maintain the convention's breathing zone taxonomy (the gap should feel like a "Smooth" transition, not cramped).

**Why these three:** They address 100% of WOULD-NOT-SHIP findings (Sections 6-7 invisible + bento grid crushing + no page ending) plus the most universally flagged LOOKS-WRONG issue (header gap). Together they transform the page from "broken at 768px, incomplete at 1440px" to "shippable at all viewports."

---

### PA-28: What's the most important thing this audit reveals about the design system?

**The audit reveals that the design system has an ANIMATION IDENTITY CRISIS that will recur in every future exploration.**

The specific crisis: The ANTI-PHYSICAL identity (Soul Piece #1-4, AD-F-020) prohibits physical-metaphor animations — no scale, rotate, parallax, perspective, hover-lift. But the convention simultaneously PERMITS scroll-triggered reveal animations with `translateY`. This creates an unstable boundary:

1. **The line is drawn in the wrong place.** Physical movement (translateY) is permitted. Physical depth (box-shadow, perspective) is not. But both are PHYSICAL. The identity says "we don't simulate physical objects" — but a section sliding up into view IS a physical simulation. The convention draws a pragmatic line ("reveal ≠ movement") but the identity draws a philosophical one ("ANTI-PHYSICAL means no physical metaphor"). These two lines don't overlap.

2. **The failure mode proves the principle.** Sections 6-7 became invisible BECAUSE of an animation that simulates physical motion (sections "rising into view"). The anti-physical identity says "don't do that." The convention says "you can do that." The identity was RIGHT — the animation broke the page. This is the identity saying "I told you so."

3. **This will recur.** Every future CD (combination) exploration will face the same question: "Can I use entrance animations?" The convention says yes. The identity says it's dangerous. Without a clear resolution, some explorations will use animations and risk the same invisible-content failure. Others will omit them and feel static. The inconsistency will compound across 6+ explorations.

4. **The deeper lesson:** The design system's STRONGEST quality is its distinctive identity (Auditor D, PA-25: "You could identify it blind"). That identity is built on RESTRICTIONS — no rounded corners, no shadows, no physical depth. The animation permission weakens this identity by creating an exception. The highest-integrity path is: **ANTI-PHYSICAL means ALL physics, including motion physics. Reveals happen instantly (opacity transition only) or not at all.**

5. **The responsive breakpoint violation is equally systemic.** The convention REQUIRES 1-column collapse at 768px, but AD-006's bento grid doesn't comply. This suggests that the convention's responsive rules are not enforced during build — they're written but not checked. A convention that isn't enforced is a convention that will be violated in every exploration. The CD phase needs a responsive compliance check BEFORE perceptual audit, not during it.

**Summary:** The audit reveals two systemic issues — an animation identity crisis (philosophical vs. pragmatic boundaries) and a convention enforcement gap (responsive rules written but not checked). Both will compound in future phases if not resolved now.

---

### Severity Summary

| Finding | Severity | Type |
|---------|----------|------|
| Scroll-triggered animation should be REMOVED (not just noted) | CONVENTION CHALLENGE | Adversarial |
| translateY contradicts ANTI-PHYSICAL identity | CONVENTION CHALLENGE | Identity coherence |
| 768px bento grid violates LOCKED responsive convention | CONVENTION VIOLATION | Compliance |
| Animation permission weakens distinctive identity | SYSTEMIC | Future-phase risk |
| Convention responsive rules not enforced during build | SYSTEMIC | Process gap |
| Dark code block frequency/placement is auditable (styling locked) | COULD-BE-BETTER | Builder choice |

---

### Cross-References to Other Auditors

| Adversarial Finding | Corroborated By |
|---------------------|-----------------|
| Animation causes invisible sections | Auditor A (PA-01, Addendum), Auditor B (PA-21, PA-22), Auditor C (PA-09, PA-17), Auditor D (PA-12, PA-13) |
| 768px bento is convention violation | Auditor A (PA-01 768px), Auditor B (PA-06, PA-21), Auditor C (PA-14), Auditor D (PA-03 768px) |
| Header gap is fixable | Auditor A (PA-01 1440px), Auditor B (PA-23), Auditor C (PA-09, PA-11), Auditor D (PA-12) |
| Dark code blocks are disruptive | Auditor A (PA-19), Auditor D (PA-16) |
| Identity is strong and distinctive | Auditor D (PA-24, PA-25) |
