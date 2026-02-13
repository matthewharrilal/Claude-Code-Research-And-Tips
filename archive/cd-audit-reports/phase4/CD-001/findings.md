# CD-001 Perceptual Audit Findings
## "Reasoning Inside Code" — Full Perceptual Assessment

**Auditor:** Perceptual Auditor (standalone)
**Page:** CD-001-reasoning-inside-code.html
**Date:** 2026-02-11
**Viewports assessed:** 1440x900, 768x1024, 1024x768

---

## COLD LOOKS (All Three Viewports)

### 1440px Cold Look
- **Gut reaction:** Serious, well-structured teaching document. Dark header commanding, section labels clearly signposted, density meter immediately interesting. Warm cream and dark header create strong tonal separation. Thoughtful, purposeful, confident.
- **Worst thing:** Body text stops about two-thirds across the page with a large empty right third. Content channel feels narrow relative to viewport width.
- **Best thing:** Density meter sets expectations cleverly. Pullquote with blue accent is elegant. Section labeling reads like museum wayfinding.
- **Ship verdict:** YES WITH RESERVATIONS

### 768px Cold Look
- **Gut reaction:** Much denser and more engaging. Text fills the viewport. Feels like reading a quality tablet article. Page makes more sense at this width.
- **Worst thing:** Transition between cream content and darker pullquote band is abrupt — a structural seam rather than designed transition.
- **Best thing:** Text column width is nearly perfect for reading. Hierarchy from hero to section label to heading to body to callout flows naturally.
- **Ship verdict:** YES WITH RESERVATIONS

### 1024px Cold Look
- **Gut reaction:** Goldilocks viewport. Content channel feels intentional. Hero through Context callout fits in one screen. Feels like the "designed for" width.
- **Worst thing:** Right side still has noticeable empty space. Structural seam visible at section transitions.
- **Best thing:** Proportions feel right. Content column, headings, callout boxes — everything purposefully sized.
- **Ship verdict:** YES

---

## 5 DIMENSION PASSES (1440px Primary)

### Pass 1: READABILITY
- Body text in a comfortable reading column, roughly half the viewport width
- No word stacking observed at any visible scroll position
- Code blocks use monospace on dark backgrounds — readable with clear syntax coloring
- Inline code snippets (Authorization, .slice(7), "Bearer ") appear as small pills within body text — readable
- The Reasoning box text is slightly cramped — three dense paragraphs with bold terms create visual heaviness
- Callout boxes (Context, Tip) have comfortable reading line spacing
- At 768px, text nearly fills the full width — no readability issues
- At 1024px, reading column is ideal width for sustained reading

### Pass 2: SPATIAL BALANCE
- Page is strongly left-weighted at 1440 — content channel sits left-of-center with empty right space
- Dark header banner and pullquote dark bands create strong horizontal bars that anchor the layout
- Between those bars, cream sections feel spacious but potentially too empty
- Reasoning box content ends early in the viewport, with the remaining space blank — section transition gap
- At 768px, spatial balance is excellent — content fills the frame
- At 1024px, balance is good with moderate right breathing room

### Pass 3: HIERARCHY & FLOW
- Eye enters at hero heading "Reasoning Inside Code" — correct entry point
- Density meter immediately below hero guides expectations — excellent device
- Section labels ("Opening -- Context", "Rising -- First Contact") create clear wayfinding
- H2 headings with red left accent bars are strong focal points
- Pullquotes in italic with blue accent bars serve as section dividers — elegant and distinctive
- Density meter progressing from 1/5 to 5/5 is a genuinely innovative flow mechanism
- The CRESCENDO pattern (gradually increasing density) is perceptible through the section structure

### Pass 4: CONSISTENCY
- All callout boxes (Context, Tip) use identical visual treatment — blue left accent, same warm background
- All code blocks use the same dark background treatment with syntax highlighting
- Section labels all use identical uppercase small text style with monospace feel
- Density meters use the same bar format, progressively filling — consistent
- Pullquotes all use the same italic serif face with blue left accent — cohesive
- Red accent bar on H2 headings appears consistently throughout

### Pass 5: SHIP TEST
- Hero and first two sections are polished and shipworthy
- The narrow content channel on the wide viewport creates impression of incomplete design
- Section transitions via pullquotes are distinctive and memorable
- Would be proud to show the first half at any viewport; less confident about total spatial efficiency at 1440
- At 768px and 1024px, this is genuinely shipworthy throughout

---

## PA QUESTIONS — 1440px

**PA-01: What is the first thing that bothers you?**
The enormous empty right third of the page. The content channel occupies roughly half the available width, leaving a vast cream desert on the right. This is not confident white space — it reads as unused real estate.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The Reasoning box in the Building section. Three dense paragraphs analyzing Session Tokens vs JWTs, with bold terms embedded, create a wall of argumentative text. The italic question header ("Which approach serves the middleware pipeline?") above it adds visual weight. This is the densest text cluster on the page and the hardest to sustain attention through.

**PA-03: Does this feel like one designer made it, or three?**
One designer, clearly. The vocabulary of elements is small and used consistently: section labels, density meters, accent-barred headings, callout boxes, code blocks, pullquotes. Every component speaks the same visual language. The only inconsistency is the amount of empty space between sections, which varies.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the dark hero banner and the heading "Reasoning Inside Code." Yes, this is exactly right — it establishes what you are looking at before anything else competes for attention.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, with one fix: I would bring the content channel width closer to two-thirds of the viewport instead of half. The current narrow channel creates too much passive space at wide viewports. The design quality is high — the issue is proportion, not craft.

**PA-06: Are any words stacking vertically, one per line, in any column?**
No. All text flows in proper horizontal lines with natural wrapping. No vertical word stacking observed.

**PA-07: Can you read the longest paragraph without losing your place?**
Yes. The opening paragraph in the Opening section is the longest — four lines of body text. The line spacing is generous enough to track across lines without losing position. The Reasoning box paragraphs are also long but the bold terms act as anchors.

**PA-08: Is there any text you have to lean in or squint to read?**
The section labels ("OPENING -- CONTEXT", "RISING -- FIRST CONTACT") are in small uppercase tracking, which is readable but demands slightly more effort than the body text. The density meter label "DENSITY: 1 / 5" is similarly small. Neither requires squinting, but both are at the lower threshold of comfortable reading.

**PA-09: Is there dead space that serves no purpose?**
Yes. The right third of the viewport at 1440 serves no structural or breathing purpose — it is simply unused. Additionally, the gap between sections (between content ending and the next pullquote band) feels oversized in some transitions, particularly after the Reasoning box in the Building section.

**PA-10: If you squint until you cannot read text, does the layout look balanced?**
Squinting reveals a strong top-heavy pattern: dark hero band, then a cream zone with a text cluster left-of-center, then a dark pullquote band, then another cream zone. The alternation of dark bands and cream zones creates a striped rhythm, but the text clusters are all pushed to the left, making the right side feel empty even when blurred.

**PA-11: Are the margins generous (confident) or anxious (clutching)?**
The left margin is generous and confident. The right margin (or rather, the unused right space) is so generous it crosses into wasteful. The vertical margins between components within sections are comfortable. The vertical gaps between sections are generous to the point of excess.

**PA-12: Do your eyes flow smoothly from section to section?**
Yes, with one exception. The pullquote bands between sections act as effective visual "chapter breaks" — they signal "this thought is complete, a new one begins." The flow from hero to Opening to pullquote to Rising is smooth. However, when a section ends with the Reasoning box and there is a large cream gap before the next pullquote, the flow stalls — you scroll through emptiness wondering if you missed something.

**PA-13: Is there a clear visual ending, or does the page just stop?**
The Resolution section provides a clear wind-down with the "What to Carry Forward" heading, a decision reference table, and an Essence callout. The footer reads "CD-001 -- Reasoning Inside Code / Exploration Complete." This is a definitive ending — the page does not just stop.

**PA-14: Does every column have enough room for its content to breathe?**
The single content column has ample room — arguably too much at 1440. Code blocks fill their dark containers well. Callout boxes have comfortable internal spacing. The Reasoning box is the tightest space, but still readable.

**PA-15: Trace the left edge of every content block. How many starting positions?**
Two primary positions: the main content column starts at one consistent left edge, and callout boxes/code blocks indent slightly from that edge. Pullquote text aligns with the main content edge. Section labels align with the main content edge. This is a clean two-rail system.

**PA-16: Pick two elements that should look identical. Do they?**
The Context callout (Opening section) and the Tip callout (Rising section): they use the same blue left accent, same background, same label styling, same internal spacing. They look identical. Good.

**PA-17: Is there a visual rhythm (like a beat in music), or random?**
There is a clear rhythm: section label, density meter, accented heading, body text, [code block and/or callout], pullquote. This pattern repeats for each section. The density meter progression (1/5 through 5/5) adds a meta-rhythm that builds across the whole page. It feels intentional and musical — a CRESCENDO pattern as described.

**PA-18: Do all the grays and neutrals feel like the same family?**
Yes. The cream background, the slightly warmer callout backgrounds, the warm gray section labels, and the dark header all feel like they belong to the same tonal family. No cold grays intrude. The palette is consistently warm.

**PA-19: Is there any element that feels like it is from a different website?**
No. Every element — from the density meter to the pullquotes to the code blocks — feels like it belongs to this specific design system. The Reasoning box with its red-bordered "REASONING" label is the most distinctive element, but it does not feel foreign — it feels like a special variant of the callout pattern.

**PA-20: Describe this page's personality in three words. Does it match intent?**
"Methodical, warm, scholarly." Yes, this matches the intent of a deep-dive teaching page about authentication middleware. The page feels like a thoughtful professor's lecture notes — structured, rigorous, but approachable.

---

## PA QUESTIONS — 768px

**PA-01: What is the first thing that bothers you?**
The transition seam between the cream content area and the darker pullquote band. At this narrow width, the structural boundary between section types is more visible — a thin horizontal line that feels mechanical rather than designed.

**PA-02: Is any text uncomfortable to read?**
The code blocks. At this width, some code lines are long enough to require horizontal awareness, and the monospace text within the dark blocks runs close to the container edges. Not uncomfortable, but noticeably tighter than at wider viewports.

**PA-03: Does this feel like one designer made it, or three?**
One designer. The consistent vocabulary of components adapts naturally to this width.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Same as 1440 — the hero heading. Correct behavior.

**PA-05: Would you put your name on this? What would you fix first?**
Yes. I would soften the section transition seams — the hard line between cream and dark-band zones needs a more gradual transition at this width.

**PA-06: Are any words stacking vertically?**
No word stacking at 768.

**PA-07: Can you read the longest paragraph without losing your place?**
Yes. At this width, paragraphs wrap to more lines but the line length is comfortable — roughly 65-75 characters, which is close to the optimal reading width.

**PA-08: Is there text you have to squint to read?**
The section labels are slightly smaller relative to the viewport, but still readable. The inline code pills within body text are comfortable.

**PA-09: Is there dead space that serves no purpose?**
The gap between the Context callout and the pullquote band is noticeable but less severe than at 1440. The section transition gaps are present but less problematic at this width because the content fills the horizontal space.

**PA-10: Squint test — balanced?**
More balanced than 1440. The text blocks fill the width, creating more even visual weight. The dark hero band, text blocks, and pullquote bands create a clear top-to-bottom rhythm without the left-heavy bias of the wide viewport.

**PA-11: Margins generous or anxious?**
Generous and confident. The side margins are modest but sufficient. Internal spacing within callouts and code blocks is comfortable.

**PA-12: Do eyes flow smoothly section to section?**
Better than at 1440. The transitions are tighter, and the pullquote bands arrive sooner after section content, maintaining momentum.

**PA-13: Clear visual ending?**
Yes, same as 1440. The Resolution section and footer provide closure.

**PA-14: Content breathing room?**
Yes, though code blocks feel slightly more contained. Body text has ideal breathing room.

**PA-15: Left edge alignment positions?**
Same two-rail system, but the rails are closer together at this width. Clean and consistent.

**PA-16: Identical elements match?**
Yes, same as 1440.

**PA-17: Visual rhythm?**
Same CRESCENDO rhythm, experienced more rapidly because the viewport is taller (1024px height) so you see more of the pattern at once. The rhythm feels tighter and more engaging.

**PA-18: Gray/neutral family?**
Identical warm family as 1440.

**PA-19: Foreign element?**
No. Everything belongs.

**PA-20: Three-word personality?**
"Focused, warm, rigorous." Slightly more focused than the wide viewport because the content fills the frame. Intent match: yes.

---

## PA QUESTIONS — 1024px

**PA-01: What is the first thing that bothers you?**
Very little. At this width, the content-to-space ratio is nearly ideal. If anything, the right-side empty space is mildly noticeable but not bothersome.

**PA-02: Is any text uncomfortable to read?**
No. All text is comfortable at this width. Code blocks have enough width for most lines. Paragraph line lengths are near-optimal.

**PA-03: One designer or three?**
One designer. Clear and consistent.

**PA-04: Eye goes where?**
Hero heading. Correct.

**PA-05: Would you put your name on it?**
Yes, without reservations at this viewport. This is the strongest width for this page.

**PA-06: Word stacking?**
None.

**PA-07: Longest paragraph?**
Readable. Line length is comfortable, spacing generous.

**PA-08: Squinting?**
No text requires squinting. Section labels are readable.

**PA-09: Dead space?**
Moderate right-side space exists but reads as intentional breathing room rather than waste. Section transition gaps are present but proportional.

**PA-10: Squint test?**
Balanced. Content blocks are centered-left with comfortable right space. Dark bands and cream zones alternate rhythmically.

**PA-11: Margins?**
Confident and generous. This is the most assured-feeling viewport.

**PA-12: Section flow?**
Smooth. Pullquotes maintain momentum between sections effectively.

**PA-13: Visual ending?**
Clear and definitive.

**PA-14: Breathing room?**
Every element has appropriate space.

**PA-15: Left edges?**
Two-rail system, clean alignment.

**PA-16: Identical elements?**
Yes, all matching.

**PA-17: Rhythm?**
CRESCENDO pattern reads clearly with good pacing.

**PA-18: Neutral family?**
Warm and cohesive.

**PA-19: Foreign element?**
None.

**PA-20: Three-word personality?**
"Methodical, warm, scholarly." Identical to 1440 — the personality is viewport-independent, which is a strength. Intent match: yes.

---

## CRITICAL FINDINGS SUMMARY

### FINDING 1 — CRITICAL: Scroll-reveal rendering makes 70%+ of page blank when scroll-triggered rendering fails
**Severity:** CRITICAL
**Description:** The page appears to use JavaScript-driven scroll reveals. When scrolling programmatically (or when JavaScript does not fire intersection observers), sections after the first ~3000px render as blank cream space. Seven of fifteen viewport screens at 1440px showed completely empty cream — no text, no code blocks, no callouts. The DOM reports all content is present and visible, but the visual render shows nothing. This means if a user's JavaScript fails, disables animations, or uses reader mode, they see a mostly-blank page.
**Location:** All sections below "Building" (approximately position 3000 to 10474)
**Impact:** Users with slow connections, disabled JavaScript, or print stylesheets see incomplete content.

### FINDING 2 — HIGH: Content channel is too narrow at wide viewports
**Severity:** HIGH
**Description:** At 1440px, the content column occupies roughly half the viewport width, leaving the right third as empty cream space. This is not confident breathing room — it reads as a design that was built for a narrower screen and scaled up without adapting. The page looks most intentional at 1024, acceptable at 768, and under-filled at 1440.
**Location:** Entire page at 1440px
**Impact:** The page feels incomplete at the viewport width most commonly used for desktop browsing.

### FINDING 3 — MEDIUM: Section transition gaps are oversized
**Severity:** MEDIUM
**Description:** Between sections (particularly after the Reasoning box in Building), there are large cream gaps before the next pullquote band. These gaps span significant portions of the viewport and feel like the page lost its content rather than intentionally providing breathing room.
**Location:** Between Building/Peak sections, between Peak/Resolution sections
**Impact:** Reader momentum stalls during scrolling through empty space.

### FINDING 4 — LOW: Section transition seam visible at narrow viewports
**Severity:** LOW
**Description:** The boundary between cream content zones and the darker pullquote bands shows as a visible structural seam — a thin line that feels mechanical. At 768px this is more noticeable than at wider viewports.
**Location:** Every pullquote band transition
**Impact:** Minor polish issue that breaks the otherwise smooth reading flow.

### FINDING 5 — NOTE: Reasoning box text density peak
**Severity:** NOTE
**Description:** The Reasoning box in the Building section creates the densest text cluster on the page — three substantial paragraphs with bold terms and no visual breaks between them. While still readable, this is the spot where a reader is most likely to lose focus.
**Location:** Building section, "Which approach serves the middleware pipeline?" Reasoning box
**Impact:** Minor attention-sustaining challenge in an otherwise well-paced page.

---

## OVERALL ASSESSMENT

**Ship verdict across viewports:**
- 1440px: YES WITH RESERVATIONS (content channel width, dead space)
- 768px: YES WITH RESERVATIONS (section seams, slightly tight code blocks)
- 1024px: YES (this is the best viewport for this page)

**What to protect:**
- Density meter progression (1/5 through 5/5) — genuinely innovative
- Section labeling system ("Opening -- Context") — elegant wayfinding
- Pullquote section dividers with italic serif and blue accent — distinctive and memorable
- CRESCENDO density pattern — the page genuinely builds in complexity
- Warm cream palette with dark accents — cohesive and easy on the eyes
- Consistent component vocabulary — one clear design language throughout

**What to fix:**
1. CRITICAL: Investigate and fix scroll-reveal rendering to ensure content is visible without JavaScript-triggered reveals
2. HIGH: Widen content channel at 1440px to use approximately two-thirds of viewport instead of half
3. MEDIUM: Reduce section transition gaps to maintain reading momentum
4. LOW: Soften transition seam between cream and pullquote bands
