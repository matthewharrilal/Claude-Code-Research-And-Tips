# Compositional-Core — Phase-Gated Protocol CLAUDE.md

**STOP — READ THIS BEFORE TOUCHING ANYTHING.**
You MUST read identity/identity.md, identity/vocabulary.md, and vocabulary/tokens.css BEFORE any other action.
Violating soul principles = INVALID work. No exceptions. No shortcuts.

**Last Updated:** 2026-03-01
**Status:** OPERATIONAL (Phase C Complete, /build-page Pipeline ACTIVE). ALWAYS FLAGSHIP -- every page at maximum compositional intensity. Tier routing REMOVED.

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

**MANDATORY:** Read these 4 files FIRST, for ANY task in compositional-core/:

### 1. identity/identity.md (87 lines)

KortAI's character, soul principles, and refusals:
- **Character:** Editorial purist, austere, warm earth tones + sharp geometry
- **2 Soul Principles:** Angular geometry (border-radius: 0), no shadow/depth simulation (box-shadow: none)
- **3 Identity Signatures:** Warm palette, typography trinity, 4px left-border callout system
- **Internal Tensions:** Warmth vs severity, solid offset vs anti-shadow, vocabulary ceiling
- **Refusals:** Absolute (no rounded corners, no shadows, no gradients, no semi-transparent backgrounds, no cool grays, no hover lift) + Conditional (documented exceptions)
- **Diagnostics:** Bootstrap Test — if layout could exist in Bootstrap without modification, it lacks KortAI identity

**WHY FIRST:** Defines identity through CHARACTER and REFUSALS. Violating soul principles = not KortAI.

### 2. identity/vocabulary.md (55 lines)

Design decisions & rationale — WHY the system makes each choice:
- Palette decisions (warm cream, 2-color text hierarchy, semantic accents, zone backgrounds)
- Typography decisions (literary feel, single type scale, h3 always italic)
- Spacing decisions (4px base, inside vs between ratio, gestalt aliases)
- Border decisions (3 weights not 4, 2px deliberately skipped)
- Container width (860-1100px range, consistent within page)

**WHY SECOND:** Connects every design token to its rationale. Understanding BEFORE vocabulary.

### 3. vocabulary/tokens.css (124 lines)

65 CSS tokens in :root block:
- Color palette (8 values), typography trinity (3 fonts)
- Spacing scale (4px base unit), border weights (4px/3px/1px)

**WHY THIRD:** Implementation values grounded by identity and rationale.

### 4. components/components.css (779 lines)

CSS implementations for all components:
- Callout system (5 types: info, tip, warning, essence, challenge)
- Code blocks, tables, header/footer, bento grid, file tree
- Dark zones, breathing zones, structural patterns

**WHY FOURTH:** Reference layer — how mechanisms are implemented in CSS.

**Total always-load: ~1,045 lines (4 files)**

---

## BUILD PROTOCOL: ALWAYS FLAGSHIP

**Every page is built at Flagship tier.** No tier routing. No Track 1/Track 2 classification.

**The Addition Test is RETIRED.** The test classified pages into assembly (Track 1) vs composition (Track 2). Under ALWAYS FLAGSHIP, every page gets full composition.

**The only escape valve:** If content has ZERO cosmetic tension (pure data tables, raw API reference), the TC pipeline will detect this and produce a flat-mode build. This is automatic, not a routing decision.

**Entry point:** `/build-page <content-path>`

**What /build-page does:**
1. Content analysis (structural heterogeneity, rhetorical variety, mechanism affinity)
2. TC pipeline Phases 0-5 (metaphor derivation, mechanism selection, operational recipe)
3. Opus builder deployment (with recipe, not checklist)
4. 21-gate programmatic verification (Flagship thresholds)
5. Mode 4 PA (9 auditors, 56 questions including 8 Tier 5)
6. Fix cycles (max 3, same builder)
7. Verdict: SHIP / FIX / REBUILD / ESCALATE

**Success bar:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations

---

## MANUAL BUILD WORKFLOW (Fallback -- only if /build-page is unavailable)

If /build-page cannot be invoked, follow the Flagship Build Workflow below manually.
The /build-page orchestrator automates all of this.

---

## FLAGSHIP BUILD WORKFLOW (Automated by /build-page)

### Phase 0: Load Vocabulary + Library Prohibition

**MANDATORY:**
1. Read identity/identity.md (87 lines)
2. Read identity/vocabulary.md (55 lines)
3. Read vocabulary/tokens.css (124 lines)

**PROHIBITED until Phase 5 (ABSOLUTE — violation invalidates entire derivation):**
- ❌ case-studies/ directory
- ❌ Prior explorations (DD-001 through CD-006)
- ❌ Tension-test layouts
- ❌ grammar/mechanisms.md or grammar/grammar.md (permitted at Phase 4, NOT before)

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
- grammar/mechanisms.md (88 lines — all mechanisms)
- grammar/grammar.md (149 lines — compositional rules + sequencing)
- components/components.css (779 lines — CSS implementations)
- components/components.md (37 lines — inventory with velocity/weight)

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
- Guardrails: 860-1100px container (consistent per page), 16px spacing, 32px padding, 40% compression
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

**RULE:** Mechanisms go in grammar/mechanisms.md. Metaphors go in case-studies/*.md. DO NOT mix them in the same file.

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

**From:** `compositional-core/grammar/mechanisms.md` (Mechanism #1)

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
     is SEMANTIC (hierarchy) not decorative (per identity.md). */
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

**Core guardrails (Flagship thresholds):**
1. **860-1100px container width** (consistent within page, variable across pages per content needs)
2. **>= 15 RGB max-channel delta** at zone boundaries (SC-09)
3. **<= 120px total stacked gap** at section boundaries (SC-10)
4. **3+ distinct typography zones**, display-body >= 10px delta (SC-11)
5. **>= 3 of 6 channels shift** at every boundary, avg >= 4 (SC-13)
6. **>= 3 distinct border configurations** across page (SC-15)
7. **No sub-perceptual CSS**: no letter-spacing < 0.025em, no bg delta 1-14 RGB (SC-14)
8. **>= 5 ARIA landmarks**, skip link present (SC-06/07)
9. **>= 8 component library classes** (SC-08)

**When metaphor conflicts with guardrails:** Guardrails win. These are perception physics, not preferences.

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

**Layer 1: identity/ (WHO IT IS) — always load**
- identity.md: Character + soul principles + refusals + diagnostics (87 lines)
- vocabulary.md: Design decisions & rationale (55 lines)

**Layer 2: vocabulary/ (ATOMS) — always load**
- tokens.css: :root block with 65 CSS tokens (124 lines)

**Layer 3: grammar/ (COMBINES) — Phase 4+**
- mechanisms.md: 20 mechanisms with categories + transition grammar (88 lines)
- grammar.md: Compositional rules + sequencing + density patterns (149 lines)

**Layer 4: components/ (IMPLEMENTS) — always load (CSS), Phase 4+ (inventory)**
- components.css: CSS implementations (779 lines)
- components.md: Component inventory with velocity/weight (37 lines)

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

**Perceptual audit (Flagship -- 56 questions):**
- □ Run full 48 standard PA questions + 8 Tier 5 questions (PA-60 through PA-67)
- □ PA-05 >= 3.5/4 (Flagship threshold)
- □ Tier 5 >= 6/8 (COMPOSED: Flagship compositional depth)
- □ Zero void patterns (no whitespace voids >= 200px)
- □ Metaphor is STRUCTURAL (not ANNOUNCED or LABELED)

**Guardrails (Flagship thresholds):**
- □ 860-1100px container width, consistent within page (SC-01)
- □ >= 15 RGB max-channel delta at zone boundaries (SC-09)
- □ <= 120px total stacked gap at boundaries (SC-10)
- □ 3+ distinct typography zones, display-body >= 10px (SC-11)
- □ >= 3 of 6 channels shift at every boundary, avg >= 4 (SC-13)
- □ >= 3 distinct border configurations (SC-15)
- □ No sub-perceptual CSS (SC-14)
- □ >= 5 ARIA landmarks (SC-06), skip link (SC-07)
- □ >= 8 component library classes (SC-08)

**Divergence (always required -- every build runs full TC):**
- □ 5-dimension divergence table complete?
- □ DIFFERENT on 3+ dimensions?
- □ If convergence: strong justification documented?

---

## EXPERIMENT LESSONS (Phase D through Flagship)

Phase D through Flagship experiments (2026-02-15 to 2026-02-18) tested 7 pipeline configurations. Key lessons for builders:

1. **Container width 860-1100px range.** Consistent within a single page, variable across pages. Narrow (860px) for dense reading-focused content, standard (900-1000px) for general purpose, wide (1100px) for multi-axis spatial layouts. See vocabulary.md for exploration evidence.

2. **The always-load protocol is CRITICAL.** Track 1's instant fail (5 critical violations, 11/19 compliance) was caused by not reading the identity files. These files are not optional.

3. **"Weak permission" framing has ZERO effect.** Telling agents case studies are "available for reference" produces identical behavior to not mentioning them. Library access must be phase-gated (anti-gravity R1), not permission-gated.

4. **Variant B demonstrated genuine pipeline identity.** The tension-composition pipeline produces real metaphor derivation (4/5 novelty). The gap is technique DENSITY (5/44 techniques), not technique ABSENCE.

5. **Recipe beats checklist.** Builders receiving sequenced steps with CSS values (RECIPE) produce DESIGNED output. Builders receiving constraint lists with thresholds (CHECKLIST) produce FLAT output. /build-page provides recipes.

6. **Perceptible CSS only.** Every CSS value must be perceptible to a human. Minimum deltas: backgrounds >= 15 RGB, font-size >= 2px between zones, letter-spacing >= 0.5px, padding >= 24px between zones, total stacked gap <= 120px.

7. **Same builder for fix cycles.** Compositional memory is irreplaceable. The builder that produced 1.5/4 improved to 2.5/4 with targeted feedback. New agents re-derive from scratch.

8. **Build boundary-by-boundary, not channel-by-channel.** Setting all CSS channels (background + typography + spacing + borders) at each zone boundary produces multi-coherence. Setting all backgrounds, then all borders, then all typography produces flat output.

**Full experiment history:** See ephemeral/continuity-docs/HANDOFF.md

---

## FILE REFERENCE

**Key file paths within compositional-core/ (7-file vocabulary):**
- identity/identity.md (character + soul + refusals, 87 lines)
- identity/vocabulary.md (design decisions, 55 lines)
- vocabulary/tokens.css (CSS tokens, 124 lines)
- grammar/mechanisms.md (20 mechanisms, 88 lines)
- grammar/grammar.md (compositional rules, 149 lines)
- components/components.css (CSS implementations, 779 lines)
- components/components.md (inventory, 37 lines)

**Supporting files:**
- case-studies/_INDEX.md
- guidelines/usage-criteria.md
- validation/anti-gravity-compliance.md
- process/lens-manifesto.md

**Superseded files (in `_superseded/`, kept for provenance, NOT operational):**
- _superseded/prohibitions.md → replaced by identity/identity.md
- _superseded/soul-constraints.md → replaced by identity/identity.md
- _superseded/mechanism-catalog.md → replaced by grammar/mechanisms.md
- _superseded/compositional-rules.md → replaced by grammar/grammar.md
- _superseded/border-system.md → absorbed into grammar/grammar.md
- _superseded/mechanism-combinations.md → absorbed into grammar/grammar.md
- _superseded/tokens-mutability.md → absorbed into vocabulary/tokens.css
- _superseded/component-inventory.md → replaced by components/components.md
- _superseded/components-dd-od.css → merged into components/components.css
- _superseded/components-cd-tt.css → merged into components/components.css

**Skills (outside compositional-core):**
- ~/.claude/skills/compose/SKILL.md (page building orchestrator)
- ~/.claude/skills/tension-composition/SKILL.md
- ~/.claude/skills/perceptual-auditing/SKILL.md

**For architecture and file inventory:** compositional-core/README.md (212 lines)

---

**END CLAUDE.md — This is the phase-gated protocol. Read what your phase permits, no more.**
