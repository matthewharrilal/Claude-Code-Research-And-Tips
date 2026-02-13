# Perceptual Audit Findings: Impression + Emotion
## AD-005: Choreography
### Auditor A

**Viewports audited:** 1440px (full scroll-through with screenshots + accessibility tree), 768px and 1024px (limited by Playwright contention — accessibility snapshot available, screenshots compromised by other agents navigating to different pages)

---

## Cold Look (1440px) — LOCKED

**Gut reaction:** Confident and editorial. The dark header with warm serif title creates a commanding opening — this page knows what it is.

**Worst thing:** The progress bar segments (thin colored strips between hub and spoke sections) feel like foreign app-widget elements dropped into an otherwise purely editorial environment. They lack breathing room and look utilitarian.

**Best thing:** The territory card grid. The Featured Territory card is wider and more prominent, the smaller territory cards maintain clear visual hierarchy. Serif headings inside cards feel like chapter titles — editorial and inviting.

**Ship verdict:** SHIP WITH NOTES. Editorial confidence is the page's greatest strength. A few spatial issues and one element that feels foreign need attention.

---

## 5-Dimension Pass (1440px)

### READABILITY
The body text reads well — warm serif at comfortable size with generous line spacing. Paragraphs never feel like walls of text. The "Establishing Shot" callout with its left accent bar is easy to distinguish from body content. Code blocks in the spoke sections are clearly differentiated with a dark background that contrasts sharply against the warm cream.

**Issue:** The code blocks are VERY tall and dense. The "Prohibited" code block at ~scroll 3200 occupies nearly an entire viewport. While the content is necessary, the density shift from the generous prose sections to the packed code is jarring — the page goes from "unhurried editor" to "technical reference manual" without warning.

### SPATIAL BALANCE
**CRITICAL FINDING — Excessive empty space:** Between approximately scroll positions 3600-5000 (after the Essence callout at the end of Spoke 1 and before the Density Wave section), there is a MASSIVE blank zone — easily 2+ full viewport heights of pure warm cream background with zero content. This is the single most problematic spatial issue on the page. A reader scrolling through would lose all sense of where they are. The page's total height is 11,798px — these blank zones likely account for 15-20% of the total scroll distance. The page's "breathing" philosophy is admirable, but this crosses from "breathing room" into "dead air."

The Hub section (top) has good density — the territory grid is well-spaced with even gaps between cards. The spoke sections have appropriate density for long-form reading.

### HIERARCHY & FLOW
The page follows a clear Hub -> Transition -> Spoke -> Transition -> Spoke -> Transition -> Spoke -> Synthesis arc. The "Axis Direction Change" transition zones (centered text reading "Descending into Detail" and "Ascending to Synthesis") are elegant wayfinding markers. The italic serif text in these transition zones creates a lovely moment of pause.

The hub-to-spoke journey feels intentional — the territory grid overview narrows into focused detail sections. Each spoke has breadcrumb navigation ("Hub > CSS Transition Choreography") and a progress indicator showing "Spoke 1 of 3 active."

**Issue:** The progress indicators (segmented bars) use a red active segment against gray inactive segments. This red does not appear anywhere else in the page's color vocabulary. It feels like it belongs to a different design system — a dashboard component inserted into a magazine layout.

### CONSISTENCY
The callout boxes are consistent throughout — "Establishing Shot," "Caution," "Gotcha," "Tip," and "Essence" all use the same left-accent-bar pattern with an uppercase label. The accent bar color varies by type (which is appropriate), but the structural pattern is uniform.

Tables throughout the page share the same clean structure — light header row, clear cell separation, comfortable spacing. The tables in the spoke sections and the synthesis section all feel like they belong together.

**Issue:** The territory card grid in the Hub uses a 3+4 layout at 1440px (Featured Territory spans wider, then 3 cards in the first visible row, 4 cards in the second). The Featured Territory card has a red left accent, matching the progress bar red. This red is used to signal "active" or "featured" — but it competes with the accent bar colors in the callout boxes (which seem to be blue/teal). Two competing accent color systems create subtle visual noise.

### SHIP TEST
Would I put my name on this page? **Almost.** The editorial confidence is genuine — the typography, the hub-spoke structure, the transition zones, the callout patterns, the synthesis tables all feel crafted by someone who cares about the reading experience. The page has a strong personality: it is a magazine feature about choreography, and it READS like one.

What holds it back: (1) the enormous dead zones that break the scroll narrative, (2) the progress bar widget feeling foreign, and (3) the competing red-accent and blue-accent color systems.

---

## PA Question Responses

### PA-01: What's the first thing that bothers you?
**The dead zones.** After the Essence callout at the end of Spoke 1 (the CSS Transition Choreography spoke), there are approximately 2 full viewport heights of completely empty warm cream space before the Density Wave section appears. This happens again between other sections. A page about choreography — about the rhythm of content flow — has moments where the rhythm completely stops. It is not a pause; it is an absence. The reader scrolls through nothing, loses their place in the narrative, and has to re-orient when content returns. This is the page's choreography failing at its own metaphor.

### PA-04: Where does your eye go first? Is that where it SHOULD go?
**At 1440px:** My eye goes first to the large white serif title "AD-005: Choreography" against the dark header background. This is exactly where it SHOULD go — the title is the establishing shot for the page itself, grounding me in what I am about to read.

After the header, my eye drops to "The Hub: Establishing Shot" heading, then scans right across the territory cards. The Featured Territory card ("CSS Transition Choreography") catches my eye because of its width and the red left accent. The eye flow mirrors the page's own theory — it is performing its own choreography. This is the page at its best: the structure IS the content.

The one misdirection: the segmented progress bar between the callout block and the territory grid catches my eye because of its red segment. It pulls my focus before I have finished reading the callout text. A smaller, lighter indicator would let the content breathe without the visual interruption.

### PA-05: Would you put your name on this? What would you fix first?
**I would put my name on the concept, the structure, and the typography. Not yet on the spacing.**

Fix first: **Reduce the dead zones by 60-70%.** The breathing space between sections should be deliberate — one calm pause, not a canyon. The page height could drop from ~11,800px to ~9,000px without losing any sense of spaciousness. The transition zones ("Axis Direction Change") already signal section breaks beautifully; they do not need additional hundred-pixel padding on both sides.

Fix second: Reconsider the progress bar design. Either make it feel editorial (perhaps a simple text indicator like "Section 1 of 3" in the meta label typeface) or remove it entirely. The segmented bar with colored fills is the most app-like element on an otherwise magazine-like page.

### PA-18: Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler?
**They belong to the same warm family.** The entire page lives in a warm cream-to-tan-to-charcoal palette. The background cream, the card borders, the table dividers, the meta label text — all feel like they share the same warm undertone. The dark header and the dark code blocks (which are more of a cool charcoal-black) provide necessary contrast without feeling cold. They read as "ink on warm paper" rather than "screen on device."

The one exception is the dark zone that appears after the Essence callout around scroll position 3600-3800. This dark area (which may be a transition zone or just the code block's background extending) has a slightly cooler temperature than the dark header. But this is subtle — it does not create a dissonance, just a slight temperature shift.

### PA-19: Is there any element that feels like it's from a different website?
**Yes: the progress bar/indicator strips.** The segmented horizontal bars with a red active segment and gray inactive segments feel like they were imported from a dashboard or project management tool. Every other element on this page speaks in an editorial language — serif headings, callout boxes with accent bars, spacious prose paragraphs, clean tables. Then these progress bars appear with their precise segmentation and flat colored fills, and they sound a different visual note. They are functional but foreign.

The breadcrumb navigation ("Hub > CSS Transition Choreography") is borderline — it is functional and compact, but its simplicity keeps it from clashing with the editorial tone. The progress bars, however, are too widget-like.

### PA-20: If you described this page's personality in three words, what would they be?
**Unhurried. Architectural. Confident.**

"Unhurried" because the page takes its time — generous spacing, long prose paragraphs that explain rather than summarize, callout boxes that pause to reflect on essence. "Architectural" because the hub-spoke structure is not just described but performed — the page IS a choreographic layout about choreographic layouts. "Confident" because the typography choices, the dark header, the editorial callout pattern, and the clear hierarchy all suggest a designer who knows exactly what they want. There is no hedging, no visual uncertainty. The page declares its identity on arrival and sustains it throughout.

The dead zones are the one place where confidence becomes overconfidence — the page trusts its spacing philosophy past the point where it serves the reader.

---

## Summary of Findings

| # | Finding | Severity | Location |
|---|---------|----------|----------|
| 1 | MASSIVE dead zones (~2 viewport heights) between spoke sections | HIGH | Between Spoke 1 end (~scroll 3600) and Density Wave section (~scroll 5000) |
| 2 | Progress bar segments feel foreign/app-like in editorial context | MEDIUM | Hub section progress bar + all spoke progress indicators |
| 3 | Red accent color in progress bars and Featured Territory card competes with blue/teal accent in callout boxes | MEDIUM | Hub territory grid + all progress indicators |
| 4 | Prohibited code block is very tall and dense, creating jarring density shift | LOW | Spoke 1, "Prohibited Transition Properties" section |
| 5 | Transition zones ("Axis Direction Change") are elegant and effective | POSITIVE | Between Hub and Spoke 1, between Spoke 2 and Spoke 3 |
| 6 | Territory card grid hierarchy is clear and well-structured | POSITIVE | Hub section |
| 7 | Callout box pattern (Establishing Shot, Caution, Gotcha, Tip, Essence) is consistent and effective | POSITIVE | Throughout all spoke sections |
| 8 | Warm neutral color family is cohesive across the entire page | POSITIVE | Global |
| 9 | Page personality is strong and sustained: unhurried, architectural, confident | POSITIVE | Global |

---

## Viewport Limitation Note

768px and 1024px visual inspections were compromised by Playwright contention across BOTH audit rounds. In Round 1, agents navigated to AD-006; in Round 2, agents navigated to AD-001. Despite the URL reading AD-005, the rendered viewport showed AD-001 content — confirming this is a browser-level contention issue where concurrent agents share one Playwright instance.

**Round 2 confirmed findings (1440px):**
- Full-page screenshot captured at 1440px confirms total page height of 11,797px
- Dead zones verified: massive blank stretches between spoke sections (scroll positions ~6000-7600 and ~8000-9800 are largely empty)
- Accessibility tree at all three viewports confirms structural content is complete and identical
- Territory grid collapses from 3+4 layout (1440px) to 2-column (1024px) to 1-column (768px) as documented in the page's own responsive strategy
- The scroll-triggered reveal system creates the dead zones — elements with reveal-on-scroll that have not been triggered by IntersectionObserver remain invisible, consuming vertical space without rendering content

**Screenshots captured (Round 2):** 19 viewport screenshots at 1440px covering scroll positions 0 through 10500, plus 2 full-page screenshots.
