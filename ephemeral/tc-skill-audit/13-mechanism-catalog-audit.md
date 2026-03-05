# Mechanism Catalog Audit: Genuine Vocabulary vs Compressed Research Conclusions

**Auditor:** mechanism-auditor (Task #24)
**File Audited:** `design-system/compositional-core/grammar/mechanism-catalog.md` (752 lines)
**Companion File:** `design-system/compositional-core/grammar/mechanism-combinations.md` (448 lines)
**Date:** 2026-03-01

---

## Executive Summary

The mechanism catalog is the design system's VOCABULARY -- 18 CSS techniques presented as tools available for composition. This audit evaluates whether these mechanisms are genuinely available techniques (MENU) or compressed research conclusions (PRESCRIPTION), whether techniques are missing, and whether the catalog channels builders toward specific approaches.

**Overall Verdict:** The catalog is the strongest file in the compositional core. It mostly succeeds at being vocabulary rather than prescription. But it has 3 significant bias patterns and 4 missing technique families that limit compositional range.

---

## 1. Available vs Derived: Per-Mechanism Assessment

For each of the 18 mechanisms, I applied two tests:
- **Availability Test:** Is this a CSS technique any builder could independently discover?
- **Derivation Test:** Does this require knowledge of specific DD/OD/CD experiments to understand?

| # | Mechanism | Verdict | Reasoning |
|---|-----------|---------|-----------|
| 1 | Border-Weight Gradient | AVAILABLE | Standard CSS technique (border-width varies). The 4px/3px/2px/1px values are specific but the technique is universal. |
| 2 | 2-Zone Component DNA | AVAILABLE but NAMED | The label+body split is universal. The name "2-Zone DNA" and the specific uppercase/0.1em/0.75rem prescription is DERIVED from DD/OD experiments. |
| 3 | Solid Offset Depth | AVAILABLE | Standard ::after pseudo-element. The prohibition on box-shadow makes this the only option, which is correctly noted. |
| 4 | Spacing Compression | AVAILABLE | Standard padding variation. The inverse-confidence framing is DERIVED (from OD-004 geological metaphor) but the technique itself is universal. |
| 5 | Dense/Sparse Alternation | AVAILABLE but FRAMED | Alternating padding is universal. The INHALE/EXHALE breathing metaphor in the name is DERIVED from DD-001 PULSE pattern research. |
| 6 | Width Variation | AVAILABLE | Standard max-width variation. Truly generic. |
| 7 | Zone Background Differentiation | AVAILABLE but PRESCRIBED | Background variation is universal. The specific 4-token system (sparse/dense/breathing/bedrock) with those exact names and hex values is DERIVED from OD-004 zone naming. The "Semantic Mappings" table is effectively a recipe. |
| 8 | Scroll Witness / Sticky TOC | AVAILABLE | Standard sticky positioning + intersection observer. |
| 9 | Confidence/Priority Encoding via Color | AVAILABLE | Standard border-color semantics. |
| 10 | Border-Left Semantic Signal | AVAILABLE but OVERLAPS | This is not a separate mechanism from #1 and #9. It's "4px left border with color" -- which is the intersection of border-weight (#1) and color encoding (#9). |
| 11 | Typographic Scale Jumping | AVAILABLE | Standard CSS type scale. The ~1.5x ratio is a recommendation, not a derivation. |
| 12 | Progressive Disclosure | AVAILABLE but CONFLATED | The name says "progressive disclosure" (an interaction pattern: show/hide) but the CSS is just padding compression (same as #4). The mechanism as documented is NOT progressive disclosure -- it's a density gradient. |
| 13 | Dark Header + 3px Border | AVAILABLE but IDENTITY-LOCKED | This is a KortAI identity pattern, not a reusable mechanism. The "Transfer test: YES" claim is misleading -- it transfers within KortAI but not to other systems. |
| 14 | Footer Mirror | AVAILABLE but IDENTITY-LOCKED | Same as #13. Header/footer symmetry is universal; the specific dark+3px-red pattern is identity. |
| 15 | Bento Grid | AVAILABLE | Standard CSS Grid with span modifiers. Genuinely reusable. |
| 16 | Drop Cap | AVAILABLE | Standard ::first-letter. Genuinely reusable. |
| 17 | Code Block | AVAILABLE but IDENTITY-LOCKED | Dark code blocks are universal. The specific KortAI syntax highlighting palette (7 tokens) is identity. |
| 18 | Data Table | AVAILABLE | Standard table styling. The mono-headers convention is a recommendation. |

**Summary:**
- **Genuinely available (technique is universal):** #1, #3, #6, #8, #11, #15, #16, #18 (8 mechanisms)
- **Available but named/framed with research baggage:** #2, #4, #5, #7, #9 (5 mechanisms)
- **Available but identity-locked (KortAI-specific, not transferable):** #13, #14, #17 (3 mechanisms)
- **Problematic (overlap, conflation, or misidentification):** #10, #12 (2 mechanisms)

---

## 2. Menu vs Example: Presentation Analysis

**Q: Is the catalog presented as MENU (exhaustive) or EXAMPLE (illustrative)?**

The catalog presents as **exhaustive MENU**: "18 Reusable CSS Techniques" (title), "The Mechanisms (18 Total)" (section header), and a summary table treating these as the complete set. The framing implies there are exactly 18 techniques and a builder should choose from among them.

This is a problem. CSS composition has hundreds of available techniques. The catalog captures 18 that were OBSERVED in DD/OD/CD explorations. It's actually a **compressed observation set** presented as a **complete vocabulary**.

**Evidence:** The catalog introduction says "A mechanism is a CSS technique that works across MULTIPLE metaphors, verified by two tests: Name Test and Transfer Test." This is good -- it defines inclusion criteria. But it then presents 18 mechanisms as if these are ALL the techniques that pass those tests, when in fact they're all the techniques that were USED in 6 DD + 6 OD + 6 CD explorations and extracted.

**Recommendation:** Add framing language: "These 18 mechanisms were extracted from validated explorations. They are not exhaustive -- builders may discover additional mechanisms that pass the Name Test and Transfer Test."

---

## 3. Missing Mechanisms

I compared the catalog against (a) CSS techniques commonly used in documentation/editorial design and (b) techniques actually used in DD/CD explorations that are NOT cataloged.

### 3A. Missing from catalog but USED in explorations

| Technique | Where Used | Why It's Missing |
|-----------|-----------|-----------------|
| **Inline code styling** (mono font + subtle background + 1px border) | CD-006 lines 504-510 | Treated as part of Code Block (#17) but functionally distinct. Inline code is a component-level pattern, not a block pattern. |
| **File tree indentation** (nested padding-left levels) | CD-006 lines 515-546 | A genuine spatial hierarchy mechanism (4 indent levels). Not cataloged because it only appeared in CD-006. |
| **Reasoning columns** (2-column grid comparison) | CD-006 lines 691-767 | A genuine layout mechanism for binary comparison. Uses grid + ::before for list markers. |
| **Decision matrix** (labeled table with recommended row highlighting) | CD-006 lines 551-601 | Enhanced table beyond #18, with semantic row highlighting. |
| **Task checklist** (checkbox + list items) | CD-006 lines 646-686 | Interactive component pattern. |
| **Section divider with label** (::before line + positioned label) | DD-006 lines 690-715 | A transition mechanism using pseudo-elements to create labeled breaks. Not in the Transition Grammar section. |
| **Fractal nested visualization** (nested borders with progressive rgba) | DD-006 line 299 | Uses `rgba(232, 48, 37, 0.03)` -- technically a transparency/layering technique. |
| **Version badge** (inline pill with border) | CD-006 lines 270-276 | Micro-component for metadata inline display. |

### 3B. Standard CSS techniques NOT in catalog that pass Name + Transfer tests

| Technique | Description | Why It Should Be Considered |
|-----------|------------|---------------------------|
| **Ordered list styling** (custom counters, hanging indents) | `counter-reset` / `counter-increment` / custom list markers | Universal for procedural content. Completely absent from catalog despite being fundamental to documentation. |
| **Pull quote / blockquote** | Distinct from callout (#2). A pull quote is typographically featured inline content, not a labeled box. | Editorial mechanism. The catalog has no equivalent. |
| **Horizontal rule variations** | Semantic dividers beyond the transition grammar's 3 types | The transition grammar section partially covers this but frames it as rules, not available tools. |
| **Figure + figcaption** | Image/diagram container with semantic caption | Not present despite being fundamental for documentation with visuals. |
| **Multi-column layout** | CSS columns for dense reference content | Absent. Would be useful for glossaries, indexes, API references. |
| **Sticky elements beyond TOC** | Sticky headings, sticky context bars | #8 only covers TOC. Sticky headers or sticky context bars are different applications. |

---

## 4. Channeling Analysis

**Q: Does the catalog CHANNEL toward specific compositional approaches?**

**YES. Three significant channeling patterns detected:**

### 4A. Vertical-flow bias

All 18 mechanisms operate on vertical flow (top-to-bottom scrolling). The catalog has:
- 3 SPATIAL mechanisms (#5, #6, #15) -- only #15 (bento) breaks vertical-only flow
- 5 STRUCTURE mechanisms (#8, #12, #13, #14, #18) -- all vertical

This channels builders toward single-column documentation layouts. The only horizontal composition tool is Bento Grid (#15), which is presented as one option among 18 rather than as a fundamental spatial alternative.

**Missing:** Side-by-side comparisons (used in CD-006 reasoning component but not cataloged), sidebar layouts, asymmetric column layouts, overlapping content zones.

### 4B. Border-left dominance

The catalog is heavily weighted toward border-left as the primary visual signal:
- #1 (Border-Weight Gradient): border-left varying thickness
- #2 (2-Zone Component DNA): border-left 4px
- #9 (Confidence Encoding): border-left color
- #10 (Border-Left Semantic Signal): border-left 4px

4 of 18 mechanisms (22%) use the exact same CSS property (border-left). This is not 4 distinct mechanisms -- it's one mechanism (border-left) with 4 applications:
1. Thickness varies to encode hierarchy
2. Fixed thickness signals callout structure
3. Color varies to encode category
4. Fixed thickness + variable color signals semantics

Cataloging these as separate mechanisms inflates the vocabulary count and channels every builder toward "put a left border on it" as the default compositional move. In the actual explorations, border-left IS the dominant pattern (nearly every callout, every section marker, every emphasis element).

### 4C. Density-pattern bias

The catalog's SPATIAL and DEPTH categories are dominated by density concepts:
- #4 Spacing Compression
- #5 Dense/Sparse Alternation
- #7 Zone Background Differentiation
- #12 Progressive Disclosure (actually density gradient)

These all come from the DD (Density Dimension) exploration stage. 4 of 18 mechanisms encode density as their primary semantic -- a direct artifact of Stage 2 being the Density exploration.

If Stage 2 had been "Rhythm" or "Contrast" or "Emphasis," the catalog would contain different mechanisms. The catalog reflects the research path, not the full vocabulary space.

---

## 5. Taxonomy Assessment

**Q: Are the categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation) the right taxonomy?**

**The taxonomy is FUNCTIONAL but not NATURAL.**

The 5 categories map to what the mechanisms DO in the KortAI system:
- Spatial = layout structure
- Hierarchy = importance encoding
- Component = internal component patterns
- Depth/Emphasis = zone differentiation
- Structure/Navigation = page chrome

An alternative taxonomy based on CSS PROPERTY FAMILIES would be more natural:

| CSS Property Family | Mechanisms |
|--------------------|----|
| **Border** (width, style, color, position) | #1, #2, #9, #10, #13, #14, #18 |
| **Spacing** (padding, margin, gap) | #4, #5, #6, #12 |
| **Background** (color, zone differentiation) | #7 |
| **Typography** (font-size, font-family, letter-spacing) | #11, #16 |
| **Layout** (grid, sticky, flex) | #8, #15 |
| **Pseudo-elements** (::after, ::first-letter) | #3, #16 |
| **Color** (semantic accent mapping) | #9 |

This reveals the actual distribution: **7 of 18 mechanisms are border techniques** (39%). The current taxonomy obscures this concentration by distributing border techniques across Hierarchy, Component, Depth, and Structure categories.

Neither taxonomy is "right" -- but the current one obscures the vocabulary's border-heavy concentration, which matters for builders trying to achieve variety.

---

## 6. Impact Profiles and Application Modes

**Q: Are the impact profiles/application modes useful guidance or premature optimization?**

### Impact Profiles

Each mechanism has a `Perceptual Effectiveness` rating (HIGH/MEDIUM/LOW) and an `Impact Profile` description.

**Assessment: USEFUL but UNVALIDATED.**

The ratings make intuitive sense (border-weight gradient = HIGH, spacing compression = LOW). But they're based on general perceptual principles, not measured data. The catalog doesn't cite which experiments validated these ratings.

The ceiling experiment's Mode 4 PA (9 auditors) found that 13 of 14 deployed mechanisms were NOT perceptually visible. This suggests the impact profiles are too optimistic -- mechanisms rated MEDIUM may actually be LOW in practice.

### Application Modes

Mechanism #1 has detailed PROGRESSIVE MODE vs DISCRETE MODE guidance. This is the most detailed application guidance in the catalog.

**Assessment: USEFUL and TRANSFERABLE for #1. Missing for others.**

The progressive/discrete distinction is genuinely useful vocabulary. But only #1 has it. If application modes are worth documenting for border-weight, they're worth documenting for spacing (#4), backgrounds (#7), and typography (#11) too. The inconsistency suggests #1 got extra attention because OD-004 (confidence encoding) was the primary case study, not because border-weight uniquely warrants modal guidance.

---

## 7. Vocabulary vs Prescription

**Q: Is the catalog written as VOCABULARY (available tools) or PRESCRIPTION (mandated usage)?**

**Mostly VOCABULARY, with prescription creeping in at the edges.**

### Vocabulary strengths (good):
- The Name Test / Transfer Test framing at the top is excellent
- "Reusable boundary" sections clearly separate mechanism from metaphor
- The Middle vs Ceiling selection logic (lines 26-42) is genuinely useful
- The distinction between "tools are identical" and "selection logic differs" is the catalog's best insight

### Prescription creep (problematic):

1. **Mechanism #7 Semantic Mappings table** (lines 269-277): Maps specific zone colors to specific content types ("Sparse = Introductory, Dense = Technical"). This crosses from vocabulary into recipe. A builder reading this will reach for the table instead of deriving their own mappings.

2. **Mechanism #13 + #14 identity lock-in**: "All explorations use identical dark header structure" and "all pages with footer." This prescribes that EVERY page must have dark header + dark footer, which is identity, not vocabulary.

3. **Transition Grammar section** (lines 625-707): "Every zone boundary... MUST use exactly one of these three types. 'No transition' is NOT a valid option." This is PRESCRIPTION, not vocabulary. It mandates 3 and only 3 transition types. A builder who discovers a 4th type (fade, progressive overlay, typographic shift) cannot use it without violating the catalog.

4. **Restraint Protocol** (lines 710-748): "No single viewport-height section may contain MORE THAN 4 distinct mechanisms simultaneously." This is a RULE, not vocabulary. It belongs in a validation/gates file, not in the mechanism catalog.

5. **Per-category selection protocol** (line 46): "Deploy AT LEAST ONE mechanism from each category." This is a GATE, not vocabulary. It should be in the gate runner, not the catalog.

---

## 8. Cross-Reference: Explorations vs Catalog

I sampled DD-001, DD-006, and CD-006 to check: do explorations use techniques NOT in the catalog?

### Techniques found in explorations but NOT in catalog:

| Technique | File | Description |
|-----------|------|-------------|
| Section divider with ::before pseudo-element | DD-006 line 696 | Horizontal rule with centered label using positioned pseudo-element |
| Fractal nested boxes with rgba layering | DD-006 line 299 | Progressive opacity reduction creating visual nesting |
| Inline code distinct from block code | CD-006 line 504 | Different styling for `<code>` outside `<pre>` |
| File tree with indentation levels | CD-006 line 515 | 4-level indentation hierarchy |
| 2-column reasoning grid | CD-006 line 716 | Grid comparison layout with ::before list markers |
| Task checklist with custom checkboxes | CD-006 line 646 | Styled checkbox squares with flex layout |
| Decision matrix with row highlighting | CD-006 line 551 | Table with `.recommended` row background |
| Version badge inline | CD-006 line 270 | Pill-like metadata display |
| Transition zones (smooth/bridge/breathing) | CD-006 line 773 | 3 distinct transition types with different CSS |

**9 techniques used in explorations are NOT in the catalog.** This confirms the catalog is not exhaustive -- it's a curated subset. Several of these (reasoning columns, file tree, task checklist) would pass the Name Test and Transfer Test.

---

## 9. Findings Summary

### Critical Findings

**F1: The catalog is an observation set presented as exhaustive vocabulary.**
18 mechanisms were extracted from DD/OD/CD explorations. At least 9 additional techniques used in those same explorations were NOT extracted. The catalog should acknowledge it's illustrative, not exhaustive.

**F2: Border-left is one technique presented as four mechanisms (#1, #2, #9, #10).**
This inflates the count from ~15 genuine mechanisms to 18, and channels builders toward border-left as the dominant compositional tool. Consider consolidating into "Border-Left Encoding" with subsections for weight, color, and structural signaling.

**F3: Three identity patterns (#13, #14, #17) are misclassified as transferable mechanisms.**
Dark header, dark footer, and dark code blocks with KortAI syntax colors are IDENTITY, not mechanisms. Their "Transfer test: YES" claims are only true within KortAI. These should be in identity/ or components/, not in the mechanism catalog.

**F4: Prescription creep in Transition Grammar and Restraint Protocol sections.**
The catalog mixes VOCABULARY (mechanisms 1-18) with RULES (transition grammar mandates, density caps, distribution requirements, per-category minimums). Rules belong in validation/ or gate-runner, not in the vocabulary file.

### Moderate Findings

**F5: Density-pattern bias from Stage 2 research path.** 4 of 18 mechanisms encode density. This is a research-path artifact, not a natural vocabulary distribution.

**F6: Mechanism #12 is misnamed.** "Progressive Disclosure" as documented is actually "Density Gradient Flow" -- it's padding compression (#4) applied to sequential phases. True progressive disclosure (show/hide, expand/collapse) is not in the catalog at all.

**F7: Application modes are inconsistently documented.** Only #1 has PROGRESSIVE/DISCRETE modes. If modes are useful, other mechanisms need them too (especially #4, #7, #11).

**F8: Vertical-flow bias excludes horizontal composition tools.** No mechanism addresses side-by-side comparison, sidebar layouts, or asymmetric columns -- despite these being used in CD-006.

### Positive Findings

**F9: The Name Test / Transfer Test framing is excellent.** Gives builders a clear, binary test for whether something is mechanism or metaphor. This is the catalog's strongest contribution.

**F10: The Middle vs Ceiling selection logic is genuinely insightful.** Lines 26-42 articulate the difference between independent deployment (content-structure mapping) and combined deployment (metaphor-driven multi-channel coherence). This is the kind of vocabulary guidance that enables composition rather than prescribing it.

**F11: "Reusable boundary" sections are well-drawn.** Each mechanism clearly states what IS the technique vs what is metaphor-specific. This separation is consistently maintained.

**F12: The mechanism-combinations.md companion is well-structured.** The 6 combination families, perceptual alignment principle, and anti-combination conflict types are genuinely useful compositional grammar. The anti-copying protocol is well-designed.

---

## 10. Recommendations

### For the TC Skill Update

1. **Reframe the catalog as illustrative, not exhaustive.** Add: "These 18 mechanisms were validated through DD/OD/CD explorations. Additional mechanisms exist. Builders who discover techniques passing the Name Test and Transfer Test should use them."

2. **Extract rules into validation layer.** Move Transition Grammar (lines 625-707), Restraint Protocol (lines 710-748), and per-category selection protocol (line 46) out of mechanism-catalog.md into a gates/rules file. The catalog should be pure vocabulary.

3. **Flag identity-locked mechanisms.** Mark #13, #14, #17 as "KortAI Identity" rather than "VERY HIGH" metaphor independence. Or move them to identity/ entirely.

4. **Consider consolidating border-left mechanisms.** #1, #2, #9, #10 could be one mechanism ("Border-Left Encoding") with 3 dimensions (weight, color, structural role). This more honestly represents the vocabulary.

5. **Add missing horizontal composition mechanism.** At minimum, document the 2-column comparison grid from CD-006 as a cataloged mechanism.

6. **Rename #12** from "Progressive Disclosure" to "Density Gradient Flow" or similar. Reserve "Progressive Disclosure" for actual show/hide interaction patterns if/when they're added.

7. **For dynamic Side B engagement:** When the TC skill reads the mechanism catalog at runtime, it should read it as ILLUSTRATIVE vocabulary, not as the complete set. The skill should be free to suggest mechanisms beyond the catalog if they pass the Name/Transfer tests.

---

## Appendix: Mechanism-by-Mechanism Quick Reference

| # | Name | Available? | Prescribed? | Identity-Locked? | Overlapping? |
|---|------|-----------|------------|-----------------|-------------|
| 1 | Border-Weight Gradient | YES | No | No | With #10 |
| 2 | 2-Zone Component DNA | YES | Mildly (specific uppercase/0.1em pattern) | No | No |
| 3 | Solid Offset Depth | YES | No | No | No |
| 4 | Spacing Compression | YES | No | No | With #12 |
| 5 | Dense/Sparse Alternation | YES | Mildly (INHALE/EXHALE framing) | No | No |
| 6 | Width Variation | YES | No | No | No |
| 7 | Zone Background Differentiation | YES | YES (Semantic Mappings table) | No | No |
| 8 | Scroll Witness / Sticky TOC | YES | No | No | No |
| 9 | Confidence/Priority Encoding | YES | No | No | With #1, #10 |
| 10 | Border-Left Semantic Signal | YES | No | No | With #1, #9 |
| 11 | Typographic Scale Jumping | YES | No | No | No |
| 12 | Progressive Disclosure | YES (misnamed) | No | No | With #4 |
| 13 | Dark Header + 3px Border | NO (identity) | YES | YES | With #14 |
| 14 | Footer Mirror | NO (identity) | YES | YES | With #13 |
| 15 | Bento Grid | YES | No | No | No |
| 16 | Drop Cap | YES | No | No | No |
| 17 | Code Block | Partially (dark bg universal, palette identity) | Mildly | Partially | No |
| 18 | Data Table | YES | No | No | No |

---

*Audit complete. 12 findings (3 critical, 5 moderate, 4 positive). The mechanism catalog is the compositional core's strongest file but needs decontamination of prescription creep and honest framing as illustrative vocabulary rather than exhaustive menu.*
