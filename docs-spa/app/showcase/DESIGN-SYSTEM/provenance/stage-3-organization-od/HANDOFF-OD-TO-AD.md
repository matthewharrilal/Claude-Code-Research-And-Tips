---
pipeline_stage: 3→4
stage_name: OD to AD Handoff
file_type: handoff
predecessor: provenance/stage-3-organization-od/OD-outbound-findings.md
successor: provenance/stage-4-axis-ad/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: 2026-02-08
---

# HANDOFF: OD → AD
## AD Reads This FIRST at Phase 0

===============================================================================
## PURPOSE
===============================================================================

This document transfers everything AD needs to know from OD. Before AD builds
anything, it must read and acknowledge this handoff.

**AD cannot proceed without:**
1. Reading this file completely
2. Acknowledging all mandatory consumption items
3. Planning how each OD finding will be applied to axis geometry work

===============================================================================
## ACKNOWLEDGMENT PROTOCOL
===============================================================================

Before AD work begins, confirm:

```
□ I have read this entire handoff document
□ I have read OD-outbound-findings.md completely
□ I understand OD-F-005 / OD-F-MP-001 (Organization IS Density) applies to ALL AD work
□ I understand the TRANSITIVE CHAIN: org pattern → density pattern → axis preference
□ I have noted each OD exploration's natural axis preference (OD-F-FL-001)
□ I understand the quality bar (>=32 for INCLUDE, 100% soul compliance, 0 anti-patterns)
□ I know which files I must create and update
□ I will read R-4 Axis Innovations (192 findings) as primary research before building
□ I will evaluate R-2 Creative Layouts (27 findings, 0% consumed by OD) for applicability
□ I accept responsibility for maintaining the provenance chain
□ I will create provenance INCREMENTALLY during build, not after
```

**DO NOT begin AD work until BOTH HANDOFF-OD-TO-AD.md AND OD-outbound-findings.md
exist and have been read.**

===============================================================================
## ORGANIZATIONAL PATTERNS (6 Total, All VALIDATED / INCLUDE)
===============================================================================

| Pattern | OD | Score | Density Pairing | Key Insight |
|---------|-----|-------|-----------------|-------------|
| **CONVERSATIONAL** | OD-001 | ~35/40 | PULSE + TIDAL | Q&A IS PULSE -- sparse questions, dense answers, automatic rhythm |
| **NARRATIVE** | OD-002 | ~33/40 | CRESCENDO | Story arc IS CRESCENDO -- exposition sparse, climax dense |
| **TASK-BASED** | OD-003 | ~33/40 | ISLANDS + BOOKENDS | Task clusters ARE ISLANDS -- discrete dense blocks in sparse sea |
| **CONFIDENCE** | OD-004 | INCLUDE | GEOLOGICAL + CRESCENDO | Certainty strata ARE GEOLOGICAL -- border thickness encodes confidence |
| **SPATIAL** | OD-005 | INCLUDE | WAVE + ISLANDS | Hub-spoke IS WAVE -- sparse hub oscillates with dense spokes |
| **CREATIVE/EMERGENT** | OD-006 | INCLUDE (crown jewel) | ALL (FRACTAL primary) | Organization IS Density -- same phenomenon, two perspectives |

**Pattern Selection Rule:** AD doesn't choose organizational patterns arbitrarily.
Each organizational pattern has a natural axis preference (OD-F-FL-001). Axis
geometry must SERVE the organizational-density identity, not fight it.

===============================================================================
## OD OUTBOUND FINDINGS (Mandatory Consumption)
===============================================================================

**Reference:** `provenance/stage-3-organization-od/OD-outbound-findings.md`

### Findings AD MUST Consume

| Finding | What It Says | AD Responsibility |
|---------|--------------|-------------------|
| **OD-F-005** | **Organization IS Density** -- same phenomenon, two perspectives. Crown jewel. | AD axis geometry serves a SINGLE org-density phenomenon, not two independent layers |
| **OD-F-MP-001** | Meta-pattern elevating OD-F-005 -- 5 org=density identities confirmed across all 6 ODs | ALL AD explorations must treat org-density as unified when selecting axis geometry |
| **OD-F-FL-001** | Organizational patterns imply axis preferences (conversational=vertical stacking, narrative=single-column, task=grid, confidence=layered, spatial=hub-spoke) | AD must RESPECT natural axis preferences; axis serves the org-density pair |
| **OD-F-001** | Conversational width variation (Q 60%, A 100%) creates TIDAL rhythm | AD must preserve width relationships in conversational axis layouts |
| **OD-F-002** | Fractal nesting via follow-ups (8px top-level, 6px nested) | AD axis must allow nested conversational depth without breaking fractal |
| **OD-F-003** | Q&A as natural PULSE generator | AD must not flatten Q/A into uniform-width columns |
| **OD-F-004** | Chapter dividers as breathing zones (R3-048 Density Debt) | AD axis layouts must include spacing between dense sections |
| **OD-F-007** | Mode-transition breathing (48px+ whitespace) between organizational modes | AD must accommodate mode transitions when layout contains multiple org patterns |
| **OD-F-AP-001** | 2px border epidemic (108 CSS decls, 1,619 computed instances) | AD MUST NOT introduce 2px borders. Enforce 3-category border system |

### Findings AD SHOULD Reference

| Finding | How It Helps AD |
|---------|-----------------|
| **OD-F-006** (Meta-doc as purest test) | Use meta-doc content as axis layout calibration test |
| **OD-F-008** (Compound creative) | Consider creative techniques as groups, not individually |
| **OD-F-009** (Narrative CRESCENDO) | Axis for narrative must support progressive vertical flow |
| **OD-F-010** (Type size = density) | Preserve typography-density correlation in layout |
| **OD-F-011** (Tension wayfinding) | Accommodate compact wayfinding without consuming content width |
| **OD-F-012** (Code absence) | Narrative layouts should not force early code visibility |
| **OD-F-013** (Decision climax) | Accommodate wide decision matrices at climax positions |
| **OD-F-PR-001** (External research) | Commission bespoke research per exploration hypothesis |
| **3-dialect gap** | Establish conventions FIRST, then iterate ALL explorations uniformly |

===============================================================================
## THE TRANSITIVE CHAIN (CRITICAL)
===============================================================================

**OD-F-005 (organization IS density) + DD-F-012 (density implies axis) =
organizational pattern implies axis preference. AD MUST consume this transitive
relationship.**

The chain in full:

```
Organizational Pattern (OD-F-005)
       ↓  [organization IS density]
Density Pattern (DD-F-001 through DD-F-005)
       ↓  [density implies axis — DD-F-012]
Axis Preference (OD-F-FL-001)
       ↓  [axis serves the unified phenomenon]
AD Geometry Decision
```

When AD selects axis geometry, it is simultaneously choosing an organizational-
density configuration. The three CANNOT be separated. **AD's job is NOT to pick
axes in isolation. It is to validate that specific axis geometries serve the
unified org-density phenomenon.**

===============================================================================
## SOUL PIECES (5 Visual — No New Cognitive Discovered)
===============================================================================

### Visual Soul Pieces (From Stage 1 — Enforced)

| # | Soul Piece | What It Means | AD Verification |
|---|------------|---------------|-----------------|
| 1 | Sharp Edges | border-radius: 0 everywhere | Check all containers, no exceptions |
| 2 | Archivist Serif | Serif italic for wisdom | Check Essence/CoreAbstraction callouts |
| 3 | Family DNA | 2-zone + 4px left for callouts | Check all callout components |
| 4 | No Shadows | box-shadow: none | Check all elements, solid offsets only |
| 5 | Squares Signal | Square shapes for procedures | Check step indicators |

### No Cognitive Soul Pieces Discovered by OD

OD found none despite explicit mandate. The 5 visual soul pieces remain complete.
AD may discover spatial soul pieces (how information is POSITIONED). If found,
document in SOUL-DISCOVERIES.md. **Soul compliance is NOT optional.** OD achieved
100% across 3,479+ elements. AD must match or exceed.

===============================================================================
## QUALITY BAR
===============================================================================

| Metric | OD Achieved | AD Must Match or Exceed |
|--------|-------------|-------------------------|
| Average score | ~34/40 (OD-001 highest at ~35) | >=32/40 for INCLUDE |
| Soul compliance | 100% (0 violations across 3,479+ elements) | 100% required |
| Anti-pattern violations | 0 (after fix execution, commit f5357a7) | 0 tolerance |
| Research application rate | ~71% (R-1), ~85% (EXT-*) | >=80% target for R-4 |
| INCLUDE threshold | 6/6 all INCLUDE | Must score >=32 for INCLUDE |
| DD-F-006 fractal compliance | 100% (all 6 ODs, 4 scales) | 100% (ALL AD explorations) |
| DD-F-016 border consistency | Initially VIOLATED (2px epidemic), then fixed | Zero 2px border introductions |

**Quality is not optional.** AD explorations scoring <32 are DOCUMENTED, not INCLUDED.

===============================================================================
## PRIMARY RESEARCH FOR AD
===============================================================================

| Research | Priority | Why | Location |
|----------|----------|-----|----------|
| R-4 Axis Innovations | ★★★ PRIMARY | 192 findings on spatial layout, axis geometry, positioning | `provenance/original-research/R4-AXIS-INNOVATIONS.md` |
| R-2 Creative Layouts | ★★ MANDATORY EVALUATION | **27 findings at 0% consumption by OD. AD must evaluate applicability** | `provenance/original-research/R2-CREATIVE-LAYOUTS.md` |
| R-5 Combination Theory | ★ Still relevant | Component sequencing applies to axis arrangement | `provenance/original-research/R5-COMBINATION-THEORY.md` |
| R-3 Density Dimensions | ★ Still relevant | Density-axis relationship from DD | `provenance/original-research/R3-DENSITY-DIMENSIONS.md` |
| R-1 Documentation Patterns | Reference | Already consumed by OD at 71% | `provenance/original-research/R1-DOCUMENTATION-PATTERNS.md` |

**R-4 is AD's primary research source** like R-3 was DD's and R-1 was OD's.
Expected application rate: >=80% of applicable R-4 findings.

### Research Consumption Gaps

**R-2 Creative Layouts has 27 findings at 0% consumption by OD.** AD must
explicitly evaluate R-2 applicability before building. Do not repeat OD's oversight.

**OD's research insight:** Bespoke research (EXT-*) achieved ~85% consumption vs
pre-existing (R-1) at ~71%. AD should commission bespoke research per exploration
AND evaluate existing streams (especially R-2) for applicability.

===============================================================================
## OD ITERATION LESSONS
===============================================================================

### 1. Highest-Scoring OD: OD-001 Conversational (~35/40)

Scored highest because: full creative enrichment (13 external resources), two
iterations (v1: 34 → v2: 35.5), strongest Gestalt spacing, scroll-witness sidebar.
**AD Lesson:** Commission bespoke research and plan for iteration.

### 2. Lowest-Scoring OD: OD-002 Narrative (~33/40)

Scored lowest because: ZERO external research enrichment, no creative pipeline.
**AD Lesson:** Every exploration needs bespoke research. OD-002 (0 external) = 33;
OD-001 (13 external) = 35. The correlation is clear.

### 3. Three-Dialect Quality Gap

- **Dialect A: Polished** (OD-001/002) -- dark code blocks, full-bleed headers
- **Dialect B: Functional** (OD-003/004/005) -- lighter code blocks, more thin borders
- **Dialect C: Editorial** (OD-006) -- no code blocks, heaviest typography

Gap is a TEMPORAL ARTIFACT. AD must establish conventions FIRST, then build ALL
explorations to same standard, then iterate ALL through enrichment loop.

### 4. Five Quality Assessment Recommendations

1. Commission bespoke research for every AD exploration -- not just some
2. Establish conventions before building -- code block theme, header style, type scale
3. Apply 3-category border system -- Cat 1 structural (3px+), Cat 2 separators, Cat 3 micro
4. Plan for at least one iteration per AD -- re-audit and refine
5. Run full Perceptual Depth Audit -- soul compliance is non-negotiable

### 5. Iteration Guidance

DD re-audit: +1.8 avg. OD-001 v1→v2: +1.5 from research. Iteration IS quality.
- Build draft → audit → enrich → rebuild. First-draft ~32-33; target 35+ after.
- Use meta-doc content (OD-F-006) as calibration. Plan AD-006 as crown jewel.

===============================================================================
## MISTAKES TO AVOID (7 Items)
===============================================================================

These are the mistakes OD made or narrowly avoided. AD must not repeat them.

### 1. Missing the Transitive Chain (org → density → axis)

OD-F-005 says organization IS density. DD-F-012 says density implies axis. The
transitive conclusion: organizational pattern implies axis preference. If AD
selects axis geometry without consulting the transitive chain, it will produce
axis layouts that fight the org-density phenomenon. The chain is:
org pattern → density pattern → axis → AD geometry.

### 2. Ignoring the 3-Dialect Quality Variation

OD produced Polished, Functional, and Editorial quality tiers because conventions
were not established before building. AD must define code block theme, header
layout, type scale, and border system BEFORE building AD-001. All 6 AD
explorations must match the same quality dialect.

### 3. Skipping R-2 Evaluation

OD consumed R-1 at 71% but R-2 at 0%. Twenty-seven creative layout findings
went completely unconsumed. R-2 may contain findings directly applicable to
axis geometry. AD must explicitly evaluate R-2 before building and document
which R-2 findings are applicable vs not-applicable with rationale.

### 4. Not Applying Bespoke Research (Higher Application Rate Than Pre-Existing)

Bespoke research (EXT-*) achieved ~85% consumption vs pre-existing (R-1) at
~71%. The insight: targeted research created for a specific exploration's
hypothesis is more easily consumed than broad pre-existing research. AD should
commission bespoke axis-geometry research for each AD exploration's specific
hypothesis, not rely solely on R-4's 192 findings.

### 5. Building Provenance After Instead of During

**Mode C provenance guidance:** Create provenance INCREMENTALLY during build.
DO NOT defer to a post-build session. Write OD-outbound-findings entries as you
build each AD exploration. When you discover something during AD-001, write the
AD-F-### entry immediately. Deferred provenance loses discovery context and
forces reconstruction from memory.

### 6. Ignoring Anti-Patterns (2px Border Epidemic)

The #1 systemic finding from OD's 17-agent adversarial audit was the 2px border
epidemic: 108 CSS declarations generating 1,619 computed instances. This was not
caught during building -- it required a dedicated multi-agent audit. AD must:
- Use the 3-category border system from the start
- Self-audit border declarations during building (not after)
- Zero 2px structural borders in Cat 1 (callouts, frames)

### 7. Treating Soul Compliance as Optional

OD achieved 100% soul compliance, but only because dedicated visual audit
verified every exploration. Soul violations are not "fix later" items -- they
invalidate the exploration. AD must verify soul compliance DURING building:
- border-radius: 0 in every element
- box-shadow: none everywhere
- Serif for wisdom, sans-serif for structure
- 4px left border + 2-zone for all callouts
- Square markers for procedures

===============================================================================
## AD'S RESPONSIBILITIES TO THE CHAIN
===============================================================================

### Files AD Must Create

```
□ provenance/stage-4-axis-ad/STAGE-HEADER.md
  - Complete (update from placeholder)
  - Must include "The Story", consumed/produced tables, key decisions

□ provenance/stage-4-axis-ad/AD-SYNTHESIS.md
  - Summary of what AD discovered
  - Cross-AD patterns and insights

□ provenance/stage-4-axis-ad/AD-RESEARCH-GATE.md
  - Finalized with APPLIED/NOT status for each R-4 finding
  - Must also include R-2 evaluation results
  - Shows research application rate

□ provenance/stage-4-axis-ad/AD-outbound-findings.md
  - AD-F-### for CD and Migration
  - Format matches OD-outbound-findings.md

□ provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md
  - CD reads this FIRST at Phase 0
  - Format matches this file

□ provenance/stage-4-axis-ad/CLAUDE.md
  - Updated from placeholder
  - 5-section structure per governance standard
```

### Files AD Must Update

```
□ DESIGN-SYSTEM/patterns/axis-patterns.md
  - With provenance headers per pattern
  - Each pattern traces to research + exploration

□ DESIGN-SYSTEM/BACKBONE.md
  - Stage 4 section (from PENDING to COMPLETE)
  - Update causal chain diagram

□ provenance/PIPELINE-MANIFEST.md
  - Add AD findings (AD-F-###)
  - Update R-4 application status
  - Update R-2 evaluation results

□ provenance/RESEARCH-ACTIVE.md
  - Update AD application rates
  - Mark R-4 findings as APPLIED
  - Document R-2 evaluation outcome

□ checkpoints/SOUL-DISCOVERIES.md
  - IF new spatial soul pieces found
  - Add new soul pieces with discovery context

□ explorations/axis/CLAUDE.md
  - Update with AD scores
  - Mark explorations complete

□ explorations/CLAUDE.md
  - Update AD status (⏳ → ✅)

□ provenance/CLAUDE.md
  - Update Stage 4 status
```

### Verification AD Must Pass

```
□ All 6 AD explorations created and scored
□ All score >=32 for INCLUDE (or justified DOCUMENT)
□ All 5 visual soul pieces verified across all ADs
□ DD-F-006 (fractal) applied to all ADs
□ OD-F-005 (org IS density) respected in all axis decisions
□ OD-F-FL-001 (org implies axis) applied -- each AD paired with correct org-density
□ Transitive chain (org → density → axis) documented per AD
□ No 2px structural border violations (Cat 1 = 3px+)
□ No traffic-light violations
□ AD-F-### findings documented
□ Handoff to CD created
□ Research application rate >=80% (R-4)
□ R-2 evaluation documented (with applicability decisions)
□ All checkpoint files updated
□ Mode-transition breathing (OD-F-007) applied where layouts mix org modes
```

===============================================================================
## OD-TO-AXIS PAIRING (MANDATORY)
===============================================================================

Based on OD-F-FL-001 (organizational patterns imply axis preferences) and the
AD exploration plan from STAGE-HEADER.md:

| OD Pattern | Density | Natural Axis | AD Exploration | Rationale |
|------------|---------|--------------|----------------|-----------|
| CONVERSATIONAL (PULSE) | PULSE + TIDAL | Vertical stacking with width variation | AD-001 Z-Pattern | Z-pattern eye movement pairs with Q&A width alternation; reader scans left-right across varied widths |
| NARRATIVE (CRESCENDO) | CRESCENDO | Single-column vertical flow | AD-002 F-Pattern | F-pattern scanning follows progressive narrative buildup; header→body→code mirrors F-shaped attention |
| TASK-BASED (ISLANDS) | ISLANDS + BOOKENDS | Grid/offset positioning | AD-003 Bento Grid | Bento grid creates discrete task containers; each grid cell is an island with independent density |
| CONFIDENCE (GEOLOGICAL) | GEOLOGICAL + CRESCENDO | Layered vertical with horizontal comparison | AD-004 Spiral Reveal | Spiral reveal progressively discloses confidence layers; geological strata spiral inward from established to speculative |
| SPATIAL (WAVE) | WAVE + ISLANDS | Hub-spoke radial or CSS Grid named areas | AD-005 Axis Choreography | Axis choreography manages hub-spoke transitions; choreographed movement between sparse hub and dense spokes |
| CREATIVE/EMERGENT (ALL) | FRACTAL primary | Adaptive -- serves unified phenomenon | AD-006 Creative | Creative synthesis explores compound axis techniques; meta-axis document using all 5 prior AD patterns |

**Note:** All ADs must apply DD-F-006 (FRACTAL) and respect OD-F-005 (org IS density).

===============================================================================
## DD FINDINGS CARRIED FORWARD TO AD
===============================================================================

| DD-F-### | Finding | AD Responsibility |
|----------|---------|-------------------|
| DD-F-006 | FRACTAL at all scales | ALL AD explorations must apply fractal self-similarity |
| DD-F-007 | Consistency beats variety | Repeat axis patterns, don't vary arbitrarily |
| DD-F-010 | Org must serve density | ELEVATED by OD-F-005: org IS density |
| DD-F-012 | Density implies axis | CORE AD CONSTRAINT: axis SERVES density |
| DD-F-013 | Component density tolerance | Some components compress, some need space |
| DD-F-015 | Traffic-light anti-pattern | No green+red adjacent callouts |
| DD-F-016 | 4px border standard | No inconsistent borders (OD violated this) |

===============================================================================
## MODE C PROVENANCE GUIDANCE
===============================================================================

**Create provenance INCREMENTALLY during build. DO NOT defer to post-build session.**

- Discover something during AD-001 → write AD-F-### entry IMMEDIATELY
- Apply a research finding → update RESEARCH-ACTIVE.md IMMEDIATELY
- Verify soul compliance → document the result IMMEDIATELY

OD's deferred provenance required a multi-agent deep-dive team to resolve
ambiguities (e.g., OD-F-005 collision). Incremental provenance prevents this.
**Rule:** If you can't cite the provenance for a decision, stop and write it down.

===============================================================================
## PROVENANCE-CHECKLIST-TEMPLATE
===============================================================================

Reusable binary checklist for ALL future stages (AD, CD, Migration).
Before marking ANY stage COMPLETE, every item must be checked:

```
## PROVENANCE-CHECKLIST-TEMPLATE
Before marking ANY stage COMPLETE:
- [ ] outbound-findings EXISTS with >=10 findings
- [ ] HANDOFF EXISTS with acknowledgment protocol
- [ ] SYNTHESIS EXISTS with consumption/production tables
- [ ] STAGE-HEADER says COMPLETE in YAML + heading
- [ ] PIPELINE-MANIFEST updated with stage findings + lifecycle counts
- [ ] BACKBONE updated with past-tense stage entry
- [ ] PATTERN-INDEX updated with VALIDATED patterns
- [ ] SOUL-DISCOVERIES has stage determination
- [ ] FINDINGS-INDEX has stage entries
- [ ] Fresh agent can answer 5 J-03 questions from provenance alone
```

**J-03 Test (Fresh-Eyes Verification):** A fresh agent with NO prior context
should be able to answer these 5 questions using ONLY the provenance chain:

1. What did this stage discover? (Answer from outbound-findings)
2. What constraints did it inherit? (Answer from HANDOFF-[prev]-TO-[this])
3. What constraints does it pass forward? (Answer from HANDOFF-[this]-TO-[next])
4. What research was consumed and at what rate? (Answer from RESEARCH-GATE)
5. What quality bar was achieved? (Answer from SYNTHESIS or CHECKPOINT)

If any question cannot be answered, the provenance chain is INCOMPLETE.

===============================================================================
