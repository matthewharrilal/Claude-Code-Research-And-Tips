# CD-004 Essence as Background — Visual Catalog Findings

**File:** `design-system/validated-explorations/combination/CD-004-essence-as-background.html`
**Lines:** 1625 (80 comment header + 819 CSS + 726 HTML)
**Combination:** TIDAL density + CONFIDENCE-BASED org + SPIRAL + CHOREOGRAPHY axis
**Content:** Database Architecture Decisions — confidence-graded exploration

---

## INSTRUMENTS (7 found)

### 1. Confidence Badge — INSTRUMENT

**CSS class(es):** `.confidence-badge`, `.confidence-badge--established`, `.confidence-badge--probable`, `.confidence-badge--speculative`, `.confidence-badge--open`
**CSS lines:** 735–750
**HTML lines:** 871, 971, 1106, 1202
**DOM structure:**
```html
<span class="confidence-badge confidence-badge--established">Established</span>
```

**Reader function:** Tells the reader what confidence tier they are entering before they read any content. Color-coded (green/blue/amber/coral) to create a 4-level semantic signal for the certainty of what follows.

**Detection reasoning:** This is pure wayfinding metadata. It delivers no article content — it orients the reader to the epistemic register of the upcoming section. Remove it and the reader loses awareness of how much to trust the material. Instrument, not component, because it has no slots or internal structure — it is a single labeled badge.

**Multi-channel coordination:** Three visual channels encode the same metadata: (1) text label ("Established" / "Probable" / "Speculative" / "Open Question"), (2) border color via modifier class, (3) text color via modifier class. All three degrade together across the 4-level confidence scale.

**Pipeline implication:** "How do I tell the reader what confidence level they are about to enter?" A confidence-graded page needs an upfront epistemic marker at each tier boundary.

**Derivation question:** "What if each section announced its certainty level before the reader committed to reading it?"

---

### 2. Version Badge — INSTRUMENT

**CSS class(es):** `.version-badge`
**CSS lines:** 318–324
**HTML lines:** 835
**DOM structure:**
```html
<span class="version-badge">v1</span>
```

**Reader function:** Tells the reader the document's version state. Monospace font signals "this is literal/technical metadata" rather than editorial content.

**Detection reasoning:** Pure document-level metadata. Removing it loses version awareness. It orients the reader to the document's maturity state. No content function — only orientation.

**Multi-channel coordination:** Monospace font (JetBrains Mono) + border + small size all signal "this is metadata, not content."

**Pipeline implication:** "How does the reader know what revision they are reading?"

**Derivation question:** "What if the document wore its version number as a visible badge?"

---

### 3. Header Meta Line — INSTRUMENT

**CSS class(es):** `.header-meta`, `.meta-line`
**CSS lines:** 302–316
**HTML lines:** 831–836
**DOM structure:**
```html
<div class="header-meta">
  <div class="meta-line">
    <span>EXPLORATION CD-004</span>
    <span>COMBINATION: ESSENCE AS BACKGROUND</span>
    <span class="version-badge">v1</span>
  </div>
</div>
```

**Reader function:** Provides document-level orientation: exploration ID, pattern type, and version. All uppercase + letter-spacing 0.15em + small size signals "this is metadata" before the title is even read. Sets the reading context for everything that follows.

**Detection reasoning:** This is a compound wayfinding device. It answers WHERE (CD-004), WHAT (Combination: Essence as Background), and WHEN (v1) in a single line. The reader can't navigate the document's place in the design system without it. The version badge is a sub-element that merges into this instrument (dependent on meta-line context).

**Multi-channel coordination:** Uppercase + letter-spacing + secondary color + small font size all coordinate to signal "metadata register" — distinct from both the title (Instrument Serif, large) and body text (Inter, standard).

**Pipeline implication:** "How do I orient the reader to the document's identity before they start reading content?"

**Derivation question:** "What if the page header contained a metadata bar that placed this document within the larger exploration taxonomy?"

---

### 4. Confidence Gap Spacers — INSTRUMENT

**CSS class(es):** `.confidence-gap-moderate`, `.confidence-gap-breathing`, `.confidence-gap-wide`
**CSS lines:** 386–388
**HTML lines:** 962, 1097, 1193
**DOM structure:**
```html
<div class="confidence-gap-moderate" aria-hidden="true"></div>
<div class="confidence-gap-breathing" aria-hidden="true"></div>
<div class="confidence-gap-wide" aria-hidden="true"></div>
```

**Reader function:** Creates progressively expanding whitespace between confidence tiers (32px, 48px, 64px). The reader physically feels confidence decreasing as the gaps widen — more uncertain content gets more breathing room. These are not decorative spacing — they are semantic spacers encoding the confidence gradient.

**Detection reasoning:** These are empty divs with `aria-hidden="true"` — they deliver zero content. Their purpose is to make the reader FEEL the confidence transition. Remove them and the confidence strata collapse into undifferentiated sections. They are spatial wayfinding: the gap itself IS the signal that confidence is changing.

**Multi-channel coordination:** Only one channel: vertical whitespace. But the progressive expansion (32px -> 48px -> 64px) maps 1:1 to the confidence gradient. The spacing IS the metadata.

**Pipeline implication:** "How do I make the transition between confidence levels physically felt, not just labeled?"

**Derivation question:** "What if the space between sections grew as certainty decreased?"

---

### 5. Research Application Record — INSTRUMENT

**CSS class(es):** None (inline styles)
**CSS lines:** N/A (inline at lines 1481)
**HTML lines:** 1478–1543
**DOM structure:**
```html
<section aria-label="Research Application Record" style="margin-top: var(--space-16);">
  <h2 class="section-title">Research Application Record</h2>
  <div style="font-size: var(--type-code); font-family: var(--font-mono); ...">
    <p style="...">Research Identified as Applicable</p>
    <p>R5-H2, R5-H3, R5-T2, ...</p>
    <!-- more sections: Applied, AD-F Applied, Anti-Patterns, Soul Verification -->
  </div>
</section>
```

**Reader function:** A self-documenting provenance record that shows exactly which research findings were applied, which anti-patterns were avoided, and that soul constraints are met. It makes the page's construction methodology visible to the reader — the page becomes self-aware of its own design decisions.

**Detection reasoning:** This is metadata about the page itself, not article content about databases. It orients the reader (or future builder) to the document's provenance. Pure self-referential instrument.

**Multi-channel coordination:** Monospace font + code-level sizing + background color all signal "this is technical metadata about the page, not page content."

**Pipeline implication:** "How do I make the page's construction transparent and auditable?"

**Derivation question:** "What if the page showed its own design DNA?"

---

### 6. Footer Identity Bar — INSTRUMENT

**CSS class(es):** `.page-footer`, `.page-footer__inner`, `.page-footer__id`, `.page-footer__rule`
**CSS lines:** 755–778
**HTML lines:** 1551–1557
**DOM structure:**
```html
<footer class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-004 &middot; Essence as Background</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:TIDAL &middot; OD:CONFIDENCE &middot; AD:SPIRAL+CHOREO</span>
  </div>
</footer>
```

**Reader function:** Closes the page with its identity coordinates: exploration ID + pattern name on the left, density/org/axis taxonomy on the right, separated by a red 48x3px rule. Tells the reader what they just finished and how it fits the pattern taxonomy.

**Detection reasoning:** Pure orientation metadata. No article content. The taxonomy labels (DD:TIDAL, OD:CONFIDENCE, AD:SPIRAL+CHOREO) orient the reader to the exploration's coordinates in the design space.

**Multi-channel coordination:** Three channels: (1) monospace font for technical identity, (2) dark background matching header (bookend framing), (3) red horizontal rule as a miniature echo of the header's 3px red bottom border.

**Pipeline implication:** "How do I close the page with a taxonomic fingerprint?"

**Derivation question:** "What if the footer summarized the page's position in the design-system taxonomy?"

---

### 7. Footer Rule — INSTRUMENT

**CSS class(es):** `.page-footer__rule`
**CSS lines:** 774–778
**HTML lines:** 1554
**DOM structure:**
```html
<div class="page-footer__rule"></div>
```

**Reader function:** A 48x3px red bar that echoes the header's 3px red bottom border. Creates a visual bookend — the reader recognizes they have reached the end of the document because the red accent that opened the page reappears in miniature.

**Detection reasoning:** This is a pure wayfinding signal. Remove it and the footer loses its visual connection to the header. It has zero content — it is a color swatch that signals "end of document" by echoing "start of document." NOTE: This is a sub-element of the footer identity bar (#6) but is independently meaningful as a distinct wayfinding device (the red echo). Could be merged with #6 if the team prefers sub-element consolidation.

**Multi-channel coordination:** Color (--color-primary red) + dimensions (48px wide, 3px tall) echo the header's border-bottom: 3px solid red.

**Pipeline implication:** "How do I create a visual end-of-document signal that connects to the beginning?"

**Derivation question:** "What if the footer contained a miniature echo of the header's primary accent?"

---

## GESTURES (6 found)

### 8. Border-Weight Confidence Gradient — GESTURE

**CSS class(es):** `.stratum-established` (4px), `.stratum-probable` (3px), `.stratum-speculative` (1px), `.stratum-open` (0px)
**CSS lines:** 358–383
**HTML lines:** 883, 983, 1118, 1214
**DOM structure:** N/A (CSS property pattern across 4 classes)

**Reader function:** Border thickness degrades from 4px (established) to 3px (probable) to 1px (speculative) to 0px (open). The physical weight of the left border IS the confidence level — thicker = more certain. The reader intuitively perceives that content with a strong left border is more established than content with a faint or absent border.

**Detection reasoning:** This is a coordinated multi-property shift, not a single style. Four CSS classes participate in a single rule: "border weight IS confidence." This changes how the reader interprets content — thicker borders shift reading register toward authority, thinner borders toward speculation. It is not a component (no slots, no content structure) and not an instrument (no metadata — the content itself is unchanged).

**Multi-channel coordination:** Three properties shift together: (1) border-left-width: 4px -> 3px -> 1px -> 0px, (2) padding-left: 24px -> 32px -> 48px -> 64px, (3) margin-bottom: 24px -> 32px -> 48px -> 64px. All three degrade according to ONE rule: lower confidence = lighter border + more space. The space expansion INVERTS the border weight — as the border gets lighter, the padding gets wider. Centrifugal spiral geometry.

**Pipeline implication:** "How do I make the confidence gradient physically tangible without adding metadata labels?"

**Derivation question:** "What if border thickness encoded the certainty of the content it frames?"

---

### 9. Spacing-as-Confidence Gradient — GESTURE

**CSS class(es):** `.stratum-established` (24px), `.stratum-probable` (32px), `.stratum-speculative` (48px), `.stratum-open` (64px)
**CSS lines:** 358–383 (same classes as #8)
**HTML lines:** Same as #8

**Reader function:** Padding and margin expand as confidence decreases. Established content is tight (24px) — packed with authority. Open questions breathe (64px) — surrounded by uncertainty. The reader physically decelerates as confidence drops because there is more whitespace to traverse.

**Detection reasoning:** This is a distinct gesture from #8 because the RULE being expressed is different: "spacing IS reading pace," not "border weight IS confidence." Border weight and spacing both degrade across the same classes but serve different perceptual functions. Border weight is visual authority; spacing is reading pace. They are two gestures riding the same class structure. Splitting is correct because you could change one without the other and the remaining gesture would still function.

**Multi-channel coordination:** Two properties: (1) padding-left: 24px -> 32px -> 48px -> 64px, (2) margin-bottom: 24px -> 32px -> 48px -> 64px. Both expand together but serve different perceptual roles — padding creates reading-corridor width, margin creates inter-section breathing.

**Pipeline implication:** "How do I make the reader naturally slow down as content becomes less certain?"

**Derivation question:** "What if the whitespace itself told the reader how much to trust the adjacent content?"

---

### 10. Tidal Width Modulation — GESTURE

**CSS class(es):** `.callout-essence` (60% width) vs `.code-block`, `.reasoning`, `.task-component` (100% width)
**CSS lines:** 396–401 (essence max-width: 60%), 511–523 (code-block full width), 564–569 (reasoning full width)
**HTML lines:** Throughout — every essence callout vs every code/reasoning/task block

**Reader function:** Essence callouts are narrowed to 60% width while code blocks, reasoning components, and task lists span full width. This creates a TIDAL rhythm: narrow philosophy (dense, compressed wisdom) alternates with wide implementation (sparse, expanded code). The reader's eye width oscillates — narrow reading is intimate/philosophical, wide reading is technical/expansive.

**Detection reasoning:** This is a coordinated CSS pattern that changes how the reader scans the page. The width variation is not decorative — it creates a rhythm of dense/sparse zones that maps to the content's semantic register (philosophy vs. implementation). It changes the reading MODE: narrow = contemplative, wide = analytical. Gesture because it is a CSS-encoded perceptual shift, not a container with slots.

**Multi-channel coordination:** Two channels: (1) max-width alternation (60% vs 100%), (2) semantic mapping (Essence=narrow=dense, Code/Reasoning/Task=wide=sparse). The width IS the density.

**Pipeline implication:** "How do I create a rhythm of dense and sparse zones using only horizontal width?"

**Derivation question:** "What if content width modulated based on whether the content is philosophical or technical?"

---

### 11. Callout Color-Coding System — GESTURE

**CSS class(es):** `.callout-essence` (purple), `.callout-info` (blue), `.callout-tip` (green), `.callout-challenge` (amber)
**CSS lines:** 396–505 (all four callout types)
**HTML lines:** Throughout

**Reader function:** Four left-border colors create an instant visual register for callout type: purple = philosophical reflection (Essence), blue = contextual information, green = practical tip, amber = reader challenge. The reader learns to pre-identify callout type by border color alone before reading the label, enabling faster scanning.

**Detection reasoning:** This is a multi-class pattern where color serves as a reading-register signal. It changes how the reader APPROACHES each callout — purple primes for reflection, green primes for action, amber primes for engagement. This is a coordinated shift in reading mode triggered by a color system, not a single styling decision. The individual callout types are components (they have slots); the COLOR SYSTEM that connects them is a gesture.

**Multi-channel coordination:** Three channels shift together per callout type: (1) border-left color (purple/blue/green/amber), (2) label text color (matching), (3) label text content ("Essence"/"Context"/"Tip"/"Challenge"). All three reinforce the same semantic signal.

**Pipeline implication:** "How do I let the reader pre-identify content type before reading?"

**Derivation question:** "What if each callout type had a color signature that the reader could learn to scan for?"

---

### 12. Essence Typography Register — GESTURE

**CSS class(es):** `.callout-essence .callout-body`
**CSS lines:** 414–421
**HTML lines:** All 7 essence callout bodies (877–880, 977–979, 1112–1114, 1208–1211, 1287–1289, 1420–1422, 1467–1469)

**Reader function:** Essence callout body text uses Instrument Serif italic — the ONLY location in the entire page where body-level text uses serif italic. This creates a distinct typographic voice: the "ambient philosophical presence." The reader shifts from analytical reading (Inter, sans-serif) to reflective reading (Instrument Serif, italic) every time an Essence callout appears.

**Detection reasoning:** This is a font-family + font-style shift that changes the reading register. It is not just a style — it creates a distinct VOICE. The italic serif signals "this is philosophical reflection, not technical instruction." The reader's reading pace and mode change in response to the typographic shift. Gesture because it is a CSS-encoded register change, not a structural container.

**Multi-channel coordination:** Two properties shift together: (1) font-family changes from Inter (body) to Instrument Serif, (2) font-style changes to italic. Together they create a single perceptual shift: "you are now hearing the ambient philosophical voice."

**Pipeline implication:** "How do I create a distinct typographic voice for philosophical content that is perceptually different from technical content?"

**Derivation question:** "What if the design system's display serif (normally reserved for headings) was repurposed as a philosophical voice in body text?"

---

### 13. Breathing Transition Zone — GESTURE

**CSS class(es):** `.transition--breathing`, `.transition--breathing .transition-essence`
**CSS lines:** 673–690
**HTML lines:** 1259–1264
**DOM structure:**
```html
<div class="transition--breathing" role="separator" aria-label="Transition from confidence layers to decision choreography">
  <div class="transition-essence">
    The strata have been read. Now the question turns practical:
    how do you choose among these layers?
  </div>
</div>
```

**Reader function:** A massive perceptual reset between the Spiral (confidence strata) and Choreography (decision-making) sections. 80px top/bottom margin + 48px top/bottom padding + 3px double borders + breathing-zone background color + centered Instrument Serif italic text. This is the page's most dramatic register shift: from "reading layers" to "following paths."

**Detection reasoning:** This is the single most intense multi-property shift in the entire page. It combines spatial expansion (80px margins), structural framing (3px double borders), background color change (--color-zone-breathing), and typography shift (centered Instrument Serif italic at section size). All properties coordinate to achieve ONE perceptual goal: reset the reader's cognitive mode. It sits at the border between gesture and component — but it has no slots or reusable structure. It is a one-off transition moment, a perceptual event. Gesture.

**Multi-channel coordination:** Five channels shift simultaneously: (1) margin: 80px (massive spatial expansion), (2) padding: 48px (internal breathing), (3) border: 3px top AND bottom (double structural framing), (4) background: --color-zone-breathing (warm FAF5ED, distinct from both sparse and dense zones), (5) typography: centered Instrument Serif italic at section size. All five serve one rule: "this is a perceptual reset between incompatible axis geometries."

**Pipeline implication:** "How do I create a cognitive decompression zone between two fundamentally different reading modes?"

**Derivation question:** "What if the transition between spiral and choreography reading was so dramatic that the reader felt they were entering a different document?"

---

## COMPONENTS (7 found)

### 14. Essence Callout — COMPONENT

**CSS class(es):** `.callout-essence`, `.callout-label`, `.callout-body`
**CSS lines:** 396–421
**HTML lines:** 875–881, 975–981, 1110–1116, 1206–1212, 1285–1291, 1418–1424, 1465–1471 (7 instances)
**DOM structure:**
```html
<div class="callout-essence" role="complementary" aria-label="...">
  <div class="callout-label">Essence</div>
  <div class="callout-body">
    [Philosophical reflection text in Instrument Serif italic]
  </div>
</div>
```

**Reader function:** A philosophical reflection container that provides the "ambient background voice" — the page's central experiment. Each instance delivers a brief philosophical observation that reframes the technical content around it. The narrowed width (60%), purple border, and italic serif typography create a container that is visually distinct from all other callout types.

**Detection reasoning:** Has two defined slots: label and body. Reused 7 times with identical structure. The slots are consistent — label always says "Essence," body always contains italic serif philosophy. Component because it is a structured, reusable content container.

**Multi-channel coordination:** Slots carry consistent visual treatment: label = uppercase purple meta text, body = Instrument Serif italic. The 60% width constraint and purple left border provide the container framing.

**Pipeline implication:** "What is the container for recurring philosophical reflections that pervade the page?"

**Derivation question:** "What if I needed a callout that felt like a background voice — always present, never dominant?"

---

### 15. Info Callout — COMPONENT

**CSS class(es):** `.callout-info`, `.callout-label`, `.callout-body`
**CSS lines:** 426–449
**HTML lines:** 901–908, 1030–1037, 1159–1166, 1387–1394 (4 instances)
**DOM structure:**
```html
<div class="callout-info" role="note" aria-label="...">
  <div class="callout-label">Context</div>
  <div class="callout-body">[Contextual information in Inter body text]</div>
</div>
```

**Reader function:** Provides supplementary context — definitions, background knowledge, or framing that helps the reader understand the adjacent technical content. Blue left border signals "information" register. Always uses Inter body text (not serif) — this is analytical context, not philosophical reflection.

**Detection reasoning:** Two slots (label + body), reused 4 times. Consistent structure. Component.

**Multi-channel coordination:** Blue border + blue label text + white background (--color-zone-dense) + body font all signal "supplementary technical context."

**Pipeline implication:** "What container holds contextual information that supports but does not replace the main content?"

**Derivation question:** "What if I needed a callout for factual context that felt different from philosophical reflection?"

---

### 16. Tip Callout — COMPONENT

**CSS class(es):** `.callout-tip`, `.callout-label`, `.callout-body`
**CSS lines:** 454–477
**HTML lines:** 935–942, 1071–1078, 1355–1363 (3 instances)
**DOM structure:**
```html
<div class="callout-tip" role="note" aria-label="...">
  <div class="callout-label">Tip</div>
  <div class="callout-body">[Practical advice in Inter body text]</div>
</div>
```

**Reader function:** Delivers practical advice — actionable guidance the reader can apply immediately. Green left border signals "positive/constructive" register. Positioned after heavy components (Code, Reasoning) to buffer reading pace per the anti-Orphaned-Heavy pattern.

**Detection reasoning:** Two slots (label + body), reused 3 times. Component.

**Multi-channel coordination:** Green border + green label text + white background + body font all signal "actionable practical advice."

**Pipeline implication:** "What container holds practical tips that decompress after heavy technical content?"

**Derivation question:** "What if I needed a callout that felt like friendly expert advice?"

---

### 17. Challenge Callout — COMPONENT

**CSS class(es):** `.callout-challenge`, `.callout-label`, `.callout-body`
**CSS lines:** 481–505
**HTML lines:** 1239–1246, 1454–1462 (2 instances)
**DOM structure:**
```html
<div class="callout-challenge" role="note" aria-label="...">
  <div class="callout-label">Challenge</div>
  <div class="callout-body">[Provocative question or exercise for the reader]</div>
</div>
```

**Reader function:** Invites the reader to engage actively — poses a question or exercise that requires thought beyond passive reading. Amber left border signals "attention/engagement required." Used at the open-question stratum and at the page's closing — the most uncertain and most reflective positions.

**Detection reasoning:** Two slots (label + body), reused 2 times. Component.

**Multi-channel coordination:** Amber border + amber label text + white background all signal "this requires your active engagement."

**Pipeline implication:** "What container invites the reader to do something, not just read something?"

**Derivation question:** "What if I needed a callout that felt like an invitation to think?"

---

### 18. Code Block — COMPONENT

**CSS class(es):** `.code-block`, `.code-label`, syntax classes (`.kw`, `.str`, `.cmt`, `.fn`, `.typ`, `.num`, `.punc`)
**CSS lines:** 511–558
**HTML lines:** 911–932, 1002–1027, 1136–1156, 1337–1352 (4 instances)
**DOM structure:**
```html
<div class="code-block" role="group" aria-label="...">
  <span class="code-label">SQL -- ACID Transaction</span>
  <pre><code><span class="kw">BEGIN</span> ...</code></pre>
</div>
```

**Reader function:** Displays syntax-highlighted code examples with a dark background (inverted color scheme). Full-width presentation creates TIDAL sparse zones that contrast with the narrow Essence callouts. Each instance includes a language label slot and the code content slot.

**Detection reasoning:** Two slots (label + code content), reused 4 times. Dark background inversion creates a strong visual container. Syntax highlighting classes provide structured code presentation. Component.

**Multi-channel coordination:** Dark background (--color-text) + light text (--color-background) + monospace font + 3px border + syntax coloring all coordinate to create the "code zone" register shift.

**Pipeline implication:** "What container presents code with syntax highlighting and a clear language label?"

**Derivation question:** "What if code blocks were dark-on-light inverted containers that served as sparse zones in the tidal rhythm?"

---

### 19. Reasoning Component — COMPONENT

**CSS class(es):** `.reasoning`, `.reasoning-header`, `.reasoning-columns`, `.reasoning-col`, `.reasoning-summary`
**CSS lines:** 564–618
**HTML lines:** 1040–1068, 1295–1322 (2 instances)
**DOM structure:**
```html
<div class="reasoning" role="group" aria-label="...">
  <div class="reasoning-header">When to Choose Documents Over Relations?</div>
  <div class="reasoning-columns">
    <div class="reasoning-col">
      <h4>Arguments For Documents</h4>
      <ul><li>...</li></ul>
    </div>
    <div class="reasoning-col">
      <h4>Arguments For Relations</h4>
      <ul><li>...</li></ul>
    </div>
  </div>
  <p class="reasoning-summary"><strong>Resolution:</strong> ...</p>
</div>
```

**Reader function:** Presents a structured deliberation: a question header, two opposing columns of arguments, and a resolution summary. Forces the reader into analytical mode — weighing pros and cons before reaching a synthesis. The two-column layout creates a visual balance that mirrors the intellectual balance.

**Detection reasoning:** Four defined slots: header (question), left column (arguments for), right column (arguments against), summary (resolution). Reused 2 times. Rich multi-slot structure. Component.

**Multi-channel coordination:** 3px border framing + white background (--color-zone-dense) + Instrument Serif italic header + Inter body columns + border-bottom dividers all create a "bounded deliberation" container.

**Pipeline implication:** "What container structures a balanced argument with a resolution?"

**Derivation question:** "What if complex decisions were presented as two-column deliberations with a synthesis?"

---

### 20. Task Component — COMPONENT

**CSS class(es):** `.task-component`, `.task-header`, `.task-list`, `.task-checkbox`
**CSS lines:** 623–666
**HTML lines:** 945–953, 1081–1088, 1177–1184, 1427–1436 (4 instances)
**DOM structure:**
```html
<div class="task-component" role="group" aria-label="...">
  <div class="task-header">Action Items: Established Patterns</div>
  <ul class="task-list">
    <li><span class="task-checkbox" role="checkbox" aria-checked="false"></span> Task description</li>
    <li>...</li>
  </ul>
</div>
```

**Reader function:** Provides actionable task lists at the end of each content section — the "resolution component" (R5-S4). Each task has a visual checkbox that suggests interactivity. The sparse background (--color-zone-sparse) and 3px border create a distinct "action zone" that shifts reading register from absorbing to doing.

**Detection reasoning:** Three slots: header (section label), list (task items), checkbox (per-item visual marker). Reused 4 times with identical structure. Component.

**Multi-channel coordination:** 3px border + sparse background + checkbox visual + Inter body font all signal "this is an action zone, not a reading zone."

**Pipeline implication:** "What container converts absorbed knowledge into actionable next steps?"

**Derivation question:** "What if each content section ended with concrete action items the reader could check off?"

---

## INFRASTRUCTURE (excluded from catalog)

The following elements were identified but excluded as infrastructure rather than instruments, gestures, or components:

- **Page Header** (`.page-header`, `.header-inner`, `.header-title`, `.header-subtitle`) — Standard page header structure. While it contains instruments (meta line, version badge), the header container itself is infrastructure.
- **Page Container** (`.page-container`) — Content wrapper at max-width 1100px. Pure layout infrastructure.
- **Section structure** (`<section>`, `.section-title`) — Standard HTML sectioning. The section titles use Instrument Serif display font but are standard headings, not instruments.
- **Skip Link** (`.skip-link`) — WCAG accessibility infrastructure.
- **Reset / Soul Enforcement** — CSS reset, border-radius: 0 enforcement, selection styling, focus styles, print styles, reduced motion. All infrastructure.
- **Responsive breakpoints** (`@media (max-width: 768px)`) — Layout adaptation at 768px. Collapses reasoning columns to single column, expands essence callouts to full width, reduces padding. Infrastructure.
- **Inline code** (`code:not(pre code):not(.code-block code)`) — Standard inline code styling. No instances found in HTML.
- **Spoke Transition** (`.spoke-transition`) — 1px horizontal rule between spokes (lines 1366, 1397). Minimal separator — infrastructure spacing, not a gesture because it is a static 1px border that does not shift reading register.

---

## BORDERLINE DECISIONS

1. **Choreography Hub** (`.choreography-hub`, lines 697–702, HTML 1294–1323): This wraps a Reasoning component in a dense-zone background with 3px border. It could be cataloged as a separate component, but it has no unique slots beyond what `.reasoning` already provides — it is a contextual wrapper that signals "this is the HUB of the hub-and-spoke." I catalog it as a contextual styling of the Reasoning component rather than a distinct component. The hub vs. spoke distinction is spatial, not structural.

2. **Spoke** (`.spoke`, `.spoke-header`, lines 704–716, HTML 1326–1437): The spoke has a header slot and content area, and it is reused 3 times. However, its internal content varies wildly (paragraphs, code blocks, callouts, task components). It is more of a layout wrapper with a left border than a structured component with defined slots. The `spoke-header` is Instrument Serif italic — it is a section heading variant, not a distinct component slot. Borderline, but I lean toward INFRASTRUCTURE (layout wrapper) rather than component. If the team disagrees, it could be promoted to a component.

3. **Confidence Gap Spacers** (#4 above): These could be considered infrastructure (just spacing) rather than instruments. I cataloged them as instruments because the PROGRESSIVE EXPANSION encodes metadata (confidence level) — the spacing is semantic, not decorative. If it were uniform spacing, it would be infrastructure.

4. **Footer Rule** (#7 above): This is a sub-element of the Footer Identity Bar (#6). I cataloged it separately because the red echo is independently meaningful as a wayfinding device. The team may prefer to merge it into #6.

---

## SUMMARY

| Category | Count | Elements |
|----------|-------|----------|
| Instruments | 7 | Confidence Badge, Version Badge, Header Meta Line, Confidence Gap Spacers, Research Application Record, Footer Identity Bar, Footer Rule |
| Gestures | 6 | Border-Weight Confidence Gradient, Spacing-as-Confidence Gradient, Tidal Width Modulation, Callout Color-Coding System, Essence Typography Register, Breathing Transition Zone |
| Components | 7 | Essence Callout, Info Callout, Tip Callout, Challenge Callout, Code Block, Reasoning Component, Task Component |
| **Total** | **20** | |

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. I read all 1625 lines — the 80-line comment header, the locked layer CSS (lines 99–239), the exploration layer CSS (lines 245–818), and all HTML (lines 820–1560), plus the findings comments (lines 1562–1625).

2. **Am I identifying elements at the DOM level?** YES. Every element has specific CSS class(es), CSS line numbers, HTML line numbers, and DOM structure snippets. I checked actual `<div>`, `<span>`, `<section>`, `<footer>` elements, not abstract concepts.

3. **Could I have missed subtle gestures?** POSSIBLE. The responsive breakpoint at 768px collapses several layouts (reasoning columns to single column, essence callouts to 100% width, padding reduction). This could be considered a gesture ("the page changes reading mode at mobile viewport"), but I classified it as infrastructure because it is a standard responsive adaptation, not a CD-004-specific design choice. The strata padding reduction at 768px (lines 804–809) does eliminate the confidence-proportional spacing gesture on mobile — this is worth noting.

4. **Am I applying the reader-function test honestly?** YES. I excluded several elements that are "nice styling" but do not change the reader's experience in a meaningful way (section titles, page container, inline code). The spoke-transition got demoted to infrastructure because a 1px border is below the perceptual gesture threshold.

5. **Did I check for pseudo-elements?** YES. No `::before`, `::after`, or `::first-letter` pseudo-elements are used in this exploration. The `::selection` is infrastructure (standard selection highlight).

6. **Did I check responsive breakpoints?** YES. The 768px breakpoint (lines 783–818) was reviewed. It collapses reasoning columns, expands essence callouts to full width, reduces padding, and simplifies spoke padding. Classified as infrastructure. NOTE: The tidal width modulation gesture (#10) is ELIMINATED on mobile because essence callouts expand to 100% — this means the "ambient background" tidal rhythm is desktop-only.

7. **Am I distinguishing styling from instruments/gestures?** YES. I excluded section titles, the page container, standard paragraph styling, link styling, and the basic heading hierarchy as styling. I included only elements where removal would change the reader's orientation (instruments), reading mode (gestures), or content structure (components).
