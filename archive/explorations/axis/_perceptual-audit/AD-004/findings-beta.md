# Perceptual Audit Findings — Visual Auditor Beta — AD-004 Spiral

**Auditor:** Beta (Flow + Grid + Consistency + Emotion)
**Page:** AD-004 Spiral Layout
**URL:** http://localhost:8080/explorations/axis/AD-004-spiral.html
**Viewports tested:** 1440x900, 768x1024
**Method:** Playwright exclusive — viewport screenshots, full-page screenshots, accessibility snapshots

---

## Cold Looks

### 1440px
- **Gut reaction:** Serious and layered, like opening a geology textbook. The dark header grounds you, the content area feels academic and deliberate, with a sidebar that looks like a specimen card.
- **Worst thing:** The "Confidence: HIGH" badge next to "Established" looks like a placeholder label floating awkwardly — thin border feels tentative and cheap next to the authoritative heading.
- **Best thing:** The Essence callout in the sidebar — the italic text "Four pixels of certainty" is genuinely evocative and gives the whole metadata panel a human heartbeat.
- **Ship verdict:** YES WITH RESERVATIONS

### 768px
- **Gut reaction:** Cramped and heavy at the top. The sidebar metadata card fights with body text for space. Like reading a textbook while someone holds a reference card in front of your face.
- **Worst thing:** The two-column layout that felt natural at 1440px feels forced here — sidebar and body text are competing for a narrow screen, neither breathing.
- **Best thing:** The dark header scales well — title, subtitle, and navigation tabs remain commanding and clear.
- **Ship verdict:** YES WITH RESERVATIONS

---

## Scroll-Through Observations

### 1440px Scroll-Through (7,418px total height)

**Position 0 (Header + Established top):** Dark header with title, subtitle, and four navigation tabs (Bedrock, Subsoil, Topsoil, Atmos) immediately communicates the geological metaphor. Below, the Established section opens with a two-column layout — prose left, metadata card right. The left border is thick and dark, signaling authority. Two dark code blocks follow.

**Position 720 (Established/Probable transition):** The "DESCENDING: BEDROCK > SUBSOIL" transition divider is a thin horizontal line with small-caps label — subtle but functional. The Probable section opens with a noticeably thinner left border and an italic pull quote with a thick left accent. Below the pull quote, a massive expanse of empty cream begins — the spacing feels too generous.

**Position 1440 (Probable body):** Table with four data rows looks clean and airy. "CAUTION" callout with amber left border reads well. But below this, the lower half of the viewport is mostly empty cream.

**Position 2160-5760 (CRITICAL FINDING):** From the end of the Probable section's code block all the way through to the Speculative and Open sections, the enormous breathing zones between strata create MULTIPLE FULL VIEWPORTS of completely blank cream. At 1440px width, a reader scrolling at viewport pace would see approximately FOUR consecutive screens of nothing. This is catastrophic for engagement — any reasonable reader would assume the page has ended and stop scrolling. The Speculative and Open sections (which contain the most conceptually interesting content — the comparative analysis panels, the unresolved questions, the forward thread) are effectively hidden behind a wall of empty space.

**Full-page overview:** The four strata are clearly visible in the full-page thumbnail: Established (dense, two-column), Probable (table + code), Speculative (comparison panels), Open (question list). But roughly 30% of the total page height below the Research Application Record is also blank — wasted vertical space at the bottom.

### 768px Scroll-Through (7,424px total height)

**Position 0 (Header + Established):** Header scales well. The two-column layout is still active — body text on left, metadata card on right — but both columns feel squeezed. The sidebar card eats almost half the width. Code blocks span full width and dominate the lower viewport.

**Position 820 (Established/Probable transition):** Transition divider is clear. The Probable pull quote wraps naturally. The left border weight decrease (from thick to slightly thinner) is perceptible but requires attention. The spacing between sections is generous but NOT as catastrophically empty as at 1440px — the narrower viewport compresses the strata gaps somewhat.

**Position 1640 (Probable body):** Table works well at 768px — all four columns readable without horizontal overflow. "CAUTION" callout with amber border is clear. The code block below is visible.

**Position 2460 (Speculative section):** Speculative heading visible with "CONFIDENCE: LOW" badge. Body text about "generous whitespace as confidence signal" appears. "Comparative Analysis" subheading begins. The spacing above is noticeable but tolerable — perhaps one-half to two-thirds of a viewport, not the multi-viewport desert seen at 1440px.

**Full-page overview (768px):** The strata are proportionally closer together at this width. The comparison panels in the Speculative section appear side-by-side (two boxes with dark code blocks). The Open section's question marks are visible. The bottom blank zone is proportionally similar but less dramatic.

---

## Five Dimension Passes

### Pass 1 — READABILITY: Could you read this for 10 minutes?

**1440px:** The Established section reads comfortably — generous line length, clear hierarchy, readable text against the warm cream background. The Probable section similarly reads well. BUT you would never GET to the Speculative or Open sections in a natural reading session, because the multi-viewport blank gaps would cause you to stop scrolling. The sidebar metadata card text is comfortable. Code blocks have good contrast (light text on dark background). The inline code snippets are readable with their slightly different background shade.

**768px:** The Established section's two-column layout makes text lines uncomfortably short — the body text column is squeezed to roughly half the screen width while the metadata card claims the other half. This makes reading feel stop-and-start. The single-column sections (Probable, Speculative, Open) read much better — full-width text with comfortable line lengths. The comparison panels in the Speculative section would be very small side-by-side at this width.

### Pass 2 — SPATIAL BALANCE (Squint Test)

**1440px:** When squinting, the page looks extremely top-heavy. The first third contains virtually ALL the visual weight — dark header, dark code blocks, sidebar card. Then the middle third has scattered elements (table, code block) floating in vast whitespace. The bottom third is almost invisible — wispy text fragments lost in cream. The page feels like it's falling apart from the center down, dissolving into nothing. The content gravity is ALL at the top.

**768px:** More balanced than 1440px. The narrower viewport means content fills more of the horizontal space, and the vertical gaps between strata, while still generous, feel less empty. The comparison panels in the Speculative section add visual weight to the lower half. Still somewhat top-heavy but not as dramatically as the wide viewport.

### Pass 3 — HIERARCHY AND FLOW

**1440px:** Eye flow is STRONG within the Established section — header leads to heading, heading leads to body text, sidebar draws the eye for metadata, then code blocks anchor the section. The transition divider sends you downward. But after the Probable section, FLOW BREAKS COMPLETELY. The blank zones act as visual dams that stop all forward momentum. The page does not spiral inward — it opens wide and then collapses into emptiness. The spiral concept is intellectually described but not perceptually experienced.

**768px:** Better flow continuity because the gaps are smaller. The progression from Established through Probable to Speculative can actually be followed by scrolling without losing the thread. The Open section's bullet-point questions feel like a natural conclusion. But the content still reads linearly (top-to-bottom), not spirally — there is no sense of inward tightening.

### Pass 4 — CONSISTENCY

**Confidence badges:** All four section headings have similar-style confidence badges (bordered labels), but the "CONFIDENCE: HIGH" badge on Established has a noticeably reddish/warm border while the others have a neutral gray border. These should match in style, differing only in text. They look like they were designed by different people.

**Left borders:** The border-weight gradient (thick to thin) across strata IS consistent and IS perceptible — this is the page's strongest design success. The Established section's heavy left border, the Probable section's medium border, and the Open section's hairline border all communicate their confidence levels effectively.

**Transition dividers:** All three dividers (Bedrock>Subsoil, Subsoil>Topsoil, Topsoil>Atmosphere) use the same format: thin line with small-caps directional text. The third says "ASCENDING" while the first two say "DESCENDING" — this is a nice touch that matches the geological metaphor (you ascend FROM bedrock to atmosphere).

**Code blocks:** All code blocks share the same dark background and syntax coloring — consistent. Two in the Established section, one in Probable, and smaller ones in the Speculative comparison panels.

**Callouts:** The CAUTION callout (amber border) in the Probable section and the Axis Finding callout (teal accent) in the Speculative section use different color-coding. This appears intentional (warning vs. finding) and is not inconsistent. The Essence callout in the Established sidebar is a third style — italic on cream.

**Subheadings:** All subheadings ("Core API Surface," "Recommended Patterns," "Implementation Guidelines," "Comparative Analysis," "Unresolved Questions") use the same italic serif style. Consistent.

### Pass 5 — SHIP TEST: Proud next to Stripe?

**1440px:** NO — not in its current state. The multi-viewport blank zones between strata would be immediately flagged by any professional reviewer. The concept is sophisticated, the individual sections are well-crafted, but the overall reading experience is broken by the excessive whitespace. If someone sent you this link, you would think the page was broken or only partially loaded. With the spacing dramatically reduced (cut by 60-70%), this could be a YES.

**768px:** CLOSE BUT NOT QUITE. The proportional compression at this width makes it more readable, but the two-column layout in the Established section is too cramped, and the overall page still lacks the inward-tightening rhythm promised by the spiral concept. The content reads like four stacked sections with decreasing density, not a spiral pulling inward.

---

## PA Question Answers

### PA-12: Do your eyes flow smoothly from section to section, or do they get stuck anywhere?

**1440px:** Eyes flow well WITHIN each section but get COMPLETELY STUCK between sections. The transition dividers ("Descending: Bedrock > Subsoil") do their job of signaling direction, but the enormous blank zones after them act like quicksand — your eyes stop moving downward because there is nothing to land on. The worst stuck-point is between Probable and Speculative, where multiple viewports of empty cream create a perceptual dead zone. Within the Established section, the two-column layout with sidebar creates a natural left-right-down reading pattern. Within Probable, the table and code block create good anchoring points.

**768px:** Smoother overall. The narrower viewport compresses the between-section gaps so eyes can bridge them. Flow within sections is good. The transition dividers work well as visual stepping stones. The main stuck-point is the two-column layout in the Established section at this width — eyes bounce awkwardly between the narrow body text and the sidebar card.

### PA-13: Is there a clear visual ending, or does the page just stop?

**1440px:** The page just STOPS — and it actually stops TWICE. The first apparent ending is after the Probable section's code block, where the multi-viewport blank zone feels like the page has ended. If a reader perseveres through that, the Research Application Record at the very bottom provides a dense metadata block that feels like an appendix rather than a conclusion. Below that, more blank cream. There is no visual "this is done" signal — no footer, no closing element, no return-to-top gesture.

**768px:** The Open section's "Forward Thread" callout acts as a semi-conclusion (it references next steps), and the Research Application Record below it provides closure in the form of an exhaustive data summary. But there is no visual flourish marking "END" — the page fades into empty cream. The stacking at this width makes it less likely a reader would miss the Open section, so the ending feels slightly more intentional.

### PA-14: Does every column have enough room for its content to breathe?

**1440px:** YES for the main content column — text has generous line lengths and ample whitespace. YES for the sidebar in the Established section — the metadata card and Essence callout have room. The table in the Probable section has generous column spacing. Code blocks are slightly narrow for their content — some comment lines are truncated with the text running to the edge of the dark block.

**768px:** NO for the Established section. The two-column layout persists at this width and it should not — the body text column is too narrow (roughly 50% of 768px minus left border and spacing), making lines feel cramped and short. The sidebar metadata card is also compressed, though its content (key-value pairs) tolerates it better. Single-column sections (Probable, Speculative, Open) have appropriate breathing room. Code blocks may require horizontal scrolling for longer lines.

### PA-15: If you trace the left edge of every content block top to bottom, how many different starting positions do you count?

**1440px:** I count FOUR distinct left-edge positions:
1. The leftmost position: the strata left borders themselves (thick on Established, medium on Probable, thin on Open) sit against the page margin.
2. Indented from the border: the body text content starts indented from the left border — this is the primary reading edge.
3. Further indented: code blocks are indented slightly more than body text.
4. Rightmost: the sidebar content in the Established section starts at roughly the 60% mark.

The transition dividers appear to use the same left edge as the body text. The navigation tabs in the header use yet another alignment. So roughly 4-5 starting positions total.

**768px:** Similar count but compressed. The sidebar column start position is much closer to the body text column. The net effect is that everything feels more tightly grouped on the left side, with less horizontal variation. Roughly 4 starting positions.

### PA-16: Pick two elements that should look identical. Do they actually look the same?

**Elements chosen: The four confidence badges (HIGH, MODERATE, LOW, UNRESOLVED)**

These badges SHOULD look identical in structure, differing only in text content. They DO NOT look identical:
- "CONFIDENCE: HIGH" has a warm/reddish border tint and slightly different visual weight compared to the others
- "CONFIDENCE: MODERATE" has a neutral gray border
- "CONFIDENCE: LOW" has a neutral gray border
- "CONFIDENCE: UNRESOLVED" has a neutral gray border

The HIGH badge stands out — it looks like a warning label rather than a neutral descriptor, while the others feel like quiet metadata tags. If the intent is that badge style reflects stratum confidence, this should be documented as intentional. If unintentional, the HIGH badge border color should match the others.

**Second pair: The three transition dividers**
These DO look consistent — same thin horizontal line, same small-caps text, same subtle background. The text varies correctly ("Descending" vs. "Ascending"). These are well-matched.

### PA-17: Is there a visual rhythm to the page (like a beat in music), or does it feel random?

**1440px:** There IS a rhythm in the first half — Heading... body text... code block... DIVIDER... Heading... body text... table... callout... code block... DIVIDER. The sections have an intro-explain-demonstrate cadence that feels deliberate. But the rhythm BREAKS COMPLETELY after the Probable section. The enormous blank gaps destroy the beat. It is like a song that has a strong intro and first verse, then three minutes of silence, then a quiet bridge and outro that most listeners will never hear.

The INTENDED rhythm — a golden-ratio expansion of spacing between strata (each section gets proportionally more whitespace) — is conceptually elegant but perceptually disastrous. The ear can tolerate a ritardando; the eye cannot tolerate a visual void.

**768px:** Better rhythm because the gaps are compressed. The beat is still present: content-block... divider... content-block... divider. The proportional expansion of spacing between strata is noticeable but not overwhelming. At this width, the rhythm approaches "intentional slowing" rather than "broken silence."

### PA-18: Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler?

**1440px:** The neutrals are consistently WARM. The background cream, the text dark gray, the borders, the transition dividers, the metadata card background — everything lives in the warm/tan family. No cool grays intrude. The code block backgrounds are a true dark charcoal (slightly cooler than the warm palette) but this contrast feels intentional — the code blocks are "deep underground" visually.

The inline code snippets have a slightly warmer background than the body text background — a subtle tinted chip that distinguishes them without clashing. This works well.

**768px:** Same warm palette. No discrepancies between viewports.

### PA-19: Is there any element that feels like it's from a different website?

**1440px:** The comparison panels in the Speculative section — two side-by-side boxes labeled "Established Approach" and "Speculative Approach" — feel slightly different from the rest of the page. Every other element uses left-border-weight as its primary visual signal, but these panels use a boxed/card layout with their own internal code blocks. They feel more like a technical documentation component (think MDN comparison tables) dropped into a geological metaphor page. They are not jarring, but they are the one area where the geological stratum metaphor pauses to become a conventional UI comparison widget.

**768px:** Same observation. The comparison panels at this width may struggle to fit side-by-side.

### PA-20: If you described this page's personality in three words, what would they be? Does that match the intended personality?

**1440px:** **"Scholarly, Aspirational, Incomplete."**
- Scholarly: The writing, the metadata, the citation references, the careful hedging language — this reads like an academic paper in web form.
- Aspirational: The golden-ratio spacing, the geological metaphor, the border-weight encoding — these are ambitious design ideas that aim for a level of semantic sophistication beyond typical documentation.
- Incomplete: The massive blank zones, the fade-out ending, the content that vanishes into whitespace — the page feels like it ran out of energy or the designer left before finishing.

The INTENDED personality (based on the spiral concept) should be something like: **"Confident, Layered, Gravitational"** — pulling you inward from established certainty through decreasing confidence to open questions. The page achieves "Layered" but not "Gravitational" — there is no inward pull, only a downward fade.

**768px:** **"Scholarly, Compact, Steady."** The narrower viewport makes the page feel more complete because the proportional spacing is less extreme. The personality is closer to the intent at this width.

---

## AD-Specific: Spiral Reading Path Assessment

**Does the spiral feel like it is pulling you inward?**
NO. The page reads as four stacked horizontal layers, not a spiral. There is no visual or spatial cue that suggests inward tightening. The content moves downward (like geological strata) but never turns — it does not curve, compress, or spiral. The page is a straight line from top to bottom, dressed in spiral LANGUAGE but not spiral FORM.

**Does the rhythm tighten?**
THE OPPOSITE. The rhythm loosens dramatically — sections get MORE spaced apart as you descend, which is the opposite of spiral tightening. The Established section is dense; the Probable section has more breathing room; the Speculative and Open sections are islands in a sea of whitespace. If anything, the page spirals OUTWARD, not inward.

**Does the ending feel like arriving at the center?**
NO. The ending (Open section + Research Application Record) feels like arriving at the EDGE — the periphery, the atmosphere, the outermost ring. The questions in the Open section are deliberately unresolved, and the Research Record is a metadata dump. There is no sense of arrival, culmination, or core-reaching. If the spiral is meant to pull inward, the ending should be the DENSEST, most certain content — but it is the SPARSEST and most uncertain.

**Structural assessment:** The geological metaphor (dense bedrock to thin atmosphere) fundamentally CONFLICTS with the spiral metaphor (outward to inward, arriving at a dense center). The page faithfully executes the geological metaphor but does not execute the spiral metaphor at all. This is documented in Finding AD-F-016, which argues that "spiral + geological = same phenomenon" — but perceptually, the experience is purely geological (top-down stacking), not spiral (inward-tightening).

---

## Summary of Critical Findings

| # | Severity | Finding | Viewport |
|---|----------|---------|----------|
| 1 | CRITICAL | Multi-viewport blank zones between strata (~4 full screens at 1440px) break reading flow and hide content | 1440px primarily |
| 2 | HIGH | Spiral reading path is not perceptually achieved — page reads as linear vertical stacking | Both |
| 3 | HIGH | No clear visual ending — page fades into empty cream below Research Record | Both |
| 4 | HIGH | Established section two-column layout is too cramped at 768px — sidebar competes with body text | 768px |
| 5 | MEDIUM | Confidence badges are visually inconsistent — HIGH badge has different border tint than MODERATE/LOW/UNRESOLVED | Both |
| 6 | MEDIUM | Page is extremely top-heavy (squint test) — visual weight concentrated in first third | 1440px primarily |
| 7 | MEDIUM | Comparison panels in Speculative section feel stylistically different from the geological metaphor | Both |
| 8 | LOW | Code block comment lines truncated at edge of dark container | 1440px |
| 9 | LOW | No return-to-top gesture or visual footer closure | Both |
| 10 | NOTE | Rhythm expansion (golden ratio spacing) is conceptually elegant but perceptually harmful at 1440px | 1440px |
| 11 | NOTE | Warm neutral palette is consistently executed — no cool gray intrusions | Both (positive) |
| 12 | NOTE | Left-border weight gradient (thick to thin across strata) is the strongest and most successful design element | Both (positive) |

---

## Positive Highlights (What to Protect)

1. **Left-border weight gradient** — The progressive thinning of the left border across strata (thick > medium > thin > hairline) is instantly legible and semantically powerful. This is the page's crown jewel.
2. **Essence callout** — "Four pixels of certainty" is beautiful writing that gives the metadata panel a soul. Protect this.
3. **Warm palette consistency** — Every neutral, every background, every border lives in the same warm cream/tan family. Professional and cohesive.
4. **Transition dividers** — The "Descending/Ascending" labels with thin horizontal lines are understated and effective. They communicate direction without shouting.
5. **Table design** — The Recommended Patterns table in the Probable section is clean, airy, and readable at both viewports.
6. **Header** — The dark header with title, subtitle, and geological navigation tabs sets the right tone immediately.

---

*Audit completed by Visual Auditor Beta using exclusive Playwright access.*
*Screenshots captured: 1440px viewport top, 1440px scrolls 1-2, 1440px full-page, 768px viewport top, 768px scrolls 1-3, 768px full-page.*
*Accessibility snapshots captured at both viewports.*
