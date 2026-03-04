# AD-006 Compound Axis — Instrument / Gesture / Component Catalog

**File:** `design-system/axis/AD-006-compound.html`
**Total lines:** 2276 (CSS lines 71-1208, HTML lines 1211-2276)
**Axis pattern:** COMPOUND (Z + F + Bento + Spiral + Choreography — all five in sequence)
**Paired OD:** OD-006 Creative (emergent synthesis)
**Density:** ALL (FRACTAL primary — DD-F-006 at all 5 scales)

---

## INSTRUMENTS (12 found)

### 1. Scroll Witness — INSTRUMENT

**CSS class(es):** `.scroll-witness`, `.scroll-witness__fill`
**CSS lines:** 525-539
**HTML lines:** 1216-1218
**DOM structure:**
```html
<div class="scroll-witness" aria-hidden="true">
  <div class="scroll-witness__fill" id="scroll-fill"></div>
</div>
```

**Reader function:** Fixed 3px progress bar at the top of the viewport. Fill width updates via JavaScript to show scroll percentage. Tells the reader how far through the page they are — critical for a 7-section compound page.

**Detection reasoning:** Instrument because removing it eliminates scroll-position awareness. The reader loses knowledge of "how much is left." It carries no article content — its sole purpose is positional metadata.

**Multi-channel coordination:** Position (fixed top:0), height (3px thin bar), color (primary red fill on subtle border background), width (0-100% driven by scroll position). The fill color matches the page's primary accent, making progress visually consistent with the header's red accent bar.

**Pipeline implication:** "How does the reader maintain orientation across a very long compound page?" A 7-section compound document needs a persistent position signal to prevent disorientation.

**Derivation question:** "What if the page is too long for the reader to gauge progress without a visual cue?"

---

### 2. Axis Indicator — INSTRUMENT

**CSS class(es):** `.axis-indicator`, `.axis-indicator__label`, `.axis-indicator__value`
**CSS lines:** 542-562
**HTML lines:** 1221-1234
**DOM structure:**
```html
<nav class="axis-indicator" aria-label="Current axis pattern indicator">
  <span>
    <span class="axis-indicator__label">Axis: </span>
    <span class="axis-indicator__value" id="current-axis">COMPOUND</span>
  </span>
  <span>
    <span class="axis-indicator__label">Density: </span>
    <span class="axis-indicator__value" id="current-density">FRACTAL</span>
  </span>
  <span>
    <span class="axis-indicator__label">Org: </span>
    <span class="axis-indicator__value" id="current-org">CREATIVE</span>
  </span>
</nav>
```

**Reader function:** Sticky dark bar (just below the scroll witness) showing three metadata dimensions: the current axis pattern, density pattern, and organizational mode. Acts as a persistent triple-state label. Stays visible during scroll.

**Detection reasoning:** Instrument because it tells the reader WHERE they are within the triple-equivalence framework. Removing it eliminates axis/density/org awareness at any scroll position. It's a navigation/orientation device, not content.

**Multi-channel coordination:** Background (dark #1A1A1A matching header), typography (monospace uppercase labels), color split (labels in secondary gray, values in cream/background for contrast), layout (flex centered with 32px gaps), position (sticky top:3px, z-index:998 — just below scroll witness).

**Pipeline implication:** "What if the compound page needs to tell the reader which framework dimensions are active?" Each section activates different axis/density/org combinations; this instrument makes that explicit.

**Derivation question:** "What if the reader needs persistent awareness of the page's analytical framework while scrolling?"

---

### 3. Meta Line — INSTRUMENT

**CSS class(es):** `.meta-line`, `.version-badge`
**CSS lines:** 257-279
**HTML lines:** 1239-1243
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION AD-006</span>
  <span>AXIS: COMPOUND</span>
  <span class="version-badge">v1 enriched</span>
</div>
```

**Reader function:** Header metadata strip identifying the exploration number, axis type, and version. Orients the reader to the document's place in the exploration series (AD-006 of 6). The version badge signals provenance status.

**Detection reasoning:** Instrument because it provides document-level metadata orientation. Removing it eliminates the reader's ability to place this document within the larger AD series. No article content — pure classification metadata.

**Multi-channel coordination:** Typography (Inter body font at meta size 12px, weight 500), spacing (0.15em letter-spacing), transform (uppercase), layout (flex row with 16px gaps), color (secondary gray on dark background). Version badge adds monospace font + 1px border as a distinct sub-instrument.

**Pipeline implication:** "How does the reader know what they're reading before they start?" The meta-line establishes document identity and series position immediately.

**Derivation question:** "What if the reader arrives at this page without context about which exploration this is?"

---

### 4. Pattern Echo Grid — INSTRUMENT

**CSS class(es):** `.pattern-echo-grid`, `.pattern-echo`, `.pattern-echo__label`, `.echo-z`, `.echo-f`, `.echo-bento`, `.echo-spiral`, `.echo-choreo`, `.echo-compound`
**CSS lines:** 650-769
**HTML lines:** 1293-1312
**DOM structure:**
```html
<div class="pattern-echo-grid" role="img" aria-label="Visual index of five axis patterns plus compound self-reference">
  <div class="pattern-echo echo-z">
    <span class="pattern-echo__label">Z</span>
  </div>
  <div class="pattern-echo echo-f">
    <span class="pattern-echo__label">F</span>
  </div>
  <div class="pattern-echo echo-bento">
    <span class="pattern-echo__label">Bento</span>
  </div>
  <div class="pattern-echo echo-spiral">
    <span class="pattern-echo__label">Spiral</span>
  </div>
  <div class="pattern-echo echo-choreo">
    <span class="pattern-echo__label">Choreo</span>
  </div>
  <div class="pattern-echo echo-compound">
    <span class="pattern-echo__label">All</span>
  </div>
</div>
```

**Reader function:** A 3x2 grid of 80px cells, each containing a CSS-only miniature visualization of one axis pattern (Z, F, Bento, Spiral, Choreography) plus a self-referential "compound" cell. Acts as a visual table of contents / specimen sheet. The compound cell is self-referential (Hofstadterian strange loop per EXT-AXIS-X-003).

**Detection reasoning:** Instrument because it's a visual index of the page's entire structure. Removing it eliminates the reader's ability to preview all five patterns before reading about them. No article content — pure structural overview.

**Multi-channel coordination:** Each echo cell uses `::before` and `::after` pseudo-elements to draw pattern miniatures with CSS-only borders (no images). Coordinated channels: border color (primary red for dominant lines, secondary gray for support lines), border width (3px structural vs 1px micro), position (absolute within 80px cells), background (compound cell gets breathing zone background — signals "this is different"). Labels are monospace, meta-sized, uppercase, positioned at bottom-left.

**Pipeline implication:** "What if the reader could preview all five axis patterns in miniature before encountering them at full scale?" This is the navigation-scale fractal (DD-F-006 Scale 1).

**Derivation question:** "What if each axis pattern could be represented as a CSS-only thumbnail, and all six could form a visual table of contents?"

---

### 5. Section Meta — INSTRUMENT

**CSS class(es):** `.section-meta`
**CSS lines:** 602-610
**HTML lines:** 1265, 1357, 1544, 1711, 1805, 1908, 2038
**DOM structure:**
```html
<div class="section-meta">Section 01 &mdash; Z-Pattern Overview</div>
```

**Reader function:** Monospace uppercase label at the top of each section identifying the section number and axis pattern. Seven instances across the page. Provides consistent wayfinding as the reader moves through different axis patterns.

**Detection reasoning:** Instrument because it tells the reader which section they're in and what axis pattern is active. Removing it eliminates section-level orientation. Consistent across all 7 sections — a persistent wayfinding marker.

**Multi-channel coordination:** Font (monospace, meta-size 12px), weight (500), spacing (0.1em letter-spacing), transform (uppercase), color (secondary gray). The consistency of treatment across all 7 sections IS the instrument — the sameness signals "this is a label, not content."

**Pipeline implication:** "How does the reader stay oriented when the visual style changes dramatically between sections?" The section-meta provides stable wayfinding despite axis changes.

**Derivation question:** "What if each compound section needs a consistent orientation marker despite wildly different layouts?"

---

### 6. Stratum Labels — INSTRUMENT

**CSS class(es):** `.stratum-label`
**CSS lines:** 911-919
**HTML lines:** 1724, 1742, 1754, 1770
**DOM structure:**
```html
<div class="stratum-label">Stratum 1 &mdash; Validated</div>
```

**Reader function:** Monospace uppercase labels in the Spiral section (Section 4) marking confidence strata: "Validated," "Established," "Exploratory," "Speculative." Tells the reader the confidence level of each spiral zone before they read its content.

**Detection reasoning:** Instrument because it sets a reading register (how much to trust what follows). Removing it eliminates confidence metadata — the reader would read speculative content with the same trust as validated content.

**Multi-channel coordination:** Font (monospace, meta-size 12px), weight (500), spacing (0.1em letter-spacing), transform (uppercase), color (secondary gray), margin-bottom (16px separation from content). The stratum labels coordinate with the spiral zones' left-border colors (blue=validated, green=established, amber=exploratory, purple=speculative).

**Pipeline implication:** "What if the spiral layout needs to communicate confidence levels at each depth layer?" Strata labels + border colors = dual-channel confidence encoding.

**Derivation question:** "What if each level of the spiral encodes not just depth but confidence, and the reader needs to know before they read?"

---

### 7. Spoke Labels — INSTRUMENT

**CSS class(es):** `.spoke-label`
**CSS lines:** 965-975
**HTML lines:** 1818, 1859, 1872, 1885
**DOM structure:**
```html
<div class="spoke-label">Spoke A &mdash; Temporal</div>
```

**Reader function:** Monospace uppercase labels in the Choreography section (Section 5) identifying each spoke's equivalence mechanism: "Temporal," "Spatial," "Proportional," "Gravitational." Tells the reader what analytical lens each spoke provides.

**Detection reasoning:** Instrument because it identifies the analytical category of each spoke. Removing it forces the reader to deduce each spoke's focus from content alone. Like stratum labels, these set a reading register.

**Multi-channel coordination:** Font (monospace, meta-size 12px), weight (600), spacing (0.1em letter-spacing), transform (uppercase), color (secondary gray), border-bottom (1px subtle separator). Positioned at the top of each spoke to front-load the classification.

**Pipeline implication:** "What if each spoke in a hub-and-spoke layout needs to declare its analytical category?" This enables the reader to choose reading order by interest.

**Derivation question:** "What if a hub-spoke layout needs each spoke to announce its perspective before delivering content?"

---

### 8. Fractal Annotation Layer — INSTRUMENT

**CSS class(es):** `.fractal-annotation`, `.fractal-annotation__marker`, `.fractal-annotation__content`
**CSS lines:** 1043-1064
**HTML lines:** 2048-2113 (five instances)
**DOM structure:**
```html
<div class="fractal-annotation">
  <div class="fractal-annotation__marker">Page Scale</div>
  <div class="fractal-annotation__content">
    <p>...</p>
  </div>
</div>
```

**Reader function:** Five side-annotated content blocks in Section 7, each with a vertical-text scale label ("Page Scale," "Section Scale," "Component Scale," "Character Scale," "Navigation Scale") in a narrow left column. The marker uses `writing-mode: vertical-lr` to rotate text. Proves DD-F-006 fractal compliance at all five scales.

**Detection reasoning:** Instrument because the vertical markers are metadata about what fractal scale is being discussed. Removing the markers eliminates the reader's ability to track which scale they're examining. The content itself is article text; the annotation layer is the instrument.

**Multi-channel coordination:** Layout (2-column grid: 3rem annotation + 1fr content), writing mode (vertical-lr for marker text), typography (monospace, meta-size, 0.1em tracking, uppercase), color (secondary gray), border-right (1px subtle separator between marker and content). At mobile (768px), the marker column disappears entirely.

**Pipeline implication:** "What if self-referential content needs visible scale annotations to prove fractal compliance?" The margin annotations make the fractal proof legible.

**Derivation question:** "What if the page needs to show it operates at all five fractal scales, and each scale needs a visible label?"

---

### 9. Discovery Log — INSTRUMENT

**CSS class(es):** `.discovery-log`, `.discovery-log__title`, `.discovery-item`, `.discovery-id`
**CSS lines:** 1008-1037
**HTML lines:** 2185-2227
**DOM structure:**
```html
<div class="discovery-log">
  <div class="discovery-log__title">Discovery Log &mdash; AD-006 Findings</div>
  <div class="discovery-item">
    <span class="discovery-id">AD-F-021</span>
    <p>Triple equivalence confirmed at compound scale...</p>
  </div>
  <!-- 7 more discovery items (AD-F-022 through AD-F-028) -->
</div>
```

**Reader function:** A bordered container listing all 8 findings (AD-F-021 through AD-F-028) from the exploration. Each finding has a monospace ID and description. Acts as a research output inventory — the reader can see every discovery the exploration produced.

**Detection reasoning:** Instrument because it's a structured research log, not article prose. Removing it eliminates the reader's ability to see the page's formal research output. The finding IDs (AD-F-021 etc.) are metadata references, not content.

**Multi-channel coordination:** Border (3px primary red — highest structural emphasis), background (dense zone white), title (monospace, meta-size, uppercase, primary red color, 3px red bottom border), finding IDs (monospace, meta-size, bold, primary red), items separated by 1px subtle borders. The primary-red treatment signals "this is the most important instrument on the page."

**Pipeline implication:** "What if the page needs to formally register its research discoveries?" The discovery log is a structured output manifest.

**Derivation question:** "What if each exploration needs a formal log of its findings, with traceable IDs?"

---

### 10. Bento Item Meta — INSTRUMENT

**CSS class(es):** `.bento-item__meta`
**CSS lines:** 863-870
**HTML lines:** 1556, 1575, 1585, 1595, 1605
**DOM structure:**
```html
<div class="bento-item__meta">Featured Pattern</div>
```

**Reader function:** Monospace uppercase classification label at the top of each bento cell. Values: "Featured Pattern," "Scanning," "Structural," "Proportional." Classifies each pattern before the reader encounters its name.

**Detection reasoning:** Instrument because it provides a classification layer above the content. Removing it eliminates the reader's ability to understand the pattern taxonomy (scanning vs structural vs proportional) before reading details.

**Multi-channel coordination:** Font (monospace, meta-size 12px), color (secondary gray), transform (uppercase), spacing (0.05em letter-spacing), margin-bottom (8px). Positioned above the title, creating a label-then-name reading sequence.

**Pipeline implication:** "What if a catalog grid needs to classify items before naming them?" Category-first reading enables scanning by type.

**Derivation question:** "What if bento grid cells need a classification layer that supports scanning by pattern type?"

---

### 11. Triple Column Headings — INSTRUMENT

**CSS class(es):** `.triple-column__heading`
**CSS lines:** 806-816
**HTML lines:** 1390, 1398, 1406
**DOM structure:**
```html
<div class="triple-column__heading">Organization</div>
```

**Reader function:** Monospace uppercase labels atop each column of the triple-column comparison: "Organization," "Density," "Axis." Each heading has a red bottom border (3px primary). Tells the reader which equivalence lens each column represents.

**Detection reasoning:** Instrument because these labels establish the framework for the comparison. Removing them makes three columns of text indistinguishable in purpose. The red accent border adds emphasis beyond what a normal heading would provide.

**Multi-channel coordination:** Font (monospace, meta-size 12px), weight (600), spacing (0.1em letter-spacing), transform (uppercase), color (secondary gray), border-bottom (3px primary red — signals structural importance), padding-bottom (8px). The red border matches the page's primary accent, linking these headings to the overall identity.

**Pipeline implication:** "What if a side-by-side comparison needs to frame each column as a distinct analytical lens?" The instrument converts three prose blocks into a structured comparison.

**Derivation question:** "What if the triple equivalence needs to be demonstrated as three simultaneous perspectives on the same content?"

---

### 12. Research Application Record — INSTRUMENT

**CSS class(es):** `.rar-section` (inline style: `display: none`)
**CSS lines:** N/A (inline styles only)
**HTML lines:** 2263-2274
**DOM structure:**
```html
<section class="rar-section" style="display: none;" aria-hidden="true">
  <h2>Research Application Record</h2>
  <p>Research findings applied during AD-006 Compound construction:</p>
  <ul>
    <li>R4-095: Compound axis as sequential pattern layering</li>
    <!-- ... more findings ... -->
  </ul>
  <p>Soul compliance: border-radius: 0, box-shadow: none, no filter: drop-shadow</p>
</section>
```

**Reader function:** Hidden metadata section (display:none, aria-hidden) documenting which research findings were applied during construction. Not visible to end readers. Serves as a provenance instrument for system inspection.

**Detection reasoning:** Instrument because it's pure provenance metadata. Not visible to readers but provides auditable research tracing. A machine-facing rather than reader-facing instrument.

**Multi-channel coordination:** Hidden via display:none and aria-hidden. Semantic structure (heading + list + compliance note). The visibility suppression IS a channel — "this metadata is for the system, not the reader."

**Pipeline implication:** "What if each exploration needs machine-readable provenance for audit purposes?" The RAR enables automated compliance checking.

**Derivation question:** "What if the page needs to document its own construction provenance for later audit?"

---

## GESTURES (11 found)

### 13. Drop Cap — GESTURE

**CSS class(es):** `.drop-cap::first-letter`
**CSS lines:** 565-585
**HTML lines:** 1277, 1369, 1726, 2051 (4 instances)
**DOM structure:**
```html
<p class="drop-cap">
  Every documentation page has a natural shape...
</p>
```

**Reader function:** 3.5em Instrument Serif first letter, floated left, in primary red. Signals "a new major reading section begins" and shifts the reader from scanning mode to immersive reading. Used 4 times across the page — at the opening of Sections 1, 2, 4, and 7.

**Detection reasoning:** Gesture because it's a coordinated multi-property shift that changes reading mode. It's not a container (Component) or metadata (Instrument) — it's a typographic inflection that changes how you start reading a paragraph.

**Multi-channel coordination:** Font-family (Instrument Serif display — shifts from body Inter), font-size (3.5em — dramatic scale jump), float (left — disrupts normal text flow), line-height (0.8 — tighter than body 1.7), color (primary red — attention capture), margin (right:12px, top:4px — spacing from body text). Six CSS properties shift simultaneously. FIX-013 disables the float inside grid cells to prevent layout corruption.

**Pipeline implication:** "What if key section openings need a visual signal to shift the reader into deep reading?" The drop cap is the editorial "chapter start" signal.

**Derivation question:** "What if the transition from scanning to immersive reading needs a typographic event, not just a heading?"

---

### 14. Zone Background Alternation — GESTURE

**CSS class(es):** `.zone-sparse`, `.zone-dense`, `.zone-breathing`
**CSS lines:** 597-599
**HTML lines:** 1262 (zone-sparse), 1354 (zone-dense), 1541 (zone-breathing), 1708 (zone-sparse), 1802 (zone-dense), 1905 (zone-breathing), 2035 (zone-sparse)
**DOM structure:**
```html
<section class="axis-section zone-sparse">...</section>
<section class="axis-section zone-dense">...</section>
<section class="axis-section zone-breathing">...</section>
```

**Reader function:** Three background colors alternate across the 7 sections: sparse (#FEF9F5 warm cream), dense (#FFFFFF white), breathing (#FAF5ED warm tan). The alternation pattern is: sparse-dense-breathing-sparse-dense-breathing-sparse. Creates a visual rhythm of density shifts as the reader scrolls.

**Detection reasoning:** Gesture because the background color shift changes the reading register without carrying content. Each background signals a different density mode. The coordination across sections — not just individual application — makes this a gesture (a system-level reading inflection).

**Multi-channel coordination:** Background color is the primary channel, but it coordinates with: section padding (48px consistent), border-top (3px between sections), and the content density within each section. The three zone colors form a vocabulary: sparse=default, dense=analytical, breathing=reflective.

**Pipeline implication:** "What if sections in a compound page need to signal density mode through background alone?" Zone alternation creates a subliminal rhythm the reader experiences without consciously processing.

**Derivation question:** "What if the background color itself could encode which density pattern a section uses?"

---

### 15. Section Boundary Gesture — GESTURE

**CSS class(es):** `.axis-section + .axis-section`
**CSS lines:** 588-594
**HTML lines:** Between each section (1347/1354, 1534/1541, etc.)
**DOM structure:**
```css
.axis-section + .axis-section {
  border-top: 3px solid var(--color-border);
}
```

**Reader function:** A 3px structural border appears between every adjacent section, combined with 48px padding-top/bottom on each section. This creates a "breathing zone" transition between axis patterns. The total gap between content (96px padding + 3px border) signals a major cognitive shift.

**Detection reasoning:** Gesture because the border+padding combination shifts reading register at every section transition. It's not a container (no slots) or metadata (no labels) — it's a spatial inflection that says "stop, breathe, the rules are about to change."

**Multi-channel coordination:** Border (3px solid, structural category 1), padding (48px top and bottom on each section — totaling 96px between content blocks), plus the zone background shift that co-occurs at every boundary. Three channels shift together at every transition.

**Pipeline implication:** "What if compound pattern transitions need a consistent cognitive decompression signal?" The section boundary gesture enforces OD-F-007 breathing zones.

**Derivation question:** "What if each axis pattern change needs enough visual space for the reader to reset their reading mode?"

---

### 16. Spiral Border-Weight Confidence Encoding — GESTURE

**CSS class(es):** `.spiral-wide`, `.spiral-medium`, `.spiral-narrow`, `.spiral-deep`
**CSS lines:** 886-909
**HTML lines:** 1723, 1741, 1753, 1769
**DOM structure:**
```css
.spiral-wide    { border-left: 4px solid var(--accent-blue); }    /* high confidence */
.spiral-medium  { border-left: 4px solid var(--accent-green); }   /* established */
.spiral-narrow  { border-left: 4px solid var(--accent-amber); }   /* exploratory */
.spiral-deep    { border-left: 4px solid var(--accent-purple); }  /* speculative */
```

**Reader function:** Four spiral zones each have a 4px left border in a different accent color: blue (validated), green (established), amber (exploratory), purple (speculative). The color encodes confidence level. As the spiral narrows inward, confidence degrades — a visual metaphor for "deeper = less certain."

**Detection reasoning:** Gesture because the border color IS the meaning — it doesn't label or contain, it encodes. Removing the color encoding removes the confidence gradient. This is a coordinated shift where color + position + zone size all correlate with one rule: "confidence decreases as depth increases."

**Multi-channel coordination:** Border color (4 values: blue/green/amber/purple), zone size (grid areas from full-width to narrow), zone background (sparse/dense/breathing/dense), padding (32px→24px→24px→24px). All channels vary according to one rule: confidence correlates with zone prominence.

**Pipeline implication:** "What if a spiral layout needs to encode epistemic confidence through color?" This is OD-004's confidence encoding adapted to spiral geometry.

**Derivation question:** "What if the depth of a spiral correlates with uncertainty, and the reader needs to see that correlation through border color?"

---

### 17. F-Scanline Crescendo — GESTURE

**CSS class(es):** `.f-scanline`, `.f-layout`
**CSS lines:** 775-789
**HTML lines:** 1368, 1385, 1426, 1478 (4 scanlines)
**DOM structure:**
```html
<div class="f-layout">
  <div class="f-scanline"><!-- sparse overview --></div>
  <div class="f-scanline"><!-- triple column --></div>
  <div class="f-scanline"><!-- mechanism table --></div>
  <div class="f-scanline"><!-- dense evidence table --></div>
</div>
```

**Reader function:** Four F-pattern scanlines in Section 2, each separated by 1px subtle bottom borders and 32px gaps. Content density increases from sparse overview (scanline 1) to dense evidence tables (scanline 4). The CRESCENDO density pattern builds through the sequence.

**Detection reasoning:** Gesture because the progressive density increase across four scanlines is a coordinated reading-pace shift. Each scanline is denser than the last — not through CSS changes but through content density coordinated with the F-pattern's natural top-to-bottom attention decay. The uniform CSS treatment + increasing content density = a gesture where form holds steady while substance builds.

**Multi-channel coordination:** Border (1px subtle separators between scanlines — consistent, not varying), gap (32px uniform), but CONTENT density increases: scanline 1 = 2 paragraphs, scanline 2 = triple-column comparison, scanline 3 = table, scanline 4 = larger table + summary. The uniform spacing + increasing content = CRESCENDO.

**Pipeline implication:** "What if F-pattern scanning needs to build density progressively?" The crescendo gesture uses content loading, not CSS variation, to create the rhythm.

**Derivation question:** "What if the F-pattern's natural attention decay should be counterbalanced by increasing content density?"

---

### 18. Decision Matrix Cell Classification — GESTURE

**CSS class(es):** `.decision-matrix td.best-fit`, `.decision-matrix td.acceptable`, `.decision-matrix td.avoid`
**CSS lines:** 981-994
**HTML lines:** 1918-1971 (entire decision matrix table)
**DOM structure:**
```css
.decision-matrix td.best-fit   { border-left: 4px solid var(--color-primary); font-weight: 600; }
.decision-matrix td.acceptable { border-left: 4px solid var(--accent-green); }
.decision-matrix td.avoid      { border-left: 4px solid var(--color-border); color: var(--color-text-secondary); }
```

**Reader function:** Each cell in the 5x5 decision matrix receives a left-border color encoding its fitness rating: red (best fit, bold), green (acceptable), gray (avoid, dimmed text). The reader can scan the matrix by color alone to see which patterns suit which content types.

**Detection reasoning:** Gesture because the border-color + font-weight + text-color shift encodes a three-level fitness scale. This is a coordinated multi-property shift per classification level. It changes HOW you read the table — scanning by color rather than reading text.

**Multi-channel coordination:** Border color (3 values: primary red, accent green, border gray), font-weight (600 for best-fit only), text color (primary for best-fit/acceptable, secondary gray for avoid). Three channels vary together according to one classification.

**Pipeline implication:** "What if a decision matrix needs scannable color-coding for fitness levels?" The gesture makes pattern selection immediate without reading cell text.

**Derivation question:** "What if a content-to-axis mapping table needs to be scannable by color rather than readable by text?"

---

### 19. Transition Grammar Color Coding — GESTURE

**CSS class(es):** `.transition-matrix td.smooth`, `.transition-matrix td.bridge`, `.transition-matrix td.breathing`
**CSS lines:** 997-1005
**HTML lines:** 1635-1689 (transition matrix table)
**DOM structure:**
```css
.transition-matrix td.smooth    { color: var(--accent-green); }
.transition-matrix td.bridge    { color: var(--accent-amber); }
.transition-matrix td.breathing { color: var(--accent-coral); }
```

**Reader function:** The 5x5 transition grammar matrix color-codes each cell by transition type: green (smooth), amber (bridge), coral (breathing). The reader can visually map which pattern transitions are easy vs. difficult by scanning color patterns in the matrix.

**Detection reasoning:** Gesture because text color alone encodes transition difficulty. It's a simpler gesture than the decision matrix (single channel: text color) but still shifts reading mode — you scan by color rather than reading words.

**Multi-channel coordination:** Text color is the sole varying channel (green/amber/coral). The words ("Smooth"/"Bridge"/"Breathing") reinforce the color but are redundant — the color alone communicates the classification.

**Pipeline implication:** "What if a transition compatibility matrix needs to be scannable at a glance?" Color-as-classification makes the 5x5 grid readable as a heat map.

**Derivation question:** "What if pattern transition difficulty could be encoded as text color in a matrix, making compatibility scannable?"

---

### 20. Solid Offset Depth — GESTURE

**CSS class(es):** `.offset-container::after`, `.bento-item--featured::after`, `.choreo-hub::after`
**CSS lines:** 841-851, 944-954, 1067-1080
**HTML lines:** 1555 (bento featured), 1831 (choreo hub), various offset containers
**DOM structure:**
```css
.offset-container::after {
  content: '';
  position: absolute;
  top: var(--offset-y);        /* 4px */
  left: var(--offset-x);       /* 4px */
  right: calc(var(--offset-x) * -1);
  bottom: calc(var(--offset-y) * -1);
  border: 3px solid var(--offset-color);  /* #1A1A1A */
  z-index: -1;
  background: var(--color-zone-breathing);
}
```

**Reader function:** A 4px-offset pseudo-element creates a "shadow" rectangle behind featured elements (bento featured item, choreography hub). This creates implied depth WITHOUT violating the box-shadow:none soul constraint. The offset signals "this element is elevated — pay more attention to it."

**Detection reasoning:** Gesture because the offset pseudo-element shifts the reader's attention without carrying content. It changes HOW you perceive the element (as elevated/featured) through a spatial inflection. Applied to exactly two elements: the featured bento item and the choreography hub — the two most important containers.

**Multi-channel coordination:** Position (absolute, offset by 4px x/y), border (3px solid near-black), background (breathing zone color), z-index (-1, behind parent). The offset direction (down-right) creates an anti-physical depth illusion that signals importance while respecting soul constraints.

**Pipeline implication:** "What if featured elements need visual elevation without box-shadow?" The solid offset is the soul-compliant alternative to drop shadows.

**Derivation question:** "What if depth/elevation needs to be communicated through geometry alone, since shadows are prohibited?"

---

### 21. Collapsible Details State Shift — GESTURE

**CSS class(es):** `details`, `details summary`, `details[open] summary`
**CSS lines:** 1083-1100
**HTML lines:** 2133-2182 (3 details elements)
**DOM structure:**
```html
<details>
  <summary>Z-Pattern + Spiral (experimental)</summary>
  <div>
    <p>...</p>
  </div>
</details>
```

**Reader function:** Three collapsible sections in Section 7 ("Development Kitchen"). When closed, summary shows on a breathing-zone background with a 1px bottom border. When opened, the border thickens to 3px (Cat 1 structural). This state shift signals "you've expanded into deeper content" through border weight change.

**Detection reasoning:** Gesture because the `details[open]` state shifts the summary's border from 1px (subtle) to 3px (structural). This coordinated change in border weight + state signals a reading-register shift from "scanning collapsed items" to "reading expanded content."

**Multi-channel coordination:** Border-bottom (1px subtle closed → 3px structural open), background (breathing zone on summary), padding (16px internal on summary, 24px on content div). The border weight shift from Cat 2 to Cat 1 on open is the gesture's key signal.

**Pipeline implication:** "What if progressive disclosure needs a visual signal when content is revealed?" The border thickening makes state change physically visible.

**Derivation question:** "What if expanding a collapsible section should change the visual weight of its boundary to signal depth change?"

---

### 22. Crown Jewel Title Amplification — GESTURE

**CSS class(es):** `header h1` (axis layer override)
**CSS lines:** 517-519
**HTML lines:** 1244
**DOM structure:**
```css
/* AD-006 CROWN JEWEL divergence: --type-page amplified to 3rem */
header h1 {
  font-size: 3rem;
}
```

**Reader function:** The page title is amplified from the standard 2.5rem (--type-page) to 3rem. This 20% size increase signals that AD-006 is the "crown jewel" of the AD series — the synthesis exploration that unifies all five patterns.

**Detection reasoning:** Gesture because it's a deliberate deviation from the locked type scale that changes the reader's perception of the document's importance. The amplification is small (2.5rem → 3rem) but intentional — per AD-CONVENTION-SPEC.md Section 9, crown jewel explorations get amplified headings.

**Multi-channel coordination:** Font-size is the sole varying channel (2.5rem → 3rem). But it coordinates with the header's dark background and the subtitle text below to create a more dramatic hero section.

**Pipeline implication:** "What if the most important exploration in a series needs visual amplification?" Title size signals document importance within a series.

**Derivation question:** "What if the crown jewel of a 6-exploration series needs to announce its significance through heading scale?"

---

### 23. Typography Trinity Register Shifts — GESTURE

**CSS class(es):** Multiple (no single class — it's a system-level gesture)
**CSS lines:** 171-196 (base), plus numerous component-level overrides
**HTML lines:** Throughout the entire document
**DOM structure:**
```
Instrument Serif → headings, drop caps, callout--essence body, bento titles, footer title
Inter → body text, callout labels, table headers, meta lines
JetBrains Mono → code blocks, section-meta, stratum-labels, spoke-labels, discovery-ids, axis-indicator
```

**Reader function:** The three fonts create a persistent three-register system throughout the document. Instrument Serif signals "display/editorial/essence," Inter signals "body/analytical," JetBrains Mono signals "metadata/technical/structural." Every typographic shift between fonts IS a register shift.

**Detection reasoning:** Gesture because font-family changes shift reading mode throughout the entire document. This is not a single inflection point but a persistent system. The font itself IS the register — changing from Inter to Mono signals "this is metadata," changing to Serif signals "this is editorial."

**Multi-channel coordination:** Font-family is the primary channel, but it coordinates with: font-size (Serif gets larger sizes, Mono gets meta-size), weight (Mono gets 500-600, Serif stays 400), style (h3 is italic Serif, essence callouts are italic Serif), letter-spacing (Mono gets 0.05-0.1em, Serif/Inter get tighter), and text-transform (Mono elements are often uppercase).

**Pipeline implication:** "What if the font family itself is a semantic signal, not just an aesthetic choice?" The typography trinity creates a three-channel register system that works across all content types.

**Derivation question:** "What if three fonts could encode three distinct reading registers, and every font shift is a meaningful signal?"

---

## COMPONENTS (12 found)

### 24. Z-Layout — COMPONENT

**CSS class(es):** `.z-layout`, `.z-top-left`, `.z-top-right`, `.z-bottom-left`, `.z-bottom-right`
**CSS lines:** 625-647
**HTML lines:** 1275-1345
**DOM structure:**
```html
<div class="z-layout">
  <div class="z-top-left"><!-- primary content --></div>
  <div class="z-top-right"><!-- pattern echo grid --></div>
  <div class="z-bottom-left"><!-- callout --></div>
  <div class="z-bottom-right"><!-- outline list --></div>
</div>
```

**Reader function:** 2x2 grid layout creating a Z-shaped reading path. Top-left and bottom-right cells get dense treatment (white background + 3px structural border + 32px padding). Top-right and bottom-left get sparse treatment (padding only). The diagonal (TL→BR) carries primary content; the counter-diagonal carries supporting material.

**Detection reasoning:** Component because it's a reusable container with defined slots (4 quadrants), consistent visual treatment (dense diagonal, sparse counter-diagonal), and a specific structural purpose (Z-pattern reading path). Content can vary; the container structure is fixed.

**Multi-channel coordination:** Grid layout (2-column, named areas), background alternation (dense=white on diagonal, sparse=transparent on counter-diagonal), border (3px structural on dense cells only), padding (32px uniform). Collapses to single column at 768px.

**Pipeline implication:** "What if an overview section needs to establish connections across a 2x2 grid?" The Z-layout creates a diagonal reading path that connects disparate elements.

**Derivation question:** "What if content needs to sweep the reader's eye diagonally across four quadrants?"

---

### 25. Triple Column — COMPONENT

**CSS class(es):** `.triple-column`, `.triple-column__cell`, `.triple-column__cell--org`, `.triple-column__cell--density`, `.triple-column__cell--axis`, `.triple-column__heading`
**CSS lines:** 792-816
**HTML lines:** 1388-1413
**DOM structure:**
```html
<div class="triple-column">
  <div class="triple-column__cell triple-column__cell--org">
    <div class="triple-column__heading">Organization</div>
    <p>...</p>
  </div>
  <div class="triple-column__cell triple-column__cell--density">
    <div class="triple-column__heading">Density</div>
    <p>...</p>
  </div>
  <div class="triple-column__cell triple-column__cell--axis">
    <div class="triple-column__heading">Axis</div>
    <p>...</p>
  </div>
</div>
```

**Reader function:** 3-column grid for side-by-side comparison of Organization, Density, and Axis perspectives on the same phenomenon. Each cell has 3px structural borders, 24px padding, and a monospace uppercase heading with red bottom accent. Demonstrates EXT-AXIS-X-001 triple equivalence visually.

**Detection reasoning:** Component because it's a reusable comparison container with defined slots (3 named grid areas, each with heading + content). The structure is fixed; only content varies.

**Multi-channel coordination:** Grid (3-column named areas), border (3px structural on each cell), heading (monospace, red bottom border), padding (24px). Collapses to single column at 1024px.

**Pipeline implication:** "What if three analytical perspectives need side-by-side comparison?" The triple column makes equivalence claims falsifiable through visual juxtaposition.

**Derivation question:** "What if three dimensions of the same phenomenon need to be examined simultaneously in parallel columns?"

---

### 26. Bento Grid — COMPONENT

**CSS class(es):** `.bento-grid`, `.bento-item`, `.bento-item--featured`, `.bento-item__title`, `.bento-item__meta`, `.bento-a` through `.bento-d`
**CSS lines:** 822-870
**HTML lines:** 1554-1613
**DOM structure:**
```html
<div class="bento-grid">
  <div class="bento-item bento-item--featured offset-container">
    <div class="bento-item__meta">Featured Pattern</div>
    <div class="bento-item__title">Compound Axis</div>
    <p>...</p>
  </div>
  <div class="bento-item bento-a">
    <div class="bento-item__meta">Scanning</div>
    <div class="bento-item__title">Z-Pattern</div>
    <p>...</p>
  </div>
  <!-- bento-b, bento-c, bento-d -->
</div>
```

**Reader function:** 4-column grid with a featured 2x2 item and four 1x1 items. The featured item gets primary-red border + solid offset treatment (pseudo-element depth). Standard items get structural border + dense background. Cell size IS hierarchy: the featured item commands 4x the visual space.

**Detection reasoning:** Component because it's a reusable catalog container with defined slots (featured + 4 standard, each with meta + title + content). The size hierarchy is structural, not decorative.

**Multi-channel coordination:** Grid (4-column, named areas), featured treatment (primary-red border + solid offset + double-size area), standard treatment (3px structural border, dense background), internal slots (meta label, italic Serif title, body text). Progressive collapse: 2-column at 1024px, 1-column at 960px.

**Pipeline implication:** "What if a pattern catalog needs visual hierarchy through cell size?" Bento's varied sizes make importance scannable without reading.

**Derivation question:** "What if a reference catalog needs one featured item that commands attention while still showing four supporting items?"

---

### 27. Spiral Layout — COMPONENT

**CSS class(es):** `.spiral-layout`, `.spiral-wide`, `.spiral-medium`, `.spiral-narrow`, `.spiral-deep`
**CSS lines:** 876-909
**HTML lines:** 1722-1781
**DOM structure:**
```html
<div class="spiral-layout">
  <div class="spiral-wide">
    <div class="stratum-label">Stratum 1 &mdash; Validated</div>
    <h3>...</h3>
    <p>...</p>
  </div>
  <div class="spiral-medium">
    <div class="stratum-label">Stratum 2 &mdash; Established</div>
    ...
  </div>
  <div class="spiral-narrow">
    <div class="stratum-label">Stratum 3 &mdash; Exploratory</div>
    ...
  </div>
  <div class="spiral-deep">
    <div class="stratum-label">Stratum 4 &mdash; Speculative</div>
    ...
  </div>
</div>
```

**Reader function:** 3-column grid using golden ratio proportions (1fr/1fr/1.618fr) with four named zones that nest from wide (full 3-column span) to narrow (occupying less area). Each zone has a colored left border encoding confidence and a stratum label. Content spirals inward from overview to speculation.

**Detection reasoning:** Component because it's a reusable deep-dive container with defined slots (4 named zones with stratum-label + heading + content). The golden-ratio proportions and confidence encoding are structural, not decorative.

**Multi-channel coordination:** Grid (3-column with golden ratio), area assignments (wide=full-top, medium=2/3, narrow=1/3, deep=2/3-bottom), border-left color (blue/green/amber/purple by confidence), background (alternating zone colors), padding (32px wide, 24px others). Collapses at 960px to single column.

**Pipeline implication:** "What if deep-dive content needs proportional nesting with confidence encoding?" The spiral layout maps depth to uncertainty visually.

**Derivation question:** "What if content could spiral from validated overview to speculative depth, with visual encoding of confidence at each layer?"

---

### 28. Choreography Layout — COMPONENT

**CSS class(es):** `.choreo-layout`, `.choreo-hub`, `.choreo-spoke`, `.spoke-a` through `.spoke-d`
**CSS lines:** 925-963
**HTML lines:** 1816-1896
**DOM structure:**
```html
<div class="choreo-layout">
  <div class="choreo-spoke spoke-a">
    <div class="spoke-label">Spoke A &mdash; Temporal</div>
    <p>...</p>
  </div>
  <div class="choreo-hub">
    <h3>The Hub: Triple Equivalence</h3>
    <p>...</p>
    <aside class="callout callout--essence">...</aside>
  </div>
  <div class="choreo-spoke spoke-b">...</div>
  <div class="choreo-spoke spoke-c">...</div>
  <div class="choreo-spoke spoke-d">...</div>
</div>
```

**Reader function:** 3-column grid (1fr / 1.618fr / 1fr) with a central hub and 4 surrounding spokes. The hub gets primary-red border + solid offset (same featured treatment as bento). Spokes get structural borders + sparse background. The golden-ratio center column makes the hub visually dominant.

**Detection reasoning:** Component because it's a reusable synthesis container with defined slots (1 hub + 4 spokes, each with label + content). The hub-spoke topology IS the structure.

**Multi-channel coordination:** Grid (3-column golden ratio, named areas), hub treatment (primary-red border + solid offset + flex column layout), spoke treatment (3px structural border, sparse background, spoke-label instrument), layout (spokes flank hub in 2x2 around center). Collapses to single column at 960px.

**Pipeline implication:** "What if synthesis content needs to radiate from a central insight to supporting evidence?" The hub-spoke layout makes the core claim visually central.

**Derivation question:** "What if content about convergence should literally converge on a central hub, with evidence radiating outward?"

---

### 29. F-Layout — COMPONENT

**CSS class(es):** `.f-layout`, `.f-scanline`
**CSS lines:** 775-789
**HTML lines:** 1366-1532
**DOM structure:**
```html
<div class="f-layout">
  <div class="f-scanline">
    <!-- scanline content -->
  </div>
  <div class="f-scanline">
    <h3>...</h3>
    <!-- triple column comparison -->
  </div>
  <div class="f-scanline">
    <h3>...</h3>
    <!-- table -->
  </div>
  <div class="f-scanline">
    <h3>...</h3>
    <!-- table + summary -->
  </div>
</div>
```

**Reader function:** Vertical flex container with scanline dividers. Each scanline is separated by a 1px subtle bottom border and 32px gap. The F-pattern structure front-loads the most important content at the top of each scanline, supporting the natural F-shaped eye tracking pattern.

**Detection reasoning:** Component because it's a reusable vertical container with defined scanline slots, consistent border/gap treatment, and a structural purpose (F-pattern reading support). Simple but effective — the component's value is in its consistent separation.

**Multi-channel coordination:** Layout (flex column, 32px gap), border (1px subtle between scanlines, none on last), padding-bottom (32px per scanline). Minimal CSS, maximum structural clarity.

**Pipeline implication:** "What if analytical content needs to support F-pattern eye tracking?" The scanline structure creates clear horizontal reading bands.

**Derivation question:** "What if text-heavy analytical content should be structured as horizontal scan bands with clear separators?"

---

### 30. Callout System — COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--essence`
**CSS lines:** 351-393
**HTML lines:** 1316 (essence), 1415 (note), 1464 (tip), 1615 (caution), 1691 (note), 1783 (gotcha), 1840 (essence), 1973 (tip), 2115 (essence) — 9 instances
**DOM structure:**
```html
<aside class="callout callout--essence">
  <div class="callout__label">Essence</div>
  <div class="callout__body">...</div>
</aside>
```

**Reader function:** 2-zone aside component (label + body) with 4px left border in variant accent colors. Five variants: note (blue), tip (green), gotcha (coral), caution (amber), essence (purple, serif italic body). 9 total instances across the page. The label is a monospace uppercase micro-heading; the body is the content.

**Detection reasoning:** Component because it's a reusable container with defined slots (label, body) and consistent visual treatment across 5 variants. The callout is the most frequently used component in the file (9 instances).

**Multi-channel coordination:** Border-left (4px, variant-colored), background (sparse zone), label (monospace, meta-size, uppercase, variant-colored), body (Inter body or Instrument Serif italic for essence). The essence variant shifts the body font to serif italic — the "Archivist speaks" soul piece.

**Pipeline implication:** "What if the page needs aside content with explicit emotional/analytical register markers?" The 5-variant system covers all aside types.

**Derivation question:** "What if asides need color-coded emotional/analytical classification?"

---

### 31. Section Header — COMPONENT

**CSS class(es):** `.section-header`, `.section-meta` (instrument within)
**CSS lines:** 601-619
**HTML lines:** 1264-1272, 1356-1364, 1543-1551, 1710-1719, 1804-1813, 1907-1915, 2037-2045
**DOM structure:**
```html
<div class="section-header">
  <div class="section-meta">Section 01 &mdash; Z-Pattern Overview</div>
  <h2>The Five Patterns, One Page</h2>
  <p>Section introduction text...</p>
</div>
```

**Reader function:** A consistent 3-slot container at the top of every section: section-meta instrument (monospace label), h2 heading (Instrument Serif), and introductory paragraph (body text, secondary color). 7 instances — one per section. The container establishes a predictable reading pattern: "where am I → what is this → brief context."

**Detection reasoning:** Component because it's a reusable container with 3 defined slots that appears identically at every section start. The consistency of the 3-slot pattern across 7 wildly different sections IS the component's value — it provides a stable anchor despite axis pattern changes.

**Multi-channel coordination:** Slot 1 (section-meta: monospace, uppercase, meta-size), slot 2 (h2: Serif, section-size), slot 3 (p: body text, secondary color). Margin-bottom (32px) separates from section content. The container itself has no border or background — pure typographic structure.

**Pipeline implication:** "What if every section in a compound page needs the same orientation pattern regardless of layout?" The section header component ensures consistent entry points.

**Derivation question:** "What if a page with 7 different layout patterns needs an identical entry sequence at every section start?"

---

### 32. Decision Matrix Table — COMPONENT

**CSS class(es):** `.decision-matrix` (extends base `table`)
**CSS lines:** 981-994 (matrix-specific), 398-430 (base table)
**HTML lines:** 1918-1971
**DOM structure:**
```html
<table class="decision-matrix">
  <thead>
    <tr>
      <th>Content Type</th>
      <th>Z-Pattern</th>
      <th>F-Pattern</th>
      <th>Bento</th>
      <th>Spiral</th>
      <th>Choreo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Landing Page</strong></td>
      <td class="best-fit">Best fit</td>
      <td class="acceptable">Acceptable</td>
      <!-- ... -->
    </tr>
    <!-- 4 more rows -->
  </tbody>
</table>
```

**Reader function:** A 5x6 table mapping content types to axis patterns with color-coded fitness ratings. Extends the base table component with cell classification gestures (best-fit/acceptable/avoid). Acts as the page's climactic reference — the actionable decision tool.

**Detection reasoning:** Component because it's a structured container with defined slots (header row, data cells with classification), consistent internal treatment, and a specific structural purpose (pattern selection lookup). The gesture layer (cell colors) sits ON TOP of the component structure.

**Multi-channel coordination:** Base table styling (open grid, no vertical borders, 3px header bottom border) + matrix extensions (4px left border per classification, font-weight shift, color shift). The component provides the container; the gesture provides the encoding.

**Pipeline implication:** "What if the synthesis of a multi-pattern analysis needs a decision lookup table?" The matrix is the compound page's actionable output.

**Derivation question:** "What if five axis patterns and five content types need a cross-reference matrix with fitness ratings?"

---

### 33. Transition Grammar Matrix — COMPONENT

**CSS class(es):** `.transition-matrix` (extends base `table`)
**CSS lines:** 997-1005 (matrix-specific), 398-430 (base table)
**HTML lines:** 1635-1689
**DOM structure:**
```html
<table class="transition-matrix">
  <thead>
    <tr>
      <th>From \ To</th>
      <th>Z-Pattern</th>
      <th>F-Pattern</th>
      <th>Bento</th>
      <th>Spiral</th>
      <th>Choreography</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Z-Pattern</strong></td>
      <td>&mdash;</td>
      <td class="smooth">Smooth</td>
      <td class="bridge">Bridge</td>
      <!-- ... -->
    </tr>
    <!-- 4 more rows -->
  </tbody>
</table>
```

**Reader function:** A 5x5 symmetric matrix showing transition compatibility between all axis pattern pairs. Diagonal is empty (self-transition). Each cell is color-coded by transition type (smooth/bridge/breathing). Used in Section 3 to provide the grammar rules for compound pattern sequencing.

**Detection reasoning:** Component because it's a structured container with defined slots (5x5 pattern pair cells), consistent treatment, and a specific purpose (transition grammar lookup). Distinct from the decision matrix because it maps pattern-to-pattern (not content-to-pattern).

**Multi-channel coordination:** Base table styling + text color encoding (green smooth, amber bridge, coral breathing). The 5x5 structure mirrors the pattern relationships — the table shape IS the compound pattern space.

**Pipeline implication:** "What if pattern transitions need a compatibility matrix?" The grammar matrix prevents disorienting pattern combinations.

**Derivation question:** "What if every pair of axis patterns has a transition type, and compound pages need a lookup table to sequence them correctly?"

---

### 34. Development Kitchen (Details/Collapsible) — COMPONENT

**CSS class(es):** `details`, `details summary`, `details[open] summary`, `details > div`
**CSS lines:** 1083-1100
**HTML lines:** 2133-2182 (3 instances)
**DOM structure:**
```html
<details>
  <summary>Z-Pattern + Spiral (experimental)</summary>
  <div>
    <p>Attempting to nest a spiral within a Z-pattern quadrant...</p>
    <p><strong>Lesson:</strong> Compound patterns work across sections, not within them.</p>
  </div>
</details>
```

**Reader function:** Three collapsible sections documenting failed experiments: "Z-Pattern + Spiral," "Bento + Choreography," and "All Five Simultaneous." Each contains the experiment description + lesson learned. Progressive disclosure — the reader sees the experiment names without being forced through the details.

**Detection reasoning:** Component because it's a reusable container with defined slots (summary title, detail content div), consistent visual treatment (3px structural border, breathing-zone summary background, state-shift gesture on open). Three instances with identical structure.

**Multi-channel coordination:** Border (3px structural), summary background (breathing zone), open-state border shift (1px→3px on summary bottom), content padding (24px). The "experimental" framing in the summary text coordinates with the collapsible nature — failed experiments belong behind progressive disclosure.

**Pipeline implication:** "What if research dead-ends need to be documented but not forced on the reader?" The collapsible detail component is the progressive-disclosure solution.

**Derivation question:** "What if failed experiments are valuable lessons but shouldn't clutter the main reading path?"

---

### 35. Header — COMPONENT

**CSS class(es):** `header`, `.header-inner`
**CSS lines:** 245-296
**HTML lines:** 1237-1252
**DOM structure:**
```html
<header>
  <div class="header-inner">
    <div class="meta-line">
      <span>EXPLORATION AD-006</span>
      <span>AXIS: COMPOUND</span>
      <span class="version-badge">v1 enriched</span>
    </div>
    <h1>AD-006: The Convergence</h1>
    <p class="subtitle">What if axis geometry, organizational pattern, and density pattern are not three layers but one phenomenon?...</p>
  </div>
</header>
```

**Reader function:** Full-bleed dark header (near-black background) with 3px red bottom border. Contains meta-line instrument, amplified h1 title (3rem), and subtitle paragraph. The dark-on-light inversion creates a dramatic entry that mirrors the footer bookend.

**Detection reasoning:** Component because it's a structured container with defined slots (meta-line, h1, subtitle), consistent treatment (dark background, constrained inner width), and a specific purpose (page entry).

**Multi-channel coordination:** Background (dark #1A1A1A inverted from page), border-bottom (3px primary red), max-width (1100px inner), padding (64px vertical, 32px horizontal), text colors inverted (cream h1, secondary gray subtitle). The crown jewel amplification (3rem h1 vs standard 2.5rem) is a compound-specific enhancement.

**Pipeline implication:** "What if the page entry needs to invert the color scheme for dramatic impact?" The dark header creates a natural "curtain-up" moment.

**Derivation question:** "What if the opening of a compound synthesis needs a dramatic dark header that signals 'this is the crown jewel'?"

---

## SUMMARY

| Category | Count | Elements |
|----------|-------|----------|
| **Instruments** | 12 | Scroll Witness, Axis Indicator, Meta Line, Pattern Echo Grid, Section Meta (x7), Stratum Labels (x4), Spoke Labels (x4), Fractal Annotation Layer (x5), Discovery Log, Bento Item Meta (x5), Triple Column Headings (x3), Research Application Record |
| **Gestures** | 11 | Drop Cap, Zone Background Alternation, Section Boundary, Spiral Border-Weight Confidence, F-Scanline Crescendo, Decision Matrix Cell Classification, Transition Grammar Color Coding, Solid Offset Depth, Collapsible Details State Shift, Crown Jewel Title Amplification, Typography Trinity Register Shifts |
| **Components** | 12 | Z-Layout, Triple Column, Bento Grid, Spiral Layout, Choreography Layout, F-Layout, Callout System (x9), Section Header (x7), Decision Matrix Table, Transition Grammar Matrix, Development Kitchen (x3), Header |

**Total: 35 distinct elements** (12 Instruments + 11 Gestures + 12 Components)

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. Read all 2276 lines in 6 sequential reads: lines 1-200, 200-599, 599-998, 998-1397, 1397-1796, 1796-2276. Every CSS rule in both the locked layer (lines 71-486) and the axis layer (lines 493-1208) was examined. All HTML from line 1211 to 2276 was read.

2. **Am I identifying elements at the DOM level?** YES. Every entry references specific CSS classes, line numbers, and DOM structure. I traced classes from CSS definitions to HTML usage.

3. **Could I have missed subtle gestures?** POSSIBLE GAPS: (a) The responsive breakpoints (1024px, 960px, 768px) could constitute a gesture — the progressive disappearance of solid offsets and fractal annotations at smaller viewports. I chose not to catalog these as separate gestures since they're documented within the components they affect. (b) The print styles (lines 446-470) hide scroll-witness and axis-indicator — a gesture that removes instruments for print. (c) The `::selection` styling (lines 210-213) in primary red could be considered a micro-gesture. These are borderline and I judged them as "styling" rather than "reading experience shifts."

4. **Am I applying the reader-function test honestly?** YES. I tested each element by asking "does removing this change the reader's experience?" For example, I included the Research Application Record (hidden, display:none) because it changes the machine-reader's experience even though not the human reader's. I excluded base typography tokens and reset styles because removing them changes appearance but not reading experience in the instrument/gesture sense.

5. **Did I check for pseudo-elements?** YES. Found: pattern echo grid `::before`/`::after` (6 pattern miniatures), solid offset `::after` (bento featured, choreo hub, offset-container), drop-cap `::first-letter` (4 instances). All cataloged.

6. **Did I check responsive breakpoints?** YES. Three breakpoints: 1024px (triple-column/bento/spiral/choreo collapse), 960px (bento/choreo/spiral to single-column, solid offsets hidden), 768px (all grids single-column, fractal annotations hidden, title de-amplified, axis-indicator wraps). The fractal-annotation marker disappearing at 768px is notable — it removes an instrument at mobile.

7. **Am I distinguishing styling from instruments/gestures?** YES. Excluded: base resets, font-smoothing, focus-visible outline, skip-link, general list styles, scroll-reveal protection (opacity/transform !important), generic inline code styling, syntax highlighting tokens. These are styling (making it look right) not instruments/gestures (serving a reader-experience function).
