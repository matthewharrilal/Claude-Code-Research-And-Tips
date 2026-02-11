---
pipeline_stage: 4
stage_name: Axis Exploration (AD)
file_type: stage-header
predecessor: provenance/stage-3-organization-od/STAGE-HEADER.md
successor: provenance/stage-5-combination-cd/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-11
status: COMPLETE
---

<!--
===============================================================================
INLINE THREADING HEADER -- Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/STAGE-HEADER.md
Tier: B | Batch: 6 | Generated: 2026-02-06

1. WHY THIS EXISTS
Stage header for the Axis Exploration (AD) pipeline stage. Defines what AD
explored (spatial layout -- how components are POSITIONED on the page),
lists the 6 explorations (AD-001 through AD-006), specifies mandatory inputs
from all prior stages, and records the quality outcomes. Part of the
predecessor/successor stage chain.

2. THE QUESTION THIS ANSWERS
What did Stage 4 (AD) consume, what did it produce, what quality was achieved,
and what constraints flow forward to Stage 5 (CD)?

3. STATUS
COMPLETE -- AD stage fully executed. 6 explorations built, 28 findings produced
(AD-F-001 through AD-F-028), audited by 24+ agents, all fixes applied,
synthesis written, handoff delivered to CD.

5. BUILT ON
| Dependency                                          | Relationship                              |
|-----------------------------------------------------|-------------------------------------------|
| stage-3-organization-od/STAGE-HEADER.md             | Predecessor in stage chain                 |
| stage-3-organization-od/HANDOFF-OD-TO-AD.md         | Mandatory first-read consumed by AD work   |
| stage-3-organization-od/OD-outbound-findings.md     | OD-F-### constraints consumed by AD        |
| stage-2-density-dd/DD-outbound-findings.md          | DD-F-### constraints consumed by AD        |
| stage-1-components/component-findings.md            | COMP-F-### constraints consumed by AD      |
| SOUL-DISCOVERIES.md                                 | 5 soul pieces -- non-negotiable constraints|
| original-research/R4-AXIS-INNOVATIONS.md            | Primary research (192 findings)            |
| original-research/R2-CREATIVE-LAYOUTS.md            | Evaluated for AD (27 findings, ~67% applied)|
| 6 AD explorations (AD-001 through AD-006)           | Built artifacts                            |

6. MUST HONOR
- Predecessor/successor chain format must be maintained (frontmatter links)
- DD-F-012 ELEVATED: Axis IS density (not "serves" density)
- DD-F-006: Fractal self-similarity verified at 5 scales across all 6 ADs
- OD-F-005/OD-F-MP-001: Organization IS density -- 3-way equivalence validated
- OD-F-AP-001: No 2px structural borders (epidemic prevention)
- 5 soul pieces verified in every exploration
- Research grounding in R-4 (192 findings) was mandatory
- HANDOFF-OD-TO-AD.md was read FIRST before all AD work

8. CONSUMED BY
| Consumer                                            | How Used                                  |
|-----------------------------------------------------|-------------------------------------------|
| stage-5-combination-cd/STAGE-HEADER.md              | Successor in stage chain                   |
| HANDOFF-AD-TO-CD.md                                 | Transition mandate for CD                  |
| CD agents                                           | Stage execution reference                  |

10. DIAGNOSTIC QUESTIONS
- Are all 28 AD-F findings (AD-F-001 through AD-F-028) documented in AD-outbound-findings.md?
- Does the frontmatter predecessor/successor chain remain intact with stage-3
  and stage-5 STAGE-HEADERs?
- Are the mandatory inputs (HANDOFF, OD-outbound, DD-outbound, SOUL-DISCOVERIES, R4)
  correctly listed as consumed?
- Is the 3-way unification (axis=org=density) documented as the crown jewel?
- Is DD-F-012 marked as ELEVATED (not just "honored")?

END INLINE THREADING HEADER
===============================================================================
-->

# STAGE 4: AXIS EXPLORATION (AD)
## COMPLETE -- Where Spatial Layout Was Discovered

===============================================================================
## 1. THE STORY
===============================================================================

OD explored cognitive rhythm -- how information should be ORGANIZED.
AD explored spatial rhythm -- how components are POSITIONED on the page.

Six explorations were built, each pairing an axis pattern with the
organizational-density pairings established in OD. The crown jewel discovery:
**axis geometry IS density IS organization** -- three names for one phenomenon:
how content arrangement shapes attention flow. This extends OD-F-005
("Organization IS Density") to a 3-way identity. DD-F-012 is ELEVATED: axis
geometry does not merely "serve" the density pattern -- axis IS the density
pattern expressed spatially.

AD-001 Z-Pattern proved that Z-pattern traversal IS PULSE density expressed
spatially -- each Z-sweep cycle IS one PULSE beat (AD-F-002). AD-002 F-Pattern
proved that F-pattern vertical descent IS CRESCENDO compression -- typography
compression across acts mirrors CRESCENDO, and the decision matrix IS the peak
(AD-F-008). AD-003 Bento Grid proved that grid cells ARE dense islands and grid
gaps ARE sparse ocean -- bento CONTAINS the ISLANDS pattern (AD-F-009). AD-004
Spiral proved that the angular approximation (forced by soul constraint
border-radius: 0) IS geological stratification -- border-weight gradient IS
geological encoding (AD-F-014). AD-005 Choreography proved kinetic equivalence
-- axis direction change IS density state change (AD-F-017) -- and that
"choreography" means choreography of the READER's attention, not CSS animation
(AD-F-020). AD-006 Compound validated triple equivalence at compound scale and
identified the meta-equivalence: ATTENTION TOPOLOGY (AD-F-023).

No new soul piece was discovered -- the 5 visual soul pieces (sharp edges,
flat surfaces, serif/sans hierarchy, callout family DNA, square markers)
remained intact and complete. This negative finding is consistent with OD's
identical negative result: density, organization, and axis are governed by the
same soul.

===============================================================================
## 2. WHAT THIS STAGE CONSUMED
===============================================================================

| Input | File Location | Items | Role |
|-------|---------------|-------|------|
| HANDOFF-OD-TO-AD.md | `../stage-3-organization-od/HANDOFF-OD-TO-AD.md` | 1 file | Entry gate: constraints, OD lessons, AD requirements |
| OD-F Findings | `../stage-3-organization-od/OD-outbound-findings.md` | 17 findings (OD-F-001 through OD-F-013, OD-F-MP-001, OD-F-PR-001, OD-F-FL-001, OD-F-AP-001) | Organizational pattern definitions, meta-pattern, anti-pattern |
| DD-F Findings | `../stage-2-density-dd/DD-outbound-findings.md` | 18 findings (DD-F-001 through DD-F-018) | Density pattern definitions, fractal mandate, axis preferences |
| COMP-F Findings | `../stage-1-components/component-findings.md` | 21 findings | Component specifications from Stage 1 |
| R-4 Research | `../original-research/R4-AXIS-INNOVATIONS.md` | 192 findings | PRIMARY research for AD (axis innovations) |
| R-2 Research | `../original-research/R2-CREATIVE-LAYOUTS.md` | 27 findings | Evaluated for AD applicability (~67% applied) |
| R-1 Research | `../original-research/R1-DOCUMENTATION-PATTERNS.md` | 28 findings | Secondary consumption |
| R-5 Research | `../original-research/R5-COMBINATION-THEORY.md` | 39 findings | Partial (compound context in AD-006) |
| EXT-AXIS-Z | Bespoke research | 5 findings | Z-pattern external research (for AD-001) |
| EXT-AXIS-F | Bespoke research | 5 findings | F-pattern external research (for AD-002) |
| EXT-AXIS-B | Bespoke research | 5 findings | Bento grid external research (for AD-003) |
| EXT-AXIS-SP | Bespoke research | 5 findings | Spiral layout external research (for AD-004) |
| EXT-AXIS-CH | Bespoke research | 5 findings | Choreography external research (for AD-005) |
| EXT-AXIS-X | Bespoke research | 8 findings | Compound axis external research (for AD-006) |
| ACCUMULATED-IDENTITY-v1.1 | Identity file | 577 lines | Full inherited identity (soul, findings, constraints) |
| AD-CONVENTION-SPEC.md | Convention | 822 lines | Pre-build convention specification (prevents dialect divergence) |

===============================================================================
## 3. WHAT THIS STAGE PRODUCED
===============================================================================

| Output | File Location | Status |
|--------|---------------|--------|
| AD-001-z-pattern.html | `../../explorations/axis/AD-001-z-pattern.html` | COMPLETE |
| AD-002-f-pattern.html | `../../explorations/axis/AD-002-f-pattern.html` | COMPLETE |
| AD-003-bento-grid.html | `../../explorations/axis/AD-003-bento-grid.html` | COMPLETE |
| AD-004-spiral.html | `../../explorations/axis/AD-004-spiral.html` | COMPLETE |
| AD-005-choreography.html | `../../explorations/axis/AD-005-choreography.html` | COMPLETE |
| AD-006-compound.html | `../../explorations/axis/AD-006-compound.html` | COMPLETE |
| AD-outbound-findings.md | `AD-outbound-findings.md` | COMPLETE (28 findings) |
| AD-SYNTHESIS.md | `AD-SYNTHESIS.md` | COMPLETE (12 sections) |
| AD-AUDIT-SYNTHESIS.md | `AD-AUDIT-SYNTHESIS.md` | COMPLETE (47 actionable items, 23 reports) |
| AD-CONVENTION-SPEC.md | `AD-CONVENTION-SPEC.md` | COMPLETE (822 lines) |
| AD-RESEARCH-GATE.md | `AD-RESEARCH-GATE.md` | COMPLETE |
| R-4-AD-EVALUATION.md | `R-4-AD-EVALUATION.md` | COMPLETE (~1000 lines) |
| HANDOFF-AD-TO-CD.md | `HANDOFF-AD-TO-CD.md` | COMPLETE |
| ACCUMULATED-IDENTITY-v2.md | `../../knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | COMPLETE (~700 lines) |
| Transition Grammar | In AD-SYNTHESIS.md Section 9 | COMPLETE (5x5 matrix, 20 directed transitions) |
| axis-patterns.md | `../../patterns/axis-patterns.md` | COMPLETE (6 validated patterns) |

===============================================================================
## 4. QUALITY ACHIEVED
===============================================================================

### Scores

| AD | Pattern | Score | Verdict | Density Pairing | Org Pairing |
|----|---------|-------|---------|-----------------|-------------|
| AD-001 | Z-Pattern | 36/40 | INCLUDE | PULSE + TIDAL | Conversational |
| AD-002 | F-Pattern | 35/40 | INCLUDE | CRESCENDO + WAVE | Narrative Arc |
| AD-003 | Bento Grid | 37/40 | INCLUDE | ISLANDS + BOOKENDS | Task-Based |
| AD-004 | Spiral | 36/40 | INCLUDE | GEOLOGICAL + CRESCENDO | Confidence-Based |
| AD-005 | Choreography | 35/40 | INCLUDE | WAVE + BOOKENDS | Spatial Mapping |
| AD-006 | Compound | 38/40 | INCLUDE | ALL (FRACTAL primary) | ALL |

**Average: 36.2/40.** Range 35-38. All 6 explorations passed INCLUDE threshold (>=32).

### Soul Compliance

| # | Soul Piece | AD Status |
|---|-----------|-----------|
| 1 | border-radius: 0 | 0 violations across ~3,190 DOM elements |
| 2 | No filter: drop-shadow() | 0 violations |
| 3 | Instrument Serif + Inter + JetBrains Mono | Verified after document.fonts.ready |
| 4 | box-shadow: none | 0 violations (3 fixed during audit) |
| 5 | Muted earth palette | 0 off-palette colors |

Zero soul violations after audit fixes. The ANTI-PHYSICAL identity was confirmed
with 20 CONDITIONAL PASS findings in AD-005, each requiring reinterpretation
from "visual movement" to "structural movement."

### Audit Methodology

**Multi-dimensional audit (24+ agents, 5 phases):**

| Phase | Agents | Scope |
|-------|--------|-------|
| Spacing audit | 6 | One per AD -- padding, margin, gap vs convention |
| Overflow audit | 6 | One per AD -- container escape, horizontal scroll |
| Fresh-eyes review | 6 | One per AD -- no prior context, ship/no-ship verdict |
| Visual audit | 3 | Playwright screenshot comparison at 1440px + 768px |
| Structural + Provenance | 2 | DOM structure, token consistency, chain integrity |

**Results:**
- Total raw findings: ~250+
- De-duplicated actionable: ~47
- Severity: 7 BROKEN/SOUL, 11 OVERFLOW, 1 REJECT, 8 CRAMPED, 14 INCONSISTENT, 12 CONCERN, 8 IMBALANCED, 6 NITPICK
- Soul violations found: 5 (all correctly detected and fixed)
- Soul violations remaining: 0
- Systemic fixes applied: 4 (header padding, callout label font, body line-height, callout margin)
- Per-file fixes applied: ~12
- Convention compliance: AD-CONVENTION-SPEC.md enforced across all 6 explorations

### Ship Verdicts (Fresh-Eyes)

All 6 explorations received "would ship" verdicts after fix execution. No
"REJECT" findings remained on fixed files.

===============================================================================
## 5. PER-EXPLORATION SUMMARY
===============================================================================

| AD | Axis Pattern | Key Finding | Equivalence | Key Discovery |
|----|-------------|-------------|-------------|---------------|
| AD-001 | Z-Pattern | AD-F-002, AD-F-004 | Temporal | Z-sweep cycle IS PULSE beat; 3-way unification first validated |
| AD-002 | F-Pattern | AD-F-005, AD-F-008 | Temporal | Typography compression mirrors CRESCENDO; decision matrix IS peak |
| AD-003 | Bento Grid | AD-F-009, AD-F-011 | Spatial | Grid cells ARE islands; internal layout variation creates fractal ISLANDS |
| AD-004 | Spiral | AD-F-013, AD-F-014 | Proportional | Angular spiral resolves geological-radial tension; border-weight IS geological encoding |
| AD-005 | Choreography | AD-F-017, AD-F-020 | Kinetic | Direction change IS density state change; "movement" is reader attention, not CSS |
| AD-006 | Compound | AD-F-023, AD-F-024 | Gravitational + META | Meta-equivalence = ATTENTION TOPOLOGY; compound is sequential not simultaneous |

### AD-001 Z-Pattern (36/40)
Paired with OD-001 Conversational (PULSE + TIDAL). Hero section uses golden ratio
grid (1.618fr / 1fr) mapping to Gutenberg diagram. Z-sweep traversal IS PULSE --
each cycle one beat. Micro-Z validated at component scale (DD-F-006 fractal).
Width variation (60% Q to 100% A) creates TIDAL automatically.

### AD-002 F-Pattern (35/40)
Paired with OD-002 Narrative Arc (CRESCENDO + WAVE). Five Freytag acts with
progressive typography compression. Tension meter tracks CRESCENDO position
(AD-F-005). Decision matrix at Act III IS the CRESCENDO peak (AD-F-008).
Typography compression at act boundaries, not within acts.

### AD-003 Bento Grid (37/40)
Paired with OD-003 Task-Based (ISLANDS + BOOKENDS). Grid cells ARE dense
islands, grid gaps ARE sparse ocean (AD-F-009). Cell size hierarchy IS ISLANDS
hierarchy (AD-F-010). Compound density at multiple scales -- grid as multi-scale
container (AD-F-012). Highest non-compound score.

### AD-004 Spiral (36/40)
Paired with OD-004 Confidence-Based (GEOLOGICAL + CRESCENDO). Angular
approximation forced by border-radius: 0 IS geological stratification
(AD-F-013). Border-weight gradient (4px/3px/1px, skipping 2px) IS geological
encoding (AD-F-014). Confidence-proportional spacing creates CRESCENDO
whitespace (AD-F-015). Soul constraint proved generative, not restrictive.

### AD-005 Choreography (35/40)
Paired with OD-005 Spatial Mapping (WAVE + BOOKENDS). Kinetic equivalence:
direction change IS density state change (AD-F-017). "Choreography" means
reader attention movement through static structure, not CSS animation
(AD-F-020). 20 CONDITIONAL PASS findings reinterpreted "visual movement" as
"structural movement" per ANTI-PHYSICAL identity. Highest citation count (65).

### AD-006 Compound (38/40)
Paired with ALL organizational patterns (FRACTAL primary). Validated triple
equivalence at compound scale (AD-F-021). Meta-equivalence: ATTENTION TOPOLOGY
(AD-F-023). Compound is sequential through scrolling time, not simultaneous
within viewport (AD-F-024). Transition grammar produced: 5x5 matrix with 4
smooth, 10 bridge, 6 breathing transitions (AD-F-025). Highest score (38/40).

===============================================================================
## 6. CAUSAL RELATIONSHIPS
===============================================================================

### OD -> AD (Backward Chain -- What AD Consumed)

AD consumed all 17 OD-F findings. Three mechanisms drove AD work:

1. **OD-F-FL-001 (Organizational Patterns Imply Axis Preferences):** Each org
   pattern has a natural axis geometry preference. The TRANSITIVE CHAIN is:
   organizational pattern (OD-F-005) implies density pattern (DD-F-001 through
   DD-F-005) implies axis preference (DD-F-012). AD received all three
   constraints simultaneously and validated them across 6 explorations.

2. **OD-F-MP-001 (Organization = Density Identity):** When choosing an axis
   layout, AD simultaneously chose an organizational-density configuration.
   The three cannot be separated. AD ELEVATED this to 3-way identity.

3. **OD-F-AP-001 (2px Border Epidemic):** AD enforced zero 2px structural
   borders. The 3-category border system was maintained. Border-weight gradient
   (4px/3px/1px) skips 2px entirely.

### DD -> OD -> AD (Full Backward Chain)

AD inherited all 18 DD-F findings via OD. Key DD-F constraints in AD:
- DD-F-006 (FRACTAL): Verified at 5 scales across all 6 ADs (AD-F-027). No 6th
  scale found (AD-F-028 bounds the model).
- DD-F-012 (Axis serves density): ELEVATED to identity -- axis IS density
  expressed spatially. The most significant elevation in the entire pipeline.
- DD-F-013 (Density tolerance): Carried forward as CD's gate finding.
- DD-F-016 (Consistent 4px borders): Honored via 3-category border system.

### AD -> CD (Forward Chain -- What AD Delivers)

AD findings flow to CD via three mechanisms:

1. **AD-F-023 (ATTENTION TOPOLOGY):** The meta-equivalence unifying all prior
   findings. CD combinations must maintain this 3-way equivalence or they are
   INVALID.

2. **AD-F-024 + AD-F-025 (Sequential Compound + Transition Grammar):** CD must
   honor sequential compound (not simultaneous) and classify all transitions as
   smooth, bridge, or breathing.

3. **AD-F-028 (5-Scale Fractal Bound):** CD should verify existing 5 scales
   hold under combination, not seek a 6th.

### OD Audit Methodology -> AD Audit (Methodological Chain)

OD established the multi-agent adversarial audit (17 agents, 4 phases, ~45 min).
AD evolved this:
- OD: 17 agents, wave execution (visual first)
- AD: 24+ agents, multi-dimensional execution (spacing + overflow + fresh-eyes
  + visual + structural/provenance)
- AD added per-dimension specialization (6 spacing auditors, 6 overflow auditors)
  vs OD's per-exploration specialization
- Both achieved 0 soul violations post-fix

### OD Convention -> AD Convention (Methodological Chain)

OD learned that 3 quality dialects (Polished, Functional, Editorial) required
post-hoc unification via OD-CONVENTION-SPEC.md (468 lines). AD learned from this:
AD-CONVENTION-SPEC.md (822 lines) was created BEFORE builders started, not after.
Result: zero dialect divergence across 6 AD explorations.

===============================================================================
## 7. ACCUMULATED RESEARCH WEIGHT
===============================================================================

| Research Stream | Total Findings | Consumed by AD | Application Rate | Notes |
|-----------------|---------------|----------------|------------------|-------|
| R-4 Axis Innovations | 192 | 169 | ~88% | PRIMARY research. AD-006 highest (42 citations), AD-004 lowest (16) |
| R-2 Creative Layouts | 27 | ~18 | ~67% | Up from 0% in OD. Explicitly evaluated via R-2-AD-EVALUATION.md |
| R-1 Documentation Patterns | 28 | Secondary | Secondary | Consumed through OD's validated patterns |
| R-5 Combination Theory | 39 | Partial | Partial (compound) | Consumed in AD-006 compound context; PRIMARY for CD |
| OD-F Findings | 17 | 17 | 100% | All consumed, OD-F-005 ELEVATED to 3-way identity |
| DD-F Findings | 18 | 18 | 100% | DD-F-012 ELEVATED to identity |
| COMP-F Findings | 21 | 21 | 100% (inherited) | Soul pieces enforced |
| EXT-AXIS-* Bespoke | 33 | 33 | 100% | 5 per AD (AD-001 through AD-005) + 8 for AD-006 |
| **TOTAL** | **~375** | **~296+** | **~79%+** | |

**Key Insight:** R-2 Creative Layouts achieved ~67% consumption after explicit
evaluation (was 0% in OD). This validates OD-F-PR-001: unconsumed research
streams become consumable when explicitly evaluated against current-stage
hypotheses. Future stages should always explicitly evaluate prior unconsumed
streams.

### Citation Totals Per Exploration

| Exploration | R-4 | R-2 | EXT-AXIS-* | OD-F | DD-F | Total |
|-------------|-----|-----|------------|------|------|-------|
| AD-001 (Z) | 31 | 10 | 5 | 5 | 5 | 56 |
| AD-002 (F) | 24 | 10 | 5 | -- | -- | 39 |
| AD-003 (Bento) | 18 | 8 | 5 | -- | -- | 31 |
| AD-004 (Spiral) | 16 | 9 | 5 | -- | -- | 30 |
| AD-005 (Choreo) | 38 | 12 | 5 | 4 | 6 | 65 |
| AD-006 (Compound) | 42 | 12 | 8 | 7 | 5 | 74 |
| **Total** | **169** | **61** | **33** | **16** | **16** | **295** |

===============================================================================
## 8. KEY DECISIONS
===============================================================================

1. **Convention spec BEFORE build:** AD-CONVENTION-SPEC.md (822 lines) was created
   in Phase 0, before any builder started. This prevented OD's 3-dialect
   divergence problem. Zero quality dialect issues across 6 AD explorations.

2. **DD-F-012 ELEVATED to identity:** The most significant conceptual elevation in
   the pipeline. "Axis serves density" became "axis IS density expressed spatially."
   Validated across all 6 explorations without exception.

3. **Angular spiral (not curved):** border-radius: 0 forces angular approximation,
   which IS geological stratification. Soul constraint proved generative, not
   restrictive (AD-004).

4. **Compound = sequential, not simultaneous:** Multiple axis patterns in one
   viewport creates cacophony. Compound emerges through scrolling time (AD-F-024).

5. **"Choreography" = reader movement, not CSS animation:** ANTI-PHYSICAL identity
   means "movement" is attention choreography through static structure (AD-F-020).

6. **Border-weight gradient 4px/3px/1px:** Skips 2px to avoid epidemic anti-pattern.
   Semantic encoding per confidence level (AD-004). Extends OD-F-AP-001.

7. **Transition grammar 3-type system:** 5x5 matrix classifying all 20 directed
   pattern transitions as smooth (4), bridge (10), or breathing (6). Choreography
   is the universal bridge; Spiral is the most isolated pattern (AD-006).

8. **No Soul Piece #6:** No spatial soul piece candidate emerged. 5-piece model
   remains complete (consistent with OD's identical negative finding).

9. **No 6th fractal scale:** AD-F-028 formally bounds DD-F-006 at 5 scales. The
   "strategy" scale candidate collapsed into existing scales.

10. **R-2 explicit evaluation:** 27 Creative Layout findings evaluated for AD
    applicability. ~67% applied (up from 0% in OD). Validates that unconsumed
    research becomes consumable through explicit evaluation.

===============================================================================
## 9. CONVENTION INHERITANCE
===============================================================================

### Conventions Inherited from OD (15 REINFORCED)

| # | Convention | Source | AD Status |
|---|-----------|--------|-----------|
| 1 | Dark headers (full-bleed dark background) | OD-CONVENTION-SPEC | REINFORCED -- all 6 ADs |
| 2 | Dark code blocks | OD-CONVENTION-SPEC | REINFORCED -- all 6 ADs |
| 3 | Zone token naming (--color-zone-sparse/dense/breathing) | OD-CONVENTION-SPEC | REINFORCED |
| 4 | --type-meta at 0.75rem (12px) | OD-CONVENTION-SPEC | REINFORCED |
| 5 | Prophylactic reduced-motion rule | OD-CONVENTION-SPEC | REINFORCED |
| 6 | 3-category border system | OD-F-AP-001 | REINFORCED -- no 2px structural borders |
| 7 | DD-F-006 fractal at 5 scales | DD-F-006 | REINFORCED -- verified in all 6 ADs |
| 8 | 5 soul pieces (zero tolerance) | SOUL-DISCOVERIES | REINFORCED |
| 9 | Callout family DNA | COMP-F findings | REINFORCED |
| 10 | OD-F-005 org=density identity | OD-F-005 | REINFORCED + ELEVATED to 3-way |
| 11 | Locked-layer token enforcement | OD-CONVENTION-SPEC | REINFORCED |
| 12 | Essence callout spacing | DD-F-013 | REINFORCED |
| 13 | document.fonts.ready before font checks | OD Audit lesson | REINFORCED |
| 14 | Table overflow-x: auto | OD best practice | REINFORCED |
| 15 | Skip-link + focus-visible | Comprehensive Audit | REINFORCED |

### Conventions NEW in AD (12 NEW)

| # | Convention | Source | Purpose |
|---|-----------|--------|---------|
| 1 | Header padding 64px/32px (--space-16/--space-8) | AD-CONVENTION-SPEC S4 | Consistent header dimensions |
| 2 | Axis-layer CSS separation | AD-CONVENTION-SPEC S5 | Locked layer + axis layer architecture |
| 3 | Golden ratio proportions (1.618fr/1fr) | AD-001, EXT-AXIS-Z-001 | Grid and hero proportions |
| 4 | Transition grammar (smooth/bridge/breathing) | AD-F-025, AD-006 | Pattern boundary classification |
| 5 | Border-weight gradient 4px/3px/1px | AD-004, AD-F-014 | Semantic geological encoding |
| 6 | Bento grid gap 32px (--space-8) | AD-CONVENTION-SPEC S12.4 | Grid spacing standard |
| 7 | Sequential compound (not simultaneous) | AD-F-024 | Multi-pattern composition rule |
| 8 | Callout label font-size standardization | AD Audit FIX | Consistent callout labels |
| 9 | Body line-height standardization | AD Audit FIX | Consistent body text rhythm |
| 10 | Callout margin standardization | AD Audit FIX | Consistent callout spacing |
| 11 | Responsive collapse at 768px (stacks to single column) | AD-CONVENTION-SPEC S16 | Uniform responsive behavior |
| 12 | ANTI-PHYSICAL reinterpretation protocol | AD-005, AD-F-020 | "Movement" = reader attention, not CSS |

**Total convention inheritance for CD: 27 conventions (15 REINFORCED + 12 NEW)**

===============================================================================
## 10. FILES IN THIS FOLDER
===============================================================================

| File | Status | Role |
|------|--------|------|
| `STAGE-HEADER.md` | COMPLETE | This file -- stage overview |
| `AD-outbound-findings.md` | COMPLETE | 28 AD-F findings for CD/Migration |
| `AD-SYNTHESIS.md` | COMPLETE | Cross-AD synthesis and analysis (12 sections) |
| `AD-AUDIT-SYNTHESIS.md` | COMPLETE | Audit record (~47 de-duplicated findings, 23 reports) |
| `AD-CONVENTION-SPEC.md` | COMPLETE | Convention specification (822 lines) |
| `AD-RESEARCH-GATE.md` | COMPLETE | R-4 evaluation documentation |
| `R-4-AD-EVALUATION.md` | COMPLETE | Full R-4 finding-by-finding evaluation (~1000 lines) |
| `HANDOFF-AD-TO-CD.md` | COMPLETE | Gate file for Stage 5 (CD) |
| `CLAUDE.md` | COMPLETE | Navigation file for this directory |

**Working Artifacts (external):** `knowledge-architecture/_pa-enrichment-scratchpad/` -- AD execution artifacts (builder findings, scribe reports, audit reports, research packages, verification screenshots). See scratchpad CLAUDE.md for full file manifest.

===============================================================================
