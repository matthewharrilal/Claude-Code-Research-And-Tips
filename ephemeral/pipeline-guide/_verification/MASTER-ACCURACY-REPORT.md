# Master Accuracy Report: Pipeline v2 Implementation Guide

**Compiled by:** Verification Synthesizer (Opus 4.6)
**Date:** 2026-02-19
**Input:** 7 verification reports from independent agents
**Guide under review:** `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html`

---

## 1. Executive Summary

**Overall Verdict: TRUSTWORTHY WITH 7 BLOCKING FIXES NEEDED**

The guide is substantially accurate. Across 7 independent verification agents examining every section, the factual claims overwhelmingly match their source materials. The guide faithfully represents the Fat Core architecture from Report 32 (master synthesis) and Report 94 (maximum efficacy architecture), with correct boundary counts, agent roles, gate thresholds, experiment designs, and failure root causes.

However, 7 issues MUST be fixed before the guide can be trusted as a working reference. All are localized text corrections -- no structural rewrite is needed.

### Issue Counts

| Severity | Count | Description |
|----------|-------|-------------|
| BLOCKING | 7 | Must fix before trusting the guide |
| SIGNIFICANT | 10 | Should fix but won't cause implementation failure |
| MINOR | 18+ | Nice to fix, cosmetic or low-impact |

### Per-Section Accuracy

| Section | Report | Verdict |
|---------|--------|---------|
| S1-S2 (Current State + Architecture) | 01 | 23/26 claims accurate; 3 stale numbers |
| S3-S4 (Files to Create + Edit) | 02 | ACCURATE; 0 major errors, 2 minor inconsistencies |
| S5 (Gate System) | 03 | ~95% accurate; 1 internal inconsistency (SC-11) |
| S6-S7 (Build Flow + Experiments) | 04 | ACCURATE WITH MINOR GAPS; 2 significant source-vs-source conflicts |
| S8-S9 (Implementation Order + Failure Prevention) | 05 | 17/19 claims verified (89.5%); 1 math error |
| Checklist + Appendix | 06 | PASS with 1 path error, 2 step numbering issues |
| Diagram Cross-Check | 07 | 27 discrepancies (6 critical) -- but most trace to a SINGLE root cause (see Section 5 below) |

---

## 2. BLOCKING Issues (Must Fix)

### B-01: `_INDEX.md` path does not exist
- **Location:** Appendix, line ~1390
- **Problem:** Guide references `case-studies/_INDEX.md` which does not exist on disk
- **Actual file:** `case-studies/README.md`
- **Source:** Report 06 (Checklist), verified via Glob
- **Fix:**
  - Old: `design-system/compositional-core/case-studies/_INDEX.md`
  - New: `design-system/compositional-core/case-studies/README.md`

### B-02: 71/963 = 13.4% math error
- **Location:** Section 9, Failure 2 ("The 75-Line Visibility Cap")
- **Problem:** Guide says "builder saw 71 of 963 lines (13.4%)" but 71/963 = 7.4%, not 13.4%. The 13.4% comes from 71/530 (builder-relevant lines only).
- **Source:** Report 05 (S8-S9); original source is `flagship-audit/16-topology-failure.md` line 184: "skeleton builders saw 71/530 lines = 13.4%"
- **Fix:**
  - Old: `71 of 963 lines (13.4%)`
  - New: `71 of 530 builder-relevant lines (13.4%)`

### B-03: SC-11 phase assignment internal inconsistency
- **Location:** Section 5, gate diagram (line ~781) vs quick-reference table (line ~813)
- **Problem:** The diagram places SC-11 (Typography Zones) in G2. The table places SC-11 in G3. Both cannot be correct.
- **Resolution:** Report 73 places SC-11 in `phase5` (the last mid-build gate, alongside SC-03 which is G2 in both diagram and table). The diagram's G2 placement is consistent with Report 73. The table is the error.
- **Source:** Report 03 (Gates), confirmed by Report 02 (S3-S4)
- **Fix:** In the quick-reference table, change SC-11's gate assignment:
  - Old: SC-11 | Typography Zones | Perception | `G3` | >= 10px display-body delta
  - New: SC-11 | Typography Zones | Perception | `G2` | >= 10px display-body, >= 2px body-detail delta

### B-04: Gate timing logic -- G1 checks HTML before it exists
- **Location:** Section 6, build flow (lines ~909-911)
- **Problem:** G1 checks structural elements (ARIA landmarks >= 3, skip link, component classes >= 3, zone count 2-5) that require HTML to exist. But the guide places G1 "after Phase B" (planning phase), before any HTML is written in Phase C.
- **Source:** Report 07 (Diagram Cross-Check, D-06); Report 04 (S6-S7, Discrepancy 1). Report 94 says G1 fires "after Phase B + Phase C start (skeleton)."
- **Fix:** In the build flow, adjust G1 timing:
  - Old: G1 fires after Phase B (plan)
  - New: G1 fires after the HTML skeleton is written (early Phase C), before CSS styling begins
  - Specifically, the ASCII flow diagram and surrounding text should show G1 between "skeleton written" and "CSS styling" within Phase C, not between Phase B and Phase C.

### B-05: TC Skill line count stale
- **Location:** Section 1, line ~405
- **Problem:** Guide says TC SKILL.md is "1,878 lines." Actual file is now 1,932 lines.
- **Source:** Report 01 (S1-S2), verified via `wc -l`
- **Fix:**
  - Old: `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines)
  - New: `~/.claude/skills/tension-composition/SKILL.md` (~1,930 lines)

### B-06: Layer 1 prohibition count wrong
- **Location:** Section 1, lines ~417, ~428
- **Problem:** Guide says "24 rules" with breakdown "8 absolute + 14 conditional + 2 meta." Actual file has 22 prohibitions: 8 absolute + 12 conditional + 2 meta. The compositional-core CLAUDE.md confirms 22.
- **Source:** Report 01 (S1-S2), verified against `prohibitions.md` and `compositional-core/CLAUDE.md`
- **Fix:**
  - Old: `24 rules defining the system by what it refuses`
  - New: `22 rules defining the system by what it refuses`
  - Old: `8 absolute rules... plus 14 conditional and 2 meta-prohibitions`
  - New: `8 absolute rules... plus 12 conditional and 2 meta-prohibitions`

### B-07: Layer 2 token count stale
- **Location:** Section 1, line ~418
- **Problem:** Guide says "65 design tokens." Actual `tokens.css` now contains 80 CSS custom properties. Both the guide and `compositional-core/CLAUDE.md` are stale.
- **Source:** Report 01 (S1-S2), verified via grep on `tokens.css`
- **Fix:**
  - Old: `65 design tokens`
  - New: `80 design tokens`

---

## 3. SIGNIFICANT Issues (Should Fix)

### S-01: "135+ agents analyzed" is contested
- **Location:** Section 9, Failure 9 (660:1 meta ratio)
- **Problem:** Guide claims "135+ agents analyzed." The flagship-retrospective/09-SYNTHESIS.md (line 34) says "The '135+ agents' number is overstated (~65+ is more accurate)."
- **Source:** Report 05 (S8-S9)
- **Fix:**
  - Old: `135+ agents analyzed`
  - New: `65+ agents analyzed`

### S-02: PA auditor model inconsistency (Opus vs Sonnet)
- **Location:** Section 6 (build flow, line ~931) and Section 2 (agent roles)
- **Problem:** Guide says "9 fresh-eyes Opus agents." Report 94 agrees (Opus). But Report 32 says "9 PA auditors (Sonnet)." This is a genuine contradiction between source reports.
- **Source:** Report 04 (S6-S7, Discrepancy 3); Report 01 (S1-S2, Claim 23)
- **Recommendation:** Add a note that PA auditor model is a cost/quality tradeoff. Report 94 recommends Opus; Report 32 suggests Sonnet is acceptable.

### S-03: Step 5.5 exists in checklist but not in Section 8
- **Location:** Checklist (lines ~1348-1351) vs Section 8 (lines ~1102-1198)
- **Problem:** The checklist has a "Step 5.5: Create Supporting Files" (perception-thresholds.md + experiment-protocol.md) that Section 8 never mentions. Reader following Section 8 will miss it.
- **Source:** Report 06 (Checklist)
- **Fix:** Either add Step 5.5 to Section 8's implementation order, or fold it into Step 5 description.

### S-04: Experiment naming differs from PV2 Diagram
- **Location:** Section 7 (Experiments)
- **Problem:** Guide uses A/B/C (from Report 32). PV2 Diagram uses E/D/A/B/C (5 experiments). Guide's "Exp A" = Diagram's "EXP E." Guide's "Exp B" = Diagram's "EXP D." Anyone cross-referencing will be confused.
- **Source:** Report 07 (Diagram Cross-Check, D-11/D-12)
- **Recommendation:** Add a mapping note: "Note: The PV2 Diagram uses different experiment labels. Guide Exp A = Diagram EXP E; Guide Exp B = Diagram EXP D."

### S-05: 5-layer intelligence stack not presented as named framework
- **Location:** Throughout the guide (distributed)
- **Problem:** The PV2 Diagram devotes an entire section to the 5-layer Compositional Intelligence Stack (L1-L5). The guide distributes this information across gates and PA without ever naming the framework.
- **Source:** Report 07 (Diagram Cross-Check, D-18)
- **Recommendation:** Consider adding a brief L1-L5 diagram or table, either in Section 2 or Section 5. Not architecturally wrong to omit it, but it aids comprehension.

### S-06: SC-11 threshold differs between diagram and guide
- **Location:** Section 5, SC-11 threshold
- **Problem:** Guide says SC-11 checks ">= 10px display-to-body delta." Diagram says ">= 2px font delta." These measure different things: the guide checks heading-to-body font-size gaps; the diagram checks minimum perceptible font-size difference. Report 73 specifies both: >= 10px display-body AND >= 2px body-detail.
- **Source:** Report 07 (D-08); Report 03 (Discrepancy #2)
- **Fix:** Already addressed in B-03 (add ">= 2px body-detail delta" to the table row).

### S-07: Guide commits to Fat Core without acknowledging diagram's "EXPERIMENT FIRST" status
- **Location:** Section 2 framing
- **Problem:** The guide presents Fat Core as THE decided architecture. The PV2 Diagram presents it as the recommended but unvalidated candidate with status "EXPERIMENT FIRST."
- **Source:** Report 07 (D-16)
- **Recommendation:** Add one sentence to the "You Are Here" box: "This guide follows the Fat Core architecture recommended by the master synthesis. The experiments in Section 7 validate this choice before full implementation."

### S-08: Weaver convergence method not mentioned
- **Location:** Section 6, weaver role
- **Problem:** Report 94 specifies the weaver uses convergence-based synthesis: "7/9 agree = real finding, 2/9 agree = noise." Guide omits this.
- **Source:** Report 04 (S6-S7)
- **Fix:** Add to the weaver description: "Uses convergence: 7/9 agreement = real finding; 2/9 = noise."

### S-09: Missing experiment success criteria in shared protocol
- **Location:** Section 7, "Shared Protocol" box
- **Problem:** Report 32 lists 8 success criteria (PA-05, soul, container, mechanisms, multi-coherence, accessibility, perception thresholds). Guide lists only 4 (content, builder model, PA evaluation, success threshold). The missing criteria exist elsewhere in the guide but aren't co-located with the experiment protocol.
- **Source:** Report 04 (S6-S7, Discrepancy 7)
- **Fix:** Add to shared protocol: "Soul: 0 violations. Container: 940-960px. Mechanisms: >= 8 distinct across >= 4 categories."

### S-10: Perception thresholds phrasing imprecise
- **Location:** Section 1, "What Is Missing" list
- **Problem:** Guide says "No perception thresholds in gates." But gates SC-09 through SC-12 DO exist for thresholds -- they just check counts, not magnitudes.
- **Source:** Report 01 (S1-S2, Claim 12 observation)
- **Fix:**
  - Old: `No perception thresholds in gates`
  - New: `No perception magnitude thresholds in gates (SC-09 through SC-12 exist but check counts, not delta sizes)`

---

## 4. MINOR Issues (Nice to Fix)

| # | Location | Issue | Source |
|---|----------|-------|--------|
| M-01 | S5, SC-14 table row | Table omits intra-zone bg delta check (1-9 RGB). Info IS in expanded text. | Report 03 |
| M-02 | S6, PA timing | Guide shows PA at ~20 min. Report 94 says 30-45 min. Total timing still valid. | Report 04 |
| M-03 | S7, Exp A time | Guide says "~2 hours." Report 32 says "~30 min wall clock" for build alone. Guide likely includes PA time. | Report 04 |
| M-04 | S6, fix cycle re-check | PV2 Diagram specifies "2-PA check (not full 9)" for fix cycles. Guide doesn't specify. | Report 04 |
| M-05 | S8, time estimates | Steps 3 and 6 padded 30-60 min vs source. Defensible as safety margin. | Report 05 |
| M-06 | S9, "What Could Still Go Wrong" | Missing risk: recipe/conventions ceiling at 3/4 (4/4 DESIGNED may require something beyond specification). | Report 05 |
| M-07 | S2, Flagship description | "530-line checklist" label conflates two characterizations. Report 32 calls it a "530-line recipe." MEMORY.md notes builder portion was a "71-line CHECKLIST." | Report 01 |
| M-08 | S2, PA auditor model | Guide says "Opus/Sonnet" in one place but Report 32 specifies Sonnet. | Report 01 |
| M-09 | S1, PA SKILL.md line count | Guide says 848 lines. Actual is 847. Off by 1. | Report 01 |
| M-10 | S6, G1 timing | Report 94 says G1 fires "after Phase B + Phase C start (skeleton)" but guide says just "after Phase B." | Report 04 |
| M-11 | S7, Exp B cost range | Guide: $20-60. Diagram: $15-40 for Fat Core specifically. Ranges partially overlap. | Report 07 |
| M-12 | S2, comparison table | Guide says "7 non-destructive boundaries" which is correct but the guide's 7 boundary enumeration (B1-B7) doesn't exist in the diagram (diagram only enumerates the 11 linear pipeline boundaries). | Report 07 |
| M-13 | S6, Track 1/Track 2 | Guide adds track classification at orchestrator level. Diagram's Fat Core says "ALWAYS FLAGSHIP" (no tier routing). | Report 07 |
| M-14 | S3, orchestrator size | Guide: 350-500 lines. Diagram: ~205 lines. 70-145% difference. | Report 07 |
| M-15 | S4, S-09 formula | Guide's stacking formula omits border-bottom and border-top (Report 73 includes them). Minor since borders rarely exceed 3-4px. | Report 02 |
| M-16 | S3, conventions brief sections | Guide's 5-section structure follows Report 32 but diverges from Report 94's 7-section draft. Report 32 supersedes, so this is correct. | Report 02 |
| M-17 | Checklist, step numbering | Edit numbering differs between Section 4 (by file) and checklist (by implementation step). Both cover the same edits. | Report 06 |
| M-18 | S6, "12-13 agents" | Guide says "12-13" in timing breakdown but "12" everywhere else. | Report 07 |

---

## 5. Diagram vs Guide Framing -- Root Cause Analysis

Report 07 found 27 discrepancies between the guide and the PV2 Diagram. This sounds alarming until you understand the root cause:

**The diagram documents ALL investigated approaches (5 experiments, 4 architectures, linear pipeline + Fat Core). The guide commits to ONE approach (Fat Core) and reinterprets everything through that lens.**

This is a **feature, not a bug.** The guide is an implementation guide for the chosen architecture, not a research document. It follows Report 32 (the master synthesis) which says "VERDICT: FAT CORE ARCHITECTURE." The diagram serves a different purpose: it is a comprehensive map of all options investigated.

Most of the 27 "discrepancies" are:
- **Experiment count (5 vs 3):** Guide drops 2 experiments irrelevant to Fat Core. Report 32 already made this reduction.
- **File list differences:** Guide uses conventions brief (100 lines) instead of operational recipe template (300 lines), reflecting the Fat Core architecture's design.
- **Risk framing:** Guide's 5 risks are Fat Core-specific. Diagram's 9 risks cover all approaches.
- **Intelligence stack:** Guide distributes L1-L5 across gates and PA rather than presenting as a named framework.
- **Boundary enumeration:** Guide invents B1-B7 for Fat Core. Diagram only enumerates the 11 linear pipeline boundaries.

**Only 2 diagram discrepancies represent actual errors in the guide:**
1. Gate timing logic (B-04 above) -- G1 can't check HTML before it exists
2. SC-11 threshold confusion -- ">= 10px" vs ">= 2px" measure different things (both should be included)

**Recommendation:** Add one sentence to Section 2 acknowledging the framing choice: "This guide follows the Fat Core architecture recommended by the master synthesis (Report 32). The PV2 Diagram documents all approaches investigated; see it for the full research context."

---

## 6. Final Verdict

**The guide is TRUSTWORTHY after applying the 7 BLOCKING fixes.**

The factual foundation is solid: gate thresholds match Report 73, architecture matches Report 94, synthesis follows Report 32, failure root causes match the flagship audit corpus. The errors are localized (stale numbers, one math error, one internal inconsistency, one temporal logic issue) and all have clear fixes.

After fixes, the guide will be a reliable implementation reference for the Fat Core architecture.

---

## 7. Exact Fix List

All fixes below show old text -> new text for direct application.

### BLOCKING FIXES

**B-01: Appendix path fix**
```
OLD: design-system/compositional-core/case-studies/_INDEX.md
NEW: design-system/compositional-core/case-studies/README.md
```

**B-02: Math error fix (Section 9, Failure 2)**
```
OLD: builder saw 71 of 963 lines (13.4%)
NEW: builder saw 71 of 530 builder-relevant lines (13.4%)
```

**B-03: SC-11 table fix (Section 5, quick-reference table)**
```
OLD: SC-11 | Typography Zones | Perception | G3 | >= 10px display-body delta
NEW: SC-11 | Typography Zones | Perception | G2 | >= 10px display-body, >= 2px body-detail delta
```

**B-04: G1 timing fix (Section 6, build flow)**
The ASCII flow diagram should move G1 from "after Phase B" to "after HTML skeleton is written (early Phase C)." In the text:
```
OLD: G1 fires after Phase B (plan) to check structure
NEW: G1 fires after the HTML skeleton is written (early Phase C) to check structure
```
The ASCII diagram's G1 box should appear between "skeleton written" and "CSS styling" within Phase C, not between Phase B and Phase C.

**B-05: TC Skill line count (Section 1)**
```
OLD: (~/.claude/skills/tension-composition/SKILL.md (1,878 lines)
NEW: (~/.claude/skills/tension-composition/SKILL.md (~1,930 lines)
```

**B-06: Layer 1 prohibition count (Section 1)**
```
OLD: 24 rules defining the system by what it refuses
NEW: 22 rules defining the system by what it refuses

OLD: 8 absolute rules... plus 14 conditional and 2 meta-prohibitions
NEW: 8 absolute rules... plus 12 conditional and 2 meta-prohibitions
```

**B-07: Layer 2 token count (Section 1)**
```
OLD: 65 design tokens
NEW: 80 design tokens
```

### SIGNIFICANT FIXES

**S-01: Agent count (Section 9, Failure 9)**
```
OLD: 135+ agents analyzed
NEW: 65+ agents analyzed
```

**S-03: Step 5.5 (Section 8)**
Add after Step 5 description:
```
NEW: Step 5.5: Create perception-thresholds.md and experiment-protocol.md as supporting artifacts alongside the orchestrator.
```

**S-07: Framing acknowledgment (Section 2, "You Are Here" or intro)**
Add sentence:
```
NEW: This guide follows the Fat Core architecture recommended by the master synthesis (Report 32). The experiments in Section 7 validate this choice before full implementation. The PV2 Diagram documents all approaches investigated; see it for the full research context.
```

**S-08: Weaver convergence method (Section 6, weaver role)**
Add to weaver description:
```
NEW: Uses convergence-based synthesis: 7/9 auditor agreement = real finding; 2/9 = noise.
```

**S-09: Experiment success criteria (Section 7, Shared Protocol)**
Add to shared protocol box:
```
NEW: Soul: 0 violations. Container: 940-960px. Mechanisms: >= 8 distinct across >= 4 categories.
```

**S-10: Perception thresholds phrasing (Section 1, "What Is Missing")**
```
OLD: No perception thresholds in gates
NEW: No perception magnitude thresholds in gates (gates SC-09 through SC-12 exist but check counts, not delta sizes)
```

---

*Report complete. 7 verification agents, 7 reports synthesized, 7 blocking + 10 significant + 18 minor issues catalogued with exact fixes.*
