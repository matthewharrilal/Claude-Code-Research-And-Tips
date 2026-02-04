# SOURCE OF TRUTH REGISTRY
## What Files to Trust RIGHT NOW

═══════════════════════════════════════════════════════════════════════════════

## HOW TO USE THIS DOCUMENT

If a file is NOT in this list → Don't trust it as authoritative.
If files conflict → The higher tier wins.
If in doubt → Start with T1 FOUNDATION.

═══════════════════════════════════════════════════════════════════════════════

## T1: FOUNDATION (Locked — Cannot be regenerated)

These are the source of truth. Everything else derives from these.

### Soul Definition
| File | Path | Purpose |
|------|------|---------|
| MASTER-SOUL-SYNTHESIS.md | perceptual-audit-v2/synthesis/ | Complete KortAI soul definition |
| KORTAI-ESSENCE-FOUNDATION.md | perceptual-audit-v2/foundation/ | Core philosophy extraction |
| SOUL-TRANSLATION-GUIDE.md | perceptual-audit-v2/foundation/ | Soul-to-CSS translation rules |

### Component Specifications
| File | Path | Purpose |
|------|------|---------|
| CHARACTER-FAMILY-COMPLETE.md | perceptual-audit-v2/synthesis/ | All 11 components with characters |
| PERCEPTUAL-TRUTHS.md | perceptual-audit-v2/tracking/ | Soul truths per component |
| NAMED-CHARACTERS.md | perceptual-audit-v2/tracking/ | Character names and archetypes |

### Design Tokens
| File | Path | Purpose |
|------|------|---------|
| DESIGN-TOKEN-SUMMARY.md | perceptual-audit-v2/synthesis/ | All locked CSS variables |
| COLOR-TOKENS.md | perceptual-audit-v2/tracking/ | Color system |
| TYPOGRAPHY-TOKENS.md | perceptual-audit-v2/tracking/ | Typography system |
| SPACING-TOKENS.md | perceptual-audit-v2/tracking/ | Spacing scale |
| CONTAINER-TOKENS.md | perceptual-audit-v2/tracking/ | Border and container rules |

### Anti-Patterns
| File | Path | Purpose |
|------|------|---------|
| ANTI-PATTERNS-REGISTRY.md | perceptual-audit-v2/synthesis/ | Complete what NOT to do |
| ANTI-PATTERNS.md | perceptual-audit-v2/tracking/ | Structural anti-patterns |

### Production Rules
| File | Path | Purpose |
|------|------|---------|
| PRODUCTION-RULES.md | perceptual-audit-v2/synthesis/ | Implementation rules |
| CONSISTENCY-VERIFICATION.md | perceptual-audit-v2/synthesis/ | Verification checklists |

═══════════════════════════════════════════════════════════════════════════════

## T2: FRAMEWORK (Derived from T1 + research)

These build on T1 with external research. Can be re-derived.

### Research Documents
| File | Path | Findings | Source |
|------|------|----------|--------|
| R1-DOCUMENTATION-PATTERNS.md | showcase/research/ | 24 | Stripe, Vercel, Linear analysis |
| R2-CREATIVE-LAYOUTS.md | showcase/research/ | 25 | Magazine, dashboard patterns |
| R3-DENSITY-DIMENSIONS.md | showcase/research/ | 30 | 6 density dimensions |
| R4-AXIS-INNOVATIONS.md | showcase/research/ | 25 | Z, F, Bento patterns |
| R5-COMBINATION-THEORY.md | showcase/research/ | 20 | Component properties model |
| RESEARCH-SYNTHESIS.md | showcase/research/ | — | 5 unified principles |

### Master Index
| File | Path | Purpose |
|------|------|---------|
| FINDINGS-INDEX.md | showcase/ | Complete knowledge architecture |

═══════════════════════════════════════════════════════════════════════════════

## T3: PATTERN (Validated through exploration)

These are applied patterns validated through testing.

### Validated Explorations
| File | Path | Score | Pattern |
|------|------|-------|---------|
| DD-002-gradient.html | showcase/explorations/density/ | 34/40 ★ | CRESCENDO |
| DD-001-breathing.html | showcase/explorations/density/ | 30.5/40 | PULSE |
| DD-003-islands.html | showcase/explorations/density/ | 30.5/40 | Tidal Pools |

═══════════════════════════════════════════════════════════════════════════════

## T4: OPERATIONAL (Execution state)

### Current Project State
| File | Path | Purpose |
|------|------|---------|
| MASTER-STATE.md | showcase/checkpoints/ | Project position |
| DISCOVERIES-LOG.md | showcase/checkpoints/ | Exploration scores |
| SECTIONS-PROGRESS.md | showcase/checkpoints/ | Section build status |

### Knowledge Architecture
| File | Path | Purpose |
|------|------|---------|
| KA-POSITION.md | showcase/knowledge-architecture/ | KA phase position |
| KA-DECISIONS.md | showcase/knowledge-architecture/ | KA decisions log |
| KA-VERIFICATION.md | showcase/knowledge-architecture/ | KA verification |

═══════════════════════════════════════════════════════════════════════════════

## SUPERSEDED (Do NOT use)

| File | Superseded By | Reason |
|------|---------------|--------|
| soul-extractions/*.md | PERCEPTUAL-TRUTHS.md | Summaries, not authoritative |
| tracking/TYPOGRAPHY-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| tracking/SPACING-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| tracking/COLOR-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| tracking/CONTAINER-TOKENS.md | DESIGN-TOKEN-SUMMARY.md | Consolidated |
| coexistence/COEXISTENCE-TEST-RESULTS.md | re-audit/coexistence-reaudits/ | Phase 4-BETA re-audit |

═══════════════════════════════════════════════════════════════════════════════

## OUTPUT (Regenerable)

These can be regenerated from authoritative sources:
- screenshots/*.png
- Component HTML demos
- Test files

═══════════════════════════════════════════════════════════════════════════════

## QUICK REFERENCE: Find Anything

| Need | Go To |
|------|-------|
| Soul definition | MASTER-SOUL-SYNTHESIS.md |
| CSS variables | DESIGN-TOKEN-SUMMARY.md |
| Component specs | CHARACTER-FAMILY-COMPLETE.md |
| What NOT to do | ANTI-PATTERNS-REGISTRY.md |
| All research findings | FINDINGS-INDEX.md |
| Density patterns | R3-DENSITY-DIMENSIONS.md |
| Combination rules | R5-COMBINATION-THEORY.md |
| Validated example | DD-002-gradient.html |
