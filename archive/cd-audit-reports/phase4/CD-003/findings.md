# CD-003 Perceptual Audit Findings
## File Tree with Callouts

**Auditor:** Perceptual Auditor (CD-003 Standard)
**Page:** CD-003-file-tree-with-callouts.html
**Viewports audited:** 1440x900, 768x1024, 1024x768

---

## CRITICAL FINDING: Invisible Content Below Bento Grid

At ALL three viewport sizes, approximately two-thirds of the page content is invisible to the eye despite being present in the document structure. The content exists in the DOM (verified programmatically: all sections report visible, full-width, correct positioning) but does NOT render visually. This affects:

- The choreography hub (comparison table body, decision text paragraphs)
- All three spoke sections (Feature-Based, Layer-Based, Decision Framework)
- The Challenge and Summary section
- The Essence callout
- The entire Research Application Record

The visible portion ends around the "Choosing an Architecture Pattern" heading and the top of the "Architecture Decision" hub. Everything below is blank warm cream. The page reports a scroll height of ~9,760 pixels but only the first ~2,600 pixels contain visible content.

**Severity:** CRITICAL -- the page is fundamentally broken for reading. A user would believe the page ends after the bento grid section.

**Note:** This finding was verified across multiple isolated browser tabs, with and without animation-disabling CSS, with wait times up to 1 second per scroll position. The issue is NOT caused by the audit tooling.

---

## COLD LOOKS (all three viewports)

See `cold-look-auditor.md` for full Cold Look reactions.

**Summary verdicts:**
- 1440px: YES WITH RESERVATIONS (top portion is polished; invisible content is the blocker)
- 768px: NO (rendering failure)
- 1024px: NO (rendering failure)

---

## 5 DIMENSION PASSES (1440px -- based on visible content, scrolls 1-4)

### Pass 1: READABILITY

The visible content reads well. The intro paragraph under "React Application Architecture" is comfortably wide -- about 60-65 characters per line, which is within the sweet spot for readability. The file tree uses a monospace typeface that is perfectly sized -- each filename is distinct and easy to scan. Directory names are bold, regular files are lighter weight, creating an instant visual hierarchy within the tree.

The callout text in the annotation cards (Atomic Design, Test Co-Location, Path Aliases, Import Depth) is readable but the right-column cards feel slightly dense. The "Component Organization" text in the Atomic Design card runs a bit long for its container width. No word stacking observed.

The code block (tsconfig.json path aliases) is clean and well-sized. Code is readable without squinting. The syntax highlighting colors (greens for path strings) provide mild but useful differentiation.

### Pass 2: SPATIAL BALANCE

Squinting at the visible portion, the layout has clear weight distribution. The dark header band at top anchors the page. Below it, the section heading and intro text form a light breathing zone. Then the bento grid creates a satisfying asymmetric balance: the large file tree cell on the left (roughly 55% width) is the heaviest element, balanced by two stacked annotation cards on the right (roughly 40% width).

Below the bento grid, the code snippet + gotcha callout row provides a second balanced pair. The transition divider (a short centered line) separates the bento section from the choreography section.

The "Project Overview" callout between the intro and the grid sits in a gap that feels slightly too spacious -- there is dead air above and below it that interrupts the visual flow.

### Pass 3: HIERARCHY and FLOW

The eye lands first on "File Tree with Callouts" (the title in the dark header), then drops to "React Application Architecture" (the section heading), then naturally gravitates to the large file tree cell because it is the heaviest element on the page. This is correct hierarchy: title > section > primary content.

The annotation cards on the right act as supporting commentary. The colored labels ("Info" in blue, "Tip" in green, "Config" in neutral, "Gotcha" in coral) create a clear temperature progression that tells you immediately what kind of information each card contains. This is effective and should be preserved.

The transition from the bento grid to the "Choosing an Architecture Pattern" section is well-handled with a centered horizontal rule and section heading. At that point, the page becomes invisible, so further flow assessment is impossible.

### Pass 4: CONSISTENCY

Within the visible content, consistency is strong. All callout cards share the same structural DNA: a header zone with a label and type badge, then a content zone with left-border accent. The file tree cell uses the same border treatment but with a dark near-black accent instead of a colored one, which provides enough differentiation while maintaining family cohesion.

The section headings ("React Application Architecture" and "Choosing an Architecture Pattern") share the same typeface, weight, and positioning. The underline rules beneath them are consistent.

The code snippet badges ("ROOT", "INFO", "TIP", "CONFIG", "GOTCHA") all share the same compact uppercase monospace treatment, just with different colors. This is consistent and professional.

### Pass 5: SHIP TEST

For the visible portion (bento grid section): YES, I would put my name on this. The file tree + callout bento grid is a genuinely novel and effective layout for technical content. The spatial arrangement communicates hierarchy through size, not through decoration. The callout type system (Info/Tip/Config/Gotcha) is clear and useful. The code snippet integration is clean.

For the full page: NO. The invisible content makes this unshippable. A page where two-thirds of the content does not render is broken, full stop.

---

## PA-01 through PA-20: ANSWERS BY VIEWPORT

### 1440px Viewport

**PA-01: What is the first thing that bothers you?**
The "Project Overview" callout floats in liminal space between the intro paragraph and the bento grid. It has neither enough visual weight to stand alone nor enough proximity to attach to either neighbor. It reads as orphaned context.

**PA-02: Is any text uncomfortable to read?**
No text in the visible portion is uncomfortable to read. Line lengths are comfortable, typeface choices are clear, and contrast is strong throughout.

**PA-03: Does this feel like one designer made it, or three?**
One designer. The visible portion has extremely consistent visual language: the same border treatments, the same card structure, the same typographic scale. Everything feels like it belongs to the same family.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the page title "File Tree with Callouts" in the dark header, then immediately to the large file tree cell in the bento grid. Yes, this is correct -- the file tree IS the primary content, and the bento layout correctly establishes it as the focal point through size.

**PA-05: Would you put your name on this?**
On the visible bento grid section: yes, with pride. On the full page including the invisible sections: absolutely not.

**PA-06: Are any words stacking vertically, one per line?**
No word stacking observed anywhere in the visible content.

**PA-07: Can you read the longest paragraph without losing your place?**
Yes. The intro paragraph (4 lines) and the Architecture Decision text are both within comfortable reading widths. Line height provides adequate vertical separation.

**PA-08: Is there any text you have to lean in or squint to read?**
No. All text in the visible portion is adequately sized and has sufficient contrast against its background.

**PA-09: Is there dead space that serves no purpose?**
CRITICAL: Yes. Below scroll position ~2,600 there are approximately 7,100 pixels of blank warm cream with no visible content. This is the dominant visual feature of the page's lower two-thirds. Additionally, the gap between the "Project Overview" callout and the bento grid feels slightly excessive.

**PA-10: If you squint until you cannot read text, does the layout look balanced?**
For the visible portion: yes. The dark header band at top, the light breathing space, and the asymmetric bento grid create a satisfying visual weight distribution. Below the visible content, the page is entirely flat cream -- no shapes, no weight, no balance.

**PA-11: Are the margins generous (confident) or anxious (clutching)?**
Confident. The bento grid has comfortable gaps between cells. Content within cells has breathing room. The overall page container has generous side margins. Nothing feels trapped.

**PA-12: Do your eyes flow smoothly from section to section?**
From header to bento grid: yes, smooth. From bento grid to "Choosing an Architecture Pattern": the short centered line divider works well. From that heading onward: the flow breaks completely because content disappears.

**PA-13: Is there a clear visual ending, or does the page just stop?**
The page appears to STOP abruptly after the bento grid and the start of the architecture comparison section. There is no visible ending, footer, or conclusion. The footer element exists in the DOM but is invisible along with everything else below the fold.

**PA-14: Does every column have enough room for its content to breathe?**
In the bento grid: yes. The file tree cell has generous internal space. The annotation cards are slightly tighter but still have enough room. The code snippet cell has comfortable internal spacing.

**PA-15: Trace the left edge of every content block. How many starting positions?**
Three distinct left-edge positions in the visible content: (1) the intro paragraph and section heading aligned to the page container left, (2) the bento grid cells offset slightly from the container edge, (3) the content within callout cards offset from the card edge by the left border width. This is a clean, deliberate hierarchy.

**PA-16: Pick two elements that should look identical. Do they?**
The "Atomic Design / Info" card header and the "Test Co-Location / Tip" card header: yes, they share identical structure (label on left, type badge on right, same height, same background treatment). The only difference is the accent color of the left border, which is the intended distinction.

**PA-17: Is there a visual rhythm (like a beat in music), or random?**
In the bento grid: yes, there is a rhythm. Header-zone then content-zone, repeated across all cards. The alternation between the large file tree cell and the smaller annotation cells creates a strong-weak-strong beat. Below the grid, rhythm ceases because content is invisible.

**PA-18: Do all the grays and neutrals feel like the same family?**
Yes. The warm cream page background, the slightly cooler card backgrounds, and the warm dark text all feel cohesive. The near-black of the header and the near-black of the file tree border are clearly related.

**PA-19: Is there any element that feels like it is from a different website?**
No. Everything in the visible portion shares the same visual language. The callout type badges, the file tree, the code snippet, and the section headings all feel like they belong together.

**PA-20: Describe this page's personality in three words. Does it match intent?**
"Structured, spatial, instructive." Yes, this matches the intent of a page about file tree organization and architecture patterns. The spatial bento layout literally demonstrates the organizational thinking that the content teaches.

---

### 768px Viewport

**PA-01:** The same orphaned "Project Overview" callout, but more pronounced at this width because the vertical gap above and below it becomes more visually dominant.

**PA-02:** No text is uncomfortable to read. The narrower viewport actually makes the intro paragraph read slightly better (fewer characters per line).

**PA-03:** One designer. Consistency is maintained at this breakpoint.

**PA-04:** Eye goes to title, then to file tree. Correct. The bento grid maintains its spatial hierarchy at this width.

**PA-05:** On the visible bento section: yes. On the full page: no.

**PA-06:** No word stacking. The callout text in the right column ("Component Organization" content) wraps naturally without stacking.

**PA-07:** Yes. Paragraphs are readable and comfortable at this width.

**PA-08:** No squinting required.

**PA-09:** CRITICAL dead space below the bento grid + architecture comparison intro, identical to the 1440px finding. Additionally, the space between the "Test Co-Location" card and the "Path Aliases Configuration" card feels stretched at this width.

**PA-10:** For visible content: balanced. For full page: severely unbalanced (all weight at the top, nothing below).

**PA-11:** Slightly less generous than 1440px but still confident. The narrower viewport compresses margins proportionally.

**PA-12:** Smooth flow within the bento grid. Breaks completely at the choreography section.

**PA-13:** The page appears to end in blank cream. No visible ending.

**PA-14:** The file tree cell has enough room. The annotation cards feel slightly tighter but still breathe. The two-column spoke layout (Feature-Based / Layer-Based at the very top of their containers) shows headings before content vanishes.

**PA-15:** Three left-edge positions, same as 1440px. The grid adapts but maintains alignment.

**PA-16:** The card headers remain identical in structure. Consistent.

**PA-17:** Rhythm present in bento grid section, absent below.

**PA-18:** Same warm neutral family. Consistent.

**PA-19:** Nothing feels foreign.

**PA-20:** "Spatial, broken, incomplete." The personality of the TOP section is strong, but the invisible bottom half destroys the overall impression.

---

### 1024px Viewport

**PA-01:** The "Architecture Decision" heading appears on a warm band, then the content below it is blank. This is the most jarring moment at this viewport because you can SEE that something should follow that heading.

**PA-02:** No readability issues in visible content.

**PA-03:** One designer for visible content.

**PA-04:** Correct hierarchy: title to file tree to annotation cards.

**PA-05:** On visible portion: yes. On full page: no.

**PA-06:** No stacking.

**PA-07:** Yes, readable.

**PA-08:** No squinting.

**PA-09:** Same critical dead space finding.

**PA-10:** Top section balanced. Below: no visual weight at all.

**PA-11:** Generous margins. Confident at this width.

**PA-12:** Flow breaks at the choreography section.

**PA-13:** No visible ending. Page appears to stop.

**PA-14:** Content breathes well in the visible portion.

**PA-15:** Three starting positions, consistent with other viewports.

**PA-16:** Card headers match. File tree border matches structural convention.

**PA-17:** Rhythm in bento grid; absent below.

**PA-18:** Neutral family consistent.

**PA-19:** Nothing foreign.

**PA-20:** "Promising, broken, truncated." The 1024px viewport best reveals the gap because the Architecture Decision heading is visible but its content is not -- it looks like a section that was started and never finished.

---

## SUMMARY OF FINDINGS

### CRITICAL (1)
1. **Invisible content below bento grid section** -- Approximately 70% of the page content (choreography hub, spokes, challenge, essence, research record, footer) does not render visually despite being present and correctly positioned in the DOM. Affects all three viewports identically. This makes the page unshippable.

### HIGH (1)
2. **No visible page ending** -- Because the lower content is invisible, the page has no perceivable conclusion. A reader scrolling past the bento grid encounters blank cream and assumes the page is over.

### MEDIUM (1)
3. **Orphaned "Project Overview" callout** -- The introductory callout between the section heading and the bento grid floats in a vertical gap that disrupts the visual rhythm. It lacks sufficient visual proximity to either the paragraph above or the grid below.

### LOW (0)
No low-severity findings.

### NOTES (positive)
- The bento grid layout is the strongest element of this page. The asymmetric cell sizing (large file tree + smaller annotation cards) creates an effective spatial hierarchy.
- The callout type system (Info/blue, Tip/green, Config/neutral, Gotcha/coral) is clear, consistent, and effective.
- The file tree rendering with monospace typeface, indentation hierarchy, and color-coded entry points (App.tsx, main.tsx in one color; tsconfig.json, vite.config.ts in another) is well-crafted.
- Left-border accent treatment creates family cohesion between the file tree cell and the callout cards without making them look identical.
- The code snippet (tsconfig.json path aliases) integrates naturally into the bento grid without disrupting the spatial balance.

---

## SHIP VERDICT

**NO** -- The page cannot ship with 70% of its content invisible. The bento grid section (the visible top portion) is excellent and would score highly on its own, but the rendering failure makes the full page fundamentally broken.

If the rendering issue were resolved, the visible quality of the bento grid section suggests the full page would likely merit a YES WITH RESERVATIONS or YES.
