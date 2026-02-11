# Perceptual Audit Findings — AD-003 Bento Grid
## Auditor Alpha: Impression + Readability + Spatial

**Page:** AD-003-bento-grid.html
**Viewports tested:** 1440x900, 768x1024
**Evidence:** Full-page screenshots + element-level screenshots at both viewports

---

## SCROLL-THROUGH OBSERVATIONS

### 1440px Scroll-Through

**Scroll Position 0 (Header + Overview):**
The page opens strong. Dark header band with warm cream body — confident, editorial. The title "AD-003: Bento Grid" in serif italic feels deliberate. The overview section with its prerequisites table is clean and readable. The table uses comfortable column widths and the inline code tokens sit neatly in their rows.

**Scroll Position ~900 (Getting Started bento grid):**
The bento grid cards appear. Two columns: left column has a tall "Create the Grid Container" card, right column has two shorter cards stacked ("Set Cell Borders" and "Apply Zone Tokens"). The card text is readable at this width. The level badges ("BEGINNER") sit comfortably beside the card titles. However, the left card has a LOT of empty space inside it — the content doesn't fill the height that the grid has allocated.

**Scroll Position ~1100 (Lower beginner cards):**
"Configure Typography Tokens" card spans the left column only. It has readable body text with inline code tokens. Below this, there is a significant gap before the next section heading.

**Scroll Position ~1700 (Cell Size and Hierarchy):**
A colored bar introduces "INTERMEDIATE" level. The Essence callout — in italics — is philosophical and well-set. The intermediate bento grid has four cards in three columns. "Span Syntax" has an expanded accordion showing code. "Gap as Density" has a small code snippet. "Breaking the Grid" and "Internal Layout Templates" complete the row. The code blocks are truncated horizontally in the narrower columns — text runs off the visible area.

**Scroll Position ~2500+ (Compound Grid Patterns):**
The Advanced section uses a different card arrangement. Cards are in narrow columns — the left column card text is CLIPPED at the left edge. "Nested Grid Cells" and "Named Grid Areas" sit in the middle, with code blocks that truncate. The bottom card ("Compound Density: ISLANDS Inside BOOKENDS") is in the left column and is severely cropped.

**Scroll Position ~4200-6000 (Verification + RAR):**
The Verification section is a traditional checklist format — not a bento grid. Readable, well-structured with checkmarks. The Research Application Record below is a dense reference section with tables and citations. Readable but very long.

**Scroll Position ~6000-10000 (Dead space):**
Massive empty cream void. Approximately 4,000 pixels of blank space at the bottom of the page — nearly 4.5 viewports of nothing. This is catastrophic dead space that makes the page feel broken or unfinished.

### 768px Scroll-Through

**Scroll Position 0 (Header + Overview):**
The header reads well at this width. The subtitle wraps to three lines but remains comfortable. The overview section and prerequisites table are well-proportioned — actually reads better than 1440px because the line length is more natural.

**Scroll Position ~900 (Getting Started):**
The bento grid is STILL in multi-column layout at 768px. Cards are in two columns. "Create the Grid Container" on the left, "Set Cell Borders" on the right. The right column cards ("Apply Zone Tokens") have text that begins to feel cramped with the hex color codes.

**Scroll Position ~1200 (Typography card + Essence):**
"Configure Typography Tokens" appears at full width — better than the 1440px version. The Essence section introduction reads well.

**Scroll Position ~2400 (Intermediate cards):**
The intermediate bento grid is still multi-column. Code blocks are truncating. The "TIP" callout text is in a narrow column and stacking vertically — each thought fragment gets its own line. "The largest cell in / each grid section / should contain your / most critical content." This is borderline uncomfortable to follow.

**Scroll Position ~3000+ (Same dead space void):**
Same catastrophic blank space at the bottom as the 1440px view.

---

## PA QUESTION RESPONSES

### PA-01: What's the first thing that bothers you?

**1440px:** The massive dead space at the bottom of the page. After the Research Application Record ends, there are roughly 4,000 pixels (4+ full viewports) of pure blank cream. It makes you wonder if the page is broken — did content fail to load? Did a section get deleted? It undermines the otherwise confident tone of the top half.

**768px:** The grid doesn't collapse. The page explicitly states "all multi-column grids collapse to single column" below 768px, but at exactly 768px the cards are still in multi-column layout. The page contradicts itself.

### PA-02: Is any text uncomfortable to read? Point to the worst spot.

**1440px:** The worst spot is the code blocks inside the narrow bento grid cards in the "Cell Size and Hierarchy" and "Compound Grid Patterns" sections. Code is truncated horizontally — you can see `grid-template-colu` cut off mid-word, `.bento-item--tall {` running off the edge. Code that you can't read completely is worse than no code at all.

**768px:** The "TIP" callout in the left column of the intermediate bento grid. The text is stacking vertically in a narrow column: "The largest cell in / each grid section / should contain your / most critical content. / Size IS hierarchy — / let the grid do the" — it reads like a bookmark, not a paragraph. Your eye has to work hard to stitch the fragments back into meaning.

### PA-03: Does this feel like one designer made it, or three?

**Both viewports:** It feels like TWO designers. Designer A built the flowing prose sections — the header, the overview, the Essence callouts, the Verification section, the Research Application Record. These all have a consistent voice: confident, spacious, editorial, well-spaced typography. Designer B built the bento grid cards — and these feel like wireframes that never got their final polish. The cards have inconsistent internal layouts, code blocks that overflow, and the grid structure doesn't respond to its own stated breakpoints. The "two designers" feeling comes from the contrast between the polished prose and the rough grid.

### PA-04: Where does your eye go first? Is that where it SHOULD go?

**1440px:** Eye goes to the title "AD-003: Bento Grid" in the dark header band, then drops to the overview section. This is CORRECT — the page guides you through orientation before action. The bento grid cards are below the fold, which is appropriate since you need to understand the concept before seeing the implementation.

**768px:** Same pattern — title first, then overview. At this width the bento grid cards appear sooner (less whitespace above them), which actually feels better. The hierarchy is working.

### PA-05: Would you put your name on this? What would you fix first?

**1440px:** I would put my name on the top third — the header, overview, and section introductions. I would NOT put my name on the bento grid cards or the bottom of the page. First fix: kill the 4,000+ pixels of dead space at the bottom. Second fix: make the code blocks in narrow cards horizontally scrollable or break to a wider layout. Third fix: ensure the grid actually collapses at its stated breakpoint.

**768px:** No — I would not ship this at 768px. The grid fails to collapse and the cards are too narrow. The code blocks are unreadable. Fix the responsive collapse FIRST, then everything else follows.

### PA-06: Are any words stacking vertically, one per line, in any column?

**1440px:** Not at this width, but the code blocks are close to the danger zone. The card columns are wide enough for body text but too narrow for code.

**768px:** YES. The "TIP" callout in the intermediate bento grid section has text stacking with very short line lengths — about 5-7 words per line. Not quite one-word-per-line, but the line lengths are uncomfortably short and create a choppy reading rhythm. The right column cards with level badges ("BEGINNER", "INTERMEDIATE") also have the title + badge competing for horizontal space, causing card titles to wrap earlier than they should.

### PA-07: Can you read the longest paragraph without your eye losing its place between lines?

**1440px:** Yes — the flowing prose paragraphs (overview, section introductions, Essence callout, Verification reflection) all have good line height and comfortable line length. Your eye tracks smoothly. The card text is also readable but shorter.

**768px:** Yes for the prose sections — actually better than 1440px because the line length is shorter and more natural. The card text is harder because the narrow columns create short lines that make your eye jump back to the left margin too frequently.

### PA-08: Is there any text you have to lean in or squint to read?

**1440px:** The code blocks in narrow cards are the worst. The monospace text is smaller than the body text, and when it's truncated you have to mentally reconstruct what the full code would say. The time estimates (e.g., "~5 min", "~3 min") in small monospace text inside the cards are also quite small.

**768px:** Same issues, amplified. The code blocks are even more truncated. The time estimates are even smaller relative to the viewport.

### PA-09: Is there dead space that serves no purpose — a screen-sized void with nothing in it?

**Both viewports — CRITICAL:** YES. Approximately 4,000+ pixels of pure blank cream at the bottom of the page, below the Research Application Record. This is the single largest visual defect on the page. It spans roughly 4.5 full viewports of nothing. There is no content, no footer, no indication that the page has ended. A user would scroll through screen after screen of blank space wondering if something is loading.

Additionally, there are smaller but noticeable dead spaces between sections — particularly between the "Getting Started" bento grid and the "Cell Size and Hierarchy" section. These inter-section gaps are deliberate breathing room and feel intentional, but they are perhaps a bit too generous.

### PA-10: If you squint until you can't read any text, does the layout still look balanced?

**1440px:** The TOP half — yes. Squinting, you see a dark header band, a cream content block, then card-shaped rectangles arranged in a grid. It looks structured and purposeful. But the BOTTOM half falls apart — the bento grid sections are left-heavy (content clusters on the left, empty space on the right) and then the massive void at the bottom makes it look like the page was cut in half.

**768px:** Better balance overall because the narrower viewport forces content to fill the width more uniformly. But the bottom void still destroys the impression of a complete page.

### PA-11: Are the margins generous (confident spacing) or anxious (clutching or pushing away)?

**1440px:** The margins around the overview section and prose paragraphs are GENEROUS — confident, well-measured spacing that says "we have room and we're using it intentionally." The margins inside the bento grid cards are ANXIOUS — the content is pressed up against the card borders, code blocks overflow, and internal spacing feels cramped. The contrast between the generous prose margins and the anxious card margins reinforces the "two designers" feeling from PA-03.

**768px:** The prose margins translate well at this width — still generous but not wasteful. The card margins become even more anxious because the cards themselves are narrower but the internal spacing hasn't adjusted. Content feels pushed against the walls.

---

## DIMENSION PASSES

### Pass 1 — READABILITY

Could I read this for 10 minutes? The prose sections — yes, comfortably. The typography is well-chosen, the line heights are generous, and the serif headings create clear hierarchy. The card content — no. The narrow columns, truncated code, and cramped spacing make it fatiguing. After 3-4 cards you'd want to stop. The biggest readability failure is code that truncates — it's worse than no code at all because it creates frustration.

### Pass 2 — SPATIAL BALANCE (squint test)

Blurring my vision, the page has a strong top anchor (dark header) and clear section divisions. But the weight is distributed unevenly — heavy at the top, moderate in the middle, then a cliff edge where content ends and void begins. The bento grid cards cluster to the left half of the page at 1440px, leaving the right side underused. The page lacks a proper visual conclusion — no footer, no closing element, no bookend to match the strong header.

### Pass 3 — HIERARCHY & FLOW

The content flows well conceptually: Overview (orient) -> Getting Started (beginner cards) -> Cell Size (intermediate cards) -> Compound Patterns (advanced cards) -> Verification (close). This progression is smart. But the flow STOPS when you hit the dead space. Each section transition has a gap that's slightly too large, and the final transition into void is a complete flow failure. The category labels ("BEGINNER", "INTERMEDIATE", "ADVANCED") provide good waymarking.

### Pass 4 — CONSISTENCY

Identical elements do NOT match consistently across sections. The beginner cards use one internal layout. The intermediate cards use different internal layouts (some with code blocks, some without, some with expanded accordions). The advanced cards use yet another arrangement. This is deliberate (FRACTAL variation) but it creates a feeling of inconsistency rather than intentional variation. The Essence callout formatting is consistent. The section headings are consistent. The level badges are consistent in style but vary in color (green for BEGINNER, blue for INTERMEDIATE, dark for ADVANCED).

### Pass 5 — SHIP TEST

Could I fix this with 10 more minutes? No — the dead space bug needs investigation (likely a structural issue), the responsive collapse failure needs attention, and the code block overflow needs a solution. These are 30-60 minute fixes, not 10 minute tweaks.

Would I be proud to see this next to Stripe's documentation? The prose sections — yes. The header — yes. The bento grid cards — no. They look like a prototype, not a finished product.

---

## SUMMARY OF CRITICAL FINDINGS

| # | Finding | Severity | Viewport |
|---|---------|----------|----------|
| 1 | ~4,000+ pixels of dead space at bottom of page — nearly 5 empty viewports | CRITICAL | Both |
| 2 | Grid does not collapse to single column at 768px (page explicitly states it should) | CRITICAL | 768px |
| 3 | Code blocks in narrow bento cards truncate horizontally — unreadable | HIGH | Both |
| 4 | Left column card text clipped at left edge in Compound Grid section at 1440px | HIGH | 1440px |
| 5 | "Two designers" feeling — polished prose vs rough grid cards | MEDIUM | Both |
| 6 | TIP callout in narrow column has uncomfortable short line lengths | MEDIUM | 768px |
| 7 | Card internal spacing feels cramped while section spacing is generous | MEDIUM | Both |
| 8 | No visual footer or page-end indicator after RAR section | LOW | Both |
| 9 | Inter-section gaps slightly too generous (intentional but could tighten) | LOW | Both |

---

## SHIP VERDICT

**1440px: YES WITH RESERVATIONS** — The top two-thirds of the page are strong. The header and prose sections are confident and well-crafted. The bento grid cards need polish but are functional. The dead space at the bottom is the dealbreaker — it must be fixed.

**768px: NO** — The responsive collapse failure is a functional bug, not a design issue. The page explicitly documents that grids should collapse below 768px and then doesn't do it. Code blocks are unreadable at this width. Cannot ship.

**Overall: NO** — The dead space bug and the responsive collapse failure are both disqualifying. Fix those two structural issues, then the page is shippable with minor card polish.
