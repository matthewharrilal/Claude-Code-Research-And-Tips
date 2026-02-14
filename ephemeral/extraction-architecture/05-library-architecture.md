# Library System Architecture — Engineering Blueprint
## From Research to Implementation

**Agent:** library-architect
**Team:** extraction-architecture
**Task:** #5 (Design concrete library system architecture)
**Date:** 2026-02-13

---

## EXECUTIVE SUMMARY

This document specifies the CONCRETE system architecture for the extraction/library system — the engineering blueprint that someone can read and build directly.

**Core Principle from Research #3:**
> "Between guided creativity and free creativity. Agents have a starting point, known patterns, proven mechanisms. But explicitly encouraged to deviate. Like jazz — you know the chord changes but you improvise. Never under the guise of restraint."

**System Design:**
- **3-tier LOADING architecture** (Tier 1: always, Tier 2: on-request, Tier 3: post-selection)
- **Mechanism/metaphor SEPARATION** (tools are extractable, examples are narrative)
- **Explicit anti-prescription framing** (warnings at every entry point)
- **Guardrail integration** (token-level floors, skill-level audits, doc-level guidance)

**Key Metrics:**
- Total extractable: ~805-835 lines CSS
- Total documentation: ~1,530-2,350 lines (with anti-prescription framing)
- Component count: 24 Tier 2, 8 Tier 2.5, 6 Tier 3 (prose)
- Load architecture: Gradient proximity (always → request → post-selection)

---

## 1. FILE/FOLDER STRUCTURE

### 1.1 Directory Layout

```
design-system/extraction-library/

  # TIER 1: Always-Loaded Foundation
  tier-1/
    tokens.css                    (~80 lines — locked alphabet)
    guardrails.css                (~40 lines — perceptual floors NEW from Research #2)

  # TIER 2: On-Request Components
  tier-2/
    callouts.css                  (~60 lines — up from 50, Research #4 found variants)
    code-block.css                (~45 lines)
    header.css                    (~35 lines)
    footer.css                    (~25 lines)
    table.css                     (~25 lines)
    container.css                 (~15 lines)
    skip-link.css                 (~15 lines — Research #4 found this missing)
    focus-visible.css             (~5 lines)
    selection.css                 (~5 lines)
    # ... additional components from Research #4 inventory (~295 lines undocumented)

  # TIER 2.5: Mechanisms Catalog (CSS) + Usage Guidance (Markdown)
  tier-2.5/
    mechanisms/
      bento-grid.css              (~25 lines)
      solid-offset.css            (~15 lines)
      scroll-witness.css          (~35 lines)
      drop-cap.css                (~10 lines)
      confidence-encoding.css     (~20 lines — border-weight gradient)
      scroll-reveal.css           (~25 lines — Research #4 found this NEW)
      semantic-spacing.css        (~10 lines — Research #4 found this NEW)
      fractal-annotations.css     (~20 lines — Research #4 found this NEW)

    guidance/
      bento-grid.md               (~110 lines — when/how/anti-patterns)
      solid-offset.md             (~80 lines)
      scroll-witness.md           (~70 lines)
      drop-cap.md                 (~60 lines)
      confidence-encoding.md      (~120 lines — CRITICAL WARNING)
      scroll-reveal.md            (~60 lines — Research #4)
      semantic-spacing.md         (~80 lines — Research #4)
      fractal-annotations.md      (~50 lines — Research #4)

  # TIER 3: Case Studies (Narrative Format) + Quick Reference
  tier-3/
    case-studies/
      geological-strata.md        (~250 lines — Research #3 narrative format)
      narrative-crescendo.md      (~250 lines)
      hub-spoke-spatial.md        (~250 lines)
      bento-task-islands.md       (~250 lines)
      editorial-synthesis.md      (~250 lines)
      compound-sequential.md      (~250 lines)

    quick-reference/
      geological-strata.md        (~20 lines — fast lookup AFTER derivation)
      narrative-crescendo.md      (~20 lines)
      hub-spoke-spatial.md        (~20 lines)
      bento-task-islands.md       (~20 lines)
      editorial-synthesis.md      (~20 lines)
      compound-sequential.md      (~20 lines)

  # METADATA
  README.md                       (~200 lines — overview + usage instructions)
  ANTI-PRESCRIPTION-WARNING.md    (~100 lines — READ THIS FIRST)
```

**Total Structure:**
- **4 top-level directories** (tier-1, tier-2, tier-2.5, tier-3)
- **~40 files** (10 Tier 1/2, 16 Tier 2.5, 12 Tier 3, 2 metadata)
- **~2,335-2,365 lines total** (Research #4's actual inventory)

---

## 2. FILE FORMATS

### 2.1 Tier 1: Tokens (CSS)

**File:** `tier-1/tokens.css`

**Content:** Locked design tokens (colors, fonts, spacing, geometry, soul)

**Format:** CSS custom properties in `:root` block

**Line Limit:** 80 lines (current actual)

**Header Template:**
```css
/* ═══════════════════════════════════════════════════════════════
   TIER 1: Design Tokens — The Locked Alphabet

   WHAT: Foundational values (colors, spacing, typography, soul)
   WHEN LOADED: Always (referenced by all tiers)
   MODIFIABLE: Never (frozen after Phase G)

   These are the atomic building blocks. Tier 2+3 reference these.
   Agents cannot create new tokens. The alphabet is locked.
   ═══════════════════════════════════════════════════════════════ */
```

**Example:**
```css
:root {
  /* Colors (locked) */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  /* ... */

  /* Soul Pieces (NEVER modify) */
  --border-radius: 0;      /* Sharp edges */
  --box-shadow: none;      /* No shadows */
}
```

---

### 2.2 Tier 1: Guardrails (CSS)

**File:** `tier-1/guardrails.css` — **NEW from Research #2**

**Content:** Perceptual floor values (min widths, min gaps, compression ratios)

**Format:** CSS custom properties with usage notes

**Line Limit:** 40 lines

**Header Template:**
```css
/* ═══════════════════════════════════════════════════════════════
   TIER 1: Perceptual Guardrails — Floors Not Ceilings

   WHAT: Minimum values that prevent visual compromise
   WHEN LOADED: Always (Tier 3 builders reference these)
   MODIFIABLE: Never (research-validated thresholds)

   These are FLOORS not CEILINGS. You can go ABOVE them with intent.
   You can go BELOW them ONLY with explicit override + documentation.

   Research Source: R1 (Perceptual Risk), R6 (Builder Warnings)
   ═══════════════════════════════════════════════════════════════ */
```

**Example:**
```css
:root {
  /* Content Width Guardrails (at 1440px viewport) */
  --content-width-min: 640px;       /* 44% of 1440px — absolute floor */
  --content-width-optimal: 940px;   /* 65% of 1440px — sweet spot */

  /* Spacing Guardrails */
  --padding-horizontal-desktop: 32px; /* Edge collision floor */
  --section-spacing-min: 48px;        /* Sections must breathe */

  /* Compression Safety */
  --padding-compression-ratio-min: 0.40; /* Deepest ≥ 40% of shallowest */
}
```

---

### 2.3 Tier 2: Components (CSS)

**Files:** `tier-2/*.css` (9-24 components from Research #4)

**Content:** Reusable styled elements (callouts, code blocks, headers)

**Format:** CSS classes with CSS custom property hooks

**Line Limit:** Variable (10-60 lines per component)

**Header Template:**
```css
/* ═══════════════════════════════════════════════════════════════
   TIER 2: [Component Name] — Stable Vocabulary

   WHAT: [One-line description]
   STABILITY: [%] CSS overlap across metaphors
   CONTEXT ADAPTABLE: Via CSS custom properties

   This component maintains identity regardless of context.
   Tier 3 layouts can override via CSS custom properties.
   ═══════════════════════════════════════════════════════════════ */
```

**Example:**
```css
/* tier-2/callouts.css */

.callout {
  border-left: var(--callout-border-width, 4px) solid;
  padding: var(--callout-padding, 20px 24px);
  margin: var(--callout-margin, 24px 0);
  background: var(--callout-bg, var(--color-zone-sparse));
}

.callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}

/* Accent variants */
.callout--note { border-left-color: var(--accent-blue); }
.callout--essence {
  border-left-color: var(--accent-purple);
  font-family: var(--font-display); /* Archivist speaks in serif */
  font-style: italic;
}
```

---

### 2.4 Tier 2.5: Mechanisms (CSS) + Guidance (Markdown)

**Files:** `tier-2.5/mechanisms/*.css` + `tier-2.5/guidance/*.md`

**CSS Content:** Extractable layout patterns (bento grid, solid offset, etc.)

**CSS Format:** Mechanism classes with usage hooks

**CSS Line Limit:** 10-35 lines per mechanism

**Markdown Content:** When/how/anti-patterns (Research #2 guardrail integration)

**Markdown Format:** Structured guidance with warnings

**Markdown Line Limit:** 50-120 lines per pattern

**CSS Header Template:**
```css
/* ═══════════════════════════════════════════════════════════════
   TIER 2.5: [Mechanism Name] — Reusable Pattern

   WHAT: [One-line description of CSS mechanism]
   WHEN TO USE: Documented in tier-2.5/guidance/[name].md
   JUDGMENT REQUIRED: Read guidance before applying

   This CSS is extractable. The DECISION to use it is compositional.
   See guidance file for when/how/anti-patterns.
   ═══════════════════════════════════════════════════════════════ */
```

**Markdown Header Template (Research #3 anti-prescription framing):**
```markdown
# [Mechanism Name] — Usage Guidance

⚠️ **ANTI-PRESCRIPTION WARNING**

This pattern is a TOOL, not a TEMPLATE. Read this to understand:
- When this mechanism is appropriate
- How to apply it correctly
- What to avoid (anti-patterns)

DO NOT use this as a recipe. Use it as a springboard.

---

## What This Mechanism Does

[Clear description of the CSS pattern]

## When To Use

[Content conditions where this mechanism applies]

## How To Apply

[Step-by-step application instructions with guardrail checks]

## Anti-Patterns (DO NOT)

- [Specific anti-pattern 1]
- [Specific anti-pattern 2]

## Guardrail Verification

After applying, verify:
- [ ] [Guardrail 1 from Research #2]
- [ ] [Guardrail 2 from Research #2]

## Metaphor Contexts

This mechanism has been used in:
- [Metaphor 1]: [How it was applied]
- [Metaphor 2]: [How it was applied]

Your metaphor will use it differently. That's the point.
```

**Example:**

**File:** `tier-2.5/mechanisms/bento-grid.css`
```css
/* TIER 2.5: Bento Grid — Varied-Importance Grid System */

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: max(var(--bento-gap, 24px), var(--grid-gap-min)); /* Guardrail floor */
}

.bento-cell {
  border: 3px solid var(--color-border);
  padding: var(--space-6);
  background: var(--color-zone-dense);
}

.bento-cell--large { grid-column: span 2; grid-row: span 2; }
.bento-cell--wide { grid-column: span 2; }
.bento-cell--tall { grid-row: span 2; }
```

**File:** `tier-2.5/guidance/bento-grid.md`
```markdown
# Bento Grid — Usage Guidance

⚠️ **ANTI-PRESCRIPTION WARNING**

Bento grid is a TOOL for encoding importance through size variation.
It is NOT a template for every grid layout.

---

## What This Mechanism Does

CSS grid with auto-fit columns + span modifiers that create visual
hierarchy through varied cell sizes (2x2 large, 2x1 wide, 1x1 standard).

## When To Use

- Content with varying importance levels requiring spatial hierarchy
- Task-based documentation where items have different conceptual weight
- Reference indexes where topics have different coverage depth

## Anti-Patterns (DO NOT)

- Use uniform cells only (creates grid monotony — CD-005 critical finding)
- Exceed 12 total cells without grouping/breathing zones
- Apply to narrative/sequential content (use F-pattern instead)
- Use cells smaller than 280px min-width (content gets cramped)

## Guardrail Verification

After applying, verify:
- [ ] Grid gap ≥ var(--grid-gap-min) (16px)
- [ ] At 768px: 1-2 cols max, no overflow
- [ ] Cell count ≤ 12 OR breathing zones between groups

## Responsive Test (CRITICAL)

Test at 768px AND 1440px. CD-005 found bento overflow at 768px was
#1 CRITICAL finding. Add overflow-x: auto OR reduce min-width.

## Metaphor Contexts

- Floor plan: Rooms by size/importance
- Task dashboard: Cards by priority
- Reference index: Topics by coverage depth
```

---

### 2.5 Tier 3: Case Studies (Narrative) + Quick Reference

**Files:** `tier-3/case-studies/*.md` + `tier-3/quick-reference/*.md`

**Case Study Content:** Narrative format from Research #3 (anti-rigidity pattern)

**Case Study Format:** Story of discovery, not recipe

**Case Study Line Limit:** 250 lines (up from 150 — Research #3 complete format)

**Quick Reference Content:** Fast lookup table for AFTER derivation

**Quick Reference Format:** Tabular CSS mechanisms only

**Quick Reference Line Limit:** 20 lines

**Case Study Header Template (Research #3 jazz pedagogy framing):**
```markdown
# Case Study: [Metaphor Name] — [Tension Resolved]

⚠️ **READ THIS FIRST**

This is NOT a template. This is a WORKED EXAMPLE showing how tension
derivation led to ONE metaphor. Your content's tension will lead to a
DIFFERENT metaphor.

**Your assignment:** Read this to learn the PROCESS, not to copy the ANSWER.

---

## The Problem ([Exploration Context])

**Content:** [What the content was]
**Reader Need:** [What readers needed]
**Design Constraint:** [What system constraint existed]

**The Tension:**

> "[Tension in one sentence]"

---

## The Search (Phase 3.4 in Action)

**Search Query Generated:**

> "[Actual search query from exploration]"

**Constraint Scan (Hardest First):**

[Which constraints eliminated which domains]

**Content Resonance:**

[What content vocabulary suggested this domain]

**Domains That Survived:**

1. [Domain 1]
2. [Domain 2]
3. [Domain 3]

**Why [Winning Metaphor] Won (for this page):**

[Specific reasons this metaphor resolved THIS tension]

---

## The Translation (Phase 4 in Action)

**Metaphor Properties Extracted:**

| Metaphor Property | Content Parallel | CSS Mechanism |
|-------------------|------------------|---------------|
| [Property 1] | [Content mapping] | [CSS used] |
| [Property 2] | [Content mapping] | [CSS used] |

**CSS Mechanisms Applied:**

- **[Mechanism 1]** ([Tier reference])
  [What it does, why it's REUSABLE]

- **[Mechanism 2]** ([Tier reference])
  [What it does, why it's REUSABLE]

**Guardrails Met:**

- [Guardrail 1]: [Pass/fail + adjustment]
- [Guardrail 2]: [Pass/fail + adjustment]

---

## The Outcome (Proof This Worked)

**Perceptual Audit:** [Quality verdict]
**Perceptual Risk:** [Risk score + factors]
**Key Success Factor:** [What made this work]

---

## What YOU Extract From This

**REUSABLE (Mechanisms):**

1. **[Mechanism 1]** — [What you can reuse]
2. **[Mechanism 2]** — [What you can reuse]

**INSPIRATIONAL (Process):**

1. [Process step you can apply]
2. [Process step you can apply]

**NOT REUSABLE (Specific Metaphor):**

The [metaphor name] itself. Your content will derive a DIFFERENT metaphor.

---

## Other Metaphors That Could Resolve [Same Tension]

**If your content had:**

- **[Theme 1]:** [Alternative metaphor 1]
- **[Theme 2]:** [Alternative metaphor 2]
- **[Theme 3]:** [Alternative metaphor 3]

**All of these:**
- Are naturally [constraint 1]
- Support [mechanism 1]
- Convey [emotional quality]
- Would use SAME mechanisms with DIFFERENT vocabulary

---

## Your Divergence Assignment

**DO THIS:**
1. Run YOUR tension derivation (Phase 1-2)
2. Generate YOUR search query from YOUR content properties
3. Scan domains using YOUR content vocabulary
4. Discover YOUR metaphor (it will NOT be [this metaphor])
5. Apply mechanisms with YOUR domain's vocabulary

**DO NOT:**
1. Use [this metaphor] because your content has "[surface similarity]"
2. Copy the [specific CSS encoding] without semantic justification
3. Skip tension derivation and jump to "this looks like [metaphor]"

**Success Check:**

If your metaphor is [this metaphor], ask:
- "Did my content use [metaphor] vocabulary naturally?"
- "Did my search query independently suggest [domain] domains?"
- "Or did I pattern-match '[content type]' to 'this library pattern'?"

If pattern-matched → Re-run Phase 3 with explicit constraint: "[This metaphor]
is taken. What ELSE resolves my tension?"

---

## Quick Reference (After You've Derived YOUR Metaphor)

**If you need to reference [metaphor] mechanisms for implementation:**

See `tier-3/quick-reference/[metaphor].md` for fast lookup table.

---

**END CASE STUDY**
```

**Quick Reference Template:**
```markdown
# Quick Reference: [Metaphor Name]

**Use this ONLY after deriving YOUR OWN metaphor.**

This is NOT a starting point. This is a lookup table for builders who
already know what they're building.

| Mechanism | CSS | Guardrail |
|-----------|-----|-----------|
| [Mech 1] | [CSS pattern] | [Min/max value] |
| [Mech 2] | [CSS pattern] | [Min/max value] |

**See Case Study for derivation process and alternative metaphors.**
```

---

## 3. LOADING ARCHITECTURE

### 3.1 Gradient Proximity Model (Research #1 core finding)

**The Problem:** All information loaded simultaneously creates gravitational pull.

**The Solution:** Three proximity tiers with DIFFERENT load triggers.

```
┌─────────────────────────────────────────────────────────────────┐
│ TIER 1 PROXIMITY: Always Loaded                                 │
│                                                                 │
│ WHAT: Mechanisms + guardrails + principles                      │
│ WHEN: Agent invocation (before any work begins)                │
│ WHY: Enables execution, prevents floor violations              │
│                                                                 │
│ FILES LOADED:                                                   │
│   - tier-1/tokens.css                                          │
│   - tier-1/guardrails.css                                      │
│   - tier-2/*.css (all components)                              │
│   - tier-2.5/mechanisms/*.css (all mechanisms)                 │
│                                                                 │
│ TOTAL: ~400 lines CSS                                          │
│ FRAMING: Imperative ("Apply X", "Use Y for Z")                │
│ AGENT RECEIVES: Tools + constraints                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ TIER 2 PROXIMITY: Load on Request                               │
│                                                                 │
│ WHAT: Usage guidance + case studies                            │
│ WHEN: Phase 3.5 (AFTER metaphor candidates generated)         │
│ WHY: Inspiration without bias                                  │
│                                                                 │
│ FILES LOADED:                                                   │
│   - tier-2.5/guidance/[requested-mechanism].md                 │
│   - tier-3/case-studies/[requested-pattern].md                │
│                                                                 │
│ TOTAL: ~250-370 lines per request                             │
│ FRAMING: Proof-of-concept ("This PROVES X is resolvable")     │
│ AGENT RECEIVES: Examples as validation                         │
│                                                                 │
│ TRIGGER: Agent explicitly reads file OR Weaver suggests        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ TIER 3 PROXIMITY: Load After Selection                          │
│                                                                 │
│ WHAT: Quick reference for selected metaphor                    │
│ WHEN: Phase 4 (compositional layout generation)               │
│ WHY: Fast lookup AFTER committing to direction                │
│                                                                 │
│ FILES LOADED:                                                   │
│   - tier-3/quick-reference/[selected-metaphor].md             │
│                                                                 │
│ TOTAL: ~20 lines                                               │
│ FRAMING: Tabular ("Here's the CSS you need")                  │
│ AGENT RECEIVES: Implementation shortcut                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**The Mechanism:** Load triggers are PHASE-GATED in the skill protocol.

---

### 3.2 Skill Protocol Updates (Exact Instructions)

**File to Update:** `~/.claude/skills/tension-composition/SKILL.md`

**Section to Add/Modify:** Phase 0 (Setup)

**New Text:**
```markdown
## Phase 0: Context Loading

**TIER 1 (Always Load):**

READ the following CSS files:
- design-system/extraction-library/tier-1/tokens.css
- design-system/extraction-library/tier-1/guardrails.css
- design-system/extraction-library/tier-2/*.css (all components)
- design-system/extraction-library/tier-2.5/mechanisms/*.css (all mechanisms)

You now have:
- The locked alphabet (tokens)
- The safety floors (guardrails)
- All reusable components
- All extractable mechanisms

**TIER 2 (Do NOT Load Yet):**

DO NOT read tier-2.5/guidance/*.md or tier-3/case-studies/*.md
until Phase 3.5 (after metaphor candidates generated).

Examples bias derivation. Keep them out of context during Phase 1-3.

---

[Continue with existing Phase 1-3 content]

---
```

**Section to Add:** Between Phase 3 and Phase 4

**New Text:**
```markdown
## Phase 3.5: Prior Work Check (OPTIONAL)

**When to do this:** After generating 3-5 metaphor candidates, before selecting winner.

**Purpose:** See if similar tensions have been resolved before. Reuse mechanisms (not metaphors).

**Instructions:**

IF you want to see examples of prior work:
  READ: design-system/extraction-library/tier-3/case-studies/[relevant-pattern].md

  Look for:
  - Similar tensions resolved
  - Mechanisms used (extractable)
  - Alternative metaphors suggested
  - Perceptual risk patterns

  EXTRACT:
  - Mechanisms you can reuse (border-weight gradient, bento grid, etc.)
  - Proof that your tension IS resolvable
  - Alternative domains to consider

  DO NOT EXTRACT:
  - The specific metaphor itself (unless content independently suggests it)
  - The assumption that documented patterns are THE answers

  DECISION:
  - If prior metaphor fits YOUR tension: Consider reuse WITH FRESH COMPOSITION
  - If no prior match: Proceed with YOUR novel metaphor (expected outcome)

---
```

**Section to Add:** In Phase 4

**New Text:**
```markdown
## Phase 4.0: Guardrail Compliance Gates (MANDATORY)

Before generating CSS, verify ALL metaphor properties pass perceptual guardrails:

**Read:** design-system/extraction-library/tier-1/guardrails.css

**Verify:**

| Guardrail | Threshold | Your Value | Pass? |
|-----------|-----------|------------|-------|
| Content width | ≥ var(--content-width-min) (640px) | ? | ☐ |
| Desktop padding | ≥ var(--padding-horizontal-desktop) (32px) | ? | ☐ |
| Mobile padding | ≥ var(--padding-horizontal-mobile) (16px) | ? | ☐ |
| Section spacing | ≥ var(--section-spacing-min) (48px) | ? | ☐ |
| Compression ratio | Deepest ≥ 40% of shallowest | ? | ☐ |

**If ANY guardrail fails:**
- Adjust metaphor property to meet threshold
- OR document explicit override with justification
- DO NOT proceed without passing all guardrails

---
```

**Section to Add:** In Phase 5 (Output)

**New Text:**
```markdown
## Phase 5: Output + Quick Reference

**TIER 3 (Load Now):**

IF reusing a documented metaphor:
  READ: design-system/extraction-library/tier-3/quick-reference/[metaphor].md

  Use this for fast CSS lookup.

IF novel metaphor:
  Skip quick reference. Generate CSS fresh from Tier 1 mechanisms.

---
```

---

## 4. GUARDRAIL INTEGRATION (Research #2)

### 4.1 Three-Layer Enforcement

**From Research #2:** Guardrails split into token-level, skill-level, doc-level.

| Layer | What Lives Here | Enforcement Mechanism |
|-------|-----------------|----------------------|
| **Token-Level** | Numeric floors (940px, 32px, 40%) | CSS custom properties as defaults |
| **Skill-Level** | Contextual thresholds (CPL 45-80, compression ratio) | Perceptual audit questions |
| **Doc-Level** | Compositional guidance (verify compression ratio, test 768px) | Tier 2.5 guidance + Tier 3 case studies |

---

### 4.2 Token-Level Integration

**File:** `tier-1/guardrails.css` (created from Research #2 spec)

**Content:** See Section 2.2 above for exact CSS.

**Integration:** Loaded in Phase 0, referenced in Phase 4.0 gates.

---

### 4.3 Skill-Level Integration

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md` (existing, updated)

**Update:** Add explicit guardrail token references to PA questions.

**Example Update:**

**OLD (PA-01):**
```markdown
## PA-01: Is any element too wide or too narrow for its content?

Check for:
- Containers that feel cramped or wasteful
```

**NEW:**
```markdown
## PA-01: Is any element too wide or too narrow for its content?

Check for:
- Containers that feel cramped or wasteful

**Guardrail Reference:**
- Min container width: var(--content-width-min) (640px / 44% of 1440px)
- Optimal: var(--content-width-optimal) (940px / 65% of 1440px)

If below 640px: FAIL unless metaphor documents intentional narrowing.
```

---

### 4.4 Doc-Level Integration

**Files:** All `tier-2.5/guidance/*.md` and `tier-3/case-studies/*.md`

**Pattern:** Every guidance file includes "Guardrail Verification" section.

**Example:**
```markdown
## Guardrail Verification

After applying [mechanism], verify:

- [ ] Grid gap ≥ var(--grid-gap-min) (16px)
- [ ] At 768px: test overflow, max 2 columns
- [ ] Cell count ≤ 12 OR breathing zones added
- [ ] No cell below 280px min-width at 768px

**Critical Test (from CD-005 audit):**

Bento overflow at 768px was #1 CRITICAL finding. Always test responsive.
```

---

## 5. EXTRACTION INVENTORY MAPPING (Research #4)

### 5.1 Actual Component Counts

**Research #4 found:** 24 Tier 2 components, 8 Tier 2.5 patterns (not 9 + 5).

**Confirmed Universal (9):**
1. Callout family (~60 lines, up from 50)
2. Code block (~45 lines, up from 40)
3. Page header (~35 lines, up from 30)
4. Data table (~25 lines)
5. Page footer (~25 lines)
6. Container (~15 lines)
7. Inline code (~10 lines)
8. Focus-visible (~5 lines)
9. Selection (~5 lines)

**Undocumented But Found (15):**
10. Skip link (~15 lines) — accessibility
11. Q&A pairs (~20 lines) — conversational
12. File tree (~25 lines) — needs verification
13. Decision matrix (~30 lines) — needs verification
14. Confidence badge (~10 lines)
15. Dense grid (~20 lines)
16. Central role component (~35 lines) — Gas Town high-value
17. Numbered principle list (~15 lines)
18. Vertical workflow chain (~25 lines)
19. Generic grid container (~15 lines)
20. Generic border box (~10 lines)
21. Stratum boundary marker (~20 lines) — geological
22. Depth/dating marker (~25 lines) — geological
23. Breathing zone divider (~15 lines)
24. Progress indicators (~15 lines) — needs verification

**Tier 2.5 Patterns (8):**
1. Bento grid (25 CSS + 110 guidance)
2. Solid offset (15 CSS + 80 guidance)
3. Scroll witness (35 CSS + 70 guidance)
4. Drop cap (10 CSS + 60 guidance)
5. Confidence encoding (20 CSS + 120 guidance)
6. Scroll-driven reveal (25 CSS + 60 guidance) — NEW
7. Semantic spacing aliases (10 CSS + 80 guidance) — NEW
8. Fractal annotations (20 CSS + 50 guidance) — NEW

**Extraction Priority:**

**Phase C Session 1 (Universal):** Components 1-9 (confirmed, stable)
**Phase C Session 2 (High-Value Undocumented):** Components 10, 13, 16, 21, 22
**Phase C Session 3 (Tier 2.5 Expansion):** Patterns 6, 7, 8 (Research #4 new)
**Phase C Session 4 (Verification Candidates):** Components 12, 14, 24 (needs file check)

---

### 5.2 Metaphor Vocabulary Normalization (Research #4 Recommendation #3)

**Problem:** Tension-test layouts use different names for SAME components.

**Solution:** Extract ONE canonical component, document metaphor mappings in Tier 3.

**Example:**

**Canonical (Tier 2):** `callouts.css`
```css
.callout { /* base styles */ }
.callout--essence { /* purple border, italic serif */ }
```

**Metaphor Mapping (Tier 3 Case Study):**
```markdown
## Metaphor Vocabulary Mapping

In geological contexts, these components have metaphor-specific names:
- `.callout--essence` → `.fossil` (geological context)
- `.callout--tip` → `.mineral-vein` (geological context)

In manuscript contexts:
- `.callout--essence` → `.marginalia` (manuscript context)

CSS is identical. Only semantic vocabulary changes.
```

**Implication:** Extract ~600 lines not ~800 lines (25% savings per Research #4).

---

## 6. CREATIVE FREEDOM MECHANISMS (Research #3)

### 6.1 Six Concrete Mechanisms Baked Into Architecture

**From Research #3:** Jazz pedagogy, anti-prescription, divergence encouragement.

**Mechanism 1: Anti-Prescription Warnings** — Explicit rejection at EVERY entry point

**Implementation:**

**File:** `design-system/extraction-library/ANTI-PRESCRIPTION-WARNING.md` (NEW)
```markdown
# ⚠️ ANTI-PRESCRIPTION WARNING

**READ THIS BEFORE USING THE LIBRARY**

This library is NOT a template catalog. It is NOT a recipe book.
It is an ALPHABET + VOCABULARY for compositional creativity.

## What This Library Provides

**Tier 1:** The locked alphabet (tokens, guardrails) — REUSE these
**Tier 2:** Reusable components (callouts, headers) — REUSE these
**Tier 2.5:** Mechanisms (bento grid, solid offset) — REUSE these
**Tier 3:** Case studies (geological, narrative) — DO NOT COPY

## Your Assignment

1. Load Tier 1+2 (always)
2. Derive YOUR tension (Phase 1-2)
3. Generate YOUR metaphor (Phase 3)
4. Check case studies for proof/mechanisms (Phase 3.5 — OPTIONAL)
5. Compose using Tier 1+2 vocabulary + YOUR metaphor (Phase 4)

## Expected Outcome

You will NOT produce geological strata, hub-spoke, or narrative crescendo
layouts. You will produce a layout that is STRUCTURALLY SIMILAR but
SEMANTICALLY UNIQUE to your content.

**Success = novel metaphor derived from YOUR tension.**

**Failure = pattern-matching to documented examples.**

## Permission

You are EXPECTED to deviate. Using a documented metaphor verbatim means
you skipped the creative step.

The library documents PROOF that tensions are resolvable. It does NOT
prescribe which metaphors to use.

If your metaphor matches the library, ask: "Did I derive this or pattern-match?"
```

**Also:** Add "⚠️ READ ANTI-PRESCRIPTION-WARNING.md FIRST" to:
- `README.md` (top of file)
- Every Tier 2.5 guidance file (header)
- Every Tier 3 case study (header)

---

**Mechanism 2: Mechanism/Metaphor Separation** — Already baked into 3-tier structure

**Tier 1+2+2.5 = MECHANISMS** (always accessible, reusable)
**Tier 3 = METAPHORS** (inspirational, not prescriptive)

---

**Mechanism 3: Mandatory Tension Derivation** — Enforced via skill protocol

**Added to skill in Section 3.2:**
- Phase 0: Load Tier 1 only
- Phase 1-3: Derive tension BEFORE seeing examples
- Phase 3.5: Examples load AFTER metaphor candidates generated

---

**Mechanism 4: Explicit Divergence Encouragement** — Language patterns from Research #3

**Added to skill (Phase 3 intro):**
```markdown
### The Irreducible Creative Expectation

You are EXPECTED to discover a metaphor NOT in the historical library.

**Success Criteria:**
- ✓ Metaphor emerged from YOUR tension derivation
- ✓ Search query was constructed from YOUR content properties
- ✗ Metaphor matches existing library pattern (signals pattern-matching)

The library documents PROOF that tensions are resolvable. It does NOT
prescribe which metaphors to use. If your metaphor is geological/hub-spoke,
ask: "Did I derive this or pattern-match to it?"
```

---

**Mechanism 5: Jazz Pedagogy Analogies** — Throughout Tier 3 case studies

**Example from case study template (Section 2.5):**
```markdown
## Other Metaphors That Could Resolve [Same Tension]

**If your content had:**
- **[Theme 1]:** [Alternative metaphor 1]
- **[Theme 2]:** [Alternative metaphor 2]

**All of these:**
- Would use SAME mechanisms with DIFFERENT vocabulary

Yours will be a FOURTH answer. That's the point.
```

---

**Mechanism 6: Narrative Format Over Recipe** — Case study template is narrative

**See Section 2.5** for complete narrative template (250 lines vs 150 recipe lines).

**Key shift:**
- FROM: "When to use" → "Composition recipe"
- TO: "The tension existed" → "The search happened" → "Why this worked" → "What YOU extract"

---

## 7. SPECIFIC CHANGES TO SKILL PROTOCOL

### 7.1 Complete Diff

**File:** `~/.claude/skills/tension-composition/SKILL.md`

**Lines to Add/Change:**

**Phase 0 (NEW):**
```markdown
## Phase 0: Context Loading

**TIER 1 (Always Load):**

READ the following CSS files:
- design-system/extraction-library/tier-1/tokens.css
- design-system/extraction-library/tier-1/guardrails.css
- design-system/extraction-library/tier-2/*.css (all components)
- design-system/extraction-library/tier-2.5/mechanisms/*.css (all mechanisms)

**TIER 2 (Do NOT Load Yet):**

DO NOT read tier-2.5/guidance/*.md or tier-3/case-studies/*.md until Phase 3.5.
```

**Phase 3 Introduction (ADD):**
```markdown
### The Irreducible Creative Expectation

You are EXPECTED to discover a metaphor NOT in the historical library.
Success = novel metaphor derived from YOUR tension.
```

**Phase 3.5 (NEW — insert between Phase 3 and Phase 4):**
```markdown
## Phase 3.5: Prior Work Check (OPTIONAL)

IF you want to see examples: READ tier-3/case-studies/[relevant].md

EXTRACT: Mechanisms (reusable), proof (validation), alternatives (divergence)
DO NOT EXTRACT: The metaphor itself (unless content independently suggests it)
```

**Phase 4.0 (NEW — insert before Phase 4.1):**
```markdown
## Phase 4.0: Guardrail Compliance Gates (MANDATORY)

Before generating CSS, verify all guardrails from tier-1/guardrails.css:

| Guardrail | Threshold | Your Value | Pass? |
|-----------|-----------|------------|-------|
| Content width | ≥ 640px | ? | ☐ |
| Desktop padding | ≥ 32px | ? | ☐ |
| Compression ratio | ≥ 40% | ? | ☐ |

If ANY fails: adjust OR document override.
```

**Phase 5 Output (ADD):**
```markdown
IF reusing documented metaphor:
  READ: tier-3/quick-reference/[metaphor].md for fast CSS lookup

IF novel metaphor:
  Generate CSS fresh from Tier 1 mechanisms
```

---

### 7.2 Net Impact

**Current skill:** 839 lines
**Added:** ~100 lines (Phase 0, 3.5, 4.0 guardrails, Phase 5 references)
**New total:** ~940 lines

**Character:** More explicit, more guardrails, more divergence encouragement.

---

## 8. IMPLEMENTATION CHECKLIST

### 8.1 Phase C Component Extraction (Revised Scope)

**Session 1: Universal Components**
- [ ] Create directory structure (Section 1.1)
- [ ] Extract Tier 1 tokens.css (~80 lines)
- [ ] Create Tier 1 guardrails.css from Research #2 (~40 lines)
- [ ] Extract Tier 2 components 1-9 (~270 lines)

**Session 2: High-Value Undocumented**
- [ ] Extract components 10, 13, 16, 21, 22 from Research #4 (~115 lines)
- [ ] Verify with source files (DD-001, DD-003, OD-004, Gas Town layouts)

**Session 3: Tier 2.5 Expansion**
- [ ] Extract mechanisms 1-5 CSS (~105 lines)
- [ ] Extract mechanisms 6-8 CSS from Research #4 (~55 lines)
- [ ] Write guidance files 1-8 (~630 lines markdown)

**Session 4: Tier 3 Case Studies**
- [ ] Rewrite 6 case studies with narrative format (~1,500 lines)
- [ ] Create 6 quick reference files (~120 lines)
- [ ] Write ANTI-PRESCRIPTION-WARNING.md (~100 lines)
- [ ] Write README.md (~200 lines)

**Total Output:** ~3,215 lines (vs library's ~1,740 estimate)

---

### 8.2 Skill Protocol Updates

- [ ] Update Phase 0 (context loading)
- [ ] Update Phase 3 intro (divergence expectation)
- [ ] Add Phase 3.5 (prior work check)
- [ ] Add Phase 4.0 (guardrail gates)
- [ ] Update Phase 5 (quick reference)

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Lines added:** ~100

---

### 8.3 Perceptual Audit Updates

- [ ] Add guardrail token references to PA-01 through PA-28
- [ ] Add PA-42, PA-43, PA-44 (metaphor-awareness questions)

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Lines added:** ~50

---

## 9. OPEN QUESTIONS & ANSWERS

**Q1 (from Research #1):** Is component count 9 or 12-18+?

**A1:** Research #4 confirmed 24 component types. Phase C comprehensive inventory required.

---

**Q2 (from Research #1):** Which boundary cases belong in Tier 2.5 vs Tier 3?

**A2 (from Research #4):**

**Tier 2.5 (CSS extractable, judgment required):**
- Confidence encoding (border-weight gradient)
- Scroll-driven reveal
- Semantic spacing aliases

**Tier 3 (metaphor-specific, composition only):**
- Zone wrappers (`.stratum`, `.room`, `.island`)
- Metaphor indicators (`.depth-marker`, `.progress-square`)

**Boundary:** Q&A pairs (width mechanism = Tier 2.5, flow = Tier 3)

---

**Q3 (from Research #1):** Does richer Tier 2.5 reduce Track 2 %?

**A3:** Potentially 5-10% reduction (Research #4 hypothesis). Test in Phase B Content Analysis.

---

**Q4 (from Research #2):** Should compression ratio be CSS-enforced via calc()?

**A4:** No. Keep at documentation-level (manual verification in Tier 3 recipes). Requires knowing "shallowest padding" value at CSS-time, not possible without JavaScript.

---

**Q5 (from Research #2):** Should perceptual audit auto-check guardrail token usage?

**A5:** YES. Add "Token Compliance Check" to perceptual-auditing skill (programmatic, not perceptual).

---

**Q6 (from Research #3):** How to handle metaphor-specific vocabulary?

**A6 (from Research #4 Recommendation #3):** Extract canonical component, document metaphor mappings in Tier 3 case studies. Don't extract 4 versions of same component.

---

## 10. SUCCESS METRICS

**Extraction Sufficiency:**
- [ ] Track 1 test page builds with Tier 1+2 only (no new CSS needed)
- [ ] Track 2 test page builds with Tier 1+2 + skill-generated Tier 3
- [ ] All 24 components extracted and cataloged
- [ ] All 8 Tier 2.5 patterns extracted with guidance
- [ ] All 6 Tier 3 case studies written in narrative format

**Creative Freedom Preservation:**
- [ ] Pilot Track 2 agents produce novel metaphors (not documented ones)
- [ ] Pilot perceptual audits score ≥ YES (not degraded from explorations)
- [ ] Anti-prescription warnings present at all entry points
- [ ] Phase-gated loading prevents early bias

**Guardrail Enforcement:**
- [ ] All Tier 3 pilot pages meet 940px, 32px, 40% thresholds
- [ ] Perceptual audit questions reference guardrail tokens
- [ ] All Tier 2.5 guidance includes verification checklists

---

## CONCLUSION

This architecture implements the gradient proximity model (Research #1), integrates perceptual guardrails at three layers (Research #2), preserves creative freedom through six mechanisms (Research #3), and accounts for the actual component inventory (Research #4).

**Total Output:**
- ~805-835 lines CSS (Tier 1+2+2.5)
- ~1,530-2,350 lines documentation (guidance + case studies + warnings)
- ~40 files across 4 directories
- 3-tier loading (always → request → post-selection)

**Key Innovations:**
- Anti-prescription warnings at every entry point
- Narrative case study format (250 lines, not 150-line recipes)
- Phase-gated loading (examples invisible until Phase 3.5)
- Explicit divergence encouragement in skill protocol
- Guardrail integration at token/skill/doc levels

**Next Actions:**
- Phase C extraction executes this blueprint
- Phase D validation tests sufficiency
- Pilot migration validates creative freedom preservation

**The library becomes what it was designed to be: an alphabet + vocabulary for compositional creativity, not a template catalog.**

---

**END ARCHITECTURE BLUEPRINT**
