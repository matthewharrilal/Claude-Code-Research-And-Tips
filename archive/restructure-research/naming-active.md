# Naming Research: Active Directory

**Researcher:** researcher-active
**Task:** #2
**Date:** 2026-02-13

---

## Executive Summary

The `active/` directory contains **forward-work infrastructure**: the pipeline planning for future phases, the design system authority (tokens + patterns + provenance), research findings that feed all stages, and AD explorations pending re-audit.

**Two naming questions:**
1. **Group folder name** (currently "active"): What describes the collection of design-system + pipeline + research + axis?
2. **Inner folder name** (currently "design-system" inside "active/"): What describes tokens + patterns + provenance when the parent is ALSO called "design-system"?

---

## Question 1: Group Folder Name

**Current:** `active/` (283 files)
**Contents:** design-system (58), pipeline (17), research (7), axis (194)
**Character:** Forward-work infrastructure — strategic planning, design authority, research foundation

### Naming Proposals

#### Option 1: `foundation/`
**Rationale:** This directory contains the FOUNDATIONAL INFRASTRUCTURE that everything else builds on:
- Design system = design foundation (tokens, patterns, soul)
- Pipeline = execution foundation (strategic plans for CD → migration)
- Research = knowledge foundation (337 findings across R1-R5)
- Axis = validation foundation (AD explorations, pending re-audit)

**Strengths:** Clear functional role, implies stability and load-bearing
**Weaknesses:** Could imply "finished" when axis/ needs re-audit

---

#### Option 2: `infrastructure/`
**Rationale:** These are the INFRASTRUCTURE SYSTEMS for the forward pipeline:
- Design system = visual infrastructure
- Pipeline = execution infrastructure
- Research = knowledge infrastructure
- Axis = pattern infrastructure (once re-audited)

**Strengths:** Captures the "systems that enable other work" nature
**Weaknesses:** Slightly technical/jargon-heavy, less accessible

---

#### Option 3: `design-system/` (promote inner folder to group level)
**Rationale:** The design system IS the crown jewel here. Everything serves it:
- Tokens/patterns = the system itself
- Pipeline = how to USE the system (migration)
- Research = what BUILT the system (R1-R5)
- Axis = what's VALIDATING the system (AD stage)

**Strengths:** Semantically accurate, design-system is the actual identity
**Weaknesses:** Creates collision with inner design-system/ folder (see Question 2)

---

#### Option 4: `system/`
**Rationale:** Short, clean umbrella for "the complete system":
- Design system components
- Pipeline system for execution
- Research system backing everything
- Axis validation system

**Strengths:** Clean, simple, captures completeness
**Weaknesses:** Generic, doesn't convey "forward-facing" nature

---

#### Option 5: `pipeline/` (elevate pipeline to group)
**Rationale:** The pipeline IS the organizing principle:
- POST-CD-PIPELINE planning (17 strategic docs)
- Design system = the tools the pipeline uses
- Research = what informs the pipeline
- Axis = validation stage in the pipeline

**Strengths:** Matches user's mental model (pipeline is the journey)
**Weaknesses:** Overloads "pipeline" (already used for inner directory)

---

### Recommendation for Group Name: `design-system/`

**Why:** This IS the design system directory. The tokens, patterns, provenance, research, and explorations are ALL parts of the design system. The pipeline describes HOW to use it. Promoting "design-system" to the group level accurately reflects that this is the complete design system package.

**Collision resolution:** See Question 2 for renaming the inner folder.

---

## Question 2: Inner Folder Name

**Current:** `active/design-system/` (58 files)
**Contents:** tokens/ (4), patterns/ (4), anti-patterns/ (1), components/ (1), guides/ (2), provenance/ (37)
**Character:** The FORMALIZED SPECIFICATION — tokens, patterns, provenance chain

**Constraint:** Parent will be called `design-system/`, so inner folder needs different name.

### Naming Proposals

#### Option 1: `specification/`
**Rationale:** This is the FORMAL SPEC of the design system:
- Tokens = value specifications
- Patterns = rhythm specifications
- Anti-patterns = constraint specifications
- Components = component specifications
- Provenance = justification specifications

**Strengths:** Accurate — these ARE specifications, not implementations
**Weaknesses:** Slightly formal/documentation-heavy connotation

---

#### Option 2: `core/`
**Rationale:** This is the CORE of the design system:
- Tokens = core values
- Patterns = core rhythms
- Provenance = core reasoning chain

**Strengths:** Short, clear, implies "essential"
**Weaknesses:** "Core" used in knowledge-architecture/core/ (creates collision)

---

#### Option 3: `library/`
**Rationale:** This is the REFERENCE LIBRARY:
- Token library (geometry, color, typography, spacing)
- Pattern library (density, organizational, axis, combination)
- Provenance library (research chain)

**Strengths:** Implies reusable, reference, catalog
**Weaknesses:** Could suggest "component library" when components are elsewhere

---

#### Option 4: `framework/`
**Rationale:** This is the FRAMEWORK that guides all design work:
- Token framework (locked values)
- Pattern framework (validated rhythms)
- Provenance framework (research lineage)

**Strengths:** Captures "structure that enables" nature
**Weaknesses:** "Framework" often implies code, not design

---

#### Option 5: `authority/`
**Rationale:** This is the AUTHORITATIVE SOURCE for all design decisions:
- README.md describes it as "The authority — the skeleton (tokens) and muscles (patterns)"
- CLAUDE.md says "The design system wins" in conflicts
- Contains the "locked values" and "validated patterns"

**Strengths:** Matches existing documentation language ("the authority")
**Weaknesses:** Slightly abstract, less immediately clear

---

#### Option 6: `standards/`
**Rationale:** These are the STANDARDS the system enforces:
- Token standards (border-radius: 0, box-shadow: none)
- Pattern standards (PULSE, CRESCENDO, etc.)
- Anti-pattern standards (what to avoid)

**Strengths:** Clear, implies enforced compliance
**Weaknesses:** Slightly bureaucratic connotation

---

### Recommendation for Inner Folder: `specification/`

**Why:** This directory contains the FORMAL SPECIFICATIONS of the design system. It's not the explorations (those are in fortress/), not the implementations (those are in components/), but the SPECS: exact token values, pattern definitions with CSS, provenance justifications, anti-pattern catalogs.

**Matches existing language:** The tokens files say "canonical token registry", patterns say "validated patterns", provenance is called "the formal chain". These are specifications.

**Alternative if "specification" feels too heavy:** `library/` — captures the reference/catalog nature without bureaucratic weight.

---

## Final Recommended Structure

```
design-system/              ← Group folder (promotes design-system to top level)
├── specification/          ← Inner folder (tokens, patterns, provenance)
│   ├── tokens/
│   ├── patterns/
│   ├── anti-patterns/
│   ├── components/
│   ├── guides/
│   └── provenance/
├── pipeline/               ← Forward execution plans (POST-CD strategic docs)
├── research/               ← R1-R5 findings + synthesis
└── axis/                   ← AD explorations (pending re-audit)
```

**Rationale:**
- `design-system/` = accurate group identity (this IS the complete system)
- `specification/` = distinguishes formalized specs from explorations/implementations
- `pipeline/` = clear forward-work planning
- `research/` = knowledge foundation
- `axis/` = validation stage (pending re-audit)

---

## Alternative Structure (If "design-system" Too Broad)

```
foundation/                 ← Group folder (infrastructure for forward work)
├── design-system/          ← Keep current inner name (no collision)
├── pipeline/
├── research/
└── axis/
```

**Rationale:** If promoting "design-system" to group level feels too broad, `foundation/` works as the umbrella — everything here is foundational infrastructure for forward phases.

---

## Name Comparison Table

### Group Folder Options

| Name | Accuracy | Clarity | Matches Content | Notes |
|------|----------|---------|-----------------|-------|
| `design-system/` | ★★★★★ | ★★★★ | ★★★★★ | **RECOMMENDED** — promotes crown jewel to group |
| `foundation/` | ★★★★ | ★★★★★ | ★★★★ | Strong alternative — clear functional role |
| `infrastructure/` | ★★★★ | ★★★ | ★★★★ | Accurate but technical |
| `system/` | ★★★ | ★★★ | ★★★ | Too generic |
| `pipeline/` | ★★★ | ★★★★ | ★★★ | Overloads existing term |

### Inner Folder Options

| Name | Accuracy | Clarity | Avoids Collision | Notes |
|------|----------|---------|------------------|-------|
| `specification/` | ★★★★★ | ★★★★ | ★★★★★ | **RECOMMENDED** — formal specs |
| `library/` | ★★★★ | ★★★★★ | ★★★★★ | Strong alternative — reference catalog |
| `authority/` | ★★★★ | ★★★ | ★★★★★ | Matches existing docs |
| `core/` | ★★★★ | ★★★★★ | ★★ | Collision with KA core/ |
| `standards/` | ★★★★ | ★★★★ | ★★★★★ | Slightly bureaucratic |
| `framework/` | ★★★ | ★★★ | ★★★★★ | Code connotation |

---

## Verification Against Content

### Group Name: `design-system/`
✅ Contains tokens (locked design values)
✅ Contains patterns (validated rhythms)
✅ Contains provenance (research chain)
✅ Contains pipeline (how to USE the system)
✅ Contains research (what BUILT the system)
✅ Contains axis (what's VALIDATING the system)

**Verdict:** Accurate. This IS the complete design system.

### Inner Name: `specification/`
✅ Tokens = value specifications
✅ Patterns = rhythm specifications with CSS
✅ Anti-patterns = constraint specifications
✅ Components = component specifications
✅ Guides = usage specifications
✅ Provenance = justification specifications

**Verdict:** Accurate. These ARE formal specifications.

---

## Cross-Reference to Memory

From MEMORY.md "Updated Path Map":
- **Tokens:** `active/design-system/tokens/` → `design-system/specification/tokens/`
- **Patterns:** `active/design-system/patterns/` → `design-system/specification/patterns/`
- **Research:** `active/research/` → `design-system/research/`
- **Pipeline:** `active/pipeline/` → `design-system/pipeline/`

**Impact:** Path updates required in ~20+ files that reference these locations.

---

## Conclusion

**Primary Recommendation:**
- Group: `design-system/` (promotes crown jewel)
- Inner: `specification/` (distinguishes specs from explorations)

**Fallback Recommendation:**
- Group: `foundation/` (if design-system feels too broad)
- Inner: `library/` (if specification feels too formal)

Both structures are semantically accurate and resolve the naming collision.
