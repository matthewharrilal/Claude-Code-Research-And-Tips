# 03: AD Stage Context for CD

## Source Files Read
1. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` (507 lines, 28 findings)
2. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` (299 lines, 12 sections)
3. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` (358 lines, ~47 de-duplicated findings)
4. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` (234 lines, gate file)
5. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/STAGE-HEADER.md` (141 lines)
6. `explorations/axis/CLAUDE.md` (83 lines)

---

## 1. What AD Discovered

### The 6 Axis Patterns (All VALIDATED / INCLUDE)

AD explored spatial layout -- how components are POSITIONED on the page. Six explorations were built, each pairing an axis pattern with the organizational-density pairings established in OD:

| AD | Axis Pattern | Density Pairing | Org Pairing | Score | Equivalence Mechanism |
|----|-------------|-----------------|-------------|-------|----------------------|
| AD-001 | Z-Pattern | PULSE + TIDAL | Conversational | 36/40 | Temporal |
| AD-002 | F-Pattern | CRESCENDO + WAVE | Narrative Arc | 35/40 | Temporal |
| AD-003 | Bento Grid | ISLANDS + BOOKENDS | Task-Based | 37/40 | Spatial |
| AD-004 | Spiral | GEOLOGICAL + CRESCENDO | Confidence-Based | 36/40 | Proportional |
| AD-005 | Choreography | WAVE + BOOKENDS | Spatial Mapping | 35/40 | Kinetic |
| AD-006 | Compound | ALL (FRACTAL primary) | ALL | 38/40 | Gravitational + META |

**Average: 36.2/40.** Range 35-38.

### The 3-Way Unification (Central Discovery)

OD proved Organization IS Density (OD-F-005). AD extends this to: **Axis IS Organization IS Density** -- three names for one phenomenon: how content arrangement shapes attention flow. This was validated across all 6 explorations with zero contradictions. DD-F-012 was ELEVATED: axis geometry does not merely "serve" the density pattern -- axis IS the density pattern expressed spatially. The relationship is identity (equivalence), not servitude (subordination).

### 28 AD-F Findings

- **Class A (Confirming): 14 findings** -- binary, no deviation, implements/confirms research directly
- **Class B (Extending): 14 findings** -- identity extension, requires judgment, within convention bounds
- **Class C (Overwriting): 0** -- zero contradictions across all 28 findings
- **Class D (Breaking): 0** -- zero identity breaks

Key Class A findings:
- AD-F-001: Z-Pattern hero establishes axis geometry before content
- AD-F-002: Z-PULSE equivalence (Z-traversal IS PULSE)
- AD-F-003: Micro-Z grid validated at component scale (DD-F-006)
- AD-F-004: 3-way unification validated (axis, org, density are not independent)
- AD-F-009: Bento grid CONTAINS islands
- AD-F-013: Angular spiral resolves geological-radial tension
- AD-F-016: Spiral reading order ENHANCES geological layering

Key Class B findings:
- AD-F-005: Tension meter as CRESCENDO position indicator
- AD-F-011: Internal layout variation creates fractal ISLANDS
- AD-F-014: Border-weight gradient IS geological encoding
- AD-F-017: Kinetic equivalence (direction change IS density state change)
- AD-F-018: Diagonal as dual signal (density transition + axis pivot)
- AD-F-020: "Choreography" means reader attention movement, not CSS animation

---

## 2. The Crown Jewel: ATTENTION TOPOLOGY (AD-F-023)

**Severity: CRITICAL. The single most important finding of AD.**

AD-F-023 identifies the meta-equivalence that unifies all 5 equivalence mechanisms under one concept: **ATTENTION TOPOLOGY**. All mechanisms (temporal, spatial, proportional, kinetic, gravitational) are perspectives on one phenomenon: how content arrangement shapes attention flow.

- The axis IS the topology
- The density IS the traversal
- The organization IS the semantics
- Three names for one map

This provides the theoretical foundation for CD. Every combination CD builds must maintain this attention topology equivalence. A combination that breaks the equivalence is INVALID.

---

## 3. The 5 Equivalence Mechanisms

AD validated the 3-way unification through 5 distinct mechanisms:

### 1. Temporal (AD-001 Z-Pattern, AD-002 F-Pattern)
Axis creates density through scanning speed / reading time. Z-sweeps create fast-slow rhythm (PULSE); F-pattern descent creates progressive compression (CRESCENDO). Each Z-sweep cycle IS one PULSE beat. Width variation (60% Q to 100% A) IS TIDAL. Typography weight shift (Instrument Serif 600 to Inter 400) creates velocity.

### 2. Spatial (AD-003 Bento Grid)
Axis creates density through cell size / area allocation. Large grid cells = dense islands; grid gaps = sparse ocean. Size IS density IS importance. A 2x2 cell occupying 4x the area of a 1x1 cell creates a proportionally larger island. Soul constraint (sharp edges) makes size difference MORE visible.

### 3. Proportional (AD-004 Spiral)
Axis creates density through golden ratio nesting. Inner rings = denser (less space), outer rings = sparser (more space). The angular approximation (forced by soul constraint border-radius: 0) IS geological stratification. Border-weight gradient (4px/3px/1px, deliberately skipping 2px to avoid the 2px epidemic anti-pattern) IS geological depth encoding.

### 4. Kinetic (AD-005 Choreography)
Axis creates density through direction change. The act of changing axis direction IS the act of changing density state. This was the most surprising mechanism -- density is not just about content volume, timing, or space, but about the reader's attentional trajectory. The diagonal clip-path transition simultaneously signals direction change and density phase change.

### 5. Gravitational (AD-006 Compound)
Axis creates density through connection count. A hub is dense because everything points to it; spokes are sparse because they point to one thing. Density is topological (how many things point to you), not volumetric. This is relational: a hub with one sentence is denser than a spoke with three paragraphs.

**Meta-equivalence (AD-F-023): ATTENTION TOPOLOGY** unifies all 5 under one phenomenon -- how content arrangement shapes attention flow.

---

## 4. AD-F-024: Compound Is Sequential, Not Simultaneous -- MANDATORY FOR CD

**Severity: HIGH. Direct constraint for CD stage.**

Development Kitchen experiments (AD-006, Section 7) proved that multiple axis patterns within a single viewport create visual cacophony:
- Z + Spiral in one quadrant disorients
- Bento + Choreography conflicts
- All five simultaneous is illegible

**The correct compound solution:** Each section commits to ONE axis pattern; compound effect emerges from the SEQUENCE of sections through scrolling time. Compound axis is fundamentally a TEMPORAL experience -- patterns layer through scrolling, following musical structure (verse-chorus-bridge-verse per R4-081).

**CD implication:** Any combination that violates the sequential principle is INVALID. Combinations must operate through scrolling time, not within a single viewport.

---

## 5. AD-F-025: Transition Grammar Validated -- MANDATORY FOR CD

**Severity: HIGH. Structural constraint for compound and CD.**

AD-006 produced a 5x5 transition matrix classifying all 20 directed pattern transitions into three types:

| Transition Type | Count | Characteristic | Example |
|----------------|-------|----------------|---------|
| **Smooth** | 4 pairs | Same mechanism, compatible density profile | Z-to-F (both temporal), Bento-to-Choreography |
| **Bridge** | 10 pairs | Different mechanisms, require intermediary | Z-to-Bento, F-to-Spiral (need breathing space) |
| **Breathing** | 6 pairs | Most cognitively distinct, require 48px+ gap | All Spiral transitions, cross-mechanism-boundary |

**Key structural findings:**
- Choreography is the **universal bridge** (gravitational density compatible with all mechanisms)
- Spiral is the **most isolated** pattern (proportional density is most cognitively distinct)
- Every Spiral transition requires breathing (OD-F-007 minimum 48px spacing)

**CD implication:** Any combination that lacks transition grammar between zones is INVALID. CD must honor this grammar when combining patterns.

---

## 6. AD-F-028: 5-Scale Fractal Limit

**Severity: MEDIUM. Bounds the DD-F-006 model.**

DD-F-006 fractal self-similarity was verified at exactly 5 scales across all 6 AD explorations:

| Scale | What It Looks Like |
|-------|-------------------|
| 1. Navigation | Pattern echo grids, navigation landmarks, hub overviews |
| 2. Page | Sparse-to-dense section progression, hero-to-content flow |
| 3. Section | Sparse header to dense body to sparse callout (within each section) |
| 4. Component | Callout label (sparse) + body (dense); table header + data |
| 5. Character | Instrument Serif (sparse) vs Inter (dense) vs JetBrains Mono (code) |

**No 6th scale was found.** The "strategy" scale candidate collapsed into existing scales: pattern selection = navigation scale, demonstration = page scale, synthesis = section scale. The 5-scale model is complete and universal.

**CD implication:** CD should verify existing 5 scales hold under combination, NOT seek a 6th. However, HANDOFF-AD-TO-CD.md Open Question #5 asks whether combination creates a meta-combination scale -- this remains an open question for CD to answer.

---

## 7. The AD Convention Spec

**AD-CONVENTION-SPEC.md: 822 lines, 16 sections.**

AD learned from OD's quality dialect problem (3 quality dialects requiring post-hoc unification) and created the convention spec BEFORE builders started. Result: zero dialect divergence across all 6 AD explorations.

### Structure:
- **Sections 1-11:** INHERITED from OD-CONVENTION-SPEC.md (token system, locked layer, axis-layer rules, soul compliance, spacing tokens, typography, color palette, borders, code blocks, callouts, responsive breakpoints)
- **Sections 12-16:** AD-SPECIFIC (axis grid systems, axis zone tokens, responsive axis behavior, soul-compliant transitions, axis accessibility)

### CD inheritance plan:
1. CD inherits sections 1-16 from AD-CONVENTION-SPEC.md unchanged
2. CD adds sections 17-20: CD-SPECIFIC additions:
   - Section 17: Combination rules
   - Section 18: Transition grammar
   - Section 19: Component density tolerance
   - Section 20: Combination accessibility

---

## 8. The 5 Open Questions AD Posed for CD

From HANDOFF-AD-TO-CD.md, these are explicit questions CD must investigate:

### Question 1: Combination Density Tolerance
When two axis patterns combine (e.g., Z-Pattern + Bento Grid), does the combined component absorb both density patterns or require splitting? This is DD-F-013 at the combination scale.

### Question 2: Transition Grammar Scaling
AD-F-025 validated grammar for transitions within a single compound page. Does the grammar hold when transitions occur between separate combined pages?

### Question 3: Attention Topology at Combination Scale
AD-F-023 described attention topology for individual axis patterns. How do attention topologies compose when multiple patterns operate on the same page?

### Question 4: Sequential vs Parallel Combinations
AD-F-024 showed compound density is sequential. Are there combination patterns that genuinely operate in parallel (without creating cacophony)?

### Question 5: Fractal at Combination Scale
DD-F-006 confirmed at 5 scales. Does combination create a 6th scale (meta-combination) or is 5 the hard limit?

---

## 9. AD Audit Summary

The AD audit was executed by 24+ agents across 23 audit reports:
- **Total raw findings:** ~250+
- **De-duplicated actionable:** ~47
- **Soul violations found:** 5 (all planted, correctly detected and fixed)
- **Soul violations remaining:** 0
- **Systemic fixes applied:** 4 (header padding, callout label font, body line-height, callout margin)
- **Per-file fixes applied:** ~12

### Systemic issues found and fixed (template-level):
1. Header padding 48/24 instead of 64/32 (Convention Spec Section 4 violation) -- ALL 6 files
2. Callout label font-size 10px instead of 12px -- ALL 6 files
3. Body line-height 1.6 instead of 1.7 (OD gold standard) -- ALL 6 files
4. Callout bottom-only margin instead of symmetric -- ALL 6 files

### Key audit insight for CD:
Convention spec applied pre-build prevented OD's dialect problem entirely. CD MUST create CD-CONVENTION-SPEC.md (extending AD sections 1-16, adding sections 17-20) BEFORE any builder starts.

---

## 10. Soul Compliance

All 6 explorations passed with ZERO violations across all checks:
- border-radius: 0 (Soul Piece #1) -- 0 violations across 3,190 DOM elements
- box-shadow: none (Soul Piece #4) -- 0 violations (3 caught and fixed during audit)
- No filter: drop-shadow() -- 0 violations
- No 2px borders (OD-F-AP-001) -- 0 violations (1 caught and fixed during audit)
- All backgrounds opaque -- 0 violations
- Font trio correct (Instrument Serif + Inter + JetBrains Mono) -- verified after document.fonts.ready

**No 6th soul piece was discovered.** The 5-piece model remains complete.

---

## 11. Research Consumption

AD consumed 295 total citations across 6 explorations:
- R-4 (PRIMARY): 169/192 findings cited (~88% consumption rate)
- R-2: 25/27 mapped, ~18 directly applied, ~7 deferred to CD
- EXT-AXIS-* (bespoke): 33 findings across 6 domains (Z, F, B, SP, CH, X)
- OD-F: 16 citations
- DD-F: 16 citations

**CD primary research:** R-5 (Combination Theory, 39 findings). AD consumed R-5 partially in the compound context (AD-006). CD must consume R-5 fully.

**CD bespoke research needed:** EXT-CD-* should be commissioned during CD Phase 0 for:
- Combination layout patterns
- Multi-axis co-existence strategies
- Transition grammar extensions
- Component density tolerance testing

---

## 12. Gate Finding for CD

**DD-F-012 was AD's gate finding.** It stated: "Density patterns imply axis preferences." AD validated and ELEVATED it.

**AD's gate finding for CD is DD-F-013:** "Component density tolerance -- how much density variation can a single component absorb before it needs to split into multiple components." CD must answer this at the combination scale: when two axis patterns combine, do their components maintain density tolerance or require splitting?

Additionally, AD-F-024 (compound is sequential) and AD-F-025 (transition grammar) are MANDATORY constraints for CD. Any combination that violates the sequential principle or lacks transition grammar between zones is INVALID.

---

## 13. The Transitive Chain CD Inherits

```
DD (Density) -> OD (Organization) -> AD (Axis) -> CD (Combination)
     |              |                  |              |
  8 patterns    6 patterns         6 patterns    [to discover]
     |              |                  |
  DD-F-###      OD-F-###           AD-F-###
     |              |                  |
 "Visual rhythm"  "Cognitive rhythm" "Spatial rhythm"
                    |                  |
              OD-F-005: "org IS    AD-F-004: "axis IS
               density"              density IS org"
                                       |
                                 AD-F-023: "All are
                                  ATTENTION TOPOLOGY"
```

CD operates at the TOP of this chain. Every combination must maintain the 3-way equivalence. A combination that breaks the equivalence is INVALID.

---

## 14. Key Negative Findings (What AD Did NOT Find)

1. **No 6th soul piece.** 5-piece model remains complete.
2. **No 6th fractal scale.** 5-scale model is complete (AD-F-028).
3. **No axis pattern that fights density.** Every axis naturally creates its corresponding density.
4. **No Class C (overwriting) findings.** Zero contradictions.
5. **No simultaneous compound viability.** Multiple patterns in one viewport = cacophony. Compound is exclusively sequential.
6. **No axis-density pair that is arbitrary.** The pairings (Z+PULSE, F+CRESCENDO, Bento+ISLANDS, Spiral+GEOLOGICAL, Choreography+WAVE) are natural, not arbitrary.

---

## 15. Files CD Must Read (Ordered, from HANDOFF-AD-TO-CD.md)

| # | File | Purpose |
|---|------|---------|
| 1 | HANDOFF-AD-TO-CD.md | Mandatory first read |
| 2 | ACCUMULATED-IDENTITY-v2.md | Full accumulated context (all prior stages) |
| 3 | SOUL-DISCOVERIES.md | 5 soul pieces (LOCKED) |
| 4 | AD-outbound-findings.md | 28 AD-F findings |
| 5 | AD-SYNTHESIS.md | Cross-exploration synthesis (12 sections) |
| 6 | AD-CONVENTION-SPEC.md | Convention spec (base for CD locked layer) |
| 7 | R-5 Combination Theory | PRIMARY research for CD |
| 8 | PIPELINE-MANIFEST.md | Finding registry |
| 9 | BACKBONE.md | Master narrative |

---

*Compiled from 6 source files. All content grounded in AD stage artifacts.*
