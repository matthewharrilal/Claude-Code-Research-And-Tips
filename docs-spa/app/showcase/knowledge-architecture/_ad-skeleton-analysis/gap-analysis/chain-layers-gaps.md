# Chain Layer Structure Analysis: OD Actual vs AD Skeleton

**Author:** Chain Layer Structure Analyst
**Date:** 2026-02-09
**Based on:** Full reading of 25+ provenance chain documents, PIPELINE-MANIFEST, BACKBONE, all stage CLAUDE.md files, HANDOFF documents, outbound findings, ACCUMULATED-IDENTITY-v1.1, EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, SOUL-DISCOVERIES, OD-CONVENTION-SPEC, OD-AUDIT-SYNTHESIS, OD-RESEARCH-GATE, OD-SYNTHESIS, density-patterns, organizational-patterns, and both skeleton synthesis files.

---

## 1. THE ACTUAL LAYER ARCHITECTURE (OD's Provenance Chain)

After reading every file in the chain, the actual architecture has **8 distinct layers** organized by function, not by creation date. The skeleton proposes files at many of these layers but never names or defines the layer architecture itself -- a critical gap.

### Layer 0: Meta-Architecture (The Map of the Map)

**Purpose:** Describes the chain itself. The only self-referential layer.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| PIPELINE-MANIFEST.md | `DESIGN-SYSTEM/provenance/` | 325 | Master finding registry, lifecycle tracking, cross-reference index |
| BACKBONE.md | `DESIGN-SYSTEM/` | ~400+ | Master narrative of entire pipeline |
| provenance/CLAUDE.md | `DESIGN-SYSTEM/provenance/` | ~100 | Navigation file, layer description, R3-023 chain walkthrough |
| DESIGN-SYSTEM/CLAUDE.md | `DESIGN-SYSTEM/` | ~150 | "THE KORTAI DESIGN MIND" entry point |

**Key properties:**
- These files describe ALL stages, not one specific stage
- They are UPDATED by every stage (not owned by any single stage)
- PIPELINE-MANIFEST is the single most-referenced file in the chain (12+ inbound)
- BACKBONE.md is second-most-referenced (12+ inbound)
- Layer 0 files contain the only cross-reference index (PIPELINE-MANIFEST Section E)

### Layer 1: Soul + Identity (Immutable Foundations)

**Purpose:** Defines what CANNOT change. The DNA of the system.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| SOUL-DISCOVERIES.md | `DESIGN-SYSTEM/provenance/` | ~200 | 5 soul pieces as perceptual truths |
| ACCUMULATED-IDENTITY-v1.1.md | `knowledge-architecture/` | 577 | Full inherited mind -- soul + findings + constraints + open questions |
| tokens/geometry.md | `DESIGN-SYSTEM/tokens/` | ~50 | Locked CSS values (border-radius: 0, box-shadow: none) |
| tokens/colors.md | `DESIGN-SYSTEM/tokens/` | ~50 | Locked palette (#E83025, #1A1A1A, #FAFAF5, etc.) |
| tokens/typography.md | `DESIGN-SYSTEM/tokens/` | ~50 | Locked font trio (Instrument Serif, Inter, JetBrains Mono) |
| tokens/spacing.md | `DESIGN-SYSTEM/tokens/` | ~50 | Locked spacing tokens (--space-*) |

**Key properties:**
- SOUL-DISCOVERIES is a SYNCED DUPLICATE (operational copy in checkpoints/, archival copy in provenance/)
- ACCUMULATED-IDENTITY lives OUTSIDE the formal provenance directory (in knowledge-architecture/) -- this is an architectural anomaly
- Tokens are LOCKED -- any modification IS a soul modification
- Soul Piece #4 + ANTI-PHYSICAL identity = the deepest constraint layer

### Layer 2: Original Research (External Input)

**Purpose:** The raw research that feeds the pipeline. Written ONCE, consumed repeatedly.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| R1-DOCUMENTATION-PATTERNS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~600 | 28 documentation pattern findings |
| R2-CREATIVE-LAYOUTS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~400 | 27 creative layout findings |
| R3-DENSITY-DIMENSIONS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~800 | 51 density dimension findings |
| R4-AXIS-INNOVATIONS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~2000 | 192 axis innovation findings |
| R5-COMBINATION-THEORY.md | `DESIGN-SYSTEM/provenance/original-research/` | ~500 | 39 combination theory findings |
| RESEARCH-SYNTHESIS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~400 | Cross-research insights |
| original-research/CLAUDE.md | `DESIGN-SYSTEM/provenance/original-research/` | ~50 | Navigation |

**Key properties:**
- 337 total findings (R-1: 28, R-2: 27, R-3: 51, R-4: 192, R-5: 39)
- Each stage has a PRIMARY research source (DD=R-3, OD=R-1, AD=R-4, CD=R-5)
- Research files are NEVER modified after creation -- only their APPLICATION STATUS changes
- RESEARCH-ACTIVE.md (Layer 2.5) tracks application status (currently 32/337 = 9.5% applied)

### Layer 2.5: Research Application Tracking (Status Bridge)

**Purpose:** Tracks which research has been applied and where. The bridge between raw research (Layer 2) and stage outputs (Layers 3-5).

| File | Location | Lines | Function |
|------|----------|-------|----------|
| RESEARCH-ACTIVE.md | `DESIGN-SYSTEM/provenance/` | ~500+ | Per-finding application status for all 337 findings |
| EXT-RESEARCH-REGISTRY.md | `DESIGN-SYSTEM/provenance/` | ~400 | Registry of 94 bespoke external research findings |

**Key properties:**
- RESEARCH-ACTIVE is ANOTHER synced duplicate (checkpoints/ is operational, provenance/ is archival)
- EXT-RESEARCH-REGISTRY was created during remediation -- did not exist during OD build
- These files are UPDATED by every stage that applies research
- R-2 at 0% applied is a glaring gap that the AD skeleton identifies

### Layer 3: Per-Stage Infrastructure (Stage Scaffolding)

**Purpose:** Each pipeline stage gets a set of structural documents. These are the "bones" of each stage's provenance.

**Per-stage pattern (the Stage-N template):**

| Document Type | OD Instance | DD Instance | Function |
|---------------|-------------|-------------|----------|
| STAGE-HEADER.md | stage-3-organization-od/ | stage-2-density-dd/ | What the stage did, consumed, produced, quality achieved |
| CLAUDE.md | stage-3-organization-od/ | stage-2-density-dd/ | Navigation file for agents entering the stage directory |
| RESEARCH-GATE.md | OD-RESEARCH-GATE.md | (none -- gap) | Pre-build research filtering + post-build verification |
| CONVENTION-SPEC.md | OD-CONVENTION-SPEC.md | (none -- DD didn't need one) | Unified convention definition |

**Key properties:**
- STAGE-HEADER has YAML frontmatter with predecessor/successor links -- this creates the BACKBONE chain
- CLAUDE.md files are AUTO-READ by Claude Code on directory entry -- they function as mandatory orientation
- RESEARCH-GATE is an OD innovation -- DD didn't have one
- CONVENTION-SPEC is an OD remediation innovation -- created retroactively to resolve 3-dialect gap
- Each STAGE-HEADER connects to its predecessor and successor via YAML frontmatter
- The predecessor/successor chain: Stage 1 -> Stage 2 -> Stage 3 -> Stage 4 -> Stage 5

### Layer 4: Stage Findings (The Output)

**Purpose:** Formal declarations of what each stage discovered. The outbound chain.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| component-findings.md | stage-1-components/ | ~200 | COMP-F-001 through COMP-F-021 |
| DD-outbound-findings.md | stage-2-density-dd/ | ~400 | DD-F-001 through DD-F-018 |
| OD-outbound-findings.md | stage-3-organization-od/ | ~600 | OD-F-001 through OD-F-013 + 4 categorical |

**Key properties:**
- Each outbound-findings file has YAML frontmatter with predecessor/successor links
- The predecessor/successor chain: component-findings -> DD-outbound-findings -> OD-outbound-findings -> AD-outbound-findings -> CD-outbound-findings
- This chain is PARALLEL to the STAGE-HEADER chain -- two independent traversal paths
- OD-F-005 collision (builder-log vs checkpoint) was the canonical failure case -- led to reserved ID ranges
- Finding IDs are IMMUTABLE once assigned (DD-F-006 has 12+ downstream references)

### Layer 5: Stage Synthesis (Cross-Exploration Analysis)

**Purpose:** What the stage learned ACROSS all its explorations. Written post-build.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| OD-SYNTHESIS.md | stage-3-organization-od/ | ~400 | 7-section cross-OD analysis |
| OD-AUDIT-SYNTHESIS.md | stage-3-organization-od/ | ~300 | Audit record (89 findings, 16 fixes) |
| DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | stage-2-density-dd/ | ~300 | DD audit record |

**Key properties:**
- SYNTHESIS requires cross-exploration comparison -- MUST be deferred (not incremental)
- AUDIT-SYNTHESIS is post-hoc by nature -- cannot exist before audit
- OD-SYNTHESIS Section 1 ("The OD Story") is the narrative version of what STAGE-HEADER captures structurally
- DD's synthesis and audit synthesis live in the same stage directory

### Layer 6: Pattern Catalogs (Validated Outputs)

**Purpose:** The validated patterns produced by each stage. Consumable by downstream stages AND migration.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| density-patterns.md | `DESIGN-SYSTEM/patterns/` | ~400 | 6 density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL) |
| organizational-patterns.md | `DESIGN-SYSTEM/patterns/` | ~400 | 6 organizational patterns |
| PATTERN-INDEX.md | `DESIGN-SYSTEM/patterns/` | ~100 | Master index |
| combination-rules.md | `DESIGN-SYSTEM/patterns/` | ~200 | Planned combination rules |
| anti-patterns/registry.md | `DESIGN-SYSTEM/anti-patterns/` | ~200 | Anti-pattern registry |

**Key properties:**
- Pattern files live OUTSIDE the provenance directory -- in `DESIGN-SYSTEM/patterns/`
- They cross-reference back to provenance (BACKBONE.md, PIPELINE-MANIFEST.md)
- Each pattern has research provenance (R-finding IDs, DD-F/OD-F finding IDs, EXT-* IDs)
- This layer is the primary MIGRATION interface

### Layer 7: Handoff Documents (Stage Transitions)

**Purpose:** Gate files that transfer everything from one stage to the next. Written at stage completion.

| File | Location | Lines | Function |
|------|----------|-------|----------|
| HANDOFF-DD-TO-OD.md | stage-2-density-dd/ | ~300 | DD->OD gate with acknowledgment protocol |
| HANDOFF-OD-TO-AD.md | stage-3-organization-od/ | ~500+ | OD->AD gate with 11-item acknowledgment checklist |

**Key properties:**
- Handoffs live in the OUTGOING stage's directory (DD's handoff lives in stage-2, not stage-3)
- Each handoff has an ACKNOWLEDGMENT PROTOCOL -- a checkbox list the receiving stage must confirm
- Handoffs are the ONLY comprehensive transfer documents -- they include findings, constraints, pairings, lessons, and responsibilities
- Handoffs include the TRANSITIVE CHAIN concept (org->density->axis) that bridges stages
- The HANDOFF is what a fresh agent reads FIRST -- it is the fastest path to full context

### Layer 8: Distributed Provenance (Per-File Metadata)

**Purpose:** Every source file is a node in a traversal graph. Three sub-layers:

| Sub-Layer | Scope | Created In | Function |
|-----------|-------|------------|----------|
| Inline Threading Headers | 490 files | Phase 2B | WHY THIS EXISTS, STATUS, BUILT ON, CONSUMED BY |
| Light Provenance Sections | 244 files | Phase 2D | Parent phase + T1 synthesis link |
| Exploration HTML Headers | 12 files (6 DD + 6 OD) | During build | 150+ line inline headers with research citations, soul compliance, dependency tables |

**Key properties:**
- The most voluminous layer by file count (490+ files)
- Each inline header has structured sections: WHY, STATUS, BUILT ON (dependencies), CONSUMED BY (consumers)
- This creates a DISTRIBUTED DEPENDENCY GRAPH -- any file can be traced to what it depends on and what depends on it
- Exploration HTML headers are the RICHEST metadata -- 150+ lines each with full research application records
- This layer is how the provenance/CLAUDE.md describes the "Three Layers of Provenance" (Section 6 of that CLAUDE.md)

---

## 2. CROSS-LAYER REFERENCE MAP

### Traversal Path 1: Forward (Finding Origin -> Application)

```
R3-023 (Layer 2)
  -> PIPELINE-MANIFEST Section A (Layer 0) -- status tracking
  -> DD-006 exploration (Layer 8 -- HTML header cites R3-023)
  -> DD-F-006 declaration (Layer 4 -- DD-outbound-findings)
  -> HANDOFF-DD-TO-OD (Layer 7 -- mandates DD-F-006 for all OD)
  -> OD-001 through OD-006 (Layer 8 -- all cite DD-F-006 in headers)
  -> OD-SYNTHESIS (Layer 5 -- cross-OD analysis references fractal)
  -> HANDOFF-OD-TO-AD (Layer 7 -- carries DD-F-006 forward)
  -> AD explorations (future Layer 8)
```

### Traversal Path 2: Backward (Artifact -> Research)

```
OD-003 HTML file (Layer 8)
  -> Inline header BUILT ON section: DD-F-003, DD-F-006, R1-001, R1-016, EXT-TASK-*
  -> OD-outbound-findings (Layer 4) for OD-F-### declarations
  -> OD-RESEARCH-GATE (Layer 3) for R-1 finding-by-finding mapping
  -> DD-outbound-findings (Layer 4) for DD-F-003 definition
  -> R1-DOCUMENTATION-PATTERNS (Layer 2) for R1-001 original text
  -> EXT-RESEARCH-REGISTRY (Layer 2.5) for EXT-TASK-001 through EXT-TASK-019
  -> PIPELINE-MANIFEST (Layer 0) for lifecycle status of all cited findings
```

### Traversal Path 3: Cross-Stage (Sibling Comparison)

```
OD-001 vs OD-006 (both Layer 8)
  -> OD-SYNTHESIS Section 3 (Layer 5) -- 6-pattern analysis table
  -> organizational-patterns.md (Layer 6) -- pattern comparison
  -> OD-CONVENTION-SPEC (Layer 3) -- were conventions applied consistently?
  -> OD-AUDIT-SYNTHESIS (Layer 5) -- audit finding comparison
  -> ACCUMULATED-IDENTITY (Layer 1) -- did both honor the same identity?
```

### Traversal Path 4: Identity (Soul Piece -> Enforcement)

```
Soul Piece #1 "Sharp Edges" (Layer 1 -- SOUL-DISCOVERIES)
  -> ACCUMULATED-IDENTITY Section 1 (Layer 1) -- perceptual truth
  -> tokens/geometry.md (Layer 1) -- border-radius: 0 LOCKED
  -> OD-CONVENTION-SPEC Section 1 (Layer 3) -- 10-line soul checklist
  -> OD-001 through OD-006 (Layer 8) -- all verified 0 violations
  -> OD-AUDIT-SYNTHESIS (Layer 5) -- 0/3,479 soul violations
  -> PIPELINE-MANIFEST Section C (Layer 0) -- soul piece tracking
```

---

## 3. WHAT THE SKELETON PROPOSES VS THE ACTUAL ARCHITECTURE

### 3.1 Files the Skeleton Creates (Mapped to Layers)

| Skeleton File | Layer | Existing OD Analog | Gap Assessment |
|---------------|-------|-------------------|----------------|
| AD-CONVENTION-SPEC.md | 3 | OD-CONVENTION-SPEC.md | CORRECT -- same layer, same function |
| AD-SOUL-TEMPLATE.html | (new) | (none) | NEW CONCEPT -- not in OD. A pre-populated HTML skeleton. No layer assignment needed; this is a BUILD TOOL, not a chain document |
| AD-BINARY-GATES.md | 3 | (none -- embedded in prompts) | NEW CONCEPT -- formalizes what was informal in OD. Good addition |
| AD-outbound-findings.md | 4 | OD-outbound-findings.md | CORRECT -- same layer |
| AD-SYNTHESIS.md | 5 | OD-SYNTHESIS.md | CORRECT -- same layer |
| AD-AUDIT-SYNTHESIS.md | 5 | OD-AUDIT-SYNTHESIS.md | CORRECT -- same layer |
| AD-RESEARCH-GATE.md | 3 | OD-RESEARCH-GATE.md | CORRECT -- same layer |
| STAGE-HEADER.md | 3 | OD STAGE-HEADER.md | CORRECT -- same layer |
| stage-4-axis-ad/CLAUDE.md | 3 | stage-3-organization-od/CLAUDE.md | CORRECT -- same layer |
| HANDOFF-AD-TO-CD.md | 7 | HANDOFF-OD-TO-AD.md | CORRECT -- same layer |
| ACCUMULATED-IDENTITY-v2.md | 1 | ACCUMULATED-IDENTITY-v1.1.md | CORRECT -- same layer |
| axis-patterns.md | 6 | organizational-patterns.md | CORRECT -- same layer |
| identity-delta-ad-wave{N}.md | (new) | (none) | NEW CONCEPT -- not in OD. Incremental identity evolution documents. These are BUILD ARTIFACTS, not permanent chain documents |
| R-4-AD-EVALUATION.md | 2.5 | (none in provenance dir) | NEW -- research evaluation file. OD didn't have a formal R-1 evaluation file |
| r2-ad-mapping.md | 2.5 | r2-evaluation.md (from re-enrichment) | CORRECT -- same function |
| research-package-ad-{1-6}.md | (operational) | (none) | BUILD TOOLS -- per-builder research packages. Not chain documents |
| AD-BUILD-STATE.md | (operational) | (none) | BUILD TOOL -- Weaver's state tracking. Not a permanent chain document |

### 3.2 Files the Skeleton Updates (Layer Impact)

| File Updated | Layer | What Changes | Assessment |
|--------------|-------|-------------|------------|
| PIPELINE-MANIFEST.md | 0 | Add AD-F entries, update R-4/R-2 status | CORRECT -- Layer 0 must be updated by every stage |
| BACKBONE.md | 0 | Stage 4 narrative | CORRECT |
| RESEARCH-ACTIVE.md | 2.5 | R-4 application rates, EXT-AD-* | CORRECT |
| SOUL-DISCOVERIES.md | 1 | Stage 4 determination | CORRECT |
| EXT-RESEARCH-REGISTRY.md | 2.5 | EXT-AXIS-* categories | CORRECT |
| explorations/axis/CLAUDE.md | 8 | AD inventory and scores | CORRECT |
| explorations/CLAUDE.md | 8 | AD row status | CORRECT |
| provenance/CLAUDE.md | 0 | stage-4 status | CORRECT |

---

## 4. CRITICAL GAPS IN THE SKELETON'S LAYER ARCHITECTURE

### GAP-CL-01: No Explicit Layer Definition (CRITICAL)

**The problem:** The skeleton proposes 17+ files to create and 8+ files to update, but NEVER defines the layer architecture. It doesn't name the layers, doesn't explain how they relate, and doesn't specify traversal semantics.

**Why this matters:** Without explicit layers, agents treat all files as "the same kind of thing." A builder updating PIPELINE-MANIFEST (Layer 0) is doing something fundamentally different from appending to AD-outbound-findings (Layer 4). One is a META operation affecting the entire chain; the other is a LOCAL operation within a single stage.

**Evidence:** The provenance/CLAUDE.md describes "Three Layers of Provenance" (inline headers, light sections, formal chain) but this is a DIFFERENT layering than the one I've mapped. The two layering systems coexist without acknowledgment:
- **provenance/CLAUDE.md's layers:** Physical metadata layers (WHERE provenance lives: in file headers vs in chain documents)
- **My analysis layers:** Functional layers (WHAT provenance does: meta-architecture vs identity vs research vs findings)

**Resolution:** AD skeleton must include a section titled "LAYER ARCHITECTURE" that defines all 8 layers, their files, and traversal semantics. This is a 30-line addition.

### GAP-CL-02: ACCUMULATED-IDENTITY Location Anomaly (HIGH)

**The problem:** ACCUMULATED-IDENTITY-v1.1.md lives in `knowledge-architecture/`, NOT in `DESIGN-SYSTEM/provenance/`. This is architecturally anomalous -- it's a Layer 1 (Identity) document that doesn't live with other Layer 1 documents.

**Evidence:**
- SOUL-DISCOVERIES.md lives in `DESIGN-SYSTEM/provenance/` (correct)
- Tokens live in `DESIGN-SYSTEM/tokens/` (correct)
- But ACCUMULATED-IDENTITY-v1.1.md lives in `knowledge-architecture/` (anomalous)
- The skeleton's provenance agent flagged this: "Should v2 also live there [knowledge-architecture/], or move to DESIGN-SYSTEM/provenance/?" (Section 9, Question 2)

**Why this matters:** The formal provenance chain is incomplete without ACCUMULATED-IDENTITY in the provenance directory. A fresh agent reading ONLY `DESIGN-SYSTEM/provenance/` would miss the full identity document -- it would only get SOUL-DISCOVERIES (5 soul pieces) without the accumulated findings, constraints, and open questions.

**Resolution:** AD-ACCUMULATED-IDENTITY-v2.md should live in `DESIGN-SYSTEM/provenance/` with a reference/symlink from `knowledge-architecture/`. The skeleton's provenance agent's recommendation to "keep in knowledge-architecture/ for consistency" prioritizes backward compatibility over architectural soundness.

### GAP-CL-03: No CLAUDE.md Chain Node Specification (HIGH)

**The problem:** Every directory has a CLAUDE.md that functions as a chain node (auto-read by Claude Code on entry). The skeleton mentions creating `stage-4-axis-ad/CLAUDE.md` and updating `explorations/axis/CLAUDE.md`, `explorations/CLAUDE.md`, and `provenance/CLAUDE.md`. But it doesn't specify HOW these files cross-reference each other.

**Evidence from the actual chain:**
- `DESIGN-SYSTEM/CLAUDE.md` says "start AD work" -> `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md`
- `provenance/CLAUDE.md` has a navigation table pointing to each stage directory
- `stage-3-organization-od/CLAUDE.md` has CONSUMED/PRODUCED sections linking to other stages
- `explorations/organizational/CLAUDE.md` links to provenance for chain evidence

These CLAUDE.md files form a NAVIGATION MESH -- an implicit Layer 0.5 that the skeleton doesn't account for.

**Resolution:** The skeleton should include a CLAUDE.md Cross-Reference Update section specifying exactly which navigation entries need updating in which CLAUDE.md files. There are at least 5 CLAUDE.md files that need AD-related updates:
1. `DESIGN-SYSTEM/CLAUDE.md` -- add AD entry to "I want to..." table
2. `provenance/CLAUDE.md` -- update stage-4 from PENDING to status
3. `stage-4-axis-ad/CLAUDE.md` -- full population (currently placeholder)
4. `explorations/axis/CLAUDE.md` -- create (doesn't exist yet)
5. `explorations/CLAUDE.md` -- add AD row

### GAP-CL-04: Build Tools vs Chain Documents Not Distinguished (MEDIUM)

**The problem:** The skeleton proposes files of two fundamentally different types without distinguishing them:
- **Chain documents** (permanent, part of the provenance layer architecture): AD-CONVENTION-SPEC, AD-outbound-findings, STAGE-HEADER, HANDOFF-AD-TO-CD, etc.
- **Build tools** (temporary, support the build process): AD-SOUL-TEMPLATE.html, AD-BUILD-STATE.md, research-package-ad-{1-6}.md, identity-delta-ad-wave{N}.md, AD-BINARY-GATES.md

**Why this matters:** Build tools should go in `_ad-execution/` (working directory). Chain documents should go in `DESIGN-SYSTEM/provenance/stage-4-axis-ad/`. The skeleton partially addresses this (Section 10, state files mention `_ad-execution/`) but doesn't make the distinction systematic.

**Evidence:** OD's build tools (CURRENT-STATE.md, weaver-log.md, decisions.md) ended up in `knowledge-architecture/_execution-journal/` and became "dark matter" -- files that aren't part of the formal chain but contain valuable information. The remediation handoff calls these "51 dark matter files."

**Resolution:** Explicitly categorize every proposed file as CHAIN or BUILD. Chain files go in `DESIGN-SYSTEM/provenance/stage-4-axis-ad/`. Build files go in `knowledge-architecture/_ad-execution/`. Chain files get YAML frontmatter with predecessor/successor links. Build files do NOT.

### GAP-CL-05: Synced Duplicate Pattern Not Addressed (MEDIUM)

**The problem:** Two critical files exist as SYNCED DUPLICATES:
- SOUL-DISCOVERIES.md: operational in `checkpoints/`, archival in `provenance/`
- RESEARCH-ACTIVE.md: operational in `checkpoints/`, archival in `provenance/`

The skeleton doesn't address whether AD should follow the same pattern or consolidate to single-source.

**Evidence:** Both files' inline headers explicitly say "SYNCED DUPLICATE of checkpoints/[file]. Sync protocol: operational edits go in checkpoints/, archival copies here." This duplication is a known integrity risk -- if sync fails, the chain has contradictory data.

**Resolution:** AD should either (a) continue the sync pattern with explicit sync verification in Gate 6, or (b) consolidate to single-source in `DESIGN-SYSTEM/provenance/` and treat it as the operational copy. Option (b) is architecturally cleaner but breaks the existing pattern.

### GAP-CL-06: Missing Pattern Catalog Layer Integration (MEDIUM)

**The problem:** The skeleton mentions creating `axis-patterns.md` (Layer 6) but doesn't specify:
1. Whether it goes in `DESIGN-SYSTEM/patterns/` (like density-patterns.md and organizational-patterns.md)
2. Whether PATTERN-INDEX.md needs updating
3. Whether anti-patterns/registry.md needs new AD-specific anti-patterns

**Evidence:** The existing pattern catalog layer has:
- `DESIGN-SYSTEM/patterns/density-patterns.md` (DD output)
- `DESIGN-SYSTEM/patterns/organizational-patterns.md` (OD output)
- `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md` (master index)
- `DESIGN-SYSTEM/patterns/combination-rules.md` (planned for CD)
- `DESIGN-SYSTEM/anti-patterns/registry.md` (anti-pattern registry)

**Resolution:** Explicitly specify:
- `axis-patterns.md` goes in `DESIGN-SYSTEM/patterns/` (not in provenance/)
- PATTERN-INDEX.md needs an "Axis Patterns" entry
- anti-patterns/registry.md needs AD-F-AP-NNN entries
- combination-rules.md may need axis-combination constraint entries

### GAP-CL-07: Cross-Stage File Naming Convention Gap (LOW)

**The problem:** OD files use OD- prefix (OD-SYNTHESIS, OD-outbound-findings, OD-CONVENTION-SPEC, OD-RESEARCH-GATE, OD-AUDIT-SYNTHESIS). AD files will use AD- prefix. But some files span stages:
- ACCUMULATED-IDENTITY has versions (v1, v1.1, v2) -- no stage prefix
- PIPELINE-MANIFEST -- no stage prefix
- BACKBONE.md -- no stage prefix
- SOUL-DISCOVERIES -- no stage prefix
- EXT-RESEARCH-REGISTRY -- no stage prefix

These cross-stage files have no naming convention for version evolution.

**Resolution:** The skeleton correctly uses version numbers (v1.1 -> v2) for ACCUMULATED-IDENTITY. For EXT-RESEARCH-REGISTRY, the convention should be to APPEND to the existing file (not create a new one). For PIPELINE-MANIFEST, the convention is already BATCH UPDATE between waves. These conventions should be stated explicitly.

---

## 5. TRAVERSAL ARCHITECTURE: HOW DO YOU NAVIGATE?

### 5.1 "I have a finding ID -- where is it used?"

**Path:** Finding ID -> PIPELINE-MANIFEST Section E (cross-reference) -> Section B/D (finding entry) -> outbound-findings file -> HTML exploration headers

**Example:** R3-023
1. Search PIPELINE-MANIFEST -> Section E has explicit "Where was R3-023 used?" entry
2. Shows: DD-006 (EXEMPLARY), DD-F-006 (generated finding), all 6 ODs, BACKBONE Section 13
3. Each cited file has the finding ID in its inline header or body

**Gap:** This only works for WELL-KNOWN findings. For an arbitrary R-4 finding (e.g., R4-PD015), you'd need to:
1. Check RESEARCH-ACTIVE.md for its application status
2. If APPLIED, find the "Applied In" column
3. Check the exploration HTML header for the citation

**Skeleton gap:** No equivalent of PIPELINE-MANIFEST Section E for AD findings. The skeleton's PIPELINE-MANIFEST update adds AD-F entries to Section B but doesn't address Section E (cross-reference index). AD should add at least one Section E walkthrough for a key AD finding.

### 5.2 "I have a soul piece -- where is it enforced?"

**Path:** SOUL-DISCOVERIES -> ACCUMULATED-IDENTITY -> tokens/ -> CONVENTION-SPEC -> exploration HTML headers -> AUDIT-SYNTHESIS

This traversal works well. The skeleton's 10-line soul checklist (embedded in every agent prompt) is the enforcement mechanism. No gap.

### 5.3 "I want to understand what a stage did"

**Path:** provenance/CLAUDE.md -> stage-N/CLAUDE.md -> STAGE-HEADER -> SYNTHESIS -> outbound-findings

This is the STANDARD traversal and it works. The skeleton correctly replicates it for AD.

### 5.4 "I want to start the next stage"

**Path:** HANDOFF-{prev}-TO-{next} -> ACCUMULATED-IDENTITY -> primary research -> outbound-findings from previous stages

This is the CRITICAL traversal. The HANDOFF document is the entry point. The skeleton correctly places HANDOFF-OD-TO-AD.md as the first-read requirement (Section 6.1, Consumption Order).

### 5.5 "I want to verify the chain is complete"

**Path:** No single traversal exists. Must check:
- All STAGE-HEADERs link correctly (predecessor/successor)
- All outbound-findings files link correctly (predecessor/successor)
- All CLAUDE.md files are consistent
- PIPELINE-MANIFEST counts match actual findings
- RESEARCH-ACTIVE matches PIPELINE-MANIFEST

**Skeleton gap:** The skeleton's Gate 6 (Section 2.6) includes 13 checks but doesn't include explicit chain traversal verification. The provenance remediation's 104-item checklist (17-verification-framework.md) should be adapted for AD.

---

## 6. HOW SHOULD AD'S CHAIN DOCUMENT DIFFER FROM OD'S?

### 6.1 OD's Chain Was Retroactive (18-Agent Remediation)

OD built 6 explorations across 5+ sessions. Provenance was never written during build. The entire formal chain was created AFTER the fact by an 18-agent remediation team across 5 waves. This means:
- OD's chain documents contain RECONSTRUCTED provenance, not WITNESSED provenance
- Finding IDs were assigned retroactively, leading to the OD-F-005 collision
- Dark matter accumulated (51 files, ~32,800 lines) because insights were never formalized

### 6.2 AD's Chain Must Be Incremental (Mode C)

The skeleton correctly identifies this as THE single most important change. AD's chain differs from OD's in three ways:

1. **Findings written at discovery** (not after build) -- builder stops, writes AD-F-NNN entry, resumes
2. **Reserved ID ranges** (not self-assigned) -- collision prevention
3. **Convention spec BEFORE build** (not after) -- 3-dialect gap prevention

### 6.3 But the LAYER ARCHITECTURE Is the Same

Despite the timing difference, AD's chain documents should match OD's layer architecture exactly:
- Layer 0 updates (PIPELINE-MANIFEST, BACKBONE)
- Layer 1 evolution (ACCUMULATED-IDENTITY v1.1 -> v2)
- Layer 2.5 updates (RESEARCH-ACTIVE, EXT-RESEARCH-REGISTRY)
- Layer 3 creation (STAGE-HEADER, CLAUDE.md, RESEARCH-GATE, CONVENTION-SPEC)
- Layer 4 creation (AD-outbound-findings)
- Layer 5 creation (AD-SYNTHESIS, AD-AUDIT-SYNTHESIS)
- Layer 6 creation (axis-patterns.md)
- Layer 7 creation (HANDOFF-AD-TO-CD)
- Layer 8 creation (inline headers in AD HTML files, CLAUDE.md updates)

The STRUCTURE is identical. Only the PROCESS changes (incremental vs retroactive).

---

## 7. PROVENANCE CHAIN DOCUMENT (REMEDIATION HANDOFF) AS META-NODE

### 7.1 The Remediation Handoff's Unique Position

`knowledge-architecture/PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md` (299 lines) is a meta-document that describes the entire provenance gap analysis and remediation architecture. It sits OUTSIDE the formal chain but IS the document that created the formal chain for OD.

### 7.2 Should AD Have an Equivalent?

No. AD's chain is incremental (Mode C) -- there should be no need for a remediation handoff because provenance is written during build. If AD follows the skeleton's protocol, the equivalent of the remediation handoff is the skeleton itself -- the pre-execution design document.

However, if AD's provenance DOES fall behind (e.g., a builder forgets to write findings), the recovery mechanism should be a mini-remediation within the fix phase, not a separate remediation session.

---

## 8. SUMMARY: TOP 10 FINDINGS

| # | Finding | Severity | Resolution |
|---|---------|----------|------------|
| 1 | **No explicit layer architecture** in the skeleton. 8 functional layers exist but are unnamed. | CRITICAL | Add a "LAYER ARCHITECTURE" section (30 lines) defining all 8 layers |
| 2 | **ACCUMULATED-IDENTITY location anomaly**: v1.1 lives in knowledge-architecture/, not provenance/. The skeleton recommends keeping it there. | HIGH | Move v2 to DESIGN-SYSTEM/provenance/ with reference from knowledge-architecture/ |
| 3 | **CLAUDE.md navigation mesh** not specified. 5+ CLAUDE.md files need AD-related updates. | HIGH | Add explicit CLAUDE.md cross-reference update list |
| 4 | **Build tools vs chain documents** not distinguished. Some proposed files are permanent chain documents; others are ephemeral build tools. | MEDIUM | Categorize each file as CHAIN or BUILD with different storage locations |
| 5 | **Synced duplicate pattern** (SOUL-DISCOVERIES, RESEARCH-ACTIVE) not addressed for AD. | MEDIUM | Decide: continue sync pattern with verification gate, or consolidate |
| 6 | **Pattern catalog integration** incomplete. axis-patterns.md location, PATTERN-INDEX update, anti-pattern registry update not specified. | MEDIUM | Specify exact target paths and cross-reference updates |
| 7 | **PIPELINE-MANIFEST Section E** (cross-reference index) not updated for AD findings. | MEDIUM | Include at least one AD finding walkthrough in Section E |
| 8 | **Chain traversal verification** not in Gate 6. The 104-item framework from remediation should be adapted. | MEDIUM | Adapt key items from 17-verification-framework.md into Gate 6 |
| 9 | **Two independent layering systems** coexist without acknowledgment: physical layers (inline/light/formal) vs functional layers (meta/identity/research/findings/etc.) | LOW | Document both layering systems and their relationship |
| 10 | **Cross-stage file naming convention** implicit but not stated. | LOW | State the convention explicitly: versioned files use version numbers, registries are appended, manifests are batch-updated |

---

## 9. RECOMMENDED LAYER ARCHITECTURE SECTION (For Skeleton)

The skeleton should include this section:

```
## LAYER ARCHITECTURE

The provenance chain operates at 8 functional layers:

Layer 0 (Meta): PIPELINE-MANIFEST, BACKBONE, provenance/CLAUDE.md, DESIGN-SYSTEM/CLAUDE.md
  -> Updated by EVERY stage. Describe the chain itself. Never owned by one stage.

Layer 1 (Identity): SOUL-DISCOVERIES, ACCUMULATED-IDENTITY, tokens/*
  -> What CANNOT change. Evolved between stages (v1 -> v1.1 -> v2).

Layer 2 (Research): R-1 through R-5, RESEARCH-SYNTHESIS
  -> External input. Written once, consumed repeatedly. Never modified.

Layer 2.5 (Research Tracking): RESEARCH-ACTIVE, EXT-RESEARCH-REGISTRY
  -> Bridge between research and application. Updated by every stage.

Layer 3 (Stage Infrastructure): STAGE-HEADER, CLAUDE.md, RESEARCH-GATE, CONVENTION-SPEC
  -> Per-stage scaffolding. Created during Phase 0, finalized at stage end.

Layer 4 (Findings): outbound-findings.md
  -> Stage outputs. Predecessor/successor chain across stages.

Layer 5 (Synthesis): SYNTHESIS, AUDIT-SYNTHESIS
  -> Cross-exploration analysis. Written post-build.

Layer 6 (Pattern Catalogs): density-patterns, organizational-patterns, axis-patterns, PATTERN-INDEX
  -> Validated outputs. Live in DESIGN-SYSTEM/patterns/, not in provenance/.

Layer 7 (Handoff): HANDOFF-{stage}-TO-{next-stage}
  -> Gate documents. Live in outgoing stage's directory. Written at stage end.

Layer 8 (Distributed): Inline threading headers (490+), light sections (244+), HTML headers (12+)
  -> Per-file metadata. Every source file is a chain node.

TRAVERSAL SEMANTICS:
- Forward: Layer 2 -> Layer 4 -> Layer 7 -> next stage
- Backward: Layer 8 -> Layer 4 -> Layer 2
- Cross-stage: Layer 5 -> Layer 5 (compare SYNTHESIS docs)
- Identity: Layer 1 -> Layer 3 -> Layer 8 (enforcement path)
```

---

## 10. THE LAYER ARCHITECTURE'S DEEPEST IMPLICATION FOR AD

The most important thing I discovered through this analysis: **the provenance chain is NOT a linear chain.** It is a LAYERED GRAPH with 8 functional layers, 4 traversal paths, and two independent sub-chain structures (STAGE-HEADER chain and outbound-findings chain). The skeleton treats it as a list of files to create and update. It should treat it as a TOPOLOGY to maintain.

The skeleton's files are all in the right places. The skeleton's timing (incremental vs deferred) is correct. What's missing is the META-UNDERSTANDING that these files form a structured graph with specific layer properties and traversal semantics. Adding this understanding (30-50 lines in the skeleton) would prevent the kind of accidental architectural violations that led to OD's 51-file dark matter problem.

---

*End of chain layer structure analysis.*
