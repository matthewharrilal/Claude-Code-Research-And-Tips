# Design System Enrichment Audit for Flagship Experiment

**Analyst:** ENRICHMENT-AUDITOR
**Date:** 2026-02-16
**Purpose:** Identify what must be added, modified, or strengthened in the design system's core documents BEFORE attempting a flagship experiment
**Evidence Base:** mechanism-catalog.md, prohibitions.md, semantic-rules.md, tokens.css, 07-VERDICT.md, AUDIT-REPORT.md (Mode 4), 06-adversarial-anti-scale.md, 03-diminishing-returns.md

---

## Executive Summary

The ceiling experiment exposed five categories of design system gaps that, if unaddressed, will recur at flagship scale with compounded severity. The DOMINANT gap is not in what the system documents (mechanisms, tokens, prohibitions) but in what it FAILS to document: spatial proportion constraints, transition grammar between patterns, content density minimums, and restraint guidance. The system has 18 mechanisms catalogued and 22 prohibitions defined, but zero guidance on MAXIMUM whitespace, zero transition grammar between zones, and zero content density floors per section.

**Total gaps identified:** 34
- BLOCKING: 8 (must fix before flagship)
- Important: 16 (should fix for quality)
- Nice-to-have: 10 (would improve but not essential)

---

## A. MECHANISM CATALOG GAPS

### A1. NO TRANSITION GRAMMAR BETWEEN ZONES/PATTERNS

**What's missing:** The mechanism catalog documents 18 individual mechanisms but provides ZERO guidance on how to transition between them. When a page moves from zone-sparse to zone-dense, what CSS creates that transition? When border-weight-gradient (#1) hands off to zone-background-differentiation (#7), what bridges them?

**Why it matters for flagship:** Flagship pages deploy 16-18 mechanisms. With 18 mechanisms potentially active, there are 153 possible pairwise transitions (18 choose 2). The ceiling experiment's "metronomic rhythm" (PA-17) and abrupt zone shifts are DIRECTLY caused by missing transition grammar. The builder had mechanisms but no vocabulary for the SPACES BETWEEN mechanisms.

**Concrete proposal:** Add a new section to mechanism-catalog.md: "Mechanism Transition Grammar." Define 3 transition types:

```
## Transition Grammar (How Mechanisms Hand Off)

### Type 1: HARD CUT (Background shift + border change simultaneously)
When to use: Content changes DOMAIN (tutorial section -> reference section)
CSS pattern:
  .section-a + .section-b {
    border-top: 3px solid var(--color-primary);
    /* Zone background change occurs at element boundary */
  }
Evidence: CD-006 uses hard cuts between major content modes.

### Type 2: GRADIENT FADE (Spacing compression bridges two zones)
When to use: Content changes INTENSITY within same domain (overview -> detail)
CSS pattern:
  .zone--moderate {
    padding: var(--space-8);
    /* Intermediate spacing between sparse (--space-20) and dense (--space-4) */
  }
Evidence: OD-004 uses intermediate strata between established and speculative.

### Type 3: CHECKPOINT (Structural divider with content)
When to use: Content changes PHASE (prerequisites -> implementation -> verification)
CSS pattern:
  .checkpoint {
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-4) var(--space-6);
    background: var(--color-zone-breathing);
    font-family: var(--font-mono);
    font-size: var(--type-meta);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
Evidence: Ceiling experiment's CHECK-01 through CHECK-05 system.
```

**Priority:** BLOCKING -- The ceiling experiment's spatial catastrophe was partly caused by zone transitions being implemented as VOID (empty space) instead of as designed moments. Without transition grammar, flagship builders will reproduce this failure.

---

### A2. NO RESTRAINT PRINCIPLE (When NOT to Use a Mechanism)

**What's missing:** The mechanism catalog has a "Usage Guidance" section with a selection flow chart (lines 906-927), but this flow only addresses WHEN to use mechanisms. It never addresses WHEN NOT TO USE a mechanism. There is no concept of mechanism saturation, no guidance on maximum mechanism density per section, and no restraint signal.

**Why it matters for flagship:** The anti-scale thesis (06-adversarial-anti-scale.md) argues convincingly that "richness = (semantic density per decision) x (restraint ratio) x (spatial confidence)." The ceiling experiment deployed 14 mechanisms in CSS but only 1 was perceptually visible. Flagship targets 16-18 mechanisms -- adding MORE mechanisms without restraint guidance will produce WORSE results, not better.

**Concrete proposal:** Add a "Restraint Protocol" section to mechanism-catalog.md:

```
## Restraint Protocol — When NOT to Deploy a Mechanism

### The Restraint Ratio
For every mechanism you DEPLOY, you should be able to name one mechanism you CONSIDERED AND REJECTED because it doesn't serve this content.

Target restraint ratios by tier:
- Middle: Deploy 8-10, reject 2-3 (ratio ~3:1 deployed:rejected)
- Ceiling: Deploy 12-15, reject 4-6 (ratio ~2.5:1)
- Flagship: Deploy 16-18, reject 5-8 (ratio ~2:1)

### Mechanism Density Floor
No section (one viewport height) should contain MORE THAN 4 distinct mechanisms.
Mechanisms should be DISTRIBUTED across the page, not concentrated.

Evidence: Ceiling experiment concentrated 14 mechanisms in the first 20% of scroll depth.
The remaining 80% was void. Distribution, not count, drives perception.

### The "Would Removing This Help?" Test
Before finalizing, ask for EACH mechanism:
"If I removed this mechanism from this section, would the section IMPROVE?"
If YES -> remove it. The restraint signal (conspicuous absence) adds more than
the mechanism's presence.
```

**Priority:** BLOCKING -- Without restraint guidance, flagship builders will treat mechanism count as a target rather than a natural landing zone, producing the same front-loaded saturation that destroyed the ceiling experiment.

---

### A3. NO CONTENT DENSITY MINIMUM PER ZONE

**What's missing:** The catalog defines zone types (sparse, moderate, dense, breathing) with SPACING minimums/maximums but no CONTENT DENSITY requirements. A "sparse zone" can have 80px padding AND zero content -- which is exactly what happened in the ceiling experiment's catastrophic void.

**Why it matters for flagship:** The ceiling experiment proved that zone-based architecture + generous spacing + insufficient content = whitespace catastrophe. 9/9 Mode 4 auditors flagged this. The page had zones with CORRECT spacing tokens but NO CONTENT inside them.

**Concrete proposal:** Add content density requirements to each zone type in mechanism #7 (Zone Background Differentiation):

```
### Content Density Floors Per Zone Type

| Zone Type | Min Content Per Viewport | What Counts |
|-----------|--------------------------|-------------|
| Sparse | 1 heading + 2 paragraphs OR 1 heading + 1 component | Text, callouts, diagrams |
| Moderate | 1 heading + 3 paragraphs OR 2 headings + 2 components | All content types |
| Dense | 1 heading + 4 paragraphs OR 2 tables/code blocks + context | Technical content |
| Breathing | Transition text only (1-3 sentences) | Text only, no components |

### Maximum Consecutive Empty Viewports
ZERO. No scroll position should render a full viewport (100vh) with less than
30% content coverage. If a zone's content doesn't fill the zone, SHRINK THE ZONE.

Evidence: Ceiling experiment had 24 consecutive viewport-height frames of blank space.
This is the single most corroborated failure (9/9 auditors).
```

**Priority:** BLOCKING -- This was THE dominant failure of the ceiling experiment. Without content density floors, flagship will reproduce it.

---

### A4. NO MULTI-PATTERN HANDOFF GUIDANCE

**What's missing:** The catalog's "Combination Rules" section (lines 929-940) lists compatible and incompatible mechanism PAIRS. But flagship pages may need 3-4 mechanisms operating SIMULTANEOUSLY, and the catalog provides no guidance on multi-mechanism orchestration -- how border-weight-gradient + zone-background + spacing-compression interact when all three encode the SAME semantic dimension.

**Why it matters for flagship:** Ceiling-tier and above use multi-channel coherence (mechanism-catalog.md lines 77-84 describe this explicitly). But the catalog describes the CONCEPT without providing CONSTRAINTS. When 3 mechanisms encode "depth" simultaneously, what prevents them from conflicting?

**Concrete proposal:** Add a "Multi-Mechanism Orchestration" section:

```
## Multi-Mechanism Orchestration

### The Coherence Rule
When multiple mechanisms encode the SAME semantic dimension:
- They must AGREE on direction (if spacing says "deeper," border-weight must also say "deeper")
- They must use PROPORTIONAL graduation (if spacing compresses by 50%, border weight should
  reduce by a proportional step, not remain at maximum)
- At least one mechanism should be DOMINANT (carries the primary signal) and others SUPPORTING

### Orchestration Table
| Semantic Dimension | Primary Mechanism | Supporting Mechanisms | Conflict Warning |
|--------------------|-------------------|----------------------|------------------|
| Hierarchy/importance | #1 Border-weight | #4 Spacing, #7 Zone bg | If border-weight says "high" but zone bg says "low" = incoherent |
| Density/information | #5 Dense/sparse alt | #4 Spacing, #12 Progressive | If alternation says "dense" but spacing says "sparse" = contradiction |
| Emphasis/focus | #3 Solid offset | #7 Zone bg, #16 Drop cap | Offset on an element with breathing-zone bg = competing emphasis |

### Maximum Simultaneous Active Mechanisms Per Section
Ceiling: 3-4 per viewport-height section
Flagship: 4-5 per viewport-height section
NEVER: 6+ mechanisms competing for attention in one viewport
```

**Priority:** Important -- The ceiling experiment's "mechanism enumeration vs composition" problem (14 mechanisms present, 1 perceivable) is partly caused by missing orchestration rules.

---

### A5. EXISTING MECHANISM DESCRIPTIONS LACK RESTRAINT-MODE CSS

**What's missing:** Each mechanism description shows CSS for USING the mechanism. None show CSS for the MINIMAL or SUBTLE deployment. For example, mechanism #3 (Solid Offset Depth) shows the 4px offset pattern but not a lighter 2px variant for supporting (not primary) emphasis.

**Why it matters for flagship:** Flagship pages need mechanisms at VARYING intensities. A border-weight gradient that's always 4px/3px/2px/1px becomes monotonous across 16+ deployments. The catalog needs "half-voice" variants for supporting roles.

**Concrete proposal:** For each of the 5 highest-impact mechanisms (#1, #3, #5, #7, #13), add a "Supporting Mode" CSS variant:

```
### Supporting Mode (Half-Voice Deployment)
Use when this mechanism SUPPORTS another primary mechanism, not when it's the focal technique.

/* Instead of 4px/3px/2px/1px full gradient: */
.element--primary { border-left: 3px solid var(--color-border); }
.element--secondary { border-left: 1px solid var(--color-border); }
/* 2-step instead of 4-step: less demanding, still encodes hierarchy */
```

**Priority:** Important -- Prevents the "every mechanism at full volume" saturation problem.

---

### A6. NO CROSS-PATTERN COMPONENT VARIANTS

**What's missing:** The catalog describes mechanisms as page-level techniques but doesn't address how components (callouts, tables, code blocks) should ADAPT when deployed in different zone contexts. A callout in zone-sparse vs zone-dense should feel different, but the catalog provides no guidance on component adaptation by zone.

**Why it matters for flagship:** Flagship pages span 4+ zones. Components appear across multiple zones. Without zone-adapted variants, components feel uniform regardless of context -- undermining the zone system's purpose.

**Concrete proposal:** Add a "Zone-Adapted Component Variants" subsection to mechanism #2 (2-Zone Component DNA):

```
### Zone-Adapted Component Variants

| Zone | Component Adaptation | CSS Adjustment |
|------|---------------------|----------------|
| Sparse | Full padding, generous label spacing, lighter border | padding: var(--space-6) var(--space-8); border-left: 3px |
| Moderate | Standard padding, standard label | padding: var(--space-5) var(--space-6); border-left: 4px |
| Dense | Compressed padding, tighter label gap | padding: var(--space-4) var(--space-5); border-left: 4px |
| Breathing | Components generally NOT placed in breathing zones | -- |
```

**Priority:** Nice-to-have -- Important for flagship but not blocking. Components work adequately without zone adaptation.

---

### A7. MISSING "DESIGNED MOMENT" CONCEPT

**What's missing:** The ceiling build plan referenced "DM-1 through DM-5" (designed moments) but the mechanism catalog has no concept of a "designed moment" -- a deliberate perceptual peak that punctuates the scroll experience. The catalog treats all mechanisms as equal-weight, uniform deployments.

**Why it matters for flagship:** The ceiling Mode 4 audit found "only ONE dramatic moment positioned too early (10% scroll)" (PA-36). Flagship pages need 3-5 designed moments distributed across the scroll. Without a concept and protocol for planned moments, they will cluster at the top.

**Concrete proposal:** Add a "Designed Moment Protocol" section:

```
## Designed Moments — Perceptual Peaks

A designed moment is a DELIBERATE escalation of visual intensity at a planned
scroll position. It breaks the page's steady rhythm to signal something important.

### Anatomy of a Designed Moment
1. BUILDUP: 1-2 sections of steady rhythm (mechanisms at "supporting mode")
2. PEAK: 1 section with 3-4 mechanisms at full intensity + unique visual treatment
3. RELEASE: Return to steady rhythm with slightly different character (variation)

### Distribution Rule
- Middle: 1-2 designed moments (one in first 30%, one in last 30%)
- Ceiling: 2-3 designed moments (distributed across thirds)
- Flagship: 3-5 designed moments (no more than 1 per 20% of scroll depth)
- NEVER: Two designed moments in adjacent sections (competing peaks = no peaks)

### Example Designed Moment Techniques
- Architecture diagram on dark background (ceiling experiment's strongest element)
- Bento grid with variable span (#15) breaking single-column rhythm
- Drop cap (#16) + zone-bedrock (#7) + border-weight-max (#1) combined
- Full-width code block + syntax highlighting (#17) after text-only sections
```

**Priority:** Important -- The ceiling experiment proved that designed moments are the primary generator of perceived quality, but the system has no vocabulary for planning them.

---

## B. SOUL/PROHIBITIONS GAPS

### B1. NO PROHIBITION ON MAXIMUM WHITESPACE

**What's missing:** Prohibitions.md has 22 rules. ZERO address maximum whitespace. Prohibition #18 says "NEVER use same-density stacking" (SLOW + SLOW adjacent) but NOTHING says "NEVER leave full viewports empty." The soul defines what KortAI REFUSES visually but has no concept of refusing VOID.

**Why it matters for flagship:** The ceiling experiment's catastrophic whitespace void (9/9 auditors flagged it) was not a soul violation. The builder could produce 70-80% blank scroll depth while maintaining 8/8 soul compliance. Soul compliance is NECESSARY but NOT SUFFICIENT -- the void is in the gap between what prohibitions cover and what perceptual quality demands.

**Concrete proposal:** Add Prohibition #21 (ABSOLUTE):

```
### 21. NEVER Allow a Full Viewport of Contentless Space

**Why it exists:** Empty viewports communicate "page is broken" or "content failed to load."
A full viewport (100vh at any supported width) with less than 30% content coverage
destroys reading momentum and makes the page feel abandoned.

**What it protects:** Spatial confidence, reading momentum, page completeness perception

**Evidence:**
- Ceiling experiment: 70-80% of scroll was empty cream void (9/9 auditors flagged)
- Mode 4 PA audit: "24 consecutive frames of nothing" (Auditor D)
- "This isn't breathing space -- it's abandonment" (universal finding)
- Breathing zones serve rest; voids serve nothing

**Measurement:**
At any scroll position, at 1440px viewport, content elements must cover at least
30% of the viewport area. "Content" = text, images, diagrams, components, structured
elements. "Not content" = background color, margins, padding without elements.

**Exception:** NONE. No metaphor justifies a blank viewport. If your zone system
creates empty viewports, the zones need content or need to be SMALLER.
```

**Priority:** BLOCKING -- This is the single most important enrichment. The ceiling experiment proved that soul compliance alone does not prevent the worst perceptual failure mode.

---

### B2. NO PROHIBITION ON SPATIAL PROPORTION EXTREMES

**What's missing:** The soul addresses container width (940-960px, documented in CLAUDE.md and guardrails) but NOT spatial proportion ratios. There is no rule addressing the relationship between content area and surrounding space. A 960px column in a 1440px viewport leaves 480px of flanking emptiness -- 33% waste. Is this acceptable? The prohibitions are silent.

**Why it matters for flagship:** The ceiling Mode 4 audit found "Content is a narrow column floating in vast emptiness" (Auditor C) and "70% of width is inert" (Auditor C). Even if the container IS 960px (correctly sized), the flanking space at 1440px creates a perception problem that no current prohibition addresses.

**Concrete proposal:** Add guidance (not a hard prohibition, but a design principle) to prohibitions.md, or alternatively to semantic-rules.md:

```
### Horizontal Composition at Wide Viewports

At 1440px viewport with 960px container:
- The 480px of flanking space (240px each side) must feel DESIGNED, not LEFTOVER
- Options for composing flanking space:
  1. Full-bleed section backgrounds that extend beyond container (zone backgrounds)
  2. Sidebar elements (sticky TOC, progress indicator) using flanking space
  3. Pull-quote or margin-note elements that break into flanking space
  4. Consistent warm cream background that reads as "editorial margin" (current default)

Option 4 is ACCEPTABLE as default but produces "narrow column floating" perception
at 1440px. For Ceiling+ pages, deploy at least ONE instance of options 1-3 to
compose the horizontal space.
```

**Priority:** Important -- Not blocking (the current approach is acceptable at Middle tier) but important for flagship where the horizontal composition problem will be more visible due to longer scroll depth and more complex zone systems.

---

### B3. NO PROHIBITION ON FRONT-LOADED VISUAL WEIGHT

**What's missing:** The prohibitions address density monotony (#18: no SLOW+SLOW adjacent) but not density DISTRIBUTION across the full page. Nothing prevents a builder from putting all visual interest in the first 20% and leaving the remaining 80% visually barren.

**Why it matters for flagship:** Mode 4 PA-32 found "visual weight concentrated at top, depleted downward." PA-35 found "PEAK -> CLIFF -> FLATLINE. Skimming starts frame 6." PA-47 found "visual novelty dies at 30% scroll depth." All of these describe the same problem: visual weight distribution is unaddressed by the soul.

**Concrete proposal:** Add Prohibition #22 (CONDITIONAL):

```
### 22. NEVER Concentrate All Designed Moments in the First Third

**Why it exists:** Pages where all visual interest is front-loaded produce
"beautiful book cover attached to blank pages" perception (Mode 4 audit finding).

**What it protects:** Reading momentum, scroll engagement, visual arc

**Evidence:**
- Ceiling experiment: Only 1 designed moment at 10% scroll (PA-36)
- Mode 4: "Visual novelty dies at 30% scroll depth" (PA-47)
- Mode 4: "Interest level: PEAK -> CLIFF -> FLATLINE" (PA-35)

**Rule:** For pages with 3+ sections, at least ONE designed moment must appear
in the SECOND HALF of the page (below 50% scroll depth).

**Exception:** Very short pages (<3 sections) where the entire page is one viewport.
```

**Priority:** BLOCKING -- The ceiling experiment's second-half abandonment was its most damaging failure after the whitespace void, and both are connected.

---

### B4. NO PROHIBITION ON EXCESSIVE ZONE COUNT WITHOUT CONTENT

**What's missing:** The prohibitions don't address the relationship between architectural ambition and content volume. The ceiling experiment had 4 trust zones but insufficient content to fill them. Nothing in the soul prevents declaring 6 zones for a page that has content for 2.

**Why it matters for flagship:** Flagship metaphors are MORE elaborate than ceiling metaphors. Without a content-to-zones constraint, flagship builders will create complex multi-zone architectures that require MORE content than exists, producing MORE void.

**Concrete proposal:** Add a process-level prohibition or add to semantic-rules.md:

```
### Zone-to-Content Ratio

Before implementing a zone-based architecture:
1. COUNT content sections (distinct content blocks, not counting headings)
2. COUNT planned zones
3. VERIFY: Each zone has at least 2 content sections assigned to it

If any zone has fewer than 2 content sections: MERGE that zone with an adjacent zone
or ADD content for it.

Evidence: Ceiling experiment had 4 zones. Zones 3-4 had minimal content.
Result: 70-80% of page was void.

RULE: Zones exist to SERVE content, not to DEMONSTRATE architecture.
```

**Priority:** Important -- Prevents a specific failure pattern but not the only cause of the void problem.

---

## C. TOKENS.CSS GAPS

### C1. NO TRANSITION TIMING TOKENS

**What's missing:** tokens.css has exactly ONE transition token: `--transition-standard: 0.3s ease;` (line 142). For flagship pages with zone transitions, checkpoint animations, and scroll-driven reveals, a single transition speed is insufficient.

**Why it matters for flagship:** The ceiling experiment's zone transitions were either instant (hard cuts) or mediated by void (empty space). Neither creates the designed transition experience flagship needs. Multiple transition speeds (for entering zones, for checkpoint reveals, for subtle scroll effects) would give builders controlled vocabulary for temporal rhythm.

**Concrete proposal:** Add transition timing tokens:

```css
/* --- Transition Timing (AVAILABLE — temporal rhythm) --- */
--transition-instant: 0.1s ease;        /* Micro-interactions, hover states */
--transition-standard: 0.3s ease;       /* Standard element transitions */
--transition-deliberate: 0.5s ease-out; /* Section reveals, zone entries */
--transition-stately: 0.8s ease-in-out; /* Major page landmarks, scroll reveals */
```

**Priority:** Nice-to-have -- The system works without these (most pages are static), but flagship pages with scroll-driven reveals would benefit.

---

### C2. NO ZONE-SPECIFIC BACKGROUND TOKENS FOR MULTI-PATTERN PAGES

**What's missing:** tokens.css has 3 zone colors (sparse, dense, breathing) + 1 implied (bedrock in mechanism-catalog.md). For flagship pages with 4-6 content zones, 3 zone tokens force color reuse that undermines zone differentiation.

**Why it matters for flagship:** The ceiling experiment used 4 trust zones. With only 3 zone colors available, at least one zone must reuse a color, weakening the zone-differentiation signal.

**Concrete proposal:** Add 2 additional zone colors:

```css
/* --- Zone Colors Extended (AVAILABLE — multi-zone pages) --- */
--color-zone-sparse: #FEF9F5;      /* Existing: opening/overview zones */
--color-zone-dense: #FFFFFF;       /* Existing: technical/detail zones */
--color-zone-breathing: #FAF5ED;   /* Existing: transitional zones */
--color-zone-emphasis: #F5F0E8;    /* NEW: highlighted/featured zones (warmer than breathing) */
--color-zone-deep: #EDE8E0;       /* NEW: deep/advanced/restricted zones (warmest light tone) */
```

**Priority:** Important -- Flagship with 4+ zones needs more than 3 zone colors for perceptual differentiation.

---

### C3. NO MAXIMUM SPACING TOKEN

**What's missing:** tokens.css defines spacing from `--space-1` (4px) to `--space-24` (96px). The ceiling experiment used these tokens but deployed them in ways that created multi-hundred-pixel voids. There is no concept of a MAXIMUM spacing value that signals "you should not exceed this."

**Why it matters for flagship:** Without a documented maximum, builders treat the scale as open-ended -- 96px between sections becomes 192px between zones (double stacking), which becomes 384px of void.

**Concrete proposal:** Add a semantic maximum alias:

```css
/* --- Spacing Maximums (AVAILABLE — prevent void) --- */
--space-max-section: var(--space-16);  /* 64px — Maximum spacing between sections */
--space-max-zone: var(--space-24);     /* 96px — Maximum spacing between zones/chapters */
/* RULE: No single margin or padding should exceed --space-max-zone (96px).
   If a zone transition needs more visual separation, use a CHECKPOINT element,
   not more whitespace. */
```

**Priority:** BLOCKING -- Directly prevents the ceiling experiment's void pattern.

---

### C4. MISSING CONTENT-TO-VIEWPORT RATIO TOKEN

**What's missing:** The perceptual-auditing skill defines content-to-viewport ratio as 65-80% optimal, but this ratio has no token representation. Builders have no CSS-level reference for this constraint.

**Why it matters for flagship:** The ceiling Mode 4 audit found "30% content, 70% void" -- the INVERSE of the optimal ratio. A token or documented ratio would give builders a concrete check.

**Concrete proposal:** Add as a CSS custom property comment (not an actual token, since it's a ratio, not a value):

```css
/* --- Spatial Proportion Guidelines --- */
/* Content-to-viewport ratio at 1440px: TARGET 65-80% content coverage
   per viewport-height section. Below 50% = void risk. Above 85% = cramping risk.
   Measure: (total content element height) / (viewport height) per scroll position. */
```

**Priority:** Nice-to-have -- This is more of a comment/documentation issue than a token issue, but documenting it in the file builders actually read (tokens.css) rather than only in the audit skill would increase visibility.

---

## D. SEMANTIC RULES GAPS

### D1. NO GUIDANCE FOR MULTI-PATTERN PAGES

**What's missing:** semantic-rules.md addresses 5 gaps (Info/Note callout selection, inline/block code, table styling, breathing-room triggers, callout differentiation). ALL of these assume a single-pattern page. There is no guidance on how semantic rules change when a page uses MULTIPLE patterns (e.g., CRESCENDO in one zone, BOOKENDS in another).

**Why it matters for flagship:** Flagship pages by definition deploy multiple patterns across zones. The semantic rules need to address: Do callout semantic colors maintain meaning across zone backgrounds? Does the breathing-room trigger change in dense zones vs sparse zones? Does inline/block code threshold change in narrative vs reference sections?

**Concrete proposal:** Add a "Multi-Pattern Semantic Rules" section:

```
## Gap 6: Multi-Pattern Page Semantics

### Cross-Zone Callout Consistency
Callout colors maintain their semantic meaning ACROSS ALL zones.
A `callout--tip` (green) means the same thing in zone-sparse as in zone-dense.
DO NOT reassign callout colors per zone.

### Zone-Adjusted Breathing Room
Breathing room trigger SCALES with zone density:
- In sparse zones: Breathing room = 48-64px (unchanged, already generous)
- In moderate zones: Breathing room = 32-48px (compressed proportionally)
- In dense zones: Breathing room = 24-32px (minimum viable rest point)
- Breathing room is RELATIVE to zone context, not absolute

### Pattern-Transition Semantic Signal
When two patterns meet (e.g., CRESCENDO section ends, BOOKENDS section begins):
- Deploy a TYPE 1 (HARD CUT) transition (see mechanism catalog transition grammar)
- The transition element should carry a LABEL (section heading, zone marker)
- The label provides semantic context for the pattern change

Evidence: CD-006 successfully transitioned between multiple patterns using
3px primary border as the hard-cut signal. This is the validated approach.
```

**Priority:** Important -- Flagship will have multi-pattern pages. Without this guidance, semantic consistency across zones will be builder-dependent.

---

### D2. NO GUIDANCE ON PATTERN TRANSITIONS

**What's missing:** semantic-rules.md's Gap 4 (Breathing-Room Zone Triggers) defines WHEN to create breathing room but not HOW to transition between patterns. There is no concept of a "pattern transition" as a semantic event.

**Why it matters for flagship:** The ceiling experiment's zones transitioned via empty space. The previous CD-006 transitioned via 3px borders. Neither approach is documented in semantic-rules.md as a systematic choice.

**Concrete proposal:** Add to semantic-rules.md:

```
## Gap 7: Pattern Transition Signals

### When Does a Pattern Transition Occur?
A pattern transition occurs when the page's compositional logic CHANGES:
- Content domain shift (tutorial -> reference -> API docs)
- Density mode shift (CRESCENDO phase 2 -> phase 3)
- Zone boundary (zone-sparse -> zone-moderate)

### How to Signal a Pattern Transition

| Transition Type | Signal | When to Use |
|-----------------|--------|-------------|
| Domain shift | 3px border-top + zone background change | Between fundamentally different content types |
| Density shift | Spacing change only (no border) | Within same content type, intensity changes |
| Zone boundary | Checkpoint element (label + rule) | When metaphor explicitly defines zones |
| Chapter break | 64px margin + optional breathing zone | Between major page divisions |

### The "Silence vs Signal" Test
Every transition must answer: "Is this gap an intentional silence (rest point)
or a missing signal (void)?"
- Silence: Background remains, spacing is moderate (48-64px), content exists on both sides
- Signal: Visible element marks the transition (border, label, color change)
- Void: No content, no signal, no purpose -- ALWAYS a defect
```

**Priority:** Important -- Directly addresses the ceiling experiment's "designed moment vs void" confusion.

---

### D3. NO CONTENT-FORM FIT GUIDANCE (MINIMUM CONTENT DENSITY)

**What's missing:** semantic-rules.md defines WHEN to use various components (callouts, tables, code blocks) but not HOW MUCH content a section needs before it warrants a particular treatment. A section with one sentence shouldn't get a full zone treatment. A section with 10 paragraphs shouldn't be in a breathing zone.

**Why it matters for flagship:** The ceiling experiment created zones for sections with insufficient content. The semantic rules don't prevent this because they address component selection (WHAT) but not content volume (HOW MUCH).

**Concrete proposal:** Add a content-form fit section:

```
## Gap 8: Content-Form Fit — Minimum Content for Form Decisions

### Section-Level Content Minimums

| Form Decision | Minimum Content Required |
|---------------|--------------------------|
| Own zone (dedicated background) | 3+ paragraphs OR 2+ components OR 1 diagram with context |
| Breathing zone (transition) | 1-3 sentences ONLY -- if more, upgrade to real zone |
| Bento grid (#15) | 4+ items of comparable weight -- if fewer, use list |
| Progressive disclosure (#12) | 3+ disclosure phases with distinct content -- if fewer, use headers |
| Full zone-bedrock section | 1 featured element + context -- never use as content container |

### The "Enough Content?" Gate
Before assigning a zone/pattern/mechanism to a section:
Q: "Does this section have enough content to fill this form at minimum density?"
- YES: Proceed
- NO: Either ADD content or DOWNGRADE the form (zone -> subsection, bento -> list)
```

**Priority:** BLOCKING -- This directly prevents the "architectural ambition exceeding content" failure that produced the ceiling void.

---

### D4. SEMANTIC VALUE FRAMEWORK DOESN'T ADDRESS VOID

**What's missing:** The Semantic Value Framework (lines 282-379 of semantic-rules.md) has the excellent 3-Question Test for varying CSS values. But it only addresses values that EXIST. It doesn't address the semantic meaning of ABSENCE -- what does it mean when a section has no content? The framework treats void as simply "not a CSS value" rather than as a design decision that requires justification.

**Why it matters for flagship:** The ceiling experiment's voids had no semantic justification. They weren't "sparse because uncertain" (like OD-004's topsoil). They were "empty because no content was assigned." The framework needs to treat void as a value that must pass the 3-question test.

**Concrete proposal:** Add to the Semantic Value Framework:

```
### Q4: WHY IS THIS SPACE EMPTY?

For every section of the page with >50% empty viewport:
Q4a: WHAT is absent? (content, components, visual elements)
Q4b: WHY is it absent? Reference one of:
  - Breathing room (intentional rest between dense sections — max 48-96px)
  - Metaphor logic (this zone represents emptiness/openness — requires strong justification)
  - Content doesn't exist yet (BLOCKING — add content or remove zone)
  - NOT: "the zone needs to be big" or "spacing looks good" (these are ARBITRARY)
Q4c: Could this space be SMALLER without losing its purpose?
  - If YES -> shrink it
  - If NO -> document why the current size is the minimum for its purpose
```

**Priority:** Important -- Extends the existing framework to cover the ceiling experiment's dominant failure.

---

## E. SKILL ENRICHMENTS

### E1. TENSION-COMPOSITION SKILL: ADD VOID PREVENTION PROTOCOL

**What's missing:** The tension-composition skill (SKILL.md) has no guidance on preventing whitespace voids. The 6-phase pipeline goes from metaphor derivation (Phase 3) to mechanism selection (Phase 4) to implementation (Phase 5) without any spatial composition check. There is no step that verifies "do I have enough content for this architecture?"

**Why it matters for flagship:** The tension-composition skill is the primary tool for building ceiling+ pages. If it doesn't address the ceiling experiment's dominant failure, it will reproduce that failure.

**Concrete proposal:** Add a Phase 4.5 between mechanism selection and implementation:

```
### Phase 4.5: Spatial Composition Check (GATE)

BEFORE implementing, verify spatial viability:

1. COUNT content sections assigned to each zone/pattern area
2. VERIFY each zone has >= 2 content sections (see semantic-rules Gap 8)
3. ESTIMATE total content height vs planned page height
4. VERIFY content-to-page ratio >= 50% (content should fill at least half the scroll)
5. PLAN designed moments: at least 1 per 30% of estimated scroll depth

If ANY zone has fewer than 2 content sections:
- OPTION A: Merge the underpopulated zone with adjacent zone
- OPTION B: Add content to fill the zone
- OPTION C: Reduce the zone to a transition element (checkpoint, not full zone)

This gate prevents "architectural ambition exceeding content volume."
```

**Priority:** BLOCKING -- The tension-composition skill is where flagship pages will be built. Without this gate, the void problem will recur.

---

### E2. TENSION-COMPOSITION SKILL: ADD VISUAL WEIGHT DISTRIBUTION CHECK

**What's missing:** The skill's Phase 5 (implementation) focuses on applying mechanisms to content. There is no check for visual weight distribution across the scroll.

**Why it matters for flagship:** The ceiling experiment concentrated all visual weight in the first 20% of the page.

**Concrete proposal:** Add to Phase 5 implementation guidance:

```
### Visual Weight Distribution Check

After implementing, before audit:
1. Identify the 3 most visually intense elements (designed moments)
2. Map their scroll positions (as percentage of total page height)
3. Verify: At least 1 designed moment in each third of the page
   - First third (0-33%): YES (header, opening, orientation)
   - Middle third (33-66%): YES (diagram, featured component, visual break)
   - Final third (66-100%): YES (summary visualization, conclusion, footer)
4. If any third has ZERO designed moments: add one or redistribute

Evidence: Ceiling experiment had 1 designed moment at 10% scroll.
PA-35: "PEAK -> CLIFF -> FLATLINE."
```

**Priority:** Important -- Directly addresses the front-loading problem.

---

### E3. PERCEPTUAL-AUDITING SKILL: ADD VOID DETECTION PROTOCOL

**What's missing:** The PA skill has PA-09 ("Is there dead space that serves no purpose?") and PA-33 ("Largest empty space: silence or dropped signal?"). But neither SPECIFICALLY addresses the "consecutive empty viewports" pattern that was the ceiling experiment's dominant failure. The questions ask about dead space IN GENERAL but don't have a specific void detection protocol.

**Why it matters for flagship:** The ceiling experiment's previous lighter audit MISSED the void entirely. The Mode 4 audit caught it only because 9 independent auditors all flagged it independently. If the skill had a SPECIFIC void detection step, even Mode 2/3 audits would catch it.

**Concrete proposal:** Add a specific void detection question and protocol:

```
### PA-49: Void Detection (NEW — Add to Tier 1 Mandatory)

**Question:** "Scroll through the entire page at 1440px. Is there ANY point where
you can scroll through an ENTIRE viewport height (or more) without seeing substantial
content? If yes, how many consecutive blank viewports exist?"

**What It Catches:** The catastrophic whitespace void pattern (ceiling experiment:
24 consecutive blank viewport frames, 9/9 auditors flagged)

**Severity Classification:**
- 0 blank viewports: PASS
- 1 blank viewport: COULD-BE-BETTER (might be intentional breathing room)
- 2+ consecutive blank viewports: WOULD-NOT-SHIP (void pattern, always a defect)

**Why Tier 1 Mandatory:** The ceiling experiment proved that:
1. This is the most common high-severity failure (more common than soul violations)
2. Lighter audits miss it (previous 5-auditor audit didn't catch it)
3. It's the FIRST thing that bothers users (PA-01 answer in Mode 4: "cavernous emptiness")
4. It's trivially detectable with a dedicated question
```

Additionally, add a void detection step to the Scroll-Through Protocol:

```
### Void Detection During Scroll-Through

During the scroll-through capture (steps 1-7 of existing protocol):
- After capturing all screenshots, REVIEW the sequence
- COUNT consecutive screenshots where content covers < 30% of viewport
- If COUNT >= 2: Flag as VOID PATTERN — WOULD-NOT-SHIP severity
- Include count in scroll-through summary
```

**Priority:** BLOCKING -- The lighter audit formats (Mode 1-3) currently have no reliable void detection. This single addition would have caught the ceiling experiment's dominant failure in any audit mode.

---

### E4. PERCEPTUAL-AUDITING SKILL: ADD CONTENT-TO-SCROLL RATIO CHECK

**What's missing:** The guardrails section has content-to-viewport ratio (65-80%) but this measures HORIZONTAL proportion, not VERTICAL proportion. There is no guardrail for vertical content density across the full scroll.

**Why it matters for flagship:** The ceiling experiment had good horizontal content-to-viewport ratio (960px in 1440px = 67%) but catastrophic vertical content-to-scroll ratio (~20-30% content in total scroll height).

**Concrete proposal:** Add a vertical content density guardrail:

```
### Vertical Content Density (NEW Guardrail)

| Metric | Minimum | Optimal | Maximum | What It Prevents |
|--------|---------|---------|---------|------------------|
| **Content-to-scroll ratio** | 40% | 55-70% | 85% | Void-dominated pages, cramped pages |

Measurement: (sum of all content element heights) / (total page scroll height)

Where "content elements" = text paragraphs, headings, callouts, code blocks,
tables, diagrams, images. NOT = margins, padding, background-only areas.

Below 40%: Page is majority void -- restructure zones or add content
Above 85%: Page is too dense -- add breathing room
```

**Priority:** Important -- Quantifies the void problem as a measurable metric rather than relying solely on perceptual assessment.

---

### E5. TENSION-COMPOSITION SKILL: LEARN FROM CEILING FAILURES

**What's missing:** The skill's Phase 0D (Tier Classification) describes Ceiling tier as "Full pipeline (Phases 1-7)" and Flagship as "Full pipeline + multi-pass audit." But it doesn't incorporate the LESSONS from the ceiling experiment's failures.

**Why it matters for flagship:** The ceiling experiment validated the pipeline's creative output (9/9 novelty) but exposed critical spatial composition failures. The skill should encode these lessons.

**Concrete proposal:** Add a "Ceiling+ Spatial Safeguards" section to the skill:

```
### Ceiling+ Spatial Safeguards (MANDATORY for Ceiling and Flagship tiers)

These safeguards address empirically validated failure patterns from the ceiling
experiment (2026-02-16). They are GATES, not guidelines.

**S1: Content Volume Verification (Phase 4.5)**
Before assigning zones: Count content blocks per zone. Each zone needs >= 2 blocks.
Failure mode: Zones with insufficient content produce whitespace voids.

**S2: Designed Moment Distribution (Phase 5)**
Before finalizing implementation: Map designed moments across scroll depth.
At least 1 designed moment per third of the page.
Failure mode: Front-loaded visual weight produces "PEAK -> CLIFF -> FLATLINE."

**S3: Maximum Spacing Cap (Phase 5)**
No single margin/padding value exceeds --space-max-zone (96px).
If zone transition needs more separation, use a checkpoint element, not more space.
Failure mode: Stacked generous spacing produces multi-viewport voids.

**S4: Scroll-Through Self-Check (Phase 5, before Phase 6)**
Mentally scroll through the page at reading speed. Ask:
"Is there any point where I would scroll through a full viewport of nothing?"
If YES: Add content or shrink zone before proceeding.
Failure mode: Builder doesn't experience the page as a reader would.
```

**Priority:** BLOCKING -- These four safeguards directly prevent the four failure patterns that made the ceiling experiment unshippable.

---

### E6. NEW SKILL NEEDED: TRANSITION DESIGN

**What's missing:** Neither the tension-composition skill nor the perceptual-auditing skill addresses TRANSITION DESIGN as a first-class concern. The tension-composition skill derives metaphors and selects mechanisms. The PA skill audits results. But the IMPLEMENTATION of transitions between zones, sections, and patterns is left entirely to builder judgment with no specialized guidance.

**Why it matters for flagship:** The ceiling experiment's transitions were its weakest elements. Zone 1->2 transition was the ONE designed moment. All other transitions were voids. Flagship needs a deliberate transition design phase.

**Concrete proposal:** Rather than a full new skill, add a "Transition Design Protocol" as an appendix to the tension-composition SKILL.md:

```
### Appendix: Transition Design Protocol (Ceiling+ Only)

After mechanism selection (Phase 4), before implementation (Phase 5):

1. LIST all transitions in the page (section-to-section, zone-to-zone)
2. CLASSIFY each: Domain shift / Density shift / Zone boundary / Chapter break
3. ASSIGN transition type to each: Hard Cut / Gradient Fade / Checkpoint
   (see mechanism catalog Transition Grammar)
4. DESIGN at least 1 transition as a "designed moment" (see Designed Moment Protocol)
5. VERIFY no transition is implemented as void (empty space with no signal)

Output: Transition map (simple table of section pairs + assigned transition type)
```

**Priority:** Important -- Not a full separate skill, but the transition design concern needs to be SOMEWHERE in the pipeline.

---

### E7. PERCEPTUAL-AUDITING SKILL: ADD "ANNOUNCED vs STRUCTURAL" METAPHOR CHECK

**What's missing:** The PA skill has PA-44 ("Could you still sense the metaphor from visual structure alone?") which asks the right question. But it doesn't classify the answer into the Metaphor Expression Spectrum (Structural / Atmospheric / Labeled / Announced) that the skill itself defines (lines 469-476). The auditor is asked the question but not guided to classify the answer.

**Why it matters for flagship:** The ceiling experiment's metaphor was found to be "announced, not structural" -- 40% perceivable without labels. For flagship, the target is "structural" (perceivable without ANY text labels). The PA skill needs to make this classification explicit in the audit output.

**Concrete proposal:** Enhance PA-44 with classification guidance:

```
### PA-44 Enhancement: Metaphor Expression Level Classification

After answering PA-44, CLASSIFY the metaphor expression level:

| Level | Test | Threshold |
|-------|------|-----------|
| STRUCTURAL | Remove all labels. Metaphor still obvious. | >80% perceivable |
| ATMOSPHERIC | Remove labels. Metaphor is felt but not named. | 50-80% perceivable |
| LABELED | Remove labels. Metaphor weakens significantly. | 20-50% perceivable |
| ANNOUNCED | Remove labels. Metaphor disappears. | <20% perceivable |

Severity by tier:
- Middle: No metaphor required (N/A)
- Ceiling: ATMOSPHERIC or higher required (LABELED = COULD-BE-BETTER)
- Flagship: STRUCTURAL required (ATMOSPHERIC = COULD-BE-BETTER, LABELED = LOOKS-WRONG)
```

**Priority:** Nice-to-have -- Refines an existing question rather than adding new capability.

---

### E8. PERCEPTUAL-AUDITING SKILL: ADD VISUAL ARC ASSESSMENT

**What's missing:** The PA skill evaluates individual screenshots and cold looks but doesn't systematically assess the VISUAL ARC across the full page scroll. PA-35 asks about interest level and PA-47 asks about novelty decay, but neither produces a structured assessment of the page's visual narrative.

**Why it matters for flagship:** Flagship pages are long (1500+ CSS lines, 5+ zones). The visual arc across the full scroll is a primary quality dimension. The ceiling experiment's "PEAK -> CLIFF -> FLATLINE" pattern would have been caught earlier if the PA skill demanded a visual arc assessment.

**Concrete proposal:** Add a composite visual arc question:

```
### PA-50: Visual Arc Assessment (NEW — Add to Tier 2 Standard)

"Scroll through the entire page. Describe the visual JOURNEY using one of these
patterns. Does the page's visual intensity follow a deliberate arc?"

| Pattern | Description | Quality |
|---------|-------------|---------|
| CRESCENDO | Builds from sparse to dense to resolution | EXCELLENT |
| BOOKENDS | Strong open + close, moderate middle | GOOD |
| WAVE | Alternating peaks and valleys throughout | GOOD |
| PLATEAU | Consistent intensity throughout | ACCEPTABLE |
| FRONTLOAD | Strong opening, declining interest | POOR (ceiling pattern) |
| FLATLINE | No variation in intensity | POOR |
| CLIFF | One dramatic moment, then nothing | POOR |

If the page matches FRONTLOAD, FLATLINE, or CLIFF: flag as LOOKS-WRONG minimum severity.
If the page matches CRESCENDO, BOOKENDS, or WAVE: note the pattern for documentation.
```

**Priority:** Nice-to-have -- Adds systematic vocabulary for what auditors are already observing informally.

---

## F. SUMMARY TABLE

### All Gaps by Priority

| ID | Category | Gap | Priority |
|----|----------|-----|----------|
| A1 | Mechanism Catalog | No transition grammar between zones/patterns | BLOCKING |
| A2 | Mechanism Catalog | No restraint principle (when NOT to use a mechanism) | BLOCKING |
| A3 | Mechanism Catalog | No content density minimum per zone | BLOCKING |
| B1 | Prohibitions | No prohibition on maximum whitespace | BLOCKING |
| B3 | Prohibitions | No prohibition on front-loaded visual weight | BLOCKING |
| C3 | Tokens | No maximum spacing token | BLOCKING |
| D3 | Semantic Rules | No content-form fit guidance | BLOCKING |
| E1 | Tension-Composition | No void prevention protocol (Phase 4.5) | BLOCKING |
| E3 | Perceptual-Auditing | No void detection protocol (PA-49) | BLOCKING |
| E5 | Tension-Composition | Ceiling+ spatial safeguards not encoded | BLOCKING |
| A4 | Mechanism Catalog | No multi-pattern handoff guidance | Important |
| A5 | Mechanism Catalog | No half-voice/supporting mode CSS | Important |
| A7 | Mechanism Catalog | No "designed moment" concept | Important |
| B2 | Prohibitions | No spatial proportion guidance | Important |
| B4 | Prohibitions | No zone-to-content ratio constraint | Important |
| C2 | Tokens | No extended zone background tokens | Important |
| D1 | Semantic Rules | No multi-pattern page guidance | Important |
| D2 | Semantic Rules | No pattern transition signals | Important |
| D4 | Semantic Rules | Semantic framework doesn't address void | Important |
| E2 | Tension-Composition | No visual weight distribution check | Important |
| E4 | Perceptual-Auditing | No vertical content density guardrail | Important |
| E5 | Tension-Composition | Learn from ceiling failures | Important |
| E6 | Skills | Need transition design protocol | Important |
| A6 | Mechanism Catalog | No cross-pattern component variants | Nice-to-have |
| C1 | Tokens | No transition timing tokens | Nice-to-have |
| C4 | Tokens | No content-to-viewport ratio token | Nice-to-have |
| E7 | Perceptual-Auditing | Announced vs structural metaphor classification | Nice-to-have |
| E8 | Perceptual-Auditing | Visual arc assessment (PA-50) | Nice-to-have |

**Note:** Some IDs overlap where a single enrichment addresses multiple gaps. E5 appears in both BLOCKING (spatial safeguards) and Important (general ceiling lessons) because the blocking components are a subset of the full learning.

---

## G. RECOMMENDED EXECUTION ORDER

### Wave 1: BLOCKING (Must complete before flagship attempt)

1. **B1 + A3 + C3:** The Void Prevention Triad
   - Add Prohibition #21 (no full empty viewports) to prohibitions.md
   - Add content density floors per zone to mechanism-catalog.md (#7)
   - Add --space-max-zone token to tokens.css
   - These three are deeply connected and should be implemented together

2. **A1:** Transition Grammar
   - Add transition types (Hard Cut / Gradient Fade / Checkpoint) to mechanism-catalog.md
   - This fills the "how do zones connect" gap that produced voids

3. **A2:** Restraint Protocol
   - Add restraint ratio and mechanism density floor to mechanism-catalog.md
   - Prevents "14 mechanisms present, 1 perceivable" saturation

4. **E1 + E5:** Tension-Composition Spatial Safeguards
   - Add Phase 4.5 (spatial composition check) to SKILL.md
   - Add S1-S4 safeguards for Ceiling+ tiers

5. **E3:** Void Detection Protocol
   - Add PA-49 to perceptual-auditing SKILL.md (Tier 1 Mandatory)
   - Add void detection step to Scroll-Through Protocol

6. **B3:** Front-Loading Prohibition
   - Add Prohibition #22 (at least 1 designed moment in second half) to prohibitions.md

7. **D3:** Content-Form Fit
   - Add Gap 8 (minimum content for form decisions) to semantic-rules.md

### Wave 2: Important (Should complete for quality, can parallelize)

8. **A4 + A5 + A7:** Mechanism Catalog enrichments (orchestration, half-voice, designed moments)
9. **D1 + D2 + D4:** Semantic Rules enrichments (multi-pattern, transitions, void framework)
10. **E2 + E4 + E6:** Skill enrichments (weight distribution, vertical density, transition protocol)
11. **B2 + B4 + C2:** Soul and token enrichments (proportion, zone-content ratio, zone colors)

### Wave 3: Nice-to-have (If time permits)

12. **A6, C1, C4, E7, E8:** Component variants, timing tokens, ratio documentation, metaphor classification, visual arc

---

## H. META-OBSERVATION: THE PATTERN OF WHAT'S MISSING

The ceiling experiment's failures reveal a consistent pattern in what the design system LACKS:

**The system excels at documenting WHAT TO DO (mechanisms, components, tokens) but fails at documenting WHAT NOT TO DO at the spatial composition level.**

- 18 mechanisms tell you what CSS to write. Zero rules tell you when you have too much CSS.
- 22 prohibitions tell you what visual effects to refuse. Zero tell you to refuse empty space.
- 65 tokens tell you what values to use. Zero tell you the maximum value to use for spacing.
- The tension-composition skill tells you how to derive metaphors. It doesn't tell you when your architecture exceeds your content.

The enrichments in this audit are overwhelmingly about CONSTRAINTS ON EXCESS, not about ADDITIONS TO CAPABILITY. The system has enough mechanisms. It needs guardrails against deploying them poorly -- specifically, against creating spatial voids, front-loading visual weight, and building architecture that exceeds content.

**The single most important enrichment is B1 (maximum whitespace prohibition).** If only ONE item from this audit is implemented before the flagship experiment, it should be B1. This single rule would have prevented the ceiling experiment's dominant failure.

---

**END ENRICHMENT AUDIT**
**Total gaps identified:** 34 (10 BLOCKING, 14 Important, 10 Nice-to-have)
**Recommended execution:** 3 waves, 7 steps in Wave 1
**Estimated implementation effort:** Wave 1: 3-5 hours. Wave 2: 3-4 hours. Wave 3: 2-3 hours.
