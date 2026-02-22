# 07 -- Fresh-Eyes Adversarial Audit of Skill Surgery Plan

**Auditor:** Fresh-Eyes Auditor (Opus 4.6, zero prior context)
**Date:** 2026-02-20
**Mandate:** Find what the team MISSED. Not a rubber stamp.
**Files reviewed:** 38 (master plan), TC SKILL.md (2,006 lines), PA SKILL.md (1,208 lines), build-page SKILL.md (482 lines), reports 30-37

---

## GAPS

### Q1: Are there enrichment findings in reports 34-37 that report 38 DROPPED or DOWNGRADED without justification?

**YES -- 5 items dropped or under-prioritized without adequate justification.**

1. **Report 34 I-2 (Mechanism PA Detection Path Annotations):** Report 34 classifies this as IMPORTANT and provides a full PA-VISIBLE / PA-PARTIAL / PA-INVISIBLE annotation table for all 18 mechanisms. Report 38 downgrades it to TC-ENRICH-15 (MEDIUM). The justification for downgrading is absent -- the entry in report 38 is a single line with no reasoning. Given that "programmatic verification != perceptual verification" is a top-level finding in MEMORY.md, and this enrichment directly addresses the root cause by biasing TC toward PA-detectable mechanisms, the downgrade is questionable. **Recommendation:** Restore to HIGH or document why MEDIUM is correct.

2. **Report 36 TC-E07 (Perception Threshold Awareness in Phase 4):** Report 36 rates this MEDIUM with Tier 1 evidence strength. Report 38 folds it into TC-ENRICH-06 as a sub-item ("Add font-weight >=100. Add stacked gap <=120px. Duplicate into Phase 4.0 guardrails"). But report 36's actual recommendation is broader: it says TC Phase 4 should have a CROSS-REFERENCE to the perception threshold table, not just updated values in R-MC-03. The cross-reference concept (a one-line pointer saying "CSS values must exceed thresholds in the perception table") is distinct from the value update and was dropped in synthesis.

3. **Report 37 TC-E05 (Phase 0 Content Preparation Enhancement):** Report 37 classifies this as MEDIUM with two independent sources. Report 38 folds it into TC-ENRICH-12 (Scope-dependent quality floors) with a different focus. Report 37's finding is about CONTENT PREPARATION (which content structures are good fits vs poor fits for the pipeline) while report 38's TC-ENRICH-12 is about MECHANISM FLOORS per scope level. These are related but not the same thing. The content preparation guidance was dropped entirely.

4. **Report 35 F10 (Auditor C Overload Monitoring):** Report 35 notes that Auditor C has 13 questions (60% above median). Report 38 puts this at PA-ENRICH-21 (LOW -- Track Only). Given that Auditor C is the PRIMARY evaluator for the entire Tier 4 void prevention suite (PA-50 through PA-53) plus all of Tier 5 spatial questions (PA-64, PA-66), cognitive fatigue on C's later questions is a plausible audit quality risk. A simple rebalance (move PA-52 to Auditor D, as report 35 suggests) costs nothing and reduces risk. Deferring to "Track Only" with no plan to actually track it means this will never be addressed.

5. **Report 36 PA-E07 (Channel Activation vs Deployment Distinction):** Report 36 rates this MEDIUM with two independent sources. Report 38 promotes it to PA-ENRICH-05 (HIGH) -- **which is correct** -- but the synthesis description says "Count only ACTIVE channels. Updated multi-coherence scale." The report 36 original is more specific: it proposes a TIER-SPECIFIC activation target (Floor: 3+, Middle: 4+, Ceiling: 5+, Flagship: 6-7). The tier-specific targets were dropped in synthesis. Report 38's version says "count only ACTIVE" but gives no target numbers. This leaves PA without tier-calibrated expectations.

---

### Q2: Are there trim categories marked SAFE that have unexamined risks?

**YES -- 2 categories have under-examined risks.**

1. **TC Phase 4.9 Tokenization Self-Check (marked SAFE in report 38, ~44 lines):**

Report 38 marks Phase 4.9 JS removal as SAFE ("remove JS, keep ~30 lines of token SCALE awareness"). But the adversarial review (report 33, BLOCKING finding on pages 199-209) explicitly flags this: **"Tokenization is NOT in conventions-brief.md. Tokenization is NOT in /build-page SKILL.md. The only reference to token usage is in tokens.css itself."** Report 33 says "Token compliance guidance must be added to either conventions-brief.md or /build-page's builder spawn prompt BEFORE removing it from TC."

Report 38's execution order (Part 5) puts trims in Phase B and enrichments in Phase C. But there is no Phase A task that adds token compliance guidance to a builder-facing file. The B-02 prerequisite fix addresses W-code definitions, not tokenization. **If Phase B proceeds as planned, token compliance guidance vanishes from the pipeline with no replacement.**

The TC trim safety report (report 30, page 126) confirms: "Phase 4.9 is about COUNTING var() references in CSS, which the TC agent never writes. Valid trim." True -- but report 30 does not trace WHERE the guidance goes. It only confirms it doesn't belong in TC. Report 33 traces the destination and finds it empty.

**Recommendation:** Add a Phase A-3 prerequisite: "Add condensed token compliance protocol (~15 lines) to conventions-brief.md BEFORE removing Phase 4.9 from TC." Without this, the middle-tier experiment's 66.5% compliance will never improve.

2. **PA Modes 1-3 collapse (marked SAFE, ~32 lines):**

Report 38 marks this SAFE because "/build-page never references Mode 1, Mode 2, or Mode 3." True for the /build-page pipeline. But Mode 1 (Embedded, 90 seconds) has a LIVE CROSS-REFERENCE at PA line 372: "Builders running Mode 1 (Embedded, 90 seconds) should add a void check." This cross-reference provides the builder's self-check protocol during the build -- it is referenced by the CONCEPT even if not by the /build-page spawn prompt.

More importantly, the conventions-brief (which the BUILDER reads) may reference "Mode 1" or embedded PA concepts. Report 31 notes this needs cleanup but does not verify whether conventions-brief.md has Mode 1 references that would become dangling.

**Recommendation:** Grep conventions-brief.md for "Mode 1" and "embedded" before trimming. If references exist, update them.

---

### Q3: Does the enrichment plan create NEW contradictions between TC and PA?

**YES -- 2 potential contradictions identified.**

1. **Perception threshold values diverge between TC-ENRICH-06 and PA-ENRICH-01:**

TC-ENRICH-06 says: "font-size >=2px, letter-spacing >=0.03em, line-height >=0.15, spatial >=24px."

PA-ENRICH-01's table (from report 36) says: "Font weight >= 200."

But report 37 (PA-E01 source) says: "Font weight >= 200."

Report 36 (TC-E03 source) says: "Font-weight >=100 units (new)."

So: **TC will say font-weight threshold is >=100, while PA will say >=200.** Report 38 lists TC-ENRICH-06 as "Add font-weight >=100" and PA-ENRICH-01 as the "8-property table" -- but the PA table from report 36 says >=200 while the TC update from report 36 says >=100. These were both written by the SAME agent (report 36) with different values in different sections. Report 38 fails to catch this internal contradiction.

**Recommendation:** Resolve before applying. The difference matters: font-weight 400 vs 500 is a 100-unit delta (passes TC, fails PA) or a 200-unit delta question. Pick one canonical value. Given that 400->500 is barely perceptible but 400->600 is clearly visible, >=200 is the safer threshold.

2. **TC-ENRICH-01 (recipe-format output) conflicts with existing Phase 4.5 spec format:**

TC-ENRICH-01 says to convert Phase 4.5 from specification format to recipe format. But the current Phase 4.5 defines a 5-section brief format (STRUCTURAL METAPHOR, ZONE ARCHITECTURE, CONTENT TENSIONS, SELECTED MECHANISMS, METAPHOR-IMPLIED CSS DIRECTIONS) that PA-ENRICH-09 (Metaphor failure root-cause diagnosis) depends on. If TC-ENRICH-01 replaces the 5-section format with a 9-phase recipe, then PA-ENRICH-09's diagnosis logic ("check if TC brief specified CSS directions") has no section to reference. Similarly, TC-ENRICH-05's fix cycle protocol references "builder re-reads TC brief Section 2 (Zone Architecture) and Section 4 (Mechanisms)" -- these section numbers assume the current format.

**Recommendation:** TC-ENRICH-01 should ADD a recipe section (Section 6 or parallel output) rather than REPLACE the existing 5-section format. The existing sections serve diagnostic and fix-cycle functions that the recipe cannot replace.

---

### Q4: Are there findings from surgery files 01-28 that NONE of the enrichment auditors captured?

**YES -- 3 findings appear missing from all 4 enrichment reports.**

I cannot read surgery files 01-28 directly (only the enrichment reports), but cross-referencing the source citations in reports 34-37 against the surgery file list reveals coverage gaps:

1. **File 07 (pv2-alignment) is cited by reports 36 and 37 but only for codification map status, not for its PV2 alignment findings.** Report 36 maps it to codification-map changes 6/7 (already applied). But file 07's actual content -- the Pipeline v2 architecture alignment -- may contain enrichment candidates about the orchestrator/recipe relationship that neither enrichment auditor extracted.

2. **File 12 (specific identity unknown from available context) is cited nowhere in reports 34-37.** If it exists and contains enrichment-relevant findings, it was completely missed.

3. **The "anti-reproduction protocol" gates (from file 04) are assessed in report 38's appendix but no enrichment directly addresses Gate 3 (Guardrail:Playbook ratio) in a way that is MEASURABLE.** TC-ENRICH-01 (recipe format) is cited as addressing G3 and G7, but the enrichment is "convert to recipe format" -- there is no binary self-test for whether the guardrail:playbook ratio improved. The anti-reproduction protocol specifically requires binary gates. This is a meta-gap: the enrichment addresses the finding but not in the format the finding's own framework demands.

---

## BLINDSPOTS

### Q5: Does the plan assume /build-page passes information it actually DOESN'T?

**YES -- 2 critical information routing assumptions are wrong.**

1. **TC-ENRICH-10 (Builder visibility of mechanism catalog) assumes the builder receives mechanism catalog impact profiles through the TC brief.** But tracing the /build-page builder spawn prompt (lines 86-94), the builder reads:
   - `_tc-brief.md` (TC output)
   - `conventions-brief.md`
   - Content file
   - Reference files: mechanism-catalog.md, components.css, tokens.css, prohibitions.md

The builder DOES have access to mechanism-catalog.md as a "reference file (consult as needed)." But the absorption analysis (file 20 in surgery reports) demonstrates that "consult as needed" = fiction. TC-ENRICH-10 proposes that TC Phase 4.5 "must include mechanism catalog impact profiles, not just names." This is correct, but report 38 classifies it as HIGH, not CRITICAL. Given that the inverted quality routing is THE root cause identified by 3+ independent analyses, and the TC brief is the only file the builder reads SEQUENTIALLY (not "as needed"), this should be CRITICAL.

2. **TC-ENRICH-05 (fix cycle protocol) assumes /build-page sends the TC brief to the builder during fix cycles.** Checking /build-page Section 7.2 (line 395): "Re-read _tc-brief.md (your metaphor, zones, tensions) AND your conviction statement and transition table in _build-log.md before applying fixes." So YES, /build-page does reference the TC brief in fix instructions. However, the fix instruction TEMPLATE at Section 7.1 (lines 364-391) does NOT include a "Re-read TC brief" instruction. The "Re-read" instruction is in the framing text at 7.2, which is SEPARATE from the fix instruction file. If the orchestrator uses the template at 7.1 to generate the fix file, the TC brief reference may be lost.

**Recommendation:** The fix cycle enrichment (TC-ENRICH-05) should also update /build-page Section 7.1 to include "Re-read _tc-brief.md" in the fix instruction template itself, not just in the framing text.

---

### Q6: Are any enrichments assigned to the WRONG skill?

**YES -- 2 enrichments are questionably assigned.**

1. **PA-ENRICH-04 (S-09 stacking check):** This is assigned to PA as "new PA question or guidance: estimate TOTAL gap at section boundaries." But PA auditors are LANGUAGE-BLOCKED from CSS vocabulary (the Language HARD BLOCK at PA lines 1003-1011 prohibits "px, rem, margin, padding" etc.). Asking auditors to "sum section-bottom-padding + divider-top-margin + divider-height + divider-bottom-margin + next-section-top-padding" directly violates the Language HARD BLOCK.

The stacking check already exists in TC as TC-ENRICH-07 (Phase 4.0 guardrails). It also exists in the gate runner as SC-10 (stacked gap <= 120px). PA's role should be PERCEPTUAL detection of voids ("do you see dead space?"), not arithmetic gap measurement. The measurement belongs in gates, the perception belongs in PA.

**Recommendation:** PA-ENRICH-04 should be reframed from arithmetic measurement to perceptual detection: "At each section boundary, does the gap between content feel like a designed pause or an accidental void? If void, estimate how many lines of text could fit in the empty space." This is perceptual, not arithmetic, and respects the Language HARD BLOCK.

2. **TC-ENRICH-11 (PA expectation map, optional Output C):** This proposes that TC generate PA detection expectations for each mechanism. But TC runs BEFORE the build, and PA expectations depend on HOW the builder implements mechanisms, not just WHICH mechanisms TC selects. A mechanism can be deployed correctly or incorrectly; TC cannot predict the builder's implementation quality. The PA expectation map would set expectations based on TC's PLAN, not the builder's EXECUTION. This could bias auditors ("TC says there should be a border-left gradient, so I'll look for one and confirm it") rather than allowing fresh-eyes perception.

**Recommendation:** If implemented, the PA expectation map should go to the WEAVER only (not to auditors), and should be framed as diagnostic context ("did the builder implement what TC specified?"), not as auditor prompts.

---

### Q7: Does trimming any section remove content that an enrichment needs as anchor?

**YES -- 1 confirmed anchor conflict, 1 potential.**

1. **CONFIRMED: TC-ENRICH-01 (recipe-format output for Phase 4.5) needs Phase 4's translation grammar as input.**

The recipe format requires "exact CSS values for each zone." To produce exact CSS values, the TC agent needs the translation grammar (Step 4.2, lines 1154-1237) that maps metaphor properties to CSS expressions. Report 38's trim plan removes the translation grammar's full text and compresses it. But TC-ENRICH-01 increases the TC agent's need for the translation grammar -- the recipe format demands MORE CSS specificity in the output, not less.

The adversarial review (report 33, S-01) flagged this: "The current proposal removes 70 lines and replaces with a 5-line summary. This is too aggressive. Recommendation: compress to ~25-30 lines." Report 38 does NOT address this recommendation. The trim plan at line 44 says "Phase 4.9-JS deleted (not moved)" without distinguishing the JS code (truly removable) from the translation grammar content.

Wait -- re-reading report 38 more carefully: the translation grammar (Step 4.2) is NOT in the trim list. The trims are: Phase 5+, Phase 4.7B, Phase 4.8, Phase 4.9 JS, duplicate soul constraints, builder warning text, stale references. Step 4.2 is NOT trimmed. My concern was incorrect about the specific content being removed, but the COMPRESSION flag from report 33 S-01 may refer to a MEDIUM-priority trim not captured in report 38. Let me verify...

Report 38 lists TC safe trims as: Phase 5+ (~318), Phase 4.7B (~60), Phase 4.8 (~88), Phase 4.9 JS (~44), Builder warning TEXT (~60), Stale references (~50), totaling ~620. The translation grammar is NOT in this list. **The anchor conflict is NOT present in report 38's trim plan.** Report 33's S-01 concern was about a broader compression proposal from earlier surgery files that report 38 did not adopt.

**REVISED: No confirmed anchor conflict.** I withdraw this finding.

2. **POTENTIAL: TC-ENRICH-06 (perception threshold update) targets R-MC-03 at line 1359. If TC trims relocate content, R-MC-03's line number changes and the enrichment agent might apply edits to the wrong location.**

This is a coordination risk, not a content conflict. If trim agents and enrichment agents run in parallel (as report 38 Phase B/C suggests), they could produce conflicting edits to the same file.

**Recommendation:** Report 38's execution order already handles this: Phase B (trims) before Phase C (enrichments). But the cross-validator in Phase D must verify that enrichment targets still exist at their expected locations post-trim.

---

### Q8: Are there interaction effects between enrichments producing contradictions?

**YES -- 3 interaction effects identified.**

1. **TC-ENRICH-01 (recipe format) + TC-ENRICH-12 (scope-dependent quality floors):**

TC-ENRICH-01 converts Phase 4.5 output to recipe format with "exact CSS values for each zone." TC-ENRICH-12 defines different mechanism floors for SHORT vs STANDARD vs LONG content. The recipe format needs to be SCOPE-AWARE: a recipe for SHORT content (8-10 mechanisms) looks fundamentally different from a recipe for STANDARD content (16-18 mechanisms). If TC-ENRICH-01 is applied without scope-awareness, the recipe template becomes one-size-fits-all, which contradicts TC-ENRICH-12.

**Recommendation:** TC-ENRICH-01 must reference TC-ENRICH-12 and produce scope-appropriate recipes.

2. **PA-ENRICH-01 (perception threshold table) + PA-ENRICH-05 (channel activation vs deployment):**

PA-ENRICH-01 gives auditors numeric thresholds. PA-ENRICH-05 tells auditors to distinguish DEPLOYED (CSS exists) from ACTIVE (exceeds threshold). These are complementary in concept but create a practical conflict: auditors are LANGUAGE-BLOCKED from CSS terms, yet PA-ENRICH-05 asks them to determine whether a CSS value exceeds a numeric threshold. The resolution path (the Weaver does the threshold comparison, not auditors) must be explicitly documented.

**Recommendation:** PA-ENRICH-05 should state that AUDITORS report what they perceive ("I can see the background change" vs "I cannot see any difference"), and the WEAVER translates auditor language to threshold compliance using the PA-ENRICH-01 table. Auditors never see the table.

3. **TC-ENRICH-07 (S-09 stacking fix, <=120px) + TC-ENRICH-06 (spatial threshold >=24px):**

TC-ENRICH-07 sets maximum total boundary gap at 120px. TC-ENRICH-06 sets minimum zone padding delta at 24px. At a simple boundary with two zone paddings: if each zone contributes 48px padding (minimum section breathing from existing guardrails), that is already 96px before any divider. Adding a 3px structural border + 16px margins = 131px > 120px. The stacking limit and the existing breathing zone minimum are in tension for boundaries with structural borders.

**Recommendation:** Either (a) clarify that the 120px stacking limit includes the section padding (forcing section paddings down from 48px to ~40px at boundaries with structural dividers), or (b) exempt structural borders from the stacking calculation, or (c) adjust the 120px to 140px. The current plan does not acknowledge this arithmetic tension.

---

## NUANCES

### Q9: Do CRITICAL enrichments have hidden dependencies on deferred MEDIUM/LOW items?

**YES -- 2 hidden dependencies.**

1. **TC-ENRICH-01 (recipe-format output, CRITICAL) depends on TC-ENRICH-20 (verb taxonomy, MEDIUM).**

The recipe format's key innovation is using action verbs (Find/Delete/Replace/Add/Set) instead of constraint verbs (Must/Verify/Ensure). TC-ENRICH-20 is the verb taxonomy that defines which verbs are Tier 1-4 and when to use each. Without the verb taxonomy, the recipe format has no vocabulary specification -- the TC agent must invent its own verb choices, which may drift back to constraint verbs. The corpus found that verb register is THE causal factor (files 18, 21, 24).

Report 38 defers TC-ENRICH-20 to "MEDIUM (Apply When Convenient)." But TC-ENRICH-01 without TC-ENRICH-20 is a recipe without a vocabulary -- it specifies the STRUCTURE (9 phases, sequenced) but not the LANGUAGE (action verbs). The result may be a "recipe-shaped specification" rather than an actual recipe.

**Recommendation:** Promote TC-ENRICH-20 to HIGH, or fold the essential verb list (Tier 1-2 verbs only, ~6 lines) into TC-ENRICH-01.

2. **PA-ENRICH-01 (perception threshold table, CRITICAL) depends on PA-ENRICH-14 (warm palette multiplier, IMPORTANT).**

The threshold table says "background >=15 RGB." But the warm palette multiplier note (PA-ENRICH-14, from report 36/37) says warm-palette backgrounds require 1.3-1.5x the standard threshold, making the effective minimum >=20 RGB. The KortAI design system uses EXCLUSIVELY warm-palette backgrounds. If PA-ENRICH-01 is applied without PA-ENRICH-14, every KortAI page audit uses a threshold (15 RGB) that the corpus says is too low for warm tones. The threshold table would be systematically permissive.

**Recommendation:** Fold the warm palette note into PA-ENRICH-01 as a context footnote: "For warm-palette systems (R>=G>=B), effective perceptual threshold is 1.3x: >=20 RGB." This is 1 line added to a 20-line table.

---

### Q10: Are perception threshold values consistent across ALL reports?

**NO -- 4 inconsistencies found.**

| Property | Report 36 (TC) | Report 36 (PA) | Report 37 | Report 38 |
|----------|----------------|----------------|-----------|-----------|
| Background | >=15 RGB | >=15 RGB | >=15 RGB | >=15 RGB |
| Font-size | >=2px | >=2px | >=2px | >=2px |
| Letter-spacing | >=0.03em | >=0.03em | >=0.03em | >=0.03em |
| Line-height | >=0.15 | >=0.15 | >=0.15 | >=0.15 |
| Padding/margins | >=24px | >=24px | >=24px | >=24px |
| Border-width | >=1px | >=1px | >=1px | >=1px |
| **Font-weight** | **>=100** (TC-E03) | **>=200** (PA-E01) | Not specified | **>=100** (TC-ENRICH-06) |
| Stacked gap | <=120px | <=120px | <=120px | <=120px |

**Font-weight inconsistency:** TC says >=100, PA says >=200. Report 38 adopts the TC value (>=100) without noting the discrepancy.

**Additional inconsistency in current TC SKILL.md (R-MC-03):**
- Current TC says letter-spacing >=0.01em (line 1362)
- Reports say >=0.03em
- Current TC says spatial delta >=8px
- Reports say >=24px
- Current TC says line-height >=0.1
- Reports say >=0.15

These are the VALUES being updated by TC-ENRICH-06 / PA-ENRICH-01, not errors in the plan. But the font-weight discrepancy between reports IS an error in the plan.

---

### Q11: Does recipe-format output conflict with existing Phase 4.5 content?

**YES -- structural conflict exists.**

The current Phase 4.5 (TC SKILL.md lines 1627-1670) defines a 5-section brief output:
1. STRUCTURAL METAPHOR
2. ZONE ARCHITECTURE
3. CONTENT TENSIONS
4. SELECTED MECHANISMS
5. METAPHOR-IMPLIED CSS DIRECTIONS

TC-ENRICH-01 proposes a "9-phase recipe with exact CSS values." The recipe format is fundamentally different from the current brief format:
- Brief = WHAT (constraints and specifications)
- Recipe = HOW (sequenced steps with exact values)

These are not mergeable. A recipe cannot also be a constraint specification. The 9 phases (Deallocation -> HTML skeleton -> Soul enforcement -> Zone backgrounds -> Borders -> Typography -> Components -> Accessibility -> Verification) do not map to the 5 brief sections.

**The plan does not specify whether the recipe REPLACES sections 1-5 or SUPPLEMENTS them.**

If REPLACE: TC-ENRICH-05 (fix cycle protocol referencing "Section 2: Zone Architecture" and "Section 4: Mechanisms"), TC-ENRICH-02 (CSS recipe hints in Section 4), TC-ENRICH-03 (CSS recipe per mechanism in Section 4), TC-ENRICH-04 (coupling check), and TC-ENRICH-13 (builder absorption anchors) all reference the current 5-section format. They break if replaced.

If SUPPLEMENT: The TC brief grows from ~50 lines to ~80-100 lines (50 existing + 30 recipe). This may exceed the "brief" concept.

**Recommendation:** Adopt the SUPPLEMENT approach: keep Sections 1-5 for diagnostic/fix-cycle purposes, add Section 6 as the recipe. Update TC-ENRICH-01 to specify this explicitly. The brief becomes a 6-section document where sections 1-5 are the WHAT and section 6 is the HOW.

---

### Q12: After surgery, will TC brief output template be coherent as a single document?

**RISK OF INCOHERENCE if all CRITICAL + HIGH enrichments applied simultaneously.**

The TC brief after surgery would have these sections (current 5 + proposed additions):

1. STRUCTURAL METAPHOR (current)
2. ZONE ARCHITECTURE (current)
3. CONTENT TENSIONS (current)
4. SELECTED MECHANISMS (current, enriched by TC-ENRICH-02 CSS recipes + TC-ENRICH-03 CSS per mechanism + TC-ENRICH-02 density/distribution)
5. METAPHOR-IMPLIED CSS DIRECTIONS (current, enriched by TC-ENRICH-10 mechanism catalog profiles)
6. BUILD RECIPE (TC-ENRICH-01, ~30 lines)
7. BUILDER WARNINGS (fix for B-02 blocker, W-codes)
8. PA DETECTION EXPECTATIONS (TC-ENRICH-11, optional)
9. BUILDER ANCHORS (TC-ENRICH-13, 3-5 lines)
10. FIX CYCLE PROTOCOL (TC-ENRICH-05, ~15 lines)

Target length per report 38: "40-60 lines." But 10 sections cannot fit in 60 lines. Even with aggressive compression:
- Sections 1-5 current: ~50 lines (already at ceiling)
- Section 6 recipe: ~30 lines
- Sections 7-10: ~35 lines

Total: ~115 lines. This is 2x the target length and would violate the "DESIGN BRIEF, not documentation" principle stated at TC line 1666.

**Recommendation:** The TC brief length target must be updated from 40-60 lines to 80-120 lines, OR some proposed sections (8, 10) must be moved to separate output files alongside the brief, OR the CRITICAL-only enrichments (01, 02, 03, 04, 05, 06) must be integrated into existing sections rather than adding new ones.

---

## META

### Q13: Is execution order correct? Any wrong dependencies?

**2 dependency issues.**

1. **Phase A (Unblock Trims) is INCOMPLETE.** Report 38 lists 2 prerequisites:
   - A-1: Update /build-page TC spawn to include prohibitions.md + tokens.css
   - A-2: Add W-code definitions to conventions-brief.md

   Missing prerequisite:
   - **A-3 (missing): Add token compliance protocol to conventions-brief.md or builder spawn prompt.** Report 33 BLOCKING finding says this must happen before Phase 4.9 is removed. Report 38 does not schedule this. Without it, the Phase B TC trim agent will remove tokenization guidance with no replacement.

2. **Phase C (enrichments) should have an internal ordering.** TC-ENRICH-01 (recipe format) is the "single highest-leverage change" but it should be applied LAST among TC enrichments, not first. Reason: TC-ENRICH-02, 03, 04, 05, 06, 07 all modify specific sections of the CURRENT Phase 4.5 format. If TC-ENRICH-01 restructures Phase 4.5 first, the subsequent enrichments target a format that no longer exists. Apply 02-14 first (they modify existing sections), then apply 01 (which adds the recipe section on top of the enriched base).

**Recommendation:** Add A-3 prerequisite. Specify internal ordering within Phase C: apply TC-ENRICH-02 through TC-ENRICH-14 first, then TC-ENRICH-01.

---

### Q14: Single most likely failure mode of this surgery?

**The TC brief becomes an incoherent Franken-document.**

The surgery applies 3 categories of changes simultaneously to TC Phase 4.5:
1. TRIMS: Remove ~620 lines from TC overall, changing the context around Phase 4.5
2. ENRICHMENTS: Add ~140 lines of new content to TC, mostly targeting Phase 4.5
3. FORMAT CHANGE: Convert Phase 4.5 from specification to recipe format

Phase 4.5 is 44 lines (TC SKILL.md lines 1627-1670). After surgery, it must absorb: recipe format (TC-ENRICH-01), CSS recipe hints per mechanism (TC-ENRICH-02/03), content-form coupling check (TC-ENRICH-04), fix cycle protocol (TC-ENRICH-05), mechanism density/distribution (TC-ENRICH-02), builder absorption anchors (TC-ENRICH-13), metaphor lock escalation (TC-ENRICH-14), and builder warnings (B-02 fix).

That is 8 additions to a 44-line section. The most likely failure mode is that the enrichment agent adds each item independently without ensuring they form a coherent whole. The result: Phase 4.5 grows to 120+ lines of accumulated instructions without a clear narrative, recreating the exact "complexity ratchet" problem that the surgery aims to solve.

**This is the flagship failure mode applied to the surgery itself:** the same pattern of "add rules to fix problems without removing rules that caused them" that inflated the master execution prompt from 216 to 963 lines.

**Mitigation:** The enrichment agent for TC should be given explicit instructions: "Phase 4.5 must remain < 80 lines after all enrichments. If you cannot fit all enrichments in 80 lines, move lower-priority items to a separate reference file alongside the brief." The cross-validator (Phase D) should verify total Phase 4.5 line count.

---

### Q15: If you could add ONE enrichment the plan doesn't include, what and why?

**A MINIMUM VIABLE BRIEF test.**

Before applying any enrichments, produce ONE TC brief using the CURRENT (pre-surgery) TC skill on the same content used for the middle-tier experiment. Capture the brief. Then produce ONE TC brief using the POST-SURGERY TC skill on the same content. Compare the two briefs side-by-side.

**Why this matters:**

- The n=0 problem (report 33, Section 7) is real. Zero validation runs with trimmed skills.
- The middle-tier experiment is the ONLY successful pipeline run (PA-05 4/4). Its TC brief is the only known-good brief.
- If the post-surgery brief produces LESS specific CSS directions, MORE vague zone architecture, or FEWER mechanism selections than the pre-surgery brief, the surgery degraded TC quality.
- This costs 2 TC agent runs (~10 minutes). It provides the ONLY empirical validation that the surgery improved rather than degraded TC output.

**What to measure:**
1. Does the post-surgery brief include CSS recipe hints? (TC-ENRICH-01/02/03)
2. Does it include mechanism density/distribution guidance? (TC-ENRICH-02)
3. Is the metaphor coupling specific to this content? (TC-ENRICH-04)
4. Are the zone backgrounds specified with >=15 RGB deltas? (TC-ENRICH-06)
5. Is the brief coherent as a single document? (Q12 concern)

**If this comparison fails, the surgery needs adjustment before full pipeline validation.**

---

## SUMMARY: BLOCKING FINDINGS

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 1 | Token compliance guidance has no destination (Q2) | **BLOCKING** | Add Phase A-3: token compliance to conventions-brief BEFORE trimming Phase 4.9 |
| 2 | Font-weight threshold inconsistency: TC >=100 vs PA >=200 (Q10) | **BLOCKING** | Resolve to single canonical value (recommend >=200) before applying enrichments |
| 3 | TC-ENRICH-01 (recipe format) must SUPPLEMENT not REPLACE Phase 4.5 sections (Q11) | **BLOCKING** | Specify in enrichment plan that recipe is Section 6, existing sections 1-5 preserved |
| 4 | TC brief risks growing to 115+ lines, 2x target (Q12) | **SIGNIFICANT** | Update length target to 80-120 lines OR move secondary sections to separate files |
| 5 | TC-ENRICH-20 (verb taxonomy) is a hidden dependency of TC-ENRICH-01 (Q9) | **SIGNIFICANT** | Promote to HIGH or fold essential verb list into TC-ENRICH-01 |
| 6 | PA-ENRICH-04 (S-09 stacking) violates Language HARD BLOCK (Q6) | **SIGNIFICANT** | Reframe from arithmetic to perceptual detection |
| 7 | Enrichment internal ordering needed: apply 02-14 before 01 (Q13) | **SIGNIFICANT** | Specify internal ordering within Phase C |
| 8 | PA-ENRICH-01 needs warm palette footnote from PA-ENRICH-14 (Q9) | **MODERATE** | Fold 1-line warm palette note into the threshold table |
| 9 | S-09 stacking limit (120px) + breathing zone minimum (48px) arithmetic tension (Q8) | **MODERATE** | Clarify stacking limit scope relative to section padding |
| 10 | Missing validation: no before/after brief comparison planned (Q15) | **MODERATE** | Add pre/post TC brief comparison as cheapest validation |
