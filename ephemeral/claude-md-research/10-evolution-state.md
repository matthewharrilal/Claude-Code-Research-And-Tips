# Research: Evolution State Communication for design-system/CLAUDE.md

**Researcher:** evolution-state-researcher
**Date:** 2026-02-14
**Task:** Research how the root `design-system/CLAUDE.md` should communicate the EVOLUTION STATE of the design system — what's complete, what's current, what's next, and what supersedes what.

---

## EXECUTIVE SUMMARY

The design system has undergone 14+ agent teams across 5 major phases (DD, OD, AD, CD, Phase C Extraction), producing:
- **Completed foundations:** 4 exploration stages (DD, OD, AD, CD) with 84+ findings
- **Current state:** Phase C Extraction complete (compositional-core/ with 6-layer ontology)
- **Next phase:** Phase D Validation (NOT YET STARTED)
- **Future:** Phases E-G (Playbook), FREEZE LINE, Phases H-I (Migration)

**Key Challenge:** The design system has MULTIPLE supersession relationships that are NOT simple linear replacements:
- compositional-core/ provides CHOICE-oriented extraction (identity + enablement hybrid)
- specification/ provides HISTORICAL CONTEXT (research provenance, exploration artifacts)
- Both are valid; context determines which to use

**Recommendation:** Use a **3-tier temporal map** (COMPLETE → CURRENT → FORWARD) + **supersession matrix** (what supersedes what, for what purpose).

---

## 1. TEMPORAL MAP: WHERE WE ARE IN THE JOURNEY

### Current Phase Indicator

**Format:** Simple status marker at top of CLAUDE.md

```markdown
═══════════════════════════════════════════════════════════════════════════════
## CURRENT PHASE: Phase D Extraction Validation (NEXT)
═══════════════════════════════════════════════════════════════════════════════

**Status:** NOT YET STARTED
**Predecessor:** Phase C Extraction (COMPLETE)
**Next:** Phase E Migration Playbook v2

**What Phase D Does:**
- Build 1 Track 1 page using compositional-core/ alone
- Build 1 Track 2 page using compositional-core/ + tension-composition skill
- Verify extraction sufficiency, document gaps
- Produce validation report before playbook writing
```

### 3-Tier Timeline Structure

**Recommended format:**

```markdown
### DESIGN SYSTEM EVOLUTION STATE

**COMPLETE (4 exploration stages + 1 extraction):**
- ✅ Stage 1: Component Foundations (11 components, 5 soul pieces)
- ✅ Stage 2: Density Dimension (DD-001 through DD-006, 18 DD-F findings)
- ✅ Stage 3: Organizational Dimension (OD-001 through OD-006, 17 OD-F findings, re-enriched v3)
- ✅ Stage 4: Axis Dimension (AD-001 through AD-006, 28 AD-F findings, AD-F-023 ATTENTION TOPOLOGY)
- ✅ Stage 5: Combination Dimension (CD-001 through CD-006, 25 CD-F findings, ACCUMULATED-IDENTITY-v3)
- ✅ Phase C: Compositional Core Extraction (6-layer ontology, 42 files, 20,576 lines)
- ✅ Skill Enrichment: tension-composition + perceptual-auditing skills (Phase 4.0 guardrails)

**CURRENT (validation + freeze line):**
- ⏳ Phase D: Extraction Validation (NOT YET STARTED)
- ⏳ Phase E: Migration Playbook v2 (dual-track)
- ⏳ Phase F: Pilot Migration (MUST include Track 2)
- ⏳ Phase G: Playbook Refinement

**FORWARD (post-freeze migration):**
- ═══ FREEZE LINE ═══ (After Phase G, design system locks)
- 📋 Phase H: Track 1 Migration (30-40 pages @ 45-90 min, parallelizable)
- 📋 Phase I: Track 2 Migration (35-45 pages @ 3-5 hrs, sequential bottleneck)
```

**Why 3-tier vs timeline:** Timeline implies strict ordering; 3-tier emphasizes STATE (what's done, what's active, what's coming). Agents need to know "am I using COMPLETE foundations or PENDING tools?"

---

## 2. SUPERSESSION: WHAT SUPERSEDES WHAT

### The Supersession Matrix

This is the CRITICAL question. The design system has evolved through multiple generations, but supersession is NOT simple replacement.

**Recommended format:**

```markdown
### SUPERSESSION MATRIX

| Layer | New Authority | Historical Context | Relationship | When to Use Which |
|-------|--------------|-------------------|--------------|-------------------|
| **Identity** | compositional-core/identity/ (20 prohibitions + 3 soul constraints) | specification/tokens/ (geometric, typography, spacing, colors) | REFINES | Use compositional-core/ for CHOICE (prohibitions); use specification/ for VALUES (token CSS) |
| **Vocabulary** | compositional-core/vocabulary/tokens.css (:root block) | specification/tokens/*.md | CONSOLIDATES | Use compositional-core/ for SINGLE-FILE reference; use specification/ for RATIONALE |
| **Grammar** | compositional-core/grammar/ (18 mechanisms + 11 rules + border system) | specification/patterns/*.md | EXTRACTS | Use compositional-core/ for BUILDING; use specification/ for RESEARCH CONTEXT |
| **Components** | compositional-core/components/ (merged CSS + inventory) | fortress/density/, fortress/organizational/, fortress/combination/ | DISTILLS | Use compositional-core/ for MIGRATION; use fortress/ for PROVENANCE |
| **Case Studies** | compositional-core/case-studies/ (9 anti-prescription examples) | fortress/*/DD-006, OD-004, CD-006 HTMLs | DEMONSTRATES | Use compositional-core/ for PATTERN RECOGNITION; use fortress/ for FULL CONTEXT |
| **Guidelines** | compositional-core/guidelines/ (7+ semantic gap rules + responsive) | pipeline/03-MIGRATION-PIPELINE.md | OPERATIONALIZES | Use compositional-core/ for QUICK REFERENCE; use pipeline/ for FULL PLAYBOOK |
```

### Key Insights from the Matrix

**1. Compositional-core/ does NOT replace specification/ entirely**

- compositional-core/ = **CHOICE-oriented extraction** (what to use, when)
- specification/ = **CONTEXT-oriented provenance** (why it exists, how it was discovered)

**Example:** If you're BUILDING a new page:
- Read compositional-core/identity/prohibitions.md (20 prohibitions, binary rules)
- Read compositional-core/vocabulary/tokens.css (:root CSS block for values)
- Read compositional-core/grammar/mechanism-catalog.md (18 mechanisms to apply)

**Example:** If you're RESEARCHING why a decision was made:
- Read specification/provenance/stage-2-density-dd/DD-outbound-findings.md (DD-F-006 fractal)
- Read fortress/density/DD-006/ (full HTML + research application record)
- Read specification/BACKBONE.md (master narrative of the pipeline)

**2. The 6-layer ontology in compositional-core/ is ADDITIVE, not DESTRUCTIVE**

Layer 1-3 (identity/vocabulary/grammar) = **frozen foundation** (binary rules, extractable mechanisms)
Layer 4-6 (components/case-studies/guidelines) = **living catalog** (grows as patterns compound)

**3. Fortress/ explorations are PERMANENT REFERENCE, not superseded artifacts**

- DD-006-fractal.html has 371 references across the codebase
- OD-006-creative.html demonstrates 5th fractal scale (navigation)
- CD-006-pilot-migration.html is the crown jewel (39/40 audit score)

These are NOT superseded by compositional-core/case-studies/. The case studies REFERENCE the explorations.

**4. Skills supersede pipeline planning docs for EXECUTION, not for STRATEGY**

- tension-composition skill (839 lines) = **Track 2 execution engine**
- pipeline/07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md = **strategic integration guide**

If you're BUILDING a Track 2 page: invoke the skill.
If you're PLANNING the migration: read the pipeline doc.

---

## 3. RESEARCH RELEVANCE: R1-R5 (337 findings)

### Current Application State

**From RESEARCH-SYNTHESIS.md (lines 1-100):**
- R1: 28 findings (documentation patterns) — **PRIMARY for OD**, applied across all 6 OD explorations
- R2: 27 findings (creative layouts) — secondary for multiple stages
- R3: 51 findings (density dimensions) — **~76% applied in DD** (DD-F-006 fractal from R3-023)
- R4: 192 findings (axis innovations) — **PRIMARY for AD**, all applied across 6 AD explorations
- R5: 39 findings (combination theory) — **PRIMARY for CD**, applied in CD phase

**Status after Phase C Extraction:** The 337 findings are NOW DISTILLED into compositional-core/.

### When Should Agents Read R1-R5?

**Recommended guidance:**

```markdown
### RESEARCH RELEVANCE (R1-R5: 337 findings)

**When to read R1-R5:**

1. **NEVER for building tasks** — compositional-core/ has distilled the findings
2. **ALWAYS for research tasks** — understanding WHY decisions were made
3. **SOMETIMES for validation tasks** — cross-checking whether extraction captured intent

**Research task examples:**
- "Why does the design system use fractal self-similarity?" → Read R3-023
- "What research supports compositional mechanisms?" → Read R5-007 + R5-023
- "How were organizational patterns discovered?" → Read R1-DOCUMENTATION-PATTERNS.md

**Building task examples:**
- "Build a new page" → Read compositional-core/components/merged.css + case-studies/
- "Apply tension-composition" → Invoke ~/.claude/skills/tension-composition/SKILL.md
- "Verify perceptual quality" → Invoke ~/.claude/skills/perceptual-auditing/SKILL.md

**Validation task examples:**
- "Does compositional-core/ capture R3-023 (fractal)?" → Read BOTH
- "Are all 18 mechanisms from research represented?" → Cross-check R5 vs grammar/mechanism-catalog.md
```

**Key principle:** R1-R5 remain AUTHORITATIVE for research lineage, but compositional-core/ is SUFFICIENT for execution.

---

## 4. FORWARD SIGNALING: WHAT'S COMING NEXT

### The Freeze Line Concept

**From pipeline/05-COMPLETE-ROADMAP.md (lines 593-651):**

```
Phase A-G: CD through Playbook Refinement (pre-freeze)
═══════════════════════ FREEZE LINE ═══════════════════════
Phase H-I: Track 1 + Track 2 Migration (post-freeze)
```

**After the freeze line:**
- No new tokens
- No new patterns
- No soul changes
- No convention spec additions
- Track 2 composes Tier 3 FRESH per page but uses FROZEN vocabulary

### How Should CLAUDE.md Signal This?

**Recommended section:**

```markdown
### THE FREEZE LINE (Not Yet Reached)

**Current State:** Pre-freeze (Phases A-G active, design system CAN evolve)

**What happens at the freeze:**
- After Phase G (Playbook Refinement), the design system LOCKS
- No new tokens, patterns, or soul pieces can be added
- Migration (Phases H-I) uses ONLY what exists above the line
- Track 2 pages compose Tier 3 fresh but from FROZEN Tier 1-2 vocabulary

**What IS frozen:**
- compositional-core/identity/ (20 prohibitions + 3 soul constraints)
- compositional-core/vocabulary/tokens.css (:root block)
- compositional-core/grammar/ (18 mechanisms + 11 rules)
- compositional-core/components/ (merged CSS base)
- ACCUMULATED-IDENTITY-v3 (terminal reasoning document)

**What is NOT frozen:**
- Implementation details (CSS class names, HTML structures)
- Playbook wording and examples
- Page classifications (can be re-classified if wrong)
- Application notes and MIG-F findings
- Tier 3 CSS (generated fresh per Track 2 page from frozen vocabulary)

**Why this matters:**
The freeze guarantees the user's non-negotiable: "Once we start migrating pages, I don't want to update the design system."
```

### Phase D Validation Protocol

**Should CLAUDE.md mention Phase D?**

**YES, but concisely:**

```markdown
### NEXT PHASE: Phase D Extraction Validation

**Status:** NOT YET STARTED
**Purpose:** Prove compositional-core/ sufficiency BEFORE writing playbook

**What happens:**
- Build 1 Track 1 page using compositional-core/ alone (tests assembly)
- Build 1 Track 2 page using compositional-core/ + tension-composition skill (tests composition)
- Document gaps, verify sufficiency
- Produce validation report

**Why this exists:**
Better to discover extraction gaps on 2 test pages than on 75 production pages.

**Pass criteria:**
- Track 1 page ships without requiring NEW Tier 1-2 CSS
- Track 2 page ships using library + fresh Tier 3 composition
- All gaps documented with workarounds
```

### Future Phases (E-I)

**Should CLAUDE.md list all future phases?**

**Recommendation:** Brief summary only, with pointer to pipeline/05-COMPLETE-ROADMAP.md for full detail.

```markdown
### FUTURE PHASES (After Phase D)

**Pre-Freeze (Phases E-G):**
- Phase E: Migration Playbook v2 (dual-track specification)
- Phase F: Pilot Migration (2-3 pages, MUST test Track 2)
- Phase G: Playbook Refinement (incorporate pilot learnings)

**Post-Freeze (Phases H-I):**
- Phase H: Track 1 Migration (30-40 pages @ 45-90 min, parallelizable)
- Phase I: Track 2 Migration (35-45 pages @ 3-5 hrs, sequential bottleneck)

**Full timeline:** See pipeline/05-COMPLETE-ROADMAP.md (835 lines, master timeline)
```

**Why brief:** Agents need to know WHAT'S NEXT (Phase D) and WHAT EXISTS (roadmap), but detailed planning is in pipeline/.

---

## 5. PROVENANCE: HOW MUCH CONTEXT DOES AN AGENT NEED?

### The 3-Layer Provenance Architecture

**From specification/provenance/CLAUDE.md:**

**Layer 1: Inline Threading Headers** (490 files)
- Per-file metadata (WHY THIS EXISTS, BUILT ON, CONSUMED BY)
- Distributed dependency graph

**Layer 2: Light Provenance Sections** (244 files)
- Lighter metadata linking files to parent phase + T1 synthesis
- Bridge between distributed graph and formal chain

**Layer 3: Formal Chain Documents** (specification/provenance/)
- Curated narrative per stage (STAGE-HEADER, outbound-findings, SYNTHESIS, HANDOFF)
- Authoritative "what happened, why, what it means"

### How Much Should CLAUDE.md Reference?

**Recommended approach:**

```markdown
### PROVENANCE CHAIN

**The design system is built on a 3-layer provenance architecture:**

1. **Inline headers** (490 files) — Per-file metadata at top of every source file
2. **Light sections** (244 files) — Lighter metadata linking files to parent phase
3. **Formal chain docs** (specification/provenance/) — Stage narratives + findings

**When you need to trace a decision:**

- **Quick lookup:** compositional-core/ (distilled patterns + mechanisms)
- **Finding IDs:** specification/provenance/stage-X/[STAGE]-outbound-findings.md
- **Full context:** fortress/[stage]/[EXPLORATION]/ (HTML + research application record)
- **Master narrative:** specification/BACKBONE.md (the complete story)

**Key traces:**
- DD-F-006 (fractal) → R3-023 → DD-006-fractal.html (36/40, highest DD score)
- OD-F-005 (organization IS density) → R1-DOCUMENTATION-PATTERNS → OD re-enrichment (94 EXT-* findings)
- AD-F-023 (ATTENTION TOPOLOGY) → R4-AXIS-INNOVATIONS → AD-SYNTHESIS.md (crown jewel meta-equivalence)
- CD-F-025 findings → R5-COMBINATION-THEORY → CD-006-pilot-migration.html (39/40, crown jewel)

**Full provenance navigation:** specification/provenance/CLAUDE.md
```

**Why this level:** Agents need to know provenance EXISTS, HOW to navigate it, and WHERE to start. They don't need the full 3-layer architecture explained in root CLAUDE.md.

---

## 6. OPEN QUESTIONS

### Q1: Should root CLAUDE.md duplicate compositional-core/ structure?

**Current state:** compositional-core/ has its own 6-layer ontology (identity/vocabulary/grammar/components/case-studies/guidelines).

**Options:**
1. Root CLAUDE.md lists compositional-core/ as "new authority" without duplicating structure
2. Root CLAUDE.md provides BRIEF overview of 6 layers with pointers to subdirs
3. Root CLAUDE.md defers to compositional-core/CLAUDE.md (if it exists)

**Research finding:** compositional-core/ does NOT have CLAUDE.md yet (Task #1 on the team task list).

**Recommendation:** Root CLAUDE.md provides BRIEF 6-layer overview + defers to compositional-core/README.md (or future CLAUDE.md) for details.

### Q2: How should root CLAUDE.md handle "what to read first" for new agents?

**Current specification/CLAUDE.md says:** "READ README.md (THE KORTAI DESIGN MIND) FIRST"

**After Phase C extraction, should it say:**
- "READ compositional-core/README.md FIRST" (if building)
- "READ specification/README.md FIRST" (if researching)
- "READ BOTH in this order: compositional-core/ then specification/"

**Recommendation:** Depends on task type (covered in Task #17 ingestion-protocol research).

### Q3: Should CLAUDE.md mention the 14 agent teams that built this?

**From MEMORY.md:** 14 agent teams, each with distinct topology/lessons learned.

**Recommendation:** NO. Root CLAUDE.md is for USERS of the design system, not historians of the build process. That context lives in MEMORY.md and archive/checkpoints/.

---

## 7. RECOMMENDED EVOLUTION STATE SECTION FOR ROOT CLAUDE.MD

Based on all research above:

```markdown
═══════════════════════════════════════════════════════════════════════════════
## EVOLUTION STATE: WHERE THE DESIGN SYSTEM IS
═══════════════════════════════════════════════════════════════════════════════

### CURRENT PHASE: Phase D Extraction Validation (NEXT)

**Status:** NOT YET STARTED
**Predecessor:** Phase C Extraction (COMPLETE)
**What happens:** Build 2 test pages (1 Track 1, 1 Track 2) to validate compositional-core/ sufficiency

---

### 3-TIER TIMELINE

**COMPLETE (4 exploration stages + 1 extraction):**
✅ Stage 1: Component Foundations (11 components, 5 soul pieces)
✅ Stage 2: Density Dimension (DD-001–DD-006, 18 DD-F findings, DD-F-006 fractal)
✅ Stage 3: Organizational Dimension (OD-001–OD-006, 17 OD-F findings, v3 re-enriched)
✅ Stage 4: Axis Dimension (AD-001–AD-006, 28 AD-F findings, AD-F-023 ATTENTION TOPOLOGY)
✅ Stage 5: Combination Dimension (CD-001–CD-006, 25 CD-F findings, ACCUMULATED-IDENTITY-v3)
✅ Phase C: Compositional Core Extraction (6-layer ontology, 42 files, 20,576 lines)
✅ Skill Enrichment (tension-composition + perceptual-auditing, Phase 4.0 guardrails)

**CURRENT (validation + freeze line approach):**
⏳ Phase D: Extraction Validation (NOT YET STARTED)
⏳ Phase E: Migration Playbook v2 (dual-track)
⏳ Phase F: Pilot Migration (MUST include Track 2)
⏳ Phase G: Playbook Refinement

**FORWARD (post-freeze migration):**
═══ FREEZE LINE ═══ (After Phase G, design system locks permanently)
📋 Phase H: Track 1 Migration (30-40 pages @ 45-90 min, parallelizable)
📋 Phase I: Track 2 Migration (35-45 pages @ 3-5 hrs, sequential bottleneck)

**Full roadmap:** pipeline/05-COMPLETE-ROADMAP.md (835 lines, master timeline)

---

### SUPERSESSION MATRIX: WHAT SUPERSEDES WHAT

| Layer | New Authority | Historical Context | Relationship |
|-------|--------------|-------------------|--------------|
| Identity | compositional-core/identity/ | specification/tokens/ | REFINES (prohibitions vs values) |
| Vocabulary | compositional-core/vocabulary/ | specification/tokens/*.md | CONSOLIDATES (single-file vs multi-file) |
| Grammar | compositional-core/grammar/ | specification/patterns/*.md | EXTRACTS (mechanisms vs full patterns) |
| Components | compositional-core/components/ | fortress/ explorations | DISTILLS (merged CSS vs full HTMLs) |
| Case Studies | compositional-core/case-studies/ | fortress/ HTMLs | DEMONSTRATES (pattern recognition vs full context) |
| Guidelines | compositional-core/guidelines/ | pipeline/03-MIGRATION-PIPELINE.md | OPERATIONALIZES (quick ref vs full playbook) |

**Key principle:**
- compositional-core/ = CHOICE-oriented extraction (what to use, when) — USE FOR BUILDING
- specification/ = CONTEXT-oriented provenance (why it exists, how discovered) — USE FOR RESEARCH
- fortress/ = PERMANENT REFERENCE (full HTML explorations) — USE FOR DEEP CONTEXT

---

### RESEARCH RELEVANCE: R1-R5 (337 findings)

**Current state:** Findings are NOW DISTILLED into compositional-core/.

**When to read R1-R5:**
- ❌ NEVER for building tasks (compositional-core/ is sufficient)
- ✅ ALWAYS for research tasks (understanding WHY decisions were made)
- ⚠️ SOMETIMES for validation tasks (cross-checking extraction captured intent)

**Examples:**
- Building a page? → Read compositional-core/components/merged.css + case-studies/
- Understanding fractal principle? → Read R3-023 (research) + DD-F-006 (finding) + DD-006/ (HTML)
- Validating extraction? → Cross-check R5-007 vs grammar/mechanism-catalog.md

---

### THE FREEZE LINE (Not Yet Reached)

**Current State:** Pre-freeze (Phases D-G active, design system CAN evolve)

**What happens at the freeze (after Phase G):**
- Design system LOCKS permanently
- No new tokens, patterns, or soul pieces
- Migration uses ONLY what exists above the line
- Track 2 pages compose Tier 3 fresh from FROZEN Tier 1-2 vocabulary

**What IS frozen:**
- compositional-core/identity/, vocabulary/, grammar/, components/
- ACCUMULATED-IDENTITY-v3 (terminal reasoning document)
- Tier 1-2 CSS (~400 lines merged base)
- 18 mechanisms + 11 compositional rules

**What is NOT frozen:**
- Implementation details (CSS class names, HTML structures)
- Page classifications (can be re-classified if initial was wrong)
- Application notes and MIG-F findings (document pattern usage)
- Tier 3 CSS (generated fresh per Track 2 page from frozen vocabulary)

**Why this matters:**
Guarantees the user's non-negotiable: "Once we start migrating pages, I don't want to update the design system."

═══════════════════════════════════════════════════════════════════════════════
```

---

## 8. KEY FILES REFERENCED

| File | Purpose | Lines | Key Content |
|------|---------|-------|-------------|
| pipeline/05-COMPLETE-ROADMAP.md | Master timeline | 835 | Phase A-I breakdown, freeze line, Track 1/2 split |
| pipeline/02-POST-CD-PHASES.md | Phase definitions | 803 | Component extraction scope, validation pass, two-track reality |
| research/RESEARCH-SYNTHESIS.md | R1-R5 synthesis | 2,500+ | 337 findings cross-research unification |
| compositional-core/validation/gap-check.md | Phase C gaps | 50 (read) | Gap severity MINOR, 3 semantic rules unaddressed |
| specification/provenance/CLAUDE.md | Provenance nav | ~200 | 3-layer architecture, R3-023 chain trace example |

---

## 9. RECOMMENDATIONS FOR ROOT CLAUDE.MD

**1. Add "EVOLUTION STATE" section** (see Section 7 above)
   - 3-tier timeline (COMPLETE → CURRENT → FORWARD)
   - Current phase indicator (Phase D NEXT)
   - Supersession matrix (what supersedes what, for what purpose)

**2. Add "RESEARCH RELEVANCE" guidance**
   - When to read R1-R5 (research tasks, NOT building tasks)
   - compositional-core/ is sufficient for execution

**3. Add "FREEZE LINE" explainer**
   - Not yet reached (pre-freeze Phases D-G active)
   - What freezes, what doesn't
   - User's non-negotiable guarantee

**4. Update "HOW TO READ" section**
   - Distinguish compositional-core/ (building) vs specification/ (research)
   - Point to compositional-core/README.md for 6-layer ontology

**5. Add "PROVENANCE" pointer**
   - Brief explanation of 3-layer architecture
   - Examples of key traces (DD-F-006, AD-F-023, CD-F-025)
   - Pointer to specification/provenance/CLAUDE.md for full navigation

**6. Keep "FORWARD PHASES" brief**
   - Phase D description (next immediate step)
   - Phase E-I summary (one sentence each)
   - Pointer to pipeline/05-COMPLETE-ROADMAP.md for full detail

---

## 10. CROSS-REFERENCE TO OTHER RESEARCH TASKS

This research connects to:

**Task #15 (folder-landscape-researcher):** Needs to know compositional-core/ vs specification/ vs fortress/ distinction

**Task #16 (agent-routing-researcher):** Routing logic depends on COMPLETE vs CURRENT phase state

**Task #17 (ingestion-protocol-researcher):** "What to read first" depends on whether agent is building (compositional-core/) or researching (specification/)

**Task #18 (THIS TASK):** Evolution state communication

**Task #5 (root-claude-auditor):** Will audit existing design-system/CLAUDE.md for staleness against these findings

---

## FINAL SUMMARY

The design system's evolution state is COMPLEX but NAVIGABLE if CLAUDE.md provides:

1. **Clear current phase marker** (Phase D NEXT)
2. **3-tier timeline** (COMPLETE → CURRENT → FORWARD)
3. **Supersession matrix** (compositional-core/ vs specification/ vs fortress/, purpose-driven)
4. **Research guidance** (R1-R5 for research tasks, NOT building tasks)
5. **Freeze line context** (not yet reached, what freezes, why it matters)
6. **Provenance pointers** (3 layers, key traces, navigation file)

Agents need to know WHERE they are, WHAT'S complete, WHAT'S next, and WHICH authority to consult for WHAT purpose.

The key insight: **Supersession is NOT simple replacement. It's purpose-driven selection.**
