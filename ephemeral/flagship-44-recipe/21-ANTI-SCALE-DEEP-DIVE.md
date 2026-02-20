# Anti-Scale Model Deep Dive: Operationalizing Richness = Semantic Density x Restraint x Spatial Confidence

**Date:** 2026-02-19
**Author:** antiscale-tracer agent (Opus)
**Source material:** MEMORY.md scale-research section, CD-006-pilot-migration.html (forensic CSS analysis), 07-threshold-ceiling.md, 01-DEFINITION.md, 03-CD006-FORENSICS.md
**Consumed by:** stack-integrator, brief-drafter, all recipe agents

---

## 0. FRAMING: THE GOVERNING PRINCIPLE

The anti-scale model is **not a layer in the compositional intelligence stack.** It is the **evaluation function that sits above the entire stack.** Scales, channels, multi-coherence, and fractal self-similarity are all mechanisms. The anti-scale model is the JUDGE of whether those mechanisms produce richness or noise.

The formula:

```
Richness = semantic density x restraint x spatial confidence
```

Three properties:
1. **Multiplicative** -- any factor at zero collapses richness to zero regardless of the others
2. **Non-numeric** -- these are continuous qualities, not integers; the multiplication is structural (they interact), not arithmetic
3. **Evaluative** -- they describe the QUALITY of mechanism deployment, not the QUANTITY

This document answers six questions about operationalizing this model.

---

## 1. SEMANTIC DENSITY: How to Measure in CSS

### Definition

Semantic density = **how much meaning each CSS rule carries.** Not how MANY rules, but how much WORK each rule does. A page with 1,000 CSS lines where 200 are imperceptible has lower semantic density than a page with 500 CSS lines where all 500 are perceptible.

### Concrete CSS Metrics

**Primary metric: Perceptible-mechanism ratio**

```
Semantic Density Ratio = (Perceptible mechanism instances) / (Total CSS lines excluding :root, reset, accessibility)
```

Evidence from the corpus:

| Artifact | Mechanism instances (perceptible) | CSS lines (functional) | Ratio | PA-05 |
|----------|----------------------------------|----------------------|-------|-------|
| CD-006 | 41 | ~830 (998 total - 168 boilerplate) | 0.049 (1 mechanism per 20 lines) | 4/4 |
| Middle | ~12 | ~300 (est.) | 0.040 | 4/4 |
| Flagship 1.5 | ~5-7 (perceptible) | ~700 (est.) | 0.010 | 1.5/4 |
| Remediation 2.5 | ~10-12 | ~650 (est.) | 0.018 | 2.5/4 |

**The ratio tells a clear story.** CD-006 gets a perceptible mechanism instance every 20 lines. Flagship 1.5 gets one every 100 lines -- 80% of its CSS does nothing visible.

**Secondary metric: Component types per scroll**

```
Component Density = (Distinct component types in viewport) / (Viewports in page)
```

CD-006: 42 component instances across ~14 viewports = 3.0 components/viewport. Every viewport has 2-4 DIFFERENT component types.

Flagship 1.5: ~8 component instances across ~12 viewports = 0.67 components/viewport. Most viewports are bare prose.

**Tertiary metric: CSS property variety per boundary**

At each section boundary, count the number of CSS properties that CHANGE between the two zones: background-color, font-size, font-family, font-weight, letter-spacing, line-height, padding, margin, border-width, border-color, display (grid/flex/block), grid-template-columns.

CD-006 averages 6-8 property changes per boundary. Flagship 1.5 averaged 0-2.

### What CANNOT Be Measured

Semantic density includes **meaning** -- whether a CSS rule encodes content information. CD-006's border-weight gradient (4px=established, 3px=probable, 1px=speculative) carries SEMANTIC WEIGHT that cannot be extracted from the CSS alone. You would need to verify that the visual treatment maps to content meaning, which requires understanding the content.

**This is why semantic density is partially programmatic and partially perceptual.** The ratio and component density are computable. The semantic weight requires a human or fresh-eyes agent.

### Recipe Operationalization

A recipe can target semantic density through:

1. **Budget allocation rule:** "No CSS line should be imperceptible. If you write a property whose effect cannot be seen at 100% zoom, delete it."
2. **Component diversity target:** "Each viewport-sized region should contain at least 2 distinct component types."
3. **Property-change target:** "At each section boundary, at least 5 CSS properties should change perceptibly."
4. **Anti-waste check:** "After writing each section's CSS, verify every rule by temporarily commenting it out. If removing it causes no visible change, delete it permanently."

---

## 2. RESTRAINT: What It Looks Like Concretely

### Definition

Restraint = **the ratio of what you DEPLOY to what you COULD deploy.** A page that uses every mechanism at maximum intensity in every zone has zero restraint. A page that deploys mechanisms selectively, with deliberate frequency limits and principled absences, has high restraint.

### CD-006 Restraint Evidence (From Forensic Analysis)

CD-006 has 41 mechanism instances but demonstrates restraint in these concrete ways:

**A. Frequency-limited mechanisms (deployed but rare):**

| Mechanism | Instances | Available Opportunities | Restraint Ratio |
|-----------|-----------|----------------------|-----------------|
| Drop cap | 2 | 8 (one per section) | 25% deployment |
| Core Abstraction component | 2 | 8 | 25% |
| Decision Matrix | 1 | 8 | 12.5% |
| Breathing transition | 2 | 7 boundaries | 28.5% |
| Choreography hub-spoke | 1 | 8 | 12.5% |

Every one of these is an EVENT because it is rare. Drop caps appear in S1 and S4 only -- when the content shifts register from factual to discursive. The decision matrix appears only in S4 because only S4 contains a decision. Choreography appears only in S7 because only S7 has a hub-spoke content structure.

**B. Deliberately absent mechanisms:**

| Opportunity | Could Have Done | Why Absent |
|-------------|----------------|-----------|
| Background gradients | Gradient between zones | Soul: anti-physical identity |
| Box shadows | Depth cues on components | Soul: flat planes |
| Animation/parallax | Scroll-triggered reveals | Content speaks without effects |
| Icon system | Icons in callout labels | Typography IS the decorative system |
| Multi-color body accents | Beyond #E83025 | Color scarcity creates impact |
| Nested grids | Grid-within-grid | Complexity at one scale only |
| 5th border weight | 2px for medium emphasis | Border system is 3-tier (1/3/4px); 2px is BANNED |

These absences are not laziness. They are DECISIONS. CD-006 had 998 CSS lines -- the builder was not short on budget. Every absence is traceable to a design principle.

**C. Channel discipline (single job per channel):**

| Channel | Its ONE Job | Never Used For |
|---------|-----------|---------------|
| Color (5 callout accents) | Callout type identification | General UI elements, backgrounds, text |
| Typography (Instrument Serif) | Headings + essence + principles | Body text, labels, metadata |
| Border-weight (3 tiers) | Structural hierarchy encoding | Decoration, generic emphasis |
| Letter-spacing (4 values) | Formality register | Rhythm, emphasis, decoration |
| Text-transform (uppercase) | Meta/label identification | Body emphasis, headings |

**Each channel has exactly one semantic function.** This is restraint at the design-system level: a decision that border-weight encodes CONFIDENCE, not decoration, means every border weight decision in the page participates in a coherent system.

### Can Restraint Be Instructed or Only Discovered?

**Both, but differently.**

**INSTRUCTABLE restraint (rules the recipe can enforce):**
- "Deploy drop caps in at most 2 sections"
- "At least 3 catalog mechanisms must be ABSENT from the page by explicit design choice"
- "No single component type may exceed 35% of total component instances"
- "Zero CSS rules whose effect is sub-perceptual"
- "Every whitespace gap > 48px must contain structural content (border, background shift, or semantic separator)"

These are binary rules. A builder can comply or fail. This covers what I call **quantitative restraint** -- limiting frequency and eliminating waste.

**DISCOVERABLE restraint (cannot be fully instructed):**
- Knowing that S1 NEEDS a drop cap but S3 does NOT
- Deciding that choreography fits S7's content (deploy/checklist) but would feel forced in S2's content (Q&A)
- Choosing a breathing transition between Spiral and Z-Pattern (high cognitive shift) but only a smooth transition between Z-Pattern and Z-Pattern (low shift)
- Withholding a grid layout in S4 (F-pattern's linear flow serves the narrative arc) even though grids are available

This is **compositional restraint** -- matching mechanism deployment to content need. It requires understanding the content and making judgment calls. A recipe cannot pre-specify "use a breathing transition at boundary 4 but a smooth transition at boundary 7" because the content determines the answer.

**What a recipe CAN do:** Teach the PRINCIPLE of compositional restraint through examples.

Example recipe instruction:
```
RESTRAINT PRINCIPLE:
- Before deploying a mechanism, ask: "Does this section's CONTENT
  demand this mechanism, or am I deploying it for coverage?"
- If the answer is "coverage" → DO NOT deploy. Leave it absent.
- A section with 2 mechanisms that serve content > a section with
  5 mechanisms deployed for diversity.

CONCRETE EXAMPLE:
- Drop cap: Deploy ONLY when content shifts from structured/list
  to flowing prose. Never for procedural or reference content.
- Grid layout: Deploy ONLY when content has genuinely parallel items
  (comparison, reference cards, independent tasks). Never for
  sequential narrative.
```

**Verdict: Restraint is ~60% instructable (frequency limits, waste elimination, absence mandates) and ~40% discoverable (content-mechanism matching).** The recipe should maximize the 60% through binary rules and teach the 40% through examples and principles.

---

## 3. SPATIAL CONFIDENCE: Beyond "Large CSS Values"

### Definition

Spatial confidence = **the visual evidence that compositional decisions were made deliberately, not defaulted.** It is the reader's perception that "someone decided this goes here, at this size, with this weight."

### How It Differs from Large Values

Large CSS values without spatial confidence:
```css
/* This has big numbers but zero confidence */
.section { padding: 120px 60px; }  /* Just big, not deliberate */
.heading { font-size: 48px; }       /* Just big, not placed */
.border { border: 8px solid black; } /* Just thick, not semantic */
```

The same values with spatial confidence:
```css
/* CD-006: The same size range but every value MEANS something */
.transition--breathing {
  margin: 80px 0;           /* 80px because BREATHING transitions
                                need cognitive reset space */
  border-top: 3px solid;     /* 3px because STRUCTURAL separator,
                                not 1px data separator */
  padding-top: 80px;         /* Symmetric: gap AROUND the border */
}

.transition--smooth {
  margin: 48px 0;            /* 48px = smaller gap because SMOOTH
                                means LOW cognitive shift */
  border-top: 1px solid;     /* 1px because DATA-LEVEL separator */
  padding-top: 48px;
}
```

**The difference is SYSTEM.** Large values alone are just big. Large values that participate in a coherent system of spacing-means-cognitive-difficulty are spatially confident.

### Concrete Manifestations in CSS

**A. Grid layouts deployed without hedging:**

CD-006 uses 5 distinct grid topologies:
- Golden ratio (`1.618fr 1fr`) in z-hero
- 4-column equal in bento
- 3-column equal in choreography spokes
- 2-column equal in reasoning + inline geometry
- Spiral strata (stacked flex)

A spatially timid page would use `1fr 1fr` for everything or avoid grids entirely. Confidence is deploying a 4-column bento grid because the content has 4 independent token categories, and trusting that the layout communicates "these are parallel, independent items."

**B. Borders that DECLARE structure:**

```css
/* CD-006: border weight encodes structural hierarchy */
.stratum--established { border-left: 4px solid #1A1A1A; }
.stratum--probable    { border-left: 3px solid #666666; }
.stratum--speculative { border-left: 1px solid #E0D5C5; }
```

4px / 3px / 1px is not accidental. It is a gradient from heavy (bedrock) to light (atmosphere). The WEIGHT of the border tells you the CONFIDENCE of the content. A spatially timid page would use `1px solid #ccc` everywhere.

**C. Typography that SHIFTS between zones:**

CD-006 has 6 distinct font sizes (48px / 26px / 22px / 16px / 14px / 12px) and 4 weight steps (400 / 500 / 600 / 700). The shifts between zones are perceptible:

- Header: Instrument Serif 48px + Inter 12px uppercase tracked
- TOC: Inter 16px + JetBrains Mono 12px
- S1 strata: Instrument Serif italic 18px (essence) + Inter 16px + JetBrains Mono 12px (labels)
- S2 Z-hero: Instrument Serif italic 22px (questions) + Inter 16px (answers)

Each zone has a DISTINCT typographic voice. A spatially timid page would use 16px/400 throughout.

**D. Backgrounds that differ by 15+ RGB at boundaries:**

CD-006's zone backgrounds (#FEF9F5 / #FFFFFF / #FAF5ED) are actually SUBTLE (8-10 RGB delta). Its spatial confidence comes instead from COMPONENT-LEVEL contrast:

- Dark code blocks (#1A1A1A) against cream body = 220 RGB delta
- Colored callout borders (blue/green/coral/amber/purple) against neutral backgrounds
- Dark header (#1A1A1A) against cream content
- Breathing zone (#FAF5ED) in TOC/bridge against base (#FEF9F5)

**Key insight from 07-threshold-ceiling.md:** CD-006 FAILS the >= 15 RGB zone background threshold on 2 of 3 zone pairs. But it achieves spatial confidence through COMPONENT TEXTURE, not zone-level color shifting. This is important: spatial confidence is not about any ONE property being "bold enough." It is about the TOTAL visual impact of all properties at a boundary.

**E. Width variation:**

CD-006's container is 1100px. Within that:
- Prose is constrained to 70ch (~560px, ~51% of container)
- Callouts span full width (100%)
- Bento grids span full width with 24px gaps
- Code blocks span full width
- Z-hero has golden ratio columns (1.618:1)

This variety means different content types occupy DIFFERENT amounts of horizontal space. A spatially timid page would have everything at 100% container width.

### How Spatial Confidence Differs from "Just Large CSS Values"

| Property | Large Values | Spatial Confidence |
|----------|-------------|-------------------|
| Borders | 8px solid everywhere | 4px/3px/1px gradient encoding hierarchy |
| Typography | 48px heading, 16px body | 6-step scale with 4 weight levels, each mapping to a semantic register |
| Backgrounds | 3 backgrounds 50 RGB apart | Multiple backgrounds creating component-level contrast even when zone deltas are subtle |
| Spacing | 120px padding everywhere | 48px/64px/80px transition grammar mapping to cognitive difficulty |
| Grids | `1fr 1fr` in every section | 5 topologies deployed when content structure demands them |
| Width | 100% everything | 70ch prose, 100% components, golden ratio grids, responsive collapse |

**The distinguishing feature is VARIATION WITHIN A SYSTEM.** Large values are uniform. Spatial confidence is a palette of values where each value has a semantic role.

---

## 4. CAN THE ANTI-SCALE MODEL BE COMPUTED OR ONLY PERCEIVED?

### Answer: Partially Computed, Critically Perceived

The three factors have different computability:

| Factor | Computable Portion | Perceptual Portion | Ratio |
|--------|-------------------|-------------------|-------|
| Semantic density | Mechanism ratio, component density, property-change count | Whether mechanisms carry content meaning | ~70% computable |
| Restraint | Frequency limits, absence counts, waste detection | Whether absences are principled vs accidental | ~60% computable |
| Spatial confidence | Value variation, border system, grid diversity | Whether the overall impression is "decided" vs "defaulted" | ~40% computable |

### Programmatic Checks (What a Gate Runner CAN Verify)

**Semantic density gates:**
```
SD-01: Perceptible mechanism ratio >= 0.03 (1 mechanism per 33 CSS lines)
SD-02: Component types per viewport average >= 1.5
SD-03: CSS property changes at boundaries average >= 4
SD-04: Zero CSS rules with effect below perception thresholds
```

**Restraint gates:**
```
RE-01: At least 3 catalog mechanisms deliberately absent (documented in code comments)
RE-02: No single component type > 35% of instances
RE-03: At least 2 mechanisms have frequency <= 2 instances
RE-04: Zero sub-perceptual CSS (letter-spacing < 0.03em when paired with adjacent 0, font-size delta < 1px, bg delta < 10 RGB)
RE-05: All whitespace gaps > 48px contain structural content
```

**Spatial confidence gates:**
```
SC-01: >= 3 distinct grid topologies
SC-02: >= 3 distinct border-width values in functional use (not just declared)
SC-03: >= 5 distinct font-size values
SC-04: Prose max-width < 80% of container (content doesn't fill full width)
SC-05: >= 2 responsive breakpoints with layout changes (not just font-size adjustments)
SC-06: Adjacent zone boundaries have >= 15 RGB delta OR >= 3 component-type changes
```

These gates catch ABSENCE of anti-scale properties. A page that fails them is certainly not rich.

### What CANNOT Be Computed (Why Perception Remains Essential)

1. **Semantic weight:** Does the border gradient encode content confidence, or is it just decorative variation? A programmatic check can verify that 3 border weights exist. It cannot verify that they MEAN something.

2. **Content-mechanism fit:** Does the bento grid appear because the content has 4 parallel items, or because the builder wanted a grid? A check can count grids. It cannot assess fit.

3. **Restraint quality:** Is the drop cap absent from S3 because the builder chose not to (compositional restraint) or because the builder forgot (negligence)? A check can count frequency. It cannot distinguish restraint from omission.

4. **Cumulative spatial impression:** Is the overall page "decided" or "defaulted"? This is a gestalt judgment that emerges from ALL properties simultaneously, not from any individual property passing a threshold. The squint test captures this; no programmatic check does.

### Practical Recommendation

**Use programmatic gates as a FLOOR (prevent zero-richness):**
- If SD-01 through SD-04 all pass, the page is at least semantically active
- If RE-01 through RE-05 all pass, the page is at least not wasteful
- If SC-01 through SC-06 all pass, the page is at least spatially varied

**Use perceptual audit for QUALITY (determine actual richness):**
- Mode 4 PA with fresh-eyes auditors determines whether the PRODUCT of the three factors is HIGH or merely COMPLIANT
- The anti-scale model's multiplicative nature means aggregate passing (6/6 + 5/5 + 6/6 = all green) does not guarantee richness -- it only guarantees no factor is zero

**The anti-scale model is like a recipe for a meal:** You can verify the ingredients are present (computable). You cannot verify the meal tastes good until you taste it (perceptual). But verifying ingredients catches obvious failures (missing salt = zero restraint).

---

## 5. THE MULTIPLICATION: Why Zero in Any Factor Kills Richness

### The Model's Structure

The multiplicative form is correct. Here is why:

**Scenario: Zero restraint (everything maxed out)**

A page deploys ALL 18 mechanisms at maximum frequency in every zone:
- Drop caps on every section (8)
- All 5 grid types in every section (40)
- All 5 callout variants in every section (40)
- Breathing transitions at every boundary (7)
- Maximum borders everywhere (4px on everything)

This page has HIGH semantic density (many mechanism instances) and HIGH spatial confidence (bold values everywhere). But it has ZERO restraint.

The result: visual cacophony. Every section looks the same because every section uses everything. There are no events (drop cap is not special if it appears 8 times). There is no hierarchy (4px borders everywhere means no border encodes confidence). There is no rhythm (breathing transitions everywhere means no transition signals cognitive difficulty).

**Richness = HIGH x 0 x HIGH = 0.**

The page would score low on PA-05 despite having "many mechanisms" because every mechanism competes with every other mechanism and nothing stands out. This is DECORATION, not DESIGN.

**Scenario: Zero density (no mechanisms)**

A page with excellent restraint (chooses wisely) and excellent spatial confidence (bold layout), but only 1-2 mechanisms deployed:
- Beautiful 4-column grid
- 80px breathing transitions
- But: one font size, one border weight, one background color, no components

This page has HIGH restraint (very selective!) and HIGH confidence (bold grid!). But it has ZERO density.

The result: a well-spaced empty page. The grid is there but nothing fills it. The transitions create rhythm but the zones on either side are identical. This is ARCHITECTURE without content.

**Richness = 0 x HIGH x HIGH = 0.**

**Scenario: Zero spatial confidence (invisible styling)**

A page with many mechanisms deployed selectively, but every value is at the minimum perception threshold:
- 15 RGB background deltas (barely visible)
- 2px font-size changes (barely perceptible)
- 0.03em letter-spacing (threshold minimum)
- 1px borders only (data separator weight)
- No grids (single-column flow)

This is exactly the Flagship 1.5 failure mode. It had 14 declared mechanisms and exercised some restraint (not everything deployed everywhere). But spatial confidence was zero -- all values at or below perception thresholds.

**Richness = MEDIUM x MEDIUM x 0 = 0.**

The Flagship scored 1.5/4. Not completely flat (some mechanisms technically existed), but effectively flat because nothing was VISIBLE.

### Asymmetry of the Factors

The three factors are not equally difficult to achieve:

| Factor | Difficulty | Where Failure Concentrates |
|--------|-----------|--------------------------|
| Semantic density | MODERATE -- a recipe can specify "deploy 14+ mechanisms" | Flagship 1.5 (had mechanisms, couldn't make them perceptible) |
| Restraint | HARD -- requires content-form judgment | Hypothetical maximalist pages; rarely seen because builders default to simplicity |
| Spatial confidence | HARDEST -- requires builder willingness to commit to bold values | Flagship 1.5 (all values timid), checklist-driven pages generally |

**Spatial confidence is the bottleneck.** Most builder failures are confidence failures, not density or restraint failures. The instinct to "be subtle" or "add refinement gradients" produces sub-perceptual CSS that collapses the spatial confidence factor.

### Is This the Right Model?

**Yes, with one refinement.** The multiplicative structure correctly captures the zero-kills-all property. But the factors are not independent -- they interact:

- High restraint ENABLES spatial confidence (by concentrating CSS budget on fewer mechanisms, each can be bolder)
- High spatial confidence REQUIRES restraint (if everything is bold, nothing is bold)
- High density REQUIRES restraint (or it becomes cacophony)

The interaction means the optimal point is not "maximize all three independently" but "find the balance where each reinforces the others." This is what CD-006 achieves:
- 41 mechanism instances (high density)
- 40% mechanisms withheld + frequency limits (high restraint)
- 5 grid types + 3-tier borders + 6 type sizes + 5 axis patterns (high confidence)

The restraint focuses the density, and the focused density enables confidence. It is a virtuous cycle, not three independent sliders.

---

## 6. HOW DOES A RECIPE TEACH THE ANTI-SCALE MODEL?

### The Core Problem

The anti-scale model is an EVALUATIVE principle, not a PROCEDURAL rule. It tells you how to JUDGE a result, not how to PRODUCE one. This creates a teaching challenge: a recipe is procedural (step 1, step 2, step 3), but the thing it needs to teach is evaluative (is this good?).

### What CAN Be Taught (Procedural Encoding)

**A. Binary gates as floor enforcement:**

```
ANTI-SCALE FLOOR GATES (Builder self-check after each section):

1. DENSITY: Does this section have >= 2 distinct component types?
   YES → proceed. NO → add a component that SERVES the content.

2. RESTRAINT: Is there a mechanism you CHOSE NOT to deploy here?
   YES → proceed. NO → remove the LEAST content-relevant mechanism.

3. CONFIDENCE: Remove all CSS from this section except reset.
   Add it back one property at a time. Is each addition VISIBLE
   at 100% zoom?
   YES → proceed. NO → delete the invisible property, use
   the CSS budget on something perceptible.
```

These are binary, self-testable rules. They enforce the FLOOR of each anti-scale factor.

**B. Example-based teaching (showing what each factor looks like):**

The recipe should include 3 paired examples per factor:

```
SEMANTIC DENSITY EXAMPLE:
- LOW: A section with 200px of prose in 16px Inter, no components,
  no structural borders. One visual event per viewport.
- HIGH: A section with a callout, a code block, a bordered
  subsection heading, and structural borders. Four visual events
  per viewport. Same content, different density.

RESTRAINT EXAMPLE:
- LOW: Every section has a drop cap, a callout, a code block,
  a grid, and a task list. All look the same.
- HIGH: S1 has a drop cap + spiral strata (geological metaphor).
  S3 has a bento grid + code blocks (reference card metaphor).
  S4 has a decision matrix + reasoning component (analysis
  metaphor). Each section has DIFFERENT mechanisms because each
  section's content is DIFFERENT.

SPATIAL CONFIDENCE EXAMPLE:
- LOW: All borders 1px. All backgrounds within 5 RGB. All text
  16px/400. All gaps 32px. Page is technically styled but visually
  uniform. Every boundary is interchangeable.
- HIGH: Structural borders 3px, callout borders 4px left, data
  separators 1px. Header is dark slab (#1A1A1A). Transitions are
  48px/64px/80px mapping to cognitive difficulty. Typography shifts
  from 26px/600 headings to 12px/400 mono labels. Each boundary
  is DISTINCT.
```

**C. The "remove-and-check" protocol:**

This is the most teachable aspect of the anti-scale model:

```
ANTI-SCALE VERIFICATION (Run after completing ALL CSS):

For each CSS rule in your stylesheet:
1. Comment it out
2. Refresh the page
3. Can you see the difference at 100% zoom?
   - YES: Keep it. This rule has spatial confidence.
   - NO: Delete it permanently. This rule was sub-perceptual waste.

For each section of the page:
1. Count mechanisms deployed
2. Count mechanisms AVAILABLE but not deployed
3. Is the ratio at least 1:1 (as many omissions as deployments)?
   - YES: Section has restraint.
   - NO: Remove the mechanism that least serves this section's content.

For the whole page:
1. Squint at 25% zoom
2. Can you see alternating bands of light/dark/structured/sparse?
   - YES: Semantic density is perceptible at macro scale.
   - NO: Increase contrast at the boundaries where bands blend together.
```

### What CANNOT Be Taught (Irreducible Taste)

**Content-mechanism matching** -- Knowing that THIS content demands a spiral strata layout while THAT content demands a bento grid. A recipe can provide a mapping table:

| Content Structure | Suggested Layout | Why |
|-------------------|-----------------|-----|
| Confidence-stratified | Spiral strata | Content has layers of certainty |
| Parallel-independent | Bento grid | Items can be read in any order |
| Question-answer | Z-pattern Q&A | Reader scans question, dives into answer |
| Sequential narrative | F-pattern | Content builds progressively |
| Hub-and-spoke | Choreography | Central concept with satellite details |

But the builder must RECOGNIZE which content structure they are looking at. This recognition is a form of reading comprehension that no binary rule can substitute for. It is the compositional intelligence that separates Opus-level builders from compliance-oriented ones.

**Dynamic multi-coherence profile** -- Knowing that boundary 4 should hit 5 channels (plot twist) while boundary 7 should hit only 2 (quiet moment). CD-006 has this:
- Boundary 1 (header to content): 5/6 channels (maximum impact: page entry)
- Boundary 4 (S1 to S2, breathing): 3/6 channels (moderate: pattern shift)
- Boundary 7 (S4 to S5, smooth): 2/6 channels (minimal: same axis pattern)
- Boundary 5 (S2 to S3, bridge): 5/6 channels (maximum: complete layout change)

The PROFILE has dynamics -- quiet and loud moments. A recipe can say "vary your channel count across boundaries" but cannot specify WHERE the quiet moments should fall without knowing the content.

### Verdict: Recipe Ceiling for Anti-Scale

**The recipe can achieve approximately 70% of anti-scale quality through:**
1. Binary floor gates (eliminates zero-factor failures)
2. Budget allocation rules (directs CSS toward visibility)
3. Remove-and-check protocol (eliminates sub-perceptual waste)
4. Content-mechanism mapping table (guides layout selection)
5. Paired examples (shows what good/bad looks like for each factor)

**The remaining 30% requires:**
1. Content reading comprehension (which layout fits THIS content)
2. Dynamic multi-coherence profiling (quiet vs loud boundary decisions)
3. Restraint judgment (knowing when MORE deployment hurts rather than helps)
4. Compositional surprise (breaking the pattern at the right moment)

This 70/30 split means the recipe CANNOT guarantee anti-scale quality but CAN prevent anti-scale failure. A page built following the recipe's anti-scale gates will have non-zero values for all three factors. Whether those values are HIGH enough for Flagship 4/4 depends on the builder's compositional intelligence.

---

## 7. SYNTHESIS: THE ANTI-SCALE MODEL AS RECIPE INFRASTRUCTURE

### The Model's Role in the Recipe Stack

```
Layer 5 (GOVERNING): Anti-Scale Model
  Evaluates: Is the composition RICH?
  Formula: Richness = semantic density x restraint x spatial confidence

  FEEDS INTO:
  ├── Layer 4 (multi-coherence): Are channels coordinated?
  │   Anti-scale lens: coordination must be PERCEPTIBLE (confidence)
  │   and SELECTIVE (restraint), not uniform everywhere (density varies)
  │
  ├── Layer 3 (channels): What CSS properties encode meaning?
  │   Anti-scale lens: each channel must carry SEMANTIC WEIGHT (density)
  │   without ALL channels being active everywhere (restraint)
  │   with values BOLD ENOUGH to perceive (confidence)
  │
  ├── Layer 2 (scales): What zoom levels show design?
  │   Anti-scale lens: pattern should be MEANINGFUL at each scale (density)
  │   not every scale equally detailed (restraint)
  │   but no scale INVISIBLE (confidence)
  │
  └── Layer 1 (thresholds): Are values above perception floor?
      Anti-scale lens: thresholds prevent zero confidence
      but meeting thresholds does NOT guarantee density or restraint
```

The anti-scale model is the LENS through which every other layer is evaluated. Multi-coherence is only valuable if it is semantically dense (not random channel noise), restrained (not at every boundary), and spatially confident (perceptible without tools). Same for channels, scales, and thresholds.

### What Goes in the Recipe (5 Lines)

The team lead specified that thresholds should occupy "5 lines, not 50" in the conventions brief. Here is the anti-scale model in 5 lines:

```
RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE

- DENSITY: Every CSS rule must be perceptible. Zero waste. >= 2 component types per viewport.
- RESTRAINT: >= 3 mechanisms deliberately absent. No component type > 35%. Events are rare.
- CONFIDENCE: >= 3 grid types. 3-tier borders (1/3/4px). 5+ font sizes. Remove-and-check all CSS.
- ZERO KILLS ALL: If any factor is zero, the page is flat regardless of the other two.
```

### What Goes in the Verification (Programmatic Gates)

```
ANTI-SCALE GATES (post-build, automated):

SD-01: Mechanism ratio >= 0.03
SD-02: Component types/viewport >= 1.5
SD-03: CSS property changes at boundaries >= 4 average
SD-04: Zero sub-perceptual CSS rules

RE-01: >= 3 catalog mechanisms documented as deliberately absent
RE-02: No component type > 35% of instances
RE-03: >= 2 mechanisms with frequency <= 2 instances
RE-04: Zero sub-perceptual CSS (redundant with SD-04, intentionally)
RE-05: Gaps > 48px have structural content

SC-01: >= 3 distinct grid topologies
SC-02: >= 3 distinct border-width values in use
SC-03: >= 5 distinct font-size values
SC-04: Prose max-width < 80% of container
SC-05: >= 2 responsive breakpoints with layout changes
SC-06: Adjacent zones have >= 15 RGB OR >= 3 component-type changes
```

### What Goes in the Perceptual Audit

The anti-scale model adds 3 questions to the Mode 4 PA:

```
PA-AS-01: SQUINT TEST. At 25% zoom, does the page show alternating
bands of visual density? (Tests aggregate richness product)

PA-AS-02: ABSENCE TEST. Can you identify at least one compositional
technique that the page COULD have used but didn't? Does the absence
make the page BETTER? (Tests restraint quality)

PA-AS-03: COMMITMENT TEST. Do the visual choices feel BOLD and
DECIDED, or TIMID and DEFAULTED? Could you describe the page's
personality in 3 adjectives? (Tests spatial confidence quality)
```

---

## 8. OPEN QUESTIONS AND HONEST GAPS

### Q1: Is the formula complete?

The anti-scale model was derived from scale research (theoretical, never empirically validated at Flagship level). It is possible that a 4th factor exists that we have not identified. Candidates:

- **Coherence** -- the degree to which mechanisms work TOGETHER, not just individually. Currently subsumed under "restraint" (channel discipline) but possibly its own factor.
- **Surprise** -- the degree to which the composition breaks its own pattern at the right moment. Currently not represented.
- **Temporal dimension** -- the SCROLL experience, not just static viewport analysis. Currently not modeled.

### Q2: Are the factors equally weighted?

The multiplicative form treats them as equal (zero in any = zero product). But empirically:
- Spatial confidence failures are by far the most common (Flagship 1.5, most agent-built pages)
- Density failures are second (simple pages with few mechanisms)
- Restraint failures are rarest (because builders default to simplicity, which is incidental restraint)

This suggests spatial confidence should be prioritized in the recipe (most lines, most examples, most self-checks), not because it is more important in the formula, but because it is most likely to be the failing factor.

### Q3: Can the model distinguish Ceiling from Flagship?

CD-006 scores VERY HIGH x HIGH x VERY HIGH on the anti-scale model. A Flagship page should also score VERY HIGH x HIGH x VERY HIGH. The anti-scale model alone cannot distinguish them.

The differentiator is D-04 (multi-coherence) and D-13 (unified metaphor) from the definition spec. These are not captured by the anti-scale model's three factors. They are ADDITIONAL properties that emerge when all three anti-scale factors are high AND the mechanisms are coordinated by a unified compositional intent.

This means: **the anti-scale model is necessary but not sufficient for Flagship.** It prevents flat, wasteful, timid pages. It does not guarantee the coherent atmospheric quality that distinguishes Flagship from Ceiling.

### Q4: What does the Flagship experiment teach?

The Flagship 1.5 had:
- Semantic density: LOW (5-7 perceptible of 14 declared)
- Restraint: LOW (227 lines sub-perceptual waste, 22% of budget)
- Spatial confidence: ZERO (1-8 RGB deltas, zero borders, uniform 16px)

Anti-scale product: ~0. The model correctly predicts the 1.5/4 score.

The remediation 2.5 had:
- Semantic density: MODERATE (10-12 perceptible)
- Restraint: MODERATE (waste eliminated, callouts still dominant)
- Spatial confidence: LOW-MODERATE (some grids, some borders, but 2 transitions below 15 RGB)

Anti-scale product: LOW-MODERATE. The model correctly predicts the 2.5/4 score.

CD-006 had:
- Semantic density: VERY HIGH
- Restraint: HIGH
- Spatial confidence: VERY HIGH

Anti-scale product: HIGH. The model correctly predicts a 4/4 score (Ceiling register).

**The model tracks observed scores accurately across all reference artifacts.** Its predictive validity is supported by 4 data points.

---

**END DEEP DIVE**

*This document operationalizes the anti-scale model across 6 questions. The key findings: (1) semantic density is ~70% computable via mechanism ratio and component density, (2) restraint is ~60% instructable via binary rules and ~40% discoverable through content-form judgment, (3) spatial confidence is about VARIATION WITHIN A SYSTEM not just large values, (4) the model is partially computable via 15 programmatic gates but critically requires perceptual verification, (5) the multiplicative structure is correct -- zero in any factor was confirmed by the Flagship 1.5 failure, (6) a recipe can achieve ~70% of anti-scale quality through gates + examples + protocols, with the remaining 30% requiring builder compositional intelligence.*
