# PRIORITY AUDIT — Master Implementation Checklist (File 22)

**Date:** 2026-02-25
**Auditor:** Priority Auditor (Opus)
**File audited:** `22-MASTER-IMPLEMENTATION-CHECKLIST.md` (4,269 lines)
**Method:** Read complete file. Assessed every MUST item against stated criteria. Scanned SHOULD tier for promotions. Verified implementation order dependencies. Summed budget lines. Identified items solving wrong problem.

---

## FINDING 0: ROOT ISSUE ALIGNMENT — THE DECISIVE LENS

The user has defined three root issues. Every tier assignment should be evaluated against these:

**ROOT ISSUE 1: Priority Inversion** — The pipeline treats CSS property compliance as highest-severity and human readability as secondary. GR-05/06/07 flag invisible CSS as REQUIRED (triggers REBUILD). No gate checks "can the output be used?" Weaver ranked illegible chart as Fix #5 below invisible CSS violations.

**ROOT ISSUE 2: Spec File Cruft** — 401 false violations per gate run (207 GR-05 + 181 GR-06 + 13 GR-14). No subtraction protocol. Sub-perceptual thresholds treated as REQUIRED.

**ROOT ISSUE 3: Anti-Loss Mechanism Protection** — 25 mechanisms need proper application and preservation during implementation.

### How This Changes the Priority Map

When evaluated against root issues, a clear priority stack emerges:

**RANK 1 (Directly Fix Priority Inversion):**
- ME-001 (experiential pass) -- adds "can the output be used?" detection
- ME-002 (weaver priority override) -- fixes Fix #5 ranking of illegibility
- ME-004 (builder Q0 self-check) -- adds "can you read everything?" to builder
- ME-007 (GR-44 fix) -- fixes false negative that masked trailing void
- ME-010 (GR-05 split) -- **currently SHOULD, should be MUST** -- downgrades sub-perceptual CSS from REQUIRED, directly fixes the inversion
- ME-011 (GR-06 fix) -- **currently SHOULD, should be MUST** -- stops 181 false REQUIRED violations from invisible fonts
- ME-012 (GR-14 fix) -- **currently SHOULD, should be MUST** -- stops 13 false structural violations

**RANK 2 (Enable Priority Inversion Fixes):**
- MUST-13 (gate subtraction) -- prerequisite for gate changes
- MUST-14 (naming map) -- prerequisite for knowing which gates to change
- ME-005 (MECHANICAL exception) -- prevents over-REBUILD on fixable CSS issues
- ME-006 (screenshot validation) -- prevents DPR corruption from contaminating PA
- ME-008 (usability circuit breaker) -- ensures usability findings override CSS findings
- ME-009 (experiential aggregation) -- structures the output ME-001 produces

**RANK 3 (Important but didn't cause the B+ rating):**
- ME-003 (WCAG gate) -- BLOCKED by unresolved palette conflict; correct enrichment but unactionable now
- MUST-25 (builder artifacts) -- valid insight but page scored 3/4 without it

**NOT RANKED (Meta-observations, experiments, process constraints):**
- MUST-17 through MUST-23 -- these are about the ANALYSIS PROCESS, not the pipeline's root issues
- MUST-10 (3-auditor optimization) -- optimization of a fix, not a fix itself
- MUST-24 (duplicate of MUST-03)

The GR-05/GR-06/GR-07 downgrades (ME-010, ME-011, and the GR-07 portion already in ME-010's consolidation) are the single most direct fix for Root Issue 1. They are currently in the SHOULD tier. This is the most consequential tier misassignment in the entire checklist -- the items that most directly fix the root cause of the priority inversion are ranked below meta-observations about the enrichment process.

---

## EXECUTIVE SUMMARY

The checklist has **serious tier misassignment problems**. Of 25 MUST items, only 11-13 meet the stated MUST criteria ("Blocks quality, creates cross-file conflict, breaks anti-loss mechanisms, or is a BLOCKING prerequisite if skipped"). The remaining 12-14 are a mix of:
- **Meta-observations** (useful insights, not implementable spec changes)
- **Experiments** (proposed tests, not spec changes)
- **Process constraints** (implementation methodology, not deliverables)
- **Duplicate entries** (same item appearing as both a MUST enrichment and a MUST observation)

Meanwhile, the SHOULD tier contains 3 items that demonstrably block quality more than several MUST items.

The 240-line budget math has a **critical error**: the MUST tier summary table claims ~200 lines for Tier 1, but the actual sum of MUST-01 through MUST-09 alone is ~198 lines, and several MUST items from MUST-10 through MUST-25 add lines too (MUST-12: +6-10, MUST-14: +20-30, MUST-25: +50-100). The budget is either blown or the non-enrichment MUST items need to be reclassified as something other than line-consuming spec changes.

---

## FINDING 1: MUST TIER CONTAINS THREE DISTINCT CATEGORIES MASQUERADING AS ONE

The 25 MUST items are actually three different things:

### Category A: Actual Spec Changes That Block Quality (11 items)
These meet the MUST criteria. They are implementable changes to spec files.

| Item | What It Is | Verdict |
|------|-----------|---------|
| MUST-01 (ME-001) | Experiential pass protocol | **CORRECT TIER** |
| MUST-02 (ME-002) | Usability priority override | **CORRECT TIER** |
| MUST-03 (ME-003) | WCAG contrast gate | **CORRECT TIER** but has so many unresolved preconditions it is BLOCKED, not actionable |
| MUST-04 (ME-004) | Builder legibility self-check | **CORRECT TIER** |
| MUST-05 (ME-005) | MECHANICAL verdict exception | **CORRECT TIER** |
| MUST-06 (ME-006) | Screenshot validation gate | **CORRECT TIER** |
| MUST-07 (ME-007) | GR-44 trailing void fix | **CORRECT TIER** |
| MUST-08 (ME-008) | Usability circuit breaker | **CORRECT TIER** |
| MUST-09 (ME-009) | Experiential aggregation thresholds | **CORRECT TIER** |
| MUST-13 (ADV-07a) | Gate-runner subtraction | **CORRECT TIER** (prerequisite) |
| MUST-14 (ADV-2-1) | Gate naming map | **CORRECT TIER** (prerequisite) |

### Category B: Meta-Observations / Process Constraints (10 items)
These are insights about HOW to implement, not WHAT to implement. They don't produce spec file changes and shouldn't consume lines from the 240-line budget.

| Item | What It Actually Is | Current Tier | Recommended |
|------|-------------------|-------------|-------------|
| MUST-10 (ADV-1A-4) | Optimization of ME-001 (3 auditors not 9) | MUST | **SHOULD** -- optimization, not blocker |
| MUST-15 (ADV-5-3) | Per-file agent architecture | MUST | **PRE-REQ (process)** -- not a spec change |
| MUST-16 (ADV-06a) | Subtraction-first ordering | MUST | **PRE-REQ (process)** -- implementation ordering constraint |
| MUST-17 (META-2A-3) | Detection-to-fix pipeline gap | MUST | **UNRESOLVED ARCHITECTURAL QUESTION** -- not actionable as spec change |
| MUST-19 (META-1-1) | Frame A vs Frame C awareness | MUST | **META-AWARENESS** -- literally says "not a spec change" in its own description |
| MUST-21 (FRESH-5-1) | Pipeline complexity exceeds capacity | MUST | **META-AWARENESS** -- constraining observation, not an action |
| MUST-22 (ADV-01/02) | Capacity budget 240 lines | MUST | **BUDGET CONSTRAINT** -- belongs in Section 4 (Pre-Implementation Requirements), not Section 1 |
| MUST-24 (FRESH-2-2) | ME-003 as glaring omission | MUST | **DUPLICATE** of MUST-03. Same item, different framing. |
| MUST-25 (FRESH-6-1) | Builder-facing artifacts | MUST | **SHOULD** -- important but does not block quality in the strict criteria sense; page scored 3/4 without it |
| MUST-12 (ADV-1C-3) | Builder signal mechanism | MUST | **SHOULD** -- sub-component of ME-006, not independently blocking |

### Category C: Proposed Experiments (4 items)
These propose running experiments, not making spec changes.

| Item | What It Actually Is | Current Tier | Recommended |
|------|-------------------|-------------|-------------|
| MUST-18 (ADV-FINAL-2) | Content experiment before implementation | MUST | **PRE-REQ (experiment)** -- not a spec change |
| MUST-20 (META-5-5) | DPR-fix-only null hypothesis | MUST | **PRE-REQ (experiment)** -- not a spec change |
| MUST-23 (ADV-7C) | Builder model (Opus vs Sonnet) experiment | MUST | **PRE-REQ (experiment)** -- not a spec change |
| MUST-11 (ADV-1B-7) | WCAG palette conflict resolution | MUST | **PRE-REQ (decision)** -- a decision prerequisite for ME-003, not an independent spec change |

---

## FINDING 2: MUST-24 IS A PURE DUPLICATE OF MUST-03

MUST-24 (FRESH-2-2 / FRESH-4-2 -- "ME-003 As Glaring Omission") says:
- **Where:** "Same as MUST-03 (ME-003)"
- **How:** "Same as MUST-03"
- **Budget impact:** "Same as MUST-03 (+70 lines)"
- **Pre-conditions:** "Same as MUST-03"
- **Post-verification:** "Same as MUST-03"

This is literally the same enrichment listed twice -- once as MUST-03 (the enrichment itself) and once as MUST-24 (a fresh-eyes opinion that the enrichment should exist). Having an item AND an opinion that the item should exist as separate MUST entries inflates the count by 1 and misleads budget math.

**Recommendation:** DELETE MUST-24 entirely. Fold the fresh-eyes endorsement into MUST-03's source audit files.

---

## FINDING 3: THREE SHOULD ITEMS SHOULD BE PROMOTED TO MUST (ROOT ISSUES 1+2)

These three items are the most direct fixes for Root Issue 1 (priority inversion) and Root Issue 2 (spec file cruft). Their placement in SHOULD tier while meta-observations occupy MUST tier is the single most consequential misassignment in the checklist.

### ME-010 (GR-05 split) -- Currently SHOULD, Should Be MUST

**Root Issue 1 connection:** GR-05 treats sub-perceptual CSS (4% opacity, 20 RGB tints) as REQUIRED identity violations. This IS the priority inversion -- invisible CSS properties triggering REBUILD while human-readable content is secondary. Splitting GR-05 into REQUIRED (visible) and ADVISORY (sub-perceptual) directly inverts the inversion.

**Root Issue 2 connection:** 207 false violations per run. Largest single source of gate noise.

**Evidence:** 207 false violations per gate run. Sub-perceptual tints at ~20 RGB points and 4% opacity trigger REQUIRED failures. This directly "blocks quality" by creating so much false-positive noise that real failures are buried. The File 14 surgery plan treats it as the LARGEST single gate operation. It frees +32 lines that MUST-13 (gate-runner subtraction) needs.

**Why it meets MUST criteria:** "Creates cross-file conflict" -- GR-05 false positives generate REQUIRED identity failures that feed into the verdict logic. If the builder produces a warm page with one sub-perceptual tint, the verdict is REBUILD. This blocks quality by forcing unnecessary rebuilds.

**Why it's listed as SHOULD:** The master enrichment list rated it SIGNIFICANT, not BLOCKING. But the File 14 surgery plan treats it as the first and most important consolidation (GS-01A). The discrepancy between the enrichment list severity and the surgery plan priority was never reconciled.

### ME-012 (GR-14 fix) -- Currently SHOULD, Should Be MUST

**Root Issue 2 connection:** 13 false positives per run from a measurement BUG (not a threshold issue). Nested section containers measured against sibling zones. Pure spec file cruft.

**Evidence:** 13 false positives per gate run from nested section containers. GR-14 measures gaps between nested sub-elements across zones instead of zone-level siblings. This is a BUG, not a threshold adjustment.

**Why it meets MUST criteria:** "Breaks anti-loss mechanisms" -- false positives in a REQUIRED gate erode trust in the gate system. When operators see 13 false structural gap violations, they learn to ignore structural gap findings, including real ones.

### ME-011 (GR-06 fix) -- Currently SHOULD, Borderline MUST

**Root Issue 1 connection:** GR-06 flags never-rendered fallback fonts as REQUIRED identity violations. The browser loads Inter; GR-06 reports 181 REQUIRED failures from the Georgia/serif fallback that never displays. This is the same pattern as GR-05 -- invisible CSS properties triggering REQUIRED severity while legibility gets one auditor out of nine.

**Root Issue 2 connection:** 181 false violations per run. Second largest source of gate noise after GR-05.

**Evidence:** 181 false font violations from never-rendered fallback fonts. Document.fonts.ready is not checked before font verification.

**Why it borderline meets MUST criteria:** Same logic as ME-010 and ME-012 -- 181 false violations per run creates noise that drowns real findings. However, these are font violations (less quality-critical than palette or structural gap issues), so this is the weakest of the three promotion cases.

**Combined impact of these three:** ME-010 + ME-012 + ME-011 = 207 + 13 + 181 = **401 false violations per gate run** that are NOT in the 8-change plan. These false violations create a noise floor that makes it harder to see whether the 8-change plan's improvements actually work. If the 8-change plan is implemented but gates still show 400+ false violations, the signal-to-noise ratio may be too low for meaningful measurement.

---

## FINDING 4: BUDGET MATH IS INCONSISTENT

### Stated Budget
The file claims:
- 240-line total capacity budget
- ~115 lines consumed by 8-change plan
- ~200 lines consumed by MUST tier

### Actual Budget (summing from MUST items)

**Category A items with line counts:**

| Item | Lines | Target |
|------|-------|--------|
| MUST-01 (ME-001) | +22 | pa-deployment.md |
| MUST-02 (ME-002) | +14 | pa-weaver.md |
| MUST-03 (ME-003) | +70 | gate-runner-core.js (net-zero required) |
| MUST-04 (ME-004) | +12 | artifact-builder-recipe.md |
| MUST-05 (ME-005) | +12 across 3 files | MANIFEST + gate-manifest + gate-runner |
| MUST-06 (ME-006) | +27 across 2 files | pa-deployment + orchestrator |
| MUST-07 (ME-007) | +10 net-zero | gate-runner-core.js |
| MUST-08 (ME-008) | +8 | MANIFEST.md |
| MUST-09 (ME-009) | +23 across 2 files | pa-deployment + pa-weaver |
| MUST-13 (ADV-07a) | -150 | gate-runner-core.js |
| MUST-14 (ADV-2-1) | +20-30 | new mapping table |
| **Subtotal** | **+68 to +78 net** | (after -150 subtraction) |

This subtotal is misleading because:
1. The -150 from MUST-13 is consumed by MUST-03 (+70) and MUST-07 (+10), leaving only 70 freed
2. MUST-14's +20-30 mapping table is informational, not a spec file change
3. Several Category B items also claim line impacts: MUST-12 (+6-10), MUST-25 (+50-100)

**Actual net if ALL 25 MUST items were implemented:**
- Spec changes (Category A): +198 lines before subtraction, +48 after MUST-13
- Category B/C items with lines: MUST-12 (+6-10), MUST-25 (+50-100) = +56 to +110 additional
- **Grand total: +104 to +158 net lines**

This is within the 240-line budget, BUT only if MUST-13 subtraction actually yields -150 lines. The file itself notes (MUST-13 entry, also TIER 2F ADV-07a) that the -150 figure was wrong -- actual subtraction per File 14 surgery is -60, not -150. If we use -60:

- Revised net: +198 - 60 + 56 to 110 = **+194 to +248 lines**

At the upper end, this exceeds the 240-line budget.

**Key inconsistency:** The Wave 0 subtraction is listed as -170 lines in Section 5.1, but the MUST-13 entry says -150, and the TIER 2F ADV-07a detailed entry says "Total freed: 60 lines (not 150 as adversarial estimated)." Three different numbers for the same operation.

---

## FINDING 5: IMPLEMENTATION ORDER HAS TWO DEPENDENCY PROBLEMS

### Problem 1: Wave 1 includes ME-008 and ME-009 but they're listed as "NOT in current 8-change plan"

Section 5.2 (Wave 1) includes ME-008 (Step 1.5) and ME-009 (Step 1.6) as Wave 1 items. But both MUST-08 and MUST-09 say "In current 8-change plan? NO." This creates confusion: are they in Wave 1 or not?

The implementation order treats them as Wave 1 (usability priority inversion). The 8-change plan excludes them. These are contradictory scopes. The implementation order should clarify which scope it represents -- the 8-change plan or the full MUST tier.

### Problem 2: ME-005 (MECHANICAL exception) has undefined interaction with ME-008

MUST-05 and MUST-08 both note that their interaction is undefined: "MECHANICAL says REFINE; usability breaker says 'Fix #1.'" The implementation order places both in Wave 1 (Steps 1.5 and 1.7) but does not require the interaction to be defined before implementation. ADV-05c (which defines the interaction) is in TIER 2F, scheduled for Wave 4 Phase F -- AFTER both are implemented.

**Fix:** Move ADV-05c (MECHANICAL + circuit breaker interaction definition) to Wave 1, between Steps 1.5 and 1.7. Or at minimum flag that ME-008 should not be implemented until ADV-05c is resolved.

---

## FINDING 6: ITEMS THAT DON'T ADDRESS ANY ROOT ISSUE

These MUST items are valid observations but they don't fix the priority inversion (Root Issue 1), reduce spec cruft (Root Issue 2), or protect anti-loss mechanisms (Root Issue 3). They are meta-commentary on the enrichment process itself.

### MUST-17 (META-2A-3 -- Detection-to-Fix Pipeline Gap)

**Root Issue test: FAILS.** The priority inversion wasn't caused by a detection-to-fix gap. It was caused by GR-05/06/07 treating invisible CSS as REQUIRED while legibility had no gate at all. Fixing the detection-to-fix gap wouldn't change which things are detected or how they're prioritized -- which is the actual root issue.

This item correctly identifies that the pipeline detects problems but has no mechanism to apply fixes. However, the page scored 3/4 (B+) -- the score wasn't low because fixes weren't applied; it was low because specific visual defects existed. The detection-to-fix gap matters for pages scoring 2/4 or below where REBUILD cycles are triggered. For a B+ page where the verdict is likely SHIP WITH FIXES, the gap is less critical.

**It's a real problem, but it didn't cause the B+ rating.** The B+ rating was caused by (per the analysis): chart legibility issues, DPR screenshot corruption, trailing void, sub-perceptual background deltas, and lack of responsive reorganization. These are builder-side problems, not pipeline-feedback-loop problems.

### MUST-19 (Frame A vs Frame C Awareness)

**Root Issue test: FAILS.** This is a metacognitive observation about the enrichment process itself ("Phase 3 adds 785 lines while Phase 2 found more spec = worse output"). It has zero connection to the priority inversion, the 401 false violations, or the anti-loss mechanisms. It literally says: "Where: Implementation decision framing (not spec change)."

Including meta-observations about the analysis process in the same MUST tier as concrete spec changes like "fix GR-44's measurement algorithm" conflates two entirely different levels of abstraction.

### MUST-21 (Pipeline Complexity Exceeds Capacity)

**Root Issue test: FAILS.** Same pattern as MUST-19. The pipeline's complexity didn't cause the priority inversion -- the priority inversion was caused by specific gate tier assignments (GR-05/06/07 at REQUIRED) and missing detection (no legibility gate). Reducing complexity wouldn't fix the inversion; changing tier assignments would. This is a constraint observation, not a deliverable. It says: "Where: N/A -- architectural awareness constraint." It has no spec change, no target file, no budget impact beyond "constraining."

### MUST-25 (Builder Gets Nothing From Phase 3)

While the insight is valid and important, the Gas Town page scored 3/4 WITHOUT builder-facing artifacts. This means the current pipeline CAN produce B+ quality without this change. The change might push quality higher, but it doesn't "block quality" in the strict sense -- quality was not blocked without it.

Additionally, the pre-condition is damning: "Must decide what constitutes '4/4 example' -- no Flagship-tier page has been produced yet." You cannot create an annotated 4/4 example if no 4/4 example exists. This is a chicken-and-egg blocker that makes the item unimplementable in the current state.

---

## FINDING 7: ME-046 (Screenshot Recovery Protocol) IS UNDER-TIERED

ME-046 is in TIER 2C (SHOULD) and TIER 3D (COULD -- it appears in BOTH tiers, which is itself an error). It adds 3-5 lines to define what to do when ME-006 (which IS in the 8-change plan) detects bad screenshots.

ME-006 without ME-046 = detection without recovery protocol. The checklist itself notes this in Section 8L: "ME-006 without ME-046: Screenshot validation detects bad screenshots. Without recovery protocol, operators don't know what to do when validation fires."

At +3-5 lines and near-zero risk, ME-046 should be bundled with ME-006 as part of the same MUST-06 entry, not listed separately in a lower tier. It's the second half of the same enrichment.

---

## FINDING 8: DUPLICATE ENTRIES ACROSS TIERS

Several items appear in multiple tiers with different descriptions:

| Item | Tier 2 Entry | Tier 3 Entry | Problem |
|------|-------------|-------------|---------|
| ME-009 | TIER 2D (full detail, 35 lines) | Also in MUST-09 | Same item in MUST and SHOULD |
| ME-032 | TIER 2D (full detail) | TIER 3B (summary) | Same item in two SHOULD sub-tiers |
| ME-033 | TIER 2D (full detail) | TIER 3B (summary) | Same item in two SHOULD sub-tiers |
| ME-034 | TIER 2D (full detail) | TIER 3B (summary) | Same item in two SHOULD sub-tiers |
| ME-035 | TIER 2D (full detail) | TIER 3B (summary) | Same item in two SHOULD sub-tiers |
| ME-042 | TIER 2C (full detail) | TIER 3D (summary) | Same item in two SHOULD sub-tiers |
| ME-045 | TIER 2C (full detail) | TIER 3D (summary) | Same item in two SHOULD sub-tiers |
| ME-046 | TIER 2C (full detail) | TIER 3D (summary) | Same item in two SHOULD sub-tiers |
| ME-057 | TIER 2D (full detail) | TIER 3E (summary) | Same item in two SHOULD sub-tiers |
| ADV-07a | MUST-13 (full detail) | TIER 2F (full detail again) | Same item in MUST and SHOULD |

This duplication inflates the apparent item count and creates confusion about which tier an item actually belongs to. The SHOULD tier claims "30 items" but at least 8 of those are duplicates from MUST or from each other.

---

## RECOMMENDED ACTIONS

### 1. Reclassify the MUST Tier

**Keep as MUST (11 items):**
- MUST-01 through MUST-09 (the 9 BLOCKING enrichments)
- MUST-13 (gate-runner subtraction -- prerequisite)
- MUST-14 (gate naming map -- prerequisite)

**Promote to MUST (2-3 items):**
- ME-010 (GR-05 split) -- 207 false violations, highest single gate noise source
- ME-012 (GR-14 fix) -- 13 false structural violations, a clear bug
- ME-011 (GR-06 fix) -- 181 false font violations (borderline, could stay SHOULD)

**Move to new PRE-IMPLEMENTATION DECISIONS section (7 items):**
- MUST-11 (palette decision)
- MUST-15 (per-file architecture)
- MUST-16 (subtraction-first ordering)
- MUST-18 (content experiment)
- MUST-20 (DPR null hypothesis)
- MUST-23 (builder model experiment)
- These are DECISIONS and EXPERIMENTS that inform implementation, not spec changes.

**Move to META-OBSERVATIONS section (5 items):**
- MUST-17 (detection-to-fix gap -- architectural question, not spec change)
- MUST-19 (Frame A awareness)
- MUST-21 (complexity exceeds capacity)
- MUST-22 (capacity budget -- this IS the budget, not a deliverable under the budget)
- MUST-24 (delete -- pure duplicate of MUST-03)

**Demote to SHOULD (2 items):**
- MUST-10 (3-auditor optimization -- optimization, not blocker)
- MUST-25 (builder-facing artifacts -- unimplementable without 4/4 example, didn't block B+ score)
- MUST-12 (builder signal -- sub-component of ME-006, not independently blocking)

### 2. Bundle ME-046 with ME-006

ME-046 (screenshot recovery protocol, +3-5 lines) should be part of MUST-06 (ME-006), not a separate SHOULD/COULD item. Detection without recovery is an incomplete enrichment.

### 3. Resolve Subtraction Budget Inconsistency

Three different numbers appear for the same operation:
- Section 5.1: "-170 lines"
- MUST-13: "-150 lines"
- TIER 2F ADV-07a: "60 lines freed"

Determine the real number and use it consistently. The downstream budget math depends on this.

### 4. Remove Duplicate Entries Across Tiers

Items appearing in both MUST and SHOULD, or in both SHOULD sub-tiers, should appear in exactly one place with a cross-reference. Current approach inflates counts and creates contradictory tier assignments.

### 5. Separate Implementation Order Scope

The implementation order (Section 5) covers MORE items than the 8-change plan but FEWER than the full MUST tier. Its scope should be stated explicitly: "This order covers Waves 0-5: all items from the 8-change plan PLUS all items from the expanded MUST and SHOULD tiers that have complete implementation specs."

### 6. Fix ME-005 / ME-008 Interaction Sequencing

ADV-05c (interaction rule) must be resolved before Wave 1, not deferred to Wave 4. If ME-005 and ME-008 are both in Wave 1, their interaction must be defined in Wave 1.

---

## BUDGET SUMMARY (CORRECTED)

Using the corrected -60 line subtraction (from File 14, the most detailed source):

| Scope | Gross Addition | Subtraction | Net | vs 240 Budget |
|-------|---------------|-------------|-----|--------------|
| 8-change plan only | +115 | 0 | +115 | 125 remaining |
| MUST enrichments only (Category A, 11 items) | +198 | -60 | +138 | 102 remaining |
| MUST + promoted SHOULD (14 items) | +218 | -60 | +158 | 82 remaining |
| Full MUST as currently stated (25 items, Categories A+B+C) | +248-308 | -60 | +188-248 | AT OR OVER LIMIT |

The budget is feasible for the 8-change plan and for the corrected MUST tier (Category A only). It becomes strained if Category B/C items are treated as line-consuming spec changes, which they should not be.

---

## APPENDIX: ITEM-BY-ITEM MUST TIER AUDIT (WITH ROOT ISSUE MAPPING)

| Item | Root Issue | Meets MUST? | Is Spec Change? | Verdict |
|------|-----------|------------|-----------------|---------|
| MUST-01 (ME-001) | **RI-1** (adds legibility detection) | YES | YES | KEEP -- RANK 1 |
| MUST-02 (ME-002) | **RI-1** (fixes weaver fix ordering) | YES | YES | KEEP -- RANK 1 |
| MUST-03 (ME-003) | **RI-1** (adds "can output be used?" gate) | YES but BLOCKED | YES | KEEP but mark BLOCKED |
| MUST-04 (ME-004) | **RI-1** (adds "can you read everything?" to builder) | YES | YES | KEEP -- RANK 1 |
| MUST-05 (ME-005) | **RI-1** (prevents over-REBUILD on CSS fixes) | YES | YES | KEEP -- RANK 2 |
| MUST-06 (ME-006) | **RI-1** (prevents DPR corruption contaminating PA) | YES | YES | KEEP -- RANK 2 |
| MUST-07 (ME-007) | **RI-1** (fixes false negative masking real void) | YES | YES | KEEP -- RANK 1 |
| MUST-08 (ME-008) | **RI-1** (usability overrides CSS findings) | YES | YES | KEEP -- RANK 2 |
| MUST-09 (ME-009) | **RI-1** (structures legibility detection output) | YES | YES | KEEP -- RANK 2 |
| MUST-10 (ADV-1A-4) | None directly | NO | NO (optimization) | DEMOTE to SHOULD |
| MUST-11 (ADV-1B-7) | RI-1 prerequisite (for ME-003) | CONDITIONAL | NO (decision) | MOVE to PRE-REQ |
| MUST-12 (ADV-1C-3) | None directly | NO | NO (sub-component) | DEMOTE to SHOULD |
| MUST-13 (ADV-07a) | **RI-2** (subtraction enables gate fixes) | YES | YES | KEEP -- RANK 2 |
| MUST-14 (ADV-2-1) | **RI-2** (prerequisite for gate changes) | YES | YES | KEEP -- RANK 2 |
| MUST-15 (ADV-5-3) | None | NO | NO (methodology) | MOVE to PRE-REQ (Section 4) |
| MUST-16 (ADV-06a) | None | NO | NO (ordering) | MOVE to PRE-REQ (Section 4) |
| MUST-17 (META-2A-3) | None | NO | NO (architectural Q) | MOVE to Section 8 (paradigm) |
| MUST-18 (ADV-FINAL-2) | None | NO | NO (experiment) | MOVE to Section 8 (paradigm) |
| MUST-19 (META-1-1) | None | NO | NO (meta-awareness) | MOVE to Section 8 (paradigm) |
| MUST-20 (META-5-5) | None | NO | NO (experiment) | MOVE to Section 8 (paradigm) |
| MUST-21 (FRESH-5-1) | None | NO | NO (observation) | MOVE to Section 8 (paradigm) |
| MUST-22 (ADV-01/02) | None | NO | NO (budget = itself) | MOVE to Section 4 (constraints) |
| MUST-23 (ADV-7C) | None | NO | NO (experiment) | MOVE to Section 8 (paradigm) |
| MUST-24 (FRESH-2-2) | Same as MUST-03 | DUPLICATE | DUPLICATE | DELETE |
| MUST-25 (FRESH-6-1) | None directly | NO | YES but chicken-and-egg | DEMOTE to SHOULD |
| **PROMOTE: ME-010** | **RI-1 + RI-2** (THE priority inversion fix) | YES | YES | **PROMOTE to MUST -- RANK 1** |
| **PROMOTE: ME-012** | **RI-2** (13 false positives, bug fix) | YES | YES | **PROMOTE to MUST -- RANK 1** |
| **PROMOTE: ME-011** | **RI-1 + RI-2** (181 false violations) | BORDERLINE | YES | **PROMOTE to MUST -- RANK 1** |

---

*Priority audit complete. 8 findings, 6 recommendations. Core message: the MUST tier is 44% correct (11/25 items truly meet criteria). The other 56% are valuable inputs but belong in different sections of the checklist.*
