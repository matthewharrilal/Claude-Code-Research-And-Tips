Now I have all the visual evidence I need. Let me compile the full audit report.

# Auditor B: Readability + Typography

## 0. Experiential Pass

Looking at the three screenshots as a first-time visitor:

**Desktop (1440px):** The page breathes well. A commanding dark header with a large serif title immediately establishes hierarchy. Warm cream backgrounds carry the eye downward through clearly demarcated zones. The 3-column role card grid in the middle third is the densest region — small text in narrow columns. Dark code blocks and architecture diagrams provide strong rhythm. Pull quotes in large italic serif interrupt the editorial flow pleasantly. The bottom half becomes code-heavy with many dark blocks stacked vertically.

**Tablet (768px):** The page feels longer and the role cards have collapsed to a single column, which actually makes their body text easier to read than on desktop. Architecture diagrams are narrower; the monospace text inside appears very small. The overall reading experience is smooth but the sheer volume of dark code blocks in the operations section creates a wall-of-darkness effect in the lower half.

**Mobile (375px):** The title is noticeably smaller but still legible. Everything stacks to single column. The page is extremely long (nearly 50,000px). Architecture diagrams in dark containers show very small monospace text — this is the weakest readability spot across all viewports. Code blocks dominate the visual landscape. The comparison grids, decision columns, and role cards all stack cleanly.

---

## Question Responses

### PA-02: Is any text uncomfortable to read? Point to the worst spot.

**Assessment:** YES — the worst spot is the **role card body text in the 3-column bento grid** on desktop (Government District section, approximately 40% down the page).

**Evidence:** [desktop/full-page, ~40% scroll depth] In the desktop screenshot, three role cards sit side-by-side in the "Town Level" row. Each card is roughly 280px wide, and the body text inside uses a smaller-than-body size (the HTML shows `--type-code` / 0.875rem). Within these narrow columns, the text appears noticeably smaller and denser than the surrounding body copy. The responsibility lists inside each card are tightly stacked with dash-prefixed items, and model recommendation badges at the bottom use the page's absolute smallest text size. The combination of narrow column + small text + dense list creates a spot where comfortable reading is compromised.

**Secondary worst spot:** [mobile/full-page, ~20-25% scroll depth] On the mobile viewport, the architecture diagrams (hierarchy diagram, communication flow) display monospace text that appears very small against the dark background. The mobile CSS reduces these to an even smaller size, and horizontal scrolling may be required.

**Severity:** SIGNIFICANT — The 3-column role card grid is the page's most informationally dense section, and it's where readability is weakest. The reader needs this content most and the text serves them least.

---

### PA-08: Is there any text you have to lean in or squint to read?

**Assessment:** YES — three categories of squint-inducing text exist.

**Evidence:**

1. **Model recommendation badges** [desktop/full-page, ~40-45% scroll depth]: At the bottom of each role card, I can see tiny bordered badges reading "Opus 4.5", "Haiku", "Sonnet" with accompanying labels. These use the page's smallest type size (`--type-label` at 0.6875rem / ~11px). Within the already-narrow 3-column card layout, these are barely distinguishable as text from the desktop screenshot. The label text ("MODEL:") next to them is equally tiny.

2. **Section meta markers** [all viewports, throughout page]: The "Section 00 · Orientation" / "Section 01 · Credentials" style labels appear throughout at the `--type-meta` size (0.75rem / 12px). In the screenshots these read as faint gray wisps above the section headings rather than clearly legible navigational markers.

3. **Architecture diagram text on mobile** [mobile/full-page, ~25% depth]: The monospace pre text within the hierarchy diagram and communication flow diagram drops to 0.75rem on mobile. Against the dark background, at 375px viewport width, individual role names within the ASCII boxes would require squinting or zooming to read.

**Severity:** SIGNIFICANT — The model badges convey important operational information (which AI model to use for each role) but are rendered at the threshold of comfortable legibility. The architecture diagrams on mobile contain key structural information that becomes hard to parse.

---

### PA-29: In the header area (first viewport), count how many different text styles you see. Are more than three fighting for attention?

**Assessment:** NO — four text styles are present in the header, but they form a clear hierarchy rather than competing.

**Evidence:** [desktop/full-page, top ~3%] In the dark header band, I can identify:

1. **Meta line** — small, monospace, uppercase, gray: "KortAI Documentation" with a bordered "D-FINAL" badge beside it. Quiet, recessive, almost whispered.
2. **Title** — large serif display: "Steve Yegge and Gas Town". Dominant, immediately draws the eye. Warm cream against dark background.
3. **Subtitle** — body font, regular weight, gray: The longer description paragraph below the title. Supportive, secondary.
4. **Badge** — tiny mono bordered text within the meta line. A micro-element, not competing.

The hierarchy is clear and well-ordered: title dominates overwhelmingly, subtitle supports, meta/badge recedes. At no point do these styles fight for attention. The eye path is unambiguous: title first, subtitle second, meta line as ambient context. This is disciplined restraint with four styles that know their rank.

[tablet/full-page, top ~2%] and [mobile/full-page, top ~1%]: The same hierarchy holds at smaller viewports. The title scales down but remains dominant.

**Severity:** NONE

---

### PA-55: Look at 3 adjacent sections. Can you describe how they DIFFER visually without inspecting code? If not, variation is sub-perceptual.

**Assessment:** CONDITIONAL — Zone boundaries are perceptible; zone background differences are sub-perceptual.

**Evidence:** I examined three adjacent zones: the **Outskirts** (You Are Here), **Gate** (Who is Steve Yegge?), and **Town Square** (Gas Town Mental Model).

[desktop/full-page, ~5-25% scroll depth]:
- **What I CAN see:** A 3px horizontal border line separates each zone — these are clearly visible structural dividers. The content types differ markedly: Zone 1 has a dark code ladder + comparison grid, Zone 2 has a career table + credential list + pull quote, Zone 3 has the big "ant/colony" pull quote + comparison grid + reference list. The red-accent primary border between Gate and Town Square is visible and feels like a stronger transition.
- **What I CANNOT see:** The background color difference between zones. The HTML specifies #FEF9F5 → #F8F2EA → #FAF5ED, but from the screenshots all three zones read as the same warm cream. I cannot point to a moment where the background visibly shifts. The differentiation is entirely sub-perceptual at the background level.

**However:** The zones DO differ visually through their content density, component types, and the visible border lines. The background color variation adds nothing perceptible, but the zones are not identical-looking overall.

**Severity:** MINOR — The background color micro-variation is sub-perceptual, but the zones are sufficiently differentiated by other means (border lines, content type, component variety). The sub-perceptual backgrounds are wasted design effort rather than a readability failure.

---

### PA-56: Check text treatment between zones. Can you FEEL the tracking difference? If not, flag as sub-perceptual.

**Assessment:** NO — there is no perceptible tracking difference in body text between zones.

**Evidence