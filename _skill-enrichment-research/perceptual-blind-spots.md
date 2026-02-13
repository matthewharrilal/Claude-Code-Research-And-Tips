# Perceptual Auditing Skill — Comprehensive Blind Spot Analysis

**Date:** 2026-02-13
**Analyst:** Recovery Agent
**Skill Version:** perceptual-auditing SKILL.md (436 lines)
**Analysis Depth:** Full protocol PA-01 through PA-28, all 4 modes

---

## 1. Current Protocol Summary

The perceptual-auditing skill implements a 28-question protocol across 4 modes (Embedded, Quick, Standard, Standalone) with these structural components:

**Core Mechanism:**
- **Cold Look Protocol:** 5-second visual reaction BEFORE any research/spec reading
- **Scroll-Through Protocol:** Viewport-scale examination (5-15 screenshots) instead of full-page compression
- **Zone Sweep:** 5-pass analysis (readability, spatial balance, hierarchy/flow, consistency, ship test)
- **Temporal Firewall:** Auditors never see Lock Sheet before recording perceptual reactions
- **Dual Severity Track:** Rule violations (soul/convention) + Perception track (would-not-ship/looks-wrong/could-be-better)

**Coverage:**
- **Tier 1 (PA-01 to PA-05):** Mandatory five — first impression, text comfort, design coherence, focal points, ship verdict
- **Tier 2 (PA-06 to PA-20):** Standard fifteen — readability, spatial balance, visual flow, grid/layout, consistency, color/emotion
- **Tier 3 (PA-21 to PA-28):** Deep dive eight — responsiveness, cross-page coherence, architectural challenge, adversarial

**Strengths:**
- Catches the bento grid catastrophe (130px column, word-stacking)
- Prevents CSS contamination (hard language block on property names)
- Separates perception from research sovereignty
- Detects gestalt discomfort before technical analysis

**The Skill's Purpose:**
- Audit the EXECUTION of research-backed decisions, never the decisions themselves
- React to what you SEE before checking what you KNOW
- Find the gap between "passes rules" and "is good"

---

## 2. Known Blind Spots — Expanded Analysis

### 2.1 No Content-to-Viewport Proportion Check

**Current State:**
PA-02 asks "Is any text uncomfortable to read? Point to the worst spot." This catches cramping (130px columns) but NOT underutilization. A 900px column on a 1440px screen (62.5% utilization) passes all checks.

**Why This Matters:**
- Desktop users with 1440px+ viewports see 400-500px of wasted margin on every page
- No question asks "does this make good use of available screen width?"
- PA-09 asks about "dead space that serves no purpose" but doesn't measure proportional allocation
- PA-21 "does everything look designed for this width, or squeezed?" checks for squeezing, not wasting

**Examples of What Passes:**
- Manuscript codex metaphor → 700px content column centered in 1440px viewport (48.6% utilization)
- Geological core metaphor → 600px narrow column (41.7% utilization)
- Both feel "readable" and "generous" but waste desktop real estate

**Severity:** HIGH — Affects every desktop audit

**Detection Mechanism Missing:**
- No measurement of content-width-to-viewport-width ratio
- No question about whether margins are designed (gradients, texture) or leftover (empty color)
- No distinction between "purposeful negative space" and "accidental wasted space"

---

### 2.2 No Typographic Voice Collision Detection

**Current State:**
The protocol checks typographic consistency (PA-16: "Pick two elements that should look identical. Do they?") but NOT stacking proximity of DIFFERENT typographic voices.

**The Problem:**
When a 0.75rem mono uppercase label sits 12px above a 2.5rem serif heading:
- They are INTENTIONALLY different (different hierarchy, different voice)
- PA-16 doesn't apply (they SHOULDN'T look identical)
- But they COLLIDE perceptually — the transition is jarring

**What Gets Missed:**
- Label-to-heading vertical spacing (12px feels cramped when voices shift dramatically)
- Mono-to-serif transitions without breathing room
- Uppercase-to-sentence-case stacking at close proximity
- Weight jumps (400 to 700) with insufficient vertical buffer

**Current Questions That Might Catch It:**
- PA-17 "Is there a visual rhythm (like a beat in music), or random?" — checks rhythm, not hierarchy spacing
- PA-12 "Do your eyes flow smoothly from section to section?" — checks section flow, not element-to-element hierarchy transitions

**Severity:** MEDIUM-HIGH — Common in all card-based layouts and metadata-heavy pages

**Detection Mechanism Missing:**
- No measurement of vertical gap between hierarchy levels with different typographic treatments
- No question about whether transitions between typographic voices have sufficient breathing room
- No check for "typographic density" (too many voices in too little vertical space)

---

### 2.3 No Metaphor-Driven Visual Compromise Detection

**Current State:**
PA-26 asks "Is any convention CAUSING a visual problem?" and PA-27 asks "Designing from scratch, would you design it this way?"

**The Blind Spot:**
These questions check whether CONVENTIONS hurt perception. They don't check whether the METAPHOR IDEOLOGY itself hurts perception.

**Examples:**
- **Geological core metaphor** → Biases toward narrow columns (simulating drill core width). Audit evaluates "does the metaphor work?" but not "does the narrow column waste 60% of desktop viewport?"
- **Manuscript codex metaphor** → Biases toward wide margins (simulating book gutters). Audit checks "does it feel like a manuscript?" but not "are these margins HURTING spatial efficiency?"
- **Gas town floor plan** → Biases toward boxy, mechanical grids. Audit checks "does it evoke industrial planning?" but not "is the mechanical rigidity making this feel stiff?"

**The Missing Question:**
"Does the metaphor impose visual costs that exceed its conceptual benefits?"

**Severity:** CRITICAL — Metaphor ideology must drive structure but NEVER at the expense of perceptual quality. This is the central tension.

**Detection Mechanism Missing:**
- No evaluation of metaphor implementation costs vs benefits
- No question about whether metaphor-driven constraints (narrow columns, wide margins, mechanical grids) hurt the user experience
- No mechanism to escalate when ideology and perception conflict
- No check for whether the same metaphor could be expressed with less visual cost

---

### 2.4 No Desktop Utilization Assessment

**Current State:**
- PA-21, PA-22, PA-23 check responsive survival at narrow widths (768px, resize 200px narrower, "does this feel designed for this width?")
- NO question asks "does this use 1440px well?"

**The Asymmetry:**
- Mobile degradation is checked rigorously (PA-22: "Would a user with ONLY this screen size feel served or punished?")
- Desktop degradation is NEVER checked
- A layout can waste 40% of desktop viewport and still score YES on every question

**What Gets Missed:**
- 1440px viewport with 900px content = 270px wasted margin on each side
- 1920px viewport (increasingly common) with 900px content = 510px wasted margin on each side
- No question asks "does this layout PUNISH wide-screen users?"

**Severity:** HIGH — Desktop users are a primary audience for documentation/research-heavy content

**Detection Mechanism Missing:**
- No check at 1440px parallel to PA-21's check at 768px
- No question about whether the layout scales UP gracefully (vs just down)
- No measurement of horizontal space utilization at wide viewports

---

## 3. Discovered Blind Spots

### 3.1 No Element Density Assessment Within Containers

**What PA Checks:**
- PA-14: "Does every column have enough room for its content to breathe?"
- PA-09: "Is there dead space that serves no purpose?"

**What Gets Missed:**
RELATIVE density across containers on the same page. Example:
- Container A: 8 elements in 600px height (75px per element)
- Container B: 3 elements in 600px height (200px per element)
- Both pass PA-14 (content has room to breathe)
- But the DENSITY MISMATCH creates visual imbalance

**Why This Matters:**
Bento grids and multi-column layouts often have uneven density. One card feels cluttered while its neighbor feels empty. The audit checks each container individually but not the RELATIONSHIP between container densities.

**Severity:** MEDIUM — Affects bento grids, dashboard layouts, card collections

**Detection Mechanism Missing:**
- No comparison of element count across containers
- No question about whether density variation is intentional or accidental
- No check for whether containers with 5+ competing elements create "control panel vs pile" perception

---

### 3.2 No Vertical Rhythm Disruption Detection

**What PA Checks:**
- PA-17: "Is there a visual rhythm (like a beat in music), or random?"

**What Gets Missed:**
PA-17 checks for rhythmic section sequencing but NOT for baseline grid disruption. Example:
- Body text on 1.7 line-height (27.2px for 16px font)
- Headings on 1.2 line-height (36px for 30px font)
- If spacing doesn't align to a shared baseline grid, text visually "drifts"

**Why This Matters:**
Vertical rhythm is about MATHEMATICAL alignment, not just "does it feel rhythmic?" A page can feel "mostly fine" but have subtle baseline misalignment that creates low-grade visual discomfort.

**The Protocol Doesn't Ask:**
"If you drew horizontal lines across the page every 24px (or 8px, or 4px), would text baselines align or drift?"

**Severity:** LOW-MEDIUM — Subtle quality issue, rarely catastrophic

**Detection Mechanism Missing:**
- No check for baseline grid alignment
- No question about whether vertical spacing follows mathematical intervals
- No detection of "drift" where rhythm is established then broken

---

### 3.3 No Color Weight Distribution Across Page

**What PA Checks:**
- PA-18: "Do all the grays/neutrals feel like the same family?"
- PA-10: "If you squint until you can't read text, does the layout look balanced?"

**What Gets Missed:**
PA-18 checks color FAMILY consistency. PA-10 checks SPATIAL balance. Neither checks COLOR WEIGHT distribution.

**Example:**
- Top third of page: light grays (#f5f5f5 backgrounds, #666 text)
- Bottom third of page: dark grays (#2a2a2a backgrounds, #fff text)
- Color families are internally consistent, spatial balance is fine, but the page feels "bottom-heavy"

**Why This Matters:**
Color weight creates visual gravity. A page with all dark elements clustered at the bottom feels like it's sinking. The protocol checks individual color choices but not DISTRIBUTION.

**The Missing Question:**
"Does the page feel visually balanced in terms of light/dark distribution, or does one section feel heavier?"

**Severity:** MEDIUM — Affects multi-section pages, landing pages, collection views

**Detection Mechanism Missing:**
- No squint test applied to FULL PAGE (only viewport)
- No question about whether visual weight (darkness, density) is distributed purposefully
- No check for whether dark sections create "sinking" or "heaviness" across the scroll journey

---

### 3.4 No Negative Space Quality Assessment (Purposeful vs Leftover)

**What PA Checks:**
- PA-09: "Is there dead space that serves no purpose?"
- PA-11: "Are the margins generous (confident) or anxious (clutching)?"

**What Gets Missed:**
The QUALITY of negative space. Example:
- **Purposeful negative space:** Designed silence. Breathing room between major sections. Feels intentional.
- **Leftover negative space:** Accidental gaps from grid math. Unintentional margins from max-width constraints. Feels arbitrary.

**Why This Matters:**
Both pass PA-09 (space doesn't feel "dead" — there's content above and below). Both might pass PA-11 (margins feel "generous"). But one feels DESIGNED and the other feels LEFTOVER.

**The Missing Question:**
"Does the negative space feel like a design choice or a grid accident?"

**Severity:** MEDIUM — Separates "good enough" from "polished"

**Detection Mechanism Missing:**
- No distinction between "active" (deliberately shaped), "passive" (leftover from mechanics), and "transitional" (marking boundaries) negative space
- No question about whether the largest empty areas feel like "silence in music" (purposeful) or "dropped signal" (accidental)

---

### 3.5 No Visual Momentum/Pacing Through Scroll

**What PA Checks:**
- PA-12: "Do your eyes flow smoothly from section to section?"
- PA-13: "Is there a clear visual ending, or does the page just stop?"
- **Scroll-Through Protocol:** Explicitly examines "section transitions, jarring jumps, dead zones, narrative momentum"

**What Gets Missed:**
PACING. The rhythm of information density as you scroll. Example:
- First 2000px: Dense content, rapid information
- Next 1000px: Spacious, slow-paced
- Last 500px: Dense again

This creates a "visual stutter" — the page accelerates, slows, accelerates. PA-12 checks flow between sections but not PACING across the entire scroll journey.

**Why This Matters:**
Narrative momentum is about MORE than smooth transitions. It's about whether the scroll experience feels evenly paced or erratic.

**The Missing Question:**
"Does the page maintain consistent pacing as you scroll, or does it speed up and slow down erratically?"

**Severity:** MEDIUM — Affects long-form documentation, tutorials, research pages

**Detection Mechanism Missing:**
- No question about where interest peaks and valleys during scroll
- No check for "dramatic moment" placement (climactic visual change)
- No detection of repetition that creates monotony (same pattern 5+ times)
- No assessment of whether engagement DECAYS as you scroll (momentum loss)

---

### 3.6 No Responsive Utilization Check (Only Survival)

**What PA Checks:**
- PA-21: "Does everything look designed for this width, or squeezed?"
- PA-22: "Would a user with ONLY this screen size feel served or punished?"
- PA-23: "What breaks if you resize 200px narrower?"

**What Gets Missed:**
These questions check whether responsive layouts SURVIVE at different widths. They don't check whether responsive layouts UTILIZE the available width well.

**Example:**
- 768px viewport
- Content column: 600px (78.1% utilization)
- Mobile-first design uses full width at 375px (93%+ utilization)
- At 768px, layout "survives" but wastes 168px of horizontal space

**The Missing Question:**
"At this viewport width, does the layout use the available space efficiently, or does it leave substantial unused margins?"

**Severity:** MEDIUM — Affects tablet viewports (768px-1024px) where layouts often underutilize

**Detection Mechanism Missing:**
- No check for whether responsive behavior makes SENSE (vs just not breaking)
- No question about whether element reorganization is semantically appropriate
- No measurement of space utilization at intermediate breakpoints

---

### 3.7 No Distinction Between "Readable" and "Well-Proportioned"

**What PA Checks:**
- PA-02: "Is any text uncomfortable to read?"
- PA-07: "Can you read the longest paragraph without losing your place?"
- PA-08: "Is there any text you have to lean in or squint to read?"

**What Gets Missed:**
These questions check READABILITY. They don't check PROPORTIONAL APPROPRIATENESS.

**Example:**
- 16px font at 70 characters per line (CPL) in a 600px column — perfectly readable
- Same text at 90 CPL in an 800px column — still readable, but less optimal
- Same text at 50 CPL in a 400px column — readable but feels cramped

All three pass PA-02, PA-07, PA-08. But only the first is well-proportioned.

**Why This Matters:**
The protocol catches BAD readability but not SUBOPTIMAL proportion. There's a gap between "this is readable" and "this is the right line length for this font size."

**The Missing Question:**
"Is the line length proportionally appropriate for the font size and reading context?"

**Severity:** MEDIUM — Affects all text-heavy pages

**Detection Mechanism Missing:**
- No check for optimal CPL range (55-75 for body text)
- No question about whether line length feels "just right" vs "merely acceptable"

---

### 3.8 No Distinction Between "No Errors" and "Feels Designed"

**What PA Checks:**
- PA-05: "Would you put your name on this? What would you fix first?"
- **Perception Track:** WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER

**What Gets Missed:**
PA-05 asks "would you ship this?" and the Perception Track has a WOULD-NOT-SHIP category. But there's no explicit category for "technically correct but feels undesigned."

**Example:**
A page that:
- Passes all soul rules
- Passes all convention checks
- Has no readability issues
- Has balanced layout
- But feels GENERIC — like a Bootstrap default with content swapped in

**The Gap:**
The protocol catches ERRORS (would-not-ship, looks-wrong) and POLISH OPPORTUNITIES (could-be-better). It doesn't explicitly check for the presence of DESIGN INTENTION.

**The Missing Question:**
"Does this feel like a designer made intentional choices, or does it feel like someone applied a template?"

**Severity:** LOW-MEDIUM — Separates "shippable" from "distinctive"

**Detection Mechanism Missing:**
- No question about whether there's a "highlight moment" worth showing as example of good design
- No comparative quality check ("among 5 options, would this be first or last choice?")
- No check for whether the page has VOICE vs just following rules

---

### 3.9 No Detection of When Protocol Catches Mediocrity vs Only Breakage

**What PA Checks:**
The entire protocol is built around catching visual problems. But there's no META-CHECK on whether the protocol is catching MEDIOCRITY or only CATASTROPHIC BREAKAGE.

**Example Scenarios:**

| Scenario | PA Catches? | Quality Level |
|----------|-------------|---------------|
| 130px bento column, word-stacking | YES (PA-02, PA-06, PA-14) | CATASTROPHIC |
| 900px column on 1440px screen | NO | MEDIOCRE UTILIZATION |
| Readable but 90 CPL text | NO | SUBOPTIMAL PROPORTION |
| Consistent but generic design | MAYBE (PA-05) | MEDIOCRE INTENTION |
| Light-dark imbalance | MAYBE (PA-10) | SUBTLE IMBALANCE |

**The Realization:**
The protocol reliably catches BREAKAGE but inconsistently catches MEDIOCRITY. There's no question that asks "is this audit detecting problems along the full quality spectrum, or only the severe ones?"

**The Missing Meta-Question:**
"Are we catching the difference between 'B+' and 'A' work, or only the difference between 'F' and 'C'?"

**Severity:** LOW — Meta-level quality concern, not a page-level finding

**Detection Mechanism Missing:**
- No quality spectrum self-check (do findings span catastrophic to subtle?)
- No verification that audit catches ceiling (inspiration) not just floor (breakage)

---

### 3.10 No Compression Limit Detection (When Metaphorical Compression Becomes Cramping)

**What PA Checks:**
- PA-02: "Is any text uncomfortable to read?"
- PA-14: "Does every column have enough room for its content to breathe?"

**What Gets Missed:**
These questions check whether content is CRAMPED. They don't check whether METAPHORICAL COMPRESSION has crossed the line into visual discomfort.

**Example:**
The geological core metaphor calls for narrow columns (simulating drill core diameter). At what point does "narrow column (metaphor-driven)" become "cramped column (perceptual failure)"?

- 600px column: Metaphor works, readability fine
- 450px column: Metaphor still present, readability starting to suffer
- 300px column: Metaphor intact, but text is CRAMPED

**The Problem:**
PA-02 and PA-14 will catch the 300px case. But they don't ask "is the metaphor being pursued BEYOND the point where it serves perception?"

**The Missing Question:**
"Is the metaphor's structural constraint (narrow columns, wide margins, mechanical grids) being applied to a degree that HARMS the user experience?"

**Severity:** MEDIUM-HIGH — Directly addresses the ideology-perception tension

**Detection Mechanism Missing:**
- No check for when metaphor-driven constraints become EXCESSIVE
- No question about whether the SAME metaphor could be expressed with less extreme constraints
- No cumulative cost assessment (multiple small metaphor compromises adding up)

---

### 3.11 No Label Hierarchy Spacing Check (Minimum Gaps Between Different Hierarchy Levels)

**What PA Checks:**
- PA-16: "Pick two elements that should look identical. Do they?"
- PA-17: "Is there a visual rhythm (like a beat in music), or random?"

**What Gets Missed:**
The MINIMUM SPACING required between DIFFERENT hierarchy levels. Example:

```
[0.75rem MONO UPPERCASE LABEL]
     ↓ (12px gap)
[2.5rem SERIF HEADING]
     ↓ (16px gap)
[1rem BODY TEXT]
```

**The Questions:**
1. Is 12px enough space between label and heading when they have such different voices?
2. Is 16px enough space between heading and body text when the size ratio is 2.5:1?
3. Should the gap SCALE with the typographic contrast?

**Why PA Misses This:**
- PA-16 checks consistency WITHIN hierarchy levels (two labels should match)
- PA-17 checks overall rhythm (does the page feel rhythmic?)
- Neither checks TRANSITION SPACING between hierarchy levels

**The Missing Question:**
"Is there sufficient vertical space between hierarchy levels to prevent visual collision, especially where typographic voices change dramatically?"

**Severity:** MEDIUM-HIGH — Affects all multi-level typographic layouts (very common)

**Detection Mechanism Missing:**
- No measurement of gaps between different hierarchy levels
- No check for whether spacing scales with typographic contrast (bigger contrast = bigger gap needed)

---

### 3.12 No Check for When Conventions Fossilize Good Ideas Into Bad Execution

**What PA Checks:**
- PA-26: "Is any convention CAUSING a visual problem?"

**What Gets Missed:**
PA-26 asks whether conventions cause problems. It doesn't ask whether conventions that WERE good ideas have BECOME bad ideas over time.

**Example:**
- Convention: "Use 2px borders for section dividers" (established in 2024)
- Context 2024: 5 pages, 20 sections, 40 border instances — feels cohesive
- Context 2026: 12 pages, 80 sections, 200 border instances — THE 2PX BORDER EPIDEMIC

**The Problem:**
The convention wasn't wrong when established. It became wrong through ACCUMULATION. PA-26 asks "is this convention causing a problem?" but doesn't ask "has this convention BECOME a problem over time?"

**The Missing Question:**
"Are there conventions that were appropriate at one scale but have become visual liabilities at the current scale?"

**Severity:** MEDIUM — Affects long-lived design systems with growing page counts

**Detection Mechanism Missing:**
- No check for convention accumulation effects
- No question about whether scale has changed the appropriateness of a convention

---

### 3.13 No Header-to-Content Proportion Assessment

**What PA Checks:**
- PA-04: "Where does your eye go first? Is that where it SHOULD go?"
- PA-15: "Trace the left edge of every content block. How many starting positions?"

**What Gets Missed:**
Neither evaluates whether the HEADER AREA (title, metadata, navigation, provenance) is proportional to the CONTENT AREA.

**Example:**
Header area includes:
- Monospace uppercase label
- Clearance level badge
- Title (large serif)
- Subtitle
- Quote
- Provenance metadata grid

This consumes 35% of first viewport, leaving only 65% for content. At 768px, header pushes ALL content below the fold.

**The Missing Question:**
"How much of the first viewport is header/metadata/navigation versus actual content? Does the header feel like a doorway (inviting) or a lobby (making you wait)?"

**Severity:** MEDIUM — Affects all pages with substantial header metadata

**Detection Mechanism Missing:**
- No measurement of header-to-content ratio in first viewport
- No question about whether header proportion is appropriate for the content type

---

### 3.14 No Internal Container Hierarchy Assessment

**What PA Checks:**
- PA-04: "Where does your eye go first?" (page-level hierarchy)
- PA-14: "Does every column have enough room for its content to breathe?" (container breathing)

**What Gets Missed:**
Hierarchy WITHIN a container — whether elements inside a card, callout, or section have clear primary-secondary-tertiary reading order.

**Example:**
Stats bar contains: "850+ lines", "2026-01-10", "Mode A", "3 agents", "Runtime: 45min"

All five values displayed at equal visual weight. Are they equally important? Should "850+ lines" be larger/bolder than the date? The protocol checks readability and breathing but not internal hierarchy.

**The Missing Question:**
"Within any card/callout/info-box, is there a clear reading order (title, then key point, then detail)? Or do all elements compete at the same weight?"

**Severity:** MEDIUM — Affects cards, callouts, metadata strips, all bounded containers

**Detection Mechanism Missing:**
- No check for visual hierarchy within containers
- No question about whether 5+ elements in a container have differentiated importance

---

### 3.15 No Implicit vs Explicit Metaphor Assessment

**What PA Checks:**
- PA-20: "Describe this page's personality in three words. Does it match intent?"
- PA-03: "Does this feel like one designer made it, or three?"

**What Gets Missed:**
HOW a metaphor communicates — whether through structure (implicit, felt) or through labels (explicit, announced).

**Example:**
- **Structural/implicit:** Elevation Map's graduated backgrounds (you FEEL the ascent)
- **Labeled/explicit:** City Zoning's "MAIN STREET -- CONNECTING DISTRICTS" (you READ about the map)

The first is higher quality. The protocol checks whether metaphor is coherent but not whether it's structural or textual.

**The Missing Question:**
"If you removed all text labels, could you still sense the metaphor from visual structure alone?"

**Severity:** MEDIUM — Separates great metaphor execution from mediocre

**Detection Mechanism Missing:**
- No check for whether metaphor is felt (structural) vs read (labeled) vs told (announced)
- No question about over-labeling (when labels become the PRIMARY way the metaphor communicates)

---

### 3.16 No Transition Quality Assessment

**What PA Checks:**
- PA-12: "Do your eyes flow smoothly from section to section?"

**What Gets Missed:**
PA-12 is binary: smooth or stuck. It doesn't evaluate QUALITY of transitions — whether they're designed, earned, or just accidental gaps.

**Example Transitions:**
- Designed: Background gradient shift + breathing text ("The journey from apprentice to master begins...")
- Invisible: Simple full-width rule
- Dramatic: Light-to-dark background change
- Accidental: Just empty vertical space between sections

**The Missing Question:**
"Pick the transition between any two major sections. Is it a DESIGNED moment (intentional visual shift) or just empty space between unrelated blocks?"

**Severity:** MEDIUM — Affects pacing and narrative flow

**Detection Mechanism Missing:**
- No check for whether transitions are purposeful vs accidental
- No question about whether transitions EARN the pause they create

---

## 4. Proposed New Questions and Checks

### 4.1 New Core Questions (Proposed PA-29 to PA-45)

| ID | Question | What It Catches | Tier |
|----|----------|-----------------|------|
| **PA-29** | At this viewport width, what percentage of horizontal space is content vs margins? Does it feel right? | Desktop underutilization, margin waste (K-1, K-4) | Tier 2 |
| **PA-30** | Find a label-to-heading transition. Is there enough breathing room between hierarchy levels? | Typographic voice collision, hierarchy spacing (K-2, 3.11) | Tier 2 |
| **PA-31** | Does the metaphor impose visual costs (narrow columns, wide margins, heavy sections) that hurt the experience? | Metaphor-driven visual compromise (K-3, 3.10) | Tier 3 |
| **PA-32** | Could the same metaphor be communicated with less visual cost? | Metaphor compression limits (K-3, 3.10) | Tier 3 |
| **PA-33** | Compare visual density of any two containers. Does density mismatch feel intentional or accidental? | Element density imbalance (3.1) | Tier 2 |
| **PA-34** | Does negative space feel like a design choice or a grid accident? | Negative space quality (3.4) | Tier 2 |
| **PA-35** | As you scroll, does pacing stay consistent or speed up and slow down erratically? | Visual momentum/pacing (3.5) | Tier 2 |
| **PA-36** | Where does your interest peak as you scroll? Where do you start skimming? | Scroll momentum, engagement decay (3.5) | Tier 2 |
| **PA-37** | Is there a dramatic moment where visual treatment changes to signal importance? Where? | Dramatic placement, climactic visual change (3.5) | Tier 2 |
| **PA-38** | Are any patterns repeated more than 4 times without variation? Does repetition serve purpose? | Repetition monotony (3.5) | Tier 2 |
| **PA-39** | Is line length proportionally appropriate for font size, or just "readable enough"? | Readable vs well-proportioned (3.7) | Tier 2 |
| **PA-40** | Does this feel like a designer made intentional choices, or like someone applied a template? | Generic vs designed distinction (3.8) | Tier 3 |
| **PA-41** | Is there a single moment you'd show as an example of good design? Can you point to it? | Design highlight, inspiration vs mediocrity (3.8) | Tier 3 |
| **PA-42** | How much of first viewport is header/metadata vs content? Doorway or lobby? | Header-to-content proportion (3.13) | Tier 2 |
| **PA-43** | Within any card/callout, is there clear reading order or do all elements compete at same weight? | Internal container hierarchy (3.14) | Tier 2 |
| **PA-44** | If you removed all text labels, could you still sense the metaphor from visual structure alone? | Implicit vs explicit metaphor (3.15) | Tier 3 |
| **PA-45** | Pick any transition between sections. Is it DESIGNED or just empty space? Does it earn the pause? | Transition quality (3.16) | Tier 2 |

---

### 4.2 Enhanced Zone Sweep (6 Dimension Passes)

**Current Zone Sweep (5 passes):**
1. Readability
2. Spatial Balance (Squint Test)
3. Hierarchy and Flow
4. Consistency
5. The Ship Test

**Proposed PASS 6: UTILIZATION CHECK**
- At 1440px: Does layout use horizontal space efficiently or waste it?
- At 768px: Does layout adapt to make use of available width or keep narrow?
- At 1920px: Does layout scale up gracefully or leave massive empty margins?

**What It Adds:**
Explicitly checks desktop utilization, not just mobile survival. Catches manuscript metaphor margin waste and geological core underutilization.

---

### 4.3 Metaphor Cost-Benefit Check (New Gate for Tier 3)

**When:** Standalone mode only (PA-31, PA-32)
**What:** Before final verdict, explicitly evaluate metaphor-driven constraints

**Template:**
```markdown
## METAPHOR COST-BENEFIT

**Metaphor:** [Geological core / Manuscript codex / Gas town floor plan / etc]

**Structural Constraints Imposed:**
- [Narrow columns / Wide margins / Mechanical grids / etc]

**Perceptual Costs:**
- [Desktop underutilization / Wasted horizontal space / Visual stiffness / etc]

**Conceptual Benefits:**
- [Evokes research depth / Simulates archival feel / etc]

**Verdict:** COSTS JUSTIFIED / COSTS EXCEED BENEFITS / BORDERLINE
```

**Critical Rule:**
If COSTS EXCEED BENEFITS, finding goes on Perception Track as LOOKS-WRONG or WOULD-NOT-SHIP regardless of whether metaphor is research-backed.

---

### 4.4 Hierarchy Transition Spacing Matrix (New Check for Tier 2)

**What:** Measure vertical spacing between different typographic hierarchy levels
**When:** Standard + Standalone modes, Auditor B (readability)

**Template:**
```markdown
## HIERARCHY TRANSITION SPACING

| From | To | Gap (px) | Typographic Contrast | Sufficient? |
|------|-----|----------|----------------------|-------------|
| Label (0.75rem mono uppercase) | Heading (2.5rem serif) | 12px | HIGH (size + family + case) | NO — too tight |
| Heading (2.5rem serif) | Body (1rem serif) | 16px | MEDIUM (size only) | YES |
| Body (1rem) | Label (0.75rem) | 8px | LOW (size + case) | BORDERLINE |

**Finding:** Label-to-heading transition at 12px with HIGH contrast feels cramped. Recommend 20-24px.
```

---

### 4.5 Desktop Utilization Report (New Output Artifact)

**When:** Standard + Standalone modes
**What:** Explicit measurement of content-to-viewport ratio at each breakpoint

**Template:**
```markdown
## DESKTOP UTILIZATION REPORT

| Viewport | Content Width | Utilization | Verdict |
|----------|---------------|-------------|---------|
| 1440px   | 900px         | 62.5%       | ACCEPTABLE (60-75% standard) |
| 1920px   | 900px         | 46.9%       | POOR (massive margin waste) |
| 768px    | 600px         | 78.1%       | GOOD |

**Findings:**
- At 1920px, 510px margin each side feels wasteful
- Recommend responsive max-width scaling or multi-column layout at wide viewports
```

---

### 4.6 Quality Spectrum Self-Check (New Lead Verification Gate)

**When:** After synthesis, before final commit
**What:** Lead evaluates whether findings span quality spectrum

**Checklist:**
```markdown
## QUALITY SPECTRUM CHECK

Findings distribution:
- [ ] At least 1 CATASTROPHIC finding (F-grade) OR explicit confirmation none exist
- [ ] At least 2 SUBOPTIMAL findings (B-grade → A-grade gap)
- [ ] At least 1 SUBTLE finding (polish opportunity)

If all catastrophic → audit may have missed subtle issues
If all subtle → audit may have missed real problems
If no findings → spawn adversarial agent with "predecessors found nothing"
```

---

## 5. Ideology-Perception Balance Principle

### 5.1 The Central Tension

**The Metaphor Ideology Must:**
- Drive structure and compositional grammar
- Impose constraints that create coherence
- Bias layouts toward metaphor-consistent patterns

**Perception Must:**
- Evaluate the EXECUTION of those constraints
- Detect when constraints HARM user experience
- Provide escape valves when ideology hurts quality

### 5.2 The Fine Line

**Research-Backed ≠ Perceptually Immune**

A decision can be:
- Justified by research (geological core = narrow columns)
- Locked as a design decision
- AND STILL cause perceptual harm if executed poorly

**The Protocol Must:**
1. **PROTECT** the decision (narrow columns are intentional)
2. **AUDIT** the execution (are columns TOO narrow? 600px vs 300px?)
3. **ESCALATE** when ideology and perception genuinely conflict

### 5.3 The Three-Tier Sovereignty Model (Refined)

| Tier | Status | Perceptual Audit Scope | Example |
|------|--------|------------------------|---------|
| **ALWAYS-LOCKED** | Soul rules | NEVER challengeable | border-radius: 0 |
| **LOCKED** | Research-backed decisions | Decision protected, EXECUTION auditable | Narrow columns (metaphor-driven) — audit DEGREE of narrowness |
| **CHALLENGEABLE** | Conventions, builder choices | Fully auditable | 2px borders, specific spacing values |

### 5.4 The New Escalation Path

**When a finding attacks LOCKED execution:**

1. **Classify:** Is problem the DECISION (narrow columns) or EXECUTION (300px too narrow)?
2. **If execution:** VALID finding — "narrow columns correct, but 300px crosses into cramping"
3. **If decision:** Check whether metaphor costs exceed benefits (PA-31)
4. **If costs exceed benefits:** ESCALATE to human — "research says narrow, perception says it hurts"

**Critical Principle:**
The metaphor ideology earns the right to impose constraints by SERVING perception, not by OVERRULING it. When the two conflict, human judgment required.

### 5.5 The "Would I Ship This?" Modified Test

**Current PA-05:** "Would you put your name on this? What would you fix first?"

**Enhanced PA-05 (Proposed):**
"Would you put your name on this? If no, is it because:
- (A) Technical errors (breakage, bugs, rule violations)
- (B) Metaphor costs exceed benefits (ideology hurting perception)
- (C) Mediocre execution (not broken, just not good)
- (D) Generic/undesigned (passes rules, lacks intention)"

**Why This Matters:**
Forces auditors to distinguish "wouldn't ship because BROKEN" vs "wouldn't ship because MEDIOCRE" vs "wouldn't ship because METAPHOR hurts more than helps."

### 5.6 Structural vs Textual Metaphor Spectrum

The best metaphors are FELT, not READ:

| Level | How Metaphor Communicates | Quality | Example |
|-------|--------------------------|---------|---------|
| **Structural** | Spatial organization, color progression, visual weight | HIGHEST — reader FEELS it | Elevation Map graduated backgrounds |
| **Atmospheric** | Palette, typography, vocabulary choices | HIGH — reader SENSES it | Archival vault clearance progression |
| **Labeled** | Explicit text labels on structural elements | MEDIUM — reader READS ABOUT it | City Zoning "MAIN STREET" labels |
| **Announced** | Section titles, connector labels, zone names | LOW — reader is TOLD about it | Floor Plan "EXECUTIVE CORRIDOR" |

**The Audit Should:**
- Check where on this spectrum each layout falls (PA-44)
- Flag when metaphor has drifted from structural to announced
- Push implementation toward highest-quality expression
- NOT destroy the metaphor, but elevate its execution

---

## 6. Synthesis and Recommendations

### 6.1 Critical Blind Spots (Fix First)

1. **No desktop utilization check** (K-1, K-4, 3.6) — Add PA-29, Desktop Utilization Report, Zone Sweep Pass 6
2. **No metaphor cost-benefit evaluation** (K-3, 3.10) — Add PA-31, PA-32, Metaphor Cost-Benefit Check
3. **No typographic hierarchy spacing** (K-2, 3.11) — Add PA-30, Hierarchy Transition Spacing Matrix
4. **No scroll momentum/pacing** (3.5) — Add PA-35, PA-36, PA-37, PA-38

### 6.2 Important Blind Spots (Add to Tier 2/3)

5. **No element density assessment** (3.1) — Add PA-33
6. **No color weight distribution** (3.3) — Enhance PA-10 with full-page squint
7. **No negative space quality** (3.4) — Add PA-34
8. **No readable vs well-proportioned** (3.7) — Add PA-39
9. **No header proportion check** (3.13) — Add PA-42
10. **No internal container hierarchy** (3.14) — Add PA-43

### 6.3 Refinement Blind Spots (Polish/Tier 3)

11. **No mediocrity detection** (3.8) — Add PA-40, PA-41, enhance PA-05
12. **No implicit vs explicit metaphor** (3.15) — Add PA-44
13. **No transition quality** (3.16) — Add PA-45
14. **No vertical rhythm disruption** (3.2) — Enhance PA-17
15. **No fossilized convention check** (3.12) — Enhance PA-26
16. **No quality spectrum self-check** (3.9) — Add Lead verification gate

### 6.4 Implementation Priority

**Phase 1 (Immediate — Next Audit):**
- Add PA-29 (desktop utilization)
- Add PA-30 (hierarchy spacing)
- Add PA-31, PA-32 (metaphor cost-benefit)
- Add PA-35, PA-36 (scroll momentum)
- Add Desktop Utilization Report to output artifacts
- Add Metaphor Cost-Benefit Check to Standalone mode

**Phase 2 (Next Skill Revision):**
- Add remaining PA-33 through PA-45
- Add Hierarchy Transition Spacing Matrix
- Add Zone Sweep Pass 6
- Add Quality Spectrum Self-Check gate
- Enhance PA-05 with failure-mode taxonomy
- Enhance PA-10 with full-page color weight check

**Phase 3 (Long-Term Refinement):**
- Temporal Firewall extension (auditors don't see metaphor rationale)
- Enhanced Cold Look with structural-vs-textual metaphor check
- Cumulative metaphor cost assessment (multiple small compromises)

---

## 7. The One Question That Would Catch the Most

If only ONE question could be added to Tier 1 (Mandatory Five), it should be:

> **"Does this page EARN its space? Does every viewport-sized chunk contain something worth the reader's attention?"**

This single question catches:
- Dead zones (chunks with nothing)
- Poor proportion (chunks where content is small in empty space)
- Monotony (chunks repeating previous chunks)
- Pacing failure (chunks where engagement drops)
- Metaphor overreach (chunks where metaphor takes more space than content)

It addresses the fundamental gap: **The protocol catches things that are WRONG but not things that are WASTEFUL.**

---

## 8. Blind Spot Taxonomy

The 16 discovered blind spots cluster into 4 categories:

### 8.1 PROPORTION Blindness (K-1, K-4, 3.6, 3.7, 3.13)
The protocol tests whether things FIT but not whether they USE SPACE WELL
- Content-to-viewport ratio
- Desktop utilization
- Responsive utilization
- Readable vs well-proportioned
- Header-to-content proportion

### 8.2 TEMPORAL Blindness (3.2, 3.5, 3.16)
The protocol tests STATIC snapshots but not EXPERIENCE of scrolling
- Vertical rhythm disruption
- Visual momentum/pacing
- Scroll engagement decay
- Transition quality

### 8.3 METAPHOR Blindness (K-3, 3.10, 3.15)
The protocol evaluates metaphor coherence but not perceptual cost
- Metaphor-driven visual compromise
- Compression limits
- Implicit vs explicit expression
- Cumulative metaphor costs

### 8.4 QUALITY CEILING Blindness (K-2, 3.1, 3.3, 3.4, 3.8, 3.11, 3.14)
The protocol catches floor (breakage) but not ceiling (inspiration vs mediocrity)
- Typographic voice collision
- Element density imbalance
- Color weight distribution
- Negative space quality
- Generic vs designed
- Hierarchy spacing
- Internal container hierarchy

---

**END OF REPORT**

**Total Blind Spots Identified:** 16 (4 known + 12 discovered)
**New Questions Proposed:** 17 (PA-29 through PA-45)
**Critical Fixes Required:** 4
**Skill Enhancement Potential:** HIGH

The perceptual-auditing skill is STRONG at catching catastrophic breakage and technical errors. It is WEAK at detecting mediocrity, desktop underutilization, metaphor-driven compromises, scroll momentum, and the gap between "readable" and "well-proportioned." The proposed enhancements close these gaps while preserving the skill's core strength: **React to what you see before you check what you know.**
