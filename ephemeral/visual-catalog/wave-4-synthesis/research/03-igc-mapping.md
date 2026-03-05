# I/G/C Element Mapping Across 7 Pages

**Source:** Visual catalog (479 elements, 18 explorations), wave 1-3 findings (OD-004, OD-006, AD-002, AD-005, AD-006), pipeline builds (Molly Panopticon 2026-03-02, Yegge Gas Town 2026-03-02)
**Taxonomy:** 6 named Instruments, 4 named Gestures, 3 named Components (from catalog taxonomy audit)
**Method:** Each page mapped against the 13 named I/G/C elements, unnamed elements identified, multi-channel coordination scored

---

## Named I/G/C Reference

### Instruments (6)
| Name | Definition | Key Signal |
|------|-----------|------------|
| **The Wayfinder** | Section markers, breadcrumbs, progress indicators | WHERE you are in the document |
| **Evidence Spine** | Left-border markers creating a scannable evidence trail | 4px/3px/2px/1px left borders encoding meaning |
| **Certainty Badge** | Confidence level indicators (Established/Probable/Speculative/Open) | Epistemic status labels |
| **Depth Marker** | Stratum labels indicating knowledge depth | "Stratum 1 -- Established" style labels |
| **Fractal Witness** | Elements demonstrating self-similarity across scales | Page/Section/Component/Character scale labels |
| **Mode Signal** | Labels indicating organizational/density mode | "PULSE", "CRESCENDO", etc. |

### Gestures (4)
| Name | Definition | Key Signal |
|------|-----------|------------|
| **Herald** | Drop caps and large initial letters announcing section beginnings | `::first-letter` at 4.2em, serif, red |
| **Act Stone** | Act/phase markers with progress bars showing narrative position | "Act I -- Exposition" + tension meter |
| **Confidence Gate** | Visual threshold markers between certainty strata | Stratum boundary with progress squares |
| **Distillation** | Essence callouts in serif italic that compress core insights | Callout--essence with Instrument Serif body |

### Components (3)
| Name | Definition | Key Signal |
|------|-----------|------------|
| **Inquiry** | Q&A pairs with square markers for conversational density | Question (60% width) + Answer (100% width) |
| **Stratum** | Confidence-layered content blocks with metadata | Border-weight + color encoding certainty |
| **Dual Lens** | Side-by-side comparison containers | WHY/HOW toggle or two-column juxtaposition |

---

## Page 1: OD-004 (Confidence Strata)

**Source findings:** 26 elements (11 instruments, 8 gestures, 7 components)
**Dominant pattern:** Geological strata with 4 confidence levels

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES | Geological Column (minimap of 4 strata in header), Stratum Boundary with Progress squares (4 instances at layer transitions), Exploration Header Metadata Bar (Status/Pattern/Content), Confidence Switcher (Facts Only / Full Analysis / Everything) |
| **Evidence Spine** | YES | Border-left on each stratum section: 4px established, 3px probable, 2px speculative, 1px open. Also Evidence DNA chips (Sources/Validation/Consensus per stratum) |
| **Certainty Badge** | YES | Epistemic Marker at each stratum header ("This section contains well-established practices..."), Stratum Depth Labels ("Stratum 1 -- Established") |
| **Depth Marker** | YES | `.stratum__depth-label` at each of 4 stratum headers. Color-coded: black/blue/amber/purple |
| **Fractal Witness** | NO | Not present. OD-004 is a single-scale exploration |
| **Mode Signal** | PARTIAL | Exploration ID tag declares "Density: Geological + Crescendo" but no per-section mode labels |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | NO | No drop caps. OD-004 uses a more clinical editorial approach |
| **Act Stone** | NO | No Freytag act markers. Structure is strata, not narrative acts |
| **Confidence Gate** | YES (SIGNATURE) | Stratum Boundary with progress squares is THE signature I/G/C of this page. 4 instances with line + label + scent text + filled/empty squares. Each boundary is a visual unconformity signal |
| **Distillation** | YES | Callout--essence variants with serif italic body. Also crux-block and what's-next blocks serve a similar distillation function |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | NO | No Q&A pairs. Content is declarative, not conversational |
| **Stratum** | YES (DOMINANT) | 4 stratum variants: `.stratum--established` (4px black border, spacious padding), `.stratum--probable` (3px blue), `.stratum--speculative` (2px amber), `.stratum--open` (1px purple). This is the defining component |
| **Dual Lens** | PARTIAL | Comparison grid (Established vs Speculative two-column) functions as a form of Dual Lens, but without interactive toggle |

### Unnamed Elements (Taxonomy Gaps)

1. **Geological Survey Panel** -- A content-inventory instrument with colored square markers per stratum, aggregate metadata (Total Practices, Reading Time, Confidence Range, Last Updated). Functions as "table of contents as geological survey map." No named I/G/C covers this "page minimap" function.

2. **Evidence DNA Chips** -- Per-stratum metadata row (Sources: 50+ / Validation: Production-proven / Consensus: Industry-wide) that systematically degrades across strata. This is a specialized instrument for epistemic provenance that goes beyond Certainty Badge.

3. **Verification List** -- End-of-page checklist with green checkmark squares per stratum summarizing what the reader learned. A "post-journey gratification instrument" not covered by existing names.

4. **Typography Compression Gradient** -- 6-channel gesture (h3 size, p size, line-height, h3 margin, p margin, max-width) all compressing together from Established to Open. Goes beyond what Confidence Gate covers -- this is a pervasive reading-pace gradient.

5. **Spacing-as-Confidence** -- Padding compression from 40px (established) to 16px (open) via CSS custom properties. A semantic whitespace gradient.

### Multi-Channel Coordination

**Peak coordination: 6 channels** on the Typography Compression Gradient (h3 size, p size, line-height, h3 margin, p margin, max-width all encoding one rule: "density inversely correlates with confidence").

**Average coordination: 3-4 channels** across most elements. The stratum system coordinates border-width + border-color + padding + typography + background per confidence level.

**Maturity assessment: HIGH.** OD-004 achieves its meaning through coordinated multi-channel encoding. The confidence gradient is expressed redundantly across border weight, spacing, typography, color, and background -- any single channel communicates the structure.

---

## Page 2: OD-006 (Crown Jewel)

**Source findings:** 41 elements (14 instruments, 10 gestures, 17 components -- the densest exploration)
**Dominant pattern:** 6 organizational modes cycling through a single page

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES (COMPLEX) | Scroll Witness (fixed sidebar with 7 progress bars filling via CSS Houdini `@property`), Section Number Labels ("Section 01" through "Section 06"), Section Dividers with mode transition labels ("Conversational -> Narrative") |
| **Evidence Spine** | YES | Confidence-border encoding in Section 4 (4px/3px/1px left borders for established/emerging/exploratory) |
| **Certainty Badge** | YES | 3-variant certainty badges (solid icon=established, hollow=emerging, faint=exploratory) in Section 4 and Section 6 fractal verification |
| **Depth Marker** | PARTIAL | Stratum labels in Section 4, but not the page-level organizational principle |
| **Fractal Witness** | YES (SIGNATURE) | Fractal Annotation Layer (fixed left-margin column with rotated text labeling Page/Section/Component/Character scales with actual ratio annotations). Also the Visual Index (CSS-only miniature renderings of 6 org patterns, including self-referential fractal cell) |
| **Mode Signal** | YES (PERVASIVE) | Section Header Mode Indicator at every section (e.g., "Conversational -- PULSE density") with 8x8px red square marker via `::before` pseudo-element |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | YES | Editorial Drop Cap (`::first-letter` at 4.2em Instrument Serif in primary red) at every section opening. 6 instances |
| **Act Stone** | YES | Act Markers in Section 2 (I, II, III Roman numerals in 24x24px square borders + mono labels "Exposition -- The Problem") with CRESCENDO density compression (line-height 1.9 -> 1.7 -> 1.5) |
| **Confidence Gate** | PARTIAL | Confidence-border encoding creates visual thresholds between strata in Section 4, but no explicit progress-square boundaries like OD-004 |
| **Distillation** | YES | Callout--essence with serif italic body (2 instances), Pull Quotes with 4px red border + serif italic at 1.5rem (2 instances) |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | YES | Q/A Pairs in Section 1 (3 instances). Question at 60% width with red 8x8px square marker + Instrument Serif, Answer at 100% width with 4px left border + white background. TIDAL density rhythm |
| **Stratum** | YES | 3-variant strata (established/emerging/exploratory) in Section 4. Certainty badges + content with border-weight encoding |
| **Dual Lens** | YES | WHY/HOW toggle in Section 2 with full ARIA tablist. "Why" view in serif italic, "How" view in monospace on gray background |

### Unnamed Elements (Taxonomy Gaps)

1. **Visual Index / Pattern Echo Grid** -- Bento-style 3x2 grid with CSS-only miniature renderings of 6 organizational patterns (PULSE bars, CRESCENDO segments, ISLANDS squares, GEOLOGICAL layers, WAVE crosshair, FRACTAL recursive grid). This is a "specimen sheet" instrument with no named equivalent.

2. **Synthesis Cards** -- 5-card grid proving org-density identity pairs (org label + density name + proof text). Evidence presentation component.

3. **Task Island** -- Self-contained procedural cluster with numbered header (red-bordered square), step markers (6x6px squares on 1px vertical track), and checkpoint gates. A procedure-execution component.

4. **Collapsing Section Header (Sticky with Red Border Reveal)** -- Gesture where sticky headers gain a red border when scrolled. JS-driven state transition.

5. **Territorial Border-Color Hover** -- Flat hover gesture (border-color -> red, background -> warmer cream) without any depth simulation. Soul-compliant interactivity.

6. **Proof Table (Self-Referential)** -- Retrospective table where the last row (Section 6) is highlighted in red, indicating "this is where you are now." The table retroactively reframes the reading experience as evidence.

### Multi-Channel Coordination

**Peak coordination: 6 channels** on the Confidence-Border Encoding (border-width, border-color, padding-left, line-height, font-weight, font-style all encoding certainty level).

**Average coordination: 4-5 channels.** The Scroll Witness alone coordinates progress fill (via CSS Houdini), color (red on black), 3-level fractal TOC typography, and position tracking.

**Maturity assessment: VERY HIGH.** OD-006 is the densest exploration (41 elements). It uses more named I/G/C elements than any other page and also invents the most unnamed elements. The fractal self-similarity (a Visual Index that contains a miniature of itself) is the most sophisticated I/G/C coordination in the entire catalog.

---

## Page 3: AD-002 (F-Pattern)

**Source findings:** 25 elements (9 instruments, 9 gestures, 7 components)
**Dominant pattern:** 5-act Freytag narrative with CRESCENDO density

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES | Act Indicator ("Act I -- Exposition") at each section, Page Footer mirroring header |
| **Evidence Spine** | YES | 4px red left border on h2 headings creating the "left spine" that F-pattern vertical descent scans |
| **Certainty Badge** | NO | Not a confidence-based page |
| **Depth Marker** | NO | No stratum system |
| **Fractal Witness** | NO | Single-axis exploration |
| **Mode Signal** | IMPLICIT | No explicit mode labels, but the 5-act structure IS the mode signal |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | NO | No drop caps. AD-002 is structurally simpler than OD explorations |
| **Act Stone** | YES (SIGNATURE) | Act Indicator + Tension Meter (5-segment gauge: filled red = current tension, unfilled = remaining). 5 instances tracking CRESCENDO arc (1/5 -> 2/5 -> 5/5 -> 3/5 -> 1/5) |
| **Confidence Gate** | NO | No confidence system |
| **Distillation** | YES | Essence Pullquotes in breathing zones between acts. Instrument Serif italic at 1.625rem with 4px purple left border. 4 instances |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | NO | No Q&A pairs |
| **Stratum** | NO | No confidence strata |
| **Dual Lens** | YES (SIMPLIFIED) | Two-Column Layout for "First Horizontal Scan" / "Second Horizontal Scan" comparison. No toggle -- static juxtaposition |

### Unnamed Elements (Taxonomy Gaps)

1. **Tension Meter** -- 5-segment progress bar quantifying CRESCENDO tension. Unique to AD-002. Filled segments = primary red, unfilled = subtle. This is a specialized Wayfinder for narrative tension, but more specific than the generic name covers.

2. **CRESCENDO Spacing Compression** -- 4-channel gesture: padding-top/bottom compress from 64px (Act I) to 32px (Act III) then release to 80px (Act V). Background colors shift simultaneously.

3. **Code Density CRESCENDO** -- Structural gesture: 0 code blocks in Act I -> 3 in Act III -> 1 in Act V. The presence of code itself follows the CRESCENDO arc.

4. **Breathing Zone** -- Transition marker between acts with different background (#FAF5ED), 3px borders top+bottom. An "airlock" between narrative registers. Not covered by existing component names.

5. **Decision Matrix** -- Specialized table with dark header, color-coded score encoding (HIGH=green, MID=amber, LOW=coral). Climax-positioned.

6. **Term Definition (Inline)** -- `<span class="term-def">` with bold + 3px bottom border for key vocabulary within prose.

### Multi-Channel Coordination

**Peak coordination: 4 channels** on CRESCENDO encoding (spacing, background color, line-height, code density all tracking the same tension arc).

**Average coordination: 3 channels.** The page is structurally simpler than OD explorations -- no JS, no pseudo-elements, no scroll-based instruments.

**Maturity assessment: MODERATE-HIGH.** AD-002 achieves its thesis (F-degradation IS CRESCENDO compression) primarily through spatial organization rather than ornamental devices. The redundant CRESCENDO encoding across 4 channels is sophisticated, but the total vocabulary is smaller.

---

## Page 4: AD-005 (Choreography)

**Source findings:** 27 elements (8 instruments, 10 gestures, 9 components)
**Dominant pattern:** Hub-spoke with WAVE density oscillation

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES (RICH) | Progress Bar (4-segment: 1 hub + 3 spokes with proportional widths, active = red), Breadcrumb Navigation ("Hub > CSS Transition Choreography"), Axis Transition Markers (diagonal clip-path encoding descent/ascent), Axis Interstitials (lightweight breathing pauses), Chapter Dividers |
| **Evidence Spine** | YES | 4px red left border on featured territory tile, structural borders on spoke sections |
| **Certainty Badge** | NO | Not a confidence-based page |
| **Depth Marker** | NO | No stratum system |
| **Fractal Witness** | NO | Single-axis exploration |
| **Mode Signal** | PARTIAL | Density Table (maps WAVE oscillation: Hub=Sparse, Spoke=Dense). Self-documenting but not per-section mode labels |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | NO | No drop caps |
| **Act Stone** | NO | Not a narrative-arc page |
| **Confidence Gate** | NO | No confidence system |
| **Distillation** | YES | Essence Callout Register Shift (serif italic body, 3 instances with purple border). Changes reading register to "philosophical synthesis" |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | NO | No Q&A pairs |
| **Stratum** | NO | No confidence strata |
| **Dual Lens** | NO | No comparison containers |

### Unnamed Elements (Taxonomy Gaps)

1. **Diagonal Clip-Path Direction Encoding** -- Descending polygon (bottom-right cut) vs ascending polygon (top-left cut) creating visual directional signals. The angle IS the meaning. Degrades to flat border on mobile.

2. **Hub Grid** -- Bento-style CSS Grid with featured tile (2-column span) and 6 standard tiles. Named grid areas. Featured tile has solid offset pseudo-element.

3. **Territory Tile** -- 4-slot card (label + title + description + meta) with solid-offset depth treatment on featured variant. Soul-compliant depth via `::after` pseudo-element.

4. **Spoke Content Container** -- Dense-zone section with white background, spoke-specific headers, and breathing zone transitions between hub and spoke.

5. **Solid Offset Pseudo-Element** -- Flat geometric "shadow" (4px offset, 3px border, `z-index: -1`) as soul-compliant alternative to box-shadow.

6. **Hub-to-Spoke Background Zone Alternation** -- WAVE pattern: cream (hub) -> white (spoke) -> beige (breathing) -> white (spoke) -> cream (synthesis). Background color IS the density indicator.

7. **Featured Tile Typography Scale-Up** -- Size differential (26px vs 22px) + 2-column span + 4px red border = visual hierarchy within uniform grid.

### Multi-Channel Coordination

**Peak coordination: 6 channels** on Responsive Axis Simplification (grid columns, clip-path, border-top, padding, font-size, grid-template-areas all shifting at 768px).

**Average coordination: 3-4 channels.** The clip-path gesture uses only 2 channels (polygon coordinates + visual angle), but the hub-to-spoke alternation coordinates 4 channels (background, padding, border, max-width).

**Maturity assessment: HIGH.** AD-005 invents the most novel unnamed elements (7 taxonomy gaps), particularly the directional clip-path encoding which has no precedent in the I/G/C system. The hub-spoke topology itself is an unnamed structural paradigm.

---

## Page 5: AD-006 (Compound Axis)

**Source findings:** 36 elements (12 instruments, 12 gestures, 12 components) -- the second densest exploration
**Dominant pattern:** All 5 axis patterns in sequence (Z + F + Bento + Spiral + Choreography)

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES (MAXIMAL) | Scroll Witness (fixed 3px progress bar at viewport top), Section Header (3-slot: section-meta + h2 + intro paragraph, 7 instances), Axis Indicator (3-state metadata: section + axis + density) |
| **Evidence Spine** | YES | Stratum cards with confidence-encoded left borders (blue/green/amber/purple). Spoke labels with colored borders |
| **Certainty Badge** | YES | Stratum labels ("Stratum 1 -- Validated", "Stratum 2 -- Established", "Stratum 3 -- Exploratory", "Stratum 4 -- Speculative") in spiral layout |
| **Depth Marker** | YES | Per-stratum labels in spiral section |
| **Fractal Witness** | YES | Fractal Meta Section with 5 scale labels (PAGE/SECTION/COMPONENT/CHARACTER/NAVIGATION). Also Pattern Echo Grid (6 CSS miniature diagrams) as a self-referential specimen sheet |
| **Mode Signal** | YES | Section Map listing 7 sections with density modes annotated. Triple-coordinate metadata (section + axis + density) |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | YES | Drop cap on Section 1 opening (serif, red, large scale) |
| **Act Stone** | NO | No Freytag narrative arc -- sequential axis demonstration |
| **Confidence Gate** | YES | Stratum transitions in spiral section with degrading visual weight (border-width: 4px->3px->2px->1px, padding compression, background shifts) |
| **Distillation** | YES | 3 Essence callouts with serif italic body + purple border. Also Crown Jewel Title Amplification (2.5rem -> 3rem) signals the page's special status |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | NO | No Q&A pairs |
| **Stratum** | YES | Spiral Layout with 4 confidence-encoded zones using golden ratio proportions (wide -> medium -> narrow -> deep) |
| **Dual Lens** | YES | Triple Column (3-cell comparison: Organization / Density / Axis) functioning as extended Dual Lens |

### Unnamed Elements (Taxonomy Gaps)

1. **Pattern Echo Grid** -- 6 CSS-only miniature axis diagrams (Z-diagonal, F-horizontal bars, Bento cells, Spiral circle, Choreography hub-spokes, Compound all-5). This is a visual taxonomy instrument.

2. **Z-Layout** -- 2x2 grid with diagonal reading path (TL/BR = dense, TR/BL = sparse). A compositional component.

3. **Bento Grid** -- Featured 2x2 item + four 1x1 items. Cell size IS hierarchy.

4. **Spiral Layout** -- 3-column golden-ratio grid with 4 nested confidence zones. Content spirals inward from validated to speculative.

5. **Choreography Layout** -- 3-column golden-ratio grid with central hub and 4 flanking spokes. Hub gets featured treatment.

6. **F-Layout** -- Vertical flex container with scanline dividers.

7. **Transition Grammar Table** -- Color-coded matrix (green=Smooth, amber=Bridge, coral=Breathing) for pattern transition compatibility. Color-as-classification.

8. **Solid Offset Depth** -- `::after` pseudo-element creating 4px offset on featured bento item and choreography hub.

9. **Crown Jewel Title Amplification** -- 20% title size increase (2.5rem -> 3rem) signaling this exploration's special status in the AD series.

### Multi-Channel Coordination

**Peak coordination: 6+ channels** on the Typography Trinity Register Shifts (font-family + font-size + font-weight + font-style + letter-spacing + text-transform all encoding three registers across the entire document).

**Average coordination: 4-5 channels.** Every section deploys a different axis pattern, each with its own multi-channel coordination. The Z-Layout coordinates grid position + background + border + padding. The Spiral Layout coordinates grid area + border-left color/width + background + padding.

**Maturity assessment: VERY HIGH.** AD-006 is the only page that deploys ALL 5 axis patterns. The compound coordination is itself a meta-I/G/C achievement -- the page demonstrates the entire vocabulary in sequence while maintaining consistent section headers, callouts, and transition management.

---

## Page 6: Molly CI/CD Pipeline (Pipeline Build)

**Source:** `ephemeral/builds/molly-panopticon-extraction-2026-03-02/_build-final.html`
**Build type:** Pipeline v5+ extraction build
**Metaphor:** Survey/cartographic (survey-parchment, survey-drafting, survey-fieldwork, survey-bedrock)

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES (SIMPLIFIED) | Zone Labels (`.zone-label`, `.zone-label--dark`) marking major page zones, Section Indicators within survey grid zones, Survey Header with exploration identity |
| **Evidence Spine** | PARTIAL | 4px structural borders on zone boundaries, but NOT the graduated border-weight confidence encoding. Border hierarchy is structural only (4px/3px/1px), not semantic |
| **Certainty Badge** | NO | No confidence classification system |
| **Depth Marker** | NO | No stratum depth labels |
| **Fractal Witness** | NO | No fractal self-similarity |
| **Mode Signal** | NO | No organizational mode labels (PULSE, CRESCENDO, etc.) despite the page using WAVE density |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | NO | No drop caps |
| **Act Stone** | VESTIGIAL | Zone transitions (cartouche -> survey-grid -> annotations -> survey-data -> legend -> terra-incognita) create a narrative arc, but NO explicit act markers or tension meters |
| **Confidence Gate** | NO | No confidence transition markers |
| **Distillation** | PARTIAL | Blockquote treatments in cartouche and annotation zones suggest essence moments, but no explicit `.callout--essence` with serif italic shift. The "philosophical pause" background (#FAF6EF) was added in fix cycle as a third visual register |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | NO | No Q&A conversational structure |
| **Stratum** | NO | No confidence-layered blocks |
| **Dual Lens** | NO | No comparison containers or toggles |

### Unnamed Elements (Taxonomy Gaps)

1. **Zone System** -- 6+ distinct zones (cartouche, survey-grid, annotations, survey-data, legend, terra-incognita) with different backgrounds and typography rules per zone. This is a pipeline-specific compositional structure.

2. **Survey Section** -- Repeating content block within grid zones with alternating backgrounds on nth-child(even). Pipeline-generated content container.

3. **Survey Header** -- Dark header with title, subtitle, and metadata. Similar to Exploration Header but without meta-line or version badge.

4. **Terra Incognita** -- Dark inverted zone with special typography and table treatments. A "bedrock" zone unique to the survey metaphor.

### Elements LOST from Explorations to Pipeline

| Exploration Element | Pipeline Equivalent | Status |
|--------------------|-------------------|--------|
| Scroll Witness / Progress Bar | None | **LOST** -- no position tracking |
| Mode Signal | None | **LOST** -- zones unnamed |
| Certainty Badge | None | **LOST** -- no confidence encoding |
| Depth Marker | None | **LOST** -- no depth labels |
| Fractal Witness | None | **LOST** -- no scale annotation |
| Herald (Drop Cap) | None | **LOST** -- no section-opening ceremony |
| Act Stone (Tension Meter) | None | **LOST** -- no tension quantification |
| Confidence Gate | None | **LOST** -- no stratum boundaries |
| Evidence Spine (semantic) | Structural borders only | **DEGRADED** -- borders exist but carry no meaning gradient |
| Distillation (Essence) | Blockquote + pause background | **DEGRADED** -- third register added in fix cycle but lacks serif shift |
| Inquiry (Q&A) | None | **LOST** -- no conversational structure |
| Stratum | None | **LOST** -- no confidence containers |
| Dual Lens | None | **LOST** -- no comparison containers |
| Typography Trinity | YES -- 3 fonts present | **SURVIVED** |
| Zone Background Differentiation | YES -- 6 zones with distinct backgrounds | **SURVIVED** |
| Structural Border Hierarchy | YES -- 4px/3px/1px | **SURVIVED** |
| Exploration Header | Survey Header | **SURVIVED** (simplified) |
| Code Block (Dark) | Yes, dark code blocks | **SURVIVED** |
| Responsive Collapse | Yes, 768px breakpoint | **SURVIVED** |

**Survival rate:** 5 survived, 2 degraded, 8 lost = **5/15 (33%) survived intact**

### Multi-Channel Coordination

**Peak coordination: 3 channels** (zone background + typography rules + spacing per zone).

**Average coordination: 2 channels.** Most elements coordinate only background + border, or typography + spacing.

**Maturity assessment: LOW-MODERATE.** The pipeline preserves the design system's "locked layer" (universal elements) but loses nearly all family-specific vocabulary. The zone system is the pipeline's main contribution, but zones lack the semantic encoding (confidence, mode, depth) that explorations achieve.

---

## Page 7: Yegge Auth Middleware (Pipeline Build)

**Source:** `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_build-final.html`
**Build type:** Pipeline v5+ extraction build
**Metaphor:** Tower/geological descent (tower-surface, tower-coordination, tower-execution, tower-bedrock)

### Instruments Present

| Named Instrument | Present? | Specific Examples |
|-----------------|----------|-------------------|
| **The Wayfinder** | YES (MODERATE) | Section Indicators (`.section-indicator` with monospace labels), Section Dividers (`.section-divider`) between content blocks, Zone Openers (`.zone-opener`) as section introductions |
| **Evidence Spine** | YES (PARTIALLY SEMANTIC) | 4px left borders on Town-level role cards (`--border-structural`), 3px borders on operational elements, 1px projected borders. The 3-category border system exists but encodes certainty less precisely than explorations |
| **Certainty Badge** | NO | No explicit confidence classification |
| **Depth Marker** | NO | No stratum depth labels |
| **Fractal Witness** | NO | No fractal self-similarity |
| **Mode Signal** | VESTIGIAL | DENSITY: 1/5 progress bar in header (`.density-bar` with `.density-segment` + `.density-segment--filled`). But this is a static label, not a dynamic per-section signal |

### Gestures Present

| Named Gesture | Present? | Specific Examples |
|--------------|----------|-------------------|
| **Herald** | NO | No drop caps |
| **Act Stone** | VESTIGIAL | 6-zone structure (Overseer -> Operations -> Bedrock -> Philosophical -> Factory -> Resolution) creates an implicit narrative arc. Transition table in CSS comments documents 4-channel zone shifts. But no visible act markers or tension meters |
| **Confidence Gate** | NO | No stratum boundary markers |
| **Distillation** | YES | `.callout--essence` with serif italic body and purple border. At least 1 instance ("nummanali's take"). The serif shift IS present in the pipeline |

### Components Present

| Named Component | Present? | Specific Examples |
|----------------|----------|-------------------|
| **Inquiry** | NO | No Q&A pairs |
| **Stratum** | NO | No confidence-layered blocks |
| **Dual Lens** | PARTIAL | Decision Diagram (`.decision-diagram`) with "viewport-moment" class suggests a comparison element, but not a toggle |

### Unnamed Elements (Taxonomy Gaps)

1. **Role Card** -- 3-variant component (`.role-card--town`, `.role-card--rig`, `.role-card--worker`) with header (label + title + function) and body. Uses `<details>` for progressive disclosure. Pipeline-invented component.

2. **Voice Eruption** -- Quote/citation block in bedrock zone with distinct styling. A dark-zone-specific pull quote variant.

3. **Meta Indicator** -- Monospace metadata label in bedrock zone.

4. **Decision Diagram** -- Viewport-moment comparison element.

5. **Mistake Pattern** -- Not explicitly a named component but structured recurring content (3 mistake patterns as content blocks).

6. **6-Zone Geological Descent** -- The tower metaphor creates a descent from surface (#FEF9F5) through coordination (#FFFFFF) to bedrock (#1A1A1A) then philosophical (#FAF5ED) and back. This is a page-level CRESCENDO gesture documented in CSS comments with 4-channel transition tables.

### Elements LOST from Explorations to Pipeline

| Exploration Element | Pipeline Equivalent | Status |
|--------------------|-------------------|--------|
| Scroll Witness / Progress Bar | Static DENSITY: 1/5 bar | **DEGRADED** -- exists but static, not tracking |
| Mode Signal | None | **LOST** |
| Certainty Badge | None | **LOST** |
| Depth Marker | None | **LOST** |
| Fractal Witness | None | **LOST** |
| Herald (Drop Cap) | None | **LOST** |
| Act Stone (Tension Meter) | None (6-zone arc implicit only) | **LOST** |
| Confidence Gate | None | **LOST** |
| Evidence Spine (semantic) | 3-tier border system | **PARTIALLY SURVIVED** -- structure exists, semantic encoding partial |
| Distillation (Essence) | callout--essence with serif italic | **SURVIVED** |
| Inquiry (Q&A) | None | **LOST** |
| Stratum | None | **LOST** |
| Dual Lens | Decision Diagram | **DEGRADED** |
| Typography Trinity | YES -- 3 fonts present | **SURVIVED** |
| Zone Background Differentiation | YES -- 6 zones | **SURVIVED** |
| Structural Border Hierarchy | YES -- 4px/3px/1px | **SURVIVED** |
| Exploration Header | Dark header with title | **SURVIVED** |
| Code Block (Dark) | Yes | **SURVIVED** |
| Callout System (5 variants) | Yes (warning, tip, essence) | **SURVIVED** |
| Responsive Collapse | Yes | **SURVIVED** |

**Survival rate:** 7 survived, 3 degraded, 5 lost = **7/15 (47%) survived intact**

### Multi-Channel Coordination

**Peak coordination: 4 channels** documented in CSS transition table (background + typography + spacing + border per zone transition). This was explicitly designed.

**Average coordination: 2-3 channels.** Role cards coordinate border color + body background + icon. Zone transitions coordinate background + padding + typography.

**Maturity assessment: MODERATE.** Yegge is noticeably more I/G/C-rich than Molly. The callout--essence Distillation survived, the 6-zone geological descent is a conscious CRESCENDO, and the role card is a novel pipeline-specific component. The explicit transition table in CSS comments shows the builder was thinking about multi-channel coordination.

---

## Cross-Page Synthesis

### Named I/G/C Frequency Across 7 Pages

| Named Element | OD-004 | OD-006 | AD-002 | AD-005 | AD-006 | Molly | Yegge |
|--------------|--------|--------|--------|--------|--------|-------|-------|
| **The Wayfinder** | YES | YES | YES | YES | YES | YES* | YES* |
| **Evidence Spine** | YES | YES | YES | YES | YES | PARTIAL | PARTIAL |
| **Certainty Badge** | YES | YES | -- | -- | YES | -- | -- |
| **Depth Marker** | YES | PARTIAL | -- | -- | YES | -- | -- |
| **Fractal Witness** | -- | YES | -- | -- | YES | -- | -- |
| **Mode Signal** | PARTIAL | YES | IMPLICIT | PARTIAL | YES | -- | VESTIGIAL |
| **Herald** | -- | YES | -- | -- | YES | -- | -- |
| **Act Stone** | -- | YES | YES | -- | -- | VESTIGIAL | VESTIGIAL |
| **Confidence Gate** | YES | PARTIAL | -- | -- | YES | -- | -- |
| **Distillation** | YES | YES | YES | YES | YES | PARTIAL | YES |
| **Inquiry** | -- | YES | -- | -- | -- | -- | -- |
| **Stratum** | YES | YES | -- | -- | YES | -- | -- |
| **Dual Lens** | PARTIAL | YES | YES | -- | YES | -- | PARTIAL |

*simplified

### Key Findings

**1. The Universal Layer Holds.** All 7 pages (including pipeline builds) contain The Wayfinder, Evidence Spine (at least structural borders), Typography Trinity, Zone Background Differentiation, and Structural Border Hierarchy. These 5 elements are truly invariant.

**2. The Distillation (Essence) is the most transferable gesture.** Present in 6/7 pages (and partially in Molly). The serif italic register shift for "core insight" content survives even pipeline compression. This is the single most robust named gesture.

**3. The Wayfinder is present everywhere but DEGRADES dramatically.** Explorations have 4-8 wayfinding instruments each (scroll witnesses, progress bars, breadcrumbs, tension meters, stratum boundaries). Pipeline builds have 1-2 (section indicators, zone labels). The loss of positional awareness is the pipeline's largest I/G/C gap.

**4. Confidence encoding is exploration-only.** Certainty Badge, Depth Marker, Confidence Gate, and Stratum are ABSENT from both pipeline builds. The pipeline does not classify content by confidence level -- the most semantically rich layer of the I/G/C vocabulary vanishes entirely.

**5. Fractal Witness is rare even in explorations.** Only OD-006 and AD-006 (the two "crown jewel" explorations) have fractal self-similarity. This is the ceiling of I/G/C sophistication.

**6. Mode Signal is severely underused.** Only OD-006 has pervasive per-section mode labels. The pipeline builds lack mode signals entirely. Since mode signals require the pipeline to CLASSIFY what it builds (PULSE, CRESCENDO, GEOLOGICAL), their absence reveals that the pipeline builds without self-awareness of its own density patterns.

**7. Pipeline builds survive at the component/infrastructure level but lose instruments and gestures.** The universal callout system, code blocks, headers, footers, and responsive collapse all survive. But instruments (orientation devices) and gestures (reading-register shifts) are nearly eliminated. The pipeline produces CONTAINERS but not WAYFINDING or RHYTHM.

### Pipeline Survival Gradient

| I/G/C Category | Exploration Avg | Molly Survival | Yegge Survival |
|---------------|-----------------|----------------|----------------|
| **Universal elements** (10) | 10/10 | 7/10 (70%) | 8/10 (80%) |
| **Named instruments** (6) | 3-6 per page | 0/6 (0%) | 0.5/6 (8%) |
| **Named gestures** (4) | 2-4 per page | 0.5/4 (12%) | 1/4 (25%) |
| **Named components** (3) | 1-3 per page | 0/3 (0%) | 0.5/3 (17%) |
| **Unnamed elements** | 5-9 per page | 4 new | 6 new |

**The pipeline invents new unnamed elements while failing to reproduce named ones.** Molly creates zone systems and survey sections. Yegge creates role cards and voice eruptions. These are novel but do not achieve the multi-channel coordination of the exploration vocabulary.

### Multi-Channel Maturity Scores

| Page | Peak Channels | Average Channels | Assessment |
|------|--------------|-----------------|------------|
| OD-004 | 6 | 3-4 | HIGH |
| OD-006 | 6 | 4-5 | VERY HIGH |
| AD-002 | 4 | 3 | MODERATE-HIGH |
| AD-005 | 6 | 3-4 | HIGH |
| AD-006 | 6+ | 4-5 | VERY HIGH |
| Molly (pipeline) | 3 | 2 | LOW-MODERATE |
| Yegge (pipeline) | 4 | 2-3 | MODERATE |

**The maturity gap is ~2 channels.** Explorations average 3-5 channels per compositional idea; pipeline builds average 2-3. This gap represents the difference between "visual styling" and "semantic encoding." Pipeline elements have backgrounds and borders; exploration elements have those PLUS meaning-carrying gradients across multiple properties simultaneously.

### Highest-Priority Pipeline Gaps

1. **Position tracking** (Wayfinder): Pipeline pages have no scroll progress, no section counters, no "you are here" signals. The reader is navigating blind.

2. **Confidence encoding** (Certainty Badge + Depth Marker + Stratum): Pipeline pages treat all content as equally confident. No visual distinction between established facts and speculation.

3. **Density self-awareness** (Mode Signal): Pipeline builds don't label their own organizational patterns. The builder doesn't know (or declare) that it's using CRESCENDO or WAVE.

4. **Reading-register ceremony** (Herald): No section-opening gestures. Every section begins with a plain heading rather than a typographic event.

5. **Multi-channel coordination depth**: Pipeline elements average 2 channels vs exploration 4. The pipeline needs to be taught to coordinate border + background + typography + spacing as redundant encodings of a single semantic idea.
