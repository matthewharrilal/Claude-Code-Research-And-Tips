# 02 -- PROVENANCE ARCHITECTURE

**Synthesized from:** ad-skeleton-provenance.md (648 lines), provenance-chain-gaps.md (411 lines), provenance-chain-audit.md (320 lines), chain-layers-gaps.md (562 lines), chain-layers-audit.md (181 lines)

---

## PART A: STRUCTURAL DEFINITIONS (What Things ARE)

This section defines the provenance chain's topology, its layers, its traversal semantics, and the physical/functional distinction. Every definition includes: what it IS, where it LIVES, who READS it, who WRITES it, and how it connects to adjacent layers.

---

### A.1 THE PROVENANCE CHAIN IS A LAYERED GRAPH, NOT A LINEAR CHAIN

The provenance chain is NOT a sequence of documents. It is a **layered directed graph** with 9 functional levels (labeled 0 through 8, with an interpolated 2.5), 4 traversal paths, and two independent sub-chain structures (STAGE-HEADER chain and outbound-findings chain running in parallel).

The skeleton treats provenance as a list of files to create and update. It must instead treat provenance as a TOPOLOGY to maintain. Without this understanding, agents produce "dark matter" -- files that contain valuable information but sit outside the formal graph, disconnected from traversal paths. OD accumulated 51 such dark matter files (~32,800 lines) because its build lacked graph-awareness.

**Source evidence:** chain-layers-gaps.md Section 10: "the provenance chain is NOT a linear chain. It is a LAYERED GRAPH with 8 functional layers, 4 traversal paths, and two independent sub-chain structures." Auditor confirmed: "The 8-layer taxonomy is a genuine contribution -- no existing document defines the functional layers this clearly" (chain-layers-audit.md Section 4).

---

### A.2 THREE PHYSICAL LAYERS VS 9 FUNCTIONAL LAYERS

The provenance system has two independent classification schemes that coexist without contradiction. Agents must understand BOTH.

#### A.2.1 Three Physical Layers (WHERE Provenance Lives)

Documented in `provenance/CLAUDE.md` Section 6 ("THE THREE LAYERS OF PROVENANCE"). These describe the physical substrate:

| Physical Layer | What It Is | File Count | Created In |
|----------------|-----------|------------|------------|
| **P1: Inline Threading Headers** | 7 populated sections (numbered 1,2,3,5,6,8,10 with gaps at 4,7,9) embedded in every source file as HTML/CSS/MD comments. Sections: WHY EXISTS, QUESTION ANSWERED, STATUS, BUILT ON, MUST HONOR, CONSUMED BY, DIAGNOSTIC QUESTIONS. | 490 files | Phase 2B |
| **P2: Light Provenance Sections** | Shorter metadata linking files to parent phase and T1 synthesis. Bridge between P1 and P3. Placed AFTER closing comment delimiter, never inside. | 244 files | Phase 2D |
| **P3: Formal Chain Documents** | Per-stage curated narrative documents with YAML frontmatter, structured sections, predecessor/successor links. | ~8 per stage + ~5 pipeline-level | Remediation (OD) / Phase 0 (AD) |

**Correction from auditor:** The analyst originally described P1 as having "10 numbered sections." Verified count is 7 populated sections with 3 reserved/skipped slots. The numbering scheme goes up to 10 but sections 4, 7, and 9 are gaps. (provenance-chain-audit.md, Check 1)

**Source evidence:** provenance-chain-gaps.md GAP-PC-01: "The skeleton NEVER mentions Layers 1 or 2 (inline threading headers and light sections)." Auditor confirmed HIGH severity.

#### A.2.2 Nine Functional Layers (WHAT Provenance Does)

These describe the provenance chain's purpose hierarchy. Derived from full reading of 25+ chain documents by the chain-layers analyst, confirmed by independent auditor verification.

##### Layer 0: Meta-Architecture (The Map of the Map)

**Purpose:** Describes the chain itself. The ONLY self-referential layer. Updated by EVERY stage.

| File | Location | Function | Who Reads | Who Writes |
|------|----------|----------|-----------|------------|
| PIPELINE-MANIFEST.md | `DESIGN-SYSTEM/provenance/` | Master finding registry (476+ IDs), lifecycle tracking, cross-reference index (Section E) | Every agent entering the chain | Lead (batch updates between waves) |
| BACKBONE.md | `DESIGN-SYSTEM/` | Master narrative of entire pipeline, R3-023 chain trace in Section 13 | Every agent needing pipeline context | Lead (at stage completion) |
| provenance/CLAUDE.md | `DESIGN-SYSTEM/provenance/` | Navigation file, physical layer description, R3-023 walkthrough example | Every agent entering provenance/ directory (AUTO-READ by Claude Code) | Lead (at stage completion) |
| DESIGN-SYSTEM/CLAUDE.md | `DESIGN-SYSTEM/` | "THE KORTAI DESIGN MIND" entry point, "I want to..." navigation table | Every agent entering DESIGN-SYSTEM/ (AUTO-READ) | Lead (at stage completion) |

**Key properties:**
- PIPELINE-MANIFEST is the single most-referenced file in the chain (12+ inbound references)
- BACKBONE is second-most-referenced (12+ inbound)
- Layer 0 contains the ONLY cross-reference index (PIPELINE-MANIFEST Section E)
- These files are NEVER owned by one stage -- they are UPDATED by every stage

**CRITICAL STALE DATA BUG (from auditor):** BACKBONE.md says "R-2: Creative Layouts (78)" at BOTH line 85 (pipeline diagram) and line 311 (Research Chain Table). PIPELINE-MANIFEST was corrected from 78 to 27 during the comprehensive audit, but BACKBONE was NOT corrected. AD must fix this BEFORE starting. (chain-layers-audit.md, MISSED-1)

##### Layer 1: Soul + Identity (Immutable Foundations)

**Purpose:** Defines what CANNOT change. The DNA of the system.

| File | Location | Function | Who Reads | Who Writes |
|------|----------|----------|-----------|------------|
| SOUL-DISCOVERIES.md | `DESIGN-SYSTEM/provenance/` (archival) + `checkpoints/` (operational) | 5 soul pieces as perceptual truths | Every builder (mandatory) | Lead (only if new soul pieces discovered) |
| ACCUMULATED-IDENTITY-v1.1.md | `knowledge-architecture/` | Full inherited mind: soul + findings + constraints + open questions (577 lines) | Every agent at Phase 0 | Lead (evolves per stage: v1 -> v1.1 -> v2) |
| tokens/geometry.md | `DESIGN-SYSTEM/tokens/` | LOCKED CSS values: border-radius: 0, box-shadow: none | Convention spec references these | NEVER modified (locked) |
| tokens/colors.md | `DESIGN-SYSTEM/tokens/` | LOCKED palette: #E83025, #1A1A1A, #FAFAF5, etc. | Convention spec references these | NEVER modified (locked) |
| tokens/typography.md | `DESIGN-SYSTEM/tokens/` | LOCKED font trio: Instrument Serif, Inter, JetBrains Mono | Convention spec references these | NEVER modified (locked) |
| tokens/spacing.md | `DESIGN-SYSTEM/tokens/` | LOCKED spacing tokens (--space-*) | Convention spec references these | NEVER modified (locked) |

**Key properties:**
- SOUL-DISCOVERIES is a SYNCED DUPLICATE (see Section A.6 below for protocol)
- ACCUMULATED-IDENTITY lives OUTSIDE the formal provenance directory -- this is an architectural anomaly identified by the chain-layers analyst (GAP-CL-02)
- Tokens are LOCKED: any modification IS a soul modification
- Soul Piece #4 + ANTI-PHYSICAL identity = the deepest constraint layer

**STALE REFERENCE BUG (from auditor):** stage-4-axis-ad/CLAUDE.md references "ACCUMULATED-IDENTITY-v1.md" at lines 46 and 66 instead of v1.1. Must be corrected before AD starts. (chain-layers-audit.md, MISSED-2)

##### Layer 2: Original Research (External Input)

**Purpose:** The raw research that feeds the pipeline. Written ONCE, consumed repeatedly, NEVER modified after creation.

| File | Location | Lines | Finding Count | Primary Consumer |
|------|----------|-------|---------------|-----------------|
| R1-DOCUMENTATION-PATTERNS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~600 | 28 | OD (Stage 3) |
| R2-CREATIVE-LAYOUTS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~400 | 27 (NOT 78 -- see BACKBONE bug above) | AD (Stage 4) -- 25 applicable, 2 SOUL FAIL |
| R3-DENSITY-DIMENSIONS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~800 | 51 | DD (Stage 2) |
| R4-AXIS-INNOVATIONS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~2000 | 192 | AD (Stage 4) -- PRIMARY |
| R5-COMBINATION-THEORY.md | `DESIGN-SYSTEM/provenance/original-research/` | ~500 | 39 | CD (Stage 5) |
| RESEARCH-SYNTHESIS.md | `DESIGN-SYSTEM/provenance/original-research/` | ~400 | -- | Cross-stage insights |

**Key properties:**
- 337 total findings across R-1 through R-5 (28 + 27 + 51 + 192 + 39)
- Each stage has a PRIMARY research source: DD=R-3, OD=R-1, AD=R-4, CD=R-5
- Research files are NEVER modified after creation -- only their APPLICATION STATUS changes (tracked in Layer 2.5)
- Currently 32/337 = 9.5% applied across all stages

**R-2 count disambiguation (from provenance-chain-gaps.md Section 10):** HANDOFF says "25 applicable, 2 SOUL FAIL" -- meaning 27 total, 25 usable. AD agents reading "25 applicable R-2 findings" must know there are 2 additional SOUL FAIL findings they should NOT apply.

##### Layer 2.5: Research Application Tracking (Status Bridge)

**Purpose:** Bridges Layer 2 (raw research) and Layers 3-5 (stage outputs). Tracks WHICH research has been applied WHERE.

| File | Location | Function | Who Reads | Who Writes |
|------|----------|----------|-----------|------------|
| RESEARCH-ACTIVE.md | `DESIGN-SYSTEM/provenance/` (archival) + `checkpoints/` (operational) | Per-finding application status for all 337 findings | Research gate agents, builders | Lead (between waves) |
| EXT-RESEARCH-REGISTRY.md | `DESIGN-SYSTEM/provenance/` | Registry of 94 bespoke external research findings (EXT-*) | Builders, research agents | Researchers (append-only per category) |

**Key properties:**
- RESEARCH-ACTIVE is ANOTHER synced duplicate (see Section A.6)
- EXT-RESEARCH-REGISTRY was NOT incremental in OD -- it was batch-compiled by a census agent AFTER re-enrichment. AD should register EXT findings incrementally as they're commissioned. (provenance-chain-gaps.md GAP-PC-11)
- R-2 at 0% applied is a gap that AD must address

##### Layer 3: Per-Stage Infrastructure (Stage Scaffolding)

**Purpose:** Each pipeline stage gets a set of structural documents -- the "bones" of each stage's provenance. Created during Phase 0, finalized at stage end.

**Per-stage template (the Stage-N document set):**

| Document Type | OD Instance | AD Instance (to create) | Function |
|---------------|-------------|------------------------|----------|
| STAGE-HEADER.md | stage-3-organization-od/ | stage-4-axis-ad/ | What the stage did, consumed, produced, quality achieved (8 sections -- see A.3.1) |
| CLAUDE.md | stage-3-organization-od/ | stage-4-axis-ad/ | Navigation file for agents entering the directory (auto-read by Claude Code) |
| RESEARCH-GATE.md | OD-RESEARCH-GATE.md | AD-RESEARCH-GATE.md | Pre-build research filtering + post-build verification |
| CONVENTION-SPEC.md | OD-CONVENTION-SPEC.md | AD-CONVENTION-SPEC.md | Unified convention definition -- MUST exist before build (Wave 0) |

**Key properties:**
- STAGE-HEADER has YAML frontmatter with predecessor/successor links -- this creates the BACKBONE chain
- CLAUDE.md files are AUTO-READ by Claude Code on directory entry -- they function as mandatory orientation
- RESEARCH-GATE is an OD innovation (DD didn't have one)
- CONVENTION-SPEC was created retroactively for OD during re-enrichment -- AD creates it pre-build (the single most important convention-drift prevention)
- Each STAGE-HEADER connects to predecessor/successor via YAML frontmatter: Stage 1 -> 2 -> 3 -> 4 -> 5

##### Layer 4: Stage Findings (The Output Chain)

**Purpose:** Formal declarations of what each stage discovered. Forms a parallel chain to STAGE-HEADER.

| File | Location | Finding Range | Predecessor -> Successor |
|------|----------|---------------|-------------------------|
| component-findings.md | stage-1-components/ | COMP-F-001 through COMP-F-021 | (origin) -> DD-outbound |
| DD-outbound-findings.md | stage-2-density-dd/ | DD-F-001 through DD-F-018 | component-findings -> OD-outbound |
| OD-outbound-findings.md | stage-3-organization-od/ | OD-F-001 through OD-F-013 + 4 categorical | DD-outbound -> AD-outbound |
| AD-outbound-findings.md | stage-4-axis-ad/ | AD-F-001 through AD-F-028+ | OD-outbound -> CD-outbound |

**Key properties:**
- This chain is PARALLEL to the STAGE-HEADER chain -- two independent traversal paths
- Each file has YAML frontmatter with predecessor/successor links: `predecessor: provenance/stage-2-density-dd/DD-outbound-findings.md`, `successor: provenance/stage-4-axis-ad/AD-outbound-findings.md`
- OD-outbound-findings.md has 14 YAML keys (not just 9): the standard 9 plus `total_od_f_findings`, `total_findings_all_categories`, `finding_id_range`, `wave2_reenrichment`, `wave3_reenrichment` (provenance-chain-audit.md, GAP-PC-02 verification)
- Finding IDs are IMMUTABLE once assigned (DD-F-006 has 12+ downstream references)
- The OD-F-005 collision was the canonical failure case that led to reserved ID ranges

##### Layer 5: Stage Synthesis (Cross-Exploration Analysis)

**Purpose:** What the stage learned ACROSS all its explorations. Written post-build by nature.

| File | Location | Function |
|------|----------|----------|
| OD-SYNTHESIS.md | stage-3-organization-od/ | 7-section cross-OD analysis |
| OD-AUDIT-SYNTHESIS.md | stage-3-organization-od/ | Audit record (89 findings, 16 fixes) |
| AD-SYNTHESIS.md | stage-4-axis-ad/ (to create) | 7-section cross-AD analysis |
| AD-AUDIT-SYNTHESIS.md | stage-4-axis-ad/ (to create) | Audit record |

**Key properties:**
- SYNTHESIS requires cross-exploration comparison -- MUST be deferred (not incremental)
- AUDIT-SYNTHESIS is post-hoc by nature -- cannot exist before audit
- Section 1 ("The OD/AD Story") is the narrative version of what STAGE-HEADER captures structurally

##### Layer 6: Pattern Catalogs (Validated Outputs)

**Purpose:** The validated patterns produced by each stage. Consumable by downstream stages AND migration.

| File | Location | Function |
|------|----------|----------|
| density-patterns.md | `DESIGN-SYSTEM/patterns/` | 6 density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL) |
| organizational-patterns.md | `DESIGN-SYSTEM/patterns/` | 6 organizational patterns |
| axis-patterns.md | `DESIGN-SYSTEM/patterns/` (to create) | 6 axis patterns |
| PATTERN-INDEX.md | `DESIGN-SYSTEM/patterns/` | Master index (needs AD entry) |
| combination-rules.md | `DESIGN-SYSTEM/patterns/` | Planned combination rules |
| anti-patterns/registry.md | `DESIGN-SYSTEM/anti-patterns/` | Anti-pattern registry (needs AD-F-AP-NNN entries) |

**Key properties:**
- Pattern files live OUTSIDE the provenance directory -- in `DESIGN-SYSTEM/patterns/`
- They cross-reference back to provenance (BACKBONE.md, PIPELINE-MANIFEST.md)
- Each pattern has research provenance (R-finding IDs, DD-F/OD-F finding IDs, EXT-* IDs)
- This layer is the primary MIGRATION interface
- AD must: create axis-patterns.md in `DESIGN-SYSTEM/patterns/`, update PATTERN-INDEX.md with "Axis Patterns" entry, add AD-F-AP-NNN entries to anti-patterns/registry.md (chain-layers-gaps.md GAP-CL-06)

##### Layer 7: Handoff Documents (Stage Transitions)

**Purpose:** Gate files that transfer everything from one stage to the next. Written at stage completion.

| File | Location | Function |
|------|----------|----------|
| HANDOFF-DD-TO-OD.md | stage-2-density-dd/ | DD -> OD gate with acknowledgment protocol |
| HANDOFF-OD-TO-AD.md | stage-3-organization-od/ | OD -> AD gate with 11-item acknowledgment checklist (~500+ lines) |
| HANDOFF-AD-TO-CD.md | stage-4-axis-ad/ (to create) | AD -> CD gate |

**Key properties:**
- Handoffs live in the OUTGOING stage's directory (DD's handoff lives in stage-2, not stage-3)
- Each handoff has an ACKNOWLEDGMENT PROTOCOL -- a checkbox list the receiving stage must confirm
- Handoffs include the TRANSITIVE CHAIN concept (org -> density -> axis) bridging stages
- The HANDOFF is what a fresh agent reads FIRST -- it is the fastest path to full context
- Handoffs are the ONLY comprehensive transfer documents: findings + constraints + pairings + lessons + responsibilities

##### Layer 8: Distributed Provenance (Per-File Metadata)

**Purpose:** Every source file is a node in a traversal graph. Three sub-layers:

| Sub-Layer | Scope | Created In | Function |
|-----------|-------|------------|----------|
| **Build-phase headers** | 12 files (6 DD + 6 OD explorations) | During build | Score line, iteration notes, applied research citations, anti-patterns, DD-F-006 fractal compliance -- ~45 lines each |
| **Inline Threading Headers** | 490 files | Phase 2B | WHY EXISTS, STATUS, SOUL, BUILT ON (dependency table), MUST HONOR, CONSUMED BY (consumer table) -- ~46 lines each |
| **Light Provenance Sections** | 244 files | Phase 2D | Parent phase + T1 synthesis link |

**IMPORTANT CORRECTION (from auditor):** Exploration HTML files have TWO distinct header blocks, not one "150+ line header." The build-phase header (created DURING build by builder) and the inline threading header (added AFTER build in Phase 2B) serve different functions. The build-phase header IS the provenance metadata; the threading header is graph-traversal metadata. (chain-layers-audit.md, MISSED-3)

**Key properties:**
- The most voluminous layer by file count (490+ files)
- Creates a DISTRIBUTED DEPENDENCY GRAPH -- any file can be traced to what it depends on and what depends on it
- Inline threading headers have structured sections: WHY, STATUS, BUILT ON (dependencies), CONSUMED BY (consumers)
- BUILT ON tables create forward/backward traversal links between files
- CONSUMED BY tables create consumer tracking

---

### A.3 DOCUMENT TEMPLATES (What Each Chain Document Contains)

#### A.3.1 STAGE-HEADER.md (8 Sections)

Verified structure from OD STAGE-HEADER.md (provenance-chain-audit.md, Check 2):

1. **THE STORY** -- What the stage explored
2. **WHAT THIS STAGE CONSUMED** -- Table: inputs, file locations, item counts, roles
3. **WHAT THIS STAGE PRODUCED** -- Table: outputs, file locations, status
4. **QUALITY ACHIEVED** -- Scores, soul compliance, application rates
5. **KEY DECISIONS** -- Numbered table with Why and Impact columns
6. **CAUSAL RELATIONSHIPS** -- How findings relate to each other
7. **ACCUMULATED RESEARCH WEIGHT** -- Research consumption summary
8. **FILES IN THIS FOLDER** -- Inventory of all stage directory files

**YAML frontmatter (9 keys):**
```yaml
---
pipeline_stage: 4
stage_name: Axis Exploration (AD)
file_type: stage-header
predecessor: provenance/stage-3-organization-od/STAGE-HEADER.md
successor: provenance/stage-5-combination-cd/STAGE-HEADER.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: [DATE]
status: [IN_PROGRESS | COMPLETE]
---
```

#### A.3.2 Outbound-Findings.md (7-Field Finding Blocks)

Per-finding template:

```markdown
### AD-F-NNN: [Title]

| Field | Value |
|-------|-------|
| **ID** | AD-F-NNN |
| **Finding** | [One-sentence discovery] |
| **Source** | AD-NNN-[name].html |
| **Discovery Context** | [How and when discovered during build] |
| **Status** | APPLIED |
| **Score** | [X/40 if scored] |
| **Target Stages** | CD, Migration |

**Description:** [2-3 paragraphs]
**Chain Impact:** [How this constrains downstream]
**Validation Evidence:** [Specific HTML/CSS/DOM proof]
```

**YAML frontmatter (14 keys for AD):**
```yaml
---
pipeline_stage: 4
stage_name: Axis Exploration (AD)
file_type: outbound-findings
predecessor: provenance/stage-3-organization-od/OD-outbound-findings.md
successor: provenance/stage-5-combination-cd/CD-outbound-findings.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
last_updated: [DATE]
total_ad_f_findings: [COUNT]
total_findings_all_categories: [COUNT]
finding_id_range: AD-F-001 through AD-F-[N]
status: [IN_PROGRESS | COMPLETE]
---
```

#### A.3.3 Inline Threading Header (7 Populated Sections)

Every AD chain document and exploration HTML must have this header:

```
1. WHY THIS EXISTS
   [Statement of purpose and chain position]

2. QUESTION THIS ANSWERS
   [The question this file resolves]

3. STATUS
   [COMPLETE | IN_PROGRESS | PENDING]

5. BUILT ON
   | Dependency | Relationship |
   |------------|-------------|
   | [file/finding] | [How this document depends on it] |

6. MUST HONOR
   [List of constraints this document must respect]

8. CONSUMED BY
   | Consumer | Relationship |
   |----------|-------------|
   | [file/agent] | [How this document is used downstream] |

10. DIAGNOSTIC QUESTIONS
    [Questions a fresh agent should be able to answer from this file alone]
```

Note: Sections 4, 7, 9 are reserved/skipped in the numbering scheme.

---

### A.4 FOUR TRAVERSAL PATHS (How Agents Navigate)

The CLAUDE.md files across directories form a NAVIGATION MESH -- an implicit Layer 0.5 that enables agent orientation. There are 4 primary traversal paths through the graph:

#### Traversal 1: Forward (Finding Origin -> Application)

```
R3-023 (Layer 2: original research)
  -> PIPELINE-MANIFEST Section A (Layer 0: status tracking)
  -> DD-006 exploration (Layer 8: HTML header cites R3-023)
  -> DD-F-006 declaration (Layer 4: DD-outbound-findings)
  -> HANDOFF-DD-TO-OD (Layer 7: mandates DD-F-006 for all OD)
  -> OD-001 through OD-006 (Layer 8: all cite DD-F-006)
  -> OD-SYNTHESIS (Layer 5: cross-OD references fractal)
  -> HANDOFF-OD-TO-AD (Layer 7: carries DD-F-006 forward)
  -> AD explorations (Layer 8: must cite DD-F-006)
```

Verified against PIPELINE-MANIFEST Section E and BACKBONE Section 13. (chain-layers-audit.md, Section 1.2)

#### Traversal 2: Backward (Artifact -> Research Origin)

```
OD-003 HTML file (Layer 8)
  -> Inline header BUILT ON: DD-F-003, DD-F-006, R1-001, R1-016, EXT-TASK-*
  -> OD-outbound-findings (Layer 4) for OD-F-### declarations
  -> OD-RESEARCH-GATE (Layer 3) for R-1 finding-by-finding mapping
  -> DD-outbound-findings (Layer 4) for DD-F-003 definition
  -> R1-DOCUMENTATION-PATTERNS (Layer 2) for R1-001 original text
  -> EXT-RESEARCH-REGISTRY (Layer 2.5) for EXT-TASK-001 through EXT-TASK-019
  -> PIPELINE-MANIFEST (Layer 0) for lifecycle status of all cited findings
```

Verified against OD-003-task-based.html inline header lines 28-31. (chain-layers-audit.md, Section 1.2)

#### Traversal 3: Cross-Stage (Sibling Comparison)

```
OD-001 vs OD-006 (both Layer 8)
  -> OD-SYNTHESIS Section 3 (Layer 5: 6-pattern analysis table)
  -> organizational-patterns.md (Layer 6: pattern comparison)
  -> OD-CONVENTION-SPEC (Layer 3: were conventions applied consistently?)
  -> OD-AUDIT-SYNTHESIS (Layer 5: audit finding comparison)
  -> ACCUMULATED-IDENTITY (Layer 1: did both honor the same identity?)
```

#### Traversal 4: Identity Enforcement (Soul Piece -> Verification)

```
Soul Piece #1 "Sharp Edges" (Layer 1: SOUL-DISCOVERIES)
  -> ACCUMULATED-IDENTITY Section 1 (Layer 1: perceptual truth)
  -> tokens/geometry.md (Layer 1: border-radius: 0 LOCKED)
  -> OD-CONVENTION-SPEC Section 1 (Layer 3: 10-line soul checklist)
  -> OD-001 through OD-006 (Layer 8: all verified 0 violations)
  -> OD-AUDIT-SYNTHESIS (Layer 5: 0/3,479 soul violations)
  -> PIPELINE-MANIFEST Section C (Layer 0: soul piece tracking)
```

Verified through SOUL-DISCOVERIES -> OD-003 header -> STAGE-HEADER. (chain-layers-audit.md, Section 1.2)

---

### A.5 CHAIN DOCUMENTS VS BUILD TOOLS (The Critical Distinction)

The skeleton proposes files of two fundamentally different types. Conflating them leads to "dark matter" -- OD accumulated 51 dark matter files because build tools were not distinguished from chain documents.

#### Chain Documents (Permanent, Part of the Graph)

Live in `DESIGN-SYSTEM/provenance/stage-4-axis-ad/`. Have YAML frontmatter with predecessor/successor links. Are traversable. Part of the J-03 test (a fresh agent can answer questions from these alone).

| File | Layer |
|------|-------|
| AD-CONVENTION-SPEC.md | 3 |
| AD-outbound-findings.md | 4 |
| AD-SYNTHESIS.md | 5 |
| AD-AUDIT-SYNTHESIS.md | 5 |
| AD-RESEARCH-GATE.md | 3 |
| STAGE-HEADER.md | 3 |
| stage-4-axis-ad/CLAUDE.md | 3 |
| HANDOFF-AD-TO-CD.md | 7 |
| ACCUMULATED-IDENTITY-v2.md | 1 |
| axis-patterns.md | 6 |

#### Build Tools (Ephemeral, Support the Process)

Live in `knowledge-architecture/_ad-execution/`. Do NOT have predecessor/successor YAML. NOT part of the formal graph. Valuable but not traversable.

| File | Purpose |
|------|---------|
| AD-SOUL-TEMPLATE.html | Pre-populated HTML skeleton for builders |
| AD-BUILD-STATE.md | Weaver's state tracking |
| AD-BINARY-GATES.md | Formalized gate definitions |
| research-package-ad-{1-6}.md | Per-builder research packages |
| identity-delta-ad-wave{N}.md | Incremental identity evolution tracking |
| findings-builder-{A,B,C,...}.md | Per-builder scratch files for findings |

**Source evidence:** chain-layers-gaps.md GAP-CL-04: "Build tools vs chain documents not distinguished." Auditor confirmed: "The categorization... is architecturally sound." (chain-layers-audit.md, Section 1.4)

---

### A.6 THE SYNCED DUPLICATE PATTERN

Two critical files exist as synchronized duplicates across two directories:

| File | Operational Copy | Archival Copy | Sync Protocol |
|------|-----------------|---------------|---------------|
| SOUL-DISCOVERIES.md | `checkpoints/SOUL-DISCOVERIES.md` | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | "operational edits go in checkpoints/, archival copies here" |
| RESEARCH-ACTIVE.md | `checkpoints/RESEARCH-ACTIVE.md` | `DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md` | Same protocol |

Both archival copies' inline headers explicitly state at line 17: "SYNCED DUPLICATE of checkpoints/[filename]. Sync protocol: operational edits go in checkpoints/, archival copies here." (provenance-chain-audit.md, GAP-PC-12, verified as EXACT MATCH)

**The problem:** Sync is not automated. If the checkpoints/ copy is updated but the provenance/ copy is not, the chain has contradictory data. During OD re-enrichment, the updater-b agent directly updated the provenance/ copy, violating the stated protocol.

**AD resolution:** Either (a) continue the sync pattern with explicit sync verification in Gate 6, or (b) consolidate to single-source in `DESIGN-SYSTEM/provenance/` and make checkpoints/ the pointer. Option (b) is architecturally cleaner but breaks an existing pattern. The skeleton must choose one.

---

### A.7 THE CLAUDE.md NAVIGATION MESH

Five CLAUDE.md files require AD-related updates. These files form a navigation mesh -- each is auto-read by Claude Code on directory entry:

| CLAUDE.md File | Current State | AD Update Required |
|---------------|---------------|-------------------|
| `DESIGN-SYSTEM/CLAUDE.md` | Has "Start AD work -> HANDOFF-OD-TO-AD" | Update with AD completion state, add AD entry to navigation |
| `provenance/CLAUDE.md` | stage-4 shows PENDING | Update from PENDING to IN_PROGRESS then COMPLETE |
| `stage-4-axis-ad/CLAUDE.md` | Exists (99 lines) with MANDATORY ENFORCEMENT GATE | **Already richer than expected** -- has 6 gate conditions. Update v1 -> v1.1 reference. Populate fully. |
| `explorations/axis/CLAUDE.md` | **DOES NOT EXIST** (directory is empty) | CREATE with AD inventory and scores |
| `explorations/CLAUDE.md` | Has AD row | Update from PENDING to IN_PROGRESS then COMPLETE |

**Source evidence:** chain-layers-gaps.md GAP-CL-03 and chain-layers-audit.md Section 1.3 (all 5 confirmed). Auditor correction: "The analyst describes [stage-4 CLAUDE.md] as a 'placeholder' but it already has substantial gate logic." (chain-layers-audit.md, Section 1.3)

---

### A.8 THREE CROSS-REFERENCING MECHANISMS

OD documents cross-reference each other using three distinct syntaxes. AD must use all three consistently.

**Mechanism A: YAML Frontmatter Links**
```yaml
predecessor: provenance/stage-2-density-dd/DD-outbound-findings.md
successor: provenance/stage-4-axis-ad/AD-outbound-findings.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
```
Used in: STAGE-HEADER, outbound-findings, HANDOFF, PIPELINE-MANIFEST

**Mechanism B: Inline Finding ID Citations**
```
"Applying OD-F-005: Organization IS Density"
"DD-F-006 fractal self-similarity at 4 scales"
```
Used in: HTML file headers (CSS comments), outbound-findings, SYNTHESIS, ACCUMULATED-IDENTITY

**Mechanism C: Table-Based Dependency Tracking (Inline Headers)**
```
5. BUILT ON
| Dependency | Relationship |
|------------|-------------|
| DD-F-006   | Mandatory constraint honored |
```
Used in: Every file's inline threading header (Layer 8 / Physical Layer P1)

**Gap (provenance-chain-gaps.md GAP-PC-02, GAP-PC-03):** The skeleton specifies Mechanism B and partially Mechanism A but completely omits Mechanism C. AD must specify inline header table requirements.

---

## PART B: PROCEDURAL RULES (What to DO)

---

### B.1 MODE C INCREMENTAL PROVENANCE: THE CORRECT MECHANISM

#### B.1.1 The Core Lesson

OD built provenance AFTER the fact. AD builds provenance DURING the fact. This is the single most important change.

OD's failure: Builder discovers insight -> continues building -> plans to document later -> session ends -> provenance never written -> 18-agent remediation required (creating an entire formal document architecture that did NOT exist before).

AD's protocol: Builder discovers insight -> STOPS building -> writes finding entry -> RESUMES building.

**But this is the single highest-risk assumption in the skeleton.** (See B.1.3 below.)

#### B.1.2 What the 18-Agent Remediation Actually Created

The skeleton says "OD deferred provenance -> required 18-agent remediation. AD writes provenance incrementally." This is a dangerous oversimplification. (provenance-chain-gaps.md GAP-PC-05, auditor confirmed HIGH)

**Before remediation (what existed):**
- 6 OD HTML files with CSS comment headers (partial Layer 8)
- builder-log.md with informal finding notes
- An informal OD-CHECKPOINT.md
- ACCUMULATED-IDENTITY-v1.md (created during build)
- NO formal STAGE-HEADER.md
- NO formal OD-outbound-findings.md
- NO formal OD-SYNTHESIS.md
- NO formal OD-RESEARCH-GATE.md
- NO formal OD-AUDIT-SYNTHESIS.md
- NO PIPELINE-MANIFEST entries for OD-F findings
- NO HANDOFF-OD-TO-AD.md
- NO EXT-RESEARCH-REGISTRY.md

**After remediation (what was created):**
- All 8 formal chain documents (complete Layer 3 + 4 + 5 + 7)
- PIPELINE-MANIFEST updated with OD-F entries (Layer 0)
- BACKBONE updated with Stage 3 narrative (Layer 0)
- EXT-RESEARCH-REGISTRY created (Layer 2.5)
- OD-F-005 collision discovered and resolved
- 3 ghost findings identified
- 94/104 verification items confirmed passing

**The implication for AD:** The remediation didn't just catch up on deferred writing -- it CREATED an entire formal document architecture from scratch. AD must create this architecture at Phase 0 (scaffolding), not assume it exists.

#### B.1.3 THE PROVENANCE TIMING PARADOX: Why Builders May Not Be Able to Write Provenance

**The paradox:** "Builders write findings at the moment of discovery" sounds right. But there is ZERO evidence from OD that builders can successfully do this. (provenance-chain-gaps.md GAP-PC-07, auditor confirmed HIGH -- "This is arguably the most critical gap in the entire analysis")

**What actually happened in OD:**
- Builders wrote HTML content and CSS comment headers with finding REFERENCES ("Applying OD-F-005")
- The formal 7-field finding entries were NOT written by builders during OD's original build
- They were created retroactively in the remediation
- The re-enrichment's scribes (per-wave) wrote provenance updates, not the builders themselves

**Why builders may fail:**
1. Builder agents have limited context windows. Interrupting HTML construction to open a separate markdown file, write a structured 7-field entry, then return to HTML construction causes context thrashing.
2. OD builders wrote informal CSS comments but never wrote formal structured blocks in outbound-findings.md.
3. The skeleton calls this "the single most important change from OD" -- it remains UNTESTED.

**Resolution: SCRIBE FALLBACK PROTOCOL**

The skeleton's proposed mechanism (builder writes findings) should be attempted but MUST have a fallback:

```
PRIMARY: Builder discovers finding -> STOPS -> writes AD-F-NNN entry -> RESUMES
FALLBACK: If Gate W-12 FAILS (0 findings written after build):
  1. Deploy per-wave scribe agent (one per wave, sequential)
  2. Scribe reads builder's CSS comment headers + builder messages
  3. Scribe formalizes findings into 7-field blocks in AD-outbound-findings.md
  4. This is PROVEN in OD re-enrichment (scribes wrote provenance successfully)
```

**Source evidence:** ad-skeleton-provenance.md Section 3: "Write it when you discover it. Not later." provenance-chain-gaps.md GAP-PC-07: "ZERO evidence that builders can successfully interrupt." Auditor: "Severity CORRECT (HIGH)." provenance-chain-audit.md MISSED-04: "Gate W-12 has no FAIL ROUTE and depends on untested GAP-PC-07."

---

### B.2 WRITE CONTENTION: THE SILENT DATA LOSS PROBLEM (GAP-PC-09 -- CRITICAL)

#### B.2.1 The Problem

The Write tool performs ATOMIC REPLACEMENT of entire file contents. If two builders within a wave both try to append findings to AD-outbound-findings.md simultaneously:

1. Builder-A reads AD-outbound-findings.md (contains findings 1-3)
2. Builder-B reads AD-outbound-findings.md (contains findings 1-3)
3. Builder-A writes finding 4 (file now contains 1-4)
4. Builder-B writes finding 5 (file now contains 1-3 and 5 -- FINDING 4 IS SILENTLY LOST)

There is no error, no warning, no recovery mechanism. The data is simply gone.

**The skeleton's ownership matrix says:** "AD-outbound-findings.md | Builder who discovers finding (append-only) | Read only." But if MULTIPLE builders own the file (since "Builder who discovers" could be any builder), then it's NOT single-owner. This IS a contention risk.

**Severity:** CRITICAL (upgraded from HIGH by auditor). Silent data loss on findings is catastrophic with no recovery mechanism.

#### B.2.2 The Solution: Per-Builder Scratch Files

Within each wave, builders write findings to their OWN per-builder scratch files. The lead or scribe merges them into AD-outbound-findings.md between waves.

| Agent | Writes To | When |
|-------|-----------|------|
| Builder-A | `_ad-execution/findings-builder-A.md` | During build wave |
| Builder-B | `_ad-execution/findings-builder-B.md` | During build wave |
| Builder-C | `_ad-execution/findings-builder-C.md` | During build wave |
| Lead | AD-outbound-findings.md | Between waves (merge from scratch files) |

**Why this works:** Each scratch file has exactly ONE writer. No contention possible. The lead merges sequentially between waves when no builders are active.

**OD precedent:** OD re-enrichment avoided contention by having scribes (not builders) write to shared files. The scribe role was sequential by design.

**Source evidence:** provenance-chain-gaps.md GAP-PC-09: "No file locking or contention resolution for simultaneous appends." Auditor UPGRADED to CRITICAL: "Silent data loss is catastrophic, not just high risk." (provenance-chain-audit.md, GAP-PC-09)

---

### B.3 THE DISCOVERY-TO-DOCUMENTATION FLOW (Corrected)

The original skeleton's flow diagram had an internal contradiction: the builder flow showed builders updating PIPELINE-MANIFEST directly, while the ownership matrix said Lead-only. The auditor noted this may be resolved in the synthesis document but flagged it as a warning.

**CORRECTED FLOW (resolving the contradiction):**

```
Builder notices something during AD-003 construction
    |
    v
Is this a FINDING (reusable insight for CD/Migration)?
    |
    YES                              NO (just implementation detail)
    |                                |
    v                                v
    STOP BUILDING                    Continue building
    |                                (no provenance needed)
    v
    Assign ID from reserved range
    (AD-003 range: AD-F-009 to AD-F-012)
    |
    v
    Write 7-field finding block to
    _ad-execution/findings-builder-C.md    <-- PER-BUILDER FILE, not shared
    |
    v
    RESUME BUILDING
    |
    v
    Cite AD-F-NNN in the HTML header comment
    of the exploration being built
```

**What happens BETWEEN WAVES (Lead actions):**
1. Lead reads all per-builder scratch files
2. Lead appends findings to AD-outbound-findings.md (single writer)
3. Lead batch-updates PIPELINE-MANIFEST Section B (single writer)
4. Lead verifies finding counts match

---

### B.4 FINDING ID ASSIGNMENT PROTOCOL

#### B.4.1 ID Format

```
AD-F-NNN       Core axis pattern finding (NNN = 001-999)
AD-F-MP-NNN    Meta-pattern finding (cross-AD)
AD-F-PR-NNN    Process finding (about the build process)
AD-F-FL-NNN    Forward-looking finding (CD constraints)
AD-F-AP-NNN    Anti-pattern finding (what NOT to do)
```

#### B.4.2 Reserved Ranges (Assigned by Lead Before Wave 1)

| Builder | AD Exploration | Reserved Range | Max Core IDs |
|---------|---------------|----------------|--------------|
| Builder-A | AD-001 Z-Pattern | AD-F-001 through AD-F-004 | 4 |
| Builder-B | AD-002 F-Pattern | AD-F-005 through AD-F-008 | 4 |
| Builder-C | AD-003 Bento Grid | AD-F-009 through AD-F-012 | 4 |
| Builder-D | AD-004 Spiral Reveal | AD-F-013 through AD-F-016 | 4 |
| Builder-E | AD-005 Axis Choreography | AD-F-017 through AD-F-020 | 4 |
| Builder-F | AD-006 Creative | AD-F-021 through AD-F-028 | 8 |
| Overflow | Any builder needing more | AD-F-029+ | Unlimited |

**Why OD's collision happened:** Two agents (builder-log during OD-002 and OD-CHECKPOINT during OD-006) independently assigned OD-F-005 to different findings. The finding-registry.md diagnostic confirmed 10+ downstream citations for the OD-006 definition vs 0 for the OD-002 definition, requiring renumbering of 5 findings.

**Why reserved ranges prevent this:** Each builder has exclusive IDs. Even if two builders discover similar findings, they use different IDs. Deduplication happens at synthesis time (lead can merge if truly identical), not at assignment time.

#### B.4.3 Three Collision Types (All Three Must Be Prevented)

OD's finding-registry.md (verified by auditor) identified three collision types, not just one:

| Type | OD Instance | Prevention in AD |
|------|------------|-----------------|
| **Finding ID collision** | OD-F-005 (CRITICAL) | Reserved ranges per builder |
| **Research ID disambiguation** | R3-023 vs R3-036 (SIGNIFICANT) | Phase 0 must verify no R-4 ID collisions exist before builders cite them |
| **Category ID collision** | CA-001 (MODERATE) | Categorical IDs (AD-F-MP-*, AD-F-PR-*, etc.) use separate prefix namespace |

**Source evidence:** provenance-chain-gaps.md GAP-PC-08, verified against finding-registry.md lines 22-25: "Three collisions listed: OD-F-005 (CRITICAL), R3-023 (SIGNIFICANT), CA-001 (MODERATE)." (provenance-chain-audit.md, Check 6)

#### B.4.4 Finding Quality Checklist

Before assigning a finding ID, the builder verifies:

```
[ ] Is this genuinely reusable? (Will CD or Migration need to know this?)
[ ] Is this different from all existing findings? (Check OD-F, DD-F, COMP-F)
[ ] Can I write a one-sentence "Finding" that stands alone?
[ ] Can I describe "Chain Impact" (how this constrains downstream)?
[ ] Can I point to "Validation Evidence" (specific HTML/CSS/DOM proof)?
```

If any answer is NO, it is an implementation detail, not a finding. Do not assign an ID.

---

### B.5 FILE OWNERSHIP MATRIX (Prevents Contention)

| File | Owner | Other Agents May | Contention Risk |
|------|-------|-----------------|-----------------|
| AD-outbound-findings.md | Lead (merges from per-builder scratch files between waves) | Read only | ELIMINATED by per-builder scratch files |
| Per-builder scratch files | Each builder (one writer per file) | Lead reads between waves | NONE (single writer) |
| PIPELINE-MANIFEST.md | Lead only | Nobody else | NONE (single writer) |
| AD-RESEARCH-GATE.md | Lead / Research agent | Builders read only | LOW |
| STAGE-HEADER.md | Lead | Builders update section 3 via messages | LOW |
| AD-SYNTHESIS.md | Lead / Synthesis agent | Builders contribute raw data via messages | NONE (deferred) |
| AD-AUDIT-SYNTHESIS.md | Audit synthesis agent | Fixers contribute fix reports via messages | NONE (post-audit) |
| HANDOFF-AD-TO-CD.md | Lead only | Nobody else touches this | NONE |
| AD-CONVENTION-SPEC.md | Lead only (Phase 0) | All builders read; nobody modifies post-Wave-0 | NONE (locked after Wave 0) |
| ACCUMULATED-IDENTITY-v2.md | Lead (draft/finalize) | Builders contribute via messages | LOW |
| axis-patterns.md | Lead | Builders provide data via messages | LOW |
| EXT-RESEARCH-REGISTRY.md | Researchers (append-only per EXT category) | Builders read only | LOW (sequential categories) |

---

### B.6 INCREMENTAL VS DEFERRED: TIMING DECISION MATRIX

| Document | Timing | Rationale | OD Precedent |
|----------|--------|-----------|--------------|
| AD-outbound-findings.md | **INCREMENTAL** (findings written at discovery, via per-builder scratch files) | Highest-value change from OD. Prevents 18-agent remediation. | OD: DEFERRED then remediated |
| AD-RESEARCH-GATE.md | **PRE-BUILD** (Phase 0, before any building) | Research gate must block building until passed. | OD: PRE-BUILD (correct) |
| AD-CONVENTION-SPEC.md | **PRE-BUILD** (Wave 0, before any building) | Prevents OD's 3-dialect gap. | OD: POST-BUILD (created during re-enrichment) |
| AD-SYNTHESIS.md | **DEFERRED** (after all ADs built) | Requires cross-AD comparison by nature. Sections 1-2 pre-populated, 3-7 deferred. | OD: DEFERRED (correct) |
| AD-AUDIT-SYNTHESIS.md | **DEFERRED** (after audit) | Cannot exist before audit happens. | OD: DEFERRED (correct) |
| HANDOFF-AD-TO-CD.md | **DEFERRED** (at stage end) | Requires complete picture of AD outcomes. | OD: DEFERRED (correct) |
| STAGE-HEADER.md | **HYBRID** (draft at start, updated throughout, finalized at end) | | OD: DEFERRED then remediated |
| ACCUMULATED-IDENTITY-v2.md | **HYBRID** (draft at start, findings added during build, finalized at end) | | OD: HYBRID (v1 during build, v1.1 during re-enrichment) |
| PIPELINE-MANIFEST.md | **BATCHED** (lead batch-updates between waves from per-builder scratch files) | Contention prevention. | OD: DEFERRED then remediated |
| axis-patterns.md | **INCREMENTAL** (each pattern added after its exploration is built) | | New for AD |
| EXT-RESEARCH-REGISTRY.md | **INCREMENTAL** (each EXT-AD category added when research is commissioned) | | OD: BATCH-compiled post-hoc (AD improves this) |

**Key insight from provenance-chain-gaps.md GAP-PC-06:** "Convention-first eliminates re-enrichment" is only true for convention drift. It does NOT prevent: (a) research deepening, (b) identity delta evolution, or (c) audit-driven fixes. AD should expect iterative provenance updates even with convention-first, just driven by audit findings rather than dialect drift.

---

### B.7 PROVENANCE EVENTS: WHEN TO WRITE WHAT

| Event | Provenance Action | File(s) Updated |
|-------|-------------------|-----------------|
| Phase 0 starts | Create all scaffold files | STAGE-HEADER (draft), RESEARCH-GATE, AD-outbound-findings (empty scaffold), CLAUDE.md, AD-CONVENTION-SPEC, ACCUMULATED-IDENTITY-v2 (draft) |
| Research gate passes | Finalize research gate | AD-RESEARCH-GATE.md (sections 1-5) |
| Builder discovers finding | Write finding to per-builder scratch file | `_ad-execution/findings-builder-{X}.md` |
| EXT-* research commissioned | Register immediately | EXT-RESEARCH-REGISTRY.md, RESEARCH-ACTIVE.md |
| Build wave completes | Lead merges findings, batch-updates manifest | AD-outbound-findings.md, PIPELINE-MANIFEST.md |
| AD exploration scored | Update score | STAGE-HEADER (section 4), axis-patterns.md |
| All ADs built | Write synthesis | AD-SYNTHESIS.md (sections 3-7) |
| Audit completes | Write audit synthesis | AD-AUDIT-SYNTHESIS.md |
| All fixes applied | Update fix records | STAGE-HEADER, AD-AUDIT-SYNTHESIS |
| Stage complete | Finalize all | HANDOFF-AD-TO-CD.md, BACKBONE.md, ACCUMULATED-IDENTITY-v2.md |

---

### B.8 POST-BUILD CHAIN INTEGRITY DIAGNOSTIC

OD's finding-registry.md caught 3 collisions, 3 ghosts, and 0 orphans across 476+ finding IDs. The skeleton has NO equivalent for AD. (provenance-chain-gaps.md GAP-PC-10, auditor confirmed MEDIUM)

**Required diagnostic (Gate 6 addition):**

Before marking Stage 4 COMPLETE, run a chain integrity scan:

```
CHAIN INTEGRITY SCAN:
[ ] Every AD-F-NNN cited in HTML headers has a matching 7-field entry in AD-outbound-findings.md
[ ] Every AD-F-NNN in AD-outbound-findings.md is cited in at least one HTML header
[ ] No finding ID collisions (same ID used for different findings)
[ ] No ghost findings (cited but never defined)
[ ] No orphan findings (defined but never cited)
[ ] PIPELINE-MANIFEST AD-F count matches AD-outbound-findings.md count
[ ] RESEARCH-ACTIVE R-4 application status matches actual citations in HTML headers
[ ] All AD YAML frontmatter predecessor/successor links are correct
[ ] All inline threading headers have BUILT ON and CONSUMED BY tables
```

---

### B.9 PROVENANCE GATES (Binary Checks)

#### B.9.1 Pre-Build Gate (Phase 0 Complete)

All items must be YES before any AD exploration building begins:

```
PHASE 0 GATE:
[ ] HANDOFF-OD-TO-AD.md read completely (all sections)
[ ] OD-outbound-findings.md read completely (all 17 findings)
[ ] AD-RESEARCH-GATE.md created with R-4 finding-by-finding mapping
[ ] AD-CONVENTION-SPEC.md created (inheriting OD conventions + AD extensions)
[ ] AD-outbound-findings.md scaffold created (empty, with YAML frontmatter)
[ ] STAGE-HEADER.md draft created (sections 1-2 populated)
[ ] CLAUDE.md updated (v1 -> v1.1 reference fixed, 5-section structure)
[ ] Finding ID ranges assigned to all builders
[ ] Per-builder scratch files created (one per builder)
[ ] ACCUMULATED-IDENTITY-v2.md draft created (v1.1 copied, AD sections empty)
[ ] R-4 fully read (192 findings)
[ ] R-2 evaluation consumed (25 applicable, 2 SOUL FAIL)
[ ] OD-CONVENTION-SPEC.md read and AD extensions documented
[ ] Transitive chain understood: org -> density -> axis
[ ] BACKBONE.md R-2 count corrected (78 -> 27 in 2 places)
[ ] R-4 disambiguation check completed (no ID collisions in R-4)
```

#### B.9.2 Per-Exploration Gate (After Each AD-NNN)

```
PER-EXPLORATION GATE:
[ ] HTML file created: explorations/axis/AD-NNN-[name].html
[ ] Score assigned: >=32/40 for INCLUDE
[ ] Soul compliance: 0 border-radius violations, 0 box-shadow violations, 0 semi-transparent backgrounds
[ ] Findings written to per-builder scratch file (at least 1 per exploration)
[ ] R-4 findings applied cited in HTML build-phase header
[ ] DD-F-006 fractal verified at 4+ scales
[ ] OD-F-005 org=density respected
[ ] Bespoke research (EXT-AD-*) applied and registered
[ ] No 2px borders (3-category system enforced)
[ ] No traffic-light color violations
[ ] Convention spec compliance verified
[ ] axis-patterns.md entry added for this pattern
[ ] FAIL ROUTE for W-12: If 0 findings written, deploy scribe agent
```

#### B.9.3 Stage Completion Gate (AD Phase Done)

```
STAGE COMPLETION GATE:
[ ] AD-outbound-findings.md EXISTS with >=10 findings (merged from scratch files)
[ ] AD-SYNTHESIS.md EXISTS with all 7 sections populated
[ ] AD-RESEARCH-GATE.md EXISTS with post-build verification (section 6)
[ ] AD-AUDIT-SYNTHESIS.md EXISTS with audit results
[ ] HANDOFF-AD-TO-CD.md EXISTS with acknowledgment protocol
[ ] STAGE-HEADER.md says COMPLETE in YAML + heading
[ ] CLAUDE.md updated to COMPLETE status
[ ] PIPELINE-MANIFEST.md updated: AD-F entries, R-4 status, R-2 decisions, lifecycle counts
[ ] PIPELINE-MANIFEST Section E: at least one AD finding walkthrough added
[ ] BACKBONE.md updated: Stage 4 narrative, pipeline diagram, research chain table
[ ] RESEARCH-ACTIVE.md updated: R-4 application rates, EXT-AD-* entries
[ ] SOUL-DISCOVERIES.md has Stage 4 determination
[ ] axis-patterns.md has all 6 validated patterns with provenance headers (in DESIGN-SYSTEM/patterns/)
[ ] PATTERN-INDEX.md updated with "Axis Patterns" entry
[ ] anti-patterns/registry.md updated with AD-F-AP-NNN entries (if any)
[ ] EXT-RESEARCH-REGISTRY.md has all EXT-AD-* categories
[ ] ACCUMULATED-IDENTITY-v2.md finalized
[ ] explorations/axis/CLAUDE.md CREATED with scores
[ ] explorations/CLAUDE.md updated (AD: COMPLETE)
[ ] provenance/CLAUDE.md updated (stage-4: COMPLETE)
[ ] Chain integrity scan PASSED (Section B.8)
[ ] All 6 AD explorations scored >=32/40 for INCLUDE
[ ] 5 soul pieces verified, 0 violations across all AD explorations
[ ] Convention compliance verified across all 6 ADs
[ ] J-03 Test passed (5 questions answerable from provenance alone)
```

#### B.9.4 J-03 Test (Reproducibility)

A fresh agent with NO prior context must be able to answer these 5 questions from provenance alone:

1. **What did Stage 4 discover?** (Answer from AD-SYNTHESIS.md and AD-outbound-findings.md)
2. **What constraints did it inherit?** (Answer from AD-RESEARCH-GATE.md sections 1-4)
3. **What constraints does it pass forward?** (Answer from HANDOFF-AD-TO-CD.md)
4. **What research was consumed at what rate?** (Answer from AD-RESEARCH-GATE.md section 6)
5. **What quality bar was achieved?** (Answer from STAGE-HEADER.md section 4)

If any question is unanswerable, the chain is INCOMPLETE. Do not mark Stage 4 as COMPLETE.

---

### B.10 OD REMEDIATION LESSONS APPLIED TO AD

| OD Problem | Root Cause | AD Prevention |
|------------|-----------|---------------|
| Provenance never written | No enforcement gate, multi-session drift | Binary gates at Phase 0, per-exploration, and stage completion |
| OD-F-005 collision | Two agents independently assigned same ID | Reserved ID ranges per builder |
| 3 quality dialects | No convention spec before building | AD-CONVENTION-SPEC at Wave 0 |
| 51 dark matter files | Research scattered, no chain/build distinction | All findings to per-builder scratch files immediately; build tools explicitly categorized |
| PIPELINE-MANIFEST stale | Nobody updated during build | Lead batch-updates between waves |
| Inline headers create illusion of completeness | Rich headers but no formal chain | Gates check formal chain documents, not headers |
| MEMORY.md didn't track provenance status | Only tracked build/audit status | Stage completion gate includes explicit provenance checklist |
| ACCUMULATED-IDENTITY gap | v1 written but v2 never created | v2 draft created at Phase 0, updated incrementally |
| Write contention (potential) | Two agents writing same file = silent data loss | Per-builder scratch files; single writer per shared file |
| Builder incremental writing untested | Builders wrote informal CSS comments, never formal entries | Attempt incremental; deploy scribe fallback if Gate W-12 fails |

---

### B.11 PROVENANCE FILE DEPENDENCY GRAPH

```
Phase 0 (Pre-Build):
  HANDOFF-OD-TO-AD.md (READ) ──┐
  OD-outbound-findings.md (READ)─┤
  R-4 (READ) ───────────────────┤
  R-2 evaluation (READ) ────────┤
  OD-CONVENTION-SPEC (READ) ────┤
  ACCUMULATED-IDENTITY-v1.1 (READ)─┤
                                   v
                        AD-RESEARCH-GATE.md (WRITE)
                        AD-CONVENTION-SPEC.md (WRITE)
                        STAGE-HEADER.md draft (WRITE)
                        CLAUDE.md (UPDATE -- fix v1 ref)
                        AD-outbound-findings.md scaffold (WRITE)
                        Per-builder scratch files (WRITE)
                        ACCUMULATED-IDENTITY-v2 draft (WRITE)

Build Waves (Per AD Exploration):
  Builder discovers finding ──> findings-builder-{X}.md (APPEND to own file)
  Builder applies EXT-* ──> EXT-RESEARCH-REGISTRY.md (APPEND)
  Builder scores exploration ──> message to Lead
  Lead between waves ──> AD-outbound-findings.md (MERGE from scratch files)
  Lead between waves ──> PIPELINE-MANIFEST.md (BATCH UPDATE)
  Lead between waves ──> axis-patterns.md (ADD entry)

Post-Build:
  All ADs built ──> AD-SYNTHESIS.md (WRITE)

Post-Audit:
  Audit complete ──> AD-AUDIT-SYNTHESIS.md (WRITE)
  Fixes applied ──> STAGE-HEADER.md section 4 (UPDATE)

Stage Close:
  Chain integrity scan (VERIFY)
  J-03 Test (VERIFY)
  ──> HANDOFF-AD-TO-CD.md (WRITE)
  ──> BACKBONE.md (UPDATE)
  ──> PIPELINE-MANIFEST Section E (ADD walkthrough)
  ──> PATTERN-INDEX.md (UPDATE)
  ──> anti-patterns/registry.md (UPDATE if applicable)
  ──> ACCUMULATED-IDENTITY-v2 (FINALIZE)
  ──> All CLAUDE.md navigation mesh files (UPDATE)
  ──> All completion gate items (VERIFY)
```

---

## PART C: GAP RESOLUTION SUMMARY

### C.1 All Provenance Gaps (Combined, Deduplicated, Final Severity)

| # | Gap ID | Final Severity | Description | Resolution |
|---|--------|---------------|-------------|------------|
| 1 | **GAP-PC-09** | **CRITICAL** | Silent data loss from simultaneous writes to shared files (Write tool atomically replaces entire file) | Per-builder scratch files; lead merges between waves (B.2) |
| 2 | **GAP-CL-01** | **CRITICAL** | No explicit layer architecture in skeleton -- 9 functional layers exist but unnamed | Layer architecture section added (A.2.2) |
| 3 | **GAP-PC-07** | **HIGH** | Builder incremental finding writing is UNTESTED -- zero OD evidence it works | Scribe fallback protocol added (B.1.3) |
| 4 | **GAP-PC-01** | **HIGH** | Inline threading header format (Physical Layer P1) unspecified for AD files | Template provided (A.3.3) |
| 5 | **GAP-PC-05** | **HIGH** | Skeleton underestimates what 18-agent remediation created (entire formal doc architecture) | Full before/after documented (B.1.2) |
| 6 | **GAP-CL-02** | **HIGH** | ACCUMULATED-IDENTITY location anomaly (knowledge-architecture/ not provenance/) | Documented with resolution options (A.2.2 Layer 1) |
| 7 | **GAP-CL-03** | **HIGH** | CLAUDE.md navigation mesh not specified (5 files need updates) | Full update table (A.7) |
| 8 | **GAP-PC-02** | **MEDIUM** | YAML frontmatter key names not standardized (14 keys, not just 9) | Full templates provided (A.3.1, A.3.2) |
| 9 | **GAP-PC-03** | **MEDIUM** | No spec for inline header dependency tables (BUILT ON, CONSUMED BY) | Template provided in A.3.3 |
| 10 | **GAP-PC-10** | **MEDIUM** | No post-build chain integrity diagnostic | Scan checklist added (B.8) |
| 11 | **GAP-PC-06** | **MEDIUM** | Skeleton claims AD eliminates re-enrichment -- only true for convention drift | Clarified in B.6 |
| 12 | **GAP-CL-04** | **MEDIUM** | Build tools vs chain documents not distinguished | Full categorization (A.5) |
| 13 | **GAP-CL-05** | **MEDIUM** | Synced duplicate pattern not addressed for AD | Protocol documented (A.6) |
| 14 | **GAP-CL-06** | **MEDIUM** | Pattern catalog integration incomplete (axis-patterns location, PATTERN-INDEX, anti-pattern registry) | Explicit paths and updates (A.2.2 Layer 6) |
| 15 | **MISSED-02** (auditor) | **MEDIUM** | STAGE-HEADER 8-section structure never enumerated | Full structure in A.3.1 |
| 16 | **MISSED-04** (auditor) | **MEDIUM** | Gate W-12 has no FAIL ROUTE, depends on untested GAP-PC-07 | Fail route added to B.9.2 |
| 17 | **GAP-PC-04** | **LOW-MEDIUM** | Internal contradiction: builder flow vs ownership matrix for PIPELINE-MANIFEST | Resolved: builders never write PIPELINE-MANIFEST (B.3, B.5) |
| 18 | **GAP-PC-12** | **LOW-MEDIUM** | Synced duplicate pattern never mentioned in skeleton | Documented in A.6 |
| 19 | **GAP-PC-08** | **LOW-MEDIUM** | R-4 disambiguation not checked (R3-023/R3-036 precedent) | Added to Phase 0 gate (B.9.1) |
| 20 | **MISSED-05** (auditor) | **LOW-MEDIUM** | Analyst's 5-layer model vs OD's documented 3-layer model creates confusion | Both systems documented (A.2) as physical vs functional |
| 21 | **GAP-CL-07** | **LOW** | Cross-stage file naming convention implicit | Convention stated in B.6 |
| 22 | **GAP-PC-11** | **LOW** | EXT-RESEARCH-REGISTRY was batch-compiled in OD, not incremental | Improvement documented (B.6) |
| 23 | **MISSED-01** (auditor) | **LOW** | Provenance CLAUDE.md references v1 not v1.1 | Included in Phase 0 gate fixes |

### C.2 Stale Data Bugs to Fix Before AD Starts

| Bug | Location | Current Value | Correct Value | Source |
|-----|----------|--------------|---------------|--------|
| BACKBONE.md R-2 count | Lines 85 and 311 | 78 | 27 | chain-layers-audit.md MISSED-1 |
| stage-4-axis-ad/CLAUDE.md identity reference | Lines 46 and 66 | v1 | v1.1 | chain-layers-audit.md MISSED-2 |
| provenance/CLAUDE.md identity version | (references section) | v1 | v1.1 | provenance-chain-audit.md MISSED-01 |

---

*Synthesized from 5 source files totaling ~2,122 lines. All gaps verified by independent auditors. Every finding from every source file represented.*
