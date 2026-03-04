# AD-002: F-Pattern Layout — Visual Catalog Findings

**File:** `/design-system/axis/AD-002-f-pattern.html`
**Lines:** 1682 (CSS lines 129-923, HTML lines 926-1682)
**Axis:** F-Pattern (left-anchored scanning)
**Paired OD:** OD-002 Narrative (Freytag 5-beat arc, CRESCENDO density)
**Core thesis:** F-degradation (full scan -> partial scan -> vertical descent) IS CRESCENDO compression

---

## INSTRUMENTS (9 found)

### 1. Act Indicator — INSTRUMENT

**CSS class(es):** `.act-indicator`
**CSS lines:** 720-730
**HTML lines:** 966, 1055, 1237, 1467, 1571
**DOM structure:**
```html
<div class="act-indicator">Act I — Exposition</div>
```

**Reader function:** Tells the reader which Freytag act they are in. Monospace uppercase label provides immediate structural orientation — "where am I in the narrative arc?"

**Detection reasoning:** This is pure wayfinding metadata. Remove it and the reader loses awareness of the 5-act narrative structure. It tells you WHERE you are, not WHAT the content is. Classic Instrument.

**Multi-channel coordination:** Font-family (monospace), font-size (meta/12px), letter-spacing (0.1em), text-transform (uppercase), color (secondary gray), border-bottom (1px subtle separator). Six visual signals coordinate to say "this is a structural label, not content."

**Pipeline implication:** "What if the reader needs to know their position within a multi-act narrative structure at every section boundary?"

**Derivation question:** "What if each section opened with a spatial label that named the reader's position in the Freytag arc?"

---

### 2. Tension Meter — INSTRUMENT

**CSS class(es):** `.tension-meter`, `.tension-meter__segment`, `.tension-meter__segment--filled`, `.tension-meter__label`
**CSS lines:** 735-760
**HTML lines:** 967-974, 1056-1063, 1238-1245, 1468-1475, 1572-1579
**DOM structure:**
```html
<div class="tension-meter__label">Narrative tension: 1 / 5</div>
<div class="tension-meter" aria-label="Narrative tension: minimal, 1 of 5">
  <div class="tension-meter__segment tension-meter__segment--filled"></div>
  <div class="tension-meter__segment"></div>
  <div class="tension-meter__segment"></div>
  <div class="tension-meter__segment"></div>
  <div class="tension-meter__segment"></div>
</div>
```

**Reader function:** Visual progress bar showing CRESCENDO tension level. Five square segments, filled segments use `--color-primary` (red), unfilled use `--color-border-subtle`. Quantifies where the reader stands in the density/tension arc: Act I = 1/5, Act II = 2/5, Act III = 5/5, Act IV = 3/5, Act V = 1/5.

**Detection reasoning:** Pure metadata device. It doesn't deliver content — it tells you the page's emotional/density register at this point. Removing it loses the reader's awareness of narrative tension position. It is a gauge, a meter, a wayfinding instrument.

**Multi-channel coordination:** Filled segments: red background + red border. Unfilled segments: subtle background + border color. Label: monospace, meta-size, uppercase, secondary color. The fill level IS the information — purely visual encoding of a scalar value.

**Pipeline implication:** "What if the reader could see at a glance how much narrative tension has accumulated, as a visual gauge at each section boundary?"

**Derivation question:** "What if CRESCENDO density had a visible meter — like a fuel gauge for narrative tension?"

---

### 3. Meta-Line (Header) — INSTRUMENT

**CSS class(es):** `.meta-line`
**CSS lines:** 315-326
**HTML lines:** 935-939
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION AD-002</span>
  <span>AXIS: F-PATTERN</span>
  <span class="version-badge">v1 enriched</span>
</div>
```

**Reader function:** Orients the reader before they encounter the title. Three metadata chips in a flex row: exploration ID, axis type, and version status. Tells the reader WHAT this document is (exploration), WHICH dimension it explores (F-Pattern axis), and its STATUS (v1 enriched).

**Detection reasoning:** Pure orientation metadata. The page title follows below, but these chips answer "what kind of document is this?" before the reader even reaches the heading. Remove it and the reader loses the classificatory context.

**Multi-channel coordination:** Font-family (body/Inter), font-size (meta/12px), font-weight (500), letter-spacing (0.15em), text-transform (uppercase), color (secondary gray). The version badge adds monospace + border to differentiate from the other spans.

**Pipeline implication:** "What if the reader needed to know the document's classification, axis type, and version state before reading the title?"

**Derivation question:** "What if every exploration opened with a monospace metadata strip identifying its coordinates in the design system?"

---

### 4. Version Badge — INSTRUMENT

**CSS class(es):** `.version-badge`
**CSS lines:** 328-337
**HTML lines:** 938
**DOM structure:**
```html
<span class="version-badge">v1 enriched</span>
```

**Reader function:** Monospace chip with a 1px border indicating document version status. Differentiates from the adjacent meta-line spans by adding a border — visually separating "this is a status indicator" from "this is a label."

**Detection reasoning:** Version status is metadata about the document, not content within it. It tells the reader the document's lifecycle state. Sub-instrument within the meta-line.

**Multi-channel coordination:** Monospace font, meta-size, 1px border (Cat 3 micro), padding, secondary color. The border is the key differentiator — it makes this look like a "chip" or "badge" rather than plain text.

**Pipeline implication:** "What if document maturity were visible as a labeled chip in the header?"

**Derivation question:** "What if the reader could see at a glance whether this exploration is draft, enriched, or final?"

---

### 5. Header (Dark Full-Bleed) — INSTRUMENT

**CSS class(es):** `header`, `.header-inner`, `header h1`, `header .subtitle`
**CSS lines:** 303-354
**HTML lines:** 933-948
**DOM structure:**
```html
<header>
  <div class="header-inner">
    <div class="meta-line">...</div>
    <h1>AD-002: F-Pattern Layout</h1>
    <p class="subtitle">What if the F-pattern's natural reading degradation...</p>
  </div>
</header>
```

**Reader function:** Full-bleed dark background (#1A1A1A) with 3px red bottom border creates a strong visual "entry gate." Orients the reader with the exploration's identity before any content begins. The subtitle poses the exploration's core question.

**Detection reasoning:** The header is an orientation instrument — it establishes WHERE the reader is (which exploration), WHAT the question is (the subtitle), and visually marks "this is the beginning." The dark background inverts the page's color scheme, creating an unmistakable entry point. While it contains content (the title), its primary function is orientation.

**Multi-channel coordination:** Background inversion (dark on light page), 3px red border (structural boundary), Instrument Serif display font for h1, body font for subtitle at secondary color. The background color shift IS the signal — it says "you haven't entered the content yet."

**Pipeline implication:** "What if the page opened with a visually inverted zone that posed the exploration's central question?"

**Derivation question:** "What if the entry to the page were a dark gate that orients before content begins?"

---

### 6. Breathing Zone — INSTRUMENT

**CSS class(es):** `.breathing-zone`, `.breathing-zone__inner`
**CSS lines:** 651-662
**HTML lines:** 1029-1040, 1212-1222, 1444-1454, 1548-1559
**DOM structure:**
```html
<div class="breathing-zone">
  <div class="breathing-zone__inner">
    <div class="essence-pullquote">
      <p>...</p>
      <cite>...</cite>
    </div>
  </div>
</div>
```

**Reader function:** Transition marker between Freytag acts. Different background color (`--color-zone-breathing` / #FAF5ED) with 3px structural borders top and bottom. Creates a visual "airlock" between acts, signaling "the register is about to change." Contains an essence pullquote that summarizes the transition.

**Detection reasoning:** The breathing zone is a wayfinding instrument — it tells the reader "you are between acts, pause here." Remove it and the reader loses the visual marker of narrative transitions. The structural borders (top + bottom) create an unmistakable break. It serves orientation (where am I in the narrative) more than content delivery.

**Multi-channel coordination:** Background color shift (breathing zone color vs act zone color), 3px borders top AND bottom (double structural boundary), max-width constraint, padding. The dual border is unique to this element — nowhere else has both top and bottom 3px borders.

**Pipeline implication:** "What if act transitions were marked by a distinct visual zone with breathing room and a reflective quote?"

**Derivation question:** "What if the space between narrative acts were a visible pause — an airlock between registers?"

---

### 7. Essence Pullquote — INSTRUMENT

**CSS class(es):** `.essence-pullquote`, `.essence-pullquote p`, `.essence-pullquote cite`
**CSS lines:** 762-789
**HTML lines:** 1032-1038, 1214-1220, 1446-1452, 1550-1557
**DOM structure:**
```html
<div class="essence-pullquote">
  <p>The eye does not read documentation. It interrogates the page...</p>
  <cite>Reading physics observation — EXT-AXIS-F-001</cite>
</div>
```

**Reader function:** A pull quote that distills the preceding act's insight into a single resonant statement. Uses Instrument Serif italic at section-title size (1.625rem) with a 4px purple left border. The cite element credits the source in monospace uppercase. This is reflective metadata — it tells the reader "here is the essence of what you just read."

**Detection reasoning:** While it contains prose, its function is metacognitive — it summarizes and reflects, not delivers new information. It appears exclusively in breathing zones between acts. The typography shift (to serif italic at large size) signals "this is a reflection, not content." It serves the reader's orientation by consolidating meaning at transition points.

**Multi-channel coordination:** Serif italic (register shift from body text), large size (1.625rem), purple left border (accent color = reflection/essence), sparse background, narrow max-width (55ch), cite in monospace uppercase. The font family shift from Inter to Instrument Serif IS the register change.

**Pipeline implication:** "What if each narrative transition included a single-sentence crystallization of the preceding act's core insight?"

**Derivation question:** "What if the breathing pause between acts contained a resonant distillation — one sentence that captures the essence?"

---

### 8. Decision Matrix Score Encoding — INSTRUMENT

**CSS class(es):** `.decision-matrix__score`, `.decision-matrix__score--high`, `.decision-matrix__score--mid`, `.decision-matrix__score--low`
**CSS lines:** 809-825
**HTML lines:** 1386-1418 (within table cells)
**DOM structure:**
```html
<span class="decision-matrix__score decision-matrix__score--high">HIGH</span>
<span class="decision-matrix__score decision-matrix__score--mid">MID</span>
<span class="decision-matrix__score decision-matrix__score--low">LOW</span>
```

**Reader function:** Color-coded score indicators within the decision matrix. High = green, Mid = amber, Low = coral. Monospace font at code size. The color encoding lets the reader scan the matrix visually — patterns of green/amber/coral immediately reveal which pattern wins without reading cell text.

**Detection reasoning:** These are metadata annotations within a content table. The text (HIGH/MID/LOW) is content, but the COLOR is the instrument — it encodes a qualitative judgment as a visual signal. The color pattern across the matrix IS the finding (F-Pattern dominates). Remove the color and the reader must read each cell individually rather than scanning the color pattern.

**Multi-channel coordination:** Font-family (monospace), font-weight (500), font-size (code), and crucially COLOR (green/amber/coral mapped to high/mid/low). Color is the primary channel — it creates a scannable heatmap effect.

**Pipeline implication:** "What if comparative scores in a decision matrix were color-encoded so the reader could scan for patterns visually?"

**Derivation question:** "What if the climax's decision matrix used color as a visual heatmap for at-a-glance pattern comparison?"

---

### 9. Page Footer — INSTRUMENT

**CSS class(es):** `.page-footer`, `.page-footer__inner`, `.page-footer__id`, `.page-footer__rule`
**CSS lines:** 846-872
**HTML lines:** 1674-1680
**DOM structure:**
```html
<footer class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">AD-002 -- F-Pattern Layout</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">Exploration Complete</span>
  </div>
</footer>
```

**Reader function:** Visual ending marker. Dark background (#1A1A1A) with 3px red top border — mirrors the header. Contains the exploration ID, a 48px red rule, and "Exploration Complete" status. Tells the reader "the page is over, you have reached the end."

**Detection reasoning:** Pure wayfinding. The footer bookends the header — same dark background, same red border (top instead of bottom). It confirms the reader's position: the end. The red rule is a visual period mark.

**Multi-channel coordination:** Background inversion (dark), 3px red top border, monospace IDs, flex layout with space-between, 48px x 3px red rule as visual terminus.

**Pipeline implication:** "What if the page ended with a visual bookend that mirrored the header's dark/red treatment?"

**Derivation question:** "What if the page had a definitive visual ending — a bookend that closes the narrative frame opened by the header?"

---

## GESTURES (9 found)

### 10. CRESCENDO Spacing Compression — GESTURE

**CSS class(es):** `.act-zone--exposition`, `.act-zone--rising`, `.act-zone--climax`, `.act-zone--falling`, `.act-zone--denouement`
**CSS lines:** 595-648
**HTML lines:** 963, 1052, 1235, 1465, 1569

**Reader function:** Padding systematically compresses and then relaxes across the five acts, creating a physical encoding of CRESCENDO density. Act I: 64px top/bottom (sparse). Act II: 48px (moderate). Act III: 32px (dense/peak). Act IV: 48px (relaxing). Act V: 64px top / 80px bottom (sparse bookend). The reader physically feels the content "tightening" and then "releasing."

**Detection reasoning:** This is a coordinated multi-property shift across five elements. The padding values follow a rule (sparse -> dense -> sparse) rather than being arbitrary. It changes HOW the reader experiences pacing — not WHAT they read. No single class does this alone; the gesture only exists as the pattern across all five act zones.

**Multi-channel coordination:** Padding-top and padding-bottom shift together in coordinated compression. The background colors also shift: exposition/falling/denouement use `--axis-zone-secondary` (sparse), rising/climax use `--axis-zone-primary` (dense). TWO channels (spacing + background) encode the same CRESCENDO arc.

**Pipeline implication:** "What if section padding systematically compressed from sparse to dense across a narrative arc, making the reader feel the tension physically?"

**Derivation question:** "What if whitespace itself were the CRESCENDO — progressively less breathing room as tension builds?"

---

### 11. Line-Height Compression — GESTURE

**CSS class(es):** `.act-zone--exposition p`, `.act-zone--climax p` (plus base `p` styling)
**CSS lines:** 601-604, 627-630, 251-255
**HTML lines:** Affects all `<p>` elements within act zones

**Reader function:** Body text line-height shifts across acts. Base: 1.7. Exposition: 1.8 (extra loose, contemplative pace). Climax: 1.5 (implied via tighter max-width at 70ch vs 65ch in exposition). The line-height compression mirrors the spacing compression — text becomes physically denser as narrative tension increases.

**Detection reasoning:** This is a CSS-encoded reading-pace shift. Looser line-height = slower reading, denser line-height = faster scanning. It changes HOW the reader moves through text, coordinated with the overall CRESCENDO density arc. The exposition's explicit 1.8 line-height is a deliberate departure from the base 1.7.

**Multi-channel coordination:** Line-height (1.8 -> 1.7 -> implied tighter) + max-width (65ch -> 70ch) shift together. Wider line-height + narrower max-width = sparse reading. The two channels cooperate.

**Pipeline implication:** "What if line-height tracked CRESCENDO tension — looser in exposition, tighter at climax?"

**Derivation question:** "What if the physical density of text itself — the space between lines — encoded the narrative's tension level?"

---

### 12. Left-Spine Landmark Hierarchy — GESTURE

**CSS class(es):** `.act-zone h2`, `.act-zone h3`, `.act-zone h4`
**CSS lines:** 667-694
**HTML lines:** All h2/h3/h4 within act zones

**Reader function:** Three heading levels create a multi-signal hierarchy for vertical left-edge scanning. H2: Instrument Serif + 4px red left border + padding-left + section size. H3: Instrument Serif italic + subsection size. H4: Inter uppercase + 0.05em letter-spacing + body size. Each level uses a DIFFERENT combination of font family, style, size, and structural markers.

**Detection reasoning:** This is a coordinated multi-property shift across three heading levels. It's not just "making headings different sizes" — each level changes font family, font style, text-transform, and structural markers (border-left) simultaneously. The gesture creates the "left spine" that the F-pattern's vertical descent scans. It changes HOW the reader navigates (scanning the left edge) by providing multi-redundant signals.

**Multi-channel coordination:** H2: serif + large + red left border + padding. H3: serif + italic + medium. H4: sans-serif + uppercase + letter-spacing + body size. FOUR channels vary: font-family, font-style, text-transform, and border. The redundancy is deliberate — scanning at speed requires multiple signals.

**Pipeline implication:** "What if heading levels used multi-signal differentiation (family, style, border, case) so vertical scanning could distinguish them at speed?"

**Derivation question:** "What if the left spine's landmarks were redundantly differentiated — so even peripheral vision could tell H2 from H3 from H4?"

---

### 13. Code Density CRESCENDO — GESTURE

**CSS lines:** N/A (structural HTML pattern, not a single CSS class)
**HTML lines:** Act I: 0 `<pre>` blocks. Act II: 0 `<pre>` blocks (inline `<code>` only). Act III: 3 `<pre>` blocks (lines 1269, 1307, 1354). Act IV: 1 `<pre>` block (line 1500). Act V: 1 `<pre>` block (line 1636) + 1 table.

**Reader function:** The number and size of code blocks follows the CRESCENDO arc: 0 -> inline only -> 3 full blocks -> 1 block -> 1 block. This mirrors the attention pattern: pure prose in exposition (building conceptual framework), peak code density at climax (maximum technical depth), then code recedes in falling action and denouement.

**Detection reasoning:** This is not a single CSS property — it's a structural pattern across the entire document. The density of code blocks changes how the reader engages (prose-reading vs code-scanning). It shifts the reading mode across the page. The pattern 0 -> inline -> full -> comparison -> reference is a coordinated gesture.

**Multi-channel coordination:** Code block count + code block size + code block complexity all increase toward Act III and decrease after. Code in Act III has syntax highlighting spans; the Act V code is a minimal scaffold.

**Pipeline implication:** "What if code block density followed the same CRESCENDO arc as spacing — zero in exposition, peak at climax, tapering to reference at denouement?"

**Derivation question:** "What if the presence of code itself were a CRESCENDO instrument — strategically withheld, then deployed at peak density?"

---

### 14. Background Zone Color Shift — GESTURE

**CSS class(es):** `.act-zone--exposition`, `.act-zone--rising`, `.act-zone--climax`, `.act-zone--falling`, `.act-zone--denouement`, `.breathing-zone`
**CSS lines:** 564-569, 595-648, 651-657

**Reader function:** Background colors shift systematically across zones. Sparse acts (I, IV, V): `--axis-zone-secondary` (= `--color-zone-sparse` = #FEF9F5). Dense acts (II, III): `--axis-zone-primary` (= `--color-zone-dense` = #FFFFFF). Breathing zones: `--axis-zone-transition` (= `--color-zone-breathing` = #FAF5ED). Three distinct backgrounds encode three density registers.

**Detection reasoning:** This is a coordinated color shift that changes the reading environment. The reader experiences three distinct "zones" through background color alone. Dense content gets the brightest background (white); sparse content keeps the warm cream; transitions use an intermediate warm tone. This is not decorative — it signals density register.

**Multi-channel coordination:** Background color shifts in coordination with padding compression. Dense padding + white background = "dense zone." Generous padding + cream background = "sparse zone." The two channels (spacing + color) are redundant encodings of the CRESCENDO position.

**Pipeline implication:** "What if zone backgrounds encoded density register — brighter for dense, warmer for sparse, intermediate for transitions?"

**Derivation question:** "What if the reader's peripheral vision could sense density changes through background color alone, before reading a word?"

---

### 15. Editorial Serif/Sans Register Shift — GESTURE

**CSS class(es):** Headings use `--font-display` (Instrument Serif), body uses `--font-body` (Inter), metadata uses `--font-mono` (JetBrains Mono)
**CSS lines:** 239-242 (heading rule), 230-237 (body rule), 316-326 (meta rule)

**Reader function:** The Typography Trinity creates three reading registers: Instrument Serif for structural landmarks (headings, pullquotes), Inter for comprehension content (body paragraphs), JetBrains Mono for metadata/technical content (act indicators, code, table headers). The reader unconsciously shifts reading mode when the font changes.

**Detection reasoning:** This is a system-wide register shift — not a single CSS change, but a coordinated assignment of three font families to three reading modes. The font family IS the mode signal. When you see serif, you are scanning structure. When you see sans-serif, you are reading content. When you see monospace, you are processing metadata or code.

**Multi-channel coordination:** Font-family is the primary channel, but it coordinates with: font-size (serif is larger), font-style (h3 serif is italic), letter-spacing (mono has wider tracking), text-transform (mono labels are uppercase). The font family shift triggers a cascade of associated properties.

**Pipeline implication:** "What if three font families mapped to three reading modes — structural scanning, content comprehension, and metadata processing?"

**Derivation question:** "What if the reader's reading register were controlled by font family — serif for scanning, sans for reading, mono for processing?"

---

### 16. Structural Border Hierarchy — GESTURE

**CSS class(es):** Multiple — `header`, `pre`, `.breathing-zone`, `.decision-matrix`, `.act-zone h2`, `.page-footer`, `.callout`, etc.
**CSS lines:** 306, 371, 655-656, 670, 795, 802, 848, 410, 729-730

**Reader function:** Three border categories encode three levels of structural significance. Cat 1 (3px solid, `--color-border` or `--color-primary`): Major structural boundaries — header bottom, code block borders, breathing zone top/bottom, decision matrix border, h2 left accent, footer top. Cat 2 (1px solid, `--color-border-subtle`): Content separators — table row borders, act-indicator bottom. Cat 3 (1px solid, `--color-border`): Micro-details — version badge border, tension-meter segment borders, inline code borders.

**Detection reasoning:** This is a coordinated system, not individual styling. Three border weights (3px, 1px-subtle, 1px-normal) map to three structural levels. The reader unconsciously processes 3px borders as "major boundary" and 1px borders as "minor detail." Remove the hierarchy and all borders feel equally important (or unimportant).

**Multi-channel coordination:** Border-width (3px vs 1px) + border-color (primary red, border, border-subtle) + border-position (left for accents, bottom for separators, all-around for containers). Three properties encode the structural hierarchy.

**Pipeline implication:** "What if border weight encoded structural significance — 3px for major boundaries, 1px for separators, 1px-subtle for micro-details?"

**Derivation question:** "What if the reader could gauge structural importance by border thickness alone — heavier = more important boundary?"

---

### 17. Callout Accent Color System — GESTURE

**CSS class(es):** `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--essence`
**CSS lines:** 432-451
**HTML lines:** 1012, 1130, 1332, 1426, 1516, 1656

**Reader function:** Five callout variants use border-left color + label color to encode callout type. Blue (note) = context/information. Green (tip) = implementation guidance. Coral (gotcha) = common mistake. Amber (caution) = warning. Purple (essence) = reflective/philosophical (with serif italic body). The left-border color IS the semantic signal — the reader sees the color before reading the label.

**Detection reasoning:** This is a coordinated gesture: border-left-color + label color shift together per variant. The essence variant goes further — it also shifts the body font to serif italic, creating a register change within the callout. The color encoding changes HOW the reader approaches the callout (alert level, reading mode).

**Multi-channel coordination:** Border-left-color + label color shift together (5 variants). The essence variant adds a third channel: body font-family (serif italic). Color → semantic meaning mapping: blue=info, green=positive, coral=error, amber=warning, purple=reflection.

**Pipeline implication:** "What if callout types were encoded by accent color so the reader could identify the type before reading a word?"

**Derivation question:** "What if callout semantics were visible through color alone — note, tip, gotcha, caution, essence — each with a distinct accent?"

---

### 18. Responsive Collapse — GESTURE

**CSS class(es):** `@media (max-width: 768px)` block
**CSS lines:** 876-922

**Reader function:** At 768px, the entire layout transforms: two-column grid becomes single-column, act zone padding reduces (~30%), header h1 scales to 80%, breathing zones compress, decision matrix text shrinks, pullquote text shrinks, footer reflows to column. This is not a single CSS change — it's a coordinated multi-property shift that adapts the F-pattern to mobile's pure vertical scanning.

**Detection reasoning:** This is a system-wide gesture at a breakpoint. Ten+ properties shift simultaneously according to one rule: "adapt F-pattern for single-column vertical scanning." The grid collapse is the most visible change, but padding, font-size, and layout direction all shift together.

**Multi-channel coordination:** Grid columns (2 -> 1), padding (reduced ~30%), font-size (h1 scaled, table shrunk, pullquote shrunk), flex-direction (footer horizontal -> vertical). Four channels shift simultaneously at one breakpoint.

**Pipeline implication:** "What if the F-pattern gracefully degraded to pure vertical scanning on mobile via a single-breakpoint multi-property shift?"

**Derivation question:** "What if mobile adaptation preserved the CRESCENDO density arc while collapsing the horizontal F-scan to vertical-only?"

---

## COMPONENTS (7 found)

### 19. Act Zone — COMPONENT

**CSS class(es):** `.act-zone`, `.act-zone--exposition`, `.act-zone--rising`, `.act-zone--climax`, `.act-zone--falling`, `.act-zone--denouement`
**CSS lines:** 583-648
**HTML lines:** 963-1025, 1052-1207, 1235-1440, 1465-1545, 1569-1669
**DOM structure:**
```html
<section aria-label="Act I — Exposition: ..." class="act-zone act-zone--exposition">
  <div class="act-indicator">Act I — Exposition</div>
  <div class="tension-meter__label">...</div>
  <div class="tension-meter">...</div>
  <h2>...</h2>
  <div class="content-block">...</div>
  <!-- callouts, tables, etc. -->
</section>
```

**Reader function:** The primary content container for each Freytag act. Five variants with different padding and background colors. Each contains: act indicator, tension meter label, tension meter, h2 title, and content blocks. The `<section>` with `aria-label` provides semantic grouping.

**Detection reasoning:** This is a reusable multi-slot container. It holds article content in a defined structure: indicator -> meter -> heading -> blocks. Five variants exist, each with distinct padding/background encoding its CRESCENDO position. It's a Component, not an Instrument (it holds content) or a Gesture (it's a container, not a shift).

**Pipeline implication:** "What if each narrative act were a distinct section container with its own density encoding, wayfinding instruments, and content slots?"

**Derivation question:** "What if the Freytag 5-act structure were encoded as five section containers, each with unique density parameters?"

---

### 20. Content Block — COMPONENT

**CSS class(es):** `.content-block`
**CSS lines:** 698-704
**HTML lines:** 979, 1001, 1068, 1111, 1146, 1250, 1258, 1297, 1344, 1370, 1480, 1496, 1528, 1584, 1593, 1634
**DOM structure:**
```html
<div class="content-block">
  <h3>...</h3>  <!-- optional -->
  <p>...</p>
  <pre><code>...</code></pre>  <!-- optional -->
</div>
```

**Reader function:** Generic content wrapper within act zones. Provides consistent bottom margin (`--space-between` = 32px) with last-child margin removed. Contains any combination of headings, paragraphs, code blocks, tables, and lists.

**Detection reasoning:** This is the basic content container — the "paragraph group" unit within each act. It doesn't have a complex multi-slot structure, but it provides consistent spacing rhythm. Sixteen instances across the page.

**Pipeline implication:** "What if body content within each act were grouped into rhythm-consistent blocks with predictable spacing?"

**Derivation question:** "What if content paragraphs were wrapped in a container that enforced consistent inter-block spacing?"

---

### 21. Two-Column Layout — COMPONENT

**CSS class(es):** `.two-col`
**CSS lines:** 709-714
**HTML lines:** 1078-1109
**DOM structure:**
```html
<div class="two-col">
  <div>
    <h3>The First Horizontal Scan</h3>
    <p>...</p>
  </div>
  <div>
    <h3>The Second Horizontal Scan</h3>
    <p>...</p>
  </div>
</div>
```

**Reader function:** CSS Grid two-column layout for side-by-side content in moderate-density acts. `grid-template-columns: 1fr 1fr` with 32px gap. Used in Act II for the two horizontal scan descriptions. Collapses to single column at 768px.

**Detection reasoning:** Reusable layout container with defined structure (two equal-width children). It structures content spatially — placing related items side by side for comparison. Only used once in this file, but the CSS is generic enough for reuse.

**Pipeline implication:** "What if moderate-density sections used side-by-side columns for related parallel content?"

**Derivation question:** "What if the F-pattern's horizontal scan were served by two-column layouts in moderate-density acts?"

---

### 22. Callout — COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body` (plus 5 accent variants)
**CSS lines:** 409-451
**HTML lines:** 1012-1023, 1130-1142, 1332-1342, 1426-1438, 1516-1526, 1656-1667
**DOM structure:**
```html
<aside class="callout callout--note">
  <div class="callout__label">Context</div>
  <div class="callout__body">
    <p>...</p>
  </div>
</aside>
```

**Reader function:** Two-slot container (label + body) with 4px left border in accent color. Six instances across the page in five variants: note (blue), tip (green x2), gotcha (coral), caution (amber), essence (purple with serif italic body). The `<aside>` semantics mark it as supplementary content.

**Detection reasoning:** Classic structured component — a reusable container with defined slots (label, body), consistent visual treatment (left border, padding, background), and variant system (5 accent colors). It holds content, not metadata.

**Pipeline implication:** "What if supplementary information were contained in a 2-slot component with semantic color encoding?"

**Derivation question:** "What if asides used a label/body container with color-coded left borders to signal their semantic type?"

---

### 23. Decision Matrix — COMPONENT

**CSS class(es):** `.decision-matrix`, `.decision-matrix th`, `.decision-matrix td`, `.decision-matrix__score`
**CSS lines:** 794-825
**HTML lines:** 1374-1422
**DOM structure:**
```html
<table class="decision-matrix">
  <thead>
    <tr>
      <th>Criterion</th>
      <th>F-Pattern</th>
      <th>Z-Pattern</th>
      <th>Gutenberg</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Documentation fit</td>
      <td><span class="decision-matrix__score decision-matrix__score--high">HIGH</span></td>
      ...
    </tr>
    ...
  </tbody>
</table>
```

**Reader function:** Specialized table component for the climax's pattern comparison. Dark header row (inverted colors), 3px structural border, red bottom border on header, and color-coded score spans. Places the F-Pattern's competitive analysis at the narrative's peak density.

**Detection reasoning:** This is a specialized table component — not a generic table. It has its own dark header treatment, structural border, and score encoding system. It appears once at the climax as the "decision point" of the narrative arc.

**Pipeline implication:** "What if the narrative climax contained a decision matrix component with color-coded comparative scores?"

**Derivation question:** "What if the climax's intellectual payoff were a visual comparison matrix — the reader's reward for reaching peak density?"

---

### 24. Code Block (Dark Theme) — COMPONENT

**CSS class(es):** `pre`, `pre code`, syntax classes (`.kw`, `.st`, `.cm`, `.fn`, `.ty`, `.nu`, `.pu`)
**CSS lines:** 368-394
**HTML lines:** 1269-1294, 1307-1328, 1354-1365, 1500-1512, 1636-1652
**DOM structure:**
```html
<pre><code><span class="cm">/* Comment */</span>
<span class="fn">.selector</span> <span class="pu">{</span>
  <span class="kw">property</span><span class="pu">:</span> <span class="nu">value</span><span class="pu">;</span>
<span class="pu">}</span></code></pre>
```

**Reader function:** Dark background (#1A1A1A) code block with 3px structural border, monospace font, and 7-color syntax highlighting system. Five instances across the page following the code CRESCENDO pattern (0-0-3-1-1). The dark background inverts the page's light scheme, creating high-contrast code zones.

**Detection reasoning:** Reusable content container with defined structure (pre > code > syntax spans), consistent visual treatment (dark bg, border, monospace, highlighting), and 7 syntax token types. It holds technical content in a structured format.

**Pipeline implication:** "What if code blocks used dark-on-light inversion with 7-color syntax highlighting for maximum scanability?"

**Derivation question:** "What if code blocks were visually inverted zones — dark islands in a light page — with semantic syntax coloring?"

---

### 25. Term Definition (Inline) — COMPONENT

**CSS class(es):** `.term-def`
**CSS lines:** 828-831
**HTML lines:** 1105, 1121
**DOM structure:**
```html
<span class="term-def">landing pads</span>
<span class="term-def">left spine</span>
```

**Reader function:** Inline term definitions marked with bold weight (600) and 3px bottom border. Used to introduce key concepts ("landing pads", "left spine") within flowing prose. The border signals "this is a defined term" without breaking the reading flow.

**Detection reasoning:** Minimal component — a styled inline element with two visual signals (weight + border). It marks defined terms within prose, giving them visual prominence without pulling them out of the text flow.

**Pipeline implication:** "What if key terms were visually flagged inline with weight + border to signal 'this is a definition' without breaking reading flow?"

**Derivation question:** "What if defined terms had a visual signature — bold + underline-border — that marked them as vocabulary without interrupting prose?"

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** Yes. I read all 1682 lines: the inline threading headers (lines 1-109), the locked layer CSS (129-543), the axis layer CSS (550-923), and the complete HTML body (926-1682). I traced every CSS class from definition to usage.

2. **Am I identifying elements at the DOM level?** Yes. Every entry references specific CSS classes, line numbers, and DOM structure. I identified elements by their CSS selectors and HTML instantiation, not by abstract concepts.

3. **Could I have missed subtle gestures?** I considered the `::selection` pseudo-element (line 268-271) — red background on text selection. This is a soul enforcement detail rather than a reader-experience gesture. I also noted the `*:focus-visible` outline (line 276-279) which is an accessibility requirement, not a reading gesture. The `@media (prefers-reduced-motion: reduce)` (lines 493-499) disables animations prophylactically — there are no animations to disable in this file, so it's a defensive pattern rather than an active gesture. The print styles (504-527) strip visual elements for printing — a medium adaptation rather than a reading gesture.

4. **Am I applying the reader-function test honestly?** I tested each element: "Remove this — does the reader lose something?" The skip-link (line 928), sr-only class (lines 532-542), and CSS reset (*) are accessibility/infrastructure, not reader-experience elements. I excluded them. The `p { max-width: 70ch }` rule was tempting to call a gesture, but it's a constant — it doesn't shift across contexts (except exposition's 65ch and climax's 70ch, which I captured in the line-height compression gesture).

5. **Did I check for pseudo-elements?** Yes. `::selection` (line 268) uses the primary red — a branding detail but not a reader-experience instrument. No `::before`, `::after`, or `::first-letter` pseudo-elements exist in this file. The AD-002 file is less ornate than the OD explorations.

6. **Did I check responsive breakpoints?** Yes. There is one `@media (max-width: 768px)` block (lines 876-922) which I cataloged as Gesture #18 (Responsive Collapse). There is also `@media (prefers-reduced-motion: reduce)` (lines 493-499) and `@media print` (lines 504-527) — defensive/utility media queries, not reader-experience gestures.

7. **Am I distinguishing between styling and instruments/gestures?** Yes. I excluded: the CSS reset (infrastructure), body font/color (baseline styling), link colors/hover (standard behavior), sr-only class (accessibility infrastructure), skip-link (accessibility), focus-visible (accessibility), selection styling (branding), inline code styling (basic formatting), list styling (basic formatting), table base styling (infrastructure). These are all "making it look right" rather than serving a specific reader-orientation or register-shift function.

---

## SUMMARY

| Category | Count | Items |
|----------|-------|-------|
| Instruments | 9 | Act Indicator, Tension Meter, Meta-Line, Version Badge, Header, Breathing Zone, Essence Pullquote, Decision Matrix Scores, Page Footer |
| Gestures | 9 | CRESCENDO Spacing, Line-Height Compression, Left-Spine Landmarks, Code Density CRESCENDO, Background Zone Color, Typography Trinity Register, Structural Border Hierarchy, Callout Accent Colors, Responsive Collapse |
| Components | 7 | Act Zone, Content Block, Two-Column, Callout, Decision Matrix, Code Block, Term Definition |
| **TOTAL** | **25** | |

### Key Observations

**AD-002 is structurally simpler than the OD explorations.** No `::before`/`::after` pseudo-elements, no animations, no JavaScript, no scroll-based instruments. The F-pattern thesis is expressed primarily through spatial organization (padding compression, background zones) and typography hierarchy (left-spine landmarks) rather than ornamental devices.

**The CRESCENDO arc is the dominant gesture.** It manifests in at least four independent channels: spacing compression, background color, line-height, and code block density. These four channels are redundant encodings of the same information — the narrative's tension level. This redundancy means the reader picks up the CRESCENDO even if they only perceive one channel.

**The Tension Meter is the signature instrument.** It's the one element unique to AD-002 (not found in the locked layer or OD conventions). It quantifies the CRESCENDO position as a visual gauge, making explicit what the spacing/color/density gestures encode implicitly.

**The breathing zones serve dual duty.** They are both instruments (marking act transitions) and containers for the essence pullquotes. This blurs the Instrument/Component boundary — the breathing zone orients (Instrument) but also holds content (Component). I classified it as Instrument because its primary function is transition-marking; the pullquote inside it is a separate Instrument.
