# MASTER PRE-FLIGHT CHECKLIST: Flagship Experiment

**Author:** final-synthesizer (Opus 4.6)
**Date:** 2026-02-17
**Task:** #13 -- FINAL deliverable of the pre-flight team
**Inputs:** 12-gap-analysis.md (212 items), E1-E4 meta-cognitive frameworks, S1-S4 integration analyses, V1-V3 nuance recovery, 18-UNIFIED-ACTION-PLAN.md
**Purpose:** The single document that converts ALL research into an actionable, enforceable, verifiable checklist. Self-contained -- someone reading ONLY this file can execute the entire pre-flagship preparation.

---

## SECTION 1: EXECUTIVE SUMMARY

### By the Numbers

| Category | Count |
|----------|-------|
| **BLOCKING TODO** | 33 items (31 from gap analysis + 2 from nuance recovery) |
| **HIGH TODO** | 28 items |
| **THRESHOLD CONFLICTS** | 8 (all resolved) |
| **GATE-ENFORCED** (no pre-work) | 48 items |
| **CONVICTION/REFERENCE** | 42 items |
| **ALREADY DONE** | 38 items |
| **DISCARDED** | 17 items |
| **TOTAL CLASSIFIED** | 214 |

### Estimated Pre-Flagship Effort

| Phase | Items | Time | Dependency |
|-------|-------|------|------------|
| Phase 1: Design System Enrichments | 7 | ~45 min | None -- start here |
| Phase 2: Skill Enrichments | 4 | ~15 min | None (parallel with Phase 1) |
| Phase 3: Threshold Resolution | 8 | ~5 min (documentation) | Phase 1 |
| Phase 4: Prompt Assembly | 8 | ~60 min | Phases 1-3 |
| Phase 5: Gate/Protocol Preparation | 6 | ~30 min | Phase 4 |
| Phase 6: Content Preparation | 3 | ~30 min | None (parallel) |
| Phase 7: Verification | 7 phases | ~45-60 min | Phases 1-6 |
| **TOTAL CRITICAL PATH** | **33 BLOCKING** | **~160-200 min** | |

### The 3 Things That Matter Most

1. **Apply the 7 BLOCKING design system enrichments (BT-01 through BT-07).** Insertable text is READY. None have been applied. ~328 lines across 4 files, ~45 min. This is the highest-leverage work with the shortest execution time. Without these, the ceiling experiment's void failure repeats.

2. **Assemble the 4-layer execution prompt (BT-12 through BT-18).** Builder prompt must be <= 55 lines, ~37 attention units, zero judgment rules, zero MAY/SHOULD/CONSIDER. Without this, the 1,004-line ceiling overload repeats.

3. **Prepare the gate runner and communication protocol (BT-25 through BT-31).** Binary gates with programmatic enforcement. Gate execution log with 22 minimum entries. Without these, the zero-enforcement ceiling pattern repeats.

### GO/NO-GO Criteria

**GO:** ALL of the following:
- [ ] All 33 BLOCKING items checked off
- [ ] Verification Phase 7 verdict = GO (from VETO agent)
- [ ] Content selected (different from Middle/Ceiling)
- [ ] Execution prompt assembled, attention audit passes (surplus >= 30)

**NO-GO:** ANY of the following:
- Any BLOCKING item unchecked
- Phase 7 VETO agent issues NO-GO
- Zero MAY/SHOULD/CONSIDER grep returns > 0 hits in Layer 2
- Prompt line count > 240 for Layers 1-3

---

## SECTION 2: BLOCKING TODO (Must Complete Before Flagship)

### Phase 1: Design System Enrichments (7 items, ~328 lines, ~45 min)

**Implementation order:** BT-01 -> BT-06 -> BT-04+BT-05 -> BT-02 -> BT-03 -> BT-07

---

#### BT-01: Add Prohibition #21 -- Maximum Whitespace (10 min)

- [ ] **Action:** Insert ~40 lines into `prohibitions.md` after Prohibition #20. Content: "NEVER Allow a Full Viewport Height of Contentless Space." Includes binary measurement (scan at viewport-height increments, check 30% content coverage, 2+ consecutive positions below 30% = FAIL), one documented exception (breathing zone between content-bearing sections).
- **Where:** `design-system/compositional-core/identity/prohibitions.md` after line ~321
- **Verification:** grep for "NEVER Allow a Full Viewport Height", "30% content coverage", "Prohibition #21". Line count >= 388 (baseline 353).
- **Enforcement:** Programmatic gate SC-02 (max contiguous void). Builder self-check item #3. Kill criterion KB-03.
- **If skipped:** The ceiling experiment's exact failure repeats. 70-80% void. DO NOT SHIP verdict. 9/9 Mode 4 auditors flag it again.
- **Provenance:** State assessment 08 (ABSENT), 12-gap-analysis BT-01, E3 Phase 1, S3 II.2.1 (builder never scrolled), 01-process-retrospective

---

#### BT-02: Add Transition Grammar Section (10 min)

- [ ] **Action:** Insert ~80 lines into `mechanism-catalog.md` after Combination Rules section. Content: 3 transition types (HARD CUT, SPACING SHIFT, CHECKPOINT) with CSS code blocks, mutual exclusivity criteria, selection rules, prohibition on "no transition (empty space)." Reference to --space-max-zone (96px cap).
- **Where:** `design-system/compositional-core/grammar/mechanism-catalog.md` after line ~940
- **Verification:** grep for "Transition Grammar", "HARD CUT", "SPACING SHIFT", "CHECKPOINT", "space-max-zone". Line count >= 1163 (baseline 1093).
- **Enforcement:** Builder self-check item #7 (3+ transition types). Gate GT-05 composition verification.
- **If skipped:** Builder has no vocabulary for zone transitions. Metronomic or absent transitions. PA-05c PROPORTIONATE likely fails. Middle experiment's "professionally stiff" repeats.
- **Provenance:** State assessment 08 (PARTIALLY PRESENT in wrong file), 12-gap-analysis BT-02, 02-enrichment-specifications

---

#### BT-03: Add Restraint Protocol Section (10 min)

- [ ] **Action:** Insert ~50 lines into `mechanism-catalog.md` after Transition Grammar section. Content: per-viewport density cap (4 distinct mechanisms), per-third distribution minimum, rejection documentation requirement (tier-specific counts), "CONSIDERED AND REJECTED" template, mechanism density cap.
- **Where:** `design-system/compositional-core/grammar/mechanism-catalog.md` after BT-02 insertion
- **Verification:** grep for "Restraint Protocol", "4 distinct mechanisms", "every third of the page", "CONSIDERED AND REJECTED". Combined A1+A2 line count >= 1213.
- **Enforcement:** Gate GT-05 (restraint ratio >= 1.5, mechanism count <= 16). Gate GT-28 (rejection count >= 21). Gate GT-29 (unused mechanisms >= 2).
- **If skipped:** 14 mechanisms deployed with 0 rejected (Ceiling pattern). Signal saturation. "Every mechanism present, none perceivable."
- **Provenance:** State assessment 08 (ABSENT), 12-gap-analysis BT-03, 04-restraint-protocol, S3 Pattern 4 (signal-to-silence inversion)

---

#### BT-04: Add Content Density Floors (5 min)

- [ ] **Action:** Insert ~60 lines into `semantic-rules.md` as Gap 6. Content: minimum content per zone TYPE (dedicated: 3+ paragraphs OR 2+ components; breathing: transition text only; bedrock: unlimited), zone count ceiling table indexed by word count (e.g., <= 1,500 words = max 3 zones), 2 actions when below minimum (MERGE or ADD), binary test for consecutive empty viewport height. Core principle: "Zones exist to SERVE content, not content to fill zones."
- **Where:** `design-system/compositional-core/guidelines/semantic-rules.md` after line ~278
- **Verification:** grep for "Content Density Floors", "3+ paragraphs OR 2+ components", "Zone Count Ceiling", "Zones exist to SERVE content". Line count >= 430 (baseline 380).
- **Enforcement:** Gate GT-01 (spatial budget, content/zone >= 1.5). Gate GT-30 (zone necessity test). Kill criterion KB-02.
- **If skipped:** Zones created to satisfy metaphor architecture, not content volume. Empty zones. Void accumulation. Ceiling's performative zones repeat.
- **Provenance:** State assessment 08 (PARTIALLY PRESENT), 12-gap-analysis BT-04, 02-content-form-analysis (3 REAL zones, 3 PERFORMATIVE)

---

#### BT-05: Add Content-Form Fit Guidance (5 min)

- [ ] **Action:** Insert ~55 lines into `semantic-rules.md` as Gap 7, after BT-04 insertion. Content: form-to-content-volume table (bento grid requires 4+ items, progressive disclosure requires 3+ distinct phases, etc.), "Enough Content?" binary gate, "simplest form" inverse test, concrete bad example (1-paragraph section with excessive treatment). Core principle: "Form follows content volume, not aesthetic ambition."
- **Where:** `design-system/compositional-core/guidelines/semantic-rules.md` after BT-04 insertion
- **Verification:** grep for "Content-Form Fit", "Form follows content volume", "simplest form". Combined A3+D3 line count >= 485 from 380 baseline.
- **Enforcement:** Gate GT-01 (spatial budget). Gate CP-04 (content-to-pattern selection protocol). Kill criterion KB-02.
- **If skipped:** Architecture exceeds content volume. Form decisions not checked against content. The ceiling experiment's root cause (metaphor-driven architecture exceeding content capacity).
- **Provenance:** State assessment 08 (ABSENT), 12-gap-analysis BT-05, S2 Report 02 (density arc inversion)

---

#### BT-06: Add Maximum Spacing Tokens (2 min)

- [ ] **Action:** Insert ~8 lines into `tokens.css`. Content: `--space-max-section: 96px;` and `--space-max-zone: 96px;` with comment explaining that exceeding this requires a CHECKPOINT element, not more whitespace.
- **Where:** `design-system/compositional-core/vocabulary/tokens.css` after line ~113 (spacing scale section)
- **Verification:** grep for "space-max-section", "space-max-zone", "Spacing Maximum". Line count >= 180 (baseline 174).
- **Enforcement:** Builder uses `var(--space-max-zone)` as ceiling. Token compliance gate catches raw values exceeding 96px.
- **If skipped:** Nothing prevents 128px, 160px, 200px spacing. Void accumulates through large structural gaps. S3 II.2.3: "~2,700px of whitespace from just three sources."
- **Provenance:** State assessment 08 (ABSENT), 12-gap-analysis BT-06, S3 II.2.3 (spacing budget arithmetic)

---

#### BT-07: Add Prohibition #22 -- Front-Loaded Visual Weight (5 min)

- [ ] **Action:** Insert ~35 lines into `prohibitions.md` after Prohibition #21 (BT-01). Content: "NEVER Concentrate All Visual Interest in the First 30% of Scroll." Binary measurement: scan for designed moments (2+ mechanisms visibly intersecting at one location), require >= 1 past 50% scroll depth. 3-step mechanical process. Exception for very short pages only.
- **Where:** `design-system/compositional-core/identity/prohibitions.md` after BT-01 insertion
- **Verification:** grep for "NEVER Concentrate All Visual Interest", "Prohibition #22", "designed moment", "50% scroll depth". Combined B1+B3 line count >= 418 from 353 baseline.
- **Enforcement:** Gate GT-10 (BP-3: exactly one visual climax). CONV-18 (designed moment per quartile). Builder self-check.
- **If skipped:** Visual interest dies at 30% scroll. Reader abandons. "Front-loaded design" anti-pattern. Ceiling's DM-1 through DM-5 clustered in 50-65% band, none past 75%.
- **Provenance:** State assessment 08 (ABSENT), 12-gap-analysis BT-07, S3 III.3.3 (14 deployed, 1 perceived)

---

### Phase 2: Skill Enrichments (4 items, ~50 lines, ~15 min)

All 4 items can be done in PARALLEL. Target files: PA SKILL.md and tension-composition SKILL.md.

---

#### BT-08: Add Void Guardrails + 4 Spatial PA Questions (10 min)

- [ ] **Action:** Add PA-50 through PA-53 to `~/.claude/skills/perceptual-auditing/SKILL.md` (Tier 2 spatial questions section). PA-50: empty viewport count. PA-51: content percentage of total scroll. PA-52: designed moment per third. PA-53: width utilization. Add void guardrail specifications: max consecutive blank 1.5 viewports, min content 60%, visual weight distribution constraint.
- **Where:** `~/.claude/skills/perceptual-auditing/SKILL.md`, Tier 2 spatial questions section + new void guardrails section
- **Verification:** grep for "PA-50", "PA-51", "PA-52", "PA-53", "1.5 viewport", "60% of total scroll".
- **Enforcement:** Auditors use these questions during Mode 4 PA. Embedded auditor uses void threshold during build.
- **If skipped:** Auditors improvise void detection. The ceiling experiment's exact blind spot (no spatial questions in PA) recurs. Mode 4 found the void through gestalt, not through questions.
- **Provenance:** State assessment 09 (ABSENT), 12-gap-analysis BT-08, V1 01-001 (dimension hit rates), S1 Action 8

---

#### BT-09: Add Metaphor Scoring Rubric + Rejection Checklist (10 min)

- [ ] **Action:** Add 6-criterion metaphor scoring rubric (18 points total, threshold >= 12/18) to `~/.claude/skills/tension-composition/SKILL.md`, Phase 3 (Metaphor Collapse). Must include Interpretive Distance (0-3) and Content-Shape Fit (0-3). Add 6 binary rejection checks. Key: interpretive distance >= 2 required (not 0-1 literal mapping).
- **Where:** `~/.claude/skills/tension-composition/SKILL.md`, Phase 3
- **Verification:** grep for "Interpretive Distance", "Content-Shape Fit", "12/18 threshold", "rejection checklist".
- **Enforcement:** Gate GT-02 (metaphor resonance). Kill criterion KB-05 if metaphor fails rejection checklist.
- **If skipped:** "Secure facility for secure facility docs" repeats. Zero interpretive distance. Metaphor is a label, not a structure. Ceiling's metaphor scored 12/12 on old rubric but 40% visual survival without labels.
- **Provenance:** 12-gap-analysis BT-09, S2 Report 02 (metaphor isomorphism), S3 II.2.2 (12/12 concept, 1.5/4 product), NR-03

---

#### BT-10: PA-09 Severity Calibration + PA-05c Expansion (5 min)

- [ ] **Action:** Calibrate PA-09 severity in PA SKILL.md: 1-2 viewports void = LOOKS-WRONG, 3-5 viewports = WOULD-NOT-SHIP, 6+ = CATASTROPHIC. Expand PA-05c PROPORTIONATE to 3 sub-dimensions: horizontal proportion (container width usage), vertical proportion (visual weight across scroll), breathing proportion (designed vs abandoned negative space). Each must pass separately.
- **Where:** `~/.claude/skills/perceptual-auditing/SKILL.md`, PA-09 and PA-05c sections
- **Verification:** grep for "WOULD-NOT-SHIP", "CATASTROPHIC", "Horizontal proportion", "Vertical proportion", "Breathing proportion".
- **Enforcement:** Auditors use calibrated severity. PA-05c produces precise diagnosis of WHICH proportion dimension fails.
- **If skipped:** Void severity ambiguous. PA-05 fails without identifying which proportion dimension fails. Ceiling's PA-05c was a single binary that missed the decomposition.
- **Provenance:** State assessment 09, 12-gap-analysis BT-10, S3 III.3.2 (PA-05 downgraded 3/4 to 1.5/4)

---

#### BT-11: Elevate PA-17 and PA-41 to Ceiling+ Tier (2 min)

- [ ] **Action:** Move PA-17 (rhythm) and PA-41 (consistency) from Tier 3 to mandatory for all Ceiling+ audits in PA SKILL.md. Currently a NOTE at line 169; convert to formal tier change.
- **Where:** `~/.claude/skills/perceptual-auditing/SKILL.md`, ceiling elevation note
- **Verification:** grep for PA-17 and PA-41 in Tier 2 section.
- **Enforcement:** All Mode 4 auditors evaluate rhythm and consistency for Ceiling+ pages.
- **If skipped:** Auditors may skip rhythm/consistency questions. Middle's "metronomic" pattern missed.
- **Provenance:** State assessment 09, 12-gap-analysis BT-11

---

### Phase 3: Threshold Resolution (8 items, ~5 min documentation)

All 8 threshold conflicts have RESOLVED values. Document the authoritative values in the execution prompt. See SECTION 6 for the full resolution table.

---

### Phase 4: Prompt Assembly (8 items, ~240 lines, ~60 min)

---

#### BT-12: Create Layer 1 Conviction Document (~70 lines) (15 min)

- [ ] **Action:** Write conviction document containing: thesis ("difference is restraint, not complexity"), load-bearing metaphor test, beauty brief ("feel like opening a well-made book"), 3-word personality (Warm/Authoritative/Unhurried), resolved tensions, 20-line CD-006 exemplar, 20-line DD-006 exemplar, scale ceiling conviction (5 scales max, PA-05 > scale count), dual richness sources (constraint pressure + design intelligence), guard against technique-as-demonstration.
- **Where:** New file in execution prompt package
- **Verification:** E3 Phase 3 -- line count ~70. Section markers for CONVICTION/Layer 1. grep for "restraint", "Warm", "Authoritative", "Unhurried".
- **Enforcement:** Read by creative agents (Opus, Passes 0/3/4). Shapes intent without binary rules.
- **If skipped:** No qualitative frame. Builder optimizes for checklist compliance without understanding WHAT "designed" means. "Professionally stiff" repeats.
- **Provenance:** 12-gap-analysis BT-12, CV-01 through CV-09, NR-14 through NR-16, S1 Findings 1/6/10, S4 Section 2.2

---

#### BT-13: Create Layer 2 Execution Spec (~100-120 lines) (20 min)

- [ ] **Action:** Write execution spec with 8 sections: Mission (10 lines), Spatial (15), Soul (10), Compositional (15), Process (15), Self-Check (15), Success Criteria (10), Kill Criteria (10). Contains 25 critical binary rules. Zero judgment rules. Zero MAY/SHOULD. Integrated with BT-15 (25 binary rules) and BT-16 (builder template).
- **Where:** New file in execution prompt package
- **Verification:** E3 Phase 3 -- line count <= 120. grep for MAY/SHOULD/CONSIDER returns zero in this file. Attention cost calculation <= 60 units.
- **Enforcement:** Builder reads this as primary instructions. Every rule is binary with pass/fail threshold.
- **If skipped:** No execution spec. Builder receives ad-hoc instructions. 1,004-line ceiling overload repeats.
- **Provenance:** 12-gap-analysis BT-13, E4 (55-line template), E2 (attention budget model), S3 Law 10 (preparation ceiling ~100-200 lines)

---

#### BT-14: Create Layer 3 Coordination Spec (~60 lines) (10 min)

- [ ] **Action:** Write coordination spec with: Agent roster (25 lines), Communication obligations (20 lines), Audit protocol (15 lines). Includes 5-pass pipeline (Pass 0-4 with time budgets), 5-gate system architecture (Gate 0-5), team-lead role definition ("Your primary deliverable is the gate execution log"), fix cycle protocol (max 2, then abort per decision matrix), communication log format.
- **Where:** New file in execution prompt package
- **Verification:** E3 Phase 3 -- line count ~60. Section markers for COORDINATION/Layer 3.
- **Enforcement:** Team-lead reads as orchestration guide. Gate sequence and timing specified.
- **If skipped:** No coordination structure. Team-lead improvises agent sequencing. Gate timing unspecified. Zero-messaging ceiling pattern repeats.
- **Provenance:** 12-gap-analysis BT-14, BT-22 (pipeline), BT-26/27 (communication), E1 Parts 4-5

---

#### BT-15: Write 25 Binary Rules + Convert CAPABILITY to OBLIGATION (Integrated with BT-13)

- [ ] **Action:** Distill all items to 25 critical binary rules in 5 groups: SPATIAL (4 rules), SOUL (8), STRUCTURE (5), PROCESS (4), RHYTHM (3), KILL (1). Convert every CAN to MUST. Add "if zero messages at Gate 1: team-lead PAUSES build." Use E4 encoding: VERB + EXACT VALUE + VERIFICATION METHOD. Zero hedging (no should, consider, ensure, aim for, try to, where possible).
- **Where:** Integrated into Layer 2 execution spec (BT-13)
- **Verification:** E3 Phase 3 -- count binary rules = 25. grep for CAN/MAY returns zero in Layer 2.
- **Enforcement:** Each binary rule achieves ~100% compliance. Zero judgment rules at ~0% compliance.
- **If skipped:** Judgment rules contaminate execution spec. "CAN message" produces zero messages. "Should feel balanced" produces unbalanced output.
- **Provenance:** E1 (zero-guideline principle), E4 (encoding laws), S3 Laws 1/3 (binary 100%, judgment 0%, agents don't spontaneously communicate)

---

#### BT-16: Create Builder Prompt Template (~55 lines) (15 min)

- [ ] **Action:** Create the ~55-line builder prompt using E4 encoding strategy. Structure: FAIL IF (3 lines, primacy position), SPACE (7 lines), SOUL (9 lines), COMPOSITION (8 lines), PROCESS (5 lines), TOKENS (4 lines), SELF-CHECK (11 lines, recency position). Use code block format for CSS rules, checkbox format for self-check, table format for mechanisms. Bold caps for 3 killer constraints ONLY.
- **Where:** Builder prompt template file
- **Verification:** Attention cost audit: demand <= 37 units, surplus >= 63. Encoding scorecard: zero judgment rules, zero hedging. Line count <= 80.
- **Enforcement:** Builder sees ~55 lines. Everything else routed to gates/references.
- **If skipped:** Builder receives unstructured instructions. Attention overload. Ceiling's 128-unit demand vs 100-unit budget repeats.
- **Provenance:** E4 Section 6 (complete template), E2 Section 6 (10 essential items), S3 Law 10

---

#### BT-17: Create Phase-Specific Prompts (3 files) (15 min)

- [ ] **Action:** Create per-pass prompts: Pass 1 ~35 attention units (spatial skeleton), Pass 2 ~40 units (mechanism deployment), Pass 3 ~20 units (metaphor integration). Only rules relevant to that pass. Pass 0 and Pass 4 use Opus with separate conviction-integrated prompts.
- **Where:** 3 separate prompt files (Pass 1, Pass 2, Pass 3)
- **Verification:** Per-pass attention audit. No pass exceeds 40 binary rules. Every pass has >= 50% surplus.
- **Enforcement:** Each pass agent sees only relevant rules. Attention preserved for creative work.
- **If skipped:** All passes see all rules. Attention waste. Rules for Pass 3 consume Pass 1 builder's budget.
- **Provenance:** E4 Section 8 (per-pass budgets), E2 Section 3.3 (routing architecture)

---

#### BT-18: Route Preparation Outputs to Correct Recipients (10 min)

- [ ] **Action:** Create routing table classifying every action item into: Rules -> Builder (short, ~40% of total). Gates -> Team-lead (medium, ~30%). Vocabulary -> Planner. Checklists -> Auditors. Do NOT send auditor-only content to builder. Verify builder prompt contains zero PA questions, zero kill criteria, zero retrospective framing.
- **Where:** Routing table in coordination spec (BT-14)
- **Verification:** E2 routing check -- verify no auditor-only content in builder prompt. No kill criteria text in builder prompt.
- **Enforcement:** Information routing prevents attention waste. Builder sees ~40% of rules; 60% enforced by infrastructure.
- **If skipped:** All information sent to builder. 128 attention units (ceiling pattern). Zero surplus. Spatial proportion shed first.
- **Provenance:** E2 Sections 3.3, 5.1 (action item classification architecture), E1 Part 3 (classification rules)

---

### Phase 5: Gate/Protocol Preparation (6 items, ~30 min)

---

#### BT-25: Prepare Programmatic Gate Runner JavaScript (15 min)

- [ ] **Action:** Write complete `runSpatialConfidenceGate()` function for SC-01 through SC-03, SC-05 through SC-07. Include void detection script (elementsFromPoint scanning at 50px intervals across full page height). Function must be syntactically valid (node parse check passes) and self-contained.
- **Where:** JavaScript file referenced by spatial-auditor prompt
- **Verification:** E3 Phase 4 -- `node -e "new Function(code)"` exits 0. Function is self-contained. Output is structured PASS/FAIL report.
- **Enforcement:** Spatial auditor runs the script. Output = structured JSON/markdown report with measured values and thresholds.
- **If skipped:** Spatial gate relies on visual estimation. Container width, void ratio, content distribution measured by eye (unreliable). The ceiling's measurement error (2160px false positive) repeats.
- **Provenance:** 12-gap-analysis BT-25, 03-spatial-confidence-gate.md, E3 Phase 4

---

#### BT-26: Define 5 Mandatory Communication Checkpoints (Integrated with BT-14)

- [ ] **Action:** Define 5 checkpoints as MUST (not CAN): A (post-plan read-through: biggest spatial concern + whitespace calculation + plan read confirmation), B (post-build report: total page height + content-to-void ratio + section count + deviations), C (spatial gate result to all agents), D (post-elaboration report), E (final build report). Each with required fields and measurement content.
- **Where:** Layer 3 coordination spec + Layer 2 process section
- **Verification:** E3 Phase 5 -- grep for "MUST" with each checkpoint. Zero MAY/CAN references to checkpoints.
- **Enforcement:** Communication gate type (E1 Type 8). Team-lead verifies at each gate boundary. Zero messages at Gate 1 = PAUSE BUILD.
- **If skipped:** Zero messages (both Middle and Ceiling pattern). Builder can't ask planner about footer. Missing footer recurs. S3 Law 3: "Agents do not spontaneously communicate."
- **Provenance:** 12-gap-analysis BT-26, E1 Type 8 (communication gate), S3 I.1.4 (zero messages corrected)

---

#### BT-27: Define Message Format + Routing Table (Integrated with BT-14)

- [ ] **Action:** Define 4 message types: BLOCKING-DEPENDENCY, QUALITY-GATE, CLARIFICATION-REQUEST, ANOMALY-FLAG. Define 17-pairing routing table. PA/novelty agents = PROHIBITED receivers (fresh-eyes isolation maintained). Messages must contain SPECIFIC NUMBERS, not narratives.
- **Where:** Layer 3 coordination spec
- **Verification:** E3 Phase 5 -- message types and routing table present.
- **Enforcement:** Team-lead enforces routing. PA isolation maintained. Message without numbers = communication gate FAIL.
- **If skipped:** Messages informal. PA agents contaminated with build context. Fresh-eyes principle violated.
- **Provenance:** 12-gap-analysis BT-27, E1 FM-E4 (Goodhart's Law mitigation)

---

#### BT-28: Define Escalation Triggers + Diagnosis-Before-Fix (5 min)

- [ ] **Action:** Define 3 escalation triggers: uncertainty > 80% confidence threshold, WOULD-NOT-SHIP finding, unexpected discovery. Require root cause classification (CSS/CONTENT/ARCHITECTURE) with evidence BEFORE any fix. CSS fixes for architecture problems are PROHIBITED.
- **Where:** Layer 2 process section
- **Verification:** Triggers exist with binary criteria. Diagnosis protocol present.
- **Enforcement:** Communication gate. Team-lead responds APPROVED or REDIRECTED. Root cause must be classified before fix begins.
- **If skipped:** CSS fixes applied to architecture problems. Fixes make page worse. Ceiling pattern: cold-look NOs increased from 2 to 7 post-fix.
- **Provenance:** 12-gap-analysis BT-28, S3 II.2.5 (fix team solved wrong problem), S2 Report 06 (process debt pattern)

---

#### BT-29: Define Spatial Confidence Gate (Post-Pass-1) + Gate Architecture (10 min)

- [ ] **Action:** Specify 7 binary checks (SC-01 through SC-07) with thresholds: SC-01 container 940-960px, SC-02 max contiguous void <= 2160px, SC-03 content in >= 50% of scroll (skeleton stage), SC-04 squint test (25% zoom, 3+ content regions), SC-05 header <= 20% of first viewport (288px), SC-06 CPL 45-80, SC-07 footer present with content. All MUST PASS. Max 2 fix cycles, then ABORT. Define 5-gate system: Gate 0 -> Gate 1+2 (parallel) -> Gate 3 -> Gate 4 -> Gate 5.
- **Where:** Gate specification document referenced by team-lead and spatial-auditor
- **Verification:** E3 Phase 4 -- all gates have definition + measurement + fail response + evidence artifact. All are self-contained.
- **Enforcement:** Programmatic gate + screenshot gate. Team-lead logs to gate execution log. SC-01/02/03/05/06/07 = programmatic. SC-04 = screenshot.
- **If skipped:** No spatial accountability. Void, header proportions, container width all unchecked between passes. Ceiling's spatial failure mode repeats undetected.
- **Provenance:** 12-gap-analysis BT-29, 03-spatial-confidence-gate.md, E1 Part 2 (summary matrix)

---

#### BT-30: Define Composition Verification Gate (Post-Pass-2) (5 min)

- [ ] **Action:** Specify combined gate: mechanism count <= 16, restraint ratio >= 1.5, zone visibility (all planned zones have visual boundary without labels), spatial re-check (SC-02+SC-03 re-verification), rejection count >= 21, silence zones >= 2, signal-to-silence 0.6-0.8:1, structural overhead <= 20%.
- **Where:** Gate specification document
- **Verification:** All checks have thresholds. File diff gate for restraint map (>= 21 entries).
- **Enforcement:** File diff gate + programmatic checks. Team-lead verifies.
- **If skipped:** Mechanism deployment unchecked. Signal saturation. Restraint ratio unverified. 14 mechanisms, 1 perceivable repeats.
- **Provenance:** 12-gap-analysis BT-30, 04-restraint-protocol, S3 III.3.3, S3 Law 4

---

#### BT-31: Define Ship-Ready Gate + Mode 4 PA Protocol (10 min)

- [ ] **Action:** Specify final gate: Full Mode 4 (9 auditors, 48+ PA questions including PA-50 through PA-53, 3 viewports), screenshot pre-capture pattern (team-lead takes ALL screenshots before spawning auditors), programmatic audit, comparative audit (vs CD-006/DD-006), blind novelty evaluation. Include dissent protection: if ANY auditor reports WOULD-NOT-SHIP with specific measurements, that finding MUST NOT be dismissed without investigation.
- **Where:** Gate specification + audit protocol
- **Verification:** Mode 4 protocol specified. Pre-capture pattern documented. Dissent protection rule present.
- **Enforcement:** Screenshot gate + PA evaluation. Ship/No-Ship verdict. Dissent specificity signal: precise measurements = genuine observation, not artifact.
- **If skipped:** Lighter audit misses dominant defects (proven: 2-PA missed what 9-auditor caught). PA-2 dismissal repeats.
- **Provenance:** 12-gap-analysis BT-31, S3 III.1-3 (Mode 4 validation), S3 Law 5/8, S2 Report 04 (confirmation bias)

---

### Phase 6: Content Preparation (3 items, ~30 min)

---

#### BT-19: Create Content Inventory Template (10 min)

- [ ] **Action:** Create complete template with: SOURCE, WORD COUNT, CONTENT TYPE MIX, READING TIME, SECTION CATALOG (per-section: type, words, code blocks, tables, lists, diagrams, callouts, density, reader intent, dependencies), NATURAL GROUPINGS, DENSITY MAP with peak position, CONTENT BOUNDARIES, ESTIMATED HEIGHT MAP (paragraph ~92px, code ~315px, table ~200px, list ~150px), CONTENT-ONLY ZONE COUNT.
- **Where:** Template file for Pass 0 agent
- **Verification:** E3 Phase 6 -- template exists with all required fields.
- **Enforcement:** Content architect (Pass 0) fills template. Team-lead verifies at Gate 0.
- **If skipped:** No content inventory. Metaphor derived without content knowledge. Architecture exceeds content volume. Ceiling's root cause.
- **Provenance:** 12-gap-analysis BT-19, S3 IV.4.3 (content volume unchecked), S2 Report 02 (zone-by-zone inventory)

---

#### BT-20: Select Content Different from Middle/Ceiling (10 min)

- [ ] **Action:** Select content topic that is NOT "SYSTEM: Remote Mac Control." Must have >= 4 sections, >= 200 words each, mixed types (prose, code, tables, diagrams). Content must naturally support >= 4/6 intentionality dimensions (self-reference, pedagogical sequencing, cognitive transitions, bookending, meta-annotation, provenance threading). If content cannot support >= 4/6, it is the WRONG content for flagship.
- **Where:** Content selection decision (documented)
- **Verification:** Content is different from prior experiments. Section count >= 4. Word count >= 800. Intentionality dimension count >= 4/6.
- **Enforcement:** Content inventory verifies adequacy at Gate 0. Kill criterion KB-01 (sections < 4).
- **If skipped:** Same content tested 3x. Pipeline generalizability untested. Results confounded with content familiarity. S4 Assumption 1: content must naturally support intentionality.
- **Provenance:** 12-gap-analysis BT-20, S4 Section 4.2 Assumption 1, S2 Report 05 (non-goals)

---

#### BT-21: Implement Content-to-Pattern Selection Protocol (10 min)

- [ ] **Action:** Implement 6-step protocol: (1) read zone count from content inventory, (2) read density map, (3) count content types per zone, (4) apply 20% overhead budget (structural overhead <= 20% of estimated page height), (5) apply 800px zone minimum (every zone must have >= 800px of renderable content), (6) verify density-shape alignment (metaphor density arc matches content density arc direction -- no ARC INVERSION). Include 5 binary rejection criteria.
- **Where:** Pass 0 agent instructions + Gate 0 definition
- **Verification:** Protocol exists with all 6 steps. 5 rejection criteria are binary.
- **Enforcement:** Gate GT-01 (spatial budget). Kill criterion KB-02.
- **If skipped:** Pattern selection ignores content constraints. Metaphor creates structural obligations content cannot fill. Ceiling's arc inversion (metaphor demanded escalation where content peaked and descended).
- **Provenance:** 12-gap-analysis BT-21, S2 Report 02 (arc inversion), S3 II.2.3 (spatial budget calculation)

---

### Nuance Recovery BLOCKING Additions (2 items)

---

#### NR-01: Builder Self-Scroll Before Handoff (1 min)

- [ ] **Action:** Add to builder prompt self-check: "Scroll full page top-to-bottom at 1440px viewport before reporting done. If ANY point has a full viewport of nothing: STOP and fix before handoff."
- **Where:** Builder self-check section (BT-16)
- **Verification:** grep for "Scroll full page" in builder prompt.
- **Enforcement:** Agent self-check. Builder reports scroll observation in Checkpoint B message.
- **If skipped:** Builder hands off without seeing full scroll. 70-80% void invisible to builder. The ceiling's builder never scrolled the finished page.
- **Provenance:** S2 Report 01 (CRITICAL LOSS), S3 II.2.3 ("builder never scrolled"), NR-01 in 12-gap-analysis

---

#### NR-02: Spatial Budget CALCULATION Mandate (2 min)

- [ ] **Action:** Add to Pass 0 instructions: "Sum zone padding + checkpoint margins + heading margins + transition gaps. Compare to content height. If ratio > 35% void: restructure zone architecture before builder begins." Include the concrete arithmetic example: "7 zones x ~90px avg padding + 5 checkpoints x ~110px + 25 headings x ~40px + 7 transitions x ~46px = ~2,700px whitespace."
- **Where:** Pass 0 agent instructions + Gate 0 definition
- **Verification:** grep for "Sum zone padding" or "spatial budget CALCULATION" in Pass 0 instructions.
- **Enforcement:** Gate 0 (spatial budget). Team-lead verifies arithmetic in build plan table.
- **If skipped:** Planner specifies zones without calculating total height. 2,700px void predictable but uncalculated. A 30-second calculation that no one did.
- **Provenance:** S2 Report 01 (CRITICAL LOSS), S3 II.2.3 (the arithmetic that would have caught it), NR-02 in 12-gap-analysis

---

## SECTION 3: HIGH TODO (Should Complete, Significant Risk if Skipped)

### 3A. Design System Enrichments

| ID | Item | Target File | Effort | If Skipped |
|----|------|------------|--------|------------|
| HT-01 | Soul enforcement selector `*:where(:not(input,button,select)){border-radius:0}` | prohibitions.md | 2 min | Defensive CSS pattern missing |
| HT-02 | Border-weight semantic system (4px/3px/1px only, NEVER 2px) | mechanism-catalog.md | 5 min | 2px borders creep in, diluting hierarchy |
| HT-03 | Extended constraint set (10 value-restriction prohibitions) | prohibitions.md overlay | 10 min | Lower constraint pressure. Optional. |
| HT-04 | 4 flagship-specific value restrictions | Flagship execution prompt | 5 min | Unconstrained channels dilute semantic density |

### 3B. Skill Enrichments

| ID | Item | Target | Effort | If Skipped |
|----|------|--------|--------|------------|
| HT-05 | Formalize Mode 4 pre-capture protocol | PA SKILL.md | 5 min | Screenshot methodology undocumented |
| HT-06 | Root cause classification protocol (5 types) | PA SKILL.md | 5 min | Auditors report defects without classifying root cause |
| HT-07 | PA-51 "deliberately quiet" + PA-50 "too dense" (overcorrection detection) | PA SKILL.md | 5 min | No detection of "wall of content" overcorrection |
| HT-08 | Assign PA auditors by dimension | SKILL.md + execution prompt | 5 min | All auditors check same things, lower coverage |
| HT-09 | Temporal firewall for lock sheet (cold looks FIRST) | PA SKILL.md | 2 min | Lock sheet classification biases PA answers |

### 3C. Prompt Assembly

| ID | Item | Target | Effort | If Skipped |
|----|------|--------|--------|------------|
| HT-10 | Classify 56 ceiling rules (KEEP/CONV/COORD/DROP/MERGE) | Input to BT-13 | 10 min | Ceiling rules unclassified, judgment rules leak in |
| HT-11 | Move 7 judgment rules to conviction document | Layer 1 | 5 min | Judgment rules contaminate binary rules |
| HT-12 | Extract CD-006 + DD-006 exemplars (20 lines each) | Layer 1 conviction | 10 min | No concrete quality exemplars |
| HT-13 | Create unlimited auditor prompts | Auditor prompt files | 10 min | Auditors lack full question set |
| HT-14 | Replace explanations with exemplars in builder prompt | Builder prompt | Integrated | Explanations cost 3 units; exemplars cost 1 |
| HT-15 | Frame all constraints as negative rules | Builder prompt | Integrated | Positive rules cost 2-4 units; negative cost 1 |
| HT-16 | Attention audit template | QA document | 5 min | No verification prompt is within budget |
| HT-17 | Remove redundancy from prompt | Builder prompt | Integrated | Each rule once only, no "see also" |

### 3D. Pipeline Architecture

| ID | Item | Target | Effort | If Skipped |
|----|------|--------|--------|------------|
| HT-18 | Competitive skeleton build (Pass 1) | Coordination spec | 5 min | Single builder. P(good) 70% vs 91% with 2 |
| HT-19 | Embedded auditor for Passes 1-2 | Coordination spec | 5 min | No real-time monitoring. Void accumulates unchecked |
| HT-20 | Calibration run before flagship | Pre-flagship activity | 150 min | Pipeline untested. First run IS the flagship |
| HT-21 | Crown jewel technique inventory | Reference file | 15 min | Pass 4 builder has no quality calibration |
| HT-22 | Two-agent pattern for fix passes | Coordination spec | 2 min | Single agent builds AND audits own fixes |

### 3E. Additional Gates

| ID | Item | Target | Effort | If Skipped |
|----|------|--------|--------|------------|
| HT-23 | Subtraction test (post-Pass-2) | Gate spec | 2 min | Mechanisms never evaluated for removal |
| HT-24 | Anti-ambition audit | Gate spec | 5 min | Plan ambition unchecked |
| HT-25 | Continuation bias interrupt | Gate spec | 2 min | Builder identifies failures but doesn't address them |

### 3F. From Scale/Research Integration (AT RISK Items)

| ID | Item | Source | Effort | If Skipped |
|----|------|--------|--------|------------|
| HT-26 | Add iteration protocol after Gate 5 | Pipeline arch | 5 min | No post-audit fix cycle. Highest-leverage improvement missed |
| HT-27 | Add builder self-scroll requirement | Builder prompt | 1 min | Builder hands off without seeing full scroll |
| HT-28 | Add spatial budget CALCULATION mandate | Pass 0 / Gate 0 | 3 min | Planner specifies zones without calculating total height |

### 3G. Nuance Recovery HIGH Items

| ID | Item | Source | Effort | If Skipped |
|----|------|--------|--------|------------|
| NR-03 | Metaphor interpretive DISTANCE >= 2 criterion | SK-09 rubric | 2 min | Literal mapping metaphors pass |
| NR-04 | ARC INVERSION detection | Pass 0 | 2 min | Metaphor density arc conflicts with content arc |
| NR-05 | Q4 "WHY IS THIS SPACE EMPTY?" for Semantic Value Framework | semantic-rules.md | 5 min | No void justification framework |
| NR-06 | Builder self-scroll as process rule | Self-check | 1 min | (Redundant with NR-01, kept for completeness) |
| NR-07 | Dissent specificity signal protocol | Gate 5 | 2 min | Precise measurements dismissed as artifact |
| NR-08 | Confirmation bias warning for verdict team | Verdict prompt | 2 min | Verdict biased toward confirming success |
| NR-10 | Act-specific mechanism deployment guidance | Pass 2 reference | 5 min | Builder has structure but not content per act |
| NR-11 | Weight decomposition for visual peaks | Beauty brief | 3 min | Weight targets abstract, not actionable |
| NR-12 | Anti-metronome example sequence | Builder reference | 2 min | Rhythm principle captured but no example |
| NR-13 | PA hit rate data by dimension | Mode 4 protocol | 3 min | Auditor dimension assignment uninformed |

---

## SECTION 4: GATE-ENFORCED (No Pre-Work Needed; Enforced During Execution)

These 48 items require NO pre-flagship work. They are enforced by gates, team-lead checkpoints, or kill criteria DURING the experiment.

### 4A. Convergent Items Enforced by Gates

| ID | Gate | What It Checks | When | Who | On Failure |
|----|------|---------------|------|-----|------------|
| GE-01 | SC-01 | Container 940-960px | Post-Pass-1 | Programmatic | Fix-Retry (max 2) |
| GE-02 | SC-02+SC-03 | Void budget graduated (skeleton >=50%, final >=70%) | Post-Pass-1, Post-Pass-2, Final | Programmatic | Fix-Retry -> Abort |
| GE-03 | SC-07 | Footer existence with content | Post-Pass-1 | Programmatic | Fix-Retry |
| GE-04 | SC-05 | Header <= 20% of first viewport (288px) | Post-Pass-1 | Programmatic | Fix-Retry |
| GE-05 | Gate 1 | Spatial confidence 7 checks (SC-01 through SC-07) | Post-Pass-1 | Programmatic + Screenshot | Block -> Fix -> Abort |
| GE-06 | FK-02 | Soul 8/8 compliance | Final | Programmatic | Fix-Retry |
| GE-07 | GT-05 CP-01 | Mechanism cap 16 | Post-Pass-2 | Programmatic | Fix (remove mechanisms) |
| GE-08 | Routing table | PA/novelty isolation (prohibited receivers) | All passes | Communication | Block |
| GE-09 | GT-16 | Fix cycle max 2 | All gates | Kill Criterion | Abort |
| GE-10 | GT-10 BP checks | Designed moment distribution (1 per quartile) | Post-Pass-2 | Screenshot | Flag |
| GE-11 | GT-05 | Silence zones >= 2 | Post-Pass-2 | File Diff | Fix |
| GE-12 | Mode 4 protocol | Screenshot pre-capture (team-lead takes ALL) | Final | Team-lead Checkpoint | Block |

### 4B. Category-Specific Items

| ID | Gate | What It Checks | When |
|----|------|---------------|------|
| GE-13 | Gate 0 | Spatial budget (content-to-void >= 60:40) | Pre-build |
| GE-14 | Gate 2 | Landmark completeness (header + footer + all sections) | Post-Pass-1 (parallel with Gate 1) |
| GE-15 | Gate 4 | Metaphor coherence (2 fresh-eyes: structural or announced?) | Post-Pass-3 |
| GE-16 | Gate 3 | Composition audit CC-01 through CC-07 | Post-Pass-2 |
| GE-17 | Post-Pass-4 | Intentionality checklist I-01 through I-12 | Post-Pass-4 |
| GE-18 | Gate 3 | 7 binary beauty prerequisites (BP-1 through BP-7) | Post-Pass-2 |
| GE-19 | Gate 5 | Crown jewel quality gate (8 checks) | Final |
| GE-20 | Agent self-check | Builder's 10 self-check items | During build |
| GE-21 | During build | 3 embedded build checkpoints | During Passes 1-2 |
| GE-22 | Gate 0 | Pre-build kill criteria KB-01 through KB-05 | Pre-build |
| GE-23 | Gate 5 | Final kill criteria FK-01 through FK-05 | Final |
| GE-24 | All gates | Decision matrix: fix vs abort | All gates |
| GE-25 | During build | Metacognitive checkpoints (5 self-questions) | During build |
| GE-26 | Gate 1 | Fresh-eyes proportion check (post-Pass-1) | Post-Pass-1 |
| GE-27 | Gate 4 | Ego separation cold-look | Post-Pass-3 |
| GE-28 | Gate 5 | Dissent protection protocol | Final |
| GE-29 | Fix cycles | Level-of-abstraction diagnosis (CSS/CONTENT/ARCHITECTURE) | Fix cycles |
| GE-30 | Gate 3 | SC-02+SC-03 re-verification after Pass 2 | Post-Pass-2 |
| GE-31 | Gate 0 | Metaphor spatial obligation score | Pre-build |
| GE-32 | Post-Pass-4 | Self-reference consensus test | Post-Pass-4 |
| GE-33 | Gate 3 | Signal-to-silence ratio 0.6-0.8:1 | Post-Pass-2 |
| GE-34 | Gate 3 | Rejection count >= 21 (restraint map) | Post-Pass-2 |
| GE-35 | Gate 3 | Unused mechanisms >= 2 (documented restraint) | Post-Pass-2 |
| GE-36 | Gate 0 | Zone necessity test (3 NOs = MERGE) | Pre-build |

### 4C. Communication Items

| ID | What It Checks | Enforcement |
|----|---------------|-------------|
| GE-37 | Measurement specificity (pixel values, not "looks right") | Communication gate |
| GE-38 | Escalation trigger 3 (unexpected discovery) | Communication gate |
| GE-39 | Team-lead message count verification | Team-lead checkpoint |
| GE-40 | Minimum 8 substantive messages across experiment | Communication gate |
| GE-41 | Per-agent message limits | Communication gate |
| GE-42 | Anti-pattern prohibitions (6 types) | Communication gate |
| GE-43 | Missing message recovery (team-lead prompts if zero at gate) | Team-lead checkpoint |
| GE-44 | File-bus remains primary communication | Architecture |
| GE-45 | Deliverable mandates (replace message mandates with artifact requirements) | File diff gate |
| GE-46 | Builder acknowledges hard alerts from embedded auditor | Communication gate |
| GE-47 | Builder reports page height + content ratio after build | Communication gate |
| GE-48 | Compositional messaging about relationships between mechanisms | Communication gate |

---

## SECTION 5: CONVICTION & REFERENCE CONTENT

### 5A. Conviction Items (Layer 1, ~70 lines total budget)

These shape the builder's creative intent WITHOUT being binary rules.

| ID | Content | Source |
|----|---------|--------|
| CV-01 | **Beauty brief:** "Feel like opening a well-made book." 3-word personality: Warm. Authoritative. Unhurried. | AE-01 |
| CV-02 | **4 resolved tensions:** Temperature (warm not soft), Weight (heavy not oppressive), Density (rich not cluttered), Decoration (intentional not decorative) | AE-02 |
| CV-03 | **Perceptual sequence:** 0-1s Arrival, 1-2s Orientation, 2-3s First delight, 3-5s Pattern detection | AE-03 |
| CV-04 | **Flagship = max intentionality.** NOT most mechanisms, NOT most CSS. Most careful, most deliberate, most precise. | TH-03 |
| CV-05 | **5 scales = mathematical ceiling** (Alexander/Salingaros formula). Beyond 5, add CHANNELS not LEVELS. NEVER target 6+. | S1 Finding 1 |
| CV-06 | **PA-05 > scale count.** Middle at 2 scales scored 4/4. Ceiling at 4 scales scored 1.5/4. PA-05 has ABSOLUTE PRIORITY over scale depth. | S1 Finding 6 |
| CV-07 | **Dual richness sources.** Source 1 (constraint pressure) = automatic via soul. Source 2 (design intelligence) requires Opus. BOTH necessary. Source 1 alone = "professionally stiff." | S1 Finding 10 |
| CV-08 | **Guard against technique-as-demonstration.** For each mechanism: "What does READER gain?" If answer is "demonstrates the mechanism" -> fail. | AE-11 |
| CV-09 | **Intentional vs abandoned whitespace.** Space between composed elements = intentional. Space after content trails off = abandonment. | AE-12 |
| NR-14 | **"12/12 concept + faithful execution = 1.5/4 product."** Concept quality does NOT predict product quality. | S2 Report 04 |
| NR-15 | **"Richness comes from signal-to-silence ratio, not signal volume."** | S1 Finding 7 + S2 Report 02 |
| NR-16 | **"Content-driven decisions create more perceptual impact than structural ones."** The border-weight gradient was the ONLY mechanism the novelty evaluator highlighted. | S3 I.1.3 |

### 5B. Reference Items (Layer 4, Zero Prompt Cost)

These are existing files -- no new content needed. Reference paths only.

| ID | Item | Location |
|----|------|----------|
| RF-01 | Full mechanism catalog (18 mechanisms + impact profiles) | `design-system/compositional-core/grammar/mechanism-catalog.md` |
| RF-02 | 48+ PA questions (after BT-08 enrichment: 52+) | `~/.claude/skills/perceptual-auditing/SKILL.md` |
| RF-03 | Tension-composition pipeline | `~/.claude/skills/tension-composition/SKILL.md` |
| RF-04 | Crown jewel techniques (CD-006, DD-006) | `design-system/validated-explorations/` |
| RF-05 | Prohibitions (after enrichment: 22+) | `design-system/compositional-core/identity/prohibitions.md` |
| RF-06 | Tokens (after enrichment: spacing maximums) | `design-system/compositional-core/vocabulary/tokens.css` |
| RF-07 | Semantic rules (after enrichment: content density + content-form fit) | `design-system/compositional-core/guidelines/semantic-rules.md` |
| RF-08 | Scale exploration reports (6 reports) | `ephemeral/ceiling-experiment/_scale-exploration/` |
| RF-09 | Flagship prep research reports (6 reports) | `ephemeral/ceiling-experiment/_flagship-prep/` |
| RF-10 | 7-dimension richness model (for Pass 4 builder only) | S1 Finding 9 text |
| RF-11 | Attention budget model (~100 units) | E2 + E4 documents |
| RF-12 | Constraint pressure theory | Report 19 |
| RF-13 | Richness formula: semantic density x restraint x spatial confidence | Anti-scale thesis |
| RF-14 | Preparation paradox (27.5:1 compression) | E2 analysis |
| RF-15 | Compositional vs vocabulary fluency | Two independent axes |
| RF-16 | Compliance hierarchy (binary 100%, judgment 0%) | E1 + E4 |
| RF-17 | Height estimation rules (paragraph ~92px, code ~315px) | Content-first methodology |
| RF-18 | Use source vocabulary, not metaphor terms | Content-first |
| RF-19 | Density from volume not importance | Content-first |
| RF-20 | Count natural boundaries not headings | Content-first |
| RF-21 | Content density planning table | Content-first |
| RF-22 | Each pass receives ALL previous outputs | Pipeline architecture |
| RF-23 | Handoff as artifacts not instructions | Pipeline architecture |
| RF-24 | Pass 3 = no NEW mechanisms (refinement only) | Pipeline architecture |
| RF-25 | Quality bands definition (Crown Jewel / Full / Strong / MVF / Failed) | Success criteria |
| RF-26 | 24 target metrics | Success criteria |
| RF-27 | Metacognitive reviewers | Process reference |
| RF-28 | Pass 3 execution sequence (8 steps) | Pass 3 instructions |
| RF-29 | Intentionality danger zones (18 rules) | Pass 4 reference |
| RF-30 | Voice guide for multi-agent passes | Process reference |
| RF-31 | Realistic metaphor survival 55-65% | Conviction reference |
| RF-32 | 7-dimension richness model (Spatial Zoom, Temporal Metabolism, Semantic Resonance, Narrative Arc, Materiality Gradient, Cognitive Scaffolding, Emotional Topology) | Pass 4 reference |
| RF-33 | Experiential wisdom (10 laws, 10 do-differently, 9 avoid) | Team-lead reference |

---

## SECTION 6: THRESHOLD RESOLUTION TABLE

All 8 threshold conflicts are RESOLVED. These are the AUTHORITATIVE values.

| ID | Conflict | Resolution | Encoding |
|----|----------|------------|----------|
| TC-01 | Content-to-void: 60% vs 70% vs 85% vs 90% | **GRADUATED:** Gate 0 (pre-build) >= 60%. Gate 1 (skeleton) >= 50%. Gate 3 (post-mechanism) >= 70%. 90% is aspirational, not a gate. | Gate 0: 60%. Gate 1: 50%. Gate 3: 70%. |
| TC-02 | Header maximum: 20% vs 25% | **20% gate, 25% abort trigger.** SC-05 = 20% of first viewport (288px at 1440px). If > 25% (360px): abort after 1 fix cycle. | SC-05: <= 288px. Hard fail: > 360px. |
| TC-03 | Pipeline passes: 3 vs 5 | **5 passes.** Pass 0 Content Architecture, Pass 1 Spatial Skeleton, Pass 2 Mechanism Deployment, Pass 3 Metaphor Integration, Pass 4 Intentionality. Per-pass attention audit ensures budget. | 5 passes with per-pass attention audit. |
| TC-04 | Mechanism count: 12-14 vs 14-16 vs 16-18 | **Target 12-14, hard cap 16.** Supported by constraint pressure theory (fewer at higher semantic density) + diminishing returns data. | Target: 12-14. Hard cap: 16. |
| TC-05 | Total prompt length: 200 vs 240 | **240 total across 3 layers.** Builder sees ~55-80 lines (Layer 2 subset). Team-lead sees 240. Attention surplus >= 30 for builder. | Layers 1-3: 240 max. Builder subset: 80 max. |
| TC-06 | Message mandates vs deliverable mandates | **Use BOTH.** Deliverables = substance (file diff gate verifies content). Messages = enforcement (communication gate verifies sending). | CM-19 deliverable + CM-13 message count. |
| TC-07 | Max void height: 1620px vs 2160px | **2160px (1.5 viewports at 1440px).** SC-02 threshold. SP-02's 1620px is a stricter early threshold for skeleton stage. | SC-02: 2160px. Skeleton: 1620px. |
| TC-08 | Constraint pressure experiment: BLOCKING vs HIGH | **HIGH, not BLOCKING.** Run if time permits before flagship. Informs prompt but not required. | Optional pre-flagship. |

---

## SECTION 7: DISCARDED ITEMS

Items explicitly cut. These are NOT to be re-added. If encountered during prompt assembly, DELETE.

| ID | Item | Reason for Discarding |
|----|------|----------------------|
| DC-01 | DS-11: Syntax highlighting tokens | LOW priority. Already in tokens.css lines 128-137. Post-flagship. |
| DC-02 | DS-19: Temporal identity tokens | LOW priority. Most pages are static. Post-flagship. |
| DC-03 | DS-20: Letter-spacing tokens | LOW priority. Post-flagship. |
| DC-04 | DS-21: Temporal extensions to 5 mechanisms | LOW priority. Post-flagship. |
| DC-05 | DS-22: Interactive complexity budget | LOW priority. Level 1-2 only for flagship. |
| DC-06 | DS-23: 9-dimension richness vector model | REFERENCE, not enrichment. Lives in S1 integration. |
| DC-07 | DS-24: Unified richness formula | REFERENCE. Academic, not operational. |
| DC-08 | SK-06: Remove PA-03 (redundant) | RISKY to remove mid-pipeline. Post-flagship. |
| DC-09 | TH-08: Constraint pressure experiment | HIGH but schedule risk too high. OPTIONAL if time permits. |
| DC-10 | PT-22: Print media query | Not relevant to flagship audit. Post-ship. |
| DC-11 | DS-10: Semantic spacing aliases | Already partially present. Not blocking. |
| DC-12 | DS-12: Named type scale tokens | Current 10-size scale sufficient. |
| DC-13 | DS-14: Golden ratio grid | Reference technique, not system enrichment. |
| DC-14 | DS-15: Beauty definition in semantic rules | Goes to conviction (CV-01, CV-02), not system file. |
| DC-15 | DS-16: Formal metric definitions (CP, SD, RR, II) | Post-flagship research item. |
| DC-16 | DISC-01: Ceiling prompt Sections 2.3-2.4 task/wave sequence | DELETE. 48 lines of irrelevant context. |
| DC-17 | DISC-02: Ceiling prompt anti-spam table | DELETE. Keep top 3 anti-patterns only. |

---

## SECTION 8: META-VERIFICATION

### The VETO Agent's 24-Item Checklist

After all enrichments, skill updates, prompt assembly, gate preparation, and content selection are complete, a FINAL-VERIFIER agent (Opus 4.6, zero context) receives all evidence artifacts and checks this list. NO-GO blocks the flagship from starting.

**DESIGN SYSTEM (7 items):**
- [ ] B1: Maximum whitespace prohibition present in prohibitions.md with binary test (grep + cold-read)
- [ ] A1: Transition grammar present in mechanism-catalog.md with 3 types + CSS (grep + cold-read)
- [ ] A2: Restraint protocol present in mechanism-catalog.md with per-viewport cap (grep + cold-read)
- [ ] A3: Content density floors present in semantic-rules.md with zone count ceiling (grep + cold-read)
- [ ] B3: Front-loaded visual weight prohibition present with designed moment definition (grep + cold-read)
- [ ] C3: Maximum spacing tokens present in tokens.css (--space-max-section, --space-max-zone) (grep)
- [ ] D3: Content-form fit present in semantic-rules.md with form-to-content table (grep + cold-read)

**SKILLS (4 items):**
- [ ] Void guardrails in PA SKILL.md with specific numbers (max 1.5 viewports, min 60%)
- [ ] PA-50 through PA-53 present in PA SKILL.md with measurement-based answers
- [ ] PA-05c expanded to 3 sub-dimensions (horizontal, vertical, breathing)
- [ ] PA-17 and PA-41 elevated to Ceiling+ mandatory tier

**PROMPT (5 items):**
- [ ] Layers 1-3 total <= 240 lines
- [ ] Zero MAY/SHOULD/CONSIDER/MIGHT in Layer 2 (execution spec)
- [ ] All Layer 2 rules have PASS/FAIL criteria (cold-read verification)
- [ ] 4-layer architecture present (Conviction, Execution Spec, Coordination, Reference Library)
- [ ] Attention cost <= 60 units for builder (surplus >= 40)

**GATES (3 items):**
- [ ] All gates have definition + measurement method + fail response + evidence artifact
- [ ] All gates are self-contained (team-lead can execute without consulting other docs)
- [ ] Spatial confidence gate JavaScript is syntactically valid (node parse check)

**COMMUNICATION (3 items):**
- [ ] All 5 checkpoints (A-E) are MUST (not MAY/CAN)
- [ ] Message count monitoring assigned to team-lead with specific count target
- [ ] Zero-messages-at-gate = PAUSE rule is explicit and binary

**CONTENT (2 items):**
- [ ] Content inventory template exists with all required fields
- [ ] Selected content has >= 4 sections, >= 200 words each, different from Middle/Ceiling

### GO/NO-GO Decision Criteria

**GO** requires ALL 24 items checked by the VETO agent.

**NO-GO (FIXABLE):** Evidence is mostly complete but specific items need re-verification or enrichment. Fix those items and re-submit evidence.

**NO-GO (STRUCTURAL):** Fundamental gaps exist that cannot be fixed by re-verification. Go back to enrichment/assembly phase.

### Evidence Artifacts Required

| Artifact | Content | Produced By |
|----------|---------|-------------|
| V1-B1 through V1-D3 | Per-gap grep output, line count, cold-read answers | Phase 1 (parallel) |
| V2-skill-evidence | All 4 skill enrichment verifications | Phase 2 (parallel) |
| V3-prompt-evidence | MAY-rule grep, line count, 4-layer check | Phase 3 |
| V3-attention-cost | Per-rule classification and total | Phase 3 |
| V4-gate-evidence | Per-gate property matrix, executability test | Phase 4 |
| V5-comms-evidence | Checkpoint MUST verification, routing table | Phase 5 |
| V6-content-evidence | Inventory template, section count, density map | Phase 6 |
| **V7-FINAL-VERDICT** | **GO / NO-GO with all 24 items** | **Phase 7 (VETO agent)** |

---

## SECTION 9: READINESS ASSESSMENT

### 5 Readiness Conditions (from S4 metacognitive analysis)

| # | Condition | Status |
|---|-----------|--------|
| 1 | Every known failure mode has a BINARY gate (not just documentation) | **MET.** Spatial confidence, landmark completeness, void budget, container verification, messaging gates cover top 5 failure modes. |
| 2 | Execution prompt within builder's attention budget (<200 lines for builder-facing spec) | **NEARLY MET.** 4-layer architecture produces ~240 lines total; builder sees ~55-80 lines. Within budget. |
| 3 | All judgment rules converted to binary rules WHERE POSSIBLE | **MET for execution spec.** Not met for coordination spec (skeleton selection, breathing zone). Acceptable. |
| 4 | Adversarial pre-mortem completed, highest-risk predictions have mitigation | **MET.** Report 09 identifies FM-1 through FM-6; all mitigated in risk register R1-R10. |
| 5 | Next highest-leverage action is BUILDING, not ANALYZING | **MET.** Remaining tasks are execution decisions (apply enrichments, assemble prompt, select content). Cannot be resolved by more analysis. |

**All 5 conditions MET or NEARLY MET.**

### 5 Blind Spots and Their Mitigations

| # | Blind Spot | Mitigation |
|---|-----------|------------|
| 1 | **Builder's emotional state.** 240 lines of rules creates defensive stance ("trying to NOT FAIL" not "trying to CREATE"). | Restructure prompt: conviction FIRST and LAST. "The rules are guardrails, not the mission. The mission is beauty." |
| 2 | **Reader's journey is undesigned.** Preparation focused on page-as-artifact, not reader-as-experiencer. | Add "Visual Journey" specification to Pass 0: arrival -> first scroll -> mid-page climax -> resolution. |
| 3 | **No theory of failure-as-information.** Kill criteria treat failure as BAD OUTCOME, not LEARNING OPPORTUNITY. | Add Learning Protocol: if kill criterion triggers, document what it caught and why BEFORE aborting. |
| 4 | **No calibrated sense of "good enough."** Internal target should be Strong Flagship (not Full). | Set internal expectation to PA-05 3.5+/4, Novelty 7+/9, Intentionality 3+/6. If exceeded: celebrate. If met: accept. |
| 5 | **No exit criteria for the project.** Without exit criteria, preparation continues indefinitely. | Proposed: "Complete when 3 consecutive pages at Strong Flagship+ quality across 3 content types with <= 1 severity-1 finding per page." |

### The Meta-Question Answer

From S4 Section 7.3: **"STOP ANALYZING. START BUILDING."**

The analysis phase is COMPLETE. All 5 readiness conditions are met. The remaining work is:
1. Apply the 7 BLOCKING enrichments (~45 min)
2. Apply the 4 skill enrichments (~15 min)
3. Assemble the execution prompt (~60 min)
4. Prepare gates and protocols (~30 min)
5. Select content and run verification (~60 min)
6. Execute flagship (~120-320 min)

### Recommended Internal Target

**Strong Flagship** (not Full Flagship):
- PA-05: >= 3.5/4
- Novelty: >= 7/9
- Intentionality: >= 3/6
- Soul: 8/8
- Container: 940-960px
- Content-to-void: >= 70% at final audit

This target is achievable with 85-90% probability. Full Flagship (PA-05 4/4, Novelty 8+/9, Intentionality 4+/6) is achievable at 55-65% probability.

---

## CRITICAL PATH EXECUTION ORDER

```
PHASE 1+2 (PARALLEL): Design System + Skill Enrichments (~45 min)
  BT-01 -> BT-06 -> BT-04+BT-05 -> BT-02 -> BT-03 -> BT-07
  BT-08, BT-09, BT-10, BT-11 (parallel with Phase 1)
  Verification: E3 Phase 1-2 automated scripts + cold-read

PHASE 3: Threshold Documentation (~5 min)
  Document TC-01 through TC-08 resolved values

PHASE 4: Prompt Assembly (~60 min)
  BT-19 (content template) -> BT-12 (conviction) || BT-13+BT-15 (exec spec)
  -> BT-14 (coord spec) -> BT-16 (builder template)
  -> BT-17 (per-pass prompts) -> BT-18 (routing)

PHASE 5: Gate/Protocol Preparation (~30 min)
  BT-25 (JS gate runner) || BT-29 (gate spec) || BT-30 (composition gate)
  BT-26+BT-27+BT-28 (communication protocol)
  BT-31 (Mode 4 spec)
  NR-01+NR-02 (nuance recovery additions)

PHASE 6: Content Selection + Inventory (~30 min)
  BT-20 (select content) -> BT-21 (content-to-pattern protocol)
  Fill content inventory template (BT-19)

PHASE 7: Verification (~45-60 min)
  Phases 1-6 evidence artifacts (parallel) -> Phase 7 VETO agent
  V7-FINAL-VERDICT.md: GO or NO-GO

PHASE 8 (OPTIONAL): Calibration Run (~150 min)
  HT-20: Run pipeline on different content at ceiling tier

PHASE 9: EXECUTE FLAGSHIP (~120-320 min)

TOTAL CRITICAL PATH: ~160-200 min (Phases 1-7)
WITH CALIBRATION: ~310-350 min
WITH FLAGSHIP: ~430-670 min total
```

---

**END MASTER PRE-FLIGHT CHECKLIST**

**Total items classified:** 214
**BLOCKING TODO:** 33 items (~160-200 min pre-work)
**HIGH TODO:** 28 items (~80 min additional)
**Threshold conflicts:** 8 (all resolved with authoritative values)
**Gate-enforced:** 48 (zero pre-work required)
**Conviction/Reference:** 42 (content for prompt layers)
**Already done:** 38
**Discarded:** 17
**Verification items:** 24 (VETO agent checklist)
**Evidence artifacts:** 8 (V1-V7 + attention cost)

**This document is SELF-CONTAINED.** Someone reading ONLY this file can execute the entire pre-flagship preparation without consulting any other document.
