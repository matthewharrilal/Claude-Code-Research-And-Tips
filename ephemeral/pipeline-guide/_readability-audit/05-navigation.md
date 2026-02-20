# Navigation & Wayfinding Audit

## Executive Summary

The document has a **solid TOC structure** covering 12 items with accurate anchor links, and the section ordering follows a logical progression from context to implementation. However, the guide has **significant wayfinding gaps** for non-linear readers: no back-to-top links, no inter-section quick-jump aids, no glossary for the ~40 specialized terms used throughout, and an unlisted section ("What Comes After") that is invisible from the TOC. The guide works well for cover-to-cover reading but poorly for reference lookups. Three distinct reader pathways exist but are not surfaced -- the "You Are Here" box names the audience but never says "if you want X, skip to Y."

**Overall navigation grade: B-** -- Functional for linear readers, frustrating for reference users, and missing several standard wayfinding aids.

---

## TOC Audit

### What Is Listed (12 items)

| # | TOC Label | href Target | Target Exists? | Label Matches Section Title? |
|---|-----------|-------------|----------------|------------------------------|
| 1 | Visual Overview | `#visual-overview` | YES (line 406) | YES -- "The Pipeline v2 Architecture -- Visual Overview" |
| 2 | Where We Are Right Now | `#s1` | YES (line 791) | YES -- "1. Where We Are Right Now" |
| 3 | The Architecture: Fat Core | `#s2` | YES (line 853) | YES -- "2. The Architecture: Fat Core (Leading Candidate -- Pending Experiments)" |
| 4 | The Files We Need to Create | `#s3` | YES (line 957) | YES -- "3. The Files We Need to Create" |
| 5 | The Files We Need to Edit | `#s4` | YES (line 1086) | YES -- "4. The Files We Need to Edit" |
| 6 | The Gate System | `#s5` | YES (line 1151) | YES -- "5. The Gate System -- All 15 Gates" |
| 7 | The Build Flow | `#s6` | YES (line 1290) | YES -- "6. The Build Flow" |
| 8 | The Experiments | `#s7` | YES (line 1398) | YES -- "7. The Experiments -- THE FIRST THING WE DO" |
| 9 | The Implementation Order | `#s8` | YES (line 1527) | YES -- "8. The Implementation Order" |
| 10 | Why This Won't Fail | `#s9` | YES (line 1630) | YES -- "9. Why This Won't Fail" |
| 11 | Master Checklist | `#master-checklist` | YES (line 1718) | YES -- "Master Checklist" |
| 12 | Appendix: Key File Paths | `#appendix` | YES (line 1803) | YES -- "Appendix: Key File Paths" |

**All 12 links are valid and point to existing IDs. Label-to-title matches are accurate.**

### What Is MISSING From the TOC

1. **"What Comes After" section** (line 1849, id `#after`) -- This is a full `<h2>` section with 6 subsections (Phases E through J) and a timeline diagram. It is completely absent from the TOC. This is the most significant TOC gap.

2. **Sub-section entries** -- The TOC is flat (no nested items). Sections 2, 3, 5, 7, and 8 have significant sub-sections (e.g., "The 12 Agents," "File 1-6 details," "Experiment A-E," "Step 1-7") that a reader doing lookup navigation would benefit from seeing.

3. **The "No-Compromise Principle" box** (line 375) -- This is a visually prominent styled box between the "You Are Here" section and the TOC. It has no ID and is not referenced from anywhere. A reader who scrolled past it cannot navigate back.

---

## Section ID Inventory

### H2-Level IDs (navigable anchors)

| ID | Line | Content |
|----|------|---------|
| `visual-overview` | 406 | The Pipeline v2 Architecture -- Visual Overview |
| `s1` | 791 | 1. Where We Are Right Now |
| `s2` | 853 | 2. The Architecture: Fat Core |
| `s3` | 957 | 3. The Files We Need to Create |
| `s4` | 1086 | 4. The Files We Need to Edit |
| `s5` | 1151 | 5. The Gate System |
| `s6` | 1290 | 6. The Build Flow |
| `s7` | 1398 | 7. The Experiments |
| `s8` | 1527 | 8. The Implementation Order |
| `s9` | 1630 | 9. Why This Won't Fail |
| `master-checklist` | 1718 | Master Checklist |
| `appendix` | 1803 | Appendix: Key File Paths |
| `after` | 1849 | What Comes After |

**Total: 13 H2-level IDs. All present and correctly formed.**

### H3-Level IDs

**NONE.** No `<h3>` element in the document has an `id` attribute. There are approximately 30+ `<h3>` headings (e.g., "The Complete Build Flow," "The 5-Layer Compositional Intelligence Stack," "The Two Skills," "The Evidence That Changed Everything," "Experiment A: The Naked Test," etc.) and none are linkable.

This is a significant navigation gap. A reader wanting to jump directly to "Experiment A" or "File 4: gate-runner.js" has no anchor to target.

### H4-Level IDs

**NONE.** The 15 gate detail headings (SC-01 through SC-15) inside the collapsible `<details>` block and the 7 implementation steps all lack IDs.

---

## Reader Pathway Analysis

### Reader Type 1: "I just want to know what to build"

**Profile:** An implementer who wants the file list, the edit list, and the order to do them.

**Ideal path:** TOC -> Section 3 (files to create) -> Section 4 (files to edit) -> Section 8 (implementation order) -> Master Checklist.

**Current experience:**
- The TOC correctly lists all four destinations. The reader can jump to `#s3`, `#s4`, `#s8`, and `#master-checklist`.
- **Problem 1:** After reading Section 3, there is no "Next: Files to Edit" link. The reader must scroll back to the TOC or scroll forward linearly.
- **Problem 2:** The Master Checklist duplicates Sections 3/4/8 in condensed form. A builder-type reader might not realize this until they've already read all three sections. There is no upfront note saying "If you want the condensed version, skip to the Master Checklist."
- **Problem 3:** Within Section 3, individual files (File 1-6) have `<h3>` headings but no IDs, so cross-references from other sections cannot link directly to a specific file.

**Rating: B** -- The high-level jumps work, but intra-section navigation is missing.

### Reader Type 2: "I want to understand the philosophy"

**Profile:** A researcher or decision-maker who wants to understand WHY this architecture was chosen.

**Ideal path:** "You Are Here" -> "No-Compromise Principle" -> Visual Overview (especially the intelligence heatmap and comparison table) -> Section 2 (architecture) -> Section 9 (failure analysis) -> Section 7 (experiment rationale).

**Current experience:**
- The "You Are Here" box and the "No-Compromise Principle" box provide excellent orientation at the top.
- **Problem 1:** The philosophy content is distributed across 4 locations: the intro boxes (lines 366-380), the Visual Overview's intelligence stack/heatmap (lines 527-666), Section 2's evidence tables (lines 859-877), and Section 9's failure analysis (lines 1633-1698). There is no "philosophy path" that links these together.
- **Problem 2:** The Visual Overview subsections (intelligence stack, heatmap, architecture comparison) have no IDs, so the reader cannot bookmark or share links to specific diagrams.
- **Problem 3:** Section 9's individual failure headings (Failure 1-9) have no IDs, so other sections cannot cross-reference specific failures.

**Rating: B-** -- Philosophy content is excellent but scattered. No pathway connects the philosophical thread.

### Reader Type 3: "I want the experiment plan"

**Profile:** Someone ready to run experiments and wants exact protocols.

**Ideal path:** TOC -> Section 7 -> Experiment A -> Experiment B -> ... -> Decision tree -> Shared Protocol.

**Current experience:**
- The TOC links to `#s7` correctly.
- **Problem 1:** Individual experiments (A through E) have `<h3>` headings but no IDs. A reader cannot jump directly to "Experiment C."
- **Problem 2:** The "Decision Tree" code block is the most actionable content but has no heading or ID of its own -- it is embedded in the section flow.
- **Problem 3:** Section 8 (Implementation Order) references "Step 3: Experiment A" and "Step 6: Experiment B" but these have no anchor links back to Section 7's experiment details. The reader must manually scroll.
- **Problem 4:** The experiments in Section 7 are numbered A-E but the Implementation Order in Section 8 maps them to Steps 3 and 6 with different letter-label mappings (Exp A in S7 = Step 3 in S8; Exp B in S7 = Step 6 in S8 BUT S7's "Experiment B" is the "$5 Conventions Test" while S8's "Experiment B" is the "Full Fat Core"). This mapping confusion is a navigation hazard.

**CRITICAL FINDING:** Section 7 defines 5 experiments (A-E) but Section 8 only references 2 of them (Steps 3 and 6). The relationship between Section 7's 5-experiment protocol and Section 8's 7-step implementation is unclear. Section 8 calls Step 3 "Experiment A -- The $5 Test" but Section 7's "Experiment A" is "The Naked Test" and Section 7's "Experiment B" is "The $5 Conventions Test." This is a **label collision** that will confuse navigating readers.

**Rating: C+** -- The core content is there but internal cross-referencing and label consistency are problematic.

### Reader Type 4: "I need to look up a specific gate or file path"

**Profile:** Someone in mid-implementation who needs to check a gate threshold or file location.

**Ideal path:** Quick reference section -> specific gate detail.

**Current experience:**
- The gate quick reference table (lines 1200-1217) is excellent and scannable.
- The Appendix file path tables (lines 1806-1841) are comprehensive.
- **Problem 1:** Neither the gate detail section (inside `<details>`) nor the individual gate headings (SC-01 through SC-15) have IDs. The reader can get to Section 5 but cannot link to SC-09 specifically.
- **Problem 2:** The perception thresholds table appears in TWO places: Section 3/File 3 (lines 1008-1017) and the gate detail for SC-09 (line 1247). No cross-reference connects them.
- **Problem 3:** File paths are mentioned throughout the document (in inline `<code>` tags) but there is no unified index beyond the Appendix. A reader looking for where `conventions-brief.md` is discussed would need to search the page manually.

**Rating: C** -- Reference lookup works for gates (the table is good) but specific gate drilldown is impossible without scrolling through the details block.

---

## Cross-Reference Audit

### Existing Cross-References (Good)

The document has several effective inline cross-references:

1. **Line 523:** "This flow is explained in detail in Section 6. The 15 gates are documented in Section 5. The fix integration cycle is covered in Section 9." -- Links to `#s6`, `#s5`, `#s9`. Excellent.
2. **Line 578:** "Layer definitions and their pipeline survival are explained in Section 2. The gates enforcing each layer are in Section 5." -- Links to `#s2`, `#s5`. Good.
3. **Line 666:** "The intelligence drain and its fixes are the core of Section 2. The Fat Core alternative eliminates most of these boundaries." -- Links to `#s2`. Good.
4. **Line 784:** "The Fat Core architecture is explained in full in Section 2. The experiments that will validate it are in Section 7. The implementation order is in Section 8." -- Links to `#s2`, `#s7`, `#s8`. Excellent.

These cross-references appear at the end of the Visual Overview subsections and consistently guide the reader forward. This is a strong pattern.

### Missing Cross-References

1. **Section 3 -> Section 5:** File 4 (gate-runner.js) describes gates but does not link to Section 5 where all 15 gates are detailed.
2. **Section 3 -> Section 7:** File 6 (experiment-protocol.md) describes "3 experiments" but does not link to Section 7 which defines 5 experiments. This also creates a content discrepancy (3 vs 5).
3. **Section 5 -> Section 9:** Individual gate details mention specific failures (e.g., SC-01 mentions "THE primary Phase D failure mode") but do not link to the corresponding failure analysis in Section 9.
4. **Section 8 -> Section 7:** Implementation steps reference experiments by letter label but do not hyperlink to the experiment definitions.
5. **Section 9 -> Sections 2-6:** Each failure analysis mentions what Fat Core does differently but does not link to the specific architectural component that addresses it.
6. **Master Checklist -> Sections 3-4:** Checklist items describe edits and file creations but do not link to the detailed descriptions in Sections 3 and 4.
7. **"What Comes After" -> Section 7:** Phases E-J reference the pipeline but do not link back to the architecture/experiment sections.
8. **Checkpoints -> previous sections:** The checkpoint boxes summarize what the reader has learned but do not provide "go back to" links if the reader wants to review.

### Cross-Reference Quality

The existing cross-references follow a consistent pattern: they appear in `<em>` italic blocks after diagram/table sections and link forward to detailed explanations. This pattern works well and should be extended to sections that currently lack them (Sections 3, 4, 8, 9, and "What Comes After").

---

## Missing Navigation Aids

### 1. Back-to-Top / Back-to-TOC Links

**Severity: HIGH.** The document is 1,927 lines / ~56KB. After scrolling deep into Section 7 or the Master Checklist, the reader has no quick way to return to the TOC. Every major section (after checkpoints, after the master checklist, after the appendix) should have a "Back to Table of Contents" link.

### 2. Section-to-Section Navigation (Prev/Next)

**Severity: MEDIUM.** There are no "Previous Section / Next Section" links at the end of each section. The checkpoints are close -- they summarize what was learned -- but they do not provide forward/backward navigation.

### 3. Glossary / Term Index

**Severity: MEDIUM.** The document uses ~40 specialized terms without centralized definitions:

- **Architecture terms:** Fat Core, Linear Pipeline, Master Prompt, Updated PV2, conventions brief
- **Measurement terms:** PA-05, Mode 4, DESIGNED/COMPOSED/STYLED/FLAT, multi-coherence, perception threshold
- **Gate names:** SC-01 through SC-15, G1/G2/G3, MG-1 through MG-4
- **Process terms:** Wave 0/0.5/0.9/1/2/3, boundary crossing, destructive boundary, fix cycle
- **File names:** build-recipe, conventions-brief, gate-runner, gate-registry, experiment-protocol
- **Intelligence layers:** L1-L5, anti-scale model, channels, scales

Some terms are defined on first use (e.g., PA-05 is explained in Section 1). Others are used without definition (e.g., "Wave 0.9" appears in diagrams but is never formally defined as a term). A glossary would help all reader types.

### 4. Quick-Jump Reader Pathways

**Severity: MEDIUM.** The "You Are Here" box (lines 366-372) explains what the document IS but does not say "if you are a [type of reader], start at [section]." Adding 3-4 pathway suggestions near the TOC would dramatically improve wayfinding for non-linear readers.

### 5. Searchable Keyword Anchors

**Severity: LOW.** Browser Ctrl+F works for in-page search, but key terms like gate names (SC-09) and experiment labels (Experiment A) appear in multiple locations. Without unique IDs on sub-sections, a reader searching for "SC-09" will cycle through 4+ mentions with no way to identify the canonical definition.

### 6. H3 Sub-Section IDs

**Severity: HIGH.** The single largest structural gap. ~30 sub-sections have no IDs. Adding IDs to at least the following would dramatically improve navigation:
- Each of the 6 new files in Section 3
- Each of the 6 edits in Section 4
- Each of the 5 experiments in Section 7
- Each of the 7 implementation steps in Section 8
- Each of the 9 failures in Section 9
- Each visual overview subsection (complete build flow, intelligence stack, heatmap, architecture comparison)

---

## Recommendations

### Priority 1: Critical (Should Fix)

1. **Add `#after` to the TOC.** The "What Comes After" section (id `after`, line 1849) is a full H2 section with substantial content (Phases E-J, timeline) and is completely invisible from the TOC. Add it as item 13.

2. **Add IDs to all H3 sub-sections.** At minimum:
   - `#exp-a` through `#exp-e` for the 5 experiments
   - `#file-1` through `#file-6` for the 6 new files
   - `#step-1` through `#step-7` for the 7 implementation steps
   - `#failure-1` through `#failure-9` for the 9 failure analyses
   - `#visual-flow`, `#intelligence-stack`, `#intelligence-heatmap`, `#arch-comparison` for the 4 visual overview subsections

3. **Fix the experiment label collision between Section 7 and Section 8.** Section 7 defines Experiments A-E. Section 8 maps these to Steps 3 and 6, but Section 8 uses "Experiment A" to mean what Section 7 calls "Experiment B." Either:
   - Make Section 8 consistently reference Section 7's labels ("Run Section 7's Experiment B"), or
   - Add a mapping table at the top of Section 8 showing the label correspondence, or
   - Unify the labeling so the same experiment has the same letter in both sections.

### Priority 2: Important (Should Add)

4. **Add "Back to Table of Contents" links** after each checkpoint box and at the end of each major section. A simple `<p style="text-align:right;"><a href="#top">Back to Table of Contents</a></p>` with a `#top` id on the TOC or page title.

5. **Add reader pathway suggestions** near the TOC. For example:
   - "Just want to build? Start at [Section 3] or jump to the [Master Checklist]."
   - "Want to understand the philosophy? Read [Visual Overview] then [Section 2] then [Section 9]."
   - "Ready to experiment? Go to [Section 7], then [Section 8]."

6. **Add cross-references from Master Checklist items back to their detailed descriptions** in Sections 3 and 4. Each checklist item references a file or edit -- make those references hyperlinks.

7. **Add cross-references from Section 8 steps to Section 7 experiment details.** Steps 3 and 6 should link to the corresponding experiment definitions.

### Priority 3: Nice to Have

8. **Add a Glossary section** (or collapsible glossary block near the TOC) defining the ~15 most critical terms: Fat Core, PA-05, Mode 4, multi-coherence, conventions brief, perception threshold, SC-01 through SC-15, Wave 0/1/2/3, L1-L5.

9. **Add nested TOC entries** for the most important sub-sections (at least the 5 experiments and the 7 implementation steps).

10. **Add `<a id="top"></a>` to the page title** and ensure `scroll-behavior: smooth` (already present at line 11) enables smooth scrolling to all anchor targets.

11. **Consider a sticky/floating TOC** (CSS `position: sticky`) for the sidebar on wide viewports, or a floating "hamburger" TOC button. This is a larger design change but would significantly improve navigation for a 1,927-line document.

12. **Reconcile the experiment count discrepancy.** Section 3/File 6 says "3 experiments" while Section 7 defines 5 experiments and Section 8 runs only 2 of them. Clarify which experiments are in the experiment-protocol.md file versus which are defined only in this guide.

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| TOC items | 12 (should be 13 -- missing "What Comes After") |
| H2 sections with IDs | 13/13 (100%) |
| H3 sub-sections with IDs | 0/~30 (0%) |
| H4 sub-sections with IDs | 0/~15 (0%) |
| Cross-references present | 4 good clusters in Visual Overview |
| Cross-references missing | 8 identified locations |
| Back-to-top links | 0 |
| Reader pathway suggestions | 0 |
| Glossary | None |
| Experiment label consistency | BROKEN (Section 7 vs Section 8 collision) |
