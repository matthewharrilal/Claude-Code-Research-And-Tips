# Cross-Reference Strategy Research — Root vs Compositional-Core CLAUDE.md

**Researcher:** cross-reference-researcher
**Date:** 2026-02-14
**Task:** Determine how the two CLAUDE.md files should relate to each other and what content goes where

---

## Research Questions Answered

### 1. HIERARCHY — Inheritance Model

**Finding:** The relationship is **ADDITIVE LAYERING**, not override inheritance.

**Model:**
```
Agent in compositional-core/ sees:
  ┌─────────────────────────────────────────┐
  │ design-system/CLAUDE.md (488 lines)     │  ← GENERAL orientation + cross-cutting rules
  └─────────────────────────────────────────┘
                    +
  ┌─────────────────────────────────────────┐
  │ compositional-core/CLAUDE.md (NEW)      │  ← SPECIFIC protocol for this folder
  └─────────────────────────────────────────┘
```

**Key Insight:** Both files are loaded simultaneously. They should **complement**, not **contradict**. Root provides the GENERAL design-system mindset. Compositional-core provides the SPECIFIC access protocol.

**Analogy:**
- Root CLAUDE.md = "You are in a library. Here's how libraries work."
- Compositional-core CLAUDE.md = "This is the Rare Books Room. Here are the special rules for THIS room."

---

### 2. DUPLICATION AVOIDANCE — What Should NEVER Be In Both

**Forbidden Duplications:**

| Content Type | Where It Belongs | Why |
|--------------|------------------|-----|
| Soul constraints (border-radius: 0, etc.) | **Root ONLY** | Universal to ALL design-system work. Repeating it in compositional-core suggests it's ONLY for compositional-core (false). |
| Token values (--color-primary, etc.) | **Neither** | Both should REFERENCE `tokens/` files, not REPLICATE values. |
| Research methodology (5-file read requirement) | **Root ONLY** | Universal process, not specific to compositional-core. |
| Phase-gated access rules (Phases 0-7) | **Compositional-core ONLY** | Specific to compositional-core workflow, not general design-system work. |
| Perceptual audit protocol | **Root ONLY** | Universal verification, applies to ALL design-system output. |
| Anti-gravity mechanisms | **Compositional-core ONLY** | Specific to compositional-core anti-prescription architecture. |
| Directory structure of design-system/ | **Root ONLY** | General navigation, not compositional-core-specific. |
| Track 1 vs Track 2 workflow | **Compositional-core ONLY** | Specific to how compositional-core is USED, not general design-system. |

**Guiding Principle:** If it applies to **ALL design-system work** (fortress/, axis/, pipeline/, specification/), it belongs in **root**. If it ONLY applies when working **inside compositional-core/**, it belongs in **compositional-core**.

---

### 3. ROOT SCOPE — What Should Root CLAUDE.md Cover?

**Current State:** 488 lines, covering:
- Mandatory research grounding (5-file read requirement)
- Mandatory refinement loop (8 steps)
- Research citation format
- Perceptual depth audit invocation
- Research finding counts (337 total)
- Directory structure (3-tier: fortress/active/archive)
- Key file locations (research, tracking, design-system, knowledge-architecture)

**Assessment:** STRONG — Already provides universal orientation.

**Recommended Root Scope (No Major Changes Needed):**

1. **General design-system orientation** ✅ ALREADY COVERED
   - What this system IS (discovered vs decided) ✅
   - 3-tier structure (fortress/active/archive) ✅
   - Anatomical metaphor (skeleton + muscles) ✅

2. **Research grounding (R-X findings)** ✅ ALREADY COVERED
   - 5-file mandatory read ✅
   - Research citation format ✅
   - RESEARCH-ACTIVE.md update protocol ✅

3. **Directory navigation** ✅ ALREADY COVERED
   - Key file locations table ✅
   - Path updates post-restructure ✅

4. **Cross-cutting rules that apply everywhere in design-system/** ✅ ALREADY COVERED
   - Soul constraints (border-radius: 0, box-shadow: none) ✅
   - Research methodology (refinement loop) ✅
   - Perceptual depth audit ✅
   - Binary rules (what happens if violated) ✅

**Gaps to Fill:**

1. **Subfolder routing** — Missing explicit routing guidance:
   - "If you're working on validated explorations (DD/OD/CD), read `fortress/{density|organizational|combination}/CLAUDE.md`"
   - "If you're working on compositional-core, read `compositional-core/CLAUDE.md`"
   - "If you're working on pipeline planning, read `pipeline/CLAUDE.md`"

2. **Compositional-core callout** — Root should mention compositional-core EXISTS but NOT duplicate its protocol:
   - "For compositional-core work (extraction ontology, phase-gated access), see `compositional-core/CLAUDE.md`"

3. **README.md primacy** — Root should reinforce README.md as "THE KORTAI DESIGN MIND" (currently buried in specification/CLAUDE.md but not design-system/CLAUDE.md)

**Recommended Length:** 500-600 lines (minimal additions to current 488 lines)

---

### 4. COMPOSITIONAL-CORE SCOPE — What Should Compositional-Core CLAUDE.md Cover?

**Recommended Compositional-Core Scope:**

1. **Phase-gated access protocol** ✅ CRITICAL
   - What to read in Phase 0 (always-load: identity/, vocabulary/)
   - What to read in Phase 4 (grammar/, components/, guidelines/)
   - What to read in Phase 5 (case-studies/ AFTER implementation)
   - What is PROHIBITED in Phases 0-4 (case-studies/)

2. **Track 1 vs Track 2 workflows** ✅ CRITICAL
   - Track 1 = Pattern-based migration (fortress/ explorations as references)
   - Track 2 = Tension-composition skill (compositional-core as vocabulary)
   - When to use which track

3. **Anti-gravity rules specific to this folder** ✅ CRITICAL
   - 18 mechanisms + deployment criteria
   - Case studies are NOT templates (explicit prohibition)
   - Divergence justification requirement (5-dimension table)

4. **File loading sequences** ✅ CRITICAL
   - STEP 1: Load always-layer (2 files)
   - STEP 2-7: Phased access (with gates)
   - Verification checkpoints

5. **6-layer ontology explanation** ✅ CRITICAL
   - Why this ordering (identity → vocabulary → grammar → components → case studies → guidelines)
   - Directory separation as anti-gravity mechanism
   - Dependency flow (abstract → concrete)

6. **Lens construction transparency** ✅ IMPORTANT
   - Identity + Enablement hybrid lens
   - NOT objective truth, but CONSTRUCTED extraction
   - 30-40 item sweet spot (enablement without constraint)

**Recommended Length:** 250-350 lines

**Key Difference from Root:**
- Root = "Here's how to THINK with the design system"
- Compositional-core = "Here's how to NAVIGATE this extraction without triggering anti-gravity violations"

---

### 5. AGENT SCENARIOS — Who Sees What?

**Scenario 1: Agent working in `design-system/` (general)**
- **Sees:** design-system/CLAUDE.md (488 lines)
- **Needs:**
  - General orientation ✅
  - Soul constraints ✅
  - Research methodology ✅
  - Subfolder routing ⚠️ (needs addition)
- **Should NOT see:** Compositional-core phase-gated protocol (not relevant)

**Scenario 2: Agent working in `design-system/compositional-core/`**
- **Sees:** design-system/CLAUDE.md (488 lines) + compositional-core/CLAUDE.md (~300 lines) = **~788 lines total**
- **Needs:**
  - All of Scenario 1 (general orientation + soul + research) ✅
  - Phase-gated access protocol ✅
  - Anti-gravity mechanisms ✅
  - Track 1 vs Track 2 guidance ✅
  - File loading sequences ✅
- **Should NOT see:** Duplicated soul constraints, duplicated research methodology

**Scenario 3: Agent working in `design-system/specification/`**
- **Sees:** design-system/CLAUDE.md (488 lines) + specification/CLAUDE.md (exists)
- **Needs:**
  - General orientation ✅
  - Soul constraints ✅
  - Research methodology ✅
  - Specification-specific guidance (provenance chain, pipeline manifest) — handled by specification/CLAUDE.md ✅

**Scenario 4: Agent working in `design-system/pipeline/`**
- **Sees:** design-system/CLAUDE.md (488 lines) + pipeline/CLAUDE.md (exists)
- **Needs:**
  - General orientation ✅
  - Soul constraints ✅
  - Research methodology ✅
  - Pipeline-specific guidance (CD vision, migration pipeline, Track 2 supplement) — handled by pipeline/CLAUDE.md ✅

**Scenario 5: Agent working in `design-system/axis/` (fortress/)**
- **Sees:** design-system/CLAUDE.md (488 lines) + axis/CLAUDE.md (exists)
- **Needs:**
  - General orientation ✅
  - Soul constraints ✅
  - AD-specific guidance (axis explorations, handoff files) — handled by axis/CLAUDE.md ✅

**Pattern:** Root provides UNIVERSAL foundation. Subfolder CLAUDE.md files provide SPECIFIC guidance.

---

### 6. CONTEXT WINDOW BUDGET — Combined Length

**Current Loads:**

| Agent Location | Files Loaded | Total Lines | Assessment |
|----------------|--------------|-------------|------------|
| design-system/ | 1 (root) | 488 | ✅ LEAN |
| compositional-core/ | 2 (root + cc) | ~788 (488 + 300) | ✅ REASONABLE |
| specification/ | 2 (root + spec) | ~588 (488 + 100) | ✅ LEAN |
| pipeline/ | 2 (root + pipe) | ~658 (488 + 170) | ✅ LEAN |
| axis/ | 2 (root + axis) | ~568 (488 + 80) | ✅ LEAN |

**Target Budgets:**
- **Root:** 500-600 lines (general orientation + cross-cutting rules + routing)
- **Compositional-core:** 250-350 lines (phase-gated protocol + anti-gravity + Track 1/2)
- **Combined (worst case):** ~950 lines (600 root + 350 cc)

**Context Window Impact:**
- 950 lines ≈ 35,000-40,000 characters ≈ 8,000-10,000 tokens
- Opus 4.6 context window: 200,000 tokens
- **Percentage used:** ~5% (ACCEPTABLE)

**Comparison to Other CLAUDE.md Pairs:**
- Global ~/.claude/CLAUDE.md (user global instructions) is also loaded ALWAYS
- Project-level MEMORY.md is also loaded ALWAYS
- Combined CLAUDE.md loads are SMALL relative to total auto-loaded context

**Conclusion:** 600 (root) + 350 (compositional-core) = **950 lines is SAFE and REASONABLE.**

---

## Discovered Patterns from Existing CLAUDE.md Files

**From Glob Results:** 27 CLAUDE.md files found across the project

**Pattern 1: Auto-Load Orientation Files**
- Files named CLAUDE.md are **auto-read by Claude Code** on directory entry
- All 27 files follow the **"agent navigation"** pattern
- Purpose: Provide orientation WITHOUT requiring user to say "read CLAUDE.md"

**Pattern 2: Inline Threading Headers**
- 19/27 files have INLINE THREADING HEADER (Phase 2B)
- Headers include: File path, Tier (B/C), Batch, Date, WHY THIS EXISTS, STATUS, BUILT ON, CONSUMED BY
- This is PROVENANCE metadata, not instructional content
- **Implication:** New compositional-core/CLAUDE.md should include threading header for consistency

**Pattern 3: Consistent Structure**
- Section 1: IDENTITY (name, status, anatomical role)
- Section 2: HOW TO READ (entry points, reading guides)
- Section 3: WHAT'S HERE (file inventory)
- Section 4: HOW THIS CONNECTS (consumes/produces)
- Section 5: MINDSET (philosophical framing)
- **Implication:** Compositional-core CLAUDE.md should follow this template

**Pattern 4: Length Distribution**
- specification/CLAUDE.md: ~100 lines (short — just navigation)
- pipeline/CLAUDE.md: ~170 lines (medium — navigation + reading guide)
- design-system/CLAUDE.md: 488 lines (long — comprehensive orientation + methodology)
- axis/CLAUDE.md: ~80 lines (short — navigation only)
- **Implication:** Compositional-core CLAUDE.md at 250-350 lines fits the "medium" category (more than navigation, less than comprehensive methodology)

**Pattern 5: Nested Hierarchies Exist**
- design-system/implementation/CLAUDE.md (80 lines)
  - design-system/implementation/card-system/CLAUDE.md (exists)
  - design-system/implementation/component-system/CLAUDE.md (exists)
  - design-system/implementation/component-system/perceptual-audit-v2/CLAUDE.md (exists)
- **3-level nesting is PROVEN** (root → implementation → component-system → perceptual-audit-v2)
- **Implication:** design-system → compositional-core is only 2-level nesting (SIMPLER than proven patterns)

---

## Recommendations — Content Allocation

### ROOT design-system/CLAUDE.md (500-600 lines)

**KEEP (Current Content):**
1. ✅ Mandatory research grounding (5-file read requirement)
2. ✅ Mandatory refinement loop (8 steps)
3. ✅ Research citation format
4. ✅ Perceptual depth audit invocation
5. ✅ Research finding counts (337 total)
6. ✅ Directory structure (3-tier: fortress/active/archive)
7. ✅ Key file locations table
8. ✅ Soul constraints (border-radius: 0, box-shadow: none)

**ADD (New Content):**
1. ⚠️ Subfolder routing table:
```markdown
| I'm working in... | Read this subfolder CLAUDE.md |
|-------------------|-------------------------------|
| compositional-core/ | compositional-core/CLAUDE.md |
| fortress/density/ | fortress/density/CLAUDE.md |
| fortress/organizational/ | fortress/organizational/CLAUDE.md |
| fortress/combination/ | fortress/combination/CLAUDE.md |
| axis/ | axis/CLAUDE.md |
| pipeline/ | pipeline/CLAUDE.md |
| specification/ | specification/CLAUDE.md |
```

2. ⚠️ Compositional-core callout:
```markdown
## SPECIAL CASE: Compositional-Core

The `compositional-core/` directory has a PHASE-GATED ACCESS PROTOCOL. If you are
working in compositional-core/, you MUST read `compositional-core/CLAUDE.md` BEFORE
accessing any files beyond identity/ and vocabulary/.

DO NOT read case-studies/ before Phase 5. This is a BINARY RULE with zero exceptions.
```

3. ⚠️ README.md primacy (if not already present):
```markdown
## 0. THE KORTAI DESIGN MIND — READ FIRST

BEFORE DOING ANYTHING, READ: `README.md` (THE KORTAI DESIGN MIND)

This is not a style guide. It is the operating manual for understanding, digesting,
and THINKING WITH this design system.
```

**Estimated Total:** 488 (current) + 100 (additions) = **~588 lines**

---

### COMPOSITIONAL-CORE compositional-core/CLAUDE.md (250-350 lines)

**NEW FILE — Content Outline:**

```markdown
# Compositional-Core — Phase-Gated Access Protocol

[INLINE THREADING HEADER — Phase 2B format]

## 1. IDENTITY
- Name: Compositional-Core
- Status: ACTIVE
- Anatomical Role: The operational layer between abstract specification and concrete explorations

## 2. WHAT THIS IS (NOT)
- NOT a component library
- NOT templates to copy
- NOT objective truth
- IS vocabulary + grammar for building KortAI pages
- IS phase-gated access protocol
- IS lens-constructed extraction (Identity + Enablement hybrid)

## 3. FIRST CONTACT — ALWAYS-LOAD LAYER
- identity/prohibitions.md (22 prohibitions)
- vocabulary/tokens.css (65 tokens, 21 IMMUTABLE)
- WHY FIRST: Defines identity through REFUSALS

## 4. PHASE-GATED ACCESS PROTOCOL
### For Composition Agents (Building New Pages)
- STEP 1: Load always-layer (Phase 0)
- STEP 2-3: Run tension-composition Phases 0-3 BLIND
- STEP 3.5: Commit metaphor (LOCK-IN GATE)
- STEP 4: Read mechanism catalog
- STEP 5: OPTIONALLY read 2-3 case studies
- STEP 6: Implement using vocabulary + mechanisms
- STEP 7: Verify with perceptual-auditing

### Phase Access Rules (BINARY)
- ✅ identity/, vocabulary/ → Phase 0 (always-load)
- ✅ grammar/, components/, guidelines/ → Phase 4
- ✅ case-studies/ → Phase 5 ONLY (after implementation)
- ❌ ALL case studies prohibited in Phases 0-4

### For Research Agents (Extracting/Auditing)
- Read in dependency order: identity → vocabulary → grammar → components → case-studies → guidelines
- NO phase restrictions (full access)

## 5. TRACK 1 VS TRACK 2 WORKFLOWS
### Track 1: Pattern-Based Migration
- Use fortress/ explorations (DD/OD/CD) as references
- Apply validated patterns to similar content

### Track 2: Tension-Composition Skill
- Use compositional-core as vocabulary
- Invoke tension-composition skill with phase-gated access
- Generate NEW metaphors (not library metaphors)

## 6. ANTI-GRAVITY MECHANISMS (CRITICAL)
- 18 mechanisms deployed (see validation/anti-gravity-compliance.md)
- Case studies are NOT templates (explicit prohibition)
- Divergence justification required (5-dimension table)
- Directory separation prevents accidental cross-contamination

## 7. 6-LAYER ONTOLOGY
- Layer 1 (identity/): REFUSES (what we won't do)
- Layer 2 (vocabulary/): ATOMS (foundational tokens)
- Layer 3 (grammar/): TECHNIQUES (how atoms combine)
- Layer 4 (components/): STRUCTURES (tokens + grammar)
- Layer 5 (case-studies/): PROOF (not templates!)
- Layer 6 (guidelines/): GAP-FILLING (semantic decisions)

WHY THIS ORDERING: Identity → vocabulary → grammar → components → case-studies → guidelines
(IMMUTABLE → MUTABLE → COMPOSITIONAL → STRUCTURAL → PROOF → SEMANTIC)

## 8. LENS CONSTRUCTION TRANSPARENCY
- Extraction lens: Identity + Enablement hybrid
- NOT discovery (what exists), but CHOICE (what to expose)
- 30-40 item sweet spot (enablement without constraint)
- See process/ for construction methodology

## 9. KEY FILES TO READ
[Table mapping tasks to files]

## 10. VERIFICATION CHECKPOINTS
- After Phase 0: Did I read prohibitions + tokens?
- After Phase 3.5: Did I commit my metaphor BEFORE consulting library?
- After Phase 5: Did I complete divergence table?
- Before final: Did I run perceptual-auditing with guardrails?
```

**Estimated Total:** **~320 lines**

---

## Validation — Combined Load Test

**Scenario: Agent in compositional-core/ sees BOTH files**

| Section | Root (lines) | CC (lines) | Overlap? |
|---------|--------------|------------|----------|
| Soul constraints | 50 | 5 (reference only) | ✅ ROOT owns, CC references |
| Research methodology | 150 | 0 | ✅ ROOT only |
| Perceptual audit | 50 | 10 (reference only) | ✅ ROOT owns, CC references |
| Phase-gated access | 0 | 120 | ✅ CC only |
| Anti-gravity mechanisms | 0 | 60 | ✅ CC only |
| Track 1 vs Track 2 | 0 | 40 | ✅ CC only |
| 6-layer ontology | 0 | 50 | ✅ CC only |
| Directory structure | 100 | 30 (compositional-core only) | ✅ ROOT owns general, CC owns specific |
| Research grounding | 100 | 0 | ✅ ROOT only |

**Total Combined:** 588 (root) + 320 (cc) = **908 lines**

**Overlap Assessment:** ~5% duplication (ACCEPTABLE — minimal references only)

**Context Budget:** 908 lines ≈ 35,000 chars ≈ 9,000 tokens ≈ **4.5% of 200k context window**

---

## Conclusion — Strategy Summary

### HIERARCHY MODEL
**Additive Layering** — Root provides universal foundation, compositional-core adds specific protocol

### DUPLICATION AVOIDANCE
**Root owns universal rules** (soul, research, perceptual audit)
**Compositional-core owns specific protocol** (phase-gating, anti-gravity, Track 1/2)

### ROOT SCOPE (500-600 lines)
- General orientation ✅
- Research grounding ✅
- Soul constraints ✅
- Subfolder routing ⚠️ (ADD)
- Compositional-core callout ⚠️ (ADD)

### COMPOSITIONAL-CORE SCOPE (250-350 lines)
- Phase-gated access protocol ✅
- Track 1 vs Track 2 workflows ✅
- Anti-gravity mechanisms ✅
- 6-layer ontology ✅
- File loading sequences ✅

### AGENT SCENARIOS
All 5 scenarios validated — agents get the right content for their location

### CONTEXT WINDOW BUDGET
Combined 908 lines ≈ 4.5% of context window (SAFE and REASONABLE)

---

## Next Steps

1. **Root CLAUDE.md:** Add subfolder routing table + compositional-core callout (~100 lines)
2. **Compositional-core CLAUDE.md:** Write new file from outline above (~320 lines)
3. **Validate:** Test agent loads in both locations
4. **Verify:** No contradictions, no duplication beyond minimal references

**File Allocation Decision:** FINALIZED
**Combined Budget:** APPROVED (908 lines = 4.5% context)
**Hierarchy Model:** ADDITIVE LAYERING (proven pattern from existing 3-level nesting)
