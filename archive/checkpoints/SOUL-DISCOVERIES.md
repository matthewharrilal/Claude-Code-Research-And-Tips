<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/checkpoints/SOUL-DISCOVERIES.md
Tier: B | Batch: 7 | Generated: 2026-02-06

1. WHY THIS EXISTS
Documents the 5 non-negotiable soul pieces that define KortAI's visual identity.
Each soul piece captures a perceptual truth — a way of SEEING, not a CSS rule.
Extracted through iterative /perceptual-deepening methodology. This is the
operational copy; an archival copy is synced to provenance/. All downstream
soul-constrained work MUST consume this file.

2. THE QUESTION THIS ANSWERS
"What are the 5 non-negotiable perceptual truths that define KortAI's visual identity?"

3. STATUS
LOCKED — 5 soul pieces are final. No new soul pieces may be added.

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| design-extraction/component-system/perceptual-audit-v2/tracking/PERCEPTUAL-TRUTHS.md | Source soul piece extraction data |
| design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md | T1 synthesis that formalized the soul pieces |

6. MUST HONOR
- 5 soul pieces are FINAL — no additions, no modifications
- Locked design tokens table must match DESIGN-TOKEN-SUMMARY.md exactly
- Perceptual truth descriptions prioritize HOW TO SEE over CSS properties

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| checkpoints/CLAUDE.md                   | Listed as key file for soul reference |
| checkpoints/MASTER-STATE.md             | References soul pieces in Foundation Remediation section |
| docs-spa/app/showcase/DESIGN-SYSTEM/BACKBONE.md | References soul constraints for design system grounding |
| docs-spa/app/showcase/DESIGN-SYSTEM/README.md | References soul discoveries for public documentation |
| docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | Soul compliance requirements for handoff |
| docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-1-components/FOUNDATION-REMEDIATION-SYNTHESIS.md | Soul pieces as remediation criteria |
| All STAGE-HEADER.md files              | Soul constraints referenced for stage-level compliance |

10. DIAGNOSTIC QUESTIONS
- Are exactly 5 soul pieces documented (Sharp Edges, Serif Archivist, Family DNA, No Shadows, Square System)?
- Does each soul piece include both a perceptual truth AND a technical manifestation?
- Does the locked design tokens table have border-radius: 0 and box-shadow: none?

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
## STAGE 4 DETERMINATION
═══════════════════════════════════════════════════════════════════════════════

AD explored spatial layout — axis geometry across 6 explorations. No new
perceptual soul piece was discovered. The 5 visual soul pieces remain the
complete set.

**Evidence:** AD-001 through AD-006 soul compliance verification -- zero
violations across all 6 explorations (~3,479+ elements checked). Dual-method
confirmation: programmatic DOM tests plus visual auditor verification. The
soul constraint (border-radius: 0) was the mechanism that ENABLED key
discoveries (AD-F-013: angular spiral IS geological strata because sharp
edges force the angular approximation).

**ANTI-PHYSICAL Identity Maintained:** All 6 AD explorations maintained the
ANTI-PHYSICAL identity. AD-F-020 clarifies: "choreography" means reader
attention movement through static structure, not CSS-animated visual elements.

**Implication for CD:** CD is the final opportunity for potential soul
discovery. The 5-scale fractal model is bounded (AD-F-028), the 3-way
identity is confirmed. CD should verify soul compliance holds under component
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
