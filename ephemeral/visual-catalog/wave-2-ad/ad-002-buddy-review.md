# AD-002: F-Pattern Layout — Buddy Review

**Reviewer:** Buddy Agent (adversarial + constructive)
**Worker findings:** `ad-002-findings.md` (25 entries: 9 Instruments, 9 Gestures, 7 Components)
**Source file:** `design-system/axis/AD-002-f-pattern.html` (1682 lines)
**Review method:** Full independent read of all 1682 lines (CSS lines 129-923, HTML lines 926-1682), cross-referenced every finding against actual source.

---

## VERDICT: ACCEPT WITH CORRECTIONS

The worker produced a thorough, high-quality inventory. All 25 entries reference real CSS/HTML elements with accurate line numbers. The metacognitive check is genuinely reflective. However, there are corrections, challenged classifications, and missed elements that need documenting.

---

## PER-ENTRY CONFIDENCE RATINGS

### INSTRUMENTS (9 entries)

#### 1. Act Indicator — INSTRUMENT
**Confidence:** HIGH
**Verification:** Confirmed. `.act-indicator` at CSS lines 720-730, HTML at lines 966, 1055, 1237, 1467, 1571. Monospace, meta-size, uppercase, 1px bottom border. Pure wayfinding. Classification correct.
**Correction:** Worker says "six visual signals" in multi-channel coordination but lists: font-family, font-size, letter-spacing, text-transform, color, border-bottom. The font-family is `--font-mono` (JetBrains Mono), not "monospace" generically. Minor — the count and description are accurate.

#### 2. Tension Meter — INSTRUMENT
**Confidence:** HIGH
**Verification:** Confirmed. `.tension-meter` and related classes at CSS lines 735-760. Five segments per act, filled segments use `--color-primary`. HTML verified at all 5 act locations. Classification as Instrument is correct — it is a gauge, not content.
**Correction:** None. This is the strongest entry in the document.

#### 3. Meta-Line (Header) — INSTRUMENT
**Confidence:** HIGH
**Verification:** Confirmed. `.meta-line` at CSS lines 315-326, HTML lines 935-939. Three spans in flex row. Classification correct.
**Correction:** Worker says font-family is "body/Inter" but the CSS actually says `font-family: var(--font-body)` which resolves to Inter. Technically correct, but the slash notation is worker shorthand, not CSS.

#### 4. Version Badge — INSTRUMENT
**Confidence:** MEDIUM
**Challenge:** The worker classifies this as a separate Instrument from the Meta-Line. This is debatable. The version badge is a SUB-ELEMENT of the meta-line (it is a `<span>` inside `.meta-line`). Cataloging it as a separate Instrument inflates the count. The calibration examples don't split sub-elements this granularly — e.g., OD-004's Geological Survey is one Instrument, not separate Instruments for each sub-element.
**Recommendation:** MERGE into Meta-Line entry as a noted sub-component. If kept separate, note it as a "sub-instrument" to avoid count inflation.

#### 5. Header (Dark Full-Bleed) — INSTRUMENT
**Confidence:** MEDIUM
**Challenge:** The worker classifies the header as an Instrument. The header CONTAINS the meta-line (an instrument), the h1 title (content), and the subtitle (content). The header as a WHOLE is more of a Component (a structured container with defined slots: meta-line, title, subtitle) than a pure Instrument. Its reader function is split: orientation (meta-line, dark bg, red border) + content (title, subtitle question).
**Counter-argument:** The worker's reasoning is that "its primary function is orientation." This is arguable — the dark bg + red border do create an "entry gate." But by the calibration's own test: "Remove this element. Does the reader lose awareness of position?" Removing the header loses the TITLE, which is content, not just orientation.
**Recommendation:** Reclassify as COMPONENT. The header is a multi-slot container (meta-line slot, title slot, subtitle slot) with an Instrument function (the dark bg + red border constitute a gesture-like entry signal). Note the Instrument quality but classify as Component.

#### 6. Breathing Zone — INSTRUMENT
**Confidence:** HIGH
**Verification:** Confirmed. `.breathing-zone` at CSS lines 651-662. HTML at lines 1029-1040, 1212-1222, 1444-1454, 1548-1559. Background color shift + 3px borders top AND bottom.
**Challenge:** The worker acknowledges the Instrument/Component boundary blur ("breathing zones serve dual duty") but classifies as Instrument. I agree with this classification — the breathing zone's PRIMARY function is transition-marking. The pullquote inside is a separate cataloged element. If the pullquote were removed, the breathing zone would still serve its purpose (visual airlock between acts). If the breathing zone's visual treatment were removed but the pullquote remained, the transition would be invisible.
**Correction:** Worker says 4 instances at HTML lines 1029-1040, 1212-1222, 1444-1454, 1548-1559. Confirmed: exactly 4 breathing zones (between Acts I-II, II-III, III-IV, IV-V). Correct.

#### 7. Essence Pullquote — INSTRUMENT
**Confidence:** MEDIUM
**Challenge:** The worker classifies this as an Instrument, reasoning that "its function is metacognitive — it summarizes and reflects." However, the pullquote contains PROSE — it is a styled content container. By the Component test: "Is this a reusable container for article content with defined structure?" YES — it has a `<p>` slot and a `<cite>` slot, consistent visual treatment (serif italic, purple left border), and appears 4 times.
**Counter-argument:** The worker's point that "the typography shift from Inter to Instrument Serif IS the register change" is a Gesture argument, not an Instrument argument. The pullquote is a CONTAINER that delivers distilled content and ALSO triggers a register shift.
**Recommendation:** This sits at the boundary. The worker's classification is defensible but I would lean COMPONENT with a Gesture quality (the font shift). The content it delivers (the quotes themselves) is meaningful — removing the pullquote doesn't just lose metadata, it loses a distilled insight. That's content, not wayfinding.

#### 8. Decision Matrix Score Encoding — INSTRUMENT
**Confidence:** HIGH
**Verification:** Confirmed. `.decision-matrix__score` variants at CSS lines 809-825. HTML lines 1386-1418. Three variants: `--high` (green), `--mid` (amber), `--low` (coral). Classification as Instrument is correct — the color IS the metadata overlay on top of a content table.
**Correction:** None. Clean entry.

#### 9. Page Footer — INSTRUMENT
**Confidence:** HIGH
**Verification:** Confirmed. `.page-footer` at CSS lines 846-872. HTML lines 1674-1680. Dark bg (#1A1A1A), 3px red top border, mirrors header. Two `.page-footer__id` spans, one `.page-footer__rule` (48px x 3px red).
**Correction:** None. Strong entry.

---

### GESTURES (9 entries)

#### 10. CRESCENDO Spacing Compression — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. Five act zones with padding values:
- Exposition: `padding-top: var(--space-16)` (64px) / `padding-bottom: var(--space-16)` (64px) — line 597-598
- Rising: `padding-top: var(--space-12)` (48px) / `padding-bottom: var(--space-12)` (48px) — line 612-613
- Climax: `padding-top: var(--space-8)` (32px) / `padding-bottom: var(--space-8)` (32px) — line 623-624
- Falling: `padding-top: var(--space-12)` (48px) / `padding-bottom: var(--space-12)` (48px) — line 637-638
- Denouement: `padding-top: var(--space-16)` (64px) / `padding-bottom: var(--space-20)` (80px) — line 646-647

Pattern confirmed: 64 -> 48 -> 32 -> 48 -> 64/80. Correct.
**Correction:** Worker says "Act V: 64px top / 80px bottom" — confirmed at lines 646-647: `padding-top: var(--space-16)` and `padding-bottom: var(--space-20)`. The asymmetry (80px bottom vs 64px top) is a subtle additional detail the worker correctly caught.

#### 11. Line-Height Compression — GESTURE
**Confidence:** LOW
**Challenge:** The worker claims line-height shifts across acts. Let me verify:
- Base `body` line-height: 1.7 (line 232)
- `.act-zone--exposition p`: line-height 1.8 (line 603)
- `.act-zone--climax p`: line-height 1.5 (line 629)
- Rising/Falling/Denouement: no explicit p line-height override, so they inherit body's 1.7.

So the actual progression is: 1.8 (exposition) -> 1.7 (rising, inherited) -> 1.5 (climax) -> 1.7 (falling, inherited) -> 1.7 (denouement, inherited). This IS a gesture — three distinct line-height values across the CRESCENDO arc. But the worker's description is imprecise: they say "implied via tighter max-width at 70ch vs 65ch" for the climax, when in fact the climax HAS an explicit line-height: 1.5 at line 629. The worker found the max-width change (exposition 65ch at line 602, climax 70ch at line 628) but confused it with the line-height.
**Correction:** The climax line-height is EXPLICIT at 1.5 (line 629), not "implied." The max-width actually WIDENS from 65ch (exposition) to 70ch (climax), which is the OPPOSITE of what you'd expect in a compression gesture. The real gesture is: line-height 1.8 -> 1.7 -> 1.5 -> 1.7 -> 1.7. The max-width change is a separate detail and works counter-directionally (wider at climax, narrower at exposition).

#### 12. Left-Spine Landmark Hierarchy — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. CSS lines 667-694.
- H2 (line 667-674): `font-display` (Instrument Serif), `type-section` size, 4px red left border, padding-left
- H3 (line 676-682): `font-display` (Instrument Serif), italic, `type-subsection` size
- H4 (line 686-694): `font-body` (Inter), body size, weight 600, uppercase, letter-spacing 0.05em

Worker accurately describes the multi-signal differentiation. Classification as Gesture is correct — this is a coordinated shift across heading levels.
**Correction:** None.

#### 13. Code Density CRESCENDO — GESTURE
**Confidence:** MEDIUM
**Challenge:** The worker classifies this as a Gesture but acknowledges "This is not a single CSS property — it's a structural pattern across the entire document." The calibration says Gestures are "CSS-encoded shifts." This is an HTML structural pattern (presence/absence of `<pre>` elements), not a CSS property shift. There's no CSS rule that controls code block count per act.
**Verification of counts:**
- Act I (lines 963-1025): 0 `<pre>` blocks. Correct.
- Act II (lines 1052-1207): 0 `<pre>` blocks. Worker says "0 pre blocks (inline code only)." Confirmed — only `<code>` inline elements.
- Act III (lines 1235-1440): 3 `<pre>` blocks at lines 1269, 1307, 1354. Confirmed.
- Act IV (lines 1465-1545): 1 `<pre>` block at line 1500. Confirmed.
- Act V (lines 1569-1669): 1 `<pre>` block at line 1636. Confirmed.

Pattern: 0 -> 0 -> 3 -> 1 -> 1. Worker wrote "0 -> inline only -> 3 full blocks -> 1 block -> 1 block" which is accurate.
**Recommendation:** This is a legitimate pattern but it strains the Gesture definition. It's closer to a STRUCTURAL PATTERN than a CSS-encoded register shift. Flag as a taxonomy boundary case — might warrant a 4th category ("Structural Rhythm" or "Compositional Pattern") in future taxonomy evolution.

#### 14. Background Zone Color Shift — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. CSS lines 564-569 define the zone custom properties. Act zones use:
- Exposition/Falling/Denouement: `--axis-zone-secondary` = `--color-zone-sparse` = #FEF9F5
- Rising/Climax: `--axis-zone-primary` = `--color-zone-dense` = #FFFFFF
- Breathing zones: `--axis-zone-transition` = `--color-zone-breathing` = #FAF5ED

Three distinct backgrounds. Classification correct.
**Correction:** None.

#### 15. Editorial Serif/Sans Register Shift — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. Three font families mapped to three reading modes:
- `--font-display` (Instrument Serif): headings, pullquotes — structural scanning
- `--font-body` (Inter): body paragraphs — comprehension
- `--font-mono` (JetBrains Mono): metadata, code, table headers — technical processing

Classification correct. This is a system-level gesture.
**Correction:** None.

#### 16. Structural Border Hierarchy — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. Three categories:
- Cat 1 (3px): header bottom (306), pre border (371), breathing zone top/bottom (655-656), h2 left border (670 — actually 4px via `--border-left-width`), decision matrix (795), footer top (848)
- Cat 2 (1px subtle): td bottom (480), act-indicator bottom (729)
- Cat 3 (1px normal): version-badge (335), tension-meter segment (745), inline code (402)

**Correction:** The worker lists "h2 left accent" as Cat 1 (3px). But the actual CSS at line 670 says `border-left: var(--border-left-width) solid var(--color-primary)` and `--border-left-width` is defined at line 192 as `4px`. So the h2 left border is 4px, not 3px. This creates a 4-category system, not 3-category: 4px (h2 left + callouts + essence-pullquote), 3px (header, pre, breathing zone, decision matrix, footer, term-def), 1px-subtle (td, act-indicator), 1px-normal (version-badge, tension-meter, inline code). The worker conflated 4px and 3px borders.

#### 17. Callout Accent Color System — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. CSS lines 432-451. Five variants:
- note: blue (432-433)
- tip: green (435-436)
- gotcha: coral (438-439)
- caution: amber (441-442)
- essence: purple (444-451) with serif italic body (448-451)

HTML instances at lines 1012, 1130, 1332, 1426, 1516, 1656. Worker says 6 instances in 5 variants — let me count: note (1012), tip (1130), caution (1332? no — line 1332 is callout--caution), gotcha (1426), tip (1516), essence (1656). Wait, let me recheck.

Actual instances from HTML:
- Line 1012: `callout--note` — "Context" — BLUE
- Line 1130: `callout--tip` — "Implementation Tip" — GREEN
- Line 1332: `callout--caution` — "Caution" — AMBER
- Line 1426: `callout--gotcha` — "Gotcha" — CORAL
- Line 1516: `callout--tip` — "Responsive Tip" — GREEN
- Line 1656: `callout--essence` — "Essence" — PURPLE

So: 1 note, 2 tip, 1 caution, 1 gotcha, 1 essence = 6 instances in 5 variants. Worker said "Six instances across the page in five variants: note (blue), tip (green x2), gotcha (coral), caution (amber), essence (purple)." Verified correct.
**Correction:** None.

#### 18. Responsive Collapse — GESTURE
**Confidence:** HIGH
**Verification:** Confirmed. `@media (max-width: 768px)` at CSS lines 876-922. Multiple properties shift: grid columns, act-zone padding, header h1 size, header-inner padding, breathing-zone padding, decision-matrix sizing, table sizing, pullquote sizing, footer direction.
**Correction:** None.

---

### COMPONENTS (7 entries)

#### 19. Act Zone — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `.act-zone` base at CSS lines 583-588. Five variants at lines 595-648. HTML instances at lines 963, 1052, 1235, 1465, 1569. Multi-slot structure: act-indicator -> meter-label -> meter -> h2 -> content-blocks.
**Correction:** None.

#### 20. Content Block — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `.content-block` at CSS lines 698-704. Worker lists 16 instances — I verified several: 979, 1001, 1068, 1111, 1146, 1250, etc. Basic wrapper with `margin-bottom: var(--space-between)` and last-child removal.
**Correction:** None.

#### 21. Two-Column Layout — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `.two-col` at CSS lines 709-714. HTML at lines 1078-1109. Grid 1fr 1fr with 32px gap. One instance.
**Correction:** None.

#### 22. Callout — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `.callout` base at CSS lines 409-451. Two slots: `.callout__label` + `.callout__body`. Six instances verified.
**Correction:** None. Note the worker correctly catalogs the Callout as BOTH a Component (#22) and a Gesture (#17 — the accent color system). This is good dual-listing: the container structure is a Component, the color encoding across variants is a Gesture.

#### 23. Decision Matrix — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `.decision-matrix` at CSS lines 794-825. HTML at lines 1374-1422. Dark header, 3px border, red bottom border on header, score spans.
**Correction:** None.

#### 24. Code Block (Dark Theme) — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `pre` at CSS lines 368-394. Dark bg (#1A1A1A), 3px border, 7 syntax token classes. Five instances at lines 1269, 1307, 1354, 1500, 1636.
**Correction:** None.

#### 25. Term Definition (Inline) — COMPONENT
**Confidence:** HIGH
**Verification:** Confirmed. `.term-def` at CSS lines 828-831. HTML at lines 1105, 1121. Bold (600) + 3px bottom border.
**Correction:** Worker says border is "3px bottom border" — verified at line 830: `border-bottom: 3px solid var(--color-border)`. Correct. However, calling this a "Component" is generous for a styled `<span>`. It has no slots, no multi-element structure. It's an inline text treatment — closer to a micro-gesture (a visual mark-up that signals "this is a defined term"). But the calibration doesn't have a clear category for inline text treatments, and the worker's classification is reasonable by the "reusable container" test — it IS reusable and it HAS a visual signature.

---

## MISSED ELEMENTS

### A. Page Container — missed
**CSS class:** `.page-container`
**CSS lines:** 359-363
**HTML lines:** Not used in HTML body (no `.page-container` class in the HTML)
**Note:** This CSS class is DEFINED but NEVER USED in the HTML. The act zones use their own max-width + margin. This is a dead CSS rule. Not a finding per se, but worth noting as an artifact.

### B. F-Pattern Layout Container — missed (minor)
**CSS class:** `.f-pattern-layout`
**CSS lines:** 574-578
**HTML line:** 951
**DOM:** `<main id="main-content" class="f-pattern-layout">`
**Reader function:** The outermost content container — flex column with gap: 0. This provides the vertical stacking frame for all act zones and breathing zones.
**Classification:** COMPONENT (structural container). Minor — it's infrastructure-level. The worker was right to not catalog infrastructure-level containers, but for completeness it could be listed.

### C. Inline `<code>` Styling — missed
**CSS lines:** 397-403
**Reader function:** `code:not(pre code)` gets monospace font, 0.9em size, `--color-border-subtle` background, 2px/6px padding, 1px border. Used extensively throughout the text (e.g., `<code>font-family</code>` in Act II content).
**Classification:** Borderline — this is base styling, but it does serve a reader function (visually signaling "this is a literal value/property name"). The worker explicitly excluded it in the metacognitive check as "basic formatting." This is a defensible exclusion.

### D. Table System (Generic) — missed
**CSS lines:** 456-488
**Reader function:** Two tables exist in the HTML: the type-scale table in Act II (lines 1153-1195) and the F-Pattern checklist table in Act V (lines 1595-1630). These use the generic table styling, NOT the decision-matrix styling. The generic table has: no outer border, 3px bottom border on th (Cat 1), 1px-subtle bottom border on td (Cat 2), no vertical borders, monospace uppercase th.
**Classification:** COMPONENT — a reusable structured container for tabular data with defined visual treatment (no vertical borders, open-grid style). The worker captured the Decision Matrix as a specialized table component (#23) but missed the GENERIC table as a separate component. There are 2 generic tables + 1 decision-matrix table = 2 distinct table components in this file.

### E. Overflow Wrapper — missed (minor)
**HTML line:** 1373
**DOM:** `<div style="overflow-x: auto;">` wrapping the decision matrix.
**Note:** Inline style, not a CSS class. Infrastructure-level. Not worth cataloging.

### F. `<ul>` List Styling — missed
**CSS lines:** 835-843
**Reader function:** Lists get padding-left 24px, items get margin-bottom 8px and max-width 70ch. Used once in Act IV (lines 1537-1542).
**Classification:** Borderline. The worker excluded list styling as "basic formatting" in the metacognitive check. Defensible — it's part of the base content styling layer, not a distinct component or gesture.

---

## MISCATEGORIZATIONS

### 1. Header should be COMPONENT, not INSTRUMENT
**Rationale:** See entry #5 above. The header contains both metadata (meta-line) and content (title, subtitle). Its multi-slot structure (meta-line + h1 + subtitle) fits the Component definition. The dark-bg entry gate is a Gesture quality within a Component, not the whole element being an Instrument.

### 2. Essence Pullquote boundary case
**Rationale:** See entry #7 above. Leans Component (content container with slots) with a Gesture quality (the serif register shift).

### 3. Version Badge should merge with Meta-Line
**Rationale:** See entry #4 above. Sub-element granularity exceeds calibration norms.

### 4. Code Density CRESCENDO strains Gesture definition
**Rationale:** See entry #13 above. Structural HTML pattern, not CSS-encoded shift. Flag for taxonomy discussion.

---

## TAXONOMY BOUNDARY CASES

### Elements that resist the 3-category model:

1. **Code Density CRESCENDO (#13):** Neither a CSS-encoded Gesture nor a DOM-level Instrument/Component. It's a STRUCTURAL PATTERN — the distribution of elements across the document. The 3-category model assumes classification at the CSS/DOM level; this pattern exists at the DOCUMENT ARCHITECTURE level.

2. **Breathing Zone (#6):** Genuine dual-function: Instrument (transition wayfinding) + Component (contains the pullquote). The worker handled this well by classifying as Instrument with a noted caveat.

3. **Generic Table System (missed):** The table styling (CSS lines 456-488) is a Component in the locked layer that ALSO participates in the Structural Border Hierarchy gesture (#16). The th 3px border and td 1px border are part of the gesture system, but the table itself is a content container.

4. **Term Definition (#25):** Inline text treatment — too small to be a Component (no slots, no multi-element structure), too static to be a Gesture (no shift), not wayfinding enough to be an Instrument. A micro-category might be needed: "Micro-mark" or "Inline Signal."

### Potential 4th category: "Compositional Pattern"
For document-level patterns that emerge from the DISTRIBUTION of elements (code density, content type distribution, callout placement rhythm) rather than from individual CSS rules or DOM elements. These are real reader-experience phenomena but they don't fit cleanly into Instrument (not a single DOM element), Gesture (not a CSS property shift), or Component (not a reusable container).

---

## CORRECTIONS SUMMARY

| # | Entry | Issue | Severity |
|---|-------|-------|----------|
| 1 | #4 Version Badge | Should merge with Meta-Line to avoid inflated count | MINOR |
| 2 | #5 Header | Reclassify as COMPONENT (multi-slot container, not pure Instrument) | MODERATE |
| 3 | #7 Essence Pullquote | Boundary case — Instrument classification is defensible but Component is more precise | MINOR |
| 4 | #11 Line-Height Compression | Climax line-height is EXPLICIT 1.5 (not "implied"), max-width widens not narrows | MODERATE |
| 5 | #13 Code Density CRESCENDO | Structural HTML pattern, not CSS-encoded — strains Gesture definition | MINOR (taxonomy) |
| 6 | #16 Structural Border Hierarchy | H2 left border is 4px (via --border-left-width), not 3px — 4-tier hierarchy, not 3-tier | MODERATE |
| 7 | Missing | Generic Table System not cataloged as Component | MINOR |

---

## METACOGNITIVE ASSESSMENT

**Worker strengths:**
- Exhaustive CSS line-number verification — every entry checks out
- Strong reader-function reasoning throughout
- Honest metacognitive check that explicitly addresses what was excluded and why
- Excellent identification of the CRESCENDO as the dominant multi-channel gesture
- Correct dual-listing of Callout as both Component and Gesture

**Worker weaknesses:**
- Line-Height Compression gesture (#11) has factual errors in description
- Border hierarchy miscounts (4px conflated with 3px)
- Slightly inflated Instrument count (Version Badge as separate + Header as Instrument)
- Missed the generic Table System as a Component

**Overall:** Strong work. The inventory captures the essential reader-experience architecture of AD-002. The corrections above are refinements, not fundamental errors. The total count would shift from 25 to approximately 24-25 depending on merge/reclassification decisions, with the addition of the generic Table System component.

---

## REVISED COUNT (if corrections applied)

| Category | Original | Revised | Delta |
|----------|----------|---------|-------|
| Instruments | 9 | 7 | -2 (merge Version Badge, reclassify Header) |
| Gestures | 9 | 9 | 0 (Code Density flagged but not reclassified) |
| Components | 7 | 9 | +2 (add Header, add Generic Table) |
| **TOTAL** | **25** | **25** | **0** |
