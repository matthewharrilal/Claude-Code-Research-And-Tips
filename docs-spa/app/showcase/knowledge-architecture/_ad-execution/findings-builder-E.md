# Findings Report: Builder-E (AD-005 Choreography)
## Generated: 2026-02-10

**Builder:** Builder-E
**Axis Pattern:** Choreography (sequenced movement — cinematic shot progression)
**Paired OD:** OD-005 Spatial (hub-spoke)
**Density Pairing:** WAVE (primary) + ISLANDS (secondary)
**Finding Range:** AD-F-017 through AD-F-020
**3-way Unification Role:** EXTENDING — seeking 4th equivalence mechanism

---

## Finding AD-F-017: Kinetic Equivalence

**Class:** B (extends 3-way unification to 4-way)

**Discovery:** Axis direction change IS density state change — they are the same event, not correlated events. When the reader transitions from the hub's horizontal scanning to the spoke's vertical reading, the axis turn and the density shift happen at the identical moment. The diagonal clip-path that signals "descending into detail" simultaneously marks the transition from sparse hub to dense spoke. This is not temporal (Z/F: scanning speed measures density), spatial (Bento: cell size is island hierarchy), or proportional (Spiral: golden ratio is confidence density). It is kinetic: the act of changing direction is the act of changing density state.

**Evidence:**
- The diagonal clip-path transition zone between hub and spoke is both a compositional axis signal (direction change) and a density function (breathing zone between sparse and dense). One element, two readings.
- Removing the diagonal and replacing with a simple border preserves the density WAVE (proven by responsive collapse at mobile) but loses the axis direction encoding. The density is token-dependent; the direction is geometry-dependent. They can be separated, but when combined they are indistinguishable — the direction change IS the density change from the reader's perspective.
- This extends the 3-way unification to 4-way: temporal + spatial + proportional + kinetic = 4 lenses on one phenomenon.

**Forward question:** Is there a meta-equivalence that unifies all 4 mechanisms? Or are there exactly 4 orthogonal lenses?

---

## Finding AD-F-018: Diagonal as Dual Signal

**Class:** A (new discovery — no precedent in prior explorations)

**Discovery:** The `clip-path: polygon()` diagonal serves as a dual-encoded signal: it is simultaneously a compositional accent (breaking the rectangular monotony per R4-127) AND a density transition marker (marking the boundary between sparse and dense WAVE phases). No prior AD exploration has an element that carries both compositional and density function at the same structural level. Z-Pattern's saccade zones carry temporal density. Bento Grid's cells carry spatial density. But neither has a single CSS property that encodes both axis direction AND density phase.

**Evidence:**
- The descending diagonal (`polygon(0 0, 100% 0, 100% 85%, 0 100%)`) creates a visual slope that simultaneously: (1) breaks the rectangular grid monotony (compositional function per R4-126/R4-131), and (2) marks the hub→spoke density transition (density function per EXT-AXIS-CH-003).
- At mobile, `clip-path: none` removes the compositional function but a `border-top: 3px solid` replaces the density function. The two functions can be separated, proving they are genuinely two signals encoded in one element.
- This dual-signal property may be unique to choreography because choreography is the only axis pattern where the transition mechanism (how you move between content zones) is itself a design element rather than whitespace.

**Implication for AD-006:** The compound exploration should test whether dual-signal elements from other axis patterns exist or whether this is choreography-specific.

---

## Finding AD-F-019: WAVE Preservation is Density-Token-Dependent, Not Geometry-Dependent

**Class:** B (extends density theory — strengthens OD-F-005 "Organization IS Density")

**Discovery:** The responsive collapse strategy (4→2→1 columns) proves that WAVE density oscillation is preserved entirely through spacing tokens, not through axis geometry. At mobile (1 column), there is no horizontal scanning axis, no diagonal accent, no grid montage — yet the hub remains sparse (generous gaps, overview text) and the spoke remains dense (code blocks, tables, long-form). The WAVE persists because density is controlled by `--space-6` (hub gaps), `--space-between` (spoke content), and `--space-chapter` (transition breathing) — not by column count or clip-path geometry.

**Evidence:**
- Desktop hub: 4 columns, 24px gap, horizontal scan → SPARSE
- Mobile hub: 1 column, 24px gap, vertical scan → STILL SPARSE (same gap token)
- Desktop spoke: 860px constrained, vertical read → DENSE
- Mobile spoke: full-width, vertical read → STILL DENSE (same content density tokens)
- This proves axis geometry is dispensable for density; spacing tokens are sufficient.

**Implication:** This strengthens the 4-way unification by showing that the kinetic mechanism (Finding AD-F-017) is the perceptual layer on top of a token-level density system that operates independently. Geometry gives the density WAVE its perceptual character (horizontal vs. vertical, diagonal vs. border); tokens give it its measurable reality (words per viewport, whitespace ratio).

---

## Finding AD-F-020: Choreography's "Movement" is Reader Movement Through Static Structure

**Class:** A (identity clarification — resolves the choreography paradox)

**Discovery:** The term "choreography" in the context of the ANTI-PHYSICAL identity means the choreography of the READER's attention through static content structure, not the choreography of CSS-animated visual elements. This resolves the choreography paradox: how can "movement" be a design axis in a system that prohibits visual animation?

The answer: the reader moves; the content does not. The content arranges itself through density variation, spacing rhythm, and axis direction cues (diagonals, transitions, breathing zones). The reader's eye traverses this landscape and experiences a "journey" — establishing shot (hub), close-up (spoke), return (synthesis) — but nothing on the page ever literally moves. The sole exception is the scroll-triggered reveal, which fires once and then the element becomes permanently static.

**Evidence:**
- 20 CONDITIONAL PASS R-4 findings (highest of any AD) — every one required reinterpretation from "visual movement" to "structural movement." Cinematic "shot progression" became spacing changes. "Slow panning" became generous whitespace. "Quick cuts" became abrupt section transitions. "Diagonal dynamism" became static clip-path geometry.
- 8 SOUL FAIL findings explicitly document the boundary: any transition that implies physical object behavior (scale, rotate, hover-lift, parallax) fails the soul test. What passes is structural: spacing, color, border-color, opacity entrance.
- This finding clarifies the identity constraint for AD-006 (compound): all axis patterns should be understood as static structural choreography of reader attention, not as animation frameworks.

**Forward question for identity delta:** Should the term "choreography" be formally defined in the ACCUMULATED-IDENTITY document as "structural arrangement of content density that creates a perceptual journey for the reader without CSS animation"?

---

## Citation Summary

### R-4 Findings Applied (38 total — exceeds 20 minimum)
R4-036, R4-037, R4-038, R4-042, R4-043, R4-044, R4-045, R4-046, R4-047,
R4-049, R4-050, R4-051, R4-052, R4-053, R4-054, R4-055, R4-056, R4-057,
R4-064, R4-087, R4-088, R4-089, R4-090, R4-091, R4-092, R4-093, R4-094,
R4-098, R4-113, R4-114, R4-119, R4-120, R4-122, R4-126, R4-127, R4-128,
R4-130, R4-131, R4-134

### R-2 Findings Applied (12 total — exceeds 8 minimum)
R2-1.1, R2-1.3, R2-1.4, R2-1.5, R2-2.2, R2-2.3, R2-4.1, R2-4.2, R2-4.3,
R2-4.5, R2-6.3, R2-6.5

### EXT-AXIS-CH Findings Applied (5 total — meets 5 minimum)
EXT-AXIS-CH-001, EXT-AXIS-CH-002, EXT-AXIS-CH-003, EXT-AXIS-CH-004, EXT-AXIS-CH-005

### OD-F / DD-F Findings Applied (10 total)
OD-F-005, OD-F-007, OD-F-004, OD-F-AP-001,
DD-F-003, DD-F-005, DD-F-006, DD-F-014, DD-F-015, DD-F-016

### Total Citations: 65

---

## Soul Compliance Verification

| Check | Result |
|-------|--------|
| border-radius: 0 everywhere | PASS — enforced in locked-layer, no overrides in axis-layer |
| box-shadow: none | PASS — no box-shadow declarations in axis-layer |
| No filter: drop-shadow() | PASS — no filter declarations anywhere |
| No fake depth/gradients-as-depth | PASS — all backgrounds fully opaque solid colors |
| Locked palette only | PASS — all colors reference :root tokens |
| Font trio only | PASS — Instrument Serif, Inter, JetBrains Mono |
| Border weights: 4px/3px/1px system | PASS — Cat 1 (3px structural, 4px accent), Cat 2 (1px separator), Cat 3 (1px micro) |
| Spacing tokens only | PASS — all spacing via var(--space-*) |
| Max 2 callouts per viewport | PASS — max 1 callout in any viewport section |
| DD-F-006 fractal at 5 scales | PASS — navigation, page, section, component, character documented |
| No 2px borders | PASS — zero 2px border declarations (OD-F-AP-001) |
| opacity === 1 on all persistent elements | PASS — scroll reveal transitions to 1.0 and stays |
| No rgba() with alpha < 1.0 | PASS — all backgrounds use token references to fully opaque values |
| prefers-reduced-motion prophylactic | PASS — locked-layer + JS check |

---

## 3-Way Unification Status After AD-005

**Previous state:** VALIDATED across 4 explorations (Z, F, Bento, Spiral) with 3 mechanisms (temporal, spatial, proportional).

**Updated state:** VALIDATED across 5 explorations with 4 mechanisms:
1. **Temporal** (Z-Pattern, F-Pattern): scanning speed = density
2. **Spatial** (Bento Grid): cell size = island hierarchy
3. **Proportional** (Spiral): golden ratio = confidence density
4. **Kinetic** (Choreography): axis direction change = density state change

**Open question for AD-006 compound:** Is there a meta-equivalence that unifies all 4 mechanisms, or are there exactly 4 orthogonal lenses on the single density-geometry phenomenon?

---

*Builder-E report complete. Both output files written.*
