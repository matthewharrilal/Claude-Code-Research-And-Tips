# Design System Survey -- The 6-Layer Compositional Ontology

**Date:** 2026-02-22
**Surveyor:** design-system-surveyor (Opus agent)
**Scope:** Everything in `design-system/` -- structure, philosophy, content, relationships

---

## Executive Summary

The KortAI design system is a **research-grounded compositional vocabulary** for building editorial web pages. It is NOT a component library, NOT a template system, and NOT a CSS framework. It is a system for enabling *compositional intelligence* -- the ability to derive novel visual compositions from content tension through metaphor-driven mechanism deployment.

The system encodes **337 research findings** across 5 research streams into a **6-layer ontology** of 40 operational items, supported by **18 reusable CSS mechanisms**, **24 prohibitions**, **26 component families**, **9 case studies**, and a phase-gated build protocol that prevents pattern-matching while enabling vocabulary fluency.

The central metaphor for the entire system: **the Jazz Real Book**. Case studies are standards to learn from (not songs to play verbatim). Mechanisms are chord voicings and scales (transferable tools). Your page is your solo.

---

## What the Design System IS

### The Core Identity: Anti-Physical Editorial Precision

KortAI's visual identity is defined by **refusal** more than by affordance:

- **Sharp edges always** (border-radius: 0) -- decisive, confident, print heritage
- **Flat surfaces always** (box-shadow: none, no drop-shadow) -- honest, no fake depth
- **Warm palette always** (cream #FEF9F5, near-black #1A1A1A, red #E83025) -- editorial warmth, never sterile
- **Typography trinity always** (Instrument Serif for display, Inter for body, JetBrains Mono for code)
- **No gradients, no pure black/white, no decorative complexity**

This is not minimalism. It is **anti-physical** -- rejecting light-source metaphors (shadows, gradients, rounded softness) in favor of abstract precision. Depth is achieved through spacing, borders, and background zones, not through physical simulation.

### The Dual System Architecture

The design system contains TWO parallel systems:

1. **compositional-core/** (43 files, ~20K lines) -- The operational vocabulary for BUILDING pages. 40 items, phase-gated access. This is what builders consume.

2. **specification/** (57 files) -- The complete documentation for UNDERSTANDING why decisions were made. Research provenance, philosophical anchors, rationale. This is what researchers consume.

The relationship: compositional-core/ EXTRACTS from specification/. specification/ is the encyclopedia; compositional-core/ is the field manual.

---

## The 6-Layer Ontology -- What Each Layer Is and Why

The layers are ordered from IMMUTABLE to COMPOSITIONAL to PROOF:

```
Layer 1: Identity    (REFUSES)     -- What KortAI will NEVER do
Layer 2: Vocabulary  (ATOMS)       -- The building blocks
Layer 3: Grammar     (COMBINES)    -- How building blocks compose
Layer 4: Components  (IMPLEMENTS)  -- Pre-built structural elements
Layer 5: Case Studies (PROVES)     -- What composition looks like in practice
Layer 6: Guidelines  (DECIDES)     -- When to use what, semantic gap rules
```

### Layer 1: Identity (`compositional-core/identity/`)

**Files:** `prohibitions.md` (420 lines), `soul-constraints.md`

**What it contains:** 24 prohibitions that define KortAI by what it REFUSES.

- **8 Absolute Prohibitions** (NEVER, zero exceptions):
  1. border-radius > 0 (THE #1 soul constraint)
  2. box-shadow
  3. filter: drop-shadow()
  4. Semi-transparent backgrounds (opacity < 1)
  5. Gradient backgrounds
  6. Pure black (#000) or pure white (#FFF)
  7. Instrument Serif for body text
  8. Rounded corners for decoration

- **14 Conditional Prohibitions** (documented exceptions only):
  - No 2px borders (except confidence encoding)
  - No accent borders < 4px (except progressive depth)
  - No decorative elements without information
  - No decorative grid breaking
  - No vertical borders in tables
  - No hover lift effects
  - No traffic-light color adjacency
  - No cool-toned grays
  - No non-italic h3 headings
  - No same-density stacking
  - No contentless viewport (void prohibition)
  - No front-loaded visual interest

- **2 Meta-Prohibitions** (process-level):
  - No design choices without research provenance
  - No patterns without tension derivation

**Why this layer exists:** Identity through constraint. These are the "walls of the jazz club" -- they don't tell you what to play, they tell you where the stage ends. Binary rules achieve 100% agent compliance; judgment rules achieve ~0%.

**What it adds:** The absolute foundation. Without this layer, output is generic. WITH this layer, every page is recognizably KortAI at first glance.

### Layer 2: Vocabulary (`compositional-core/vocabulary/`)

**Files:** `tokens.css` (184 lines), `token-mutability.md`

**What it contains:** 65 CSS custom properties in a single `:root` block.

- **Soul Constraints (IMMUTABLE):** `--border-radius: 0`, `--box-shadow: none`
- **Color Palette (8 values):** Primary red #E83025, warm cream #FEF9F5, near-black #1A1A1A, secondary #666666, border #E0D5C5, plus accent colors (blue, green, coral, amber, purple)
- **Typography Trinity (3 fonts):** Instrument Serif (display), Inter (body), JetBrains Mono (code)
- **Type Scale (10 values):** From 0.75rem (meta) to 3rem (display), with ~1.5x ratio between levels
- **Spacing Scale (14 values, 6 anchors):** 4px base unit. 8/16/24/32/48/64px anchors. Maximum per-property: 96px (void prevention)
- **Border Widths (3 semantic weights):** 4px structural, 3px accent, 1px subtle
- **Zone Colors (4):** Sparse (#FEF9F5), Dense (#FFFFFF), Breathing (#FAF5ED), Bedrock (#1A1A1A)
- **Syntax Highlighting (7 tokens):** For dark-background code blocks

**Mutability classification:**
- IMMUTABLE (soul, identity): Cannot change without violating identity (21 tokens)
- MUTABLE (scale, accent): Can vary within constraints (14 tokens)
- AVAILABLE (extended): Exist but not required (30 tokens)

**Why this layer exists:** Source-first extraction grounds everything in implementation reality. A single CSS file that any builder can include. Extracted from `specification/tokens/*.md` (617 lines) compressed to 174 operational lines.

**What it adds:** The atoms. Layer 1 says what NOT to do; Layer 2 says what to USE. Together, they define the visual language.

### Layer 3: Grammar (`compositional-core/grammar/`)

**Files:** `mechanism-catalog.md` (~1,220 lines), `compositional-rules.md`, `border-grammar.md`

**What it contains:** 18 reusable CSS mechanisms organized into 5 property families, plus 11 compositional rules and transition grammar.

**The 18 Mechanisms (grouped by family):**

| Family | Mechanisms | What It Governs |
|--------|-----------|-----------------|
| **Spatial (S)** | #5 Dense/Sparse Alternation, #6 Width Variation, #15 Bento Grid | Layout topology, density rhythm |
| **Hierarchy (H)** | #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale Jumping | Importance encoding, structural weight |
| **Component (C)** | #2 Two-Zone DNA, #9 Confidence/Color Encoding, #10 Border-Left Signal, #17 Code Block | Internal component patterns |
| **Depth/Emphasis (D)** | #3 Solid Offset (box-shadow alternative), #7 Zone Background Differentiation, #16 Drop Cap | Layering, focal points |
| **Structure/Nav (N)** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | Page chrome, navigation |

**Key distinction -- Mechanisms vs Metaphors:**
- **Mechanism** = a CSS technique that passes the Name Test (remove metaphor, still makes sense?) and Transfer Test (works with different metaphor?)
- **Metaphor** = a content-specific application of mechanisms (geological strata, building floors, manuscript chapters)
- Mechanisms are TOOLS. Metaphors are DECISIONS.

**Transition Grammar (3 types):**
- HARD CUT: 3px primary border when content changes DOMAIN
- SPACING SHIFT: Padding compression when content changes INTENSITY
- CHECKPOINT: Labeled structural landmark when content changes PHASE

**Restraint Protocol:**
- Max 4 mechanisms per viewport section (more compete, none register)
- Every third of the page must have 2+ mechanisms (distribution > count)
- Document rejected mechanisms with reasoning (proves evaluation, not carpet-bombing)

**Why this layer exists:** Grammar separates transferable tools from metaphor-specific implementations. This is what prevents pattern-matching: you learn border-weight gradient as a TECHNIQUE, then apply it to YOUR metaphor with YOUR semantic reasoning.

**What it adds:** Combinatorial capability. Layer 2 gives atoms; Layer 3 teaches how atoms combine. The mechanisms are the "chord voicings" of the Real Book.

### Layer 4: Components (`compositional-core/components/`)

**Files:** `components.css` (~1,200 lines), `component-inventory.md` (~880 lines), `components-dd-od.css`, `components-cd-tt.css`

**What it contains:** 26 component families (34 CSS selectors) extracted from 27 HTML explorations.

**Confidence tiers:**
- **HIGH (7 components, 70-100% frequency):** Callout family, Code Blocks, Page Header, Tables, Skip Link, Focus-Visible, Selection Styling
- **MEDIUM (13 components):** Page Footer, Stats Bar, Section Indicator, File Tree, Decision Matrix, plus 8 CD-specific (Reasoning, Core Abstraction, Bento Grid, Essence Pullquote, Density Meter, Version Badge, Section Zones, Breathing Zones)
- **LOW (6 components):** Density Indicator, Q&A Pair, Breadcrumb, plus 3 tension-test-only

**Soul compliance:** 100% (0 violations across all 34 components -- border-radius: 0, box-shadow: none everywhere).

**Parametric components (4):** Callout (6 semantic variants via CSS custom properties, NOT 6 separate components), Stats Bar, Density Meter, Section Zones.

**Why this layer exists:** Pre-built structural elements that embody the vocabulary and grammar. Builders don't have to reinvent callout structure -- they select from the inventory and adapt to their metaphor.

**What it adds:** Implementation speed. Layers 1-3 teach the language; Layer 4 provides ready-made sentences.

### Layer 5: Case Studies (`compositional-core/case-studies/`)

**Files:** 9 case studies + 3 visual variants + 1 anti-prescription template + README (~540 lines)

**What it contains:** Documentation of what ONE metaphor produced for ONE content tension.

**The 9 case studies:**
- **DD:** DD-003 Islands (bento isolation), DD-004 Layers (atmospheric depth), DD-006 Fractal (self-similarity at 4 scales)
- **OD:** OD-001 Conversational (Q&A dialogue), OD-004 Confidence (geological stratification), OD-006 Creative (dual-lens toggle)
- **CD:** CD-001 Reasoning Inside Code (framed deliberation), CD-005 Multi-Axis Transition (bridge section), CD-006 Pilot Migration (meta-tutorial, 39/40 score, CEILING tier)

**Anti-gravity protections:**
- Every case study starts with "THIS IS NOT A TEMPLATE" warning
- Narrative format ("tension that produced this") NOT criteria format ("when to use")
- Phase-gated access: PROHIBITED until Phase 5 (after metaphor commitment)
- Divergence mandate: if your metaphor matches library, justify or regenerate

**Why this layer exists:** Grammar alone is abstract. Case studies are concrete proof-of-concept showing how mechanisms combine in real compositions. They enable learning without constraining. The KEY: read them to understand the PROCESS (tension -> metaphor -> mechanism selection), NOT to copy the ANSWER (geological -> 6 strata -> this CSS).

**What it adds:** Usage wisdom. Layer 3 teaches the tools; Layer 5 shows the tools in action. Together: vocabulary fluency + usage context.

### Layer 6: Guidelines (`compositional-core/guidelines/`)

**Files:** `semantic-rules.md` (~530 lines), `usage-criteria.md` (~340 lines), `responsive-strategy.md` (~270 lines)

**What it contains:** Decision rules for semantic ambiguity, plus responsive strategy.

**7 Semantic Gap Rules:**
1. Info vs Note callout selection (section-level vs inline)
2. Inline vs block code threshold (1 line / 50 chars)
3. Table styling -- clean only (zebra-striping HYPOTHETICAL, not validated)
4. Breathing-room zone triggers (inverse density-confidence)
5. Callout semantic differentiation (5 colors, 8 CSS classes)
6. Content density floors per zone (minimum content before zone treatment)
7. Content-form fit -- minimum content for form decisions

**Semantic Value Framework (3-question test for every CSS value):**
- Q1: WHAT varies?
- Q2: WHY does it vary? (content structure, metaphor logic, pattern logic -- NOT "looked good")
- Q3: WHY THESE SPECIFIC VALUES? (semantic reasoning, not token availability)

**Responsive Strategy:**
- Single validated breakpoint: 768px
- Strategy: grid collapse, 19% typography reduction, horizontal spacing removal
- 375px and 1024px: HYPOTHETICAL (zero evidence)
- Dark mode: HYPOTHETICAL (zero validated implementations)

**Why this layer exists:** Fills the gaps between grammar and implementation. When a builder faces "should this be Info or Note?" -- Layer 6 provides evidence-based criteria.

**What it adds:** Decision-making guidance. All other layers define WHAT exists; Layer 6 helps decide WHEN to use what.

---

## Why 6 Layers? The Architectural Logic

The 6 layers form a dependency chain and a cognitive loading sequence:

```
IMMUTABLE -----> MUTABLE --------> COMPOSITIONAL ---> STRUCTURAL ----> PROOF -------> SEMANTIC
Identity        Vocabulary         Grammar            Components       Case Studies    Guidelines
(what NOT to)   (what TO use)      (how to combine)   (pre-built)      (proof it works) (when to use)
ALWAYS LOAD     ALWAYS LOAD        Phase 4+           Phase 4+         Phase 5 ONLY    When ambiguous
```

**Why not fewer layers?**
- Without Layer 1 (Identity): builders violate soul (border-radius > 0 was THE primary failure mode)
- Without Layer 3 (Grammar): builders can't separate mechanisms from metaphors (the 50:1 compression problem)
- Without Layer 5 (Case Studies): builders copy from training distribution instead of compositional-core

**Why not more layers?**
- 30-40 items is the "enablement sweet spot" -- below 30 = creative paralysis, above 40 = constraint
- The extraction lens (Identity + Enablement) deliberately stops before over-extraction

**Why this ordering?**
- Phase-gated access PREVENTS pattern-matching (anti-gravity mechanism R1)
- Identity FIRST because violating soul = invalid work (non-negotiable)
- Vocabulary SECOND because values ground implementation
- Grammar at Phase 4 (after metaphor derivation) because it's TOOLS not ANSWERS
- Case Studies at Phase 5 (after implementation) because they're VALIDATION not GENERATION

---

## The Build Protocol: How Layers Are Consumed

### The /build-page Pipeline (Primary Entry Point)

All pages are built via `/build-page` at FLAGSHIP tier. No tier routing. No Track 1/Track 2 classification anymore.

**Phase sequence:**
1. **Phase 0:** Load prohibitions.md + tokens.css (mandatory, 527 lines)
2. **Phases 1-3:** Run tension-composition BLIND (no library access)
   - Content assessment, multi-axis questioning, tension derivation, metaphor collapse
3. **Phase 3.5:** Metaphor lock-in GATE (binary -- did I derive independently? does it match library?)
4. **Phase 4:** Mechanism extraction (NOW read mechanism-catalog.md)
5. **Phase 5:** Case study comparison (OPTIONAL, divergence verification only)
6. **Phase 6:** Opus builder implements with TC brief + conventions brief + recipe
7. **Phase 7:** Full verification (22 programmatic gates + 65-question perceptual audit)

**Success bar:** PA-05 >= 3.5 AND Tier 5 >= 7/9 AND zero soul violations

### Anti-Gravity System (94.7% Compliance)

The system deploys 12 mechanisms to prevent LLM pattern-matching:

- **Structural (automatic):** Phase-gated directory separation, dual-file split (mechanisms vs metaphors)
- **Behavioral (binary rules):** Anti-prescription headers, sequential phase enforcement, divergence mandate
- **Verification:** Divergence gate at Phase 3.5, 5-question justification table, regeneration path

Key finding: **Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%.** Every rule in the system is binary (MUST/MUST NOT), never advisory (consider/might want to).

---

## Supporting Infrastructure

### Validation (`compositional-core/validation/`)
- `anti-gravity-compliance.md` (1,197 lines): Full audit of all 12 anti-gravity mechanisms
- `convergence-check.md`: Cross-layer consistency verification
- `gap-check.md`: Coverage gap analysis

### Process (`compositional-core/process/`)
- `lens-manifesto.md`: WHY Identity + Enablement hybrid lens was chosen
- `construction-narrative.md`: HOW the extraction was built
- `assumption-log.md`: Bias tracking
- `extraction-provenance.md`: Provenance chain

### Research (`design-system/research/`)
- 337 findings across 5 streams (R1=28, R2=27, R3=51, R4=192, R5=39)
- R1 fed OD, R3 fed DD, R4 fed AD, R5 fed CD
- RESEARCH-SYNTHESIS.md unifies across all streams
- Research is NOW DISTILLED into compositional-core/ -- never needed for building

### Pipeline (`design-system/pipeline/`)
- 21 files of strategic planning
- Track 1/Track 2 architecture (now unified under ALWAYS FLAGSHIP)
- /build-page orchestrator specs
- PV2 (Pipeline v2) architecture
- Gate runner, conventions brief, flagship PA questions

### Specification (`design-system/specification/`)
- THE KORTAI DESIGN MIND (109KB README, philosophical anchor)
- BACKBONE.md (35KB master narrative)
- Token source-of-truth files (617 lines across 4 files)
- Pattern registries, anti-pattern registries, provenance architecture

### Validated Explorations (`design-system/validated-explorations/`)
- 30 frozen HTML files across DD, OD, CD dimensions
- DD-006 fractal (20+ inbound references)
- CD-006 pilot migration (39/40, CEILING tier -- NOT Flagship)
- These are PROOF-OF-CONCEPT, not templates

---

## The Relationship Between Layers

```
Layer 1 (Identity) CONSTRAINS everything below it
  |
  v
Layer 2 (Vocabulary) GROUNDS everything below it in implementation
  |
  v
Layer 3 (Grammar) COMBINES Layer 2 atoms into techniques
  |                            |
  v                            v
Layer 4 (Components)         Layer 5 (Case Studies)
IMPLEMENTS grammar in          PROVES grammar works in
pre-built structures           specific compositions
  |                            |
  +----------------------------+
                |
                v
Layer 6 (Guidelines)
DECIDES when to use Layers 3-5
```

- **Layer 1 -> Layer 2:** Prohibitions constrain token values (no pure black, must use warm palette)
- **Layer 2 -> Layer 3:** Tokens provide the VALUES mechanisms use (var(--space-8), var(--color-primary))
- **Layer 3 -> Layer 4:** Mechanisms define HOW components are structured (2-zone DNA, border-weight gradient)
- **Layer 3 -> Layer 5:** Mechanisms are demonstrated in CONTEXT through case studies
- **Layer 5 <- -> Layer 6:** Case studies reveal semantic gaps that guidelines fill

The key insight: **Grammar (Layer 3) and Case Studies (Layer 5) serve different purposes and MUST be separate files.** Grammar = tools (accessible Phase 4). Case Studies = usage examples (accessible Phase 5 only). Merging them would destroy the anti-gravity timing protection.

---

## What the System Preserves

1. **Visual identity** -- sharp edges, flat surfaces, warm palette, editorial typography
2. **Research provenance** -- every decision traces to R1-R5 findings through validated explorations
3. **Compositional intelligence** -- the ability to derive novel compositions from content tension
4. **Anti-gravity protection** -- structural/behavioral mechanisms preventing LLM pattern-matching
5. **Perceptual physics** -- guardrails based on human perception thresholds (15 RGB minimum, 120px max stacked gap)

## What the System Transmits

To a new builder (human or AI):
- **Layer 1:** "Here is what you must NEVER do" (identity through constraint)
- **Layer 2:** "Here are the exact CSS values to use" (grounded implementation)
- **Layer 3:** "Here are 18 tools and how they combine" (compositional vocabulary)
- **Layer 4:** "Here are pre-built components you can use immediately" (implementation speed)
- **Layer 5:** "Here is proof these tools work, in context" (confidence + learning)
- **Layer 6:** "Here is how to decide when facing ambiguity" (judgment support)

The system transmits a VOCABULARY, not a TEMPLATE. The goal is grammar fluency -- knowing the tools well enough to compose novel pages that feel like KortAI without copying any existing page.

---

## Key Metrics

| Dimension | Value |
|-----------|-------|
| Total research findings | 337 (R1-R5) |
| Ontology layers | 6 |
| Operational items | ~40 |
| CSS tokens | 65 |
| Mechanisms | 18 |
| Prohibitions | 24 (8 absolute + 14 conditional + 2 meta) |
| Component families | 26 |
| Case studies | 9 (+3 visual) |
| Semantic gap rules | 7 |
| Anti-gravity mechanisms | 12 (94.7% deployed) |
| Soul compliance | 100% across all components |
| Validated breakpoint | 768px (only one) |
| PA questions | 65 (54 standard + 2 sub-perceptual + 9 Tier 5) |
| Programmatic gates | 22 |
| Total compositional-core lines | ~20,576 |
| Total specification lines | ~110,000+ |

---

## Critical Architectural Decisions

1. **Identity + Enablement lens** over Frequency, Completeness, Minimalism, or Creative lenses. This balances soul preservation with creative freedom at the 30-40 item sweet spot.

2. **Phase-gated access** over permission-gated access. "Weak permission" framing had ZERO behavioral effect. Physical directory separation is the only reliable mechanism.

3. **Binary rules only** -- zero judgment language. "MUST/MUST NOT/invalidates" achieves compliance. "Consider/might want to/should probably" achieves nothing.

4. **Recipe over checklist** for builders. Sequenced steps with CSS values produce DESIGNED output. Constraint lists with thresholds produce FLAT output.

5. **Mechanisms separate from metaphors** in separate files. Grammar (tools, Phase 4) distinct from case studies (usage proof, Phase 5). This separation IS the anti-gravity architecture.

6. **Perceptible CSS only.** Minimum thresholds: backgrounds >= 15 RGB apart, font-size >= 2px between zones, letter-spacing >= 0.5px, total stacked gap <= 120px. Sub-perceptual CSS is banned.

7. **ALWAYS FLAGSHIP.** No tier routing. Every page gets full composition. The TC pipeline auto-detects zero-tension content and produces flat-mode builds automatically.

---

**END SURVEY**
