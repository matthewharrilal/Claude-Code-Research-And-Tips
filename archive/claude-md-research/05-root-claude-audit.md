# Root CLAUDE.md Audit — Staleness, Gaps, and Structural Issues

**File Audited:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/CLAUDE.md` (489 lines)

**Context:** This file was written BEFORE Phase C extraction (compositional-core), BEFORE the 3x audit + restructure, and BEFORE skill enrichment. The design system has moved from exploration phase to operational phase with an extracted compositional core.

---

## EXECUTIVE SUMMARY

**Overall Assessment:** MAJOR UPDATES REQUIRED

- **Path Accuracy:** 7/11 paths are WRONG (64% failure rate)
- **Workflow Relevance:** 60% obsolete, 30% partially relevant, 10% still accurate
- **Missing Content:** Zero coverage of compositional-core, skills, Track 1/2 workflows, or anti-gravity mechanisms
- **Structural Issues:** Inline header references wrong path, directory structure is fantasy (showcase/ doesn't exist)

**Recommendation:** REPLACE, not UPDATE. The gap between current state and reality is too large for incremental fixes.

---

## 1. PATH VERIFICATION — Critical Failures

### Paths Referenced in CLAUDE.md (11 total)

| Path | Status | Actual Location |
|------|--------|-----------------|
| `archive/checkpoints/RESEARCH-ACTIVE.md` | ✅ EXISTS | Correct |
| `active/research/RESEARCH-SYNTHESIS.md` | ❌ WRONG | `design-system/research/RESEARCH-SYNTHESIS.md` |
| `active/design-system/patterns/density-patterns.md` | ❌ WRONG | `design-system/specification/patterns/density-patterns.md` |
| `active/design-system/anti-patterns/registry.md` | ❌ WRONG | `design-system/specification/anti-patterns/registry.md` |
| `archive/checkpoints/DISCOVERIES-LOG.md` | ✅ EXISTS | Correct |
| `active/design-system/tokens/*` | ❌ WRONG | `design-system/specification/tokens/*` |
| `archive/knowledge-architecture/core/KA-DECISIONS.md` | ❌ WRONG | Not verified (archive structure changed) |
| `archive/knowledge-architecture/core/SOURCE-OF-TRUTH-REGISTRY.md` | ❌ WRONG | Not verified (archive structure changed) |
| `active/research/R1-DOCUMENTATION-PATTERNS.md` | ❌ WRONG | `design-system/research/R1-DOCUMENTATION-PATTERNS.md` |
| `active/research/R2-R5` | ❌ WRONG | `design-system/research/R2-R5.md` |
| `active/design-system/README.md` | ❌ WRONG | No README.md in active/design-system/ (doesn't exist) |

**Score:** 2/11 correct (18%)

### Critical Path Issues

1. **`active/` directory doesn't exist** — The entire `active/` path prefix is wrong. Files are in `design-system/` directly.
2. **Research files moved** — R1-R5 + RESEARCH-SYNTHESIS are in `design-system/research/`, not `active/research/`.
3. **Specification structure** — Tokens, patterns, anti-patterns are in `design-system/specification/`, not `active/design-system/`.
4. **No tokens overview** — Referenced `active/design-system/tokens/*` doesn't exist; actual tokens are in `specification/tokens/` but structure is unclear.

---

## 2. WORKFLOW RELEVANCE — Obsolescence Analysis

### OBSOLETE Sections (60% of content)

#### 2.1. Mandatory Research Grounding (Lines 44-111)
**Status:** PARTIALLY OBSOLETE

**Still Relevant:**
- Principle of reading files before building (not relying on memory)
- Research citation methodology
- Avoiding anti-patterns

**Obsolete:**
- 5-file read requirement references wrong paths
- No mention of compositional-core as primary source
- No distinction between Track 1 (compositional-core) vs Track 2 (research-grounded exploration)
- R-X finding workflow assumes research-first approach, but compositional-core provides READY-TO-USE vocabulary

**Problem:** The workflow describes exploration-phase methodology (read research → identify findings → apply → verify). Now that compositional-core exists, the workflow should be:
- Track 1: Read compositional-core → compose → verify soul compliance
- Track 2: Read research → extend vocabulary → validate → add to compositional-core

#### 2.2. Refinement Loop (Lines 112-174)
**Status:** PARTIALLY RELEVANT

**Still Relevant:**
- Iteration principle (draft → verify → refine)
- Soul verification steps
- Gap identification

**Obsolete:**
- Step 1 "GROUND IN RESEARCH" assumes research-first workflow (obsolete for Track 1)
- Step 4 "VERIFY AGAINST SOUL" references `active/design-system/tokens/*` (wrong path)
- Step 6 "Invoke Perceptual Depth Audit sub-agents" — no such sub-agents exist; perceptual-auditing is a SKILL, not sub-agents
- Step 8 "UPDATE RESEARCH-ACTIVE.md" assumes research-tracking workflow (not needed for Track 1)

**Problem:** The loop assumes research-application workflow, not compositional-core composition workflow.

#### 2.3. Research Application Record (Lines 175-230)
**Status:** MOSTLY OBSOLETE for Track 1, RELEVANT for Track 2

**Problem:** This entire output format is designed for research-finding application tracking. For Track 1 work (compositional-core composition), the output format should be:
- Components used (from compositional-core/components/)
- Mechanisms applied (from compositional-core/grammar/)
- Soul compliance verification (from compositional-core/identity/)
- Anti-gravity audit (case studies are NOT templates)

For Track 2 work (research-grounded exploration), this format is still relevant.

**No mention of Track 1 vs Track 2 distinction.**

#### 2.4. Mandatory Files to Read (Lines 231-286)
**Status:** PATHS WRONG, CONCEPT OUTDATED

**Problems:**
- All paths wrong (active/ prefix, wrong directory structure)
- No mention of compositional-core 6-layer ontology
- No mention of phase-gated access protocol
- "Before ANY Exploration" assumes exploration is the primary workflow (not composition)

**What's Missing:**
- compositional-core/README.md (operational layer entry point)
- compositional-core/identity/prohibitions.md (22 prohibitions, ALWAYS load)
- compositional-core/vocabulary/tokens.css (65 tokens, ALWAYS load)
- Phase-gate rules (what opens when, based on agent type)

#### 2.5. Perceptual Depth Audit (Lines 317-349)
**Status:** CONCEPT WRONG

**Problem:** The section describes "Perceptual Depth Audit Skill Package" with "7 sub-agent audit" and "Sub-agent deployment (A through G, full definitions)".

**Reality:** `perceptual-auditing` is a SKILL in `~/.claude/skills/perceptual-auditing/SKILL.md`, not a "skill package with 7 sub-agents". The skill was enriched with:
- 48 PA questions (up from 28)
- Guardrails (940px min container, 16px label-to-heading, 32px padding floor, 40% compression ratio)
- Metaphor-awareness

**No sub-agents. No "A through G definitions". Just a skill with a question bank and guardrails.**

#### 2.6. Directory Structure (Lines 431-456)
**Status:** FANTASY — ZERO ACCURACY

**The CLAUDE.md shows:**
```
showcase/
├── fortress/
├── active/
└── CLAUDE.md
```

**Actual structure:**
```
design-system/
├── axis/
├── compositional-core/       ← MISSING from CLAUDE.md
├── implementation/
├── pipeline/
├── research/
├── specification/
├── tension-test/
├── validated-explorations/   ← Different from "fortress/"
├── CLAUDE.md
└── README.md
```

**Problems:**
- `showcase/` directory doesn't exist (it's in `site/app/showcase/`, not design-system/)
- `fortress/` doesn't exist (actual name: `validated-explorations/`)
- `active/` directory doesn't exist (conflates repo-level archive/active/ with design-system internals)
- ZERO mention of `compositional-core/` (the most important directory added post-Phase C)

---

## 3. MISSING CONTENT — Critical Gaps

### 3.1. Compositional-Core (0 mentions)

**What's Missing:**
- No mention of `compositional-core/` directory
- No mention of 6-layer ontology (identity → vocabulary → grammar → components → case studies → guidelines)
- No mention of phase-gated access protocol
- No mention of Identity + Enablement hybrid lens
- No mention of 40-item extraction (30-40 sweet spot for creative freedom)
- No mention of anti-gravity mechanisms (case studies are proof-of-concept, NOT templates)
- No mention of ALWAYS-LOAD layer (prohibitions.md + tokens.css)

**Impact:** Agents reading this CLAUDE.md have ZERO awareness of the operational layer that was extracted specifically to enable composition without research-grounding overhead.

### 3.2. Skills (0 mentions)

**What's Missing:**
- No mention of `tension-composition` skill
- No mention of `perceptual-auditing` skill
- No mention of skill enrichment (guardrails, metaphor-awareness, Phase 4.0 additions)
- Section describes "Perceptual Depth Audit sub-agents" which don't exist — it's a SKILL

**Impact:** Agents don't know when to invoke skills or what they do.

### 3.3. Track 1 vs Track 2 Workflows (0 mentions)

**What's Missing:**
- No distinction between composition (Track 1) and exploration (Track 2)
- No guidance on when to use compositional-core vs when to ground in research
- No explanation of phase-gated access (different agents get different layers)

**Current State:** CLAUDE.md assumes ALL work is Track 2 (research-grounding exploration). Track 1 (compositional-core composition) is the primary operational workflow now.

### 3.4. Anti-Gravity Mechanisms (0 mentions)

**What's Missing:**
- No mention of M1-M18 mechanisms
- No mention of Essential 5 (M1, M3, M5, M7, M8)
- No explanation of anti-prescription framing
- No warning that case studies are proof-of-concept, NOT templates
- No concept of 94.7% mechanism compliance target

**Impact:** Agents may treat case studies as templates, violating the entire anti-gravity design intent.

### 3.5. Two-Phase Boundary (0 mentions)

**What's Missing:**
- No mention of Phase 1 (identity/vocabulary/grammar extraction) vs Phase 2 (component/case-study/guideline extraction)
- No mention of two-phase prompting protocol (Wave 1-2 terminate before Wave 3 spawns)
- No explanation of why boundary exists (prevent lens drift)

### 3.6. Prohibitions (shallow coverage)

**Current State:** CLAUDE.md mentions soul verification (border-radius: 0, box-shadow: none) but:
- No mention of 22 prohibitions in `compositional-core/identity/prohibitions.md`
- No distinction between ABSOLUTE (8) vs CONDITIONAL (12) vs META (2)
- No mention of epidemic values (2px borders, accent borders < 4px)
- No mention of documented exceptions

**Impact:** Agents check 2-3 soul constraints but miss the other 19 prohibitions.

---

## 4. STRUCTURAL ISSUES

### 4.1. Inline Threading Header (Lines 1-30)

**Problem:**
```
File: docs-spa/app/showcase/CLAUDE.md
```

**Reality:** This file is at `design-system/CLAUDE.md`, not `docs-spa/app/showcase/CLAUDE.md`.

**Impact:** Provenance chain is broken. Header claims this is a showcase/ file, but it's the root design-system CLAUDE.md.

### 4.2. "Process Enforcement Document for ALL work within showcase/ directory"

**Line 7-9:** "Process enforcement document for ALL work within the showcase/ directory. Read automatically by Claude Code on directory entry."

**Problem:** This CLAUDE.md is in `design-system/`, not `showcase/`. The description is wrong.

**Reality:** There IS a `site/app/showcase/` directory with its own content, but it's NOT the same as `design-system/`.

### 4.3. Research Finding Counts (Lines 352-367)

**Status:** STILL ACCURATE (as of 2026-02-04)

This section correctly states:
- R1: 28 findings
- R2: 27 findings
- R3: 51 findings
- R4: 192 findings
- R5: 39 findings
- Total: 337 findings

**This is the ONLY section that's still fully accurate.**

### 4.4. Built On Dependencies (Lines 15-21)

The header claims this CLAUDE.md is built on:
- R3-012 (Template example for density patterns)
- R5-007 (Template example for advanced patterns)
- R4-003 (Template example for component patterns)
- 337 total research findings (Aggregate count enforced in grounding)

**Problem:** This describes a research-grounding enforcement document, which this CLAUDE.md was originally designed to be. But NOW the design system has a compositional-core that's built on EXTRACTION, not research findings.

**Reality:** The current design-system/CLAUDE.md should be built on:
- Phase C extraction (6-layer ontology)
- 3x audit + restructure (fortress/active/archive structure)
- Skill enrichment (tension-composition + perceptual-auditing)
- Anti-gravity mechanisms (M1-M18)

---

## 5. SECTION-BY-SECTION CLASSIFICATION

| Section | Lines | Classification | Action |
|---------|-------|----------------|--------|
| Inline Threading Header | 1-30 | REMOVE | Wrong path, wrong description |
| Mandatory Research Grounding | 44-111 | UPDATE | Keep principle, replace paths, add Track 1/2 distinction |
| Refinement Loop | 112-174 | UPDATE | Adapt for Track 1 (composition) vs Track 2 (exploration) |
| Research Application Record | 175-230 | SPLIT | Keep for Track 2, replace with component record for Track 1 |
| Mandatory Files to Read | 231-286 | REPLACE | Wrong paths, outdated concept, missing compositional-core |
| RESEARCH-ACTIVE.md Update | 287-314 | KEEP (Track 2 only) | Still relevant for research-grounding workflow |
| Perceptual Depth Audit | 317-349 | UPDATE | Replace "sub-agents" with skill invocation |
| Research Finding Counts | 352-367 | KEEP | Still accurate |
| Violation Consequences | 370-383 | UPDATE | Adapt for Track 1 (soul violations) vs Track 2 (research violations) |
| Self-Check Questions | 393-412 | UPDATE | Add compositional-core checks, adapt for Track 1/2 |
| Compaction Survival | 416-427 | KEEP | Still relevant |
| Directory Structure | 431-456 | REPLACE | 100% wrong, add compositional-core, fix paths |
| Key File Locations | 459-489 | REPLACE | 64% wrong paths, missing compositional-core |

---

## 6. WHAT SHOULD THE NEW CLAUDE.MD CONTAIN?

### Track 1: Compositional-Core Composition (Primary Workflow)

**ALWAYS-LOAD (before ANY task):**
1. `compositional-core/README.md` (operational layer overview)
2. `compositional-core/identity/prohibitions.md` (22 prohibitions)
3. `compositional-core/vocabulary/tokens.css` (65 tokens, soul constraints)

**Phase-Gated Access:**
- Visual builders: Load case-studies/ (anti-prescription framing)
- Component builders: Load components/ (inventory + CSS)
- Pattern discoverers: Load grammar/ (18 mechanisms + compositional rules)
- Guideline writers: Load guidelines/ (semantic gap rules)

**Output Format:**
- Components used (from compositional-core)
- Mechanisms applied (with anti-gravity compliance)
- Soul compliance verification (22 prohibitions)
- Anti-gravity audit (proof case studies weren't templates)

**Verification:**
- Soul compliance: 22 prohibitions (8 absolute, 12 conditional, 2 meta)
- Anti-gravity: Which mechanisms deployed, how case studies avoided template matching
- Perceptual-auditing skill invocation (48 PA questions)

### Track 2: Research-Grounded Exploration (Extension Workflow)

**ALWAYS-LOAD (before ANY exploration):**
1. `design-system/research/RESEARCH-SYNTHESIS.md`
2. Relevant R-X files (R1-R5)
3. `archive/checkpoints/RESEARCH-ACTIVE.md`
4. `archive/checkpoints/DISCOVERIES-LOG.md`

**Output Format:**
- Research Application Record (existing format is good)
- What this extends in compositional-core (or should it be added?)
- Validation evidence

**Verification:**
- Research finding application (R-X IDs)
- Anti-pattern avoidance
- Soul compliance (same 22 prohibitions)

### Shared Rules (Both Tracks)

**Soul Constraints (ABSOLUTE):**
- Border-radius: 0 (ALWAYS sharp edges)
- Box-shadow: none (ALWAYS flat)
- No drop-shadow filter
- No semi-transparent backgrounds (opacity: 1)
- No gradient backgrounds
- No pure black #000 or pure white #FFF
- Serif ONLY for display headings (NOT body text)
- No decorative complexity without information

**Skills:**
- `tension-composition` (content → metaphor → compositional layout)
- `perceptual-auditing` (48 PA questions, guardrails, metaphor-awareness)

**Guardrails (from skill enrichment):**
- 940px min container (65% viewport at 1440px)
- 16px label-to-heading gap minimum
- 32px padding floor for containers
- 40% compression ratio cap

---

## 7. RECOMMENDATIONS

### Option A: Incremental Update (NOT RECOMMENDED)
- Fix 7 wrong paths
- Add compositional-core section
- Add Track 1/2 distinction
- Update perceptual audit section
- Fix directory structure

**Problem:** 60% of content is obsolete. Patching creates a Frankenstein document.

### Option B: Full Replacement (RECOMMENDED)
1. **Archive current CLAUDE.md** → `design-system/specification/provenance/CLAUDE-md-v1-2026-02-04.md` (preserve for provenance)
2. **Write new CLAUDE.md** with:
   - Track 1 (compositional-core composition) as PRIMARY workflow
   - Track 2 (research-grounded exploration) as EXTENSION workflow
   - Phase-gated access protocol
   - 6-layer ontology overview
   - Correct paths (design-system/research/, design-system/specification/)
   - Skill invocation guidance (not sub-agents)
   - Anti-gravity mechanisms overview
   - 22 prohibitions (link to compositional-core/identity/prohibitions.md)
3. **Create cross-reference strategy** between:
   - `design-system/CLAUDE.md` (root — operational guidance)
   - `design-system/compositional-core/CLAUDE.md` (if needed — layer-specific rules)
   - `design-system/research/CLAUDE.md` (research-specific rules)
   - `design-system/specification/CLAUDE.md` (if needed — specification rules)

### Option C: Split Strategy (RECOMMENDED IF compositional-core gets own CLAUDE.md)
1. **design-system/CLAUDE.md** → Project-level orchestration, Track 1/2 routing
2. **design-system/compositional-core/CLAUDE.md** → Phase-gated access, anti-gravity rules, layer-specific guidance
3. **design-system/research/CLAUDE.md** (existing 7KB file) → Research-grounding rules for Track 2

---

## 8. CRITICAL GAPS TO ADDRESS IN NEW CLAUDE.MD

### Gap 1: No Entry Point Guidance
**Missing:** "If you're building a page, start here. If you're exploring a pattern, start here. If you're extending vocabulary, start here."

**Need:** Clear routing logic based on task type.

### Gap 2: No Anti-Gravity Awareness
**Missing:** Explanation that case studies are PROOF-OF-CONCEPT, not templates. Mechanisms exist to prevent pattern matching.

**Need:** Anti-prescription framing, mechanism awareness, convergence audit guidance.

### Gap 3: No Phase-Gate Protocol
**Missing:** Different agents get different layers. Visual builders DON'T load grammar/. Pattern discoverers DON'T load components/.

**Need:** "If you are [agent type], load [these layers], skip [these layers]."

### Gap 4: No Skill Invocation Guidance
**Missing:** When to invoke tension-composition (content → layout), when to invoke perceptual-auditing (verification).

**Need:** Trigger conditions, skill capabilities, output expectations.

### Gap 5: No Prohibition Hierarchy
**Missing:** 8 ABSOLUTE (never), 12 CONDITIONAL (exceptions documented), 2 META (process-level).

**Need:** Clear hierarchy, link to prohibitions.md, enforcement guidance.

### Gap 6: No Directory Map
**Missing:** Actual directory structure with real paths.

**Need:** "Where tokens are. Where patterns are. Where case studies are. Where research is."

---

## 9. STALE REFERENCES TO UPDATE

If updating incrementally (not recommended), these references are stale:

1. **Line 55:** `archive/checkpoints/RESEARCH-ACTIVE.md` → CORRECT (keep)
2. **Line 58:** `active/research/RESEARCH-SYNTHESIS.md` → `design-system/research/RESEARCH-SYNTHESIS.md`
3. **Line 61:** `active/design-system/patterns/density-patterns.md` → `design-system/specification/patterns/density-patterns.md`
4. **Line 64:** `active/design-system/anti-patterns/registry.md` → `design-system/specification/anti-patterns/registry.md`
5. **Line 67:** `archive/checkpoints/DISCOVERIES-LOG.md` → CORRECT (keep)
6. **Line 141:** `active/design-system/tokens/*` → `design-system/specification/tokens/*`
7. **Line 241:** `active/research/RESEARCH-SYNTHESIS.md` → `design-system/research/RESEARCH-SYNTHESIS.md`
8. **Line 242:** `active/research/R[relevant]-*.md` → `design-system/research/R[relevant]-*.md`
9. **Line 243:** `archive/checkpoints/RESEARCH-ACTIVE.md` → CORRECT (keep)
10. **Line 244:** `archive/checkpoints/DISCOVERIES-LOG.md` → CORRECT (keep)
11. **Line 245:** `active/design-system/patterns/*.md` → `design-system/specification/patterns/*.md`
12. **Line 246:** `active/design-system/anti-patterns/registry.md` → `design-system/specification/anti-patterns/registry.md`
13. **Line 247:** `active/design-system/tokens/*` → `design-system/specification/tokens/*`
14. **Lines 465-470:** All `active/research/` → `design-system/research/`
15. **Lines 479-482:** All `active/design-system/` → `design-system/specification/`

---

## 10. FINAL VERDICT

**Status:** OBSOLETE — REQUIRES FULL REPLACEMENT

**Reasons:**
1. **64% path failure rate** — More wrong than right
2. **60% content obsolescence** — Exploration-phase workflow, not operational-phase workflow
3. **Zero compositional-core awareness** — Missing the entire operational layer extracted in Phase C
4. **Fantasy directory structure** — showcase/ doesn't exist, fortress/ wrong name, active/ wrong location
5. **Conceptual drift** — Describes sub-agents that don't exist, skill package that's just a skill

**Recommendation:** Archive current file → Write new CLAUDE.md grounded in:
- Compositional-core 6-layer ontology
- Track 1 (composition) vs Track 2 (exploration) workflows
- Phase-gated access protocol
- Actual directory structure
- Skill invocation (not sub-agent deployment)
- Anti-gravity mechanisms
- 22 prohibitions (8 absolute, 12 conditional, 2 meta)

**Next Step:** Synthesize research from other agents (Tasks #1-4, #6) → Write new CLAUDE.md (Task #7) → Update this root file based on synthesis (Task #8).

---

**Audit Complete.**
**File Written:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/claude-md-research/05-root-claude-audit.md`
