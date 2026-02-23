# B3 -- Emotional Arc: What the Reader FEELS at Each Point in the Scroll

**Agent:** emotional-arc-investigator (Opus 4.6)
**Date:** 2026-02-22
**Task:** #34 -- Deep investigation of emotional arc as a distinct compositional property

**Files Read (5):**
- `ephemeral/handoff-research/55-flagship-crystallization.md` (720 lines)
- `ephemeral/handoff-research/57-compositional-fluency-deep.md` (510 lines)
- `ephemeral/handoff-research/52-adversarial-quality-gaps.md` (399 lines)
- `ephemeral/handoff-research/54-cd006-deficit-analysis.md` (518 lines)
- `ephemeral/pages/gas-town-steve-yegge/output.html` (1,509 lines)

---

## 0. WHAT EMOTIONAL ARC IS AND IS NOT

Emotional arc is the **sequence of feelings the reader experiences while scrolling**. It is DISTINCT from:

- **Density arc** (information density variation): density is a CSS PROPERTY (padding, font-weight, component count). Emotional arc is the READER'S RESPONSE to density and other properties combined. A page can have a perfect density arc and a flat emotional arc if the density changes are sub-perceptual.
- **Temporal composition** (scroll rhythm): rhythm is about PACING -- when dense and sparse zones appear. Emotional arc is about WHAT the pacing makes you FEEL. A metronomic rhythm (dense-sparse-dense-sparse) creates a flat emotional arc regardless of good rhythm.
- **Narrative structure** (cognitive sequencing): structure is about content organization (orient -> learn -> build -> ship). Emotional arc is about whether the FORM amplifies, contradicts, or is indifferent to the content's emotional trajectory.

**The test:** Can you name what the reader FEELS (not what they SEE or KNOW) at each scroll position? If yes, you are describing emotional arc. If you find yourself describing CSS properties or content topics, you are describing something else.

---

## 1. WHAT CSS CREATES SURPRISE

### Definition
Surprise = a visual element that VIOLATES the pattern the reader has absorbed. The reader's visual cortex builds predictions from the first 2-3 viewports. Surprise is what happens when the page deliberately breaks those predictions in a way that resolves into satisfaction, not confusion.

### The Mechanics

**Pattern establishment is prerequisite.** You cannot create surprise without first establishing a predictable rhythm. Gas Town establishes: cream backgrounds, 4px-base spacing, mono-uppercase labels, left-bordered callouts, Instrument Serif headings. By viewport 3, the reader has absorbed the vocabulary. Surprise requires violating exactly ONE dimension of that vocabulary while maintaining the others.

### Specific CSS Techniques That Create Surprise

**1. Scale break -- one element dramatically larger or smaller than context.**
```css
/* After 3 viewports of 16px body + 2rem headings + 12px labels,
   a SINGLE pull-quote at 2.5rem italic serif disrupts scale. */
.surprise-quote {
  font-family: var(--font-display);
  font-size: 2.5rem;         /* 40px -- 2.5x body size */
  font-style: italic;
  line-height: 1.15;
  max-width: 18ch;            /* Narrow -- creates visual tension */
  padding: 64px 0;            /* Generous vertical isolation */
}
```
The reader has calibrated to 16px. The 40px element registers as "someone CHOSE to make this loud." The narrow `max-width: 18ch` (roughly 40% of container) creates negative space that amplifies the scale break. Gas Town's core-quote at 1.5rem (line 329) approaches this but is conservative -- 1.5x body size, not 2.5x. The solid-offset depth effect (lines 306-324) IS surprise, but it is the only one.

**2. Color inversion -- a full-dark zone within the body content.**
```css
/* The entire page is light backgrounds. A single dark section
   within the BODY (not header/footer) inverts the expectation. */
.climax-zone {
  background: var(--color-text);   /* #1A1A1A -- full dark */
  color: var(--color-background);  /* Cream on dark */
  padding: 64px var(--space-8);
  margin: 0 calc(-1 * var(--space-20));  /* Full bleed -- breaks container */
}
```
Gas Town has dark header and dark footer but NO dark zone within the body. The reader sees light-cream-light for the entire content area. CD-006 similarly has no mid-body dark zone. The Flagship crystallization (Report 55) describes a "full-width dark zone (#3d3d3d background, cream text)" at the page's climax (viewport 9-10, lines 244-280). This is the single most powerful surprise technique in static CSS because it inverts EVERY color relationship simultaneously.

**3. Layout rupture -- a grid that breaks the single-column flow.**
```css
/* After 4 viewports of single-column linear content,
   a 3-column asymmetric grid creates spatial surprise. */
.rupture-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;  /* Asymmetric -- not uniform */
  gap: 0;                               /* Flush -- no gap = visual compression */
}
```
Gas Town's bento grid (lines 483-538) is a layout shift, but it appears in Zone 2, which is only the second section. By viewport 3, the reader hasn't been in single-column long enough for the grid to register as surprise. CD-006 uses grids in nearly every section, so grids become the NORM, not the exception. For surprise, the grid must appear AFTER establishing single-column as the baseline -- ideally not until section 4 or later.

**4. Structural inversion -- an element that reverses the established border direction.**
```css
/* Every callout has border-LEFT. One has border-RIGHT. */
.inverted-callout {
  border-left: none;
  border-right: var(--border-heavy) solid var(--accent-coral);
  text-align: right;
  padding-left: 0;
  padding-right: var(--space-5);
}
```
This is micro-surprise. The reader's eye has been anchored to the left edge by consistent `border-left` treatments. A single right-border element breaks the left-anchor assumption. The surprise is subtle but perceptible. Gas Town has zero instances of this; all structural borders are left-sided.

### Why Gas Town Lacks Surprise

Gas Town establishes its vocabulary in Zone 1 (drop cap, core-quote with solid offset, sparse layout) and then NEVER VIOLATES IT. Zones 2-4 use the same callout system, the same border-left vocabulary, the same mono-uppercase label convention. The bento grid in Zone 2 is the closest thing to surprise, but it appears too early to be surprising (the pattern has not been established yet).

**The root cause is CONSISTENCY AS DEFAULT.** The builder treated the conventions brief as a template to apply uniformly. Surprise requires the brief to say "break the pattern here" -- and no such instruction exists. The conventions brief describes the vocabulary; it does not describe when to violate the vocabulary.

---

## 2. WHAT CSS CREATES DELIGHT

### Definition
Delight = a small, unexpected refinement that rewards close attention. The reader does not NEED to notice it, but IF they notice it, they feel cared for. Delight operates below the threshold of surprise -- it is not dramatic enough to disrupt the reading flow, but precise enough to signal "someone paid attention to this."

### Specific CSS Techniques That Create Delight

**1. Hover state that reveals hidden content or animation.**
```css
/* Table rows that subtly highlight on hover */
.data-table tr:hover td {
  background: rgba(232, 48, 37, 0.04);  /* 4% primary -- barely visible */
  transition: background 0.2s ease;
}

/* Links that shift from underline to bottom-border on hover */
a:hover {
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
}
```
Gas Town has `a:hover { color: var(--color-text); }` (line 169) -- a color change. This is functional, not delightful. Delight would be a more crafted hover: a bottom-border that slides in, or a background tint that warms on approach. The data tables (lines 407-447) have zero hover states -- rows do not respond to the cursor at all.

**2. Typographic micro-refinement.**
```css
/* Tabular numbers in data columns */
.data-table .stage-num {
  font-variant-numeric: tabular-nums;   /* Aligned digits */
}

/* Optical margin adjustment for opening paragraphs */
.dispatch-opening {
  text-indent: -0.02em;  /* Optical alignment of first character */
}

/* Hyphenation in narrow columns */
.role-card__function {
  hyphens: auto;
  -webkit-hyphens: auto;
}
```
Gas Town has none of these. The stage numbers use `font-family: var(--font-mono)` (line 444) which provides visual alignment through monospace, not through `tabular-nums`. This is a functional solution. Delight would be the numeric variant on a proportional font, where the alignment is INVISIBLE unless you look for it.

**3. Selection styling that matches the zone.**
```css
/* Zone-specific selection colors instead of global */
.zone-1 ::selection { background: var(--color-primary); color: white; }
.zone-3 ::selection { background: var(--accent-coral); color: white; }
```
Gas Town has global `::selection` (lines 102-105) using the primary red. This is good. Zone-specific selection would be delightful -- selecting text in the "Threat Assessment" callout reveals coral selection instead of red, matching the callout's accent color. The detail rewards anyone who highlights text in different zones.

**4. Print-specific styling.**
```css
@media print {
  header, footer { background: white; color: black; border-color: black; }
  .core-quote::after { display: none; }  /* Remove solid-offset on print */
  a[href]::after { content: " [" attr(href) "]"; font-size: 0.8em; color: #666; }
}
```
Gas Town has no print styles. Adding them signals: "we thought about how you might use this beyond the screen." This is pure delight -- most readers will never print, but the ones who do feel cared for.

**5. First/last child edge treatment.**
```css
/* First role card gets extra top space */
.role-card:first-child { margin-top: var(--space-2); }

/* Last callout in Zone 3 gets a closing flourish */
.zone-3 .callout:last-of-type {
  border-bottom: var(--border-light) solid var(--color-border);
  padding-bottom: var(--space-6);
  margin-bottom: var(--space-8);
}
```
Gas Town treats all callouts identically regardless of position. The last callout in Zone 3 (the "Caution" callout, line 1364) ends and Zone 3 ends. There is no "closing" treatment -- no thicker bottom border, no extra breathing space that says "this zone is complete." Delight lives in these edge cases.

### The Delight Score

Gas Town's delight inventory:
- `::selection` styling: YES (global, not zone-specific)
- `*:focus-visible` outline: YES (functional, not delightful)
- `prefers-reduced-motion`: YES (accessibility, not delight)
- `.skip-link`: YES (accessibility)
- Syntax highlighting: YES (5 colors -- competent)
- Hover states on links: YES (color change only)
- Hover states on tables: NO
- Print styles: NO
- Tabular-nums: NO
- Hyphenation: NO
- First/last edge treatment: NO
- Transition timing variation: NO (single `0.3s ease` everywhere)

**Delight score: 3/12.** The page handles the functional requirements (accessibility, basic interaction) but does not invest in the refinements that create delight. Report 52 rates this "FUNCTIONAL, not REFINED" (2/5 on detail density), which aligns.

---

## 3. WHAT CSS CREATES AUTHORITY

### Definition
Authority = the reader's sense that the page was made by someone who KNOWS. Authority is not loudness -- it is the opposite. It is RESTRAINT that communicates mastery. A page has authority when every decision feels intentional, when spacing is neither cramped nor wasteful, when typography is neither decorative nor plain.

### Specific CSS That Creates Authority

**1. Confident spacing with asymmetric vertical rhythm.**
```css
/* NOT this (metronomic): */
section { padding: 48px; }

/* THIS (phrased): */
.zone-1 { padding: 64px 80px; }          /* OPENING: generous, unhurried */
.zone-2 { padding: 40px 80px; }          /* DEEPENING: vertical tightens, horizontal holds */
.zone-3 { padding: 32px 64px; }          /* DENSEST: both compress */
.zone-4 { padding: 32px 80px 48px; }     /* RESOLVING: top tight, bottom releases */
```
Gas Town implements this (lines 266-267, 371-373, 549-551, 703-705). This IS authority. The spacing tells the reader: "the person who made this understood that opening sections need more room and dense sections need compression." Gas Town's spacing arc is its strongest authority signal.

**2. Restrained type scale with clear hierarchy.**
```css
/* Authority = fewer sizes, used consistently */
--type-display: 3rem;       /* h1 only -- once */
--type-page: 2.5rem;        /* Zone 1 h2 only -- once */
--type-section: 2rem;        /* Zone 2-4 h2 -- repeated */
--type-subsection: 1.5rem;   /* h3 -- repeated */
--type-body: 1rem;           /* body -- everywhere */
--type-code: 0.875rem;       /* code -- everywhere */
--type-meta: 0.75rem;        /* labels -- everywhere */
```
Gas Town uses exactly this scale (lines 49-55). The hierarchy is clear: display > page > section > subsection > body > code > meta. No size is used at two different semantic levels. This is authority through typographic discipline.

**3. Consistent 2-zone DNA in every component.**
```css
/* EVERY labeled component follows: MONO-UPPERCASE-LABEL + BODY-CONTENT */
.callout__label   { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; }
.callout__body     { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; }

.role-card__rank   { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; }
.role-card__name   { font-family: var(--font-body); font-weight: 700; }

.footer-link-group__label { font-family: var(--font-mono); text-transform: uppercase; }
.footer-link-group a      { font-family: var(--font-body); }
```
Gas Town applies this consistently. Every labeled component (callout, role-card, extension-card, header-stat, source-meta, file-tree, mental-model, actionability, footer-link-group) uses the same label pattern: `font-mono + uppercase + 0.1em tracking + secondary color`. This consistency IS authority. The reader never needs to learn a new label convention.

**4. The dark header as authority anchor.**
```css
header {
  background: var(--color-text);               /* Near-black */
  border-bottom: var(--border-medium) solid var(--color-primary);  /* Red accent */
}
```
Gas Town's header (lines 189-193) establishes authority immediately. Dark backgrounds communicate seriousness. The 3px red border is a BRAND MARK -- it says "this is a system, not a one-off." The stats bar (lines 229-257) adds depth to the header: Author, Date, Stage Req, Engagement. Four metadata fields in mono-uppercase. The reader perceives: "this page was produced by an infrastructure."

### Where Gas Town's Authority Excels

Gas Town's authority score is its second-highest dimension (Report 52 rates "Spatial Confidence" at 3.5/5). The spacing arc, type hierarchy, 2-zone DNA, and dark header/footer all communicate professional confidence. The reader feels: "this was made by someone who knows what they are doing."

### Where Authority Becomes a Liability

Authority without surprise or delight becomes STIFFNESS. Gas Town's consistent vocabulary never breaks form. Every zone uses the same callout pattern, the same label convention, the same spacing idiom. The reader feels: "this is professional" but not "this is inspired." Authority creates the BASELINE against which surprise and delight register. Without surprise and delight, authority is just formality.

This is the "professionally stiff" finding from the richness research (MEMORY.md): "Vocabulary alone maxes out at 'professionally stiff' -- compositional fluency requires metaphor + agent collaboration."

---

## 4. WHAT CSS CREATES EARNED CLOSURE

### Definition
Earned closure = the sense that the page has CONCLUDED, not merely STOPPED. The reader finishes scrolling and feels: "that was complete." Earned closure requires the ending to REFERENCE the beginning, creating a structural rhyme that confirms the page was composed as a whole.

### The Mechanics of Earned Closure

**Closure is earned, not given.** A footer that says "Copyright 2026" is closure by convention. A footer that ECHOES the header's visual language, while TRANSFORMING it, is earned closure. The transformation signals: "the page took you somewhere and brought you back, but you are different now."

### Specific CSS Techniques

**1. Header-footer bookending with variation.**
```css
/* Header: OPENING statement */
header {
  background: var(--color-text);
  border-bottom: 3px solid var(--color-primary);
  /* Header has stats bar, subtitle, full metadata */
}

/* Footer: CLOSING echo */
footer {
  background: var(--color-text);           /* SAME dark background */
  border-top: 3px solid var(--color-primary);  /* MIRRORED border direction */
  /* Footer has tags, links, title echo -- DIFFERENT content, SAME form */
}
```
Gas Town implements this (header lines 189-257, footer lines 922-997). The header has `border-bottom: 3px solid primary`; the footer has `border-top: 3px solid primary`. Same background, mirrored border. The header has "KortAI / Orchestration / 009" in mono; the footer has "End Dispatch / 009" in mono. The "009" is a shared reference that creates a closed loop. This IS earned closure.

But Gas Town's closure is ADEQUATE, not EXCEPTIONAL. Here is why:

**2. Footer content that RESOLVES the header's promise.**

Gas Town's header says: "Steve Yegge's factory for coding agents." The footer has links and tags. It does NOT have a closing statement that resolves the opening promise. Compare to the Flagship crystallization (Report 55, viewport 11-12):

> "The footer's echo of the header creates a sense of enclosure: 'you are back where you started, but you have been somewhere.'"

An earned-closure footer would include:

```html
<div class="footer-closing">
  <p class="footer-closing__text">
    The colony is running. The ants are coordinated.
    The question is no longer "how good is one agent?"
    The question is "how many can you orchestrate?"
  </p>
</div>
```

```css
.footer-closing {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: var(--border-light) solid var(--color-text-secondary);
}

.footer-closing__text {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 40ch;
  color: var(--color-background);
  opacity: 0.85;
}
```

This closing statement TRANSFORMS the opening dispatch's "nature prefers colonies over ants" into a forward-looking question. The reader feels the loop close. Gas Town's footer has "Gas Town -- Factory for Coding Agents" in display serif (line 943-946), which echoes the title but does not transform it.

**3. The density arc's resolution.**

Earned closure requires the page's density trajectory to complete its arc. Gas Town's arc is OPENING (sparse) -> DEEPENING (moderate) -> DEEPENING (dense) -> RESOLVING (moderate). The resolution is adequate: padding returns from 32px to 32px/48px (top/bottom), font-weight returns from 600 to 400, letter-spacing returns from 0.03em to 0. The reader feels the compression release.

But the arc does NOT return to the opening's sparsity. Zone 1 has 64px/80px padding. Zone 4 has 32px/80px top padding, 48px bottom. The reader does not feel a FULL return -- just a partial release. A Flagship arc would bring the final zone to near-opening sparsity (56px-64px vertical padding) before the footer, creating a sense of "returning home."

**4. Visual motif recurrence.**

The strongest earned closure uses a visual element from the opening in a new context at the close:

```css
/* Opening: drop cap in red */
.dispatch-opening::first-letter {
  color: var(--color-primary);
  font-size: 3.5em;
}

/* Closing: the footer title's first letter echoes the drop cap */
.footer-title::first-letter {
  color: var(--color-primary);
  font-size: 1.5em;       /* Smaller -- diminished echo */
  float: left;
  margin-right: var(--space-1);
}
```

Gas Town does NOT do this. The drop cap appears once in Zone 1 and is never referenced again. The footer title uses display serif italic (line 944-946) but no drop cap echo. The visual motif that opened the page (red drop cap creating the transition from header to content) has no closing counterpart. This is a missed opportunity for earned closure.

---

## 5. GAS TOWN vs CD-006: EMOTIONAL ARC COMPARISON

### Gas Town's Emotional Arc (3.5/5)

| Viewport | Position | Emotion | CSS Driver | Intensity |
|----------|----------|---------|-----------|-----------|
| 1 (0-900) | Header + Z1 opening | AUTHORITY + WARMTH | Dark header, cream body, drop cap in red | 4/5 |
| 2 (900-1800) | Z1 core quote + source meta | HOOK -- "this person has something to say" | Solid-offset depth effect on quote | 3.5/5 |
| 3 (1800-2700) | Z2 opens, stages table | ENGAGEMENT -- structured learning | 3px border-top = hard cut, table layout | 3/5 |
| 4 (2700-3600) | Z2 architecture, file tree | ORIENTATION -- spatial understanding | File tree component, bento grid | 3/5 |
| 5 (3600-4500) | Z2 roles grid | RECOGNITION -- "ah, hierarchy" | Bento grid with span-2 Mayor card | 3/5 |
| 6 (4500-5400) | Z3 opens, doctrine callout | COMPRESSION -- denser, more urgent | Background shift +15 RGB, font-weight 600 | 3.5/5 |
| 7 (5400-6300) | Z3 threat assessment | TENSION -- warnings, stakes | Coral callout, amber callout, dense text | 3.5/5 |
| 8 (6300-7200) | Checkpoint bar + Z4 opens | RELEASE -- "we're through the hard part" | Checkpoint separator, lighter background | 3/5 |
| 9 (7200-8100) | Z4 extensions, upgrades | PRACTICAL -- "here's what to do" | Extension cards, numbered list | 2.5/5 |
| 10 (8100-9000) | Z4 mental model, code block | GROUNDING -- "the big picture" | Mental model callout, code deployment | 3/5 |
| 11 (9000-end) | Footer | COMPLETION | Dark footer mirrors header | 3/5 |

**Arc shape:** Gas Town's emotional arc looks like a PLATEAU with a mild compression peak:

```
Intensity
  4  |  X
  3  |  X X X X X X X   X
  2  |              X
  1  |
     +----+--+--+--+--+--+--+--+--+--+--
       V1  V2 V3 V4 V5 V6 V7 V8 V9 V10 V11
```

The opening (V1-V2) is the strongest moment: dark header + drop cap + solid-offset quote create genuine ARRIVAL authority. Then the arc flattens to a consistent 3/5 through most of the page, with a mild compression peak at V6-V7 (Zone 3) and a dip at V9 (Zone 4 practical content). The footer closes at 3/5.

### CD-006's Emotional Arc (Estimated)

| Phase | Emotion | CSS Driver | Intensity |
|-------|---------|-----------|-----------|
| Header + S1 | AUTHORITY + DELIGHT | Dark header, drop cap, geological strata, Core Abstraction | 4.5/5 |
| S2 | ENGAGEMENT | Z-hero grid, Q&A blocks with red borders | 4/5 |
| S3 | RECOGNITION | Bento grid, token reference cards | 3.5/5 |
| S4 | DEEPENING | Decision matrix, Reasoning component | 4/5 |
| S5 | TECHNICAL IMMERSION | Code blocks, step-by-step | 3.5/5 |
| S6 | VERIFICATION | Bento grid, audit checklist | 3/5 |
| S7 | SPATIAL SURPRISE | Choreography hub/spoke | 4/5 |
| S8 | CLOSURE | Core Abstraction bookend, footer mirror | 4/5 |

**Arc shape:** CD-006 looks like ALL PEAKS:

```
Intensity
  5  |
  4  |  X X   X     X     X
  3  |      X   X X   X
  2  |
  1  |
     +----+--+--+--+--+--+--+--
       S1  S2 S3 S4 S5 S6 S7 S8
```

CD-006's emotional arc has no valleys. Every section introduces a new axis pattern and component set, keeping intensity at 3.5-4.5 throughout. The problem identified in Report 54 (Part 5): "CD-006 has ALL PEAKS and NO BASELINE." The emotional arc is UNIFORMLY HIGH, which paradoxically feels FLAT -- like a concert where every song is a finale.

### The Critical Comparison

| Property | Gas Town | CD-006 |
|----------|----------|--------|
| Opening authority | 4/5 -- strong header/drop cap | 4.5/5 -- stronger with Core Abstraction |
| Peak surprise | 1 moment (solid-offset quote) | 0 moments (everything is at peak level) |
| Compression/tension | Zone 3 mild compression | Uniform -- no compression |
| Release | Zone 4 partial release | None -- S7 choreography creates PEAK not release |
| Earned closure | 3/5 -- bookending adequate | 4/5 -- bookending + Core Abstraction echo |
| Valley (deliberate silence) | 0 | 0 |
| Overall shape | Plateau with mild hump | Flat at high altitude |

**Gas Town is more emotionally SHAPED than CD-006** despite having lower absolute peak intensity. Gas Town's 4-zone density arc (OPENING->DEEPENING->DEEPENING->RESOLVING) creates a mild but perceptible emotional trajectory. CD-006's section-independent design creates no emotional trajectory at all -- each section is an independent emotional event.

**The "conservative amplitudes" verdict (3.5/5):** Gas Town HAS an arc shape. The problem is not shape but AMPLITUDE. The difference between the emotional peak (V1, 4/5) and the emotional trough (V9, 2.5/5) is only 1.5 points. A Flagship page would have a 3+ point difference between climax and valley.

---

## 6. CAN EMOTIONAL ARC BE SPECIFIED WITHOUT DESTROYING SPONTANEITY?

### The Paradox

"Create surprise in section 4" is self-defeating. If the builder knows surprise is expected in section 4, and the reader knows the builder was instructed to create surprise, the surprise is MANUFACTURED not FELT. This is the same specification paradox identified for compositional fluency (Report 57, Section 3).

### What CAN Be Specified

**1. Amplitude requirements (not location).**
```
RULE: The emotional arc must have at least one moment where
intensity drops to 2/5 or below (valley) and at least one
moment where intensity rises to 4.5/5 or above (peak). The
peak and valley must be separated by at least 2 viewports.
```
This tells the builder "create dynamic range" without specifying WHERE the peaks and valleys go. The builder decides based on content where the valley naturally belongs (perhaps after a dense reference section) and where the peak naturally belongs (perhaps at the central argument).

**2. Density trajectory with a named reversal point.**
```
RULE: The density arc must include at least one REVERSAL --
a point where the direction changes from compression to
expansion or vice versa. The reversal must be marked by a
structural element (checkpoint bar, transition component,
or zone border change).
```
This produces emotional shape (compression builds tension, release creates catharsis) without prescribing where the reversal happens.

**3. One full-dark zone in the body content.**
```
RULE: At least one section within the body (not header or
footer) must use dark background with light text. This zone
should contain the page's central insight or climax moment.
Position: after the page's midpoint.
```
This is prescriptive but creates surprise RELIABLY because the reader's expectation of light-background content is established by the first half of the page. The dark zone inverts that expectation at a point where the reader has built strong predictions.

**4. Vocabulary violation budget.**
```
RULE: The page may include up to 3 "vocabulary violations" --
moments where a single dimension of the established visual
vocabulary is deliberately reversed. Examples: a right-border
element in a left-border system, a sans-serif heading in a
serif-heading system, a full-bleed element breaking the
container. Each violation must resolve into the vocabulary
within 1 viewport.
```
This gives the builder PERMISSION to create surprise without specifying what the surprises should be. The budget of 3 prevents chaos (too many violations) while ensuring at least some spontaneity.

### What CANNOT Be Specified

**1. The specific content of the surprise.** "Put a 3-column asymmetric grid with 2fr/1fr/1fr proportions at position 60% down the page" is not surprise specification -- it is layout specification. Surprise must emerge from the builder's judgment about what would be unexpected GIVEN what came before.

**2. Delight details.** "Add `font-variant-numeric: tabular-nums` to the data tables" is a delight instruction. But the essence of delight is that it feels DISCOVERED, not MANDATED. A checklist of micro-refinements produces compliance, not care. Better: "The page should include at least 5 terminal craft decisions beyond the minimum functional requirements. Examples include but are not limited to: hover states, print styles, numeric variants, selection styling, first/last child treatment."

**3. Emotional timing.** The WHEN of emotional beats must come from the content. A page about "warnings from the author" naturally places tension in the warning section. A page about "beautiful mathematics" naturally places delight in the proof section. Specifying "tension at viewport 7" ignores content.

### The Answer

**Emotional arc can be specified at the STRUCTURAL level (amplitude requirements, reversal points, dark-zone minimum, violation budget) but not at the EXPERIENTIAL level (what specific feeling, where specifically, what specific technique).** The structural specification creates the CONDITIONS for emotional arc. The builder's compositional judgment fills those conditions with content-appropriate feelings.

This maps to the procedural-vs-dispositional recipe distinction: structural specification is PROCEDURAL (do these things in this order). Emotional experience is DISPOSITIONAL (compose with this attitude, this awareness, this sensitivity to what the reader is feeling at each point).

---

## 7. EMOTIONAL ARC AND COMPOSITIONAL FLUENCY: THE RELATIONSHIP

### Can You Have Emotional Arc Without Compositional Fluency?

**Yes, partially.** A page with independently deployed mechanisms can still have emotional arc through CONTENT sequencing. If the content itself has a narrative trajectory (from gentle introduction to dramatic revelation to practical resolution), the reader feels an emotional arc even if the CSS treatment is uniform. A well-written essay with h2 headings and body text has emotional arc through prose alone.

But CSS-driven emotional arc (where the FORM amplifies the content's emotional trajectory) requires compositional fluency. The reason: emotional arc through form requires mechanisms to CO-VARY with the content's emotional position. In the dense/tense section, spacing compresses, backgrounds deepen, borders thicken, typography gets heavier -- ALL AT ONCE. This co-variation IS compositional fluency (multi-channel encoding). Without it, the CSS treatment is emotionally neutral regardless of the content's emotional charge.

**Gas Town demonstrates this partially.** Zone 3 (dense, urgent content) has font-weight 600, letter-spacing 0.03em, compressed padding (32px/64px), and a darker background. Four channels co-vary with the content's urgency. This is the Z2->Z3 boundary that Report 52 identifies as the only genuine multi-coherence instance. The emotional peak at V6-V7 coincides with this multi-coherent boundary. Where multi-coherence exists, emotional arc is amplified. Where it is absent, emotional arc relies on content alone.

### Can You Have Compositional Fluency Without Emotional Arc?

**Yes, easily.** A page where all mechanisms co-vary along a single density gradient (backgrounds get progressively darker, borders thicken, spacing compresses, typography gets heavier) has compositional fluency (high CCS) but may have a MONOTONIC emotional arc (constant increase in intensity with no release, no surprise, no delight). This is the "uniform excellence is monotony" finding from Report 55.

Compositional fluency is about MECHANISM RELATIONSHIPS. Emotional arc is about READER EXPERIENCE. A perfectly coupled set of mechanisms that all move in one direction creates a "steamroller" emotional experience: impressive but exhausting.

### The Synthesis

**Emotional arc REQUIRES compositional fluency at specific moments (the boundaries where feeling changes) but NOT throughout the page.** The emotional peak needs multi-channel encoding (all channels say "this is the climax"). The emotional valley needs multi-channel encoding in the opposite direction (all channels say "rest here"). The transitions between emotions need coherent channel shifts.

But WITHIN emotional phases (the sustained engagement zone, the sustained tension zone), compositional fluency is less critical. The reader is in a stable emotional state; the CSS just needs to MAINTAIN that state, which single mechanisms can do independently.

**This means emotional arc is best served by CONCENTRATED compositional fluency at 3-5 critical points (opening, hook, climax, release, closure) rather than DISTRIBUTED compositional fluency everywhere.** The Flagship crystallization (Report 55) implicitly describes this: the viewport-by-viewport walkthrough has maximum mechanism interaction at boundary points (header->body, established->probable, speculative->open questions, open questions->closure) and quieter mechanism activity within zones.

---

## 8. A FLAGSHIP 5/5 EMOTIONAL ARC: WHAT IT WOULD FEEL LIKE

### The Scroll Experience

Assume a 12-section research synthesis page at 1440x900. Content: compositional intelligence in design systems. Pervading metaphor: GEOLOGICAL SURVEY.

**ARRIVAL (Viewports 1-2): Authority + Anticipation**

You see the dark header with generous padding (48px vertical). The title is large (2.5rem) but not screaming. Below: warm cream. A drop cap in the primary red. The opening paragraph says something specific, not generic. The "You Are Here" box has a teal left border and says: "This synthesis draws from 337 findings. You are reading the map of what we learned."

CSS: Dark header (48px padding, 4px red bottom border), cream body (#fefcf3), drop cap (3.5em, primary red), generous body spacing (48px section padding, 16px/1.7 body text).

**What you feel:** Safety + authority. The page is large and confident enough that you trust it. The warmth of the cream says "take your time." The drop cap says "this was composed." You lean in slightly.

Emotional intensity: 4/5.

**THE HOOK (Viewports 3-4): Delight + Curiosity**

The first DESIGNED MOMENT: a CSS-only diagram of four nested boxes, each with decreasing border weight (4px -> 3px -> 1px -> none) and shifting backgrounds (warm cream -> cool cream -> white -> dark). The diagram IS the metaphor made visible. No label needed -- the nesting says "layers of certainty."

CSS: Nested `.stratum` boxes with progressive border thinning, background cooling, and padding compression. The innermost box (dark background, cream text) inverts the page's color scheme for the first time. This is the FIRST surprise -- a dark element within the body content, small enough to be intriguing rather than disruptive.

**What you feel:** Delight. "This page is not a report. It is an ARGUMENT." The diagram teaches you how to read the rest of the page. You feel the structure has a plan. Curiosity rises: "what else will this page do?"

Emotional intensity: 4.5/5.

**ENGAGEMENT (Viewports 5-7): Trust + Substance**

Two sections of established findings. Warm cream backgrounds, 4px borders, 48px padding. A 3-column bento grid of metrics (each cell with mono label + large number). A pull-quote in display serif italic, indented 40px with 1px top/bottom rule. A callout-essence box deepening the argument.

CSS: Bento grid with alternating cell backgrounds (#f0ebe3 / #fefcf3). Pull-quote at 1.125rem with `max-width: 50ch` (narrower than body -- creates width variation). Callout with 4px border-left and 2-zone DNA.

**What you feel:** Trust. The page earned your attention with the hook. Now it rewards attention with SUBSTANCE. The bento grid is not a gimmick -- it presents data BETTER than paragraphs. You feel: "this page knows what it is doing."

Emotional intensity: 3.5/5 (deliberately lower than the hook -- settling into sustained engagement).

**DEEPENING (Viewports 8-9): Focus + Weight**

The TRANSITION: 80px of white (#f5f2ec) with a single centered line in mono: "Crossing into less certain territory." Below: the probable findings. Background cools by 15 RGB. Border thins to 3px. Font size drops 1px to 15px. Spacing tightens (40px padding). Letter-spacing opens to 0.005em.

A golden-ratio Z-pattern grid (1.618fr / 1fr). The primary argument in the larger cell, supporting evidence in the smaller. A decision matrix with open-grid table styling.

CSS: Four channels shift at this boundary (background, border, typography, spacing). The Z-pattern grid creates a PRIMARY/SECONDARY hierarchy that mirrors the content's uncertainty structure.

**What you feel:** The SHIFT. You may not name what changed, but the page feels different. Cooler. More cautious. The content is weighing probabilities, and the form is doing the same. Attention deepens.

Emotional intensity: 3/5 (deliberately the VALLEY -- intensity drops to create contrast for the climax).

**SURPRISE (Viewport 10): Arrest + Reorientation**

A 3px primary-red horizontal rule with 48px whitespace above and below. Then: the speculative zone. Background goes WHITE (#ffffff) -- the coolest light value. Border thins to 1px in light tan. Letter-spacing opens to 0.01em. F-pattern layout (no grids -- reduction in layout complexity mirrors reduction in certainty).

A single code block showing a failed experiment's output (dark background, syntax-highlighted). Below: a callout-gotcha explaining why it failed.

CSS: F-pattern (standard flow, no grid). Sparse components -- only the code block and one callout. The ABSENCE of designed moments is the surprise. After 9 viewports of increasing visual richness, the page goes quiet.

**What you feel:** Surprise from SILENCE. The page stopped showing off. It is saying: "we have less to say here, and we are honest about it." The speculative zone earns credibility through spareness. You lean in CLOSER because the design is no longer carrying you.

Emotional intensity: 2.5/5 (the VALLEY -- the lowest point).

**CLIMAX (Viewports 11-12): Impact + Insight**

The full-dark zone. Background #3d3d3d, cream text. 64px padding. NO border-left (uncertainty has no edge). Three "spoke" boxes arranged around a central thesis in display serif italic at 1.125rem. The thesis is the page's deepest insight. The spokes are three open questions radiating from it.

This is the page's INVERSION: everything that was light is now dark, everything that was tight is now spacious, everything that was structured is now centered and radial. The choreography pattern creates a hub-and-spoke STAR that says: "this is the center of gravity."

CSS: Full-dark section (`background: var(--color-text); color: var(--color-background)`). Maximum padding (64px). Choreography grid. Centered thesis with `max-width: 680px; margin: auto`. Spoke cards with 1px cream borders on transparent dark background.

**What you feel:** THIS IS THE PEAK. The dark zone is the page's heart. The open questions are not loose ends -- they are the POINT. The page descended from known to unknown, and the unknown is where the real insight lives. The physical experience: your eyes adjust to the dark zone. The cream text on dark background changes your physiological engagement.

Emotional intensity: 5/5.

**RELEASE (Viewports 13-14): Exhalation + Resolution**

A bridge transition: gradient zone at #f0ebe3 (warm gray) with a pull-quote: "The recipe's job is not to contain the answer but to create the silence in which the builder can hear the question." Then: practical implications in probable-zone styling (cool cream, 3px borders, Z-pattern). Then: conclusions in established-zone styling (warm cream, 4px borders, returning to generous spacing).

CSS: The page ASCENDS back through the strata. Dark -> cool -> warm. The spacing expands. The borders thicken. The typography returns to 16px/1.7. The reader is being carried back to the surface.

**What you feel:** Release. The tension of the dark zone resolves. The practical section grounds the speculative insight. The conclusions return to the opening's warmth. You are breathing more slowly.

Emotional intensity: 3.5/5 (rising from the valley, but NOT as high as the climax -- asymmetric resolution).

**EARNED CLOSURE (Viewport 15): Completion + Memory**

The footer echoes the header: dark background, 3px primary border-top, mono meta text. But the footer title uses display serif italic, and its first letter has a subtle red accent -- echoing the opening drop cap in diminished form. A provenance note in secondary gray. The page is BOOKENDED.

CSS: Footer mirrors header in background + border. Footer title echoes header title in typography. Provenance echoes source-meta from Zone 1. Tags provide navigational closure (where does this page fit in the system?).

**What you feel:** Completion. "That was a whole thing." Not just information absorbed but a JOURNEY taken. The echo of the header confirms: this was composed, not assembled. The diminished drop cap echo says: "the ideas from the opening have been explored, deepened, and resolved."

Emotional intensity: 4/5 (elevated by the header echo -- the bookend activates memory of the opening authority).

### The Arc Shape

```
Intensity
  5  |                          X
  4  |  X X                       X X
  3  |      X X X X
  2  |              X X
  1  |
     +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--
       V1 V2 V3 V4 V5 V6 V7 V8 V9 V10 V11 V12 V13 V14 V15
                                    ARRIVAL  HOOK  ENGAGE  DEEPEN  SURPRISE  CLIMAX  RELEASE  CLOSE
```

This is a DRAMATIC ARC with 2.5 points of dynamic range (5.0 peak - 2.5 valley). Compare:
- Gas Town: 1.5 points dynamic range (plateau)
- CD-006: ~1 point dynamic range (uniformly high)
- Flagship 5/5: 2.5 points dynamic range (full arc)

---

## 9. DESIGNED MOMENTS AND EMOTIONAL ARC

### The Relationship

"Designed moments" (Report 55, Section 5) are viewports where at least one element exhibits intentional compositional craft. The Flagship requires 90% designed-moment coverage. Emotional arc requires dynamic range.

These two requirements appear to CONFLICT: if 90% of viewports have designed moments (high intensity), how do you create valleys (low intensity)?

### The Resolution

**Designed moments vary in TYPE, not just presence.** A designed moment in the VALLEY zone is not a bento grid or choreography pattern -- it is a DELIBERATE ABSENCE. The speculative zone in the 5/5 arc above has a single code block and one callout. That IS a designed moment -- the RESTRAINT is the design. The builder chose to withhold mechanisms because the content is speculative, and the withholding is compositional (it creates contrast with the mechanism-rich zones above).

The designed-moment definition: "A viewport-sized region where at least one element goes BEYOND competent styling to exhibit intentional compositional craft." In the valley, the intentional craft is SILENCE -- the deliberate creation of visual rest. This passes the 90% threshold while allowing emotional valleys.

### How This Maps to Gas Town

Gas Town's designed moments:
- V1-V2: Drop cap + solid-offset quote (YES -- strong)
- V3-V5: Stages table + file tree + bento grid (YES -- competent)
- V6-V7: Dense callout stack with threat vocabulary (YES -- competent)
- V8: Checkpoint bar (MARGINAL -- is a single mono-text separator a designed moment?)
- V9: Extension cards (YES -- but low emotional intensity)
- V10: Mental model callout + code block (YES -- competent)
- V11: Footer (YES -- bookending)

Coverage: ~9/11 = 82%. Below the 90% Flagship threshold. And more critically: all designed moments are at the SAME emotional register (3/5 competent). There are no moments of 5/5 climax or 2/5 deliberate silence.

---

## 10. MASTER FINDINGS

### Finding 1: Emotional Arc Has Four Components

1. **AUTHORITY** (baseline confidence) -- established through consistent vocabulary, confident spacing, restrained type hierarchy. Gas Town: 3.5/5.
2. **SURPRISE** (prediction violation) -- established through vocabulary violations, scale breaks, color inversions, layout ruptures. Gas Town: 1.5/5.
3. **DELIGHT** (terminal craft) -- established through micro-refinements (hover states, typographic details, selection styling, print styles). Gas Town: 1.5/5.
4. **EARNED CLOSURE** (structural completion) -- established through header-footer bookending, motif recurrence, density arc resolution. Gas Town: 3/5.

Gas Town excels at authority and adequate closure. It is weak on surprise and delight. This produces the "conservative amplitudes" verdict: the arc EXISTS but its dynamic range is narrow.

### Finding 2: Dynamic Range Is the Key Metric

The difference between a 3.5/5 emotional arc (Gas Town) and a 5/5 arc (Flagship) is not AVERAGE intensity -- it is RANGE. Gas Town's range is 1.5 points (4.0 peak, 2.5 trough). Flagship's range is 2.5+ points (5.0 peak, 2.5 trough). The peak must go higher AND the valley must go lower. Conservative amplitudes means both peaks and valleys are pulled toward the center.

**Specifiable as:** "The emotional arc must have at least 2.0 points of dynamic range between its highest-intensity viewport and lowest-intensity viewport."

### Finding 3: Surprise Requires Pattern-Then-Violation Sequencing

Surprise cannot be specified as "create surprise in section N." It CAN be specified as: "establish the visual vocabulary in sections 1-3, then include at least one vocabulary violation in sections 4-8 that resolves within 1 viewport." This gives the builder freedom in WHAT to violate while ensuring that violation happens AFTER prediction establishment.

The most powerful single surprise technique: a full-dark zone within the body content. This should be a STANDARD Flagship requirement, not a creative option.

### Finding 4: Delight Is a Budget, Not a Checklist

Specifying "add tabular-nums to tables, hover states on rows, print styles" produces compliance, not delight. Better: "Include at least 5 terminal craft decisions beyond functional minimums." The builder discovers what details suit THIS page.

### Finding 5: Earned Closure Requires Motif Recurrence, Not Just Bookending

Gas Town's header-footer bookend (same dark background, mirrored 3px border) is adequate but not exceptional. Earned closure requires at least ONE visual motif from the opening to recur in diminished form at the close (e.g., drop cap echo in footer title, primary-red accent echoing header border in footer closing statement). This CAN be specified: "At least one visual element from the header or first section must echo in the footer in modified form."

### Finding 6: Emotional Arc Is Partially Independent of Compositional Fluency

Emotional arc CAN exist without full compositional fluency (content-driven emotional trajectory + adequate CSS variation). But AMPLIFIED emotional arc (where form dramatically reinforces feeling) requires compositional fluency at KEY BOUNDARIES -- specifically at the climax entrance, the valley, and the release. Distributed fluency (everywhere) is less important for emotional arc than concentrated fluency (at the 3-5 critical emotional transition points).

### Finding 7: The Conservative-Amplitude Problem Is a MODEL Tendency

Opus defaults to moderate, safe values. Emotional arc requires BOLD values at specific moments: 64px padding where 32px is normal (grand spatial pause), background delta of 200+ RGB (dark zone within light body), scale break of 2.5x (pull-quote at 40px in 16px body). The conventions brief should include EXPLICIT amplitude targets for the 2-3 highest-intensity moments: "At the climax boundary, background must shift by at least 150 RGB points. Padding must increase by at least 50% over the adjacent zone."

---

**END REPORT B3**

*Emotional arc is the reader's feeling-sequence through the scroll: authority, surprise, delight, earned closure. Gas Town scores 3.5/5 -- strong authority and adequate closure, but conservative amplitudes, missing surprise (no dark body zone, no vocabulary violations, no scale breaks), and minimal delight (functional hover/selection but no typographic micro-refinement or terminal craft). The key metric is DYNAMIC RANGE between emotional peaks and valleys (Gas Town: 1.5 points, Flagship target: 2.5+). Can be partially specified through amplitude requirements, reversal points, dark-zone minimums, and violation budgets -- but not through specific emotional prescriptions. Emotional arc requires compositional fluency at critical transition points but not throughout the page.*
