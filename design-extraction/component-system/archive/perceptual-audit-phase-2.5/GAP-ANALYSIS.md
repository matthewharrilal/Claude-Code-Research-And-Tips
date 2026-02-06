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

# GAP ANALYSIS
## Current System vs. Soul Pieces

*Phase 3 of Perceptual Deepening Protocol*

---

## GAP SUMMARY

| Soul Piece | Gap Status | Visual Impact | Priority |
|------------|------------|---------------|----------|
| 1. Visible Process | FULL GAP | **HIGH** | P0 |
| 2. Material Presence | PARTIAL | **HIGH** | P1 |
| 3. Constraint as Identity | PARTIAL | **MEDIUM** | P2 |
| 4. Image as Foundation | FULL GAP | **HIGH** | P1 |
| 5. Typography Restraint | FULL GAP | **MEDIUM** | P2 |
| 6. Interior Porosity | FULL GAP | **HIGH** | P0 |
| 7. Earned Imperfection | FULL GAP | **HIGH** | P0 |

**P0 = Foundational (enables other pieces)**
**P1 = High Impact (immediately visible)**
**P2 = Refinement (polish after foundations)**

---

## DETAILED GAP ANALYSIS

### GAP 1: VISIBLE PROCESS (P0 — Foundational)

**Current State:**
- CSS `mix-blend-mode` creates smooth duotone effect
- Grayscale filter + color overlays
- No visible dot structure, grain, or texture
- Process is entirely invisible to viewer

**Reference State:**
- Halftone dots clearly visible at normal viewing distance
- Pattern suggests mechanical reproduction (screen printing, risograph)
- Viewer can imagine physical process
- Image feels "made" not "captured"

**The Gap:**
The current system achieves **color transformation** but not **process visibility**. It's the difference between an Instagram filter (invisible mechanism) and a risograph print (visible dots).

**Why We Missed It:**
We optimized for what CSS does well (smooth blending) rather than what creates material authenticity (visible structure). The blend mode approach was technically correct for "duotone color" but missed the soul of "printed image."

**Visual Impact: HIGH**
This is the single most differentiating aspect between the references and the current system. Visitors immediately sense "printed" vs. "digital."

---

### GAP 2: MATERIAL PRESENCE (P1 — High Impact)

**Current State:**
- Warm cream backgrounds (#FEF9F5) ✓
- Limited color palette (red + cream + black) ✓
- No paper texture or grain
- No process artifacts visible
- Edges are mathematically perfect

**Reference State:**
- Background participates as "paper substrate"
- Grain/texture suggests material surface
- Edges carry printing character
- Overall feels like an artifact you could hold

**The Gap:**
Partial gap. The current system has the **colors** of paper but not the **substance** of paper. It's like painting a wall cream-colored vs. actually using textured wallpaper.

**Why We Missed It:**
We assumed color alone could communicate "paper feel." But material presence requires texture, imperfection, and substrate visibility — not just color coding.

**Visual Impact: HIGH**
Material presence is what makes visitors want to "touch" a design. Without it, the design exists nowhere.

---

### GAP 3: CONSTRAINT AS IDENTITY (P2 — Refinement)

**Current State:**
- Duotone is applied (two-color mapping)
- Sharp edges (0px border-radius) enforced
- Outline tags (not filled)
- But: constraints feel like "styling" not "rules"

**Reference State:**
- Paper: Single color per image (not duotone)
- KortAI: Consistent dot-matrix across all imagery
- Constraints are the FIRST thing noticed
- "This is the one that always ___"

**The Gap:**
Partial gap. Constraints exist but aren't **visible enough** or **unusual enough** to become identity. Duotone is common in modern web design — it doesn't differentiate.

**Why We Missed It:**
We implemented constraints that work technically but don't announce themselves perceptually. A visitor might not even notice the duotone — it just looks "styled."

**Visual Impact: MEDIUM**
Important for brand recognition and memorability, but not the first thing visitors consciously perceive.

---

### GAP 4: IMAGE AS COMPOSITIONAL FOUNDATION (P1 — High Impact)

**Current State:**
- Images placed at BOTTOM of card
- Images sized to fit remaining space (~20-25%)
- Content flows top-to-bottom: title → tags → image
- Image feels like "illustration for content"

**Reference State:**
- KortAI: Images at TOP, 40-60% of card
- Paper: Images dominate, 70%+ when present
- Content flows FROM image
- Image is the statement, text elaborates

**The Gap:**
Full gap. The current system treats images as **decoration** while references treat images as **foundation**. Complete structural inversion required.

**Why We Missed It:**
We followed typical web card patterns (content first, image supporting). The Sanrok reference we extracted from may have de-emphasized images, but the KortAI and Paper references show a different approach.

**Visual Impact: HIGH**
Card composition is immediately visible. The current bottom-image approach screams "web component" not "editorial design."

---

### GAP 5: TYPOGRAPHY RESTRAINT (P2 — Refinement)

**Current State:**
- RED color on titles
- ITALIC style on titles
- UPPERCASE on titles
- All three emphasis techniques stacked
- Named character: "The Eager Art School Graduate"

**Reference State:**
- KortAI: Medium weight, neutral colors, calm authority
- Paper: Serif, moderate weight, whispered elegance
- Emphasis is rare, hierarchy through position
- Named characters: "Confident CFO" / "Unhurried Librarian"

**The Gap:**
Full gap in philosophy. The current system achieves hierarchy through **stacked emphasis** (color + style + case). References achieve hierarchy through **structural position** (size, weight graduation, placement).

**Why We Missed It:**
The original Sanrok reference DOES use red italic uppercase. But in context of a full editorial layout, it works differently. Isolated as a card component, it becomes "shouting."

**Visual Impact: MEDIUM**
Typography refinement is important but secondary to the image treatment gap. Fix process visibility first, then refine typography.

---

### GAP 6: INTERIOR POROSITY (P0 — Foundational)

**Current State:**
- Blend modes create smooth, continuous color fill
- Every pixel receives some treatment
- No gaps or breathing room inside image
- Background cannot infiltrate the subject

**Reference State:**
- Halftone dots create granular gaps
- Background color shows through in highlights
- Image is "permeable" not "solid"
- Paper infiltrates the subject

**The Gap:**
Full gap. Current images are **solid surfaces with tinting**. Reference images are **permeable substances with infiltration**. This is the material metaphor difference.

**Why We Missed It:**
CSS blend modes CAN'T do this. We used the best tool CSS offers, but the soul piece requires a fundamentally different approach (SVG filters, canvas, or preprocessed images).

**Visual Impact: HIGH**
Interior porosity is what makes images feel "printed INTO paper" vs. "applied ON paper." It's inseparable from Visible Process.

---

### GAP 7: EARNED IMPERFECTION (P0 — Foundational)

**Current State:**
- Mathematical gradients
- Perfect anti-aliasing
- Identical repetitions
- Zero organic variation
- "The system actively pursues smoothness"

**Reference State:**
- 3-15% controlled variation in dot spacing
- Organic clustering in patterns
- Edges that "breathe"
- Irregularity that feels intentional

**The Gap:**
Full gap. The current system is **optimized for perfection** while the references are **optimized for humanity**. This requires reversing fundamental instincts.

**Why We Missed It:**
Web development culture prizes pixel-perfection. "Imperfection" sounds like a bug, not a feature. We didn't recognize that perceived warmth comes from controlled variation.

**Visual Impact: HIGH**
This is what makes visitors feel "this was made by someone who cared" vs. "this was generated." Subtle but powerful.

---

## PRIORITY RATIONALE

### P0: Foundational (Must Fix First)
- **Visible Process** — Keystone that enables everything else
- **Interior Porosity** — Inseparable from visible process
- **Earned Imperfection** — The warmth generator

These three are interconnected. You can't have material presence without visible process. You can't have visible process without interior porosity (dots create gaps). You can't have warmth without earned imperfection (variation in the dots).

**These require a fundamentally different technical approach** (SVG filters, halftone preprocessing) rather than CSS refinement.

### P1: High Impact (Fix After Foundations)
- **Material Presence** — Will partially emerge from P0 work
- **Image as Foundation** — Structural change (flip image position)

### P2: Refinement (Polish)
- **Constraint as Identity** — Consider more extreme constraints
- **Typography Restraint** — Reduce emphasis stacking

---

## BLINDSPOT ACKNOWLEDGMENT

**What we almost missed:**

1. **The CSS ceiling** — We kept trying to solve soul pieces with CSS when the soul pieces require different technology entirely. Blend modes can't create dots.

2. **The process-visibility connection** — We initially thought these were separate concerns (color treatment vs. texture). They're the same concern expressed differently.

3. **The typography trap** — The Sanrok reference uses red italic uppercase, so we assumed it was correct. But isolated in a card grid, it reads differently than in an editorial layout.

4. **The image position assumption** — Web convention puts images first for "visual impact." But the references put images first structurally (as foundation), not just visually.

5. **The perfection instinct** — We kept smoothing things that needed to be rough. The instinct to "clean up" worked against the soul.

---

## SYNTHESIS: THE PATH FORWARD

The gap analysis reveals a clear hierarchy:

```
TECHNICAL FOUNDATION NEEDED
│
├── 1. Implement halftone/dot pattern system
│   └── Enables: Visible Process, Interior Porosity
│
├── 2. Add controlled variation to patterns
│   └── Enables: Earned Imperfection, Material Presence
│
└── 3. Restructure card composition
    └── Enables: Image as Foundation

REFINEMENT LAYER
│
├── 4. Strengthen constraint visibility
│   └── Consider single-color instead of duotone
│
└── 5. Reduce typography emphasis
    └── Remove one of: red/italic/uppercase
```

**The current system cannot reach the soul through CSS refinement alone.** A technical foundation change (halftone implementation) is required before the soul pieces can manifest.

---

*Gap Analysis complete. Proceed to Implementation Spec.*
