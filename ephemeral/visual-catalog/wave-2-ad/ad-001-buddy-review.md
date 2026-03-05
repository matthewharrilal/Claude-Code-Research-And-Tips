# AD-001: Z-Pattern Axis — Buddy Review

**Reviewer:** Buddy Reviewer (independent verification)
**Worker findings file:** `ad-001-findings.md`
**Source file:** `/design-system/axis/AD-001-z-pattern.html` (1737 lines)
**Worker claims:** 8 Instruments, 9 Gestures, 7 Components (24 total)

---

## VERIFICATION METHOD

Read the full HTML file in 4 passes (lines 1-500, 500-1000, 1000-1500, 1500-1737), covering both `<style id="locked-layer">` (lines 199-613) and `<style id="axis-layer">` (lines 620-904), plus all HTML body content (lines 907-1737). Each worker finding verified against actual CSS properties and DOM structure.

---

## PER-ENTRY VERIFICATION

### INSTRUMENTS

#### 1. Meta Line — INSTRUMENT
**Confidence: HIGH**
Verified. CSS at lines 385-407 matches. HTML at lines 915-919 matches. The flex layout, uppercase letter-spacing 0.15em, and version-badge border are all confirmed. Correctly classified as Instrument — pure document-identity metadata. Worker's multi-channel analysis (3 channels) is accurate.

#### 2. Running Header — INSTRUMENT
**Confidence: HIGH**
Verified. CSS at lines 847-857 matches. HTML instances at lines 990, 1137, 1350, 1453, 1605 confirmed (5 total). All properties match: `font-size: var(--type-meta)`, `letter-spacing: 0.15em`, `text-transform: uppercase`, `border-bottom: 1px solid`. Correctly classified — wayfinding device, not content.

#### 3. Z-Hero Diagonal Metadata Panel — INSTRUMENT
**Confidence: HIGH**
Verified. CSS at lines 662-670 matches (`.z-hero__diagonal`). HTML at lines 964-972 confirmed with inline monospace styling. The worker correctly identifies this as metadata (axis type, paired OD, density pattern, findings). The Gutenberg "weak fallow" placement analysis is sound per R4-016. However, note: the CSS class `.z-hero__diagonal` is also part of the Z-Hero Grid component (#18). The worker handles this dual nature correctly by cataloging the metadata panel as an Instrument and the grid container as a Component.

#### 4. Z-Terminal CTA — INSTRUMENT
**Confidence: HIGH**
Verified. CSS at lines 818-835 matches. HTML at lines 1034-1036, 1334-1336, 1577-1579 confirmed (3 instances). `justify-content: flex-end` confirmed at line 820. The red border-bottom at 3px confirmed at line 832. All 4 channels described (flex-end, meta uppercase, primary red, 3px border) match the CSS. Correctly classified as navigational Instrument.

#### 5. Gutenberg Zone Properties Table — INSTRUMENT
**Confidence: HIGH**
Verified. `.z-properties` modifier at lines 792-798 confirmed — applies monospace + primary red to `td:first-child`. HTML at lines 1071-1107 confirmed with 4 rows mapping Gutenberg zones. Worker correctly identifies this as self-describing (the table maps the page's own layout). The "self-aware page" argument for Instrument classification is sound.

#### 6. Responsive Signal Transfer Table — INSTRUMENT
**Confidence: MEDIUM**
Verified factually — HTML at lines 1282-1313 confirmed, standard table styling at lines 526-558. The 3-column structure (Signal / Desktop / Mobile) is accurate. **Challenge:** This table is more borderline than the worker acknowledges. It describes HOW density signals transfer across breakpoints, which is meta-information about the page. But it's also straightforward article content explaining responsive design theory. The Instrument classification hinges on "tells the reader about the page's own behavior." This is defensible but weaker than #5 (which literally maps the page's own zones). The content is more pedagogical than self-documenting. Could also be classified as content within a Component (the z-answer that contains it).

#### 7. Fractal Scale Mapping Table — INSTRUMENT
**Confidence: MEDIUM**
Same reasoning as #6. HTML at lines 1534-1565 confirmed. The table does describe the page's own fractal architecture (Page/Section/Component/Character scales), which is more self-referential than #6. But it's also teaching fractal theory. Defensible as Instrument, but the "self-awareness" argument is stronger here than for #6 because it explicitly maps scales present in the page itself.

#### 8. Implementation Checklist Table — INSTRUMENT
**Confidence: MEDIUM**
HTML at lines 1623-1684 confirmed. 10 rows mapping Requirement/Implementation/Source. This is the strongest "self-audit" table — it literally lists what the page must contain. But the worker's Instrument argument ("enables verification of the page's own principles") applies equally to any specification table. **Challenge:** This table serves as article content (answering the question "what are the required elements") more than as a reading-orientation device. The reader doesn't need this table to navigate or understand their position — they need it to learn implementation requirements. The line between "content that is meta" and "Instrument" is thin here. I'd still accept the classification, but flag it as a boundary case.

**Instrument subtotal: 8 found, 8 verified. 5 HIGH confidence, 3 MEDIUM (tables #6-8 are boundary cases between Instrument and "meta-content within a Component").**

---

### GESTURES

#### 9. TIDAL Width Asymmetry (Q 60% / A 100%) — GESTURE
**Confidence: HIGH**
Verified. `.z-question { max-width: 60% }` at line 693. `.z-answer` has no max-width (defaults to 100%) — confirmed at lines 722-726. The 4-channel coordination (width, background, border, padding) is accurate. All CSS values match. This is the page's defining gesture.

#### 10. Typography Velocity Shift (Serif 600 / Sans 400) — GESTURE
**Confidence: HIGH**
Verified. `.z-question__text` at lines 710-718: `font-family: var(--font-display)`, `font-weight: 600`, `font-size: var(--type-subsection)` (1.375rem). Answer body text inherits from `body` at lines 299-307: `font-family: var(--font-body)`, `font-weight: 400` (implicit), `font-size: var(--type-body)` (1rem). Worker's 3-channel description (family, weight, size) is accurate. Correctly classified as a coordinated register shift.

#### 11. Zone Background Color Alternation — GESTURE
**Confidence: HIGH**
Verified. Three zone tokens confirmed at lines 215-217: `--color-zone-sparse: #FEF9F5`, `--color-zone-dense: #FFFFFF`, `--color-zone-breathing: #FAF5ED`. Usage confirmed: `.z-question` uses `zone-sparse` (line 694), `.z-answer` uses `zone-dense` (line 723), `.z-hero__diagonal` uses `zone-breathing` (line 664). Worker's mobile-fallback analysis is correct: at 768px, when width collapses to 100%, color becomes the primary TIDAL signal (line 881 confirms zone-sparse is preserved on mobile).

#### 12. Border Category System (4px/3px/1px) — GESTURE
**Confidence: HIGH**
Verified all cited instances:
- `.z-question` 4px red: line 696 `border-left: var(--border-left-width) solid var(--color-primary)` where `--border-left-width: 4px` (line 262). Confirmed.
- `.z-answer` 3px: line 725 `border: 3px solid var(--color-border)`. Confirmed.
- `th` 3px: line 542 `border-bottom: 3px solid var(--color-border)`. Confirmed.
- `td` 1px: line 550 `border-bottom: 1px solid var(--color-border-subtle)`. Confirmed.
- `.chapter-divider` 3px: lines 786-787. Confirmed.
- `.running-header` 1px: line 855. Confirmed.
Worker correctly identifies the 2px ban (OD-F-AP-001). The systematic encoding across the entire page qualifies this as a Gesture.

#### 13. Golden Ratio Grid Proportions — GESTURE
**Confidence: HIGH**
Verified. `.z-hero` at lines 635-636: `grid-template-columns: 1.618fr 1fr` and `grid-template-rows: 1.618fr 1fr`. Both confirmed. Worker correctly identifies this as a spatial proportion that biases visual weight. Correctly classified as Gesture — it's a CSS-encoded reading-path bias, not a DOM element.

#### 14. Responsive Z-Collapse at 768px — GESTURE
**Confidence: HIGH**
Verified. `@media (max-width: 768px)` block at lines 861-903. All 5 changes confirmed:
1. `.z-hero` grid collapse: lines 863-871 (2x2 to single column).
2. `.z-hero__terminal` alignment change: lines 873-876.
3. `.z-question` width expansion: lines 879-882 (60% to 100%).
4. `.micro-z` collapse: lines 885-892.
5. Padding reduction: `.header-inner` (lines 895-897) and `.page-container` (lines 900-902).
Worker's 5-channel analysis is accurate. Correctly classified as a coordinated multi-element transformation.

#### 15. Callout Label Typography — GESTURE
**Confidence: MEDIUM**
Verified. `.callout__label` at lines 486-493: font-size `var(--type-meta)` (0.75rem), font-weight 600, letter-spacing 0.1em, text-transform uppercase. All 4 properties confirmed. HTML instances at lines 1044, 1111, 1252, 1432, 1504, 1584, 1688 (7 total — worker's count matches).

**Challenge:** This is a legitimate multi-property typographic shift, but the question is whether it qualifies as a Gesture (changes reading register) versus simply being part of the Callout Component's styling. The calibration doc's Gesture test is: "Does this CSS pattern change the reader's pace, mode, or attention level?" The label does announce a register change, but it's inseparable from the Component it belongs to. Compare with calibration example #15 (Border-Weight Confidence Encoding) which operates across the entire page systematically. The callout label operates only within callout instances. I'd still accept it, but note it's component-internal rather than page-spanning.

#### 16. Essence Callout Serif Voice — GESTURE
**Confidence: HIGH**
Verified. `.callout--essence .callout__body` at lines 518-521: `font-family: var(--font-display)`, `font-style: italic`. The comment at line 520 confirms this is Soul Piece #2. HTML at lines 1045-1050 and 1586-1592 (2 instances). Worker correctly identifies the font-family + font-style shift as a "different speaker" signal. This is analogous to calibration example #20 (Dual Lens Font Shift in OD-006). Correctly classified.

#### 17. Selection Highlight — GESTURE
**Confidence: MEDIUM**
Verified. `::selection` at lines 338-341: `background: var(--color-primary)`, `color: var(--color-background)`. Both properties confirmed.

**Challenge:** The worker identifies this as an "ambient identity gesture." It is a pseudo-element shift, and it does change visual presentation on interaction. But it's arguable whether `::selection` constitutes a "gesture" in the calibration sense. The calibration's Gesture examples all change the reading experience in a structural way (confidence encoding, typography compression, spacing-as-confidence). Selection highlight is more of a branding detail than a reading-register shift. It doesn't change pace, mode, or attention level — it just brands the selection. This is the weakest Gesture in the catalog. Could argue it's simply "styling" (which the worker explicitly filters in metacognitive check #7). I'd accept it with reservations.

**Gesture subtotal: 9 found, 9 verified. 6 HIGH confidence, 3 MEDIUM (#15 component-internal, #16 is strong despite label, #17 borderline styling-vs-gesture).**

---

### COMPONENTS

#### 18. Z-Hero Grid — COMPONENT
**Confidence: HIGH**
Verified. CSS at lines 630-682 (`.z-hero` + 4 quadrant classes). HTML at lines 940-982. Grid-template-areas with 4 named areas confirmed. 4 child elements confirmed (primary, secondary, diagonal, terminal). Correctly classified as a multi-slot container.

#### 19. Z-Cycle (Q&A Pair) — COMPONENT
**Confidence: HIGH**
Verified. CSS at lines 686-736 (`.z-cycle`, `.z-question`, `.z-question__label`, `.z-question__text`, `.z-answer`, `.z-answer__label`). 9 HTML instances confirmed spanning lines 997-1699. Worker correctly identifies this as the page's fundamental repeating container. The 6 sub-element coordination description is accurate.

#### 20. Micro-Z Grid — COMPONENT
**Confidence: HIGH**
Verified. CSS at lines 738-779. HTML at lines 1161-1198 (1 instance). Grid-template-areas with 4 named areas confirmed. Worker's fractal analysis (Z-within-Z) is accurate. Only 1 instance, but it has clear slot structure and could repeat. **Note:** Worker says "Collapses to single-column at 768px" — confirmed at lines 885-892.

#### 21. Callout System (5 Variants) — COMPONENT
**Confidence: HIGH**
Verified. Base CSS at lines 479-521. Five variant modifiers confirmed: note (line 502), tip (line 505), gotcha (line 508), caution (line 511), essence (lines 514-521). Worker counts 7 HTML instances — verified:
1. Essence: lines 1043-1051
2. Tip: lines 1110-1121
3. Caution: lines 1250-1258
4. Note: lines 1431-1441
5. Gotcha: lines 1503-1513
6. Essence: lines 1584-1593
7. Caution: lines 1687-1697
Count matches. 2-zone structure (label + body) confirmed. 4px left border confirmed at line 480. Correctly classified.

#### 22. Chapter Divider — COMPONENT
**Confidence: MEDIUM**
Verified. CSS at lines 783-789. HTML at lines 1130, 1343, 1446, 1598 (4 instances). Worker correctly identifies height: 32px (var(--space-8)), zone-breathing background, and 3px borders top/bottom.

**Challenge:** The worker acknowledges this could be a Gesture (spacing shift) but argues the dedicated class, borders, and background color make it a Component. I partially agree — it's a rendered structural element, not just whitespace. But it has NO slots (empty div), which makes it a weak Component. The calibration defines Components as having "defined slots (header, body, label, etc.)." A chapter divider has zero slots. This is more accurately a structural ELEMENT than a Component. The distinction matters: it doesn't hold content, it separates it. I'd reclassify this as a borderline case, possibly better as a Gesture (a coordinated visual shift at chapter boundaries — height + background + borders all change together to signal "chapter break"). However, the worker's reasoning is transparent and the current classification is defensible.

#### 23. Section Title — COMPONENT
**Confidence: MEDIUM**
Verified. CSS at lines 838-844. HTML at lines 993, 1139, 1352, 1455, 1607 (5 instances). Display font + 3px bottom border confirmed.

**Challenge:** Similar to #22 — this is a styled heading with no inner slots. The calibration's Component test asks: "Is this a reusable container for article content with defined structure?" A section title is not a container — it's a single heading element with consistent styling. It's closer to being a styled DOM element than a multi-slot component. Compare with calibration example #21 (Stratum) which has depth-label, title, epistemic marker, evidence-dna, content blocks — multiple slots. The section-title has one slot (the heading text). I'd still accept it as a minor Component, but note it's at the minimal end of the Component spectrum.

#### 24. Footer — COMPONENT
**Confidence: HIGH**
Verified. All inline styles at lines 1715-1720 confirmed. 3px top border, flex layout with space-between, two spans (identifier + version). Worker correctly identifies the visual bookending with the meta-line (#1). Correctly classified — 2-slot structure with consistent treatment.

**Component subtotal: 7 found, 7 verified. 4 HIGH confidence, 2 MEDIUM (chapter divider and section title are minimal-slot boundary cases), 1 HIGH (footer).**

---

## MISSED ELEMENTS

After independent full-file review, I identified the following elements the worker did not catalog:

### MISSED-1: Header Component
**CSS:** `header` (lines 373-377), `.header-inner` (lines 379-383), `header h1` (lines 409-415), `header .subtitle` (lines 417-424)
**HTML:** Lines 913-927
**Why it matters:** The header is a multi-slot container: meta-line + h1 + subtitle, with full-bleed dark background and 3px structural bottom border. It's structurally parallel to the Footer (#24) but at the opposite end. The worker catalogs the Meta Line (#1) as an Instrument within the header, but never catalogs the header itself as a Component.
**Classification:** COMPONENT — multi-slot container (meta-line, title, subtitle) with consistent visual treatment (dark background, structural bottom border).
**Severity:** Minor omission. The header is a standard structural element, but in this design system it has deliberate soul treatment (dark bg = inverted color scheme, 3px primary red bottom border) that makes it more than boilerplate.

### MISSED-2: Inline Styled List (Turn-Taking Mapping)
**HTML:** Lines 1473-1490
**CSS:** All inline styles: `list-style: none; padding-left: 0`, each `<li>` with `padding: var(--space-3) 0; border-bottom: 1px solid var(--color-border-subtle)`
**Why it matters:** This is a styled list with 4 items (Question/Answer/Z-Diagonal/32px gap mapping to conversational turn-taking concepts). The 1px bottom borders on list items follow the Cat 2 separator convention. The last item deliberately omits the border. This creates a distinct visual pattern different from prose paragraphs.
**Classification:** Borderline — could be a minor Component (styled list with separator borders) or simply inline styling. I would NOT catalog this independently since it uses inline styles rather than a CSS class, making it non-reusable. But worth flagging.
**Severity:** Very minor. The worker was right to skip this as it's inline-styled, not class-based.

### MISSED-3: Closing Epitaph / Final Statement
**HTML:** Lines 1703-1708
**CSS:** All inline styles: centered text, display font, section font-size, italic, secondary color
**DOM:**
```html
<div style="padding: var(--space-12) 0 var(--space-8); text-align: center;">
  <p style="font-family: var(--font-display); font-size: var(--type-section); font-style: italic; color: var(--color-text-secondary); max-width: 100%;">
    The Z-Pattern is not a layout to apply.<br>
    It is a reading path to design with.
  </p>
</div>
```
**Why it matters:** This is an editorial closing statement in display serif italic (same voice as Essence callouts), centered and large, placed after the last Z-cycle but before the footer. It functions as a reading-register shift — from technical Q&A to reflective editorial close. The shift to centered text + display italic + secondary color is a coordinated multi-property change.
**Classification:** Could be a GESTURE (register shift to editorial close) or a minor COMPONENT (closing statement container). The coordinated property changes (font-family shift to display, font-style italic, text-align center, color to secondary) suggest a Gesture. But it's all inline-styled, which makes it harder to classify as a reusable pattern.
**Severity:** Moderate. This is a real reading-experience element that the worker missed. It creates a distinct perceptual "landing" before the footer.

### MISSED-4: Focus Visible Outline
**CSS:** Lines 346-349 — `*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }`
**Why it matters:** This is a pseudo-state shift that changes the visual presentation on keyboard interaction. However, it's an accessibility utility rather than a reading-experience gesture. The worker correctly excluded similar items (skip-link, sr-only, prefers-reduced-motion). **Not a true miss — correctly excluded.**

### MISSED-5: Axis Zone Semantic Tokens (Unused CSS)
**CSS:** Lines 800-815 — `.axis-zone--primary`, `.axis-zone--secondary`, `.axis-zone--focal`, `.axis-zone--transition`
**Why it matters:** These are CSS classes defined but NEVER used in the HTML body. The worker notes this in their metacognitive check #4 ("in the case of axis-zone tokens, they aren't rendered"). **Not a true miss — correctly excluded as unrendered CSS.**

### MISSED-6: Hidden Research Application Record
**HTML:** Lines 1725-1735 — `<section class="rar-section" style="display: none;" aria-hidden="true">`
**Why it matters:** This section is explicitly hidden (`display: none`). It contains a research application record for tooling/provenance, not for reader consumption. **Not a true miss — correctly excluded as invisible.**

---

## MISCATEGORIZATIONS

### Potential Reclassification: #22 Chapter Divider
**Current:** COMPONENT
**Challenge:** Zero-slot element. No inner structure. Could be reclassified as a GESTURE (coordinated visual shift at chapter boundaries: height + background + double borders = "chapter break" signal).
**Verdict:** KEEP as Component. The dedicated `.chapter-divider` class, non-zero rendered height, and visible background color make it a structural element rather than purely a CSS property shift. But this is the weakest Component in the catalog.

### Potential Reclassification: #23 Section Title
**Current:** COMPONENT
**Challenge:** Single-slot element (just heading text). Minimal structure.
**Verdict:** KEEP as Component. The 3px bottom border and display font treatment create a consistent, repeatable visual pattern across 5 instances. It's minimal but meets the "consistent visual treatment" criterion.

### Potential Reclassification: Tables #6, #7, #8 as Components
**Current:** INSTRUMENT
**Challenge:** These tables use standard `<table>` markup with no special CSS class (except #5 which has `.z-properties`). They're content within z-answer blocks. The argument for Instrument is "they describe the page itself." The counter-argument is "they're article content that happens to be meta."
**Verdict:** KEEP as Instrument. The self-referential nature of all three tables (responsive signal mapping, fractal scale mapping, implementation checklist) tips them toward Instrument. They are not generic content — they describe the page's own structure, behavior, or requirements.

### Potential Reclassification: #17 Selection Highlight
**Current:** GESTURE
**Challenge:** This is more of a branding detail than a reading-register shift. It doesn't change pace, mode, or attention. The calibration's Gesture test asks specifically about "reading register" shifts.
**Verdict:** BORDERLINE. This is the weakest Gesture. It meets the technical criterion (multi-property CSS shift on a pseudo-element) but not the spirit criterion (does it change how you read?). A more conservative catalog would exclude it.

---

## TAXONOMY CHALLENGES

### Elements that resist the 3-category taxonomy:

**1. The Closing Epitaph (Missed-3, lines 1703-1708):** This is simultaneously a reading-register shift (Gesture — centered display italic after technical Q&A) AND a structural container (Component — closing statement block). It doesn't fit cleanly into either category. This pattern — an inline-styled one-off element that creates a reading shift — may benefit from a "One-Off Gesture" or "Structural Gesture" sub-category. The calibration's Gesture definition says "it's NOT a single DOM element — it's a CSS-encoded shift," but this IS a DOM element that ALSO creates a shift.

**2. Tables as Instruments vs Content (#6-8):** The three unmarked tables (no special CSS class) are classified as Instruments because they describe the page itself. But the Instrument category in the calibration emphasizes "reader orientation" — knowing WHERE they are, WHAT they're reading, HOW MUCH they've traversed. These tables provide self-documentation, not positional awareness. A possible 4th category: **Annotation** — elements that make the page self-documenting without providing positional orientation. The Gutenberg Zone Properties table (#5) is the strongest Instrument among the tables because it literally maps the page's spatial zones. The other three are more like "self-documentation" than "orientation."

**3. Chapter Divider (#22) as neither Component nor Gesture:** It has a DOM element (Component-like) but no slots (not Component-like). It creates a visual shift (Gesture-like) but through a rendered element (not Gesture-like per calibration). This sits in a gap. A possible refinement: **Structural Marker** — a rendered DOM element whose purpose is boundary-marking rather than content-holding or register-shifting.

---

## QUALITY VERDICT

### ACCEPT WITH CORRECTIONS

**Rationale:**

**Strengths:**
- Comprehensive coverage: 24 elements is thorough for a 1737-line file
- Accurate CSS line references throughout — every line number I spot-checked was correct
- Strong multi-channel coordination analysis on each entry
- Excellent metacognitive check — transparent about exclusion decisions
- Derivation questions are genuinely useful for pipeline implications
- No phantom entries (every cataloged element actually exists in the file)
- Good handling of dual-nature elements (e.g., z-hero__diagonal as both Instrument #3 and part of Component #18)

**Corrections needed:**
1. **Add the Closing Epitaph** (lines 1703-1708) as either a Gesture or a hybrid entry. This is the most significant missed element.
2. **Strengthen the case for tables #6-8** as Instruments or acknowledge their boundary nature more explicitly. The current reasoning is adequate but could be more rigorous.
3. **Consider noting the Header** as a minor Component omission, even if deprioritized.
4. **Flag #17 Selection Highlight** more transparently as a borderline Gesture. The worker's metacognitive check #7 says they distinguish styling from gestures, but `::selection` is arguably more styling than gesture.

**NOT requiring correction:**
- The 3-category taxonomy holds for 20/24 entries with full confidence
- The 4 boundary cases (#6-8 tables, #22 chapter divider) are correctly classified even if they test the taxonomy's edges
- No systematic bias detected (the worker doesn't over-count or pad any category)

**Final count assessment:**
| Category | Worker Count | Verified | Potential additions |
|----------|-------------|----------|-------------------|
| Instruments | 8 | 8 correct (3 borderline) | 0 |
| Gestures | 9 | 9 correct (1 borderline, 1 weak) | +1 (closing epitaph) |
| Components | 7 | 7 correct (2 minimal) | +1 (header) |
| **TOTAL** | **24** | **24 verified** | **+2 possible** |

---

## SUMMARY

Worker produced a thorough, well-reasoned catalog with accurate line references and strong analytical framework. The 3 main areas for improvement are: (1) the missed closing epitaph at lines 1703-1708, (2) the `::selection` Gesture being the weakest entry, and (3) the tables #6-8 sitting at the boundary between Instrument and "meta-content." The taxonomy holds well for this file but shows strain at the edges — self-documenting tables and zero-slot structural markers push against category definitions. Overall quality: solid work that would benefit from the minor corrections noted above.
