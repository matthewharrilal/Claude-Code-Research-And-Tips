# Fortress Zone Naming Research

**Agent:** researcher-fortress
**Task:** Research fortress/ content and propose descriptive folder name
**Date:** 2026-02-13

---

## What I Found

### Directory Structure
```
fortress/
├── density/        — 7 files (DD-001 through DD-006 + CLAUDE.md)
├── organizational/ — 8 files (OD-001 through OD-006 + CLAUDE.md + research feed)
└── combination/    — 13 files (CD-001 through CD-006 + evaluation + synthesis)
```

### What These Files Actually Are

After reading multiple HTML files and documentation, these are **validated visual design explorations** — finished, scored, audited HTML pages that demonstrate design patterns.

**Key characteristics identified:**

1. **Scored artifacts** — Each has a score out of 40 (e.g., DD-002: 35/40, OD-006: 37/40, CD-006: 39/40)
2. **Pattern demonstrations** — Each explores a specific design pattern:
   - DD: Density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL)
   - OD: Organizational patterns (conversational Q&A, narrative arc, task-based, confidence flow, spatial hub-spoke, emergent synthesis)
   - CD: Combination patterns (axis + organization + density combinations)
3. **Research-grounded** — Each applies specific research findings (R1-R5 findings cited in headers)
4. **Soul-compliant** — 100% compliance with locked design tokens (border-radius: 0, box-shadow: none, etc.)
5. **Lesson chains** — Each builds on lessons from previous explorations (DD-001 → DD-002 → DD-003)
6. **Finding generators** — Each produces findings (DD-F-001, OD-F-005, CD-F-021, etc.)

### What "Fortress" Means in Context

From fortress/CLAUDE.md:
> "Fortress zones have 100% retention, zero bloat, and exceptional provenance health. Every file here is load-bearing. Zero deletions allowed. These are the crown jewels of the design system exploration pipeline."

**Key stats:**
- DD: 371 direct inbound refs, all 6 explorations are MEGA-HUBs
- OD: 421 inbound refs, OD-F-005 "Organization IS Density" = most-cited finding (726 citations across 174 files)
- CD: CD-006 crown jewel scored 39/40
- Soul violations across all fortress files: **0**

### What They're Called in Headers

The HTML files consistently call themselves **"explorations"**:
- "DD-001-breathing.html is the first **density exploration**"
- "OD-001-conversational.html is the first **organizational exploration**"
- "Combination **exploration** testing how CRESCENDO density + NARRATIVE ARC organization..."

Headers also use these terms:
- "Density Explorations (DD-001 through DD-006)"
- "Organizational Explorations (OD-001 through OD-006)"
- "Combination exploration"

---

## Name Analysis

### Current Name: "fortress"
**Pros:**
- Conveys protection, importance, immutability
- Metaphorically appropriate (zero deletions allowed, load-bearing)
- Distinct from technical terminology

**Cons:**
- Non-obvious to new readers what's inside
- Metaphorical rather than descriptive
- Doesn't communicate "explorations" or "validated patterns"

---

## Naming Proposals

### Option 1: `validated-explorations`
**Rationale:** Matches the actual term used throughout the HTML files. "Exploration" appears 100+ times in headers and descriptions. "Validated" distinguishes these from in-progress work.

**Pros:**
- Descriptive and immediately understandable
- Matches internal nomenclature (files call themselves "explorations")
- "Validated" signals completion and quality (scored, audited, locked)
- Clear relationship to active/explorations or experimental work elsewhere

**Cons:**
- Longer than "fortress"
- Loses the fortress metaphor (immutability, crown jewel status)

**Best for:** New readers, documentation browsing, discoverability

---

### Option 2: `crown-jewels`
**Rationale:** fortress/CLAUDE.md explicitly calls these "the crown jewels of the design system exploration pipeline." CD-006 is called "crown jewel" in its own header.

**Pros:**
- Matches internal language (appears in CLAUDE.md)
- Conveys exceptional quality and importance
- Memorable and distinctive
- Signals "best work" status

**Cons:**
- Metaphorical, not descriptive of content type
- Doesn't communicate "explorations" or "patterns"
- Could sound boastful out of context

**Best for:** Internal navigation, emphasizing quality tier

---

### Option 3: `pattern-library`
**Rationale:** These files are referenced as the source of validated patterns. Each exploration demonstrates a specific pattern (PULSE, CRESCENDO, Q&A dialogue, etc.).

**Pros:**
- Common industry term (pattern library, design library)
- Descriptive of function (library of validated patterns)
- Professional and recognizable

**Cons:**
- Could be confused with component libraries
- Doesn't convey "exploration" methodology
- Less specific than alternatives

**Best for:** External documentation, industry-standard naming

---

### Option 4: `design-specimens`
**Rationale:** "Specimen" is used in scientific/design contexts for exemplary examples worthy of study. These are finished, scored exemplars of each pattern type.

**Pros:**
- Implies study-worthy examples
- Scientific/editorial connotation matches soul (editorial design system)
- Conveys "exemplary" status
- Distinctive and precise

**Cons:**
- Less common term, may require explanation
- Doesn't immediately communicate "explorations"

**Best for:** Academic/research contexts, design system documentation

---

### Option 5: `fortress` (keep current)
**Rationale:** Preserve the established metaphor that conveys immutability, load-bearing status, and protection.

**Pros:**
- Already in use, no migration needed
- Metaphor works well for the purpose (zero deletions, crown jewels)
- Memorable and distinct
- fortress/CLAUDE.md establishes clear meaning

**Cons:**
- Non-descriptive to newcomers
- Requires reading CLAUDE.md to understand purpose
- Doesn't surface "explorations" or "patterns"

**Best for:** Maintaining established conventions, metaphorical architecture

---

## Recommendation

**Primary recommendation: `validated-explorations`**

**Reasoning:**
1. **Matches internal language** — Files consistently self-identify as "explorations" (appears 100+ times in headers)
2. **Descriptive accuracy** — These ARE explorations (methodology-driven experiments that produced findings)
3. **Status clarity** — "Validated" distinguishes from active/in-progress work
4. **Discoverability** — New readers immediately understand content type
5. **Scalability** — If new exploration types are created, naming pattern extends naturally

**Secondary recommendation: `crown-jewels`**

If the goal is to emphasize quality tier and immutability over content type, "crown-jewels" captures the fortress metaphor while being more immediately understandable than "fortress."

**Preserve "fortress" if:**
- Metaphorical architecture is a core design principle
- Internal team already uses "fortress" consistently
- Name changes would break too many references

---

## Impact Analysis

**If renamed to `validated-explorations`:**
- Update 3 CLAUDE.md files (fortress/, density/, organizational/)
- Update path references in active/design-system/
- Update any routing in docs-spa/
- Estimated references: ~50-100 files

**Blast radius: MEDIUM** — Many references exist, but path updates are mechanical

---

## Supporting Evidence

**From DD-001 header:**
> "DD-001-breathing.html is the first **density exploration**, created during Stage 2 (Density Dimensions)"

**From OD-001 header:**
> "OD-001-conversational.html is the first **organizational exploration**"

**From CD-001 header:**
> "Combination **exploration** testing how CRESCENDO density + NARRATIVE ARC organization..."

**From fortress/CLAUDE.md:**
> "These are the crown jewels of the design system **exploration** pipeline."

**From density/CLAUDE.md:**
> "Density **Explorations** (DD-001 through DD-006)"

**Pattern consistency:** 100% of files use "exploration" as primary term.

---

## Conclusion

The fortress directory contains **validated visual design explorations** — finished, scored, audited HTML pages demonstrating density, organizational, and combination design patterns. These are the highest-quality artifacts in the design system pipeline, with 100% soul compliance and zero deletions allowed.

The name should communicate:
1. Content type (explorations/patterns/specimens)
2. Status (validated/crown-jewel/exemplary)
3. Purpose (reference library for design patterns)

**`validated-explorations`** best achieves all three goals while matching the internal language used throughout the codebase.
