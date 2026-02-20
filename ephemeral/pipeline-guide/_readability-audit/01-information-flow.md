# Information Flow and Reading Order Audit

**File:** `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html` (1,927 lines)
**Auditor:** Readability Agent
**Date:** 2026-02-19

---

## Executive Summary

The document has a strong opening orientation and a logical macro-structure, but suffers from a significant structural problem: it front-loads a dense "Visual Overview" section (lines 405-784) that presents the complete architecture in diagram form BEFORE the reader has been given the conceptual foundation to understand it. Sections 1-2 provide the context that makes the Visual Overview meaningful, yet they come after it. Additionally, the document describes the experiments in Section 7 but repeatedly references them throughout Sections 2-6 as future validation, creating a sustained sense of deferred resolution. The "What Comes After" section (lines 1849-1903) is not listed in the Table of Contents, making it an orphaned appendix. Within individual sections, the flow is generally strong -- each section builds coherently on its own internal logic, and the checkpoint boxes provide effective punctuation.

---

## Section-by-Section Flow Analysis

### Title + You Are Here (lines 362-372)

**Verdict: STRONG**

The opening orientation is excellent. Lines 368-371 establish:
- What Pipeline v2 IS ("next-generation build pipeline")
- What it REPLACES ("the failed multi-agent linear pipeline -- 19 agents, 11 boundary crossings, PA-05 1.5/4")
- The leading candidate ("Fat Core architecture")
- The philosophy ("no-compromise... run all 5 experiments, then build whatever wins")
- The provenance ("distillation of 50+ research agents, 41 analysis files")

This gives the reader everything they need to know about where they are and what this document does. No forward references. No jargon without context.

### The No-Compromise Principle (lines 375-380)

**Verdict: STRONG**

Builds directly on the "You Are Here" box. Provides the key evidence that justifies the philosophy: "The Flagship was the most expensive, most carefully planned build -- 19 agents, 530-line prompt, 7 phases -- and it scored 1.5/4. Meanwhile CD-006, one Opus agent with minimal guidance, scored 39/40." (line 377). This is the document's central tension stated early, which is good narrative structure.

The cost argument at line 379 ("experiments cost ~$150... pipeline implementation costs ~$500+") grounds the philosophy in economics. Effective transition into the Table of Contents.

### Table of Contents (lines 383-399)

**Verdict: GOOD with one defect**

The TOC lists 12 items (Visual Overview + Sections 1-9 + Master Checklist + Appendix). The ordering matches the document. However, "What Comes After" (line 1849, `id="after"`) is NOT in the TOC despite being a full section with its own `<h2>` and substantial content (lines 1849-1903). This is an orphan section -- the reader who uses the TOC to navigate will never know it exists.

### Visual Overview (lines 405-784)

**Verdict: PROBLEMATIC -- Major Forward Reference Issue**

This is the document's most significant structural problem. The Visual Overview presents four complex diagrams:
1. The Complete Build Flow (lines 410-523)
2. The 5-Layer Compositional Intelligence Stack (lines 527-576)
3. The Intelligence Heatmap (lines 582-666)
4. Architecture Comparison: Fat Core vs Linear Pipeline (lines 670-784)

Each of these diagrams is dense, technical, and assumes knowledge that the reader does not yet have:

**Forward references in the Build Flow diagram (lines 410-523):**
- "Enriched /tension-composition (Opus)" (line 425) -- TC skill not yet explained (explained in Section 1, line 799)
- "Phases 0-3.5 + Phase 4T. ~660 lines (was ~1,930)" (line 426) -- phase structure not yet explained
- "_build-recipe.md + Transition Table (YAML) + Fractal Echo Table" (line 426) -- three artifacts referenced before any explanation
- "Wave 0.5 -- Fresh-Eyes Metaphor Check" (line 434) -- "STRUCTURAL or ANNOUNCED?" distinction not yet explained
- "8 Binary Checks (was 5)" (line 461) -- handoff gate checks listed before gate system is explained (Section 5)
- "MG-1 (HTML), MG-2 (bg), MG-3 (border), MG-4 (type)" (line 471) -- micro-gates appear only here, never explained elsewhere
- "SC-01 to SC-15" (line 482) -- gate IDs used before the gate system is introduced

**Forward references in the Intelligence Stack (lines 527-576):**
- "Anti-Scale Model" (line 535) -- "Richness = semantic density x restraint x spatial confidence" appears without any explanation of what these terms mean
- "Multi-Coherence" (line 543) -- ">= 3 channels shift together at each boundary" assumes understanding of channels and boundaries
- "6 CSS Channels" (line 551) -- "Chromatic | Typographic | Spatial | Structural | Behavioral | Material" listed without definition

**Forward references in the Heatmap (lines 582-666):**
- "TC Planner" (line 607) -- TC not yet introduced
- "_build-recipe.md -- CRITICAL LOSS POINT" (line 615) -- the build recipe concept not yet explained
- "Fractal Echo Table makes L2 cross the boundary" (line 663) -- fractal echo table not explained anywhere in the document in detail

**Forward references in the Architecture Comparison (lines 670-784):**
- "Master Prompt" / "Original PV2" / "Updated PV2" / "Fat Core (NEW)" (line 677-681) -- three of these four architectures haven't been introduced yet
- "op-recipe" (line 716) -- abbreviation never defined
- "Transition Tbl + Fractal Echo" (line 717) -- artifacts referenced repeatedly but only briefly described later

The Visual Overview does include forward-reference links at the bottom of each diagram (e.g., line 523: "This flow is explained in detail in Section 6"), which partially mitigates the problem. But the reader must either skip the diagrams and return later, or absorb complex visual information without the conceptual scaffolding to interpret it.

### Section 1: Where We Are Right Now (lines 791-847)

**Verdict: STRONG**

This is the conceptual foundation section. It introduces:
- The two skills (TC and PA) with clear explanations (lines 797-806)
- The six-layer ontology in a compact table (lines 808-830)
- The crown jewel CD-006 (lines 832-834)
- What is missing (lines 836-844) -- five gaps, clearly listed

The flow within this section is excellent: here's what exists, here's how it's organized, here's the proof it works, here's what's missing. The "What Is Missing" list (lines 838-844) provides a natural transition to Section 2.

**Key observation:** This section SHOULD come before the Visual Overview. Lines 797-806 explain TC and PA skills; lines 808-830 explain the six-layer ontology. These are prerequisites for understanding the diagrams. Reading order should be: You Are Here -> Section 1 -> Visual Overview -> Section 2.

### Section 2: The Architecture (lines 852-951)

**Verdict: GOOD**

Opens with an important caveat (lines 855-857): "Fat Core is the recommended architecture... But it has not been validated by experiments yet." This is honest framing.

The evidence table (lines 861-867) is compelling and well-placed -- showing the inverse correlation between agent count and quality. The "Where Intelligence Goes to Die" sub-section (lines 873-876) explains the compression problem clearly. The 12 Agents listing (lines 884-903) is concrete and specific.

**Minor flow issue:** The "Why This Is Not the Flagship" table (lines 935-944) partially duplicates the Architecture Comparison table from the Visual Overview (lines 674-778). The reader encounters overlapping information in a different format without acknowledgment that they've seen a broader version of this comparison already.

### Section 3: Files to Create (lines 957-1079)

**Verdict: STRONG**

Clean, actionable section. Opens with the key fact: "6 new files. Not 40, not 20 -- six." (line 959). Each file gets its own sub-section with purpose, size, and design decisions in expandable details.

The file dependency diagram at lines 1049-1078 is especially effective -- it shows how the 6 files relate to each other and to existing files. This is a "how it fits together" diagram that belongs in this position.

**One minor confusion:** File 6 is "experiment-protocol.md" listing "3 experiments" (line 1040), but Section 7 describes 5 experiments. The discrepancy is because File 6 was designed earlier when only 3 experiments were planned. This is never acknowledged, which could confuse a careful reader.

### Section 4: Files to Edit (lines 1086-1144)

**Verdict: STRONG**

Compact and well-organized. The summary table (lines 1090-1098) gives a quick overview. Each edit gets an expandable details section. The "Problem Solved" column in the table ties each edit back to a diagnosed failure, reinforcing the evidence-based approach.

Flows naturally from Section 3 (create) to Section 4 (edit). Together they answer "what do we change?"

### Section 5: The Gate System (lines 1150-1283)

**Verdict: STRONG**

The phase-locked gate timing diagram (lines 1159-1195) is one of the document's best visual elements -- clear, sequential, and tied to specific gate IDs. The quick reference table (lines 1200-1217) is a useful lookup. The expandable gate-by-gate detail (lines 1220-1267) provides depth without cluttering the main flow.

The "70/30 Boundary" table (lines 1270-1277) is a particularly effective conceptual tool -- it draws a clear line between what code can check and what requires human judgment.

**Builds well on:** Section 3 (which introduced gate-runner.js and gate-registry.js) and Section 4 (which introduced the perception thresholds that gates enforce).

### Section 6: The Build Flow (lines 1290-1391)

**Verdict: GOOD with minor redundancy**

The complete build flow diagram (lines 1294-1349) is detailed and step-by-step. The timing breakdown (lines 1353-1372) adds useful concreteness. The 7 Boundary Crossings table (lines 1374-1385) is excellent.

**Redundancy issue:** This section substantially overlaps with the Visual Overview's "Complete Build Flow" diagram (lines 410-523). The reader sees the same flow twice in different formats. The Visual Overview version is more visual; this version is more annotated. They serve slightly different purposes, but the overlap is notable. The document would benefit from either (a) moving the Visual Overview version here, or (b) explicitly noting that this section expands on the earlier diagram.

### Section 7: The Experiments (lines 1398-1520)

**Verdict: STRONG**

Excellent section. The warning box (lines 1400-1402) firmly establishes priority: "These experiments are not optional. They are Step 1." The decision tree (lines 1408-1448) is clear and complete. Each experiment gets a concise description with purpose and justification.

**Inconsistency with Section 3:** Section 3, File 6 (experiment-protocol.md, line 1040) describes "3 experiments in strict sequence." Section 7 describes 5 experiments labeled A through E (line 1401 explains the relabeling from the PV2 diagram). The reader who carefully read Section 3 will notice this discrepancy. The document should either update File 6's description to say "5 experiments" or explain the evolution.

**Inconsistency with Section 8:** Section 8 only describes "Experiment A" and "Experiment B" in the implementation order (Steps 3 and 6). Experiments C, D, and E from Section 7 are not mentioned in the implementation order. This creates confusion about whether all 5 experiments will actually be run or whether the "A" and "B" in Section 8 correspond to different experiments than Section 7's A and B. Cross-referencing reveals that Section 8's "Experiment A" corresponds to Section 7's "Experiment B" (the $5 conventions test), and Section 8's "Experiment B" corresponds to Section 7's "Experiment C" (Fat Core full test). This is a significant naming collision.

### Section 8: The Implementation Order (lines 1527-1623)

**Verdict: GOOD with naming confusion**

The dependency diagram (lines 1531-1568) is clear and actionable. The "Fast Path" callout (lines 1607-1609) is a particularly useful insight for the reader.

**Critical naming problem:** As noted above, Section 8 uses "Experiment A" and "Experiment B" but these do NOT map to Section 7's "Experiment A" and "Experiment B":
- Section 8 Step 3 = "Experiment A" = "1 Opus agent + conventions brief + content" (line 1587)
- Section 7 Experiment A = "The Naked Test... 42-line minimal prompt, NO pipeline" (line 1452)
- Section 7 Experiment B = "The $5 Conventions Test... conventions brief + tokens.css + prohibitions" (line 1457)

Section 8's "Experiment A" is actually Section 7's "Experiment B." Section 8's "Experiment B" is Section 7's "Experiment C." This is genuinely confusing and would cause implementation errors. The reader who follows Section 8's implementation order will not run Section 7's "Experiment A" (the Naked Test) at all, despite Section 7 insisting "ALL 5 EXPERIMENTS -- RUN THEM ALL."

### Section 9: Why This Won't Fail (lines 1630-1708)

**Verdict: STRONG**

Each of the 9 failures follows a consistent and effective pattern: "What happened" -> "How Fat Core prevents it." The expandable meta-pattern table (lines 1670-1688) is a strong analytical synthesis. The "What Could Still Go Wrong" section (lines 1690-1701) is honest and grounded.

This section works well as a confidence-builder before the Master Checklist. It answers the reader's natural skepticism.

### Master Checklist (lines 1714-1797)

**Verdict: STRONG**

Interactive checkboxes are a practical touch. The checklist follows the implementation order from Section 8. Each item references specific files and line counts.

**Carries forward the naming confusion** from Section 8 (Step 3 calls it "Experiment A" which is actually Section 7's Experiment B).

### Appendix: Key File Paths (lines 1803-1841)

**Verdict: GOOD**

Useful reference section. Organized into three tables: existing files, new files, and research/continuity files. Each table includes purpose descriptions.

### What Comes After (lines 1849-1903)

**Verdict: GOOD but orphaned**

This section provides a valuable roadmap: Phases E through J, a freeze line, and a big-picture timeline. The content is solid.

**Structural problem:** This section is NOT in the Table of Contents (lines 383-399). A reader navigating by TOC would jump from "Appendix: Key File Paths" to nothing. The section heading `id="after"` is not linked from anywhere in the TOC. This makes it an orphan.

### Footer (lines 1906-1910)

**Verdict: GOOD**

Clean, informative footer with date, source, and philosophy.

---

## Forward Reference Problems

Ranked by severity:

| Severity | Location | Problem |
|----------|----------|---------|
| **HIGH** | Visual Overview (lines 405-784) before Section 1 (line 791) | Four dense diagrams reference concepts (TC, PA, build-recipe, fractal echo table, transition table, gate IDs SC-01 through SC-15, micro-gates MG-1 through MG-4, channels, scales, anti-scale model) that are only explained in Sections 1-6. The reader either skips forward or absorbs visual complexity without understanding. |
| **HIGH** | Section 8 naming vs Section 7 naming | "Experiment A" in Section 8 (line 1587) is Experiment B in Section 7 (line 1457). "Experiment B" in Section 8 (line 1600) is Experiment C in Section 7 (line 1461). This is a naming collision that will cause implementation errors. |
| **MEDIUM** | Section 3 File 6 (line 1040): "3 experiments" vs Section 7: 5 experiments | File 6 describes a 3-experiment protocol. Section 7 describes 5 experiments. The evolution is never explained. |
| **MEDIUM** | "Fractal Echo Table" referenced 4 times | Lines 426, 462, 663, 717 all reference the "Fractal Echo Table" but it is never fully explained anywhere in the document. The reader is told it "makes L2 cross the boundary" (line 663) but not what it contains or how it works. |
| **MEDIUM** | "Transition Table" referenced 4 times | Lines 426, 462, 663, 717 reference the "Transition Table (YAML)" without explaining its contents or structure. |
| **LOW** | "op-recipe" abbreviation (line 716) | Used once in the comparison table, never defined. Presumably "operational-recipe.md" but the reader must guess. |
| **LOW** | Micro-gates MG-1 through MG-4 (line 471) | Mentioned only in the Visual Overview build flow. Not referenced in Section 5 (Gate System) or Section 6 (Build Flow). These appear to be part of the "Updated PV2" column but their relationship to Fat Core is unclear. |

---

## Recommended Reordering

### Primary Recommendation: Move Visual Overview after Section 2

**Current order:**
1. You Are Here + Philosophy
2. Table of Contents
3. **Visual Overview (lines 405-784)**
4. Section 1: Where We Are
5. Section 2: The Architecture
6. Sections 3-9...

**Proposed order:**
1. You Are Here + Philosophy
2. Table of Contents
3. **Section 1: Where We Are** (conceptual foundation)
4. **Section 2: The Architecture** (Fat Core introduction)
5. **Visual Overview** (now the reader has context for every diagram)
6. Sections 3-9...

**Rationale:** Section 1 introduces TC, PA, the six-layer ontology, CD-006, and the five missing pieces. Section 2 introduces Fat Core, the inverse correlation, and the intelligence compression problem. With that foundation, every diagram in the Visual Overview becomes meaningful on first read instead of requiring a second pass.

### Secondary Recommendation: Add "What Comes After" to the TOC

Add `<li><a href="#after">What Comes After</a> -- the road ahead after Pipeline v2 ships</li>` to the Table of Contents. This is a simple fix that prevents an entire section from being invisible to TOC-navigating readers.

### Tertiary Recommendation: Harmonize experiment naming

Either:
- (a) Rename Section 8's experiments to match Section 7 (e.g., "Run Experiment B" instead of "Experiment A" in Step 3), OR
- (b) Add a cross-reference note in Section 8: "Note: This guide's implementation order starts with Section 7's Experiment B (the conventions brief test), not Experiment A (the naked test). The naked test can be run before or after Step 2."

---

## Transition Improvements Needed

### 1. Visual Overview needs a "read-later" cue (lines 405-407)

**Current (line 407):** "Before diving into implementation details, here is the complete architecture rendered visually."

**Suggested:** Add a note like: "This overview uses terms and concepts explained in Sections 1 and 2. You may find it useful to skim these diagrams now and return to study them after reading those sections." This sets the expectation that the reader won't understand everything on first pass.

### 2. Section 6 should acknowledge overlap with Visual Overview

**Current (line 1292):** "You type /build-page content.md. Here is what happens next."

**Suggested:** "You type /build-page content.md. This expands on the build flow diagram from the Visual Overview with full annotations and timing." This tells the reader this is the detailed version of something they've already seen.

### 3. Section 7 to Section 8 transition needs a bridge

**Current:** Section 7 ends with a results table (lines 1511-1520). Section 8 starts with "The Implementation Order" (line 1527).

**Problem:** Section 7 describes 5 experiments; Section 8's implementation order only includes 2 of them. There is no transition explaining why. A bridging sentence is needed, such as: "The implementation order below focuses on the two highest-priority experiments (B and C from Section 7). The remaining experiments (A, D, E) can be run before or after as resources allow."

### 4. Section 3 File 6 needs a forward-reference note

**Current (line 1040):** "3 experiments in strict sequence."

**Suggested:** "3-5 experiments (see Section 7 for the complete protocol, which expanded to 5 experiments during analysis)." This prevents the 3-vs-5 discrepancy from confusing the reader.

### 5. Master Checklist to What Comes After needs a divider or transition

**Current:** The Master Checklist ends at line 1797. "What Comes After" begins at line 1849 after a divider.

**Suggested:** The checkpoint at lines 1704-1708 says "What remains is the master checklist below -- the definitive 'do this' list." After the checklist, there should be an equivalent bridge: "With the implementation checklist complete, here is the longer-term roadmap."

---

## Does the Document Tell a Coherent Story?

**Yes, with qualifications.** The story is: "Here's what we have. Here's what went wrong. Here's what we'll build differently. Here's how to test it. Here's how to build it." That narrative arc is sound and well-executed.

The qualifications:
1. The Visual Overview is a spoiler -- it reveals the complete architecture before the story explains why it looks this way.
2. The experiment naming collision between Sections 7 and 8 breaks the implementation narrative.
3. The "What Comes After" section extends the story but isn't visible in the navigation.

Despite these issues, a reader who starts at the top and reads linearly will come away with a thorough understanding of Pipeline v2, its motivation, and its implementation plan. The checkpoint boxes provide effective narrative punctuation. The evidence tables ground every decision in experiment data. The expandable details sections manage information density well.

**Overall reading order quality: 7/10.** The reordering recommendation (moving Visual Overview after Section 2) would raise this to 8.5/10. Fixing the experiment naming collision would raise it to 9/10.
