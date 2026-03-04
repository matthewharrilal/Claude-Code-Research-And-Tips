# CD-006 Pilot Migration -- Instrument / Gesture / Component Catalog

**File:** `design-system/validated-explorations/combination/CD-006-pilot-migration.html`
**Lines:** 2085 (CSS: 72-1090, HTML: 1093-2051, Findings comments: 2053-2085)
**Role:** Crown jewel pilot migration -- combines ALL vocabulary families. ALL 11 component types, ALL 5 axis patterns, ALL transition grammar types, fractal density at 5 scales.

---

## INSTRUMENTS

### 1. Header Meta Bar -- INSTRUMENT

**CSS class(es):** `.header-meta`, `.version-badge`
**CSS lines:** 260-276
**HTML lines:** 1103-1107
**DOM structure:**
```html
<div class="header-meta" style="display: flex; align-items: center; gap: var(--space-4);">
  <span>EXPLORATION CD-006</span>
  <span>COMBINATION: PILOT MIGRATION</span>
  <span class="version-badge">v1</span>
</div>
```

**Reader function:** Orients the reader before the title: exploration ID, category, and version. Uppercase monospace tracking signals "system metadata" not content. The reader knows they are in CD-006, in the combination phase, at version 1, before reading a single word of the article.

**Detection reasoning:** This is pure orientation. Remove it and the reader loses awareness of which exploration this is, what phase it belongs to, and its version. It delivers no article content -- only positional/identity metadata.

**Multi-channel coordination:** Three channels encode "metadata register": (1) uppercase letter-spacing 0.15em, (2) mono font for version badge, (3) secondary color (#666). All three shift together to signal "this is about the page, not the content."

**Pipeline implication:** "How does the reader know where this page sits in the system?" would generate this. Pipeline could derive it from any content with a document ID and category.

**Derivation question:** "What if the reader could see the page's identity coordinates before committing to read?"

---

### 2. Table of Contents with Density Annotations -- INSTRUMENT

**CSS class(es):** `.toc`, `.toc-list`, `.toc-number`, `.toc-title`, `.toc-density`
**CSS lines:** 307-361
**HTML lines:** 1124-1136
**DOM structure:**
```html
<nav class="toc" aria-label="Table of Contents">
  <h2>Contents</h2>
  <ol class="toc-list">
    <li><a href="#s1">
      <span class="toc-number">01</span>
      <span class="toc-title">Why Build from Tokens?</span>
      <span class="toc-density">SPIRAL</span>
    </a></li>
    <!-- 8 entries total -->
  </ol>
</nav>
```

**Reader function:** Dual-function instrument: (1) standard wayfinding (section titles + numbering), and (2) density/axis preview via the `.toc-density` annotations. The reader can see not just WHAT each section covers but HOW it will be organized (SPIRAL, Z-PATTERN, BENTO, F-PATTERN, CHOREO). This is a map of reading experiences, not just topics.

**Detection reasoning:** Removing the TOC removes both structural navigation and the axis-pattern preview. The density annotations are unique -- they tell the reader the cognitive mode of each section before arriving. This is reader orientation at the page scale.

**Multi-channel coordination:** Four visual channels: (1) monospace numbering (`.toc-number`) for sequence, (2) body font for titles, (3) monospace secondary-color annotations for axis pattern, (4) breathing-zone background to separate from content. The mono font bookending (number left, density right) frames each entry as an instrument reading.

**Pipeline implication:** "What if the reader could preview not just topics but the reading experience of each section?" The density annotations are the unique element -- standard TOCs show what; this shows what + how.

**Derivation question:** "What if navigation revealed the cognitive mode of each destination, not just its title?"

---

### 3. Section Meta Label -- INSTRUMENT

**CSS class(es):** `.section-meta`
**CSS lines:** 374-381
**HTML lines:** 1147, 1225, 1328, 1464, 1605, 1761, 1854, 1951
**DOM structure:**
```html
<div class="section-meta">Section 01 &middot; Spiral &middot; Geological Density</div>
```

**Reader function:** Persistent orientation at every section boundary. Each label encodes three metadata dimensions: section number, axis pattern, and density type. The reader always knows their coordinate in the page's structure without needing to re-check the TOC.

**Detection reasoning:** Pure metadata -- tells the reader WHERE they are (section number), WHAT pattern governs reading (axis), and HOW dense the content will be (density type). Removing it removes positional awareness at the section level.

**Multi-channel coordination:** Monospace font + secondary color + uppercase tracking + small size. All four properties signal "system metadata" simultaneously. The middot separators create a coordinate-like syntax (Section 01 . Spiral . Geological Density).

**Pipeline implication:** "How does the reader maintain orientation within a compound page that changes axis patterns every section?"

**Derivation question:** "What if every section announced its own organizational coordinates?"

---

### 4. Stratum Label -- INSTRUMENT

**CSS class(es):** `.stratum-label`
**CSS lines:** 909-916
**HTML lines:** 1155, 1178, 1191, 1959, 1979, 2012
**DOM structure:**
```html
<div class="stratum-label">Bedrock -- Established</div>
```

**Reader function:** Tells the reader the confidence level of the content that follows. "Bedrock -- Established" means high-confidence, well-validated content. "Atmosphere -- Speculative" means forward-looking conjecture. The reader calibrates their trust level before reading.

**Detection reasoning:** This is epistemic orientation -- it tells the reader HOW MUCH to trust what follows, not what the content is. Removing it removes the confidence framing, and the content reads at uniform trust level.

**Multi-channel coordination:** Monospace font + secondary color + uppercase tracking + small size -- identical register to section-meta. The visual consistency across all instrument labels creates a "metadata layer" that floats above content.

**Pipeline implication:** "How does the reader know how much to trust each piece of content in a multi-confidence document?"

**Derivation question:** "What if content declared its own epistemic altitude?"

---

### 5. Code Label -- INSTRUMENT

**CSS class(es):** `.code-label`
**CSS lines:** 485-492
**HTML lines:** 1263, 1344, 1406, 1631, 1717 (5 instances plus file-tree-label shares pattern)
**DOM structure:**
```html
<div class="code-label">tokens/geometry.md -- the geometry lock</div>
```

**Reader function:** Tells the reader WHAT file this code comes from and WHY it matters, before the reader scans the code itself. Orients the reader to the source location in the filesystem -- a wayfinding instrument for the codebase, not the page.

**Detection reasoning:** Without the label, the reader sees code but does not know its provenance. The label is metadata about the code block's identity, not content of the code itself.

**Multi-channel coordination:** Monospace font + secondary color + small size + slight letter-spacing. Same metadata register as section-meta and stratum-label -- the page has a unified "instrument voice."

**Pipeline implication:** "How does the reader know where code comes from without reading the code?"

**Derivation question:** "What if every code block announced its filesystem provenance?"

---

### 6. Decision Matrix Label -- INSTRUMENT

**CSS class(es):** `.decision-matrix-label`
**CSS lines:** 557-567
**HTML lines:** 1491
**DOM structure:**
```html
<div class="decision-matrix-label">Decision Matrix -- Axis-Density-Org Pairing</div>
```

**Reader function:** Labels the matrix as a decision tool and names the dimensions being compared. The reader knows before scanning the table that this is for making choices about axis/density/org pairings.

**Detection reasoning:** The label is metadata about the component, not part of the decision content itself. It orients the reader to the purpose of the table that follows.

**Multi-channel coordination:** Uppercase + secondary color + small size + breathing-zone background. Consistent with all other instrument labels.

**Pipeline implication:** "How does the reader know what kind of table they are about to read?"

**Derivation question:** "What if structured data announced its decision function?"

---

### 7. Task Component Label -- INSTRUMENT

**CSS class(es):** `.task-label`
**CSS lines:** 651-661
**HTML lines:** 1613, 1775, 1821, 1881
**DOM structure:**
```html
<div class="task-label">Build Checklist</div>
```

**Reader function:** Names the task set and signals "actionable items follow." The reader shifts from reading mode to doing mode.

**Detection reasoning:** Pure labeling instrument -- tells the reader the category of the task list. Removing it removes the framing; the checkboxes still exist but lack context.

**Multi-channel coordination:** Same instrument register: uppercase + secondary color + breathing-zone background + small size + letter-spacing.

**Pipeline implication:** "How does the reader know they've entered an action zone?"

**Derivation question:** "What if task lists announced themselves as action instruments?"

---

### 8. Footer Identity Bar -- INSTRUMENT

**CSS class(es):** `.page-footer`, `.page-footer__inner`, `.page-footer__id`, `.page-footer__rule`
**CSS lines:** 951-977
**HTML lines:** 2042-2048
**DOM structure:**
```html
<footer class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-006 &middot; Pilot Migration</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:FRACTAL &middot; OD:COMPOUND &middot; AD:ALL</span>
  </div>
</footer>
```

**Reader function:** Closing identity stamp. Left side: exploration ID and name. Right side: the three-dimensional classification (DD:FRACTAL, OD:COMPOUND, AD:ALL). The 48px x 3px red rule acts as a visual period -- the page's final signature mark.

**Detection reasoning:** This is terminal orientation. The reader finishes with a complete identity summary. The three-dimensional classification is unique to this instrument -- it tells the reader WHICH vocabulary families were exercised.

**Multi-channel coordination:** Three channels: (1) monospace uppercase for identity text, (2) red rule as signature mark, (3) dark background mirroring header creates structural closure. The header/footer dark bookend is itself a page-scale instrument.

**Pipeline implication:** "How does the reader confirm what they just experienced after reaching the end?"

**Derivation question:** "What if the page signed itself at the end with its full dimensional coordinates?"

---

## GESTURES

### 9. Drop Cap -- GESTURE

**CSS class(es):** `.drop-cap::first-letter`
**CSS lines:** 384-392
**HTML lines:** 1193, 1472 (2 instances)
**DOM structure:**
```html
<p class="drop-cap">In this guide, you will build...</p>
```

**Reader function:** Shifts the reader from scanning to immersive reading. The 3.5em Instrument Serif first letter in red signals "a major narrative passage begins." It is a typographic flag that says: slow down, this paragraph anchors the section.

**Detection reasoning:** This is a coordinated multi-property shift on a pseudo-element: font-family changes to display serif, size jumps to 3.5em, color shifts to primary red, float creates a text-wrap effect, line-height compresses. Five properties shift together to change the reading register. Not a component (no content slots), not an instrument (no metadata).

**Multi-channel coordination:** Five CSS properties shift simultaneously on `::first-letter`: (1) font-family -> Instrument Serif, (2) font-size -> 3.5em, (3) color -> primary red, (4) float -> left, (5) line-height -> 0.8. All coordinated to create the editorial "anchor paragraph" signal.

**Pipeline implication:** "How does the reader know which paragraphs are the section's anchoring statements?"

**Derivation question:** "What if certain paragraphs visually declared themselves as the section's foundation?"

---

### 10. Border-Weight Confidence Encoding -- GESTURE

**CSS class(es):** `.stratum--established`, `.stratum--probable`, `.stratum--speculative`
**CSS lines:** 896-907
**HTML lines:** 1154, 1177, 1190, 1958, 1978, 2012
**DOM structure:**
```html
<div class="stratum stratum--established">  <!-- 4px solid #1A1A1A -->
<div class="stratum stratum--probable">     <!-- 3px solid #666666 -->
<div class="stratum stratum--speculative">  <!-- 1px solid #E0D5C5 -->
```

**Reader function:** The physical thickness of the left border IS the confidence level. 4px = established fact. 3px = probable. 1px = speculative. The reader's peripheral vision registers decreasing solidity as confidence degrades -- no label reading required.

**Detection reasoning:** This is a multi-property shift across a gradient: border-width (4px -> 3px -> 1px), border-color (near-black -> secondary -> border-subtle). Two channels degrade together according to ONE rule: confidence decreases. The gesture changes how the reader trusts content before reading it.

**Multi-channel coordination:** Two CSS properties shift in lockstep: (1) border-left-width: 4px -> 3px -> 1px, (2) border-left-color: #1A1A1A -> #666666 -> #E0D5C5. Both encode the same signal through different perceptual channels.

**Pipeline implication:** "How can border weight communicate trust level without text?"

**Derivation question:** "What if the visual solidity of a container's edge encoded its epistemic confidence?"

---

### 11. Essence Callout Typography Shift -- GESTURE

**CSS class(es):** `.callout--essence .callout-body`
**CSS lines:** 450-455
**HTML lines:** 1181-1186, 1579-1584, 2024-2029 (3 instances)
**DOM structure:**
```html
<div class="callout callout--essence" role="note">
  <div class="callout-label">Essence</div>
  <div class="callout-body">
    <p>If you remember nothing else...</p>
  </div>
</div>
```

**Reader function:** When the callout body shifts from Inter (body font) to Instrument Serif italic at 1.125rem, the reader experiences a voice change. The system is no longer explaining -- it is speaking with its deepest, most authoritative register. The serif italic signals philosophical weight.

**Detection reasoning:** Three CSS properties shift together within the callout-body: (1) font-family -> display serif, (2) font-style -> italic, (3) font-size -> 1.125rem (larger than body 1rem). This is a coordinated register shift, not just styling -- it changes HOW the reader receives the content.

**Multi-channel coordination:** (1) font-family: Inter -> Instrument Serif, (2) font-style: normal -> italic, (3) font-size: 1rem -> 1.125rem. Three channels shift simultaneously to create the "deepest voice" register.

**Pipeline implication:** "How does the system signal when it is speaking at its most philosophical level?"

**Derivation question:** "What if certain callouts changed the typographic voice to signal maximum authority?"

---

### 12. Smooth Transition -- GESTURE

**CSS class(es):** `.transition--smooth`
**CSS lines:** 773-777
**HTML lines:** 1594, 1843 (2 instances)
**DOM structure:**
```html
<div class="transition--smooth" role="separator" aria-hidden="true"></div>
```

**Reader function:** Minimal cognitive decompression between axis patterns that share temporal mechanisms. The 48px gap + 1px separator says: "the pattern changes here, but gently." Used for F->Z and Bento->Choreo transitions where cognitive mode shift is small.

**Detection reasoning:** This is a spatial-temporal gesture that changes reading pace. The combination of margin (48px top+bottom via padding-top + margin) and 1px border creates a breathing moment. It is not a component (no content slots) and not an instrument (no metadata). It modulates reading pace at the transition boundary.

**Multi-channel coordination:** Two properties: (1) vertical space (margin: 48px + padding-top: 48px), (2) visual mark (1px border-top). Minimal intervention -- the lightest transition grammar.

**Pipeline implication:** "How does the reader experience a gentle shift between similar axis patterns?"

**Derivation question:** "What if transitions between compatible patterns used minimal spatial intervention?"

---

### 13. Bridge Transition -- GESTURE

**CSS class(es):** `.transition--bridge`
**CSS lines:** 779-784
**HTML lines:** 1315-1317, 1451-1453, 1748-1750 (3 instances)
**DOM structure:**
```html
<div class="transition--bridge" role="separator" aria-hidden="true">
  <p style="...">Now that you understand the why, let us set up the how...</p>
</div>
```

**Reader function:** Medium cognitive decompression with semantic content. The 64px gap + breathing-zone background creates a visible "landing zone" between axis patterns. The prose paragraph inside actively reframes the reader's cognitive mode ("understanding the why -> setting up the how"). Bridge transitions carry semantic load (CD-F-022).

**Detection reasoning:** Three properties shift together to create a distinct reading zone: (1) margin: 64px, (2) background: breathing-zone color, (3) padding: 32px. The background color change is the key perceptual cue -- the reader enters a visually distinct interstitial space. This is a gesture because it modulates reading pace AND cognitive framing.

**Multi-channel coordination:** Three channels: (1) vertical space (margin: 64px), (2) background color shift (content zone -> breathing zone), (3) semantic prose content. The prose inside the bridge is unique -- it is transition content, not section content.

**Pipeline implication:** "How does the reader experience a significant shift between incompatible axis patterns?"

**Derivation question:** "What if transitions between incompatible patterns required both spatial AND semantic mediation?"

---

### 14. Breathing Transition -- GESTURE

**CSS class(es):** `.transition--breathing`
**CSS lines:** 787-791
**HTML lines:** 1214, 1940 (2 instances)
**DOM structure:**
```html
<div class="transition--breathing" role="separator" aria-hidden="true"></div>
```

**Reader function:** Maximum cognitive decompression. The 80px gap + 3px structural border signals a major pattern boundary -- the reader is crossing from one cognitive world to another (Spiral -> Z-Pattern, Choreography -> Spiral). The 3px border is a Category 1 structural mark, not a data separator.

**Detection reasoning:** Two properties create maximum reading deceleration: (1) margin: 80px + padding-top: 80px = maximum vertical space, (2) 3px solid structural border. The border-weight carries meaning -- 3px is structural, signaling architectural transition rather than content separation.

**Multi-channel coordination:** Two channels at maximum intensity: (1) vertical space (80px margin + 80px padding = widest gap in the page), (2) border-weight (3px = structural, vs 1px for smooth transitions). The ratio between smooth (1px/48px) and breathing (3px/80px) is itself a gradient.

**Pipeline implication:** "How does the reader experience a maximal shift between maximally different axis patterns?"

**Derivation question:** "What if the heaviest transitions used the heaviest visual interventions?"

---

### 15. Q&A Question Register Shift -- GESTURE

**CSS class(es):** `.qa-question`
**CSS lines:** 857-865
**HTML lines:** 1257, 1278, 1294, 1625, 1654, 1670, 1703, 1711 (8 instances)
**DOM structure:**
```html
<div class="qa-question">Why border-radius: 0?</div>
```

**Reader function:** Shifts reading register from prose to interrogation. The display serif italic in primary red with 4px red left-border signals: "a question is being asked." The reader switches from absorbing information to anticipating an answer. The PULSE density depends on this shift -- question (sparse, serif, red) alternates with answer (dense, body font, neutral).

**Detection reasoning:** Four CSS properties shift together to create the question register: (1) font-family: Instrument Serif, (2) font-style: italic, (3) color: primary red, (4) border-left: 4px solid red. This is a coordinated multi-channel shift that changes how the reader processes the text -- from statement to question, from passive to active cognition.

**Multi-channel coordination:** Four properties: (1) font-family -> display serif, (2) font-style -> italic, (3) color -> #E83025, (4) border-left: 4px solid #E83025. All shift together for a single function: "this is a question, the answer follows."

**Pipeline implication:** "How does the reader distinguish questions from answers in a conversational layout?"

**Derivation question:** "What if questions and answers occupied visually different typographic registers?"

---

### 16. Callout Accent Color System -- GESTURE

**CSS class(es):** `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--challenge`
**CSS lines:** 424-462
**HTML lines:** distributed across all sections (33 callout instances total)
**DOM structure:**
```html
<!-- Each callout type shifts border-left-color AND background simultaneously -->
<div class="callout callout--info">    <!-- blue border, #F5F9FE bg -->
<div class="callout callout--tip">     <!-- green border, #F2F9F4 bg -->
<div class="callout callout--gotcha">  <!-- coral border, #FEF6F5 bg -->
<div class="callout callout--essence"> <!-- purple border, breathing bg -->
<div class="callout callout--challenge"> <!-- amber border, #FFFBF2 bg -->
```

**Reader function:** The accent color is a reading-mode signal. Blue = informational (absorb). Green = practical (apply). Coral = warning (avoid). Purple = philosophical (reflect). Amber = challenge (attempt). The reader calibrates their engagement mode before reading the callout body based on the color alone.

**Detection reasoning:** Two CSS properties shift in lockstep per callout type: (1) border-left-color shifts to the semantic accent, (2) background shifts to a tinted version of that accent. This is a coordinated gesture across 5 variants. It is not just styling -- it changes HOW the reader approaches the content.

**Multi-channel coordination:** Two channels per variant: (1) border-left-color (blue/green/coral/purple/amber), (2) background tint (each is a very light wash of the border color). The label color also matches. Three properties shift together per variant.

**Pipeline implication:** "How does the reader know what cognitive mode each callout requires before reading it?"

**Derivation question:** "What if semantic color at the callout border pre-encoded the reader's engagement mode?"

---

### 17. Responsive Collapse at 768px -- GESTURE

**CSS lines:** 1023-1067
**HTML lines:** N/A (applies to existing elements)
**DOM structure:** N/A -- modifies `.z-hero`, `.reasoning-columns`, `.header-inner`, `.page-container`, `.page-footer__inner`

**Reader function:** At 768px, the page shifts from spatial layouts (2-column Z-hero, 2-column reasoning) to single-column flow. This is a reading-mode gesture: the reader's experience transforms from spatial comparison to sequential reading. The Z-pattern golden ratio grid becomes a vertical stack; the reasoning side-by-side becomes top-to-bottom.

**Detection reasoning:** Multiple CSS properties shift simultaneously at the breakpoint: grid-template-columns collapse to 1fr, padding compresses, footer becomes column-direction. This is a coordinated multi-element gesture that changes the reading mode of the entire page.

**Multi-channel coordination:** At 768px: (1) z-hero grid: 1.618fr/1fr -> 1fr, (2) reasoning columns: 1fr/1fr -> 1fr, (3) header padding compresses, (4) header title font-size shrinks to 2rem, (5) page-container padding compresses, (6) footer layout: row -> column.

**Pipeline implication:** "How does the page maintain its reading function when spatial layouts collapse?"

**Derivation question:** "What if responsive breakpoints were treated as reading-mode transformations rather than layout adjustments?"

---

### 18. Responsive Collapse at 960px -- GESTURE

**CSS lines:** 1004-1018
**HTML lines:** N/A (applies to existing elements)
**DOM structure:** N/A -- modifies `.bento-grid`, `.bento-item--wide`, `.bento-item--large`, `.choreo-spokes`

**Reader function:** At 960px, the 4-column bento grid and 3-column choreography spokes collapse to single-column. The ISLANDS density (discrete parallel cells) transforms to SEQUENTIAL density (stacked cells). The reader's cognitive mode shifts from parallel scanning to linear reading.

**Detection reasoning:** Grid systems collapse: bento from repeat(4,1fr) to 1fr, choreo-spokes from repeat(3,1fr) to 1fr. Multi-column span items lose their spanning. This is a mode shift, not just a layout change.

**Multi-channel coordination:** (1) bento grid-template-columns: repeat(4,1fr) -> 1fr, (2) bento span items: span 2 -> span 1, (3) choreo-spokes: repeat(3,1fr) -> 1fr.

**Pipeline implication:** "How do grid-based sections maintain content function when the grid collapses?"

**Derivation question:** "What if multi-column density patterns had defined single-column fallback behaviors?"

---

### 19. Responsive Typography Compression at 480px -- GESTURE

**CSS lines:** 1072-1089
**HTML lines:** N/A (applies to existing elements)

**Reader function:** At 480px, typography and spacing compress for small screens. Header title shrinks from 2rem to 1.625rem, section headings from 1.625rem to 1.375rem, code blocks compress padding and font-size, callout padding tightens. The reading register becomes more intimate -- closer, denser.

**Detection reasoning:** Four properties shift simultaneously: (1) header title font-size, (2) h2 font-size, (3) code-block padding + font-size, (4) callout padding. All compress together to maintain reading function at minimum viewport.

**Multi-channel coordination:** Four simultaneous compressions: header title (3rem -> 2rem -> 1.625rem across breakpoints), headings, code blocks, and callout padding.

**Pipeline implication:** "How does the type scale compress for mobile without losing hierarchy?"

**Derivation question:** "What if there were defined compression stops for typography at each breakpoint?"

---

### 20. Z-Terminal Dark Zone -- GESTURE

**CSS lines:** Inline styles at line 1250
**HTML lines:** 1250-1252
**DOM structure:**
```html
<div class="z-terminal" style="display: flex; align-items: center; justify-content: center; background: var(--color-text); color: var(--color-background); padding: var(--space-6);">
  <p style="font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection); text-align: center; color: var(--color-background);">Sharp edges.<br>Flat planes.<br>Limited color.</p>
</div>
```

**Reader function:** The Z-pattern's terminal position (bottom-right of the 2x2 grid) inverts to dark background with serif italic. This is the "landing point" of the Z-scan -- where the eye naturally rests. The dark inversion + poetic compression signals: "this is the takeaway." The reader's scanning journey ends on a concentrated statement.

**Detection reasoning:** Multiple properties shift simultaneously to create a terminal emphasis zone: (1) background inverts to dark, (2) color inverts to light, (3) font shifts to display serif italic, (4) text is centered and compressed into short lines. This is a coordinated register shift at a specific positional point in the Z-layout.

**Multi-channel coordination:** Four channels: (1) background: light -> dark, (2) text color: dark -> light, (3) font-family: body -> display serif, (4) font-style: normal -> italic. All shift at the Z-pattern's terminal landing point.

**Pipeline implication:** "How does the Z-pattern's terminal position get special visual weight?"

**Derivation question:** "What if the Z-pattern endpoint used color inversion to signal the scanning destination?"

---

### 21. Recommended Row Highlight -- GESTURE

**CSS class(es):** `.decision-matrix .recommended`
**CSS lines:** 598-601
**HTML lines:** 1510
**DOM structure:**
```html
<tr class="recommended">
  <td><strong>F-Pattern</strong></td>
  ...
</tr>
```

**Reader function:** Within the decision matrix, one row gets a green-tinted background and bold text. The reader's eye is drawn to the recommended option without reading all rows first. It is a pre-attentive signal: "if you scan, start here."

**Detection reasoning:** Two properties shift for one row: (1) background: transparent -> #F2F9F4 (success green tint), (2) font-weight: normal -> 600. This is a reading-priority gesture within the table.

**Multi-channel coordination:** (1) background tint to success green, (2) font-weight to bold. Both signal "this is the recommended choice."

**Pipeline implication:** "How does a decision table signal the recommended option pre-attentively?"

**Derivation question:** "What if one row in a comparison table could declare itself as the recommendation?"

---

## COMPONENTS

### 22. Header -- COMPONENT

**CSS class(es):** `header`, `.header-inner`, `.header-title`, `.header-subtitle`
**CSS lines:** 248-293
**HTML lines:** 1101-1111
**DOM structure:**
```html
<header>
  <div class="header-inner">
    <div class="header-meta">...</div>
    <h1 class="header-title">Building Your First KortAI Documentation Page</h1>
    <p class="header-subtitle">A full-lifecycle guide...</p>
  </div>
</header>
```

**Reader function:** Full-bleed dark container that establishes the page's identity and scope. Four defined slots: meta bar (instrument), title (h1), subtitle (description). The dark background + red bottom border creates visual authority.

**Detection reasoning:** This is a structured container with defined content slots (meta, title, subtitle), consistent visual treatment (dark bg, 3px red bottom border, 1100px inner width), and reusable across all pages. It IS the page's identity container.

**Multi-channel coordination:** Dark background (#1A1A1A) + 3px red bottom border + constrained inner width (1100px). Three structural properties define the component.

**Pipeline implication:** "What is the page's opening identity container?"

**Derivation question:** "What if every page opened with a full-bleed dark authority header?"

---

### 23. Callout (5 variants) -- COMPONENT

**CSS class(es):** `.callout`, `.callout-label`, `.callout-body`, plus 5 variant classes
**CSS lines:** 397-462
**HTML lines:** 33 instances distributed across all 8 sections
**DOM structure:**
```html
<div class="callout callout--[type]" role="note">
  <div class="callout-label">[TYPE NAME]</div>
  <div class="callout-body">
    <p>Content...</p>
  </div>
</div>
```

**Variants:** Info (5x), Tip (4x), Gotcha (3x), Essence (3x), Challenge (2x)

**Reader function:** Two-zone content container with 4px left border. The label zone (sparse, uppercase, small) names the callout type. The body zone (dense, prose) delivers the content. Each variant carries different semantic weight: Info = supplementary, Tip = practical, Gotcha = warning, Essence = philosophical, Challenge = active.

**Detection reasoning:** Defined content slots (label + body), consistent structural treatment (4px left border, padding), reusable across all sections. The 5 variants share the same DOM structure but differ in accent color (see Gesture #16 for the color shift).

**Multi-channel coordination:** 4px left border (structural), label zone (uppercase, small, colored), body zone (prose, standard). The 2-zone structure is the defining feature.

**Pipeline implication:** "How does supplementary content announce its type and importance?"

**Derivation question:** "What if aside content had a 2-zone structure with semantic color coding?"

---

### 24. Code Block -- COMPONENT

**CSS class(es):** `.code-block`, `.code-label`, `.kw`, `.str`, `.cmt`, `.fn`, `.typ`, `.num`, `.pn`
**CSS lines:** 467-510
**HTML lines:** 1262-1272, 1343-1349, 1365-1370, 1386-1395, 1405-1418, 1630-1648, 1675-1689, 1716-1729, 1891-1896 (6 unique instances, 9 total code blocks)
**DOM structure:**
```html
<div class="code-block">
  <div class="code-label">filename -- description</div>
  <code><span class="kw">keyword</span> <span class="fn">function</span>...</code>
</div>
```

**Reader function:** Dark-theme code container with syntax highlighting. The dark background inverts the page's light theme, creating a "code world" distinct from "prose world." The syntax highlighting classes (.kw = red for keywords, .str = green for strings, .cmt = gray for comments, .fn = blue for functions, .typ = coral for types, .num = amber for numbers) create a secondary visual language within the code block.

**Detection reasoning:** Defined content slots (optional label + code content), consistent structural treatment (dark bg, 3px border, mono font), reusable. The syntax highlighting system is a sub-component with 7 defined color roles.

**Multi-channel coordination:** Dark background (#1A1A1A) + 3px structural border + mono font + 7-color syntax system. Four structural properties plus a complete color sub-system.

**Pipeline implication:** "How does code content visually separate from prose content?"

**Derivation question:** "What if code blocks created their own dark micro-environment with semantic syntax colors?"

---

### 25. File Tree -- COMPONENT

**CSS class(es):** `.file-tree`, `.file-tree-label`, `.file-tree-item`, `.file-tree-item--l1/l2/l3`, `.file-tree-icon`
**CSS lines:** 515-546
**HTML lines:** 1422-1437 (project structure), 1918-1928 (production assets)
**DOM structure:**
```html
<div class="file-tree">
  <div class="file-tree-label">Project Structure</div>
  <div class="file-tree-item"><span class="file-tree-icon">+</span>your-page/</div>
  <div class="file-tree-item file-tree-item--l1"><span class="file-tree-icon">|</span>index.html</div>
  <div class="file-tree-item file-tree-item--l2"><span class="file-tree-icon">|</span>colors.css</div>
</div>
```

**Reader function:** Visual filesystem representation using indentation levels and ASCII-style icons (+, |). The breathing-zone background separates it from prose. The mono font signals "this is literal structure, not prose." The 3-level indentation hierarchy (l1=16px, l2=32px, l3=48px) maps directly to filesystem depth.

**Detection reasoning:** Defined content slots (label + hierarchical items), consistent structural treatment (breathing bg, 3px border, mono font, indentation levels), reusable. The indentation system is the key structural feature -- it maps filesystem depth to visual depth.

**Multi-channel coordination:** Breathing-zone background + 3px border + mono font + 3-level indentation + ASCII icons. Five properties create the filesystem metaphor.

**Pipeline implication:** "How does a page represent filesystem hierarchy?"

**Derivation question:** "What if directory structures could be rendered as indented mono-font trees with breathing backgrounds?"

---

### 26. Decision Matrix -- COMPONENT

**CSS class(es):** `.decision-matrix`, `.decision-matrix-label`, plus table styles
**CSS lines:** 551-601
**HTML lines:** 1490-1540
**DOM structure:**
```html
<div class="decision-matrix">
  <div class="decision-matrix-label">Decision Matrix -- Axis-Density-Org Pairing</div>
  <table>
    <thead><tr><th>...</th></tr></thead>
    <tbody><tr><td>...</td></tr></tbody>
  </table>
</div>
```

**Reader function:** Structured comparison table wrapped in a labeled container. The label names the decision being made. The table provides parallel comparison across dimensions. The `.recommended` row highlights the suggested choice. Used for multi-criteria decision-making where the reader needs to compare options.

**Detection reasoning:** Defined content slots (label + table with thead/tbody), consistent structural treatment (3px border, breathing-zone label bg, recommended row highlight), reusable for any multi-criteria comparison.

**Multi-channel coordination:** 3px border wrapper + breathing-zone label + table with 3px header separator + 1px data separators + recommended row highlight. Five structural features create the decision tool.

**Pipeline implication:** "How does the reader compare multiple options across multiple criteria?"

**Derivation question:** "What if decision-making content was structured as a labeled matrix with a highlighted recommendation?"

---

### 27. Core Abstraction -- COMPONENT

**CSS class(es):** `.core-abstraction`, `.core-abstraction-label`, `.core-abstraction-principle`, `.core-abstraction-proof`
**CSS lines:** 606-641
**HTML lines:** 1158-1174, 1962-1974 (2 instances)
**DOM structure:**
```html
<div class="core-abstraction">
  <div class="core-abstraction-label">Core Abstraction</div>
  <div class="core-abstraction-principle">
    Attention Topology: the axis IS the topology...
  </div>
  <div class="core-abstraction-proof"><code>/* CSS proof */...</code></div>
</div>
```

**Reader function:** Three-zone container: label (instrument), principle (serif italic philosophical statement), proof (dark-theme code). This is the highest-weight component in the system -- it pairs an abstract truth with its concrete implementation. The principle zone uses Instrument Serif italic, the proof zone inverts to dark. The reader experiences: name -> philosophy -> evidence.

**Detection reasoning:** Three defined content slots (label + principle + proof), consistent treatment (3px border, purple label background, serif principle, dark proof zone). Reusable for any abstract-truth + code-evidence pairing.

**Multi-channel coordination:** Three-zone visual cascade: (1) purple-tinted label zone, (2) serif italic principle in standard background, (3) dark-background code proof. Each zone has its own typographic register.

**Pipeline implication:** "How does the page pair abstract principles with concrete proof?"

**Derivation question:** "What if the system's deepest truths were always presented as philosophy-then-code pairings?"

---

### 28. Task Component -- COMPONENT

**CSS class(es):** `.task-component`, `.task-label`, `.task-list`, `.task-checkbox`
**CSS lines:** 646-686
**HTML lines:** 1612-1621, 1774-1786, 1820-1831, 1880-1888 (4 instances -- 3 unique)
**DOM structure:**
```html
<div class="task-component">
  <div class="task-label">Build Checklist</div>
  <ul class="task-list">
    <li><span class="task-checkbox"></span>Create the HTML structure...</li>
    <li><span class="task-checkbox"></span>Apply the token stylesheet...</li>
  </ul>
</div>
```

**Reader function:** Action-oriented container with visual checkboxes. The label zone names the task set. Each list item has a 16x16 empty checkbox square, signaling "this is actionable, not informational." The reader shifts from reading mode to doing mode.

**Detection reasoning:** Defined content slots (label + checkbox list items), consistent structural treatment (3px border, breathing-zone label, 16px checkbox squares), reusable for any actionable checklist.

**Multi-channel coordination:** Breathing-zone label + 3px border + 16x16 checkbox squares + flex alignment. The checkbox square is the key differentiator from regular lists.

**Pipeline implication:** "How does the page present actionable tasks vs. informational content?"

**Derivation question:** "What if actionable content used visual checkboxes to signal 'do this' vs. 'know this'?"

---

### 29. Reasoning Component -- COMPONENT

**CSS class(es):** `.reasoning`, `.reasoning-label`, `.reasoning-question`, `.reasoning-columns`, `.reasoning-column`, `.reasoning-recommendation`
**CSS lines:** 691-767
**HTML lines:** 1548-1576, 1982-2008 (2 instances)
**DOM structure:**
```html
<div class="reasoning">
  <div class="reasoning-label">Reasoning</div>
  <div class="reasoning-question">For a tutorial page, should I use F-Pattern or Z-Pattern?</div>
  <div class="reasoning-columns">
    <div class="reasoning-column">
      <h4>Option A</h4>
      <ul><li>Pro 1</li>...</ul>
    </div>
    <div class="reasoning-column">
      <h4>Option B</h4>
      <ul><li>Pro 1</li>...</ul>
    </div>
  </div>
  <div class="reasoning-recommendation">
    <p><strong>Recommendation:</strong> ...</p>
  </div>
</div>
```

**Reader function:** Four-zone decision component: label (instrument), question (serif italic framing), two-column comparison (option A vs B), recommendation (green-tinted resolution). The reader follows a structured reasoning process: question -> compare -> decide. This is the most complex component in the page.

**Detection reasoning:** Four defined content slots (label + question + 2-column comparison + recommendation), consistent structural treatment (3px border, breathing-zone label, serif question, split columns, green recommendation zone). Reusable for any binary-choice decision.

**Multi-channel coordination:** Five-zone visual cascade: (1) breathing-zone label, (2) serif italic question, (3) 2-column comparison with 1px divider, (4) list items with "--" bullet prefix, (5) green-tinted recommendation zone with 3px green top border. Each zone has its own register.

**Pipeline implication:** "How does the page structure explicit decision-making for the reader?"

**Derivation question:** "What if decisions were presented as a structured question -> comparison -> recommendation flow?"

---

### 30. Q&A Block -- COMPONENT

**CSS class(es):** `.qa-block`, `.qa-question`, `.qa-answer`
**CSS lines:** 853-869
**HTML lines:** 1256-1273, 1277-1290, 1292-1298, 1624-1650, 1653-1666, 1669-1699, 1702-1707, 1710-1731 (8 instances)
**DOM structure:**
```html
<div class="qa-block">
  <div class="qa-question">Why border-radius: 0?</div>
  <div class="qa-answer">
    <p>Round corners signal friendliness...</p>
    <!-- May contain nested callouts, code blocks -->
  </div>
</div>
```

**Reader function:** Two-zone conversational container. The question zone (serif italic, red, 4px red left border) asks. The answer zone (body font, standard treatment, indented) responds. The question creates cognitive tension; the answer resolves it. Nesting is supported -- answers can contain callouts, code blocks, and other components.

**Detection reasoning:** Two defined content slots (question + answer), consistent structural treatment, reusable. The question zone's typographic shift (Gesture #15) is part of the component but the reading-register shift is the gesture; the container structure is the component.

**Multi-channel coordination:** Question zone: serif italic + red + 4px left border. Answer zone: body font + left padding. The visual contrast between zones creates the conversational rhythm.

**Pipeline implication:** "How does the page create conversational flow within a static document?"

**Derivation question:** "What if Q&A pairs used typographic contrast to create conversational density waves?"

---

### 31. Spiral Strata Container -- COMPONENT

**CSS class(es):** `.spiral-strata`, `.stratum`
**CSS lines:** 885-916
**HTML lines:** 1151-1204 (S1), 1955-2033 (S8)
**DOM structure:**
```html
<div class="spiral-strata">
  <div class="stratum stratum--established">
    <div class="stratum-label">Bedrock -- Established</div>
    <!-- Content at this confidence level -->
  </div>
  <div class="stratum stratum--probable">...</div>
  <div class="stratum stratum--speculative">...</div>
</div>
```

**Reader function:** Vertical stack of confidence-encoded containers. Each stratum has a confidence-level label (Instrument #4) and a border-weight encoding (Gesture #10). Content within each stratum inherits that confidence level. The reader descends from bedrock certainty to atmospheric speculation.

**Detection reasoning:** Defined content slots (stratum-label + content area), consistent structural treatment (flexbox column, 32px gap, border-left encoding), reusable for any confidence-stratified content. Contains both instruments and gestures but IS a component as a structured container.

**Multi-channel coordination:** Flexbox column layout + 32px gap between strata + border-weight gradient (4px/3px/1px) + padding for content area.

**Pipeline implication:** "How does the page organize content by confidence level?"

**Derivation question:** "What if content containers were vertically stratified by epistemic confidence?"

---

### 32. Z-Hero Grid -- COMPONENT

**CSS class(es):** `.z-hero`, `.z-primary`, `.z-secondary`, `.z-diagonal`, `.z-terminal`
**CSS lines:** 825-851
**HTML lines:** 1232-1253
**DOM structure:**
```html
<div class="z-hero">
  <div class="z-primary"><!-- Top-left: main content --></div>
  <div class="z-secondary"><!-- Top-right: supporting content --></div>
  <div class="z-diagonal"><!-- Bottom-left: connecting content --></div>
  <div class="z-terminal"><!-- Bottom-right: terminal/takeaway --></div>
</div>
```

**Reader function:** 2x2 grid implementing the Z-scan pattern with golden ratio column sizing (1.618fr : 1fr). Content is placed in four named positions that map to the Z-scan eye movement: primary (top-left, first fixation) -> secondary (top-right, first horizontal scan) -> diagonal (bottom-left, saccade) -> terminal (bottom-right, landing). Each position has a functional role in the scanning sequence.

**Detection reasoning:** Four defined content slots with positional roles, consistent structural treatment (2x2 grid, golden ratio columns, 32px gap). Reusable for any content that benefits from Z-scan attention topology.

**Multi-channel coordination:** Golden ratio grid (1.618fr/1fr) + 4 named positions + 32px gap. The column ratio ensures primary content gets more visual weight.

**Pipeline implication:** "How does a page arrange content to follow the natural Z-scan eye movement?"

**Derivation question:** "What if content layout followed the Z-scan pattern with golden-ratio weighting?"

---

### 33. Bento Grid -- COMPONENT

**CSS class(es):** `.bento-grid`, `.bento-item`, `.bento-item--wide`, `.bento-item--large`
**CSS lines:** 796-820
**HTML lines:** 1335-1442 (S3), 1767-1833 (S6)
**DOM structure:**
```html
<div class="bento-grid">
  <section class="bento-item bento-item--wide" aria-label="...">
    <h3>Title</h3>
    <p>Content...</p>
  </section>
  <section class="bento-item">...</section>
  <section class="bento-item">...</section>
  <section class="bento-item bento-item--wide">...</section>
</div>
```

**Reader function:** 4-column grid with modular items that can span 1, 2, or 4 columns (and 1 or 2 rows via --large). Creates ISLANDS density: each cell is a discrete knowledge island. The reader can scan cells in any order -- there is no required reading sequence within the grid.

**Detection reasoning:** Grid container with defined item variants (standard, wide, large), consistent structural treatment (4-col grid, 24px gap, 3px border per item, zone-primary background). Reusable for any content that benefits from parallel, non-sequential presentation.

**Multi-channel coordination:** 4-column grid + 24px gap + 3px border per item + white background on items + span variants.

**Pipeline implication:** "How does the page present independent, parallel content clusters?"

**Derivation question:** "What if discrete knowledge islands were laid out in a variable-span grid?"

---

### 34. Choreography Hub-Spoke -- COMPONENT

**CSS class(es):** `.choreo-hub`, `.choreo-spokes`, `.choreo-spoke`
**CSS lines:** 921-946
**HTML lines:** 1859-1931
**DOM structure:**
```html
<div class="choreo-hub">
  <h3>Deployment Pipeline</h3>
  <p>Overview text...</p>
  <!-- May contain callouts -->
</div>
<div class="choreo-spokes">
  <section class="choreo-spoke">
    <h4>Build</h4>
    <!-- Spoke content -->
  </section>
  <section class="choreo-spoke">...</section>
  <section class="choreo-spoke">...</section>
</div>
```

**Reader function:** Two-part layout: a central hub (sparse overview) followed by 3-column spokes (dense details). The hub establishes context; the spokes elaborate. WAVE density: the reader oscillates between the hub's overview and each spoke's detail.

**Detection reasoning:** Two defined structural zones (hub + spokes grid), consistent treatment (hub: centered, focal background, 3px border; spokes: 3-column grid, primary background, 3px border per spoke). Reusable for any hub-and-spoke content organization.

**Multi-channel coordination:** Hub: centered text + focal zone background + 3px border. Spokes: 3-column grid + 24px gap + primary zone background + 3px border per spoke. The hub/spoke visual contrast creates the WAVE density.

**Pipeline implication:** "How does the page organize content around a central concept with radiating details?"

**Derivation question:** "What if overview content radiated into detail spokes through a hub-spoke layout?"

---

### 35. F-Movement -- COMPONENT

**CSS class(es):** `.f-movement`
**CSS lines:** 874-880
**HTML lines:** 1469-1481, 1484-1541, 1544-1585
**DOM structure:**
```html
<div class="f-movement">
  <h3>Movement 1: The Unification</h3>
  <p class="drop-cap">You are not choosing three independent things...</p>
  <!-- May contain callouts, decision matrices, reasoning components -->
</div>
```

**Reader function:** Sequential movement container within an F-pattern section. Each movement is a step in the progressive complexity of the F-pattern. Content density increases with each successive movement (CRESCENDO). The naming convention ("Movement 1: The Unification") signals narrative structure.

**Detection reasoning:** Simple container with h3 title and flexible content area. Consistent margin-bottom spacing (32px). Reusable for any progressive-complexity content. Less structurally complex than other components but defines a content slot pattern (title + rich content body).

**Multi-channel coordination:** 32px bottom margin creates separation between movements. The h3 italic title signals each movement. Content within can include any nested components.

**Pipeline implication:** "How does progressive-complexity content get chunked into narrative movements?"

**Derivation question:** "What if tutorial sections were subdivided into named narrative movements?"

---

### 36. Inline Code -- COMPONENT

**CSS class(es):** `code:not(pre code):not(.code-block code)`
**CSS lines:** 504-510
**HTML lines:** distributed throughout all sections (numerous instances)
**DOM structure:**
```html
<code>border-radius: 0</code>
```

**Reader function:** Inline monospace fragment that signals "this is literal, not prose." The subtle background (#F0EBE3) and 1px border create a micro-container that visually distinguishes technical terms from surrounding body text. The reader's parsing mode briefly shifts from prose to literal interpretation.

**Detection reasoning:** Has a defined structure (mono font + background + 1px border + 2px/6px padding), consistent treatment across the entire page. While simple, it is a reusable content container with defined visual slots.

**Multi-channel coordination:** Mono font + subtle background + 1px border + tight padding. Four properties create the inline "literal" signal.

**Pipeline implication:** "How does inline technical content distinguish itself from prose?"

**Derivation question:** "What if every technical term in prose was wrapped in a micro-container?"

---

## ADDITIONAL OBSERVATIONS

### Infrastructure Elements (not cataloged as Instruments/Gestures/Components per calibration rules)

- **Skip Link** (CSS lines 229-243, HTML line 1096): Accessibility infrastructure. Hidden until focused.
- **::selection** (CSS lines 213-216): Branded selection color (red bg, cream text). Infrastructure.
- **:focus-visible** (CSS lines 221-224): WCAG focus ring. Infrastructure.
- **Print Styles** (CSS lines 993-999): Print media adaptation. Infrastructure.
- **Reduced Motion** (CSS lines 982-988): WCAG motion preference. Infrastructure.
- **Global Reset** (CSS lines 160-169): Box-sizing, margin, padding reset + soul enforcement (border-radius: 0 on everything). Infrastructure.

### Syntax Highlighting Sub-System

The 7 syntax colors (.kw, .str, .cmt, .fn, .typ, .num, .pn) at CSS lines 495-501 form a coherent sub-system within the Code Block component. Each maps to a CSS custom property:
- `.kw` -> `--syntax-keyword` (#E83025, red -- the system's primary color)
- `.str` -> `--syntax-string` (#6B9B7A, green)
- `.cmt` -> `--syntax-comment` (#666666, secondary gray)
- `.fn` -> `--syntax-function` (#4A7C9B, blue)
- `.typ` -> `--syntax-type` (#C97065, coral)
- `.num` -> `--syntax-number` (#D97706, amber)
- `.pn` -> `--syntax-punctuation` (#E0D5C5, border color)

This is a color sub-language within the dark code blocks. The keyword color being #E83025 (the primary accent) is meaningful -- it makes language keywords visually equivalent to the system's primary identity mark.

### Transition Grammar Inventory

CD-006 uses 7 transitions total between 8 sections:
1. **Breathing** S1->S2 (Spiral -> Z-Pattern): 80px + 3px border
2. **Bridge** S2->S3 (Z-Pattern -> Bento): 64px + breathing bg + prose
3. **Bridge** S3->S4 (Bento -> F-Pattern): 64px + breathing bg + prose
4. **Smooth** S4->S5 (F-Pattern -> Z-Pattern): 48px + 1px border
5. **Bridge** S5->S6 (Z-Pattern -> Bento): 64px + breathing bg + prose
6. **Smooth** S6->S7 (Bento -> Choreography): 48px + 1px border
7. **Breathing** S7->S8 (Choreography -> Spiral): 80px + 3px border

The grammar matches CD-F-025: transition weight correlates with cognitive boundary difficulty, not just spatial mechanism.

### Fractal Density at 5 Scales

1. **Navigation scale:** TOC mirrors page density (sparse opener, dense middle, sparse closer)
2. **Page scale:** S1-S2 sparse -> S3-S4 dense -> S5-S6 mixed -> S7-S8 resolving
3. **Section scale:** Each section has intro paragraph -> detail components -> closing component
4. **Component scale:** Label zone (sparse) -> body zone (dense) in every callout/task/reasoning
5. **Character scale:** Headings (serif, sparse) -> paragraphs (body font, dense)

### Compound Sequencing

This page demonstrates compound sequencing (AD-F-024): one axis pattern per section, compound effect through scrolling. The 8 sections cycle through all 5 axis patterns:
- S1: Spiral (geological confidence strata)
- S2: Z-Pattern (Q&A with golden-ratio hero)
- S3: Bento Grid (token reference cards)
- S4: F-Pattern (progressive complexity movements)
- S5: Z-Pattern (step-by-step Q&A building)
- S6: Bento Grid (audit domain islands)
- S7: Choreography (hub-spoke deployment)
- S8: Spiral (bookend return to confidence strata)

The bookend pattern (S1 Spiral / S8 Spiral) creates structural closure (CD-F-021).

---

## SUMMARY COUNTS

| Category | Count | Items |
|----------|-------|-------|
| **Instruments** | 8 | Header Meta, TOC w/ Density, Section Meta, Stratum Label, Code Label, Decision Matrix Label, Task Label, Footer Identity |
| **Gestures** | 13 | Drop Cap, Border-Weight Confidence, Essence Typography Shift, Smooth Transition, Bridge Transition, Breathing Transition, Q&A Question Register, Callout Accent System, Responsive 768px, Responsive 960px, Responsive 480px, Z-Terminal Dark Zone, Recommended Row Highlight |
| **Components** | 15 | Header, Callout (5 variants), Code Block, File Tree, Decision Matrix, Core Abstraction, Task Component, Reasoning, Q&A Block, Spiral Strata, Z-Hero Grid, Bento Grid, Choreography Hub-Spoke, F-Movement, Inline Code |
| **TOTAL** | **36** | |

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. Read all 2085 lines: CSS from line 72 through line 1090 (the `</style>` close), HTML from line 1093 through line 2051 (the `</html>` close), and findings comments from 2053-2085.

2. **Am I identifying elements at the DOM level?** YES. Every element is grounded in specific CSS classes, specific CSS line numbers, specific HTML line numbers, and specific DOM structure. I am not working from abstract descriptions -- I am working from the actual `<div class="...">` elements.

3. **Could I have missed subtle gestures?** I identified the `::first-letter` pseudo-element gesture (Drop Cap). I checked for `::before` and `::after` -- the reasoning column li uses `::before` with content "--" (line 752-757) which is a list bullet styling, not a reading-register gesture. The Z-secondary zone at line 1237-1246 uses inline styles for a special background treatment, which I captured as part of the Z-Hero Grid component rather than a separate gesture. The Z-terminal dark zone (Gesture #20) is the most subtle -- it's done with inline styles, not classes.

4. **Am I applying the reader-function test honestly?** YES. I tested each element by asking "remove this -- what does the reader lose?" For instruments, the reader loses orientation/awareness. For gestures, the reader loses a reading-mode shift. For components, the reader loses a content container. Some borderline cases:
   - **Callout Accent Color System (Gesture #16):** The 5 callout variants share the same component structure but the color shift is a gesture. I cataloged the structure as a component and the color encoding as a separate gesture because they serve different reader functions (container vs. pre-attentive mode signal).
   - **Inline Code (#36):** Borderline between "just styling" and a true component. I included it because it has consistent structural treatment (4 properties) and changes the reader's parsing mode from prose to literal.

5. **Did I check for pseudo-elements?** YES. Found: `::first-letter` on `.drop-cap` (Gesture #9), `::before` on `.reasoning-column li` (list bullet, not a gesture), `::selection` (infrastructure). No other `::before`/`::after` pseudo-elements in the CSS.

6. **Did I check responsive breakpoints?** YES. Three breakpoints: 960px (Gesture #18 -- bento/choreo collapse), 768px (Gesture #17 -- general collapse), 480px (Gesture #19 -- typography compression). Each is a reading-mode gesture.

7. **Am I distinguishing "styling" from "instruments/gestures"?** YES. I excluded: basic typography settings (body font-size, line-height), link styling (color, text-decoration), the global reset, print styles, reduced motion media query, skip link, ::selection, and :focus-visible. These are infrastructure/styling, not reader-experience instruments or gestures. The key test: does removing this change how the reader EXPERIENCES the content (instruments/gestures) or just how it LOOKS (styling)?
