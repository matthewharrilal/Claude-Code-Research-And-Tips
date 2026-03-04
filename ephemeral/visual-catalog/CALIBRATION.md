# Instrument / Gesture / Component Detection Calibration

## YOUR TASK

You are reading ONE HTML exploration file. Your job is to identify every **Instrument**, **Gesture**, and **Component** in that file. You must read the ENTIRE file — CSS and HTML — and identify elements at the DOM level.

## THREE CATEGORIES

### Instruments — Metadata devices that make the page self-aware
An Instrument tells the reader WHERE they are, WHAT they're reading, or HOW MUCH of the page they've traversed. It is a DOM element (or group of elements) whose primary purpose is **reader orientation**, not content delivery.

**The test:** Remove this element. Does the reader lose awareness of their position, the content's nature, or the page's structure? If yes → Instrument.

**Calibration examples from OD-004 and OD-006:**

1. **Geological Column** (OD-004, `.geological-column`) — Miniature bar chart in dark header showing 4 confidence levels with bars of different heights (4px/3px/2px/1px). Shows the page's entire confidence architecture before reading begins.

2. **Geological Survey** (OD-004, `.geological-survey`) — Content inventory panel with strata inventory (colored squares + counts per confidence level) and survey metadata (Total Practices, Reading Time, etc.).

3. **Evidence DNA** (OD-004, `.evidence-dna`) — Three monospace metadata chips at each stratum header: "Sources: 50+" / "Validation: Production-proven" / "Consensus: Industry-wide". Values degrade systematically across strata.

4. **Epistemic Marker** (OD-004, `.stratum__epistemic`) — "This section contains well-established practices..." — direct address setting reading register per stratum.

5. **Confidence Switcher** (OD-004, `.confidence-switcher`) — Three-button tab bar: "Facts Only" / "Full Analysis" / "Everything". Reader agency instrument.

6. **Stratum Boundary with Progress** (OD-004, `.stratum-boundary`) — Transition marker with progress squares (filled/empty, "1 of 4"). Wayfinding at every major transition.

7. **Scroll Witness** (OD-006, `.scroll-witness`) — Fixed sidebar with progress bars that fill as sections scroll into view. Each entry shows mode label ("conversational — PULSE").

8. **Fractal Annotation Layer** (OD-006, `.fractal-annotations`) — Persistent left-margin sidebar with vertical rotated text labeling fractal scales with actual ratio annotations.

9. **Visual Index / Pattern Echo** (OD-006, `.visual-index`) — Bento grid with CSS-only miniature renderings of each organizational pattern. Specimen sheet.

10. **Section Header Mode Indicator** (OD-006, `.section-header__mode`) — Sticky header showing organizational mode: "Conversational — PULSE density" with red square marker.

11. **Section Divider with Mode Transition** (OD-006, `.section-divider`) — "Conversational → Narrative" between sections. Cognitive decompression.

12. **Certainty Badge** (OD-006, `.certainty-badge`) — Scale labels in fractal verification section.

13. **Synthesis Cards** (OD-006, `.synthesis-grid`) — Grid of cards proving org=density identity pairs.

14. **Proof Table** (OD-006, `.comparison-table` in Section 6) — Table mapping reading experience to organizational theory retroactively.

---

### Gestures — Typographic/spatial inflection points that shift reading register
A Gesture is NOT a single DOM element — it's a CSS-encoded shift in the reading experience. It changes HOW you read, not WHAT you read. Multiple CSS properties shift together according to a rule.

**The test:** Does this CSS pattern change the reader's pace, mode, or attention level? Is it a coordinated multi-property shift (not just a style)? If yes → Gesture.

**Calibration examples:**

15. **Border-Weight Confidence Encoding** (OD-004) — 4px→3px→2px→1px left border encoding confidence. Physical thickness IS the meaning.

16. **Typography Compression Gradient** (OD-004) — h3 size, body font-size, line-height, and max-width all compress together across strata. Multi-channel coordination where all channels vary according to ONE rule: "density inversely correlates with confidence."

17. **Spacing-as-Confidence** (OD-004) — Padding compresses from 40px→32px→20px→16px across strata. Whitespace itself encodes certainty.

18. **Editorial Drop Cap** (OD-006, `.section-opening::first-letter`) — 4.2em Instrument Serif in red, floated left. Signals "a new section begins" and shifts from scanning to immersive reading.

19. **Collapsing Section Header** (OD-006, `.section-header`) — Sticky header reveals red bottom border when scrolled. Reading-position gesture.

20. **Dual Lens Font Shift** (OD-006, `.view-why` vs `.view-how`) — Entire typographic register changes: Instrument Serif italic → JetBrains Mono. The font family IS the register shift.

---

### Components — Structured content containers
A Component holds and structures article content. It has defined slots (header, body, label, etc.) and a consistent visual treatment.

**The test:** Is this a reusable container for article content with defined structure? If yes → Component.

**Calibration examples:**

21. **Stratum** (OD-004, `.stratum--*`) — Multi-slot confidence-encoded container: depth-label, title, epistemic marker, evidence-dna, content blocks.

22. **Comparison Grid** (OD-004, `.comparison-grid`) — Side-by-side pattern comparison.

23. **Q/A Pair** (OD-006, `.qa-pair`) — Question at 60% width, answer at 100%. Width variation creates TIDAL density.

24. **Dual Lens** (OD-006, `.dual-lens`) — Toggle container with "Why" / "How" views.

25. **Territory Tile** (OD-006, `.territory-tile`) — Solid offset cards in spatial section.

26. **Solid Offset** (OD-006, `.solid-offset`) — Reusable depth component via pseudo-element.

---

## OUTPUT FORMAT

Write your findings to a markdown file. For EACH element found:

```markdown
### [NAME] — [INSTRUMENT / GESTURE / COMPONENT]

**CSS class(es):** `.class-name`
**CSS lines:** [line numbers in the HTML file]
**HTML lines:** [line numbers in the HTML file]
**DOM structure:**
```html
<div class="element">
  <div class="element__child">...</div>
</div>
```

**Reader function:** [1-2 sentences: what does this do for the reader's experience?]

**Detection reasoning:** [Why this is an Instrument/Gesture/Component, not the other categories]

**Multi-channel coordination:** [For Gestures: which CSS properties shift together? For Instruments: which visual channels encode metadata?]

**Pipeline implication:** [1-2 sentences: what reader-experience question would generate this? How could the pipeline derive it?]

**Derivation question:** [The "what if..." question that would naturally produce this element]
```

## METACOGNITIVE CHECK

After completing your inventory, answer these questions:
1. Did I read the ENTIRE file (CSS + HTML), or did I stop after finding "enough"?
2. Am I identifying elements at the DOM level, or am I working at the abstract/conceptual level?
3. Could I have missed subtle gestures — places where CSS properties shift together without obvious class name changes?
4. Am I applying the reader-function test honestly? Would removing this element actually change the reader's experience?
5. Did I check for pseudo-elements (::before, ::after, ::first-letter) that might constitute gestures?
6. Did I check responsive breakpoints (@media queries) for elements that appear/disappear at different viewports?
7. Am I distinguishing between "styling" (just making it look nice) and "instruments/gestures" (serving a reader-experience function)?
