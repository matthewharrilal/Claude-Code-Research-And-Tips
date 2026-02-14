# Design-Library Naming Research

**Researcher:** researcher-library
**Date:** 2026-02-13
**Directory Analyzed:** design-extraction/ (418 files total)

---

## Executive Summary

The `design-extraction/` directory is a **complete design system implementation library** with production-ready components, locked soul specifications, automated tests, and T1 synthesis authority. It contains:

1. **component-system/** (270 files) — Production components + T1 synthesis crown jewels
2. **card-system/** (63 files) — Historical card-focused exploration (SUPERSEDED)
3. **typography-system/** (12 files) — Typography implementation (minimal, early phase)
4. **font-research/** (21 files) — Didone font comparison research
5. **archive/** (52 files) — Early design variations

**Key Finding:** This is NOT experimental research — it's a production-ready component library with locked specifications, automated Playwright tests, CSS implementations, HTML demos, and synthesis documentation. The T1 synthesis files in `perceptual-audit-v2/synthesis/` are the most-referenced files in the entire codebase.

**Recommended Name:** `implementation/` or `components/` (NOT "library" — see rationale below)

---

## 1. Content Analysis

### 1.1 Component-System Structure (270 files)

**Key Subdirectories:**
- `perceptual-audit-v2/synthesis/` — 6 T1 synthesis files (MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md, etc.)
- `css/` — 9 production CSS files (variables.css, callouts.css, code-block.css, etc.)
- `components/` — HTML component implementations (callout-info.html, decision-matrix.html, etc.)
- `tests/` — 10 Playwright test suites with node_modules
- `assets/` — ASCII art and visual assets

**Status Markers:**
- SOUL-DEFINITION.md: "ACTIVE / DO-NOT-TOUCH (LOCKED)"
- variables.css: "ACTIVE — LOCKED. Do not modify without Phase approval."
- MASTER-SOUL-SYNTHESIS.md: "T1 synthesis authority. Lifecycle: COMPLETE"
- PRODUCTION-RULES.md: "Mandatory constraints that all downstream work MUST honor"

**Evidence of Production Readiness:**
1. **Locked specifications:** All token values marked LOCKED with CSS enforcement
2. **Automated tests:** 10 Playwright test files verifying soul principles programmatically
3. **Complete documentation:** Threading headers, provenance chains, dependency traces
4. **CSS variables system:** Complete `:root` block with ~40 design tokens
5. **Implementation templates:** Component-specific CSS templates with correct/wrong examples

### 1.2 Card-System (63 files) — SUPERSEDED

**Status:** "DO NOT USE THIS FOLDER FOR NEW WORK"

From CLAUDE.md:
> "This folder contains the original card-focused design exploration that was superseded by component-system/ and then by perceptual-audit-v2/. It exists as historical record of the soul's evolution."

**Supersession Chain:**
```
card-system/SOUL-DEFINITION.md (10 principles)
    ↓ SUPERSEDED BY
component-system/SOUL-DEFINITION.md (6 universal rules)
    ↓ SYNTHESIZED INTO
perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (5 soul pieces) ← AUTHORITATIVE
```

**Historical Value:**
- 3A-3D research files (card anatomy, anti-patterns, halftone techniques, editorial patterns)
- Documents the evolution from "card-first" thinking to universal component principles

### 1.3 Typography-System (12 files) — Early Phase

**Status:** ACTIVE but minimal

**Contents:**
- Typography CSS files (type-scale.css, stroke-treatments.css, etc.)
- Demo HTML page
- PROGRESS.md (historical tracking)

**Note from design-extraction/CLAUDE.md:**
> "Phase 1-2: Typography System. The SOUL of Sanrok's typography is in: the specific curve of the "R" leg in Instrument Serif, ball terminals, exact stroke contrast ratio, filled/outline text mixing."

**Current Role:** Early typography exploration — values migrated to component-system/css/variables.css

### 1.4 Font-Research (21 files)

**Contents:** Didone font comparisons, specimens, research documents

**Purpose:** Instrument Serif selection research — informed typography decisions

### 1.5 Archive (52 files)

**Contents:** Early design variations, token explorations (extraction/, tokens/, components/, variations/)

**Status:** Historical only

---

## 2. What Distinguishes This From Tokens/Patterns?

### 2.1 Tokens/Patterns (Specifications/Rules)

**Location:** `active/design-system/tokens/` and `active/design-system/patterns/`

**Nature:**
- **Tokens:** Abstract design token definitions (color values, spacing scales, type scales)
- **Patterns:** Compositional rules and layout patterns
- **Format:** Declarative specifications, likely markdown/YAML

**Role:** WHAT the design system values are

### 2.2 Design-Extraction (Implementation/Build)

**Location:** `design-extraction/`

**Nature:**
- **CSS implementations:** 9 production CSS files consuming token variables
- **HTML components:** Standalone component demos and showcases
- **Tests:** Automated Playwright suites verifying implementation
- **Synthesis:** T1 authority documents explaining WHY and HOW

**Role:** HOW the design system is implemented + WHY it exists

### Key Difference

**Tokens/Patterns = Specifications** (the contract)
**Design-Extraction = Implementation** (the code fulfilling the contract)

---

## 3. Production vs Prototype vs Research?

### 3.1 Evidence of PRODUCTION Status

1. **Locked specifications with enforcement:**
   - "LOCKED CSS value" comments throughout
   - "Do not modify without Phase approval"
   - Mandatory verification checklists

2. **Automated test coverage:**
   - 10 Playwright test suites
   - Soul principle verification tests
   - Anti-pattern comparison tests
   - Visual regression baselines

3. **Complete provenance:**
   - Every file has threading headers
   - Dependency traces documented
   - Supersession chains tracked

4. **CSS variable system:**
   ```css
   :root {
     --color-primary: #E83025;     /* LOCKED */
     --color-background: #FEF9F5;  /* LOCKED */
     --font-display: 'Instrument Serif'; /* LOCKED */
     border-radius: 0;             /* LOCKED - soul enforcement */
     box-shadow: none;             /* LOCKED - soul enforcement */
   }
   ```

5. **Downstream consumption:**
   - `docs-spa/app/showcase/DESIGN-SYSTEM/` consumes these components
   - `docs-spa/app/showcase/explorations/` DD work consumes T1 synthesis
   - 22+ files across codebase reference PRODUCTION-RULES.md

### 3.2 NOT Prototypes

**Prototypes are:**
- Experimental, throwaway code
- Exploratory without locked values
- Not tested
- Not documented for reuse

**This codebase is:**
- Locked with "DO NOT MODIFY" constraints
- Fully tested with automated suites
- Exhaustively documented with provenance chains
- Actively consumed by downstream work

### 3.3 Research Artifacts Present But Secondary

The perceptual-audit-v2/ folder contains research artifacts (foundation/, tracking/, checkpoints/) BUT these feed into the T1 synthesis files which are PRODUCTION SPECIFICATIONS.

**Structure:**
```
perceptual-audit-v2/
├── synthesis/          ← PRODUCTION (T1 authority)
├── foundation/         ← Research feeding synthesis
├── tracking/           ← Research feeding synthesis
├── components/         ← Audit artifacts
└── checkpoints/        ← Session state
```

---

## 4. Is It More Like an "Implementation Library"?

### 4.1 Library Characteristics Present

✅ **Reusable components** — HTML + CSS for callouts, code blocks, decision matrices, etc.
✅ **Consistent API** — All components consume same CSS variables from variables.css
✅ **Documentation** — Complete usage guides in PRODUCTION-RULES.md
✅ **Tests** — Automated verification of component behavior
✅ **Versioning/Locking** — Locked token values prevent breaking changes

### 4.2 BUT: "Library" Implies Packaging

**Missing:**
- ❌ npm package structure
- ❌ Distribution builds
- ❌ Versioning system (package.json with semver)
- ❌ Installation instructions
- ❌ External consumers (all consumers are internal to this repo)

### 4.3 More Accurate: "Implementation Layer"

This is the **implementation layer** of the design system:
- Sits between specifications (tokens/patterns) and applications (docs-spa)
- Contains production-ready code
- Locked and tested
- Internal to the codebase (not distributed)

**Better metaphor:** This is the **build system** or **component implementation** layer.

---

## 5. Proposed Folder Names

### Option 1: `implementation/` ⭐ RECOMMENDED

**Rationale:**
- Accurately describes role: implements the design system specifications
- Distinguishes from tokens/patterns (specifications) and docs-spa (application)
- Conveys production-ready status
- Clear hierarchy: tokens → implementation → application

**Pros:**
- Self-documenting
- Matches software engineering terminology
- Implies stability (locked, production)

**Cons:**
- Slightly verbose (14 characters)

---

### Option 2: `components/`

**Rationale:**
- Focus on primary output (HTML/CSS components)
- Short and clear
- Common in design system repos (e.g., @primer/components, @radix-ui/react)

**Pros:**
- Concise (10 characters)
- Familiar to developers

**Cons:**
- Doesn't convey the T1 synthesis authority files
- Misses typography-system and font-research sub-areas
- Could be confused with components/ subdirectory inside component-system/

---

### Option 3: `system-implementation/`

**Rationale:**
- "System" acknowledges the broader design system context
- "Implementation" distinguishes from specifications

**Pros:**
- Most explicit about role
- Clear relationship to "design system"

**Cons:**
- Long (21 characters)
- Redundant with parent "design-system/"

---

### Option 4: `build/`

**Rationale:**
- Short, technical term
- Implies compiled/production output
- Common in software (build/ directories contain compiled artifacts)

**Pros:**
- Concise (5 characters)
- Conveys production status

**Cons:**
- Could imply temporary/generated files (like .next/ or dist/)
- Doesn't convey the research/synthesis aspect

---

### Option 5: `library/`

**Rationale:**
- Original suggestion from task description
- Implies reusable components

**Pros:**
- Clear intent (collection of components)
- Familiar term

**Cons:**
- Implies external distribution (npm package)
- Doesn't exist as package
- Doesn't convey T1 synthesis authority role
- Misses the "soul specification" aspect (this is more than just code)

---

## 6. Final Recommendation

### PRIMARY: `implementation/`

**Full Path:** `design-system/implementation/`

**Subdirectories:**
```
design-system/
├── tokens/                    ← Specifications (WHAT)
├── patterns/                  ← Specifications (HOW to compose)
└── implementation/            ← Production code (BUILT artifacts)
    ├── component-system/      ← Components + T1 synthesis
    ├── typography-system/     ← Typography implementation
    ├── font-research/         ← Font selection research
    ├── card-system/           ← Historical (SUPERSEDED)
    └── archive/               ← Early explorations
```

**Why This Works:**

1. **Accurate role description:** This IS the implementation layer
2. **Clear hierarchy:** tokens/patterns (specs) → implementation (code) → application (docs-spa)
3. **Distinguishes from specifications:** Not just "what the values are" but "how they're built into components"
4. **Accommodates research:** The T1 synthesis files are implementation specifications (HOW to implement the soul)
5. **Future-proof:** If extracted as npm package, name still makes sense

### ALTERNATIVE: `components/`

If brevity is prioritized over precision, `components/` is acceptable.

**Trade-off:** Loses the nuance that this contains both components AND synthesis authority (T1 files).

---

## 7. Supporting Evidence

### 7.1 From component-system/SOUL-DEFINITION.md

> "This file is the ORIGIN of the 6 Universal Rules — sharp edges, flat design, limited palette, typography hierarchy, heavy borders, and whitespace as design element — and provides the definitive locked CSS variable block (:root) that downstream synthesis and implementation must honor."

**Interpretation:** This is implementation specification authority, not just components.

### 7.2 From perceptual-audit-v2/CLAUDE.md

> "This folder contains the canonical source of truth for the KORTAI design system. The 6 T1 synthesis files in synthesis/ are the highest authority for soul, tokens, patterns, and constraints."

**Interpretation:** This is the BUILD SYSTEM for the design system — specifications + code + tests.

### 7.3 From variables.css

> "Defines all locked CSS custom properties (design tokens) for the editorial design system... This is the single source of truth for the component-system's visual vocabulary."

**Interpretation:** This is the IMPLEMENTATION of the token specifications.

### 7.4 From PRODUCTION-RULES.md

> "This file translates the 6 Universal Rules from SOUL-DEFINITION.md into mandatory CSS enforcement rules with correct/wrong examples, component-specific implementation templates, coexistence rules, and a verification checklist that any KortAI implementer MUST follow."

**Interpretation:** This is an implementation guide, not just a component library.

---

## 8. Naming Consistency Check

**Current structure (post-restructure):**

```
fortress/          ← Output of deep explorations (DD, OD, CD)
active/            ← Forward work
  ├── axis/
  ├── pipeline/
  └── design-system/
      ├── tokens/
      ├── patterns/
      └── [THIS FOLDER]
archive/           ← Historical artifacts
```

**Naming principles from other folders:**

- **fortress/** — Direct output, zero bloat, 100% KEEP
- **active/** — Forward-facing work
- **archive/** — Historical/superseded

**Pattern:** Names describe FUNCTION (what role the files serve)

**This folder's function:** Implements the design system (CSS + HTML + tests + specs)

**Name that matches pattern:** `implementation/`

---

## 9. Summary Table

| Name | Role Description | Pros | Cons | Verdict |
|------|-----------------|------|------|---------|
| **implementation/** | Code that implements design specs | Accurate, clear hierarchy, future-proof | Slightly long | ⭐ RECOMMENDED |
| **components/** | Collection of reusable components | Concise, familiar | Misses synthesis/research aspect | ACCEPTABLE |
| **system-implementation/** | Design system implementation layer | Most explicit | Too long, redundant | NOT RECOMMENDED |
| **build/** | Production build artifacts | Concise, technical | Implies temporary/generated | NOT RECOMMENDED |
| **library/** | Reusable component library | Clear intent | Implies external package (not accurate) | NOT RECOMMENDED |

---

## 10. Additional Context

### 10.1 T1 Synthesis Files (Crown Jewels)

The 6 T1 synthesis files in `component-system/perceptual-audit-v2/synthesis/`:

1. **MASTER-SOUL-SYNTHESIS.md** — 5 soul pieces (15+ inbound refs)
2. **DESIGN-TOKEN-SUMMARY.md** — Locked :root block (18+ inbound refs)
3. **CHARACTER-FAMILY-COMPLETE.md** — 11 named component characters
4. **ANTI-PATTERNS-REGISTRY.md** — The Soul Test
5. **PRODUCTION-RULES.md** — Mandatory implementation rules (22 refs)
6. **CONSISTENCY-VERIFICATION.md** — Verification checklist

**These are the most-referenced files in the entire codebase.**

**Naming implication:** Any name must accommodate that this folder contains AUTHORITATIVE SPECIFICATIONS, not just code.

### 10.2 Superseded Content (Historical Value)

- **card-system/** — SUPERSEDED but shows soul evolution (10 principles → 6 rules → 5 pieces)
- **archive/** — Early token explorations (contains DANGEROUS values — border-radius > 0)

**Naming implication:** The name should work for both active and historical content.

---

## Conclusion

**RECOMMENDED NAME:** `implementation/`

**Full path:** `active/design-system/implementation/`

**Rationale:** This folder is the production-ready implementation layer of the design system — containing CSS, HTML components, automated tests, and T1 synthesis authority. It implements the specifications defined in tokens/ and patterns/, and is consumed by the docs-spa application. The name "implementation" accurately describes this role, distinguishes it from specifications, and accommodates both code and synthesis documents.

**ALTERNATIVE:** If brevity is critical, use `components/` (though this loses the nuance of T1 synthesis authority).

---

**Files analyzed:** 418 total (270 component-system, 63 card-system, 12 typography-system, 21 font-research, 52 archive)
**Key files read:** SOUL-DEFINITION.md, PRODUCTION-RULES.md, variables.css, MASTER-SOUL-SYNTHESIS.md, CLAUDE.md files
**Status markers found:** LOCKED, ACTIVE, SUPERSEDED, DO-NOT-TOUCH, T1 authority
**Test coverage:** 10 Playwright test suites
**Downstream consumers:** docs-spa/DESIGN-SYSTEM/, explorations/, knowledge-architecture/
