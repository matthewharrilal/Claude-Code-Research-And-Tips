# First-Principles Analysis: What SHOULD a Design System Vocabulary Contain?

**Agent:** first-principles (Task #9)
**Method:** Zero-context from current files. Built from established design system theory, industry practice, and agent-specific format considerations.
**Sources:** Vercel Geist, IBM Carbon, Material Design 3, Apple HIG, Brad Frost's Atomic Design, Daniel Eden's Design System Grammar, Cole Peters' Constraint-Based Design, Figma MCP design system rules, Smashing Magazine visual design language research.

---

## Part 1: What Does a Builder NEED to Understand to Compose a Page?

Starting from absolute zero. An agent receives a brief ("build a page about X") and must produce a complete, styled HTML page. What information does it need?

### The Builder's Information Hierarchy (ordered by necessity)

**TIER 1: Cannot compose without this (ESSENTIAL)**

1. **Visual Identity Essence** — What does this system LOOK and FEEL like? Not a list of values, but a communicable character. A human designer absorbs this through examples. An agent needs it stated. Examples:
   - "Swiss minimalism with maximum restraint — space does the work, not ornament"
   - "Dense, information-rich, developer-focused — every pixel earns its place"
   - "Warm, editorial, magazine-like — generous imagery, pull quotes, serif authority"

2. **Color System** — The actual values and their semantic meaning. Not just hex codes but WHEN and WHY each color appears. This is the minimum viable palette:
   - Background hierarchy (page, surface, recessed)
   - Text hierarchy (primary, secondary, tertiary)
   - Semantic states (interactive, success, warning, error)
   - The RULE governing color usage (e.g., "monochromatic base, color only for semantic meaning")

3. **Typography System** — Font stacks, size scale, weight rules, line-height, letter-spacing. This is architecture in a text-driven system. The builder needs:
   - The font families (prose + mono)
   - The type scale (what sizes exist and what they mean)
   - Weight rules (which weights are available, when to use each)
   - Spacing properties (line-height, letter-spacing per level)

4. **Spacing System** — The unit grid and scale. Without this, every margin/padding is an arbitrary guess. The builder needs:
   - Base unit and derived scale
   - Grouping rules (proximity = relationship)
   - Section separation vs. element separation
   - Content width constraints

5. **Layout Constraints** — Max-widths, grid structure, responsive behavior. These are the physical boundaries of composition.

**TIER 2: Composes poorly without this (IMPORTANT)**

6. **Component Vocabulary** — What reusable structures exist? Cards, callouts, code blocks, tables, tags, stat grids. Not full implementations but the NAMES and PURPOSES of available components, with enough CSS to instantiate them.

7. **Compositional Grammar** — How components combine. This is Daniel Eden's "design system grammar" — the rules governing which combinations are valid. What goes inside what? What sequences make sense? What adjacencies create meaning?

8. **Hierarchy Rules** — How to create visual priority. "Never make the important thing louder — make everything else quieter." The system's specific approach to directing attention.

9. **Motion/Transition Rules** — How things change. Transition timing, hover states, animation philosophy. Even "no animations" is a rule.

**TIER 3: Composes generically without this (ENRICHING)**

10. **Mechanism/Technique Catalog** — Advanced compositional techniques beyond basic components. Spatial rhythms, material textures, behavioral patterns, relational structures. This is the vocabulary of RICHNESS — what separates a technically correct page from a perceptually compelling one.

11. **Metaphor/Theme Guidance** — How content theme maps to visual decisions. This is the bridge between WHAT you're saying and HOW it looks.

12. **Anti-patterns** — What NOT to do. Prohibitions, soul violations, perceptual failures. These are guardrails that prevent the worst outcomes.

---

## Part 2: Minimum Information to Communicate Visual Identity

The question is: what is the SMALLEST artifact that communicates enough identity for an agent to produce on-brand work?

### The Identity Stack (from most essential to least)

**Layer 1: Character Statement (5-10 lines)**
A prose description of the system's personality, philosophy, and feel. This is what Material Design 3 calls "foundations" — the why behind every decision. Every major design system leads with this:
- Geist: "Simplicity, minimalism, speed — inspired by Swiss design"
- Carbon: "Based on the IBM Design Language — productive, inclusive, systematic"
- Material 3: "Personal, adaptive, expressive"
- Apple HIG: "Clarity, deference, depth"

This is NOT optional. Without a character statement, an agent will produce CSS that is technically correct but soulless. The character statement is the seed crystal around which all other decisions organize.

**Layer 2: Design Tokens (50-100 CSS custom properties)**
The concrete values that implement the character. Colors, sizes, spacings, border radii, shadows, transitions. These are what Carbon calls "the smallest units of a design system." They are the shared vocabulary between identity and implementation.

Key insight from industry practice: tokens should be **layered**:
- **Foundation tokens**: Raw values (--color-blue-500: #3b82f6)
- **Semantic tokens**: Role-based aliases (--color-interactive: var(--color-blue-500))
- **Component tokens**: Context-specific (--button-bg: var(--color-interactive))

For agent consumption, **semantic tokens are the sweet spot**. Foundation tokens are too low-level (agent doesn't need to know why blue-500 exists). Component tokens are too specific (constrains composition). Semantic tokens communicate both the value AND its purpose.

**Layer 3: Component Patterns (10-20 reusable structures)**
The most common building blocks with their CSS. Not a full component library — just enough for an agent to understand the system's approach to containers, typography blocks, interactive elements, and decorative patterns.

**Layer 4: Composition Examples (3-5 reference implementations)**
Actual pages that demonstrate the vocabulary in use. This is the most powerful teaching tool. An agent that reads three on-brand pages learns more about composition than from any specification document.

### What the Side B Experiment Proved

The Side B experiment demonstrated that agents derive BETTER understanding from raw files than from pre-digested summaries. This has profound implications:

- **Summaries compress out the teaching signal.** A summary says "use generous spacing." A raw file shows 64px between sections, 16px between elements, 8px between label and value. The raw file teaches the PATTERN, not just the conclusion.
- **Examples > Rules.** An agent reading `margin-bottom: 64px` on a section boundary learns spacing rhythm. An agent reading "sections should have generous spacing" learns nothing actionable.
- **Format implication:** The vocabulary should be weighted toward CONCRETE EXAMPLES and ACTUAL CSS over PROSE DESCRIPTIONS and ABSTRACT RULES.

---

## Part 3: How Major Design Systems Structure Their Vocabulary

### Comparison Matrix

| System | Top-Level Categories | Identity Communication | Token Architecture | Builder Guidance |
|--------|---------------------|----------------------|-------------------|-----------------|
| **Geist (Vercel)** | Foundations, Components, Brand | Character through minimal docs + live examples | CSS custom properties, high-contrast accessible | Visual demos, interactive previews |
| **Carbon (IBM)** | Guidelines, Elements, Components, Patterns, Data Viz | IBM Design Language as foundation, productive/inclusive | $-prefixed tokens, role-based, nestable, 4 themes | Pattern recipes, practical examples |
| **Material 3** | Foundations, Styles, Components | "Personal, adaptive, expressive" + dynamic color | 5 key colors -> 13 tonal palettes, 10-step shape scale | Comprehensive guides per foundation area |
| **Apple HIG** | Foundations, Patterns, Components | Platform-specific character + materials/translucency | System-provided values, semantic colors | Platform guidelines, shared anatomy |

### Common Structural Pattern

Every major system follows the same 3-layer architecture:

```
FOUNDATIONS (why + values)
  -> STYLES/TOKENS (what + concrete)
    -> COMPONENTS (how + composed)
```

Additionally, Carbon and Material add a fourth layer:

```
PATTERNS (when + sequenced)
```

Patterns describe HOW components combine in common user flows (login, search, filtering). This is the "grammar" layer that most custom design systems omit.

### Brad Frost's Atomic Design Contribution

Frost's atoms -> molecules -> organisms -> templates -> pages model adds a crucial insight: **composition is hierarchical**. Small things combine into medium things which combine into large things. The vocabulary must support ALL levels simultaneously.

For an agent-consumed design system, this means the vocabulary should include:
- **Atomic properties** (colors, spacing values, font sizes)
- **Molecular patterns** (a label + value pair, a heading + body block)
- **Organismic components** (a card with heading + body + metadata, a section with title + content + transition)

### Daniel Eden's Grammar Insight

Eden's key observation: "What good is an expansive vocabulary without rules to govern how words may be used together?" A vocabulary without grammar produces individual components that don't compose well. The grammar defines:
- Which components can contain which other components
- What sequences are meaningful
- What adjacencies create visual rhythm
- What combinations violate the system

---

## Part 4: The Relationship Between Constraints, Vocabulary, and Creative Freedom

### The Constraint Paradox

Cole Peters' research establishes the foundational insight: **constraints enable creativity rather than limiting it.** Problem solving within constraints is itself a highly creative act. Constraints eliminate decision fatigue around trivial choices (should this be 13px or 14px?), freeing mental energy for genuine creative decisions (how should this section transition feel?).

But this is a human insight. For agents, the dynamics are different:

### Agent-Specific Constraint Dynamics

1. **Agents have no decision fatigue.** They can evaluate 100 options as easily as 3. The human argument for constraints (reduce cognitive load) doesn't apply.

2. **Agents have no aesthetic intuition by default.** Without constraints, agents don't "creatively explore" — they produce generic output. Constraints for agents serve a DIFFERENT purpose: they communicate design intent and prevent bad outputs.

3. **Agents follow rules literally.** "Use generous spacing" produces nothing useful. "Section gaps: 48-64px; element gaps: 8-16px" produces correct results. The constraint must be a VALUE, not a JUDGMENT.

4. **Agents over-comply.** Given 20 constraints, an agent will try to satisfy all 20, potentially at the expense of composition quality. Fewer, more important constraints produce better results than many specific ones.

### The Three Categories of Design System Information

| Category | Purpose | Agent Effect | Format |
|----------|---------|-------------|--------|
| **Constraints** | Prevent bad outcomes | High compliance, literal interpretation | Binary rules with values |
| **Vocabulary** | Expand available techniques | Selective adoption based on relevance | Catalog with examples |
| **Creative Authority** | Enable compositional decisions | Only exercised when explicitly granted | Explicit "you decide" statements |

### The Optimal Balance

Based on the constraint-based design research and the agent-specific dynamics:

1. **Constraints should be FEW and BINARY.** Each constraint is a hard wall. "Never use pure black (#000)" is useful. "Avoid excessive darkness" is useless. Target: 10-20 hard constraints maximum.

2. **Vocabulary should be RICH and OPTIONAL.** The mechanism catalog, technique library, and component patterns should be extensive but non-mandatory. The agent picks what serves the content. Target: 30-60 available techniques.

3. **Creative authority should be EXPLICIT.** The system must actively grant permission for compositional decisions. "You choose the section order, spacing rhythm, and visual emphasis based on content" is essential. Without this, agents default to the safest, blandest interpretation.

4. **The ratio matters.** Based on the research finding that a 7.9:1 guardrail-to-playbook ratio produced flat output while a recipe format produced rich output:
   - Target: **1:3 constraint-to-vocabulary ratio** (for every constraint, provide 3 vocabulary items)
   - Target: **Recipe format over checklist format** (sequenced steps with concrete values over lists of rules)

---

## Part 5: Format for Dynamic Agent Reading

### What the Side B Experiment Proved About Format

If agents derive BETTER understanding from raw files than summaries, then the format should:
1. Preserve concrete examples (actual CSS, actual HTML patterns)
2. Minimize prose abstraction (descriptions of what something looks like)
3. Show, don't tell (a code block of the spacing scale > a paragraph about spacing philosophy)
4. Be scannable (agents skim like humans — frontload the actionable content)

### Recommended Format: Layered Concrete-First

```
IDENTITY (10-15 lines)
  Character statement
  Key principles (3-5, one sentence each)

TOKENS (raw CSS custom properties)
  Color tokens with semantic names
  Typography tokens with size/weight/spacing
  Spacing tokens with scale
  Surface/border tokens

COMPONENTS (CSS blocks with HTML patterns)
  Each component: name, purpose, CSS, HTML skeleton
  10-20 components maximum

COMPOSITION GUIDE (recipe format)
  "When building a page, do these things in this order:"
  Step 1: Establish the layout grid
  Step 2: Set the type hierarchy
  Step 3: Place primary content
  ...

TECHNIQUE CATALOG (optional enrichment)
  Grouped by category (spatial, material, behavioral, etc.)
  Each technique: name, what it does, CSS snippet
  Agent selects relevant techniques for the content

CONSTRAINTS (hard rules, last)
  10-20 binary rules
  Each rule: what, why, how to verify
  No judgment language — only measurable conditions

REFERENCE IMPLEMENTATIONS (links to actual pages)
  3-5 example pages that demonstrate the system
  Agent reads these for compositional intuition
```

### Why This Order

1. **Identity first** because it seeds the agent's understanding of character before it encounters any specific value.
2. **Tokens next** because they're the foundation everything else references.
3. **Components** because they're the building blocks of composition.
4. **Composition guide** in recipe format because this is where the agent learns HOW to combine, not just WHAT exists.
5. **Technique catalog** as optional enrichment because richness comes from depth, not obligation.
6. **Constraints last** because they're guardrails, not starting points. Leading with constraints produces defensive, minimal work. Leading with identity and vocabulary produces creative work within natural boundaries.
7. **Reference implementations** as the final layer because examples teach what specifications cannot.

### Key Format Principles for Agent Consumption

- **CSS over prose.** `font-size: 15px; line-height: 1.7;` teaches more than "body text should be readable with generous line height."
- **Semantic naming.** `--spacing-section: 48px` teaches more than `--space-6: 48px`.
- **One concept per block.** Don't mix color tokens with typography tokens. Agents parse structure.
- **Binary verifiability.** Every constraint should be testable: "Container max-width <= 960px" not "Container should feel appropriately sized."
- **Structured data where possible.** Use markdown tables, CSS blocks, and YAML-like key-value pairs over flowing prose. Per Figma's research, structured prompts outperform natural language by ~10% accuracy while using 67% fewer tokens.

---

## Part 6: Essential vs. Nice-to-Have vs. Harmful Categories

### ESSENTIAL (without these, output will be incorrect or generic)

| Category | Why Essential | Format |
|----------|-------------|--------|
| Character Statement | Seeds agent's understanding of system personality | 5-10 lines of prose |
| Color Tokens | Cannot compose without actual values | CSS custom properties |
| Typography System | Cannot set hierarchy without scale | CSS custom properties + usage rules |
| Spacing Scale | Cannot compose without rhythm values | CSS custom properties + proximity rules |
| Layout Constraints | Cannot size containers/columns without boundaries | Max-width, grid values |
| Component Library | Cannot build without building blocks | CSS + HTML patterns (10-20) |
| Creative Authority Grant | Agent won't take creative risks without permission | Explicit "you decide" statements |

### NICE-TO-HAVE (enriches output quality without being strictly necessary)

| Category | Why Enriching | Risk if Absent |
|----------|-------------|----------------|
| Mechanism/Technique Catalog | Expands compositional vocabulary | Generic but correct output |
| Composition Recipe | Teaches sequencing and flow | Components that don't compose well |
| Reference Implementations | Teaches by example | Agent has no compositional model |
| Transition/Motion Rules | Adds polish and interactivity | Static but functional pages |
| Responsive Breakpoints | Enables multi-device design | Desktop-only or generic responsive |
| Dark Theme Tokens | Enables dark mode support | Light-only (acceptable default) |

### HARMFUL (actively degrades output quality when included)

| Category | Why Harmful | Mechanism of Damage |
|----------|-----------|-------------------|
| Excessive prose philosophy | Consumes tokens, teaches nothing actionable | Agent reads 200 words, learns 0 CSS values |
| Judgment-based rules | Unenforceable, create ambiguity | "Appropriate spacing" = undefined, agent guesses |
| Mandatory technique quotas | Force irrelevant techniques into content | "Must use >= 14 mechanisms" = mechanisms for mechanisms' sake |
| Exhaustive anti-patterns | Overwhelm with negatives, suppress creativity | 50 "don't do" rules = agent paralyzed |
| Pre-digested summaries of explorations | Compress out the teaching signal | Summary says "generous spacing" instead of showing 64px |
| Meta-commentary on the design system itself | Recursive navel-gazing, zero compositional value | Agent reads ABOUT the system instead of reading the system |
| Rules about rules | Second-order constraints that confuse priority | "This rule overrides that rule except when..." |
| Duplicate information in different formats | Contradictions, token waste, decision confusion | Same value stated in CSS, prose, and table = 3x tokens, 3x contradiction risk |

### The Harmful Category Deserves Emphasis

The most counterintuitive finding from design system research is that **MORE information often produces WORSE output**. This is true for both humans and agents, but for different reasons:

- **Humans** suffer from decision fatigue and information overload
- **Agents** suffer from priority confusion and over-compliance

For agents specifically:
- Every additional rule is another thing to satisfy, potentially at the expense of composition
- Every additional prose paragraph is tokens that could have been CSS examples
- Every abstract principle must be mentally translated into concrete action, introducing interpretation error

**The ideal vocabulary is the SMALLEST set of CONCRETE information that enables CORRECT and RICH output.** Everything beyond that actively harms the result.

---

## Part 7: Synthesis — The Ideal Design System Vocabulary for Agent Builders

### Architecture

```
design-system/
  IDENTITY.md          (~15 lines: character, principles, feel)
  tokens.css           (~80-120 custom properties: colors, type, spacing, surfaces)
  components.css       (~200-400 lines: 10-20 component patterns with HTML comments)
  COMPOSITION.md       (~50-80 lines: recipe-format building guide)
  techniques/          (optional catalog, grouped by category)
    spatial.md
    material.md
    behavioral.md
    relational.md
  CONSTRAINTS.md       (~30-50 lines: 10-20 binary rules)
  examples/            (3-5 reference HTML pages)
```

### Total Budget

- **Identity:** ~15 lines
- **Tokens:** ~100 CSS properties (~150 lines with comments)
- **Components:** ~300 lines CSS + HTML patterns
- **Composition Guide:** ~60 lines
- **Technique Catalog:** ~200 lines (optional, agent picks relevant subset)
- **Constraints:** ~40 lines
- **TOTAL: ~565 lines of specification + examples directory**

Compare this to the industry norm:
- Carbon documentation: thousands of pages
- Material Design 3: hundreds of pages
- Apple HIG: hundreds of pages

But those systems serve HUMAN designers who browse, learn gradually, and build understanding over time. An agent reads once, immediately, and needs everything frontloaded in the minimum viable surface.

### The Key Insight

The ideal design system vocabulary for agent consumption is NOT a compressed version of a human design system. It is a DIFFERENT artifact entirely:

- **Human design system:** Comprehensive reference, organized for browsing, explains WHY
- **Agent design system:** Minimal execution spec, organized for sequential reading, shows HOW

The closest analog in industry is **Figma's MCP rules file** — a structured, machine-readable specification that gives an AI agent enough context to produce on-brand code without overwhelming it with design theory.

### Final Principle

**A design system vocabulary should be judged not by what it CONTAINS, but by what the builder PRODUCES after reading it.** If a 500-line vocabulary produces the same quality as a 5,000-line vocabulary, the 500-line version is 10x better — it achieves the same result with 90% less token consumption, 90% less interpretation risk, and 90% less contradiction potential.

The goal is not to document the design system. The goal is to enable composition.
