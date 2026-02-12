# CD Provenance Chain Requirements
## Research Agent #5 — Comprehensive Summary

---

## 1. Documents CD Must Produce (Layer 3: Formal Chain Documents)

Based on the pattern established by OD (stage-3) and AD (stage-4), CD must produce these formal chain documents in `DESIGN-SYSTEM/provenance/stage-5-combination-cd/`:

| Document | Purpose | Precedent |
|----------|---------|-----------|
| **CD-outbound-findings.md** | Formal registry of all CD-F-### findings | AD-outbound-findings.md (28 findings), OD-outbound-findings.md (17 findings) |
| **CD-SYNTHESIS.md** | Cross-exploration synthesis (expect 10-12 sections) | AD-SYNTHESIS.md (12 sections, ~295 lines), OD-SYNTHESIS.md |
| **CD-AUDIT-SYNTHESIS.md** | Quality gate results from audit phase | AD-AUDIT-SYNTHESIS.md (~47 de-duplicated findings) |
| **CD-CONVENTION-SPEC.md** | Convention spec inheriting AD sections 1-16, adding 17-20 | AD-CONVENTION-SPEC.md (822 lines, 16 sections) |
| **CD-RESEARCH-GATE.md** | R-5 evaluation (39 findings) | AD-RESEARCH-GATE.md (~500 lines for R-4 evaluation) |
| **HANDOFF-CD-TO-MIGRATION.md** | Gate file for Migration phase (CD's successor is Migration, NOT another exploration stage) | HANDOFF-AD-TO-CD.md (~300 lines) |
| **STAGE-HEADER.md** | Update existing placeholder from PENDING to COMPLETE | Already exists as placeholder |
| **CLAUDE.md** | Update existing placeholder with full navigation | Already exists as placeholder |

Additionally, CD must produce (at knowledge-architecture level):
| Document | Purpose |
|----------|---------|
| **ACCUMULATED-IDENTITY-v3.md** | Updated accumulated identity incorporating CD discoveries (CD consumes v2, produces v3) |

---

## 2. CD-F-### Finding Numbering and Format

### Numbering Convention
- **Prefix:** `CD-F-` (following COMP-F, DD-F, OD-F, AD-F pattern)
- **Range:** CD-F-001 through CD-F-NNN (count TBD, expect 15-30 based on prior stages: COMP-F had 21, DD-F had 18, OD-F had 17, AD-F had 28)
- **IDs are immutable once assigned** (per PIPELINE-MANIFEST.md Section F: "Finding IDs are immutable once assigned")

### Finding Format (from AD-outbound-findings.md template)
Each finding entry must include:

```markdown
### CD-F-NNN: [Title]

| Field | Value |
|-------|-------|
| **ID** | CD-F-NNN |
| **Title** | [Descriptive title] |
| **Source** | CD-NNN ([Exploration Name]) |
| **Severity** | [N/A / MEDIUM / HIGH / CRITICAL] |
| **Classification** | Class [A/B/C/D] ([binary/judgment/overwriting/breaking]) |
| **Description** | [Full description with provenance citations] |
| **Evidence** | [Specific CSS/HTML/structural evidence with finding ID citations] |
```

### Finding Classification System (from AD)
| Class | Meaning | AD Count |
|-------|---------|----------|
| Class A (Confirming) | Binary, no deviation, implements/confirms research directly | 14/28 |
| Class B (Extending) | Identity extension, requires judgment, within convention bounds | 14/28 |
| Class C (Overwriting) | Contradicts prior findings | 0/28 (ideally zero) |
| Class D (Breaking) | Breaks identity constraints | 0/28 (must be zero) |

### Finding Lifecycle States (from PIPELINE-MANIFEST.md Section F)
| State | Meaning |
|-------|---------|
| PENDING | Identified but not yet applied |
| APPLIED | Used in at least one exploration |
| EXEMPLARY | Deeply applied as core concept |
| ACTIVE | Constraint that applies to all work |
| CONSUMED | Used and no longer needs tracking |
| RESOLVED | Anti-pattern identified and fixed |

---

## 3. What BACKBONE.md Says About CD's Role

### Current Content (Section 6)
BACKBONE.md Section 6 states:
> "CD will explore component combinations -- how components work together. Reasoning inside Code, Task containing Decision, File Tree with Callouts."
> "CD consumes: AD-F-### findings + accumulated constraints"
> "CD produces: CD-F-### findings + combination rules"

### CD's Position in the Causal Chain (Section 10)
```
AD axis explorations (COMPLETE, 28 AD-F findings, 0 soul violations)
  |
  | CONSTRAINED (axis IS density IS org + 5x5 transition grammar + DD-F-006 5-scale)
  | GENERATED (AD-F-### 28 outbound findings)
  | ELEVATED (DD-F-012: axis IS density, not "serves")
  v
CD combination explorations (pending -- consumes AD-F-### + transition grammar)
  |
  v
Migration
```

### Research Chain Table (Section 7)
CD's research alignment:
| Research | CD Role |
|----------|---------|
| R-1 (28) | Secondary |
| R-2 (27) | Secondary |
| R-3 (51) | Reference |
| R-4 (192) | Reference |
| **R-5 (39)** | **PRIMARY** |

### Generated Research Flow (Section 8)
CD must add its row:
| Stage | Generated | Count | Consumed By |
|-------|-----------|-------|-------------|
| Stage 5 | CD-F-### | TBD | Migration |

### CD Must Update BACKBONE.md Section 6
After CD completion, Section 6 must be filled in with the full CD story, following the format of Sections 2-5 (The Story, What It Consumed, What It Produced, Key Decisions, Quality Metrics).

---

## 4. What PIPELINE-MANIFEST.md Expects From CD

### Section A: Research Application
PIPELINE-MANIFEST.md explicitly states:
- **R-5 Status:** "~30% applied, PRIMARY source for CD" -- CD must dramatically increase R-5 application
- **R-2 Status:** Several R-2 findings (R2-024-027) are listed as "PENDING | AD/CD" -- CD must evaluate these
- R-1, R-3, R-4 remain as reference/secondary sources

### Section B: Generated Findings
PIPELINE-MANIFEST.md Section B currently has:
> "Stage 5 (CD-F-###) -- Combination. PENDING. TBD -- CD explorations not yet started."

CD must populate this section with all CD-F findings, following the format:
```markdown
| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| CD-F-001 | [description] | [Pattern/Meta-Pattern/Process/Forward/Anti-Pattern] | Migration | ACTIVE |
```

### Section D: Pattern Provenance
CD must add a "Combination Patterns" table following the existing Density and Organizational pattern tables:
```markdown
### Combination Patterns
| Pattern | Research | Generated Finding | Validated By | Score |
|---------|----------|-------------------|--------------|-------|
```

### Section F: Finding Lifecycle States
CD must update the counts (currently ~245 PENDING, ~90 APPLIED, 6 EXEMPLARY, ~42 ACTIVE, ~3 CONSUMED, 1 RESOLVED).

### Document Metadata
CD must update:
- Total Generated Findings (currently 84 = COMP-F:21 + DD-F:18 + OD-F:17 + AD-F:28) -- add CD-F count
- Total Patterns (currently "6 density + 6 organizational + 6 axis (combination TBD)") -- add 6 combination
- Update Schedule entry: "After each stage completion: Add generated findings"

---

## 5. How the 3-Layer Provenance Applies to CD

### Layer 1: Inline Threading Headers (per-file, 490+ files)
- Each CD exploration HTML file must have an inline threading header at the top
- Format per Phase 2B convention: WHY THIS EXISTS, STATUS, BUILT ON, MUST HONOR, CONSUMED BY, DIAGNOSTIC QUESTIONS
- Any new source files created during CD (convention spec, etc.) need headers

### Layer 2: Light Provenance Sections (per-file, 244+ files)
- Light section metadata linking to parent phase and T1 synthesis
- Goes AFTER the inline threading header's closing comment, never inside
- Format per Phase 2D convention

### Layer 3: Formal Chain Documents (this directory)
The formal chain documents are the most critical for CD:

| Document Type | What It Contains | Example from AD |
|---------------|-----------------|-----------------|
| **STAGE-HEADER** | What the stage did, consumed, produced | STAGE-HEADER.md (~141 lines) |
| **outbound-findings** | Formal finding declarations (CD-F-###) | AD-outbound-findings.md (~507 lines, 28 findings) |
| **SYNTHESIS** | Cross-exploration analysis | AD-SYNTHESIS.md (~299 lines, 12 sections) |
| **AUDIT-SYNTHESIS** | Quality gate results | AD-AUDIT-SYNTHESIS.md (~400 lines, ~47 findings) |
| **HANDOFF** | Briefing for the next stage (Migration) | HANDOFF-AD-TO-CD.md (~234 lines) |
| **RESEARCH-GATE** | Research filtering decisions | AD-RESEARCH-GATE.md (~500 lines) |

### How Layers Relate
From provenance/CLAUDE.md Section 6:
> "Inline headers are the distributed dependency graph (who depends on whom). Formal chain documents are the authoritative narrative (what happened, why, what it means). Light sections are the bridge connecting individual files to the larger story."
> "Zoom levels: Pipeline (BACKBONE.md) -> Stage (STAGE-HEADER) -> Finding (outbound-findings) -> File (inline headers) -> Forward guidance (HANDOFF)"

### Provenance Must Be Created INCREMENTALLY
HANDOFF-AD-TO-CD.md explicitly states (acknowledgment checklist):
> "I will create provenance INCREMENTALLY during build, not after"

This means CD provenance documents should be started during Phase 0 and updated continuously, not written after all explorations are complete.

---

## 6. Whether CD Needs to Produce ACCUMULATED-IDENTITY-v3

**YES -- MANDATORY.**

From provenance/CLAUDE.md Section 7:
> "Each pipeline stage inherits ALL prior soul pieces, findings, constraints, and decisions from every preceding stage."
> "AD must consume ACCUMULATED-IDENTITY-v1.md and produce v2"
> "CD must consume v2 and produce v3"
> "The identity grows with each stage -- it never shrinks"

### What v3 Must Contain
- Everything from v2 (~700 lines, generated 2026-02-10)
- All CD discoveries (new findings, new patterns, any identity extensions)
- Any new anti-physical examples from combination context
- Updated soul compliance matrix (should remain 0 violations)
- Updated fractal validation (5-scale model -- CD verifies existing scales hold under combination per AD-F-028)
- Any CD-specific meta-patterns or crown jewel discoveries
- The 3-way unification under combination stress (does axis=org=density hold when patterns combine?)

### Location
ACCUMULATED-IDENTITY-v2.md is at: `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md`
v3 should be created at the same level: `knowledge-architecture/ACCUMULATED-IDENTITY-v3.md`

---

## 7. What RESEARCH-ACTIVE.md Shows as Unapplied for CD

### Global Status (as of 2026-02-07)
| Research | Total | Applied | Unapplied | Application Rate |
|----------|-------|---------|-----------|-----------------|
| R-1 | 28 | 20 | 8 | 71% |
| R-2 | 27 | 0 | 27 | 0% (Note: AD raised to ~67% per AD-SYNTHESIS, but RESEARCH-ACTIVE.md not updated) |
| R-3 | 51 | 11 | 40 | 22% |
| R-4 | 192 | 0 | 192 | 0% (Note: AD cited 169/192, but RESEARCH-ACTIVE.md not updated) |
| R-5 | 39 | 2 | 37 | 5% |
| **Total** | **337** | **33** | **304** | **9.79%** |

**CRITICAL NOTE:** RESEARCH-ACTIVE.md was last updated 2026-02-07 (during OD). AD's research consumption (169 R-4, 25 R-2 mapped, etc.) is NOT reflected. CD must account for actual state, not RESEARCH-ACTIVE.md's stale numbers.

### R-5 Specifically (CD's PRIMARY Research)
Only 2 of 39 R-5 findings are marked APPLIED:
- R5-T4 (2-Callout Limit) -- Applied in OD-001
- R5-S1 (Setup-Payoff Arc) -- Applied in OD-001

**37 R-5 findings remain UNAPPLIED**, organized by category:
| Category | Findings | Count | CD Relevance |
|----------|----------|-------|--------------|
| Harmony | R5-H1 through R5-H4 | 4 | DIRECT -- component combination harmony |
| Tension | R5-T1 through R5-T3 | 3 (R5-T4 applied) | DIRECT -- productive vs destructive tension |
| Sequence | R5-S2 through R5-S5 | 4 (R5-S1 applied) | DIRECT -- component ordering |
| Grouping | R5-G1 through R5-G4 | 4 | DIRECT -- component clustering |
| Nesting | R5-N1 through R5-N4 | 4 | CRITICAL -- nesting depth limits |
| Relationship | R5-R1 through R5-R3 | 3 | DIRECT -- component kinship/mood/voice |
| Anti-Patterns | R5-A1 through R5-A7 | 7 | MANDATORY -- must check all 7 |
| Recipes | R5-Recipe1 through R5-Recipe6 | 6 | DIRECT -- pre-defined combination templates |
| Quantitative | R5-Q1 through R5-Q3 | 3 | DIRECT -- density limits, spacing, rhythm ratios |

**R-5 Priority Queue from RESEARCH-ACTIVE.md:**
1. R5-T4 (2-Callout Limit) -- Already applied
2. R5-S1 (Setup-Payoff Arc) -- Already applied
3. R5-S3 (First Component Rule) -- Apply in: All explorations
4. R5-A1-A7 (Anti-Patterns) -- Check in: All explorations
5. R5-Recipe1-6 (Recipes) -- Apply in: CD-001 through CD-006

### R-1 Unapplied (8 findings potentially relevant to CD)
| ID | Finding | CD Relevance |
|----|---------|-------------|
| R1-012 | Permutation Strategy | MEDIUM -- component combination variants |
| R1-014 | Interactive Playground Pattern | LOW -- live code editors |
| R1-020 | Four Pillars of Editorial | LOW -- layout principles |
| R1-021 | Code Snippet Best Practices | MEDIUM -- code in combination context |
| R1-023 | Decision Matrix Layout | MEDIUM -- decision grid combinations |
| R1-024 | Props/API Table Format | LOW -- technical docs |
| R1-027 | Status Grouping Pattern | LOW -- component status |
| R1-028 | WAI-ARIA Compliance Callout | MEDIUM -- accessibility in combinations |

### CD Exploration Pre-Assignments (from RESEARCH-ACTIVE.md)
| Exploration | Status | Description |
|-------------|--------|-------------|
| CD-001 Reasoning Inside Code | Pending | Code block + reasoning component combination |
| CD-002 Task + Decision | Pending | Task flow + decision matrix combination |
| CD-003 File Tree + Callouts | Pending | File tree + callout component combination |
| CD-004 Essence as Background | Pending | Essence component used as section background |
| CD-005 Callouts as Conversation | Pending | Multiple callout types in dialogue |
| CD-006 Creative Slot | Pending | Open exploration slot |

---

## 8. Additional Provenance Requirements from HANDOFF-AD-TO-CD.md

### Gate Finding for CD
**DD-F-013** is CD's inherited gate constraint: "Component density tolerance -- how much density variation can a single component absorb before it needs to split into multiple components."

CD must answer at the combination scale: when two axis patterns combine, do their components maintain density tolerance or require splitting?

### Mandatory Constraints
- **AD-F-024** (compound is sequential) -- MANDATORY. Any combination violating sequential principle is INVALID.
- **AD-F-025** (transition grammar) -- MANDATORY. Combinations lacking transition grammar between zones are INVALID.
- **5x5 transition grammar matrix** -- CD must inherit and potentially extend for combination context.

### Convention Spec Inheritance
CD-CONVENTION-SPEC.md should:
- Inherit sections 1-16 from AD-CONVENTION-SPEC.md
- Add sections 17-20: CD-SPECIFIC (combination rules, transition grammar extensions, component density tolerance, combination accessibility)

### EXT-CD-* Research
HANDOFF-AD-TO-CD.md recommends commissioning bespoke external research (EXT-CD-*) during Phase 0 for:
- Combination layout patterns
- Multi-axis co-existence strategies
- Transition grammar extensions
- Component density tolerance testing

### 5 Open Questions CD Must Address
1. Combination density tolerance (when two axis patterns combine, do components maintain tolerance?)
2. Transition grammar scaling (does grammar hold between separate combined pages?)
3. Attention topology composition (how do topologies compose with multiple patterns on same page?)
4. Sequential vs parallel combinations (are there genuinely parallel combination patterns?)
5. Fractal at combination scale (does combination create a 6th scale? AD-F-028 says probably not)

---

## 9. Files CD Must Update After Completion

### Provenance Chain Updates
| File | What to Update |
|------|---------------|
| PIPELINE-MANIFEST.md | Section B (CD-F-### entries), Section D (Combination Patterns table), Section F (lifecycle counts), Document Metadata |
| BACKBONE.md | Section 6 (full CD story), Section 7 (research chain update), Section 8 (generated research flow), Section 9 (soul matrix -- add CD columns), Section 10 (causal chain -- CD status), Section 13 (R3-023 trace -- add CD section) |
| provenance/CLAUDE.md | Section 3 (stage-5 status from PENDING to COMPLETE) |
| DESIGN-SYSTEM/CLAUDE.md | Update table to show CD findings location |
| checkpoints/RESEARCH-ACTIVE.md | All CD-applied findings, AD-applied findings (currently stale), R-5 application tracking |
| checkpoints/DISCOVERIES-LOG.md | All CD discoveries |
| checkpoints/MASTER-STATE.md | Pipeline position update |

### Files CD Must Create
| File | Location |
|------|----------|
| CD-outbound-findings.md | stage-5-combination-cd/ |
| CD-SYNTHESIS.md | stage-5-combination-cd/ |
| CD-AUDIT-SYNTHESIS.md | stage-5-combination-cd/ |
| CD-CONVENTION-SPEC.md | (location TBD, possibly stage-5-combination-cd/ or _ad-execution/) |
| CD-RESEARCH-GATE.md | stage-5-combination-cd/ |
| HANDOFF-CD-TO-MIGRATION.md | stage-5-combination-cd/ |
| ACCUMULATED-IDENTITY-v3.md | knowledge-architecture/ |
| 6 HTML explorations | explorations/combination/ (or explorations/axis/ per existing pattern) |

---

## 10. Summary of CD's Provenance Obligations

CD sits at the TOP of a 5-stage pipeline. Every provenance obligation is CUMULATIVE:

1. **Consume** all prior findings (COMP-F:21 + DD-F:18 + OD-F:17 + AD-F:28 = 84 findings)
2. **Produce** CD-F-### findings following established format and classification
3. **Update** PIPELINE-MANIFEST.md, BACKBONE.md, RESEARCH-ACTIVE.md, and all tracking files
4. **Create** 8+ formal chain documents (outbound-findings, synthesis, audit-synthesis, convention-spec, research-gate, handoff, updated stage-header, updated CLAUDE.md)
5. **Produce** ACCUMULATED-IDENTITY-v3 (inheriting v2, adding CD discoveries)
6. **Maintain** 3-layer provenance (inline headers on all new files, light sections, formal chain docs)
7. **Create provenance incrementally** during build, not retroactively
8. **Verify** all prior constraints hold under combination (3-way unification, DD-F-006 fractal at 5 scales, soul compliance, ANTI-PHYSICAL identity)
9. **Answer** the 5 open questions from HANDOFF-AD-TO-CD.md
10. **Deliver** HANDOFF-CD-TO-MIGRATION.md as the terminal gate file (CD's successor is Migration, not another exploration stage)

---

*Compiled from: PIPELINE-MANIFEST.md, BACKBONE.md, provenance/CLAUDE.md, RESEARCH-ACTIVE.md, HANDOFF-AD-TO-CD.md, STAGE-HEADER.md (stages 4 and 5), AD-outbound-findings.md, AD-SYNTHESIS.md, ACCUMULATED-IDENTITY-v2.md, and OD stage provenance files.*
