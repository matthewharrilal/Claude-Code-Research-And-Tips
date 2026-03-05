# Wave 3 CD -- Fresh-Eyes Audit

**Auditor:** Independent, zero prior context on Waves 1 or 2
**Source:** `wave-3-retro.md` (331 lines), spot-checked against `cd-001-findings.md`, `cd-003-findings.md`, `cd-005-findings.md`, `cd-006-findings.md`
**Comparison:** `wave-1-od/wave-1-auditor.md` (103 lines), `wave-2-ad/wave-2-auditor.md` (104 lines)

---

## 1. Taxonomy Coherence

The I/G/C model is applied MORE consistently in Wave 3 than in either prior wave. The improvement is measurable: zero phantom elements, zero infrastructure-as-gesture errors, and the lowest miss rate (1.7%) and correction rate (4.2%) of all three waves. Workers clearly absorbed the filters from Waves 1 and 2.

**Where the model holds well:**

- **Instruments:** The transition grammar elements (Smooth, Bridge, Breathing dividers) are classified as Instruments, which is defensible -- they orient the reader to a structural boundary. The compound instruments (TOC with density annotations, section meta labels with triple-coordinate encoding) are genuinely novel wayfinding devices that sit cleanly in the Instrument category.
- **Components:** The new container types (Breathing Zone, Choreography Hub/Spoke, Z-Hero Grid) are cleanly identified via the slot test. Each has defined structural slots with varying content. No disagreement from this auditor.
- **Gestures:** The combination-specific gestures (Z-to-Spiral temperature gradient, Tidal Width Modulation, Core Abstraction Internal CRESCENDO) are multi-property coordinated shifts that change reading register. They pass the gesture definition without stretching it.

**Where the model strains:**

- **Compositional gestures remain uncomfortable.** CD-005's WAVE Density Oscillation and Velocity Interleaving are page-level patterns emergent from element arrangement, not from CSS properties. The retro correctly flags these as taxonomy-stretching and proposes a "compositional gesture" sub-type. This is the right solution -- but it means the gesture definition is now bifurcated: CSS-encoded gestures (detectable in the stylesheet) vs. compositional gestures (detectable only by analyzing element placement). A catalog consumer needs to know which type they are working with, because one can be programmatically verified and the other cannot.
- **Breathing Zone dual-role is handled inconsistently across files.** In CD-001, the Breathing Zone is cataloged as a Component (#19) and its compression/release pattern is a separate Gesture (#9). This is clean. But the retro's transition grammar table lists "BREATHING" transitions as a category alongside SMOOTH and BRIDGE -- implying Breathing Zones are also transition instruments. The same physical element is simultaneously a Component (container with slots), participant in a Gesture (compression/release), and an Instrument (transition boundary marker). The retro's "assign primary, note secondary" convention handles this, but it means this element has THREE relevant categories, not two. The convention assumes binary dual-role; CD introduces ternary.

**Verdict:** Strong improvement over prior waves. The core model holds for ~92% of elements. The remaining ~8% are genuinely difficult cases that any taxonomy would struggle with. The compositional gesture bifurcation should be documented as a formal sub-type, not just a flag.

---

## 2. Cross-File Pattern Validity

The retro identifies three families of cross-file patterns: Universal (18/18 files), Family-Specific (per-family), and CD-Only. Evaluating each:

**Universal Patterns (10 patterns across 18/18 files):**

The Wave 1 auditor flagged "Code Block Dark Inversion" as an industry-standard technique elevated to pattern status. That concern remains valid for 3 of the 10 universal patterns:

- **Typography Trinity** (serif/sans/mono): This is standard multi-font web practice, not design-system-specific vocabulary.
- **Responsive Collapse** (768px/960px breakpoints): Nearly every responsive website does this. The specific breakpoints are design-system choices, but the pattern is universal.
- **Structural Border Hierarchy** (3px/1px/4px): Mild case. The specific 3-tier system is design-system-specific, but "thick borders for structure, thin for separation" is a general practice.

The remaining 7 universal patterns are genuinely design-system-specific: Meta Line, Callout System, Essence Serif Shift, Zone Background Differentiation, Header, Footer, and the callout system's 5-variant structure are all clearly designed vocabulary, not industry conventions.

**CD-Only Patterns (9 patterns):**

These are the retro's strongest contribution. Each passes the "could this have appeared in OD or AD?" test:

- **Transition Grammar (3-type):** Cannot exist in single-pattern pages. A page with one axis pattern needs no transition management. This is definitionally combination-specific.
- **TOC with Density Annotations:** Cannot exist when there is only one density/axis pattern per page.
- **Section Meta Label (triple-coordinate):** Cannot exist when sections share a single organizational pattern.
- **Tidal Width Modulation:** Requires two registers (philosophical/technical) coexisting with different spatial treatments. Possible in AD but not observed.
- **CRESCENDO Self-Awareness:** The density meter making the density gesture visible is a self-referential device that requires both the instrument and the gesture to exist simultaneously. OD has neither; AD has axis instruments but not density meters.

The remaining 4 (Core Abstraction Internal CRESCENDO, Z-Sweep Diagonal Alternation, Breathing Zone as Component, Confidence Gap Spacers) are more arguable -- see Section 6 for detailed assessment.

**Verdict:** 7 of 10 universal patterns are genuine shared vocabulary; 3 are industry-standard practices. 5 of 9 CD-only patterns are definitionally combination-specific and strongly supported. The pattern analysis is the retro's best section.

---

## 3. Corrected Counts Defensibility

The correction table claims:

| File | Raw | +Adds | -Removes | =Corrected | I | G | C |
|------|-----|-------|----------|------------|---|---|---|
| CD-001 | 19 | +1 | -1 | **19** | 7 | 5 | 7 |
| CD-002 | 22 | 0 | -1 | **21** | 8 | 7 | 6 |
| CD-003 | 24 | 0 | -1 | **24** | 6 | 7 | 11 |
| CD-004 | 20 | +1 | -2 | **19** | 5 | 6 | 8 |
| CD-005 | 27 | 0 | -1 | **26** | 7 | 8 | 11 |
| CD-006 | 36 | 0 | -1 | **35** | 8 | 12 | 15 |
| **TOTAL** | **148** | **+2** | **-6** | **144** | **41** | **45** | **58** |

**Arithmetic check:**

- CD-001: 19 + 1 - 1 = 19. Correct.
- CD-002: 22 + 0 - 1 = 21. Correct.
- CD-003: 24 + 0 - 1 = 23, but the table says **24**. The retro says Islands Density Spacing (#7) was "flagged" but the corrected count seems to NOT remove it -- the notation says "-1 (islands spacing as single-property gesture, flagged)" which implies flagged but retained. If retained, then 24 + 0 - 0 = 24 is correct and the "-1" column is misleading. If removed, then the corrected total should be 23. **The table is ambiguous.** The Notes section says "Islands Density Spacing (#7) flagged as weak gesture... Passes the secondary calibration test... but fails the primary test." This reads as "debatable, kept for now" which makes the corrected count of 24 defensible but the "-1" in the removes column misleading -- it should be "-0 (1 flagged)" or the count should be 23.
- CD-004: 20 + 1 - 1 - 1 = 19. Correct. The table shows -1 (footer merge) and -1 (version badge merge) = -2 total, plus +1 (spoke promotion). 20 + 1 - 2 = 19.
- CD-005: 27 + 0 - 1 = 26. Correct.
- CD-006: 36 + 0 - 1 = 35. Correct.
- Total: 19 + 21 + 24 + 19 + 26 + 35 = 144. Correct.
- I/G/C: 41 + 45 + 58 = 144. Correct.

**Spot-checking I/G/C breakdown against source files:**

- **CD-001 findings:** Lists 7 Instruments, 6 Gestures, 6 Components = 19 total. But the retro says corrected is 7I/5G/7C. The retro's notes say syntax highlighting (#13) is debatable as a gesture (potentially -1G) and comparison table is a soft miss (+1C potential). If the comparison table is added as a Component and syntax highlighting reclassified/removed, that would be 7I, 5G, 7C = 19 -- matching. But the original findings file clearly lists 6G and 6C. The retro's I/G/C breakdown (7/5/7) reflects the corrected state where one gesture was effectively removed and one component was effectively added. This is internally consistent but the column headers should say "Corrected I / Corrected G / Corrected C" to avoid ambiguity with the raw counts.

- **CD-003 findings:** Lists 6 Instruments, 7 Gestures, 11 Components = 24 total. Retro says 6/7/11 = 24. Matches.

- **CD-006 findings:** Lists 8 Instruments, 13 Gestures, 15 Components = 36 total. Retro says corrected 8/12/15 = 35 (one gesture removed). This is consistent: Responsive 480px typography compression was the weakest entry and was removed, bringing gestures from 13 to 12.

**Verdict:** Arithmetic is correct. One ambiguity: CD-003's "-1" in the removes column is misleading if the item was flagged but retained. The I/G/C breakdowns in the corrected table reflect post-correction states, not raw states -- this should be labeled explicitly.

---

## 4. Boundary Case Consistency

**Consistent resolutions across CD files:**

1. **Version Badge treatment.** CD-001 keeps it separate; CD-004 buddy merges it into meta-line. The retro acknowledges this inconsistency explicitly ("inconsistent with other files"). This is the SAME inconsistency the Wave 1 auditor flagged in OD and the Wave 2 auditor flagged in AD. It has persisted across all three waves. The "Evidence DNA precedent" is still being invoked to justify retention in some files and ignored in others. **This is the single most persistent unresolved boundary case in the entire catalog.**

2. **Sub-element merge rule.** CD-004 merges Footer Rule into Footer Identity Bar and Version Badge into Meta Line. CD-005 merges Task Checkbox into Task Component. These are all defensible and consistently applied within Wave 3 (with the CD-001 exception above). Improvement over Wave 2's inconsistent handling.

3. **Compositional gestures.** CD-005's WAVE Density Oscillation and Velocity Interleaving are flagged as "taxonomy-stretching but accepted." This is the right call and applied consistently -- no other CD file has emergent compositional patterns that were NOT flagged.

4. **Breathing Zone classification.** CD-001 catalogs it as Component with a separate Gesture for its variation pattern. CD-002, CD-004, CD-005, CD-006 use it as a transition element in the transition grammar table. This dual treatment is consistent: the container is always a Component; the transition function is described at the page-architecture level, not as a separate catalog entry.

**Inconsistent resolution:**

5. **Footer treatment.** CD-001 catalogs the Page Footer as an Instrument (#7). CD-003 catalogs the Page End Marker as an Instrument (#5). CD-005 catalogs the Footer Identity Bar as an Instrument (#7). CD-006 catalogs Footer Identity Bar as Instrument (#8). But CD-003's findings notes section says the Footer is "Infrastructure bookend. Minimal semantic content... Could be considered a minor instrument but is standard page infrastructure present on all explorations." So the CD-003 findings file simultaneously catalogs AND questions the footer's inclusion. The retro does not flag this ambivalence. Across the full 18-file catalog, footer is classified as Instrument in every file, but CD-003's internal equivocation suggests at least one worker considered it infrastructure. This is a minor issue -- the consensus classification (Instrument) is reasonable -- but the retro should note the dissent.

**Verdict:** Boundary cases are handled more consistently than in prior waves. The Version Badge inconsistency is now a 3-wave-old problem that should be resolved with a definitive rule. The compositional gesture flag is well-applied. One minor internal contradiction in CD-003 footer treatment.

---

## 5. Missing Perspectives

The retro does not ask the following questions that it should:

### 5a. Carried from Wave 1 (still unanswered)

**1. "Does element count reflect file complexity or worker thoroughness?"**

The Wave 1 auditor raised this. The Wave 2 auditor repeated it with stronger evidence (suspiciously tight averages). The Wave 3 retro provides NEW evidence that should settle this -- CD has 24.0 avg elements vs. OD's 26.5 and AD's 27.0. The retro explains this as "CD reuses vocabulary rather than inventing new elements." But this explanation was not tested against the alternative hypothesis: that CD workers were calibrated differently or that CD files are genuinely simpler. CD-001 has 1654 lines; CD-006 has 2085 lines. OD-006 has similar length and 41 elements. CD-006 has 36. Is the difference (5 elements) explained by vocabulary reuse, or by the CD-006 worker's different granularity threshold?

The retro's explanation is plausible but untested. A simple test: count the number of UNIQUE CSS classes per file and compare to element counts. If CD files have fewer unique classes, the "reuse" explanation holds. If they have comparable class counts but fewer catalog entries, the granularity threshold explanation is more likely.

**2. "Is I/G/C the right taxonomy?"**

Three waves, 465 elements, ~50 boundary cases (~11% cumulative). The Wave 1 auditor asked if a different decomposition (by function: wayfinding / rhythm / content-delivery / emphasis) would produce fewer boundary cases. Nobody has tested this. The boundary-case rate has decreased (from ~19% in OD to ~8% in CD), but that improvement may reflect better worker training rather than the taxonomy being correct. A correct taxonomy should have a stable boundary-case rate; the declining rate suggests workers are being trained to classify borderline cases the "right" way rather than the taxonomy naturally accommodating them.

### 5b. Carried from Wave 2 (still unanswered)

**3. "Are worker rankings meaningful?"**

The retro ranks all 6 workers and 6 buddies. The Wave 2 auditor noted that ranking criteria mix thoroughness, accuracy, and insight, creating an incentive toward conservatism. The Wave 3 retro does the same thing. CD-001 worker ranks 5th (19 elements) despite identifying "the most architecturally significant insight in Wave 3" (CRESCENDO self-awareness). CD-006 worker ranks 1st (36 elements) partly because high counts correlate with high rank. This ranking still punishes analytical depth and rewards volume.

**4. "Is the buddy process catching the right things?"**

The Wave 2 auditor noted that buddies function as a conservatism filter (every correction is a removal). In Wave 3, the buddy adds are +2 total across all files; the removals are -6. The 3:1 removal-to-addition ratio persists. The retro celebrates this as lower miss rates, but the alternative interpretation is that workers have internalized the buddy's conservatism and are self-censoring borderline elements. The declining miss rate (2.9% -> 3.2% -> 1.7%) paired with the declining correction rate (7.8% -> 7.9% -> 4.2%) is consistent with workers becoming more conservative, not more accurate.

### 5c. New from Wave 3

**5. "What is the relationship between line count and element count?"**

CD-006 (2085 lines, 36 elements) has ~58 lines per element. CD-001 (1654 lines, 19 elements) has ~87 lines per element. Is CD-006 genuinely richer or does it just have more content that happens to use more components? The retro notes that crown jewel files are consistently ~35-45% above family average but does not ask WHY. Possible explanations: (a) richer pages deploy more vocabulary, (b) longer pages have more sections that each use the baseline vocabulary, (c) CD-006 was designed to use all patterns (it is the "pilot migration"). If (c), then CD-006's outlier status is by construction, not by emergence -- and using it as evidence that "vocabulary richness scales sub-linearly with page complexity" is circular.

**6. "Is the ~1/3 : ~1/3 : ~1/3 distribution real or an artifact?"**

The retro presents the I/G/C distribution (32.3% / 31.0% / 36.8%) as "remarkably stable" and suggests it "reflects a genuine structural property of well-designed pages." But the Wave 2 auditor raised the calibration anchoring hypothesis and it was not tested. The distribution could reflect: (a) genuine structural properties, (b) the calibration document's implicit norms, or (c) workers instinctively seeking balance. A simple test: give the same file to workers from a different design background with no calibration document and see if they produce a different distribution.

**7. "What happens to transition grammar outside CD?"**

The retro identifies transition grammar as CD's defining innovation. But it does not ask: should OD and AD files have transition grammar too? OD-006 (41 elements, the OD crown jewel) presumably has section transitions. Were those transitions not cataloged because the workers were not looking for them, or because OD genuinely does not need them? If the former, the OD catalog is incomplete. If the latter, the retro should explain why single-pattern pages do not need transition management.

---

## 6. CD-Specific: Combination Novelty

The retro claims CD produces elements "impossible in OD or AD alone." Testing this claim against the 9 CD-only patterns:

### Definitionally combination-specific (strong evidence):

1. **Transition Grammar (SMOOTH/BRIDGE/BREATHING):** Requires transitions between different axis patterns. A page with one axis pattern has no axis-to-axis transitions. **Genuinely novel.**

2. **TOC with Density Annotations:** Requires sections with different axis patterns to annotate. A single-axis TOC would just show section titles. **Genuinely novel.**

3. **Section Meta Label (triple-coordinate):** Encodes section number + axis pattern + density type. Single-axis pages have no axis variation to encode. **Genuinely novel.**

4. **CRESCENDO Self-Awareness (density meter):** Requires both a density gesture AND an instrument that makes it visible. This is a self-referential feedback loop between two vocabulary layers. **Genuinely novel.** However, this could theoretically appear in an OD file that implements CRESCENDO density -- it does not strictly require combination. It requires density awareness, which happens to be most prominent in combination pages.

5. **Breathing Zone as Component:** CD-001's breathing zones are structural containers between CRESCENDO sections. OD files have section spacing; AD files have breathing zones. But the breathing zone as a COMPONENT with defined slots (inner wrapper, essence pullquote content) and a GESTURE (compression/release pattern across instances) is CD-specific. **Novel as a component, but the concept of inter-section space is not novel.**

### Arguably combination-specific (moderate evidence):

6. **Core Abstraction Internal CRESCENDO:** A component with two opposing reading registers (warm serif top, dark mono bottom). This is a design pattern -- a component with internal register contrast. An AD file could have this without being a combination page. The "Internal CRESCENDO" label ties it to the page-level CRESCENDO gesture, but the component pattern itself is not strictly combination-dependent. **Novel naming, but the pattern could appear in AD.**

7. **Z-Sweep Diagonal Alternation:** Grid-template-areas flip with golden ratio. This is a Z-pattern implementation detail. AD-001 (Z-pattern) or AD-006 (compound) could implement this without being a combination page. **Not strictly combination-specific.**

8. **Tidal Width Modulation:** Content width oscillates between 60% (philosophical) and 100% (technical). This maps semantic register to physical width. An AD file with dual registers could implement this. **Not strictly combination-specific -- it requires dual semantic registers, which correlate with but are not caused by combination.**

9. **Confidence Gap Spacers:** Empty divs with expanding whitespace encoding confidence degradation. This is an OD-style confidence encoding technique. OD-004 (confidence dimension) uses confidence strata. **Plausibly OD-specific, not CD-specific.**

### Assessment:

Of the 9 CD-only patterns, **3 are definitionally combination-specific** (Transition Grammar, TOC with Density Annotations, Section Meta Label). **2 are strongly associated** with combination but could theoretically appear in single-family pages (CRESCENDO Self-Awareness, Breathing Zone as Component). **4 are design techniques that correlate with but are not caused by combination** (Internal CRESCENDO, Z-Sweep, Tidal Width, Confidence Gap Spacers).

The retro's claim is partially substantiated. The transition grammar and compound orientation instruments are genuinely novel. The combination-specific gestures are less convincing -- they are interesting design patterns that happen to appear in combination pages but are not logically impossible in single-family pages.

**The strongest claim is not "CD produces elements impossible in OD or AD" but "CD REQUIRES elements that OD and AD do not need."** Transition grammar is required when you combine axis patterns. Compound orientation instruments are required when sections use different organizational modes. The requirement, not the impossibility, is the defensible claim.

**Verdict:** Combination novelty is PARTIALLY substantiated. Transition grammar (3 types) and compound orientation instruments are genuinely novel and required. Combination-specific gestures are interesting but not strictly impossible outside CD. The retro should reframe the claim from "impossible" to "required."

---

## Summary Verdict

| Dimension | Rating | Key Issue |
|-----------|--------|-----------|
| Taxonomy coherence | **Strong, best of 3 waves** | Compositional gesture bifurcation should be formalized; Breathing Zone ternary role is new |
| Cross-file pattern validity | **Mostly genuine** | 3 of 10 universal patterns are industry-standard, not system-specific (same issue as Wave 1) |
| Corrected counts | **Defensible with 1 ambiguity** | CD-003 "-1" column misleading if item was flagged but retained |
| Boundary case consistency | **Good, improved** | Version Badge inconsistency persists from Wave 1; all other cases handled well |
| Missing perspectives | **7 unasked questions** | 4 carried from prior waves, 3 new. Calibration anchoring and worker conservatism remain untested |
| Combination novelty | **Partially substantiated** | Transition grammar = genuinely novel. Combination gestures = interesting but not strictly impossible outside CD |

**Overall:** The Wave 3 retro is the most polished and internally consistent of the three waves. Workers demonstrably improved from Wave 1 and 2 feedback (zero phantoms, zero infrastructure errors, lowest miss/correction rates). The CD-specific analysis -- particularly transition grammar and compound orientation instruments -- is analytically strong.

The retro's primary weakness is the same one the Wave 1 and Wave 2 auditors identified: treating declining error rates as proof of taxonomy correctness rather than as evidence of worker training convergence. The ~1/3 distribution stability, the declining boundary-case rate, and the tightening average element counts are all consistent with EITHER (a) the taxonomy being genuinely correct OR (b) workers converging on a shared interpretation through calibration. No test has been proposed to distinguish these hypotheses.

The second weakness is the novelty claim. "CD produces elements impossible in OD or AD alone" is overstated. The defensible claim is "CD requires elements that OD and AD do not need" -- transition grammar and compound orientation. The combination-specific gestures are design techniques that happen to appear in CD but are not logically impossible elsewhere.

Despite these weaknesses, the catalog is analytically useful and the retro is honest about its boundary cases. The I/G/C model with 2 exclusion filters and 5 supplementary annotations is a workable classification system for this design system's vocabulary.
