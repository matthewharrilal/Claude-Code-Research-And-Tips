# Existing Perceptual-Deepening Skill: Deep Analysis

## Source Files Analyzed

| File | Lines | Role |
|------|-------|------|
| `SKILL.md` (v1) | 770 | Original reference-matching protocol |
| `SKILL-v2.md` (v2 draft) | 625 | Ship-readiness visual judgment protocol |
| `PERCEPTUAL-DEEPENING-PROTOCOL.md` | 1,059 | Deep philosophy + forcing questions |
| `prompts/ZONE-SUB-AGENTS.md` | 713 | 5 zone agent definitions with prompts |
| `TURBO-ORCHESTRATOR.md` | 594 | Complete orchestrator prompt for v1 |
| `QUICK-INVOKE.md` | 274 | Invocation options (5 modes) |
| `EMBEDDED-PROMPT.md` | 113 | Mandatory agent block for v2 |
| `CLAUDE.md` | 92 | Skill registration and command routing |
| `templates/PERCEPTUAL-AUDIT-LOG-TEMPLATE.md` | 206 | Iteration tracking template |
| `templates/SOUL-DISCOVERIES-TEMPLATE.md` | 258 | Soul piece accumulation template |
| **Total** | **~4,704** | |

---

## 1. EVERY PERCEPTUAL QUESTION THAT FORCES LOOKING (Complete Inventory)

### 1.1 Core Loop Questions (PERCEPTUAL-DEEPENING-PROTOCOL.md + SKILL.md)

**Squint Test (Stage 2):**
1. "If I blur my eyes, what's the dominant shape I see?"
2. "What's the overall visual weight? Heavy? Light? Balanced? Unbalanced?"
3. "What's the feeling? Trapped? Floating? Cramped? Spacious?"
4. "If I had to describe the vibe in one word, what is it?"
5. "The reference feels ___. My attempt feels ___." (template)

**Pointing Test (Stage 3):**
6. "Gun to my head, what's the ONE thing that's most wrong?"
7. "What would an expert notice first?"
8. "What am I avoiding looking at?"

**Zoom / Deep Examination (Stage 4):**
9. "What do I see at this scale that I couldn't see before?"
10. "What's happening at the edges?"
11. "What's happening where elements meet?"
12. "What ELSE?" (repeated 3x minimum)
13. "What do I notice?" (initial zoom)

**Naming (Stage 5):**
14. "Even if I'm wrong, what would I call this?"
15. "How would I describe this to someone who can't see it?"
16. "What verb describes what's happening here? (floating, trapped, pressing, lifting...)"

**Re-compare (Stage 8):**
17. "Is this closer or did I make it worse?"
18. "What's STILL wrong?"
19. "What new problem did this fix create?"

**Deepening (Stage 9):**
20. "What haven't I looked at yet?"
21. "What's the thing I've been assuming is fine?"
22. "Where am I afraid to look?"

### 1.2 Sub-Agent Forcing Questions (SKILL.md)

**Sub-Agent B (Deepener):**
23. "What am I seeing that I haven't named?"
24. "If I trace this with my finger, where does it change?"
25. "What's the quality of this space?"
26. "What would be lost if I removed this element?"

### 1.3 Zone-Specific Questions (ZONE-SUB-AGENTS.md)

**Zone 1 - Typography:**
27. "Do the letters feel confident or timid?"
28. "Is there rhythm in the text, or is it flat?"
29. "Do the letter endings feel elegant or blunt?"
30. "Does the headline dominate or recede?"
31. "What's happening at the letter endings?"
32. "How does the thick part relate to the thin part?"
33. "Do the curves feel round or mechanical?"
34. "Does the headline dominate?" (hierarchy sub-step)
35. "Is there clear order?"
36. "What's fighting for attention?"

**Zone 2 - Spacing:**
37. "Is the space confident (generous) or anxious (cramped)?"
38. "What shapes does the whitespace make?"
39. "Does content have room to breathe?"
40. "Is there more content or more chrome?"

**Zone 3 - Containers:**
41. "Is content floating or trapped?"
42. "Are borders containing or accenting?"
43. "Could this work without visible boundaries?"
44. "What creates the grouping -- borders or proximity?"

**Zone 4 - Hierarchy:**
45. "What's the hero element?"
46. "What's supposed to be secondary but isn't?"
47. "Is there clear visual order?"
48. "Where does the eye travel?"

**Zone 5 - Composition:**
49. "Is there tension or just balance?"
50. "Are elements in opposition?"
51. "Does it feel dynamic or static?"
52. "Where is the energy?"

### 1.4 v2 Ship-Readiness Questions (SKILL-v2.md)

**Embedded Mode (Q1-Q3) -- THE CORE THREE:**
53. "What's the first thing that bothers me?"
54. "Is any text uncomfortable to read?"
55. "Would a designer ship this section as-is?"

**Cold Look Protocol:**
56. "My gut says: ___" (first reaction)
57. "The worst thing on this page is: ___"
58. "The best thing on this page is: ___"
59. "Would I ship this? YES / YES WITH RESERVATIONS / NO"

**v2 Zone 1 - Layout & Grid (NEW in v2):**
60. "Is every column wide enough to read comfortably?"
61. "At this viewport, does the grid feel balanced or lopsided?"
62. "Are any cells so narrow that text stacks vertically?"
63. "Does the container width make sense for this content?"
64. "If I resize to 1024px, does it still work?"
65. "If I resize to 800px, does it still work?"
66. "Is the container max-width appropriate for this content?"
67. "Does the column count work within this container?"
68. "Should a breakpoint exist where one doesn't?"
69. "Is any max-width value creating problems downstream?"

**v2 Zone 2 - Typography (same as v1 zone):**
(Duplicates questions 27-30 above)

**v2 Zone 3 - Spacing:**
(Duplicates questions 37-40 above)

**v2 Zone 4 - Containers:**
70. "Are any cards/cells disproportionately tall vs their content?"
71. "Does the grid create awkward empty rectangles?"
(Plus duplicates of 41-42)

**v2 Zone 5 - Hierarchy & Flow:**
72. "Where does my eye go first? Is that correct?"
73. "Can I scan this page and understand the structure?"
74. "Is anything fighting for attention that shouldn't be?"
75. "Does the reading flow match the axis pattern's intent?"

**v2 Zone 6 - Overall Composition (NEW in v2):**
76. "Does this feel like a finished, professional page?"
77. "Is there energy and tension, or is it flat and safe?"
78. "Does it feel consistent with itself?"
79. "What's the ONE thing you'd change if you could only change one thing?"
80. "If this were on a design portfolio, would it impress?" (THE KILLER QUESTION)

**v2 Forcing Questions (hierarchical levels):**

Level 1 -- Surface:
81. "What's the first thing that catches my eye?"
82. "Is anything uncomfortable to read?"
83. "Does anything feel cramped or stretched?"

Level 2 -- Structure:
84. "Does the grid make sense at this width?"
85. "Are all columns earning their space?"
86. "Is there empty space that signals broken layout vs intentional breathing?"

Level 3 -- Architecture:
87. "Why is this container this wide?"
88. "Who decided this column count? Is it backed by research?"
89. "If I change the container width, what breaks? What improves?"

Level 4 -- Ship-Readiness:
90. "Would a designer be proud to show this in a portfolio?"
91. "Would a user find this comfortable to read for 10 minutes?"
92. "If a client saw this, would they ask 'why does this look like that?'"

### 1.5 Protocol Meta-Questions (PERCEPTUAL-DEEPENING-PROTOCOL.md)

**Analytical vs. Perceptual Contrast Pairs:**
93. NOT "What are the CSS properties?" --> "What am I seeing that I can't articulate yet?"
94. NOT "What's the border width?" --> "If I trace this edge with my finger, where does it feel different?"
95. NOT "Is it italic?" --> "What's the quality of this curve that makes it feel THIS way?"
96. NOT "Check for ball terminals" --> "Something about these letter endings is different. What is it?"
97. NOT "Does it have a container?" --> "Why does theirs feel like floating and mine feels trapped?"
98. NOT "What color is it?" --> "What's the quality of this color that makes it punch vs feel muted?"
99. NOT "Is the spacing correct?" --> "Where does the space feel generous vs cramped vs awkward?"

**TOTAL UNIQUE PERCEPTUAL QUESTIONS: ~99** (with overlap removed between v1/v2 zone duplicates, approximately 80 truly distinct questions)

---

## 2. EVERY ANTI-PATTERN DESCRIBING CHECKLIST-ROBOT BEHAVIOR

### 2.1 From PERCEPTUAL-DEEPENING-PROTOCOL.md (7 anti-patterns):

1. **Analytical Escape** -- "Let me check the CSS properties..." The moment you start measuring, you stop seeing. Stay in perceptual mode.

2. **Premature Fixing** -- "I see three things wrong. Let me fix all of them." Fixing multiple things prevents learning which fix worked.

3. **Checklist Regression** -- "Let me verify border-radius is 0, colors are correct..." Checklists give false confidence. Something can pass every check and still feel wrong.

4. **Iteration Skipping** -- "It looks pretty close. 2 iterations is enough." Deepest insights come in iterations 4, 5, 6.

5. **Technical Documentation** -- Soul Discovery: "Changed padding from 16px to 24px." The CSS is not the insight. The PERCEPTION is the insight.

6. **"Nothing New" Surrender** -- "I don't see anything new this iteration." If you're not seeing new things, you're not looking. Look at different scales, different areas, relationships.

### 2.2 From SKILL-v2.md (6 anti-patterns):

7. **Rule Checking in Disguise** -- Q1 answer: "border-radius is 0 on all elements." This is a rule check, not a visual reaction. Good: "the left column text is crushed."

8. **Viewport Tunnel Vision** -- Check at 1440px. Check at 768px. Done. You missed the 1024px range where grids squeeze.

9. **Container vs Viewport Blindness** -- "I added a @media (max-width: 1024px) breakpoint." But the container is 860px. The breakpoint never fires because viewport != container.

10. **Grepping for Existence Instead of Looking** -- "overflow-wrap: break-word exists in the CSS -> PASS." The property exists but the text is still crushed. LOOKING reveals what grepping hides.

11. **Fossilized Convention Worship** -- "max-width: 860px matches the spec -> PASS." The spec has no research backing. The value was fossilized from an arbitrary choice.

12. **Declaring Victory After Writing CSS** -- "Added 1024px breakpoint. DONE." You wrote the CSS but never rendered the page to see if it worked.

### 2.3 From EMBEDDED-PROMPT.md (implicit anti-patterns in examples):

13. **Rule Answers Masquerading as Judgment** -- BAD example: "border-radius is 0 on all elements / fonts correctly loaded / all sections comply with AD-CONVENTION-SPEC" -- These are all rule checks wearing a judgment mask.

**TOTAL ANTI-PATTERNS: 13**

---

## 3. THE PHILOSOPHICAL CORE -- What is the Soul of Perceptual Deepening?

### 3.1 The Central Thesis

The skill is built on ONE fundamental insight:

> **Insights emerge from repeated failure and perceptual deepening, NOT from pre-defined checklists. You don't know what you're looking for until you find it.**

This is stated explicitly in PERCEPTUAL-DEEPENING-PROTOCOL.md and repeated across every file. The entire architecture exists to enforce this principle on agents that naturally default to analytical checklist behavior.

### 3.2 The Discovery Parable

The protocol's philosophy is crystallized in the ball-terminals parable (PERCEPTUAL-DEEPENING-PROTOCOL.md, Part 1):

Ball terminals weren't discovered by someone who knew to look for them. They were discovered by someone who:
1. Built something that looked wrong
2. Asked "what's wrong?"
3. Got a surface answer that didn't fix it
4. Asked "what ELSE is wrong?"
5. Kept looking
6. Noticed something about letter endings
7. Zoomed in
8. Realized: "These have round balls, mine have tapered ends"

The insight emerged from **looking harder at failure**, not from knowing what to check.

### 3.3 The Two Modes of Cognition

The protocol explicitly distinguishes two cognitive modes:

| Analytical Mode (WRONG) | Perceptual Mode (RIGHT) |
|---|---|
| "What are the CSS properties?" | "What am I seeing that I can't articulate yet?" |
| Assumes you know what to look for | Forces you to keep looking until something emerges |
| Produces false confidence | Produces genuine discovery |
| Can be shortcut | Cannot be shortcut |
| Results are verifiable | Results are surprising |

### 3.4 The Soul Piece Ontology

The skill treats design knowledge as having two layers:
- **Primary: Perceptual truths** -- "Content floats, never trapped." These are ways of seeing.
- **Secondary: Technical manifestations** -- "border: none." These are just one possible expression.

The perceptual truth is the durable knowledge. The CSS is ephemeral implementation. This distinction is enforced through the Soul Documenter sub-agent and the SOUL-DISCOVERIES template.

### 3.5 The v2 Addition: Ship-Readiness as Irreducible Question

v2 adds a complementary philosophical position:

> **"Look at the page. Would you ship it?" -- Everything else in this skill exists to force that question into contexts where it would otherwise be replaced by "does this pass the checklist?"**

This is the bridge from individual component soul-matching (v1) to holistic page judgment (v2).

### 3.6 The Core Paradox

The skill is itself a checklist that prevents checklists. It's structured protocol that forces unstructured perception. This is acknowledged implicitly -- the 5-iteration minimum, the zone agent structure, the templates are all scaffolding designed to prevent the very analytical behavior they structurally resemble. The forcing questions are not checklists of things to check; they are prompts to activate a different cognitive mode.

---

## 4. WHAT V1 REQUIRES THAT LIMITS IT

### 4.1 Reference Image Dependency (HARD BLOCKER)

v1 is fundamentally a **reference-matching** protocol. It requires:
- `reference-images/[component-name].png` -- a specific screenshot to compare against
- Side-by-side comparison as the core mechanic
- The squint test compares TWO images
- Convergence is defined as "same visual weight as reference"

**Limitation:** For original work (like AD explorations that don't have a prior reference), v1 cannot run. There is nothing to compare against. The entire loop (squint, point, zoom, name, hypothesize, fix, re-compare) breaks down when one side of the comparison is missing.

### 4.2 Component-Level Scope

v1 operates on individual components:
- Setup requires a specific component selector
- Screenshot protocol targets `.component-header`, `.component-content`, etc.
- Playwright tests use `COMPONENT` environment variable
- Convergence checks a single component's visual weight

**Limitation:** Cannot assess full-page composition, cross-section flow, or page-level coherence. A page could have individually soul-compliant components that collectively create a broken experience (e.g., every component is correct but the page rhythm is flat).

### 4.3 Sequential Sub-Agent Pipeline

v1 deploys sub-agents A -> B -> C -> D -> E in strict sequence:
- Visual Comparator -> Deepener -> Single-Change Implementer -> Evaluator -> Soul Documenter

**Limitation:** Only ONE perceptual lens is applied per iteration. The zone agents (ZONE-SUB-AGENTS.md) provide parallelism, but they exist as a separate file and are not integrated into the main SKILL.md protocol. The orchestrator prompt (TURBO-ORCHESTRATOR.md) uses the sequential A-E pipeline, not the parallel zone model.

### 4.4 Pixel-Diff Dependency

Sub-Agent A generates pixel diff images between reference and attempt.

**Limitation:** Pixel diffs are useful for matching but misleading for judgment. Two pages that are both "good" but different would produce massive pixel diffs. The diff mechanic only makes sense when the goal is replication, not quality assessment.

### 4.5 Design-System-Specific Soul Pieces

The template soul pieces (Content Floats, Typography > Frames, Tension Through Opposition, Single-Edge Accents, Whitespace as Confidence) are specific to the Sanrok/Kortai design language.

**Limitation:** These are not universal perceptual truths. "Content Floats" is a specific design decision, not a universal law of visual quality. A different design system might deliberately use container borders for clarity. The soul pieces conflate design-system-specific preferences with universal perceptual quality.

### 4.6 No Viewport Responsiveness Protocol

v1 captures screenshots at a single viewport size. There is no multi-viewport testing built into the core loop.

**Limitation:** The 860px container + 4-column grid = 143px cell problem (the "narrow column" failure mode that v2 was created to address) would never be caught by v1 because v1 never varies the viewport.

---

## 5. WHAT V2 DRAFT ADDED THAT V1 LACKED

### 5.1 Three Modes (Embedded / Standalone / Quick)

v2 introduces a mode taxonomy:
- **Embedded (30 sec):** MANDATORY for every agent producing visual output. Q1-Q3 before declaring done.
- **Standalone (full protocol):** Deep 5+ iteration visual judgment. Explicitly invoked.
- **Quick (60 sec):** Gut check. Screenshot, react, verdict.

**What this solves:** v1 was always "standalone" -- a heavyweight process you had to explicitly trigger. v2's embedded mode makes visual judgment a default behavior woven into every phase.

### 5.2 Cold Look Protocol

Before reading any rules or specs:
- First reaction (gut feeling)
- Worst thing (specific area)
- Best thing (what to protect)
- Ship verdict (YES / NO / WITH RESERVATIONS)
- Answers are LOCKED -- cannot be changed after reading specs.

**What this solves:** v1 started with side-by-side comparison against a reference. v2's Cold Look captures what a real user would see. The "locked answers" mechanic prevents analytical contamination.

### 5.3 No Reference Image Required

v2's core question is "Would you ship this?" not "Does this match?"

**What this solves:** Eliminates the hard blocker that prevented v1 from running on original work.

### 5.4 Layout & Grid Zone (NEW -- Zone 1 in v2)

v2 adds an entirely new zone that v1 lacked. This zone:
- Forces viewport resizing to 1440, 1024, 768px
- Asks about column width comfort
- Questions whether text stacks vertically
- Interrogates container max-width decisions
- Asks whether breakpoints should exist where they don't

**What this solves:** The "narrow column" failure mode. v2 was literally created because agents built a 4-column grid in an 860px container, producing 143px cells where text stacked one word per line. Every rule passed. Nobody looked.

### 5.5 Overall Composition Zone (NEW -- Zone 6 in v2)

v2 adds a holistic zone asking:
- "Does this feel finished and professional?"
- "Is there energy and tension, or flat and safe?"
- "Does it feel consistent with itself?"
- "THE KILLER QUESTION: If this were on a design portfolio, would it impress?"

**What this solves:** v1 zones (Typography, Spacing, Containers, Hierarchy, Composition) are element-focused. v2's Zone 6 forces page-level holistic judgment.

### 5.6 Architectural Questioning Protocol

When visual problems trace to conventions:
1. Identify root cause
2. Trace provenance ("Where did 860px come from?")
3. Classify: Research-backed / Inherited without justification / Fossilized
4. Propose resolution
5. Escalate to human

**What this solves:** v1 treated conventions as immutable constraints. v2 allows agents to question whether a convention is CAUSING the visual problem.

### 5.7 Multi-Viewport Screenshot Mandate

v2 requires screenshots at 1440px, 1024px, and 768px (and optionally 800px).

**What this solves:** v1's single-viewport blind spot.

### 5.8 Phase Integration Matrix

v2 specifies exactly how visual judgment weaves into each workflow phase:
- Builders: Embedded Mode before declaring done
- Auditors: Standalone Mode with zone agents
- Fixers: Embedded Mode to verify fix worked visually
- Fresh Eyes: Cold Look protocol FIRST
- Verifiers: Quick Mode after programmatic checks
- Lead: Standalone Mode for architectural decisions

**What this solves:** v1 was a standalone tool. v2 is a behavior woven into every role.

### 5.9 Anti-Pattern Expansion

v2 adds 6 new anti-patterns that v1 didn't name:
- Rule Checking in Disguise
- Viewport Tunnel Vision
- Container vs Viewport Blindness
- Grepping for Existence Instead of Looking
- Fossilized Convention Worship
- Declaring Victory After Writing CSS

**What this solves:** v1's anti-patterns were about the deepening process itself (analytical escape, premature fixing). v2's anti-patterns target the broader agent behavior pattern where CSS is written and declared done without visual verification.

### 5.10 Leveled Forcing Questions

v2 organizes forcing questions into 4 depth levels:
- Level 1 (Surface): What catches my eye? Uncomfortable to read?
- Level 2 (Structure): Grid makes sense? Columns earning their space?
- Level 3 (Architecture): Why is this container this wide? Research-backed?
- Level 4 (Ship-Readiness): Portfolio worthy? Comfortable for 10 minutes?

**What this solves:** v1's forcing questions were all at one level. v2 provides escalation when "nothing seems wrong."

---

## 6. WHAT IS STILL MISSING FROM BOTH V1 AND V2

### 6.1 Color Perception

Neither v1 nor v2 has a dedicated zone or question set for color. The only color-related perceptual question in the entire skill is #98: "What's the quality of this color that makes it punch vs feel muted?" (from the analytical-vs-perceptual contrast table in the protocol).

**Missing questions:**
- "Does the color palette feel harmonious or jarring?"
- "Is contrast serving readability or fighting it?"
- "Does the color temperature feel consistent across sections?"
- "Are accent colors drawing the eye to the right places?"
- "Is there a color that feels out of place?"
- "Do dark/light areas create the right mood?"
- "Is the background color helping or hurting the content?"

### 6.2 Motion / Animation / Interaction Perception

Zero questions about animation, transition, scroll behavior, or interaction feedback.

**Missing questions:**
- "Does the page feel alive or dead?"
- "Are transitions smooth or jarring?"
- "Does anything flash, jump, or shift unexpectedly?"
- "Do hover states feel responsive or sluggish?"
- "Is scroll behavior natural or hijacked?"
- "Are loading states graceful or abrupt?"

### 6.3 Consistency Across Pages

Both protocols focus on single-page (v2) or single-component (v1) assessment. Neither provides a mechanism for cross-page consistency judgment.

**Missing questions:**
- "Does this page feel like it belongs with the other pages?"
- "Is the visual language consistent across sections of the site?"
- "Does navigation feel like it's part of the same design?"
- "Would a user experience cognitive dissonance moving between pages?"

### 6.4 Accessibility as Perception

Neither version treats accessibility as a perceptual quality (it's treated as a rule to check). But many accessibility issues ARE perceptual:

**Missing questions:**
- "Can I distinguish all interactive elements from static content?"
- "Is the focus indicator visible and clear?"
- "Does text contrast feel comfortable for extended reading?"
- "Can I understand the page structure from headings alone?"
- "Is there any text I have to squint to read?"

### 6.5 Content / Information Architecture

The skill focuses on visual form but not on whether the CONTENT makes sense visually:

**Missing questions:**
- "Is the information density appropriate for this content type?"
- "Does the visual structure match the logical structure of the content?"
- "Are related items visually grouped and unrelated items separated?"
- "Does the page tell a visual story from top to bottom?"
- "Is the most important information the most visually prominent?"

### 6.6 Scale Perception (Proportional Relationships)

While typography hierarchy is covered, broader scale relationships between all elements are not:

**Missing questions:**
- "Do element sizes feel proportional to their importance?"
- "Is there a consistent scale/rhythm across the page?"
- "Do images/icons feel right-sized for their context?"
- "Are there scale jumps that feel jarring?"

### 6.7 Print/Export Readiness

No consideration of how the design would look in print, PDF export, or reader mode.

### 6.8 Edge Cases in Content

Neither version asks about what happens with extreme content:
- "What if this title were 3x longer?"
- "What if this section had no content?"
- "What if there were 20 items instead of 4?"
- "What if the image were missing?"

### 6.9 Emotional Tone / Brand Alignment

Beyond v2's "would a designer ship this," there's no mechanism for assessing whether the page communicates the right emotional tone:

**Missing questions:**
- "What emotion does this page evoke?"
- "Is the tone serious, playful, clinical, warm, cold?"
- "Does the emotional tone match the content's purpose?"
- "Would the intended audience feel welcomed or intimidated?"

### 6.10 The "First 3 Seconds" Test

Neither version explicitly tests what a user absorbs in the first 3 seconds of seeing a page. The Cold Look is the closest (10-second timer), but it doesn't isolate the instant impression.

### 6.11 Dark Mode / Theme Variants

No questions about how the design holds up across different theme contexts.

### 6.12 Comparison to Professional Standards

v2's "portfolio" question touches this, but there's no structured comparison to the broader web:
- "How does this compare to the best examples of this content type?"
- "What would Stripe/Linear/Vercel do differently here?"

---

## 7. THE ZONE AGENT MODEL -- Complete Analysis

### 7.1 Zones That Exist

**v1 Zones (ZONE-SUB-AGENTS.md):**

| Zone | Focus | Questions | Gaps |
|------|-------|-----------|------|
| Zone 1: Typography | Font rendering, weight, letter spacing, line height, serifs, size hierarchy | 4 main + 6 sub-step | Solid coverage for type. Missing: how type interacts with surrounding elements |
| Zone 2: Spacing & Whitespace | Padding, margins, gaps, negative space shapes, density | 4 main | Good but limited. Missing: rhythm/pattern in spacing, vertical rhythm |
| Zone 3: Containers & Boundaries | Borders, frames, backgrounds, grouping methods | 4 main + border inventory + removal test | Strong. The removal test ("could this be removed?") is uniquely valuable |
| Zone 4: Hierarchy & Dominance | Eye path, dominance, size/weight/color/position relationships | 4 main + first-glance test + dominance mapping + conflict detection | Good structure. Missing: secondary/tertiary read path |
| Zone 5: Composition & Tension | Balance, opposition, weight distribution, energy | 4 main + energy test + opposition test + weight distribution | Covers compositional energy well. Missing: rhythm across the full page |

**v2 Zones (in SKILL-v2.md):**

| Zone | Focus | v1 Equivalent | What's New |
|------|-------|---------------|------------|
| Zone 1: Layout & Grid | Column width, grid balance, viewport responsiveness, container/breakpoint architecture | NONE (entirely new) | Multi-viewport mandate, architectural questioning |
| Zone 2: Typography | Same as v1 Zone 1 | v1 Zone 1 | Identical questions |
| Zone 3: Spacing & Whitespace | Same as v1 Zone 2 | v1 Zone 2 | Identical questions |
| Zone 4: Containers & Boundaries | Same as v1 Zone 3, plus disproportionate height detection and awkward rectangle detection | v1 Zone 3 | 2 new questions |
| Zone 5: Hierarchy & Flow | Eye path, scan-ability, attention competition, reading flow vs intent | v1 Zone 4 | Added "reading flow matches intent" |
| Zone 6: Overall Composition | Professionalism, energy, consistency, one-change question, portfolio killer question | v1 Zone 5 (expanded significantly) | Holistic page-level judgment |

### 7.2 Zone Gaps

**Missing Zones:**

1. **Color & Contrast Zone** -- No zone examines color perception, palette harmony, contrast comfort, or color temperature. This is the single biggest omission.

2. **Motion & Interaction Zone** -- No zone examines animation quality, transition smoothness, hover feedback, scroll behavior.

3. **Responsive Behavior Zone** -- v2's Layout zone partially covers this, but there's no zone dedicated to how the design transforms across breakpoints (not just "does it work" but "does the transformation feel natural").

4. **Content-Form Relationship Zone** -- No zone examines whether the visual form serves the content type. A data table, a narrative essay, and a code example all need different visual treatment, but no zone asks about this.

5. **Cross-Page Consistency Zone** -- Neither version can audit consistency across multiple pages.

### 7.3 Zone Architecture Issues

1. **v1 and v2 zones are defined in different files.** v1's zones are in `ZONE-SUB-AGENTS.md` with full prompts. v2's zones are inline in `SKILL-v2.md` with abbreviated definitions. There's no unified zone registry.

2. **Prompt format inconsistency.** v1 zone prompts follow a strict 5-step structure (Squint Test -> Domain Examination -> Specific Test -> Named Problem -> Hypothesis). v2 zone prompts are freeform question lists without the step structure.

3. **Output format inconsistency.** v1 zones produce structured reports with PRIORITY fields. v2 zones specify "Named problem + hypothesis + priority" as output but don't provide the same templated format.

4. **No zone interaction protocol.** When Zone 1 (Typography) finds "weak headlines" and Zone 4 (Hierarchy) finds "lost hero," these may be the same problem from different angles. Neither version has a mechanism for zone agents to cross-reference findings or detect when they've identified the same root cause through different lenses.

---

## 8. SYNTHESIS: STRENGTHS AND STRUCTURAL ISSUES

### 8.1 Core Strengths

1. **Philosophical coherence.** The perceptual-vs-analytical distinction is clear, well-articulated, and consistently enforced across all files.

2. **Forcing function design.** The skill doesn't just suggest looking -- it structures the looking process to prevent premature analytical escape. The 5-iteration minimum, one-change-per-iteration rule, and forced "What ELSE?" repetitions are genuine cognitive forcing functions.

3. **Anti-pattern library.** 13 named anti-patterns provide concrete examples of what failure looks like. The v2 EMBEDDED-PROMPT.md good-vs-bad examples are particularly effective.

4. **Soul piece ontology.** The distinction between perceptual truth (primary) and technical manifestation (secondary) is philosophically sound and practically useful.

5. **v2's three-mode architecture.** Embedded/Standalone/Quick provides appropriate depth for different contexts. The embedded mode's mandatory Q1-Q3 is the highest-leverage addition.

### 8.2 Structural Issues

1. **Massive file sprawl.** 10 files, ~4,704 lines. The same concepts (squint test, one change per iteration, perceptual not analytical) are repeated across multiple files. A new agent reading this skill encounters significant redundancy.

2. **Unclear canonical authority.** If SKILL.md says 5 zones and SKILL-v2.md says 6 zones, which is authoritative? CLAUDE.md says "v2 is the DEFAULT" but the zone definitions live in separate files with different formats.

3. **v1 and v2 coexistence complexity.** The CLAUDE.md routing (v1 for reference-matching, v2 for ship-readiness) is clear, but the actual skill files don't share components. The zone agents exist twice in different formats.

4. **Template bloat.** The PERCEPTUAL-AUDIT-LOG-TEMPLATE.md is 206 lines of identical iteration blocks (5 copies of the same template). This is copy-paste scaffolding, not useful structure.

5. **Sanrok/Kortai specificity.** The soul pieces and some questions reference a specific design system. A new design system would need to strip these references before the skill is usable.

6. **No empirical validation data.** The skill claims effectiveness but provides no data: how many agents actually run embedded mode? How many v1 protocols reached convergence? What percentage of "BETTER" evaluations were real improvements?

---

## 9. QUESTION DISTRIBUTION ANALYSIS

| Category | v1 Count | v2 Added | Total | Coverage Depth |
|----------|----------|----------|-------|---------------|
| Spatial/Layout | 4 | 10 | 14 | STRONG (v2 fixed v1's gap) |
| Typography | 10 | 0 | 10 | STRONG |
| Spacing/Whitespace | 4 | 0 | 4 | ADEQUATE |
| Containers/Boundaries | 4 | 2 | 6 | ADEQUATE |
| Hierarchy/Flow | 4 | 4 | 8 | STRONG |
| Composition/Energy | 4 | 5 | 9 | STRONG |
| Color/Contrast | 1 | 0 | 1 | CRITICAL GAP |
| Motion/Animation | 0 | 0 | 0 | MISSING ENTIRELY |
| Cross-page consistency | 0 | 0 | 0 | MISSING ENTIRELY |
| Content/IA fit | 0 | 0 | 0 | MISSING ENTIRELY |
| Accessibility (perceptual) | 0 | 0 | 0 | MISSING ENTIRELY |
| Emotional tone | 0 | 1 | 1 | CRITICAL GAP |
| Edge case content | 0 | 0 | 0 | MISSING ENTIRELY |
| Meta-process (squint, zoom, etc.) | 22 | 3 | 25 | STRONG |
| Ship-readiness judgment | 0 | 9 | 9 | STRONG (v2 only) |
| Architectural questioning | 0 | 6 | 6 | ADEQUATE (v2 only) |

**Strongest areas:** Meta-process forcing, typography, composition, spatial/layout (after v2)
**Weakest areas:** Color, motion, cross-page, content/IA, accessibility, emotional tone

---

## 10. KEY TAKEAWAYS FOR V3 SKILL DESIGN

1. **Keep:** The philosophical core (perceptual > analytical), the forcing question mechanism, the anti-pattern library, the soul piece ontology, the embedded mode Q1-Q3.

2. **Consolidate:** The 10-file sprawl into a clean, single-authority skill definition. Eliminate redundancy.

3. **Add zones:** Color/Contrast, Motion/Interaction, and Content/Form at minimum.

4. **Generalize:** Remove Sanrok/Kortai specificity. The skill should work for ANY design system.

5. **Add cross-page capability:** A mechanism for judging consistency across pages, not just within a single page.

6. **Add edge-case content probes:** Questions about what happens when content is too long, too short, missing, or excessive.

7. **Unify zone format:** One zone definition format, one output format, one prompt structure.

8. **Add quantitative signal:** Not to replace perceptual judgment, but to augment it. "This column is 143px wide" is useful AFTER you've noticed "this text is crushed."

9. **Simplify iteration model:** v1's 5-iteration minimum is often excessive for v2-style ship-readiness checks. The three-mode model (Embedded/Standalone/Quick) already handles this, but the standalone mode could use more flexible iteration targets.

10. **Add failure mode taxonomy:** Beyond anti-patterns (how agents fail at the process), add a taxonomy of visual failure modes (what broken pages actually look like) -- narrow columns, orphaned headers, inconsistent spacing rhythms, color temperature shifts, etc.
