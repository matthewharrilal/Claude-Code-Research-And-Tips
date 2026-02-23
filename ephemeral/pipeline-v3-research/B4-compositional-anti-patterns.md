# B4: Compositional Anti-Patterns — How Mechanisms Combine Badly

**Author:** anti-pattern-investigator (Opus 4.6)
**Date:** 2026-02-22
**Task:** #35 — Deep investigation of compositional anti-patterns at page level
**Files Read:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,219 lines, all 18 mechanisms)
- `ephemeral/handoff-research/47-mechanism-provenance.md` (394 lines, Gas Town provenance chain)
- `ephemeral/handoff-research/57-compositional-fluency-deep.md` (509 lines, CD-006 vs Gas Town coupling analysis)
- `ephemeral/handoff-research/50-adversarial-integration-gaps.md` (330 lines, integration gap analysis)
- `ephemeral/pages/gas-town-steve-yegge/output.html` (1,100+ lines CSS)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (900+ lines CSS)

---

## 0. WHY COMPOSITIONAL ANTI-PATTERNS MATTER

The mechanism catalog documents 18 individual mechanisms and a handful of "compatible combinations" and "incompatible combinations" (catalog lines 930-940). This covers exactly 3 incompatible pairs:
- Solid Offset Depth + box-shadow (soul violation)
- Border-Weight Gradient + uniform borders (contradiction)
- Dense/Sparse Alternation + uniform padding (contradiction)

These are trivial self-contradictions. The REAL combinatorial danger space is much larger. With 18 mechanisms, there are 153 possible pairs, 816 possible triples. The catalog addresses 3 pairs out of 153 — 2% coverage. The remaining 98% is a minefield that builders navigate without guidance.

This report identifies **14 compositional anti-patterns** — specific mechanism combinations that produce perceptual failure when co-deployed. Each anti-pattern is documented with: the CSS clash, what it looks like, how to prevent it, and whether it can be detected programmatically.

---

## THE 14 ANTI-PATTERNS

---

### AP-01: DENSITY STACKING (Information Saturation)

**Mechanisms involved:** #2 (2-Zone Component DNA) + #5 (Dense/Sparse Alternation) + #12 (Progressive Disclosure) + #4 (Spacing Compression)

**The CSS clash:**

When a section is designated as "dense" by the page-level density arc (#5, #4), components inside that section follow the 2-zone DNA pattern (#2) with their own internal dense/sparse structure, AND the content uses progressive disclosure (#12) which creates its own density gradient within the section:

```css
/* Page-level: this zone is DENSE */
.zone--dense { padding: var(--space-4); } /* 16px */

/* Component-level: callout has dense body */
.zone--dense .callout { padding: var(--space-4) var(--space-5); }
.zone--dense .callout__body { line-height: 1.7; }

/* Progressive disclosure: phases compress WITHIN the dense zone */
.zone--dense .phase--climax { padding: var(--space-2); } /* 8px */
```

Three density systems operating at three scales ALL say "compress." The result is triple-compressed content that becomes illegible — padding collapses to 8px, line-height crowds, and the callout's internal structure loses its sparse/dense distinction because the surrounding zone already consumed the sparse range.

**What it looks like:** A wall of text where callout labels merge into body text, progressive disclosure phases have no visible boundary, and the reader cannot distinguish component boundaries from section boundaries. The section reads as undifferentiated prose despite deploying 4 mechanisms.

**Evidence from artifacts:**

Gas Town Zone 3 approaches this pattern: it applies `letter-spacing: 0.03em` zone-wide, `font-weight: 600` to all paragraphs, AND compresses table padding (`.zone-3 .data-table td { padding: var(--space-2) var(--space-4); }`). However, Gas Town avoids the full anti-pattern because callout padding is NOT zone-compressed — callouts use `padding: var(--space-4) var(--space-5)` regardless of zone. This is an accidental save, not a deliberate avoidance.

CD-006 avoids this entirely because it has uniform section-level padding (`var(--space-16)` = 64px for all sections), which means component-level density is never squeezed by section-level compression. Report 57 identifies this as CD-006's fluency failure ("no density arc"), but it also means CD-006 never triggers AP-01.

**Prevention:**

Density budget rule: At any nesting depth, the INNERMOST element must have at least `var(--space-3)` (12px) padding. If page-level density + component-level density + disclosure-level density would produce < 12px at any point, the OUTERMOST layer must widen.

Formal rule: `min(zone_padding, component_padding, disclosure_padding) >= 12px`

**Programmatic detection:**

YES. Parse the CSS cascade for each element. If computed padding in any dimension < 12px at 1440px viewport, flag. Requires computing the full cascade (zone -> component -> disclosure phase), which is tractable for static HTML.

---

### AP-02: COLOR ZONE CONFLICT (Hierarchy Disagreement)

**Mechanisms involved:** #7 (Zone Background Differentiation) + #9 (Confidence/Priority Encoding via Color) + #1 (Border-Weight Gradient)

**The CSS clash:**

Zone backgrounds encode IMPORTANCE (warm cream = overview/sparse, deep earthy = dense/important). Border-weight encodes HIERARCHY (4px = highest priority). Color encoding marks URGENCY (coral = threat, amber = caution). When these three systems disagree about what's "primary," the reader receives contradictory signals:

```css
/* Zone says: this is the DEEP zone (most important by position) */
.zone-3 { background: var(--bg-z3); } /* #E8E0D4, deepest */

/* But the callout says: this is a low-priority INFO note */
.zone-3 .callout--intel { --accent-color: var(--accent-blue); }
.zone-3 .callout--intel { border-left: 4px; } /* 4px = highest priority */
```

The zone's deep background implies "most important content here." The blue accent implies "informational, not urgent." The 4px border implies "highest priority." Three hierarchy signals, three contradictory rankings.

**What it looks like:** A reader in the "deepest" zone sees a blue (cool, informational) callout with the heaviest border weight. The zone atmosphere says "urgent" but the component says "calm information." The border says "critical" but the color says "background context." The reader cannot determine whether to treat this as important or supplementary.

**Evidence from artifacts:**

Gas Town has this exact combination in Zone 3 (deepest zone): `.callout--intel` with `--accent-color: var(--accent-blue)` appears in the dense field-intelligence zone. The blue accent reads as "informational context" while the zone reads as "most compressed, most urgent." However, Gas Town PARTIALLY avoids the conflict because Zone 3's density (font-weight 600, letter-spacing 0.03em) makes even "informational" callouts feel urgent — the zone atmosphere overrides the component accent.

**Prevention:**

Color-zone alignment rule: In the densest zone, deploy only HIGH-urgency callout types (coral/threat, amber/caution). Reserve blue/intel for sparse zones where informational tone matches atmospheric tone.

Alternative: If content requires an intel callout in a dense zone, downgrade its border-weight from 4px to 1px to signal "supplementary information IN a dense zone" rather than "critical information."

**Programmatic detection:**

PARTIAL. Can detect the co-occurrence of dense-zone backgrounds with low-urgency accent colors. Cannot automatically determine whether the content justifies the pairing. Binary test: If `bg_delta_from_lightest >= 15 AND accent-color == blue`, flag for manual review.

---

### AP-03: BORDER + SHADOW + BACKGROUND OVERLOAD (Visual Noise)

**Mechanisms involved:** #1 (Border-Weight Gradient) + #3 (Solid Offset Depth) + #7 (Zone Background Differentiation) + #10 (Border-Left Semantic Signal)

**The CSS clash:**

When a component has a 4px left border (#10), sits inside a zone with a distinct background (#7), uses border-weight gradient on its parent section (#1), AND has a solid offset depth effect (#3):

```css
/* Zone background creates first visual layer */
.zone-2 { background: var(--bg-z2); } /* #F0EBE3 */

/* Component has 4px left border (semantic signal) */
.callout { border-left: 4px solid var(--accent-coral); }

/* Component also has solid offset depth */
.callout::after {
  content: '';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: var(--color-text); /* #1A1A1A */
}

/* Section has border-weight gradient on its own container */
.zone-2 { border-top: 3px solid var(--color-primary); }
```

The reader sees: zone background (layer 1) + dark pseudo-element offset (layer 2) + component background (layer 3) + 4px coral left border (layer 4) + 3px red top border on section (layer 5). Five visual layers competing for attention in a single viewport.

**What it looks like:** The solid offset creates a dark rectangle behind the callout, the callout has its own coral border, the section has a red structural border — the component reads as "loud" rather than "deep." The depth effect intended by the solid offset is overwhelmed by the competing border signals. Instead of feeling like a featured element floating above the page, it feels like a CSS accident.

**Evidence from artifacts:**

Gas Town restricts solid offset to EXACTLY ONE element: `.core-quote`. This element appears in Zone 1 (lightest background), has no competing section borders, and is the sole emphasized element in its viewport. The constraint "deploy at most 1 solid offset per page" prevents this anti-pattern.

CD-006 similarly uses solid offset sparingly — on featured sections only, never on callouts that already have the 4px semantic border.

**Prevention:**

Mutual exclusion rule: Solid offset depth (#3) and border-left semantic signaling (#10) must NEVER co-occur on the same element. An element gets EITHER a 4px colored left border (semantic callout) OR a solid offset (featured emphasis), never both.

Depth budget: No more than 3 simultaneous visual layers at any element (background + 1 border + 1 depth technique). If the zone already contributes a background, the component may have at most 2 additional layers.

**Programmatic detection:**

YES. Check if any element has BOTH `border-left: 4px` AND `::after` with `position: absolute`. Also check if any element within a zone-bordered section has solid offset — count total visual layers.

---

### AP-04: WHITESPACE CONTRADICTION (Breathing vs Density)

**Mechanisms involved:** #5 (Dense/Sparse Alternation) + #4 (Spacing Compression) + Transition Grammar (96px max)

**The CSS clash:**

The density arc says "this zone is sparse — give it breathing room." Spacing compression says "importance correlates with space — high importance gets wide padding." But the transition grammar caps section gaps at 96px. When a sparse zone follows a dense zone:

```css
/* Dense zone ends */
.zone-3 { padding-bottom: var(--space-5); } /* 20px */

/* Checkpoint bar between zones */
.checkpoint-bar { padding: var(--space-2) var(--space-6); } /* 8px 24px */

/* Sparse zone begins */
.zone-4 { padding-top: var(--space-8); } /* 32px */
```

Total stacked gap: 20px + 8px + 32px = 60px. Well under the 120px cap. But if the RESOLVING zone needs to feel expansive after the compressed Zone 3, 60px may be insufficient to create the perceptual "release" that the density arc demands. Conversely, adding more space risks exceeding the stacked gap limit.

The deeper contradiction: breathing room (generous whitespace for atmosphere) fights with information density (content per viewport). The 120px cap was created to prevent the Ceiling experiment's catastrophic whitespace voids (70-80% blank). But the cap also prevents dramatic density releases that would make the density arc PERCEPTIBLE.

**What it looks like:** The "resolving" zone feels rushed — not enough spatial contrast from the preceding dense zone. Or: the builder adds extra whitespace for atmospheric effect, exceeding the 120px cap, and the page develops void stretches. Neither option is right.

**Evidence from artifacts:**

Gas Town demonstrates the tension explicitly. Zone 3 padding-bottom was REDUCED in Fix Cycle 1 from 32px to 20px specifically to close the stacked gap at the Z3->Z4 boundary. The fix comments note: "The 32px top echoes Z3's density before releasing to 48px bottom — a compression-then-release that serves the RESOLVING direction." The builder solved the contradiction by using ASYMMETRIC padding (32px top, 48px bottom) within Zone 4 to encode the release WITHIN the zone rather than at the boundary.

**Prevention:**

Asymmetric release pattern: When transitioning from dense to sparse, the release happens INSIDE the sparse zone (larger padding-bottom than padding-top) rather than between zones. This keeps the boundary gap under 120px while still creating perceptual release.

Formal rule: At a dense->sparse boundary, `zone_sparse.padding-top <= zone_dense.padding-bottom + transition_height`. The release is expressed through `zone_sparse.padding-bottom > zone_sparse.padding-top` (internal asymmetry).

**Programmatic detection:**

YES. Measure the stacked gap at each boundary (SC-10). Additionally: measure INTERNAL asymmetry in zones following a dense zone. If `zone.padding-bottom < zone.padding-top` after a dense zone, the release is missing — flag for review.

---

### AP-05: MECHANISM CANCELLATION (CSS Property Override)

**Mechanisms involved:** #4 (Spacing Compression) + #6 (Width Variation) + any component mechanism

**The CSS clash:**

Spacing compression says "important content gets more space." Width variation says "important content gets full width, secondary content gets narrow width." When both apply to the same element AND a component mechanism adds its own spacing:

```css
/* Spacing compression: this is IMPORTANT, gets wide spacing */
.zone--sparse { padding: 80px; }

/* Width variation: but this PARAGRAPH is secondary, gets narrow */
.zone--sparse p { max-width: 70%; margin-left: 5%; }

/* Component: callout inside this zone gets its own padding */
.zone--sparse .callout { padding: 24px 32px; margin: 24px 0; }
```

The zone's 80px padding says "expansive, important." The paragraph's 70% width says "secondary, channeled." These are contradictory importance signals on the same content. The callout's margin (24px) then ADDS to the zone's 80px padding, creating 104px of vertical space between the callout and the previous element — potentially exceeding stacked gap limits.

More fundamentally: the callout sits inside a "narrow channel" paragraph flow, but has its own padding that doesn't respect the channel. The callout breaks out of the 70% flow to fill the full zone width, destroying the width variation rhythm.

**What it looks like:** Paragraphs flow in a narrow column (70%), then a callout appears at full zone width, then paragraphs resume at 70%. The visual rhythm is interrupted — the callout feels like it escaped its container. The width variation mechanism has been CANCELLED by the component mechanism's independent sizing.

**Evidence from artifacts:**

CD-006 avoids this by using `max-width: 70ch` on paragraphs (character-width-based) while components have `margin: var(--space-6) 0` without max-width constraints. This creates an intentional breakout: prose is channeled, components are full-width. Whether this is a feature or a bug depends on intent — in CD-006 it reads as "components punctuate the text flow."

Gas Town uses `p { max-width: 70ch; }` globally but callouts are not paragraphs — they have their own width rules. The width variation between prose (70ch, roughly 70%) and callouts (full width minus padding) is visible and intentional.

**Prevention:**

Width inheritance rule: When width variation (#6) is deployed, components MUST either INHERIT the width constraint (sit within the narrow channel) or EXPLICITLY break it with a justified reason (e.g., callouts are structural landmarks that punctuate the text flow).

Formal: If `width_variation == true AND component.max-width == unset`, the component breaks the width rhythm. This is acceptable ONLY if the component has a visually distinct background or border that justifies the breakout.

**Programmatic detection:**

PARTIAL. Can detect elements with computed width > 80% of container when sibling elements have max-width constraints. Cannot automatically determine whether the breakout is intentional.

---

### AP-06: RHYTHM BREAKING (Spacing Conflict)

**Mechanisms involved:** #5 (Dense/Sparse Alternation) + #15 (Bento Grid) + #2 (2-Zone Component DNA)

**The CSS clash:**

Dense/sparse alternation creates a vertical rhythm (padding varies by section). Bento grid creates a horizontal rhythm (grid gaps, cell spacing). 2-zone component DNA creates a component-internal rhythm (sparse label, dense body). When these three rhythm systems meet in the same section:

```css
/* Section rhythm: dense zone, compressed */
.zone--dense { padding: var(--space-4); } /* 16px */

/* Grid rhythm: bento gap */
.bento-grid { gap: var(--space-6); } /* 24px */

/* Component rhythm: callout internal */
.bento-grid .callout { padding: var(--space-4) var(--space-5); } /* 16px 20px */
.callout__label { margin-bottom: var(--space-2); } /* 8px */
```

The zone says "16px is the spacing quantum here." The bento grid says "24px between cells." The callout says "16px/20px padding with 8px internal gap." Three different spacing quantums (16/24/16-20-8) operating simultaneously. The reader perceives no coherent rhythm — spacing values are close but not related.

**What it looks like:** Grid cells feel like they have more breathing room between them (24px gap) than the zone provides around them (16px zone padding). The grid "floats" inside the zone with inconsistent margins. Components inside grid cells have their own unrelated spacing. The overall impression is "things placed next to each other" rather than "a composed grid."

**Evidence from artifacts:**

Gas Town deploys bento grid in Zone 2 (`.roles-grid { gap: var(--space-6); }` = 24px) where zone padding is `40px 80px`. The grid gap (24px) is less than the zone padding (40px), creating a clear hierarchy: zone > grid > component. This works because the ratio is approximately 2:1.25:1 (40:24:~16 for component internals). The spacing quantum DECREASES with nesting depth.

CD-006 uses 4 different grids across sections, each with `gap: var(--space-6)` (24px) or `gap: var(--space-8)` (32px). Because CD-006 has uniform section padding (64px), the grid always sits comfortably inside. But report 57 identifies this as "grids as independent islands" — the grids don't relate to EACH OTHER rhythmically.

**Prevention:**

Nesting ratio rule: At each nesting depth, spacing decreases by at least 1.5x. Zone padding >= 1.5 * grid gap >= 1.5 * component internal padding.

Formal: `zone_padding / grid_gap >= 1.5 AND grid_gap / component_padding >= 1.5`

Example for a 32px grid gap: zone must have >= 48px padding, component internal spacing must be <= ~21px. The 4px spacing scale offers 20px (var(--space-5)) as the natural fit.

**Programmatic detection:**

YES. For any element nested 2+ levels deep, compute the ratio of container padding to child gap to grandchild padding. If any ratio is < 1.3, flag as potential rhythm conflict.

---

### AP-07: SCALE CONFUSION (Typography vs Spatial Contradiction)

**Mechanisms involved:** #11 (Typographic Scale Jumping) + #4 (Spacing Compression)

**The CSS clash:**

Typography scale says "bigger text = more important." Spacing compression says "more space = more important." When these two encoding systems point in OPPOSITE directions:

```css
/* Dense zone: COMPRESSED spacing (less space = less important? or more detailed?) */
.zone-3 { padding: var(--space-8) var(--space-16); } /* 32px 64px */

/* But the heading in the dense zone is LARGE (bigger = more important) */
.zone-3 h2 { font-size: var(--type-section); } /* 2rem = 32px */
```

Spacing says "this zone is compressed, secondary." Typography says "this heading is large, important." The reader receives simultaneous "important" (type size) and "secondary" (spatial compression) signals from the same content.

The contradiction is deeper than it appears: spacing compression (#4) encodes importance as `more space = more important`. But the density arc (#5) encodes narrative position as `less space = deeper/more detailed (not less important)`. These are different semantic dimensions (importance vs detail level) encoded through the same CSS property (padding). When typography contradicts the density arc, it exposes the ambiguity: does "compressed" mean "less important" or "more detailed"?

**What it looks like:** A heading in a compressed zone feels simultaneously important (it's big) and squeezed (the surrounding space is tight). The heading looks "trapped" rather than "prominent" or "embedded." The reader notices the spatial discomfort without being able to name it.

**Evidence from artifacts:**

Gas Town Zone 3 has `h2 { font-size: var(--type-section); }` (2rem = 32px) inside a zone with 32px padding. The heading and its containing space are numerically equal. This works because Gas Town uses a DIFFERENT semantic frame: Zone 3 is "dense intel territory" where big headings in tight spaces encode URGENCY (not importance). The heading feels LOUD, not trapped. The metaphor resolves the contradiction by reframing "compressed + large" as "intense" rather than "confused."

CD-006 avoids this because section padding is uniform (64px), so headings never feel squeezed. But this also means CD-006 never achieves the URGENCY effect that Gas Town gets from scale confusion deliberately harnessed.

**Prevention:**

Semantic alignment rule: Document whether spacing compression encodes IMPORTANCE (more space = more important) or DETAIL LEVEL (less space = deeper detail). If IMPORTANCE: type scale must match (larger headings in sparser zones). If DETAIL LEVEL: type scale contradiction is acceptable (large headings in dense zones = urgency).

The builder must decide ONCE and apply consistently. Mixing both encodings on the same page creates genuine confusion.

**Programmatic detection:**

PARTIAL. Can detect `font-size >= 2rem AND container.padding < 40px`. Cannot determine whether the combination is intentional urgency or accidental confusion without reading the density arc semantics.

---

### AP-08: PROGRESSIVE DISCLOSURE vs INFORMATION DENSITY (Hide-Show Contradiction)

**Mechanisms involved:** #12 (Progressive Disclosure) + #5 (Dense/Sparse Alternation) + #15 (Bento Grid)

**The CSS clash:**

Progressive disclosure hides content behind interaction (details/summary, scroll reveals). Dense/sparse alternation creates sections that demonstrate different density levels through visible content. Bento grid displays multiple items simultaneously for comparison. These three approaches to information presentation fundamentally conflict:

1. Progressive disclosure REMOVES visible content (density goes DOWN when collapsed)
2. Dense/sparse alternation requires visible content at varying density levels
3. Bento grid requires all items visible simultaneously for spatial comparison

When a bento grid section uses progressive disclosure WITHIN grid cells:

```css
.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

/* Grid cell uses progressive disclosure */
.bento-item details { /* collapsed by default */ }
.bento-item details[open] { /* expanded: grid cell grows */ }
```

Opening one cell's details expands it vertically. CSS Grid's row height is determined by the tallest cell. All cells in that row grow to match the expanded cell, creating vast whitespace in the non-expanded cells. The bento grid — designed for compact spatial comparison — develops unpredictable whitespace voids at arbitrary scroll positions.

**What it looks like:** A clean 4-column grid where one cell is expanded. The other three cells in that row have empty bottom halves. The grid row looks lopsided. The density that bento was supposed to create is destroyed by the disclosure expansion.

**Evidence from artifacts:**

Neither Gas Town nor CD-006 uses progressive disclosure inside bento grids. Gas Town's bento grid (`.roles-grid`) contains fixed-height role cards with no expandable content. CD-006's bento grid (`.bento-grid { grid-template-columns: repeat(4, 1fr); }`) has static content in each cell.

However, the mechanism catalog lists progressive disclosure and bento grid as both available for deployment. A builder following the "1+ mechanism per category" mandate could deploy both in the same section without guidance against combining them.

**Prevention:**

Layout-disclosure exclusion rule: Bento grid (#15) and progressive disclosure (#12) must not co-occur within the same section. If content needs both comparison layout AND expandable detail, use progressive disclosure BETWEEN bento sections (first show the grid overview, then disclose the details below the grid), never WITHIN cells.

**Programmatic detection:**

YES. Check if any `details` or `[aria-expanded]` element is a descendant of a `display: grid` container with `grid-template-columns` including `repeat` or multiple `fr` values.

---

### AP-09: DROP CAP + COMPONENT COLLISION (Float Wrapping)

**Mechanisms involved:** #16 (Drop Cap) + #2 (2-Zone Component DNA) + #3 (Solid Offset Depth)

**The CSS clash:**

Drop cap uses `float: left` on `::first-letter`. The float creates a rectangular exclusion zone. If a callout or other component follows within the float's vertical range:

```css
.dispatch-opening::first-letter {
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
}

/* If a callout appears within ~60px of the opening paragraph... */
.callout {
  border-left: 4px solid var(--accent-color);
  padding: 16px 20px;
}
```

The callout wraps around the drop cap's float. The 4px left border of the callout aligns with the drop cap's right margin rather than the container's left edge. The callout's visual weight (colored border, background) interacts with the drop cap's visual weight (large red letter) creating a visual collision.

Worse: if a solid-offset element follows the drop cap paragraph, the `::after` pseudo-element's absolute positioning interacts unpredictably with the float context.

**What it looks like:** The callout's left border appears indented to the right of where the reader expects it. The drop cap's red letter and the callout's colored border create two competing accent points in the same viewport. If solid offset is also present, the dark offset rectangle may clip behind or extend past the float exclusion zone.

**Evidence from artifacts:**

Gas Town prevents this by construction. The drop cap paragraph (`.dispatch-opening`) is followed by sufficient text content (~3 paragraphs) that the float clears before the `.core-quote` (solid offset) element appears. The core-quote has `margin: var(--space-10) 0` (40px top margin) which provides additional clearance.

CD-006 also places the drop cap early in a section with ample following text before any components appear.

**Prevention:**

Float clearance rule: After a drop cap paragraph, the next component (any element with `border-left: 4px`, `::after` pseudo-element, or `display: grid`) must have at least 3 full paragraphs of text OR a `clear: both` before it.

Formal: Drop cap paragraph must be followed by >= 150 words of body text before any component element.

**Programmatic detection:**

YES. Find `::first-letter` with `float: left`. Count subsequent sibling text content until the next component element. If word count < 150 or no `clear: both` intervenes, flag.

---

### AP-10: CALLOUT CACOPHONY (Same-Type Stacking)

**Mechanisms involved:** #2 (2-Zone Component DNA) + #9 (Confidence Encoding via Color) + #10 (Border-Left Semantic Signal)

**The CSS clash:**

When 3+ callouts appear consecutively without intervening body text:

```css
/* Callout 1: threat (coral) */
.callout--threat { --accent-color: var(--accent-coral); border-left: 4px; }

/* Callout 2: caution (amber) -- immediately following */
.callout--caution { --accent-color: var(--accent-amber); border-left: 4px; }

/* Callout 3: doctrine (purple) -- immediately following */
.callout--doctrine { --accent-color: var(--accent-purple); border-left: 4px; }
```

Each callout has identical structure (2-zone DNA: label + body), identical border weight (4px), and a different accent color. The color differentiation is the ONLY distinction. Vertically stacked, these create a "traffic light" effect — three colored left borders in a column. The reader perceives a list of equally-important warnings rather than distinct semantic signals.

The deeper problem: RESEARCH-SYNTHESIS identified "callout scarcity (1-2 per page)" as a Top 10 finding. At 3+, alarm fatigue sets in. At 5+ (all 5 types), the differentiation system itself collapses — readers stop reading callout labels because "everything is called out."

**What it looks like:** A vertical stripe of coral-amber-purple-blue-green left borders. Each callout has the same padding, same label styling, same body typography. The visual rhythm is monotonous despite the color variety. The page feels like it's warning you about everything, which means it's warning you about nothing.

**Evidence from artifacts:**

Gas Town places callouts in Zone 3 (field intelligence) where they serve as threat assessment items. Multiple callout types appear but are SEPARATED by body text, tables, and subsection headers. No two callouts appear consecutively.

CD-006 distributes its callouts across sections — never more than one per visual screenful. This is the pattern that earned its 39/40 score.

**Prevention:**

Callout frequency rule: Maximum 2 callouts per viewport-height section. No consecutive callouts without at least 1 intervening non-callout element (paragraph, heading, table, code block, or horizontal rule).

Page-level cap: Maximum 6 callouts per page. Maximum 3 of the same callout type per page.

**Programmatic detection:**

YES. Count consecutive `.callout` elements with no non-callout siblings between them. If count >= 2, flag. Count total callouts per viewport-height section; if > 2, flag.

---

### AP-11: MULTI-GRID DISSONANCE (Competing Grid Rhythms)

**Mechanisms involved:** #15 (Bento Grid) + #18 (Data Table) + #6 (Width Variation)

**The CSS clash:**

When a bento grid, a data table, and width-varied prose all appear in the same section or adjacent sections:

```css
/* Bento grid: 4-column, 24px gap */
.bento-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }

/* Data table: column widths determined by content */
.data-table { width: 100%; }
.data-table td { padding: 12px 16px; }

/* Prose: 70ch max-width, left-aligned */
p { max-width: 70ch; }
```

Three horizontal rhythm systems: the bento grid divides horizontal space into equal columns, the data table creates content-proportional columns, and prose creates a narrow channel. Within a single viewport, the reader sees three incompatible column structures:
- Bento: equal-width cells across 100% of container
- Table: uneven columns proportional to data
- Prose: narrow (70ch, roughly 70%) left-aligned

**What it looks like:** The eye tracks across the bento grid's even column edges, then encounters a table whose columns don't align with the grid above, then reads prose that's narrower than either. The horizontal rhythm has three different "beat patterns" creating a visual cacophony that makes the section feel disorganized.

**Evidence from artifacts:**

Gas Town Zone 2 contains both a data table and a bento grid in the same zone. However, they are separated by a subsection header and body text (`.architecture-section { margin-top: var(--space-8); border-top: var(--border-light) solid var(--color-border); }`). The subsection separator creates a "reset point" where the reader's grid expectations from the table can dissolve before encountering the bento grid.

CD-006 places different grid types in different sections, never in the same viewport. The 4 grid patterns appear across 4 separate sections.

**Prevention:**

One grid per viewport rule: A single viewport-height section may contain at most ONE grid-based layout (bento grid, data table, or multi-column). If content requires both table and grid, separate them with at least one full viewport of non-grid content, OR place them in adjacent zones with a hard-cut transition between.

**Programmatic detection:**

YES. For each viewport-height section, count elements with `display: grid`, `display: table`/`<table>`, and multi-column layouts. If count > 1, flag.

---

### AP-12: BOOKMARK POLLUTION (Structural Border Overuse)

**Mechanisms involved:** #1 (Border-Weight Gradient) + #10 (Border-Left Semantic Signal) + #13 (Dark Header 3px Border) + #14 (Footer Mirror 3px Border)

**The CSS clash:**

When the 3px structural border appears on: the header (bottom), the footer (top), zone transitions (HARD CUT type), and also on multiple callout-style components (via the 4px semantic border):

```css
header { border-bottom: 3px solid var(--color-primary); }
.zone-2 { border-top: 3px solid var(--color-primary); }
.checkpoint-bar { border-top: 3px solid var(--color-border); }
.callout { border-left: 4px solid var(--accent-color); }
.core-quote { border-left: 4px solid var(--color-primary); }
footer { border-top: 3px solid var(--color-primary); }
```

The page develops a "border forest" — 3px and 4px borders everywhere. The border-weight gradient (#1) loses its hierarchy-encoding power because the strongest weight (4px) appears on 5+ elements per viewport. The structural border (3px) appears on 4+ boundaries.

**What it looks like:** Scrolling down the page, the reader encounters horizontal and vertical borders at nearly every major element. The borders stop being hierarchical signals and become visual clutter. The 4px-3px-1px gradient collapses to "thick borders everywhere" punctuated by occasional 1px separators.

**Evidence from artifacts:**

Gas Town has: header 3px bottom border + Zone 2 3px top border + checkpoint bar 3px top border + footer 3px top border = four 3px horizontal borders. Plus: core-quote 4px left, callouts 4px left, file-tree 4px left, extension-cards 4px left, role-card--mayor 4px border, role-card--overseer 4px border. At least 10 elements with 3-4px borders on a single page.

However, Gas Town distributes them across 4 zones with different backgrounds, so no single viewport has more than 2-3 bordered elements visible simultaneously. The zone backgrounds provide visual separation that prevents the borders from reading as clutter.

**Prevention:**

Border budget per viewport: Maximum 3 bordered elements (3px or 4px) visible in any single viewport. The 1px separator borders are exempt (they're structural, not accent).

Page-level: 3px horizontal structural borders limited to header + 1 transition + footer = 3 maximum. All other transitions use spacing shift or checkpoint (which uses 1px/3px, not solid 3px primary).

**Programmatic detection:**

YES. For each viewport-height section, count elements with `border-*: 3px` or `border-*: 4px`. If count > 3, flag. For the full page, count 3px primary-colored horizontal borders; if > 3, flag.

---

### AP-13: ATMOSPHERIC RESET FAILURE (Zone Background Leaking)

**Mechanisms involved:** #7 (Zone Background Differentiation) + #2 (2-Zone Component DNA) + #17 (Code Block)

**The CSS clash:**

Zone backgrounds create atmospheric progression (warm cream -> deep earthy -> lighter return). But components inside zones often have their OWN background colors that fight the zone atmosphere:

```css
/* Zone 3: deep earthy background */
.zone-3 { background: var(--bg-z3); } /* #E8E0D4 */

/* Callout inside Zone 3: warm cream background */
.callout { background: var(--bg-z1); } /* #FEF9F5 -- LIGHTEST zone color */

/* Code block inside Zone 3: dark background */
pre { background: var(--color-text); } /* #1A1A1A */
```

The zone says "deep, earthy, compressed." The callout says "light, open, sparse." The code block says "dark, inverted." Three background colors within one zone — the atmospheric consistency established by the zone background is punctured by every component that has its own background.

The specific problem: callouts in Gas Town use `background: var(--bg-z1)` (the lightest zone color) regardless of which zone they're in. In Zone 1, this is invisible (same as zone). In Zone 3, the callout creates a bright rectangle inside a dark zone — a "portal back to Zone 1" that disrupts the density arc's atmospheric buildup.

**What it looks like:** The density arc carefully darkens backgrounds from Zone 1 (#FEF9F5) to Zone 3 (#E8E0D4). Then a callout appears in Zone 3 with #FEF9F5 background — visually jumping the reader back to Zone 1's atmosphere. The density progression feels broken. Add a code block (dark #1A1A1A) adjacent to the callout, and the reader experiences three different "moods" (earthy, light, dark) within a single viewport.

**Evidence from artifacts:**

Gas Town explicitly does this: `.callout { background: var(--bg-z1); }` appears in ALL zones, including Zone 3. The callout background (#FEF9F5) creates a 30+ RGB delta against Zone 3's background (#E8E0D4). This is perceptible and jarring against the density arc.

CD-006 uses callout-specific backgrounds (`.callout--info { background: #F5F9FE; }`) that are slightly tinted versions of the zone background, which helps them blend in somewhat. But even CD-006's callout backgrounds are hardcoded, not zone-relative.

**Prevention:**

Zone-relative component backgrounds: In the densest zones, component backgrounds should be DARKER than or equal to the zone background, not lighter. Option A: Define zone-relative callout backgrounds (`--bg-callout-z1: #FEF9F5; --bg-callout-z3: #E2DAD0;`). Option B: Remove explicit callout backgrounds in dense zones, letting the zone background show through (callout is differentiated by border alone).

Formal rule: `component.background-color.lightness <= zone.background-color.lightness + 5%`

**Programmatic detection:**

YES. For each component with an explicit `background`, compare its RGB values to the parent zone's background. If the component is LIGHTER than the zone by more than 15 RGB in any channel, flag.

---

### AP-14: MONO OVERLOAD (Typographic Monotony via Meta Labels)

**Mechanisms involved:** #2 (2-Zone Component DNA) + #18 (Data Table) + #8 (Scroll Witness) + #11 (Typographic Scale Jumping)

**The CSS clash:**

The 2-zone DNA mandates a meta-label zone: `font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em`. Data tables use the same treatment for headers. Section indicators, checkpoint bars, footer metadata, header stats — all use this EXACT same typographic treatment.

```css
.callout__label { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
.data-table th { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
.section-indicator { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
.checkpoint-bar { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
.header-meta { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; }
.footer-meta { font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }
```

Six different semantic elements, nearly identical visual treatment. The reader sees the same small-caps mono text for: navigation labels, component labels, table headers, section markers, transition markers, and page chrome metadata. The typographic HIERARCHY is flattened — every non-heading, non-body text looks the same.

**What it looks like:** A page with "shouting whispers" — tiny uppercase mono text everywhere. Section indicators, callout labels, table headers, and checkpoint markers are visually indistinguishable. The reader cannot scan the page and quickly identify which small text is a navigation aid (section indicator) vs a semantic classification (callout type) vs a data header (table column name) vs a transition marker (checkpoint) because they all look identical.

**Evidence from artifacts:**

Gas Town has this exact pattern. Counted mono-meta-uppercase instances:
- `.header-meta` (header navigation)
- `.header-stat__label` (header stats)
- `.zone-* .section-indicator` (4 zones x 1 indicator each)
- `.callout__label` (5+ callout types)
- `.role-card__rank` (7 role cards)
- `.file-tree__label` (1)
- `.extension-card__author` (3+ extension cards)
- `.code-label` (1)
- `.mental-model__label` (1)
- `.actionability__label` (1)
- `.checkpoint-bar` (1)
- `.footer-meta` (1)
- `.footer-link-group__label` (3+ groups)

That is approximately 25+ instances of near-identical mono-meta-uppercase text across the page. The 2-zone DNA is so consistently applied that its "sparse label" zone has become the page's dominant typographic texture.

CD-006 has the same pattern — `font-body` weight-600 size-meta uppercase tracking-0.1em appears on section-meta, callout-label, file-tree-label, decision-matrix-label, task-label, reasoning-label, core-abstraction-label, and more.

**Prevention:**

Label differentiation rule: The meta-label treatment should have AT LEAST 3 variants:
1. **Navigation labels:** mono, meta-size, 500 weight, 0.15em tracking (wider)
2. **Component labels:** mono, meta-size, 600 weight, 0.1em tracking (standard)
3. **Structural markers:** mono, meta-size, 600 weight, 0.1em tracking, CENTERED (checkpoint), or with different color

The differentiation can be minimal — weight variation (500 vs 600), tracking variation (0.1em vs 0.15em), or alignment (left vs center). Even 1 CSS property difference allows the eye to subconsciously categorize the labels.

**Programmatic detection:**

YES. Count all elements with `font-family: mono AND font-size: meta AND text-transform: uppercase`. If count > 15 on a single page, flag as potential mono overload. Bonus: count UNIQUE combinations of (weight, tracking, color) among those elements. If unique combinations < 3, flag as undifferentiated.

---

## ANTI-PATTERN SEVERITY MATRIX

| ID | Name | Severity | Frequency Risk | Programmatic Detection |
|----|------|----------|----------------|----------------------|
| AP-01 | Density Stacking | HIGH | MEDIUM | YES (computed padding < 12px) |
| AP-02 | Color Zone Conflict | MEDIUM | HIGH | PARTIAL (co-occurrence) |
| AP-03 | Border + Shadow Overload | HIGH | LOW | YES (layer count) |
| AP-04 | Whitespace Contradiction | MEDIUM | HIGH | YES (asymmetry check) |
| AP-05 | Mechanism Cancellation | MEDIUM | MEDIUM | PARTIAL (width breakout) |
| AP-06 | Rhythm Breaking | MEDIUM | HIGH | YES (nesting ratio) |
| AP-07 | Scale Confusion | LOW | MEDIUM | PARTIAL (size vs padding) |
| AP-08 | Disclosure + Grid | HIGH | LOW | YES (details in grid) |
| AP-09 | Drop Cap + Component | MEDIUM | LOW | YES (float clearance) |
| AP-10 | Callout Cacophony | HIGH | HIGH | YES (consecutive count) |
| AP-11 | Multi-Grid Dissonance | MEDIUM | MEDIUM | YES (grid count per viewport) |
| AP-12 | Bookmark Pollution | MEDIUM | HIGH | YES (border count per viewport) |
| AP-13 | Atmospheric Reset | HIGH | HIGH | YES (component bg vs zone bg) |
| AP-14 | Mono Overload | MEDIUM | VERY HIGH | YES (mono-meta count) |

**HIGH severity + HIGH frequency = TOP PRIORITY:**
- AP-10 (Callout Cacophony) — most likely to occur, most damaging
- AP-13 (Atmospheric Reset) — component backgrounds fight zone atmosphere universally
- AP-14 (Mono Overload) — ALREADY PRESENT in both artifacts, near-universal

---

## THE SYSTEMIC FINDING: WHY THE CATALOG PRODUCES ANTI-PATTERNS

### Root Cause 1: The Catalog Documents Mechanisms in Isolation

Each mechanism entry describes:
- What it is (CSS pattern)
- Where it was found (cross-file frequency)
- Whether it transfers (name + transfer test)
- How to apply it (application modes)

What it does NOT describe:
- What OTHER mechanisms it should NOT co-occur with
- What nesting depth limitations it has
- What maximum frequency it supports before losing impact
- What atmospheric prerequisites it requires (zone context)

The catalog's "Combination Rules" section (lines 930-940) lists 4 compatible and 3 incompatible pairs. This covers 7 of 153 possible pairs. The other 146 pairs are implicitly "no guidance."

### Root Cause 2: The "1+ Per Category" Mandate Creates Combinatorial Pressure

The convention to deploy "at least 1 mechanism per category" (Spatial, Hierarchy, Component, Depth/Emphasis, Navigation) means a Middle-tier page deploys minimum 5 mechanisms across 5 categories. This is correct for vocabulary breadth. But it creates pressure to deploy mechanisms in PROXIMITY — the more mechanisms in a viewport, the more likely two will clash.

The mechanism density cap (max 4 per viewport, from catalog lines 1037-1053) partially addresses this, but it caps COUNT without addressing COMPATIBILITY. 4 compatible mechanisms in one viewport are fine; 3 incompatible mechanisms in one viewport are catastrophic.

### Root Cause 3: Component-Level Backgrounds Are Zone-Agnostic

Every component in the catalog and components.css has a fixed background color. Callouts use `var(--bg-z1)` or hardcoded tinted colors. Code blocks use `var(--color-text)`. Data tables have no background. This means components look the same regardless of their zone context, breaking atmospheric consistency (AP-13) and creating unpredictable color zone conflicts (AP-02).

The fix: zone-relative component tokens (`--bg-component-in-current-zone`) that inherit from the parent zone's background. This is achievable in CSS via custom properties on zone containers.

### Root Cause 4: The 2-Zone DNA Creates Typographic Monotony

The 2-zone DNA is the most consistently applied mechanism — every callout, every card, every file tree, every label uses the same sparse-label/dense-body pattern. This works at the individual component level but creates AP-14 (Mono Overload) at the page level because all labels converge to the same visual treatment.

The fix: label differentiation tokens. Define 3 label treatments (navigation-label, component-label, structural-label) that share the mono/uppercase base but differ in weight, tracking, or color.

---

## WHAT THIS MEANS FOR PIPELINE V3

### 1. Add Anti-Pattern Gates (6 Binary Checks)

These 6 checks catch the highest-risk anti-patterns and are fully programmatic:

```
AP-GATE-01: Consecutive callout count <= 1 (no back-to-back callouts)
AP-GATE-02: Grid layouts per viewport <= 1 (bento, table, or multi-col)
AP-GATE-03: Bordered elements (3-4px) per viewport <= 3
AP-GATE-04: Component bg LIGHTER than zone bg by > 15 RGB => FAIL
AP-GATE-05: Mono-meta-uppercase unique variants >= 3
AP-GATE-06: No details/summary inside grid cells
```

### 2. Add Combination Guidance to Mechanism Catalog

Expand the "Combination Rules" section from 10 lines to 50 lines. For each HIGH-severity anti-pattern, add a binary prohibition:

```
INCOMPATIBLE:
- Solid offset (#3) + border-left semantic (#10) on SAME element
- Progressive disclosure (#12) inside bento grid cells (#15)
- 3+ consecutive callouts without intervening content
- Drop cap (#16) with < 150 words before next component

CONDITIONAL (zone-dependent):
- Blue/intel callout (#9) in densest zone: reduce border from 4px to 1px
- Component background lighter than zone: use zone-relative background
```

### 3. Add Zone-Relative Component Tokens

Define `--bg-component` as a custom property set on each zone container:

```css
.zone-1 { --bg-component: var(--bg-z1); }
.zone-2 { --bg-component: #EDE6DA; } /* slightly lighter than zone bg */
.zone-3 { --bg-component: #E5DDD0; } /* slightly lighter than zone bg */
.zone-4 { --bg-component: #F2ECE4; } /* slightly lighter than zone bg */

.callout { background: var(--bg-component); }
```

This ensures callouts respect their zone's atmospheric density rather than always jumping to the lightest color.

### 4. Add Label Differentiation Tokens

```css
/* Navigation labels (section indicators, checkpoint bars) */
.nav-label { font-weight: 500; letter-spacing: 0.15em; color: var(--color-text-secondary); }

/* Component labels (callout labels, card ranks) */
.comp-label { font-weight: 600; letter-spacing: 0.1em; color: var(--accent-color); }

/* Structural labels (footer meta, header meta) */
.struct-label { font-weight: 500; letter-spacing: 0.05em; color: var(--color-text-secondary); }
```

Three variants using the same font-family and size, differentiated by weight (500 vs 600), tracking (0.05 vs 0.1 vs 0.15), and color source (secondary vs accent).

---

## CONCLUSION

The mechanism catalog documents 18 tools and says "use them." It does not say what happens when 5 tools operate in the same viewport with conflicting assumptions about hierarchy, density, rhythm, and atmosphere.

The 14 anti-patterns identified here are not theoretical — 3 of them (AP-13 Atmospheric Reset, AP-14 Mono Overload, AP-12 Bookmark Pollution) are ALREADY PRESENT in both Gas Town and CD-006, the two strongest artifacts in the entire project. They survive because the positive qualities of these pages (strong density arc, rich vocabulary, bookending) mask the combinatorial noise. But in weaker builds — where the density arc is shallow or the vocabulary is thinner — these anti-patterns would be the dominant perceptual experience.

The core insight: **individual mechanism quality does not guarantee compositional quality.** A page can deploy 14 HIGH-quality mechanisms and still feel noisy if 3 pairs clash. The catalog needs COMBINATION RULES as much as it needs mechanism definitions. Pipeline v3 should treat mechanism compatibility as a first-class concern, not an afterthought.

---

**END REPORT B4**

*14 compositional anti-patterns identified. 3 already present in strongest artifacts. 6 are fully programmatically detectable. Root cause: catalog documents mechanisms in isolation, creating a combinatorial minefield. Fix: 6 binary anti-pattern gates, zone-relative component tokens, label differentiation tokens, and expanded combination guidance.*
