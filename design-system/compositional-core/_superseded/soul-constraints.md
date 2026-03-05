# Soul Constraints — The 3 Absolute Identity Markers

**Lens Statement:** I am using Identity + Enablement hybrid lens. This prioritizes soul preservation and creative freedom over frequency and completeness.

**Date:** 2026-02-14
**Extractor:** prohibition-extractor (agent)
**Purpose:** Document the 3 ABSOLUTE soul constraints that define KortAI's visual identity at the deepest level

---

## What This Document IS

These are the 3 IMMUTABLE constraints that define KortAI identity. They are not stylistic preferences. They are SOUL PIECES — the foundational geometry that makes KortAI recognizably KortAI.

Every other prohibition, pattern, and token derives from or supports these 3.

**If you violate ANY of these, the output is NOT KortAI.**

---

## The 3 Soul Constraints

### 1. border-radius: 0 — Angular Geometry IS KortAI

**The Rule:** `border-radius: 0` on EVERYTHING. No exceptions. Ever.

**Why This IS Soul:**
Angular geometry IS KortAI. Sharp edges signal decisiveness and print heritage. Rounded corners signal a different design philosophy entirely — friendly, safe, generic, approachable. That is NOT KortAI's identity.

KortAI's identity is: decisive, confident, editorial, authoritative, precise.

**The Philosophy:**
Every rounded corner says "we want to be friendly and non-threatening." Every sharp corner says "we are precise and confident in our content."

This is not decoration. This is CHARACTER.

**Evidence:**
- `geometry.md` lines 31-32: "border-radius: 0 on EVERYTHING (LOCKED, NO EXCEPTIONS) — Sharp edges = decisive, confident; rounded = generic. This is the #1 soul constraint"
- AD validation: "border-radius: 0 was verified as GENERATIVE, not merely restrictive — the angular spiral in AD-004 exists BECAUSE of this constraint (AD-F-013), and bento grid size hierarchy is MORE visible with sharp edges (AD-F-010)."
- `anti-patterns/registry.md` lines 59-72: "Rounded Corners... Signals 'safe/generic' — could be any UI kit. Alternative: border-radius: 0 — sharp edges = decisive, confident"
- Identity-lens.md lines 382-389: "KortAI's identity lives in the CONSTRAINTS more than the AFFORDANCES. It's defined by what it REFUSES (rounded corners, shadows, decorative complexity) as much as what it EMBRACES (flat geometry, editorial typography, research-first rigor)."

**What It Protects:**
- Visual soul (anti-physical aesthetic)
- Geometric precision
- Editorial authority
- Decisiveness over friendliness
- Print heritage
- Distinctive character

**Violations:**
- `border-radius: 4px` on cards → SOUL VIOLATION
- `border-radius: 50%` on avatars → SOUL VIOLATION
- `border-top-left-radius: 8px` on tabs → SOUL VIOLATION
- ANY non-zero radius value → SOUL VIOLATION

**The Test:**
If you blur your eyes and look at the page, do you see SHARP RECTANGLES or SOFT ROUNDED SHAPES?

If you see soft rounded shapes, it's not KortAI.

---

### 2. box-shadow: none — Flat Surfaces Achieve Depth Through Structure

**The Rule:** `box-shadow: none` on EVERYTHING. No exceptions. Ever.

**Why This IS Soul:**
Shadows = fake 3D. Shadows create depth illusion using physical light metaphors (object casting shadow from light source). This is PHYSICAL REALITY SIMULATION.

KortAI achieves depth through spacing, borders, and background zones. This is STRUCTURAL DEPTH.

The difference is philosophical:
- Physical depth: "I look 3D because light hits me and casts a shadow"
- Structural depth: "I am deep because I contain hierarchical structure"

**The Philosophy:**
Flat surfaces are honest. Shadows are dishonest.

When you use box-shadow, you're saying "this content floats above the page." But it doesn't. It's flat HTML. The shadow is a lie.

KortAI says: "This content is hierarchically important" through STRUCTURE (larger border, more padding, darker background, different color zone). Not through fake physics.

**Evidence:**
- `geometry.md` lines 88-104: "box-shadow: none on EVERYTHING. No exceptions. Rule: box-shadow: none on EVERYTHING. No exceptions. Why? Shadows = fake 3D, dishonest. Flat = print heritage, honest. AD Validation: 0 shadow violations across all 6 AD explorations. AD-005 (Choreography) produced the strongest evidence via ANTI-PHYSICAL identity (AD-F-020): 20 CONDITIONAL PASS R-4 findings required reinterpretation from 'visual movement' to 'structural movement.' Any technique implying physical object behavior (including shadows) fails the soul test."
- `anti-patterns/registry.md` lines 76-89: "Drop Shadows... Fake 3D, dishonest, breaks flat design principle. Alternative: box-shadow: none — use whitespace for separation. AD Forward Reference: [AD-F-014, AD-F-022] — AD validated 0 shadow violations across 6 explorations. AD-F-014 showed border-weight gradient (4px/3px/1px) encodes depth as a flat 2D property, no z-axis needed. AD-F-022 showed gravitational density (connection count) replaces shadow-based hierarchy cues."
- Identity-lens.md lines 149-155: "Perceptual Depth Over Decoration... Depth comes from content hierarchy, not visual tricks. Nested structure, proximity, typography scale, border accents — these create depth. Shadows and rounded corners are rejected... DD-006 creates depth through nested boxes with different border weights. OD-002 creates depth through 'Act I / Act II / Act III' structure. Boris vault creates depth through 'Clearance Level' layers. ZERO depth from shadows."

**What It Protects:**
- Anti-physical identity
- Flat design principle
- Honest representation
- Print heritage
- Structural hierarchy
- Perceptual depth methodology

**Violations:**
- `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` on cards → SOUL VIOLATION
- `box-shadow: 0 2px 4px rgba(0,0,0,0.05)` on subtle lift → SOUL VIOLATION
- `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1))` → SOUL VIOLATION
- ANY shadow effect → SOUL VIOLATION

**Related Violation:**
- `opacity: 0.04` on offset pseudo-elements → creates shadow-like depth illusion → SOUL VIOLATION
- `rgba(0,0,0,0.04)` on backgrounds → same effect → SOUL VIOLATION

**The Test:**
If you disable ALL shadows in DevTools, does the hierarchy still work?

If hierarchy depends on shadows, it's not KortAI.

---

### 3. filter: none — No Shadow Effects, No Physical Metaphors

**The Rule:** `filter: drop-shadow()` FORBIDDEN. `filter: none` or non-shadow filters only.

**Why This IS Soul:**
Same principle as box-shadow, but often sneaks in via SVG styling or icon treatment.

Physical reality metaphors (light casting shadows) contradict KortAI's abstract precision.

**The Philosophy:**
Any technique that implies "this object exists in physical space with lighting" violates the anti-physical identity.

Movement, depth, hierarchy — all must be achieved through STRUCTURAL techniques (spacing, borders, nesting, color zones), NOT PHYSICAL SIMULATION (shadows, gradients, 3D transforms).

**Evidence:**
- `geometry.md` line 151: "Drop shadow: NEVER"
- Identity-lens.md line 32: "filter: drop-shadow() FORBIDDEN — No shadow effects"
- Soul-constraints documentation: "filter: none (no drop-shadow) — WHY: Same principle as box-shadow — physical reality metaphors (light casting shadows) contradict KortAI's abstract precision."
- AD-F-020: "Any technique implying physical object behavior (including shadows) fails the soul test."

**What It Protects:**
- Anti-physical identity
- Abstract precision
- Consistency with box-shadow prohibition
- SVG/icon styling integrity

**Violations:**
- `filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1))` on icons → SOUL VIOLATION
- `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2))` on SVG → SOUL VIOLATION
- ANY drop-shadow effect → SOUL VIOLATION

**Permitted Filters:**
- `filter: none` → PERMITTED
- `filter: grayscale(1)` → PERMITTED (non-physical effect)
- `filter: brightness(0.9)` → PERMITTED (non-physical effect)
- `filter: contrast(1.1)` → PERMITTED (non-physical effect)

**The Test:**
Does the filter create an illusion of lighting or physical space?

If yes, it's forbidden.

---

## Why Only 3?

**Many prohibitions exist (see prohibitions.md), but only 3 are SOUL-LEVEL.**

The distinction:

**Soul Constraints (these 3):**
- Immutable, non-negotiable, define identity at deepest level
- Violating ANY ONE makes output "not KortAI"
- Cannot be overridden by any context or requirement
- Visual recognition happens INSTANTLY when violated

**Other Prohibitions:**
- Important, identity-bearing, but DERIVED from or SUPPORTING the 3 soul constraints
- Violating creates quality issues but doesn't destroy soul
- Can have documented exceptions in specific contexts
- Visual recognition happens on INSPECTION

**Example:**
- 2px borders → important prohibition, quality issue, but not soul-destroying
- box-shadow → SOUL VIOLATION, instantly recognizable as "not KortAI"

**The Test:**
If you showed someone 2 pages (one KortAI-compliant, one with THIS violation), could they instantly identify the violation without detailed inspection?

If yes → soul constraint.
If no (requires inspection) → important prohibition, not soul.

---

## Philosophical Principles (Supporting the 3)

These principles explain WHY the 3 constraints exist:

### Depth Through Structure, Not Simulation

**What It Means:**
Hierarchy and depth are created through:
- Spacing (more important = more breathing room)
- Border weight (4px vs 3px vs 1px encodes depth)
- Background zones (dark background = elevated importance)
- Typography scale (larger text = higher hierarchy)
- Nesting (contained sections = structural depth)

NOT through:
- Shadows (fake physics)
- Rounded corners (fake material)
- Gradients (fake lighting)
- 3D transforms (fake space)

**Evidence:**
Identity-lens.md lines 149-155: "Perceptual Depth Over Decoration... Depth comes from content hierarchy, not visual tricks. Nested structure, proximity, typography scale, border accents — these create depth."

---

### Information Density Over Decoration

**What It Means:**
Every visual element must carry semantic weight. If it doesn't communicate information or hierarchy, delete it.

Decoration for decoration's sake is rejected.

**Evidence:**
Identity-lens.md lines 133-139: "Anti-Complexity Principle... Every visual element must carry semantic weight. Decoration for decoration's sake is rejected."

Enablement-lens.md principle: "Information density over decoration"

---

### Every Visual Element Must Carry Semantic Weight

**What It Means:**
- Borders communicate hierarchy (4px callout border = semantic accent)
- Background colors communicate zones (dark = elevated, warm = default, tinted = semantic type)
- Spacing communicates relationships (close = related, far = separated)
- Typography communicates voice (serif = authority, sans = clarity, mono = technical)

Nothing is "just pretty."

**Evidence:**
Identity-lens.md: "Every visual element must carry semantic weight"

Anti-patterns registry: "Decorative elements that do not carry information" prohibited

---

## How the 3 Constraints Generate KortAI Identity

**Visual Recognition Test:**

If you see a page and it has:
1. ✅ Sharp 90-degree corners everywhere
2. ✅ Flat surfaces (no shadows)
3. ✅ No filter effects

Then you are LIKELY seeing KortAI (or compatible identity).

If you see:
1. ❌ Rounded corners
2. ❌ Drop shadows
3. ❌ Shadow filters

Then you are DEFINITELY NOT seeing KortAI.

**The Generative Property:**

These 3 constraints don't just PREVENT bad design. They GENERATE good design.

Example from AD-F-013:
> "border-radius: 0 was verified as GENERATIVE, not merely restrictive — the angular spiral in AD-004 exists BECAUSE of this constraint"

The sharp corners FORCED the designer to create an angular spiral approximation. That constraint GENERATED a unique visual solution.

**The Compositional Chain:**

```
Soul Constraints (3)
    ↓
Generate Visual Identity
    ↓
Inform Other Prohibitions (20+)
    ↓
Guide Pattern Development
    ↓
Create Compositional Grammar
    ↓
Enable Distinctive Layouts
```

Everything traces back to these 3.

---

## Validation Checklist

Before ANY output is marked complete, verify:

```
□ border-radius: 0 everywhere? (Inspect computed styles, not just source)
□ box-shadow: none everywhere? (Check all elements + pseudo-elements)
□ filter: drop-shadow() absent? (Check SVGs, icons, images)
□ No rgba/opacity tricks creating shadow illusion?
□ Depth achieved through structure (borders/spacing/zones)?
□ Every visual element carries semantic weight?
```

**If ANY checkbox is unchecked → SOUL VIOLATION → Output is INVALID.**

---

## What Happens When Soul Is Violated

**Visual Impact:**
- Page instantly feels "not KortAI"
- Could be any modern UI kit
- Generic, friendly, approachable (opposite of intended identity)
- Loses editorial authority
- Loses print heritage
- Loses decisiveness

**Systemic Impact:**
- Breaks provenance chain (soul violations cannot be justified by research)
- Undermines design system integrity
- Creates precedent for future violations
- Erodes identity consistency across all pages

**Process Impact:**
- Output marked INVALID
- Cannot be committed
- Cannot inform future patterns
- Must be rebuilt from soul-compliant foundation

**The Non-Negotiability:**

There is NO context where soul violations are acceptable:
- "But the client wants rounded corners" → Then this isn't KortAI
- "But shadows improve usability" → Use structural depth instead
- "But this is just a prototype" → Prototypes must be soul-compliant
- "But we'll fix it later" → No. Fix it now.

**Soul compliance is the FIRST checkpoint, not the last.**

---

**END SOUL CONSTRAINTS DOCUMENT**
