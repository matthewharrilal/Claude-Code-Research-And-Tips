# Reachability Report -- From T1 Foundation

**Generated:** 2026-02-05
**Method:** Forward trace from T1 foundation files through documented references, cross-directory analysis inputs (ALPHA, BETA, GAMMA agents), and cross-pollination investigation.

---

## T1 Foundation Files (6)

These are the 6 "crown jewel" synthesis files in `design-extraction/component-system/perceptual-audit-v2/synthesis/`:

| # | File | Size | Role |
|---|------|------|------|
| 1 | MASTER-SOUL-SYNTHESIS.md | 15,658 | Master soul definition ("The Unhurried Editor") |
| 2 | DESIGN-TOKEN-SUMMARY.md | 15,745 | Complete `:root {}` block with all locked CSS variables |
| 3 | CHARACTER-FAMILY-COMPLETE.md | 14,940 | All 11 named component characters with soul scores |
| 4 | PRODUCTION-RULES.md | 13,000 | 6 Universal Rules with CSS enforcement |
| 5 | ANTI-PATTERNS-REGISTRY.md | 19,493 | Complete banned properties and "The Soul Test" |
| 6 | CONSISTENCY-VERIFICATION.md | 14,843 | 10-point universal checklist + 11 component checklists |

---

## Reachability Summary

| Directory | Total Files | Connected | Orphaned | Ambiguous |
|-----------|------------|-----------|----------|-----------|
| showcase/ | 83 | 83 | 0 | 0 |
| design-extraction/ (project files) | 350 | ~270 | ~5 (true) | ~75 (archived, expected) |
| design-system/ | 30 | 0 | 30 | 0 |
| **TOTAL** | 463 | 353 | 35 | 75 |

**Key finding:** The `design-system/` directory (30 files) is entirely DISCONNECTED from the T1 foundation. It contains zero structured finding IDs (V1/V2 = 0), zero provenance markers (V4 = 0), and uses different token values (`#FF0000` vs `#E83025`). It is reachable from T1 only through the shared Instrument Serif font decision -- an undocumented edge.

---

## Connected Files (reachable from T1)

### 1 Hop from T1 (direct consumers)

These files directly reference or consume one or more of the 6 T1 synthesis files.

#### In design-extraction/ (same directory tree)

| File | Consumes Which T1 | Relationship |
|------|-------------------|--------------|
| tracking/PERCEPTUAL-TRUTHS.md | MASTER-SOUL-SYNTHESIS (source data) | Upstream feeder |
| tracking/NAMED-CHARACTERS.md | CHARACTER-FAMILY-COMPLETE (source data) | Upstream feeder |
| tracking/COLOR-TOKENS.md | DESIGN-TOKEN-SUMMARY (source data) | Upstream feeder |
| tracking/TYPOGRAPHY-TOKENS.md | DESIGN-TOKEN-SUMMARY (source data) | Upstream feeder |
| tracking/SPACING-TOKENS.md | DESIGN-TOKEN-SUMMARY (source data) | Upstream feeder |
| tracking/CONTAINER-TOKENS.md | DESIGN-TOKEN-SUMMARY (source data) | Upstream feeder |
| tracking/ANTI-PATTERNS.md | ANTI-PATTERNS-REGISTRY (source data) | Upstream feeder |
| component-system/SOUL-DEFINITION.md | MASTER-SOUL-SYNTHESIS, PRODUCTION-RULES (superseded source) | Upstream ancestor |
| component-system/ANTI-PATTERNS.md | ANTI-PATTERNS-REGISTRY (superseded source) | Upstream ancestor |
| component-system/css/variables.css | DESIGN-TOKEN-SUMMARY (CSS implementation) | Direct consumer |
| foundation/KORTAI-ESSENCE-FOUNDATION.md | MASTER-SOUL-SYNTHESIS (philosophical foundation) | Cross-reference |
| foundation/SOUL-TRANSLATION-GUIDE.md | PRODUCTION-RULES (translation reference) | Cross-reference |
| All 102 component analysis files (components/*) | All 6 T1 files (process artifacts that fed synthesis) | Upstream feeders |
| All 11 re-audit files (re-audit/*) | CONSISTENCY-VERIFICATION (verification source) | Upstream feeders |
| All 11 soul-extraction summaries (soul-extractions/*) | CHARACTER-FAMILY-COMPLETE (compact references) | Direct consumers |

#### In showcase/ (cross-directory, 13 documented edges)

| File | Consumes Which T1 | Relationship |
|------|-------------------|--------------|
| FINDINGS-INDEX.md | DESIGN-TOKEN-SUMMARY, ANTI-PATTERNS-REGISTRY | Cited as sources (lines 278, 351) |
| checkpoints/MASTER-STATE.md | All 6 synthesis + 7 tracking (full inventory) | Lists all 13 design-extraction files |
| knowledge-architecture/KA-POSITION.md | All 6 T1 files | Maps each to "AREA 1: Original Synthesis Work" |
| knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md | All 6 T1 files | Declares T1 foundation paths |
| DESIGN-SYSTEM/tokens/colors.md | DESIGN-TOKEN-SUMMARY | Token values (identical core) |
| DESIGN-SYSTEM/tokens/typography.md | DESIGN-TOKEN-SUMMARY | Token values |
| DESIGN-SYSTEM/tokens/spacing.md | DESIGN-TOKEN-SUMMARY | Token values |
| DESIGN-SYSTEM/tokens/geometry.md | DESIGN-TOKEN-SUMMARY | Token values (border-radius: 0) |
| DESIGN-SYSTEM/components/OVERVIEW.md | CHARACTER-FAMILY-COMPLETE | Condensed + enriched derivative |
| DESIGN-SYSTEM/anti-patterns/registry.md | ANTI-PATTERNS-REGISTRY | Condensed + reorganized derivative |
| explorations/density/DD-001-breathing.html | DESIGN-TOKEN-SUMMARY | CSS comment: "LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md" |
| explorations/density/DD-002 through DD-006 | DESIGN-TOKEN-SUMMARY | Same CSS token consumption |
| DESIGN-SYSTEM/provenance/stage-1-components/ | MASTER-SOUL-SYNTHESIS, CHARACTER-FAMILY-COMPLETE | Soul piece provenance documentation |

### 2 Hops from T1

Files that reference 1-hop files but not T1 directly.

#### In showcase/

| File | References | Via |
|------|-----------|-----|
| DESIGN-SYSTEM/BACKBONE.md | DD-outbound-findings, component-findings, SOUL-DISCOVERIES | Via provenance/stage-1-components/ and stage-2-density-dd/ |
| DESIGN-SYSTEM/PIPELINE-MANIFEST.md | All stage findings, soul pieces | Via BACKBONE chain |
| DESIGN-SYSTEM/patterns/PATTERN-INDEX.md | DD-F-001 through DD-F-006, COMP-F-001 through COMP-F-005 | Via DD-outbound-findings and component-findings |
| DESIGN-SYSTEM/patterns/density-patterns.md | DD explorations, BACKBONE | Via pattern definitions |
| DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | DD-F findings, BACKBONE, component-findings | Via exploration results |
| DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | All DD-F, COMP-F, R1/R3/R5 | Gate file, via outbound-findings |
| checkpoints/RESEARCH-ACTIVE.md | All R1-R5 findings, DD explorations | Via research files |
| checkpoints/SOUL-DISCOVERIES.md | Soul pieces #1-#5 | Via MASTER-STATE provenance |
| checkpoints/RETROACTIVE-AUDIT-DD-001-006.md | All 6 DD HTML files, R3 findings | Via DD explorations |
| checkpoints/COMPONENT-AUDIT-FOUNDATION.md | All 337 R-findings | Via research files |
| research/R1 through R5 + RESEARCH-SYNTHESIS | Research findings | Via RESEARCH-ACTIVE |

#### In design-extraction/

| File | References | Via |
|------|-----------|-----|
| card-system/SOUL-DEFINITION.md | Soul principles | Ancestor of component-system/SOUL-DEFINITION.md |
| card-system/research/3B-anti-patterns.md | Anti-patterns | Ancestor of ANTI-PATTERNS.md chain |
| typography-system/typography.css | Font-display token | Origin of Instrument Serif decision |
| font-research/FINAL-DECISION.md | Instrument Serif decision | Origin of typography CSS |

### 3+ Hops from T1

Files reachable through longer chains, primarily process artifacts and archives.

| Hop Level | Files | Example |
|-----------|-------|---------|
| 3 hops | showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/ (pending) | Via HANDOFF-DD-TO-OD -> STAGE-HEADER chain |
| 3 hops | showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/ (pending) | Via predecessor chain |
| 3 hops | showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/ (pending) | Via predecessor chain |
| 3 hops | showcase/DESIGN-SYSTEM/README.md (109K) | Via BACKBONE -> all stage headers |
| 3 hops | showcase/CLAUDE.md | Via RESEARCH-ACTIVE -> all process files |
| 3 hops | showcase/checkpoints/DISCOVERIES-LOG.md | Via DD explorations -> novel findings |
| 3-4 hops | design-extraction/card-system/experiments/*.html | Via card.css -> SOUL-DEFINITION chain |
| 3-4 hops | design-extraction/archive/perceptual-audit-phase-2.5/ (7 files) | Via component-system supersession chain |
| 4+ hops | design-extraction/archive/tokens/*.css | Via typography-system -> archive supersession |
| 4+ hops | design-extraction/archive/extraction/*.md | Via original screenshot analysis -> font-research |
| 4+ hops | design-extraction/archive/variations/ (26 files) | Via card-system experiments |

---

## Orphaned Files (not reachable from T1)

### Root Nodes (expected orphans -- entry points)

These are NOT problems. Root nodes are entry points that point INTO the dependency graph, not files that should be pointed TO.

| File | Directory | Role |
|------|-----------|------|
| CLAUDE.md | showcase/ | Process enforcement -- read automatically on directory entry |
| CLAUDE.md | showcase/explorations/ | Navigation file |
| CLAUDE.md | showcase/explorations/density/ | Navigation file |
| CLAUDE.md | showcase/explorations/organizational/ | Navigation file (OD placeholder) |
| CLAUDE.md | showcase/research/ | Navigation file |
| CLAUDE.md | showcase/checkpoints/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/original-research/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/stage-1-components/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/stage-2-density-dd/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/stage-3-organization-od/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/ | Navigation file |
| CLAUDE.md | showcase/DESIGN-SYSTEM/provenance/stage-5-combination-cd/ | Navigation file |
| CLAUDE.md | design-extraction/ | Entry point (Phase 1-3 only, stale for Phase 4+) |
| README.md | design-extraction/ | External entry point (stale phase table) |

### True Orphans (no inbound, no root role)

**Showcase: 0 true orphans.** Every file has at least one identifiable role. Low-hit files (SECTIONS-PROGRESS.md, REMEDIATION-CHECKPOINT.md, PERCEPTUAL-DEEPENING-SUMMARY.md, combination-rules.md) are operational trackers or stage placeholders.

**Design-extraction: ~5 true orphans.** The following have minimal or zero cross-references and no clear navigation role:

| File | Size | Assessment |
|------|------|------------|
| component-system/PROGRESS.md | 4,834 | Process tracker, self-contained |
| typography-system/PROGRESS.md | 7,829 | Process tracker, self-contained |
| card-system/PROGRESS.md | 7,619 | Process tracker, self-contained |
| archive/PROGRESS-variations.md | 4,959 | Historical tracker |
| perceptual-audit-v2/DECISION-LOG.md | 7,387 | Process decisions, no inbound refs |

These are all progress/decision tracking files that were used during active work but are not consumed by any other file. They are orphans by structure but valuable as historical artifacts.

**Design-system: 30 files -- ALL orphaned from T1.** The entire design-system/ directory is disconnected from the T1 provenance chain. See Cross-Directory Analysis for details.

### Orphan-But-Valuable

| File | Directory | Unique Content |
|------|-----------|---------------|
| 55-PAIR-CONSISTENCY-MATRIX.md | design-extraction/.../re-audit/cross-component/ | 63KB of 55 pairwise component comparisons -- unreferenced but exhaustive |
| EXECUTION-STATE.md | design-extraction/.../perceptual-audit-v2/ | 29KB state machine -- critical for process resumption |
| CONTEXT-RESTORATION.md | design-extraction/.../perceptual-audit-v2/ | 19KB session restoration guide |
| archive/tokens/effects.css | design-extraction/archive/tokens/ | DANGEROUS: contains wrong values (border-radius > 0, shadows), no inbound refs but could mislead agents |

---

## Relevance Scores (Top 20 Most Connected)

Scoring: `(Inbound Refs * 2) + Outbound Refs + (T1 Status * 10) + (Critical Flag * 5)`

| Rank | File | Directory | Inbound Refs | Outbound Refs | Score | Tier |
|------|------|-----------|-------------|---------------|-------|------|
| 1 | DD-006-fractal.html | showcase/explorations/density/ | 20+ | 1 | 51 | T1 |
| 2 | DESIGN-TOKEN-SUMMARY.md | design-extraction/.../synthesis/ | 18+ | 4 | 50 | T1 |
| 3 | RESEARCH-ACTIVE.md | showcase/checkpoints/ | 15+ | 8+ | 43 | T3 |
| 4 | SOUL-DISCOVERIES.md | showcase/checkpoints/ | 15+ | 0 | 35 | T3 |
| 5 | MASTER-SOUL-SYNTHESIS.md | design-extraction/.../synthesis/ | 12+ | 3 | 37 | T1 |
| 6 | DD-outbound-findings.md | showcase/DESIGN-SYSTEM/provenance/ | 12+ | 5 | 34 | T2 |
| 7 | BACKBONE.md | showcase/DESIGN-SYSTEM/ | 12+ | 12+ | 36 | T2 |
| 8 | PIPELINE-MANIFEST.md | showcase/DESIGN-SYSTEM/provenance/ | 10+ | 10+ | 35 | T2 |
| 9 | R3-DENSITY-DIMENSIONS.md | showcase/research/ | 15+ | 0 | 30 | T2 |
| 10 | HANDOFF-DD-TO-OD.md | showcase/DESIGN-SYSTEM/provenance/ | 8+ | 20+ | 41 | T2 |
| 11 | density-patterns.md | showcase/DESIGN-SYSTEM/patterns/ | 8+ | 6 | 22 | T2 |
| 12 | PATTERN-INDEX.md | showcase/DESIGN-SYSTEM/patterns/ | 6+ | 5 | 17 | T2 |
| 13 | CHARACTER-FAMILY-COMPLETE.md | design-extraction/.../synthesis/ | 6+ | 2 | 24 | T1 |
| 14 | ANTI-PATTERNS-REGISTRY.md | design-extraction/.../synthesis/ | 6+ | 3 | 25 | T1 |
| 15 | component-findings.md | showcase/DESIGN-SYSTEM/provenance/ | 6+ | 3 | 15 | T2 |
| 16 | README.md (109K) | showcase/DESIGN-SYSTEM/ | 2+ | 40+ | 44 | T2 |
| 17 | CLAUDE.md (showcase root) | showcase/ | 1 | 15+ | 21 | T4 |
| 18 | COMPONENT-SYSTEM/SOUL-DEFINITION.md | design-extraction/ | 12+ | 1 | 25 | T1 |
| 19 | PRODUCTION-RULES.md | design-extraction/.../synthesis/ | 4+ | 2 | 20 | T1 |
| 20 | CONSISTENCY-VERIFICATION.md | design-extraction/.../synthesis/ | 4+ | 1 | 19 | T1 |

---

## Key Observations

1. **DD-006-fractal.html is the single most-referenced artifact** across the entire system, with 20+ inbound references spanning 20+ files. It is the physical embodiment of DD-F-006 (fractal self-similarity), the meta-pattern that is mandatory for all future stages.

2. **The 6 T1 synthesis files have high relevance scores despite being "leaf" files** (few outbound refs) because they are extensively consumed downstream.

3. **DESIGN-TOKEN-SUMMARY.md is the most critical T1 file by connectivity** -- it feeds token values into both design-extraction CSS (variables.css) and showcase explorations (all 6 DD HTML files) via CSS comments.

4. **README.md (109K) has the highest outbound reference count** (40+ refs) but only 2 inbound. It is a philosophical treatise, not a structural dependency. Its high score comes from outbound reach, not centrality.

5. **design-system/ (30 files) scores 0 on reachability from T1.** It is a parallel universe with independent token values. The sole undocumented connection is the Instrument Serif font, which traces back to design-extraction/font-research/FINAL-DECISION.md but is not cited in design-system/.
