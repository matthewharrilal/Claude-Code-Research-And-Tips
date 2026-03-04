# Wave 3 CD Retro -- Synthesis Report

---

## 1. Corrected Element Counts

After integrating all buddy feedback (removals, additions, reclassifications, merges), here are the corrected counts for each CD file.

| File | Raw Worker | + Buddy Adds | - Buddy Removes/Merges | = Corrected | I | G | C |
|------|-----------|-------------|------------------------|-------------|---|---|---|
| CD-001 | 19 (7I/6G/6C) | +1 (comparison table as potential component) | -1 (syntax highlighting gesture debatable) | **19** | 7 | 5 | 7 |
| CD-002 | 22 (8I/8G/6C) | 0 | -1 (task item checkbox affordance merge into Task Component) | **21** | 8 | 7 | 6 |
| CD-003 | 24 (6I/7G/11C) | 0 | -1 (islands spacing as single-property gesture, flagged) | **24** | 6 | 7 | 11 |
| CD-004 | 20 (7I/6G/7C) | +1 (spoke promoted to component) | -1 (footer rule merged into footer identity bar), -1 (version badge merged into meta line) | **19** | 5 | 6 | 8 |
| CD-005 | 27 (7I/8G/12C) | 0 | -1 (task checkbox sub-element merged into Task Component) | **26** | 7 | 8 | 11 |
| CD-006 | 36 (8I/13G/15C) | 0 | -1 (responsive 480px typography compression, weakest entry) | **35** | 8 | 12 | 15 |
| **TOTAL** | **148** | **+2** | **-6** | **144** | **41** | **45** | **58** |

### Notes on Corrections

- **CD-001:** Buddy assessed syntax highlighting (#13) as weakest gesture classification (single-channel color mapping, standard dev tooling). Comparison table flagged as soft miss -- generic element selectors (no custom class) justify the exclusion but calibration precedent (OD-004 Comparison Grid) leans toward inclusion. Net count unchanged (one potential add, one debatable remove cancel out). Background "alternation" description corrected to "bookend frame" pattern (sparse-dense-dense-dense-sparse, not alternation).

- **CD-002:** Task Item Checkbox Affordance (#14) reclassified from Gesture to Task Component sub-element. Buddy correctly argues the checkbox is a single consistent visual element without multi-property shifts between instances. The reading-mode shift is caused by the Task Component as a whole, not the checkbox alone. Recommendation Box (#6) noted as borderline Instrument (contains content, not just orientation) but dual-listing accepted. PULSE dense/sparse description has minor inconsistency (Decision Matrix uses sparse background but described in dense context).

- **CD-003:** Islands Density Spacing (#7) flagged as weak gesture -- single property (`margin-bottom: 64px`) applied uniformly. Passes the secondary calibration test (changes reading mode) but fails the primary test (coordinated multi-property shift). RAR Block (#6) accepted as Instrument but flagged as taxonomy-resistant (has component-like slot structure). Dark code block (pre) in bento cells noted as mild miss (locked-layer styling serving combination-layer function). Dead CSS noted: `.cell-badge--hub`, `.cell-badge--spoke`, `.callout--caution` defined but never used in HTML.

- **CD-004:** Footer Rule (#7) merged into Footer Identity Bar (#6) -- 48x3px decorative bar is a sub-element, not an independent instrument. Version Badge (#2) merged into Header Meta Line (#3) -- dependent sub-element. Spoke promoted from infrastructure to Component (has header slot, consistent border, 3 instances with varying content). Tidal Width Modulation gesture eliminated on mobile (essence callouts expand to 100% at 768px) -- gesture is desktop-only. Choreography Hub accepted as exclusion (1 instance, no unique slots).

- **CD-005:** Task Checkbox pseudo-element (#25) merged into Task Component (#24) as described sub-element. WAVE Density Oscillation (#13) and Velocity Interleaving (#14) flagged as compositional/emergent gestures (not CSS-encoded property shifts) -- taxonomy-stretching but accepted. File Tree Label (#6) flagged as marginal instrument (minimal orientation added). Section Intro (`.section-intro`) and inline code styling noted as borderline omissions but defensible exclusions.

- **CD-006:** Responsive Typography Compression at 480px (#19) flagged as weakest entry -- font-size compression is not a reading-mode shift, just visual compression. Callout instance count corrected: 17 callout instances, not 33 (33 = total component instances across all types). Task Component "3 unique" corrected to "4 unique" (all 4 have different content). Code block count minor discrepancy noted. F-Movement (#35) accepted as weakest component entry (minimal CSS, essentially a margin wrapper + h3).

---

## 2. CD-Specific Patterns

### 2a. What Is UNIQUE to the Combination Family?

The defining characteristic of CD files is **pattern layering** -- multiple organizational strategies, axis patterns, and density profiles coexisting within a single page. This creates phenomena that cannot exist in OD (single organizational pattern) or AD (single axis pattern) alone:

#### Transition Grammar

CD files require explicit transition management between incompatible reading modes. Three transition types emerged:

| Transition Type | Files | Description |
|----------------|-------|-------------|
| **SMOOTH** | CD-003, CD-005, CD-006 | Minimal divider (32px height, 120px line) for transitions between compatible spatial patterns (e.g., bento grid -> choreography). No reading-mode change. |
| **BRIDGE** | CD-002, CD-004, CD-005, CD-006 | Content-bearing transition (48-64px padding + callout with navigational prose) for transitions between semi-compatible patterns. Prepares the reader cognitively. |
| **BREATHING** | CD-001, CD-002, CD-004, CD-005, CD-006 | Maximum decompression (80px+ margins + breathing background + 3px double borders) for transitions between incompatible reading modes (e.g., Z-Pattern -> Spiral). Full cognitive reset. |

OD files have section dividers and breathing zones, but they never need to manage transitions between fundamentally different reading geometries. AD files have axis-specific layouts, but each file uses only one axis pattern. CD files uniquely require a **transition grammar** -- a vocabulary for managing cognitive mode shifts.

#### Compound Axis Instruments

| Instrument | Files | Description |
|-----------|-------|-------------|
| **TOC with Density/Axis Annotations** | CD-006 | TOC entries show not just topic titles but the axis pattern and density type of each section. Maps the "reading experience profile" of the page. |
| **Section Meta Label (triple-coordinate)** | CD-006 | `Section 01 . Spiral . Geological Density` -- three-dimensional positional metadata encoding section number, axis pattern, and density type simultaneously. |
| **Breathing Transition with Regime Label** | CD-002 | Breathing zones labeled with the destination organizational regime ("Deployment Strategy") -- names the pattern the reader is transitioning INTO. |
| **Running Header with dual regime awareness** | CD-002 | Running headers that label BOTH the Z-Pattern phases ("Phase 1-3") AND the Spiral strata ("Stratum 1-3"), creating dual-coordinate orientation. |
| **Confidence Badge (4-level)** | CD-004 | Per-section epistemic level badge (Established/Probable/Speculative/Open) that coordinates with border-weight, spacing, and background gradients. |

#### Combination-Specific Gestures

| Gesture | Files | Description |
|---------|-------|-------------|
| **Z-to-Spiral Temperature Gradient** | CD-002 | Page-level background color cooling (#FFFFFF -> #FEF9F5 -> #FAF5ED) that correlates with transition from certain/actionable Z-Pattern content to speculative/philosophical Spiral content. |
| **Tidal Width Modulation** | CD-004 | Essence callouts narrowed to 60% while code/reasoning span 100%, creating an oscillating width rhythm that maps to philosophical/technical register. Desktop-only (collapses on mobile). |
| **WAVE Density Oscillation** | CD-005 | Page-level emergent density pattern (MED-LOW-HIGH-LOW-MED-HIGH-LOW) created by component placement, not CSS properties. A compositional gesture. |
| **Core Abstraction Internal CRESCENDO** | CD-001 | Within a single component, the top zone (warm cream, serif italic) and bottom zone (dark, monospace) create a micro-density shift. Component-level CRESCENDO that mirrors the page-level pattern. |
| **Z-Sweep Diagonal Alternation** | CD-005 | Grid-template-areas flip between normal and reverse to create a Z-diagonal eye movement. Golden ratio (1.618fr) on both axes. |
| **Responsive Bento Collapse Sequence** | CD-003 | 3-column -> 2-column -> 1-column progressive collapse that transforms spatial scanning into linear reading. A reading-mode transformation, not just responsive layout. |

#### Combination-Specific Components

| Component | Files | Description |
|-----------|-------|-------------|
| **Breathing Zone** | CD-001 | Structural container (warm background, 3px borders) that hosts essence pullquotes between CRESCENDO sections. Both a Component (container with slots) and participant in a Gesture (compression/release pattern). |
| **Spiral Stratum Container** | CD-002, CD-004, CD-006 | Section container with 3-4 confidence variants that degrade visual weight through coordinated border/spacing/background/label shifts. The container IS the confidence encoding. |
| **Z-Hero Grid** | CD-005, CD-006 | 4-quadrant golden-ratio grid demonstrating Z-pattern zones with term/definition density split per cell. |
| **Choreography Hub** | CD-003, CD-006 | Central comparison container (visually heavier than spokes) holding decision matrices within hub-spoke layouts. |
| **Choreography Spoke** | CD-003, CD-004, CD-006 | Radiating evidence container with label + title + flexible content. The `--full` variant spans 2 columns. |
| **F-Movement** | CD-006 | Vertical scanning unit within F-pattern sections. Minimal CSS (margin + h3) but consistent 3-instance pattern. |

### 2b. Self-Referential Depth

CD files exhibit a self-referential quality that exceeds even AD's self-demonstrating layouts. Specific examples:

- **CD-001's CRESCENDO self-awareness:** The density meter INSTRUMENT makes the CRESCENDO density GESTURE visible. The page doesn't just implement increasing density -- it shows the reader its own density curve in real-time.
- **CD-006's fractal density at 5 scales:** Density operates at navigation (TOC), section (meta labels), component (code blocks), sub-component (Q&A items), and inline (code spans) levels simultaneously.
- **CD-002's dual-coordinate running headers:** Headers simultaneously label the Z-Pattern regime ("Phase 2") and the Spiral regime ("Stratum 1"), making the combination's dual structure visible.

---

## 3. Grand Cross-Wave Comparison (All 3 Families)

| Family | Files | Raw Elements | Corrected | I | G | C | Avg/file (corrected) |
|--------|-------|-------------|-----------|---|---|---|---------------------|
| OD (Wave 1) | 6 | 165-166 | 159 | 56 (35.2%) | 48 (30.2%) | 55 (34.6%) | 26.5 |
| AD (Wave 2) | 6 | 166 | 162 | 53 (32.7%) | 51 (31.5%) | 58 (35.8%) | 27.0 |
| CD (Wave 3) | 6 | 148 | 144 | 41 (28.5%) | 45 (31.2%) | 58 (40.3%) | 24.0 |
| **TOTAL** | **18** | **~480** | **465** | **150 (32.3%)** | **144 (31.0%)** | **171 (36.8%)** | **25.8** |

### Key Observations

**1. CD has fewer raw elements than OD or AD.**

The average corrected count per file drops from 26.5 (OD) to 27.0 (AD) to 24.0 (CD). This is counterintuitive -- CD files combine multiple patterns, so why fewer cataloged elements?

Explanation: CD files REUSE vocabulary from OD and AD rather than inventing new elements. The callout system, code blocks, reasoning components, and structural borders are all inherited. What CD adds is COMBINATION-SPECIFIC elements: transitions, compound instruments, and self-referential devices. The novel element count is lower because the combinatorial work is in ARRANGEMENT, not vocabulary.

**2. CD shifts toward Components at the expense of Instruments.**

| Category | OD % | AD % | CD % | Trend |
|----------|------|------|------|-------|
| Instruments | 35.2% | 32.7% | 28.5% | Declining (-6.7 pp) |
| Gestures | 30.2% | 31.5% | 31.2% | Stable |
| Components | 34.6% | 35.8% | 40.3% | Rising (+5.7 pp) |

CD files need fewer per-section orientation instruments because the COMBINATION itself provides orientation through transitions. When you have a breathing transition zone between sections, you need less per-section wayfinding. Meanwhile, CD files need MORE component types because combination creates new container needs (breathing zones, stratum containers, choreography spokes, hub-spoke layouts).

**3. Gesture counts are remarkably stable across all three families (~31%).**

This suggests gestures are the most fundamental vocabulary layer. Reading-register shifts (typography, spacing, color encoding) are universal regardless of organizational or axis pattern. The ~31% stability may indicate a natural ratio: roughly one-third of a page's designed elements change HOW you read, regardless of what the page is organized around.

**4. The "crown jewel" files are consistently the outliers.**

| File | Corrected Count | vs. Family Average |
|------|----------------|-------------------|
| OD-006 | 41 | +14.5 (54.7% above) |
| AD-006 | 36 | +9.0 (33.3% above) |
| CD-006 | 35 | +11.0 (45.8% above) |

Every *-006 file (the richest exploration in each family) has ~35-45% more elements than its family average. This confirms that vocabulary richness scales sub-linearly with page complexity -- doubling CSS lines doesn't double the element count.

---

## 4. Universal Patterns (Appear in ALL 3 Families)

These elements are part of the locked-layer / shared design system DNA. They appear in OD, AD, AND CD:

| Pattern | Type | Frequency | Description |
|---------|------|-----------|-------------|
| **Meta Line + Version Badge** | Instrument | 18/18 files | Universal document-identity metadata strip. Every exploration begins with ID, category, version. |
| **Callout System (5+ variants)** | Component | 18/18 files | 2-zone label+body container with 4px left border. Info (blue), Tip (green), Gotcha (coral), Essence (purple + serif), Challenge (amber). The single most universal component in the design system. |
| **Callout Essence Serif Shift** | Gesture | 16/18 files | Font-family shift from Inter to Instrument Serif italic in essence callout variant. The most universal gesture in the design system. |
| **Code Block (Dark Theme)** | Component | 17/18 files | Dark-background inverted code container with optional language label and syntax highlighting. |
| **Zone Background Differentiation** | Gesture | 17/18 files | Sparse (#FEF9F5) / Dense (#FFFFFF) / Breathing (#FAF5ED) background colors encoding density zones. |
| **Structural Border Hierarchy** | Gesture | 18/18 files | Cat 1 (3px structural) / Cat 2 (1px separator) / Accent (4px colored left border). |
| **Footer/Page Closing** | Instrument | 18/18 files | Terminal boundary marker mirroring header treatment. Dark background, monospace ID text, optional red rule accent. |
| **Responsive Collapse** | Gesture | 18/18 files | Multi-property coordinated shift at 768px and/or 960px breakpoints. |
| **Typography Trinity** | Gesture | 18/18 files | Serif (scanning/headings) / Sans (reading/body) / Mono (processing/code) font system. |
| **Header (Dark Full-Bleed)** | Component | 18/18 files | Dark background container with meta-line, h1 title, subtitle. Universal page-identity container. |

---

## 5. Family-Specific Patterns

### 5a. OD-Only Patterns (Not found in AD or CD)

| Pattern | Type | Description |
|---------|------|-------------|
| **Scroll Witness / Progress Indicator** | Instrument | Fixed sidebar with chapter-level fill bars. Present in OD-001, OD-005, OD-006 but never in AD or CD. |
| **Synthesis Cards** | Component | 3-slot proof evidence cards (OD-006). Not replicated in AD or CD. |
| **Conversation Diagram** | Instrument | Abstract density-architecture visualization (Q/A bar widths in OD-001). OD-specific narrative device. |
| **Narrative Beat / Content Block** | Component | Atomic content container within structural sections (OD-002, OD-004). |

### 5b. AD-Only Patterns (Not found in OD or CD)

| Pattern | Type | Description |
|---------|------|-------------|
| **Self-demonstrating layout** | Structural | The layout IS the thesis. Z-grid demonstrates Z-pattern, bento demonstrates grid hierarchy. The page cannot be re-laid-out without destroying its argument. |
| **Pattern Echo Grid** | Instrument | CSS-only miniature reproductions of all 5 axis patterns (AD-006). |
| **Axis Indicator** | Instrument | Sticky dark bar showing Axis/Density/Org triple-state metadata (AD-006). |
| **Tension Meter** | Instrument | 5-segment visual gauge showing CRESCENDO tension level per act (AD-002). |
| **Complexity Badge + Duration Badge** | Instrument | Per-bento-cell metadata chips for difficulty and time (AD-003). |
| **Bookend Density Shift** | Gesture | Red left border (start) -> Green left border (end) page-level color arc (AD-003). |
| **Step Counter Rhythm** | Gesture | CSS counter-generated dark squares creating visual drumbeat (AD-003). |
| **Open Question "?" Prefix** | Gesture | `::before` with display serif italic "?" at speculative stratum (AD-004). |

### 5c. CD-Only Patterns (Not found in OD or AD)

| Pattern | Type | Description |
|---------|------|-------------|
| **Transition Grammar (3-type)** | Instrument/Gesture | SMOOTH / BRIDGE / BREATHING transitions between axis regimes. The hallmark CD innovation. |
| **TOC with Axis/Density Annotations** | Instrument | Navigation that previews the READING EXPERIENCE of each section, not just the topic (CD-006). |
| **Section Meta Label (triple-coordinate)** | Instrument | Three-dimensional positional metadata: section number + axis pattern + density type (CD-006). |
| **Tidal Width Modulation** | Gesture | Content width oscillates between 60% (philosophical) and 100% (technical) to encode semantic register (CD-004). |
| **CRESCENDO Self-Awareness** | Instrument | Density meter that makes the CRESCENDO density gesture VISIBLE to the reader (CD-001). |
| **Core Abstraction Internal CRESCENDO** | Gesture | Component-level density shift within a single container: warm serif top zone -> dark mono bottom zone (CD-001). |
| **Z-Sweep Diagonal Alternation** | Gesture | Grid-template-areas flip between normal/reverse with golden ratio proportions (CD-005). |
| **Breathing Zone as Component** | Component | Structural container (warm background, 3px borders, inner wrapper) hosting essence pullquotes between CRESCENDO sections (CD-001). |
| **Confidence Gap Spacers** | Instrument | Empty aria-hidden divs with progressively expanding whitespace (32px->48px->64px) encoding confidence degradation through space (CD-004). |

---

## 6. Taxonomy Status

### 6a. Is the I/G/C + 2 Exclusion Filters Model Stable?

**Yes. The core model is holding across all three waves.**

After 18 files and 465 corrected elements:

| Assessment | Evidence |
|------------|----------|
| **3-category model covers ~90% of elements cleanly** | Approximately 42 of 465 elements had boundary-case discussions. The remaining ~423 fell cleanly into one category. |
| **Instrument/Gesture boundary is the most contested** | 14 boundary cases across all waves. Key recurring: breathing zones (spatial instrument vs content component), sub-element instruments (version badges, labels), and single-property gestures (spacing, grid gap). |
| **Gesture/Component boundary is the least contested** | Only 4 boundary cases across all waves. Gestures and Components are the most naturally distinct categories. |
| **Component/Instrument boundary is moderate** | 8 boundary cases. Recurring pattern: self-referential tables/diagrams that are simultaneously content AND metadata. |

### 6b. Exclusion Filters: Confirmed and New

**Confirmed (from Wave 1, validated in Waves 2 and 3):**

1. **Phantom test:** Zero DOM instances = do not catalog. Workers applied this consistently in Wave 3. Only 1 CD file had dead CSS noted (CD-003: `.cell-badge--hub`, `.cell-badge--spoke`).

2. **Infrastructure exclusion:** Skip `::selection`, `:focus-visible`, `@media print`, `@media (prefers-reduced-motion)`, `.skip-link`. All 6 CD workers correctly excluded these. Significant improvement over OD-006 which included 3 infrastructure entries.

**Confirmed (from Wave 2, validated in Wave 3):**

3. **Gesture merge rule:** When multiple CSS properties shift together across the same elements following one rule, catalog as ONE gesture. CD workers generally followed this (CD-004's border-weight and spacing are properly consolidated). No CD file had the oversplitting problem seen in AD-004.

4. **Sub-element merge:** Version badges should merge into parent meta-line unless independently functional. CD-004 buddy correctly caught this. CD-001 kept version badge separate (defensible per Evidence DNA precedent, but inconsistent with other files).

5. **Content-density-as-gesture threshold:** Editorial distribution of elements is NOT a CSS gesture unless encoded in CSS properties. CD-005's WAVE Density Oscillation (#13) and Velocity Interleaving (#14) stretch this rule -- they are emergent compositional patterns, not CSS-encoded shifts. Accepted but flagged.

**NEW filter needed from Wave 3:**

6. **Compositional gesture flag:** When a page-level pattern emerges from the ARRANGEMENT of elements rather than from CSS property shifts, flag it as a "compositional gesture" sub-type. This accommodates CD-005's WAVE oscillation and velocity interleaving without stretching the core gesture definition. These are real perceptual phenomena but sit uncomfortably in a taxonomy designed for DOM-level detection.

### 6c. Taxonomy Evolution Summary

| Wave | Primary Contribution to Taxonomy |
|------|----------------------------------|
| Wave 1 (OD) | Established the I/G/C model + 4 supplementary categories (Phantom, Modifier, Infrastructure, Sub-Element). Identified phantom elements and infrastructure-as-gesture as the most common errors. |
| Wave 2 (AD) | Added the gesture merge rule and self-referential content test. Identified gesture oversplitting and orphaned CSS as new error patterns. Proposed Structural Marker sub-type for zero-slot components. |
| Wave 3 (CD) | Added the compositional gesture flag. Confirmed that transition grammar is a novel vocabulary layer specific to combination pages. Confirmed that dual-role elements (simultaneously Instrument + Component or Gesture) are inherent to the taxonomy, not fixable -- assign primary category and note secondary function. |

---

## 7. Quality Summary + Final Taxonomy Recommendation

### 7a. Worker Rankings (Wave 3)

1. **CD-006 worker** -- 36 elements, highest in Wave 3. Read all 2085 lines. Identified 8 instruments, 13 gestures, 15 components including every axis pattern's layout component. The TOC with density annotations, section meta labels, and fractal density analysis are the strongest observations in Wave 3. Only corrections: instance counts (callouts 33->17, task "3 unique"->4). Best CD findings file.

2. **CD-005 worker** -- 27 elements. Excellent dual-catalog of Z-Sweep as both Component (#16) and Gesture (#8). WAVE Density Oscillation and Velocity Interleaving are the most analytically ambitious gesture identifications in Wave 3 (compositional patterns). Golden ratio observation (1.618fr) is accurate. Weakness: task checkbox as separate numbered entry.

3. **CD-003 worker** -- 24 elements with 100% line number accuracy (12/12 spot-checks exact). File Tree/Callout weight differentiation (Gesture #9) is the strongest individual finding in Wave 3 -- a reusable pattern for components sharing visual DNA. Weakness: Islands Density Spacing as single-property gesture.

4. **CD-002 worker** -- 22 elements. Strong identification of PULSE dense/sparse alternation and Z-to-Spiral temperature gradient as page-level gestures. Decision Matrix + Reasoning Component as new component types are correctly identified. Weakness: Task Item Checkbox Affordance overcounted as Gesture.

5. **CD-001 worker** -- 19 elements. CRESCENDO self-awareness pattern (density meter IS the density gesture made visible) is the most architecturally significant insight in Wave 3. Clean taxonomy decisions with explicit boundary-case discussion. Most restrained count but highest per-element quality.

6. **CD-004 worker** -- 20 elements. Good identification of Tidal Width Modulation as CD-004's core experiment. Callout color-coding as cross-component gesture is analytically defensible. Weaknesses: Footer Rule as separate instrument (should merge), Version Badge as separate instrument (should merge), spoke excluded (should be component).

### 7b. Buddy Rankings (Wave 3)

1. **CD-006 buddy** -- Most thorough review. Caught instance count errors (callouts, task component). Accepted all categorizations with only borderline flags (responsive 480px, F-Movement, inline code). "Crown jewel status confirmed" assessment is accurate. Quality 9/10.

2. **CD-005 buddy** -- Best analytical framework. Correctly identified WAVE/Velocity as "compositional gestures" that stretch the taxonomy. Proposed fourth category ("Compositional Patterns"). Task checkbox merge recommendation is correct. 93/100 overall score.

3. **CD-004 buddy** -- Most impactful corrections. Three substantive recommendations: Footer Rule merge, Version Badge merge, Spoke promotion to Component. All three are correct. Good spoke/hub analysis.

4. **CD-003 buddy** -- Perfect 12/12 line number accuracy verification. Strong analysis of Islands Spacing as weak gesture. RAR Block taxonomy-resistance flag is well-reasoned. Code block locked-layer observation is valid.

5. **CD-002 buddy** -- Correct identification of Checkbox Affordance overcounting. Good h3 italic base rule observation (affects multiple components). PULSE dense/sparse labeling inconsistency caught. Dead CSS noting would strengthen findings.

6. **CD-001 buddy** -- Solid verification (18/19 confirmed). Comparison table soft miss is the most impactful finding. Syntax highlighting classification challenge is well-reasoned. Background alternation correction is accurate.

### 7c. Miss Rates

| File | Worker Found | Buddy Adds | Buddy Removes/Merges | Miss Rate |
|------|-------------|-----------|---------------------|-----------|
| CD-001 | 19 | +1 soft | -1 debatable | 5.3% |
| CD-002 | 22 | 0 | -1 | 0% (4.5% correction) |
| CD-003 | 24 | 0 | -1 flagged | 0% (4.2% flagged) |
| CD-004 | 20 | +1 | -2 | 5.0% (10% correction) |
| CD-005 | 27 | 0 | -1 | 0% (3.7% correction) |
| CD-006 | 36 | 0 | -1 | 0% (2.8% correction) |
| **Average** | **24.7** | **0.33 adds** | **1.17 removes** | **1.7% miss, 4.2% correction** |

**Key insight:** Wave 3 workers had the LOWEST miss rate and correction rate of all three waves (Wave 1: 2.9% miss / 7.8% correction; Wave 2: 3.2% miss / 7.9% correction; Wave 3: 1.7% miss / 4.2% correction). The Wave 1 and Wave 2 retro learnings demonstrably improved worker performance. Workers applied phantom tests, infrastructure exclusions, and gesture merge rules more consistently.

### 7d. Cross-Wave Quality Comparison

| Metric | Wave 1 (OD) | Wave 2 (AD) | Wave 3 (CD) |
|--------|-------------|-------------|-------------|
| Avg raw elements/file | 27.5 | 27.7 | 24.7 |
| Avg corrected/file | 26.5 | 27.0 | 24.0 |
| Miss rate | 2.9% | 3.2% | 1.7% |
| Correction rate | 7.8% | 7.9% | 4.2% |
| Phantom elements | 3 | 2 | 0 |
| Infrastructure-as-gesture | 3 | 1 | 0 |
| Sub-element inflation | 3 | 2 | 2 |
| Most common error | Phantoms | Gesture oversplitting | Sub-element granularity |

### 7e. Final Taxonomy Recommendation

After 18 files and 465 elements across 3 families:

**The I/G/C taxonomy with 2 exclusion filters is STABLE and RECOMMENDED for production use.**

**Core Model:**
- **Instrument:** Orientation metadata device. Removal test: reader loses awareness of position, identity, or reading mode. ~32% of elements.
- **Gesture:** CSS-encoded shift in reading experience. Coordination test: 2+ CSS properties shift together to change reading mode. ~31% of elements.
- **Component:** Structured content container with defined slots. Slot test: has reusable content slots with consistent structure. ~37% of elements.

**Exclusion Filters:**
1. **Phantom filter:** Zero DOM instances = do not catalog.
2. **Infrastructure filter:** Skip `::selection`, `:focus-visible`, `@media print`, `@media (prefers-reduced-motion)`, `.skip-link`.

**Supplementary Annotations (applied as flags, not separate categories):**
- **Sub-element:** Part of a larger Instrument/Component. Merge unless it passes the Evidence DNA test.
- **Compositional gesture:** Emergent from element arrangement, not CSS properties. Flag but accept.
- **Taxonomy-resistant:** Dual-role elements that span categories. Assign primary category, note secondary.
- **Structural marker:** Zero-slot rendered elements with dedicated classes. Classify as Component with annotation.
- **Modifier:** CSS pattern that alters an existing element (double-class). Note as implementation detail unless it creates a reading-register shift.

**Grand totals after 3 waves:**

| Category | Count | % |
|----------|-------|---|
| Instruments | 150 | 32.3% |
| Gestures | 144 | 31.0% |
| Components | 171 | 36.8% |
| **Total** | **465** | 100% |

The ~1/3 : ~1/3 : ~1/3 distribution is remarkably stable across all three families, suggesting this reflects a genuine structural property of well-designed pages rather than an artifact of the taxonomy.
