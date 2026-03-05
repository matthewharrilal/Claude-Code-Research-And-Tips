# OD-006 Instrument / Gesture / Component Inventory

**File:** `design-system/validated-explorations/organizational/OD-006-creative.html`
**Size:** 2,636 lines (112KB) — CSS lines 217-1609, HTML lines 1611-2515, JS lines 2521-2631
**Analysis:** Full file read (CSS + HTML + JS), every line examined.

---

## INSTRUMENTS

### 1. Scroll Witness (Recursive Fractal TOC) — INSTRUMENT

**CSS class(es):** `.scroll-witness`, `.scroll-witness__title`, `.toc__item`, `.toc__marker`, `.toc__label`, `.toc__mode`
**CSS lines:** 482-554 (scroll witness container + TOC items + marker + label + mode)
**HTML lines:** 1627-1691 (7 TOC entries: thesis + 6 sections)
**JS lines:** 2573-2600 (fallback progress tracking for non-Chromium browsers)
**DOM structure:**
```html
<nav class="scroll-witness" aria-label="Section progress" role="navigation">
  <div class="scroll-witness__title">Exploration Progress</div>
  <a href="#section-0" class="toc__item">
    <div class="toc__marker" id="toc-0"></div>
    <div>
      <span class="toc__label">Thesis</span>
      <span class="toc__mode">meta</span>
    </div>
  </a>
  <!-- 6 more toc__items... -->
</nav>
```

**Reader function:** Fixed left sidebar showing all 7 sections with rectangular progress bars that fill (via CSS `scaleY(var(--progress))`) as sections scroll into view. Tells the reader WHERE they are in the page and HOW MUCH they have traversed of each section. Each entry also shows the organizational mode label (e.g., "conversational -- PULSE").

**Detection reasoning:** This is an Instrument, not a Component, because its primary purpose is reader orientation (position awareness + progress tracking), not content delivery. Remove it and the reader loses all sense of how far through the page they are and which organizational mode is active.

**Multi-channel coordination:** Progress bars fill via CSS `@property --progress` animated by `animation-timeline: view()` (lines 393-411). The marker uses `scaleY(var(--progress))` (line 528). Color channel: primary red fill on near-black outline. Typography channel: three distinct fonts cascade across the three TOC levels (serif for section titles, sans for subsections, mono for density mode annotations per EXT-CREATIVE-012).

**Pipeline implication:** "What if the reader could always see their position in the document AND the organizational structure at a glance?" The pipeline would need a sidebar-generation step that extracts section metadata (title + organizational mode + density pattern) and renders progress indicators.

**Derivation question:** "What if navigation itself was a miniature representation of the page's architecture?"

**Calibration deepening:** The calibration doc mentions "progress bars that fill as sections scroll into view" -- the actual mechanism is CSS Houdini `@property --progress` (line 393-397) with `animation-timeline: view(block 95% 5%)` on `.doc-section` (lines 404-407), and the marker uses `transform: scaleY(var(--progress, 0))` (line 528) with `transform-origin: top` (line 527). JS fallback at lines 2573-2600 calculates progress via `getBoundingClientRect()`. The calibration doc also missed that this is a 3-LEVEL FRACTAL TOC per EXT-CREATIVE-012 (line 1622-1626): Level 1 is section titles in `--font-display`, Level 2 is key subsections in `--font-body` at 0.625rem, Level 3 is density-mode annotations in `--font-mono`.

---

### 2. Fractal Annotation Layer — INSTRUMENT

**CSS class(es):** `.fractal-annotations`, `.fractal-annotation`, `.fractal-annotation.active`, `.fractal-annotation__scale`, `.fractal-annotation__ratio`
**CSS lines:** 437-479 (fractal annotations container + annotation items + active state + scale + ratio)
**HTML lines:** 1697-1714 (4 annotations: page scale, section scale, component scale, character scale)
**JS lines:** 2602-2631 (IntersectionObserver highlighting active scale based on scroll position)
**DOM structure:**
```html
<aside class="fractal-annotations" aria-label="Fractal scale annotations">
  <div class="fractal-annotation" id="fa-page" data-scale="page">
    <span class="fractal-annotation__scale">Page Scale</span>
    <span class="fractal-annotation__ratio">48px &rarr; 26px (1.85x)</span>
  </div>
  <div class="fractal-annotation" id="fa-section" data-scale="section">
    <span class="fractal-annotation__scale">Section Scale</span>
    <span class="fractal-annotation__ratio">26px &rarr; 22px (1.18x)</span>
  </div>
  <div class="fractal-annotation" id="fa-component" data-scale="component">
    <span class="fractal-annotation__scale">Component Scale</span>
    <span class="fractal-annotation__ratio">22px &rarr; 16px (1.375x)</span>
  </div>
  <div class="fractal-annotation" id="fa-character" data-scale="character">
    <span class="fractal-annotation__scale">Character Scale</span>
    <span class="fractal-annotation__ratio">16px &rarr; 12px (1.33x)</span>
  </div>
</aside>
```

**Reader function:** Persistent left-margin column with vertical rotated text (via `writing-mode: vertical-lr; transform: rotate(180deg)`) labeling which fractal scale the reader is currently experiencing. Makes DD-F-006 fractal self-similarity VISIBLE -- the reader SEES the architecture, not just experiences it. Active annotation turns red when the corresponding scale is in view.

**Detection reasoning:** Instrument because it is pure metadata about the page's architecture. It describes the reading experience itself rather than delivering content. Remove it and the reader loses awareness of the fractal structure.

**Multi-channel coordination:** Three visual channels encode metadata: (1) Text content names the fractal scale (Page/Section/Component/Character), (2) Ratio annotations show actual type-scale ratios (e.g., "48px -> 26px (1.85x)") per EXT-CREATIVE-015, (3) Color shifts from `opacity: 0.6` gray to `opacity: 1; color: var(--color-primary)` red when active (lines 458-465). JS IntersectionObserver (lines 2604-2631) determines active scale based on which `.doc-section` is visible.

**Pipeline implication:** "What if the reader could see the underlying architectural principles of the page while reading it?" Requires the pipeline to compute actual type-scale ratios and generate marginalia annotations.

**Derivation question:** "What if the fractal structure could be made visible as an editorial sidebar, like manuscript annotations?"

**Calibration deepening:** The calibration doc mentions "vertical rotated text labeling fractal scales with actual ratio annotations." The CSS specifics: `writing-mode: vertical-lr` + `text-orientation: mixed` + `transform: rotate(180deg)` (lines 453-455). The scale label uses `text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600` (lines 469-472). The ratio sub-label uses `font-weight: 400; opacity: 0.7` (lines 475-477). The active state JS (lines 2604-2631) maps section-0 to page scale, section-6 to character scale, and all middle sections to section scale.

---

### 3. Visual Index / Pattern Echo — INSTRUMENT

**CSS class(es):** `.visual-index`, `.visual-index__cell`, `.visual-index__preview`, `.visual-index__preview-text`, `.visual-index__label`, `.visual-index__sublabel`, `.mini-pulse`, `.mini-crescendo`, `.mini-islands`, `.mini-geological`, `.mini-wave`, `.mini-fractal` (+ all sub-classes)
**CSS lines:** 1244-1409 (visual index grid + 6 miniature visual signatures)
**HTML lines:** 1744-1835 (6 grid cells with CSS-only miniatures + labels)
**DOM structure:**
```html
<div class="visual-index reveal" role="grid" aria-label="Visual index: 6 organizational patterns with miniature renderings">
  <div class="visual-index__cell" role="gridcell">
    <div class="visual-index__preview" aria-hidden="true">
      <div class="mini-pulse">
        <div class="mini-pulse__bar mini-pulse__bar--narrow"></div>
        <div class="mini-pulse__bar mini-pulse__bar--wide"></div>
        <div class="mini-pulse__bar mini-pulse__bar--narrow"></div>
      </div>
    </div>
    <div class="visual-index__label">
      1. Soul Discovery
      <span class="visual-index__sublabel">Conversational &mdash; PULSE</span>
    </div>
  </div>
  <!-- 5 more cells with mini-crescendo, mini-islands, mini-geological, mini-wave, mini-fractal -->
</div>
```

**Reader function:** Bento-style 3x2 grid serving as a specimen sheet. Each cell contains a CSS-only miniature rendering of that section's distinctive visual pattern: alternating narrow/wide bars for PULSE, rising bar segments for CRESCENDO, separated square blocks for ISLANDS, stacked layers with varying border-left for GEOLOGICAL, center hub with crosshair spokes for WAVE, and a recursive mini-grid for FRACTAL. The OD-006 cell is SELF-REFERENTIAL (a miniature of its own grid -- strange loop).

**Detection reasoning:** Instrument because it is an overview map of the page's structure, not a content container. It tells the reader WHAT organizational patterns will appear and in what sequence. Remove it and the reader loses the "table of contents as visual preview" orientation.

**Multi-channel coordination:** Six distinct CSS-only miniatures, each abstracting a different organizational pattern into pure geometry. Typography provides labels (Inter 600 for names, JetBrains Mono 0.625rem for density sublabels). The grid uses `border: 3px solid var(--color-text)` outer frame with `1px` internal cell borders. Each preview cell has `aspect-ratio: 4/3` (line 1268) with centered content.

**Pipeline implication:** "What if the reader could see abstract miniatures of each section's pattern before reading?" Requires the pipeline to generate CSS-only abstract representations of each organizational pattern.

**Derivation question:** "What if a page could show you its DNA before you read it -- like a specimen sheet in a type catalog?"

**Calibration deepening:** The calibration doc mentions "Bento grid with CSS-only miniature renderings." The specific miniature implementations are: `.mini-pulse` -- 3 bars at 60%/100%/60% width (lines 1288-1300), `.mini-crescendo` -- 5 bars at heights 8/14/20/26/32px (lines 1302-1313), `.mini-islands` -- 3 16x16px square blocks with 3px border (lines 1315-1327), `.mini-geological` -- stacked 8px layers with decreasing border-left from 4px to 1px (lines 1329-1339), `.mini-wave` -- 40x40px container with centered 8px hub and two 1px crosshair spokes (lines 1341-1373), `.mini-fractal` -- 3x3 grid with 1px gap, one cell highlighted red (lines 1375-1392). The strange loop in the fractal cell: it's a miniature of this very grid, and the bottom-right cell (6th) is `--active` (red) because that's OD-006's own position.

---

### 4. Section Header Mode Indicator — INSTRUMENT

**CSS class(es):** `.section-header__mode`
**CSS lines:** 667-686 (mode indicator + `::before` pseudo-element for red square marker)
**HTML lines:** 1849, 1923, 2010, 2139, 2217, 2302 (one per section, 6 total)
**DOM structure:**
```html
<div class="section-header__mode">Conversational &mdash; PULSE density</div>
```

**Reader function:** Displays the current organizational mode and its paired density pattern below each section title. An 8x8px red square (via `::before` pseudo-element) precedes the text. Tells the reader WHAT organizational pattern governs this section and what density to expect.

**Detection reasoning:** Instrument because it is pure metadata (organizational classification), not content. The reader uses it to set cognitive expectations for the section's structure. Remove it and the reader cannot tell which organizational mode is active.

**Multi-channel coordination:** Typography (JetBrains Mono, uppercase, 0.08em letter-spacing at `--type-meta` size), color (secondary text color for the label, primary red for the square marker via `::before`), and geometry (8x8px square with `border-radius: 0` -- the square marker signal system from Soul Piece 5).

**Pipeline implication:** "What if each section declared its organizational pattern and paired density explicitly?" Requires the pipeline's planner to classify each section's mode and generate the mode indicator.

**Derivation question:** "What if the reader knew the organizational mode before reading the first word of each section?"

**Calibration deepening:** The `::before` pseudo-element (lines 679-686) creates an `inline-block` 8x8px red square with `border-radius: 0` -- this is a Soul Piece 5 square marker, not decorative. The mode indicator sits within the sticky section header, so it persists at the top of the viewport while the reader scrolls through the section.

---

### 5. Section Divider with Mode Transition — INSTRUMENT

**CSS class(es):** `.section-divider`, `.section-divider__transition`
**CSS lines:** 1508-1522
**HTML lines:** 1907-1909, 1994-1996, 2122-2125, 2200-2203, 2284-2287 (5 dividers between 6 sections)
**DOM structure:**
```html
<div class="section-divider" role="separator">
  <span class="section-divider__transition">Conversational &rarr; Narrative</span>
</div>
```

**Reader function:** Breathing zone between sections that names the organizational mode transition (e.g., "Conversational -> Narrative"). Provides cognitive decompression -- the reader needs to reset structural expectations before entering a new organizational mode.

**Detection reasoning:** Instrument because it orients the reader to the upcoming structural shift. It is wayfinding at transitions. Remove it and the reader loses the explicit signal that the organizational mode is about to change.

**Multi-channel coordination:** Whitespace (80px top/bottom margin + 32px padding), background color shift (warm `--color-zone-breathing: #FAF5ED`), thin border-top (1px), and typography (JetBrains Mono, 0.625rem, uppercase, 0.15em letter-spacing, center-aligned). The generous whitespace IS the cognitive decompression.

**Pipeline implication:** "What if transitions between organizational modes were explicit and named?" The pipeline needs to identify mode boundaries and generate transition markers.

**Derivation question:** "What if the reader had a decompression chamber between cognitive modes, like an airlock between environments?"

**Calibration deepening:** The calibration doc mentions "Conversational -> Narrative" transition labels. The specific CSS: `margin: var(--space-20) 0` = 80px vertical breathing, `padding: var(--space-8) 0` = 32px, `background: var(--color-zone-breathing)` = #FAF5ED, `text-align: center`, `border-top: 1px solid var(--color-border)` (lines 1508-1514). Transition text: `font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.15em` -- the widest letter-spacing in the entire file, signaling "pause" through expanded letterforms.

---

### 6. Certainty Badge — INSTRUMENT

**CSS class(es):** `.certainty-badge`, `.certainty-badge__icon`, `.certainty-badge--established`, `.certainty-badge--emerging`, `.certainty-badge--exploratory`
**CSS lines:** 1097-1126
**HTML lines:** 2146-2148, 2160-2162, 2179-2181 (3 badges in Section 4), 2401-2403, 2409-2411, 2417-2419, 2425-2427 (4 badges in Section 6 fractal verification)
**DOM structure:**
```html
<div class="certainty-badge certainty-badge--established">
  <span class="certainty-badge__icon"></span>
  Established &mdash; Verified across 6+ explorations
</div>
```

**Reader function:** Labels each stratum in the confidence-based section with its certainty level. An 8x8px square icon encodes certainty visually: solid fill for established, hollow outline for emerging, faint outline for exploratory.

**Detection reasoning:** Instrument because it classifies content by certainty level -- pure metadata about the knowledge's epistemic status. Remove it and the reader cannot tell the confidence level of each stratum at a glance.

**Multi-channel coordination:** Three visual states: (1) Established: solid `background: var(--color-text)` icon, (2) Emerging: `border: 1px solid var(--color-text-secondary); background: transparent` icon, (3) Exploratory: `border: 1px solid var(--color-border); background: transparent` icon. Typography is consistent across all three (JetBrains Mono, 0.625rem, uppercase, 0.08em letter-spacing).

**Pipeline implication:** "What if each piece of content declared its certainty level with a visual badge?" Requires the pipeline to classify content confidence and generate appropriate badge variants.

**Derivation question:** "What if the reader could see at a glance whether a statement is bedrock fact, emerging pattern, or speculation?"

---

### 7. Synthesis Cards — INSTRUMENT

**CSS class(es):** `.synthesis-grid`, `.synthesis-card`, `.synthesis-card__org`, `.synthesis-card__density`, `.synthesis-card__proof`
**CSS lines:** 1200-1238
**HTML lines:** 2362-2388 (5 cards proving org-density identity pairs)
**DOM structure:**
```html
<div class="synthesis-grid">
  <div class="synthesis-card">
    <div class="synthesis-card__org">Conversational</div>
    <div class="synthesis-card__density">IS Pulse</div>
    <div class="synthesis-card__proof">Question-answer alternation inherently creates sparse-dense oscillation...</div>
  </div>
  <!-- 4 more cards -->
</div>
```

**Reader function:** Grid of 5 cards proving the organizational-density identity pairs. Each card states an organizational pattern, its density equivalent, and the proof of their identity. Serves as the visual evidence table for the OD-F-005 thesis.

**Detection reasoning:** Instrument because these are metadata about the page's own argument -- proof artifacts that map organizational patterns to density patterns. They tell the reader WHAT the thesis proves. However, this is on the boundary with Component -- it has defined slots (org label, density name, proof text) and is reusable.

**Multi-channel coordination:** Typography cascade: organization label in JetBrains Mono uppercase at 0.08em letter-spacing with primary red color, density name in Instrument Serif at subsection size, proof text in body font at code size with secondary color. Layout: 2-column grid with 32px gap, 3px border on each card.

**Pipeline implication:** "What if the page could present its thesis as a structured evidence grid?" Requires the pipeline to generate identity-pair cards from organizational analysis.

**Derivation question:** "What if each organizational pattern was paired with its density equivalent in a visual proof grid?"

---

### 8. Proof Table (Comparison Table in Section 6) — INSTRUMENT

**CSS class(es):** `.comparison-table` (reused in Section 6 for both the proof table and the findings table)
**CSS lines:** 1527-1553
**HTML lines:** 2310-2357 (proof table: 6 rows mapping sections to org patterns and density outcomes), 2436-2466 (findings table: 4 OD-F findings)
**DOM structure:**
```html
<table class="comparison-table">
  <thead>
    <tr>
      <th>Section</th><th>Organization</th><th>Density Created</th><th>How It Happened</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Soul Discovery</td><td>Conversational</td><td>PULSE</td>
      <td>Q(sparse) &rarr; A(dense) alternation. No forcing.</td>
    </tr>
    <!-- 5 more rows, last row highlighted in primary red -->
  </tbody>
</table>
```

**Reader function:** Maps the reading experience the reader just had to organizational theory. The last row (Section 6 / Emergent / FRACTAL) is highlighted in primary red with `font-weight: 600`, indicating "this is where you are now." The table retroactively reframes the entire page as proof of the thesis.

**Detection reasoning:** Instrument because it is a retrospective metadata device -- it tells the reader what just happened to them. The table does not deliver new content; it reframes experienced content as evidence. The self-referential last row (highlighted in red) is the key instrument feature.

**Multi-channel coordination:** The self-referential row uses `color: var(--color-primary); font-weight: 600` via inline styles (lines 2351-2354). Table header uses JetBrains Mono at `--type-meta` size with 3px bottom border. Regular rows use 1px bottom border. The last-child row has no border (line 1552).

**Pipeline implication:** "What if the page could retroactively explain what the reader just experienced as structured evidence?" Requires the pipeline to generate retrospective proof tables.

**Derivation question:** "What if the reader could see a structured summary of what just happened to them -- turning experience into evidence?"

---

### 9. Page Header Thesis Block — INSTRUMENT

**CSS class(es):** `.page-header__thesis`
**CSS lines:** 616-630
**HTML lines:** 1731-1734
**DOM structure:**
```html
<div class="page-header__thesis">
  <p>This page discovers a truth that was hidden in plain sight across five organizational explorations...</p>
</div>
```

**Reader function:** Framed thesis statement within the dark page header, set off by a 4px red left border on transparent background. Tells the reader the page's central argument before any content begins. Uses Instrument Serif italic at 1.125rem.

**Detection reasoning:** Instrument because it is a metadata declaration -- the page's thesis statement. It tells the reader WHAT the page argues, orienting their reading. It is not a content container (like a callout) but a framing device.

**Multi-channel coordination:** Left border (4px solid primary red), typography (Instrument Serif italic, 1.125rem, line-height 1.6), and spatial isolation (`margin-top: var(--space-8)` = 32px separation from subtitle, `padding: var(--space-6) var(--space-8)` = generous internal space).

**Pipeline implication:** "What if the page declared its thesis as a visually distinct block in the header?" Requires the pipeline to extract and frame the central argument.

**Derivation question:** "What if the reader knew the page's thesis before they read anything else?"

---

### 10. Page Header Meta Line — INSTRUMENT

**CSS class(es):** `.page-header__meta`
**CSS lines:** 589-596
**HTML lines:** 1727
**DOM structure:**
```html
<div class="page-header__meta">Exploration OD-006 &mdash; Density: Emergent (Fractal Primary)</div>
```

**Reader function:** Monospace uppercase classification line at the very top of the page header, identifying the exploration number and density pairing. Tells the reader exactly where this file sits in the system hierarchy.

**Detection reasoning:** Instrument because it is pure positional metadata -- classification information for reader orientation.

**Multi-channel coordination:** Typography (JetBrains Mono, `--type-meta` = 12px, uppercase, 0.15em letter-spacing), color (secondary text color against dark background).

**Pipeline implication:** "What if every page declared its classification as the first visible text?"

**Derivation question:** "What if the reader could immediately identify a page's position in the system taxonomy?"

---

### 11. Page Footer Compliance Manifest — INSTRUMENT

**CSS class(es):** `.page-footer`, `.page-footer__meta`
**CSS lines:** 1558-1569
**HTML lines:** 2480-2512
**DOM structure:**
```html
<footer class="page-footer">
  <div class="page-footer__meta">
    <strong>OD-006: Organization IS Density &mdash; The Crown Jewel</strong><br>
    KortAI Design System &mdash; Organizational Exploration 6 of 6<br>
    Stage: 3 (Organization OD) | Pipeline: Research &rarr; T1 &rarr; DD &rarr; <strong>OD</strong> &rarr; AD &rarr; CD &rarr; Migration<br>
    <strong>Soul Compliance:</strong> 5/5 &mdash; border-radius: 0 &#10003; | box-shadow: none &#10003; | ...
    <!-- Full compliance manifest with soul checks, fractal verification, anti-patterns, creative techniques, research applied, new findings -->
  </div>
</footer>
```

**Reader function:** Dense monospace compliance manifest listing soul compliance (5/5 checks), fractal verification (4 scales), anti-pattern avoidance (5 checks), spirit violation resolution, all creative techniques with checkmarks (Tier 1-3 + Wave 3 re-enrichment), all applied research findings by ID, and new findings (OD-F-005 through OD-F-008). Functions as a self-audit certificate.

**Detection reasoning:** Instrument because it is entirely metadata about the page's own compliance status. It tells the reader (and future auditors) that the page meets all design system requirements. Remove it and the page loses its self-certification.

**Multi-channel coordination:** Typography (JetBrains Mono at `--type-meta`, line-height 1.8), visual separator (3px solid primary red top border + 80px top margin), checkmark characters (&#10003;) as pass indicators.

**Pipeline implication:** "What if every page carried a machine-readable compliance manifest?" Requires the pipeline to auto-generate audit results as footer content.

**Derivation question:** "What if the page could certify its own compliance as a visible artifact?"

---

### 12. Section Number Label — INSTRUMENT

**CSS class(es):** `.section-header__number`
**CSS lines:** 650-658
**HTML lines:** 1847, 1921, 2008, 2137, 2215, 2300 (one per section)
**DOM structure:**
```html
<span class="section-header__number">Section 01</span>
```

**Reader function:** Monospace uppercase label ("Section 01" through "Section 06") above each section title. Provides sequential wayfinding -- the reader knows their position in the document's structure.

**Detection reasoning:** Instrument because it is sequential position metadata. Remove it and the reader loses numbering awareness.

**Multi-channel coordination:** JetBrains Mono, `--type-meta` (12px), uppercase, 0.1em letter-spacing, primary red color. The red color connects it to the section header mode indicator's red square marker, creating a visual thread of section-level metadata.

**Pipeline implication:** "What if sections were numbered with monospace labels for positional awareness?"

**Derivation question:** "What if each section declared its sequence number as the first visible element?"

---

### 13. Task Checkpoint — INSTRUMENT

**CSS class(es):** `.task-checkpoint`
**CSS lines:** 1047-1064
**HTML lines:** 2037-2039, 2081-2083
**DOM structure:**
```html
<div class="task-checkpoint">
  You should have: soul pieces memorized, applicable findings listed, lesson chain documented. If any are missing, return to the reading step.
</div>
```

**Reader function:** Verification point within task islands. Declares what the reader should have accomplished at this stage. The `::before` pseudo-element generates the "CHECKPOINT" label (lines 1055-1064) in JetBrains Mono uppercase.

**Detection reasoning:** Instrument because it is a metacognitive self-check -- it tells the reader WHERE THEY SHOULD BE in a task sequence. Remove it and the reader loses the verification gate.

**Multi-channel coordination:** Green accent (4px left border in `--accent-green`, green text color), generated label via `::before` content (JetBrains Mono, 0.625rem, uppercase, 0.08em letter-spacing), code-size text for the checkpoint description.

**Pipeline implication:** "What if task sequences included verification checkpoints with expected-state declarations?"

**Derivation question:** "What if the reader had explicit 'you should be here' verification points in procedures?"

---

### 14. Code Block Language Label — INSTRUMENT

**CSS class(es):** `.code-block__label`
**CSS lines:** 883-892
**HTML lines:** 2068, 2269 (two code blocks with "css" and "pipeline" labels)
**DOM structure:**
```html
<span class="code-block__label">css</span>
```

**Reader function:** Small monospace label positioned absolute at top-right of code blocks, identifying the language or content type. Tells the reader what kind of code they are about to read.

**Detection reasoning:** Instrument because it classifies the code block's content type. Remove it and the reader must infer the language from syntax alone.

**Multi-channel coordination:** Positioned absolute (top: 8px, right: 12px), JetBrains Mono at 0.625rem, uppercase, 0.08em letter-spacing, secondary text color.

**Pipeline implication:** "What if code blocks self-labeled their language?"

**Derivation question:** "What if code blocks declared what they are before the reader reads the code?"

---

## GESTURES

### 15. Editorial Drop Cap — GESTURE

**CSS class(es):** `.section-opening::first-letter`
**CSS lines:** 692-708 (section-opening base + ::first-letter pseudo-element)
**HTML lines:** 1853, 1933, 2013, 2142, 2221, 2305 (one per section, 6 total)
**DOM structure:**
```html
<p class="section-opening">Every design system begins with decisions...</p>
```

**Reader function:** 4.2em Instrument Serif first letter in primary red (#E83025), floated left. Signals "a new section begins" and shifts the reader from scanning mode to immersive reading mode. The display font at 4.2x scale creates a visual anchor that says "start reading closely here."

**Detection reasoning:** Gesture because it is a CSS-encoded shift in reading register. Multiple CSS properties coordinate: `font-family` shifts to display serif, `font-size` jumps to 4.2em (from 1rem body), `float: left` disrupts normal flow, `color` shifts to primary red, and `line-height: 0.8` compresses the letter. This is a multi-property inflection point, not a structural container.

**Multi-channel coordination:** Five properties shift simultaneously: font-family (body -> display), font-size (1rem -> 4.2em), color (near-black -> primary red), float (none -> left), line-height (1.7 -> 0.8). All serve one function: "shift from scanning to reading."

**Pipeline implication:** "What if the opening of each section used a typographic register shift to signal 'start reading closely'?" Requires the pipeline to apply first-letter styling to section openings.

**Derivation question:** "What if the first letter of each section was a visual event -- like turning a page in a book?"

---

### 16. Collapsing Section Header (Sticky with Red Border Reveal) — GESTURE

**CSS class(es):** `.section-header`, `.section-header.scrolled`
**CSS lines:** 636-648
**JS lines:** 2557-2571 (IntersectionObserver adds/removes `.scrolled` class)
**HTML lines:** 1846-1850, 1920-1924, 2007-2011, 2136-2140, 2214-2218, 2299-2303
**DOM structure:**
```html
<div class="section-header reveal">
  <span class="section-header__number">Section 01</span>
  <h2 class="section-header__title" id="section-1-title">How the Soul Pieces Were Discovered</h2>
  <div class="section-header__mode">Conversational &mdash; PULSE density</div>
</div>
```

**Reader function:** Section headers are `position: sticky; top: 0` and start with a transparent 3px bottom border. When the header becomes stuck (scrolled past its natural position), JS adds `.scrolled` class and the bottom border transitions to primary red (`border-bottom-color: var(--color-primary)` with `transition: border-color 0.2s ease`). This is a reading-position gesture: the red line appearing tells the reader "you are scrolling through this section."

**Detection reasoning:** Gesture because it is a state-transition CSS shift. The border-color change is driven by scroll position, not by content structure. It changes HOW the reader perceives their position (not WHAT they read). Two CSS properties shift together: `border-bottom-color` transitions and the header becomes a persistent fixture via `position: sticky`.

**Multi-channel coordination:** Border-color (transparent -> primary red), position behavior (static -> sticky), z-index (50, above content), and IntersectionObserver at `threshold: [1]` (line 2568) -- the border appears exactly when the header starts being clipped by the viewport top.

**Pipeline implication:** "What if section headers signaled their sticky state with a color transition?"

**Derivation question:** "What if the reader could tell whether a section header was in its original position or stuck to the viewport?"

---

### 17. Dual Lens Font Shift — GESTURE

**CSS class(es):** `.view-why`, `.view-how`
**CSS lines:** 833-848
**HTML lines:** 1971-1984 (the pipeline discovery dual lens in Section 2)
**DOM structure:**
```html
<div id="lens-pipeline-why" class="dual-lens__view view-why active" role="tabpanel">
  The organizational pattern did not "create" the density pattern...
</div>
<div id="lens-pipeline-how" class="dual-lens__view view-how" role="tabpanel">
  <code>const pairings = { conversational: 'PULSE', ... };</code>
</div>
```

**Reader function:** When the reader toggles between "Why" and "How" views, the entire typographic register changes. "Why" view: Instrument Serif italic at 1.125rem with 1.7 line-height (contemplative, conceptual). "How" view: JetBrains Mono at `--type-code` (0.875rem) with 1.5 line-height on a warm gray background with 24px padding. The font family IS the register shift -- serif says "think about this conceptually" and monospace says "implement this literally."

**Detection reasoning:** Gesture because the CSS shift is a coordinated multi-property register change. Four properties change together: font-family (serif -> mono), font-size (1.125rem -> 0.875rem), font-style (italic -> normal), and background (transparent -> `--color-border-subtle` gray). This is not a container structure; it is a reading-mode inflection.

**Multi-channel coordination:** Font-family (Instrument Serif -> JetBrains Mono), font-size (1.125rem -> 0.875rem), font-style (italic -> normal), line-height (1.7 -> 1.5), background (transparent -> warm gray), padding (0 -> 24px). All encode one rule: "conceptual understanding vs. literal implementation."

**Pipeline implication:** "What if content could be viewed through two typographic lenses -- conceptual (serif) and implementation (mono)?"

**Derivation question:** "What if the same content could switch between contemplative and literal registers at the reader's command?"

---

### 18. Narrative Density Compression (Act Line-Height Gradient) — GESTURE

**CSS class(es):** `.act--exposition`, `.act--rising`, `.act--climax`
**CSS lines:** 979-992
**HTML lines:** 1927 (exposition), 1939 (rising), 1956 (climax)

**Reader function:** Line-height compresses across the three-act narrative structure: Exposition at 1.9, Rising Action at 1.7, Climax at 1.5. The text literally gets physically denser as the story intensifies. This is a direct encoding of narrative tension into typographic density -- the reader FEELS the story tightening through the decreasing whitespace between lines.

**Detection reasoning:** Gesture because multiple CSS properties shift together across a gradient: line-height (1.9 -> 1.7 -> 1.5). This is a coordinated multi-value shift following ONE rule: "density inversely correlates with narrative distance from climax." This is exactly the same pattern as the Typography Compression Gradient in OD-004 but applied to narrative acts instead of confidence strata.

**Multi-channel coordination:** Line-height is the primary channel (1.9 -> 1.7 -> 1.5). The CSS comments explicitly label the density: `/* SPARSE */`, `/* MODERATE */`, `/* DENSE */` (lines 981, 986, 991). While only one property explicitly changes, the SECTION CONTENT also densifies: Act I has 2 paragraphs, Act II has 2 paragraphs + 1 callout, Act III has 2 paragraphs + 1 dual-lens + 1 closing paragraph.

**Pipeline implication:** "What if narrative tension was encoded in line-height compression?" Requires the pipeline to identify narrative arc positions and assign appropriate line-heights.

**Derivation question:** "What if the physical density of text matched the narrative intensity -- loose for setup, tight for climax?"

---

### 19. Confidence-Border Encoding — GESTURE

**CSS class(es):** `.stratum--established`, `.stratum--emerging`, `.stratum--exploratory`
**CSS lines:** 1075-1095
**HTML lines:** 2145, 2159, 2178 (Section 4), 2400-2430 (Section 6 fractal verification reuse)

**Reader function:** Border-left thickness encodes certainty level: 4px solid near-black for established, 3px solid secondary gray for emerging, 1px solid light border for exploratory. The physical thickness IS the meaning -- you can perceive certainty level without reading a word.

**Detection reasoning:** Gesture because multiple CSS properties shift together according to ONE rule: "certainty level." For each stratum level, border-left-width, border-left-color, padding-left, line-height, font-weight, and (for exploratory) font-style all coordinate. This is a 6-property gradient, not a single style change.

**Multi-channel coordination:**
- Established: `border-left: 4px solid var(--color-text)`, `line-height: 1.4`, `font-weight: 500`
- Emerging: `border-left: 3px solid var(--color-text-secondary)`, `line-height: 1.6`, `font-weight: 400`
- Exploratory: `border-left: 1px solid var(--color-border)`, `line-height: 1.8`, `font-weight: 300`, `font-style: italic`

All channels degrade together: thinner border, lighter color, looser spacing, lighter weight. Higher certainty = compressed/authoritative; lower certainty = expansive/tentative.

**Pipeline implication:** "What if border thickness encoded confidence level visually?" Requires the pipeline to classify content by certainty and apply the corresponding stratum styles.

**Derivation question:** "What if you could feel how certain the author is by looking at the border?"

---

### 20. Arriving Wisdom (Scroll-Triggered Staggered Reveal) — GESTURE

**CSS class(es):** `.reveal`, `.reveal-delay-1`, `.reveal-delay-2`
**CSS lines:** 344-386 (keyframes + 3 reveal classes + reduced-motion + fallback)
**HTML lines:** Used extensively throughout -- nearly every section element has `reveal`, `reveal-delay-1`, or `reveal-delay-2` classes

**Reader function:** Elements fade in and translate up 16px as they enter the viewport. Three stagger levels: base entry at 10%-40%, delay-1 at 15%-45%, delay-2 at 20%-50% of the entry range. Creates a cascading reveal effect where elements within a section appear in sequence, suggesting that the content is "arriving" as you scroll to it.

**Detection reasoning:** Gesture because it is a CSS-encoded shift in how content appears. The `animation-timeline: view()` with `animation-range: entry` creates a scroll-position-dependent reading register shift: elements transition from invisible/displaced to visible/positioned. Multiple CSS properties shift together (opacity: 0->1, translateY: 16px->0).

**Multi-channel coordination:** Opacity (0 -> 1) and transform (translateY 16px -> 0) shift together via the `arrive` keyframe. Three stagger offsets create sequencing. Respects `prefers-reduced-motion` (lines 373-379) and falls back gracefully for non-supporting browsers (lines 381-386).

**Pipeline implication:** "What if content revealed itself progressively as the reader scrolled, creating a sense of arrival?"

**Derivation question:** "What if wisdom didn't appear all at once but arrived in sequence, rewarding the act of scrolling?"

---

### 21. Territorial Border-Color Hover — GESTURE

**CSS class(es):** `.territory-tile:hover`
**CSS lines:** 1170-1173
**HTML lines:** 2224-2253 (6 territory tiles in Section 5)

**Reader function:** When the reader hovers over a territory tile, the border transitions from near-black to primary red and the background shifts from cream to a slightly warmer tone (#F5EDE0). This is a flat 2D surface operation that asserts "commitment" (Soul Rule 5) without any depth illusion -- no translate, no shadow, no scale. The color shift IS the interactivity signal.

**Detection reasoning:** Gesture because it is a coordinated CSS state shift on hover. Two properties change simultaneously: `border-color` (near-black -> primary red) and `background-color` (cream -> warmer cream). This was explicitly created to resolve a spirit violation -- the original used `transform: translate(-2px, -2px)` which violated the flat-surface principle (per EXT-CREATIVE-014, line 1145-1147).

**Multi-channel coordination:** `border-color` shifts to `--color-primary` (red) and `background-color` shifts to `#F5EDE0` (warmer cream), both with `transition: 0.15s ease` (line 1155). The red border asserts presence through color rather than spatial displacement.

**Pipeline implication:** "What if hover states used color assertion rather than depth simulation?"

**Derivation question:** "What if interactivity was signaled through commitment (color change) rather than movement (translate/shadow)?"

---

### 22. Callout Essence Typography Shift — GESTURE

**CSS class(es):** `.callout--essence`, `.callout--essence .callout__body`
**CSS lines:** 771-780
**HTML lines:** 1898-1901, 2391-2394 (2 essence callouts)

**Reader function:** The Essence callout variant shifts typography from the standard callout body (Inter, 1rem, line-height 1.6) to Instrument Serif italic at 1.125rem with line-height 1.5. This signals a shift to a "pull-quote" register -- the reader should slow down and absorb this as a key takeaway. The purple left border (`--accent-purple`) further distinguishes it from standard callouts.

**Detection reasoning:** Gesture because the typographic register changes within the callout family. The same 2-zone structure (label + body) is preserved, but the body's font-family, font-style, and font-size all shift. This is a reading-pace shift within a component.

**Multi-channel coordination:** Font-family (Inter -> Instrument Serif), font-style (normal -> italic), font-size (1rem -> 1.125rem), line-height (1.6 -> 1.5), padding (16px 24px -> 24px 32px), border-color (blue default -> purple). All say "this is wisdom, not information."

**Pipeline implication:** "What if certain callouts shifted to a wisdom register through typographic change?"

**Derivation question:** "What if the most important insights in the page used a different typographic voice?"

---

### 23. Zone Background Color Shift — GESTURE

**CSS class(es):** Uses `--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing` (defined in :root)
**CSS lines:** 233-236 (token definitions), used by `.answer` (line 930), `.section-divider` (line 1513), `.fractal-annotations` (line 443)
**HTML lines:** Applied implicitly via class-based styling throughout

**Reader function:** Three background colors encode density zones: sparse zones use `#FEF9F5` (page background -- blends in), dense zones use `#FFFFFF` (white -- slightly elevated from page background), breathing zones use `#FAF5ED` (warm tan -- "pause here"). The background color shift is subtle but tells the reader whether they are in a sparse, dense, or transitional zone.

**Detection reasoning:** Gesture because it is a CSS-encoded shift in the reading environment. The background color changes are not decorative -- they are semantic signals of density state. The shift is subtle enough to work subconsciously rather than explicitly.

**Multi-channel coordination:** Background-color is the primary channel. The three values form a triad: page-cream (sparse) / white (dense) / warm-tan (breathing). These map 1:1 to the zone token names defined at line 233-236 (commented as "PULSE / WAVE differentiation -- OD-F-005 at token level").

**Pipeline implication:** "What if background color subtly encoded the current density zone?"

**Derivation question:** "What if the reader could subconsciously feel whether they were in a sparse, dense, or breathing zone through background color?"

---

### 24. Collapsible Section Triangle Rotation — GESTURE

**CSS class(es):** `details summary::before`, `details[open] summary::before`
**CSS lines:** 1486-1496
**HTML lines:** 2169-2174 (one `<details>` in Section 4)

**Reader function:** The collapsible `<details>` summary has a triangle marker (`\25B8` = right-pointing triangle) that rotates 90 degrees clockwise when opened. The rotation uses `transition: transform 0.15s ease`. This is a micro-gesture signaling state change: closed (right-pointing) vs open (down-pointing).

**Detection reasoning:** Gesture because it is a CSS state transition that changes the reader's understanding of the element's state. The `transform: rotate(90deg)` on `details[open]` creates a visual state shift.

**Multi-channel coordination:** Transform (rotate 0 -> 90deg) with 0.15s ease transition. The triangle character is generated content (line 1487) at 0.75rem size.

**Pipeline implication:** "What if collapsible sections used animated directional indicators?"

**Derivation question:** "What if the reader could see the state of a collapsible section at a glance through a rotating indicator?"

---

## COMPONENTS

### 25. Q/A Pair — COMPONENT

**CSS class(es):** `.qa-pair`, `.question`, `.question__marker`, `.question__text`, `.answer`
**CSS lines:** 898-941
**HTML lines:** 1856-1865 (Q/A pair 1), 1868-1895 (Q/A pair 2), 1885-1895 (Q/A pair 3)
**DOM structure:**
```html
<div class="qa-pair reveal">
  <div class="question">
    <div class="question__marker"></div>
    <div class="question__text">What does "discovered, not decided" actually mean?</div>
  </div>
  <div class="answer">
    <p>It means the process was empirical...</p>
    <!-- Optional: embedded callout -->
  </div>
</div>
```

**Reader function:** Two-zone container where the question occupies 60% width (via `--question-width`) and the answer occupies 100% width. The width variation creates TIDAL density -- narrow question (sparse) followed by full-width answer (dense). The question uses Instrument Serif at 1.375rem with a red 8x8px square marker; the answer uses Inter body text with a 4px left border and white background (`--color-zone-dense`).

**Detection reasoning:** Component because it has defined slots (question + answer), consistent visual treatment, and is reused 3 times in Section 1. It structures article content in a Q&A format.

**Multi-channel coordination:** Width variation (60% -> 100%), typography (Instrument Serif 1.375rem -> Inter 1rem), background (transparent -> white), border (none -> 4px left), and spacing (8px gap within pair, 64px between pairs via `--space-chapter`).

**Pipeline implication:** "What if content was structured as question-answer pairs with width variation creating density?" Requires the pipeline to identify conversational content and apply the Q/A component.

**Derivation question:** "What if questions were visually narrow and answers were visually wide, creating a tidal rhythm?"

---

### 26. Dual Lens — COMPONENT

**CSS class(es):** `.dual-lens`, `.dual-lens__toggle`, `.dual-lens__btn`, `.dual-lens__btn.active`, `.dual-lens__view`
**CSS lines:** 786-831
**JS lines:** 2522-2540
**HTML lines:** 1966-1985
**DOM structure:**
```html
<div class="dual-lens">
  <div class="dual-lens__toggle" role="tablist">
    <button class="dual-lens__btn active" data-view="why" onclick="toggleLens(this, 'lens-pipeline')" role="tab" aria-selected="true">Why</button>
    <button class="dual-lens__btn" data-view="how" onclick="toggleLens(this, 'lens-pipeline')" role="tab" aria-selected="false">How</button>
  </div>
  <div id="lens-pipeline-why" class="dual-lens__view view-why active" role="tabpanel">...</div>
  <div id="lens-pipeline-how" class="dual-lens__view view-how" role="tabpanel">...</div>
</div>
```

**Reader function:** Toggle container with "Why" and "How" buttons. Active button gets inverted colors (dark bg, light text). Two view panels: conceptual (serif italic) and implementation (monospace on gray background). Reader agency: choose your register.

**Detection reasoning:** Component because it has defined slots (toggle bar, two view panels), consistent structure, ARIA tablist/tab/tabpanel roles, and JS interactivity. It is a reusable container for dual-perspective content.

**Multi-channel coordination:** Toggle buttons use 3px solid border, `border-radius: 0`, with active state inverting to `background: var(--color-text); color: var(--color-background)`. The button divider uses 1px right border. Toggle fits content width via `width: fit-content`.

**Pipeline implication:** "What if content could be presented as a conceptual/implementation toggle?" Requires the pipeline to identify dual-perspective content and generate both views.

**Derivation question:** "What if the reader could switch between 'why' (philosophy) and 'how' (code) at will?"

---

### 27. Territory Tile (with Solid Offset) — COMPONENT

**CSS class(es):** `.territory-tile`, `.territory-tile__name`, `.territory-tile__desc`, `.territory-tile__density`, `.solid-offset`
**CSS lines:** 1148-1194 (territory tile), 714-732 (solid offset base)
**HTML lines:** 2224-2253 (6 tiles in hub-grid)
**DOM structure:**
```html
<div class="territory-tile solid-offset">
  <div class="territory-tile__name">Soul</div>
  <div class="territory-tile__desc">5 pieces, 6 rules, 33 tokens. The perceptual bedrock.</div>
  <div class="territory-tile__density">Density: Compressed</div>
</div>
```

**Reader function:** Card-like tiles in a 3-column grid representing territories in the system map. Each has a name (Instrument Serif at subsection size), description (body text at code size in secondary color), and density label (JetBrains Mono, 0.625rem, uppercase, primary red). The solid offset `::after` pseudo-element creates neobrutalist depth (4px right + 4px down dark rectangle behind the tile).

**Detection reasoning:** Component because it has 3 defined slots (name, description, density label), consistent structure, and is reused 6 times. It is a container for hub-spoke spatial content.

**Multi-channel coordination:** Typography cascade (Instrument Serif -> Inter -> JetBrains Mono across the three slots). Depth via solid offset pseudo-element (4px offset, no box-shadow). Hover gesture (border-color -> red, background -> warmer cream) is covered separately as Gesture #21.

**Pipeline implication:** "What if spatial organization used card-like tiles in a grid to represent navigable territories?"

**Derivation question:** "What if each area of the system was represented as a tile you could 'visit', with its density declared upfront?"

---

### 28. Solid Offset — COMPONENT

**CSS class(es):** `.solid-offset`, `.solid-offset::after`
**CSS lines:** 714-732
**HTML lines:** Applied via double-class on territory tiles (e.g., `class="territory-tile solid-offset"`)
**DOM structure:**
```html
<div class="solid-offset">
  <!-- child content -->
</div>
```
(The `::after` pseudo-element provides the shadow-like depth layer)

**Reader function:** Reusable depth component that creates neobrutalist fake depth using a `::after` pseudo-element positioned 4px right and 4px down with near-black background. This is the soul-compliant alternative to `box-shadow: none` -- depth through solid geometry rather than simulated light.

**Detection reasoning:** Component because it is a reusable modifier that can be applied to any container. It has consistent visual treatment (3px border, transparent background, pseudo-element for depth). Used in combination with `.territory-tile` in Section 5.

**Multi-channel coordination:** Border (3px solid near-black), background (page cream), pseudo-element (`position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: near-black; z-index: -1`). All `border-radius: 0` enforced.

**Pipeline implication:** "What if depth was created through solid geometry rather than simulated shadows?"

**Derivation question:** "What if you could make elements feel elevated using only solid shapes -- no gradients, no blur, no shadow?"

---

### 29. Callout System (5 Variants) — COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--insight`, `.callout--discovery`, `.callout--warning`, `.callout--note`, `.callout--essence`
**CSS lines:** 738-780
**HTML lines:** 1878-1881 (insight), 1949-1952 (note), 2113-2116 (warning), 1898-1901 (essence), 2257-2260 (insight again), 2391-2394 (essence again)
**DOM structure:**
```html
<div class="callout callout--insight">
  <div class="callout__label">Insight</div>
  <div class="callout__body">The soul test: "Could this component exist in a Bootstrap project..."</div>
</div>
```

**Reader function:** Two-zone container (label + body) with 4px left border in one of 5 accent colors: blue (insight), green (discovery), coral (warning), amber (note), purple (essence). The label is always JetBrains Mono 12px uppercase. The body is Inter body text for all variants except Essence, which shifts to Instrument Serif italic at 1.125rem (a gesture within a component -- see Gesture #22).

**Detection reasoning:** Component because it is a structured container with defined slots (label zone, body zone), consistent visual treatment (4px left border family DNA), and 5 color variants. Used 6 times across the page.

**Multi-channel coordination:** Left border color differentiates variant (blue/green/coral/amber/purple). The label uses mono uppercase as a universal slot treatment. The body uses the appropriate register for the variant. Max 2 callouts per viewport section enforced by editorial discipline.

**Pipeline implication:** "What if information types (insight, discovery, warning, note, essence) were encoded through a color-coded callout family?"

**Derivation question:** "What if different types of aside content had a family resemblance (left border + label + body) but color-coded personality?"

---

### 30. Task Island — COMPONENT

**CSS class(es):** `.task-island`, `.task-island__header`, `.task-island__number`, `.task-island__title`, `.task-step`, `.task-step__marker`
**CSS lines:** 998-1045
**HTML lines:** 2016-2040 (Island 1), 2045-2084 (Island 2), 2087-2117 (Island 3)
**DOM structure:**
```html
<div class="task-island reveal">
  <div class="task-island__header">
    <div class="task-island__number">1</div>
    <div class="task-island__title">Load the Inherited Identity</div>
  </div>
  <div class="task-step">
    <span class="task-step__marker"></span>
    Read ACCUMULATED-IDENTITY-v1.md in full...
  </div>
  <div class="task-step">...</div>
  <div class="task-checkpoint">You should have:...</div>
</div>
```

**Reader function:** Self-contained procedural cluster. The numbered header (red-bordered 28x28px square with mono number) names the task. Steps are indented with a 1px left border and 6x6px square markers. Dense content within the island contrasts with generous whitespace between islands (64px margin).

**Detection reasoning:** Component because it has defined slots (header with number + title, steps, optional checkpoint, optional code block), consistent structure, and is reused 3 times in Section 3.

**Multi-channel coordination:** Task number: 28x28px square with 3px primary-red border, mono font, red text. Steps: 1px left border creating a "track" from header, 6x6px secondary-colored square markers. The vertical border + indentation creates a visual "rail" connecting steps to their parent task.

**Pipeline implication:** "What if procedures were organized as discrete task islands -- self-contained clusters in a sea of whitespace?"

**Derivation question:** "What if each task was an island: complete within itself, with generous water between islands?"

---

### 31. Act Marker — COMPONENT

**CSS class(es):** `.act`, `.act-marker`, `.act-marker__icon`, `.act-marker__label`
**CSS lines:** 947-977
**HTML lines:** 1928-1931 (Act I), 1940-1943 (Act II), 1957-1960 (Act III)
**DOM structure:**
```html
<div class="act act--exposition reveal">
  <div class="act-marker">
    <div class="act-marker__icon">I</div>
    <div class="act-marker__label">Exposition &mdash; The Problem</div>
  </div>
  <p class="section-opening">...</p>
</div>
```

**Reader function:** Container for narrative acts in Section 2. Each act has a 24x24px square icon with 3px border containing a Roman numeral, and a mono label naming the act and its narrative function. The three acts create the CRESCENDO density pattern.

**Detection reasoning:** Component because it has defined slots (icon + label + content), consistent structure, and is reused 3 times. The act content varies but the marker structure is fixed.

**Multi-channel coordination:** Icon: 24x24px square, 3px border, mono font, near-black. Label: JetBrains Mono, `--type-meta`, uppercase, 0.1em letter-spacing, secondary color. The Roman numerals (I, II, III) use the same square-marker system as other instruments but applied to narrative progression.

**Pipeline implication:** "What if narrative sections were marked with act numbers in a three-act structure?"

**Derivation question:** "What if documentation could be organized as a story with numbered acts?"

---

### 32. Stratum — COMPONENT

**CSS class(es):** `.stratum`, `.stratum--established`, `.stratum--emerging`, `.stratum--exploratory`
**CSS lines:** 1071-1095
**HTML lines:** 2145-2156 (established), 2159-2175 (emerging), 2178-2189 (exploratory), 2400-2430 (reused in Section 6 with `--established` only)
**DOM structure:**
```html
<div class="stratum stratum--established reveal">
  <div class="certainty-badge certainty-badge--established">
    <span class="certainty-badge__icon"></span>
    Established &mdash; Verified across 6+ explorations
  </div>
  <p><strong>The five soul pieces are invariant.</strong>...</p>
</div>
```

**Reader function:** Confidence-encoded container where the visual treatment encodes the certainty level of the content. Each stratum has a certainty badge (Instrument #6), content paragraphs, and optionally embedded details elements. The three variants create the GEOLOGICAL density pattern.

**Detection reasoning:** Component because it is a structured container with consistent slots (badge + content). The three confidence levels (established/emerging/exploratory) are variants of one component, not three separate components. The Gesture (#19 Confidence-Border Encoding) describes the CSS shift between variants; this Component entry describes the container structure.

**Multi-channel coordination:** See Gesture #19 for the multi-property gradient. As a component, the key structural feature is the certainty badge slot at the top and the content area below.

**Pipeline implication:** "What if content was wrapped in confidence-encoded containers that visually declared their certainty level?"

**Derivation question:** "What if the reader could see the certainty level of every piece of content through its container's visual treatment?"

---

### 33. Pull Quote — COMPONENT

**CSS class(es):** `.pull-quote`, `.pull-quote__attribution`
**CSS lines:** 1442-1465
**HTML lines:** 2192-2195 (Section 4), 2469-2472 (Section 6)
**DOM structure:**
```html
<div class="pull-quote reveal">
  The border thickness tells you the certainty...
  <span class="pull-quote__attribution">&mdash; OD-004 Discovery</span>
</div>
```

**Reader function:** Magazine-style pull quote using Instrument Serif italic at 1.5rem with a 4px primary-red left border. Attribution is in JetBrains Mono uppercase. Functions as an "Essence moment" at section boundaries -- a key takeaway the reader should remember.

**Detection reasoning:** Component because it has defined slots (quote text + attribution), consistent visual treatment, and is reused 2 times. It structures key insights in a magazine-style format.

**Multi-channel coordination:** Font (Instrument Serif italic, 1.5rem, line-height 1.3), border (4px solid primary red left), spacing (48px top/bottom margin), attribution (JetBrains Mono, `--type-meta`, uppercase, 0.08em letter-spacing, secondary color, 12px top margin).

**Pipeline implication:** "What if key takeaways were set off as magazine-style pull quotes at section boundaries?"

**Derivation question:** "What if the most quotable insight in each section was given a distinct visual voice?"

---

### 34. Code Block — COMPONENT

**CSS class(es):** `.code-block`, `.code-block code`, `.code-block .comment`, `.code-block .keyword`, `.code-block .string`, `.code-block__label`
**CSS lines:** 854-892
**HTML lines:** 2067-2079 (CSS code block in Section 3), 2268-2278 (pipeline code block in Section 5)
**DOM structure:**
```html
<div class="code-block reveal-delay-1">
  <span class="code-block__label">css</span>
  <code><span class="comment">/* LOCKED... */</span>
<span class="keyword">:root</span> {
  --border-radius: <span class="string">0</span>;
}</code>
</div>
```

**Reader function:** Warm gray background code container with JetBrains Mono at 0.875rem. Three syntax colors: comments in secondary gray (sparse), keywords in primary red, strings in accent green. The language label (Instrument #14) appears at top-right.

**Detection reasoning:** Component because it has defined slots (label + code content with syntax highlighting spans), consistent visual treatment, and is reused 2 times. It structures code content.

**Multi-channel coordination:** Background (`--color-border-subtle`), font (JetBrains Mono, 0.875rem, line-height 1.5), padding (24px), syntax colors (comment=gray, keyword=red, string=green), and the language label instrument.

**Pipeline implication:** "What if code blocks used warm backgrounds with semantic syntax coloring?"

**Derivation question:** "What if code was presented in a distinct typographic zone with its language declared?"

---

### 35. Synthesis Card — COMPONENT

**CSS class(es):** `.synthesis-card`, `.synthesis-card__org`, `.synthesis-card__density`, `.synthesis-card__proof`
**CSS lines:** 1213-1238
**HTML lines:** 2363-2387 (5 cards)
**DOM structure:**
```html
<div class="synthesis-card">
  <div class="synthesis-card__org">Conversational</div>
  <div class="synthesis-card__density">IS Pulse</div>
  <div class="synthesis-card__proof">Question-answer alternation inherently creates sparse-dense oscillation...</div>
</div>
```

**Reader function:** Three-slot card proving one organizational-density identity pair. Org label in JetBrains Mono uppercase red, density name in Instrument Serif at subsection size, proof in body text at code size in secondary color. 3px border, no offset.

**Detection reasoning:** Component because it has 3 defined slots and consistent structure, reused 5 times. While the parent grid (`.synthesis-grid`) is listed as Instrument #7, each individual card is a reusable component.

**Multi-channel coordination:** Typography cascade: mono (org classification) -> serif (density name) -> sans (proof text). Size cascade: meta -> subsection -> code. Color: primary red -> near-black -> secondary gray.

**Pipeline implication:** "What if identity pairs were presented as structured proof cards?"

**Derivation question:** "What if each mapping between concepts was proven in its own card?"

---

### 36. Collapsible Details Section — COMPONENT

**CSS class(es):** `details`, `details summary`, `details summary::before`, `details[open] summary`, `details .details-content`
**CSS lines:** 1470-1502
**HTML lines:** 2169-2174 (one instance in Section 4)
**DOM structure:**
```html
<details>
  <summary>What makes this "emerging" rather than "established"?</summary>
  <div class="details-content">
    Established requires validation across 6+ explorations...
  </div>
</details>
```

**Reader function:** Progressive disclosure container. The summary is clickable, with a rotating triangle indicator (Gesture #24). Content appears/hides on toggle. 4px left border in border color, consistent with the callout family DNA (left-border as organizing principle). Content uses code-size text at 1.6 line-height.

**Detection reasoning:** Component because it has defined slots (summary + content) and consistent visual treatment. It structures depth-on-demand content.

**Multi-channel coordination:** Border (4px left), summary typography (Inter 600 at code size, secondary color), triangle indicator (generated content, 0.75rem), content typography (code size, 1.6 line-height), padding pattern (summary: 12px 16px, content: 12px 24px 16px).

**Pipeline implication:** "What if deeper explanations were hidden behind expandable summaries?"

**Derivation question:** "What if the reader could choose their depth of engagement through expandable sections?"

---

### 37. Page Header — COMPONENT

**CSS class(es):** `.page-header`, `.page-header__inner`, `.page-header__meta`, `.page-header__title`, `.page-header__subtitle`, `.page-header__thesis`
**CSS lines:** 576-630
**HTML lines:** 1725-1735
**DOM structure:**
```html
<header class="page-header doc-section reveal" id="section-0">
  <div class="page-header__inner">
    <div class="page-header__meta">Exploration OD-006 &mdash; Density: Emergent (Fractal Primary)</div>
    <h1 class="page-header__title">Organization IS Density</h1>
    <p class="page-header__subtitle">The KortAI Design System, Documented by Itself</p>
    <div class="page-header__thesis">
      <p>This page discovers a truth...</p>
    </div>
  </div>
</header>
```

**Reader function:** Full-bleed dark header (near-black background, 3px red bottom border) with 4 slots: meta classification (Instrument #10), title (Instrument Serif at 3rem page scale), subtitle (Instrument Serif italic at section size), and thesis block (Instrument #9). Establishes page identity and argument.

**Detection reasoning:** Component because it has 4 defined slots and consistent structure. It is the page's identity container. The meta, title, subtitle, and thesis are all instruments/sub-components within this component.

**Multi-channel coordination:** Background inversion (dark bg, light text), typography cascade (mono meta -> serif title -> serif italic subtitle -> serif italic thesis), scale cascade (12px -> 48px -> 26px -> 18px), and the 3px red bottom border as page-level separator.

**Pipeline implication:** "What if every page had a dark header with classification, title, subtitle, and thesis?"

**Derivation question:** "What if the page's first visual was a dark, authoritative statement of what it is and what it argues?"

---

### 38. Comparison Table — COMPONENT

**CSS class(es):** `.comparison-table`, `.comparison-table th`, `.comparison-table td`
**CSS lines:** 1527-1553
**HTML lines:** 2310-2357 (proof table in Section 6), 2436-2466 (findings table in Section 6)
**DOM structure:**
```html
<table class="comparison-table">
  <thead><tr><th>Section</th><th>Organization</th>...</tr></thead>
  <tbody><tr><td>1. Soul Discovery</td><td>Conversational</td>...</tr></tbody>
</table>
```

**Reader function:** Full-width table with monospace uppercase headers (3px bottom border), regular body rows (1px bottom border, last row borderless). Used twice in Section 6 for different data. Clean, dense data presentation.

**Detection reasoning:** Component because it has defined structure (thead + tbody, th + td slots), consistent styling, and is reused 2 times for different content.

**Multi-channel coordination:** Header: JetBrains Mono, `--type-meta`, uppercase, 0.06em letter-spacing, secondary color, 3px bottom border. Body: code-size text, 1px bottom border. Padding: 12px 16px on all cells.

**Pipeline implication:** "What if structured data was presented in clean tables with monospace headers?"

**Derivation question:** "What if tables used header typography to classify columns and minimal borders to separate rows?"

---

## ADDITIONAL DISCOVERIES (Not in Calibration Doc)

### 39. TOC Marker Progress Fill (CSS Houdini Progress Bar) — INSTRUMENT

**CSS class(es):** `.toc__marker`, `.toc__marker::after`
**CSS lines:** 511-531 (marker container + ::after pseudo-element fill)
**Also:** `@property --progress` at lines 393-397, `@keyframes track-progress` at lines 399-402, `.doc-section` animation at lines 404-407

**Reader function:** Each TOC entry has a 4x24px rectangular progress indicator. The `::after` pseudo-element fills from top to bottom as the corresponding section scrolls through the viewport, using CSS Houdini `@property --progress` and `animation-timeline: view()`. The fill color is primary red.

**Detection reasoning:** This is the MECHANISM within the Scroll Witness instrument that makes progress visible. It's worth calling out separately because the CSS technique (registered custom property + scroll-driven animation + pseudo-element scaleY) is the actual innovation, not the sidebar layout.

**Multi-channel coordination:** `@property --progress` (line 393-397) registers a custom number property. `.doc-section` animates `--progress` from 0 to 1 via `animation-timeline: view(block 95% 5%)` (lines 404-407). `.toc__marker::after` uses `transform: scaleY(var(--progress, 0))` with `transform-origin: top` (lines 527-528) to fill the bar. Border is 1px near-black, fill is primary red.

**Pipeline implication:** "What if navigation could show real-time reading progress using only CSS?"

**Derivation question:** "What if each TOC entry had a bar that filled as you read through that section?"

---

### 40. Selection Highlight — GESTURE

**CSS class(es):** `::selection`
**CSS lines:** 297-300

**Reader function:** Text selection uses primary red background with cream text (the inverse of the body palette). This turns text selection into a brand-consistent gesture -- even selecting text reinforces the design system identity.

**Detection reasoning:** Gesture because it is a CSS-encoded reading interaction shift. When the reader selects text, the color channels invert to brand colors. It changes HOW the reader experiences the fundamental interaction of selecting text.

**Multi-channel coordination:** `background: var(--color-primary)` (#E83025) + `color: var(--color-background)` (#FEF9F5). Two channels invert simultaneously.

**Pipeline implication:** "What if text selection used brand colors to reinforce identity?"

**Derivation question:** "What if even the act of selecting text reinforced the design system's visual identity?"

---

### 41. Focus Visible Outline — GESTURE

**CSS class(es):** `*:focus-visible`
**CSS lines:** 302-305

**Reader function:** Keyboard focus shows a 3px solid primary red outline with 2px offset. This is an accessibility gesture that also reinforces brand identity -- focus states use the same red as all other interactive signals.

**Detection reasoning:** Gesture because it is a CSS state shift on keyboard interaction. The outline appears only on keyboard navigation (not mouse clicks, per `:focus-visible`), signaling "you are navigating with keyboard."

**Multi-channel coordination:** `outline: 3px solid var(--color-primary)`, `outline-offset: 2px`. Two properties coordinate to create a visible focus ring that does not overlap the element.

**Pipeline implication:** "What if focus states used brand-consistent red outlines?"

**Derivation question:** "What if keyboard navigation was visually prominent and brand-consistent?"

---

### 42. Skip Link — COMPONENT

**CSS class(es):** `.skip-link`, `.skip-link:focus`
**CSS lines:** 321-337
**HTML lines:** 1613

**Reader function:** Accessibility component hidden off-screen (`top: -100%`) that appears on focus (`top: 0`). Red background, cream text. Allows keyboard users to skip to main content.

**Detection reasoning:** Component because it has defined structure and consistent treatment. It is a reusable accessibility pattern.

**Multi-channel coordination:** Red background, cream text, 8px 16px padding, JetBrains Mono font, positioned absolute with z-index 1000.

**Pipeline implication:** "What if every page included an accessible skip link?"

**Derivation question:** "What if keyboard users could bypass navigation to reach content directly?"

---

### 43. Semantic Bridge (Concept Link + Code Target) — COMPONENT

**CSS class(es):** `.concept-link`, `.concept-link:hover`, `.code-target`, `.code-target.highlighted`
**CSS lines:** 1415-1436
**JS lines:** 2542-2555
**HTML lines:** 2259 (one concept-link in Section 5 callout)

**Reader function:** Hover-activated bridge between prose concepts and code elements. The `.concept-link` shows a transparent bottom border that turns red on hover; corresponding `.code-target` elements get highlighted with a red left border and gray background. Creates a visual link between conceptual discussion and literal implementation.

**Detection reasoning:** Component because it has defined two-element structure (prose link + code target) connected by `data-concept` attributes. The JS (lines 2542-2555) handles the highlighting. Note: in this file, only one concept-link exists (for "solid-offset") and no corresponding `.code-target` elements are present in the HTML -- making this technically a partially-implemented component.

**Multi-channel coordination:** Concept link: transparent -> red bottom border on hover, `cursor: help`. Code target: transparent -> red left border + gray background when `.highlighted` class is added via JS.

**Pipeline implication:** "What if hovering over a concept in prose highlighted the corresponding code?"

**Derivation question:** "What if prose and code were visually linked, so hovering over one illuminated the other?"

---

### 44. Print Stylesheet — GESTURE

**CSS class(es):** `@media print` block
**CSS lines:** 1591-1596

**Reader function:** When printing, background becomes white, text black, navigation elements (skip-link, scroll-witness, nav) are hidden, links get their URLs appended, and all box-shadows are forcibly removed. This is a complete register shift for the print medium.

**Detection reasoning:** Gesture because it is a coordinated multi-property shift triggered by medium change (screen -> print). Multiple channels shift simultaneously.

**Multi-channel coordination:** Background (cream -> white), text (near-black -> black), navigation (visible -> hidden), links (underline -> URL suffix), shadows (none -> !important none).

**Pipeline implication:** "What if pages degraded gracefully to print with hidden navigation and exposed URLs?"

**Derivation question:** "What if the page knew how to present itself in print without any interactive elements?"

---

### 45. Responsive Breakpoint Collapse (1024px and 768px) — GESTURE

**CSS lines:** 422-429 (1024px: grid collapses, scroll witness + fractal annotations hidden), 565-568 (768px: content padding reduces), 939-941 (768px: question width becomes 100%), 1139-1143 (768px: hub-grid collapses to single column), 1207-1211 (768px: synthesis-grid collapses to single column), 1253-1257 (768px: visual-index collapses to 2 columns)

**Reader function:** Two breakpoints restructure the page: at 1024px, the three-column layout (fractal annotations + scroll witness + content) collapses to single-column content only; at 768px, all multi-column grids (hub-grid, synthesis-grid, visual-index) collapse and question width goes to 100%.

**Detection reasoning:** Gesture because these are coordinated multi-property shifts that change the reading experience based on viewport width. The 1024px breakpoint removes two entire instruments (scroll witness and fractal annotations), fundamentally changing how the reader navigates.

**Multi-channel coordination:** At 1024px: grid-template-columns (3-column -> 1-column), display (block -> none for scroll-witness and fractal-annotations). At 768px: grid-template-columns (2-3 column -> 1 column), max-width (60% -> 100% for questions), padding (64px 32px -> 32px 16px for content).

**Pipeline implication:** "What if responsive breakpoints selectively hid instruments that require desktop space?"

**Derivation question:** "What if the page gracefully shed its navigation instruments on smaller viewports?"

---

### 46. Reduced Motion Preference — GESTURE

**CSS class(es):** `@media (prefers-reduced-motion: reduce)` block
**CSS lines:** 373-379

**Reader function:** For users who prefer reduced motion, all reveal animations are disabled: `animation: none; opacity: 1; transform: none`. The page immediately shows all content without scroll-triggered reveals.

**Detection reasoning:** Gesture because it is an accessibility-triggered shift in the reading experience -- the entire animation layer is removed based on user preference.

**Multi-channel coordination:** Animation (arrive -> none), opacity (0 -> 1), transform (translateY -> none). Three properties reset simultaneously.

**Pipeline implication:** "What if scroll-triggered animations respected the user's motion preference?"

**Derivation question:** "What if users who are sensitive to animation saw the same content without any motion?"

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. I read all 2,636 lines in chunks: 1-200 (header comment + threading), 200-500 (CSS: tokens, reset, arriving wisdom, scroll witness, layout, fractal annotations), 500-800 (CSS: TOC items, main content, page header, section headers, drop cap, solid offset, callouts), 800-1100 (CSS: dual lens, code blocks, section 1 Q/A, section 2 narrative, section 3 task), 1100-1400 (CSS: certainty badges, section 5 spatial, section 6 synthesis, visual index with all 6 miniatures), 1400-1700 (CSS: semantic bridge, pull quotes, details, section dividers, comparison table, footer, utilities, print + HTML start through scroll witness nav + fractal annotations aside), 1700-2000 (HTML: fractal annotation content, main content start, page header, visual index, section 1 Q/A pairs), 2000-2300 (HTML: section 3 task islands, section 4 confidence strata, section 5 hub-spoke), 2300-2600 (HTML: section 6 synthesis proof + cards + fractal verification, footer), 2600-2636 (JS: fractal annotation observer + closing).

2. **Am I identifying elements at the DOM level?** YES. Every finding includes CSS class names, CSS line numbers, HTML line numbers, and DOM structure snippets. I identified elements by reading the actual CSS selectors and HTML markup.

3. **Could I have missed subtle gestures?** Possible. The zone background color shift (Gesture #23) was nearly missed because it operates through CSS custom properties defined in :root rather than explicit class-based styling. The selection highlight (Gesture #40) and focus-visible outline (Gesture #41) were subtle interactions that required reading the reset section carefully. The responsive breakpoints (Gesture #45) and reduced motion (Gesture #46) required checking @media queries.

4. **Am I applying the reader-function test honestly?** YES. I rejected several potential entries: utility classes (`.mt-4`, `.mb-6`, etc.) are pure styling conveniences with no reader-experience function. The `.sr-only` class is an accessibility utility, not a reader-facing instrument. The `:root` custom properties are not elements -- they are the token system enabling elements.

5. **Did I check for pseudo-elements?** YES. I identified: `::first-letter` (Gesture #15 drop cap), `::before` on `.section-header__mode` (Instrument #4 red square marker), `::after` on `.toc__marker` (Instrument #39 progress fill), `::after` on `.solid-offset` (Component #28 depth layer), `::after` on `.territory-tile` (inherited from solid-offset), `::before` on `details summary` (Gesture #24 triangle rotation), `::before` on `.task-checkpoint` (Instrument #13 "CHECKPOINT" label), `::selection` (Gesture #40).

6. **Did I check responsive breakpoints?** YES. Gesture #45 documents both breakpoints (1024px and 768px) and their effects on grid layouts, question widths, padding, and instrument visibility.

7. **Am I distinguishing styling from instruments/gestures?** YES. I excluded: basic paragraph styling, the `* { margin: 0; padding: 0; box-sizing: border-box }` reset, font imports, utility margin/padding classes, the `.sr-only` screen reader utility, and the `code { font-family: var(--font-mono) }` base styling. These are styling foundations, not reader-experience devices.

---

## SUMMARY

| Category | Count | Items |
|----------|-------|-------|
| Instruments | 14 | Scroll Witness, Fractal Annotation Layer, Visual Index, Section Header Mode Indicator, Section Divider, Certainty Badge, Synthesis Cards, Proof Table, Page Header Thesis, Page Header Meta, Footer Compliance Manifest, Section Number Label, Task Checkpoint, Code Block Label |
| Gestures | 12 | Editorial Drop Cap, Collapsing Section Header, Dual Lens Font Shift, Narrative Density Compression, Confidence-Border Encoding, Arriving Wisdom, Territorial Border-Color Hover, Callout Essence Typography Shift, Zone Background Color Shift, Collapsible Triangle Rotation, Selection Highlight, Focus Visible, Print Stylesheet, Responsive Collapse, Reduced Motion |
| Components | 14 | Q/A Pair, Dual Lens, Territory Tile, Solid Offset, Callout System, Task Island, Act Marker, Stratum, Pull Quote, Code Block, Synthesis Card, Collapsible Details, Page Header, Comparison Table, Skip Link, Semantic Bridge |

**Total: 46 elements** (vs. 15 in calibration doc -- 31 additional discoveries)

**Calibration entries verified and deepened:** All 15 original entries (items 7-14, 18-20, 23-26 from the calibration doc) were found, verified with exact CSS/HTML line numbers, and deepened with DOM structure, pseudo-element details, JS fallback mechanisms, and multi-channel coordination specifics.

**Most significant discoveries missed by calibration:**
1. **Narrative Density Compression** (Gesture #18) -- line-height gradient 1.9/1.7/1.5 encoding narrative tension as physical text density
2. **Zone Background Color Shift** (Gesture #23) -- three-value triad encoding density state subconsciously
3. **TOC Marker Progress Fill** (Instrument #39) -- CSS Houdini `@property` mechanism for progress bars
4. **Task Checkpoint** (Instrument #13) -- metacognitive verification instrument within task islands
5. **Footer Compliance Manifest** (Instrument #11) -- self-auditing metadata device
6. **Page Header Thesis Block** (Instrument #9) -- thesis-as-instrument framing device
