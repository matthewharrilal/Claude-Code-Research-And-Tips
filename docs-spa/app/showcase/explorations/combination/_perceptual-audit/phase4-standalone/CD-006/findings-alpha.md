# CD-006 Perceptual Audit — Auditor Alpha Findings
## Impression + Readability + Spatial (PA-01 through PA-11)

**Page:** CD-006 Pilot Migration — Building Your First KortAI Documentation Page
**Auditor:** Alpha
**Date:** 2026-02-11
**Viewports:** 1440x900, 768x1024, 1024x768

---

## CRITICAL FINDING: Scroll-Animation Dead Space Epidemic

**Severity: CRITICAL**
**Affects: ALL viewports**

The page has a total document height of 16,264 pixels, but actual visible content occupies roughly 9,000 pixels. The remaining 7,000+ pixels are empty cream gaps caused by the scroll-reveal animation system. Between sections, there are dead zones spanning 2-5+ full viewport heights of pure empty background.

This is not a recovery zone or intentional breathing room — it is a rendering artifact. The scroll animation containers reserve space for elements that reveal via intersection observer on forward scroll. When a reader scrolls normally, content slides in as expected. But when the page is viewed statically (e.g., Print view, accessibility tools, or scrolling backward), these gaps appear as vast empty abysses that destroy the page's reading rhythm.

The page at 16,264 pixels is roughly 1.8x the length it should be. A reader scrolling at normal speed will encounter 3-5 seconds of blank cream between each major section, which breaks concentration and undermines the page's authoritative voice.

**Impact:** At 1440px, roughly 12 of 22 scroll positions show completely blank viewports. The page has 8 major sections but the dead space between them makes it feel like scrolling through an empty document with occasional islands of content.

---

## PA-01 through PA-11: 1440px Viewport

### PA-01: What is the first thing that bothers you?

The massive empty space on the right side of the content area. The page container appears to be about 700 pixels wide within a 1440-pixel viewport, leaving roughly 500 pixels of unused cream on the right. At first glance, this makes the page look like it was designed for mobile and accidentally placed on a wide monitor. The content is left-aligned within a centered container, but the container itself feels narrow for this viewport.

The second thing that bothers me — which quickly overtakes the first — is the dead space between sections. Scrolling past Section 1, the reader encounters over 2,000 pixels of pure blank cream before Section 3 or 4 becomes visible. This completely destroys reading momentum.

### PA-02: Is any text uncomfortable to read? Point to the worst spot.

The code blocks in the dark-background containers are the most uncomfortable spots. The syntax-highlighted code wraps awkwardly on a single line — at 1440px, the code block in Section 1 (the `:root` token declaration) displays as a single long line that requires horizontal scanning. The light text on dark background is readable but the line length is extreme — the eye loses its place.

Body text throughout is comfortable. The serif headings are clear. The callout labels (ESSENCE, CORE ABSTRACTION, GOTCHA, TIP) are small uppercase text that reads well. The italic serif in Essence callouts is beautiful and legible.

The "Section 02 - Z-PATTERN - PULSE DENSITY" metadata line above the section heading is set very small and light — it reads like a whisper. Not uncomfortable, but easy to miss.

### PA-03: Does this feel like one designer made it, or three?

One designer, definitively. The restraint is absolutely consistent throughout — every element uses the same vocabulary of sharp edges, flat surfaces, limited color, and deliberate typography. The serif appears only in specific ceremonial contexts (Essence, Core Abstraction). The sans-serif body text maintains consistent weight and spacing. The callout system follows the same two-zone structure everywhere. The dark code blocks are uniform. The section metadata labels share a typographic voice.

The only moment that feels slightly different is the Z-pattern layout in Section 2, where the "5 Pieces" list sits in a separate card-like container offset to the right while prose text flows left. This feels like a different compositional idea than the single-column flow of Section 1. But it is clearly within the same design language — the same designer choosing a different layout pattern intentionally.

### PA-04: Where does your eye go first? Is that where it SHOULD go?

Eye goes to: The page title "Building Your First KortAI Documentation Page" in large white serif against the dark header. This is correct — the title should be the entry point.

Second stop: The TOC "Contents" box. The numbered list with pattern labels draws the eye naturally from the title. This is also correct — after knowing what the page is, you should know what it contains.

Third stop: The red "CORE ABSTRACTION" label in Section 1's Bedrock callout. The red accent color in the label creates a strong focal point. This is appropriate — the Core Abstraction is the most important content in the Spiral pattern.

The hierarchy works. Title then structure then content. The eye path is correct.

### PA-05: Would you put your name on this? What would you fix first?

Conditionally yes. The design system thinking is sophisticated, the typography is strong, and the content architecture is impressive. I would be proud of the intellectual structure and the visual restraint.

What I would fix first: The dead space epidemic. Before anything else, the scroll animation system needs to stop inflating the page with empty containers. The page should be half its current height. This single fix would transform the reading experience from "islands of content in a cream desert" to "a flowing, continuous tutorial."

Second fix: Widen the main content container at 1440px. The current container feels like it was sized for 1024px and not adjusted for wider viewports. At 1440px, the reading column should be wider, or the page should use the extra space for a sticky TOC sidebar or wider code blocks.

### PA-06: Are any words stacking vertically, one per line, in any column?

No word-stacking detected at 1440px. All text flows in comfortable line lengths. The callout labels (ESSENCE, GOTCHA, TIP, etc.) are single-word or two-word labels that display on one line. The TOC entries each fit on one line with the pattern label right-justified. The "5 Pieces" list items are brief enough to avoid stacking.

The only potential stacking concern is in the Z-pattern layouts where narrow columns exist (the left question column vs. the right answer column in Section 2's accordion elements), but at 1440px these columns are wide enough to avoid single-word lines.

### PA-07: Can you read the longest paragraph without losing your place?

Yes. The longest paragraphs (in the Atmosphere layer of Section 1, and the body text explaining the soul in Section 2) run 4-5 lines at comfortable line length. Line height is generous — roughly 1.7 — which creates clear visual separation between lines. The warm cream background against dark text provides good contrast without harshness.

The one spot where I nearly lose my place is in the long code blocks where syntax-highlighted code runs as a single unwrapped line. But prose text is consistently readable.

### PA-08: Is there any text you have to lean in or squint to read?

The section metadata labels ("SECTION 01 - SPIRAL - GEOLOGICAL DENSITY") are the most squint-worthy text. They are deliberately set small and light — almost grey against the cream background. They function as whispered stage directions rather than prominent labels. This is a design choice, not a defect, but at arm's length on a 1440px monitor, they require slight effort.

The callout labels (ESSENCE, GOTCHA, TIP) are uppercase and small but their accent colors (blue, red, green) make them visible without squinting.

Code comments within the dark code blocks are slightly harder to read than the code itself — they are set in a muted color that blends with the dark background.

### PA-09: Is there dead space that serves no purpose?

YES — this is the dominant finding of this audit.

1. **Between-section dead space:** 2,000-4,000 pixels of empty cream between major sections. This is the scroll-animation artifact described in the Critical Finding above. These gaps serve no purpose — they are not recovery zones, they are not intentional chapter breaks. They are container height artifacts from the scroll-reveal animation system.

2. **Right-side void at 1440px:** Approximately 500 pixels of unused cream on the right side of the content area. The content container is narrower than the viewport warrants.

3. **Post-accordion dead space in Section 2:** After the "Why border-radius: 0?" and "Why no box-shadow?" accordion content, there is a large gap before the next element. This appears to be a scroll-animation container rather than intentional spacing.

The between-section dead space is by far the worst. It turns an 8-section tutorial into a sparse landscape where content islands float in empty cream.

### PA-10: If you squint until you cannot read text, does the layout look balanced?

At the top (header through TOC through Section 1 opening): Yes, squinting reveals a strong dark bar at top, a rectangular content block in the center-left, and a smaller content cluster below. The weight distribution is top-heavy but intentionally so — the dark header anchors everything.

At Section 2 (the Z-pattern): Squinting shows a two-column arrangement with a heavier left column (prose) and a lighter right block (the "5 Pieces" card). This is pleasantly asymmetric.

Mid-page: When squinting through the scroll positions, the layout alternates between content clusters and vast empty zones. The content clusters themselves are well-balanced, but the empty zones between them make the overall page look like a broken layout when viewed as a whole.

The footer is a thin dark bar at the very bottom. The header and footer frame the page symmetrically.

**Verdict:** Individual sections are balanced. The page as a whole is NOT balanced due to the dead-space inflation.

### PA-11: Are the margins generous (confident) or anxious (clutching)?

The margins are generous — in fact, overly generous. The page breathes freely, sometimes to the point of hyperventilation. Within content blocks, the spacing is confident: elements are well-separated without cramping, callouts have generous internal space, and the TOC entries have comfortable vertical rhythm.

Between sections, the "margins" (actually dead space from animation containers) are so generous they stop being confident and start being vacant. Confident margins say "I have enough room and I know it." These gaps say "I have no idea where the next element is."

At the edge margins (left/right), the page is confident. The content sits within its container with appropriate breathing room. At 1440px, the overall page margins are generous to a fault — the content feels like it has too much stage and not enough presence.

---

## PA-01 through PA-11: 768px Viewport

### PA-01: What is the first thing that bothers you?

Less bothers me at 768px than at 1440px. The content fills the width much better. The first thing that stands out negatively is that the header takes up significant vertical space — the serif title, the metadata line, and the subtitle description consume roughly a quarter of the initial viewport. On a tablet, that is a lot of real estate before reaching any actionable content.

The dead-space issue persists but feels less extreme because the content is denser within each block.

### PA-02: Is any text uncomfortable to read?

The Atmosphere layer body text in Section 1 uses a large initial capital (drop-cap style) — the "I" in "In this guide" is oversized and slightly disconnected from the rest of the paragraph. At 768px, this drop-cap is proportionally larger relative to the viewport and could confuse the reading entry point.

Code blocks at 768px require horizontal scrolling or wrap awkwardly. The syntax-highlighted `:root` block becomes very cramped.

### PA-03: Does this feel like one designer made it, or three?

One designer, same as 1440px. The consistency holds at tablet width. If anything, the page looks MORE cohesive at 768px because the content fills the width better and the proportions feel more natural.

### PA-04: Where does your eye go first?

Same as 1440px — title first, then TOC, then first section content. The hierarchy is viewport-agnostic, which is a sign of strong typography.

### PA-05: Would you put your name on this? What would you fix first?

At 768px specifically, the proportions are the best of all three viewports. I would fix the dead-space gaps and the drop-cap treatment, then ship confidently.

### PA-06: Are any words stacking vertically?

No stacking at 768px. Text wraps naturally. The Z-pattern elements in Section 2 may stack vertically at this width (the two-column layout likely collapses to single-column), which is appropriate responsive behavior.

### PA-07: Can you read the longest paragraph without losing your place?

Yes. Line length at 768px is shorter than at 1440px, which actually improves readability. The generous line height helps. Paragraphs are comfortable.

### PA-08: Is there any text you have to lean in or squint to read?

The section metadata labels are even harder to read at 768px — they are tiny and light. The code comments in dark blocks are also challenging. Everything else is comfortably readable.

### PA-09: Is there dead space that serves no purpose?

Same dead-space epidemic between sections, though the ratio of content to void is slightly better at 768px because content blocks are taller (more vertical wrapping).

### PA-10: Squint test balance?

Better at 768px. Content blocks fill more of the viewport width, creating heavier visual weight. The page feels more grounded when squinting. Individual sections appear as well-proportioned blocks.

### PA-11: Margins generous or anxious?

Confident at 768px. The margins feel properly proportioned — enough breathing room without excess. Within-section spacing is comfortable. Between-section dead space remains the main concern.

---

## PA-01 through PA-11: 1024px Viewport

### PA-01: What is the first thing that bothers you?

At 1024px, the page is in its best configuration. The first thing that bothers me is actually a positive observation turning negative: the TOC is so well-designed that the content below it initially looks plain by comparison. The transition from the elegant TOC (with its numbered entries and right-justified pattern labels) to the Spiral section with its geological strata labels feels like moving from a polished map to rough terrain.

The dead-space issue persists but feels least severe at this viewport.

### PA-02: Is any text uncomfortable to read?

Code blocks are most comfortable at 1024px — wide enough to avoid most wrapping while not so wide that lines become unwieldy. Body text is at ideal line length. The section metadata labels remain the squintiest text.

### PA-03: One designer or three?

One. Consistent across all three viewports. The design language adapts to width without losing identity.

### PA-04: Where does your eye go first?

Title, TOC, Section 1 Core Abstraction callout. The hierarchy is stable across viewports. At 1024px, the Core Abstraction callout is partially visible at the bottom of the initial viewport, creating a natural "scroll to continue" invitation.

### PA-05: Would you put your name on this?

At 1024px, yes with the most confidence of all three viewports. This is the natural home for this design. Fix the dead-space gaps and this is a polished, professional tutorial page.

### PA-06: Word stacking?

None detected at 1024px.

### PA-07: Longest paragraph readable?

Yes, comfortably. Line lengths are ideal.

### PA-08: Squinting required?

Only for section metadata labels and code comments, same as other viewports.

### PA-09: Dead space?

Present but proportionally least severe. The content-to-void ratio is best at 1024px because the content blocks fill more vertical space (slightly more wrapping than 1440px) while the dead-space gaps are the same fixed pixel height.

### PA-10: Squint balance?

Best of all three viewports. The content weight fills the frame well. Section blocks appear as substantial rectangular shapes with good visual weight. The header and footer frame the page symmetrically.

### PA-11: Margins generous or anxious?

Confident. The margins are well-proportioned at 1024px — generous enough to breathe but not so generous they feel vacant. This is the sweet spot where the design's spatial philosophy works as intended.

---

## Summary of Findings

### CRITICAL (1)

| ID | Finding | Severity | Viewports |
|----|---------|----------|-----------|
| F-ALPHA-01 | Dead-space epidemic: scroll-animation containers inflate page height from ~9,000 to 16,264 pixels, creating 2,000-4,000 pixel blank gaps between sections | CRITICAL | ALL |

### HIGH (1)

| ID | Finding | Severity | Viewports |
|----|---------|----------|-----------|
| F-ALPHA-02 | Content container too narrow at 1440px: ~700px content in 1440px viewport leaves 500+ pixels of unused right-side void | HIGH | 1440px |

### MEDIUM (3)

| ID | Finding | Severity | Viewports |
|----|---------|----------|-----------|
| F-ALPHA-03 | Code blocks display as single unwrapped lines at wider viewports, requiring horizontal eye scanning | MEDIUM | 1440px, 1024px |
| F-ALPHA-04 | Section metadata labels ("SECTION 01 - SPIRAL - GEOLOGICAL DENSITY") are very small and light, approaching illegibility at arm's length | MEDIUM | ALL |
| F-ALPHA-05 | Drop-cap "I" in Atmosphere layer disconnects from paragraph flow, especially at 768px | MEDIUM | 768px, 1024px |

### LOW (2)

| ID | Finding | Severity | Viewports |
|----|---------|----------|-----------|
| F-ALPHA-06 | Code comments in dark blocks are muted to the point of reduced readability | LOW | ALL |
| F-ALPHA-07 | Post-accordion dead space within Section 2 (after "Why no box-shadow?") creates mid-section gap | LOW | ALL |

### NOTES

| Observation | Viewports |
|-------------|-----------|
| TOC design is outstanding — numbered entries with right-justified pattern labels provide both navigation and structural preview | ALL |
| Serif/sans typography pairing is used with exceptional discipline (serif only in Essence and Core Abstraction) | ALL |
| 1024px is the optimal viewport — content proportions, margin balance, and visual weight are all ideal | 1024px |
| Single-designer voice is unwavering across all viewports — the system feels discovered, not assembled | ALL |
| Callout two-zone structure (label + body) is consistently executed across all callout types | ALL |
| The page relies on forward-scrolling to render content; static views, print, and backward-scroll expose empty containers | ALL |

---

## Ship Verdict

**CONDITIONAL SHIP** — Fix F-ALPHA-01 (dead-space epidemic) and the page is ready. The design, typography, hierarchy, and content architecture are all strong. The scroll-animation system is the single largest blocker to a polished reading experience.

1024px is the strongest viewport. 768px is solid. 1440px needs either a wider content container or better use of the extra horizontal space.
