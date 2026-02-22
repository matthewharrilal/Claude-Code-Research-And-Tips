# Context Harmony Audit Report

**Auditor:** Metacognitive Context Harmony Auditor (Opus)
**Date:** 2026-02-20
**Files Audited:** 6 (TC SKILL.md, PA SKILL.md, /build-page SKILL.md, conventions-brief.md, gate-runner.md, mechanism-catalog.md)
**Post-Surgery State:** All files read in their entirety

---

## 1. PER-FILE HARMONY ASSESSMENT (Section A)

### 1.1 TC SKILL.md (~1,599 lines)

**Overall Harmony:** MODERATE -- the file reads as a coherent pipeline document with some seams visible at surgical insertion points.

**Surgical Insertion Analysis:**

**A. Perception Thresholds (Phase 4.0, lines ~864-877)**
- **Terminology:** CONSISTENT. Uses "perception thresholds," "channel," "delta," and "sub-perceptual" -- all terms established earlier in the pipeline context and matching PA skill usage.
- **Cross-references:** The `(cross-reference: R-MC-03)` at line 864 references a rule that IS defined later in the same file (Step 4.3, Multi-Coherence Binding Rules). Forward reference is valid but could confuse a first-time reader who encounters the cross-reference before the rule definition.
- **Tone/Voice:** CONSISTENT. Imperative, technical, table-driven -- matches surrounding guardrail content.
- **Level of abstraction:** CORRECT. Sits within Phase 4.0 (Perceptual Guardrails) alongside other floor tables. Appropriate location.
- **First-time reader impact:** The table itself reads naturally. The warm palette note is a useful contextual addition. No "dropped in" feel.

**B. S-09 Stacking Check (Phase 4.0, lines ~878-884)**
- **Terminology:** CONSISTENT. "Stacking," "section boundary," "void" -- all pipeline vocabulary.
- **Tone:** CONSISTENT with surrounding guardrail content.
- **Problem:** The PASS/FAIL examples at lines 880-883 use specific pixel values that duplicate similar examples in the PA skill (PA S-09 stacking check). The values differ slightly in the two files (TC gives specific breakdowns; PA gives the same threshold but different example context). This is NOT a contradiction, but it's duplicative work for agents reading both files.
- **Level of abstraction:** CORRECT for its Phase 4.0 location.

**C. CPL Calculation Formula (lines ~886-921)**
- **Tone:** CONSISTENT. Concrete CSS examples with calculation steps.
- **Level of abstraction:** CORRECT -- this is a builder self-check protocol, which is exactly what Phase 4.0 contains.
- **Problem:** At 35 lines, this section is unusually long compared to other guardrail entries in Phase 4.0. The surrounding guardrails are typically 3-8 lines with a table. The CPL formula reads more like a tutorial than a guardrail entry. Not wrong, but tonally distinct from neighbors.

**D. Heading Spacing Enforcement (lines ~963-1013)**
- **Terminology:** CONSISTENT. Uses "margin-top," "margin-bottom," "ratio."
- **Problem:** This section is 50 lines long and includes a detailed WHY explanation, concrete pass/fail CSS examples, and enforcement guidance. It breaks the pattern of the surrounding guardrail tables which are dense and terse. The section feels like it was written as a standalone document and inserted, rather than being written to match the Phase 4.0 style.
- **Cross-reference quality:** References WCAG 2.1 SC 1.4.12, which is accurate.

**E. Multi-Coherence Binding Rules (Step 4.3, lines ~1363-1396)**
- **Terminology:** EXCELLENT. "Multi-coherence," "zone boundary," "channel shift," "semantic direction" -- all established vocabulary used precisely.
- **Rule IDs (R-MC-01 through R-MC-06):** These are well-structured and follow a consistent format.
- **Problem with R-MC-03:** The perception thresholds listed in R-MC-03 (lines 1378-1386) include additional channels NOT present in the Phase 4.0 perception threshold table (lines 864-877). Specifically:
  - R-MC-03 lists "Weight: font-weight delta >=200"
  - R-MC-03 lists "Density: >=1 component count delta per viewport"
  - R-MC-03 lists "Rhythmic: Different transition type"
  - The Phase 4.0 table lists "Font-weight: >=200 delta" (matching)
  - BUT the Phase 4.0 table does NOT have "Density" or "Rhythmic" as separate rows
  - **INCONSISTENCY:** R-MC-03 treats density and rhythmic as separate countable channels, but they are NOT listed in the main perception threshold table. A builder reading Phase 4.0 would learn 8 thresholds; reading R-MC-03 would learn 10. The superset is R-MC-03.

**F. Metaphor Scoring Rubric (Step 3.5G, lines ~618-670)**
- **Terminology:** CONSISTENT. Uses "interpretive distance," "structural survival," which are well-defined in context.
- **Tone:** Slightly more formal and structured than surrounding Phase 3.5 content, which is more conversational. Minor seam.
- **6 Binary Rejection Checks:** These are well-integrated and reference specific failure modes (R1-R6) that don't collide with other numbering schemes. Good.

**G. Build Recipe format in Phase 4.5 (lines ~1537-1583)**
- **Tone:** CONSISTENT with TC brief guidance.
- **Cross-references:** References "approved verb list" (Tiers 1-2 verbs defined in place). Self-contained.
- **Problem:** The "PERCEPTION CHECK" inline syntax (`PERCEPTION CHECK: >=15 RGB? YES/NO`) introduces a novel convention not used elsewhere in the TC skill. It works, but it's a localized invention that doesn't echo any other pattern in the document.

### 1.2 PA SKILL.md (~953 lines)

**Overall Harmony:** STRONG -- the file reads as a coherent evaluation framework with well-integrated additions.

**Surgical Insertion Analysis:**

**A. Perception Threshold Reference Table (lines ~617-637)**
- **Terminology:** CONSISTENT with the rest of PA.
- **Location:** Placed between Quantitative Guardrails and Modes sections. Logical -- it's a reference table that both guardrails and modes need access to.
- **Problem:** The table at line 629 lists "Font-weight: >= 100 units" but the conventions-brief and TC skill both use ">=200." **This is a VALUE INCONSISTENCY** -- see Cross-File Consistency section below.

**B. Sub-Perceptual CSS Detection Questions (PA-55, PA-56, lines ~346-357)**
- **Tone:** CONSISTENT. Matches the question-table format of other PA questions.
- **Scoring guidance:** Follows the established YES/NO pattern with specific criteria.
- **Mode 4 Integration note (line 357):** "Total question count: 65 (54 standard + 2 sub-perceptual + 9 Tier 5)." This correctly updates the total from 63 to 65. However...
- **Problem:** The PA file header at line 7 says "65 PA questions." The build-page SKILL.md Section 6.2 says "All 65 questions" (implicitly via the 9 auditor assignments). But the build-page SKILL.md Step 7.4 (line 412) says "All 63" for cycle 1. **QUESTION COUNT INCONSISTENCY** between PA (65) and build-page cycle table (63).

**C. Channel Activation vs Deployment section (lines ~828-845)**
- **Terminology:** EXCELLENT. "Deployed" vs "active" distinction is precisely defined and consistently used.
- **Location:** Placed within the Multi-Coherence Evaluation section, which is exactly where it belongs.
- **Cross-reference:** References "Perception Threshold Reference Table above" -- this reference is valid (the table IS above in the same document).
- **Provenance note:** Correctly states the flagship measured "5/7 channels deployed" but "3/7 channels perceptibly active." This is a concrete, verifiable claim.

**D. S-09 Stacking Check in PA (lines ~383-391)**
- **Consistency with TC:** Uses the same 120px threshold. CONSISTENT.
- **Problem:** The PA version says "Total boundary gap > 120px: VOID-RISK -- flag for review" and "Total boundary gap > 200px: CATASTROPHIC VOID." But the TC version at Phase 4.0 (line 876) simply says "Stacked gap: <=120px total." The PA version has a 3-tier severity calibration that the TC version lacks. **Not contradictory** but asymmetric -- builders get a binary pass/fail, auditors get a 3-tier severity scale. This is actually CORRECT design (builders need binary gates, auditors need calibrated judgment).

**E. Void Prevention Tier (Tier 4, lines ~359-396)**
- **Tone:** Matches Tier 1-3 perfectly.
- **Provenance notes:** Well-integrated, explaining WHY the tier was added.
- **First-time reader impact:** A first-time reader would not notice this was added later. It reads as native content.

**F. PA-69 and PA-70 Pipeline Integration questions (lines ~339-344)**
- **Terminology:** "Multi-coherence dynamic range" and "content-form coupling" -- these are established pipeline vocabulary.
- **Scoring guidance:** Follows the same YES/NO pattern as other questions.
- **Problem:** PA-69 and PA-70 are placed under "Pipeline Integration" at the end of Tier 3 (Deep Dive), but they test concepts central to the /build-page pipeline's multi-coherence system. Their placement in Tier 3 means they are only evaluated in "Standalone Only" mode. But these questions are CRITICAL for pipeline builds. **The build-page SKILL.md does NOT include PA-69 or PA-70 in any auditor's question assignment table (Section 6.2).** This means these questions are DEFINED but NEVER ASSIGNED in pipeline context.
  - Wait -- checking again. PA-69 is assigned to Auditor D and PA-70 to Auditor B in the build-page Section 6.2 table. CONFIRMED assigned. The Tier 3 label "Standalone Only" at line 302 is misleading -- these two questions DO get assigned in Mode 4 pipeline audits. **LABELING INCONSISTENCY.**

### 1.3 /build-page SKILL.md (~484 lines)

**Overall Harmony:** STRONG -- this is the most recently written file and shows the least evidence of surgical insertion. It reads as a cohesive orchestration document.

**Notable Observations:**

**A. Gate table (Section 4.2, lines ~164-182)**
- Lists 16 gates (SC-00 through SC-15). The gate-runner.md defines 21 gates. The build-page table is a SUMMARY -- not all gates from gate-runner are listed. This is acceptable (it lists the "composition-critical" subset) but could confuse someone cross-referencing.
- SC-13 threshold: "avg >= 4" -- matches conventions-brief Section 4 ("average >= 4 across all boundaries"). CONSISTENT.

**B. Question count (line 412):**
- "All 63" for initial cycle. But PA skill says 65, and the Mode 4 Integration note in PA says 65. **INCONSISTENCY:** build-page says 63, PA says 65.

**C. Auditor question assignments (Section 6.2)**
- Total questions assigned across 9 auditors: Count carefully...
  - A: 10 questions (PA-01,03,04,05,18,19,20,45,65,67)
  - B: 6 (PA-02,06,07,08,29,70)
  - C: 13 (PA-09,10,11,30,31,32,33,50,51,52,53,64,66)
  - D: 7 (PA-12,13,34,35,36,69,62)
  - E: 6 (PA-14,15,37,38,39,63)
  - F: 7 (PA-16,17,24,40,41,60,61)
  - G: 5 (PA-25,42,43,44,68)
  - H: 5 (PA-21,22,23,46,47)
  - I: 4 (PA-26,27,28,48)
  - **Total unique questions assigned: 63** (counting each PA ID once)
  - **MISSING from assignments: PA-55, PA-56** (sub-perceptual detection questions defined in PA skill)
  - **Also MISSING: PA-06 through PA-08, PA-50-53** -- wait, PA-50-53 ARE assigned to C. PA-55 and PA-56 are NOT assigned.
  - The PA skill's Mode 4 Integration note at line 357 explicitly says "Assign PA-55 to Auditor C (Spatial+Proportion), PA-56 to Auditor B (Readability+Typography)." But the build-page's definitive assignment table at Section 6.2 does NOT include PA-55 or PA-56.
  - **CRITICAL DISCONNECT:** PA defines the assignment, build-page doesn't implement it.

**D. Weaver protocol references (line 669 in PA)**
- PA says "The full weaver dual-verdict protocol... is defined in /build-page SKILL.md Section 6.3." The build-page SKILL.md Section 6.3 (lines 302-358) does define the weaver spawn. Cross-reference is VALID.

---

## 2. CROSS-FILE CONSISTENCY MATRIX (Section B)

### 2.1 Perception Threshold Values

| Property | TC SKILL.md | PA SKILL.md | conventions-brief.md | gate-runner.md | CONSISTENT? |
|----------|-------------|-------------|---------------------|----------------|-------------|
| Background delta | >=15 RGB (line 869) | >=15 RGB (line 623) | >=15 RGB (line 57) | >=15 RGB (SC-09) | YES |
| Warm palette bg | >=20 RGB (line 869) | "1.3-1.5x" (line 632) | Not mentioned | Not mentioned | PARTIAL -- TC says >=20, PA says 1.3-1.5x of 15 = 19.5-22.5. Effectively same, phrasing differs. |
| Font-size delta | >=2px (line 870) | >=2px (line 624) | >=2px (line 112) | >=2px (SC-11) | YES |
| Letter-spacing delta | >=0.03em (line 871) | >=0.5px (0.03em at 16px) (line 625) | >=0.03em (line 113) | Not explicit | YES (0.5px at 16px = 0.03125em ~ 0.03em) |
| Letter-spacing floor | >=0.025em (TC Phase 4.0 context) | Not in threshold table | >=0.025em (line 113) | SC-14 checks < 0.025em | YES |
| Line-height delta | >=0.15 (line 872) | >=0.15 (line 626) | Not in threshold table | Not checked | YES |
| Spacing delta | >=24px (line 873) | >=24px (line 627) | >=24px (line 114) | Not explicit | YES |
| **Font-weight delta** | **>=200** (line 874) | **>=100** (line 629) | **Not in threshold table** | **>=100** (SC-13 line 482: "font-weight delta >= 100") | **NO -- INCONSISTENCY** |
| Border delta | >=1px (line 875) | >=1px (line 628) | "width change" (line 115) | "configuration change" (SC-13) | YES (equivalent phrasing) |
| Stacked gap | <=120px (line 876) | <=120px (line 387) | <=120px (line 61) | <=120px (SC-10) | YES |

### CRITICAL FINDING: Font-Weight Threshold Inconsistency

- **TC SKILL.md (R-MC-03, line 1383):** "Weight: font-weight delta >=200"
- **TC SKILL.md (Phase 4.0 table, line 874):** "Font-weight: >=200 delta" with note "Canonical value: 200 (consistent with PA)"
- **PA SKILL.md (Perception Threshold table, line 629):** "Font-weight: >= 100 units"
- **gate-runner.md (SC-13, line 482):** "font-weight delta >= 100"

The TC skill claims "consistent with PA" at line 874, but PA says 100, not 200. The TC file's own note is wrong -- it is NOT consistent with PA. Two of four files say 100; two say 200. **The canonical value needs to be decided and unified.**

### 2.2 Channel Activation Definition

| Source | Definition | Consistent? |
|--------|-----------|-------------|
| TC SKILL.md (R-MC-03) | "A channel shift only 'counts' if it meets these minimums" (lists thresholds) | Reference definition |
| PA SKILL.md (line 828-845) | "A channel is DEPLOYED when CSS properties exist. A channel is ACTIVE when its CSS values EXCEED perception thresholds." | Expanded definition adding deployed/active distinction |
| conventions-brief.md (Section 4) | Lists 6 channels with perception thresholds. Uses "shift" not "activate." | Aligned but uses different verb. |
| gate-runner.md (SC-13) | Measures 6 channels, checks if delta exceeds threshold. | Implemented consistent with TC definition. |

**Assessment:** Functionally consistent. The PA skill adds the deployed/active vocabulary distinction that other files don't use. This is an ENRICHMENT, not a contradiction. The deployed/active terminology should ideally be adopted in conventions-brief to complete the vocabulary unification.

### 2.3 PA Question Count

| Source | Count | Reference |
|--------|-------|-----------|
| PA SKILL.md header (line 7) | 65 | "65 PA questions + quantitative guardrails" |
| PA SKILL.md Mode 4 Integration (line 357) | 65 | "54 standard + 2 sub-perceptual + 9 Tier 5" |
| /build-page SKILL.md (line 412) | 63 | "All 63" (cycle 1 table) |
| /build-page SKILL.md Section 6.2 | 63 unique question IDs assigned | PA-55, PA-56 NOT in assignment table |
| design-system/CLAUDE.md | 65 | "Full 65-question audit" (line in Skills section) |
| compositional-core/CLAUDE.md | 56 | "56 questions (54 standard + 2 sub-perceptual)" -- BUT THIS IS STALE (refers to old count before Tier 5 was added to count) |

**Assessment:** PA skill itself says 65. Build-page assigns 63 (missing PA-55, PA-56). The PA skill explicitly says WHERE to assign them (C and B respectively) but build-page doesn't include them. **FIX NEEDED in build-page Section 6.2.**

### 2.4 Tier 5 Scoring

| Source | Scale | Reference |
|--------|-------|-----------|
| PA SKILL.md (line 500-506) | /9 (PA-60 through PA-68) | Authoritative |
| /build-page SKILL.md (line 427) | >= 7/9 | Consistent |
| design-system/CLAUDE.md | >= 7/9 | Consistent |
| compositional-core/CLAUDE.md | >= 6/8 | **STALE -- uses old /8 scale** |

**Assessment:** PA and build-page are consistent at /9. The compositional-core/CLAUDE.md still uses the old /8 scale and also says the success bar is 6/8 vs build-page's 7/9. **FIX NEEDED in compositional-core/CLAUDE.md.**

### 2.5 S-09 Stacking Threshold

| Source | Value | Consistent? |
|--------|-------|-------------|
| TC SKILL.md | <=120px | YES |
| PA SKILL.md | <=120px | YES |
| conventions-brief.md | <=120px ("stacked gaps above 120px create voids") | YES |
| gate-runner.md (SC-10) | <=120px | YES |

**Assessment:** FULLY CONSISTENT across all 4 files.

---

## 3. NARRATIVE COHERENCE ISSUES (Section C)

### 3.1 TC SKILL.md

**Issue C-TC-1: Forward reference to R-MC-03**
At line 864, the perception thresholds table includes "(cross-reference: R-MC-03)". The R-MC-03 rule is defined ~500 lines later (line 1377). A first-time reader encountering the cross-reference has no context for what R-MC-03 is. **Impact: LOW.** The threshold table stands on its own; the cross-reference is supplementary.

**Issue C-TC-2: Perception threshold table appears TWICE**
The same information appears at:
- Phase 4.0 (lines 864-877): Perception threshold table with 8 rows
- Step 4.3 R-MC-03 (lines 1378-1386): Perception thresholds with 10 rows (adding Density and Rhythmic)

The Phase 4.0 table is the PRIMARY reference for builders. The R-MC-03 table is the EXTENDED reference for multi-coherence counting. The two tables are NOT identical -- R-MC-03 is a superset. But there is no note explaining why they differ or that R-MC-03 extends the Phase 4.0 table. **Impact: MODERATE.** A builder who reads only Phase 4.0 gets an incomplete picture of what counts as a channel shift.

**Issue C-TC-3: CPL section is tonally distinct**
The CPL Calculation Formula section (lines 886-921) is written in a tutorial style with "How to fix" options and step-by-step self-check. The surrounding guardrail sections are table-driven and terse. The CPL section reads as though it was lifted from a different document. **Impact: LOW** (content is correct and useful; just stylistically different).

**Issue C-TC-4: Phase 4.5 is the de facto endpoint but feels like an appendix**
Phase 4.5 (Sub-Skill Output Mode, line 1495) is where TC output actually gets produced when invoked by /build-page. But it's buried 1,500 lines into the document after all the standalone pipeline machinery. A first-time reader following the pipeline might expect the output format to be defined near Phase 4's end, not as a separate section past the fractal gate. **Impact: LOW** (the pipeline header at line 34 does mention Phase 4.5 in the flow diagram).

### 3.2 PA SKILL.md

**Issue C-PA-1: Tier 3 label "Standalone Only" is misleading**
Line 302 says "### Tier 3: Deep Dive (Standalone Only)." But PA-69 and PA-70 (placed under Tier 3) ARE assigned to pipeline auditors in build-page Section 6.2. The "Standalone Only" label implies these questions are skipped in pipeline context, which is false. **Impact: MODERATE.** Could confuse an auditor reading the PA skill who sees "Standalone Only" and skips the section.

**Issue C-PA-2: Multi-Coherence Evaluation section is very long**
The section from line 796 to 847 (~50 lines) covers multi-coherence evaluation, channel activation vs deployment, and calibration tables. This is placed between Metaphor Traps (line 764) and the Visual Auditing Protocol (line 849). The placement is logical (it's within the METAPHOR-AWARENESS PRINCIPLES block), but the section is dense and covers builder-level detail (calibration tables with shift counts) that auditors shouldn't need. The PA skill explicitly says auditors should react to what they SEE, not use numerical calibration. **Impact: LOW** (the "Weaver Calibration References" label at line 680 correctly restricts these tables to the weaver).

**Issue C-PA-3: Duplicate guidance on perception thresholds**
The Perception Threshold Reference Table (lines 617-637) and the Channel Activation section (lines 828-845) both discuss perception thresholds with overlapping content. The first is a reference table; the second explains how to use those thresholds for multi-coherence counting. They serve different purposes but a reader encounters the same concepts twice. **Impact: LOW.**

### 3.3 /build-page SKILL.md

**Issue C-BP-1: Abrupt transition from gate runner to screenshots**
Section 4 (Gate Runner) ends with gate results JSON. Section 5 (Screenshot Capture) starts immediately. There is no transitional context explaining that gates must all PASS before screenshots begin. The PA file (line 267 in gate-runner.md) explicitly states this dependency, but the build-page file assumes the reader knows. **Impact: LOW** (the sequential section numbering implies sequential execution).

**Issue C-BP-2: Lock sheet generation is mentioned but not detailed**
Section 5.5 describes the lock sheet in 12 lines. The conventions-brief and TC skill don't reference lock sheets at all. The concept is introduced here for the first time with no prior setup. A reader encountering "lock sheet" needs to infer its purpose from context. The PA skill's weaver section (line 669) references the lock sheet, but a reader of PA alone wouldn't know what it is. **Impact: LOW** (the build-page file is the authority for lock sheets, and it's self-contained enough).

---

## 4. INFORMATION ROUTING MAP WITH DISCONNECTS (Section D)

### 4.1 Information Flow Diagram

```
Content.md
    |
    v
TC Agent (reads: TC SKILL.md + content + mechanism-catalog + prohibitions + tokens)
    |
    v [outputs: _tc-brief.md (8 sections, ~80-120 lines)]
    |
Builder Agent (reads: _tc-brief.md + conventions-brief.md + content + mechanism-catalog + components.css + tokens + prohibitions)
    |
    v [outputs: output.html + _build-log.md + _cascade-value-table.md]
    |
Gate Runner (orchestrator runs: gate-runner.md gates against output.html)
    |
    v [outputs: _gate-results.json]
    |
Screenshot Capture (orchestrator captures PNGs)
    |
    v [outputs: _screenshots/*.png]
    |
Lock Sheet Generation (orchestrator writes: _lock-sheet.md)
    |
    v
9 PA Auditors (reads: PA SKILL.md + screenshots ONLY)
    |
    v [outputs: 9 pa-auditor-*.md reports]
    |
Weaver (reads: all 9 reports + _gate-results.json + _lock-sheet.md)
    |
    v [outputs: _pa-report.md + _pa-matrix.md]
    |
Orchestrator (reads: verdict -> routes to fix cycle or SHIP)
```

### 4.2 Disconnects Identified

**DISCONNECT D-1: PA-55 and PA-56 are orphaned in the pipeline**
- PA SKILL.md defines PA-55 and PA-56 (sub-perceptual detection)
- PA SKILL.md says "Assign PA-55 to Auditor C, PA-56 to Auditor B"
- Build-page SKILL.md Section 6.2 does NOT include these in auditor assignments
- **Result:** These questions exist in the skill definition but are never deployed in the pipeline. The PA file counts 65 questions; the build-page deploys 63. Two questions fall through the crack.
- **SEVERITY: HIGH** -- These questions specifically catch the #1 flagship failure mode (sub-perceptual CSS). Not deploying them defeats the purpose of adding them.

**DISCONNECT D-2: Font-weight threshold mismatch**
- TC tells builders: font-weight delta >=200 to count as a channel shift
- Gate-runner SC-13 checks: font-weight delta >= 100
- PA tells auditors: font-weight >= 100 units to be perceptible
- **Result:** A builder following TC would use 400->600 (delta 200) to count as a shift. A gate checking SC-13 would also count 400->500 (delta 100). The gate is more permissive than the builder guidance. A builder could write 400->500, the gate passes, but TC says it shouldn't count as a shift.
- **SEVERITY: MODERATE** -- The mismatch creates a false pass scenario where gates approve shifts that TC considers sub-threshold.

**DISCONNECT D-3: Conventions-brief lacks channel activation distinction**
- PA SKILL.md clearly defines DEPLOYED vs ACTIVE channels
- TC SKILL.md R-MC-03 says "A channel shift only 'counts' if it meets these minimums"
- Conventions-brief Section 4 says "at least 3 of 6 CSS channels shift simultaneously" but does NOT define what qualifies as "shift" beyond listing perception thresholds
- **Result:** A builder reading ONLY conventions-brief might count any CSS change as a "shift." The deployed/active distinction exists in PA and TC but not in the builder's primary reference document.
- **SEVERITY: MODERATE** -- The conventions-brief is the builder's world-model document. The most important perceptual concept (deployed vs active) is absent from it.

**DISCONNECT D-4: TC brief Section 6 (Build Recipe) vs conventions-brief Process section**
- The TC brief format (Phase 4.5) includes a Section 6 "BUILD RECIPE" with sequenced, zone-by-zone instructions using approved verbs
- The conventions-brief "PROCESS" section (line 504+) also gives build process guidance
- The builder reads BOTH. The TC brief's recipe is content-specific; the conventions-brief process is universal
- **Potential confusion:** The builder could face conflicting sequencing if the TC recipe says "Set zone backgrounds FIRST" but the conventions-brief says "HTML skeleton first... then CSS working BOUNDARY BY BOUNDARY"
- **Result:** The two instruction sets are complementary (TC = what to build, conventions = how to build), but the boundary between them is not explicitly drawn. No document says "Read TC for WHAT, conventions for HOW."
- **SEVERITY: LOW** -- Build-page Section 3 builder prompt establishes reading order that implicitly resolves this.

**DISCONNECT D-5: Mechanism count discrepancy**
- TC SKILL.md Phase 4.5 Section 4: ">=14 mechanisms for Flagship"
- Conventions-brief Section 9B: ">= 14 mechanisms"
- Build-page SKILL.md: Does not specify mechanism count (defers to TC brief and conventions-brief)
- **Result:** Consistent between TC and conventions-brief. No disconnect.

**DISCONNECT D-6: Compositional-core/CLAUDE.md stale values**
- Says "Tier 5 >= 6/8" but should be ">=7/9"
- Says "56 questions" but should be "65 questions"
- These stale values could mislead agents who read compositional-core/CLAUDE.md as their reference
- **SEVERITY: MODERATE** -- compositional-core/CLAUDE.md is auto-loaded. Wrong values in an auto-loaded file are high-risk.

---

## 5. FAILURE MODE PREVENTION CHECK (Section E)

### FM-1: Guardrail Factory (playbook-to-guardrail ratio)

**Post-surgery state:** The conventions-brief is 566 lines of RECIPE-STYLE guidance (describing the world, giving examples, using "you may/you should" language). It is NOT a guardrail list. The TC brief format (Phase 4.5) produces an 80-120 line RECIPE with sequenced steps. The build-page SKILL.md builder prompt (Section 3) is 60 lines and is primarily orientation + file list.

**Assessment:** The playbook-to-guardrail ratio is FAVORABLE. The conventions-brief is ~90% playbook (world description, examples, recipes) and ~10% guardrails (perception thresholds, soul constraints). This is a dramatic improvement from the pre-surgery 7.9:1 guardrail-to-playbook ratio.

**NEW RISK:** The TC SKILL.md itself has grown to ~1,599 lines, of which ~300 lines are guardrails/thresholds and ~1,300 are process/guidance. The ratio within TC is fine (4.3:1 process-to-guardrail). But the TC agent reads 1,599 lines to produce an 80-120 line brief. The compression ratio is ~16:1. This is acceptable but worth monitoring (the Pipeline v2 architecture team flagged 20:1 as the meta-to-output concern threshold).

**VERDICT: NO NEW VULNERABILITY. Ratio is favorable.**

### FM-2: Builder Isolation

**Post-surgery state:** The builder receives:
1. _tc-brief.md (80-120 lines -- RECIPE with CSS snippets)
2. conventions-brief.md (566 lines -- world model with CSS examples)
3. Content file
4. mechanism-catalog.md (reference)
5. components.css (reference)
6. tokens.css + prohibitions.md (soul constraints)

**Assessment:** The builder has access to ~800+ lines of compositional guidance (TC brief + conventions-brief), plus reference files. This is a substantial improvement over the pre-surgery state where the builder received ~75 lines.

**NEW RISK:** None identified. The conventions-brief is explicitly designed as the builder's world model.

**VERDICT: NO NEW VULNERABILITY. Builder isolation is resolved.**

### FM-3: Binary Compliance (technically-correct-but-flat)

**Post-surgery state:** The new perception thresholds are binary rules with specific minimums (>=15 RGB, >=2px, etc.). These are precisely the kind of rules that produce "48px/49px/50px" compliance -- technically passing while being perceptually meaningless.

**Assessment:** The anti-scale model (Phase 4.0A: RICHNESS = density x restraint x confidence) is designed to prevent this. The model is MULTIPLICATIVE -- zero in any factor = zero richness. Binary thresholds set FLOORS; the anti-scale model sets QUALITY.

**NEW RISK:** The S-09 stacking check (<=120px) could be gamed: a builder could set every section boundary to exactly 119px, technically passing while creating uniformly spaced sections. But this is caught by PA-17 (rhythm) and PA-41 (repetition monotony), which are explicitly marked as Tier 1 equivalent in PA.

**VERDICT: LOW NEW VULNERABILITY. Binary rules + multiplicative quality model + PA rhythm questions provide defense-in-depth.**

### FM-4: Programmatic != Perceptual

**Post-surgery state:** The perception thresholds are now embedded in BOTH the gate runner (SC-09, SC-13, SC-14) AND the PA skill (threshold reference table + channel activation section). The gate-to-PA handoff is explicitly one-way (gate-runner.md line 267).

**Assessment:** The gates now check perceptual thresholds (>=15 RGB, >=2px), not just binary presence. This narrows the gap between programmatic and perceptual verification. However, gates still cannot check:
- Whether multiple shifts FEEL coherent (only count channels, not evaluate direction agreement perceptually)
- Whether restraint is present (no programmatic test for "designed quiet")
- Whether spatial distribution FEELS balanced (only check for voids >120px)

**NEW RISK:** The new SC-14 gate (sub-perceptual prevention) catches letter-spacing < 0.025em and bg delta < 15 RGB. This is a significant new programmatic gate that directly addresses the #1 flagship failure. Good addition. But SC-14 checks INDIVIDUAL values, not PATTERNS of sub-perceptual CSS. A page with 50 technically-passing values that are all clustered near the threshold (16 RGB, 2px delta, 0.03em spacing) would pass SC-14 but still feel flat.

**VERDICT: LOW NEW VULNERABILITY. Gap is narrowed but not eliminated. PA remains essential.**

### FM-5: Continuation Bias

**Post-surgery state:** Fix cycle protocol (TC SKILL.md Phase 4.5 Fix Cycle Re-Invocation Protocol) explicitly uses the SAME builder for fixes and instructs them to "re-read conviction statement and transition table." This is designed to prevent continuation bias (where the builder just adds fixes without reconnecting to compositional intent).

**Assessment:** The conventions-brief Section 10 (Compositional Memory) explicitly addresses drift with four habits: boundary naming, midpoint reflection, category awareness, fix cycle memory. The fix cycle types (A/B/C) escalate from mechanical to structural to compositional, preventing the "symptom-level fixes" pattern.

**NEW RISK:** The TYPE B fix instructions say "re-read TC brief Section 2 and Section 4." This routes the builder back to specific compositional context. Good. But there's no mechanism to verify they ACTUALLY re-read. The instruction is behavioral, not structural.

**VERDICT: NO NEW VULNERABILITY. Existing mechanisms are adequate.**

### FM-6: Meta-Output Ratio

**Post-surgery state:** The TC SKILL.md is ~1,599 lines. The PA SKILL.md is ~953 lines. The build-page SKILL.md is ~484 lines. The conventions-brief is ~566 lines. The gate-runner is ~1,159 lines. The mechanism-catalog is ~869 lines. Total pipeline infrastructure: ~5,630 lines.

Output per page: 1 HTML file (~1,000-2,000 lines) + 9 PA reports + 1 synthesis + gate results + build log = ~3,000-5,000 lines.

**Assessment:** Meta-to-output ratio: ~5,630 / ~4,000 = ~1.4:1. This is well within the 20:1 threshold. The ratio is healthy.

**VERDICT: NO NEW VULNERABILITY. Ratio is healthy.**

### FM-7: TC Gap (TC output reaching builder)

**Post-surgery state:** TC produces an 80-120 line brief with 8 sections, including a BUILD RECIPE (Section 6) with CSS snippets and perception checks. The builder reads this FIRST. The conventions-brief provides the world model. Together they deliver ~650-700 lines of directly relevant guidance.

**Assessment:** The TC brief's Section 6 (Build Recipe) is the single most important addition for closing the TC gap. It converts compositional analysis into sequenced build instructions with CSS values. The builder receives BOTH the "why" (Sections 1-5) and the "how" (Section 6). This is exactly the recipe-vs-checklist fix identified in the retrospective.

**VERDICT: NO NEW VULNERABILITY. TC gap is effectively closed by the recipe format.**

---

## 6. TOP 10 HARMONY ISSUES RANKED BY IMPACT

| Rank | Issue ID | Description | Impact | Files Affected |
|------|----------|-------------|--------|----------------|
| **1** | D-1 | PA-55 and PA-56 not assigned in build-page auditor table | HIGH | PA SKILL.md, /build-page SKILL.md |
| **2** | B-FW | Font-weight threshold: TC says >=200, PA says >=100, gate-runner says >=100 | HIGH | TC SKILL.md, PA SKILL.md, gate-runner.md |
| **3** | B-QC | Question count: PA says 65, build-page says 63 | MODERATE | PA SKILL.md, /build-page SKILL.md |
| **4** | B-T5 | Tier 5 scale: compositional-core/CLAUDE.md says /8, should be /9 | MODERATE | compositional-core/CLAUDE.md |
| **5** | D-3 | Conventions-brief lacks deployed/active channel distinction | MODERATE | conventions-brief.md |
| **6** | C-PA-1 | Tier 3 "Standalone Only" label misleading for PA-69/PA-70 | MODERATE | PA SKILL.md |
| **7** | C-TC-2 | Perception threshold table appears twice in TC with different row counts | MODERATE | TC SKILL.md |
| **8** | D-6 | compositional-core/CLAUDE.md stale: 56 questions and /8 scoring | MODERATE | compositional-core/CLAUDE.md |
| **9** | C-TC-3 | CPL section tonally distinct from surrounding guardrails | LOW | TC SKILL.md |
| **10** | C-BP-1 | No explicit gate-PASS-before-screenshots dependency statement | LOW | /build-page SKILL.md |

---

## 7. RECOMMENDATIONS FOR EACH ISSUE

### Issue #1 (D-1): PA-55 and PA-56 not assigned

**Recommendation:** Add PA-55 and PA-56 to the build-page SKILL.md Section 6.2 auditor assignment table:
- Add PA-55 to Auditor C's list: `PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **55**, **64**, **66**`
- Add PA-56 to Auditor B's list: `PA-02, 06, 07, 08, 29, **56**, 70`
- Update cycle 1 count from "All 63" to "All 65" in Section 7.4

### Issue #2 (B-FW): Font-weight threshold inconsistency

**Recommendation:** Decide on ONE canonical value and propagate it to all 4 files.
- **If >=200:** Update PA SKILL.md line 629 from ">=100" to ">=200", AND update gate-runner.md SC-13 from ">=100" to ">=200"
- **If >=100:** Update TC SKILL.md Phase 4.0 table line 874 from ">=200" to ">=100", AND update TC R-MC-03 line 1383 from ">=200" to ">=100", AND remove the misleading note "Canonical value: 200 (consistent with PA)" since PA says 100
- **Recommendation for the canonical value:** >=200 is more conservative and perceptually defensible (400->500 is barely visible; 400->600 is clearly visible). Recommend >=200 as canonical.

### Issue #3 (B-QC): Question count mismatch

**Recommendation:** Update build-page SKILL.md:
- Section 7.4 line 412: change "All 63" to "All 65"
- Verify the Section 6.2 auditor table includes PA-55 and PA-56 (per Issue #1 fix)

### Issue #4 (B-T5): Stale Tier 5 scale in compositional-core/CLAUDE.md

**Recommendation:** Update compositional-core/CLAUDE.md:
- Change "Tier 5 >= 6/8" to "Tier 5 >= 7/9" (matching build-page and PA)
- Change "56 questions" to "65 questions" throughout
- Change "8 Tier 5" to "9 Tier 5" references

### Issue #5 (D-3): Conventions-brief missing deployed/active distinction

**Recommendation:** Add a 3-line clarification to conventions-brief Section 4 after the perception thresholds table (around line 115):

```
A channel is DEPLOYED when CSS properties exist for it. A channel is ACTIVE when its CSS values EXCEED the thresholds above. Count only ACTIVE channels when evaluating multi-coherence. CSS changes below these thresholds are invisible and do not count as shifts.
```

### Issue #6 (C-PA-1): Misleading "Standalone Only" label

**Recommendation:** Change the Tier 3 header from "### Tier 3: Deep Dive (Standalone Only)" to "### Tier 3: Deep Dive (Standalone + Selected Pipeline Questions)" with a note explaining that some Tier 3 questions (PA-69, PA-70) are assigned in pipeline Mode 4.

### Issue #7 (C-TC-2): Duplicate perception threshold tables

**Recommendation:** Add a one-line note at R-MC-03 (line 1377): "This table EXTENDS the Phase 4.0 perception threshold table by adding Density, Rhythmic, and Stacked-gap rows for multi-coherence channel counting purposes."

### Issue #8 (D-6): Stale values in compositional-core/CLAUDE.md

**Recommendation:** Same as Issues #3 and #4 -- update question count and Tier 5 scoring to match PA and build-page authoritative sources.

### Issue #9 (C-TC-3): CPL section tonality

**Recommendation:** LOW PRIORITY. Consider compressing the CPL calculation to a table-format matching surrounding guardrails, or leave as-is since the tutorial style is more helpful for builders who need to actually calculate CPL.

### Issue #10 (C-BP-1): Missing gate-to-screenshot dependency

**Recommendation:** LOW PRIORITY. Add one sentence between Section 4 and Section 5: "All blocking gates must PASS before screenshot capture. If any gate FAILS, route fix instructions to the builder (Step 7) before proceeding to screenshots."

---

## APPENDIX: FILES NOT AUDITED BUT REFERENCED

The following files are referenced by the audited files but were not part of this audit scope:

- `design-system/compositional-core/identity/prohibitions.md` -- Referenced by TC, PA, build-page, conventions-brief. Not audited for consistency.
- `design-system/compositional-core/vocabulary/tokens.css` -- Referenced by all files. Not audited for consistency.
- `design-system/compositional-core/components/components.css` -- Referenced by build-page and conventions-brief. Not audited.
- `design-system/pipeline/flagship-pa-questions.md` -- Referenced by build-page Section 6.2. Not audited for question text consistency with PA SKILL.md.

These files should be cross-validated in a separate pass if full pipeline consistency is the goal.

---

**END OF CONTEXT HARMONY AUDIT**

**Auditor assessment:** The post-surgery pipeline is SUBSTANTIALLY COHERENT with 2 HIGH-impact issues (PA-55/56 orphaning and font-weight threshold mismatch) that require immediate fixes, 6 MODERATE issues that should be addressed before the next pipeline run, and 2 LOW issues that can be addressed at convenience. The overall surgical quality is good -- most insertions harmonize with their context. The highest-leverage fix is Issue #1 (assigning PA-55/56), as these questions specifically catch the failure mode that motivated the entire surgery.
