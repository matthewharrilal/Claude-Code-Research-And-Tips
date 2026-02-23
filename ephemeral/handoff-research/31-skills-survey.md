# Skills & Capabilities Survey

## Overview

8 skills exist in `~/.claude/skills/`. Three form a tightly integrated page-building pipeline (build-page, tension-composition, perceptual-auditing). Five are standalone utilities (essence, principle-extraction, perceptual-deepening, youtube-research, crypto-sovereignty-analyst). The pipeline skills are supported by 3 infrastructure files in `design-system/pipeline/` (conventions-brief, gate-runner, flagship-pa-questions).

---

## THE PIPELINE: Three Integrated Skills

### 1. /build-page (Orchestrator) -- ~579 lines

**What it does:** The master orchestrator for building designed HTML pages from content. It is the ONLY sanctioned entry point for page building. Takes a markdown content file as input and produces a self-contained HTML page that scores PA-05 >= 3.5 AND Tier 5 >= 7/9 (Flagship quality).

**Input:** `/build-page <path-to-content.md>`

**Output:**
- `output.html` -- self-contained HTML page
- `_tc-brief.md` -- compositional brief from TC analyst
- `_build-log.md` -- builder's transition table, fractal echo table, conviction statement, reflections
- `_cascade-value-table.md` -- computed CSS at every boundary
- `_lock-sheet.md` -- sovereignty classification (LOCKED Soul / LOCKED Research / CHALLENGEABLE)
- `_gate-results.json` -- 17+ gate pass/fail with measured values
- `_screenshots/` -- cold-look + scroll-through at 1440px, 1024px, 768px
- `_pa/` -- 9 auditor reports + synthesized `_pa-report.md` + `_pa-matrix.md`
- `_run-manifest.md` -- run metadata

**Orchestration waves:**
1. **TC Skill Invocation** (1 Opus agent) -- content analysis, tension derivation, metaphor collapse, mechanism selection. Outputs `_tc-brief.md` with 8 sections.
2. **Recipe-Format Validation** -- checks TC brief Section 6 uses recipe verbs (Set/Deploy/Add) not checklist verbs (Verify/Must/Fail if).
3. **Builder Deployment** (1 Opus agent) -- reads TC brief + conventions brief + content. Produces HTML with self-checks at 3 build checkpoints.
4. **Midpoint Micro-Gate** -- runs SC-04, SC-09, SC-15 mid-build to catch the #1 failure mode (imperceptible backgrounds) early.
5. **Gate Runner** -- orchestrator runs 17 composition-critical gates via Playwright. All gates must PASS before PA.
6. **Screenshot Capture** -- orchestrator captures all screenshots before spawning auditors (eliminates Playwright contention).
7. **PA Deployment** -- 9 Opus auditors (parallel) + 1 Opus weaver (after auditors complete). 65 total questions.
8. **Fix Cycles** -- up to 3 cycles. Same builder applies fixes. Decreasing PA auditor count per cycle (9 -> 4 -> 3).

**Success bar:** PA-05 >= 3.5 AND Tier 5 >= 7/9 AND zero soul violations AND zero void patterns AND metaphor STRUCTURAL AND multi-coherence verified AND scale coverage verified.

**Non-negotiables:**
- Container: 940-960px (always)
- Warm palette: R >= G >= B (always)
- Every CSS value perceptible to human eye
- Builder model: Opus (always, never Sonnet)
- Same builder for fixes (no handoffs)
- PA auditors are fresh-eyes (zero build context)

---

### 2. Tension-Composition (Sub-Skill) -- ~1,878 lines

**What it does:** The creative engine. Transforms raw content into a compositional brief by deriving tension between what the content NEEDS and what the design system DEMANDS, then collapsing that tension through metaphor into concrete visual mechanisms.

**Critical principle at top of file:** "You are CONSTRUCTING a composition, not DISCOVERING one." The metaphor is a creative act, not an inevitable conclusion.

**Input:** Markdown content file + mechanism catalog + soul constraints + tokens.

**Output:** `_tc-brief.md` (~80-120 lines) containing 8 sections:
1. Structural Metaphor (name, quality score /18, CSS directions, BECAUSE test, risk profile)
2. Zone Architecture (3-5 zones, names, semantic direction at each boundary, density levels, pacing assignments)
3. Content Tensions (3-5 tensions from multi-axis questioning)
4. Selected Mechanisms (>=14, per-category minimums, reinforcing pairs, rejected mechanisms)
5. Metaphor-Implied CSS Directions (page/section/component/character scale)
6. Build Recipe (zone-keyed deployment with specific CSS values, boundary CSS table, perception checks)
7. Detection Expectations (for weaver diagnostic use only)
8. Builder Anchors (3 non-negotiable page-specific guardrails)

**5-Phase Pipeline:**

```
CONTENT -> ASSESSMENT -> MULTI-AXIS QUESTIONING -> TENSION DERIVATION -> [GATE] -> METAPHOR COLLAPSE -> COMPOSITIONAL LAYOUT -> TC BRIEF
 (input)   (Phase 0)       (Phase 1)               (Phase 2)                        (Phase 3)            (Phase 4)         (Phase 4.5)
```

**Phase 0: Content Assessment**
- Content type classification (prose-dominant / mixed / visual-dominant / self-referential)
- Scope assessment (MICRO < 100 words through MASSIVE > 10,000 words)
- Section identification and classification (NARRATIVE / REFERENCE / CODE / DATA / MIXED)
- Library Access Prohibition: MUST NOT read case studies or prior explorations during Phases 0-3

**Phase 1: Multi-Axis Questioning**
- Core Four (always): FEEL, UNDERSTAND, DO, BECOME
- Extended Five (always, mark LOW YIELD when appropriate): NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE
- Structural Triggers (conditional): COMPARE, IDENTIFY, DISCOVER, SEE, REMEMBER
- Key insight: Axes whose demands OPPOSE the design system's personality produce the richest tension

**Phase 2: Tension Derivation**
- Side A = reader needs, Side B = design system constraints
- Addition Test: Can you fulfill the need with existing components without transformation? YES = cosmetic, NO = genuine
- BECAUSE test: "The reader needs X BECAUSE [specific content property]"
- SUBSTITUTION test: Replace content with different topic. Same metaphor still works? = generic coupling
- Richness Formula: Opposition Depth x Structural Overlap x Metaphor Space Width (MULTIPLICATIVE)
- Tension Threshold Gate: 0 genuine tensions = skip Phases 3-4, use design defaults

**Phase 3: Metaphor Collapse**
- Extract structural properties from both sides
- Find structural overlap (40-70% = ideal zone)
- Generate constrained search query combining overlap and gap properties
- Three heuristics: constraint scan, content resonance, emotional valence
- Domain Search Menu for angular/flat/sharp systems (10 compatible domains)
- Incompatible metaphor families (organic, liquid, atmospheric, textile, musical)
- Composite scoring: Tension Resolution + Structural Isomorphism + Content Resonance (split nominal/structural) + Mechanism Feasibility + Perceptual Risk + Perceptual Cost
- 6-Criterion Metaphor Quality Rubric (18 points, threshold >= 12/18): Interpretive Distance (MUST >= 2), Content-Shape Fit, Structural Survival, Perceptual Risk, Mechanism Diversity, Restraint Compatibility
- 6 Binary Rejection Checks (any YES = immediate rejection)
- Phase 3.5: Metaphor Commitment LOCK-IN GATE (cannot change after consulting library)

**Phase 4: Compositional Layout Generation**
- Anti-Scale Model: Richness = Semantic Density x Restraint x Spatial Confidence (MULTIPLICATIVE, zero in any = zero)
- Perceptual Guardrails: content proportion, typographic spacing, compression limits, container width (940-960px NON-NEGOTIABLE), CPL 45-80, stacked gap <= 120px
- Mechanism library access NOW permitted (grammar/mechanism-catalog.md)
- Per-category mechanism deployment: Spatial 1+, Hierarchy 1+, Component 1+, Depth/Emphasis 1+, Structure/Navigation 1+
- 5-Category property extraction: Spatial, Temporal, Material, Behavioral, Relational
- Translation Grammar lookup tables: Weight, Depth, Density, Flow, Containment, Transition, Hierarchy
- Pacing Prediction Heuristic
- Rhythm Variation Requirement (>= 3 different transition types: SMOOTH, BRIDGE, BREATHING)
- Multi-Coherence Binding Rules (R-MC-01 through R-MC-06)
- Fractal Consistency GATE (5-scale echo table, bottom-up construction, 3-scale minimum for STRONG)
- Phase 4.5: Sub-Skill Output Mode (writes TC brief to output path)

**Fix Cycle Protocol:**
- TYPE A (mechanical): CSS value wrong. Builder fixes directly.
- TYPE B (structural): Layout doesn't match TC brief. Builder re-reads TC brief Sections 2+4.
- TYPE C (compositional): Metaphor doesn't work. Full TC re-invocation with new metaphor.

---

### 3. Perceptual-Auditing (Sub-Skill) -- ~993 lines

**What it does:** The quality verification system. Defines 65 PA questions across 5 tiers + quantitative guardrails + visual auditing protocols. Answers the question: "Is this page GOOD, not just rule-compliant?"

**Critical warnings at top:**
- DO NOT build pages TO PASS this audit (inverts the process)
- FRESH-EYES PRINCIPLE: Auditors MUST be context-starved (zero knowledge of build process)
- "React to what you see before you check what you know"
- The One Rule: If an agent's first action after taking a screenshot is opening a CSS file, the skill has failed

**Input:** Pre-captured screenshots (cold-look + scroll-through at 1440px, 1024px, 768px).

**Output:** Per-auditor report with YES/NO/PARTIALLY answers with visual evidence, severity ratings. Weaver synthesizes into PA-05 score, Tier 5 score, Top-5 issues, verdict.

**65 Questions across 5 Tiers:**

**Tier 1: Mandatory Five (PA-01 through PA-05)** -- every audit, every mode
- PA-01: What's the first thing that bothers you?
- PA-02: Is any text uncomfortable to read?
- PA-03: Does this feel like one designer or three?
- PA-04: Where does your eye go first? Is that where it SHOULD go?
- PA-05: Would you put your name on this? (4 sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, POLISHED)
  - PA-05c expanded: Horizontal, Vertical, and Breathing proportion (all 3 must PASS)

**Tier 2: Standard Fifteen (PA-06 through PA-45)** -- standard + standalone
- Readability (PA-06, 07, 08, 29): word stacking, line tracking, squinting, voice collision
- Spatial balance (PA-09 through PA-11, PA-30 through PA-33): dead space (with severity calibration), squint test, margins, desktop utilization, negative space
- Visual flow (PA-12, 13, PA-34 through PA-36): eye flow, visual ending, transitions, scroll momentum, dramatic moments
- Grid/layout (PA-14, 15, PA-37 through PA-39): column breathing, alignment, container density, reading order, header proportion
- Consistency (PA-16, 17, PA-40, 41): paired elements, visual rhythm, spacing consistency, repetition monotony
  - PA-17 and PA-41 are TIER 1 EQUIVALENT (mandatory, binary enforcement)
- Color/emotion (PA-18, 19, 20): gray families, visual intruders, personality match
- Metaphor (PA-42, 43, 44): metaphor-driven compromise, perceptual cost, implicit vs explicit
- Quality (PA-45): design highlight presence

**Tier 3: Deep Dive (PA-21 through PA-28, PA-46 through PA-48)** -- standalone only
- Responsiveness (PA-21 through PA-23, PA-46, 47): designed vs squeezed, served vs punished, narrow fragility, responsive reorganization, visual novelty decay
- Cross-page (PA-24, 25): sibling match, system identification
- Architectural (PA-26, 27): convention problems, scratch-design comparison
- Adversarial (PA-28, 48): rule-exploitation, comparative quality

**Tier 4: Void Prevention (PA-50 through PA-53)** -- MANDATORY
- PA-50: Consecutive blank viewports (threshold: 2+ consecutive = FAIL)
- PA-51: Content-to-scroll ratio (threshold: >= 60% = PASS)
- PA-52: Visual weight in each page third (every third needs >= 1 designed moment)
- PA-53: Width utilization (65-80% at 1440px)
- S-09 Stacking Check: total boundary gap <= 120px

**Tier 5: Compositional Depth (PA-60 through PA-68)** -- MANDATORY
- PA-60: Design Moment Density (>= 3 distinct, distributed)
- PA-61: Multi-Voice Composition (channel independence, counterpoint vs unison)
- PA-62: Transition Variation (dramatic vs quiet boundaries, dynamic range)
- PA-63: Fractal Zoom Coherence (cross-scale echo, parametric component adaptation)
- PA-64: Restraint as Expression (designed quiet vs forgot to design)
- PA-65: Compositional Voice (single instrument / choir / ensemble)
- PA-66: Negative Space Variety (different gap "flavors")
- PA-67: Novelty Beyond Competence (creative surprise)
- PA-68: Metaphor Spatial Coverage (persists across all scroll thirds)

**Sub-Perceptual Detection (PA-55, PA-56):** visible zone differences without CSS inspection, perceptible tracking differences

**Pipeline Integration (PA-69, PA-70):** multi-coherence dynamic range, content-form coupling

**9 Auditor Assignments:**
| Auditor | Role | Total Qs |
|---------|------|----------|
| A | Impression+Emotion | 10 |
| B | Readability+Typography | 7 |
| C | Spatial+Proportion | 14 |
| D | Flow+Pacing | 7 |
| E | Grid+Layout | 6 |
| F | Consistency+Rhythm | 7 |
| G | Metaphor+Ideology | 5 |
| H | Responsive | 5 |
| I | Adversarial | 4 |

**Quantitative Guardrails:** Hard floors derived from editorial standards, WCAG, and magazine benchmarks. Covers content width (640-960px at 1440px), CPL (45-80), line-height (>= 1.5), heading spacing (>= 1.5x above vs below), section spacing (>= 48px), compression ratio (>= 40%), padding (>= 32px desktop, 16px mobile).

**Perception Threshold Table:** Background >= 15 RGB, font-size >= 2px, letter-spacing >= 0.03em, line-height >= 0.15, padding >= 24px, border >= 1px, font-weight >= 200, stacked gap <= 120px.

**Modes:** 1-3 for standalone use; Mode 4 (full 9-auditor, 65-question) always used in /build-page context.

**Protocols:**
- Cold Look Protocol (5 seconds, gut reaction, LOCKED forever)
- Scroll-Through Protocol (80% viewport-height steps, 5-15 screenshots)
- Zone Sweep (5 dimension passes: Readability, Spatial Balance, Hierarchy/Flow, Consistency, Ship Test)
- Progressive Zoom Test (5 scales: Navigation, Page, Section, Component, Character)

---

## PIPELINE INFRASTRUCTURE: Three Supporting Files

### 4. Conventions Brief (`design-system/pipeline/conventions-brief.md`) -- ~500 lines

**What it does:** The builder's world-model. Describes the design system as a physical world with materials, physics, and quality of light. The builder reads this once fully, then builds. NOT a set of rules -- a description of the world the builder is constructing inside.

**14 sections:**
1. **IDENTITY (Soul):** 6 locked constraints (border-radius:0, box-shadow:none, no drop-shadow, solid bg only, no #000/#FFF, opacity:1). Typography trinity (Instrument Serif, Inter, JetBrains Mono). Container 940-960px. Spacing 4px base. Locked color palette.
2. **PERCEPTION (Physics of Visibility):** Thresholds below which CSS is invisible. Background >= 15 RGB, letter-spacing >= 0.03em, stacked gaps <= 120px, multi-coherence >= 3 channels. With confidence tiers (CONFIRMED / PROVISIONAL / THEORETICAL).
3. **RICHNESS (Governing Principle):** Richness = semantic density x restraint x spatial confidence. MULTIPLICATIVE. Zero in any = zero.
4. **MULTI-COHERENCE (Binding Rule):** 6 CSS channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material). >= 3 shift at every zone boundary in same semantic direction. 4 semantic directions: DEEPENING, OPENING, FOCUSING, RESOLVING. Coherence Arc Planning (Opening 2-3 channels -> Building 3-4 -> Climax 4-5 -> Resolution 2-3).
5. **FRACTAL ECHO (Pattern at Every Scale):** 5 scales (Navigation, Page, Section, Component, Character). Build order: largest first. Parametric echo (components adapt to zone density). Character-Scale Register (closed vocabulary).
6. **UNIFIED METAPHOR (Flagship Requirement):** Structural metaphor driving CSS decisions, perceptible without text labels.
7. **TRANSITION GRAMMAR (Three Kinds):** SMOOTH (quiet modulation, 15-25 RGB), BRIDGE (deliberate pause, 25+ RGB, tinted band), BREATHING (full rest, 3-4px border, 64-80px spacing).
8. **CSS VOCABULARY (The Instrument):** Component 2-Zone DNA, 3-Tier Border Budget (4px/3px/1px), Dark Slab Inversion, Callout Accent System (5 types), Section Meta Self-Documentation, Syntax Highlighting, Layout Topologies (5 grid patterns), Drop Cap.
9. **CREATIVE AUTHORITY:** ~80% of decisions are the builder's. May override any non-soul value with logged reasoning.
9B. **QUALITY FLOOR:** >= 14 mechanisms, >= 800 CSS lines, >= 3 channel shifts per boundary, >= 3 border configs, >= 8 component types, 3-5 zones with >= 15 RGB delta.
10. **COMPOSITIONAL MEMORY:** 4 habits preventing drift during long builds: boundary naming, midpoint reflection, category awareness, fix cycle memory.
11. **FIVE QUESTIONS (Before Submit):** The Squint, The Scroll, The Second Half, The Boundary, The Skeleton.
12. **RESTRAINT LIST:** What this world does NOT contain (gradients, shadows, animations, parallax, icons, nested grids, 2px borders, letter-spacing < 0.025em).
13. **ACCESSIBILITY:** Structural, not cosmetic. HTML skeleton template, ARIA landmarks, focus-visible, prefers-reduced-motion, selection styling.
14. **RESPONSIVE BEHAVIOR:** 3 breakpoints (960px, 768px, 480px). Soul unchanged across viewports.

### 5. Gate Runner (`design-system/pipeline/gate-runner.md`) -- ~1,339 lines

**What it does:** Defines 23 programmatic gates that verify HTML output. Gates catch ~26% of compositional quality; PA catches the other ~74%. Gates raise the FLOOR -- they prevent flat pages from consuming PA auditor time.

**Gate execution:**
- Micro-Gates during build: MG-1 (HTML skeleton), MG-2 (zone backgrounds), MG-3 (borders), MG-4 (typography)
- Full run after build: 5 groups with dependency chain (SC-00 -> SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16/SC-17)
- Structured JSON output per gate with measured values, thresholds, fix recipes with CSS

**Tier A: 12 Composition-Critical Gates:**
- SC-00: Zone Selector Validation (pre-gate, fallback chain)
- SC-01: Container Width (940-960px)
- SC-09: Background Delta (>= 15 RGB at every adjacent zone boundary)
- SC-10: Stacked Gap (<= 120px total at section boundaries)
- SC-11: Typography Zone Hierarchy (display-body >= 10px, 3+ clusters)
- SC-12: Zone Count (3-5)
- SC-13: Multi-Coherence (>= 3/6 channels per boundary, avg >= 4)
- SC-13B: Direction Coherence (>= 50% boundaries have >= 3 channels in same direction)
- SC-14: Sub-Perceptual Prevention (no letter-spacing < 0.025em, no bg delta 1-14 RGB)
- SC-15: Border/Structural Presence (>= 3 distinct configs)
- SC-16: Monotonic Property Progression (ADVISORY)
- SC-17: Parametric Echo (channel deltas match TC brief boundary CSS table)

**Tier A Deliverable Gates:** DG-1 (fractal echo table), DG-2 (cascade value table), DG-3 (landmark completeness), DG-4 (transition table sub-checks)

**Tier B: 7 Identity Enforcement Gates:**
- SC-02: Soul (radius:0, shadow:none, no drop-shadow)
- SC-03: Font Trinity (only Instrument Serif, Inter, JetBrains Mono)
- SC-04: Warm Palette (R >= G >= B)
- SC-05: No Pure B/W (no #000 or #FFF)
- SC-06: ARIA Landmarks (>= 5)
- SC-07: Skip Link
- SC-08: Component Classes (>= 8 types)

**Behavioral Gates:** BG-1 (metaphor independence), BG-2 (metaphor structural)

**Gate-to-PA handoff:** ONE-WAY. All blocking gates must PASS before PA runs. Gate diagnostic data included as PA CONTEXT only.

### 6. Flagship PA Questions (`design-system/pipeline/flagship-pa-questions.md`) -- ~159 lines

**What it does:** Defines the 9 Tier 5 compositional depth questions (PA-60 through PA-68) with scoring rubrics and auditor assignments. These detect compositional depth ABOVE the PA-05 "designed" threshold.

**Scoring:** 8-9/9 = COMPOSED (Flagship target), 6-7 = APPROACHING, 3-5 = STRUCTURED, 0-2 = VOCABULARY ONLY.

---

## STANDALONE SKILLS: Five Utilities

### 7. Essence Framework (`~/.claude/skills/essence/SKILL.md`)

**What it does:** Extracts and internalizes the soul, worldview, and operating philosophy from codebases, documents, research, and content. The goal is NOT a report -- it is internalizing a worldview so completely that subsequent responses operate FROM INSIDE that frame.

**Triggers:** "extract essence", "understand the soul of", "capture the philosophy of", "think like"

**5 Universal Lenses:** First Encounter Impressions -> Metaphor Extraction -> Values Excavation -> Worldview Reconstruction -> Essence Crystallization

**Content-type detection:** Code/Projects (naming/structure/commit/dependency/README archaeology), Documents/Research (citation/terminology/audience/trade-off/enemy analysis), Mixed (both sets, note tensions).

**Domain-emergent lenses:** Security/Privacy, Design/UX, and others.

**Relation to pipeline:** Independent. Could theoretically be used to understand the design system itself ("think like KortAI"), but not part of the build pipeline.

### 8. Principle Extraction (`~/.claude/skills/principle-extraction/SKILL.md`)

**What it does:** A brain training program for building "interdimensional thinking" -- deriving solutions from problem structure rather than pattern matching. Claude prompts, user generates. Claude NEVER fills in answers.

**Triggers:** "/extract", "extract principle", "what's the invariant"

**Two-layer system:**
- Layer 1 (DURING): Organic invariant questions woven into conversation while working
- Layer 2 (AFTER, this skill): Formalizes what emerged, names the principle, stores in library

**6 Steps (Full Path):** ANCHOR -> COMPARE -> PROPERTY -> ABSTRACT -> NAME -> STORE

**Relation to pipeline:** Independent. Training tool for the user, not a design system capability.

### 9. Perceptual Deepening (`~/.claude/skills/perceptual-deepening/SKILL.md`)

**What it does:** Soul extraction through iterative visual discovery. Forces iterative visual comparison (minimum 5 cycles) to extract ineffable qualities that make a design feel like itself.

**Triggers:** "extract soul from [component]", "why does this look wrong?", "make this match the reference", "/soul", "/perceive"

**Process:** Setup -> minimum 5 iteration cycles with sub-agents:
- Sub-Agent A: Visual Comparator (squint test, pointing test, pixel diff)
- Sub-Agent B+ (implied): Additional perceptual tasks

**Relation to pipeline:** Could be used to refine components or understand what makes reference designs work, but not directly part of the build pipeline. A more granular version of perceptual auditing focused on component-level iteration.

### 10. YouTube Research (`~/.claude/skills/youtube-research/SKILL.md`)

**What it does:** Fetches YouTube video transcripts and performs deep research analysis. 4-step process: Extract transcript -> Analyze content -> Find similar content -> Generate recommendations.

**Triggers:** YouTube URL or video ID.

**Relation to pipeline:** Independent. General research utility.

### 11. Crypto Sovereignty Analyst (`~/.claude/skills/crypto-sovereignty-analyst/SKILL.md`)

**What it does:** Extracts institutional trust failures and sovereignty themes from articles, then maps them to crypto/web3 solutions. 5-layer workflow: Source Deconstruction -> Threat-Solution Mapping -> User Journey Translation -> Tech Stack Assessment -> Gap Analysis.

**Triggers:** Analyzing content about financial history, authoritarianism, institutional failures, privacy, censorship.

**Relation to pipeline:** Independent. Domain-specific analysis tool, unrelated to design system.

---

## HOW THE PIPELINE SKILLS CONNECT

```
USER: /build-page content.md
         |
    [ORCHESTRATOR: /build-page skill]
         |
    1. Spawn TC Agent (Opus)
         |
    [TENSION-COMPOSITION skill, Phases 0-4]
         |
    Content Assessment -> Multi-Axis Questioning -> Tension Derivation
         -> Metaphor Collapse -> Mechanism Selection
         |
    Output: _tc-brief.md (80-120 lines, 8 sections)
         |
    2. Validate recipe format
         |
    3. Spawn Builder Agent (Opus)
         |
    Builder reads: TC brief -> Conventions Brief -> Content -> Reference files
         |
    Builder outputs: output.html + _build-log.md + _cascade-value-table.md
         |
    4. Orchestrator runs Gate Runner (23 gates via Playwright)
         |
    All PASS? -> Continue
    Any FAIL? -> Fix cycle (max 3)
         |
    5. Orchestrator captures screenshots (1440px, 1024px, 768px)
         |
    6. Spawn 9 PA Auditors (Opus, parallel)
         |
    [PERCEPTUAL-AUDITING skill, 65 questions]
         |
    Each auditor reads screenshots, answers assigned questions
         |
    7. Spawn Weaver (Opus, after all auditors)
         |
    Weaver synthesizes: PA-05 score + Tier 5 score + Top-5 issues + verdict
         |
    SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE
```

**Key design decisions in the pipeline:**
- TC agent runs BLIND (no library access during Phases 0-3) to prevent pattern-matching
- Builder model is ALWAYS Opus (never Sonnet) -- Opus creates beyond constraints, Sonnet only complies
- PA auditors are ALWAYS fresh-eyes (zero build context) -- perceptual language only, no CSS vocabulary
- Screenshot pre-capture eliminates Playwright contention (9 parallel auditors reading saved images)
- Fix cycles decrease in PA breadth (9 -> 4 -> 3 auditors) but always include focused + Tier 5 questions
- TC re-invocation only when metaphor itself fails (both PA-44 and PA-68 fail across 2+ cycles)

**What the whole system can DO:**
1. Take any markdown content and produce a Flagship-quality designed HTML page
2. Derive content-specific tension and metaphor through a rigorous 5-phase analytical pipeline
3. Verify mechanical quality through 23 programmatic gates
4. Verify perceptual quality through 65 human-judgment questions answered by 9 independent Opus auditors
5. Self-correct through up to 3 fix cycles with structured escalation
6. Produce a complete audit trail (TC brief, build log, gate results, 9 auditor reports, weaver synthesis)

**What it cannot do (known limitations):**
- Has only been successfully executed once (the Gas Town / Steve Yegge page)
- Flagship 4/4 (PA-05 >= 3.5 AND Tier 5 >= 7/9) has never been achieved -- best result was PA-05 2.5/4 after remediation
- The Ceiling experiment hit PA-05 1.5/4 (catastrophic whitespace void)
- The Middle experiment hit PA-05 4/4 but at lower compositional depth
- Pipeline has been extensively analyzed and iterated (50+ agents in pipeline analysis alone) but real-world validation remains thin (N=1 for the current /build-page version)

---

## SKILL MATURITY ASSESSMENT

| Skill | Lines | Maturity | Pipeline Role | Executions |
|-------|-------|----------|---------------|------------|
| build-page | 579 | ACTIVE (latest iteration) | Orchestrator | 1 (Gas Town) |
| tension-composition | 1,878 | MATURE (many iterations) | Sub-skill (TC analysis) | 5+ (test layouts, experiments, Gas Town) |
| perceptual-auditing | 993 | MATURE (many iterations) | Sub-skill (quality verification) | 10+ (Mode 4 used in multiple experiments) |
| conventions-brief | 500 | ACTIVE (latest iteration) | Builder world-model | 1 (Gas Town) |
| gate-runner | 1,339 | ACTIVE (latest iteration) | Programmatic verification | 2+ (Flagship, Gas Town) |
| flagship-pa-questions | 159 | ACTIVE | Tier 5 questions | 2+ (Flagship, Gas Town) |
| essence | ~500+ | STANDALONE | Not in pipeline | Unknown |
| principle-extraction | ~200+ | STANDALONE | Not in pipeline | Unknown |
| perceptual-deepening | ~200+ | STANDALONE | Not in pipeline | Unknown |
| youtube-research | ~100 | STANDALONE | Not in pipeline | Unknown |
| crypto-sovereignty-analyst | ~200+ | STANDALONE | Not in pipeline | Unknown |

---

## KEY INSIGHT: The Pipeline Is a "Compositional Intelligence" System

The three pipeline skills + three infrastructure files together form a system for producing pages with "compositional intelligence" -- the quality where visual mechanisms don't just exist independently but work together through a unified metaphor at multiple scales. This is distinguished from simple "component assembly" (which any CSS framework can do) by:

1. **Content-driven derivation** (TC skill derives composition FROM the content's tensions, not from templates)
2. **Multi-coherence enforcement** (gates verify 3+ CSS channels shift together at boundaries)
3. **Fresh-eyes perceptual verification** (9 independent auditors evaluate what humans actually SEE)
4. **Fractal self-similarity** (patterns echo from Navigation scale down to Character scale)
5. **Anti-scale model** (Richness = density x restraint x confidence -- not just "more mechanisms = better")

The system is architecturally complete but execution-validated at N=1. The primary remaining question is whether the current pipeline reliably produces Flagship 4/4 quality or whether structural improvements are still needed.
