# PA Question Deep Analysis -- Telescopic Visual Quality Assessment

**Agent:** pa-question-analyst
**Date:** 2026-02-23
**Source corpus:** 65 PA questions (artifact-pa-protocol.md), 9 auditor reports (A-I), 1 integrative report, 1 verdict report
**Method:** Macro/Meso/Micro telescopic analysis

---

## PART 1: MACRO -- What IS "Visual Quality"?

### 1.1 Complete Visual Quality Taxonomy

Visual quality is not a single dimension. It decomposes into at least 14 distinct dimensions across 5 meta-categories. Our 65 PA questions cover some thoroughly, others partially, and some not at all.

| # | Meta-Category | Dimension | Definition | Current PA Coverage | Coverage % |
|---|---------------|-----------|------------|-------------------|-----------|
| **STRUCTURAL** | | | | | |
| 1 | Structural | **Spatial Proportion** | Content-to-viewport ratios, horizontal/vertical balance, margin confidence | PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-52, PA-53 | 95% |
| 2 | Structural | **Grid Discipline** | Alignment rails, column management, container consistency | PA-14, PA-15, PA-37, PA-38, PA-39 | 90% |
| 3 | Structural | **Flow & Pacing** | Section-to-section movement, interest curve, scroll momentum | PA-12, PA-13, PA-34, PA-35, PA-36, PA-69, PA-70 | 85% |
| 4 | Structural | **Responsive Adaptation** | Width-specific design, reorganization vs scaling, breakpoint intentionality | PA-21, PA-22, PA-23, PA-46, PA-47 | 75% |
| **TYPOGRAPHIC** | | | | | |
| 5 | Typographic | **Readability** | Legibility, line length, tracking, contrast | PA-02, PA-06, PA-07, PA-08, PA-29, PA-56 | 80% |
| 6 | Typographic | **Type as Expression** | Typography conveying personality, hierarchy beyond function, type as atmosphere | PA-20 (partial), PA-56 (detects absence) | 15% |
| **COMPOSITIONAL** | | | | | |
| 7 | Compositional | **Design Coherence** | One-voice consistency, vocabulary unity | PA-03, PA-16, PA-19, PA-24, PA-25 | 90% |
| 8 | Compositional | **Rhythmic Variation** | Beat patterns, tempo shifts, monotony avoidance | PA-17, PA-40, PA-41, PA-60, PA-61, PA-62 | 85% |
| 9 | Compositional | **Compositional Depth** | Multi-scale coherence, fractal echoes, restraint as expression | PA-63, PA-64, PA-66, PA-65 | 75% |
| 10 | Compositional | **Metaphor Embodiment** | Visual structure expressing conceptual metaphor without labels | PA-42, PA-43, PA-44, PA-68 | 70% |
| **EXPERIENTIAL** | | | | | |
| 11 | Experiential | **Emotional Arc** | Surprise, delight, authority, earned closure | PA-35, PA-36, PA-45, PA-47, PA-67 | 40% |
| 12 | Experiential | **Memorability** | What a reader remembers a week later, visual stickiness | PA-45 (indirect) | 10% |
| 13 | Experiential | **Engagement Sustainability** | Resistance to skimming, scroll-stopping power, attention recovery | PA-35 (partial), PA-47 (partial) | 20% |
| **META-QUALITY** | | | | | |
| 14 | Meta-Quality | **Intentional Confidence** | The gestalt sense that every decision was deliberate, not default | PA-05 (holistic), PA-27, PA-28 | 50% |

### 1.2 Coverage Heat Map

```
WELL-COVERED (>75%)           PARTIALLY COVERED (25-75%)      POORLY COVERED (<25%)
================================================================================================
Spatial Proportion    95%      Responsive Adaptation  75%      Memorability           10%
Grid Discipline       90%      Compositional Depth    75%      Type as Expression     15%
Design Coherence      90%      Metaphor Embodiment    70%      Engagement Sustain.    20%
Flow & Pacing         85%      Intentional Confidence 50%
Rhythmic Variation    85%      Emotional Arc          40%
Readability           80%
```

### 1.3 What This Tells Us

Our PA questions are **structurally biased**. We are excellent at measuring whether things are in the right place, whether they are consistent, and whether they flow. We are weak at measuring whether they make you FEEL something, whether you REMEMBER them, and whether typography is doing expressive work beyond readability.

The three worst-covered dimensions (Memorability 10%, Type as Expression 15%, Engagement Sustainability 20%) are precisely the dimensions that separate "competent professional work" from "work that changes how you think about what's possible." These are the dimensions that separate 3/4 from 4/4.

### 1.4 Frameworks We Are Drawing From (Implicitly and Explicitly)

| Framework | Discipline | What It Measures | Our Coverage |
|-----------|-----------|------------------|-------------|
| Gestalt Principles | Visual Psychology | Proximity, similarity, continuity, closure, figure-ground | STRONG (PA-10, PA-15, PA-16) |
| CRAP (Contrast, Repetition, Alignment, Proximity) | Graphic Design | Basic design principles | STRONG |
| Type Hierarchy | Typography | Information ordering through type | MODERATE (PA-29) |
| Grid Systems (Muller-Brockmann) | Swiss Design | Spatial relationships, mathematical proportion | STRONG (PA-14, PA-15, PA-30) |
| Information Architecture | UX/IA | Content organization, wayfinding | MODERATE (PA-38, PA-39) |
| Emotional Design (Norman) | Interaction Design | Visceral, behavioral, reflective responses | WEAK |
| Editorial Design (Lupton) | Print/Publication | Pacing, spread composition, rhythm | MODERATE (PA-35, PA-36) |
| Koenig/Salingaros Complexity | Architecture | Multi-scale coherence, fractal self-similarity | MODERATE (PA-63) |
| Dieter Rams' Principles | Industrial Design | Honest, innovative, aesthetic, understandable | IMPLICIT in PA-05 |
| Accessibility (WCAG) | Universal Design | Perceivability, operability, understandability | WEAK (PA-02, PA-08 only) |
| Wabi-Sabi | Japanese Aesthetics | Imperfection, transience, incompleteness | ABSENT |
| Sprezzatura | Renaissance Design | Studied carelessness, ease masking effort | ABSENT |

---

## PART 2: MESO -- PA Question Architecture (Question-by-Question Rating)

### 2.1 Rating Key

- **DISCRIMINATION**: Does it separate 3/4 from 4/4? HIGH = yes, MEDIUM = separates 2/4 from 3/4, LOW = binary pass/fail
- **PERCEPTUAL CLARITY**: Can fresh eyes actually answer it reliably? HIGH/MEDIUM/LOW
- **ACTIONABILITY**: Does failure suggest a specific fix? HIGH/MEDIUM/LOW
- **REDUNDANCY**: Does another question measure substantially the same thing?

### 2.2 Tier 1: The Mandatory Five

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-01 | First thing that bothers you? | HIGH | HIGH | HIGH | None | THE best question. Open-ended, catches anything. Every auditor found the trailing void through this. |
| PA-02 | Uncomfortable text? | LOW | HIGH | HIGH | Overlaps PA-08 | Good for catching specific spots but binary (comfortable/not). |
| PA-03 | One designer or three? | MEDIUM | HIGH | MEDIUM | Overlaps PA-19 | Excellent coherence check. All 9 auditors answered "one designer" -- question may lack sensitivity at higher tiers. |
| PA-04 | Eye path correct? | MEDIUM | MEDIUM | MEDIUM | None | Useful for header/first-viewport but less informative for full-page. |
| PA-05 | Put your name on it? | HIGH | HIGH | HIGH | None (MASTER) | THE primary metric. The 4 sub-criteria make it the most information-dense question in the set. |

### 2.3 Tier 2: Standard Fifteen

**Readability and Comfort:**

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-06 | Words stacking vertically? | LOW | HIGH | HIGH | None | Binary check. Auditor B: "No stacking at any breakpoint." Either happens or doesn't. |
| PA-07 | Read longest paragraph? | LOW | HIGH | MEDIUM | Partially PA-02 | Both measure readability. PA-07 is line-length-specific. Rarely fails independently. |
| PA-08 | Squint to read? | LOW | HIGH | HIGH | Strong overlap PA-02 | Both ask "is text hard to read?" PA-08 is severity (squinting), PA-02 is comfort. Same information path. |
| PA-29 | Header text styles competing? | MEDIUM | HIGH | HIGH | None | Good header-specific check. Auditor B found 5 styles, none fighting. Useful discriminator between chaotic and ordered headers. |

**Spatial Balance:**

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-09 | Dead space? | MEDIUM | HIGH | HIGH | Overlaps PA-50, PA-33 | Caught the trailing void (severity calibration helps). But PA-50 is more precise and PA-33 is more evocative. |
| PA-10 | Squint balance? | MEDIUM | MEDIUM | LOW | None | Unique "squint test" framing. Low actionability because "rebalance" is vague. |
| PA-11 | Margins confident or anxious? | MEDIUM | HIGH | MEDIUM | None | Emotional language ("confident/anxious") elicits richer responses than "are margins appropriate?" |
| PA-30 | Designed for 1440px? | MEDIUM | MEDIUM | MEDIUM | Overlaps PA-53 | Both measure width utilization. PA-30 is holistic, PA-53 is numeric. |
| PA-31 | Surrounding space designed or leftover? | HIGH | MEDIUM | LOW | Unique | UNDERRATED. This question asks about the NEGATIVE SPACE as a design element. Auditor C gave rich answer about background shifts and colored borders giving space character. Few other questions probe negative space quality. |
| PA-32 | Visual weight across scroll? | HIGH | MEDIUM | MEDIUM | Partially PA-52 | Both measure distribution across page length. PA-32 is weight-focused, PA-52 is moment-focused. |
| PA-33 | Largest empty space: silence or dropped signal? | HIGH | HIGH | HIGH | Overlaps PA-09 | EXCELLENT framing. "Silence vs dropped signal" is one of the most productive metaphors in the question set. Auditor C's answer was the most vivid in the entire audit. |

**Visual Flow:**

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-12 | Eyes flow smoothly? | LOW | MEDIUM | LOW | None | Too vague. "Mostly yes" is the typical answer. Low discrimination between good and great. |
| PA-13 | Clear visual ending? | MEDIUM | HIGH | HIGH | None | Caught the trailing void from the ending perspective. Good structural check. |
| PA-34 | Transition = designed moment or empty space? | HIGH | HIGH | HIGH | None | EXCELLENT question. Forces examination of a specific transition. Auditor D's answer was one of the most detailed. |
| PA-35 | Interest curve while scrolling? | HIGH | MEDIUM | MEDIUM | None | Best pacing question. "Where do you start skimming?" is the killer sub-question. Auditor D identified scroll 11-12 (Implementation Guide). |
| PA-36 | Dramatic visual moment? Where? | HIGH | HIGH | HIGH | Partially PA-60 | Both ask about distinctive moments. PA-36 is about drama/contrast, PA-60 is about uniqueness. Complement rather than overlap. |

**Grid and Layout:**

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-14 | Columns breathe? | LOW | HIGH | HIGH | None | Usually passes. Rarely the discriminating factor between tiers. |
| PA-15 | Left-edge positions count? | MEDIUM | HIGH | HIGH | None | EXCELLENT structural check. Auditor E: "2-3 positions, extremely disciplined." Catches grid chaos definitively. |
| PA-37 | 5+ items competing: control panel or pile? | MEDIUM | HIGH | HIGH | None | Good information density check. All dense sections passed ("control panel"). |
| PA-38 | Card reading order clear? | LOW | HIGH | HIGH | None | Usually passes for competent work. Binary check. |
| PA-39 | Header vs content: doorway or lobby? | HIGH | HIGH | HIGH | None | EXCELLENT framing. "Doorway vs lobby" is immediately actionable. Auditor E: "Textbook doorway -- 27% header, content begins immediately." |

**Consistency and Rhythm:**

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-16 | Twin elements identical? | LOW | HIGH | HIGH | Partially PA-03 | PA-03 asks holistic coherence, PA-16 asks specific element pairs. Good but rarely the discriminating question. |
| PA-17 | Visual rhythm exists? (TIER 1 EQ) | HIGH | MEDIUM | MEDIUM | Partially PA-41 | Both measure repetition quality. PA-17 is presence of rhythm, PA-41 is monotony risk. Paired, not redundant. |
| PA-40 | Spacing jumps? | LOW | HIGH | HIGH | Partially PA-09 | Catches spacing inconsistencies but rarely fails at the 3/4 level. |
| PA-41 | 4+ repeats: purpose or monotony? (TIER 1 EQ) | HIGH | HIGH | HIGH | Partially PA-17 | THE monotony detector. 6/9 auditors flagged Zone 4 through various questions, but PA-41 is the one that precisely measures the problem. |

**Color and Emotion:**

| ID | Question | Discrim. | Clarity | Action. | Redundancy | Notes |
|----|----------|----------|---------|---------|------------|-------|
| PA-18 | Grays same family? | LOW | HIGH | HIGH | None | Binary check. Gas Town: "strongly yes." Useful for catching palette violations but low discrimination. |
| PA-19 | Element from different website? | MEDIUM | HIGH | HIGH | Partially PA-03 | Both measure coherence. PA-19 is more specific (individual outlier element). Caught the whitespace void and Zone 5 red border. |
| PA-20 | Personality in 3 words? | HIGH | HIGH | LOW | None | EXCELLENT for capturing gestalt. "Grizzled, Systematic, Unflinching" tells you more about this page than 20 numeric scores. But LOW actionability -- if personality doesn't match, what do you fix? |

### 2.4 Tier 3 and Beyond (Abbreviated)

| ID | Discrim. | Clarity | Action. | Key Assessment |
|----|----------|---------|---------|---------------|
| PA-21 | LOW | HIGH | MEDIUM | Usually passes at desktop; useful at mobile |
| PA-22 | MEDIUM | HIGH | MEDIUM | "Served or punished" is excellent framing |
| PA-23 | MEDIUM | MEDIUM | HIGH | Predictive question (what breaks at narrower) is valuable |
| PA-24 | MEDIUM | LOW | LOW | Cannot answer without siblings. Limited value in isolation. |
| PA-25 | MEDIUM | MEDIUM | LOW | "Cover header, identify system" is clever but low actionability |
| PA-26 | HIGH | HIGH | HIGH | EXCELLENT adversarial question. Caught 4 convention-caused problems. |
| PA-27 | HIGH | MEDIUM | MEDIUM | "From scratch" forces honest assessment |
| PA-28 | HIGH | MEDIUM | LOW | Loophole analysis is system-level, not page-level |
| PA-42 | HIGH | HIGH | HIGH | "Understand WHY but looks WRONG" is precisely targeted |
| PA-43 | MEDIUM | MEDIUM | MEDIUM | "Less visual cost" is useful but vague |
| PA-44 | HIGH | MEDIUM | LOW | THE metaphor litmus test. Hard to answer but hugely discriminating. |
| PA-45 | HIGH | HIGH | HIGH | "Single moment to show someone" = design moment detector |
| PA-46 | HIGH | HIGH | HIGH | "Reorganize or shrunk?" is the responsive design discriminator |
| PA-47 | HIGH | HIGH | MEDIUM | "Surprise in second half" catches late-page quality |
| PA-48 | HIGH | HIGH | LOW | "First or last choice" forces rank-ordering |
| PA-50-53 | LOW-MED | HIGH | HIGH | Void prevention is mostly binary |
| PA-55 | HIGH | HIGH | HIGH | Sub-perceptual detection is uniquely valuable |
| PA-56 | HIGH | MEDIUM | MEDIUM | Tracking difference detection |
| PA-69 | HIGH | HIGH | HIGH | Transition property counting is highly specific and useful |
| PA-70 | HIGH | HIGH | HIGH | Content-form coupling is a core quality signal |

### 2.5 Tier 5 Questions

| ID | Discrim. | Clarity | Action. | Assessment |
|----|----------|---------|---------|-----------|
| PA-60 | HIGH | HIGH | MEDIUM | Design moment counting works well. 5 identified. |
| PA-61 | HIGH | MEDIUM | LOW | "Independent rhythms" is conceptually hard. Auditor F needed long analysis. |
| PA-62 | HIGH | HIGH | HIGH | Transition counting is concrete and actionable. THE best Tier 5 question. |
| PA-63 | HIGH | MEDIUM | MEDIUM | Fractal zoom is conceptually valuable but hard for fresh eyes. |
| PA-64 | HIGH | MEDIUM | LOW | "Deliberate plainness" is the hardest to answer reliably. Auditor C gave "weak pass" with low conviction. |
| PA-65 | HIGH | HIGH | LOW | Music analogy is memorable and produces rich answers. Low actionability. |
| PA-66 | HIGH | MEDIUM | MEDIUM | "Gap flavors" is clever. 3 flavors identified. |
| PA-67 | HIGH | HIGH | MEDIUM | Novelty detection. "Partially inventive" is the typical answer for good-not-great. |
| PA-68 | HIGH | HIGH | HIGH | Metaphor persistence across thirds is concrete and highly discriminating. |

---

### 2.6 TOP 10 Most Valuable Questions (Highest Information Per Answer)

| Rank | ID | Why It's Valuable |
|------|-----|------------------|
| 1 | **PA-05** | 4 sub-criteria, THE primary metric, forces holistic judgment on 4 axes |
| 2 | **PA-01** | Open-ended, catches ANYTHING. Every auditor's first answer was the trailing void -- the single worst problem. No other question is this reliable at finding the #1 issue. |
| 3 | **PA-35** | "Where do you start skimming?" is the single most actionable pacing diagnostic |
| 4 | **PA-62** | Transition property counting produces numeric, comparable data about compositional depth |
| 5 | **PA-34** | Forces specific transition examination -- consistently produces the richest structural analysis |
| 6 | **PA-41** | THE monotony detector. Directly caught the Zone 4 problem. |
| 7 | **PA-33** | "Silence vs dropped signal" metaphor produces the most vivid spatial analysis |
| 8 | **PA-26** | "Convention causing problems" is uniquely adversarial -- caught 4 issues other questions missed |
| 9 | **PA-20** | "Personality in 3 words" captures gestalt more efficiently than any other question |
| 10 | **PA-70** | Content-form coupling is the highest-leverage compositional quality signal |

### 2.7 BOTTOM 10 (Candidates for Retirement or Revision)

| Rank | ID | Problem | Recommendation |
|------|-----|---------|---------------|
| 1 | **PA-08** | Near-duplicate of PA-02. Both measure text readability. PA-08 adds "squint/lean" which is severity but same dimension. | **MERGE** into PA-02 with severity sub-question |
| 2 | **PA-06** | Binary check that almost never fails. "Words stacking vertically" is an extreme edge case. | **RETIRE** or fold into PA-14 column check |
| 3 | **PA-07** | "Can you read the longest paragraph?" Almost always yes for competent work. | **RETIRE** or fold into PA-02 |
| 4 | **PA-12** | "Eyes flow smoothly?" Too vague. "Mostly yes" is the universal answer. | **REVISE** to "Where does flow break? Name the exact transition." |
| 5 | **PA-14** | "Columns breathe?" Usually passes. Low discrimination. | **REVISE** to include "Does any column feel like it's doing MORE work than adjacent columns?" |
| 6 | **PA-18** | "Grays same family?" Binary check. Almost always yes for system-built pages. | **MERGE** into PA-03 as a sub-check |
| 7 | **PA-38** | "Card reading order clear?" Binary check. Every card passed in every audit we've run. | **REVISE** to "Is there a card/callout where the reading order SURPRISES you (in a good way)?" |
| 8 | **PA-16** | "Twin elements identical?" Redundant with PA-03 holistic coherence. | **REVISE** to "Pick two elements that SHOULD look different. Do they?" (inversion is more discriminating) |
| 9 | **PA-09** | "Dead space?" Caught the void but PA-33 catches it MORE productively with better framing. PA-50 catches it more precisely. | **RETIRE** or merge into PA-33 |
| 10 | **PA-40** | "Spacing jump?" Low discrimination. Mostly catches the same things as PA-09/PA-33. | **RETIRE** or fold into PA-69 transition analysis |

### 2.8 Coupled Questions (Answer to One Predicts Another)

| Question A | Question B | Coupling Strength | Nature |
|-----------|-----------|-------------------|--------|
| PA-02 ↔ PA-08 | | STRONG (0.9) | Both measure text readability |
| PA-03 ↔ PA-16 | | STRONG (0.85) | Both measure visual consistency |
| PA-03 ↔ PA-19 | | MODERATE (0.7) | Both measure coherence, PA-19 is outlier-specific |
| PA-09 ↔ PA-33 | | STRONG (0.9) | Both measure dead space quality |
| PA-09 ↔ PA-50 | | STRONG (0.85) | Both measure void presence |
| PA-30 ↔ PA-53 | | STRONG (0.9) | Both measure width utilization |
| PA-32 ↔ PA-52 | | MODERATE (0.75) | Both measure distribution across page |
| PA-35 ↔ PA-47 | | MODERATE (0.65) | Both measure scroll experience, PA-47 is second-half specific |
| PA-36 ↔ PA-60 | | MODERATE (0.7) | Both measure design moments, different angles |
| PA-41 ↔ PA-17 | | MODERATE (0.7) | Both measure rhythmic quality |
| PA-44 ↔ PA-68 | | STRONG (0.85) | Both measure metaphor visual expression |

---

## PART 3: MICRO -- What Quality Signals Are We Missing?

### 3.1 The 11 Missing Quality Signals

For each quality signal, I assess whether our current questions capture it and what specifically we miss.

#### 3.1.1 What makes a reader STOP SCROLLING and look closer?

**Current coverage: 25%** (PA-36 drama, PA-45 showable moment)

What we miss: PA-36 asks "is there a dramatic moment?" and PA-45 asks "is there a moment worth showing?" But neither asks about the MICRO-PHYSICS of scroll-stopping. What actually stops a scroll is:
- **Unexpected density change** (suddenly more/less information per viewport)
- **Color break** (a new hue appearing for the first time)
- **Scale break** (something suddenly much larger or smaller than its neighbors)
- **Motion implication** (layout suggesting movement -- asymmetric placement, diagonal lines)
- **White space frame** (generous space AROUND a small element, like a matted painting)

The Gas Town page has one genuine scroll-stopper: the "Nature prefers colonies" interstitial. The "chimpanzees" warning is a text-level scroll-stopper but NOT a visual one (same blockquote format as everything else). We have no question that specifically asks about the MECHANISM of scroll-stopping.

#### 3.1.2 What makes a page feel CUSTOM vs TEMPLATED?

**Current coverage: 30%** (PA-05a "designed vs assembled", PA-27 "from scratch")

What we miss: The custom-vs-template distinction is one of the most important quality signals, and our questions approach it only through holistic judgment (PA-05a) or hypothetical redesign (PA-27). The actual signals of customness are:
- **Content-aware spacing** (spacing that VARIES based on what surrounds it, not uniform)
- **One-off elements** (a component that appears exactly once, created for this specific content)
- **Asymmetric decisions** (deliberately choosing NOT to center, or leaving one margin wider)
- **Content-responsive type** (a heading that's sized differently because THIS heading is longer/shorter)
- **Edge treatments** (what happens at the very first and very last pixels of a section)

#### 3.1.3 What creates VISUAL MEMORY (remembered a week later)?

**Current coverage: 10%** (PA-45 "moment to show someone" is closest)

What we miss: This is our largest blind spot. Memorability in visual design comes from:
- **Signature moment** (one visual event that is so distinctive it becomes the page's identity)
- **Spatial imprint** (the overall SHAPE of the page when squinted -- memorable pages have memorable silhouettes)
- **Unexpectedness within convention** (one rule broken deliberately while all others hold)
- **Emotional peak** (the moment of highest emotional impact, not just visual impact)
- **Associative imagery** (visuals that connect to something the reader already knows)

The Gas Town page has strong memorability (the integrative auditor listed 5 things they'd remember), but we have no systematic way to PREDICT or MEASURE memorability.

#### 3.1.4 What makes TYPOGRAPHY feel alive vs mechanical?

**Current coverage: 15%** (PA-56 detects absence of typographic variation)

What we miss: Typography is our weakest dimension. Our questions measure whether type is READABLE (PA-02, PA-07, PA-08) and whether type VARIES between zones (PA-56). But "alive" typography has qualities we don't measure:
- **Optical rhythm** (varying word-spacing and letter-spacing to create visual breathing in text blocks)
- **Hierarchy surprise** (one heading that breaks the expected size pattern for emphasis)
- **Type-as-texture** (large text blocks that create a visual PATTERN when squinted, not just readable paragraphs)
- **Typographic color** (the overall gray value of a text block -- dense paragraphs vs airy ones)
- **Pull-quote integration** (how extracted quotes interact with their surrounding text spatially)

#### 3.1.5 What makes SPACING feel intentional vs default?

**Current coverage: 55%** (PA-09, PA-11, PA-31, PA-33, PA-40, PA-66 all address spacing)

Spacing is well-covered structurally but we miss:
- **Rhythm irregularity with purpose** (most spacing is regular but ONE gap is different, and that difference means something)
- **Compression-expansion cycles** (spacing that breathes IN and OUT as you scroll, not just "consistent")
- **Proximity semantics** (elements that are closer together MEAN something by being close)

#### 3.1.6 What makes COLOR feel curated vs applied?

**Current coverage: 25%** (PA-18 gray family, PA-55 zone differences)

We measure color consistency (PA-18) and color differentiation (PA-55), but not:
- **Color economy** (using the minimum colors necessary -- restraint as craft)
- **Color progression** (color changing gradually across the page like a gradient narrative)
- **Accent discipline** (accent colors appearing at semantically important moments, not randomly)
- **Color-meaning mapping** (does every color mean something, or are some decorative?)

Gas Town has this problem: the quote section border colors (red, purple, green, blue) lack semantic meaning. Auditor G caught this, but through PA-42/PA-44 (metaphor questions), not through a direct color-meaning question.

#### 3.1.7 What makes a COMPONENT feel designed vs assembled?

**Current coverage: 40%** (PA-63 fractal zoom, PA-38 reading order)

We measure internal echo (PA-63) and reading order (PA-38), but not:
- **Internal proportion** (is the component's OWN spacing proportional, not just correct?)
- **Contextual responsiveness** (does the component look different in different zones -- not just color but SHAPE/structure?)
- **Finishing touches** (does the component have details that reward close inspection -- subtle borders, micro-transitions, considered edge cases?)
- **Weight relative to surroundings** (does the component feel "heavier" or "lighter" than the content around it, and is that appropriate?)

#### 3.1.8 What creates the EMOTIONAL ARC of scrolling?

**Current coverage: 40%** (PA-35 interest curve, PA-36 dramatic moment, PA-47 surprise in second half)

We measure whether there IS an arc (PA-35) and whether there are peaks (PA-36, PA-47), but not:
- **Resolution** (does the page resolve its visual tension by the end?)
- **Anticipation** (does one section create visual anticipation for what follows?)
- **Relief** (is there a moment where visual density drops INTENTIONALLY and you feel relief?)
- **Bookend satisfaction** (does the ending echo the beginning in a way that feels complete?)

#### 3.1.9 What signals COMPOSITIONAL CONFIDENCE vs TENTATIVE ASSEMBLY?

**Current coverage: 50%** (PA-05a, PA-11, PA-27)

Missing signals:
- **Decisive asymmetry** (choosing NOT to center when centering would be "safe")
- **Generous omission** (leaving something OUT that most pages include)
- **Scale conviction** (making something MUCH larger or smaller than expected -- not hedge-sizing)
- **Single-rule breaking** (intentionally violating one convention while respecting all others)

#### 3.1.10 What signals RESTRAINT vs LAZINESS?

**Current coverage: 35%** (PA-64 deliberate plainness is the only direct question)

PA-64 is the RIGHT question but it's the hardest to answer reliably (Auditor C gave "weak pass" with low conviction). The distinction between restraint and laziness is THE hardest perceptual judgment in design, and we have one question for it.

#### 3.1.11 What signals INTENTIONAL SIMPLICITY vs INABILITY TO DO MORE?

**Current coverage: 20%** (PA-64 partial, PA-28 adversarial)

This is related to but distinct from restraint vs laziness. Simplicity signals:
- **Evidence of capability deployed elsewhere** (the page shows it CAN do complex things, and CHOOSES not to here)
- **Precision in the simple** (the simple sections have perfect spacing, perfect type, perfect color -- simplicity IS the craft)
- **Negative space quality** (empty space that has been DESIGNED, not defaulted)

---

## PART 4: DELIVERABLE 3 -- 20 New Candidate PA Questions

### Questions Filling Experiential Gaps

**NEW-01: Scroll-Stop Mechanism Detection**
> "As you scroll at normal speed, does anything make you INVOLUNTARILY STOP and look more closely? What caused the stop -- a size change, a color change, a density shift, or something else?"
- **Dimension:** Engagement Sustainability
- **Discriminates:** Catches pages that flow nicely but never ARREST attention (the difference between 3/4 pleasant and 4/4 commanding)
- **Pass:** "Yes, [specific element] made me stop because [visual mechanism]"
- **Fail:** "I scrolled smoothly through everything without stopping" (smooth can mean nothing demands attention)

**NEW-02: One-Week Memory Test**
> "If you closed this page right now and someone asked you to describe it a week later, what visual element would you describe FIRST? What shape/color/layout would you draw from memory?"
- **Dimension:** Memorability
- **Discriminates:** Catches pages that are pleasant during viewing but leave no visual imprint
- **Pass:** Auditor names a specific visual element and can describe its approximate shape/position
- **Fail:** Auditor describes content ("it was about Gas Town") but no visual memory

**NEW-03: Emotional Peak Location**
> "Point to the moment on this page where you felt the STRONGEST emotional response (interest, surprise, satisfaction, discomfort -- any emotion). Is that moment in the top third, middle third, or bottom third?"
- **Dimension:** Emotional Arc
- **Discriminates:** 4/4 pages place their emotional peak deliberately (usually at the golden ratio point, ~62% down). 3/4 pages have peaks only in the first third.
- **Pass:** Peak is in middle or bottom third (earned peak, not just a good header)
- **Fail:** Peak is in the header or first viewport (front-loaded, then fades)

**NEW-04: Resolution Satisfaction**
> "After scrolling through the entire page, do you feel the visual journey CONCLUDED, or did it just STOP? Does the ending feel earned by what came before it?"
- **Dimension:** Emotional Arc (Closure)
- **Discriminates:** Catches pages that run out of compositional energy before the content ends
- **Pass:** "The footer feels like a conclusion that was prepared for"
- **Fail:** "The page just stopped" or "The last sections feel tacked on"

### Questions Filling Typographic Gaps

**NEW-05: Typography Personality**
> "Cover all images, diagrams, and colored elements. Looking ONLY at the text itself -- its size, weight, spacing, and arrangement -- does the typography express a personality? Describe it in one word."
- **Dimension:** Type as Expression
- **Discriminates:** Catches pages where typography is functional but characterless. 4/4 pages have typography that IS the personality.
- **Pass:** Auditor names a word (e.g., "confident", "scholarly", "industrial") and can point to specific type choices that create it
- **Fail:** Auditor says "clean" or "readable" (these are function, not character)

**NEW-06: Type Texture Variation**
> "Squint at three different paragraphs in different zones. Do they create the same gray TEXTURE, or do different zones have different typographic density/color?"
- **Dimension:** Type as Expression
- **Discriminates:** Catches sub-perceptual typography more precisely than PA-56
- **Pass:** "Zone 2 body text feels denser than Zone 6 body text" (different typographic color)
- **Fail:** "All body text looks the same when squinted" (uniform typographic color)

### Questions Filling Compositional Gaps

**NEW-07: Custom vs Template Detection**
> "Name one visual element on this page that you believe was created SPECIFICALLY for this content -- something that would not work on a different page about a different topic. If you cannot name one, say so."
- **Dimension:** Intentional Confidence (Custom)
- **Discriminates:** THE separator between 3/4 (good application of a system) and 4/4 (system adapted to THIS content)
- **Pass:** Auditor names a specific element (e.g., "the role cards with Mad Max tier labels")
- **Fail:** Auditor cannot name one, or names generic components (e.g., "the table of contents")

**NEW-08: Confidence Signal Detection**
> "Point to one design decision that feels BOLD -- where the designer chose something that a less confident designer would have avoided (e.g., extreme size, unusual placement, deliberate asymmetry, generous empty space around a small element)."
- **Dimension:** Intentional Confidence
- **Discriminates:** Catches the difference between "correctly composed" and "compositionally audacious"
- **Pass:** "The full-width dark interstitial with a single sentence is bold -- most designers would add more content"
- **Fail:** "Everything feels safe and correct" (technically good but lacking conviction)

**NEW-09: Inverse Twin Test**
> "Pick two elements that look similar. Do they NEED to look similar, or could one be visually different to communicate something? Is the similarity serving the content or just the template?"
- **Dimension:** Compositional Depth
- **Discriminates:** Inverted version of PA-16. Catches "template lock" where everything matches but shouldn't
- **Pass:** "The GUPP principle card SHOULD look different from the Token Spend card because GUPP is described as 'universal'"
- **Fail:** "All similar elements appropriately match" (or no candidate for differentiation)

**NEW-10: Restraint Evidence**
> "Find a section that uses FEWER visual techniques than the sections around it. Does the simplicity feel like: (a) the designer CHOSE restraint here, (b) the content is just simpler here, or (c) the designer ran out of ideas?"
- **Dimension:** Restraint vs Laziness (enhanced PA-64)
- **Discriminates:** Better framing than PA-64 by offering three options instead of binary
- **Pass:** Auditor selects (a) and can explain WHY it feels chosen
- **Fail:** Auditor selects (b) or (c)

### Questions Filling Color Gaps

**NEW-11: Color Economy**
> "Count the number of distinct colors used on this page (excluding pure text black/gray and white/cream). Is each color doing a JOB, or are any decorative? Name the job of each color."
- **Dimension:** Color (curated vs applied)
- **Discriminates:** Catches pages where colors were added without semantic purpose
- **Pass:** Every color has a nameable role (e.g., "red = warning/emphasis, green = success/checkpoint, amber = caution")
- **Fail:** One or more colors have no job (e.g., "the purple left border on that quote -- why purple?")

**NEW-12: Color Narrative**
> "Does the page's use of color CHANGE as you scroll? Does color tell a story (e.g., warm-to-cool, bright-to-muted, monochrome-to-colorful), or is it the same throughout?"
- **Dimension:** Color (progression)
- **Discriminates:** Catches pages where color is applied uniformly rather than composed narratively
- **Pass:** "The page starts with dark/muted header, warms through cream body, punctuated by increasingly varied accent colors in the quotes section"
- **Fail:** "Same colors everywhere -- red borders, cream backgrounds, dark code blocks from top to bottom"

### Questions Filling Engagement Gaps

**NEW-13: Skimming Recovery**
> "After you start skimming (you identified this in PA-35), does the page PULL YOU BACK into engaged reading at any point? What visual element re-engages you?"
- **Dimension:** Engagement Sustainability
- **Discriminates:** 4/4 pages have recovery mechanisms after dense sections. 3/4 pages let you skim to the end.
- **Pass:** "Yes, the dark interstitial 'Nature prefers colonies' pulled me back after skimming through code blocks"
- **Fail:** "Once I started skimming at scroll 11, I never fully re-engaged"

**NEW-14: Attention Reward**
> "Look at any element more closely than your first glance. Does closer inspection reveal additional detail, nuance, or craftsmanship that you missed at first? Or does everything give up all its information in the first look?"
- **Dimension:** Delight (depth reward)
- **Discriminates:** Catches the difference between surface-level competence and layered craft
- **Pass:** "Looking closer at the role cards, I notice the model/command line at the bottom uses a different font and has its own visual micro-hierarchy"
- **Fail:** "Everything looks the same at close range as from a distance"

### Questions Filling Spatial Gaps

**NEW-15: Compression-Expansion Cycle**
> "As you scroll, does the visual density BREATHE -- alternating between compressed (dense) and expanded (spacious) sections? Or is the density constant?"
- **Dimension:** Spacing (intentional variation)
- **Discriminates:** Catches pages with uniform density (the "flat-line" problem)
- **Pass:** "Zone 2 (role cards) is dense, then Zone 3 opens up with prose, then Zone 5 (code) gets dense again -- there's a breathing pattern"
- **Fail:** "Everything is about the same density throughout"

**NEW-16: Proximity Semantics**
> "Find two elements that are placed CLOSER together than other pairs. Does their closeness communicate a relationship? Does their distance from other elements communicate separation?"
- **Dimension:** Spacing (meaning through proximity)
- **Discriminates:** Catches spacing that is uniform rather than semantically loaded
- **Pass:** "The checkpoint callout sits closer to the code block above it than to the heading below -- it 'belongs to' the code"
- **Fail:** "Everything seems equally spaced from everything else"

### Questions Filling Meta-Quality Gaps

**NEW-17: One Rule Broken**
> "Can you find one place where the page intentionally breaks its own visual rules? Is the rule-breaking effective or confusing?"
- **Dimension:** Intentional Confidence (sprezzatura)
- **Discriminates:** 4/4 pages have at least one deliberate rule-break. 3/4 pages follow all rules perfectly (which is a subtle form of mechanical quality).
- **Pass:** "The Overseer card breaks the 2-column card pattern by going full-width -- this communicates that Overseer is different"
- **Fail:** "I can't find any rule-breaking" (may indicate template-following rather than design)

**NEW-18: Designer Absence Test**
> "Is there any section where you sense the designer STOPPED PAYING ATTENTION -- where the same level of care visible in the best section is NOT visible here?"
- **Dimension:** Intentional Confidence (consistency of craft)
- **Discriminates:** Catches quality drop-off, which is the most common failure mode of long pages
- **Pass:** "Every section receives equal attention" or "The Sources section is simpler but still feels designed"
- **Fail:** "Zone 5 implementation code blocks feel like the designer just dumped content"

**NEW-19: Anticipation Signal**
> "At any zone boundary, did you feel ANTICIPATION for what was coming next -- based on visual cues, not content curiosity? What visual cue created that anticipation?"
- **Dimension:** Emotional Arc (anticipation)
- **Discriminates:** Catches pages that merely DELIVER content vs pages that BUILD toward content
- **Pass:** "The gradual increase in dark code blocks through Zones 2-3 made me expect Zone 5's implementation section"
- **Fail:** "Each zone arrived without visual preparation"

**NEW-20: Negative Space Composition**
> "Pick the largest area of blank/empty space IN THE CONTENT AREA (not the trailing void). Does that space feel like it was COMPOSED (given a shape, a relationship to surrounding elements), or does it feel like a GAP (the default distance between two blocks)?"
- **Dimension:** Spatial Proportion (negative space quality)
- **Discriminates:** Catches the difference between "adequate spacing" and "space as a design element"
- **Pass:** "The space between the interstitial quote and Zone 6 feels composed -- wider than normal, creating a visual pause"
- **Fail:** "All gaps feel like standard spacing -- functional but not designed"

---

## PART 5: DELIVERABLE 4 -- Questions to Retire or Revise

| # | ID | Current Text | Action | Rationale |
|---|-----|-------------|--------|-----------|
| 1 | PA-06 | "Words stacking vertically, one per line?" | **RETIRE** | Near-zero failure rate for system-built pages. In 2 full PA runs, never failed. Column breathing (PA-14) catches the same dimension better. |
| 2 | PA-07 | "Can you read the longest paragraph?" | **RETIRE** | Near-zero failure rate. PA-02 covers readability. Line-height/measure are caught by PA-02+PA-08. |
| 3 | PA-08 | "Squint to read?" | **MERGE into PA-02** | Same dimension as PA-02. Revised PA-02: "Is any text uncomfortable to read? Point to the worst spot. Would you need to lean closer to read any text?" |
| 4 | PA-09 | "Dead space, no purpose?" | **MERGE into PA-33** | PA-33 ("silence vs dropped signal") captures the same information with better framing. PA-50 catches it quantitatively. |
| 5 | PA-12 | "Eyes flow smoothly?" | **REVISE** | Too vague. Replace with: "Where does visual flow BREAK? Name the exact scroll position and describe what interrupts the flow. If it never breaks, say so." |
| 6 | PA-16 | "Twin elements identical?" | **REVISE to INVERSION** | Replace with NEW-09: "Pick two similar elements. SHOULD one be visually different? Is similarity serving content or template?" |
| 7 | PA-18 | "Grays same family?" | **MERGE into PA-03** | PA-03 ("one designer or three") already captures palette coherence holistically. Add as sub-check: "Specifically, do all neutrals feel like the same temperature?" |
| 8 | PA-40 | "Spacing jump?" | **MERGE into PA-69** | Transition property counting (PA-69) subsumes spacing jumps. Both measure inter-section spacing quality, PA-69 is more precise. |

**Net effect:** Retire 4 questions (PA-06, PA-07, PA-09, PA-40), merge 2 (PA-08 into PA-02, PA-18 into PA-03), revise 2 (PA-12, PA-16). Frees 8 slots for new questions while reducing redundancy.

---

## PART 6: DELIVERABLE 5 -- Visual Quality Radar for Gas Town Page

### 6.1 Dimension Scores (Beyond PA-05)

```
                        SPATIAL PROPORTION  ████████░░  8/10
                        GRID DISCIPLINE     █████████░  9/10
                        FLOW & PACING       ███████░░░  7/10
                        RESPONSIVE ADAPT.   █████░░░░░  5/10
                        READABILITY         ████████░░  8/10
                        TYPE AS EXPRESSION  ████░░░░░░  4/10
                        DESIGN COHERENCE    █████████░  9/10
                        RHYTHMIC VARIATION  ███████░░░  7/10
                        COMPOSITIONAL DEPTH ██████░░░░  6/10
                        METAPHOR EMBODIMENT █████░░░░░  5/10
                        EMOTIONAL ARC       ██████░░░░  6/10
                        MEMORABILITY        ███████░░░  7/10
                        ENGAGEMENT SUSTAIN. █████░░░░░  5/10
                        INTENTIONAL CONFID. ███████░░░  7/10
```

### 6.2 Radar Analysis

**Strengths (8+):** Grid Discipline, Design Coherence, Spatial Proportion, Readability. These are the STRUCTURAL dimensions -- the bones of the page are excellent.

**Adequate (6-7):** Flow & Pacing, Rhythmic Variation, Emotional Arc, Memorability, Intentional Confidence. The page is GOOD here but not exceptional. The trailing void damages Flow. Zone 4 monotony damages Rhythm. The interstitial is a single highlight in an otherwise steady arc.

**Weak (4-5):** Responsive Adaptation, Type as Expression, Metaphor Embodiment, Engagement Sustainability. These are the EXPERIENTIAL dimensions. The page is functional but not expressive at these levels. Typography does readability but not expression. Metaphor is announced but not embodied. The page never pulls you back after you start skimming.

### 6.3 The Shape of This Page's Quality

This page has the quality profile of **professional editorial documentation at the top of its class**. It is structurally excellent, readably perfect, coherent throughout. It is NOT artistically adventurous, typographically expressive, or emotionally dynamic.

The radar shape is: **strong foundations, adequate middle, weak expression.** This is exactly the profile of a 3/4 COMPOSED page that could reach 3.5-4/4 DESIGNED if it invested in the experiential dimensions.

---

## PART 7: DELIVERABLE 6 -- Recommendations for Restructuring the PA Question Set

### 7.1 Current Problem

The question set is **structurally overweight** (65 questions, ~40% measuring spatial/grid/readability) and **experientially underweight** (~15% measuring emotional arc, memorability, engagement). This mirrors the pipeline's overall bias: we build structures well and measure structures well, but we build experiences inconsistently and barely measure them.

### 7.2 Proposed Restructured Set: 60 Questions

#### Tier 1: The Mandatory Five (UNCHANGED -- these are correct)
PA-01, PA-03, PA-04, PA-05, PA-17 (rhythm)

#### Tier 2: Standard Twenty (currently 15, expand to 20)

**Readability (3 questions, down from 4):**
- PA-02 (revised: includes squint check from PA-08)
- PA-29 (header text competition)
- PA-56 (sub-perceptual tracking)

**Spatial (5 questions, down from 7):**
- PA-11 (margins confident/anxious)
- PA-31 (surrounding space designed/leftover)
- PA-33 (silence or dropped signal)
- PA-53 (container horizontal use)
- NEW-20 (negative space composition)

**Flow (4 questions, down from 5):**
- PA-13 (clear ending)
- PA-34 (transition = designed moment?)
- PA-35 (interest curve + skimming trigger)
- NEW-13 (skimming recovery)

**Grid (3 questions, down from 5):**
- PA-15 (left-edge positions)
- PA-37 (control panel or pile)
- PA-39 (doorway or lobby)

**Rhythm (2 questions, unchanged):**
- PA-41 (purpose or monotony)
- NEW-09 (inverse twin: should similar things differ?)

**Color + Emotion (3 questions, expanded from 3):**
- PA-20 (personality in 3 words)
- NEW-11 (color economy -- every color has a job?)
- NEW-12 (color narrative -- color changes as you scroll?)

#### Tier 3: Deep Dive (15 questions)

**Responsive (4):** PA-22, PA-23, PA-46, PA-47
**Cross-Page (2):** PA-24, PA-25
**Adversarial (3):** PA-26, PA-28, PA-48
**Metaphor (3):** PA-42, PA-44, NEW-07 (custom vs template)
**Experiential (3, all new):**
- NEW-01 (scroll-stop mechanism)
- NEW-03 (emotional peak location)
- NEW-04 (resolution satisfaction)

#### Tier 4: Void Prevention (MANDATORY, 4 questions, unchanged)
PA-50, PA-51, PA-52, PA-55

#### Tier 5: Compositional Depth + Flagship Detection (12 questions, expanded from 9)
- PA-60, PA-61, PA-62, PA-63, PA-64, PA-65, PA-66, PA-67, PA-68
- NEW-02 (one-week memory test)
- NEW-08 (confidence signal detection)
- NEW-17 (one rule broken)

#### Pipeline Integration (2, unchanged)
PA-69, PA-70

**TOTAL: 58 questions** (reduced from 65 via merges/retirements, expanded in experiential coverage)

### 7.3 What Changes

| Change | Before | After | Impact |
|--------|--------|-------|--------|
| Readability questions | 6 | 3 | -50% redundancy, same coverage |
| Spatial questions | 11 | 5 | -55% redundancy, better framing |
| Experiential questions | 3 | 9 | +200% coverage in weakest area |
| Memorability questions | 0 | 1 | From zero to measured |
| Color questions | 3 | 4 | +33%, adds meaning-checking |
| Type as Expression | 1 | 1 | Still weak; addressed by NEW-05/06 in extended set |
| Total questions | 65 | 58 | -7 net, much better distribution |

### 7.4 The Discrimination Principle

The restructured set is designed around one principle: **every question should discriminate between the tier BELOW the target and the target tier**. Specifically:

- **Tier 1-2 questions** should separate FLAT (1/4) from ASSEMBLED (2/4)
- **Tier 3 questions** should separate ASSEMBLED (2/4) from COMPOSED (3/4)
- **Tier 5 questions** should separate COMPOSED (3/4) from DESIGNED (4/4)

Currently, we have ~25 questions that discriminate at the 1/4-to-2/4 level (binary pass/fail structural checks) and only ~10 that discriminate at the 3/4-to-4/4 level. The restructured set redistributes toward ~15 at 1/4-2/4, ~25 at 2/4-3/4, and ~18 at 3/4-4/4.

### 7.5 The Experiential Gap Is THE Strategic Priority

If the pipeline can reliably build 3/4 COMPOSED pages (which Gas Town demonstrates it can), then the question set should be optimized for the 3/4-to-4/4 transition. That transition is ENTIRELY in the experiential dimensions:

- A 3/4 page has: correct structure, coherent vocabulary, smooth flow, adequate proportion
- A 4/4 page has all of the above PLUS: memorable moments, typographic personality, emotional resolution, scroll-stopping confidence, restraint that reads as mastery

Our current questions are still largely optimized for the 2/4-to-3/4 transition (catching structural problems). The 3/4-to-4/4 transition requires questions about EXPERIENCE, not STRUCTURE. The 20 new candidate questions in Part 4 are specifically designed for this gap.

---

## APPENDIX A: Summary Statistics

| Metric | Current | Proposed |
|--------|---------|----------|
| Total questions | 65 | 58 |
| Questions retired | -- | 4 (PA-06, PA-07, PA-09, PA-40) |
| Questions merged | -- | 4 (PA-08→PA-02, PA-18→PA-03, each pair counts as -1) |
| Questions revised | -- | 2 (PA-12, PA-16) |
| New questions added | -- | 20 candidates (12 recommended for inclusion) |
| Structural coverage | 95% | 90% (still strong, less redundant) |
| Experiential coverage | 20% | 55% (largest improvement) |
| Memorability coverage | 10% | 30% |
| Type expression coverage | 15% | 25% |
| Redundant question pairs | 11 | 3 |
| Questions with HIGH discrimination | 25 | 35 |
| Questions separating 3/4 from 4/4 | ~10 | ~18 |

## APPENDIX B: Coupled Question Resolution

After restructuring, the remaining coupled pairs are:
1. PA-35 ↔ NEW-13 (skimming point + recovery): **Intentional coupling** -- first identifies WHERE interest drops, second measures WHETHER it recovers
2. PA-44 ↔ PA-68: **Intentional coupling** -- PA-44 asks if metaphor is visual at all, PA-68 asks if it persists across thirds
3. PA-34 ↔ PA-69: **Intentional coupling** -- PA-34 examines one transition qualitatively, PA-69 counts properties quantitatively

All remaining couplings are complementary rather than redundant.

---

*End of PA Question Deep Analysis. 65 questions evaluated on 4 axes. 14 visual quality dimensions mapped. 20 new candidate questions proposed. 8 questions recommended for retirement/merge. Strategic finding: our questions are structurally excellent but experientially weak, which precisely mirrors our pipeline's output quality profile.*
