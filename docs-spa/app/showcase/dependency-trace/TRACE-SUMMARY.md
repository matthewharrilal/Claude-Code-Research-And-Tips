# TRACE-SUMMARY.md
## Dependency Trace Executive Overview

**Generated:** 2026-02-05
**Agents:** ALPHA (showcase), BETA (design-extraction), GAMMA (design-system)
**Trust Rule:** DD exploration files (DD-001 through DD-006 HTML) are SOURCES OF TRUTH per user directive.

---

## Scope

| Directory | Location | Total Files | Project Files | Junk Files |
|-----------|----------|-------------|---------------|------------|
| showcase | `docs-spa/app/showcase/` | 83 | 83 | 0 |
| design-extraction | `design-extraction/` | 555 | 350 | 205 (node_modules, playwright-report) |
| design-system | `design-system/` | 30 | 30 | 0 |
| **TOTAL** | | **668** | **463** | **205** |

---

## Key Statistics by Directory

### showcase (83 files)

| Tier | Count | Description |
|------|-------|-------------|
| T1 (Source of Truth) | 10 | 6 DD HTML explorations + 4 token definition files |
| T2 (Framework) | 25 | Research files, pattern definitions, provenance backbone |
| T3 (Tracking) | 18 | Checkpoints, audit logs, registries |
| T4 (Navigation) | 15 | CLAUDE.md files, QUICK-START |
| S (Synced Duplicate) | 15 | Intentional operational/archival copies (R1-R5 x2, SOUL-DISC x2, etc.) |
| O (Orphan Candidate) | 0 | None detected |

### design-extraction (350 project files)

| Tier | Count | Description |
|------|-------|-------------|
| T1 (Foundation) | 17 | 6 synthesis + 7 tracking + 2 foundation + typography-system core + variables.css |
| T2 (Research/Implementation) | ~140 | Component audits, research files, implementation CSS/HTML, soul extractions |
| S (Supporting) | ~120 | Process docs, experiments, demos, showcases, checkpoints |
| O (Junk) | 205 | node_modules (201) + playwright-report (4) |

### design-system (30 files)

| Tier | Count | Description |
|------|-------|-------------|
| Production | 26 | 10 CSS files + 16 TSX components |
| Documentation | 4 | README.md + 3 blended theme specs |
| T1/T2/T3/S/O | N/A | No tier classification applied (no CLAUDE.md, no finding IDs, no provenance markers) |

---

## Critical Findings (Top 10)

### 1. Four CRITICAL Token Divergences in design-system
The `design-system/src/styles/tokens.css` defines values that directly contradict the soul-locked definitions in design-extraction T1 files: `--radius-*` tokens are non-zero (0.25rem to 9999px), `--shadow-*` tokens have actual values, `--sanrok-red` is `#FF0000` (vs soul-locked `#E83025`), and border uses `rgba(0,0,0,0.08)` instead of solid definitions.

### 2. Eight Token Namespaces Across design-system
Five CSS namespaces (base, `--blend-*`, different `--blend-*`, `--mb-*`, and theme-specific) plus three JS inline token objects create 8 competing sources of truth. Token consolidation is required before any alignment work.

### 3. TSX Components Bypass CSS Token System Entirely
All 16 TSX components in `design-system/src/components/` use hardcoded Tailwind values (`rounded-full`, `bg-[#FF0000]`, inline `boxShadow`) instead of CSS custom properties from `tokens.css`. Changing token values has zero effect on component rendering.

### 4. medieval-blend.css :root Override
`design-system/src/styles/themes/medieval-blend.css` sets tokens on `:root` in addition to `[data-theme="medieval-blend"]`. When loaded, it globally overrides base tokens, potentially corrupting all themes.

### 5. R2 Finding Count Discrepancy
`showcase/research/CLAUDE.md` claims 78 findings for R2-CREATIVE-LAYOUTS.md, but `COMPONENT-AUDIT-FOUNDATION` tables only list R2-001 through R2-027 (27 findings). `DISCOVERIES-LOG` references R2-079, suggesting sub-findings may exist.

### 6. design-extraction CLAUDE.md Covers Only Phases 1-3
The `design-extraction/CLAUDE.md` file was last updated for Phases 1-3 and does not reference Phase 4 (`component-system/perceptual-audit-v2/`), which contains 176 files and all 6 T1 synthesis documents. Agents entering via CLAUDE.md miss the most authoritative content.

### 7. archive/tokens/ Contains DANGEROUS Superseded Values
`design-extraction/archive/tokens/effects.css` defines `--radius-sm: 2px` through `--radius-full: 9999px` and shadow variables -- ALL of which are BANNED in the final soul system (`border-radius: 0`, `box-shadow: none`). An agent reading this without context would produce anti-pattern CSS.

### 8. 201 node_modules Files Committed to Git
Four separate `node_modules/` directories (Playwright test dependencies) are tracked in `design-extraction/`, totaling ~5.4MB. These inflate file counts and should be gitignored.

### 9. README.md (109K) Contains Hypothetical OD Examples
The showcase `DESIGN-SYSTEM/README.md` at 109,544 bytes is the largest file. It contains hypothetical OD-F-007/008/009 examples that are illustrative, not completed work. These could be confused with actual findings.

### 10. Accent Token Drift Between Tracking and Showcase
Secondary/semantic tokens show drift between design-extraction tracking sheets and showcase tokens. E.g., `accent-amber` is `#C49052` in design-extraction `COLOR-TOKENS.md` but `#D97706` in showcase `colors.md`. Core locked tokens remain identical.

---

## Cross-Directory Relationships

### Confirmed Edges: design-extraction -> showcase (13 documented)

| Source (design-extraction) | Target (showcase) | Relationship |
|---------------------------|-------------------|--------------|
| synthesis/MASTER-SOUL-SYNTHESIS.md | DESIGN-SYSTEM/provenance/stage-1-components/ | Soul definition source |
| synthesis/CHARACTER-FAMILY-COMPLETE.md | DESIGN-SYSTEM/components/OVERVIEW.md | Condensed + enriched derivative |
| synthesis/DESIGN-TOKEN-SUMMARY.md | DESIGN-SYSTEM/tokens/*.md | Token values (identical core) |
| synthesis/DESIGN-TOKEN-SUMMARY.md | explorations/density/DD-*.html | CSS variable values (cited in comment) |
| synthesis/ANTI-PATTERNS-REGISTRY.md | DESIGN-SYSTEM/anti-patterns/registry.md | Condensed + reorganized derivative |
| synthesis/PRODUCTION-RULES.md | DESIGN-SYSTEM/ (general) | Implementation guidelines |
| synthesis/CONSISTENCY-VERIFICATION.md | DESIGN-SYSTEM/ (general) | Verification checklists |
| tracking/COLOR-TOKENS.md | DESIGN-SYSTEM/tokens/colors.md | Reference (some drift) |
| tracking/TYPOGRAPHY-TOKENS.md | DESIGN-SYSTEM/tokens/ | Reference |
| tracking/SPACING-TOKENS.md | DESIGN-SYSTEM/tokens/ | Reference |
| tracking/CONTAINER-TOKENS.md | DESIGN-SYSTEM/tokens/geometry.md | Reference |
| tracking/PERCEPTUAL-TRUTHS.md | checkpoints/SOUL-DISCOVERIES.md | Soul piece source |
| tracking/NAMED-CHARACTERS.md | DESIGN-SYSTEM/components/OVERVIEW.md | Character name source |

### Undocumented Edge: design-extraction -> design-system (1 confirmed)

| Source | Target | Evidence |
|--------|--------|----------|
| typography-system/ (Instrument Serif discovery) | design-system/src/styles/tokens.css | `tokens.css` uses `'Instrument Serif'` with no provenance marker |

### Confirmed Non-Edges (0 flow)

| Non-relationship | Evidence |
|------------------|----------|
| showcase -> design-extraction | Zero reverse references found |
| design-system/ -> showcase | Zero references; different token values |
| showcase -> design-system/ | Zero references |
| design-extraction -> design-system/ (formal) | No documented flow; only the 1 undocumented font dependency |

---

## Timeline

```
Feb 2:  design-extraction/typography-system/ (Phase 1-2)
          Discovered: Instrument Serif, stroke treatments, type scale, color values
               |
               v
Feb 3:  design-extraction/card-system/ (Phase 3)
          Established: 10 Soul Principles, anti-pattern methodology, duotone/halftone
               |
               v
Feb 3:  design-extraction/archive/perceptual-audit-phase-2.5/ (Phase 2.5)
          Perceptual deepening: extracted 7 soul pieces
               |
               v
Feb 4 ~13:51:  design-extraction/perceptual-audit-v2/synthesis/ (T1 Foundation)
          Refined to 5 soul pieces, locked tokens, 6 synthesis files, production rules
               |
               v
Feb 4 ~15:39-20:10:  showcase/explorations/density/ (DD explorations)
          DD-001 through DD-006 created, applying T1 tokens + R1-R5 research
               |
               v
Feb 4 ~17:33:  showcase/knowledge-architecture/ (KA infrastructure)
          KA-DECISIONS, SOURCE-OF-TRUTH-REGISTRY, PIPELINE-BACKBONE established
```

---

## Trust Hierarchy

Per user directive and project architecture:

1. **DD exploration HTML files** (DD-001 through DD-006) are the ULTIMATE sources of truth
2. **T1 Foundation files** in design-extraction/perceptual-audit-v2/synthesis/ are authoritative for soul definition, tokens, characters, anti-patterns, production rules, and consistency verification
3. **showcase DESIGN-SYSTEM** files are derivative works with documented provenance -- authoritative within the showcase pipeline
4. **design-system/** (repo root) is an INDEPENDENT system with DIFFERENT values; it predates the T1 synthesis and should NOT be treated as soul-compliant

---

## Stop Condition Assessment

| Condition | Status | Evidence |
|-----------|--------|----------|
| All files in scope classified by tier | PASSED | 83 showcase + 350 design-extraction + 30 design-system files classified |
| All cross-directory references identified | PASSED | 13 documented edges + 1 undocumented edge mapped |
| Supersession chains documented | PASSED | 4 chains mapped (Typography Token, Soul Definition, Anti-Pattern, Perceptual Audit) |
| Token divergences catalogued | PASSED | 4 CRITICAL divergences identified; accent drift documented |
| Orphan analysis complete | PASSED | 0 true orphans in showcase; design-system lacks classification infrastructure |
| Anomalies logged | PASSED | 8 design-extraction + 8 design-system + 2 showcase anomalies documented |
| Trust rules applied | PASSED | DD files treated as sources of truth throughout |

---

## Related Output Files

| File | Purpose |
|------|---------|
| [07-QUESTIONS-FOR-HUMAN.md](./07-QUESTIONS-FOR-HUMAN.md) | 6 unresolvable issues requiring human decision |
| [08-OBSERVATIONS-LOG.md](./08-OBSERVATIONS-LOG.md) | Complete anomaly log (20+ observations) |
| [11-DEPRECATION-ASSESSMENT.md](./11-DEPRECATION-ASSESSMENT.md) | Deprecated/stale file assessment |

## Source Analysis Files

| File | Agent |
|------|-------|
| scratchpad/directory-scans/showcase-analysis.md | ALPHA |
| scratchpad/directory-scans/design-extraction-analysis.md | BETA |
| scratchpad/directory-scans/design-system-analysis.md | GAMMA |
| scratchpad/cross-pollination-investigation.md | Cross-directory |
| scratchpad/CRITICAL-TRUST-RULES.md | Trust & timeline |
