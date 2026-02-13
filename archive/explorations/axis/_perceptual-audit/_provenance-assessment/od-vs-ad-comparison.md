# OD vs AD Provenance Depth Comparison

**Author:** OD-vs-AD Depth Comparator Agent
**Date:** 2026-02-11
**Purpose:** Side-by-side analysis of OD provenance richness at handoff vs AD provenance richness now.

---

## A. File Count Comparison

### Formal Provenance Directory (stage-X-*/\*)

| Category | OD Files | OD Lines | AD Files | AD Lines | OD:AD Ratio |
|----------|----------|----------|----------|----------|-------------|
| **STAGE-HEADER.md** | 1 | 305 | 1 | 140 | 2.2x |
| **SYNTHESIS.md** | 1 | 672 | 1 | 298 | 2.3x |
| **outbound-findings.md** | 1 | 935 | 1 | 506 | 1.8x |
| **AUDIT-SYNTHESIS.md** | 1 | 522 | 1 | 357 | 1.5x |
| **HANDOFF.md** | 1 | 351 | 1 | 233 | 1.5x |
| **CONVENTION-SPEC.md** | 1 | 468 | 0 (in \_ad-execution/) | 821 (execution dir) | N/A |
| **RESEARCH-GATE.md** | 1 | 440 | 0 (in \_ad-execution/) | 429 (execution dir) | N/A |
| **CLAUDE.md** | 1 | 158 | 1 | 110 | 1.4x |
| **TOTAL provenance dir** | **8 files** | **3,851** | **6 files** | **1,644** | **2.3x** |

**Verdict:** OD's formal provenance directory is 2.3x larger than AD's by line count, and has 8 files vs AD's 6. Two critical AD files (CONVENTION-SPEC and RESEARCH-GATE) live in `_ad-execution/` instead of the formal provenance directory.

### Working Artifacts (Execution Scratchpads)

| Category | OD Location | OD Files | OD Lines | AD Location | AD Files | AD Lines |
|----------|-------------|----------|----------|-------------|----------|----------|
| Audit scratchpad | `_od-audit-scratchpad/` | 29 files | 9,275 | (in `_ad-execution/`) | ~23 audit files | ~4,500 est |
| Re-enrichment | `_od-reenrichment/` | 38+ files | 8,474 | N/A | 0 | 0 |
| Execution artifacts | N/A | N/A | N/A | `_ad-execution/` | 61 files | 12,411 |
| Perceptual audit | (in `_comprehensive-audit/`) | ~78 files | ~9,500 | `_perceptual-audit/AD-*/` | 6 dirs + reports | ~1,756 lines in reports |
| **TOTAL working artifacts** | | **~145 files** | **~27,249** | | **~67 files** | **~14,167** |

**Working artifacts ratio:** OD ~2x larger. But this is somewhat misleading -- OD's working artifacts accumulated across 6 separate agent team executions, while AD had 1 primary build + 1 audit + 1 fix cycle.

### Findings

| Category | OD | AD | Notes |
|----------|----|----|-------|
| Core findings | OD-F-001 through OD-F-013 (13) | AD-F-001 through AD-F-028 (28) | **AD has 2.2x more findings** |
| Categorical findings | OD-F-MP-001, OD-F-PR-001, OD-F-FL-001, OD-F-AP-001 (4) | None (all folded into AD-F-###) | OD uses 4 separate categories |
| **TOTAL findings** | **17** | **28** | **AD wins 1.6x** |
| Finding ID mentions in provenance | 174 occurrences | 128 occurrences | OD 1.4x more densely threaded |
| Audit findings | 89 (OD granular audit) + ~68 (Wave 5 post-re-enrichment) | ~47 (de-duplicated) + ~250 raw | Similar raw scale, AD has fewer de-duplicated |

**Verdict on findings:** AD produced more formal findings (28 vs 17), but OD's findings are more densely threaded through the provenance chain documents (174 vs 128 mentions). OD's finding format includes richer metadata (chain impact, validation evidence, target stages) while AD's follows a similar but slightly shorter template.

### Convention Spec

| Metric | OD | AD |
|--------|----|----|
| File | OD-CONVENTION-SPEC.md | AD-CONVENTION-SPEC.md |
| Lines | 468 | 822 |
| Location | In provenance dir | In `_ad-execution/` (NOT in provenance dir) |
| Sections | 12 | 16 (11 inherited from OD + 5 AD-specific) |

**AD's convention spec is 1.8x larger** -- it extends OD's by adding axis-specific sections. However, it lives in the execution scratchpad, NOT in the formal provenance directory. This is a structural gap.

### Identity Evolution

| File | OD Contribution | AD Contribution |
|------|-----------------|-----------------|
| ACCUMULATED-IDENTITY-v1.md | 541 lines -- Created during OD | N/A (predecessor) |
| ACCUMULATED-IDENTITY-v1.1.md | N/A | 576 lines -- AD's working input |
| ACCUMULATED-IDENTITY-v2.md | N/A | 518 lines -- AD's output |
| Identity deltas | 3 files (wave1, wave2, wave3) ~120 lines each | 3 files (wave1A, wave1B, wave1C) + 1 cumulative checkpoint |

**Verdict:** Both stages properly updated the accumulated identity. OD created v1 (541 lines), AD consumed v1.1 (576 lines) and produced v2 (518 lines). The identity chain is intact. AD's v2 is actually shorter than v1.1, which could indicate tighter writing or could indicate compression of nuance.

---

## B. Layering Depth

### OD Enrichment Passes (6 total)

| Pass | Team Size | Purpose | Duration | Artifacts |
|------|-----------|---------|----------|-----------|
| 1. Initial OD build | ~6 builders | Build 6 explorations | Multi-session | 6 HTML files |
| 2. OD granular adversarial audit | 17 agents | Quality audit | ~45 min | 89 findings, 29 scratchpad files |
| 3. OD fix execution | 7 agents | Apply 16 fixes | ~25 min | 6 fix reports, 2 verification reports |
| 4. OD re-enrichment | 43 agents | Convention unification + bespoke research | ~4 hours | 38+ files, 42 new EXT-* findings |
| 5. Comprehensive hierarchical audit | ~58 agents | Visual + structural + provenance + triage | ~2 hours | 78 files |
| 6. Provenance chain remediation | 18 agents | Formal provenance chain creation | ~1 hour | 27 files |

**OD total agent-passes:** ~149 agents across 6 enrichment cycles.

### AD Enrichment Passes (3 total)

| Pass | Team Size | Purpose | Duration | Artifacts |
|------|-----------|---------|----------|-----------|
| 1. AD build (3 waves) | ~18 agents (6 builders + 3 scribes + identity agents + verifiers) | Build 6 explorations | ~3 hours | 6 HTML files, 28 findings, 3 scribe reports, 3 identity deltas |
| 2. AD audit (multi-dimensional) | 24+ agents | Visual + structural + fresh-eyes + provenance audit | ~1.5 hours | ~23 audit reports |
| 3. AD fix execution + synthesis | ~10 agents (3 fixers + verifiers + synthesizers) | Apply fixes + write synthesis | ~1 hour | Fix reports, verification, synthesis, handoff |

**AD total agent-passes:** ~52 agents across 3 enrichment cycles.

### Comparison

| Metric | OD | AD | Ratio |
|--------|----|----|-------|
| Total enrichment cycles | 6 | 3 | 2x |
| Total agents deployed | ~149 | ~52 | 2.9x |
| Total working artifact lines | ~27,249 | ~14,167 | 1.9x |
| Score improvement trajectory | 33.8 -> 35.5 (+1.7) | (single pass, no before/after) | N/A |
| Re-enrichment cycle | YES (43 agents, Mode C) | NO | OD only |
| Post-enrichment adversarial re-audit | YES (8 agents, Wave 5) | NO | OD only |
| Provenance chain remediation | YES (18 agents, dedicated pass) | Folded into build | OD had dedicated pass |

**Critical gap:** AD has had **no re-enrichment cycle** and **no post-audit re-audit**. OD went through TWO additional quality cycles after its initial audit+fix (the 43-agent re-enrichment AND the Wave 5 post-re-enrichment audit). AD went straight from build -> audit -> fix -> synthesis with no iteration loop.

---

## C. Research Threading Density

### R-\* Findings in Provenance

| Metric | OD | AD |
|--------|----|----|
| R-1 application rate | 79% (22/28) | Secondary (not tracked at finding level) |
| R-2 application rate | 0% (deferred to AD) | ~67% (18/27 directly applied) |
| R-4 application rate | 0% (not OD's scope) | ~88% (169/192 cited) |
| R-5 application rate | ~5% (2/39) | Partial (compound context) |
| EXT-\* bespoke research | 94 unique findings, 100% applied | 33 findings, all applied |
| Total citation count across explorations | Not tallied per-exploration | 295 citations across 6 ADs (tracked per exploration) |

### OD-F Findings Threading Into AD

| OD-F Finding | Referenced in AD? | How? |
|-------------|-------------------|------|
| OD-F-001 (Conversational Width) | YES | AD-001 preserves 60/100 width split |
| OD-F-003 (Q&A PULSE) | YES | AD-F-002 validates Z-PULSE equivalence |
| OD-F-005 (Org IS Density) | YES (CRITICAL) | AD-F-004, AD-F-021, AD-F-023 all reference and EXTEND |
| OD-F-007 (Mode-Transition Breathing) | YES | AD-F-025 transition grammar requires 48px+ |
| OD-F-MP-001 (Org=Density) | YES (ELEVATED) | Extended to 3-way identity |
| OD-F-FL-001 (Org implies Axis) | YES (VALIDATED) | Confirmed across all 6 ADs |
| OD-F-AP-001 (2px Border Epidemic) | YES (ENFORCED) | Zero 2px violations |
| OD-F-011 (Tension Wayfinding) | YES | AD-F-005 extends tension meter in F-pattern context |
| OD-F-013 (Decision Climax) | YES | AD-F-008 validates CRESCENDO peak |

**Verdict:** OD-F findings are well-threaded into AD provenance. The key findings (OD-F-005, OD-F-MP-001, OD-F-FL-001, OD-F-AP-001) are not just referenced but EXTENDED or ELEVATED. The transitive chain is properly maintained.

### AD-F Findings -- Already Threaded?

AD-F findings (28 total) are documented in `AD-outbound-findings.md` (506 lines) and referenced across AD-SYNTHESIS, HANDOFF-AD-TO-CD, and STAGE-HEADER. The 128 occurrences of "AD-F-" across the formal provenance directory suggest decent initial threading, though lower density than OD's 174 occurrences of "OD-F-" across 8 files.

---

## D. Identity Evolution

### OD Identity Contributions

OD produced rich identity evolution artifacts:

| Artifact | Description |
|----------|-------------|
| ACCUMULATED-IDENTITY-v1.md (541 lines) | Created from scratch during OD -- full inherited identity |
| 3 identity deltas (wave1/2/3) | ~120 lines each, tracking identity refinements per re-enrichment wave |
| 3 identity refinements documented | (1) Solid offsets binary rule, (2) Zone token naming, (3) GEOLOGICAL = border weight |
| 27 builder discoveries | Documented across 3 waves with identity implications |
| ANTI-PHYSICAL pattern | 20/20 SOUL FAILs systematically documented |
| OD-F-005 emergence tracking | Full 4-section narrative in OD-SYNTHESIS (observation -> hypothesis -> evidence -> conclusion) |

### AD Identity Contributions

| Artifact | Description |
|----------|-------------|
| ACCUMULATED-IDENTITY-v1.1.md (576 lines) | Working input (expanded from v1) |
| ACCUMULATED-IDENTITY-v2.md (518 lines) | Output with AD discoveries incorporated |
| 3 identity deltas (wave1A/1B/1C) | Tracking identity evolution across 3 build waves |
| 1 identity checkpoint cumulative | Consolidation document |
| 3-way unification | Axis IS Organization IS Density |
| ATTENTION TOPOLOGY meta-equivalence | Unifying concept (AD-F-023) |
| 5 equivalence mechanisms | Temporal, Spatial, Proportional, Kinetic, Gravitational |
| No Soul Piece #6 | Negative finding confirmed |
| No 6th fractal scale | Bounded at 5 (AD-F-028) |

### Is ACCUMULATED-IDENTITY Updated for AD?

**YES.** ACCUMULATED-IDENTITY-v2.md exists (518 lines), produced by AD. The chain is:
- v1 (541 lines) -- created by OD
- v1.1 (576 lines) -- expanded for AD consumption
- v2 (518 lines) -- AD output

The v2 is shorter than v1.1, which deserves scrutiny. It may indicate good compression, or it may indicate that some OD identity nuance was lost in the AD synthesis.

---

## E. The Honest Assessment

### Rating: AD Provenance Completeness = 6/10

**Relative to where OD was at handoff, AD's provenance is approximately 60% as deep.**

### What AD Has That Is Strong

1. **28 formal findings (AD-F-001 through AD-F-028)** -- more than OD's 17. Well-structured with evidence, classification, and severity.
2. **Complete formal chain** -- STAGE-HEADER, SYNTHESIS, outbound-findings, AUDIT-SYNTHESIS, HANDOFF-AD-TO-CD, CLAUDE.md all exist and are populated.
3. **Proper identity evolution** -- ACCUMULATED-IDENTITY-v2 created. Identity deltas tracked per build wave.
4. **Convention spec** -- 822 lines, larger than OD's 468.
5. **Research consumption documented** -- R-4 at ~88%, R-2 evaluated, EXT-AXIS-* all applied.
6. **Crown jewel discovery documented** -- ATTENTION TOPOLOGY (AD-F-023) properly elevated and threaded.
7. **Transition grammar** -- Novel structural contribution (5x5 matrix, 20 directed transitions).
8. **DD-F-012 elevation** -- Properly documented with "ELEVATED" verdict.
9. **Handoff to CD** -- Exists, includes acknowledgment protocol, open questions, research guidance.
10. **Perceptual audit** -- 6 dedicated AUDIT-REPORT.md files (1,756 lines total), one per exploration.

### What AD Is Missing (Relative to OD at Handoff)

1. **No re-enrichment cycle.** OD went through a dedicated 43-agent re-enrichment pass that raised scores +1.7 avg. AD has had no equivalent. Scores are self-reported during build, not independently verified through enrichment iteration.

2. **No post-audit adversarial re-audit.** OD had a Wave 5 post-re-enrichment audit (8 agents) that caught OD-AP-003 (rgba systemic) and confirmed all fixes held. AD has no equivalent second audit pass.

3. **Convention spec not in formal provenance directory.** AD-CONVENTION-SPEC.md (822 lines) lives in `_ad-execution/` instead of `stage-4-axis-ad/`. This means a CD agent reading the formal provenance chain would miss it.

4. **Research gate not in formal provenance directory.** AD-RESEARCH-GATE.md and R-4-AD-EVALUATION.md are in `_ad-execution/`. OD has OD-RESEARCH-GATE.md in the formal provenance directory.

5. **Provenance directory is 2.3x thinner.** OD: 3,851 lines across 8 files. AD: 1,644 lines across 6 files. The formal chain documents are less detailed.

6. **OD-SYNTHESIS had 12 sections spanning 672 lines.** AD-SYNTHESIS has 13 sections but only 298 lines (2.3x shorter). Key sections like "6-Pattern Analysis Table" and "Research Consumption" are present but compressed.

7. **No per-finding chain impact documentation.** OD-outbound-findings.md has "Chain Impact" subsections for every finding (how it affects AD, CD, Migration). AD-outbound-findings.md has per-finding tables but no explicit "Chain Impact" subsection guiding CD consumption.

8. **No OD-CONVENTION-SPEC equivalent in AD provenance.** The convention spec IS important provenance -- it's what prevents quality dialect drift. Its absence from the formal directory is a real gap.

9. **No comprehensive hierarchical audit.** OD had a ~58-agent comprehensive audit (visual + structural + provenance + triage) with 4 audit pillars. AD's audit was ~24+ agents across 3 quality gates. Less thorough by scale.

10. **No separate provenance remediation pass.** OD had a dedicated 18-agent provenance chain remediation that created the formal chain documents. AD's provenance was written as part of a synthesis pass, not a dedicated remediation.

11. **Score validation methodology differs.** OD scores (34-37/40, avg ~35.5) were independently verified through re-enrichment iteration with before/after measurements. AD scores (35-38/40, avg ~36.2) are higher but were set during the build phase, not independently re-verified.

12. **STAGE-HEADER is minimal.** OD's STAGE-HEADER (305 lines) has 8 structured sections including causal relationships and accumulated research weight. AD's STAGE-HEADER (140 lines) has fewer sections and less narrative depth.

### Summary Table

| Dimension | OD (at handoff) | AD (now) | Gap |
|-----------|-----------------|----------|-----|
| Formal provenance files | 8 | 6 | MODERATE |
| Formal provenance lines | 3,851 | 1,644 | SIGNIFICANT (2.3x) |
| Enrichment cycles | 6 | 3 | SIGNIFICANT |
| Total agents deployed | ~149 | ~52 | SIGNIFICANT (2.9x) |
| Formal findings | 17 | 28 | AD STRONGER |
| Finding thread density | 174 mentions | 128 mentions | MODERATE |
| Convention spec | 468 lines (in provenance) | 822 lines (NOT in provenance) | STRUCTURAL GAP |
| Research gate | In provenance dir | NOT in provenance dir | STRUCTURAL GAP |
| Identity evolution | v1 created (541 lines) | v2 created (518 lines) | ADEQUATE |
| Bespoke research | 94 EXT-* (100% applied) | 33 EXT-AXIS-* (100% applied) | OD 2.8x more |
| Re-enrichment | YES (43 agents) | NO | CRITICAL GAP |
| Post-audit re-audit | YES (8 agents) | NO | SIGNIFICANT GAP |
| Provenance remediation | YES (18 agents, dedicated) | NO (folded into synthesis) | SIGNIFICANT GAP |
| Crown jewel discovery | OD-F-005 (Org IS Density) | AD-F-023 (ATTENTION TOPOLOGY) | BOTH STRONG |
| HANDOFF document | 351 lines, 11 sections | 233 lines, 9 sections | MODERATE |
| Audit depth | 89 + ~68 findings (2 passes) | ~47 de-duplicated (1 pass) | SIGNIFICANT |

### What This Means for CD Readiness

AD's provenance is **structurally complete but depth-incomplete**. All required files exist. The formal chain (STAGE-HEADER -> SYNTHESIS -> outbound-findings -> AUDIT-SYNTHESIS -> HANDOFF -> CLAUDE.md) is intact. But:

1. The chain documents are thinner than OD's equivalents.
2. Critical files (convention spec, research gate) are misplaced outside the formal provenance directory.
3. No re-enrichment cycle means AD scores lack the independent verification that OD's went through.
4. The AD explorations themselves haven't been through the iterative enrichment loop that raised OD's quality floor.

**If OD at handoff was a 10/10 for provenance readiness, AD right now is a 6/10.** The skeleton is complete. The muscle is thinner. The iteration depth is substantially less.

### Recommended Actions to Close the Gap

1. **Move AD-CONVENTION-SPEC.md and AD-RESEARCH-GATE.md** into the formal provenance directory (`stage-4-axis-ad/`).
2. **Expand AD-SYNTHESIS.md** -- add chain impact subsections, emergence tracking narrative, and cross-AD lessons with the depth of OD-SYNTHESIS.
3. **Expand STAGE-HEADER.md** -- add causal relationships, accumulated research weight, and detailed quality sections.
4. **Add "Chain Impact" to AD-outbound-findings.md** -- each finding should explicitly state how it constrains CD and Migration.
5. **Consider a dedicated AD re-enrichment pass** if quality bar equivalence with OD is required.
6. **Run a post-fix re-audit** to catch systemic issues the way OD's Wave 5 caught OD-AP-003.
7. **Verify AD scores independently** through a structured verification process, not just builder self-reporting.

---

## Source Files Consulted

| File | Path | Purpose |
|------|------|---------|
| OD STAGE-HEADER | `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` | OD stage overview |
| OD SYNTHESIS | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md` | OD cross-exploration analysis |
| OD outbound-findings | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | OD formal findings |
| OD AUDIT-SYNTHESIS | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` | OD audit record |
| OD CONVENTION-SPEC | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` | OD conventions |
| OD RESEARCH-GATE | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | OD research gate |
| OD HANDOFF-OD-TO-AD | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | OD handoff |
| OD CLAUDE.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | OD navigation |
| AD STAGE-HEADER | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/STAGE-HEADER.md` | AD stage overview |
| AD SYNTHESIS | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` | AD cross-exploration analysis |
| AD outbound-findings | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` | AD formal findings |
| AD AUDIT-SYNTHESIS | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` | AD audit record |
| AD HANDOFF-AD-TO-CD | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | AD handoff |
| AD CLAUDE.md | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/CLAUDE.md` | AD navigation |
| AD-CONVENTION-SPEC | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` | AD conventions (NOT in provenance dir) |
| R-4-AD-EVALUATION | `knowledge-architecture/_ad-execution/R-4-AD-EVALUATION.md` | R-4 evaluation (NOT in provenance dir) |
| ACCUMULATED-IDENTITY-v1 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md` | OD identity output |
| ACCUMULATED-IDENTITY-v2 | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | AD identity output |
| OD GRANULAR AUDIT RESULTS | `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` | OD detailed audit |
| FIX-VERIFICATION-REPORT | `explorations/axis/_perceptual-audit/FIX-VERIFICATION-REPORT.md` | AD fix verification |
| AD perceptual audit reports | `explorations/axis/_perceptual-audit/AD-*/AUDIT-REPORT.md` | Per-exploration PA |

---

*Compiled 2026-02-11 by OD-vs-AD Depth Comparator Agent.*
