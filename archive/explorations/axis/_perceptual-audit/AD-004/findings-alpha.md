# Findings -- Auditor Alpha (Impression + Readability + Spatial)
# AD-004: Spiral Layout

**Date:** 2026-02-10
**Methodology:** Playwright screenshots at 1440x900 and 768x1024. Full scroll-through at both viewports. Animations disabled. Fonts loaded via document.fonts.ready. Total page height: ~7411 pixels at 1440px.

---

## SCROLL-THROUGH ANALYSIS (1440px)

### Viewport 1: Header (scroll 0)
Dark full-bleed header with warm cream text. Meta line ("EXPLORATION AD-004 / AXIS: SPIRAL / V1 ENRICHED") in small uppercase mono. Title "AD-004: Spiral Layout" in display serif at page size. Subtitle paragraph below. Geological survey map: four cells labeled Bedrock/Subsoil/Topsoil/Atmos with decreasing border weights (red heavy, tan medium, beige light, barely-there). Clean, authoritative, well-proportioned. The header consumes about half the viewport; the Established stratum title and two-column layout begin in the lower half.

### Viewport 2: Established Code Blocks (scroll 800)
Two dark code blocks showing the stratum CSS system and the golden ratio grid. The Essence callout (purple italic serif) is visible in the sidebar at the top right corner. The code blocks are large -- they dominate this viewport. The red left border is continuous and strong. No readability issues with the syntax-highlighted code.

### Viewport 3: Transition + Probable (scroll 1600)
The stratum transition zone ("DESCENDING: BEDROCK -> SUBSOIL") appears as a thin tan band. Below, the Probable stratum opens with its title + "CONFIDENCE: MODERATE" badge. A pull quote in italic display serif provides a strong visual waypoint. Body text with inline code follows. The data table begins with its four-column layout (Pattern / Implementations / Success Rate / Confidence). The left border is perceptibly thinner than Established -- the geological gradient is working.

### Viewport 4: Probable Caution + Code (scroll 2400)
The amber Caution callout is clearly visible. Below, "Implementation Guidelines" in italic serif h3, then body text with inline code snippets. A large Fibonacci code block occupies the center. Below the code block, significant empty space before the next transition zone -- the page feels like it is exhaling here.

### Viewport 5: Speculative Stratum (scroll 3200)
Transition zone ("DESCENDING: SUBSOIL -> TOPSOIL"), then the Speculative stratum. Content is pushed further right by increased left padding. The comparison grid is the visual centerpiece: two side-by-side panels, "ESTABLISHED APPROACH" (red border) and "SPECULATIVE APPROACH" (amber border), each containing prose and a code block. Below the panels, significant whitespace before the Note callout.

### Viewport 6: Open Stratum (scroll 4000)
The blue Note callout (AD-F-016) at the top, then the transition zone ("ASCENDING: TOPSOIL -> ATMOSPHERE"). The Open stratum begins with generous whitespace. The pull quote with amber border is visible. Below the pull quote, a VAST area of empty warm cream -- the viewport is more than half empty. This is semantically intentional (encoding uncertainty) but perceptually reads as a page that ran out of content.

### Viewport 7: Open Questions (scroll 4800)
The open questions list with decorative italic "?" markers. Four questions with bottom separator lines. The Forward Thread callout (green) begins. More generous whitespace. The "?" markers are visually distinctive -- large italic serif characters that create a list-marker pattern.

### Viewport 8: RAR Block (scroll 5600)
The Research Application Record snaps back to full container width -- a jarring spatial reset after the progressive left-indentation of the strata. The definition list is clean and functional: mono labels, body values, consistent spacing.

---

## SCROLL-THROUGH ANALYSIS (768px -- Full Page View)

### Key Observations from Full-Page Screenshot

1. **Progressive indentation IS visible:** The full-page view clearly shows content stepping rightward from Established through Open. This is the spiral's angular approximation working as intended.

2. **Two-column layout persists at 768px:** The Established stratum maintains its golden ratio two-column (text + sidebar) at this width. It's cramped but functional -- the metadata panel and Essence callout sit to the right of body text in a tight column.

3. **CRITICAL: Comparison grid text clipping at 768px.** The two comparison panels in Speculative remain side-by-side at 768px (the media query is `max-width: 768px`, so at exactly 768 the two-column layout is still active). The right panel's text is visibly truncated -- words are cut off at the panel's right edge.

4. **Open stratum border is invisible at 768px.** The computed border-left-width is 0.75 pixels (subpixel rendering of the 1px spec value). The border color (rgb 240, 235, 227) is nearly identical to the background (rgb 254, 249, 245). The result is that the Open stratum has NO visible left border -- it blends completely into the page background.

5. **RAR block width reset is visible in full-page view.** After the progressively narrowing strata, the RAR block snaps back to full container width. In the full-page thumbnail, this appears as a sudden widening of the content column near the bottom.

---

## FIVE DIMENSION PASSES

### Pass 1: Readability

**1440px:**
- Body text is comfortable to read: appropriate size, generous line height, well-bounded line length (about 70 characters)
- Code blocks are clearly legible against the dark background with good syntax color contrast
- The table in Probable is clean and scannable -- open grid with no vertical borders works well
- Pull quotes in italic display serif are distinctive and readable at the section heading size
- The Open Questions "?" markers create an unusual reading rhythm -- the large decorative "?" is at a very different size than the body text beside it. This works visually but creates a slight jolt at each question start

**768px:**
- Body text remains comfortable in single column
- Code blocks may require horizontal scrolling at this width (observed in the comparison panels)
- The two-column Established layout is cramped but readable
- Pull quotes are still comfortable in single column

**Concern:** The confidence badges and stratum transition labels both use the smallest type size (meta) in uppercase mono with letter-spacing. At small sizes these are hard to distinguish from each other -- they read as generic "small system text" rather than as distinct functional elements.

### Pass 2: Spatial Balance

**1440px:**
- The progressive left-padding creates a visible diagonal when scrolling: the left border steps rightward with each stratum. This IS the angular spiral's primary spatial gesture
- However, the right edge of content doesn't change (paragraphs cap at about 70 characters). So the narrowing is asymmetric -- growing left whitespace, fixed right content boundary
- The header at centered 860 max-width sits comfortably in the 1440 viewport with generous flanking whitespace
- Stratum transition zones provide rhythmic horizontal lines that break the vertical scroll
- The RAR block's return to full width is spatially jarring -- it breaks the progressive narrowing narrative

**768px:**
- The left-padding escalation still applies but is less dramatic because the viewport is narrower
- The Open stratum's left padding of 64 units consumes a significant fraction of the available width
- Content in the Open stratum is pushed right, leaving a left-side void that at 768px is disproportionately large relative to the content column

**VERIFIED via screenshot:** At 1440px scroll position ~4000, the Open stratum's pull quote plus surrounding whitespace creates a viewport that is more than half empty. This is the boldest spatial decision in the page -- beautiful or wasteful depending on whether the viewer understands the confidence-encoding concept.

### Pass 3: Hierarchy and Flow

**1440px:**
- Eye flow follows a clear top-to-bottom path: Header -> Established -> Probable -> Speculative -> Open -> RAR
- Each stratum announces itself with a title + badge pair, providing consistent wayfinding
- The pull quotes (Probable and Open only) serve as intermediate waypoints that break the flow
- Code blocks act as visual anchors -- dark rectangles against light backgrounds that punctuate the scroll
- The geological survey map in the header provides a table-of-contents effect
- The comparison grid in Speculative is the most visually complex moment -- two side-by-side panels each containing prose and code

**768px:**
- Hierarchy is preserved in single column (where applicable)
- The two-column moments that persist at 768px (Established sidebar, comparison grid) disrupt the otherwise clean single-column flow

**Verified finding:** The eye goes first to the header title "AD-004: Spiral Layout" -- this is correct. Within the Established stratum, the sidebar metadata panel competes with the main content for attention. The bordered box with structured key-value pairs is visually dense and draws the eye away from the introductory prose.

### Pass 4: Consistency

**1440px:**
- The stratum pattern is highly consistent: each has a header (title + badge), body content, and varying code/callouts
- Border treatment is systematic: 4 (red) -> 3 (tan) -> 3 (beige) -> 1 (invisible) left border gradient
- Background colors shift subtly per stratum (white, warm cream, warmer cream, warm cream again)
- Callout accent colors are varied (purple, amber, blue, green) -- each appears once, no repetition within a viewport
- Transition zones are identical in structure (label text changes only)
- Code block styling is consistent (dark background, same font, same padding)

**Inconsistency found:** Pull quotes appear in Probable and Open but NOT in Established or Speculative. This breaks the pattern -- either all strata should have pull quotes at their openings, or the pull quotes should be explained as stratum-specific elements.

**Inconsistency found:** The comparison grid uses two-column layout within the Speculative stratum, while no other stratum has this internal structure. The Established stratum has a two-column main+sidebar, which is a different structural concept. The comparison grid feels like a borrowed component rather than a native spiral element.

### Pass 5: Ship Test

**Would I put my name on this?** Yes, with three specific reservations:

1. **CRITICAL (768px): Text clipping in comparison grid.** The right panel's content is cut off at exactly 768px viewport width. The responsive breakpoint at `max-width: 768px` means the collapse happens below 768, not at 768. This needs to be `max-width: 769px` or preferably a wider breakpoint.

2. **The Open stratum's left border is invisible.** At 768px the subpixel-rendered 0.75px border in a color nearly matching the background creates zero visual boundary. At 1440px the 1px border is barely visible. The semantic intent (uncertainty = lightest signal) crosses the line from "subtle" to "absent."

3. **Excessive whitespace in Open stratum.** At 1440px scroll position ~4000, a user encounters a viewport that is more than half empty. Even with the confidence-encoding philosophy, this risks user confusion ("am I at the end of the page?").

**Overall:** The page is intellectually coherent, typographically clean, and demonstrates genuine innovation in the border-weight-as-confidence encoding. The geological metaphor works well as a vertical stacking of strata. The "spiral" label remains aspirational rather than delivered -- the layout is a linear geological column with progressive left indentation, not a spiral reading path.

---

## PA QUESTIONS -- 1440px

### PA-01: What's the first thing that bothers you?
The disconnect between the word "Spiral" in the title and what you actually see. The layout is a straight vertical column with increasing left margins. Nothing spirals. The angular approximation concept is intellectually defensible but perceptually absent -- a viewer sees "stepped left borders," not "spiral path."

### PA-02: Is any text uncomfortable to read? Point to the worst spot.
The Open Questions list. The large italic "?" markers sit at a dramatically different size than the body text beside them. The visual weight mismatch creates a jarring effect at each question start. The third question about "reverse-spiral" is the longest and shows this most clearly -- the decorative "?" feels oversized relative to the multiline question text that follows.

### PA-03: Does this feel like one designer made it, or three?
One designer. The palette is unified (warm creams, tans, dark charcoal, red accent). Typography is systematic (display serif for titles/quotes, body sans for text, mono for meta/code). Border vocabulary is deliberate and explained. Callout structure is consistent with varied accents. This feels like a single, intentional design voice throughout.

### PA-04: Where does your eye go first? Is that where it SHOULD go?
Eye goes to the header title "AD-004: Spiral Layout" in display serif against the dark background -- correct target. Second fixation is the geological survey map (four colored cells), which provides structural orientation. Third fixation drops to "Established" and its red confidence badge. Visual hierarchy works as intended.

### PA-05: Would you put your name on this? What would you fix first?
Yes, with reservations. First fix: the comparison grid's responsive breakpoint needs to trigger at 768px or wider, not below it. Text clipping is unacceptable. Second fix: the Open stratum's left border needs to be visible -- perhaps increase to 2px or use a slightly darker color that still reads as "lightest" without disappearing.

### PA-06: Are any words stacking vertically, one per line, in any column?
No vertical word stacking observed at 1440px. The sidebar metadata panel has key-value pairs that fit comfortably side by side. All text columns maintain adequate width for multi-word lines.

### PA-07: Can you read the longest paragraph without your eye losing its place between lines?
Yes. Body paragraphs have generous line height and are capped at about 70 characters. The longest paragraph in Established ("In this implementation, border-weight acts...") runs about five lines. Line tracking holds without difficulty.

### PA-08: Is there any text you have to lean in or squint to read?
The confidence badges and stratum transition labels are at the smallest type size (meta, about 12 units). In the Open stratum, the badge "CONFIDENCE: UNRESOLVED" has a very thin, light border that barely distinguishes it from surrounding whitespace. Not quite squinting territory, but approaching the lower threshold of comfortable distinction.

### PA-09: Is there dead space that serves no purpose -- a screen-sized void with nothing in it?
VERIFIED: At scroll position ~4000 (1440px), the viewport after the Open stratum's pull quote is more than half empty warm cream. This IS semantically purposeful (encoding uncertainty as whitespace), but a user who doesn't know the confidence-encoding concept would experience it as dead space. The page feels like it ran out of content and the user has reached the bottom -- but there are still questions and a callout and an entire RAR block below.

### PA-10: If you squint until you can't read any text, does the layout still look balanced?
Squinted, the page shows: dark horizontal band (header), dense content with dark rectangles (code blocks) in the top third, gradually thinning content with more whitespace in the middle third, and sparse scattered text in the bottom third before a structured block (RAR) at the very end. The shape is an inverted triangle -- wide/dense at top, narrow/sparse at bottom. This is intentionally asymmetric, not balanced. It reads as a page that progressively dissolves.

### PA-11: Are the margins generous (confident spacing) or anxious (clutching or pushing away)?
The margins start confidently generous in Established (comfortable padding, room to breathe around the two-column layout) and become increasingly extravagant through Probable and Speculative. By the Open stratum, the spacing is so generous it crosses from "confident" into "retreating" -- as if the content is reluctant to occupy the space. The header and Established sections feel authoritative; the Open section feels hesitant. This gradient from confident to hesitant IS the semantic intent, but perceptually it creates an emotional arc where the page loses its nerve.

---

## PA QUESTIONS -- 768px

### PA-01: What's the first thing that bothers you?
The comparison grid in the Speculative stratum. At 768px the two panels are still side-by-side and the right panel's text is VISIBLY CLIPPED. Words are cut off at the panel edge. This is the worst visual issue on the page at this viewport.

### PA-02: Is any text uncomfortable to read? Point to the worst spot.
The clipped text in the Speculative Approach panel of the comparison grid. "Early" becomes "Ea...", "surface" becomes "surfa...". Beyond the clipping, the code blocks within these narrow panels are difficult to read -- they render as thin dark bars where the code is too small to parse.

### PA-03: Does this feel like one designer made it, or three?
Still one designer. The responsive collapse is mostly clean and consistent. The clipping issue feels like a breakpoint oversight, not a design-voice problem.

### PA-04: Where does your eye go first? Is that where it SHOULD go?
Same as 1440 -- header title first, then geological map (now 2x2 grid). Works correctly at this viewport.

### PA-05: Would you put your name on this? What would you fix first?
Yes with stronger reservations than 1440. First fix: comparison grid must collapse to single column at 768px. The media query breakpoint needs adjustment. Second fix: cap the Open stratum's left padding at this viewport -- 64 pixels of left padding on a 768-wide screen leaves too little content width.

### PA-06: Are any words stacking vertically, one per line, in any column?
Not stacking vertically, but the metadata panel sidebar in Established is cramped at 768px. The key-value pairs ("Confidence" / "HIGH") still fit side by side but with minimal breathing room.

### PA-07: Can you read the longest paragraph without losing your place?
Yes. Narrower columns mean shorter lines which are actually easier to track. Line height of 1.7 helps.

### PA-08: Is there any text you have to lean in or squint to read?
The meta-sized labels are the smallest text. On a tablet at 768px these are fine. The clipped text in the comparison grid is not a squinting issue -- it's simply unreadable because it's truncated.

### PA-09: Dead space?
The Open stratum's top padding creates a scroll zone where the viewport appears entirely empty. The border is invisible (0.75 subpixel, color matching background) and the background matches the page. A user scrolling through would perceive this as the end of the page.

### PA-10: Squint test at 768?
Squinted, the full-page view shows the progressive indentation clearly. The dark header, the red left border, the dark code blocks, and the density gradient from top to bottom all create a coherent visual narrative. The comparison panels appear as two small adjacent boxes -- their clipping issue is not visible at squint distance.

### PA-11: Margins at 768?
The margins follow the same confident-to-hesitant gradient as at 1440. The Open stratum's 64px left padding at this width is proportionally more aggressive -- it consumes about 8% of the viewport just for the left margin of one stratum. This crosses from "generous" into "anxious pushing away."

---

## AD-SPECIFIC: SPIRAL ASSESSMENT

**Does the content feel like it's spiraling inward?**
No. The full-page screenshot at 768px shows this definitively: the content steps RIGHTWARD as you scroll DOWN, creating a left-margin staircase. There is no spiral motion. No content moves in a curved or rotating path. The angular approximation creates a vertical column with progressive left indentation -- geometrically, this is a staircase or waterfall, not a spiral.

**Does density increase as you scroll deeper?**
The opposite. Density DECREASES as you scroll. Established (top) is the densest: two-column layout, metadata panel, two code blocks, an Essence callout. Open (bottom) is the sparsest: one pull quote, one paragraph, a question list, one callout. The CRESCENDO density pattern runs dense-to-sparse top-to-bottom. This is geologically correct (bedrock is denser than atmosphere) but spirally backward (spirals typically tighten inward, implying density increase at center).

**Does the spiral create flow or confusion?**
Neither spiral nor confusion. The flow is straightforwardly linear and easy to follow. Stratum transitions clearly mark section boundaries. Confidence badges label each stratum. Navigation is conventional vertical scrolling with left-margin variation. A reader looking for spiral reading dynamics (eye traveling in curves, content repositioning around a center) would not find them.

---

## SUMMARY OF FINDINGS

| # | Finding | Severity | Viewport | Screenshot-Verified |
|---|---------|----------|----------|---------------------|
| 1 | Comparison grid text clipping at 768px -- right panel content truncated | HIGH | 768 | YES (ad004-768-scroll4-speculative-comparison.png) |
| 2 | Open stratum left border is invisible: 0.75px subpixel, color matches background | HIGH | 768 | YES (ad004-768-scroll8-open-actual.png shows empty viewport) |
| 3 | Near-empty viewport in Open stratum -- more than half the viewport is empty whitespace | Medium | 1440 | YES (ad004-1440-scroll6-comparison-code.png) |
| 4 | "Spiral" label does not match rendered spatial pattern (vertical stack with stepped margins) | Medium | Both | YES (ad004-768-fullpage.png shows staircase, not spiral) |
| 5 | RAR block resets to full container width, breaking progressive narrowing narrative | Medium | Both | YES (ad004-768-fullpage.png) |
| 6 | Two-column Established layout persists at 768px -- cramped but functional | Low | 768 | YES (ad004-768-viewport1-header.png) |
| 7 | Open Questions "?" markers are oversized relative to body text | Low | Both | YES (ad004-1440-scroll7-open-questions.png) |
| 8 | Pull quotes appear in Probable and Open only -- inconsistent stratum treatment | Low | Both | YES |
| 9 | Confidence badges at meta size lack distinctness from transition labels | Low | Both | YES |
| 10 | Two consecutive code blocks in Established feel heavy | Low | 1440 | YES (ad004-1440-scroll2-established.png) |
| 11 | Sidebar metadata panel competes with main content for attention | Low | 1440 | YES (ad004-1440-viewport1-header.png) |
| 12 | Geological survey map in header is excellent orientation device | POSITIVE | Both | YES (ad004-1440-viewport1-header.png) |
| 13 | Border-weight gradient as confidence encoding is innovative and effective | POSITIVE | 1440 | YES |
| 14 | Typography system is unified and comfortable to read | POSITIVE | Both | YES |
| 15 | Stratum transitions provide good rhythmic breathing between sections | POSITIVE | Both | YES (ad004-1440-scroll3-transition-probable.png) |
| 16 | Two-column golden ratio in Established is well proportioned at 1440 | POSITIVE | 1440 | YES (ad004-1440-viewport1-header.png) |
| 17 | Responsive collapse of geological map (4-col to 2x2) works well | POSITIVE | 768 | YES (ad004-768-viewport1-header.png) |
| 18 | Page reads as one coherent designer's work | POSITIVE | Both | YES |
| 19 | CRESCENDO density runs dense-to-sparse (correct geologically, backward for spiral) | NOTE | Both | YES (ad004-768-fullpage.png) |
| 20 | Progressive left-indentation is visible and creates intended geological stepping | NOTE | Both | YES (ad004-768-fullpage.png) |
