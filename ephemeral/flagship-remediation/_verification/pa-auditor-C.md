# PA Auditor C Report: Component Richness (PA-13 through PA-18)

**Auditor:** Fresh-eyes Opus agent (zero prior context)
**Date:** 2026-02-18
**Sources:** lock-sheet.md, computed-styles-data.md, programmatic-verification.md, builder-changelog.md, all available screenshots (1440px, 768px, 375px)

**CRITICAL META-OBSERVATION:** The overwhelming majority of screenshots at all three viewports show completely blank warm-cream pages with zero visible content. Out of 36 total screenshots, only approximately 6-8 contain any rendered content at all. This is itself a dominant finding that affects every PA question below: component richness cannot be perceptually evaluated when components are not visible in most scroll positions. The content that IS visible shows clear component richness, but it occupies a small fraction of the total page area.

---

## PA-13: Callout Differentiation

**Question:** Can you visually distinguish between different callout types? Do info, gotcha, tip, and essence callouts look distinct from each other? Rate differentiation 1-5.

### Evidence

**Programmatic data (computed-styles-data.md):**
- 9 callouts total: 2 info, 3 gotcha, 3 tip, 1 essence
- All have 4px solid left borders
- Border colors:
  - info: rgb(224,213,197) -- warm tan (matches --color-border)
  - gotcha: rgb(232,48,37) -- KortAI red (#E83025)
  - tip: rgb(74,157,107) -- sage green (#4A9D6B)
  - essence: rgb(217,119,6) -- amber (#D97706)
- Background colors:
  - info: rgb(250,248,245) -- warm near-white
  - gotcha: rgb(254,246,245) -- warm pink tint
  - tip: rgb(248,247,242) -- warm khaki tint
  - essence: rgb(250,245,237) -- warm amber tint

**Visual evidence from screenshots:**
- The 768px full-page screenshot shows callouts rendered at several positions in the page. In the S3 area, a callout with a light blue-tinted background (labeled "DENSITY RHYTHM") is visible with a left border. In S7, tension/resolution pairs show gotcha (red-bordered) and tip (green-bordered) callouts side by side in a two-column grid layout.
- At 1440px, the s3-table screenshot (1440-scroll-03-s3-density.png) shows a table followed by what appears to be the start of a callout with "DENSITY RHYTHM" heading and light background, though the screenshot cuts off before showing the full callout.

**Assessment:**
- Border color differentiation is STRONG: red vs green vs amber vs tan are all immediately distinguishable colors with high chromatic contrast.
- Background color differentiation is WEAK: all four backgrounds are within a very tight warm-cream range (RGB values within ~8 points of each other). Without the left border color, backgrounds alone would not distinguish callout types.
- The combination of border color + background creates adequate differentiation, but it relies almost entirely on the 4px left border strip.

### Rating: 3/5

**Rationale:** Border colors provide clear semantic differentiation (red=warning, green=tip, amber=essence, tan=info). However, background tints are nearly imperceptible -- the info bg at rgb(250,248,245) and tip bg at rgb(248,247,242) differ by only 2-6 RGB points. A visitor skimming quickly would distinguish gotcha from tip by border color alone; the backgrounds add warmth but not differentiation. Losing 2 points because: (1) backgrounds don't pull their weight as a differentiating channel, and (2) the info callout uses --color-border (tan) as its accent, which is the same color as general page borders/dividers, making info callouts potentially blend with other bordered elements.

---

## PA-14: Table Styling

**Question:** Do tables look designed or default? Do they have header backgrounds, border treatments, hover states? Do they fit the editorial aesthetic?

### Evidence

**From screenshots:**
- The 1440px s3-density screenshot shows a table with 2 columns ("DIMENSION" and "WHAT IT MEASURES"). The header row has a visibly different background (darker warm tone, approximately #F5F0E8 per computed data). Header text uses small-caps monospace formatting. Data rows are cleanly separated with horizontal rules. No vertical borders are visible. The table fits cleanly within the content column.
- The 768px full-page view shows multiple tables throughout the page. At the S3 position, the density dimensions table is clearly visible with header background differentiation. Additional tables appear in S5 (character properties), S8 (sequence structure), S9 (findings), S10, and S11 (hypothesis tables).
- The 768px s3-table-callout screenshot (scroll-02) shows the table clearly at mobile width: header row has a distinct warm background, text is readable, and the table scales to fit the narrower viewport.

**Programmatic data:**
- 9 tables present using classes: table-compact (2), table-featured (1), table-moderate (1), table-findings (1), table-warning (1), table-light (3)
- Header backgrounds: global warm tint (#F5F0E8), featured/warning get a warmer pink tint (#FEF0EE)
- Table borders: 0px computed -- no visible cell borders (horizontal rules only via border-bottom on rows)
- Hover state: defined in CSS for `.data-table tbody tr:hover` but class mismatch means this MAY NOT render (HTML uses .table-compact etc., CSS targets .data-table)
- No vertical borders (which is correct per lock-sheet prohibition #9)
- No zebra-striping (correct per prohibition)

**Assessment:**
Tables look DESIGNED, not default. Key evidence:
1. Header rows have distinct warm background tinting -- immediately separates headers from data
2. Header text uses uppercase/small-caps monospace (DIMENSION, WHAT IT MEASURES) -- a deliberate typographic choice
3. No vertical borders gives a clean, modern editorial look consistent with Stripe/Linear aesthetics
4. 6 different table classes suggest intent to differentiate table types, though visual differentiation between classes may be subtle
5. The horizontal-rules-only approach creates a light, readable table structure

**Concerns:**
- Hover state may not work due to CSS class mismatch (.data-table vs actual table classes)
- Background differences between table variants (table-compact vs table-featured vs table-warning) may be too subtle to notice
- Without hover states actually working, tables are static -- interaction richness is missing

### Rating: 3.5/5

**Rationale:** Tables are clearly designed with intentional header backgrounds, monospace header typography, no-vertical-borders aesthetic, and warm-toned backgrounds. They fit the editorial aesthetic well. Losing 1.5 points because: (1) the CSS class mismatch likely breaks hover states, removing interactivity; (2) while 6 table variants exist in CSS, the visual differences between them appear minimal (header bg difference of #F5F0E8 vs #FEF0EE is ~10 RGB points -- barely perceptible); and (3) tables lack any other distinguishing features beyond header color (no custom borders, no density variation, no featured-table callout treatment).

---

## PA-15: List Treatment

**Question:** Are lists styled or plain? Do they have custom markers, appropriate spacing, visual treatment?

### Evidence

**From screenshots:**
- Lists are not prominently visible in any screenshot. The page is primarily prose-based with tables and callouts as the main structural elements.
- In the 768px full-page view, there are no clearly visible bulleted or numbered lists. The content appears to use paragraphs, tables, and callouts rather than traditional lists.

**Programmatic data:**
- The computed-styles-data.md does not mention any list-specific styling.
- The lock-sheet mentions "Body text (p, li)" uses Inter font, indicating lists exist in the HTML but are not called out as specially styled.
- The builder-changelog.md does not mention any list-specific CSS additions.

**Assessment:**
Lists appear to receive minimal special treatment. The CSS likely applies base body-text styling (Inter, 16-17px) to `li` elements, and default bullet/number markers. No custom list markers, no special spacing rules, and no visual treatment beyond the base typography are evident from any source.

However, the content architecture appears to deliberately avoid heavy list usage in favor of tables (for structured data) and callouts (for highlights). This may be an intentional content design choice rather than a styling gap.

### Rating: 2/5

**Rationale:** Lists appear to receive default or near-default styling. No evidence of custom markers, enhanced spacing, or visual treatment beyond base typography. The rating is 2 rather than 1 because: (1) the base typography itself (Inter at appropriate sizes with good line-height) ensures lists are readable; and (2) the content architecture may intentionally minimize list usage in favor of richer components (tables, callouts). But for any lists that DO appear, they lack the designed feel of the other components.

---

## PA-16: Code Block Presentation

**Question:** If there are code blocks or monospace elements, do they have distinct backgrounds, borders, proper fonts?

### Evidence

**From screenshots:**
- In the 768px full-page view, dark code blocks are clearly visible in the S8 area, arranged in what appears to be a 2x2 grid (the sequence-grid). These dark blocks (background appears to be near-black, approximately #1A1A1A or #1E1E1E) stand out dramatically against the warm cream page background.
- At 1440px, the s3-density screenshot shows monospace text in table headers ("DIMENSION", "WHAT IT MEASURES") rendered in what appears to be a monospace font.
- The section indicators throughout use monospace formatting ("SECTION 01 . F-PATTERN . SPARSE DENSITY" visible in the viewport-top screenshot and the s2-quote screenshot).

**Programmatic data:**
- Lock sheet specifies: Code (pre, code) uses JetBrains Mono ONLY
- Dark code blocks use #1E1E1E or #1A1A1A backgrounds (from lock-sheet background zones)
- Builder-changelog mentions inline-code styling: warm background (#F5EDE2), warm border (#E0D5C5), border-radius: 3px
- Section indicators use monospace with small-caps, letter-spacing 0.05em

**Assessment:**
Code presentation is a STRONG point:
1. Dark code blocks create the highest-contrast visual moments on the entire page -- near-black against warm cream is a dramatic 200+ RGB point shift
2. Inline code gets its own background + border treatment, making it visually distinct from surrounding prose
3. JetBrains Mono is a premium code font (not system monospace)
4. Section indicators reuse monospace as a design element, creating a consistent "technical" voice

The dark code blocks in the S8 sequence-grid are arguably the most visually striking component on the entire page, providing essential visual variety in what is otherwise a text-heavy layout.

### Rating: 4/5

**Rationale:** Code presentation is one of the strongest component treatments on the page. Dark code blocks create dramatic contrast, inline code has dedicated warm styling, and JetBrains Mono is a quality font choice. The sequence-grid with 4 dark blocks in a 2x2 layout is the single most visually interesting component arrangement visible in the screenshots. Losing 1 point only because: (1) code blocks appear concentrated in one area (S8) rather than distributed throughout, limiting their impact as a page-wide richness mechanism.

---

## PA-17: Divider Variety

**Question:** Do dividers between sections look intentional? Are there different divider styles or is it all one type? Do they feel like designed elements or just lines?

### Evidence

**From screenshots:**
- In the 1440px viewport-top screenshot, a horizontal line divider is visible between S1 and S2. It appears as a thin horizontal rule spanning the content width.
- In the 1440px s2-quote screenshot, a horizontal divider is visible between S1 content and S2 (separating body text from the quote section). It appears as a simple dark line.
- In the 768px full-page view, dividers are visible at multiple section boundaries. They appear uniform -- thin dark lines of consistent width.

**Programmatic data:**
- 11 dividers with `role="separator"` (confirmed in computed-styles-data.md)
- CSS defines 3 divider types:
  - `.divider-smooth`: margin 16px 0 (minimal gap)
  - `.divider-bridge`: margin 24px 0 (moderate gap, includes bridge-prose italic text)
  - `.divider-breathing`: margin 24px 0 (moderate gap)
- Dividers use `border-top: 1px solid var(--color-border-subtle)` (#F0EBE3, the lightest warm border)
- Bridge dividers include italic prose text (bridge-prose) that adds narrative transitions between sections

**Assessment:**
Dividers are INTENTIONALLY styled but LOW variety:
1. All 11 dividers appear to use the same visual line style (1px solid #F0EBE3) -- the difference between types is spacing, not visual appearance.
2. Bridge dividers add italic transition text below the line, which IS a meaningful variety mechanism (text vs no-text).
3. The 3 margin levels (16px, 24px, 24px) create slight pacing differences, but `.divider-bridge` and `.divider-breathing` share the same margin, reducing to effectively 2 spacing levels.
4. From screenshots, all dividers look like thin warm-gray lines. They don't draw attention to themselves.

The bridge-prose mechanism is the most interesting aspect -- it adds narrative connective tissue ("The insight above crystallizes what five research streams discovered separately") between sections. But visually, the lines themselves are uniform.

### Rating: 2.5/5

**Rationale:** Dividers are intentional (not accidental) and well-suited to the editorial aesthetic -- subtle lines that don't compete with content. The bridge-prose mechanism adds textual variety. However, VISUAL variety is low: all dividers appear identical as thin warm lines. Compare to a highly designed page where dividers might use different widths, colors, patterns, or decorative treatments across sections. The 3 CSS classes suggest intended variety, but 2 of 3 share the same margin, and all share the same line appearance. Rating 2.5 rather than 2 because the bridge-prose text differentiates some dividers meaningfully.

---

## PA-18: Metadata Styling

**Question:** Are section indicators/metadata (like "Section 01 . F-Pattern . Sparse Density") styled distinctly from body text? Do they feel like designed labels?

### Evidence

**From screenshots:**
- In the 1440px viewport-top screenshot: "SECTION 01 . F-PATTERN . SPARSE DENSITY" is clearly visible as a monospace, uppercase, small-caps line above the section heading "What the Research Set Out to Find". It appears noticeably smaller and lighter than both the heading and body text.
- In the 1440px s2-quote screenshot: "SECTION 02 . FOCAL . SPARSE DENSITY" appears with the same treatment, with a red vertical border to its left (the structural border of S2).
- In the 768px scroll-02 screenshot: "SECTION 05 . DENSE GRID . DENSE" appears clearly in monospace uppercase with a red vertical border accent (S5's 4px red structural border).
- In the 1440px s3-density screenshot: "SECTION 04 . GUIDED SCAN . MODERATE" (though partially visible) follows the same pattern at the section transition.

**Programmatic data:**
- 12 section indicators present (one per section S1-S12)
- CSS styling (from builder-changelog): small-caps, letter-spacing 0.05em, warm text color, top border accent
- Font: appears to use monospace/JetBrains Mono at reduced size
- Color: muted/lighter than body text (#666666 secondary or similar warm gray)

**Assessment:**
Section indicators are EXCELLENTLY designed:
1. **Distinct typography:** Monospace + uppercase + small-caps + wider letter-spacing creates a completely different visual register from body text (Inter serif) and headings (Instrument Serif)
2. **Hierarchical clarity:** They read as LABELS, not content. The smaller size, lighter color, and monospace treatment immediately signals "navigational metadata."
3. **Information-rich:** Each indicator encodes 3 pieces of data: section number, reading pattern (F-Pattern/Focal/Dense Grid/Guided Scan), and density level (Sparse/Medium/Dense). This is functional design, not decoration.
4. **Consistent application:** All 12 sections have indicators in the same position and style, creating a reliable wayfinding system.
5. **Integration with structural borders:** Where sections have left borders (S2, S5, S7, S9, S10, S12), the indicator sits adjacent to the border, creating a compound moment of section identity.

This is the strongest single component treatment on the page.

### Rating: 5/5

**Rationale:** Section indicators are the gold standard of metadata styling. They use a completely distinct typographic voice (monospace vs serif vs sans-serif), carry meaningful structured information (section/pattern/density), maintain perfect consistency across all 12 sections, and integrate elegantly with structural borders. They would not be confused with any other element type on the page. This is what "designed label" looks like.

---

## Summary Table

| Question | Score | Key Finding |
|----------|-------|-------------|
| PA-13: Callout Differentiation | 3/5 | Border colors strong; backgrounds nearly identical |
| PA-14: Table Styling | 3.5/5 | Designed headers, warm aesthetic, but hover may be broken and variant differentiation is subtle |
| PA-15: List Treatment | 2/5 | Minimal/default styling; content architecture avoids lists in favor of richer components |
| PA-16: Code Block Presentation | 4/5 | Dark blocks are the most visually striking element; inline code well-styled; JetBrains Mono premium choice |
| PA-17: Divider Variety | 2.5/5 | Intentional but visually uniform; bridge-prose adds textual variety |
| PA-18: Metadata Styling | 5/5 | Excellent: distinct typography, functional information, consistent application, best component on page |

**Component Richness Average: 3.33/5**

---

## Cross-Cutting Observations

1. **Component distribution is uneven.** The richest components (code blocks, tension-pair grids, callouts) concentrate in S7-S8, while the first half (S1-S4) and final quarter (S9-S12) are mostly prose with tables. This creates a richness peak in the middle third of the page.

2. **The whitespace void problem persists.** Even with the improvements noted in programmatic verification, the screenshots overwhelmingly show blank pages. At 1440px, I viewed 17 scroll-position screenshots: approximately 10 showed zero or near-zero content (just warm cream). Content exists but is compressed into small vertical bands between vast empty spaces.

3. **Component vocabulary is adequate but not deep.** The page uses: callouts (4 types), tables (6 classes), dividers (3 types), code blocks (dark + inline), section indicators, grids (3 types), and a blockquote. That is 7 component categories. A highly rich page might add: pull quotes (distinct from blockquotes), figure captions, numbered steps, data visualization, comparison panels, or annotation markers.

4. **The 4px left border carries tremendous weight.** It is the primary differentiator for callout types, the structural border mechanism for sections, and the most visible design element after typography. When a single mechanism does this much work, it creates a visual vocabulary that is recognizable but narrow.

5. **The strongest moments (code blocks, section indicators) suggest the design system has a clear editorial voice.** The weakest moments (lists, divider uniformity, callout background similarity) suggest the builder invested CSS budget unevenly across component types.
