# CD-003 File Tree with Callouts -- Instrument / Gesture / Component Catalog

**File:** `design-system/validated-explorations/combination/CD-003-file-tree-with-callouts.html`
**Lines:** 1770 (75 comment header + 935 CSS + 760 HTML)
**Combination:** DD:ISLANDS | OD:SPATIAL | AD:BENTO GRID + CHOREOGRAPHY
**Total elements found:** 26

---

## INSTRUMENTS (6)

---

### 1. Header Meta-Line -- INSTRUMENT

**CSS class(es):** `.meta-line`, `.version-badge`
**CSS lines:** 265-288
**HTML lines:** 1022-1026
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION CD-003</span>
  <span>COMBINATION: FILE TREE WITH CALLOUTS</span>
  <span class="version-badge">v1</span>
</div>
```

**Reader function:** Orients the reader within the exploration system by identifying the exploration ID (CD-003), the combination type being tested, and the version. The monospace version badge provides provenance metadata at a glance.

**Detection reasoning:** Instrument, not Component. Its sole purpose is reader orientation -- telling the reader WHERE this page sits in the CD exploration series and WHAT it tests. Removing it loses document identity. It has no reusable content slots (it is metadata, not a container).

**Multi-channel coordination:** Three metadata channels: (1) uppercase letter-spacing 0.15em text for identification, (2) monospace badge with 1px micro-border for version, (3) flex layout with gap for visual grouping.

**Pipeline implication:** Every exploration page needs a persistent identifier that connects it to the broader system. A pipeline could derive this from the exploration manifest.

**Derivation question:** "How does the reader know which exploration this is and where it fits in the CD series?"

---

### 2. Cell Type Badge -- INSTRUMENT

**CSS class(es):** `.cell-badge`, `.cell-badge--hub`, `.cell-badge--spoke`, `.cell-badge--file-tree`
**CSS lines:** 619-645
**HTML lines:** 1086, 1141, 1167, 1189, 1218 (in bento cells)
**DOM structure:**
```html
<span class="cell-badge cell-badge--file-tree">Root</span>
<span class="cell-badge">Info</span>
<span class="cell-badge">Tip</span>
<span class="cell-badge">Config</span>
<span class="cell-badge">Gotcha</span>
```

**Reader function:** Labels each bento cell with its role in the spatial layout. The reader can scan badges to understand the grid's semantic topology without reading the content. Color-coded variants (hub=red, spoke=blue, file-tree=green) add a visual classification channel.

**Detection reasoning:** Instrument, not Component. The badge does not hold content -- it tells the reader WHAT KIND of content the cell contains. It is a type indicator, a metadata device. Removing it forces the reader to infer cell purpose from content alone.

**Multi-channel coordination:** Three encoding channels: (1) monospace font + uppercase letter-spacing for "metadata" register, (2) color-coded border for semantic category (hub/spoke/file-tree), (3) 1px micro-border + compact padding for lightweight feel.

**Pipeline implication:** A spatial layout needs cell-level wayfinding. When content is organized by position (bento grid), each position needs a label explaining its role in the topology.

**Derivation question:** "If bento cells encode meaning through position, how does the reader know what each position means?"

---

### 3. Choreography Spoke Label -- INSTRUMENT

**CSS class(es):** `.choreo-spoke__label`
**CSS lines:** 737-745
**HTML lines:** 1347, 1383, 1418
**DOM structure:**
```html
<div class="choreo-spoke__label">Spoke 1 -- Recommended</div>
<div class="choreo-spoke__label">Spoke 2 -- Traditional</div>
<div class="choreo-spoke__label">Spoke 3 -- Recommendation</div>
```

**Reader function:** Labels each spoke's position in the hub-spoke topology AND provides an editorial stance (Recommended, Traditional, Recommendation). This is dual-function: spatial wayfinding + editorial framing.

**Detection reasoning:** Instrument. Its purpose is orientation -- telling the reader WHERE they are in the choreographic flow and WHAT editorial weight this spoke carries. The monospace uppercase treatment signals metadata, not content.

**Multi-channel coordination:** Two channels: (1) monospace uppercase with 0.1em letter-spacing = spatial position metadata, (2) editorial annotation ("Recommended") = reading-register guidance.

**Pipeline implication:** Hub-spoke layouts need spoke identification. The combination of structural label + editorial annotation is more useful than either alone.

**Derivation question:** "In a radiating spoke layout, how does the reader track which spoke they're reading and how it relates to the hub?"

---

### 4. Smooth Transition Divider -- INSTRUMENT

**CSS class(es):** `.transition--smooth`
**CSS lines:** 752-766
**HTML lines:** 1244
**DOM structure:**
```html
<div class="transition--smooth" role="separator" aria-hidden="true"></div>
```

**Reader function:** Signals the boundary between two axis patterns (bento grid -> choreography) while communicating that the transition is SMOOTH -- the reading mode does not change fundamentally. The minimal 120px centered line says "new section" without saying "new mode."

**Detection reasoning:** Instrument. It is a wayfinding marker at a structural boundary. It tells the reader "you are crossing from one layout pattern to another." The ::after pseudo-element creates a visual signal (centered 120px x 3px line) that is purely orientational.

**Multi-channel coordination:** Two channels: (1) 32px height (minimal for SMOOTH, vs 64px+ for mode-shift transitions), (2) centered 120px hairline at 50% vertical position. The shortness of the line encodes "smooth continuity" -- a wider or taller divider would imply a harder break.

**Pipeline implication:** When two axis patterns are spatially equivalent (both position-based), the transition marker should be minimal. The size of the divider IS the transition taxonomy.

**Derivation question:** "How does the reader know they've crossed from bento grid to choreography without feeling a disorienting mode shift?"

---

### 5. Page End Marker -- INSTRUMENT

**CSS class(es):** `.page-end`
**CSS lines:** 917-933
**HTML lines:** 1680-1682
**DOM structure:**
```html
<div class="page-end" role="contentinfo" aria-label="End of exploration">
  CD-003 FILE TREE WITH CALLOUTS
</div>
```

**Reader function:** Signals unambiguous document termination. The ::before pseudo-element (64px x 3px centered line) provides a visual period. The monospace 0.3em letter-spacing text restates the exploration identity, creating a bookend with the header meta-line.

**Detection reasoning:** Instrument. Purely a wayfinding device. It tells the reader "you have reached the end." Removing it would leave the reader unsure whether more content follows. The wide letter-spacing and centered alignment create a "closing credits" register.

**Multi-channel coordination:** Two channels: (1) ::before pseudo-element = 64px centered line as visual terminus, (2) monospace text with 0.3em letter-spacing = identification restated in closing register.

**Pipeline implication:** Every page needs an explicit end signal. The bookend pattern (meta-line at top, page-end at bottom, same content) creates structural symmetry.

**Derivation question:** "How does the reader know they've reached the end of the exploration, not just a section break?"

---

### 6. RAR Block (Research Application Record) -- INSTRUMENT

**CSS class(es):** `.rar-block`
**CSS lines:** 866-886
**HTML lines:** 1490-1677
**DOM structure:**
```html
<section aria-label="Research Application Record" class="rar-block">
  <h2>Research Application Record</h2>
  <h3>1. Combination Pattern</h3>
  <p>...</p>
  <!-- ... 11 subsections with tables ... -->
</section>
```

**Reader function:** Self-documentation instrument that records which research findings were applied, how combination rules were followed, and which anti-patterns were avoided. This is the page's awareness of its own provenance -- a meta-instrument that makes the design decisions visible.

**Detection reasoning:** Instrument. Its entire purpose is making the page self-aware -- documenting what research generated this page and how rules were applied. It does not deliver article content; it delivers metadata about the article's construction. Removing it loses all provenance information.

**Multi-channel coordination:** Multiple channels: (1) breathing background (#FAF5ED) + 3px structural border = visually distinct from content sections, (2) numbered subsections with tables = systematic self-audit format, (3) positioned after all content (chapter margin-top) = epilogue placement.

**Pipeline implication:** Every exploration needs a provenance record. The RAR block pattern could be auto-generated by a pipeline from the research manifest and rule compliance checks.

**Derivation question:** "How does the page document which research findings it applied and which rules it followed?"

---

## GESTURES (7)

---

### 7. Islands Density Spacing -- GESTURE

**CSS class(es):** `.page-container > section`
**CSS lines:** 533-539
**HTML lines:** N/A (applied via CSS to all sections)

**Reader function:** Creates the ISLANDS density pattern by enforcing 64px (--space-16) ocean between content sections. Each section becomes a discrete island surrounded by structural emptiness. The reader experiences distinct clusters rather than continuous flow.

**Detection reasoning:** Gesture, not styling. This is a coordinated spacing system that changes HOW the reader processes content -- in discrete chunks rather than continuous scroll. The 64px gaps create cognitive breathing zones. Removing this collapses sections into a continuous stream, fundamentally changing the reading mode.

**Multi-channel coordination:** Single property (margin-bottom: 64px) applied systematically. The consistency IS the gesture -- every section gets the same ocean, creating a rhythm. The last-child exception (margin-bottom: 0) prevents trailing whitespace.

**Pipeline implication:** ISLANDS density requires a consistent ocean spacing token applied at the section level. The pipeline needs to enforce minimum inter-section gaps.

**Derivation question:** "How does the page create the sensation of discrete content islands rather than a continuous document?"

---

### 8. Bento Cell Size Hierarchy -- GESTURE

**CSS class(es):** `.bento-item--2x2`, `.bento-item--2x1`, `.bento-item--1x2` (with base `.bento-grid`)
**CSS lines:** 560-578
**HTML lines:** 1083 (2x2), 1186 (2x1)

**Reader function:** Encodes content importance through physical cell size. The 2x2 File Tree cell is visually dominant (4x area of a 1x1 cell), immediately communicating "this is the primary content." The 2x1 code snippet cell is horizontally expansive, suggesting "this spans a concern." This is position-and-size-as-meaning.

**Detection reasoning:** Gesture. This is a multi-property shift (grid-column: span, grid-row: span) that changes the reader's attention allocation. It is not merely layout -- the SIZE of each cell IS its hierarchical weight. A 2x2 cell reads differently than four 1x1 cells even with identical content. The size shift is a perceptual inflection point that reorganizes attention.

**Multi-channel coordination:** Two properties coordinating: grid-column span and grid-row span. The 3-column grid (repeat(3, minmax(0, 1fr))) with 32px gap creates 5 distinct size classes: 2x2, 2x1, 1x2, and implicit 1x1.

**Pipeline implication:** In spatial layouts, content hierarchy should be encoded through container size, not just typography. The pipeline needs to map content importance to cell dimensions.

**Derivation question:** "If grid position encodes meaning, how does cell size encode importance within the grid?"

---

### 9. File Tree Weight Differentiation from Callouts -- GESTURE

**CSS class(es):** `.file-tree` (vs `.callout`)
**CSS lines:** 653-660 (file-tree) vs 356-361 (callout)

**Reader function:** Both File Tree and Callout use left-border: 4px solid as their visual anchor, but they differentiate through a coordinated multi-property shift. File Tree: dark border (#1A1A1A) + breathing background (#FAF5ED) + monospace font. Callout: colored accent border + sparse background (#FEF9F5) + body font. The reader perceives "structure" vs "advice" from the weight alone.

**Detection reasoning:** Gesture. This is a coordinated shift across 3 properties (border-color, background-color, font-family) that changes the reader's interpretive register. When encountering a dark-bordered monospace block, the reader enters "structural reading" mode. When encountering a colored-bordered body-font block, the reader enters "advisory reading" mode. This is a register shift encoded in CSS, not content.

**Multi-channel coordination:** Three channels shifting together: (1) border-color: #1A1A1A (structural dark) vs accent-* (advisory colored), (2) background: #FAF5ED (breathing) vs #FEF9F5 (sparse), (3) font-family: monospace (structural) vs body (advisory). All three must shift together for the gesture to work.

**Pipeline implication:** When two components share a visual mechanism (left-border), the pipeline must enforce weight differentiation to prevent monotony. This is finding CD-F-009.

**Derivation question:** "How can File Tree and Callout both use left-border: 4px without creating visual monotony?"

---

### 10. File Tree Item Type Encoding -- GESTURE

**CSS class(es):** `.file-tree__item--dir`, `.file-tree__item--file`, `.file-tree__item--highlight`
**CSS lines:** 668-680
**HTML lines:** 1089-1131

**Reader function:** Within the file tree, three visual registers encode item type: directories are bold (#1A1A1A, font-weight: 600), regular files are secondary (#666666), and highlighted files are red (#E83025, font-weight: 600). The reader can scan the tree and immediately distinguish structural containers (dirs) from leaves (files) from key entry points (highlights).

**Detection reasoning:** Gesture. This is a typographic shift that changes how the reader scans the tree. Without it, all items look identical and the tree is opaque. With it, the reader's eye is drawn to directories first (bold), then highlights (red), then files (gray). This is a reading-pace modulation -- the weight/color shift creates a visual hierarchy within monospace text.

**Multi-channel coordination:** Two channels per variant: (1) color: #1A1A1A / #666666 / #E83025, (2) font-weight: 600 / 400 / 600. Directories and highlights share weight (600) but differ in color; files differ from both in weight (400) and color (#666666).

**Pipeline implication:** File tree components need at least 3 visual registers to be scannable. The pipeline should enforce minimum differentiation between directory, file, and highlighted items.

**Derivation question:** "How does the reader distinguish directories, files, and key entry points within a monospace file tree?"

---

### 11. Callout Accent Color Temperature System -- GESTURE

**CSS class(es):** `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--challenge`, `.callout--essence`
**CSS lines:** 386-408
**HTML lines:** distributed across 1065, 1143, 1169, 1220, 1366, 1402, 1461, 1475

**Reader function:** Each callout variant shifts the reader's emotional register through coordinated color: blue (neutral/informational), green (warm/constructive), coral (cold/warning), amber (caution/challenge), purple (essence/philosophical). The color IS the emotional temperature, not decoration. The reader's internal response shifts before reading the text.

**Detection reasoning:** Gesture. This is a coordinated border-color + label-color shift that changes the reader's anticipatory response. Seeing a coral border, the reader braces for a warning before reading "Gotcha." Seeing green, the reader expects encouragement. This is a pre-reading register shift.

**Multi-channel coordination:** Two channels shift per variant: (1) border-left-color changes to accent-*, (2) .callout__label color changes to match. The Essence variant adds a third channel: font-family shifts to Instrument Serif italic, signaling "philosophical voice."

**Pipeline implication:** The temperature system enables the traffic-light avoidance rule (DD-F-015). The pipeline must track callout temperatures and enforce adjacency rules.

**Derivation question:** "How does the reader's emotional register shift before they even read the callout text?"

---

### 12. Essence Callout Serif Register Shift -- GESTURE

**CSS class(es):** `.callout--essence .callout__body`
**CSS lines:** 405-408
**HTML lines:** 1475-1484

**Reader function:** The Essence callout shifts the body text from Inter (body font) to Instrument Serif italic, creating a perceptual shift from "informational reading" to "contemplative reading." This is the only callout variant where the body font changes -- all others stay in Inter. The serif italic signals "the archivist speaks."

**Detection reasoning:** Gesture, not just a variant. Most callout variants only shift border and label color. Essence shifts the BODY FONT -- a fundamentally different reading register. The reader must slow down because serif italic at body size reads differently than sans-serif. This is a pace-change gesture.

**Multi-channel coordination:** Three channels: (1) border-left-color: accent-purple, (2) label color: accent-purple, (3) body font-family: Instrument Serif + font-style: italic. Channel 3 is unique to Essence -- no other callout variant changes the body font.

**Pipeline implication:** Soul Piece #2 restricts Instrument Serif italic to Essence/Core contexts only. The pipeline must enforce this font restriction -- any serif body text outside Essence is a soul violation.

**Derivation question:** "How does the page signal that a callout contains philosophical truth rather than practical advice?"

---

### 13. Responsive Bento Collapse Sequence -- GESTURE

**CSS class(es):** `@media (max-width: 960px)` and `@media (max-width: 768px)` rules on `.bento-grid`, `.bento-item--*`, `.choreo-spokes`
**CSS lines:** 938-1008

**Reader function:** The bento grid collapses in two stages: 3-column -> 2-column at 960px, 2-column -> 1-column at 768px. Multi-span items lose their span progressively (2x2 -> 2x1 -> 1x1). The choreography spokes collapse from 2-column to 1-column at 768px. This changes the reading mode from spatial scanning (grid) to linear scrolling (stack).

**Detection reasoning:** Gesture. The collapse is not merely responsive -- it fundamentally changes the reading mode. At 1440px, the reader scans a spatial grid where position = meaning. At 768px, the reader scrolls a linear stack where sequence = meaning. The grid-to-stack shift is a reading-mode transformation.

**Multi-channel coordination:** Multiple properties shift at each breakpoint: grid-template-columns, grid-column span, grid-row span, flex-direction on cell headers, and padding on containers. All shift together to maintain visual coherence during the mode change.

**Pipeline implication:** Spatial layouts must have a defined collapse strategy. The pipeline needs to specify how size-based hierarchy degrades to sequence-based hierarchy at smaller viewports.

**Derivation question:** "When the spatial layout loses its width, how does position-based meaning convert to sequence-based meaning?"

---

## COMPONENTS (11)

---

### 14. Header (Full-Bleed Dark) -- COMPONENT

**CSS class(es):** `header`, `.header-inner`
**CSS lines:** 253-305
**HTML lines:** 1020-1038
**DOM structure:**
```html
<header>
  <div class="header-inner">
    <div class="meta-line">...</div>
    <h1>File Tree with Callouts</h1>
    <p class="subtitle">...</p>
  </div>
</header>
```

**Reader function:** Full-bleed dark container that establishes the page's identity and topic. Contains three slots: meta-line (Instrument #1), title, and subtitle with context-setting prose.

**Detection reasoning:** Component. Reusable container with defined slots (meta-line, title, subtitle). The full-bleed dark background (#1A1A1A) with 3px red bottom border creates a distinctive visual frame. Every CD exploration uses this header structure.

**Multi-channel coordination:** N/A (component, not gesture).

**Pipeline implication:** A standard page-opening component. The pipeline needs a header template with slots for identification, title, and context.

**Derivation question:** "What is the standard container for establishing page identity and topic?"

---

### 15. Bento Cell -- COMPONENT

**CSS class(es):** `.bento-cell`, `.bento-cell__header`, `.bento-cell__title`, `.bento-cell__body`
**CSS lines:** 580-617
**HTML lines:** 1083-1133 (Cell 1), 1138-1159 (Cell 2), 1164-1181 (Cell 3), 1186-1210 (Cell 4), 1215-1234 (Cell 5)
**DOM structure:**
```html
<div class="bento-cell bento-item--2x2">
  <div class="bento-cell__header">
    <span class="bento-cell__title">Project File Tree</span>
    <span class="cell-badge cell-badge--file-tree">Root</span>
  </div>
  <!-- content: file-tree, callout, code block, etc. -->
</div>
```

**Reader function:** A self-contained content island within the bento grid. Each cell has a header slot (title + badge) and a flexible content slot that can hold any content type (file tree, callout, code, prose). The 3px structural border and white background (#FFFFFF) create a bounded container.

**Detection reasoning:** Component. Has defined slots (header with title + badge, flexible body). Reused 5 times in the bento grid with different content. The structure is consistent while the content varies -- the definition of a component.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** The bento cell is a generic spatial container. The pipeline needs a cell component that can hold any content type while maintaining consistent framing (border, padding, header structure).

**Derivation question:** "What container holds a single content island within a spatial grid layout?"

---

### 16. Bento Grid Layout -- COMPONENT

**CSS class(es):** `.bento-grid`
**CSS lines:** 560-564
**HTML lines:** 1079-1236
**DOM structure:**
```html
<div class="bento-grid">
  <div class="bento-cell bento-item--2x2">...</div>
  <div class="bento-cell">...</div>
  <div class="bento-cell">...</div>
  <div class="bento-cell bento-item--2x1">...</div>
  <div class="bento-cell">...</div>
</div>
```

**Reader function:** 3-column CSS Grid container that arranges bento cells spatially. The 32px gap between cells creates the ISLANDS ocean. Cell spanning classes (2x2, 2x1, 1x2) encode content hierarchy through physical size.

**Detection reasoning:** Component. It is a layout container with defined slots (child bento-cells of various spans). The grid structure is reusable for any spatial layout that needs variable-size cells.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** The bento grid is a spatial layout primitive. The pipeline needs a grid component that accepts cells with size hints (span values).

**Derivation question:** "How are multiple content islands arranged spatially with position-based hierarchy?"

---

### 17. File Tree -- COMPONENT

**CSS class(es):** `.file-tree`, `.file-tree__item`, `.file-tree__item--dir`, `.file-tree__item--file`, `.file-tree__item--highlight`, `.file-tree__comment`
**CSS lines:** 653-687
**HTML lines:** 1088-1132 (main tree), 1349-1364 (feature-based), 1385-1399 (layer-based)
**DOM structure:**
```html
<div class="file-tree">
  <span class="file-tree__item file-tree__item--dir">my-react-app/</span>
  <span class="file-tree__item file-tree__item--dir">  src/</span>
  <span class="file-tree__item file-tree__item--file">    Button.tsx</span>
  <span class="file-tree__item file-tree__item--highlight">    App.tsx</span>
  <span class="file-tree__item file-tree__item--file">  <span class="file-tree__comment">← comment</span></span>
</div>
```

**Reader function:** Displays a hierarchical file structure using monospace text with indentation. Slot types: directory items (bold), file items (secondary gray), highlighted items (red, for key entry points), and inline comments (italic body font). The 4px dark left border anchors the tree visually.

**Detection reasoning:** Component. Has defined slots (items of 3 types + comments). Reused 3 times in the page with different file structures. The structure is consistent (monospace block with left border) while content varies.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** File tree needs at least 3 item types to be useful. The pipeline should support dir/file/highlight classification and optional inline comments.

**Derivation question:** "How is a hierarchical file structure displayed as a scannable visual component?"

---

### 18. Callout (5-Variant System) -- COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, plus variants `--note`, `--tip`, `--gotcha`, `--caution`, `--challenge`, `--essence`
**CSS lines:** 356-408
**HTML lines:** 1065-1076, 1143-1158, 1169-1180, 1220-1233, 1366-1375, 1402-1411, 1461-1472, 1475-1484
**DOM structure:**
```html
<div class="callout callout--tip">
  <div class="callout__label">Tip</div>
  <div class="callout__body">
    <p>Content here.</p>
  </div>
</div>
```

**Reader function:** 2-zone advisory container with label (type identifier) and body (advisory content). The left border-left: 4px solid in accent color creates family DNA shared across all 6 variants. Each variant shifts the reader's emotional register through color temperature.

**Detection reasoning:** Component. Has defined slots (label + body). Reused 8 times across the page in 5 variants (note, tip, gotcha, challenge, essence). The structure is consistent while the accent color and content vary.

**Multi-channel coordination:** N/A (component -- the color shifts are cataloged separately as Gesture #11).

**Pipeline implication:** The callout is the primary advisory component. The pipeline needs a callout with variant selection and content slots, plus rules about adjacency and temperature.

**Derivation question:** "What container delivers advisory content (tips, warnings, gotchas) with emotional temperature?"

---

### 19. Choreography Section -- COMPONENT

**CSS class(es):** `.choreo-section`
**CSS lines:** 693-697
**HTML lines:** 1264-1449
**DOM structure:**
```html
<div class="choreo-section">
  <div class="core-abstraction">...</div>
  <div class="choreo-hub">...</div>
  <div class="choreo-spokes">
    <div class="choreo-spoke">...</div>
    <div class="choreo-spoke">...</div>
    <div class="choreo-spoke choreo-spoke--full">...</div>
  </div>
</div>
```

**Reader function:** Flex-column container that organizes hub-spoke choreographic flow with 48px gaps between major sub-components. Holds three slot types: a framing component (Core Abstraction), a hub (Decision Matrix), and a spoke grid.

**Detection reasoning:** Component. It is a layout container with defined slots (framing + hub + spokes). The flex-column with 48px gap creates the choreographic rhythm.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** The choreography section is a layout pattern for hub-spoke content. The pipeline needs a container that sequences framing -> comparison -> evidence.

**Derivation question:** "What container organizes content in a hub-spoke choreographic flow?"

---

### 20. Choreography Hub -- COMPONENT

**CSS class(es):** `.choreo-hub`, `.choreo-hub__title`
**CSS lines:** 699-709
**HTML lines:** 1289-1339
**DOM structure:**
```html
<div class="choreo-hub">
  <h3 class="choreo-hub__title">Architecture Pattern Comparison</h3>
  <table class="decision-matrix">...</table>
</div>
```

**Reader function:** The central comparison container in a hub-spoke layout. Contains a title slot and a flexible content slot (here holding a decision matrix table). The 3px structural border and 32px padding create a visually weighty center that the spokes radiate from.

**Detection reasoning:** Component. Has defined slots (title + content). Visually heavier than spokes (same border weight but more padding) to establish visual centrality.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** Hub-spoke layouts need a central hub component that is visually heavier than the spokes. The hub holds comparison/decision content.

**Derivation question:** "What container serves as the central comparison point in a hub-spoke layout?"

---

### 21. Choreography Spoke -- COMPONENT

**CSS class(es):** `.choreo-spoke`, `.choreo-spoke--full`, `.choreo-spoke__title`, `.choreo-spoke__label`
**CSS lines:** 717-745
**HTML lines:** 1346-1376 (Spoke 1), 1382-1413 (Spoke 2), 1417-1445 (Spoke 3)
**DOM structure:**
```html
<div class="choreo-spoke">
  <div class="choreo-spoke__label">Spoke 1 -- Recommended</div>
  <h3 class="choreo-spoke__title">Feature-Based Structure</h3>
  <div class="file-tree">...</div>
  <div class="callout callout--tip">...</div>
</div>
```

**Reader function:** A radiating content container in the hub-spoke layout. Contains slots for: label (Instrument #3), title, and flexible content (file trees, callouts, reasoning blocks). The --full variant spans 2 columns for wider content.

**Detection reasoning:** Component. Has defined slots (label, title, flexible content). Reused 3 times with different content. The 2-column grid layout with --full variant provides size flexibility.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** Spokes are evidence containers that radiate from a hub. Each spoke needs a structural label, a title, and flexible content slots.

**Derivation question:** "What container presents one option/evidence unit in a hub-spoke comparison layout?"

---

### 22. Core Abstraction -- COMPONENT

**CSS class(es):** `.core-abstraction`, `.core-abstraction__title`, `.core-abstraction__body`
**CSS lines:** 773-796
**HTML lines:** 1269-1286
**DOM structure:**
```html
<div class="core-abstraction">
  <h3 class="core-abstraction__title">The Architecture Decision</h3>
  <div class="core-abstraction__body">
    <p>A React application's file structure is not arbitrary...</p>
    <p>The decision is architectural, not aesthetic...</p>
  </div>
</div>
```

**Reader function:** A framing container that establishes the conceptual foundation before the reader encounters comparison content. The breathing background (#FAF5ED) and 3px structural border create a "bounded thought" -- a self-contained conceptual frame.

**Detection reasoning:** Component. Has defined slots (title + body). The breathing background differentiates it from white-background bento cells and callouts. Serves the G2 "framed = bounded thought" principle.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** Hub-spoke layouts need a framing component before the hub that establishes the conceptual context for the comparison that follows.

**Derivation question:** "What container frames the conceptual question that the hub-spoke comparison will answer?"

---

### 23. Decision Matrix -- COMPONENT

**CSS class(es):** `.decision-matrix`, `.decision-matrix .recommended`
**CSS lines:** 802-819
**HTML lines:** 1291-1338
**DOM structure:**
```html
<table class="decision-matrix">
  <thead>
    <tr>
      <th>Criterion</th>
      <th>Feature-Based</th>
      <th>Layer-Based</th>
      <th>Domain-Driven</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Organization</td>
      <td class="recommended">By feature</td>
      <td>By type</td>
      <td>By domain</td>
    </tr>
    <!-- more rows -->
  </tbody>
</table>
```

**Reader function:** A comparison table that structures multi-option evaluation. The `.recommended` class highlights winning cells in green (accent-green, font-weight: 600), guiding the reader's evaluation. The breathing-background header row differentiates criteria from options.

**Detection reasoning:** Component. Has defined slots (criteria column + option columns, with recommended highlighting). The table structure is reusable for any multi-option comparison.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** Architecture overview pages (Recipe 6, R5-039) need a comparison table with recommendation highlighting. The pipeline should support per-cell recommendation marking.

**Derivation question:** "How are multiple architecture options compared across consistent criteria with editorial recommendation?"

---

### 24. Reasoning Block -- COMPONENT

**CSS class(es):** `.reasoning`, `.reasoning__title`, `.reasoning__body`
**CSS lines:** 824-849
**HTML lines:** 1420-1444
**DOM structure:**
```html
<div class="reasoning">
  <div class="reasoning__title">Decision Framework</div>
  <div class="reasoning__body">
    <p><strong>Start with feature-based.</strong> ...</p>
    <p><strong>Evolve to domain-driven</strong> ...</p>
    <p><strong>Avoid layer-based</strong> ...</p>
  </div>
</div>
```

**Reader function:** A recommendation container with purple accent (border-left: 4px solid accent-purple) that delivers structured reasoning. The serif italic title and purple border signal "analytical voice" -- distinct from advisory callouts (which give practical tips) and essence callouts (which give philosophical truths).

**Detection reasoning:** Component. Has defined slots (title + body). Structurally similar to callouts but semantically distinct -- reasoning provides analytical justification, not advisory guidance. The purple accent + serif title combination is unique to this component.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** Decision-oriented pages need a reasoning component distinct from callouts. Callouts say "do this" (advisory); reasoning says "here's why" (analytical).

**Derivation question:** "What container presents structured reasoning and recommendations as distinct from practical tips?"

---

## ADDITIONAL OBSERVATIONS (Infrastructure / Non-Cataloged)

### Skip Link (lines 236-250, 1014)
Accessibility infrastructure. Hidden until focused. Not a reader-experience element.

### ::selection Styling (lines 224-227)
Branded selection color (red on cream). Infrastructure -- not a conscious reading-experience shift.

### Focus-Visible Outline (lines 230-233)
WCAG-compliant focus indicator. Accessibility infrastructure.

### Print Styles (lines 454-476)
Print-specific overrides. Infrastructure.

### Reduced Motion (lines 445-451)
Accessibility preference. Infrastructure.

### Screen Reader Only (.sr-only, lines 479-489)
Accessibility utility class. Infrastructure.

### Syntax Highlighting Tokens (.kw, .st, .cm, .fn, .ty, .nu, .pu, lines 337-343)
Code colorization tokens used in `<pre>` blocks. These are sub-element styling within the code block component -- not independent gestures. They provide scanability within code but don't shift the reader's mode outside the code context.

### Inline Code Styling (code:not(pre code), lines 346-352)
Monospace inline code with subtle background. Standard inline differentiation -- not a gesture (does not shift reading register across a boundary).

### Footer (.page-footer, lines 891-914, HTML 1688-1694)
Dark footer with red top border, ID text, and 48px red rule. Infrastructure bookend. Minimal semantic content -- restates the exploration identity and combination pattern. Could be considered a minor instrument (restates identity) but is standard page infrastructure present on all explorations.

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. Read all 1770 lines: 75-line comment header, locked layer CSS (lines 94-490), combination layer CSS (lines 526-1008), and full HTML body (lines 1012-1696), plus trailing finding comments (lines 1698-1769).

2. **Am I identifying elements at the DOM level?** YES. Every element is tied to specific CSS classes, line numbers, and HTML instances. DOM structures are provided for each.

3. **Could I have missed subtle gestures?** I checked for:
   - The responsive collapse (Gesture #13) is a significant reading-mode shift
   - The file-tree vs callout weight differentiation (Gesture #9) is a coordinated multi-property shift, not just styling
   - The Essence serif shift (Gesture #12) is the only callout variant that changes body font
   - The syntax highlighting tokens (.kw, .st, etc.) are sub-element styling, not independent gestures -- they don't shift reading register at a document level

4. **Am I applying the reader-function test?** YES. Infrastructure items (skip-link, ::selection, focus-visible, print, reduced-motion, .sr-only) are excluded because removing them does not change the reading experience. Each cataloged element passes the removal test -- removing it would change how the reader orients, reads, or interprets content.

5. **Did I check for pseudo-elements?** YES. Found:
   - `.transition--smooth::after` (Instrument #4 -- centered divider line)
   - `.page-end::before` (Instrument #5 -- terminus line)
   - `::selection` (infrastructure, excluded)

6. **Did I check responsive breakpoints?** YES. Two breakpoints found: 960px (3-col -> 2-col) and 768px (-> 1-col). Cataloged as Gesture #13. No elements appear/disappear at breakpoints -- the layout collapses but no content is hidden.

7. **Am I distinguishing styling from instruments/gestures?** YES. Key exclusions:
   - Syntax highlighting tokens = styling (within-code-block), not gesture
   - Inline code styling = typographic convention, not register shift
   - Footer = infrastructure bookend, not a distinct instrument (though borderline)
   - Table base styling (th/td) = formatting infrastructure, not gesture

---

## SUMMARY

| Category | Count | Elements |
|----------|-------|----------|
| Instruments | 6 | Meta-line, Cell Badge, Spoke Label, Smooth Transition, Page End, RAR Block |
| Gestures | 7 | Islands Spacing, Cell Size Hierarchy, File Tree/Callout Weight Diff, File Tree Item Types, Callout Temperature, Essence Serif Shift, Responsive Collapse |
| Components | 11 | Header, Bento Cell, Bento Grid, File Tree, Callout (5-variant), Choreo Section, Choreo Hub, Choreo Spoke, Core Abstraction, Decision Matrix, Reasoning Block |
| Infrastructure | 7 | Skip Link, ::selection, Focus-Visible, Print, Reduced Motion, SR-Only, Syntax Tokens |
| **Total cataloged** | **24** | |

**Key finding unique to CD-003:** The File Tree/Callout weight differentiation gesture (CD-F-009) -- two components sharing the same visual DNA (left-border: 4px) while avoiding monotony through coordinated multi-property shifts in border-color, background, and font-family. This is a reusable pattern for any pair of components that share a visual anchor.
