<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/dependency-trace/05-cleanup-recommendations.md
Tier: B | Batch: 10 | Generated: 2026-02-06

1. WHY THIS EXISTS
Prioritized cleanup recommendations derived from the dependency trace analysis.
Organizes actions into CRITICAL (3), HIGH (5), MEDIUM (6), LOW (7), and
DO NOT TOUCH (10 categories) tiers with specific file targets, justification,
and risk assessments. Includes a phased execution order (A through E).

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| 04-cross-directory-analysis.md          | Token divergences -> cleanup actions   |
| 01-reachability-report.md               | Orphan identification -> cleanup scope |
| 02-threading-data/ (all 3 files)        | Threading gaps -> remediation actions  |
| All four Phase 1B analysis files        | Raw findings driving recommendations   |

6. MUST HONOR
- DO NOT TOUCH items are explicitly protected (15 intentional duplicates, 6 T1 files, etc.)
- CR-003 (archive/tokens/ deprecation) is CRITICAL — wrong values produce soul-violating CSS
- Execution order (Phase A-E) respects dependency between cleanup actions
- archive/tokens/ files must get deprecation headers but NOT be deleted

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| 07-QUESTIONS-FOR-HUMAN.md              | Q-003, Q-005 reference specific CRs   |
| PHASE-2B-BATCH-MANIFEST.md             | References as Batch 10 file #165      |
| Future cleanup work                     | Actionable task list with priorities   |
| knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md | Cites cleanup scope         |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# Cleanup Recommendations

**Generated:** 2026-02-05
**Sources:** All four analysis files + threading data
**Scope:** design-extraction/, showcase/, design-system/

---

## CRITICAL (Do First)

| ID | Action | Files | Justification | Risk if Skipped |
|----|--------|-------|---------------|-----------------|
| CR-001 | Gitignore node_modules | 201 files across 4 directories in design-extraction/ (archive/variations/tests/, card-system/tests/, component-system/tests/, typography-system/) | Inflates file count from 350 to 555, confuses scans, adds ~5.4MB of Playwright dependencies to git tracking | LOW risk to skip but HIGH noise -- every directory scan wastes time counting/skipping these |
| CR-002 | Gitignore playwright-report | 4 files (~1.8MB) across 3 directories in design-extraction/ (archive/variations/tests/, component-system/tests/, typography-system/) | Generated test output with embedded data, not source material; component-system report alone is 704KB | LOW risk to skip but wastes storage |
| CR-003 | Add deprecation header to archive/tokens/ | 6 files in design-extraction/archive/tokens/ (colors.css, effects.css, index.css, spacing.css, typography.css, test.html) | Contains DANGEROUS wrong values: effects.css defines --radius-sm: 2px through --radius-full: 9999px and shadow variables (ALL banned in final system); typography.css has --font-display: 'Bebas Neue' (WRONG -- Instrument Serif is correct). Any agent reading these without context produces anti-pattern CSS that violates every soul piece. | HIGH risk if skipped -- agents WILL consume these values and produce soul-violating output |

**CR-003 Suggested deprecation header:**
```markdown
<!-- SUPERSEDED -- DO NOT USE THESE VALUES -->
<!-- This file contains INCORRECT token values from Phase 0 extraction -->
<!-- border-radius values here are BANNED (soul locks border-radius: 0) -->
<!-- box-shadow values here are BANNED (soul locks box-shadow: none) -->
<!-- Font 'Bebas Neue' is WRONG (correct font: 'Instrument Serif') -->
<!-- Authoritative tokens: perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md -->
```

---

## HIGH PRIORITY

| ID | Action | Files | Justification | Risk if Skipped |
|----|--------|-------|---------------|-----------------|
| HP-001 | Update design-extraction/CLAUDE.md for Phase 4 | 1 file (design-extraction/CLAUDE.md, 12,027 bytes) | Currently documents Phase 1-3 only. The 6 T1 synthesis files in component-system/perceptual-audit-v2/synthesis/ are not referenced. Agents entering design-extraction/ via CLAUDE.md miss the most authoritative content (MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md, CHARACTER-FAMILY-COMPLETE.md, PRODUCTION-RULES.md, ANTI-PATTERNS-REGISTRY.md, CONSISTENCY-VERIFICATION.md). | HIGH -- agents operate without knowledge of T1 foundation files |
| HP-002 | Update design-extraction/README.md phase table | 1 file (design-extraction/README.md, 4,885 bytes) | Phase progress table lists "Phase 3: Color System" as NEXT -- this is outdated. Component-system perceptual-audit-v2 (Phase 4) is complete with 176 files. External readers get stale context. | MEDIUM -- external-facing confusion |
| HP-003 | Add CLAUDE.md to design-system/ | 0 -> 1 file (new: design-system/CLAUDE.md) | No navigation file for agents. No provenance markers. No documentation of token divergence from soul-locked values. No instructions about which tokens are authoritative. Agents entering design-system/ have zero context about the provenance chain disconnect. | HIGH -- agents in design-system/ will consume soul-violating tokens without warning |
| HP-004 | Add "SUPERSEDED BY v2" marker to archive/perceptual-audit-phase-2.5/ | 7 files in design-extraction/component-system/archive/perceptual-audit-phase-2.5/ | Supersession is documented in MASTER-INDEX.md line 141 but not in the files themselves. SOUL-DISCOVERIES.md (11,223 bytes) in this directory defines 7 soul pieces that were later refined to 5 -- agents reading this will use outdated soul piece count. | MEDIUM -- agents may use 7 soul pieces instead of 5 |
| HP-005 | Document showcase token drift from tracking sheets | 1 new file or addition to existing threading docs | Accent-amber (#C49052 vs #D97706), accent-purple (#7B68EE vs #7C3AED), bg-info (#F0F7FF vs #F5F8FA), bg-tip (#F0F7F0 vs #F5FAF5) differ between design-extraction tracking/ and showcase tokens/. Citation edges are unreliable for these values. | MEDIUM -- threading edges are technically inaccurate for 4 token values |

**HP-003 Suggested CLAUDE.md content outline:**
```markdown
# design-system/ CLAUDE.md

## WARNING: Token Divergence
This directory uses DIFFERENT token values from the showcase/design-extraction soul-locked tokens.
Key divergences: --border-radius (non-zero vs soul-locked 0), --box-shadow (non-none vs soul-locked none), --color-primary (#FF0000 vs #E83025).

## Provenance
This directory was created as an independent extraction effort. It has NO formal provenance chain to design-extraction/perceptual-audit-v2/.

## Token Namespaces
8 different token sources exist: tokens.css (base), sanrok/medieval/nous themes (3), blend themes (3), JS inline objects (3).
TSX components bypass CSS tokens entirely via hardcoded Tailwind values.

## Authoritative Soul Tokens
For soul-compliant values, reference: design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
```

---

## MEDIUM PRIORITY

| ID | Action | Files | Justification | Risk if Skipped |
|----|--------|-------|---------------|-----------------|
| MP-001 | Consolidate token namespaces in design-system/ | 10 CSS files | 5 CSS namespaces (base, --blend-*, --blend-* variant, --mb-*) + 3 JS inline token objects = 8 sources of truth. Token changes in tokens.css have zero effect on standalone themes or TSX components. | MEDIUM -- makes alignment work exponentially harder |
| MP-002 | Fix medieval-blend.css :root override | 1 file (design-system/src/styles/themes/medieval-blend.css) | Sets tokens on :root in addition to [data-theme="medieval-blend"]. Loading this theme globally corrupts base tokens from tokens.css. | MEDIUM -- will cause subtle bugs if themes are loaded together |
| MP-003 | Migrate TSX components to CSS custom properties | 16 TSX files in design-system/src/components/ | All 16 TSX files use hardcoded Tailwind values (bg-[#FF0000], rounded-full, etc.) instead of CSS custom properties. Token changes have zero effect on component rendering. | MEDIUM -- blocks any meaningful token alignment |
| MP-004 | Add "SUPERSEDED BY" markers to archive/research-phase-3/ | 9 files in design-extraction/component-system/archive/research-phase-3/ (4A through 4I) | ~350KB of deep research that is superseded by component-system work. Files are marked as archived in MASTER-INDEX.md but not self-documenting. | LOW -- these are already in archive/ directory |
| MP-005 | Investigate R2 finding count discrepancy | 1 file (showcase/research/R2-CREATIVE-LAYOUTS.md) | research/CLAUDE.md claims 78 findings but COMPONENT-AUDIT-FOUNDATION tables show R2-001 through R2-027. DISCOVERIES-LOG references R2-079. Either sub-findings exist in non-standard format or count is wrong. | LOW -- does not block threading work |
| MP-006 | Document hypothetical OD examples in README.md | 1 file (showcase/DESIGN-SYSTEM/README.md, 109,544 bytes) | Contains OD-F-007, OD-F-008, OD-F-009 examples that are HYPOTHETICAL (illustrative, not completed work). Agents may confuse these with actual findings. | LOW -- confusion risk exists but README context makes it somewhat clear |

---

## LOW PRIORITY

| ID | Action | Files | Justification | Risk if Skipped |
|----|--------|-------|---------------|-----------------|
| LP-001 | Fix info-callout structural inconsistency | ~6 files in design-extraction/component-system/perceptual-audit-v2/components/info-callout/ | Zone analysis files are at component root instead of inside sub-agent-analyses/ like the other 6 fully-analyzed components. Only ZONE-TYPOGRAPHY-ANALYSIS.md is inside sub-agent-analyses/. | LOW -- functional, just inconsistent |
| LP-002 | Clarify R2 finding count in research/CLAUDE.md | 1 file | States "R2=78" but visible finding IDs only go to R2-027 in COMPONENT-AUDIT-FOUNDATION. May include sub-findings. | LOW -- cosmetic discrepancy |
| LP-003 | Add cited-field backfill to showcase audit records | 24 files in showcase/checkpoints/ and showcase/knowledge-architecture/ | Standalone audit records, progress trackers, and navigation files have empty cited fields because they are consumed indirectly (agents read them on directory entry). | LOW -- these are structurally consumed, not explicitly referenced |
| LP-004 | Add cited-field backfill to design-extraction archive | 63 files in design-extraction/archive/ and experimental directories | Archive files and demo HTML have no inbound citations because they are superseded or experimental. | LOW -- expected for archived content |
| LP-005 | Document Playwright MCP test infrastructure | 4 directories with test setups in design-extraction/ | Test directories exist but test results are in playwright-report/ (recommended for gitignore). No documentation of what tests verify. | LOW -- infrastructure documentation |
| LP-006 | Remove unused gradient presets in duotone.css | 1 file (design-system/src/styles/effects/duotone.css) | Gradient presets (sunset, ocean, forest) defined but not referenced anywhere. Dead CSS. | LOW -- cosmetic |
| LP-007 | Fix duplicate selector in nous.css | 1 file (design-system/src/styles/themes/nous.css) | .nous-halftone--large::after appears twice (lines 118-124). | LOW -- no functional impact (later declaration wins) |

---

## DO NOT TOUCH

These items are intentional and documented. Modifying them would break provenance chains or remove valuable data.

| Item | Count | Reason to Preserve |
|------|-------|--------------------|
| All 15 intentional showcase duplicates (R1-R5 x2, SOUL-DISC x2, RESEARCH-ACTIVE x2, FOUND-REMED x2, DD-REAUDIT x2, RESEARCH-SYNTHESIS x1) | 15 files | Documented operational/archival sync protocol. checkpoints/ = operational (live), provenance/ = archival (synced after phase completion). Both locations serve different consumers. |
| All 6 T1 synthesis files in design-extraction/perceptual-audit-v2/synthesis/ | 6 files | MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md, CHARACTER-FAMILY-COMPLETE.md, PRODUCTION-RULES.md, ANTI-PATTERNS-REGISTRY.md, CONSISTENCY-VERIFICATION.md. These are the crown jewels of the extraction work. |
| All 6 DD HTML exploration files (DD-001 through DD-006) | 6 files | T1 sources of truth for density explorations. CSS contains locked tokens with provenance citations. DD-006 is the most-referenced artifact in the entire showcase. |
| All 7 tracking files in design-extraction/perceptual-audit-v2/tracking/ | 7 files | T1 supporting data that feeds directly into the 6 synthesis files. |
| DD-F-006 (fractal meta-pattern) references across 20+ files | 20+ files | THE connective tissue of the design system. Referenced across 40+ unique lines in 20+ files. Removing any reference breaks the provenance chain. |
| SOUL-DEFINITION.md at 58KB | 1 file | Yes, it is large. MASTER-SOUL-SYNTHESIS.md (16KB) distills it. But the original 58KB version is the COMPLETE authority and has inbound references from all CSS files. |
| 55-PAIR-CONSISTENCY-MATRIX.md at 63KB | 1 file | Exhaustive 55 pairwise comparisons between all 11 components. T2 process artifact that fed into CONSISTENCY-VERIFICATION.md (T1). Irreplaceable verification work. |
| README.md at 109KB | 1 file | "THE KORTAI DESIGN MIND." Contains hypothetical OD examples (noted in MP-006) but is the philosophical anchor of the entire design system. |
| archive/perceptual-audit-phase-2.5/SOUL-DISCOVERIES.md | 1 file | Historically significant: defined the original 7 soul pieces later refined to 5. Origin of the perceptual deepening protocol. (Add supersession marker per HP-004 but do NOT delete.) |
| archive/tokens/ files | 6 files | Contains wrong values but is provenance for the typography token chain (Bebas Neue -> Instrument Serif). (Add deprecation header per CR-003 but do NOT delete.) |

---

## Execution Order Recommendation

```
Phase A: Immediate Safety (30 min)
  CR-003  Add deprecation headers to archive/tokens/
  HP-003  Create design-system/CLAUDE.md

Phase B: Navigation Fix (45 min)
  HP-001  Update design-extraction/CLAUDE.md for Phase 4
  HP-002  Update design-extraction/README.md phase table
  HP-004  Add supersession markers to perceptual-audit-phase-2.5/

Phase C: Noise Reduction (30 min)
  CR-001  Gitignore node_modules
  CR-002  Gitignore playwright-report

Phase D: Token Documentation (1-2 hours)
  HP-005  Document token drift
  MP-001  Plan token namespace consolidation
  MP-002  Fix medieval-blend.css :root override

Phase E: Component Alignment (4-8 hours, can be deferred)
  MP-003  TSX component token migration
  LP-001  Fix info-callout structure
  LP-006  Remove unused gradient presets
  LP-007  Fix duplicate selector
```
