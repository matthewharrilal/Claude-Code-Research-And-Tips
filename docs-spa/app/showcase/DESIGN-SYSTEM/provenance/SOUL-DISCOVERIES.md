<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md
Tier: B | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Provenance chain copy of the 5 soul pieces discovered through perceptual
deepening. Preserves the soul extraction record within the provenance
directory for chain integrity alongside component and density findings.

2. THE QUESTION THIS ANSWERS
What are the core perceptual truths (soul pieces) that govern the design
system, and how were they discovered?

3. STATUS
SYNCED DUPLICATE of checkpoints/SOUL-DISCOVERIES.md. Sync protocol:
operational edits go in checkpoints/, archival copies here.

5. BUILT ON
See original at showcase/checkpoints/SOUL-DISCOVERIES.md.

6. MUST HONOR
Keep in sync with source at checkpoints/SOUL-DISCOVERIES.md.

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| provenance/CLAUDE.md                    | Listed as provenance directory member  |
| STAGE-HEADERs                           | Soul piece references                 |
| BACKBONE.md                             | Soul piece narrative integration       |
| README.md                               | Soul documentation reference           |
| HANDOFF-DD-TO-OD.md                     | Soul compliance requirements           |

10. DIAGNOSTIC QUESTIONS
- Is this file in sync with checkpoints/SOUL-DISCOVERIES.md?
- Are all 5 soul pieces documented with perceptual truths (not just CSS)?
- Do the locked design tokens match DESIGN-SYSTEM/tokens/ values?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->

# SOUL DISCOVERIES
## Perceptual Truths Extracted Through Iterative Visual Discovery

**Created:** 2026-02-04
**Methodology:** /perceptual-deepening
**Status:** 5 SOUL PIECES DOCUMENTED

═══════════════════════════════════════════════════════════════════════════════
## HOW TO READ THIS DOCUMENT
═══════════════════════════════════════════════════════════════════════════════

Each soul piece documents a perceptual truth — a way of SEEING, not a CSS rule.

**The hierarchy:**
1. **The Perceptual Truth** — Primary. How to perceive.
2. **The Technical Manifestation** — Secondary. How it shows in code.

**WRONG way to document:**
- "Changed padding from 16px to 24px"
- "Removed border: 1px solid #ccc"

**RIGHT way to document:**
- "Content was TRAPPED. Now it FLOATS. The border was creating a prison."
- "Space was CRAMPED. Now it BREATHES. Sanrok gives content ROOM."

═══════════════════════════════════════════════════════════════════════════════
## LOCKED DESIGN TOKENS (Reference)
═══════════════════════════════════════════════════════════════════════════════

These are NON-NEGOTIABLE. Every soul piece must respect these:

| Token | Value | Perceptual Meaning |
|-------|-------|-------------------|
| border-radius | 0 | Sharp edges = precision, authority, honesty |
| box-shadow | none | Flat = honest, no artificial depth, grounded |
| Primary | #E83025 | Sanrok red = energy, action, attention, fire |
| Background | #FEF9F5 | Warm cream = approachable, soft, welcoming |
| Text | #1A1A1A | Near-black = readable, grounded, serious |
| Secondary | #666666 | Muted gray = supporting, quiet, background voice |
| Border | #E0D5C5 | Warm tan = subtle definition, soft boundaries |

═══════════════════════════════════════════════════════════════════════════════
## SOUL PIECES DISCOVERED
═══════════════════════════════════════════════════════════════════════════════

---

## SOUL PIECE #1: Sharp Edges Command Authority

**Discovered During:** Foundation Remediation, globals.css audit
**Iteration Count:** 1

**The Observation:**
"When I looked at components with rounded corners, they felt FRIENDLY but also CASUAL.
Like a conversation at a coffee shop. When the corners became sharp, the same content
suddenly felt PRECISE. Like a specification document. The words hadn't changed, but
the authority had."

**The Perceptual Truth:**
Sharp edges communicate that this is SERIOUS technical content. Rounded corners
say "we're approachable" but they also say "this is soft, flexible, negotiable."
Documentation about code patterns should feel as precise as the code itself.
Sharp edges say: "This is exact. This is verified. This is the way."

**The Technical Manifestation:**
- border-radius: 0 on ALL containers
- No exceptions for "friendlier" callouts
- Even circular step numbers become squares

**How To Test:**
Look at a component. Does it feel like a specification sheet or a blog post?
If blog post → check for rounded corners sneaking in.

---

## SOUL PIECE #2: The Archivist Speaks in Serif

**Discovered During:** COMP-005 EssenceBox audit
**Iteration Count:** 1

**The Observation:**
"The EssenceBox is supposed to feel like marginalia in a first-edition book. Like
wisdom passed down through generations. When the text was sans-serif, it felt like
a modern tip box. When it became serif ITALIC, suddenly it felt TIMELESS. The same
words carried more weight. They felt like they'd been true for centuries."

**The Perceptual Truth:**
Serif italic creates a VOICE that speaks from a different time. Sans-serif is
the voice of the present — efficient, clear, modern. Serif italic is the voice
of ACCUMULATED WISDOM. The Archivist of Axioms doesn't give tips; they share
truths that transcend the current moment. The typography must match the voice.

**The Technical Manifestation:**
- EssenceBox: fontFamily: 'Instrument Serif', fontStyle: 'italic'
- CoreAbstraction philosophy zone: same serif italic
- This is the ONLY place serif appears — making it special

**How To Test:**
Read an Essence quote. Does it feel like a tweet or like something from a philosophy
book? If tweet → check the font. Serif italic = wisdom voice.

---

## SOUL PIECE #3: Callouts Share Family DNA

**Discovered During:** COMP-004 GotchaBox redesign verification
**Iteration Count:** 1

**The Observation:**
"The old GotchaBox had 6 zones: header, symptom, why, impact, fix, and more. It
felt like a complex form, not a warning. When it was simplified to 2 zones (label
+ body), it suddenly BELONGED with the other callouts. Info, Tip, Gotcha, Essence —
they all felt like siblings now. Same structure, different personalities."

**The Perceptual Truth:**
Components in a family must share structural DNA. The Callout family all have:
4px left accent border, label zone, body zone. That's IT. When a component tries
to be "more helpful" by adding zones, it BREAKS FAMILY COHESION. The user's eye
has to re-learn. Better: keep structure identical, vary only color/label.

**The Technical Manifestation:**
- All callouts: 2-zone (label + body)
- All callouts: 4px left border with accent color
- Differentiation through COLOR, not structure

**How To Test:**
Put all callouts side by side. Do they feel like variations of one thing, or
like different components? If different → structure has diverged.

---

## SOUL PIECE #4: Shadows Lie About Depth

**Discovered During:** COMP-008 DesignDecision audit
**Iteration Count:** 1

**The Observation:**
"The DesignDecision had shadow-sm — a subtle elevation. It looked 'nice' in
isolation. But next to flat components, it was LYING. It claimed to be more
important, more elevated. When the shadow was removed, all components existed
on the same plane. No artificial hierarchy. Just content."

**The Perceptual Truth:**
Shadows in UI create FALSE DEPTH. They say "this floats above." But in
documentation, nothing should float. Everything should be GROUNDED on the
same plane. Hierarchy comes from SIZE, COLOR, POSITION — not fake 3D effects.
Flat design is HONEST design. The content stands on its own merit.

**The Technical Manifestation:**
- box-shadow: none on everything
- No hover shadows
- No glow effects
- Hierarchy through typography and color only

**How To Test:**
Squint at the page. Do some elements "pop forward"? If so, check for shadows.
All content should feel like it's printed on the same sheet of paper.

---

## SOUL PIECE #5: Squares Signal System, Circles Signal Softness

**Discovered During:** COMP-010 PathOfTask audit
**Iteration Count:** 1

**The Observation:**
"Step numbers were circular — friendly, approachable, like a tutorial for kids.
When they became SQUARE, the same steps felt like a PROCEDURE. Like instructions
for a critical system. The shape changed the stakes. Squares said: follow this
exactly. Circles said: here's a suggestion."

**The Perceptual Truth:**
Shape carries meaning beyond aesthetics. SQUARES suggest precision, system,
exactness — like checkboxes in a compliance form. CIRCLES suggest flexibility,
friendliness, approximation — like bullet points in a casual list. For technical
documentation, squares reinforce that this is EXACT procedure. Each step matters.
The shape of the step number primes the reader's attention level.

**The Technical Manifestation:**
- Step numbers: border-radius: 0 (squares)
- Checkboxes: squares that fill with red when checked
- No circular badges or indicators

**How To Test:**
Look at numbered steps. Do they feel like "follow exactly" or "roughly do this"?
If casual → check if step indicators are circles.

---

═══════════════════════════════════════════════════════════════════════════════
## SOUL PIECE INDEX
═══════════════════════════════════════════════════════════════════════════════

| # | Name | Component | Summary |
|---|------|-----------|---------|
| 1 | Sharp Edges Command Authority | All | border-radius: 0 = precision voice |
| 2 | The Archivist Speaks in Serif | EssenceBox, CoreAbstraction | Serif italic = wisdom voice |
| 3 | Callouts Share Family DNA | All Callouts | 2-zone structure = family cohesion |
| 4 | Shadows Lie About Depth | DesignDecision | box-shadow: none = honest grounding |
| 5 | Squares Signal System | PathOfTask | Square shapes = exactness required |

═══════════════════════════════════════════════════════════════════════════════
## STAGE 3 DETERMINATION
═══════════════════════════════════════════════════════════════════════════════

OD explored cognitive rhythm. No new cognitive soul piece was discovered.
The 5 visual soul pieces remain the complete set.

Closest candidate: OD-F-005 ("Organization IS Density") -- this is a
META-PATTERN finding, not a soul piece. Soul pieces are perceptual truths
about how things LOOK; OD-F-005 is a structural truth about how things
ORGANIZE. The distinction matters: soul pieces constrain CSS (border-radius: 0,
box-shadow: none); OD-F-005 constrains information architecture (the
organizational pattern IS the density pattern). Different levels of the system.

**Evidence:** OD-001 through OD-006 visual audit -- zero soul violations
across 3,479+ DOM elements. The 5 soul pieces were fully sufficient to
constrain all 6 organizational explorations. No new perceptual truth
emerged that would require a 6th soul piece.

**ANTI-PHYSICAL Identity Confirmed (Re-Enrichment, 2026-02-09):**
Three waves of re-enrichment tested 20 SOUL FAIL scenarios across all 6 ODs.
Every single one confirmed the ANTI-PHYSICAL identity: the system rejects
anything that makes flat screens pretend to be three-dimensional spaces.
Categories: (a) decorative depth/shadows, (b) animated z-movement,
(c) rounded shapes suggesting physical objects, (d) gradients suggesting
light/material, (e) traffic-light color semantics implying material signals,
(f) parallax implying z-space. 20/20 -- zero exceptions.

This is not a new soul piece but a deepened understanding of Soul Pieces #1
and #4 combined. The ANTI-PHYSICAL identity extends Soul Piece #4 ("Shadows
Lie About Depth") into a comprehensive rejection of all physicality cues,
not just shadows.

**Implication for AD:** AD (axis exploration) is the next opportunity for
potential soul discovery. If axis geometry produces a new perceptual truth
about how things LOOK (not how they organize), it could become Soul Piece #6.
AD must also specifically audit for semi-transparent backgrounds (rgba) as
a systemic gap identified during re-enrichment.

═══════════════════════════════════════════════════════════════════════════════
## STAGE 4 DETERMINATION
═══════════════════════════════════════════════════════════════════════════════

AD explored spatial layout — axis geometry across 6 explorations. No new
perceptual soul piece was discovered. The 5 visual soul pieces remain the
complete set.

Closest candidate: AD-F-023 ("Attention Topology" meta-equivalence) -- this
is a STRUCTURAL discovery about how axis, organization, and density are one
phenomenon, not a perceptual truth about how things LOOK. Like OD-F-005, it
governs information architecture, not visual perception. The distinction
holds: soul pieces constrain CSS; AD-F-023 constrains compositional logic.

**Evidence:** AD-001 through AD-006 soul compliance verification -- zero
violations across all 6 explorations (~3,479+ elements checked). Dual-method
confirmation: programmatic DOM tests (border-radius, box-shadow, filter
drop-shadow, 2px borders, backgrounds, font trio, version badges all PASS)
plus visual auditor verification across all 6 exploration pages. The soul
constraint (border-radius: 0) was not merely compatible with axis geometry
-- it was the mechanism that ENABLED key discoveries (AD-F-013: angular spiral
IS geological strata because sharp edges force the angular approximation).

**ANTI-PHYSICAL Identity Maintained:** All 6 AD explorations maintained the
ANTI-PHYSICAL identity established during OD re-enrichment. AD-F-020
specifically clarifies: "choreography" means reader attention movement
through static structure, not CSS-animated visual elements. The system
continues to reject anything implying physical object behavior.

**Implication for CD:** CD (combination exploration) is the final opportunity
for potential soul discovery. The 5-scale fractal model is bounded (AD-F-028),
the 3-way identity is confirmed, and the transition grammar constrains
compound patterns. CD should verify soul compliance holds under component
combination, not seek a 6th soul piece.

═══════════════════════════════════════════════════════════════════════════════
## APPLICATION GUIDE
═══════════════════════════════════════════════════════════════════════════════

When building new components, ask:

1. **Authority Check:** Are edges sharp? (Soul Piece #1)
2. **Voice Check:** Is wisdom content in serif italic? (Soul Piece #2)
3. **Family Check:** Does structure match siblings? (Soul Piece #3)
4. **Honesty Check:** Is everything flat/grounded? (Soul Piece #4)
5. **Shape Check:** Do shapes match the stakes? (Soul Piece #5)

If any answer is "no," the soul is compromised.

═══════════════════════════════════════════════════════════════════════════════
