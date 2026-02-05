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

*To be populated by KA-3 Supersession Auditor*

### Known Supersession Candidates

| Old File | Potentially Superseded By | Evidence | Status |
|----------|---------------------------|----------|--------|
| soul-extractions/*.md | SOUL-EXTRACTION-COMPLETE.md (in components) | Same component, different location | NEEDS VERIFICATION |
| tracking/*.md | synthesis/DESIGN-TOKEN-SUMMARY.md | Tracking vs consolidated | NEEDS VERIFICATION |

═══════════════════════════════════════════════════════════════════════════════
## EVOLUTION CHAINS
═══════════════════════════════════════════════════════════════════════════════

*To be populated by KA-2A Refinement Tracer*

### Chain Template

```
EVOLUTION CHAIN: [Name]
├── V1 ([file], [date])
│   Content: [summary]
│   Status: [REFINED-INTO/SUPERSEDED/etc.]
├── V2 ([file], [date])
│   Change: [what changed]
│   Reason: [why]
│   Status: [status]
└── CURRENT: [file]
    Confidence: [1-5]
```

═══════════════════════════════════════════════════════════════════════════════
## CONTRADICTION RESOLUTIONS
═══════════════════════════════════════════════════════════════════════════════

*To be populated by KA-2B Contradiction Resolver*

### Contradiction Template

```
CONTRADICTION: [Topic]
├── FILE A: [what it says]
├── FILE B: [different claim]
├── RESOLUTION: [which is authoritative]
└── RATIONALE: [why]
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

*To be populated by KA-2D Dependency Mapper*

### Critical Path Nodes (High Blast Radius)

| File | Dependents | Blast Radius |
|------|------------|--------------|
| MASTER-SOUL-SYNTHESIS.md | All components, all explorations | CRITICAL |
| DESIGN-TOKEN-SUMMARY.md | All HTML files, all components | CRITICAL |
| CHARACTER-FAMILY-COMPLETE.md | Research, explorations, sections | HIGH |

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
