# Grammar Layer — Compositional Mechanisms & Rules

**What this directory contains:** The reusable techniques and rules for combining design vocabulary into layouts.

**Layer:** 3 (techniques — sits between tokens and components)

---

## Contents

**1. `mechanism-catalog.md` (18 mechanisms)**
- Reusable techniques that work across metaphors
- Border-weight gradient, 2-zone DNA, spacing compression, etc.
- Extracted from 27 source files using source-first reading order

**2. `compositional-rules.md` (41 rules)**
- How to combine mechanisms and tokens
- Callout structure, dense/sparse alternation, responsive collapse
- Binary rules: "ALWAYS" / "NEVER" (not judgment)

**3. `border-system.md` (3-category system)**
- 4px (structural / high confidence)
- 3px (accent / moderate confidence)
- 1px (micro / low confidence)
- Full documentation of border-weight encoding

---

## What This Layer Provides

**Mechanisms = TECHNIQUES (not templates)**

**Example: Border-Weight Gradient**
```css
/* TECHNIQUE (reusable) */
.container {
  border-left: 4px solid var(--accent-color);  /* Primary hierarchy */
}
.container__section {
  border-left: 3px solid var(--accent-color);  /* Secondary hierarchy */
}
.container__detail {
  border-left: 1px solid var(--accent-color);  /* Tertiary detail */
}
```

**NOT a template:**
- Works for geological (certainty encoding)
- Works for structural (containment hierarchy)
- Works for confidence (epistemic status)
- Reusable TECHNIQUE, not metaphor-specific pattern

**Rules = HOW TO COMBINE (not recipes)**

**Example: Callout Structure Rule**
```markdown
Rule DNA1: Callout structure is ALWAYS 2-zone

Zone 1 (Label):
- Sparse background OR no background
- Body font, uppercase, 600 weight, letter-spacing 0.1em
- Margin-bottom creates separation

Zone 2 (Body):
- Dense background OR inherit
- Body font, normal weight, line-height 1.7
- Content flows naturally
```

**NOT a recipe:**
- Doesn't specify exact colors (use tokens)
- Doesn't specify exact spacing (use spacing scale)
- Defines STRUCTURE (2-zone), not VALUES (amber callout with 24px padding)

---

## The 18 Mechanisms

**Single-Property Mechanisms (5):**
1. Border-Weight Gradient (4px/3px/1px hierarchy)
2. Uppercase Meta Labels (tracking + weight)
3. Serif Italic Editorial Voice (authority signal)
4. Max-Width Containment (1100px centering)
5. Dark Background Authority (code blocks, stats)

**Multi-Property Mechanisms (8):**
6. 2-Zone Component DNA (sparse label + dense body)
7. Spacing Compression (dense = less padding)
8. Zone Differentiation (background alternation)
9. Dense/Sparse Alternation (breathing rhythm)
10. Width Variation (question narrow, answer full)
11. Progressive Disclosure (details element)
12. Solid-Offset Depth (3px border offset, not shadow)
13. Color Inversion (text/bg swap for headers)

**Layout Mechanisms (5):**
14. Grid Collapse (multi-col → single at 768px)
15. Flex Segment Distribution (equal-width bars)
16. Nested 2-Zone Recursion (callout inside callout)
17. Fractal Self-Similarity (same rhythm at every scale)
18. Bento Grid Islands (2-col high-density containment)

**Full catalog:** `mechanism-catalog.md`

---

## The 41 Compositional Rules

**DNA Rules (callout structure, 2-zone pattern):**
- Rule DNA1: Callout structure is ALWAYS 2-zone
- Rule DNA2: Zone 1 (label) is ALWAYS sparse or transparent
- Rule DNA3: Zone 2 (body) MAY use dense background
- Rule DNA4: Border-left is ALWAYS structural (4px)

**Density Rules (spacing, breathing):**
- Rule D1: Dense zones use compressed padding (16px–24px)
- Rule D2: Sparse zones use expanded padding (32px–64px)
- Rule D3: Breathing zones use recovery padding (80px+)
- Rule D4: Dense/sparse alternation creates rhythm

**Fractal Rules (self-similarity):**
- Rule F1: Same rhythm applies at every scale
- Rule F2: Nested structures inherit parent rhythm
- Rule F3: Fractal density uses 4-scale progression

**Responsive Rules (768px collapse):**
- Rule RC1: Grids collapse to 1–2 columns at 768px
- Rule RC2: Spacing compresses at mobile (64px → 32px)
- Rule RC3: Typography scales down (40px → 32px headings)

**Full ruleset:** `compositional-rules.md`

---

## How to Use This Directory

### When Building New Layouts

**Step 1: Read `mechanism-catalog.md`**
- Scan for reusable techniques
- "I need hierarchy encoding" → Border-Weight Gradient (mechanism #1)
- "I need breathing rhythm" → Dense/Sparse Alternation (mechanism #4)

**Step 2: Check `compositional-rules.md`**
- "How do callouts work?" → Rule DNA1–DNA4
- "How does responsive work?" → Rule RC1–RC3

**Step 3: Apply mechanism to YOUR content**
- Border-weight gradient (technique) + YOUR metaphor (geological, confidence, structural)
- NOT: Copy geological strata CSS verbatim (that's pattern-matching)

**Step 4: Verify rule compliance**
- Callout has 2 zones? ✅
- Border-left is 4px? ✅
- Dense/sparse alternation present? ✅

### When Extracting New Mechanisms

**Criteria for extraction:**
- Works across 3+ metaphors (transfer test)
- NOT metaphor-specific (geological ≠ mechanism)
- Reusable technique (border-weight, not "6 strata")

**How to extract:**
1. Read source CSS (source-first order)
2. Identify recurring technique (not implementation)
3. Strip metaphor vocabulary ("geological" → "layered hierarchy")
4. Document as mechanism with transfer test examples

**Example:**
```markdown
### Mechanism: Border-Weight Gradient

**Technique:** Use 4px/3px/1px border widths to encode hierarchy OR confidence OR importance.

**Transfer test:**
- Geological: 4px bedrock, 3px strata, 1px topsoil ✅
- Confidence: 4px certain, 3px moderate, 1px exploratory ✅
- Structural: 4px container, 3px section, 1px detail ✅

**Works across metaphors:** YES
```

---

## What NOT to Do

❌ **DO NOT use mechanisms as templates**
- Mechanism: "Border-weight gradient encodes hierarchy"
- NOT template: "Use 4px for bedrock, 3px for strata"
- Apply technique to YOUR content, don't copy geological CSS

❌ **DO NOT mix metaphor vocabulary into mechanisms**
- ❌ "Geological border system"
- ✅ "Border-weight gradient for hierarchy encoding"

❌ **DO NOT violate compositional rules**
- Rule DNA1: "Callout is ALWAYS 2-zone"
- ❌ Single-zone callout (violates rule)
- ✅ Sparse label + dense body (follows rule)

❌ **DO NOT extract metaphor-specific patterns as mechanisms**
- ❌ "6-layer strata structure" (metaphor-specific)
- ✅ "Border-weight gradient" (reusable technique)

---

## Mechanisms vs Metaphors (Critical Distinction)

**MECHANISM (reusable):**
- Border-weight gradient (4px/3px/1px)
- 2-Zone component DNA (sparse label + dense body)
- Dense/sparse alternation (breathing rhythm)

**Works across:**
- Geological metaphor (strata)
- Confidence metaphor (certainty)
- Structural metaphor (containment)
- ANY future metaphor

**METAPHOR (specific):**
- Geological stratification (bedrock/strata/topsoil/atmosphere)
- Fractal self-similarity (4 scales)
- Manuscript codex (chapters/sections/paragraphs)

**Works for:**
- THIS content ONLY
- NOT reusable (copying = pattern-matching)

**The rule:** Extract MECHANISMS, document METAPHORS as proof (Layer 5 case studies).

---

## Relationship to Other Layers

**Layer 1 (Identity):**
- Prohibitions constrain mechanisms (no rounded corners, no shadows)
- Border system derived from soul constraints (sharp = 0 radius)

**Layer 2 (Vocabulary):**
- Mechanisms reference tokens: "Use `--border-structural` (4px)"
- Rules assume token system: "Spacing compression uses `--space-1` through `--space-20`"

**Layer 4 (Components):**
- Components implement mechanisms: Callout = 2-Zone DNA + Border-Weight
- Component CSS uses grammar rules: "Callout ALWAYS has 2 zones"

**Layer 5 (Case Studies):**
- Metaphors apply mechanisms: "Geological uses border-weight gradient"
- Case studies show proof: "DD-006 demonstrates fractal self-similarity"

**Layer 6 (Guidelines):**
- Semantic rules reference mechanisms: "When to use border-weight? Hierarchy OR confidence encoding"

---

## Why This Layer Exists

**Grammar separates TECHNIQUE from IMPLEMENTATION.**

Without grammar:
- Agents copy patterns verbatim (geological → every layout has 6 strata)
- No reusability (each metaphor reinvents border-weight gradient)
- Pattern-matching epidemic

With grammar:
- Agents extract technique (border-weight gradient)
- Apply to NEW content (confidence, structural, ANY hierarchy)
- Mechanisms transfer, metaphors don't

**Grammar enables CREATIVITY within CONSTRAINTS.**

---

## File Metadata

**Grammar layer files:** 3
**Total mechanisms:** 18 (5 single-property, 8 multi-property, 5 layout)
**Total rules:** 41 (DNA, density, fractal, responsive)
**Border system:** 3-category (4px/3px/1px)
**Extraction lens:** Identity + Enablement (techniques enable, don't constrain)
**Validation:** 100% mechanism transfer (all work across 3+ metaphors)
**Next review:** After Phase D-V builds (check for new technique patterns)

---

**EXTRACT TECHNIQUES. NOT TEMPLATES.**
