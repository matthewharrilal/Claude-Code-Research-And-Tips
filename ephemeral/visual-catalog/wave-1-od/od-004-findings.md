# OD-004-confidence.html — Instrument / Gesture / Component Inventory

**File:** `/design-system/validated-explorations/organizational/OD-004-confidence.html`
**Total lines:** 1979
**CSS lines:** 174–1246 (1073 lines)
**HTML lines:** 1248–1978 (730 lines)
**Total elements found:** 26 (11 verified from calibration + 15 new discoveries)

---

## INSTRUMENTS (11 total — 6 from calibration, 5 new)

---

### 1. Geological Column — INSTRUMENT

**CSS class(es):** `.geological-column`, `.geological-column__stratum`, `.geological-column__bar--established`, `.geological-column__bar--probable`, `.geological-column__bar--speculative`, `.geological-column__bar--open`, `.geological-column__label`
**CSS lines:** 378–420
**HTML lines:** 1266–1283
**DOM structure:**
```html
<nav class="geological-column" aria-label="Geological column overview">
  <div class="geological-column__stratum">
    <div class="geological-column__bar--established"></div>
    <span class="geological-column__label">Established</span>
  </div>
  <!-- ...repeated for probable, speculative, open -->
</nav>
```

**Reader function:** Provides a miniature bar chart in the dark header showing all 4 confidence levels with bars of decreasing height (4px/3px/2px/1px). Orients the reader to the page's entire confidence architecture before reading begins — a minimap of the geological terrain below.

**Detection reasoning:** This is an Instrument, not a Component, because its sole purpose is reader orientation. It contains zero content — only metadata about the page structure. Remove it and the reader loses the advance preview of what strata exist.

**Multi-channel coordination:** Two visual channels encode metadata simultaneously: (1) bar height encodes confidence level (4px=established, 3px=probable, 2px=speculative, 1px=open), and (2) bar color encodes stratum identity (#FAFAF5=established, blue=probable, amber=speculative, purple=open). The monospace uppercase labels provide the textual channel.

**Pipeline implication:** "What if the reader could see the entire confidence architecture at a glance before reading any content?" A pipeline would need the concept of "page minimap" — a scaled-down representation of the structural model embedded in the header.

**Derivation question:** "What if the dark header contained a miniature geological cross-section showing the reader what layers they'll encounter?"

---

### 2. Geological Survey — INSTRUMENT

**CSS class(es):** `.geological-survey`, `.geological-survey::after`, `.geological-survey__label`, `.geological-survey__title`, `.geological-survey__description`, `.strata-inventory`, `.strata-inventory__item`, `.strata-inventory__marker`, `.strata-inventory__marker--established/probable/speculative/open`, `.strata-inventory__text`, `.survey-meta`, `.survey-meta__item`, `.survey-meta__label`, `.survey-meta__value`
**CSS lines:** 437–553
**HTML lines:** 1294–1351
**DOM structure:**
```html
<section class="geological-survey reveal" aria-label="Geological Survey">
  <div class="geological-survey__label">Geological Survey</div>
  <h2 class="geological-survey__title">API Best Practices & Stability Guide</h2>
  <p class="geological-survey__description">...</p>
  <div class="strata-inventory">
    <div class="strata-inventory__item">
      <div class="strata-inventory__marker strata-inventory__marker--established"></div>
      <div class="strata-inventory__text">
        <strong>Established (4 practices)</strong>
        <span>Proven conventions with deep industry consensus</span>
      </div>
    </div>
    <!-- ...repeated for probable, speculative, open -->
  </div>
  <div class="survey-meta">
    <div class="survey-meta__item">
      <span class="survey-meta__label">Total Practices</span>
      <span class="survey-meta__value">11</span>
    </div>
    <!-- ...Reading Time, Confidence Range, Last Updated -->
  </div>
</section>
```

**Reader function:** A content inventory panel that tells the reader exactly what this page contains, organized by confidence level. Combines strata inventory (colored square markers + counts per confidence level) with survey metadata (Total Practices: 11, Reading Time: 12-18 min, etc.). The solid offset pseudo-element gives it neobrutalist depth. This is the "table of contents as geological survey map."

**Detection reasoning:** Instrument. The strata-inventory sub-section is pure metadata — counts and descriptions of what exists on the page. The survey-meta row is pure orientation data (total practices, reading time, last updated). Remove this and the reader has no idea what the page contains or how long it will take to read.

**Multi-channel coordination:** Three metadata channels: (1) colored 10px square markers encode stratum identity via color (black/blue/amber/purple), (2) text labels provide counts and descriptions, (3) survey-meta row provides aggregate metadata. The solid offset `::after` pseudo-element (4px x/y, #1A1A1A background, z-index: -1) provides depth signaling that this is a primary orientation element.

**Pipeline implication:** "What if the reader could decide how deep to go based on a survey of the terrain?" Requires the pipeline to generate a content inventory panel with per-section metadata.

**Derivation question:** "What if the page opened with a geological survey — a content inventory organized by confidence level, so the reader can decide how deep to dig?"

---

### 3. Evidence DNA — INSTRUMENT

**CSS class(es):** `.evidence-dna`, `.evidence-dna__item`, `.evidence-dna__value`
**CSS lines:** 630–648
**HTML lines:** 1381–1385 (Established), 1515–1519 (Probable), 1671–1675 (Speculative), 1829–1833 (Open)
**DOM structure:**
```html
<div class="evidence-dna">
  <span class="evidence-dna__item">Sources: <span class="evidence-dna__value">50+</span></span>
  <span class="evidence-dna__item">Validation: <span class="evidence-dna__value">Production-proven</span></span>
  <span class="evidence-dna__item">Consensus: <span class="evidence-dna__value">Industry-wide</span></span>
</div>
```

**Reader function:** Three monospace metadata chips at each stratum header encoding the evidential basis for that confidence level. Values degrade systematically: Sources 50+ / 10-20 / 3-8 / 0-3. Validation: Production-proven / Case studies / Early adopters / Anecdotal. Consensus: Industry-wide / Strong but contested / Emerging, contested / None — competing hypotheses. This is an epistemic fingerprint that lets the reader calibrate trust without reading the content.

**Detection reasoning:** Instrument. Pure metadata about the evidence quality — not content itself. The systematic degradation across strata is the key signal: these chips encode the relationship between strata, not just label individual sections. Remove them and the reader loses the ability to assess evidence strength at a glance.

**Multi-channel coordination:** Two channels: (1) monospace uppercase text provides the literal metadata values, (2) the systematic degradation pattern across the 4 instances creates a meta-channel — the reader perceives the declining confidence gradient by comparing DNA chips across strata.

**Pipeline implication:** "What if each section carried its own evidence credentials?" The pipeline would need a concept of "evidence metadata" — structured data about the quality of evidence backing each section.

**Derivation question:** "What if each stratum wore its evidence credentials on its sleeve — source count, validation type, and consensus level — like a scientific paper's methodology section compressed into three chips?"

---

### 4. Epistemic Marker — INSTRUMENT

**CSS class(es):** `.stratum__epistemic`
**CSS lines:** 620–627
**HTML lines:** 1378–1380 (Established), 1512–1514 (Probable), 1668–1670 (Speculative), 1826–1828 (Open)
**DOM structure:**
```html
<p class="stratum__epistemic">
  This section contains well-established practices backed by broad industry consensus...
</p>
```

**Reader function:** A direct-address statement at each stratum header that sets the reading register for that section. "This section contains well-established practices..." vs "This section contains emerging patterns..." vs "This section contains genuine open questions..." The epistemic marker tells the reader HOW to read what follows — what level of trust to extend, what degree of skepticism to apply.

**Detection reasoning:** Instrument. It is meta-content about the content, not content itself. It sets the epistemic register — the reader's interpretive stance — for everything that follows in the stratum. Remove it and the reader must infer confidence level from the content itself, losing the explicit framing.

**Multi-channel coordination:** Two channels: (1) the text content directly addresses the reader ("This section contains..."), (2) the visual treatment — 13px secondary-colored text with a 4px left border and padding-left — visually subordinates it to content, signaling "read this for calibration, not for substance." The border-left inherits the stratum border color via the parent `.stratum--*` class.

**Pipeline implication:** "What if each section began with an explicit statement about the reader's expected interpretive stance?" The pipeline needs a concept of "epistemic framing" — a per-section preamble that calibrates reader trust.

**Derivation question:** "What if each stratum opened with a direct address to the reader, telling them exactly what level of trust to extend to what follows?"

---

### 5. Confidence Switcher — INSTRUMENT

**CSS class(es):** `.confidence-switcher`, `.confidence-switcher__option`, `.confidence-switcher__option--active`
**CSS lines:** 559–585
**HTML lines:** 1354–1361
**DOM structure:**
```html
<div class="confidence-switcher reveal" role="tablist" aria-label="Confidence filter">
  <button role="tab" id="tab-facts" class="confidence-switcher__option" aria-controls="panel-facts" aria-selected="false" tabindex="-1">Facts Only</button>
  <button role="tab" id="tab-analysis" class="confidence-switcher__option confidence-switcher__option--active" aria-controls="panel-analysis" aria-selected="true" tabindex="0">Full Analysis</button>
  <button role="tab" id="tab-everything" class="confidence-switcher__option" aria-controls="panel-everything" aria-selected="false" tabindex="-1">Everything</button>
</div>
<div role="tabpanel" id="panel-facts" aria-labelledby="tab-facts" hidden></div>
<div role="tabpanel" id="panel-analysis" aria-labelledby="tab-analysis"></div>
<div role="tabpanel" id="panel-everything" aria-labelledby="tab-everything" hidden></div>
```

**Reader function:** A three-button tab bar giving the reader agency over how much content to see: "Facts Only" / "Full Analysis" / "Everything." This is a reader-control instrument — it lets the reader declare their desired depth rather than being forced through the full page. The active state is "Full Analysis" by default. Full ARIA tablist/tab/tabpanel semantics with keyboard navigation via JS (lines 1933–1974).

**Detection reasoning:** Instrument. Its sole purpose is reader agency — controlling what the reader sees. It contains zero content. It is a filter mechanism for the confidence architecture. Remove it and the reader loses the ability to control their depth of engagement.

**Multi-channel coordination:** Three channels: (1) monospace uppercase text labels declare the filter options, (2) the active state is signaled via red bottom border (3px solid primary) and red text + font-weight 600, (3) background color shifts from white (inactive) to the border-colored bar grid (the 3px gap with border-colored background creates visual separation). The JS on lines 1933–1974 manages ARIA state, tab activation, and keyboard navigation (ArrowRight/ArrowLeft/Home/End).

**Pipeline implication:** "What if the reader could choose how much of the page to see based on their confidence appetite?" The pipeline needs the concept of "reader agency controls" — interactive elements that let the reader filter content by a structural dimension.

**Derivation question:** "What if there was a control panel where the reader could declare 'show me only what's proven' or 'show me everything including open questions'?"

---

### 6. Stratum Boundary with Progress — INSTRUMENT

**CSS class(es):** `.stratum-boundary`, `.stratum-boundary__line`, `.stratum-boundary__label`, `.stratum-boundary__scent`, `.stratum-boundary__progress`, `.progress-square`, `.progress-square--filled`, `.stratum-boundary__progress-label`
**CSS lines:** 783–842
**HTML lines:** 1484–1497 (boundary 1->2), 1641–1654 (boundary 2->3), 1798–1811 (boundary 3->4), 1879–1888 (final boundary)
**DOM structure:**
```html
<div class="stratum-boundary reveal" role="separator" aria-label="Transition from Established to Probable">
  <div class="stratum-boundary__line"></div>
  <div class="stratum-boundary__label">Entering Stratum 2: Probable</div>
  <div class="stratum-boundary__scent">
    Below this point, practices are well-evidenced but have meaningful alternatives...
  </div>
  <div class="stratum-boundary__progress" aria-label="Progress: 1 of 4 confidence levels completed">
    <div class="progress-square progress-square--filled" aria-hidden="true"></div>
    <div class="progress-square" aria-hidden="true"></div>
    <div class="progress-square" aria-hidden="true"></div>
    <div class="progress-square" aria-hidden="true"></div>
    <span class="stratum-boundary__progress-label">1 of 4</span>
  </div>
</div>
```

**Reader function:** Transition marker at every stratum boundary with three components: (1) a 3px horizontal rule, (2) a label declaring which stratum is being entered, (3) a "scent" description previewing what follows, and (4) square progress indicators showing how many strata have been completed (filled=done, empty=remaining). There are 4 instances: boundaries 1->2, 2->3, 3->4, and a final "4 of 4 Survey Complete" marker.

**Detection reasoning:** Instrument. Pure wayfinding. The progress squares are a physical counter of where the reader is in the page structure. The scent text previews what follows. Remove these boundaries and the reader loses explicit awareness of transitions between confidence levels and their position in the overall survey.

**Multi-channel coordination:** Four channels: (1) the 3px horizontal rule creates a visual break, (2) the monospace label declares the transition ("Entering Stratum 2: Probable"), (3) the scent text provides a prose preview of the next section, (4) the progress squares use the filled/empty binary to encode position (Soul Piece 5: Squares Signal System). The final boundary at lines 1879–1888 omits the label and scent, using only the progress indicator with "4 of 4 — Survey Complete."

**Pipeline implication:** "What if every major structural transition was marked with a wayfinding device that told the reader where they are, where they've been, and what to expect next?" The pipeline needs the concept of "transition markers with progress tracking."

**Derivation question:** "What if stratum transitions were geological unconformity signals — visible breaks with information scent about the terrain ahead and a progress counter?"

---

### 7. Exploration Header Metadata Bar — INSTRUMENT (NEW)

**CSS class(es):** `.exploration-meta`, `.exploration-meta__value`
**CSS lines:** 355–375
**HTML lines:** 1259–1263
**DOM structure:**
```html
<div class="exploration-meta">
  <span>Status: <span class="exploration-meta__value">Active</span></span>
  <span>Pattern: <span class="exploration-meta__value">Certainty Strata</span></span>
  <span>Content: <span class="exploration-meta__value">API Best Practices</span></span>
</div>
```

**Reader function:** A flex-row of monospace metadata chips in the dark header providing three orientation points: Status (Active), Pattern (Certainty Strata), Content (API Best Practices). These let the reader instantly classify the page within the broader exploration series.

**Detection reasoning:** Instrument. Pure metadata about the document — not about the content within it. It orients the reader to the document's role in the larger system (exploration status, pattern type, content domain). Remove it and the reader loses the ability to quickly classify what kind of document this is.

**Multi-channel coordination:** Two channels: (1) monospace uppercase labels with 0.08em letter-spacing provide the metadata category, (2) red-colored (`--color-primary`) values provide the metadata content. The flex-wrap with 24px gap adapts to viewport width.

**Pipeline implication:** "What if each page carried a compact classification bar identifying its role, pattern, and content domain?"

**Derivation question:** "What if the header contained a machine-readable metadata row — status, organizational pattern, and content domain — in a monospace diagnostic aesthetic?"

---

### 8. Exploration ID Tag — INSTRUMENT (NEW)

**CSS class(es):** `.exploration-id`
**CSS lines:** 330–337
**HTML lines:** 1256
**DOM structure:**
```html
<div class="exploration-id">Exploration OD-004 &middot; Density: Geological + Crescendo</div>
```

**Reader function:** A monospace uppercase identifier tag at the very top of the dark header that declares the document's serial number (OD-004) and density pairing (Geological + Crescendo). This is the document's "name badge" — it tells the reader exactly where this document sits in the exploration taxonomy.

**Detection reasoning:** Instrument. Purely identifies the document within the series. Contains zero content about API best practices. Remove it and the reader cannot immediately locate this document within the OD series or know its density pairing.

**Multi-channel coordination:** Single channel: monospace font, 12px size, uppercase, 0.15em letter-spacing, secondary color. The typographic treatment (small, mono, faded) signals "metadata" not "content."

**Pipeline implication:** "What if every exploration file carried a visible serial identifier declaring its position in the taxonomy?"

**Derivation question:** "What if the document opened with a field-notation identifier tag — like a geological core sample label?"

---

### 9. Stratum Depth Label — INSTRUMENT (NEW)

**CSS class(es):** `.stratum__depth-label`
**CSS lines:** 603–609
**HTML lines:** 1376 (Established), 1510 (Probable), 1666 (Speculative), 1824 (Open)
**DOM structure:**
```html
<div class="stratum__depth-label">Stratum 1 — Established</div>
```

**Reader function:** A monospace uppercase label at each stratum header declaring the stratum number and confidence level. "Stratum 1 — Established" / "Stratum 2 — Probable" / "Stratum 3 — Speculative" / "Stratum 4 — Open Questions." This is a positional tag that reinforces the geological metaphor at every section entry.

**Detection reasoning:** Instrument. Pure positional metadata — it tells you WHERE you are (which layer) and WHAT the confidence level is. The color of the label changes per stratum (black/blue/amber/purple) via the `.stratum--* .stratum__depth-label` color overrides at lines 660, 692, 722, 753. Remove it and the reader loses the explicit stratum identification at each section.

**Multi-channel coordination:** Two channels: (1) monospace uppercase text provides the literal label, (2) color encoding matches the stratum's accent color (text color for established, blue for probable, amber for speculative, purple for open). The color is applied via parent-scoped CSS rules.

**Pipeline implication:** "What if every section carried a field-notation depth label in the geological metaphor?"

**Derivation question:** "What if each stratum header opened with a geological core label — layer number and confidence classification in field-notation style?"

---

### 10. Survey Meta Row — INSTRUMENT (NEW)

**CSS class(es):** `.survey-meta`, `.survey-meta__item`, `.survey-meta__label`, `.survey-meta__value`
**CSS lines:** 528–553
**HTML lines:** 1333–1350
**DOM structure:**
```html
<div class="survey-meta">
  <div class="survey-meta__item">
    <span class="survey-meta__label">Total Practices</span>
    <span class="survey-meta__value">11</span>
  </div>
  <div class="survey-meta__item">
    <span class="survey-meta__label">Confidence Range</span>
    <span class="survey-meta__value">Established to Open</span>
  </div>
  <div class="survey-meta__item">
    <span class="survey-meta__label">Reading Time</span>
    <span class="survey-meta__value">12-18 min</span>
  </div>
  <div class="survey-meta__item">
    <span class="survey-meta__label">Last Updated</span>
    <span class="survey-meta__value">2026-02-07</span>
  </div>
</div>
```

**Reader function:** A metadata row at the bottom of the geological survey panel providing aggregate orientation data: total practice count, confidence range, estimated reading time, and last-updated date. Separated from the strata inventory by a 3px structural border. This is the survey's "footer metadata" — summary statistics about the page content.

**Detection reasoning:** Instrument. Pure metadata. Total count, range, reading time, and date are not content — they are data about the content. The 3px top border visually separates the metadata from the inventory above, signaling a shift from "what's in each layer" to "aggregate stats." Note: The calibration doc grouped this within the Geological Survey entry, but it is a distinct sub-instrument with its own CSS classes, layout (flex row vs grid), and visual treatment (structural border separator).

**Multi-channel coordination:** Two channels: (1) monospace uppercase 12px labels provide the category, (2) 600-weight 14px values in primary text color provide the data. The flex layout with 32px gap and flex-wrap creates a responsive metadata bar.

**Pipeline implication:** "What if the content inventory panel included aggregate statistics about the page?"

**Derivation question:** "What if the geological survey's footer contained a metadata strip with total practice count, confidence range, reading time, and freshness date?"

---

### 11. Verification List — INSTRUMENT (NEW)

**CSS class(es):** `.verification-list`, `.verification-list__check`
**CSS lines:** 1130–1158
**HTML lines:** 1898–1915
**DOM structure:**
```html
<ul class="verification-list">
  <li>
    <span class="verification-list__check" aria-hidden="true">&#x2713;</span>
    <span><strong>Established:</strong> HTTP status codes, resource naming...</span>
  </li>
  <!-- ...repeated for Probable, Speculative, Open -->
</ul>
```

**Reader function:** A four-item summary checklist at the end of the page that recaps what the reader now knows at each confidence level. Each item has a green-bordered square checkbox with a checkmark (Soul Piece 5: Squares Signal System). This is a post-reading orientation device — it provides gratification ("you learned this") and reinforces the confidence architecture one final time.

**Detection reasoning:** Instrument. Despite containing summary text, its primary function is reader orientation — confirming what was covered and providing a sense of completion. The checkmark squares encode "completed/verified" status. Remove it and the reader loses the end-of-journey summary and gratification signal.

**Multi-channel coordination:** Two channels: (1) green-bordered 18px square checkboxes (1px solid, green accent color, checkmark character) encode completion status, (2) bold stratum labels + summary text provide a per-layer recap. The items are separated by subtle bottom borders (1px, border-subtle).

**Pipeline implication:** "What if the page ended with a per-section completion checklist summarizing what the reader learned?"

**Derivation question:** "What if the geological survey concluded with a field report — a checklist confirming what was found at each depth?"

---

## GESTURES (8 total — 3 from calibration, 5 new)

---

### 12. Border-Weight Confidence Encoding — GESTURE

**CSS class(es):** `.stratum--established` (4px), `.stratum--probable` (3px), `.stratum--speculative` (2px), `.stratum--open` (1px)
**CSS lines:** 654–756 (distributed across all 4 stratum blocks)
**HTML lines:** N/A (encoded in parent section elements at 1374, 1508, 1664, 1822)

**Reader function:** The left border of each stratum section physically encodes its confidence level through decreasing thickness: 4px (established) -> 3px (probable) -> 2px (speculative) -> 1px (open). This is EXT-CONF-013. The border weight IS the meaning — you can perceive the confidence gradient through peripheral vision alone. The 2px and 1px borders are intentional semantic inversions (noted in CSS comments) — thin borders signal low confidence, not a bug.

**Detection reasoning:** Gesture, not styling. This is a coordinated multi-property shift where border-width encodes a specific semantic: physical thickness = confidence level. It changes HOW you read — the progressively thinner borders create a subliminal sense of decreasing solidity. It is not decorative; it is structural meaning.

**Multi-channel coordination:** Border width is the primary channel. But it coordinates with border COLOR: black (established), blue (probable), amber (speculative), purple (open). Two properties (width + color) shift together according to one rule: "visual weight inversely correlates with uncertainty."

**Pipeline implication:** "What if the physical weight of the page's structural borders encoded a meaning gradient?" The pipeline needs the concept of "semantic border weight" — borders whose thickness carries information.

**Derivation question:** "What if the left border of each geological stratum physically thinned as confidence decreased — making certainty literally heavier?"

---

### 13. Typography Compression Gradient — GESTURE

**CSS class(es):** `.stratum--established h3` (1.25rem), `.stratum--probable h3` (1.2rem), `.stratum--speculative h3` (1.125rem), `.stratum--open h3` (1.0625rem); body font sizes and line-heights also shift
**CSS lines:** 671–772 (distributed across stratum-specific rules)

**Reader function:** Typography compresses across strata in coordinated lockstep. Heading sizes: 1.25rem -> 1.2rem -> 1.125rem -> 1.0625rem. Body font sizes: 15px -> 15px -> 14px -> 14px. Line heights: 1.8 -> 1.7 -> 1.65 -> 1.6. The max-width narrows (720px in established, unrestricted elsewhere). Heading margin-bottoms compress: 24px -> 20px -> 16px -> 12px. Body margin-bottoms compress: 20px -> 16px -> 12px -> 12px. All channels shift together according to ONE rule: "density inversely correlates with confidence."

**Detection reasoning:** Gesture. This is a multi-channel coordinated shift in reading register. No single property change is decorative — they all serve the same semantic: the reading experience literally compresses as confidence decreases. The reader reads Stratum 1 slowly and spaciously, then reads Stratum 4 densely and quickly. This is a reading-pace gesture.

**Multi-channel coordination:** Six channels shift together:
1. h3 font-size: 1.25rem -> 1.2rem -> 1.125rem -> 1.0625rem
2. p font-size: 15px -> 15px -> 14px -> 14px
3. p line-height: 1.8 -> 1.7 -> 1.65 -> 1.6
4. h3 margin-bottom: space-6 (24px) -> space-5 (20px) -> space-4 (16px) -> space-3 (12px)
5. p margin-bottom: space-5 (20px) -> space-4 (16px) -> space-3 (12px) -> space-3 (12px)
6. content-block max-width: 720px (established) -> unrestricted (all others)

**Pipeline implication:** "What if typography itself encoded the page's structural gradient?" The pipeline needs "multi-channel typographic gradients" — coordinated shifts in multiple type properties according to a single semantic rule.

**Derivation question:** "What if the typography compressed as confidence decreased — making certain content literally more spacious and open?"

---

### 14. Spacing-as-Confidence — GESTURE

**CSS class(es):** Custom properties: `--stratum-established-padding` (40px), `--stratum-probable-padding` (32px), `--stratum-speculative-padding` (20px), `--stratum-open-padding` (16px); plus `.content-block` padding variations
**CSS lines:** 246–249 (custom properties), 654–772 (applied in stratum rules)

**Reader function:** Padding compresses from 40px (established) -> 32px (probable) -> 20px (speculative) -> 16px (open). This is defined as CSS custom properties in the :root block (lines 246–249) and applied via `var(--stratum-*-padding)` on each `.stratum--*` class. Content-block padding also compresses: space-8 (32px) -> space-6 (24px) -> space-5 (20px) -> space-4 (16px). Whitespace itself encodes certainty — more space = more confidence.

**Detection reasoning:** Gesture. Whitespace is not neutral — it is semantic. The progressive compression of padding creates a physical sensation of increasing density as the reader moves deeper into uncertainty. This is a perceptual shift in reading register, not a styling choice.

**Multi-channel coordination:** Two padding channels shift together: (1) stratum-level padding (the section's overall vertical breathing room), (2) content-block padding (the spacing between individual articles within each stratum). Both compress according to the same rule: less certainty = less space.

**Pipeline implication:** "What if the amount of whitespace on the page directly encoded a meaning gradient?" The pipeline needs "semantic spacing gradients" — spacing values that carry information.

**Derivation question:** "What if whitespace itself was the confidence signal — certainty breathes, uncertainty crowds?"

---

### 15. Scroll-Driven Reveal Animation — GESTURE (NEW)

**CSS class(es):** `.reveal`, `.reveal-delay-1`
**CSS lines:** 275–311
**HTML lines:** Applied to 20+ elements throughout the HTML (via `class="... reveal"`)

**Reader function:** Elements animate into view with a fade-up (opacity 0->1, translateY 20px->0) triggered by scroll position via `animation-timeline: view()`. The `.reveal-delay-1` variant shifts the entry range slightly later (15%/45% vs 10%/40%). This creates a "wisdom arriving" effect — content materializes as the reader scrolls to it, reinforcing the geological metaphor of excavating layers.

**Detection reasoning:** Gesture. This is a coordinated shift in two CSS properties (opacity + transform) that changes the reader's experience from "static page" to "progressive revelation." It shifts the reading register from scanning to engaged reading — content that appears as you arrive demands attention. The fallback rules (lines 293–311) ensure static display for reduced-motion and unsupported browsers.

**Multi-channel coordination:** Two channels shift together: (1) opacity transitions from 0 to 1, (2) translateY shifts from 20px to 0. Both are governed by `animation-timeline: view()` with `animation-range: entry 10% entry 40%`, creating scroll-position-dependent appearance. The 0.5s ease-out timing provides smooth deceleration.

**Pipeline implication:** "What if content materialized as the reader reached it, creating a sense of progressive discovery?"

**Derivation question:** "What if scrolling through the geological layers felt like excavation — content revealing itself as you dig deeper?"

---

### 16. Zone Background Gradient — GESTURE (NEW)

**CSS class(es):** `.stratum--established` (--color-zone-sparse: #FEF9F5), `.stratum--probable` (--color-zone-moderate: #FFFFFF), `.stratum--speculative` (--color-zone-dense: #FFFFFF), `.stratum--open` (--color-zone-densest: #FAF5ED)
**CSS lines:** 223–228 (custom properties), 654–752 (applied on strata)

**Reader function:** Background color shifts subtly across strata: warm cream (#FEF9F5) for established -> white (#FFFFFF) for probable and speculative -> warm tan (#FAF5ED) for open questions. The bookend warmth (established and open both warm, middle layers white) creates a geological-sandwich effect. The established stratum's warm background signals "home territory," while the open stratum's warm background signals "breathing warmth" — an invitation rather than a warning.

**Detection reasoning:** Gesture. The background color shift is subtle but perceptible. It creates a reading register change — warm backgrounds feel different from white. The asymmetry (warm/white/white/warm) creates a compositional tension rather than a simple gradient, distinguishing this from a monotonic darkening. The zone names are dual-semantic (EXT-CONF-016): spatial ("zone-sparse") and density-semantic.

**Multi-channel coordination:** Single primary channel (background-color), but it coordinates with the overall spacing/typography gesture to create a compound reading-register shift. The CSS variable names encode both spatial and density semantics.

**Pipeline implication:** "What if background color subtly shifted to reinforce the structural model?"

**Derivation question:** "What if the geological strata had subtly different ground colors — warm bedrock, cool middle layers, warm deep earth?"

---

### 17. Depth Label Color Encoding — GESTURE (NEW)

**CSS class(es):** `.stratum--established .stratum__depth-label` (color: text), `.stratum--probable .stratum__depth-label` (color: blue), `.stratum--speculative .stratum__depth-label` (color: amber), `.stratum--open .stratum__depth-label` (color: purple)
**CSS lines:** 660, 692, 722, 753

**Reader function:** The depth label text color shifts per stratum: near-black (established) -> blue (probable) -> amber (speculative) -> purple (open). This color gradient runs through the entire page via the depth labels, creating a chromatic thread that reinforces which stratum the reader is in. The color shift from authoritative black to explorative purple mirrors the confidence gradient.

**Detection reasoning:** Gesture. The color is not decorative — it encodes stratum identity. The shift from near-black to purple is a reading-register gesture: it tells the reader they are progressively deeper into uncertainty. When combined with the border-weight gesture and the typography compression gesture, it forms part of a triple-channel confidence encoding.

**Multi-channel coordination:** Coordinates with border color (same palette: black/blue/amber/purple) and border width (4px/3px/2px/1px) to create a triple encoding of confidence at each stratum entry point.

**Pipeline implication:** "What if a chromatic gradient threaded through every section header, encoding the structural model in color?"

**Derivation question:** "What if the stratum labels shifted from authoritative near-black to explorative purple, mirroring the confidence gradient?"

---

### 18. Callout Essence Typography Shift — GESTURE (NEW)

**CSS class(es):** `.callout--essence .callout__body`
**CSS lines:** 893–897

**Reader function:** When a callout is of type "essence," the body text shifts from Inter (sans-serif, body font) to Instrument Serif (italic, display font), and the font size increases from 14px to 15px. This typography shift signals "this is not information — this is wisdom." The reader encounters a different typographic register that demands slower, more contemplative reading.

**Detection reasoning:** Gesture. A coordinated font-family + font-style + font-size shift that changes reading pace. The shift from Inter body text to Instrument Serif italic is a register change — it tells the reader to switch from scanning/absorbing mode to reflecting mode. This is a reading-mode gesture, not a styling choice.

**Multi-channel coordination:** Three channels shift together: (1) font-family changes from Inter to Instrument Serif, (2) font-style changes to italic, (3) font-size increases from 14px to 15px. All three serve one purpose: shifting from informational to reflective register.

**Pipeline implication:** "What if certain special content types triggered a complete typography shift to signal a different reading mode?"

**Derivation question:** "What if 'essence' callouts spoke in the wisdom voice — serif, italic, slightly larger — demanding contemplation rather than absorption?"

---

### 19. Code Block Dark Theme Inversion — GESTURE (NEW)

**CSS class(es):** `.code-block`, `.code-block__label`, `.code-comment`
**CSS lines:** 978–1015

**Reader function:** Code blocks invert the page's color scheme entirely: dark background (#1A1A1A) with light text (#FAFAF5), 3px structural border, and a sub-label in secondary text. Comments are styled in italic #666666. This is a register shift — the reader exits prose-reading mode and enters code-reading mode. The dark background creates a "window into a different world" effect that reinforces the character-scale fractal (DD-F-006: comments=sparse, logic=dense).

**Detection reasoning:** Gesture. The color inversion is a coordinated multi-property shift: background, text color, and internal element styling all flip together. It is not merely "styling a code block" — it is creating a perceptual rupture that forces the reader to change reading mode. The dark-on-light to light-on-dark shift is one of the strongest reading-register changes available.

**Multi-channel coordination:** Four channels shift together: (1) background inverts from warm cream to near-black, (2) text inverts from near-black to near-white, (3) font switches from Inter body to JetBrains Mono, (4) internal hierarchy uses #666666 for secondary elements within the dark context.

**Pipeline implication:** "What if code blocks were visual ruptures — complete color inversions that force a mode shift?"

**Derivation question:** "What if entering a code block felt like entering a different geological chamber — dark walls, different writing system?"

---

## COMPONENTS (7 total — 2 from calibration, 5 new)

---

### 20. Stratum — COMPONENT

**CSS class(es):** `.stratum`, `.stratum--established`, `.stratum--probable`, `.stratum--speculative`, `.stratum--open`, `.stratum__header`, `.stratum__depth-label`, `.stratum__title`, `.stratum__epistemic`
**CSS lines:** 595–772 (across all 4 variants)
**HTML lines:** 1374–1476 (Established), 1508–1635 (Probable), 1664–1790 (Speculative), 1822–1873 (Open)
**DOM structure:**
```html
<section class="stratum stratum--established" id="established" aria-label="Established Practices">
  <div class="stratum__header reveal">
    <div class="stratum__depth-label">Stratum 1 — Established</div>
    <h2 class="stratum__title">Proven API Conventions</h2>
    <p class="stratum__epistemic">This section contains well-established practices...</p>
    <div class="evidence-dna">
      <span class="evidence-dna__item">Sources: <span class="evidence-dna__value">50+</span></span>
      ...
    </div>
  </div>
  <article class="content-block reveal">...</article>
  <article class="content-block reveal">...</article>
  <div class="callout callout--essence reveal">...</div>
</section>
```

**Reader function:** The primary multi-slot content container, repeated 4 times (once per confidence level). Each stratum has defined slots: depth-label (instrument), title (serif italic heading), epistemic marker (instrument), evidence DNA (instrument), and one or more content-blocks containing the actual article content. The stratum's modifier class (`--established`, `--probable`, etc.) controls all gesture parameters: border weight, color, padding, typography, and background color.

**Detection reasoning:** Component. This is a reusable structured container with defined slots. It holds article content. The 4-variant modifier system makes it the same component adapted to 4 confidence levels. Remove it and the content has no structural container.

**Multi-channel coordination:** The modifier class controls 6+ channels simultaneously: border width, border color, padding, background color, heading font-size, body font-size, line-height, and heading margin-bottom. This is the host container for the Typography Compression, Spacing-as-Confidence, Border-Weight, and Zone Background gestures.

**Pipeline implication:** "What if there was a confidence-stratified container that automatically applied visual encoding to any content placed within it?"

**Derivation question:** "What if each geological layer was a structured container with slots for metadata, headings, epistemic markers, evidence credentials, and content blocks — all auto-styled by confidence level?"

---

### 21. Comparison Grid — COMPONENT

**CSS class(es):** `.comparison-grid`, `.comparison-column`, `.comparison-column__label`, `.comparison-column--established`, `.comparison-column--probable`, `.comparison-column--speculative`
**CSS lines:** 914–972
**HTML lines:** 1568–1587 (Rate Limiting comparison), 1750–1771 (Architecture comparison)
**DOM structure:**
```html
<div class="comparison-grid reveal">
  <div class="comparison-column comparison-column--established">
    <div class="comparison-column__label">Established: Fixed Window</div>
    <p>Simple counter per time window...</p>
    <ul>
      <li>100 requests per minute, counter resets at :00</li>
      ...
    </ul>
  </div>
  <div class="comparison-column comparison-column--probable">
    <div class="comparison-column__label">Probable: Sliding Window</div>
    <p>Weighted count across overlapping windows...</p>
    <ul>
      <li>Weighted average of current and previous window</li>
      ...
    </ul>
  </div>
</div>
```

**Reader function:** A side-by-side comparison of approaches at different confidence levels. The 2-column CSS grid (with 3px gap backed by border-colored background) places approaches next to each other for direct comparison. Column labels carry the confidence-level color encoding (established=black border-bottom, probable=blue, speculative=amber). Used twice: once comparing rate limiting strategies (established vs probable) and once comparing API architectures (established vs speculative).

**Detection reasoning:** Component. It is a reusable content container with defined slots (label + prose + optional list) and consistent structure across 2 instances. It structures article content for side-by-side comparison. Responsive at 720px: collapses to single column.

**Multi-channel coordination:** Two channels: (1) the grid gap with background color creates a visual gutter between columns, (2) the label border-bottom color encodes which confidence level each column represents (matching the stratum border colors). Square list markers (Soul Piece 5) maintain system consistency.

**Pipeline implication:** "What if different confidence levels could be placed side-by-side for direct comparison?"

**Derivation question:** "What if the reader could see established and speculative approaches simultaneously — a split-screen geological cross-section?"

---

### 22. Callout System (6 variants) — COMPONENT (NEW)

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--essence`, `.callout--tip`, `.callout--checkpoint`, `.callout--warning`, `.callout--gotcha`, `.callout--note`
**CSS lines:** 851–907
**HTML lines:** 1469–1474 (essence), 1547–1552 (note), 1628–1633 (tip), 1722–1727 (warning), 1866–1871 (note)
**DOM structure:**
```html
<div class="callout callout--essence reveal">
  <div class="callout__label">Essence</div>
  <div class="callout__body">
    <p>These four practices are bedrock...</p>
  </div>
</div>
```

**Reader function:** A 2-zone content container with a monospace uppercase label zone and a body zone, separated by a 1px bottom border on the label. Six color variants differentiate callout types: essence (red, serif italic body), tip (green), checkpoint (green with light green background), warning (amber), gotcha (coral), note (blue). The 4px left border carries the variant color, implementing Soul Piece 4: Callout Family DNA. DD-F-014 limits to max 2 callouts per viewport.

**Detection reasoning:** Component. It is a reusable structured container with defined slots (label + body) and 6 typed variants. It holds supplementary content — asides, tips, warnings, essence distillations. The consistent 2-zone structure with 4px colored left border makes it a single component family.

**Multi-channel coordination:** Three channels: (1) 4px left border color encodes variant type, (2) label text declares the callout type, (3) the essence variant triggers a typography gesture shift (body switches to serif italic). The checkpoint variant adds a light green background (#F4FAF6) as a fourth channel.

**Pipeline implication:** "What if there was a callout family with typed variants, each carrying a different semantic weight?"

**Derivation question:** "What if supplementary content came in typed containers — essence, tip, warning, note — each with a colored DNA stripe and consistent 2-zone structure?"

---

### 23. Crux Block — COMPONENT (NEW)

**CSS class(es):** `.crux-block`, `.crux-block__label`, `.crux-block__text`
**CSS lines:** 1030–1052
**HTML lines:** 1590–1595 (Rate Limiting), 1729–1734 (AI Schema)
**DOM structure:**
```html
<div class="crux-block reveal">
  <div class="crux-block__label">What Would Change This Rating</div>
  <div class="crux-block__text">
    <strong>Upgrade to Established:</strong> If the IETF standardized a rate limiting algorithm...
    <strong>Downgrade to Speculative:</strong> If distributed rate limiting proved unreliable...
  </div>
</div>
```

**Reader function:** An epistemic transparency container that declares what evidence would cause the confidence rating to change. Each instance has the purple-colored label "What Would Change This Rating" and a body with bolded "Upgrade to [higher level]" and "Downgrade to [lower level]" conditions. This is a structured container for meta-epistemology — knowledge about the conditions of knowledge.

**Detection reasoning:** Component. It has defined slots (label + text with upgrade/downgrade structure) and is reused identically in 2 instances. It holds structured content about the epistemological status of the preceding article. The 3px structural border and white background distinguish it from callouts (which use 4px left border).

**Multi-channel coordination:** Two channels: (1) purple label color connects this to the "open questions" end of the confidence spectrum (even when it appears in Probable or Speculative strata), (2) bold text within the body highlights the upgrade/downgrade conditions. The 3px full border (vs 4px left-only border on callouts) visually distinguishes this from the callout family.

**Pipeline implication:** "What if each non-established section declared what evidence would change its confidence rating?"

**Derivation question:** "What if every stratum below Established contained an explicit crux — the evidence that would promote or demote this content's confidence classification?"

---

### 24. Troubleshoot (Collapsible Details) — COMPONENT (NEW)

**CSS class(es):** `.troubleshoot`, `summary`, `.troubleshoot__body`, plus `::before` pseudo-element
**CSS lines:** 1057–1110
**HTML lines:** 1781–1788
**DOM structure:**
```html
<details class="troubleshoot reveal">
  <summary>Common Pitfalls with Speculative API Patterns</summary>
  <div class="troubleshoot__body">
    <p><strong>Premature adoption:</strong> Implementing speculative patterns in production...</p>
    <p><strong>Resume-driven development:</strong> Choosing architectural patterns because...</p>
    <p><strong>Cargo culting from FAANG:</strong> Patterns that work at Stripe's scale...</p>
  </div>
</details>
```

**Reader function:** A collapsible `<details>` element with coral accent color for progressive disclosure. The summary is styled as a monospace uppercase label with a coral-bordered square toggle indicator (+ when closed, - when open). The `::before` pseudo-element creates the toggle square (20px, 1px border, centered +/- character). The body is hidden by default, revealed on click, with a top border separator.

**Detection reasoning:** Component. It is a structured container with defined slots (summary label + body) and consistent visual treatment. The `<details>` HTML element provides native progressive disclosure. The coral accent color distinguishes it from other component families. Used once in this file, but the pattern is reusable.

**Multi-channel coordination:** Three channels: (1) coral border (3px full border) identifies this as a troubleshooting container, (2) the summary `::before` pseudo-element provides a square toggle indicator (+ / -) that changes state on open/close, (3) the summary's monospace uppercase treatment aligns it with the instrument aesthetic while the body's 14px body text returns to content mode.

**Pipeline implication:** "What if dense supplementary content was hidden behind progressive disclosure with a clear visual signal?"

**Derivation question:** "What if troubleshooting content was collapsible by default — available for those who need it, hidden from those who don't?"

---

### 25. Code Block — COMPONENT (NEW)

**CSS class(es):** `.code-block`, `.code-block__label`
**CSS lines:** 978–1010
**HTML lines:** 1402–1420 (HTTP status), 1444–1456 (Versioning), 1534–1544 (RFC 9457), 1610–1624 (Hypermedia), 1688–1719 (AI Schema)
**DOM structure:**
```html
<div class="code-block">
  <div class="code-block__label">Response Status Convention</div>
  <pre><code><!-- code content with .code-comment spans --></code></pre>
</div>
```

**Reader function:** A dark-themed code container with a labeled header zone. The label is monospace uppercase with a 1px bottom border separator within the dark context (#333333). The `<pre><code>` block holds the actual code with `.code-comment` spans for italicized gray syntax highlighting. Used 5 times across the page with different labels.

**Detection reasoning:** Component. It has defined slots (label + pre/code) and consistent structure across 5 instances. It structures technical content for reading. While the dark theme inversion is a Gesture (see entry 19), the container structure itself — label + code body with internal syntax highlighting — is a Component.

**Multi-channel coordination:** Two channels: (1) the label zone (monospace, uppercase, gray, 1px bottom border) provides context for the code, (2) the code zone (pre-formatted, monospace, with comment highlighting) provides the technical content. The separation mirrors the callout's 2-zone structure but in inverted colors.

**Pipeline implication:** "What if code blocks had labeled headers providing context, styled as dark-themed containers with internal syntax highlighting?"

**Derivation question:** "What if code examples were presented as labeled geological specimens — dark chambers with monospace field notation headers?"

---

### 26. What's Next (Terminal Navigation) — COMPONENT (NEW)

**CSS class(es):** `.whats-next`, `.whats-next__title`
**CSS lines:** 1163–1181
**HTML lines:** 1895–1918
**DOM structure:**
```html
<section class="whats-next reveal" aria-label="What You Now Know">
  <h2 class="whats-next__title">What You Now Know</h2>
  <ul class="verification-list">
    <!-- verification list items -->
  </ul>
  <p>Every stratum in this guide is independently valuable...</p>
</section>
```

**Reader function:** A terminal section container with a 3px full border and 4px red left border accent. Contains a serif italic heading and wraps the verification list and closing prose. This is the page's final structural container — the "end of survey" zone that provides closure.

**Detection reasoning:** Component. It has defined slots (title + content) and a consistent visual treatment (structural border + red left accent). It is a distinct container from the strata — a special-purpose wrapper for end-of-page content. The red left border connects it visually to the geological survey at the top (which also has a red left border), creating a structural bookend.

**Multi-channel coordination:** Two channels: (1) the 3px full border + 4px red left border creates a double-border treatment that signals "primary structural element" (matching the geological survey's treatment), (2) the serif italic title in section heading size provides the component's identity.

**Pipeline implication:** "What if the page had a terminal container that bookended with the opening survey — same visual treatment, different content?"

**Derivation question:** "What if the geological survey's conclusion used the same border treatment as its introduction — creating a visual bookend that signals 'the survey is complete'?"

---

## ADDITIONAL OBSERVATIONS

### Strata Inventory Markers (Sub-instrument within Geological Survey)

**CSS class(es):** `.strata-inventory__marker`, `.strata-inventory__marker--established/probable/speculative/open`
**CSS lines:** 501–512

10px colored squares (Soul Piece 5: Squares Signal System) that serve as legend markers in the geological survey. Colors match stratum borders: black/blue/amber/purple. These are part of the Geological Survey instrument but worth noting as a distinct visual element: they are the only place in the page where the 4-color confidence palette appears as standalone squares rather than as border colors.

### Skip-to-Content Link (Accessibility)

**CSS class(es):** `.skip-link`
**CSS lines:** 1218–1231
**HTML lines:** 1249

A visually-hidden accessibility link that becomes visible on focus. Not an instrument, gesture, or component in the reader-experience sense — purely an accessibility affordance.

### Selection Styling

**CSS lines:** 1237
Red background with warm cream text on `::selection`. A micro-gesture — it reinforces the brand when the reader selects text. Not significant enough to warrant a full entry.

### Print Styles

**CSS lines:** 1240–1245
White background, black text, hidden navigation elements, URL display after links. Pure utility — not a reader-experience element.

### Responsive Breakpoints

**CSS lines:** 491–493 (640px: strata-inventory to single column), 922–924 (720px: comparison-grid to single column), 1209–1215 (768px: meta/survey/comparison/strata all adapt)

Three responsive breakpoints that adapt the layout. These are not gestures — they maintain the reading experience at smaller viewports rather than creating a new one. The comparison grid collapsing from 2 columns to 1 at 720px is the most significant change, as it converts the side-by-side comparison into a sequential reading experience.

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. Read lines 1–1979 in 7 chunks of 300 lines each. Every CSS rule and every HTML element was examined.

2. **Am I identifying elements at the DOM level?** YES. Every finding includes specific CSS class names, line numbers for both CSS and HTML, and DOM structure excerpts. I identified elements by their class names and CSS rules, not by conceptual abstraction.

3. **Could I have missed subtle gestures?** POSSIBLE. The `::selection` styling (line 1237) is a micro-gesture I noted but didn't elevate to a full entry. The reduced-motion media query (lines 293–304) could be considered a "counter-gesture" — it deliberately disables the scroll reveal gesture for accessibility. The tab keyboard navigation JS (lines 1933–1974) adds a behavioral layer to the Confidence Switcher that coordinates ARIA state changes, but this is behavioral, not visual.

4. **Am I applying the reader-function test honestly?** YES. I rejected the skip-link, print styles, and responsive breakpoints as reader-experience elements because removing them would not change the primary reading experience (they serve accessibility, printing, and viewport adaptation). I elevated the Verification List to an Instrument because removing it genuinely changes the reader's experience of completing the survey.

5. **Did I check for pseudo-elements?** YES. Found: `.geological-survey::after` (solid offset depth, line 448), `.troubleshoot summary::before` (toggle indicator +/-, line 1080), `.troubleshoot[open] summary::before` (state change, line 1093), `::selection` (line 1237). The solid offset pseudo-element is part of the Geological Survey component. The troubleshoot toggle is part of the Troubleshoot component.

6. **Did I check responsive breakpoints?** YES. Three breakpoints documented: 640px (strata inventory), 720px (comparison grid), 768px (multiple elements). No elements appear or disappear at breakpoints — they reflow.

7. **Am I distinguishing styling from instruments/gestures?** YES. I identified `.comparison-column ul li { list-style-type: square; }` as styling (Soul Piece 5 consistency) rather than an instrument or gesture. I identified the inline code styling (`p code, li code`) as styling rather than a gesture — it signals "literal text" but does not change reading register. The WCAG focus-visible styling (lines 1196–1204) is accessibility, not reader-experience.

---

## SUMMARY

| Category | Count | From Calibration | New Discoveries |
|----------|-------|-----------------|-----------------|
| Instruments | 11 | 6 | 5 |
| Gestures | 8 | 3 | 5 |
| Components | 7 | 2 | 5 |
| **Total** | **26** | **11** | **15** |

### Key Structural Insight

OD-004's confidence-encoding system is remarkable for its **multi-channel redundancy**. Every stratum is encoded through at least 6 simultaneous channels: border weight, border color, background color, typography size, line-height, and padding. This redundancy means a reader perceives the confidence gradient even if they only register 2-3 of the channels. The instruments (evidence DNA, epistemic markers, depth labels) then provide explicit textual confirmation of what the visual channels have already communicated subliminally. This is a belt-and-suspenders approach to information encoding that no single design property could achieve alone.
