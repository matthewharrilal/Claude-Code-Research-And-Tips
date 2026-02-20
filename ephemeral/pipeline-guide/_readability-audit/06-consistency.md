# Consistency Audit Report

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html`
**Auditor:** Consistency Auditor (Opus)
**Date:** 2026-02-19

---

## Executive Summary

The document is **moderately consistent** for a file that went through 4 major edit passes, but contains **3 BLOCKING contradictions**, **4 significant inconsistencies**, **3 orphaned references**, **2 duplications**, **3 style inconsistencies**, and **2 tone shifts**. The most serious problem is the experiment naming/numbering collision between Section 3, Section 7, and Section 8 -- a reader following these instructions would execute the wrong experiments.

Overall consistency score: **6/10** -- the core narrative holds together, but cross-section references have fractured under the edit passes.

---

## CONTRADICTIONS (3 BLOCKING)

### C-1: Experiment Count -- "3 experiments" vs "5 experiments" [BLOCKING]

The document cannot agree on how many experiments there are.

**3 experiments (from earlier pass, Sections 3 and Appendix):**
- Line 968: `experiment-protocol.md` described as "The 3 experiments before commitment"
- Line 1040: "3 experiments in strict sequence"
- Lines 1042-1044: Lists Experiments A, B, C only
- Line 1831 (Appendix): `experiment-protocol.md` described as "3 experiment definitions"

**5 experiments (from later edit, Section 7):**
- Line 370 (You Are Here): "run all 5 experiments"
- Line 393 (TOC): "ALL 5 experiments"
- Line 1401: "The PV2 diagram specifies 5 experiments"
- Lines 1409-1435: Full decision tree with A through E
- Lines 1451-1474: All 5 detailed descriptions

**Root cause:** Section 7 was expanded from 3 to 5 experiments in the philosophy/framing edit pass (Pass 4), but Section 3's File 6 description and the Appendix were never updated to match.

### C-2: Experiment Naming/Content Collision [BLOCKING]

The same experiment labels (A, B) refer to completely different experiments in different sections.

**Section 3 (File 6, line 1042-1044):**
- Experiment A = "$5 test" = 1 Opus + conventions brief
- Experiment B = "Fat Core" = Full 12-agent architecture
- Experiment C = "Recipe comparison"

**Section 7 (line 1451-1474):**
- Experiment A = "The Naked Test" = 1 Opus + 42-line MINIMAL prompt, NO conventions brief
- Experiment B = "The $5 Conventions Test" = 1 Opus + conventions brief
- Experiment C = "Fat Core Full Test" = Full 12-agent architecture
- Experiment D = "Full Recipe Test"
- Experiment E = "Head-to-Head"

**Section 8 (lines 1542-1600):**
- Step 3: "Experiment A" but described as "$5 test" with conventions brief (matches Section 3's A, NOT Section 7's A)
- Step 6: "Experiment B" described as "Full Fat Core" (matches Section 3's B, NOT Section 7's B)

**Section 2 (line 856):**
- References "Experiment A (the $5 test)" -- matches Section 3/8 naming, not Section 7

**Master checklist (lines 1740-1784):**
- Step 3: "Experiment A -- The $5 Test" with conventions brief (Section 3 naming)
- Step 6: "Experiment B -- Full Fat Core" (Section 3 naming)

**Impact:** Section 7 defines 5 experiments with labels A-E. Sections 3, 8, and the checklist use labels A-B that correspond to Section 7's B-C. A reader following Section 8's "Experiment A" with conventions brief would skip Section 7's actual Experiment A (naked test). The entire experiment sequence is broken.

### C-3: Flagship Builder Input -- "recipe" vs "checklist" [BLOCKING]

The Flagship's 530-line builder input is called different things in different places:

- Line 377: "530-line prompt" (neutral)
- Line 866: "~530 lines (recipe)" -- calls it a RECIPE
- Line 938: "530-line checklist" -- calls it a CHECKLIST
- Line 1124: "Flagship got a checklist (1.5/4 FLAT)" -- CHECKLIST
- Line 1663 (Failure 8): "Flagship got a checklist" vs "Middle got a recipe" -- CHECKLIST

The document's own core argument (Failure 8, Section 9) establishes that recipe vs checklist is a critical distinction that determines output quality. Calling the Flagship's input a "recipe" on line 866 directly contradicts the Failure 8 analysis that the Flagship's problem WAS that it was a checklist, not a recipe. This matters because Experiment D (Section 7) tests "650-line enriched recipe" -- if the reader thinks the Flagship already used a recipe, Experiment D's purpose is undermined.

---

## SIGNIFICANT INCONSISTENCIES (4)

### I-1: Prohibitions Count -- 22 vs 24

- Line 812: Layer 1 has "22 rules defining the system by what it refuses"
- Line 823: Details say "8 absolute rules...plus 12 conditional and 2 meta-prohibitions" (= 22 total, matches)
- Line 994: References "the 8 absolute prohibitions" (consistent with 823)
- Line 1811 (Appendix): "Layer 1: 24 identity rules"

22 and 24 cannot both be correct.

### I-2: Token Count -- 80 vs 65

- Line 813: "80 design tokens -- the atoms of the system"
- Line 824: "65 CSS custom properties in a single :root block"
- Line 1812 (Appendix): "Layer 2: 80 design tokens"

Either the system has 80 tokens or 65 custom properties. These could be reconciled if 15 tokens are encoded in non-custom-property form, but the document never explains this. A reader sees "80" twice and "65" once with no reconciliation.

### I-3: Letter-Spacing Threshold -- 0.02em vs 0.03em

The minimum perceptible letter-spacing threshold is stated differently:

- Line 568 (L1 Intelligence Stack diagram): ">= 0.03em spacing"
- Line 1012 (perception thresholds table): ">= 0.5px (0.03em at 16px)"
- Lines 1191, 1215, 1262 (SC-14 gate): "No letter-spacing < 0.02em"

The perception threshold says 0.03em is the minimum visible delta. SC-14 flags anything below 0.02em. These are different thresholds serving different purposes (perception floor vs sub-perceptual prevention), but the document never explains the distinction. A value of 0.025em would pass SC-14 but fail the perception threshold.

### I-4: TC Skill Line Count -- ~1,930 vs ~1,878

- Line 426 (diagram): "~660 lines (was ~1,930)"
- Line 709 (comparison table): "1,878 lines (plan+build)"
- Line 800 (Section 1): "~1,930 lines"
- Line 1817 (Appendix): "~1,930 lines"

The value 1,878 (line 709, from the comparison table "Original PV2" column) is the only place this number appears. All other references say ~1,930. One of these is wrong.

---

## ORPHANED REFERENCES (3)

### O-1: "Track 1 or Track 2" in Build Flow (line 1300)

The build flow diagram says the orchestrator "Determines: Track 1 or Track 2." Track 1 and Track 2 are not defined anywhere in Sections 1-9. They only appear in the "What Comes After" section (lines 1863-1864), which was added in Pass 4. A reader encountering this in Section 6 has no context for what Track 1 or Track 2 means.

### O-2: "Phase D failure mode" (line 1223)

SC-01 description says container width is "THE primary Phase D failure mode -- 4/5 pages violated it." This refers to the project's historical Phase D (the validation experiments), NOT the build-flow Phase D defined on line 1184 ("Cascade table + self-verification"). The overloaded "Phase D" naming creates confusion: a reader in Section 5 naturally interprets "Phase D" as the build phase defined 39 lines earlier.

### O-3: Table of Contents Missing "What Comes After"

The TOC (lines 385-398) lists 12 items ending with "Appendix: Key File Paths." The "What Comes After" section (h2, line 1849, id="after") was added in Pass 4 but the TOC was never updated to include it. A reader using the TOC for navigation will not discover this section.

---

## DUPLICATIONS (2)

### D-1: Evidence Table Repeated

The "evidence that changed everything" table appears in nearly identical form in two places:

- Lines 862-867 (Section 2): Experiment / Agents / Builder Input / PA-05 / Quality
- Lines 936-944 (Section 2): Flagship vs Fat Core comparison table (repeats agent count, builder input, and quality data)

While the second table adds Fat Core data, the Flagship/CD-006/Middle data overlaps significantly.

### D-2: Decision Tree / Results Table Repeated

The experiment outcomes appear three times:

- Lines 1437-1447 (Section 7): Decision tree in code block
- Lines 1511-1520 (Section 7): "Results Determine Architecture" table
- Lines 1589 (Section 8): Decision gate description

The information is essentially identical in all three places. The code block and table in Section 7 are particularly redundant -- they present the same data in two formats within 70 lines.

---

## STYLE INCONSISTENCIES (3)

### S-1: Warning Box Background Color Mismatch

Two warning boxes override the class's default background with a subtly different color:

- Lines 855, 1400: `class="warning-box" style="border-left-color:#c49052;background:#fdf8f0;"`
- CSS definition (line 267): `.warning-box { background: #fef8f0; }`

The inline `#fdf8f0` differs from the class default `#fef8f0` by one hex digit (d vs e in the green channel). The `border-left-color` override is identical to the class default and is therefore pointless. These two boxes look subtly different from the other warning boxes (lines 869, 1588, 1699) that use the class default.

### S-2: "No-Compromise Principle" Box Uses Ad Hoc Styling

The prominent philosophy box (lines 375-380) uses entirely inline styling: `background:#f0ebe3;border:2px solid #5c4b3a;padding:1.5rem;margin-bottom:2rem;`. It does not use any defined CSS class (not warning-box, not checkpoint, not any existing component). Similarly, the Freeze Line box (line 1873) uses ad hoc inline styling. These are unique visual components that appear nowhere else in the document.

The diagram section (lines 413-521) is almost entirely inline-styled, which is expected for SVG-like constructions. But the callout boxes below diagrams (lines 574, 662, 780) also use ad hoc inline styling instead of the defined callout classes. This creates a visual split: Sections 1-6 and 8-9 use CSS classes; the Visual Overview section and Pass 4 additions use inline styles.

### S-3: Code Block Inconsistency

Most code blocks use `<div class="code-block">` with a copy button. But the timeline code block on line 1890 has no copy button:
```
<div class="code-block">
NOW ──► Experiments (2 days)
```
All other code blocks in the document include `<button class="copy-btn" onclick="copyCode(this)">Copy</button>`.

---

## TONE SHIFTS (2)

### T-1: "What Comes After" Section Is Noticeably More Forward-Looking

Sections 1-9 are deeply analytical -- they reference specific experiments by name, cite line counts, quote failure modes, provide arithmetic proofs. The "What Comes After" section (lines 1849-1902) shifts to a planning/roadmap tone: "Here's the road ahead," time estimates ("2-4 weeks"), phase-naming conventions (E through J), and speculative language ("could run 5-10 pages simultaneously"). This section reads like a different document -- a project proposal rather than an implementation guide. The shift is most apparent in:

- Lines 1879-1884: Time estimates like "2-4 weeks" and "4-8 weeks" with no evidence basis (contrast with the meticulous evidence-backing everywhere else)
- Line 1902: "roughly 3-5 months" -- a speculative timeline in a document that elsewhere refuses to commit without experiments

### T-2: "No-Compromise Principle" Box vs Implementation Pragmatism

The "No-Compromise Principle" (line 375-380) establishes an absolutist tone: "Cost is irrelevant. Effort is irrelevant." "Fix cycles until SHIP, not 'SHIP WITH FIXES.'" But Section 8 takes a pragmatic shortcut approach: "If Experiment A passes (PA-05 >= 3.0): Steps 1 + 2 + 3 + 7 = 4-8 hours total" (line 1608). The "Fast Path" explicitly skips the gate infrastructure and orchestrator -- which the no-compromise philosophy says should be built and tested regardless. The philosophy says "run all 5 experiments" but Section 8 only runs 2 experiments (A and B), with a decision gate after each that could skip the rest.

---

## MINOR ISSUES (3)

### M-1: "Visual Overview" Section Not Numbered

The TOC lists "Visual Overview" as entry 1, but the section heading has no number prefix. Sections 1-9 all have number prefixes ("1. Where We Are Right Now," "2. The Architecture"). "Visual Overview," "Master Checklist," "Appendix," and "What Comes After" do not. This is defensible (they're non-numbered structural sections), but the TOC presents them in the same numbered list, implying they're part of the 1-12 numbering.

### M-2: Case Studies File Name Inconsistency

- Line 816 (Section 1 table): `case-studies/` (directory, no specific file)
- Line 1815 (Appendix): `case-studies/README.md` (specific file)

The Section 1 table points to a directory; the Appendix points to a file within it.

### M-3: Components CSS File Name

- Line 815 (Section 1 table): `components/components.css`
- Line 1814 (Appendix): `design-system/compositional-core/components/components.css`

These are consistent (one is relative, one absolute), but the MEMORY.md context file refers to `merged-components.css` as the filename. If the file was renamed, the document is internally consistent but may be inconsistent with the actual filesystem.

---

## CROSS-REFERENCE INTEGRITY CHECK

| Reference | Source | Target | Status |
|-----------|--------|--------|--------|
| TOC -> visual-overview | line 386 | line 406 | OK |
| TOC -> s1 | line 387 | line 791 | OK |
| TOC -> s2 | line 388 | line 853 | OK |
| TOC -> s3 | line 389 | line 957 | OK |
| TOC -> s4 | line 390 | line 1086 | OK |
| TOC -> s5 | line 391 | line 1151 | OK |
| TOC -> s6 | line 392 | line 1290 | OK |
| TOC -> s7 | line 393 | line 1398 | OK |
| TOC -> s8 | line 394 | line 1527 | OK |
| TOC -> s9 | line 395 | line 1630 | OK |
| TOC -> master-checklist | line 396 | line 1718 | OK |
| TOC -> appendix | line 397 | line 1803 | OK |
| "What Comes After" | line 1849 | NOT IN TOC | MISSING |
| Visual Overview -> Section 6 | line 523 | line 1290 | OK |
| Visual Overview -> Section 5 | line 523 | line 1151 | OK |
| Visual Overview -> Section 9 | line 523 | line 1630 | OK |
| Visual Overview -> Section 2 | line 578 | line 853 | OK |
| Comparison -> Section 2 | line 784 | line 853 | OK |
| Comparison -> Section 7 | line 784 | line 1398 | OK |
| Comparison -> Section 8 | line 784 | line 1527 | OK |

All anchor links resolve correctly. The only missing link is "What Comes After" from the TOC.

---

## SUMMARY OF ISSUES BY SEVERITY

| Severity | Count | Key Issues |
|----------|-------|------------|
| BLOCKING | 3 | Experiment count (3 vs 5), experiment naming collision, Flagship recipe/checklist contradiction |
| SIGNIFICANT | 4 | Prohibitions count, token count, letter-spacing threshold, TC line count |
| ORPHANED | 3 | Track 1/2 undefined, Phase D overloaded, TOC missing section |
| DUPLICATION | 2 | Evidence tables, decision tree |
| STYLE | 3 | Warning box color mismatch, ad hoc styling, missing copy button |
| TONE | 2 | Forward-looking roadmap vs analytical, no-compromise vs pragmatic fast path |
| MINOR | 3 | Numbering, file names |
| **TOTAL** | **20** | |

---

## RECOMMENDED FIXES (Priority Order)

1. **[BLOCKING] Harmonize experiment numbering.** Either: (a) Update Sections 3, 8, and the checklist to use Section 7's A-E scheme (recommended), or (b) update Section 7 to match. The File 6 description must say "5 experiments" and the Appendix must match.

2. **[BLOCKING] Fix Flagship "recipe" to "checklist" on line 866.** Change `~530 lines (recipe)` to `~530 lines (checklist)` to match the document's own Failure 8 analysis.

3. **[BLOCKING] Reconcile Section 8 implementation steps with 5-experiment plan.** Section 8 only implements 2 experiments. Either add Steps for Experiments C/D/E, or explain why Section 8 is a "minimum viable" subset of the full 5-experiment plan from Section 7.

4. **[SIGNIFICANT] Pick one number for prohibitions (22 or 24) and use it everywhere.**

5. **[SIGNIFICANT] Reconcile "80 tokens" vs "65 custom properties" -- explain the gap or fix the count.**

6. **[ORPHANED] Add "What Comes After" to the Table of Contents.**

7. **[ORPHANED] Define Track 1/Track 2 before referencing in Section 6, or remove the reference from the build flow diagram.**

8. **[STYLE] Remove redundant inline styles from warning boxes on lines 855 and 1400.**

9. **[STYLE] Add copy button to the timeline code block on line 1890.**
