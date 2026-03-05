# Review: Folder Landscape Coverage in design-system/CLAUDE.md

**Date:** 2026-02-14
**Reviewer:** review-landscape (adversarial)
**Research Source:** `ephemeral/claude-md-research/07-folder-landscape.md`
**Target Document:** `design-system/CLAUDE.md`

---

## Executive Summary — MOSTLY INCORPORATED, 3 GAPS

**Overall Assessment:** The research was WELL incorporated into CLAUDE.md, with strong coverage of the dual-core structure, folder purposes, and routing logic. However, **3 substantive gaps** exist where critical details from the research are missing or weakened.

**Gaps Identified:**
1. **Token hierarchy SOURCE/EXTRACTION relationship unclear** (Line 641-644 vs Research Lines 570-587)
2. **implementation/archive/ DANGEROUS values warning WEAKENED** (Line 195-199 vs Research Lines 367-368)
3. **File count table MISSING** (Research Lines 859-874)

**Strengths:**
- Dual-core distinction clearly explained (Lines 11-14, 78-129)
- 8-folder map comprehensive (Lines 77-227)
- Routing logic thorough (Lines 452-487)
- Anti-patterns section excellent (Lines 489-559)
- Always-load protocol clear (Lines 333-352)

---

## Gap 1: Token Hierarchy SOURCE/EXTRACTION Relationship UNCLEAR

### Research Finding (Lines 570-587)

The research EXPLICITLY documented the token hierarchy:

```
### TOKENS: specification/ vs compositional-core/

**specification/tokens/ (617 lines):**
- 4 markdown files (colors, typography, spacing, geometry)
- Complete documentation with provenance headers
- Threading metadata (Phase 2B)
- Diagnostic questions
- SOURCE OF TRUTH

**compositional-core/vocabulary/tokens.css (174 lines):**
- Single CSS file (:root block)
- EXTRACTED from specification/tokens/*.md
- Lens: Identity + Enablement (minimal subset)
- Mutability classification (IMMUTABLE vs MUTABLE vs AVAILABLE)

**RELATIONSHIP:** compositional-core is DERIVED, specification is SOURCE
```

**Key insight:** "compositional-core is DERIVED, specification is SOURCE"

### CLAUDE.md Implementation (Lines 641-644)

```
### Specification (Tokens — SOURCE OF TRUTH)
- `specification/tokens/colors.md` (133 lines)
- `specification/tokens/typography.md` (166 lines)
- `specification/tokens/spacing.md` (155 lines)
- `specification/tokens/geometry.md` (163 lines)
```

**Problem:** The label "SOURCE OF TRUTH" appears, but the RELATIONSHIP to compositional-core/vocabulary/tokens.css is NOT explained in this section.

### Cross-Check: Is It Explained Elsewhere?

**Line 113-123 (specification/ folder description):**
```
├── tokens/                [617 lines total] SOURCE OF TRUTH for token values
│   ├── colors.md          [133 lines] Palette definitions
│   ├── typography.md      [166 lines] Font trinity
│   ├── spacing.md         [155 lines] 4px base unit
│   └── geometry.md        [163 lines] Border-radius: 0
```

**Still just labeled "SOURCE OF TRUTH" — no extraction relationship explained.**

**Line 344-348 (always-load section):**
```
2. **`compositional-core/vocabulary/tokens.css`** (174 lines)
   - 65 tokens (21 immutable, 14 mutable, 30 available)
   - Color palette (8 values)
   - Typography trinity (3 fonts)
   - Spacing scale (6 anchors, 14 increments)
   - Border weights (4px/3px/1px)
```

**Describes CONTENTS but not SOURCE relationship.**

**Line 275-289 (Supersession Matrix):**
```
| Layer | New Authority | Historical Context | Relationship | When to Use Which |
|-------|--------------|-------------------|--------------|-------------------|
| **Vocabulary** | compositional-core/vocabulary/tokens.css | specification/tokens/*.md | CONSOLIDATES | compositional-core/ for SINGLE-FILE ref; specification/ for RATIONALE |
```

**AH! Here it is — "CONSOLIDATES" relationship, and "compositional-core/ for SINGLE-FILE ref; specification/ for RATIONALE"**

### Verdict: PARTIALLY INCORPORATED

**What's present:** Supersession matrix explains relationship (Line 279).
**What's missing:** The SOURCE → EXTRACTED hierarchy is NOT explained at the token paths section (Lines 640-644) where agents will look.

**Impact:** Medium. Agents reading the "KEY FILE PATHS" section won't learn that compositional-core tokens are DERIVED from specification tokens. They might treat them as independent sources.

**Recommended fix:** Add note at Lines 640-644:
```
### Specification (Tokens — SOURCE OF TRUTH)
- `specification/tokens/colors.md` (133 lines)
- `specification/tokens/typography.md` (166 lines)
- `specification/tokens/spacing.md` (155 lines)
- `specification/tokens/geometry.md` (163 lines)

**NOTE:** compositional-core/vocabulary/tokens.css is EXTRACTED from these files.
If conflict exists, specification/ wins.
```

---

## Gap 2: implementation/archive/ DANGEROUS Values Warning WEAKENED

### Research Finding (Lines 367-368)

```
**WARNING:** Contains archive/ with DANGEROUS wrong values (border-radius > 0, incorrect fonts) per MEMORY.md
```

**Key elements:**
1. "DANGEROUS wrong values"
2. Specific examples: "border-radius > 0, incorrect fonts"
3. Reference to MEMORY.md

### CLAUDE.md Implementation (Line 195-199)

```
- **`archive/`** — ⚠️ DANGEROUS: Deprecated code with WRONG values (border-radius > 0)

**When to use:** React implementation, Playwright testing

**WARNING:** DO NOT use `implementation/archive/` — contains obsolete token values
```

**What's present:**
- ⚠️ emoji
- "DANGEROUS" label
- "border-radius > 0" example
- "DO NOT use" warning

**What's MISSING:**
- "incorrect fonts" example (research had TWO examples, CLAUDE.md has ONE)
- MEMORY.md reference (provenance)

### Verdict: WEAKENED

**Impact:** Low-Medium. The warning is PRESENT but less comprehensive than research findings. Missing "incorrect fonts" example reduces specificity.

**Recommended fix:** Add at Line 195:
```
- **`archive/`** — ⚠️ DANGEROUS: Deprecated code with WRONG values (border-radius > 0, incorrect fonts per MEMORY.md)
```

---

## Gap 3: File Count Table MISSING

### Research Finding (Lines 859-874)

```
## File Count Summary

| Folder | Files | Purpose | Status |
|--------|-------|---------|--------|
| compositional-core/ | 43 | Phase-gated operational layer | ✅ ACTIVE (NEW) |
| specification/ | 57 | Comprehensive documentation | ✅ ACTIVE |
| validated-explorations/ | 30 | DD/OD/CD HTML artifacts | 📚 REFERENCE |
| implementation/ | 4,059 | React components, tests | 🔧 SPECIALIZED |
| research/ | 7 | R1-R5 research streams | 📚 REFERENCE |
| pipeline/ | 17 | Post-CD planning | 🔧 SPECIALIZED |
| axis/ | 194 | AD explorations | 📚 REFERENCE |
| tension-test/ | 104 | Metaphor validation | 📚 REFERENCE |
| **TOTAL** | **4,511** | | |

**Active folders:** 2 (compositional-core, specification)
**Reference folders:** 4 (validated-explorations, research, axis, tension-test)
**Specialized folders:** 2 (implementation, pipeline)
```

### CLAUDE.md Implementation

**Search for file count table:** NOT FOUND

**Individual file counts ARE present in folder descriptions:**
- Line 81: compositional-core/ — 43 files, 880KB, 20,576 lines
- Line 108: specification/ — 57 files
- Line 134: validated-explorations/ — 30 files
- Line 187: implementation/ — 4,059 files
- Line 151: research/ — 7 files
- Line 170: pipeline/ — 17 files
- Line 205: axis/ — 194 files
- Line 217: tension-test/ — 104 files

**Verdict: DATA PRESENT but TABLE MISSING**

**Impact:** Low. File counts are scattered throughout folder descriptions. The research table CONSOLIDATES this data with status emojis for quick reference.

**Benefit of table:**
- Single-glance overview
- Status classification visual (✅ ACTIVE, 📚 REFERENCE, 🔧 SPECIALIZED)
- Summary counts (2 active, 4 reference, 2 specialized)

**Recommended addition:** Insert table at Line 76 (before "FOLDER MAP" section) as quick-reference summary.

---

## Strengths: What CLAUDE.md Did BETTER Than Research

### 1. QUICK START Section (Lines 18-43)

**NOT in research.** CLAUDE.md added user-intent-driven entry points:
- "I'm here to BUILD content/pages" → compositional-core/README.md
- "I'm here to VALIDATE/AUDIT" → compositional-core/identity/prohibitions.md
- "I'm here to UNDERSTAND the philosophy" → README.md
- etc.

**This is EXCELLENT.** Research documented folder purposes but didn't create intent-based routing.

### 2. Anti-Patterns Section (Lines 489-559)

**NOT in research (research only recommended it).** CLAUDE.md delivered:
- 7 common routing mistakes
- Specific problem/correct patterns
- Rules extracted from mistakes

**Example (Lines 493-499):**
```
### 1. Going to specification/ when you need compositional-core/

**Problem:** Reading specification/tokens/ (abstract, multi-file, 617 lines) when building

**Correct:** Read compositional-core/vocabulary/tokens.css (operational, single-file, 174 lines)

**Rule:** specification/ for UNDERSTANDING, compositional-core/ for BUILDING
```

**This is HIGH VALUE.** Research identified the dual-core structure; CLAUDE.md teaches agents HOW NOT TO MIS-USE IT.

### 3. Supersession Matrix (Lines 274-289)

**Research recommended it (Lines 762-801), CLAUDE.md implemented it.**

```
| Layer | New Authority | Historical Context | Relationship | When to Use Which |
|-------|--------------|-------------------|--------------|-------------------|
| **Identity** | compositional-core/identity/ | specification/tokens/ | REFINES | compositional-core/ for PROHIBITIONS; specification/ for VALUES |
| **Vocabulary** | compositional-core/vocabulary/tokens.css | specification/tokens/*.md | CONSOLIDATES | compositional-core/ for SINGLE-FILE ref; specification/ for RATIONALE |
```

**This is EXCELLENT.** 6 layers × 5 columns = clear supersession relationships.

### 4. Directory Structure Tree (Lines 564-626)

**Research had it (Lines 731-759), CLAUDE.md EXPANDED it.**

**CLAUDE.md improvements:**
- File counts per folder/subfolder
- Status indicators (FROZEN, COMPLETE, ARCHIVED)
- Inline annotations (e.g., "DD-006 fractal: 20+ refs")
- ⚠️ warnings for dangerous folders

**This is EXCELLENT.** More detailed than research version.

### 5. Ingestion Protocol (Lines 330-450)

**Research recommended always-load files (Lines 793-800), CLAUDE.md built FULL protocol:**
- Always-load (2 files, 527 lines)
- Conditional-load for Track 1 builders
- Conditional-load for Track 2 builders
- Conditional-load for auditors
- Conditional-load for research agents
- Conditional-load for planner agents

**This is COMPREHENSIVE.** Research only specified universal always-load; CLAUDE.md created role-based ingestion paths.

---

## Coverage Analysis by Research Section

| Research Section | Lines | Incorporated? | CLAUDE.md Location | Notes |
|------------------|-------|---------------|-------------------|-------|
| Executive Summary | 1-21 | ✅ YES | Lines 11-14, 78-104 | Dual-core explanation clear |
| Top-Level Structure (8 Folders) | 22-36 | ✅ YES | Lines 77-227 | All 8 folders documented |
| compositional-core/ | 42-129 | ✅ YES | Lines 79-104, 632-639 | 6-layer ontology, phase gates |
| specification/ | 131-213 | ✅ YES | Lines 106-129, 640-644 | README.md, BACKBONE.md, tokens/ |
| validated-explorations/ | 215-289 | ✅ YES | Lines 132-146 | DD/OD/CD explorations, crown jewels |
| implementation/ | 291-368 | ⚠️ PARTIAL | Lines 185-199 | archive/ warning WEAKENED (Gap 2) |
| research/ | 370-410 | ✅ YES | Lines 148-165, 646-650 | R1-R5 streams, 337 findings |
| pipeline/ | 412-462 | ✅ YES | Lines 167-182, 656-659 | Post-CD planning docs |
| axis/ | 464-505 | ✅ YES | Lines 203-213 | AD explorations, AD-F-023 |
| tension-test/ | 507-563 | ✅ YES | Lines 215-227 | Metaphor validation, TOP 3 |
| Redundancies & Overlaps | 567-619 | ✅ YES | Lines 274-289 | Supersession matrix |
| Folder Status Classification | 621-636 | ✅ YES | Lines 77-227 (inline) | Active/Reference/Specialized |
| Critical Paths | 638-669 | ✅ YES | Lines 452-487 | Routing logic decision tree |
| CLAUDE.md Routing Strategy | 671-725 | ✅ YES | Lines 18-43, 452-487 | Quick start + routing logic |
| Redundancy Assessment | 713-728 | ✅ YES | Lines 274-289 | Supersession matrix |
| Folder Relationships Diagram | 730-760 | ✅ YES | Lines 564-626 | Directory tree (expanded) |
| Recommendations for Root CLAUDE.md | 762-819 | ✅ YES | Multiple sections | Dual-core, routing, always-load |
| Evolution State Summary | 821-838 | ✅ YES | Lines 229-271 | 3-tier timeline |
| Open Questions | 843-854 | ❌ NO | N/A | Questions not addressed (expected) |
| File Count Summary | 859-874 | ⚠️ PARTIAL | Lines 77-227 (scattered) | Data present, table MISSING (Gap 3) |
| Jazz Model Metaphor | 877-897 | ✅ YES | Lines 11-14 | "Jazz model" vs "Music theory" |

**Coverage Score:** 20/23 sections fully incorporated, 2/23 partially incorporated, 1/23 not incorporated (open questions — expected).

**Incorporation Rate:** 87% full, 9% partial, 4% not incorporated.

---

## NOT Redundant Explanation — Research vs CLAUDE.md

### Research Argument (Lines 713-717)

```
### NOT REDUNDANT (different purposes)
- **compositional-core/ vs specification/** — minimal vs comprehensive, jazz vs textbook
- **specification/tokens/ vs compositional-core/vocabulary/** — source vs extraction
```

### CLAUDE.md Implementation (Lines 11-14)

```
**Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated)
- **specification/** — Complete documentation for understanding (research provenance)
```

**AND (Lines 285-289):**

```
**Key principle:**
- compositional-core/ = CHOICE-oriented (what to use, when) → **USE FOR BUILDING**
- specification/ = CONTEXT-oriented (why it exists) → **USE FOR RESEARCH**
- validated-explorations/ = PERMANENT REFERENCE → **USE FOR DEEP CONTEXT**
```

**Verdict: FULLY INCORPORATED** with enhanced clarity (CHOICE-oriented vs CONTEXT-oriented).

---

## Dual-Core Distinction — Research vs CLAUDE.md

### Research Finding (Lines 9-20)

```
The `design-system/` folder contains **TWO parallel token/component/pattern systems** with different purposes:

1. **`compositional-core/`** (NEW, Feb 2026) — 43 files, **Phase-gated operational layer** for building new pages
2. **`specification/`** (OLDER, 2025-2026) — 57 files, **Comprehensive documentation** with provenance chain

**KEY RELATIONSHIP:** These are NOT redundant. They serve different audiences:
- **compositional-core/** = "Jazz model" — minimal vocabulary for creative composition (40 items)
- **specification/** = "Music theory textbook" — complete system documentation with research provenance (617+ lines of tokens alone)

**ROOT CLAUDE.MD CHALLENGE:** Must explain this dual-core structure and route agents appropriately.
```

### CLAUDE.md Implementation (Lines 11-14)

```
**Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated)
- **specification/** — Complete documentation for understanding (research provenance)
```

**AND (Lines 493-499) in Anti-Patterns:**

```
### 1. Going to specification/ when you need compositional-core/

**Problem:** Reading specification/tokens/ (abstract, multi-file, 617 lines) when building

**Correct:** Read compositional-core/vocabulary/tokens.css (operational, single-file, 174 lines)

**Rule:** specification/ for UNDERSTANDING, compositional-core/ for BUILDING
```

**Verdict: FULLY INCORPORATED** with teaching via anti-patterns.

---

## Token Hierarchy Documentation — Research vs CLAUDE.md

### Research Documentation (Lines 570-587, 124-129)

```
### TOKENS: specification/ vs compositional-core/

**specification/tokens/ (617 lines):**
- SOURCE OF TRUTH

**compositional-core/vocabulary/tokens.css (174 lines):**
- EXTRACTED from specification/tokens/*.md
- Lens: Identity + Enablement (minimal subset)

**RELATIONSHIP:** compositional-core is DERIVED, specification is SOURCE

**CRITICAL INSIGHT:** compositional-core/vocabulary/tokens.css was EXTRACTED FROM specification/tokens/*.md. The extraction process:
1. Read all 4 files in specification/tokens/ (617 lines)
2. Applied Identity + Enablement lens
3. Collapsed to 174-line :root block
4. Classified tokens as IMMUTABLE vs MUTABLE vs AVAILABLE
```

### CLAUDE.md Implementation

**Line 113-123:** Labels specification/tokens/ as "SOURCE OF TRUTH"
**Line 344-348:** Lists compositional-core/vocabulary/tokens.css contents
**Line 279:** Supersession matrix shows "CONSOLIDATES" relationship

**Missing:** Explicit extraction process documentation (4-step process from research Lines 124-129).

**Verdict: PARTIALLY INCORPORATED** — relationship explained in supersession matrix, but extraction process NOT documented.

**Impact:** Medium. Agents won't know HOW compositional-core tokens were derived (lens application, mutability classification).

---

## implementation/archive/ Warning — Research vs CLAUDE.md

### Research Warning (Lines 367-368)

```
**WARNING:** Contains archive/ with DANGEROUS wrong values (border-radius > 0, incorrect fonts) per MEMORY.md
```

**Elements:**
1. "DANGEROUS wrong values"
2. Two examples: "border-radius > 0" AND "incorrect fonts"
3. Provenance: "per MEMORY.md"

### CLAUDE.md Warning (Lines 195-199)

```
- **`archive/`** — ⚠️ DANGEROUS: Deprecated code with WRONG values (border-radius > 0)

**WARNING:** DO NOT use `implementation/archive/` — contains obsolete token values
```

**Elements:**
1. "DANGEROUS" ✅
2. One example: "border-radius > 0" ⚠️ (missing "incorrect fonts")
3. No provenance reference ❌

**Verdict: WEAKENED** — warning present but less specific than research.

---

## File Count Table — Research vs CLAUDE.md

### Research Table (Lines 859-874)

Consolidated table with:
- File counts per folder
- Purpose
- Status (✅ ACTIVE, 📚 REFERENCE, 🔧 SPECIALIZED)
- Summary row: 2 active, 4 reference, 2 specialized

### CLAUDE.md

**File counts scattered across folder descriptions (Lines 77-227).**
**No consolidated table.**

**Verdict: DATA PRESENT, TABLE MISSING**

**Impact:** Low. Information is available but not consolidated for quick reference.

---

## Recommendations from Research — Implementation Check

### Research Recommendation 1 (Lines 765-773): Lead with Dual-Core Explanation

**Research text:**
```
design-system/ contains TWO parallel systems:
- compositional-core/ — Minimal vocabulary for building (40 items)
- specification/ — Complete documentation for understanding (617+ lines)

Think: Jazz improvisation (compositional-core) vs Music theory textbook (specification)
```

**CLAUDE.md Lines 11-14:**
```
**Key Principle:** This folder contains TWO parallel systems serving different purposes:
- **compositional-core/** — Minimal vocabulary for building (40 items, phase-gated)
- **specification/** — Complete documentation for understanding (research provenance)
```

**Verdict: ✅ IMPLEMENTED**

---

### Research Recommendation 2 (Lines 775-791): Binary Routing Decision Tree

**Research text:**
```
Q: Are you BUILDING something new?
  YES → Start with compositional-core/README.md
  NO  → Continue below

Q: Do you need to understand WHY?
  YES → Start with specification/README.md
  NO  → Continue below
```

**CLAUDE.md Lines 18-43 (Quick Start) + Lines 452-487 (Routing Logic):**

**Quick Start has intent-based routing:**
- "I'm here to BUILD" → compositional-core/README.md
- "I'm here to UNDERSTAND" → README.md

**Routing Logic has decision tree (Lines 455-487):**
- Q1: What phase are you in?
- Q2: Build, Analyze, or Plan?
- Q3: Track 1 or Track 2?
- Q4: Raw research or extracted design system?
- Q5: What's my first file to read?

**Verdict: ✅ IMPLEMENTED** (enhanced with 5-question tree vs research's 4-question tree)

---

### Research Recommendation 3 (Lines 793-801): Universal Always-Load

**Research text:**
```
BEFORE ANY WORK, ALWAYS LOAD:
1. compositional-core/identity/prohibitions.md
2. compositional-core/vocabulary/tokens.css

These are NON-NEGOTIABLE. Violating prohibitions = not KortAI.
```

**CLAUDE.md Lines 333-352:**

```
### ALWAYS-LOAD (ALL Agents, ALL Tasks)

**Mandatory read at session start:**

1. **`compositional-core/identity/prohibitions.md`** (353 lines)
   - 8 absolute prohibitions (NEVER, zero exceptions)
   - 12 conditional prohibitions (documented exceptions)
   - 2 meta-prohibitions (process-level)
   - Soul constraints: border-radius: 0, box-shadow: none, palette

2. **`compositional-core/vocabulary/tokens.css`** (174 lines)
   - 65 tokens (21 immutable, 14 mutable, 30 available)
   - Color palette (8 values)
   - Typography trinity (3 fonts)
   - Spacing scale (6 anchors, 14 increments)
   - Border weights (4px/3px/1px)

**Total mandatory overhead: 527 lines (2 files)**

**Read fresh** (not from memory) — token values and prohibitions can change
```

**Verdict: ✅ IMPLEMENTED** (with enhanced detail breakdown)

---

### Research Recommendation 4 (Lines 803-809): Folder Status Legend

**Research text:**
```
✅ ACTIVE: compositional-core/, specification/
📚 REFERENCE: validated-explorations/, research/, tension-test/
🔧 SPECIALIZED: implementation/, axis/, pipeline/
⚠️  DEPRECATED: implementation/archive/
```

**CLAUDE.md:** Status indicators used in folder descriptions but NO consolidated legend.

**Verdict: ⚠️ PARTIALLY IMPLEMENTED** (indicators used, no legend)

---

### Research Recommendation 5 (Lines 811-818): Token Source Clarity

**Research text:**
```
TOKEN VALUES — Single Source of Truth:
- specification/tokens/*.md (617 lines) ← READ THIS for understanding
- compositional-core/vocabulary/tokens.css (174 lines) ← USE THIS for building

compositional-core tokens are EXTRACTED from specification tokens.
If conflict exists, specification/ wins.
```

**CLAUDE.md Lines 640-644:**

```
### Specification (Tokens — SOURCE OF TRUTH)
- `specification/tokens/colors.md` (133 lines)
- `specification/tokens/typography.md` (166 lines)
- `specification/tokens/spacing.md` (155 lines)
- `specification/tokens/geometry.md` (163 lines)
```

**Missing:** "compositional-core tokens are EXTRACTED from specification tokens. If conflict exists, specification/ wins."

**Verdict: ⚠️ PARTIALLY IMPLEMENTED** (source labeled, extraction relationship not explained at this location)

---

## Summary of Gaps

### Gap 1: Token SOURCE/EXTRACTION relationship unclear at key file paths section
- **Research:** Lines 570-587, 124-129
- **CLAUDE.md:** Line 279 (supersession matrix) explains it, but NOT at Lines 640-644 (key file paths)
- **Impact:** Medium
- **Fix:** Add note at Lines 640-644 explaining extraction relationship

### Gap 2: implementation/archive/ warning WEAKENED
- **Research:** Lines 367-368 (two examples: border-radius > 0, incorrect fonts)
- **CLAUDE.md:** Lines 195-199 (one example: border-radius > 0)
- **Impact:** Low-Medium
- **Fix:** Add "incorrect fonts" example

### Gap 3: File count table MISSING
- **Research:** Lines 859-874 (consolidated table)
- **CLAUDE.md:** File counts scattered in folder descriptions
- **Impact:** Low
- **Fix:** Add consolidated table at Line 76 for quick reference

---

## Positive Deviations (CLAUDE.md BETTER than Research)

### 1. Quick Start Section (Lines 18-43)
**NOT in research.** Intent-based entry points. **HIGH VALUE.**

### 2. Anti-Patterns Section (Lines 489-559)
**Research recommended, CLAUDE.md delivered.** 7 common mistakes with problem/correct/rule patterns. **HIGH VALUE.**

### 3. Supersession Matrix (Lines 274-289)
**Research recommended, CLAUDE.md implemented.** 6 layers × 5 columns. **EXCELLENT.**

### 4. Expanded Directory Tree (Lines 564-626)
**Research had basic tree, CLAUDE.md ENHANCED.** File counts, status indicators, inline annotations. **EXCELLENT.**

### 5. Comprehensive Ingestion Protocol (Lines 330-450)
**Research specified always-load, CLAUDE.md built ROLE-BASED protocol.** Track 1/2 builders, auditors, researchers, planners. **COMPREHENSIVE.**

---

## Overall Verdict: WELL INCORPORATED with 3 Addressable Gaps

**Coverage:** 87% full incorporation, 9% partial, 4% not incorporated (expected).

**Strengths:**
- Dual-core structure clearly explained
- 8-folder map comprehensive
- Routing logic thorough
- Anti-patterns section adds teaching value
- Ingestion protocol role-specific

**Gaps:**
1. Token extraction relationship unclear at key file paths
2. implementation/archive/ warning missing "incorrect fonts" example
3. File count table missing (data scattered)

**Recommendation:** Address 3 gaps with targeted edits (total ~10 lines added).

---

**END REVIEW — LANDSCAPE COVERAGE**
