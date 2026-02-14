# Compositional-Core — Phase-Gated Protocol CLAUDE.md

**STOP — READ THIS BEFORE TOUCHING ANYTHING.**
You MUST read identity/prohibitions.md and vocabulary/tokens.css BEFORE any other action.
Violating prohibitions = INVALID work. No exceptions. No shortcuts.

**Last Updated:** 2026-02-14
**Status:** OPERATIONAL (Phase C Extraction Complete)

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

**Verify:** Soul check + perceptual audit.

**NO metaphor derivation required.**

### Track 2: Tension-Driven Composition

**When:** Content is prose-dominant (>70% narrative). Implicit tension exists (warmth vs austerity, authority vs playfulness). No direct tool available.

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
