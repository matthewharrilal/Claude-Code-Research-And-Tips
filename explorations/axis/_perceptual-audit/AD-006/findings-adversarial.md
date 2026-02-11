# AD-006 Perceptual Audit -- Adversarial Findings

**Agent:** Adversarial (PA-26, PA-27, PA-28)
**Page:** AD-006: Compound Axis -- The Convergence
**Viewports tested:** 1440, 1100, 900, 768, 500, 320
**Scroll protocol:** Full scroll-through at each viewport with screenshots at every section
**Lock sheet read:** Yes (all 81 classified decisions absorbed)
**Date:** 2026-02-10

---

## OVERALL RISK ASSESSMENT: BRITTLE

This page has a catastrophic structural flaw that renders more than half its content
invisible under common failure conditions. On top of that, the responsive behavior
at sub-1000-unit viewports is severely broken. A page that advertises itself as
"the convergence" of five axis patterns is unable to survive basic environmental
variation. The BRITTLE rating reflects a page that works acceptably in exactly one
scenario (desktop, wide viewport, JavaScript enabled, manual scroll) and fails
in every other.

---

## COLD LOOK (1440 -- First Impression Before Any Research)

The dark header dominates -- heavy, grounded, authoritative. The title in white
serif italic is confident. Below it: a massive void of warm cream before Section 01
begins. The gap between the header's red bottom border and the first section label
feels like a missed floor -- the eye drops and catches nothing. The page reads as
two different documents pasted together: a dramatic cinematic header, then a textbook.

Inside Section 01, the two-column layout places body text (with red drop cap "E")
on the left and six small pattern-preview tiles on the right. The tiles are compact
and sharp. The text is airy and spacious. These two elements are at different
tempos -- a rhythmic mismatch. The container feels notably narrow relative to the
wide viewport. Massive warm cream flanks frame a narrow corridor of content.

---

## PA-26: Convention Challenges -- Is Any Convention CAUSING a Visual Problem?

### Challenge 1: CRITICAL -- Scroll-Reveal Is Destroying Content Accessibility

**What I saw:** At 1440 with animations disabled (standard audit protocol), Sections
5, 6, and 7 (Choreography, Decision Matrix, Fractal Meta) are COMPLETELY INVISIBLE.
Pure warm cream from scroll position ~8100 through 14,737. That is over 6,600
vertical units of dead page -- 45% of the total page height.

The DOM confirms all seven sections exist with correct offsets:
- Section 4 (Choreography): offset 8264, height 1625
- Section 5 (Decision Matrix): offset 9890, height 1863
- Section 6 (Fractal Meta): offset 11753, height 2984
All show visibility: visible, display: block, opacity: 1. Yet they render as nothing.

I verified this across TWO scenarios:
1. Animations disabled via style override -- Sections 5-7 invisible
2. Animations enabled but programmatic scrolling (instant, not smooth) -- Sections 5-7
   STILL invisible because IntersectionObserver does not fire on programmatic scroll

**Why this is convention-caused:** AD-CONV S15.3 requires elements to start invisible
and animate to visible when scrolled into view. When the animation mechanism is
disrupted -- by disabling animations, by programmatic scrolling, by
prefers-reduced-motion, or by JavaScript failure -- elements remain in their
initial invisible state. The convention creates a single point of failure for
content visibility.

**Convention worship detected (AP-08):** The convention IS the problem. Citing
AD-CONV S15.3 as justification for a content-hiding mechanism while 45% of the
page becomes invisible is textbook AP-08. The lock sheet says "content in DOM
regardless" -- the content IS in the DOM but is INVISIBLE. The letter of the
law and its purpose have diverged.

### Challenge 2: HIGH -- Container Width Bottleneck Creates Corridor Effect

**What I saw:** At 1440, the content lives inside a narrow corridor with vast
empty warm cream flanks. Screenshots at 1440 and 1100 are IDENTICAL -- the
content area does not change because it is constrained well below both viewport
widths. Roughly 40% of the screen is unused.

**Why this is convention-caused:** The CHALLENGEABLE "Page container" forces all
content into a fixed-width corridor. The bento grid, the choreography hub-spoke,
the spiral strata -- all are compressed into this corridor when the viewport
offers abundant room. A compound page deploying 5 different axis patterns needs
variable-width sections. One container width for all patterns is a bottleneck
that prevents each pattern from expressing its essential geometry.

### Challenge 3: MEDIUM -- Breathing Zones Create Dead-Zone Scrolling

**What I saw:** Between Sections 3 and 4, and between Sections 4 and 5, there
are vertical gaps where the entire viewport shows nothing but warm cream. At
position 5600, only the "SECTION 04 -- SPIRAL DEEP DIVE" label floats alone
in vast emptiness. At position 7200, a gotcha callout is followed by an
all-empty viewport.

**Why this is convention-caused:** The CHALLENGEABLE breathing zone budget (15%
minimum) combined with the LOCKED transition grammar ("Spiral transitions
always need breathing") creates mandatory dead zones. The reader scrolls
through warm nothingness for full viewport-heights. This is not "breathing"
(momentary pause). This is drowning in emptiness.

### Challenge 4: MEDIUM -- Drop Caps Compete with Section Labels

The red drop caps in Sections 1 and 2 create four stacked "start here" signals:
section label, heading, description, then drop cap. By Section 4, the charm
fades to noise. A 7-section compound page needs LESS per-section ceremony,
not more. Drop caps are constraint-shaped (S9 divergence), not intention-shaped.

---

## PA-27: From-Scratch Assessment -- Constraint-Shaped vs. Intention-Shaped

### If designing this page from scratch with no existing conventions:

**1. I would NOT use scroll-reveal for static documentation.**
Making content invisible by default and conditionally visible via JavaScript is a
fundamental design error for documentation. The content is the value. This choice
is constraint-shaped: "the convention requires scroll-triggered reveal," not
intention-shaped: "this content benefits from appearing on scroll."

**2. I would NOT use a fixed narrow container for 5 different layout patterns.**
The bento grid needs width to breathe. The hub-spoke choreography needs width
to radiate. The spiral needs proportional nesting that narrow containers crush.
Forcing all five patterns into the same corridor is constraint-shaped.
A bento grid in a narrow corridor is an archipelago in a bathtub.

**3. I would NOT maintain identical section transition spacing for all pattern pairs.**
The transition grammar table says Z-to-F is "Smooth" and Bento-to-Spiral needs
"Breathing." But visually, every transition gets the same heavy spacing. The
transition grammar is intention-shaped in theory but constraint-shaped in execution.

**4. The drop caps feel ornamental, not structural.**
Documentation is not a printed book. Drop caps compete with section labels and
headings for the reader's initial attention. They are constraint-shaped: "S9
divergence requires drop caps."

**5. The bento grid should collapse at a MUCH higher viewport than 768.**
The four-column grid needs roughly 900 usable content units. The collapse point
should be around 960-1000, not 768. The 768 collapse point is constraint-shaped.

### Constraint-to-Intention Ratio

| Element | Shaped By |
|---------|-----------|
| Scroll-reveal for documentation | Constraint (convention S15.3) |
| Fixed narrow container | Constraint (convention-inherited) |
| Uniform breathing zones | Constraint (15% budget + transition grammar) |
| Drop caps | Constraint (S9 divergence) |
| 768 collapse for 4-column grid | Constraint (S12.5) |
| Section-per-axis-pattern structure | Intention (content serves demonstration) |
| Triple-column equivalence comparison | Intention (content demands comparison) |
| Spiral strata confidence encoding | Intention (border weight = confidence) |
| Hub-spoke choreography for synthesis | Intention (pattern fits content) |
| Decision matrix as climax | Intention (density crescendo) |

**Constraint-shaped: 5. Intention-shaped: 5.**
Half the design serves conventions rather than readers.

---

## PA-28: Fragility Map -- How Could This Page Look Terrible While Passing Rules?

### Breakpoint-by-Breakpoint Degradation

| Width | Observed State | Rating |
|-------|---------------|--------|
| 1440 | Content in narrow corridor, heavy flanking voids. Sections 1-4 readable. Sections 5-7 invisible when animations disabled. | ADEQUATE (happy path only) |
| 1100 | IDENTICAL to 1440 -- no degradation, no improvement. Container constraint means viewport reduction has no effect. | ADEQUATE |
| 900 | CATASTROPHIC -- Bento grid featured cell renders text VERTICALLY, one character per line. Words cannot fit horizontally. Content becomes a tower of individual letters: "T h e m e t a - p a t t". Completely unreadable. | BROKEN |
| 768 | CATASTROPHIC -- Same vertical text rendering. Responsive collapse to single column has NOT occurred despite convention requiring it at this width (AD-CONV S12.5). Grid cells crushed to single-character width. | BROKEN |
| 500 | BLANK PAGE -- Entire viewport shows nothing. No header, no content, no navigation. Complete failure. Scroll-reveal has not triggered. | BROKEN |
| 320 | BLANK PAGE -- Same as 500. Complete failure. | BROKEN |

**First breakage point:** ~960 (text begins to feel cramped in bento cells)
**Catastrophic breakage point:** 900 (vertical text rendering in bento grid)
**Total failure point:** 500 and below (blank page)

### The Cliff Failure Pattern

There is NO graceful degradation between 960 (working) and 900 (catastrophically
broken). The page goes from "adequate" to "vertically rendered single characters"
in a span of roughly 60 viewport units. This is a cliff, not a slope. The fixed
container width creates a binary: either the content fits, or it shatters.

### Specific Fragility Scenarios

**Scenario A: Disable JavaScript**
- Result: Sections 5-7 invisible (scroll-reveal depends on JS)
- All rule checks pass: no soul violations, no convention violations
- Perceptual result: TERRIBLE -- 45% of content missing

**Scenario B: prefers-reduced-motion: reduce**
- Result: If implementation honors this by disabling animations, scroll-reveal
  never fires, content stays invisible
- All rule checks pass: convention says "honors prefers-reduced-motion"
- Perceptual result: TERRIBLE -- same 45% content loss, specifically targeting
  users who requested accessibility accommodation

**Scenario C: Tablet portrait (768-900)**
- Result: Bento grid cells crushed to vertical single-character text
- Convention check: Grid collapse should occur at 768 but bento grid breaks
  at 900, a full 130 units before the collapse point
- Perceptual result: TERRIBLE -- unreadable character towers

**Scenario D: Content length variation**
- Bento featured cell has more text than others. Size ratio is fixed. Shorter
  content creates dead space; longer content crushes standard cells further.
- Spiral strata have varying lengths. Short strata create visible dead space.

**Scenario E: Print stylesheet**
- Scroll-reveal elements start invisible. Print stylesheets do not execute JS.
- Result: printed page missing Sections 5-7 entirely.
- All rule checks pass (no convention governs print behavior).

### The 860-Unit Bottleneck (AD-Specific)

The lock sheet flags this as a known risk. My observations confirm it:

At 1440, the content container is roughly 860 units wide:
- Bento grid: ~860 units for 4 columns plus gaps = ~190 per cell content width
- Already tight for the text volume in each cell
- When viewport narrows to 900, container approaches content's minimum viable width
- By 900, cells are crushed below readability
- Container does NOT adapt -- it stays fixed until viewport is narrower, at which
  point everything collapses simultaneously rather than gracefully degrading

The bottleneck creates a cliff: above 960, everything looks fine. Below 960,
everything breaks at once. Zero graceful degradation.

---

## Convention Challenge Summary

| CHALLENGEABLE Item | Verdict | Evidence |
|-------------------|---------|----------|
| Page container (860 units) | CAUSING PROBLEM | Bento grid crushed at 900, corridor at 1440 |
| Breathing zone budget (15%) | CAUSING PROBLEM | Full-viewport voids between sections |
| Drop caps at section openings | CAUSING PROBLEM | Compete with section labels, ceremony fatigue |
| Responsive collapse at 768 | CAUSING PROBLEM | Bento breaks at 900, collapse comes 130 units too late |
| Zone backgrounds | MARGINAL | Differentiation barely perceptible at scroll speed |
| Body line-height | NOT OBSERVED | Both 1.6 and 1.7 would read acceptably |
| Bento grid gap | NOT OBSERVED | Gap is fine; cells are too narrow |
| Callout label font-family | NOT OBSERVED | Labels are readable |

### LOCKED Items Creating BRITTLE Outcomes

| LOCKED Item | Problem | Lock Source |
|-------------|---------|-------------|
| Scroll-triggered reveal (S15.3) | 45% content loss on JS/a11y/print failure | AD-CONV S15.3 |
| Responsive collapse at 768 (S12.5) | 4-column grid breaks at 900 | AD-CONV S12.5 |

These LOCKED decisions produce invisible content and vertical single-character
text. A chain that produces these outcomes has already invalidated itself.

---

## Anti-Pattern Flags

- **AP-08 (Convention Worship):** Scroll-reveal convention (AD-CONV S15.3) cited
  as justification for content-hiding. Visual evidence shows page becomes empty.
  Convention is not proof of correctness.
- **AP-19 (Research Suppression):** Any auditor dismissing blank-viewport findings
  because "scroll-reveal is approved" is suppressing perceptual evidence. The
  page IS blank. The convention does not change what the eyes see.

---

## Findings Index

| ID | Severity | Description |
|----|----------|-------------|
| ADV-001 | CRITICAL | Scroll-reveal makes Sections 5-7 invisible when animations disabled or JS fails (~6,600 vertical units, 45% of content) |
| ADV-002 | CRITICAL | Bento grid renders text vertically (one character per line) at 900 and 768 viewports -- completely unreadable |
| ADV-003 | CRITICAL | Page is completely blank at 500 and 320 viewports -- total mobile failure |
| ADV-004 | HIGH | No graceful degradation between 960 (working) and 900 (broken) -- cliff failure, no progressive collapse |
| ADV-005 | HIGH | Container bottleneck creates corridor effect at wide viewports -- 40% of screen unused |
| ADV-006 | HIGH | Breathing zones create full-viewport dead-zone scrolling between sections |
| ADV-007 | MEDIUM | prefers-reduced-motion users lose 45% of content (same mechanism as ADV-001, targeting accessibility users) |
| ADV-008 | MEDIUM | Print stylesheet produces incomplete documentation (scroll-reveal elements stay invisible) |
| ADV-009 | MEDIUM | Drop caps compete with section labels -- ornamental, not functional for 7-section compound |
| ADV-010 | MEDIUM | Zone background colors barely perceptible -- differentiation fails at casual scroll speed |
| ADV-011 | LOW | Content length variation in bento cells creates dead space or crushing |
| ADV-012 | LOW | 5 of 10 major design decisions are constraint-shaped rather than intention-shaped |

**3 CRITICAL / 3 HIGH / 4 MEDIUM / 2 LOW = 12 total findings**

---

## Highest-Priority Fixes

1. **Make scroll-reveal progressive enhancement, not content gate.** Content MUST
   be visible by default (initial CSS state = visible). JavaScript adds the
   hidden class that scroll-reveal then removes. If JS fails, content remains
   visible. This is the single most impactful fix.

2. **Add responsive breakpoint at ~960 for bento grid.** The four-column bento
   grid must collapse BEFORE cells become too narrow for text. Current 768
   breakpoint is 130+ units too late.

3. **Variable container widths for compound sections.** Bento and Choreography
   need wider containers than F-pattern text. One width for all five patterns
   is the core architectural constraint causing the 860 bottleneck.

---

*Adversarial audit complete. The page that claims to demonstrate "The Convergence"
of five axis patterns cannot survive the most basic environmental variation:
a narrower viewport, disabled JavaScript, or an accessibility preference. The
conventions that were supposed to ensure quality are the mechanisms producing
failure. This is not a page with bugs -- it is a page whose architecture is
fragile.*
