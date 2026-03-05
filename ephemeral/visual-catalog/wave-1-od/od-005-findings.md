# OD-005-spatial.html -- Instrument / Gesture / Component Inventory

**File:** `design-system/validated-explorations/organizational/OD-005-spatial.html`
**Total lines:** 2284 (CSS: lines 174-1081; HTML: lines 1083-2281; JS: lines 2228-2281)
**Hypothesis:** "What if documentation was organized spatially -- as a hub-and-spoke map where users navigate between territory zones -- rather than linearly?"
**Density pairing:** WAVE (primary) + ISLANDS (secondary)

---

## INSTRUMENTS

---

### 1. WAVE Density Visualization -- INSTRUMENT

**CSS class(es):** `.wave-visualization`, `.wave-visualization__title`, `.wave-diagram`, `.wave-bar`, `.wave-bar__fill`, `.wave-bar--hub`, `.wave-bar--s1` through `.wave-bar--s6`, `.wave-bar--end`, `.wave-bar--gap1` through `.wave-bar--gap5`, `.wave-labels`, `.wave-annotation`
**CSS lines:** 429-506
**HTML lines:** 1126-1158
**DOM structure:**
```html
<section class="wave-visualization reveal" aria-label="Density wave visualization">
  <div class="wave-visualization__title">Density Map: Wave Oscillation Across Territories</div>
  <div class="wave-diagram">
    <div class="wave-bar wave-bar--hub"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--s1"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--gap1"><div class="wave-bar__fill"></div></div>
    <!-- ...6 spoke bars + 5 gap bars + end bar... -->
  </div>
  <div class="wave-labels">
    <span>Hub (sparse)</span>
    <span>State</span> <span>Patterns</span> <span>Data</span>
    <span>Perf</span> <span>Test</span> <span>A11y</span>
    <span>Hub (return)</span>
  </div>
  <div class="wave-annotation">...</div>
</section>
```

**Reader function:** Shows the page's entire density architecture before reading begins. A CSS-only bar chart renders the WAVE oscillation pattern -- short hub bars, tall spoke bars, minimal gap bars -- so the reader can see the sparse-dense-sparse rhythm of the entire document at a glance. The annotation text explains the encoding.

**Detection reasoning:** This is an Instrument, not a Component, because its primary purpose is reader orientation. It tells you WHAT kind of reading experience awaits (wave oscillation) and HOW the page is structured (hub-spoke with isolation gaps). Removing it would not lose content -- the React documentation is all in the spokes -- but would lose the reader's advance awareness of the page's density architecture. It is not a Gesture because it is a discrete DOM element, not a CSS-encoded shift.

**Multi-channel coordination:** Bar height encodes density level (18px for sparse hub/end, 70-85px for dense spokes, 12px for isolation gaps). Background color encodes role: `--color-primary` (red) for spoke 1, `--color-text-secondary` (gray) for spokes 2-6, `--color-border` for hub, `--color-border-subtle` for gaps. Monospace labels at 9px identify each zone. A structural 3px bottom border on the diagram grounds the bar chart. Two visual channels (height + color) encode two metadata dimensions (density level + zone type).

**Pipeline implication:** "What if the reader could see the entire density rhythm of the page before reading any content?" This is a meta-visualization -- it externalizes the WAVE pattern so the reader can confirm the structural hypothesis from the exploration header.

**Derivation question:** "What if there were a visual diagram that showed the reader how dense each section will be, before they start reading?"

---

### 2. WAVE Density Indicator (Fixed Sidebar) -- INSTRUMENT

**CSS class(es):** `.wave-indicator`, `.wave-indicator__zone`, `.wave-indicator__zone--active`, `.wave-indicator__label`
**CSS lines:** 1029-1064
**HTML lines:** 1089-1098
**JS lines:** 2243-2259
**DOM structure:**
```html
<nav class="wave-indicator" aria-label="Current territory zone" aria-hidden="true">
  <div class="wave-indicator__zone" data-zone="hub" title="Hub"></div>
  <div class="wave-indicator__zone" data-zone="state" title="State"></div>
  <div class="wave-indicator__zone" data-zone="patterns" title="Patterns"></div>
  <div class="wave-indicator__zone" data-zone="data" title="Data"></div>
  <div class="wave-indicator__zone" data-zone="performance" title="Performance"></div>
  <div class="wave-indicator__zone" data-zone="testing" title="Testing"></div>
  <div class="wave-indicator__zone" data-zone="accessibility" title="A11y"></div>
  <span class="wave-indicator__label">Zone</span>
</nav>
```

**Reader function:** A fixed, vertically centered sidebar on the right edge showing 7 rectangular zone markers. As the reader scrolls, JavaScript highlights the current zone marker in red (`--color-primary`), with all others remaining in muted `--color-border` gray. The vertical monospace label "Zone" in `writing-mode: vertical-rl` identifies the instrument's purpose. Hidden below 1200px viewport width.

**Detection reasoning:** This is an Instrument because it tells the reader WHERE they are within the page's territory structure at all times. It is the persistent position-awareness device. Removing it would lose scroll-position awareness. It is similar to OD-006's Scroll Witness (calibration #7) but uses rectangular zone markers instead of progress bars, and tracks discrete zones rather than continuous progress.

**Multi-channel coordination:** Three channels encode position: (1) vertical position of the active marker maps to document position, (2) color shift from `--color-border` to `--color-primary` signals the active zone, (3) 8x24px rectangular markers (Soul Piece 5: Squares Signal System) are the shape vocabulary. The `writing-mode: vertical-rl` label is a fourth channel -- typographic orientation signals "this is a sidebar instrument, not content."

**Pipeline implication:** "How does the reader know which territory zone they are currently reading?" Scroll-driven position indicators are a recurring pattern (OD-006 has one too). The pipeline needs a "persistent wayfinding" question for any page with distinct named zones.

**Derivation question:** "What if there were a persistent indicator showing which zone the reader is currently in, so they never lose spatial context?"

---

### 3. Exploration Header -- INSTRUMENT

**CSS class(es):** `.exploration-header`, `.exploration-header__inner`, `.exploration-id`, `.exploration-title`, `.exploration-hypothesis`, `.exploration-meta`, `.exploration-meta__value`
**CSS lines:** 353-413
**HTML lines:** 1103-1118
**DOM structure:**
```html
<header class="exploration-header" role="banner">
  <div class="exploration-header__inner">
    <div class="exploration-id">Exploration OD-005 &middot; Density: WAVE + ISLANDS</div>
    <h1 class="exploration-title">Spatial Hub-Spoke Structure</h1>
    <p class="exploration-hypothesis">What if documentation was organized spatially...</p>
    <div class="exploration-meta">
      <span>Density: <strong class="exploration-meta__value">WAVE + ISLANDS</strong></span>
      <span>DD Source: <strong class="exploration-meta__value">DD-006 (FRACTAL 36/40)</strong></span>
      <span>Organization: <strong class="exploration-meta__value">Hub-Spoke Spatial</strong></span>
      <span>Topic: <strong class="exploration-meta__value">React Component Architecture</strong></span>
    </div>
  </div>
</header>
```

**Reader function:** Full-bleed dark (#1A1A1A) header that anchors the page as a spatial landmark (EXT-SPAT-017). Orients the reader with four metadata dimensions: exploration ID + density pairing, title, hypothesis (the question being tested), and metadata chips (Density, DD Source, Organization, Topic). The dark background creates maximum contrast against the warm cream page body.

**Detection reasoning:** This is an Instrument because it tells the reader WHAT they are reading (an exploration), HOW it is organized (hub-spoke spatial), and WHAT hypothesis it tests. The metadata chips are pure orientation -- density type, source reference, organizational pattern, content topic. Removing the header would leave the reader unable to contextualize the page.

**Multi-channel coordination:** Five visual channels: (1) dark background as spatial anchor inverts the page's figure-ground, (2) monospace uppercase for exploration ID signals machine/system context, (3) Instrument Serif italic for the title signals display/human context, (4) body font for the hypothesis signals reading text, (5) red (`--color-primary`) for metadata values creates semantic highlight against secondary gray. The font-family shifts (mono -> serif -> body -> mono) encode an information hierarchy.

**Pipeline implication:** "How does the reader know what kind of document they are reading and what question it addresses?" Every exploration page needs a header instrument that sets the reading frame.

**Derivation question:** "What if the reader could see the exploration's identity, hypothesis, and metadata before encountering any content?"

---

### 4. Breadcrumb Navigation -- INSTRUMENT

**CSS class(es):** `.breadcrumb`, `.breadcrumb a`, `.breadcrumb__separator`, `.breadcrumb__current`
**CSS lines:** 622-653
**HTML lines:** 1242-1246, 1417-1421, 1580-1584, 1747-1751, 1890-1894, 2026-2030
**DOM structure:**
```html
<nav class="breadcrumb reveal" aria-label="Breadcrumb">
  <a href="#hub">Hub</a>
  <span class="breadcrumb__separator" aria-hidden="true">&#9656;</span>
  <span class="breadcrumb__current">State Management</span>
</nav>
```

**Reader function:** At the top of every spoke section, a two-level breadcrumb shows the reader's position in the hub-spoke hierarchy: "Hub > [Current Territory]". The triangle separator (Unicode &#9656;) visually indicates direction (from hub into spoke). The current territory name shifts from monospace to Instrument Serif italic, signaling arrival at a named destination. Repeated 6 times, once per spoke.

**Detection reasoning:** This is an Instrument because it tells the reader WHERE they are relative to the hub. The breadcrumb's primary function is spatial orientation, not content delivery. Removing it would lose the explicit "you are here in the hub-spoke structure" signal. It is not a Component because it does not hold content -- it is pure wayfinding.

**Multi-channel coordination:** Three channels: (1) the triangle separator encodes directionality (hub -> spoke), (2) the font shift from monospace ("Hub") to Instrument Serif italic (current territory name) encodes the transition from system-navigation to named-destination, (3) color shifts on hover (`--color-primary`) confirm interactive elements. The font family IS the hierarchy signal.

**Pipeline implication:** "How does the reader maintain awareness of their position in a non-linear document structure?" Hub-spoke architectures need breadcrumbs to prevent spatial disorientation.

**Derivation question:** "What if each spoke section started with a breadcrumb showing the reader's path from the hub, using a font shift to signal arrival?"

---

### 5. Exploration Meta Chips (in Header) -- INSTRUMENT

**CSS class(es):** `.exploration-meta`, `.exploration-meta span`, `.exploration-meta__value`
**CSS lines:** 393-413
**HTML lines:** 1111-1116
**DOM structure:**
```html
<div class="exploration-meta">
  <span>Density: <strong class="exploration-meta__value">WAVE + ISLANDS</strong></span>
  <span>DD Source: <strong class="exploration-meta__value">DD-006 (FRACTAL 36/40)</strong></span>
  <span>Organization: <strong class="exploration-meta__value">Hub-Spoke Spatial</strong></span>
  <span>Topic: <strong class="exploration-meta__value">React Component Architecture</strong></span>
</div>
```

**Reader function:** Four monospace metadata chips at the bottom of the exploration header, each a label:value pair. Labels are secondary gray, values are red (`--color-primary`). They encode four metadata dimensions: density type, source exploration, organizational pattern, and content topic. Functions identically to OD-004's Evidence DNA (calibration #3) -- monospace metadata chips encoding exploration provenance.

**Detection reasoning:** This is a sub-instrument within the Exploration Header. I am calling it out separately because it has its own reader function distinct from the header's other elements: the meta chips encode the exploration's provenance chain (which DD it derives from, what density pattern, etc.), which is system-level metadata, not reader-facing orientation. Removing the meta chips would not affect the reader's understanding of the hypothesis but would lose the system-level classification data.

**Multi-channel coordination:** Monospace uppercase + letter-spacing 0.08em signals "machine metadata." Red values against gray labels create a two-tone encoding where the values are semantically highlighted. Flex layout with 24px gaps creates even spacing. The pattern is consistent across all OD explorations.

**Pipeline implication:** "How does the page declare its lineage in the exploration pipeline?" This is a provenance instrument -- it connects the page to its research sources.

**Derivation question:** "What if each exploration page displayed its density type, source, organization pattern, and topic as machine-readable metadata chips?"

---

### 6. Checkpoint Callouts -- INSTRUMENT

**CSS class(es):** `.callout`, `.callout--checkpoint`, `.callout__label`, `.callout__body`
**CSS lines:** 779-829 (callout system), specifically 826-829 (checkpoint variant)
**HTML lines:** 1365-1373, 1541-1548, 1707-1714, 1849-1857, 1985-1993, 2141-2148
**DOM structure:**
```html
<div class="callout callout--checkpoint reveal">
  <div class="callout__label">Checkpoint</div>
  <div class="callout__body">
    You should understand: (1) useState for local, simple values.
    (2) useReducer for complex transitions with multiple actions.
    (3) Context for cross-component sharing...
  </div>
</div>
```

**Reader function:** A green-bordered callout (accent-green) appearing at the end of every spoke's content, summarizing exactly what the reader should have learned. The "Checkpoint" label and the "You should understand:" format create a self-assessment instrument -- the reader checks their comprehension before moving to the next territory. Appears 6 times, once per spoke.

**Detection reasoning:** This is an Instrument because it serves reader orientation ("do you know enough to proceed?"), not content delivery. The checkpoint does not introduce new information -- it lists what the preceding content already taught. Removing it would lose the reader's ability to self-assess at each spoke exit. It is similar to OD-004's Epistemic Marker (calibration #4) in that it sets a reading register, but here it is reflective rather than prospective.

**Multi-channel coordination:** Green left border (accent-green) + monospace uppercase "CHECKPOINT" label + subtle background (`--color-border-subtle`). The consistent appearance at every spoke exit creates a positional pattern -- the reader learns to expect checkpoints as exit signals.

**Pipeline implication:** "How does the reader know they have absorbed enough from a section to move on?" Checkpoint instruments are the exit-gate equivalent of breadcrumbs as entry-gates.

**Derivation question:** "What if each spoke ended with a comprehension checkpoint that told the reader what they should now understand?"

---

### 7. Footer Territory Map Summary -- INSTRUMENT

**CSS class(es):** `.exploration-footer`, `.footer-grid`, `.footer-link`, `.footer-link__name`, `.footer-meta`
**CSS lines:** 973-1017
**HTML lines:** 2181-2220
**DOM structure:**
```html
<footer class="exploration-footer" id="footer" role="contentinfo">
  <h2>Territory Map Summary</h2>
  <p>Six territories covering React component architecture...</p>
  <div class="footer-grid">
    <a href="#state" class="footer-link">
      <span class="footer-link__name">State Management</span>
      useState, useReducer, Context API
    </a>
    <!-- ...5 more territory links... -->
  </div>
  <div class="footer-meta">
    OD-005 / Spatial Hub-Spoke / WAVE + ISLANDS / DD-F-006 Compliant / Soul 5/5
  </div>
</footer>
```

**Reader function:** A bookend return to the hub-level overview after all 6 spokes. The footer grid re-presents all 6 territory zones as compact link cards, allowing the reader to jump to any territory they may have skipped. The footer-meta line is a compact provenance stamp. This completes the WAVE cycle: sparse hub -> 6 dense spokes -> sparse footer.

**Detection reasoning:** This is an Instrument because it serves structural re-orientation, not content delivery. The footer mirrors the hub's territory grid in compact form, closing the WAVE oscillation. Removing it would leave the page without a clear ending or return-to-hub mechanism. The `footer-meta` provenance stamp is a secondary instrument encoding system classification.

**Multi-channel coordination:** Three channels: (1) 3px red top border signals section boundary (matching the header's 3px red bottom border -- symmetry), (2) grid layout with 1px subtle-border cards creates a compact version of the hub's territory tiles, (3) monospace meta line at the bottom encodes pipeline provenance.

**Pipeline implication:** "How does the reader re-orient after completing all spoke content?" The footer-as-hub-return is specific to hub-spoke architectures.

**Derivation question:** "What if the page ended with a compact re-presentation of the entire territory map, allowing the reader to revisit any zone?"

---

## GESTURES

---

### 8. Hub-to-Spoke Density Transition (WAVE Oscillation) -- GESTURE

**CSS class(es):** `.hub`, `.spoke-divider`, `.spoke`, `.spoke__heading`, `.spoke__intro`, `.spoke-grid`
**CSS lines:** 514-516 (hub), 616-620 (spoke-divider), 610-613 (spoke), 656-671 (spoke heading/intro), 675-681 (spoke-grid)
**HTML lines:** 1165-1231 (hub section), 1238-1407 (spoke 1), etc.

**Reader function:** The WAVE gesture is the macro-level reading register shift between the sparse hub and dense spokes. The hub section has generous spacing (`margin: 48px 0 80px 0`), a compact grid of tiles with minimal text, and no content depth. Crossing the `spoke-divider` (1px line with 80px margins), the reader enters a spoke with a content grid (`3fr 1fr`), multiple subsections, code blocks, and callouts. This is a coordinated multi-property shift affecting layout density, content depth, and visual weight.

**Detection reasoning:** This is a Gesture, not a Component, because it is not a single DOM element but a CSS-encoded shift in the reading experience that spans multiple elements. The WAVE oscillation (sparse hub -> dense spoke -> sparse return) changes HOW you read (scanning a map vs. deep-reading documentation). Multiple CSS properties shift together: layout goes from simple grid to complex 3fr/1fr grid, spacing compresses, content density increases, and new element types appear (code blocks, callouts, tables).

**Multi-channel coordination:** (1) Spacing: hub uses `--space-12` (48px) top + `--space-20` (80px) bottom, creating breathing room; spokes use `--space-12` (48px) padding vertically with denser internal spacing. (2) Layout: hub = single-column auto-fit grid; spoke = named 3fr/1fr grid with sidebar. (3) Spoke divider: 1px line + 80px margin = 161px total isolation gap between spokes. (4) Content type: hub has only tiles with 2-line descriptions; spokes have paragraphs, code blocks, tables, flowcharts, callouts. All four channels shift together at each hub-to-spoke boundary.

**Pipeline implication:** "How does the reader's experience shift when transitioning from a sparse overview zone to a dense content zone?" The WAVE gesture requires coordinated changes across layout, spacing, content type, and visual density.

**Derivation question:** "What if crossing from the hub into a spoke felt like entering a different reading mode -- from scanning to immersing?"

---

### 9. Spoke Internal Density Arc (Section Scale WAVE) -- GESTURE

**CSS class(es):** `.breadcrumb`, `.spoke__heading`, `.spoke__intro`, `.spoke-grid`, `.spoke-section`, `.callout--checkpoint`, `.return-link`
**CSS lines:** 622-653 (breadcrumb), 656-671 (heading/intro), 675-681 (grid), 700-717 (section), 826-829 (checkpoint), 754-771 (return link)
**HTML lines:** Each spoke follows the pattern -- e.g., Spoke 1: 1242-1407

**Reader function:** Within each spoke, the reading density follows a SECTION SCALE wave: sparse intro (breadcrumb + heading + 1-paragraph intro) -> dense body (subsections with code blocks, tables, flowcharts) -> sparse exit (checkpoint callout + "Return to Map" link). This is the fractal self-similarity of the WAVE pattern -- the same sparse-dense-sparse rhythm at the section scale that exists at the page scale.

**Detection reasoning:** This is a Gesture because it is a coordinated multi-property shift that happens within each spoke, not a single element. The reading register changes three times within each spoke: light-weight entry (breadcrumb in monospace, heading in serif, sparse paragraph), dense middle (subsections with technical content, code blocks, tables), and light-weight exit (checkpoint summary + monospace return link). Multiple CSS properties shift together: font density, element types present, spacing, and the reader's attention mode.

**Multi-channel coordination:** (1) Font register: breadcrumb is monospace 11px -> heading is Instrument Serif 26px -> intro is Inter 15px at 60ch max-width -> subsections are Inter 15px at 65ch -> checkpoint is back to Inter 14px with monospace label -> return link is monospace 11px. (2) Content density: single paragraph -> multiple paragraphs + code + tables -> single summary paragraph. (3) Spacing: `--space-4` (16px) bottom on breadcrumb -> `--space-8` (32px) bottom on intro -> `--space-8` (32px) between sections -> `--space-8` (32px) top on return link. (4) Element type: text-only -> text+code+tables -> text-only.

**Pipeline implication:** "How does density oscillate within a single spoke section, not just across the whole page?" Fractal self-similarity requires the same rhythm at multiple scales.

**Derivation question:** "What if each spoke's internal structure mirrored the page's macro-level WAVE -- starting sparse, going dense, then returning to sparse?"

---

### 10. Breadcrumb Font Shift (Monospace to Serif) -- GESTURE

**CSS class(es):** `.breadcrumb` (monospace), `.breadcrumb__current` (Instrument Serif italic)
**CSS lines:** 622-653
**HTML lines:** 1242-1246 (and repeated in each spoke)

**Reader function:** Within the breadcrumb, the "Hub" link is rendered in monospace 11px uppercase (system/navigation register), but the current territory name shifts to Instrument Serif italic 13px with normal case and zero letter-spacing. This font-family shift within a single DOM element encodes the transition from navigation context to named destination. The reader's eye processes the serif italic as "I have arrived at a named place."

**Detection reasoning:** This is a Gesture, not merely a style choice, because the font-family change IS the register shift. Similar to OD-006's Dual Lens Font Shift (calibration #20), the font itself encodes meaning. Monospace = system navigation; Serif italic = named destination. The letter-spacing also resets from 0.08em to 0, and text-transform drops from uppercase to none. Three properties shift together according to one rule: "navigation -> destination."

**Multi-channel coordination:** (1) Font family: `--font-mono` -> `--font-display` (Instrument Serif). (2) Font style: normal -> italic. (3) Text-transform: uppercase -> none. (4) Letter-spacing: 0.08em -> 0. (5) Font size: 11px -> 13px. Five CSS properties shift together at the same boundary, all encoding the single semantic shift from "where you came from" to "where you are now."

**Pipeline implication:** "How does the reader distinguish between navigation context and current location within a breadcrumb?" A font-family shift is a more nuanced signal than color change alone.

**Derivation question:** "What if the breadcrumb used a font shift to signal the reader's arrival at a named territory, rather than just using color or weight?"

---

### 11. Sparse-to-Dense Zone Background Encoding -- GESTURE

**CSS class(es):** `:root` variables `--color-zone-sparse`, `--color-zone-dense`, `--color-zone-breathing`
**CSS lines:** 190-193
**HTML context:** Applied implicitly via background colors throughout

**Reader function:** Three zone tokens encode density level through background color: `--color-zone-sparse: #FEF9F5` (warm cream, the default page background), `--color-zone-dense: #FFFFFF` (pure white, used for spoke content containers and territory tiles), and `--color-zone-breathing: #FAF5ED` (slightly warmer, used for transitions). The background color subtly shifts as the reader moves between zones, providing a subconscious density signal.

**Detection reasoning:** This is a Gesture because it is a CSS-encoded semantic shift that changes the reading register without being a discrete DOM element. The background color differences are subtle (FEF9F5 vs FFFFFF vs FAF5ED -- all within a narrow warm-to-neutral range) but they create perceptual zones. This is an ambient gesture -- you may not consciously notice the background shifting, but it contributes to the feeling that "I have entered a different zone." Similar to OD-004's Spacing-as-Confidence (calibration #17) where the CSS property IS the meaning.

**Multi-channel coordination:** Single channel (background color) but the zone tokens are semantically named: "sparse," "dense," "breathing." These names in the CSS custom properties are themselves a design-system gesture -- they encode the density theory into the variable names.

**Pipeline implication:** "How do background colors encode density zones without the reader needing to be told?" Zone-token naming is a pattern the pipeline could generalize: naming variables after their semantic role, not their visual value.

**Derivation question:** "What if background color subtly shifted between sparse, dense, and breathing zones, creating subconscious territorial boundaries?"

---

### 12. Scroll-Triggered Reveal Animation -- GESTURE

**CSS class(es):** `.reveal`, `.reveal-delay-1`, `.reveal-delay-2`; `@keyframes arrive`
**CSS lines:** 278-324
**HTML lines:** Applied throughout via class names on nearly every content element

**Reader function:** Elements with `.reveal` classes use CSS scroll-driven animations (via `animation-timeline: view()`) to fade in and slide up 16px as they enter the viewport. Three stagger classes create a cascading reveal effect: `.reveal` (entry 10%-40%), `.reveal-delay-1` (entry 15%-45%), `.reveal-delay-2` (entry 20%-50%). This paces the reader's intake of new content, preventing a "wall of content" experience.

**Detection reasoning:** This is a Gesture because it changes HOW the reader encounters content -- not what the content is. The coordinated opacity + transform shift is a multi-property transition that affects reading pace. With `prefers-reduced-motion: reduce`, all animations are neutralized (opacity: 1, transform: none), and a fallback exists for browsers without `animation-timeline: view()` support. The gesture degrades gracefully.

**Multi-channel coordination:** Two CSS properties shift together: (1) opacity from 0 to 1, (2) transform from translateY(16px) to translateY(0). The three stagger classes add a temporal dimension -- elements within a group appear in sequence (100ms, 150ms, 200ms offset via animation-range shifts), creating a cascading reveal that guides the eye from first to last.

**Pipeline implication:** "How does content appear as the reader scrolls, and does the reveal pacing match the reading rhythm?" Scroll-triggered animation is a pacing gesture that the pipeline could apply to any page with multiple content blocks.

**Derivation question:** "What if content elements faded in as the reader scrolled to them, with staggered delays creating a cascade effect?"

---

### 13. Code Block Sparse-Dense Character Scale -- GESTURE

**CSS class(es):** `.code-block`, `.code-block__header`, `.code-block__lang`, `.code-block__copy`, `.code-block__line`, `.code-block__num`, `.code--comment`, `.code--keyword`, `.code--string`, `.code--function`, `.code--type`, `.code--variable`, `.code--bracket`, `.code--operator`
**CSS lines:** 835-900
**HTML lines:** 1278-1297 (first occurrence), and repeated in each spoke

**Reader function:** Within code blocks, comments are rendered in `#666666` (secondary gray -- sparse, recessive) while logic/keywords use `#E83025` (primary red -- dense, assertive). String literals are sage green (`#6B9B7A`), functions are muted blue (`#4A7C9B`), types are coral (`#C97065`). This creates a CHARACTER SCALE wave within each code block: comments (sparse attention) -> logic (dense attention). The reader's eye is drawn to the structural code while comments recede.

**Detection reasoning:** This is a Gesture because it is a coordinated color-encoding system that shifts the reader's attention within code blocks. It is not a Component because the syntax highlighting is not a container -- it is a reading-register device. The color assignments map to semantic roles (comment = de-emphasized, keyword = structural emphasis, string = data, function = action), and this mapping changes how you read code. The `code--comment` at `#666666` vs `code--keyword` at `#E83025` creates a visual hierarchy within the monospace environment where size and weight are uniform.

**Multi-channel coordination:** Single channel (color) encoding multiple semantic categories. The palette is locked to the design system: primary red for keywords, secondary gray for comments, accent colors for types/functions/strings. Within the monospace environment, color is the ONLY differentiating channel (no size, weight, or layout variation), which makes it the sole reading-register device.

**Pipeline implication:** "How does the reader's attention distribute across code elements when only color varies?" Character-scale density requires a semantic color mapping.

**Derivation question:** "What if code comments visually receded and keywords visually advanced, creating a density gradient within code blocks?"

---

## COMPONENTS

---

### 14. Territory Tile -- COMPONENT

**CSS class(es):** `.territory-tile`, `.territory-tile::after`, `.territory-tile__marker`, `.territory-tile__name`, `.territory-tile__description`, `.territory-tile__badge`
**CSS lines:** 538-601
**HTML lines:** 1176-1229 (6 tiles in the hub)
**DOM structure:**
```html
<a href="#state" class="territory-tile reveal" role="gridcell" tabindex="0"
   aria-label="Navigate to State Management territory">
  <div class="territory-tile__marker"></div>
  <div class="territory-tile__name">State Management</div>
  <div class="territory-tile__description">
    useState, useReducer, and Context API...
  </div>
  <span class="territory-tile__badge">3 Concepts</span>
</a>
```

**Reader function:** A clickable card in the hub's territory grid, representing one spoke destination. Contains four slots: (1) square red marker (8x8px, no border-radius -- Soul Piece 5), (2) territory name in Instrument Serif italic 20px, (3) description in 13px secondary gray, (4) monospace badge with concept count. A solid-offset pseudo-element (`::after`) creates depth via a 4px-offset border (no box-shadow -- Soul compliant). Hover shifts border-color to red and background to subtle.

**Detection reasoning:** This is a Component because it is a reusable, multi-slot container with consistent visual treatment, used 6 times in the hub grid. It has defined slots (marker, name, description, badge) and a consistent structure. Matches calibration example #25 (Territory Tile from OD-006) and #26 (Solid Offset).

**Multi-channel coordination:** Four slots create the tile's information hierarchy: square marker (identity signal) -> serif italic name (display) -> body text description (detail) -> monospace badge (metadata). The solid offset `::after` with 3px border at 4px offset creates physical depth without violating box-shadow: none. Hover transition on border-color (0.15s) provides interactive feedback.

**Pipeline implication:** "How does a sparse hub present navigable destinations with enough information to choose?" The territory tile balances preview (what is in this spoke) with brevity (sparse zone constraint).

**Derivation question:** "What if each territory in the hub were represented by a card with a square marker, serif name, brief description, and concept count badge?"

---

### 15. Territory Grid -- COMPONENT

**CSS class(es):** `.territory-grid`
**CSS lines:** 532-536
**HTML lines:** 1174-1230
**DOM structure:**
```html
<div class="territory-grid" role="grid" aria-label="Territory navigation grid">
  <a href="#state" class="territory-tile" role="gridcell">...</a>
  <a href="#patterns" class="territory-tile" role="gridcell">...</a>
  <!-- ...4 more tiles... -->
</div>
```

**Reader function:** A CSS Grid container with `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` and 24px gaps, holding 6 territory tiles. Uses ARIA `role="grid"` with `role="gridcell"` on each tile, plus keyboard navigation via JavaScript (arrow keys move focus between tiles, respecting column count at current viewport width). This is the hub's primary navigation mechanism.

**Detection reasoning:** This is a Component because it is a structured container with defined layout behavior and accessibility patterns. It holds territory tiles in a responsive grid and adds spatial keyboard navigation (EXT-SPAT-014). Removing it would break the hub's spatial organization.

**Multi-channel coordination:** Grid gap (24px) creates even spacing between tiles. Auto-fit ensures the grid is responsive (2 columns at desktop, 1 at mobile). ARIA roles + keyboard handler create an accessible spatial navigation pattern. The grid itself embodies the "sparse hub" principle -- generous gaps and no content overflow.

**Pipeline implication:** "How should navigable destinations be laid out in a sparse hub zone?" The auto-fit grid with ARIA roles and keyboard navigation is a complete accessible navigation component.

**Derivation question:** "What if the hub's territory tiles were arranged in a responsive grid with keyboard spatial navigation?"

---

### 16. Spoke Section -- COMPONENT

**CSS class(es):** `.spoke`, `.spoke__heading`, `.spoke__intro`, `.spoke-grid`, `.spoke-content`, `.spoke-sidebar`
**CSS lines:** 610-698
**HTML lines:** 1240-1407 (Spoke 1), repeated for Spokes 2-6
**DOM structure:**
```html
<section class="spoke" id="state" aria-label="State Management territory">
  <nav class="breadcrumb">...</nav>
  <h2 class="spoke__heading">State Management</h2>
  <p class="spoke__intro">...</p>
  <div class="spoke-grid">
    <div class="spoke-content">
      <div class="spoke-section">...</div>
      <div class="spoke-section">...</div>
      <div class="callout callout--checkpoint">...</div>
    </div>
    <aside class="spoke-sidebar">
      <div class="sidebar-panel">...</div>
    </aside>
  </div>
  <a href="#hub" class="return-link">Return to Map</a>
</section>
```

**Reader function:** The primary content container for each territory. Each spoke follows an identical structure: breadcrumb -> heading -> intro paragraph -> content grid (3fr content + 1fr sidebar) -> return link. The spoke is an ISLAND (DD-003) -- self-contained, isolated from other spokes by 80px dividers. Uses `scroll-margin-top` for smooth scroll targeting from hub tiles.

**Detection reasoning:** This is a Component because it is a reusable multi-slot container used identically 6 times. It has defined slots (breadcrumb, heading, intro, content grid with sidebar, return link) and consistent visual treatment. Each spoke is a modular entity (EXT-SPAT-012).

**Multi-channel coordination:** The spoke's named grid areas (`grid-template-areas: "doctrine references"`) create semantic layout zones. At 768px, the grid collapses to single-column with content above references. The 3fr/1fr ratio ensures the content zone dominates while the sidebar provides supplementary material.

**Pipeline implication:** "How does a dense content zone structure its content with a primary area and supplementary sidebar?" The spoke pattern separates doctrine (main content) from references (sidebar), a layout pattern for any documentation with primary + supporting content.

**Derivation question:** "What if each territory were a self-contained island with its own heading, intro, content grid with sidebar, and exit mechanism?"

---

### 17. Spoke Content Section -- COMPONENT

**CSS class(es):** `.spoke-section`, `.spoke-section__heading`, `.spoke-section p`
**CSS lines:** 700-717
**HTML lines:** 1262-1298 (first occurrence), repeated multiple times per spoke
**DOM structure:**
```html
<div class="spoke-section reveal">
  <h3 class="spoke-section__heading">useState: Local Component State</h3>
  <p>The simplest state primitive...</p>
  <p>The key mental model...</p>
  <div class="code-block">...</div>
</div>
```

**Reader function:** A subsection within a spoke's content area. Contains a heading (Instrument Serif italic, subsection size 22px) and body paragraphs (Inter 15px, max-width 65ch, line-height 1.7). May include code blocks, tables, or flowcharts as children. Separated from sibling sections by 32px bottom margin.

**Detection reasoning:** This is a Component because it is a reusable content container with a consistent heading+body structure, used 3-4 times per spoke (18+ total across all 6 spokes). It has defined slots (heading, paragraphs, optional code/table children).

**Multi-channel coordination:** Heading in serif italic creates the subsection boundary. Body text at 65ch max-width maintains reading comfort. The 32px bottom margin creates section-level separation within the spoke.

**Pipeline implication:** "How do subsections within a dense content zone maintain readability?" The spoke-section pattern provides consistent heading+body structure at the subsection level.

**Derivation question:** "What if each subsection within a spoke had a serif heading and constrained-width body paragraphs?"

---

### 18. Sidebar Panel -- COMPONENT

**CSS class(es):** `.sidebar-panel`, `.sidebar-panel__title`, `.sidebar-panel__list`, `.sidebar-panel__note`
**CSS lines:** 720-751
**HTML lines:** 1388-1401 (first occurrence), repeated per spoke
**DOM structure:**
```html
<div class="sidebar-panel">
  <div class="sidebar-panel__title">Key APIs</div>
  <ul class="sidebar-panel__list">
    <li>useState</li>
    <li>useReducer</li>
    <li>createContext</li>
    <li>useContext</li>
  </ul>
  <div class="sidebar-panel__note">
    For server state (data from APIs), see the Data Fetching territory...
  </div>
</div>
```

**Reader function:** A sticky sidebar reference panel positioned in the spoke's 1fr grid column. Contains three slots: monospace uppercase title, square-bulleted list (list-style: square), and a note with a subtle top border. The sticky positioning (`top: 24px`) keeps the panel visible as the reader scrolls through the adjacent content. The 4px left border creates alignment with the callout system's left-border language.

**Detection reasoning:** This is a Component because it is a reusable, multi-slot container used 6 times (one per spoke). It has defined slots (title, list, note) and consistent visual treatment. The sticky positioning makes it functionally distinct from a static sidebar element.

**Multi-channel coordination:** Monospace uppercase title signals metadata/reference. Square bullet markers (list-style: square) maintain the design system's square signal system. The 4px left border in `--color-border` creates a visual connection to the callout system. The 12px separator between list items (line-height 1.8) and the bordered note create internal hierarchy.

**Pipeline implication:** "How does supplementary reference material accompany primary content without interrupting the reading flow?" The sticky sidebar pattern keeps reference data accessible during deep reading.

**Derivation question:** "What if each spoke had a sticky sidebar with key references, tools, or related links that stayed visible during scrolling?"

---

### 19. Callout (Family System) -- COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--checkpoint`
**CSS lines:** 779-829
**HTML lines:** 1365-1382 (first occurrence), repeated throughout
**DOM structure:**
```html
<div class="callout callout--tip reveal">
  <div class="callout__label">Tip</div>
  <div class="callout__body">
    If you are starting a new project...
  </div>
</div>
```

**Reader function:** A family of 2-zone callout components (label + body) with 4px left borders in variant-specific accent colors. Five variants: info (blue), tip (green), gotcha (coral), essence (purple, with Instrument Serif italic body), checkpoint (green). Max 2 callouts per spoke section (R1-008 scarcity principle). The callout system is the design system's standard annotation language -- the label tells the reader what kind of annotation this is, and the color reinforces it.

**Detection reasoning:** This is a Component because it is a reusable, multi-slot container with defined structure (label + body) and 5 color variants. Used 12 times across 6 spokes (exactly 2 per spoke, honoring the scarcity constraint). The `--essence` variant has a special body treatment (serif italic), making it a sub-variant with its own reading register.

**Multi-channel coordination:** Left border color encodes variant type (blue/green/coral/purple). Monospace uppercase label names the variant. Body text is Inter 14px except for `--essence` which shifts to Instrument Serif italic 16px. Background is consistently `--color-border-subtle` across all variants, so color differentiation is carried entirely by the left border.

**Pipeline implication:** "How do annotations (tips, warnings, summaries, key insights) maintain consistency while encoding their semantic type?" The callout family with 4px left-border color encoding is reused across all OD explorations.

**Derivation question:** "What if every annotation type shared a consistent 2-zone structure (label + body) but used left-border color to encode semantic category?"

---

### 20. Code Block -- COMPONENT

**CSS class(es):** `.code-block`, `.code-block__header`, `.code-block__lang`, `.code-block__copy`, `.code-block__line`, `.code-block__num`
**CSS lines:** 835-900
**HTML lines:** 1278-1297 (first occurrence), repeated 5 times across spokes
**DOM structure:**
```html
<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__lang">tsx</span>
    <button class="code-block__copy" onclick="...">Copy</button>
  </div>
  <pre>
    <span class="code-block__line">
      <span class="code-block__num"> 1</span>
      <span class="code--comment">// Comment</span>
    </span>
    ...
  </pre>
</div>
```

**Reader function:** Dark-background (#1A1A1A) code container with a header showing language label and copy button, followed by numbered lines with syntax highlighting. The 3px structural border, monospace typography at 14px, and line-height 1.5 create a dense reading zone within the spoke. The copy button uses inline onclick for clipboard functionality.

**Detection reasoning:** This is a Component because it is a reusable multi-slot container (header with lang + copy, numbered lines with syntax highlighting) used 5 times. It has consistent visual treatment and defined structure.

**Multi-channel coordination:** Dark background inverts the page's figure-ground, signaling "this is code, not prose." Header separator (1px border-bottom) divides metadata from content. Line numbers in secondary gray create a gutter. Syntax highlighting colors (see Gesture #13) create the character-scale density wave.

**Pipeline implication:** "How does code content create a distinct reading zone within a prose-heavy page?" The dark-background inversion is the primary signal that the reader has entered a different content type.

**Derivation question:** "What if code blocks were dark-background islands with headers showing language and copy functionality?"

---

### 21. Decision Table -- COMPONENT

**CSS class(es):** `.decision-table`, `.decision-table table`, `.decision-table th`, `.decision-table td`, `.decision-table code`
**CSS lines:** 905-942
**HTML lines:** 1487-1529 (first occurrence), 1657-1694 (second occurrence)
**DOM structure:**
```html
<div class="decision-table">
  <table>
    <thead>
      <tr><th>Pattern</th><th>Flexibility</th><th>Type Safety</th>...</tr>
    </thead>
    <tbody>
      <tr><td><strong>Compound Components</strong></td><td>High</td>...</tr>
      ...
    </tbody>
  </table>
</div>
```

**Reader function:** A comparison table for decision-making within spoke content. Monospace uppercase headers with 3px bottom border (structural), data cells with 1px subtle separators (data-level), and a 3px bottom border on the last row (closing structural). Used for pattern comparison (Spoke 2) and cache strategy comparison (Spoke 3).

**Detection reasoning:** This is a Component because it is a reusable structured container with defined slots (header row, data rows) and consistent visual treatment, used twice. It serves content delivery (comparison data), not orientation.

**Multi-channel coordination:** 3px/1px border weight creates two-level hierarchy (structural headers vs data separators). Monospace uppercase headers signal "category labels." Data cells at 13px body font create a compact reading zone. Inline `<code>` elements use the code styling for literal values.

**Pipeline implication:** "How do comparison tables support decision-making within dense content zones?" The decision table is a standard component for any spoke that presents trade-off analysis.

**Derivation question:** "What if comparison data were presented in a table with structural header borders and data-level separators?"

---

### 22. Flowchart (Text-Based) -- COMPONENT

**CSS class(es):** `.flowchart`, `.flowchart__title`
**CSS lines:** 947-968
**HTML lines:** 1353-1361 (State Selection), 1825-1836 (Performance Optimization)
**DOM structure:**
```html
<div class="flowchart">
  <span class="flowchart__title">State Selection Flowchart</span>
Is state used by ONE component?
  YES --> useState
  NO  --> Is the logic complex (3+ actions)?
           YES --> useReducer
           NO  --> Do 3+ components need this data?
                    YES --> Context + useReducer
                    NO  --> Lift state to common parent
</div>
```

**Reader function:** A monospace text-based decision tree rendered in a bordered container with subtle background. The `white-space: pre` preserves indentation, creating a visual decision tree using ASCII-style arrows (`-->`). The monospace title in uppercase signals "this is a structured reference." Used twice (state selection and performance optimization).

**Detection reasoning:** This is a Component because it is a reusable container with defined structure (title + preformatted decision tree) used twice. It is distinct from code blocks because it uses the page's border-subtle background instead of dark background, signaling "this is a reference diagram, not executable code."

**Multi-channel coordination:** Border (3px structural) + background (subtle, not dark) + monospace font + pre-formatting = "reference diagram" visual language. The title in monospace uppercase with secondary color signals metadata. The ASCII tree structure uses indentation as the visual hierarchy.

**Pipeline implication:** "How do decision trees appear in documentation without requiring SVG or image assets?" The text-based flowchart is a pure-CSS component for decision paths.

**Derivation question:** "What if decision logic were presented as a preformatted text tree that the reader can scan for their specific path?"

---

### 23. Return-to-Map Link -- COMPONENT

**CSS class(es):** `.return-link`
**CSS lines:** 754-771
**HTML lines:** 1406, 1569, 1736, 1879, 2015, 2171
**DOM structure:**
```html
<a href="#hub" class="return-link">&larr; Return to Map</a>
```

**Reader function:** A monospace, uppercase, 3px-bordered link at the bottom of every spoke, providing the hub-return mechanism. The left arrow entity (`&larr;`) signals direction. Hover inverts to dark background with white text. Functions as the spoke's exit mechanism, completing the WAVE cycle back to sparse.

**Detection reasoning:** This is a Component (borderline Instrument) because it is a reusable interactive element with consistent structure, used 6 times. I classify it as Component rather than Instrument because its primary function is navigation action (return to hub), not orientation metadata. However, its consistent placement at every spoke exit also serves as a positional signal ("you have reached the end of this territory").

**Multi-channel coordination:** Monospace uppercase + letter-spacing 0.08em signals "navigation action." 3px border + hover inversion creates interactive feedback. Left arrow glyph signals directionality. The component bridges the dense spoke back to the sparse hub.

**Pipeline implication:** "How does the reader exit a dense spoke and return to the sparse hub?" Every spoke in a hub-spoke architecture needs an explicit return mechanism.

**Derivation question:** "What if every spoke ended with a visually distinct return link that pointed back to the hub?"

---

### 24. Spoke Divider -- COMPONENT

**CSS class(es):** `.spoke-divider`
**CSS lines:** 616-620
**HTML lines:** 1238, 1414, 1577, 1744, 1887, 2023, 2179
**DOM structure:**
```html
<div class="spoke-divider"></div>
```

**Reader function:** A 1px horizontal line with 80px vertical margin on each side, creating a 161px total isolation gap between spokes. This is the ISLANDS isolation gap (DD-003) -- it visually separates each spoke as a self-contained content island. The gap is large enough to create a perceptual "breathing" pause between territories.

**Detection reasoning:** This is a Component because it is a reusable structural element used 7 times (between hub and spoke 1, between each spoke pair, and before footer). It is a minimal component -- a single element with no slots -- but its consistent reuse and specific structural role warrant component classification.

**Multi-channel coordination:** 1px line in `--color-border` is visually subtle. The 80px margins on each side are the primary signal -- the whitespace IS the isolation gap. The combination of thin line + massive margin creates "breathing" at the border.

**Pipeline implication:** "How do self-contained content islands achieve visual isolation without heavy borders?" Generous whitespace (80px+) around a subtle line is more effective than a heavy border.

**Derivation question:** "What if content islands were separated by thin lines with generous whitespace, creating breathing pauses between territories?"

---

### 25. Footer Link Card -- COMPONENT

**CSS class(es):** `.footer-link`, `.footer-link__name`
**CSS lines:** 986-1008
**HTML lines:** 2191-2214 (6 cards in footer grid)
**DOM structure:**
```html
<a href="#state" class="footer-link">
  <span class="footer-link__name">State Management</span>
  useState, useReducer, Context API
</a>
```

**Reader function:** A compact link card in the footer grid, each representing one territory. Contains a serif italic name (15px) and a plain-text summary (13px secondary gray). Bordered with 1px subtle border, hover shifts to red border. A more compact version of the hub's territory tiles -- no marker, no badge, no solid offset.

**Detection reasoning:** This is a Component because it is a reusable multi-slot container (name + summary) used 6 times in the footer grid. It is a deliberate simplification of the Territory Tile for the footer context.

**Multi-channel coordination:** Serif italic name creates the same "named destination" signal as the territory tiles, but at smaller scale. The 1px border (vs 3px on territory tiles) signals "lighter weight." Hover border-color transition to red provides interactive feedback.

**Pipeline implication:** "How does a return-to-hub summary present territories more compactly than the original hub?" The footer link card strips the territory tile to its essentials: name + one-line summary.

**Derivation question:** "What if the footer re-presented all territories as minimal link cards, offering a compact re-navigation opportunity?"

---

### 26. Essence Callout (Variant) -- COMPONENT

**CSS class(es):** `.callout--essence`, `.callout--essence .callout__body`
**CSS lines:** 815-824
**HTML lines:** 1376-1382, 2132-2139
**DOM structure:**
```html
<div class="callout callout--essence reveal-delay-1">
  <div class="callout__label">Essence</div>
  <div class="callout__body">
    Start with the simplest tool that works. Complexity is not a feature;
    it is a cost paid for capability you actually need.
  </div>
</div>
```

**Reader function:** A purple-bordered callout variant where the body text shifts to Instrument Serif italic at 16px (vs Inter 14px for all other callout bodies). This font shift signals "this is a key insight, not just a note" -- the serif italic creates a pull-quote register within the callout structure. Used 2 times (Spoke 1 and Spoke 6).

**Detection reasoning:** This is a Component variant because it extends the callout family with a distinct body treatment. I call it out separately from the general callout system (finding #19) because the Instrument Serif italic body is a significant visual differentiation that creates a different reading register. The essence callout is closer to R1-018 (Pull Quotes) than to the other callout types.

**Multi-channel coordination:** Purple left border (accent-purple) + serif italic body at 16px creates a "wisdom/insight" register distinct from the informational register of other callout types. The font shift in the body is the key differentiator.

**Pipeline implication:** "How does a key philosophical insight stand apart from practical tips and warnings?" The font-family shift in the body (not just color) creates a stronger perceptual distinction.

**Derivation question:** "What if the most important insights used a serif italic body to create a pull-quote-like reading register within the callout structure?"

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** Yes. I read lines 1-2284 in chunks of 300 lines each (8 reads total). I read all CSS (lines 174-1081), all HTML (lines 1083-2222), and all JavaScript (lines 2228-2281).

2. **Am I identifying elements at the DOM level?** Yes. Every finding references specific CSS classes, line numbers for both CSS and HTML, and includes the DOM structure. I am not working at the abstract level -- each finding is grounded in actual elements.

3. **Could I have missed subtle gestures?** The zone background encoding (Gesture #11) was the subtlest finding -- three nearly identical background colors (FEF9F5 vs FFFFFF vs FAF5ED) that encode density zones. I also carefully checked for gestures that span element boundaries rather than living in single classes. The WAVE oscillation gesture (#8) and the section-scale arc (#9) are multi-element gestures that could easily be missed by someone only looking at individual CSS classes.

4. **Am I applying the reader-function test honestly?** I believe so. The Checkpoint Callouts (#6) were the hardest call -- they contain text content, but I classified them as Instruments because removing them would lose the reader's self-assessment ability, not content. The Return-to-Map Link (#23) was another borderline case -- I classified it as Component because its primary function is navigation action, though it also serves as a positional signal.

5. **Did I check for pseudo-elements?** Yes. I found `.territory-tile::after` (the solid offset, part of Component #14) and checked `::selection` (lines 251-254, which is styling -- red selection highlight -- not an instrument or gesture). No `::first-letter` or `::before` pseudo-elements are used in this file.

6. **Did I check responsive breakpoints?** Yes. Three media queries: (1) `@media (max-width: 768px)` collapses spoke-grid to single column (line 691-698), (2) `@media (max-width: 1200px)` hides the wave-indicator (line 1062-1064), (3) `@media print` hides skip-link, nav, wave-indicator and shows URLs after links (lines 1066-1071). The wave-indicator disappearing at 1200px is notable -- the scroll position instrument is only available on wide viewports.

7. **Am I distinguishing between "styling" and "instruments/gestures"?** Yes. I excluded: `::selection` (styling), `.skip-link` (accessibility infrastructure, not a reader-experience instrument), `.inline-code` (styling), general body/reset styles, and the smooth scroll JavaScript (UI behavior, not a reading register shift). The `.code-block__copy` button is part of the code block component, not a separate instrument.

---

## SUMMARY

| Category | Count | Items |
|----------|-------|-------|
| **Instruments** | 7 | Wave Visualization, Wave Indicator, Exploration Header, Breadcrumb, Meta Chips, Checkpoint Callouts, Footer Summary |
| **Gestures** | 6 | Hub-to-Spoke WAVE, Section-Scale Arc, Breadcrumb Font Shift, Zone Background Encoding, Scroll-Triggered Reveal, Code Sparse-Dense |
| **Components** | 13 | Territory Tile, Territory Grid, Spoke Section, Spoke Content Section, Sidebar Panel, Callout Family, Code Block, Decision Table, Flowchart, Return Link, Spoke Divider, Footer Link Card, Essence Callout |
| **TOTAL** | **26** | |
