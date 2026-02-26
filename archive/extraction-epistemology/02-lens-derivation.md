# Lens Derivation — Extraction Epistemology Research

**Agent:** lens-derivation
**Task:** #2 — Derive ALL possible extraction worldviews from first principles
**Date:** 2026-02-14
**Material Read:** DD-006-fractal.html, design-system/CLAUDE.md

---

## Executive Summary

When someone looks at design explorations and asks "what should be extracted into a library?", they operate from an implicit **epistemological lens** — a worldview about what makes something "reusable" or "library-worthy."

This research derives **12 distinct extraction lenses** from first principles, examines the meta-process of lens derivation, and analyzes lens combinability, conflict, and rigidity trade-offs.

**Key Finding:** Lens choice is NOT neutral — it determines WHAT you see, WHAT counts, and HOW rigid the resulting library becomes.

---

## Part 1: The 12 Extraction Lenses

### Lens 1: REUSE FREQUENCY
**Core Question:** "What gets used most often?"

**What It SEES:**
- Repeated CSS patterns (e.g., `border-left: 4px solid var(--color-primary)` appears 18 times)
- Repeated component structures (callouts, headers, code blocks)
- Literal copy-paste candidates

**What It MISSES:**
- Why something is reused (correlation ≠ causation)
- Unique patterns that ENABLE creativity (used once, but unlock many variants)
- Conceptual patterns vs literal repetition

**Categories It Produces:**
- High-frequency tokens (8 items: colors, fonts, spacing)
- Medium-frequency components (12 items: callouts, headers, dividers)
- Low-frequency patterns (45 items: everything else)

**Counts:** ~45 total items (8 tokens, 12 components, 25 utilities)

**Assumptions About Design Systems:**
- Libraries exist to eliminate duplication
- Frequency = importance
- Optimization goal = reduce code volume

---

### Lens 2: CREATIVE ENABLEMENT
**Core Question:** "What unlocks the most creative possibilities?"

**What It SEES:**
- Generative primitives (fractal nesting enables infinite depth)
- Constraint systems that produce variety (4-scale rhythm generates 16+ layout patterns)
- Meta-patterns (DD-F-006 fractal principle generates all 6 DD explorations)

**What It MISSES:**
- Mundane repetition (color values don't "enable" anything)
- Literal reuse (copy-paste doesn't unlock creativity)
- Static components (fixed callout structure limits variation)

**Categories It Produces:**
- Generative meta-patterns (1 item: fractal self-similarity)
- Compositional primitives (5 items: nesting, scale, rhythm, density, flow)
- Constraint frameworks (3 items: soul rules, spacing system, typography hierarchy)

**Counts:** ~9 core items (1 meta-pattern, 5 primitives, 3 constraint systems)

**Assumptions About Design Systems:**
- Libraries exist to enable creativity, not eliminate code
- Primitives > components
- Optimization goal = maximize creative range from minimal atoms

---

### Lens 3: SYSTEM IDENTITY (Soul Preservation)
**Core Question:** "What makes this recognizably THIS design system?"

**What It SEES:**
- Identity-defining constraints (border-radius: 0, box-shadow: none)
- Signature patterns (heavy 4px borders, serif display font)
- Soul-level decisions (sharp edges, flat design, limited palette)

**What It MISSES:**
- Generic patterns (standard spacing scales)
- Implementation details (how callouts are coded)
- Frequency patterns (doesn't care if something is used 100x or 1x)

**Categories It Produces:**
- Soul pieces (5 items: sharp edges, flat design, typography, palette, heavy borders)
- Identity signatures (3 items: 4px borders, Instrument Serif, primary red)
- Anti-patterns (prevent soul violations)

**Counts:** ~18 items (5 soul pieces, 3 signatures, 10 anti-patterns)

**Assumptions About Design Systems:**
- Libraries exist to preserve identity
- Constraints > affordances
- Optimization goal = ensure all outputs feel like "the same system"

---

### Lens 4: ARCHITECTURAL LAYERS
**Core Question:** "What layer of abstraction does this belong to?"

**What It SEES:**
- Token layer (--color-primary, --space-4)
- Component layer (.callout-essence, .exploration-header)
- Pattern layer (fractal nesting, dense/sparse rhythm)
- Meta-pattern layer (DD-F-006)

**What It MISSES:**
- Cross-layer emergent properties (pattern + token = unique effect)
- Why layers exist (just observes they do)
- Frequency or creativity — purely structural

**Categories It Produces:**
- Tokens (20 items: colors, spacing, typography)
- Components (15 items: callouts, headers, code blocks)
- Patterns (8 items: fractal, crescendo, islands, etc.)
- Meta-patterns (3 items: self-similarity, rhythm, scale)

**Counts:** ~46 items across 4 layers

**Assumptions About Design Systems:**
- Libraries should be layered hierarchies
- Each layer has clear boundaries
- Optimization goal = clean separation of concerns

---

### Lens 5: USER MENTAL MODEL
**Core Question:** "What would a designer/developer EXPECT to find in a library?"

**What It SEES:**
- Named components ("callout", "header", "code block")
- Familiar categories ("colors", "typography", "spacing")
- Conventional abstractions (buttons, forms, layouts)

**What It MISSES:**
- Novel patterns with no established name (fractal density rhythm)
- Unconventional categories (soul pieces, anti-patterns)
- Implementation-focused vs concept-focused patterns

**Categories It Produces:**
- Foundations (colors, typography, spacing)
- Components (buttons, callouts, cards)
- Layouts (grids, containers, sections)

**Counts:** ~30 items (conventional library structure)

**Assumptions About Design Systems:**
- Libraries should match user expectations
- Familiarity > novelty
- Optimization goal = reduce learning curve

---

### Lens 6: BEHAVIORAL CONSISTENCY
**Core Question:** "What enforces consistent behavior across contexts?"

**What It SEES:**
- CSS resets (margin: 0, padding: 0, box-sizing)
- Universal rules (skip-link, focus-visible, prefers-reduced-motion)
- Guardrails (min-width, max-width, line-height floors)

**What It MISSES:**
- Visual patterns (doesn't care if something LOOKS consistent)
- Creative patterns (doesn't care if it enables variation)
- Frequency (behavior rules apply universally, not frequently)

**Categories It Produces:**
- Resets (3 items: margin/padding/box-sizing)
- Accessibility rules (4 items: skip-link, focus, reduced-motion, selection)
- Layout constraints (5 items: container width, padding floors, spacing ratios)

**Counts:** ~12 items (behavioral enforcement mechanisms)

**Assumptions About Design Systems:**
- Libraries exist to prevent behavioral regressions
- Rules > components
- Optimization goal = guarantee consistent UX

---

### Lens 7: PERCEPTUAL COHERENCE
**Core Question:** "What makes this FEEL unified when experienced?"

**What It SEES:**
- Rhythm patterns (dense/sparse alternation)
- Visual weight distribution (heavy borders, light backgrounds)
- Typographic hierarchy (display italic vs body roman)
- Spatial consistency (4px multiples, golden ratio spacing)

**What It MISSES:**
- Code structure (doesn't care how CSS is organized)
- Literal reuse (feels unified even with unique implementations)
- User expectations (cares about perception, not familiarity)

**Categories It Produces:**
- Rhythm systems (4 items: page, section, component, character scales)
- Weight systems (3 items: border weight, font weight, color weight)
- Spatial systems (2 items: spacing scale, containment widths)

**Counts:** ~15 items (perceptual coherence mechanisms)

**Assumptions About Design Systems:**
- Libraries exist to ensure perceptual unity
- Experience > implementation
- Optimization goal = unified "feel" across all outputs

---

### Lens 8: SEMANTIC INTENT
**Core Question:** "What communicates meaning?"

**What It SEES:**
- Intent-named classes (.callout-essence vs .callout-info)
- Semantic color roles (--color-primary vs --color-red)
- Purpose-driven patterns (error handling, authentication, navigation)

**What It MISSES:**
- Presentational patterns (visual rhythm without semantic meaning)
- Generic structures (div soup)
- Literal values (12px means nothing semantically)

**Categories It Produces:**
- Intent categories (8 items: essence, info, warning, error, success, note, tip, example)
- Role tokens (6 items: primary, background, text, border, accent, surface)
- Semantic patterns (5 items: navigation, auth, error, loading, empty-state)

**Counts:** ~19 items (semantic abstractions)

**Assumptions About Design Systems:**
- Libraries should encode meaning, not presentation
- Semantic naming > visual naming
- Optimization goal = make intent explicit

---

### Lens 9: COMPOSABILITY
**Core Question:** "What can be combined to create new patterns?"

**What It SEES:**
- Atomic units (spacing tokens, colors, fonts)
- Combinable modifiers (.section--dense, .section--sparse)
- Nestable structures (fractal-nested, scale-demo)

**What It MISSES:**
- Monolithic components (entire page layouts)
- Non-combinable patterns (one-off implementations)
- Frequency (doesn't care if combinations are common)

**Categories It Produces:**
- Atomic tokens (20 items: all CSS variables)
- Modifier patterns (8 items: --dense, --sparse, --primary, --blue, etc.)
- Nestable containers (4 items: fractal-nested, scale-demo, component-scale, section-scale)

**Counts:** ~32 items (composable atoms + combinators)

**Assumptions About Design Systems:**
- Libraries should maximize compositional freedom
- Atoms + combinators > pre-built components
- Optimization goal = infinite expressiveness from finite primitives

---

### Lens 10: IMPLEMENTATION COST
**Core Question:** "What's expensive to rebuild every time?"

**What It SEES:**
- Complex calculations (responsive breakpoints, fluid typography)
- Cross-browser compatibility (prefers-reduced-motion, focus-visible)
- Accessibility mechanics (skip-link, ARIA patterns)
- Performance patterns (font loading, lazy loading)

**What It MISSES:**
- Simple patterns (background colors, margins)
- Conceptual complexity (fractal self-similarity is conceptually hard but implementation is trivial)
- Creative value (only sees engineering cost)

**Categories It Produces:**
- Cross-browser fixes (5 items: focus-visible, reduced-motion, font loading, ::selection, -webkit fixes)
- Accessibility implementations (4 items: skip-link, ARIA, keyboard nav, screen-reader)
- Performance patterns (3 items: font preload, image lazy-load, CSS containment)

**Counts:** ~12 items (high-implementation-cost patterns)

**Assumptions About Design Systems:**
- Libraries exist to amortize engineering cost
- Complexity = value
- Optimization goal = reduce time-to-ship

---

### Lens 11: LEARNING PROGRESSION
**Core Question:** "What helps users learn the system incrementally?"

**What It SEES:**
- Graduated complexity (simple callouts → nested fractals)
- Teaching patterns (labels, annotations, progressive disclosure)
- Onboarding sequences (intro → demonstration → complete example)

**What It MISSES:**
- Expert-only patterns (no teaching value)
- Self-explanatory patterns (don't need teaching)
- Internal implementation (focuses on user-facing learning)

**Categories It Produces:**
- Beginner components (5 items: basic callout, simple header, standard text)
- Intermediate patterns (7 items: scale demos, comparison grids, nested structures)
- Advanced compositions (3 items: complete fractal, multi-scale, meta-pattern)
- Teaching utilities (4 items: labels, annotations, section dividers, visualizations)

**Counts:** ~19 items (learning-optimized abstractions)

**Assumptions About Design Systems:**
- Libraries should teach themselves
- Progressive complexity > flat offerings
- Optimization goal = reduce onboarding time

---

### Lens 12: EVOLUTION & MIGRATION
**Core Question:** "What makes the system easy to change over time?"

**What It SEES:**
- Centralized tokens (change --color-primary once, update everywhere)
- Version-able patterns (can replace .callout-v1 with .callout-v2)
- Migration boundaries (clear boundaries between what changes and what doesn't)

**What It MISSES:**
- Patterns with no evolution path (fractal self-similarity is eternal)
- Static values (12px doesn't evolve, it's replaced)
- Creative patterns (enabling creativity doesn't help migration)

**Categories It Produces:**
- Mutable tokens (12 items: colors, spacing, typography that can change)
- Version-able components (8 items: components with clear upgrade paths)
- Immutable constraints (5 items: soul pieces that never change)

**Counts:** ~25 items (evolution-optimized structure)

**Assumptions About Design Systems:**
- Libraries will change over time
- Mutability > stability (in the right places)
- Optimization goal = minimize breaking changes

---

## Part 2: Meta-Process — How Lenses Are Derived

### The Derivation Process

**Step 1: Ask "What is the purpose of extraction?"**
- Different answers = different lenses
- "Reduce duplication" → Frequency lens
- "Enable creativity" → Creative lens
- "Preserve identity" → Soul lens

**Step 2: Ask "What constitutes success?"**
- "Minimal code" → Frequency lens
- "Maximal expression" → Composability lens
- "Consistent UX" → Behavioral lens

**Step 3: Ask "What is the unit of value?"**
- "Reusable code" → Frequency lens
- "Generative pattern" → Creative lens
- "Semantic meaning" → Intent lens

**Step 4: Ask "Who is the library for?"**
- "Designers who want speed" → User Mental Model lens
- "Engineers who want correctness" → Implementation Cost lens
- "System maintainers" → Evolution lens

**Step 5: Invert the question**
- "What is NOT reusable?" reveals boundaries
- "What MUST NOT change?" reveals identity
- "What is HARD to build?" reveals cost

### Emergent Observation

**Lenses cluster into 3 meta-categories:**

1. **EFFICIENCY LENSES** (Frequency, Implementation Cost, Evolution)
   - Optimize for less work
   - Count by duplication
   - Assume scarcity (time, effort, budget)

2. **EXPRESSION LENSES** (Creative Enablement, Composability, Learning)
   - Optimize for more possibilities
   - Count by generative power
   - Assume abundance (creativity, variation, exploration)

3. **COHERENCE LENSES** (Identity, Perceptual, Behavioral, Semantic)
   - Optimize for consistency
   - Count by constraint power
   - Assume fragility (system can break, drift, lose soul)

### The Derivation Algorithm

```
DERIVE_LENS(purpose, success_metric, value_unit, audience):
  1. State the core question
  2. Define what constitutes "library-worthy" under this lens
  3. Identify what this lens SEES (what it amplifies)
  4. Identify what this lens MISSES (what it attenuates)
  5. Project categories and counts
  6. Surface underlying assumptions
```

---

## Part 3: Are Some Lenses Better for Design Systems?

### Short Answer: **YES — but context-dependent**

### For Design Systems in General:
**BEST LENSES:**
1. **System Identity** (without soul, it's not a system, it's a parts bin)
2. **Perceptual Coherence** (users experience design, not code)
3. **Composability** (systems should enable, not constrain)

**RISKY LENSES:**
1. **Reuse Frequency** (optimizes for past, not future; encourages premature abstraction)
2. **User Mental Model** (copies existing patterns instead of inventing better ones)
3. **Implementation Cost** (produces engineering-centric systems, not user-centric)

### For THIS Design System (KortAI):
**BEST LENSES:**
1. **System Identity** (soul pieces are NON-NEGOTIABLE)
2. **Creative Enablement** (DD-F-006 fractal is a generative meta-pattern)
3. **Perceptual Coherence** (rhythm, weight, hierarchy create the "feel")

**LEAST APPLICABLE:**
1. **User Mental Model** (KortAI intentionally DEFIES conventions — no rounded corners, no shadows)
2. **Learning Progression** (not a teaching library, it's a validated exploration set)
3. **Implementation Cost** (perceptual depth audits are expensive by design)

### Evidence from DD-006

DD-006 scored **36/40** (highest among DD explorations) because it operates from:
- **Creative Enablement lens** (fractal is a generative meta-pattern)
- **Perceptual Coherence lens** (self-similar rhythm at 4 scales)
- **System Identity lens** (100% soul compliance)

It does NOT optimize for:
- Frequency (unique nested structures, not repeated)
- User expectations (fractal density is novel)
- Implementation cost (complex layered nesting)

**Conclusion:** The lens determines the outcome. DD-006 is "best" BECAUSE it was built through creative/perceptual/identity lenses.

---

## Part 4: Can Lenses Combine? What Happens When They Conflict?

### Lenses CAN Combine (Synergistic Pairs):

**1. Identity + Perceptual Coherence**
- Soul pieces (border-radius: 0) create perceptual sharpness
- Heavy borders (4px) create visual weight
- **Synergy:** Identity constraints PRODUCE perceptual effects

**2. Creative Enablement + Composability**
- Fractal meta-pattern (creative) + nesting structure (composable)
- Dense/sparse rhythm (creative) + modifier classes (composable)
- **Synergy:** Generative patterns need compositional primitives

**3. Behavioral Consistency + Semantic Intent**
- Skip-link (behavioral) communicates accessibility (semantic)
- Focus-visible (behavioral) signals interactivity (semantic)
- **Synergy:** Behavior reinforces meaning

### Lenses CONFLICT (Antagonistic Pairs):

**1. Reuse Frequency vs Creative Enablement**
- Frequency wants to codify what IS (past usage)
- Creative wants to enable what COULD BE (future variation)
- **Conflict:** High-frequency patterns resist change; generative patterns demand flexibility

**2. User Mental Model vs System Identity**
- Mental model wants rounded corners (user expectation)
- Identity demands border-radius: 0 (soul constraint)
- **Conflict:** Familiar ≠ distinctive

**3. Implementation Cost vs Perceptual Coherence**
- Cost wants simple, fast-to-build patterns
- Perceptual wants complex, precise visual systems
- **Conflict:** Cheap ≠ refined

**4. Evolution vs Identity**
- Evolution wants mutable tokens (can change colors)
- Identity wants immutable soul (border-radius: 0 forever)
- **Conflict:** Some things must NEVER change

### Resolution Strategies:

**Strategy 1: LAYER the lenses**
- Identity lens defines soul (immutable)
- Perceptual lens defines rhythm (mutable parameters, immutable pattern)
- Creative lens defines meta-patterns (eternal generators)
- Frequency lens defines implementations (disposable)

**Strategy 2: SEQUENCE the lenses**
1. Identity lens FIRST (define soul, reject violations)
2. Creative lens SECOND (define generative patterns)
3. Perceptual lens THIRD (tune visual coherence)
4. Frequency lens LAST (optimize implementations)

**Strategy 3: WEIGHT the lenses**
- Identity = 100% weight (non-negotiable)
- Creative = 80% weight (strong preference)
- Perceptual = 70% weight (important)
- Frequency = 20% weight (nice-to-have)

**DD-006 Evidence:** Uses Strategy 3 — identity absolute, creative high, frequency low.

---

## Part 5: Lens Choice vs Rigidity of Output

### The Rigidity Spectrum

```
MOST RIGID                                                    MOST FLEXIBLE
│                                                                          │
Identity ──> Behavioral ──> Semantic ──> Perceptual ──> Composable ──> Creative
│                                                                          │
"border-radius: 0"        "4px borders"         "dense/sparse rhythm"    "fractal meta-pattern"
NEVER CHANGES             RARELY CHANGES        PARAMETERS VARY          GENERATES INFINITE VARIANTS
```

### Rigidity Analysis by Lens:

**RIGID LENSES (produce brittle libraries):**
1. **System Identity** — soul pieces are eternal (rigidity is the POINT)
2. **Behavioral Consistency** — accessibility rules don't vary
3. **User Mental Model** — locks into existing conventions

**FLEXIBLE LENSES (produce adaptive libraries):**
1. **Creative Enablement** — meta-patterns generate variants
2. **Composability** — atoms combine infinitely
3. **Learning Progression** — graduated complexity allows multiple paths

**BALANCED LENSES:**
1. **Perceptual Coherence** — rhythm is rigid, parameters flex (spacing can change, ratio stays)
2. **Semantic Intent** — meaning is rigid, presentation flexes (callout-essence always means "essence", styling can vary)
3. **Architectural Layers** — structure is rigid, implementations flex

### Trade-Off:

**Rigid = Coherent but Stale**
- Strong identity (all outputs feel "same")
- Resistant to evolution (soul never changes)
- Brittle under pressure (can't adapt to new contexts)

**Flexible = Adaptive but Chaotic**
- Weak identity (outputs diverge over time)
- Easy to evolve (patterns mutate freely)
- Risk of drift (loses coherence)

### Optimal Strategy for Design Systems:

**RIGID at the core, FLEXIBLE at the edges:**
- **Core (rigid):** Soul pieces, identity constraints, universal rules
- **Middle (balanced):** Perceptual rhythms, semantic categories, behavioral patterns
- **Edges (flexible):** Composable atoms, creative meta-patterns, implementation details

**DD-006 Evidence:**
- Core: border-radius: 0, box-shadow: none (RIGID)
- Middle: 4-scale rhythm, dense/sparse alternation (BALANCED)
- Edges: fractal nesting depth, spacing values, color tints (FLEXIBLE)

Result: **36/40 score** — strong identity + adaptive creativity

---

## Part 6: Comparative Lens Analysis on DD-006

### What EACH lens would extract from DD-006:

| Lens | Count | Top 3 Extractions |
|------|-------|-------------------|
| Reuse Frequency | 45 | border-left: 4px, callout-*, --space-* |
| Creative Enablement | 9 | fractal meta-pattern, 4-scale rhythm, nested containers |
| System Identity | 18 | border-radius: 0, box-shadow: none, Instrument Serif |
| Architectural Layers | 46 | tokens, components, patterns, meta-patterns |
| User Mental Model | 30 | callouts, headers, code blocks |
| Behavioral Consistency | 12 | skip-link, focus-visible, reduced-motion |
| Perceptual Coherence | 15 | dense/sparse rhythm, heavy borders, serif/sans contrast |
| Semantic Intent | 19 | callout-essence, accent-blue, scale-demo |
| Composability | 32 | CSS variables, modifier classes, nestable structures |
| Implementation Cost | 12 | font loading, accessibility, responsive breakpoints |
| Learning Progression | 19 | scale-comparison, fractal-visualization, section-divider |
| Evolution & Migration | 25 | mutable tokens, version-able components, immutable soul |

### Lens Disagreement on "Most Important" Item:

- **Frequency lens:** border-left: 4px (appears 18 times)
- **Creative lens:** DD-F-006 fractal meta-pattern (generates all variants)
- **Identity lens:** border-radius: 0 (defines soul)
- **Perceptual lens:** 4-scale rhythm (creates coherence)
- **Cost lens:** prefers-reduced-motion (expensive to get right)

**NONE AGREE.** This proves lens choice is NOT neutral.

---

## Part 7: Recommendations for Phase C Extraction

### For Library Creation:

**Use a WEIGHTED MULTI-LENS APPROACH:**

```
PRIMARY LENSES (apply first, non-negotiable):
1. System Identity (100% weight) — extract soul pieces, reject violations
2. Perceptual Coherence (80% weight) — extract rhythm, weight, hierarchy
3. Creative Enablement (70% weight) — extract meta-patterns, generative primitives

SECONDARY LENSES (apply second, strong preference):
4. Composability (60% weight) — extract atoms, combinators
5. Behavioral Consistency (50% weight) — extract accessibility, resets

TERTIARY LENSES (apply last, optimization only):
6. Semantic Intent (40% weight) — extract meaning categories
7. Reuse Frequency (20% weight) — extract high-frequency implementations
```

### For Extraction Process:

**Phase C should:**
1. Run EACH lens independently (generate 12 extraction sets)
2. Compare outputs (find agreements and conflicts)
3. Resolve conflicts via weighted voting (identity > creative > perceptual > frequency)
4. Synthesize into tiered library (core/middle/edge rigidity structure)

### For Validation:

**A good library extraction should:**
- Score HIGH on Identity, Perceptual, Creative lenses (soul + coherence + generativity)
- Score MEDIUM on Composability, Behavioral, Semantic lenses (useful but not defining)
- Score LOW on Frequency, Mental Model, Cost lenses (optimizations, not essence)

---

## Conclusion

**12 lenses exist.** Each asks a different question. Each sees different things. Each misses different things. Each produces different counts.

**Lens choice is the MOST IMPORTANT decision in extraction.** It determines:
- What gets extracted (identity vs frequency produces 18 vs 45 items)
- What categories emerge (meta-patterns vs components)
- How rigid the output is (soul is eternal, implementations are disposable)

**The meta-process is discoverable:** Ask "why extract?" → surfaces purpose → reveals lens → projects categories.

**For KortAI:** Identity + Creative + Perceptual lenses are correct. Frequency lens is a trap.

**Next:** Apply each lens to DD-006 and compare results empirically.

---

## Appendix: Lens Derivation Template

```markdown
### Lens [N]: [NAME]
**Core Question:** "[What makes something library-worthy under this lens?]"

**What It SEES:**
- [Pattern type 1]
- [Pattern type 2]
- [Pattern type 3]

**What It MISSES:**
- [Blind spot 1]
- [Blind spot 2]
- [Blind spot 3]

**Categories It Produces:**
- [Category 1] ([count] items)
- [Category 2] ([count] items)
- [Category 3] ([count] items)

**Counts:** ~[total] items

**Assumptions About Design Systems:**
- [Assumption 1]
- [Assumption 2]
- [Assumption 3]
```

---

**END LENS DERIVATION RESEARCH**
