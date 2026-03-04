# Research: What "Visual Evaluation" Actually Means

## The Core Question

How would an agent KNOW something is a problem? Not through rules, not through compliance checks, not through atmospheric description -- how does genuine visual evaluation work, and why did the current system fail so completely?

---

## Part 1: What a Human Designer Actually Evaluates

When a human designer reviews a page, they operate on multiple simultaneous channels that collapse into a single gestalt judgment. Unpacking those channels:

### 1.1 Craft Quality (the blind spot)

The most fundamental evaluation a human makes is: **"Did someone care about this?"** This is not about atmosphere or concept. It is about execution investment. A human designer perceives:

- **Visual investment per section.** Is each section styled to the level that section's content deserves? Or are some sections obviously more invested-in than others? Do some sections look like a first draft while others look polished?
- **Component quality.** Do cards look like cards? Do code blocks look like code blocks? Are interactive-feeling elements given the visual cues that make them feel interactive? Or are they just text with a line around them?
- **Finish.** Are borders consistent? Are spacings intentional? Are there obvious gaps where something should be but isn't? Does the page look like someone reviewed it and fixed the small things?

The postmortem proved this is the PA system's primary blind spot. The domain cards had **zero background delta from the zone background** -- they were literally invisible containers. A human designer would see this in 2 seconds and say "the cards aren't styled." No amount of atmospheric questioning can surface this because the auditor has to first notice the cards exist as cards, then evaluate whether they look like good cards.

### 1.2 Readability (the forgotten priority)

The PA skill explicitly states: "Comprehension failures ALWAYS outrank aesthetic observations." Yet zero auditors flagged illegible code snippets. Why?

A human designer evaluates readability at **multiple scales**:
- **Can I read the body text?** (Usually yes -- this is where auditors stop)
- **Can I read ALL text?** Code blocks, labels, metadata, captions, footer text
- **Can I distinguish different types of text?** Headlines from subheads, body from callouts, code from prose
- **Can I scan?** When I skim the page, do the important things visually stand out?

The current PA system only captures the first question because full-page screenshots make secondary text elements tiny and unreadable. Auditors CANNOT evaluate code block legibility from a 2160x26746px screenshot compressed to screen size.

### 1.3 Visual Interest Gradient

A human designer evaluates whether the page rewards attention:
- **Would I stop scrolling?** Is there a moment that catches my eye?
- **Does every zone earn its height?** If a zone takes 3000px of scroll, does it contain 3000px of visual interest?
- **Is there variety?** Do I encounter different visual experiences as I scroll, or does the page feel like one long repeated unit?
- **Is there surprise?** Does anything on this page look like I haven't seen it before?

This is fundamentally different from asking about "rhythm" or "personality." A page can have confident rhythm and authoritative personality while being visually boring. The auditors proved this: they described the page as "confident," "deliberate," "authoritative" -- all true at the atmospheric level, all irrelevant to the fact that Zone 1 is 3000px of cream text and Zone 2's cards are invisible.

### 1.4 Spatial Economy

A human designer evaluates whether space is working:
- **Is this gap intentional or accidental?** A 160px gap between a "Part I" label and the first heading looks accidental.
- **Is the page earning its length?** A 26,746px page needs to justify that scroll distance with content density and visual interest.
- **Are stacked spacings creating dead zones?** When section padding-bottom (64px) meets the next section padding-top (64px), you get 128px of nothing. A human sees this as a bug.

The PA system aestheticizes this: "the page holds its breath" or "a designed pause." A human designer says "that's too much space."

### 1.5 Distinctiveness

A human designer evaluates whether the page has identity:
- **Does this look like it was made for THIS content?** Or could you swap the text and nothing would change?
- **Would I remember this page tomorrow?** Is there a single visual moment I'd recall?
- **Does this look generated?** Is there a generic, template-like quality?

This is the question the PA system inverts. By asking "what personality does the page have?" (E-03), the system guarantees a positive answer -- every page has SOME personality, even "formal" or "restrained." The question should be: "Is this page's visual treatment distinctive or generic?"

### 1.6 Hierarchy

A human designer evaluates whether the page communicates importance:
- **What's the most important thing on this page?** Can I identify it from the visual treatment alone?
- **Are there clear levels?** Can I distinguish primary, secondary, and tertiary content at a glance?
- **Does the hierarchy match the content's hierarchy?** Or is everything treated with equal visual weight?

---

## Part 2: What Claude Can Actually Perceive in Screenshots

### 2.1 What Claude Perceives Well

Based on the auditor reports and the postmortem evidence, Claude demonstrably perceives:

1. **Color zones.** Light/dark alternation, background color shifts, overall tonal character. All 5 auditors accurately tracked the light-to-dark-to-light progression.

2. **Macro-level spatial distribution.** Where content lives on the page, overall density patterns, whether sections are generous or cramped. Auditor 4 correctly identified "the vast open stretch between the header and the first prose content."

3. **Text scale relationships.** Large headings vs. body text, display type vs. metadata. Auditors accurately described the title's commanding presence.

4. **Structural shifts.** When the page changes from vertical flow to grid/cards/columns. Multiple auditors identified the card grid as a spatial shift.

5. **Atmospheric character.** Tone, mood, seriousness, warmth, confidence. All auditors captured legitimate atmospheric qualities.

6. **Rhythm and pacing.** The scroll experience as a temporal journey -- where it speeds up, slows down, becomes repetitive.

### 2.2 What Claude Perceives Poorly (or Not At All)

1. **Fine detail at full-page scale.** Code block content, 12px labels, subtle border differences (3px vs 4px), syntax highlighting presence/absence. When viewing a 26,746px-tall page as a single image, anything smaller than ~18px becomes a blur.

2. **Background delta below ~20 RGB points.** The sub-zone background variations the fix cycle introduced (4-16 RGB point deltas) are described as "perceptible" by the Weaver but are likely below Claude's actual discrimination threshold for compressed screenshots. Cards with ZERO background delta from the zone were not flagged as invisible.

3. **Spacing precision.** Claude cannot distinguish a 64px gap from a 128px gap at full-page scale. It perceives "generous" vs "tight" but cannot detect stacking bugs where padding compounds at section boundaries.

4. **Component quality.** Whether a card looks like a good card, whether a code block looks like a good code block, whether a callout looks professionally styled. Claude perceives atmospheric quality ("feels like instruments on a table") but not craft quality ("these are just text with a left border").

5. **The "looks generated" signal.** Humans can instantly detect template-quality design -- a certain uniformity, a certain safe-playing quality. Claude does not seem to have this discriminator. It evaluates what IS rather than comparing against what COULD BE.

### 2.3 The Perception Gap

The critical gap is between **atmospheric perception** (what Claude does well) and **craft perception** (what Claude does poorly). The PA system was designed entirely around atmospheric perception because that's where Claude's genuine capability lies. But atmospheric perception alone cannot catch the failures that a human reviewer immediately sees.

The failures in this build were ALL craft-level:
- Cards with zero background delta (craft: invisible containers)
- 160px dead zones (craft: stacked padding bug)
- No syntax highlighting (craft: unfinished code blocks)
- Uniform section styling (craft: every section looks the same)
- Provocation styled identically to body text (craft: no visual framing)

Every one of these is trivially visible to a human designer. Every one was invisible to the PA system.

---

## Part 3: What Evaluation Criteria Would Catch THIS Build's Failures

### 3.1 The Failures, Specifically

| Failure | What Catches It | Why Current System Missed It |
|---|---|---|
| 160px dead zones | **Spacing audit at section boundaries** -- measure actual gap between content elements | Auditors perceived "generous space" but couldn't measure stacking bugs; full-page screenshots obscure absolute sizes |
| Invisible domain cards | **Background delta check** -- does every container have visible differentiation from its parent? | Zero auditors noted the cards were invisible because they inferred card-ness from layout position, not visual boundary |
| No syntax highlighting | **Code block detail crop** -- view code at 100% zoom | Full-page screenshots made code blocks tiny; auditors couldn't see whether highlighting existed |
| Bland anti-patterns section | **Visual variety check** -- do different instances of the same component type look different from each other? | Auditors described the section atmospherically ("dark structured content") without evaluating component-level craft |
| Uniform section styling | **Interest gradient** -- show auditors pairs of section crops and ask "how different are these?" | No question asks about within-page visual variety at the section level |
| "Looks generated" quality | **Reference comparison** -- show a genuinely well-crafted page alongside this one | No reference point. The system evaluates in absolute terms, never relative to what good looks like |

### 3.2 A Minimum Viable Craft Evaluation

Five questions that would have caught all six failures:

**C-01: "Can you read ALL the text on this page? Look specifically at the smallest text -- labels, code, metadata, captions. Is any of it too small, too low-contrast, or too dense to read comfortably?"**
--> Would have caught: code block legibility, code header text at 12px

**C-02: "Point to the section with the MOST visual investment (the most variety of elements, the most styling effort). Now point to the section with the LEAST. How large is the gap between them?"**
--> Would have caught: uniform section styling, Zone 1 text wall, bland anti-patterns

**C-03: "Look at any card, box, or container on this page. Can you see its boundaries clearly? Does it look like a distinct object, or does it blend into the background?"**
--> Would have caught: invisible domain cards, floating anti-pattern headings

**C-04: "Find the largest empty area on the page that contains no content. How many lines of body text could fit in that space? Does the emptiness look intentional or accidental?"**
--> Would have caught: 160px dead zones, provocation whitespace void (232px overhead for 90px of content)

**C-05: "If you removed all the text, would you be able to tell which section is which from the visual treatment alone? Or do most sections look the same?"**
--> Would have caught: uniform section treatment within zones, lack of per-section visual identity

### 3.3 Why These Work

Each of these questions has a specific property that the existing 20 questions lack: **they ask about observable visual facts, not experiential atmosphere.**

- "Can you read this?" has a binary answer (yes/no) with grounding (point to what you can't read).
- "Point to the most/least invested section" forces comparative judgment, not absolute description.
- "Can you see its boundaries?" forces the auditor to look at a specific element and evaluate its visual clarity.
- "How many lines of text would fit in this gap?" forces dimensional assessment without requiring pixel measurements.
- "Would you know which section is which?" forces evaluation of visual distinctiveness.

The existing questions ask things like "What personality does this page have?" and "Is there a rhythm?" These are valid but they only surface atmospheric qualities. The missing questions ask about **craft observables** -- things that are either true or false about the visual output.

---

## Part 4: How Visual Evaluation Should Be Structured

### 4.1 The Three Evaluation Layers

Visual evaluation operates at three distinct layers. The current system only implements Layer 1.

**Layer 1: Atmospheric (currently implemented)**
- What does the page feel like?
- What is its personality, rhythm, spatial character?
- Is it coherent? Does it have a dramatic arc?
- Is the content-form relationship working?

**Layer 2: Craft (missing entirely)**
- Is every element visually complete? (Cards look like cards, code looks like code)
- Are spacings correct? (No dead zones, no stacking bugs, no accidental gaps)
- Is all text readable at its actual size?
- Is there visual variety? (Sections look different from each other)
- Are there any unfinished-looking areas?

**Layer 3: Discrimination (missing entirely)**
- Does this look handmade or generated?
- Is this distinctive or generic?
- Would a designer ship this?
- How does this compare to high-quality reference pages?

### 4.2 When Each Layer Should Run

**During build:** Layer 2 (craft) should be checked by the builder themselves, before any PA cycle. A builder should verify: "I can see all my card boundaries, my spacing isn't stacking, my code blocks have highlighting, every section has at least one non-text element." These are self-checkable.

**After build (PA cycle):** Layer 1 (atmospheric) + Layer 2 (craft) should be checked by auditors with different screenshot types:
- Full-page screenshots for Layer 1 (atmospheric judgment)
- Section-level crops at 100% zoom for Layer 2 (craft judgment)
- Side-by-side comparison crops for relative judgment

**After PA cycle (Weaver):** Layer 3 (discrimination) should be the Weaver's primary additional contribution. The Weaver should ask: "All atmospheric and craft checks aside, would I be proud to show this to a designer?"

### 4.3 Screenshot Protocol Redesign

The current protocol captures 6 screenshots (3 viewports x 2 crops: full-page + above-fold). This is insufficient.

**Minimum viable screenshot set for craft evaluation:**

1. **Full-page at 1440px** (existing) -- for atmospheric/macro judgment
2. **Above-fold at 1440px** (existing) -- for first impression
3. **Section crops at 1440px** -- one crop per major section at 100% zoom (~800px tall). These are where craft evaluation happens. An auditor viewing a section crop can see:
   - Whether cards have visible boundaries
   - Whether code has syntax highlighting
   - Whether spacing looks intentional
   - Whether the section has visual variety
4. **Detail crops** -- zoom into the most complex/dense area of the page (a card grid, a code block, a multi-element zone). These are where readability evaluation happens.
5. **Comparison crops** -- the same component type from two different sections side by side. These are where variety/uniformity evaluation happens.

Total: ~12-18 screenshots instead of 6. The incremental cost is negligible compared to the value of catching invisible cards and dead zones.

---

## Part 5: The "KNOW It's a Problem" Question

### 5.1 The Knowledge Gap

The fundamental challenge: Claude has extensive knowledge about what good design looks like (from training on millions of well-designed pages) but has very limited ability to EXPRESS that knowledge when evaluating screenshots. This is the knowledge-expression gap.

Evidence that the knowledge exists:
- Claude can write CSS that produces good-looking pages (proven in earlier builds like CD-006)
- Claude can describe good design principles in prose
- Claude can identify specific CSS problems when reading code (the visual-analyst postmortem demonstrated this perfectly)
- Claude's atmospheric descriptions are accurate -- the page IS authoritative and serious

Evidence that the expression fails:
- Claude describes "confident cards" when the cards are invisible
- Claude describes "designed pauses" when viewing padding bugs
- Claude describes "atmospheric code blocks" without noticing they lack syntax highlighting
- The Weaver issues SHIP for a page the human immediately identifies as unfinished

### 5.2 Why the Knowledge Doesn't Express

Three mechanisms suppress craft-level evaluation:

**Mechanism 1: The prompt frame.** The PA system explicitly instructs auditors to be "experiential." It bans measurement language. It encourages atmospheric description. It asks about feelings, not facts. The prompt frame channels Claude's output toward the one domain (atmosphere) where it can always produce eloquent answers, and away from the domain (craft) where it might have to say "this looks unfinished" -- a harder, more confrontational judgment.

**Mechanism 2: The positivity bias.** Claude (and LLMs generally) trend toward positive, constructive framing. "These cards feel like specimens under examination" is a positive literary reframe of "these cards are invisible." The language constraint amplifies this by banning the concrete terms that would make negative judgments specific ("no background contrast," "zero delta") and requiring the impressionistic terms that make negative judgments dissolve ("minimal," "subtle," "restrained").

**Mechanism 3: The lack of reference.** Evaluation in a vacuum produces relativistic judgments. Every page has SOME positive qualities. Without a reference point -- "here is what good cards look like; now look at these cards" -- Claude has no anchor for craft quality. A human designer has seen thousands of card designs and can instantly compare. Claude is seeing this page in isolation and evaluating it on its own terms.

### 5.3 Teaching an Agent What Good Looks Like

Four approaches, from least to most effective:

**Approach A: Explicit Rules (weakest)**
"Cards must have at least 15 RGB points of background delta from their parent zone."
- Works for binary checks
- Cannot scale to all possible craft failures
- Produces compliance, not quality judgment
- This is what the gate runner already does; doubling it in the PA system adds no value

**Approach B: Anti-Pattern Gallery (moderate)**
Show the auditor 3-5 examples of common craft failures with descriptions:
- "Invisible container: a card with no background contrast against its zone"
- "Dead zone: a gap larger than 120px with no content"
- "Text wall: a section with only body paragraphs and headings, no other visual elements"
- "Monochrome code: a code block with no syntax highlighting"
This gives Claude concrete patterns to match against, not abstract rules to check.

**Approach C: Reference Comparison (strong)**
Show the auditor a crop of a well-executed component alongside the same component type from the current build. "Here is a good card grid. Now look at this page's card grid. What's different?"

This leverages Claude's genuine ability to compare visual differences. It does not require Claude to have an internal standard of "good" -- it provides the standard externally. The comparison forces craft-level observation because the differences between good and mediocre are visible.

Limitations: requires maintaining a reference library, adds prompt/image tokens, may anchor too strongly to a specific style.

**Approach D: "Looks Generated" Detection (strongest but hardest)**
Train the evaluation to detect signals of generic/template-like output:
- Uniform spacing everywhere (same gap between all sections)
- All sections use the same layout pattern (full-width text column)
- No element breaks the grid or column structure
- Backgrounds change but styling within backgrounds doesn't
- Components are text-in-boxes rather than designed objects
- No single visual moment that a viewer would remember

This is essentially the "designer's eye" -- the ability to distinguish between "professionally correct" and "genuinely crafted." It is the highest-value evaluation but also the hardest to implement because it requires judgment, not measurement.

Implementation approach: add 2-3 questions that specifically target these signals:
- "Does any section of this page look like it could have been generated by a template? Which section, and what makes it feel template-like?"
- "Is there a single visual element on this page that you would remember if you saw it again next week? If not, what's missing?"
- "Imagine you are reviewing this page for a design portfolio. Would you include it? If not, what would need to change?"

### 5.4 The Knowledge vs. Expression Fix

The fix is NOT to give Claude more knowledge about design. The knowledge is there. The fix is to remove the barriers that prevent expression:

1. **Remove the language ban on craft observations.** Let auditors say "the cards don't have visible backgrounds" and "the code has no syntax highlighting." Keep the ban on CSS property names (don't let them say `border-radius: 8px`) but allow dimensional and comparative language ("large gap," "no visible boundary," "same styling as the previous section").

2. **Provide section-level screenshots.** Claude CAN perceive craft failures when it can see elements at readable scale. The full-page screenshot hides these failures. The fix is better input, not better algorithms.

3. **Add comparative prompts.** "What's the most visually invested section? What's the least? How different are they?" This forces the ranking and comparison that surfaces craft quality gaps.

4. **Add one "devil's advocate" auditor** whose explicit job is to find reasons NOT to ship. This counterbalances the system's structural positivity bias. The devil's advocate gets questions like: "What's the weakest section on this page? What about it looks unfinished? If you had to reject this page, what would your reason be?"

---

## Part 6: The Minimum Set That Catches 80% of Quality Issues

### 6.1 The 80% Failures

Based on the postmortem evidence, prior pipeline runs (v3-v5), and the flagship retrospective, the recurring quality failures cluster into 6 categories:

1. **Dead space** (stacked padding, excessive margins, empty zones)
2. **Invisible/bland components** (cards without boundaries, unstyled containers, uniform boxes)
3. **Text legibility** (small text, low contrast, no syntax highlighting, illegible at mobile)
4. **Visual monotony** (same layout every section, same component everywhere, no variety)
5. **Unfinished sections** (sections that are obviously less invested-in than others)
6. **Generic/template quality** (the overall page feels generated, not designed)

### 6.2 The Minimum Viable Evaluation

**6 checks that catch 80% of failures:**

| Check | What It Catches | Method | When |
|---|---|---|---|
| **Boundary visibility** | Invisible cards/containers (#2) | Section crop: "Can you see where each card/box starts and ends?" | During PA |
| **Spacing sanity** | Dead zones (#1) | Section crop: "Is there a gap larger than a paragraph that contains nothing?" | During PA or programmatic |
| **All-text readability** | Legibility failures (#3) | Detail crops of code/labels/metadata: "Can you read this?" | During PA |
| **Section investment gradient** | Unfinished sections (#5) | Full-page: "Which section got the most/least design attention?" | During PA |
| **Visual variety** | Monotony (#4) | Comparison crops: "Do these two sections look different or the same?" | During PA |
| **Ship confidence** | Generic quality (#6) | Full-page: "Would a designer be proud to put their name on this?" | Weaver verdict |

### 6.3 Implementation: Craft Layer Added to PA

The minimum change to the current PA system:

1. **Add 3 craft questions to the auditor question set.** Distribute to auditors alongside the existing atmospheric questions. Each auditor gets 1 craft question + their 4 atmospheric questions.

Proposed craft questions:
- **C-01 (Readability):** "Look at the smallest, lowest-contrast text on this page. Can you read it? Look at any code blocks. Can you distinguish different parts of the code, or is it all one color?"
- **C-02 (Containment):** "Look at any card, box, or container. Does it have a visible boundary -- can you tell where it starts and ends? Does it look like a real design element or just text floating in space?"
- **C-03 (Investment):** "Which section of this page got the most design love? Which got the least? How obvious is the gap between them?"
- **C-04 (Space):** "Find the largest empty area between content elements. Does it look like the designer put it there on purpose, or like something is missing?"
- **C-05 (Memory):** "If you saw this page again next week, is there a single visual element you would remember? What is it? If nothing, why not?"

2. **Add section-level screenshots.** For each major zone, capture one crop at 100% zoom (~800px height). Auditors receive these alongside the full-page views.

3. **Add one "Red Team" auditor.** Auditor 6 receives only craft questions (C-01 through C-05) and section crops. Their explicit instruction: "Your job is to find reasons this page should NOT ship. Look for: unfinished areas, invisible elements, illegible text, empty zones, and generic styling. If you cannot find any, say so -- but look hard first."

4. **Separate compliance from verdict.** Move Output 4 (Package Compliance) to a separate file. The Weaver's SHIP/REFINE/REBUILD judgment must be based ONLY on perceptual Outputs 1-3 and should not be contaminated by a 90-line green compliance dashboard.

5. **Constrain the Weaver override.** If 5/5 auditors give REFINE in cold look, and the Red Team auditor gives REFINE, the Weaver CANNOT issue SHIP. The Weaver can issue SHIP if 3+ auditors give SHIP in cold look, or if the Red Team auditor gives SHIP.

---

## Part 7: The Deeper Problem -- Evaluation as Translation

### 7.1 The Real Failure Mode

The PA system's failure is not that it asks the wrong questions. The 20 experiential questions are genuinely valuable for evaluating compositional coherence and atmospheric character. The failure is that the system treats atmospheric evaluation as SUFFICIENT for a ship decision.

Atmospheric evaluation tells you: "This page has a coherent identity, a functional rhythm, and genuine content-form coupling."

Craft evaluation tells you: "This page's components are well-executed, its spacing is correct, its text is readable, and its visual investment is evenly distributed."

**These are independent axes.** A page can score high on atmosphere and low on craft (this build). A page can score high on craft and low on atmosphere (a well-executed but soulless template). A ship-worthy page must score adequately on both.

The PA system evaluated one axis and assumed it covered both. The fix is not to replace atmospheric evaluation with craft evaluation. It is to add craft evaluation as a second, independent check.

### 7.2 The "Evaluation as Translation" Problem

There is a deeper epistemological problem: visual evaluation by a language model is fundamentally an act of TRANSLATION. Claude sees pixels and must translate them into language. The quality of that translation depends on:

1. **What language is available.** If only atmospheric language is available (the current constraint), the translation can only capture atmospheric properties. Craft observations literally cannot be expressed.

2. **What the translation targets.** If the questions ask about feelings, the translation targets feelings. If the questions ask about observable facts, the translation targets observable facts.

3. **What resolution the source has.** If the screenshots are low-detail (full-page), the translation source lacks craft-level information. Claude cannot translate what it cannot see.

The fix addresses all three:
- Allow craft language (not CSS, but dimensional and comparative terms)
- Ask craft-targeted questions (about observables, not feelings)
- Provide craft-resolution screenshots (section crops, not just full-page)

### 7.3 The Aspiration: Evaluation That Knows What It Doesn't Know

The deepest problem with the current system is confidence calibration. The Weaver issued SHIP with high confidence for a page that should not have shipped. The system does not know what it cannot evaluate.

A well-calibrated evaluation system would produce output like:

> "ATMOSPHERIC: SHIP. The page's compositional coherence, rhythm, and content-form coupling are strong. CRAFT: UNCERTAIN. I cannot evaluate code block legibility at this screenshot resolution. The card boundaries in Zone 2 are ambiguous -- I cannot tell if they have visible differentiation from the zone background. Section-level crops needed for craft assessment. VERDICT: REFINE (contingent on craft verification)."

This requires the system to distinguish between:
- "I evaluated this and it passed" (confident SHIP)
- "I cannot evaluate this at the available resolution" (epistemic humility)
- "I evaluated this and it has problems" (confident REFINE)

Currently, the system only has two modes: "evaluated and passed" or "evaluated and failed." The missing mode is "could not evaluate." Adding this mode -- teaching the Weaver to flag what it COULDN'T assess -- would prevent the false-positive SHIP pattern where craft failures hide behind atmospheric confidence.

---

## Summary of Key Findings

### Finding 1: Craft evaluation is the missing layer
The PA system evaluates atmosphere but not craft. Both are needed for a ship decision. Craft evaluation requires different questions, different screenshots, and different language permissions than atmospheric evaluation.

### Finding 2: The language constraint is the primary mechanism enabling false positives
By banning concrete observation and requiring impressionistic language, the PA system ensures that craft failures can only be expressed as atmospheric features. "Invisible cards" becomes "specimens under examination." "Dead zone" becomes "designed pause." The fix: allow craft language (dimensional and comparative terms) while keeping the ban on CSS property names.

### Finding 3: Screenshot resolution determines evaluation capability
Claude cannot evaluate craft at full-page screenshot scale. Section-level crops at 100% zoom are the minimum requirement for craft evaluation. The current 6-screenshot protocol needs to expand to ~12-18 screenshots with section-level and detail-level crops.

### Finding 4: Comparative evaluation is stronger than absolute evaluation
Asking "does this page have personality?" always produces a positive answer. Asking "which section got the most design attention and which got the least?" forces comparative judgment that surfaces quality gradients. Craft questions should be comparative, not absolute.

### Finding 5: The Weaver needs epistemic humility
The Weaver should distinguish between "evaluated and confident" and "could not evaluate at available resolution." A SHIP verdict should require confidence on BOTH atmospheric and craft axes, not just one.

### Finding 6: A "Red Team" auditor counterbalances structural positivity bias
One auditor whose explicit job is finding reasons NOT to ship would catch failures that strength-finding auditors miss. This is the cheapest, highest-leverage addition to the current system.

### Finding 7: Reference comparison is the strongest teaching method
The hardest question -- "how does an agent KNOW something is a problem?" -- is best answered by comparison, not rules. Showing a well-crafted card grid alongside the current build's card grid leverages Claude's genuine comparison ability. Maintaining a small reference library of "good" component examples would anchor craft evaluation more effectively than any number of rules.

---

## Proposed Evaluation Architecture

```
LAYER 1: CRAFT (programmatic + visual, during build)
  Builder self-check: card boundaries visible? spacing sane? code highlighted?
  Gate runner: background deltas, spacing stack audit, text contrast ratios

LAYER 2: ATMOSPHERIC (visual, PA cycle)
  5 auditors: existing 20 experiential questions on full-page screenshots
  Focus: rhythm, personality, content-form coupling, spatial character

LAYER 3: CRAFT PERCEPTUAL (visual, PA cycle)
  1 Red Team auditor: 5 craft questions on section-level crops
  Focus: readability, containment, investment gradient, dead space, memorability

LAYER 4: DISCRIMINATION (Weaver)
  Weaver synthesizes all reports
  Explicit assessment: atmospheric confidence + craft confidence
  Must flag what it COULDN'T evaluate
  SHIP requires both axes confident

LAYER 5: REFERENCE (optional, highest value)
  Side-by-side comparison of current build components vs reference library
  "Here's a good card grid. Now look at yours. What's different?"
```

This architecture catches the current build's failures at three points:
- Layer 1 (builder self-check): cards have no background delta (gate runner catches this)
- Layer 3 (Red Team): "I cannot see where the cards start and end" + "there is a 160px gap with nothing in it" + "the code has no color variation"
- Layer 4 (Weaver): "Atmospheric: confident SHIP. Craft: Red Team flagged 3 issues. VERDICT: REFINE."

The current system only has Layer 2. Adding Layers 1, 3, and 4 would have prevented the false-positive SHIP.
