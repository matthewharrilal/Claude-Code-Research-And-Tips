# Compositional-Core — KortAI Design System Phase-Gated Protocol

**WARNING: This is NOT a component library. It is a PHASE-GATED PROTOCOL with different access rules for different workflow stages.**

**Last Updated:** 2026-02-14

---

## What This Is

The compositional-core is the **operational layer** that sits between abstract specification and concrete explorations. Think of it as the jazz model: you have **vocabulary** (notes, chords), **skill** (improvisation method), and **gallery** (recordings as inspiration, not sheet music to copy).

This is a CONSTRUCTED extraction, not discovered truth. Using an **Identity + Enablement hybrid lens**, we extracted 40 items from fortress explorations (DD, OD, CD) that:

1. **Preserve KortAI soul** — the 3 constraints that make KortAI instantly recognizable (border-radius: 0, box-shadow: none, warm editorial palette)
2. **Enable creative freedom** — vocabulary sufficient to compose, stopping before it constrains (30-40 item sweet spot)
3. **Prevent pattern-matching** — anti-gravity mechanisms ensure case studies are proof-of-concept, NOT templates

**This is NOT:**
- A component library to copy from
- A template system
- A comprehensive design taxonomy
- Objective truth (it's lens-constructed)

**This IS:**
- Vocabulary + grammar for building KortAI pages
- Phase-gated access protocol (what opens when)
- 6-layer ontology (identity → vocabulary → grammar → components → case studies → guidelines)
- Bridge between abstract specification and concrete implementation

---

## First Contact — Always-Load Layer

**CRITICAL: Read these 2 files BEFORE anything else, for ANY task:**

### 1. identity/prohibitions.md (22 prohibitions, 353 lines)

**8 absolute prohibitions** (NEVER, zero exceptions):
- Border-radius: 0 (ALWAYS sharp edges)
- Box-shadow: none (ALWAYS flat)
- No drop-shadow filter
- No semi-transparent backgrounds (opacity: 1)
- No gradient backgrounds
- No pure black #000 or pure white #FFF
- Serif ONLY for display headings (NOT body text)
- No decorative complexity without information

**12 conditional prohibitions** (documented exceptions):
- No 2px borders (epidemic value — use 1px or 3px+)
- No accent borders < 4px (except depth encoding)
- And 10 more structural/semantic rules

**2 meta-prohibitions** (process-level):
- No justification without research
- No patterns without tension

**WHY FIRST:** Defines identity through REFUSALS. Violating these = not KortAI.

### 2. vocabulary/tokens.css (174 lines)

**Soul constraints** (embedded in tokens):
- `--radius-sharp: 0;` (SOUL CONSTRAINT — never override)
- Box-shadow: none (enforced architecturally)

**Color palette** (warm editorial):
- `--color-primary: #E83025;` (Sanrok red)
- `--color-background: #FEF9F5;` (warm cream)
- `--color-text: #1A1A1A;` (soft black, NOT pure black)
- + 5 more accent/zone colors

**Typography trinity**:
- `--font-display: 'Instrument Serif'` (literary authority)
- `--font-body: 'Inter'` (clean readability)
- `--font-mono: 'JetBrains Mono'` (technical precision)

**Spacing scale** (4px base unit):
- 6 anchors: 4, 16, 32, 48, 64, 80
- 14 values available via 4px increments

**WHY FIRST:** Source-first extraction grounds vocabulary in implementation reality, not visual impression.

**Everything else is CONDITIONALLY loaded based on agent type and workflow phase.**

---

## Directory Structure — 6-Layer Ontology

The folder structure is a **dependency hierarchy** flowing abstract → concrete:

```
compositional-core/
│
├── identity/               Layer 1: REFUSES (what we won't do)
│   ├── prohibitions.md     22 prohibitions (8 absolute, 12 conditional, 2 meta)
│   └── soul-constraints.md 3 soul constraints (border-radius: 0, box-shadow: none, palette)
│
├── vocabulary/             Layer 2: ATOMS (foundational tokens)
│   ├── tokens.css          65 tokens (21 IMMUTABLE, 14 MUTABLE, 30 AVAILABLE)
│   └── tokens-mutability.md Classification system
│
├── grammar/                Layer 3: TECHNIQUES (how atoms combine)
│   ├── mechanism-catalog.md     18 reusable mechanisms
│   ├── compositional-rules.md   41 structural rules
│   └── border-system.md         3-category border encoding (4px/3px/1px)
│
├── components/             Layer 4: STRUCTURES (tokens + grammar)
│   ├── components.css      26 component families, 34 selectors
│   └── component-inventory.md   Confidence levels + usage
│
├── case-studies/           Layer 5: PROOF (not templates!)
│   ├── _INDEX.md           Titles + tension summaries
│   ├── ANTI-PRESCRIPTION-TEMPLATE.md  Divergence comparison structure
│   ├── DD-003-islands.md   Bento grid isolation
│   ├── DD-006-fractal.md   Self-similarity at 4 scales (crown jewel)
│   ├── OD-004-confidence.md Geological stratification
│   └── ... (9 more case studies)
│
├── guidelines/             Layer 6: GAP-FILLING (semantic decisions)
│   ├── usage-criteria.md   When to use what
│   ├── semantic-rules.md   Appropriateness criteria
│   └── responsive-strategy.md  768px breakpoint + compression
│
├── validation/             RESEARCH FOCUS (anti-gravity + gaps)
│   ├── anti-gravity-compliance.md  Mechanism deployment audit
│   ├── gap-check.md        Coverage gaps + contingencies
│   └── convergence-check.md Pattern convergence tracking
│
├── process/                RESEARCH FOCUS (construction methodology)
│   ├── construction-narrative.md  HOW extraction was built (990 lines)
│   ├── lens-manifesto.md   WHY Identity + Enablement (770 lines)
│   ├── extraction-provenance.md  WHAT was extracted + excluded (766 lines)
│   └── assumption-log.md   Invisible bias tracking (522 lines)
│
└── skill-enrichments/      EMBEDDED IN ~/.claude/skills/
    ├── tension-composition-additions.md  Phase-gated access rules
    └── perceptual-auditing-additions.md  Guardrail enrichments
```

**Why this ordering?**

- **Layer 1 (Identity)** must come first — soul constraints are IMMUTABLE, all other layers derive from these
- **Layer 2 (Vocabulary)** precedes Layer 4 — components are BUILT FROM tokens
- **Layer 3 (Grammar)** sits between tokens and components — mechanisms are reusable across metaphors
- **Layer 5 (Case Studies)** follows Layer 4 — patterns are COMPOSITIONS (components + metaphor)
- **Layer 6 (Guidelines)** must be last — semantic rules reference ALL prior layers

**Directory separation = anti-gravity mechanism.** Physical structure prevents accidental cross-contamination.

---

## How To Read This Folder — Phase-Gated Protocol

**Reading order is NOT neutral.** It shapes the categories you construct.

### FOR COMPOSITION AGENTS (Building New Pages)

**STEP 1: Load Always-Layer (Phase 0)**
1. Read `identity/prohibitions.md` (all 353 lines)
2. Read `vocabulary/tokens.css` (all 174 lines)

**STEP 2: Run Tension-Composition Phases 0-3 BLIND**
- Phase 0: Content assessment
- Phase 1: Multi-axis questioning
- Phase 2: Tension derivation
- Phase 3: Metaphor search
- **CRITICAL:** DO NOT read `case-studies/` during Phases 0-3 (PROHIBITED)

**STEP 3: Phase 3.5 — Commit Your Metaphor (LOCK-IN GATE)**
Write down committed metaphor BEFORE consulting library.
- Did I derive independently? (YES/NO)
- Can I justify without library? (YES/NO)
- Does this appear in _INDEX.md? (If YES → divergence justification required)

**STEP 4: Read Mechanism Catalog (Phase 4)**
- NOW permitted: `grammar/mechanism-catalog.md`, `components/*.css`
- Extract TECHNIQUES (border-weight gradient, 2-zone DNA)
- DO NOT extract IMPLEMENTATIONS (4px bedrock border, 6 strata)

**STEP 5: OPTIONALLY Read 2-3 Case Studies (Phase 5)**
- Read `case-studies/_INDEX.md` (titles + tensions)
- Select 2-3 most similar to YOUR metaphor
- Complete divergence table (5 dimensions)
- Verdict: DIFFERENT (proceed) or SAME (justify or regenerate)

**STEP 6: Implement Using Vocabulary + Mechanisms**
- Use exact token values (`var(--color-primary)`, `var(--space-8)`)
- Apply mechanisms adapted to YOUR metaphor
- Generate YOUR vocabulary (not library metaphor terms)

**STEP 7: Verify with Perceptual-Auditing**
- Run full audit (soul + guardrails + squint + comparison)
- Check: 940px min container, 16px spacing, 32px padding, 40% compression ratio

**Phase Access Rules:**
- ✅ `identity/`, `vocabulary/` → Phase 0 (always-load)
- ✅ `grammar/`, `components/`, `guidelines/` → Phase 4
- ✅ `case-studies/` → Phase 5 ONLY (after implementation)
- ❌ ALL case studies prohibited in Phases 0-4

### FOR AUDIT AGENTS (Verifying Pages)

**Reading order: Source-first (check implementation)**

1. Read `identity/prohibitions.md` (compliance checklist)
2. Read `vocabulary/tokens.css` (token verification)
3. Read `grammar/mechanism-catalog.md` (mechanism identification)
4. Read `case-studies/*.md` (quality comparison — what is "KortAI-quality"?)

**No phase restrictions** — audit agents read everything.

**Audit focus:**
- Soul verification (border-radius: 0? box-shadow: none? colors correct?)
- Prohibition compliance (22 prohibitions checked)
- Mechanism identification (which used? applied correctly?)

### FOR RESEARCH AGENTS (Analyzing the System)

**Reading order: Context-first (process → validation → content)**

1. Read `process/lens-manifesto.md` (WHY extraction choices made)
2. Read `process/construction-narrative.md` (HOW extraction built)
3. Read `validation/anti-gravity-compliance.md` (HOW mechanisms deployed)
4. Read all content in ANALYSIS mode (not application mode)

**Critical distinction:**
- Analysis mode: "How does this system work?"
- NOT application mode: "Which template do I use?"

---

## The Practical Workflow — Step-by-Step for New Pages

This is the concrete 7-step process for building any KortAI page.

### STEP 1: ALWAYS Load Vocabulary First

**Files to read (all lines):**
1. `identity/prohibitions.md` — your constraints
2. `vocabulary/tokens.css` — your palette
3. `components/components.css` (first 100 lines) — your vocabulary

**What you're loading:**
- Soul constraints (border-radius: 0, box-shadow: none)
- Color palette (8 values)
- Typography trinity (3 fonts)
- Spacing scale (6 anchors, 14 available)
- Border weights (4px/3px/1px)
- 2-zone component DNA pattern

### STEP 2: Run Tension-Composition Phases 0-3 BLIND

**What you're NOT doing:**
- ❌ Reading `case-studies/` (PROHIBITED until Phase 5)
- ❌ Reading prior explorations (DD-001, OD-004, etc.)
- ❌ Looking at tension-test layouts

**What you're building:**
Independent creative derivation from YOUR content tensions, not pattern adaptation.

### STEP 3: Phase 3.5 — Commit Your Metaphor (POINT OF NO RETURN)

**The gate questions:**
1. Did I derive independently? (If NO: RESTART Phase 1)
2. Can I justify without library? (If NO: Regenerate with constraint)
3. Does this appear in _INDEX.md? (If YES: Divergence justification required)

**After this gate:** You DO NOT change metaphor based on library consultation.

### STEP 4: Read Mechanism Catalog for Reusable Techniques

**Extract TECHNIQUES (reusable):**
- Border-weight gradient (technique: thickness encodes hierarchy)
- 2-zone component DNA (sparse label + dense body)
- Spacing compression (density inversely encodes confidence)

**DO NOT extract IMPLEMENTATIONS (metaphor-specific):**
- "4px bedrock border" (specific value for geological)
- "6 strata structure" (specific architecture for fractal)

**The distinction:** "Border-weight gradient encodes semantic dimension" (technique) vs "4px/3px/1px for confidence" (implementation).

### STEP 5: OPTIONALLY Read 2-3 Case Studies

**Purpose:** Verify your metaphor DIVERGES from library (not to get ideas).

**Divergence table (5 dimensions):**
1. Metaphor domain (geological vs manuscript vs fractal)
2. Structural isomorphisms (bedrock→foundation vs seed→growth)
3. Section architecture (6 strata vs 4 scales vs 8 acts)
4. Vocabulary (geological terms vs botanical vs theatrical)
5. Mechanisms used (border-weight vs spacing-compression)

**Passing criteria:** DIFFERENT on 3+ dimensions = strong divergence

### STEP 6: Implement Using CSS Vocabulary + Mechanisms

**From vocabulary:**
```css
color: var(--color-primary);
background: var(--color-background);
font-family: var(--font-display);
padding: var(--space-8);
border-left: var(--border-structural) solid var(--accent-color);
```

**From mechanisms (adapted):**
```css
/* 2-zone DNA adapted to YOUR metaphor */
.your-section {
  border-left: 4px solid var(--accent-blue); /* mechanism: border-weight */
  padding: var(--space-6);
}

.your-section__label {
  font-size: var(--type-meta); /* sparse label */
  text-transform: uppercase;
}

.your-section__content {
  font-size: var(--type-body); /* dense body */
}
```

**Absolute rules:**
```css
border-radius: 0; /* ALWAYS sharp */
box-shadow: none; /* ALWAYS flat */
opacity: 1; /* NO transparency on containers */
```

### STEP 7: Verify with Perceptual-Auditing

**Key guardrails:**
- 940px min container (65% viewport at 1440px)
- 16px label-to-heading spacing minimum
- 32px padding floor on containers
- 40% compression ratio maximum

**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## What NOT To Do — 7 Critical Anti-Patterns

### 1. DO NOT Read Case Studies Before Committing Metaphor

**Wrong:**
```
1. Read geological case study (depth metaphor)
2. "Oh, geological works for depth!"
3. Use geological structure
```

**Correct:**
```
1. Run tension-composition Phases 0-3 BLIND to library
2. YOUR tensions reveal depth + warmth/austerity
3. YOUR metaphor search yields "archaeological dig"
4. Lock in "archaeological dig" (Phase 3.5)
5. THEN read geological case study
6. Divergence table shows: domain SAME (earth), metaphor DIFFERENT
```

### 2. DO NOT Treat Prohibitions as Suggestions

**Wrong:** "NEVER says border-radius > 0, but my case is special..."

**Correct:** Prohibitions are IDENTITY-LEVEL BOUNDARIES. Violating them = not KortAI.

**If you want depth without box-shadow:** Use solid offset depth mechanism (::after pseudo-element with offset background).

### 3. DO NOT Copy Case Study Structures

**Wrong:** Boris used 6 layers → "I'll use 6 layers too!"

**Correct:** Boris had 6 certainty groupings → YOUR content has YOUR structure. Maybe 3 layers, maybe grid, maybe timeline.

### 4. DO NOT Extract Implementations (Extract Techniques)

**Wrong:** Copy exact values: `padding: 48px; 40px; 32px;`

**Correct:** Extract compression technique, derive YOUR values tuned to YOUR content.

### 5. DO NOT Treat Components as Menu

**Wrong:** "I need info box → .callout--info → copy that HTML."

**Correct:** "My metaphor is construction site → I need safety notice → apply 2-zone DNA to MY vocabulary."

### 6. DO NOT Use Library Metaphor Vocabulary

**Wrong:** `<div class="stratum">` when YOUR metaphor is "factory assembly line."

**Correct:** `<div class="assembly-station">` — SAME techniques (border-weight, spacing), DIFFERENT names.

### 7. DO NOT Read Everything at Once

**Wrong:** Read all files to "understand the system."

**Correct:** Phase-gated reading — vocabulary → mechanisms → case studies (sequential, phase-appropriate).

---

## The Jazz Model — Practical Analogy

**Compositional-core as jazz education:**

| Jazz Education | Compositional-Core | What It Means |
|----------------|-------------------|---------------|
| **Scales/chords** | tokens.css | Fixed vocabulary you USE, not invent |
| **Music theory** | mechanism-catalog.md | How elements combine (rules + techniques) |
| **Recordings** | case-studies/ | Proof-of-concept, not templates |
| **Instrument constraints** | prohibitions.md | Physical boundaries that shape creativity |
| **Improvisation course** | tension-composition skill | HOW to derive original work |
| **Ear training** | perceptual-auditing skill | HOW to verify what you built |

**The workflow parallel:**

1. **Learn your instrument** → Read tokens.css, components.css, prohibitions.md
2. **Analyze the song** → Tension-composition Phases 0-3
3. **Commit to your approach** → Phase 3.5 lock-in
4. **Study music theory** → Mechanism catalog
5. **OPTIONALLY listen to other versions** → Case studies, Phase 5
6. **Play your arrangement** → Implement
7. **Record and listen back** → Perceptual-auditing

**The outcome:** Original composition that sounds like jazz (follows theory) but is YOURS (unique interpretation).

---

## Lens Choice & Trade-offs — Transparency Section

**This extraction used Identity + Enablement hybrid lens.**

### Why Identity + Enablement (Not the 3 Alternatives)

**The question this answers:**

NOT "What did KortAI do?" (Frequency lens)
NOT "What is complete?" (Completeness lens)
NOT "What is minimum?" (Minimalism lens)

**INSTEAD:** "What makes KortAI recognizably KortAI, while still permitting future creativity?"

**Identity (100% weight):**
- Soul preservation — 3 constraints that make KortAI instantly recognizable
- Character defined through REFUSAL (what we won't do) as much as affordance
- Visual signatures that survive across all content types

**Enablement (80% weight):**
- Creative freedom — extract only what ENABLES, stop before it CONSTRAINS
- Negative rules > positive templates
- Minimum viable foundations — 30-40 item sweet spot

### What Was Traded Off

**Frequency Lens (deprioritized):**
- GAVE UP: Empirical validation (only extract >30% frequency)
- GAINED: Identity preservation (can extract 1-file soul patterns like fractal)
- Example: Skip-link appears 100%, but excluded (web standard, not KortAI-specific)

**Completeness Lens (deprioritized):**
- GAVE UP: Comprehensive documentation (all named artifacts)
- GAINED: Enablement threshold respected (40-item ceiling)
- Example: Syntax highlighting tokens exist but not extracted separately

**Minimalism Lens (deprioritized):**
- GAVE UP: Absolute simplicity (10 items)
- GAINED: Creative friction avoidance (30-40 items)
- Example: Extract 6 spacing anchors, not just 4px base unit principle

### The Enablement Threshold (30-40 Items)

**Below 30:** Creative paralysis — agents lack foundation, default to rounded corners
**30-40:** Creative enablement — vocabulary sufficient, doesn't constrain
**Above 40:** Creative constraint — too many mandates, pattern-matching dominates

**Why 40 is the ceiling:**
- 16 consensus core (soul + visual signatures)
- 8 prohibitions (minimum to prevent violations)
- 16 additional components/mechanisms (structural scaffolding)
- **40 = 16 + 8 + 16** (maximum before constraint zone)

### Prohibitions > Components (Identity Asymmetry)

**Core insight:** "What you REFUSE defines you more than what you OFFER."

**If you had to choose:**
- **Scenario A:** 40 components, 0 prohibitions → Agents add rounded corners (training bias)
- **Scenario B:** 3 soul constraints + 18 prohibitions, 0 components → Agents compose novel components respecting soul

**Verdict:** Prohibitions preserve identity better than components provide capability.

### The Epistemological Truth

**There is NO SINGLE CORRECT extraction.**

- Minimalism lens: 10 items extracted
- Identity + Enablement: 40 items extracted
- Completeness lens: 56 items extracted

**All three are valid within their frames.** This is lens-dependent reality construction, not discovery.

**Required transparency:**
- **Lens choice:** Identity + Enablement hybrid (stated)
- **Threshold:** 30-40 items (stated)
- **Granularity:** 1 component + 6 parameters, not 6 components (stated)
- **Reading order:** Source-first for vocabulary, visual-first for patterns (stated)

---

## How This Was Constructed — Brief Metacognitive Section

**Critical insight: This extraction is CONSTRUCTION, not discovery.**

### The 4 Invisible Assumptions

Every agent carries these from training distribution:

1. **Extraction is FOR agents** (30% residual risk) — Partially mitigated via content-first framing
2. **Tokens are discrete items** (10% residual risk) — Successfully mitigated via 6-layer ontology
3. **Context-independent value** (40% residual risk) — Partially mitigated via case study provenance
4. **Discovery language** (70% residual risk) — FAILED mitigation, awareness didn't change writing

**The honest limitation:** We know extraction is construction. We documented this. But we still write as if it's discovery. Awareness doesn't automatically change behavior.

### What Would Be Different with Other Lenses

**Frequency lens (42-45 items):**
- Skip-link extracted (100% frequency) — currently excluded
- Print styles extracted (80% frequency) — currently excluded
- Character: Backward-looking, more web standards
- Trade-off: Objective validation vs treats standards as KortAI-specific

**Completeness lens (56+ items):**
- Syntax highlighting tokens extracted (7 items)
- Dark mode structure extracted (even though unvalidated)
- Character: Reference-complete, nothing overlooked
- Trade-off: Comprehensive documentation vs bloat

**Minimalism lens (10 items):**
- Only: 3 soul constraints + 8 prohibitions = DONE
- Character: Maximum creative freedom, minimum constraints
- Trade-off: Philosophical purity vs agents lack foundation

**The range: 10 → 40 → 56 items. Phase C chose 40 — exactly at enablement ceiling.**

### Process Knowledge > Output

**The compositional-core vocabulary will become obsolete. The process knowledge will not.**

**Why:**
- Vocabulary is specific to fortress content (DD, OD, CD)
- Process is transferable to any future extraction (HOW to construct lens-based extractions)

**The 50:1 compression ratio:** 990 lines of construction-narrative.md compresses to "Choose lens explicitly." But the 99.8% loss contains the REASONING.

**Read process/ FIRST to understand construction methodology:**
1. How to derive lenses from corpus
2. How to sequence waves in dependency order
3. How to prescribe reading order for different purposes
4. How to deploy anti-gravity mechanisms selectively
5. How to document construction vs discovery

---

## Relationship to Other Folders — Context Within Design-System

```
ABSTRACT ←──────────── COMPOSITIONAL-CORE ──────────→ CONCRETE

specification/         compositional-core/          validated-explorations/
(token specs)          (operational system)         (DD-001–006, OD-001–006, etc.)
```

**Compositional-core IS the bridge:**

- `validated-explorations/` = SOURCE MATERIAL (DD-001 through CD-006 HTML files)
- `specification/` = ABSTRACT TOKEN SPECS (theoretical definitions)
- `pipeline/` = PLANNING & STRATEGY (how we'll build)
- `tension-test/` = METAPHOR VALIDATION (15 HTML layouts testing coherence)
- `research/` = RESEARCH FINDINGS (R1-R5 findings, synthesis)
- `axis/` = SINGLE-AXIS EXPERIMENTS (AD explorations)
- `implementation/` = BUILD ARTIFACTS (migrations, outputs)

**Compositional-core:**
- Extracted FROM validated-explorations
- Operationalizes specification
- Is what came OUT of pipeline planning
- Provides techniques (not metaphors) validated in tension-test
- Documents research findings as applied extractions

**Compositional-core is the ONLY folder agents use to build.** Everything else is planning, validation, or historical artifacts.

---

## Anti-Gravity Mechanisms — The 5 Essential Guardrails

**Why anti-gravity matters:** Without these mechanisms, agents will:
1. Read case studies first → pattern-match instead of derive
2. Skip prohibitions → assume rounded corners from training
3. Copy implementations → not extract mechanisms
4. Treat patterns as templates → not proof-of-concept
5. Read everything at once → no phase separation

### M1: Phase-Gated Access (Directory Separation)

**What it is:** Vocabulary in `/vocabulary/`, case studies in `/case-studies/` (separate directories)

**How it works:** Agents physically CANNOT access case studies during extraction (directory separation enforces timing)

**Gravity addressed:** Load-order (T1), early context (S1), proximity-to-task (S3)

**Protection:** 60% (structural — works even when agents misbehave)

### M2: Dual-File Split (Mechanisms vs Metaphors)

**What it is:** `mechanism-catalog.md` (reusable techniques) SEPARATE from `case-studies/*.md` (metaphor-specific)

**How it works:** Mechanisms framed as techniques ("border-weight gradient"), case studies framed as proof ("geological strata")

**Gravity addressed:** Framing (F1), skill-proximity (S2)

**Protection:** 80% (structural + framing)

### M5: Binary Sequential Rules (MUST/DO NOT Language)

**What it is:** Skill enforces mandatory sequence (Phase 1 → 2 → 3 → 4) with library prohibited until Phase 4

**Language examples:**
- "YOU MUST NOT read case-studies/ during Phases 0-3"
- "Violation of this rule invalidates the entire derivation"
- "BEFORE proceeding to Phase 4, you MUST complete this gate"

**Gravity addressed:** Timing (T1), pre-creative timing (T2), early context (S1)

**Protection:** 95% (when agents comply), 0% (if ignored)

### M6: Divergence Mandate (Success = Novel Metaphor)

**What it is:** Redefines success as "novel metaphor" not "good composition". Convergence requires justification.

**Phase 3.5D justification table:**
- Did I encounter tension independently? (evidence required)
- Did I search metaphor space widely? (alternatives required)
- Do structural isomorphisms differ? (comparison table required)
- Is vocabulary distinct? (word choice analysis required)
- Can I prove independent convergence? (ALL answers must be YES)

**If justification fails:** Regenerate metaphor with explicit constraint: "BANNED: [library pattern name]"

**Gravity addressed:** Optimization target shift, prescriptive framing (F1)

**Protection:** 90% (via Phase 3.5 gate)

### M9: Divergence Verification Gate (Phase 3.5 Checkpoint)

**What it is:** STRUCTURAL checkpoint after metaphor commitment, before library access

**5-question table:**
1. Does this metaphor appear in /case-studies/_INDEX.md?
2. If YES: Can I prove independent convergence? (5 sub-questions)
3. Passing criteria: ALL answers favor independent convergence
4. If fail: Regenerate with constraint
5. NO BYPASS — gate is mandatory

**Gravity addressed:** Visibility, enforcement gate

**Protection:** 90% (structural gate, not warning)

---

## Common Mistakes — What Agents Do WRONG by Default

### Mistake 1: Reading Case Studies First

**Default behavior:**
1. See `case-studies/DD-006-fractal.md`
2. Think: "This is the design system documentation"
3. Read entire file, see 6-layer structure
4. Build new page with 6 layers → pattern-matching

**Prevention:**
- M1 (directory separation) — case studies in separate folder
- M3 (anti-prescription headers) — every case study starts "NOT A TEMPLATE"
- M5 (binary prohibition) — Phase 0D: "MUST NOT read case-studies/ during Phases 0-3"

### Mistake 2: Skipping Prohibitions

**Default behavior:**
1. See `vocabulary/tokens.css`
2. Think: "I'll use these colors and fonts"
3. Skip `identity/prohibitions.md`
4. Add `border-radius: 4px` (training bias: rounded = friendly)
5. Soul violation → entire output invalid

**Prevention:**
- Always-load layer: `prohibitions.md` MUST be read first
- Binary language: "NEVER use border-radius > 0 on ANY element"

### Mistake 3: Pattern-Matching to Case Studies

**Default behavior:**
1. Phase 5, read DD-006-fractal.md
2. See 4 scales (Atom → Ecosystem)
3. "My content has 4 sections too → I'll use 4 scales"
4. Copy fractal structure → pattern-matching

**Prevention:**
- M3 (anti-prescription headers) — "Pattern-matching defeats the purpose"
- M6 (divergence mandate) — Success = novel metaphor
- M9 (verification gate) — Phase 3.5 checks: "Did I derive independently?"

### Mistake 4: Extracting Implementations (Not Mechanisms)

**Default behavior:**
1. Read mechanism-catalog.md
2. See "Border-Weight Gradient: 4px/3px/1px for confidence"
3. Copy exact values to different context (hierarchy, not confidence)
4. Misapplication → visual incoherence

**Prevention:**
- M2 (dual-file split) — mechanisms separate from metaphors
- Mechanism framing: "Border-weight gradient (technique) — encodes ANY hierarchy/confidence/importance"
- Phase 4 instructions: "Extract technique, NOT implementation"

### Mistake 5: Reading Everything at Once

**Default behavior:**
1. See compositional-core/ directory
2. Read all files to "understand the system"
3. Context: prohibitions + tokens + mechanisms + case studies
4. Mixed signals → no clear derivation path

**Prevention:**
- M1 (phase-gated access) — directory separation enforces timing
- M5 (binary sequential rules) — Phase 0D prohibition
- Reading order prescription: source-first for vocabulary, visual-first for case studies (different phases)

---

## Failure Modes — What Happens WHEN Rules Are Violated

**Fundamental insight:** Anti-gravity mechanisms are STRONG but NOT foolproof. Every mechanism has residual risk.

### Failure Mode 1: Case Studies Become Templates

**Scenario:** Agent reads DD-006 BEFORE tension-composition.

**Structural mitigations:**
- M1 (physical separation): 60% protection
- M5 (binary prohibition): 95% protection (if respected)
- M9 (divergence gate): 90% protection

**Residual risk:** If ALL procedural mechanisms fail, protection drops to 60-70% (M1 + M9 remain).

**Probability:** ~0.5% (agents must ignore BOTH prohibition AND gate)

### Failure Mode 2: Two-Phase Boundary Not Enforced

**Scenario:** Same agent does extraction AND documentation, reads library DURING derivation.

**Structural mitigations:**
- M1 (physical separation): 60% protection
- M5 (binary rules): 95% protection (if respected)
- M2 (dual-file split): 80% protection

**Residual risk:** 60-80% (M1 is last defense)

**Probability:** ~4% (boundary violation + sequence ignored)

### Failure Mode 3: Prohibitions Treated as Suggestions

**Scenario:** "NEVER border-radius > 0, but my case is special..."

**Structural mitigations:**
- ABSOLUTE category in soul-constraints.md
- Comments in tokens.css: "SOUL CONSTRAINT — never override"
- (Hypothetical) Pre-commit hook blocks violations

**Residual risk:** ~0.75% for core soul constraints, ~15% for implied prohibitions

**Damage:** SEVERE for soul constraints (identity breaks), MODERATE for implied

### Overall System Resilience

**Best-case (all mechanisms working):**
- Pattern-matching: 5-10% (genuine independent convergence)
- Soul violations: 0%
- Novelty: 90%+

**Realistic-case (some procedural failures):**
- Pattern-matching: 15-25%
- Soul violations: 1-2%
- Novelty: 70-80%

**Worst-case (structural mechanisms only):**
- Pattern-matching: 40-60%
- Soul violations: 5-10%
- Novelty: 40-60%

**The fundamental truth:** Compositional-core is NOT foolproof. But structural mechanisms (M1, M2, M9) provide 60-90% protection EVEN WHEN agents misbehave.

---

## Before You Build — Checklist

```
□ STEP 1: Load vocabulary FIRST
  □ Read prohibitions.md (all 353 lines)
  □ Read tokens.css (all 174 lines)
  □ Read components.css (first 100 lines)

□ STEP 2: Run tension-composition Phases 0-3 BLIND
  □ Phase 0: Content assessment + library prohibition
  □ Phase 1: Multi-axis questioning
  □ Phase 2: Tension derivation
  □ Phase 3: Metaphor search
  □ VERIFY: Did NOT read case-studies/ directory

□ STEP 3: Lock in metaphor (Phase 3.5)
  □ Write metaphor commitment
  □ Document justification
  □ Verify divergence (or justify convergence)
  □ VERIFY: Metaphor is LOCKED

□ STEP 4: Read mechanism catalog
  □ Read mechanism-catalog.md (first 200 lines)
  □ Extract 3-5 techniques relevant to YOUR metaphor
  □ VERIFY: Extracted TECHNIQUES, not implementations

□ STEP 5: OPTIONALLY read 2-3 case studies
  □ Read _INDEX.md (titles only)
  □ Select 2-3 most similar
  □ Complete divergence table
  □ VERIFY: Divergence confirmed OR convergence justified

□ STEP 6: Implement
  □ Use token VALUES
  □ Apply mechanism TECHNIQUES
  □ Generate YOUR vocabulary
  □ VERIFY: All prohibitions followed

□ STEP 7: Verify with perceptual-auditing
  □ Run full audit
  □ Check guardrails
  □ VERIFY: Zero soul violations
```

---

## Key Principles

**1. Identity Lives in Refusal**

What you REFUSE defines you more than what you OFFER. The 18 prohibitions are more important than the 26 components.

**2. Enablement Has a Threshold**

Below 30 = friction. 30-40 = enablement. Above 40 = constraint.

**3. Mechanisms ≠ Implementations**

Border-weight gradient (mechanism) vs "4px bedrock border" (implementation). Extract techniques, NOT values.

**4. Case Studies = Proof, NOT Templates**

Patterns show what worked for THAT content with THAT metaphor. Study for COMPARISON, not REPLICATION.

**5. Phase-Gated Access = Structural Anti-Gravity**

Directory separation prevents pattern-matching even when agents misbehave.

**6. The Jazz Model**

You learn vocabulary (tokens), theory (mechanisms), listen to recordings (case studies for inspiration), respect instrument constraints (prohibitions), practice with methodology (skills).

**7. Construction, Not Discovery**

This extraction is a lens-constructed artifact. Different lenses → different extractions → both valid within their frames.

**8. Process > Output**

The compositional-core vocabulary will become obsolete. The process knowledge (HOW to construct extractions) will not.

---

## Final Critical Principle

**Compositional-core is NOT documentation to "learn." It is a PROTOCOL to FOLLOW.**

**Documentation mindset (WRONG):**
- "I'll read all files to understand the system"
- "Case studies show me how to build pages"

**Protocol mindset (CORRECT):**
- "I'll read ONLY what my current phase permits"
- "Case studies verify my metaphor is novel"

**The test:**

Can you PROVE you followed the protocol?
- ✅ Written metaphor commitment (Phase 3.5)
- ✅ Library access log (what was read when)
- ✅ Divergence table (5 dimensions compared)
- ✅ Zero prohibited access (no case studies in Phases 0-4)

**If any proof is missing → protocol was violated.**

---

## Questions?

**For orientation:** Start by reading `process/lens-manifesto.md` to understand WHY this extraction exists.

**For methodology:** Read `process/construction-narrative.md` to understand HOW it was built.

**For application:** Follow the 7-step workflow above.

**For research:** Read `validation/` directory to understand anti-gravity compliance and gaps.

**Remember:** This is a phase-gated protocol, not a usage library. Read what your phase permits, no more.
