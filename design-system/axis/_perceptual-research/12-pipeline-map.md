# 12: Complete Provenance Pipeline Map

## Purpose

This document is a comprehensive map of the entire KortAI Design System provenance pipeline. It covers every stage, every file, every dependency relationship, the provenance chain format, accumulated identity evolution, research layer mapping, and outbound findings format. A new agent reading only this document can orient within the full pipeline.

---

## 1. The Pipeline at a Glance

```
ORIGINAL RESEARCH (337 findings across R-1 to R-5)
       |
       v
STAGE 1: COMPONENT FOUNDATION (COMP-F-001 to COMP-F-021)
       | ENABLED (soul-compliant foundation, 54% -> 92%)
       | 5 Soul Pieces discovered
       v
STAGE 2: DENSITY EXPLORATION / DD (DD-F-001 to DD-F-018)
       | CONSTRAINED (density vocabulary + quality bar + DD-F-006 fractal)
       | GENERATED (18 outbound findings)
       v
STAGE 3: ORGANIZATION EXPLORATION / OD (OD-F-001 to OD-F-013 + OD-F-MP-001 + OD-F-PR-001 + OD-F-FL-001 + OD-F-AP-001)
       | CONSTRAINED (org IS density + OD-F-MP-001 meta-pattern + quality bar)
       | GENERATED (17 outbound findings)
       v
STAGE 4: AXIS EXPLORATION / AD (AD-F-001 to AD-F-028)
       | CONSTRAINED (axis IS density IS org + 5x5 transition grammar + DD-F-006 5-scale model)
       | GENERATED (28 outbound findings)
       | ELEVATED (DD-F-012: axis IS density, not "serves")
       v
STAGE 5: COMBINATION EXPLORATION / CD (PENDING)
       | Will consume AD-F-### + transition grammar
       | Primary research: R-5 (39 findings)
       v
MIGRATION
       | Every pattern traces to provenance
       | Every page cites applicable findings
```

---

## 2. Research Layer (R-1 through R-5)

The research layer is the foundational evidence base. 337 original findings across 5 research streams, each mapped to a primary pipeline stage.

### Research Files

All located at: `showcase/research/`

| File | Count | Primary Stage | Secondary Stages | Application Rate |
|------|-------|---------------|-----------------|-----------------|
| `R1-DOCUMENTATION-PATTERNS.md` | 28 | Stage 3 (OD) | DD, AD, CD | ~79% in OD |
| `R2-CREATIVE-LAYOUTS.md` | 27 | Stage 4 (AD) | CD | ~67% in AD (was 0% in OD) |
| `R3-DENSITY-DIMENSIONS.md` | 51 | Stage 2 (DD) | OD, AD, CD | ~76% in DD |
| `R4-AXIS-INNOVATIONS.md` | 192 | Stage 4 (AD) | CD | PRIMARY for AD |
| `R5-COMBINATION-THEORY.md` | 39 | Stage 5 (CD) | OD, AD | ~30% partial |
| `RESEARCH-SYNTHESIS.md` | (cross-ref) | All | All | Cross-stream synthesis |

Copies in provenance chain: `DESIGN-SYSTEM/provenance/original-research/` (mirrors of the same R-files plus CLAUDE.md)

### Research-to-Stage Mapping (from BACKBONE.md Section 7)

| Research | Stage 1 | Stage 2 (DD) | Stage 3 (OD) | Stage 4 (AD) | Stage 5 (CD) |
|----------|---------|--------------|--------------|--------------|--------------|
| R-1 (28) | -- | Partial | PRIMARY | Secondary | Secondary |
| R-2 (27) | -- | Partial | Secondary (0%) | Secondary (~67%) | Secondary |
| R-3 (51) | Informed | PRIMARY (~76%) | Reference | Reference | Reference |
| R-4 (192) | -- | Partial | Reference | PRIMARY | Reference |
| R-5 (39) | -- | Partial | Secondary | Secondary | PRIMARY |

### Bespoke Research (EXT-*)

Created during pipeline execution rather than upfront. Total: 94 unique EXT-* findings + 33 EXT-AXIS-* findings.

| Research Stream | Stage Created | Count | Application Rate |
|----------------|---------------|-------|-----------------|
| EXT-CONV-* | OD (Wave 1) | 5 | 100% |
| EXT-DENSITY-* | OD (Wave 1) | 3 | 100% |
| EXT-TASK-* | OD (Wave 2) | 12 | 100% |
| EXT-CONF-* | OD (Wave 3) | 12 | 100% |
| EXT-SPAT-* | OD (Wave 2) | 12 | 100% |
| EXT-CREATIVE-* | OD (Wave 3) | 9 | 100% |
| (other EXT-*) | OD (various) | ~41 | 100% |
| EXT-AXIS-* | AD | 33 | 100% |

Registry: `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md`

---

## 3. Stage-by-Stage Inventory

### Stage 1: Component Foundation

**Status:** COMPLETE (54% -> ~92% soul compliance)

**What it did:** Audited 11 React components in `docs-spa/components/*.tsx` against the KortAI reference aesthetic. Discovered 5 perceptual soul pieces. Fixed `globals.css` violations.

**Consumed:**
- Component TSX files (`docs-spa/components/*.tsx`)
- `docs-spa/app/globals.css`
- KortAI reference aesthetic (mental model)

**Produced:**

| Output | Location |
|--------|----------|
| 5 Soul Pieces | `checkpoints/SOUL-DISCOVERIES.md` |
| COMP-F-001 to COMP-F-021 | `DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md` |
| Remediation Synthesis | `DESIGN-SYSTEM/provenance/stage-1-components/FOUNDATION-REMEDIATION-SYNTHESIS.md` |
| 11 compliant components | `docs-spa/components/*.tsx` |
| 3 globals.css fixes | `docs-spa/app/globals.css` |

**Provenance directory:** `DESIGN-SYSTEM/provenance/stage-1-components/`

| File | Role |
|------|------|
| `STAGE-HEADER.md` | Stage narrative + YAML frontmatter chain |
| `component-findings.md` | COMP-F-### finding registry |
| `FOUNDATION-REMEDIATION-SYNTHESIS.md` | Full audit record |
| `CLAUDE.md` | Directory navigation |

**5 Soul Pieces (immutable DNA):**
1. COMP-F-001: Sharp Edges Command Authority (`border-radius: 0`)
2. COMP-F-002: The Archivist Speaks in Serif (Instrument Serif italic)
3. COMP-F-003: Callouts Share Family DNA (2-zone structure, 4px left accent)
4. COMP-F-004: Shadows Lie About Depth (`box-shadow: none`)
5. COMP-F-005: Squares Signal System (`border-radius: 0` on step indicators)

---

### Stage 2: Density Exploration (DD)

**Status:** COMPLETE (6 explorations, 34.5/40 avg, DD-F-006 FRACTAL = meta-pattern)

**What it did:** Explored how components breathe together on a page. 6 density hypotheses tested via HTML exploration files.

**Consumed:**
- 5 Soul Pieces
- COMP-F-001 to COMP-F-008
- R-3 Density Dimensions (51 findings) -- PRIMARY
- 11 compliant components

**Produced:**

| Output | Location |
|--------|----------|
| 6 Density Patterns | `DESIGN-SYSTEM/patterns/density-patterns.md` |
| DD-F-001 to DD-F-018 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` |
| HANDOFF-DD-TO-OD | `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` |
| Re-audit Synthesis | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` |
| Quality bar: 34.5/40 | Standard for future stages |

**6 Exploration Files:** `explorations/density/`

| File | Pattern | Score |
|------|---------|-------|
| `DD-001-breathing.html` | PULSE | 33/40 |
| `DD-002-gradient.html` | CRESCENDO | 35/40 |
| `DD-003-islands.html` | ISLANDS | 32/40 |
| `DD-004-layers.html` | GEOLOGICAL | 35/40 |
| `DD-005-rivers.html` | TIDAL/RIVERS | 36/40 |
| `DD-006-fractal.html` | FRACTAL (meta-pattern) | 36/40 (HIGHEST) |

**Provenance directory:** `DESIGN-SYSTEM/provenance/stage-2-density-dd/`

| File | Role |
|------|------|
| `STAGE-HEADER.md` | Stage narrative + YAML frontmatter chain |
| `DD-outbound-findings.md` | DD-F-### finding registry (CRITICAL) |
| `HANDOFF-DD-TO-OD.md` | Gate file for OD (CRITICAL) |
| `DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` | Full audit record |
| `DD-REAUDIT-CHECKPOINT.md` | Audit progress tracking |
| `CLAUDE.md` | Directory navigation |

**Key DD-F Findings:**
- DD-F-001: PULSE for alternating rhythm
- DD-F-002: CRESCENDO for progressive build
- DD-F-003: ISLANDS for task groups
- DD-F-004: GEOLOGICAL for hierarchy
- DD-F-005: TIDAL/RIVERS width signal
- DD-F-006: FRACTAL meta-pattern (MANDATORY for all subsequent stages)
- DD-F-010: Organization must serve density (ELEVATED by OD to "IS")
- DD-F-012: Density implies axis preferences (ELEVATED by AD to "IS")
- DD-F-013: Component density tolerance (KEY for CD)
- DD-F-014: Max 2 callouts per viewport
- DD-F-015: No traffic-light anti-pattern
- DD-F-016: Consistent 4px borders (initially violated by 2px epidemic)

---

### Stage 3: Organization Exploration (OD)

**Status:** COMPLETE (6 explorations, ~35.5/40 avg v3, 17 findings, 94 EXT-*, re-enriched by 43 agents)

**What it did:** Explored cognitive rhythm -- how information is organized. Crown jewel: OD-F-005 "Organization IS Density" (same phenomenon, two perspectives).

**Consumed:**
- HANDOFF-DD-TO-OD.md (gate file)
- DD-F-001 to DD-F-018 (100% consumed)
- COMP-F-001 to COMP-F-021 (100% inherited)
- R-1 Documentation Patterns (28 findings, ~79% applied)
- R-5 Combination Theory (39 findings, secondary)
- EXT-* bespoke research (94 findings created during OD)
- ACCUMULATED-IDENTITY-v1.md (539 lines)

**Produced:**

| Output | Location |
|--------|----------|
| 6 Org Patterns | `DESIGN-SYSTEM/patterns/organizational-patterns.md` |
| OD-F-001 to OD-F-013 + 4 special | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` |
| OD Synthesis | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md` |
| OD Audit Synthesis | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` |
| OD Convention Spec | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` (468 lines) |
| OD Research Gate | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` |
| HANDOFF-OD-TO-AD | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` |
| EXT Research Registry | `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` |

**6 Exploration Files:** `explorations/organizational/`

| File | Org Pattern | Density Pairing | Score (v3) |
|------|-------------|-----------------|------------|
| `OD-001-conversational.html` | CONVERSATIONAL | PULSE + TIDAL | 37/40 |
| `OD-002-narrative.html` | NARRATIVE | CRESCENDO | 35/40 |
| `OD-003-task-based.html` | TASK-BASED | ISLANDS | ~35/40 |
| `OD-004-confidence.html` | CONFIDENCE | GEOLOGICAL | 34/40 |
| `OD-005-spatial.html` | SPATIAL | WAVE | 35/40 |
| `OD-006-creative.html` | CREATIVE (crown jewel) | ALL (FRACTAL) | 37/40 |

**Provenance directory:** `DESIGN-SYSTEM/provenance/stage-3-organization-od/`

| File | Role |
|------|------|
| `STAGE-HEADER.md` | Stage narrative + YAML chain |
| `OD-outbound-findings.md` | 17 OD-F findings (CRITICAL) |
| `OD-SYNTHESIS.md` | Cross-OD synthesis |
| `OD-AUDIT-SYNTHESIS.md` | Audit record (89 findings, 16 fixes) |
| `OD-CONVENTION-SPEC.md` | Convention spec unifying 3 quality dialects |
| `OD-RESEARCH-GATE.md` | R-1 finding-by-finding mapping |
| `HANDOFF-OD-TO-AD.md` | Gate file for AD (CRITICAL) |
| `CLAUDE.md` | Directory navigation |

**Key OD-F Findings:**
- OD-F-001 to OD-F-013: 13 pattern findings
- OD-F-MP-001: Organization = Density Identity (meta-pattern, CROWN JEWEL)
- OD-F-PR-001: Bespoke research outperforms broad research
- OD-F-FL-001: Organizational patterns imply axis preferences (transitive chain)
- OD-F-AP-001: 2px border epidemic (108 CSS declarations, FIXED)

**Working artifacts:** `knowledge-architecture/_od-reenrichment/`, `knowledge-architecture/_od-audit-scratchpad/`

---

### Stage 4: Axis Exploration (AD)

**Status:** COMPLETE (6 explorations, 36.2/40 avg, 28 findings, 0 soul violations)

**What it did:** Explored spatial layout -- how components are positioned on the page. Crown jewel: AD-F-023 ATTENTION TOPOLOGY meta-equivalence (axis IS organization IS density).

**Consumed:**
- HANDOFF-OD-TO-AD.md (gate file)
- 17 OD-F findings
- 18 DD-F findings
- 21 COMP-F findings
- R-4 Axis Innovations (192 findings) -- PRIMARY
- R-2 Creative Layouts (27 findings, ~67% applied -- up from 0% in OD)
- 33 EXT-AXIS-* bespoke findings
- ACCUMULATED-IDENTITY-v1.1.md

**Produced:**

| Output | Location |
|--------|----------|
| 28 AD-F findings | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` |
| AD Synthesis | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` |
| AD Audit Synthesis | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` |
| HANDOFF-AD-TO-CD | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` |
| ACCUMULATED-IDENTITY-v2 | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` |
| 6 HTML explorations | `explorations/axis/AD-001 to AD-006` (~467KB total) |
| AD Convention Spec | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` (822 lines) |
| Transition Grammar | 5x5 matrix (in AD-SYNTHESIS) |

**6 Exploration Files:** `explorations/axis/`

| File | Axis Pattern | OD Pairing | Density Pairing | Score |
|------|-------------|------------|-----------------|-------|
| `AD-001-z-pattern.html` | Z-PATTERN | Conversational | PULSE + TIDAL | 36/40 |
| `AD-002-f-pattern.html` | F-PATTERN | Progressive | CRESCENDO + WAVE | 35/40 |
| `AD-003-bento-grid.html` | BENTO GRID | Task-Based | ISLANDS + BOOKENDS | 37/40 |
| `AD-004-spiral.html` | SPIRAL | Confidence | GEOLOGICAL + CRESCENDO | 36/40 |
| `AD-005-choreography.html` | CHOREOGRAPHY | Parallel | WAVE + BOOKENDS | 35/40 |
| `AD-006-compound.html` | COMPOUND | Fractal | ALL PATTERNS | 38/40 (HIGHEST) |

**Provenance directory:** `DESIGN-SYSTEM/provenance/stage-4-axis-ad/`

| File | Role |
|------|------|
| `STAGE-HEADER.md` | Stage narrative + YAML chain |
| `AD-outbound-findings.md` | 28 AD-F findings (CRITICAL) |
| `AD-SYNTHESIS.md` | 12-section cross-exploration synthesis |
| `AD-AUDIT-SYNTHESIS.md` | Audit synthesis (47 actionable items, 23 reports) |
| `HANDOFF-AD-TO-CD.md` | Gate file for CD (CRITICAL) |
| `CLAUDE.md` | Directory navigation |

**Key AD-F Findings (28 total: 12 Class A confirming, 12 Class B extending, 4 Class C bounding):**
- AD-F-004: 3-Way Unification Validated (axis, org, density are not independent)
- AD-F-023: Meta-Equivalence: ATTENTION TOPOLOGY (all equivalence mechanisms converge)
- AD-F-024: Compound is SEQUENTIAL, not simultaneous
- AD-F-025: Transition grammar between density zones (5x5 matrix)
- AD-F-027: DD-F-006 fractal confirmed at 5 scales
- AD-F-028: No 6th scale exists (bounds the model)

**Working artifacts:** `knowledge-architecture/_ad-execution/` (60+ files including research packages, audit reports, identity deltas, scribe reports)

---

### Stage 5: Combination Exploration (CD)

**Status:** PENDING (blocked on AD completion -- now unblocked)

**What it will do:** Explore component chemistry -- how components work together in combinations.

**Will consume:**
- HANDOFF-AD-TO-CD.md (gate file)
- AD-F-001 to AD-F-028
- All prior OD-F, DD-F, COMP-F findings
- R-5 Combination Theory (39 findings) -- PRIMARY
- ACCUMULATED-IDENTITY-v2.md

**Planned explorations:** `explorations/combination/` (not yet created)

| Planned | Concept |
|---------|---------|
| CD-001 | Reasoning Inside Code |
| CD-002 | Task Containing Decision |
| CD-003 | File Tree with Callouts |
| CD-004 | Essence as Background |
| CD-005 | All Callouts as Conversation |
| CD-006 | Creative |

**Will produce:**
- CD-F-### findings
- Combination Rules (`DESIGN-SYSTEM/patterns/combination-rules.md` -- currently placeholder)
- 6 combination pattern validations
- HANDOFF to Migration

**Key constraint from DD:** DD-F-013 (component density tolerance -- some components compress well, others need breathing room)

**Provenance directory:** `DESIGN-SYSTEM/provenance/stage-5-combination-cd/` (placeholder)

| File | Status |
|------|--------|
| `STAGE-HEADER.md` | PLACEHOLDER |
| `CLAUDE.md` | PLACEHOLDER |
| All other files | PENDING |

---

### Migration (Terminal Phase)

Migration is the final phase after CD. Every migrated page must:
- Trace to pattern provenance
- Cite applicable findings
- Verify soul compliance
- Apply fractal self-similarity at 5 scales

Guide: `DESIGN-SYSTEM/guides/migration-guide.md`

---

## 4. Dependencies Between Stages (Transitive Chain)

### Forward Chain (Build Order)

```
Stage 1 ──ENABLES──> Stage 2 ──CONSTRAINS──> Stage 3 ──CONSTRAINS──> Stage 4 ──CONSTRAINS──> Stage 5 ──> Migration
  |                    |                       |                       |
  |                    |                       |                       +-- AD-F-### (28 findings)
  |                    |                       +-- OD-F-### (17 findings)
  |                    +-- DD-F-### (18 findings)
  +-- COMP-F-### (21 findings) + 5 Soul Pieces
```

### What Flows Forward (Accumulated at Each Stage)

| At Stage | Total Accumulated Constraints |
|----------|-------------------------------|
| Stage 1 | 5 soul pieces + 21 COMP-F findings + locked tokens |
| Stage 2 | Stage 1 + 18 DD-F findings + 6 density patterns + quality bar (34.5/40) |
| Stage 3 | Stage 2 + 17 OD-F findings + 6 org patterns + 94 EXT-* + convention spec |
| Stage 4 | Stage 3 + 28 AD-F findings + 6 axis patterns + 33 EXT-AXIS-* + transition grammar + ACCUMULATED-IDENTITY-v2 |
| Stage 5 | Stage 4 + CD-F-### (TBD) + combination rules |

### Gate Files (Mandatory First-Reads)

Each stage has a handoff/gate file that the NEXT stage must read FIRST before doing any work.

| Gate File | Location | Direction |
|-----------|----------|-----------|
| (none) | Stage 1 has no predecessor | -- |
| `HANDOFF-DD-TO-OD.md` | `provenance/stage-2-density-dd/` | DD -> OD |
| `HANDOFF-OD-TO-AD.md` | `provenance/stage-3-organization-od/` | OD -> AD |
| `HANDOFF-AD-TO-CD.md` | `provenance/stage-4-axis-ad/` | AD -> CD |

### The Transitive Chain (Key Discovery)

The transitive chain validates that organizational pattern, density pattern, and axis layout are NOT three independent dimensions -- they are ONE phenomenon:

```
Organizational Pattern (OD-F-005)
    implies -> Density Pattern (DD-F-001 through DD-F-005)
    implies -> Axis Preference (DD-F-012, ELEVATED by AD)
```

Validated through 5 equivalence mechanisms:
- **Temporal:** Z-sweep cycle IS one PULSE beat (AD-001)
- **Spatial:** Grid cells ARE dense islands (AD-003)
- **Proportional:** Typography compression IS CRESCENDO (AD-002)
- **Kinetic:** Direction change IS density state change (AD-005)
- **Gravitational:** Border-weight gradient IS geological encoding (AD-004)

Meta-equivalence: **ATTENTION TOPOLOGY** (AD-F-023)

---

## 5. Provenance Chain Format (3 Layers)

### Layer 1: Inline Threading Headers (490 files)

Per-file metadata embedded in comments at the top of every source file. Created in Phase 2B.

Format varies by file type:
- `.md` files: HTML comment `<!-- ... -->`
- `.css` files: Block comment `/* ... */`
- `.tsx` files: Block comment `/* ... */`
- `.mdx` files: JSX comment `{/* ... */}`

Standard sections within each header:
1. WHY THIS EXISTS
2. THE QUESTION THIS ANSWERS
3. STATUS
5. BUILT ON (dependency table)
6. MUST HONOR
8. CONSUMED BY (consumer table)
10. DIAGNOSTIC QUESTIONS

### Layer 2: Light Provenance Sections (244 files)

Lighter metadata linking files to their parent phase and T1 synthesis. Created in Phase 2D. Acts as bridge between per-file graph and formal chain.

Placement: AFTER the inline threading header closing comment, before main content.

### Layer 3: Formal Chain Documents (provenance/ directory)

Curated narrative documents per pipeline stage. These are the authoritative "what happened" records.

Standard documents per stage:

| Document | Purpose | Present in |
|----------|---------|------------|
| `STAGE-HEADER.md` | What the stage did + YAML frontmatter chain | All 5 stages |
| `*-outbound-findings.md` | Formal finding declarations | Stages 1-4 |
| `*-SYNTHESIS.md` | Cross-exploration analysis | Stages 1-4 |
| `*-AUDIT-SYNTHESIS.md` | Quality gate results | Stages 2-4 |
| `HANDOFF-*-TO-*.md` | Briefing for next stage | Stages 2-4 |
| `*-RESEARCH-GATE.md` | Research filtering decisions | Stages 3-4 |
| `*-CONVENTION-SPEC.md` | Convention specification | Stages 3-4 |
| `CLAUDE.md` | Directory navigation | All 5 stages |

### How the Layers Relate

```
Zoom Level:       Pipeline       Stage            Finding          File           Forward
Document:      BACKBONE.md -> STAGE-HEADER -> outbound-findings -> inline headers -> HANDOFF
```

- Inline headers = distributed dependency graph (who depends on whom)
- Formal chain documents = authoritative narrative (what happened, why, what it means)
- Light sections = bridge connecting individual files to the larger story

---

## 6. YAML Frontmatter Stage Chain

Each STAGE-HEADER.md has YAML frontmatter that creates a linked list through the pipeline:

```yaml
# Stage 1
pipeline_stage: 1
predecessor: null
successor: provenance/stage-2-density-dd/STAGE-HEADER.md

# Stage 2
pipeline_stage: 2
predecessor: provenance/stage-1-components/STAGE-HEADER.md
successor: provenance/stage-3-organization-od/STAGE-HEADER.md

# Stage 3
pipeline_stage: 3
predecessor: provenance/stage-2-density-dd/STAGE-HEADER.md
successor: provenance/stage-4-axis-ad/STAGE-HEADER.md

# Stage 4
pipeline_stage: 4
predecessor: provenance/stage-3-organization-od/STAGE-HEADER.md
successor: provenance/stage-5-combination-cd/STAGE-HEADER.md

# Stage 5
pipeline_stage: 5
predecessor: provenance/stage-4-axis-ad/STAGE-HEADER.md
successor: Migration
```

---

## 7. Accumulated Identity Evolution

The accumulated identity document formalizes the complete inherited mind at each pipeline stage. Any agent reading ONLY the current version can make decisions consistent with the full system.

| Version | Produced After | Lines | Location |
|---------|---------------|-------|----------|
| v1 | OD completion | 539 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md` |
| v1.1 | Comprehensive audit | ~600 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.1.md` |
| v2 | AD completion | ~700+ | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` |
| v3 | CD completion | TBD | Will be produced by CD stage |

**Evolution pattern:**
- v1: 5 soul pieces + OD-F-005 crown jewel + ANTI-PHYSICAL identity
- v1.1: v1 + comprehensive audit fixes + rgba epidemic resolution
- v2: v1.1 + 28 AD-F findings + 3-way unification + ATTENTION TOPOLOGY + DD-F-012 elevation + 5-scale fractal model bounded + ANTI-PHYSICAL extended to metaphors (AD-005)

**Content structure of ACCUMULATED-IDENTITY-v2:**
1. WHO WE ARE (master soul statement, 5 soul pieces, ANTI-PHYSICAL identity)
2. Locked tokens and constraints
3. Accumulated findings from all 4 stages
4. Crown jewel discoveries
5. Negative findings (no 6th soul piece across 4 stages)

---

## 8. Outbound Findings Format

Each stage produces findings with a standardized ID format. Findings are the primary currency of the provenance chain.

### Finding ID Format

| Stage | Prefix | Range | Total |
|-------|--------|-------|-------|
| Stage 1 | `COMP-F-` | 001-021 | 21 |
| Stage 2 | `DD-F-` | 001-018 | 18 |
| Stage 3 | `OD-F-` | 001-013, MP-001, PR-001, FL-001, AP-001 | 17 |
| Stage 4 | `AD-F-` | 001-028 | 28 |
| Stage 5 | `CD-F-` | TBD | TBD |
| Bespoke | `EXT-*` | various | 94 (OD) + 33 (AD) |
| Research | `R[1-5]-###` | per research file | 337 total |

**Grand total generated findings:** 84 (21 + 18 + 17 + 28) + 127 EXT-* = 211

### Finding Classification (AD Convention)

- **Class A (binary):** No deviation allowed. Structural truths.
- **Class B (requires judgment):** Intentional design choices within convention bounds.
- **Class C (bounding):** Defines limits of the model.

### Finding Lifecycle States

| State | Meaning |
|-------|---------|
| PENDING | Identified but not yet applied |
| APPLIED | Used in at least one stage |
| EXEMPLARY | Deeply applied as core concept |
| ACTIVE | Constraint that applies to all work |
| CONSUMED | Used and no longer needs tracking |
| RESOLVED | Anti-pattern identified and fixed |

---

## 9. Design System Structure

The design system itself sits at `DESIGN-SYSTEM/` and contains the validated outputs of the pipeline.

### Directory Map

```
DESIGN-SYSTEM/
  README.md              -- THE KORTAI DESIGN MIND (109K, read first)
  BACKBONE.md            -- Master narrative of entire pipeline
  QUICK-START.md         -- Quick reference
  CLAUDE.md              -- Navigation for agents

  tokens/                -- Locked design values
    colors.md
    geometry.md          -- border-radius: 0, etc.
    spacing.md
    typography.md

  patterns/              -- Validated rhythms
    PATTERN-INDEX.md     -- Entry point for pattern selection
    density-patterns.md  -- 6 DD patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL)
    organizational-patterns.md  -- 6 OD patterns (CONVERSATIONAL, NARRATIVE, TASK-BASED, CONFIDENCE, SPATIAL, CREATIVE)
    combination-rules.md -- Placeholder for CD

  components/
    OVERVIEW.md          -- Component specifications

  anti-patterns/
    registry.md          -- What to avoid (traffic-light, 2px borders, etc.)

  guides/
    migration-guide.md   -- How to migrate pages

  provenance/            -- THE RESEARCH CHAIN
    CLAUDE.md            -- Provenance navigation
    PIPELINE-MANIFEST.md -- Master finding registry + lifecycle tracking
    SOUL-DISCOVERIES.md  -- 5 soul pieces (copy from checkpoints)
    RESEARCH-ACTIVE.md   -- Application tracking
    EXT-RESEARCH-REGISTRY.md -- Bespoke research registry
    original-research/   -- R-1 to R-5 copies + RESEARCH-SYNTHESIS.md
    stage-1-components/  -- Component foundation chain
    stage-2-density-dd/  -- DD exploration chain
    stage-3-organization-od/  -- OD exploration chain (COMPLETE)
    stage-4-axis-ad/     -- AD exploration chain (COMPLETE)
    stage-5-combination-cd/  -- CD exploration chain (PENDING)
```

---

## 10. Checkpoints and Operational Files

Located at `checkpoints/`:

| File | Purpose |
|------|---------|
| `RESEARCH-ACTIVE.md` | Central tracking of research application |
| `MASTER-STATE.md` | Current pipeline position |
| `DISCOVERIES-LOG.md` | Accumulated learnings from explorations |
| `SOUL-DISCOVERIES.md` | 5 soul piece narratives |
| `COMPONENTS-REGISTRY.md` | Component specifications |
| `OD-CHECKPOINT.md` | OD stage tracking |
| `RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md` | Template for research application records |
| Various audit/visual files | Historical audit records |

---

## 11. Knowledge Architecture (Meta-Layer)

Located at `knowledge-architecture/`:

The knowledge architecture sits OUTSIDE the pipeline and documents the pipeline itself. Key files:

| File | Purpose |
|------|---------|
| `ACCUMULATED-IDENTITY-v1.md` | Identity after OD |
| `ACCUMULATED-IDENTITY-v1.1.md` | Identity after comprehensive audit |
| `ACCUMULATED-IDENTITY-v2.md` | Identity after AD |
| Various analysis docs | Pipeline backbone, source-of-truth registry, KA decisions |

Working artifact directories (prefixed with `_`):

| Directory | Purpose | Files |
|-----------|---------|-------|
| `_ad-execution/` | AD stage execution artifacts | 60+ files |
| `_ad-skeleton-analysis/` | AD pre-execution planning (gap analysis, master spec) | 24+ files |
| `_comprehensive-audit/` | 58-agent hierarchical audit artifacts | Multiple dirs |
| `_od-audit-scratchpad/` | 17-agent OD audit artifacts | 22 files |
| `_od-reenrichment/` | 43-agent OD re-enrichment artifacts | Multiple files |
| `_provenance-deep-dive/` | Deep provenance analysis | 9 files |
| `_provenance-gap-analysis/` | Gap analysis artifacts | Multiple files |
| `_remediation/` | Remediation execution artifacts | Multiple files |
| `_workflow-metacognition/` | Workflow analysis agents | 9 files |
| `_execution-journal/` | Execution tracking | Multiple files |

---

## 12. Complete File Count Summary

| Category | Count | Location |
|----------|-------|----------|
| Research files | 6 (+6 copies) | `research/`, `provenance/original-research/` |
| DD exploration HTML | 6 | `explorations/density/` |
| OD exploration HTML | 6 | `explorations/organizational/` |
| AD exploration HTML | 6 | `explorations/axis/` |
| CD exploration HTML | 0 (pending) | `explorations/combination/` (not yet created) |
| Provenance chain docs | ~30 formal | `DESIGN-SYSTEM/provenance/` tree |
| Token files | 4 | `DESIGN-SYSTEM/tokens/` |
| Pattern files | 4 | `DESIGN-SYSTEM/patterns/` |
| Checkpoint files | 20 | `checkpoints/` |
| Identity documents | 3 versions | `knowledge-architecture/` |
| Working artifact dirs | 10 | `knowledge-architecture/_*/` |
| Files with inline headers | 490 | Across design-extraction/ and docs-spa/ |
| Files with light sections | 244 | Across design-extraction/ and docs-spa/ |

---

## 13. Navigation Quick Reference

| I want to... | Go to |
|--------------|-------|
| Understand the whole system | `DESIGN-SYSTEM/BACKBONE.md` |
| Think with the system (deep) | `DESIGN-SYSTEM/README.md` (THE KORTAI DESIGN MIND) |
| Apply a pattern | `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` |
| Look up token values | `DESIGN-SYSTEM/tokens/*.md` |
| Trace a specific finding | `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` Section E |
| Find COMP-F findings | `provenance/stage-1-components/component-findings.md` |
| Find DD-F findings | `provenance/stage-2-density-dd/DD-outbound-findings.md` |
| Find OD-F findings | `provenance/stage-3-organization-od/OD-outbound-findings.md` |
| Find AD-F findings | `provenance/stage-4-axis-ad/AD-outbound-findings.md` |
| Start CD work | Read `provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` FIRST |
| See exploration artifacts | `explorations/density/`, `explorations/organizational/`, `explorations/axis/` |
| Track research application | `checkpoints/RESEARCH-ACTIVE.md` |
| Verify soul compliance | `checkpoints/SOUL-DISCOVERIES.md` |
| Get accumulated identity | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` |
| Avoid anti-patterns | `DESIGN-SYSTEM/anti-patterns/registry.md` |
| Migrate a page | `DESIGN-SYSTEM/guides/migration-guide.md` |

---

## 14. Crown Jewel Discoveries (One Per Stage)

| Stage | Crown Jewel | Finding ID | Implication |
|-------|-------------|------------|-------------|
| Stage 1 | 5 Soul Pieces = DNA of the system | COMP-F-001 to COMP-F-005 | All future work must honor these |
| Stage 2 | FRACTAL is the meta-pattern | DD-F-006 | Same rhythm at all scales -- mandatory for all stages |
| Stage 3 | Organization IS Density | OD-F-005 / OD-F-MP-001 | Not two layers but one phenomenon |
| Stage 4 | ATTENTION TOPOLOGY | AD-F-023 | Axis IS org IS density -- all equivalence mechanisms converge |
| Stage 5 | TBD | TBD | TBD |

**Cumulative crown jewel chain:** Soul Pieces -> Fractal -> Org=Density -> Attention Topology -> ???

---

*Generated 2026-02-10 by pipeline-mapper agent. Source: comprehensive reading of BACKBONE.md, PIPELINE-MANIFEST.md, all 5 STAGE-HEADERs, all CLAUDE.md files, all HANDOFF files, all outbound-findings files, ACCUMULATED-IDENTITY-v2.md, exploration directory listings, and provenance directory structures.*
