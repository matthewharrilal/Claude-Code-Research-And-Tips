# Taxonomy Analysis: Identity, Vocabulary, Grammar, and Rules

**Analyst:** taxonomy-analyst
**Date:** 2026-03-01
**Task:** Metacognitive analysis of the 6 vocabulary files — classifying content, mapping overlaps, identifying boundary blur, and recommending optimal file decomposition and reading order.

---

## 1. THE FOUR CATEGORIES DEFINED

Before classifying, I need to establish what these categories mean in a design system context:

| Category | Definition | Test Question |
|----------|-----------|---------------|
| **IDENTITY** | What the system IS — its character, philosophy, soul. Immutable. If you change it, the system becomes a different system. | "If I remove this, is the output still KortAI?" |
| **VOCABULARY** | Available tools — the atoms a builder can pick up and use. Tokens, components, mechanisms. Mutable within constraints. | "Can I use this as a building block in my CSS?" |
| **GRAMMAR** | How tools combine — the rules for assembling vocabulary into compositions. Relational, not individual. | "Does this describe how two or more things interact?" |
| **RULES** | What is prohibited — the boundaries and constraints. Negative space that shapes identity. | "Does this tell me what NOT to do?" |

**Critical observation:** These four categories are NOT orthogonal. Identity IS EXPRESSED THROUGH rules. Grammar DEPENDS ON vocabulary. The question is not "which category does this belong to?" but "which category is PRIMARY?"

---

## 2. FILE-BY-FILE CLASSIFICATION

### File 1: prohibitions.md (420 lines)

**Declared purpose:** "Identity-Bearing Negative Rules"

| Section | Lines | Primary Category | Secondary | Content |
|---------|-------|-----------------|-----------|---------|
| Preamble (lens, purpose) | 1-17 | IDENTITY | -- | Meta-framing: what this document IS |
| Absolute Prohibitions #1-8 | 19-129 | IDENTITY | RULES | border-radius:0, box-shadow:none, no drop-shadow, no semi-transparent, no gradients, no pure B/W, no serif body, no decorative rounding |
| Conditional Prohibitions #9-18 | 131-291 | RULES | GRAMMAR | 2px borders, accent borders <4px, no decoration without info, no decorative grid breaks, no vertical table borders, no hover lift, no traffic-light adjacency, no cool grays, italic h3, no same-density stacking |
| Meta-Prohibitions #19-20 | 293-321 | RULES | IDENTITY | No design without provenance, no patterns without tension |
| Spatial Prohibitions #21-22 | 323-386 | RULES | GRAMMAR | No full-viewport void, no first-third concentration |
| Summary + How-To | 389-420 | -- | -- | Process documentation |

**Classification:** RULES (primary), IDENTITY (secondary for absolute prohibitions)

**Boundary blur:**
- Prohibitions #1-8 are IDENTITY encoded as RULES. "border-radius: 0" is not really a rule — it's WHO THE SYSTEM IS. The rule form is just the enforcement mechanism.
- Conditional prohibitions (#9-18) are GRAMMAR encoded as RULES. "No same-density stacking" is a compositional grammar constraint, not an identity statement. You could change #18 and still have KortAI.
- Prohibitions #21-22 are SPATIAL GRAMMAR rules derived from experiment failures, not identity.

**What belongs here vs elsewhere:**
- #1-8 (absolute): Genuinely identity-level. BELONGS here.
- #9-18 (conditional): Many are GRAMMAR rules wearing RULE clothing. Some (#9 2px epidemic, #16 cool grays) are genuinely identity. Others (#13 vertical table borders, #18 same-density stacking) are compositional grammar.
- #19-22: Process and spatial rules. These are GRAMMAR/PROCESS, not identity.

---

### File 2: soul-constraints.md (343 lines)

**Declared purpose:** "The 3 Absolute Identity Markers"

| Section | Lines | Primary Category | Secondary | Content |
|---------|-------|-----------------|-----------|---------|
| Preamble | 1-18 | IDENTITY | -- | What this document IS |
| Soul Constraint 1: border-radius | 23-61 | IDENTITY | -- | Angular geometry IS KortAI |
| Soul Constraint 2: box-shadow | 64-111 | IDENTITY | -- | Flat surfaces, structural depth |
| Soul Constraint 3: filter | 114-155 | IDENTITY | -- | No shadow effects |
| Why Only 3 | 158-185 | IDENTITY | -- | Meta: soul vs prohibition distinction |
| Philosophical Principles | 188-241 | IDENTITY | -- | Depth through structure, info density, semantic weight |
| How Constraints Generate Identity | 244-287 | IDENTITY | GRAMMAR | Generative property, compositional chain |
| Validation Checklist | 289-304 | RULES | -- | Binary verification |
| What Happens When Violated | 306-337 | IDENTITY | -- | Consequences framing |

**Classification:** IDENTITY (primary), almost exclusively

**Boundary blur:**
- Lines 244-287 ("How the 3 Constraints Generate Identity") describes a generative chain: soul constraints -> visual identity -> other prohibitions -> pattern development -> compositional grammar -> distinctive layouts. This is a GRAMMAR narrative (how things combine to produce outcomes) wearing an IDENTITY label.
- The validation checklist (289-304) is RULES (what to check).

**Overlap with prohibitions.md:**
- MASSIVE overlap. Soul-constraints.md #1-3 are prohibitions.md #1-3 expanded to 4x length.
- prohibitions.md: 30-60 lines per constraint (evidence + rule + exception)
- soul-constraints.md: 40-50 lines per constraint (philosophy + evidence + violations + test)
- Same evidence cited, same rules stated, different framing (philosophy vs enforcement)

**Is this file necessary as separate?** Debatable. It serves a different COGNITIVE PURPOSE: prohibitions.md says "don't do X", soul-constraints.md says "here's WHO WE ARE and WHY X is forbidden." But the information is ~70% duplicated.

---

### File 3: mechanism-catalog.md (752 lines)

**Declared purpose:** "18 Reusable CSS Techniques"

| Section | Lines | Primary Category | Secondary | Content |
|---------|-------|-----------------|-----------|---------|
| Category Table | 9-20 | VOCABULARY | -- | 5 property families (S, H, C, D, N) |
| Tier Selection Logic | 21-47 | GRAMMAR | -- | Middle vs Ceiling selection philosophy |
| 18 Mechanisms (#1-#18) | 50-613 | VOCABULARY | GRAMMAR | Each: CSS code + transfer test + application modes |
| Summary Table | 591-613 | VOCABULARY | -- | Quick reference |
| Transition Grammar | 625-707 | GRAMMAR | -- | 3 transition types (hard cut, spacing shift, checkpoint) |
| Restraint Protocol | 710-748 | GRAMMAR | RULES | Density cap, distribution requirement, restraint ratio |

**Classification:** VOCABULARY (primary), GRAMMAR (strong secondary)

**Boundary blur:**
- The mechanisms themselves (18 CSS patterns) are pure VOCABULARY — building blocks.
- But the file also contains substantial GRAMMAR: tier selection logic (lines 21-47), application modes (PROGRESSIVE vs DISCRETE per mechanism), transition grammar (625-707), restraint protocol (710-748).
- The restraint protocol (710-748) is RULES wearing GRAMMAR clothing. "No more than 4 mechanisms per viewport" is a constraint, not a combination rule.
- Impact profiles ("HIGH", "MEDIUM", "LOW") are GRAMMAR metadata — they guide selection, not implementation.

**What belongs here vs elsewhere:**
- The 18 mechanisms with CSS: VOCABULARY. Perfect fit.
- Application modes (per mechanism): GRAMMAR but co-located with vocabulary for usability. Pragmatically correct.
- Transition grammar (625-707): Pure GRAMMAR. Should arguably live in compositional-rules.md.
- Restraint protocol (710-748): RULES. Should arguably live in prohibitions.md or a separate constraints file.
- Tier selection logic (21-47): GRAMMAR/PROCESS. Describes HOW to choose, not what exists.

---

### File 4: tokens.css (184 lines)

**Declared purpose:** "Phase C Design Token Vocabulary"

| Section | Lines | Primary Category | Secondary | Content |
|---------|-------|-----------------|-----------|---------|
| Soul Constraints (CSS vars) | 17-21 | IDENTITY | VOCABULARY | --border-radius: 0, --box-shadow: none |
| Color Palette (primary) | 27-32 | IDENTITY | VOCABULARY | 6 LOCKED color tokens |
| Color Palette (accent) | 34-39 | VOCABULARY | -- | 5 MUTABLE accent colors |
| Background Colors | 41-49 | VOCABULARY | -- | 8 semantic backgrounds |
| Zone Colors | 51-55 | VOCABULARY | -- | 3 zone differentiation tokens |
| Text Hierarchy Colors | 57-62 | VOCABULARY | -- | 5 text hierarchy tokens |
| Font Families | 68-70 | IDENTITY | VOCABULARY | 3 LOCKED font stacks |
| Type Scale | 72-89 | VOCABULARY | -- | 10+6 size tokens |
| Spacing Scale | 95-122 | VOCABULARY | -- | 14 spacing tokens + 3 semantic aliases + 2 maximums |
| Border Widths | 131-135 | VOCABULARY | IDENTITY | 3 structural border tokens |
| Syntax Highlighting | 141-147 | VOCABULARY | -- | 7 code color tokens |
| Transitions | 152 | VOCABULARY | -- | 1 timing token |
| Solid Offset | 158-161 | VOCABULARY | -- | 3 offset tokens |

**Classification:** VOCABULARY (primary), IDENTITY (secondary for IMMUTABLE/LOCKED items)

**Boundary blur:**
- Lines 17-21 encode IDENTITY as CSS variables. `--border-radius: 0` is identity, but expressing it as a CSS custom property makes it look like vocabulary. This is deliberate — identity constraints ARE implemented as vocabulary tokens.
- The IMMUTABLE/MUTABLE/AVAILABLE classification is an IDENTITY system imposed on VOCABULARY. The tokens themselves are vocabulary; their mutability status is identity metadata.
- The spacing maximum rule (lines 114-122) is a RULE embedded in a VOCABULARY file: "No single margin or padding value should exceed --space-max-zone (96px)."

**What belongs here vs elsewhere:**
- All tokens: VOCABULARY. Perfect fit.
- IMMUTABLE/MUTABLE annotations: IDENTITY metadata. Pragmatically co-located with tokens.
- The spacing max RULE comment (lines 117-122): This is a RULE, not a token definition. Should reference prohibitions.md instead of inlining the rule.

---

### File 5: components.css (945 lines)

**Declared purpose:** "Merged Component CSS"

| Section | Lines | Primary Category | Secondary | Content |
|---------|-------|-----------------|-----------|---------|
| Universal: Callout Family | 14-83 | VOCABULARY | -- | .callout + 5 semantic variants |
| Universal: Code Blocks | 86-173 | VOCABULARY | -- | pre, code, .code-snippet |
| Universal: Page Header | 176-208 | VOCABULARY | -- | .exploration-header, .page-header |
| Universal: Page Footer | 211-231 | VOCABULARY | -- | .page-footer |
| Universal: Tables | 233-265 | VOCABULARY | -- | table, th, td |
| Universal: Skip Link | 268-287 | VOCABULARY | -- | Accessibility |
| Universal: Focus/Selection | 290-303 | VOCABULARY | -- | :focus-visible, ::selection |
| Universal: Stats Bar | 306-358 | VOCABULARY | -- | .stats-bar, .stat-item |
| Universal: Section Indicator | 361-387 | VOCABULARY | -- | .section-indicator, .meta-line |
| Universal: File Tree | 390-419 | VOCABULARY | -- | .file-tree |
| Universal: Decision Matrix | 422-453 | VOCABULARY | -- | .decision-matrix |
| Universal: Density Indicator | 456-477 | VOCABULARY | -- | .density-indicator, .density-bar |
| Universal: Q&A Pair | 480-524 | VOCABULARY | GRAMMAR | .question, .answer + drop cap |
| Universal: Breadcrumb | 527-547 | VOCABULARY | -- | .breadcrumb |
| CD-Specific: Reasoning | 554-597 | VOCABULARY | -- | CD-ONLY marker |
| CD-Specific: Core Abstraction | 600-641 | VOCABULARY | -- | CD-ONLY marker |
| CD-Specific: Bento Grid | 644-678 | VOCABULARY | -- | CD-ONLY marker |
| CD-Specific: Essence Pullquote | 681-709 | VOCABULARY | -- | CD-ONLY marker |
| CD-Specific: Density Meter | 712-740 | VOCABULARY | -- | CD-ONLY marker |
| CD-Specific: Version Badge | 743-755 | VOCABULARY | -- | CD-ONLY marker |
| CD-Specific: Section Zones | 758-797 | VOCABULARY | GRAMMAR | Density progression examples |
| CD-Specific: Breathing Zones | 800-821 | VOCABULARY | GRAMMAR | Between-section decompression |
| Tension-Test-Only: Layer Boundaries | 828-848 | VOCABULARY | -- | Lower confidence |
| Tension-Test-Only: Building Floor | 851-878 | VOCABULARY | -- | Lower confidence |
| Tension-Test-Only: Compression Grid | 881-895 | VOCABULARY | -- | Lower confidence |
| Responsive | 902-929 | GRAMMAR | VOCABULARY | @media breakpoint rules |
| Reduced Motion | 936-942 | RULES | -- | Accessibility |

**Classification:** VOCABULARY (primary), almost exclusively

**Boundary blur:**
- Section zones (758-797) embed GRAMMAR in VOCABULARY: the density progression (opening -> rising -> building -> peak -> resolution) is a compositional sequence, not a component definition.
- Breathing zones (800-821) similarly embed GRAMMAR: "between-section decompression" is a spacing rhythm rule.
- The responsive section (902-929) is GRAMMAR (rules for how components adapt) embedded in VOCABULARY (the component file).
- CD-ONLY / TENSION-TEST-ONLY markers are CONFIDENCE METADATA, not vocabulary or grammar.

**What belongs here vs elsewhere:**
- All component CSS: VOCABULARY. Perfect fit.
- Section zone density progression: GRAMMAR. The CSS implementation belongs here; the naming pattern (opening/rising/building/peak/resolution) describes a compositional sequence that belongs in compositional-rules.md.
- Responsive rules: Arguable. They're inseparable from component definitions pragmatically.
- Confidence markers: METADATA. Fine as inline comments.

---

### File 6: compositional-rules.md (528 lines)

**Declared purpose:** "Compositional Grammar Rules"

| Section | Lines | Primary Category | Secondary | Content |
|---------|-------|-----------------|-----------|---------|
| Zone Nesting Rules (N1-N4) | 11-69 | GRAMMAR | -- | How components nest |
| Spacing Rhythm (R1-R4) | 71-131 | GRAMMAR | RULES | INHALE/EXHALE, min/max consecutive, triggers, compression ratios |
| Background Zone Rules (Z1-Z3) | 133-174 | GRAMMAR | -- | Color signals content type, max zone changes, transition rules |
| Component Density (D1-D3) | 176-215 | GRAMMAR | RULES | Max per viewport, overwhelm triggers, density variation arc |
| 2-Zone DNA (DNA1-DNA3) | 217-268 | GRAMMAR | VOCABULARY | Callout structure rules, universal sparse+dense pattern |
| Compound Grammar (C1-C3) | 270-313 | GRAMMAR | -- | Sequential patterns, transitions, max per page |
| Fractal Rules (F1-F3) | 317-355 | GRAMMAR | RULES | 4-scale mandatory, same rhythm, coherence loss |
| Grid Grammar (G1-G3) | 358-395 | GRAMMAR | -- | Span encoding, grid gaps, max cells |
| Responsive Collapse (RC1-RC2) | 397-421 | GRAMMAR | -- | 768px collapse, padding compression |
| Anti-Patterns (AP1-AP4) | 423-461 | RULES | GRAMMAR | No callout stacking, no uniform density, no fighting pattern, no simultaneous axes |
| Open Questions (Q1-Q5) | 465-495 | -- | -- | Unresolved grammar questions |
| Summary | 497-527 | -- | -- | Statistics |

**Classification:** GRAMMAR (primary), RULES (secondary for anti-patterns and density limits)

**Boundary blur:**
- Anti-patterns (AP1-AP4, lines 423-461) are RULES that belong in prohibitions.md conceptually. They're compositional PROHIBITIONS.
- Density limits (D1: max 3-4 per viewport) are RULES wearing GRAMMAR clothing.
- 2-Zone DNA (DNA1-DNA3) describes a VOCABULARY pattern (sparse label + dense body) in a GRAMMAR file. The pattern ITSELF is vocabulary; the rules about HOW it's applied (always 2-zone, spacing not border, applies to non-callouts) are grammar.
- Fractal rules (F1-F3) are arguably IDENTITY — fractal self-similarity is so fundamental to the system that removing it changes the system's character. But they're expressed as grammar rules.

---

## 3. OVERLAP MAP

### Overlap 1: Soul Constraints x3

**Files:** prohibitions.md (#1-3), soul-constraints.md (entire), tokens.css (lines 17-21)

The same 3 constraints (border-radius: 0, box-shadow: none, filter: none) appear in THREE files:

| File | Treatment | Lines Used |
|------|-----------|------------|
| prohibitions.md | Rule form: "NEVER use X" + evidence + exception | ~90 lines |
| soul-constraints.md | Philosophy form: "X IS identity because..." + violations + tests | ~155 lines |
| tokens.css | Implementation form: `--border-radius: 0; --box-shadow: none;` | ~5 lines |

**Total lines across 3 files: ~250 for 3 constraints.**

**Is this redundancy?** Yes, but INTENTIONAL. Each serves a different cognitive purpose:
- prohibitions.md: enforcement (builder reads: "don't do this")
- soul-constraints.md: understanding (researcher reads: "here's why")
- tokens.css: implementation (builder reads: "use these values")

**Problem:** A builder who reads ALL 3 files (as required for many tasks) encounters the same information 3 times. This is ~250 lines of redundancy out of ~3,172 total lines across all 6 files (8%).

---

### Overlap 2: Spacing/Density Rules x3

**Files:** mechanism-catalog.md (#4, #5, #12), compositional-rules.md (R1-R4, D1-D3), tokens.css (spacing max comments)

| File | Treatment | Lines |
|------|-----------|-------|
| mechanism-catalog.md | CSS patterns for spacing compression, dense/sparse alternation, progressive disclosure | ~60 lines |
| compositional-rules.md | Rules for spacing rhythm, density limits, breathing triggers | ~60 lines |
| tokens.css | --space-max-section, --space-max-zone with rule comments | ~10 lines |

**Overlap is SEMANTIC, not textual.** The mechanism catalog gives you the CSS tools. Compositional rules tell you when/how to use them. Tokens give you the values. This is VOCABULARY -> GRAMMAR -> IMPLEMENTATION layering, which is actually correct separation — the overlap is that all three mention "density" and "spacing" but from different angles.

---

### Overlap 3: Callout/Component Patterns x3

**Files:** mechanism-catalog.md (#2, #9, #10), components.css (callout family), compositional-rules.md (DNA1-DNA3)

| File | Treatment | Lines |
|------|-----------|-------|
| mechanism-catalog.md | 2-Zone DNA mechanism, color encoding, border-left signaling | ~50 lines |
| components.css | .callout CSS implementation with 5 variants | ~70 lines |
| compositional-rules.md | Nesting rules, 2-zone structure rules, non-callout application | ~50 lines |

**Again SEMANTIC overlap, not textual.** But the 2-Zone DNA pattern appears as:
- A mechanism description (catalog)
- A CSS implementation (components.css)
- A structural rule set (compositional-rules.md)

A builder needs to consult all three to fully understand callouts. This is fragmentation.

---

### Overlap 4: Transition/Zone Rules x2

**Files:** mechanism-catalog.md (Transition Grammar, lines 625-707), compositional-rules.md (Z1-Z3, C2)

Both files describe zone transitions — mechanism-catalog calls them "Transition Grammar" with 3 types (hard cut, spacing shift, checkpoint), and compositional-rules calls them "Background Zone Rules" and "Transition Grammar Between Patterns."

**This is the most problematic overlap.** A builder looking for "how to handle zone transitions" could find the answer in EITHER file, and the two treatments are not identical. Mechanism-catalog's transition grammar is more specific (3 named types with CSS), while compositional-rules' C2 is more abstract (SMOOTH, BRIDGE, BREATHING). These are potentially contradictory or at minimum confusing.

---

## 4. CONTRADICTION MAP

### Contradiction 1: Transition Type Naming

- mechanism-catalog.md: HARD CUT / SPACING SHIFT / CHECKPOINT
- compositional-rules.md: SMOOTH / BRIDGE / BREATHING

These describe overlapping but non-identical concepts. HARD CUT ~= neither SMOOTH nor BRIDGE (it's a third concept). BREATHING ~= CHECKPOINT in some cases. A builder encountering both would be confused.

### Contradiction 2: Density Limits

- mechanism-catalog.md (restraint protocol): "No single viewport-height section may contain MORE THAN 4 distinct mechanisms"
- compositional-rules.md (D1): "Maximum Components Per Viewport-Height = 3-4"

These measure DIFFERENT things (mechanisms vs components) but at the same scope (viewport-height). A viewport could have 3 components (PASS per D1) but each component uses 2 mechanisms = 6 mechanisms (FAIL per restraint). The interaction is undefined.

### Contradiction 3: Breathing Zone Threshold

- compositional-rules.md (R1): "Every 2-4 dense zones MUST be followed by breathing room (48px+)"
- compositional-rules.md (R2): "Maximum = 3" consecutive dense sections
- tokens.css: --space-max-zone: 96px maximum

These are consistent but the RELATIONSHIP is unclear. Can you have 3 dense sections followed by 96px spacing? Or does 3 dense sections demand more than 96px breathing? The rules don't specify.

---

## 5. GAP MAP

### Gap 1: No "Vocabulary Index"

There is no single file that says "here are ALL the building blocks available to you." Tokens.css has CSS variables. Components.css has component classes. Mechanism-catalog has mechanism descriptions. But there's no unified index.

### Gap 2: No Explicit "Reading Order" Specification

The CLAUDE.md files describe phase-gated access, but no file says "if you're a builder in Phase 4, read mechanism-catalog lines 50-613, then components.css, then compositional-rules sections 1 and 5."

### Gap 3: No "Decision Trees"

Compositional-rules.md has rules but no decision trees. A builder asking "I have a section with 3 callouts — what do I do?" has to synthesize from AP1 (no callout stacking), D1 (max 3-4 per viewport), and R3 (breathing triggers). The answer isn't pre-computed.

### Gap 4: No Component-to-Mechanism Mapping

Mechanism-catalog lists 18 mechanisms. Components.css lists ~25 components. But there's no file mapping which mechanisms are IMPLEMENTED by which components. A builder knows "2-Zone DNA" (mechanism) and ".callout" (component) but must mentally connect them.

---

## 6. WHERE FILES BLUR BOUNDARIES

**Summary of all boundary blur identified above:**

| File | Blurred Category | Specific Section | What It Actually Is |
|------|-----------------|------------------|-------------------|
| prohibitions.md | IDENTITY as RULES | #1-8 absolute | Identity encoded as enforcement rules |
| prohibitions.md | GRAMMAR as RULES | #9-18 conditional | Compositional constraints wearing prohibition clothing |
| prohibitions.md | GRAMMAR as RULES | #21-22 spatial | Spatial grammar rules derived from experiments |
| soul-constraints.md | GRAMMAR as IDENTITY | Lines 244-287 | Generative chain description is grammar narrative |
| mechanism-catalog.md | GRAMMAR in VOCABULARY | Lines 21-47 (tier selection) | Selection philosophy, not mechanism definition |
| mechanism-catalog.md | GRAMMAR in VOCABULARY | Lines 625-707 (transitions) | Pure composition grammar in mechanism file |
| mechanism-catalog.md | RULES in VOCABULARY | Lines 710-748 (restraint) | Density constraints in mechanism file |
| tokens.css | IDENTITY in VOCABULARY | Lines 17-21 (soul CSS vars) | Identity constraints as CSS tokens |
| tokens.css | RULES in VOCABULARY | Lines 117-122 (spacing max) | Prohibition comment in token file |
| components.css | GRAMMAR in VOCABULARY | Lines 758-797 (section zones) | Density progression in component file |
| components.css | GRAMMAR in VOCABULARY | Lines 800-821 (breathing) | Spacing rhythm in component file |
| compositional-rules.md | RULES in GRAMMAR | AP1-AP4 (lines 423-461) | Prohibitions in grammar file |
| compositional-rules.md | VOCABULARY in GRAMMAR | DNA1-DNA3 (lines 217-268) | Pattern description in rules file |
| compositional-rules.md | IDENTITY in GRAMMAR | F1-F3 (lines 317-355) | Identity-level constraint in grammar |

**Pattern:** Every file bleeds into at least 2 other categories. The most common blur is GRAMMAR content appearing in files whose primary category is something else.

---

## 7. THE RIGHT FILE DECOMPOSITION

### Current Structure (6 files, 4 actual categories)

```
prohibitions.md      → RULES (with identity and grammar leaking in)
soul-constraints.md  → IDENTITY (with rules and grammar leaking in)
mechanism-catalog.md → VOCABULARY (with grammar and rules leaking in)
tokens.css           → VOCABULARY (with identity and rules leaking in)
components.css       → VOCABULARY (with grammar leaking in)
compositional-rules.md → GRAMMAR (with rules and vocabulary leaking in)
```

### Ideal Structure (if redesigning from scratch)

**Option A: Category-Pure (maximize clarity, minimize overlap)**

```
identity.md          → WHO we are: soul philosophy + 3 soul constraints + generative principles
                       (~120 lines, extracted from soul-constraints.md + prohibitions.md preamble)

tokens.css           → WHAT we have: all CSS custom properties, no rules in comments
                       (~140 lines, tokens.css minus rule comments)

components.css       → WHAT we can build with: all component CSS, no density progression narrative
                       (~850 lines, components.css minus section-zone sequence commentary)

mechanisms.md        → WHAT compositional tools exist: 18 mechanisms, CSS + transfer test only
                       (~400 lines, mechanism-catalog mechanisms without selection logic/transitions/restraint)

grammar.md           → HOW things combine: nesting, spacing rhythm, density, transitions, fractal,
                       tier selection logic, mechanism restraint, breathing zones
                       (~500 lines, compositional-rules.md + mechanism-catalog transitions/restraint)

prohibitions.md      → WHAT NOT to do: all prohibitions (absolute + conditional + spatial + anti-patterns)
                       (~400 lines, current prohibitions.md + compositional-rules AP1-AP4)
```

**Pros:** Each file has ONE primary category. No boundary blur. No content duplication.
**Cons:** 6 files is the same count. Requires extensive refactoring. soul-constraints.md is eliminated (merged into identity.md).

**Option B: Builder-Optimized (minimize files read per task)**

```
soul-and-prohibitions.md  → ALL constraints: 3 soul + 22 prohibitions + 4 anti-patterns + spatial rules
                            (~500 lines — SINGLE file for "what NOT to do")

builder-vocabulary.css    → tokens.css + components.css MERGED
                            (~1,100 lines — SINGLE file for "what I can use")

composition-guide.md      → 18 mechanisms + selection logic + grammar rules + transitions + restraint
                            (~1,000 lines — SINGLE file for "how things combine")
```

**Pros:** 3 files instead of 6. Builder reads 1-2 files per task instead of 3-4. Zero duplication.
**Cons:** Large files (1,000+ lines). Loses the identity/vocabulary/grammar/rules taxonomy as an organizing principle. soul-constraints.md philosophical content has no home.

**Option C: Preserve Current + Fix Overlaps (pragmatic)**

Keep the 6-file structure but:
1. REMOVE soul-constraints.md as separate file — fold philosophy paragraphs into prohibitions.md as an intro section
2. MOVE mechanism-catalog transition grammar (625-707) to compositional-rules.md
3. MOVE mechanism-catalog restraint protocol (710-748) to prohibitions.md as #23-24
4. MOVE compositional-rules AP1-AP4 to prohibitions.md as conditional prohibitions #23-26
5. REMOVE tokens.css rule comment (117-122) — reference prohibitions.md instead
6. ADD component-to-mechanism mapping table to mechanism-catalog.md

**Pros:** Minimal refactoring. Existing references still work. Reduces overlap by ~40%.
**Cons:** Doesn't solve the fundamental boundary blur. Still requires reading 3+ files per task.

### Recommendation: Option C (pragmatic) for NOW, Option A (category-pure) for v2.

The current system works. The overlaps are annoying but not fatal. Option C is a 2-hour cleanup. Option A is a 2-day refactor.

---

## 8. OPTIMAL READING ORDER FOR DYNAMIC AGENT READING

The Side B experiment showed that dynamic file reading works — agents can read files on-demand rather than loading everything upfront. Given this, what's the optimal reading order?

### For a BUILDER agent (Phase 4+, metaphor already derived):

**Read 1 (MANDATORY, always first):** tokens.css
- WHY FIRST: Implementation reality. Every CSS property the builder writes uses these tokens. Reading this first establishes the physical palette.
- 174 lines. 2 minutes.

**Read 2 (MANDATORY, immediately after):** prohibitions.md
- WHY SECOND: Negative space. Now that the builder knows WHAT EXISTS (tokens), they need to know WHAT'S FORBIDDEN. This order prevents "I'll use a gradient" → "wait, gradients are prohibited."
- 420 lines. 5 minutes.

**Read 3 (CONDITIONAL, Phase 4):** mechanism-catalog.md (lines 50-613 only — mechanisms, not transitions/restraint)
- WHY THIRD: Compositional tools. Builder now knows atoms (tokens) and constraints (prohibitions). Mechanisms show how to COMBINE atoms into patterns.
- ~560 lines. 7 minutes.

**Read 4 (CONDITIONAL, Phase 4):** components.css
- WHY FOURTH: Implementation library. Builder has seen mechanisms abstractly. Components show CONCRETE CSS implementations.
- 945 lines. 10 minutes.

**Read 5 (CONDITIONAL, if composing multi-section pages):** compositional-rules.md
- WHY FIFTH: Combination grammar. Only needed when assembling multiple sections/zones.
- 528 lines. 6 minutes.

**DO NOT READ:** soul-constraints.md (entirely covered by prohibitions.md for a builder).

**Total for builder: 2,067 lines (tokens + prohibitions + mechanisms + components), ~24 minutes.**
**With grammar: 2,595 lines, ~30 minutes.**

### For an AUDITOR agent:

**Read 1:** prohibitions.md (what's forbidden — auditor's primary job)
**Read 2:** tokens.css (verify values against token definitions)
**Read 3:** compositional-rules.md (verify grammar compliance)
**Read 4:** mechanism-catalog.md (verify mechanism deployment)
**Read 5:** components.css (verify component implementation)

**DO NOT READ:** soul-constraints.md (auditors need rules, not philosophy).

### For a RESEARCHER agent:

**Read 1:** soul-constraints.md (philosophy first — understand WHY)
**Read 2:** prohibitions.md (full constraint landscape)
**Read 3:** mechanism-catalog.md (full vocabulary)
**Read 4:** compositional-rules.md (full grammar)
**Read 5:** tokens.css (implementation details)
**Read 6:** components.css (implementation library)

**Researchers read EVERYTHING, philosophy-first.**

### Key Insight: Reading Order Should Be Role-Dependent

The current CLAUDE.md prescribes a fixed order (prohibitions -> tokens -> everything else). But this order serves BUILDERS. Auditors need prohibitions FIRST (enforcement-first). Researchers need soul-constraints FIRST (philosophy-first).

**The dynamic reading model should expose 3 reading paths, not 1.**

---

## 9. WHAT'S SERVING THE BUILDER vs WHAT'S SERVING PIPELINE PROCESS

| Content | Serves Builder? | Serves Pipeline? | Lines |
|---------|----------------|------------------|-------|
| tokens.css (all) | YES | no | 184 |
| components.css (all) | YES | no | 945 |
| prohibitions.md #1-8 (absolute) | YES (enforcement) | no | ~90 |
| prohibitions.md #9-18 (conditional) | YES (enforcement) | no | ~160 |
| prohibitions.md #19-20 (meta) | no | YES (process) | ~25 |
| prohibitions.md #21-22 (spatial) | YES (enforcement) | also YES (experiment-derived) | ~65 |
| soul-constraints.md (philosophy) | PARTIALLY (understanding) | YES (justification) | ~200 |
| soul-constraints.md (validation checklist) | YES | no | ~15 |
| soul-constraints.md (violations) | no | YES (process framing) | ~30 |
| mechanism-catalog.md (18 mechanisms) | YES | no | ~560 |
| mechanism-catalog.md (tier selection logic) | no | YES (orchestrator) | ~30 |
| mechanism-catalog.md (transitions) | YES (composition) | also YES (grammar) | ~80 |
| mechanism-catalog.md (restraint) | no | YES (gates) | ~40 |
| compositional-rules.md (nesting, spacing, zones) | YES | no | ~170 |
| compositional-rules.md (density limits) | no | YES (gates) | ~40 |
| compositional-rules.md (anti-patterns) | no | YES (gates) | ~40 |
| compositional-rules.md (fractal rules) | PARTIALLY | YES (gates) | ~40 |
| compositional-rules.md (open questions) | no | YES (research) | ~30 |

**Summary:**
- **Serves builder ONLY:** ~2,065 lines (65%)
- **Serves pipeline ONLY:** ~275 lines (9%)
- **Serves BOTH:** ~255 lines (8%)
- **Serves neither (pure meta):** ~577 lines (18% — philosophy, process framing, open questions)

**The 18% "serves neither" is almost entirely soul-constraints.md.** This file serves RESEARCHERS and provides JUSTIFICATION, but an active builder gets nothing from it that prohibitions.md doesn't already provide more efficiently.

---

## 10. SUMMARY FINDINGS

1. **The four categories (IDENTITY/VOCABULARY/GRAMMAR/RULES) are real and useful, but every file bleeds across boundaries.** The most common leak is GRAMMAR content appearing in non-grammar files.

2. **soul-constraints.md is the most redundant file.** 70% overlap with prohibitions.md, serves philosophy/justification rather than building. A builder never needs to read it.

3. **Transition grammar is split between two files** (mechanism-catalog and compositional-rules) with inconsistent naming (HARD CUT vs SMOOTH/BRIDGE/BREATHING). This is the most confusing overlap.

4. **Reading order should be role-dependent.** Builders need tokens-first. Auditors need prohibitions-first. Researchers need philosophy-first.

5. **~18% of content across all 6 files serves pipeline process, not builders.** This process content (meta-prohibitions, tier selection logic, restraint protocols, density gates, open questions) could be separated into a pipeline-facing file.

6. **The biggest gap is decision trees.** A builder asking "what do I do when X?" must synthesize across 3+ files. Pre-computed decision trees would reduce cognitive load significantly.

7. **For the dynamic-6f experiment agent:** The agent should read files in this order: tokens.css -> prohibitions.md -> mechanism-catalog (mechanisms only) -> components.css. Compositional-rules.md only if building multi-section compositions. soul-constraints.md NEVER (unless researching).

---

**END TAXONOMY ANALYSIS**
