# Perceptual Audit Findings — Readability + Responsiveness (Auditor B-2)
## AD-005: Choreography
### Independent Second-Pass Audit

**Audit Date:** 2026-02-10
**Viewports Tested:** 1440x900 (full scroll-through), 768x1024 (partial — Playwright contention)
**1024x768:** Could not complete — HTTP server went down during audit
**Method:** Viewport screenshots at 80% height scroll steps, full-page screenshots, DOM accessibility tree analysis
**Scroll-through completed:** YES at 1440px (17 scroll steps, positions 0 through 10,800)

---

## Question Responses

### PA-02: Is any text uncomfortable to read? Point to the worst spot.

**1440px:** Two spots compete for "worst":

1. **The header subtitle** — the description paragraph ("What if axis geometry choreographed the reader's journey...") renders in a muted gray against the dark header background. It is legible but requires noticeably more effort than any body text below. In a dim room, this would be the first text to become hard to read.

2. **Territory card descriptions in narrow columns** — At 1440px, the hub grid places "Territory A" through "Territory F" in narrow columns beside the wider Featured Territory card. The text in these narrow cards breaks to short 3-4 word lines. "Establishing, medium, close-up, wide — the cinematic pacing model." breaks awkwardly across 4 lines in the Territory A card. This is not unreadable, but the choppy line breaks fight the natural reading rhythm.

**768px:** Body paragraphs in the spoke sections are actually more comfortable at this width than at 1440px. Line length drops to approximately 60-65 characters per line, which falls in the typographic sweet spot. The worst spot at 768px is the 4-column "Density Wave" table — "Sparse (~200 words/viewport)" and "Display serif at section scale" wrap to cramped 2-line fragments within their cells. The table is functional but not pleasant.

**Overall verdict:** LOW severity. The header subtitle is the most consistent discomfort across viewports. The narrow territory cards at 1440px are a secondary issue.

---

### PA-06: Are any words stacking vertically, one per line, in any column?

**1440px:** No single-word-per-line stacking observed anywhere. The narrowest text I found was in the territory cards (Territory C, D, E, F in the second row), where descriptions hold 3-5 words per line. "Hub-spoke density rhythm: sparse overview to dense detail to sparse return." in the WAVE Oscillation card does NOT stack — it flows in 3-4 word phrases across lines.

The monospace metadata lines ("1 cycle | 6 phases", "2 patterns | 4 examples") fit on single lines in all cards.

**768px:** No vertical stacking. The 2-column territory grid at 768px gives each card enough horizontal room for 5-7 word lines. Even the smallest cards maintain natural sentence flow.

**Overall verdict:** PASS. Zero vertical word stacking at any tested viewport.

---

### PA-07: Can you read the longest paragraph without losing your place?

**1440px:** The longest continuous paragraphs appear in the "Soul-Compliant Transitions" spoke and the "Kinetic equivalence" passage in the Synthesis section. These run 5-6 lines at roughly 80-85 characters per line. The serif body typeface and generous line spacing (visually approximately 1.6-1.7 of the body text size) make these paragraphs trackable. My eye does not lose its place.

However, a subtler issue: the paragraphs in the Essence callout boxes use an italic serif at a slightly smaller size. These are shorter (3-4 lines) but the italic rendering requires marginally more concentration. Not a problem for the short length of these passages.

**768px:** Paragraphs are easier to track at this width due to shorter line lengths (~60-65 characters). The generous line spacing remains consistent. The same italic Essence callouts remain readable.

**Overall verdict:** PASS. The serif typeface, generous line height, and controlled content column width combine to make sustained reading comfortable at both tested viewports.

---

### PA-08: Is there any text you have to squint to read?

**1440px:** Three areas approach the squint threshold, in order of severity:

1. **Header subtitle** (most borderline) — light gray text on dark background. Not quite squinting, but I have to "tune in" more deliberately than for body text.

2. **"TERRITORY A" / "TERRITORY B" category labels** — small uppercase text at the top of each hub grid card. These are structural labels (not content), so the small size is acceptable, but they push toward the lower limit of comfortable reading.

3. **Table header rows** — "PROPERTY", "CONSTRAINT", "USE CASE" in the Allowed Transition Properties table. Small uppercase on a light background. Legible but not generous.

The monospace metadata lines in territory cards ("6 patterns | 12 examples") are small but legible because of the even character spacing of monospace type.

**768px:** Same three areas as 1440px. The table headers become slightly more noticeable because the overall table width is tighter, making the small text feel more cramped by proximity to cell edges.

**Overall verdict:** LOW severity. No actual squinting required anywhere. The header subtitle is the only area where effort is notably higher than the rest of the page.

---

### PA-21: Does everything look designed for this width, or squeezed?

**1440px:** DESIGNED. The hub grid has a clear intentional layout — featured territory card is wider (roughly double the narrow cards' width), creating a visual hierarchy. The spoke content sections use a centered column with generous side margins. Tables sit comfortably within the content column. Code blocks with dark backgrounds span the content width without overflow.

The content column width at 1440px is NOT the full viewport width — there are substantial margins on both sides, which keeps line lengths comfortable and gives the page a centered, editorial feel.

**768px:** DESIGNED, not squeezed. The hub grid collapses to 2 columns in a way that looks intentional — the featured territory card becomes full-width (it reads as a deliberate "hero" card), while the remaining territories pair up in 2-column rows. Spoke content fills the width more fully but maintains side padding. Code blocks still fit without horizontal scrolling.

The only area that feels slightly tight is the 4-column tables at 768px — but they remain functional and no data is hidden or truncated.

**Overall verdict:** PASS across both viewports. No element feels squeezed.

---

### PA-22: Would a user who ONLY has this screen size feel served or punished?

**1440px:** SERVED. The page reads as if it was designed for this width as its primary target. The hub grid layout, the centered content column, the table proportions, and the code block widths all feel native to a 1440px display. A desktop-only user would have a very good reading experience.

**768px:** SERVED. The responsive collapse is thoughtful. Territory cards adapt naturally. Body text hits the typographic sweet spot for line length. The diagonal "Axis Direction Change" visual signals are preserved (they use a shaped background rather than a simple horizontal line, which maintains the page's visual identity). A tablet-only user would not feel like they're getting a second-class experience.

One nuance: at 768px, the page is VERY long because the hub grid cards stack vertically (7 cards in 2 columns = 4 rows instead of 2 rows at 1440px). A 768px user scrolls significantly more to reach the spoke content. This is not "punishment" but it is a trade-off worth noting.

**Overall verdict:** Both viewport users feel served. Neither produces a punished experience.

---

### PA-23: What breaks if you resize 200px narrower?

**At 1440px minus 200px = 1240px:** The hub grid should transition to 2-column layout (the breakpoint is at 1440px per the page's own code). This is a smooth transition. Content reflows naturally from 3-column to 2-column.

**At 768px minus 200px = 568px:** This would push below the page's stated mobile breakpoint (768px). Expected impacts:
1. Hub grid would collapse to single column (1 card per row). This would make the territory overview section extremely tall — 7 cards stacked vertically.
2. The 4-column tables (Density Wave, Breakpoints, Soul Status) would become very difficult to read. Columns would wrap to 1-2 words per line, and reading order could become confusing.
3. Code blocks with longer lines (the polygon code with inline comments) would require horizontal scrolling.
4. The diagonal section dividers would flatten to horizontal borders (per the page's own responsive code).

**At 1024px minus 200px = 824px:** Still above the 768px mobile breakpoint. The 2-column grid would remain. Tables would be tighter but functional. This transition is smooth.

**Overall verdict:** The page handles the 768-1440px range gracefully. Below 768px, tables are the first casualty. Below ~550px, the page would need significant restructuring. The 768px floor is well-chosen.

---

## Critical Findings

### FINDING-B2-001: Massive Blank Gaps Between Sections (HIGH)

**Description:** At 1440px, scrolling through the page reveals enormous stretches of apparently empty cream-colored background between spoke sections. Specifically:

- Between the Essence callout at the end of Spoke 1 (CSS Transition Choreography) and the beginning of the Density Wave table: approximately 600-800 pixels of empty space.
- Between the Diagonal Accents spoke content and visible content resumption: approximately 1,200+ pixels of blank viewport.
- From approximately scroll position 7,500 to scroll position 9,800: over 2,000 pixels where no content was visually rendered in viewport screenshots.

**Investigation:** DOM analysis confirmed all content elements exist and report as visible (non-zero height, display not none). The page total height is 11,797 pixels. Section position analysis showed spoke-content elements spanning these regions. However, viewport screenshots captured pure blank cream background.

**Root cause hypothesis:** The page appears to use scroll-triggered reveal behavior where content starts transparent and becomes visible when scrolled into view. Programmatic scrolling (via JavaScript scrollTo) may not trigger the IntersectionObserver callbacks the same way human mouse-wheel scrolling does. A real user scrolling slowly might see the content appear. However, a user using keyboard-based scrolling (Page Down), touch-flick scrolling, or assistive technology navigation might encounter the same blank gaps.

**Severity:** HIGH — If content is invisible to any category of user, this is a critical readability failure. Even if the content reveals properly for mouse-wheel users, the existence of invisible content regions means some users could encounter a page that appears to end prematurely.

**Recommendation:** Verify with manual human testing using mouse-wheel scrolling. If content is invisible for programmatic scrolling, add the `prefers-reduced-motion` fallback that makes all content visible by default (the page's own code documentation describes this pattern but may not implement it for all elements).

---

### FINDING-B2-002: Header Subtitle Low Contrast (LOW)

**Description:** The introductory paragraph in the dark header ("What if axis geometry choreographed...") uses a muted gray text color that reduces readability against the dark background. This is the single most consistently "harder to read" text element across all viewports.

**Impact:** The text is legible but requires more deliberate focus than body text. In low-brightness viewing conditions, this would be the first text to become uncomfortable.

**Corroboration:** Matches FINDING-B-001 from the previous Auditor B v2. Both auditors independently identified the same spot.

---

### FINDING-B2-003: Narrow Territory Cards at 1440px (LOW)

**Description:** At 1440px, the hub grid uses a layout where the Featured Territory card is roughly double the width of the Territory A-F cards. This creates narrow columns for the smaller cards where body text breaks to 3-4 word lines. The worst example is Territory A ("Shot Progression") where "Establishing, medium, close-up, wide — the cinematic pacing model." flows choppily across 4 short lines.

**Impact:** The text is fully readable but the choppy line breaks create a slightly jarring reading rhythm. This is not present at 768px where the 2-column layout gives each card more width.

---

### FINDING-B2-004: Tables Tight at 768px (LOW)

**Description:** The 4-column tables (Density Wave phases, Allowed Transition Properties, Breakpoint table, Soul Status table) have cell content that wraps to 2 lines at 768px. The "Constraint" column in the Allowed Transition Properties table is the tightest — long descriptions like "Start AND end must be 1.0 for persistent elements. 0->1 allowed for scroll-triggered entrance only." wrap extensively.

**Impact:** Tables remain functional and readable. No data is hidden or truncated. The wrapping is a natural consequence of the viewport width and is handled correctly.

---

### FINDING-B2-005: Excessive Page Length at 768px (INFORMATIONAL)

**Description:** At 768px, the hub grid territory cards stack in 2-column rows (4 rows instead of roughly 2.5 rows at 1440px). Combined with the spoke content sections and synthesis section, the total page is very long. A user must scroll significantly to reach the synthesis section at the bottom.

**Impact:** No direct readability issue, but the sheer scroll distance could discourage readers from reaching the synthesis section, which contains the page's most important intellectual content (the Four Equivalence Mechanisms table and the Fractal Self-Similarity breakdown).

---

## Summary Table

| ID | Question | Severity | Verdict |
|----|----------|----------|---------|
| PA-02 | Uncomfortable text | Low | Header subtitle and narrow territory cards |
| PA-06 | Vertical word stacking | None | PASS — no stacking at any viewport |
| PA-07 | Eye tracking in paragraphs | None | PASS — generous line height and serif typeface |
| PA-08 | Squinting required | Low | Header subtitle, territory labels, table headers |
| PA-21 | Designed vs squeezed | None | PASS — both widths feel intentional |
| PA-22 | Served vs punished | None | PASS — both viewports serve the reader |
| PA-23 | Narrowing breakpoints | Medium | Tables stress below 768px; hub grid below ~550px |

## Findings Summary

| ID | Description | Severity |
|----|-------------|----------|
| FINDING-B2-001 | Massive blank gaps between sections (possible scroll-reveal failure) | HIGH |
| FINDING-B2-002 | Header subtitle low contrast | LOW |
| FINDING-B2-003 | Narrow territory cards at 1440px | LOW |
| FINDING-B2-004 | Tables tight at 768px | LOW |
| FINDING-B2-005 | Excessive page length at 768px | INFORMATIONAL |

## Cross-Reference with Previous Auditor B (v2)

| Previous Finding | This Audit | Agreement |
|-----------------|------------|-----------|
| FINDING-B-001 (header contrast) | FINDING-B2-002 | CONFIRMED — both auditors independently identified same spot |
| FINDING-B-002 (synthesis rendering anomaly) | FINDING-B2-001 | CONFIRMED AND EXPANDED — I observed the same blank areas across wider page regions, not just synthesis |
| FINDING-B-003 (whitespace zones) | FINDING-B2-001 | CONFIRMED — this audit measured the gaps more precisely (~2000px of blank) |
| FINDING-B-004 (tables at 768px) | FINDING-B2-004 | CONFIRMED — same observation |
| FINDING-B-005 (below 768px) | PA-23 response | CONFIRMED — same analysis of responsive floor |

**Key new finding:** FINDING-B2-001 is more severe than the previous auditor's FINDING-B-002 and B-003 combined. The previous auditor attributed the blank areas partly to "Playwright rendering contention" — this audit confirms the blank areas are structural (they appear in both scroll-through screenshots AND full-page screenshots) and span much larger regions than previously reported.

---

## Methodology Notes

- Playwright contention was severe during this audit. Other auditors navigated the shared browser to AD-001 and AD-003 while I was testing AD-005 at 768px.
- The 1024x768 viewport could not be tested because the HTTP server went down during the audit.
- Full-page screenshots were captured at both 1440px and 768px, providing complete visual records.
- DOM accessibility snapshots confirm all content is present in the page structure at every viewport.
