# Crack Dimension Verification Report

**Date:** 2026-02-26
**Scope:** Pipeline v5 structural changes (verdict terminology migration, gate architecture, APPLIED mode, Mini-PA, Pass->Cycle rename, cross-reference fixes)
**Method:** Programmatic consistency checks + targeted grep verification + manual cross-file analysis
**Verifier:** Opus 4.6 (crack-verify buddy)

---

## Summary Table

| ID | Dimension | Status | Evidence | Notes |
|----|-----------|--------|----------|-------|
| D1 | Soul Violation | **Neutral** | No identity gate changes. Soul constraints unchanged (10 in artifact-identity-perception.md). | Verdict rename is cosmetic; identity gates still fire on same triggers. |
| D2 | Specification Ambiguity | **Strengthened** | Old terms (REFINE/REBUILD/SHIP WITH FIXES) fully purged from 13 active pipeline files. 209/209 consistency checks PASS. Only surviving instances are in _backup, _historical, MONOLITHIC, and research/extract files (correct). | New terms (IMPROVE/RETHINK/RELEASE/POLISH) are unambiguous and action-oriented. check-consistency.js validates zero coexistence. |
| D3 | Compression Loss | **Strengthened** | GR-84 (IMPROVEMENTS Comment) now verifies builders leave structured improvement ideas in HTML. GR-55 perceptibility thresholds prevent sub-perceptual CSS from passing as "multi-coherence." | IMPROVEMENTS comment = anti-compression mechanism (forces builder to articulate what was NOT done). |
| D4 | Ghost Mechanisms | **Strengthened** | GR-18 promoted from RECOMMENDED to REQUIRED. Confirmed in gate-manifest.json (required tier, line 42), gate-runner-core.js REQUIRED_GATES array (line 1698), gate-runner-spec.md (line 118). Verdict impact: "GR-18 FAIL = IMPROVE (ghost mechanism detected)." | Ghost mechanisms were #1 proven failure mode. Promotion means ANY ghost mechanism now blocks verdict. This is the single most impactful D4 defense improvement. |
| D5 | Sub-Perceptual Values | **Strengthened** | GR-55 rewritten with explicit perceptibility thresholds: background >= 15 RGB delta, font-family any difference, font-size >= 2px, letter-spacing >= 0.5px, border structural change, padding >= 8px total. Confirmed in gate-runner-spec.md (line 188), gate-runner-core.js (line 1544), gate-manifest.json changelog (line 359). | Previously GR-55 only counted channels with no perceptibility floor. A page could pass GR-55 with 3 "channels" all below perception (e.g., 2 RGB background delta). Now each channel must clear its perceptibility threshold. |
| D6 | Cross-File Reference Drift | **Strengthened** | `check-consistency.js` passes 209/209 (0 FAIL). Covers: gate counts, tier breakdowns, PA question counts, auditor assignments, line counts, BV ranges, function counts, agent counts, verdict terminology, file existence, GR-48 coverage array. | The consistency checker itself was updated to verify the new verdict terminology (RELEASE/POLISH/IMPROVE/RETHINK) AND verify absence of old terms (SHIP WITH FIXES/REFINE/REBUILD). This is a STRUCTURAL defense improvement. |
| D7 | Complexity Budget Overflow | **WARNING** | Total gates: **60** (22 REQ + 15 REC + 9 ADV + 8 BV + 2 DIAG + 1 UTIL + 3 ITER). Ceiling = 60. **Zero slots remaining.** | Gate ceiling was 60. We are now AT the ceiling. Any future gate addition requires removing or merging an existing gate. This is not yet cracked (we are at the boundary, not past it), but the margin is gone. Recommend documenting the ceiling constraint and adding a "gate budget" check to check-consistency.js. |
| D8 | Threshold Mismatch | **Strengthened** | Background delta thresholds are consistently tiered across files: 15 RGB = gate enforcement floor (gate-runner-core.js GR-11, GR-55), 20 RGB = builder minimum (artifact-builder-recipe-compose.md line 117), 25 RGB = compositional target (artifact-builder-recipe-compose.md line 118). Calibration language consistent in artifact-identity-perception.md (lines 198-203). | The three-tier system (gate/builder/target) is explicitly documented. No conflicting threshold values found across active files. |
| D9 | Missing Verification Layer | **Strengthened** | GR-84 fills the previously missing verification of IMPROVEMENTS comments (SIG-01). GR-48 extended to verify BV-01 through BV-08 coverage (SIG-03). GR-55 with perceptibility thresholds closes the "channel count without perception" loophole. | Three new or extended verification layers added. No new requirements were introduced without corresponding verification. |
| D10 | Agent Topology Failure | **Neutral** | D10 observer protocol unchanged (d10-observer-protocol.md exists). Agent count consistent at 17 (MANIFEST.md). Mini-PA adds a lighter audit option (3 auditors + 1 weaver) but does not change topology. | Mini-PA is a Mode 2.5 SUBSET of Mode 4, not a topology change. Escalation triggers properly defined (pa-deployment.md lines 442-446). |
| D11 | Vocabulary-Constraint Confusion | **Neutral** | No changes to vocabulary/constraint separation. Recipe files unchanged in their disposition structure. APPLIED mode callouts in artifact-builder-recipe-compose.md are additive guidance, not new constraints. | APPLIED mode adds "skip D-04, use SUBTLE for D-02" guidance — this is vocabulary direction (what to do) not constraint addition (what not to do). |
| D12 | Information Isolation Violation | **Neutral** | PA auditor isolation unchanged. Fresh-eyes principle intact. Mini-PA auditors (A, C, G) receive the same isolated inputs as Mode 4 auditors. PA-02 cross-validation in Mini-PA does not leak build context. | Mini-PA auditors are a subset of Mode 4 auditors with identical isolation. No new information pathways to PA auditors. |
| D13 | Gate-Quality Gap | **Strengthened** | GR-55 perceptibility thresholds close a quality gap (channels now must be perceptible, not just countable). GR-84 bridges the gate-quality gap for iterative builds (forces structured improvement tracking). GR-18 promotion means ghost mechanisms cannot be waved through at RECOMMENDED level. | The gate-quality gap is still real (gates verify compliance, PA verifies quality), but the gap NARROWED. Perceptibility thresholds mean gates now partially verify quality, not just compliance. |
| D14 | Iterative Discovery Suppression | **Strengthened** | Pass -> Cycle renaming (confirmed in MANIFEST.md, artifact-orchestrator.md) frames iteration as convergence, not failure. IMPROVEMENTS comment (GR-84) + RESIDUAL artifact encourage builders to document what they WOULD do next. Two-Cycle Convergence framing (MANIFEST.md line 71) explicitly states "Single-cycle RELEASE is the welcome exception, not the expected outcome." | The renaming is subtle but meaningful: "Pass 0 failed, do Pass 1" implies failure. "Cycle 0 established, Cycle 1 deepens" implies growth. Combined with IMPROVEMENTS comment, this creates a structural incentive for iterative discovery. |

---

## Detailed Analysis

### D7: Complexity Budget — At Ceiling (WARNING)

The gate count breakdown:
- REQUIRED: 22
- RECOMMENDED: 15
- ADVISORY: 9
- BRIEF VERIFICATION: 8
- DIAGNOSTIC: 2
- UTILITY: 1
- ITERATION: 3
- **TOTAL: 60 / 60**

This session added 1 new gate (GR-84) and promoted 2 existing gates (GR-18 REC->REQ, GR-55 ADV->REC). The promotions are tier movements, not count increases. GR-84 is the only net-new gate, bringing us from 56 to 57 in the consistency checker's main count (the 60 total includes iteration/utility/diagnostic gates not in the main tiers).

While not cracked, this deserves monitoring. **Recommendation:** Add a `gate budget remaining` check to check-consistency.js that warns when total >= 58 and fails when total > 60.

### D2: Verdict Terminology — Clean Migration

The grep for REFINE/REBUILD across active pipeline files (excluding _backup, _historical, MONOLITHIC, research files) returns only check-consistency.js itself (which contains the patterns as detection rules). The 209/209 consistency checker explicitly validates:
- Zero instances of "SHIP WITH FIXES" in 13 files (should be "POLISH")
- Zero instances of "REBUILD" in 13 files (should be "RETHINK")
- Zero instances of "REFINE" in 13 files (should be "IMPROVE")
- Presence of all 4 new terms (RELEASE, POLISH, IMPROVE, RETHINK) in key files

### D4 + D5: Ghost Mechanisms + Sub-Perceptual — Strongest Improvement

GR-18 promotion and GR-55 perceptibility thresholds together represent the largest single-session improvement to crack defense:
- **Before:** Ghost mechanisms (CSS claimed but visually absent) could pass as RECOMMENDED-tier warning. Sub-perceptual multi-coherence channels (e.g., 2 RGB background delta counted as a "channel") could inflate multi-coherence scores.
- **After:** Any ghost mechanism blocks the verdict (REQUIRED tier). Every multi-coherence channel must clear its specific perceptibility threshold. These were the #1 and #3 proven failure modes from the Flagship experiment.

### D8: Background Delta Threshold Consistency

Three-tier system is internally consistent:
| Role | Threshold | Source |
|------|-----------|--------|
| Gate enforcement floor | >= 15 RGB | gate-runner-core.js GR-11, GR-55 |
| Builder minimum | >= 20 RGB | artifact-builder-recipe-compose.md line 117 |
| Compositional target | 25-50 RGB | artifact-builder-recipe-compose.md line 118, artifact-identity-perception.md line 200 |

No file contradicts another. The calibration language in artifact-identity-perception.md (line 201) correctly states "15 RGB = subtle (barely perceptible). 25 RGB = confident. 50 RGB = dramatic."

---

## Overall Crack Defense Assessment

| Metric | Value |
|--------|-------|
| Dimensions Strengthened | **8** (D2, D3, D4, D5, D6, D8, D9, D13, D14 — counted D14 as strengthened = **9 total strengthened**) |
| Dimensions Neutral | **4** (D1, D10, D11, D12) |
| Dimensions Cracked | **0** |
| New Cracks | **0** |
| Warnings | **1** (D7: at ceiling, zero margin) |
| Net Change | **+9 strengthened, 0 weakened** |

**Verdict: NO CRACKS INTRODUCED. 9/14 dimensions actively strengthened. 1 warning (D7 at ceiling).**

The changes represent a net-positive structural improvement. The strongest gains are in D4 (Ghost Mechanisms) and D5 (Sub-Perceptual Values) through GR-18 promotion and GR-55 perceptibility thresholds — addressing the two most damaging failure modes from the Flagship experiment. The D7 warning is real but manageable: the pipeline is at its gate ceiling and must merge or remove gates before adding new ones.
