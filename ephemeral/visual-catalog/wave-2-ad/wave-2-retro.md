# Wave 2 AD Retro -- Synthesis Report

---

## 1. Corrected Element Counts

After integrating all buddy feedback (removals, additions, reclassifications), here are the corrected counts for each AD file.

| File | Raw Worker | + Buddy Adds | - Buddy Removes/Merges | = Corrected | I | G | C |
|------|-----------|-------------|------------------------|-------------|---|---|---|
| AD-001 | 24 (8I/9G/7C) | +1 (closing epitaph gesture), +1 (header component) | -1 (::selection weak gesture) | **25** | 8 | 9 | 8 |
| AD-002 | 25 (9I/9G/7C) | +1 (header component), +1 (generic table component) | -1 (version badge merge into meta-line), -1 (header reclassify I->C) | **25** | 7 | 9 | 9 |
| AD-003 | 27 (10I/8G/9C) | 0 | -1 (grid gap weak gesture, flagged) | **26** | 10 | 7 | 9 |
| AD-004 | 27 (8I/9G/10C) | 0 | -2 (gestures #10/#11 merge into #9), -1 (gesture #12 not CSS-encoded), -1 (spiral container orphaned class) | **23** | 8 | 6 | 9 |
| AD-005 | 28 (8I/10G/10C) | 0 | -1 (scroll-triggered reveal not instantiated) | **27** | 8 | 9 | 10 |
| AD-006 | 35 (12I/11G/12C) | +1 (footer bookend component) | 0 | **36** | 12 | 11 | 13 |
| **TOTAL** | **166** | **+5** | **-9** | **162** | **53** | **51** | **58** |

### Notes on Corrections

- **AD-001:** Buddy found the closing epitaph (lines 1703-1708) -- centered serif italic editorial close, classified as Gesture. Header omission noted as missing Component (multi-slot container). `::selection` gesture flagged as weakest entry (branding, not reading-register shift) -- retained but flagged. Tables #6-8 flagged as boundary cases between Instrument and "meta-content" but retained. Chapter Divider (#22) and Section Title (#23) flagged as minimal-slot Components (zero and one slot respectively).

- **AD-002:** Version Badge merged into Meta-Line (sub-element granularity exceeds calibration norms). Header reclassified from Instrument to Component (multi-slot container with title + subtitle + meta-line). Essence Pullquote flagged as boundary (Instrument vs Component) but retained as Instrument. Generic Table System added as Component (2 generic tables + 1 decision matrix = 2 distinct table types). Line-Height Compression gesture corrected: climax line-height is explicit 1.5 (not "implied"), max-width widens at climax (opposite of compression). Border hierarchy corrected: h2 left border is 4px (not 3px), making a 4-tier system.

- **AD-003:** Grid Gap as Sparse Ocean flagged as weak gesture (single property, does not meet multi-property coordination standard). Section Heading borderline Instrument (standard document structure elevated by structural border). Version Badge separately listed -- accepted per calibration precedent (distinct CSS class, distinct visual treatment). Header omission noted as minor.

- **AD-004:** Gestures #10 (Confidence-Proportional Spacing) and #11 (Background Zone Shift) merged into #9 (Border-Weight Confidence Gradient) as sub-channels of one multi-channel gesture per calibration precedent (example #16 bundles 4 properties into one gesture). Gesture #12 (Typography Scale Degradation) reclassified as editorial observation, not CSS gesture (worker acknowledged "not in CSS properties per se"). Spiral Container (#17) references orphaned CSS class (`.spiral-container` defined but never used in HTML; actual container is `.page-container`). Inline Code (#25) flagged as below component threshold.

- **AD-005:** Scroll-Triggered Reveal (#14) flagged: CSS+JS infrastructure exists but no DOM element uses `.reveal-on-scroll`. Retained with "defined but not instantiated" note, but removed from corrected count. Density Table dual-instance ambiguity noted (WAVE table is instrument, transition properties table is article content). Breathing Zone flagged as resisting taxonomy (simultaneously spatial-boundary instrument AND content container). Callout Accent Variant System borderline gesture vs. component styling.

- **AD-006:** Footer Bookend added as Component (inline-styled but has 2 defined slots: display title + mono meta line). This is the MF-004 fix bookend explicitly called out in HTML comments. Gesture #16 title corrected: should be "Border-COLOR Confidence Encoding" not "Border-Weight" (weights are uniform 4px; only color varies per FIX-022). F-Scanline Crescendo (#17) accepted with caveat (content-density gesture where CSS is uniform). Research Application Record accepted as machine-facing Instrument.

---

## 2. AD-Specific Patterns

### 2a. Layout-as-Instrument: The Axis Pattern Itself

The defining characteristic of the AD family is that **the layout IS the thesis**. Each AD file uses its spatial organization as the primary argument about reading patterns. This is fundamentally different from OD files, where layout serves content.

| File | Axis Pattern | How Layout IS the Argument |
|------|-------------|---------------------------|
| AD-001 | Z-Pattern | Golden-ratio 4-quadrant hero grid demonstrates Gutenberg diagram zones; Q/A width asymmetry (60%/100%) demonstrates Z-diagonal traversal |
| AD-002 | F-Pattern | Left-spine heading hierarchy (H2 4px border / H3 italic / H4 uppercase) demonstrates vertical-descent scanning; CRESCENDO spacing IS the F-pattern degradation |
| AD-003 | Bento Grid | Cell size (1x1/2x1/1x2/2x2) IS hierarchy encoding; grid gap IS the sparse ocean between dense islands |
| AD-004 | Spiral | Left-padding gradient (24px->64px) traces the outward spiral path; golden-ratio sidebar grid (1fr:0.618fr) demonstrates spiral proportions |
| AD-005 | Choreography | Hub grid with territory tiles demonstrates the overview shot; spoke sections demonstrate the close-up progression |
| AD-006 | Compound | All 5 patterns appear in sequence; each section uses its own axis pattern's layout, creating a museum of layout approaches |

**Key insight:** AD files have a self-referential quality that OD files lack. The page IS the demonstration of the theory it describes. This creates a unique Instrument category: **Self-Demonstrating Layout** -- where the layout cannot be changed without destroying the page's argument.

### 2b. Axis-Specific Instruments (Not Found in OD)

| Instrument | File(s) | Description |
|------------|---------|-------------|
| **Tension Meter** | AD-002 | 5-segment visual gauge showing CRESCENDO tension level per act. Unique to narrative-arc pages. |
| **Spiral Map** | AD-004 | 4-column nav showing all confidence strata before reading. Miniature specimen sheet. |
| **Confidence Badge** | AD-004 | Per-section badge with 4-variant color/border encoding of confidence level. |
| **Stratum Transition Zone** | AD-004 | Named boundary crossing between confidence layers ("Descending: Bedrock -> Subsoil"). |
| **Pattern Echo Grid** | AD-006 | CSS-only miniature reproductions of all 5 axis patterns in a 3x2 grid. Visual table of contents using pseudo-elements. |
| **Axis Indicator** | AD-006 | Sticky dark bar showing Axis/Density/Org triple-state metadata. Persistent multi-dimensional orientation. |
| **Scroll Witness** | AD-006 | Fixed 3px progress bar at viewport top. JS-driven scroll percentage fill. |
| **Progress Bar** | AD-005 | Hub/spoke positional bar with proportional segment widths. Active segment filled red. |
| **Breadcrumb Navigation** | AD-005 | Hub > Spoke descent trail with directional separator triangle. |
| **Axis Transition Marker** | AD-005 | Diagonal clip-path element signaling directional axis changes. |
| **Complexity Badge** | AD-003 | Green/blue/amber difficulty-level badge on each bento cell. |
| **Duration Badge** | AD-003 | Monospace time-cost estimate per bento cell ("~5 min"). |
| **Running Header** | AD-001 | Chapter-level wayfinding labels appearing at each section start. |
| **Z-Terminal CTA** | AD-001 | Right-aligned navigational link at Z-pattern terminal position. |
| **Gutenberg Zone Properties Table** | AD-001 | Self-describing table mapping the page's own Z-pattern zones. |

### 2c. Axis-Specific Gestures (Not Found in OD)

| Gesture | File(s) | Description |
|---------|---------|-------------|
| **TIDAL Width Asymmetry** | AD-001 | Q at 60% / A at 100% width creates the Z-diagonal eye movement. |
| **Golden Ratio Grid Proportions** | AD-001 | 1.618fr:1fr on both axes in Z-hero grid. |
| **Typography Velocity Shift** | AD-001 | Serif 600 (Q) -> Sans 400 (A) controls reading speed along Z-path. |
| **CRESCENDO Spacing Compression** | AD-002 | Padding 64px->48px->32px->48px->64px across 5 acts. |
| **Left-Spine Landmark Hierarchy** | AD-002 | H2/H3/H4 use different font+style+border combinations for vertical scanning. |
| **Line-Height Compression** | AD-002 | Line-height 1.8->1.7->1.5->1.7->1.7 across CRESCENDO arc. |
| **Cell Size as Hierarchy** | AD-003 | Grid span (1x1/2x1/1x2/2x2) encodes content importance through area. |
| **Bookend Density Shift** | AD-003 | Red left border (start) -> Green left border (end) page-level arc. |
| **Step Counter Rhythm** | AD-003 | CSS counter-generated dark squares creating visual drumbeat. |
| **Collapsible Island Toggle** | AD-003 | Details open/close with triangle rotation shifts scanning->studying mode. |
| **Border-Weight Confidence Gradient** | AD-004 | 4px/3px/3px/1px border-left encodes geological confidence depth. |
| **Open Question "?" Prefix** | AD-004 | `::before` with display serif italic "?" at speculative stratum. |
| **Diagonal Clip-Path Direction** | AD-005 | Two polygon variants encoding ascending/descending axis transitions. |
| **Featured Tile Typography Scale-Up** | AD-005 | 22px->26px + grid-area expansion for featured territory tile. |
| **Spoke Typography Cascade** | AD-005 | H2 medium-shot -> H3 close-up progression within spoke sections. |
| **Solid Offset Pseudo-Element** | AD-005, AD-006 | `::after` at 4px offset creating flat 2D depth cue. |
| **Crown Jewel Title Amplification** | AD-006 | `font-size: 3rem` overriding `--type-page` (2.5rem) for compound page. |
| **Drop Cap** | AD-006 | 3.5em Instrument Serif, float left, primary red `::first-letter`. |
| **F-Scanline Crescendo** | AD-006 | Content density increases across four scanlines while CSS holds steady. |

### 2d. Axis-Specific Components (Not Found in OD)

| Component | File(s) | Description |
|-----------|---------|-------------|
| **Z-Hero Grid** | AD-001 | 4-quadrant golden-ratio grid mapping Gutenberg diagram zones. |
| **Z-Cycle (Q&A Pair)** | AD-001 | 9-instance Q/A container: narrow serif Q + wide sans A. |
| **Micro-Z Grid** | AD-001 | 2x2 code/explanation grid replicating Z-pattern at component scale (fractal). |
| **Act Zone** | AD-002 | 5-variant section container with per-act padding/background encoding CRESCENDO position. |
| **Decision Matrix** | AD-002, AD-006 | Dark-header table with color-coded HIGH/MID/LOW score spans. |
| **Term Definition** | AD-002 | Inline `<span>` with bold + 3px bottom border marking defined terms. |
| **Bento Cell** | AD-003 | 12-instance task-island card with header/duration/body/details slots. |
| **Bento Cell Header** | AD-003 | Title + complexity badge in responsive flex row. |
| **Front/Back Bookend** | AD-003 | Matched orientation/closure containers with red/green left accent borders. |
| **Step List** | AD-003 | Counter-based ordered list with dark number markers. |
| **Split Layout** | AD-003 | 2-column code/explanation sub-grid within large bento cells. |
| **Cell Callout** | AD-003 | Compact 12px-padding callout variant for nesting inside bento cells. |
| **Stratum** | AD-004 | 4-variant confidence-encoded section container with golden-ratio content grid. |
| **Comparison Grid** | AD-004 | 2-panel side-by-side with confidence-encoded left borders. |
| **Open Questions List** | AD-004 | Serif italic "?" prefix list for speculative stratum. |
| **Territory Tile** | AD-005 | 4-slot card (label/title/desc/meta) with featured variant in hub grid. |
| **Hub Grid** | AD-005 | CSS Grid with named areas for hub overview layout. |
| **Spoke Content Container** | AD-005 | White background wrapper with 1100px inner constraint. |
| **Spoke Section** | AD-005 | Content grouping within spokes with consistent bottom margin. |
| **Code-Explanation Pair** | AD-005 | Flex-column pair for code + prose side-by-side. |
| **Z-Layout** | AD-006 | 4-quadrant compound Z-grid. |
| **Triple Column** | AD-006 | 3-slot comparison container for Organization/Density/Axis. |
| **Bento Grid** | AD-006 | Hierarchical grid with featured/scanning/structural cell types. |
| **Spiral Layout** | AD-006 | 4-slot deep-dive container with golden-ratio proportions. |
| **Choreography Layout** | AD-006 | Hub-spoke synthesis container. |
| **F-Layout** | AD-006 | Vertical scanline container for F-pattern section. |
| **Transition Grammar Matrix** | AD-006 | 5x5 symmetric matrix with color-coded transition types. |
| **Development Kitchen** | AD-006 | Collapsible details with border-weight state shift. |

---

## 3. Cross-Wave Comparison (AD vs OD)

### 3a. Average Elements Per File

| Metric | OD (Wave 1) | AD (Wave 2) | Delta |
|--------|-------------|-------------|-------|
| Average raw worker count | 27.5 | 27.7 | +0.2 (essentially equal) |
| Average corrected count | 26.5 | 27.0 | +0.5 |
| Min corrected count | 18 (OD-002) | 23 (AD-004) |  |
| Max corrected count | 41 (OD-006) | 36 (AD-006) |  |
| Total corrected | 159 | 162 | +3 |

**Observation:** AD and OD families are remarkably similar in element density. The "crown jewel" files (OD-006 and AD-006) are the outliers in both families (41 and 36 respectively), while typical files cluster in the 23-27 range.

### 3b. I/G/C Distribution

| Category | OD Count | OD % | AD Count | AD % | Delta |
|----------|----------|------|----------|------|-------|
| Instruments | 56 | 35.2% | 53 | 32.7% | -2.5% |
| Gestures | 48 | 30.2% | 51 | 31.5% | +1.3% |
| Components | 55 | 34.6% | 58 | 35.8% | +1.2% |
| **Total** | **159** | 100% | **162** | 100% |  |

**Observation:** The distribution is nearly identical between the two families. Both show approximately 1/3 each of I, G, and C. AD has slightly more gestures (+1.3%) which aligns with the "layout-as-thesis" characteristic -- the axis patterns generate more CSS-encoded reading shifts. AD has slightly fewer instruments (-2.5%), which aligns with OD files having more narrative/confidence metadata devices.

### 3c. Shared Patterns Between AD and OD

These patterns appear in BOTH families (part of the locked layer / shared design system DNA):

| Pattern | OD Files | AD Files | Type | Notes |
|---------|----------|----------|------|-------|
| **Meta Line + Version Badge** | ALL 6 | ALL 6 | Instrument | Universal document-identity metadata. |
| **Exploration Header** | ALL 6 | AD-004, AD-005, AD-006 | Component | Dark full-bleed header with meta-line, h1, subtitle. AD-001/002/003 have equivalent structures but workers cataloged sub-elements without parent container. |
| **Callout System (5 variants)** | ALL 6 | ALL 6 | Component | 2-zone label+body container, 4px left border, 5 accent colors. The most universal component in both families. |
| **Callout Essence Serif Voice** | 4/6 OD | ALL 6 AD | Gesture | Font-family shift from Inter to Instrument Serif italic in essence variant. Universal register shift. |
| **Zone Background Alternation** | 5/6 OD | ALL 6 AD | Gesture | Sparse/dense/breathing background colors encoding density zones. |
| **Structural Border Hierarchy** | ALL 6 | ALL 6 | Gesture | Cat 1 (3px structural) / Cat 2 (1px separator) / special accent (4px red). |
| **Responsive Collapse** | ALL 6 | ALL 6 | Gesture | Multi-property coordinated shift at 768px. Preserves density signals while collapsing spatial geometry. |
| **Code Block (Dark Theme)** | ALL 6 | 5/6 AD | Component | Dark background inversion, monospace, syntax highlighting. |
| **Section Heading w/ Border** | 4/6 OD | AD-001, AD-003 | Instrument/Component | Display font heading with 3px bottom structural border. |
| **Breathing Zone** | 3/6 OD | AD-002, AD-003, AD-005 | Instrument | 48px+ empty band with breathing-zone background, marking mode transitions. |
| **Footer/Page Closing** | ALL 6 | ALL 6 | Component/Instrument | Terminal boundary marker, often mirroring header treatment. |
| **Typography Trinity** | ALL 6 | ALL 6 | Gesture | Serif (scanning) / Sans (reading) / Mono (processing) font system. |

### 3d. Patterns Unique to Each Family

**Unique to OD (not found in AD):**

| Pattern | Description |
|---------|-------------|
| Scroll Witness with fractal TOC | OD-001/005/006 had chapter-level or fractal progress tracking. AD only has AD-006's scroll witness. |
| Narrative Beat / Content Block | OD-002/004 had atomic content containers within structural sections. |
| Synthesis Cards | OD-006's 3-slot proof evidence cards. |
| Conversation Diagram / Freytag Bar Chart | Abstract density-architecture visualizations before content. |

**Unique to AD (not found in OD):**

| Pattern | Description |
|---------|-------------|
| Self-demonstrating layout | The layout IS the thesis (Z-grid demonstrates Z-pattern, bento demonstrates grid hierarchy, etc.). |
| Axis-specific navigation instruments | Tension Meter, Spiral Map, Progress Bar, Breadcrumb -- each axis invents its own positional awareness device. |
| Cell-level metadata badges | Complexity Badge, Duration Badge, Confidence Badge -- per-section/cell metadata chips. |
| Pattern Echo Grid | CSS-only miniature reproductions of layout patterns. |
| Bookend density shift | Red-start/green-end page-level color arc. |
| Collapsible cell details | Progressive disclosure within grid cells (bento cells with `<details>`). |

---

## 4. Taxonomy Boundary Cases

### 4a. Boundary Cases from AD Buddy Reviews

| # | Element | File | Worker Category | Buddy Challenge | Resolution |
|---|---------|------|----------------|-----------------|------------|
| 1 | Responsive Signal Transfer Table | AD-001 #6 | Instrument | More pedagogical than self-documenting; could be content within a Component | RETAIN as Instrument -- self-referential nature tips it |
| 2 | Fractal Scale Mapping Table | AD-001 #7 | Instrument | Teaching fractal theory, not just self-documenting | RETAIN -- explicitly maps scales present in page itself |
| 3 | Implementation Checklist Table | AD-001 #8 | Instrument | Article content (learning requirements), not positional orientation | RETAIN with flag -- serves verification function |
| 4 | Callout Label Typography | AD-001 #15 | Gesture | Component-internal, not page-spanning | RETAIN -- announces register change |
| 5 | Selection Highlight | AD-001 #17 | Gesture | Branding detail, not reading-register shift | FLAG as weakest gesture -- retain with reservations |
| 6 | Chapter Divider | AD-001 #22 | Component | Zero-slot element, no inner structure | RETAIN as Component -- dedicated class + rendered height + background |
| 7 | Section Title | AD-001 #23 | Component | Single-slot element, minimal structure | RETAIN as minimal Component |
| 8 | Closing Epitaph | AD-001 (missed) | -- | Centered serif italic editorial close | ADD as Gesture (register shift to editorial close) |
| 9 | Version Badge | AD-002 #4 | Instrument | Sub-element of Meta-Line, inflates count | MERGE into Meta-Line |
| 10 | Header (Dark Full-Bleed) | AD-002 #5 | Instrument | Multi-slot container (meta-line, title, subtitle) | RECLASSIFY as Component |
| 11 | Essence Pullquote | AD-002 #7 | Instrument | Content container with p + cite slots | FLAG as boundary -- defensible either way |
| 12 | Code Density CRESCENDO | AD-002 #13 | Gesture | Structural HTML pattern, not CSS-encoded shift | RETAIN with caveat -- editorial gesture |
| 13 | Line-Height Compression | AD-002 #11 | Gesture | Factual errors in description (explicit 1.5, not "implied") | RETAIN with corrections |
| 14 | Grid Gap as Sparse Ocean | AD-003 #12 | Gesture | Single property, no multi-property coordination | FLAG as weak gesture |
| 15 | Section Heading | AD-003 #6 | Instrument | Standard document structure with border | RETAIN as borderline Instrument |
| 16 | Gestures #10/#11 split from #9 | AD-004 | Gesture | One multi-channel gesture split into three entries | MERGE into single gesture |
| 17 | Typography Scale Degradation | AD-004 #12 | Gesture | Not a CSS gesture -- editorial content-density pattern | RECLASSIFY as observation |
| 18 | Spiral Container | AD-004 #17 | Component | CSS class `.spiral-container` is orphaned; HTML uses `.page-container` | FIX reference to `.page-container` |
| 19 | Inline Code | AD-004 #25 | Component | Styled `<code>` element, no slots, below component threshold | FLAG as borderline |
| 20 | Scroll-Triggered Reveal | AD-005 #14 | Gesture | CSS+JS defined but no DOM element uses the class | FLAG as defined-not-instantiated |
| 21 | Density Table | AD-005 #8 | Instrument | One instance is self-referential (Instrument), other is article content | SPLIT: WAVE table = Instrument, transition table = content |
| 22 | Breathing Zone | AD-005 #25 | Component | Simultaneously spatial-boundary instrument AND content container | ACCEPT with taxonomy-resistance flag |
| 23 | Callout Accent Variant System | AD-005 #17 | Gesture | Component variants vs. independent reading-register shift | ACCEPT -- pre-attentive color priming argument |
| 24 | F-Scanline Crescendo | AD-006 #17 | Gesture | Content-density gesture where CSS is uniform | ACCEPT with caveat |
| 25 | Research Application Record | AD-006 #12 | Instrument | Machine-facing (display:none), not human-reader-facing | ACCEPT as machine-facing Instrument |
| 26 | Footer Bookend | AD-006 (missed) | -- | Inline-styled but has defined slots, mirrors header | ADD as Component |
| 27 | Border-Weight vs Border-Color | AD-006 #16 | Gesture | Title says "Border-Weight" but weights are uniform 4px; only color varies | RENAME to Border-Color |

### 4b. Comparison with OD Boundary Cases

**Recurring boundary patterns across both waves:**

| Pattern | OD Instances | AD Instances | Status |
|---------|-------------|-------------|--------|
| **Phantom elements** (CSS defined, no DOM) | 3 (OD-001 badges, OD-002 act divider, OD-006 semantic bridge) | 2 (AD-004 spiral-container, AD-005 scroll-triggered reveal) | CONFIRMED recurring issue. Same filter applies: zero DOM = zero reader function. |
| **Sub-element inflation** (cataloging slots of parent separately) | 3 (OD-005 meta chips, OD-006 TOC marker, OD-004 depth labels) | 2 (AD-002 version badge, AD-004 version badge) | CONFIRMED recurring issue. Version Badge is the most common offender in AD. Merge rule: if it's a `<span>` inside a parent Instrument, merge unless it passes the Evidence DNA test. |
| **Infrastructure-as-gesture** (accessibility/print patterns) | 3 (OD-006 focus-visible, print, reduced-motion) | 1 (AD-001 ::selection) | REDUCED in Wave 2. Workers applied the Wave 1 infrastructure exclusion rule well. |
| **Zero-slot "Components"** | 2 (OD-005 spoke divider, OD-006 solid offset) | 2 (AD-001 chapter divider, AD-001 section title) | CONFIRMED recurring. Same filter: no slots + no content = not a Component. But AD chapter dividers have dedicated classes + visible rendering, making the case slightly stronger. |
| **Content-as-Instrument** (tables with self-referential data) | 2 (OD-006 synthesis cards) | 4 (AD-001 tables #6-8, AD-005 density table) | NEW PATTERN in AD. Self-demonstrating pages generate more self-referential content, blurring the Instrument/content boundary. |
| **Dual-role elements** (simultaneously Instrument + Component or Gesture) | 3 (OD-002 breathing zone, OD-005 return link, OD-006 collapsible details) | 4 (AD-002 breathing zone, AD-005 breathing zone, AD-005 density table, AD-006 development kitchen) | CONFIRMED recurring. The 3-category model forces a choice that loses information. |

### 4c. NEW Boundary Patterns Unique to AD

| Pattern | Description | Examples |
|---------|-------------|---------|
| **Self-referential content** | Tables or diagrams that describe the page's own structure. Neither pure Instrument (they DO deliver content) nor pure content (they ARE metadata about the page). | AD-001 Gutenberg Zone Table, Fractal Scale Table, Implementation Checklist; AD-005 WAVE density table |
| **Gesture oversplitting** | One multi-channel gesture split into multiple entries because each channel seems independently significant. | AD-004 gestures #9/#10/#11 (border-weight + spacing + background are three views of one confidence gradient) |
| **Orphaned CSS classes** | CSS rules defined but never applied to any HTML element. More common in AD than OD. | AD-004 `.spiral-container`, AD-005 `.reveal-on-scroll` |
| **Layout-as-argument** | The entire spatial arrangement of a page constitutes a Gesture (it changes how you read) but has no CSS "shift" -- it IS the baseline. | AD-001 Z-hero grid proportions, AD-003 cell-size hierarchy, AD-005 hub-spoke topology |

---

## 5. Taxonomy Evolution

### 5a. Did Wave 1 Learnings Work for AD Workers?

| Wave 1 Learning | Applied in Wave 2? | Evidence |
|-----------------|---------------------|---------|
| **Phantom test:** Zero DOM = do not catalog | MOSTLY YES | AD-004 worker still included `.spiral-container` (orphaned class). AD-005 worker included `.reveal-on-scroll` but flagged it honestly. No worker included `::selection` as a separate catalog entry (learned from OD). |
| **Infrastructure exclusion:** Skip `::selection`, `:focus-visible`, `@media print`, `@media (prefers-reduced-motion)`, `.skip-link` | MOSTLY YES | All 6 AD workers correctly excluded focus-visible, print, reduced-motion, skip-link. AD-001 worker included `::selection` as a gesture (borderline). AD-003 worker explicitly noted excluding locked-layer `::selection`. Significant improvement over OD-006 which included 3 infrastructure entries. |
| **Sub-element merge:** If structurally part of a parent, merge | PARTIALLY | AD-002 worker listed Version Badge separately (buddy caught it). AD-004 worker also listed Version Badge separately (buddy noted but accepted per precedent). Other sub-elements correctly handled. |
| **Component slot test:** Must have defined content slots | PARTIALLY | AD-001 Chapter Divider (zero slots) still classified as Component. AD-001 Section Title (one slot). These are the same pattern as OD's spoke dividers -- rendered elements without content slots. |
| **Perceptual threshold for Gestures** | YES | No AD worker included background color differences below perceptual threshold. Zone backgrounds were correctly cataloged where perceptibly different. |

### 5b. New Exclusion Filters Needed

Based on AD boundary cases, these additional filters should be applied:

1. **Gesture merging rule:** When multiple CSS properties shift together across the same set of elements following the same rule (e.g., confidence gradient), catalog as ONE gesture with sub-channels noted, not N separate gestures. The calibration precedent (Typography Compression Gradient bundles 4 properties) supports this.

2. **Self-referential content test:** For tables/diagrams that describe the page itself, apply a stricter Instrument test: "Does removing this element eliminate the reader's awareness of WHERE they are or WHAT they're reading?" If the answer is "No, it eliminates their understanding of HOW the page works" -- that's content about the page, not an Instrument. Classify as content within a Component. Exception: if the element has its own distinct CSS class and visual treatment (like `.z-properties` with monospace red first-column), the specialized presentation argues for Instrument status.

3. **Orphaned CSS filter:** Verify every cataloged CSS class appears in the HTML. If a class is defined in CSS but absent from HTML, it is a phantom. Note it in Additional Observations, not the main catalog.

4. **Content-density-as-gesture threshold:** Editorial choices about how much content to put in each section are NOT gestures unless they are encoded in CSS (e.g., max-width changes, padding compression). The distribution of `<pre>` blocks or paragraph counts across sections is an editorial pattern, not a CSS gesture. AD-002's "Code Density CRESCENDO" and AD-004's "Typography Scale Degradation" both strain the gesture definition for this reason.

### 5c. Is the I/G/C + 2 Filters Model Holding Up?

**The core model is holding.** The 3-category taxonomy (Instrument / Gesture / Component) successfully classifies ~90% of elements across both waves with no ambiguity. The supplementary categories proposed in Wave 1 (Phantom, Modifier, Infrastructure, Sub-Element) continue to be needed for the remaining ~10%.

**What's changed in Wave 2:**

- **Self-referential content** is a new boundary pattern not present in OD. AD's "layout-as-thesis" creates pages that describe themselves, generating elements that are simultaneously content AND metadata. The Instrument/content boundary is more porous in AD.

- **Gesture oversplitting** is a new error pattern. OD workers tended toward gesture undersplitting (one complex shift as one entry). AD workers, perhaps because axis patterns have more explicit multi-channel encoding, tended toward oversplitting (one shift as 2-3 entries).

- **Dual-role elements** are slightly more common in AD (4 cases vs 3 in OD). The breathing zone pattern -- simultaneously a mode-transition Instrument and a content Component -- appears in both families and continues to resist clean categorization.

**Model refinement recommendation:** Add a **Structural Marker** sub-type within Component for rendered DOM elements that have dedicated classes and visible presentation but zero content slots (chapter dividers, section titles, breathing zones). This captures the legitimate structural role without requiring multi-slot content container characteristics.

---

## 6. Quality Summary + Recommendations for Wave 3

### 6a. Worker Rankings

1. **AD-006 worker** -- 35 elements, most thorough. Read 2276 lines in 6 passes. Identified unique compound-page elements (Pattern Echo Grid, Axis Indicator, multiple layout components). Metacognitive check explicitly flagged 4 potential gaps. Only miss: footer bookend. Best AD findings file.

2. **AD-005 worker** -- 28 elements + 6 infrastructure. Clean separation of gesture/component dual-cataloging. Honest about `.reveal-on-scroll` non-instantiation. Breathing zone taxonomy-resistance explicitly flagged. One weak entry (density table dual-instance ambiguity).

3. **AD-003 worker** -- 27 elements. Strong pseudo-element detection (3 found: details `::before`, step-list `::before`, page-end `::before`). Responsive breakpoints thoroughly covered (3 breakpoints). Grid Gap as Sparse Ocean is the weakest entry but the reasoning is transparent.

4. **AD-002 worker** -- 25 elements. Strong CRESCENDO multi-channel analysis (4 independent channels identified). Good dual-listing (Callout as both Component and Gesture). Weaknesses: Version Badge separated, Header classified as Instrument, Line-Height Compression has factual errors, border hierarchy miscounted.

5. **AD-001 worker** -- 24 elements. Thorough 4-pass reading of all 1737 lines. Strong metacognitive check with 7 questions answered. Good handling of dual-nature elements. Weaknesses: Missed closing epitaph, ::selection as weakest gesture, tables #6-8 border cases not sufficiently flagged.

6. **AD-004 worker** -- 27 elements (before correction: 23 after merges/removals). Good geological metaphor analysis. Weaknesses: Gesture oversplitting (3 entries for one gradient), Typography Scale Degradation is not a CSS gesture, Spiral Container references orphaned class, Inline Code below component threshold. Most corrections needed.

### 6b. Buddy Rankings

1. **AD-006 buddy** -- Most thorough review. Found footer bookend (significant miss). Renamed border-weight to border-color. Clean verification of all 35 entries. Accepted all categorizations with only 2 soft debates.

2. **AD-004 buddy** -- Most impactful corrections: gesture merging (3->1), typography degradation reclassification, orphaned CSS detection. Clear calibration-precedent reasoning throughout.

3. **AD-002 buddy** -- Three significant corrections (version badge merge, header reclassify, generic table addition). Caught line-height factual error and border hierarchy miscount. Revised count methodology is clear.

4. **AD-003 buddy** -- Clean 27-entry verification. Grid Gap flagged as weak. Version Badge granularity noted. 89% HIGH confidence rate.

5. **AD-001 buddy** -- Found closing epitaph (moderate miss). Tables #6-8 boundary discussion is nuanced. Selection highlight correctly flagged. Good taxonomy challenge sections.

6. **AD-005 buddy** -- Solid entry-by-entry verification. Density Table dual-instance catch is good. Breathing Zone taxonomy flag. No critical misses found, no critical corrections needed. Comprehensive but less impactful than others.

### 6c. Miss Rates

| File | Worker Found | Buddy Adds | Buddy Removes/Merges | Miss Rate |
|------|-------------|-----------|---------------------|-----------|
| AD-001 | 24 | 2 | 1 | 8.3% |
| AD-002 | 25 | 2 | 2 | 8.0% |
| AD-003 | 27 | 0 | 1 | 0% |
| AD-004 | 27 | 0 | 4 | 0% (14.8% correction rate) |
| AD-005 | 28 | 0 | 1 | 0% |
| AD-006 | 35 | 1 | 0 | 2.9% |
| **Average** | **27.7** | **0.83 adds** | **1.5 removes** | **3.2% miss, 7.9% correction** |

**Key insight:** Almost identical to OD: workers missed very little (3.2% miss rate). Buddy value is primarily in REMOVALS and RECLASSIFICATIONS (7.9% correction rate). Workers continue to over-include rather than under-include. The correction rate is essentially unchanged from OD (7.8%), suggesting the Wave 1 learnings helped but didn't fundamentally change the error pattern.

### 6d. Recommendations for Wave 3 (CD Family)

#### Apply These Refined Thresholds

1. **Phantom test** (confirmed from Wave 1): Zero DOM instances = do not catalog. Verify EVERY CSS class appears in HTML.

2. **Infrastructure exclusion** (confirmed from Wave 1): Skip `::selection`, `:focus-visible`, `@media print`, `@media (prefers-reduced-motion)`, `.skip-link`. No exceptions.

3. **Sub-element merge** (strengthened by Wave 2): Version Badge should be noted within the Meta-Line entry, not cataloged separately, unless it appears in a context independent of the meta-line. Apply the Evidence DNA test: "Could this sub-element appear in a different context and still function?"

4. **Gesture merge rule** (NEW from Wave 2): When multiple CSS properties shift together across the same set of elements following ONE conceptual rule, catalog as ONE gesture with sub-channels noted. Do not split border-weight, spacing, and background into separate entries when they all encode the same gradient.

5. **Self-referential content test** (NEW from Wave 2): Tables/diagrams describing the page itself get Instrument status ONLY if they have a specialized CSS class with distinct visual treatment. Generic tables with self-referential content are "content about the page" within a Component, not Instruments.

6. **Content-density-as-gesture threshold** (NEW from Wave 2): Editorial distribution of elements (code block count per section, paragraph density) is NOT a CSS gesture unless encoded in CSS properties.

7. **Component slot test** (confirmed from Wave 1): A Component MUST have defined content slots. Zero-slot rendered elements are Structural Markers (note as such, can be classified as Component with "zero-slot structural marker" annotation).

#### Watch for CD-Specific Patterns

1. **Combination explorations** use MULTIPLE axis and density patterns within one file. Workers should identify WHERE patterns change and whether the transition itself constitutes a Gesture or Instrument.

2. **CD-006 is the pilot migration** -- the richest exploration in the entire system. Expect 40+ elements. Workers should plan for extended reading passes.

3. **Compositional complexity** may generate more dual-role elements. CD files combine OD organizational patterns with AD axis patterns, creating layered compositions where the same element serves multiple taxonomy roles simultaneously.

4. **Cross-reference AD and OD findings.** When a CD file uses an axis pattern from AD or an organizational pattern from OD, check if the same elements were cataloged in the source files. CD files should have the union of both families' patterns plus novel combination elements.
