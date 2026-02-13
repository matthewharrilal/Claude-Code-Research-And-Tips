# CD Sourcing Mechanism Trace
## How Did CD Builders Find and Incorporate Prior Work?

**Agent:** mechanism-tracer
**Date:** 2026-02-12
**Task:** Trace the exact mechanism by which CD builders sourced content from prior phases (DD, OD, AD)

---

## 1. Executive Summary

CD builders did NOT read prior OD/AD HTML files directly (with one exception: CD-006). Instead, they consumed prior work through a **5-layer mediation funnel** that progressively compressed ~30,000 lines of accumulated research into per-builder research packages of ~250 lines each. The mechanism was explicit, pre-planned, and documented in the MASTER-CD-EXECUTION-PROMPT.md.

The sourcing was **indirect by design**: a chain of Agent-0A through Agent-0D in Phase 0 pre-digested all prior work into convention specs, research packages, lock sheets, and evaluation matrices. Individual builders never touched raw prior-phase artifacts -- they received curated, task-specific subsets.

---

## 2. The Input Funnel: 5 Layers of Mediation

### Layer 1: Raw Prior Work (~30,000+ lines)
The full corpus of prior phases:
- **Stage 1 (Components):** 21 COMP-F findings, soul pieces
- **Stage 2 (DD):** 6 explorations, 18 DD-F findings, density patterns
- **Stage 3 (OD):** 6 explorations, 17 OD-F findings, org patterns, OD-CONVENTION-SPEC (468 lines)
- **Stage 4 (AD):** 6 explorations, 28 AD-F findings, axis patterns, AD-CONVENTION-SPEC (1,093 lines), AD-PA-CONVENTIONS (970 lines)
- **R5 Research:** R5-COMBINATION-THEORY.md (756 lines, 39 findings)
- **Identity:** ACCUMULATED-IDENTITY-v2.md (~520 lines)
- **Handoff:** HANDOFF-AD-TO-CD.md (447 lines)

Total inputs at Layer 1: ~6,128 lines of mandatory Phase-0 reading (per MASTER-CD-EXECUTION-PROMPT Section 1), plus all 18 prior HTML exploration files.

### Layer 2: MASTER-CD-EXECUTION-PROMPT.md (931 lines)
The MASTER prompt was created from 7 research files totaling ~5,200 lines and compressed into a self-contained execution blueprint. It specified:
- Exactly which 10 files to read in Phase 0 (with paths and line counts)
- What CD inherits (84 findings, 5 soul pieces, 20 patterns, 39 R-5 findings)
- The 6 explorations with their DD+OD+AD triples
- Team topology (18-22 agents, wave structure)
- 61 binary rules
- 138-item execution checklist
- 224-item plan verification audit

This was read by the Lead agent, NOT by individual builders.

### Layer 3: Phase 0 Infrastructure (4 agents, ~3,400 lines created)
Phase 0 agents pre-digested Layer 1 into CD-specific documents:

| Agent | Output | Lines | What It Did |
|-------|--------|-------|-------------|
| Agent-0A (Convention Extender) | CD-CONVENTION-SPEC.md | ~1,456 | Inherited AD-CONV Sections 1-16 verbatim, added 4 new CD-specific sections (17-20). Resolved temperature taxonomy, ESC-001/ESC-002. |
| Agent-0B (R-5 Evaluator) | R5-EVALUATION-MATRIX.md | ~707 | Mapped all 39 R-5 findings to the 6 CD explorations. Created per-finding evaluation templates and binary test scenarios. |
| Agent-0C (Research Packager) | 6 research packages + lock sheet | ~1,750 | Created per-builder research packages (one per CD exploration). Created the lock sheet classifying all conventions by modification authority. |
| Agent-0C2 (Decision Evaluator) | CD-005-EVALUATION.md + CD-006-CONTENT-SELECTION.md | ~470 | Evaluated CD-005 replacement decision (REPLACE with Multi-Axis Transition). Selected CD-006 real content topic. |
| Agent-0D (Convention Auditor) | convention-audit-report.md | ~100 | Audited CD-CONVENTION-SPEC for internal consistency. Found 3 deficiencies, which the Lead fixed. |

### Layer 4: Per-Builder Research Packages (~250 lines each)
Each builder received a SINGLE research package containing exactly what they needed:

**Common sections in every package:**
1. Soul Checklist (10 binary checks)
2. Common References (paths to AD-PA-CONVENTIONS, CD-CONVENTION-SPEC, combination-rules, lock sheet, ACCUMULATED-IDENTITY-v2)
3. The 4 Combination Rules (velocity, temperature, weight, proximity)
4. 11x11 Compatibility Matrix reference
5. 5 Soul Pieces
6. Compound Rules (AD-F-024)
7. Transition Grammar matrix (AD-F-025)

**Per-builder unique sections:**
1. Axis-Density-Org Triple (which DD, OD, AD patterns this file uses)
2. AD Explorations to Reference (2 AD HTML file paths per builder; 6 for CD-006)
3. Transition Type between patterns (from the 5x5 grammar)
4. Components to Use (with weight/velocity classifications)
5. R-5 Findings to Test (specific subset: 9-11 per builder; all 39 for CD-006)
6. Density Pattern guide (specific to this exploration's DD pattern)
7. Structural Constraints (container width, responsive, progressive enhancement)
8. Anti-Patterns to Avoid (risk-ranked for this specific exploration)
9. Scoring Criteria (target score, what success looks like)

### Layer 5: Wave 1 Identity Delta (fed to Wave 2 builders)
After Wave 1 (CD-001, CD-002, CD-003), the Lead compiled an identity delta -- a summary of the 12 findings (CD-F-001 through CD-F-012) discovered during Wave 1. This delta was given to Wave 2 builders (CD-004, CD-005, CD-006) so they could incorporate learning from Wave 1 without reading the Wave 1 HTML files themselves.

---

## 3. What Research Files Were CD Builders Instructed to Read?

Per the research packages and MASTER prompt, builders were instructed to reference:

### All Builders (Common Read List):
1. `AD-PA-CONVENTIONS.md` -- Convention ideology (WHY behind every rule)
2. `CD-CONVENTION-SPEC.md` -- The CD-specific convention spec (created in Phase 0)
3. `combination-rules.md` -- The 4 combination rules
4. `lock-sheet.md` -- Convention classification by modification authority
5. `ACCUMULATED-IDENTITY-v2.md` -- Full accumulated context from all prior stages
6. Their specific research package (which contained digested versions of everything else)

### Wave 1 Builders (CD-001, CD-002, CD-003):
- 2 AD HTML files each (e.g., Builder-A: AD-002 + AD-003)
- Their research package

### Wave 2 Builders (CD-004, CD-005, CD-006):
- 2 AD HTML files each (CD-006: all 6)
- Wave 1 identity delta
- Their research package
- CD-006 specifically: CD-006-CONTENT-SELECTION.md

---

## 4. Did CD Builders Read OD/AD HTML Files Directly?

**Partially -- but selectively, not comprehensively.**

Each builder was pointed to exactly 2 AD HTML files relevant to their axis pattern combination:

| Builder | AD Files Referenced |
|---------|-------------------|
| Builder-A (CD-001) | AD-002 (F-Pattern), AD-003 (Bento Grid) |
| Builder-B (CD-002) | Not explicitly listed in package (Z-Pattern + Spiral implies AD-001, AD-004) |
| Builder-C (CD-003) | Not explicitly listed (Bento + Choreography implies AD-003, AD-005) |
| Builder-D (CD-004) | Spiral + Choreography (implies AD-004, AD-005) |
| Builder-E (CD-005) | Z + F + Bento (implies AD-001, AD-002, AD-003) |
| Builder-F (CD-006) | ALL 6 AD explorations explicitly listed |

**OD HTML files were NOT in builder read lists.** No research package pointed builders to any OD-001 through OD-006 HTML file. OD patterns were consumed indirectly through:
- The OD-F findings embedded in ACCUMULATED-IDENTITY-v2
- The combination-rules.md (which digests OD findings)
- The CD-CONVENTION-SPEC (which inherits from AD-CONVENTION-SPEC, which inherits from OD-CONVENTION-SPEC)

**DD HTML files were also NOT in builder read lists.** DD patterns entered through the same indirect channels.

**Key finding:** The input funnel was deliberately asymmetric. AD HTML files were the most proximate reference (same visual language, same soul compliance). OD and DD HTML files were considered redundant because their findings had already been absorbed into the convention spec chain and accumulated identity.

---

## 5. Was There an Explicit Instruction to Synthesize Prior Findings?

**Yes, but it was structural, not a free-form synthesis instruction.**

The synthesis mechanism was NOT "read all prior work and synthesize it." Instead, it was:

1. **Convention Inheritance:** Sections 1-16 of CD-CONVENTION-SPEC were inherited VERBATIM from AD-CONVENTION-SPEC, which itself inherited from OD-CONVENTION-SPEC. This is mechanical propagation, not synthesis.

2. **Research Package Curation:** Agent-0C (Research Packager) performed the actual synthesis work -- reading all prior findings, all R-5 research, and all AD exploration data, then compressing it into per-builder packages. The synthesis happened ONCE, at the infrastructure level, not per-builder.

3. **R-5 Evaluation Matrix:** Agent-0B mapped all 39 R-5 findings to specific CD explorations, deciding which findings each builder would test. This was a synthesis of research into action plans.

4. **Binary Rules:** The 61 binary rules encoded prior findings as pass/fail checks. Builders didn't need to "synthesize" DD-F-014 (max 2 callouts per viewport) -- they just had to follow rule K-10.

5. **Wave 1 -> Wave 2 Delta:** The identity delta explicitly asked Wave 2 builders to incorporate Wave 1 discoveries. This was the closest thing to a "synthesize prior findings" instruction.

**The mechanism was: pre-digest everything into rules, then give builders rules to follow.** This aligns with the project's core architectural principle: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

---

## 6. How Was the "Soul" Propagated Into CD?

The soul propagated through **all three channels simultaneously** -- spec, example, and inheritance:

### Channel 1: Convention Spec (Primary)
The CD-CONVENTION-SPEC.md Section 1 ("Soul Compliance Checklist") contained all 10 soul checks with explicit CSS implementations. Every builder's research package started with this checklist (Section 0).

### Channel 2: Lock Sheet (Classification)
The lock sheet classified soul rules as "ALWAYS-LOCKED" (11 items, including border-radius: 0, box-shadow: none, opacity === 1.0, ANTI-PHYSICAL identity). This made it binary: ALWAYS-LOCKED items cannot be challenged, period.

### Channel 3: Builder Prompt Blocks (Enforcement)
Per MASTER-CD-EXECUTION-PROMPT Section 5.4, every builder prompt contained:
- **Block 1: Soul Checklist** -- inline copy of the 10 soul checks
- **Block 2: File-Write Enforcement** -- "CRITICAL: You MUST write using Write tool"
- **Block 3: Compaction Survival** -- anchor to CD-BUILD-STATE.md
- **Block 4: Embedded Q1-Q3** -- self-audit questions

### Channel 4: Programmatic Verification (Post-Build)
After each wave, programmatic soul verification was run: grep for border-radius, box-shadow, drop-shadow, 2px borders, and rgba violations across all HTML files. Phase 1A and 1B both reported: "0 border-radius violations, 0 box-shadow violations, 0 drop-shadow violations, 0 2px border violations, 0 rgba violations."

### Channel 5: AD HTML Examples (Implicit)
Builders who read AD HTML files saw the soul in action -- every AD exploration already passed soul compliance. The visual language of sharp edges, no shadows, and limited palette was demonstrated in every referenced AD file.

**Result:** 0 soul violations across all 6 CD explorations (10,610 lines, 25 findings). The multi-channel propagation was fully effective.

---

## 7. The Complete Input Funnel Per CD File

### CD-001: Reasoning Inside Code (Builder-A)

**Direct inputs:**
- research-package-cd-001.md (250 lines)
- AD-002-f-pattern.html (studied for F-Pattern technique)
- AD-003-bento-grid.html (studied for Bento Grid technique)
- CD-CONVENTION-SPEC.md (referenced, not read fully -- package excerpts)
- lock-sheet.md (referenced)
- ACCUMULATED-IDENTITY-v2.md (referenced)

**Indirect inputs (via research package mediation):**
- R5 findings H2, T2, N1-N4, G2, G3, A4, Recipe 2, S5
- DD-F-002 (CRESCENDO pattern)
- OD-002 (Narrative arc -- referenced by name, not by reading OD HTML)
- Combination rules (velocity, temperature, weight, proximity)
- 11x11 compatibility matrix (specific pairs called out: Code+Reasoning=Yes, Code+Core=Yes)

### CD-006: Pilot Migration (Builder-F, Crown Jewel)

**Direct inputs:**
- research-package-cd-006.md (~340 lines, largest package)
- CD-006-CONTENT-SELECTION.md (~422 lines, detailed content plan)
- ALL 6 AD HTML files (AD-001 through AD-006)
- Wave 1 identity delta (12 findings from CD-F-001 through CD-F-012)
- CD-CONVENTION-SPEC.md
- lock-sheet.md
- ACCUMULATED-IDENTITY-v2.md

**Indirect inputs (via research package + content selection mediation):**
- ALL 39 R-5 findings
- ALL 11 component types with minimum appearance counts
- ALL 5 axis patterns with section assignments
- ALL 7 transitions with grammar classifications
- ALL density patterns with per-section assignments
- DD-F-006 (fractal at 5 scales, explicitly mandated)

---

## 8. Key Mechanism Properties

### 8.1 Compression Ratio
- Total raw prior work: ~30,000+ lines
- Per-builder input: ~250-340 lines (research package) + ~1,456 lines (convention spec, referenced not read fully)
- Effective compression: ~60:1 to ~100:1

### 8.2 Single Point of Synthesis
Phase 0 agents (0A, 0B, 0C, 0C2) were the ONLY agents that read the full prior corpus. Individual builders never touched the raw research. This created a bottleneck but also ensured consistency -- all builders worked from the same synthesized base.

### 8.3 Convention as Propagation Vehicle
The convention spec was the primary propagation vehicle. It carried:
- All soul rules (inherited from AD-CONV S1)
- All design tokens (inherited from AD-CONV S10)
- All layout rules (inherited from AD-CONV S11-S16)
- All CD-specific combination rules (new S17-S20)
- Deviation protocol (inherited from OD-CONV Appendix A)

The convention spec is essentially a **frozen knowledge capsule** -- it encodes all prior decisions as immutable rules, making it possible for builders to comply without understanding the full research chain.

### 8.4 Research Packages as Task-Specific Lenses
Each research package was a lens that filtered the full corpus down to what one specific builder needed. Builder-A didn't need to know about Spiral patterns or Choreography transitions -- their package excluded those entirely. This prevented cognitive overload and focused attention on the specific combination being explored.

### 8.5 Two-Wave Knowledge Transfer
Wave 1 builders had NO peer context -- they built independently from research packages alone. Wave 2 builders received the Wave 1 identity delta, which meant they knew what Wave 1 discovered. This created an asymmetry: Wave 2 explorations could build on Wave 1 learning, while Wave 1 could not.

---

## 9. Assessment: Strengths and Weaknesses of the Mechanism

### Strengths
1. **Zero contention:** Per-file ownership meant 6 builders, 6 files, 0 conflicts
2. **Consistent soul compliance:** 0 violations across 10,610 lines proves the multi-channel soul propagation works
3. **Scalable:** The funnel pattern (raw -> master prompt -> phase 0 -> research packages -> builders) could scale to more explorations
4. **Binary rule effectiveness:** Rules like "ZERO 2px borders" achieved 100% compliance because they were unambiguous

### Weaknesses
1. **OD/DD HTML never directly consulted:** Builders saw the OD/DD influence only through convention inheritance and research package summaries, not the actual exploration artifacts. If OD/DD had visual patterns not captured in the convention spec, they would have been lost.
2. **Single-point bottleneck:** Agent-0C (Research Packager) was the sole synthesizer. If 0C misunderstood or omitted a finding, all downstream builders inherited the gap.
3. **Convention-as-spec may over-constrain:** The mechanism heavily favored compliance over creativity. Builders followed rules rather than absorbing the perceptual reasoning behind them. This is the "Level 1: Application" engagement level from the DESIGN-SYSTEM README.md -- the lowest level.
4. **Wave 1 delta was informational, not structural:** The delta listed findings but didn't restructure Wave 2 packages. Wave 2 builders had to mentally integrate the delta with their pre-built packages.

---

## 10. Conclusion

The CD sourcing mechanism was a **5-layer mediation funnel** designed around the principle that binary rules outperform judgment. Prior work was compressed through convention specs, research packages, lock sheets, and evaluation matrices into task-specific inputs for each builder. Builders consumed mostly markdown documentation (convention specs, research packages, identity documents) rather than prior HTML exploration files. The soul propagated through spec, lock sheet, prompt blocks, and programmatic verification simultaneously.

The mechanism prioritized **compliance over understanding** -- builders could produce soul-compliant, convention-following explorations without reading (or even knowing about) the majority of the 30,000+ lines of prior work. This trade-off was deliberate, reflecting the project's architectural insight that "50:1 compression from agent output to behavioral constraint" is acceptable when the constraints are well-designed.

---

*Trace complete. 2026-02-12. Agent: mechanism-tracer.*
