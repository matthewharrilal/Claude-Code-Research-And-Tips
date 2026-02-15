# Compositional-Core — Phase-Gated Protocol CLAUDE.md

**STOP — READ THIS BEFORE TOUCHING ANYTHING.**
You MUST read identity/prohibitions.md and vocabulary/tokens.css BEFORE any other action.
Violating prohibitions = INVALID work. No exceptions. No shortcuts.

**Last Updated:** 2026-02-15
**Status:** OPERATIONAL (Phase C Extraction Complete, Phase D Validation Complete, Skill Enrichment In Progress)

---

## WHAT THIS IS (AND IS NOT)

This is NOT a component library. It is NOT a template system. It is NOT objective truth.

This IS:
- A phase-gated vocabulary + grammar for building KortAI pages
- A lens-constructed extraction (Identity + Enablement hybrid)
- Minimum viable foundations for creative composition (30-40 items)
- The operational layer between abstract specification and concrete implementation

**Key principle:** CHOICE, not discovery. This extraction enables creativity within identity constraints, stopping before it prescribes solutions.

---

## ALWAYS-LOAD — BEFORE ANY ACTION

**MANDATORY:** Read these 2 files FIRST, for ANY task in compositional-core/:

### 1. identity/prohibitions.md (353 lines)

22 prohibitions define KortAI through REFUSAL:
- 8 ABSOLUTE (NEVER, zero exceptions): border-radius: 0, box-shadow: none, no drop-shadow, opacity: 1 on containers, no gradients, no pure black/white, serif ONLY for display, no decorative complexity
- 12 CONDITIONAL (documented exceptions): no 2px borders (epidemic), no accent borders < 4px, + 10 structural rules
- 2 META (process-level): no justification without research, no patterns without tension

**WHY FIRST:** Defines identity through REFUSALS. Violating these = not KortAI.

### 2. vocabulary/tokens.css (174 lines)

65 tokens in :root block:
- Soul constraints: --radius-sharp: 0 (NEVER override), box-shadow: none
- Color palette: 8 values (warm editorial)
- Typography trinity: 3 fonts (Instrument Serif, Inter, JetBrains Mono)
- Spacing scale: 4px base unit, 6 anchors, 14 values
- Border weights: 4px/3px/1px (semantic encoding)

**WHY SECOND:** Source-first extraction grounds vocabulary in implementation reality.

**Total always-load: 527 lines (2 files)**

---

## TRACK CLASSIFICATION

**The Addition Test:** "Can existing components fulfill this WITHOUT transforming their meaning?"
- **YES** → Track 1 (Assembly, 45-90 min)
- **NO** → Track 2 (Composition, 3-5 hours)

### Track 1: Component Assembly

**When:** Content has explicit vocabulary (tables, stats, diagrams). Components map directly to reader needs.

**Load:** prohibitions → tokens → components.css → guidelines/semantic-rules.md

**Build:** Use existing components with token values.

~/.claude/skills/perceptual-auditing
**Verify:** Soul check + perceptual audit.

**NO metaphor derivation required.**

### Track 2: Tension-Driven Composition

**When:** Content is prose-dominant (>70% narrative). Implicit tension exists (warmth vs austerity, authority vs playfulness). No direct tool available.

~/.claude/skills/tension-composition
**Load:** prohibitions → tokens → [RUN TENSION-COMPOSITION BLIND] → mechanisms → [OPTIONAL case studies]

**Build:** Derive metaphor independently, apply mechanisms to YOUR metaphor, generate YOUR vocabulary.

**Verify:** Divergence check + soul check + perceptual audit.

**REQUIRES independent creative derivation.**

---

## TRACK 1 WORKFLOW

**Phase 0: Load Foundation**
1. Read prohibitions.md (constraints)
2. Read tokens.css (palette)
3. Read components.css (first 100 lines — 2-zone DNA patterns)
4. Read guidelines/semantic-rules.md (when to use what)

**Phase 1: Build**
- Use exact token values: var(--color-primary), var(--space-8)
- Apply components as-is (no custom CSS)
- Follow responsive strategy (768px collapse)

**Phase 2: Verify**
- Invoke perceptual-auditing skill (48 PA questions)
- Check guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Verify soul: border-radius: 0? box-shadow: none? Colors correct?

**Total reading: ~627 lines (4 files)**

---

## TRACK 2 WORKFLOW

### Phase 0: Load Vocabulary + Library Prohibition

**MANDATORY:**
1. Read prohibitions.md (all 353 lines)
2. Read tokens.css (all 174 lines)

**PROHIBITED until Phase 5 (ABSOLUTE — violation invalidates entire derivation):**
- ❌ case-studies/ directory
- ❌ Prior explorations (DD-001 through CD-006)
- ❌ Tension-test layouts
- ❌ grammar/mechanism-catalog.md (permitted at Phase 4, NOT before)

**WHY:** Library patterns are VALIDATION tools, not GENERATION tools. Reading before metaphor commitment = pattern-matching. This is the single highest-risk failure mode.

### Phase 1-3: Run Tension-Composition BLIND

**Invoke:** tension-composition skill at ~/.claude/skills/tension-composition/SKILL.md

**Phases:**
- Phase 0: Content assessment
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME)
- Phase 2: Tension derivation (richness scoring)
- Phase 3: Metaphor collapse (structural overlap → search query)

**Output:** Ranked metaphor candidates with composite scores.

**CRITICAL:** DO NOT read case-studies/ during Phases 0-3.

### Phase 3.5: Metaphor Lock-In GATE

**MANDATORY questions (answer BEFORE consulting library):**

1. **Did I derive independently?**
   - Check: Did I run Phases 1-3 WITHOUT reading case-studies/?
   - If NO → RESTART Phase 1

2. **Can I justify without library?**
   - Check: Can I explain WHY this metaphor for THIS content?
   - If NO → Regenerate with explicit constraint

3. **Does this appear in case-studies/_INDEX.md?**
   - Check: Read _INDEX.md titles. Is my metaphor listed?
   - If NO → PASS gate, proceed to Phase 4
   - If YES → DIVERGENCE JUSTIFICATION REQUIRED (5-dimension table)

**Divergence table (5 dimensions):**
1. Metaphor domain (geological vs botanical vs manuscript)
2. Structural isomorphisms (bedrock→foundation vs seed→growth)
3. Section architecture (6 strata vs 4 scales vs 8 acts)
4. Vocabulary (geological terms vs plant terms vs theatrical)
5. Mechanisms used (border-weight vs spacing-compression)

**Passing criteria:** DIFFERENT on 3+ dimensions = independent convergence

**POINT OF NO RETURN:** After this gate, you DO NOT change metaphor based on library consultation.

### Phase 4: Mechanism Extraction

**NOW PERMITTED:**
- grammar/mechanism-catalog.md (first 200 lines)
- components/components.css (all lines)

**EXTRACT techniques (reusable):**
- "Border-weight gradient encodes hierarchy" (technique)
- "2-zone DNA: sparse label + dense body" (technique)
- "Spacing compression inversely encodes confidence" (technique)

**DO NOT extract implementations (metaphor-specific):**
- "4px bedrock border" (geological-specific value)
- "6 strata structure" (fractal-specific architecture)

**The distinction:** Extract HOW mechanisms work, not WHAT values they use.

### Phase 5: Case Study Comparison (OPTIONAL)

**NOW PERMITTED:**
- case-studies/_INDEX.md (titles + tension summaries)
- Select 2-3 case studies MOST similar to YOUR metaphor

**PURPOSE:** Verify divergence (not get ideas).

**If convergence detected:** Complete divergence table. If justification fails → regenerate with constraint.

### Phase 6: Implementation

**Use:**
- Exact token values: var(--color-primary), var(--space-8)
- Mechanisms adapted to YOUR metaphor
- YOUR vocabulary (not library metaphor terms)

**Example:** .botanical-stage NOT .stratum (your metaphor, not library)

**Absolute rules:**
```css
border-radius: 0; /* ALWAYS */
box-shadow: none; /* ALWAYS */
opacity: 1; /* NO transparency on containers */
```

### Phase 7: Verification

**Invoke:** perceptual-auditing skill at ~/.claude/skills/perceptual-auditing/SKILL.md

**Check:**
- 48 PA questions (Tier 1 mandatory five + Tier 2 standard fifteen)
- Guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Soul: border-radius: 0? box-shadow: none? Colors correct?

**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## ANTI-GRAVITY RULES

**Essential 5 mechanisms prevent pattern-matching:**

### R1: Phase-Gated Library Access

**RULE:** You MUST NOT access case-studies/ during Phases 0-3. Case studies are ONLY accessible during Phase 5 (divergence verification).

**WHY:** Prevents pre-creative exposure. If library patterns are loaded BEFORE metaphor derivation, continuation bias makes pattern-matching the default path.

**ENFORCEMENT:** Directory separation + binary prohibition language.

### R2: Mechanism/Metaphor Separation

**RULE:** Mechanisms go in grammar/mechanism-catalog.md. Metaphors go in case-studies/*.md. DO NOT mix them in the same file.

**WHY:** Mechanisms are TOOLS (extractable). Metaphors are DECISIONS (75-80% constraint). Separation prevents conflation.

**ENFORCEMENT:** Dual-file structure + framing (tools vs proof).

### R3: Anti-Prescription Framing

**RULE:** Every case study MUST begin with "⚠️ THIS IS NOT A TEMPLATE" warning. MUST use narrative format ("Tension that produced this") NOT criteria format ("When to use").

**WHY:** Framing determines cognitive mode. "When to use" triggers lookup mode. "Tension that produced this" triggers derivation mode.

**ENFORCEMENT:** Template structure mandates warning placement.

### R5: Binary Sequential Phase Rules

**RULE:** You MUST complete phases in exact sequence: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7. You MUST NOT skip phases. You MUST NOT consult case studies during Phases 0-3. Violation invalidates the entire derivation.

**WHY:** Binary rules achieve 100% agent compliance (vs ~0% for judgment rules). Sequential enforcement exploits this.

**ENFORCEMENT:** Mandatory sequence + binary language ("MUST" / "invalidates").

### R6: Divergence Mandate

**RULE:** Success is defined as "novel metaphor NOT in library" not "good composition using known pattern." If your metaphor matches a library pattern, you MUST provide strong independent convergence justification OR regenerate with constraint.

**WHY:** Redefines success criteria to exclude pattern-matching. Makes convergence require justification instead of being the default path.

**ENFORCEMENT:** Phase 3.5 gate requires divergence check.

### Structural vs Behavioral Rules

**STRUCTURAL (work automatically via architecture):**
- R1: Directory separation (case-studies/ physically separate from vocabulary/)
- R2: Dual-file split (mechanisms in grammar/, metaphors in case-studies/)

**BEHAVIORAL (require agent compliance — binary language achieves 100%):**
- R3: Anti-prescription framing (agent MUST use template)
- R5: Sequential phases (agent MUST follow order)
- R6: Divergence mandate (agent MUST justify convergence)

**If structural mechanisms fail:** Behavioral rules provide 60-70% residual protection.
**If behavioral rules fail:** Structural mechanisms provide 70-80% residual protection.

---

## METACOGNITIVE FRAMING

### Construction Consciousness

**YOU ARE NOT DISCOVERING PRE-EXISTING PATTERNS.**

Every time you read compositional-core/, you are CONSTRUCTING an interpretation:
- Your lens (identity, enablement, creative) CREATES categories
- Your thresholds (3+ examples, 80% frequency) CREATE boundaries
- Your reading order (visual-first, source-first) SHAPES what you see
- Your language ("I found" vs "I constructed") OBSCURES this process

**BEFORE reading:**
- STATE your lens: "I am using [identity] lens because [reason]"
- STATE your thresholds: "I will consider X extractable if [criteria]"
- ACKNOWLEDGE construction: "This is my interpretation, not objective truth"

**AFTER reading:**
- Replace "I found" → "I interpreted"
- Replace "Evidence shows" → "I categorized evidence as"
- Replace "The system has" → "I constructed a model where"

### Template Immunity

**CASE STUDIES ARE NOT TEMPLATES. They are PROCESS PROOFS.**

**Jazz Real Book Analogy:**
Charlie Parker learned 200+ standards, transcribed 100+ solos.
He did NOT play those standards verbatim in performance.
He EXTRACTED harmonic patterns, melodic shapes, rhythmic devices.
He APPLIED them to NEW material with HIS voice.

**Your assignment:**
- Learn the case studies (study the process)
- Extract the MECHANISMS (border-weight, 2-zone DNA, compression)
- Apply to YOUR content with YOUR metaphor

**DO NOT:**
- Read case studies BEFORE Phase 3 (metaphor derivation)
- Copy CSS patterns (use mechanisms, not implementations)
- Match your metaphor to library metaphors (divergence check required)

### Jazz Real Book Model

**THE COMPOSITIONAL CORE IS YOUR REAL BOOK. YOUR WORK IS YOUR SOLO.**

**Vocabulary you're learning:**
- Border-weight gradient (hierarchy via thickness)
- 2-zone DNA (sparse label + dense body)
- Fractal compression (same rhythm at every scale)
- Zone progression (background alternation)
- Bento grid islands (independent modules)

**How to know you're fluent:**
- Can apply mechanisms to content library hasn't seen
- Can derive NEW metaphors using learned vocabulary
- Can explain WHY a mechanism works, not just WHAT it looks like
- Can recognize when a mechanism DOESN'T fit (context-awareness)

**How to know you're recipe-following:**
- Copying specific CSS values from case studies
- Using same metaphor as library for similar content
- Can't explain mechanism, just reproduce pattern
- Treating case studies as templates to fill in

**"Play what YOU hear."** The library is your Real Book. Your composition is your solo.

---

### Concrete Example: Vocabulary vs Library in CSS

**The Distinction (Abstract):**
- Vocabulary (mechanism catalog) = tools you USE
- Library (case studies) = usage examples you LEARN FROM

**The Distinction (Concrete CSS):**

#### Mechanism (Vocabulary — Transferable)

**From:** `compositional-core/grammar/mechanism-catalog.md` (Mechanism #1)

```css
/**
 * Mechanism: Border-Weight Gradient
 * Encodes: Hierarchy / Importance / Confidence (ABSTRACT semantic domain)
 * Values: 4px/3px/2px/1px gradient
 * Transfers to: ANY content with hierarchical importance structure
 */

/* The PATTERN (what transfers): */
.element--highest { border-left: 4px solid var(--color); }
.element--high    { border-left: 3px solid var(--color); }
.element--medium  { border-left: 2px solid var(--color); }
.element--low     { border-left: 1px solid var(--color); }
```

**What this documents:** The CSS TECHNIQUE (4px/3px/2px/1px border progression). What it ENCODES (hierarchy/importance/confidence in abstract). NOT what values to use, NOT what classes to name, NOT what metaphor to apply.

---

#### Implementation 1 (Library — Geological Metaphor)

**From:** `compositional-core/case-studies/OD-004-confidence.md`

```css
/**
 * Metaphor: Geological stratification (bedrock → topsoil)
 * Semantic: Established knowledge → speculative (confidence gradient)
 * Mapping: Deep strata = consolidated = certain = heavy borders
 */

.stratum--bedrock {
  border-left: 4px solid var(--color-text);
  /* WHY 4px? Bedrock = foundational layer, geologically consolidated
     under pressure over millennia. Maximum structural weight (4px)
     encodes maximum epistemic weight (established certainty). */
}

.stratum--sediment {
  border-left: 3px solid var(--color-text);
  /* WHY 3px? Sediment = partially consolidated. Some compression
     but not fully settled. 75% of bedrock weight (3/4px) = probable,
     not established. */
}

.stratum--topsoil {
  border-left: 2px solid var(--color-text-secondary);
  /* WHY 2px? Topsoil = loose, unconsolidated. Speculative knowledge.
     50% of bedrock weight (2/4px) = half as certain. CRITICAL: 2px
     is SEMANTIC (hierarchy) not decorative (per prohibitions.md). */
}

.stratum--surface {
  border-left: 1px solid var(--color-border);
  /* WHY 1px? Surface = atmospheric, no consolidation. Open questions.
     Minimum weight (1px) = minimum certainty. */
}
```

**What this documents:** A SPECIFIC APPLICATION of border-weight gradient mechanism to geological metaphor. The VALUES are metaphor-specific (4px bedrock, 1px surface). The JUSTIFICATION connects metaphor to mechanism (consolidation → weight → certainty).

---

#### Implementation 2 (Your Application — Architectural Metaphor)

**From:** YOUR page (hypothetical — architectural building structure)

```css
/**
 * Metaphor: Building structure (basement → roofline)
 * Semantic: Load-bearing structure → decorative (structural importance)
 * Mapping: Basement = foundation = load-bearing = heavy borders
 */

.floor--basement {
  border-left: 4px solid var(--color-text);
  /* WHY 4px? Basement = foundation, load-bearing walls, structural.
     Maximum weight (4px) = maximum structural importance. All weight
     above this floor is supported here. */
}

.floor--ground {
  border-left: 3px solid var(--color-text);
  /* WHY 3px? Ground floor = primary access, moderate structural load.
     75% of foundation weight = secondary importance (not foundational
     but still load-bearing). */
}

.floor--upper {
  border-left: 2px solid var(--color-text-secondary);
  /* WHY 2px? Upper floors = residential, minimal structural load.
     50% of foundation weight = tertiary importance. */
}

.floor--roofline {
  border-left: 1px solid var(--color-border);
  /* WHY 1px? Roofline = decorative, no load-bearing function.
     Minimum weight = minimum structural importance. */
}
```

**What this documents:** A DIFFERENT APPLICATION of the SAME mechanism (border-weight gradient) to a DIFFERENT metaphor (architectural vs geological). The MECHANISM is the same (#1). The VALUES are different (your padding, your class names). The SEMANTIC DOMAIN is parallel (structural importance vs confidence).

---

#### The Key Differences

| Dimension | Mechanism (Vocabulary) | Implementation 1 (OD-004) | Implementation 2 (Yours) |
|-----------|----------------------|--------------------------|-------------------------|
| **CSS Pattern** | 4px/3px/2px/1px | 4px/3px/2px/1px | 4px/3px/2px/1px |
| **What it encodes** | Hierarchy (abstract) | Confidence (specific) | Structural importance (specific) |
| **Metaphor** | None (transferable) | Geological strata | Building floors |
| **Class names** | `.element--high/low` | `.stratum--bedrock/surface` | `.floor--basement/roofline` |
| **Justification** | "Encodes hierarchy" | "Bedrock = consolidated under pressure = certain = heavy" | "Basement = load-bearing = structural = heavy" |

**Same mechanism (#1 border-weight gradient).
Different metaphors (geological ≠ architectural).
Different values (class names, justification).
Different semantics (confidence ≠ structural importance).
Same structural pattern (4px/3px/2px/1px progression).**

---

#### What Makes This Vocabulary (Not Template Copying)?

**The Name Test:**
- Remove "geological" from Implementation 1. Does "border-weight encodes hierarchy" still make sense? **YES** → mechanism
- Remove "bedrock" from Implementation 1. Does "4px border" still make sense without context? **NO** → metaphor-specific

**The Transfer Test:**
- Does border-weight gradient work with architectural metaphor (Implementation 2)? **YES** → transferable
- Does "`.stratum--bedrock`" work with architectural metaphor? **NO** → metaphor-specific class name

**The Semantic Independence Test:**
- Does Implementation 2 encode the SAME semantic as Implementation 1? **NO** (confidence ≠ structural importance)
- Do both use the SAME CSS pattern? **YES** (4px/3px/2px/1px gradient)
- **Verdict:** Same vocabulary (mechanism), different usage (metaphor + semantic). This is grammar fluency, not template copying.

---

#### Why This Example Matters

**Before this example:**
- "Vocabulary = tools, library = examples" (abstract framing)
- Builders know the distinction conceptually but can't SEE it in CSS

**After this example:**
- Border-weight gradient IS the mechanism (4px/3px/2px/1px pattern)
- Geological strata IS the metaphor-specific implementation (bedrock class names)
- Architectural floors IS a different implementation (same mechanism, different metaphor)
- The mechanism TRANSFERS (same CSS pattern), the metaphor DOESN'T (different class names, different justifications)

**One concrete CSS example is worth 1000 words of explanation.**

---

### Context Awareness

**EVERY PATTERN IS SITUATED, not universal.**

**Document:**
- WHERE was this validated? (DD-006, OD-004)
- WHAT content properties does it assume? (hierarchical structure)
- WHERE is this UNTESTED? (flat content, conversational)

**Framing patterns as SITUATED:**
- ❌ WRONG: "Border-radius: 0 is a soul constraint"
- ✅ CORRECT: "Border-radius: 0 emerged from fortress content, validated across DD/OD/CD"

- ❌ WRONG: "4px borders ARE the mechanism"
- ✅ CORRECT: "4px borders worked for content with strong boundaries (technical docs)"

- ❌ WRONG: "Fractal rhythm works for hierarchical content"
- ✅ CORRECT: "Fractal rhythm worked for DD-006 (self-similar documentation). Requires recursive structure."

### Perceptual Cost Economics

**METAPHOR RICHNESS ISN'T FREE. Perceptual costs are REAL costs.**

**Core guardrails (from skill enrichment):**
1. **940px minimum container** (65% of 1440px viewport)
   - Prevents metaphor-driven width collapse

2. **16px minimum label-to-heading gap**
   - Prevents metaphor-driven smashing

3. **32px minimum padding floor**
   - Prevents metaphor-driven dead zones

4. **40% maximum compression ratio** (densest ÷ sparsest)
   - Prevents metaphor-driven cognitive fatigue

**When metaphor conflicts with guardrails:**
1. CHECK perceptual cost
2. APPLY cost-benefit analysis
3. DOCUMENT the decision

**"The metaphor shapes experience; the guardrails prevent it from breaking experience."**

### Minimum Metacognitive Overhead

**7 CHECKS. NOT 20. 10% meta, 90% doing.**

1. Discovery language? → Rewrite
2. Template-matching? → Regenerate
3. Lens stated? → State it
4. Universal framing? → Document context
5. Violating guardrails? → Cost-benefit check
6. Metaphor matches library? → Divergence table
7. Copying recipes? → Extract mechanisms

**If spending >5 min on meta-questions: STOP. CHOOSE. MOVE ON.**

---

## 6-LAYER ONTOLOGY QUICK MAP

**Layer 1: identity/ (REFUSES) — always load**
- prohibitions.md: 22 prohibitions (8 absolute, 12 conditional, 2 meta)
- soul-constraints.md: 3 immutable anchors

**Layer 2: vocabulary/ (ATOMS) — always load**
- tokens.css: :root block with 65 tokens
- token-mutability.md: IMMUTABLE vs MUTABLE classification

**Layer 3: grammar/ (COMBINES) — Phase 4+**
- mechanism-catalog.md: 18 mechanisms
- compositional-rules.md: 11 rules
- border-grammar.md: 3-category encoding

**Layer 4: components/ (IMPLEMENTS) — Track 1 always, Track 2 Phase 4+**
- components.css: merged CSS (31KB)
- component-inventory.md: confidence levels

**Layer 5: case-studies/ (PROVES) — Phase 5 only, anti-prescription**
- _INDEX.md: titles + tensions
- 9 case studies (DD-003, DD-006, OD-004, CD-003, CD-006, etc.)
- ANTI-PRESCRIPTION-TEMPLATE.md: divergence format

**Layer 6: guidelines/ (DECIDES) — when facing semantic ambiguity**
- usage-criteria.md: when to use what
- semantic-rules.md: appropriateness criteria
- responsive-strategy.md: 768px breakpoint

**WHY THIS ORDERING:** Identity → vocabulary → grammar → components → case studies → guidelines
(IMMUTABLE → MUTABLE → COMPOSITIONAL → STRUCTURAL → PROOF → SEMANTIC)

---

## VERIFICATION CHECKLIST

**Soul check:**
- □ border-radius: 0 everywhere?
- □ box-shadow: none everywhere?
- □ No drop-shadow filter?
- □ Colors from tokens.css?
- □ Fonts correct (display/body/mono)?
- □ Spacing from scale (4px base)?

**Perceptual audit (invoke skill):**
- □ Run full 48 PA questions
- □ Check guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- □ Squint test: visual coherence
- □ Comparison test: vs KortAI reference pages

**Guardrails:**
- □ 940px minimum container width (65% viewport at 1440px)
- □ 16px minimum label-to-heading spacing
- □ 32px minimum padding floor on containers
- □ 40% maximum compression ratio

**Divergence (Track 2 only, if case studies consulted):**
- □ 5-dimension divergence table complete?
- □ DIFFERENT on 3+ dimensions?
- □ If convergence: strong justification documented?

---

## PHASE D VALIDATION LESSONS (2026-02-15)

Phase D tested 5 pipeline configurations. COMPLETE — CONDITIONAL PASS. Key lessons for builders:

1. **Container width 940-960px is NON-NEGOTIABLE.** This was THE primary failure mode (4/5 pages violated it). Express narrowing through INTERNAL spacing, not external width reduction. No metaphor may override this.

2. **The always-load protocol is CRITICAL.** Track 1's instant fail (5 critical violations, 11/19 compliance) was caused by not reading prohibitions.md. This file is not optional.

3. **"Weak permission" framing has ZERO effect.** Telling agents case studies are "available for reference" produces identical behavior to not mentioning them. Library access must be phase-gated (anti-gravity R1), not permission-gated.

4. **Variant B demonstrated genuine pipeline identity.** The tension-composition pipeline produces real metaphor derivation (4/5 novelty). The gap is technique DENSITY (5/44 techniques), not technique ABSENCE.

**Post-D Research (COMPLETE, 2026-02-15):** Richness + rigidity investigations (11 agents) established tier model (Floor/Middle/Ceiling/Flagship) and modification recommendations. Skill enrichment currently in progress to address "sample 2-4 mechanisms" limitation.

See: ephemeral/continuity-docs/HANDOFF.md for full Phase D results.

---

## FILE REFERENCE

**Key file paths within compositional-core/:**
- identity/prohibitions.md
- vocabulary/tokens.css
- grammar/mechanism-catalog.md
- components/components.css
- case-studies/_INDEX.md
- guidelines/usage-criteria.md
- validation/anti-gravity-compliance.md
- process/lens-manifesto.md

**Skills (outside compositional-core):**
- ~/.claude/skills/tension-composition/SKILL.md
- ~/.claude/skills/perceptual-auditing/SKILL.md

**For comprehensive documentation:** compositional-core/README.md (923 lines)

---

**END CLAUDE.md — This is the phase-gated protocol. Read what your phase permits, no more.**
