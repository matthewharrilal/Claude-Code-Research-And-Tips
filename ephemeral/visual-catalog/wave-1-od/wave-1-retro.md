## Wave 1 OD Retro -- Synthesis Report

---

### 1. Corrected Element Counts

After integrating all buddy feedback (removals, additions, reclassifications), here are the corrected counts for each OD file.

| File | Raw Worker | + Buddy Adds | - Buddy Removes | = Corrected | I | G | C |
|------|-----------|-------------|----------------|-------------|---|---|---|
| OD-001 | 24-25 (8I/7+1G/9C) | +1 (::selection gesture) | -1 (Research Badges phantom) | **24** | 7 | 8 | 9 |
| OD-002 | 18 (6I/6G/6C) | +1 (Callout Essence Font Shift gesture) | -1 (Act Divider unused CSS) | **18** | 6 | 6 | 6 |
| OD-003 | 25 (11I/7G/7C) | +1 (.task-island--featured outline gesture) | 0 | **26** | 11 | 8 | 7 |
| OD-004 | 26 (11I/8G/7C) | +1 (Exploration Header component) | 0 | **27** | 11 | 8 | 8 |
| OD-005 | 26 (7I/6G/13C) | 0 | -3 (Meta Chips merge into Header; Return Link to Instrument; Spoke Divider merge into Gesture) | **23** | 7 | 6 | 10 |
| OD-006 | 46 (15I/15G/16C) | 0 | -5 (TOC Marker merge into Scroll Witness; Focus Visible, Print, Reduced Motion removed; Solid Offset to Modifier) | **41** | 14 | 12 | 15 |
| **TOTAL** | **165-166** | **+4** | **-10** | **159** | **56** | **48** | **55** |

**Notes on corrections:**

- **OD-001:** Research Application Badges (#6) removed -- CSS defined but zero DOM instantiation = phantom. `::selection` brand encoding added as micro-gesture per buddy. Solid Offset gesture description corrected to exclude essence-pullquote (which uses double-border, not solid offset).
- **OD-002:** Act Divider Breathing Zone (#10) removed -- unused CSS is not a gesture. Callout Essence Font Shift added (font-family + font-style + font-size coordinated shift). Net count unchanged but composition changes.
- **OD-003:** `.task-island--featured` outline gesture added (4px outline + 4px offset on one island = emphasis signal). Essence Reflection Block (#8) flagged as boundary case (Instrument vs Gesture) but retained as Instrument per worker's decompression-beat argument.
- **OD-004:** Exploration Header added as Component (multi-slot container that was missing despite its sub-elements being cataloged). All 11 calibration entries verified as perfect (11/11). Stratum Depth Label (#9) and Survey Meta Row (#10) noted as borderline sub-instruments but accepted per Evidence DNA precedent.
- **OD-005:** Meta Chips merged into Exploration Header (not independent). Return-to-Map Link reclassified from Component to Instrument (wayfinding, not content container). Spoke Divider merged into Hub-to-Spoke WAVE gesture (no slots, no content = not a Component). Zone Background gesture weakened: `--color-zone-breathing` token declared but not applied in CSS.
- **OD-006:** TOC Marker Progress Fill merged into Scroll Witness (sub-mechanism, not separate instrument). Focus Visible Outline, Print Stylesheet, and Reduced Motion Preference removed (standard infrastructure, not designed gestures). Solid Offset reclassified as modifier/technique. Semantic Bridge (#43) flagged as partial phantom (concept-link exists but no code-target in HTML). Summary table subcounts corrected (worker's table said 14/12/14 but body had 15/15/16).

---

### 2. Cross-File Patterns

#### 2a. Instruments Appearing in 3+ Files

| Pattern Name | Files | Description |
|-------------|-------|-------------|
| **Scroll Witness / Progress Indicator** | OD-001, OD-005, OD-006 | Fixed sidebar with progress bars that fill as sections scroll. OD-001 uses chapter-level fill bars, OD-005 uses a wave indicator, OD-006 uses CSS Houdini @property with fractal 3-level TOC. |
| **Exploration Header** | ALL 6 files | Dark full-bleed header with exploration ID (monospace uppercase), title (Instrument Serif italic), hypothesis, and metadata chips. Universal page-identity instrument. |
| **Checkpoint / Verification Callouts** | OD-003, OD-004, OD-005 | Self-assessment instruments at section boundaries. OD-003 uses per-island checkpoint callouts, OD-004 uses verification list with checkmark squares, OD-005 uses checkpoint callouts within spokes. |
| **Section/Chapter Boundary Markers** | OD-001, OD-002, OD-003, OD-005, OD-006 | Wayfinding at structural transitions. OD-001: chapter dividers with progress dots. OD-002: act headers. OD-003: section labels. OD-005: breadcrumb navigation. OD-006: section dividers with mode transition labels. |
| **Pattern/Density Visualization** | OD-001, OD-002, OD-005, OD-006 | Abstract diagram showing the page's density architecture before content. OD-001: conversation diagram (Q/A bar widths). OD-002: Freytag bar chart. OD-005: WAVE oscillation diagram. OD-006: visual index with CSS-only miniatures. |
| **Narrative/Retrospective Summary** | OD-001, OD-002, OD-004 | End-of-page synthesis instrument. OD-001: conversation summary with 7 takeaways. OD-002: "The Story So Far" with 6 items. OD-004: verification list with checkmarks. |

#### 2b. Gestures Appearing in 3+ Files

| Pattern Name | Files | Description |
|-------------|-------|-------------|
| **Typography Compression Gradient** | OD-002, OD-004, OD-006 | Font-size, line-height, and/or letter-spacing shift systematically across structural zones. OD-002: act headers 40px->16px. OD-004: strata body 17px->14px. OD-006: narrative density 1.9/1.7/1.5 line-height. |
| **Spacing-as-Density/Confidence** | OD-002, OD-003, OD-004, OD-005 | Padding or margin compresses/expands to encode structural meaning. OD-002: beat margins 64px->24px->40px. OD-003: island isolation gaps. OD-004: strata padding 40px->16px. OD-005: hub-to-spoke WAVE oscillation. |
| **Code Block Dark Inversion** | OD-002, OD-003, OD-004, OD-005, OD-006 | Complete color-scheme inversion for code containers. Universal across all files with code content. |
| **Callout Essence Typography Shift** | OD-002, OD-004, OD-005, OD-006 | Font-family shifts from Inter to Instrument Serif italic in the essence callout variant. A multi-property shift (font-family + font-style + font-size) embedded within a component. |
| **Zone Background Color Differentiation** | OD-001, OD-003, OD-004, OD-005, OD-006 | Subtle background color shifts between structural zones. Uses CSS custom properties (--color-zone-sparse, --color-zone-breathing, etc.). Perceptibility varies: OD-004 has only 3-4 RGB points difference. |
| **Scroll-Triggered Reveal (Arriving Wisdom)** | OD-001, OD-003, OD-004, OD-005, OD-006 | Elements fade in and translate up as they enter viewport. Uses CSS scroll-driven animations with reduced-motion fallback. Chromium-only progressive enhancement. |
| **Editorial Drop Cap** | OD-001, OD-006 | `::first-letter` at 4.2em in Instrument Serif, primary red, floated left. Signals section beginnings. Only 2 files, but a distinctive shared gesture. |
| **Brand Selection Encoding (::selection)** | ALL 6 files | `::selection` uses primary red background + cream text. Identified by workers in all files but only elevated to gesture status by some buddies. Universal but borderline. |

#### 2c. Components Appearing in 3+ Files

| Pattern Name | Files | Description |
|-------------|-------|-------------|
| **Callout System** | ALL 6 files | 2-zone container (label + body) with 4px left border. Variants: info (blue), tip (green), gotcha/warning (coral), essence (purple + serif italic body), challenge (amber), checkpoint (green), note. 5-7 variants per file, but all share the same DNA. |
| **Code Block** | ALL 6 files | Dark-background code container with optional language label and syntax highlighting. The most universal component in the OD family. |
| **Essence Pullquote / Pull Quote** | OD-001, OD-002, OD-006 | Centered or left-aligned magazine-style pull quote with Instrument Serif italic, purple or red border. OD-001/002 use purple top/bottom borders with "Essence" label. OD-006 uses 4px red left border with attribution. |
| **Exploration Header (as Component container)** | OD-003, OD-004, OD-006 | The structural container for all header elements. Explicitly cataloged as component in OD-003 and added by buddies for OD-004 and OD-006. OD-001/002/005 have equivalent structures but workers cataloged sub-elements without the parent container. |
| **Collapsible Details / Troubleshoot** | OD-003, OD-004, OD-006 | `<details>` element with progressive disclosure. OD-003: troubleshoot accordion with toggle marker. OD-004: troubleshoot with coral accent and +/- toggle. OD-006: collapsible details with triangle rotation. |
| **Decision Matrix / Comparison Table** | OD-002, OD-004, OD-005, OD-006 | Structured data table. OD-002: climax comparison (tutorial vs production). OD-004: comparison grid (side-by-side patterns). OD-005: decision table. OD-006: proof table + comparison table. |
| **Narrative Beat / Content Block** | OD-002, OD-004 | The atomic content container within structural sections. OD-002: narrative beat (11 instances across 5 acts). OD-004: content-block (11 instances across 4 strata, noted by buddy as borderline). |

---

### 3. Taxonomy Boundary Cases

Every boundary case flagged by buddy reviews, with worker classification, buddy argument, and recommended resolution.

#### 3a. Instrument vs Gesture Boundary

| Element | File | Worker | Buddy Argument | Resolution |
|---------|------|--------|---------------|------------|
| **Essence Reflection Block** | OD-003 #8 | Instrument | Multi-property CSS shift (serif italic + breathing-zone bg + purple border + monospace label) = Gesture definition. Content is secondary to the mode shift. | **RETAIN as Instrument.** Worker's argument is stronger: removing it eliminates a structural beat in the 3-beat decompression. The mode shift supports its structural function. |
| **Sparse Sea Separators** | OD-003 #11 | Instrument | Pure whitespace with no visual content, metadata, or orientation data. By this logic, every margin/padding is an instrument. Closer to structural primitive. | **RETAIN as Instrument** with caveat. The semantic `role="separator"` and explicit design intent (EXT-TASK-015) earn it Instrument status, but note it is at the bottom of the Instrument category. |

#### 3b. Instrument vs Component Boundary

| Element | File | Worker | Buddy Argument | Resolution |
|---------|------|--------|---------------|------------|
| **Synthesis Cards** | OD-006 #7 | Instrument | Has 3 defined slots (org/density/proof), reused 5x, structures content. Content = proof evidence, not metadata. Fails reader-orientation test. | **RECLASSIFY as Component.** The cards deliver content (proof evidence), not orientation metadata. The parent `.synthesis-grid` has Instrument properties, but individual cards are Components. This is the buddy's strongest finding. |
| **Return-to-Map Link** | OD-005 #23 | Component | Wayfinding element (exit-gate counterpart to breadcrumb entry-gate). No slots, no content structure. Single text node. Same category as breadcrumb (#4) which worker correctly classified as Instrument. | **RECLASSIFY as Instrument.** Consistency with breadcrumb classification. The return link serves wayfinding, not content delivery. |
| **Act Header with Number + Title** | OD-002 #3 | Instrument | Could be Component (reusable container with slots: number + title). | **RETAIN as Instrument.** Worker correctly identifies primary function as wayfinding (act identification). The monospace "Act [N]" is purely navigational metadata. |

#### 3c. Component vs Gesture Boundary

| Element | File | Worker | Buddy Argument | Resolution |
|---------|------|--------|---------------|------------|
| **Spoke Divider** | OD-005 #24 | Component | No slots, no children, no content structure. A single `<div>` with height and margin. More naturally the physical manifestation of the WAVE oscillation gesture (#8). | **MERGE into Gesture #8** (Hub-to-Spoke Density Transition). The divider is the CSS encoding of the breathing pause, not an independent component. |
| **Solid Offset** | OD-006 #28 | Component | No content slots. Visual modifier applied via double-class. Analogous to utility class or design token. | **RECLASSIFY as Modifier/Technique.** Not a component in the calibration sense (no structured content slots). It modifies another container's visual appearance. |

#### 3d. Phantom Elements (CSS Defined, No DOM)

| Element | File | Worker Note | Buddy Verdict | Resolution |
|---------|------|------------|---------------|------------|
| **Research Application Badges** | OD-001 #6 | Worker noted "CSS defined but no instances found" yet included it | Buddy: "Zero DOM elements = zero reader function" | **REMOVE.** A CSS class with no HTML instantiation has no reader impact. Note in Additional Observations only. |
| **Act Divider Breathing Zone** | OD-002 #10 | Worker noted "CSS exists but is unused in the DOM" yet counted it as Gesture | Buddy: "An element that does not exist in the DOM changes nothing" | **REMOVE.** Unused CSS is not a gesture. The essence-pullquotes serve the act-break function instead. |
| **Semantic Bridge** | OD-006 #43 | Worker cataloged as Component | Buddy: "Partial phantom -- concept-link hover works but no code-target exists in HTML. Bridge functionality is broken." | **FLAG as partial phantom.** Retain in catalog but mark as "partially-implemented" with note that bridge functionality is non-functional. |

#### 3e. Sub-Mechanism Elements (Part of a Larger Instrument)

| Element | File | Worker | Buddy Argument | Resolution |
|---------|------|--------|---------------|------------|
| **TOC Marker Progress Fill** | OD-006 #39 | Separate Instrument | "This is the implementation mechanism WITHIN Instrument #1 (Scroll Witness), not a separate instrument." Cataloging sub-mechanisms would require also separating toc__label font cascade, fractal-annotation__ratio, etc. | **MERGE into Instrument #1.** The CSS Houdini technique is an implementation detail of the Scroll Witness, not a standalone instrument. Note the technique in #1's description. |
| **Exploration Meta Chips** | OD-005 #5 | Separate Instrument | "Should merge into Exploration Header (#3). Worker's own reasoning says removing chips 'would not affect reader understanding of hypothesis' -- weakening Instrument case." | **MERGE into #3.** Meta chips are a slot within the Exploration Header, not an independent instrument. Consistent with how OD-004's buddy treats similar sub-elements. |
| **Stratum Depth Label** | OD-004 #9 | Separate Instrument | "Borderline but accepted per Evidence DNA precedent." Part of the stratum header. | **RETAIN but note as sub-instrument.** The Evidence DNA precedent (calibration doc separates it from Stratum) supports independent listing. But future synthesis should standardize sub-element granularity. |
| **Survey Meta Row** | OD-004 #10 | Separate Instrument | "Sub-instrument of Geological Survey. Own CSS classes, layout, and visual separator argue for independence." | **RETAIN but note as sub-instrument.** Same Evidence DNA precedent applies. |

#### 3f. Micro-Gestures (Single-Property or Borderline Shifts)

| Element | File | Worker | Buddy Argument | Resolution |
|---------|------|--------|---------------|------------|
| **::selection Brand Encoding** | ALL files | Workers variously noted it; most excluded as "styling" | Multiple buddies argue it IS a gesture (2 CSS properties shift simultaneously on interaction). But removal test is weak -- most readers wouldn't consciously notice. | **OPTIONAL inclusion as Micro-Gesture.** Valid per calibration definition but at the extreme boundary. Recommend including it once in the cross-file pattern catalog rather than 6 separate entries. |
| **:focus-visible Outline** | OD-006 #41 | Gesture | Buddy: "Standard accessibility pattern, not a designed reading-register shift." Reader-function test fails for non-keyboard users. | **REMOVE.** Accessibility infrastructure, not a gesture. |
| **Code Absence as Narrative Withholding** | OD-002 #12 | Gesture | Buddy: "Stretches Gesture definition. Editorial choice, not CSS-encoded shift." But passes reader-function test. | **RETAIN with caveat.** A structural/editorial gesture rather than a CSS-encoded one. The absence of code blocks in Act I genuinely changes reading register. Flag as boundary expansion of Gesture category. |

#### 3g. Infrastructure Elements

| Element | File | Worker | Buddy Argument | Resolution |
|---------|------|--------|---------------|------------|
| **Print Stylesheet** | OD-006 #44 | Gesture | Buddy: "Standard web practice. Different medium entirely. By this logic, any media query is a gesture." | **REMOVE.** Not a gesture per calibration framework. Note in Additional Observations. |
| **Reduced Motion Preference** | OD-006 #46 | Gesture | Buddy: "Table stakes accessibility. Worker's own metacognitive check excludes utility classes for the same reason." | **REMOVE.** Accessibility accommodation, not a designed gesture. |
| **Responsive Breakpoint Collapse** | OD-006 #45 | Gesture | Buddy: "Defensible because 1024px breakpoint removes two instruments. But responsive design is standard practice." | **RETAIN with caveat.** The instrument-removal behavior at 1024px is genuinely significant (scroll witness and fractal annotations disappear). Most other responsive breakpoints merely reflow. Only catalog breakpoints that remove/add elements, not those that merely reflow. |
| **Skip Link** | OD-006 #42 | Component | Buddy: "Standard accessibility. Verified as present." | **RETAIN.** It has defined structure and consistent treatment. Standard but correctly identified. Low priority in analysis. |

---

### 4. Taxonomy Evolution Proposals

Based on the 30+ boundary cases above, the current 3-category model (Instrument / Gesture / Component) needs at least 3 supplementary categories and 1 meta-category.

#### 4a. Proposed New Categories

**PHANTOM** -- CSS-Only Elements with No DOM Instantiation

- **Definition:** CSS rules exist but no corresponding HTML elements are present. Zero reader impact. Zero reader function.
- **Examples:** OD-001 Research Application Badges, OD-002 Act Divider Breathing Zone, OD-006 Semantic Bridge (partial)
- **Treatment:** Note in Additional Observations. Do NOT count toward I/G/C totals. Flag the intent (what was designed but not built).
- **Threshold:** If any DOM element uses the class, it is NOT a phantom. Partial phantoms (some functionality works, some doesn't) get flagged but retained.

**MODIFIER** -- CSS Rules That Alter an Existing Component/Instrument

- **Definition:** A CSS pattern that modifies another element's visual appearance but has no content slots and no independent DOM presence. Applied via double-class or pseudo-element.
- **Examples:** OD-006 Solid Offset (`.solid-offset`), OD-003 `.task-island--featured` (already counted as Gesture due to emphasis function)
- **Treatment:** Catalog separately only if the modification has a distinct reader-experience function (e.g., emphasis signal). Otherwise, note as an implementation detail of the parent element.
- **Boundary:** If the modifier creates a reading-register shift (like `.task-island--featured` creating visual emphasis), classify as Gesture. If it is purely visual treatment (like `.solid-offset` adding depth), classify as Modifier.

**INFRASTRUCTURE** -- Standard Accessibility/Print/Responsive Patterns

- **Definition:** Standard web practices (skip links, print stylesheets, reduced-motion preferences, focus-visible outlines) that are functional necessities but not designed reading-experience devices.
- **Examples:** OD-006 Focus Visible (#41), Print Stylesheet (#44), Reduced Motion (#46). OD-001/002/003/004/005 all have equivalent patterns that workers correctly excluded.
- **Treatment:** Note in Additional Observations section. Do NOT count toward I/G/C totals. The workers who excluded these (OD-001 through OD-005) were right; the OD-006 worker who included them was too inclusive.

#### 4b. Proposed Meta-Category

**SUB-ELEMENT** -- Component Slots or Instrument Sub-mechanisms

- **Definition:** An element that is structurally part of a larger Instrument or Component but has its own CSS classes and visual identity. Could theoretically be cataloged independently (per Evidence DNA precedent) or merged into the parent.
- **Examples:** OD-004 Stratum Depth Label, Survey Meta Row. OD-005 Exploration Meta Chips. OD-006 TOC Marker Progress Fill.
- **Treatment:** Include in the parent's entry as a named sub-element. Only elevate to independent entry when it has BOTH (a) its own CSS class, AND (b) a reader function that survives independently if the parent is removed. The Evidence DNA test: "Could this sub-element appear in a different context and still function?" If yes, catalog independently. If no, merge.

#### 4c. Categories NOT Recommended

**Micro-Gesture** (rejected as separate category): The `::selection` pattern is either a Gesture (it meets the 2-property coordinated shift test) or it is styling. Creating a "Micro-Gesture" category opens a slippery slope where every hover state and color transition becomes catalogable. Instead, apply a **perceptual threshold**: gestures must be noticeable to a reader who is not looking for them. `::selection` fails this test for most readers.

**Hybrid** (rejected as separate category): Elements like the Essence Pullquote (both a breathing-zone instrument and a content component) or the Act Header (both wayfinding instrument and structural container) naturally span categories. The correct treatment is to assign the PRIMARY category and note the secondary function, not to create a "Hybrid" bin. Every element has multiple functions; categorization requires judgment about the primary one.

---

### 5. Quality Summary

#### 5a. Worker Rankings (Most Thorough to Least)

1. **OD-006 worker** -- 46 elements found, deepest CSS reading, CSS Houdini techniques identified, calibration entries deepened with implementation details. Over-inclusive (infrastructure gestures padded count) but the raw coverage is the best in the wave. Identified every calibration entry and added 31 discoveries.
2. **OD-004 worker** -- 26 elements with perfect 11/11 calibration score. Multi-channel redundancy insight is the most architecturally significant observation in the wave. Five new gestures, five new components, all legitimate.
3. **OD-003 worker** -- 25 elements with the cleanest categorization reasoning. The boundary cases (Essence Reflection, Sparse Sea) were thoughtfully argued. Only 1 miss (featured island outline).
4. **OD-001 worker** -- 24-25 elements. Strong pseudo-element coverage (solid offset, drop cap, question markers). One phantom inclusion (#6 Research Badges) was self-flagged. Good metacognitive check.
5. **OD-002 worker** -- 18 elements. Solid work but smallest catalog. The "Code Absence as Narrative Withholding" is the most creative gesture identification across all 6 workers. One unused-CSS inclusion (Act Divider) was self-flagged.
6. **OD-005 worker** -- 26 elements. Comprehensive coverage of the spatial architecture. Weaknesses: Meta Chips should have been merged into Header, Return Link classification was inconsistent with Breadcrumb, Spoke Divider has no slots.

#### 5b. Buddy Rankings (Most Rigorous to Least)

1. **OD-006 buddy** -- Most thorough review. Caught 6 miscategorizations, identified the summary table count error, found 1 genuine missed element (Hub Grid), and proposed the clearest category boundaries. Excellent adversarial analysis of infrastructure-as-gesture overcounting.
2. **OD-005 buddy** -- Three reclassification recommendations (Meta Chips merge, Return Link to Instrument, Spoke Divider merge) are all correct. The `--color-zone-breathing` token-declared-but-unused observation is a genuine catch. Systematic adversarial findings.
3. **OD-004 buddy** -- Perfect calibration verification (11/11 confirmed). The Exploration Header Component addition is the single most impactful buddy finding (multi-slot container that the worker missed). Granularity inconsistency observation is architecturally important.
4. **OD-003 buddy** -- Found the `.task-island--featured` outline gesture that the worker missed. The Essence Reflection boundary case analysis is the most nuanced categorization debate in the wave. Clean entry-by-entry verification.
5. **OD-001 buddy** -- Correctly identified the Research Badges phantom and the solid-offset/double-border conflation. The essence-pullquote `::after` distinction (double-border vs solid offset) is a subtle but important technical correction.
6. **OD-002 buddy** -- Correct removal of unused Act Divider. Good identification of Callout Essence Font Shift as a missed gesture. The skip-link discussion is low-value (correctly excluded by worker).

#### 5c. Miss Rates

| File | Worker Found | Buddy Additions | Buddy Removals | Miss Rate (adds/worker) |
|------|-------------|----------------|----------------|------------------------|
| OD-001 | 24-25 | 1 | 1 | 4.0% |
| OD-002 | 18 | 1 | 1 | 5.6% |
| OD-003 | 25 | 1 | 0 | 4.0% |
| OD-004 | 26 | 1 | 0 | 3.8% |
| OD-005 | 26 | 0 | 3 reclassifications | 0% (but 11.5% reclassification rate) |
| OD-006 | 46 | 0 | 5 | 0% (but 10.9% removal rate) |
| **Average** | **27.5** | **0.67 adds** | **1.67 removals** | **2.9% miss, 7.8% correction** |

**Key insight:** Workers missed very little (average 2.9% miss rate for new additions). The buddy value is primarily in REMOVALS and RECLASSIFICATIONS (7.8% correction rate), not in finding new elements. Workers tend to over-include rather than under-include.

#### 5d. Most Common Categorization Errors

1. **Including phantom elements** (3 cases: OD-001 #6, OD-002 #10, OD-006 #43) -- CSS exists but no DOM = no reader function. This is the most frequent error across workers.
2. **Infrastructure-as-gesture** (3 cases in OD-006: #41 focus-visible, #44 print, #46 reduced-motion) -- Standard accessibility/print patterns counted as designed gestures. Only the OD-006 worker made this error; all other workers correctly excluded these.
3. **Sub-mechanism proliferation** (2 cases: OD-006 #39, OD-005 #5) -- Cataloging implementation details of parent instruments as separate entries. Inflates counts without adding real catalog value.
4. **Inconsistent Instrument/Component boundary** (2 cases: OD-005 #23 Return Link, OD-006 #7 Synthesis Cards) -- Wayfinding elements classified as Components, or content-bearing elements classified as Instruments. The reader-function test was not applied consistently.

---

### 6. Recommendations for Wave 2

Based on the 159 corrected elements, 30+ boundary cases, and quality patterns from Wave 1, here are recommendations for AD workers.

#### 6a. Apply These Thresholds

1. **Phantom test:** If a CSS class has ZERO HTML instances, do NOT catalog it. Note it in Additional Observations only.
2. **Infrastructure exclusion:** Do NOT catalog `::selection`, `:focus-visible`, `@media print`, `@media (prefers-reduced-motion)`, or `.skip-link` as Instruments/Gestures/Components. They are infrastructure. Note them in Additional Observations.
3. **Sub-element merge:** If an element is structurally part of a larger Instrument/Component AND its reader function depends on the parent, merge it into the parent entry. Only catalog independently if it passes the "could it appear in a different context?" test.
4. **Component slot test:** A Component MUST have defined content slots. A `<div>` with only height and margin (like Spoke Divider) is not a Component. It is either a Gesture artifact or a styling primitive.
5. **Perceptual threshold for Gestures:** The CSS property shift must be noticeable to a reader who is not looking for it. Background color differences of <5 RGB points fail this test (note: OD-004's zone backgrounds are 3-4 RGB points apart and were flagged as borderline).

#### 6b. Watch for These AD-Specific Patterns

1. **Layout-as-Instrument:** AD files organize by ATTENTION pattern (Z-pattern, F-pattern, Bento grid, spiral). The layout itself may function as an Instrument (telling the reader HOW to scan the page). Workers should test: "Does the layout provide orientation, or is it just visual arrangement?"
2. **Hover-as-Gesture:** AD files may have more interactive hover effects (tile hover, card hover). Apply the Gesture test strictly: does the hover change reading register, or is it just interactive feedback? The OD-005 buddy correctly excluded territory tile hover as UI feedback.
3. **Animation-as-Gesture:** The Arriving Wisdom (scroll reveal) pattern appears in 5/6 OD files. AD files likely share it. Workers should identify it ONCE and note which elements use it, not catalog it per-element.
4. **Density visualization variants:** Every OD file has a density visualization instrument. AD files should have attention-pattern visualizations. Workers should look for visual diagrams that explain the page's scanning architecture.

#### 6c. Process Improvements

1. **Workers should note phantoms explicitly** in a dedicated "Phantom/Unused CSS" section, not mix them into the main catalog.
2. **Workers should flag boundary cases** in their metacognitive check rather than making a silent judgment call. The best OD workers (003, 004) did this well; the others either over-included or silently excluded.
3. **Buddies should verify HTML instance counts** for every component. The most reliable quality signal is: "Does the claimed number of HTML instances match the actual file?" OD-002 buddy did this excellently.
4. **Summary table subcounts must match body entries.** OD-006's summary table had incorrect subcounts (14/12/14 vs actual 15/15/16). Workers should count from the body, not from memory.
