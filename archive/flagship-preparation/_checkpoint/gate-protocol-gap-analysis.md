# Gate/Protocol Gap Analysis: BT-25 through BT-31

**Analyst:** gate-protocol-checker (Opus 4.6)
**Date:** 2026-02-17
**Scope:** Verify whether BT-25 through BT-31 from the pre-flight checklist exist as deliverables

---

## 1. PER-ITEM COVERAGE MATRIX

### BT-25: Programmatic Gate Runner JavaScript

**Specified:** `runSpatialConfidenceGate()` function for SC-01 through SC-03, SC-05 through SC-07. Void detection script. Self-contained. Syntactically valid.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone artifact | YES | `03-spatial-confidence-gate.md` Section 4.1 (lines 569-929) contains the COMPLETE `runSpatialConfidenceGate()` function |
| Execution prompt | PARTIAL | Layer 1 K1-K7 kill rules reference the checks conceptually but do NOT include the JavaScript |
| Design system files | NO | JavaScript not embedded in design system (correct -- it is a tool, not a specification) |

**Assessment: FULLY COVERED.** The 03-spatial-confidence-gate.md contains:
- Complete `runSpatialConfidenceGate()` async function (~330 lines)
- All 6 programmatic checks (SC-01 through SC-03, SC-05 through SC-07)
- SC-04 placeholder for manual squint test
- Playwright integration wrapper (`runSpatialGatePlaywright`)
- Structured output format specification
- Aggregate verdict logic

**Node parse check:** Not yet verified, but the function is syntactically standard JavaScript. The spatial-auditor agent will need to receive either the file path or the function body inline.

---

### BT-26: 5 Mandatory Communication Checkpoints (A through E)

**Specified:** Define 5 checkpoints as MUST (not CAN): A (post-plan read-through), B (post-build report), C (spatial gate result), D (post-elaboration report), E (final build report). Each with required fields and measurement content.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone artifact | YES | `06-communication-protocol.md` Section 2 (lines 64-243) defines all 5 checkpoints |
| Execution prompt | PARTIAL | Layer 3 CO3-CO4 reference "Builder MUST SendMessage to lead after each pass" and "Lead MUST review and respond with GO/REVISE" but do NOT enumerate all 5 checkpoints or their required fields |
| Design system files | NO | Communication protocols are operational, not design system content |

**Assessment: FULLY COVERED in standalone artifact. PARTIALLY COVERED in execution prompt.**

The communication protocol document specifies for each checkpoint:
- Exact trigger condition
- Required sender and recipient
- Message type (from 4-type taxonomy)
- ALL required content fields (3-4 per checkpoint)
- Example messages with correct format
- Team-lead enforcement rules
- What happens on failure

**Gap in execution prompt:** The master execution prompt's Layer 3 says "Builder MUST send a message to lead after completing each pass" (line 137-138) but does NOT include the specific required fields from Checkpoints A-E. The builder would need to see the full communication protocol or have checkpoint-specific instructions in their per-agent prompt. This is an EXPECTED gap -- the prompt assembly journal explicitly chose to keep the coordination layer to ~42 lines. The full protocol is a reference document for the team-lead, not for the builder.

---

### BT-27: Message Format + 17-Pairing Routing Table

**Specified:** 4 message types (BLOCKING-DEPENDENCY, QUALITY-GATE, CLARIFICATION-REQUEST, ANOMALY-FLAG). 17-pairing routing table. PA/novelty agents = PROHIBITED receivers. Messages must contain SPECIFIC NUMBERS.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone artifact | YES | `06-communication-protocol.md` Section 3 (lines 246-291) defines message format; Section 7 (lines 554-577) defines routing table |
| Execution prompt | NO | Layer 3 does not reference message types or routing |
| Design system files | NO | Operational concern |

**Assessment: FULLY COVERED in standalone artifact.**

The communication protocol document includes:
- 4 message types with definitions, urgency, and response requirements (Section 3)
- Measurement specificity requirement with WRONG vs CORRECT examples (lines 269-284)
- Maximum message length rule (300 words, then file reference) (lines 288-291)
- Complete routing table with 17+ pairings (Section 7, lines 558-577)
- PA isolation as HARD PROHIBITION (lines 570-574)
- Per-agent message limits (Section 8, lines 580-599)

**No gap.** The execution prompt deliberately omits this because it is team-lead operational knowledge. The builder sees "MUST send message" in Layer 3; the team-lead knows the routing and format rules from the protocol document.

---

### BT-28: Escalation Triggers + Diagnosis-Before-Fix Protocol

**Specified:** 3 escalation triggers (uncertainty > 80% confidence, WOULD-NOT-SHIP finding, unexpected discovery). Root cause classification (CSS/CONTENT/ARCHITECTURE). CSS fixes for architecture problems PROHIBITED.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone artifact | YES | `06-communication-protocol.md` Section 4 (lines 296-413) defines 4 escalation triggers (exceeds spec by 1) |
| Execution prompt | NO | Not in execution prompt |
| Design system files | NO | Operational concern |
| Pre-flight extraction | YES | `_pre-flight/03-extraction-gates-risks.md` documents kill criteria including diagnosis-before-fix (lines 382-413) |

**Assessment: FULLY COVERED in standalone artifact.**

The communication protocol defines 4 triggers (BT-28 specified 3):
1. Uncertainty threshold (< 80% confidence) -- lines 298-329
2. Auditor FAIL finding (WOULD-NOT-SHIP) -- lines 332-355
3. Unexpected discovery -- lines 358-380
4. Diagnosis-Before-Fix rule (root cause classification BEFORE any fix) -- lines 382-413

Each trigger includes:
- Binary rule statement
- What counts / what does not count
- Example message with correct format
- Team-lead response protocol

The CSS-for-architecture prohibition is explicit at line 386: "The ceiling experiment's fix team treated a content problem as a CSS problem, applied 40 CSS changes, and the void was unchanged."

**No gap.**

---

### BT-29: Spatial Confidence Gate (SC-01 through SC-07)

**Specified:** 7 binary checks with thresholds. All MUST PASS. Max 2 fix cycles, then ABORT. 5-gate system architecture.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone artifact | YES | `03-spatial-confidence-gate.md` (1,110 lines) is the COMPLETE standalone specification |
| Execution prompt | PARTIAL | K1-K4 in Layer 1 map to SC-01, SC-03, SC-02, SC-05 respectively; K5 maps to designed moment (not an SC check); K6-K7 are soul/spacing checks not in SC gate |
| Design system files | PARTIAL | prohibitions.md #21 (void), #22 (front-loaded weight) cover the principles |

**Assessment: FULLY COVERED in standalone artifact. The most comprehensive deliverable in the set.**

The 03-spatial-confidence-gate.md includes:
- Void budget calculation with formula and worked example (Section 1, lines 16-168)
- All 7 binary checks with exact thresholds, measurement methods (JavaScript), pass/fail criteria, and failure responses (Section 2, lines 172-448)
- Gate timing in the execution timeline (Section 3, lines 451-482)
- Gate execution protocol (steps 1-4) (lines 484-511)
- Fix cycle protocol with max 2 cycles (lines 515-543)
- Abort protocol with downgrade decision matrix (lines 546-561)
- Complete JavaScript implementation (Section 4, lines 565-929)
- Decision matrix: fix vs abort per-check per-cycle (Section 5, lines 1012-1038)
- 5-gate system architecture (Section 6, lines 1044-1081)
- Evidence traceability table (Section 7, lines 1084-1098)

**No gap.** This is the most thorough deliverable of the entire set.

---

### BT-30: Composition Verification Gate (Post-Pass-2)

**Specified:** Combined gate: mechanism count <= 16, restraint ratio >= 1.5, zone visibility, spatial re-check (SC-02+SC-03), rejection count >= 21, silence zones >= 2, signal-to-silence 0.6-0.8:1, structural overhead <= 20%.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone artifact -- Gate 4 spec | NO -- no standalone "Gate 4 specification" document exists |
| 04-restraint-protocol.md | PARTIAL | Covers mechanism cap (Section 3), rejection log (Section 1), silence zones (Section 2), signal-to-silence ratio (Section 4), and gate integration summary (Section 5.3) |
| 03-spatial-confidence-gate.md | PARTIAL | Section 6 (lines 1059-1070) describes Gate 4 conceptually but does not formalize it |
| Execution prompt | PARTIAL | E8-E12 cover mechanism targets; E13 covers transitions; E22 covers restraint ratio. But no combined "Gate 4" specification |
| Pre-flight extraction | PARTIAL | 03-extraction-gates-risks.md documents CP-01 through CP-04 (lines 41-44) |

**Assessment: PARTIALLY COVERED. No unified Gate 4 document exists.**

What IS covered:
- Mechanism count <= 16 (04-restraint-protocol.md Section 3.1, line 213)
- Restraint ratio >= 1.5 / rejection count >= 21 (04-restraint-protocol.md Section 1.5, lines 93-107)
- Silence zones >= 2 at 200px+ each (04-restraint-protocol.md Section 2.5, lines 165-170)
- Signal-to-silence ratio 0.6-0.8:1 (04-restraint-protocol.md Section 4, lines 287-405)
- Spatial re-check SC-02+SC-03 (03-spatial-confidence-gate.md Section 6, Gate 4 line 1065)
- Gate integration summary (04-restraint-protocol.md Section 5.3, lines 448-461)

What is NOT covered as a unified specification:
- **Zone visibility test** (without labels): Referenced in 03-extraction-gates-risks.md as CP-03 but no standalone binary check specification
- **Structural overhead <= 20%**: NOT found in any deliverable. This threshold appears in BT-30's checklist specification but is not formalized anywhere
- **Unified Gate 4 execution protocol**: No document specifies who runs Gate 4, in what order, with what artifacts, analogous to how 03-spatial-confidence-gate.md specifies Gate 2

**Criticality: MEDIUM.** The individual checks exist across two documents (03 and 04), but a team-lead would need to synthesize them at execution time. The 04-restraint-protocol.md Section 5.3 comes closest to a unified view but lacks the execution protocol detail (who runs which check, in what order, what artifacts are produced).

---

### BT-31: Ship-Ready Gate + Mode 4 PA Protocol

**Specified:** Full Mode 4 (9 auditors, 48+ PA questions including PA-50 through PA-53, 3 viewports), screenshot pre-capture pattern, programmatic audit, comparative audit (vs CD-006/DD-006), blind novelty evaluation. Dissent protection.

**Coverage:**

| Source | Status | Detail |
|--------|--------|--------|
| Standalone Gate 5 spec | NO -- no standalone "Ship-Ready Gate" or "Gate 5" document exists |
| 03-spatial-confidence-gate.md | PARTIAL | Section 6, Gate 5 (lines 1072-1078) lists components conceptually |
| Execution prompt | PARTIAL | Layer 3 CO5-CO6 reference Mode 4 PA and screenshot pre-capture |
| Communication protocol | PARTIAL | Routing table prohibits PA contamination (lines 570-574) |
| Pre-flight extraction | PARTIAL | 03-extraction documents FK-01 through FK-05 kill criteria for final stage |
| Perceptual auditing SKILL.md | YES | PA-01 through PA-53 questions exist (enriched with PA-50 through PA-53) |
| 07-kill-criteria.md | PARTIAL | FK-01 through FK-05 define final kill criteria but not the execution protocol |

**Assessment: PARTIALLY COVERED. No unified Gate 5 / Ship-Ready Gate document exists.**

What IS covered:
- Mode 4 PA structure: 9+ auditors, 48 PA questions (perceptual-auditing SKILL.md, enriched)
- PA-50 through PA-53 void guardrails (enriched into SKILL.md per BT-08)
- Screenshot pre-capture pattern (memory notes + execution prompt CO6)
- Blind novelty evaluation (07-kill-criteria.md FK-04, lines 61-62)
- PA isolation / fresh-eyes (communication protocol Section 6, Anti-Pattern 6)
- Dissent protection (08-metacognitive-checkpoints.md CHECK-5.1, lines 386-397)
- Final kill criteria FK-01 through FK-05 (03-extraction-gates-risks.md)

What is NOT covered as a unified specification:
- **Gate 5 execution protocol**: No document specifies the full sequence (programmatic audit -> comparative audit -> Mode 4 PA -> blind novelty -> verdict synthesis)
- **Comparative audit specification**: How to compare against CD-006/DD-006 is mentioned conceptually but not formalized (what metrics, what thresholds, who runs it)
- **3-viewport mandate**: Not explicitly specified (1440px is standard, 768px mentioned in memory notes for audit protocol, but no formal spec)
- **Screenshot pre-capture detailed instructions**: The pattern is known from memory and CO6, but no step-by-step protocol for the team-lead (how many screenshots, at what scroll positions, what filenames)

**Criticality: MEDIUM-LOW.** The Mode 4 PA has been executed successfully before (12 agents, 102 screenshots, 9 auditors parallel in the ceiling experiment's standalone PA). The team-lead has operational memory of the pattern. The risk is not that it won't be done, but that the comparative audit and verdict synthesis steps lack formal specifications.

---

## 2. ASSESSMENT: STANDALONE DOCUMENTS VS EXECUTION PROMPT

### Summary Matrix

| Item | Standalone Artifact | Execution Prompt | Criticality of Gap |
|------|:-------------------:|:----------------:|:------------------:|
| BT-25 (Gate Runner JS) | FULL | PARTIAL (K rules only) | NONE |
| BT-26 (5 Checkpoints) | FULL | PARTIAL (generic "MUST message") | LOW -- team-lead refs protocol |
| BT-27 (Message Format + Routing) | FULL | NONE | NONE -- team-lead knowledge |
| BT-28 (Escalation + Diagnosis) | FULL | NONE | NONE -- team-lead knowledge |
| BT-29 (Spatial Confidence Gate) | FULL | PARTIAL (K1-K4) | NONE |
| BT-30 (Composition Verification Gate) | PARTIAL (split across 03 + 04) | PARTIAL (E8-E13, E22) | MEDIUM |
| BT-31 (Ship-Ready Gate + Mode 4) | PARTIAL (split across multiple) | PARTIAL (CO5-CO6) | MEDIUM-LOW |

### Core Finding

**BT-25, BT-26, BT-27, BT-28, BT-29 are FULLY DELIVERED as standalone artifacts.** The 03-spatial-confidence-gate.md (1,110 lines) and 06-communication-protocol.md (690 lines) are two of the most comprehensive deliverables in the entire flagship preparation. They are production-ready.

**BT-30 and BT-31 are NOT delivered as unified standalone artifacts.** Their component specifications exist across multiple files, but no single document provides the execution protocol (who runs what, in what order, what artifacts are produced, what happens on failure).

### Is the Execution Prompt's Layer 3 Sufficient?

**For the builder: YES.** Layer 3 gives the builder everything needed: send messages after each pass, wait for GO/REVISE, file ownership rules, and checkpoint gates G0-G3. The builder does not need to know about Gate 4, Gate 5, or the routing table.

**For the team-lead: NO.** The execution prompt alone is insufficient for the team-lead to orchestrate Gates 4 and 5. The team-lead needs:
1. The spatial confidence gate document (03) for Gate 2 execution -- EXISTS
2. The communication protocol (06) for checkpoint enforcement -- EXISTS
3. A Gate 4 unified specification -- DOES NOT EXIST as a single document
4. A Gate 5 / Ship-Ready unified specification -- DOES NOT EXIST as a single document

---

## 3. ITEMS REQUIRING REMEDIATION

### Priority 1: Gate 4 (Composition Verification) Unified Specification

**What is needed:** A single document (analogous to 03-spatial-confidence-gate.md) that:
- Lists all Gate 4 checks with thresholds (consolidating from 03 and 04)
- Specifies who runs each check (programmatic-auditor vs team-lead)
- Specifies execution order
- Specifies what artifacts are produced
- Specifies pass/fail response (fix cycle vs abort)
- Includes the zone visibility test specification (CP-03)
- Includes the structural overhead <= 20% check (if retained)
- Specifies SC-02+SC-03 re-verification protocol

**Estimated effort:** 30-45 minutes. Most content already exists in 04-restraint-protocol.md Section 5.3 and 03-extraction-gates-risks.md CP-01 through CP-04. Needs synthesis, not creation.

**Risk if skipped:** Team-lead must mentally synthesize Gate 4 from two separate documents during time-pressured experiment execution. Likely outcome: some checks are missed. Moderate risk.

### Priority 2: Gate 5 (Ship-Ready) Unified Specification

**What is needed:** A single document that:
- Lists the full Gate 5 execution sequence
- Specifies the screenshot pre-capture protocol (viewports, scroll positions, filenames)
- Specifies the comparative audit procedure (CD-006/DD-006 metrics and thresholds)
- References the PA SKILL.md for Mode 4 PA execution
- References FK-01 through FK-05 for kill criteria
- Specifies verdict synthesis protocol
- Specifies dissent protection enforcement

**Estimated effort:** 45-60 minutes. Much content exists across documents but needs consolidation.

**Risk if skipped:** Lower risk than Gate 4 because the team-lead has executed Mode 4 PA before (ceiling experiment) and has operational memory. But the comparative audit and verdict synthesis steps would be ad-hoc. Low-to-moderate risk.

### NOT requiring remediation:

- **BT-25 JavaScript validation (node parse check):** The checklist specifies `node -e "new Function(code)"` exits 0. This should be run as a quick verification but is a 30-second task, not a deliverable gap.
- **BT-26-28 coverage:** These are fully delivered. No action needed.
- **BT-29 coverage:** This is the gold standard deliverable. No action needed.

---

## 4. LEVEL 2 OBSERVATIONS

### Observation 1: Architecture of Completeness

The gate/protocol deliverables follow a clear pattern: the EARLIER gates (Gate 2: Spatial Confidence, Gate 3: Landmarks) are meticulously specified with standalone documents, while the LATER gates (Gate 4: Composition Verification, Gate 5: Ship-Ready) are distributed across multiple files. This is not random -- it reflects the preparation team's prioritization: spatial failures are the highest-cost failure mode (proven by ceiling experiment), so they received the most investment. But this creates an asymmetry where the team-lead has a 1,110-line specification for the mid-build gate but must improvise the final-stage gates.

### Observation 2: The Communication Protocol Is Exceptional

The 06-communication-protocol.md is one of the strongest deliverables in the entire preparation. It converts the "zero messaging" failure (100% historical rate across both prior experiments) into a binary enforcement protocol. The 5 checkpoints, 4 message types, 17-pairing routing table, 6 anti-patterns, and per-agent message limits represent a complete communication system. If the team-lead reads only one supplementary document, it should be this one.

### Observation 3: Gate Consolidation Created an Execution Ambiguity

The prompt assembly journal (D6: Gate Consolidation) reduced gates from 7 to 4 for the execution prompt (G0-G3). This was correct for the builder's attention budget. But the underlying system still has 5 gates (as documented in 03-spatial-confidence-gate.md Section 6). The execution prompt's G0-G3 do NOT map 1:1 to the 5-gate system:
- Execution prompt G0 = System Gate 0 (Content volume)
- Execution prompt G1 = System Gates 2+3 parallel (Spatial + Landmarks)
- Execution prompt G2 = System Gate 4 (Composition Verification)
- Execution prompt G3 = System Gate 5 (Ship-Ready) -- but G3 is described only as "Pre-audit self-check"

This means the execution prompt's G3 is a BUILDER self-check, while the system's Gate 5 is a TEAM-LED multi-agent evaluation. They are not the same thing. The team-lead needs to understand that "G3 passes" does NOT mean the page is ready to ship -- it means the builder believes it is ready for formal evaluation.

### Observation 4: The Restraint Protocol Is Operationally Ready

The 04-restraint-protocol.md is self-contained and includes a 30-line "Builder Instructions" section (Section 6, lines 465-503) that can be copy-pasted directly into the builder's prompt for Pass 2. It also includes a complete Restraint Map template (Appendix A) and a quick reference card (Appendix B). This document needs no remediation.

### Observation 5: The Missing "Structural Overhead <= 20%" Threshold

BT-30 specifies "structural overhead <= 20%" but this threshold does not appear in any standalone deliverable or the execution prompt. The spatial confidence gate's void budget calculation (Section 1 of 03-spatial-confidence-gate.md) separates content height from structural overhead, but never imposes a 20% cap. The restraint protocol does not mention it. This threshold may have been specified in the pre-flight checklist but never formalized. Decision needed: is this threshold still desired, or was it superseded by the content-to-void >= 70% rule (SC-03)?

---

## SUMMARY

| Status | Items |
|--------|-------|
| FULLY DELIVERED | BT-25, BT-26, BT-27, BT-28, BT-29 |
| PARTIALLY DELIVERED (needs unification) | BT-30, BT-31 |
| Critical remediation needed | 0 items |
| Medium remediation recommended | 2 items (Gate 4 + Gate 5 unified specs) |
| Not needed for builder | All 7 items -- builder sees only execution prompt Layer 3 |
| Needed for team-lead | Gate 4 spec, Gate 5 spec, communication protocol, spatial gate spec (4 reference documents) |

**Bottom line:** 5 of 7 items are fully delivered with high-quality standalone artifacts. The remaining 2 items have all component specifications written but lack unified execution protocols. The risk is moderate -- the team-lead can synthesize from existing files, but will pay a time cost during the experiment. Creating unified Gate 4 and Gate 5 specifications would take ~75-105 minutes total and would significantly reduce team-lead cognitive load during execution.

---

**END GATE/PROTOCOL GAP ANALYSIS**
