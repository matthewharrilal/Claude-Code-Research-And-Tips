# CURRENT SYSTEM BASELINE
## Perceptual Analysis of Existing Card System

*Phase 0 of Perceptual Deepening Protocol*
*Analyzed: 2026-02-03*

---

## SYSTEM LOCATION

`design-extraction/card-system/index.html` with:
- `card.css` — Core card component styles
- `css/halftone.css` — Duotone image treatment

---

## ZONE SUMMARIES

### A. TYPOGRAPHY

**Named character:** "The Eager Art School Graduate"

**Squint feel:** When blurred, the text masses feel *fragmented and floating*. The red italic titles create diagonal energy pulling leftward, while year and tags on the right act as anchors. There's a sense of imbalance — the left side screams while the right side whispers.

**Letter character:** Sharp, theatrical, almost *performative*. The serifs have calligraphic quality — they taper and flick like a pen lifted with flourish. Ball terminals create an old-world formality that signals "premium" or "editorial."

**Hierarchy method:** Achieved primarily through color weight (red vs black), stylistic contrast (italic serif vs regular sans), and scale. Three clear levels: title → year → tags.

**WHAT'S WORKING:**
- Clear three-tier hierarchy immediately parseable
- Serif/sans contrast creates visual interest
- Outline tags appropriately subordinate
- Uppercase treatment aids scanability in grids

**WHAT FEELS OFF:**
- Red feels like it's *shouting INTO a quiet room* — compensating, not confident
- Italic creates tension the content doesn't resolve (italics imply urgency, but these are static nouns)
- Year in quotes feels hesitant/uncertain
- Elements designed separately rather than as unified system
- Formality-casualness mismatch: italic serif says "editorial prestige" while outline tags say "modern SaaS"

**BLINDSPOTS ACKNOWLEDGED:**
- Line length and reading rhythm with varying title lengths
- Responsive behavior at small sizes
- Cultural/contextual associations of italic serif
- Repetition fatigue at scale (50+ cards)

---

### B. SPACING

**Named character:** "The Polite Minimalist"

**Whitespace shapes:** Irregular polygons. Pools of emptiness around badges, channels of breath between header and content, ragged rivers between tags. Not a consistent "field" but separate pockets — some generous, some pinched.

**Density feel:** COMFORTABLE but GENERIC. Adequate breathing room but lacks the intentional compression or generous breathing of editorial design. It's "safe" spacing — won't offend, won't excite.

**Content-to-chrome:** HIGH content ratio (minimal chrome). Cards have no container decoration, letting content define space. The 24px grid gap creates consistent rhythm.

**WHAT'S WORKING:**
- No wasted space on container chrome
- Vertical rhythm in grid creates steady pulse
- Content blocks feel like discrete islands
- 24px gap creates editorial efficiency

**WHAT FEELS OFF:**
- Header-to-media transition feels abrupt — no material handoff
- Tag spacing feels utilitarian rather than considered
- The gap between title and image placeholder is a visual void
- Lacks the deliberate compression/expansion rhythm of magazine layouts

**BLINDSPOTS ACKNOWLEDGED:**
- Line-height within text blocks (internal rhythm)
- Responsive spacing behavior
- Icon and badge internal spacing (if added later)
- Reading direction flow

---

### C. CONTAINERS

**Named character:** "The Invisible Frame"

**Border count:** ZERO on cards (deliberate). Tags have 1px outline. Grid has no visible boundaries.

**Border style:** Accent only (tag outlines) — no frames, no containers, no shadows.

**Containment feel:** Content is FLOATING. It defines its own boundaries through typography and whitespace. The card is a ZONE not a CONTAINER — it suggests territory rather than enforcing walls.

**WHAT'S WORKING:**
- Transparent background eliminates "card" feeling
- No box shadows = flat, print-like honesty
- Sharp edges (0px radius) everywhere = decisive, confident
- Content breathes without artificial constraints

**WHAT FEELS OFF:**
- In the test page context (with dashed borders), the card boundaries feel ambiguous
- Without actual images, the "zone" doesn't have enough visual mass
- Multiple cards in grid look like floating text without cohesion
- The lack of container means the IMAGE must do the heavy lifting for visual presence

**BLINDSPOTS ACKNOWLEDGED:**
- Negative space between cards doing containment work
- Page background relationship (cream on cream)
- How containers behave with real content vs placeholders
- Hover state container changes (if any)

---

### D. HIERARCHY

**Named character:** "The Confident Proclamation"

**Eye path:** Red italic title → Year (right) → Image area → Tags

**Hero element:** The title dominates completely. The red pulls focus immediately.

**Hierarchy clarity:** CLEAR — but perhaps TOO clear. One voice shouting. The title owns the space with editorial confidence.

**WHAT'S WORKING:**
- No question what's primary (the title)
- Year provides counterbalance without competing
- Empty image zone breathes as rest before tags
- Tags feel like subordinate metadata

**WHAT FEELS OFF:**
- Image zone (when empty) is a visual black hole
- Tags feel disconnected from title (vertical distance creates separate "zones")
- In grid of multiple cards, all titles compete equally
- Hierarchy becomes "many equal proclamations" at scale

**BLINDSPOTS ACKNOWLEDGED:**
- Hover states and interaction hierarchy
- Mobile/responsive hierarchy collapse
- Text length edge cases (short vs. long titles)
- Tag quantity edge cases (1 tag vs. 5 tags)

---

### E. COMPOSITION

**Named character:** "The Vertical Stack"

**Energy:** STATIC with mild TENSION. The title-left / year-right creates horizontal pull, but overall the composition is a vertical stack (title → tags → media).

**Opposition:** Title (left, red, italic, serif) vs Year (right, black, regular, sans). Horizontal opposition in header zone only.

**Weight distribution:** TOP-HEAVY. Visual weight concentrated at title level. Image area (when present) adds mass below, but the composition pulls up.

**WHAT'S WORKING:**
- Title/year opposition creates reading entry point
- Vertical stack is logical for card scanning
- Tags at bottom create anchoring
- No container means composition is purely content

**WHAT FEELS OFF:**
- Composition is INEVITABLE rather than DESIGNED — it's just HTML flow, not deliberate arrangement
- No diagonal energy, no asymmetric interest
- Image placement (below everything) makes it feel like an afterthought
- The composition doesn't fight gravity in any interesting way

**BLINDSPOTS ACKNOWLEDGED:**
- Negative space as shape (what do the voids look like?)
- Diagonal energy from text line endings
- Scale relationships (badge to text ratios)
- Cross-card scanning behavior in grids

---

### F. IMAGE TREATMENT

**Named character:** "The CSS Duotone"

**Method:** CSS blend modes (mix-blend-mode: darken + lighten) with grayscale filter base. Creates two-color mapping using pseudo-elements.

**Visible texture:** NO. The treatment is smooth and clean. No grain, no halftone dots, no visible printing texture.

**Feel:** DIGITAL. Despite warm colors (cream shadow + coral highlight), the effect reads as "Instagram filter" not "printed poster." It lacks the imperfection of physical media.

**WHAT'S WORKING:**
- Color unification is immediate (brand presence)
- Grayscale base + color overlay creates consistent look
- Transition effects are smooth
- Multiple variants available (subtle, dark, hover)

**WHAT FEELS OFF:**
- Images feel ERASED not ENHANCED — the treatment is so uniform it flattens everything
- No visible grain or texture = feels like a filter, not a process
- The transition between image zone and content zone is abrupt
- Effect reads as "post-processing" rather than "crafted artifact"

**BLINDSPOTS ACKNOWLEDGED:**
- Motion and hover states
- Edge treatment at different zoom levels
- Real photographs vs. placeholders
- Loading sequence appearance

---

## OVERALL CURRENT SYSTEM CHARACTER

In one paragraph:

**The current system is editorial in INTENT but digital in EXECUTION.** It reaches for magazine design principles — transparent containers, serif/sans contrast, outline tags, duotone imagery — but implements them with web-native smoothness that lacks the material presence of print. The typography wants to be confident but ends up shouting; the spacing wants to be editorial but ends up safe; the image treatment wants to feel printed but ends up filtered. There's a gap between the soul being referenced (Sanrok's print-heritage editorial style) and the soul being expressed (a competent web component system). The system is NOT generic — it's clearly trying something specific — but it hasn't fully arrived at its destination.

---

## ACKNOWLEDGED BLINDSPOTS (AGGREGATED)

1. **Scale behavior** — How does everything feel at 50+ cards?
2. **Real content** — Placeholder state masks many perceptual issues
3. **Motion and interaction** — Only analyzed static state
4. **Responsive collapse** — Desktop only examined
5. **Material presence** — No texture, grain, or physical imperfection
6. **Cultural associations** — What does italic serif "mean" in different contexts?
7. **Reading flow** — Macro patterns not examined

---

## INITIAL HYPOTHESES

Before looking at references, what do I THINK might be the issues?

1. **The image treatment needs TEXTURE** — visible grain/halftone would add print-like presence
2. **The title styling is too uniform** — every card shouting at the same volume creates fatigue
3. **The composition needs TENSION** — too stack-y, not enough deliberate arrangement
4. **The spacing needs RHYTHM** — compress some areas, expand others, create editorial breath

(These hypotheses will be tested against reference analysis)

---

*Phase 0 complete. Proceeding to Phase 1: Reference Analysis.*
