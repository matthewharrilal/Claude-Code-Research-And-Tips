# TC-PA Cross-Skill Integration Architecture

**Author:** skill-integration-architect (Opus 4.6)
**Date:** 2026-02-17
**Task:** #22 — Design the integration architecture that makes tension-composition and perceptual-auditing a unified system.

**Sources Read (every line):**
- `~/.claude/skills/tension-composition/SKILL.md` — all 1,932 lines (read in 4 chunks)
- `~/.claude/skills/perceptual-auditing/SKILL.md` — all 847 lines
- `ephemeral/prompt-enrichment-audit/00-PROMPT-STRUCTURE-OUTLINE.md` — full structural outline
- `ephemeral/flagship-preparation/13-compositional-fluency.md` — all 671 lines, 5 interaction types

---

## 1. INTEGRATION MAP — Every TC-to-PA and PA-to-TC Connection

### 1A. TC Output → PA Input (Forward Flow)

| TC Pipeline Phase | TC Output | PA Evaluation Point | PA Question(s) | Connection Type |
|---|---|---|---|---|
| **Phase 0D** (Tier Classification) | Tier assignment (Floor/Middle/Ceiling/Flagship) | Mode selection | Determines Mode 1-4 | GATE: Tier determines PA scope |
| **Phase 0D** (Tier Classification) | Mechanism count landing zone (5/8-12/12-15/16-18) | PA-05a (DESIGNED) | Vocabulary breadth → designed threshold | THRESHOLD: Middle 8-12 = designed; Ceiling 12-15 = composed |
| **Phase 1** (Multi-Axis Questioning) | Axis yield table (FEEL/UNDERSTAND/DO/BECOME + extended) | PA-20 (Personality) | "Describe personality in 3 words — match intent?" | ALIGNMENT: Reader needs define what "matching intent" means |
| **Phase 2** (Tension Derivation) | Genuine tension identification + richness score | PA-44 (Implicit metaphor) | "Could you sense the metaphor from structure alone?" | VALIDATION: Genuine tension → structural metaphor; cosmetic tension → labeled metaphor |
| **Phase 3** (Metaphor Collapse) | Committed metaphor + isomorphism table | PA-42, PA-43, PA-44 (Metaphor questions) | Metaphor-awareness evaluation | SUBJECT: The metaphor IS what PA-42/43/44 evaluate |
| **Phase 3.5E** (Perceptual Risk) | Risk score 0-4 | PA-09 (Dead space), PA-35 (Engagement decay), PA-41 (Monotony) | High risk → PA catches predicted failure | PREDICTION: TC risk flags what PA will find |
| **Phase 3.5F** (Perceptual Cost) | Cost score 0-5 + builder warnings | PA-50-53 (Void prevention) | Guardrail violations → void detection | PREDICTION: TC cost flags what PA-50-53 measure |
| **Phase 3.5G** (Metaphor Scoring Rubric) | 6-criterion score /18 | PA-44 (Structural survival) | Criterion 3 directly maps to PA-44 | DUPLICATE: Same question asked at design-time (TC) and audit-time (PA) |
| **Phase 4.0** (Perceptual Guardrails) | Container 940-960px, CPL 45-80, line-height 1.5 | PA-02 (Text comfort), PA-07 (Line tracking), PA-53 (Width utilization) | Guardrail compliance → PA readability questions | ENFORCEMENT: TC sets floors, PA verifies floors held |
| **Phase 4.1** (5-Category Extraction) | Mechanism deployment plan across S/H/C/D/N | PA-05a (DESIGNED), PA-03 (One designer?) | Category breadth → design coherence | BREADTH: Per-category deployment → coherent system perception |
| **Phase 4.2C** (Rhythm Variation) | 3+ transition types (SMOOTH/BRIDGE/BREATHING) | PA-17 (Visual rhythm), PA-40 (Spacing consistency), PA-41 (Repetition monotony) | Transition variety → rhythm quality | RHYTHM: TC mandates variety, PA verifies it reads as musical |
| **Phase 4.3** (Coherence Checking) | 5 coherence rules (density direction, transition strength, typography role, border category, accent color) | PA-03 (One designer?), PA-16 (Identical elements), PA-18 (Gray families) | Coherence across CSS channels → visual unity | COHERENCE: TC checks channel-by-channel, PA checks holistic impression |
| **Phase 4.6** (Transition Grammar) | Typed transitions between scan patterns | PA-12 (Eye flow), PA-34 (Designed transition moments) | Transition quality → flow quality | FLOW: TC specifies grammar, PA evaluates reading experience |
| **Phase 4.7** (Fractal Consistency) | Scale coverage table (2-5 scales per tier) | PA-10 (Squint test), PA-32 (Visual weight distribution) | Multi-scale pattern → macro composition balance | FRACTAL: TC builds same pattern at multiple scales, PA sees balanced weight |
| **Phase 4.7B** (Landmark Completeness) | Header + main + footer verification | PA-13 (Visual ending), PA-39 (Header proportion) | Structural completeness → narrative closure | BOOKEND: TC ensures landmarks exist, PA evaluates their quality |
| **Phase 4.9** (Token Compliance) | Token compliance ratio >= 80% | PA-18 (Gray family), PA-19 (Different website?) | Token discipline → color/spacing consistency | CONSISTENCY: Tokens prevent drift that PA catches as "different website" |
| **Phase 4.2B** (Pacing Prediction) | Dramatic moment at 60-80% scroll | PA-36 (Dramatic visual moment), PA-47 (Visual novelty decay) | Planned climax → perceived climax | CLIMAX: TC places it, PA validates reader felt it |

### 1B. PA Findings → TC Iteration (Feedback Flow)

| PA Finding | TC Phase Invoked | TC Action | Feedback Type |
|---|---|---|---|
| PA-01 (First thing that bothers) = spatial void | Phase 4.2B (Pacing Prediction) | Re-evaluate dramatic moment placement, add designed moments in void zones | STRUCTURAL FIX |
| PA-02 (Text uncomfortable) = CPL violation | Phase 4.0 (Guardrails) | Adjust container padding or font-size per CPL formula | GUARDRAIL FIX |
| PA-03 (Three designers) = dialect shift | Phase 4.3 (Coherence Check) | Re-run 5 coherence rules, find the channel that breaks | COHERENCE FIX |
| PA-05a (DESIGNED) = FAIL | Phase 4.1 (Mechanism Extraction) | Add mechanisms from underserved categories to reach per-category minimum | VOCABULARY FIX |
| PA-05b (COHERENT) = FAIL | Phase 4.3 (Coherence Check) | Identify dialect shift zone, align all channels to metaphor direction | COHERENCE FIX |
| PA-05c (PROPORTIONATE) = FAIL | Phase 4.0 (Container guardrails) + Phase 4.2B (Pacing) | Horizontal: adjust container width. Vertical: redistribute content. Breathing: redesign negative space. | PROPORTION FIX |
| PA-09 CATASTROPHIC (6+ viewport void) | Phase 4.2B + Phase 4.7 | STRUCTURAL REBUILD. Content must be redistributed. Re-run section-aware composition. | REBUILD |
| PA-09 WOULD-NOT-SHIP (3-5 viewport void) | Phase 4.2B (Pacing) | Add designed moments in void zone. Convert empty space to changing-state transitions. | FILL FIX |
| PA-12 (Eye flow breaks) | Phase 4.6 (Transition Grammar) | Re-apply transition grammar at breaking points. Wrong transition type for axis distance? | TRANSITION FIX |
| PA-13 (No visual ending) | Phase 4.7B (Landmark Gate) | Add footer. Mirror header treatment or provide equivalent visual weight. | LANDMARK FIX |
| PA-17 (No rhythm) = FAIL | Phase 4.2C (Rhythm Variation) | Count transition types. If < 3, add BRIDGE or BREATHING transitions. | RHYTHM FIX |
| PA-30 (Not designed for this width) | Phase 4.0 (Container width) | Container at 940-960px? Internal padding creating narrow effect? Re-evaluate. | WIDTH FIX |
| PA-36 (No dramatic moment) | Phase 4.2B (Pacing) | Place dramatic moment (background zone shift, density peak) at 60-80% scroll | CLIMAX FIX |
| PA-41 (Repetition monotony) = FAIL | Phase 4.2C (Rhythm Variation) + W-MONOTONY | Group repeated elements, alternate presentations, introduce visual breaks | MONOTONY FIX |
| PA-44 (Metaphor only from labels) | Phase 3.5G criterion 3 (Structural Survival) | Metaphor scored too low on structural survival. Re-express through CSS channels, remove labels. | METAPHOR FIX |
| PA-50-53 (Void prevention findings) | Phase 4.0 (Guardrails) + Phase 4.2B (Pacing) | Apply void guardrail thresholds. Max 1.5 viewport blank, min 60% content, designed moment per third. | VOID FIX |
| Composition self-check (CC-01 to CC-07) FAIL | Phase 4.1 (Mechanism Extraction) | Move from vocabulary deployment to compositional clusters. Add reinforcing pairs. | COMPOSITION FIX |

### 1C. Signal-to-Silence Ratio ↔ Void Detection Pipeline

This is the DEEPEST integration point — TC and PA measure the SAME quality from opposite directions.

| TC Concept | PA Concept | Shared Measurement |
|---|---|---|
| Signal-to-silence ratio (content density vs breathing) | Content-to-void ratio (PA-51: 60%+ content) | Same metric, different names |
| Breathing zone max 48px (W-DEADZONE) | Max 1.5 consecutive blank viewports (PA-50) | Same prohibition, different units |
| Dramatic moment placement at 60-80% scroll | PA-52: designed moment per third of page | Same requirement, PA is stricter (per-third vs single placement) |
| Transition as CHANGING STATE not EMPTY SPACE | PA-34: designed transition vs accidental gap | Same principle evaluated differently |
| Content-to-viewport ratio 65-80% | PA-53: 65-80% width utilization | IDENTICAL measurement |

**Integration Architecture Principle:** These are NOT separate concerns with overlapping coverage. They are the SAME concern expressed at two points in the pipeline — design-time (TC) and audit-time (PA). The prompt must present them as one system with two checkpoints, not as two systems that happen to agree.

---

## 2. SHARED VOCABULARY TABLE — Term Alignment Between Skills

| TC Term | PA Term | Same Concept? | Recommended Unified Term |
|---|---|---|---|
| Tension | Contrast (PA-42: concept vs comfort trade-off) | OVERLAPPING — TC tension is content-vs-system; PA contrast is visual-vs-expectation | Keep both. TC tension = design-time concept. PA contrast = audit-time perception. |
| Restraint | Silence zones / negative space (PA-33) | PARTIALLY — TC restraint is mechanism rejection (1.5:1 ratio); PA silence is spatial emptiness | **Designed restraint** for both — encompasses mechanism rejection AND purposeful silence |
| Compositional coupling (CCS score) | PA-05a DESIGNED sub-criterion | EQUIVALENT — CCS measures coupling; PA-05a detects it perceptually | TC: compositional coupling. PA: designed composition. Same thing, different detectors. |
| Metaphor (TC Phase 3) | Ideology / organizing concept (PA-42/43/44) | IDENTICAL — PA calls TC's metaphor an "organizing concept" | **Metaphor** everywhere. PA's "ideology" is TC's "metaphor." Eliminate "ideology" from PA context in prompt. |
| Coherence (TC Rule C-1 through C-5) | One designer (PA-03) / Same family (PA-18) | SAME — TC checks channel-by-channel; PA checks holistic impression | **Multi-channel coherence** — bridges both |
| Fractal consistency (TC Phase 4.7) | Visual weight distribution (PA-32) / Squint test (PA-10) | RELATED — fractal consistency at design-time should produce balanced weight at audit-time | TC: fractal coherence. PA: macro composition. Related but distinct (one is structural, other is perceptual). |
| Density pattern (CRESCENDO/F-PATTERN/BENTO/PULSE) | Engagement trajectory (PA-35: interest peak/valley/fade) | CAUSAL — density pattern determines engagement trajectory | TC: density architecture. PA: scroll momentum. Pattern causes momentum. |
| Designed moment (TC pacing prediction) | PA-36: dramatic visual moment / PA-52: designed moment per third | IDENTICAL — same concept, same term | **Designed moment** everywhere — already aligned |
| Breathing zone (TC: max 48px) | Dead space (PA-09) / Void (PA-50-53) | RELATED — breathing zone is designed silence; dead space is accidental void | TC: breathing zone (positive). PA: dead space (negative). Distinction is intentionality. |
| Builder warnings (W-DEADZONE etc.) | Void guardrail specs (PA-50-53) | COMPLEMENTARY — warnings are preventive (before build); guardrails are detective (after build) | **Pre-build warnings** (TC) and **post-build verification** (PA). One system, two checkpoints. |
| Soul Test (TC Phase 2: 5 questions) | PA-25 (identify design system without header) / PA-19 (element from different website) | OVERLAPPING — Soul Test is at design-time; PA questions catch soul drift at audit-time | **Soul compliance** — TC verifies at design; PA verifies at perception |
| Content-to-viewport ratio 65-80% (TC Phase 4.0) | PA-53 (width utilization 65-80%) | IDENTICAL measurement, identical threshold | **Width utilization 65-80%** — eliminate redundant specification |
| Per-category mechanism minimum (TC Phase 4.0) | PA-05a (DESIGNED vs assembled) | CAUSAL — per-category deployment causes "designed" perception | TC specifies HOW to achieve designed. PA verifies IF it was achieved. |
| Transition grammar (SMOOTH/BRIDGE/BREATHING) | PA-34 (designed transition vs accidental gap) | CAUSAL — grammar produces designed transitions | TC specifies transition types. PA evaluates transition quality. |

**Critical Terminology Collision:** TC uses "perceptual risk" and "perceptual cost" in Phase 3.5E/F. PA uses "perception track" for severity. These are DIFFERENT concepts using the same word. TC's perceptual risk = metaphor-level failure prediction. PA's perception track = finding severity classification. The prompt should clarify: "TC perceptual risk predicts; PA perception track classifies."

---

## 3. AGENT PAIR MATRIX — Which Agents Need Which Skills and When

Based on the 22-agent flagship team topology from the prompt structure outline.

| Agent Role | TC Skill Needed? | PA Skill Needed? | When TC | When PA | Integration Obligation |
|---|---|---|---|---|---|
| **Team Lead (Opus)** | Reference only | Reference only | Gate checks | Mode selection, verdict review | Knows both systems to route correctly |
| **Metaphor Agent (Opus)** | FULL (Phases 1-3.5) | Awareness only | During metaphor derivation | Reads PA-42/43/44 to understand what auditors will evaluate | Must design metaphor that SURVIVES PA-44 (structural, not labeled) |
| **Content Architect (Opus)** | Phases 0-1 | None | Content assessment, axis questioning | N/A | Maps content features to TC phases |
| **Planner (Opus)** | FULL (Phases 4.0-4.7) | Awareness of PA-05 | During mechanism planning, guardrail compliance, pacing prediction | Plans for PA-05 threshold without optimizing for it | Writes compositional clusters (not mechanism lists). Includes PA-relevant warnings. |
| **Skeleton Builder A (Sonnet)** | Phase 4.0 guardrails only | Mode 1 Embedded | During CSS implementation | After building, before declaring done | Self-check: container width, CPL, void scan, PA-01 through PA-05 |
| **Skeleton Builder B (Sonnet)** | Phase 4.0 guardrails only | Mode 1 Embedded | During CSS implementation | After building, before declaring done | Same as Builder A |
| **Embedded Auditor (Sonnet)** | Phase 4.3 coherence rules (READ ONLY) | Mode 2 Quick (PA-01 to PA-05) | Understands TC coherence to evaluate implementation | Real-time PA during build | The PRIMARY integration agent: checks TC intent against PA impression in real-time |
| **Mechanism Builder (Sonnet)** | Phase 4.0-4.6 (guardrails, translation grammar, coherence, transition grammar) | Mode 1 Embedded | During mechanism deployment | Self-check after each major section | Deploys mechanisms per TC plan, self-audits per PA-01-05 |
| **Metaphor Builder (Opus)** | Phase 4.1-4.5 (metaphor properties, translation, coherence, adapt-vs-invent) | Mode 1 Embedded | Builds compositional clusters from metaphor | Self-check for metaphor structural survival (PA-44 equivalent) | Builds for FEELING the metaphor, not LABELING it |
| **Intentionality Builder (Opus)** | TC compositional fluency (reinforcing pairs, CCS, removal test) | Mode 1 Embedded | Pass 3: adds intentionality layer based on TC composition theory | Self-check: "would removing this mechanism change anything?" | Uses TC's removal test AS a PA self-check |
| **Crown Jewel Analyst (Opus)** | Full pipeline understanding (reads skill) | Full PA understanding (reads skill) | Evaluates CD-006/DD-006 to understand TC in practice | Evaluates exemplars to understand PA in practice | Reference agent: translates exemplar quality into actionable guidance |
| **9x PA Auditors (Sonnet)** | NONE (zero TC context) | FULL (assigned PA questions per Mode 4) | N/A — auditors must be context-starved | During audit pass | ZERO TC knowledge is NON-NEGOTIABLE. Fresh eyes principle. |
| **Dual PA Leads** | None | Full PA framework | N/A | Orchestrate auditors, synthesize | PA leads do NOT need TC knowledge |
| **Metacognitive Reviewer (Opus)** | Full understanding | Full understanding | Reviews TC decisions retrospectively | Reviews PA findings for systematic patterns | The ONLY agent that holds both complete skills simultaneously during review |

### Critical Integration Rules

1. **PA auditors NEVER receive TC context.** Not the metaphor name, not the mechanism plan, not the tier classification. Zero context = genuine first impressions. This is the fresh-eyes principle and it is NON-NEGOTIABLE.

2. **Builders ALWAYS receive relevant PA guardrails.** Container 940-960px, CPL 45-80, line-height 1.5, section breathing 48px minimum. These TC guardrails ARE PA guardrails — same numbers, same floors.

3. **The embedded auditor is the integration fulcrum.** This agent uniquely reads TC's coherence rules AND applies PA's quick assessment. If the embedded auditor does not exist or is too weak, TC and PA become disconnected — the build proceeds without real-time perceptual feedback.

4. **The planner writes for PA without optimizing for PA.** The planner knows PA-05's sub-criteria (designed, coherent, proportionate, polished) and structures the build plan to make these outcomes LIKELY — but never references PA scores as targets. The plan specifies compositional clusters, not "deploy 12 mechanisms to pass PA-05."

---

## 4. GATE INTEGRATION FLOW — How TC and PA Gates Interact Across 5 Passes

### Single-Pass Pipeline (Middle Tier)

```
TC Phase 0 (Content Assessment + Tier Classification)
    ↓
TC Phase 0D (Route to Middle: skip Phases 1-3, select PATTERN)
    ↓
TC Phase 4.0 (Perceptual Guardrails) ←── PA guardrail values are EMBEDDED here
    ↓
TC Phase 4.1-4.6 (Mechanism extraction, translation, coherence, transitions)
    ↓
TC Phase 4.7 (Fractal Gate) ── 2 scales minimum
    ↓
TC Phase 4.7B (Landmark Gate) ── header + main + footer
    ↓
BUILD (single pass)
    ↓
TC Phase 4.9 (Token Self-Check) ── >= 80% compliance
    ↓
PA Mode 1 EMBEDDED (builder self-check: PA-01 through PA-05)
    ↓
PA Mode 2 QUICK (verifier pass at 1440px + 768px)
    ↓
DONE (Middle tier needs Mode 2 max, not Mode 3/4)
```

### Multi-Pass Pipeline (Ceiling/Flagship Tier)

```
PASS 1: SPATIAL SKELETON
    TC Phase 0-3.5 (Full pipeline: content → tension → metaphor → commitment)
        ↓
    TC Phase 3.5G (Metaphor Quality Rubric) ── >= 12/18, distance >= 2
        ↓
    TC Phase 4.0 (Perceptual Guardrails) ←── PA guardrail values EMBEDDED
        ↓
    TC Phase 4.1-4.3 (Extract properties, translate to CSS, coherence check)
        ↓
    BUILD SKELETON (8-10 mechanisms, vocabulary deployment)
        ↓
    PA Mode 1 EMBEDDED (builder self-check on skeleton)
        ↓
    ┌── PA-05a DESIGNED? ── NO → add mechanisms from missing categories
    └── PA-05a DESIGNED? ── YES → proceed

PASS 2: COMPOSITIONAL ELABORATION
    TC Composition Theory (from 13-compositional-fluency.md):
        - Review skeleton visual weight distribution
        - Identify reinforcing pairs (mechanisms encoding shared semantics)
        - Apply modulating/responding/contrasting interactions
        ↓
    BUILD ELABORATION (4-6 mechanisms responding to skeleton)
        ↓
    TC Composition Self-Check (CC-01 through CC-07):
        - CC-01: 2+ reinforcing pairs documented?
        - CC-03: Remove any mechanism — page feels different?
        - CC-07: Describe composition without listing mechanisms?
        ↓
    PA Mode 1 EMBEDDED (self-check on elaborated version)
        ↓
    ┌── PA-44 (Structural metaphor survival)? ── NO → re-express structurally
    └── PA-44? ── YES → proceed

PASS 3: INTENTIONALITY
    TC Intentionality Layer:
        - Add bookending (header ↔ footer)
        - Add self-reference and cognitive choreography
        - Apply deliberate absence (contrast interaction type)
        ↓
    BUILD INTENTIONALITY (2-4 mechanisms, restraint protocol)
        ↓
    TC Phase 4.7 (Fractal Gate) ── 4+ scales for Ceiling, 5 for Flagship
        ↓
    TC Phase 4.7B (Landmark Gate) ── all landmarks present
        ↓
    TC Phase 4.9 (Token Self-Check)
        ↓
    PA Mode 1 EMBEDDED (self-check on complete build)
        ↓
    ┌── PA void scan: 2+ consecutive blank viewports? ── YES → fill voids
    └── PA void scan: clear? → proceed

PASS 4: EMBEDDED AUDIT (the TC↔PA integration pass)
    Embedded Auditor Agent:
        - Reads TC coherence rules (C-1 through C-5) — REFERENCE ONLY
        - Takes screenshots at 1440px and 768px
        - Applies PA Mode 2 QUICK (PA-01 to PA-05 at both viewports)
        - Checks: container width, CPL, void, rhythm, transitions
        ↓
    FINDING → TC FIX ROUTING:
        - PA-03 finding → TC Phase 4.3 coherence fix
        - PA-05c finding → TC Phase 4.0 proportion fix
        - PA-09 finding → TC Phase 4.2B pacing fix
        - PA-13 finding → TC Phase 4.7B landmark fix
        ↓
    FIX AND REVERIFY (builder applies fix, re-screenshots, embedded re-checks)

PASS 5: STANDALONE PERCEPTUAL AUDIT (pure PA, zero TC)
    Screenshot Pre-Capture (team lead):
        - Cold look + scroll-through at 1440px, 1024px, 768px
        - 80-120 screenshots saved to files
        ↓
    PA Mode 4 STANDALONE:
        - Research Contextualizer writes Lock Sheet (NO TC information)
        - 9 Auditors (A through I) evaluate from screenshots only
        - ZERO TC context provided to ANY auditor
        - Auditors receive ONLY: screenshots + PA questions
        ↓
    Weaver-Synthesizer:
        - Classifies all findings against Lock Sheet
        - Issues verdict: SHIP / SHIP WITH RESERVATIONS / DO NOT SHIP
        ↓
    IF "DO NOT SHIP":
        - Route PA findings back to TC fix mapping (see Section 1B)
        - Specific PA → TC routing determines WHICH TC phase to re-enter
        - Builder re-enters at the SPECIFIC TC phase, not from scratch
```

### Gate Interaction Summary

| Gate | TC Phase | PA Checkpoint | Timing | What Happens If FAIL |
|---|---|---|---|---|
| Tier Classification | 0D | Determines PA mode | Before any building | Wrong tier = wrong PA mode = miscalibrated quality expectation |
| Metaphor Quality | 3.5G | PA-44 predictive | Before any building | Bad metaphor → PA will catch as labeled/announced (PA-44 FAIL) |
| Perceptual Guardrails | 4.0 | PA-02, PA-07, PA-50-53 | Before CSS writing | Floor violations → PA catches as uncomfortable/void |
| Fractal Gate | 4.7 | PA-10, PA-32 | After mechanism placement | Missing scales → PA catches as unbalanced weight |
| Landmark Gate | 4.7B | PA-13, PA-39 | After section placement | Missing footer → PA catches as "page just stops" |
| Embedded Audit | (none — IS the PA integration) | PA Mode 1-2 | After each build pass | Fix routing back to specific TC phase |
| Standalone Audit | (none — pure PA) | PA Mode 4 | After all building complete | Verdict determines ship/fix/rebuild |

---

## 5. ITERATION LOOP DESIGN — How PA Findings Feed Back Into TC Adjustments

### The TC-PA Feedback Taxonomy

Not all PA findings map to TC fixes. Some are pure execution bugs (typo, missing CSS rule). The integration architecture must distinguish:

| PA Finding Type | TC-Routable? | Fix Strategy |
|---|---|---|
| **Guardrail violation** (CPL, width, line-height) | YES → TC Phase 4.0 | Adjust CSS values to meet floor |
| **Compositional failure** (no rhythm, no designed moments) | YES → TC Phase 4.2B/4.2C | Re-evaluate pacing, add transition variety |
| **Metaphor failure** (labeled, not structural) | YES → TC Phase 3.5G | Re-express metaphor through CSS channels, remove labels |
| **Coherence failure** (three designers feeling) | YES → TC Phase 4.3 | Re-run 5 coherence rules, fix breaking channel |
| **Structural failure** (void, missing landmarks) | YES → TC Phase 4.7B/4.2B | Add missing structures |
| **Execution bug** (wrong color, missing element) | NO — pure CSS fix | Fix directly in CSS |
| **Aesthetic preference** (auditor would do it differently) | NO — not TC-routable | Evaluate against Lock Sheet, dismiss if LOCKED |

### Feedback Loop Protocol

```
PA Finding Received
    ↓
Step 1: CLASSIFY — Is this TC-routable or pure execution?
    ↓
Step 2: If TC-routable, identify SPECIFIC TC phase (see Section 1B mapping)
    ↓
Step 3: Re-enter TC phase with PA finding as INPUT:
    - "PA-17 found no rhythm" → TC Phase 4.2C says "need 3+ transition types"
    - Count current transition types
    - If < 3, add missing types at specific section boundaries
    ↓
Step 4: Apply TC-guided fix in CSS
    ↓
Step 5: Re-run PA Mode 1 EMBEDDED on fixed section
    ↓
Step 6: If PA finding persists, ESCALATE (the TC fix didn't work)
    - Try next TC approach (different transition types, different placement)
    - If 2 attempts fail, flag for human review
```

### Pass-Specific Feedback Integration

| Pass | What PA Checks | What TC Provides on FAIL |
|---|---|---|
| After Pass 1 (Skeleton) | PA-05a: Is this DESIGNED? | TC: per-category mechanism coverage. FIX: add from underserved categories. |
| After Pass 2 (Elaboration) | CC-01 to CC-07: Is this COMPOSED? PA-44: Is metaphor structural? | TC: reinforcing pair documentation. FIX: identify mechanism pairs that should co-vary. |
| After Pass 3 (Intentionality) | PA void scan + landmark check | TC: Phase 4.7 fractal gate + Phase 4.7B landmark gate. FIX: add missing scales/landmarks. |
| After Pass 4 (Embedded Audit) | PA-01 to PA-05 at 1440px + 768px | TC: coherence rules + guardrails. FIX: route each finding to specific TC phase. |
| After Pass 5 (Standalone PA) | All 48 PA questions + void tier | TC: full pipeline as reference for fix routing. FIX: most specific TC phase per finding. |

---

## 6. CONVICTION LAYER TEXT — Lines That Frame TC-PA as Unified System

These are ready-to-insert lines for the prompt's conviction layer:

```
TENSION-COMPOSITION AND PERCEPTUAL-AUDITING ARE ONE SYSTEM, NOT TWO SKILLS.

Tension-composition is the DESIGN-TIME half. It answers: "What should this page
feel like, and how do we get there through CSS mechanisms?" Its pipeline produces
metaphors, mechanism plans, compositional clusters, and guardrails.

Perceptual-auditing is the AUDIT-TIME half. It answers: "Does this page actually
feel the way it was designed to feel?" Its questions catch failures that design-time
analysis cannot predict.

They share the SAME measurements:
- Container width 940-960px (TC Phase 4.0 = PA-53)
- Content-to-void ratio >= 60% (TC pacing prediction = PA-51)
- Designed moment per page third (TC dramatic placement = PA-52)
- Transition quality (TC transition grammar = PA-34)
- Metaphor structural survival (TC Phase 3.5G criterion 3 = PA-44)

They occupy DIFFERENT cognitive positions:
- TC thinks FORWARD: "What mechanisms should I deploy?"
- PA thinks BACKWARD: "What did the reader experience?"
- TC is constructive (builds up). PA is destructive (tears down).
- TC is optimistic (this metaphor will work). PA is skeptical (prove it).

The quality ceiling is where TC and PA AGREE: the metaphor planned at design-time
is the composition perceived at audit-time. When the planner's compositional clusters
produce the atmospheric changes that auditors feel without being told — that is
flagship quality.

The quality floor is where TC and PA DISCONNECT: the mechanism plan says "12
mechanisms across 5 categories" but auditors see "components placed next to each
other." That is the vocabulary-without-composition gap. TC checked the boxes; PA
could not feel the intention.
```

---

## 7. EXECUTION SPEC TEXT — Binary Rules for TC-PA Integration

```
TC-PA INTEGRATION RULES (BINARY — no judgment required):

RULE TPI-01: Every builder agent prompt MUST include TC Phase 4.0 guardrail
values (container 940-960px, CPL 45-80, line-height 1.5, section spacing 48px).
These ARE the PA guardrail values. One set of numbers, two checkpoints.

RULE TPI-02: Every builder agent MUST run PA Mode 1 Embedded (PA-01 through PA-05)
BEFORE declaring any build pass complete. No exceptions.

RULE TPI-03: PA auditor prompts MUST contain ZERO TC information. No metaphor
name, no mechanism count, no tier classification, no build plan. The fresh-eyes
principle is non-negotiable.

RULE TPI-04: When PA finds a guardrail violation (CPL, width, void), the fix
routes to the SPECIFIC TC phase that governs that guardrail. PA-02 → TC Phase 4.0
(typography). PA-09 → TC Phase 4.2B (pacing). PA-50-53 → TC Phase 4.0 (void floors).

RULE TPI-05: The embedded auditor agent reads TC coherence rules (C-1 through C-5)
as REFERENCE and applies PA Mode 2 Quick as EVALUATION. Both skills, one agent,
real-time.

RULE TPI-06: Composition self-checks (CC-01 through CC-07) are run by the
intentionality builder AFTER Pass 3, BEFORE the embedded audit pass. They bridge
TC (compositional coupling) and PA (designed impression).

RULE TPI-07: PA Mode 4 Standalone is ALWAYS the final pass. It follows all TC
gates and all builder self-checks. It is the ground truth. If PA Mode 4 says
"DO NOT SHIP," no TC metric overrides this.

RULE TPI-08: The planner's mechanism plan MUST be organized as compositional
clusters (groups of mechanisms encoding shared semantics), not as individual
mechanism deployments. This is TC's output format that enables PA's "DESIGNED"
detection.

RULE TPI-09: When the prompt references container width, it MUST use one value
(940-960px) with one source citation ("TC Phase 4.0 = PA-53"). Eliminate
duplicate specifications.

RULE TPI-10: The Lock Sheet (PA) MUST NOT include TC-derived information
(metaphor name, mechanism plan, tier classification). TC information enters
the audit ONLY through the page's visual output, never through documentation.
```

---

## 8. COORDINATION SPEC TEXT — Communication Obligations Between TC-Using and PA-Using Agents

```
TC-PA COMMUNICATION PROTOCOL:

CHECKPOINT CP-TC-01 (After Metaphor Commitment):
  FROM: Metaphor Agent
  TO: Planner
  CONTENT: Committed metaphor + isomorphism table + perceptual risk score +
           builder warnings (W-DEADZONE, W-OVERLABEL, etc.)
  PURPOSE: Planner needs metaphor context to write compositional clusters
  FORMAT: Written to shared plan file, NOT SendMessage
  MANDATORY: YES

CHECKPOINT CP-TC-02 (After Mechanism Planning):
  FROM: Planner
  TO: Skeleton Builders + Mechanism Builder + Metaphor Builder
  CONTENT: Compositional clusters + per-cluster CSS reference + TC guardrails +
           builder warnings + composition self-check instructions
  PURPOSE: Builders need TC plan AND PA guardrails in one document
  FORMAT: Written to shared plan file
  MANDATORY: YES

CHECKPOINT CP-TC-03 (After Each Build Pass):
  FROM: Builder (whichever built this pass)
  TO: Embedded Auditor
  CONTENT: "Pass N complete. Screenshot ready at [URL]."
  PURPOSE: Triggers embedded audit (TC coherence + PA quick check)
  FORMAT: SendMessage (requires immediate response)
  MANDATORY: YES for Passes 1-3

CHECKPOINT CP-TC-04 (After Embedded Audit):
  FROM: Embedded Auditor
  TO: Builder
  CONTENT: PA findings + TC-phase routing for each finding
  PURPOSE: Builder knows WHAT to fix AND WHICH TC rule governs the fix
  FORMAT: SendMessage with specific fix routing
  MANDATORY: YES — this is the TC↔PA feedback loop in action

CHECKPOINT CP-TC-05 (Before Standalone PA):
  FROM: Team Lead
  TO: PA Lead
  CONTENT: "Page is ready for Mode 4 audit. Screenshots at [paths]."
  CONTAINS: ZERO TC information. No metaphor name, no mechanism plan.
  PURPOSE: Triggers standalone PA with fresh-eyes guarantee
  FORMAT: SendMessage (triggers PA team spawn)
  MANDATORY: YES

INFORMATION FIREWALLS:

  TC → PA Auditors: BLOCKED
  (Auditors must never know the metaphor name, tier, or mechanism plan)

  PA Auditors → TC Builders: BLOCKED (goes through synthesis first)
  (Findings are classified and routed, never sent raw to builders)

  TC Planner → PA Auditors: BLOCKED
  (Planner's compositional clusters are TC artifacts, not PA inputs)

  PA Weaver → Team Lead: ALLOWED
  (Synthesized findings + verdict flow to team lead for routing)

  Team Lead → TC Builder: ALLOWED (with TC-phase routing)
  (Lead translates PA findings into TC-specific fix instructions)
```

---

## 9. FAILURE MODES — What Breaks If TC-PA Integration Is Weak

### Failure Mode 1: AUDIT OPTIMIZATION TRAP
**What happens:** Builders read PA questions before building and optimize CSS to pass audits.
**Why it happens:** TC and PA are presented as separate skills, so builders read both independently.
**What breaks:** Compositions feel mechanical — they pass guardrails but lack atmospheric quality. PA-05a might say DESIGNED but PA-20 (personality) says FLAT.
**Prevention:** TPI-03 (zero TC info to auditors) + PA skill's own warning (top of file) + prompt framing TC-PA as design-time/audit-time halves of one system, not two checklists to satisfy.

### Failure Mode 2: VOCABULARY WITHOUT COMPOSITION
**What happens:** TC's per-category minimums are met, PA's designed threshold is crossed, but compositional coupling is zero.
**Why it happens:** TC specifies mechanism deployment (vocabulary) without requiring mechanism interaction (composition). PA-05a detects "designed" at vocabulary level but cannot distinguish vocabulary-designed from composition-designed.
**What breaks:** Middle-tier quality ceiling. Page has 12 mechanisms, all independent. Removing any one changes nothing. "Professionally stiff."
**Prevention:** TPI-08 (compositional clusters in plan) + CC-01 through CC-07 (composition self-check) + reinforcing pair requirements. The plan format IS the integration point.

### Failure Mode 3: METAPHOR-LABEL DISCONNECT
**What happens:** TC derives a strong metaphor (high richness score) but builders express it through labels, not structure. PA catches this as PA-44 FAIL (metaphor not detectable without labels).
**Why it happens:** TC's metaphor commitment (Phase 3.5) and PA's structural survival test (PA-44) evaluate the SAME quality at different times. If the builder doesn't understand the connection, they label instead of structure.
**What breaks:** Metaphor drops from STRUCTURAL to ANNOUNCED on PA's expression spectrum. Builders write "GEOLOGICAL LAYER 3" instead of using background color gradation.
**Prevention:** TC Phase 3.5G criterion 3 (Structural Survival >= 2) gates the metaphor BEFORE building. W-IMPLICIT and W-OVERLABEL warnings in builder prompts. Embedded auditor checks PA-44 equivalent in real-time.

### Failure Mode 4: VOID EPIDEMIC
**What happens:** TC's pacing prediction flags moderate risk, but the flag is ignored. Builder creates large breathing zones. PA-50 through PA-53 catch catastrophic void (6+ viewport-heights blank).
**Why it happens:** TC's pacing prediction is a RECOMMENDATION (Phase 4.2B), not a GATE. Builder can proceed without addressing the risk. PA then catches it, but by then rebuilding is expensive.
**What breaks:** 70-80% of page is blank cream (ceiling experiment's primary failure). CATASTROPHIC on PA-09 severity scale.
**Prevention:** PROMOTE TC Phase 4.2B from recommendation to GATE. Pacing Risk = HIGH → MUST mitigate before proceeding. Add void guardrail binary checks (max 1.5 viewport blank, min 60% content) as TC Phase 4.0 guardrails, not just PA audit questions.

### Failure Mode 5: PA FEEDBACK LOOP FAILS TO CLOSE
**What happens:** PA finds issues, but findings are not routed to the correct TC phase. Builder makes ad-hoc fixes without TC guidance.
**Why it happens:** No explicit PA-finding-to-TC-phase mapping exists. Team lead doesn't know which TC phase governs which PA finding.
**What breaks:** Fixes are superficial. PA finds "no rhythm" (PA-17), builder adds random spacing instead of consulting TC Phase 4.2C's transition type taxonomy. The fix creates new problems.
**Prevention:** The PA-to-TC routing table (Section 1B) must be in the team lead's prompt. Each PA finding class maps to a specific TC phase. The team lead routes, not improvises.

### Failure Mode 6: EMBEDDED AUDITOR STARVED OF TC CONTEXT
**What happens:** The embedded auditor runs PA Mode 1/2 but does not understand TC's coherence rules. Finds are generic ("something feels off") instead of specific ("density direction reverses between sections 3 and 4").
**Why it happens:** The embedded auditor is the ONLY agent that needs both skills simultaneously. If its prompt only includes PA questions, it audits perceptually but cannot diagnose compositionally.
**What breaks:** PA findings without TC diagnosis = unroutable fixes. The feedback loop (Failure Mode 5) compounds.
**Prevention:** TPI-05 explicitly gives the embedded auditor TC coherence rules C-1 through C-5 as REFERENCE. The auditor checks PA-01 through PA-05 perceptually, then DIAGNOSES findings using TC coherence rules. "PA-03 FAIL because TC Rule C-1 violated: density direction inconsistent between zone A and zone B."

### Failure Mode 7: DUAL SPECIFICATION DRIFT
**What happens:** TC says container width is 940-960px (Phase 4.0). PA says container width is 65-80% of viewport (PA-53). These are the same measurement expressed differently. Over time, one gets updated and the other doesn't.
**Why it happens:** Two separate skill files maintained independently. No shared source of truth for guardrail values.
**What breaks:** Builder reads TC's 940-960px. Auditor reads PA's 65-80%. At 1440px viewport, 65% = 936px (below TC's 940px floor). A page passes PA but fails TC, or vice versa.
**Prevention:** TPI-09 mandates single specification with single source. The prompt should reference one set of guardrail values and cite both skills. Update one → both updated. Recommend: TC Phase 4.0 is the SOURCE, PA PA-50-53 REFERENCE TC Phase 4.0 values.

### Failure Mode 8: FRESH-EYES PRINCIPLE VIOLATION
**What happens:** PA auditors receive TC context (metaphor name, mechanism count, tier) through the plan file or through team lead messaging.
**Why it happens:** Shared file bus. If TC build plan and PA audit happen in same directory, auditors can read plan files.
**What breaks:** Auditors see "12 mechanisms deployed" and find 12 mechanisms. They see "geological metaphor" and describe geological impressions. Confirmation bias eliminates fresh-eyes value.
**Prevention:** TPI-03 and TPI-10 enforce zero TC context. Information firewall in coordination spec. PA auditors receive ONLY screenshots and PA questions. No file access beyond their findings output file.

---

## SUMMARY: THE UNIFIED TC-PA ARCHITECTURE

TC and PA are **one system with two temporal positions:**

```
DESIGN-TIME (TC)                    BUILD-TIME (Integration)         AUDIT-TIME (PA)

Phase 0-3: What should              Passes 1-3: Build it             Mode 4: Did the
this feel like?                                                      reader feel it?

Phase 4: How do we                  Embedded Audit: Real-time        Mode 1-2: Quick
get there in CSS?                   TC↔PA feedback                   self-checks

Guardrails: What are                Builder warnings: Don't          Guardrails: Were
the floors?                         go below floors                  floors held?

Metaphor: The bridge                Compositional clusters:          PA-44: Is the
between content                     Mechanisms encoding              metaphor felt
and system                          shared semantics                 or labeled?

Pacing prediction:                  Void prevention:                 PA-50-53: Did
What could go wrong?                Don't let it go wrong            it go wrong?
```

The integration architecture ensures:
1. **Same values, two checkpoints** (TC sets floors, PA verifies floors)
2. **Design intent flows forward** (metaphor → plan → build → audit)
3. **Audit findings flow backward** (PA finding → TC phase → specific fix)
4. **Information firewalls hold** (PA auditors never see TC context)
5. **The embedded auditor bridges both** (reads TC coherence, applies PA questions)

---

**END TC-PA CROSS-SKILL INTEGRATION ARCHITECTURE**
