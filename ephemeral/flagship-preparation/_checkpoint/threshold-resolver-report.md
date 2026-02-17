# Threshold Resolver Report

**Date:** 2026-02-17
**Agent:** threshold-resolver
**Scope:** Verify consistency of 8 resolved thresholds (TC-01 through TC-08) across all files that reference them
**Authoritative source:** `ephemeral/flagship-preparation/_checkpoint/THRESHOLD-REGISTRY.md`

---

## Summary

| ID | Threshold | Consistent? | Edits Required? | Notes |
|----|-----------|-------------|-----------------|-------|
| TC-01 | Content-to-void ratio | YES | NO | Graduated values consistent across all references |
| TC-02 | Header proportion gate | YES | NO | 20%/25% values consistent where referenced |
| TC-03 | Review passes | YES | NO | "5 passes" consistent across all references |
| TC-04 | Mechanism count | INTENTIONAL DIVERGENCE | NO | Design system uses tier model (12-15/16-18); flagship target is 12-14/cap 16. Compatible. |
| TC-05 | Prompt length | YES | NO | 240 total / 55-80 builder consistent where referenced |
| TC-06 | Communication mandates | YES | NO | "Both deliverable + SendMessage" consistent |
| TC-07 | Max void | KNOWN DISCREPANCY | NO (ephemeral only) | 1620px vs 2160px discrepancy exists but is DOCUMENTED and INTENTIONAL |
| TC-08 | Constraint pressure | YES | NO | "HIGH, NOT BLOCKING" consistent |

**Overall verdict: NO EDITS REQUIRED.** All 8 thresholds are either consistent or have documented, intentional divergences.

---

## Detailed Analysis Per Threshold

### TC-01: Content-to-void ratio
**Authoritative value:** Graduated: 60% pre-build, 50% skeleton, 70% post-mechanism

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 11 | Graduated: 60% pre-build skeleton, 50% skeleton phase, 70% post-mechanism | YES (authoritative) |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 644 | Gate 0 >= 60%, Gate 1 >= 50%, Gate 3 >= 70% | YES |
| 12-gap-analysis.md | 380 | GRADUATED: pre-build >= 60%, skeleton >= 50%, post-Pass-2 >= 70% | YES |
| 03-spatial-confidence-gate.md | 1098 | 60:40 pre-build, 70% SC-03 post-build | YES |
| 08-metacognitive-checkpoints.md | 182 | Content ratio >= 50% at skeleton stage | YES (skeleton-specific) |
| PA SKILL.md | 357 | Min content: 60% of total scroll height | COMPATIBLE (general builder guardrail) |
| supplementary-files-summary.md | 518 | 60% pre-build, 70% post-build | YES |

**Verdict:** CONSISTENT. The 60%/50%/70% graduated values are used correctly in context. The PA skill's 60% is a general builder guardrail, compatible with the graduated scheme.

---

### TC-02: Header proportion gate
**Authoritative value:** 20% warning gate, 25% hard abort

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 12 | 20% warning gate, 25% hard abort | YES (authoritative) |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 335 | SC-05 header <= 20% of first viewport (288px) | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 645 | SC-05: <= 288px. Hard fail: > 360px | YES (288px = 20% of 1440px, 360px = 25% of 1440px) |
| 03-extraction-gates-risks.md | 33 | headerRatio <= 25% AND content visible | COMPATIBLE (uses abort threshold) |
| E1-enforcement-architecture.md | 353 | Covered by header ratio (SC-05) | YES (reference only) |
| PA SKILL.md | 191 | PA-39: header-to-content proportion (qualitative question) | COMPATIBLE (PA asks perceptual question, no specific threshold) |

**Not found in:** design-system/compositional-core/, ~/.claude/skills/tension-composition/

**Verdict:** CONSISTENT. The 20%/25% split is used correctly. PA-39 is a qualitative question (appropriate for perceptual audit -- auditors should not know the specific threshold).

---

### TC-03: Review passes
**Authoritative value:** 5 passes

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 13 | 5 passes | YES (authoritative) |
| 18-UNIFIED-ACTION-PLAN.md | 20, 66, 543, 554 | 5 passes | YES |
| 17-no-compromise-pipeline.md | 37, 231, 266, 575, 802-803 | 5 passes | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 646 | 5 passes | YES |
| 12-gap-analysis.md | 382 | 5-pass (most detailed) | YES |
| S4-metacognitive-dimensions.md | 197, 233, 284, 410 | 5 passes | YES |
| 06-extraction-pipeline-synthesis.md | 147 | 5 passes | YES |

**Not found in:** design-system/compositional-core/, ~/.claude/skills/

**Verdict:** CONSISTENT. All references use "5 passes" uniformly. No conflicting values found.

---

### TC-04: Mechanism count
**Authoritative value:** Target 12-14, hard cap 16

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 14 | Target 12-14, hard cap 16 | YES (authoritative) |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 647 | Target: 12-14. Hard cap: 16 | YES |
| 12-gap-analysis.md | 383 | Target 12-14, hard cap 16 | YES |
| 18-UNIFIED-ACTION-PLAN.md | 151, 167, 271, 389, 511 | Cap <= 16, 12-14 recommended | YES |
| mechanism-catalog.md | 1061 | Ceiling: Deploy 12-15 | INTENTIONAL DIVERGENCE |
| mechanism-catalog.md | 1062 | Flagship: Deploy 16-18 | INTENTIONAL DIVERGENCE |
| mechanism-combinations.md | 380 | Ceiling: 12-15 total | INTENTIONAL DIVERGENCE |
| mechanism-combinations.md | 386 | Flagship: 16-18 total | INTENTIONAL DIVERGENCE |
| tension-composition SKILL.md | 83 | 12-15 (Ceiling), 16-18 (Flagship) | INTENTIONAL DIVERGENCE |
| tension-composition SKILL.md | 162 | Natural mechanism count lands at 12-15 | INTENTIONAL DIVERGENCE |
| tension-composition SKILL.md | 738 | 12-14 VIABLE METAPHOR (scoring rubric) | YES (different context: metaphor scoring) |

**Analysis of "intentional divergence":**

The design system files (mechanism-catalog.md, mechanism-combinations.md, tension-composition SKILL.md) describe NATURAL LANDING ZONES for each tier -- what EMERGES when content-mechanism fit is optimized. These are DESCRIPTIVE ranges (12-15 for Ceiling, 16-18 for Flagship).

TC-04's "Target 12-14, hard cap 16" is a FLAGSHIP EXECUTION TARGET -- a deliberate constraint informed by diminishing returns data and constraint pressure theory. It intentionally targets the LOWER END of the Flagship natural range.

These are COMPATIBLE concepts:
- Tier model says Flagship naturally produces 16-18
- Flagship execution target says aim for 12-14 (constraint pressure improves quality), never exceed 16
- The hard cap at 16 is BELOW the tier's natural maximum (18), which is the whole point of constraint pressure

**Verdict:** INTENTIONAL DIVERGENCE -- NOT an inconsistency. No edit required. The tier model describes what emerges; the execution target describes what to aim for. Editing the tier model to match the execution target would be incorrect (the tier model is descriptive, the target is prescriptive).

---

### TC-05: Prompt length
**Authoritative value:** 240 lines total, builder sees 55-80

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 15 | 240 lines total, builder sees 55-80 lines | YES (authoritative) |
| THRESHOLD-REGISTRY.md | 47 | Total prompt lines: <= 240 | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 648, 703, 753 | 240 total, builder ~55-80 | YES |
| 08-metacognitive-checkpoints.md | 93 | Prompt exceeds 200 lines = compress | DIFFERENT CONTEXT |
| 18-UNIFIED-ACTION-PLAN.md | 554 | ~240 line prompt | YES |

**Note on metacognitive-checkpoints.md line 93:** This references a 200-line threshold from metacognitive analysis C2. This is a DIFFERENT concept -- the metacognitive analysis found that builder compliance degrades beyond ~200 lines, which INFORMED the 240-line total decision (where the builder sees only 55-80 lines, well under 200). Not an inconsistency.

**Not found in:** design-system/compositional-core/, ~/.claude/skills/

**Verdict:** CONSISTENT. No conflicting values found.

---

### TC-06: Communication mandates
**Authoritative value:** Both deliverable file + SendMessage required

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 16 | Both deliverable file + SendMessage required | YES (authoritative) |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 649 | Deliverables = substance, Messages = enforcement | YES |
| 12-gap-analysis.md | 385 | Use BOTH. CM-19 deliverable + CM-13 message count | YES |
| 06-communication-protocol.md | 484 | Test for when SendMessage was required | YES |
| V1-nuance-recovery-01-07.md | 634 | Test for SendMessage requirement | YES |

**Not found in:** design-system/compositional-core/, ~/.claude/skills/

**Verdict:** CONSISTENT. "Both required" is uniformly used. This threshold applies to flagship execution protocol, not to the design system or skills (which are agnostic to agent communication).

---

### TC-07: Max void
**Authoritative value:** 2160px (1.5 viewports at 1440px)

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 17 | 2160px (1.5 viewports at 1440px) | YES (authoritative) |
| 18-UNIFIED-ACTION-PLAN.md | 128 | SC-02: <= 1.5 viewport heights (2,160px) | YES |
| 18-UNIFIED-ACTION-PLAN.md | 373 | Max contiguous void <= 2,160px | YES |
| 18-UNIFIED-ACTION-PLAN.md | 507 | <= 1620px | **DISCREPANCY** |
| 07-kill-criteria.md | 205, 207, 208, 283, 741 | <= 1620px (1.5 x 1080px) | **DISCREPANCY** |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 335 | SC-02 max contiguous void <= 2160px | YES |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 650 | Uses 2160px (1.5 viewports at 1440px) | YES |
| PA SKILL.md | 356 | 1.5 viewport-heights (at 1440px) | YES (implies 2160px) |
| 12-gap-analysis.md | 386 | Use 2160px (1.5 viewports) | YES |
| V1-nuance-recovery-01-07.md | 690-691 | Documents the 1620 vs 2160 discrepancy | DOCUMENTED |
| V3-nuance-recovery-15-21.md | 250 | Documents SP-02 (1620) vs SC-02 (2160) discrepancy | DOCUMENTED |
| supplementary-files-summary.md | 309 | Confirms discrepancy, must reconcile | DOCUMENTED |

**Analysis of discrepancy:**

The 1620px value appears in:
- `07-kill-criteria.md` SP-02 (1620px = 1.5 x 1080px viewport)
- `18-UNIFIED-ACTION-PLAN.md` line 507 (Pass 1 SP-02 table)
- `06-extraction-pipeline-synthesis.md` line 699 (SP-02)

The 2160px value appears in:
- THRESHOLD-REGISTRY.md (authoritative)
- 13-MASTER-PRE-FLIGHT-CHECKLIST.md (SC-02)
- 18-UNIFIED-ACTION-PLAN.md lines 128, 373 (SC-02)

The discrepancy was IDENTIFIED and DOCUMENTED in 3 separate nuance recovery files:
- V1-nuance-recovery: "These are DIFFERENT thresholds in different documents. This is a DISCREPANCY."
- V3-nuance-recovery: "SP-02 (Max void) threshold is <= 1620px... SC-02 threshold is <= 2160px"
- supplementary-files-summary: "Void threshold discrepancy confirmed"

The MASTER-PRE-FLIGHT-CHECKLIST resolved this at line 650: "SC-02: 2160px. Skeleton: 1620px." The 1620px was retained as a STRICTER early threshold for skeleton stage, while 2160px is the authoritative gate threshold.

**Verdict:** KNOWN DISCREPANCY, DOCUMENTED AND RESOLVED. The 1620px in kill-criteria.md is a stricter skeleton-stage threshold; 2160px is the final gate threshold. Both are in ephemeral files (reference docs), NOT in design-system/compositional-core/ or skills. No edit required -- the resolution is documented in the pre-flight checklist.

---

### TC-08: Constraint pressure experiment
**Authoritative value:** HIGH priority, NOT BLOCKING

**References found:**

| File | Line(s) | Value Used | Consistent? |
|------|---------|------------|-------------|
| THRESHOLD-REGISTRY.md | 18 | HIGH priority, NOT BLOCKING | YES (authoritative) |
| 13-MASTER-PRE-FLIGHT-CHECKLIST.md | 651 | HIGH, not BLOCKING. Run if time permits | YES |
| 12-gap-analysis.md | 387 | Label HIGH, not BLOCKING. Run if time permits | YES |

**Not found in:** design-system/compositional-core/, ~/.claude/skills/

**Verdict:** CONSISTENT. All references agree: HIGH priority but NOT BLOCKING for flagship.

---

## Edits Made

**NONE.** No edits were required. All inconsistencies found were either:
1. **Documented intentional divergences** (TC-04: tier model vs. execution target)
2. **Known, documented, and resolved discrepancies** (TC-07: 1620px skeleton vs. 2160px final)
3. **Different-context values** (TC-05: 200-line metacognitive finding vs. 240-line total)

---

## Files Searched

### design-system/compositional-core/
- grammar/mechanism-catalog.md (TC-04 tier values found)
- grammar/mechanism-combinations.md (TC-04 tier values found)
- vocabulary/tokens.css (TC-07 spacing maximums header only)
- identity/prohibitions.md (no threshold references)
- guidelines/semantic-rules.md (no threshold references)
- case-studies/*.md (no threshold references)
- components/*.md (no threshold references)

### ephemeral/flagship-preparation/
- _checkpoint/THRESHOLD-REGISTRY.md (authoritative source)
- _pre-flight/12-gap-analysis.md (resolution source)
- _pre-flight/13-MASTER-PRE-FLIGHT-CHECKLIST.md (resolution documentation)
- 18-UNIFIED-ACTION-PLAN.md (pipeline values)
- 07-kill-criteria.md (TC-07 1620px discrepancy)
- 08-metacognitive-checkpoints.md (TC-01, TC-05 references)
- 09-adversarial-premortem.md (TC-02, TC-08 references)
- 17-no-compromise-pipeline.md (TC-03 references)
- 06-communication-protocol.md (TC-06 references)
- 03-spatial-confidence-gate.md (TC-01 reference)
- _pre-flight/V1-nuance-recovery-01-07.md (TC-07 discrepancy documented)
- _pre-flight/V3-nuance-recovery-15-21.md (TC-07 discrepancy documented)
- _pre-flight/03-extraction-gates-risks.md (TC-02, TC-07 references)
- _pre-flight/E1-enforcement-architecture.md (TC-02 reference)
- _checkpoint/supplementary-files-summary.md (TC-07 discrepancy confirmed)
- Multiple other files (01, 02, 05, 10, 11, 12, 15, 16, 20)

### ephemeral/ceiling-preparation/
- SKILL-ENRICHMENT-AUDIT.md (TC-04 mechanism count references)
- VERBIAGE-ANALYSIS.md (TC-04 mechanism count analysis)
- CEILING-PREPARATION-BRIEF.md (TC-04 tier model)
- MODIFICATION-INVENTORY.md (TC-04 references)
- TIER-COMPARISON-MATRIX.md (TC-04 reference)
- RICHNESS-COMPARISON.md (TC-04 mechanism count)
- CONTAINER-WIDTH-INVESTIGATION.md (content-to-viewport ratio, not TC-01)
- INFORMATION-ISOLATION-MATRIX.md (mechanism count isolation)
- PROMPT-SLICING-STRATEGY.md (mechanism count isolation)
- AUXILIARY-PRE-CEILING-AUDIT.md (mechanism count references)
- PIPELINE-REPRODUCIBILITY.md (mechanism count)
- PROVENANCE-RICHNESS-METACOGNITION.md (mechanism count)

### ~/.claude/skills/
- tension-composition/SKILL.md (TC-04 tier model, natural landing zones)
- perceptual-auditing/SKILL.md (TC-01 content ratio, TC-07 void guardrail, TC-02 PA-39)

### ephemeral/session-insights/
- 14-master-execution-prompt.md (TC-04 mechanism count references)
- 17-conversation-clarifications.md (TC-04 mechanism count clarification)
- 19-core-staleness-audit.md (TC-04 mechanism count)
- Multiple other files (20, 21, 25)

---

## Level 2 Metacognitive Observations

### 1. The TC-04 Divergence Is the Most Nuanced

TC-04 is the only threshold where the "conflict" is actually a DESIGN FEATURE. The tier model (12-15 Ceiling, 16-18 Flagship) describes what emerges naturally; the flagship execution target (12-14, cap 16) is an intentional constraint informed by diminishing-returns research. Editing the tier model to match the execution target would HARM the design system by making tier descriptions prescriptive instead of descriptive. The original gap analysis explicitly resolved this conflict: "Target 12-14, hard cap 16. Supported by constraint pressure + diminishing returns."

### 2. TC-07 Is a Known Issue with a Documented Resolution

The 1620px vs 2160px discrepancy was identified by THREE independent analysis agents (V1, V3, supplementary-files-summary). The pre-flight checklist resolved it as a graduated threshold: 1620px for skeleton stage (stricter), 2160px for final gate. However, the kill-criteria.md (07-kill-criteria.md) still uses 1620px without noting the graduation. This is acceptable because:
- It is an ephemeral reference document, not a design system file
- The pre-flight checklist (which is the execution authority) documents both values
- The THRESHOLD-REGISTRY (single source of truth) uses 2160px

### 3. Clean Separation Between Design System and Execution

The 8 thresholds divide cleanly:
- **Design system files** (compositional-core/, skills/): Only TC-01 (content ratio general guardrail) and TC-04 (tier model) appear. Both are DESCRIPTIVE references, not prescriptive targets.
- **Ephemeral preparation files** (flagship-preparation/): All 8 thresholds appear as PRESCRIPTIVE execution targets.

This is architecturally correct. The design system describes vocabulary and constraints. The execution prompt applies specific targets. No cross-contamination detected.

### 4. No Edits Were Needed

I initially expected to find at least one inconsistency requiring an edit in design-system/ or skills/. Finding zero required edits suggests either:
- (a) The enrichment workers and auditors who preceded me already corrected these
- (b) The original gap analysis resolution was thorough
- (c) The design system files were never updated with flagship-specific values (correct -- they should remain descriptive)

All three factors likely contributed. The system is clean.

---

## Conclusion

All 8 thresholds are consistent or have documented, intentional divergences. No edits were required to any file. The threshold resolution from the gap analysis has been faithfully propagated through the pre-flight checklist and unified action plan. The design system files maintain their descriptive tier model values independently of the flagship's prescriptive execution targets, which is the correct architectural separation.
