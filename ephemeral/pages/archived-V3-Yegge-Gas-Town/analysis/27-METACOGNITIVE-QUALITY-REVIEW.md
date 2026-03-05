# METACOGNITIVE QUALITY REVIEW — File 22 Master Implementation Checklist

**Date:** 2026-02-25
**Reviewer:** Opus metacognitive agent (fresh context, zero prior involvement)
**File reviewed:** 22-MASTER-IMPLEMENTATION-CHECKLIST.md (4,268 lines)
**Method:** Full holistic read, then dimensional assessment

---

## EXECUTIVE SUMMARY

The checklist is an impressive synthesis — 4,268 lines distilling ~2MB of analysis into actionable items with surgery-grade precision. The MUST tier items (1-9, the BLOCKING enrichments) are genuinely well-specified. But the checklist has a fundamental structural problem: **it conflates three different document types** — implementation spec (MUST-01 through MUST-09), process philosophy (MUST-18 through MUST-23), and prerequisite tracking (MUST-10 through MUST-17) — into a single tier with a single label. This creates priority confusion: an implementer reading "25 MUST items" expects 25 things to build, but only 9 are buildable enrichments, 6 are experiments/awareness items with no spec output, and 10 are prerequisites/optimizations.

**Verdict:** Section 1 is GOOD but needs tier subdivision. Sections 2-3 are EXCELLENT (detailed surgery specs). Sections 4-5 are GOOD (clear dependency tracking). Sections 6-7 are EXCELLENT (comprehensive formatting rules and anti-loss verification). Section 8 is HONEST and COMPLETE.

---

## 1. ROOT CAUSE ALIGNMENT

### Items that DO address root causes (STRONG)

| Item | Root Cause | Alignment |
|------|-----------|-----------|
| MUST-01 (ME-001) | Auditors skip to analytical evaluation, missing experiential failures | DIRECT — experiential pass forces perceptual observation before analysis |
| MUST-04 (ME-004) | Builder does not self-check for legibility | DIRECT — adds self-check at source |
| MUST-07 (ME-007) | GR-44 measurement algorithm has a bug | DIRECT — fixes the specific bug |
| MUST-13 (ADV-07a) | Gate-runner at zero capacity budget | DIRECT — subtraction creates headroom |
| MUST-18 (Content experiment) | N=1 dataset may not generalize | DIRECT — proposes the correct experiment |
| MUST-20 (DPR null hypothesis) | DPR bug may be root cause of most findings | DIRECT — proposes the cheapest possible test |

### Items that treat SYMPTOMS, not root causes (CONCERN)

**MUST-02 (ME-002): Usability Priority Override in Weaver**
- SYMPTOM treatment. The root cause is not that the Weaver orders fixes wrong — it's that the Weaver receives undifferentiated findings with no severity signal. Adding a priority override is a patch on the Weaver's inability to distinguish severity classes. The deeper fix is ME-001 (experiential pass) + ME-009 (aggregation thresholds) feeding structured severity data to the Weaver. ME-002 without ME-001+ME-009 is a manual override on top of unstructured data.
- **Recommendation:** ME-002 should be marked as DEPENDENT ON ME-001+ME-009, not standalone.

**MUST-05 (ME-005): MECHANICAL Exception to Verdict Logic**
- SYMPTOM treatment. The root cause is that the verdict system has only two states (SHIP/REBUILD) for a problem space that requires three (SHIP/REFINE/REBUILD). ME-005 adds a third state by carving out "MECHANICAL" as a REFINE trigger, but the MECHANICAL definition (<=5 CSS lines, no HTML change, no design decision) is an arbitrary threshold. The deeper issue is that the verdict system itself is too coarse. The checklist correctly identifies this as the HIGHEST-CASCADE CHANGE and documents the 7+ location update, but the MECHANICAL threshold will need tuning after real-world use and the checklist treats it as fixed.
- **Recommendation:** Add post-implementation validation criterion: "Run 3 pipeline executions and verify MECHANICAL threshold correctly classifies at least 80% of identity failures."

**MUST-06 (ME-006): Screenshot Validation Gate**
- MIXED. Partly root cause (DPR bug detection) and partly symptom (validation after the fact rather than preventing the bug). The checklist honestly documents the builder signal problem (ADV-1C-3) but still classifies ME-006 as implementable without that resolution. The screenshot validation will create new failure modes (CSS overrides changing the page) that are acknowledged but not resolved.
- **Recommendation:** ME-006 should be split into ME-006a (CSS override expansion — low risk, high value, 3 lines) and ME-006b (blank-screenshot threshold + validation gate — higher risk, needs builder signal). Only ME-006a belongs in Wave 1.

**MUST-08 (ME-008): Usability Circuit Breaker**
- SYMPTOM treatment. Adds yet another orchestrator step between PA and Weaver. The root cause is that the pipeline has no way to surface BLOCKING findings with appropriate urgency. ME-008 is a manual scan step that the orchestrator may or may not execute correctly. The interaction with ME-005 (MECHANICAL) is explicitly undefined (ADV-05c).
- **Recommendation:** Downgrade to SHOULD. ME-002 (usability priority override in Weaver) already covers the same intent. Having both ME-002 AND ME-008 creates two mechanisms for the same problem.

### Items where root cause alignment is IRRELEVANT

MUST-18 through MUST-23 are not enrichments — they are process decisions and awareness constraints. Root cause alignment doesn't apply because they don't propose spec changes. They are correctly identified as important but belong in a SEPARATE section ("Process Decisions Required Before Implementation"), not mixed with buildable enrichments.

---

## 2. PRIORITY/TIER ACCURACY

### Items that should be DOWNGRADED from MUST to SHOULD

**MUST-08 (ME-008): Usability Circuit Breaker**
- Duplicates ME-002 intent. ME-002 is in the 8-change plan; ME-008 is not. If ME-002 works, ME-008 is redundant. If ME-002 doesn't work, ME-008's manual scan step won't help either.
- **Recommendation:** SHOULD tier.

**MUST-09 (ME-009): Experiential Detection Threshold Table**
- The aggregation thresholds (>=3/9 = CONFIRMED) are useful but not BLOCKING. Without ME-009, the Weaver receives unstructured experiential reports, which is suboptimal but not pipeline-breaking. ME-001 (experiential pass) is BLOCKING; ME-009 (how to tally the results) is SHOULD.
- **Recommendation:** SHOULD tier. Already appears in TIER 2D (Section 2) with full surgery plan, which creates a CONTRADICTION — ME-009 is in both MUST-09 (Section 1) and TIER 2D (Section 2). This is a deduplication failure.

**MUST-10 (ADV-1A-4): Three-Auditor Optimization**
- This is an optimization of ME-001, not a prerequisite. Nothing blocks if all 9 auditors do the experiential pass. The optimization saves cost and time but is not BLOCKING by the stated criteria ("Blocks quality, creates cross-file conflict, breaks anti-loss mechanisms, or is a BLOCKING prerequisite if skipped").
- **Recommendation:** SHOULD tier.

**MUST-24 (FRESH-2-2): ME-003 as Glaring Omission**
- This is a DUPLICATE of MUST-03 (ME-003). The checklist has the same enrichment in two MUST slots. MUST-24 adds the fresh-eyes perspective that ME-003 is important, but it's the same item.
- **Recommendation:** DELETE — merge commentary into MUST-03.

### Items that should be UPGRADED from SHOULD to MUST

**ME-046 (Screenshot Recovery Protocol)** — currently TIER 2C (SHOULD)
- ME-006 (screenshot validation) is MUST/BLOCKING and in the 8-change plan. But ME-006 detects bad screenshots with no recovery procedure. Detection without recovery = incomplete protocol. If ME-006 is MUST, its companion ME-046 should be MUST.
- **Recommendation:** MUST tier, OR explicitly bundle with ME-006 as a sub-component.

**ME-035 + ME-036 (PA-02 Footer/Header + PA-07 Horizontal Scroll)** — currently TIER 3 (COULD)
- +2 lines total. Virtually zero cost. The checklist itself (Section 3I) identifies these as "STRONG restoration case" and "near-zero cost." Leaving 2-line fixes in COULD while spending 4,268 lines analyzing them is the complexity ratchet in action.
- **Recommendation:** Bundle with Wave 3 PA enrichments. Should not require their own MUST/SHOULD classification — they should just be done.

---

## 3. ACTIONABILITY CHECK

### MUST items with HIGH actionability (implementer can read and build)

| Item | Actionable? | Notes |
|------|------------|-------|
| MUST-01 (ME-001) | YES | Exact insertion point, line count, format rules, observation verbs |
| MUST-04 (ME-004) | YES | Recipe format specified, Q0/Q1 structure clear |
| MUST-07 (ME-007) | YES | Bug identified, fix algorithm specified, offset requirement stated |
| MUST-14 (Gate naming map) | YES | Simple lookup table creation task |
| MUST-15 (Per-file architecture) | YES | Clear process instruction |
| MUST-16 (Subtraction ordering) | YES | Clear ordering constraint |

### MUST items with LOW actionability (aspirational, needs more work)

**MUST-03 (ME-003): WCAG Contrast Gate**
- Says "go read gate-usability-audit.md Section 5 for code" — code is in an external file. The checklist correctly flags this (ADV-03: "2-hour task disguised as single enrichment") but still classifies it as MUST. An implementer reading JUST this entry would know WHAT to build but not HOW — the implementation sketch is elsewhere.
- **Recommendation:** Either inline the implementation sketch from gate-usability-audit.md, or explicitly mark as "MUST — REQUIRES DISCOVERY PHASE."

**MUST-05 (ME-005): MECHANICAL Exception**
- 7+ location coordinated update. The checklist lists all locations but does NOT provide the actual text that should appear at each location. An implementer must read 7 files, understand current verdict logic, and COMPOSE the MECHANICAL exception text independently at each location, then verify consistency.
- **Recommendation:** Provide exact text for ALL 7 locations. The surgical precision applied to ME-010-013 (Section 2, with old->new diffs) should also apply to MUST-05.

**MUST-06 (ME-006): Screenshot Validation**
- 4 sub-changes across 2 files. Sub-change 1 (CSS override expansion) is concrete. Sub-changes 2-4 are protocol designs that require judgment about thresholds (">2 consecutive blank" — why 2? ">20% blank total" — where does 20% come from?). The thresholds are stated but not evidenced.
- **Recommendation:** Add evidence basis for thresholds, or mark as "initial values requiring calibration."

**MUST-11 (WCAG Palette Conflict)**: Explicitly a DECISION item requiring user input. Not actionable by an implementer — requires the user to choose Option A, B, or C. This is correctly structured.

**MUST-17 (Detection-to-Fix Gap)**: Identified as architectural gap with no proposed solution. The checklist says "Must define..." but doesn't define it. This is an honest acknowledgment of an unsolved problem, not an actionable item.
- **Recommendation:** Rename from MUST to "OPEN QUESTION" or move to Section 8.

**MUST-18, MUST-19, MUST-20, MUST-23 (Experiments/Awareness)**: These are experiments and process decisions, not implementation specs. An implementer cannot "implement" Frame A awareness (MUST-19) or "build" a content experiment (MUST-18). They are correctly identified as important process decisions but the MUST label suggests they are buildable enrichments.
- **Recommendation:** Move to a new "Section 0: DECISIONS REQUIRED BEFORE IMPLEMENTATION" that precedes the MUST tier.

---

## 4. INTERNAL CONSISTENCY

### Contradictions Found

**CONTRADICTION 1: ME-009 appears in BOTH Section 1 (MUST-09) and Section 2 (TIER 2D)**
- MUST-09 at line 184 describes ME-009 as a MUST/BLOCKING enrichment.
- TIER 2D at line 1426 describes ME-009 as a SHOULD item "classified SHOULD (or SIGNIFICANT severity with SHOULD-level priority)."
- Same enrichment, two different tiers, two different entries with different detail levels.
- **Impact:** An implementer following Section 1 would treat ME-009 as BLOCKING. Following Section 2, they'd treat it as SHOULD. The Section 2 entry actually has MORE implementation detail (exact surgery plan from File 16), while the Section 1 entry is more abstract.
- **Fix:** Remove ME-009 from Section 1 MUST tier. It is already SHOULD-level (aggregation thresholds are useful but not BLOCKING).

**CONTRADICTION 2: ME-032, ME-033, ME-034 appear in BOTH Section 2 (TIER 2D) and Section 3 (TIER 3)**
- ME-032 appears at line 1465 (TIER 2D, SHOULD) and line 2017 (TIER 3B, COULD).
- ME-033 appears at line 1503 (TIER 2D, SHOULD) and line 2025 (TIER 3B, COULD).
- ME-034 appears at line 1539 (TIER 2D, SHOULD) and line 2032 (TIER 3B, COULD).
- Section 2 entries have full surgery plans with exact diffs. Section 3 entries are compressed summaries.
- **Impact:** Three items in two tiers simultaneously. The Sections 2 entries are authoritative (more detailed). The Section 3 entries are duplicates.
- **Fix:** Remove ME-032, ME-033, ME-034 from Section 3 TIER 3. They are Section 2 SHOULD items.

**CONTRADICTION 3: ME-042, ME-045, ME-046 appear in BOTH Section 2 (TIER 2C) and Section 3 (TIER 3D)**
- Same pattern as Contradiction 2. Section 2 entries acknowledge this: "These MANIFEST items are classified SHOULD in File 15 surgery plan but COULD in the master enrichment list."
- But having them in both sections creates ambiguity.
- **Fix:** Remove from Section 3 or add a cross-reference note ("See TIER 2C for full detail").

**CONTRADICTION 4: Budget math doesn't add up across sections**
- Section 1 Summary Table (line 553) lists MUST budget lines per item.
- Section 5 Wave summary (line 2846) lists per-wave net lines.
- Wave 1 claims +134 lines for 8 ME items. But summing the individual MUST-01 through MUST-08 budget lines from Section 1: +22 + 14 + 12 + 12 + 27 + 10 + 8 + 15 = +120, not +134. The discrepancy is 14 lines.
- ME-008 (+8) and ME-009 (+15) are in Wave 1 Step 1.5/1.6 but NOT in the 8-change plan (both marked "In current 8-change plan? NO"). Wave 1 includes items NOT in the 8-change plan.
- This is not a bug — Wave 1 is the EXPANDED implementation plan, not the 8-change plan. But the Section 1 Summary Table says "In current 8-change plan: 6 of 9 BLOCKING enrichments" while Section 5 assumes all 9 are implemented. The relationship between "8-change plan" and "Wave 1-5" is never explicitly stated.
- **Fix:** Add explicit statement: "Section 5 implementation order covers ALL enrichments including those NOT in the 8-change plan. The 8-change plan is a subset of Wave 1."

**CONTRADICTION 5: Wave 0 subtraction estimates are inconsistent**
- Section 4.8 says "~170 lines MUST be subtracted."
- Section 5.1 Wave 0 table says "-170 lines" (matches).
- MUST-13 says "~150 lines" to remove.
- TIER 2F ADV-07a entry says "Total freed: 60 lines (not 150 as adversarial estimated)."
- The 170 vs 150 vs 60 discrepancy is acknowledged in the ADV-07a entry (the 150 figure referenced gates that use different naming), but the 170 in Section 4.8 is unexplained.
- **Fix:** Section 4.8 should show its math: what EXACTLY is being subtracted to reach 170? The 60-line figure from File 14 surgery plan is the evidence-based number. The 170 figure from audit-12-13 may be based on a different (possibly wrong) subtraction plan.

### Budget calculations that DO add up

- Section 2 SHOULD budget table (line 1911) is internally consistent per file.
- Section 5 Wave summary running totals are internally consistent.
- Grand total of +227 against ~240 budget (13 lines headroom) is consistent with per-wave calculations.
- Per-file budgets in Section 6.5 are consistent with Section 4.9.

---

## 5. MISSING ROOT CAUSES

### Root Cause the checklist DOES NOT address: Builder Vocabulary Poverty

The pipeline produced a B+ page. The checklist exhaustively addresses detection (better PA), prevention (better gates), and process (better ordering). But MEMORY.md contains a finding from the Middle-Tier Retrospective: **"Richness = vocabulary fluency, not creative freedom."**

The Gas Town page has flat typography, uniform backgrounds, and minimal visual variety. The enrichment list adds DETECTION of these problems (experiential pass, WCAG gate, font size gate) and PREVENTION of some (builder recipe steps for borders, colors, trailing void). But it does not address the root cause: **the builder lacks visual vocabulary.**

MUST-25 (Builder Gets Nothing From Phase 3) correctly identifies this but proposes artifacts that don't exist yet (annotated 4/4 example page, visual cheat sheet). The checklist treats this as a future-wave item. But if the builder's visual vocabulary is the bottleneck, then:
- All 9 BLOCKING enrichments improve detection/prevention of symptoms
- Zero enrichments expand the builder's design repertoire
- The most effective single intervention (per MEMORY.md) is "Opus builder instead of Sonnet builder" — MUST-23 identifies this but as an experiment, not an enrichment

**Assessment:** The checklist correctly catalogs this as a gap (MUST-25, MUST-23) but underweights it. If builder vocabulary poverty is the root cause, then the entire enrichment wave addresses symptoms. The checklist should elevate MUST-25 and MUST-23 above MUST-03 (WCAG gate) and MUST-08 (circuit breaker) in priority.

### Root Cause the checklist DOES NOT address: Specification Volume Inversely Correlates with Quality

Section 8H documents ADV-08a: "100 lines -> PA-05 4/4; 610 lines -> 3.5/4; 3,600 lines -> 3/4; 963 lines -> 1.5/4." The checklist proposes adding ~227 lines to an already over-specified pipeline.

MUST-19 (Frame A awareness) and MUST-21/MUST-22 (complexity constraints) acknowledge this but do not resolve it. The checklist is aware of the paradox — it documents it extensively — but proceeds to add specification anyway. The 240-line budget is a guardrail but not a resolution.

**Assessment:** The checklist is honest about this tension but does not take a position. It should state explicitly: "If specification volume inversely correlates with quality, then the correct implementation is SUBTRACT ONLY (Wave 0) + EXPERIMENTS (MUST-18, MUST-20, MUST-23), with enrichment implementation CONDITIONAL on experiment results." Currently, the waves proceed regardless of experiment outcomes.

### Root Cause the checklist DOES address well: DPR/Screenshot Corruption

The screenshot corruption cascade (DPR bug -> blank screenshots -> void-dominated PA -> low PA-05) is thoroughly addressed by ME-006 (screenshot validation) + ME-007 (GR-44 fix) + ME-001 (experiential pass as backup). MUST-20 (DPR-fix-only null hypothesis) correctly identifies that fixing JUST this cascade might solve 80% of the problem for $10. This is the checklist's strongest root-cause analysis.

---

## 6. FORMAT/CLARITY

### Judgment Language Found (Items Using Non-Binary Specifications)

**MUST-02 (ME-002):** "Is there ANY finding a reader CANNOT READ or CANNOT USE?" — This is actually binary despite sounding subjective. The binary trigger is correct. No issue.

**MUST-05 (ME-005):** "MECHANICAL (<=5 CSS lines, no HTML structural change, no design decision)" — "no design decision" is judgment language. What constitutes a "design decision"? Changing `font-size: 14px` to `font-size: 16px` — is that a design decision or a mechanical fix? The <=5 CSS lines criterion is binary; the "no design decision" criterion is not.
- **Recommendation:** Replace "no design decision" with a binary proxy: "change affects only property VALUES, not property NAMES or HTML structure."

**MUST-06 (ME-006):** ">2 consecutive blank" and ">20% blank total" — Binary thresholds, clear.

**MUST-17 (Detection-to-Fix Gap):** "What EXACTLY does the receiving agent get?" — This is an open question, not a specification. Correctly identified as unresolved. Not a format issue.

**ME-020 (Orchestrator Self-Assessment):** "Was COMPOSED mode correct?" — Judgment question assigned to the orchestrator. The checklist correctly notes "Weaver CAN use judgment verbs (weaver IS the judgment agent)" but ME-020 asks the ORCHESTRATOR for judgment, not the Weaver. Orchestrator instructions should be binary.
- **Recommendation:** Replace judgment question with binary check: "Does Weaver's tier assessment match the mode you selected? If mismatch: document."

### Ambiguous Items

**MUST-12 (Builder Signal Mechanism):** Proposes `<!-- SCROLL-REVEALS: true -->` HTML comment but does not define what happens when the comment is ABSENT and the page DOES use scroll reveals (builder forgot to add comment). Is absence of comment = no reveals (default) or absence of comment = unknown?
- **Recommendation:** Define default: "Absence of SCROLL-REVEALS comment = page does NOT use scroll reveals. Blank screenshots are DPR bugs."

### Items that are WELL-WRITTEN (clear binary specs)

- MUST-01: "Before answering your assigned questions, spend 2 minutes describing your first impression of the page." — Crystal clear, observation verbs, no judgment.
- MUST-04: Recipe verb requirements explicitly listed with BAD/GOOD examples.
- MUST-07: "find last visible element via getBoundingClientRect(), compare bottom to scrollHeight, fail if gap >300px" — Exact algorithm.
- MUST-13: Subtraction target is specific (GR-33 through GR-42 + GR-08).
- All Section 6 formatting rules: Exemplary. BAD/GOOD tables, exact regex patterns, concrete thresholds.

---

## 7. SECTION 8 COMPLETENESS

Section 8 is the most honest part of the checklist. It catalogs 134 distinct gap items across 15 categories with 12% coverage by the 8-change plan. Specific strengths:

1. **8A (18 MISSING findings):** Every gap has source, severity, and proposed fix. Honest about 0% plan coverage.
2. **8B (Zone 4 monotony):** Correctly identifies a cross-run pattern with no enrichment.
3. **8H (Paradigm questions):** Correctly identifies 9 questions that have no spec fix. Does not pretend the pipeline can solve everything.
4. **8K (Merge losses):** Documents exactly what was lost in deduplication. Traceable to source files.
5. **8N (Adversarial attacks):** Preserves all 8 attacks with honest "Addressed?" column.
6. **8O (Statistics):** Clean summary table.

### What Section 8 MISSES

**Missing gap: The checklist itself as an artifact**
- The checklist is 4,268 lines. It adds to the meta-to-output ratio. MUST-21 says "pipeline typically requires 2-3 sessions due to context exhaustion" — this checklist would consume an entire context window on its own. No implementer will read all 4,268 lines.
- Section 8 should contain a self-referential gap: "This checklist at 4,268 lines exceeds the context capacity of the agents that would implement it. The per-file surgery approach (MUST-15) is the mitigation."

**Missing gap: Validation of the MUST tier itself**
- No gap item asks: "Are the 25 MUST items actually the right 25?" The checklist inherits its priority ordering from the source audits without independent validation. The deduplication (ME-009 in MUST and SHOULD, ME-032/033/034 in SHOULD and COULD) suggests the tier assignments were mechanical (highest severity from any source wins) rather than holistically assessed.

---

## 8. SPECIFIC RECOMMENDATIONS

### Structural Changes

1. **Split Section 1 into three sub-sections:**
   - 1A: BLOCKING ENRICHMENTS (MUST-01 through MUST-09) — things to BUILD
   - 1B: BLOCKING PREREQUISITES (MUST-10 through MUST-16) — things to RESOLVE before building
   - 1C: BLOCKING DECISIONS (MUST-17 through MUST-25) — experiments and process choices

2. **Remove duplicates:**
   - Delete MUST-24 (duplicate of MUST-03)
   - Remove ME-009 from MUST-09 (it is already in TIER 2D)
   - Remove ME-032, ME-033, ME-034 from Section 3 (they are already in TIER 2D)
   - Remove ME-042, ME-045, ME-046 from Section 3 (they are already in TIER 2C)

3. **Add "Section 0: DECISIONS REQUIRED BEFORE IMPLEMENTATION"** containing MUST-18 (content experiment), MUST-20 (DPR null hypothesis), MUST-23 (builder model experiment), and MUST-17 (detection-to-fix gap). These are decision gates, not implementation items.

### Priority Changes

| Item | Current | Recommended | Reason |
|------|---------|-------------|--------|
| MUST-08 (ME-008) | MUST | SHOULD | Duplicates ME-002 intent |
| MUST-09 (ME-009) | MUST | SHOULD (already there) | Aggregation is useful, not blocking |
| MUST-10 (ADV-1A-4) | MUST | SHOULD | Optimization, not prerequisite |
| MUST-24 (FRESH-2-2) | MUST | DELETE | Duplicate of MUST-03 |
| ME-046 (screenshot recovery) | SHOULD | MUST (bundle with ME-006) | Detection without recovery is incomplete |
| ME-035 + ME-036 | COULD | Bundle with Wave 3 (no tier needed) | +2 lines, virtually free |

### Actionability Improvements

| Item | Issue | Fix |
|------|-------|-----|
| MUST-03 (ME-003) | Implementation code in external file | Inline the implementation sketch or mark "REQUIRES DISCOVERY" |
| MUST-05 (ME-005) | 7 locations, no exact text provided | Provide exact replacement text for all 7 locations |
| MUST-05 (ME-005) | "no design decision" is judgment language | Replace with "change affects only property VALUES, not property NAMES or HTML structure" |
| MUST-06 (ME-006) | Threshold evidence missing (why >2 blank, why >20%) | Add evidence basis or mark as calibration values |
| MUST-12 (Builder signal) | Default behavior when comment absent is undefined | State default: "absent = no scroll reveals" |
| ME-020 | Judgment question for orchestrator | Replace with binary check |

### Budget Math Fixes

1. Reconcile 170 vs 150 vs 60 line subtraction estimates (Section 4.8 vs MUST-13 vs ADV-07a TIER 2F).
2. Explicitly state relationship between "8-change plan" and Wave 1-5 implementation plan.
3. Wave 1 total should show which items are in the 8-change plan and which are additions.

---

## 9. THE DEEPEST QUESTION

The checklist documents everything meticulously. But it does not answer the question it should answer first:

**"Given that specification volume inversely correlates with quality (N=4), and that this checklist proposes adding ~227 net lines of specification, what is the EVIDENCE that these specific 227 lines will improve quality rather than degrade it?"**

The checklist's implicit answer is: "These are the RIGHT lines — they address real bugs (GR-44), add missing capabilities (experiential pass), and fix false positives (GR-05 split)." This is the same argument every previous enrichment wave made (per MUST-19/META-1-1).

The honest answer — which the checklist nearly reaches in MUST-18/MUST-20/MUST-23 but doesn't commit to — is: **"We don't know. We should run experiments first."**

The checklist should lead with this uncertainty rather than burying it at MUST-18/MUST-20/MUST-23. The structural recommendation is:

> **Implementation should be CONDITIONAL on experiment results.**
> Phase 0: Run DPR-fix-only experiment ($10, 2 hours).
> Phase 0b: If PA-05 < 3.0 after DPR fix, run Opus-builder experiment ($15, 2 hours).
> Phase 1: If both experiments show quality gap persists, proceed with Wave 0-5.
> Phase 1-alt: If either experiment shows PA-05 >= 3.5, the enrichment wave is unnecessary.

This reframing makes the checklist a CONDITIONAL plan rather than an unconditional one, which is more intellectually honest about the N=1 evidence base.

---

## 10. ADDENDUM: THREE ROOT ISSUES ALIGNMENT

After receiving clarification on the user's three root issues, this section re-evaluates EVERY MUST item against them. An item belongs in MUST only if it directly addresses at least one of these three root issues. Items that address none should be downgraded or removed.

### The Three Root Issues

| # | Root Issue | Core Problem |
|---|-----------|-------------|
| RI-1 | **Priority Inversion** | Pipeline flags invisible CSS violations as REQUIRED while legibility has NO gate. Illegible chart ranked Fix #5 behind font stack cleanup. Builder self-eval has zero legibility questions. |
| RI-2 | **Spec Files Bloated/Broken** | 31 gates for CSS values, zero gates for usability. False-positive gates (GR-05 sub-perceptual tints, GR-06 never-rendered fonts, GR-07 html defaults) create noise that obscures real problems. Sub-perceptual thresholds waste REBUILD cycles. |
| RI-3 | **Anti-Loss Mechanisms Not Working** | 25 anti-loss mechanisms exist but aren't being properly applied or preserved in the spec files. |

### MUST-by-MUST Root Issue Alignment

| Item | RI-1 Priority Inversion | RI-2 Spec Bloat/Broken | RI-3 Anti-Loss | Verdict |
|------|------------------------|----------------------|----------------|---------|
| **MUST-01** (ME-001) Experiential Pass | **DIRECT** — forces auditors to notice illegibility BEFORE analytical questions bury it | -- | -- | **KEEP MUST** |
| **MUST-02** (ME-002) Usability Priority Override | **DIRECT** — "Is there anything a reader CANNOT READ?" = Fix #1 overrides the Weaver's current broken ordering that ranked illegible chart Fix #5 | -- | -- | **KEEP MUST** |
| **MUST-03** (ME-003) WCAG Contrast Gate | **DIRECT** — adds the legibility gate that doesn't exist. "31 gates for CSS values, zero for usability" — this IS the usability gate | **DIRECT** — fills the zero-gates-for-usability gap | -- | **KEEP MUST** (but preconditions are severe) |
| **MUST-04** (ME-004) Builder Legibility Self-Check | **DIRECT** — "Builder answers 7 self-eval questions, not one asks 'can you read everything?'" — this adds that question | -- | -- | **KEEP MUST** |
| **MUST-05** (ME-005) MECHANICAL Verdict Exception | **PARTIAL** — reduces unnecessary REBUILD cycles triggered by mechanical CSS fixes, freeing capacity for real problems | **PARTIAL** — reduces REBUILD cycles caused by sub-perceptual threshold violations | -- | **KEEP MUST** (but weaker alignment than MUST-01/03/04) |
| **MUST-06** (ME-006) Screenshot Validation | **INDIRECT** — fixes DPR corruption that makes the ENTIRE PA unreliable, which contributes to priority inversion (void-dominated PA can't detect real problems) | -- | -- | **KEEP MUST** (infrastructure, not directly RI-1) |
| **MUST-07** (ME-007) GR-44 Trailing Void Fix | -- | **DIRECT** — fixes a broken gate (false negative) | -- | **KEEP MUST** |
| **MUST-08** (ME-008) Usability Circuit Breaker | **INDIRECT** — another mechanism for surfacing usability findings, but duplicates MUST-02's intent | -- | -- | **DOWNGRADE to SHOULD** — redundant with MUST-02 |
| **MUST-09** (ME-009) Aggregation Thresholds | **INDIRECT** — helps Weaver process experiential data, but the priority inversion is in the Weaver's ordering, not in data aggregation | -- | -- | **DOWNGRADE to SHOULD** — useful but not root-cause |
| **MUST-10** (ADV-1A-4) 3-Auditor Optimization | -- | -- | -- | **DOWNGRADE to SHOULD** — cost optimization, addresses NONE of the 3 root issues |
| **MUST-11** (ADV-1B-7) WCAG Palette Conflict | Prerequisite for MUST-03 | Prerequisite for MUST-03 | -- | **KEEP MUST** (but only as prerequisite for MUST-03) |
| **MUST-12** (ADV-1C-3) Builder Signal for Screenshots | Prerequisite for MUST-06 | -- | -- | **KEEP as prerequisite**, but only if MUST-06 is kept |
| **MUST-13** (ADV-07a) Gate-Runner Subtraction | -- | **DIRECT** — the SINGLE MOST IMPORTANT item for RI-2. Removing false-positive gates (GR-05 sub-perceptual, GR-07 browser defaults) directly reduces noise that obscures real problems. Creates capacity for usability gates. | -- | **KEEP MUST — should be MUST-01 in priority** |
| **MUST-14** (ADV-2-1) Gate Naming Map | -- | **PREREQUISITE** — can't fix broken gates without knowing which gates to fix | -- | **KEEP MUST** (prerequisite) |
| **MUST-15** (ADV-5-3) Per-File Agent Architecture | -- | -- | **DIRECT** — ensures anti-loss mechanisms are preserved during implementation by limiting each agent's scope | **KEEP MUST** |
| **MUST-16** (ADV-06a) Subtraction-First Ordering | -- | **DIRECT** — enforces "subtract before add" which is the core RI-2 remedy | -- | **KEEP MUST** |
| **MUST-17** (META-2A-3) Detection-to-Fix Gap | **INDIRECT** — even with correct priority, detection without a fix mechanism doesn't solve the problem | -- | -- | **DOWNGRADE to OPEN QUESTION** — correctly identified but has no proposed solution; it's an architectural gap, not an action item |
| **MUST-18** (ADV-FINAL-2) Content Experiment | -- | -- | -- | **MOVE to Section 0** — important decision gate but addresses none of the 3 root issues directly. Validates whether enrichments are needed, doesn't fix anything. |
| **MUST-19** (META-1-1) Frame A Awareness | -- | **INDIRECT** — awareness of "we're adding when we should subtract" is relevant to RI-2 but it's meta-awareness, not action | -- | **MOVE to Section 0** — awareness constraint, not implementable item |
| **MUST-20** (META-5-5) DPR Null Hypothesis | -- | -- | -- | **MOVE to Section 0** — experiment, not implementation. Same rationale as MUST-18. |
| **MUST-21** (FRESH-5-1) Complexity Exceeds Capacity | -- | **INDIRECT** — acknowledges RI-2 exists but proposes no fix | -- | **MOVE to Section 0** — constraint acknowledgment, not action |
| **MUST-22** (ADV-01/02) Capacity Budget 240 Lines | -- | **DIRECT** — enforces the line budget that prevents further spec bloat | -- | **KEEP MUST** (guardrail for RI-2) |
| **MUST-23** (ADV-7C) Builder Model Experiment | -- | -- | -- | **MOVE to Section 0** — experiment, not implementation |
| **MUST-24** (FRESH-2-2) ME-003 as Glaring Omission | Same as MUST-03 | Same as MUST-03 | -- | **DELETE** — duplicate of MUST-03 |
| **MUST-25** (FRESH-6-1) Builder Gets Nothing | **INDIRECT** — builder vocabulary poverty contributes to low quality, but this item proposes artifacts that don't exist yet | -- | -- | **KEEP MUST** but reframe: the root issue is that every Phase 3 artifact is for pipeline DESIGNERS, none for the agent writing HTML. Directly relevant to RI-1 because the builder can't fix what it doesn't know how to build. |

### Root Issue Coverage Summary

| Root Issue | MUST Items That DIRECTLY Address It | MUST Items That INDIRECTLY/NOT Address It |
|-----------|-------------------------------------|------------------------------------------|
| **RI-1: Priority Inversion** | MUST-01, MUST-02, MUST-03, MUST-04 (4 items) | MUST-05 (partial), MUST-06 (indirect), MUST-25 (indirect) |
| **RI-2: Spec Bloat/Broken** | **MUST-13** (gate subtraction), MUST-07 (GR-44 fix), MUST-16 (subtract-first), MUST-22 (budget cap) | MUST-03 (fills usability gap), MUST-05 (partial) |
| **RI-3: Anti-Loss Not Working** | MUST-15 (per-file architecture) | -- (ONLY 1 ITEM!) |

### CRITICAL FINDING: Root Issue 3 Has Almost Zero Coverage

Of 25 MUST items, only MUST-15 (per-file agent architecture) directly addresses RI-3 (anti-loss mechanisms not working). The checklist has an entire Section 7 (Anti-Loss Verification, 556 lines) documenting all 25 mechanisms, but NO MUST item says "audit mechanism X, find where it's broken, fix it."

The anti-loss mechanisms are documented as verification checks — things to verify AFTER implementation. But RI-3 says they aren't working NOW, in the CURRENT spec files. The checklist treats anti-loss as a post-implementation concern when the user says it's a pre-existing problem.

**What's missing:** A MUST item that says "Audit each of the 8 HIGH RISK anti-loss mechanisms (M-04, M-06, M-11, M-12, M-13, M-19, M-20, M-22) in the CURRENT spec files. For each, verify the mechanism is correctly implemented. Fix any that are broken BEFORE adding new content."

This is arguably more important than any enrichment. If the anti-loss mechanisms are broken, new enrichments will be corrupted by the same broken mechanisms.

### Recommended Revised MUST Tier (Reordered by Root Issue Priority)

**Section 0: EXPERIMENTS AND DECISIONS (run BEFORE any implementation)**
- MUST-18 (content experiment)
- MUST-20 (DPR null hypothesis)
- MUST-23 (builder model experiment)
- MUST-17 (detection-to-fix gap — open question)
- MUST-19 (Frame A awareness)
- MUST-21 (complexity exceeds capacity)

**Section 1A: RI-2 — FIX BROKEN SPECS (do FIRST)**
- MUST-13 (gate-runner subtraction) — THE #1 priority
- MUST-14 (gate naming map) — prerequisite for MUST-13
- MUST-16 (subtraction-first ordering)
- MUST-22 (240-line capacity budget)
- MUST-07 (GR-44 false negative fix)
- **NEW:** Anti-loss mechanism audit of current spec files

**Section 1B: RI-1 — FIX PRIORITY INVERSION**
- MUST-03 + MUST-11 (WCAG contrast gate + palette resolution) — adds the missing legibility gate
- MUST-01 (experiential pass) — fixes auditor priority ordering
- MUST-02 (usability priority override) — fixes Weaver priority ordering
- MUST-04 (builder legibility self-check) — fixes builder self-eval gap
- MUST-25 (builder-facing artifacts) — gives builder the vocabulary to fix problems

**Section 1C: INFRASTRUCTURE (supports both RI-1 and RI-2)**
- MUST-05 (MECHANICAL exception) — reduces false REBUILD cycles
- MUST-06 + MUST-12 (screenshot validation + builder signal)
- MUST-15 (per-file agent architecture)

**Removed from MUST:**
- MUST-08 (circuit breaker) — redundant with MUST-02, downgrade to SHOULD
- MUST-09 (aggregation thresholds) — useful but not root-cause, downgrade to SHOULD
- MUST-10 (3-auditor optimization) — cost optimization, downgrade to SHOULD
- MUST-24 — deleted (duplicate of MUST-03)

This reordering puts SUBTRACTION and BROKEN GATE FIXES first (RI-2), PRIORITY INVERSION fixes second (RI-1), and adds the MISSING anti-loss audit (RI-3). It reduces 25 items to 18, with 4 moved to Section 0 (experiments) and 3 downgraded/deleted.

---

## 11. FINAL ASSESSMENT

The checklist is a remarkable synthesis artifact — possibly the most thorough implementation plan I've seen for a pipeline enrichment wave. Its strengths are real: surgery-grade precision in Sections 2-3, comprehensive anti-loss documentation in Section 7, and brutally honest gap accounting in Section 8.

But it has a fundamental misalignment with the user's stated root issues:

1. **RI-2 (spec bloat) is buried.** Gate-runner subtraction (MUST-13) — the single most important fix for broken specs — is item 13 of 25, not item 1. The checklist's ordering follows the source audits' severity ratings rather than root-issue priority.

2. **RI-3 (anti-loss not working) is essentially unaddressed.** One item (MUST-15) out of 25. The checklist documents anti-loss mechanisms extensively but proposes no fix for the fact that they aren't currently working.

3. **RI-1 (priority inversion) is well-addressed** by MUST-01, MUST-02, MUST-03, MUST-04. These are the checklist's strongest items.

The corrective is structural reordering, not content changes. The items are mostly right; the priority sequence is wrong. Fix broken specs first (RI-2), then fix priority inversion (RI-1), then verify anti-loss mechanisms are actually functioning (RI-3). The current ordering mixes all three without acknowledging which root issue each item serves.

---

*Review complete. 4,268 lines read in full. Addendum adds root-issue alignment for all 25 MUST items. Critical finding: RI-3 (anti-loss not working) has near-zero MUST coverage despite being one of three equal-weight root issues. Recommended: reorder MUST tier by root issue, add anti-loss audit item, move 4 experiments to Section 0, downgrade 3 items, delete 1 duplicate.*
