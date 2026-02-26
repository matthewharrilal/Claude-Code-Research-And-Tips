# PA Auditor C -- Spatial + Proportion
## Page: Steve Yegge and Gas Town (2026-02-25 build)

---

## 0. Experiential Pass

### STEP 1: Read every word from the pixels

**1440-cold-look.png / 1440-scroll-00.png (Header + Zone 1 top):**
- "DEEP DIVE -- LEVEL 7" -- readable, small red/coral uppercase text
- "Steve Yegge and Gas Town" -- readable, large decorative serif heading in cream/white on dark background
- "The agent factory architect building team-scale productivity for solo developers." -- readable, lighter gray subheading
- Tags: "ORCHESTRATION", "AGENT FACTORY", "VIBE CODING", "STAGE 7+" -- readable, small bordered tag elements
- "S0 -- ORIENTATION" -- readable, small uppercase section label
- "You Are Here" -- readable, large decorative serif heading
- "THE COMPLEXITY LADDER" -- readable, red/coral uppercase label inside a bordered callout with left accent bar
- Ladder text (Level 0 through Level 7) -- all readable, monospaced. "Gas Town Factory" with arrow "YOU ARE LEARNING THIS" is clear.

**1440-scroll-01.png (Zone 1 continuation):**
- Body paragraph starting "You are a developer who has mastered Levels 0-6..." -- readable
- "After this document, you will understand the factory-scale agent architecture..." -- readable
- "PREREQUISITES" callout with red label and dashed items -- readable: "Stage 7+ on Yegge's 8-Stage Dev Evolution", "Comfort with chaos and imperfection", "Go language runtime installed (1.21+)", "tmux proficiency (mandatory)", "Budget: $50-200/day for API costs", "100+ hours experience with multi-agent setups"

**1440-scroll-02.png (Zone 1 end / Zone 2 transition):**
- Table with columns: Company names (Amazon, Google, Sourcegraph, Current), Roles, Relevance -- all readable
- "ESSENCE" callout with orange left bar -- italic quote readable: "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."
- Below the essence callout, a dark background zone begins

**1440-z3-element.png (Dark zone -- dense content):**
This element screenshot captures the entire dark zone at higher detail. I can see:
- Multiple red/dark-bordered callout cards with headings and body text. First visible card has text I can partially make out -- something about "Claude Code" and "agents get a startup..."
- "Zero Framework Cognition" card heading -- readable. Body text about orchestrator executing -- readable at this resolution
- "Agents as Cattle, Not Pets" -- readable heading. Body about Kubernetes thinking applied to agents -- readable
- "Nondeterministic Idempotence" -- readable heading
- "Token Spend as Health Metric" -- readable heading with body text about per-developer metrics
- Below cards: "S3 -- IMPLEMENTATION" section label
- "Implementation Guide" -- large serif heading, readable
- "Installation" sub-heading followed by code blocks with monospaced text -- small but legible at element resolution
- "CHECKPOINT" green callout -- readable
- "tmux Workflow" -- readable heading with body text
- Multiple code blocks with bash/shell commands -- text is small but readable at element screenshot resolution
- "Daily Workflow" heading with code block
- "S4 -- VERIFICATION" section label
- "Checkpoints and Verification" heading with a table (STEP, COMMAND, EXPECTED OUTPUT columns) -- readable
- "Health Checks" heading with code block
- "HEALTHY STATE INDICATORS" callout with green-tinted list
- "S5 -- TROUBLESHOOTING" section label
- "Troubleshooting" heading
- Multiple expandable/accordion-style items: "Context Collapse", "Race Conditions / Merge Conflicts", "Runaway Crew", "Mayor Deadlock", "Beads Desync", "Agent Won't Start" -- all readable headings with "+" indicators
- "Recovery Command Reference" heading with code block table
- "S10 -- DECISION GUIDE" at very bottom

**However, in the standard scroll screenshots (scroll-03 through scroll-21), this entire dark zone renders as completely black/dark with ZERO visible text.** This is the dominant experiential finding.

**CANNOT READ issues from scroll screenshots:**
- CANNOT READ: [1440-scroll-03.png through 1440-scroll-21.png] -- entire dark zone content. The background is so dark and the text contrast so low at the scroll screenshot resolution/DPR (0.667) that roughly 19 consecutive viewport screenshots show nothing but a dark rectangle. Only the zone element screenshot (z3) reveals the content exists.

**1440-z4-element.png (Later light zone):**
- "When to Use Gas Town" heading -- readable
- Two-column comparison: "USE GAS TOWN WHEN" (green) vs "DO NOT USE GAS TOWN WHEN" (red) -- readable
- Decision tree/flowchart in a dark code-style block -- text is small but legible
- "S11 -- KEY STATEMENTS" section
- "Quotes and Key Statements" heading -- readable
- Large blockquote: "Build a colony of coding agents, not the world's largest ant." -- readable
- Grid of smaller quotes with attributions -- readable at element resolution
- "S12 -- COMPARISONS" section
- "Comparison with Other Patterns" heading
- Two comparison tables (Gas Town vs Ralph Wiggen, Gas Town vs CC Mirror) -- readable
- "LADDER" callout with italic quote about simplicity covering 80% -- readable
- "S13 -- SOURCES" section
- "Sources" heading with "Primary Sources" links (colored in muted teal) -- readable
- "Community Extensions" section with a 2x2 grid of resource cards -- readable

**1440-z5-element.png (Footer zone):**
- Almost entirely dark background
- At the very bottom: a thin horizontal line, then a three-column footer (TOPICS, COMPLEXITY, AUTHOR) -- barely visible, very small text
- Below footer columns: an italic closing quote -- I can barely make out marks but the text is extremely small against the dark background
- CANNOT READ: [z5-element footer text] -- the footer text is present but extremely small and low-contrast against the dark background

**1440-z1-element.png (Light orientation zone):**
- Entire Zone 1 content visible at good resolution
- "You Are Here" section, complexity ladder, body paragraphs, prerequisites callout, biography section with table, essence quote, "Why His Opinion Matters" list, beginning of "The Gas Town Mental Model" with blockquote and comparison table
- "The 8 Roles Architecture" heading at bottom with beginning of a role hierarchy diagram
- All text readable at this element resolution

### STEP 2: Extract information from charts/diagrams

**Complexity Ladder (1440-scroll-00.png, 1440-z1-element.png):**
- Vertical text ladder from Level 0 to Level 7, connected by pipe characters. Level 7 is highlighted with an arrow. Purpose is clear: orienting the reader on where Gas Town falls in a progression. Communicates "you are here" effectively.

**Role Hierarchy Diagram (bottom of z1-element.png):**
- "ROLE HIERARCHY" header in red
- "TOWN LEVEL (Global -- One instance each)" with three boxes: MAYOR (Coordination across rigs), DEACON (Monitoring & handshakes), ODDS (Quality Gates & warnings)
- Arrow pointing down to "RIG LEVEL (Per-Project -- Multiple instances)" -- text continues below visible area
- Communicates two-tier architecture. Readable at element resolution.

**Decision Tree (z4-element.png):**
- A text-based flowchart inside a dark box: "START HERE" at top, flowing through decision nodes about stage level, budget, complexity. Ends with options including "GAS TOWN" as one endpoint.
- Small text, but logic flow is followable at element resolution.

**Company Table (1440-scroll-02.png, z1-element.png):**
- 4 rows x 3 columns: Company, Role, Relevance. Clean, readable.

**Comparison Tables (z4-element.png):**
- Two tables comparing Gas Town to alternatives. Headers and rows all readable.

### STEP 3: Follow the structure -- where does the eye get confused?

The page structure flows: Header (dark bar) -> Zone 1 (warm cream, orientation/biography) -> massive dark zone (core concepts, architecture, implementation, verification, troubleshooting) -> lighter zone (decision guide, quotes, comparisons, sources) -> dark footer.

**Confusion points:**
1. The transition from the warm cream Zone 1 into the dark zone (visible at bottom of scroll-02) feels like the page ended or crashed. There is no gradual transition -- it is an abrupt wall of darkness.
2. In the scroll screenshots, the dark zone reads as a massive black void. The content IS there (proven by z3-element) but the rendering at normal viewport DPR makes it completely invisible. A user scrolling at normal speed would see 19 consecutive "blank" dark screens.
3. The return to lighter content (z4-element) after the dark zone feels like finding a second page entirely.

### STEP 4: Severity ranking

1. CANNOT READ (HIGHEST): All dark zone content in scroll-03 through scroll-21 -- entire sections invisible at viewport resolution. This is catastrophic for spatial assessment.
2. CANNOT READ: Footer text in z5-element -- too small and low-contrast.
3. Uncomfortable but legible: Code blocks in z3-element are small but readable.
4. Structure unclear: The transition into the dark zone is disorienting with no visual preparation.

---

## PA-11: Are the margins generous (confident) or anxious (clutching)?

**Assessment: CONDITIONAL -- Confident in light zones, unknowable in dark zone**

In the light zones (scroll-00 through scroll-02, z1-element), the margins are generous and confident. Content sits comfortably within the viewport with substantial space on both sides. The left margin is consistent and spacious. The callout elements (Complexity Ladder, Prerequisites) indent further from the left edge, creating a comfortable layered effect. There is no sensation of content being pushed to the edges.

In the dark zone, I can only assess from z3-element: the content appears to have similar generous margins, with cards, code blocks, and text all sitting well within the dark field. The content containers in the dark zone look narrower relative to the full width, which is confident -- they do not try to fill every pixel.

Evidence: `1440-scroll-00.png` -- left margin approximately 12-13% of viewport width. Content block does not extend to full width. `1440-z1-element.png` -- margins are consistent and relaxed throughout the light zone. `1440-z3-element.png` -- dark zone content also appears to have generous margins.

**Verdict: YES -- margins are confident, not clutching.**

---

## PA-30: At 1440px, does the layout feel DESIGNED for this width, or centered in extra space?

**Assessment: CONDITIONAL**

From the light zone screenshots (scroll-00 through scroll-02, z1-element), the content occupies approximately the left 50-55% of the viewport at 1440px. The right side is largely empty space. This does NOT feel designed for 1440px -- it feels like a narrower layout (perhaps 700-800px content width) centered or left-aligned within a wider viewport. The content does not stretch, reflow, or take advantage of the full width.

Looking at z4-element, the comparison tables and quote grids DO use wider two-column layouts that better fill the width. The "Use Gas Town / Don't Use Gas Town" side-by-side columns and the quote grid both extend further across the viewport.

But the dominant experience -- especially in the critical opening sections -- is that the content container is narrow and the viewport feels oversized for it.

Evidence: `1440-scroll-00.png` -- content appears to end around 55% from left edge, leaving ~45% as empty space on the right (warm cream). `1440-z1-element.png` -- text blocks, tables, and callouts all constrained to the left portion. `1440-z4-element.png` -- comparison columns and quote grids use wider layouts.

**Verdict: NO -- Layout feels designed for approximately 800px, not 1440px. The extra space on the right in the light zones feels leftover, not confident.**

---

## PA-31: If you covered the content and only looked at the surrounding space, would it feel designed or leftover?

**Assessment: NO -- Leftover**

If I mask the content and look only at the surrounding space:

- **Light zones:** The warm cream background extends from the content edge to the right viewport edge as an uninterrupted, featureless expanse. There are no background treatments, no subtle pattern variations, no tonal shifts -- just uniform warm cream. This reads as "the content didn't reach here" rather than "this space was designed."
- **Dark zone:** The dark background fills edge to edge, but since the content within it is barely visible at scroll resolution, the entire zone reads as one enormous undifferentiated dark mass. The "surrounding space" IS the space -- the content disappears into it.
- **Between sections:** The vertical space between the end of Zone 1 and the visible dark zone content (bottom of scroll-02, all of scroll-03) represents a large gap that feels structural but not shaped.

Evidence: `1440-scroll-02.png` -- the warm cream zone ends with substantial blank space before the dark zone begins. `1440-full-page.png` -- the full page shows a clear pattern: light content occupying the left-center, then massive dark areas that read as voids. The surrounding space does not communicate intention.

**Verdict: NO -- Surrounding space feels leftover in light zones (uniform undesigned cream) and overwhelming in dark zones (content lost in darkness).**

---

## PA-32: Squint at the full page. Is the visual weight distributed purposefully across the scroll?

**Assessment: CONDITIONAL -- Purposeful structure visible but badly imbalanced**

Squinting at `1440-full-page.png`:

- **Top ~15%:** Dark header bar + warm cream content area with visible text blocks. Good visual weight.
- **~15-25%:** Continuation of warm cream with text, tables, and a callout with colored accent. Active and weighted.
- **~25-80%:** An enormous dark band dominates the middle and lower-middle of the page. Within this dark band, I can perceive slightly lighter content areas in the z3-element screenshot, but at full-page zoom they are essentially invisible. The visual weight here is HEAVY (dark) but undifferentiated -- like a single massive dark object.
- **~80-90%:** A lighter band returns with visible content blocks (z4 content area).
- **~90-100%:** Dark again (footer zone, z5).

The distribution has a clear three-part structure (light-dark-light-dark), which suggests purposefulness. But the proportions are badly skewed: the dark zone consumes roughly 55-60% of the total scroll height while appearing to contain zero content at normal viewing. The light "return" zone (z4) feels like an afterthought -- too little, too late.

Evidence: `1440-full-page.png` -- visual weight is concentrated as a massive dark block in the middle 55% of scroll height. The top 25% is well-balanced. The bottom 20% has some lighter content. `1440-z3-element.png` proves the dark zone has content, but it is not perceptible in the full-page or scroll views.

**Verdict: NO -- Visual weight is not distributed purposefully. The dark zone creates a gravitational black hole in the middle of the page that absorbs all visual interest. The page feels top-heavy with readable content, then collapses into darkness.**

---

## PA-33: Pick the largest area of empty space. Does it feel like silence in music or a dropped signal?

**Assessment: DROPPED SIGNAL**

The largest area of "empty" space is the dark zone spanning approximately scroll-03 through scroll-19 at 1440px viewport resolution. This is roughly 17 viewport-heights of what APPEARS to be solid dark background with no visible content.

This does NOT feel like silence in music. Silence in music is brief, bounded, and creates anticipation. This feels like:
- The music stopped.
- The venue went dark.
- You are unsure if the performance is over.

The dark zone contains real content (confirmed by z3-element), but at the rendering resolution of the scroll screenshots, that content is invisible. A user scrolling through would experience approximately 17 screens of darkness. This is not a pause -- it is a dropped signal.

Even if the dark zone content were perfectly visible, the sheer scale of this dark section (estimated 55-60% of total page height) would still feel disproportionate. It would be a very long, unbroken dark passage.

Evidence: `1440-scroll-03.png` through `1440-scroll-19.png` -- 17 consecutive viewport screenshots showing only dark background. `1440-z3-element.png` -- confirms content exists but is not visible at scroll resolution. `1440-full-page.png` -- the dark band visually overwhelms the page.

**Verdict: NO -- Dropped signal. The largest empty space is catastrophic in both scale and execution.**

---

## PA-50: Count viewport-heights where < 30% is content. How many consecutive blank viewports?

**Assessment: CATASTROPHIC VOID**

Counting from the 1440px scroll screenshots:

| Screenshot | Content visible (%) | Assessment |
|-----------|-------------------|------------|
| scroll-00 | ~85% | CONTENT |
| scroll-01 | ~90% | CONTENT |
| scroll-02 | ~40% (top half content, bottom half dark) | BORDERLINE |
| scroll-03 | ~0% (all dark) | VOID |
| scroll-04 | ~0% (all dark) | VOID |
| scroll-05 | ~0% (all dark) | VOID |
| scroll-06 | ~0% (all dark) | VOID |
| scroll-07 | ~0% (all dark) | VOID |
| scroll-08 | ~0% (all dark) | VOID |
| scroll-09 | ~0% (all dark) | VOID |
| scroll-10 | ~0% (all dark) | VOID |
| scroll-11 | ~0% (all dark) | VOID |
| scroll-12 | ~0% (all dark) | VOID |
| scroll-13 | ~0% (all dark) | VOID |
| scroll-14 | ~0% (all dark) | VOID |
| scroll-15 | ~0% (all dark) | VOID |
| scroll-16 | ~0% (all dark) | VOID |
| scroll-17 | ~0% (all dark) | VOID |
| scroll-18 | ~0% (all dark) | VOID |
| scroll-19 | ~0% (all dark) | VOID |
| scroll-20 | ~0% (all dark) | VOID |
| scroll-21 | ~0% (all dark) | VOID |

**IMPORTANT CAVEAT:** The z3-element screenshot proves that the dark zone contains substantial content (cards, code blocks, headings, tables, troubleshooting items). The scroll screenshots at DPR 0.667 may be rendering this content as invisible when it might be visible at native resolution. However, my job is to report what I SEE in the screenshots provided.

**Consecutive blank viewports: 19** (scroll-03 through scroll-21)

This FAR exceeds the threshold of 1.5 consecutive viewport-heights. Even if the dark zone content were partially visible, the scale would likely still fail -- the z3-element alone shows content spanning what appears to be 5-6 viewport heights of dense material packed into a dark background.

Evidence: `1440-scroll-03.png` through `1440-scroll-21.png` -- 19 screenshots with zero visible content. Threshold is <= 1.5 consecutive blank viewports.

**Verdict: FAIL -- CATASTROPHIC VOID. 19 consecutive viewports with < 30% visible content. Threshold is 1.5.**

**NOTE TO WEAVER:** This result may be a screenshot artifact rather than a true rendering issue. The z3-element screenshot shows the dark zone has content with light text on dark background. At full DPR the text may be visible. However, the page note states "Physical resolution 960x600px (DPR 0.667)" which IS the rendering condition. If this is what a user at this DPR sees, it is catastrophic. If other auditors using the same screenshots report readable dark-zone content, the discrepancy should be investigated.

---

## PA-51: Does the page feel content-dense, balanced, sparse, or void-dominated?

**Assessment: VOID-DOMINATED**

Based on the full screenshot set:
- **Top 3 viewports (scroll-00 through scroll-02):** Balanced to content-dense. Good mix of text, tables, callouts, and breathing room.
- **Middle 19 viewports (scroll-03 through scroll-21):** Void. Visually empty dark space.
- **Zone element screenshots (z3, z4):** If the dark zone content were visible, the page would be content-dense to balanced overall. The z3-element alone is VERY content-dense (cards, code blocks, tables, accordions packed tightly).

But based on the EXPERIENTIAL reality of scrolling this page at the provided screenshot resolution: the page is void-dominated. The readable content occupies roughly 3 of 22 viewport-heights (14%). The rest appears to be dark void.

Evidence: `1440-full-page.png` -- visible content clusters at top and near-bottom, with a dominant dark band in the middle. `1440-scroll-00.png` through `1440-scroll-02.png` -- the only viewports with clearly visible content.

**Verdict: VOID-DOMINATED as rendered in scroll screenshots. Would likely be CONTENT-DENSE to BALANCED if the dark zone text were visible at normal rendering.**

---

## PA-53: At 1440px, does the container use 65-80% of horizontal space, or feel like a narrow strip?

**Assessment: NARROW**

Measuring from the light zone screenshots where content boundaries are clearly visible:

In `1440-scroll-00.png` and `1440-z1-element.png`, the main text content appears to span approximately 460-480 pixels out of 960 rendered pixels (the actual 1440px viewport rendered at DPR 0.667). This suggests the content container is approximately 690-720px wide at 1440px actual viewport, which is roughly 48-50% of viewport width.

This falls BELOW the 65-80% optimal range. The content feels like a narrow strip, particularly in the light zones where the warm cream background extends unbroken to the right edge.

Some elements use wider spans:
- The comparison columns in z4-element appear to extend wider (possibly 60-65% of viewport)
- Tables may extend slightly wider than body text

But the dominant experience -- especially body paragraphs, headings, and callouts -- is a narrow content column with extensive unused space on the right.

Evidence: `1440-scroll-00.png` -- text content ends well before the right edge of viewport. `1440-z1-element.png` -- consistent narrow container throughout Zone 1. Estimated 48-50% viewport width vs. 65-80% target.

**Verdict: NO -- Container feels like a narrow strip at approximately 48-50% viewport width. Below the 65% minimum threshold.**

---

## PA-64 (Tier 5): Is there a section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes surrounding richness more noticeable?

**Assessment: NO**

Looking at the visible content:

The light zone (Zone 1, z1-element) has relatively consistent visual density throughout. Every section has at least one styled element (callout with colored accent bar, table, or list with decorative dashes). There is no section that deliberately strips back to let surrounding sections shine.

In the dark zone (z3-element), the visual treatment is consistently dense -- cards with colored borders, code blocks with syntax styling, tables, callouts. There is no quiet pause section.

In z4-element, the quote grid and comparison tables maintain consistent visual richness. The sources section at the end is somewhat plainer (just links), but this reads as "ran out of content" rather than "deliberate simplicity" -- it is at the page's end where energy naturally fades, and is not surrounded by richer sections on both sides.

The page does have environmental shifts (light-to-dark-to-light), but these are zone-level background changes, not sections designed to be deliberately restrained to enhance neighbors.

Evidence: `1440-z1-element.png` -- consistent richness level throughout, no plain pause. `1440-z3-element.png` -- consistently dense. `1440-z4-element.png` -- sources section is plainer but located at page end, not a strategic pause.

**Verdict: NO -- No section demonstrates deliberate plainness as expressive restraint. Visual density is consistent within each zone.**

---

## PA-66 (Tier 5): Look at the empty spaces between sections. Are they all the same 'flavor' of emptiness, or do different gaps feel different from each other?

**Assessment: CONDITIONAL YES -- Two distinct flavors but limited variety**

I can identify at least two clearly different types of gaps:

1. **Light breathing gaps (within Zone 1):** The spaces between sections in the warm cream area (e.g., between the orientation block and the biography section, between biography and the "Why His Opinion Matters" list) are warm cream emptiness. These feel like natural pauses in a conversation -- comfortable, ambient.

2. **Dark void gaps (the dark zone):** The massive dark background creates a fundamentally different type of emptiness. Where the light gaps feel like breath between sentences, the dark space feels like a stage blackout between acts.

3. **Transition gaps (light-to-dark):** The boundary between the warm cream zone and the dark zone (visible at bottom of scroll-02) has its own character -- a sudden tonal shift that feels more like a curtain drop than a designed transition.

However, within each zone, the gaps are largely interchangeable. The light-zone gaps between sections all feel the same. The spaces within the dark zone (between cards, between code blocks) all feel the same. The variety is at the ZONE level, not the SECTION level.

Evidence: `1440-scroll-01.png` -- warm cream gaps between prerequisites and next section. `1440-scroll-02.png` -- transition from light to dark at bottom. `1440-z3-element.png` -- consistent dark-zone spacing between elements.

**Verdict: CONDITIONAL YES -- Two perceptibly different gap flavors (warm-light vs. dark-dramatic), which meets the minimum threshold of 2. But within each zone, gaps are interchangeable. The variety feels environmental (background color) rather than intentionally curated per-gap.**

---

## PA-05 Cross-Validation -- PROPORTIONATE

**Assessment: FAIL**

**3a. Horizontal Proportion:** Content fills approximately 48-50% of viewport width at 1440px. This is below the 65% minimum. Margins are not wasteful per se, but the content strip is too narrow for this viewport width. **FAIL.**

**3b. Vertical Proportion:** The top third has well-designed moments (header, complexity ladder, biography table, essence callout). The middle third is the dark zone -- which in the z3-element contains designed moments (philosophy cards, code blocks) but which in the scroll screenshots is invisible darkness. The bottom third (z4-element) has designed moments (comparison columns, decision tree, quote grid). IF the dark zone content is visible at native rendering, this passes. As rendered in provided screenshots, the middle third has zero visible designed moments. **CONDITIONAL -- depends on dark zone visibility at native resolution.**

**3c. Breathing Proportion:** The empty space in the dark zone does NOT feel like purposeful silence. 19 consecutive viewport-heights of apparent darkness is not breath -- it is suffocation. Even the light-zone spaces, while comfortable individually, do not vary enough to feel curated. **FAIL.**

With 3a FAIL and 3c FAIL, PA-05c (PROPORTIONATE) is **FAIL** regardless of 3b outcome.

Evidence: `1440-scroll-00.png` -- narrow content strip clearly visible. `1440-scroll-03.png` through `1440-scroll-21.png` -- 19 viewports of darkness. `1440-full-page.png` -- spatial imbalance visible at page level.

---

## Completion Manifest -- Auditor C

| Section              | Completed | Evidence                          |
|----------------------|-----------|-----------------------------------|
| Experiential Pass    | YES       | ## 0. Experiential Pass present   |

| Question ID | Answered | Evidence Screenshot(s) |
|-------------|----------|----------------------|
| PA-11       | YES      | 1440-scroll-00.png, 1440-z1-element.png, 1440-z3-element.png |
| PA-30       | YES      | 1440-scroll-00.png, 1440-z1-element.png, 1440-z4-element.png |
| PA-31       | YES      | 1440-scroll-02.png, 1440-full-page.png |
| PA-32       | YES      | 1440-full-page.png, 1440-z3-element.png |
| PA-33       | YES      | 1440-scroll-03.png through 1440-scroll-19.png, 1440-z3-element.png, 1440-full-page.png |
| PA-50       | YES      | 1440-scroll-00.png through 1440-scroll-21.png |
| PA-51       | YES      | 1440-full-page.png, 1440-scroll-00.png through 1440-scroll-02.png |
| PA-53       | YES      | 1440-scroll-00.png, 1440-z1-element.png |
| PA-64       | YES      | 1440-z1-element.png, 1440-z3-element.png, 1440-z4-element.png |
| PA-66       | YES      | 1440-scroll-01.png, 1440-scroll-02.png, 1440-z3-element.png |
| PA-05c (cross-val) | YES | 1440-scroll-00.png, 1440-scroll-03.png through 1440-scroll-21.png, 1440-full-page.png |
