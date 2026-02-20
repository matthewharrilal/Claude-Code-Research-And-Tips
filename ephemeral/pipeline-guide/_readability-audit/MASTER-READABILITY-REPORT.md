# Master Readability Report -- Pipeline v2 Implementation Guide

**Synthesized from:** 7 independent audit reports (information flow, visual hierarchy, prose clarity, technical depth, navigation, consistency, cognitive load)
**File audited:** `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html` (1,927 lines)
**Date:** 2026-02-19

---

## Executive Summary

The Pipeline v2 Implementation Guide is a technically comprehensive document with strong narrative conviction and effective visual architecture. Across 7 audit dimensions, it received consistent praise for its evidence-grounding, checkpoint pacing, and the Section 9 failure analysis (unanimously rated the strongest section). The writing has genuine voice -- "This is the architecture of a studio, not a factory. One artist. Many critics." is the single best sentence in the guide and exemplifies the quality the whole document should aspire to.

**However, 3 BLOCKING issues will cause implementation errors if unfixed:**

1. **Experiment naming collision** -- "Experiment A" in Sections 3/8/Checklist means the $5 conventions test; "Experiment A" in Section 7 means the naked test. A reader following Section 8 will run the wrong experiment. (Flagged by 4/7 auditors.)
2. **Experiment count contradiction** -- Sections 3 and Appendix say "3 experiments"; Section 7 says "5 experiments." (Flagged by 4/7 auditors.)
3. **Flagship "recipe" vs "checklist" mislabel** -- Line 866 calls the Flagship's input a "recipe" but the document's own Failure 8 analysis (Section 9) establishes that the Flagship FAILED because it was a checklist, not a recipe. This undermines Experiment D's rationale. (Flagged by 1 auditor but verified as factually contradictory.)

**Issue counts across all 7 audits:**
- BLOCKING: 5 (3 unique after deduplication)
- SIGNIFICANT: 14
- MINOR/POLISH: 18
- Total unique actionable items: 37

**Strongest areas:** Section 9 (failure analysis), checkpoint pacing, evidence tables, "No-Compromise Principle" framing, Section 4 progressive disclosure pattern.

**Weakest areas:** Visual Overview placement (front-loaded before conceptual grounding), experiment naming/count consistency, navigation for non-linear readers (0 back-to-top links, 0 h3 IDs, 0 reader pathways), and jargon front-loading (~13 terms used before defined).

---

## BLOCKING Issues

### R-01: Experiment Naming Collision Between Sections 3/8 and Section 7 [BLOCKING]

**Flagged by:** Information Flow, Navigation, Consistency, Cognitive Load (4/7 auditors)

**Location:** Section 3 File 6 (lines 1040-1044), Section 7 (lines 1408-1474), Section 8 (lines 1542-1600), Master Checklist (lines 1740-1784)

**What is wrong:** The same letter labels (A, B) refer to completely different experiments in different sections:

| Label | Section 3 / Section 8 / Checklist | Section 7 |
|-------|-----------------------------------|-----------|
| Experiment A | $5 conventions test (1 Opus + brief) | Naked test (1 Opus + 42-line minimal prompt, NO brief) |
| Experiment B | Fat Core full (12 agents) | $5 conventions test (1 Opus + brief) |
| Experiment C | Recipe comparison | Fat Core full (12 agents) |

A reader following Section 8's "Step 3: Experiment A" will execute what Section 7 calls "Experiment B." Section 7's actual Experiment A (the naked test) gets skipped entirely despite Section 7 insisting "ALL 5 EXPERIMENTS -- RUN THEM ALL."

**What to change:** Harmonize ALL experiment references to use Section 7's A-E scheme (which is the most complete and internally consistent). Specific edits:

1. **Line 856** (Section 2 warning box): Change "Experiment A (the $5 test)" to "Experiment B (the $5 conventions test)"
2. **Lines 1040-1044** (Section 3, File 6): Change "3 experiments in strict sequence" to "5 experiments in strict sequence (see Section 7 for full protocol)." Update the 3-item list to reference A-E or remove the list and point to Section 7.
3. **Line 1042**: Change "Experiment A ($5 test)" to "Experiment B ($5 conventions test)"
4. **Line 1043**: Change "Experiment B (Fat Core)" to "Experiment C (Fat Core full)"
5. **Line 1044**: Change "Experiment C (Recipe comparison)" to "Experiment D (Full recipe test)"
6. **Lines 1542-1543** (Section 8, Step 3): Change "Experiment A" / "The $5 test" to "Experiment B" / "The $5 Conventions Test"
7. **Lines 1559-1560** (Section 8, Step 6): Change "Experiment B" / "Full Fat Core end-to-end" to "Experiment C" / "Fat Core Full Test"
8. **Lines 1616-1620** (Section 8, timeline table): Update experiment labels to match
9. **Master Checklist items** (lines 1740-1784): Update all experiment references to match Section 7's labels
10. **Line 1831** (Appendix): Change "3 experiment definitions" to "5 experiment definitions"

Additionally, Section 8 only runs 2 of the 5 experiments. Add a bridging note between Sections 7 and 8:

> **Old (no bridge):** Section 7 ends with results table. Section 8 starts immediately.
>
> **New (add after Section 7's checkpoint or at Section 8's opening):** "The implementation order below incorporates the two highest-cost experiments (B and C from Section 7) as Steps 3 and 6, with decision gates after each. Experiments A (naked test), D (full recipe), and E (head-to-head) can be run at any point after Step 2 is complete -- they require only the conventions brief and content, no infrastructure."

### R-02: Flagship "Recipe" Mislabel on Line 866 [BLOCKING]

**Flagged by:** Consistency audit

**Location:** Line 866, Section 2 evidence table

**What is wrong:** The evidence table says `~530 lines (recipe)` for the Flagship's builder input. But the document's own core argument in Failure 8 (Section 9, line 1663) establishes that the Flagship's problem WAS that it received a checklist, not a recipe. The Middle tier received a recipe and succeeded; the Flagship received a checklist and failed. Calling the Flagship input a "recipe" on line 866 contradicts the Failure 8 analysis and undermines Experiment D's purpose (which tests whether a real recipe improves results).

**What to change:**

> **Old (line 866):** `<tr><td>Flagship</td><td>19</td><td>~530 lines (recipe)</td><td>1.5/4</td><td>Failed</td></tr>`
>
> **New:** `<tr><td>Flagship</td><td>19</td><td>~530 lines (checklist)</td><td>1.5/4</td><td>Failed</td></tr>`

### R-03: "What Comes After" Section Missing from Table of Contents [BLOCKING]

**Flagged by:** Information Flow, Visual Hierarchy, Navigation, Consistency (4/7 auditors)

**Location:** Lines 383-399 (TOC) and line 1849 (section heading)

**What is wrong:** "What Comes After" (h2, id="after", line 1849) is a full section containing Phases E-J, a Freeze Line callout, and a big-picture timeline. It is completely invisible from the Table of Contents. A reader navigating by TOC will never discover it.

**What to change:** Add a 13th item to the TOC:

> **Add after line 397** (after the Appendix entry):
> `<li><a href="#after">What Comes After</a> -- the road ahead after Pipeline v2 ships</li>`

---

## SIGNIFICANT Improvements

### R-04: Move Visual Overview After Section 1 (or After Section 2)

**Flagged by:** Information Flow, Cognitive Load, Visual Hierarchy (3/7 auditors)

**Location:** Visual Overview (lines 405-784) currently appears before Section 1 (line 791)

**What is wrong:** The Visual Overview presents 4 complex diagrams (380 lines) that reference ~20 undefined terms: TC, PA, build-recipe, fractal echo table, transition table, gate IDs SC-01 through SC-15, micro-gates MG-1 through MG-4, channels, scales, anti-scale model, Fat Core, waves. Section 1 (lines 791-847) defines the conceptual foundation needed to understand these diagrams. A reader must either skip the diagrams and return later, or absorb complex visuals without context. The cognitive load audit rated this the document's single worst overload hotspot.

**What to change:** Reorder to: You Are Here -> No-Compromise -> TOC -> **Section 1** -> **Section 2** -> **Visual Overview** -> Sections 3-9...

This means moving the HTML block from lines 405-784 to after the Section 2 checkpoint (approximately line 951). Update the TOC numbering accordingly. Section 1 provides the conceptual vocabulary; Section 2 provides the architectural framing; then the Visual Overview rewards that context instead of demanding it.

If this reorder is too disruptive, the lighter alternative is to add a "read-later" cue at line 407:

> **Old:** "Before diving into implementation details, here is the complete architecture rendered visually."
>
> **New:** "Before diving into implementation details, here is the complete architecture rendered visually. This overview uses terms and concepts explained in Sections 1 and 2. You may want to skim these diagrams now and return to study them after reading those sections."

### R-05: Add a Glossary Box After the Table of Contents

**Flagged by:** Prose Clarity, Navigation, Cognitive Load (3/7 auditors)

**Location:** After line 399 (end of TOC), before the Visual Overview

**What is wrong:** 13+ terms are used before they are defined, with gaps of 400-700 lines between first use and first definition. The worst offender is "multi-coherence" (used line 544, defined line 1258 -- 714 lines apart). PA-05, Fat Core, TC, boundary crossings, Mode 4, and others all appear in the "You Are Here" box or Visual Overview before any explanation.

**What to change:** Insert a collapsible glossary box. Example:

```html
<details>
  <summary>Expand: Key terms used in this guide (~15 definitions)</summary>
  <div class="details-content">
    <dl>
      <dt>Fat Core</dt><dd>Architecture where one Opus agent plans AND builds, surrounded by automated gates and fresh-eyes evaluation.</dd>
      <dt>PA-05</dt><dd>Perceptual Auditing question 5: "Does this page feel designed?" Scored 1-4: FLAT / STYLED / COMPOSED / DESIGNED.</dd>
      <dt>TC / Tension-Composition</dt><dd>The creative planning skill (~1,930 lines) that discovers content tensions and derives visual metaphors.</dd>
      <dt>Mode 4 PA</dt><dd>Full perceptual audit: 9 independent fresh-eyes auditors, each answering 5-6 of the 48 PA questions.</dd>
      <dt>Multi-coherence</dt><dd>When >= 3 CSS channels (background, typography, spacing, borders, behavior, material) shift together at a content boundary.</dd>
      <dt>Boundary crossing</dt><dd>Any point where one agent compresses understanding into a document for another agent. Each crossing loses intelligence.</dd>
      <dt>Conventions brief</dt><dd>A ~100-line document giving the builder identity constraints, perception thresholds, and creative authority -- NOT step-by-step instructions.</dd>
      <dt>Perception threshold</dt><dd>Minimum delta for a CSS change to be humanly visible (e.g., >= 15 RGB points for backgrounds, >= 0.5px for letter-spacing).</dd>
    </dl>
  </div>
</details>
```

This does NOT remove or replace the in-context definitions -- it provides an early lookup for readers who encounter terms before their narrative introduction.

### R-06: Add h3 Sub-Section IDs for Cross-Referencing

**Flagged by:** Navigation audit

**Location:** Throughout the document (~30 h3 headings, all lacking IDs)

**What is wrong:** No h3 element has an `id` attribute. A reader wanting to jump to "Experiment C" or "File 4: gate-runner.js" or "Failure 7" has no anchor to target. Cross-references from other sections cannot link to specific sub-sections. Browser bookmarking is impossible below the h2 level.

**What to change:** Add IDs to at minimum these high-value h3 headings:

- Visual Overview: `id="visual-flow"`, `id="intelligence-stack"`, `id="intelligence-heatmap"`, `id="arch-comparison"`
- Section 3: `id="file-1"` through `id="file-6"`
- Section 7: `id="exp-a"` through `id="exp-e"`
- Section 8: `id="step-1"` through `id="step-7"`
- Section 9: `id="failure-1"` through `id="failure-9"`

Total: ~30 IDs added. This enables all cross-referencing recommendations below and makes the document navigable at sub-section level.

### R-07: Add Back-to-TOC Links After Each Major Section

**Flagged by:** Navigation audit

**Location:** After each checkpoint box and at the end of each major section

**What is wrong:** The document is 1,927 lines (~56KB). After scrolling deep into Section 7 or the Master Checklist, the reader has no quick way to return to the TOC. Every major section requires a manual scroll back.

**What to change:** Add `<p style="text-align:right;font-size:0.85rem;"><a href="#top">Back to Table of Contents</a></p>` after each checkpoint box and after the Master Checklist. Add `id="top"` to the h1 or the page container. Approximately 6 link insertions.

### R-08: Consolidate Inline-Styled Callout Boxes into CSS Classes

**Flagged by:** Visual Hierarchy, Consistency (2/7 auditors)

**Location:** Lines 375, 574, 662, 780, 1873 (plus Visual Overview diagram callouts)

**What is wrong:** Three different visual treatments serve as "insight callouts": (1) class-based boxes (`.warning-box`, `.success-box`), (2) inline-styled callout divs with varying borders, (3) the unique "No-Compromise Principle" box. A reader encountering all three perceives three levels of importance when they serve the same purpose. The inline-styled boxes also have inconsistent spacing compared to class-based ones.

**What to change:** Create 2 new CSS classes:

```css
.principle-box {
  background: #f0ebe3;
  border: 2px solid #5c4b3a;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
}
.insight-box {
  background: #f0ebe3;
  border-left: 4px solid #2a7d7d;
  padding: 0.85rem 1.25rem;
  margin: 1.25rem 0;
  border-radius: 4px;
}
```

Replace inline-styled callouts:
- Line 375 ("No-Compromise"): `class="principle-box"` (remove inline style)
- Line 574 (Key Insight below intelligence stack): `class="warning-box"` (it uses amber border-left)
- Line 662 ("Story This Tells"): `class="insight-box"`
- Line 780 ("Why Fat Core"): `class="insight-box"`
- Line 1873 ("Freeze Line"): create `class="freeze-line-box"` or use `class="warning-box"` with centered text

Also fix 2 warning boxes (lines 855, 1400) that override the class default background with inline `#fdf8f0` (should be `#fef8f0` per CSS definition). Remove the redundant inline `border-left-color` and `background` overrides.

### R-09: Rewrite Section 1 Opening Sentence (92-Word Single Sentence)

**Flagged by:** Prose Clarity audit

**Location:** Line 793, Section 1 opening

**What is wrong:** A single 92-word sentence lists 8 items in series. By the end, the reader has lost the grammatical thread.

**What to change:**

> **Old:** "The design system has been through five exploration stages, a full extraction into a six-layer ontology, a validation experiment, a tier-model investigation, a Middle-tier experiment that succeeded, a Ceiling experiment that succeeded on novelty but failed on richness, a Flagship experiment that failed harder, and months of retrospective analysis that diagnosed exactly why."
>
> **New:** "The design system has been through five exploration stages and a full extraction into a six-layer ontology. Three major experiments followed: the Middle-tier (succeeded), the Ceiling (succeeded on novelty, failed on richness), and the Flagship (failed hardest). Months of retrospective analysis diagnosed exactly *why* each result happened."

Same information, 4 sentences instead of 1. Technical depth preserved.

### R-10: Add Reader Pathway Suggestions Near the TOC

**Flagged by:** Navigation, Cognitive Load (2/7 auditors)

**Location:** After line 399 (end of TOC)

**What is wrong:** The document has ~45-50 distinct concepts across 11+ sections. Different readers need different paths. The "You Are Here" box names the audience but never says "if you want X, skip to Y." Four reader types were identified: builder (wants files/edits/order), philosopher (wants architecture rationale), experimenter (wants protocols), and reference looker (wants gate thresholds/paths).

**What to change:** Insert a small styled box after the TOC:

```html
<div style="background:#f9f6f0;border:1px solid #e0d5c5;padding:1rem 1.25rem;margin-bottom:2rem;border-radius:8px;font-size:0.92rem;">
  <strong>Reading paths:</strong>
  <ul style="margin:0.5rem 0 0;padding-left:1.5rem;">
    <li><strong>Just want to build?</strong> <a href="#s3">Section 3</a> + <a href="#s4">Section 4</a> + <a href="#s8">Section 8</a>, or jump straight to the <a href="#master-checklist">Master Checklist</a>.</li>
    <li><strong>Want to understand the philosophy?</strong> <a href="#s2">Section 2</a> then <a href="#s9">Section 9</a> then <a href="#visual-overview">Visual Overview</a>.</li>
    <li><strong>Ready to experiment?</strong> <a href="#s7">Section 7</a> then <a href="#s8">Section 8</a>.</li>
    <li><strong>Need to look something up?</strong> <a href="#s5">Section 5</a> (gates) or <a href="#appendix">Appendix</a> (file paths).</li>
  </ul>
</div>
```

### R-11: Reduce Data Point Repetition

**Flagged by:** Prose Clarity audit

**Location:** Throughout the document

**What is wrong:** Key data points are repeated excessively, diluting impact:
- "CD-006 scored 39/40" -- 4 occurrences (lines 377, 834, 863, 876)
- "Flagship scored 1.5/4" -- 6 occurrences (lines 368, 377, 867, 1020, 1632, 1663)
- "Same agent plans AND builds" -- 5 occurrences (lines 879, 889, 937, 1304, 1644)
- "9 fresh-eyes auditors" -- 5 occurrences (lines 378, 488, 897, 1331, 1390)

**What to change:** Keep the full statement in the first 2 occurrences (introduction + evidence table). Replace subsequent occurrences with back-references:

- Occurrence 3+: "the inverse quality pattern established in Section 2"
- Vary "plans AND builds" phrasing: "one continuous creative session," "the planner IS the builder," "no handoff boundary"
- Present the evidence table ONCE with full detail (Section 2), then reference by section number.

This preserves ALL technical data while eliminating the "broken record" effect. No information is removed.

### R-12: Reconcile Numeric Inconsistencies

**Flagged by:** Consistency audit

**Location:** Multiple

**What is wrong:** Four numeric inconsistencies exist:

1. **Prohibitions: 22 vs 24.** Line 812 says "22 rules." Line 1811 (Appendix) says "24 identity rules." Pick the correct number and use it consistently.
2. **Token count: 80 vs 65.** Line 813 says "80 design tokens." Line 824 says "65 CSS custom properties." Either reconcile (explain the 15-token gap) or fix the count.
3. **Letter-spacing threshold: 0.02em vs 0.03em.** Line 1012 says ">= 0.03em at 16px." Lines 1191/1215/1262 (SC-14) say "No letter-spacing < 0.02em." These serve different purposes (perception floor vs sub-perceptual prevention) -- add a one-sentence explanation of why two thresholds exist.
4. **TC skill line count: ~1,930 vs 1,878.** Lines 426/800/1817 say ~1,930. Line 709 says 1,878. Pick the correct number.

### R-13: Break the 15-Gate Expandable Into Category Groups

**Flagged by:** Cognitive Load, Visual Hierarchy (2/7 auditors)

**Location:** Lines 1219-1267 (Section 5, gate-by-gate detail)

**What is wrong:** All 15 gates are in a single expandable. When expanded, 47 lines of uninterrupted technical description with no internal visual breaks or grouping. The reader cannot quickly find a specific gate category.

**What to change:** Replace the single `<details>` with 4 grouped expandables:

- "Expand: Soul Gates (SC-01 through SC-05)" -- 5 gates, identity protection
- "Expand: Structure Gates (SC-06, SC-07, SC-08, SC-12)" -- 4 gates, HTML structure
- "Expand: Perception Gates (SC-09, SC-10, SC-11, SC-15)" -- 4 gates, visibility
- "Expand: Composition Gates (SC-13, SC-14)" -- 2 gates, quality

### R-14: Add TLDR Summary Boxes to Dense Sections

**Flagged by:** Cognitive Load audit

**Location:** Before the detail in Sections 5, 7, 9, Master Checklist, and Visual Overview

**What is wrong:** These sections present 12-75 data points before the reader knows the takeaway. A 2-3 line summary at the top of each would let readers decide whether to read the detail.

**What to change:** Add styled summary boxes (use `.checkpoint` or a new `.tldr` class):

- **Visual Overview:** "Pipeline v2 flows through 4 waves: TC plans, builder builds, gates verify, PAs audit. Fat Core merges planning and building into one agent. Perception thresholds prevent invisible CSS."
- **Section 5:** "15 automated checks in 3 timed groups catch 70% of quality issues. The other 30% requires PA auditors. Every gate exists because something failed before."
- **Section 7:** "5 experiments, cheapest first ($5 to $80). If the cheapest test passes, no pipeline is needed. Total cost: ~$150 over ~2 days."
- **Section 9:** "9 diagnosed failures, all caused by compressing intelligence into documents between agents. Fat Core eliminates the compression."
- **Master Checklist:** "7 steps, 4-23 hours total. Fast path (if Experiment B passes): 4-8 hours. Decision gates at Steps 3 and 6."

### R-15: Define Track 1 and Track 2 Before First Reference

**Flagged by:** Consistency audit (orphaned reference O-1)

**Location:** Line 1300 (Section 6 build flow) references "Track 1 or Track 2" but they are only defined in "What Comes After" (lines 1863-1864)

**What is wrong:** The build flow diagram says the orchestrator "Determines: Track 1 or Track 2" but a reader in Section 6 has no context for what this means.

**What to change:** Either:
- (a) Add a brief definition in Section 6: "Track 1 (token + pattern application for data-heavy pages) vs Track 2 (metaphor + composition via /build-page for prose-heavy pages)," or
- (b) Remove the Track 1/2 reference from the build flow diagram if it is not relevant to PV2's initial scope

### R-16: Disambiguate "Phase D" Overloading

**Flagged by:** Consistency audit (orphaned reference O-2)

**Location:** Line 1223, SC-01 gate description

**What is wrong:** "THE primary Phase D failure mode" refers to the project's historical Phase D validation experiments. But Section 5 defines a build-flow "Phase D" (line 1184) meaning the cascade table + self-verification step. A reader in Section 5 naturally interprets "Phase D" as the build phase defined 39 lines earlier.

**What to change:**

> **Old:** "THE primary Phase D failure mode -- 4/5 pages violated it"
>
> **New:** "THE primary failure mode from the Phase D validation experiments -- 4/5 pages violated container width"

### R-17: Add a Checkpoint After Section 7

**Flagged by:** Visual Hierarchy audit

**Location:** After Section 7 (experiments), before Section 8

**What is wrong:** Checkpoints appear after Sections 2, 5, 6, and 9. Section 7 is arguably the most important section (it determines what gets built) but has no checkpoint.

**What to change:** Add:

```html
<div class="checkpoint">
  <div class="checkpoint-header">Checkpoint: Experiment Plan Complete</div>
  <p>You now know the 5 experiments, their costs, their decision criteria, and the decision tree that maps results to architecture choices. The next section tells you what order to build and run everything.</p>
</div>
```

---

## MINOR Polish

### R-18: Add Copy Button to Timeline Code Block (Line 1890)

**Flagged by:** Consistency audit (S-3)

**Location:** Line 1890, "What Comes After" section

**What is wrong:** Every other code block includes `<button class="copy-btn" onclick="copyCode(this)">Copy</button>`. This one does not.

**What to change:** Add the copy button to the opening div.

### R-19: Convert "12 Agents" Code Block to Styled HTML

**Flagged by:** Prose Clarity audit

**Location:** Lines 884-903, Section 2

**What is wrong:** The agent descriptions are prose (sentences, paragraphs) displayed in monospace code-block styling. The copy button reinforces "this is code" but the content is narrative. Genre confusion.

**What to change:** Convert to a styled HTML list or card layout. Reserve code blocks for actual commands, file paths, and data structures. The content stays identical -- only the presentation changes.

### R-20: Strengthen h3/h4 Visual Distinction

**Flagged by:** Visual Hierarchy audit (Priority 3)

**Location:** CSS lines 29-67

**What is wrong:** The h3-to-h4 size difference (1.25rem to 1.05rem = 0.2rem delta) is only ~3.4px at 17px base -- at the threshold of easy perception.

**What to change:** Add a subtle left border or different weight to h4:

```css
h4 { border-left: 3px solid #e0d5c5; padding-left: 0.75rem; }
```

### R-21: Remove Internal Bookkeeping Note from Section 7

**Flagged by:** Prose Clarity audit

**Location:** Line 1401

**What is wrong:** "The PV2 diagram specifies 5 experiments (labeled E/D/A/B/C). This guide relabels them A through E for clarity." This is a meta-reference that interrupts narrative momentum. The reader does not need to know about label mapping between this guide and the PV2 diagram.

**What to change:**

> **Old:** "The PV2 diagram specifies 5 experiments (labeled E/D/A/B/C). This guide relabels them A through E for clarity. Cheapest first."
>
> **New:** "Five experiments, ordered cheapest first."

The PV2 diagram cross-reference labels are already provided in the decision tree code block (lines 1415-1432) for readers who need the mapping.

### R-22: Fix "You Are Here" Box Jargon Front-Loading

**Flagged by:** Prose Clarity audit

**Location:** Line 368

**What is wrong:** The very first paragraph uses "PA-05 1.5/4" in a parenthetical -- PA-05 is not defined until Section 1 (line 806), ~440 lines later.

**What to change:**

> **Old:** "It replaces the failed multi-agent linear pipeline (19 agents, 11 boundary crossings, PA-05 1.5/4)"
>
> **New:** "It replaces the failed multi-agent pipeline -- which scored 1.5 out of 4 on perceptual quality"

### R-23: Explain "Metaphor Collapse" on First Use

**Flagged by:** Prose Clarity audit

**Location:** Line 801

**What is wrong:** "multi-axis questioning, tension derivation, and metaphor collapse" are three undefined technical terms in a row.

**What to change:**

> **Old:** "Phases 1-3 are the creative core -- multi-axis questioning, tension derivation, and metaphor collapse."
>
> **New:** "Phases 1-3 are the creative core -- questioning what the content *needs*, discovering the tension between content and design constraints, then collapsing that tension into a single governing metaphor."

### R-24: Fix Stat-Fragment Voice Breaks

**Flagged by:** Prose Clarity audit

**Location:** Line 875 and several other locations

**What is wrong:** Bare stat fragments break prose voice: "Compression ratio: ~20:1. Intelligence survival: ~35%."

**What to change:**

> **Old:** "Compression ratio: ~20:1. Intelligence survival: ~35%."
>
> **New:** "The compression ratio was roughly 20:1. Only about 35% of the planner's compositional intelligence survived the handoff."

### R-25: Add Cross-References from Section 6 to Visual Overview

**Flagged by:** Information Flow, Visual Hierarchy (2/7 auditors)

**Location:** Line 1292, Section 6 opening

**What is wrong:** Section 6 contains a detailed build flow that substantially overlaps with the Visual Overview's build flow diagram. The reader sees the same flow twice with no acknowledgment.

**What to change:**

> **Old:** "You type /build-page content.md. Here is what happens next."
>
> **New:** "You type /build-page content.md. This section expands on the build flow diagram from the Visual Overview with full annotations and timing."

### R-26: Add Cross-References from Master Checklist to Detailed Sections

**Flagged by:** Navigation audit

**Location:** Lines 1722-1796, Master Checklist

**What is wrong:** Checklist items reference files and edits but do not hyperlink to their detailed descriptions in Sections 3 and 4.

**What to change:** Make file names and edit references into hyperlinks. E.g., "Write conventions-brief.md" should link to `#file-2` (after R-06 adds h3 IDs).

### R-27: Collapse Intelligence Heatmap and Architecture Comparison Tables

**Flagged by:** Cognitive Load audit

**Location:** Lines 586-656 (heatmap) and lines 673-778 (comparison table)

**What is wrong:** The heatmap is a 42-cell matrix requiring simultaneous understanding of 7 stages and 5 layers -- rated the single densest section in the document (35+ concepts per screen). The comparison table is 13 rows x 4 columns (52 data points) presented before the reader knows what the architectures are.

**What to change:** Wrap each in a `<details>` with a meaningful summary:
- Heatmap: `<summary>Expand: Intelligence survival at each pipeline stage (7 stages x 5 layers)</summary>`
- Comparison: `<summary>Expand: Fat Core vs 3 alternatives across 13 dimensions</summary>`

Move the "Story This Tells" box (line 662) and "Why Fat Core" box (line 780) ABOVE their respective tables so they are always visible. The tables become on-demand deep dives.

### R-28: Group Section 4's 6 Details Elements

**Flagged by:** Visual Hierarchy, Cognitive Load (2/7 auditors)

**Location:** Lines 1100-1136, Section 4

**What is wrong:** 6 `<details>` elements are stacked back-to-back. When collapsed, they present as 6 identical-looking bars. The reader cannot distinguish importance or scope without reading each summary.

**What to change:** Group into 2-3 clusters with brief prose between them:
- "Foundation files (tokens, rules, thresholds):" Edits 1-3
- "Skill files (PA, TC):" Edits 3-4
- "Routing files (CLAUDE.md):" Edits 5-6

Or add scope indicators to each summary: "Edit 1 -- tokens.css (~5 lines)" vs "Edits 5A-D -- CLAUDE.md (~46 lines)"

---

## Recommended Section Reordering

The information flow and cognitive load audits independently recommend the same reorder. The visual hierarchy and navigation audits support it.

### Current Order
1. Title + You Are Here + No-Compromise
2. Table of Contents
3. **Visual Overview** (lines 405-784)
4. Section 1: Where We Are
5. Section 2: The Architecture
6. Sections 3-9, Checklist, Appendix
7. What Comes After (unlisted in TOC)

### Proposed Order
1. Title + You Are Here + No-Compromise
2. Table of Contents + **Glossary** (R-05) + **Reading Paths** (R-10)
3. **Section 1: Where We Are** (conceptual foundation)
4. **Section 2: The Architecture** (Fat Core introduction)
5. **Visual Overview** (now the reader has context for every diagram)
6. Sections 3-9, Checklist, Appendix
7. **What Comes After** (now listed in TOC per R-03)

**Impact:** The Information Flow auditor estimates this reorder alone would raise reading order quality from 7/10 to 8.5/10. Combined with experiment naming fixes (R-01), it would reach 9/10.

---

## Cross-Cutting Themes

Seven themes appeared across multiple independent audits:

### Theme 1: The Experiment Naming Problem Is the Dominant Defect
4 of 7 auditors independently flagged the experiment naming collision. It appears as: a forward-reference problem (flow audit), a navigation hazard (nav audit), a BLOCKING contradiction (consistency audit), and a cognitive load contributor (cognitive audit). This is the single highest-priority fix.

### Theme 2: The Visual Overview Is Misplaced
3 auditors independently recommended moving the Visual Overview later. The information flow audit calls it the document's "most significant structural problem." The cognitive load audit rates it the "#1 cognitive load problem." The visual hierarchy audit notes it is "disproportionately large compared to other sections" at 380 lines.

### Theme 3: Progressive Disclosure Is Uneven
Section 4 (Files to Edit) was independently rated the best-structured section by BOTH the cognitive load and visual hierarchy auditors -- because it uses a summary table with individual expandables. Other sections (Visual Overview, Section 5 gate detail, Section 7 experiments) present all information at full density. The pattern that works in Section 4 should be extended.

### Theme 4: The Document Serves Two Audiences Imperfectly
The prose clarity audit identifies a "narrative vs. spec" voice split. The technical depth audit identifies a "decision document vs. implementation document" split. The navigation audit identifies 4 reader types with different optimal paths. The document's default cover-to-cover reading works well for the "philosopher" reader but frustrates the "builder" and "reference" readers.

### Theme 5: Repetition Dilutes Impact
The prose clarity audit counts 28+ repetitions of 7 data points. The visual hierarchy audit notes "duplicate information across formats" (build flow appears 3 times). The consistency audit flags 2 information duplications. The writing is strongest where it states facts once with conviction ("One artist. Many critics.") and weakest where it re-states them for emphasis that no longer lands.

### Theme 6: Technical Depth Is Preserved in Conclusions, Lost in Implementation Specifics
The technical depth audit finds ~80-85% of source CONCLUSIONS survive but only ~55-65% of source content by word count. The losses are concentrated in: copy-paste edit specifications, gate runner Playwright selectors, core agent input routing tables, and conventions brief section-by-section content. The depth audit identifies 4 BLOCKING gaps for implementers -- none of these require changes to readability, only the addition of collapsed `<details>` blocks containing the implementation specifics.

### Theme 7: The Tone Shift in "What Comes After" Is Noticeable
Both the prose clarity and consistency audits flag the "What Comes After" section as tonally different -- it shifts from the confident analytical voice to speculative planning estimates ("2-4 weeks," "4-8 weeks," "roughly 3-5 months") in a document whose philosophy is "cost is irrelevant, effort is irrelevant."

---

## Dissenting Opinions

### On Whether to Collapse the Visual Overview Diagrams
The cognitive load audit recommends collapsing the intelligence heatmap and architecture comparison tables behind `<details>`. The visual hierarchy audit implicitly disagrees by rating these diagrams as "EXCELLENT" and "GOOD" visual elements. **Resolution:** Both are correct -- the diagrams are well-designed but poorly placed. Moving them after Section 2 (R-04) is the primary fix; collapsing (R-27) is the secondary fix for readers who still find them overwhelming after context is provided.

### On Whether to Trim Document Length
The cognitive load audit says "KEEP -- DO NOT TRIM" (the actual narrative is only ~550 lines; the rest is CSS, diagrams, tables, and collapsed content). The prose clarity audit recommends specific trims (remove 2-3 repetitions, tighten the "What Comes After" section). **Resolution:** These are compatible. The document should not be shortened by cutting sections, but it should be tightened by removing redundant phrasings within sections.

### On the Role of Implementation Specifics
The technical depth audit recommends restoring implementation-level details (edit blocks, gate specs, routing tables) via collapsed `<details>` sections. The cognitive load audit recommends MORE collapsing, not less. **Resolution:** Both recommend collapsible progressive disclosure. The technical depth audit wants more content INSIDE expandables; the cognitive load audit wants more content BEHIND expandables. The solution is the same: use `<details>` blocks to serve both audiences.

### On Whether Section 9 Failures Need Visual Treatment
The visual hierarchy audit recommends adding visual badges or numbering to the 9 failures. The prose clarity audit rates Section 9 as "the strongest section in the document" in its current form. **Resolution:** Visual numbering (small colored badges) would improve scannability without disrupting the prose rhythm. But this is low priority -- Section 9 already works.

---

## Summary of All Recommendations by Priority

| ID | Priority | Type | Brief Description |
|----|----------|------|-------------------|
| R-01 | BLOCKING | Fix | Harmonize experiment naming across Sections 3/7/8/Checklist/Appendix |
| R-02 | BLOCKING | Fix | Change Flagship "recipe" to "checklist" on line 866 |
| R-03 | BLOCKING | Fix | Add "What Comes After" to Table of Contents |
| R-04 | SIGNIFICANT | Restructure | Move Visual Overview after Section 2 (or add read-later cue) |
| R-05 | SIGNIFICANT | Add | Insert glossary box after TOC |
| R-06 | SIGNIFICANT | Add | Add h3 sub-section IDs (~30 IDs) |
| R-07 | SIGNIFICANT | Add | Add back-to-TOC links after each section |
| R-08 | SIGNIFICANT | Fix | Consolidate inline-styled callout boxes into CSS classes |
| R-09 | SIGNIFICANT | Rewrite | Break Section 1 opening 92-word sentence into 4 sentences |
| R-10 | SIGNIFICANT | Add | Add reader pathway suggestions near TOC |
| R-11 | SIGNIFICANT | Edit | Reduce repetition of 7 key data points |
| R-12 | SIGNIFICANT | Fix | Reconcile 4 numeric inconsistencies (prohibitions, tokens, letter-spacing, TC lines) |
| R-13 | SIGNIFICANT | Restructure | Break 15-gate expandable into 4 category groups |
| R-14 | SIGNIFICANT | Add | Add TLDR summary boxes to dense sections |
| R-15 | SIGNIFICANT | Fix | Define Track 1/Track 2 before first reference in Section 6 |
| R-16 | SIGNIFICANT | Fix | Disambiguate "Phase D" overloading in SC-01 description |
| R-17 | SIGNIFICANT | Add | Add checkpoint after Section 7 |
| R-18 | MINOR | Fix | Add copy button to timeline code block (line 1890) |
| R-19 | MINOR | Restyle | Convert "12 Agents" code block to styled HTML list |
| R-20 | MINOR | CSS | Strengthen h3/h4 visual distinction |
| R-21 | MINOR | Edit | Remove PV2 diagram label mapping note from Section 7 |
| R-22 | MINOR | Rewrite | Fix "You Are Here" jargon (PA-05 before defined) |
| R-23 | MINOR | Rewrite | Explain "metaphor collapse" on first use |
| R-24 | MINOR | Rewrite | Fix stat-fragment voice breaks |
| R-25 | MINOR | Add | Cross-reference Section 6 to Visual Overview |
| R-26 | MINOR | Add | Cross-reference Master Checklist items to Sections 3/4 |
| R-27 | MINOR | Restructure | Collapse heatmap and comparison tables behind `<details>` |
| R-28 | MINOR | Restructure | Group Section 4's 6 `<details>` elements into clusters |

**Total estimated effort:** R-01 through R-03 (BLOCKING): ~30 min. R-04 through R-17 (SIGNIFICANT): ~2-3 hours. R-18 through R-28 (MINOR): ~1-2 hours. Grand total: ~3.5-5.5 hours for all 28 recommendations.

**Recommended implementation order:** R-01 first (experiment naming -- prevents implementation errors), then R-02 and R-03 (quick fixes), then R-04 (reorder -- highest readability impact), then the remaining SIGNIFICANT items in any order.

---

## Technical Depth Preservation Note

**CRITICAL CONSTRAINT from user:** "Readability and digestibility whilst not obscuring any technical depth."

Every recommendation in this report preserves technical content. Specifically:

- **R-01 (experiment naming):** Fixes labels, does not remove experiments
- **R-04 (reorder):** Moves content, does not delete it
- **R-05 (glossary):** Adds definitions, does not replace in-context explanations
- **R-09 (sentence rewrite):** Same information, more sentences
- **R-11 (reduce repetition):** Back-references replace verbatim repetitions -- the data remains in its canonical location
- **R-14 (TLDR boxes):** Add summaries ABOVE existing detail, do not replace it
- **R-27 (collapse tables):** Put tables behind `<details>`, do not remove them
- **R-21 (remove bookkeeping note):** The only content deletion in this report. The PV2 diagram label mapping (E/D/A/B/C) is already preserved in the decision tree code block; the prose note adds no information.

The technical depth audit identified 4 BLOCKING implementation gaps (copy-paste edit specs, gate runner selectors, core agent routing, conventions brief section specs). These are NOT readability issues -- they are completeness issues. If implementation depth is desired, the recommended approach is Approach 1 from the technical depth audit: add `<details>` blocks inside existing collapsibles containing the implementation specifics. This adds ~600 lines of collapsed content and zero visible complexity.
