# Workflow Sequences Research — Compositional-Core CLAUDE.md

**Agent:** workflow-researcher
**Date:** 2026-02-14
**Mission:** Document the concrete workflow sequences (file loading order, phase gates, track divergence) for compositional-core CLAUDE.md

---

## Executive Summary

The compositional-core supports **two distinct workflow tracks** with **phase-gated file access**:

- **Track 1 (Assembly):** Mechanical component combination for straightforward content. 45-90 min. Load tokens + components + prohibitions → assemble. **NO creative derivation required.**
- **Track 2 (Composition):** Creative tension resolution through metaphor. 3-5 hours. Run tension-composition skill Phases 0-3 BLIND → commit metaphor → load mechanisms → optionally read case studies → compose. **REQUIRES independent creative derivation.**

**Critical finding:** Track 2 workflow has **2 structural gates** (Phase 3.5 metaphor lock-in + Phase 5 divergence verification) and **1 prohibition gate** (Phase 0D library prohibition until Phase 4). These gates are ANTI-GRAVITY mechanisms preventing pattern-matching.

---

## Q1: Track 1 File Loading Sequence (Assembly Workflow)

### Track Classification Decision

**Track 1 applies when:**
- Content is prose-dominant (<30% code/tables/diagrams) OR
- Content is reference/tutorial structure (step-by-step, FAQ, getting-started) OR
- Content has explicit vocabulary (tables, stats, diagrams mapping directly to components)

**Track 1 does NOT require:**
- Tension-composition skill invocation
- Metaphor derivation
- Case study consultation
- Multi-phase creative process

### Exact File Loading Sequence

```
TRACK 1 ASSEMBLY — Load Order
┌─────────────────────────────────────────────────────────────────────────┐
│ PHASE 0: ALWAYS-LOAD LAYER (Identity + Vocabulary)                     │
├─────────────────────────────────────────────────────────────────────────┤
│ 1. identity/prohibitions.md (353 lines, ALL lines)                     │
│    WHY FIRST: Defines identity through REFUSALS. Violating = not KortAI│
│    WHAT IT LOADS:                                                       │
│      - 8 absolute prohibitions (NEVER, zero exceptions)                 │
│      - 12 conditional prohibitions (documented exceptions)              │
│      - 2 meta-prohibitions (process-level)                              │
│                                                                         │
│ 2. vocabulary/tokens.css (174 lines, ALL lines)                        │
│    WHY SECOND: Source-first extraction grounds vocabulary in impl reality│
│    WHAT IT LOADS:                                                       │
│      - Soul constraints (--radius-sharp: 0, box-shadow: none)           │
│      - Color palette (8 values)                                         │
│      - Typography trinity (3 fonts)                                     │
│      - Spacing scale (6 anchors, 14 values)                             │
│                                                                         │
│ 3. components/components.css (first 100 lines)                         │
│    WHY THIRD: Component vocabulary before building                      │
│    WHAT IT LOADS:                                                       │
│      - 2-zone component DNA pattern                                     │
│      - Callout family structure                                         │
│      - Code block structure                                             │
│      - Table structure                                                  │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 1: DECISION SUPPORT (Guidelines)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│ 4. guidelines/usage-criteria.md                                        │
│    WHY NOW: Need to choose WHICH components                             │
│    WHAT IT PROVIDES:                                                    │
│      - Component confidence levels (HIGH/MEDIUM/LOW)                    │
│      - Stage markers (CD-ONLY, universal, DD/OD-primary)                │
│      - Parametric variation guidance                                    │
│                                                                         │
│ 5. guidelines/semantic-rules.md                                        │
│    WHY NOW: Need to choose WHEN to use what                             │
│    WHAT IT PROVIDES:                                                    │
│      - Callout variant selection (Info vs Context vs Tip vs Note)       │
│      - Typography hierarchy (serif vs sans vs mono)                     │
│      - Border-weight encoding (4px vs 3px vs 1px)                       │
│      - Dense vs sparse background decisions                             │
│                                                                         │
│ 6. guidelines/responsive-strategy.md                                   │
│    WHY NOW: Need to plan breakpoints                                    │
│    WHAT IT PROVIDES:                                                    │
│      - 768px primary breakpoint rules                                   │
│      - Spacing compression ratios (64px → 32px)                         │
│      - Typography scale reduction (40px → 32px)                         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 2: IMPLEMENTATION                                                │
├─────────────────────────────────────────────────────────────────────────┤
│ 7. BUILD: Use token VALUES, apply component PATTERNS                   │
│    - Use exact token values (var(--color-primary), var(--space-8))      │
│    - Apply components as-is (no custom CSS)                             │
│    - Follow responsive strategy (768px collapse)                        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 3: VERIFICATION                                                  │
├─────────────────────────────────────────────────────────────────────────┤
│ 8. Invoke perceptual-auditing skill                                    │
│    - Run full 48 PA questions                                           │
│    - Check guardrails (940px container, 16px spacing, 32px padding)     │
│    - Verify soul (border-radius: 0, box-shadow: none, colors correct)   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Why This Order?

1. **Identity FIRST** — Prohibitions are IMMUTABLE. All other layers derive from these.
2. **Vocabulary SECOND** — Components are BUILT FROM tokens. Can't use components without tokens.
3. **Guidelines THIRD** — Semantic rules reference ALL prior layers. Can't choose components without knowing their confidence levels.
4. **Implementation FOURTH** — Build only after all constraints and vocabulary loaded.
5. **Verification LAST** — Audit after implementation, not during.

**Total Track 1 reading:** ~627 lines (prohibitions 353 + tokens 174 + components 100)
**Total Track 1 time:** 45-90 minutes (simple mechanical assembly)

---

## Q2: Track 2 File Loading Sequence (Composition Workflow)

### Track Classification Decision

**Track 2 applies when:**
- Content is prose-dominant (>70% narrative, editorial, explanatory) AND
- Content has implicit tension (warmth vs austerity, authority vs playfulness, depth vs directness) AND
- Content CANNOT be served by component assembly alone (no direct tool available)

**Track 2 REQUIRES:**
- Tension-composition skill invocation
- Independent metaphor derivation
- Phase-gated library access
- Multi-phase creative process (3-5 hours)

### Exact Phase-Gated Sequence

```
TRACK 2 COMPOSITION — Phase-Gated Load Order
┌─────────────────────────────────────────────────────────────────────────┐
│ PHASE 0: ALWAYS-LOAD LAYER + LIBRARY PROHIBITION                       │
├─────────────────────────────────────────────────────────────────────────┤
│ 1. identity/prohibitions.md (353 lines, ALL lines)                     │
│    SAME AS TRACK 1 — Identity constraints                               │
│                                                                         │
│ 2. vocabulary/tokens.css (174 lines, ALL lines)                        │
│    SAME AS TRACK 1 — Token vocabulary                                   │
│                                                                         │
│ 3. PROHIBITION GATE (CRITICAL):                                        │
│    YOU MUST NOT read during Phases 0-3:                                │
│      ❌ case-studies/ (pattern library) — PROHIBITED until Phase 5      │
│      ❌ Prior explorations (DD-001 through CD-006) — PROHIBITED          │
│      ❌ Tension-test layouts (boris/, gastown/, playbook/) — PROHIBITED │
│                                                                         │
│    WHY THIS PROHIBITION EXISTS:                                         │
│    - Library patterns are VALIDATION tools, not GENERATION tools        │
│    - Reading before metaphor commitment = pattern-matching              │
│    - Violation INVALIDATES the entire derivation                        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 1-3: TENSION-COMPOSITION SKILL (BLIND TO LIBRARY)                │
├─────────────────────────────────────────────────────────────────────────┤
│ 4. Invoke tension-composition skill at ~/.claude/skills/               │
│    tension-composition/SKILL.md                                         │
│                                                                         │
│    Phase 1: Multi-Axis Questioning                                     │
│      - Run core four axes (FEEL/UNDERSTAND/DO/BECOME)                   │
│      - Run extended five (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE)     │
│      - Deploy conditional axes (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER) │
│      - Output: 4-14 axis tables with needs + structural properties      │
│                                                                         │
│    Phase 2: Tension Derivation                                         │
│      - For each axis: Side A (reader needs) vs Side B (system constraints)│
│      - Apply Addition Test (genuine vs cosmetic)                        │
│      - Apply Richness Formula (Opposition x Overlap x Width)            │
│      - Output: Tension landscape with richness scores                   │
│                                                                         │
│    Phase 3: Metaphor Collapse                                          │
│      - Extract structural properties (Side A + Side B)                  │
│      - Find structural overlap (shared properties)                      │
│      - Generate search query (constrained domain search)                │
│      - Test candidates (Resolution + Isomorphism + Resonance + Feasibility)│
│      - Assess perceptual risk (0-4 scale)                               │
│      - Output: Ranked metaphor candidates with composite scores         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 3.5: METAPHOR LOCK-IN GATE (POINT OF NO RETURN)                  │
├─────────────────────────────────────────────────────────────────────────┤
│ 5. GATE QUESTIONS (MUST answer before proceeding):                     │
│    ✓ Did I derive independently? (YES/NO)                               │
│      - If NO: RESTART Phase 1 (did not follow prohibition)              │
│                                                                         │
│    ✓ Can I justify without library? (YES/NO)                            │
│      - If NO: Regenerate metaphor with explicit constraint              │
│                                                                         │
│    ✓ Does this appear in case-studies/_INDEX.md? (YES/NO)              │
│      - If YES: Divergence justification REQUIRED (5-dimension table)    │
│      - Must prove independent convergence OR regenerate                 │
│                                                                         │
│ 6. COMMIT METAPHOR (write down before consulting library)              │
│    - Metaphor name: [geological core / manuscript codex / etc.]         │
│    - Justification: [why this metaphor for this content]                │
│    - Gate certification: [all 3 questions answered YES]                 │
│                                                                         │
│    AFTER THIS GATE: You DO NOT change metaphor based on library         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 4: MECHANISM CATALOG (Techniques, NOT Implementations)           │
├─────────────────────────────────────────────────────────────────────────┤
│ 7. grammar/mechanism-catalog.md (first 200 lines)                      │
│    WHY NOW: After metaphor lock-in, extract reusable techniques         │
│    WHAT IT PROVIDES:                                                    │
│      - 18 mechanisms (border-weight gradient, 2-zone DNA, etc.)         │
│      - Compositional rules (how mechanisms combine)                     │
│      - Border system (3-category encoding)                              │
│                                                                         │
│    EXTRACT TECHNIQUES (reusable):                                       │
│      ✓ "Border-weight gradient encodes hierarchy" (technique)           │
│      ✓ "2-zone component DNA: sparse label + dense body" (technique)    │
│      ✓ "Spacing compression inversely encodes confidence" (technique)   │
│                                                                         │
│    DO NOT EXTRACT IMPLEMENTATIONS (metaphor-specific):                  │
│      ✗ "4px bedrock border" (geological-specific value)                 │
│      ✗ "6 strata structure" (fractal-specific architecture)             │
│                                                                         │
│    The distinction: "Border-weight gradient" (technique) vs             │
│                     "4px/3px/1px for confidence" (implementation)       │
│                                                                         │
│ 8. components/components.css (all lines)                               │
│    WHY NOW: Need full component vocabulary for composition              │
│    WHAT IT PROVIDES:                                                    │
│      - 26 component families, 34 selectors                              │
│      - Full CSS implementations                                         │
│      - Parametric variation examples                                    │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 5: OPTIONAL CASE STUDY CONSULTATION (Divergence Verification)    │
├─────────────────────────────────────────────────────────────────────────┤
│ 9. case-studies/_INDEX.md (titles + tension summaries)                 │
│    WHY NOW: After metaphor commitment, verify divergence                │
│    WHAT IT PROVIDES:                                                    │
│      - 9 case study titles                                              │
│      - Primary tension for each                                         │
│      - Metaphor domain for each                                         │
│                                                                         │
│ 10. Select 2-3 MOST similar case studies                               │
│     - Read case-studies/DD-006-fractal.md (if structural similarity)    │
│     - Read case-studies/OD-004-confidence.md (if geological domain)     │
│     - Read case-studies/CD-003-islands.md (if containment metaphor)     │
│                                                                         │
│ 11. Complete divergence table (5 dimensions):                          │
│     ┌─────────────────────────────────────────────────────────────┐    │
│     │ Dimension          │ Library Pattern │ My Metaphor │ Verdict │    │
│     ├─────────────────────────────────────────────────────────────┤    │
│     │ Metaphor domain    │ geological      │ botanical   │ DIFF    │    │
│     │ Structural isomorph│ bedrock→found   │ seed→growth │ DIFF    │    │
│     │ Section architecture│ 6 strata       │ 4 life stages│ DIFF   │    │
│     │ Vocabulary         │ geological terms│ plant terms │ DIFF    │    │
│     │ Mechanisms used    │ border-weight   │ spacing-comp│ DIFF    │    │
│     └─────────────────────────────────────────────────────────────┘    │
│                                                                         │
│     Passing criteria: DIFFERENT on 3+ dimensions = strong divergence    │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 6: IMPLEMENTATION                                                │
├─────────────────────────────────────────────────────────────────────────┤
│ 12. BUILD using vocabulary + mechanisms adapted to YOUR metaphor       │
│     - Use exact token values (var(--color-primary), var(--space-8))     │
│     - Apply mechanisms ADAPTED to your metaphor                         │
│     - Generate YOUR vocabulary (not library metaphor terms)             │
│     - Example: .botanical-stage NOT .stratum (your metaphor, not lib)   │
│                                                                         │
│ 13. Absolute rules (NEVER violate):                                    │
│     border-radius: 0;      /* ALWAYS sharp */                           │
│     box-shadow: none;      /* ALWAYS flat */                            │
│     opacity: 1;            /* NO transparency on containers */          │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ PHASE 7: VERIFICATION                                                  │
├─────────────────────────────────────────────────────────────────────────┤
│ 14. Invoke perceptual-auditing skill                                   │
│     - Run full 48 PA questions                                          │
│     - Check guardrails:                                                 │
│       • 940px min container (65% viewport at 1440px)                    │
│       • 16px label-to-heading spacing minimum                           │
│       • 32px padding floor on containers                                │
│       • 40% compression ratio maximum                                   │
│     - Verify soul (border-radius: 0, box-shadow: none, colors correct)  │
│                                                                         │
│     Core principle: "The metaphor shapes experience; the guardrails     │
│                      prevent it from breaking experience."              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Phase Access Rules Summary

| Layer | Phase 0 | Phase 1-3 | Phase 4 | Phase 5 | Phase 6-7 |
|-------|---------|-----------|---------|---------|-----------|
| identity/ | ✅ LOAD | ✅ ACTIVE | ✅ ACTIVE | ✅ ACTIVE | ✅ ACTIVE |
| vocabulary/ | ✅ LOAD | ✅ ACTIVE | ✅ ACTIVE | ✅ ACTIVE | ✅ ACTIVE |
| grammar/ | ❌ SKIP | ❌ SKIP | ✅ LOAD | ✅ ACTIVE | ✅ ACTIVE |
| components/ | ❌ SKIP | ❌ SKIP | ✅ LOAD | ✅ ACTIVE | ✅ ACTIVE |
| case-studies/ | ❌ PROHIBITED | ❌ PROHIBITED | ❌ PROHIBITED | ✅ OPTIONAL | ✅ ACTIVE |
| guidelines/ | ❌ SKIP | ❌ SKIP | ❌ SKIP | ✅ OPTIONAL | ✅ ACTIVE |

**Total Track 2 reading:** ~527-900 lines (prohibitions 353 + tokens 174 + mechanisms 200 + case studies 0-173)
**Total Track 2 time:** 3-5 hours (creative tension derivation + metaphor search + implementation)

---

## Q3: Tension-Composition Skill Integration

### Skill Location
`~/.claude/skills/tension-composition/SKILL.md` (839 lines, 42KB)

### Skill Structure
```
Skill Phases (0-7):
├── Phase 0: Content Assessment (scope + type classification)
├── Phase 0D: Library Prohibition (CRITICAL gate)
├── Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + extended + conditional)
├── Phase 2: Tension Derivation (genuine vs cosmetic + richness scoring)
├── Phase 3: Metaphor Collapse (structural overlap + search query + candidate scoring)
├── Phase 3.5: Metaphor Lock-In Gate (independent derivation verification)
├── Phase 4: Compositional Layout (mechanism application + implementation)
└── Phase 5: Output (HTML + thought process documentation)
```

### When Invoked
- **Track 2 ONLY** (composition workflow)
- **After Phase 0** (always-load layer complete)
- **Before reading grammar/** (mechanisms catalog)
- **Phases 1-3 run BLIND** to case-studies/ directory

### How It Works
The skill is NOT software to be built. It is **THE pipeline** for Track 2.

**The pipeline IS:**
1. Load skill at `~/.claude/skills/tension-composition/SKILL.md`
2. Load compositional-core identity (prohibitions.md + tokens.css)
3. Load perceptual-auditing skill (guardrails)
4. Invoke skill with content
5. Agent BECOMES the compositional builder

**Key quote from pipeline/CLAUDE.md:**
> "For Track 2 pages, the pipeline is not software to be built. It is the tension-composition skill with the right context. Load the skill, the component library, the perceptual guardrails — and any agent BECOMES the Track 2 pipeline."

### Critical Skill Gates

**Gate 1: Phase 0D (Library Prohibition)**
- Location: Skill lines 68-89
- Enforcement: Binary prohibition language
- Violation consequence: "Invalidates the entire derivation"

**Gate 2: Phase 3.5 (Metaphor Lock-In)**
- Location: Skill lines ~350-370 (inferred from README)
- 3 mandatory questions (independent? justify? divergence?)
- Must answer YES to all 3 OR restart/regenerate

**Gate 3: Phase 5 (Divergence Verification)**
- Location: After implementation, before finalization
- 5-dimension divergence table required
- Passing: DIFFERENT on 3+ dimensions

---

## Q4: Perceptual-Auditing Skill Integration

### Skill Location
`~/.claude/skills/perceptual-auditing/SKILL.md` (first 100 lines read)

### Skill Structure
```
48 PA Questions (Perceptual Audit):
├── Tier 1: Mandatory Five (every audit, every mode)
│   ├── PA-01: First thing that bothers you?
│   ├── PA-02: Text uncomfortable to read?
│   ├── PA-03: One designer or three?
│   ├── PA-04: Eye goes first — should it?
│   └── PA-05: Put your name on it?
├── Tier 2: Standard Fifteen (readability + spatial balance)
│   ├── PA-06 through PA-11: Readability checks
│   └── PA-29, PA-30: Spatial balance checks
└── [Additional tiers not read in excerpt]
```

### Quantitative Guardrails
From skill enrichment research (MEMORY.md):
- **940px min container** (65% viewport at 1440px)
- **16px label-to-heading spacing** minimum
- **32px padding floor** on containers
- **40% compression ratio** maximum

### When Invoked
- **Track 1:** After implementation (Phase 3)
- **Track 2:** After implementation (Phase 7)
- **ALWAYS:** Full 48 PA questions + guardrails

### How It Works
1. Take screenshot at 1440px AND 768px
2. Run Tier 1 mandatory five (perceptual)
3. Run Tier 2 standard fifteen (readability + spatial)
4. Check guardrails (programmatic CSS measurements)
5. Verify soul (border-radius: 0, box-shadow: none, colors)
6. Document findings
7. Iterate until passing

### Core Principle
> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

Guardrails are FLOORS (minimum acceptable), not TARGETS (what you aim for).

### Audit Optimization Trap Warning
From skill lines 5-42:
```
⚠️ DO NOT:
- Build pages TO PASS this audit
- Design compositions to maximize perceptual scores
- Optimize for auditability over content service
- Let guardrails GUIDE composition (they VERIFY, not DESIGN)

✓ DO:
- Build pages to serve content
- Design compositions from tension derivation
- Use audit to VERIFY quality, not to DEFINE quality
```

---

## Q5: Track Classification Decision Tree

```
┌─────────────────────────────────────────────────────────────────────────┐
│ TRACK CLASSIFICATION — How to Decide Track 1 vs Track 2                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ START: Analyze content                                                 │
│   │                                                                     │
│   ├─→ Is content >60% code/tables/diagrams?                            │
│   │     YES → Track 1 (Visual-dominant: apply design system defaults)  │
│   │     NO → Continue                                                  │
│   │                                                                     │
│   ├─→ Is content self-referential (describes the design system)?       │
│   │     YES → Track 1 (ABORT metaphor: apply defaults directly)        │
│   │     NO → Continue                                                  │
│   │                                                                     │
│   ├─→ Is content <100 words?                                           │
│   │     YES → Track 1 (Micro: skip pipeline, use component)            │
│   │     NO → Continue                                                  │
│   │                                                                     │
│   ├─→ Run Addition Test:                                               │
│   │   "Can you fulfill reader's need by selecting and placing existing │
│   │    design system components WITHOUT transforming their meaning?"   │
│   │     │                                                               │
│   │     YES → Track 1 (COSMETIC tension: assembly sufficient)          │
│   │     NO → Continue to Tension Validity Check                        │
│   │                                                                     │
│   └─→ Tension Validity Check:                                          │
│       ├─ Is tension genuine? (Addition Test passes)                    │
│       ├─ Is tension rich enough? (Richness score >= 8)                 │
│       ├─ Is tension bridgeable? (Structural overlap >= 2)              │
│       └─ Is tension content-driven? (BECAUSE test passes)              │
│         │                                                               │
│         ALL YES → Track 2 (GENUINE tension: metaphor required)         │
│         ANY NO → Track 1 (Assembly or redesign content)                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### The Addition Test (Critical)

> **Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?**
> - YES = COSMETIC (no tension, assembly is sufficient) → **Track 1**
> - NO = GENUINE (tension exists, metaphor required) → **Track 2**

**Examples:**

**Track 1 (Addition Test = YES):**
- Tutorial with steps → Task Progression component exists
- FAQ with questions → Q&A component exists
- Reference table → Table component exists
- Getting started → Callout + Code Block components exist

**Track 2 (Addition Test = NO):**
- Content needs warmth, system is austere → No component produces "warm feeling"
- Content needs playfulness, system is formal → No component produces "playful"
- Content needs mystery/discovery, system is direct → No component delays revelation
- Content needs graduated trust, system is decisive → No component encodes "maybe"

### Three Formal Criteria for Genuine Tension (Track 2)

From tension-composition skill lines 244-252:

1. **Semantic opposition:** Side A's emotional need semantically OPPOSES Side B's personality
   - "Warmth" opposes "austerity" ✓
   - "Clarity" vs "clarity" ✗ (no opposition)

2. **Vocabulary gap:** Side B has NO direct tool for Side A's need
   - No component instantiates the needed feeling ✓
   - Direct component exists ✗ (use Track 1)

3. **Structural overlap despite opposition:** Shared structural properties make bridge POSSIBLE
   - Both use layering, ordering, containment ✓
   - Zero shared properties ✗ (impossible tension)

**ALL THREE must hold** → Track 2
**ANY ONE fails** → Track 1 or redesign content

---

## Q6: Gates Between Phases (Where Must Agent STOP)

### Gate 1: Phase 0D Library Prohibition (Procedural)

**Location:** tension-composition skill lines 68-89
**Type:** Binary prohibition (enforcement through language)
**Enforcement:** "Violation of this rule invalidates the entire derivation"

**MUST NOT read during Phases 0-3:**
- ❌ `/active/design-system/case-studies/` (pattern library)
- ❌ `/active/design-system/library/` (if exists)
- ❌ Prior explorations (DD-001 through AD-006)
- ❌ Tension-test layouts (boris/, gastown/, playbook/)

**Gate questions:**
- Have I read ANY case studies? (Must be NO)
- Have I read ANY prior explorations? (Must be NO)
- Have I read ANY tension-test layouts? (Must be NO)

**Bypass consequence:** Pattern-matching instead of tension-deriving (invalidates derivation)

**Protection level:** 95% (when agents comply), 0% (if ignored)

---

### Gate 2: Phase 3.5 Metaphor Lock-In (Structural)

**Location:** Between Phase 3 (Metaphor Collapse) and Phase 4 (Mechanism Catalog)
**Type:** 3-question verification gate (mandatory checkpoint)
**Enforcement:** STRUCTURAL — cannot proceed without written commitment

**MUST answer before proceeding:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│ GATE 2: METAPHOR LOCK-IN — 3 Mandatory Questions                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ Q1: Did I derive independently?                                        │
│     Check: Did I run Phases 1-3 WITHOUT reading case-studies/?         │
│     ✓ YES → Continue to Q2                                              │
│     ✗ NO → RESTART Phase 1 (violated library prohibition)              │
│                                                                         │
│ Q2: Can I justify without library?                                     │
│     Check: Can I explain WHY this metaphor for THIS content?           │
│     ✓ YES → Continue to Q3                                              │
│     ✗ NO → Regenerate metaphor with explicit constraint                │
│                                                                         │
│ Q3: Does this appear in case-studies/_INDEX.md?                        │
│     Check: Read _INDEX.md titles. Is my metaphor listed?               │
│     ✓ NO → PASS gate, proceed to Phase 4                               │
│     ✓ YES → DIVERGENCE JUSTIFICATION REQUIRED:                          │
│         Must complete 5-dimension divergence table:                     │
│         1. Metaphor domain (geological vs botanical vs etc.)            │
│         2. Structural isomorphisms (bedrock→found vs seed→growth)       │
│         3. Section architecture (6 strata vs 4 stages)                  │
│         4. Vocabulary (geological terms vs plant terms)                 │
│         5. Mechanisms used (border-weight vs spacing-compression)       │
│                                                                         │
│         Passing criteria:                                               │
│         - DIFFERENT on 3+ dimensions → Independent convergence          │
│         - SAME on 3+ dimensions → Regenerate with constraint            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Written commitment format:**
```markdown
## METAPHOR LOCK-IN COMMITMENT

**Metaphor:** [name]
**Justification:** [why this for this content]

**Gate Certification:**
- Q1 (Independent derivation): YES — ran Phases 1-3 without library
- Q2 (Justifiable): YES — [justification text]
- Q3 (Divergence): NO (not in library) OR YES (divergence table below)

[If Q3=YES, insert 5-dimension divergence table here]

**LOCKED:** I will NOT change this metaphor based on library consultation.
```

**After this gate:** Agent CANNOT change metaphor based on case study reading

**Protection level:** 90% (structural gate, not just warning)

---

### Gate 3: Phase 5 Divergence Verification (Optional but Recommended)

**Location:** After reading case studies (Phase 5), before finalization
**Type:** 5-dimension comparison table (verification checkpoint)
**Enforcement:** STRUCTURAL — table must be completed if case studies read

**MUST complete if reading case studies:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│ GATE 3: DIVERGENCE VERIFICATION — 5-Dimension Table                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ Dimension            │ Library Pattern   │ My Metaphor      │ Verdict  │
│ ────────────────────────────────────────────────────────────────────── │
│ 1. Metaphor domain   │ geological        │ botanical        │ DIFF     │
│ 2. Structural isomorph│ bedrock→found    │ seed→growth      │ DIFF     │
│ 3. Section architecture│ 6 strata        │ 4 life stages    │ DIFF     │
│ 4. Vocabulary        │ geological terms  │ plant terms      │ DIFF     │
│ 5. Mechanisms used   │ border-weight     │ spacing-compress │ DIFF     │
│                                                                         │
│ PASSING CRITERIA: DIFFERENT on 3+ dimensions = strong divergence        │
│ FAILING CRITERIA: SAME on 3+ dimensions = pattern-matching             │
│                                                                         │
│ If FAILING: Must justify independent convergence OR regenerate metaphor│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Protection level:** 90% (structural comparison, objective criteria)

---

### Summary: Three Gates Overview

| Gate | Phase | Type | Questions | Bypass Consequence | Protection |
|------|-------|------|-----------|-------------------|------------|
| **Gate 1** | 0D | Prohibition | 0 (binary rule) | Pattern-matching | 95%/0% |
| **Gate 2** | 3.5 | Lock-in | 3 (verification) | No metaphor commitment | 90% |
| **Gate 3** | 5 | Divergence | 5 (comparison) | Library pattern-matching | 90% |

**Anti-gravity mechanism:** Gates are STRUCTURAL (not just warnings). Physical checkpoints prevent accidental bypass.

---

## Q7: Post-Build Verification Sequence

### Verification Workflow (Both Tracks)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ POST-BUILD VERIFICATION — Standard Sequence                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ STEP 1: Soul Check (Programmatic — 5 min)                              │
│   Read CSS source code:                                                │
│   □ border-radius: 0 everywhere? (Check ALL selectors)                 │
│   □ box-shadow: none everywhere? (Check ALL selectors)                 │
│   □ filter: drop-shadow() NEVER used? (Grep for 'drop-shadow')         │
│   □ Colors from tokens.css? (All values var(--color-*))                │
│   □ Typography from tokens.css? (All fonts var(--font-*))              │
│                                                                         │
│   FAIL any check → FIX before proceeding                               │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ STEP 2: Perceptual Audit (Visual — 30-45 min)                          │
│   Invoke ~/.claude/skills/perceptual-auditing/SKILL.md                 │
│                                                                         │
│   2A: Screenshot Capture                                               │
│     - Take screenshot at 1440px viewport                                │
│     - Take screenshot at 768px viewport                                 │
│     - Disable scroll animations (animation: none !important)            │
│                                                                         │
│   2B: Tier 1 Mandatory Five (Perceptual)                               │
│     □ PA-01: First thing that bothers you?                              │
│     □ PA-02: Text uncomfortable to read? Point to worst spot.           │
│     □ PA-03: One designer or three?                                     │
│     □ PA-04: Eye goes first — should it?                                │
│     □ PA-05: Put your name on it? What to fix first?                    │
│                                                                         │
│   2C: Tier 2 Standard Fifteen (Readability + Spatial)                  │
│     □ PA-06: Words stacking vertically (one per line)?                  │
│     □ PA-07: Longest paragraph — lose your place?                       │
│     □ PA-08: Lean in or squint to read?                                 │
│     □ PA-09: Dead space serving no purpose?                             │
│     □ PA-10: Squint test — layout balanced?                             │
│     □ PA-11: Margins generous (confident) or anxious?                   │
│     □ PA-29: Header area — >3 text styles fighting?                     │
│     □ PA-30: Full width participates in composition?                    │
│     [+ 7 more from Tier 2]                                              │
│                                                                         │
│   2D: Document Findings                                                │
│     - Note all perceptual issues                                        │
│     - Prioritize by severity                                            │
│     - Propose fixes                                                     │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ STEP 3: Guardrail Check (Programmatic — 10 min)                        │
│   Measure computed styles at 1440px:                                   │
│   □ Main container width >= 940px? (65% of 1440px viewport)            │
│   □ Label-to-heading spacing >= 16px? (All instances)                  │
│   □ Container padding >= 32px? (All page-level containers)             │
│   □ Compression ratio <= 40%? (Dense sections)                          │
│                                                                         │
│   Measure computed styles at 768px:                                    │
│   □ Grids collapse to 1-2 columns? (No horizontal overflow)            │
│   □ Spacing compressed correctly? (64px → 32px, 48px → 24px)           │
│   □ Typography scaled down? (40px → 32px, 32px → 24px)                 │
│                                                                         │
│   FAIL any check → FIX before proceeding                               │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ STEP 4: Divergence Verification (Track 2 ONLY — if case studies read)  │
│   If Phase 5 case studies were consulted:                              │
│   □ 5-dimension divergence table complete?                             │
│   □ DIFFERENT on 3+ dimensions?                                        │
│                                                                         │
│   If SAME on 3+ dimensions → REJECT (pattern-matching)                 │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ STEP 5: Iteration Loop                                                 │
│   For each finding from Steps 2-4:                                     │
│   1. Fix the issue                                                     │
│   2. Re-run relevant verification (soul/perceptual/guardrail)           │
│   3. Document the change                                                │
│   4. Repeat until ALL checks pass                                      │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ STEP 6: Final Certification                                            │
│   Document verification results:                                       │
│   □ Soul compliance: PASS (0 violations)                                │
│   □ Perceptual audit: PASS (48 PA questions)                            │
│   □ Guardrails: PASS (4 quantitative checks)                            │
│   □ Divergence: PASS (Track 2 only, if applicable)                     │
│   □ Iterations: [number] (document what changed)                        │
│                                                                         │
│   ALL PASS → BUILD COMPLETE                                            │
│   ANY FAIL → Return to iteration loop                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Verification Output Format

```markdown
## BUILD VERIFICATION REPORT

**Build:** [page name]
**Track:** [1 or 2]
**Date:** [YYYY-MM-DD]

### Soul Compliance
- border-radius: 0 everywhere: ✓ PASS
- box-shadow: none everywhere: ✓ PASS
- No drop-shadow filter: ✓ PASS
- Colors from tokens: ✓ PASS
- Typography from tokens: ✓ PASS

**Soul Violations:** 0

### Perceptual Audit (48 PA Questions)
**Tier 1 (Mandatory Five):**
- PA-01: [finding]
- PA-02: [finding]
- PA-03: [finding]
- PA-04: [finding]
- PA-05: [finding]

**Tier 2 (Standard Fifteen):**
- [findings for PA-06 through PA-30]

**Overall:** PASS with [number] minor issues

### Guardrail Check
**1440px:**
- Container width: 1020px (✓ >= 940px)
- Label-to-heading: 16-24px range (✓ >= 16px)
- Container padding: 48px (✓ >= 32px)
- Compression ratio: 35% (✓ <= 40%)

**768px:**
- Grid collapse: ✓ 1-2 columns
- Spacing compression: ✓ 64px → 32px
- Typography scale: ✓ 40px → 32px

**Overall:** PASS

### Divergence Verification (Track 2 Only)
[5-dimension table if applicable]

**Overall:** PASS (DIFFERENT on 4/5 dimensions)

### Iterations
1. Iteration 1: Fixed PA-02 text cramping (increased container width 880px → 1020px)
2. Iteration 2: Fixed PA-11 anxious margins (increased padding 32px → 48px)
3. Final: All checks PASS

### Certification
✓ Soul compliance: PASS (0 violations)
✓ Perceptual audit: PASS (48 PA questions, 2 minor issues addressed)
✓ Guardrails: PASS (4 quantitative checks)
✓ Divergence: PASS (Track 2, DIFFERENT on 4/5 dimensions)

**BUILD STATUS:** COMPLETE
```

---

## Key Findings Summary

### 1. Two Distinct Tracks, Not One Pipeline

**Track 1:** Simple component assembly (45-90 min)
- Load prohibitions + tokens + components → assemble → verify
- NO metaphor derivation required
- NO skill invocation required

**Track 2:** Creative tension composition (3-5 hours)
- Load prohibitions + tokens → run tension-composition skill Phases 0-3 BLIND → lock metaphor → load mechanisms → compose → verify
- REQUIRES independent metaphor derivation
- REQUIRES skill invocation

### 2. Three Structural Gates (Track 2 Only)

**Gate 1:** Phase 0D library prohibition (95% protection)
**Gate 2:** Phase 3.5 metaphor lock-in (90% protection)
**Gate 3:** Phase 5 divergence verification (90% protection)

These are STRUCTURAL (physical checkpoints), not just warnings.

### 3. Phase-Gated File Access Is Anti-Gravity

**PROHIBITED until Phase 4:**
- case-studies/ directory (pattern library)
- Prior explorations (DD-001 through CD-006)
- Tension-test layouts

**WHY:** Library patterns are VALIDATION tools, not GENERATION tools. Reading before metaphor commitment = pattern-matching, not tension-deriving.

### 4. The Skills ARE the Pipeline

For Track 2:
> "The pipeline is not software to be built. It is the tension-composition skill with the right context. Load the skill, the component library, the perceptual guardrails — and any agent BECOMES the Track 2 pipeline."

### 5. Guardrails Are Floors, Not Targets

**Core principle:**
> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

Guardrails (940px container, 16px spacing, etc.) are MINIMUM acceptable quality, not what you aim for.

DO NOT build pages to pass the audit.
DO build pages to serve content, then verify with audit.

---

## Recommendations for CLAUDE.md

### 1. Document Both Tracks Separately

Don't merge Track 1 and Track 2 into single workflow. They are fundamentally different:
- Track 1 = assembly (mechanical)
- Track 2 = composition (creative)

### 2. Emphasize Gate Mechanics

Gates are THE anti-gravity mechanism. Document:
- What each gate checks
- Why bypass is dangerous
- How to verify gate passage

### 3. Clarify Skill Invocation

Make explicit:
- WHEN to invoke tension-composition skill (Track 2 only, Phase 0D)
- WHEN to invoke perceptual-auditing skill (both tracks, post-build)
- HOW skills integrate with compositional-core files

### 4. Provide Track Classification Decision Tree

Help agents decide Track 1 vs Track 2 with:
- Addition Test (cosmetic vs genuine tension)
- Content type classification (prose vs visual)
- Tension validity check (3 formal criteria)

### 5. Document File Access Phase Rules

Create clear table showing what files are accessible at what phase:
- Phase 0: identity/ + vocabulary/ only
- Phase 1-3: SAME (no new files)
- Phase 4: + grammar/ + components/
- Phase 5: + case-studies/ (optional)

### 6. Include Verification Checklist

Provide concrete post-build verification sequence:
- Soul check (5 items)
- Perceptual audit (48 questions)
- Guardrails (4 quantitative)
- Divergence (5 dimensions, Track 2 only)

---

## End of Research

**Files read:** 7 (compositional-core README, guidelines README, tension-composition skill excerpt, perceptual-auditing skill excerpt, mechanism catalog excerpt, semantic rules excerpt, extraction validation protocol excerpt)

**Key sources:**
- compositional-core/README.md lines 1-924 (phase-gated protocol, 7-step workflow)
- tension-composition SKILL.md lines 1-549 (skill phases, gates, search heuristics)
- perceptual-auditing SKILL.md lines 1-100 (PA questions, guardrails, audit trap warning)
- pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md lines 1-100 (Phase D validation)

**Total context:** ~1,500 lines of source material analyzed

**Mission status:** COMPLETE
