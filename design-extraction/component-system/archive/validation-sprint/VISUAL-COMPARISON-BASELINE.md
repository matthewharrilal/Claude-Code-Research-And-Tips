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

# VISUAL COMPARISON BASELINE — 10 Soul Pieces

**Purpose:** Establish quantified baseline for comparing experiment prototypes
**References Compared:**
- Reference A: KortAI (provided images)
- Reference B: Paper Theme (baseline description)
- Current System: Card system index.html

---

## 10 SOUL PIECE COMPARISON MATRIX

| # | Soul Piece | KortAI (A) | Paper Theme (B) | Current System | Gap to Close |
|---|------------|------------|-----------------|----------------|--------------|
| 1 | Visible Process | 5/5 | 5/5 | 1/5 | **CRITICAL** |
| 2 | Material Presence | 4/5 | 5/5 | 2/5 | HIGH |
| 3 | Constraint as Identity | 4/5 | 5/5 | 4/5 | LOW |
| 4 | Image as Foundation | 4/5 | 5/5 | 2/5 | HIGH |
| 5 | Typography Restraint | 4/5 | 5/5 | 2/5 | HIGH |
| 6 | Interior Porosity | 5/5 | 5/5 | 1/5 | **CRITICAL** |
| 7 | Earned Imperfection | 4/5 | 5/5 | 1/5 | **CRITICAL** |
| 8 | Organized Density | 5/5 | 2/5 | 3/5 | MEDIUM |
| 9 | Multi-Axis Movement | 5/5 | N/A | N/A | TBD (Exp 6) |
| 10 | Internal Card Structure | 5/5 | 2/5 | 3/5 | MEDIUM |

**TOTALS:**
- KortAI: 45/50 (90%)
- Paper Theme: 39/45 (87%, excluding N/A)
- Current System: 19/45 (42%, excluding N/A)

**Gap Analysis:** Current system is 48% below reference average

---

## SOUL PIECE DETAILED BREAKDOWN

### 1. VISIBLE PROCESS — "Can I see/count the mechanism at arm's length?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 5/5 | Variable halftone dots clearly visible, creates topographic patterns |
| Paper Theme | 5/5 | COARSE halftone, newspaper-like, dots dominate aesthetic |
| Current | 1/5 | CSS blend mode creates smooth gradients, NO visible mechanism |

**Quantified Criteria:**
- 5/5: Individual dots countable at arm's length
- 4/5: Dots visible but fine
- 3/5: Texture visible, dots not countable
- 2/5: Slight texture, mostly smooth
- 1/5: Smooth gradients, no visible process

**Current Gap:** Missing entirely — requires image processing or treatment

---

### 2. MATERIAL PRESENCE — "Could I imagine holding this? Does it feel printed?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 4/5 | Feels like thermal print or data visualization poster |
| Paper Theme | 5/5 | Feels like risograph print, art poster |
| Current | 2/5 | Feels like filtered digital photograph |

**Quantified Criteria:**
- 5/5: Evokes specific print process (risograph, letterpress, newsprint)
- 4/5: Feels printed but generic
- 3/5: Ambiguous — could be print or screen
- 2/5: Feels digital with slight texture
- 1/5: Pure digital, Instagram filter feel

**Current Gap:** Treatment doesn't evoke physical reproduction

---

### 3. CONSTRAINT AS IDENTITY — "Can I name the constraint in 3 seconds?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 4/5 | "Blue halftone on white" — clear but single color |
| Paper Theme | 5/5 | "Different duotone per card" — constraint creates variety |
| Current | 4/5 | "Red + cream + italic" — identifiable but arbitrary |

**Quantified Criteria:**
- 5/5: Constraint is the defining feature AND creates meaning
- 4/5: Constraint is clear and consistent
- 3/5: Constraint exists but not memorable
- 2/5: Some consistency but no clear constraint
- 1/5: No apparent constraint

**Current Gap:** Constraint exists but doesn't serve the aesthetic goal

---

### 4. IMAGE AS FOUNDATION — "Does eye land on image first?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 4/5 | Image is 55% of card, eye lands there first |
| Paper Theme | 5/5 | Image is 90%+ of card, IS the card |
| Current | 2/5 | Image is ~25% at bottom, text seen first |

**Quantified Criteria:**
- 5/5: Image dominates, is the reason for the card
- 4/5: Image is primary but content also significant
- 3/5: Image and content roughly equal
- 2/5: Content primary, image supporting
- 1/5: Image is afterthought or absent

**Current Gap:** Layout puts content first, image last

---

### 5. TYPOGRAPHY RESTRAINT — "Is the grid calm? Does typography serve or fight?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 4/5 | Clean sans-serif, hierarchy through size, no decoration |
| Paper Theme | 5/5 | Almost no typography, image carries message |
| Current | 2/5 | RED + ITALIC + UPPERCASE = 3 emphases fighting |

**Quantified Criteria:**
- 5/5: Typography invisible, position alone creates hierarchy
- 4/5: Typography present but restrained
- 3/5: Some unnecessary emphasis but not distracting
- 2/5: Multiple emphases competing
- 1/5: Typography screaming for attention

**Current Gap:** Stacked emphases create competition, not hierarchy

---

### 6. INTERIOR POROSITY — "Does background show through light areas?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 5/5 | White background visible in all highlight areas |
| Paper Theme | 5/5 | Cream infiltrates everywhere, defines the aesthetic |
| Current | 1/5 | Solid color overlay, no porosity |

**Quantified Criteria:**
- 5/5: Background clearly visible in all light image areas
- 4/5: Background visible in some areas
- 3/5: Slight infiltration, mostly solid
- 2/5: Edge infiltration only
- 1/5: No porosity, solid fill

**Current Gap:** CSS blend mode creates solid color, not porous treatment

---

### 7. EARNED IMPERFECTION — "Is there organic variation I can perceive?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 4/5 | Dot size variation creates organic texture |
| Paper Theme | 5/5 | Coarse dots, registration variation, print artifacts |
| Current | 1/5 | Perfect digital gradients, no variation |

**Quantified Criteria:**
- 5/5: Multiple types of organic variation visible
- 4/5: One clear type of variation
- 3/5: Subtle variation, barely perceptible
- 2/5: Manufactured "noise" (fake grain overlay)
- 1/5: Perfect, mechanical precision

**Current Gap:** No variation mechanism in current treatment

---

### 8. ORGANIZED DENSITY — "Is content dense but structured, not chaotic?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 5/5 | HIGH density, 7 zones, perfect structure |
| Paper Theme | 2/5 | LOW density by design (art, not info) |
| Current | 3/5 | Moderate density, structure adequate |

**Quantified Criteria:**
- 5/5: HIGH density, PERFECT structure
- 4/5: Moderate density, good structure
- 3/5: Low density OR adequate structure
- 2/5: Density/structure mismatch
- 1/5: Chaotic or empty

**Current Gap:** Not the priority issue — structure is acceptable

---

### 9. MULTI-AXIS MOVEMENT — "Are there horizontal scrolls within vertical sections?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 5/5 | Horizontal card carousel within vertical page |
| Paper Theme | N/A | Individual cards/posters, not page layouts |
| Current | N/A | Demo page, not production layout |

**Quantified Criteria:**
- 5/5: Multiple axes used purposefully
- 4/5: Horizontal sections present
- 3/5: Standard vertical only
- 2/5: Awkward scrolling
- 1/5: Scroll confusion

**Current Gap:** Will be addressed in Experiment 6

---

### 10. INTERNAL CARD STRUCTURE — "Are there clear zones within cards creating hierarchy?"

| Reference | Score | Evidence |
|-----------|-------|----------|
| KortAI | 5/5 | 6-7 distinct zones, clear hierarchy, perfect separation |
| Paper Theme | 2/5 | 2 zones (image + title), minimal by design |
| Current | 3/5 | 3 zones (title/tags/image), adequate separation |

**Quantified Criteria:**
- 5/5: Multiple zones, perfect hierarchy, clear separation
- 4/5: Clear zones, good hierarchy
- 3/5: Zones present, hierarchy adequate
- 2/5: Minimal zones or unclear separation
- 1/5: No discernible structure

**Current Gap:** Structure exists but could be refined

---

## PRIORITY RANKING FOR EXPERIMENTS

Based on gap analysis, priority order:

### P0 — CRITICAL (Score 1/5, largest gap)
1. **Visible Process** (Soul Piece 1) → Experiment 1
2. **Interior Porosity** (Soul Piece 6) → Experiment 1
3. **Earned Imperfection** (Soul Piece 7) → Experiment 1

### P1 — HIGH (Score 2/5)
4. **Image as Foundation** (Soul Piece 4) → Experiment 2
5. **Typography Restraint** (Soul Piece 5) → Experiment 3
6. **Material Presence** (Soul Piece 2) → Experiment 1

### P2 — MEDIUM (Score 3/5)
7. **Organized Density** (Soul Piece 8) → Experiment 6
8. **Internal Card Structure** (Soul Piece 10) → Experiment 2, 6

### P3 — LOW (Score 4/5)
9. **Constraint as Identity** (Soul Piece 3) → Existing, refine in integration

### TBD
10. **Multi-Axis Movement** (Soul Piece 9) → Experiment 6

---

## COMPARISON CRITERIA FOR EXPERIMENTS

### Experiment 1 Success Criteria (From References)
A prototype scores well if:
- [ ] Variable dot size (KortAI: dots range from 1px to 5px based on luminance)
- [ ] Dots countable at arm's length (Paper Theme: newspaper coarse)
- [ ] Background shows through highlights (both: interior porosity is CRITICAL)
- [ ] Evokes print process (Paper Theme: risograph; KortAI: thermal print)
- [ ] Creates organic variation (both: dot size variation, not uniform)

### Experiment 2 Success Criteria (From References)
A layout scores well if:
- [ ] Image is 55%+ of card (KortAI: 55-60%; Paper Theme: 90%+)
- [ ] Eye lands on image first (1-second test)
- [ ] Image feels like foundation, not afterthought
- [ ] Internal zones are clear and separated by whitespace

### Experiment 3 Success Criteria (From References)
Typography scores well if:
- [ ] No more than 1 emphasis per level (KortAI: size only; Paper: position only)
- [ ] Grid of 6+ cards feels calm, not competitive
- [ ] Title doesn't need styling to command attention
- [ ] Color reserved for data states only (KortAI: % metrics)

---

## REFERENCE ALIGNMENT SUMMARY

### Where References AGREE (Both Score 5/5)
1. Visible Process — VARIABLE halftone dots essential
2. Interior Porosity — Background MUST show through
3. Material Presence — MUST feel printed

### Where References DIVERGE
| Aspect | KortAI | Paper Theme | Implication |
|--------|--------|-------------|-------------|
| Density | HIGH | LOW | Use case determines direction |
| Image % | 55-60% | 90%+ | Use case determines direction |
| Typography | Present/restrained | Almost absent | Use case determines direction |
| Card purpose | SCANNING | ADMIRING | Use case determines direction |

### Critical Insight
**Experiment 4 (Use Case Alignment) determines which reference we follow for divergent aspects.** The convergent aspects (Visible Process, Interior Porosity, Material Presence) are NON-NEGOTIABLE for both directions.

---

## BASELINE VERIFICATION CHECKLIST

Before proceeding to Experiment 1:

- [x] All 7 zones analyzed for Reference A (KortAI)
- [x] Named Character assigned for each zone
- [x] Perceptual Truth articulated for each zone
- [x] All 10 soul pieces assessed for Reference A
- [x] Reference B (Paper Theme) documented from baseline
- [x] Comparison criteria extracted (quantified)
- [x] Gap analysis complete (Current vs References)
- [x] Priority ranking established

### Verification Questions
1. Can I describe KortAI's halftone distinctiveness from memory? **YES** — Variable blue dots creating topographic/data-viz patterns
2. Can I describe Paper Theme's porosity from memory? **YES** — Cream infiltrating all light areas, coarse dots countable
3. Do I have QUANTIFIED comparison criteria? **YES** — 5-point scales for all soul pieces
4. Do I know shared principles vs divergences? **YES** — Table above

**BASELINE STATUS: ✅ VERIFIED**

---

## RESUME INSTRUCTIONS

**If resuming from here:**
1. Read VALIDATION-SPRINT-DECISION-LOG.md for decisions
2. This baseline establishes scoring criteria
3. Proceed to Experiment 1 with these benchmarks
4. Score all prototypes against 5-point scales defined here

**Next action:** Create Experiment 1 prototypes (halftone, grain, stipple, lines, paper bg)
