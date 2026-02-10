# Perceptual Audit Questions -- The Complete Battery

**Author:** question-designer agent
**Date:** 2026-02-10
**Purpose:** Questions that FORCE LOOKING. Cannot be answered by rule-checking.

---

## THE CORE PROBLEM THESE QUESTIONS SOLVE

Across 7 agent teams (100+ agents), every auditor defaults to "checking mode":
- They screenshot a page, then grep CSS properties
- They verify `border-radius: 0` while a 130px column makes every word stack vertically
- They confirm `box-shadow: none` while an entire viewport of dead space sits mid-page
- They count "2px border" instances while the page's visual hierarchy is incoherent

The seed questions that break this pattern:
- **Q1:** "What's the first thing that bothers me?" -- cannot be answered by grepping CSS
- **Q2:** "Is any text uncomfortable to read?" -- cannot be answered by checking font-family
- **Q3:** "Would a designer ship this?" -- cannot be answered by verifying border-radius

Every question below follows this same principle: **the answer requires LOOKING, not CHECKING.**

---

## HOW TO USE THIS BATTERY

### For Agents
1. Take a screenshot at the specified viewport size
2. LOOK at the screenshot for 5 full seconds before answering
3. Answer in PLAIN LANGUAGE what you SEE -- not what the CSS says
4. If your answer references a CSS property name, you are doing it wrong
5. If your answer could be written without seeing the page, you are doing it wrong

### For Team Leads
- Assign questions in clusters (one dimension per agent)
- Require screenshot evidence for every answer
- Reject any answer that reads like a CSS audit
- The "BAD VERSION" examples show what to reject

### Quality Gate
A perceptual answer PASSES if:
- It describes a VISUAL experience (what it looks like, feels like)
- It could not be generated from source code alone
- A non-technical person could understand the answer
- It references spatial relationships, readability, or visual weight

A perceptual answer FAILS if:
- It names CSS properties (border-radius, padding, margin)
- It cites pixel values without visual context
- It references source code, class names, or selectors
- It could be generated without rendering the page

---

## DIMENSION 1: FIRST IMPRESSION (0-5 Seconds)

These questions capture what happens before conscious analysis begins. They exploit the fact that first impressions are purely perceptual -- you cannot rule-check your way to a first impression.

---

### Q-FI-01: What draws your eye first, and is it the right thing?

**The Question:**
Look at the page for 3 seconds, then look away. What do you remember seeing first? Now ask: is that the thing the page WANTS you to see first?

**Why rule-checking cannot answer this:**
Eye-tracking is a perceptual phenomenon. The "first thing you see" is determined by visual weight (size, contrast, color saturation, isolation), not by any CSS property. An element with `z-index: 999` might be invisible if it has low contrast. A tiny badge might dominate if it is the only saturated color on a neutral page.

**What it catches:**
- A version badge (V2 ENRICHED) drawing more attention than the page title because it is the only red element on a cream page
- A decorative element stealing focus from the primary heading
- Navigation chrome competing with content
- Process artifacts (status labels, metadata) outranking the actual subject matter

**BAD VERSION (rule-checking in disguise):**
"Is the main heading the largest text element on the page?" -- This can be answered by comparing font-size values. An agent will check `font-size: 40px` vs `font-size: 14px` and declare success, missing that a 14px red badge on cream steals focus from a 40px neutral heading.

---

### Q-FI-02: Does anything feel "off" before you can say why?

**The Question:**
Something on this page is making you slightly uncomfortable, even if you cannot name it. What is it? Describe the FEELING, not the property.

**Why rule-checking cannot answer this:**
"Off" is a gestalt perception -- it emerges from the interaction of multiple properties, not from any single one. A page can have correct typography, correct spacing, correct colors, and still feel wrong because the proportions create an uncanny valley. Rule-checking finds individual violations; perceptual discomfort comes from systemic misalignment.

**What it catches:**
- Mixed visual "conviction" -- some elements are bold and confident, others are thin and tentative, creating a page that seems designed by two different people
- Inconsistent visual temperature -- warm typography next to clinical spacing
- Content that does not match its container (formal text in a casual layout, or vice versa)
- Proportional oddities where column widths create unpleasant aspect ratios

**BAD VERSION (rule-checking in disguise):**
"Are there any CSS inconsistencies between sections?" -- This becomes a diff operation on computed styles. An agent will compare padding values across sections and report "Section 3 uses 24px padding while Section 5 uses 32px padding," missing that the actual discomfort comes from the combined visual effect.

---

### Q-FI-03: Does this page feel finished, or does it feel like a work in progress?

**The Question:**
Imagine you are a client who paid for this page. When you see it, do you feel like the designer is done, or do you feel like you are seeing a draft? What specifically gives you that impression?

**Why rule-checking cannot answer this:**
"Finished" is a holistic quality. It emerges from polish, consistency, intentionality, and the absence of loose ends. A page can pass every individual CSS check and still feel unfinished because it lacks the micro-refinements that signal completion (consistent alignment, purposeful whitespace, coherent transitions between sections).

**What it catches:**
- Collapsed disclosure triangles that look like stubs (content behind them might be empty)
- Orphaned elements that seem disconnected from the rest of the layout
- Sections where the density suddenly drops, suggesting the designer ran out of ideas
- Metadata visible that should be hidden in production (version numbers, process labels, debug info)

**BAD VERSION (rule-checking in disguise):**
"Are all required elements present on the page?" -- This becomes a checklist comparison against a wireframe. An agent will confirm "heading: present, body: present, footer: present" and report PASS, missing that the heading looks like a placeholder and the footer feels vestigial.

---

### Q-FI-04: Where does your eye go after the first thing?

**The Question:**
You looked at the most prominent element first. Now where do your eyes naturally travel? Trace the path. Does that path tell a story, or does it feel random?

**Why rule-checking cannot answer this:**
Visual flow is created by the interaction of scale, position, contrast, and proximity. No CSS property defines "reading order" for visual scanning. Two elements with identical `z-index` and `font-size` will create different flow patterns based on their spatial relationship and the negative space around them.

**What it catches:**
- Visual flow that contradicts content flow (your eyes go right when the content narrative goes down)
- Dead-end elements that trap attention with no visual exit
- Competing focal points that fragment the eye path into multiple incomplete journeys
- The "pinball effect" where eyes bounce between isolated high-contrast elements with no connecting tissue

**BAD VERSION (rule-checking in disguise):**
"Does the DOM order match the visual order?" -- This is a source-code comparison, not a perceptual observation. An agent will compare DOM sequence to visual position and report alignment, missing that the visual flow jumps erratically even when DOM order is correct.

---

### Q-FI-05: If you squint, what shapes do you see?

**The Question:**
Blur your vision (or actually blur the screenshot). The details disappear and only the large shapes remain. What pattern do they form? Is it balanced? Is it intentional?

**Why rule-checking cannot answer this:**
The squint test reveals the macro-level composition that individual property checks cannot see. When details vanish, you see the underlying visual architecture: the weight distribution, the rhythm of content blocks, the balance between filled and empty space. No CSS property describes this macro pattern.

**What it catches:**
- A page that is top-heavy (all content clustered at top, vast emptiness below)
- Columns that appear as compressed slivers when detail is removed
- An asymmetric layout that was not intentionally asymmetric
- Content blocks that form a chaotic scatter rather than a rhythmic sequence
- One section that looks radically different in density from its neighbors

**BAD VERSION (rule-checking in disguise):**
"Is the layout grid consistent?" -- An agent will check grid-template-columns values and report "all columns are correctly sized per spec," missing that one column is so narrow it looks like a vertical hairline when squinted.

---

### Q-FI-06: Could you describe this page to someone who cannot see it, using only feelings?

**The Question:**
Without using technical terms, describe how this page FEELS. Heavy or light? Warm or cold? Confident or hesitant? Busy or calm? Rigid or organic? Your emotional vocabulary reveals perceptual truths that technical vocabulary obscures.

**Why rule-checking cannot answer this:**
Emotional descriptors are emergent properties of the entire visual system. "Heavy" is not a CSS property -- it emerges from dark colors, dense text, thick borders, tight spacing, and large elements acting together. Rule-checking can verify each ingredient but cannot perceive the cake.

**What it catches:**
- A page that is technically correct but emotionally dead (all rules pass but nothing feels alive)
- Tonal inconsistency where different sections feel like different emotional registers
- A page that intends to feel authoritative but actually feels anxious (tight spacing, small text, many borders)
- A page that intends to feel warm but actually feels cold (correct warm colors but clinical layout)

**BAD VERSION (rule-checking in disguise):**
"Does the color palette convey the intended mood?" -- An agent will compare hex values to the design spec and confirm "colors match," missing that warm colors in a rigid grid feel institutional rather than warm.

---

## DIMENSION 2: READABILITY AND COMFORT

These questions focus on the physical experience of reading. They cannot be answered by checking font properties because readability is determined by the interaction of font, line-length, line-height, contrast, column width, surrounding space, and content density.

---

### Q-RC-01: Can you read every text block comfortably for 10 minutes?

**The Question:**
Point to the text block that would be most tiring to read. Why? Not "the font is wrong" but "something about reading THIS specific block of text would make me want to stop."

**Why rule-checking cannot answer this:**
Comfortable reading emerges from the combination of line length (45-75 characters ideal), line height, font size, contrast ratio, surrounding visual noise, and the density of information. A text block can have "correct" font-size (18px), "correct" line-height (1.7), and "correct" contrast (7:1) and still be exhausting if the column is too narrow, making every line only 3-4 words long.

**What it catches:**
- Narrow columns where text reflows into unreadable single-word lines
- Dense paragraphs with insufficient line-height for their font size
- Text blocks surrounded by heavy visual elements (borders, decorations) that create claustrophobia
- Light gray text on slightly-less-light gray background (passes WCAG but feels strained)
- Body text in a column so wide that eye-tracking from line end to next line start loses position

**BAD VERSION (rule-checking in disguise):**
"Is the font-size at least 16px and line-height at least 1.5?" -- An agent will check computed styles and report PASS. A 16px font at 1.5 line-height in a 130px-wide column is technically "correct" but perceptually unreadable because every word stacks on its own line.

---

### Q-RC-02: Are any words stacking vertically, one word per line?

**The Question:**
Look at every column on the page. Is there ANY place where the column is so narrow that words are forced to stack vertically? This includes sidebars, grid cells, card titles, navigation items, and any other constrained container.

**Why rule-checking cannot answer this:**
Word stacking depends on the interaction between column width, font size, and the actual words being displayed. CSS cannot predict whether the word "comprehensive" will fit in a 130px column at 16px font. Only rendering reveals this. You must LOOK at the rendered output.

**What it catches:**
- The 130px bento grid column where every word sits alone on its line (the canonical failure that inspired this entire skill)
- Card titles that break mid-word because the card is too narrow
- Sidebar navigation items that wrap onto 3-4 lines each
- Table cells where long words overflow or hyphenate aggressively
- Any container where the content clearly does not fit the space allocated to it

**BAD VERSION (rule-checking in disguise):**
"Are all grid columns at least 200px wide?" -- An agent will check grid-template-columns and report values. But a 200px column might be fine for short labels and disastrous for paragraph text. The question is about the VISUAL RESULT, not the measurement.

---

### Q-RC-03: Does any text feel squeezed, cramped, or claustrophobic?

**The Question:**
Find the text that has the least breathing room. Is the tight spacing intentional (creating urgency, density) or accidental (the container is too small)? Could you add a sentence to this text block without it feeling like the container would burst?

**Why rule-checking cannot answer this:**
"Cramped" is a perceptual judgment about the relationship between content volume and container size. Two identical containers with different amounts of text will feel different. Rule-checking can verify padding values but cannot perceive whether the padding is adequate for the content it surrounds.

**What it catches:**
- Text blocks where padding is technically "correct" (16px) but the volume of text makes the container feel overstuffed
- Cards where the title, subtitle, description, and metadata are all crammed into a small box
- Code blocks where long lines force horizontal scrolling in a narrow container
- Callout boxes where the text fills the container edge-to-edge with no visual breathing room

**BAD VERSION (rule-checking in disguise):**
"Is there at least 16px padding on all text containers?" -- An agent will measure padding and report PASS. But 16px padding around a single word feels generous; 16px padding around 5 paragraphs feels suffocating. The padding is not the issue -- the content-to-container ratio is.

---

### Q-RC-04: Would you want to read an article formatted like the narrowest column?

**The Question:**
Take the narrowest column or text container on the page. Imagine an entire 2000-word article formatted exactly like that. Would you read it or close the tab?

**Why rule-checking cannot answer this:**
This question forces extrapolation from a sample. An agent cannot answer it by measuring column width because the answer depends on the EXPERIENCE of reading in that space, not the measurement of the space. A 300px column might be fine for bullet points and terrible for prose.

**What it catches:**
- Columns that are technically "wide enough" for their current short content but would be miserable for longer text
- The difference between a column designed for labels vs. a column pressed into service for paragraphs
- Layout decisions that optimize for visual variety at the expense of readability
- Grid cells that look acceptable with 3 words but would fail with 30

**BAD VERSION (rule-checking in disguise):**
"Is the minimum column width above 250px?" -- An agent checks min-width values. But a 260px column "passes" this check while being genuinely unreadable for prose.

---

### Q-RC-05: Is there any text you have to lean in to read?

**The Question:**
Without zooming, is there any text on the page that makes you squint, lean forward, or re-read? Not because the content is complex, but because the PRESENTATION makes it hard to parse?

**Why rule-checking cannot answer this:**
The need to lean in comes from the combination of font size, weight, color, background contrast, and surrounding visual noise. Small text next to large text makes the small text feel even smaller. Light text on a textured background might pass contrast checks but still require effort to parse.

**What it catches:**
- Metadata labels in 9px monospace that are technically visible but practically illegible
- Light gray captions that pass WCAG AA but fail the "would you actually read this" test
- Text over subtle background patterns or gradients that create visual interference
- Footnotes, timestamps, or attribution text that is styled as an afterthought

**BAD VERSION (rule-checking in disguise):**
"Does all text meet WCAG AA contrast requirements?" -- An agent runs a contrast checker and reports pass/fail ratios. But WCAG AA is a MINIMUM threshold for accessibility, not a guarantee of comfortable reading. Text can pass AA and still be uncomfortable.

---

### Q-RC-06: Read the longest paragraph aloud. Does it flow, or do you stumble?

**The Question:**
Find the longest continuous text block. Read it as if presenting to an audience. Does the line length cause your eyes to lose their place? Do line breaks fall at awkward points? Does the text rhythm feel natural or forced?

**Why rule-checking cannot answer this:**
Reading aloud forces engagement with the actual text-in-context, not the properties of the text container. Line breaks depend on the specific words at the end of each line, which CSS cannot predict. A technically correct line-height might create visual "rivers" of whitespace in specific paragraphs that only appear with the actual content.

**What it catches:**
- Lines that break mid-phrase in ways that disrupt comprehension
- Paragraphs where justified text creates noticeable rivers of whitespace
- Text blocks where the line length exceeds comfortable tracking (80+ characters)
- Line-height that creates a visual "wall of text" effect despite being within spec

**BAD VERSION (rule-checking in disguise):**
"Is the line length between 45-75 characters?" -- An agent counts characters per line. But character count alone does not determine readability -- the actual words, their rhythm, and where the lines break all contribute.

---

## DIMENSION 3: SPATIAL BALANCE AND WEIGHT

These questions address the visual physics of the page -- how elements distribute visual weight across the canvas.

---

### Q-SB-01: Is there dead space that serves no purpose?

**The Question:**
Find any area larger than a phone screen (roughly 375x667) that contains nothing meaningful. Is that emptiness creating breathing room (intentional pause) or does it feel like the designer forgot to put something there?

**Why rule-checking cannot answer this:**
"Purpose" is a design judgment. Empty space has no CSS property. You cannot grep for "dead space" -- you can only SEE it by looking at the rendered page and judging whether the emptiness is compositional (creating rhythm, separating concepts) or structural (a gap where content should be).

**What it catches:**
- A full-viewport dead zone in the middle of a scrolling page (the OD-004 finding: an entire screen of cream background with nothing on it)
- Columns in a grid that are effectively empty but take up significant horizontal space
- The gap between a sidebar and main content that is large enough to feel disconnected rather than related
- Footer areas with excessive padding that push the visual ending far below the content ending

**BAD VERSION (rule-checking in disguise):**
"Is margin-bottom on any section greater than 120px?" -- An agent checks margin values. But 120px of margin between dense sections is breathing room; 120px of margin between sparse sections is a void.

---

### Q-SB-02: Does any section feel heavier than its neighbors?

**The Question:**
Imagine the page is a physical object on a scale. Is it balanced, or does one side/section pull the page down? Where is the "heavy" part? What makes it heavy -- color, density, borders, or size?

**Why rule-checking cannot answer this:**
Visual weight is an emergent property of color saturation, element density, border thickness, background darkness, and the amount of "stuff" per unit area. A section with a dark background and thick borders will "weigh" more than a section with a light background and thin text, regardless of their actual pixel heights.

**What it catches:**
- A hero section with massive visual weight followed by anemic body content, creating a top-heavy page
- One card in a grid that is visually heavier than its siblings (darker background, more borders, denser text)
- A sidebar that dominates the main content area through higher visual density
- Footer that is heavier than the header, making the page feel like it is sinking

**BAD VERSION (rule-checking in disguise):**
"Are the section heights approximately equal?" -- An agent measures element heights. But visual weight is not physical height. A 200px section with dense dark content weighs more than a 400px section of light, airy content.

---

### Q-SB-03: Are the margins generous or anxious?

**The Question:**
Look at the space between elements. Does the spacing feel confident (elements are comfortable with distance between them) or anxious (elements are clutching at each other, afraid of being separated, or conversely, pushing away as far as possible)?

**Why rule-checking cannot answer this:**
"Anxious" spacing is a perceptual judgment about whether whitespace feels intentional or accidental. The same 32px gap can feel generous between small elements and cramped between large ones. The question is about proportional relationships, not absolute measurements.

**What it catches:**
- Inconsistent spacing rhythm where some gaps are tight and others are cavernous, creating visual anxiety
- Elements that seem "afraid" to commit to a position (floating in ambiguous space, not clearly belonging to what is above or below)
- Spacing that follows a mathematical grid but feels mechanically rigid rather than naturally rhythmic
- Sections that seem to be pushing each other apart rather than flowing together

**BAD VERSION (rule-checking in disguise):**
"Do all margins follow the 8px grid?" -- An agent measures margins and reports alignment to the spacing scale. But a perfectly gridded layout can feel anxious if the grid is wrong for the content.

---

### Q-SB-04: If you covered half the page, would the other half feel complete?

**The Question:**
Mentally place your hand over the left half of the page. Does the right half look like a coherent layout? Now cover the top half. Does the bottom half feel like a standalone design? If either half feels incomplete, the page depends on a fragile balance that might break at different viewport sizes.

**Why rule-checking cannot answer this:**
This is a compositional test that reveals hidden dependencies between page sections. No CSS property describes "self-sufficiency of a page half." It requires visual evaluation of whether elements can stand alone or only make sense in context of their neighbors.

**What it catches:**
- A two-column layout where the left column is purely decorative and the right column contains all meaning (the page is functionally a single column pretending to be two)
- A page where the top section establishes context that the bottom section requires -- if the user scrolls past the top, the bottom is incomprehensible
- Visual elements that only "work" because of their relationship to elements on the other side of the page

**BAD VERSION (rule-checking in disguise):**
"Is the layout symmetrical?" -- An agent checks if column widths are equal. But symmetry is not the same as completeness. Two equal columns can both feel incomplete on their own.

---

### Q-SB-05: Is any element floating in no-man's land?

**The Question:**
Find any element that does not clearly belong to a group. It is not close enough to what is above to be associated with it, and not close enough to what is below either. It just sits in ambiguous space.

**Why rule-checking cannot answer this:**
Belonging is a Gestalt perception (law of proximity). An element with 32px margin-top and 32px margin-bottom is equidistant from both neighbors, creating genuine ambiguity about which group it belongs to. Only LOOKING reveals whether the visual association is clear.

**What it catches:**
- Captions that sit equidistant between the image above and the paragraph below
- Dividers that float between sections without clearly belonging to either
- Standalone labels or badges that seem parentless
- A sidebar element (like a scroll witness) that sits in vast space between the viewport edge and the content

**BAD VERSION (rule-checking in disguise):**
"Is the spacing between all elements consistent?" -- An agent measures gaps. But consistent spacing can actually CREATE floating elements when every gap is the same size, because nothing is closer to anything else.

---

## DIMENSION 4: VISUAL HIERARCHY AND FLOW

These questions test whether the page communicates importance clearly and guides the eye through content in a meaningful sequence.

---

### Q-VH-01: Can you tell what is most important on this page in 2 seconds?

**The Question:**
Glance at the page for exactly 2 seconds. What is the most important thing on it? Now ask: is that actually the most important thing? If the page is about "Conversational Structure," is THAT what registered in 2 seconds, or did you notice a badge, a decoration, or a navigation element instead?

**Why rule-checking cannot answer this:**
Importance perception is determined by visual salience (contrast, size, position, color), not by semantic HTML or ARIA roles. An `<h1>` that is large but low-contrast will register less than a small but high-contrast badge. Rule-checking confirms the heading exists; perceptual testing confirms whether anyone notices it.

**What it catches:**
- Headlines that are technically the largest text but are washed out by low contrast
- Decorative elements (illustrations, dividers, badges) that overpower content elements
- Call-to-action buttons that blend into the background despite being semantically important
- Navigation elements that dominate the first screen at the expense of content

**BAD VERSION (rule-checking in disguise):**
"Is the h1 element the largest text on the page?" -- An agent compares font-size values. But size is only one factor in visual importance. A 40px heading in #e0d5c5 on #fefcf3 is less visually prominent than a 14px label in #c97065 on the same background.

---

### Q-VH-02: Do your eyes flow naturally or get stuck?

**The Question:**
Start at the top of the page and let your eyes move downward naturally. At any point, do your eyes "stick" -- hitting a visual obstacle that stops the flow? Where does the flow break? Does your eye want to go somewhere the page does not lead it?

**Why rule-checking cannot answer this:**
Visual flow is determined by the sequence of focal points and the connective tissue between them (whitespace, alignment, directional cues). There is no CSS property for "flow." An agent cannot determine flow by reading source code because flow only exists in the rendered visual composition.

**What it catches:**
- A full-width horizontal rule or divider that acts as a visual wall, stopping downward scanning
- A section with inverted contrast (dark background in a light page) that traps attention
- Orphaned elements that pull the eye sideways when the flow should go down
- The "hole" in flow where the eye jumps from one focal point to the next with nothing connecting them

**BAD VERSION (rule-checking in disguise):**
"Is the content organized in a logical top-to-bottom sequence?" -- An agent reads the DOM order. But visual flow and DOM order are different. A sidebar, a floating element, or a visual anomaly can redirect the eye regardless of source order.

---

### Q-VH-03: Is anything competing for attention that should not be?

**The Question:**
Count the number of elements on the first screen that demand your attention simultaneously. Is it 1-2 (clear hierarchy) or 5+ (visual cacophony)? What should be quieted?

**Why rule-checking cannot answer this:**
"Demanding attention" is a perceptual threshold, not a CSS property. An element demands attention when it has high contrast, saturated color, or is isolated by whitespace -- but only RELATIVE to its neighbors. The same element might be quiet on a busy page and loud on a sparse one.

**What it catches:**
- Multiple competing badges, labels, or icons in the header area
- Code blocks with syntax highlighting that creates colorful visual noise competing with the content narrative
- Multiple accent-colored borders in close proximity, creating visual fragmentation
- Status indicators, version labels, and metadata that collectively create more visual noise than the content

**BAD VERSION (rule-checking in disguise):**
"Are there more than 3 different colors used in the header?" -- An agent counts unique color values. But color count alone does not determine competition. Three thoughtfully used colors can create calm; one poorly placed color can create chaos.

---

### Q-VH-04: Is there a clear visual "end" to the page?

**The Question:**
Scroll to the bottom. Does the page feel like it reaches a natural conclusion, or does it just... stop? Is the last thing you see a meaningful ending or an afterthought?

**Why rule-checking cannot answer this:**
The feeling of "ending" is compositional. It comes from decreasing visual density, a final strong element (conclusion, summary), or a deliberate visual tapering. A page that ends mid-content with a horizontal rule feels abandoned. There is no CSS property for "narrative closure."

**What it catches:**
- Pages that end with metadata, timestamps, or process artifacts instead of content
- Abrupt endings where the last section has the same visual weight as middle sections, giving no signal that the journey is over
- Pages where the final 500px is just padding or margin, creating an ambiguous trailing emptiness
- Missing visual conclusion -- the page covered 6 topics but does not synthesize or close

**BAD VERSION (rule-checking in disguise):**
"Does the page have a footer element?" -- An agent checks for a `<footer>` tag. But a footer can exist and still feel like an afterthought if it is visually incongruent with the rest of the page.

---

### Q-VH-05: Are section transitions smooth or jarring?

**The Question:**
Scroll through the page at a steady pace. Do the transitions between sections feel like turning pages in a book (smooth, expected) or like channel-surfing (abrupt, disorienting)? Where do the jars happen?

**Why rule-checking cannot answer this:**
Transition quality depends on the visual similarity between adjacent sections, the amount of whitespace separating them, and whether there are connecting elements (headings, dividers, shared colors). Two sections can have identical CSS structure but feel jarring if their content densities are radically different.

**What it catches:**
- A dense, dark-backgrounded section followed immediately by a sparse, light section with no transition
- The "whiplash" effect when alternating between full-bleed and contained sections
- Missing section headings that would provide context for what is coming next
- Sections that change visual language (typography, spacing, border treatment) without signaling the change

**BAD VERSION (rule-checking in disguise):**
"Is consistent spacing used between all sections?" -- An agent measures gaps. But consistent spacing does not create smooth transitions. Two visually different sections with consistent spacing still feel jarring; the issue is the visual contrast, not the gap size.

---

## DIMENSION 5: GRID AND LAYOUT INTEGRITY

These questions test whether the spatial structure of the page serves its content or fights against it.

---

### Q-GL-01: Do all columns have enough room for their content?

**The Question:**
Look at every column in every grid on the page. Is any column too narrow for the content it contains? Not "is the column width correct per spec" but "can the content BREATHE in this space?"

**Why rule-checking cannot answer this:**
"Enough room" depends on the content, not the container. A 200px column is spacious for single-word labels and suffocating for sentences. Only rendering the actual content in the actual column reveals whether the fit works. An agent checking grid-template-columns values cannot know what text will flow into those columns.

**What it catches:**
- The bento grid cell where every word sits on its own line (the canonical failure)
- Table columns where long numbers or words overflow or truncate
- Sidebar menus where multi-word navigation items wrap awkwardly
- Card grids where one card's title is short and fits perfectly while another's wraps to 3 lines

**BAD VERSION (rule-checking in disguise):**
"Are all grid columns set to at least minmax(150px, 1fr)?" -- An agent checks the CSS grid definition. But 150px might be too narrow for paragraph content and perfectly fine for icons. The spec is not the question; the visual result is.

---

### Q-GL-02: Does the grid feel intentional or accidental?

**The Question:**
Look at the overall grid structure. Can you explain why each column is the width it is? Does the arrangement feel deliberately designed, or does it feel like the browser auto-distributed space and nobody checked the result?

**Why rule-checking cannot answer this:**
Intentionality is perceived through consistency, proportion, and purpose. An auto-generated grid (1fr 1fr 1fr 1fr) is perfectly valid CSS but might produce columns that have no relationship to their content. Intentional grids vary column widths based on content purpose.

**What it catches:**
- Equal-width columns where one column has a single icon and another has a paragraph -- the icon column wastes space, the text column is starved
- Grid layouts that work at one viewport but become absurd at another
- Columns that exist for layout reasons but serve no content purpose (ghost columns)
- The mechanical feel of a grid that treats all content as interchangeable rather than adapting to content needs

**BAD VERSION (rule-checking in disguise):**
"Does the grid match the design specification?" -- An agent compares computed grid to a spec. But the spec might be wrong, and the question is whether the VISUAL RESULT looks intentional, not whether it matches a document.

---

### Q-GL-03: If you trace the left edge of every content block from top to bottom, how many different x-positions do you hit?

**The Question:**
Draw an imaginary vertical line down the left edge of the first text in each section. Do they all align? Or do content blocks start at 5+ different x-positions, creating a visual zigzag? Multiple start positions can be intentional (indentation hierarchy) or accidental (inconsistent margins).

**Why rule-checking cannot answer this:**
Alignment is a visual property that emerges from the interaction of container widths, padding, and nesting depth. Two elements with identical margin-left values might appear at different x-positions because their parent containers have different padding. Only the rendered output reveals actual alignment.

**What it catches:**
- Headers that start at one x-position and body text that starts at another, with no consistent indentation logic
- Nested content that creates an unintentional staircase of left margins
- Full-bleed sections alternating with contained sections, creating a jittery left edge
- Grid columns where the content inside starts at different positions due to inconsistent padding

**BAD VERSION (rule-checking in disguise):**
"Do all sections use the same padding-left value?" -- An agent checks padding. But consistent padding on containers of different widths creates different content start positions. The question is about visual alignment, not CSS values.

---

### Q-GL-04: At this viewport, does every section have breathing room?

**The Question:**
Look at the current viewport width. Is any element touching or nearly touching the edge of its container? Is any text running right up to a border with no visual padding? Does any element feel like it is one word longer away from breaking?

**Why rule-checking cannot answer this:**
"Nearly touching" and "one word away from breaking" are visual judgments about the margin between current state and failure state. An element with 8px padding technically has space, but if the text fills to within 8px of the edge, it LOOKS like it has no room. Only visual inspection reveals how close the content is to its container boundary.

**What it catches:**
- Content that fills its container almost completely, creating visual tension
- Responsive breakpoints where elements that had room at wider viewports are now cramped
- Horizontal scrolling caused by elements that do not quite fit
- The "about to overflow" state where the current content fits but any edit would break the layout

**BAD VERSION (rule-checking in disguise):**
"Is padding set to at least 16px on all containers?" -- An agent checks padding values. But padding is only half the story; the other half is how much of the padding the content has consumed.

---

## DIMENSION 6: CONSISTENCY AND COHERENCE

These questions test whether the page feels like one design or a collage of different designs.

---

### Q-CC-01: Does this page feel like one designer made it, or three?

**The Question:**
Scroll through the entire page. Does the design language remain consistent from top to bottom? Or do you detect shifts in "dialect" -- sections that feel like they were designed by different people with different preferences?

**Why rule-checking cannot answer this:**
"Design dialect" is an emergent property of the combination of spacing, typography treatment, border style, content density, and decorative elements. Two sections can use the same CSS variables and still feel different if one uses dense tables and thick borders while the other uses airy paragraphs and thin dividers. The dialect is in the COMBINATION, not any single property.

**What it catches:**
- The three-dialect problem from the OD audit: "Polished" (refined, editorial) vs "Functional" (dense, utility) vs "Editorial" (magazine-like) within the same page family
- A header area with a fundamentally different visual treatment from the body
- Mixed border conventions (some sections use left accents, others use full borders, others use no borders)
- Typography that shifts register (formal headings with casual body text, or vice versa)

**BAD VERSION (rule-checking in disguise):**
"Are the same CSS variables used throughout?" -- An agent greps for variable usage. But using `--color-accent` everywhere does not create consistency if the structural patterns (border placement, spacing rhythm, text treatment) vary between sections.

---

### Q-CC-02: Cover up the header. Can you still tell what site this page belongs to?

**The Question:**
Ignore the title, logo, and navigation. Looking only at the content area, does the page have a recognizable visual identity? Could you identify it as belonging to this design system if you saw it without context?

**Why rule-checking cannot answer this:**
Visual identity is created by the repeated application of distinctive design choices (characteristic spacing, unique typography combinations, signature color usage, distinctive component patterns). Rule-checking verifies that tokens are applied; perceptual testing determines whether the tokens create a recognizable identity.

**What it catches:**
- Pages that use the correct token values but apply them so generically that the page could belong to any design system
- Pages where the identity is carried entirely by the header/logo, with the body being visually anonymous
- Design system drift where accumulated changes have eroded the distinctive qualities
- Content areas that look like Bootstrap/Material/generic-CSS-framework rather than the specific design system

**BAD VERSION (rule-checking in disguise):**
"Are the brand colors used in the content area?" -- An agent checks for brand color hex values. But brand identity is not just color -- it is the specific way colors interact with typography, spacing, and structure.

---

### Q-CC-03: Pick two elements that should look "the same" (e.g., two callout boxes). Do they?

**The Question:**
Find two instances of what should be the same component (two cards, two callouts, two code blocks). Look at them side by side. Do they feel identical, or do they feel like siblings -- similar but not the same? If siblings, what is different?

**Why rule-checking cannot answer this:**
Visual sameness depends on more than shared class names. Two `.callout` elements might have different content volumes, different parent widths, different surrounding elements, and different content types (text vs code vs images), making them look different despite identical CSS. Only visual comparison reveals functional consistency.

**What it catches:**
- Code blocks that are styled identically but look different because one has 3 lines and another has 30
- Cards that share a component class but have different padding/borders due to context-specific overrides
- Callout boxes where the same border treatment looks confident on one and tentative on another because of different content density
- Lists where some items are styled and others are plain, despite both being inside the same component

**BAD VERSION (rule-checking in disguise):**
"Do all callout elements use the same CSS class?" -- An agent checks class names. But class name equality does not guarantee visual equality when content, context, or cascade create differences.

---

### Q-CC-04: Is there a visual "rhythm" to the page, or does it feel arrhythmic?

**The Question:**
Scroll through the page at a steady speed. Is there a pattern of section sizes, spacing, and visual weight that creates a rhythm (like music has a beat)? Or does it feel random -- some sections huge, some tiny, some dense, some empty, with no pattern?

**Why rule-checking cannot answer this:**
Rhythm is a temporal-spatial perception. It emerges from the SEQUENCE of visual weights, not from individual measurements. A page can have perfectly consistent spacing and still feel arrhythmic if the content density alternates unpredictably (dense-sparse-dense-dense-sparse-sparse).

**What it catches:**
- Pages that start with high-density content and then peter out into sparse sections with no gradual transition
- Alternating section sizes that create a jarring visual stutter
- The absence of a visual "heartbeat" -- regular intervals of emphasis or rest
- Content that was assembled by appending sections without considering the resulting sequence

**BAD VERSION (rule-checking in disguise):**
"Are all sections the same height?" -- An agent measures section heights. But equal height does not create rhythm. Rhythm requires variation that follows a pattern. A metronome is rhythmic; a monotone is not.

---

## DIMENSION 7: THE SHIP TEST

These questions invoke professional judgment. They ask the auditor to step out of "auditor mode" and into "designer mode" -- to evaluate the page as a professional deliverable.

---

### Q-ST-01: Would you put your name on this?

**The Question:**
Imagine your name is in the footer as the designer. Would you feel proud when someone opens this page? Or would you want to add a disclaimer? What specifically would you want to fix before adding your name?

**Why rule-checking cannot answer this:**
Professional pride is a holistic judgment that integrates every dimension: readability, hierarchy, coherence, finish, and craft. You cannot rule-check your way to professional pride. It requires standing back and evaluating the totality.

**What it catches:**
- Pages that "pass" all rules but feel mediocre -- technically correct but uninspired
- The gap between "it works" and "it's good"
- Professional-grade issues that no rulebook covers: visual polish, attention to detail, finishing touches
- The difference between a page that was MADE and a page that was CRAFTED

**BAD VERSION (rule-checking in disguise):**
"Does the page pass all design system rules?" -- An agent runs a rule checklist. But passing rules is the FLOOR, not the ceiling. A page can pass every rule and still be something no designer would claim.

---

### Q-ST-02: Would you show this to a client or stakeholder?

**The Question:**
You have a meeting in 5 minutes. Someone asks to see what you have been working on. You pull up this page. Do you feel confident, or do you start making excuses? ("It's not done yet," "That part is a placeholder," "Ignore the spacing there.")

**Why rule-checking cannot answer this:**
Client readiness is a professional judgment about presentation quality. It factors in visual polish, narrative coherence, and the absence of rough edges. Rules cannot detect whether a page needs excuses because rules do not know what the client expects.

**What it catches:**
- The "it's a draft" feeling: visible placeholders, inconsistent polish, sections that are clearly less refined than others
- Process artifacts visible in the output (metadata, version numbers, debug info)
- Visual inconsistencies that a client would notice even if they cannot articulate what is wrong
- The overall impression of professionalism vs. work-in-progress

**BAD VERSION (rule-checking in disguise):**
"Is the page production-ready?" -- This devolves into a checklist (minified? compressed? accessible?). The question is not about technical readiness but about VISUAL readiness.

---

### Q-ST-03: What would you change if you had 10 more minutes?

**The Question:**
You are about to ship this page. You get 10 more minutes. What do you fix? Not what the RULES say to fix -- what does YOUR EYE tell you to fix? The answer reveals what the auditor actually notices when not confined to a checklist.

**Why rule-checking cannot answer this:**
This question explicitly asks for the auditor's visual judgment, not rule compliance. It forces the auditor to prioritize perceptual issues over technical ones. The "10 minutes" constraint forces focus on the MOST VISIBLE issues, not the most technically severe.

**What it catches:**
- The issues that rule-checking misses because they are not in the rulebook
- The auditor's genuine visual concerns (vs. their trained responses)
- Priority ordering: what bothers you MOST reveals what matters most perceptually
- Polish issues: the spacing tweak, the alignment fix, the color adjustment that turns good into great

**BAD VERSION (rule-checking in disguise):**
"What rule violations remain?" -- An agent runs the remaining checklist items. But the question is not about rules; it is about the human instinct for improvement.

---

### Q-ST-04: If a competitor's page was next to this one, would you be proud or embarrassed?

**The Question:**
Imagine this page displayed side-by-side with a well-designed competitor's page (think Stripe's documentation, Apple's developer pages, or Linear's marketing site). Does your page hold its own, or does the comparison reveal deficiencies?

**Why rule-checking cannot answer this:**
Competitive comparison is a relative judgment that requires visual benchmarking against external standards, not internal rules. A page can satisfy every internal rule and still look outdated, amateurish, or under-designed compared to industry standards.

**What it catches:**
- Pages that are internally consistent but visually behind industry standards
- The gap between "correct" and "contemporary" -- a page can follow 2020 conventions and feel dated in 2026
- Design craft gaps: micro-interactions, hover states, loading behaviors, typographic refinement that separates amateur from professional
- Overall production value: does the page feel like it had a design budget, or like it was templated?

**BAD VERSION (rule-checking in disguise):**
"Does the page follow current design trends?" -- An agent looks up "2026 design trends" and checks for dark mode, glassmorphism, etc. But trends are not quality. The question is about CRAFT LEVEL, not trend adherence.

---

### Q-ST-05: Is there anything on this page that you would be embarrassed to explain?

**The Question:**
Imagine a junior designer asks you why a specific element looks the way it does. Is there any element where your honest answer would be "I don't know why it looks like that" or "I didn't notice that" or "Yeah, that's not great"?

**Why rule-checking cannot answer this:**
Embarrassment requires self-evaluation against professional standards. It is the gap between what you know SHOULD be true and what IS true on the page. An agent that only checks rules has no "embarrassment" signal because it has no sense of craft beyond compliance.

**What it catches:**
- Design decisions that were made by accident (browser defaults, auto-layout) rather than intention
- Elements that "work" but are clearly not designed -- they exist because no one deleted them
- Visual treatments that reveal the builder did not understand the design system (using decoration where restraint is called for)
- The "nobody's looking at that" areas that accumulate neglect

**BAD VERSION (rule-checking in disguise):**
"Are there any elements using browser default styles?" -- An agent checks for unstyled elements. But browser defaults are just one source of embarrassment; the question covers all forms of "I wouldn't want to explain this."

---

## DIMENSION 8: RESPONSIVENESS PERCEPTION

These questions test how the page feels at different viewport sizes, not whether it technically reflows correctly.

---

### Q-RP-01: At this viewport width, does every section have breathing room?

**The Question:**
Look at the current viewport. Does every element look like it was DESIGNED for this width? Or does anything look like it was designed for a wider screen and grudgingly squeezed to fit here?

**Why rule-checking cannot answer this:**
"Designed for this width" is a perceptual judgment about how natural the layout feels. A responsive CSS grid can technically reflow at any width while creating awkward proportions. A sidebar that collapses from 300px to 200px might technically "fit" but look like a compressed sliver of its intended self.

**What it catches:**
- Elements that technically fit but feel cramped -- especially in narrow viewports
- Multi-column layouts that should collapse to single-column but do not, creating slivers
- Images or cards that maintain their desktop proportions at mobile sizes, looking like thumbnails of themselves
- Text containers that were generous at 1440px but become claustrophobic at 768px

**BAD VERSION (rule-checking in disguise):**
"Does the layout use responsive breakpoints?" -- An agent checks for @media queries. But having breakpoints does not mean the breakpoint transitions feel natural.

---

### Q-RP-02: Would a user at this screen size feel served or punished?

**The Question:**
Pretend you are a user who ONLY has this screen size (it is not a resized window -- it is their actual device). Does the page feel like it was made for them? Or does it feel like a degraded version of a "real" page?

**Why rule-checking cannot answer this:**
"Feeling served" is about whether the layout at this viewport feels intentional and first-class. A mobile layout that is clearly an afterthought communicates "you are not the primary audience." Rule-checking confirms media queries exist; perceptual testing reveals whether the mobile experience feels designed or derived.

**What it catches:**
- Mobile layouts that are clearly desktop layouts reformatted rather than mobile-first designs
- Tablet widths where neither desktop nor mobile styles feel appropriate
- Horizontal scrolling or overflow that was not caught by responsive rules
- Touch targets that are technically large enough but visually too small for comfortable tapping

**BAD VERSION (rule-checking in disguise):**
"Are touch targets at least 44px?" -- An agent measures button sizes. But touch target size is one of many factors. A 44px button that is crammed against other elements feels hostile; a 40px button with generous surrounding space feels fine.

---

### Q-RP-03: Does anything look like it was designed for a different screen size?

**The Question:**
Is there anything on this page that looks WRONG at this viewport -- not "violating a rule" wrong but "visually this was clearly meant to be wider/narrower" wrong? An element that works at 1440px might look absurd at 768px even if it technically responds.

**Why rule-checking cannot answer this:**
"Meant to be wider" is a perception of misfit between element and viewport. A hero image that was composed for widescreen looks cropped and awkward at narrow viewports. A navigation bar designed for many items at desktop width becomes a cramped cluster at tablet width. These are compositional judgments, not breakpoint checks.

**What it catches:**
- Hero sections where the visual composition breaks at narrower widths (text overlapping image, truncated backgrounds)
- Grid layouts where the responsive reflow creates nonsensical reading order
- Elements that shrink proportionally when they should restructure entirely
- Font sizes that were appropriate at desktop but become disproportionate at mobile

**BAD VERSION (rule-checking in disguise):**
"Does the layout change at the specified breakpoints?" -- An agent checks media query triggers. But the existence of a breakpoint change does not guarantee the change is appropriate.

---

## ANTI-QUESTIONS: QUESTIONS THAT SEEM PERCEPTUAL BUT ARE NOT

These questions APPEAR to require visual judgment but actually enable agents to fall back into rule-checking mode. They are traps. Do NOT use these in perceptual audits. They are listed here as warnings.

---

### ANTI-Q-01: "Are the fonts correct?"

**Why this seems perceptual:** Fonts are visual. You can see them.
**Why this is rule-checking:** "Correct" implies a spec to check against. An agent will immediately look up the specified font-family and compare it to the computed value, never actually evaluating whether the typography FEELS right.
**The perceptual version:** Q-RC-05 (Is there any text you have to lean in to read?)

---

### ANTI-Q-02: "Is the spacing consistent?"

**Why this seems perceptual:** Spacing is visible. Consistency requires comparison.
**Why this is rule-checking:** "Consistent" is a measurable property. An agent will extract padding and margin values and report whether they match, never evaluating whether the RHYTHM of spacing feels natural.
**The perceptual version:** Q-SB-03 (Are the margins generous or anxious?)

---

### ANTI-Q-03: "Does the color palette match the spec?"

**Why this seems perceptual:** Colors are visual.
**Why this is rule-checking:** "Match the spec" explicitly invites comparison to a reference document. An agent will extract hex values and compare to a token file.
**The perceptual version:** Q-FI-06 (Describe how this page FEELS using only emotions)

---

### ANTI-Q-04: "Are the borders the correct width?"

**Why this seems perceptual:** Border width is visible.
**Why this is rule-checking:** "Correct width" means checking a spec. An agent will measure border-width and compare to the rule (3px or 4px).
**The perceptual version:** Q-CC-03 (Pick two elements that should look "the same" -- do they?)

---

### ANTI-Q-05: "Is the visual hierarchy clear?"

**Why this seems perceptual:** It uses the word "visual."
**Why this is rule-checking in disguise:** Despite sounding perceptual, agents interpret "visual hierarchy" as "heading sizes descend from h1 to h6." They check font-size cascade and report compliance.
**The perceptual version:** Q-VH-01 (Can you tell what is most important in 2 seconds?)

---

### ANTI-Q-06: "Is the layout responsive?"

**Why this seems perceptual:** Responsiveness is visible at different sizes.
**Why this is rule-checking:** "Responsive" triggers agents to check for @media queries, viewport meta tags, and flexible units. They report CSS features, not visual quality.
**The perceptual version:** Q-RP-02 (Would a user at this screen size feel served or punished?)

---

### ANTI-Q-07: "Are there accessibility issues?"

**Why this seems perceptual:** Accessibility affects the visual experience.
**Why this is rule-checking:** "Accessibility" immediately triggers automated checks: contrast ratios, alt text, ARIA labels, tab order. These are important but are definitionally rule-checks, not perceptual observations.
**The perceptual version:** Q-RC-05 (Is there any text you have to lean in to read?) -- catches the same readability issues from a perceptual rather than compliance angle.

---

### ANTI-Q-08: "Does the page look good?"

**Why this seems perceptual:** "Look good" requires visual judgment.
**Why this is rule-checking in disguise:** "Good" is too vague. Agents interpret it as "does it conform to design system rules?" and run their standard checklist. The vagueness enables the agent to choose its own evaluation criteria, which defaults to rule-checking.
**The perceptual version:** Q-ST-01 (Would you put your name on this?) -- specific enough to prevent defaulting to rules, but broad enough to capture gestalt quality.

---

### ANTI-Q-09: "Is the text aligned properly?"

**Why this seems perceptual:** Alignment is visible.
**Why this is rule-checking:** "Properly" implies a correct value. Agents will check text-align CSS property and report left/center/right/justify compliance.
**The perceptual version:** Q-GL-03 (Trace the left edge of every content block -- how many x-positions?) -- evaluates alignment perceptually through spatial consistency rather than property compliance.

---

### ANTI-Q-10: "Are the images the right size?"

**Why this seems perceptual:** Image size is visible.
**Why this is rule-checking:** "Right size" implies a spec. Agents check width/height attributes or CSS dimensions against a design spec.
**The perceptual version:** Q-SB-02 (Does any section feel heavier than its neighbors?) -- catches oversized or undersized images through their effect on visual balance.

---

### ANTI-Q-11: "Does the page follow the design system?"

**Why this seems perceptual:** Design system compliance should be visible.
**Why this is rule-checking:** This is literally asking for a rule check. The entire purpose of a design system is to encode rules. This question invites agents to run their compliance checklist.
**The perceptual version:** Q-CC-02 (Cover up the header -- can you still tell what site this belongs to?) -- tests design system adherence through visual identity rather than token compliance.

---

### ANTI-Q-12: "Is the typography scale consistent?"

**Why this seems perceptual:** Typography is visible.
**Why this is rule-checking:** "Scale" is a mathematical relationship. Agents will extract all font-size values, compute ratios, and check against the type scale spec.
**The perceptual version:** Q-VH-03 (Is anything competing for attention that should not be?) -- catches type scale issues through their EFFECT (competing sizes) rather than their CAUSE (incorrect ratios).

---

## APPENDIX: THE THREE LAWS OF PERCEPTUAL QUESTIONS

### Law 1: The Answer Must Require a Screenshot

If an agent can answer the question by reading CSS files, HTML source, or design tokens WITHOUT rendering the page, the question is not perceptual. Every question above requires looking at the rendered output.

### Law 2: The Answer Must Be Describable in Plain Language

If the answer requires technical vocabulary (px, rem, hex, rgba, flex, grid), the question has been answered technically, not perceptually. Perceptual answers use human words: heavy, cramped, jarring, floating, anxious, confident, broken, polished.

### Law 3: A Non-Designer Must Be Able to Validate the Answer

If validating the answer requires design expertise or tool knowledge, the question tests expertise, not perception. Anyone can tell you whether a page feels finished, whether text is hard to read, or whether they would be proud to show it. Perceptual questions tap into universal human visual processing, not learned design skills.

---

## SUMMARY TABLE

| ID | Dimension | Question (Short Form) | Catches |
|----|-----------|----------------------|---------|
| Q-FI-01 | First Impression | What draws your eye first? | Misplaced focal points |
| Q-FI-02 | First Impression | What feels "off"? | Gestalt discomfort |
| Q-FI-03 | First Impression | Finished or WIP? | Polish gaps |
| Q-FI-04 | First Impression | Eye path after first? | Flow problems |
| Q-FI-05 | First Impression | Squint shapes? | Macro composition |
| Q-FI-06 | First Impression | Describe with feelings | Emotional incoherence |
| Q-RC-01 | Readability | 10-min reading comfort? | Column/line-height issues |
| Q-RC-02 | Readability | Words stacking vertically? | Narrow column catastrophe |
| Q-RC-03 | Readability | Text squeezed/cramped? | Container overflow |
| Q-RC-04 | Readability | Narrowest column article? | Hidden column failures |
| Q-RC-05 | Readability | Lean in to read? | Contrast/size failures |
| Q-RC-06 | Readability | Read aloud flow? | Line-break awkwardness |
| Q-SB-01 | Spatial Balance | Purposeless dead space? | Viewport voids |
| Q-SB-02 | Spatial Balance | Heavier sections? | Weight imbalance |
| Q-SB-03 | Spatial Balance | Generous or anxious margins? | Spacing psychology |
| Q-SB-04 | Spatial Balance | Half-page completeness? | Compositional fragility |
| Q-SB-05 | Spatial Balance | Floating no-man's land? | Orphaned elements |
| Q-VH-01 | Visual Hierarchy | Most important in 2 sec? | Hierarchy failure |
| Q-VH-02 | Visual Hierarchy | Eyes flow or stuck? | Visual obstacles |
| Q-VH-03 | Visual Hierarchy | Competing attention? | Visual cacophony |
| Q-VH-04 | Visual Hierarchy | Clear visual ending? | Abrupt page endings |
| Q-VH-05 | Visual Hierarchy | Smooth transitions? | Section whiplash |
| Q-GL-01 | Grid/Layout | Column room for content? | Content-container misfit |
| Q-GL-02 | Grid/Layout | Grid intentional? | Auto-layout artifacts |
| Q-GL-03 | Grid/Layout | Left-edge alignment count? | Alignment scatter |
| Q-GL-04 | Grid/Layout | Breathing room at viewport? | Viewport-edge cramping |
| Q-CC-01 | Consistency | One designer or three? | Design dialect shifts |
| Q-CC-02 | Consistency | Identity without header? | Visual anonymity |
| Q-CC-03 | Consistency | Same component = same look? | Contextual inconsistency |
| Q-CC-04 | Consistency | Visual rhythm? | Arrhythmic sequencing |
| Q-ST-01 | Ship Test | Put your name on it? | Below-pride-threshold |
| Q-ST-02 | Ship Test | Show to client? | Draft-quality output |
| Q-ST-03 | Ship Test | 10-minute fix? | Highest-priority visual debt |
| Q-ST-04 | Ship Test | Competitor comparison? | Craft level gap |
| Q-ST-05 | Ship Test | Embarrassed to explain? | Accidental design |
| Q-RP-01 | Responsiveness | Breathing room at width? | Viewport cramping |
| Q-RP-02 | Responsiveness | Served or punished? | Afterthought viewports |
| Q-RP-03 | Responsiveness | Wrong screen size? | Compositional misfit |

**Total: 38 perceptual questions across 8 dimensions + 12 anti-questions**

---

## DEPLOYMENT GUIDE

### Minimum Viable Audit (5 questions, ~10 minutes)
Use when you need a quick perceptual check:
1. Q-FI-01 (first eye draw)
2. Q-RC-02 (word stacking)
3. Q-SB-01 (dead space)
4. Q-VH-01 (importance in 2 sec)
5. Q-ST-03 (10-minute fix)

### Standard Audit (15 questions, ~30 minutes)
Use for regular page reviews. One question per sub-group:
- Q-FI-01, Q-FI-05 (First Impression)
- Q-RC-01, Q-RC-02, Q-RC-05 (Readability)
- Q-SB-01, Q-SB-02 (Spatial Balance)
- Q-VH-01, Q-VH-02, Q-VH-04 (Visual Hierarchy)
- Q-GL-01, Q-GL-02 (Grid/Layout)
- Q-CC-01 (Consistency)
- Q-ST-01, Q-ST-03 (Ship Test)

### Full Perceptual Audit (38 questions, ~90 minutes)
Use for final review before shipping. All questions, all dimensions. Assign 1-2 dimensions per agent for parallel execution.

### Recommended Agent Assignment for Full Audit
| Agent | Dimensions | Questions | Estimated Time |
|-------|-----------|-----------|----------------|
| Agent A | First Impression (6Q) | Q-FI-01 through Q-FI-06 | 15 min |
| Agent B | Readability (6Q) | Q-RC-01 through Q-RC-06 | 20 min |
| Agent C | Spatial Balance + Grid (9Q) | Q-SB-01 through Q-GL-04 | 25 min |
| Agent D | Hierarchy + Consistency (9Q) | Q-VH-01 through Q-CC-04 | 25 min |
| Agent E | Ship Test + Responsiveness (8Q) | Q-ST-01 through Q-RP-03 | 20 min |
