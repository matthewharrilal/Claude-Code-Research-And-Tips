# Tension-Composition Skill Enrichment Report

**Date:** 2026-02-13
**Skill File:** `~/.claude/skills/tension-composition/SKILL.md`
**Total Changes:** 3 major additions, 1 table expansion, 1 appendix expansion
**Lines Added:** ~250 lines
**New Sections:** 2 (Phase 4.0, Perceptual Cost Assessment)

---

## Executive Summary

The tension-composition skill has been enriched with **perceptual guardrails** and **perceptual cost scoring** to prevent metaphor-driven visual compromise. Research from 15 tension-test layouts + 6 CD explorations + editorial design standards revealed that metaphors encode spatial biases (e.g., "geological core" → narrow container, "manuscript codex" → wasted margins). These biases can conflict with perceptual comfort even when the metaphor is structurally rich.

**Key Principle:** The metaphor shapes experience; the guardrails prevent it from breaking experience. Compression IS powerful — the geological descent should still feel geological. But the floors are where perceptual comfort begins; the metaphor operates in the space ABOVE the floors.

**Two Approaches Applied:**

1. **Perceptual Guardrails (Phase 4.0)** — Non-negotiable minimums that no metaphor can override
2. **Perceptual Cost Assessment (Phase 3.5F)** — Scoring dimension added to metaphor evaluation to predict guardrail violations

---

## Change 1: Phase 4.0 — Perceptual Guardrails (NEW SECTION)

**Location:** Inserted immediately before Step 4.1 in Phase 4 (Compositional Layout Generation)
**Purpose:** Establish absolute minimums for content proportion, typographic spacing, and compression ratios
**Lines Added:** ~80 lines

### What Was Added

A complete new phase (Phase 4.0) that defines NON-NEGOTIABLE perceptual floors across three categories:

#### Content Proportion Guardrails (at 1440px)

| Guardrail | Value | Source |
|---|---|---|
| Min content-to-viewport ratio | **65%** (940px) | Editorial design research, CD convention analysis |
| Max content-to-viewport ratio | **80%** (1150px) | CD convention (1100px = 76.4%), editorial standards |
| Min horizontal padding (outer) | **32px per side** | Absolute floor even at maximum compression |
| Min text column width | **220px** | Bringhurst 45-character minimum |
| Optimal line length | **45-80 characters** | Bringhurst canonical + WCAG maximum |

**Rationale:** The geological core sample used 900px container (62.5% viewport) + 36-64px padding = effective content width as low as 772px (53.6% viewport utilization). This violated the editorial principle that content should occupy 55-88% of viewport. The new guardrail sets **65% minimum** (940px) to prevent narrow-strip layouts.

#### Typographic Spacing Guardrails

| Guardrail | Value | Source |
|---|---|---|
| Min label-to-heading gap | **16px** | Perceptual blind spot research: triple-shift (family + size + case) needs buffer |
| Min heading-to-body gap | **16px** | Editorial standard for H1/H2 levels |
| Min body line-height | **1.5** | WCAG 2.1 SC 1.4.12 accessibility floor |
| Min section breathing zone | **48px** | Magazine quality floor between major sections |

**Rationale:** The geological core used 12px label-to-heading gap. Research shows different font families + sizes + cases (mono caps label → serif mixed heading) need **minimum 16px** to prevent typographic voice collision. The 8px gap used in CD explorations was identified as too tight for cross-family pairings.

#### Compression and Density Guardrails

| Guardrail | Value | Source |
|---|---|---|
| Compression ratio ceiling | **Deepest padding >= 40% of shallowest padding** | Metaphor trap analysis: geological core 36/80 = 45% passes, but 16/80 = 20% fails |
| Characters per line | **45-80** | Bringhurst + WCAG |

**Rationale:** The geological core's bedrock stratum had 16px padding vs 80px topsoil = 5:1 compression ratio (20%). This was perceptually cramped at 768px. The new ceiling enforces **maximum 2.5:1 compression** (40% minimum). If topsoil = 80px, bedrock cannot go below 32px.

### Critical Principle Encoded

**Priority Order When Metaphor Conflicts with Guardrails:**

1. Readability floors (line-height 1.5, CPL max 80, container min 940px) — NEVER compromise
2. Breathing zones (section spacing min 48px) — NEVER compromise
3. Content width (min 65% of viewport) — NEVER compromise
4. Metaphor fidelity — Adjust to meet floors
5. Aesthetic preference — Last priority

**If a metaphor demands values below priorities 1-3, modify the metaphor's CSS expression, NOT the floors.**

---

## Change 2: Phase 3.5F — Perceptual Cost Assessment (NEW SCORING DIMENSION)

**Location:** Added after "E. Perceptual Risk Assessment" in Step 3.5 (Test Candidates)
**Purpose:** Predict whether a metaphor's structural isomorphisms encourage guardrail violations
**Lines Added:** ~60 lines

### What Was Added

A new scoring dimension (F) that evaluates whether the metaphor's CONCEPT encourages spatial patterns that violate the guardrails, independent of execution quality.

#### Five Cost Questions

| Cost Question | +1 Cost If YES |
|---|---|
| Does this mapping encourage padding below 32px or compression ratio worse than 2.5:1? | Compression below floors |
| Does this mapping encourage container width below 940px (65% at 1440px)? | Container width below minimum |
| Does this mapping encourage 4+ identical items in a grid with no hierarchy? | Uniform element grids |
| Does this mapping conceptualize transitions as vertical gaps rather than state changes? | Transitions as empty space |
| Does this mapping encourage metaphor vocabulary in visible text labels? | Explicit labels over structure |

**Perceptual Cost Score = sum (0-5+)**

| Score | Rating | Action |
|---|---|---|
| 0 | LOW COST | Proceed as designed |
| 1-2 | MODERATE COST | Add specific builder warnings for flagged risks |
| 3+ | HIGH COST | Consider alternative metaphor OR modify isomorphism mapping to avoid worst costs |

### Example Applied to Geological Core

| Isomorphism | Cost Question | Cost |
|---|---|---|
| Cylindrical shape → narrow container | Container width below 940px? | **+1** |
| Compression under pressure → decreasing padding with depth | Compression below floors? | **+1** (if bedrock goes to 16px) |
| Strata layers → horizontal sections | Transitions as empty space? | 0 (layers are state changes) |
| Mineral composition → data grids | Uniform grids? | 0 (2-column acceptable) |
| Depth markers → section labels | Explicit labels? | 0 (depth shown structurally via color) |

**Perceptual Cost Score: 2 (MODERATE)**

**Builder Warnings Generated:**
- Cap minimum container width at 940px (modify cylindrical metaphor to use internal padding rather than narrow width)
- Cap minimum padding at 32px even at bedrock (use background darkening to signal depth, not extreme compression)

### Integration with Perceptual Risk

Perceptual Cost complements Perceptual Risk but measures different properties:

- **Perceptual Risk** (existing) measures execution-layer problems (dead zones, over-labeling, monotony, responsive breakage)
- **Perceptual Cost** (new) measures guardrail violations the metaphor's CONCEPT encourages

A metaphor with LOW Risk + HIGH Cost = "conceptually problematic but could execute well if warnings are followed."
A metaphor with HIGH Risk + LOW Cost = "conceptually sound but execution-fragile."

---

## Change 3: Responsive Degradation Table Expansion

**Location:** Step 3.5, Responsive Degradation Check
**Change Type:** Table column addition
**Lines Added:** 1 new column + updated rows

### What Changed

Added **"1440px Utilization Risk"** column to the existing responsive degradation table. The original table only assessed 768px mobile breakpoint risk. Research showed metaphors also have **desktop utilization risk** — they conceptually encourage narrow containers that waste horizontal space at wide viewports.

#### Updated Table (Partial)

| Metaphor Type | Responsive Story | 768px Risk | **1440px Utilization Risk** |
|---|---|---|---|
| Geological layers | Narrower core sample | LOW | **MODERATE — cylindrical shape biases toward narrow containers** |
| Floor plan / rooms | Narrow building, rooms stack | LOW | LOW |
| Elevation map | Narrower contour map | LOW | LOW |
| Codex / manuscript | Narrower page margins | LOW | **MODERATE — page margins may waste desktop space** |
| Archival vault | Narrower filing drawers | LOW | **MODERATE — vault density may over-compress** |

**Rationale:** The geological core metaphor naturally suggests a narrow cylindrical form. This conceptual bias led to 900px container = 62.5% viewport usage, violating the 65% minimum. Desktop utilization risk flags metaphors with this bias so builder warnings can address it proactively.

---

## Change 4: Builder Guardrail Appendix Expansion

**Location:** Appendix R6 (Builder Instruction Warnings)
**Change Type:** New subsection added
**Lines Added:** ~50 lines

### What Was Added

A **"Builder Guardrail Appendix (Concrete Values)"** subsection that consolidates all Phase 4.0 guardrails into a single reference block for builder agents.

#### Structure

```
CONTAINER PROPORTION:
- Container max-width at 1440px: min 940px, max 1150px (65-80% of viewport)
- Horizontal padding: min 32px at any depth level
- Compression ratio: deepest padding / shallowest padding >= 0.40

TYPOGRAPHIC SPACING:
- Label-to-heading gap: min 16px
- Heading-to-body gap: min 16px
- Body line-height: min 1.5
- Characters per line: 45-80

SECTION SPACING:
- Section breathing zone: min 48px between major sections
- Component-to-component: min 24px
- Inter-region spacing: min 64px

CRITICAL PRINCIPLE:
If a metaphor demands values below these floors, the implementation has failed — not the metaphor.
```

#### Guardrail Enforcement Examples

Added concrete corrections for known problematic metaphors:

- **Geological Core Sample:** Use internal padding variation (80px → 64px → 48px → 40px → 36px) instead of narrow container. Keep container at 960px minimum.
- **Manuscript Codex:** Use asymmetric padding (larger left, smaller right) to suggest marginalia WITHOUT wasting 40%+ horizontal space.
- **Construction Site:** Limit dark zones to headers and accent sections; keep body content zones light even when "structural" metaphorically.

**Purpose:** Gives builder agents specific remediation strategies when the metaphor conceptually conflicts with guardrails.

---

## Research Sources Integration

### Perceptual Blind Spots Analysis (PA-NEW-A through PA-NEW-T)

**Key Findings Applied:**

1. **PA-NEW-A (Content-to-viewport proportion):** Encoded as 65-80% guardrail
2. **PA-NEW-B (Typographic voice collision):** Encoded as 16px minimum label-to-heading gap
3. **PA-NEW-C/D (Metaphor-driven compromise):** Encoded as Perceptual Cost Assessment (Phase 3.5F)
4. **PA-NEW-E (Desktop utilization):** Encoded as 1440px Utilization Risk column in responsive table
5. **PA-NEW-Q (Header-to-content proportion):** Informed section breathing zone 48px minimum

### Metaphor Trap Mapping (7 Trap Categories)

**Key Findings Applied:**

1. **COMPRESSION TRAPS:** Encoded as compression ratio ceiling (40% minimum)
2. **WIDTH TRAPS:** Encoded as 940px minimum container width
3. **LABEL TRAPS:** Encoded as Perceptual Cost question 5 (explicit labels)
4. **DEAD ZONE TRAPS:** Encoded as Perceptual Cost question 4 (transitions as empty space)
5. **MONOTONY TRAPS:** Encoded as Perceptual Cost question 3 (uniform grids)

**Fine Lines Extracted:**

- **Compression:** GOOD = 32px+ min padding, RISKY = 24px, BROKEN = 16px at narrow viewports → **Encoded as 32px floor**
- **Container Width:** EXCELLENT = 960px+ (66.7%+), ACCEPTABLE = 900px (62.5%), WASTEFUL = <880px (61%) → **Encoded as 940px floor (65%)**
- **Section Spacing:** GOOD = 24px max breathing zones, RISKY = 48px, BROKEN = 96px+ gaps → **Encoded as 48px minimum, with note that breathing zones conceptualized as EMPTY SPACE create dead zones**

### Editorial Design Principles (Guardrail Values Table)

**Key Standards Adopted:**

1. **Content-to-viewport ratio:** 55-88% editorial standard → **Tightened to 65-80%** (KortAI sweet spot)
2. **Label-to-heading gap:** 12px minimum for cross-family, 16-24px recommended for triple-shift → **Adopted 16px minimum**
3. **Line length:** 45-75 characters Bringhurst, 80 WCAG → **Adopted 45-80 range**
4. **Body line-height:** 1.5 WCAG + editorial → **Adopted 1.5 minimum**
5. **Section breathing:** 48-80px magazine standard → **Adopted 48px minimum**
6. **Compression ratio:** Max 1:6 editorial → **Tightened to max 2.5:1 (40% floor)** based on geological core evidence

### CD Convention Extraction (Width and Spacing Comparison)

**Key Data Applied:**

1. **CD Container Width:** 1100px (100% consistency across 6 files) = 76.4% viewport → **Informed 65-80% guardrail**
2. **CD Horizontal Padding:** 16-32px desktop → **Adopted 32px as absolute floor**
3. **CD Label-to-heading:** 8px (var(--space-2)) → **Research showed this is too tight for cross-family; raised to 16px**
4. **Geological Core Comparison:** 900px container + 36-64px padding = 53.6-58% effective utilization → **Informed minimum 65% rule**

**Hybrid Recommendations Adopted:**

- Container max-width: **Rejected Geo's 900px**, kept closer to CD's 1100px but set floor at 940px (65%)
- Horizontal padding: **Adopted Geo's graduated pattern** (36-64px) but **enforced 32px absolute floor**
- Label-to-heading gap: **Adopted Geo's 12px**, **raised to 16px** per perceptual research
- Section breathing: **Adopted middle ground** between CD (24-64px CRESCENDO) and Geo (32-160px graduated) = **48px minimum**

---

## Impact Assessment

### What This Prevents

1. **Geological Core Sample (900px container):** Would now FAIL perceptual cost assessment (+1 for container width below minimum). Builder warning would force container to 960px minimum.

2. **Manuscript Codex (820px container, 17% right margin):** Would now FAIL (+1 for container width). Builder warning would modify to asymmetric padding within wider container.

3. **Construction Site (excessive dark zones):** Perceptual cost assessment doesn't directly catch this, but **Perceptual Risk assessment** (existing R1) already flags "dark zone trap" in Expression Mode question.

4. **Apprentice Curriculum (12px label-to-heading):** Would now FAIL typographic spacing guardrail (16px minimum). Builder would auto-correct to 16px.

5. **City Zoning Map (labeled transitions):** Already caught by Perceptual Risk "Expression Mode" + Perceptual Cost question 5 (explicit labels). Double protection.

### What This Preserves

The metaphor ideology is **preserved**. Compression IS powerful. A geological descent should still feel geological. But:

- Compression is expressed through **background darkening and font weight** more than extreme padding reduction
- Cylindrical narrowness is expressed through **internal padding asymmetry** rather than absolute container width
- Page margins are **suggested visually** rather than implemented as wasted horizontal space

**The metaphor shapes experience; the guardrails prevent it from breaking experience.**

---

## Validation Against Test Data

### Geological Core Sample (Boris metaphor-2)

**Before Enrichment:**
- Container: 900px (62.5% viewport)
- Padding: 80px → 64px → 48px → 40px → 36px (compression ratio 36/80 = 45%, acceptable)
- Label-to-heading: 12px
- **Audit verdict:** YES at both viewports, strongest metaphor execution

**After Enrichment (Predicted Changes):**
- Container: 960px minimum (66.7% viewport) — **+60px width**
- Padding: 80px → 64px → 48px → 40px → **36px** (compression ratio maintains 45%, still above 40% floor)
- Label-to-heading: **16px** — **+4px gap**
- **Predicted verdict:** STRONG PASS — metaphor ideology preserved, perceptual comfort improved

**Perceptual Cost Score:** 2 (MODERATE) — flags container width + compression risk, but compression is borderline acceptable (45% > 40% floor)

### Manuscript Codex (Boris metaphor-1)

**Before Enrichment:**
- Container: 820px (56.9% viewport)
- Right margin: 140px empty (17% of container)
- **Audit verdict:** YES WITH RESERVATIONS (dead zones, margin waste)

**After Enrichment (Predicted Changes):**
- Container: 960px minimum (66.7% viewport) — **+140px width**
- Asymmetric padding: 64px left (suggests marginalia) / 32px right (minimum floor) instead of empty right margin
- **Predicted verdict:** PASS — margin metaphor expressed without wasting space

**Perceptual Cost Score:** 3 (HIGH) — flags container width + margin waste + potential dead zones

### Elevation Map (Playbook metaphor-4, BEST OVERALL)

**Before Enrichment:**
- Container: 960px (66.7% viewport)
- Padding: generous (48-64px)
- Graduated backgrounds: 5 zones (implicit metaphor)
- **Audit verdict:** STRONG PASS at both viewports

**After Enrichment (Predicted Changes):**
- **No changes required** — already meets all guardrails
- Container: 960px (66.7% > 65% minimum)
- Padding: 48-64px (all above 32px floor)
- Section gaps: implicit via background shifts (no dead zones)

**Perceptual Cost Score:** 0 (LOW) — zero guardrail violation risk

**Validation:** The BEST layout in the test data already conforms to all guardrails. The guardrails formalize what success looks like.

---

## Composite Verdict Formula (Updated)

The Phase 3.5 composite verdict now integrates **six dimensions** instead of five:

**Existing (Pre-Enrichment):**
1. **A. Tension Resolution** (YES/PARTIAL/NO per tension)
2. **B. Structural Isomorphism Count** (6+ ideal, 4-5 strong, 2-3 thin, 0-1 reject)
3. **C. Content Resonance** (Nominal + Structural, weighted 1:2)
4. **D. Mechanism Feasibility** (100% = all properties expressible in KortAI CSS)
5. **E. Perceptual Risk Assessment** (0-4 score: 0-1 LOW, 1.5-2 MODERATE, 2.5-3 HIGH, 3.5-4 EXTREME)

**New (Post-Enrichment):**
6. **F. Perceptual Cost Assessment** (0-5+ score: 0 LOW, 1-2 MODERATE, 3+ HIGH)

### Updated Composite Verdict

**PROCEED:**
- Resolution >= N-1
- Isomorphism >= 4
- Structural Resonance >= MEDIUM
- Feasibility = 100%
- Perceptual Risk <= 2
- **Perceptual Cost <= 2**

**CONSIDER:**
- Resolution >= N-2
- Isomorphism >= 3
- Structural Resonance >= LOW
- Feasibility >= 80%
- Perceptual Risk <= 3
- **Perceptual Cost <= 3**

**REJECT:**
- Any other combination
- OR Perceptual Risk = 4
- OR **Perceptual Cost >= 4** (new rejection criterion)

---

## File Size Impact

**Original SKILL.md:** ~1050 lines
**New SKILL.md:** ~1300 lines
**Growth:** +250 lines (+24%)

**Structure:**
- Phase 4.0 (new): ~80 lines
- Phase 3.5F (new): ~60 lines
- Responsive table expansion: ~15 lines
- Builder guardrail appendix: ~50 lines
- Contextual edits: ~45 lines

---

## Next Steps for Testing

1. **Run pipeline on Geological Core content** with enriched skill → verify container forced to 960px minimum
2. **Run pipeline on Boris extraction** with enriched skill → compare metaphor selection against original test
3. **Test Perceptual Cost scoring** on all 15 test metaphors → validate cost predictions match audit findings
4. **Measure builder compliance** with guardrails when given metaphor + warnings

---

## Key Principle Restated

**The metaphor is the message; the guardrails are where the message conflicts with the medium.**

Compression IS powerful — the geological descent should still feel geological. The metaphor's ideology is preserved. But the floors are where perceptual comfort begins; the metaphor operates in the space ABOVE the floors, never below them.

A "geological core" can use:
- Layered backgrounds (surface light → bedrock dark) ✓
- Darkening depth (graduated color shifts) ✓
- Compression gradient (80px → 64px → 48px → 40px → 36px, ratio 45%) ✓

But cannot use:
- 900px container producing <65% viewport utilization ✗
- 16px bedrock padding (20% compression ratio) ✗
- 8px label-to-heading gaps for cross-family type ✗

**The enrichment encodes this line.**

---

## Research Credits

- **Perceptual Blind Spots Analysis:** researcher-perceptual (4,240 lines, 28 proposed checks)
- **Metaphor Trap Mapping:** taxonomy agent (1,240 lines, 7 trap categories, 43 patterns)
- **Editorial Design Principles:** 2 independent agents merged (625 lines, 66+ sources)
- **CD Convention Extraction:** comparison agent (629 lines, 47 metrics)

**Total Research Input:** 6,734 lines across 4 files → **Distilled to 250 lines of guardrails and scoring**

---

**END OF REPORT**
