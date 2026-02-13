# DIMENSION RESEARCH: Pipeline Relevance

**Researcher:** dim-pipeline
**Date:** 2026-02-13
**Task:** Define what makes a file "pipeline-relevant" in the post-CD strategic planning context

---

## EXECUTIVE SUMMARY

**Pipeline relevance is about FORWARD CONSUMPTION, not bibliographic citation.**

The POST-CD-PIPELINE directory (36 files, ~9,200 lines) represents active strategic planning for future CD execution and migration work. The question is: which files across the entire project are **actively consumed** by this pipeline vs merely cited as provenance?

**The test:** Does the pipeline **read and apply** this file, or just **mention** it?

**Key discovery:** Only ~4-8 directories in knowledge-architecture/ pass the forward-consumption test. The rest are historical artifacts with synthesis documents that absorbed their insights.

---

## WHAT IS POST-CD-PIPELINE?

From `/docs-spa/app/showcase/POST-CD-PIPELINE/README.md`:

**Purpose:** Strategic planning documents for everything after AD phase:
- CD execution planning (combination dimension exploration)
- 5 intermediate phases (B-G) between CD and migration
- **Two-track migration architecture** (Track 1: assembly 45-90min, Track 2: composition 3-5hrs)
- Ongoing content ingestion

**Core files:**
1. `01-CD-EVOLVED-VISION.md` — What CD should produce, 8 recommendations, completeness gate
2. `02-POST-CD-PHASES.md` — The 5 missing phases, two-track architecture, freeze line
3. `03-MIGRATION-PIPELINE.md` — 6-phase per-page pipeline with TWO execution tracks
4. `04-CONTENT-INGESTION.md` — New content handling, operational wrapper
5. `05-COMPLETE-ROADMAP.md` — Full timeline, Track 1+2 breakdown, risk factors
6. `06-KEY-INSIGHTS.md` — Language analogy, attention topology, emergence
7. `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` — When/how to invoke tension-composition skill
8. `08-COMPOSITIONAL-STRATEGY-LIBRARY.md` — Component model (Tier 1/2/2.5/3), pattern catalog
9. `09-EXTRACTION-VALIDATION-PROTOCOL.md` — Phase D validation methodology

**What the pipeline depends on:**
- Tension-composition skill (839 lines, Track 2 driver)
- Perceptual-auditing skill (48 PA questions, quality verification)
- R5-COMBINATION-THEORY.md (39 findings on combination behavior)
- ACCUMULATED-IDENTITY-v2.md (classification engine)
- DD/OD/AD explorations (validated patterns)
- CD research + migration research

---

## THE FORWARD-CONSUMPTION TEST

**From adversary-ka-scratchpads.md (the smoking gun):**

Adversary performed external reference scan for ALL underscore directories in knowledge-architecture/:

**Result:** Only **2 directories** are forward-consumed by POST-CD-PIPELINE:
1. `_cd-research/` (9 files, ~3,500 lines) — CD scoping research
2. `_migration-research/` (10 files, ~5,800 lines) — Migration architecture

**Listed explicitly in POST-CD-PIPELINE/CLAUDE.md BUILT ON section:**
```markdown
| _cd-research/ (9 files)          | CD scoping research (~3,500 lines)     |
| _migration-research/ (10 files)  | Migration research (~5,800 lines)      |
```

**What about the other 10 directories?**
- `_comprehensive-audit/` → Audit complete, findings absorbed into MASTER-AUDIT-REPORT
- `_od-reenrichment/` → OD phase complete, spec absorbed findings
- `_ad-execution/` → AD complete, ACCUMULATED-IDENTITY-v2 absorbed findings
- `_od-audit-scratchpad/` → OD audit complete, OD-GRANULAR-AUDIT-RESULTS absorbed 89 findings
- `_workflow-metacognition/` → Metacognition analysis complete, WORKFLOW-METACOGNITION-ANALYSIS absorbed insights
- etc.

**The pattern:** These directories informed **earlier phases** (OD, AD, provenance remediation) but are NOT consumed for post-CD work.

---

## BIBLIOGRAPHIC CITATION VS TRAVERSAL DEPENDENCY

**Critical distinction from adversary:**

### Bibliographic Citation (NOT pipeline-relevant)
```markdown
## PROVENANCE
Absorbed From: `_workflow-metacognition/` (9 files, 4,240 lines)
```

**What this means:** "I read these files to produce this synthesis. The synthesis now contains what was needed."

**Analogy:** PhD thesis cites 200 papers. Do you need all 200 papers to understand the thesis? No. The thesis absorbed what it needed.

### Traversal Dependency (IS pipeline-relevant)
```markdown
## BUILT ON
| _cd-research/ | CD scoping research (~3,500 lines) |

## HOW TO READ
1. Read `01-CD-EVOLVED-VISION.md`
2. Then read `_cd-research/09-CD-SYNTHESIS-BRIEFING.md`
```

**What this means:** "You must READ these files to do CD work. They contain active knowledge not fully synthesized into the main docs."

**Analogy:** PhD thesis says "See appendix B for full dataset." Appendix B is a traversal dependency.

---

## COMPRESSION RATIO AS SIGNAL

**From adversary analysis:**

When synthesis documents compress scratchpads at 8-11:1 ratio, the scratchpads become redundant:

| Scratchpad Directory | Lines | Synthesis Document | Lines | Ratio | Redundancy |
|---------------------|-------|-------------------|-------|-------|------------|
| `_migration-research/` | 4,037 | POST-CD-PIPELINE/README.md | 447 | 9:1 | 89% noise |
| `_workflow-metacognition/` | 4,257 | WORKFLOW-METACOGNITION-ANALYSIS.md | 878 | 4.8:1 | 79% noise |
| `_od-audit-scratchpad/` | 7,867 | OD-GRANULAR-AUDIT-RESULTS.md | 688 | 11.4:1 | 91% noise |

**Average: 8.4:1 compression, 88% information loss**

**What this tells us:** If the synthesis captured insights at 8-11:1 compression, the scratchpad is 80-90% process noise (working notes, dead-end investigations, iteration churn).

**For pipeline relevance:** If a synthesis document exists and absorbed the source material at >5:1 compression, the source material is likely NOT pipeline-relevant (unless explicitly listed in BUILT ON sections).

---

## EXCEPTION: FUTURE PHASES NOT YET PLANNED

**Open question:** What about files needed for FUTURE phases not yet in POST-CD-PIPELINE?

**Example:** Component extraction (Phase C) will need:
- Validated explorations (DD/OD/AD/CD HTML files)
- Character extraction research
- Component forensics

**These are pipeline-relevant** even if not explicitly listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON, because they are:
1. **Validated outputs** (INCLUDE status, passed audits)
2. **Not synthesized** (the HTML files ARE the deliverable, not interim research)
3. **Foundational dependencies** (can't extract components without seeing explorations)

**The test:** Would deleting this file break a future pipeline phase?

**For DD/OD explorations:** YES — 589 references, foundational patterns, Tier 2.5 pattern catalog depends on them
**For CD explorations:** YES — Track 2 exemplar, crown jewel (39/40), reference implementation
**For AD explorations:** YES — Axis patterns, transition grammar, ATTENTION TOPOLOGY validation

**For scratchpads:** NO — synthesis documents absorbed findings, process evidence is not actionable

---

## PIPELINE RELEVANCE SCORING RUBRIC

**Level 5: CRITICAL DEPENDENCY (cannot proceed without it)**
- Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON section
- Validated exploration artifacts (DD/OD/AD/CD HTML files)
- Skills (tension-composition, perceptual-auditing)
- Canonical research files (R1-R5)
- ACCUMULATED-IDENTITY-v2.md, HANDOFF-AD-TO-CD.md

**Level 4: ACTIVE FORWARD CONSUMPTION (referenced in multiple pipeline docs)**
- `_cd-research/` (9 files)
- `_migration-research/` (10 files)
- Component extraction research (character families, soul extraction)
- Pattern libraries (density-patterns.md, combination-rules.md)

**Level 3: INDIRECT DEPENDENCY (synthesis points to it, but synthesis could stand alone)**
- `_pipeline-evolution-research/` (if synthesis documents reference but don't require)
- `_component-taxonomy-research/` (if extraction library absorbed insights)
- DESIGN-SYSTEM/ provenance chain documents

**Level 2: BIBLIOGRAPHIC ONLY (cited for provenance, not traversed)**
- Completed phase scratchpads with synthesis documents (compression ratio >5:1)
- Historical audit artifacts (findings absorbed into MASTER-AUDIT-REPORT)
- Execution journals from completed phases

**Level 1: NOT PIPELINE-RELEVANT (historical or orthogonal)**
- Process documentation from completed phases
- Deleted file indexes
- Session logs
- Interim research superseded by final specs

---

## THE STRATEGIC QUESTION

**From MASTER-VERDICT.md:**

> **STRATEGIC PRINCIPLE:** Delete everything that isn't forward-consumed by the post-CD pipeline. Audit trails and process artifacts from completed phases should live in git history, not the working tree.

**Pipeline relevance is the PRIMARY lens for cleanup decisions.**

Files fall into three categories:

### 1. KEEP (Pipeline-Relevant)
- **Test:** Listed in POST-CD-PIPELINE dependencies OR validated deliverable OR would break future phase if deleted
- **Examples:** DD/OD/AD/CD explorations, R1-R5 research, skills, ACCUMULATED-IDENTITY, component extraction research

### 2. ARCHIVE (Historical Value, Not Pipeline-Relevant)
- **Test:** Interesting process evidence, but synthesis absorbed actionable content
- **Examples:** Lock sheets from completed phases, provenance forensics, existence proofs (2 HTMLs from _tension-test)

### 3. DELETE (Neither Pipeline-Relevant Nor Historical Value)
- **Test:** Process noise, interim artifacts, synthesis absorbed findings at >5:1 compression
- **Examples:** 10 underscore directories with synthesis documents, audit screenshots from completed audits, node_modules

---

## TESTS TO DETERMINE PIPELINE RELEVANCE

### Test 1: Explicit Dependency Check
```
grep -r "filename" docs-spa/app/showcase/POST-CD-PIPELINE/
```
**If found in BUILT ON or CONSUMED BY sections → Level 5 (CRITICAL)**

### Test 2: Validated Deliverable Check
```
Is this file an HTML exploration with INCLUDE status?
Is this a research file (R1-R5)?
Is this a skill file (tension-composition, perceptual-auditing)?
```
**If YES → Level 5 (CRITICAL)**

### Test 3: Synthesis Absorption Check
```
Does a synthesis document exist that absorbed this file?
What's the compression ratio (source lines / synthesis lines)?
Are references bibliographic ("Absorbed From") or traversal ("Read this for CD work")?
```
**If compression ratio >5:1 AND references are bibliographic → Level 2 (BIBLIOGRAPHIC ONLY)**

### Test 4: Forward Phase Dependency
```
Would Phase C (component extraction) need this?
Would Phase E (migration playbook) need this?
Would Phase H+I (full migration) need this?
```
**If YES → Level 4 or 5 depending on how critical**

### Test 5: Reference Count ≠ Pipeline Relevance
```
How many files reference this?
Are those references:
  - Import statements (code dependency)?
  - BUILT ON entries (traversal dependency)?
  - Provenance citations (bibliographic)?
  - Navigation mentions (directory awareness)?
```
**HIGH reference count with bibliographic citations → Still Level 2 (not pipeline-relevant)**

---

## EDGE CASES

### Edge Case 1: What about `_pipeline-evolution-research/`?

**Adversary verdict:** DELETE (not in POST-CD-PIPELINE/CLAUDE.md BUILT ON)
**Master adjudication:** KEEP (referenced in POST-CD-PIPELINE/README.md synthesis)

**Resolution:** Check if synthesis documents **require** the source or merely **cite** it:
- If `07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` says "See `_pipeline-evolution-research/` for full analysis" → Level 4 (ACTIVE)
- If `README.md` says "Based on: `_pipeline-evolution-research/` (5 files)" → Level 3 (INDIRECT) or Level 2 (BIBLIOGRAPHIC)

**The test:** Can I execute the pipeline without reading the source files? If yes → bibliographic. If no → active.

### Edge Case 2: What about `02-threading-data/`?

**From MASTER-VERDICT.md:**
> **Open Question:** Does this contain useful lookup data OR just batch manifests?

**Pipeline relevance test:**
- Does Phase C component extraction need threading data?
- Does migration need provenance lookups?
- Or is this Phase 2 process artifact now that threading is COMPLETE?

**If lookup utility → Level 4 (ACTIVE)**
**If batch manifests → Level 1 (NOT RELEVANT)**

### Edge Case 3: What about screenshots?

**Audit screenshots from completed audits:**
- OD fixes applied → audit complete → screenshots are point-in-time evidence
- Playwright can regenerate on demand
- **Pipeline relevance:** Level 1 (NOT RELEVANT) — delete

**Existence proof screenshots (2 HTMLs from _tension-test):**
- Preserve top-performing layouts as reference
- Not needed for pipeline execution but archival value
- **Pipeline relevance:** Level 2 (BIBLIOGRAPHIC) — archive, not delete

---

## HOW MANY REFERENCES MAKE A FILE LOAD-BEARING?

**Quantity ≠ Quality**

**From MASTER-VERDICT.md Zone 5 (DD+OD):**
> **Deletion Impact if Ignored:** 589 broken references, 4 pipeline stages invalidated

**DD-006-fractal.html:** 20+ inbound references
**Result:** CRITICAL DEPENDENCY (most-referenced artifact)

**card-system/ directory:** 81 references
**Result:** NOT PIPELINE-RELEVANT (all references are navigational/historical, SUPERSEDED by T1 synthesis)

**The test is not COUNT, it's TYPE:**
- Code imports → load-bearing
- BUILT ON entries → load-bearing
- Pattern examples → load-bearing
- Provenance citations → not load-bearing
- Navigation mentions → not load-bearing

**A file with 100 bibliographic citations is LESS pipeline-relevant than a file with 1 code import.**

---

## MAPPING POST-CD-PIPELINE DEPENDENCIES

### Tier 1: Cannot Proceed Without
```
POST-CD-PIPELINE/
├── CLAUDE.md, README.md (navigation)
├── 01-09.md (strategic planning)
├── BUILT ON:
│   ├── _cd-research/ (9 files) ← ACTIVE DEPENDENCY
│   ├── _migration-research/ (10 files) ← ACTIVE DEPENDENCY
│   ├── tension-composition/SKILL.md ← ACTIVE DEPENDENCY
│   ├── perceptual-auditing/SKILL.md ← ACTIVE DEPENDENCY
│   ├── R5-COMBINATION-THEORY.md ← ACTIVE DEPENDENCY
│   ├── HANDOFF-AD-TO-CD.md ← ACTIVE DEPENDENCY
│   └── ACCUMULATED-IDENTITY-v2.md ← ACTIVE DEPENDENCY
```

### Tier 2: Needed for Future Phases (Not Yet in BUILT ON)
```
Component Extraction (Phase C):
├── DD/OD/AD/CD explorations (all HTML files)
├── Character extraction research
├── Component forensics
└── Pattern libraries

Migration (Phase H+I):
├── Tier 2 components (extracted in Phase C)
├── Compositional strategy library (Tier 2.5)
├── Migration playbook (created in Phase E)
└── Pilot learnings (from Phase F)
```

### Tier 3: Indirectly Useful
```
├── _pipeline-evolution-research/ (if synthesis references but doesn't require)
├── _component-taxonomy-research/ (if extraction library absorbed)
└── DESIGN-SYSTEM/ provenance chain
```

### Tier 4: Not Pipeline-Relevant
```
├── _comprehensive-audit/ (audit complete, findings absorbed)
├── _od-reenrichment/ (OD complete, spec absorbed)
├── _ad-execution/ (AD complete, ACCUMULATED-IDENTITY absorbed)
└── 7 other scratchpad directories with synthesis documents
```

---

## FINAL DEFINITION

**Pipeline relevance is the degree to which a file is FORWARD-CONSUMED by the POST-CD strategic planning and execution work.**

**The 5-level scale:**

| Level | Definition | Test | Examples |
|-------|-----------|------|----------|
| **5: CRITICAL** | Cannot proceed without it | Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON OR validated deliverable | Skills, R1-R5, explorations, ACCUMULATED-IDENTITY |
| **4: ACTIVE** | Referenced in multiple pipeline docs as source material | Reading instructions point to it | `_cd-research/`, `_migration-research/` |
| **3: INDIRECT** | Synthesis points to it but could stand alone | Helpful context, not required | Some provenance docs |
| **2: BIBLIOGRAPHIC** | Cited for provenance, not traversed | "Absorbed From" entries | Scratchpads with synthesis documents |
| **1: NOT RELEVANT** | Historical or orthogonal | Completed phase artifacts | Session logs, audit screenshots |

**The binary cut for cleanup decisions: Levels 4-5 = KEEP, Levels 1-2 = DELETE/ARCHIVE**

**Level 3 requires judgment:** Does the pipeline executor ACTUALLY need to read this, or just know it exists?

---

## CRITICAL PRINCIPLE

**From adversary-ka-scratchpads.md:**

> The scratchpads have ARCHIVAL value (provenance, attribution, process documentation) but ZERO ACTIONABLE value for post-CD pipeline. The synthesis captured everything needed for forward work.

**Pipeline relevance is about ACTIONABLE value, not archival value.**

If the synthesis absorbed insights at 8:1 compression, the scratchpad is 88% noise. For post-CD pipeline, only the synthesis is actionable.

**The core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

Applied to files: **The synthesis shapes execution; the scratchpad prevents you from forgetting the process.**

But for pipeline execution, only the synthesis is needed. The scratchpad is git history.

---

## TASK COMPLETION

Task #2 (Research PIPELINE RELEVANCE dimension) — **COMPLETE**

**Key findings:**
1. Pipeline relevance = FORWARD CONSUMPTION, not bibliographic citation
2. Only ~4-8 directories pass the forward-consumption test
3. Compression ratio >5:1 indicates synthesis absorbed scratchpad (88% noise)
4. Reference count ≠ pipeline relevance (type matters: import > BUILT ON > citation)
5. 5-level scale: CRITICAL → ACTIVE → INDIRECT → BIBLIOGRAPHIC → NOT RELEVANT
6. Binary cut for cleanup: Levels 4-5 KEEP, Levels 1-2 DELETE/ARCHIVE, Level 3 = judgment

**Output:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/_cleanup-audit/usefulness-framework/internal/dim-pipeline.md`
