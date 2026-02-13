# Findings — Auditor Alpha (Impression + Readability + Spatial) — AD-002 F-Pattern

**Auditor:** Alpha (PA-01 through PA-11)
**Page:** AD-002 F-Pattern Layout
**URL:** http://localhost:8080/explorations/axis/AD-002-f-pattern.html
**Viewports assessed:** 1440x900 (primary with screenshots), 768x1024 (from full-page render + accessibility snapshot; browser contention prevented dedicated 768px viewport screenshots)
**Scroll-through:** COMPLETE — scrolled entire 10,921-pixel page height at 1440px, captured screenshots at 11+ scroll positions, plus full-page screenshot

---

## Cold Look Summary

### 1440px
- **Gut:** Strong, confident documentation page with clear hierarchy and a commanding dark header. Content column feels slightly narrow for the wide viewport — generous cream margins on both flanks.
- **Worst:** The five-segment tension bar reads like a broken loading indicator.
- **Best:** Red-bordered heading "The Reading Path You Already Know" anchors the left spine beautifully.
- **Ship:** YES WITH RESERVATIONS

### 768px
- **Gut:** Single-column collapse works cleanly. Left spine becomes the entire content width, which feels focused.
- **Worst:** Code blocks consume nearly the full screen width, creating dark walls that dominate the viewport.
- **Best:** Heading hierarchy (serif/sans-serif, border accents) survives the collapse completely intact.
- **Ship:** YES WITH RESERVATIONS

---

## PA Questions — 1440px Viewport

### PA-01: What's the first thing that bothers you?

The **tension progress bar** beneath each act label. It is five colored segments (red filling left-to-right to show narrative tension) but without context it looks like a broken loading indicator or an orphaned UI widget. On first encounter there is no label, no legend, no tooltip -- just five flat color blocks sitting between the act label and the section heading. A reader unfamiliar with the Freytag CRESCENDO model would have no idea what it represents. The metaphor only becomes legible after reading the full page, which defeats its purpose as an orientation device.

### PA-02: Is any text uncomfortable to read? Point to the worst spot.

The **code block comment text** is the worst. The comments inside the dark code blocks (the gray text that is neither syntax-highlighted keyword nor string literal) sits at very low contrast against the dark background. Lines like `/* Act I: 0 code blocks -- prose only (OD-F-012) */` require effort to distinguish from the background, especially for someone scanning quickly. The syntax-highlighted keywords (red, blue, green) read fine, but the neutral commentary disappears.

At 768px, this worsens because the code blocks span the full viewport width, making them inescapable -- the eye cannot relief-scan to the warm cream margins.

### PA-03: Does this feel like one designer made it, or three?

**One designer, mostly.** The page has a consistent design language: warm cream backgrounds, dark code blocks, serif headings with sans-serif body, consistent callout styling (colored left border + label). The visual vocabulary is coherent.

However, there is a subtle dialect split: the **interlude blockquotes** (the italic serif quotes between acts with the purple left border) feel like they belong to a more literary, editorial design sensibility, while the **comparison table** (Pattern Comparison: F-Pattern vs Alternatives) with its color-coded HIGH/MID/LOW badges feels more like a technical dashboard. These two modes coexist but do not completely harmonize. It is not three designers, but it is one designer working in two moods.

### PA-04: Where does your eye go first? Is that where it SHOULD go?

At 1440px, the eye goes to the **page title** ("AD-002: F-Pattern Layout") in the dark header banner. This is exactly where it should go -- the F-pattern's own first horizontal scan principle in action. The title is the largest, highest-contrast text on the page (cream text on near-black background), and the eye lands on it immediately.

The second thing the eye catches is the red left-border heading "The Reading Path You Already Know" -- again, correct. This is the first content heading and it anchors the left spine.

The F-pattern is working here. The page practices what it preaches.

### PA-05: Would you put your name on this? What would you fix first?

**Yes, with one fix:** I would reduce the inter-act spacing. The gaps between the end of one act's content and the beginning of the next (the interlude blockquote zones) are very tall -- roughly 375 pixels of vertical space including the blockquote. This creates a scrolling experience where the reader hits a content desert between acts. The interludes themselves are beautiful (the italic serif quotes are the best-written text on the page), but they are surrounded by too much breathing room. The page is about 11,000 pixels tall, and a meaningful fraction of that height is interstitial whitespace. Tightening these gaps by a third would make the reading flow more continuous without sacrificing the act-transition rhythm.

### PA-06: Are any words stacking vertically, one per line, in any column?

**No.** At 1440px, no text stacks vertically. The content column is wide enough to accommodate all text without word-stacking. The two-column layout in Act II (First Horizontal Scan / Second Horizontal Scan) flows comfortably -- each column is wide enough for natural paragraph formatting.

At 768px, the two-column layout collapses to single-column, which also avoids stacking. The narrower viewport does produce shorter lines but no pathological single-word stacking.

### PA-07: Can you read the longest paragraph without your eye losing its place between lines?

**Yes.** The line height is generous throughout the body text. The longest paragraphs (in Act I, roughly 5-6 lines at 1440px) are comfortable to read. The warm cream background and the soft dark gray text color create low-fatigue reading conditions. The line length at 1440px (roughly 70-80 characters per line) is within the ideal range for sustained reading.

The one concern is in Act III where dense code blocks are interspersed with prose -- the eye has to re-adjust from monospace dark-background code to proportional light-background prose repeatedly, and each transition is a small cognitive bump. But within any single paragraph, readability is excellent.

### PA-08: Is there any text you have to lean in or squint to read?

**Two spots:**

1. **The act label text** ("ACT I -- EXPOSITION") is rendered in small uppercase tracking at a light gray color. It is readable but barely -- it whispers rather than speaks. This is perhaps intentional (it is a structural label, not content), but at 1440px the viewer distance makes it the faintest text on the page.

2. **Code block comments** (as noted in PA-02). The gray comment text inside dark code blocks is the closest thing to squint-requiring text. Not illegible, but low-effort is not the word for reading it.

### PA-09: Is there dead space that serves no purpose -- a screen-sized void with nothing in it?

**Yes -- this is the page's most significant visual flaw at 1440px.**

The inter-act transition zones create significant voids. Each transition (act content end, red divider line, interlude blockquote, next act header) spans approximately 375 pixels vertically. With the interlude blockquote occupying only about 150 pixels of that, there is roughly 225 pixels of pure cream nothingness in each transition.

More critically, at 1440px the horizontal dead space is substantial. The content column occupies roughly the center 55-60% of the viewport width. The remaining 40-45% is warm cream margins -- left and right flanks with nothing in them. For a page about the F-pattern (which relies on a strong left spine), having so much unused right-side space is ironic. The content column could extend slightly wider, or the right margin could host a table-of-contents sidebar to fill the void with useful navigation.

The transitions between Acts III-IV and IV-V feel like the worst offenders -- the interlude quotes are shorter, so the surrounding void is proportionally larger.

### PA-10: If you squint until you can't read any text, does the layout still look balanced?

**Mostly yes, but with a notable rhythm problem.**

When squinted:
- The dark header banner at the top anchors everything with authority
- The alternating warm-cream and pure-white act zone backgrounds create a subtle banding effect that gives the page vertical rhythm
- The dark code blocks in Act III create a heavy visual center -- this is appropriate for the "climax" of the CRESCENDO
- The callout boxes (blue, green, orange, red borders) create accent dots down the left edge

**The problem:** The page's visual weight is front-loaded. Acts I-III contain the bulk of the visual variety (tables, two-column layouts, multiple code blocks, callouts), while Acts IV-V are visually thinner. When squinted, the bottom third of the page looks sparse compared to the rich middle. This is partially intentional (CRESCENDO falling action), but the visual thinning is more dramatic than the content thinning warrants.

### PA-11: Are the margins generous (confident spacing) or anxious (clutching or pushing away)?

**Confident in the vertical, slightly anxious in the horizontal.**

The vertical spacing within acts is generous and rhythmic -- paragraphs breathe, code blocks have comfortable padding, callouts have clear separation from surrounding text. The spacing says "take your time, there is room here."

The horizontal margins at 1440px are generous to the point of being slightly wasteful. The wide cream gutters on both sides feel less like confident breathing room and more like the content is huddling in the center of a large room, unwilling to spread out. At 768px this is not an issue -- the content fills the available width naturally.

The inter-act spacing (the transition zones) leans toward "pushing away" -- there is enough vertical void between acts that each act feels like a separate document rather than a chapter in a continuous piece. The interludes (blockquotes) are meant to bridge this gap, but their small size relative to the surrounding void makes them feel like boats on a lake rather than bridges over a river.

---

## PA Questions — 768px Viewport

**Note:** Detailed 768px assessment derived from full-page screenshot capture and accessibility snapshot analysis. Browser contention prevented dedicated viewport-by-viewport 768px screenshots.

### PA-01 (768px): First bother?
The tension bar consumes nearly the full viewport width at 768px but its segments are still unlabeled. At full width it looks even more like a loading bar. The code blocks also become dominant -- they span the entire content width, creating dark walls that alternate with the warm background.

### PA-02 (768px): Uncomfortable text?
Same as 1440px: code block comments remain low-contrast. Additionally, the comparison table at 768px may become horizontally cramped -- the cells with "GRACEFUL" and "MODERATE" text likely squeeze against column boundaries.

### PA-03 (768px): One designer or three?
Still one designer. The collapse to single column actually unifies the visual language -- the two-column layout in Act II was the one place where the page felt different from the rest, and at 768px that difference disappears.

### PA-04 (768px): Eye direction?
Same -- title first, then first heading. The F-pattern collapses to pure vertical scanning at this width, which the page handles well. Every heading still sits at the left edge.

### PA-05 (768px): Fix first?
At 768px, I would fix the **code block visual weight**. The dark code blocks at full viewport width create an oppressive alternation of dark and light bands. Some horizontal padding or a slightly lighter code block background could soften this.

### PA-06 (768px): Vertical word stacking?
No stacking observed. The viewport is wide enough to prevent it.

### PA-07 (768px): Line tracking in longest paragraph?
Yes, comfortable. The shorter line length at 768px (roughly 55-65 characters) is within the optimal range.

### PA-08 (768px): Squint text?
Same spots as 1440px. The act labels become even more subtle at 768px.

### PA-09 (768px): Dead space?
The horizontal dead space issue from 1440px is resolved -- content fills the width. The vertical inter-act gaps remain proportionally large. The page is still very tall with significant interstitial space between acts.

### PA-10 (768px): Squint balance?
Better than 1440px. Without the large side margins, the page feels more proportioned. The dark code blocks create visual weight anchors that read well at narrow width.

### PA-11 (768px): Margins -- confident or anxious?
At 768px the margins are confident. Content fills the space without clutching. The edge-to-edge code blocks feel bold. Only the inter-act vertical gaps still feel slightly excessive.

---

## AD-Specific: F-Pattern Assessment

**Does the left edge anchor consistently?**
Yes. The left spine is strong and consistent throughout the page. Heading hierarchy (serif H2 with red left border, italic serif H3, uppercase sans-serif H4) creates a multi-signal left-edge landmark system. Every heading starts at the same left position. Paragraph text aligns to the same left margin. The left spine is the strongest structural element on the page.

**Do scan lines get shorter as the reader progresses?**
Partially. Act I is pure prose (full-width scanning). Act II introduces two-column layout (shorter individual scan lines). Act III introduces code blocks (the eye scans code lines, which are shorter than prose lines due to indentation). Acts IV-V return to prose. The F-degradation pattern (full scan to partial scan to vertical descent) is partially realized through content type variation, but not through explicit line-width reduction.

**Does the F-shape emerge naturally from the layout?**
Yes, at 1440px. The first horizontal scan catches the header. The second horizontal scan catches the Act I heading and opening paragraph. Then the eye naturally descends the left edge via the heading hierarchy. The F-shape is more emergent than engineered -- it works because the content respects left alignment and heading hierarchy, not because the layout forces F-shaped scanning.

At 768px, the F-pattern degrades to pure vertical scanning as predicted by the page's own content. This is handled gracefully.

---

## 5-Dimension Assessment

### 1. Readability
**Rating: STRONG**
- Body text is comfortable to read at both viewports
- Line height and paragraph spacing are generous
- Serif/sans-serif differentiation creates clear heading vs body distinction
- **Weakness:** Code block comments are low-contrast; act labels are subtle

### 2. Spatial Balance
**Rating: MODERATE WITH ISSUES**
- At 1440px: Content huddles in center ~60% of viewport; wide empty margins
- Inter-act transition zones create excessive vertical dead space
- At 768px: Balance improves significantly; content fills available width
- **Critical:** At 1440px, roughly 40% of the viewport area is empty cream background serving no purpose

### 3. Hierarchy & Flow
**Rating: STRONG**
- Clear 5-act structure with consistent banner, tension bar, heading, content pattern
- Multi-signal heading differentiation (serif/sans-serif, size, style, border) is excellent
- Callout system (Context=blue, Implementation Tip=green, Caution=amber, Gotcha=red, Essence=teal) is consistent and semantic
- Interlude blockquotes provide narrative breathing between acts
- **Weakness:** Tension bar purpose is unclear without legend

### 4. Consistency
**Rating: STRONG**
- Every act follows the same structural template
- Callout styling is consistent throughout
- Code block presentation is uniform
- Typography is disciplined
- **Minor:** Interlude blockquotes use purple border which does not appear in the callout color vocabulary

### 5. Ship Test
**Rating: YES WITH RESERVATIONS**
- The page is professional, well-structured, and readable
- It successfully demonstrates the F-pattern it describes
- **Reservations:** (1) Inter-act dead space inflates the page unnecessarily; (2) Tension bar needs labeling or removal; (3) Right-margin dead space at 1440px wastes the widescreen opportunity; (4) Code block comments need higher contrast

---

## Summary of Findings

| ID | Severity | Finding |
|----|----------|---------|
| ALPHA-001 | HIGH | Inter-act transition zones create excessive dead space (~375 vertical pixels each, with ~225 pixels of pure void). At 1440px this produces a page that is significantly taller than its content warrants. |
| ALPHA-002 | HIGH | Horizontal dead space at 1440px: content occupies ~60% of viewport width, leaving ~40% as unused cream margins. A sidebar TOC or wider content column would improve space utilization. |
| ALPHA-003 | MEDIUM | Tension progress bar (5-segment narrative indicator) is unlabeled and its purpose is opaque on first encounter. Reads as a broken loading indicator or orphaned widget. |
| ALPHA-004 | MEDIUM | Code block comment text (gray on dark background) has low contrast. Comments are harder to read than syntax-highlighted code, especially in Act III where multiple code blocks appear in sequence. |
| ALPHA-005 | LOW | Act labels ("ACT I -- EXPOSITION") are rendered in faint uppercase tracking that whispers rather than orients. These structural labels are the lightest text on the page. |
| ALPHA-006 | LOW | Interlude blockquote purple border color is not part of the callout color vocabulary (blue, green, amber, red, teal), creating a minor consistency gap. |
| ALPHA-007 | NOTE | Visual weight is front-loaded: Acts I-III contain most visual variety; Acts IV-V are visually thinner. The CRESCENDO falling action may justify this, but the visual thinning is more dramatic than the content thinning. |
| ALPHA-008 | NOTE | At 768px, code blocks span full viewport width, creating dominant dark bands. Consider a slightly lighter code block background or horizontal padding reduction at mobile breakpoint. |
| ALPHA-009 | NOTE | The page successfully practices what it preaches: the F-pattern reading axis works as described in the content. The left spine is the strongest structural element. |
