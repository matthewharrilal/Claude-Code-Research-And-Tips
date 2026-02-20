# 07 -- Cognitive Load and Progressive Disclosure Audit

## Executive Summary

The Pipeline v2 Implementation Guide is a 1,927-line document that manages an enormous amount of technical information with **generally good pacing** but suffers from **three distinct cognitive overload zones** and **underutilizes progressive disclosure** in several sections that would benefit greatly from it. The document's greatest strength is its consistent use of visual breaks (diagrams, tables, checkpoints, colored boxes). Its greatest weakness is the front-loaded Visual Overview section (lines 405-784), which packs 380 lines of dense diagrammatic and tabular content before the reader has any conceptual grounding.

**Overall cognitive load rating: MEDIUM-HIGH.** Manageable for an expert reader who already knows the project history, but overwhelming for anyone approaching it fresh. The guide asks the reader to absorb approximately 45-50 distinct concepts across 11 sections. Several sections present 5+ concepts per screen without intermediate rest points.

**Length assessment: KEEP, but restructure.** The 1,927 lines are justified by the scope of the material. Trimming would lose substance. The fix is not shorter content but better progressive disclosure -- hiding depth behind expandable sections and adding TLDR summaries to dense sections.

---

## Section-by-Section Density Rating

### Title + You Are Here (lines 361-372) -- **LIGHT**
- 12 lines of orientation. Good length, good framing.
- Concepts per screen: 2 (what PV2 is, what this guide covers)
- No issues. This is model "You Are Here" usage.

### No-Compromise Principle (lines 374-380) -- **MEDIUM**
- 6 lines in a styled box. Three paragraphs, each making a distinct point.
- Concepts per screen: 3 (shortcuts cost more, the rule, why experiments first)
- Slightly dense for its box format but acceptable given the philosophical framing role.

### Table of Contents (lines 382-399) -- **LIGHT**
- Clean, scannable. 11 items with brief descriptors.
- Concepts per screen: 1 (document structure)
- No issues.

### Visual Overview -- Complete Build Flow Diagram (lines 405-523) -- **DENSE**
- 118 lines of inline-styled CSS diagram rendered as nested divs.
- Concepts per screen: 7-8 (Wave 0, Wave 0.5, Metaphor Check, Handoff Gate, Wave 1, Wave 2 Layer 1/2, Wave 3/Fix/Escalate, Output)
- **PROBLEM:** This is the first content section after the TOC, and it immediately presents the most complex visual in the entire document. The reader has no mental model yet for what "waves" are, what "TC" means, or why there are gates. The diagram is architecture-first when the reader needs narrative-first.
- The introductory sentence (line 407) says "Before diving into implementation details" but the diagram IS implementation details.

### Visual Overview -- 5-Layer Intelligence Stack (lines 526-576) -- **DENSE**
- 50 lines of stacked pyramid diagram + explanation box.
- Concepts per screen: 6 (5 layers + the dependency relationship + status annotations)
- Each layer introduces a distinct concept (Anti-Scale Model, Multi-Coherence, 6 CSS Channels, 5 Scales, Perception Thresholds). These are NOT self-explanatory terms.
- The "Key Insight" box at line 574 is the actual explanatory content. It comes AFTER the diagram.

### Visual Overview -- Intelligence Heatmap (lines 581-666) -- **OVERWHELMING**
- 85 lines. A 7-row x 6-column table with colored progress bars and status labels.
- Concepts per screen: 35+ (7 pipeline stages x 5 intelligence levels, each with a unique status and color)
- **THIS IS THE SINGLE DENSEST SECTION IN THE DOCUMENT.** A 42-cell matrix where every cell requires interpretation. The reader must simultaneously understand: what each pipeline stage is, what each intelligence layer is, what each color/status means, and what the progression pattern tells them.
- The legend (line 658) helps but comes AFTER the table.
- The "Story This Tells" box (line 662) is excellent but should PRECEDE the table, not follow it.

### Visual Overview -- Architecture Comparison Table (lines 669-784) -- **DENSE**
- 115 lines. A 4-column x 13-row comparison table.
- Concepts per screen: 13 dimensions x 4 architectures = 52 data points
- The reader is asked to compare four architectures across 13 dimensions before being told what any of these architectures actually are (Section 2 hasn't happened yet).
- The "Why Fat Core" quote box at line 780 is effective but buried after a dense table.

### Section 1: Where We Are (lines 790-847) -- **MEDIUM**
- 57 lines covering the two skills, six-layer ontology, crown jewel, and what's missing.
- Concepts per screen: ~6 (two skills, six layers summarized, CD-006, five missing pieces)
- The six-layer ontology table (lines 810-818) is appropriately dense -- it's a reference lookup.
- The collapsible "Layer-by-layer detail" (lines 820-830) is **excellent progressive disclosure.** This is the model for the rest of the document.
- Good pacing overall. Each subsection is short enough to scan.

### Section 2: The Architecture (lines 852-951) -- **MEDIUM-DENSE**
- 99 lines. Evidence table, boundary explanation, Fat Core principle, 12 agents code block, 3 gates table, comparison table, collapsible build sequence.
- Concepts per screen: ~5 per subsection, ~15 total
- The "12 Agents" code block (lines 884-903) is clear and well-structured.
- The comparison table (lines 935-944) repeats some information from the Visual Overview table, which creates mild redundancy but also serves as a more focused comparison.
- Good use of collapsible for the full build sequence.

### Section 3: Files to Create (lines 956-1079) -- **MEDIUM**
- 123 lines. Overview table, then 6 files described individually.
- Concepts per screen: ~2 per file subsection, ~12 total
- Good progressive disclosure pattern: summary table first, then expandable detail for each file.
- Files 1-3 have the right level of top-level summary. Files 4-6 are appropriately brief.
- The "How These Files Relate" diagram (lines 1049-1078) is an excellent structural anchor.

### Section 4: Files to Edit (lines 1085-1144) -- **MEDIUM**
- 59 lines. One summary table + 6 collapsible detail sections.
- Concepts per screen: ~2-3 (table scan + one expand at a time)
- **Excellent progressive disclosure.** All 6 edits are collapsed by default. The summary table provides enough context to decide which to expand.
- This is the best-structured section in the document. Other sections should emulate it.

### Section 5: The Gate System (lines 1150-1283) -- **DENSE**
- 133 lines. Phase-locked diagram, 15-gate quick reference table, expandable gate-by-gate detail, 70/30 boundary table.
- Concepts per screen: The quick reference table alone presents 15 gates x 5 columns = 75 data points.
- The expandable gate-by-gate detail (lines 1219-1267) is good progressive disclosure -- but the content inside is 47 lines of dense technical detail (15 sub-sections in a single expandable). This should be split into 3-4 smaller expandables grouped by category (Soul, Structure, Perception, Composition).
- The 70/30 boundary table (lines 1270-1277) is a good conceptual anchor.

### Section 6: The Build Flow (lines 1290-1391) -- **MEDIUM**
- 101 lines. ASCII flow diagram, timing breakdown, boundary crossings table.
- Concepts per screen: ~4 per subsection
- The timing breakdown (lines 1353-1372) is clear and scannable.
- The boundary crossings table (lines 1375-1385) is concise and well-labeled.
- Good pacing. Each subsection serves a distinct purpose.

### Section 7: The Experiments (lines 1397-1499) -- **MEDIUM-DENSE**
- 102 lines. Decision tree code block, 5 experiment descriptions, results table, expandable 2D model.
- Concepts per screen: ~3-4 per experiment description, ~15 total
- The decision tree code block (lines 1408-1448) is 40 lines -- long but justified given its importance.
- The 5 experiments are well-structured individually but presented consecutively with no visual breaks between them. By Experiment D, the reader may lose track of the differences.
- The "results determine" table (lines 1511-1520) repeats decision tree content, creating mild redundancy.

### Section 8: Implementation Order (lines 1527-1623) -- **MEDIUM**
- 96 lines. Dependency diagram, 7 step descriptions, timeline table.
- Concepts per screen: ~2 per step
- The dependency diagram (lines 1531-1568) is clear and scannable.
- The "Fast Path" success box (lines 1607-1609) is an effective attention anchor.
- Good pacing. Chronological structure naturally guides the reader.

### Section 9: Why This Won't Fail (lines 1630-1708) -- **MEDIUM-DENSE**
- 78 lines. 9 failure/fix pairs + expandable meta-pattern + risk list.
- Concepts per screen: ~3-4 per failure pair, ~12 total
- Each failure follows a consistent "What happened / How Fat Core prevents it" pattern. This is well-structured.
- The expandable meta-pattern table (lines 1670-1688) is appropriately collapsed.
- The "What Could Still Go Wrong" list (lines 1690-1697) is excellent -- it shows intellectual honesty.

### Master Checklist (lines 1718-1796) -- **MEDIUM**
- 78 lines. Interactive checkboxes in 7 groups.
- Concepts per screen: ~3-5 per checklist group
- Well-structured with sub-items indented.
- **Decision gate emphasis** at Steps 3 and 6 is appropriate.

### Appendix (lines 1803-1841) -- **LIGHT-MEDIUM**
- 38 lines. Three reference tables.
- Pure lookup content. Appropriately dense for an appendix.

### What Comes After (lines 1849-1903) -- **MEDIUM**
- 54 lines. 4 phases (E-J) + big picture timeline.
- Concepts per screen: ~2 per phase
- Good pacing. Forward-looking content that doesn't require deep understanding.

### Footer (lines 1905-1927) -- **LIGHT**
- 22 lines including script. No issues.

---

## Sections Needing Collapsible Wrappers

### HIGH PRIORITY (should be collapsed by default)

1. **Intelligence Heatmap table (lines 586-656)** -- Wrap the entire table in `<details>` with summary "Expand: Intelligence survival at each pipeline stage." Show only the "Story This Tells" box by default.

2. **Architecture Comparison table (lines 673-778)** -- Wrap in `<details>` with summary "Expand: Fat Core vs 3 alternatives across 13 dimensions." Show only the "Why Fat Core" quote by default.

3. **Gate quick reference table (lines 1198-1217)** -- Wrap in `<details>` with summary "Expand: All 15 gates at a glance." The phase-locked diagram above already conveys the structure; the 15-row table is reference material.

4. **Experiment descriptions C, D, E (lines 1461-1474)** -- Each experiment after B is increasingly specialized. Collapse C/D/E individually so the reader can expand on demand. A and B stay visible since they are the most likely outcomes.

5. **Timing breakdown (lines 1353-1372)** -- Useful reference but not essential to the narrative flow. Wrap in `<details>`.

### MEDIUM PRIORITY (would benefit from collapsing)

6. **5-Layer Intelligence Stack diagram (lines 530-572)** -- Consider collapsing the full pyramid and showing only the "Key Insight" box + a one-sentence summary: "5 layers of intelligence, each depending on the one below. Currently only L1 survives to the builder."

7. **Six-layer ontology table in Section 1 (lines 810-818)** -- Already partially disclosed via the expandable detail below it, but the table itself could be collapsed for readers who already know the ontology.

8. **Failures 4-9 in Section 9 (lines 1646-1668)** -- The first 3 failures establish the pattern. Consider collapsing 4-9 as a group: "Expand: 6 additional diagnosed failures and their prevention."

---

## Sections Needing TLDR Summaries

1. **Visual Overview section (before line 410)** -- Needs a 3-4 line TLDR: "Pipeline v2 flows through 4 waves: TC plans, builder builds, gates verify, PAs audit. Fat Core merges planning and building into one agent. Perception thresholds are the floor that prevents invisible CSS."

2. **Section 5: Gate System (before the phase-locked diagram, ~line 1157)** -- Needs a TLDR: "15 automated checks in 3 timed groups catch 70% of quality issues. The other 30% (does it FEEL designed?) requires human-caliber PA auditors. Every gate exists because something failed before."

3. **Section 7: Experiments (before the decision tree, ~line 1404)** -- Needs a TLDR: "5 experiments, cheapest first ($5 to $80). If the cheapest test passes, no pipeline is needed. We build whatever wins. Total cost: ~$150 over ~2 days."

4. **Section 9: Why This Won't Fail (before Failure 1, ~line 1633)** -- Needs a TLDR: "9 diagnosed failures, all caused by compressing intelligence into documents between agents. Fat Core eliminates the compression by putting one intelligent agent at the center."

5. **Master Checklist (before the first checklist group, ~line 1720)** -- Needs a TLDR: "7 steps, 4-23 hours total. Fast path (Experiment A passes): 4-8 hours. Full path: 15-23 hours. Decision gates at Steps 3 and 6 determine scope."

---

## Information Overload Hotspots

### CRITICAL HOTSPOT 1: Visual Overview (lines 405-784)
- **380 lines** of diagrams and tables BEFORE the narrative sections that explain them.
- Contains ~4 complex visualizations, 2 dense tables, and introduces ~20 terms without definition.
- **Cognitive load: OVERWHELMING for first-time readers.**
- This section assumes the reader already knows: what TC is, what waves are, what intelligence layers are, what Fat Core means, what the Flagship was. None of these are defined until later sections.

### CRITICAL HOTSPOT 2: Intelligence Heatmap (lines 586-656)
- 42-cell matrix requiring simultaneous understanding of 7 stages and 5 layers.
- Color-coded status bars with 6 different states.
- A reader needs ~3 minutes to parse this table, during which no narrative progress happens.

### SIGNIFICANT HOTSPOT 3: Section 5 expanded gate detail (lines 1222-1266)
- 15 gates described in sequence within a single expandable section.
- Once expanded, this is 44 lines of uninterrupted technical description.
- No internal visual breaks, no grouping by category.

### SIGNIFICANT HOTSPOT 4: Section 7 decision tree (lines 1408-1448)
- 40-line code block with branching logic.
- Mixes experiment labels (A-E) with diagram labels (E/D/A/B/C) creating a mapping burden.
- The relabeling note (line 1401) helps but the dual-labeling persists throughout the block.

### MODERATE HOTSPOT 5: Architecture comparison table (lines 674-778)
- 13 rows x 4 columns = 52 data points, many requiring domain knowledge to interpret.
- Presented before the reader knows what "Master Prompt," "Original PV2," or "Updated PV2" refer to.

---

## Pacing Recommendations

### 1. Move the Visual Overview AFTER Section 1
The Visual Overview (lines 405-784) should come AFTER "Where We Are Right Now" (Section 1), not before it. Section 1 gives the reader the conceptual foundation needed to interpret the diagrams. Currently, the reader encounters architecture diagrams before understanding what they're looking at.

**Proposed order:** Title -> You Are Here -> No-Compromise -> TOC -> Section 1 (context) -> Visual Overview (now armed with context) -> Section 2 (architecture detail).

### 2. Add breathing room between Visual Overview diagrams
Each of the 4 visual elements in the overview should be separated by a 2-3 line narrative bridge explaining what the next diagram shows and why it matters. Currently they flow directly into each other.

### 3. Break the 15-gate expandable into 4 sub-expandables
Replace the single "Expand: Gate-by-gate detail (all 15 gates with fix recipes)" with:
- "Expand: Soul Gates (SC-01 through SC-05)" -- 5 gates, identity protection
- "Expand: Structure Gates (SC-06, SC-07, SC-08, SC-12)" -- 4 gates, HTML structure
- "Expand: Perception Gates (SC-09, SC-10, SC-11, SC-15)" -- 4 gates, visibility
- "Expand: Composition Gates (SC-13, SC-14)" -- 2 gates, quality

### 4. Add "At a Glance" boxes to Sections 5, 7, and 9
Each of these sections has a clear one-sentence thesis that gets buried in detail:
- Section 5: "15 gates catch 70% of issues; PA catches the rest."
- Section 7: "5 experiments, cheapest first. Build whatever wins."
- Section 9: "Every failure came from compressing intelligence between agents."

Present these as styled boxes BEFORE the detail, not after.

### 5. Reduce redundancy between Visual Overview and later sections
The architecture comparison table appears twice (Visual Overview lines 674-778 and Section 2 lines 935-944). The decision tree appears in text form (Section 7) and tabular form (Section 7 results table). Consider keeping only the more detailed version and cross-referencing the other.

### 6. Add progress indicators
After Sections 1, 4, 6, and 9, the guide has natural transition points. Consider brief progress markers: "You are now X/11 sections through the guide. Coming next: [section name]." The checkpoints partially serve this role but they summarize content rather than orient progress.

---

## Length Assessment

### Verdict: KEEP -- DO NOT TRIM

The 1,927 lines break down approximately as:
- CSS styles: ~356 lines (18.5%) -- necessary infrastructure, not read by humans
- Diagrams/visual elements: ~400 lines (20.8%) -- critical for comprehension
- Tables: ~230 lines (11.9%) -- reference material, appropriately dense
- Collapsible content: ~150 lines (7.8%) -- already hidden by default
- Narrative/explanatory text: ~550 lines (28.5%) -- the core content
- Checklist/appendix: ~150 lines (7.8%) -- reference material
- Boilerplate (head, footer, script): ~90 lines (4.7%)

The actual narrative content is ~550 lines -- a reasonable length for a guide covering architecture, 6 new files, 6 edits, 15 gates, 5 experiments, implementation order, and failure analysis. Trimming would mean cutting substance.

**The problem is not length but information architecture.** The same 1,927 lines would feel lighter with better progressive disclosure, TLDR summaries, and reordered sections. The content is worth keeping; the presentation needs tuning.

### What COULD be trimmed (optional, low priority)
- The redundant architecture comparison (Visual Overview version vs Section 2 version): remove the Section 2 version (~10 lines saved), keep the detailed Visual Overview version.
- The timing breakdown in Section 6 (lines 1353-1372): could be collapsed rather than shown, saving visible space.
- The "Shared Protocol" sub-section in Section 7 (lines 1501-1508): could be merged into the experiment preamble.
- Total potential trim: ~30-40 lines (negligible).

---

## Specific Suggestions for Managing Cognitive Load

### 1. Front-load the "story" before the "map"
The guide currently opens with a map (Visual Overview) before telling the story (Sections 1-2). Reorder so the reader understands WHY before seeing HOW. The TOC already provides structural orientation; the Visual Overview should reward context, not demand it.

### 2. Use a "key terms" sidebar or glossary box
First-time readers encounter at least 15 domain-specific terms before they are defined: TC, Fat Core, PA-05, Mode 4, waves, gates, intelligence layers, anti-scale model, multi-coherence, fractal echo, perception thresholds, convention brief, soul properties, boundary crossings, cascade table. A small glossary box after the TOC or at the start of the Visual Overview would dramatically reduce cognitive load.

### 3. Number the diagrams
There are 8+ diagrams/visual elements. Cross-references say things like "this flow is explained in Section 6" but the diagrams themselves have no figure numbers. Adding "Figure 1: Complete Build Flow," "Figure 2: Intelligence Stack," etc. would make cross-referencing precise.

### 4. Add hover/title tooltips on abbreviations
If this were served on the web, `<abbr>` tags on TC, PA, PA-05, SC-XX would provide definitions on hover. Even without JavaScript interactivity, wrapping first occurrences in `<abbr title="...">` is zero-cost progressive disclosure.

### 5. Use visual weight to distinguish "must read" from "reference"
Currently, the narrative text and the reference tables have the same visual weight. Consider dimming reference tables slightly (lighter text color, reduced font size) or adding a "REFERENCE" label to signal "you don't need to read this line by line."

### 6. Limit concepts per viewport to 3-4
The worst offenders are:
- Intelligence Heatmap: 35+ concepts in one table
- Architecture comparison: 52 data points in one table
- 15-gate quick reference: 75 data points in one table

For each of these, add a 2-3 sentence summary ABOVE the table that captures the key takeaway, so readers who don't need every data point can skip the table entirely.

### 7. Consider a "Reading Paths" section after the TOC
Different readers need different things:
- **Quick start reader:** Sections 1, 3, 8, Master Checklist
- **Architecture deep-dive reader:** Sections 1, 2, 5, 6
- **Experiment planner:** Sections 7, 8
- **Failure analyst:** Section 9

A "Reading Paths" box with these 4 paths would cut perceived length by 60-75% for each reader type.

---

## Summary of All Recommendations (Priority-Ordered)

| # | Recommendation | Impact | Effort |
|---|---|---|---|
| 1 | Move Visual Overview after Section 1 | HIGH -- fixes the #1 cognitive load problem | LOW -- structural reorder |
| 2 | Add TLDR summaries to Sections 5, 7, 9, Master Checklist, Visual Overview | HIGH -- lets readers skip detail | LOW -- 5 short paragraphs |
| 3 | Collapse Intelligence Heatmap and Architecture Comparison tables | HIGH -- removes 2 overload hotspots | LOW -- wrap in `<details>` |
| 4 | Break 15-gate expandable into 4 category groups | MEDIUM -- improves usability of key reference | LOW -- restructure one section |
| 5 | Add glossary/key terms box after TOC | MEDIUM -- reduces jargon barrier | LOW -- one new box |
| 6 | Add "Reading Paths" guide after TOC | MEDIUM -- reduces perceived length by 60-75% | LOW -- one new box |
| 7 | Add narrative bridges between Visual Overview diagrams | MEDIUM -- improves pacing | LOW -- 3-4 short paragraphs |
| 8 | Add figure numbers to diagrams | LOW-MEDIUM -- improves cross-referencing | TRIVIAL |
| 9 | Collapse experiments C/D/E individually | LOW -- most readers will read all 5 | LOW |
| 10 | Add `<abbr>` tags to first occurrences of domain terms | LOW -- improves accessibility | MEDIUM -- many terms |
