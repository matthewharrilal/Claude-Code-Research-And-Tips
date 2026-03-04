# CD-005 Multi-Axis Transition -- Instrument / Gesture / Component Catalog

**File:** `design-system/validated-explorations/combination/CD-005-multi-axis-transition.html`
**Total lines:** 2003 (74 comment header + 1159 CSS + 770 HTML)
**CSS range:** Lines 94-1159 (locked layer 94-510, combination layer 545-1159)
**HTML range:** Lines 1162-1936

---

## INSTRUMENTS (7 found)

### 1. Header Meta Line -- INSTRUMENT

**CSS class(es):** `.meta-line`, `.version-badge`
**CSS lines:** 281-302
**HTML lines:** 1172-1176
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION CD-005</span>
  <span>COMBINATION: MULTI-AXIS TRANSITION</span>
  <span class="version-badge">v1</span>
</div>
```

**Reader function:** Orients the reader to the exploration's identity (CD-005), its type (COMBINATION: MULTI-AXIS TRANSITION), and its version (v1). The uppercase, tracked-out monospace badge establishes "this is a system artifact, not arbitrary content."

**Detection reasoning:** Removal test: without this, the reader has no idea what CD-005 is, what dimension it explores, or what version they are reading. This is pure orientation metadata -- it delivers no article content.

**Multi-channel coordination:** Two visual channels: (1) uppercase tracked-out Inter for category labels, (2) monospace bordered badge for version. Both are metadata-only visual registers that separate from the content typography below.

**Pipeline implication:** "How does the reader know what kind of document this is before they start reading?" Derive from content metadata -- exploration ID, dimension, version.

**Derivation question:** "What if the page announced its own classification and version at the top, in a visual register distinct from the content?"

---

### 2. Section Heading with Structural Border -- INSTRUMENT

**CSS class(es):** `.section-heading`
**CSS lines:** 560-566
**HTML lines:** 1201, 1577, 1769
**DOM structure:**
```html
<h2 class="section-heading">The Testing Landscape</h2>
<h2 class="section-heading">Test Infrastructure at a Glance</h2>
<h2 class="section-heading">Build Your Test Suite</h2>
```

**Reader function:** Marks major section boundaries. The 3px bottom border creates a visual "chapter break" that tells the reader "a new conceptual zone begins here." Three instances divide the page into its major territories.

**Detection reasoning:** While headings contain content words, the `.section-heading` treatment (3px structural border + standardized spacing) serves a wayfinding function beyond mere titling. The border is a spatial orientation device -- it marks WHERE you are in the page structure.

**Multi-channel coordination:** Two channels: (1) Instrument Serif display type at section scale, (2) 3px structural border-bottom creating a visible dividing line. The border does the spatial work; the type does the semantic work.

**Pipeline implication:** "How does the reader know they have crossed from one major zone to another?" Chapter-level dividers with structural weight.

**Derivation question:** "What if each major content zone had a visible boundary that the reader could see from a distance while scrolling?"

---

### 3. Smooth Transition Divider -- INSTRUMENT

**CSS class(es):** `.transition--smooth`, `.transition--smooth__line`, `.transition--smooth__heading`
**CSS lines:** 634-649
**HTML lines:** 1325-1328
**DOM structure:**
```html
<div class="transition--smooth" role="separator" aria-label="Transition from overview to deep content">
  <hr class="transition--smooth__line">
  <h2 class="transition--smooth__heading">Deep Dive: Unit Testing Patterns</h2>
</div>
```

**Reader function:** Signals the axis transition from Z-Pattern (overview) to F-Pattern (deep content). The centered heading + thin separator says "the reading mode is about to change." The 48px padding creates a deliberate pause.

**Detection reasoning:** This is not a content container -- it contains no article substance. It exists purely to orient the reader that a structural shift is occurring. Remove it and the reader would abruptly switch from Z-sweep layout to F-pattern layout with no cognitive preparation. The `role="separator"` confirms its navigational purpose.

**Multi-channel coordination:** Three channels: (1) 1px separator line (minimal visual weight -- this is a SMOOTH transition), (2) centered Instrument Serif heading naming the destination, (3) 48px vertical padding creating a temporal pause in the scroll.

**Pipeline implication:** "How does the reader know the layout geometry is about to change without experiencing disorientation?" Transition grammar -- SMOOTH type for compatible reading directions.

**Derivation question:** "What if the page explicitly announced 'the reading pattern changes here' with a visual breath?"

---

### 4. Bridge Transition Zone -- INSTRUMENT

**CSS class(es):** `.transition--bridge`
**CSS lines:** 815-826
**HTML lines:** 1555-1566
**DOM structure:**
```html
<div class="transition--bridge" role="separator" aria-label="Transition from deep content to reference architecture">
  <div class="callout callout--note" role="note">
    <div class="callout__label">Shifting Focus</div>
    <div class="callout__body">
      You have learned how to write unit tests and when to mock. Now the
      perspective shifts from writing individual tests to building test
      infrastructure...
    </div>
  </div>
</div>
```

**Reader function:** Signals the axis transition from F-Pattern (deep content) to Bento Grid (reference). Unlike the SMOOTH transition, this BRIDGE is substantial -- it uses a breathing zone background, structural borders top and bottom, and an embedded callout that explicitly narrates the mode shift ("the perspective shifts from...to..."). The 64px padding + 48px margin creates a significant pause.

**Detection reasoning:** The bridge zone's primary purpose is cognitive handoff -- it tells the reader that they are switching from linear reading to spatial browsing. The embedded callout's content ("Shifting Focus") is meta-navigational, not article substance. Remove this and the reader would be disoriented by the sudden shift from vertical F-pattern to spatial bento grid.

**Multi-channel coordination:** Four channels: (1) breathing-zone background color `#FAF5ED` distinguishing it from both preceding and following sections, (2) 3px structural borders top and bottom creating a "zone within the page," (3) 64px + 48px combined vertical space creating temporal decompression, (4) embedded callout providing explicit verbal orientation.

**Pipeline implication:** "How does the reader transition from linear reading to spatial browsing without cognitive whiplash?" Bridge transitions require intermediary elements that narrate the shift.

**Derivation question:** "What if the hardest layout transitions had a dedicated breathing zone that told the reader what was changing and why?"

---

### 5. Bento Item Labels -- INSTRUMENT

**CSS class(es):** `.bento-item__label`
**CSS lines:** 857-865
**HTML lines:** 1595, 1677, 1696, 1728
**DOM structure:**
```html
<div class="bento-item__label">Structure</div>
<div class="bento-item__label">Configuration</div>
<div class="bento-item__label">Pipeline</div>
<div class="bento-item__label">Metrics</div>
```

**Reader function:** Category labels on bento grid cells that tell the reader WHAT KIND of reference each island contains before reading it. In a spatial/non-linear layout, these labels are essential for scan-and-select navigation -- the reader uses them to decide which cell to read first.

**Detection reasoning:** These are pure metadata. They do not deliver article content -- they classify it. The reader uses them to navigate the grid spatially. Remove them and all six bento cells become undifferentiated blocks requiring the reader to read content to determine relevance.

**Multi-channel coordination:** Three channels: (1) uppercase tracking for visual distinctiveness, (2) secondary text color for hierarchy beneath the title, (3) 12px meta font size placing them in the "infrastructure" typographic register.

**Pipeline implication:** "How does the reader navigate a non-linear reference grid without reading every cell?" Category labels as scan-targets for spatial browsing.

**Derivation question:** "What if each reference cell announced its category in a visual register that could be scanned faster than the content itself?"

---

### 6. File Tree Label -- INSTRUMENT

**CSS class(es):** `.file-tree__label`
**CSS lines:** 889-898
**HTML lines:** 1598
**DOM structure:**
```html
<span class="file-tree__label">Project Root</span>
```

**Reader function:** Orients the reader to the root of the directory tree visualization. Without it, the file tree is a list of paths with no anchor -- the label establishes "this is a project root, and everything below is relative to it."

**Detection reasoning:** This is metadata about the visualization, not content. It tells the reader how to interpret the structure below. Removal would leave the tree floating without a reference point.

**Multi-channel coordination:** Two channels: (1) uppercase tracked body font (matching other label conventions), (2) secondary text color separating it from the file/directory names below.

**Pipeline implication:** "How does the reader understand the frame of reference for a structural visualization?" Root-level labels as orientation anchors.

**Derivation question:** "What if structural visualizations explicitly labeled their frame of reference?"

---

### 7. Footer Identity Bar -- INSTRUMENT

**CSS class(es):** `.page-footer`, `.page-footer__inner`, `.page-footer__id`, `.page-footer__rule`
**CSS lines:** 1045-1068
**HTML lines:** 1817-1823
**DOM structure:**
```html
<footer class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-005 &middot; Multi-Axis Transition</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:WAVE &middot; OD:SPATIAL &middot; AD:Z+F+BENTO</span>
  </div>
</footer>
```

**Reader function:** Terminal orientation confirming what was just read (CD-005, Multi-Axis Transition) and its dimensional coordinates (DD:WAVE, OD:SPATIAL, AD:Z+F+BENTO). The 3px red rule echoes the header's bottom border, creating a visual bookend. The dark background mirrors the header, enclosing the page in a dark-light-dark sandwich.

**Detection reasoning:** Pure metadata. No article content. Tells the reader "you have reached the end" and "this is what you just read." The dimensional coordinates are system-level classification, not content.

**Multi-channel coordination:** Three channels: (1) monospace uppercase ID text (system register), (2) 48px red rule as visual signature (brand identity), (3) dark background matching header (structural bookend).

**Pipeline implication:** "How does the reader know they have reached the end, and what was the document's classification?" Footer as closing orientation + dimensional coordinates.

**Derivation question:** "What if the page ended with the same visual authority it began with, confirming its identity?"

---

## GESTURES (8 found)

### 8. Z-Sweep Diagonal Alternation -- GESTURE

**CSS class(es):** `.z-sweep`, `.z-sweep--reverse`
**CSS lines:** 580-594
**HTML lines:** 1225-1239 (sweep 1), 1255-1270 (sweep 2, reversed), 1273-1287 (sweep 3)
**DOM structure:**
```html
<!-- Normal: term left, def right -->
<div class="z-sweep">
  <div class="z-term">...</div>
  <div class="z-def">...</div>
</div>
<!-- Reversed: def left, term right -->
<div class="z-sweep z-sweep--reverse">
  <div class="z-term">...</div>
  <div class="z-def">...</div>
</div>
```

**Reader function:** Creates a diagonal reading path across three definition pairs. The alternation (term-left/def-right, then def-left/term-right, then term-left/def-right) produces a Z-shaped eye movement down the page. This is not mere layout -- it is a choreographed reading trajectory.

**Detection reasoning:** The alternation between normal and reversed grid layouts is a coordinated multi-property shift (grid-template-areas + grid-template-columns flip together). It changes HOW you read (diagonal sweep vs. straight scan), not WHAT you read. The content would be identical in a single-column layout; the Z-sweep changes the reading experience.

**Multi-channel coordination:** Two CSS properties shift together per reversal: `grid-template-areas` swaps "z-term z-def" to "z-def z-term", and `grid-template-columns` swaps `1fr 1.618fr` to `1.618fr 1fr`. The golden ratio (1.618) is consistent regardless of direction -- it always governs the definition (denser) side.

**Pipeline implication:** "What if the overview section guided the eye in a diagonal Z-path rather than a straight vertical descent?" Z-sweep alternation as attention choreography.

**Derivation question:** "What if term-definition pairs alternated sides to create a diagonal reading trajectory?"

---

### 9. Z-Term vs. Z-Def Density Split -- GESTURE

**CSS class(es):** `.z-term`, `.z-def`
**CSS lines:** 596-628
**HTML lines:** 1226-1238 (first pair, representative)
**DOM structure:**
```html
<div class="z-term">
  <div class="z-term__label">Term</div>
  <div class="z-term__text">Unit Test</div>
</div>
<div class="z-def">
  <p>A unit test verifies a single function...</p>
</div>
```

**Reader function:** The Z-term side is visually sparse (label + short title, accent border, breathing-zone background) while the Z-def side is visually dense (paragraph text, structural border, dense-zone background). This asymmetry creates a perceptible density gradient WITHIN each row: sparse anchor on one side, dense content on the other. The reader's eye is pulled from the sparse term (fast scan) to the dense definition (slow read).

**Detection reasoning:** This is a coordinated multi-property shift between two paired elements. Background color shifts (`--color-zone-sparse` vs `--color-zone-dense`), border treatment shifts (4px accent left-border vs 3px structural full-border), typography shifts (display serif subsection vs body sans-serif), and content density shifts (2-line term vs paragraph definition). All four channels shift together according to one rule: "the term is sparse, the definition is dense."

**Multi-channel coordination:** Four channels shift in coordination: (1) background: sparse zone `#FEF9F5` vs dense zone `#FFFFFF`, (2) border: 4px red left-accent vs 3px full structural, (3) typography: Instrument Serif subsection vs Inter body, (4) content density: 2 short lines vs full paragraph.

**Pipeline implication:** "What if the term and its definition had different visual densities that created a reading gradient?" Density split as attention direction within a row.

**Derivation question:** "What if one side of a definition pair was deliberately sparse to create a visual pull toward the dense side?"

---

### 10. F-Pattern Left-Anchor Spine -- GESTURE

**CSS class(es):** `.f-heading`, `.f-content-block`
**CSS lines:** 659-676
**HTML lines:** 1340, 1402, 1503 (f-headings); 1342-1357, 1404-1417, 1505-1514 (content blocks)
**DOM structure:**
```html
<h3 class="f-heading">Structuring Test Suites</h3>
<div class="f-content-block">
  <p>...</p>
</div>
```

**Reader function:** Creates a left-anchored progressive disclosure pattern. The italic Instrument Serif heading with a 4px red left border creates a strong left-edge anchor. Content blocks are indented 24px from the left margin, creating a consistent F-pattern where the reader scans down the left spine (headings) and reads rightward into content. Three headings form the F-scan vertical line.

**Detection reasoning:** The coordinated CSS properties -- italic serif font, 4px accent border-left, 24px left padding on content blocks -- shift together to create a reading pattern, not just a style. The indentation + border create a visual "spine" that the reader's eye follows vertically, then horizontally into content. This changes HOW you navigate the section.

**Multi-channel coordination:** Three channels coordinate: (1) 4px red left border on headings as scan-anchor, (2) 24px left padding on content blocks creating consistent indentation, (3) italic Instrument Serif at subsection scale distinguishing headings from body. All three work together to create the F-pattern reading spine.

**Pipeline implication:** "What if a deep-content section guided the reader's eye down a left spine, then rightward into detail?" F-pattern left-anchor as attention choreography for progressive disclosure.

**Derivation question:** "What if the deep-dive section had a visible left spine that the reader could scan vertically before committing to any block?"

---

### 11. Callout Accent Color Encoding -- GESTURE

**CSS class(es):** `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--challenge`, `.callout--caution`
**CSS lines:** 397-419
**HTML lines:** 1215 (essence), 1243 (note), 1361 (tip), 1451 (gotcha), 1537 (tip), 1556 (note in bridge), 1715 (gotcha in bento), 1797 (challenge)
**DOM structure:**
```html
<div class="callout callout--essence">...</div>  <!-- purple accent -->
<div class="callout callout--note">...</div>      <!-- blue accent -->
<div class="callout callout--tip">...</div>       <!-- green accent -->
<div class="callout callout--gotcha">...</div>    <!-- coral accent -->
<div class="callout callout--challenge">...</div> <!-- amber accent -->
```

**Reader function:** The 4px left-border color shifts between callout variants, encoding semantic temperature: purple (essence/philosophical), blue (informational/neutral), green (practical/warm), coral (warning/cold), amber (challenge/activation). The color is the only visual property that changes between variants -- all other properties (padding, spacing, background, label size/weight/tracking) remain identical. This makes the color shift a pure semantic signal.

**Detection reasoning:** This is a gesture because the color encodes a reading-register shift. When you see coral, you shift to a cautious reading mode. When you see purple + italic serif, you shift to a reflective mode. The color IS the register signal -- it changes HOW you read the callout before you read its words.

**Multi-channel coordination:** Two channels shift per variant: (1) border-left-color changes (blue/green/coral/purple/amber), (2) label color matches. For the essence variant, a third channel activates: the body text shifts to Instrument Serif italic. The gesture is that the same structural container (callout) shifts its semantic register through color alone.

**Pipeline implication:** "How does the reader know whether to read a callout as practical advice, a warning, a philosophical reflection, or a challenge?" Accent color as semantic temperature encoding.

**Derivation question:** "What if a family of containers used color as the sole differentiator to signal reading register?"

---

### 12. Essence Callout Serif Shift -- GESTURE

**CSS class(es):** `.callout--essence .callout__body`
**CSS lines:** 413-416
**HTML lines:** 1215-1221
**DOM structure:**
```html
<div class="callout callout--essence" role="note">
  <div class="callout__label">Essence</div>
  <div class="callout__body">
    Tests are not proof that code works. They are the language in which
    you express what "working" means.
  </div>
</div>
```

**Reader function:** The body text shifts from Inter (body sans-serif) to Instrument Serif italic. This is the ONLY callout variant where the body font changes. The serif italic creates a perceptual shift from "instructional content" to "philosophical reflection" -- the reader slows down and reads with a different internal voice. This is Soul Piece #2: the Archivist speaks in serif.

**Detection reasoning:** This is a gesture distinct from the general callout accent encoding because an additional CSS property (font-family + font-style) shifts on TOP of the color shift. The combination of purple accent + serif italic body creates a unique reading register that no other callout achieves. It changes the reader's pace and mode.

**Multi-channel coordination:** Three channels shift simultaneously: (1) border-left-color to purple, (2) label color to purple, (3) body font to Instrument Serif italic. The third channel is the gesture -- it is the additional shift that creates the "philosophical voice" register.

**Pipeline implication:** "How does the reader distinguish philosophical/essential content from practical content within the same callout family?" Font-family shift as voice change.

**Derivation question:** "What if the most reflective content on the page literally spoke in a different voice -- a serif italic that slowed the reader down?"

---

### 13. WAVE Density Oscillation -- GESTURE

**CSS class(es):** (page-level structural pattern, not a single class)
**CSS lines:** 547-557 (section spacing), plus all component spacing throughout
**HTML lines:** 1199-1317 (Z, MEDIUM), 1325-1328 (SMOOTH, LOW), 1337-1547 (F, HIGH), 1555-1566 (BRIDGE, LOW), 1575-1760 (Bento, MEDIUM-HIGH), 1767-1809 (Resolution, LOW)
**DOM structure:**
```
Section 1 (Z-Pattern):     MEDIUM density  -- 3 sweeps, 1 code, 2 callouts
Smooth Transition:          LOW density     -- breathing space
Section 2 (F-Pattern):     HIGH density    -- 3 headings, 2 code, 1 Core, 1 Reasoning, 3 callouts
Bridge Transition:          LOW density     -- breathing zone + callout
Section 3 (Bento Grid):    MEDIUM-HIGH     -- 6 grid cells
Section 4 (Resolution):    LOW density     -- Task + Challenge
```

**Reader function:** The density of content (components per section, visual weight, white space) oscillates across the page in a WAVE pattern: MED -> LOW -> HIGH -> LOW -> MED-HIGH -> LOW. This creates a breathing rhythm -- the reader is never sustained at high density for too long. The transitions act as decompression zones.

**Detection reasoning:** This is a page-level gesture -- a coordinated pattern where the number of heavy components, the spacing between them, and the visual complexity shift together across sections. It changes the reader's cognitive load rhythm. It is not a single DOM element or class; it is the cumulative effect of component placement and section spacing.

**Multi-channel coordination:** Three channels oscillate together: (1) component count per section (2 in Z, 10+ in F, 6 in Bento, 2 in Resolution), (2) visual weight (Z-sweeps are medium-weight, F-section has heavy Core Abstraction + Reasoning, Bento cells are medium), (3) section spacing (64px between sections, with transition breathing zones adding extra decompression).

**Pipeline implication:** "How does the reader avoid cognitive fatigue during a long technical article?" Density oscillation as a page-level breathing rhythm.

**Derivation question:** "What if the page's information density rose and fell like a wave, with deliberate decompression zones between peaks?"

---

### 14. Velocity Interleaving -- GESTURE

**CSS class(es):** (structural pattern across component sequence)
**CSS lines:** N/A (emergent from component ordering, not a single CSS rule)
**HTML lines:** Throughout F-section: 1340-1547
**DOM structure (F-section sequence):**
```
f-heading (SLOW scan-anchor)
f-content-block (SLOW prose)
callout--tip (FAST scan)
pre/code (SLOW deep-read)
f-heading (SLOW scan-anchor)
f-content-block (SLOW prose)
core-abstraction (SLOW principle)
callout--gotcha (FAST scan)
reasoning (SLOW deliberation)
f-heading (SLOW scan-anchor)
f-content-block (SLOW prose)
pre/code (SLOW deep-read)
callout--tip (FAST scan)
```

**Reader function:** FAST-velocity components (callouts -- short, scannable, visually distinct) are interleaved between SLOW-velocity components (code blocks, reasoning panels, core abstractions -- long, dense, require sustained attention). This prevents velocity monotony: the reader alternates between deep engagement and quick scanning.

**Detection reasoning:** This is a structural gesture -- the ordering of components creates a velocity rhythm that changes HOW the reader engages over time. It is not a single CSS property shift but a compositional pattern. The callouts' visual compactness and distinct accent colors make them naturally fast to process, creating rhythmic breaks between heavier components.

**Multi-channel coordination:** Two channels alternate: (1) component height (callouts are ~3-5 lines; code blocks and reasoning panels are 10-30 lines), (2) visual complexity (callouts have simple label+body; code/reasoning have multi-zone internal structure). The alternation creates a perceivable tempo.

**Pipeline implication:** "How does the reader maintain engagement through a dense section with multiple heavy components?" Velocity interleaving -- place fast-scan elements between slow-read elements.

**Derivation question:** "What if heavy technical components always had a lighter, faster element between them to reset the reader's attention?"

---

### 15. Decision Matrix Semantic Color Encoding -- GESTURE

**CSS class(es):** `.cell-best`, `.cell-ok`, `.cell-weak`
**CSS lines:** 974-985
**HTML lines:** 1640-1668 (table cells)
**DOM structure:**
```html
<td class="cell-best">Fastest</td>   <!-- green -->
<td class="cell-ok">Fast</td>        <!-- secondary gray -->
<td class="cell-weak">Experimental</td> <!-- coral -->
```

**Reader function:** Table cell text color shifts between green (best), gray (acceptable), and coral (weak) to encode quality assessment without requiring the reader to interpret the text. The color IS the verdict -- the reader can scan the color pattern of the entire table to see the comparison result before reading any cell text.

**Detection reasoning:** This is a gesture because the color shift changes HOW you read the table. Without the color, you would read each cell's text and mentally evaluate it. With the color, the evaluation is pre-encoded visually -- you see the pattern of green/gray/coral before processing the words. The color shifts the reading from "comprehend then judge" to "see the judgment, then optionally comprehend."

**Multi-channel coordination:** Single channel (text color) with three values: green `--accent-green`, secondary `--color-text-secondary`, coral `--accent-coral`. The row-highlight class (`.row-highlight`) adds a background shift for the recommended row, making it a two-channel gesture for that row.

**Pipeline implication:** "How does the reader compare options in a table without reading every cell?" Semantic color encoding as pre-cognitive evaluation.

**Derivation question:** "What if table cells wore their verdict as a color, so the reader could scan the comparison result visually?"

---

## COMPONENTS (12 found)

### 16. Z-Sweep Definition Pair -- COMPONENT

**CSS class(es):** `.z-sweep`, `.z-term`, `.z-term__label`, `.z-term__text`, `.z-def`
**CSS lines:** 580-628
**HTML lines:** 1225-1239, 1255-1270, 1273-1287
**DOM structure:**
```html
<div class="z-sweep">
  <div class="z-term">
    <div class="z-term__label">Term</div>
    <div class="z-term__text">Unit Test</div>
  </div>
  <div class="z-def">
    <p>A unit test verifies a single function...</p>
  </div>
</div>
```

**Reader function:** A two-column definition pair using golden-ratio proportions (1:1.618). The narrow term side anchors a concept; the wide definition side explains it. Three instances create the Z-pattern reading trajectory.

**Detection reasoning:** This is a reusable content container with defined slots: label slot, term-text slot, and definition slot. It has consistent visual treatment across three instances. It holds and structures article content.

**Multi-channel coordination:** N/A (component, not gesture).

**Pipeline implication:** "How do you present term-definition pairs that create a spatial reading pattern?" Golden-ratio two-column definition component with reversal variant.

**Derivation question:** "What if definitions were spatially asymmetric -- a sparse anchor and a dense explanation in a golden-ratio split?"

---

### 17. Callout (5 variants) -- COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--challenge`
**CSS lines:** 374-419
**HTML lines:** 1215-1221 (essence), 1243-1251 (note), 1361-1368 (tip), 1451-1459 (gotcha), 1537-1545 (tip), 1556-1565 (note in bridge), 1715-1724 (gotcha in bento), 1797-1807 (challenge)
**DOM structure:**
```html
<div class="callout callout--[variant]" role="note">
  <div class="callout__label">[Label Text]</div>
  <div class="callout__body">[Body Text]</div>
</div>
```

**Reader function:** A two-zone container (label + body) with a 4px left-border accent. Five semantic variants (note/blue, tip/green, gotcha/coral, essence/purple, challenge/amber) serve different pedagogical functions: orientation, advice, warning, philosophy, and activation.

**Detection reasoning:** Reusable container with defined slots (label, body) and consistent structural treatment across 8 instances and 5 variants. The family DNA (4px left border, label zone, body zone) is constant; only the accent color varies.

**Multi-channel coordination:** N/A (component -- the accent color variation is cataloged as Gesture #11).

**Pipeline implication:** "How do you deliver short, categorized asides that don't interrupt the main content flow?" A callout family with semantic variants.

**Derivation question:** "What if short pedagogical asides had a consistent structure but wore their category as a color?"

---

### 18. Code Snippet -- COMPONENT

**CSS class(es):** `pre`, `pre code`, plus syntax tokens `.kw`, `.st`, `.cm`, `.fn`, `.ty`, `.nu`, `.pu`
**CSS lines:** 333-360
**HTML lines:** 1297-1315, 1372-1399, 1519-1533, 1679-1691, 1698-1709
**DOM structure:**
```html
<pre><code><span class="cm">// comment</span>
<span class="kw">import</span> <span class="pu">{</span> <span class="fn">describe</span> <span class="pu">}</span>...</code></pre>
```

**Reader function:** Dark-themed code container with syntax highlighting. The dark background creates a clear visual break from the warm cream page. Five instances throughout the page deliver executable examples.

**Detection reasoning:** Reusable content container for code. Consistent visual treatment (dark bg, monospace font, 3px structural border, syntax coloring) across 5 instances. Defined structure: `pre` > `code` > syntax spans.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present code examples that are visually distinct from prose?" Dark-themed code block with syntax highlighting.

**Derivation question:** "What if code examples lived in their own dark visual world, clearly separated from the warm page?"

---

### 19. Core Abstraction -- COMPONENT

**CSS class(es):** `.core-abstraction`, `.core-abstraction__principle`, `.core-abstraction__principle-label`, `.core-abstraction__principle-text`, `.core-abstraction__code`
**CSS lines:** 683-720
**HTML lines:** 1422-1446
**DOM structure:**
```html
<div class="core-abstraction">
  <div class="core-abstraction__principle">
    <div class="core-abstraction__principle-label">Core Principle</div>
    <p class="core-abstraction__principle-text">
      Mock at the boundary, not at the implementation...
    </p>
  </div>
  <div class="core-abstraction__code">
    <pre>...</pre>
  </div>
</div>
```

**Reader function:** A two-zone container pairing a philosophical principle (top, warm, serif italic) with a code demonstration (bottom, neutral, monospace). The principle zone uses Instrument Serif italic (Soul Piece #2) to signal that this is an essential truth. The code zone proves the principle with a concrete example.

**Detection reasoning:** Reusable container with defined slots: principle-label, principle-text (serif italic), and code zone. Consistent structural treatment: 3px structural border, sparse-zone background for principle, dark background for code. One instance in this file, but the structure is clearly designed for reuse.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present a fundamental principle paired with its proof?" Two-zone principle+code container where the top is warm/reflective and the bottom is neutral/concrete.

**Derivation question:** "What if core principles had a dedicated container that paired the philosophical truth with executable proof?"

---

### 20. Reasoning Panel -- COMPONENT

**CSS class(es):** `.reasoning`, `.reasoning__header`, `.reasoning__header-label`, `.reasoning__header-title`, `.reasoning__columns`, `.reasoning__column`, `.reasoning__column-title`, `.reasoning__summary`, `.reasoning__summary-label`
**CSS lines:** 727-808
**HTML lines:** 1463-1500
**DOM structure:**
```html
<div class="reasoning">
  <div class="reasoning__header">
    <div class="reasoning__header-label">Reasoning</div>
    <h3 class="reasoning__header-title">When to Mock vs. When to Use Real Dependencies</h3>
  </div>
  <div class="reasoning__columns">
    <div class="reasoning__column">
      <div class="reasoning__column-title">Mock When</div>
      <ul><li>...</li></ul>
    </div>
    <div class="reasoning__column">
      <div class="reasoning__column-title">Use Real When</div>
      <ul><li>...</li></ul>
    </div>
  </div>
  <div class="reasoning__summary">
    <div class="reasoning__summary-label">Summary</div>
    <p>...</p>
  </div>
</div>
```

**Reader function:** A three-zone container for structured deliberation: header (question), two columns (comparison), and summary (resolution). The reader encounters the question, sees both sides, then reads the resolution. The 1px separator between columns creates a visual divide without heavy weight.

**Detection reasoning:** Reusable container with 6 defined slots: header-label, header-title, two column-titles, two column lists, and summary. Consistent structural treatment: 3px borders, sparse/breathing zone backgrounds, grid layout. One instance but clearly designed for reuse.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present a structured comparison with a resolved conclusion?" Three-zone reasoning container: question, comparison, summary.

**Derivation question:** "What if decision-making content had a dedicated container that walked the reader through question, comparison, and resolution?"

---

### 21. Bento Grid -- COMPONENT

**CSS class(es):** `.bento-grid`, `.bento-item`, `.bento-item--large`, `.bento-item--wide`, `.bento-item__label`, `.bento-item__title`
**CSS lines:** 834-872
**HTML lines:** 1590-1758
**DOM structure:**
```html
<div class="bento-grid">
  <div class="bento-item bento-item--large">
    <div class="bento-item__label">Structure</div>
    <h3 class="bento-item__title">Test Directory Layout</h3>
    [content]
  </div>
  <div class="bento-item bento-item--wide">...</div>
  <div class="bento-item">...</div>
  <div class="bento-item">...</div>
  <div class="bento-item">...</div>
  <div class="bento-item">...</div>
</div>
```

**Reader function:** A 4-column grid layout with varied cell sizes (large = 2x2, wide = 2x1, standard = 1x1). Each cell is an independent "island" that can be read in any order. The 32px gaps between cells are the "ocean" separating islands. Six cells total.

**Detection reasoning:** Reusable container with defined slots (label, title, content body) and three size variants. The grid itself is a structural component that contains six child items. Consistent treatment: 3px structural borders, dense-zone background, uniform padding.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present independent reference content that can be browsed non-linearly?" Bento grid with varied cell sizes as spatial reference layout.

**Derivation question:** "What if reference content was organized as a grid of independent islands, with cell size signaling importance?"

---

### 22. File Tree -- COMPONENT

**CSS class(es):** `.file-tree`, `.file-tree__label`, `.file-tree__item`, `.file-tree__item--l1`, `.file-tree__item--l2`, `.file-tree__item--l3`, `.file-tree__dir`, `.file-tree__file`, `.file-tree__comment`
**CSS lines:** 878-926
**HTML lines:** 1597-1615
**DOM structure:**
```html
<div class="file-tree">
  <span class="file-tree__label">Project Root</span>
  <div class="file-tree__item"><span class="file-tree__dir">src/</span></div>
  <div class="file-tree__item file-tree__item--l1"><span class="file-tree__dir">components/</span> <span class="file-tree__comment"># UI components</span></div>
  <div class="file-tree__item file-tree__item--l2"><span class="file-tree__file">Button.tsx</span></div>
  ...
</div>
```

**Reader function:** A dark-themed directory structure visualization with color-coded entries: blue for directories, cream for files, gray for comments. Four indentation levels (l0-l3) create the tree hierarchy. The monospace font and dark background signal "this is a system structure, not prose."

**Detection reasoning:** Reusable container with defined slots (label, items at 4 depth levels, with 3 item types: dir/file/comment). Consistent visual treatment matching the dark code-block register. One instance but clearly designed for reuse with any directory structure.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present a file/directory structure as a visual tree?" Dark-themed file tree with color-coded entries and indentation levels.

**Derivation question:** "What if directory structures were visualized like code blocks -- dark background, monospace font, color-coded by entry type?"

---

### 23. Decision Matrix -- COMPONENT

**CSS class(es):** `.decision-matrix`, `.decision-matrix__header`, `.decision-matrix__header-label`, `.decision-matrix__header-title`, `.decision-matrix table`, `.decision-matrix th`, `.row-highlight`
**CSS lines:** 933-985
**HTML lines:** 1621-1673
**DOM structure:**
```html
<div class="decision-matrix">
  <div class="decision-matrix__header">
    <div class="decision-matrix__header-label">Decision Matrix</div>
    <h3 class="decision-matrix__header-title">Test Framework Comparison</h3>
  </div>
  <table>
    <thead><tr><th>Framework</th><th>Speed</th>...</tr></thead>
    <tbody>
      <tr class="row-highlight"><td><strong>Vitest</strong></td><td class="cell-best">Fastest</td>...</tr>
      <tr><td>Jest</td><td class="cell-ok">Fast</td>...</tr>
      ...
    </tbody>
  </table>
</div>
```

**Reader function:** A titled comparison table with a header zone (label + title) and a data table with semantic color encoding and row highlighting. The header zone gives the table a name and purpose; the row-highlight marks the recommended option; the cell colors encode evaluation.

**Detection reasoning:** Reusable container with defined slots: header-label, header-title, table with highlight and color-encoding features. Extends the base table component with a structured header and evaluation semantics. One instance but designed for any comparison scenario.

**Multi-channel coordination:** N/A (component -- the cell color encoding is cataloged as Gesture #15).

**Pipeline implication:** "How do you present a structured comparison with a recommended option?" Decision matrix with titled header, highlight row, and semantic cell colors.

**Derivation question:** "What if comparison tables had a title zone explaining what's being compared, and cells that wore their evaluation as a color?"

---

### 24. Task Component -- COMPONENT

**CSS class(es):** `.task-component`, `.task-component__header`, `.task-component__header-label`, `.task-component__list`, `.task-component__item`
**CSS lines:** 992-1040
**HTML lines:** 1779-1791
**DOM structure:**
```html
<div class="task-component">
  <div class="task-component__header">
    <div class="task-component__header-label">Setup Checklist</div>
  </div>
  <ul class="task-component__list">
    <li class="task-component__item">Install Vitest: <code>npm install -D vitest</code></li>
    <li class="task-component__item">Create <code>vitest.config.ts</code> with jsdom environment</li>
    ...
  </ul>
</div>
```

**Reader function:** A checklist container with a labeled header and checkbox-styled list items (::before pseudo-element creates 14px bordered squares). The reader processes this as an actionable todo list. Six items provide a concrete setup sequence.

**Detection reasoning:** Reusable container with defined slots: header-label and list items with pseudo-element checkboxes. Consistent visual treatment: 3px structural border, sparse-zone header, separator between items. One instance but designed for any checklist/task sequence.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present actionable steps as a distinct visual component?" Checklist container with pseudo-element checkboxes and a labeled header.

**Derivation question:** "What if actionable steps had a dedicated container that visually distinguished them from explanatory prose?"

---

### 25. Task Item Checkbox Pseudo-Element -- COMPONENT (sub-element)

**CSS class(es):** `.task-component__item::before`
**CSS lines:** 1030-1040
**HTML lines:** 1784-1789 (rendered on each `<li>`)
**DOM structure:**
```css
.task-component__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  border: 1px solid var(--color-border);
  background: var(--color-zone-dense);
}
```

**Reader function:** A 14px bordered square positioned at the left edge of each task item, vertically centered. Reads as a checkbox indicator. Signals "this is an actionable item" without requiring actual checkbox functionality.

**Detection reasoning:** This is a sub-element of the Task Component (#24). Per the calibration's sub-element merge guidance, this is documented but merged with the parent. The pseudo-element is what makes the task component feel like a checklist rather than a plain list -- it carries significant reader-experience weight.

**Multi-channel coordination:** N/A (sub-element).

**Pipeline implication:** Part of Task Component derivation.

**Derivation question:** "What if list items had a visual checkbox indicator that signaled actionability without requiring interactivity?"

---

### 26. Table (Base) -- COMPONENT

**CSS class(es):** `table`, `th`, `td`
**CSS lines:** 424-456
**HTML lines:** 1730-1756 (coverage targets table in bento cell)
**DOM structure:**
```html
<table>
  <thead><tr><th>Metric</th><th>Target</th></tr></thead>
  <tbody>
    <tr><td>Line coverage</td><td class="cell-best">80%+</td></tr>
    ...
  </tbody>
</table>
```

**Reader function:** An open-grid table with no vertical borders, uppercase tracked headers, and subtle horizontal separators. The header row uses a 3px structural border; data rows use 1px subtle separators. One standalone instance (in the bento coverage cell) and one embedded in the Decision Matrix.

**Detection reasoning:** Reusable container for tabular data with defined structure (thead/tbody, th/td). Consistent visual treatment: horizontal-only borders, uppercase meta-styled headers.

**Multi-channel coordination:** N/A (component).

**Pipeline implication:** "How do you present tabular data that feels open rather than boxed?" Open-grid table with horizontal-only borders.

**Derivation question:** "What if tables had no vertical borders, letting the data breathe while still maintaining row alignment?"

---

### 27. Header -- COMPONENT

**CSS class(es):** `header`, `.header-inner`, `.meta-line`, `.version-badge`, `header h1`, `header .subtitle`
**CSS lines:** 268-319
**HTML lines:** 1170-1185
**DOM structure:**
```html
<header>
  <div class="header-inner">
    <div class="meta-line">
      <span>EXPLORATION CD-005</span>
      <span>COMBINATION: MULTI-AXIS TRANSITION</span>
      <span class="version-badge">v1</span>
    </div>
    <h1>Testing Strategy</h1>
    <p class="subtitle">From Unit Tests to End-to-End Validation...</p>
  </div>
</header>
```

**Reader function:** Full-bleed dark header with meta line, title, and subtitle. Creates a visual "cover" for the page -- dark background, 3px red bottom border, constrained inner width. The three-slot structure (meta, title, subtitle) establishes identity, topic, and scope.

**Detection reasoning:** Reusable container with defined slots: meta-line (with version badge), h1 title, and subtitle paragraph. Consistent dark-background treatment that bookends with the footer.

**Multi-channel coordination:** N/A (component -- the meta-line instrument function is cataloged as Instrument #1).

**Pipeline implication:** "How does the page establish its identity and scope in the first viewport?" Full-bleed dark header with meta + title + subtitle.

**Derivation question:** "What if the page opened with a visually authoritative dark header that established identity, topic, and scope in three layers?"

---

## SUMMARY

| Category | Count | Elements |
|----------|-------|----------|
| Instruments | 7 | Header Meta Line, Section Heading, Smooth Transition, Bridge Transition, Bento Item Labels, File Tree Label, Footer Identity Bar |
| Gestures | 8 | Z-Sweep Alternation, Z-Term/Def Density Split, F-Pattern Left-Anchor, Callout Accent Encoding, Essence Serif Shift, WAVE Density Oscillation, Velocity Interleaving, Decision Matrix Color Encoding |
| Components | 12 | Z-Sweep Pair, Callout (5 variants), Code Snippet, Core Abstraction, Reasoning Panel, Bento Grid, File Tree, Decision Matrix, Task Component, Task Checkbox (sub), Table, Header |

**Total elements: 27**

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?**
   YES. Read all three chunks: lines 1-700 (locked layer CSS + start of combination layer), 700-1399 (combination layer CSS + HTML through F-section), 1399-2003 (remaining HTML + findings + research record). Every CSS class and HTML element was examined.

2. **Am I identifying elements at the DOM level, or working at the abstract/conceptual level?**
   DOM level. Every element has specific CSS class references, line numbers for both CSS and HTML, and actual DOM structure examples. The two page-level gestures (WAVE density, velocity interleaving) are appropriately flagged as emergent patterns rather than single-DOM elements, with specific component sequences cited as evidence.

3. **Could I have missed subtle gestures?**
   Possible subtle gestures considered and deliberately excluded:
   - **Syntax highlighting color shifts** (.kw, .st, .cm, etc.) -- these are standard code coloring, not a reading-register shift. They make code readable, not experiential.
   - **Golden ratio (1.618)** in Z-sweep column proportions -- this is part of the Z-sweep component, not an independent gesture. The ratio is constant (does not shift).
   - **Responsive breakpoints** -- at 768px and 960px, layouts collapse to single-column. These are accessibility adaptations, not gestures. They don't shift reading register; they preserve readability. Included: the border-radius: 0 enforcement and dark-background treatments are infrastructure, not instruments/gestures/components.

4. **Am I applying the reader-function test honestly?**
   YES. I tested each candidate against removal. The locked-layer CSS (:root tokens, reset, base typography, selection styling, focus styling, skip link, print styles, sr-only, reduced motion) was correctly excluded as infrastructure -- removing these would break the page technically but does not change the reader's experience of the content structure.

5. **Did I check for pseudo-elements?**
   YES. Found one significant pseudo-element: `.task-component__item::before` (checkbox squares, lines 1030-1040). Cataloged as Component #25 (sub-element of Task Component). No other pseudo-elements in the combination layer carry reader-experience function. The `::selection` styling (lines 233-236) is infrastructure.

6. **Did I check responsive breakpoints?**
   YES. Two breakpoints at lines 1076-1158: 960px (bento grid collapses) and 768px (all multi-column collapses). These are responsive adaptations, not instruments/gestures/components. They preserve existing elements at smaller viewports rather than introducing new reader-experience functions.

7. **Am I distinguishing between "styling" and "instruments/gestures"?**
   YES. Excluded as pure styling:
   - Base typography (body, h1-h6, p, a) -- lines 194-228
   - Selection color -- lines 233-236
   - Focus outline -- lines 241-244
   - Skip link -- lines 249-263
   - Reset (`* { box-sizing... }`) -- lines 180-189
   - Inline code styling -- lines 362-368
   - Print styles -- lines 472-494
   - Reduced motion -- lines 461-467
   - SR-only -- lines 499-509

   These are infrastructure/accessibility foundations, not reader-experience devices.
