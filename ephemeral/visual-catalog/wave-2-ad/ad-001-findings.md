# AD-001: Z-Pattern Axis — Instrument / Gesture / Component Catalog

**File:** `/design-system/axis/AD-001-z-pattern.html`
**Lines:** 1737 (179 lines HTML threading header, 904 lines CSS in two `<style>` blocks, ~650 lines HTML body)
**Axis:** Z-Pattern diagonal eye-path
**Paired OD:** OD-001 Conversational (PULSE+TIDAL density)

---

## INSTRUMENTS (8 found)

---

### 1. Meta Line — INSTRUMENT

**CSS class(es):** `.meta-line`, `.version-badge`
**CSS lines:** 385–407
**HTML lines:** 915–919
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION AD-001</span>
  <span>AXIS: Z-PATTERN</span>
  <span class="version-badge">v1 enriched</span>
</div>
```

**Reader function:** Orients the reader before the title — tells them which exploration this is, which axis dimension it investigates, and the document version. All before the eye reaches the title.

**Detection reasoning:** This is pure metadata about the document itself. Remove it and the reader loses context about what they are reading. It does not deliver content — it frames it. Instrument, not Component (no reusable slot structure beyond label+badge).

**Multi-channel coordination:** Three visual channels encode metadata simultaneously: (1) uppercase letter-spacing 0.15em mono-weight text for classification labels, (2) monospace font-family shift for the version badge, (3) 1px border on the badge creating visual distinction from the surrounding label text. The flex layout with gap creates a scannable horizontal metadata strip.

**Pipeline implication:** A pipeline builder would derive this from the question: "How does the reader know what kind of document they're reading before they start?" The meta-line is the answer to classification-before-engagement.

**Derivation question:** "What if the reader needed to know the document's classification, axis type, and version at a glance — before reading the title?"

---

### 2. Running Header — INSTRUMENT

**CSS class(es):** `.running-header`
**CSS lines:** 847–857
**HTML lines:** 990, 1137, 1350, 1453, 1605
**DOM structure:**
```html
<div class="running-header">Chapter 1 — Fundamentals</div>
```

**Reader function:** Provides chapter-level wayfinding within the page. Each running header announces a new thematic section, telling the reader where they are in the document's macro-structure. Five instances mark five chapters.

**Detection reasoning:** The running header is a position-awareness device. It does not contain article content — it tells the reader which chapter they've entered. Remove all running headers and the reader loses their sense of progress through the document. Instrument, not Component (it's a single-line label, not a multi-slot container).

**Multi-channel coordination:** Four channels coordinate: (1) meta-sized type (0.75rem/12px) signals "this is navigation, not content," (2) uppercase + letter-spacing 0.15em creates visual distinction from body text, (3) 1px subtle border-bottom creates a visual floor that separates the header from content below, (4) secondary color (#666666) de-emphasizes it relative to body text.

**Pipeline implication:** Derived from: "How does the reader know which chapter they're in without scrolling back to the section title?" The running header is a persistent wayfinding signal.

**Derivation question:** "What if the reader needed a low-visual-weight chapter indicator that signals 'new zone' without competing with the section title?"

---

### 3. Z-Hero Diagonal Metadata Panel — INSTRUMENT

**CSS class(es):** `.z-hero__diagonal` (with inline styles for mono font)
**CSS lines:** 662–670
**HTML lines:** 964–972
**DOM structure:**
```html
<div class="z-hero__diagonal">
  <p style="font-family: var(--font-mono); font-size: var(--type-code); color: var(--color-text-secondary);">
    Axis: Z-PATTERN<br>
    Paired OD: OD-001 CONVERSATIONAL<br>
    Density: PULSE + TIDAL<br>
    Findings: AD-F-001 through AD-F-004
  </p>
</div>
```

**Reader function:** Occupies the Gutenberg "Weak Fallow" quadrant (bottom-left of the Z-hero grid). Delivers document metadata — axis type, paired exploration, density pattern, finding numbers — in monospace to signal "this is reference data." Readers can skip it without losing narrative flow, but it provides provenance for those who want it.

**Detection reasoning:** This is metadata about the exploration itself, placed deliberately in the lowest-attention zone of the Z-pattern. Its purpose is orientation and reference, not content delivery. The monospace font family shift explicitly marks it as data/metadata. Instrument because it tells the reader about the document's identity within the design system.

**Multi-channel coordination:** Three channels: (1) monospace font signals "literal data, not prose," (2) secondary color (#666666) reduces visual weight, (3) position in the hero's weak-fallow quadrant (bottom-left) aligns with Z-pattern theory — metadata belongs where attention is lowest.

**Pipeline implication:** Derived from: "What metadata does the reader need to trace this exploration's provenance and connections?" Placed where R4-016 dictates: supplementary info in the weak fallow area.

**Derivation question:** "What if the document's provenance data (axis type, paired OD, density pairing, findings) was visible but deliberately placed where the Z-pattern predicts lowest attention?"

---

### 4. Z-Terminal CTA — INSTRUMENT

**CSS class(es):** `.z-terminal-cta`
**CSS lines:** 818–835
**HTML lines:** 1034–1036, 1334–1336, 1577–1579
**DOM structure:**
```html
<div class="z-terminal-cta">
  <a href="#gutenberg-mapping">See: Gutenberg Diagram Mapping</a>
</div>
```

**Reader function:** Right-aligned navigational link placed at the bottom of Z-answer blocks — the terminal position in the Z-pattern. Tells the reader where to go next, creating directed flow between sections. Three instances create a chain of forward navigation through the document.

**Detection reasoning:** This is a wayfinding device, not content. It orients the reader's next action. The right-alignment and terminal positioning are deliberate Z-pattern theory applications (R4-002, R4-015). Remove these and the reader loses inter-section navigation guidance. Instrument because it controls reading flow, not information delivery.

**Multi-channel coordination:** Four channels: (1) flex + justify-content: flex-end pushes the CTA to the right edge (Z-terminal position), (2) meta-sized uppercase text (0.75rem, 600 weight, 0.05em letter-spacing) signals "navigation, not prose," (3) primary red color (#E83025) marks it as interactive, (4) 3px bottom border on the link creates a visual "floor" that terminates the Z-cycle.

**Pipeline implication:** Derived from: "After reading a Z-answer, where should the reader's eye go next?" The CTA at terminal position completes the Z-sweep by directing the eye to the next cycle.

**Derivation question:** "What if each Z-cycle ended with a directional signal at the bottom-right, matching where the Z-pattern predicts the eye will land?"

---

### 5. Gutenberg Zone Properties Table — INSTRUMENT

**CSS class(es):** `.z-properties` (modifier on `table`)
**CSS lines:** 792–798
**HTML lines:** 1071–1107
**DOM structure:**
```html
<table class="z-properties">
  <thead>
    <tr><th>Zone</th><th>Position</th><th>Content Role</th><th>Z-Pattern Function</th></tr>
  </thead>
  <tbody>
    <tr><td>Primary Optical</td><td>Top-left</td>...</tr>
    ...
  </tbody>
</table>
```

**Reader function:** Maps the four Gutenberg diagram zones to Z-pattern functions. This table is self-describing — it tells the reader how to read the page they're currently on. The table IS the axis annotation: it makes the Z-pattern visible by naming its zones.

**Detection reasoning:** This table does not deliver article content. It delivers a reading instruction — a map of how the page's own layout works. It's an instrument because it makes the page self-aware: "here is how the Z-pattern you're currently reading works." The `.z-properties` modifier gives the first column monospace red treatment, marking zone names as technical identifiers.

**Multi-channel coordination:** Two channels beyond base table styling: (1) first-column cells rendered in monospace + primary red color, marking zone names as technical terms, (2) four-column structure maps Zone → Position → Content Role → Z-Pattern Function, creating a meta-description of the page's own layout.

**Pipeline implication:** Derived from: "How does the reader understand the Z-pattern theory they're experiencing?" The table is an annotation layer — it names the reading path the reader is already traversing.

**Derivation question:** "What if the page included a table that maps its own layout zones to Gutenberg diagram theory, making the reading pattern self-documenting?"

---

### 6. Responsive Signal Transfer Table — INSTRUMENT

**CSS class(es):** (standard `table`, no modifier)
**CSS lines:** 526–558 (base table styles)
**HTML lines:** 1282–1313
**DOM structure:**
```html
<table>
  <thead><tr><th>Signal</th><th>Desktop (Z-Pattern)</th><th>Mobile (Linear Stack)</th></tr></thead>
  <tbody>
    <tr><td>PULSE</td>...</tr>
    <tr><td>TIDAL</td>...</tr>
    <tr><td>Z-Geometry</td>...</tr>
    <tr><td>Fractal</td>...</tr>
  </tbody>
</table>
```

**Reader function:** Documents how each density signal (PULSE, TIDAL, Z-Geometry, Fractal) transfers from desktop to mobile. This is a meta-level mapping — it tells the reader what will happen when the viewport changes. The reader understands the page's responsive behavior before experiencing it.

**Detection reasoning:** This table is about the page's own behavior, not article content. It describes how the layout transforms across breakpoints. Instrument because it makes the responsive strategy visible and explicit — a self-documentation device.

**Multi-channel coordination:** The three-column structure (Signal / Desktop / Mobile) creates a before/after map. The signal names in the first column serve as labels for reading-experience phenomena.

**Pipeline implication:** Derived from: "How does the reader understand what they'll lose and what they'll keep when the viewport shrinks?"

**Derivation question:** "What if the page documented its own responsive degradation strategy in a comparison table?"

---

### 7. Fractal Scale Mapping Table — INSTRUMENT

**CSS class(es):** (standard `table`, no modifier)
**CSS lines:** 526–558 (base table styles)
**HTML lines:** 1534–1565
**DOM structure:**
```html
<table>
  <thead><tr><th>Scale</th><th>Z-Pattern Expression</th><th>PULSE Mapping</th></tr></thead>
  <tbody>
    <tr><td>Page</td>...</tr>
    <tr><td>Section</td>...</tr>
    <tr><td>Component</td>...</tr>
    <tr><td>Character</td>...</tr>
  </tbody>
</table>
```

**Reader function:** Maps four fractal scales (Page, Section, Component, Character) to their Z-pattern and PULSE expressions. Tells the reader that the pattern they see at page level also exists at section, component, and character scales. Makes the fractal self-similarity visible as a classification.

**Detection reasoning:** This table is an annotation of the page's own structural principle (DD-F-006 fractal). It does not deliver article content — it describes the page's compositional architecture at four nested scales. Instrument because it makes the fractal structure self-aware.

**Multi-channel coordination:** Three-column structure (Scale / Z-Pattern Expression / PULSE Mapping) creates parallel description at each level. The four rows create a zoom-in sequence: page → section → component → character.

**Pipeline implication:** Derived from: "How does the reader understand that the sparse/dense pattern repeats at every scale?" The table makes fractal self-similarity explicit.

**Derivation question:** "What if the page mapped its own fractal nesting at four scales, showing how the same Z/PULSE pattern appears at page, section, component, and character levels?"

---

### 8. Implementation Checklist Table — INSTRUMENT

**CSS class(es):** (standard `table`, no modifier)
**CSS lines:** 526–558 (base table styles)
**HTML lines:** 1623–1684
**DOM structure:**
```html
<table>
  <thead><tr><th>Requirement</th><th>Implementation</th><th>Source</th></tr></thead>
  <tbody>
    <tr><td>Named grid areas</td><td><code>grid-template-areas</code>...</td><td>AD Conv. Section 12.1</td></tr>
    ... (10 rows)
  </tbody>
</table>
```

**Reader function:** Binary checklist of 10 required elements for a soul-compliant Z-Pattern implementation. Each row maps a requirement to its CSS implementation and provenance source. Tells the reader exactly what must be present and where the requirement originates.

**Detection reasoning:** This table is a validation instrument — a self-audit tool. It does not deliver article content; it tells the reader (and future builders) how to verify compliance. The three-column Requirement/Implementation/Source structure creates a traceable specification. Instrument because it enables verification of the page's own principles.

**Multi-channel coordination:** The `<code>` elements within Implementation cells create inline monospace markers for CSS values, distinguishing executable specifications from prose descriptions. The Source column provides provenance tracking.

**Pipeline implication:** Derived from: "How does a builder verify that their Z-Pattern implementation meets all requirements?" The checklist is the answer to compliance verification.

**Derivation question:** "What if the page included a binary checklist mapping every Z-Pattern requirement to its CSS implementation and research provenance?"

---

## GESTURES (9 found)

---

### 9. TIDAL Width Asymmetry (Q 60% / A 100%) — GESTURE

**CSS class(es):** `.z-question` (max-width: 60%), `.z-answer` (implicitly 100%)
**CSS lines:** 692–726
**HTML lines:** Every `.z-cycle` instance (997–1039, 1055–1123, 1142–1201, 1204–1260, 1264–1339, 1355–1428, 1458–1515, 1518–1581, 1609–1699)
**DOM structure:** N/A — this is a CSS-encoded reading shift, not a DOM element

**Reader function:** The width jump from 60% (question) to 100% (answer) IS the primary TIDAL density signal. It forces the eye to shift from a narrow reading corridor to a wide one at every Q→A transition. This width asymmetry creates the Z-diagonal: the eye must travel diagonally from the end of the narrow question to the start of the wide answer.

**Detection reasoning:** This is a coordinated multi-property shift that changes HOW the reader reads. The width change alters reading pace (narrow = faster scan of shorter lines; wide = slower, comprehensive reading). It's not a single style but a systematic visual shift that operates on every Q/A pair throughout the page. Gesture because the width variation changes reading mode, not just appearance.

**Multi-channel coordination:** Four properties shift together at the Q→A boundary: (1) max-width: 60% → implicit 100%, (2) background: zone-sparse → zone-dense, (3) border: 4px red left-border (Q) → 3px structural border all sides (A), (4) padding: 24px 32px (Q) → 32px (A). All four channels shift simultaneously to signal "you are now in the dense zone."

**Pipeline implication:** Derived from: "How does the reader's eye know when it has transitioned from question to answer?" The width shift is the spatial signal.

**Derivation question:** "What if the width variation between Q&A elements was the spatial expression of TIDAL density — narrow for sparse, wide for dense?"

---

### 10. Typography Velocity Shift (Serif 600 → Sans 400) — GESTURE

**CSS class(es):** `.z-question__text` (font-display, 600 weight), `.z-answer` body text (font-body, 400 weight)
**CSS lines:** 710–718 (question text), 299–307 (body base), 722–726 (answer)
**HTML lines:** Every Q/A pair throughout

**Reader function:** The font family and weight shift at the Q→A boundary controls reading speed. Instrument Serif at 600 weight creates visual friction at Z-entry points — the eye slows to process heavier, more textured letterforms. Inter at 400 weight enables fluid horizontal scanning during answer traversal. The typography IS the velocity controller.

**Detection reasoning:** This is a coordinated typographic register shift across two properties (font-family + font-weight) that changes HOW the reader reads. Heavy serif = slow reading (dense processing). Light sans = fast scanning (fluid traversal). The shift happens at every Q→A boundary, creating a systematic velocity modulation. Gesture because it changes reading speed, not just visual appearance.

**Multi-channel coordination:** Three channels shift together: (1) font-family: Instrument Serif → Inter, (2) font-weight: 600 → 400, (3) font-size: type-subsection (1.375rem) → type-body (1rem). All three shift at the same boundary to create a compound velocity change.

**Pipeline implication:** Derived from: "How do you control reading speed along the Z-path without using decorative elements?" Typography weight and family are the lever.

**Derivation question:** "What if the font family and weight at Z-entry points could control the reader's scanning velocity — heavy to slow them down, light to speed them up?"

---

### 11. Zone Background Color Alternation — GESTURE

**CSS class(es):** `.z-question` (zone-sparse: #FEF9F5), `.z-answer` (zone-dense: #FFFFFF), `.z-hero__diagonal` (zone-breathing: #FAF5ED)
**CSS lines:** 692–698 (question zone-sparse), 722–726 (answer zone-dense), 662–670 (diagonal zone-breathing)
**HTML lines:** Throughout all Q/A pairs and hero quadrants

**Reader function:** Three background colors encode three density zones: sparse (#FEF9F5 warm cream), dense (#FFFFFF white), and breathing (#FAF5ED warm tan). The color shift at each zone boundary signals a change in information density. On mobile (below 768px), this color system becomes the PRIMARY tidal signal after width variation collapses to 100%.

**Detection reasoning:** This is a systematic background color shift that operates across the entire page to encode density levels. It changes the reader's perception of information density at each zone boundary. Gesture because it's a coordinated visual shift tied to a reading-experience rule (color = density level), not just decoration.

**Multi-channel coordination:** Three colors operate as a system: (1) zone-sparse (#FEF9F5) for questions/low-density, (2) zone-dense (#FFFFFF) for answers/high-density, (3) zone-breathing (#FAF5ED) for transitions/resting points. The three values are close in hue but perceptibly different, creating a subtle density gradient.

**Pipeline implication:** Derived from: "How does the reader perceive density shifts when width variation isn't available (mobile)?" Color becomes the fallback density channel.

**Derivation question:** "What if three background colors encoded three density zones, with the color system serving as the primary TIDAL signal on mobile when width variation collapses?"

---

### 12. Border Category System (4px/3px/1px) — GESTURE

**CSS class(es):** Multiple — `.z-question` (4px red left), `.z-answer` (3px structural), `th` (3px bottom), `td` (1px bottom), `.chapter-divider` (3px top+bottom), `.running-header` (1px bottom)
**CSS lines:** 696 (question 4px), 725 (answer 3px), 542 (th 3px), 550 (td 1px), 786–787 (chapter-divider 3px), 855 (running-header 1px)
**HTML lines:** Throughout

**Reader function:** Three border weights encode three functional categories: Cat 1 structural (3px — section boundaries, answer containers, chapter dividers), Cat 2 separator (1px — table rows, running headers), and a special accent (4px red — question left-border, signaling Z-entry). The border weight IS the structural hierarchy signal. The reader unconsciously perceives heavier borders as more significant boundaries.

**Detection reasoning:** This is a systematic multi-weight border system that encodes structural hierarchy through thickness. It's not a single property but a coordinated encoding where border-width carries semantic meaning across the entire page. Gesture because the weight variation changes the reader's perception of structural importance.

**Multi-channel coordination:** Three weight tiers coordinate with color: (1) 4px solid primary red = Z-entry accent (unique to questions), (2) 3px solid border-color (#E0D5C5) = structural boundary, (3) 1px solid border-subtle (#F0EBE3) = data separator. The 2px width is deliberately banned (OD-F-AP-001).

**Pipeline implication:** Derived from: "How does the reader perceive structural hierarchy through border weight alone?" The three-category system answers this systematically.

**Derivation question:** "What if border thickness encoded structural importance — 4px for primary Z-entry markers, 3px for structural boundaries, 1px for data separators, and 2px banned entirely?"

---

### 13. Golden Ratio Grid Proportions — GESTURE

**CSS class(es):** `.z-hero`
**CSS lines:** 630–640
**HTML lines:** 940–982

**Reader function:** The hero grid uses golden ratio proportions (1.618fr : 1fr) for both columns and rows. This creates mathematically balanced Z-quadrants where the primary optical area (top-left) is ~62% of the width and height, and the terminal area (bottom-right) is ~38%. The asymmetry directs the eye along the Z-path by making the entry point visually dominant.

**Detection reasoning:** This is a CSS-encoded spatial proportion that changes HOW the reader's eye distributes across the four hero quadrants. It's not visible as a DOM element — it's a grid proportion that biases visual weight toward the primary optical area. Gesture because the proportion controls eye distribution, not just layout size.

**Multi-channel coordination:** Two properties coordinate: (1) grid-template-columns: 1.618fr 1fr, (2) grid-template-rows: 1.618fr 1fr. Both use the same golden ratio, creating proportional harmony across both axes simultaneously.

**Pipeline implication:** Derived from: "How do you make the Z-pattern's entry point visually dominant without decorative elements?" The golden ratio creates natural visual bias through proportion alone.

**Derivation question:** "What if the Z-pattern hero grid used golden ratio (1.618:1) proportions on both axes to create mathematically harmonious quadrant sizing?"

---

### 14. Responsive Z-Collapse at 768px — GESTURE

**CSS class(es):** `@media (max-width: 768px)` block affecting `.z-hero`, `.z-question`, `.micro-z`, `.header-inner`, `.page-container`
**CSS lines:** 861–903
**HTML lines:** N/A — applies to all existing elements

**Reader function:** At 768px, five coordinated changes happen simultaneously: (1) z-hero grid collapses from 2x2 to single column, (2) z-hero__terminal loses right-alignment, (3) z-question expands from 60% to 100% width, (4) micro-z collapses from 2-column to single column, (5) padding reduces on header and page container. The Z-pattern "degrades" to a linear stack while PULSE rhythm survives through Q/A alternation and background color (the TIDAL signal transfers from width to color).

**Detection reasoning:** This is a coordinated multi-element transformation at a single breakpoint. Five different elements change simultaneously according to one rule: "Z-geometry collapses, density signals transfer to non-spatial channels." Gesture because the responsive transformation changes the reading mode from Z-pattern to linear scanning.

**Multi-channel coordination:** Five properties shift together at the 768px breakpoint: grid-template (2x2 → 1col), max-width (60% → 100%), text-align (right → left), grid-template (micro-z 2col → 1col), padding (reduces). All shift simultaneously per a single rule.

**Pipeline implication:** Derived from: "What happens to Z-pattern theory when the viewport can't support two columns?" The collapse strategy preserves density signals while surrendering spatial geometry.

**Derivation question:** "What if the Z-pattern gracefully degraded at 768px, transferring TIDAL from width variation to color variation while preserving PULSE through Q/A alternation?"

---

### 15. Callout Label Typography — GESTURE

**CSS class(es):** `.callout__label`
**CSS lines:** 486–493
**HTML lines:** Every callout instance (1044, 1111, 1252, 1432, 1504, 1584, 1688)

**Reader function:** The callout label text uses a coordinated register shift: 0.75rem (12px) meta-sized type, 600 weight, 0.1em letter-spacing, uppercase transform. This combination creates a visual "announcement" that shifts the reader from body-prose mode to callout-awareness mode. The label acts as a gear-shift — it signals "the reading register is changing."

**Detection reasoning:** Multiple CSS properties shift together to create a single perceptual effect (register change). It's not just "small bold text" — it's a coordinated shift in size + weight + spacing + case that signals a reading mode change. Gesture because it changes how the reader processes the next block of text.

**Multi-channel coordination:** Four properties coordinate: (1) font-size: type-meta (0.75rem), (2) font-weight: 600, (3) letter-spacing: 0.1em, (4) text-transform: uppercase. All four create a single perceptual shift: "this is a label, not prose."

**Pipeline implication:** Derived from: "How does the reader know their reading mode is about to change?" The label typography announces a register shift.

**Derivation question:** "What if callout labels used a 4-property typographic shift (size + weight + spacing + case) to announce a reading register change?"

---

### 16. Essence Callout Serif Voice — GESTURE

**CSS class(es):** `.callout--essence .callout__body`
**CSS lines:** 518–521
**HTML lines:** 1045–1050, 1586–1592

**Reader function:** The Essence callout's body text shifts to Instrument Serif italic — the display font used for headings, but now deployed in a body context with italic. This creates a distinct "editorial voice" — as if a different speaker (the Archivist, per Soul Piece #2) is making a synthesizing observation. The font shift signals: "this is not information, this is insight."

**Detection reasoning:** This is a font-family + font-style shift that changes the reader's perception of who is speaking. The shift from Inter (body) to Instrument Serif italic (editorial) creates a different reading register — slower, more contemplative. Gesture because it changes the reading mode from informational to editorial.

**Multi-channel coordination:** Two properties shift together: (1) font-family: var(--font-display) (Instrument Serif), (2) font-style: italic. Combined with the purple accent (--accent-purple) on the label and border, these create a three-channel "editorial voice" signal.

**Pipeline implication:** Derived from: "How does the page signal that certain passages are editorial synthesis, not factual content?" The serif italic voice IS the signal.

**Derivation question:** "What if the design system had a distinct typographic voice for synthesis/insight passages — Instrument Serif italic as an 'Archivist' voice?"

---

### 17. Selection Highlight — GESTURE

**CSS class(es):** `::selection`
**CSS lines:** 338–341
**HTML lines:** N/A — applies to all text on the page

**Reader function:** Text selection uses primary red (#E83025) background with cream (#FEF9F5) text — the brand colors in inverted form. When the reader selects text, they see the design system's identity colors. This is a subtle branding gesture that surfaces only on interaction.

**Detection reasoning:** This is a pseudo-element CSS shift that changes the visual presentation on user interaction (text selection). It's not visible until the reader acts, then it transforms the selected area into a branded color pair. Gesture because it creates a reading-experience shift on interaction.

**Multi-channel coordination:** Two properties shift together on selection: (1) background: primary red, (2) color: background cream. The two-property inversion mirrors the header's dark-on-light scheme.

**Pipeline implication:** Derived from: "How does the brand identity surface during user interaction?" The selection highlight is an ambient identity gesture.

**Derivation question:** "What if text selection used the brand's primary color pair (red background, cream text) to create an ambient identity signal?"

---

## COMPONENTS (7 found)

---

### 18. Z-Hero Grid — COMPONENT

**CSS class(es):** `.z-hero`, `.z-hero__primary`, `.z-hero__secondary`, `.z-hero__diagonal`, `.z-hero__terminal`
**CSS lines:** 630–682
**HTML lines:** 940–982
**DOM structure:**
```html
<div class="z-hero">
  <div class="z-hero__primary">
    <h2>...</h2>
    <p>...</p>
  </div>
  <div class="z-hero__secondary">
    <h3>...</h3>
    <p>...</p>
  </div>
  <div class="z-hero__diagonal">
    <p>... metadata ...</p>
  </div>
  <div class="z-hero__terminal">
    <p>... thesis statement ...</p>
  </div>
</div>
```

**Reader function:** Four-quadrant grid container implementing the Z-pattern hero layout. Each quadrant has a defined role mapped to Gutenberg diagram zones: Primary Optical (top-left, topic title), Strong Fallow (top-right, key properties), Weak Fallow (bottom-left, metadata), Terminal (bottom-right, thesis/CTA). Golden ratio proportions (1.618fr:1fr) on both axes.

**Detection reasoning:** This is a reusable container with four defined slots, each with semantic meaning and consistent visual treatment. The grid-template-areas define a structured layout that could hold different content while maintaining the Z-pattern. Component because it has defined slot structure (4 quadrants) and consistent styling.

**Multi-channel coordination:** Each quadrant has a distinct background color (dense/sparse/breathing/dense), different padding, and unique alignment (terminal uses flex-end + text-align: right). The four quadrants create a coordinated visual field.

**Pipeline implication:** Derived from: "How do you establish Z-pattern geometry at the top of the page before content begins?" The Z-hero is the answer — an establishing shot.

**Derivation question:** "What if the page opened with a 4-quadrant grid mapping Gutenberg diagram zones, using golden ratio proportions to establish the Z-reading path?"

---

### 19. Z-Cycle (Q&A Pair) — COMPONENT

**CSS class(es):** `.z-cycle`, `.z-question`, `.z-question__label`, `.z-question__text`, `.z-answer`, `.z-answer__label`
**CSS lines:** 686–736
**HTML lines:** 997–1039, 1055–1123, 1142–1201, 1204–1260, 1264–1339, 1355–1428, 1458–1515, 1518–1581, 1609–1699
**DOM structure:**
```html
<div class="z-cycle">
  <div class="z-question">
    <div class="z-question__label">Question</div>
    <div class="z-question__text">How does...?</div>
  </div>
  <div class="z-answer">
    <div class="z-answer__label">Answer</div>
    <p>...</p>
    <!-- optional: callouts, tables, code, micro-z, z-terminal-cta -->
  </div>
</div>
```

**Reader function:** The primary content container for the entire page. Each Z-cycle contains one question (narrow, left-aligned, red-bordered, serif) and one answer (full-width, bordered, sans-serif). The cycle IS one PULSE beat: question = inhale (sparse), answer = exhale (dense). Nine Z-cycles structure the page's entire content.

**Detection reasoning:** This is the page's fundamental reusable container. It has defined slots (label, text for question; label, body content for answer), consistent visual treatment across 9 instances, and a clear structural pattern. Component because it's a multi-slot content container that repeats throughout the page.

**Multi-channel coordination:** The component coordinates six sub-elements: z-question (narrow, sparse background, red border), z-question__label (uppercase meta-text in red), z-question__text (serif 600 weight), z-answer (full-width, dense background, structural border), z-answer__label (uppercase meta-text in secondary gray), plus variable inner content.

**Pipeline implication:** Derived from: "How does Q&A content map to Z-pattern geometry?" The Z-cycle is the answer — each Q/A pair IS one Z-sweep.

**Derivation question:** "What if each Q&A pair was a single Z-sweep cycle — question at Z-entry (narrow, serif, red-bordered), answer at Z-traverse (full-width, sans, bordered)?"

---

### 20. Micro-Z Grid — COMPONENT

**CSS class(es):** `.micro-z`, `.micro-z__code-primary`, `.micro-z__explain-primary`, `.micro-z__code-secondary`, `.micro-z__explain-secondary`
**CSS lines:** 738–779
**HTML lines:** 1161–1198
**DOM structure:**
```html
<div class="micro-z">
  <div class="micro-z__code-primary">
    <pre><code>...</code></pre>
  </div>
  <div class="micro-z__explain-primary">
    <p>...</p>
  </div>
  <div class="micro-z__code-secondary">
    <pre><code>...</code></pre>
  </div>
  <div class="micro-z__explain-secondary">
    <p>...</p>
  </div>
</div>
```

**Reader function:** A 2x2 grid for code+explanation pairs that replicates the Z-pattern at component scale (DD-F-006 fractal). Code blocks sit on the left, explanations on the right, creating a mini-Z where the eye sweeps: code-primary (top-left) → explain-primary (top-right) → code-secondary (bottom-left) → explain-secondary (bottom-right). Collapses to single-column at 768px.

**Detection reasoning:** This is a reusable container with four defined slots in a 2x2 grid. It demonstrates fractal self-similarity — the same Z-pattern at a smaller scale within answer blocks. Component because it has defined slot structure and consistent visual treatment.

**Multi-channel coordination:** Code slots have dark backgrounds (from `pre` styling: #1A1A1A), explanation slots have sparse backgrounds (#FEF9F5) with centered flex alignment. The contrast between dark-code and light-explanation creates a visual Z within the component.

**Pipeline implication:** Derived from: "How does the Z-pattern manifest at component scale within answers?" The micro-Z grid is the fractal answer — Z within Z.

**Derivation question:** "What if code/explanation pairs were arranged in a 2x2 micro-Z grid, replicating the page's Z-pattern at component scale?"

---

### 21. Callout System (5 Variants) — COMPONENT

**CSS class(es):** `.callout`, `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--essence`; `.callout__label`, `.callout__body`
**CSS lines:** 479–521
**HTML lines:** 1043–1051, 1110–1121, 1250–1258, 1431–1441, 1503–1513, 1584–1593, 1687–1697
**DOM structure:**
```html
<div class="callout callout--essence">
  <div class="callout__label">Essence</div>
  <div class="callout__body">...</div>
</div>
```

**Reader function:** Two-zone container (label + body) with a 4px left border in an accent color. Five variants: note (blue), tip (green), gotcha (coral), caution (amber), essence (purple + serif italic body). Used 7 times throughout the page to break Z-pattern rhythm (R4-042) and inject editorial/cautionary/contextual information.

**Detection reasoning:** This is a reusable container with defined slots (label, body), consistent visual treatment (4px left border, zone-sparse background), and five semantic variants distinguished by accent color. Component because it has a repeating structure with defined inner slots.

**Multi-channel coordination:** Each variant coordinates three channels: (1) border-left-color set to variant accent, (2) label color matching the accent, (3) essence variant adds font-family shift + italic. The 5-color system encodes 5 semantic categories.

**Pipeline implication:** Derived from: "How does the page inject editorial commentary without breaking the Q&A flow?" The callout system provides structured interruption points.

**Derivation question:** "What if the page had a 5-variant callout system where each variant's accent color encoded a different semantic role (note, tip, gotcha, caution, essence)?"

---

### 22. Chapter Divider — COMPONENT

**CSS class(es):** `.chapter-divider`
**CSS lines:** 783–789
**HTML lines:** 1130, 1343, 1446, 1598
**DOM structure:**
```html
<div class="chapter-divider"></div>
```

**Reader function:** A 32px-high breathing zone with a "breathing" background color (#FAF5ED) and 3px structural borders on top and bottom. Placed between chapter sections (4 instances). Creates a "musical rest" — visual silence between Z-cycle groups that allows the reader to mentally reset before the next chapter.

**Detection reasoning:** While simple in DOM structure (empty div), this is a purposeful content container for "nothing" — it's the designed absence of content. Component because it has consistent visual treatment across 4 instances and serves a defined structural role (chapter boundary marker). Could also be argued as a Gesture (spacing shift), but the dedicated class, border treatment, and background color make it more than just whitespace — it's a rendered structural element.

**Multi-channel coordination:** Three channels: (1) height: 32px (space-8), (2) background: zone-breathing (#FAF5ED), (3) border-top + border-bottom: 3px structural (#E0D5C5). These create a visible horizontal band that says "chapter boundary."

**Pipeline implication:** Derived from: "How does the reader know a major chapter transition is happening?" The chapter divider provides a visual pause between Z-cycle groups.

**Derivation question:** "What if chapter boundaries were marked by visible breathing zones — empty horizontal bands with structural borders and a transition background color?"

---

### 23. Section Title — COMPONENT

**CSS class(es):** `.section-title`
**CSS lines:** 838–844
**HTML lines:** 993, 1139, 1352, 1455, 1607
**DOM structure:**
```html
<h2 class="section-title">Understanding the Z-Pattern</h2>
```

**Reader function:** Display-font heading with a 3px structural bottom border. Used 5 times to introduce major content sections. The bottom border creates a visual baseline that anchors the heading to its section content below.

**Detection reasoning:** This is a styled heading container with consistent treatment across 5 instances. Component because it has a defined visual pattern (display font + bottom border) that structures content sections. Simple, but its consistent use across all chapters makes it a structural building block.

**Multi-channel coordination:** Three channels: (1) font-family: display (Instrument Serif), (2) font-size: type-section (1.625rem), (3) border-bottom: 3px structural + padding-bottom spacing. The bottom border distinguishes it from standard h2 tags.

**Pipeline implication:** Derived from: "How does the reader know a new major section is beginning?" The section-title provides a visually anchored heading.

**Derivation question:** "What if section headings used a bottom border to anchor them to their content, distinguishing them from sub-headings?"

---

### 24. Footer — COMPONENT

**CSS class(es):** Inline styles on `<footer>` and inner elements
**CSS lines:** N/A (inline styles)
**HTML lines:** 1715–1720
**DOM structure:**
```html
<footer style="border-top: 3px solid var(--color-border); padding: var(--space-8) 0;">
  <div style="max-width: 1100px; margin: 0 auto; padding: 0 var(--space-6); display: flex; justify-content: space-between; align-items: center;">
    <span style="...">AD-001 &middot; Z-Pattern Axis</span>
    <span style="...">v1 enriched</span>
  </div>
</footer>
```

**Reader function:** Visual terminus of the page — a flex container with the exploration identifier on the left and version on the right, separated by a 3px structural top border. Creates a visual "floor" that signals the page has ended. The left/right layout echoes the Z-pattern's horizontal sweep at micro scale.

**Detection reasoning:** Component because it has a defined two-slot structure (identifier + version) with consistent visual treatment. It's the terminal boundary of the entire page.

**Multi-channel coordination:** Three channels: (1) 3px top border creates visual boundary, (2) flex with justify: space-between creates left/right positioning, (3) meta-sized uppercase text in secondary color matches the meta-line in the header, creating visual bookending.

**Pipeline implication:** Derived from: "How does the page signal 'you have reached the end'?" The footer provides the terminal boundary.

**Derivation question:** "What if the page ended with a minimal footer that echoed the header's meta-line, creating visual bookends?"

---

## SUMMARY

| Category | Count | Elements |
|----------|-------|----------|
| Instruments | 8 | Meta Line, Running Header, Z-Hero Diagonal Metadata, Z-Terminal CTA, Gutenberg Zone Table, Responsive Signal Transfer Table, Fractal Scale Table, Implementation Checklist Table |
| Gestures | 9 | TIDAL Width Asymmetry, Typography Velocity Shift, Zone Background Alternation, Border Category System, Golden Ratio Proportions, Responsive Z-Collapse, Callout Label Typography, Essence Serif Voice, Selection Highlight |
| Components | 7 | Z-Hero Grid, Z-Cycle (Q&A Pair), Micro-Z Grid, Callout System, Chapter Divider, Section Title, Footer |
| **TOTAL** | **24** | |

---

## METACOGNITIVE CHECK

**1. Did I read the ENTIRE file (CSS + HTML), or did I stop after finding "enough"?**
I read all 1737 lines in four passes (1–500, 500–1000, 1000–1500, 1500–1737). I covered both the locked-layer CSS (`<style id="locked-layer">`, lines 199–613), the axis-layer CSS (`<style id="axis-layer">`, lines 620–904), and all HTML body content (lines 907–1737).

**2. Am I identifying elements at the DOM level, or am I working at the abstract/conceptual level?**
At the DOM level. Each entry maps to specific CSS classes, line numbers, and HTML structures. Gestures are tied to specific CSS properties and the elements they affect, not to abstract concepts.

**3. Could I have missed subtle gestures — places where CSS properties shift together without obvious class name changes?**
Possible misses: (a) The `code:not(pre code)` inline code styling (lines 467–473) creates a subtle register shift (monospace + background + border), but it's more "styling" than "gesture" — it doesn't change reading mode so much as mark inline technical terms. (b) The `h3` italic rule (line 318) is a design-system-wide convention, not specific to this exploration. (c) The print styles (lines 574–597) transform the page for printing but are not a reading-experience gesture. I believe these are correctly excluded.

**4. Am I applying the reader-function test honestly? Would removing this element actually change the reader's experience?**
Yes. I rejected several candidates: the `.sr-only` class (utility, not reader-experience), the `.skip-link` (accessibility utility), the axis-zone semantic tokens (`.axis-zone--primary` etc., defined in CSS but not used in the HTML body), the `prefers-reduced-motion` media query (accessibility utility). Each would not change the reader's visual experience if removed (or in the case of axis-zone tokens, they aren't rendered).

**5. Did I check for pseudo-elements (::before, ::after, ::first-letter) that might constitute gestures?**
Yes. Found `::selection` (cataloged as Gesture #17). No `::before`, `::after`, or `::first-letter` pseudo-elements are defined in either CSS block. This file uses no pseudo-element-based decorations.

**6. Did I check responsive breakpoints (@media queries) for elements that appear/disappear at different viewports?**
Yes. Found two `@media` blocks: (1) `prefers-reduced-motion: reduce` (lines 563–569) — accessibility utility, not cataloged. (2) `max-width: 768px` (lines 861–903) — cataloged as Gesture #14 (Responsive Z-Collapse). Also checked print styles (lines 574–597) — utility, not cataloged. No elements appear/disappear; they transform.

**7. Am I distinguishing between "styling" (just making it look nice) and "instruments/gestures" (serving a reader-experience function)?**
Yes. I excluded: base typography rules (body font, heading fonts — these are system defaults, not gestures), table base styling (open grid, no vertical borders — structural convention, not a reading shift), inline code styling (marks technical terms but doesn't shift reading mode), header dark background (component styling, not a gesture), and page-container width constraint (layout utility).
