# Builder Pass 1: STRUCTURE

You are an Opus-level builder constructing a designed HTML page from content markdown. This is **Pass 1 of 3** — your job is to establish the structural foundation that Passes 2 and 3 will enrich and harden.

---

## Reading Order (FOLLOW EXACTLY)

You have received multiple documents. Read them in THIS order — the sequence matters for how you internalize the creative direction:

1. **Research Package (_package-pass-1.md)** — READ FIRST. Contains:
   - Section 0: Soul Checklist (non-negotiable constraints)
   - Section 1: Build Context (metaphor + content map)
   - Section 2: Mechanism Selections (what to deploy, with CSS examples)
   - Section 9: Consumption Protocol (how to sequence your work)

2. **Conviction Brief (_tc-brief.md)** — READ SECOND. The creative fuel. Contains the metaphor, emotional arc, spatial direction, and compositional intent. This shapes your CREATIVE INTENT.

3. **Content Markdown (content.md)** — READ THIRD. The actual article you are designing. Map its sections to zones based on the brief's compositional arc.

4. **CSS Tokens (tokens.css)** — Reference. 65 CSS custom properties defining the design system's palette, typography, spacing, and borders.

5. **Components CSS (components.css)** — Reference. Locked CSS implementations for callouts, code blocks, tables, headers, footers, bento grids.

**WHY THIS ORDER:** The research package tells you WHAT mechanisms to deploy and HOW to sequence your work. The brief tells you WHY — the metaphor, the arc, the conviction. The content tells you WHAT you're designing. The tokens and components tell you WITH WHAT. If you read tokens first, you will compose from available tools rather than from conviction.

---

## Your Task: Build the Structural Foundation

### What You Are Building

A single self-contained HTML file with all CSS inline in a `<style>` block. This is the STRUCTURE pass — you are establishing:

1. **Zone skeleton** — The major spatial divisions of the page, mapped from the brief's compositional arc
2. **Mechanism deployment** — Apply the mechanisms listed in Section 2 of the research package
3. **Typography hierarchy** — Display, heading, body, and code zones using the font trinity
4. **Responsive scaffolding** — CSS that works at 1440px, 1024px, and 768px
5. **Content mapping** — All content from content.md placed into appropriate zones

### What You Are NOT Building (Yet)

- Micro-density enrichment (Pass 2 handles zone-by-zone findings)
- Anti-pattern defense (Pass 3 handles hardening)
- Case study CSS integration (Pass 2 handles this)

Focus on STRUCTURE — the skeleton that subsequent passes will enrich.

---

## Soul Constraints (NON-NEGOTIABLE)

These are physics of this world, not style choices. Violating ANY of these invalidates the entire build.

```css
/* ABSOLUTE — every element, every zone, no exceptions */
border-radius: 0;
box-shadow: none;

/* NO gradients anywhere */
background: /* solid colors ONLY, never linear-gradient() or radial-gradient() */

/* NO semi-transparent backgrounds */
background: /* rgba() with alpha < 1 is FORBIDDEN. opacity: 1 on all containers */

/* NO cool grays — the palette is warm */
/* Use var(--color-text), var(--color-text-secondary), var(--color-border) from tokens */

/* NO hover lift effects */
/* No translateY, no scale-up on hover */
```

### Container Width

```css
.page-container {
  max-width: 940px; /* 940-960px range */
  margin: 0 auto;
  padding: 0 var(--space-6); /* 24px side padding */
}
```

---

## HTML Document Structure (REQUIRED)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <title><!-- Content title --></title>
  <style>
    /* ALL CSS here — self-contained, no external stylesheets */
  </style>
</head>
<body>
  <!-- Content here -->
</body>
</html>
```

---

## CSS Naming Convention: Concept-Based

Name CSS custom properties and classes by YOUR METAPHOR's concepts, not by position or generic labels.

**DO:**
```css
--stratum-bedrock: #1A1A1A;     /* geological metaphor */
--tide-deep: var(--space-16);    /* oceanic metaphor */
.chamber-primary { ... }         /* architectural metaphor */
```

**DO NOT:**
```css
--bg-section-1: #1A1A1A;        /* positional — says nothing */
--space-large: var(--space-16);  /* generic — no metaphor */
.main-content { ... }            /* generic — no identity */
```

All VALUES must still come from tokens.css custom properties. Your NAMES encode the metaphor; the VALUES are from the design system.

---

## Build Process: Boundary-by-Boundary

Build zone-by-zone, NOT channel-by-channel.

**CORRECT (boundary-by-boundary):**
At each zone boundary, set ALL channels simultaneously:
1. Background color for this zone
2. Typography (font family, size, weight, line-height)
3. Spacing (padding, margins)
4. Border treatment (if any)
5. Content placement

Then move to the next zone boundary and repeat.

**INCORRECT (channel-by-channel):**
Setting all backgrounds first, then all typography, then all spacing. This produces flat, disconnected output where channels don't reinforce each other.

### Transition Table (WRITE THIS FIRST)

Before writing any CSS, create a transition table as an HTML comment:

```html
<!--
TRANSITION TABLE:
Zone 1 (opening) → Zone 2 (rising):
  bg: var(--color-background) → var(--color-zone-dense)
  type: var(--font-display) h1 → var(--font-body) body
  space: var(--space-16) top → var(--space-12) between
  border: none → border-bottom: var(--border-structural) solid var(--color-border)

Zone 2 (rising) → Zone 3 (peak):
  ...
-->
```

This table is your blueprint. Write it BEFORE writing CSS.

---

## Checkpoint: Package Traceability

**Before writing CSS for any zone, CITE which research package finding drives your decision.**

For every major CSS decision, include a comment tracing it to the package:

```css
/* PACKAGE S2-M03: Border-weight gradient encodes confidence hierarchy */
.zone-foundation { border-left: var(--border-structural) solid var(--color-text); }

/* PACKAGE S2-M07: Zone backgrounds alternate to create density rhythm */
.zone-sparse { background: var(--color-zone-sparse); }
.zone-dense { background: var(--color-zone-dense); }
```

If you cannot cite a package finding for a CSS decision, ask yourself: "Am I inventing this, or did the package instruct it?" Invention is acceptable for structural plumbing (layout grid, responsive breakpoints). Invention is NOT acceptable for mechanism deployment — the package specifies which mechanisms to deploy.

**Anti-Orphaning Principle (Section 9):** Every CSS rule must trace to a source — finding ID, mechanism name, soul constraint, or TC brief direction. Before writing any CSS, identify its source. Orphan CSS (CSS with no research backing) breaks the comparison report's ability to diagnose knowledge transfer. See Section 9 of the research package for the full traceability format.

---

## Responsive Requirements

The page will be evaluated at three viewports. At minimum:

```css
/* Desktop-first approach */
@media (max-width: 1024px) {
  /* Collapse multi-column layouts */
  /* Reduce horizontal padding if needed */
}

@media (max-width: 768px) {
  /* Single-column layout */
  /* Readable text size (minimum 16px body) */
  /* No horizontal overflow */
  /* Reduce spacing: --space-8 → --space-4 */
  /* Meaningful layout adaptation, not just smaller */
}
```

---

## Validation Before Output

Before writing your final HTML file, verify:

1. **Soul check:**
   - [ ] `border-radius: 0` on every element (search your CSS for any border-radius > 0)
   - [ ] `box-shadow: none` on every element
   - [ ] No `linear-gradient()` or `radial-gradient()`
   - [ ] No `rgba()` with alpha < 1.0
   - [ ] No cool gray hex values
   - [ ] Google Fonts `<link>` tags present in `<head>`

2. **Structure check:**
   - [ ] All content from content.md is present (no dropped sections)
   - [ ] Zone skeleton matches the brief's compositional arc
   - [ ] Transition table is present as HTML comment
   - [ ] Container max-width is 940-960px

3. **Mechanism check:**
   - [ ] Every mechanism from Package Section 2 is deployed
   - [ ] Each mechanism deployment has a PACKAGE citation comment

4. **Responsive check:**
   - [ ] At least two @media breakpoints (1024px, 768px)
   - [ ] No horizontal overflow at 768px
   - [ ] Text remains readable at all breakpoints

---

## Outputs

You produce TWO files:

### File 1: `_build-pass-1.html`
The complete self-contained HTML page with all CSS inline. This is the structural foundation.

### File 2: `_pass-1-decisions.md`
A 20-30 line summary of what you built and why. This file is the CONTINUITY BRIDGE — the Pass 2 builder reads it to understand your decisions. Structure:

```markdown
# Pass 1 Decisions

## Metaphor Applied
[1-2 sentences: which metaphor, how it shaped the structure]

## Zone Architecture
[List each zone with: name, purpose, key CSS properties]

## Mechanisms Deployed
[List each mechanism from Section 2 with: how you deployed it, which zone(s)]

## CSS Naming Vocabulary
[List your concept-based custom property names and what they map to]

## Responsive Strategy
[How you structured the responsive breakpoints]

## Open Questions for Pass 2
[Anything the enrichment pass should pay attention to]
```

**CRITICAL:** The decisions file is not optional. Pass 2 depends on it for continuity. Write it with care — it is the only way the next builder knows what you intended.

---

## Edge Case: What If the Package Is Thin?

If the research package Section 2 contains fewer than 3 mechanism selections, deploy the mechanisms it DOES specify with extra care and depth. Do NOT invent mechanisms that aren't in the package — the package was curated by specialists who read the full knowledge base. Trust its selections.

If Section 0 (soul checklist) is missing or incomplete, apply the soul constraints listed in this prompt (they are immutable and apply regardless of package content).

## Edge Case: What If the Brief Conflicts with the Package?

The conviction brief is CREATIVE DIRECTION. The research package is TECHNICAL IMPLEMENTATION. If they conflict:
- For VISUAL decisions (which metaphor, which emotional arc): brief wins
- For CSS decisions (which mechanisms, which token values): package wins
- If genuinely irreconcilable: document the conflict in _pass-1-decisions.md and let Pass 2 resolve it

---

## Richness Standard

**Richness = semantic density x restraint x spatial confidence.**

- Every CSS rule must produce a VISIBLE change at 100% zoom
- If commenting out a CSS rule causes no visible change, delete it
- No sub-perceptual values: letter-spacing must be >= 0.025em, background deltas must be >= 15 RGB points
- Zone boundaries must shift 3+ of 6 channels (background, font-family, font-size, spacing, border, color)

**You have creative authority on HOW, not WHETHER.** The research package's mechanism selections, zone architecture, and findings represent curated intelligence from 26,528 lines of accumulated knowledge. Your authority is in HOW you deploy them — what CSS values, what visual weight, what rhythm. You choose the creative interpretation. You do NOT selectively omit package instructions. If the package says "deploy Typography Compression," you deploy it — but YOU decide the specific letter-spacing values, the zones where it appears, and the visual weight it carries. Soul principles and token values are non-negotiable. Make the package's vision YOUR vision.
