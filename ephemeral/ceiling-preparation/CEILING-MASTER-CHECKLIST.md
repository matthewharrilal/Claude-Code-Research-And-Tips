# Ceiling-Tier Master Checklist

**Date:** 2026-02-16
**Purpose:** Comprehensive checklist serving 3 purposes: (A) Plan verification, (B) Execution success, (C) Retrospective integration
**Architect:** checklist-architect
**Sources:** Master retrospective (09-MASTER-RETROSPECTIVE.md), Unified Action Plan, Pre-Ceiling Checklist, Failure Modes (first 200 lines), Process Metacognition (first 200 lines), Verdict (first 300 lines)

---

## Overview

**Total items:** 62 (21 Plan Verification + 25 Execution Success + 16 Retrospective Integration)

**Philosophy:** Every item is BINARY (YES/NO or PASS/FAIL). Ambiguous items include explicit acceptance criteria. This is NOT a "did you try" list — it's a "did you achieve" list.

**Top 3 items most likely to be missed:**
1. **Inter-agent communication actually happens (B-01)** — Agents MUST use SendMessage, not just have capability. Middle-tier had zero messaging; verify Ceiling has 5-10 messages minimum.
2. **Landmark completeness gate catches missing elements (A-03)** — Must verify BEFORE audits start. Middle-tier footer was planned but not built.
3. **Novelty evaluation is truly blind (B-18)** — Evaluator must NOT know which page is experiment. Middle-tier evaluator knew hypothesis.

---

## SECTION A: PLAN VERIFICATION
*Does the execution prompt include everything Middle-tier taught us?*

### A-01: M1 Applied to Skill Permanently
**Binary check:** `~/.claude/skills/tension-composition/SKILL.md` contains ZERO instances of "sample 2-4 mechanisms"

**Acceptance criteria:**
- [ ] Phase 0D Tier Classification includes per-category minimum table (S:1+, H:1+, C:1+, D:1+, N:1+)
- [ ] Phase 4.0 Mechanism Extraction includes per-category deployment mandate
- [ ] Search result for "sample 2-4" returns zero matches
- [ ] Skill version incremented to indicate M1 integration

**Why it matters:** 11 research agents + Middle experiment validated this. THE most concrete output of Middle-tier. Raises universal floor permanently.

**Source:** Master Retro IX.1, Unified Action M-01, Pre-Ceiling #2

---

### A-02: Inter-Agent Communication Protocol Defined
**Binary check:** Master execution prompt includes SendMessage capability section

**Acceptance criteria:**
- [ ] Builder prompt includes "Ask planner clarifying questions if plan specifications are ambiguous"
- [ ] Auditor prompt includes "Flag issues mid-process to team-lead before proceeding"
- [ ] Team-lead prompt includes "Request targeted fixes from builder if gaps detected"
- [ ] Communication protocol distinguishes clarification (builder→planner) from issue flagging (auditor→team-lead) from iteration (team-lead→builder)

**Why it matters:** CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT). Missing footer directly traced to no way to ask "what does Footer Mirror look like?"

**Source:** Master Retro Finding 9, Unified Action M-02, Pre-Ceiling #1

---

### A-03: Landmark Completeness Gate Exists
**Binary check:** Execution plan includes Phase 2.5 gate between build and audit

**Acceptance criteria:**
- [ ] Gate is BLOCKING (team-lead cannot proceed until verification passes)
- [ ] Verification checks: header exists (if plan specifies), footer exists (if plan specifies), section count matches plan
- [ ] If gate fails, team-lead requests builder to add missing landmarks
- [ ] Gate runs BEFORE launching any auditors

**Why it matters:** Prevents WOULD-NOT-SHIP footer-class defects. Costs 2 minutes, catches severity-1 issues.

**Source:** Master Retro Finding 2, Unified Action M-03, Pre-Ceiling #3

---

### A-04: Builder Self-Check Requirements Documented
**Binary check:** Builder prompt includes pre-file-write verification checklist

**Acceptance criteria:**
- [ ] CPL verification formula included: `(container-content-width) / (font-size-px) / 0.6 = CPL`
- [ ] Token compliance scan method included: count var() refs, count raw hex/px, calculate ratio
- [ ] Approved raw value contexts listed (border-width: 1px|3px|4px, line-height unitless)
- [ ] Self-check is BEFORE file write (builder cannot proceed if checks fail)

**Why it matters:** Middle had 3/5 defects catchable by builder before audit. 0/3 judgment rules met because builder had no verification method. Binary self-checks achieve 100% compliance.

**Source:** Master Retro IX.3-4, Unified Action M-04, Pre-Ceiling #4

---

### A-05: Ceiling Per-Category Minimums Established
**Binary check:** Execution plan includes per-category minimum table for Ceiling tier

**Acceptance criteria:**
- [ ] Minimums defined: S:2+, H:2+, C:3+, D:2+, N:2+
- [ ] Expected natural landing documented: 11-15 mechanisms total
- [ ] Rationale documented: Ceiling requires richer vocabulary than Middle's 1+ per category
- [ ] Planner prompt includes these minimums in mechanism selection criteria

**Why it matters:** Middle deployed 12 with 1+ per category. Ceiling needs higher thresholds for richer vocabulary.

**Source:** Master Retro X Phase 1, Unified Action M-05, Pre-Ceiling #5

---

### A-06: Mechanism Interaction Requirement Defined
**Binary check:** Planner prompt requires documentation of mechanism pairs that REINFORCE each other

**Acceptance criteria:**
- [ ] Requirement: "For at least 3 mechanism pairs, document how they REINFORCE each other (multi-channel encoding of same dimension)"
- [ ] Build plan template includes MECHANISM INTERACTIONS section
- [ ] Example provided: border-weight gradient + color encoding both express security criticality
- [ ] Interaction requirement is SEPARATE from deployment count (can deploy 12 mechanisms but only 3 pairs interact)

**Why it matters:** Closes gap between "applied correctly" and "felt through." Middle had mechanisms coexisting independently; Ceiling needs them interacting.

**Source:** Master Retro Finding 1, Unified Action M-06, Pre-Ceiling #6

---

### A-07: Blind Novelty Evaluation Protocol Designed
**Binary check:** Novelty evaluator prompt presents pages without labels

**Acceptance criteria:**
- [ ] Protocol: "You will receive 3 unlabeled pages (A, B, C). Identify which is structurally newest."
- [ ] Pages presented in randomized order
- [ ] Evaluator receives zero context on experiment goals before evaluation
- [ ] Only AFTER blind assessment complete, evaluator receives labels and context

**Why it matters:** Middle novelty (3/3) assessed by evaluator who KNEW hypothesis. Confirmation bias risk. External validity weak.

**Source:** Master Retro Finding 7, Unified Action M-08, Pre-Ceiling #7

---

### A-08: Dual Perceptual Auditor Protocol Defined
**Binary check:** Execution plan includes TWO independent perceptual auditor agents

**Acceptance criteria:**
- [ ] Both auditors receive identical zero-context prompts
- [ ] Both audit in parallel (no communication until both complete)
- [ ] Reconciliation protocol documented: agreement = high confidence, disagreement = flag
- [ ] Team-lead reconciles findings from both audits

**Why it matters:** Single-evaluator perceptual audit creates false confidence. Dual evaluation with reconciliation improves rigor.

**Source:** Master Retro Finding 7, Unified Action M-09, Pre-Ceiling #8

---

### A-09: Timing Re-Estimated Using Parallel Agent Model
**Binary check:** Execution plan includes realistic timing estimate for Ceiling

**Acceptance criteria:**
- [ ] Estimate uses parallel agent model: ~4-5 min/agent x 10-12 agents x 3-4 waves = 45-100 min total
- [ ] Includes metaphor derivation overhead (Phases 1-3 may not parallelize cleanly)
- [ ] Includes inter-agent communication overhead (SendMessage time: +10-20 min)
- [ ] Cost-benefit documented: Ceiling ~60-90 min vs Middle ~35 min = 2-3x time for richer output

**Why it matters:** Middle took 35 min vs 70-100 min predicted (8-11x gap). Planning model estimates sequential human time; agent teams execute parallel.

**Source:** Master Retro Finding 3, Unified Action M-09, Pre-Ceiling #9

---

### A-10: Programmatic Audit Generated FROM Build Plan
**Binary check:** Programmatic auditor prompt extracts checklist from build plan

**Acceptance criteria:**
- [ ] Auditor extracts all mechanism names from build plan Section 3
- [ ] Auditor generates verification checklist: "Mechanism #1 Border-Weight: Check computed border-width values"
- [ ] Auditor verifies all planned landmarks exist (header, footer, all named sections)
- [ ] Auditor reports: PLANNED vs DEPLOYED vs MISSING

**Why it matters:** Middle programmatic audit checked generic criteria but didn't verify ALL 12 planned mechanisms or that footer existed.

**Source:** Unified Action M-10, Pre-Ceiling #10

---

### A-11: Builder Context Decision Documented
**Binary check:** Builder prompt specifies whether builder sees catalog entries or just mechanism names

**Acceptance criteria:**
- [ ] Decision documented with rationale
- [ ] If (A) names only: builder prompt includes "Ask planner via SendMessage if mechanism unclear"
- [ ] If (B) full entries: mechanism catalog excerpts added to builder prompt slice
- [ ] Decision addresses footer bug root cause (builder didn't know what "Footer Mirror" means)

**Why it matters:** Footer suggests builder didn't understand mechanism name without catalog entry. Determines builder prompt design.

**Source:** Master Retro XII.2, Unified Action M-11, Pre-Ceiling #11

---

### A-12: Rhythm Variation Requirement Added
**Binary check:** Skill Phase 4.2B includes 3-transition minimum

**Acceptance criteria:**
- [ ] Binary rule in skill: "Page must include >= 3 DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING)"
- [ ] Planner must document transition types in build plan
- [ ] Build plan template includes TRANSITION TABLE section
- [ ] Minimum 3 distinct types across full-page sequence

**Why it matters:** THE highest-leverage perceptual improvement. Middle had metronomic rhythm; Ceiling needs variation.

**Source:** Master Retro V.5, Unified Action S-01, Pre-Ceiling #12

---

### A-13: Heading Spacing Ratio Is Binary Rule
**Binary check:** Skill guardrails table includes 1.5:1 minimum

**Acceptance criteria:**
- [ ] Guardrails table states: "Heading spacing ratio: >= 1.5:1 above/below for h2/h3"
- [ ] Programmatic audit measures COMPUTED margin-top and margin-bottom for each heading
- [ ] Formula documented: margin-top / margin-bottom >= 1.5 for ALL h2/h3
- [ ] Builder prompt includes margin-collapse awareness

**Why it matters:** Binary rules achieve 100% compliance; judgment rules achieve 0%. Middle violated this as judgment call.

**Source:** Master Retro V.4, Unified Action S-02, Pre-Ceiling #13

---

### A-14: Measurement Precision Standards Defined
**Binary check:** Verdict template includes MARGIN column for all criteria

**Acceptance criteria:**
- [ ] Format specified: "PA-05b: PASS at 2.3x (threshold 2.0x, margin +0.3x)"
- [ ] Programmatic audit reports exact measured values, not approximate
- [ ] Perceptual audit distinguishes "clearly passes" from "technically passes" from "barely passes"
- [ ] All threshold comparisons report actual values + margins

**Why it matters:** Middle PA-05b passed at exactly 2.0x (zero margin). "Technically passes" treated as "clearly passes."

**Source:** Master Retro Finding 7, Unified Action S-03, Pre-Ceiling #17

---

### A-15: Weight Distribution Requirement Defined
**Binary check:** Perceptual audit includes weight distribution question

**Acceptance criteria:**
- [ ] PA question list includes: "Are there >= 2 visual focal points in bottom 50% of page?"
- [ ] Planner must document focal point distribution in build plan
- [ ] Requirement: >= 2 focal points in bottom half to prevent top-heavy composition
- [ ] Acceptance criteria defined for "focal point" (dark header, diagram, callout, etc.)

**Why it matters:** Middle had dark header + diagram (both top half), nothing anchoring bottom half.

**Source:** Master Retro V.6, Unified Action S-04, Pre-Ceiling #18

---

### A-16: Two-Dimension Designed Model Documented
**Binary check:** Tier methodology includes vocabulary fluency vs compositional fluency distinction

**Acceptance criteria:**
- [ ] Two-dimension table documented in tier model
- [ ] Middle tier = vocabulary fluency (lookup: content → mechanism)
- [ ] Ceiling tier = compositional fluency (derivation: metaphor → mechanism → expression)
- [ ] Flagship tier = multi-pattern composition (multiple metaphors interleaved)
- [ ] "Designed" reframed as vocabulary threshold, not quality spectrum

**Why it matters:** Explains why Middle passes PA-05 but feels "stiff." Reframes tier progression.

**Source:** Master Retro Finding 4, Unified Action S-07, Pre-Ceiling #20

---

### A-17: Fresh-Eyes Zero-Context Protocol Maintained
**Binary check:** Perceptual auditor prompt includes ZERO design system context

**Acceptance criteria:**
- [ ] Auditor receives: screenshots only (1440px + 768px), PA question list, rating scale
- [ ] Auditor does NOT receive: mechanism names, pattern names, tier model, expected richness, build plan, catalog
- [ ] Prompt slice < 300 lines, mostly PA question definitions
- [ ] Zero design context confirmed by prompt review

**Why it matters:** Fresh eyes find what loaded agents rationalize. Context-loaded agents would have rationalized missing footer.

**Source:** Master Retro Finding 5, Unified Action S-08, Pre-Ceiling #21

---

### A-18: Metaphor Derivation Phases Defined
**Binary check:** Execution plan includes Phases 1-3 for metaphor work

**Acceptance criteria:**
- [ ] Phase 1: Tension extraction from content
- [ ] Phase 2: Metaphor derivation from tensions
- [ ] Phase 3: Semantic dimension mapping (metaphor → dimensions)
- [ ] Metaphor resonance gate at Phase 1→2: authenticity, cross-domain, multi-dimensional (all 3 must pass)
- [ ] Deliverable: 01-metaphor-derivation.md

**Why it matters:** Ceiling's PRIMARY differentiator from Middle. Tests whether metaphor creates compositional fluency.

**Source:** Unified Action DC-01

---

### A-19: Mechanism Selection Through Metaphor Lens Defined
**Binary check:** Planner prompt includes metaphor-driven selection process

**Acceptance criteria:**
- [ ] Selection process: metaphor dimension → multiple mechanisms encoding same dimension (1:many derivation)
- [ ] Different from Middle's lookup: content feature → mechanism (1:1)
- [ ] Each semantic dimension maps to 2-4 mechanisms in different CSS channels
- [ ] Planner documents HOW metaphor informs mechanism choice

**Why it matters:** Ceiling tests derivation vs lookup. This is the composition quality lever.

**Source:** Unified Action DC-02

---

### A-20: 4-Scale Fractal Coherence Defined
**Binary check:** Execution plan requires 4 scales (raised from Middle's 2)

**Acceptance criteria:**
- [ ] Scales: Navigation + Page + Section + Component (4 scales, 6 consistency pairs)
- [ ] Hierarchical coherence check: Navigation → Page → Section → Component must be consistent chain
- [ ] Build plan must document pattern expression at all 4 scales
- [ ] Fractal table structure includes all 4 scales with evidence

**Why it matters:** Raises complexity requirement from Middle. Tests whether 4-scale coherence is achievable.

**Source:** Unified Action DC-03

---

### A-21: File Architecture Matches Expected Output
**Binary check:** Execution plan specifies all expected output files

**Acceptance criteria:**
- [ ] 01-metaphor-derivation.md (metaphor-agent, Phase 1-3)
- [ ] 02-build-plan.md (planner, Phase 4)
- [ ] ceiling-page.html (builder, Phase 5)
- [ ] 03-programmatic-audit.md (programmatic-auditor, Phase 6a)
- [ ] 04a-perceptual-audit.md (perceptual-auditor-1, Phase 6b)
- [ ] 04b-perceptual-audit.md (perceptual-auditor-2, Phase 6b)
- [ ] 05-comparison-report.md (comparative-auditor, Phase 7a)
- [ ] 06-novelty-assessment.md (novelty-evaluator, Phase 7b)
- [ ] 07-VERDICT.md (verdict-synthesizer, Phase 8)

**Why it matters:** Ensures completeness. Missing files = incomplete experiment.

**Source:** Master Retro XI File Architecture

---

## SECTION B: EXECUTION SUCCESS
*Did Ceiling succeed? Are all success criteria met?*

### B-01: Inter-Agent Communication Actually Happened
**Binary check:** Message count >= 5 (not zero like Middle-tier)

**Acceptance criteria:**
- [ ] Builder sent >= 1 message to planner (clarifying question)
- [ ] Auditor sent >= 1 message to team-lead (issue flagging)
- [ ] Team-lead sent >= 1 message to builder (iteration request)
- [ ] Total messages >= 5 (demonstrates actual communication, not just capability)
- [ ] Messages are substantive (clarification/issues/iteration), not status updates

**Why it matters:** THE most likely execution gap. Agents may have SendMessage capability but still work in isolation. Middle had zero messages.

**Source:** Master Retro Finding 9, Process Metacognition 1.1

---

### B-02: Landmark Completeness Gate Triggered and Passed
**Binary check:** Team-lead verification log shows gate executed

**Acceptance criteria:**
- [ ] Team-lead verified header exists (if plan specified)
- [ ] Team-lead verified footer exists (if plan specified)
- [ ] Team-lead verified section count matches plan
- [ ] Verification happened BEFORE launching auditors
- [ ] If verification failed, team-lead requested builder fix (documented in messages)

**Why it matters:** Gate exists in plan (A-03) but did it RUN? Middle had footer in plan but not in output.

**Source:** Master Retro Finding 2, Failure Modes #1

---

### B-03: Builder Self-Check Executed Before File Write
**Binary check:** Builder output includes self-check confirmation

**Acceptance criteria:**
- [ ] Builder calculated CPL using formula (45-80 verified)
- [ ] Builder scanned CSS for token compliance (>= 80% verified)
- [ ] Builder verified all landmarks present before writing file
- [ ] Builder verified heading spacing ratio >= 1.5:1
- [ ] Self-check results documented in builder output or messages

**Why it matters:** Self-check exists in prompt (A-04) but did builder RUN it? Middle builder had no verification.

**Source:** Master Retro IX.3-4, Failure Modes #2-3

---

### B-04: PA-05 = 4/4 (Designed Threshold Met)
**Binary check:** Perceptual audit reports all 4 sub-criteria PASS

**Acceptance criteria:**
- [ ] PA-05a: >= 2 non-default layout elements at 1440px
- [ ] PA-05b: >= 2.0x padding range ratio at 1440px
- [ ] PA-05c: Visual hierarchy visible under blur test
- [ ] PA-05d: >= 15% compositional CSS (measured programmatically, not estimated)
- [ ] All 4 criteria verified at BOTH 1440px and 768px viewports

**Why it matters:** Designed threshold. Ceiling must meet same standard as Middle.

**Source:** Verdict E2.1

---

### B-05: D3 >= 2/3 (Novelty Signals Present)
**Binary check:** Novelty assessment reports >= 2 of 3 signals

**Acceptance criteria:**
- [ ] D3.1 (Structural Fingerprint): NOVEL or DERIVATIVE
- [ ] D3.2 (CSS Value Overlap): < 30% overlap with reference pages
- [ ] D3.3 (Mechanism Combination): >= 1 unique combination not in references
- [ ] At least 2 of 3 signals indicate NOVEL
- [ ] Blind evaluation protocol confirmed (evaluator didn't know which page was experiment)

**Why it matters:** Novelty is SUCCESS criterion. Ceiling should be novel (or deliberately derivative if testing metaphor constraint).

**Source:** Verdict E2.5

---

### B-06: Better Than Middle-Tier
**Binary check:** Comparison report identifies >= 3 specific perceptual improvements over Middle

**Acceptance criteria:**
- [ ] Comparison uses SAME content (SYSTEM documentation) for clean tier comparison
- [ ] >= 3 observations where Ceiling shows perceptual improvement over Middle
- [ ] Improvements documented with screenshots and CSS evidence
- [ ] Comparative auditor is fresh-eyes (didn't build either page)

**Why it matters:** Ceiling's value proposition. If Ceiling doesn't exceed Middle, tier model is invalid.

**Source:** Verdict E2.2 (adapted for Ceiling vs Middle instead of Middle vs Variant B)

---

### B-07: 5-Category Coverage Achieved
**Binary check:** Build plan shows all 5 mechanism categories represented

**Acceptance criteria:**
- [ ] Spatial: >= 2 mechanisms deployed (exceeded Middle's 1+)
- [ ] Hierarchy: >= 2 mechanisms deployed
- [ ] Component: >= 3 mechanisms deployed
- [ ] Depth/Emphasis: >= 2 mechanisms deployed
- [ ] Structure/Nav: >= 2 mechanisms deployed
- [ ] Total: 11-15 mechanisms (natural landing zone for Ceiling)

**Why it matters:** Category coverage ensures vocabulary breadth. Ceiling has higher minimums than Middle.

**Source:** Verdict E2.4, A-05

---

### B-08: Container Width = 940-960px
**Binary check:** Programmatic audit measures computed max-width

**Acceptance criteria:**
- [ ] Computed max-width: 940px <= value <= 960px
- [ ] Programmatic audit reports exact value
- [ ] Container discipline maintained (no violations)

**Why it matters:** NON-NEGOTIABLE soul constraint. Phase D's primary failure mode.

**Source:** Verdict E2.6

---

### B-09: Soul Compliance = 7/7
**Binary check:** Programmatic audit verifies all 7 soul constraints

**Acceptance criteria:**
- [ ] border-radius: 0 (no rounded corners)
- [ ] box-shadow: none (no shadows)
- [ ] No pure black (#000000)
- [ ] No pure white (#FFFFFF)
- [ ] Typography trinity (font-family, font-size, line-height all declared on body)
- [ ] All h3 italic (font-style: italic)
- [ ] No gradients (linear-gradient, radial-gradient)
- [ ] 7/7 verified by programmatic check

**Why it matters:** Identity constraints. Absolute requirements.

**Source:** Verdict E2.7

---

### B-10: Mechanism Interaction Documented
**Binary check:** Build plan Section includes MECHANISM INTERACTIONS table

**Acceptance criteria:**
- [ ] At least 3 mechanism pairs documented
- [ ] For each pair: explains HOW they reinforce each other (multi-channel encoding)
- [ ] Example quality: "Border-weight 4px + Color red both express criticality"
- [ ] Interaction is IMPLEMENTED in HTML (not just planned)

**Why it matters:** Ceiling's composition quality differentiator. Tests mechanism-mechanism coherence.

**Source:** A-06, Master Retro Finding 1

---

### B-11: Rhythm Variation Achieved
**Binary check:** Perceptual audit identifies >= 3 distinct transition types

**Acceptance criteria:**
- [ ] >= 3 different transition treatments across full-page sequence
- [ ] Transitions identified by PA (not just claimed by builder)
- [ ] Examples: spacing change + zone background change + visual break element
- [ ] No metronomic rhythm (Middle's failure mode avoided)

**Why it matters:** THE highest-leverage perceptual fix from Middle. Tests rhythm requirement.

**Source:** A-12, Master Retro V.5

---

### B-12: Heading Spacing Ratio >= 1.5:1
**Binary check:** Programmatic audit measures computed margins for all headings

**Acceptance criteria:**
- [ ] For all h2 elements: margin-top / margin-bottom >= 1.5
- [ ] For all h3 elements: margin-top / margin-bottom >= 1.5
- [ ] Programmatic measurement (not perceptual judgment)
- [ ] Accounts for margin collapse

**Why it matters:** Binary rule (A-13). Middle violated this; Ceiling should pass.

**Source:** A-13, Master Retro V.4

---

### B-13: Weight Distribution Balanced
**Binary check:** Perceptual audit confirms >= 2 focal points in bottom 50%

**Acceptance criteria:**
- [ ] PA identifies focal points (dark header, diagram, callout, etc.)
- [ ] At least 2 focal points located in bottom half of page
- [ ] Not top-heavy (Middle's failure mode avoided)
- [ ] Perceptual audit explicitly confirms balanced weight distribution

**Why it matters:** Prevents Middle's top-heavy composition. Tests weight requirement.

**Source:** A-15, Master Retro V.6

---

### B-14: CPL Within 45-80 Range
**Binary check:** Programmatic audit measures characters per line at 1440px

**Acceptance criteria:**
- [ ] CPL measurement: 45 <= value <= 80
- [ ] Builder self-checked using formula before file write (B-03 confirms)
- [ ] Not marginal pass (Middle was 82 chars, +2 over spec)
- [ ] Measured at 1440px viewport

**Why it matters:** Middle failed this (82 CPL). Ceiling should pass via self-check.

**Source:** Verdict Defect 1, A-04

---

### B-15: Token Compliance >= 80%
**Binary check:** Programmatic audit calculates var() ratio

**Acceptance criteria:**
- [ ] Token usage: var() / (var() + raw values) >= 80%
- [ ] Builder self-checked before file write (B-03 confirms)
- [ ] Not marginal pass (Middle was 66.5%, -13.5 points below)
- [ ] Approved raw value contexts excluded from count (border-width 1/3/4px OK)

**Why it matters:** Middle failed this (66.5%). Ceiling should pass via self-check gate.

**Source:** Verdict Defect 2, A-04

---

### B-16: No Missing Landmarks (Footer Exists)
**Binary check:** Perceptual audit confirms visual ending

**Acceptance criteria:**
- [ ] If plan specifies footer, HTML includes <footer> element
- [ ] Perceptual audit sees designed conclusion (not "page just ends")
- [ ] Landmark gate (B-02) caught any missing elements before audit
- [ ] No "screens of emptiness" (Middle's WOULD-NOT-SHIP finding avoided)

**Why it matters:** Middle's CRITICAL failure. Ceiling's landmark gate should prevent.

**Source:** Verdict Perception WOULD-NOT-SHIP, Failure Modes #1

---

### B-17: Metaphor Derivation Completed
**Binary check:** 01-metaphor-derivation.md file exists with all required sections

**Acceptance criteria:**
- [ ] Phase 1: Tensions extracted from content (>= 3 tensions documented)
- [ ] Phase 2: Metaphor derived from tensions (1 primary metaphor selected)
- [ ] Phase 3: Semantic dimensions mapped (metaphor → 3-5 dimensions)
- [ ] Metaphor resonance gate passed (authenticity YES, cross-domain YES, multi-dimensional YES)
- [ ] Deliverable complete and coherent

**Why it matters:** Ceiling's PRIMARY differentiator. Tests metaphor derivation capability.

**Source:** A-18, Unified Action DC-01

---

### B-18: Novelty Evaluation Was Blind
**Binary check:** Novelty evaluator output confirms blind protocol

**Acceptance criteria:**
- [ ] Evaluator received 3 unlabeled pages (A, B, C) in randomized order
- [ ] Evaluator had zero context on experiment goals before evaluation
- [ ] Evaluator didn't know which page was "the experiment"
- [ ] Only AFTER blind assessment, labels and context revealed
- [ ] Evaluator confirms: "I did not know which page was newest before evaluation"

**Why it matters:** Middle's evaluator knew hypothesis (confirmation bias). Ceiling must be blind.

**Source:** A-07, Master Retro Finding 7

---

### B-19: Dual Perceptual Audit Reconciled
**Binary check:** Two PA reports exist + reconciliation completed

**Acceptance criteria:**
- [ ] 04a-perceptual-audit.md exists (auditor 1)
- [ ] 04b-perceptual-audit.md exists (auditor 2)
- [ ] Team-lead reconciled findings: agreement = high confidence, disagreement = flagged
- [ ] Both auditors were fresh-eyes (zero design context)
- [ ] Reconciliation results documented in verdict

**Why it matters:** Improves rigor over Middle's single evaluator. Tests dual-audit protocol.

**Source:** A-08, Master Retro Finding 7

---

### B-20: Programmatic Audit Checked ALL Planned Mechanisms
**Binary check:** Programmatic audit reports PLANNED vs DEPLOYED vs MISSING

**Acceptance criteria:**
- [ ] Auditor extracted mechanism names from build plan Section 3
- [ ] Auditor verified EACH planned mechanism is deployed
- [ ] Auditor checked ALL planned landmarks (header, footer, sections)
- [ ] Report format: "Mechanism #1 Border-Weight: DEPLOYED ✓" or "MISSING ✗"
- [ ] Zero planned elements missing (100% deployment)

**Why it matters:** Middle programmatic audit missed footer. Ceiling audit must check everything.

**Source:** A-10, Master Retro Finding 2

---

### B-21: Execution Time Matches Re-Estimate
**Binary check:** Actual wall-clock time is 45-100 minutes (parallel agent model)

**Acceptance criteria:**
- [ ] Time measured from team-lead launch to verdict complete
- [ ] Result: 45-100 min (Ceiling tier estimate from A-09)
- [ ] NOT 150-220 min (old sequential model)
- [ ] Timing includes all phases: metaphor derivation + planning + building + audits + verdict

**Why it matters:** Validates parallel agent model. Middle was 35 min (8-11x faster than sequential estimate).

**Source:** A-09, Master Retro Finding 3

---

### B-22: 4-Scale Fractal Coherence Demonstrated
**Binary check:** Build plan fractal table documents all 4 scales

**Acceptance criteria:**
- [ ] Navigation scale pattern documented
- [ ] Page scale pattern documented
- [ ] Section scale pattern documented
- [ ] Component scale pattern documented
- [ ] Consistency pairs documented: Nav→Page, Page→Section, Section→Component (3 pairs minimum)
- [ ] CSS evidence provided for each scale

**Why it matters:** Ceiling requirement (raised from Middle's 2 scales). Tests 4-scale coherence achievability.

**Source:** A-20, Unified Action DC-03

---

### B-23: PA-05 Margins Reported
**Binary check:** Verdict includes actual values + margins for all criteria

**Acceptance criteria:**
- [ ] PA-05a: exact count (not ">= 2" — e.g., "4 elements")
- [ ] PA-05b: exact ratio + margin (e.g., "2.3x, threshold 2.0x, margin +0.3x")
- [ ] PA-05c: qualitative judgment with confidence level
- [ ] PA-05d: measured percentage (not estimated — e.g., "18.5%")
- [ ] All margins documented (no bare pass/fail)

**Why it matters:** Middle PA-05b passed at exactly 2.0x (zero margin). Ceiling should report margins.

**Source:** A-14, Master Retro Finding 7

---

### B-24: No WOULD-NOT-SHIP Findings
**Binary check:** Perceptual audit Perception Track has zero WOULD-NOT-SHIP items

**Acceptance criteria:**
- [ ] Zero CRITICAL severity findings
- [ ] Zero "major flow issues" (no missing footer, no missing header, no structural incompleteness)
- [ ] Zero "this feels unfinished" observations
- [ ] Perceptual audit ship verdict: "YES" or "YES WITH MINOR RESERVATIONS" (not "YES WITH RESERVATIONS")

**Why it matters:** Middle had 1 WOULD-NOT-SHIP (missing footer). Ceiling should have zero.

**Source:** Verdict Perception Track, Failure Modes #1

---

### B-25: Metaphor Expression Felt Through
**Binary check:** Perceptual audit includes observation about compositional confidence

**Acceptance criteria:**
- [ ] PA includes question about whether page feels "rule-following" or "compositionally confident"
- [ ] PA observes metaphor influence (not explicit metaphor knowledge, but perceptual evidence)
- [ ] Not "professionally stiff" (Middle's quality descriptor)
- [ ] PA notes whether page feels "designed with intent" vs "specifications applied correctly"

**Why it matters:** Tests whether metaphor creates compositional fluency (Ceiling goal) vs vocabulary fluency (Middle achievement).

**Source:** Master Retro Finding 4, Failure Modes #4

---

## SECTION C: RETROSPECTIVE INTEGRATION
*Are we applying what we learned from Middle-tier?*

### C-01: Binary Rules Achieved 100% Compliance
**Binary check:** All binary rules PASS, all judgment rules converted to binary

**Acceptance criteria:**
- [ ] Container width: PASS (binary rule)
- [ ] Soul constraints 7/7: PASS (binary rules)
- [ ] Heading spacing ratio >= 1.5:1: PASS (converted from judgment to binary)
- [ ] Token compliance >= 80%: PASS (converted from judgment to binary via self-check)
- [ ] CPL 45-80: PASS (converted from judgment to binary via formula)
- [ ] Zero judgment rules failed (because zero judgment rules remain)

**Why it matters:** THE meta-lesson from Middle. Binary rules achieve 100% compliance; judgment rules achieve 0%.

**Source:** Process Metacognition 1.5, Master Retro Meta-Lesson 5.1

---

### C-02: Information Loss Between Instances Mitigated
**Binary check:** Builder had clarification mechanism for ambiguous plan elements

**Acceptance criteria:**
- [ ] Builder used SendMessage >= 1 time to ask planner clarifying question
- [ ] Builder did not guess or interpret — asked when uncertain
- [ ] Example: If plan says "Footer Mirror," builder asked "Does mirroring mean same background color as header?"
- [ ] No structural elements missing due to builder not understanding plan

**Why it matters:** Middle's missing footer traced to information loss (builder saw plan but didn't understand "Footer Mirror"). Messaging mitigates.

**Source:** Process Metacognition 1.2, Master Retro Finding 9

---

### C-03: Fresh-Eyes Auditing Found Issues Loaded Agents Miss
**Binary check:** Perceptual audit found >= 1 issue programmatic audit didn't

**Acceptance criteria:**
- [ ] Zero overlap between PA findings and programmatic audit findings
- [ ] PA found perceptual issues (rhythm, weight, flow, atmosphere)
- [ ] Programmatic audit found technical issues (CPL, tokens, container, soul)
- [ ] Complete separation confirms fresh-eyes value

**Why it matters:** Middle showed zero overlap. Confirms fresh-eyes irreplaceable.

**Source:** Process Metacognition 1.4, Master Retro Finding 5

---

### C-04: Flat Topology Scaled to 10-12 Agents
**Binary check:** Ceiling used flat file-bus topology with 10-12 agents

**Acceptance criteria:**
- [ ] Team structure: 1 team-lead + 10-12 workers (no intermediate captains)
- [ ] Communication: file-based + SendMessage (NOT file-only like Middle)
- [ ] Per-file ownership: 1 agent = 1 output file (zero contention)
- [ ] Zero file conflicts during execution
- [ ] Team-lead context stayed manageable (< 30K tokens)

**Why it matters:** Middle validated flat topology for 8 agents. Ceiling tests 10-12 agent scalability.

**Source:** Process Metacognition 1.1, Master Retro Finding 6

---

### C-05: Per-Category Minimums Produced Natural Distribution
**Binary check:** Mechanism distribution shows content-driven variance

**Acceptance criteria:**
- [ ] All 5 categories covered (100% coverage)
- [ ] Distribution varies per category based on content (not uniform 2-2-2-2-2)
- [ ] Total count 11-15 (natural landing zone for Ceiling)
- [ ] Build plan justifies each mechanism based on content structure
- [ ] No forced mechanisms (all feel appropriate)

**Why it matters:** Middle showed S:1, H:3, C:4, D:2, N:3 (content-driven). Ceiling should show similar appropriateness.

**Source:** Process Metacognition 1.2, Master Retro Finding 1

---

### C-06: Opus Planner + Sonnet Workers Cost-Effective
**Binary check:** Model assignment matches validated pattern

**Acceptance criteria:**
- [ ] Planner: Opus 4.6 (creative composition for metaphor derivation)
- [ ] All other agents: Sonnet 4.5 (execution fidelity)
- [ ] Cost: 1-2 Opus + 9-11 Sonnet (Ceiling may use Opus for novelty evaluator)
- [ ] Quality maintained (no degradation from Sonnet workers)

**Why it matters:** Middle validated this split. Ceiling maintains pattern.

**Source:** Process Metacognition 1.3, Master Retro What Went Right #8

---

### C-07: Pre-Baked CSS Blocks Reduced Context
**Binary check:** Builder received copy-paste ready CSS blocks

**Acceptance criteria:**
- [ ] :root block (custom properties)
- [ ] Base typography block
- [ ] Accessibility patterns block
- [ ] Responsive strategy block
- [ ] Builder context reduced by 70-85% vs reading all source files
- [ ] Zero interpretation errors on pre-baked elements

**Why it matters:** Middle validated this. Massive context savings with zero quality loss.

**Source:** Process Metacognition 1.7

---

### C-08: Content-Mechanism Fit Drove Selection
**Binary check:** Build plan justifies mechanisms based on content, not quota

**Acceptance criteria:**
- [ ] Mechanism justification section exists
- [ ] Each mechanism includes "I deploy this BECAUSE..." with content reasoning
- [ ] No "to hit category minimum" justifications (content-driven, not quota-driven)
- [ ] Metaphor influences selection but content validates appropriateness

**Why it matters:** Middle showed content-driven selection. Ceiling should maintain while adding metaphor layer.

**Source:** Process Metacognition 1.6

---

### C-09: Timing Discrepancy Explained
**Binary check:** Execution time analysis compares estimated vs actual

**Acceptance criteria:**
- [ ] Estimated time documented (from A-09)
- [ ] Actual time measured (from B-21)
- [ ] Discrepancy analyzed (if 8-11x gap like Middle, explain)
- [ ] Parallel agent model validated or invalidated
- [ ] Future timing estimates updated based on Ceiling result

**Why it matters:** Middle revealed 8-11x timing error. Ceiling validates or refutes parallel model.

**Source:** Process Metacognition 2.2, Master Retro Finding 3

---

### C-10: Vocabulary Fluency vs Compositional Fluency Tested
**Binary check:** Perceptual audit distinguishes "applied correctly" from "felt through"

**Acceptance criteria:**
- [ ] PA includes explicit question about compositional confidence
- [ ] PA compares Ceiling to Middle on this dimension
- [ ] Result determines whether metaphor enables "felt through" quality
- [ ] Middle was "applied correctly" — is Ceiling "felt through"?

**Why it matters:** Tests two-dimension designed model. Vocabulary (Middle) vs composition (Ceiling).

**Source:** Master Retro Finding 4, A-16

---

### C-11: Prompt Slicing Blind Spots Addressed
**Binary check:** Builder didn't miss structural elements due to context limitations

**Acceptance criteria:**
- [ ] Landmark gate (B-02) verified all structural elements before audit
- [ ] Builder used SendMessage to clarify ambiguous plan elements (C-02)
- [ ] Zero structural elements missing (footer, header, planned sections)
- [ ] Prompt slicing documented: what builder saw, what was excluded, why

**Why it matters:** Middle's footer bug traced to prompt slicing. Ceiling mitigates via gate + messaging.

**Source:** Master Retro Finding 2, Failure Modes #1

---

### C-12: Evaluation Methodology Improved
**Binary check:** Ceiling used blind protocol, dual auditors, automated measurement

**Acceptance criteria:**
- [ ] Blind novelty evaluation (B-18 confirms)
- [ ] Dual perceptual auditors (B-19 confirms)
- [ ] PA-05d measured programmatically, not estimated (B-04 confirms)
- [ ] Pass margins reported for all criteria (B-23 confirms)
- [ ] Reproducibility improved over Middle

**Why it matters:** Middle had single-evaluator bias, estimated PA-05d, knew hypothesis. Ceiling improves rigor.

**Source:** Master Retro Finding 7, Unified Action DC-06

---

### C-13: Mechanism Interaction Explored
**Binary check:** Analysis distinguishes mechanism presence from mechanism interaction

**Acceptance criteria:**
- [ ] Build plan documents mechanism pairs that REINFORCE (B-10 confirms)
- [ ] Perceptual audit observes whether interactions are FELT (not just claimed)
- [ ] Analysis: Do interacting mechanisms create perceptual coherence vs independent mechanisms coexisting?
- [ ] Ceiling tests interaction hypothesis (Middle had coexistence)

**Why it matters:** Middle mechanisms coexisted independently. Ceiling tests whether interaction closes "felt through" gap.

**Source:** Master Retro Finding 1, A-06

---

### C-14: Top 3 Middle Defects Prevented
**Binary check:** Ceiling avoided footer bug, token compliance failure, CPL violation

**Acceptance criteria:**
- [ ] Footer exists (B-16 confirms) — Middle WOULD-NOT-SHIP defect avoided
- [ ] Token compliance >= 80% (B-15 confirms) — Middle 66.5% failure avoided
- [ ] CPL 45-80 (B-14 confirms) — Middle 82 chars violation avoided
- [ ] All 3 defects resolved via gates + self-checks (not luck)

**Why it matters:** Proves process improvements work. Ceiling shouldn't repeat Middle's mistakes.

**Source:** Verdict Known Defects, Failure Modes #1-3

---

### C-15: Perceptual Improvements Over Middle Documented
**Binary check:** Comparison report explicitly compares Ceiling to Middle (not just to Variant B)

**Acceptance criteria:**
- [ ] Comparison includes Middle-tier page as baseline
- [ ] >= 3 specific observations where Ceiling improves over Middle
- [ ] Improvements documented with screenshots + CSS evidence
- [ ] Tests whether Ceiling's metaphor creates perceptual divergence from Middle's lookup

**Why it matters:** Ceiling's value proposition. If Ceiling doesn't exceed Middle, metaphor derivation failed.

**Source:** B-06, Master Retro Narrative Arc

---

### C-16: All Open Questions from Middle Addressed
**Binary check:** Ceiling experiment answers or tests Middle's open questions

**Acceptance criteria:**
- [ ] Q1 (per-category vs count): Ceiling uses per-category (isolating this variable requires separate ablation)
- [ ] Q2 (builder needs catalog entries): Decision made (A-11 confirms)
- [ ] Q3 (PA-05d actual percentage): Measured programmatically (B-04 confirms, not estimated)
- [ ] Q4 (Middle natural landing zone): Ceiling provides n=2 data point
- [ ] All 4 questions from Master Retro XII addressed in some form

**Why it matters:** Ceiling builds on Middle's findings. Open questions shouldn't remain open.

**Source:** Master Retro Section XII, Pre-Ceiling Tier 4

---

## Summary Statistics

**Section A (Plan Verification):** 21 items
- M1 applied: 1 item
- Communication protocol: 3 items (defined, builder context, messaging capability)
- Gates: 2 items (landmark, self-check)
- Ceiling-specific: 5 items (per-category minimums, interaction, blind evaluation, dual PA, timing)
- Methodology: 10 items (rhythm, heading ratio, weight, two-dimension model, fresh-eyes, metaphor phases, 4-scale, file architecture)

**Section B (Execution Success):** 25 items
- Process verification: 5 items (messaging happened, gates triggered, self-check ran, timing matched, topology scaled)
- Success criteria: 7 items (PA-05, D3, better than Middle, 5-category, container, soul, no WOULD-NOT-SHIP)
- Quality criteria: 8 items (rhythm, heading ratio, weight, CPL, tokens, landmarks, interaction, metaphor expression)
- Methodology validation: 5 items (blind evaluation, dual PA, plan-derived audit, margins reported, 4-scale coherence)

**Section C (Retrospective Integration):** 16 items
- Meta-lessons: 3 items (binary rules, information loss, fresh-eyes)
- Validated patterns: 5 items (flat topology, per-category, Opus/Sonnet split, CSS blocks, content fit)
- Process improvements: 4 items (timing explained, vocabulary vs composition, prompt slicing, evaluation rigor)
- Quality validation: 4 items (mechanism interaction, defects prevented, improvements over Middle, open questions addressed)

**TOTAL:** 62 items

---

## Top 3 Items Most Likely to Be Missed

### #1: B-01 — Inter-Agent Communication Actually Happened
**Why it's likely to be missed:** Agents may have SendMessage capability in their prompts but still work in isolation (habit from Middle-tier). Communication requires PROACTIVE use, not just availability.

**How to prevent missing:** Team-lead should explicitly check message count at Phase 5 completion. If message count = 0, team-lead should prompt builder: "Do you have any clarifying questions about the plan?" and prompt auditors: "Do you see any issues to flag before proceeding?"

**Detection:** Message log is empty or has < 5 messages total.

---

### #2: B-16 — No Missing Landmarks (Footer Exists)
**Why it's likely to be missed:** Landmark gate (A-03, B-02) exists in plan, but team-lead might skip verification or builder might acknowledge without implementing. Middle-tier had footer in plan but not in HTML.

**How to prevent missing:** Team-lead MUST check HTML before launching auditors: `<footer>` element present? Gate is BLOCKING — cannot proceed to Phase 6 until verified.

**Detection:** Perceptual audit says "page just ends" or "no visual ending."

---

### #3: B-18 — Novelty Evaluation Was Blind
**Why it's likely to be missed:** Novelty evaluator might receive labeled pages by accident, or team-lead might forget to randomize order. Middle-tier evaluator KNEW which page was the experiment (confirmation bias).

**How to prevent missing:** Team-lead creates 3 files: page-A.html, page-B.html, page-C.html with randomized assignment (Ceiling, Middle, Reference). Novelty evaluator receives ONLY these 3 files with NO other context. Only AFTER evaluation, labels revealed.

**Detection:** Novelty evaluator output references "the Ceiling experiment" or "the new page" before completing blind assessment.

---

## Usage Notes

**For Plan Verification (Section A):**
- Review execution prompt against this checklist BEFORE launching experiment
- If any A-item is NO, update execution prompt before proceeding
- All 21 items should be YES before team-lead starts

**For Execution Success (Section B):**
- Check B-items during execution (B-01, B-02, B-03) and after completion (B-04 through B-25)
- If any SUCCESS criterion (B-04 through B-09) is NO, experiment is FAILURE
- If any quality criterion (B-10 through B-17) is NO, document as known defect

**For Retrospective Integration (Section C):**
- Evaluate after experiment completes
- C-items test whether we applied Middle-tier lessons
- If any C-item is NO, document as regression (we knew better but didn't do it)

---

## Change Log

**v1 (2026-02-16):** Initial synthesis from Master Retrospective (493 lines), Unified Action Plan (433 lines), Pre-Ceiling Checklist (790 lines), plus Failure Modes, Process Metacognition, Verdict excerpts. 62 items (21 Plan + 25 Execution + 16 Retrospective). Top 3 most-likely-to-miss: B-01 messaging, B-16 landmarks, B-18 blind evaluation.
