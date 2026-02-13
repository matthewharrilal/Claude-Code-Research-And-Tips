<!-- ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/knowledge-architecture/KA-DECISIONS.md
Tier: B | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Classification framework for the knowledge architecture. Defines tier assignments
(T1-T4, S, O), confidence levels (0-4), SUPERSEDED status definitions, and all
structural decisions with documented rationale.

2. THE QUESTION THIS ANSWERS
"How was each file classified, what tier does it belong to, and what decisions
shaped the knowledge architecture's structure?"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| Tier system (T1-T4, S, O)              | Classification framework              |
| DD audit scores                         | Input data for tier assignments        |
| Confidence levels (0-4)                 | Scoring methodology                   |
| MASTER-SOUL-SYNTHESIS.md (design-extraction) | External: soul definition source  |

6. MUST HONOR
- Knowledge architecture classification methodology
- SUPERSEDED status definitions (files marked SUPERSEDED must not be treated as authoritative)
- Tier assignments are the canonical source for file importance ranking

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| showcase/CLAUDE.md (knowledge-architecture/) | Referenced for classification rules |

10. DIAGNOSTIC QUESTIONS
Q1: Do the tier assignments in this file match the actual tier labels used in
    SOURCE-OF-TRUTH-REGISTRY.md and PIPELINE-BACKBONE.md?
Q2: Are all SUPERSEDED files also marked as superseded in their own headers or
    in the relevant tracking documents?
Q3: Does the confidence scoring (0-4) align with the evidence documented in
    KA-VERIFICATION.md spot-check results?

END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ -->

# KA-DECISIONS.md — Structure and Provenance Decisions
## All Decisions Documented with Rationale

═══════════════════════════════════════════════════════════════════════════════
## FILE INVENTORY
═══════════════════════════════════════════════════════════════════════════════

*To be populated by KA-1 sub-agent*

### perceptual-audit-v2 Inventory (176 files identified)

| Category | Count | Path Pattern |
|----------|-------|--------------|
| Synthesis | 6 | synthesis/*.md |
| Tracking | 7 | tracking/*.md |
| Components | ~100 | components/**/*.md + html |
| Soul Extractions | 11 | soul-extractions/*.md |
| Re-audit | ~15 | re-audit/**/*.md |
| Delta Pairs | 7 | delta-pairs/*.html |
| Coexistence | ~10 | coexistence/*.html + .md |
| Pages | ~6 | pages/*.html + .md |
| Foundation | 2 | foundation/*.md |
| Checkpoints | 3 | checkpoints/*.md |
| Root | ~9 | *.md |

### showcase Inventory (Updated 2026-02-04)

| Category | Count | Path Pattern |
|----------|-------|--------------|
| Research | 6 | research/*.md |
| Explorations | 6 | explorations/density/*.html (DD-001 through DD-006) |
| Screenshots | 12 | screenshots/explorations/*.png (6 original + 6 audit) |
| Checkpoints | 5 | checkpoints/*.md |
| DESIGN-SYSTEM | 11 | DESIGN-SYSTEM/**/*.md |
| knowledge-architecture | 5 | knowledge-architecture/*.md |
| Root | 1 | FINDINGS-INDEX.md |

═══════════════════════════════════════════════════════════════════════════════
## STRUCTURE DECISIONS
═══════════════════════════════════════════════════════════════════════════════

*Decisions to be made by KA-5 Structure Architect*

| ID | Decision | Rationale | Timestamp |
|----|----------|-----------|-----------|
| SD-001 | *pending* | | |

═══════════════════════════════════════════════════════════════════════════════
## TIER ASSIGNMENTS
═══════════════════════════════════════════════════════════════════════════════

*Assignments to be made by KA-4 Tier Assigner*

### Tier Definitions

| Tier | Name | Definition | Example Files |
|------|------|------------|---------------|
| 0 | ORIGIN | Original inputs that cannot be recreated | KortAI reference images |
| 1 | FOUNDATION | Locked foundations (soul, tokens, specs) | MASTER-SOUL-SYNTHESIS.md |
| 2 | FRAMEWORK | Derived frameworks from T1 + research | DENSITY-DIMENSIONS, COMBINATION-THEORY |
| 3 | PATTERN | Applied patterns from T1+T2+experiments | DD-002 (validated CRESCENDO) |
| 4 | OPERATIONAL | Execution state, progress tracking | MASTER-STATE.md, DISCOVERIES-LOG.md |
| S | SUPERSEDED | Replaced by something else | (to be identified) |
| O | OUTPUT | Derived artifacts that can be regenerated | Screenshots, generated docs |

### Preliminary Tier Mapping (Subject to KA-4 verification)

| File/Category | Proposed Tier | Rationale |
|---------------|---------------|-----------|
| synthesis/MASTER-SOUL-SYNTHESIS.md | T1-FOUNDATION | Core soul definition |
| synthesis/CHARACTER-FAMILY-COMPLETE.md | T1-FOUNDATION | 11 components locked |
| synthesis/DESIGN-TOKEN-SUMMARY.md | T1-FOUNDATION | Tokens locked |
| synthesis/ANTI-PATTERNS-REGISTRY.md | T1-FOUNDATION | Anti-patterns locked |
| synthesis/PRODUCTION-RULES.md | T1-FOUNDATION | Rules locked |
| synthesis/CONSISTENCY-VERIFICATION.md | T1-FOUNDATION | Verification locked |
| tracking/*.md | T1-FOUNDATION | Token sheets |
| research/R1-*.md | T2-FRAMEWORK | Derived from synthesis + external |
| research/R2-*.md | T2-FRAMEWORK | Derived from synthesis + external |
| research/R3-*.md | T2-FRAMEWORK | Derived from synthesis + external |
| research/R4-*.md | T2-FRAMEWORK | Derived from synthesis + external |
| research/R5-*.md | T2-FRAMEWORK | Derived from synthesis + external |
| research/RESEARCH-SYNTHESIS.md | T2-FRAMEWORK | Derived from R1-R5 |
| explorations/DD-002 | T3-PATTERN | Validated CRESCENDO (audit: 8.57/10, score 34/40) ★ INCLUDE |
| explorations/DD-004 | T3-PATTERN | Validated GEOLOGICAL (audit: 8.43/10, score 33.5/40) ★ INCLUDE |
| explorations/DD-005 | T3-PATTERN | Validated RIVERS (audit: 8.50/10, score 34/40) ★ INCLUDE |
| explorations/DD-006 | T3-PATTERN | Validated FRACTAL (audit: 8.64/10, score 35/40) ★★ BEST |
| explorations/DD-001 | T3-PATTERN | Documented PULSE (audit: 7.36/10, score 30/40) DOCUMENT |
| explorations/DD-003 | T3-PATTERN | Documented ISLANDS (audit: 7.86/10, score 31/40) DOCUMENT |
| checkpoints/*.md | T4-OPERATIONAL | Execution state |
| screenshots/*.png | OUTPUT | Regenerable |

═══════════════════════════════════════════════════════════════════════════════
## SUPERSESSION MAPPINGS
═══════════════════════════════════════════════════════════════════════════════

*Populated by Phase 1B Dependency Trace (2026-02-05)*

### Verified Supersession Mappings

| Old File | Superseded By | Evidence | Status |
|----------|---------------|----------|--------|
| design-extraction/archive/tokens/typography.css (Bebas Neue) | typography-system/typography.css (Instrument Serif) | README.md: "Superseded by typography-system" | VERIFIED |
| design-extraction/card-system/SOUL-DEFINITION.md (10 principles) | component-system/SOUL-DEFINITION.md (6 rules + component rules) | Expanded, not replaced | VERIFIED |
| component-system/SOUL-DEFINITION.md | synthesis/MASTER-SOUL-SYNTHESIS.md (T1) | Distilled into authoritative T1 | VERIFIED |
| component-system/ANTI-PATTERNS.md (56KB) | synthesis/ANTI-PATTERNS-REGISTRY.md (19KB, T1) | Consolidated into authoritative T1 | VERIFIED |
| archive/perceptual-audit-phase-2.5/ (7 soul pieces) | perceptual-audit-v2/ (5 refined soul pieces) | MASTER-INDEX.md line 141 | VERIFIED |
| soul-extractions/*.md | components/*/SOUL-EXTRACTION-COMPLETE.md | Same component, extraction is longer version | VERIFIED -- NOT superseded, compact summary |
| tracking/*.md | synthesis/DESIGN-TOKEN-SUMMARY.md | Tracking is source data; synthesis consolidates | VERIFIED -- NOT superseded, complementary |

═══════════════════════════════════════════════════════════════════════════════
## EVOLUTION CHAINS
═══════════════════════════════════════════════════════════════════════════════

*Populated by Phase 1B Dependency Trace (2026-02-05)*

```
EVOLUTION CHAIN: Soul Definition
├── V1 (card-system/SOUL-DEFINITION.md, Feb 2-3)
│   Content: 10 soul principles from card research
│   Status: SUPERSEDED (expanded)
├── V2 (component-system/SOUL-DEFINITION.md, Feb 3)
│   Change: Expanded to 6 universal rules + component-specific rules
│   Reason: Full 11-component audit revealed needs beyond cards
│   Status: REFINED-INTO
└── CURRENT: perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (Feb 4)
    Confidence: 5 (PRODUCTION -- used in DD explorations)

EVOLUTION CHAIN: Typography Token
├── V1 (archive/tokens/typography.css, ~Feb 1)
│   Content: --font-display: 'Bebas Neue', basic type scale
│   Status: SUPERSEDED
├── V2 (typography-system/typography.css, Feb 2)
│   Change: Instrument Serif identified, new type scale
│   Reason: Font research identified correct match
│   Status: REFINED-INTO
└── CURRENT: synthesis/DESIGN-TOKEN-SUMMARY.md (Feb 4)
    Confidence: 5 (PRODUCTION -- locked values)

EVOLUTION CHAIN: Anti-Pattern Knowledge
├── V1 (card-system/research/3B-anti-patterns.md, Feb 2-3)
│   Content: Card-focused anti-patterns (17KB)
│   Status: EXPANDED
├── V2 (component-system/ANTI-PATTERNS.md, Feb 3)
│   Change: Expanded to all components (56KB)
│   Reason: Full component audit revealed broader patterns
│   Status: CONSOLIDATED
└── CURRENT: synthesis/ANTI-PATTERNS-REGISTRY.md (Feb 4)
    Confidence: 5 (PRODUCTION -- authoritative T1)

EVOLUTION CHAIN: Perceptual Audit
├── V1 (archive/perceptual-audit-phase-2.5/, Feb 3)
│   Content: 7 soul pieces, initial audit methodology
│   Status: SUPERSEDED
└── CURRENT: perceptual-audit-v2/ (Feb 4)
    Content: 5 refined soul pieces, full 11-component audit, 6 T1 synthesis files
    Confidence: 5 (PRODUCTION)
```

═══════════════════════════════════════════════════════════════════════════════
## CONTRADICTION RESOLUTIONS
═══════════════════════════════════════════════════════════════════════════════

*Populated by Phase 1B Dependency Trace (2026-02-05)*

```
CONTRADICTION: Primary Red Color
├── FILE A: design-system/tokens.css says --sanrok-red: #FF0000
├── FILE B: T1 DESIGN-TOKEN-SUMMARY.md says --color-primary: #E83025
├── RESOLUTION: #E83025 is authoritative (T1 Foundation)
└── RATIONALE: T1 files discovered through perceptual deepening are the locked source of truth. design-system/ was an earlier, independent extraction.

CONTRADICTION: Border Radius Values
├── FILE A: design-system/tokens.css defines --radius-sm through --radius-full (0.25rem to 9999px)
├── FILE B: T1 DESIGN-TOKEN-SUMMARY.md defines --border-radius: 0 (always)
├── RESOLUTION: --border-radius: 0 is authoritative (T1 Foundation, Soul Piece #1)
└── RATIONALE: "Sharp Edges Only" is a non-negotiable soul constraint. Design-system tokens are pre-soul and must be aligned.

CONTRADICTION: Box Shadow Values
├── FILE A: design-system/tokens.css defines 6 shadow tokens with actual values
├── FILE B: T1 DESIGN-TOKEN-SUMMARY.md defines --box-shadow: none (always)
├── RESOLUTION: --box-shadow: none is authoritative (T1 Foundation, Soul Piece #4)
└── RATIONALE: "No Shadows" is a non-negotiable soul constraint.

CONTRADICTION: Type Scale Values
├── FILE A: design-system/tokens.css uses Perfect Fourth (1.333) scale
├── FILE B: T1 type-scale.css uses editorial proportions with clamp()
├── RESOLUTION: T1 type scale is authoritative
└── RATIONALE: T1 type scale was specifically calibrated during perceptual audit to match KortAI identity.
```

═══════════════════════════════════════════════════════════════════════════════
## CONFIDENCE SCORES
═══════════════════════════════════════════════════════════════════════════════

*To be populated by KA-2C Confidence Scorer*

### Confidence Scale

| Score | Level | Definition |
|-------|-------|------------|
| 5 | PRODUCTION | In active use, battle-tested |
| 4 | VALIDATED | Passed exploration/stress tests |
| 3 | RESEARCHED | Evidence-based, not yet validated |
| 2 | HYPOTHESIZED | Proposed based on reasoning |
| 1 | SPECULATIVE | Idea without strong backing |
| 0 | SUPERSEDED | Known to be replaced |

### Confidence Assignments (Updated 2026-02-04 Post-Audit)

| Finding/Spec | Confidence | Evidence | To Increase |
|--------------|------------|----------|-------------|
| CRESCENDO pattern | 4-VALIDATED | DD-002 audit score 8.57/10, total 34/40 | Production use |
| GEOLOGICAL LAYERS pattern | 4-VALIDATED | DD-004 audit score 8.43/10, total 33.5/40 | Production use |
| RIVER FLOW pattern | 4-VALIDATED | DD-005 audit score 8.50/10, total 34/40 | Production use |
| FRACTAL SELF-SIMILARITY | 4-VALIDATED | DD-006 audit score 8.64/10, total 35/40 ★★ | Production use |
| PULSE/BREATHING pattern | 3-RESEARCHED | DD-001 audit score 7.36/10, total 30/40 | Fix traffic-light |
| ISLANDS pattern | 3-RESEARCHED | DD-003 audit score 7.86/10, total 31/40 | Strengthen callouts |
| 6 Density Dimensions | 4-VALIDATED | DD-001-006 applied dimensions | Production use |
| Component Properties Model | 3-RESEARCHED | R-5 research | Needs CD-* testing |

═══════════════════════════════════════════════════════════════════════════════
## DEPENDENCY GRAPH
═══════════════════════════════════════════════════════════════════════════════

*Populated by Phase 1B Dependency Trace (2026-02-05)*

### Critical Path Nodes (High Blast Radius)

| File | Dependents | Blast Radius | Inbound Refs |
|------|------------|--------------|-------------|
| DD-006-fractal.html | 20+ files, all future stages | CRITICAL | 20+ |
| MASTER-SOUL-SYNTHESIS.md | All components, all explorations | CRITICAL | 15+ |
| DESIGN-TOKEN-SUMMARY.md | All HTML files, all tokens, all components | CRITICAL | 15+ |
| RESEARCH-ACTIVE.md | Process enforcement, all tracking | HIGH | 15+ |
| SOUL-DISCOVERIES.md | Soul verification, stage headers | HIGH | 15+ |
| BACKBONE.md | Stage navigation, pipeline | HIGH | 12+ |
| PIPELINE-MANIFEST.md | Finding lifecycle, stage tracking | HIGH | 10+ |
| DD-outbound-findings.md | OD stage, pattern definitions | HIGH | 12+ |
| HANDOFF-DD-TO-OD.md | OD stage execution | HIGH | 8+ |
| R3-DENSITY-DIMENSIONS.md | DD explorations, pattern definitions | HIGH | 15+ |

### Cross-Directory Dependencies (14 edges)

| Edge | Source (design-extraction) | Target (showcase) | Type |
|------|---------------------------|-------------------|------|
| E-001 | synthesis/MASTER-SOUL-SYNTHESIS.md | DESIGN-SYSTEM/provenance/ | Soul definition |
| E-002 | synthesis/DESIGN-TOKEN-SUMMARY.md | DESIGN-SYSTEM/tokens/*.md | Token values |
| E-003 | synthesis/DESIGN-TOKEN-SUMMARY.md | explorations/density/DD-*.html | CSS variables |
| E-004 | synthesis/CHARACTER-FAMILY-COMPLETE.md | DESIGN-SYSTEM/components/OVERVIEW.md | Characters |
| E-005 | synthesis/ANTI-PATTERNS-REGISTRY.md | DESIGN-SYSTEM/anti-patterns/registry.md | Anti-patterns |
| E-006 | synthesis/PRODUCTION-RULES.md | DESIGN-SYSTEM/ (general) | Implementation |
| E-007 | synthesis/CONSISTENCY-VERIFICATION.md | DESIGN-SYSTEM/ (general) | Verification |
| E-008 | tracking/COLOR-TOKENS.md | DESIGN-SYSTEM/tokens/colors.md | Color ref |
| E-009 | tracking/TYPOGRAPHY-TOKENS.md | DESIGN-SYSTEM/tokens/ | Type ref |
| E-010 | tracking/SPACING-TOKENS.md | DESIGN-SYSTEM/tokens/ | Spacing ref |
| E-011 | tracking/CONTAINER-TOKENS.md | DESIGN-SYSTEM/tokens/geometry.md | Container ref |
| E-012 | tracking/PERCEPTUAL-TRUTHS.md | checkpoints/SOUL-DISCOVERIES.md | Soul source |
| E-013 | tracking/NAMED-CHARACTERS.md | DESIGN-SYSTEM/components/OVERVIEW.md | Names |
| E-014 | typography-system/typography.css | design-system/src/styles/tokens.css | UNDOCUMENTED: Instrument Serif |

### Dependency Direction
- design-extraction -> showcase: 13 documented + 1 undocumented = 14 edges
- showcase -> design-extraction: 0 edges (strictly one-directional)
- design-extraction -> design-system: 1 undocumented edge
- design-system -> showcase: 0 edges
- showcase -> design-system: 0 edges

### Within-Directory Dependency Density
- showcase: HIGH (well-connected provenance chain)
- design-extraction: HIGH (hierarchical: synthesis -> tracking -> components)
- design-system: LOW (files are independent, no structured cross-refs)

═══════════════════════════════════════════════════════════════════════════════
## PROVENANCE CHAINS
═══════════════════════════════════════════════════════════════════════════════

*To be populated by KA-2 Provenance Tracer*

### Known Derivation Chains (Preliminary)

```
ORIGIN (KortAI Reference Images)
    │
    ▼
TIER 1: synthesis/ (6 files)
    │   MASTER-SOUL-SYNTHESIS.md
    │   CHARACTER-FAMILY-COMPLETE.md
    │   DESIGN-TOKEN-SUMMARY.md
    │   ANTI-PATTERNS-REGISTRY.md
    │   PRODUCTION-RULES.md
    │   CONSISTENCY-VERIFICATION.md
    │
    ▼
TIER 2: research/ (6 files) + tracking/ (7 files)
    │   R1-DOCUMENTATION-PATTERNS.md (external + T1)
    │   R2-CREATIVE-LAYOUTS.md (external + T1)
    │   R3-DENSITY-DIMENSIONS.md (T1 + research)
    │   R4-AXIS-INNOVATIONS.md (T1 + research)
    │   R5-COMBINATION-THEORY.md (T1 + research)
    │   RESEARCH-SYNTHESIS.md (R1-R5)
    │
    ▼
TIER 3: explorations/ + FINDINGS-INDEX.md
    │   DD-001-breathing.html (T1 + T2)
    │   DD-002-gradient.html (T1 + T2) ★ VALIDATED
    │   DD-003-islands.html (T1 + T2)
    │   FINDINGS-INDEX.md (T1 + T2 + T3)
    │
    ▼
TIER 4: checkpoints/ (execution state)
    │   MASTER-STATE.md
    │   DISCOVERIES-LOG.md
    │   etc.
```

═══════════════════════════════════════════════════════════════════════════════
## UPDATE LOG
═══════════════════════════════════════════════════════════════════════════════

### 2026-02-04 [Phase 2.1 Perceptual Depth Audit]
- Executed full 7-agent visual audit on DD-001 through DD-006
- Took fresh screenshots of all 6 explorations
- Verified scores against rubric criteria
- Updated confidence levels: 4 patterns promoted to VALIDATED (4)
- Audit findings documented in DESIGN-SYSTEM/patterns/density-patterns.md
- R-3 application status updated in RESEARCH-ACTIVE.md
- **Decision:** Phase 2.1 VERIFIED — Ready for OD-001

### 2026-02-04 [Initial Setup]
- Created KA-DECISIONS.md
- Documented preliminary inventory counts
- Documented tier definitions
- Documented preliminary tier mapping
- Documented preliminary derivation chain
- Documented known supersession candidates
- Next: Deploy KA-1 for detailed inventory
