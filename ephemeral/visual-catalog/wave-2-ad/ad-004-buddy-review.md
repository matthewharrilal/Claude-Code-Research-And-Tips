# AD-004 Spiral — Buddy Review

**Reviewer:** Buddy reviewer (independent HTML read)
**Worker findings file:** `wave-2-ad/ad-004-findings.md`
**Source HTML:** `design-system/axis/AD-004-spiral.html` (1484 lines)
**Worker claimed total:** 27 elements (8 instruments, 8 gestures [note: summary table lists 9 gesture names], 10 components)

---

## SUMMARY VERDICT

**Overall quality: STRONG.** The worker read the entire file, identified elements at the DOM level with correct line numbers, and applied the 3-category taxonomy rigorously. The detection reasoning is thoughtful and well-calibrated to the calibration examples. A few issues below, but this is high-quality work.

**Count discrepancy:** The summary table (line 730-731) lists 8 gestures but actually names 9 gesture elements in the Gestures column ("Border-Weight Gradient, CRESCENDO Spacing, Background Zone Shift, Typography Scale Degradation, Pull Quote Modulation, Open Question '?' Prefix, Responsive Collapse, Selection Styling, Callout Essence Serif Voice"). The actual documented gesture entries are numbered 9 through 15 (7 entries), plus #26 (Selection Styling) and #27 (Callout Essence Serif Voice) in the "Additional Observations" section = 9 total. The summary says 8 instruments + 8 gestures + 10 components = 26 in the count column but the total says 27. Minor bookkeeping error; the actual documented entries total 27.

---

## PER-ENTRY VERIFICATION

### INSTRUMENTS

#### 1. Spiral Map — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 553-583 match. HTML lines 989-994 match. DOM structure is accurate. Classification as instrument is correct -- this is a pure orientation device, analogous to the Geological Column calibration example (#1). The 4-column grid, per-stratum border-bottom weights (4px/3px/3px/1px), and label text are all confirmed.

**Minor correction:** Worker states border-bottom weights as "4px/3px/3px/1px" in the multi-channel coordination. Checking CSS: established = 4px (line 572), probable = 3px (line 576), speculative = 3px (line 579), open = 1px (line 582). This is correct.

---

#### 2. Confidence Badge — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 678-703 match. HTML lines 1017, 1132, 1255, 1330 all confirmed. Classification correct -- metadata chip announcing confidence level, directly analogous to calibration example #12 (Certainty Badge from OD-006).

**Minor correction:** Worker describes border encoding as "3px solid primary for established, 3px solid border for probable, 1px solid border for speculative, 1px solid border-subtle for open." Verified against CSS: established = `3px solid var(--color-primary)` (line 689), probable = `3px solid var(--color-border)` (line 693), speculative = `1px solid var(--color-border)` (line 697), open = `1px solid var(--color-border-subtle)` (line 701). Correct.

---

#### 3. Stratum Transition Zone — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 645-661 match. HTML lines 1118-1120, 1240-1242, 1316-1318 all confirmed. Classification correct -- pure wayfinding device, analogous to calibration example #6 (Stratum Boundary with Progress) and #11 (Section Divider with Mode Transition).

**Note:** Worker says "48px height" in the detection reasoning, but the CSS sets `height: var(--space-12)` (48px) PLUS `padding: var(--space-6) var(--space-8)` (24px top/bottom), making the actual rendered height roughly 96px (as the FIX-019 comment on line 651 notes). The worker's description of "48px height" is technically the CSS height property value, but the perceptual height is larger. Minor inaccuracy.

---

#### 4. Metadata Panel — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 756-790 match. HTML lines 1081-1103 match. Classification correct -- pure metadata instrument showing stratum properties. Worker correctly notes golden-ratio sidebar placement, though this is actually a property of the stratum content-grid (line 715: `1fr 0.618fr`), not the metadata panel itself.

**Note:** Worker mentions "golden-ratio sidebar placement (0.618fr)" as a property of the metadata panel. More precisely, the metadata panel is placed WITHIN the sidebar column of the golden-ratio grid. The panel itself does not use golden ratio; it inherits its column width from the grid. Pedantic but accurate distinction.

---

#### 5. Meta Line — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 257-267 match (actually starts at line 256 in context, but the `.meta-line` rule begins at 256-267). HTML lines 975-979 match. Classification correct.

---

#### 6. Version Badge — INSTRUMENT
**Confidence: MEDIUM**
Verified. CSS lines 269-278 match. HTML line 978 confirmed. Classification as instrument is defensible but borderline.

**Concern:** This is a sub-element within the meta-line (instrument #5). The calibration document does not have an example of cataloging a sub-element of an already-cataloged instrument as a separate instrument. The version badge is ONE of THREE spans within `.meta-line`. If the version badge gets its own entry, shouldn't "EXPLORATION AD-004" and "AXIS: SPIRAL" also be separate instruments? They also communicate metadata. The worker does not explain why the version badge is elevated to its own entry while the other spans are not.

**Verdict:** Not wrong, but the granularity choice is inconsistent. Either all three meta-line spans should be separate entries, or none of them should be (with the meta-line entry covering all three). As-is, the version badge gets special treatment because it has a distinct CSS class, which is a DOM-level rationale (acceptable per calibration instructions) but creates an asymmetry.

---

#### 7. Research Application Record (RAR) — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 912-962 match (actually 912-962 for `.rar-block` and its children, with `.rar-block__title` at 937-947, `dt` at 949-955, `dd` at 957-962). HTML lines 1390-1427 match. Classification correct -- pure provenance metadata, analogous to no specific calibration example but clearly an instrument by the removal test.

**Note on CSS lines:** Worker says "CSS lines: 912-962." The `.rar-block` rule starts at 913 and the `dd` rule ends at 962. But `.page-footer` rules (921-935) are interspersed. The worker's line range is a rough bounding box, not precise. The actual rar-block CSS is: 912-918 (`.rar-block`), 937-947 (`.rar-block__title`), 949-955 (`dt`), 957-962 (`dd`). Lines 921-935 are the page-footer, not RAR. Minor inaccuracy in line range but not material.

---

#### 8. Page Footer — INSTRUMENT
**Confidence: HIGH**
Verified. CSS lines 921-935 match. HTML lines 1429-1431 match. Classification correct.

---

### GESTURES

#### 9. Border-Weight Confidence Gradient — GESTURE
**Confidence: HIGH**
Verified. CSS lines 608-642 match. HTML lines 1014, 1129, 1252, 1327 confirmed. This is the core gesture of AD-004, directly analogous to calibration example #15 (Border-Weight Confidence Encoding from OD-004).

**Correction on padding values:** Worker reports: "Established: `padding: 24px 24px 32px 32px`" but the actual CSS (line 611) is `padding: var(--space-6) var(--space-6) var(--space-8) var(--space-8)` = `24px 24px 32px 32px`. Correct. Probable (line 620): `var(--space-8) var(--space-6) var(--space-8) var(--space-10)` = `32px 24px 32px 40px`. Correct. Speculative (line 630): `var(--space-8) var(--space-6) var(--space-8) var(--space-12)` = `32px 24px 32px 48px`. Correct. Open (line 640): `var(--space-8) var(--space-6) var(--space-8) var(--space-16)` = `32px 24px 32px 64px`. Correct.

**However:** Worker says border-left widths are "4px -> 3px -> 3px -> 1px." Verified: established = 4px (line 609), probable = 3px (line 618), speculative = 3px (line 628), open = 1px (line 638). Correct. Note that the header summary says "4px/3px/1px" (3 values) but the actual CSS has 4px/3px/3px/1px (4 values, with probable and speculative both at 3px). The worker correctly uses the 4-value version.

---

#### 10. Confidence-Proportional Spacing (CRESCENDO Whitespace) — GESTURE
**Confidence: MEDIUM**
Verified against CSS. However, this is substantially overlapping with gesture #9. The border-weight gradient entry already documents the padding shifts. Gesture #10 re-documents the same CSS properties (same lines 608-642) from a different angle (spacing as semantic channel vs border as semantic channel).

**Concern:** The calibration examples treat multi-property coordination as ONE gesture. Calibration #16 (Typography Compression Gradient) bundles h3 size, body font-size, line-height, AND max-width into one gesture because they all follow ONE rule. By that logic, border-weight + padding + background should be ONE gesture, not three (#9, #10, #11). The worker has split one multi-channel gesture into three entries.

**Verdict:** The split is intellectually defensible (each channel could be discussed independently), but the calibration precedent suggests they should be merged into a single "Confidence Encoding Gradient" gesture with sub-channels noted. As documented, gestures #9, #10, and #11 are three views of the same phenomenon.

---

#### 11. Background Zone Shift — GESTURE
**Confidence: MEDIUM**
Same concern as #10. This documents the background color channel of the same confidence gradient already covered in #9. CSS lines cited (612, 621, 631, 641) are individual lines within the same stratum rules (608-642) already claimed by gestures #9 and #10.

**Verdict:** Should be merged with #9 as a sub-channel.

---

#### 12. Typography Scale Degradation — GESTURE
**Confidence: LOW**
The worker correctly notes that h2 titles maintain consistent size across strata, and that the "gesture" is really about content density (number of headings, paragraphs) rather than CSS properties shifting. This is a weak gesture identification.

**Problem:** The calibration definition says a gesture is "a CSS-encoded shift in the reading experience" and asks "Is it a coordinated multi-property shift?" The worker acknowledges "The shift is not in CSS properties per se but in the coordination between typographic density and the confidence encoding." If it's not a CSS-property shift, it fails the gesture definition. Content density variation is an editorial choice, not a CSS gesture.

**Verdict:** This is not a gesture by the calibration definition. It is an editorial pattern (less content in less-confident strata) that the worker correctly observes but incorrectly classifies. Should be noted as an observation or dropped.

---

#### 13. Pull Quote Confidence Modulation — GESTURE
**Confidence: HIGH**
Verified. The pull quote at HTML line 1334 uses an inline style override `style="border-left-color: var(--accent-amber);"` which shifts the border from primary red (default, line 737) to amber. This is a genuine gesture -- the same component changes its register across strata. Well-caught.

---

#### 14. Open Question Mark Prefix — GESTURE
**Confidence: HIGH**
Verified. CSS lines 846-856 match. HTML lines 1350-1371 match. The `::before` pseudo-element with `content: "?"` in display serif italic at section-size (1.625rem) is a real typographic inflection point. Correctly identified as a gesture, not a component (no container structure) and not an instrument (no metadata).

---

#### 15. Responsive Spiral Collapse — GESTURE
**Confidence: HIGH**
Verified. CSS lines 861-910 match. The media query at `max-width: 769px` triggers six coordinated CSS shifts. Classification as gesture is correct -- it changes reading mode (two-column to single-column) while preserving the confidence encoding.

**Note:** Worker says the indent gradient at narrow viewport is "space-6 -> space-8 -> space-10" (lines 887, 891, 895 confirmed: probable = space-6/24px, speculative = space-8/32px, open = space-10/40px). Correct. The established stratum does not get a responsive padding override, keeping its original padding.

---

#### 26. Selection Styling — GESTURE (micro)
**Confidence: MEDIUM**
Verified. CSS lines 209-212 match. Classification as a "micro-gesture" is reasonable but borderline. This is a brand-identity interaction gesture, not a reading-register shift. The calibration test asks "Does this CSS pattern change the reader's pace, mode, or attention level?" Text selection color does not meaningfully change pace, mode, or attention.

**Verdict:** Acceptable as a micro-gesture if the catalog wants to be exhaustive, but it stretches the definition. Would not be wrong to exclude it.

---

#### 27. Callout Essence Serif Voice — GESTURE
**Confidence: HIGH**
Verified. CSS lines 389-392 match (`.callout--essence .callout__body` shifts from Inter to Instrument Serif italic). HTML line 1108 confirmed. This is a genuine font-family register shift, directly analogous to calibration example #20 (Dual Lens Font Shift from OD-006). Strong identification.

---

### COMPONENTS

#### 16. Stratum — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 601-642 (stratum variants) + 665-727 (header, content-grid, sidebar). HTML lines confirmed for all 4 instances. Classification correct -- reusable multi-slot container, directly analogous to calibration example #21.

---

#### 17. Spiral Container — COMPONENT
**Confidence: LOW**
The worker maps this to `.spiral-container` but then acknowledges the class doesn't exist in HTML, using `.page-container` instead. CSS line 590-594 defines `.spiral-container` but the HTML at line 1003 uses `<div class="page-container">`.

**Problem:** The `.spiral-container` CSS class (lines 590-594) is defined but NEVER used in the HTML. The HTML uses `.page-container` (CSS at lines 300-304). These are two different classes. The worker conflates them. The `.page-container` is the actual layout container (max-width: 1100px, auto margins), while `.spiral-container` (flex column, gap 0) is an orphaned CSS rule that was presumably intended to wrap strata but was never applied in the DOM.

**Verdict:** The strata are actually direct children of `.page-container`, not `.spiral-container`. The worker should have caught that `.spiral-container` is unused. The `.page-container` is generic site chrome, not a spiral-specific component. The claimed DOM structure (strata interleaved with transitions inside a container) is correct in SHAPE but maps to `.page-container`, not `.spiral-container`. This entry should reference `.page-container` and note the orphaned `.spiral-container` class, OR should be removed if `.page-container` is considered too generic to catalog as a component.

---

#### 18. Comparison Grid — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 798-828 match. HTML lines 1275-1300 match. Classification correct. The two-panel structure with confidence-encoded left borders (primary red vs amber) is confirmed.

---

#### 19. Pull Quote — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 731-753 match. HTML lines 1136-1140 and 1334-1338 confirmed. Classification correct -- reusable container with two slots (quote body + attribution).

**Dual classification note:** The worker correctly separates pull quote as component (#19) from pull quote confidence modulation as gesture (#13). This is clean categorization -- the structure is the component, the cross-stratum register shift is the gesture applied on top.

---

#### 20. Callout — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 350-392 match. HTML instances at 1106, 1197, 1303, 1373 all confirmed. 4 instances using 4 different variants (essence, caution, note, tip). Classification correct.

---

#### 21. Open Questions List — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 831-856 match. HTML lines 1350-1371 match. Classification correct. The worker correctly separates the list structure (component) from the `::before` pseudo-element (gesture #14).

---

#### 22. Header — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 244-295 match. HTML lines 973-996 match. Classification correct -- multi-slot container (meta-line, h1, subtitle, spiral-map).

---

#### 23. Table — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 397-429 match. HTML lines 1159-1194 match. Classification correct.

---

#### 24. Code Block — COMPONENT
**Confidence: HIGH**
Verified. CSS lines 309-335 match. HTML lines confirmed at 5 instances. Classification correct.

---

#### 25. Inline Code — COMPONENT
**Confidence: MEDIUM**
Verified. CSS lines 338-344 match. Classification is defensible but this is a standard typographic convention (`<code>` with background), not really a "component" in the sense of having defined slots and reusable structure. It is more accurately described as inline styling -- the `<code>` element already has semantic meaning in HTML; the CSS just styles it.

**Verdict:** Not wrong to include, but it lowers the bar for what counts as a component. By this standard, every styled HTML element (links, strong, em) would be a component.

---

## MISSED ELEMENTS

### 1. Subtitle — Potential Instrument or Component sub-element
HTML line 981-986: `<p class="subtitle">`. CSS lines 288-295. The subtitle provides orientation text ("What if documentation content followed an angular spiral path...") that frames the exploration's core question. The worker catalogs the header component (#22) but does not separately identify the subtitle, which has its own CSS class and distinct reader function (framing the exploration question before content begins). This is analogous to the meta-line (#5) being called out within the header -- the subtitle plays a comparable role.

**Impact:** Minor. The subtitle is implicitly covered by the header component entry.

### 2. Stratum Code Examples — `.stratum pre` Contextual Styling
CSS line 793-795: `.stratum pre { margin-top: var(--space-4); }`. This is a contextual override that tightens code block spacing within strata. Extremely minor and correctly excluded as styling rather than a gesture.

### 3. Focus-Visible Styling
CSS lines 217-220. Correctly excluded by the worker as accessibility infrastructure, not a reader-experience device.

### 4. Skip Link
CSS lines 225-239, HTML line 968. Correctly excluded as accessibility infrastructure.

---

## MISCATEGORIZATIONS

### 1. Gestures #10 and #11 should merge into Gesture #9
As discussed above, the border-weight gradient, spacing gradient, and background zone shift are three channels of ONE multi-channel gesture (the Confidence Encoding Gradient). The calibration precedent (example #16: Typography Compression Gradient bundles 4 properties into one gesture) supports merging.

### 2. Gesture #12 (Typography Scale Degradation) is not a CSS gesture
The worker acknowledges the shift "is not in CSS properties per se." If it's not a CSS-encoded shift, it fails the gesture definition per calibration. Should be reclassified as an editorial observation or dropped.

### 3. Spiral Container (#17) references an unused CSS class
The `.spiral-container` class is defined in CSS but never applied in HTML. The actual container is `.page-container`.

---

## ELEMENTS RESISTING THE 3-CATEGORY TAXONOMY

### 1. Confidence Badge -- Instrument-Component hybrid
The confidence badge (#2) has a reusable structure with defined slots (border + text label) and 4 variants, which makes it component-like. But its function is pure metadata labeling (instrument). The worker correctly classifies it as instrument based on function, but it shares structural properties with components. This tension exists across the calibration examples too (OD-004's Evidence DNA chips are instruments despite having repeating structure).

### 2. Open Questions List -- Component with embedded Gesture
The open questions list (#21) is classified as a component, but the `::before` pseudo-element that defines its most distinctive feature (the serif italic "?" prefix) is classified as a separate gesture (#14). This means the component's identity is split across two entries. The worker handles this correctly by cross-referencing, but it highlights that components-with-embedded-gestures require two entries to fully describe.

### 3. Pull Quote -- Component + Gesture layering
Similarly, the pull quote structure is component #19, while the cross-stratum color modulation is gesture #13. Well-handled by the worker.

### 4. Inline Code -- Below component threshold?
As noted in the per-entry review, inline code (`<code>` with minimal styling) arguably falls below the threshold for "component" as defined by the calibration examples, which focus on multi-slot containers.

---

## QUALITY METRICS

| Metric | Score |
|--------|-------|
| **Line-number accuracy** | 95% — Minor issues with RAR block CSS range, stratum transition height description |
| **DOM-level specificity** | 95% — All entries map to CSS classes and HTML elements; one orphaned class issue (#17) |
| **Classification accuracy** | 85% — Typography Scale Degradation (#12) is not a CSS gesture; gesture split (#9/#10/#11) is over-granular |
| **Completeness** | 95% — Subtitle sub-element is the only notable omission |
| **Calibration alignment** | 90% — Strong use of calibration analogies; gesture split departs from calibration precedent |
| **Metacognitive check** | 95% — Thorough and honest self-assessment |

**Overall: ACCEPT with minor corrections.**

The three actionable corrections:
1. Merge gestures #10 and #11 into gesture #9 as sub-channels
2. Reclassify gesture #12 (Typography Scale Degradation) as an editorial observation, not a CSS gesture
3. Fix component #17 (Spiral Container) to reference `.page-container` instead of the orphaned `.spiral-container`
