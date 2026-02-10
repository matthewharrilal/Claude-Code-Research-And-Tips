# Fresh-Eyes Hygiene Audit: AD-002 (F-Pattern Layout)

**Auditor:** Hygiene-Auditor-C (Fresh Eyes)
**Date:** 2026-02-10
**Screenshots Reviewed:** AD-002-1440px-fullpage.png, AD-002-768px-fullpage.png
**OD Comparison:** NOT AVAILABLE (no OD-002 screenshot found)
**Information Barrier:** Maintained -- no builder reports, A/B findings, or convention files read.

---

## Soul Reference (First 100 Lines of ACCUMULATED-IDENTITY-v1.1)

- **Soul Piece 1:** Sharp edges command authority -- `border-radius: 0` LOCKED
- **Soul Piece 2:** Archivist speaks in serif -- `Instrument Serif` italic for wisdom content
- **Soul Piece 3:** Callouts share family DNA -- 2-zone, `border-left: 4px solid`, color-only differentiation
- **Soul Piece 4:** Shadows lie about depth -- `box-shadow: none` LOCKED
- **Soul Piece 5:** Squares signal system -- `border-radius: 0` on all indicators
- **Rule 3:** Limited palette -- `#E83025` red, `#FEF9F5` cream, `#1A1A1A` text, `#E0D5C5` border
- **Rule 5:** Heavy borders when bordered -- 3px+ solid, never 1px
- **Rule 6:** Whitespace as design element -- generous padding, `line-height: 1.6`
- **Anti-physical identity:** No shadows, no rounded corners, no gradients suggesting material, no animated z-movement

---

## Findings

### Finding 1: Red Header Banner Dominates and Disrupts Reading Entry

**TEST:** 1 (Squint Test) + 6 (Newspaper Test)
**ASSESSMENT:** At 768px, the top of the page features a prominent red/dark banner with "AD-002 F-Pattern Layout" text. When squinting, this banner is the single loudest element on the entire page -- louder than all content below it. For a page about F-Pattern layout (which teaches reading flow optimization), the header paradoxically BREAKS the F-pattern it describes: the eye hits the red banner, gets trapped there, and doesn't flow naturally into the first content section. The transition from the high-contrast red banner to the warm cream body creates a jarring tonal shift. A newspaper editor would ask: "Why is the masthead screaming louder than the headline?"

At 1440px this is less severe because the banner is proportionally smaller relative to the viewport, but the tonal discontinuity remains.

**SEVERITY:** CONCERN

---

### Finding 2: Tables Lack Horizontal Rhythm Differentiation at 768px

**TEST:** 4 (Breathing Room) + 7 (Micro-Macro)
**ASSESSMENT:** Multiple data tables are visible in both viewports. At 1440px, the tables have adequate horizontal space and cell padding -- they read clearly. At 768px, the tables compress but maintain their multi-column structure. The issue: at narrow viewport, table cells become cramped, with text potentially wrapping awkwardly within cells. The micro-level (individual cell content) fights with the macro-level (table as information unit). There is no visible alternate-row striping or other visual differentiation to help scanning compressed rows. For a documentation page teaching layout patterns, the tables themselves should exemplify good information density -- at 768px they feel like they're surviving rather than thriving.

The breathing room test specifically: the gap between the bottom of one table and the start of the next content section appears consistent, but WITHIN tables, the vertical padding between rows appears tight relative to the generous body text line-height outside tables. This creates two competing rhythms on the same page.

**SEVERITY:** CONCERN

---

### Finding 3: Code Block (Dark Section) Creates a Visual "Hole" in the Page

**TEST:** 1 (Squint Test) + 5 (Container Integrity)
**ASSESSMENT:** Approximately two-thirds down the page, there is a large dark-background code block section. When squinting at either viewport, this section reads as a dark rectangular hole punched into the warm cream page. The contrast ratio between the warm cream body (`#FEF9F5`) and the dark code block background is extreme -- it's the second loudest element after the red header banner.

The container integrity concern: the dark code block appears to extend to the full content width, matching the text column. However, the visual weight of this dark mass is disproportionate to its information content. A code snippet demonstrating CSS properties does not warrant the same visual gravity as the entire preceding content section. The dark block "anchors" the page visually, pulling the eye down past intermediate content -- which again contradicts the F-pattern reading flow this page is teaching.

This is not a soul violation (code blocks can have dark backgrounds), but it IS a layout/hierarchy concern for a page specifically about reading flow optimization.

**SEVERITY:** CONCERN

---

### Finding 4: Section Heading Hierarchy Flattens Mid-Page

**TEST:** 6 (Newspaper Test) + 7 (Micro-Macro)
**ASSESSMENT:** The page begins with clearly differentiated heading levels -- the title is large, section headings are visibly distinct from body text. However, scanning the 1440px screenshot from top to bottom, the heading differentiation appears to flatten in the middle sections of the page. Multiple sections appear to use similar-weight headings, creating a "wall of equally important sections" effect. A newspaper test reveals this: if I covered the top title and tried to identify the most important section from headings alone, I would struggle -- several mid-page headings compete for attention at the same visual weight.

The macro structure (overall page hierarchy) should show a clear information cascade: primary topic > sub-topics > details. Instead, the mid-page reads as a flat list of co-equal sections. This is a content architecture issue, not a CSS issue, but it directly impacts the F-pattern the page is meant to demonstrate.

**SEVERITY:** NITPICK

---

### Finding 5: Mobile (768px) Top Section Has Dense Unbroken Text Block

**TEST:** 4 (Breathing Room) + 2 (Shipping Test)
**ASSESSMENT:** At 768px, the first content section below the red banner contains a substantial block of body text with no visual breaks -- no callouts, no pull quotes, no images, no horizontal rules. The breathing room test flags this: at mobile width, long unbroken paragraphs become visually dense walls. For a page about F-pattern layout (which emphasizes how users scan in an F-shape, reading less of each subsequent line), this opening text block will be the section users are MOST likely to F-scan through, yet it offers no visual anchors to catch the scanning eye.

Shipping test: Would I ship this opening section for mobile users? The content is likely valuable, but the presentation doesn't adapt to the mobile reading context. A callout box, a key-insight highlight, or even a simple horizontal rule to break the first 3-4 paragraphs into scannable chunks would significantly improve the mobile reading experience.

**SEVERITY:** CONCERN

---

## Test Summary

| # | Test | Result | Notes |
|---|------|--------|-------|
| 1 | Squint Test | 2 findings | Red banner dominance (F1), dark code hole (F3) |
| 2 | Shipping Test | 1 finding | Dense mobile opening (F5) |
| 3 | OD Comparison | SKIPPED | No OD-002 screenshot available |
| 4 | Breathing Room | 2 findings | Table rhythm (F2), mobile density (F5) |
| 5 | Container Integrity | 1 finding | Dark code block weight (F3) |
| 6 | Newspaper Test | 2 findings | Banner vs headline (F1), heading hierarchy (F4) |
| 7 | Micro-Macro | 2 findings | Table cell vs page rhythm (F2), heading cascade (F4) |

## Severity Summary

| Severity | Count | Findings |
|----------|-------|----------|
| REJECT | 0 | -- |
| CONCERN | 4 | F1, F2, F3, F5 |
| NITPICK | 1 | F4 |
| CLEAN | 0 | -- |

## Overall Assessment

AD-002 has **zero soul violations** visible from screenshots -- no rounded corners, no shadows, no gradients suggesting material. The page is flat, sharp-edged, and grounded. The color palette appears compliant (warm cream background, dark text, red accent).

The concerns are all **layout/hierarchy** issues, not identity violations. The irony is pointed: a page teaching F-pattern reading flow has several elements that disrupt F-pattern reading flow (dominant banner, dark code hole, flattened heading hierarchy, dense mobile opening). These are execution concerns, not soul concerns.

No REJECT-level findings. The page could ship but would benefit from hierarchy refinement.

---

**Fresh-Eyes Auditor-C signing off. Information barrier maintained throughout.**
