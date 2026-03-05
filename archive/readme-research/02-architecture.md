# Architecture Research — Why Compositional-Core Is Structured This Way

**Research Agent:** architecture-researcher
**Team:** readme-enrichment
**Date:** 2026-02-14

---

## Executive Summary — The Architecture Answer

**Compositional-core exists to solve a fundamental design system problem: How do you give agents enough guidance to preserve soul constraints while maintaining creative freedom to derive novel metaphors?**

The 6-layer ontology (identity → vocabulary → grammar → components → case studies → guidelines) is the answer. It's a **dependency hierarchy** that separates:
- What's IMMUTABLE (Layer 1 identity)
- What's ATOMIC (Layer 2 tokens)
- What's COMBINATORIAL (Layer 3 mechanisms)
- What's REUSABLE (Layer 4 components)
- What's PROOF (Layer 5 case studies)
- What's GAP-FILLING (Layer 6 semantic rules)

**The architecture IS the anti-gravity mechanism.** Physical directory separation prevents accidental cross-contamination between abstraction levels.

---

## 1. The 6-Layer Ontology — Theory & Ordering

### Why These 6 Layers?

**From construction-narrative.md (lines 131-216):**

The 6-layer structure flows **abstract → concrete** in dependency order:

```
Layer 1: Identity Constraints (REFUSES — border-radius > 0, box-shadow, decorative complexity)
         ↓ Everything derives from or supports these
Layer 2: Design Vocabulary (ATOMS — colors, fonts, spacing anchors)
         ↓ Components are BUILT FROM tokens
Layer 3: Compositional Grammar (TECHNIQUES — how to combine atoms)
         ↓ Mechanisms are reusable across metaphors
Layer 4: Component Implementations (STRUCTURES — tokens + grammar)
         ↓ Patterns compose components + metaphor
Layer 5: Case Studies (COMPOSITIONS — proof that techniques work)
         ↓ Semantic rules reference all prior layers
Layer 6: Semantic Decision Rules (GAP-FILLING — when to use what)
```

### The Goldilocks Principle

**4 layers would be too coarse:**
- Mixing tokens + components loses the abstraction boundary
- Tokens are ATOMIC, components are COMPOUND
- Blurs "what can I change?" (tokens) vs "what structure do I use?" (components)

**8 layers would be too fine:**
- Prohibitions are PART OF identity (soul constraints expressed negatively)
- Compositional grammar IS mechanisms (techniques for combining)
- Over-separation adds complexity without clarity

**6 layers = meaningful abstraction boundaries** without artificial divisions.

### Why This Ordering?

**Construction Principle: Layers flow from abstract → concrete**

**Layer 1 (Identity) MUST come first:**
- Soul constraints are IMMUTABLE (never change)
- `border-radius: 0` is foundational — components inherit this, mechanisms assume this
- All other layers derive from or support these prohibitions

**Layer 2 (Vocabulary) MUST precede Layer 4 (Components):**
- Components are BUILT FROM tokens
- Callout = `--accent-color` + `--space-6` + `--font-body`
- Cannot extract components before extracting their atomic parts

**Layer 3 (Grammar) sits between tokens and components:**
- Mechanisms are TECHNIQUES (how to combine atoms)
- Independent of specific implementations
- Border-weight gradient (4px/3px/1px) works for geological, confidence, structural metaphors
- Reusable ACROSS implementations

**Layer 5 (Case Studies) MUST follow Layer 4 (Components):**
- Patterns are COMPOSITIONS (components + metaphor)
- DD-006 fractal = callouts + code blocks + headers arranged via fractal metaphor
- Cannot document patterns before components exist

**Layer 6 (Decision Rules) MUST be last:**
- Semantic rules reference ALL prior layers
- "When Info vs Context callout?" requires knowing callout component exists (Layer 4)
- Cannot write decision rules before extracting what's being decided between

---

## 2. Compositional-Core vs Sibling Folders — The Bridge Role

### The Design-System Sibling Structure

From `ls` output, compositional-core has 7 siblings:

```
design-system/
├── axis/                    ← AD explorations (single-axis experiments)
├── compositional-core/      ← THE BRIDGE (this directory)
├── implementation/          ← Build artifacts, migrations
├── pipeline/                ← Planning documents, tension synthesis
├── research/                ← R1-R5 findings + RESEARCH-SYNTHESIS.md
├── specification/           ← Abstract token specs
├── tension-test/            ← Metaphor validation tests
└── validated-explorations/  ← DD, OD, CD HTML files (SOURCE material)
```

### Compositional-Core IS the Bridge

**The architecture reality:**

```
ABSTRACT ←──────────── COMPOSITIONAL-CORE ──────────→ CONCRETE

specification/         compositional-core/          validated-explorations/
(what tokens SHOULD be)  (what agents USE)          (what was BUILT)
                              ↓
                     6-layer ontology:
                     1. Identity (prohibitions)
                     2. Vocabulary (tokens.css)
                     3. Grammar (mechanisms)
                     4. Components (structures)
                     5. Case studies (proof)
                     6. Guidelines (semantic rules)
```

**Why compositional-core bridges abstract ↔ concrete:**

From **extraction-provenance.md (lines 1-23):**

> Phase C extracted 40 items from 27 HTML explorations (DD-001–006, OD-001–006, CD-001–006, TT-001–015) using an Identity + Enablement hybrid lens. This is NOT the only possible extraction. It is a CONSTRUCTED extraction optimizing for: (1) Soul preservation, (2) Creative freedom, (3) Anti-pattern-matching.

**What this means:**
- `specification/` defines theoretical token values
- `validated-explorations/` contains actual HTML implementations
- `compositional-core/` extracts the REUSABLE TECHNIQUES from explorations
- It's the **CONSTRUCTED OPERATIONAL SYSTEM** agents actually use

### Relationship to Each Sibling

**`validated-explorations/` = SOURCE MATERIAL**
- DD-001 through DD-006 (density explorations)
- OD-001 through OD-006 (organizational explorations)
- CD-001 through CD-006 (combination explorations)
- compositional-core EXTRACTED FROM these 27 files
- Case studies (Layer 5) REFERENCE these explorations as proof

**`specification/` = ABSTRACT TOKEN SPECS**
- Theoretical token definitions
- "What colors SHOULD exist"
- compositional-core's `vocabulary/tokens.css` is the OPERATIONAL version
- Spec is planning; compositional-core is execution

**`pipeline/` = PLANNING & STRATEGY**
- Planning documents (01-09)
- Tension synthesis
- compositional-core is what came OUT of the pipeline planning
- Pipeline is "how we'll build"; compositional-core is "what we built"

**`tension-test/` = METAPHOR VALIDATION**
- 15 HTML layouts testing metaphor coherence
- compositional-core's anti-gravity mechanisms (M1-M12) prevent pattern-matching from these
- Tension-test validates metaphors; compositional-core extracts TECHNIQUES (not metaphors)

**`research/` = RESEARCH FINDINGS**
- R1-R5 findings (337 total)
- RESEARCH-SYNTHESIS.md
- compositional-core's extraction-provenance.md documents which findings informed extraction
- Research is discovery; compositional-core is application

**`axis/` = SINGLE-AXIS EXPERIMENTS (AD)**
- AD explorations (axis work)
- compositional-core might extract patterns FROM axis work in future phases
- Currently: axis is experimental; compositional-core is validated

**`implementation/` = BUILD ARTIFACTS**
- Actual migrations, build outputs
- compositional-core's components/ is what implementation USES
- Implementation is "apply system"; compositional-core is "the system"

---

## 3. Directory Separation = Anti-Gravity Mechanism

### The Core Insight from Construction Narrative

**From construction-narrative.md (lines 493-558):**

> **M1: Phase-Gated Library Access — CRITICAL**
>
> What it is: Vocabulary in `/vocabulary/`, patterns in `/case-studies/` (separate directories)
>
> Why deployed:
> - STRUCTURAL (works without agent compliance)
> - Vocabulary extractors physically CANNOT read patterns (directory separation)
> - Highest effectiveness rating (★★★★★)
>
> What it prevents:
> - Wave 1 agents accidentally reading DD-006 fractal case study
> - Anchoring on pattern before extracting vocabulary
>
> If NOT deployed:
> - Agent reads patterns early
> - Forms categories from patterns ("fractal needs 4 scales → need 4 spacing tokens")
> - Extraction becomes pattern-driven (wrong direction)

**The architecture principle:** **Physical directory structure IS the anti-gravity mechanism.**

### How Directory Separation Works

**Separate directories prevent cross-contamination:**

```
compositional-core/
├── identity/          ← Soul constraints (IMMUTABLE)
│   └── prohibitions.md
├── vocabulary/        ← Tokens (ATOMIC values)
│   ├── tokens.css
│   └── tokens-mutability.md
├── grammar/           ← Mechanisms (TECHNIQUES)
│   ├── mechanism-catalog.md
│   ├── compositional-rules.md
│   └── border-system.md
├── components/        ← Implementations (STRUCTURES)
│   ├── components.css
│   └── component-inventory.md
├── case-studies/      ← Patterns (PROOF not templates)
│   ├── DD-003-islands.md
│   ├── OD-004-confidence.md
│   └── ...
└── guidelines/        ← Semantic rules (GAP-FILLING)
    ├── semantic-rules.md
    └── responsive-strategy.md
```

**Why this prevents gravity:**

From **lens-manifesto.md (Section 2, Conflict 3, lines 172-196):**

> **Implementation structure:**
> - `/techniques/mechanisms.md` — Border-weight gradient, 2-zone DNA (EXTRACT)
> - `/case-studies/GEOLOGICAL.md` — Full exploration with anti-prescription header (DOCUMENT)
> - NO `/templates/geological-layout.html` — This would be template (PROHIBITED)
>
> **Framing rules:**
> - Every case study begins: "⚠️ NOT A TEMPLATE"
> - Patterns show tension narrative (what produced this), NOT criteria (when to use this)
> - Divergence assignment: "If your metaphor is geological, justify independent convergence"

**The separation enforces:**
1. **MECHANISMS (grammar/) are SEPARATE FROM metaphors (case-studies/)**
   - Prevents conflating technique with example
   - Border-weight gradient (reusable) never mixed with geological stratification (metaphor-specific)

2. **TOKENS (vocabulary/) are SEPARATE FROM patterns (case-studies/)**
   - Wave 1 agents extract tokens BEFORE seeing patterns
   - Prevents "fractal needs 4 scales → need 4 spacing tokens" backwards reasoning

3. **CASE STUDIES (case-studies/) are SEPARATE FROM templates**
   - No `/templates/` directory exists
   - Every case study has "NOT A TEMPLATE" warning
   - Prevents pattern-matching

---

## 4. Anti-Gravity Architecture — 7 of 12 Mechanisms Deployed

### Essential Bundle (M1, M2, M5, M6)

**From extraction-provenance.md (lines 176-219):**

**M1: Phase-Gated Access ✅**
- Vocabulary in `/vocabulary/`, case studies in `/case-studies/` (separate directories)
- Wave 1–2 agents CANNOT access case studies during extraction
- **Gravity addressed:** Load-order (T1), early context (S1)

**M2: Dual-File Split ✅**
- `/grammar/mechanism-catalog.md` (reusable techniques) separate from `/case-studies/*.md` (metaphor-specific)
- **Gravity addressed:** Framing (F1), skill-proximity (S2)

**M5: Binary Sequential Rules ✅**
- Skill enforces: "You MUST extract in order: Vocabulary → Grammar → Patterns. DO NOT read case-studies/ until vocabulary complete."
- **Gravity addressed:** Timing (T1, T2)

**M6: Divergence Mandate ⚠️ PARTIAL**
- Success = "novel metaphor" not "good composition"
- Skill Phase 3.5 gate: "If your metaphor appears in library, justify independent convergence OR regenerate"
- **Gravity addressed:** Optimization target shift, framing (F1)

### Robust Mechanisms (M3, M9, M12)

**M3: Anti-Prescription Headers ✅**
- Every case study: "⚠️ THIS IS NOT A TEMPLATE — Pattern-matching defeats the purpose"
- **Gravity addressed:** Framing (F1), continuation bias

**M9: Divergence Verification Gate ✅**
- Phase 3.5 table: 5 questions, all must favor independent convergence, else regenerate
- **Gravity addressed:** Visibility, enforcement gate

**M12: Jazz Catalog Framing ⚠️ PARTIAL**
- Template: "Extract the PROCESS (how tension → metaphor), not the ANSWER (this CSS)"
- Missing: Explicit "Charlie Parker Real Book" metaphor
- **Gravity addressed:** Conceptual positioning

### Why Directory Architecture = Structural Anti-Gravity

**From construction-narrative.md (lines 514-527):**

> **M1 (Phase-Gated Access): CRITICAL**
>
> Why deployed:
> - STRUCTURAL (works without agent compliance)
> - Vocabulary extractors physically CANNOT read patterns (directory separation)
> - Highest effectiveness rating (★★★★★)

**The key insight:** M1 and M2 are **STRUCTURAL** mechanisms. They work automatically because the file system enforces them. An agent that tries to read patterns during vocabulary extraction gets a file-not-found error.

**Contrast with procedural mechanisms:**
- M5 (binary sequential rules) REQUIRES agent compliance
- M6 (divergence mandate) REQUIRES framing shift
- But M1 and M2 are GUARANTEED by directory architecture

**Expected anti-gravity strength: 85-90%** (from construction-narrative.md line 666)

---

## 5. What the 6-Layer Ontology Actually Provides

### Layer 1: Identity = The System's Refusals

**From grammar/README.md (lines 236-241):**

> **Layer 1 (Identity):**
> - Prohibitions constrain mechanisms (no rounded corners, no shadows)
> - Border system derived from soul constraints (sharp = 0 radius)

**What this layer is:**
- 3 soul constraints (border-radius: 0, box-shadow: none, --color-primary: #E83025)
- 18 prohibitions (8 absolute + 10 conditional)
- **THIS IS WHAT THE SYSTEM REFUSES TO DO**

**Why it's Layer 1 (first):**
- Soul constraints are IMMUTABLE
- All other layers derive from these
- Agents must know what's prohibited BEFORE extracting anything else

### Layer 2: Vocabulary = The Atoms

**From components/README.md (lines 246-257):**

> **Layer 2 (Vocabulary):**
> - All components use token variables (`var(--color-background)`)
> - No hardcoded values (enables theme flexibility)

**What this layer is:**
- 65 tokens total
- 21 IMMUTABLE (soul + identity)
- 14 MUTABLE (accent colors, zone backgrounds)
- 30 AVAILABLE (derivable via 4px increments)

**Why it's Layer 2 (before components):**
- Tokens are ATOMIC values
- Components are BUILT FROM tokens
- Must extract atoms before compounds

### Layer 3: Grammar = The Techniques

**From grammar/README.md (lines 27-76):**

> **Mechanisms = TECHNIQUES (not templates)**
>
> Example: Border-Weight Gradient
> ```css
> .container { border-left: 4px solid var(--accent-color); }  /* Primary hierarchy */
> .container__section { border-left: 3px solid var(--accent-color); }  /* Secondary */
> ```
>
> **NOT a template:**
> - Works for geological (certainty encoding)
> - Works for structural (containment hierarchy)
> - Works for confidence (epistemic status)
> - Reusable TECHNIQUE, not metaphor-specific pattern

**What this layer is:**
- 18 mechanisms (border-weight gradient, 2-zone DNA, spacing compression, etc.)
- 41 compositional rules (callout structure, dense/sparse alternation, etc.)
- 3-category border system (4px/3px/1px)

**Why it's Layer 3 (between tokens and components):**
- Mechanisms are HOW TO COMBINE atoms
- Independent of specific implementations
- Reusable across multiple metaphors

### Layer 4: Components = The Structures

**From components/README.md (lines 28-39):**

> **High confidence — use freely:**
> 1. Callout family — 2-zone DNA, 6 semantic variants
> 2. Code blocks — Dark background, syntax highlighting, 3px border
> 3. Page header — ID + title + hypothesis
> 4. Tables — 3px header border, 1px row borders
> ...

**What this layer is:**
- 26 component families, 34 CSS selectors
- 10 universal (all stages DD/OD/CD/TT)
- 8 CD-specific
- 5 DD/OD-primary
- 3 tension-test (low confidence)

**Why it's Layer 4 (after tokens + grammar):**
- Components = tokens + grammar
- Callout = 2-zone DNA (mechanism) + `--accent-color` (token)
- Cannot extract components before their constituent parts exist

### Layer 5: Case Studies = The Proof

**From extraction-provenance.md (lines 343-375):**

> **DD case studies (3):**
> - DD-003: Islands (bento grid isolation)
> - DD-004: Layers (atmospheric depth encoding)
> - DD-006: Fractal (self-similarity at 4 scales)
>
> **Anti-prescription template:**
> - Every case study begins: "⚠️ THIS IS NOT A TEMPLATE"
> - Tension narratives show derivation process, not prescriptive criteria

**What this layer is:**
- 12 case studies (DD, OD, CD)
- 3 visual variants
- Anti-prescription template enforcing "NOT A TEMPLATE" framing

**Why it's Layer 5 (after components):**
- Patterns are COMPOSITIONS (components + metaphor)
- DD-006 fractal = callouts + code blocks + headers + fractal metaphor
- Cannot document patterns before components exist

**Why it's NOT Layer 4:**
- Components are REUSABLE structures
- Case studies are PROOF (what ONE metaphor produced for ONE content)
- Mixing them creates pattern-matching risk

### Layer 6: Guidelines = The Gap-Filling Rules

**From extraction-provenance.md (lines 377-397):**

> **Semantic rules:**
> - When Info vs Context callout? (audience knowledge state)
> - When serif vs sans? (editorial vs functional)
> - When 4px vs 3px vs 1px border? (hierarchy vs confidence)
> - When dense vs sparse background? (content complexity)

**What this layer is:**
- Semantic rules (when to use what)
- Responsive strategy (768px breakpoint, spacing compression)
- Usage criteria (component confidence levels)

**Why it's Layer 6 (last):**
- Semantic rules REFERENCE all prior layers
- "When Info vs Context callout?" requires knowing callout exists (Layer 4)
- Cannot write decision rules before extracting what's being decided

---

## 6. The Construction Principle — Why This Matters

### Extraction is Construction, Not Discovery

**From construction-narrative.md (lines 927-948):**

> **The Honest Assessment**
>
> This extraction is NOT "correct."
>
> It is CONSTRUCTED to serve specific purposes:
> 1. Preserve KortAI soul (identity lens)
> 2. Enable creative freedom (enablement lens)
> 3. Prevent pattern-matching (anti-gravity mechanisms)
> 4. Separate abstraction layers (6-layer ontology)
> 5. Match extraction to purpose (reading order prescription)
>
> **A different team with different values would construct differently:**
> - Team valuing objectivity → frequency-driven extraction
> - Team valuing completeness → extract all 56 items
> - Team valuing evolution → temporal extraction
> - Team valuing simplicity → minimalist extraction

**The meta-pattern: Every choice is a trade-off.**

The 6-layer ontology is not "the correct structure." It's a CONSTRUCTED architecture optimizing for:
- Soul preservation (identity constraints never drift)
- Creative freedom (mechanisms enable, don't constrain)
- Anti-pattern-matching (case studies are proof, not templates)

### The Process Knowledge

**From construction-narrative.md (lines 950-987):**

> **The MOST REUSABLE finding from Phase C is HOW to construct extractions:**
>
> 1. Choose lens explicitly (acknowledge this is construction)
> 2. Define layers (separate abstraction levels)
> 3. Sequence extraction (dependencies flow foundation → building)
> 4. Prescribe reading order (anchor shapes categories)
> 5. Deploy anti-gravity (positioning defeats gravity)
> 6. Exclude consciously (what's NOT extracted shapes identity)
> 7. Document alternatives (trade-offs made explicit)
>
> **This PROCESS transfers to future extractions.**
>
> **The specific OUTPUTS (30-40 items, 6 layers) do NOT transfer.**

**The architecture lesson:**

The 6-layer ontology is valuable because it:
1. **Separates concerns** (immutable vs mutable vs reusable vs proof)
2. **Enforces dependency order** (atoms → compounds → compositions)
3. **Prevents cross-contamination** (directory separation = structural anti-gravity)
4. **Enables creative freedom** (mechanisms without metaphors)

---

## 7. Why Compositional-Core Is the BRIDGE (Not Just Another Folder)

### The Design-System Spectrum

```
PLANNING ──────→ OPERATIONAL SYSTEM ──────→ VALIDATION ──────→ ARTIFACTS
pipeline/        compositional-core/        tension-test/      implementation/
specification/   (6-layer bridge)           validated-
                                             explorations/
```

**Compositional-core is the ONLY folder agents actually USE to build.**

- `pipeline/` tells you HOW to plan
- `specification/` tells you WHAT should exist (theoretically)
- `compositional-core/` tells you WHAT TO USE (operationally)
- `tension-test/` validates metaphors
- `validated-explorations/` shows what was built
- `implementation/` stores build artifacts

**The bridge role:**

Compositional-core sits between:
- **Abstract** (specification, pipeline) — "what we're planning"
- **Concrete** (validated-explorations, implementation) — "what we built"

It's the **OPERATIONAL EXTRACTION** that makes the abstract usable and the concrete reusable.

### Why 37 Design-System Provenance Files Were KEPT (Not Archived)

**From MEMORY.md (Contested Decisions Resolved):**

> - 37 design-system provenance files → KEEP (living chain)

**Why these files survived the 3x audit:**

The provenance chain documents:
1. HOW the extraction was constructed (lens-manifesto.md)
2. WHY these choices were made (construction-narrative.md)
3. WHAT was extracted and excluded (extraction-provenance.md)
4. HOW anti-gravity was deployed (validation files)

**This is the LIVING CHAIN.** It's not historical documentation — it's the THEORY OF THE SYSTEM that allows future agents to:
- Understand WHY 6 layers (not 4 or 8)
- Understand WHY directory separation (anti-gravity)
- Understand WHY mechanisms separate from metaphors
- Understand WHAT trade-offs were made

---

## 8. Final Architecture Insight

**The 6-layer ontology is a dependency hierarchy designed to answer:**

> "What's the minimum an agent needs to preserve soul while maximizing creative freedom?"

**Layer 1:** Here's what you CANNOT do (prohibitions)
**Layer 2:** Here are the ATOMS you can use (tokens)
**Layer 3:** Here's HOW to combine atoms (mechanisms)
**Layer 4:** Here are STRUCTURES you can copy (components)
**Layer 5:** Here's PROOF it works (case studies — NOT templates)
**Layer 6:** Here are GAPS we can't codify (semantic rules)

**The directory separation IS the anti-gravity.** Physical structure prevents:
- Reading patterns before tokens (M1)
- Mixing mechanisms with metaphors (M2)
- Pattern-matching from case studies (M3)

**Compositional-core is the BRIDGE** because it's the only folder that's:
- OPERATIONAL (not planning, not historical)
- EXTRACTED (not hand-authored)
- COMPLETE (all 6 layers present)
- AGENT-FACING (what agents actually use)

---

## Research Complete

**Key findings for README:**
1. 6-layer ontology = dependency hierarchy (abstract → concrete)
2. Directory separation = structural anti-gravity (M1, M2 work automatically)
3. Compositional-core = bridge between abstract (spec) and concrete (explorations)
4. Each layer has a specific role (refuses, atoms, techniques, structures, proof, gaps)
5. The architecture is CONSTRUCTED (trade-offs made explicit, not "correct" solution)
6. Provenance chain documents WHY (theory, not just history)

**Sources read:**
- construction-narrative.md (991 lines)
- lens-manifesto.md (770 lines)
- grammar/README.md (288 lines)
- components/README.md (305 lines)
- extraction-provenance.md (766 lines)
- MEMORY.md (300 lines)
- design-system/ directory structure

**Next:** README synthesizer will use this research to write the architecture section.
