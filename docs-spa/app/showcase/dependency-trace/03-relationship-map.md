# Relationship Map -- KortAI Design System

## Generated: 2026-02-05
## Phase 1B Dependency Trace -- Human-Readable Dependency Graph
## Sources: showcase-analysis.md, design-extraction-analysis.md, design-system-analysis.md, cross-pollination-investigation.md, CRITICAL-TRUST-RULES.md

---

## The Big Picture

```
design-extraction/typography-system/ (Feb 2, Phase 1-2)
    | [Discovered: Instrument Serif, stroke treatments, type scale]
    v
design-extraction/card-system/ (Feb 2-3, Phase 3)
    | [Established: 10 Soul Principles, anti-pattern methodology]
    v
design-extraction/component-system/ (Feb 3-4, Phase 4)
    | [Synthesized: 6 Universal Rules, 11 components, soul scores]
    v
design-extraction/perceptual-audit-v2/synthesis/ * T1 FOUNDATION (Feb 4)
    | [6 files: MASTER-SOUL-SYNTHESIS, DESIGN-TOKEN-SUMMARY, CHARACTER-FAMILY-COMPLETE,
    |  PRODUCTION-RULES, ANTI-PATTERNS-REGISTRY, CONSISTENCY-VERIFICATION]
    |--------------------------------------+
    v                                      v
showcase/DESIGN-SYSTEM/ (Feb 4+)         design-system/ (INDEPENDENT, Feb 2)
    | [Tokens, patterns, provenance]         [Different values! #FF0000 vs #E83025]
    | [13 documented edges from T1]          [1 undocumented edge: Instrument Serif font]
    v
showcase/explorations/density/ * SOURCE OF TRUTH
    | [DD-001 through DD-006, applying T1 + R1-R5 research]
    v
showcase/checkpoints/ + provenance/
    [Tracking, audits, handoff documents]
```

### Flow Direction Summary

- **design-extraction -> showcase**: 13 documented + 1 undocumented = 14 edges (one-directional)
- **showcase -> design-extraction**: 0 edges (strictly no reverse flow)
- **design-extraction -> design-system**: 1 undocumented edge (Instrument Serif font choice)
- **design-system -> showcase**: 0 edges (no relationship)
- **showcase -> design-system**: 0 edges (no relationship)

---

## Critical Nodes (Highest Blast Radius)

These are the files with the highest inbound reference counts and the greatest impact if modified.

| Rank | File | Directory | Inbound Refs | Outbound Refs | Blast Radius | Tier |
|------|------|-----------|-------------|---------------|--------------|------|
| 1 | DD-006-fractal.html | showcase/explorations/density/ | 20+ | 1 (DESIGN-TOKEN-SUMMARY.md) | CRITICAL | T1 |
| 2 | MASTER-SOUL-SYNTHESIS.md | design-extraction/.../synthesis/ | 15+ | 3 (PERCEPTUAL-TRUTHS, SOUL-DEFINITION, re-audits) | CRITICAL | T1 |
| 3 | DESIGN-TOKEN-SUMMARY.md | design-extraction/.../synthesis/ | 15+ | 4 (tracking sheets) | CRITICAL | T1 |
| 4 | RESEARCH-ACTIVE.md | showcase/checkpoints/ | 15+ | All DD + OD explorations | HIGH | T3 |
| 5 | SOUL-DISCOVERIES.md | showcase/checkpoints/ | 15+ | None (standalone) | HIGH | T3 |
| 6 | BACKBONE.md | showcase/DESIGN-SYSTEM/ | 12+ | 12+ files | HIGH | T2 |
| 7 | R3-DENSITY-DIMENSIONS.md | showcase/research/ | 15+ (across both copies) | External URLs | HIGH | T2 |
| 8 | DD-outbound-findings.md | showcase/.../stage-2-density-dd/ | 12+ | BACKBONE, PIPELINE-MANIFEST, component-findings | HIGH | T2 |
| 9 | PIPELINE-MANIFEST.md | showcase/.../provenance/ | 10+ | All stage directories | HIGH | T2 |
| 10 | HANDOFF-DD-TO-OD.md | showcase/.../stage-2-density-dd/ | 8+ | 20+ files (gate file) | HIGH | T2 |

### Blast Radius Definitions

- **CRITICAL**: Modification cascades to 15+ files across multiple directory levels; all downstream work depends on this file
- **HIGH**: Modification affects 8+ files; most downstream work references this file
- **MODERATE**: Modification affects 3-7 files; localized impact
- **LOW**: Modification affects 0-2 files; isolated

---

## Edge Registry (All Documented Cross-Directory Edges)

### Cross-Directory Edges: design-extraction -> showcase (13 documented + 1 undocumented)

| ID | Source (design-extraction) | Target (showcase) | Type | Evidence | Documented? |
|----|---------------------------|-------------------|------|----------|-------------|
| E-001 | perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md | DESIGN-SYSTEM/provenance/stage-1-components/ | Soul definition source | SOURCE-OF-TRUTH-REGISTRY.md lines 21-51 | YES |
| E-002 | perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md | DESIGN-SYSTEM/tokens/*.md | Token values (identical core) | FINDINGS-INDEX.md line 278 | YES |
| E-003 | perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md | explorations/density/DD-*.html | CSS variable values | CSS comment: "LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md" | YES |
| E-004 | perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md | DESIGN-SYSTEM/components/OVERVIEW.md | Character names + scores (condensed + enriched) | SOURCE-OF-TRUTH-REGISTRY.md lines 28-30 | YES |
| E-005 | perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md | DESIGN-SYSTEM/anti-patterns/registry.md | Anti-pattern rules (condensed + reorganized) | FINDINGS-INDEX.md line 351 | YES |
| E-006 | perceptual-audit-v2/synthesis/PRODUCTION-RULES.md | DESIGN-SYSTEM/ (general) | Implementation guidelines | SOURCE-OF-TRUTH-REGISTRY.md | YES |
| E-007 | perceptual-audit-v2/synthesis/CONSISTENCY-VERIFICATION.md | DESIGN-SYSTEM/ (general) | Verification checklists | SOURCE-OF-TRUTH-REGISTRY.md | YES |
| E-008 | perceptual-audit-v2/tracking/COLOR-TOKENS.md | DESIGN-SYSTEM/tokens/colors.md | Color reference (some drift in secondary values) | checkpoints/MASTER-STATE.md lines 209-226 | YES |
| E-009 | perceptual-audit-v2/tracking/TYPOGRAPHY-TOKENS.md | DESIGN-SYSTEM/tokens/typography.md | Typography reference | checkpoints/MASTER-STATE.md | YES |
| E-010 | perceptual-audit-v2/tracking/SPACING-TOKENS.md | DESIGN-SYSTEM/tokens/spacing.md | Spacing reference | checkpoints/MASTER-STATE.md | YES |
| E-011 | perceptual-audit-v2/tracking/CONTAINER-TOKENS.md | DESIGN-SYSTEM/tokens/geometry.md | Container/geometry reference | checkpoints/MASTER-STATE.md | YES |
| E-012 | perceptual-audit-v2/tracking/PERCEPTUAL-TRUTHS.md | checkpoints/SOUL-DISCOVERIES.md | Soul piece source data | KA-POSITION.md lines 80-83 | YES |
| E-013 | perceptual-audit-v2/tracking/NAMED-CHARACTERS.md | DESIGN-SYSTEM/components/OVERVIEW.md | Character name source | SOURCE-OF-TRUTH-REGISTRY.md | YES |
| E-014 | typography-system/typography.css | design-system/src/styles/tokens.css | UNDOCUMENTED: Instrument Serif font choice | tokens.css uses 'Instrument Serif' discovered in typography research; no provenance marker | NO |

### Cross-Directory Edges: design-extraction -> design-system (1 undocumented)

| ID | Source | Target | Type | Evidence | Documented? |
|----|--------|--------|------|----------|-------------|
| E-014 | typography-system/typography.css | design-system/src/styles/tokens.css | Font family choice | Instrument Serif appears in both; typography-system is the discovery origin | NO |

### Confirmed Non-Edges

| Direction | Evidence |
|-----------|----------|
| showcase -> design-extraction | Zero reverse references found in any showcase file |
| design-system -> showcase | Zero references; completely different token values |
| showcase -> design-system | Zero references; no awareness of design-system/ |
| design-extraction -> design-system (beyond E-014) | Different token values, different type scales, no shared references |

---

## Supersession Chains (Within Directories)

### Chain 1: Typography Token Chain

```
design-extraction/archive/tokens/typography.css
    Value: --font-display: 'Bebas Neue'
    Status: SUPERSEDED
    Evidence: README.md: "Superseded by typography-system"
    |
    v
design-extraction/typography-system/typography.css
    Value: --font-display: 'Instrument Serif'
    Status: CURRENT (for typography-system scope)
    Evidence: Font research FINAL-DECISION.md (30/40 match score)
    |
    v
design-extraction/.../synthesis/DESIGN-TOKEN-SUMMARY.md
    Value: --font-display: 'Instrument Serif', Georgia, serif
    Status: T1_CANONICAL (locked)
    Evidence: T1 Foundation synthesis, Feb 4
```

### Chain 2: Soul Definition Chain

```
design-extraction/card-system/SOUL-DEFINITION.md
    Content: 10 soul principles from card research (10KB)
    Status: SUPERSEDED at system level
    Evidence: card.css line 3 references this as source; component-system expanded it
    |
    v
design-extraction/component-system/SOUL-DEFINITION.md
    Content: 6 Universal Rules + component-specific rules (58KB)
    Status: REFINED-INTO
    Evidence: Full 11-component audit revealed needs beyond cards
    |
    v
design-extraction/.../synthesis/MASTER-SOUL-SYNTHESIS.md
    Content: "The Unhurried Editor" + complete soul definition (16KB)
    Status: T1_CANONICAL (locked, authoritative)
    Evidence: T1 Foundation synthesis, Feb 4; used in all DD explorations
```

### Chain 3: Anti-Pattern Knowledge Chain

```
design-extraction/card-system/research/3B-anti-patterns.md
    Content: Card-focused anti-patterns (17KB)
    Status: EXPANDED
    Evidence: Initial anti-pattern research from card system
    |
    v
design-extraction/component-system/ANTI-PATTERNS.md
    Content: All-component anti-patterns (56KB)
    Status: CONSOLIDATED
    Evidence: V8 deprecation markers; full component audit expanded scope
    |
    v
design-extraction/.../synthesis/ANTI-PATTERNS-REGISTRY.md
    Content: Authoritative anti-pattern registry (19KB, T1)
    Status: T1_CANONICAL (locked, authoritative)
    Evidence: "The Soul Test" + universal banned properties; consolidates 56KB into 19KB
```

### Chain 4: Perceptual Audit Chain

```
design-extraction/component-system/archive/perceptual-audit-phase-2.5/
    Content: 7 soul pieces, initial audit methodology (8 files)
    Status: SUPERSEDED
    Evidence: MASTER-INDEX.md line 141
    |
    v
design-extraction/component-system/perceptual-audit-v2/
    Content: 5 refined soul pieces, full 11-component audit, 6 T1 synthesis files (176 files)
    Status: T1_CANONICAL (locked, authoritative)
    Evidence: Complete Phase 4A-E output; all showcase work derives from this
```

---

## Within-Directory Hub Nodes

### showcase/ (Top 10 Most-Referenced Within Directory)

| Rank | File | Inbound Refs | Role |
|------|------|-------------|------|
| 1 | explorations/density/DD-006-fractal.html | 20+ | Highest-referenced exploration; meta-pattern foundation |
| 2 | checkpoints/RESEARCH-ACTIVE.md | 15+ | Central tracking; mandatory reading per CLAUDE.md |
| 3 | checkpoints/SOUL-DISCOVERIES.md | 15+ | 5 non-negotiable soul constraints |
| 4 | DESIGN-SYSTEM/BACKBONE.md | 12+ | Master pipeline narrative |
| 5 | DESIGN-SYSTEM/provenance/DD-outbound-findings.md | 12+ | DD finding definitions (DD-F-001 to DD-F-018) |
| 6 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | 10+ | Master finding registry |
| 7 | DESIGN-SYSTEM/provenance/.../HANDOFF-DD-TO-OD.md | 8+ | Gate file between stages |
| 8 | DESIGN-SYSTEM/patterns/density-patterns.md | 8+ | 6 validated density patterns |
| 9 | DESIGN-SYSTEM/README.md (109KB) | 6+ | Philosophical anchor ("THE KORTAI DESIGN MIND") |
| 10 | research/R3-DENSITY-DIMENSIONS.md | 15+ | Foundational DD research (across both copies) |

### design-extraction/ (Top 10 Within Directory)

| Rank | File | Inbound Refs | Role |
|------|------|-------------|------|
| 1 | perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md | 15+ | T1 soul authority |
| 2 | perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md | 15+ | T1 token authority |
| 3 | component-system/SOUL-DEFINITION.md (58KB) | 12+ | Central soul document (pre-T1) |
| 4 | perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md | 10+ | T1 character authority |
| 5 | perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md | 10+ | T1 anti-pattern authority |
| 6 | perceptual-audit-v2/synthesis/PRODUCTION-RULES.md | 8+ | T1 implementation rules |
| 7 | perceptual-audit-v2/synthesis/CONSISTENCY-VERIFICATION.md | 8+ | T1 verification checklists |
| 8 | perceptual-audit-v2/tracking/PERCEPTUAL-TRUTHS.md | 8+ | Source data for MASTER-SOUL-SYNTHESIS |
| 9 | typography-system/typography.css | 6+ | Origin of font stack |
| 10 | component-system/css/variables.css | 6+ | CSS variable origin for component system |

### design-system/ (Repo Root)

**Note: No cross-references exist -- all files are self-contained.**

The design-system/ directory contains 30 files with zero structured finding IDs (V1/V2 = 0), zero provenance markers (V4 = 0), and zero deprecation markers (V8 = 0). Files reference each other only through CSS imports (tokens.css -> typography.css -> index.css) and JSX imports. No file in design-system/ references any file in showcase/ or design-extraction/.

| File | Internal Refs | Notes |
|------|--------------|-------|
| src/styles/tokens.css | Imported by index.css, all themes | Root token file; 85 custom properties |
| src/styles/typography.css | Imported by index.css | Font definitions |
| src/styles/index.css | Main entry point | Aggregates tokens + typography + themes |
| docs/README.md | References all component paths | Only documentation file that maps the system |

**Key observation:** design-system/ has 8 different token sources of truth (base namespace, --blend-*, --mb-*, plus 3 JS inline objects) with no reconciliation mechanism. This contrasts sharply with showcase's single-source provenance chain.

---

## Intentional Duplicate Registry

The showcase directory maintains 15 intentional duplicates following a documented operational/archival sync protocol.

| Original (Operational) | Copy (Archival) | Size Match | Purpose |
|------------------------|-----------------|------------|---------|
| research/R1-R5 + RESEARCH-SYNTHESIS (6 files) | DESIGN-SYSTEM/provenance/original-research/ (6 files) | YES (all identical) | Chain integration |
| checkpoints/SOUL-DISCOVERIES.md | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | YES (10,683 bytes) | Archival sync |
| checkpoints/RESEARCH-ACTIVE.md | DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md | YES (30,252 bytes) | Archival sync |
| checkpoints/FOUNDATION-REMEDIATION-SYNTHESIS.md | DESIGN-SYSTEM/provenance/stage-1-components/ | YES (11,420 bytes) | Stage archive |
| checkpoints/DD-REAUDIT-CHECKPOINT.md | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | YES (10,749 bytes) | Stage archive |
| checkpoints/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | YES (24,673 bytes) | Stage archive |

**Sync protocol:** checkpoints/ = operational (live), provenance/ = archival (synced after phase completion). Documented in checkpoints/CLAUDE.md.

---

## Anomalies and Warnings

| ID | Anomaly | Severity | Location | Impact |
|----|---------|----------|----------|--------|
| A-001 | archive/tokens/effects.css defines non-zero border-radius and box-shadow tokens | DANGEROUS | design-extraction/archive/tokens/ | Agent reading without context would produce soul-violating CSS |
| A-002 | design-extraction/CLAUDE.md does not reference Phase 4 (perceptual-audit-v2) | HIGH | design-extraction/CLAUDE.md | Agents entering via CLAUDE.md miss the 6 T1 Foundation files |
| A-003 | design-extraction/README.md phase table is stale | MODERATE | design-extraction/README.md | Lists "Phase 3: Color System" as NEXT; Phase 4 is complete |
| A-004 | R2-CREATIVE-LAYOUTS.md finding count discrepancy | LOW | showcase/research/ | CLAUDE.md claims 78 findings but tables show 27; DISCOVERIES-LOG references R2-079 |
| A-005 | medieval-blend.css sets tokens on :root | HIGH | design-system/src/styles/themes/ | Loading this theme globally corrupts base tokens |
| A-006 | 205 node_modules files committed | LOW | design-extraction/*/tests/ | Should be gitignored; inflates file counts |
| A-007 | README.md (109K) contains hypothetical OD examples | MODERATE | showcase/DESIGN-SYSTEM/ | OD-F-007/008/009 are illustrative, not completed work |
| A-008 | Token drift in secondary values | LOW | Between design-extraction tracking sheets and showcase tokens | accent-amber, accent-purple, bg-info, bg-tip differ |

---

## Summary Statistics

| Metric | showcase | design-extraction | design-system |
|--------|----------|-------------------|---------------|
| Total files | 83 | 350 (excl. 205 junk) | 30 |
| T1 files | 10 | 17 | 0 |
| T2 files | 25 | ~140 | 0 |
| Tracking/Operational | 18 | ~120 (S-tier) | 0 |
| Navigation (CLAUDE.md etc.) | 15 | 2 | 4 (documentation) |
| Synced duplicates | 15 | 0 | 0 |
| Orphan candidates | 0 | 205 (junk only) | 0 |
| Cross-directory outbound edges | 0 | 14 | 0 |
| Cross-directory inbound edges | 13 | 0 | 1 |
| Soul compliance | YES (DD HTML verified) | YES (T1 defines soul) | FAILS (4 critical divergences) |
