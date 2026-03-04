# OD-002 Narrative Arc Structure — Instrument / Gesture / Component Catalog

**File:** `design-system/validated-explorations/organizational/OD-002-narrative.html`
**Total lines:** 1660 (152 comment header + 788 CSS + 720 HTML)
**Core hypothesis:** Documentation organized as a narrative arc (Freytag 5-beat) creates natural CRESCENDO density
**Density pairing:** CRESCENDO (sparse --> dense --> sparse exhale)

---

## INSTRUMENTS

### 1. Arc Visualization (Freytag Bar Chart) — INSTRUMENT

**CSS class(es):** `.arc-visualization`, `.arc-diagram`, `.arc-bar`, `.arc-bar__fill`, `.arc-labels`, `.arc-annotation`
**CSS lines:** 371-440
**HTML lines:** 977-1010
**DOM structure:**
```html
<section class="arc-visualization">
  <div class="arc-visualization__title">Narrative Density Arc — Freytag 5-Beat Model</div>
  <div class="arc-diagram">
    <div class="arc-bar arc-bar--1"><div class="arc-bar__fill"></div></div>
    <!-- ...10 bars total... -->
    <div class="arc-bar arc-bar--10"><div class="arc-bar__fill"></div></div>
  </div>
  <div class="arc-labels">
    <span>I: Exposition</span>
    <span>II: Rising</span>
    <span>III: Climax</span>
    <span>IV: Falling</span>
    <span>V: Resolution</span>
  </div>
  <div class="arc-annotation">...</div>
</section>
```

**Reader function:** Shows the entire page's density architecture before reading begins. The reader sees the CRESCENDO curve — sparse start, peak at bars 6-7, then decline — and understands the page's structural shape before encountering any content. This is a map-before-territory device.

**Detection reasoning:** This is an Instrument, not a Component, because its primary purpose is reader orientation — it tells you WHAT KIND of density journey you're about to take. Remove it and the reader loses awareness of the page's overall shape. It doesn't hold article content; it holds metadata about the page's structure. Directly analogous to OD-004's Geological Column (calibration example #1).

**Multi-channel coordination:** Three visual channels encode the arc: (1) bar HEIGHT encodes density level (10px-95px), (2) bar COLOR shifts from `--color-border` (muted) to `--color-text-secondary` (medium) to `--color-primary` (peak red), creating a warm-to-hot gradient, (3) the label row below maps bars to Freytag beat names.

**Pipeline implication:** The pipeline could derive this by asking: "What if the reader could see the entire page's density shape before reading a single word?" This is a page-scale instrument that pre-loads structural expectations.

**Derivation question:** "What if the density curve itself was visible as a bar chart at the top of the page, so the reader knows the journey's shape before starting?"

---

### 2. Tension Meter — INSTRUMENT

**CSS class(es):** `.tension-meter`, `.tension-meter__label`, `.tension-meter__bar`, `.tension-meter__fill`, `.tension-meter__bar--setup`, `.tension-meter__bar--rising`, `.tension-meter__bar--climax`, `.tension-meter__bar--falling`, `.tension-meter__bar--resolution`
**CSS lines:** 795-828
**HTML lines:** 1029-1034, 1109-1114, 1267-1272, 1518-1523, 1594-1599
**DOM structure:**
```html
<div class="tension-meter">
  <span class="tension-meter__label">Tension</span>
  <div class="tension-meter__bar tension-meter__bar--setup">
    <div class="tension-meter__fill"></div>
  </div>
</div>
```

**Reader function:** A compact wayfinding device placed at the start of each act. The fill width indicates narrative tension level: 10% (setup), 45% (rising), 95% (climax), 55% (falling), 15% (resolution). The reader instantly knows where they are in the narrative arc and how intense the current section will be. Acts as a local GPS for the Freytag model.

**Detection reasoning:** This is an Instrument because it tells the reader WHERE they are in the arc — it encodes position metadata, not content. Remove it and the reader loses immediate awareness of narrative tension level. Analogous to OD-004's Stratum Boundary with Progress (calibration example #6) and OD-006's Scroll Witness (calibration example #7) — all are position-encoding wayfinding devices.

**Multi-channel coordination:** Two channels: (1) the monospace "Tension" label identifies the measurement type, (2) a red fill bar (`--color-primary`) against a muted background (`--color-border`) encodes percentage — the ratio of red to gray IS the tension reading. The bar width is a fixed 200px container (120px at mobile), making the fill proportional.

**Pipeline implication:** The pipeline could derive this by asking: "How does the reader know what tension level the current section operates at, without reading a word?" A single compact bar that re-appears at each major section, with fill width mapping to the Freytag beat.

**Derivation question:** "What if each act opened with a visible tension gauge showing where you are in the dramatic arc — low for setup, peaking at climax, subsiding at resolution?"

---

### 3. Act Header with Number + Title — INSTRUMENT

**CSS class(es):** `.act-header`, `.act-header__number`, `.act-header__title`, `.act-header--setup`, `.act-header--rising`, `.act-header--climax`, `.act-header--falling`, `.act-header--resolution`
**CSS lines:** 454-481
**HTML lines:** 1024-1027, 1104-1107, 1262-1265, 1513-1516, 1589-1592
**DOM structure:**
```html
<div class="act-header act-header--setup">
  <div class="act-header__number">Act I</div>
  <h2 class="act-header__title">The Promise</h2>
</div>
```

**Reader function:** Marks the boundary between major narrative sections. The monospace "Act I" / "Act II" etc. number labels use theatrical convention to signal chapter-scale transitions. The reader knows they're entering a new dramatic unit. The act-number-plus-title structure (e.g., "Act I: The Promise", "Act III: The Battle") borrows from dramatic playwriting to frame documentation sections as story beats.

**Detection reasoning:** This is an Instrument because its primary function is orientation — it tells you WHICH act you're in, not what the content is. The monospace uppercase number is purely navigational metadata. The h2 title adds narrative framing but serves the same wayfinding purpose. Remove the act headers and you lose the five-act structure entirely — content becomes undifferentiated prose. The "Act [N]" number label is a direct structural position marker.

**Multi-channel coordination:** Three channels: (1) monospace all-caps act number at `--type-meta` size with wide letter-spacing (0.15em) — typographically coded as metadata, (2) Instrument Serif italic title with a 3px red bottom border — coded as dramatic, (3) the title font-size itself varies by act (see Typography Compression Gesture below), encoding density position.

**Pipeline implication:** When content is organized as a narrative arc, the pipeline needs act-boundary markers that signal chapter-scale transitions using theatrical convention. Monospace numbering + serif titles + structural borders create the act-break signal.

**Derivation question:** "What if major sections were explicitly framed as acts in a dramatic arc, with theatrical numbering and evocative titles?"

---

### 4. Code Progression Label — INSTRUMENT

**CSS class(es):** `.code-progression`
**CSS lines:** 848-858
**HTML lines:** 1127, 1173, 1283
**DOM structure:**
```html
<div class="code-progression">Disclosure Level: Naive Implementation</div>
<div class="code-progression">Disclosure Level: Schema Approach</div>
<div class="code-progression">Disclosure Level: Production Architecture</div>
```

**Reader function:** A metadata label placed immediately before code blocks that tells the reader what "disclosure level" they're seeing. The three instances progress from "Naive Implementation" to "Schema Approach" to "Production Architecture" — explicitly narrating the progressive code reveal. The reader knows where each code block sits in the disclosure sequence without reading the code itself.

**Detection reasoning:** This is an Instrument, not a Component, because it serves purely as a metadata annotation. It tells you WHAT LEVEL OF DISCLOSURE the following code represents. Remove these labels and the reader loses explicit awareness of the progressive reveal strategy — they'd still see the code but wouldn't know where it sits in the disclosure arc. Visually, it uses monospace uppercase with wide letter-spacing and a breathing-zone background, all signals of "metadata, not content."

**Multi-channel coordination:** Four channels encode "this is metadata": (1) monospace font family, (2) uppercase + letter-spacing 0.1em, (3) breathing-zone background color (`--color-zone-breathing`), (4) 4px left border in `--color-border`. All channels say "label, not content."

**Pipeline implication:** When code is progressively disclosed across a narrative arc, the pipeline needs an explicit disclosure-level label so the reader can track where they are in the reveal sequence. This small monospace label does significant wayfinding work.

**Derivation question:** "What if each code block was explicitly labeled with its disclosure level — naive, intermediate, production — so the reader can track the progressive reveal?"

---

### 5. Exploration Header — INSTRUMENT

**CSS class(es):** `.exploration-header`, `.exploration-header__inner`, `.exploration-id`, `.exploration-title`, `.exploration-hypothesis`, `.exploration-meta`, `.exploration-meta__value`
**CSS lines:** 299-353
**HTML lines:** 950-965
**DOM structure:**
```html
<header class="exploration-header">
  <div class="exploration-header__inner">
    <div class="exploration-id">Exploration OD-002 — Density: CRESCENDO</div>
    <h1 class="exploration-title">Narrative Arc Structure</h1>
    <p class="exploration-hypothesis">
      What if documentation was organized as a story? ...
    </p>
    <div class="exploration-meta">
      <span>Density: <strong class="exploration-meta__value">CRESCENDO</strong></span>
      <span>Organization: <strong class="exploration-meta__value">Narrative Arc</strong></span>
      <span>DD Sources: <strong class="exploration-meta__value">DD-001, DD-002, DD-006</strong></span>
    </div>
  </div>
</header>
```

**Reader function:** Full-bleed dark header that orients the reader before any content. Contains: (1) exploration ID in monospace uppercase, (2) page title in Instrument Serif italic, (3) the hypothesis as a narrative question, (4) metadata chips showing density pattern, organization type, and DD sources. The reader knows what this page IS, what it's TESTING, and where it COMES FROM before scrolling.

**Detection reasoning:** This is an Instrument because every element in it serves orientation — identification (OD-002), naming (Narrative Arc Structure), hypothesis framing, and provenance metadata. None of it is article content. Remove it and the reader enters content with zero context about what they're reading or why it exists. This is a page-level identity instrument.

**Multi-channel coordination:** Five channels: (1) dark background (`--color-text`) inverts the page's warm-cream default, signaling "preamble zone", (2) 3px red bottom border marks the boundary between header and content, (3) monospace uppercase exploration ID signals "technical identifier", (4) Instrument Serif italic for the title signals "this is named, not numbered", (5) metadata chips with red accent values signal provenance data.

**Pipeline implication:** Every exploration page needs an identity header that answers: what is this, what hypothesis does it test, and what did it build on? The dark full-bleed treatment creates a strong entry point that separates meta-information from content.

**Derivation question:** "What if the page opened with a dark header that told you exactly what experiment this is, what it's testing, and where it comes from — before any content appears?"

---

### 6. Narrative Summary — INSTRUMENT

**CSS class(es):** `.narrative-summary`, `.narrative-summary__title`, `.narrative-summary__list`, `.narrative-summary__item`, `.narrative-summary__marker`
**CSS lines:** 863-900
**HTML lines:** 1625-1653
**DOM structure:**
```html
<section class="narrative-summary">
  <div class="narrative-summary__title">The Story So Far</div>
  <ul class="narrative-summary__list">
    <li class="narrative-summary__item">
      <div class="narrative-summary__marker"></div>
      <span>APIs start as four verbs but become layered architectures...</span>
    </li>
    <!-- 5 more items -->
  </ul>
</section>
```

**Reader function:** A closing inventory of what the narrative taught. The title "The Story So Far" frames it explicitly as narrative recap. Six items with red square markers provide a rapid digest of the journey. It tells the reader "here is what you should take away" — a retrospective instrument at the page's end.

**Detection reasoning:** This is an Instrument because it synthesizes and reflects on the page's content rather than adding new content. It's a retrospective wayfinding device — after the five-act journey, it tells you what you learned. The monospace uppercase title and red square markers encode it as metadata, not content. Remove it and the reader finishes the resolution act with no consolidated takeaway.

**Multi-channel coordination:** Three channels: (1) white background with 4px red left border creates a "summary zone" distinct from the page background, (2) monospace uppercase title signals "metadata section", (3) 8px red square markers (Soul Piece 5: Squares Signal System) visually bullet each takeaway.

**Pipeline implication:** After a narrative arc, the reader needs a retrospective instrument that consolidates what the journey revealed. The "Story So Far" framing keeps it in the narrative register.

**Derivation question:** "What if the page closed with a 'story so far' summary that retrospectively listed the key insights from the entire narrative arc?"

---

## GESTURES

### 7. Typography Compression Gradient (Act Headers) — GESTURE

**CSS class(es):** `.act-header--setup .act-header__title`, `.act-header--rising .act-header__title`, `.act-header--climax .act-header__title`, `.act-header--falling .act-header__title`, `.act-header--resolution .act-header__title`
**CSS lines:** 477-481
**HTML lines:** Affects all act header titles (1026, 1106, 1264, 1515, 1591)
**DOM structure:** N/A — this is a CSS-encoded shift across the same DOM element type at different act positions.

**Reader function:** Act header font-size SHRINKS as the narrative progresses: `var(--type-page)` (2.5rem/40px) at setup, `var(--type-section)` (1.625rem/26px) at rising, `var(--type-subsection)` (1.375rem/22px) at climax, `var(--type-body)` with weight 600 (1rem/16px) at falling, `var(--type-body)` (1rem/16px) at resolution. This compression signals increasing density — as the story intensifies, the headings get smaller, yielding more space to content. The reader unconsciously registers "things are getting tighter."

**Detection reasoning:** This is a Gesture because it's a coordinated CSS shift (font-size and, at act IV, font-weight) across acts. No single DOM element contains it — the shift lives in the CSS modifiers applied to the same structural element across different act contexts. It changes HOW you read the act transitions. Directly analogous to OD-004's Typography Compression Gradient (calibration example #16).

**Multi-channel coordination:** Two properties shift together: (1) font-size compresses from 40px to 16px (2.5x compression ratio), (2) at act IV (falling), font-weight shifts to 600 to compensate for the small size. Both channels follow ONE rule: "heading size inversely correlates with narrative density."

**Pipeline implication:** When content is organized in a progressive arc, heading typography should compress along the same arc. The pipeline needs to know that act-header font-size IS a density signal, not just a design choice.

**Derivation question:** "What if act headings got progressively smaller as the narrative density increased, so the typography itself signals the compression?"

---

### 8. Spacing-as-Density Gradient (Narrative Beats) — GESTURE

**CSS class(es):** `.act--setup .narrative-beat`, `.act--rising .narrative-beat`, `.act--climax .narrative-beat`, `.act--falling .narrative-beat`, `.act--resolution .narrative-beat`
**CSS lines:** 509-553
**HTML lines:** Affects all `.narrative-beat` elements within each act context.

**Reader function:** Margin-bottom between narrative beats compresses and then relaxes across acts: 64px (setup) --> 40px (rising) --> 24px (climax) --> 32px (falling) --> 40px (resolution). This creates the CRESCENDO density arc physically — sparse acts have generous breathing room between sections, dense acts pack sections tightly, and the falling/resolution acts relax again. The reader physically experiences density through vertical whitespace.

**Detection reasoning:** This is a Gesture because it's a coordinated spacing shift that changes the reader's pace. It's not a single DOM element — it's the CSS-encoded relationship between identical structural elements (`.narrative-beat`) as they appear in different act contexts. The shift follows the Freytag 5-beat model. Directly analogous to OD-004's Spacing-as-Confidence (calibration example #17).

**Multi-channel coordination:** Spacing is the primary channel, but it coordinates with the body typography gesture (see next). Margin 64px --> 24px --> 40px follows the arc. The asymmetry matters: falling action (32px) is tighter than rising (40px), reflecting accumulated rather than building density.

**Pipeline implication:** In CRESCENDO-organized content, the pipeline must vary section spacing across the arc. This is the physical expression of "organization IS density" — the organizational structure creates the density variation through spacing alone.

**Derivation question:** "What if the whitespace between sections compressed and relaxed along the narrative arc, so density becomes physically felt in the scroll rhythm?"

---

### 9. Body Typography Gradient (Font-size + Line-height) — GESTURE

**CSS class(es):** `.act--setup .narrative-beat p`, `.act--rising .narrative-beat p`, `.act--climax .narrative-beat p`, `.act--falling .narrative-beat p`, `.act--resolution .narrative-beat p`
**CSS lines:** 512-553
**HTML lines:** Affects all `<p>` elements within narrative beats across all acts.

**Reader function:** Body text font-size and line-height shift together across acts: 17px/1.85 (setup) --> 15px/1.7 (rising) --> 14px/1.6 (climax) --> 14px/1.7 (falling) --> 15px/1.8 (resolution). Larger text with generous leading in the sparse acts creates a leisurely reading pace. Smaller text with tighter leading in dense acts packs information tighter. The reader's reading speed and cognitive load shift with the typography.

**Detection reasoning:** This is a Gesture because two CSS properties (font-size and line-height) shift together according to one rule: "typography compresses with narrative density." This is a multi-property coordinated shift that changes HOW you read, not WHAT you read. Directly analogous to OD-004's Typography Compression Gradient (calibration example #16) — but applied to body text rather than headings.

**Multi-channel coordination:** Two channels shift in parallel: (1) font-size: 17px --> 15px --> 14px --> 14px --> 15px, (2) line-height: 1.85 --> 1.7 --> 1.6 --> 1.7 --> 1.8. Both follow the Freytag arc. Note the falling-action asymmetry: font-size stays at 14px (same as climax) but line-height returns to 1.7 (same as rising), encoding "settled complexity" rather than peak compression.

**Pipeline implication:** Body typography is a density-encoding channel. The pipeline must recognize that font-size and line-height can vary across a narrative arc to create physical reading-pace differences, not just visual style changes.

**Derivation question:** "What if body text got physically smaller and tighter as the story intensified, then relaxed again during the resolution — creating a breathing rhythm in the prose itself?"

---

### 10. Act Divider Breathing Zone — GESTURE

**CSS class(es):** `.act-divider`
**CSS lines:** 835-841
**HTML lines:** Not explicitly present in the final HTML (the essence-pullquotes serve the act-break function instead). The CSS defines this element but it's not used in the current HTML. However, the ESSENCE PULLQUOTES between acts serve an equivalent act-break gesture function.

**Reader function:** A 48px-tall horizontal zone with a breathing-zone background color and 3px structural borders top and bottom. Creates a visual "paragraph break" between acts — a deliberate pause in the reading flow. However, in this file, the `.act-divider` CSS class exists but is NOT used in the HTML. The essence-pullquotes between acts serve this breathing-zone function instead (see Essence Pullquote component).

**Detection reasoning:** This is listed as a Gesture because it encodes a reading-pace shift — a deliberate pause between acts. The CSS exists (lines 835-841) but is unused in the DOM. The intent (48px+ mode-transition breathing) is fulfilled by the essence-pullquotes instead. Noting this as a "defined but unused" gesture for completeness.

**Multi-channel coordination:** Would coordinate background color (`--color-zone-breathing`) with structural borders (`3px solid --color-border`) and vertical height (48px) to create a visual pause.

**Pipeline implication:** Act transitions need explicit breathing zones. This file implements them via essence-pullquotes rather than the dedicated divider element. The pipeline should know both approaches exist.

**Derivation question:** "What if there was a visible breathing zone between acts — a colored horizontal bar that says 'pause here' before the next act begins?"

---

### 11. Bar Color Gradient in Arc Visualization — GESTURE

**CSS class(es):** `.arc-bar--1 .arc-bar__fill` through `.arc-bar--10 .arc-bar__fill`
**CSS lines:** 411-420
**HTML lines:** 981-990

**Reader function:** The 10 bars in the arc visualization don't just vary in height — they vary in color. Bars 1-2 use `--color-border` (muted tan), bars 3-5 use `--color-text-secondary` (medium gray), bars 6-7 use `--color-primary` (KortAI red), bar 8 returns to secondary gray, bars 9-10 return to border tan. Color shifts register of the bars: warm-up, intensity, peak, cool-down.

**Detection reasoning:** This is a Gesture because color shifts across a series of identical structural elements to encode a reading-register change. The color doesn't label or categorize — it signals intensity level within the arc diagram. It's a coordinated color+height shift across 10 bars following one rule: "warmer/more saturated = higher narrative tension."

**Multi-channel coordination:** Two channels shift together across 10 bars: (1) height: 10px --> 95px --> 25px (the arc curve), (2) color: border-tan --> secondary-gray --> primary-red --> secondary-gray --> border-tan (the intensity encoding). Both channels follow the same Freytag arc.

**Pipeline implication:** When visualizing a density arc, color should shift alongside magnitude. The pipeline should encode intensity not just through size but through chromatic weight.

**Derivation question:** "What if the arc visualization bars shifted in color as well as height — muted at the edges, intense red at the peak — so the reader perceives both shape and intensity?"

---

### 12. Code Absence as Narrative Withholding — GESTURE

**CSS lines:** N/A (this is a structural absence, not a CSS property)
**HTML lines:** Act I (1023-1076) contains ZERO code blocks. Act II (1103-1233) introduces code. Act III (1261-1489) is code-heavy.

**Reader function:** Act I is entirely prose — no code blocks, no monospace, no technical syntax. This absence is deliberate (per EXT-NARR-003 "hermeneutic code" and the comment at line 1017-1020). The reader encounters narrative prose that PROMISES code but withholds it, creating anticipation. When code finally appears in Act II, it lands with more impact because of the prior absence. This is progressive disclosure through strategic omission.

**Detection reasoning:** This is a Gesture — a coordinated shift in reading register from "prose-only" to "prose+code" to "code-heavy." It's not a DOM element; it's the deliberate structural absence of an element type (code blocks) in early acts and its progressive introduction in later acts. The shift changes HOW you read Act I (narrative immersion) vs. Act III (technical scanning). Removing this pattern (putting code in Act I) would destroy the CRESCENDO.

**Multi-channel coordination:** The "channel" is code-block presence/absence. Act I: 0 code blocks, 0 monospace. Act II: 2 code blocks, 2 code-progression labels. Act III: 3 code blocks, 1 decision matrix. The quantity itself is the signal.

**Pipeline implication:** CRESCENDO density can be created not just through spacing and typography but through strategic withholding of content types. The pipeline needs to know that code-block ABSENCE in early sections is a design tool, not a gap.

**Derivation question:** "What if code was deliberately withheld from the opening act, creating anticipation — and each subsequent act introduced more code, so the progressive reveal mirrors the narrative arc?"

---

## COMPONENTS

### 13. Callout — COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--challenge`
**CSS lines:** 561-612
**HTML lines:** 1069-1075 (essence), 1206-1213 (info), 1360-1367 (gotcha), 1569-1576 (challenge)
**DOM structure:**
```html
<div class="callout callout--essence">
  <div class="callout__label">Essence</div>
  <div class="callout__body">
    The distance between "four endpoints" and "production-ready API" is where
    every junior developer becomes a senior one.
  </div>
</div>
```

**Reader function:** 2-zone container (label + body) with a 4px left border that color-codes by type. Five variants used: info (blue), tip (green), gotcha (coral), essence (purple, with Instrument Serif italic body), challenge (amber). Positioned after the content they reference (R1-007). Max 2 per section (R1-008). Each callout type shifts the reader's register: info = supplementary knowledge, gotcha = danger warning, essence = philosophical distillation, challenge = reader action.

**Detection reasoning:** This is a Component because it's a reusable content container with defined slots (label zone + body zone) and consistent visual treatment. It holds article content, not metadata. The variants are differentiated by border-color and semantic type, not by structural position.

**Multi-channel coordination:** Three channels differentiate callout types: (1) left border color (blue/green/coral/purple/amber), (2) monospace uppercase label text ("Info" / "Gotcha" / "Essence" / "Challenge"), (3) the essence variant switches body font to Instrument Serif italic — a unique typographic shift that signals "wisdom/philosophical register."

**Pipeline implication:** The callout system needs variant-specific typing. The essence variant's serif italic shift is especially significant — it's the only callout type that changes the body's typographic register, creating a "wisdom moment" within the documentation.

**Derivation question:** "What if inline annotations used a consistent 2-zone format with color-coded left borders, where different border colors signal different reading registers — information, danger, wisdom, challenge?"

---

### 14. Essence Pullquote — COMPONENT

**CSS class(es):** `.essence-pullquote`, `.essence-pullquote__label`, `.essence-pullquote__text`
**CSS lines:** 763-787
**HTML lines:** 1085-1091, 1242-1249, 1497-1503
**DOM structure:**
```html
<div class="essence-pullquote">
  <div class="essence-pullquote__label">Essence</div>
  <p class="essence-pullquote__text">
    Every API tells a story. The first chapter is always easy to write.
    The hard part is what happens when real users arrive.
  </p>
</div>
```

**Reader function:** A centered pullquote container used exclusively at act transitions — between Acts I/II, II/III, and III/IV. Functions as an editorial act-break: 3px purple borders top and bottom, monospace uppercase "Essence" or "Turning Point" label, Instrument Serif italic quote at section size, centered with 50ch max-width. Creates a visual pause between acts while distilling the preceding act's core idea. Also serves the breathing-zone function of the unused `.act-divider`.

**Detection reasoning:** This is a Component because it's a reusable content container with defined slots (label + quote text) and consistent visual treatment across three instances. It holds editorial content (distilled insights), not metadata about page structure. While it has an instrument-like function (act-break wayfinding), its primary role is to carry content — the pullquote IS the content, not a label about content.

**Multi-channel coordination:** Four channels: (1) 3px purple borders top+bottom create a "framed zone" distinct from the flow, (2) monospace uppercase label in purple, (3) Instrument Serif italic at `--type-section` size (1.625rem) signals editorial register, (4) center alignment + 50ch max-width creates a physically narrow text column that reads differently from the left-aligned body prose.

**Pipeline implication:** Act transitions in narrative-organized content need breathing-zone components that carry editorial distillation. The pullquote serves double duty: structural pause AND content delivery. The pipeline should recognize this dual function.

**Derivation question:** "What if the transition between acts used a centered pullquote that distilled the preceding act's essence — functioning as both a visual breathing zone and an editorial device?"

---

### 15. Code Block — COMPONENT

**CSS class(es):** `.code-block`, `.code-block__header`, `.code-block__lang`, `.code-block__copy`, `.code-block__line`, `.code-block__num`, `.code--comment`, `.code--keyword`, `.code--string`, `.code--function`, `.code--type`, `.code--variable`, `.code--number`
**CSS lines:** 619-677
**HTML lines:** 1128-1153, 1174-1203, 1284-1357, 1379-1424
**DOM structure:**
```html
<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__lang">typescript — routes/users.ts</span>
    <button class="code-block__copy">Copy</button>
  </div>
  <div class="code-block__line">
    <span class="code-block__num">1</span>
    <span class="code--comment">// The naive version</span>
  </div>
  <!-- more lines -->
</div>
```

**Reader function:** Dark-background code container with a header zone (language label + copy button) and a body of numbered lines with syntax highlighting. 3px solid border frame per convention spec. Seven syntax-highlight colors: comment (secondary gray), keyword (red), string (sage green), function (muted blue), type (coral), variable (warm tan), number (amber). The dark inversion creates a strong visual break from the warm-cream page, signaling "this is literal/executable."

**Detection reasoning:** This is a Component because it's a reusable container with defined slots (header, line numbers, syntax-highlighted code body) that holds article content (code samples). It appears 4 times across Acts II and III with the same structure.

**Multi-channel coordination:** Five channels: (1) dark background (`--color-text`) inverts the page palette, (2) 3px structural border frames the block, (3) header zone separates metadata (language, copy button) from code, (4) line numbers in muted gray enable reference, (5) 7-color syntax highlighting encodes semantic meaning (keywords, strings, functions, etc.).

**Pipeline implication:** Code blocks in narrative documentation should be framed as visual objects distinct from the prose flow. The dark inversion creates a "different register" signal. The header zone with language label provides context without consuming code space.

**Derivation question:** "What if code blocks were dark-inverted containers with numbered lines, syntax highlighting, and a header that names the file — creating a visually distinct 'other world' within the prose?"

---

### 16. Decision Matrix — COMPONENT

**CSS class(es):** `.decision-matrix`, `.decision-matrix__highlight`
**CSS lines:** 684-723
**HTML lines:** 1444-1487
**DOM structure:**
```html
<div class="decision-matrix">
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Tutorial Version</th>
        <th>Production Version</th>
        <th>Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Validation</td>
        <td>None</td>
        <td>Zod schema + middleware</td>
        <td style="color: var(--accent-green);">Moderate</td>
      </tr>
      <!-- more rows -->
      <tr class="decision-matrix__highlight">
        <td>Lines of Code</td>
        <td>5</td>
        <td>~150 across 6 files</td>
        <td style="color: var(--color-primary); font-weight: 600;">30x increase</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Reader function:** A comparison table placed at the narrative climax (Act III) that serves as the "payoff" — the culmination of the narrative's complexity journey. Compares tutorial vs. production versions across 5 dimensions (Validation, Auth, Error Handling, Concurrency, Lines of Code). The complexity column uses semantic colors (green=moderate, amber=high, coral=critical, red=30x increase). The highlight row with 4px red left border on the first cell visually punches the "5 lines --> 150 lines" conclusion.

**Detection reasoning:** This is a Component because it's a structured content container with defined slots (header row, data rows, highlight row) that presents article content (the comparison data). The highlight mechanism (`decision-matrix__highlight`) with its 4px red left accent border is a reusable structural feature.

**Multi-channel coordination:** Four channels: (1) 3px red bottom border on the header row separates labels from data, (2) complexity column uses semantic colors (green, amber, coral, red) to encode severity, (3) highlight row uses background color + font-weight shift, (4) the 4px red left border on the highlight's first cell echoes the callout system's left-border accent — maintaining visual consistency.

**Pipeline implication:** Narrative climaxes in documentation benefit from comparison tables that visualize the journey's payoff. The pipeline should recognize decision matrices as natural climax components that collect the narrative's threads into a single dense view.

**Derivation question:** "What if the climax included a comparison table showing naive vs. production versions side-by-side — making the 30x complexity increase visible in a single view?"

---

### 17. File Tree — COMPONENT

**CSS class(es):** `.file-tree`, `.file-tree__label`, `.file-tree__item--highlight`, `.file-tree__annotation`
**CSS lines:** 728-755
**HTML lines:** 1533-1551
**DOM structure:**
```html
<div class="file-tree">
  <span class="file-tree__label">Project Architecture</span>
  src/<br>
  ├── <span class="file-tree__item--highlight">routes/</span>
       <span class="file-tree__annotation">← Thin handlers, delegates to services</span><br>
  │   ├── users.ts <span class="file-tree__annotation">← CRUD endpoints</span><br>
  <!-- more lines -->
</div>
```

**Reader function:** A monospace directory tree with a metadata label ("Project Architecture"), red-highlighted directory names, and gray annotation arrows explaining each directory's role. Placed in Act IV (Falling Action) to show the final project structure after the complexity battle. The file tree provides architectural comprehension — the reader sees the clean separation of concerns that emerged from the narrative's complexity.

**Detection reasoning:** This is a Component because it's a structured container for article content (the project's file structure) with defined visual slots: label, tree lines, highlighted items, and annotations. It holds content, not metadata about the page.

**Multi-channel coordination:** Four channels: (1) monospace font + white background create a "literal/structural" zone, (2) 4px left border in muted color frames it as a distinct block, (3) red-highlighted directory names draw the eye to structural decisions, (4) gray annotations in small font explain without dominating.

**Pipeline implication:** In narrative documentation that builds toward architectural resolution, the pipeline needs a file-tree component that shows the final structure as the "answer" to the narrative's complexity. Highlighted items and annotations make it interpretive, not just literal.

**Derivation question:** "What if the falling action showed the project's final file structure as an annotated directory tree — revealing the clean architecture that emerged from confronting complexity?"

---

### 18. Narrative Beat — COMPONENT

**CSS class(es):** `.narrative-beat`, `.narrative-beat__subtitle`
**CSS lines:** 485-502
**HTML lines:** 1037-1049, 1052-1065, 1117-1160, 1163-1214, 1217-1232, 1274-1368, 1370-1431, 1435-1488, 1525-1552, 1554-1577, 1602-1617
**DOM structure:**
```html
<div class="narrative-beat">
  <h3 class="narrative-beat__subtitle">The Starting Point</h3>
  <p>
    Every API begins with a question...
  </p>
  <p>
    For a user management API, the answer is deceptively simple...
  </p>
</div>
```

**Reader function:** The fundamental content container within each act. A narrative beat holds one or more paragraphs, optionally with a subtitle (monospace uppercase h3), and may contain nested components (code blocks, callouts). It's the "scene" within an "act" — the smallest unit of narrative progression. The subtitle signals a sub-topic shift within the act.

**Detection reasoning:** This is a Component because it's a reusable container with defined slots (optional subtitle + body paragraphs + optional nested components) that holds article content. It appears 11 times across all five acts. The component itself is relatively minimal — the heavy lifting is done by the act-context gestures (spacing, typography) that modify its behavior per act.

**Multi-channel coordination:** Two channels: (1) the subtitle in monospace uppercase at `--type-meta` with 600 weight signals "sub-topic label" — it's a mini-wayfinding element within the beat, (2) paragraph max-width (65ch) creates a reading corridor. The beat itself is styled minimally; its visual character comes from the act-context gestures that apply to it.

**Pipeline implication:** In narrative-organized documentation, the pipeline needs a "beat" container that can hold a mix of prose, code, and callouts. The beat is the atomic content unit that the act-level gestures modify.

**Derivation question:** "What if each section within an act was a 'narrative beat' — a self-contained scene with optional subtitle, prose, and embedded components — that the act-level density rules could modify?"

---

## ADDITIONAL OBSERVATIONS

### Unused CSS: `.act-divider`
The CSS at lines 835-841 defines an `.act-divider` class that is never used in the HTML. The essence-pullquotes serve this inter-act breathing function instead.

### Responsive Breakpoint (768px)
At mobile (lines 905-915): arc diagram height reduces to 80px, exploration-meta stacks vertically, tension-meter bar narrows to 120px, header padding compresses. No elements appear or disappear — they adapt.

### Print Styles
Lines 920-927: Skip link, scroll witness, and nav are hidden. Header inverts to white-on-black. Link URLs are appended as text.

### Reduced Motion
Lines 932-939: All animations and transitions suppressed for `prefers-reduced-motion`.

---

## SUMMARY TABLE

| # | Name | Category | Key Classes | Reader Function |
|---|------|----------|-------------|-----------------|
| 1 | Arc Visualization | Instrument | `.arc-visualization` | Shows entire density curve before reading |
| 2 | Tension Meter | Instrument | `.tension-meter` | Per-act tension gauge |
| 3 | Act Header | Instrument | `.act-header` | Act-boundary wayfinding |
| 4 | Code Progression Label | Instrument | `.code-progression` | Disclosure-level metadata |
| 5 | Exploration Header | Instrument | `.exploration-header` | Page identity + provenance |
| 6 | Narrative Summary | Instrument | `.narrative-summary` | Retrospective takeaway list |
| 7 | Typography Compression (Headers) | Gesture | `.act-header--*` modifiers | Font-size shrinks with density |
| 8 | Spacing-as-Density (Beats) | Gesture | `.act--* .narrative-beat` | Margin compresses with density |
| 9 | Body Typography Gradient | Gesture | `.act--* .narrative-beat p` | Font-size + line-height shift with arc |
| 10 | Act Divider Breathing Zone | Gesture | `.act-divider` (CSS only, unused) | Visual pause between acts |
| 11 | Bar Color Gradient | Gesture | `.arc-bar--* .arc-bar__fill` | Color encodes intensity in arc diagram |
| 12 | Code Absence as Withholding | Gesture | (structural absence) | Progressive code disclosure across acts |
| 13 | Callout | Component | `.callout` | 2-zone annotated content container |
| 14 | Essence Pullquote | Component | `.essence-pullquote` | Act-break editorial device |
| 15 | Code Block | Component | `.code-block` | Dark-inverted numbered code container |
| 16 | Decision Matrix | Component | `.decision-matrix` | Comparison table with highlight row |
| 17 | File Tree | Component | `.file-tree` | Annotated directory structure |
| 18 | Narrative Beat | Component | `.narrative-beat` | Atomic content unit within acts |

**Totals:** 6 Instruments, 6 Gestures, 6 Components = 18 elements

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. Read lines 1-1660 in six chunks (1-300, 300-600, 600-900, 900-1200, 1200-1500, 1500-1660). CSS spans lines 166-940. HTML spans lines 942-1659.

2. **Am I identifying elements at the DOM level?** YES. Every Instrument and Component maps to specific CSS classes and HTML elements with line numbers. Gestures are identified at the CSS-rule level with the specific properties that shift.

3. **Could I have missed subtle gestures?** POSSIBLE. I identified the body typography gradient, spacing gradient, heading compression, bar color gradient, and code absence. One subtlety I noted: the `.act-divider` CSS exists but is unused in the HTML — the essence-pullquotes absorb that function. I checked for pseudo-elements and found none used for gestures in this file (no `::before`, `::after`, or `::first-letter` gestures). The `.callout--essence` variant's font-family shift to Instrument Serif italic is a local gesture embedded within a component — I noted it in the callout component description.

4. **Am I applying the reader-function test honestly?** YES. I tested each element: "Remove this — does the reader lose awareness of position/structure (Instrument), experience a pace/register shift (Gesture), or lose a content container (Component)?" The act header was a close call between Instrument and Component — I classified it as Instrument because its primary function is wayfinding (act identification), not content delivery.

5. **Did I check for pseudo-elements?** YES. No `::before`, `::after`, or `::first-letter` pseudo-elements are used for gestures or instruments in this file. The `::selection` at line 289-292 (red selection highlight) is a global styling choice, not a specific gesture.

6. **Did I check responsive breakpoints?** YES. Lines 905-915 define `@media (max-width: 768px)` adjustments. No elements appear or disappear at mobile — they adapt (smaller arc diagram, stacked meta, narrower tension bar, compressed header padding). Lines 920-927 define print styles. Lines 932-939 define reduced-motion preferences.

7. **Am I distinguishing between "styling" and "instruments/gestures"?** YES. For example: the dark code block background is STYLING (making code readable), but the progressive introduction of code blocks across acts is a GESTURE (changing reading register). The callout's 4px left border is STYLING (component identity), but the callout variant system with its serif/sans shift for essence type encodes a reading-register change embedded within the component. I flagged the inline code styling (lines 281-287), syntax highlighting colors (lines 671-677), and selection color (lines 289-292) as pure styling choices, not instruments or gestures.
