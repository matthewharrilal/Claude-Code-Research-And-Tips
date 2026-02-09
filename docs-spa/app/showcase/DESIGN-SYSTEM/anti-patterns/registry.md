<!-- ═══════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/anti-patterns/registry.md
Tier: B | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Defines what MUST NOT appear in KortAI implementations — the soul
violations that break the design identity. This is the negative space
of the design system: knowing what to avoid is as important as knowing
what to apply. Contains "The Soul Test" for quick compliance checks.

2. THE QUESTION THIS ANSWERS
"What specific CSS properties, color combinations, and structural
patterns are forbidden in KortAI, and what should replace them?"

3. STATUS
COMPLETE — covers geometry (rounded corners, shadows), color (traffic
lights, cool grays), typography (wrong fonts, wrong weights), and
structural (density monotony, component stacking) anti-patterns.
Condensed and reorganized from design-extraction T1 source.

5. BUILT ON
- design-extraction/component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md (T1 source, condensed + reorganized)
- DD exploration findings (empirical violations discovered)
- Soul token locked values (what makes something "wrong")

6. MUST HONOR
- Every anti-pattern must have: What, Why it fails, Alternative
- CSS "WRONG/RIGHT" examples must use actual token values
- Anti-patterns derive from soul tokens — if tokens change (they
  shouldn't), anti-patterns must update
- "The Soul Test" must remain a quick binary check

8. CONSUMED BY
- showcase/CLAUDE.md (mandatory reading, Step 1 research context)
- QUICK-START.md (anti-pattern awareness before building)
- guides/migration-guide.md ("read anti-patterns registry" prerequisite)
- DESIGN-SYSTEM/CLAUDE.md (navigation table)
- Any future exploration or section build (pre-build checklist)

10. DIAGNOSTIC QUESTIONS
Q1: Does every "RIGHT" example use the exact locked token values
    (border-radius: 0, box-shadow: none, #FEF9F5, etc.)?
Q2: Is every anti-pattern traceable to a specific soul token or
    design-extraction finding?
Q3: Does "The Soul Test" produce correct pass/fail results for
    known-good and known-bad implementations?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════ -->

# Anti-Patterns Registry
## What NOT to Do in KortAI

═══════════════════════════════════════════════════════════════════════════════

## Geometry Anti-Patterns

### ❌ Rounded Corners
**What:** `border-radius: 4px` or greater
**Why it fails:** Signals "safe/generic" — could be any UI kit
**Alternative:** `border-radius: 0` — sharp edges = decisive, confident

```css
/* WRONG */
.card { border-radius: 12px; }

/* RIGHT */
.card { border-radius: 0; }
```

---

### ❌ Drop Shadows
**What:** `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`
**Why it fails:** Fake 3D, dishonest, breaks flat design principle
**Alternative:** `box-shadow: none` — use whitespace for separation

```css
/* WRONG */
.card { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

/* RIGHT */
.card { box-shadow: none; }
```

═══════════════════════════════════════════════════════════════════════════════

## Color Anti-Patterns

### ❌ Traffic-Light Colors
**What:** Green (#4A9D6B) adjacent to red (#E83025)
**Why it fails:** Kindergarten-level visual language, diminishes both
**Alternative:** Separate with whitespace or neutral component

```html
<!-- WRONG -->
<aside class="callout--tip">...</aside>
<aside class="callout--gotcha">...</aside>

<!-- RIGHT -->
<aside class="callout--tip">...</aside>
<div style="height: 48px;"></div>
<aside class="callout--gotcha">...</aside>
```

---

### ❌ Gray Backgrounds
**What:** `background: #F5F5F5` or similar cool grays
**Why it fails:** Sterile, institutional, not editorial
**Alternative:** Warm cream (#FEF9F5) or semantic tints

```css
/* WRONG */
body { background: #F5F5F5; }

/* RIGHT */
body { background: #FEF9F5; }
```

═══════════════════════════════════════════════════════════════════════════════

## Layout Anti-Patterns

### ❌ Callout Cacophony
**What:** 3+ callouts in one viewport
**Why it fails:** Alarm fatigue — the signal is lost in noise
**Alternative:** Max 1-2 callouts per viewport

---

### ❌ Code Wall
**What:** Long code block with no breaks
**Why it fails:** Reader loses context, overwhelmed
**Alternative:** Buffer with callouts/explanation

```html
<!-- WRONG -->
<pre><code>
  // 50 lines of code with no breaks
</code></pre>

<!-- RIGHT -->
<pre><code>// 15 lines</code></pre>
<aside class="callout--tip">Key insight here...</aside>
<pre><code>// 15 more lines</code></pre>
```

---

### ❌ Same Density Throughout
**What:** Uniform spacing/density from top to bottom
**Why it fails:** Monotonous, no rhythm, no rest points
**Alternative:** Use PULSE, CRESCENDO, BOOKENDS, or WAVE patterns

---

### ❌ Decorative Grid Breaking
**What:** Breaking grid with decorative elements
**Why it fails:** Violates flat design — decoration competes with content
**Alternative:** Break with CONTENT, not decoration

═══════════════════════════════════════════════════════════════════════════════

## Typography Anti-Patterns

### ❌ Sans-Serif for Essence Body
**What:** Using Inter for Essence Callout body text
**Why it fails:** Loses reverent, archival quality
**Alternative:** Instrument Serif italic

```css
/* WRONG */
.callout--essence .callout__body {
  font-family: 'Inter', sans-serif;
}

/* RIGHT */
.callout--essence .callout__body {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
}
```

---

### ❌ Thin Callout Borders
**What:** `border-left: 1px` or `2px`
**Why it fails:** Too subtle, doesn't create visual anchor
**Alternative:** 4px minimum

```css
/* WRONG */
.callout { border-left: 2px solid #4A90D9; }

/* RIGHT */
.callout { border-left: 4px solid #4A90D9; }
```

---

### ❌ Non-Italic h3
**What:** h3 with normal font-style
**Why it fails:** Breaks editorial hierarchy convention
**Alternative:** All h3 should be italic

```css
/* WRONG */
h3 { font-style: normal; }

/* RIGHT */
h3 { font-style: italic; }
```

═══════════════════════════════════════════════════════════════════════════════

## Interaction Anti-Patterns

### ❌ Hover Reveals for Important Content
**What:** Hiding information behind hover states
**Why it fails:** Touch devices excluded, information hidden
**Alternative:** Click to expand, or show always

---

### ❌ Hover Lift Effects
**What:** `transform: translateY(-4px)` on hover
**Why it fails:** Treats content like buttons, fake 3D
**Alternative:** No transform — content, not interactive element

═══════════════════════════════════════════════════════════════════════════════

## Component Anti-Patterns

### ❌ Vertical Table Borders
**What:** Cell borders on left/right of table columns
**Why it fails:** Prison bars effect, claustrophobic
**Alternative:** Open grid — horizontal rules only, whitespace for columns

```css
/* WRONG */
.decision-matrix td { border: 1px solid #E5E5E5; }

/* RIGHT */
.decision-matrix td {
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  border-left: none;
  border-right: none;
}
```

---

### ❌ Same-Velocity Stacking
**What:** SLOW + SLOW or FAST + FAST components adjacent
**Why it fails:** Monotonous, no rhythm
**Alternative:** Vary velocity (SLOW → FAST → SLOW)

═══════════════════════════════════════════════════════════════════════════════

## The Bootstrap Test

> "Could this exist in a Bootstrap project? If yes, you've failed."

Every implementation decision should pass this test. KortAI is opinionated and memorable, not generic and universally acceptable.

═══════════════════════════════════════════════════════════════════════════════

## OD Anti-Patterns

Discovered during Stage 3 (Organization Exploration) adversarial audit.
89 findings, 17 agents, 3,479+ DOM elements checked.

### OD-F-AP-001: 2px Border Epidemic

**What:** `border-width: 2px` used pervasively across structural borders
**Scale:** 108 CSS declarations, 1000+ computed instances across OD-001 through OD-006
**Why it fails:** 2px borders are structurally ambiguous -- too thin to be a strong
architectural signal (like the 4px callout left-border), too thick to be a subtle
separator (like 1px dividers). They create a "neither here nor there" quality that
weakens the overall visual hierarchy.
**Alternative:** Upgrade structural borders to 3px minimum. Reserve 4px for callout
left-borders (Family DNA soul piece). Use 1px only for subtle horizontal rules.

```css
/* WRONG — the 2px epidemic */
.section-header { border-bottom: 2px solid #E0D5C5; }
.card-container { border: 2px solid #E0D5C5; }

/* RIGHT — clear structural hierarchy */
.section-header { border-bottom: 3px solid #E0D5C5; }
.card-container { border: 3px solid #E0D5C5; }
```

**Discovery Context:** OD granular adversarial audit (2026-02-07), 17 agents.
This was the #1 systemic issue identified. Does NOT constitute a soul violation
but weakens visual hierarchy across all 6 OD explorations.

---

### OD-AP-002: Inconsistent Typography Scale

**What:** OD-006 uses different `--type-page` / `--type-section` values than OD-001 through OD-005
**Why it fails:** Creates a quality dialect split -- OD-006 (Editorial) has different
typographic personality than OD-001/002 (Polished) and OD-003/004/005 (Functional).
While intentional creative variation is acceptable, unintentional scale drift breaks
cross-OD consistency.
**Alternative:** Establish a single typographic scale for all ODs, with explicit
creative overrides only where intentionally needed.

**Discovery Context:** Fresh-eyes adversarial audit and cross-OD consistency agent
identified three quality dialects: Polished (OD-001/002), Functional (OD-003/004/005),
Editorial (OD-006). The typography scale divergence in OD-006 was confirmed as
the primary driver of the Editorial dialect. Unified via OD-CONVENTION-SPEC.md
during re-enrichment.

---

### OD-AP-003: Semi-Transparent Backgrounds (Systemic Audit Gap)

**What:** `rgba(0,0,0,0.04)` or any opacity < 1.0 on background colors, offset pseudo-elements, or inline code backgrounds
**Scale:** Found in EVERY wave of re-enrichment (Wave 1: essence-pullquote::after at opacity 0.3, Wave 3: two independent OD-004 locations with rgba(0,0,0,0.04) on callout inline code and troubleshoot inline code)
**Why it fails:** Any opacity < 1.0 on offset pseudo-elements creates the same visual
effect as box-shadow — a depth illusion that violates the ANTI-PHYSICAL identity.
Research catches obvious violations (box-shadow, filter, transform), but embedded
rgba backgrounds survive multiple review layers.
**Alternative:** Fully opaque backgrounds only. `opacity: 1` on all visual elements.

```css
/* WRONG — semi-transparent creates shadow illusion */
.offset::after { background: rgba(0,0,0,0.04); }
.callout code { background: rgba(0,0,0,0.04); }

/* RIGHT — fully opaque, no depth illusion */
.offset::after { background: #F5F0EB; opacity: 1; }
.callout code { background: #F0EBE3; }
```

**Binary rule:** opacity === 1.0 on all visual elements. No exceptions.

**Discovery Context:** OD re-enrichment Waves 1-3 (2026-02-09). Every builder
in every wave found opacity < 1.0 violations not caught by prior audits or
research packages. Confirmed as systemic audit gap requiring targeted `rgba(`
and `opacity:` sweep in future stages.
