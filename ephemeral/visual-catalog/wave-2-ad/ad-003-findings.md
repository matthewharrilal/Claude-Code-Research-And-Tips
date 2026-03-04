# AD-003 Bento Grid — Visual Catalog Findings

**File:** `design-system/axis/AD-003-bento-grid.html`
**Lines:** 1896 (CSS: lines 70-1002, HTML: lines 1005-1896)
**Axis Pattern:** Bento Grid (modular CSS Grid with varied cell sizes)
**Density Pairing:** ISLANDS (discontinuous dense zones) + BOOKENDS (dense start/end)
**Paired OD:** OD-003 Task-Based (goal-structure pattern)

**Total elements found: 27** (10 Instruments, 8 Gestures, 9 Components)

---

## INSTRUMENTS

### 1. Meta Line — INSTRUMENT

**CSS class(es):** `.meta-line`
**CSS lines:** 257-267
**HTML lines:** 1016-1020
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION AD-003</span>
  <span>AXIS: BENTO GRID</span>
  <span class="version-badge">v1 enriched</span>
</div>
```

**Reader function:** Orients the reader to the exploration identity before the title: exploration number, axis type, and version status. Three metadata chips in a horizontal row tell you WHICH exploration (AD-003), WHAT axis (BENTO GRID), and WHAT version (v1 enriched) before you read any content.

**Detection reasoning:** This is an Instrument, not a Component, because its sole purpose is reader orientation. Remove it and the reader loses context about what they are reading. It delivers no article content.

**Multi-channel coordination:** Three visual channels encode metadata: (1) uppercase Inter at 12px with 0.15em letter-spacing for the format of a classification label, (2) secondary color (#666) for de-emphasis relative to the title below, (3) flexbox with 16px gap for chip-like horizontal layout.

**Pipeline implication:** "What if the reader needs to know where this document sits in a larger collection before they start reading?" Any multi-document system benefits from a classification bar above the title.

**Derivation question:** "What if the reader lands on this page from a search or cross-reference — how do they immediately know what kind of document this is?"

---

### 2. Version Badge — INSTRUMENT

**CSS class(es):** `.version-badge`
**CSS lines:** 269-278
**HTML lines:** 1019
**DOM structure:**
```html
<span class="version-badge">v1 enriched</span>
```

**Reader function:** Communicates document maturity/versioning status. The monospace font, 1px border, and compact padding signal "this is machine-precise metadata" distinct from the prose labels beside it.

**Detection reasoning:** Instrument because it conveys document state metadata. Removing it loses versioning awareness. It is not a Component (no content slots) or Gesture (no reading-register shift).

**Multi-channel coordination:** Three channels distinguish it from surrounding meta-line text: (1) JetBrains Mono font vs. Inter, (2) 1px border creating a contained "chip" form, (3) tighter 0.05em letter-spacing vs. 0.15em in the parent meta-line.

**Pipeline implication:** "How does the reader know whether this document is a draft, stable, or deprecated?" Version badges are a universal pattern for document lifecycle awareness.

**Derivation question:** "What if documents evolve through versions — how does the reader distinguish a first draft from a mature revision at a glance?"

---

### 3. Complexity Badge — INSTRUMENT

**CSS class(es):** `.complexity-badge`, `.complexity-badge--beginner`, `.complexity-badge--intermediate`, `.complexity-badge--advanced`
**CSS lines:** 608-633
**HTML lines:** 1115, 1167, 1194, 1211, 1318, 1363, 1384, 1401, 1485, 1527, 1549, 1569
**DOM structure:**
```html
<span class="complexity-badge complexity-badge--beginner">Beginner</span>
<span class="complexity-badge complexity-badge--intermediate">Intermediate</span>
<span class="complexity-badge complexity-badge--advanced">Advanced</span>
```

**Reader function:** Each bento cell carries a color-coded difficulty indicator. The reader can scan the grid and identify which tasks match their skill level WITHOUT reading the content. Green = beginner, blue = intermediate, amber = advanced.

**Detection reasoning:** Instrument, not Component. It is a metadata device encoding task difficulty. Remove it and the reader loses the ability to visually triage tasks by complexity. The color coding is semantic (skill level), not decorative.

**Multi-channel coordination:** Three coordinated channels per variant: (1) text color matches border color (green/blue/amber), (2) monospace font + uppercase + 0.05em tracking signals "classification label", (3) 1px border with color-matched border-color creates a self-contained badge chip. The three variants form a coherent 3-level scale.

**Pipeline implication:** "What if readers have different skill levels and need to visually triage which content sections are appropriate for them?" Color-coded difficulty badges on grid cells enable scan-then-select reading.

**Derivation question:** "What if each task island in the grid carried a visible difficulty classification so readers could route themselves by skill level?"

---

### 4. Duration Badge — INSTRUMENT

**CSS class(es):** `.duration-badge`
**CSS lines:** 652-656
**HTML lines:** 1117, 1169, 1196, 1212, 1320, 1365, 1386, 1402, 1487, 1529, 1551, 1571
**DOM structure:**
```html
<span class="duration-badge">~5 min</span>
```

**Reader function:** Tells the reader the estimated time investment for each task before they commit. Enables cost/benefit assessment at the scanning stage. Monospace font signals precision (these are estimates, but presented in a data-like register).

**Detection reasoning:** Instrument because it communicates task metadata (time cost). Without it, the reader cannot pre-assess effort. It does not hold content or shift reading register.

**Multi-channel coordination:** Two channels: (1) JetBrains Mono font at 12px signals "data value" distinct from the body text, (2) secondary color (#666) de-emphasizes it relative to the title and body but keeps it visible during scanning.

**Pipeline implication:** "How does the reader estimate effort before committing to a task?" Duration metadata is essential for task-based content where readers make selective commitment decisions.

**Derivation question:** "What if each task cell showed its time cost so the reader could plan their learning path?"

---

### 5. Category Label — INSTRUMENT

**CSS class(es):** `.category-label`
**CSS lines:** 771-781
**HTML lines:** 1107, 1311, 1478
**DOM structure:**
```html
<div class="category-label">Beginner</div>
<div class="category-label">Intermediate</div>
<div class="category-label">Advanced</div>
```

**Reader function:** Labels each bento grid cluster with its difficulty tier. Creates a three-band vertical progression (Beginner > Intermediate > Advanced) that orients the reader within the page's progressive complexity structure.

**Detection reasoning:** Instrument because it is purely a wayfinding label — it names the category of the grid section below it. Remove it and the reader loses awareness of the complexity tier they are viewing.

**Multi-channel coordination:** Four channels: (1) uppercase + 0.1em letter-spacing = classification format, (2) 600 weight + 12px size = small but authoritative, (3) 1px bottom border in subtle color creates a section-opening rule, (4) secondary text color (#666) signals "meta-label, not content."

**Pipeline implication:** "What if groups of related content need a visible organizational label?" Category labels create named bands within a progressive structure.

**Derivation question:** "What if the bento grid clusters were explicitly labeled by difficulty so the reader knows the progression?"

---

### 6. Section Heading with Structural Border — INSTRUMENT

**CSS class(es):** `.section-heading`
**CSS lines:** 540-546
**HTML lines:** 1098, 1290, 1469
**DOM structure:**
```html
<h2 class="section-heading">Getting Started</h2>
<h2 class="section-heading">Cell Size and Hierarchy</h2>
<h2 class="section-heading">Compound Grid Patterns</h2>
```

**Reader function:** Marks the major conceptual divisions of the page. The 3px bottom border (Cat 1 structural) creates a visual baseline that separates the heading from the content below, making the section boundary unmistakable even during fast scanning.

**Detection reasoning:** Instrument because it is a wayfinding device at the section level. The 3px structural border goes beyond styling — it creates a visible landmark in the page's vertical flow. The heading text names the section; the border marks its boundary.

**Multi-channel coordination:** Three channels: (1) Instrument Serif font signals "this is a section name" (display font reserved for headings), (2) 3px bottom border in --color-border creates a structural rule visible during scrolling, (3) 32px bottom margin creates breathing space before the grid.

**Pipeline implication:** "How does the reader know they have entered a new major section?" Structural-border headings serve as scroll-landmarks.

**Derivation question:** "What if each major section had a visible structural boundary so the reader can orient during fast scrolling?"

---

### 7. Verification Checklist — INSTRUMENT

**CSS class(es):** `.verify-list`, `.verify-list__item`, `.verify-list__check`
**CSS lines:** 808-828
**HTML lines:** 1618-1643
**DOM structure:**
```html
<ul class="verify-list">
  <li class="verify-list__item">
    <span class="verify-list__check">[&#10003;]</span>
    <span><code>border-radius: 0</code> on all grid cells...</span>
  </li>
  <!-- ... more items -->
</ul>
```

**Reader function:** A binary pass/fail checklist instrument that gives the reader a self-assessment tool. The green checkmark in monospace creates a "checklist already filled in" visual — the reader sees what SHOULD be true and can verify against their own implementation.

**Detection reasoning:** Instrument because it is a verification device, not content delivery. Its purpose is reader self-assessment. Remove it and the reader loses the ability to validate their own work against requirements.

**Multi-channel coordination:** Three channels: (1) green color on the check mark signals "pass/success", (2) monospace brackets `[check]` create a form-like visual, (3) flex layout with consistent gap creates aligned rows for scanability.

**Pipeline implication:** "What if the reader needs a structured way to verify their implementation against requirements?" Verification checklists convert requirements into self-assessment instruments.

**Derivation question:** "What if the back bookend provided a fill-in-the-blank verification instrument so readers can confirm they met all requirements?"

---

### 8. Page End Marker — INSTRUMENT

**CSS class(es):** `.page-end`
**CSS lines:** 985-1001
**HTML lines:** 1887-1889
**DOM structure:**
```html
<div class="page-end" role="contentinfo" aria-label="End of exploration">
  AD-003 BENTO GRID
</div>
```

**Reader function:** A visual closure signal that tells the reader "you have reached the end." The centered text, monospace font, and wide letter-spacing create a quiet capstone. The `::before` pseudo-element adds a 64px-wide, 3px-tall horizontal rule above the text as a terminal marker.

**Detection reasoning:** Instrument because it signals page completion — a position-awareness device. Without it, the page simply stops without visual finality (LW-4 fix). The `role="contentinfo"` also provides semantic closure for screen readers.

**Multi-channel coordination:** Four channels: (1) centered alignment signals "terminal element" (body text is left-aligned), (2) monospace font at 12px with 0.3em letter-spacing creates a mechanical/archival tone, (3) border color (#E0D5C5) for the text creates extreme de-emphasis, (4) `::before` pseudo-element generates a centered 64px horizontal rule above the text.

**Pipeline implication:** "How does the reader know the page is complete?" Visual closure signals prevent the "did the page break?" uncertainty.

**Derivation question:** "What if the page ended with a quiet capstone signal so the reader knows they have seen everything?"

---

### 9. RAR Block — INSTRUMENT

**CSS class(es):** `.rar-block`
**CSS lines:** 878-897
**HTML lines:** 1671-1839
**DOM structure:**
```html
<section aria-label="Research Application Record" class="rar-block">
  <h2>Research Application Record</h2>
  <h3>1. Axis Pattern</h3>
  <p>...</p>
  <!-- 11 fields total -->
</section>
```

**Reader function:** A structured metadata record documenting the research provenance of the exploration — which findings were applied, which citations used, which anti-patterns avoided. It makes the page's research DNA visible. The reader learns HOW and WHY the page was built, not just WHAT it contains.

**Detection reasoning:** Instrument because its entire purpose is making the page self-aware — it is metadata ABOUT the page, not content FOR the reader. Remove it and the page loses its research provenance transparency.

**Multi-channel coordination:** Three channels: (1) breathing zone background (#FAF5ED) distinguishes it from the main content sections (white cells), (2) 3px structural border creates a contained region, (3) chapter-level top margin (64px) creates separation from the article content above.

**Pipeline implication:** "What if the reader wants to understand the research decisions that shaped this page?" RAR blocks provide research transparency and auditability.

**Derivation question:** "What if every exploration included a structured record of which research findings were applied, creating an audit trail?"

---

### 10. Breathing Zone — INSTRUMENT

**CSS class(es):** `.breathing-zone`
**CSS lines:** 834-837
**HTML lines:** 1279, 1459
**DOM structure:**
```html
<div class="breathing-zone" role="separator" aria-hidden="true"></div>
```

**Reader function:** A 48px empty band with the breathing-zone background color (#FAF5ED) that creates cognitive decompression between major sections. It visually separates island clusters and signals "you are transitioning between difficulty tiers." The `role="separator"` provides semantic meaning; `aria-hidden="true"` keeps it out of screen reader flow.

**Detection reasoning:** Instrument because it is a positional awareness device — its presence tells the reader "you have left one section and are about to enter another." Remove it and the sections blur together. It is not styling (it carries no content) or a Component (it has no slots).

**Multi-channel coordination:** Two channels: (1) height of exactly 48px (OD-F-007 minimum for mode transitions) creates a standardized pause, (2) breathing-zone background color (#FAF5ED) distinguishes it from both the white dense cells and the cream page background.

**Pipeline implication:** "What if the page needs empty space between major sections that is deliberate and standardized rather than arbitrary?" Breathing zones make whitespace intentional and measurable.

**Derivation question:** "What if transitions between difficulty tiers used a visible empty zone to create cognitive decompression?"

---

## GESTURES

### 11. Cell Size as Hierarchy — GESTURE

**CSS class(es):** `.bento-item--large`, `.bento-item--wide`, `.bento-item--tall` (contrasted with default 1x1)
**CSS lines:** 569-580
**HTML lines:** 1112 (large), 1207 (wide), 1315 (tall), 1398 (wide), 1482 (large), 1566 (wide) — contrasted with default cells at 1164, 1191, 1360, 1381, 1524, 1546

**Reader function:** The primary hierarchy gesture of the bento grid. A 2x2 cell occupies four times the visual area of a 1x1 cell. The reader's eye is drawn to larger cells first — SIZE IS the signal. No badges, colors, or borders needed to indicate "this is more important." The space itself communicates hierarchy.

**Detection reasoning:** Gesture, not Instrument, because it changes HOW you read (scan large cells first, then fill in details from small cells) without adding any metadata. It is not a Component because the size variation is a CSS-encoded reading-register shift, not a content container.

**Multi-channel coordination:** Two CSS properties shift together: `grid-column: span N` and `grid-row: span N` create coordinated width+height changes. For `--large`: both span 2. For `--wide`: only column spans 2. For `--tall`: only row spans 2. The rule: physical area = importance level.

**Pipeline implication:** "What if content hierarchy were communicated through spatial size rather than visual decoration?" Grid span syntax is the CSS implementation of "size IS hierarchy."

**Derivation question:** "What if the grid cells themselves — through their physical dimensions — embodied the hierarchy, making decoration unnecessary?"

---

### 12. Grid Gap as Sparse Ocean — GESTURE

**CSS class(es):** `.bento-grid` (`gap: var(--space-8)`)
**CSS lines:** 560-564
**HTML lines:** 1109, 1312, 1479

**Reader function:** The 32px gap between grid cells creates the "sparse ocean" of the ISLANDS density pattern. Dense content lives inside cells; the gap IS the empty space between islands. As the reader scans, they experience alternating density: dense cell > sparse gap > dense cell. This rhythm IS the ISLANDS reading experience.

**Detection reasoning:** Gesture because the gap value encodes a density pattern — it shifts the reading rhythm between dense and sparse. It is not just "spacing between things" but a deliberate density encoding. Changing the gap value changes the reading experience fundamentally.

**Multi-channel coordination:** Single property (`gap`) but it creates a two-channel reading rhythm: (1) horizontal gaps between columns create column-level island separation, (2) vertical gaps between rows create row-level island separation. The uniform gap value ensures consistent ocean width in both directions.

**Pipeline implication:** "What if the empty space between grid cells were not just spacing but a deliberate density signal?" Grid gap as semantic spacing (not just layout convenience) is a reusable gesture.

**Derivation question:** "What if the grid gap were understood as the sparse ocean between dense task islands — making the whitespace meaningful rather than incidental?"

---

### 13. Progressive Complexity Positioning — GESTURE

**CSS class(es):** (No dedicated class — encoded in source order within `.bento-grid` containers + `.category-group` ordering)
**CSS lines:** 763-769 (category-group spacing), 531-537 (section spacing)
**HTML lines:** Structural: Section 2 (Beginner, lines 1097-1273) > Section 3 (Intermediate, lines 1289-1454) > Section 4 (Advanced, lines 1468-1601)

**Reader function:** Content progresses from top-left (Beginner) to bottom-right (Advanced). The reader's natural top-to-bottom scan encounters increasing difficulty. This is a spatial encoding of complexity progression — grid position IS difficulty level.

**Detection reasoning:** Gesture because it changes the reading register progressively: the reader starts in "learning basics" mode and transitions to "advanced integration" mode as they scroll. The complexity shift is encoded in position, not in any single CSS property.

**Multi-channel coordination:** Three channels coordinate: (1) source order places Beginner first, (2) 64px between category groups creates visible tier boundaries, (3) complexity badge colors shift from green > blue > amber as the reader scrolls, creating a color gradient through the page.

**Pipeline implication:** "What if the spatial layout encoded a difficulty progression so the reader's scroll position correlates with complexity level?"

**Derivation question:** "What if position in the grid encoded difficulty — top-left for beginners, bottom-right for advanced — making the layout itself a learning path?"

---

### 14. Collapsible Island Toggle — GESTURE

**CSS class(es):** `.bento-details`, `.bento-details summary`, `.bento-details summary::before`, `.bento-details[open] summary::before`
**CSS lines:** 664-697
**HTML lines:** 1128-1160, 1178-1187, 1222-1268, 1329-1356, 1414-1449, 1495-1520, 1582-1596

**Reader function:** Each bento cell has a collapsible `<details>` element that toggles between "overview mode" (closed: cell shows title + summary) and "deep mode" (open: cell reveals implementation steps, code, tables). The reading register shifts from SCANNING to STUDYING. The `::before` triangle rotates 90 degrees on open, providing a micro-animation gesture.

**Detection reasoning:** Gesture because it changes HOW you read — from scanning (closed) to studying (open). The coordinated CSS shift (triangle rotation + content reveal + separator appearance) is a multi-property register change, not just a visibility toggle.

**Multi-channel coordination:** Four properties shift together on open/close: (1) `::before` triangle rotates 0 > 90deg (directional arrow gesture), (2) content div appears/disappears, (3) summary border-top creates a visible separator from cell body, (4) primary red color on summary text signals "interactive element." The 0.3s ease transition on the triangle creates a smooth micro-animation.

**Pipeline implication:** "What if each content unit had two reading modes — a scannable overview and a deep-dive — and the reader could toggle between them?"

**Derivation question:** "What if grid cells acted as collapsible islands — closed for overview scanning, opened for implementation depth?"

---

### 15. Bookend Density Shift — GESTURE

**CSS class(es):** `.bookend--front` (left border: primary red), `.bookend--back` (left border: green)
**CSS lines:** 787-799
**HTML lines:** 1042 (front), 1609 (back)

**Reader function:** The front bookend has a red (primary) left border signaling "entry/start," while the back bookend has a green left border signaling "completion/end." This color shift across the page creates a macro-gesture: the reader's journey goes from RED (begin) to GREEN (verify). The left-border color IS the bookend identity.

**Detection reasoning:** Gesture because it is a coordinated reading-register shift at the page level. The front bookend sets a "learning" register; the back bookend sets a "verifying" register. The color change between them (red > green) encodes this transition.

**Multi-channel coordination:** Three channels shift between front and back: (1) left border color changes from --color-primary (#E83025) to --accent-green (#4A9D6B), (2) content changes from orientation prose to verification checklist, (3) the h3 headings in the back bookend ("Verify" > "Reflect" > "Next Steps") create a 3-beat cognitive decompression rhythm.

**Pipeline implication:** "What if the page's start and end used matched structural containers with color-coded entry/exit signals?"

**Derivation question:** "What if the first and last sections were visually paired bookends — red for entry, green for completion — creating a page-level reading arc?"

---

### 16. Responsive Grid Collapse — GESTURE

**CSS class(es):** `@media (max-width: 1024px)` and `@media (max-width: 768px)` rules on `.bento-grid`, `.bento-item--*`, `.bento-cell__header`, `.split-layout`
**CSS lines:** 918-979
**HTML lines:** (affects all bento-grid instances)

**Reader function:** At 1024px, the grid collapses from 3 columns to 2 and large cells lose row-spanning. At 768px, everything collapses to single-column. The reading mode shifts from SPATIAL HIERARCHY (cell size signals importance) to SEQUENTIAL HIERARCHY (source order signals importance). This is a fundamental change in how the reader processes the page.

**Detection reasoning:** Gesture because it changes the entire reading paradigm at breakpoint boundaries. At desktop, you scan spatially (large cells first). At mobile, you scan sequentially (top to bottom). This is a coordinated multi-property shift across the entire page layout.

**Multi-channel coordination:** At 768px, five properties shift together: (1) grid-template-columns: 1fr (single column), (2) all span classes reset to span 1, (3) split-layout collapses to single column, (4) padding reduces from 24px to 16px, (5) cell headers stack vertically. At 1024px, an intermediate step: (1) 2-column grid, (2) large cells lose row span, (3) cell header stacks vertically, (4) badge aligns to flex-start.

**Pipeline implication:** "What if the page's hierarchy mechanism fundamentally changes at different viewport widths — from spatial to sequential?"

**Derivation question:** "What if the grid collapse at mobile wasn't just a layout change but a hierarchy-mechanism change — from reading by cell size to reading by position?"

---

### 17. Step Counter Rhythm — GESTURE

**CSS class(es):** `.step-list__item::before` (CSS counter)
**CSS lines:** 719-732
**HTML lines:** 1131-1151

**Reader function:** Each step in a step-list gets a CSS counter-generated number displayed in a dark square (24x24px, near-black background, cream text in monospace). The alternating pattern of dark number squares + body text creates a visual drumbeat: MARKER-text-MARKER-text. This rhythmic alternation paces the reader through sequential instructions.

**Detection reasoning:** Gesture because it creates a reading rhythm through the alternation of counter squares and text blocks. The `::before` pseudo-element generates visual markers that are NOT content but pacing devices. Remove them and the list becomes an undifferentiated text flow.

**Multi-channel coordination:** Four channels in the counter marker: (1) CSS `counter()` generates the number automatically, (2) dark background (#1A1A1A) + light text (#FEF9F5) creates maximum contrast inversion from surrounding text, (3) 24x24px square with centered flexbox creates a consistent marker size, (4) monospace font at 12px signals "position identifier."

**Pipeline implication:** "What if numbered instructions used visually distinct counter markers to create a reading rhythm?"

**Derivation question:** "What if step sequences had dark-on-light number markers that created a rhythmic drumbeat through the instructions?"

---

### 18. Typography Register Shift: Essence Callout — GESTURE

**CSS class(es):** `.callout--essence .callout__body` (font-family shift to `--font-display`, font-style: italic)
**CSS lines:** 389-392
**HTML lines:** 1300-1308

**Reader function:** When a callout is tagged as "Essence," the body text shifts from Inter (body font) to Instrument Serif italic (display font). This is a deliberate reading-register change: the reader shifts from analytical/instructional mode to contemplative/philosophical mode. The serif italic signals "this is the soul of the idea, not the mechanics."

**Detection reasoning:** Gesture because it is a multi-property typographic shift that changes the reader's cognitive mode. The font family change (sans-serif > serif) combined with italic style creates a coordinated register shift. The purple accent color on the label reinforces the "special register" status.

**Multi-channel coordination:** Three properties shift together: (1) font-family changes from Inter to Instrument Serif, (2) font-style changes to italic, (3) the label color becomes purple (--accent-purple), which appears nowhere else in the page — making this a visually unique register.

**Pipeline implication:** "What if certain passages required a different reading register — contemplative rather than analytical — and the typography itself signaled this shift?"

**Derivation question:** "What if the page's philosophical essence was rendered in the display serif italic, creating a visual and cognitive contrast with the instructional body text?"

---

## COMPONENTS

### 19. Bento Cell — COMPONENT

**CSS class(es):** `.bento-cell`
**CSS lines:** 583-590
**HTML lines:** 1112, 1164, 1191, 1207, 1315, 1360, 1381, 1398, 1482, 1524, 1546, 1566
**DOM structure:**
```html
<div class="bento-cell bento-item--large">
  <div class="bento-cell__header">
    <span class="bento-cell__title">Title</span>
    <span class="complexity-badge complexity-badge--beginner">Beginner</span>
  </div>
  <span class="duration-badge">~5 min</span>
  <div class="bento-cell__body">
    <p>Content...</p>
  </div>
  <details class="bento-details">
    <summary>View details</summary>
    <div class="bento-details__content">...</div>
  </details>
</div>
```

**Reader function:** The primary content container of the bento grid. Each cell is a self-contained "task island" with defined slots: header (title + badge), duration badge, body text, and optional collapsible details. The white background (#FFFFFF) on 3px structural border creates a visually distinct island against the cream page background.

**Detection reasoning:** Component because it is a reusable container with defined structure (header, body, details slots) and consistent visual treatment. It holds article content in a structured way. 12 instances across 3 grid sections.

**Multi-channel coordination:** N/A for Components (not a reading-register shift).

**Pipeline implication:** "What if each task were a self-contained card with standardized slots for title, difficulty, duration, and expandable details?"

**Derivation question:** "What if task-based content lived in discrete, bordered cells within a grid — each cell an island with its own internal structure?"

---

### 20. Bento Cell Header — COMPONENT

**CSS class(es):** `.bento-cell__header`
**CSS lines:** 593-598
**HTML lines:** 1113-1116, 1165-1168, 1192-1195, 1208-1211, etc.
**DOM structure:**
```html
<div class="bento-cell__header">
  <span class="bento-cell__title">Create the Grid Container</span>
  <span class="complexity-badge complexity-badge--beginner">Beginner</span>
</div>
```

**Reader function:** A two-slot sub-component within each bento cell: title on the left, complexity badge on the right. The flex layout with `justify-content: space-between` creates a tension between content identity (title) and metadata (badge). At 1024px, this stacks vertically.

**Detection reasoning:** Component because it has defined slots (title + badge) and consistent structure across all cells. The responsive stacking behavior at 1024px is part of its structural definition.

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if cell headers paired the content title with a metadata badge in a flex row that stacks on smaller viewports?"

**Derivation question:** "What if each task cell's header showed the task name and its difficulty badge side-by-side?"

---

### 21. Bento Cell Body — COMPONENT

**CSS class(es):** `.bento-cell__body`
**CSS lines:** 636-649
**HTML lines:** 1118-1126, 1170-1177, etc.
**DOM structure:**
```html
<div class="bento-cell__body">
  <p>Content text...</p>
  <p>More content...</p>
</div>
```

**Reader function:** The prose content slot within each bento cell. Inter font at body size with 1.7 line-height. Internal paragraphs have 12px bottom margin except the last one (0). Creates readable content blocks within the cell's structure.

**Detection reasoning:** Component because it is a defined content slot with consistent styling. It is the "body" zone of the bento-cell container.

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if the cell body had consistent typographic treatment for prose content within the task island structure?"

**Derivation question:** "What if each bento cell had a prose body zone with standardized typography and paragraph spacing?"

---

### 22. Collapsible Details Section — COMPONENT

**CSS class(es):** `.bento-details`, `.bento-details__content`
**CSS lines:** 664-697
**HTML lines:** 1128-1160, 1178-1187, 1222-1268, 1329-1356, 1414-1449, 1495-1520, 1582-1596
**DOM structure:**
```html
<details class="bento-details">
  <summary>View implementation steps</summary>
  <div class="bento-details__content">
    <!-- steps, code, tables, callouts -->
  </div>
</details>
```

**Reader function:** A progressive-disclosure container within bento cells. The summary text in primary red signals interactivity. The content div can hold any combination of step-lists, code blocks, tables, or callouts — it is a flexible slot for depth-on-demand content.

**Detection reasoning:** Component because it is a reusable container with two defined slots (summary trigger + content body) and consistent visual treatment. It appears in 7 cells across the page. The gesture aspect (the toggle behavior and register shift) is cataloged separately as Gesture #14.

**Multi-channel coordination:** N/A (the gesture aspect is covered in the Gestures section).

**Pipeline implication:** "What if cells had a built-in progressive-disclosure mechanism so overview and implementation details co-exist?"

**Derivation question:** "What if each task island had a collapsible section for implementation details, keeping the grid scannable when closed?"

---

### 23. Step List — COMPONENT

**CSS class(es):** `.step-list`, `.step-list__item`, `.step-list__text`
**CSS lines:** 704-738
**HTML lines:** 1131-1151
**DOM structure:**
```html
<ol class="step-list">
  <li class="step-list__item">
    <span class="step-list__text">
      Define the grid container with <code>display: grid</code>...
    </span>
  </li>
</ol>
```

**Reader function:** A numbered list with CSS counter-generated step markers. Each step is a flex row: dark number square (auto-generated by `::before`) + text content. The 24px gap between items creates distinct step separation. Used inside collapsible details for procedural instructions.

**Detection reasoning:** Component because it is a reusable structured list with defined slots (number marker + text). The rhythm created by the counter markers is cataloged separately as Gesture #17.

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if sequential procedures used a structured step list with auto-numbered markers and consistent spacing?"

**Derivation question:** "What if procedural instructions within task cells used a counter-based step list with visually distinct number markers?"

---

### 24. Split Layout — COMPONENT

**CSS class(es):** `.split-layout`, `.split-layout__side`
**CSS lines:** 745-755
**HTML lines:** 1499-1518
**DOM structure:**
```html
<div class="split-layout">
  <div class="split-layout__side">
    <p><strong>Desktop:</strong>...</p>
    <p><strong>Mobile:</strong>...</p>
  </div>
  <div class="split-layout__side">
    <pre><code>/* CSS code */</code></pre>
  </div>
</div>
```

**Reader function:** A 2-column sub-grid within a large bento cell. Left side holds explanation prose, right side holds code. Creates a code/explanation split that lets the reader see both simultaneously. Collapses to single column at 900px.

**Detection reasoning:** Component because it is a reusable two-slot container (explanation + code) with defined grid structure. Used inside large cells where side-by-side comparison is needed.

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if large cells used an internal split layout for simultaneous code and explanation viewing?"

**Derivation question:** "What if large bento cells contained a side-by-side split for code on one side and explanation on the other?"

---

### 25. Front Bookend — COMPONENT

**CSS class(es):** `.bookend`, `.bookend--front`, `.bookend__heading`
**CSS lines:** 787-805
**HTML lines:** 1042-1088
**DOM structure:**
```html
<div class="bookend bookend--front">
  <h2 class="bookend__heading">Building with Bento Grid Layouts</h2>
  <p>Content...</p>
  <table>...</table>
</div>
```

**Reader function:** A dense orientation container at the page start. Breathing-zone background (#FAF5ED) + 3px structural border + red left accent border (4px). Holds the overview prose and prerequisites table. Its visual density and contained structure signal "read this first."

**Detection reasoning:** Component because it is a structured container with defined slots (heading, prose, table) and consistent visual treatment. The color-coded left border (red = entry) is part of the Bookend Density Shift gesture cataloged separately.

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if the page opened with a visually distinct orientation container that differs from the main content grid?"

**Derivation question:** "What if the first section were a contained bookend block with an accent border, signaling 'start here' before the grid begins?"

---

### 26. Back Bookend — COMPONENT

**CSS class(es):** `.bookend`, `.bookend--back`, `.bookend__heading`
**CSS lines:** 787-805
**HTML lines:** 1609-1665
**DOM structure:**
```html
<div class="bookend bookend--back">
  <h2 class="bookend__heading">Verification Checklist</h2>
  <p>Content...</p>
  <h3>Verify</h3>
  <ul class="verify-list">...</ul>
  <h3>Reflect</h3>
  <p>...</p>
  <h3>Next Steps</h3>
  <p>...</p>
</div>
```

**Reader function:** A dense closure container at the page end. Same structure as front bookend but with green left accent border (4px) signaling "completion." Contains a 3-beat cognitive decompression: Verify (checklist) > Reflect (synthesis) > Next Steps (forward direction). This is the dense end of the BOOKENDS density pattern.

**Detection reasoning:** Component because it has defined slots (heading, checklist, reflection, next-steps) and consistent visual treatment. The 3-beat structure is a deliberate content architecture within the container.

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if the page ended with a structured closure container that walks the reader through verify-reflect-extend?"

**Derivation question:** "What if the closing section mirrored the opening bookend's structure but with a completion signal and a three-beat decompression sequence?"

---

### 27. Cell Callout — COMPONENT

**CSS class(es):** `.cell-callout`, `.cell-callout--tip`, `.cell-callout--gotcha`, `.cell-callout--caution`, `.cell-callout__label`
**CSS lines:** 842-873
**HTML lines:** 1347-1354, 1585-1594
**DOM structure:**
```html
<div class="cell-callout cell-callout--tip">
  <div class="cell-callout__label">Tip</div>
  <p>Content...</p>
</div>
<div class="cell-callout cell-callout--caution">
  <div class="cell-callout__label">Key Pattern</div>
  <p>Content...</p>
</div>
```

**Reader function:** A compact callout variant designed to fit INSIDE bento cells (as opposed to the full-width `.callout` component). Same DNA: 4px left border with accent color, label + body structure. Three variants: tip (green), gotcha (coral), caution (amber). Used sparingly inside collapsible details sections.

**Detection reasoning:** Component because it is a structured two-slot container (label + body) with accent-color variants, designed for reuse inside cells. Distinct from the page-level `.callout` by its compact padding (12px vs. 24px) and context (inside cells, not between them).

**Multi-channel coordination:** N/A.

**Pipeline implication:** "What if callouts had a compact variant designed to nest inside grid cells without overwhelming the cell's own content?"

**Derivation question:** "What if tip/warning callouts had a smaller footprint for embedding within task cells, maintaining the callout DNA but at cell scale?"

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** Yes. I read the locked layer CSS (lines 70-484), the axis layer CSS (lines 515-1002), and the complete HTML body (lines 1005-1896), including the RAR block and trailing inline threading header.

2. **Am I identifying elements at the DOM level?** Yes. Every entry references specific CSS classes, line numbers, and DOM structure. I am not working at abstract/conceptual levels — each element maps to concrete CSS rules and HTML instances.

3. **Could I have missed subtle gestures?** Possible areas considered:
   - The `::selection` styling (lines 209-212) — branded selection color is a micro-gesture but extremely standard; I chose not to catalog it as it is part of the locked layer shared across all AD explorations.
   - The `prefers-reduced-motion` media query (lines 434-440) — accessibility accommodation, not a reader-experience gesture.
   - The `@media print` styles (lines 445-468) — output-mode accommodation, not a reading-register shift.
   - The syntax highlighting classes (.kw, .st, .cm, etc. at lines 329-335) — these color-code code elements but are standard syntax highlighting, not a page-level gesture unique to AD-003.

4. **Am I applying the reader-function test honestly?** Yes. I tested each element by asking "if I remove this, does the reader lose something?" The breathing zone, for example, could be argued as "just spacing" — but at exactly 48px with a specific background color and semantic role="separator", it is a deliberate instrument, not incidental whitespace.

5. **Did I check for pseudo-elements?** Yes. Cataloged:
   - `.bento-details summary::before` (triangle indicator, Gesture #14)
   - `.step-list__item::before` (counter marker, Gesture #17)
   - `.page-end::before` (terminal horizontal rule, Instrument #8)
   - `::selection` (considered, excluded as locked-layer standard)

6. **Did I check responsive breakpoints?** Yes. Three breakpoints cataloged:
   - `@media (max-width: 1024px)` — intermediate collapse (lines 918-940)
   - `@media (max-width: 900px)` — split layout collapse (lines 946-951)
   - `@media (max-width: 768px)` — full mobile collapse (lines 958-979)
   All three are covered in Gesture #16 (Responsive Grid Collapse).

7. **Am I distinguishing between "styling" and "instruments/gestures"?** Yes. I excluded:
   - The locked-layer resets and base typography (standard styling, not reader-experience devices)
   - The `.callout` base class and its accent variants (`.callout--note`, etc.) from the LOCKED layer — these are infrastructure components from the shared template. I only cataloged `.callout--essence` as a Gesture where the typography register shifts, and `.cell-callout` as a Component where it is an AD-003-specific compact variant.
   - The `table`/`th`/`td` styles (standard data presentation, not instruments)
   - Code block styling (`pre`, `code`, syntax classes) — standard infrastructure
