# CD-005 Perceptual Audit Findings
## Multi-Axis Transition — Testing Strategy

**Auditor:** CD-005 Standalone Perceptual Auditor
**Date:** 2026-02-11
**Viewports:** 1440x900, 1024x768, 768x1024

---

## Cold Looks

### 1440px Cold Look

**Gut Reaction:** This feels like a serious, well-organized technical document. The dark header grounds me immediately. I see "Testing Strategy" and know exactly what this page is about. The content flows into term definitions with colored left-edge markers -- purple for Essence, blue for Context, red for Term -- alongside definition blocks. It feels structured and intentional, like a textbook that respects its reader.

**Worst Thing:** The definition blocks create a zigzag layout -- the "Unit Test" label sits left with its definition block floating right, while "Integration Test" reverses this arrangement. The zigzag feels deliberate (like a Z-pattern) but the asymmetry makes each pair feel slightly off-balance.

**Best Thing:** The Essence callout is gorgeous. Purple accent bar, italic serif text, generous breathing room. It announces itself as the philosophical heart of the section without shouting.

**Ship Verdict:** Would ship at desktop. Professional and considered.

### 768px Cold Look

**Gut Reaction:** The narrow viewport handles the Z-pattern section beautifully. The term/definition pairs maintain their side-by-side arrangement but compress gracefully. The header stacks tightly but remains readable. The Essence callout still has its purple accent bar and italic text, breathing comfortably even at this width.

**Worst Thing:** The term/definition zigzag at narrow width makes the eye work harder. The Integration Test definition box sits left while its label sits right -- at this width the content blocks are close together, making the zigzag feel more cramped than elegant.

**Best Thing:** No horizontal overflow anywhere in the Z-pattern section. Content reflows naturally. The text remains readable without horizontal scrolling.

**Ship Verdict:** Mostly ship-ready. The bento grid section (visible in full-page screenshot) appears to reflow into a workable stacked layout, addressing the Phase 2 CRITICAL finding about responsive overflow. The massive trailing blank space below the footer is the biggest issue.

### 1024px Cold Look

**Gut Reaction:** The tablet width feels like the sweet spot for this page. The Z-pattern zigzag has enough room to breathe without feeling wasteful. The Essence callout sits naturally within the content width. Everything feels proportionate and confident.

**Worst Thing:** Same trailing dead space below the footer as other viewports.

**Best Thing:** The balance between content width and margins feels most natural at this size. Not too tight (like 768), not too spacious (like 1440).

**Ship Verdict:** Would ship. This is the page's best viewport.

---

## 5 Dimension Passes (1440px primary, noted deviations at 768/1024)

### Dimension 1: Typography & Readability

The page uses a clear type hierarchy. The main heading "Testing Strategy" is in a decorative serif face (italic, large) that immediately signals this is a title, not body copy. Section headings ("The Testing Landscape," "Deep Dive: Unit Testing Patterns," "Test Infrastructure at a Glance," "Build Your Test Suite") are in a clean serif face at a comfortable size.

Body text is in a legible serif at a comfortable reading size -- roughly 16-18 characters per line at 1440px on the body paragraphs (which occupy about half the page width in the Z-pattern section). Line height is generous, making long paragraphs trackable.

Code blocks use a monospace font on a dark background with syntax coloring (keywords in one hue, strings in another, comments dimmed). The code is perfectly readable -- good character size, proper line spacing, clear syntax highlighting.

Callout text (Essence, Tip, Gotcha) uses italic serif for the body with small-caps labels in accent colors. The italic is readable but on long callouts might fatigue the eye slightly.

**At 768px:** Body text reflows cleanly. Paragraph width fills more of the viewport but stays readable -- roughly 65-75 characters per line, which is within comfortable range. Code blocks may require horizontal scrolling for longer lines but the accessibility tree shows properly structured code.

**At 1024px:** Excellent balance. Body paragraphs sit at about 60-70 characters per line -- the typographic ideal.

### Dimension 2: Color & Contrast

The page uses a warm, muted palette. The header is dark (near-black) with cream/ivory text and a red accent stripe at the bottom. The body background is warm cream/off-white. Text is dark gray against this cream -- high contrast without being harsh.

Accent colors are purposeful and consistent:
- **Purple** for Essence callouts (philosophical/abstract)
- **Blue** for Context callouts (supplementary information)
- **Red** for Term labels and section accent bars
- **Green** for Tip callouts
- **Amber/Orange** for Gotcha/warning callouts

Code blocks are dark (near-black background) with colored syntax tokens. The contrast between the dark code blocks and the cream page background creates strong visual rhythm.

The "Core Principle" callout in the F-pattern section has a light background with a purple left accent bar. The "Reasoning" panel has a structured background. Tables in the bento grid section appear to have alternating row treatment for readability.

All grays and neutrals feel from the same warm family -- no cool grays jarring against the warm cream.

### Dimension 3: Spacing & Layout

**Z-Pattern Section:** Content is centered with generous margins on both sides at 1440px. The zigzag term/definition layout alternates left-right placement, creating a reading pattern that moves the eye across the page. Vertical spacing between term blocks is generous.

**Transition Zones:** The page has two explicit transition zones -- thin horizontal rules with centered headings ("Deep Dive: Unit Testing Patterns" and the "Shifting Focus" callout before the bento grid). These transitions are clear and well-spaced, giving the reader a breath before the next content mode.

**F-Pattern Section:** Content shifts to a single-column layout with indented callouts and full-width code blocks. The F-pattern is reinforced by the left-aligned headings ("Structuring Test Suites," "Mocking Strategies," "Organizing Test Files") each with a red left accent bar that creates a strong scannable left edge.

**Bento Grid Section:** At 1440px the grid shows multiple cells arranged in a multi-column layout -- directory tree, comparison table, configuration code, CI pipeline code, gotcha callout, and metrics table. Each cell has a labeled header ("Structure," "Decision Matrix," "Configuration," "Pipeline," "Metrics").

**CRITICAL OBSERVATION -- Trailing Dead Space:** At ALL three viewports, the page has a massive empty area below the footer. Based on the full-page screenshots, approximately 20-25% of the total scrollable height is completely blank cream space after the footer. This is a significant layout issue.

**At 768px:** The bento grid appears to reflow into a stacked or reduced-column layout. The Phase 2 CRITICAL finding about responsive overflow at 768px appears to have been ADDRESSED -- the full-page screenshot shows no horizontal overflow or content spilling outside the viewport boundaries.

### Dimension 4: Component Consistency

Callout components are consistent in structure: colored left accent bar + small-caps label + body text. This pattern repeats for Essence (purple), Context (blue), Tip (green), Gotcha (amber), Core Principle (purple), and Shifting Focus (the transition callout).

Term definition blocks follow a consistent pattern: colored "TERM" label + term name in a decorative serif + definition text in a bordered/shadowed panel.

Code blocks are consistent: dark background, syntax highlighting, generous internal spacing.

Tables in the bento grid section follow a consistent pattern: header row with column labels, body rows with data.

The "Reasoning" panel (Mock When / Use Real When / Summary) introduces a third column layout variant that is unique to the F-pattern section. It functions like a comparison card.

The Resolution section at the bottom uses a checklist component (Setup Checklist) and a Challenge callout -- both consistent with the callout vocabulary established earlier.

### Dimension 5: Flow & Narrative Arc

The page has a clear three-act structure:
1. **Z-Pattern (Overview):** Broad introduction, philosophical essence, three key terms defined in an alternating layout.
2. **F-Pattern (Deep Dive):** Detailed exploration of unit testing, mocking, file organization. Dense, scrollable, reference-grade content.
3. **Bento Grid (Reference):** Quick-lookup infrastructure cards -- directory layout, framework comparison, configuration, CI, metrics.

Each zone is separated by an explicit transition element. The transitions are well-crafted -- the first uses a centered heading ("Deep Dive: Unit Testing Patterns") and the second uses a full callout ("Shifting Focus") that explicitly tells the reader what's changing and why.

The Resolution section provides a concrete call to action (Setup Checklist + Challenge), which gives the page a satisfying ending.

The footer is minimal and appropriate: page identifier on the left, provenance tags on the right.

**Flow Issue:** The massive trailing blank space after the footer breaks the narrative closure. Instead of ending on the footer, the page drifts into emptiness. This undermines the otherwise strong ending.

---

## PA Questions — 1440px

**PA-01: What's the first thing that bothers you?**
The zigzag term/definition layout in the Z-pattern section creates a slight visual unease. The eye has to alternate between left-term/right-definition and left-definition/right-term, which adds cognitive load to what should be a gentle introduction. The first pair (Unit Test) feels natural (term left, definition right), but the reversal for Integration Test is jarring.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The Context callout text is the worst -- it's a long single-sentence paragraph in italic serif that spans nearly the full content width. At this length, italic text becomes slightly fatiguing. The code block comments (gray on dark) are readable but could be slightly brighter for aging eyes.

**PA-03: Does this feel like one designer made it, or three?**
One designer, unequivocally. The vocabulary of components (accent-bar callouts, dark code blocks, bordered definition panels, centered transition headings) is applied consistently throughout. The three zones (Z, F, Bento) feel like deliberate modes from a single hand, not three different people's work.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the "Testing Strategy" heading in the dark header, then drops to the red stripe and into "The Testing Landscape." This is exactly right -- header orients, then the first content section begins.

**PA-05: Would you put your name on this? What would you fix first?**
I would put my name on this with one fix: the trailing blank space below the footer. Remove it, and the page ends confidently. With it, the page feels unfinished -- like someone forgot to close the curtain.

**PA-06: Are any words stacking vertically, one per line, in any column?**
No. All text flows naturally within its columns. The term names ("Unit Test," "Integration Test," "End-to-End Test") are short enough to sit on one line. No vertical word stacking anywhere.

**PA-07: Can you read the longest paragraph without losing your place?**
Yes. The longest paragraph is the body text introduction ("Every software project faces the same fundamental question..."), which runs about 4 lines at reading width. The generous line height keeps it trackable. No paragraph in the F-pattern section exceeds 5-6 lines, which is comfortable.

**PA-08: Is there any text you have to lean in or squint to read?**
The header metadata line ("EXPLORATION CD-005 COMBINATION: MULTI-AXIS TRANSITION v1") is quite small and in a muted gray against the dark header. It's decorative more than informational, but if you actually need to read it, you might lean in. Also, the "v1" version badge is tiny.

**PA-09: Is there dead space that serves no purpose?**
YES -- the massive trailing blank space below the footer. This is the single biggest spatial issue on the page. It accounts for roughly 20-25% of the total scrollable height and serves absolutely no purpose.

Additionally, in the F-pattern section, there are occasional gaps between elements that feel slightly too generous -- particularly between the Core Principle callout and the code block that follows it.

**PA-10: If you squint until you can't read text, does the layout look balanced?**
At 1440px, squinting reveals a clear rhythm: dark header band, cream content with alternating dark/light blocks (code blocks vs text), a centered transition moment, more alternating blocks, another transition, a grid of cells, and a dark footer band. The rhythm is strong. The trailing blank space at the bottom is the only thing that breaks the balance -- the page should end where the dark footer band is.

**PA-11: Are the margins generous (confident) or anxious (clutching)?**
Generous and confident. The content sits comfortably within the page width, leaving wide margins on both sides. The spacing between sections is ample without being wasteful. The callouts and code blocks breathe easily. This page is not afraid of white space -- except at the bottom where there's too much of it.

**PA-12: Do your eyes flow smoothly from section to section?**
Yes, with one exception. The Z-pattern to F-pattern transition ("Deep Dive: Unit Testing Patterns") works beautifully -- the centered heading and horizontal rule create a clear page break. The F-pattern to Bento grid transition ("Shifting Focus" callout) also works well -- the callout text explicitly signals the change in reading mode. Within the F-pattern section, the flow from Structuring Test Suites through Mocking Strategies to Organizing Test Files is smooth, guided by the red accent bars on each heading.

**PA-13: Is there a clear visual ending, or does the page just stop?**
The Resolution section ("Build Your Test Suite") provides a clear narrative ending with a checklist and a challenge. The dark footer band then provides a visual closing bracket that mirrors the dark header band. However, the massive blank space BELOW the footer means the page feels like it keeps going after it should have stopped. If you scroll to the actual bottom, you get blank cream -- an anticlimactic end to what should be a strong close.

**PA-14: Does every column have enough room for its content to breathe?**
Yes. The Z-pattern definition panels have generous internal spacing. The F-pattern text columns are comfortable width. The bento grid cells each have enough room for their content (directory tree, tables, code blocks). No content feels cramped or squeezed.

**PA-15: Trace the left edge of every content block. How many starting positions?**
About 3-4 distinct left-edge positions:
1. The main content margin (used by headings, body paragraphs)
2. The callout indent (used by Essence, Context, Tip, Gotcha -- slightly indented from the main margin)
3. The code block edge (aligns with the callout indent)
4. The bento grid cells (align with the main content margin)

This is a disciplined number -- not too many, not too few. The alignment grid is clean.

**PA-16: Pick two elements that should look identical. Do they?**
The Tip callouts in the F-pattern section -- there are two ("Use the pattern..." and "Use co-location for unit tests..."). They look identical: same green accent bar, same small-caps "TIP" label, same background treatment, same type treatment. Consistent.

**PA-17: Is there a visual rhythm (like a beat in music), or random?**
Strong rhythm. The pattern is: heading + prose + callout + code + callout + heading + prose + callout + code. It's like a musical phrase that repeats with variations. The transitions act as key changes. The bento grid is a coda -- a different tempo (reference mode) that resolves the piece.

**PA-18: Do all the grays/neutrals feel like the same family?**
Yes. The warm cream background, the slightly darker cream for callout backgrounds, the soft gray text, the darker gray for secondary text -- all belong to the same warm neutral family. The code block backgrounds (near-black with warm undertones) also harmonize. No cool grays or blue-grays intrude.

**PA-19: Is there any element that feels like it's from a different website?**
No. Every element -- from the header to the callouts to the code blocks to the bento grid to the footer -- speaks the same visual language. The "Reasoning" comparison panel (Mock When / Use Real When) is the most structurally complex element, but its styling still fits the vocabulary.

**PA-20: Describe this page's personality in three words. Does it match intent?**
**Methodical, confident, layered.** Yes, this matches the intent perfectly. A page about testing strategy SHOULD feel methodical (organized approach to verification), confident (knowing what works), and layered (from overview to deep dive to reference). The three-zone structure reinforces the "layered" personality -- you can read at whatever depth you need.

---

## PA Questions — 768px

**PA-01:** The zigzag term/definition layout compresses at 768px. The pairs are still side-by-side but tighter. The Integration Test pair particularly feels crowded -- the definition panel and the term label compete for space more aggressively than at wider viewports.

**PA-02:** The Context callout ("The testing pyramid places unit tests at the base...") now spans nearly the full viewport width in italic. At this width, it's a longer read than at 1440px because the line count increases. The italic becomes more fatiguing at narrower width.

**PA-03:** Still feels like one designer. The responsive adaptation is uniform -- everything scales down together, maintaining the same proportional relationships.

**PA-04:** Eye goes to the header, then "The Testing Landscape." Same as desktop -- correct flow.

**PA-05:** Fix the trailing blank space. At 768px it's even more noticeable because mobile users are more scroll-conscious and hitting a void after the footer feels broken.

**PA-06:** No vertical word stacking. Term names still fit on single lines at 768px.

**PA-07:** Yes, the longest paragraphs are slightly longer in line count but still trackable thanks to good line height.

**PA-08:** The header metadata is even smaller-feeling at 768px. Still readable but barely.

**PA-09:** The trailing blank space is the major offender. Within the content, spacing feels more appropriate at 768px -- less wasted space between elements than at 1440px.

**PA-10:** Squinting at 768px reveals a tighter but still rhythmic layout. The dark code blocks and light content alternate clearly. The bento grid section compresses into a stacked arrangement that still reads as a cohesive grid block.

**PA-11:** Margins are still confident at 768px. The content doesn't cling to the edges -- there's comfortable breathing room on both sides.

**PA-12:** Flow between sections works well. The transitions are still clear at narrow width.

**PA-13:** Same issue as desktop -- the Resolution section ends clearly but the blank space below the footer undermines the close.

**PA-14:** The bento grid cells at 768px appear to stack or reduce columns. Based on the full-page screenshot, the grid cells maintain readable internal spacing. The Phase 2 CRITICAL finding about responsive overflow appears to be FIXED -- no content breaks out of the viewport.

**PA-15:** About 2-3 left-edge positions at 768px, which is tighter and more disciplined than at 1440px.

**PA-16:** The two Tip callouts still look identical at 768px. Consistency maintained.

**PA-17:** The rhythm is faster at 768px because each element takes up proportionally more viewport height, so you encounter the heading-prose-callout-code beat more quickly as you scroll.

**PA-18:** All neutrals still feel from the same warm family at 768px.

**PA-19:** No foreign-feeling elements at 768px.

**PA-20:** **Methodical, dense, functional.** At 768px the page shifts slightly from "confident" to "dense" -- the content fills more of the viewport, creating a more information-packed feel. This still matches intent -- testing documentation should be functional and information-dense.

---

## PA Questions — 1024px

**PA-01:** At 1024px, the zigzag is less bothersome than at either extreme. The term/definition pairs have enough room to breathe but not so much that the asymmetry feels wasteful. The first thing that bothers me is actually the trailing blank space -- at this viewport it's the most obviously disproportionate.

**PA-02:** Same as 1440px -- the Context callout italic text. At 1024px the line length is actually ideal for body copy but slightly long for sustained italic.

**PA-03:** One designer. The 1024px viewport feels like the page's "home" size -- everything fits most naturally here.

**PA-04:** Header to "The Testing Landscape." Correct priority.

**PA-05:** Would ship after removing trailing blank space. At 1024px this page is at its best.

**PA-06:** No vertical word stacking.

**PA-07:** Yes, paragraphs are very comfortable at this width.

**PA-08:** Header metadata is readable at 1024px -- better than at 768px, similar to 1440px.

**PA-09:** The trailing blank space, same as other viewports. Within content, spacing is well-calibrated at 1024px.

**PA-10:** Squinting reveals the most balanced layout of the three viewports. The rhythm of dark/light blocks is clear, the bento grid reads as a distinct zone, and the footer provides a clear closing bracket (minus the trailing space).

**PA-11:** Generous and confident. 1024px is the Goldilocks zone for this page's margins.

**PA-12:** Smooth flow between all sections. Transitions work well.

**PA-13:** Clear ending via Resolution section, undermined by trailing blank space.

**PA-14:** Every column breathes comfortably at 1024px. The bento grid cells have ideal proportions.

**PA-15:** About 3 left-edge positions -- clean and disciplined.

**PA-16:** Both Tip callouts match perfectly.

**PA-17:** Strong visual rhythm. The beat is comfortable -- not too fast (768) or too slow (1440).

**PA-18:** Warm neutral family maintained throughout.

**PA-19:** No foreign elements.

**PA-20:** **Methodical, confident, authoritative.** At 1024px the page reaches its fullest expression. The layered structure feels natural, the spacing feels intentional, and the content has genuine authority. This matches the testing strategy intent perfectly.

---

## Summary of Findings

### HIGH Priority

| ID | Finding | Viewports | Description |
|----|---------|-----------|-------------|
| CD-005-H01 | Trailing Dead Space | ALL | Massive blank space below the footer accounting for approximately 20-25% of total scrollable height. The page should end at the footer. This appears to be a scroll-animation artifact where elements that would normally reveal on scroll leave empty reserved space when animations are disabled, or simply excess body/html height. |

### MEDIUM Priority

| ID | Finding | Viewports | Description |
|----|---------|-----------|-------------|
| CD-005-M01 | Zigzag Cognitive Load | ALL (worst at 768) | The Z-pattern term/definition zigzag alternation creates unnecessary cognitive load. While intentionally a Z-pattern, the eye must work harder to track the alternating placement of term labels and definition panels. |
| CD-005-M02 | Long Italic Callouts | ALL (worst at 768) | Context and Essence callouts use italic serif text that becomes fatiguing on longer passages, particularly the Context callout about the testing pyramid. |

### LOW Priority

| ID | Finding | Viewports | Description |
|----|---------|-----------|-------------|
| CD-005-L01 | Header Metadata Readability | ALL (worst at 768) | The "EXPLORATION CD-005 COMBINATION: MULTI-AXIS TRANSITION v1" text and version badge in the header are very small and difficult to read. Functional but borderline. |
| CD-005-L02 | F-Pattern Spacing Gaps | 1440 | Occasional gaps in the F-pattern section between elements (e.g., Core Principle callout to code block) feel slightly too generous, creating moments where the eye has to cross empty space to find the next content. |

### Phase 2 CRITICAL Re-Assessment

**CD-005 Bento Grid Responsive Overflow at 768px:** Based on the full-page screenshot at 768px, the bento grid section appears to have been FIXED. The grid cells reflow into a stacked or reduced-column layout that fits within the 768px viewport. No horizontal overflow is visible. The grid content (directory tree, tables, code blocks, metrics) all appear contained within the viewport boundaries.

**Verdict:** Phase 2 CRITICAL finding appears RESOLVED.

### Overall Assessment

CD-005 is a well-crafted page that successfully demonstrates multi-axis transition (Z-pattern to F-pattern to Bento Grid) with proper transition grammar between zones. The page has a clear narrative arc, consistent component vocabulary, warm and harmonious color palette, and good typography hierarchy.

The single biggest issue is the trailing dead space below the footer. The zigzag cognitive load in the Z-pattern section is a design trade-off (authentic Z-pattern vs. readability) that leans toward the intentional side.

**Ship Readiness:** SHIP with one required fix (trailing dead space).

---

## Screenshots Captured

- `screenshots/cold-look-1440.png` -- Initial viewport at 1440x900
- `screenshots/fullpage-1440.png` -- Complete page at 1440 width
- `screenshots/scroll-1440-01-top.png` -- Top of page at 1440
- `screenshots/scroll-1440-02-z-lower.png` -- Z-pattern section at 1440
- `screenshots/scroll-1440-03-z-code.png` -- Code block + transition at 1440
- `screenshots/cold-look-768.png` -- Initial viewport at 768x1024
- `screenshots/fullpage-768.png` -- Complete page at 768 width
- `screenshots/cold-look-1024.png` -- Initial viewport at 1024x768
- `screenshots/fullpage-1024.png` -- Complete page at 1024 width
