# Agent Ingestion Protocol — How to Consume compositional-core/

**Date:** 2026-02-14
**Researcher:** ingestion-researcher
**Purpose:** Define HOW agents should read and consume the compositional-core folder structure

---

## EXECUTIVE SUMMARY

**The compositional-core folder is NOT a library to "use." It is a PHASE-GATED PROTOCOL with different access rules for different agent types at different workflow stages.**

**Critical Insight:** The reading order is NOT NEUTRAL. Source-first vs visual-first produces different category constructions (from lens-manifesto.md lines 526-646). The two-phase boundary exists to prevent continuation bias (agents that read case studies first will pattern-match, not derive).

**First Contact Rule:** ALWAYS read `prohibitions.md` and `tokens.css` BEFORE anything else. These are the "always-load layer" — the non-negotiable identity constraints that define what KortAI IS by what it REFUSES.

---

## 1. FIRST CONTACT PROTOCOL — Brand New Agent Entry Point

### What a Fresh Agent Needs Immediately

**Scenario:** Agent receives task: "Build a new documentation page using the KortAI design system."

**What happens by default (WRONG):**
1. Agent scans directory, sees `case-studies/`
2. Opens DD-006-fractal.md (first alphabetically or highest-profile)
3. Sees geological strata layout with 6 layers
4. Copies structure → pattern-matching, not derivation

**What SHOULD happen (CORRECT):**
1. Agent reads `README.md` (orientation — explains phase-gated structure)
2. Agent reads `identity/prohibitions.md` (absolute constraints)
3. Agent reads `vocabulary/tokens.css` (foundational vocabulary)
4. Agent receives TASK-SPECIFIC instructions (which phase they're in)
5. Agent follows phase-gated access rules (see Section 3)

### The Absolute Minimum — Always-Load Layer

**Two files MUST be loaded for ANY task:**

1. **`identity/prohibitions.md`** (22 prohibitions, 353 lines)
   - 8 absolute (border-radius: 0, box-shadow: none, etc.)
   - 12 conditional (2px borders prohibited except OD-004)
   - 2 meta-prohibitions (process-level)
   - **WHY FIRST:** Defines identity through REFUSALS. Prevents soul violations before they start.

2. **`vocabulary/tokens.css`** (174 lines)
   - Soul constraints (border-radius: 0, box-shadow: none)
   - Color palette (warm cream #FEF9F5, soft black #1A1A1A, Sanrok red #E83025)
   - Typography trinity (Instrument Serif, Inter, JetBrains Mono)
   - Spacing scale (4px base unit, 6 anchors: 4/16/32/48/64/80)
   - **WHY FIRST:** Source-first extraction (not visual). Grounds vocabulary in implementation reality.

**Everything else is CONDITIONALLY loaded based on agent type and workflow phase.**

---

## 2. READING ORDER — The Critical Non-Neutrality

### Why Reading Order Matters (Research Evidence)

**From lens-manifesto.md lines 526-540:**

> Reading order is NOT neutral. It shapes categories agents construct.
>
> **Evidence:**
> - Visual-first agents extracted perceptual patterns (drop caps, rhythm, "islands feel like islands")
> - Source-first agents extracted technical constraints (border-radius: 0, box-shadow: none, CSS tokens)
> - SAME MATERIAL. DIFFERENT ORDER. DIFFERENT CATEGORIES.

**The Mechanism:** First-read material becomes ANCHOR. Later material is categorized relative to anchor.

**Example:**
- **Visual-first:** See sharp corners → categorize as "visual soul" → read CSS → confirm observation
- **Source-first:** Read `border-radius: 0` → categorize as "token" → see sharp corners → confirm CSS value

SAME FINDING (sharp corners), DIFFERENT FRAMING (soul vs token).

### Two Reading Orders for Two Purposes

#### Order A: Source-First (Vocabulary Extraction)

**WHO:** Agents extracting tokens, components, mechanisms
**WHEN:** Composition agents building new pages, audit agents verifying token compliance
**WHAT:** Foundations and techniques

**READING ORDER:**
1. Read CSS source code FIRST (`vocabulary/tokens.css`, `components/*.css`)
2. Read HTML structures SECOND (`grammar/mechanism-catalog.md`)
3. Read visual renderings LAST (`case-studies/*-visual.md` screenshots — confirmation only)

**WHY:** Creates technical categories (tokens, components, mechanisms). Prevents visual-driven over-interpretation ("this FEELS important" vs "this IS in code"). Vocabulary is implementation-focused — source is ground truth.

**CATEGORIES PRODUCED:**
- `:root` tokens (colors, spacing, fonts)
- Component structures (2-zone callout, code block, header)
- CSS mechanisms (border-weight gradient, solid-offset depth)

**WHAT THIS PREVENTS:**
- Visual-only patterns that have no CSS implementation
- Over-abstracting visual rhythm into "extractable component"
- Missing technical constraints hidden in source

**BINARY RULE (from lens-manifesto.md line 570):**
> "You MUST read source code BEFORE visual rendering during vocabulary extraction. DO NOT form categories from visual impressions alone."

#### Order B: Visual-First (Case Study Analysis)

**WHO:** Research agents analyzing compositional patterns
**WHEN:** Phase 5 divergence verification (AFTER Phase 4 implementation complete)
**WHAT:** Compositional explorations (PULSE, GEOLOGICAL, etc.)

**READING ORDER:**
1. Read visual rendering via screenshots FIRST (experience the page)
2. Read tension narrative SECOND (understand what produced this)
3. Read source implementation LAST (how it was built)

**WHY:** Creates perceptual categories (rhythm, density, metaphor coherence). Captures EXPERIENCE (what users perceive, not what code implements). Case studies are about EFFECT, not implementation.

**CATEGORIES PRODUCED:**
- Metaphor coherence ("geological feels like strata")
- Perceptual patterns (dense/sparse alternation, visual weight)
- Experiential qualities ("this feels authoritative")

**WHAT THIS PREVENTS:**
- Missing emergent visual effects (patterns visible rendered but not obvious in source)
- Over-focusing on CSS at expense of experience
- Documenting implementation without understanding effect

**BINARY RULE (from lens-manifesto.md line 599):**
> "You MUST visually render pages BEFORE reading source during case study documentation. DO NOT document implementation before understanding experience."

### What Happens If Order Is Reversed

**If vocabulary extracted visual-first:**
- Risk: "I see rhythmic spacing → extract 'rhythm component'"
- Reality: No such component exists in CSS, it's emergent from multiple spacing values
- Outcome: Hallucinated components, false abstractions

**If case studies documented source-first:**
- Risk: "I see 6-layer nesting → extract '6-layer pattern'"
- Reality: The 6 layers serve geological metaphor (bedrock → atmosphere), not a reusable structure
- Outcome: Pattern-as-template, metaphor-as-recipe

---

## 3. PHASE-GATED ACCESS — The Two-Phase Boundary

### The Fundamental Split

**CRITICAL FINDING (from anti-gravity-compliance.md + lens-manifesto.md):**

The folder structure enforces **TEMPORAL SEPARATION** between vocabulary extraction and case study consultation.

```
compositional-core/
├── vocabulary/          ← Wave 1-2 agents (source-first)
├── grammar/             ← Wave 1-2 agents (source-first)
├── components/          ← Wave 1-2 agents (source-first)
└── case-studies/        ← Wave 3 agents ONLY (visual-first, Phase 5)
```

**Directory separation = structural timing barrier.** Agents building compositions CANNOT access case studies until Phase 5.

### Why the Two-Phase Boundary Exists

**From rigidity-mechanics research (referenced in tension-composition-additions.md):**

**Problem:** If agents read case studies BEFORE deriving their own metaphor, they will pattern-match (not derive independently).

**Mechanism:** **Continuation bias** — LLMs trained on instruction-following will continue patterns they've seen early in context.

**Solution:** **Phase-gated access** — vocabulary/mechanisms available early, case studies withheld until AFTER metaphor commitment.

### Phase 0-3: Library Prohibited (Derivation Phase)

**From tension-composition-additions.md lines 74-92:**

```markdown
**YOU MUST NOT read the following during Phases 0-3:**

- `/active/design-system/case-studies/` (pattern library)
- Prior compositional explorations (DD-001 through AD-006)
- Tension-test layouts (boris/, gastown/, playbook/)

**Violation of this rule invalidates the entire derivation.**
```

**What IS permitted Phases 0-3:**
- ✅ `identity/prohibitions.md` (always-load)
- ✅ `vocabulary/tokens.css` (always-load)
- ✅ Content analysis (read the content to be composed)
- ✅ Tension derivation (multi-axis questioning)
- ✅ Metaphor search (external domain knowledge, NOT library)

**What is PROHIBITED Phases 0-3:**
- ❌ `case-studies/*.md` (ANY case study)
- ❌ `grammar/mechanism-catalog.md` (mechanisms are Phase 4)
- ❌ `components/*.css` (components are Phase 4)
- ❌ Visual renderings of prior explorations

**Enforcement:** Binary prohibition ("MUST NOT") + structural separation (directories)

### Phase 3.5: Metaphor Commitment Gate

**From tension-composition-additions.md lines 124-187:**

**BEFORE proceeding to Phase 4, agent MUST:**

1. **State committed metaphor** in writing
2. **Document WHY this metaphor** (tension resolution + alternatives rejected)
3. **Verify commitment:**
   - Did I derive independently? (YES/NO)
   - Can I justify without library? (YES/NO)
   - Does this metaphor appear in library index? (Check `_INDEX.md` titles ONLY)
4. **If convergence detected:** Provide STRONG justification or regenerate

**The Gate:** This is a **LOCK-IN** moment. After Phase 3.5, the metaphor CANNOT change based on library consultation.

**WHY:** Prevents "I committed to geological, but after seeing library I'll switch to manuscript" — this would be pattern-matching disguised as derivation.

### Phase 4: Mechanism Library Access (Implementation Phase)

**From tension-composition-additions.md lines 226-255:**

```markdown
**You may NOW consult:**

- `/active/design-system/techniques/mechanisms.md` (reusable techniques catalog)
- `/active/design-system/foundations/components.md` (base components)

**What to extract:**
✅ REUSABLE TECHNIQUES (apply to ANY content):
   - Border-weight gradient encoding
   - 2-zone component DNA
   - Spacing compression patterns

❌ DO NOT extract from case studies:
   - Full layout architectures (metaphor-specific)
   - Section structures (metaphor-driven)
```

**Phase 4 access rules:**
- ✅ `grammar/mechanism-catalog.md` (18 mechanisms, technique-framed)
- ✅ `components/*.css` (base components: callout, code block, header)
- ✅ `guidelines/usage-criteria.md` (when to use what)
- ❌ `case-studies/*.md` (STILL PROHIBITED — Phase 5 only)

**Critical distinction:**
- **Mechanisms** (extractable) = border-weight gradient, compression technique, 2-zone DNA
- **Implementations** (metaphor-specific) = "4px bedrock border", "80px surface padding", "6 strata"

**Agent extracts MECHANISMS. Agent applies them to THEIR metaphor. Agent does NOT copy implementations.**

### Phase 5: Divergence Verification (Validation Phase)

**From tension-composition-additions.md lines 349-451:**

```markdown
**After Phase 4 completion, you may NOW consult:**

- `/active/design-system/case-studies/` (pattern library)
- Read 2-3 MOST SIMILAR case studies to your committed metaphor
```

**Phase 5 access rules:**
- ✅ `case-studies/_INDEX.md` (titles + tension summaries)
- ✅ 2-3 most similar case studies (selected by tension, NOT all)
- ✅ `case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` (divergence comparison table)

**Purpose of Phase 5:**
- **NOT** to get implementation ideas (already built in Phase 4)
- **TO** verify metaphor diverges from library patterns (or justify convergence)

**Divergence verification process:**
1. Scan `_INDEX.md` for similar tensions
2. Read 2-3 most similar case studies
3. Complete divergence comparison table (5 dimensions)
4. Verdict: DIFFERENT (proceed) or SAME (justify or regenerate)

**5 divergence dimensions:**
1. Metaphor domain (geological vs manuscript vs fractal)
2. Structural isomorphisms (bedrock→foundation vs seed→growth)
3. Section architecture (6 strata vs 4 scales vs 8 acts)
4. Vocabulary (geological terms vs botanical vs theatrical)
5. Mechanisms used (border-weight vs spacing-compression vs density-arc)

**Passing criteria:** DIFFERENT on 3+ dimensions = strong divergence

**If convergence detected:** Requires STRONG justification (same tension → independent path → different isomorphisms) OR regenerate with constraint ("BANNED metaphors: [list]")

---

## 4. ANTI-GRAVITY MECHANISMS — The 5 Essential Guardrails

### Why Anti-Gravity Mechanisms Matter

**From anti-gravity-compliance.md Executive Summary:**

> Overall Assessment: CONDITIONAL PASS (94.7% compliance — 18/19 verifiable mechanisms deployed)
>
> Essential 5 Mechanisms:
> - M1 (Phase-gated access) ✅ VERIFIED
> - M2 (Dual-file split) ✅ VERIFIED
> - M5 (Binary sequential rules) ✅ VERIFIED
> - M6 (Divergence mandate) ⚠️ PARTIAL
> - M11 (Two-phase prompting) ❌ NOT VERIFIABLE (workflow-level)

**What agents will do WRONG by default:**
1. Read case studies first (pattern-match instead of derive)
2. Skip prohibitions (assume "best practices" from training)
3. Copy implementations (not extract mechanisms)
4. Treat patterns as templates (not proof-of-concept)
5. Read everything at once (no phase separation)

**Anti-gravity mechanisms PREVENT these defaults.**

### M1: Phase-Gated Access (Directory Separation)

**Definition (from anti-gravity-compliance.md lines 74-101):**

> Vocabulary and case studies in SEPARATE directories so agents can't access case studies during extraction.

**Evidence:**
```
/compositional-core/
  ├── vocabulary/          ← Wave 1-2 agents
  ├── grammar/             ← Wave 1-2 agents
  ├── components/          ← Wave 1-2 agents
  └── case-studies/        ← Wave 3 agents ONLY
```

**How agents consume:**
- Composition agents: Read vocabulary/ + grammar/ + components/ in Phases 0-4
- Composition agents: Read case-studies/ ONLY in Phase 5 (after implementation)
- Audit agents: Read vocabulary/ + prohibitions/ + grammar/ (no case studies needed)
- Research agents: Read everything BUT in ANALYSIS mode (not application mode)

**Gravity dimensions addressed:** T1 (load-order), S1 (early context), S3 (proximity-to-task)

### M2: Dual-File Split — Mechanisms vs Metaphors

**Definition (from anti-gravity-compliance.md lines 104-131):**

> `mechanism-catalog.md` (reusable techniques) SEPARATE from case studies (metaphor-specific explorations).

**File separation:**
- `grammar/mechanism-catalog.md` — 18 mechanisms, technique-framed ("border-weight gradient", "2-zone DNA")
- `case-studies/*.md` — 9+ case studies, metaphor-framed ("geological strata", "manuscript codex")

**Cross-contamination check:** ✅ CLEAN
- Mechanism catalog: NO metaphor vocabulary (no "geological", "manuscript")
- Case studies: NO mechanism definitions (mechanisms referenced by number: "Mechanism #1")

**How agents consume:**
- Phase 4: Read `mechanism-catalog.md` → extract TECHNIQUES
- Phase 5: Read case studies → see PROOF (not templates)
- Never: Mix mechanisms and metaphors in same document

**Gravity dimensions addressed:** Vocabulary vs Decisions split, F1 (framing), S2 (skill proximity)

### M5: Binary Sequential Rules (MUST/DO NOT Language)

**Definition (from anti-gravity-compliance.md lines 135-178):**

> Skill enforces mandatory sequence (Phase 1 → 2 → 3 → 4) with library prohibited until Phase 4.

**Binary language examples:**

```markdown
**YOU MUST NOT read the following during Phases 0-3:**
**Violation of this rule invalidates the entire derivation.**

**BEFORE proceeding to Phase 4, you MUST complete this gate.**

**You may NOW consult:**
**You still MUST NOT read `/case-studies/` directory.**
```

**Language strength:**
- "MUST NOT" + "invalidates" = BINARY prohibition ✅
- "MUST complete" + "RESTART Phase 1" = BINARY enforcement ✅
- "NOW consult" (permission) + "MUST NOT" (prohibition) = BINARY timing control ✅

**Zero judgment language:** No "consider", "might want to", "could", "should probably"

**How agents consume:**
- Read phase instructions as ABSOLUTE RULES
- "MUST NOT" = prohibited action (100% compliance)
- "MUST complete" = required action (100% compliance)
- Never interpret as suggestions

**Gravity dimensions addressed:** T1 (load-order), T2 (pre-creative timing), S1 (early context)

### M6: Divergence Mandate (Success = Novel Metaphor)

**Definition (from anti-gravity-compliance.md lines 184-253):**

> Redefines success as "novel metaphor" not "good composition". Convergence requires justification.

**Skill enrichment evidence:**

**Phase 3.5C (Commitment Verification):**
```markdown
3. **Does this metaphor appear in `/case-studies/_INDEX.md`?**
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4
```

**Phase 3.5D (Divergence Justification):**
```markdown
**Passing criteria:** ALL answers must favor independent convergence.

**If justification fails:** Regenerate metaphor with explicit constraint: "My metaphor MUST NOT be [library pattern name]."
```

**How agents consume:**
- Success metric = "Did I derive a NEW metaphor?" (not "Did I build a good page?")
- Convergence with library = REQUIRES justification (5-question table, all must pass)
- Unjustified convergence = REGENERATE (explicit constraint: ban library metaphors)

**Gravity dimensions addressed:** F1 (prescriptive framing), optimization target shift

### M11: Two-Phase Prompting (Workflow-Level)

**Definition (from anti-gravity-compliance.md lines 257-296):**

> Generation context (Phase A: library-blind) separate from evaluation context (Phase B: library-aware). Requires two turns or two agents.

**Status:** ❌ NOT VERIFIABLE from file output (workflow-level mechanism)

**What compositional-core CAN show:**
- ✅ Phase separation in skill (Phases 1-3 vs Phase 4-5)
- ✅ Commitment document structure (Phase 3.5 output)
- ❌ Actual two-turn execution (not visible in file structure)

**Alternate interpretation:** Single agent, phased access (M1 + M5 substitute)

**How agents consume:**
- IF workflow uses two-agent turns: Agent A (Phases 1-3.5) → Agent B (Phases 4-6)
- IF workflow uses single agent: Same agent, but strict phase-gated access (M1 enforces)
- Either way: Metaphor commitment BEFORE library access

**Gravity dimensions addressed (if deployed):** T1 (load-order), working memory separation

---

## 5. COMMON MISTAKES — What Agents Do WRONG by Default

### Mistake 1: Reading Case Studies First

**Default behavior:**
1. Agent sees `case-studies/DD-006-fractal.md`
2. Thinks: "This is the design system documentation"
3. Reads entire file, sees 6-layer geological structure
4. Builds new page with 6 layers → pattern-matching

**Why this fails:**
- Case studies are PROOF-OF-CONCEPT, not templates
- DD-006 structure serves THAT content (fractal self-similarity)
- New content has DIFFERENT tension → needs DIFFERENT metaphor

**Prevention:**
- M1 (directory separation) — case studies in separate folder
- M3 (anti-prescription headers) — every case study starts "⚠️ NOT A TEMPLATE"
- M5 (binary prohibition) — Phase 0D: "YOU MUST NOT read case-studies/ during Phases 0-3"

**Correct behavior:**
1. Agent reads `README.md` (orientation)
2. Sees phase-gated access rules
3. Reads prohibitions + tokens (always-load layer)
4. Completes Phases 1-3 (tension derivation) WITHOUT library
5. Reads mechanisms in Phase 4 (techniques, not implementations)
6. Reads case studies in Phase 5 (divergence verification only)

### Mistake 2: Skipping Prohibitions

**Default behavior:**
1. Agent sees `vocabulary/tokens.css`
2. Thinks: "I'll use these colors and fonts"
3. Skips `identity/prohibitions.md` (assumes best practices from training)
4. Adds `border-radius: 4px` (training distribution: rounded = friendly)
5. Soul violation → entire output invalid

**Why this fails:**
- KortAI identity defined by REFUSALS (border-radius: 0 ALWAYS)
- Training distribution biases: rounded corners, shadows, gradients
- Prohibitions are BINARY (not judgment) — 100% compliance required

**Prevention:**
- Always-load layer: `prohibitions.md` MUST be read first
- Binary language: "NEVER use border-radius > 0 on ANY element"
- Absolute prohibitions section (8 rules with zero exceptions)

**Correct behavior:**
1. Read `prohibitions.md` BEFORE tokens
2. Internalize 8 absolute prohibitions (border-radius: 0, box-shadow: none, etc.)
3. Check 12 conditional prohibitions (2px borders, accent borders < 4px, etc.)
4. Apply prohibitions as HARD CONSTRAINTS (not preferences)
5. Verify zero violations before output

### Mistake 3: Pattern-Matching to Case Studies

**Default behavior:**
1. Agent in Phase 5, reads DD-006-fractal.md for divergence verification
2. Sees 4 scales (Atom → Ecosystem) with progressive density
3. Thinks: "My content has 4 sections too → I'll use 4 scales"
4. Copies fractal structure → pattern-matching, not independent derivation

**Why this fails:**
- DD-006 structure SERVES fractal metaphor (content about self-similarity)
- Agent's content likely has DIFFERENT tension (not fractal)
- Copying structure without metaphor justification = template usage

**Prevention:**
- M3 (anti-prescription headers) — "Pattern-matching to this output defeats the purpose"
- M6 (divergence mandate) — Success = novel metaphor, not good composition
- M9 (verification gate) — Phase 3.5 checks: "Did I derive independently?"

**Correct behavior:**
1. Complete Phases 1-3.5 WITHOUT reading case studies
2. Commit to metaphor in writing (Phase 3.5)
3. Implement using mechanisms in Phase 4
4. Read DD-006 in Phase 5 for COMPARISON only
5. Complete divergence table (5 dimensions)
6. If convergence detected → justify or regenerate

### Mistake 4: Extracting Implementations (Not Mechanisms)

**Default behavior:**
1. Agent reads `grammar/mechanism-catalog.md`
2. Sees "Border-Weight Gradient: 4px/3px/1px for confidence encoding"
3. Copies exact values: `border-left: 4px` (high confidence), `border-left: 3px` (medium)
4. Applies to different context (hierarchy, not confidence) → misapplication

**Why this fails:**
- 4px/3px/1px are IMPLEMENTATION VALUES for specific metaphor (OD-004 confidence)
- Mechanism is "border-weight encodes semantic dimension"
- Agent should ADAPT mechanism to THEIR context, not copy values

**Prevention:**
- M2 (dual-file split) — mechanisms separate from metaphors
- Mechanism catalog framing: "Border-weight gradient (technique) — encodes ANY hierarchy/confidence/importance"
- Phase 4 instructions: "Extract technique, NOT implementation"

**Correct behavior:**
1. Read mechanism: "Border-weight gradient encodes semantic dimension"
2. Extract principle: "Thicker border = higher value on dimension"
3. Identify YOUR dimension: "Importance" (not confidence)
4. Derive YOUR values: 4px (critical), 1px (supplementary) — skip 3px
5. Apply adapted mechanism to YOUR metaphor

### Mistake 5: Reading Everything at Once

**Default behavior:**
1. Agent sees compositional-core/ directory
2. Reads all files to "understand the system"
3. Context window: prohibitions + tokens + mechanisms + case studies + guidelines
4. Builds page with mixed signals → no clear derivation path

**Why this fails:**
- Reading order shapes category construction (source-first vs visual-first)
- Early context = anchor (later material categorized relative to anchor)
- Reading case studies early → pattern-matching becomes default mode

**Prevention:**
- M1 (phase-gated access) — directory separation enforces timing
- M5 (binary sequential rules) — Phase 0D prohibition: "MUST NOT read case-studies/ during Phases 0-3"
- Reading order prescription: source-first for vocabulary, visual-first for case studies (different phases)

**Correct behavior:**
1. Phase 0: Read prohibitions + tokens (always-load layer)
2. Phase 1-3: Content analysis + tension derivation (NO library)
3. Phase 3.5: Metaphor commitment (LOCK-IN gate)
4. Phase 4: Read mechanisms + components (techniques, not implementations)
5. Phase 5: Read 2-3 case studies (divergence verification only)
6. Sequential reading, phase-appropriate access

---

## 6. ACTOR TYPES — Different Agents, Different Needs

### Composition Agents (Building New Pages)

**Task:** Derive metaphor for new content, implement compositional layout

**What they need:**
1. **Always-load layer:** Prohibitions + tokens (identity constraints + vocabulary)
2. **Phase 1-3:** Content to analyze (NOT library)
3. **Phase 4:** Mechanisms + components (reusable techniques)
4. **Phase 5:** Case studies (2-3 most similar, divergence verification)

**Reading order:** Source-first (vocabulary), then visual-first (case studies in Phase 5 only)

**Access rules:**
- ✅ `identity/prohibitions.md` (Phase 0)
- ✅ `vocabulary/tokens.css` (Phase 0)
- ✅ `grammar/mechanism-catalog.md` (Phase 4)
- ✅ `components/*.css` (Phase 4)
- ✅ `guidelines/usage-criteria.md` (Phase 4)
- ✅ `case-studies/_INDEX.md` (Phase 5 — titles only)
- ✅ `case-studies/[2-3 similar].md` (Phase 5 — selected by tension)
- ❌ ALL case studies in Phases 0-4 (prohibited)

**Critical guardrails:**
- Binary prohibition (Phase 0D): "MUST NOT read case-studies/ during Phases 0-3"
- Metaphor commitment (Phase 3.5): Lock-in before library access
- Divergence verification (Phase 5): Comparison table required

**Output:** New compositional exploration with documented tension → metaphor → layout derivation

### Audit Agents (Verifying Pages)

**Task:** Verify existing page meets design system requirements

**What they need:**
1. **Always-load layer:** Prohibitions + tokens (compliance checklist)
2. **Grammar rules:** Mechanism catalog, compositional rules, border system
3. **Comparison baseline:** Case studies for quality comparison (NOT templates)

**Reading order:** Source-first (check implementation against tokens/prohibitions)

**Access rules:**
- ✅ `identity/prohibitions.md` (compliance checklist)
- ✅ `vocabulary/tokens.css` (token verification)
- ✅ `grammar/mechanism-catalog.md` (mechanism usage check)
- ✅ `grammar/compositional-rules.md` (structural rules)
- ✅ `guidelines/semantic-rules.md` (semantic appropriateness)
- ✅ `case-studies/*.md` (quality comparison — what does "KortAI-quality" look like?)
- ❌ No phase restrictions (audit agents read everything)

**Critical guardrails:**
- Soul verification: border-radius: 0? box-shadow: none? colors correct?
- Prohibition compliance: 22 prohibitions checked (8 absolute, 12 conditional, 2 meta)
- Mechanism identification: Which mechanisms used? Applied correctly?

**Output:** Audit report with violation count, severity, recommendations

### Research Agents (Analyzing the System)

**Task:** Understand design system architecture, extract patterns, identify gaps

**What they need:**
1. **Process files:** lens-manifesto.md, extraction-provenance.md, assumption-log.md
2. **Validation files:** anti-gravity-compliance.md, gap-check.md, convergence-check.md
3. **All content:** Vocabulary, grammar, components, case studies (analysis mode)

**Reading order:** Context-first (process → validation → content)

**Access rules:**
- ✅ `process/lens-manifesto.md` (WHY extraction choices made)
- ✅ `process/extraction-provenance.md` (WHERE tokens came from)
- ✅ `validation/anti-gravity-compliance.md` (HOW mechanisms deployed)
- ✅ ALL vocabulary, grammar, components, case-studies (full access)
- ✅ Skill enrichments (tension-composition, perceptual-auditing)

**Critical distinction:**
- **Analysis mode:** "How does this system work? What are the patterns?"
- **NOT application mode:** "I'm building a page → which template do I use?"

**Critical guardrails:**
- Read in ANALYTICAL frame (not generative frame)
- Document patterns as OBSERVATIONS (not instructions)
- Identify gaps, contradictions, opportunities

**Output:** Research reports on system architecture, pattern analysis, improvement recommendations

---

## 7. SKILL ENRICHMENTS — Phase-Gated Access to Advanced Workflows

### What Skill Enrichments Are

**Location:** `compositional-core/skill-enrichments/`

**Files:**
- `tension-composition-additions.md` (5 additions, ~400 lines)
- `perceptual-auditing-additions.md` (guardrail additions)

**Purpose:** Additions to `~/.claude/skills/` files (NOT standalone documents)

**Critical property:** These are PHASE-GATED ACCESS RULES embedded in skill files

### Tension-Composition Skill Enrichments

**From tension-composition-additions.md:**

**5 additions to tension-composition skill:**
1. Anti-Assumption Header (top of file) — Construction awareness
2. Phase 0D: Library Prohibition (before Phase 1) — Binary prohibition
3. Phase 3.5: Metaphor Commitment Gate (after Phase 3) — Lock-in before library
4. Phase 4 Revision: Mechanism Extraction (replace Phase 4.1) — Correct timing
5. Phase 5: Divergence Verification (new phase) — Case study access at final timing

**What agents extract from this:**
- **Phase 0D:** "MUST NOT read case-studies/ during Phases 0-3" → binary prohibition
- **Phase 3.5:** Commitment table + divergence justification → lock-in gate
- **Phase 4:** "Extract technique, NOT implementation" → mechanism vs metaphor split
- **Phase 5:** Divergence comparison table (5 dimensions) → novelty verification

**Access timing:** Agents using tension-composition skill get these additions IN THE SKILL (not separate)

### Perceptual-Auditing Skill Enrichments

**From perceptual-auditing-additions.md (referenced in anti-gravity-compliance.md):**

**Key enrichments:**
- 28→48 PA questions (+79% increase)
- Metaphor-awareness guardrails
- Perceptual cost scoring (compression ratio thresholds)

**What agents extract from this:**
- Guardrails: 940px min container (65% viewport), 16px label-to-heading, 32px padding floor, 40% compression ratio
- Core principle: "The metaphor shapes experience; the guardrails prevent it from breaking experience"

**Access timing:** Agents conducting perceptual audits load enriched skill (includes guardrails)

---

## 8. THE README.md FILES — Directory-Level Orientation

### Root README (compositional-core/README.md)

**Purpose:** First contact orientation for new agents

**What it should contain (if complete):**
1. **What compositional-core IS:** Phase-gated protocol, not usage library
2. **Always-load layer:** Prohibitions + tokens (mandatory first read)
3. **Phase-gated access summary:** What opens when
4. **Actor type guidance:** Composition vs audit vs research agents
5. **Common mistakes:** What NOT to do
6. **Directory structure:** What each folder contains

**How agents consume:** Read FIRST (before any other file)

### Subdirectory READMEs

**identity/README.md:**
- Purpose of identity layer (constraints that define KortAI by refusals)
- Prohibitions vs soul-constraints (negative rules vs positive constraints)
- Always-load requirement

**vocabulary/README.md:**
- Purpose of vocabulary layer (foundational tokens)
- Mutability classification (IMMUTABLE vs MUTABLE vs AVAILABLE)
- Source-first extraction principle

**grammar/README.md:**
- Purpose of grammar layer (mechanisms + compositional rules)
- Mechanism vs metaphor distinction
- Phase 4 access timing

**components/README.md:**
- Purpose of components layer (base CSS implementations)
- Component inventory
- Phase 4 access timing

**case-studies/README.md:**
- Purpose of case studies layer (proof-of-concept, NOT templates)
- Anti-prescription framing
- Phase 5 access timing (AFTER implementation)
- Divergence verification requirement

**guidelines/README.md:**
- Purpose of guidelines layer (usage criteria, semantic rules, responsive strategy)
- When to use what
- Phase 4 access timing

**validation/README.md:**
- Purpose of validation layer (anti-gravity compliance, gap checks, convergence checks)
- Research agent focus (analysis mode)
- Audit agent reference (compliance verification)

**process/README.md:**
- Purpose of process layer (lens-manifesto, extraction-provenance, assumption-log)
- Research agent focus (understanding system construction)
- Construction vs discovery framing

**skill-enrichments/README.md:**
- Purpose of skill enrichments (additions to ~/.claude/skills/ files)
- Phase-gated access rules embedded in skills
- NOT standalone usage documents

---

## 9. FAILURE MODES — What Happens If Ingestion Protocol Is Violated

### Failure Mode 1: Skipping Always-Load Layer

**What happens:**
1. Agent starts building without reading prohibitions
2. Applies training distribution defaults (rounded corners, shadows)
3. Soul violations throughout output
4. Entire output INVALID

**Detection:**
- `border-radius` values > 0
- `box-shadow` declarations present
- Cool-toned grays (#F5F5F5) instead of warm cream (#FEF9F5)

**Recovery:**
- Read `identity/prohibitions.md` (all 22 prohibitions)
- Rebuild from scratch (violations cannot be patched)

### Failure Mode 2: Reading Case Studies Too Early

**What happens:**
1. Agent reads DD-006-fractal.md in Phase 1
2. Sees 4-scale geological structure
3. Content has 4 sections → agent uses 4 scales
4. Pattern-matching, not independent derivation

**Detection:**
- Metaphor matches library pattern (geological, manuscript, fractal)
- Structure matches library structure (4 scales, 6 strata, 8 acts)
- Cannot justify independent convergence

**Recovery:**
- RESTART Phases 1-3 WITHOUT library access
- Regenerate metaphor with explicit constraint: "BANNED: geological, manuscript, fractal"
- Verify divergence in Phase 5

### Failure Mode 3: Extracting Implementations (Not Mechanisms)

**What happens:**
1. Agent reads mechanism catalog: "4px/3px/1px border-weight for confidence"
2. Copies exact values to different context (hierarchy, not confidence)
3. Misapplied mechanism → visual incoherence

**Detection:**
- Border values match library exactly (4px/3px/1px)
- Context is different (importance, not confidence)
- Visual effect doesn't serve metaphor

**Recovery:**
- Re-read mechanism: "Border-weight gradient ENCODES semantic dimension"
- Extract principle: "Thicker = higher on dimension"
- Derive NEW values for YOUR dimension

### Failure Mode 4: No Metaphor Commitment (Skipping Phase 3.5)

**What happens:**
1. Agent derives tension in Phases 1-3
2. Skips Phase 3.5 (no written commitment)
3. Reads mechanisms in Phase 4
4. Sees "2-zone DNA" → thinks "callouts are the answer"
5. Never had metaphor → builds generic callout-heavy page

**Detection:**
- No clear metaphor (generic "information architecture")
- Heavy mechanism usage but no metaphorical coherence
- Sections don't serve unified narrative

**Recovery:**
- RESTART Phase 3 (metaphor search)
- Complete Phase 3.5 (written commitment)
- Verify metaphor BEFORE Phase 4 mechanism access

### Failure Mode 5: Reading All Case Studies (Not Sampling)

**What happens:**
1. Phase 5: Agent reads ALL 12+ case studies
2. Context window: 12 metaphors, 100+ mechanisms, 60+ sections
3. Information overload → pattern-matching to most recent
4. Unjustified convergence

**Detection:**
- Agent references 5+ case studies in divergence table
- Comparison is shallow (not deep on 2-3 similar)
- Convergence with most recently read case study

**Recovery:**
- Re-read Phase 5 instructions: "2-3 MOST SIMILAR case studies"
- Scan `_INDEX.md` for tension similarity
- Deep comparison on 2-3, not shallow on 12+

---

## 10. CRITICAL SUCCESS FACTORS — What Makes Ingestion Work

### Success Factor 1: Always-Load Layer (First Contact)

**What works:**
- Reading `prohibitions.md` + `tokens.css` BEFORE anything else
- Internalizing 8 absolute prohibitions (zero exceptions)
- Grounding vocabulary in source (not visual)

**Why it works:**
- Prevents soul violations before they start
- Creates technical anchor (tokens are implementation reality)
- Establishes identity through refusals

### Success Factor 2: Phase-Gated Access (Timing Control)

**What works:**
- Binary prohibition: "MUST NOT read case-studies/ during Phases 0-3"
- Structural separation: directory structure enforces timing
- Sequential reading: vocabulary → mechanisms → case studies

**Why it works:**
- Prevents pattern-matching (case studies unavailable during derivation)
- Enforces independent derivation (library-blind Phases 1-3)
- Validates novelty (library-aware Phase 5 after implementation)

### Success Factor 3: Source-First Reading (Vocabulary)

**What works:**
- Read CSS tokens BEFORE visual renderings
- Extract technical constraints (border-radius: 0) before perceptual patterns
- Ground components in implementation (not visual impression)

**Why it works:**
- Prevents hallucinated components (visual rhythm ≠ extractable component)
- Creates technical categories (tokens, not aesthetics)
- Avoids over-interpretation (code is ground truth)

### Success Factor 4: Metaphor Commitment (Lock-In Gate)

**What works:**
- Written commitment (Phase 3.5) BEFORE library access
- Divergence justification (5 questions) if convergence detected
- Regeneration path (explicit constraint: ban library metaphors)

**Why it works:**
- Prevents post-generation switching ("I'll change after seeing library")
- Forces conscious divergence verification (not unconscious replication)
- Creates audit trail (committed metaphor on record)

### Success Factor 5: Mechanism Extraction (Not Implementation)

**What works:**
- Read "border-weight gradient ENCODES dimension" (principle)
- NOT "4px/3px/1px for confidence" (implementation)
- Adapt to YOUR context (importance, not confidence)

**Why it works:**
- Mechanism is reusable (applies to ANY semantic dimension)
- Implementation is metaphor-specific (confidence encoding for OD-004)
- Adaptation creates novelty (same technique, different application)

---

## 11. RECOMMENDATIONS FOR README ENRICHMENT

### Missing from Current Structure

**Current gap:** No compositional-core/README.md exists yet

**Recommended content:**

```markdown
# compositional-core/ — KortAI Design System Phase-Gated Protocol

⚠️ **CRITICAL: This is NOT a usage library. It is a PHASE-GATED PROTOCOL.**

## First Contact — Start Here

**IF you are building a new page (composition agent):**
1. Read `identity/prohibitions.md` (22 prohibitions — non-negotiable)
2. Read `vocabulary/tokens.css` (foundational vocabulary — source-first)
3. Follow tension-composition skill Phases 0-5 (phase-gated access)
4. DO NOT read `case-studies/` until Phase 5 (after implementation)

**IF you are auditing an existing page (audit agent):**
1. Read `identity/prohibitions.md` (compliance checklist)
2. Read `vocabulary/tokens.css` (token verification)
3. Read `grammar/mechanism-catalog.md` (mechanism identification)
4. Read `case-studies/` for quality comparison (what is "KortAI-quality"?)

**IF you are researching the system (research agent):**
1. Read `process/lens-manifesto.md` (WHY extraction choices made)
2. Read `validation/anti-gravity-compliance.md` (HOW mechanisms deployed)
3. Read all content in ANALYSIS mode (not application mode)

## Directory Structure

- `identity/` — Prohibitions + soul constraints (ALWAYS-LOAD layer)
- `vocabulary/` — Tokens (ALWAYS-LOAD layer, source-first)
- `grammar/` — Mechanisms + compositional rules (Phase 4 access)
- `components/` — Base CSS implementations (Phase 4 access)
- `case-studies/` — Proof-of-concept explorations (Phase 5 access ONLY)
- `guidelines/` — Usage criteria, semantic rules (Phase 4 access)
- `validation/` — Anti-gravity compliance, gap checks (research/audit agents)
- `process/` — Lens manifesto, extraction provenance (research agents)
- `skill-enrichments/` — Additions to ~/.claude/skills/ (embedded in skills)

## Common Mistakes (AVOID THESE)

❌ Reading case studies first → pattern-matching
❌ Skipping prohibitions → soul violations
❌ Copying implementations → misapplied mechanisms
❌ No metaphor commitment → generic compositions
❌ Reading all case studies → information overload

✅ Read prohibitions + tokens first
✅ Follow phase-gated access (Phases 0-5)
✅ Commit to metaphor BEFORE library access
✅ Extract mechanisms (not implementations)
✅ Sample 2-3 case studies (not all)
```

### Subdirectory README Recommendations

**case-studies/README.md should include:**
- Anti-prescription framing (NOT templates)
- Phase 5 timing (AFTER implementation)
- Divergence table template (5 dimensions)
- Sampling guidance (2-3 most similar, not all)

**grammar/README.md should include:**
- Mechanism vs metaphor distinction
- Phase 4 access timing
- Extraction principle (technique, not implementation)

**identity/README.md should include:**
- Always-load requirement (read FIRST)
- Absolute vs conditional prohibitions (8 vs 12)
- Binary compliance (zero exceptions for absolute)

---

## 12. FINAL CRITICAL PRINCIPLE

**The compositional-core folder is NOT documentation to "learn." It is a PROTOCOL to FOLLOW.**

**Documentation mindset (WRONG):**
- "I'll read all files to understand the system"
- "Case studies show me how to build pages"
- "I'll reference library when I need inspiration"

**Protocol mindset (CORRECT):**
- "I'll read ONLY what my current phase permits"
- "Case studies verify my metaphor is novel (not templates)"
- "I'll derive independently, then validate divergence"

**The test:**
> Can the agent PROVE they followed the protocol?
> - ✅ Written metaphor commitment (Phase 3.5)
> - ✅ Library access log (what was read when)
> - ✅ Divergence table (5 dimensions compared)
> - ✅ Zero prohibited access (no case studies in Phases 0-4)

**If any proof is missing → protocol was violated.**

---

## APPENDIX A: File-by-File Purpose Summary

| File | Purpose | Actor Type | Phase Access |
|------|---------|-----------|--------------|
| `identity/prohibitions.md` | 22 prohibitions (8 absolute, 12 conditional, 2 meta) | ALL | Phase 0 (always-load) |
| `identity/soul-constraints.md` | Positive constraints (border-radius: 0, box-shadow: none) | ALL | Phase 0 (always-load) |
| `vocabulary/tokens.css` | Foundational vocabulary (colors, fonts, spacing) | ALL | Phase 0 (always-load) |
| `vocabulary/tokens-mutability.md` | IMMUTABLE vs MUTABLE classification | Composition, Audit | Phase 0 |
| `grammar/mechanism-catalog.md` | 18 reusable techniques | Composition | Phase 4 |
| `grammar/compositional-rules.md` | Structural composition rules | Composition, Audit | Phase 4 |
| `grammar/border-system.md` | Border weight encoding system | Composition, Audit | Phase 4 |
| `components/*.css` | Base CSS implementations | Composition | Phase 4 |
| `components/component-inventory.md` | Component catalog | Composition, Audit | Phase 4 |
| `case-studies/*.md` | Proof-of-concept explorations | Composition | Phase 5 ONLY |
| `case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` | Divergence table template | Composition | Phase 5 |
| `guidelines/usage-criteria.md` | When to use what | Composition | Phase 4 |
| `guidelines/semantic-rules.md` | Semantic appropriateness | Composition, Audit | Phase 4 |
| `guidelines/responsive-strategy.md` | Responsive breakpoint strategy | Composition | Phase 4 |
| `validation/anti-gravity-compliance.md` | Mechanism deployment audit | Research, Audit | Anytime |
| `validation/gap-check.md` | Coverage gap analysis | Research | Anytime |
| `validation/convergence-check.md` | Pattern convergence tracking | Research | Anytime |
| `process/lens-manifesto.md` | WHY extraction choices made | Research | Anytime |
| `process/extraction-provenance.md` | WHERE tokens came from | Research | Anytime |
| `process/assumption-log.md` | Construction vs discovery awareness | Research | Anytime |
| `skill-enrichments/tension-composition-additions.md` | Phase-gated access rules for skill | Composition | Embedded in skill |
| `skill-enrichments/perceptual-auditing-additions.md` | Guardrail enrichments for skill | Audit | Embedded in skill |

---

**END RESEARCH DOCUMENT**
