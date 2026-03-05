# AD-005-choreography.html — Instrument / Gesture / Component Catalog

**File:** `design-system/axis/AD-005-choreography.html`
**Lines:** 1846 (47 comment header + 983 CSS lines + ~816 HTML lines)
**Axis Pattern:** Choreography (hub-spoke with cinematic shot progression)
**Paired OD:** OD-005-spatial (WAVE+ISLANDS density)

---

## INSTRUMENTS

### 1. Meta Line — INSTRUMENT

**CSS class(es):** `.meta-line`, `.version-badge`
**CSS lines:** 253–274 (`.meta-line` 253–263, `.version-badge` 265–274)
**HTML lines:** 994–998
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION AD-005</span>
  <span>AXIS: CHOREOGRAPHY</span>
  <span class="version-badge">v1 enriched</span>
</div>
```

**Reader function:** Orients the reader in the exploration taxonomy — which exploration (AD-005), which axis (Choreography), and which version (v1 enriched). The version badge uses monospace font inside a micro-border box, creating a code-like "tag" separate from the display-serif heading that follows.

**Detection reasoning:** This is pure metadata — removing it, the reader loses awareness of WHICH exploration they are reading and its status. It does not structure content or shift reading register; it identifies the document.

**Multi-channel coordination:** Three visual channels: (1) uppercase letter-spacing 0.15em for category context, (2) monospace font-family for the version badge, (3) 1px border on badge to visually separate the version from the category labels. All at `--type-meta` (12px) to keep them subordinate to the title.

**Pipeline implication:** "How does the reader know what document they're reading before they read the title?" Any exploration file needs a taxonomic anchor.

**Derivation question:** "What if the reader needs to know the exploration's identity, axis type, and version status at a glance before committing to reading?"

---

### 2. Progress Bar — INSTRUMENT

**CSS class(es):** `.progress-bar`, `.progress-segment`, `.progress-segment--active`, `.progress-segment--hub`, `.progress-segment--spoke`
**CSS lines:** 703–728
**HTML lines:** 1039–1044, 1133–1138, 1393–1398, 1523–1528
**DOM structure:**
```html
<div class="progress-bar" role="img" aria-label="Reading progress: Hub section active">
  <div class="progress-segment progress-segment--hub progress-segment--active"></div>
  <div class="progress-segment progress-segment--spoke"></div>
  <div class="progress-segment progress-segment--spoke"></div>
  <div class="progress-segment progress-segment--spoke"></div>
</div>
```

**Reader function:** Shows the reader their position within the hub-spoke reading sequence. Four segments (1 hub + 3 spokes) with proportional widths (hub flex:1, spoke flex:3) — the active segment is filled with `--color-primary` (#E83025), inactive segments are `--color-border-subtle` (#F0EBE3). Each of the 4 instances activates a different segment, creating a progression through the page.

**Detection reasoning:** This is a pure wayfinding device. Remove it and the reader loses positional awareness within the multi-section choreographic sequence. It does not hold content or shift reading register.

**Multi-channel coordination:** Three channels: (1) proportional width encoding (hub narrow vs. spoke wide communicates relative content density), (2) color binary (active red vs. inactive bone), (3) spatial position (which segment is filled shows "you are here"). All at 8px height, zero border-radius.

**Pipeline implication:** "How does the reader know where they are in a multi-section page with alternating sparse/dense zones?" Any hub-spoke or multi-section layout needs positional markers.

**Derivation question:** "What if the page itself showed a miniature map of its own density structure, with proportional segment widths reflecting the hub-spoke rhythm?"

---

### 3. Breadcrumb Navigation — INSTRUMENT

**CSS class(es):** `.breadcrumb`, `.breadcrumb__separator`, `.breadcrumb__current`
**CSS lines:** 742–768
**HTML lines:** 1126–1130, 1386–1390, 1516–1520
**DOM structure:**
```html
<nav class="breadcrumb" aria-label="Hub-spoke navigation">
  <span>Hub</span>
  <span class="breadcrumb__separator" aria-hidden="true">&#9656;</span>
  <span class="breadcrumb__current">CSS Transition Choreography</span>
</nav>
```

**Reader function:** Shows the reader's current position within the hub-spoke topology — they have "descended" from the Hub overview into a specific spoke territory. The separator triangle (&#9656;) signals directionality. The current spoke name uses font-weight 600 to distinguish it from the "Hub" label.

**Detection reasoning:** This is wayfinding metadata. Remove it and the reader loses awareness that they are inside a spoke and which territory they descended into. It does not structure content.

**Multi-channel coordination:** Three channels: (1) font-weight differentiation (500 for "Hub" vs. 600 for current spoke), (2) color differentiation (secondary gray for "Hub" vs. primary text color for current), (3) directional separator in primary red encoding the descent direction.

**Pipeline implication:** "How does the reader know they've left the overview and entered a specific territory?" Any hub-spoke layout needs a breadcrumb trail.

**Derivation question:** "What if the reader could always see where they are in the hub-spoke hierarchy while reading deep inside a spoke?"

---

### 4. Axis Transition Marker — INSTRUMENT

**CSS class(es):** `.axis-transition`, `.axis-transition--ascending`, `.axis-transition__inner`, `.axis-transition__label`, `.axis-transition__title`
**CSS lines:** 667–701
**HTML lines:** 1111–1116, 1504–1509
**DOM structure:**
```html
<div class="axis-transition" aria-hidden="true">
  <div class="axis-transition__inner">
    <div class="axis-transition__label">Axis Direction Change</div>
    <div class="axis-transition__title">Descending into Detail</div>
  </div>
</div>
```

**Reader function:** Marks the axis direction change between hub (sparse, horizontal scanning) and spoke (dense, vertical reading). The label announces what is happening ("Axis Direction Change") and the title describes the direction ("Descending into Detail" or "Ascending to Synthesis"). The diagonal clip-path creates visual momentum without animation.

**Detection reasoning:** This is a wayfinding/orientation device. The text content is purely navigational ("Axis Direction Change") and the visual clip-path encodes direction. Remove it and the reader loses the signal that the reading mode is changing. It does not hold article content.

**Multi-channel coordination:** Three channels: (1) clip-path polygon encoding direction (descending vs. ascending), (2) background zone color shift to `--axis-zone-transition` (#FAF5ED), (3) centered meta-label text at 12px uppercase. The clip-path carries the heaviest semantic load — the diagonal angle itself IS the directional signal.

**Pipeline implication:** "How does the reader know when the reading axis is about to change direction?" Any choreographic layout needs explicit transition markers.

**Derivation question:** "What if axis direction changes were physically visible as diagonal shapes that signal 'descending into detail' or 'ascending to overview'?"

---

### 5. Axis Interstitial — INSTRUMENT

**CSS class(es):** `.axis-interstitial`, `.axis-interstitial__inner`, `.axis-interstitial__label`
**CSS lines:** 809–831
**HTML lines:** 1312–1316, 1374–1378, 1643–1647
**DOM structure:**
```html
<div class="axis-interstitial" aria-hidden="true">
  <div class="axis-interstitial__inner">
    <div class="axis-interstitial__label">Pausing to Measure the Wave</div>
  </div>
</div>
```

**Reader function:** A lightweight transition marker between major sections that are not separated by a full diagonal axis-transition. Provides a brief cognitive pause with a poetic label ("Pausing to Measure the Wave", "Returning to Detail", "Gathering the Threads") that previews the upcoming section.

**Detection reasoning:** This is a navigation device. The labels are meta-commentary about the reading journey, not article content. Remove them and the reader loses the gentle pacing signals between sections. The `aria-hidden="true"` confirms this is a visual pacing device, not semantic content.

**Multi-channel coordination:** Two channels: (1) background zone shift to `--axis-zone-transition` (#FAF5ED) with 3px structural borders top and bottom, (2) centered uppercase meta-label text at 12px. Simpler than the full axis-transition — no clip-path, no title, just a label.

**Pipeline implication:** "What if not every section transition needs a dramatic diagonal, but still needs a breathing pause?"

**Derivation question:** "What if there were lightweight interstitials between sections that give the reader a moment to reset before the next content zone?"

---

### 6. Chapter Divider — INSTRUMENT

**CSS class(es):** `.chapter-divider`
**CSS lines:** 803–807
**HTML lines:** 1654, 1707
**DOM structure:**
```html
<div class="chapter-divider"></div>
```

**Reader function:** A 3px structural horizontal rule that marks major topic boundaries within the synthesis section. It is the simplest possible boundary marker — a single border-top line with 32px vertical spacing. It separates the synthesis section's major subsections.

**Detection reasoning:** This is a pure boundary marker. It has no content, no text — just a line. Remove it and the reader loses the visual signal that a new subsection is starting. It is wayfinding, not content.

**Multi-channel coordination:** Single channel: 3px solid `--color-border` (#E0D5C5) border-top. Minimal by design — the chapter divider is the quietest possible section separator.

**Pipeline implication:** "How do you mark topic boundaries within a section without the overhead of a full breathing zone or axis transition?"

**Derivation question:** "What if some section boundaries need only a thin line, not a full zone shift?"

---

### 7. Page Closing — INSTRUMENT

**CSS class(es):** `.page-closing`, `.page-closing__inner`, `.page-closing__rule`, `.page-closing__mark`
**CSS lines:** 832–856
**HTML lines:** 1796–1801
**DOM structure:**
```html
<footer class="page-closing">
  <div class="page-closing__inner">
    <div class="page-closing__rule"></div>
    <div class="page-closing__mark">End of Exploration AD-005</div>
  </div>
</footer>
```

**Reader function:** Signals that the exploration has ended. A centered 80px-wide, 3px-tall red rule (--color-primary) acts as a visual "full stop" followed by an italic Instrument Serif label. It prevents the reader from wondering if content was cut off.

**Detection reasoning:** This is document-termination metadata. Remove it and the reader loses the explicit "this is the end" signal. It does not hold article content.

**Multi-channel coordination:** Three channels: (1) 80px red horizontal rule as a visual full-stop (using `--color-primary`), (2) Instrument Serif italic font shift for the closing mark (display font in body context = ceremonial register), (3) centered alignment contrasting with the left-aligned body text. The red rule is the primary signal; the text is confirmation.

**Pipeline implication:** "How does the reader know the exploration is finished?" Every long-form document needs a terminal marker.

**Derivation question:** "What if the end of the page had a ceremonial closing that uses the display font and primary color to signal finality?"

---

### 8. Density Table — INSTRUMENT

**CSS class(es):** `.density-table`
**CSS lines:** 972–982
**HTML lines:** 1168–1208, 1334–1369
**DOM structure:**
```html
<table class="density-table">
  <thead>...</thead>
  <tbody>
    <tr>
      <td>Hub</td>
      <td>Sparse (~200 words/viewport)</td>
      <td>Display serif at section scale</td>
      <td>Horizontal (grid montage)</td>
    </tr>
    ...
  </tbody>
</table>
```

**Reader function:** Maps the WAVE density oscillation in tabular form — showing Phase (Hub/Transition/Spoke/Return), Density level, Typography register, and Scanning Direction. The first-column values use monospace font at code size, making them function like technical identifiers rather than prose.

**Detection reasoning:** While this is a table (component), its content is metadata about the page's own density structure — it makes the page self-aware by explicitly labeling its own rhythm. The monospace first-column treatment reinforces that these are technical measurements, not narrative content. This functions as an instrument because it describes the page's own architecture.

**Multi-channel coordination:** Two channels: (1) monospace font-family + code-size in first column for technical-identifier treatment, (2) standard body font for descriptive columns. The font shift between columns encodes "identifier vs. description."

**Pipeline implication:** "What if the page explicitly documented its own density rhythm as a reference table?"

**Derivation question:** "What if the WAVE oscillation pattern were measured and displayed as a data table so the reader understands the structural logic?"

---

## GESTURES

### 9. Diagonal Clip-Path Direction Encoding — GESTURE

**CSS class(es):** `.axis-transition` (descending), `.axis-transition--ascending` (ascending)
**CSS lines:** 670–679
**HTML lines:** 1111 (descending), 1504 (ascending)

**Reader function:** The clip-path polygon angle encodes reading direction. Descending diagonal (`polygon(0 0, 100% 0, 100% 85%, 0 100%)`) cuts the bottom-right corner upward, drawing the eye downward — signaling "descending into detail." Ascending diagonal (`polygon(0 15%, 100% 0, 100% 100%, 0 100%)`) cuts the top-left corner downward, drawing the eye upward — signaling "ascending to overview." The direction of the cut IS the meaning.

**Detection reasoning:** This is not a container or a metadata device — it is a CSS-encoded shift in how you read. The polygon coordinates constitute a coordinated visual instruction: "your reading direction is changing." Remove the clip-path and the transition zone becomes a flat rectangle with no directional signal.

**Multi-channel coordination:** Two CSS properties shift together: (1) `clip-path: polygon()` coordinates change between descending and ascending variants, (2) the visual angle created by the polygon coordinates creates perceived movement direction. At mobile (<768px), both variants collapse to `clip-path: none` with a horizontal 3px border — the directional gesture degrades gracefully to a simpler boundary signal.

**Pipeline implication:** "How do you visually signal that the reading axis is changing direction without animation?"

**Derivation question:** "What if the angle of a section divider itself communicated whether the reader is descending into detail or ascending to synthesis?"

---

### 10. Hub-to-Spoke Background Zone Alternation — GESTURE

**CSS class(es):** `.page-container` (hub zone, inherits `--color-background`), `.spoke-content` (spoke zone, `--axis-zone-primary`), `.breathing-zone` (transition zone, `--axis-zone-transition`), `.axis-interstitial` (interstitial zone, `--axis-zone-transition`)
**CSS lines:** 296–300 (page-container), 732–735 (spoke-content), 790–796 (breathing-zone), 810–816 (axis-interstitial)
**HTML lines:** 1016 (hub), 1123/1384/1514 (spokes), 1322 (breathing), 1312/1374/1643 (interstitials)

**Reader function:** Background color alternates in a WAVE pattern as the reader scrolls: warm cream (#FEF9F5, hub/sparse) → white (#FFFFFF, spoke/dense) → warm beige (#FAF5ED, breathing/transition) → white (spoke) → cream (synthesis). The background shift signals density zone changes without any text or label — the color itself IS the density indicator.

**Detection reasoning:** This is a coordinated multi-property shift across the page, not a single element. The reader's perception shifts from "scanning overview" to "reading deeply" partly because the background temperature changes. The zones are not structural containers — they are register-shift signals.

**Multi-channel coordination:** Four CSS properties shift together across zones: (1) `background` color (cream → white → beige → white → cream), (2) `padding` values (hub: 48px 24px, spoke: 48px 24px, breathing: 48px 24px, interstitial: 32px 24px), (3) border treatment (breathing zone has 3px borders top+bottom, hub has none, spokes have none), (4) max-width constraint (all constrained to 1100px). These all follow ONE rule: density zone identity.

**Pipeline implication:** "How does the reader know which density zone they're in without reading explicit labels?"

**Derivation question:** "What if background color temperature mapped directly to content density — warm for sparse scanning zones, cool for dense reading zones?"

---

### 11. Featured Tile Typography Scale-Up — GESTURE

**CSS class(es):** `.territory-tile--featured .territory-tile__title` vs. `.territory-tile__title`
**CSS lines:** 643–651
**HTML lines:** 1050–1059 (featured tile) vs. 1061–1066 (standard tile)

**Reader function:** The featured territory tile's title uses `--type-section` (26px) while standard tiles use `--type-subsection` (22px). This size differential, combined with the 2-column span and 4px red left-border, creates a visual hierarchy within the hub grid — the featured tile reads as "primary territory" and the others as "secondary territories."

**Detection reasoning:** This is a typography register shift — the same element class (`.territory-tile__title`) renders at a different size based on the featured modifier. It changes how aggressively the reader's eye is drawn to that tile. It is not a container (the tile itself is the container) and not metadata.

**Multi-channel coordination:** Three properties shift together on the featured tile: (1) `font-size` escalates from `--type-subsection` to `--type-section`, (2) `grid-area` spans 2 columns (vs. 1), (3) `border-left` adds 4px primary red accent. All three encode one meaning: "this tile is the primary territory."

**Pipeline implication:** "How do you create visual hierarchy within a uniform grid of tiles without breaking the grid structure?"

**Derivation question:** "What if one tile in the grid were visually promoted through coordinated size, span, and border changes to signal 'start here'?"

---

### 12. Spoke Section Typography Cascade — GESTURE

**CSS class(es):** `.spoke-section h2`, `.spoke-section h3`, plus body `p` within spokes
**CSS lines:** 771–781
**HTML lines:** 1141–1157 (h2 intro), 1161–1209 (h3 detail), 1213–1263 (h3 detail)

**Reader function:** Within each spoke, typography creates a "shot progression" (cinematic metaphor): h2 at `--type-section` (26px) for the "medium shot" introduction, h3 in italic at `--type-subsection` (22px) for "close-up" detail sections, and body text at `--type-body` (16px) for deep content. This cascading scale mirrors the cinematic wide→medium→close-up progression.

**Detection reasoning:** This is a coordinated register shift across multiple elements. The h2/h3/body scale within spokes is not just styling — it encodes a reading-pace instruction: "slow down, you're going deeper." The italic on h3 (required by anti-patterns/registry.md) adds a second channel.

**Multi-channel coordination:** Three properties shift together across the heading cascade: (1) `font-size` decreases (26px → 22px → 16px), (2) `font-style` adds italic at h3 level, (3) `margin-bottom` decreases (16px for h2, 12px for h3). These encode one rule: "depth increases as type scale decreases."

**Pipeline implication:** "How do you signal increasing depth within a spoke section using only typography?"

**Derivation question:** "What if heading scale within a content section mirrored cinematic shot progression — wider type for overview, smaller type for detail?"

---

### 13. Territory Tile Hover Border Assertion — GESTURE

**CSS class(es):** `.territory-tile` (default), `.territory-tile:hover`
**CSS lines:** 606–618
**HTML lines:** 1050–1101 (all tiles)

**Reader function:** On hover, the territory tile's border color transitions from `--color-border` (#E0D5C5) to `--color-primary` (#E83025) over 0.3s. This is a flat state assertion — no lift, no scale, no shadow. The border becomes "alert" to signal interactivity. The transition timing uses `--transition-standard`.

**Detection reasoning:** This is a CSS-encoded reading register shift at the interaction level. The hover changes how the reader perceives the tile: from "passive content card" to "something I can engage with." It is not structural (the tile stays the same shape and size) and not metadata.

**Multi-channel coordination:** Single property transition: `border-color` from muted (#E0D5C5) to primary red (#E83025). Deliberately single-channel — soul compliance prohibits transform, box-shadow, or any other hover effect that implies physicality. The constraint makes the single border-color shift carry all the interactive meaning.

**Pipeline implication:** "How do you signal interactivity on a flat card without violating ANTI-PHYSICAL identity?"

**Derivation question:** "What if hover state were reduced to exactly one property change — border color — making the boundary itself the interactive signal?"

---

### 14. Scroll-Triggered Reveal — GESTURE

**CSS class(es):** `.reveal-on-scroll`, `.js-enabled .reveal-on-scroll`, `.js-enabled .reveal-on-scroll.revealed`
**CSS lines:** 935–953
**HTML lines:** (no elements in HTML use this class — it is defined as available infrastructure)
**Script lines:** 1806–1829

**Reader function:** Elements with this class start visible (progressive enhancement), then when JS is available, they begin hidden (opacity: 0, translateY: 20px) and animate to visible (opacity: 1, translateY: 0) when they scroll into view. The IntersectionObserver fires once and unobserves — the element arrives and stays. Respects `prefers-reduced-motion`.

**Detection reasoning:** This is a coordinated multi-property reading-register shift. Two CSS properties (opacity and transform) shift together on scroll intersection, changing the reading experience from "content is static" to "content arrives as I reach it." The `prefers-reduced-motion` check and progressive enhancement make this a carefully constrained gesture.

**Multi-channel coordination:** Two CSS properties shift together: (1) `opacity` from 0 to 1, (2) `transform: translateY` from 20px to 0. Both transition over 0.3s ease. The coordination creates a "content arriving from below" sensation that is soul-compliant (translateY for entrance only, not hover-lift).

**Pipeline implication:** "How do you create a sense of progressive revelation without violating the ANTI-PHYSICAL identity?"

**Derivation question:** "What if content could arrive once as the reader scrolls to it — like wisdom that appears when you're ready for it — then stay permanently?"

---

### 15. Responsive Axis Simplification — GESTURE

**CSS class(es):** `.hub-grid`, `.axis-transition`, `.spoke-content`, `.page-container`, `.breathing-zone`, `.axis-interstitial` (all within `@media (max-width: 768px)`)
**CSS lines:** 881–933
**HTML lines:** (affects all instances of these classes)

**Reader function:** At mobile viewport (<768px), multiple properties shift together: (1) hub grid collapses from 4→1 columns, (2) diagonal clip-paths simplify to horizontal 3px borders, (3) padding reduces across all zones, (4) header padding compresses. The WAVE density oscillation is preserved through spacing tokens even as the geometric axis signals degrade.

**Detection reasoning:** This is a coordinated multi-element, multi-property shift triggered by viewport width. It changes how the reader navigates the page — from horizontal grid scanning to vertical stack scrolling. The diagonal-to-horizontal degradation is particularly notable: the directional gesture degrades to a simpler boundary signal while the density rhythm continues.

**Multi-channel coordination:** Six properties shift together across the 768px breakpoint: (1) `grid-template-columns` from repeat(4, 1fr) to 1fr, (2) `clip-path` from polygon() to none, (3) `border-top` added as replacement for clip-path, (4) `padding` reduced on spoke-content, page-container, breathing-zone, interstitial, and header, (5) `font-size` on tables reduced to `--type-code`, (6) `grid-template-areas` simplified to single-column naming. All follow ONE rule: "simplify geometry, preserve density."

**Pipeline implication:** "How do you gracefully degrade choreographic gestures at mobile while preserving the density rhythm?"

**Derivation question:** "What if responsive collapse were not just about column count, but about which gestures survive the simplification and which degrade to simpler signals?"

---

### 16. Essence Callout Register Shift — GESTURE

**CSS class(es):** `.callout--essence`, `.callout--essence .callout__body`
**CSS lines:** 381–388
**HTML lines:** 1298–1307, 1630–1637, 1748–1757

**Reader function:** The essence callout shifts the body text from Inter (body sans-serif) to Instrument Serif italic. This font-family change signals "this is a philosophical distillation" — the Archivist voice speaking in a different register. The purple left-border accent reinforces the specialness. The reader shifts from analytical reading to contemplative reading.

**Detection reasoning:** This is a coordinated typography register shift. The `font-family` change from body to display, plus the `font-style: italic`, constitutes a two-property shift that changes HOW you read the text (contemplatively, not analytically). It is not a metadata device (the content is article synthesis) and not a reusable container per se — it is the act of shifting voice.

**Multi-channel coordination:** Three properties shift together: (1) `font-family` changes from `--font-body` (Inter) to `--font-display` (Instrument Serif), (2) `font-style` changes to italic, (3) `border-left-color` changes to `--accent-purple` (#7C3AED). All encode one meaning: "the voice has shifted to philosophical synthesis."

**Pipeline implication:** "How do you signal that certain content should be read in a different intellectual register?"

**Derivation question:** "What if the design system's philosophical voice (the Archivist) could speak in its own typographic register, distinct from the analytical body text?"

---

### 17. Callout Accent Variant System — GESTURE

**CSS class(es):** `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--essence`
**CSS lines:** 368–388
**HTML lines:** 1027–1036 (note), 1253–1262 (caution), 1456–1464 (gotcha), 1584–1594 (tip), 1298/1630/1748 (essence)

**Reader function:** Five accent colors encode five different reading registers: blue (informational — "here's context"), green (constructive — "here's how"), coral (warning — "watch out for this"), amber (caution — "be careful"), purple (philosophical — "here's the deeper truth"). The reader's response mode shifts based on the border color before they read the label.

**Detection reasoning:** This is a system of coordinated register shifts, not a single element. Each variant changes `border-left-color` and `.callout__label` color together, creating a two-property shift that primes the reader's response mode. The color IS the reading instruction.

**Multi-channel coordination:** Two properties shift per variant: (1) `border-left-color` on the callout container, (2) `color` on the `.callout__label`. Both shift to the same accent value. The essence variant adds a third: (3) `font-family` + `font-style` on the body text.

**Pipeline implication:** "How do you prime the reader's cognitive mode before they read a callout's content?"

**Derivation question:** "What if callout border color functioned as a pre-attentive signal that tells the reader HOW to read the content — analytically, cautiously, or contemplatively?"

---

### 18. Solid Offset Pseudo-Element — GESTURE

**CSS class(es):** `.territory-tile--featured::after`
**CSS lines:** 955–970
**HTML lines:** 1050–1059 (featured tile generates the pseudo-element)

**Reader function:** A `::after` pseudo-element positioned 4px right and 4px down from the featured tile creates a visible offset "shadow" with a 3px solid #1A1A1A border. This flat 2D depth cue signals importance without violating ANTI-PHYSICAL (no box-shadow, no blur — the offset is an honest geometric duplicate). The reader perceives "this tile has more weight" through a purely flat mechanism.

**Detection reasoning:** This is a CSS-encoded visual inflection point. The pseudo-element changes the reader's perception of the featured tile's importance through a flat geometric trick. It is not metadata (it carries no text information) and not a container (it holds nothing). It is a rendering gesture.

**Multi-channel coordination:** Four CSS properties create the offset effect: (1) `position: absolute` with `top: 4px; left: 4px`, (2) `border: 3px solid #1A1A1A`, (3) `z-index: -1` to place behind the tile, (4) `background: var(--color-background)` for full opacity (no transparency). All encode one meaning: "flat visual weight."

**Pipeline implication:** "How do you create visual weight/importance without drop-shadow or 3D effects?"

**Derivation question:** "What if visual hierarchy could be created through a flat geometric offset that implies depth without simulating physical space?"

---

## COMPONENTS

### 19. Header — COMPONENT

**CSS class(es):** `header`, `.header-inner`, `header h1`, `header .subtitle`
**CSS lines:** 240–291
**HTML lines:** 992–1007
**DOM structure:**
```html
<header>
  <div class="header-inner">
    <div class="meta-line">...</div>
    <h1>AD-005: Choreography</h1>
    <p class="subtitle">What if axis geometry choreographed...</p>
  </div>
</header>
```

**Reader function:** Full-bleed dark background container that establishes the page's identity and question. Three slots: meta-line (instrument), title (display serif), subtitle (body text in secondary color). The 3px primary-red bottom border provides the structural anchor.

**Detection reasoning:** This is a structured content container with defined slots (meta-line, title, subtitle). It has consistent visual treatment (dark background, red border) and is reusable across explorations.

**Multi-channel coordination:** Four visual channels: (1) inverted color scheme (dark bg, light text), (2) 3px primary-red bottom border, (3) three-slot vertical layout, (4) max-width: 1100px with 64px 32px padding.

**Pipeline implication:** "Every exploration needs an establishing header that inverts the color scheme and introduces the question."

**Derivation question:** "What if the page header functioned as a dark establishing shot — inverted colors to signal 'this is the framing context before the content begins'?"

---

### 20. Territory Tile — COMPONENT

**CSS class(es):** `.territory-tile`, `.territory-tile--featured`, `.territory-tile__label`, `.territory-tile__title`, `.territory-tile__desc`, `.territory-tile__meta`
**CSS lines:** 605–665
**HTML lines:** 1050–1101
**DOM structure:**
```html
<div class="territory-tile territory-tile--featured">
  <div class="territory-tile__label">Featured Territory</div>
  <div class="territory-tile__title">CSS Transition Choreography</div>
  <div class="territory-tile__desc">Soul-compliant transitions that...</div>
  <div class="territory-tile__meta">6 patterns | 12 examples</div>
</div>
```

**Reader function:** A 4-slot card component for the hub grid: label (uppercase meta identifier), title (display serif heading), description (body text summary), and meta (monospace bottom-anchored stats). The featured variant adds a 4px red left-border and 2-column span with solid offset pseudo-element.

**Detection reasoning:** This is a reusable structured container with 4 defined slots. It appears 7 times in the hub grid (1 featured + 6 standard). Its structure is consistent and its visual treatment is repeatable.

**Multi-channel coordination:** Slots use three font families: label (Inter, uppercase, secondary color), title (Instrument Serif), meta (JetBrains Mono). The `margin-top: auto` on meta pushes it to the bottom of the flex container regardless of content height, maintaining alignment across tiles.

**Pipeline implication:** "How do you summarize a content territory in a compact card that communicates identity, topic, summary, and scope?"

**Derivation question:** "What if each content territory were represented by a card with four slots — category label, topic title, brief description, and quantitative metadata?"

---

### 21. Hub Grid — COMPONENT

**CSS class(es):** `.hub-grid`
**CSS lines:** 593–633
**HTML lines:** 1048–1102
**DOM structure:**
```html
<div class="hub-grid">
  <div class="territory-tile territory-tile--featured">...</div>
  <div class="territory-tile">...</div>
  <!-- ... 7 tiles total -->
</div>
```

**Reader function:** A CSS Grid container with named areas that arranges 7 territory tiles in a bento-style layout: featured tile spanning 2 columns in the first row, 6 standard tiles filling the remaining positions. The 24px gap creates the "sparse" phase of the WAVE density oscillation.

**Detection reasoning:** This is a structural container that defines the spatial arrangement of territory tiles. It has a defined structure (grid-template-areas), consistent gap spacing, and responsive collapse behavior (4→2→1 columns). It is reusable for any hub-spoke overview.

**Multi-channel coordination:** Two structural channels: (1) `grid-template-areas` defines the named spatial layout, (2) `gap: var(--space-6)` (24px) creates consistent breathing between tiles. The featured tile's 2-column span is encoded in the grid-template-areas string.

**Pipeline implication:** "How do you create a map-like overview of all content territories before the reader descends into any one?"

**Derivation question:** "What if the overview section were a bento grid where one tile was promoted to double width, creating a visual entry point into the content landscape?"

---

### 22. Spoke Content Container — COMPONENT

**CSS class(es):** `.spoke-content`, `.spoke-content__inner`
**CSS lines:** 730–740
**HTML lines:** 1123–1309, 1384–1499, 1514–1640
**DOM structure:**
```html
<section aria-label="Spoke — CSS Transition Choreography" class="spoke-content">
  <div class="spoke-content__inner">
    <nav class="breadcrumb">...</nav>
    <div class="progress-bar">...</div>
    <div class="spoke-section">...</div>
    <!-- more spoke-sections -->
  </div>
</section>
```

**Reader function:** The dense-zone wrapper for spoke content. White background (#FFFFFF via `--axis-zone-primary`) with 48px vertical padding and 1100px max-width inner container. It holds breadcrumb (instrument), progress bar (instrument), and multiple spoke-sections (content).

**Detection reasoning:** This is a reusable structured container for spoke content. It appears 3 times, each wrapping a spoke territory's content with consistent padding, background, and inner width constraints.

**Multi-channel coordination:** Two channels: (1) `background: var(--axis-zone-primary)` signals "dense reading zone," (2) `padding: var(--space-12) var(--space-6)` (48px 24px) provides the dense zone's breathing room.

**Pipeline implication:** "How do you wrap spoke content in a container that visually signals 'you are now in the dense reading zone'?"

**Derivation question:** "What if each spoke territory were wrapped in a white-background container that contrasts with the cream hub zone, signaling the density shift?"

---

### 23. Spoke Section — COMPONENT

**CSS class(es):** `.spoke-section`
**CSS lines:** 771–781
**HTML lines:** 1141–1157, 1160–1209, 1212–1263, 1266–1294, 1297–1307, 1400–1415, 1417–1452, 1454–1497, 1530–1540, 1542–1580, 1582–1626, 1629–1638
**DOM structure:**
```html
<div class="spoke-section">
  <h2>Soul-Compliant Transitions</h2>
  <p>Choreographic movement in the KortAI system...</p>
  <p>The allowed transition set is deliberately narrow...</p>
</div>
```

**Reader function:** A consistent content block within a spoke that groups a heading with its associated paragraphs, code blocks, tables, and callouts. The 32px bottom margin (`--space-between`) creates rhythm between sections within the spoke.

**Detection reasoning:** This is a reusable structured container. It appears 12+ times across the three spokes, always wrapping a heading-and-content group with consistent spacing.

**Multi-channel coordination:** Single channel: `margin-bottom: var(--space-between)` (32px) creates consistent inter-section rhythm. h2 gets 16px bottom margin, h3 gets 12px — creating the typography cascade gesture within each spoke section.

**Pipeline implication:** "How do you create consistent pacing between content groups within a dense reading zone?"

**Derivation question:** "What if each topic group within a spoke were separated by a consistent 32px gap, creating a regular reading rhythm?"

---

### 24. Callout — COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, plus accent variants
**CSS lines:** 346–388
**HTML lines:** 1027–1036, 1253–1262, 1298–1307, 1456–1464, 1584–1594, 1630–1637, 1748–1757
**DOM structure:**
```html
<div class="callout callout--note">
  <div class="callout__label">Establishing Shot</div>
  <div class="callout__body">
    <p>Every choreographic layout opens with orientation...</p>
  </div>
</div>
```

**Reader function:** A 2-slot container (label + body) with 4px left-border accent. Five accent variants (note/blue, tip/green, gotcha/coral, caution/amber, essence/purple) encode different reading modes. The label slot uses uppercase meta-sized text; the body slot uses standard body text (except essence, which shifts to display serif italic).

**Detection reasoning:** This is a reusable structured container with defined slots. It appears 7 times across the page in 5 variants. Its structure is consistent: label + body with accent border.

**Multi-channel coordination:** Three channels: (1) 4px left-border in accent color, (2) uppercase label in matching accent color, (3) body text in standard body font (or display serif for essence). The container itself uses `--color-zone-sparse` background.

**Pipeline implication:** "How do you interject a different voice or mode into the reading flow?"

**Derivation question:** "What if callouts functioned as voice interruptions — the label announces the mode, the border color primes the reader, and the body delivers the shifted-register content?"

---

### 25. Breathing Zone — COMPONENT

**CSS class(es):** `.breathing-zone`, `.breathing-zone__inner`
**CSS lines:** 790–801
**HTML lines:** 1322–1371
**DOM structure:**
```html
<div class="breathing-zone">
  <div class="breathing-zone__inner">
    <h2>The Density Wave</h2>
    <p>The hub-spoke navigation pattern creates...</p>
    <table class="density-table">...</table>
  </div>
</div>
```

**Reader function:** A content container for mode-transition zones — the breathing space between hub and spoke. It uses the `--axis-zone-transition` (#FAF5ED) warm beige background with 3px structural borders top and bottom, creating a visually distinct zone for transitional content. The 48px padding provides the mandatory mode-transition breathing minimum.

**Detection reasoning:** This is a structured container with consistent visual treatment (background + borders + padding). It holds transitional content between hub and spoke zones. While it has instrument-like qualities (marking mode transitions), it also holds substantial content (the density wave explanation and table), making it a component.

**Multi-channel coordination:** Three channels: (1) `background: var(--axis-zone-transition)` for warm beige, (2) 3px solid `--color-border` borders top and bottom, (3) 48px vertical padding for breathing minimum. The combination creates a distinct visual zone.

**Pipeline implication:** "How do you create a transition zone between dense content sections that both provides breathing room and holds transitional content?"

**Derivation question:** "What if the space between dense sections were not empty whitespace but a visually distinct container that could hold summary or bridging content?"

---

### 26. Code Block (pre) — COMPONENT

**CSS class(es):** `pre`, `pre code`, plus syntax highlighting classes (`.kw`, `.st`, `.cm`, `.fn`, `.ty`, `.nu`, `.pu`)
**CSS lines:** 305–331
**HTML lines:** 1222–1242, 1274–1293, 1425–1445, 1545–1571

**Reader function:** Dark-background (#1A1A1A) code container with cream text (#FEF9F5), 3px structural border, monospace font at code size (14px), and syntax highlighting via 7 color-coded classes. The inverted color scheme (matching the header) creates a "viewport into the technical layer" within the body content.

**Detection reasoning:** This is a reusable structured container for code content. It appears 4 times with consistent treatment. The 7 syntax highlighting classes create a defined color vocabulary for code tokens.

**Multi-channel coordination:** Three channels: (1) inverted background (#1A1A1A) with cream text, (2) 3px structural border, (3) 7-color syntax highlighting system (keyword: red, string: green, comment: gray, function: blue, type: coral, number: amber, punctuation: bone).

**Pipeline implication:** "How do you present code in a way that matches the page's visual identity while remaining readable?"

**Derivation question:** "What if code blocks echoed the header's dark-on-light inversion, creating visual continuity between the page frame and the technical content?"

---

### 27. Table — COMPONENT

**CSS class(es):** `table`, `th`, `td`
**CSS lines:** 393–425
**HTML lines:** 1168–1208, 1334–1369, 1466–1496, 1596–1625, 1675–1705, 1716–1746, 1762–1791

**Reader function:** Open grid table with no vertical borders ("prison bars" anti-pattern avoided). Header row uses 3px structural bottom border, body rows use 1px subtle separator. Header text is uppercase meta-sized with 0.05em letter-spacing. Seven instances across the page.

**Detection reasoning:** This is a reusable structured container for tabular data. It has defined slots (thead/tbody) with consistent treatment across all instances.

**Multi-channel coordination:** Three channels: (1) `th` uses uppercase, secondary color, 600 weight for header identity, (2) 3px border under header vs. 1px between rows for structural hierarchy, (3) no vertical borders for open, editorial feel.

**Pipeline implication:** "How do you present structured data in a way that feels editorial rather than spreadsheet-like?"

**Derivation question:** "What if tables dropped all vertical borders and relied only on horizontal lines to create structure, matching the flat editorial identity?"

---

### 28. Code-Explanation Pair — COMPONENT

**CSS class(es):** `.code-explanation`
**CSS lines:** 783–788
**HTML lines:** 1221–1250
**DOM structure:**
```html
<div class="code-explanation">
  <pre><code>...</code></pre>
  <p>Notice the progressive enhancement...</p>
</div>
```

**Reader function:** A flex-column container that pairs a code block with its explanatory paragraph, separated by 24px gap. It creates an alternating rhythm (R4-088) between technical code and narrative explanation.

**Detection reasoning:** This is a structured container that defines the relationship between a code block and its explanation. The 24px gap is specific to this pairing (different from the 32px `--space-between` used between spoke sections).

**Multi-channel coordination:** Single structural channel: `gap: var(--space-6)` (24px) between code and explanation. The visual contrast between the dark code block and the light body text creates the alternating rhythm.

**Pipeline implication:** "How do you pair code with explanation in a way that creates an alternating reading rhythm?"

**Derivation question:** "What if code and its explanation were explicitly paired in a container that enforced consistent spacing between technical and narrative content?"

---

## INFRASTRUCTURE (Not Instruments/Gestures/Components, but notable)

### Skip Link
**CSS class(es):** `.skip-link`
**CSS lines:** 221–235
**HTML lines:** 988
**Purpose:** Accessibility requirement. Hidden off-screen, visible on focus. Not a reader-experience element.

### Screen Reader Only
**CSS class(es):** `.sr-only`
**CSS lines:** 469–479
**Purpose:** Accessibility utility class. Not visually present.

### Selection Styles
**CSS lines:** 205–208
**Purpose:** `::selection` uses primary red background. Branded but incidental.

### Focus Styles
**CSS lines:** 213–216
**Purpose:** `*:focus-visible` with 3px primary-red outline. Accessibility requirement.

### Reduced Motion
**CSS lines:** 430–436
**Purpose:** `@media (prefers-reduced-motion: reduce)` prophylactic — kills all animation/transition for users who prefer reduced motion.

### Print Styles
**CSS lines:** 441–464
**Purpose:** Strips dark backgrounds, hides skip-link and scroll-witness for print.

### Research Application Record
**HTML lines:** 1834–1844
**Purpose:** Hidden `display: none` section listing research citations. Not visible to readers.

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?**
   Yes. I read all 1846 lines across three read operations: lines 1–800, 800–1600, and 1600–1846. I examined both style blocks (`#locked-layer` lines 66–480, `#axis-layer` lines 577–983), all HTML content (lines 986–1844), and the JavaScript (lines 1806–1829).

2. **Am I identifying elements at the DOM level?**
   Yes. Every entry references specific CSS classes, line numbers, and DOM structure. I identified elements by their class names and HTML structure, not by abstract conceptual groupings.

3. **Could I have missed subtle gestures?**
   I checked for multi-property shifts across sections. The most subtle gesture I caught was the hub-to-spoke background zone alternation (#10), which involves four different CSS classes all following one rule. I may have under-counted the typography compression across the full hub→spoke→synthesis WAVE — the shift from display-serif hub titles to body-serif spoke text could be considered an additional gesture. However, this is largely captured by the Spoke Section Typography Cascade (#12) and the Featured Tile Typography Scale-Up (#11).

4. **Am I applying the reader-function test honestly?**
   Yes. I separated infrastructure (skip link, sr-only, selection, focus, reduced motion, print styles, hidden RAR) from genuine reader-experience elements. The chapter divider (#6) was borderline — it is a single line with no text — but removing it would genuinely lose a boundary signal, so I included it.

5. **Did I check for pseudo-elements?**
   Yes. I found one significant pseudo-element: `.territory-tile--featured::after` (the solid offset, #18). I also checked `::selection` (infrastructure, not a gesture). There are no `::first-letter` or `::first-line` pseudo-elements in this file.

6. **Did I check responsive breakpoints?**
   Yes. Three `@media` breakpoints: 1440px (lines 859–868), 1024px (lines 870–878), and 768px (lines 881–933). The 768px breakpoint constitutes a major gesture (#15) involving 6+ property shifts. The 1440px and 1024px breakpoints only change the grid-template-columns and areas.

7. **Am I distinguishing styling from instruments/gestures?**
   Yes. I excluded base typography (body, h1-h6), base link styles, inline code styling, and the reset/soul enforcement CSS from the catalog. These are "just styling" — removing them changes appearance but not the reader's awareness, pace, or mode. By contrast, every cataloged element passes the removal test: removing it would change how the reader navigates, perceives, or processes the content.

---

## SUMMARY

| Category | Count | Elements |
|----------|-------|----------|
| Instruments | 8 | Meta Line, Progress Bar, Breadcrumb, Axis Transition Marker, Axis Interstitial, Chapter Divider, Page Closing, Density Table |
| Gestures | 10 | Diagonal Clip-Path Direction, Background Zone Alternation, Featured Tile Scale-Up, Spoke Typography Cascade, Tile Hover Border, Scroll-Triggered Reveal, Responsive Axis Simplification, Essence Callout Register Shift, Callout Accent System, Solid Offset Pseudo-Element |
| Components | 10 | Header, Territory Tile, Hub Grid, Spoke Content Container, Spoke Section, Callout, Breathing Zone, Code Block, Table, Code-Explanation Pair |
| **Total** | **28** | |
| Infrastructure | 6 | Skip Link, SR-Only, Selection, Focus, Reduced Motion, Print Styles, RAR |
