# Convergence Autopsy x v4 Implementation — Overlap Analysis

**Date:** 2026-02-25
**Analyst:** Opus overlap-analyst
**Sources:**
- `ephemeral/pipeline-convergence-autopsy/08-MASTER-FIX-CHECKLIST.md` (28 fixes)
- 7 v4 implementation reports (Tasks 1-7)
- 3 buddy reviews (adversarial, fresh-eyes, metacognitive)
- Direct inspection of modified files (tracker, orchestrator, gate-runner-core.js)

---

## Methodology

For each of the 28 convergence fixes, I checked:
1. **Does v4 touch the same file and section?** (potential conflict)
2. **Does v4 implement the same concept by a different mechanism?** (superseded)
3. **Does v4 change the exact text the fix targets?** (contradicted)
4. **Is the fix's target text unchanged in the current files?** (clean)

Status definitions:
- **DONE** — v4 already implemented this fix or its functional equivalent
- **PARTIAL** — v4 addressed part of the concept but remaining work exists
- **CLEAN** — v4 did not touch this area; the fix can be applied as specified
- **CONTRADICTED** — v4 changed the same text/section; fix needs rewriting against new baseline
- **SUPERSEDED** — v4 implemented a better/different version of this fix

---

## Master Status Map

| FIX-ID | Title | Priority | Target File | Status | v4 Overlap | Remaining Work |
|--------|-------|----------|-------------|--------|------------|----------------|
| FIX-01 | Rewrite Step 11 "terminates" language | P0 | MANIFEST.md | CLEAN | v4 Task 3 added +3 lines to MANIFEST but in different sections (Phase 3B integration, Phase 3C single-pass note). Quickstart Step 11 text is untouched. | Apply as specified. Verify line numbers (~40-41) still match after v4's +72 line growth. |
| FIX-02 | Replace hard cap with convergence budget | P0 | MANIFEST.md | CLEAN | v4 did not modify the iteration cap text (~line 42). | Apply as specified. Line numbers may have shifted due to v4 additions. |
| FIX-03 | Remove "SINGLE-PASS" from overview | P1 | MANIFEST.md | CLEAN | v4 did not modify the Pipeline Overview section (~line 65). Fresh-eyes review (C-8) notes v3/v4 naming inconsistency but the "SINGLE-PASS" label is untouched. | Apply as specified. |
| FIX-04 | Add feedback loop to dependency graph | P1 | MANIFEST.md | CLEAN | v4 did not modify the dependency graph description (~lines 591-593). | Apply as specified. Line numbers shifted due to v4 additions — locate by searching for "NO feedback loops" text. |
| FIX-05 | Rewrite "OUTPUT LABELS" to "ACTION TRIGGERS" | P0 | MANIFEST.md | CLEAN | v4 Task 3 added D-13 to Phase 3C section (~line 521: REFINE as highest-ROI) but did NOT touch the "OUTPUT LABELS" text (~line 519). D-13 is adjacent but non-overlapping. | Apply as specified. The D-13 addition actually reinforces FIX-05's intent — the two are complementary. |
| FIX-06 | Add REFINE builder prompt template | P1 | MANIFEST.md | PARTIAL | v4 Task 3 (A-09) added REFINE Builder Isolation Rules to orchestrator (lines 566-570): builder receives/does-not-receive lists, generative verbs mandate. This is the ISOLATION protocol, not the full PROMPT TEMPLATE. | FIX-06 adds a copy-paste-ready prompt template to MANIFEST Appendix E. A-09 codified the isolation rules in the orchestrator. Remaining: write the actual prompt template text (the "You are a COMPOSITIONAL REFINEMENT agent..." block) and add to Appendix E. Non-contradicted — the template would reference A-09's isolation rules. |
| FIX-07 | Add iteration file naming convention | P2 | MANIFEST.md | PARTIAL | v4 Task 3 added Post-REFINE Screenshot Re-Capture to orchestrator (line 576) specifying `-refine` suffix for screenshots. This covers screenshot naming but NOT the full iteration naming convention for PA reports, weaver output, gate results. | Apply the PA report naming convention (`*-refine.md`) and gate results naming (`*-refine.json`) as specified. Screenshot naming is already handled by v4. |
| FIX-08 | Restructure REFINE to BEFORE/DURING/AFTER | P0 | orchestrator.md | PARTIAL | v4 Task 3 (A-09, B-09, B-02) added 3 new subsections around the REFINE protocol: Isolation Rules (lines 566-570), Post-REFINE Mechanical Sweep (line 572), Post-REFINE Gate Re-Run (line 574), Post-REFINE Screenshot Re-Capture (line 576). But the core 5-step REFINE list (lines 559-564) is UNCHANGED — still the flat numbered list, not the BEFORE/DURING/AFTER structure. | The surrounding infrastructure is stronger (v4 added AFTER-REFINE procedures). But the core REFINE protocol still needs restructuring from flat list to BEFORE/DURING/AFTER with the re-read instruction, "NON-NEGOTIABLE" warning, and historical evidence. CONTRADICTED in the sense that new text was added immediately after the 5-step list — the fix must account for A-09/B-09/B-02 content at lines 566-576. |
| FIX-09 | Remove "Single-pass = DEFAULT" (3 locations) | P0 | orchestrator.md | CLEAN | v4 added to orchestrator but in Sections 6 (Phase 3A) and Section 7 (Verdict). The 3 "Single-pass = DEFAULT" locations (~line 13 Council Mandates, ~line 44 budget, ~line 65 default mode) were NOT modified. | Apply as specified. v4 added content in later sections; the early-file "Single-pass" references are untouched. |
| FIX-10 | Reframe cost as investment | P2 | orchestrator.md | CLEAN | v4 did not modify the cost estimates section (~lines 667-670). D-13 in MANIFEST adds "REFINE is highest-ROI" but the orchestrator's cost section is untouched. | Apply as specified. D-13 is complementary framing in a different file. |
| FIX-11 | Add post-REFINE gate warning | P1 | orchestrator.md | PARTIAL | v4 Task 3 (B-09) added a Post-REFINE Mechanical Sweep at line 572. This is a GATE RE-RUN instruction, not the "verification theater" WARNING that FIX-11 proposes. The warning ("GATES PASSED — but gates verify IDENTITY and PERCEPTION PHYSICS only") is conceptually different: B-09 tells you to re-run gates, FIX-11 tells you gates are insufficient. | FIX-11's warning should be placed AFTER v4's B-09 mechanical sweep text. The sweep runs gates; the warning reminds the orchestrator that passing gates does NOT mean the page is ready to ship. These are complementary, not overlapping. Insert after line 574. |
| FIX-12 | Add known REFINE outcomes evidence | P1 | orchestrator.md | CLEAN | v4 did not add a cross-run evidence table. D-13 in MANIFEST mentions "+1.0 to +1.5 PA-05 per REFINE cycle" but as a single-line note, not a structured evidence table. | Apply as specified. Place after v4's REFINE isolation rules + mechanical sweep section (after line 576). |
| FIX-13 | Add iteration decision function | P0 | orchestrator.md | CLEAN | v4's B-01 (GR-48 verdict precondition, lines 533-542) adds a phase-function accumulator pattern for GATE execution, but this is about gate COVERAGE, not about the post-verdict ITERATION DECISION. FIX-13's decision function ("If verdict is REFINE: check iteration budget...") is absent. | Apply as specified. Place in Section 7 after the verdict categories. Note: v4's B-01 is about ensuring gates ran; FIX-13 is about what to DO after the verdict. Non-overlapping. |
| FIX-14 | Define REFINE EXIT ARTIFACT (residual) | P1 | orchestrator.md | CLEAN | v4 did not add a RESIDUAL artifact concept. The conviction artifact is referenced but no builder residual ("what I would change next") exists. | Apply as specified. Place within the REFINE protocol section. |
| FIX-15 | Move REFINE to execution sections | P1 | orchestrator.md | CONTRADICTED | v4 Task 3 added substantial content to Section 7 (GR-48 precondition at lines 533-542, REFINE isolation at 566-570, mechanical sweep at 572, gate re-run at 574, screenshot re-capture at 576). Section 7 is now MORE substantial than before, making the REFINE protocol harder to move because it's interwoven with v4 additions. | Needs rewriting. The original fix proposed moving REFINE to "Section 6.5" between Phase 3C and the verdict. But v4 added REFINE-adjacent content throughout Section 7. Options: (a) create Section 6.5 as a cross-reference/redirect to Section 7, (b) move the ENTIRE expanded REFINE block (lines 559-576) to a new Section 6.5, or (c) add a prominent ">>> IF VERDICT IS REFINE, EXECUTE SECTION 7 NOW <<<" at the end of Section 6. |
| FIX-16 | Reframe "cannot fix your way" | P2 | orchestrator.md | CLEAN | v4 did not modify line 594 ("You cannot fix your way to Flagship. Only compose your way."). | Apply as specified. |
| FIX-17 | Add Iteration Log to tracker | P0 | TRACKER.md | SUPERSEDED | v4 Task 5 (D-01) completely rebuilt the tracker from 596 to 146 lines. The old tracker structure that FIX-17 targets no longer exists. The new tracker has a REFINE Phase section (lines 84-91) with PA-05 delta and CSS delta fields, but NOT the multi-row Iteration Log table that FIX-17 proposes. | The new tracker at 146 lines has SOME iteration fields (REFINE section) but not the multi-cycle Iteration Log (3-row table with quality trajectory). FIX-17 needs rewriting against the new tracker structure. Add the Iteration Log table AFTER the REFINE Phase section (after line 91). The new tracker is compact enough (146 lines) to absorb ~18 more lines. |
| FIX-18 | Update Circuit Breaker to iteration state | P1 | TRACKER.md | SUPERSEDED | v4 Task 5 eliminated the Circuit Breaker field entirely. The new tracker has no "Circuit Breaker" row — it was replaced by the "Verdict" field in Phase 3C (line 78) and the "REFINE Phase" section. | FIX-18's concept (multi-state iteration tracking) is PARTIALLY addressed by the REFINE Phase section. But the iteration STATE enum (REFINE-1 / REFINE-2 / REBUILD-1 / BUDGET EXHAUSTED) does not exist. Consider adding an "Iteration State" field to Build Metadata. |
| FIX-19 | Add post-REFINE completion gate | P0 | TRACKER.md | SUPERSEDED | v4 Task 5 completely rebuilt the tracker. The old Post-Run Verification section that FIX-19 targets no longer exists. The new tracker has a "Derived Phase Completion" table (lines 133-146) that derives completion from field fill. The REFINE Phase section exists but has no explicit "pipeline NOT complete if REFINE reports missing" check. | Rewrite FIX-19 against the new tracker. The concept (binary check: "if verdict was REFINE, do post-REFINE PA reports exist?") should be added to either the REFINE Phase section or the Derived Phase Completion logic. ~4 lines. |
| FIX-20 | Add revision enhancement opportunities | P1 | pa-weaver.md | PARTIAL | v4 Task 6 (A-07) added a "Rendering vs Composition Failure Classification" section to pa-weaver.md (Section 5.0, 19 lines). A-07 includes the concept that REFINE is compositional and distinct from fixing, plus an ROI statement (+1.0 to +1.5 PA-05). But A-07 focuses on CLASSIFICATION (which failures are rendering vs composition), not on ENHANCEMENT OPPORTUNITIES (why iteration can improve quality). | A-07 addresses the fix-vs-compose distinction but from the DIAGNOSTIC side. FIX-20 addresses it from the OPPORTUNITY side (4 specific enhancement mechanisms). These are complementary. FIX-20 should be placed AFTER A-07's Section 5.0 (as Section 5.0b or 6.3 as originally proposed). Note: pa-weaver.md is at 479/480 lines (SIG-02 from adversarial review) — FIX-20 adds ~15 lines, which WILL breach the 480-line ceiling. Must compress existing content first. |
| FIX-21 | Remove Weaver predictions | P1 | pa-weaver.md | CLEAN | v4 did not add or modify prediction-related content in pa-weaver.md. A-07 and C-06 were added but neither touches the verdict prediction behavior. | Apply as specified. BUT: pa-weaver.md is at 479/480 ceiling. FIX-21 adds ~10 lines. Combined with FIX-20 (+15) and FIX-22 (+12), this is +37 lines over a 1-line headroom. Requires substantial compression of existing pa-weaver.md content before applying ANY of FIX-20/21/22. |
| FIX-22 | Add Finding Status Map | P1 | pa-weaver.md | CLEAN | v4 did not add any finding lifecycle or status map concept. | Apply as specified. Same ceiling concern as FIX-20/21. |
| FIX-23 | Add iteration to SKILL.md | P1 | SKILL.md | CLEAN | v4 did not modify the build-page SKILL.md entry point. | Apply as specified. |
| FIX-24 | GR-70: PA-05 Non-Regression gate | P0 | gate system | CLEAN | v4 Task 4 added 5 new gates (BV-05, GR-55, GR-66, GR-67, A-03) and 4 phase functions. None are iteration-quality gates. GR-70 concept (PA-05 non-regression) does not exist in v4. | Apply as specified. Add to gate-runner-core.js and gate-manifest.json. Note: gate-runner-core.js is at 1,944/2,000 lines (56 lines headroom). GR-70 needs ~10-15 lines. Fits. |
| FIX-25 | GR-75: Iteration Counter gate | P1 | gate system | CLEAN | v4 did not add any iteration-counting mechanism to the gate system. | Apply as specified. ~5-8 lines. Fits within headroom. |
| FIX-26 | GR-78: Builder Residual Artifact gate | P1 | gate system | CLEAN | v4's GR-43 (self-eval) and GR-63 (experiential) check builder artifacts but NOT a residual comment. | Apply as specified. Depends on FIX-14 (residual artifact defined). ~5-8 lines. |
| FIX-27 | Add iteration-aware Weaver routing | P2 | pa-deployment.md | CLEAN | v4 Task 6 added A-06 (integrative timing) and C-07 (filename standardization) to pa-deployment.md, but in different sections (Section 1.5-1.6). The Weaver routing section for REFINE cycles is untouched. | Apply as specified. pa-deployment.md is at 364/370 lines (6 lines headroom). FIX-27 adds ~10 lines — WILL breach ceiling. Must compress existing content or raise ceiling. |
| FIX-28 | Reclassify REFINE as validated | P2 | experiment-protocol.md | CLEAN | v4 did not modify experiment-protocol.md. | Apply as specified. |

---

## Summary Statistics

| Status | Count | FIX IDs |
|--------|-------|---------|
| **CLEAN** | 17 | FIX-01, 02, 03, 04, 05, 09, 10, 12, 13, 14, 16, 22, 23, 24, 25, 26, 28 |
| **PARTIAL** | 5 | FIX-06, 07, 08, 11, 20 |
| **SUPERSEDED** | 3 | FIX-17, 18, 19 |
| **CONTRADICTED** | 1 | FIX-15 |
| **DONE** | 0 | (none) |

**Key finding: ZERO fixes are fully DONE.** v4 focused on enforcement infrastructure (gates, tracker, isolation rules) while the convergence autopsy focuses on iteration architecture (language, structure, feedback loops). The two initiatives are almost entirely non-overlapping in intent, despite touching many of the same files.

---

## Critical Constraints Discovered

### 1. File Ceiling Exhaustion

Three files are at or near their line ceilings, blocking multiple convergence fixes:

| File | Current Lines | Ceiling | Headroom | Fixes Needing Space | Total Lines Needed |
|------|--------------|---------|----------|---------------------|-------------------|
| pa-weaver.md | 479 | 480 | 1 | FIX-20 (+15), FIX-21 (+10), FIX-22 (+12) | +37 |
| pa-deployment.md | 364 | 370 | 6 | FIX-27 (+10) | +10 |
| gate-runner-core.js | 1,944 | 2,000 | 56 | FIX-24 (+15), FIX-25 (+8), FIX-26 (+8) | +31 |

**pa-weaver.md is the critical bottleneck.** 3 convergence fixes (all P1-HIGH) need 37 lines in a file with 1 line of headroom. Resolution options:
- Compress existing weaver content (~10-15 lines identified by adversarial SIG-02)
- Raise the ceiling (requires justification)
- Split the weaver into core + iteration supplement
- Defer FIX-20/21/22 (loses all iteration-quality mechanisms for the weaver)

### 2. Tracker Rewrite Required

FIX-17, FIX-18, FIX-19 all target the old tracker structure (596 lines). v4 rebuilt it to 146 lines. All three need rewriting against the new structure, but the concept of each is still needed:
- **FIX-17 (Iteration Log):** New tracker has single-cycle REFINE fields but no multi-cycle table
- **FIX-18 (Iteration State):** Circuit Breaker field eliminated; need new location
- **FIX-19 (Completion Gate):** Post-Run Verification eliminated; need new enforcement point

### 3. Orchestrator Section 7 Is Now Dense

v4 Task 3 added ~40 lines to Section 7 (GR-48 precondition, REFINE isolation, mechanical sweep, gate re-run, screenshot re-capture). FIX-08 wants to restructure the REFINE protocol in this same section, and FIX-15 wants to move it out entirely. The v4 additions make Section 7 more important to read (REFINE infrastructure is there) but also more congested.

---

## Recommended Implementation Order (Convergence Fixes Post-v4)

### Wave A: Language Surgery (CLEAN, no conflicts)
All 9 CLEAN EXPLICIT fixes. Apply as specified, adjusting line numbers.

| Fix | Est. Lines | Risk |
|-----|-----------|------|
| FIX-01 | ~3 changed | LOW — just text |
| FIX-02 | ~3 changed | LOW — just text |
| FIX-03 | ~2 changed | LOW — just text |
| FIX-04 | ~3 changed | LOW — just text |
| FIX-05 | ~4 changed | LOW — adjacent to D-13 but non-overlapping |
| FIX-09 | ~6 changed (3 locations) | LOW — v4 didn't touch these locations |
| FIX-10 | ~3 changed | LOW — isolated section |
| FIX-16 | ~2 changed | LOW — isolated line |
| FIX-28 | ~4 added | LOW — v4 didn't touch experiment-protocol.md |

### Wave B: Structural Infrastructure (mostly CLEAN, some rewriting needed)
All STRUCTURAL fixes, with rewrites for SUPERSEDED items.

| Fix | Status | Rewrite Needed? | Blocker |
|-----|--------|----------------|---------|
| FIX-14 (Residual artifact) | CLEAN | No | None |
| FIX-08 (REFINE restructure) | PARTIAL | Yes — integrate with v4's A-09/B-09/B-02 content | Must account for lines 566-576 |
| FIX-13 (Decision function) | CLEAN | No | None |
| FIX-15 (Move REFINE) | CONTRADICTED | Yes — Section 7 now has v4 infrastructure | Depends on FIX-08 decision |
| FIX-17 (Iteration Log) | SUPERSEDED | Yes — target new 146-line tracker | ~18 lines, fits |
| FIX-18 (Iteration State) | SUPERSEDED | Yes — find new location for enum | ~2 lines |
| FIX-19 (Completion Gate) | SUPERSEDED | Yes — integrate into Derived Phase Completion | ~4 lines |
| FIX-06 (REFINE prompt template) | PARTIAL | Partial — A-09 provides isolation rules, template text still needed | None |
| FIX-07 (File naming) | PARTIAL | Partial — screenshot naming done, PA/gate naming needed | None |
| FIX-23 (SKILL.md) | CLEAN | No | None |

### Wave C: Quality Mechanisms (ceiling-constrained)
PA weaver and deployment fixes. BLOCKED by ceiling exhaustion.

| Fix | Status | Blocker |
|-----|--------|---------|
| FIX-20 (Enhancement opportunities) | PARTIAL | pa-weaver.md at 479/480 ceiling |
| FIX-21 (Remove predictions) | CLEAN | pa-weaver.md ceiling |
| FIX-22 (Finding Status Map) | CLEAN | pa-weaver.md ceiling |
| FIX-11 (Gate warning) | PARTIAL | None — fits in orchestrator |
| FIX-12 (Evidence table) | CLEAN | None — fits in orchestrator |
| FIX-27 (Weaver routing) | CLEAN | pa-deployment.md at 364/370 ceiling |

**Pre-requisite for Wave C:** Compress pa-weaver.md by ~36 lines to create headroom.

### Wave D: Gate Implementation (CLEAN, headroom available)

| Fix | Lines Needed | Headroom Available |
|-----|-------------|-------------------|
| FIX-24 (GR-70) | ~15 | 56 in gate-runner-core.js |
| FIX-25 (GR-75) | ~8 | (after FIX-24: 41) |
| FIX-26 (GR-78) | ~8 | (after FIX-25: 33) |

All fit. Depends on FIX-14 (residual artifact) and FIX-17 (iteration log).

---

## Cross-Reference: v4 Buddy Review Findings That Affect Convergence Fixes

### From Adversarial Review (buddy-adversarial-review.md)

1. **BLOCK-02 (Instructional implementations):** A-09 (REFINE isolation), D-12 (archival), NEW-03 (self-assessment) are instructional, not structural. FIX-08's BEFORE/DURING/AFTER restructure would strengthen A-09 by making the isolation rules part of a structural sequence rather than standalone prose. Convergence fixes and v4 adversarial findings are ALIGNED here.

2. **SIG-02 (pa-weaver at 479/480):** Directly blocks convergence Wave C. Must be resolved first.

3. **SIG-04 (Duplicate A-06):** The integrative timing rule is now in 3 files (orchestrator, MANIFEST, pa-deployment). FIX-27 would add iteration-aware weaver routing to pa-deployment — a 4th file mentioning auditor-count-dependent behavior. Fragmentation risk increases.

### From Fresh-Eyes Review (buddy-fresh-eyes-review.md)

1. **C-1 (Gate count discrepancies):** FIX-24/25/26 add 3 more gates. The already-confusing gate count (36? 42? 45? 47?) gets worse. Convergence fixes should include updating the definitive gate count.

2. **C-7 (BV-05 keyword mismatch):** BV-05 D-01-D-09 keywords don't match actual disposition definitions. This is a v4 bug, not a convergence concern, but it affects BV-05's ability to catch compression loss — relevant to FIX-02's iteration budget (which depends on detecting quality accurately).

3. **O-2 (GR-55/66/67 orphan references):** Fresh-eyes found these gates referenced in header but not implemented. Task 4 report claims implementation. Discrepancy suggests the fresh-eyes agent read an older version of gate-runner-core.js. Verify before adding FIX-24/25/26.

### From Metacognitive Review (buddy-metacognitive-review.md)

1. **Problem 3 (Second REFINE cycle FORGOTTEN):** The convergence autopsy directly addresses this — FIX-02 budgets for 2 REFINE passes, FIX-13 adds the decision function, FIX-17 tracks multiple cycles. The convergence fixes fill the metacognitive review's identified gap.

2. **Problem 6 (Composition quality FORGOTTEN):** FIX-20 (enhancement opportunities) and FIX-08 (compositional REFINE) partially address this but through iteration architecture, not builder capability. The metacognitive review's deeper concern (builder model selection, recipe enrichment) remains unaddressed by both v4 and convergence fixes.

3. **Contrarian 4 (Iterative > feed-forward):** The convergence autopsy IS the response to this contrarian. All 28 fixes aim to make the pipeline iterative. The metacognitive review's concern is validated by the convergence research.

---

## Final Assessment

**The convergence autopsy and v4 are almost entirely complementary.** v4 strengthened enforcement infrastructure (gates, tracker, isolation). The convergence autopsy strengthens iteration architecture (language, structure, feedback). They touch the same files but rarely the same sections.

**17 of 28 fixes (61%) are CLEAN** — apply as specified with only line-number adjustments.

**The primary blocker is file ceiling exhaustion**, not v4 conflicts. pa-weaver.md needs 37 lines of headroom but has 1. This single constraint blocks 3 P1-HIGH fixes (FIX-20, 21, 22) that represent the entire iteration-quality feedback mechanism.

**3 fixes (11%) need rewriting** against v4's rebuilt tracker (FIX-17, 18, 19). The concepts survive; the text must target the new 146-line structure.

**1 fix (4%) is genuinely CONTRADICTED** (FIX-15, move REFINE). v4 made Section 7 denser with REFINE infrastructure, making the move more complex. This fix needs a new approach.

**0 fixes are DONE.** The two initiatives solved different problems.
