# Visual Hierarchy & Section Structure Audit

**File:** `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html`
**Lines:** 1,927
**Auditor:** Visual Hierarchy Analyst
**Date:** 2026-02-19

---

## Executive Summary

The visual hierarchy is **well-structured overall**, with strong heading differentiation, effective use of colored callout boxes, and comprehensive section numbering. The document successfully communicates a complex technical pipeline through a clear top-to-bottom reading flow. However, there are **five significant issues**: (1) an overabundance of callout boxes in certain sections creating visual fatigue, (2) inconsistent heading level usage -- specifically h3 elements doing h2-level work in the Visual Overview section, (3) inline style proliferation that creates a visual language separate from the CSS-class-based system, (4) three sections in the middle (Sections 3-4) that are dense with collapsible `<details>` elements stacked back-to-back, and (5) the "What Comes After" section at the end breaks the numbered section pattern without explanation.

**Overall Grade:** B+ -- The hierarchy succeeds at its primary job (guiding the reader through 12 sections of dense technical content) but has local problems that degrade scannability in specific areas.

---

## Heading Hierarchy Analysis

### Heading Level Definitions (CSS, lines 29-67)

| Level | Font Size | Margin Top | Visual Treatment |
|-------|-----------|------------|------------------|
| h1    | 2.4rem    | N/A        | No border, dark brown |
| h2    | 1.65rem   | 3rem       | 2px bottom border (#e0d5c5), generous spacing |
| h3    | 1.25rem   | 2rem       | No border, dark brown |
| h4    | 1.05rem   | 1.5rem     | No border, dark brown |

**Assessment:** The size progression is well-calibrated. The h1-to-h2 jump (2.4rem to 1.65rem) is clearly perceptible. The h2 border-bottom creates a strong visual divider between major sections. The h3-to-h4 distinction (1.25rem to 1.05rem = 0.2rem delta) is the weakest link -- at 17px base font, this is roughly a 3.4px difference, which is at the threshold of easy perception.

### Heading Usage Inventory

**h1 (1 instance):**
- Line 362: `Pipeline v2 Implementation Guide` -- Correct. Single h1 for the page title.

**h2 (12 instances):**
- Line 406: `The Pipeline v2 Architecture -- Visual Overview` (id="visual-overview")
- Line 791: `1. Where We Are Right Now` (id="s1")
- Line 853: `2. The Architecture: Fat Core` (id="s2")
- Line 957: `3. The Files We Need to Create` (id="s3")
- Line 1086: `4. The Files We Need to Edit` (id="s4")
- Line 1151: `5. The Gate System -- All 15 Gates` (id="s5")
- Line 1290: `6. The Build Flow` (id="s6")
- Line 1398: `7. The Experiments` (id="s7")
- Line 1527: `8. The Implementation Order` (id="s8")
- Line 1630: `9. Why This Won't Fail` (id="s9")
- Line 1718: `Master Checklist` (id="master-checklist")
- Line 1803: `Appendix: Key File Paths` (id="appendix")

**Assessment:** All 12 h2 elements are used correctly as major section headings. Each receives the border-bottom treatment and 3rem top margin, creating clear visual breaks. The numbered sections (1-9) plus Visual Overview, Master Checklist, and Appendix form a logical hierarchy.

**Missing h2:** The "What Comes After" section (line 1849) uses an h2 at line 1849 (`<h2 id="after">What Comes After</h2>`) but is NOT listed in the Table of Contents (lines 383-398). This is a structural omission -- it appears as a major section visually but is invisible in navigation.

**h3 (approximately 32 instances):**

Key observations:

1. **Visual Overview section abuses h3 for peer-level content** (lines 410-670). Four h3 elements appear under this h2:
   - Line 410: "The Complete Build Flow"
   - Line 527: "The 5-Layer Compositional Intelligence Stack"
   - Line 582: "The Intelligence Heatmap"
   - Line 670: "Architecture Comparison: Fat Core vs Linear Pipeline"

   These four subsections are **conceptually peer-level with each other** and contain substantial standalone content (60-100 lines each with complex diagrams). They function more like h2-level content squeezed under one h2 umbrella. The Visual Overview section is ~380 lines long before the next h2 -- disproportionately large compared to other sections.

2. **Section 1 uses h3/h4 correctly** (lines 797-844). "The Two Skills" (h3) contains "Tension-Composition Skill" (h4) and "Perceptual Auditing Skill" (h4). Clean nesting.

3. **Section 9 uses h3 for each failure** (lines 1634-1701). Nine h3 elements ("Failure 1" through "Failure 9") create a uniform list structure. This is effective -- each failure is a peer-level subsection.

**h4 (approximately 20 instances):**
- Used correctly for sub-subsections within h3 blocks
- Heavy use within the `<details>` expandable in Section 5 (lines 1222-1266) for individual gate descriptions
- Used within the checklist section for step groupings (lines 1723-1795)
- The h4 elements in the checklist section (lines 1723, 1730, 1740, 1749, 1760, 1773, 1779, 1787) serve as group headers within `.checklist` boxes. This works well because the box background provides visual containment.

### Heading Hierarchy Issues

1. **ISSUE: h3 under "You Are Here" box** (line 367). The `.you-are-here` container contains an h3 ("You Are Here") that is styled differently (color: #2a7d7d, font-size: 1.1rem via CSS line 160-163). This is semantically fine but visually confusing -- it looks like a label, not a heading. Consider using a `<div>` or `<p>` with a class instead.

2. **ISSUE: "No-Compromise Principle" box uses inline h3** (line 376). This h3 sits inside a fully inline-styled `<div>` (line 375) that doesn't use any CSS class. It is visually a peer callout to the "You Are Here" box but has no semantic heading structure connecting it to the document flow. It floats outside the heading hierarchy.

3. **ISSUE: Missing heading level in Table of Contents**. The ToC h3 (line 384) is styled at 1.15rem (line 180) -- different from the standard h3 size of 1.25rem. This creates a minor visual inconsistency where ToC heading appears smaller than sibling h3 elements.

---

## Callout Box Inventory and Assessment

### Box Types Defined in CSS

| Class | Border Color | Background | Purpose | CSS Lines |
|-------|-------------|------------|---------|-----------|
| `.you-are-here` | #2a7d7d (teal) | gradient | Context orientation | 151-166 |
| `.checkpoint` | #6b9b7a (green) | #f0ebe3 | Progress verification | 188-207 |
| `.milestone` | gradient teal-green | gradient | Major progress marker | 210-220 |
| `.warning-box` | #c49052 (amber) | #fef8f0 | Important/warning | 266-273 |
| `.error-box` | #c97065 (coral) | #fef6f5 | Error/critical | 275-282 |
| `.success-box` | #6b9b7a (green) | #f2f7f4 | Success/positive | 285-291 |
| `.checklist` | #e0d5c5 (border) | #f9f6f0 | Interactive checklist | 294-325 |
| `.appendix` | #e0d5c5 (border) | #f9f6f0 | Reference material | 338-345 |
| `details` | #e0d5c5 (border) | #faf7f1 | Collapsible sections | 229-263 |

### Box Instance Count

| Box Type | Count | Sections Where Used |
|----------|-------|-------------------|
| `.you-are-here` | 1 | Top of page |
| `.checkpoint` | 4 | After Sections 2, 5, 6, 9 |
| `.milestone` | 2 | Before Master Checklist, after Appendix tables |
| `.warning-box` | 5 | Sections 2 (x2), 7 (x1), 8 (x1), 9 (x1) |
| `.error-box` | 1 | Section 3 (perception thresholds) |
| `.success-box` | 2 | Sections 3, 8 |
| `.checklist` | 7 | Master Checklist section |
| `.appendix` | 1 | Appendix section |
| `details` (collapsible) | 9 | Sections 1 (x1), 2 (x1), 3 (x3), 4 (x4), 7 (x1) |
| Inline-styled callout divs | 6 | Visual Overview section (lines 574, 662, 780, misc) |

**Total styled boxes:** ~38

### Assessment

**EFFECTIVE uses:**
- The 4 checkpoint boxes are perfectly paced -- they appear at the end of each major conceptual "act" (Architecture, Gates, Build Flow, Complete Understanding). They provide natural pause points and reinforce what was just learned.
- The `.you-are-here` box at the top (line 366) is excellent -- immediately orients the reader.
- The interactive checklist boxes in the Master Checklist section (7 boxes, lines 1722-1796) are the right tool for the job -- actionable, scannable, grouped by step.
- The single `.error-box` (line 1019) is used for maximum impact in the perception thresholds section -- it explains WHY the file exists with a concrete failure story.

**OVERUSED areas:**
- **Section 3 (Files to Create, lines 957-1080):** Contains 3 `<details>` elements + 1 `.success-box` + 1 `.error-box` + multiple tables within ~120 lines. The density of visual interruptions makes it hard to maintain reading flow. A reader encounters a new styled element every ~15-20 lines.
- **Section 4 (Files to Edit, lines 1086-1144):** Contains 6 `<details>` elements stacked back-to-back (lines 1100-1136). While collapsible, the closed summaries create a visual "wall of expandables" -- all identical in appearance. The reader cannot quickly distinguish which ones matter most.
- **Visual Overview section (lines 406-784):** Contains 6 inline-styled callout `<div>` elements (lines 574, 662, 780, and 3 more). These use different inline border-left colors and backgrounds to function as callout boxes, but because they use inline styles rather than CSS classes, they have inconsistent spacing and padding compared to the class-based callout boxes.

**UNDERUSED areas:**
- **Section 9 (Why This Won't Fail, lines 1630-1708):** Nine failures are listed as h3 + p + p, with no visual differentiation between them. A subtle background or numbering treatment would help -- currently, all 9 look identical and blend together during scrolling.
- **Section 8 (Implementation Order, lines 1527-1623):** No checkpoint box despite being a critical planning section. The decision gates are buried in warning boxes rather than getting their own distinctive treatment.

---

## Whitespace and Spacing Issues

### Positive Spacing Patterns

- **h2 top margin (3rem) + `divider-*` class (3rem margin):** Each major section gets 6rem of combined whitespace above it. This creates strong visual separation between the 12 sections. Well done.
- **Paragraph margin (1rem):** Adequate for the 17px/1.75 line-height. Comfortable reading density.
- **Checkpoint boxes (2.5rem vertical margin):** Good breathing room around these summary elements.
- **Page container padding (2rem horizontal, 4rem bottom):** Prevents the content from hitting edges.

### Spacing Issues

1. **ISSUE: Inconsistent vertical rhythm after diagrams.** The inline-styled diagram containers (lines 413-521, 530-572, 585-655, 673-778) use varying amounts of padding and margin:
   - The main flow diagram (line 413) uses `padding: 1.5rem 0` on its container
   - The intelligence stack (line 530) uses `padding: 1.5rem 0; max-width: 620px`
   - The heatmap table (line 585) uses `margin: 1.5rem 0` on its overflow wrapper
   - After each diagram, the `.diagram-label` (line 328) applies `margin-top: -0.5rem; margin-bottom: 1.5rem`
   - But the inline callout divs that follow (lines 574, 662) have their own margin, creating inconsistent total gaps between diagram-end and next-content-start.

2. **ISSUE: Details stacking in Section 4 creates dense blocks.** Six `<details>` elements (lines 1100-1136) each have 1.25rem vertical margin (CSS line 230). When stacked, the spacing between consecutive collapsed summaries is only ~20px -- tighter than the h3-to-paragraph spacing. This makes the section feel compressed despite the collapsible nature.

3. **ISSUE: The "No-Compromise Principle" box (line 375) has `margin-bottom: 2rem` inline**, but it sits between the `.you-are-here` box (margin-bottom: 2.5rem) and the `.toc` box (margin-bottom: 2.5rem). The visual gap above this box (~2.5rem from previous element) differs from the gap below (2rem), creating asymmetric spacing in the page's opening sequence.

4. **MINOR: Code blocks inside `<details>` elements** (e.g., lines 1479-1496) lack the standard margin-bottom because the `.details-content` padding (1.25rem, line 260) provides the only spacing. This works but feels tighter than code blocks in the main flow.

---

## Diagram and Table Placement Review

### Diagrams

| Location | Type | Lines | Content | Assessment |
|----------|------|-------|---------|------------|
| Lines 413-521 | CSS flowchart (div boxes + arrows) | 109 | Complete build flow | EXCELLENT -- placed immediately after the section intro, before detailed text. Gives the reader a map before diving in. |
| Lines 530-572 | Stacked pyramid (div boxes) | 42 | 5-layer intelligence stack | EXCELLENT -- the progressive widening creates a strong visual hierarchy. Well-placed between explanation paragraphs. |
| Lines 585-655 | HTML table with inline color bars | 70 | Intelligence heatmap | GOOD -- complex but information-dense. The inline color bars effectively encode survival levels. May be too wide for comfortable reading on smaller screens. |
| Lines 673-778 | HTML comparison table | 105 | Fat Core vs Linear Pipeline | GOOD -- directly follows the heatmap for comparative context. The green background column (#f2f7f4) for "Fat Core (NEW)" effectively draws the eye. |
| Line 884 | Pre-formatted text (code block) | 19 | 12 agents list | ADEQUATE -- uses code block styling for a conceptual list. A structured table might scan better. |
| Lines 1049-1078 | Pre-formatted text (code block) | 29 | File dependency diagram | GOOD -- ASCII art is appropriate here. Copy button is useful. |
| Lines 1159-1195 | Pre-formatted text (code block) | 36 | Phase-locked gate timing | GOOD -- combines timing flow with gate details. |
| Lines 1294-1349 | Pre-formatted text (code block) | 55 | Complete build flow (text version) | GOOD but REDUNDANT with the CSS flowchart at lines 413-521. This is the same information in text form. Both are needed (visual + copyable), but there's no cross-reference explaining the relationship. |
| Lines 1353-1372 | Pre-formatted text (code block) | 19 | Timing breakdown | EXCELLENT -- tabular text with alignment. Easy to scan. |
| Lines 1408-1448 | Pre-formatted text (code block) | 40 | Experiment decision tree | EXCELLENT -- captures the decision logic clearly. The cheapest-first ordering is immediately visible. |
| Lines 1479-1496 | Pre-formatted text (code block) | 17 | 2D model (inside details) | GOOD -- the quadrant diagram effectively communicates the specificity/freedom axes. Appropriate to place inside a collapsible since it's supplementary. |
| Lines 1531-1568 | Pre-formatted text (code block) | 37 | Implementation dependency chain | GOOD -- step-by-step with decision gates marked inline. |
| Lines 1890-1900 | Pre-formatted text (code block) | 11 | Big picture timeline | ADEQUATE -- very compact. Could benefit from more visual treatment given its importance. |

### Tables

| Location | Rows | Content | Assessment |
|----------|------|---------|------------|
| Lines 810-818 | 6+header | Six-layer ontology | GOOD -- concise, well-structured |
| Lines 861-867 | 4+header | Evidence comparison | EXCELLENT -- devastating simplicity. 4 rows tell the whole story. |
| Lines 907-912 | 3+header | Phase-locked gates | GOOD -- compact reference |
| Lines 935-944 | 8+header | Flagship vs Fat Core | GOOD -- direct comparison |
| Lines 961-968 | 6+header | Files to create | EXCELLENT -- the most actionable table in the document |
| Lines 1008-1017 | 7+header | Perception thresholds | EXCELLENT -- lookup table format is perfect for this data |
| Lines 1090-1098 | 7+header | Files to edit | GOOD -- mirrors the "files to create" table |
| Lines 1200-1217 | 15+header | All 15 gates | GOOD -- comprehensive reference. Gets long but the column structure helps. |
| Lines 1270-1277 | 5+header | 70/30 boundary (code vs PA) | EXCELLENT -- elegant framing of what code can and cannot verify |
| Lines 1375-1384 | 7+header | Boundary crossings | GOOD -- clean and informative |
| Lines 1511-1520 | 7+header | Experiment outcomes | EXCELLENT -- decision matrix is well-structured |
| Lines 1612-1623 | 8+header | Complete timeline | GOOD -- running total column is helpful |
| Lines 1674-1687 | 9+header (inside details) | Failure meta-pattern | GOOD -- summarizes all 9 failures in one view |

**Table density observation:** The document contains **17+ tables**. This is appropriate for a technical implementation guide, but Sections 1-2 (lines 791-951) contain 4 tables in ~160 lines -- one every ~40 lines. This creates a "wall of tables" effect that can fatigue readers who are seeking narrative understanding rather than reference lookup.

---

## Visual Clutter Issues

### 1. Inline Style Proliferation

The Visual Overview section (lines 406-784) relies almost entirely on inline styles for its CSS-rendered diagrams. While this is understandable (these are one-off visual elements), the result is a divergent visual language:

- The main flow diagram (lines 413-521) uses 30+ inline `style` attributes across nested divs
- Each diagram box uses different padding, margin, font-size, and color values set inline
- These inline-styled elements don't match the spacing rhythm of the class-based elements

**Impact:** The Visual Overview section feels visually "different" from the rest of the document. It's denser, more colorful, and has tighter spacing. This is intentional (diagrams ARE different) but the transition in/out is abrupt.

### 2. Competing Visual Treatments for the Same Semantic Role

Three different visual treatments serve as "insight callouts":

1. **Class-based boxes** (`.warning-box`, `.success-box`, `.error-box`) -- consistent styling, border-left treatment
2. **Inline-styled callout divs** (e.g., line 574: `background:#f0ebe3;border-left:4px solid #c49052;padding:0.85rem 1.25rem`) -- identical APPEARANCE to class-based boxes but defined inline
3. **The "No-Compromise Principle" box** (line 375: `background:#f0ebe3;border:2px solid #5c4b3a;padding:1.5rem`) -- unique treatment with full border instead of border-left

A reader encountering all three may perceive them as three different levels of importance, but they actually serve the same purpose (callout/emphasis). The inconsistency creates cognitive overhead.

**Specific instances of inline-styled boxes that should be class-based:**
- Line 375: "No-Compromise Principle" -- should have its own CSS class
- Line 574: Key Insight (amber border-left) -- should use `.warning-box`
- Line 662: "The Story This Tells" (coral border-left) -- should use `.error-box`
- Line 780: "Why Fat Core" (teal border-left) -- could use a new `.insight-box` class
- Line 1873: "FREEZE LINE" box -- unique treatment, should have its own class

### 3. Dense Stacking in Section 4

Lines 1100-1136 contain 6 `<details>` elements back-to-back:

```
details: Edit 1 -- tokens.css
details: Edit 2 -- semantic-rules.md
details: Edit 3 -- PA skill perception thresholds
details: Edit 4 -- TC skill recipe header
details: Edits 5A-D -- compositional-core/CLAUDE.md
details: Edits 6A-B -- design-system/CLAUDE.md
```

When all collapsed, this presents as 6 identical-looking bars with triangular markers. The reader cannot distinguish importance or scope without reading each summary text carefully. Consider:
- Grouping by type (foundations vs. routing vs. skills)
- Adding a small badge or indicator of scope (e.g., "~5 lines" vs "~46 lines")
- Using a single expandable with sub-sections instead of 6 separate ones

### 4. Duplicate Information Across Formats

The "complete build flow" appears in three forms:
1. CSS-rendered flowchart (lines 413-521) -- visual, detailed
2. ASCII text in code block (lines 1294-1349) -- text, detailed
3. Expandable list inside `<details>` (lines 914-932) -- numbered steps

Each serves a purpose (visual scan, copy-paste, quick reference), but there's no signposting explaining why the same information appears three times or directing the reader to the most appropriate version for their needs.

---

## Section Numbering Assessment

The document uses a clear numbering scheme:

- **Unnumbered:** Visual Overview (intentionally before the numbered sections)
- **Sections 1-9:** Main content, numbered in h2 headings
- **Unnumbered:** Master Checklist, Appendix, What Comes After

The numbered sections (1-9) are well-labeled with both number and descriptive title. The Table of Contents at lines 383-398 lists them with brief descriptions. This is effective.

**Issue:** The "What Comes After" section (h2, line 1849) is not in the Table of Contents and has no section number. It contains substantial content (Phases E through J, a timeline, and a "Freeze Line" callout). This is a significant section that readers looking for roadmap information would miss if using the ToC for navigation.

**Issue:** The ToC lists 12 items, but the page has 14 h2 elements (12 listed + the duplicate "Master Checklist" h2 at line 1718 which appears after the milestone div, and "What Comes After" at line 1849). The Master Checklist has both a `.milestone` div (line 1716) and an h2 (line 1718), which creates a visual "double heading" effect.

---

## Recommendations for Improvement

### Priority 1 (Structural)

1. **Add "What Comes After" to the Table of Contents** (or renumber as Section 10). Currently invisible to ToC-navigating readers. Line 398 -- add an 12th `<li>` entry.

2. **Consolidate inline-styled callout boxes into CSS classes.** Create 1-2 new classes (`.insight-box` for teal border-left callouts, `.principle-box` for the full-border "No-Compromise" treatment) and replace the ~6 inline-styled callout divs. This improves consistency and reduces visual confusion about box semantics.

3. **Remove the duplicate h2 for Master Checklist.** The `.milestone` div at line 1716 already serves as the section header. The h2 at line 1718 creates redundancy. Either remove the h2 and use the milestone as the anchor, or remove the milestone and keep only the h2.

### Priority 2 (Readability)

4. **Group the 6 `<details>` in Section 4** into 2-3 logical clusters with brief prose between them, or add visible scope indicators (line count, complexity) to each summary so readers can prioritize which to expand.

5. **Add a brief cross-reference** between the CSS flowchart (Visual Overview) and the text flowchart (Section 6). Something like: "For the visual version of this flow, see the diagram in the Visual Overview above."

6. **Add a checkpoint box after Section 7 (Experiments).** Currently, checkpoints appear after Sections 2, 5, 6, and 9. Section 7 is arguably the most important section (it determines what gets built) and has no checkpoint summarizing the key takeaway.

### Priority 3 (Polish)

7. **Strengthen h3/h4 visual distinction.** The 0.2rem size difference is marginal. Consider adding a subtle left border, color shift, or different weight to h4 to improve contrast with h3.

8. **Break up the "wall of tables" in Sections 1-2** with a brief paragraph of context between the Layer Ontology table (lines 810-818) and the Evidence table (lines 861-867). Currently, the details expandable separates them, but when collapsed, the two tables are very close visually.

9. **Consider numbering the 9 failures in Section 9** with a visual badge (e.g., a small colored circle or bold number) rather than relying solely on the h3 text "Failure 1:", "Failure 2:", etc. This would improve scannability during a quick skim.

10. **Add a visual treatment to the two "Decision Gate" moments** in Section 8 (lines 1546, 1563). These are the most consequential moments in the implementation order, but they're formatted as plain `.warning-box` elements indistinguishable from other warnings. A distinctive "gate" treatment (perhaps using the amber diamond shape from the flowchart) would signal their importance.

---

## Summary Statistics

| Metric | Value | Assessment |
|--------|-------|------------|
| Total h2 headings | 14 | Appropriate for document length |
| Total h3 headings | ~32 | Heavy but justified by content depth |
| Total h4 headings | ~20 | Mostly within expandables -- good |
| Total styled callout boxes | ~38 | Moderate-to-heavy; some consolidation needed |
| Total tables | 17+ | High but appropriate for reference guide |
| Total diagrams | 13 | Well-distributed; 4 concentrated in Visual Overview |
| Total `<details>` elements | 9 | 6 stacked in Section 4 is the pain point |
| Inline-styled callout divs | ~6 | Should be converted to CSS classes |
| Sections in ToC | 12 | Missing "What Comes After" section |
| Checkpoint boxes | 4 | Could add 1 more after Section 7 |
