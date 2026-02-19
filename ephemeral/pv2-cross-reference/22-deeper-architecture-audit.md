# Deeper Architecture Audit: PV2 vs Files 17, 21, 22, 23, 24

**Auditor:** deeper-architecture-auditor (Opus 4.6)
**Date:** 2026-02-19
**Sources:**
- PV2-ARCHITECTURE-DIAGRAM.html (1,143 lines)
- File 17: 17-decision-architecture.md (405 lines) -- 7 decision forks
- File 21: 21-verbiage-analysis.md (498 lines) -- 5.3x verb inversion, 10-tier propagation
- File 22: 22-structural-architecture.md (415 lines) -- document architecture, attention metrics
- File 23: 23-propagation-analysis.md (403 lines) -- 30 rules traced instruction->action->output
- File 24: 24-fundamental-differences.md (399 lines) -- telescope vs microscope paradigm
**Context:** ALWAYS FLAGSHIP. User wants tier routing eliminated.

---

## EXECUTIVE SUMMARY

PV2 incorporates the LESSONS from all 5 corpus files at the PRINCIPLE level. It correctly adopts the recipe format, separates conviction from execution, uses two-layer verification, and routes CSS-rich files to CSS-writing agents. However, it falls short in 4 specific areas: (1) 2 of 7 decision forks remain unresolved or under-specified, (2) the verb inversion is only partially corrected in the orchestrator layer, (3) the telescope/microscope duality is acknowledged but not formally labeled in the architecture, and (4) propagation reliability for the recipe's SEMI-CONCRETE instructions is untested. Overall: **STRONG INCORPORATION with 4 GAPS.**

---

## 1. FILE 17: THE 7 DECISION FORKS -- Are They All Resolved in PV2?

File 17 identified 7 major architectural decisions that shaped the remediation. PV2 must either resolve each fork definitively or justify keeping it open.

### Decision 1: Approach Selection (CSS-only vs CSS+HTML vs Rebuild)

**File 17 chose:** Approach B (CSS + targeted HTML restructuring) for remediation.
**PV2 status:** RESOLVED DIFFERENTLY. PV2 is not a remediation -- it generates pages from scratch. The fork is SUPERSEDED. PV2's 9-phase recipe (Section 5, Step 5) includes Phase 1 (HTML skeleton with semantic markup) and Phase 4 (Structural borders + dividers + components), which combines generation of BOTH HTML and CSS in a single pass. The "approach selection" fork does not apply to generation -- you always create both.

**Verdict: RESOLVED** -- the fork dissolves in the generation context.

### Decision 2: Team Composition (11 specialists vs fewer generalists)

**File 17 chose:** 11 specialized agents for the remediation audit.
**PV2 status:** PARTIALLY RESOLVED. The architecture diagram shows:
- Wave 0: TC planner (1 Opus) -- specialist for content analysis
- Wave 1: 1 Opus builder -- specialist for execution
- Wave 2: Lead + 9 PA auditors + weaver -- specialists for verification
- Wave 3: Builder + 2 quick auditors -- fix integration

The diagram specifies Flagship gets "1 Opus builder + planner" plus "9 auditors, all 48 questions (Mode 4)." This is a specialized team, but the PLANNING phase has only 1 agent (TC planner) where File 17's remediation had 11 research agents pre-computing design decisions.

**GAP:** PV2's planning is thinner than the remediation's. The remediation had 11 agents pre-compute CSS values, borders, accessibility, component mappings, typography, and spacing -- all fed into the recipe. PV2 relies on the TC planner alone to derive the build plan, plus the static operational-recipe.md (~650 lines). If the recipe is comprehensive enough, this works. If the recipe has gaps for specific content types, the single TC planner becomes a bottleneck.

**Verdict: PARTIALLY RESOLVED** -- the team topology is clear but the planning-depth question is deferred to the recipe's completeness.

### Decision 3: Phase Ordering (Deallocation first)

**File 17 chose:** Deallocation -> HTML restructuring -> CSS addition -> Verification.
**PV2 status:** RESOLVED. The 9-phase recipe (Step 5) follows:
- Phase 0: Content analysis + zone architecture
- Phase 1: HTML skeleton with semantic markup
- Phase 2: CSS reset + soul enforcement + base typography
- Phase 3: Zone backgrounds + warm palette
- Phase 4: Structural borders + dividers + components
- Phase 5: Typography zones
- Phase 6: Element-level richness
- Phase 7: Accessibility + responsive
- Phase 8: Verification

This is a generation sequence, not a remediation sequence, so "deallocation first" doesn't apply. But the PRINCIPLE (build on clean foundations, HTML before CSS, highest-impact visual changes first) IS preserved. Phase 1 (HTML) precedes Phase 2-6 (CSS), ensuring class names exist before selectors target them. Phase 2 (reset + soul) precedes Phase 3-6 (additions), ensuring a clean baseline.

**Verdict: RESOLVED** -- the ordering principle is preserved in the generation context.

### Decision 4: Single Builder vs Multiple Builders

**File 17 chose:** Single builder with complete recipe.
**PV2 status:** RESOLVED. The architecture diagram explicitly states: "1 Opus builder executes Phases 0-8" (Wave 1). The agent file routing section shows the builder reads: operational-recipe.md (~650 lines), _build-plan.md (from TC), tokens.css, prohibitions.md, merged-components.css, and mechanism-catalog excerpts.

For Flagship, there is also a planner that reviews checkpoints at 5 phases, but the BUILDER is a single agent. The planner reviews but does not write CSS/HTML.

**Verdict: RESOLVED** -- single Opus builder with complete information.

### Decision 5: Recipe Format (sequential phases with exact CSS values)

**File 17 chose:** Sequential recipe over binary rule checklist or hybrid.
**PV2 status:** RESOLVED. The entire PV2 architecture is built around the operational-recipe.md (~650 lines) as the builder's primary document. The architecture diagram describes it as: "Sequential phases with exact CSS blocks, HTML templates, perception thresholds inline, [CONTENT DECISION] markers for judgment points" (Section 3, recipe block).

The key innovation File 17 identified -- pre-computed CSS values that exceed perception thresholds -- is preserved through the recipe's embedded values.

**Verdict: RESOLVED** -- recipe format is the foundation of PV2.

### Decision 6: 4-Wave Architecture

**File 17 chose:** 4-wave (prep -> build -> verify -> synthesize).
**PV2 status:** RESOLVED. The Flagship 4-Wave Architecture section (Section 6) explicitly defines:
- Wave 0: Content Analysis (TC planner, ~30-60 min)
- Wave 1: Build Execution (1 Opus builder, ~90-150 min)
- Wave 2: Verification (9 PA auditors parallel, ~30-45 min)
- Wave 3: Fix Integration (builder + 2 auditors, ~30-60 min)

This maps directly to File 17's prep->build->verify->synthesize pattern, with the addition that Wave 3 is an explicit fix loop (max 3 cycles).

**Verdict: RESOLVED** -- 4-wave architecture preserved and extended with fix loop.

### Decision 7: Hardcoded Perception Thresholds

**File 17 chose:** Hardcode minimum perceptual magnitudes into every gate.
**PV2 status:** RESOLVED. The programmatic gates section (Layer 1) includes:
- SC-09: Background delta >= 15 RGB
- SC-10: Stacked gap <= 108px (Flagship)
- SC-11: Font-size zones >= 2px delta

The resolved decisions section (Section 9) explicitly states: "15 RGB" for background threshold, "108px for Flagship" for stacked gap, and "0.03em (0.5px at 16px base)" for letter-spacing.

**Verdict: RESOLVED** -- all perception thresholds hardcoded.

### DECISION FORK SUMMARY

| Fork | Status | Gap? |
|------|--------|------|
| D1: Approach selection | RESOLVED (superseded) | NO |
| D2: Team composition | PARTIALLY RESOLVED | YES -- planning depth depends on recipe completeness |
| D3: Phase ordering | RESOLVED (adapted) | NO |
| D4: Single builder | RESOLVED | NO |
| D5: Recipe format | RESOLVED | NO |
| D6: 4-wave architecture | RESOLVED | NO |
| D7: Perception thresholds | RESOLVED | NO |

**Score: 6/7 fully resolved, 1/7 partially resolved.**

---

## 2. FILE 21: THE 5.3x VERB INVERSION -- Does PV2 Use Action Verbs?

File 21 is the single most operationally useful report in the corpus. Its core finding: the master prompt used 2.23 judgment/constraint verbs per action verb. The remediation inverted this to 0.42 (every 1 constraint backed by 2.4 actions). This 5.3x inversion was THE explanatory variable for execution reliability.

### 2.1 PV2 Orchestrator Language

The PV2 architecture diagram uses the following verb patterns:

**User Journey section (Steps 1-7):**
- "classifies and configures" (action)
- "invokes tension-composition" (action)
- "validates _build-plan.md" (judgment, but binary)
- "reads recipe + build plan" (action)
- "executes 9-phase recipe" (action)
- "runs 12 binary checks" (action + judgment combined)
- "captures screenshots" (action)
- "applies PA-identified fixes" (action)

**Verb ratio analysis of the architecture diagram:**
- ACTION verbs: classifies, configures, invokes, reads, executes, captures, applies, spawns, routes, runs, writes, takes = ~12
- JUDGMENT verbs: validates, verifies, judges, evaluates = ~4
- CONSTRAINT verbs: must, non-negotiable = ~2

**Estimated ratio:** (Judgment+Constraint):Action = 6:12 = 0.5:1

This is CLOSE to the remediation's 0.42:1 ratio. The orchestrator layer successfully inverts the master prompt's verb pattern. The judgment verbs that remain are all BINARY ("validates _build-plan.md" against enumerated binary checks, "verifies" via programmatic gates with measured values).

### 2.2 Recipe Language (operational-recipe.md)

The architecture diagram describes the recipe as containing: "exact CSS blocks, HTML templates, perception thresholds inline, [CONTENT DECISION] markers for judgment points."

This matches the remediation spec's pattern: CONCRETE action directives (CSS blocks to copy) with BINARY judgment at checkpoints. The [CONTENT DECISION] markers are the only SEMI-CONCRETE elements, and they are explicitly flagged as judgment points rather than embedded invisibly.

**GAP:** We cannot verify the recipe's verb ratio without reading operational-recipe.md itself. The architecture diagram DESCRIBES the recipe as action-dominant, but the actual file may still contain judgment language inherited from earlier prompts.

### 2.3 The 10-Tier Propagation Ranking

File 21 established a 10-tier ranking of instruction reliability:

| Rank | Type | Reliability | PV2 Usage |
|------|------|------------|-----------|
| 1 | CONCRETE delete | ~98% | Phase 0 deallocation (generation N/A) |
| 2 | CONCRETE replace | ~95% | Recipe CSS blocks |
| 3 | CONCRETE WAS/NOW | ~92% | Recipe HTML templates |
| 4 | BINARY threshold + verification | ~90% | 12 programmatic gates |
| 5 | NUMBERED minimum with options | ~85% | Per-category mechanism minimums |
| 6 | Post-action perception check | ~70% | Phase 8 verification + inline checks |
| 7 | PRE-action judgment gate | ~50% | Handoff validation gate |
| 8 | ABSTRACT conviction | ~30% | 20-line Pipeline Philosophy preamble |
| 9 | FORMULA + JUDGE | ~25% | ELIMINATED from builder path |
| 10 | COUNTERFACTUAL thought experiment | ~5% | ELIMINATED from builder path |

**PV2 operates primarily at ranks 2-6 (70-95% reliability).** Ranks 9-10 are ELIMINATED from the builder path entirely. Rank 8 (conviction) exists only in the 20-line Pipeline Philosophy preamble in /build-page, NOT in the recipe itself. Rank 7 (pre-action judgment) appears only at the handoff validation gate, where it is constrained to binary checks.

**STRONG INCORPORATION.** PV2 successfully concentrates builder instructions in the high-reliability tiers.

### 2.4 Negation Density

File 21 found the master prompt had 1 negation per 11.5 lines (5.4x higher than remediation). The architecture diagram uses very few negations:

Negations in PV2 diagram: "non-negotiable" (1), "NOTHING about the build process" (1, for PA auditors), "neither is sufficient alone" (1), "does not build" (1). Total: ~4 negations in 1,143 lines = 0.0035 per line = 1 per 286 lines.

This is even LOWER than the remediation spec's density. The architecture diagram communicates almost entirely through positive action framing.

**GAP:** Again, the operational-recipe.md itself may have different negation density. The architecture diagram's low negation is promising but we cannot verify the recipe without reading it.

### VERB INVERSION SUMMARY

| Dimension | Master Prompt | Remediation | PV2 Architecture |
|-----------|--------------|-------------|------------------|
| (J+C):Action ratio | 2.23:1 | 0.42:1 | ~0.5:1 |
| Propagation band | Ranks 4-10 | Ranks 1-3, 6 | Ranks 2-6 |
| Negation density | 1/11.5 lines | 1/64 lines | ~1/286 lines |
| Judgment in build path | 53 JUDGE directives | 9 (Phase 8 only) | 0 (builder) + binary gates |

**Verdict: STRONG INCORPORATION** -- the 5.3x inversion is corrected. PV2's orchestrator language is action-dominant with binary judgment. Two gaps: (1) recipe's actual language unverified, (2) [CONTENT DECISION] markers may reintroduce judgment if not carefully scoped.

---

## 3. FILE 22: STRUCTURAL ARCHITECTURE -- Does PV2 Combine Both Architectures?

File 22 diagnosed two document architectures:
- **Master prompt:** Conviction-Execution-Coordination-Conviction sandwich, domain-organized, 10+ cross-references per task, 500+ lines to read before first action
- **Remediation spec:** Phase-sequential recipe, 0-1 cross-references per task, 132 lines to read before first action

File 22 proposed a 4-layer ideal architecture:
- Layer 0: Phase-specific recipe (remediation style)
- Layer 1: Domain rules (master prompt style)
- Layer 2: Conviction (master prompt style)
- Layer 3: Reference files (master prompt style)

### 3.1 PV2 Layer Mapping

**Layer 0 (Recipe):** operational-recipe.md (~650 lines) -- sequential phases with exact CSS blocks. Builder reads this + _build-plan.md. This IS the phase-specific recipe File 22 called for.

**Layer 1 (Domain Rules):** The 12 programmatic gates (SC-01 through SC-12) serve as the domain rule layer. They are read by the gate runner, NOT by the builder. The builder's inline checks during build are a subset.

**Layer 2 (Conviction):** The 20-line Pipeline Philosophy preamble in /build-page. Contains anti-scale model, IS/IS NOT axes, "What DESIGNED means," kill criteria. Read by the orchestrator and planner, NOT by the builder.

**Layer 3 (Reference):** Design system files routed to specific agents:
- TC planner: mechanism-catalog.md, tokens.css, prohibitions.md, research findings
- Builder: operational-recipe.md, _build-plan.md, tokens.css, prohibitions.md, merged-components.css
- PA auditors: screenshots only + PA question assignments

### 3.2 File 22's Key Metrics Applied to PV2

| Metric | Master Prompt | Remediation | PV2 Architecture |
|--------|--------------|-------------|------------------|
| Cross-references per task | 8-12 | 0-1 | 0-2 (builder reads recipe + plan) |
| Lines to scan before first action | ~500 | 132 | ~650 (recipe) + ~100 (build plan) |
| External file reads required | 6-8 per agent | 0 | 3-5 (builder reads 5 files) |
| Attention renewal points | 0 | 8 (phase boundaries) | 8 (9 recipe phases) |
| Working memory demand | HIGH | LOW | MODERATE |

**GAP 1: Lines before first action.** PV2's builder reads ~750 lines before starting Phase 0. This is HIGHER than the master prompt's 500 lines. File 22 warned that attention degradation increases with reading length. However, the recipe's sequential structure provides attention renewal at each phase boundary (8 renewal points), which the master prompt lacked.

**GAP 2: External file reads.** The builder reads 5 files (recipe, build plan, tokens.css, prohibitions.md, merged-components.css). File 22 warned that external file reads introduce failure modes (wrong file path, version drift). The remediation spec had 0 external reads. PV2 trades the remediation spec's self-containment for the master prompt's reusability.

**STRENGTH: Audience separation.** PV2 correctly separates audiences:
- Builders read Layer 0 (recipe) + Layer 3 (design system files)
- Planners read Layer 1 (rules) + Layer 2 (conviction) + Layer 3 (reference)
- Auditors read NOTHING about the build (fresh-eyes zero context)

This is EXACTLY what File 22 recommended. The master prompt collapsed all layers into one document. PV2 separates them by agent role.

### 3.3 The Conviction Layer Question

File 22 found: "Conviction helps PLANNING agents who must make novel decisions. Conviction hurts EXECUTION agents who should follow recipes."

PV2's conviction content:
- 20-line Pipeline Philosophy in /build-page preamble -- read by orchestrator, passed to planner
- Builder reads the recipe's conviction preamble first: "anti-scale model, IS/IS NOT axes, What DESIGNED means"

**GAP 3:** File 22 recommended conviction should be read "ONLY by Opus creative agents." PV2 sends conviction to the builder ("Builder reads the conviction preamble first"). File 22's evidence showed conviction biases without calibrating -- "Warm" produces correct direction but uncalibrated magnitude. If the recipe's CSS values already encode the correct magnitude, the conviction preamble is redundant for the builder. If the recipe has [CONTENT DECISION] markers where the builder must exercise judgment, the conviction preamble provides directional guidance.

This is a TENSION, not a clear gap. For ALWAYS FLAGSHIP, where the aspiration is 4/4, some conviction guidance for the builder may be necessary. File 22 itself noted: "a hybrid would outperform either."

### STRUCTURAL ARCHITECTURE SUMMARY

| File 22 Recommendation | PV2 Implementation | Status |
|------------------------|-------------------|--------|
| 4-layer architecture | 4 layers present | ADOPTED |
| Audience separation | Builders/planners/auditors see different files | ADOPTED |
| Phase-sequential recipe for builders | operational-recipe.md, 9 phases | ADOPTED |
| Zero cross-references for builders | 0-2 cross-references | MOSTLY ADOPTED |
| Conviction only for creative agents | Conviction preamble also reaches builder | TENSION |
| Attention renewal points | 8 phase boundaries | ADOPTED |

**Verdict: STRONG INCORPORATION** with one tension (conviction routing to builder).

---

## 4. FILE 23: PROPAGATION ANALYSIS -- Will PV2 Achieve 100% Compliance?

File 23 traced 30 rules (15 master, 15 remediation) through instruction -> action -> visible output. Key findings:
- Master prompt compliance: 73% (11/15 followed)
- Remediation compliance: 100% (15/15 followed)
- Master prompt full conversion (instruction -> visible): 47%
- Remediation full conversion: 54%

### 4.1 PV2 Predicted Compliance by Instruction Type

**CONCRETE actions (recipe CSS blocks, HTML templates):** ~95-98% compliance predicted. The recipe provides exact CSS to copy. This is File 23's highest-reliability instruction type (Rank 1-3).

**BINARY gates (12 programmatic checks):** ~90% compliance predicted. Each gate has a programmatic verification method (getComputedStyle). File 23 confirmed: "Every rule that includes a JS verification query was followed."

**Per-category mechanism minimums (1+ Spatial, 1+ Temporal, etc.):** ~85% compliance predicted. These are NUMBERED minimums with options (File 21, Rank 5). The TC planner selects mechanisms from the catalog and writes them into the build plan. The builder deploys them. The handoff validation gate checks compliance.

**Perception checks (post-build verification):** ~70% compliance predicted. These are post-action evaluation (Rank 6). The builder scrolls and verifies. File 23 found these are "more reliable than pre-action judgment gates because (a) the agent has concrete context (the page it just built), (b) the check is single-criterion, and (c) failure triggers a specific fix."

**[CONTENT DECISION] markers:** ~50-60% compliance predicted. These are the recipe's judgment points where the builder must choose between options. This is the WEAKEST link in PV2's propagation chain. File 23's evidence: "JUDGE demands create a 'judgment tax'" and "Semi-concrete minimums produce floor compliance but not quality optimization."

### 4.2 PV2 Predicted Waste Rate

File 23 found both prompts had ~25% waste (followed instructions that produce no visible effect):
- Master: sub-perceptual identity rules
- Remediation: accessibility infrastructure

PV2 has BOTH types:
- Soul enforcement (U-01 border-radius: 0, U-06 no pure black/white) -- some rules are sub-perceptual
- Accessibility (skip link, ARIA labels, reduced motion) -- invisible at default viewport

Predicted PV2 waste rate: ~20-25%. This is acceptable -- both waste types serve legitimate purposes beyond visual perception.

### 4.3 Will PV2 Achieve 100% Compliance?

**No.** File 23 showed that 100% compliance requires ALL instructions to be CONCRETE actions with direct execution paths. PV2 contains:
- ~80% concrete actions (recipe CSS blocks + HTML templates) -- ~95% compliance each
- ~10% binary gates -- ~90% compliance each
- ~10% judgment points ([CONTENT DECISION] markers + perception checks) -- ~50-70% compliance each

**Predicted overall compliance: ~88-92%.** This is between the master prompt (73%) and the remediation spec (100%). The gap from 100% is entirely attributable to judgment points.

**GAP:** The [CONTENT DECISION] markers are the propagation bottleneck. File 23's evidence: judgment demands create compound failure probability. If the recipe has 5 [CONTENT DECISION] markers at ~60% compliance each, the probability of ALL 5 being correct = (0.6)^5 = 7.8%. This is a concern.

**Mitigation in PV2:** The Flagship architecture includes planner review at 5 checkpoint phases. The planner can catch [CONTENT DECISION] failures before they compound. This is the multi-agent scaffolding that File 24 predicted would be necessary.

### PROPAGATION SUMMARY

| Metric | Master | Remediation | PV2 Predicted |
|--------|--------|-------------|---------------|
| Compliance rate | 73% | 100% | 88-92% |
| Full conversion rate | 47% | 54% | ~55-65% |
| Waste rate | 25% | 25% | 20-25% |
| Structural failures | 4 | 0 | 0-1 ([CONTENT DECISION] compound) |

**Verdict: SIGNIFICANT IMPROVEMENT** over master prompt, slightly below remediation spec. The gap is inherent -- PV2 generates rather than remediates, so some judgment is unavoidable.

---

## 5. FILE 24: TELESCOPE VS MICROSCOPE -- Does PV2 Use the Right Instrument?

File 24's key metaphor: "The master prompt is a telescope (sees far, hard to aim). The remediation spec is a microscope (sees precisely, limited range). The pipeline needs both."

### 5.1 Where PV2 Uses the Telescope

**TC Pipeline (Wave 0):** Phases 0-3.5 of tension-composition are DECLARATIVE SPECIFICATION. The TC planner derives metaphor from content, selects mechanisms from catalog, generates zone architecture. This is the telescope -- seeing the big picture, making creative decisions, deriving solutions from abstract principles.

**Pipeline Philosophy preamble:** The 20-line conviction content (anti-scale model, IS/IS NOT axes) is telescope language. It provides directional guidance for novel decisions.

**Metaphor-driven composition (Ceiling+ only):** The build plan includes isomorphism table, bridge prose, reinforcing pairs. These require the telescope to see relationships between content and form.

### 5.2 Where PV2 Uses the Microscope

**Operational Recipe (Wave 1):** The 9-phase recipe with exact CSS blocks is IMPERATIVE PROCEDURE. The builder follows sequenced steps with specific values. This is the microscope -- precise execution within a narrow range.

**Programmatic Gates:** 12 binary checks with getComputedStyle measurements. Pure microscope -- measuring specific values against specific thresholds.

**Perception Checks:** Post-build verification with expected observations ("Scroll through at 1440px. You should see warm peach -> tan -> honey -> cooling cream -> cool gray"). Microscope verification of microscope execution.

### 5.3 Where PV2 Uses the Perceptual Audit (Neither Telescope nor Microscope)

**PA (Wave 2):** File 24 did not anticipate a THIRD instrument. The perceptual audit is neither telescope (it doesn't see far; it sees the page as-built) nor microscope (it doesn't measure precisely; it evaluates gestalt). It is a HUMAN EYE SIMULATION -- seeing what a reader would see, judging what a reader would feel.

PV2 correctly positions this as the HEAVY verification layer that catches what both instruments miss:
- Telescope misses: specific spatial failures (whitespace voids)
- Microscope misses: gestalt quality ("does this FEEL designed?")
- PA catches: both, by using fresh-eyes with zero build context

### 5.4 Does PV2 Use Each Instrument at the Right Phase?

| Phase | Instrument | File 24 Recommendation | PV2 Implementation |
|-------|-----------|----------------------|-------------------|
| Content analysis | Telescope | "Declarative for creative phases" | TC planner with mechanism-catalog (MATCH) |
| Mechanism selection | Telescope | "Declarative for compositional design" | TC per-category minimums + catalog (MATCH) |
| HTML skeleton | Microscope | "Imperative for mechanical phases" | Recipe Phase 1 with templates (MATCH) |
| CSS execution | Microscope | "Imperative for token replacement" | Recipe Phases 2-6 with CSS blocks (MATCH) |
| Spatial verification | Microscope | "Imperative for spatial verification" | 12 programmatic gates (MATCH) |
| Quality evaluation | Neither/Both | "Declarative gates for quality" | PA with 48 questions + PA-05 score (MATCH) |
| Fix identification | Microscope | "Imperative recovery for failures" | Wave 3 top-3 blocking fixes (MATCH) |

**Every phase uses the correct instrument.** PV2 achieves the hybrid File 24 called for: "declarative intent with imperative scaffolding."

### 5.5 File 24's 7 Propositions vs PV2

| Proposition | PV2 Response |
|-------------|-------------|
| P1: Specification and procedure are complementary | YES -- TC (specification) -> Recipe (procedure) |
| P2: LLMs more reliable at application; derivation has higher ceiling | YES -- TC derives, builder applies |
| P3: Ambient complexity is asset AND liability | MANAGED -- complexity isolated in TC, not in builder path |
| P4: 75-line builder cap is most honest line | RESOLVED -- builder reads ~650-line recipe, but with 8 renewal points |
| P5: Explicit simplicity guarantees 3/4 | YES -- recipe targets 3/4 floor, TC+metaphor targets 4/4 ceiling |
| P6: Master's theory of mind wrong about agents, right about systems | ADOPTED -- multi-agent system with single-agent execution |
| P7: Make declarative/imperative duality explicit | PARTIALLY -- not formally labeled in architecture |

**GAP:** Proposition 7 recommended making the paradigm duality EXPLICIT with color-coded blocks:
- Blue blocks: Declarative (agent-derive)
- Red blocks: Imperative (agent-execute)
- Green blocks: Verification (agent-verify)

PV2 does NOT formally label its sections this way. The architecture diagram implicitly separates them (TC = blue, recipe = red, gates/PA = green), but the recipe itself and the orchestrator do not use explicit paradigm labels.

### TELESCOPE/MICROSCOPE SUMMARY

| Question | Answer |
|----------|--------|
| Does PV2 use telescope for TC? | YES |
| Does PV2 use microscope for recipe? | YES |
| Does PV2 use the right instrument per phase? | YES (7/7 phases matched) |
| Does PV2 add the PA as a third instrument? | YES (innovation beyond File 24) |
| Does PV2 make the duality explicit? | NO (implicit only) |

**Verdict: STRONG INCORPORATION** with one missed recommendation (explicit paradigm labeling).

---

## 6. CROSS-CUTTING FINDINGS

### 6.1 The Meta-Direction Confirmed

File 17 identified that all 7 decisions moved along 5 axes in the same direction:
1. Abstract -> Concrete
2. Builder judgment -> Spec author judgment
3. Post-hoc detection -> Pre-authoring constraint
4. Distributed -> Centralized execution
5. Constraint list -> Implementation guide

**PV2 continues this movement** along axes 1, 2, and 5 (recipe with concrete values, pre-computed by TC, sequential implementation guide). But PV2 PARTIALLY REVERSES axes 3 and 4:
- **Axis 3 (Post-hoc vs Pre-authoring):** PV2 uses BOTH. Recipe embeds pre-authoring constraints (perception thresholds inline), AND two-layer post-hoc verification (gates + PA). This is better than either alone.
- **Axis 4 (Distributed vs Centralized):** PV2 uses centralized EXECUTION (single builder) but distributed VERIFICATION (9 PA auditors). This combines the reliability of centralized execution with the breadth of distributed auditing.

### 6.2 The ALWAYS FLAGSHIP Implication

With tier routing eliminated (user wants ALWAYS FLAGSHIP), several architecture components simplify:

**TC involvement:** Always Phases 0-3.5 (full metaphor). No need for "Phases 0-2 only" middle-tier path.
**Handoff:** Always full: zone arch + section inventory + mechanism deployment + isomorphism table + reinforcing pairs + bridge prose.
**Checkpoints:** Always mandatory APPROVAL at Phases 0, 1, 3, 4, 8.
**Programmatic gates:** Always ALL BLOCKING + tighter thresholds (108px stacked gap, not 120px).
**PA:** Always Mode 4 (9 auditors, all 48 questions).
**Fix cycles:** Always max 3 + user escalation.

**This SIMPLIFIES the orchestrator.** The ~350-line /build-page skill can drop all tier classification logic and conditional routing. Every build gets the full treatment. Estimated reduction: ~50-80 lines of tier-selection logic removed.

### 6.3 Unresolved Tensions

**Tension 1: Recipe completeness vs content variety.** The recipe has ~650 lines of pre-computed CSS patterns. But different content types (prose-heavy, data-heavy, mixed) may need different patterns. File 23 showed the remediation's 100% compliance came from content-SPECIFIC instructions. The recipe must be content-AGNOSTIC to serve ALWAYS FLAGSHIP across diverse content. This is the fundamental tension between the remediation's specificity (100% compliance) and the recipe's generality (predicted ~90% compliance).

**Tension 2: Conviction for the builder.** File 22 says conviction hurts builders. File 24 says builders need microscope only. But ALWAYS FLAGSHIP aspires to 4/4, and File 24's Proposition 5 warns that "3/4 is a ceiling within the procedure paradigm." To reach 4/4, the builder may need SOME telescope vision -- enough to make [CONTENT DECISION] choices that produce emergence rather than compliance.

**Tension 3: The 650-line recipe vs the 75-line builder cap.** File 22 noted the master prompt's 964-line length caused attention degradation. The recipe at 650 lines is shorter but still substantial. File 22 recommended 75 lines per phase. At 9 phases, that's 675 lines total -- close to the recipe's actual length. If phases are self-contained (File 22's "attention renewal"), the 650-line length may be manageable. But if phases cross-reference each other, degradation will recur.

---

## 7. FINAL SCORECARD

| Corpus File | Core Finding | PV2 Incorporation | Grade |
|-------------|-------------|-------------------|-------|
| **File 17** (7 Decision Forks) | 7 decisions moved from abstract/distributed/post-hoc to concrete/centralized/pre-authoring | 6/7 resolved, 1 partial (team planning depth) | A- |
| **File 21** (5.3x Verb Inversion) | J+C:Action ratio must invert from 2.23:1 to ~0.4:1; builder instructions at propagation Ranks 1-6 | Orchestrator ~0.5:1; builder at Ranks 2-6; Ranks 9-10 eliminated | A |
| **File 22** (Structural Architecture) | 4-layer audience-separated architecture; phase-sequential recipe; conviction only for creative agents | 4 layers present; audience separated; conviction tension with builder | A- |
| **File 23** (Propagation Analysis) | 100% compliance requires all-concrete instructions; structural failures from broken causal chains | Predicted 88-92% (above master 73%, below remediation 100%); 0 structural failures | B+ |
| **File 24** (Telescope vs Microscope) | Pipeline needs both; telescope for TC, microscope for recipe; make duality explicit | Correct instrument per phase; PA as third instrument; duality implicit not explicit | A- |

**Overall Grade: A-** -- Strong incorporation of all 5 corpus files' lessons. The 4 gaps are:
1. Planning depth depends on recipe completeness (D2)
2. Recipe's actual verb language unverified (must audit operational-recipe.md)
3. [CONTENT DECISION] markers are the propagation bottleneck (~50-60% compliance)
4. Declarative/imperative paradigm duality not formally labeled

---

## 8. RECOMMENDATIONS

### Must Fix (BLOCKING for codification)

**R1:** Audit operational-recipe.md for verb ratio. If (J+C):Action > 0.5:1, rewrite judgment language into action language. File 21's propagation ranking should be the rewriting guide.

**R2:** Minimize [CONTENT DECISION] markers in the recipe. Every judgment point reduces compound compliance probability. Where possible, convert to binary choices with pre-computed options ("IF content has > 3 data tables, use grid layout A. ELSE use layout B.").

### Should Fix (SIGNIFICANT)

**R3:** Add explicit paradigm labels to the orchestrator and recipe. File 24's blue/red/green proposal (SPEC/RECIPE/GATE) would give both human authors and agent consumers clear signals about expected cognitive mode.

**R4:** Since ALWAYS FLAGSHIP, remove ALL tier routing from /build-page orchestrator. Simplify to a single path. This removes ~50-80 lines and eliminates an entire class of conditional complexity.

### Nice to Have

**R5:** Consider a "recipe completeness gate" -- after TC generates the build plan, validate that the recipe + build plan together cover all section types in the content. If a content type (e.g., timeline, comparison matrix) has no recipe pattern, flag for human decision before builder starts.

---

**END OF DEEPER ARCHITECTURE AUDIT**

**Files cross-referenced:** 5 corpus files (17, 21, 22, 23, 24) + PV2 architecture diagram
**Total findings:** 6/7 decision forks resolved, 5.3x verb inversion corrected, 4-layer architecture adopted, 88-92% predicted compliance, correct instrument per phase
**Overall verdict:** STRONG INCORPORATION (A-) with 4 addressable gaps
