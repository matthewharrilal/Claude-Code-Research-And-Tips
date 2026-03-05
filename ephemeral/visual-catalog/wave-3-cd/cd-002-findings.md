# CD-002: Task Containing Decision -- Visual Catalog Findings

**File:** `design-system/validated-explorations/combination/CD-002-task-containing-decision.html`
**Lines:** 1567 (CSS: 117-886, HTML: 889-1567)
**Combination formula:** PULSE density + TASK-BASED organization + Z-PATTERN/SPIRAL compound axis
**Total elements cataloged:** 22

---

## INSTRUMENTS

### 1. Running Header -- INSTRUMENT

**CSS class(es):** `.running-header`
**CSS lines:** 545-555
**HTML lines:** 928, 980, 1107, 1234, 1297, 1381
**DOM structure:**
```html
<div class="running-header">Phase 1 -- Understanding the Pipeline</div>
```

**Reader function:** Tells the reader which structural phase they are in. Six instances label the progression: "Phase 1 -- Understanding the Pipeline", "Phase 2 -- Choosing Your CI Tool", "Phase 3 -- Configuring GitHub Actions", "Stratum 1 -- Bedrock", "Stratum 2 -- Subsoil", "Stratum 3 -- Atmosphere". This orients the reader within both the Z-Pattern (Phases 1-3) and Spiral (Strata 1-3) regimes.

**Detection reasoning:** Removing this element makes the reader lose awareness of their position in the page's dual organizational structure (Z-pattern phases vs. Spiral strata). It is pure orientation metadata -- it delivers no content.

**Multi-channel coordination:** Uppercase text-transform + 0.15em letter-spacing + 12px meta font-size + 500 weight + secondary color + 1px bottom border. All channels say "this is structural metadata, not content."

**Pipeline implication:** "How does the reader know which organizational regime (Z-Pattern vs. Spiral) they are currently in?" Every page with multiple organizational modes needs per-section regime labeling.

**Derivation question:** "What if the reader needs a persistent wayfinding signal that also communicates organizational mode transitions?"

---

### 2. Meta Line -- INSTRUMENT

**CSS class(es):** `.meta-line`, `.version-badge`
**CSS lines:** 310-333
**HTML lines:** 896-900
**DOM structure:**
```html
<div class="meta-line">
  <span>EXPLORATION CD-002</span>
  <span>COMBINATION: DECISION GUIDE</span>
  <span class="version-badge">v1</span>
</div>
```

**Reader function:** Identifies the document type, exploration ID, combination category, and version. Sets reading expectations before the title. The version badge (monospace, bordered pill) signals this is a tracked artifact.

**Detection reasoning:** This is reader-orientation metadata. It tells the reader WHAT they are reading (exploration type, ID, version) rather than delivering article content. Removing it loses the document classification context.

**Multi-channel coordination:** Uppercase + 0.15em letter-spacing + 12px meta font-size + 500 weight + secondary color for the text spans. Version badge adds monospace font + 1px border + reduced letter-spacing (0.05em) to differentiate from the label text.

**Pipeline implication:** "How does the reader instantly classify what type of document this is?" Every page needs a document-type declaration in the header region.

**Derivation question:** "What if the reader needs to know the document's lineage and version state before they even read the title?"

---

### 3. Breathing Transition -- INSTRUMENT

**CSS class(es):** `.transition--breathing`, `.transition--breathing__label`
**CSS lines:** 719-737
**HTML lines:** 1216-1218
**DOM structure:**
```html
<div class="transition--breathing" role="separator" aria-label="Transition from task setup to deployment strategy">
  <span class="transition--breathing__label">Deployment Strategy</span>
</div>
```

**Reader function:** Signals the reader that the organizational mode is about to shift from Z-Pattern (horizontal sweep, task-based action) to Spiral (vertical descent, confidence-based reflection). The 144px total breathing space (48px margin + 48px height + 48px margin) plus the label "Deployment Strategy" provides both spatial and cognitive anchoring for the pattern reset.

**Detection reasoning:** This element carries zero content. Its sole purpose is to signal a structural transition. The `role="separator"` confirms its orientation function. Removing it means the reader encounters the Spiral strata without any warning that the reading mode has shifted. It is a wayfinding device between organizational regimes.

**Multi-channel coordination:** Breathing background color (#FAF5ED) + 3px structural borders top/bottom + centered label (uppercase, 0.2em letter-spacing, 12px meta, 500 weight, secondary color) + 48px height + 48px margin top/bottom. Six channels coordinate to say "pause and reset your scanning pattern."

**Pipeline implication:** "How does the reader know when one organizational pattern ends and another begins?" Any compound-axis page needs explicit transition markers at regime boundaries.

**Derivation question:** "What if the reader is scanning in Z-Pattern mode and needs to be told to switch to Spiral descent mode, with enough space to mentally reset?"

---

### 4. Stratum Label -- INSTRUMENT

**CSS class(es):** `.stratum__label`
**CSS lines:** 753-760, 762-764, 780-782, 792-794
**HTML lines:** 1237, 1300, 1384
**DOM structure:**
```html
<div class="stratum__label">Core Abstraction</div>
```

**Reader function:** Tells the reader which confidence level they are reading within the Spiral section. Three instances: "Core Abstraction" (bedrock), "Implementation Detail" (subsoil), "Speculative" (atmosphere). The label color degrades with confidence: near-black (#1A1A1A) to secondary (#666666) to border (#E0D5C5), encoding certainty in the label's own visual weight.

**Detection reasoning:** The label communicates confidence metadata, not content. Without it, the reader would see the stratum content but not know the author's certainty about that content. It is an epistemic orientation device.

**Multi-channel coordination:** Color encodes confidence (dark to light). Uppercase + 0.1em letter-spacing + 12px meta + 600 weight are constant across all strata -- the color is the ONLY varying channel, isolating confidence as a single-variable encoding.

**Pipeline implication:** "How does the reader know how confident the author is about each section of guidance?" Confidence-stratified content needs per-section epistemic labeling.

**Derivation question:** "What if each section needed to declare its own confidence level so the reader can calibrate their trust?"

---

### 5. Decision Matrix Header -- INSTRUMENT

**CSS class(es):** `.decision-matrix__header`
**CSS lines:** 649-659
**HTML lines:** 988
**DOM structure:**
```html
<div class="decision-matrix__header">Decision Matrix</div>
```

**Reader function:** Labels the upcoming content as a "Decision Matrix" -- signaling to the reader that they should switch from task-execution mode to analytical-comparison mode. The red (#E83025) primary color and 3px red bottom border distinguish this from all other component headers, marking it as the page's single decision point.

**Detection reasoning:** This is a mode-switch signal. It tells the reader HOW to read the following content (compare and choose, don't execute). Removing it makes the table ambiguous -- is it informational or decisional?

**Multi-channel coordination:** Primary red color (vs. secondary gray for other headers) + 3px red bottom border (vs. 1px subtle for running-header) + uppercase + 0.1em letter-spacing + 12px meta + 600 weight. The red accent is the exception-state signal that says "this is the decision point."

**Pipeline implication:** "How does the reader know when content requires active comparison and choice rather than passive reading?" Decision-containing pages need explicit decision-mode signals.

**Derivation question:** "What if the reader needs to know that this specific section requires them to stop reading and start choosing?"

---

### 6. Recommendation Box -- INSTRUMENT

**CSS class(es):** `.recommendation`, `.recommendation__label`
**CSS lines:** 671-686
**HTML lines:** 1047-1057
**DOM structure:**
```html
<div class="recommendation">
  <div class="recommendation__label">Recommendation</div>
  <p>
    <strong>For teams already on GitHub:</strong> Use GitHub Actions...
  </p>
</div>
```

**Reader function:** Resolves the Decision Matrix by providing the author's recommendation. After the analytical comparison table, this box tells the reader "here is what I think you should do." The 4px red left border ties it visually to the Decision Matrix header (same primary color), signaling it is the matrix's conclusion, not a separate component.

**Detection reasoning:** While it contains content (the recommendation text), its primary function is orientation within the decision flow: it signals "the decision point has ended, here is the verdict." It resolves the analytical pause. Without it, the decision matrix is open-ended (violating R5-A3 anti-paralysis).

**Multi-channel coordination:** 4px primary-red left border + dense white background (#FFFFFF) against the sparse background + uppercase red label matching the matrix header color. The color linkage (red label + red border) creates a visual kinship between the matrix and its resolution.

**Pipeline implication:** "How does the reader know when an analytical comparison has reached its conclusion?" Every decision matrix needs a resolution instrument.

**Derivation question:** "What if the reader finishes comparing options and needs to know what the author actually recommends?"

---

### 7. Task Component Header -- INSTRUMENT

**CSS class(es):** `.task-component__header`
**CSS lines:** 573-583
**HTML lines:** 1169, 1311
**DOM structure:**
```html
<div class="task-component__header">Task: Setup Checklist</div>
```

**Reader function:** Labels the following content as an actionable task with a named purpose. The "Task:" prefix signals execution mode (do this), while the specific name ("Setup Checklist", "Deployment Setup") orients the reader to what will be accomplished. The 1px bottom border separates this label from the task title.

**Detection reasoning:** This is a mode-shift signal. It tells the reader to switch from reading mode to doing mode. Removing it means the task items appear without context for what they accomplish.

**Multi-channel coordination:** Uppercase + 0.1em letter-spacing + 12px meta + 600 weight + secondary color + 1px bottom border. All channels match the Running Header's "metadata" register, creating visual kinship between structural labels.

**Pipeline implication:** "How does the reader know when to switch from reading to executing?" Task-based pages need explicit action-mode entry signals.

**Derivation question:** "What if the reader needs a clear signal that the following items are things to DO, not things to KNOW?"

---

### 8. Footer Dimension Labels -- INSTRUMENT

**CSS class(es):** `.page-footer__id`
**CSS lines:** 828-834
**HTML lines:** 1430, 1432
**DOM structure:**
```html
<span class="page-footer__id">CD-002 &middot; Task Containing Decision</span>
<!-- ... -->
<span class="page-footer__id">DD:PULSE &middot; OD:TASK-BASED &middot; AD:Z+SPIRAL</span>
```

**Reader function:** The first label identifies the document. The second declares the three-dimensional composition formula (DD:PULSE, OD:TASK-BASED, AD:Z+SPIRAL). This tells the reader -- retrospectively -- exactly which design dimensions were combined. It is a composition summary instrument.

**Detection reasoning:** This is pure metadata. The dimension declaration has zero content relevance to the CI/CD tutorial -- it serves design-system provenance and reader orientation about what they just experienced.

**Multi-channel coordination:** Monospace font + 12px meta + 0.1em letter-spacing + uppercase + secondary gray color on dark background. The footer rule (48px wide, 3px tall, primary red) provides a small branded accent.

**Pipeline implication:** "How does the reader know what compositional formula produced this page?" Every exploration needs a compositional fingerprint.

**Derivation question:** "What if the reader wants to know, at the end, exactly which density, organization, and axis dimensions were at work?"

---

## GESTURES

### 9. Border-Weight Confidence Gradient (Spiral Strata) -- GESTURE

**CSS class(es):** `.stratum--bedrock`, `.stratum--subsoil`, `.stratum--atmosphere`
**CSS lines:** 746-794
**HTML lines:** 1236, 1299, 1383

**Reader function:** Border-left thickness encodes confidence: 4px (bedrock, highest) to 3px (subsoil, moderate) to 1px (atmosphere, speculative). As the reader descends through strata, the thinning border physically communicates decreasing certainty. The reader can sense confidence degradation without reading a single word.

**Detection reasoning:** This is not a single element -- it is a coordinated multi-property shift across three sibling sections. The rule is: "confidence inversely correlates with border lightness, spacing compression, and background warmth." Multiple CSS channels shift together.

**Multi-channel coordination:**
- Border-left: 4px solid #1A1A1A -> 3px solid #666666 -> 1px solid #E0D5C5
- Padding: 32px/24px -> 24px/20px -> 20px/16px
- Background: #FFFFFF (dense/warm) -> #FEF9F5 (sparse/neutral) -> #FAF5ED (breathing/cool)
- Label color: #1A1A1A -> #666666 -> #E0D5C5

Four channels degrade together according to one rule: confidence decreases as you descend.

**Pipeline implication:** "What if the physical weight of the border could tell the reader how certain the author is?" Confidence-graded content benefits from multi-channel typographic degradation.

**Derivation question:** "What if every visual property of a section -- border, spacing, background, label color -- degraded together to encode a single semantic variable (confidence)?"

---

### 10. PULSE Dense/Sparse Alternation -- GESTURE

**CSS class(es):** `.callout` (sparse), `.task-component` / `.decision-matrix` (dense)
**CSS lines:** 405-410 (callout), 566-571 (task-component), 643-647 (decision-matrix)
**HTML lines:** Throughout -- sections alternate between sparse (callouts, prose) and dense (task lists, decision tables)

**Reader function:** The page creates a rhythmic alternation between informationally dense phases (task checklists, decision matrices) and sparse phases (callouts, prose paragraphs). This PULSE rhythm varies the reader's cognitive load, preventing fatigue. Dense phases use white backgrounds (#FFFFFF) with 3px structural borders; sparse phases use warm cream (#FEF9F5) backgrounds with 4px accent borders.

**Detection reasoning:** No single element creates this gesture. It is the PATTERN of alternation across the page. The CSS encodes it through background color differentiation (dense = #FFFFFF via `--color-zone-dense`, sparse = #FEF9F5 via `--color-zone-sparse`) and border category shifts (dense = 3px structural, sparse = 4px semantic accent).

**Multi-channel coordination:**
- Background: #FFFFFF (dense) vs #FEF9F5 (sparse) vs #FAF5ED (breathing)
- Border: 3px structural (dense) vs 4px accent left-border (sparse)
- Content density: Checklists/tables (dense) vs prose/callouts (sparse)
- Reading velocity: Execute (dense) vs absorb (sparse)

**Pipeline implication:** "How does the reader avoid cognitive fatigue during a long procedural page?" PULSE rhythm requires background and border shifts that alternate between cognitive load levels.

**Derivation question:** "What if the background color and border weight could signal to the reader whether this section requires active execution or passive absorption?"

---

### 11. Callout Accent-Color Semantic Shift -- GESTURE

**CSS class(es):** `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`
**CSS lines:** 428-447
**HTML lines:** 934, 960, 1083, 1241, 1350, 1362

**Reader function:** The 4px left-border color changes per callout type: blue (info/context), green (tip), coral (gotcha/warning), purple (essence/philosophical). Each color shift changes the reader's alertness level and reading register. Blue = neutral orientation, green = positive actionable, coral = heightened caution, purple = reflective/philosophical.

**Detection reasoning:** This is a coordinated shift in border-color AND label-color that changes the reader's affective register. The content structure (label + body) stays constant -- only the accent color varies. The color IS the gesture because it is the only thing that changes between variants.

**Multi-channel coordination:**
- Border-left color: blue (#4A90D9) / green (#4A9D6B) / coral (#C97065) / amber (#D97706) / purple (#7C3AED)
- Label color: matches border color
- Essence variant adds: font-family shift to Instrument Serif italic (body text becomes serif)

**Pipeline implication:** "How does the reader know whether a sidebar note is neutral information, a helpful tip, a danger warning, or a philosophical reflection?" Callout accent colors are semantic gestures that shift reading register.

**Derivation question:** "What if the border color could tell the reader how to emotionally calibrate before reading the callout content?"

---

### 12. Essence Callout Typographic Register Shift -- GESTURE

**CSS class(es):** `.callout--essence .callout__body`
**CSS lines:** 440-447
**HTML lines:** 1241-1249

**Reader function:** When a callout is marked as "Essence," the body text shifts from Inter (sans-serif body font) to Instrument Serif italic. This is the ONLY place on the page where body text uses the display font in italic. The shift signals a different authorial voice -- the "Archivist" voice (Soul Piece #2) -- speaking in a more reflective, philosophical register.

**Detection reasoning:** This is a font-family + font-style shift on a content container. The structural template (label + body) remains identical -- only the typographic register changes. The reader experiences a voice change. This is distinct from the accent-color gesture (#11) because it changes a DIFFERENT channel (typography vs color) and produces a different perceptual effect (authorial voice vs. alertness level).

**Multi-channel coordination:**
- Font-family: Inter -> Instrument Serif
- Font-style: normal -> italic
- Border-color: purple (from accent-color gesture)

Three channels shift together, but the typographic shift is the dominant perceptual change.

**Pipeline implication:** "How does the reader know when the author is speaking in a different voice -- philosophical rather than practical?" A font-family shift on body text signals authorial register change.

**Derivation question:** "What if the font itself could change to tell the reader that this is the author's deepest conviction, not just another informational note?"

---

### 13. Section Title with Structural Border -- GESTURE

**CSS class(es):** `.section-title`
**CSS lines:** 534-540
**HTML lines:** 930, 982, 1109

**Reader function:** Each major Z-Pattern section begins with an h2 styled with a 3px bottom border, creating a visible "threshold" that the reader must cross to enter the section. The border acts as a gate -- it says "this is a major section boundary, not a subsection." Combined with the running-header above it, the two elements create a two-part entry sequence: structural label (running header) + content title (section title with border).

**Detection reasoning:** The 3px bottom border is the gesture. Headings without this border (stratum titles, task titles) do not create the same threshold effect. The border shifts the reading from "scanning" to "committing to a new section." It is a spatial inflection point.

**Multi-channel coordination:**
- 3px bottom border (#E0D5C5, structural category)
- Section-level font size (26px)
- Display font (Instrument Serif)
- Bottom padding (12px) creating separation between title and border

**Pipeline implication:** "How does the reader know they are crossing a major section boundary?" Structural borders on headings create visual thresholds that sub-headings lack.

**Derivation question:** "What if a heading could physically mark a boundary line that the reader's eye must cross, signaling commitment to a new section?"

---

### 14. Task Item Checkbox Affordance -- GESTURE

**CSS class(es):** `.task-item__check`
**CSS lines:** 609-621
**HTML lines:** 1173, 1179, 1185, 1191, 1199, 1315, 1322, 1330, 1338

**Reader function:** Each task item begins with a 20x20px bordered square (3px structural border). This checkbox-like affordance shifts the reader from passive reading to active tracking. Even though the checkboxes are non-interactive (no `<input>`), their visual presence signals "this is something to DO and track." The reader mentally ticks items as they complete them.

**Detection reasoning:** The gesture is the visual affordance of the checkbox, not the checkbox itself (it has no interactive behavior). The 3px border makes it structurally heavy -- matching the task-component border weight -- which visually encodes these items as part of the "structural action" family rather than decorative.

**Multi-channel coordination:**
- 20x20px fixed size + 3px border = structural weight matching task-component
- Flex layout with 16px gap = aligned with task content
- Secondary color for the check character + 12px meta size

**Pipeline implication:** "How does the reader know that a list item requires action rather than just reading?" Visual checkbox affordances shift reading mode from passive to active-tracking.

**Derivation question:** "What if each task item had a small physical marker that told the reader 'this is something you need to do, not just something to read'?"

---

### 15. Z-to-Spiral Temperature Gradient -- GESTURE

**CSS class(es):** (cross-section pattern, no single class)
**CSS lines:** Z-sections: 566-571 (task-component uses `--color-zone-dense`); Spiral: 746-794 (bedrock #FFFFFF, subsoil #FEF9F5, atmosphere #FAF5ED)
**HTML lines:** Z-sections (927-1208), Breathing (1216-1218), Spiral (1233-1413)

**Reader function:** The page's background color follows a temperature gradient from warm to cool. Z-Pattern sections use white (#FFFFFF) for dense zones and cream (#FEF9F5) for sparse. After the breathing transition, the Spiral strata continue the cooling: dense white (#FFFFFF, bedrock) to warm cream (#FEF9F5, subsoil) to cooled cream (#FAF5ED, atmosphere). The reader experiences a gradual visual cooling as content moves from certain/actionable to speculative/philosophical.

**Detection reasoning:** No single element creates this. It is a page-level pattern encoded in background-color values across sections. The gradient is monotonic (warm to cool) and correlates with confidence degradation (A5 Temperature Whiplash avoided). The reader perceives it as an ambient shift, not a discrete change.

**Multi-channel coordination:**
- Background color: #FFFFFF -> #FEF9F5 -> #FAF5ED (warm to cool)
- Correlated with: border-weight decrease + spacing compression + label color lightening
- Anti-pattern compliance: no warm-to-cool-to-warm reversals

**Pipeline implication:** "How does the reader experience a gradual shift from certainty to speculation?" Temperature gradients across background colors create an ambient confidence signal.

**Derivation question:** "What if the page's ambient visual temperature could cool down as the content became more speculative, without the reader consciously noticing?"

---

### 16. Closing Statement Typographic Gesture -- GESTURE

**CSS class(es):** (inline styles)
**CSS lines:** N/A (inline)
**HTML lines:** 1417-1422
**DOM structure:**
```html
<div style="padding: var(--space-12) 0 var(--space-8); text-align: center;">
  <p style="font-family: var(--font-display); font-size: var(--type-section); font-style: italic; color: var(--color-text-secondary); max-width: 100%;">
    The pipeline is not infrastructure.<br>
    It is the team's definition of done.
  </p>
</div>
```

**Reader function:** The page ends with a centered, Instrument Serif italic statement in section-level font size (26px) with secondary gray color. This shifts the reader from the practical register of task execution into a reflective register. The centered alignment, display font, and italic style all mark this as the author's concluding philosophical statement -- a "coda" that mirrors the Essence callout's voice.

**Detection reasoning:** Multiple typographic properties shift simultaneously: center alignment (vs. left throughout), display font (vs. body font for prose), italic style, secondary color, and 100% max-width (vs. 70ch for body paragraphs). These coordinated shifts create a reading-mode change at the page's conclusion.

**Multi-channel coordination:**
- Font-family: Inter -> Instrument Serif
- Font-style: normal -> italic
- Text-align: left -> center
- Color: #1A1A1A -> #666666 (primary -> secondary)
- Max-width: 70ch -> 100% (reading corridor removed)
- Padding: 48px top, 32px bottom (extra whitespace before/after)

Six channels shift together to signal "this is the philosophical conclusion."

**Pipeline implication:** "How does the page signal to the reader that the practical content is over and this is the author's final reflection?" A coordinated typographic shift at the end creates a closing coda.

**Derivation question:** "What if the last thing on the page used a completely different typographic register to signal 'this is not instructions, this is a belief'?"

---

## COMPONENTS

### 17. Task Component -- COMPONENT

**CSS class(es):** `.task-component`, `.task-component__header`, `.task-component__title`, `.task-list`, `.task-item`, `.task-item__check`, `.task-item__content`
**CSS lines:** 566-637
**HTML lines:** 1168-1207, 1310-1347
**DOM structure:**
```html
<div class="task-component">
  <div class="task-component__header">Task: Setup Checklist</div>
  <h3 class="task-component__title">Configure Your CI Pipeline</h3>
  <ul class="task-list">
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content">
        <strong>Bold action:</strong> Description text with <code>code</code>.
      </div>
    </li>
    <!-- ... more task items -->
  </ul>
</div>
```

**Reader function:** A bordered container holding a checklist of actionable tasks. Four defined slots: header (task type label), title (what the tasks accomplish), task-list (ordered actions), and task-items (individual action + description pairs with checkbox affordances). Two instances on the page: "Configure Your CI Pipeline" (5 items) and "Configure Production Deployment" (4 items).

**Detection reasoning:** This has defined content slots (header, title, list), consistent visual treatment (3px structural border, white background, 32px padding), and is reused twice with different content. It is a structured container for actionable content.

**Multi-channel coordination:** 3px structural border + white background (dense zone) + header/title/list slot structure + checkbox affordances per item + 1px separator borders between items.

**Pipeline implication:** "How should a list of actionable steps be visually contained and structured?" Task components need a bordered container with explicit header, title, and checklist slots.

**Derivation question:** "What if procedural steps needed a container that visually says 'these are things to DO' with clear completion tracking?"

---

### 18. Decision Matrix -- COMPONENT

**CSS class(es):** `.decision-matrix`, `.decision-matrix__header`, `.decision-matrix__title`, `.recommendation`, `.recommendation__label`
**CSS lines:** 643-686
**HTML lines:** 987-1058
**DOM structure:**
```html
<div class="decision-matrix">
  <div class="decision-matrix__header">Decision Matrix</div>
  <h3 class="decision-matrix__title">Which CI/CD Platform Fits Your Project?</h3>
  <table>
    <thead>...</thead>
    <tbody>...</tbody>
  </table>
  <div class="recommendation">
    <div class="recommendation__label">Recommendation</div>
    <p>...</p>
  </div>
</div>
```

**Reader function:** A container for comparative decision-making with four defined slots: header (decision-matrix label), title (the question being decided), comparison table (criteria x options grid), and recommendation (author's verdict). The sparse background (#FEF9F5) differentiates it from task components (white #FFFFFF), encoding it as a "pause for thought" rather than "execute these steps."

**Detection reasoning:** This is a reusable container with defined structure (header, title, table, recommendation) and consistent visual treatment. Only one instance on this page, but the structure is portable to any decision-requiring content.

**Multi-channel coordination:** Sparse background (pause) + red primary header (decision-mode signal) + table with breathing-zone header background + 4px red left-border on recommendation box. The red accent family ties all decision-related sub-elements together.

**Pipeline implication:** "How should comparative options be presented when the reader needs to choose?" Decision matrices need header + title + comparison table + resolution (recommendation) slots.

**Derivation question:** "What if a comparison table needed to live inside a container that signaled 'you need to make a choice here' with a built-in resolution?"

---

### 19. Reasoning Component -- COMPONENT

**CSS class(es):** `.reasoning`, `.reasoning__label`, `.reasoning__title`
**CSS lines:** 691-713
**HTML lines:** 1062-1080
**DOM structure:**
```html
<div class="reasoning">
  <div class="reasoning__label">Reasoning</div>
  <h3 class="reasoning__title">Why Platform Lock-in Matters Less Than You Think</h3>
  <p>...</p>
  <p>...</p>
</div>
```

**Reader function:** An analytical companion to the Decision Matrix. Three slots: label (amber "Reasoning"), title (italic serif, the thesis), and body paragraphs (the argument). The amber accent (#D97706) differentiates it from the red Decision Matrix, marking it as "reflection on the decision" rather than "the decision itself." The italic serif title signals a more discursive, essayistic register.

**Detection reasoning:** This is a structured container with defined slots (label, title, body) and consistent visual treatment (4px amber left-border, sparse background). It is the "analytical sibling" (R5-R1) of the Decision Matrix -- a distinct component that always pairs with decisions.

**Multi-channel coordination:** 4px amber left-border + sparse background + amber label color + italic serif title (Instrument Serif). The amber color family is unique to this component, creating visual kinship only with itself.

**Pipeline implication:** "How does the reader get the author's extended reasoning after a decision point?" Reasoning components provide analytical depth adjacent to Decision Matrices.

**Derivation question:** "What if every decision matrix needed a companion container where the author could explain the deeper reasoning behind the recommendation?"

---

### 20. Callout -- COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, plus variants `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`
**CSS lines:** 405-447
**HTML lines:** 934-943, 960-968, 1083-1091, 1241-1249, 1350-1359, 1362-1371
**DOM structure:**
```html
<div class="callout callout--info">
  <div class="callout__label">Context</div>
  <div class="callout__body">
    Content text here...
  </div>
</div>
```

**Reader function:** A two-slot sidebar note (label + body) with a 4px accent left-border. Six instances on the page across four variants: info (2x: Context, Prerequisites), tip (2x), gotcha (1x), essence (1x). Each variant uses a different accent color to signal reading register. The callout is the page's primary "aside" container.

**Detection reasoning:** Clear content slots (label + body), consistent structural treatment (4px left-border, 24px/20px padding, sparse background), reused 6 times with different content. This is the most-reused component on the page.

**Multi-channel coordination:** 4px accent left-border (color varies by type) + label in matching accent color (uppercase, meta size, 600 weight) + body text in body font (except essence variant, which shifts to serif italic).

**Pipeline implication:** "How should sidebar notes, tips, warnings, and philosophical asides be structured?" The callout is the universal aside container with accent-color variants for semantic differentiation.

**Derivation question:** "What if every aside needed exactly two slots -- a type label and a body -- with only the accent color varying to encode the aside's emotional register?"

---

### 21. Challenge Box -- COMPONENT

**CSS class(es):** `.challenge`, `.challenge__label`
**CSS lines:** 797-811
**HTML lines:** 1395-1411
**DOM structure:**
```html
<div class="challenge">
  <div class="challenge__label">Challenge</div>
  <p><strong>Add a rollback stage to your pipeline.</strong> ...</p>
  <p style="margin-top: var(--space-4); margin-bottom: 0;">
    The harder question: ...
  </p>
</div>
```

**Reader function:** A bordered container for speculative, reader-directed prompts. Two slots: label ("Challenge" in primary red) and body (prose with embedded questions). Unlike callouts (which use left-border accent), the challenge uses a full 3px structural border (all sides), marking it as a "container" rather than an "aside." It lives exclusively in the Atmosphere stratum, encoding its speculative nature through context.

**Detection reasoning:** This is a structured container with defined slots (label + body) and a distinct visual treatment (full structural border rather than left-border accent). It appears only once, but its structure is portable. It is NOT a callout variant -- the full border distinguishes it as a different component family.

**Multi-channel coordination:** 3px primary-red border (all sides) + sparse background + red label (uppercase, meta, 600 weight) + prose body. The full-border treatment says "this is contained and bounded" vs. callout's left-border which says "this is a margin note."

**Pipeline implication:** "How should open-ended challenges or reader-directed prompts be distinguished from informational asides?" Challenges use full borders to signal containment; callouts use left-borders to signal marginality.

**Derivation question:** "What if the reader needed a visually distinct container that says 'this is a challenge for YOU to think about' rather than 'this is information FROM ME'?"

---

### 22. Spiral Stratum Container -- COMPONENT

**CSS class(es):** `.stratum--bedrock`, `.stratum--subsoil`, `.stratum--atmosphere`, `.stratum__label`, `.stratum__title`
**CSS lines:** 746-794
**HTML lines:** 1236-1288, 1299-1372, 1383-1412
**DOM structure:**
```html
<div class="stratum--bedrock">
  <div class="stratum__label">Core Abstraction</div>
  <h2 class="stratum__title">The Pipeline Is the Product</h2>
  <!-- content: callouts, prose, code blocks, task components -->
</div>
```

**Reader function:** A confidence-encoded section container with three slots: stratum label (confidence level name), title (section heading), and open body (any content). Three variants (bedrock/subsoil/atmosphere) degrade visual weight through the border-weight confidence gradient (Gesture #9). The container IS the confidence encoding -- its left border, padding, and background communicate certainty before the reader reads any text.

**Detection reasoning:** This is a structured container with defined slots (label, title, body) reused three times with systematically varying visual treatment. Each variant hosts different content (callouts, prose, code, task components), confirming it is a generic section container. The visual variation is not decorative -- it encodes the semantic variable "confidence."

**Multi-channel coordination:** See Gesture #9 for the full multi-channel degradation. The component provides the slots; the gesture provides the degradation rule.

**Pipeline implication:** "How should sections with different confidence levels be visually contained?" Spiral strata containers use multi-channel degradation to encode confidence as a structural property.

**Derivation question:** "What if the container itself could tell the reader how certain the author is, through border weight, spacing, and background color, before they read a word?"

---

## TAXONOMY-RESISTANT ELEMENTS

### Closing Statement (Lines 1417-1422)
The centered italic serif closing statement is categorized as a Gesture (#16), but it has properties of an Instrument (it signals "content is over, reflection begins") and could be argued as a Component (it has a consistent structure: centered block + display-font text). I categorized it as a Gesture because its primary function is a typographic register shift -- the coordinated change in font, alignment, color, and width IS the element. But a case could be made for Component if it is found to recur across multiple explorations with consistent slot structure.

### Header (Lines 894-908)
The full header assembly (meta-line + h1 + subtitle) could be cataloged as a Component, but its slot structure (meta-line instrument + title + subtitle) makes it more of an assembly of instruments and standard HTML elements than a single component with unique reader function. The meta-line is cataloged as an Instrument (#2); the header itself is standard page structure.

### Footer (Lines 1428-1434)
Similarly, the footer is standard page structure. The dimension labels within it are cataloged as an Instrument (#8). The footer rule (`.page-footer__rule`) is a small branded accent -- a 48x3px red bar -- but is too minimal to constitute its own gesture or instrument.

### Code Block (Lines 364-391)
The dark-background code block with syntax highlighting tokens (.kw, .st, .cm, .fn, .ty, .nu, .pu) could be a Component, but code blocks are ubiquitous page infrastructure rather than a design-system-specific element with unique reader function. The syntax highlighting IS specific to this system (using token colors like --syntax-keyword: #E83025), but it functions as standard code presentation. Categorized as infrastructure.

### Table Styling (Lines 452-483)
The open-grid table styling (no vertical borders, 3px header bottom border, 1px row separators) is a standard component used inside the Decision Matrix. Since it only appears inside the Decision Matrix and does not function independently, it is merged into the Decision Matrix component (#18) rather than cataloged separately.

---

## ADDITIONAL OBSERVATIONS (Infrastructure -- Not Cataloged)

- **Skip Link** (`.skip-link`, lines 265-280): Accessibility infrastructure. No reader-experience function during normal reading.
- **::selection** (lines 254-257): Branded text selection (primary red background). Infrastructure styling.
- **:focus-visible** (lines 260-263): WCAG-compliant focus ring (3px primary red). Accessibility infrastructure.
- **Print styles** (lines 499-521): Print-specific overrides. Not visible during screen reading.
- **Reduced motion** (lines 488-494): Accessibility accommodation. Not a visible element.
- **Screen reader only** (`.sr-only`, lines 282-293): Accessibility infrastructure.

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML)?** YES. Read lines 1-1567 in four passes (1-400, 400-800, 800-1199, 1199-1567). CSS spans lines 117-886 (locked layer 117-522, combination layer 529-886). HTML spans 889-1567.

2. **Am I identifying elements at the DOM level?** YES. Every cataloged element maps to specific CSS classes and HTML line numbers. The Gestures identify coordinated CSS property shifts across DOM elements rather than abstract concepts.

3. **Could I have missed subtle gestures?** CHECKED. I found the closing statement gesture (#16) which uses inline styles rather than named classes -- easy to miss. I verified the temperature gradient (#15) by tracing background-color values across all sections. I checked for pseudo-elements (::before, ::after, ::first-letter) -- none are used in this file beyond ::selection (infrastructure).

4. **Am I applying the reader-function test honestly?** YES. I did NOT catalog the table styling as a separate component because it only functions within the Decision Matrix. I did NOT catalog the header/footer as components because their unique elements are already captured as instruments. I flagged the closing statement as taxonomy-resistant because the Gesture/Instrument distinction is genuinely ambiguous.

5. **Did I check for pseudo-elements?** YES. Only `::selection` is used (infrastructure). No `::before`, `::after`, or `::first-letter` pseudo-elements are present in this file.

6. **Did I check responsive breakpoints?** YES. The @media (max-width: 768px) block (lines 844-885) adjusts padding values for header, page-container, task-component, decision-matrix, reasoning, and strata. No elements appear/disappear at different viewports -- the responsive changes are padding compression only, which does not constitute a separate gesture since the relative proportions are preserved.

7. **Am I distinguishing between "styling" and "instruments/gestures"?** YES. I excluded code block syntax highlighting, table base styles, inline code formatting, link colors, and reset styles as standard styling. I included elements where the CSS pattern serves a specific reader-experience function beyond "making it look nice."

---

## SUMMARY

| Category | Count | Names |
|----------|-------|-------|
| Instruments | 8 | Running Header, Meta Line, Breathing Transition, Stratum Label, Decision Matrix Header, Recommendation Box, Task Component Header, Footer Dimension Labels |
| Gestures | 8 | Border-Weight Confidence Gradient, PULSE Dense/Sparse Alternation, Callout Accent-Color Semantic Shift, Essence Typographic Register Shift, Section Title Structural Border, Task Item Checkbox Affordance, Z-to-Spiral Temperature Gradient, Closing Statement Typographic Gesture |
| Components | 6 | Task Component, Decision Matrix, Reasoning Component, Callout, Challenge Box, Spiral Stratum Container |
| **Total** | **22** | |

**Key CD-002 contribution to the catalog:** This file introduces the Decision Matrix and Reasoning components as new component types not seen in OD or AD explorations. The Breathing Transition instrument is the first explicit organizational-regime-transition marker. The PULSE dense/sparse alternation gesture operates at the page level, encoding cognitive load rhythms through background color differentiation. The Spiral Strata containers demonstrate how a single component template can encode a semantic variable (confidence) through coordinated visual degradation.
