# Gap Analysis: Extracted Actions vs Current State

**Author:** gap-analyst (Opus 4.6)
**Date:** 2026-02-16
**Task:** #12
**Inputs:** 11-crossref-merged-actions.md (187 items), 08/09/10-state assessments, E1-E4 meta-cognitive frameworks, S1-S4 integration analyses, V1-V3 nuance recovery
**Method:** Classify every item as DONE / PARTIALLY DONE / TODO / RESOLVED BY GATE / CONVICTION ONLY / REFERENCE ONLY / DISCARDED. Incorporate nuance recovery additions and integration at-risk findings.

---

## STATISTICS SUMMARY

| Classification | Count | % of Total |
|----------------|-------|------------|
| **BLOCKING TODO** | 31 | 14.6% |
| **HIGH TODO** | 28 | 13.2% |
| **THRESHOLD CONFLICTS** | 8 | 3.8% |
| **GATE-ENFORCED** (no pre-work) | 48 | 22.6% |
| **CONVICTION/REFERENCE** | 42 | 19.8% |
| **DONE** | 38 | 17.9% |
| **DISCARDED** | 17 | 8.0% |
| **TOTAL** | **212** | 100% |

The 212 total includes the 187 merged items PLUS 25 additions from nuance recovery and integration analyses that were NOT in the 187.

---

## 1. BLOCKING TODO (Must Complete Before Flagship Starts)

### 1A. Design System Enrichments (7 items, ~328 lines, ~45 min)

#### BT-01: DS-01 — Add Prohibition #21 (Maximum Whitespace) [B1]
- **Action:** Insert ~40 lines into `design-system/compositional-core/identity/prohibitions.md` after Prohibition #20.
- **Where:** `prohibitions.md` line ~321
- **Evidence of gap:** State assessment 08 confirms ABSENT. Zero void prevention exists.
- **Insertable text:** Ready in `02-enrichment-specifications.md` (flagship-preparation)
- **Verification:** E3 Phase 1 — grep for "NEVER Allow a Full Viewport Height", "30% content coverage", "Prohibition #21". Line count >= 388. Cold-read 5-question check.
- **Enforcement during execution:** Programmatic gate SC-02 (max contiguous void). Builder self-check item #3. Kill criterion KB-03.
- **Effort:** 10 min
- **Lost if skipped:** The ceiling experiment's exact failure repeats. 70-80% void. DO NOT SHIP verdict.

#### BT-02: DS-03 — Add Transition Grammar Section [A1]
- **Action:** Insert ~80 lines into `design-system/compositional-core/grammar/mechanism-catalog.md` after Combination Rules section.
- **Where:** `mechanism-catalog.md` after line ~940
- **Evidence of gap:** State assessment 08 confirms PARTIALLY PRESENT in wrong file (compositional-rules.md has Rule C2, but mechanism-catalog.md has nothing). The new content adds zone-level scope, CSS blocks, binary test, CHECKPOINT type.
- **Insertable text:** Ready in `02-enrichment-specifications.md`
- **Verification:** E3 Phase 1 — grep for "Transition Grammar", "HARD CUT", "SPACING SHIFT", "CHECKPOINT", "space-max-zone". Line count >= 1163.
- **Enforcement during execution:** Builder self-check item #7 (3+ transition types). Gate GT-05 composition verification.
- **Effort:** 10 min
- **Lost if skipped:** Builder has no vocabulary for zone transitions. Metronomic or absent transitions. PA-05c PROPORTIONATE likely fails.

#### BT-03: DS-04 — Add Restraint Protocol Section [A2]
- **Action:** Insert ~50 lines into `mechanism-catalog.md` after Transition Grammar section.
- **Where:** `mechanism-catalog.md` after A1 insertion
- **Evidence of gap:** State assessment 08 confirms ABSENT. No "when NOT to deploy" guidance exists.
- **Insertable text:** Ready in `02-enrichment-specifications.md`
- **Verification:** E3 Phase 1 — grep for "Restraint Protocol", "4 distinct mechanisms", "every third of the page", "CONSIDERED AND REJECTED".
- **Enforcement during execution:** Gate GT-05 (restraint ratio >= 1.5, mechanism count <= 16). Gate GT-28 (rejection count >= 21). Gate GT-29 (unused mechanisms >= 2).
- **Effort:** 10 min
- **Lost if skipped:** 14 mechanisms deployed with 0 rejected (Ceiling pattern). Signal saturation. "Every mechanism present, none perceivable."

#### BT-04: DS-05 — Add Content Density Floors [A3]
- **Action:** Insert ~60 lines into `design-system/compositional-core/guidelines/semantic-rules.md` as Gap 6.
- **Where:** `semantic-rules.md` after line ~278
- **Evidence of gap:** State assessment 08 confirms PARTIALLY PRESENT (Gap 4 has spacing criteria but not content volume minimums). No minimum content per zone, no zone count ceiling by word count.
- **Insertable text:** Ready in `02-enrichment-specifications.md`
- **Verification:** E3 Phase 1 — grep for "Content Density Floors", "3+ paragraphs OR 2+ components", "Zone Count Ceiling", "Zones exist to SERVE content". Line count >= 430.
- **Enforcement during execution:** Gate GT-01 (spatial budget, content/zone >= 1.5). Gate GT-30 (zone necessity test). Kill criterion KB-02.
- **Effort:** 5 min
- **Lost if skipped:** Zones created to satisfy metaphor architecture, not content volume. Empty zones. Void accumulation.

#### BT-05: DS-06 — Add Content-Form Fit Guidance [D3]
- **Action:** Insert ~55 lines into `semantic-rules.md` as Gap 7, after A3 insertion.
- **Where:** `semantic-rules.md` after A3 insertion
- **Evidence of gap:** State assessment 08 confirms ABSENT. No form-follows-content-volume guidance exists.
- **Insertable text:** Ready in `02-enrichment-specifications.md`
- **Verification:** E3 Phase 1 — grep for "Content-Form Fit", "Form follows content volume", "simplest form". Combined A3+D3 line count >= 485 from 380 baseline.
- **Enforcement during execution:** Gate GT-01 (spatial budget). Gate CP-04 (content-to-pattern selection protocol). Kill criterion KB-02.
- **Effort:** 5 min
- **Lost if skipped:** Architecture exceeds content volume. Form decisions not checked against content. The ceiling experiment's root cause.

#### BT-06: DS-07 — Add Maximum Spacing Tokens [C3]
- **Action:** Insert ~8 lines into `design-system/compositional-core/vocabulary/tokens.css`.
- **Where:** `tokens.css` after line ~113 (spacing scale section)
- **Evidence of gap:** State assessment 08 confirms ABSENT. No `--space-max-section` or `--space-max-zone` exists. Spacing goes up to 96px but without labeling it as a maximum.
- **Insertable text:** Ready in `02-enrichment-specifications.md`
- **Verification:** E3 Phase 1 — grep for "space-max-section", "space-max-zone", "Spacing Maximum". Line count >= 180.
- **Enforcement during execution:** Builder uses var(--space-max-zone) as ceiling. Token compliance gate catches raw values exceeding 96px.
- **Effort:** 2 min
- **Lost if skipped:** Nothing prevents 128px, 160px, 200px spacing. Void accumulates through large structural gaps.

#### BT-07: DS-02 — Add Prohibition #22 (Front-Loaded Visual Weight) [B3]
- **Action:** Insert ~35 lines into `prohibitions.md` after Prohibition #21.
- **Where:** `prohibitions.md` after B1 insertion
- **Evidence of gap:** State assessment 08 confirms ABSENT. No visual weight distribution prohibition exists.
- **Insertable text:** Ready in `02-enrichment-specifications.md`
- **Verification:** E3 Phase 1 — grep for "NEVER Concentrate All Visual Interest", "Prohibition #22", "designed moment", "50% scroll depth". Combined B1+B3 line count >= 418.
- **Enforcement during execution:** Gate GT-10 (BP-3: exactly one visual climax). CONV-18 (designed moment per quartile). Builder self-check.
- **Effort:** 5 min
- **Lost if skipped:** Visual interest dies at 30% scroll. Reader abandons. "Front-loaded design" anti-pattern.

**Implementation order (from DS-08):** B1 -> C3 -> A3+D3 -> A1 -> A2 -> B3 = BT-01 -> BT-06 -> BT-04+BT-05 -> BT-02 -> BT-03 -> BT-07

### 1B. Skill Enrichments (4 items, ~50 lines, ~15 min)

#### BT-08: SK-01 + SK-02 — Add Void Guardrails + 4 Spatial PA Questions
- **Action:** Add PA-50 through PA-53 (empty viewport count, content percentage, designed moment per third, width utilization) and void guardrail specifications (max consecutive blank 1.5 viewports, min content 60%, visual weight distribution constraint) to `~/.claude/skills/perceptual-auditing/SKILL.md`.
- **Where:** PA SKILL.md, Tier 2 spatial questions section + new void guardrails section
- **Evidence of gap:** State assessment 09 confirms ABSENT. Current skill has 48 questions (PA-01 through PA-48). No PA-49+ exists. No void guardrails section.
- **Verification:** E3 Phase 2 — grep for "PA-50", "PA-51", "PA-52", "PA-53", "1.5 viewport", "60% of total scroll".
- **Enforcement during execution:** Auditors use these questions during Mode 4 PA. Embedded auditor uses void threshold during build.
- **Effort:** 10 min
- **Lost if skipped:** Auditors improvise void detection. The ceiling experiment's exact blind spot (no spatial questions in PA) recurs.

#### BT-09: SK-09 + SK-10 — Add Metaphor Scoring Rubric + Rejection Checklist
- **Action:** Add 6-criterion metaphor scoring rubric (18 points total, threshold >= 12/18) including Interpretive Distance (0-3) and Content-Shape Fit (0-3). Add 6 binary rejection checks.
- **Where:** `~/.claude/skills/tension-composition/SKILL.md`, Phase 3 (Metaphor Collapse)
- **Evidence of gap:** Current metaphor scoring uses 4 criteria. The ceiling experiment's "zero interpretive distance" metaphor scored 12/12 on the old rubric. New rubric would have flagged it.
- **Verification:** grep for "Interpretive Distance", "Content-Shape Fit", "12/18 threshold", "rejection checklist".
- **Enforcement during execution:** Gate GT-02 (metaphor resonance). Kill criterion KB-05 if metaphor fails rejection checklist.
- **Effort:** 10 min
- **Lost if skipped:** "Secure facility for secure facility docs" repeats. Zero interpretive distance. Metaphor is a label, not a structure.

#### BT-10: SK-03 + SK-04 — PA-09 Severity Calibration + PA-05c Expansion
- **Action:** Calibrate PA-09 severity (1-2 viewports = LOOKS-WRONG, 3-5 = WOULD-NOT-SHIP, 6+ = CATASTROPHIC). Expand PA-05c PROPORTIONATE to 3 sub-dimensions (horizontal, vertical, breathing proportions must each pass separately).
- **Where:** `~/.claude/skills/perceptual-auditing/SKILL.md`, PA-09 and PA-05c sections
- **Evidence of gap:** State assessment 09 confirms PA-09 currently has no severity calibration. PA-05c has sub-criteria but not the 3-dimension split.
- **Verification:** grep for "WOULD-NOT-SHIP", "CATASTROPHIC", "Horizontal proportion", "Vertical proportion", "Breathing proportion".
- **Enforcement during execution:** Auditors use calibrated severity. PA-05c produces more precise diagnosis.
- **Effort:** 5 min
- **Lost if skipped:** Void severity ambiguous. PA-05 fails without identifying WHICH proportion dimension fails.

#### BT-11: SK-05 — Elevate PA-17 and PA-41 to Middle+ Tier
- **Action:** Move PA-17 (rhythm) and PA-41 (consistency) from Tier 3 to mandatory for all Ceiling+ audits.
- **Where:** `~/.claude/skills/perceptual-auditing/SKILL.md`, ceiling elevation note
- **Evidence of gap:** State assessment 09 confirms existing elevation note exists (line 169) but it's a NOTE, not a formal tier change. The note says "de facto CRITICAL for ceiling+" but the questions remain in Tier 3.
- **Verification:** grep for PA-17 and PA-41 in Tier 2 section.
- **Enforcement during execution:** All Mode 4 auditors evaluate rhythm and consistency.
- **Effort:** 2 min
- **Lost if skipped:** Auditors may skip rhythm/consistency questions for Ceiling+ pages, missing metronomic patterns.

### 1C. Prompt Assembly (8 items, ~240 lines, ~60 min)

#### BT-12: PA-01 — Create Layer 1 Conviction Document (~70 lines)
- **Action:** Write conviction document containing: thesis ("difference is restraint"), load-bearing metaphor test, beauty brief, 3-word personality (Warm/Authoritative/Unhurried), resolved tensions, 20-line CD-006 exemplar, 20-line DD-006 exemplar.
- **Where:** New file in execution prompt package
- **Verification:** E3 Phase 3 — line count, section markers for CONVICTION/Layer 1.
- **Enforcement during execution:** Read by creative agents (Opus). Shapes intent without binary rules.
- **Effort:** 15 min
- **Lost if skipped:** No qualitative frame. Builder optimizes for checklist compliance without understanding WHAT "designed" means.

#### BT-13: PA-02 — Create Layer 2 Execution Spec (~100-120 lines)
- **Action:** Write execution spec with 8 sections: Mission (10), Spatial (15), Soul (10), Compositional (15), Process (15), Self-Check (15), Success Criteria (10), Kill Criteria (10). 25 critical binary rules. Zero judgment rules. Zero MAY/SHOULD.
- **Where:** New file in execution prompt package
- **Verification:** E3 Phase 3 — line count <= 120. grep for MAY/SHOULD/CONSIDER returns zero. Attention cost calculation <= 60 units.
- **Enforcement during execution:** Builder reads this as primary instructions. Every rule is binary.
- **Effort:** 20 min
- **Lost if skipped:** No execution spec. Builder receives ad-hoc instructions. Ceiling experiment's 1004-line overload repeats.

#### BT-14: PA-03 — Create Layer 3 Coordination Spec (~60 lines)
- **Action:** Write coordination spec with: Agent roster (25 lines), Communication obligations (20 lines), Audit protocol (15 lines).
- **Where:** New file in execution prompt package
- **Verification:** E3 Phase 3 — line count. Section markers for COORDINATION/Layer 3.
- **Enforcement during execution:** Team-lead reads as orchestration guide. Gate sequence and timing.
- **Effort:** 10 min
- **Lost if skipped:** No coordination structure. Team-lead improvises agent sequencing. Gate timing unspecified.

#### BT-15: PA-04 + PA-05 — Write 25 Binary Rules + Convert CAPABILITY to OBLIGATION
- **Action:** Distill all 187 items down to 25 critical binary rules in 5 groups (SPATIAL 4, SOUL 8, STRUCTURE 5, PROCESS 4, RHYTHM 3, KILL 1). Convert every CAN to MUST. Add "if zero messages: team-lead prompts."
- **Where:** Layer 2 execution spec (integrated with BT-13)
- **Verification:** E3 Phase 3 — count binary rules. grep for CAN/MAY returns zero in Layer 2.
- **Enforcement during execution:** Each rule achieves ~100% compliance (binary). Zero judgment rules.
- **Effort:** Integrated with BT-13
- **Lost if skipped:** Judgment rules at ~0% compliance. "CAN message" produces zero messages (ceiling pattern).

#### BT-16: PA-11 — Create 80-Line Builder Prompt Template
- **Action:** Create the ~55-line builder prompt using E4 encoding strategy. 10 sections: Soul (7), Container (4), Spatial Anchors (5), Metaphor (10), Mechanisms (15), Transitions (5), Communication (4), Self-Check (12), Components (3), Designed Moments (10). Primacy: FAIL IF in first 3 lines. Recency: self-check in last 10 lines.
- **Where:** Builder prompt template file
- **Verification:** Attention cost audit: demand <= 37 units, surplus >= 63. Encoding scorecard: zero judgment rules, zero hedging.
- **Enforcement during execution:** Builder sees ~55 lines. Everything else routed to gates/references.
- **Effort:** 15 min
- **Lost if skipped:** Builder receives unstructured instructions. Attention overload. Ceiling pattern.

#### BT-17: PA-12 — Create Phase-Specific Prompts (3 Files)
- **Action:** Create per-pass prompts: Pass 1 ~35 attention units, Pass 2 ~40 units, Pass 3 ~20 units. Only rules relevant to that pass.
- **Where:** 3 separate prompt files
- **Verification:** Per-pass attention audit. No pass exceeds 40 rules.
- **Enforcement during execution:** Each pass agent sees only relevant rules. Attention preserved.
- **Effort:** 15 min
- **Lost if skipped:** All passes see all rules. Attention waste. Rules for Pass 3 consume Pass 1 builder's budget.

#### BT-18: PA-17 — Route Preparation Outputs to Correct Recipients
- **Action:** Classify every action item into: Rules -> Builder (short). Gates -> Team-lead (medium). Vocabulary -> Planner. Checklists -> Auditors. Do NOT send all to builder.
- **Where:** Routing table in coordination spec
- **Verification:** E2 routing check — verify no auditor-only content in builder prompt.
- **Enforcement during execution:** Information routing prevents attention waste. Builder sees ~40% of rules; 60% enforced by infrastructure.
- **Effort:** 10 min
- **Lost if skipped:** All information sent to builder. 128 attention units (ceiling). Zero surplus. Spatial proportion shed first.

### 1D. Content Preparation (3 items, ~30 min)

#### BT-19: CP-01 + PT-09 — Content Inventory Template
- **Action:** Create complete template with: SOURCE, WORD COUNT, CONTENT TYPE MIX, READING TIME, SECTION CATALOG (per-section: type, words, code, tables, lists, diagrams, callouts, density, reader intent, dependencies), NATURAL GROUPINGS, DENSITY MAP, CONTENT BOUNDARIES, ESTIMATED HEIGHT MAP, CONTENT-ONLY ZONE COUNT.
- **Where:** Template file for Pass 0 agent
- **Verification:** E3 Phase 6 — template exists with all required fields.
- **Enforcement during execution:** Content architect (Pass 0) fills template. Team-lead verifies at Gate 0.
- **Effort:** 10 min
- **Lost if skipped:** No content inventory. Metaphor derived without content knowledge. Architecture exceeds content volume (ceiling failure).

#### BT-20: CP-02 — Select Different Content from Middle/Ceiling
- **Action:** Select content topic that is NOT "SYSTEM: Remote Mac Control." Must have >= 4 sections, >= 200 words each, mixed types (prose, code, tables, diagrams).
- **Where:** Content selection decision
- **Verification:** Content is different from prior experiments. Section count >= 4. Word count >= 800.
- **Enforcement during execution:** Content inventory verifies adequacy at Gate 0.
- **Effort:** 10 min
- **Lost if skipped:** Same content tested 3x. Pipeline generalizability untested. Results confounded with content familiarity.

#### BT-21: CP-04 + CP-05 + CP-06 — Content-to-Pattern Selection Protocol
- **Action:** Implement 6-step protocol: read zone count, read density map, count content types, apply 20% overhead budget, apply 800px zone minimum, verify density-shape alignment. Include 5 binary rejection criteria.
- **Where:** Pass 0 agent instructions + Gate 0 definition
- **Verification:** Protocol exists with all 6 steps. 5 rejection criteria are binary.
- **Enforcement during execution:** Gate GT-01 (spatial budget). Kill criterion KB-02.
- **Effort:** 10 min
- **Lost if skipped:** Pattern selection ignores content constraints. Metaphor creates structural obligations content cannot fill.

### 1E. Pipeline Architecture (4 items)

#### BT-22: PL-01 + PL-05 — 5-Pass Pipeline with Time Budgets
- **Action:** Define: Pass 0 Content Architecture (Opus, 20-30min), Pass 1 Spatial Skeleton (2x Sonnet competitive, 35-50min), Pass 2 Mechanism Deployment (Sonnet, 25-40min), Pass 3 Metaphor Integration (Opus, 20-35min), Pass 4 Intentionality Layer (Opus, 15-25min). Gates between passes. 7-step content-first sequence.
- **Where:** Layer 3 coordination spec
- **Verification:** 5 passes defined with time budgets. Gate sequence specified.
- **Enforcement during execution:** Team-lead sequences passes. Time tracked against TK-01.
- **Effort:** Integrated with BT-14
- **Lost if skipped:** Ad-hoc pipeline. No single-concern decomposition. Attention mode conflicts.

#### BT-23: PL-10 — Pass 4 Height Budget <= 10%
- **Action:** Specify that intentionality layer may add max 10% to page height. Revert heaviest additions if exceeded.
- **Where:** Pass 4 builder prompt + Gate check
- **Verification:** Post-Pass-4 height measurement. (new_height - old_height) / old_height <= 0.10.
- **Enforcement during execution:** Programmatic gate IT-01. Rollback if exceeded.
- **Effort:** 2 min (rule specification)
- **Lost if skipped:** Pass 4 adds unbounded height. Void returns through intentionality additions.

#### BT-24: PL-13 + PL-15 — Time Kill + Abort Protocols
- **Action:** Define: 240 min = SHIP AT CURRENT STATE. 4 abort types: A (pre-build, expand content), B (Pass 1, re-derive metaphor), C (Pass 2, ship v1 as ceiling), D (final, failure report).
- **Where:** Kill criteria section of coordination spec
- **Verification:** TK-01 exists with 4 time bands. 4 abort protocols defined.
- **Enforcement during execution:** Team-lead tracks time at each gate. Kill criterion TK-01.
- **Effort:** 5 min
- **Lost if skipped:** No abort protocol. Sunk cost bias continues build past failure point.

#### BT-25: PT-01 + PT-02 — Programmatic Gate Runner JavaScript
- **Action:** Prepare complete `runSpatialConfidenceGate()` function for SC-01 through SC-03, SC-05 through SC-07 plus void detection script (elementsFromPoint scanning at 50px intervals).
- **Where:** JavaScript file referenced by spatial-auditor prompt
- **Verification:** E3 Phase 4 — node syntax check passes. Function is self-contained.
- **Enforcement during execution:** Spatial auditor runs the script. Output = structured PASS/FAIL report.
- **Effort:** 15 min
- **Lost if skipped:** Spatial gate relies on visual estimation. Container width, void ratio, content distribution measured by eye (unreliable).

### 1F. Communication Protocol (3 items)

#### BT-26: CM-01 through CM-05 — 5 Mandatory Checkpoints
- **Action:** Define 5 checkpoints as MUST (not CAN): A (post-plan read-through), B (post-build report), C (spatial gate result), D (post-elaboration report), E (final build report). Each with required fields and measurement content.
- **Where:** Layer 3 coordination spec + Layer 2 process section
- **Verification:** E3 Phase 5 — grep for "MUST" with each checkpoint. Zero MAY/CAN references.
- **Enforcement during execution:** Communication gate type (E1). Team-lead verifies at each gate boundary. Zero messages at Gate 1 = PAUSE.
- **Effort:** Integrated with BT-14
- **Lost if skipped:** Zero messages (ceiling pattern). Builder can't ask planner about footer. Missing footer recurs.

#### BT-27: CM-06 + CM-14 — Message Format + Routing Table
- **Action:** Define 4 message types (BLOCKING-DEPENDENCY, QUALITY-GATE, CLARIFICATION-REQUEST, ANOMALY-FLAG). Define 17-pairing routing table. PA/novelty agents = PROHIBITED receivers.
- **Where:** Layer 3 coordination spec
- **Verification:** E3 Phase 5 — message types and routing table present.
- **Enforcement during execution:** Team-lead enforces routing. PA isolation maintained.
- **Effort:** Integrated with BT-14
- **Lost if skipped:** Messages informal. PA agents contaminated with build context. Fresh-eyes principle violated.

#### BT-28: CM-08 + CM-09 + CM-11 — Escalation Triggers + Diagnosis-Before-Fix
- **Action:** Define 3 escalation triggers: uncertainty > 80% confidence threshold, WOULD-NOT-SHIP finding, unexpected discovery. Require root cause classification (CSS/CONTENT/ARCHITECTURE) with evidence BEFORE any fix.
- **Where:** Layer 2 process section
- **Verification:** Triggers exist with binary criteria. Diagnosis protocol present.
- **Enforcement during execution:** Communication gate. Team-lead responds APPROVED or REDIRECTED.
- **Effort:** 5 min
- **Lost if skipped:** CSS fixes applied to architecture problems. Fixes make page worse (ceiling pattern: cold-look NOs increased from 2 to 7 post-fix).

### 1G. Gate Definitions (3 items)

#### BT-29: GT-03 + GT-17 — Spatial Confidence Gate (Post-Pass-1) + Gate Architecture
- **Action:** Specify 7 binary checks (SC-01 through SC-07) with thresholds. All MUST PASS. Max 2 fix cycles. Gates 2 and 3 run IN PARALLEL after Pass 1. Define 5-gate system architecture.
- **Where:** Gate specification document referenced by team-lead and spatial-auditor
- **Verification:** E3 Phase 4 — all gates have definition + measurement + fail response + evidence artifact.
- **Enforcement during execution:** Programmatic gate + screenshot gate. Team-lead logs to gate execution log.
- **Effort:** 10 min (specification; JavaScript covered by BT-25)
- **Lost if skipped:** No spatial accountability. Void, header proportions, container width all unchecked between passes.

#### BT-30: GT-05 — Composition Verification Gate (Post-Pass-2)
- **Action:** Specify combined gate: mechanism count <= 16, restraint ratio >= 1.5, zone visibility, spatial re-check, rejection count >= 21, silence zones >= 2, signal-to-silence 0.6-0.8:1, structural overhead <= 20%.
- **Where:** Gate specification document
- **Verification:** All checks have thresholds. File diff gate for restraint map.
- **Enforcement during execution:** File diff gate + programmatic checks. Team-lead verifies.
- **Effort:** 5 min
- **Lost if skipped:** Mechanism deployment unchecked. Signal saturation. Restraint ratio unverified.

#### BT-31: GT-07 + CONV-13 — Ship-Ready Gate + Mode 4 PA
- **Action:** Specify final gate: Full Mode 4 (9 auditors, 48+ PA questions, 3 viewports), screenshot pre-capture pattern, programmatic audit, comparative audit, blind novelty.
- **Where:** Gate specification + audit protocol
- **Verification:** Mode 4 protocol specified. Pre-capture pattern documented.
- **Enforcement during execution:** Screenshot gate + PA evaluation. Ship/No-Ship verdict.
- **Effort:** 10 min
- **Lost if skipped:** Lighter audit misses dominant defects (proven: 2-PA missed what 9-auditor caught).

---

## 2. HIGH TODO (Should Do; Significant Risk if Skipped)

### 2A. Design System Enrichments

| ID | Item | Target | Effort | What's Lost if Skipped |
|----|------|--------|--------|------------------------|
| HT-01 | DS-09: Soul enforcement selector `*:where(:not(input,button,select)){border-radius:0}` | prohibitions.md | 2 min | Defensive CSS pattern missing |
| HT-02 | DS-13: Border-weight semantic system (4px/3px/1px only, NEVER 2px) | mechanism-catalog.md or semantic-rules.md | 5 min | 2px borders creep in, diluting border-weight hierarchy |
| HT-03 | DS-17: Extended constraint set (10 value-restriction prohibitions) | prohibitions.md overlay | 10 min | Lower constraint pressure. Conditional on experiment. |
| HT-04 | DS-18: 4 flagship-specific value restrictions | Flagship execution prompt | 5 min | Unconstrained channels dilute semantic density |

### 2B. Skill Enrichments

| ID | Item | Target | Effort | What's Lost |
|----|------|--------|--------|-------------|
| HT-05 | SK-07: Formalize Mode 4 pre-capture protocol | PA SKILL.md | 5 min | Screenshot methodology undocumented for future use |
| HT-06 | SK-08: Root cause classification protocol (5 types) | PA SKILL.md | 5 min | Auditors report defects without classifying root cause |
| HT-07 | SK-11 + SK-12: PA-51 "deliberately quiet" + PA-50 "too dense" | PA SKILL.md | 5 min | No detection of overcorrection ("wall of content") |
| HT-08 | SK-13: Assign PA auditors by dimension | SKILL.md + execution prompt | 5 min | All auditors check same things. Lower coverage breadth |
| HT-09 | SK-14: Temporal firewall for lock sheet (cold looks FIRST) | PA SKILL.md | 2 min | Lock sheet classification biases PA answers |

### 2C. Prompt Assembly

| ID | Item | Target | Effort | What's Lost |
|----|------|--------|--------|-------------|
| HT-10 | PA-06: Classify 56 ceiling rules (KEEP/CONV/COORD/DROP/MERGE) | Input to BT-13 | 10 min | Ceiling rules unclassified. Judgment rules leak into execution spec. |
| HT-11 | PA-08: Move 7 judgment rules to conviction document | Layer 1 | 5 min | Judgment rules contaminate binary rules. ~0% compliance on all. |
| HT-12 | PA-09 + PA-10: Extract CD-006 + DD-006 exemplars (20 lines each) | Layer 1 conviction | 10 min | No concrete quality exemplars. Builder has abstract targets only. |
| HT-13 | PA-13: Unlimited auditor prompts | Auditor prompt files | 10 min | Auditors lack full question set + success criteria |
| HT-14 | PA-14: Replace explanations with exemplars in builder prompt | Builder prompt | Integrated with BT-16 | Explanations cost 3 units; exemplars cost 1. |
| HT-15 | PA-15: Frame all constraints as negative rules | Builder prompt | Integrated with BT-16 | Positive rules cost 2-4 units; negative cost 1. |
| HT-16 | PA-16: Attention audit template | QA document | 5 min | No verification that prompt is within attention budget |
| HT-17 | PA-18: Remove redundancy from prompt | Builder prompt | Integrated with BT-16 | Each rule once at canonical location. No "see also." |

### 2D. Pipeline Architecture

| ID | Item | Target | Effort | What's Lost |
|----|------|--------|--------|-------------|
| HT-18 | PL-02: Competitive skeleton build (Pass 1) | Coordination spec | 5 min | Single builder. P(good skeleton) 70% vs 91% with 2 builders. |
| HT-19 | PL-03: Embedded auditor for Passes 1-2 | Coordination spec | 5 min | No real-time monitoring. Void accumulates unchecked during build. |
| HT-20 | PL-07: Calibration run before flagship | Pre-flagship activity | 150 min | Pipeline untested. First run IS the flagship. |
| HT-21 | PL-08: Crown jewel technique inventory | Reference file for Pass 4 | 15 min | Pass 4 builder has no quality calibration reference. |
| HT-22 | PL-14: Two-agent pattern for fix passes | Coordination spec | 2 min | Single agent builds AND audits own fixes. Continuation bias. |

### 2E. Additional Gates/Checks

| ID | Item | Target | Effort | What's Lost |
|----|------|--------|--------|-------------|
| HT-23 | GT-20: Subtraction test (post-Pass-2) | Gate spec | 2 min | Mechanisms never evaluated for removal. Signal saturation. |
| HT-24 | GT-31: Anti-ambition audit | Gate spec | 5 min | Plan ambition unchecked. Over-engineering. |
| HT-25 | GT-32: Continuation bias interrupt | Gate spec | 2 min | Builder identifies failure modes but doesn't address them. |

### 2F. From Scale/Research Integration (AT RISK items)

| ID | Item | Source | Effort | What's Lost |
|----|------|--------|--------|-------------|
| HT-26 | S1 Action 3: Add iteration protocol after Gate 5 | Pipeline architecture | 5 min | No post-audit fix cycle. Highest-leverage improvement missed. |
| HT-27 | S2: "Builder never scrolled the finished page" — add builder self-scroll requirement | Builder prompt process section | 1 min | Builder hands off without seeing full scroll. 70-80% void invisible. |
| HT-28 | S2: "Plan never tested spatial assumptions" — add spatial budget CALCULATION mandate | Pass 0 / Gate 0 | 3 min | Planner specifies zones without calculating total height. 2700px void predictable but uncalculated. |

---

## 3. THRESHOLD CONFLICTS (Must Resolve Before Encoding Into Gates)

| ID | Conflict | Sources | Current Resolution | Recommended Action |
|----|----------|---------|-------------------|-------------------|
| TC-01 | Content-to-void: 60% vs 70% vs 85% vs 90% | CONFLICT-01 in merged list | GRADUATED: pre-build >= 60%, skeleton >= 50%, post-Pass-2 >= 70%. 90% aspirational. | **ADOPT resolution as-is.** Encode graduated thresholds into Gate 0 (60%), Gate 1 (50%), Gate 3 (70%). |
| TC-02 | Header maximum: 20% vs 25% | CONFLICT-02 | Gate at 20%, absolute fail at 25%. | **ADOPT.** SC-05 = 20%. Abort trigger at 25%. |
| TC-03 | Pipeline passes: 3 vs 5 | CONFLICT-03 | 5-pass (most detailed). | **ADOPT.** 5 passes. Per-pass attention audit ensures budget. |
| TC-04 | Mechanism count: 12-14 vs 14-16 vs 16-18 | CONFLICT-04 | Target 12-14, hard cap 16. | **ADOPT.** Supported by constraint pressure + diminishing returns. |
| TC-05 | Total prompt length: 200 vs 240 | CONFLICT-05 | 240 total across 3 layers. Builder ~80-100. | **ADOPT.** Team-lead sees 240. Builder sees 80-100. |
| TC-06 | Message mandates vs deliverable mandates | CONFLICT-06 | Use BOTH. Deliverables = substance. Messages = enforcement. | **ADOPT.** CM-19 deliverable mandates + CM-13 message count. |
| TC-07 | Max void height: 1620px vs 2160px | CONFLICT-07 | Use 2160px (1.5 viewports). | **ADOPT.** SC-02 = 2160px. SP-02's 1620px is stricter early threshold. |
| TC-08 | Constraint pressure experiment: BLOCKING vs HIGH | CONFLICT-08 | Label HIGH, not BLOCKING. Run if time permits. | **ADOPT.** Optional pre-flagship. Informs prompt but not required. |

**All 8 conflicts have resolutions in the merged list.** No unresolved threshold conflicts.

---

## 4. GATE-ENFORCED (No Pre-Work; Enforced During Execution)

These items require NO pre-flagship work. They are enforced by gates, team-lead checkpoints, or kill criteria DURING the experiment.

### 4A. Convergent Items Enforced by Gates

| ID | Item | Gate | Enforcement Type (E1) |
|----|------|------|-----------------------|
| GE-01 | CONV-01: Container 940-960px | SC-01 (programmatic) | Programmatic Gate |
| GE-02 | CONV-02: Void budget graduated | SC-02 + SC-03 | Programmatic Gate |
| GE-03 | CONV-04: Footer existence | SC-07 (programmatic) | Programmatic Gate |
| GE-04 | CONV-05: Header <= 20% | SC-05 (programmatic) | Programmatic Gate |
| GE-05 | CONV-09: Spatial confidence 7 checks | Gate 1 (SC-01 through SC-07) | Programmatic + Screenshot |
| GE-06 | CONV-11: Soul 8/8 | FK-02 (programmatic) | Programmatic Gate |
| GE-07 | CONV-12: Mechanism cap 16 | GT-05 CP-01 | Programmatic Gate |
| GE-08 | CONV-14: PA/novelty isolation | Routing table | Communication Gate |
| GE-09 | CONV-15: Fix cycle max 2 | Decision matrix GT-16 | Kill Criterion |
| GE-10 | CONV-18: Designed moment distribution | GT-10 BP checks | Screenshot Gate |
| GE-11 | CONV-19: Silence zones >= 2 | GT-05 | File Diff Gate |
| GE-12 | CONV-20: Screenshot pre-capture | Mode 4 protocol | Team-lead Checkpoint |

### 4B. Category-Specific Items Enforced by Gates

| ID | Item | Gate |
|----|------|------|
| GE-13 | GT-01: Spatial budget gate (pre-build) | Gate 0 |
| GE-14 | GT-04: Landmark completeness | Gate 2 (parallel with Gate 1) |
| GE-15 | GT-06: Metaphor coherence (2 fresh-eyes) | Gate 4 |
| GE-16 | GT-08: Composition audit CC-01 through CC-07 | Gate 3 |
| GE-17 | GT-09: Intentionality checklist I-01 through I-12 | Post-Pass-4 |
| GE-18 | GT-10: 7 binary beauty prerequisites | Gate 3 |
| GE-19 | GT-11: Crown jewel quality gate (8 checks) | Gate 5 |
| GE-20 | GT-12: Builder's 10 self-check | Agent self-check |
| GE-21 | GT-13: 3 embedded build checkpoints | During build |
| GE-22 | GT-14: Pre-build kill criteria KB-01 through KB-05 | Gate 0 |
| GE-23 | GT-15: Final kill criteria FK-01 through FK-05 | Gate 5 |
| GE-24 | GT-16: Decision matrix fix vs abort | All gates |
| GE-25 | GT-18: Metacognitive checkpoints (5 self-questions) | During build |
| GE-26 | GT-19: Fresh-eyes proportion check (post-Pass-1) | Gate 1 |
| GE-27 | GT-21: Ego separation cold-look | Gate 4 |
| GE-28 | GT-22: Dissent protection protocol | Gate 5 |
| GE-29 | GT-23: Level-of-abstraction diagnosis | Fix cycles |
| GE-30 | GT-24: SC-02+SC-03 re-verification after Pass 2 | Gate 3 |
| GE-31 | GT-25: Metaphor spatial obligation score | Gate 0 |
| GE-32 | GT-26: Self-reference consensus test | Post-Pass-4 |
| GE-33 | GT-27: Signal-to-silence ratio | Gate 3 |
| GE-34 | GT-28: Rejection count >= 21 | Gate 3 |
| GE-35 | GT-29: Unused mechanisms >= 2 | Gate 3 |
| GE-36 | GT-30: Zone necessity test | Gate 0 |

### 4C. Communication Items Enforced During Execution

| ID | Item | Enforcement |
|----|------|-------------|
| GE-37 | CM-07: Measurement specificity (pixel values, not "looks right") | Communication gate |
| GE-38 | CM-10: Escalation trigger 3 (unexpected discovery) | Communication gate |
| GE-39 | CM-12: Team-lead message count verification | Team-lead checkpoint |
| GE-40 | CM-13: Minimum 8 substantive messages | Communication gate |
| GE-41 | CM-15: Per-agent message limits | Communication gate |
| GE-42 | CM-16: Anti-pattern prohibitions (6 types) | Communication gate |
| GE-43 | CM-17: Missing message recovery | Team-lead checkpoint |
| GE-44 | CM-18: File-bus remains primary | Architecture |
| GE-45 | CM-19: Replace message mandates with deliverable mandates | File diff gate |
| GE-46 | CM-21: Builder acknowledges hard alerts | Communication gate |
| GE-47 | CM-22: Builder reports page height + content ratio | Communication gate |
| GE-48 | CM-20: Compositional messaging about relationships | Communication gate |

---

## 5. CONVICTION/REFERENCE (Content for Prompt Layer 1 or Library)

### 5A. Conviction Items (Layer 1, ~70 lines total budget)

| ID | Item | Content Summary |
|----|------|-----------------|
| CV-01 | AE-01: Beauty brief | "Feel like opening a well-made book." 3-word personality: Warm. Authoritative. Unhurried. |
| CV-02 | AE-02: 4 resolved tensions | Temperature, Weight, Density, Decoration tensions with resolutions |
| CV-03 | AE-03: Perceptual sequence | 0-1s Arrival, 1-2s Orientation, 2-3s First delight, 3-5s Pattern detection |
| CV-04 | TH-03: Flagship = max intentionality | NOT most mechanisms, NOT most CSS. Most careful, most deliberate, most precise. |
| CV-05 | S1 Finding 1: 5 scales = mathematical ceiling | Alexander/Salingaros formula. Beyond 5, add CHANNELS not LEVELS. NEVER target 6+. |
| CV-06 | S1 Finding 6: PA-05 > scale count | 2 scales scored 4/4. 4 scales scored 1.5/4. PA-05 has PRIORITY over scale depth. |
| CV-07 | S1 Finding 10: Dual richness sources | Source 1 (constraint pressure) = automatic via soul. Source 2 (design intelligence) requires Opus. Both necessary. |
| CV-08 | AE-11: Guard against technique-as-demonstration | For each mechanism: "What does READER gain?" If "demonstrates the mechanism" -> fail. |
| CV-09 | AE-12: Intentional vs abandoned whitespace | Space between composed elements = intentional. Space after content trails off = abandonment. |

### 5B. Reference Items (Layer 4, Zero Prompt Cost)

| ID | Item | Location |
|----|------|----------|
| RF-01 | Full mechanism catalog (18 mechanisms) | `mechanism-catalog.md` |
| RF-02 | 48+ PA questions | `perceptual-auditing/SKILL.md` |
| RF-03 | Tension-composition pipeline | `tension-composition/SKILL.md` |
| RF-04 | Crown jewel techniques (CD-006, DD-006) | `validated-explorations/` |
| RF-05 | Prohibitions (22+) | `prohibitions.md` |
| RF-06 | Tokens | `tokens.css` |
| RF-07 | Semantic rules | `semantic-rules.md` |
| RF-08 | Scale exploration reports | `_scale-exploration/` |
| RF-09 | Flagship prep research reports | `_flagship-prep/` |
| RF-10 | 7-dimension richness model (for Pass 4 builder only) | S1 Finding 9 text |
| RF-11 | TH-01: Attention budget model (~100 units) | E2 + E4 documents |
| RF-12 | TH-02: Constraint pressure theory | Report 19 |
| RF-13 | TH-04: Richness = semantic density x restraint x spatial confidence | Anti-scale thesis |
| RF-14 | TH-05: Preparation paradox (27.5:1 compression) | E2 analysis |
| RF-15 | TH-07: Compositional vs vocabulary fluency | Two independent axes |
| RF-16 | TH-09: Compliance hierarchy (binary 100%, judgment 0%) | E1 + E4 |
| RF-17 | CP-03: Height estimation rules (paragraph ~92px, code ~315px, etc.) | Content-first methodology |
| RF-18 | CP-08: Use source vocabulary, not metaphor terms | Content-first |
| RF-19 | CP-09: Density from volume not importance | Content-first |
| RF-20 | CP-10: Count natural boundaries not headings | Content-first |
| RF-21 | CP-11: Content density planning table | Content-first |
| RF-22 | PL-04: Each pass receives ALL previous outputs | Pipeline architecture |
| RF-23 | PL-06: Handoff as artifacts not instructions | Pipeline architecture |
| RF-24 | PL-09: Pass 3 = no NEW mechanisms | Pipeline architecture |
| RF-25 | PL-11: Quality bands definition | Success criteria |
| RF-26 | PL-12: 24 target metrics | Success criteria |
| RF-27 | PL-16: Metacognitive reviewers | Process reference |
| RF-28 | PT-17: Pass 3 execution sequence (8 steps) | Pass 3 instructions |
| RF-29 | PT-18: Intentionality danger zones (18 rules) | Pass 4 reference |
| RF-30 | PT-26: Voice guide for multi-agent passes | Process reference |
| RF-31 | PT-28: Realistic metaphor survival 55-65% | Conviction reference |
| RF-32 | S1 Finding 9: 7-dimension richness model | Pass 4 reference |
| RF-33 | S3: Experiential wisdom from experiments | Team-lead reference |

---

## 6. DONE (Already In Place)

### 6A. Design System Enrichments Already Applied

| ID | Item | Evidence | File |
|----|------|----------|------|
| DN-01 | Per-category mechanism minimums (S:1+, H:1+, C:1+, D:1+, N:1+) | State 10: E1 APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-02 | Rhythm variation 3-transition minimum | State 10: E2 APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-03 | Landmark completeness gate (header/main/footer) | State 10: E3 APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-04 | Heading spacing ratio 1.5:1 binary rule | State 10: E4 APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-05 | Token compliance self-check >= 80% | State 10: E5 APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-06 | Ceiling context box | State 10: E6 APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-07 | Container width NON-NEGOTIABLE at 3+ locations | State 10: APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-08 | CPL formula | State 10: APPLIED, VERIFIED | tension-composition SKILL.md |
| DN-09 | Impact profiles on ALL 18 mechanisms | State 10: E7 APPLIED, VERIFIED | mechanism-catalog.md |
| DN-10 | Application mode guidance (mechanism #1) | State 10: E8 APPLIED, VERIFIED | mechanism-catalog.md |
| DN-11 | Zone background semantic mappings (mechanism #7) | State 10: E9 APPLIED, VERIFIED | mechanism-catalog.md |
| DN-12 | PA-05 sub-criteria (DESIGNED/COHERENT/PROPORTIONATE/POLISHED) | State 10: E10 APPLIED, VERIFIED | PA SKILL.md |
| DN-13 | Rhythm elevation note for Ceiling+ (PA-17, PA-41) | State 10: E11 APPLIED, VERIFIED | PA SKILL.md |
| DN-14 | Fresh-eyes principle note | State 10: APPLIED, VERIFIED | PA SKILL.md |
| DN-15 | Margin collapse warning | State 10: APPLIED, VERIFIED | PA SKILL.md |
| DN-16 | CLAUDE.md status files updated | State 10: Updated | design-system/CLAUDE.md |

### 6B. Existing Design System Content (Not New)

| ID | Item | Evidence |
|----|------|----------|
| DN-17 | 8 absolute prohibitions (#1-#8) | prohibitions.md lines 19-129 |
| DN-18 | 12 conditional prohibitions (#9-#20) | prohibitions.md lines 131-321 |
| DN-19 | 18 mechanisms with CSS, examples | mechanism-catalog.md |
| DN-20 | 5 named scales with fractal coherence | mechanism-catalog.md lines 804-867 |
| DN-21 | Mechanism summary table + usage guidance | mechanism-catalog.md |
| DN-22 | Color palette (primary, accent, background, zone, text) | tokens.css lines 24-61 |
| DN-23 | Typography (3 fonts, 10 sizes + aliases) | tokens.css lines 64-89 |
| DN-24 | Spacing scale (12 values + 3 semantic aliases) | tokens.css lines 92-113 |
| DN-25 | Border widths (4px/3px/1px) | tokens.css lines 118-125 |
| DN-26 | Syntax highlighting (7 colors) | tokens.css lines 128-137 |
| DN-27 | 5 semantic rule gaps documented | semantic-rules.md |
| DN-28 | Semantic value framework (3-question test) | semantic-rules.md |

### 6C. Process/Infrastructure Already In Place

| ID | Item | Evidence |
|----|------|----------|
| DN-29 | PROMPT-SLICING-STRATEGY.md | ephemeral/ceiling-preparation/ |
| DN-30 | INFORMATION-ISOLATION-MATRIX.md | ephemeral/ceiling-preparation/ |
| DN-31 | 20 flagship preparation reports | ephemeral/flagship-preparation/ |
| DN-32 | Unified action plan | 18-UNIFIED-ACTION-PLAN.md |
| DN-33 | Scale exploration research (6 reports) | _scale-exploration/ |
| DN-34 | Flagship prep research (6 reports) | _flagship-prep/ |
| DN-35 | Mode 4 PA methodology proven | 102 screenshots, 9 auditors, 48 questions |
| DN-36 | Screenshot pre-capture pattern proven | Mode 4 PA: zero contention |
| DN-37 | Binary vs judgment compliance law proven | 100% vs 0% across Middle + Ceiling |
| DN-38 | 8 enforcement types defined | E1-enforcement-architecture.md |

---

## 7. DISCARDED (Explicitly Cut With Reason)

| ID | Item | Reason |
|----|------|--------|
| DC-01 | DS-11: Syntax highlighting tokens | LOW priority. Already in tokens.css (lines 128-137). Post-flagship. |
| DC-02 | DS-19: Temporal identity tokens | LOW priority. Post-flagship. Most pages are static. |
| DC-03 | DS-20: Letter-spacing tokens | LOW priority. Post-flagship. |
| DC-04 | DS-21: Temporal extensions to 5 mechanisms | LOW priority. Post-flagship. |
| DC-05 | DS-22: Interactive complexity budget | LOW priority. Post-flagship. Level 1-2 only for flagship. |
| DC-06 | DS-23: 9-dimension richness vector model | MEDIUM priority but REFERENCE, not enrichment. Lives in S1 integration. |
| DC-07 | DS-24: Unified richness formula | MEDIUM priority but REFERENCE. Academic, not operational. |
| DC-08 | SK-06: Remove PA-03 (redundant) | MEDIUM but RISKY to remove mid-pipeline. Post-flagship. |
| DC-09 | TH-08: Constraint pressure experiment | Labeled HIGH by author but schedule risk too high. OPTIONAL if time permits. |
| DC-10 | PT-22: Print media query | MEDIUM but not relevant to flagship audit. Post-ship. |
| DC-11 | DS-10: Semantic spacing aliases | Already partially present (`--space-within`, `--space-between`, `--space-chapter`). Not blocking. |
| DC-12 | DS-12: Named type scale tokens | MEDIUM but not blocking. Current 10-size scale sufficient. |
| DC-13 | DS-14: Golden ratio grid | MEDIUM. Reference technique, not system enrichment. |
| DC-14 | DS-15: Beauty definition in semantic rules | MEDIUM. Goes to conviction (CV-01, CV-02), not system file. |
| DC-15 | DS-16: Formal metric definitions (CP, SD, RR, II) | MEDIUM. Post-flagship research item. |
| DC-16 | DISC-01: Ceiling prompt Sections 2.3-2.4 task/wave sequence | DELETE recommended by extraction. 48 lines of irrelevant context. |
| DC-17 | DISC-02: Ceiling prompt anti-spam table | DELETE recommended. Keep top 3 anti-patterns only. |

---

## 8. NUANCE RECOVERY ADDITIONS (Not in 187 Merged Items)

These items were identified by the nuance checkers (V1-V3) and integration analysts (S1-S4) as SIGNIFICANT items not captured in the 187 merged list.

### New BLOCKING Items

| ID | Item | Source | Action | Effort |
|----|------|--------|--------|--------|
| NR-01 | Builder self-scroll before handoff | S2 Report 01 (CRITICAL LOSS) | Add to builder prompt: "Scroll full page top-to-bottom before reporting done." | 1 min |
| NR-02 | Spatial budget CALCULATION mandate (sum all whitespace sources) | S2 Report 01 (CRITICAL LOSS), S3 II.2.3 | Add to Pass 0: "Sum zone padding + checkpoint margins + heading margins + transition gaps. Compare to content height. If ratio > 35% void: restructure." | 2 min |

### New HIGH Items

| ID | Item | Source | Action | Effort |
|----|------|--------|--------|--------|
| NR-03 | Metaphor interpretive DISTANCE criterion | S2 Report 02 (compressed) | Add to SK-09 rubric: interpretive distance must be >= 2 (not 0-1 literal mapping). | 2 min |
| NR-04 | ARC INVERSION detection | S2 Report 02 (CRITICAL LOSS) | Add to Pass 0: "Verify metaphor density arc matches content density arc direction." | 2 min |
| NR-05 | Q4 addition to Semantic Value Framework | S2 Report 03 (lost) | Add Q4: "WHY IS THIS SPACE EMPTY?" to semantic-rules.md. | 5 min |
| NR-06 | "Builder never scrolled" finding as process rule | S3 II.2.3 + V1 01-019 | Encode as self-check: "[ ] Scrolled full page at 1440px (top to bottom)." | 1 min |
| NR-07 | Dissent specificity signal protocol | S2 Report 06 (lost), S3 II.2.4 | When PA finding includes precise measurements, it MUST NOT be dismissed as artifact. | 2 min |
| NR-08 | Confirmation bias warning for verdict team | S2 Report 04 (CRITICAL LOSS) | Add to verdict synthesizer prompt: "Evaluate for neutral QUALITY, not success/failure narrative." | 2 min |
| NR-09 | Preparation ceiling hypothesis | S2 Report 04 (compressed) | Add to team-lead reference: confidence does not equal compliance. | REFERENCE |
| NR-10 | Act-specific mechanism deployment guidance | V3 N15-03 (significant) | Add mechanism-per-act mappings to Pass 2 builder reference. | 5 min |
| NR-11 | Weight decomposition for visual peaks | V3 N15-05 (moderate) | Add weight contributor breakdowns to beauty brief. | 3 min |
| NR-12 | Anti-metronome example sequence | V3 N15-07 (moderate) | Add concrete rhythm example to builder reference. | 2 min |
| NR-13 | PA hit rate data by dimension | V1 01-001 (missed) | Include dimension-specific hit rates in Mode 4 assignment protocol. | 3 min |

### New CONVICTION Items

| ID | Item | Source |
|----|------|--------|
| NR-14 | "12/12 concept + faithful execution = 1.5/4 product" | S2 Report 04 (CRITICAL LOSS). Concept quality != product quality. |
| NR-15 | "Richness comes from signal-to-silence ratio, not signal volume" | S1 Finding 7 + S2 Report 02 |
| NR-16 | "Content-driven decisions create more perceptual impact than structural ones" | S3 I.1.3 (Middle experiment) |

---

## 9. CRITICAL PATH SUMMARY

### Pre-Flagship Execution Order

```
PHASE 1: Design System Enrichments (~45 min, 7 items)
  BT-01 -> BT-06 -> BT-04+BT-05 -> BT-02 -> BT-03 -> BT-07
  Total: ~328 lines across 4 files
  Verification: E3 Phase 1 automated script + cold-read

PHASE 2: Skill Enrichments (~15 min, 4 items)
  BT-08, BT-09, BT-10, BT-11 (parallel)
  Total: ~50 lines across 2 files
  Verification: E3 Phase 2

PHASE 3: Content Selection (~10 min, 1 item)
  BT-20 (select content)

PHASE 4: Prompt Assembly (~60 min, 8 items)
  BT-19 (content template) -> BT-12 (conviction) || BT-13+BT-15 (exec spec)
  -> BT-14 (coord spec) -> BT-16 (builder template) -> BT-17 (per-pass) -> BT-18 (routing)
  Total: ~240 lines across ~8 files
  Verification: E3 Phases 3-6

PHASE 5: Gate/Protocol Preparation (~30 min, 6 items)
  BT-25 (JS gate runner) || BT-29 (gate spec) || BT-30 (composition gate)
  BT-26+BT-27+BT-28 (communication protocol)
  BT-31 (Mode 4 spec)
  BT-22+BT-23+BT-24 (pipeline + kill criteria)

PHASE 6: Verification (~45-60 min)
  E3 Phases 1-6 (parallel) -> Phase 7 (meta-verifier with VETO)
  Total: 14 evidence artifacts -> V7-FINAL-VERDICT.md

PHASE 7 (OPTIONAL): Calibration Run (~150 min)
  HT-20: Run pipeline on different content at ceiling tier

PHASE 8: Execute Flagship (~120-320 min)
```

**Total pre-flagship critical path: ~160-200 min (Phases 1-6)**
**With calibration: ~310-350 min**
**With flagship execution: ~430-670 min total**

### Verification That NOTHING Is Missing

**Cross-reference against merged list:**
- 187 merged items: All classified (31 BLOCKING TODO + 28 HIGH TODO + 8 conflicts + 48 gate-enforced + 42 conviction/reference + 38 done + 17 discarded = 212 total including 25 additions)
- V1 nuance recovery (88 missed items): 4 critical threshold discrepancies resolved via TC-01 through TC-08. Significant operational nuances captured in NR-01 through NR-13.
- V2 nuance recovery (200+ missed nuances): Systematic patterns (performative checkpoint examples, zone names, specific pixel values) are REFERENCE material. Critical operational items captured.
- V3 nuance recovery (65 missed nuances, 7 significant): Act-specific mechanism guidance (NR-10), weight decompositions (NR-11), anti-metronome examples (NR-12) added as HIGH TODO.
- S1 scale integration (4 at-risk findings): Finding 1 (mathematical ceiling) -> CV-05. Finding 8 (iteration protocol) -> HT-26. Finding 10 (dual richness) -> CV-07. Finding 6 (smoking gun) -> CV-06.
- S2 research integration (5 near-BLOCKING upgrades): Builder self-scroll (NR-01), spatial calculation (NR-02), metaphor distance (NR-03), arc inversion (NR-04), Q4 framework (NR-05).
- S3 cross-experiment wisdom: Experiential laws encoded in NR-06 through NR-08 and conviction items.
- S4 metacognitive blind spots: 5 blind spots addressed through conviction items and team-lead references.

---

**END GAP ANALYSIS**

**Total items classified:** 212
**BLOCKING TODO:** 31 items (~160-200 min pre-work)
**HIGH TODO:** 28 items (~80 min additional)
**Threshold conflicts:** 8 (all resolved)
**Gate-enforced:** 48 (no pre-work)
**Conviction/Reference:** 42 (content for prompt layers)
**Already done:** 38
**Discarded:** 17

**Key finding:** The 7 BLOCKING design system enrichments (BT-01 through BT-07) are the CRITICAL PATH. Insertable text is READY. None have been applied. Total: ~328 lines across 4 files, ~45 min. This is the highest-leverage work with the shortest execution time.
