# Content-First Methodology: Content Inventory Before Pattern Selection

**Agent:** CONTENT-FIRST-DESIGNER (Opus 4.6)
**Date:** 2026-02-16
**Evidence Base:**
- 02-content-form-analysis.md (ceiling content-form fit, 310 lines)
- 05-flagship-architecture.md (3-pass execution model, 625 lines)
- 01-metaphor-derivation.md (ceiling metaphor derivation, 518 lines)
- 02-build-plan.md (ceiling build plan, 724 lines)
- 04-showcase-archaeology.md (unmodeled richness, 267 lines)
- case-studies/README.md (anti-prescription layer, 542 lines)
- ceiling-page.html (built artifact, 2,017 lines)

**Purpose:** Define the content-first methodology that REVERSES the ceiling experiment's fatal pattern-first approach. The ceiling selected a metaphor, imposed structure, then fit content. The flagship MUST inventory content, THEN select patterns that serve it.

---

## THE CEILING EXPERIMENT'S LESSON IN ONE SENTENCE

The ceiling experiment chose a "Secure Facility" metaphor that scored 12/12 in derivation, then inflated 5 natural content sections into 10 structural blocks (7 zone sections + 3 checkpoint dividers), producing ~1,200px of structural overhead on ~11,500px of content. The metaphor demanded 4 graduated zones; the content had 5 natural sections whose density peaked in the MIDDLE (Security), not at the END (Operations) where the metaphor demanded it. The result was a page with 14 mechanisms, 8/8 soul compliance, and 9/9 novelty -- but a catastrophic whitespace void that 9/9 Mode 4 auditors independently identified as the dominant failure.

**Root cause:** Pattern-first thinking. The metaphor was selected for semantic alignment (content about security -> security facility metaphor). The content was then distributed across the metaphor's pre-built structure. Where content didn't fill a zone, the zone existed anyway. Where the metaphor demanded escalating density but content peaked early, structural overhead papered over the mismatch.

**The content-first methodology prevents this by reversing the sequence:** inventory content FIRST, derive natural structure, THEN select a pattern that amplifies what already exists.

---

## 1. CONTENT INVENTORY TEMPLATE

### Purpose

Before any design decisions -- before metaphor derivation, before mechanism selection, before even thinking about patterns -- the planner produces a content inventory. This document catalogs WHAT exists in the raw content, HOW it naturally groups, and WHERE its peaks and valleys fall.

**Time budget:** 15-20 minutes maximum. This is a quick scan, not a literary analysis. The planner reads the source content once and fills in the template.

### Template

```
CONTENT INVENTORY
=================

SOURCE: [filename or content identifier]
WORD COUNT: [approximate total]
CONTENT TYPE MIX: [e.g., 45% prose, 40% code/tables, 15% diagrams]
ESTIMATED READING TIME: [at 200 wpm for prose, 100 wpm for code]

---

SECTION CATALOG
---------------

For each natural section (identified by topic shifts, not by existing headings):

SECTION [N]: [Working Title]
  Content type:     [NARRATIVE | REFERENCE | PROCEDURAL | CONCEPTUAL | MIXED]
  Word count:       [approximate]
  Code blocks:      [count]
  Tables:           [count]
  Lists:            [count, with total items]
  Diagrams/ASCII:   [count]
  Callouts:         [count]
  Information density: [HIGH | MEDIUM | LOW]
    HIGH = technical core, multiple code blocks + tables, reader must concentrate
    MEDIUM = explanatory prose with some code/tables, reader can flow
    LOW = orientation, context-setting, minimal technical content
  Reader intent:    [LEARN | BUILD | VERIFY | ORIENT | DECIDE | REFLECT]
  Dependencies:     [which sections must be read first?]

---

NATURAL GROUPINGS
-----------------

Which sections belong together? (identified by shared topic, not by
equal size)

GROUP [A]: [Name]
  Sections: [list]
  Why grouped: [shared topic, continuous argument, same reader intent]
  Combined word count: [total]
  Combined density: [HIGH | MEDIUM | LOW]

---

DENSITY MAP
-----------

Plot the density of each section in reading order:

  Section:    1    2    3    4    5    6    7
  Density:   LOW  MED  HIGH HIGH HIGH MED  HIGH
  Intent:    ORI  LEARN LEARN BUILD BUILD REFL VERIFY

Where does density PEAK? Section [N] ([title])
Where does density DIP? Section [N] ([title])
Is the peak in the first third, middle, or final third? [POSITION]

---

CONTENT BOUNDARIES
------------------

NATURAL BOUNDARIES (topic shifts the reader would notice):
  Between sections [X] and [Y]: [describe the shift]

ARTIFICIAL BOUNDARIES (divisions that exist in headings but not in
topic flow):
  Between sections [X] and [Y]: [why this is artificial]

TOTAL NATURAL SECTIONS: [count]

---

ESTIMATED HEIGHT MAP (at 960px container, 18px body font)
---------------------------------------------------------

For each section, estimate rendered height:

  SECTION [N]: [title]
    Prose lines: [count] x 30.6px = [height]px
    Code blocks: [count] x ~[avg lines] x 21px = [height]px
    Tables: [count] x ~[avg rows] x 40px = [height]px
    Lists: [count items] x 30.6px = [height]px
    Diagrams: [count] x ~[estimated height]px
    SECTION TOTAL: ~[height]px

  TOTAL CONTENT HEIGHT: ~[sum]px

---

CONTENT-ONLY ZONE COUNT
------------------------

How many zones does this content NEED (not want, not could have,
but NEED)?

Rule: A zone boundary is justified ONLY when ALL THREE conditions
are met:
  1. Content mass >= 800px rendered height in the zone
  2. Content TYPE changes (narrative -> reference, conceptual ->
     procedural)
  3. Reader INTENT changes (learning -> building, building ->
     verifying)

JUSTIFIED ZONES: [count]
JUSTIFIED ZONE BOUNDARIES: [list, with which 3 conditions each meets]
```

### Usage Rules

1. **Fill in BEFORE opening the metaphor derivation pipeline.** The content inventory is input to Phase 0 of tension-composition, not a product of it.

2. **Use the source content's OWN vocabulary.** Do not impose metaphorical terms ("zone", "wing", "chamber") during inventory. Call sections by their topic names ("Architecture Overview", "Installation", "Security").

3. **Identify density peaks from CONTENT, not from importance.** "Security Considerations" might be the most IMPORTANT section, but if it has fewer code blocks and shorter prose than "Architecture Deep Dive", its density is LOWER. Density = information volume per scroll-inch, not conceptual weight.

4. **Count natural boundaries, not existing headings.** The source content may have 12 `<h2>` headings but only 4 genuine topic shifts. The inventory counts topic shifts.

5. **The height estimate does not need to be exact.** Use these approximations:
   - Prose: 30.6px per line (18px font * 1.7 line-height)
   - Code: 21px per line (14px font * 1.5 line-height)
   - Table rows: 40px per row (12px padding top/bottom + content)
   - Lists: 30.6px per item (same as prose)

---

## 2. CONTENT-TO-PATTERN SELECTION RULES

### The Core Principle

**A pattern SERVES content. Content does not FILL a pattern.**

The ceiling experiment chose a pattern (4-zone secure facility) that demanded a structure the content did not naturally have. The content had 5 natural sections; the pattern imposed 4 zones with 7 sub-zones. The content's density peak was in the middle; the pattern demanded escalating density. The pattern won; the content suffered.

### Selection Protocol

**Step 1: Read the content inventory's CONTENT-ONLY ZONE COUNT.**

This is the maximum number of structural zones the page may have. If the content naturally divides into 5 sections, the page has at most 5 zones. A pattern that demands 7 zones is disqualified.

**Step 2: Read the DENSITY MAP.**

Where does the content peak? Early, middle, or late? Does it have a single peak or multiple peaks? Does it alternate dense/sparse?

| Density shape | Pattern implications |
|---------------|---------------------|
| **Early peak, tapering** | Pattern must front-load visual weight. Avoid escalating structures (crescendo, geological deeper-is-denser). |
| **Middle peak, bookends light** | Pattern should create a visual arch. The middle section gets maximum visual treatment; opening and closing are lighter. |
| **Late peak (crescendo)** | Escalating patterns work. Each zone can increase in visual weight because the content supports it. |
| **Uniform density** | Avoid zone-based patterns entirely. Use section-level rhythm (alternating components) rather than graduated zones. |
| **Multi-peak** | Pattern should highlight peaks without imposing a single narrative arc. Consider independent section treatments rather than a graduated whole-page metaphor. |

**Step 3: Count CONTENT TYPES present.**

| Content mix | Pattern implications |
|-------------|---------------------|
| >70% prose | Width variation, typographic rhythm, editorial patterns work. Grid/bento patterns do NOT work (insufficient distinct elements to populate grid cells). |
| >50% code/tables | Reference patterns work. Dense formatting, monospace-heavy zones. Callouts differentiate narrative from reference. |
| Mixed (40-60% prose, rest code/tables) | Hybrid patterns work. Zone backgrounds can differentiate prose zones from reference zones. |
| Heavy diagrams/ASCII | Feature patterns work. Diagrams need prominence (solid offset, breathing space). Avoid patterns that reduce diagram visibility. |

**Step 4: Apply the Structural Overhead Budget.**

**Rule: A pattern may add no more than 20% structural overhead to the content's natural height.**

Structural overhead = everything that is NOT content:
- Zone padding (top + bottom per zone)
- Transition elements (checkpoint dividers, breathing spaces)
- Zone indicators ("ZONE 1 OF 4")
- Metaphor-specific structural components (workstation title bars, verification station headers)

Calculate: `overhead_budget = total_content_height * 0.20`

If a candidate pattern would add more overhead than this budget, it is DISQUALIFIED. The ceiling experiment's ~1,200px overhead on ~11,500px content was 10.4% by this measure -- seemingly safe. But the PERCEPTUAL overhead was much higher because zone indicators, checkpoint labels, and workstation title bars consumed attention without contributing content. The 20% budget includes ALL non-content elements.

**Step 5: Apply the Zone Minimum Content Mass.**

Every zone in the pattern MUST contain at least 800px of rendered content height. Below this, the zone's structural overhead (zone indicator, padding, transitions) exceeds 15% of the zone's total height, making it feel hollow.

Calculate for each proposed zone: `zone_content_height / (zone_content_height + zone_overhead) >= 0.85`

Any zone that fails this test should be merged with an adjacent zone.

**Step 6: Verify Density-Shape Alignment.**

The pattern's density demands must align with the content's density shape.

| Content density shape | Pattern density demand | ALIGNMENT? |
|----------------------|----------------------|------------|
| Middle peak | Escalating (deeper = denser) | MISALIGNED -- pattern demands late peak, content peaks mid |
| Middle peak | Arch (sparse edges, dense center) | ALIGNED |
| Late peak | Escalating | ALIGNED |
| Uniform | Any graduated scheme | MISALIGNED -- pattern creates artificial peaks in uniform content |

**If misaligned: REJECT the pattern.** Do not force content into a density shape it does not have. This was the ceiling experiment's precise failure mode: the "facility" metaphor demanded escalating density, but the content's densest section was Security (zone 3 of 4), not Operations (zone 4 of 4).

### Red Flags (Immediate Pattern Rejection)

1. **Pattern requires more zones than content has natural sections.** If content has 5 sections and pattern demands 8 zones, reject.

2. **Pattern requires content types not present in the inventory.** If pattern demands a "dashboard grid" but content has no tabular data, reject.

3. **Pattern's metaphor IS the content's vocabulary.** If content is about "building architecture" and metaphor is "architectural building", there is zero interpretive distance. The metaphor RENAMES instead of REFRAMES. (This was the ceiling experiment's error: "secure facility" metaphor for content about security.)

4. **Pattern requires empty structural zones to communicate its concept.** If the metaphor requires a "transitional atrium" between zones but there is no content to put there, the atrium becomes a whitespace void.

5. **Pattern's density curve points the wrong direction.** If pattern demands crescendo but content peaks early.

### Decision Flowchart

```
CONTENT INVENTORY COMPLETE
         |
         v
How many natural sections? -----> [N]
         |
         v
Does any candidate pattern
require more zones than N? -----> YES: Reject pattern
         |                        NO: Continue
         v
Does the content density shape
match the pattern's density
demand? ---------------------------> NO: Reject pattern
         |                           YES: Continue
         v
Does each proposed zone have
>= 800px of content? ------------> NO: Merge sparse zones
         |                          YES: Continue
         v
Is the structural overhead
<= 20% of total content
height? ---------------------------> NO: Simplify pattern
         |                            YES: Continue
         v
Does the metaphor RENAME or
REFRAME the content? ------------> RENAME: Reject (zero
         |                           interpretive distance)
         v                         REFRAME: Accept
PATTERN SELECTED
```

---

## 3. METAPHOR SELECTION CRITERIA

### What the Ceiling Experiment Taught About Metaphor Fitness

The ceiling experiment's "Secure Facility" metaphor scored 12/12 in the derivation scoring rubric. It had:
- Structural depth: 3 (zones map at 3 levels)
- Tension resonance: 3 (the content IS about controlled access)
- Mechanism affinity: 3 (naturally suggests 6+ mechanisms)
- Semantic surplus: 3 (generates more ideas than needed)

It also scored 0/4 perceptual risk and only 1/5 perceptual cost.

And yet it produced a page where the metaphor survived at only 35-45% without text labels (per Mode 4 auditor measurements). The metaphor was a category error: perfect semantic alignment meant zero interpretive distance.

### Revised Metaphor Scoring Rubric (6 Criteria)

The original 4-criterion rubric missed the most important dimension. The revised rubric adds two criteria:

| # | Criterion | What it measures | Scoring |
|---|-----------|-----------------|---------|
| 1 | **Structural Depth** | Can the metaphor's internal parts map to content at 2+ levels? | 0-3 (unchanged) |
| 2 | **Tension Resonance** | Does the metaphor capture a tension already in the content? | 0-3 (unchanged) |
| 3 | **Mechanism Affinity** | Does the metaphor suggest 3+ CSS mechanisms without forcing? | 0-3 (unchanged) |
| 4 | **Semantic Surplus** | Does the metaphor generate more ideas than needed? | 0-3 (unchanged) |
| 5 | **Interpretive Distance** | How far is the metaphor from the content's own vocabulary? | 0-3 (NEW) |
| 6 | **Content-Shape Fit** | Does the metaphor's density/zone demands match the content's natural shape? | 0-3 (NEW) |

**New threshold:** >= 12/18 (previously 8/12)

### Criterion 5: Interpretive Distance (0-3)

This criterion addresses the ceiling experiment's central metaphor failure.

| Score | Definition | Example |
|-------|-----------|---------|
| **0** | Metaphor uses the content's own vocabulary. Zero gap. | "Secure facility" for content about security zones |
| **1** | Metaphor is from the same domain as the content. Minimal gap. | "Server rack" for content about server infrastructure |
| **2** | Metaphor is from a related but different domain. Moderate gap. | "Canal lock" for content about security (shared: controlled flow, but different: water vs access) |
| **3** | Metaphor is from an unrelated domain. Maximum interpretive gap. | "Geological strata" for content about API confidence (shared: layering, but different: rock vs software) |

**The sweet spot is 2.** Score 3 risks forced mappings. Score 0-1 risks renaming. Score 2 provides interpretive work for the reader without straining the structural isomorphism.

**Key test:** Remove all text labels from the page. Can a reader still perceive the metaphor through visual structure alone? If not, the metaphor is labeling, not structuring. The ceiling experiment's 35-45% survival without labels demonstrates score 0: the metaphor was entirely dependent on labels like "ZONE 1 OF 4 -- EXTERIOR" and "CLEARANCE CHECKPOINT."

### Criterion 6: Content-Shape Fit (0-3)

This criterion prevents the ceiling experiment's density-direction mismatch.

| Score | Definition |
|-------|-----------|
| **0** | Metaphor demands a zone count and density shape that CONTRADICTS content inventory. (Content has 5 sections, metaphor demands 8 zones. Content peaks mid, metaphor demands late peak.) |
| **1** | Metaphor demands a different density shape but CAN be adapted by collapsing or expanding zones. Adaptation required. |
| **2** | Metaphor's natural zone count matches content sections. Density direction is compatible but not perfect. Minor adaptation. |
| **3** | Metaphor's zone count, density direction, and content-type demands all align with the content inventory. No adaptation needed. |

**Minimum acceptable: 2.** Score 0-1 means the metaphor requires structural distortion of the content.

**Scoring procedure:**
1. Compare the content inventory's CONTENT-ONLY ZONE COUNT to the metaphor's natural zone count.
2. Compare the content inventory's DENSITY MAP to the metaphor's density demands.
3. Check whether the metaphor requires content types not present in the inventory.

### Metaphor Candidate Comparison Table

When evaluating metaphor candidates, fill in this table:

```
METAPHOR CANDIDATE COMPARISON
==============================

Content: [source identifier]
Content zones: [N] (from inventory)
Content density shape: [early peak / middle peak / late peak / uniform / multi-peak]
Content vocabulary: [list key terms the content uses]

Candidate 1: [metaphor name]
  Structural Depth:      [0-3]
  Tension Resonance:     [0-3]
  Mechanism Affinity:    [0-3]
  Semantic Surplus:       [0-3]
  Interpretive Distance: [0-3] -- [explain: what interpretive work does reader do?]
  Content-Shape Fit:     [0-3] -- [explain: zone count match? density direction match?]
  TOTAL: [/18]

Candidate 2: [metaphor name]
  [same fields]
  TOTAL: [/18]

Candidate 3: [metaphor name]
  [same fields]
  TOTAL: [/18]

SELECTED: Candidate [N] ([metaphor name])
REASON: [why this candidate over the others, emphasizing criteria 5 and 6]
```

### Metaphor Rejection Checklist

Before committing to a metaphor, verify ALL of the following:

- [ ] Interpretive Distance >= 2 (metaphor does NOT use the content's own vocabulary)
- [ ] Content-Shape Fit >= 2 (metaphor does NOT require restructuring content)
- [ ] Metaphor zone count <= content inventory zone count (no inflation)
- [ ] Metaphor density direction matches content density shape
- [ ] Metaphor survival estimate > 50% without text labels
- [ ] Metaphor does NOT require empty structural zones to be intelligible

If any check fails, the metaphor should be rejected or substantially adapted before commitment.

---

## 4. CONTENT DENSITY PLANNING

### Purpose

Before building, estimate the rendered height of each content section at 960px container width. This prevents the ceiling experiment's failure mode: zones that look substantial in a plan but produce whitespace voids when rendered.

### Height Estimation Rules

**At 960px container, 48px horizontal padding (864px content width), 18px body font:**

| Content type | Height per unit |
|-------------|-----------------|
| Prose paragraph (avg 3 lines) | ~92px (3 lines x 30.6px) |
| Code block (avg 15 lines) | ~315px (15 lines x 21px) |
| Table (avg 5 data rows + header) | ~240px (6 rows x 40px) |
| List (avg 5 items) | ~153px (5 items x 30.6px) |
| ASCII diagram (avg 20 lines) | ~420px (20 lines x 21px inside pre) |
| Callout (label + 2 lines body) | ~92px |
| h2 heading + margin | ~80px |
| h3 heading + margin | ~64px |

**These are approximations.** Actual heights depend on text wrapping, code length, and responsive behavior. The goal is order-of-magnitude accuracy, not pixel precision.

### Zone Density Thresholds

**Minimum content height per zone: 800px.**

Below 800px, the zone's structural overhead (zone indicator ~50px, top/bottom padding ~40-80px, transition elements ~48-80px) approaches 15-20% of the zone's total height. At this ratio, the reader scrolls through perceptible infrastructure to reach thin content. The zone feels hollow.

**Minimum content-to-structure ratio per zone: 85%.**

`zone_content_height / (zone_content_height + zone_structural_overhead) >= 0.85`

Where structural overhead includes:
- Zone padding (top + bottom)
- Zone indicator height (~50px if present)
- Transition element height (one side only; the other side belongs to the adjacent zone)
- Any metaphor-specific structural elements (title bars, checkpoints, etc.)

### Words-Per-Zone Minimum

**Minimum: 300 words of prose OR 5 code blocks OR equivalent mixed content.**

This threshold prevents metaphor-inflated empty zones. The ceiling experiment's Z-OPS-B (Mental Models / "Strategy Room") had only 3 paragraphs and 3 code blocks -- adequate code but thin prose. Combined with the zone's metaphor-driven "strategy room" label and 3px primary left border, the metaphor infrastructure consumed disproportionate attention relative to content.

### Full-Page Density Budget

**Target: total page height should be 60-75% content, 25-40% structure/whitespace.**

Measured at 1440px viewport width:

| Component | Budget |
|-----------|--------|
| Content (prose, code, tables, lists, diagrams, callouts) | 60-75% of total scroll |
| Structural (zone padding, transitions, zone indicators, header, footer) | 15-25% of total scroll |
| Intentional whitespace (designed breathing spaces, inter-section spacing) | 5-10% of total scroll |
| Unintentional void (flanking space outside 960px container) | 0% of VERTICAL scroll (this is horizontal, not vertical) |

**Check: If the content inventory's estimated total height is 12,000px, the maximum total page height should be 12,000px / 0.60 = 20,000px (if targeting 60% content). More than 20,000px means too much structure.**

### Density Planning Table

Fill in before building:

```
DENSITY PLANNING
================

SECTION [N]: [title]
  Content height estimate: [X]px
  Structural overhead:     [Y]px (padding: [a], transition: [b], indicator: [c])
  Content ratio:           [X / (X+Y)] = [Z]%
  PASS/FAIL (>= 85%):     [PASS | FAIL]
  If FAIL:                 MERGE with [adjacent section] or REDUCE overhead

TOTAL CONTENT HEIGHT:      [sum of all section content heights]
TOTAL STRUCTURAL HEIGHT:   [sum of all section overheads]
TOTAL PAGE HEIGHT:         [content + structural]
OVERALL CONTENT RATIO:     [total content / total page] = [Z]%
TARGET RANGE:              60-75%
VERDICT:                   [WITHIN RANGE | TOO SPARSE | TOO DENSE]
```

---

## 5. WORKED EXAMPLE: Retroactive Application to the Ceiling Experiment

### Step 1: Content Inventory (What SHOULD Have Been Done)

```
CONTENT INVENTORY
=================

SOURCE: 004-system-remote-mac.md
WORD COUNT: ~6,500
CONTENT TYPE MIX: 45% prose, 40% code/tables/diagrams, 15% mental models
ESTIMATED READING TIME: ~25 minutes

---

SECTION CATALOG
---------------

SECTION 1: Orientation
  Content type:     NARRATIVE
  Word count:       ~400
  Code blocks:      0
  Tables:           1 (key features)
  Lists:            0
  Diagrams/ASCII:   0
  Callouts:         1 (You Are Here)
  Information density: LOW
  Reader intent:    ORIENT
  Dependencies:     None

SECTION 2: Architecture Overview
  Content type:     MIXED (prose + ASCII diagram)
  Word count:       ~800
  Code blocks:      1 (ASCII architecture diagram)
  Tables:           0
  Lists:            2 (14 items)
  Diagrams/ASCII:   1 (Brain/Tunnel/Body)
  Callouts:         0
  Information density: MEDIUM
  Reader intent:    LEARN
  Dependencies:     Section 1

SECTION 3: Technical Core (Architecture Deep Dive + Installation + Security)
  Content type:     REFERENCE/PROCEDURAL
  Word count:       ~2,500
  Code blocks:      11
  Tables:           4 (endpoints, config, threats, layers)
  Lists:            5 (31 items)
  Diagrams/ASCII:   0
  Callouts:         1 (gotcha)
  Information density: HIGH
  Reader intent:    LEARN + BUILD
  Dependencies:     Section 2

SECTION 4: Integration Patterns + Mental Models
  Content type:     MIXED (prose + diagrams + code)
  Word count:       ~1,800
  Code blocks:      6
  Tables:           1 (combination matrix)
  Lists:            3 (21 items)
  Diagrams/ASCII:   4 (mental model ASCII diagrams)
  Callouts:         1 (essence)
  Information density: HIGH (integration) + MEDIUM (mental models)
  Reader intent:    LEARN + DECIDE
  Dependencies:     Sections 2-3

SECTION 5: Verification & Troubleshooting
  Content type:     REFERENCE/PROCEDURAL
  Word count:       ~1,000
  Code blocks:      7
  Tables:           0
  Lists:            1 (4 items)
  Callouts:         3
  Information density: HIGH
  Reader intent:    VERIFY
  Dependencies:     Sections 3-4

---

NATURAL GROUPINGS
-----------------

GROUP A: Introduction
  Sections: 1
  Why grouped: Standalone orientation
  Combined word count: ~400
  Combined density: LOW

GROUP B: Understanding the Architecture
  Sections: 2
  Why grouped: Conceptual overview, must be absorbed before technical detail
  Combined word count: ~800
  Combined density: MEDIUM

GROUP C: Technical Implementation
  Sections: 3
  Why grouped: Architecture deep dive, installation, configuration,
    and security are all part of "building and securing the system."
    The reader's intent is continuous: LEARN the components, then
    BUILD by installing, then SECURE by configuring. No genuine
    topic shift between "Architecture Deep Dive" and "Installation" --
    both are "how this thing works and how to set it up."
  Combined word count: ~2,500
  Combined density: HIGH

GROUP D: Application & Understanding
  Sections: 4
  Why grouped: Integration patterns and mental models are both about
    APPLYING the system (using it with Ralph/Gas Town/CC-Mirror) and
    UNDERSTANDING it at a higher level (mental models). The reader
    shifts from "build it" to "use it wisely."
  Combined word count: ~1,800
  Combined density: HIGH -> MEDIUM

GROUP E: Verification
  Sections: 5
  Why grouped: Checkpoints and troubleshooting are distinct from
    all prior content. The reader shifts to VERIFYING what they built.
  Combined word count: ~1,000
  Combined density: HIGH

---

DENSITY MAP
-----------

  Section:    1      2      3        4        5
  Density:   LOW    MED    HIGH     HIGH-MED HIGH
  Intent:    ORIENT LEARN  LEARN/   LEARN/   VERIFY
                           BUILD    DECIDE

  Peak: Section 3 (Technical Core)
  Dip:  Section 1 (Orientation)
  Peak position: MIDDLE (section 3 of 5)

---

CONTENT BOUNDARIES
------------------

NATURAL BOUNDARIES:
  Between 1 and 2: Topic shift from "what this is" to "how it works"
  Between 2 and 3: Depth shift from overview to deep dive
  Between 3 and 4: Intent shift from "build it" to "use it"
  Between 4 and 5: Intent shift from "use it" to "verify it"

ARTIFICIAL BOUNDARIES (in the ceiling experiment):
  Between "Architecture Deep Dive" and "Installation": Same reader
    intent (implementing the system). The metaphor created a zone
    boundary (Z-SEC-A -> Z-SEC-B) where the content flows continuously.
  Between "Installation" and "Security": Same reader intent (securing
    the implementation). Another artificial boundary (Z-SEC-B -> Z-SEC-C)
    imposed by the "rooms within a wing" metaphor structure.
  Between "Integration Patterns" and "Mental Models": Marginal
    boundary. Both are about applying the system. The "Operations
    Center" vs "Strategy Room" distinction is metaphor theater.

TOTAL NATURAL SECTIONS: 5

---

ESTIMATED HEIGHT MAP
--------------------

SECTION 1: Orientation
  Prose: 4 paragraphs x 92px = 368px
  Table: 1 x 240px = 240px
  Callout: 1 x 92px = 92px
  Headings: 2 x 72px = 144px
  SECTION TOTAL: ~844px

SECTION 2: Architecture Overview
  Prose: 6 paragraphs x 92px = 552px
  ASCII diagram: 1 x 420px = 420px
  Lists: 14 items x 30.6px = 428px
  Headings: 3 x 72px = 216px
  SECTION TOTAL: ~1,616px

SECTION 3: Technical Core
  Prose: 26 paragraphs x 92px = 2,392px
  Code blocks: 11 x 315px = 3,465px
  Tables: 4 x 240px = 960px
  Lists: 31 items x 30.6px = 949px
  Callout: 1 x 92px = 92px
  Headings: 8 x 68px = 544px
  SECTION TOTAL: ~8,402px

SECTION 4: Integration Patterns + Mental Models
  Prose: 12 paragraphs x 92px = 1,104px
  Code blocks: 6 x 315px = 1,890px
  Table: 1 x 240px = 240px
  Lists: 21 items x 30.6px = 643px
  ASCII diagrams: 4 x 420px = 1,680px
  Callout: 1 x 92px = 92px
  Headings: 6 x 68px = 408px
  SECTION TOTAL: ~6,057px

SECTION 5: Verification & Troubleshooting
  Prose: 12 paragraphs x 92px = 1,104px
  Code blocks: 7 x 315px = 2,205px
  Callouts: 3 x 92px = 276px
  Headings: 2 x 72px = 144px
  SECTION TOTAL: ~3,729px

TOTAL CONTENT HEIGHT: ~20,648px

---

CONTENT-ONLY ZONE COUNT
------------------------

JUSTIFIED ZONES: 5

Zone 1: Orientation (Section 1)
  Content mass: ~844px (PASS: >= 800px)
  Content type change: NARRATIVE -> MIXED (yes)
  Reader intent change: ORIENT -> LEARN (yes)
  ALL THREE MET: YES

Zone 2: Architecture Overview (Section 2)
  Content mass: ~1,616px (PASS)
  Content type change: MIXED -> REFERENCE (yes)
  Reader intent change: LEARN -> LEARN/BUILD (yes)
  ALL THREE MET: YES

Zone 3: Technical Core (Section 3)
  Content mass: ~8,402px (PASS)
  Content type change: REFERENCE -> MIXED (yes)
  Reader intent change: LEARN/BUILD -> LEARN/DECIDE (yes)
  ALL THREE MET: YES

Zone 4: Application & Understanding (Section 4)
  Content mass: ~6,057px (PASS)
  Content type change: MIXED -> REFERENCE (yes)
  Reader intent change: LEARN/DECIDE -> VERIFY (yes)
  ALL THREE MET: YES

Zone 5: Verification (Section 5)
  Content mass: ~3,729px (PASS)
  Content type change: distinct (PROCEDURAL/REFERENCE)
  Reader intent change: VERIFY is distinct from all prior
  ALL THREE MET: YES
```

### Step 2: What the Ceiling Experiment Actually Did (Pattern-First)

The ceiling experiment SKIPPED the content inventory and went straight to metaphor derivation. The metaphor derivation (01-metaphor-derivation.md) assessed the content but in service of FINDING A METAPHOR, not in service of understanding the content's natural structure.

**What the metaphor imposed:**

| Metaphor demand | Content reality | Mismatch |
|----------------|-----------------|----------|
| 4 zones with graduated density (deeper = denser) | 5 natural sections with middle peak | YES -- 4 vs 5 zones, escalating vs arching density |
| Zone 3 "Secured Wing" with 3 sub-rooms (A, B, C) | Section 3 is one continuous technical core | YES -- 3 artificial boundaries within one section |
| Zone 4 "Operations Center" as densest zone | Section 4 (Integration + Mental Models) is less dense than Section 3 | YES -- wrong density direction |
| 3 checkpoint dividers between major zones | 4 natural boundaries; checkpoints add signal where silence would serve | PARTIAL -- checkpoint count close but placement suboptimal |
| 7 transitions (3 SMOOTH, 2 BRIDGE, 2 BREATHING) | 4 natural transitions | YES -- 3 extra transitions for metaphor-demanded sub-zones |
| Zone indicators ("ZONE 1 OF 4 -- EXTERIOR") at each zone | Not needed; content headings already mark sections | YES -- redundant signal layer |

**Total structural blocks created by metaphor: 10** (7 zone sections + 3 checkpoint dividers)
**Natural structural blocks needed: 5** (5 sections)
**Inflation factor: 2x**

### Step 3: What WOULD Have Been Different (Content-First)

**A. Zone Count**

The content inventory identifies 5 justified zones (meeting all 3 criteria). The ceiling experiment created 7 zone sections plus 3 checkpoints = 10 structural blocks. Content-first would have created 5 zones with 4 transitions = 9 structural blocks. But 4 of those transitions would be simple (no checkpoint infrastructure), reducing to 5 zones + 4 simple dividers.

**Eliminated structural blocks:** 5 (3 checkpoint dividers replaced by simple spacing, 2 artificial sub-zone boundaries within Section 3)

**B. Density Direction**

The ceiling experiment demanded escalating density: Z-EXT (sparse) -> Z-LOBBY (moderate) -> Z-SEC (dense) -> Z-OPS (densest). But the content peaks at Section 3 (Technical Core = ~8,402px) and decreases at Section 4 (~6,057px).

Content-first density planning:

```
  Zone:     1     2     3      4      5
  Content:  844  1616  8402   6057   3729
  Density:  LOW   MED  PEAK   HIGH   HIGH
  Visual:   ___   ===  #####  ####   ###
```

The visual treatment should MIRROR this shape:
- Zone 1: Lightest treatment (sparse, welcoming)
- Zone 2: Moderate treatment (transitional)
- Zone 3: HEAVIEST treatment (this is the page's technical core)
- Zone 4: Heavy but LESS than Zone 3 (application, not core)
- Zone 5: Heavy, distinct treatment (verification is action-oriented)

The ceiling experiment's metaphor demanded Zone 4 be densest. The content demanded Zone 3 be densest. Content-first resolves this by letting the visual weight follow the content weight.

**C. Eliminated Elements**

Content-first would have eliminated:

1. **Zone indicators** ("ZONE 1 OF 4 -- EXTERIOR"): +50px x 4 = 200px removed. Background shifts and border-weight changes communicate position without labels.

2. **Checkpoint dividers with dark backgrounds and text labels**: +~130px x 3 = 390px removed. Replace with simple spacing increases (48-80px of designed silence) at the 4 natural boundaries.

3. **Sub-zone boundaries within Section 3**: The ceiling experiment created Z-SEC-A (Architecture Deep Dive), Z-SEC-B (Installation), Z-SEC-C (Security) as separate zone-level sections. Content-first treats these as subsections within a single Zone 3, using h3 headings with standard italic treatment instead of separate zone wrappers.

4. **Workstation title bars** (WS-01, WS-02, WS-03): +~60px x 3 = 180px removed. Integration patterns get h3 headings, not workstation-themed dark title bars.

**Total eliminated overhead: ~770px**

**D. Metaphor Selection**

With content inventory in hand, the metaphor selection would have been different:

The content inventory reveals:
- 5 natural sections
- Middle-peaking density (Section 3 is 2-4x larger than other sections)
- Content vocabulary: "Brain", "Tunnel", "Body", "trust zones", "layers", "bridge"
- Content is LITERALLY about a layered security architecture

**Applying the revised scoring rubric:**

"Secure Facility" metaphor rescored:
- Structural Depth: 3 (unchanged)
- Tension Resonance: 3 (unchanged)
- Mechanism Affinity: 3 (unchanged)
- Semantic Surplus: 3 (unchanged)
- Interpretive Distance: **0** (metaphor uses content's own vocabulary)
- Content-Shape Fit: **1** (metaphor demands 4 escalating zones; content has 5 sections with middle peak)
- **TOTAL: 13/18** (above threshold but dragged down by criteria 5 and 6)

"Canal Lock" metaphor rescored:
- Structural Depth: 3
- Tension Resonance: 3
- Mechanism Affinity: 2
- Semantic Surplus: 2
- Interpretive Distance: **2** (canal locks share "controlled flow" with security but use water/elevation vocabulary, not security vocabulary)
- Content-Shape Fit: **1** (canal locks are sequential/escalating; content peaks mid)
- **TOTAL: 13/18**

A BETTER metaphor for this content (one the ceiling derivation did not consider):

"Geological Cross-Section" metaphor:
- Structural Depth: 3 (surface -> sediment -> bedrock -> mantle -> core)
- Tension Resonance: 2 (security layers map to geological layers, but less tightly than facility)
- Mechanism Affinity: 3 (zone backgrounds, border-weight, spacing compression all naturally suggested)
- Semantic Surplus: 2 (geological vocabulary: strata, core, erosion, pressure, crystallization)
- Interpretive Distance: **3** (geology has no vocabulary overlap with security infrastructure)
- Content-Shape Fit: **2** (geological cross-sections can peak anywhere -- the core is in the middle, not at one end. A middle-peaking structure is natural for geology.)
- **TOTAL: 15/18**

Or "Manuscript / Codex" metaphor:
- Structural Depth: 3 (cover -> preface -> chapters -> appendix)
- Tension Resonance: 2 (the content IS a manual; "manuscript" reframes manual as precious artifact)
- Mechanism Affinity: 3 (typographic scale, border-weight for chapter hierarchy, spacing for page margins)
- Semantic Surplus: 2 (colophon, marginalia, illumination, binding, quire)
- Interpretive Distance: **2** (manuscript shares "structured document" with tech docs but uses physical-book vocabulary)
- Content-Shape Fit: **3** (manuscripts have variable density per chapter; no imposed escalation; the densest chapter is wherever the densest content falls)
- **TOTAL: 15/18**

**Either alternative scores higher than "Secure Facility" when interpretive distance and content-shape fit are included.**

### Step 4: Estimated Height Comparison

**Ceiling experiment (actual):**
- Total content: ~11,500px (from content-form analysis)
- Structural overhead: ~1,200px
- Metaphor infrastructure: zone indicators, checkpoints, workstation bars, transition elements
- Estimated total page height: ~12,700px
- But perceptually: 70-80% void at 1440px (per Mode 4 audit) because 960px column in 1440px viewport + zone uniformity

**Content-first reconstruction (estimated):**
- Total content: ~11,500px (same content)
- Structural overhead: ~430px (5 zones x ~50px average padding overhead + 4 transitions x ~32px average)
- Header + footer: ~250px
- Estimated total page height: ~12,180px
- Saved overhead: ~520px
- But MORE IMPORTANTLY: no zone indicators, no checkpoint labels, no workstation title bars. The 520px savings is SPATIAL, but the real savings is ATTENTIONAL -- approximately 15-20 fewer signal events competing for the reader's attention.

**Signal-to-silence ratio improvement:**

| Metric | Ceiling (actual) | Content-first (estimated) |
|--------|-----------------|--------------------------|
| Signal events | ~67 | ~47 (-20) |
| Silence elements | ~57 | ~70 (+13) |
| Signal:silence ratio | 1.18:1 | 0.67:1 |
| Structural overhead | ~1,200px | ~680px |
| Zone count | 7 sections + 3 checkpoints | 5 sections + 4 simple dividers |
| Zone indicators | 4 (with "ZONE X OF 4" labels) | 0 (background shifts only) |
| Checkpoint dark bars | 3 | 0 (spacing-only transitions) |
| Workstation title bars | 3 | 0 (h3 headings only) |

The content-first version achieves a signal:silence ratio of 0.67:1 -- below 1:1, meaning the page is predominantly quiet, with signal moments emerging from silence. This matches the scale exploration principle: "Richness comes from the ratio of signal to silence, not from the total amount of signal."

### Step 5: What Content-First Changes at Each Pass

**In the flagship architecture's 3-pass model:**

**Pass 1 (Spatial Skeleton):**
- Content inventory is COMPLETE before Pass 1 begins
- Skeleton builder receives the content inventory as input, alongside the metaphor derivation
- The skeleton's zone count matches the content inventory's CONTENT-ONLY ZONE COUNT (maximum)
- Zone heights are proportional to content heights (content-heavy sections get more vertical space)
- No zone indicators, no checkpoint infrastructure -- just zones with background differentiation and simple spacing transitions

**Pass 2 (Compositional Elaboration):**
- Mechanisms are deployed to AMPLIFY existing content density, not to CREATE density where none exists
- A section with 8,402px of content (Zone 3) gets the heaviest mechanism deployment
- A section with 844px of content (Zone 1) gets the lightest mechanism deployment
- No mechanism is deployed in a section just to make the metaphor legible -- if the metaphor needs labels to be perceived, the metaphor is wrong

**Pass 3 (Intentionality Layer):**
- Self-referential elements are placed at content-driven locations (e.g., a code example that styles the callout containing it)
- Bookending echoes the content's own opening/closing (e.g., if the content opens with "what this is" and closes with "verify it works", the bookend connects these)
- Cognitive transitions are placed at NATURAL boundaries identified in the content inventory, not at metaphor-demanded boundaries

---

## INTEGRATION WITH FLAGSHIP ARCHITECTURE

### Where Content Inventory Fits in the 3-Pass Model

```
CONTENT INVENTORY (15-20 min)
    |
    v
METAPHOR DERIVATION (20-30 min) -- uses inventory as input
    |                              to criteria 5 (interpretive distance)
    |                              and 6 (content-shape fit)
    v
METAPHOR RESONANCE GATE (Gate 1)
    |
    v
BUILD PLAN (uses inventory for zone count, density direction)
    |
    v
PASS 1: SPATIAL SKELETON
    |
    v
SPATIAL CONFIDENCE GATE (Gate 2) -- uses inventory's height
    |                                estimates as expected values
    v
PASS 2: COMPOSITIONAL ELABORATION
    |
    v
COMPOSITION VERIFICATION GATE (Gate 4)
    |
    v
PASS 3: INTENTIONALITY LAYER
    |
    v
AUDIT
```

### What the Planner Receives

The planner agent receives THREE inputs:
1. **Content inventory** (this methodology's output) -- what content exists and how it naturally groups
2. **Metaphor derivation** (from metaphor agent) -- what interpretive lens to apply
3. **Design system vocabulary** (from mechanism catalog) -- what tools are available

The planner's job is to SYNTHESIZE these three inputs into a build plan. The content inventory constrains the plan's STRUCTURE (zone count, density direction, height budget). The metaphor constrains the plan's VOCABULARY (mechanism selection, visual language). The design system constrains the plan's GRAMMAR (token values, component patterns, soul compliance).

**The content inventory has VETO POWER over the metaphor.** If the metaphor demands 7 zones but the content inventory identifies 5, the planner creates 5 zones and adapts the metaphor. The metaphor adapts to content; content does not stretch to fill the metaphor.

---

## SUMMARY: THE CONTENT-FIRST SEQUENCE

1. **INVENTORY the content** (15-20 min): Catalog sections, count elements, identify natural boundaries, map density, estimate heights.

2. **DERIVE a metaphor** (20-30 min): Run the tension-composition pipeline, but use the inventory to score criterion 5 (interpretive distance) and criterion 6 (content-shape fit). REJECT metaphors that score < 2 on either.

3. **PLAN with content constraints** (20-30 min): Zone count <= inventory zone count. Density direction matches content shape. Every zone has >= 800px content. Structural overhead <= 20% of content height.

4. **BUILD the skeleton** (30-40 min): Zones proportional to content volume. No zone indicators. Simple transitions. Background shifts and border-weight changes communicate position.

5. **ELABORATE with restraint** (40-60 min): Deploy mechanisms to amplify existing content density. Reject mechanisms that create signal where silence would serve.

6. **ADD intentionality** (20-30 min): Self-reference, bookending, cognitive transitions at content-driven locations.

7. **AUDIT against content budget** (30-40 min): Verify content-to-structure ratio. Verify no zone falls below 85% content. Verify signal:silence ratio < 1:1.

**The entire methodology can be summarized in one imperative: INVENTORY BEFORE YOU IMAGINE.**

---

**END CONTENT-FIRST METHODOLOGY**
