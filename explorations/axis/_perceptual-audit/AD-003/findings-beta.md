# Perceptual Audit Findings — Beta Auditor (AD-003 Bento Grid)

**Auditor:** Beta (Flow + Grid + Consistency + Emotion)
**Page:** AD-003-bento-grid.html
**Viewports tested:** 1440x900, 768x1024
**Method:** Cold look + full scroll-through + full-page screenshots at both viewports

---

## COLD LOOK (1440px)

**Gut reaction:** The page feels scholarly and restrained — like an architecture textbook — with the dark header projecting authority, but the content below feels narrower than this wide screen deserves.

**Worst thing:** The content area feels like it is sitting in a tube — there is a huge amount of empty space on both sides, especially on the right, making the 1440px screen feel wasted. The "Building with Bento Grid Layouts" box looks like a card floating in a canyon.

**Best thing:** The dark header with its warm cream text has real presence and gravitas. The prerequisite table inside the overview box is cleanly organized and legible.

**Ship verdict:** YES WITH RESERVATIONS

## COLD LOOK (768px)

**Gut reaction:** Much better proportioned than 1440px — the content fills the width more naturally, the overview box and table feel substantial. But the bento grid cards are still multi-column and that feels cramped at this width.

**Worst thing:** The bento grid does NOT collapse to a single column at 768px — it remains multi-column with cells squeezed tight. Text in narrower cells is getting crushed.

**Best thing:** The header-to-overview transition feels confident and properly weighted. The prerequisite table is very readable at this width.

**Ship verdict:** YES WITH RESERVATIONS

---

## SCROLL-THROUGH OBSERVATIONS

### 1440px Scroll-Through

**Position 0 (top):** Dark header with warm cream title text is commanding. Below it, the "Building with Bento Grid Layouts" overview box floats in a sea of empty space — massive margins on both sides. The prerequisite table inside is clean and readable. Below that, "Getting Started" heading appears with the beginning of the bento grid.

**Position 1 (1080px):** The bento grid is visible. Left card ("Create the Grid Container") is roughly half empty — its content only fills the top portion, leaving a large blank void inside the cell. The right column has smaller stacked cells ("Set Cell Borders", "Apply Zone Tokens") that are compact and dense by comparison. This creates a jarring imbalance: the left feels hollow, the right feels stuffed. "Configure Typography Tokens" sits alone below, full width, with nothing beside it.

**Position 2 (2160px):** Bottom of "Cell Size and Hierarchy" grid. Left cell has a code block with "View span patterns" expanded. Middle cell has a small code snippet. Right cell is almost ENTIRELY EMPTY — just a blank off-white card. Below these three partial cells, roughly 70% of the viewport is blank cream. A massive dead zone begins.

**Positions 3-8 (3240px-8735px):** COMPLETELY BLANK. Six consecutive full viewports of nothing but warm cream background. Roughly 6,000 pixels of dead space. The page appears broken. Content exists in the DOM (confirmed by accessibility tree and element position analysis) but does not paint to the viewport. The full-page screenshot confirms this is a rendering anomaly — the content IS there when rendered in full-page mode: "Compound Grid Patterns" section, "Verification Checklist", and "Research Application Record" all exist and are positioned at correct offsets. But scrolling through the page in viewport mode shows only blank cream from approximately Y=2400 onward.

### 768px Scroll-Through

**Position 0 (top):** Header and overview look better proportioned. The content fills more of the width. Bento grid cards are visible at the bottom — two columns, with "Create the Grid Container" on the left and "Set Cell Borders" on the right. The right card text feels tight.

**Position 1 (1228px):** Bottom of Getting Started grid. "Configure Typography Tokens" is alone on the left. Large gap before "Cell Size and Hierarchy" begins. The Essence callout appears with a purple left border — a different visual treatment from the bento cards, which adds variety. Below the Essence text, the dead zone begins again.

**Position 2 (2456px):** Two bento cards visible at top (code block with Tip callout, and "Internal Layout Templates"). Below them, the same massive blank void fills the bottom two-thirds of the viewport.

**Full-page screenshot confirms:** Content continues below the rendering cutoff — "Compound Grid Patterns" with more bento cards and code blocks, the Verification Checklist, and the Research Application Record are all present.

---

## 5 DIMENSION PASSES

### Pass 1 — READABILITY

**1440px:** The body text is comfortable to read — good line length within the overview box. The bento card text is also readable WHERE cards have adequate width. However, when a card occupies only one column of the narrow overall layout, the text line length shrinks and code snippets can feel tight. Code blocks with dark backgrounds are clearly legible — good contrast. The prerequisite table is the most readable element on the page. **Verdict: Readable for 10 minutes in the upper sections.**

**768px:** Body text reads well — line length is actually better here than at 1440px because the content fills more of the screen. The bento cards in the right column get squeezed though — "Set Cell Borders" has text pressed against its borders. Code snippets inside inline code badges are small but still legible. **Verdict: Comfortable to read, though some card text feels cramped.**

### Pass 2 — SPATIAL BALANCE (Squint Test)

**1440px:** When squinting, the page looks HEAVILY left-weighted. The overview box is centered, but the bento grids sit in the left half of the page with massive empty space to the right. The visual weight is concentrated in a narrow vertical strip. The dark header at top is the widest element. Below it, everything shrinks to maybe 60% of the viewport width. The bottom of the page (from full-page screenshot) is even more lopsided — the Verification and Research Application sections are narrow text blocks in a wide ocean.

**768px:** Much more balanced when squinting. The content fills nearly the full width. The bento cards form more of a balanced block. But the vertical dead zones between sections still create a "beads on a string" effect — dense clusters separated by voids.

### Pass 3 — HIERARCHY & FLOW

**1440px:** The flow from header to overview is good. Header establishes authority, overview box provides context, "Getting Started" begins the work. But the flow BREAKS after the first bento grid. The massive dead zone between sections destroys continuity — a reader scrolling through would think they hit the end of the page. If the content below WERE visible, the progression from Beginner to Intermediate to Advanced sections would create a logical flow. But the visual journey is: confident start, then... nothing.

**768px:** Same structural issue but the initial flow is smoother. The header-overview-grid progression feels more connected because the narrower viewport keeps elements closer together vertically. The flow still breaks at the dead zone transition.

### Pass 4 — CONSISTENCY

**Identical elements that SHOULD match:**
- The bento cards within each grid section have DIFFERENT visual weights. Cards with code blocks or disclosure triangles look dense and substantial. Cards without (like "Apply Zone Tokens" or "Breaking the Grid") are sparse text-only cells. In the full-page view, you can see some cards are tall (stretching 2 rows) while adjacent cards are compact 1-row cells — this is INTENTIONAL (size = importance), but visually the density INSIDE each card varies wildly.

- The level badges ("BEGINNER", "INTERMEDIATE", "ADVANCED") appear consistently in the upper-right of each card — this IS consistent and works well.

- The disclosure triangles ("View implementation steps", "View border rules", "View span patterns", etc.) use consistent red/coral text with a triangle marker. Consistent treatment.

- Code blocks have a consistent dark background treatment across the page. This is one of the most visually consistent elements.

**Visual rhythm:** There IS a rhythm in the bento grids — cards alternate between wide/narrow, tall/short, creating a modular pattern. Within each section, this rhythm works. But the rhythm BREAKS COMPLETELY between sections due to the dead zones. The page has rhythm within sections but no rhythm connecting sections.

### Pass 5 — SHIP TEST

**Could you fix this in 10 more minutes?** The dead zone rendering issue is the showstopper. If that is a Playwright-only rendering artifact and the page renders correctly in a real browser, then the layout needs: (1) reducing the massive gaps between sections, (2) widening the content area at 1440px, (3) fixing the responsive collapse at 768px. That is NOT fixable in 10 minutes.

**Proud to put next to Stripe?** The header is Stripe-quality. The overview box is Stripe-quality. The bento grid concept is right. But the execution has too many spatial problems — the wasted width at 1440px, the unbalanced card densities, the orphaned cells, and the responsive collapse failure at 768px. This is a solid B+ that needs refinement.

---

## PA QUESTION ANSWERS

### PA-12: Do your eyes flow smoothly from section to section, or do they get stuck anywhere?

**1440px:** Eyes flow smoothly from the dark header into the overview box. The transition from overview to "Getting Started" is natural — the heading and thin colored divider line guide you. Within the bento grid, eyes scan left-to-right across cards which works. But eyes get STUCK at the transition between grid sections — there is a massive empty gap that feels like a wall of nothing. At scroll position 2160px onward, the eye hits an infinite expanse of blank cream with no landmark, no heading, no visual cue of what comes next. The flow DIES here.

**768px:** Same pattern — smooth flow within sections, dead stop between them. The smaller viewport actually makes the inter-section gaps feel even more disorienting because there is less context visible at any scroll position.

**Severity: HIGH** — The between-section dead zones destroy the reading flow.

### PA-13: Is there a clear visual ending, or does the page just stop?

**1440px:** The page just STOPS. The full-page screenshot shows the Research Application Record section ending roughly 75% down the total page height, followed by a massive blank cream footer zone with nothing in it — no "The End" marker, no return-to-top link, no visual conclusion. The last visual element is a data table, which feels bureaucratic rather than conclusive. There is no emotional or visual closure.

**768px:** Same issue. The page ends with tables and text, then blank cream.

**Severity: MEDIUM** — The ending is abrupt and bureaucratic. It needs a visual capstone.

### PA-14: Does every column have enough room for its content to breathe?

**1440px:** MIXED. The overview box content has generous breathing room. The bento cards in the wider cells (those spanning 2 columns) breathe well — text has comfortable margins inside. But single-column cards are tighter. The worst offender is the "Apply Zone Tokens" card in the right column, where three color code values stack vertically with their explanations. It works but feels dense. The real problem is not that columns are too narrow internally — it is that the entire content area is too narrow relative to the 1440px viewport. Columns breathe within themselves but the overall layout does not breathe.

**768px:** The bento grid columns are roughly 249 pixels each (confirmed by DOM analysis). At this width, text in single-column cards is noticeably cramped. "Set Cell Borders" has text pushing against its borders. Code snippets in badges like `border: 3px solid` leave almost no whitespace to their right before the card edge. Columns do NOT have enough room to breathe at 768px.

**Severity: HIGH at 768px** (columns too narrow for content), **MEDIUM at 1440px** (overall layout too narrow for viewport).

### PA-15: If you trace the left edge of every content block top to bottom, how many different starting positions do you count?

**1440px:** Tracing down:
1. Header text starts at roughly 30% from left edge
2. Overview box starts at roughly 30% from left edge (ALIGNED with header)
3. "Getting Started" heading starts at roughly 30% from left edge (ALIGNED)
4. Bento grid container starts at roughly 30% from left edge (ALIGNED)
5. Within bento grid, card content starts with internal card indentation — a SECOND left edge roughly 32% from viewport
6. The second column of cards starts at roughly 55% from left edge — a THIRD position
7. The Essence callout has its OWN left edge indented from the section — a FOURTH position
8. Code blocks inside cards have their own indentation — a FIFTH position

**Count: 5 different starting positions.** The primary content edge is consistent (the ~30% position), but the nested structure creates 4 additional sub-edges. This is acceptable for a grid layout — grids inherently create multiple alignment points. The key question is whether the PRIMARY left edges align, and they do.

**768px:** Fewer starting positions because the content fills more of the width:
1. Header/heading/overview left edge at roughly 15% from left
2. Bento card internal left edge at roughly 17%
3. Second column start at roughly 52%
4. Essence callout indent
5. Code block indent

**Count: 5 different starting positions.** Similar to 1440px but more compact.

**Severity: LOW** — Multiple alignment edges are expected in a bento grid layout. The primary edges are consistent.

### PA-16: Pick two elements that should look identical (e.g., two callout boxes). Do they actually look the same?

**Test 1 — Two BEGINNER-level bento cards:**
"Create the Grid Container" (left, tall) vs "Set Cell Borders" (right, shorter):
- Both have the same card style: bordered container with title, badge, time estimate, description
- Both have "BEGINNER" badge in the same green-outlined style
- BUT they are different SIZES — the left card is tall (spanning more rows) while the right is compact
- The left card has massive empty space inside because its content does not fill the tall cell
- The right card is properly filled

**Verdict: They SHARE the same visual language (badge, border, title treatment) but the size difference makes them feel different.** The left card looks unfinished because of its internal void. Consistency of style: YES. Consistency of density: NO.

**Test 2 — Two disclosure triangles:**
"View implementation steps" vs "View border rules":
- Both use the same red/coral text color
- Both have the same triangle marker
- Both are positioned at the bottom of their cards
- They look IDENTICAL in treatment

**Verdict: Perfect consistency on disclosure triangles.**

**Severity: MEDIUM** — Card style is consistent, but internal density varies wildly between cards of different sizes.

### PA-17: Is there a visual rhythm to the page (like a beat in music), or does it feel random?

**1440px:** There IS a rhythm WITHIN each bento grid section — cards create a syncopated pattern of large/small, wide/narrow that reads like a jazz rhythm: BIG-small-small, BIG-small-small. The level badges repeat at consistent positions. The section headings create a meta-rhythm: Getting Started, Cell Size and Hierarchy, Compound Grid Patterns — each with its own sub-grid.

BUT the rhythm BREAKS between sections. The dead zones between grids are like dropping the beat entirely — three bars of silence in the middle of a song. The page has rhythm in its composed sections but no rhythmic connection between them. It is like hearing three separate songs played sequentially with long pauses between them, not one continuous piece.

**768px:** Same rhythmic structure — strong within sections, broken between them.

**Severity: HIGH** — The between-section dead zones destroy the overall rhythm of the page.

### PA-18: Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler?

**1440px:** The neutral palette feels cohesive and warm throughout. The cream background, the off-white card backgrounds, the warm gray text — all feel like members of the same family. The warm tone is consistent from header (dark warm brown/charcoal) through body (warm cream) to card backgrounds (slightly warmer off-white).

The code block backgrounds are the coolest element on the page — dark charcoal with syntax-highlighted text. They feel slightly cooler than the surrounding warm palette but this is intentional and works as contrast. The inline code badges (small monospace text with a warm tan background) bridge the gap between the warm page and the cool code blocks nicely.

The only potential outlier is the "Tip" callout inside the code block card, which has a green border. But this is an accent, not a neutral.

**768px:** Same assessment. The warm family is consistent.

**Severity: NONE** — The neutral palette is harmonious.

### PA-19: Is there any element that feels like it's from a different website?

**1440px:** Two candidates:

1. **The Essence callout** — This element has a distinctive purple/violet left border and a different typographic treatment (italic serif text). It feels intentionally different, like a philosophical aside or an architectural annotation. It works as a special element but it IS visually distinct from everything else on the page. It could feel like it wandered in from a design philosophy essay rather than a technical documentation page.

2. **The disclosure triangles** — The red/coral "View implementation steps" text with a triangle marker uses a different interaction pattern from the rest of the page. While the page is static and readable, these interactive elements introduce a different modality. They do not feel from a DIFFERENT website per se, but they feel like they are from a different SECTION of the same website.

Neither element is truly jarring — both are intentional design variations. Nothing feels genuinely foreign.

**768px:** Same assessment.

**Severity: LOW** — All elements belong to the same design language, though the Essence callout is deliberately set apart.

### PA-20: If you described this page's personality in three words, what would they be? Does that match the intended personality?

**Three words: SCHOLARLY, RESTRAINED, INCOMPLETE**

- **Scholarly:** The page reads like an architecture textbook — careful taxonomy, defined terms, structured progression from Beginner to Advanced. The Essence callout feels like a philosophical margin note.

- **Restrained:** The warm cream palette, the generous whitespace, the lack of decoration — everything is held back. No flashy colors, no dramatic typography, no visual fireworks. The dark header is the boldest element, and even it is muted.

- **Incomplete:** The massive dead zones, the empty card cells, and the abrupt ending give the page a feeling of being unfinished — like a draft that has good bones but was not fully realized. This is the gap between the INTENDED personality and the ACTUAL personality.

**Intended personality (from the page's own language):** Disciplined, modular, structural. The bento grid is meant to embody "rigid structure containing discontinuous density" — confident and organized.

**Match assessment:** The scholarly and restrained qualities MATCH the intended personality. But "incomplete" does NOT — the intended personality is DISCIPLINED, which implies finishing what you started. The dead zones and empty cells undermine that discipline.

**Severity: HIGH** — The personality mismatch on the "incomplete" dimension is the single most important finding of this audit. The page communicates "we ran out of steam" rather than "this is disciplined containment."

---

## CRITICAL FINDINGS SUMMARY

### CRITICAL

1. **MASSIVE DEAD ZONES (PA-12, PA-17):** Approximately 6,000+ pixels of blank cream between the "Cell Size and Hierarchy" section and the "Compound Grid Patterns" section at 1440px. Content exists in the DOM but may not paint correctly in some rendering contexts. Even if this is a rendering artifact, the spacing between sections is extremely excessive — the full-page screenshot shows large gaps between every section.

2. **RESPONSIVE COLLAPSE FAILURE (PA-14):** At 768px viewport, the bento grids maintain 3-column layout with ~249px column widths. The grid container is ~812px wide — wider than the 768px viewport. This violates the stated requirement that "all multi-column grids collapse to single column below 768px."

### HIGH

3. **WASTED WIDTH AT 1440px (PA-14, PA-15):** The content area occupies approximately 60% of the viewport width. Roughly 40% of the screen is unused cream margins. For a page demonstrating bento grid layouts, this narrow tube undermines the content's own message about using space effectively.

4. **UNBALANCED CARD DENSITY (PA-16):** Tall spanning cards have large internal voids (content does not fill the cell), while adjacent single-row cards are packed tight. The "Create the Grid Container" card is roughly half empty inside. This creates a hollow vs stuffed tension.

5. **NO VISUAL ENDING (PA-13):** The page terminates after data tables with no visual conclusion — no summary moment, no capstone, no emotional closure. Just cream void.

### MEDIUM

6. **ORPHANED CARDS (PA-12):** The "Configure Typography Tokens" card sits alone in the bottom row of the Getting Started grid with no adjacent card. It looks stranded and lonely.

7. **PERSONALITY MISMATCH (PA-20):** Page personality reads as "scholarly, restrained, incomplete" when it should read as "disciplined, modular, structural." The "incomplete" quality undermines the intended personality.

### LOW

8. **ESSENCE CALLOUT STANDS APART (PA-19):** The Essence callout with its purple border and italic serif text is the most visually distinct element on the page. Intentional, but noticeably from a different register than the technical bento cards.

9. **MULTIPLE ALIGNMENT EDGES (PA-15):** Five different left-edge starting positions due to nested grid structure. Expected for bento layout but contributes to visual complexity.

### NONE (Positive Findings)

10. **WARM NEUTRAL HARMONY (PA-18):** The warm cream/tan/charcoal palette is cohesive and consistent throughout. No temperature conflicts in the neutral family.

11. **DISCLOSURE TRIANGLE CONSISTENCY (PA-16):** All interactive disclosure elements use identical treatment — red/coral text, triangle marker, consistent positioning.

12. **HEADER AUTHORITY (Cold Look):** The dark header with warm cream typography projects genuine authority and gravitas. This is the strongest visual element on the page.

---

## AD-SPECIFIC BENTO GRID OBSERVATIONS

- **Breathing room:** Grid cells with spanning (2x2, 2x1) have TOO MUCH breathing room — they feel hollow. Single cells have adequate but tight breathing room. The balance is wrong.
- **Grid collapse at narrow viewports:** FAILS at 768px. Grid remains 3-column at ~249px each, overflowing the viewport.
- **Narrow columns causing word stacking:** At 768px, the 249px columns are narrow enough that code snippets and technical terms create awkward line breaks. Not single-word stacking, but tight.
- **Overall layout width at 1440px:** The layout feels too constrained. A bento grid page should USE the available space — that is literally the point of bento grids. Having narrow, tube-like content on a wide screen contradicts the exploration's thesis.
