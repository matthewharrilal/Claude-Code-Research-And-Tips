# Pattern Selection Framework
## How to Choose Patterns for Any Page

**Research Agent:** pattern-selector (Task #4)
**Sources:** PATTERN-INDEX.md, density-patterns.md, organizational-patterns.md, axis-patterns.md, combination-rules.md, R5-COMBINATION-THEORY.md, R1-DOCUMENTATION-PATTERNS.md, OVERVIEW.md

---

## Executive Summary

Pattern selection in the KortAI design system is **largely deterministic at the macro level but judgment-based at the micro level**. The 3-way equivalence (Axis IS Organization IS Density, AD-F-023) means that choosing ONE dimension automatically determines the other two. The primary decision point is content type classification, which maps 1:1 to an organizational pattern. From there, density and axis follow as identity relationships, not separate choices. The framework naturally produces significant variety through component-level decisions (R5 recipes), fractal scale variation, and secondary density patterns -- even when two pages share the same macro pattern.

---

## Part 1: The Selection Algorithm

### Step 1: Classify Content Type (THE Critical Decision)

This is the only genuinely difficult step. Everything else cascades.

| Content Signal | Classification | Org Pattern |
|---------------|---------------|-------------|
| Natural Q&A flow, questions drive structure | Conversational | OD-001 |
| Progressive complexity, builds on prior concepts | Narrative Arc | OD-002 |
| Discrete "do this" steps, independently valuable tasks | Task-Based | OD-003 |
| Certainty varies, mixing facts with speculation | Confidence-Based | OD-004 |
| Central overview with explorable subtopics | Spatial/Map | OD-005 |
| Shifts between multiple organizational modes | Creative/Emergent | OD-006 |

**Decision Heuristics (from research synthesis):**

1. **"What's the reader's primary question?"**
   - "How does X work?" -> Narrative (OD-002)
   - "How do I do X?" -> Task-Based (OD-003)
   - "What is X?" with Q&A -> Conversational (OD-001)
   - "Should I use X?" -> Confidence-Based (OD-004)
   - "What's available?" -> Spatial (OD-005)
   - All of the above on one page -> Creative/Emergent (OD-006)

2. **"Does the content have a natural arc?"**
   - Yes, simple to complex -> Narrative (CRESCENDO density emerges)
   - Yes, alternating -> Conversational (PULSE density emerges)
   - No, each section is independent -> Task-Based (ISLANDS density emerges)

3. **"Can sections be reordered without losing meaning?"**
   - No -> Narrative (order is essential to the arc)
   - Yes, completely -> Task-Based or Spatial
   - Partially (strata matter) -> Confidence-Based

### Step 2: Density Pattern (AUTOMATIC -- Not a Separate Choice)

Per OD-F-005 ("Organization IS Density"), choosing the organizational pattern **automatically determines** the density pattern. This is not a recommendation -- it is an identity relationship.

| Org Pattern | Primary Density | Secondary Density | Why Automatic |
|------------|----------------|-------------------|---------------|
| Conversational | PULSE | TIDAL | Q&A alternation IS inhale/exhale rhythm |
| Narrative Arc | CRESCENDO | -- | Exposition-to-climax IS sparse-to-dense |
| Task-Based | ISLANDS | BOOKENDS | Discrete tasks ARE dense clusters in sparse sea |
| Confidence-Based | GEOLOGICAL | CRESCENDO | Certainty strata ARE geological layers |
| Spatial | WAVE | ISLANDS | Hub-spoke IS sparse-dense oscillation |
| Creative/Emergent | ALL (FRACTAL primary) | -- | Mode shifts generate mode-appropriate density |

**Key insight:** You do not "pair" a density pattern with an organizational pattern. You choose one, and the other IS the same phenomenon from a different perspective.

### Step 3: Axis Layout (AUTOMATIC -- Also Not a Separate Choice)

Per AD-F-023 ("ATTENTION TOPOLOGY"), the axis pattern is the THIRD name for the same phenomenon.

| Org Pattern | Axis Pattern | Equivalence Mechanism |
|------------|-------------|----------------------|
| Conversational | Z-Pattern | Temporal: Z-sweep IS PULSE beat |
| Narrative Arc | F-Pattern | Temporal: typography compression IS CRESCENDO |
| Task-Based | Bento Grid | Spatial: grid cells ARE islands |
| Confidence-Based | Spiral | Proportional: nesting IS geological strata |
| Spatial | Choreography | Kinetic: direction change IS density change |
| Creative/Emergent | Compound | Gravitational + Meta: sequential axis cycling |

### Step 4: Apply FRACTAL Self-Similarity (MANDATORY, All Pages)

DD-F-006 requires the same dense/sparse rhythm at 5 scales:

1. **Navigation** -- Document-level structure reflects internal patterns
2. **Page** -- Section-level dense/sparse oscillation
3. **Section** -- Paragraph-level rhythm within sections
4. **Component** -- Dense/sparse zones within components
5. **Character** -- Font trio (serif/sans/mono) density signals

### Step 5: Apply Component Combination Rules (WHERE VARIETY EMERGES)

This is where the judgment-based decisions happen. R5-COMBINATION-THEORY provides:

- **4 combination rules:** velocity sequencing, temperature flow, weight balance, semantic proximity
- **6 recipes** for common page types (see Part 3 below)
- **Component compatibility matrix:** which components pair well
- **Anti-patterns:** 7 specific patterns to avoid

### Step 6: Verify Soul Compliance (BINARY, NOT JUDGMENT)

| Soul Piece | Check | Binary? |
|-----------|-------|---------|
| #1 Sharp Edges | border-radius: 0 everywhere | YES |
| #2 Archivist Serif | Wisdom content in serif italic | YES |
| #3 Family DNA | Callouts 2-zone + 4px left | YES |
| #4 No Shadows | box-shadow: none everywhere | YES |
| #5 Squares Signal | Procedures use squares | YES |

---

## Part 2: Is Selection Deterministic or Judgment-Based?

### Deterministic Elements (Binary -- Agent-Safe)

| Decision | How Determined | Judgment Required? |
|---------|---------------|-------------------|
| Org pattern -> Density pattern | Identity relationship (OD-F-005) | NO |
| Org pattern -> Axis pattern | Identity relationship (AD-F-023) | NO |
| Fractal self-similarity requirement | Mandatory on all pages (DD-F-006) | NO |
| Soul compliance | 5 binary checks | NO |
| Max 2 callouts per viewport | Quantitative rule | NO |
| Traffic light rule (no Tip adjacent Gotcha) | Binary anti-pattern | NO |
| Same-velocity stacking prohibition | Binary anti-pattern | NO |
| Max depth: 1 level nesting | Binary constraint | NO |

### Judgment-Based Elements (Require Human/Agent Interpretation)

| Decision | Nature of Judgment | Guidance Available |
|---------|-------------------|-------------------|
| **Content type classification** | "Is this Q&A or narrative?" | Heuristics in Step 1 above |
| **Component selection within sections** | "Do I need a Decision Matrix here or a Reasoning component?" | R5 recipes (Part 3), component moods (R5 Framework R2) |
| **Component sequencing** | "What order should these 4 components be in?" | R5 Principle S1 (Setup-Payoff Arc), S3 (First Component Rule) |
| **Spacing choices** | "Tight (8-16px) or loose (48-64px)?" | R5 Principle G1 (Semantic Proximity) |
| **Fractal rhythm tuning** | "Exactly how to echo the macro pattern at micro scales" | Validated explorations as reference |
| **Section boundaries** | "Where does one section end and the next begin?" | Content-specific, no formula |
| **Whether content is truly one page or should be split** | "Is this too much for a single document?" | R1-003 (Viewport Principle: 1 concept per viewport) |

### The Key Ratio

**~60% deterministic, ~40% judgment-based.**

The macro structure (org + density + axis) is fully deterministic once content type is classified. The micro structure (which components, what order, what spacing) requires editorial judgment guided by R5 combination theory. This is by design -- the system constrains the structure while leaving room for content-responsive detail.

---

## Part 3: R5 Recipes Mapped to Real Page Types

R5 provides 6 recipes. Here's how they map to real documentation scenarios:

### Recipe 1: Quick Reference -> CONVERSATIONAL (OD-001)

**Real examples:** API endpoint docs, method reference, FAQ pages

```
Pattern: Z-Pattern axis, PULSE density
Components:
  [Info Callout] -- Brief context
  [Code Snippet] -- Example
  [Tip Callout] -- Practical note
```

Each Q&A pair forms one Z-sweep cycle = one PULSE beat. Minimal complexity.

### Recipe 2: Deep Dive -> NARRATIVE (OD-002)

**Real examples:** Architecture explanations, concept guides, "How X Works"

```
Pattern: F-Pattern axis, CRESCENDO density
Components:
  [Info Callout] -- Context and prerequisites (Act I, sparse)
  [Essence Callout] -- Core principle (Act I/II transition)
  [Core Abstraction] -- Principle + code proof (Act II, moderate)
  [Code Snippet] -- Extended example (Act III, dense)
  [Gotcha Callout] -- Common mistakes (Act III/IV)
  [Task Component] -- Try-it-yourself checklist (Act V, resolution)
```

Progressive complexity mirrors CRESCENDO. F-pattern vertical descent matches text-heavy progressive reading.

### Recipe 3: Decision Guide -> CONFIDENCE-BASED (OD-004)

**Real examples:** Technology evaluation, framework comparison, "Which to Choose"

```
Pattern: Spiral axis, GEOLOGICAL density
Components:
  [Info Callout] -- Decision context (outer ring, sparsest)
  [Decision Matrix] -- Options comparison (middle ring)
  [Reasoning Component] -- Analysis with recommendation (core ring, densest)
  [Task Component] -- Implementation steps for chosen option
```

Established facts = sparse outer ring. Uncertain comparisons = dense inner core.

### Recipe 4: Troubleshooting -> CONVERSATIONAL (OD-001) with Task elements

**Real examples:** Error resolution guides, debugging workflows

```
Pattern: Z-Pattern axis, PULSE density
Components:
  [Gotcha Callout] -- The error you're seeing (sparse question)
  [Decision Matrix] -- Possible causes (dense answer)
  [Code Snippet] -- Diagnostic code
  [Task Component] -- Fix steps
  [Tip Callout] -- Prevention advice
```

Natural Q&A: "What went wrong?" (sparse) -> "Here's the diagnosis" (dense).

### Recipe 5: Tutorial Section -> TASK-BASED (OD-003)

**Real examples:** Step-by-step setup, deployment procedures, onboarding steps

```
Pattern: Bento Grid axis, ISLANDS density
Components per island:
  [Info Callout] -- "In this section you'll learn..."
  [Task Component] -- Steps overview
  [Code Snippet] -- Step implementation
  [Tip Callout] -- Step advice
  [Gotcha Callout] -- Common mistake
  [Challenge Callout] -- Extension exercise
```

Each task island is independently valuable. Grid cells ARE islands. BOOKENDS framing at page level.

### Recipe 6: Architecture Overview -> SPATIAL (OD-005)

**Real examples:** System maps, component catalogs, feature documentation

```
Pattern: Choreography axis, WAVE density
Components:
  Hub:
    [File Tree] -- Directory/system structure (sparse overview)
    Territory cards -- Navigation grid
  Each spoke:
    [Core Abstraction] -- Organizing principle (dense detail)
    [Decision Matrix] -- Layer responsibilities
    [Tip Callout] -- Practical application
  Return-to-hub: Navigation link
```

Hub-spoke creates WAVE oscillation. Each spoke is a self-contained ISLAND.

---

## Part 4: How Much Variety Does the Framework Produce?

### Macro-Level: 6 Distinct Page Archetypes

Each org-density-axis triple produces a fundamentally different page structure, layout, and reading experience. These 6 archetypes look and feel distinctly different from each other.

### Micro-Level: Significant Variety Within Archetypes

Even within the same archetype, variety emerges from:

1. **Component selection** -- 11 components with compatibility matrix gives hundreds of valid sequences
2. **Component count** -- Short page (1 heavy, 3 callouts, 2 code) vs. long page (4-5 heavy, 8-10 callouts, 6-8 code)
3. **Secondary density patterns** -- Conversational gets TIDAL (width variation), Task-Based gets BOOKENDS
4. **Fractal rhythm tuning** -- Same pattern at 5 scales allows different emphasis
5. **Section granularity** -- How many sections, how long each section
6. **Internal layout variation** -- Bento grid AD-F-011: different cell templates (vertical steps, code-split, annotated, comparison)

### Can Two "Tutorial" Pages Look Different?

**YES -- substantially.** Here's how:

**Tutorial A: "Setting Up Authentication" (Task-Based / OD-003)**

This tutorial has discrete, independent steps:
- Axis: Bento Grid (6 cells, 3x2 grid)
- Density: ISLANDS (each task is a dense cluster)
- Components: Heavy on Code Snippets and Task Components
- BOOKENDS: Dense overview header + dense verification footer
- Cell templates: code-split (left prose, right code) for install steps, vertical steps for configuration
- Fractal: Page-level ISLANDS -> section-level task clusters -> component-level code/prose zones

**Tutorial B: "Understanding React Server Components" (Narrative / OD-002)**

This tutorial builds progressive understanding:
- Axis: F-Pattern (vertical descent with decreasing horizontal scans)
- Density: CRESCENDO (sparse intro -> dense architecture)
- Components: Heavy on Essence Callouts, Core Abstractions, progressive Code Snippets
- No BOOKENDS -- narrative arc provides its own framing
- Act structure: 5 Freytag beats (exposition, rising action, climax, falling action, resolution)
- Fractal: Page-level CRESCENDO -> section-level sparse/dense acts -> component-level density zones

These two tutorials would look, feel, and read completely differently -- even though both are "tutorials." The key differentiator is the content classification step: "do these steps" (Task-Based) vs. "understand this concept" (Narrative).

**Tutorial C: "Building Your First API" (Narrative + Task hybrid -> Creative/Emergent OD-006)**

Some tutorials legitimately shift modes:
- Sections 1-2: Narrative (explaining why), F-Pattern axis, CRESCENDO density
- Sections 3-5: Task-Based (step-by-step), Bento Grid axis, ISLANDS density
- Section 6: Conversational (FAQ), Z-Pattern axis, PULSE density
- Axis: Compound (sequential pattern cycling)
- Breathing zones between mode transitions (OD-F-007: 48px+ gaps)

This is the most complex variant and should be reserved for genuinely multi-modal content.

---

## Part 5: The Selection Decision Tree

```
START
  |
  v
"What is the reader's primary question?"
  |
  +-- "How do I do X?" (discrete steps) -------> TASK-BASED
  |     Axis: Bento Grid                          Density: ISLANDS + BOOKENDS
  |
  +-- "How does X work?" (progressive) --------> NARRATIVE
  |     Axis: F-Pattern                            Density: CRESCENDO
  |
  +-- "What is X?" (Q&A driven) ---------------> CONVERSATIONAL
  |     Axis: Z-Pattern                            Density: PULSE + TIDAL
  |
  +-- "Should I use X?" (certainty varies) -----> CONFIDENCE-BASED
  |     Axis: Spiral                               Density: GEOLOGICAL + CRESCENDO
  |
  +-- "What's available?" (explorable map) -----> SPATIAL
  |     Axis: Choreography                         Density: WAVE + ISLANDS
  |
  +-- Multiple of the above -------------------> CREATIVE/EMERGENT
        Axis: Compound                             Density: ALL (FRACTAL primary)
        (Use only when content genuinely shifts modes)

THEN: Apply FRACTAL at 5 scales (MANDATORY)
THEN: Select components using R5 recipes and combination rules
THEN: Verify soul compliance (5 binary checks)
```

---

## Part 6: Edge Cases and Ambiguity Resolution

### When Content Doesn't Clearly Fit

| Ambiguous Case | Resolution | Reasoning |
|---------------|-----------|-----------|
| Tutorial with both steps AND concepts | Check: can sections be reordered? If yes -> Task-Based. If no -> Narrative | The reorder test is the strongest discriminator |
| FAQ that builds progressively | If each Q&A is independent -> Conversational. If answers reference prior answers -> Narrative | Independence = ISLANDS. Dependence = CRESCENDO |
| Reference docs with confidence levels | If confidence is the organizing principle -> Confidence-Based. If it's a side concern -> add confidence callouts to primary pattern | Confidence-Based is for when certainty IS the structure |
| Multi-topic overview page | If hub-spoke fits (central index + explorable subtopics) -> Spatial. If it's more of a grab-bag -> Creative/Emergent | Spatial requires genuine hub-spoke topology |
| Very short page (< 500 words) | Usually Conversational (simplest pattern). Avoid Compound for short pages. | Short pages don't need complex organizational machinery |

### When Multiple Patterns Seem Equally Valid

The 3-way equivalence means you cannot mix-and-match at the macro level. You CANNOT use Conversational organization with Bento Grid axis -- that violates the identity relationship. If you're torn between two organizational patterns, the content type classification heuristics (Part 1, Step 1) should resolve the ambiguity.

**If genuinely undecidable:** Default to Narrative (OD-002). Narrative arc is the most forgiving pattern -- it works for almost any content that has some progression. It's the "safe default."

---

## Part 7: Framework Properties Summary

| Property | Value |
|----------|-------|
| **Total distinct page archetypes** | 6 (from 6 org patterns) |
| **Deterministic decisions** | ~60% (macro: org->density->axis, soul, anti-patterns) |
| **Judgment decisions** | ~40% (content classification, component selection, spacing, section boundaries) |
| **Variety within archetype** | HIGH (component count x sequencing x fractal tuning x section granularity) |
| **Can two same-type pages look different?** | YES, substantially |
| **Most common edge case** | Tutorial that mixes "understand" and "do" -> resolve via reorder test |
| **Safe default when undecided** | Narrative (OD-002) -- most forgiving arc |
| **Binary gate before any output** | Soul compliance (5 checks) -- always YES/NO |
| **Selection algorithm step count** | 6 steps (classify -> density -> axis -> fractal -> components -> soul) |
| **First 3 steps automated?** | YES -- once content type is classified, density and axis are determined |

---

## Part 8: Implications for Migration

1. **Content audit is the critical path.** Every page must be classified by content type before any pattern can be applied. This classification step is the only genuinely judgment-based macro decision.

2. **Migration is NOT "apply a CSS theme."** It requires structural reorganization of content to match the selected organizational pattern. A Task-Based page restructures content into discrete islands. A Narrative page restructures into progressive acts.

3. **The framework reduces migration to a repeatable process.** Classify -> apply triple (org+density+axis) -> compose with R5 recipes -> verify soul. Each step has defined inputs and outputs.

4. **Variety is a feature, not a bug.** Two different tutorial pages SHOULD look different if their content types differ. The system produces variety through content-responsive classification, not random decoration.

5. **The safe path is conservative classification.** When in doubt about content type, prefer simpler patterns (Conversational, Narrative, Task-Based) over complex ones (Confidence-Based, Spatial, Compound). Complex patterns require content that genuinely exhibits their structural features.

6. **Component combination is where the craft lives.** The macro structure is algorithmic. The micro structure (which components, what order, what spacing) is where editorial skill matters, guided but not dictated by R5's 20 core findings.

---

*Synthesized from 7 source files totaling ~3,500 lines of validated design system documentation.*
*Pattern selection framework validated against 337 research findings (R1-R5), 28 AD-F findings, 13 OD-F findings, 6 DD-F findings, and 95 EXT-* bespoke findings.*
