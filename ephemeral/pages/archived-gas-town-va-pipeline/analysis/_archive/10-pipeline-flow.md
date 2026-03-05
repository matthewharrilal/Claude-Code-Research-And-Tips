# Pipeline Flow: /build-page Invocation to Final Output

**Document:** Complete information flow trace through Pipeline v3
**Source:** 11 pipeline artifact files (SKILL.md, MANIFEST.md, 9 artifacts)
**Purpose:** Map every step, decision point, information transformation, and loss point

---

## ASCII FLOW DIAGRAM

```
USER INVOKES /build-page {content_path}
        │
        ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 0: INVOCATION + SKILL EXPANSION                  │
│  SKILL.md → MANIFEST.md → 11-step quickstart            │
│  Orchestrator reads: MANIFEST + all 9 artifacts         │
│  Output: Orchestrator context loaded (~6,500 lines)     │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 1: CONTENT ANALYSIS (~15 min)                     │
│  Content Analyst (Opus) reads: content.md +              │
│    artifact-routing.md (Phase 0 protocol)                │
│  7 operations → Content Map (~50-70 lines)               │
│  Key decisions: content type, mode, zones, metaphor      │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 2: BRIEF ASSEMBLY (~15 min)                       │
│  Brief Assembler (Opus) reads: Content Map +             │
│    artifact-tc-brief-template.md +                       │
│    artifact-builder-recipe.md + artifact-routing.md      │
│  4-tier merge → TC Brief (~100-165 lines)                │
│  CRITICAL: Recipe format, not checklist                  │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 2.5: PRECONDITION GATES (GR-23 to GR-28)         │
│  Orchestrator verifies: Opus builder, brief <200 lines,  │
│    recipe format, zero suppressors, gate-free builder    │
│  FAIL → fix pipeline config before proceeding            │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 3: BUILDING (~45 min)                             │
│  Builder (Opus) reads: TC Brief + tokens.css +           │
│    components.css + artifact-builder-recipe.md           │
│  6-phase recipe: READ → SELECT → SCAFFOLD → DISPOSE →   │
│    SELF-EVAL → TEMPORAL                                  │
│  Output: page.html (800-1200 CSS lines)                  │
│  ISOLATION: Builder NEVER sees gates, research, PA       │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 4: SCREENSHOT CAPTURE                             │
│  Orchestrator serves HTML via HTTP, opens Playwright     │
│  3 viewports: 1440px, 1024px, 768px                     │
│  Cold look + full scroll-through at each viewport        │
│  Output: ~30-100 screenshot images saved to disk         │
│  Pre-capture eliminates Playwright contention            │
└─────────────────────┬───────────────────────────────────┘
                      │
              ┌───────┴───────┐
              │               │
              ▼               ▼
┌────────────────────┐ ┌───────────────────────────────────┐
│ PHASE 5: GATE RUN  │ │ PHASE 6: PA AUDIT (9 auditors)    │
│ Orchestrator runs   │ │ Each reads: screenshots + assigned │
│ Playwright JS for   │ │   PA questions (5-9 per auditor)  │
│ GR-01 through GR-22│ │ Fresh-eyes: zero pipeline context  │
│ 16 REQUIRED         │ │ 48 standard + 9 Tier 5 questions  │
│ 6 RECOMMENDED       │ │ Output: 9 independent PA reports  │
│ Output: gate report │ │ PA-05 score: 1-4 scale            │
└────────┬───────────┘ └──────────────┬────────────────────┘
         │                            │
         └──────────┬─────────────────┘
                    ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 7: INTEGRATIVE WEAVE                              │
│  Weaver (Opus) reads: 9 PA reports + gate results        │
│  Synthesizes: dominant findings, PA-05 consensus,        │
│    soul violations, artistic impressions                 │
│  Output: Woven verdict with PA-05 score + fix list       │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│  PHASE 8: VERDICT DECISION                               │
│  Orchestrator applies decision tree:                     │
│    Identity FAIL → REBUILD                               │
│    3+ Anti-Pattern FAIL → REBUILD                        │
│    Perception FAIL → REFINE                              │
│    PA-05 < 2.5 → REBUILD (GR-30)                        │
│    PA-05 2.5-3.5 → REFINE (GR-31)                       │
│    PA-05 >= 3.5 + 0 soul → SHIP (GR-29)                 │
└────────────┬────────────────┬───────────────────────────┘
             │                │
     ┌───────┘        ┌──────┘
     ▼                ▼
┌──────────┐   ┌──────────────┐   ┌────────────────────┐
│  SHIP    │   │   REFINE     │   │    REBUILD         │
│  Done!   │   │ New Opus agt │   │ Fresh Opus builder │
│          │   │ Reads: brief │   │ COMPOSING mode     │
│          │   │  + conviction│   │ → back to PHASE 3  │
│          │   │  + PA art.   │   │                    │
│          │   │ impressions  │   │                    │
│          │   │ NEVER sees   │   │                    │
│          │   │ gate scores  │   │                    │
│          │   │ → PHASE 4    │   │                    │
└──────────┘   └──────────────┘   └────────────────────┘

CIRCUIT BREAKER: Max 1 REBUILD + 1 REFINE (then force ship)
```

---

## PHASE 0: INVOCATION AND CONTEXT LOADING

### Trigger
User invokes `/build-page {content_path}` or uses trigger phrases ("build a page", "run the pipeline", "create a design system page").

### Information Inputs
1. **SKILL.md** (61 lines) — Skill definition, points to MANIFEST as authority
2. **MANIFEST.md** (1,092 lines) — 11-step quickstart, agent roster, artifact routing, phase execution, dependency graph, failure paths, agent prompt templates (Appendix E), model mandate (Appendix F)
3. **9 artifact files** (~5,400 lines total):
   - artifact-identity-perception.md (556 lines) — 10 soul constraints + 6 perception thresholds
   - artifact-builder-recipe.md (857 lines) — 6-phase builder recipe
   - artifact-gate-runner.md (~1,379 lines) — 42 gates with Playwright JS
   - artifact-pa-protocol.md (1,004 lines) — PA-05 definition, 65 questions, 9-auditor deployment
   - artifact-routing.md (901 lines) — Content routing, mode determination, compression physics
   - artifact-orchestrator.md (971 lines) — Master control, topology, phases, verdict, suppressors
   - artifact-tc-brief-template.md (169 lines) — 4-tier brief template
   - artifact-worked-examples.md (183 lines) — Gas Town examples
   - artifact-value-tables.md (226 lines) — Pre-computed CSS values
4. **council-verdict.md** — Authoritative override when artifacts conflict

### Information Transformation
- Orchestrator absorbs ~6,500 lines of pipeline specification
- 11-step quickstart distills this into a minimum viable execution path
- Agent prompt templates in Appendix E provide copy-paste-ready prompts for 7 roles
- Orchestrator becomes the single point of pipeline intelligence — no other agent sees the full picture

### Information Loss
- **ZERO at this phase.** All 6,500 lines enter the orchestrator's context. No filtering.
- However, the orchestrator's EFFECTIVE absorption is bounded by attention limits. With ~6,500 lines of spec, later sections receive progressively less attention.

### Decision Quality
- **HIGH.** This is a read-only phase with no synthesis. Quality depends entirely on whether the orchestrator reads ALL files (the 11-step quickstart ensures this).

### Optimization Opportunities
1. **Prioritize reading order.** The quickstart reads MANIFEST first, then artifacts in dependency order. But the orchestrator may benefit from reading the MOST CRITICAL artifacts first: artifact-builder-recipe.md and artifact-pa-protocol.md, since these define the two highest-impact agents.
2. **Pre-computed orchestrator digest.** A 200-line summary of "what the orchestrator must know" could reduce context load while preserving decision-relevant information.

---

## PHASE 1: CONTENT ANALYSIS (~15 min)

### Agent
Content Analyst (Opus, TeamCreate worker)

### Information Inputs
1. **Content markdown file** (variable length — Gas Town was ~4,000 words)
2. **artifact-routing.md** — Phase 0 Content Analysis Protocol (7 operations)
3. **Orchestrator prompt** from Appendix E template

### Information Transformation
The Content Analyst performs 7 sequential operations:

| Operation | Input | Output | Judgment Required |
|-----------|-------|--------|-------------------|
| 1. Classify content type | Full content | Type label (RESEARCH-SYNTHESIS, TUTORIAL, DENSE-REFERENCE, MIXED) | LOW — pattern match |
| 2. Map heterogeneity | Full content | Score (low/moderate/high) + evidence | MEDIUM — requires section comparison |
| 3. Assess metaphor viability | Full content + sections | 3 metaphor seeds with viability ratings | HIGH — creative judgment |
| 4. Per-section character | Each section | Register (NARRATIVE/REFERENCE/CODE) | LOW — pattern match |
| 5. Density arc | Section lengths + character | ASCII density pattern + per-zone heights | MEDIUM — estimation |
| 6. Reader model | Full content | 5-axis reader profile | MEDIUM — inference |
| 7. Content tensions | Full content | 3-5 tension pairs | HIGH — analytical synthesis |

**Output: Content Map** (~50-70 lines) containing:
- Zone architecture table (zone number, name, content, density label, height estimate)
- Content tensions (3-5 pairs with implications)
- Metaphor seeds (3 candidates with recommendation)
- Density arc (ASCII pattern)
- Reader profile (5-axis scores)
- Mode recommendation (APPLIED vs COMPOSED)

### Information Loss
- **MODERATE.** The full content (~4,000+ words) is compressed to ~50-70 lines. Compression ratio: ~10:1 to 20:1.
- Content MAP captures structure (zone boundaries, density, register) but LOSES: specific word choices, argument flow, rhetorical devices, humor, voice, tonal shifts within zones.
- The metaphor seed selection is a HIGH-LOSS decision: 3 candidates identified, 1 recommended. The 2 rejected metaphors and their potential structural implications are permanently lost.
- **Content tensions are the highest-fidelity extraction.** They capture what makes the content interesting/difficult to design for, which directly informs compositional decisions.

### Decision Quality
- **Mode selection (APPLIED vs COMPOSED):** CRITICAL decision. COMPOSED mode requires high heterogeneity + metaphor viability. Incorrect selection cascades through the entire pipeline. Evidence: Gas Town correctly classified as COMPOSED (MIXED content, high heterogeneity, viable "dispatch" metaphor).
- **Zone boundary placement:** MODERATE impact. Incorrect zone boundaries create brief-to-content misalignment. The Content Map's zone table is the ONLY place zone boundaries are defined — all downstream phases inherit them.
- **Metaphor selection:** HIGH impact in COMPOSED mode (determines CSS custom property naming, zone conceptual identity). LOW impact in APPLIED mode.

### Optimization Opportunities
3. **Structured metaphor exploration.** Currently the Content Analyst generates 3 metaphor seeds. Expanding to 5 with explicit structural mapping (metaphor concept → zone group → CSS naming) would reduce downstream Brief Assembler guesswork.
4. **Zone validation checkpoint.** The Content Map's zone table should include explicit word counts per zone and content register ratios, enabling the Brief Assembler to calibrate Tier 3 density instructions with higher precision.

---

## PHASE 2: BRIEF ASSEMBLY (~15 min)

### Agent
Brief Assembler (Opus, TeamCreate worker)

### Information Inputs
1. **Content Map** (~50-70 lines) from Phase 1
2. **artifact-tc-brief-template.md** (169 lines) — 4-tier template with verbatim text
3. **artifact-builder-recipe.md** (857 lines) — Mechanism vocabulary, creative decisions
4. **artifact-routing.md** (901 lines) — Multi-coherence framework, temporal composition, compression physics
5. **Orchestrator prompt** from Appendix E template

### Information Transformation

The Brief Assembler merges template + Content Map + reference artifacts into the TC Brief:

| Tier | Source | Method | Line Budget |
|------|--------|--------|-------------|
| Tier 1: Identity | Template verbatim | COPY (10 soul world-descriptions) | ~15 lines |
| Tier 2: Perception | Template verbatim | COPY (6 natural laws with calibration) | ~8 lines |
| Tier 3: Compositional | Content Map + recipe + routing | SYNTHESIZE (multi-coherence, metaphor, density arc, content-form, creative authority) | ~50 lines |
| Tier 4: Disposition | D-01 through D-08 template | ADAPT per content (purpose + technique vocabulary) | ~40 lines |
| Appendix: Content Map | Phase 1 output | APPEND verbatim | ~30-50 lines |

**Output: TC Brief** (~100-165 lines)

**CRITICAL FORMAT RULE:** Recipe format (Read/Select/Deploy/Assess verbs) NOT checklist format (Verify/Fail if/Must be verbs). This is the single highest-impact format decision in the pipeline. Evidence: Recipe = DESIGNED (N=2); Checklist = FLAT (N=2); massive effect size.

### Information Loss
- **Tier 1 and Tier 2:** ZERO loss. Verbatim copy from template.
- **Tier 3 (the heart of the brief):** MODERATE-HIGH loss. This tier synthesizes:
  - 857 lines of builder recipe → ~20 lines of compositional instruction
  - 901 lines of routing artifact → ~15 lines of multi-coherence specification
  - ~50-70 lines of Content Map → ~15 lines of metaphor/density/coupling instruction
  - **Total: ~1,828 lines input → ~50 lines output = 36:1 compression**
- **Tier 4:** MODERATE loss. 8 disposition instructions (D-01 through D-08) each get 1-2 content-specific observations. The TECHNIQUE VOCABULARY (specific CSS properties and values) is the most commonly lost element. Gas Town's Tier 4 received only 25 lines vs the 40-line budget; the missing 15 lines were technique specifics.
- **What survives compression:** Zone boundaries, metaphor name, density arc pattern, transition types per boundary, component targets, CSS value references.
- **What dies in compression:** Nuance of WHY a particular transition type fits a particular boundary, the full multi-coherence channel vocabulary, the complete mechanism catalog, disposition technique specifics.

### Decision Quality
- **Multi-coherence boundary mapping:** THE most important Tier 3 decision. Each zone boundary must specify which of 6 channels shift and by how much. A brief that says "Z1→Z2 = light transition" is composed; a brief that says "vary transitions" is applied. This mapping is what distinguishes COMPOSED from APPLIED mode briefs.
- **Metaphor-to-CSS mapping:** The brief must name CSS custom properties by CONCEPT (--factory-intake, --dispatch-tactical) not by position (--bg-z1). Concept-based naming is the strongest single indicator of composed mode.
- **Disposition technique specificity:** Each D-01 through D-08 must include CSS property/value vocabulary, not just purpose statements. Purpose-only dispositions produce vague builder output.

### Optimization Opportunities
5. **Enforce Tier 4 line budget.** Gas Town's brief missed 15 lines of technique vocabulary. A hard minimum of 5 lines per disposition (40 total) with mandatory CSS property mentions would close this gap.
6. **Multi-coherence boundary template.** Provide a structured per-boundary template: `Z{n}→Z{n+1}: channels=[list], type=[light/medium/heavy], dominant_shift=[property], delta=[value]`. This forces specificity over vagueness.

---

## PHASE 2.5: PRECONDITION GATES

### Agent
Orchestrator (self-check before spawning builder)

### Gates Executed

| Gate | Check | Threshold | Impact of Failure |
|------|-------|-----------|-------------------|
| GR-23 | Builder model = Opus | Opus model ID | WARNING (not block, pending experiment #19) |
| GR-24 | Content heterogeneity | >= "moderate" | BLOCK (content may not support designed output) |
| GR-25 | Suppressor count | Zero patterns in brief | BLOCK (suppressors degrade quality) |
| GR-26 | Brief size cap | <200 lines total, <=73 constraint layer | BLOCK (mode collapse risk) |
| GR-27 | Builder gate-free | Zero gate language in builder input | BLOCK (gate visibility → threshold gaming) |
| GR-28 | Recipe format | Recipe verb indicators, zero compliance voice | BLOCK (checklist → FLAT output) |

### Information Transformation
- Binary pass/fail evaluation of 6 preconditions
- No information is created; existing artifacts are validated
- FAIL at this phase means the pipeline configuration is broken — fix before proceeding

### Information Loss
- **ZERO.** This is a validation gate, not a transformation.

### Decision Quality
- **HIGH for automatable gates** (GR-23, GR-26, GR-27, GR-28 — can be checked programmatically)
- **MEDIUM for judgment gates** (GR-24 heterogeneity assessment, GR-25 suppressor pattern detection)

### Optimization Opportunities
7. **Automate GR-25 suppressor scan.** The 20 known suppressors have specific text patterns. A regex scan of the brief could catch "sample 2-4", judgment language, compliance voice automatically rather than relying on orchestrator judgment.

---

## PHASE 3: BUILDING (~45 min)

### Agent
Builder (Opus, TeamCreate worker)

### Information Inputs
The builder receives EXACTLY these files (information isolation is enforced):

| Input | Size | Purpose |
|-------|------|---------|
| TC Brief | ~100-165 lines | Mission document (Tiers 1-4 + Content Map) |
| tokens.css | ~200 lines | CSS design tokens (spacing, colors, typography) |
| components.css | ~300 lines | Component library (8+ classes) |
| artifact-builder-recipe.md | 857 lines | 6-phase build recipe |
| Content markdown | ~variable | Raw content to design |
| 73-line constraint template | 73 lines | Hard constraints layer |

**Total builder input: ~1,595-1,695 lines**

The orchestrator document notes this is honestly ~3,600 lines when accounting for all CSS files, content, and brief — not the misleading "73 lines" sometimes cited.

### BUILDER NEVER SEES:
- Gate thresholds or gate specifications
- Research archive or pipeline history
- PA questions or PA scoring rubrics
- Fix instructions or past failure data
- The 55 prohibitions beyond soul constraints
- Count-gates (">=3 channels")
- Process metadata

### Information Transformation
The builder executes a 6-phase recipe:

**Phase 1: READ** (~5 min)
- Absorb tokens.css vocabulary (spacing scale 4-96px in 4px increments, 8 primary + 5 accent + 3 zone + 4 text hierarchy colors, border weights 4/3/1px, type scale 0.75-3rem)
- Absorb components.css toolkit (8 minimum viable classes, 12+ for flagship)
- Read 73-line constraint template

**Phase 2: SELECT** (~10 min) — 9 creative decisions:
1. Zone backgrounds (using warm palette, R >= G >= B)
2. Type scale selections per zone
3. Metaphor vocabulary → CSS custom properties (concept-based naming)
4. Callout semantics per zone
5. Component selections (8+ library classes)
6. Container width confirmation (940-960px)
7. Hover behavior selections
8. Transition types per zone boundary (light/medium/heavy)
9. Multi-coherence check (>=3 channel shifts per boundary, average 4+)

**Phase 3: DEPLOY SCAFFOLDING** (~15 min)
- Build 6-channel framework (background, typography, spacing, borders, accents, components)
- Set zone heights per density arc
- Visual density per zone (loud/quiet distribution)
- Build order matters: structure first, then surfaces

**Phase 4: DEPLOY DISPOSITION** (~10 min)
- D-01 through D-08 experimental instructions
- Content-register reading, room perception, signing frame, second-half moment, reader's scroll, negative space, edge intentionality, skeleton test

**Phase 5: SELF-EVALUATE** (~3 min)
- Screenshot mental model vs conviction
- Skeleton test (remove content — does structure have shape?)
- Reader's scroll check (height variety, density alternation, transition weight)
- Mode indicators check (concept naming, zone modulation, layout by metaphor)

**Phase 6: TEMPORAL COMPOSITION** (~2 min)
- Density arc verification
- Multi-coherence channel alignment
- Structural metaphor coherence
- Content-form coupling check

**Output: page.html** (self-contained HTML+CSS, 800-1200 CSS lines target)

### Information Loss
- **CRITICAL COMPRESSION POINT.** This is where the pipeline's entire information stack collapses to a single HTML file.
- **TC Brief → CSS:** ~100-165 lines of compositional instruction → ~800-1200 lines of CSS. This is an EXPANSION, not compression. The brief is a seed that the builder grows into a full design.
- **However:** The builder recipe (857 lines) contains mechanism vocabulary, technique specifics, and creative frameworks that inform the builder's decisions but are NOT directly traceable in the output. The builder absorbs 857 lines of recipe and produces CSS that reflects SOME of that vocabulary. Estimated utilization: 30-60% of recipe vocabulary manifests in any single page.
- **Metaphor fidelity:** The Content Map's metaphor seed becomes CSS custom properties. If the builder uses concept-based naming (--dispatch-tactical), the metaphor is STRUCTURAL. If position-based (--bg-z3), the metaphor is ANNOUNCED but not structural. This is the single largest quality variance point in the pipeline.

### Decision Quality
- **HIGHEST VARIANCE PHASE.** The builder is the creative engine. All preceding phases are preparation; all subsequent phases are verification. Builder quality is bounded by:
  1. Model capability (Opus vs Sonnet — confounded but Opus correlates with better output)
  2. Brief quality (recipe format + technique specificity = DESIGNED; checklist + vague dispositions = FLAT)
  3. Input routing (builder seeing the RIGHT files — recipe, tokens, components, brief)
  4. Information isolation (builder NOT seeing gates, research, PA criteria)
- **Master equation:** Quality = Agent Capability x Content Affordance x Spec Fidelity. Zero in ANY factor = zero quality.

### Optimization Opportunities
8. **Builder conviction document.** The builder should produce a 20-30 line "conviction statement" alongside the HTML — explaining their metaphor interpretation, 3 strongest design decisions, and 1 creative risk taken. This document feeds the REFINE agent if needed and provides PA auditors with ground truth for metaphor assessment.
9. **Per-zone CSS budget.** Allocate CSS lines per zone based on density arc: high-density zones get more CSS, low-density zones get less. Prevents the observed failure mode of spending 22% of CSS on imperceptible micro-typography.

---

## PHASE 4: SCREENSHOT CAPTURE

### Agent
Orchestrator (NOT a separate agent — orchestrator runs Playwright directly)

### Information Inputs
1. **page.html** from Phase 3
2. **Screenshot protocol** from artifact-pa-protocol.md Part 5

### Information Transformation
1. Serve HTML via HTTP (Playwright MCP blocks `file://` protocol)
2. Open page at 3 viewports: 1440px, 1024px, 768px
3. At each viewport:
   - **Cold look:** Full-page screenshot (what the eye sees first)
   - **Scroll-through:** Screenshots at regular scroll intervals covering entire page height
4. Save all screenshots with structured naming convention
5. Total: ~30-100 screenshots depending on page length

### Information Loss
- **MEDIUM.** Screenshots capture VISUAL appearance but lose:
  - Hover states (unless explicitly triggered)
  - Scroll animations (should be disabled: `animation: none !important`)
  - Computed CSS values (screenshots show rendered result, not the code)
  - Accessibility information (screen reader behavior, ARIA, keyboard navigation)
  - Responsive behavior between the 3 tested viewports
- **What screenshots GAIN that code analysis misses:**
  - Actual rendered whitespace gaps (the stacking loophole is VISIBLE in screenshots)
  - Font rendering at actual size
  - Color relationships as the eye perceives them
  - Overall compositional rhythm and density distribution

### Decision Quality
- **HIGH for protocol execution** (3 viewports, cold look + scroll-through is well-defined)
- **MEDIUM for coverage completeness** (hover states, focus states, and intermediate viewport sizes are not captured)

### Optimization Opportunities
10. **Add hover-state screenshots.** Capture hover states on interactive elements (links, buttons, callouts) at a representative viewport. This provides PA auditors with evidence of D-07 (Edge Intentionality) execution that is currently invisible.

---

## PHASE 5: PROGRAMMATIC GATE RUNNING

### Agent
Orchestrator (runs Playwright JavaScript directly — NOT a separate LLM agent)

### Information Inputs
1. **page.html** served via HTTP
2. **artifact-gate-runner.md** (~1,379 lines) — Playwright JS for all 42 gates

### Gates Executed (Post-Build)

**16 REQUIRED gates (GR-01 to GR-16):**

| Category | Gates | What They Check |
|----------|-------|-----------------|
| Identity (10) | GR-01 to GR-10 | border-radius=0, box-shadow=none, container 940-960px, no gradients, warm palette R>=G>=B, font trinity (3 fonts), no pure black/white, no decorative elements, border hierarchy 4/3/1px, cross-page DNA |
| Perception (6) | GR-11 to GR-16 | bg delta >=15 RGB, letter-spacing >=0.025em, stacked gap <=120px, total stacked gap <=150px, single margin <=96px, all CSS perceptible (meta-gate) |

**6 RECOMMENDED gates (GR-17 to GR-22):**

| Category | Gates | What They Check |
|----------|-------|-----------------|
| Anti-pattern (6) | GR-17 to GR-22 | AP-01 density stacking (min padding >=12px), AP-09 ghost mechanisms (zero sub-perceptual), AP-10 threshold gaming (<50% at floor), AP-11 structural echo (<3 consecutive identical), AP-14 cognitive overload (<=4 channels/viewport), AP-02 color zone conflict (consistent semantic roles) |

**3 ADVISORY gates (GR-33 to GR-35):**

| Category | Gates | What They Check |
|----------|-------|-----------------|
| Mode detection (3) | GR-33 to GR-35 | CSS naming mode (concept vs position), component zone-modulation, layout choice driver |

### Information Transformation
- Each gate produces a binary PASS/FAIL result (or ADVISORY report)
- Gate results are collected into a structured report
- **CRITICAL:** Gate results go to the orchestrator and weaver ONLY — never to the builder or REFINE agent

### Information Loss
- **LOW for what gates measure.** Gates are precise binary checks on specific CSS properties.
- **HIGH for what gates CANNOT measure.** 8 of 14 identified anti-patterns require PA audit (4) or Compositional Critic (4, EXPERIMENTAL). Gates detect STRUCTURAL violations but miss PERCEPTUAL quality:
  - Programmatic verification confirmed 6 CSS channels with 4+ shifts per boundary in the Flagship experiment
  - Fresh-eyes PA found them IMPERCEPTIBLE (backgrounds differing by 1-8 RGB points)
  - This is the core tension: **programmatic verification != perceptual verification**
- Gates also cannot detect: metaphor structural depth, compositional coherence, emotional arc, second-half moments, reader's scroll quality

### Decision Quality
- **HIGH for identity gates** (GR-01 to GR-10) — binary, objective, unambiguous
- **HIGH for perception gates** (GR-11 to GR-16) — quantitative thresholds with proven evidence
- **MEDIUM for anti-pattern gates** (GR-17 to GR-22) — some require judgment (GR-19 threshold gaming uses 50% heuristic, GR-21 cognitive overload is difficult to automate)
- **ADVISORY mode gates** report but do not judge — appropriate given council reclassification

### Optimization Opportunities
11. **Add a DISTRIBUTION gate.** Currently gates check minimums/maximums but not DISTRIBUTION. A gate that verifies CSS values SPREAD across the full calibration range (not clustered at floor) would catch the threshold gaming pattern more reliably than GR-19's 50% heuristic.

---

## PHASE 6: PERCEPTUAL AUDIT (9 Auditors, Parallel)

### Agents
9 PA Auditors (A through I), all Opus, all fresh-eyes (zero pipeline context)

### Information Inputs Per Auditor
1. **Screenshots** saved from Phase 4 (read via Read tool — no Playwright access)
2. **Assigned PA questions** (5-9 questions per auditor, from artifact-pa-protocol.md Part 4)
3. **PA scoring rubric** (PA-05 definition: Designed/Coherent/Proportionate/Polished, 1-4 scale)

### Question Distribution (65 total across 9 auditors)

| Auditor | Focus Area | Questions |
|---------|-----------|-----------|
| A | Soul + Identity | Tier 1 mandatory (5 questions) |
| B | Typography + Spacing | Tier 2 standard (5-7 questions) |
| C | Color + Surfaces | Tier 2 standard (5-7 questions) |
| D | Components + Layout | Tier 2 standard (5-7 questions) |
| E | Transitions + Rhythm | Tier 3 deep dive (5-7 questions) |
| F | Density + Whitespace | Tier 4 void prevention (5-7 questions) |
| G | Sub-perceptual detection | Sub-perceptual + pipeline integration (5-7 questions) |
| H | Compositional depth | Tier 5 flagship detection (9 questions) |
| I | Holistic + Emotional | Emotional arc + overall impression (5-7 questions) |

### Information Transformation
- Each auditor produces an independent assessment using ONLY perceptual language
- Auditors describe what they SEE, not what they know about the pipeline
- PA-05 score: each auditor rates on 1-4 scale (FLAT/ASSEMBLED/COMPOSED/DESIGNED)
- Dominant findings surfaced with frequency weighting (9/9 auditors flagging = highest confidence)
- **Fresh-eyes principle:** Auditors receive ZERO build context. They don't know the metaphor, the zones, the content, or the pipeline. They assess what the eye sees.

### Information Loss
- **LOW for perceptual quality.** This is the highest-fidelity quality signal in the pipeline because it mirrors the end user's experience.
- **MEDIUM for diagnostic specificity.** PA auditors can say "this area feels empty" but cannot say "the padding-bottom is 200px because the builder used var(--gap-xl) twice" — they lack CSS access.
- **LOW-MEDIUM for breadth.** 9 independent auditors with 65 questions provide comprehensive coverage. The Mode 4 PA (9 auditors) caught the whitespace void that the 2-auditor PA missed entirely. Breadth of perspectives is the key value.

### Decision Quality
- **HIGHEST in the pipeline.** Fresh-eyes perceptual assessment is the ground truth for design quality. PA-05 is the primary quality metric.
- **Evidence:** PA-05 scores across experiments (1.5/4 Flagship failure, 2.5/4 Remediation, 3.5/4 Gas Town original) have been consistent, reproducible, and predictive of actual visual quality.

### Optimization Opportunities
12. **Auditor conviction statement.** Each auditor should identify their single DOMINANT finding (what would they fix first if they had 30 minutes?). This focuses the weaver's synthesis and gives the REFINE agent a clear priority list.

---

## PHASE 7: INTEGRATIVE WEAVE

### Agent
Weaver (Opus, TeamCreate worker)

### Information Inputs
1. **9 PA reports** from Phase 6 (one per auditor)
2. **Gate results** from Phase 5
3. **PA-05 scoring rubric** for calibration

### Information Transformation
- Cross-references 9 independent assessments to find convergence
- Weights findings by frequency (9/9 = highest confidence, 1/9 = noise)
- Synthesizes a single PA-05 score with justification
- Identifies dominant findings (flagged by majority of auditors)
- Compiles soul violation count
- Collects artistic impressions and emotional arc assessments
- Produces a prioritized fix list

**Output: Woven Verdict** containing:
- PA-05 consensus score (1-4)
- Soul violation count
- Dominant findings (ranked by auditor agreement)
- Artistic impressions summary
- Recommended verdict (SHIP/REFINE/REBUILD)
- Fix priority list (if REFINE/REBUILD)

### Information Loss
- **MODERATE.** 9 independent reports (~50-100 lines each = ~450-900 lines) are synthesized into a single verdict (~50-100 lines). Compression: ~5:1 to 9:1.
- **Minority findings may be lost.** A finding noted by 1/9 auditors might be dismissed as noise, but could represent a genuine perception that other auditors missed. The Mode 4 PA showed 9/9 convergence on whitespace void, but some 1/9 findings (e.g., specific font rendering issues) were also valid.
- **Artistic impressions are compressed.** Each auditor's unique perceptual language and emotional response is summarized, losing the specific vocabulary that could inform the REFINE agent.

### Decision Quality
- **HIGH for convergent findings** (>=6/9 agreement)
- **MEDIUM for divergent findings** (2-5/9 — may represent real perceptual differences vs noise)
- **LOW-MEDIUM for minority findings** (1/9 — insufficient signal for action, but should be preserved for future reference)

### Optimization Opportunities
13. **Preserve minority findings.** Instead of discarding 1/9 findings, append them as a "low-confidence observations" section. If a pattern appears across multiple builds (1/9 on build 1, 1/9 on build 2), it may represent a real issue.

---

## PHASE 8: VERDICT DECISION

### Agent
Orchestrator (decision tree application)

### Information Inputs
1. **Woven Verdict** from Phase 7
2. **Gate results** from Phase 5
3. **Verdict decision tree** from artifact-orchestrator.md Section 7

### Decision Tree (priority order)

```
1. ANY Identity gate FAIL (GR-01 to GR-10)?
   YES → REBUILD (identity violation is fundamental)

2. 3+ Anti-Pattern gates FAIL (GR-17 to GR-22)?
   YES → REBUILD (compositional failure too deep for refinement)

3. ANY Perception gate FAIL (GR-11 to GR-16)?
   YES → REFINE (perceptual values can be adjusted)

4. PA-05 < 2.5?
   YES → REBUILD (GR-30: composition too weak for refinement)
   "You cannot fix your way to Flagship"

5. PA-05 between 2.5 and 3.5?
   YES → REFINE (GR-31: composition viable, needs adjustment)

6. PA-05 >= 3.5 AND 0 soul violations?
   YES → SHIP (GR-29: page meets quality bar)
```

### Information Transformation
- Binary decision: SHIP, REFINE, or REBUILD
- If REFINE: orchestrator prepares refine agent context (brief + conviction + PA artistic impressions, NEVER gate scores)
- If REBUILD: orchestrator spawns fresh Opus builder in COMPOSING mode with same brief
- If SHIP: output final page.html to output directory

### Circuit Breaker
**Max 1 REBUILD + 1 REFINE per pipeline run.** After exhausting both, force SHIP with the best available artifact. This prevents infinite loops and respects the "you cannot fix your way to Flagship" principle.

### Information Loss
- **MINIMAL.** The decision tree is deterministic given the inputs. No information is created or destroyed — it's a routing decision.

### Decision Quality
- **HIGH for clear cases** (PA-05 = 1.5 → REBUILD; PA-05 = 4.0 → SHIP)
- **MEDIUM for edge cases** (PA-05 = 2.4 vs 2.5 is a sharp threshold with potentially different optimal actions)
- **The 2.5 REBUILD/REFINE boundary** is the most consequential threshold. It determines whether the builder's work is preserved (REFINE) or discarded (REBUILD). This threshold is based on observation: revision below 2.5 degrades composition.

### Optimization Opportunities
14. **Soft boundary zone.** Instead of a sharp 2.5 cutoff, a 2.3-2.7 "judgment zone" where the orchestrator considers the NATURE of PA findings (structural vs surface) could improve decision quality. Structural findings at PA-05=2.6 might warrant REBUILD, while surface findings at PA-05=2.4 might warrant REFINE.

---

## PHASE 9: FIX CYCLES (REFINE or REBUILD)

### REFINE Path

**Agent:** New Opus agent (NOT the original builder)

**Inputs:**
- TC Brief from Phase 2
- Builder's conviction statement (if produced)
- PA artistic impressions from Weaver
- The existing page.html
- **NEVER:** gate scores, threshold numbers, pass/fail language

**Process:**
- Reads the page with fresh eyes but informed by PA perceptual feedback
- Makes targeted CSS/HTML modifications
- Preserves the builder's compositional intent while addressing perceptual issues
- Returns modified page.html

**After REFINE:** Pipeline returns to Phase 4 (screenshots) → Phase 5 (gates) → Phase 6 (PA) → Phase 7 (weave) → Phase 8 (verdict)

### REBUILD Path

**Agent:** Fresh Opus builder (new instance, COMPOSING mode)

**Inputs:**
- Same inputs as Phase 3 (TC Brief, tokens.css, components.css, recipe, content, constraints)
- **NEVER:** the failed page, PA findings from failed build, gate results

**Process:**
- Complete rebuild from scratch
- Different builder instance prevents continuation bias (LLM fundamental property: continuation bias prevents self-revision)
- Returns new page.html

**After REBUILD:** Pipeline returns to Phase 4 (screenshots) through Phase 8 (verdict)

### Information Loss
- **REFINE:** LOW loss — PA artistic impressions guide targeted fixes. However, gate scores are hidden from the REFINE agent (by design), which means the agent cannot directly address quantitative failures. This is intentional: the REFINE agent should improve PERCEPTION, not optimize for METRICS.
- **REBUILD:** HIGH loss — the entire first build is discarded. All creative decisions, metaphor interpretations, zone treatments are lost. The new builder starts from the same brief but with different creative interpretation. This is also intentional: a fresh perspective avoids the "fixing" mindset that degrades composition.

### Decision Quality
- **REFINE:** MEDIUM-HIGH. Works well for surface-level perceptual issues (spacing, contrast, typography weight). Works poorly for deep structural issues (missing borders, uniform treatment, absent metaphor).
- **REBUILD:** MEDIUM. Fully resets creative decisions but depends on the SAME brief quality. If the brief caused the failure (e.g., missing technique vocabulary in Tier 4), the rebuild will likely produce similar results.

### Optimization Opportunities
15. **Brief amendment for REBUILD.** If the REBUILD was triggered by PA findings that suggest BRIEF inadequacy (e.g., "no borders visible" when Tier 1 specifies "borders speak"), the orchestrator should amend the brief with a 5-10 line "emphasis supplement" before the rebuild. This addresses the observed failure mode where the same brief produces similar results across different builders.

---

## INFORMATION FLOW SUMMARY

### Dual-Channel Architecture

Pipeline v3 uses a dual-channel information flow to minimize compression loss:

**Channel 1: Universal (1:1 ratio)**
- Soul constraints delivered as world-descriptions (Tier 1, verbatim)
- Perception thresholds delivered as natural laws (Tier 2, verbatim)
- These survive AT FULL FIDELITY from artifact → template → brief → builder

**Channel 2: Content-Specific (regenerated ~10:1)**
- Content Map → Tier 3 synthesis → builder creative decisions
- This channel has ~10:1 compression but is REGENERATED (the brief assembler creates new compositional instructions from the content map, rather than compressing existing instructions)

**Direct File Routes (0:1 — no compression)**
- tokens.css → builder (direct)
- components.css → builder (direct)
- artifact-builder-recipe.md → builder (direct)
- Screenshots → PA auditors (direct)

### Old Pipeline vs New Pipeline Compression

| Stage | Old Pipeline | New Pipeline |
|-------|-------------|-------------|
| Research → Constraints | 50:1 cascading loss | Dual-channel: 1:1 + regenerated 10:1 |
| Constraints → Builder | 7.9:1 guardrail-to-playbook | Recipe format with technique vocabulary |
| Builder visibility | 75 lines (13.4% of prompt) | ~1,600-3,600 lines (full recipe + files) |
| Quality routing | Best files → planner (no CSS) | Recipe + tokens + components → builder (writes CSS) |

---

## COMPLETE AGENT ROSTER

| Phase | Agent | Model | Inputs | Output | Time |
|-------|-------|-------|--------|--------|------|
| 0 | Orchestrator | Opus | All 9 artifacts + MANIFEST | Pipeline execution | Continuous |
| 1 | Content Analyst | Opus | Content.md + routing artifact | Content Map (~50-70 lines) | ~15 min |
| 2 | Brief Assembler | Opus | Content Map + template + recipe + routing | TC Brief (~100-165 lines) | ~15 min |
| 3 | Builder | Opus | Brief + tokens + components + recipe + content + constraints | page.html (800-1200 CSS) | ~45 min |
| 4 | Orchestrator | (self) | page.html | ~30-100 screenshots | ~5 min |
| 5 | Orchestrator | (self) | page.html + gate-runner JS | Gate report (42 checks) | ~5 min |
| 6 | PA Auditors (x9) | Opus | Screenshots + assigned questions | 9 PA reports | ~15 min (parallel) |
| 7 | Weaver | Opus | 9 PA reports + gate results | Woven verdict | ~5 min |
| 8 | Orchestrator | (self) | Verdict + gates | SHIP/REFINE/REBUILD decision | ~1 min |
| 9a | Refine Agent | Opus | Brief + conviction + PA impressions + page.html | Modified page.html | ~15 min |
| 9b | Rebuild Builder | Opus | Same as Phase 3 | New page.html | ~45 min |

**Total: 15 agents (1 orchestrator + 14 workers)**
**Estimated time: 80-105 min (single pass), 120-165 min (with one fix cycle)**

---

## TOP 10 OPTIMIZATION OPPORTUNITIES

Ranked by expected quality impact (highest first):

### 1. Enforce Tier 4 Technique Vocabulary (Expected: +0.3 PA-05)
**Phase affected:** Phase 2 (Brief Assembly)
**Current state:** Gas Town brief's Tier 4 was 25 lines vs 40-line budget; missing 15 lines were CSS technique specifics.
**Proposed change:** Hard minimum of 5 lines per disposition (D-01 through D-08) with MANDATORY CSS property/value mentions. Template: "D-04: Create 1-2 second-half moments. Techniques for this content: dark inversion block (background: var(--color-text), color: var(--bg-primary)) at the [ZONE] where [CONTENT PIVOT]. Scale break: [SIZE]px pull quote of the '[KEY INSIGHT]'."
**Evidence:** Purpose-only dispositions = vague builder output (observed). Technique-specific dispositions = targeted builder execution (observed in Middle experiment).

### 2. Multi-Coherence Boundary Template (Expected: +0.25 PA-05)
**Phase affected:** Phase 2 (Brief Assembly)
**Current state:** Briefs describe transitions as "light/medium/heavy" without per-boundary channel specifics.
**Proposed change:** Structured template per boundary: `Z{n}→Z{n+1}: channels=[bg:+25RGB, type:weight_shift, spacing:+16px, border:3px→1px], type=medium, dominant_shift=background`. Forces the Brief Assembler to specify WHICH channels shift at WHICH boundary by HOW MUCH.
**Evidence:** "A boundary that only changes one channel is a wall with a window. A boundary that changes three channels is a doorway to a new space." (D-02). Flagship failure had technically 4+ channel shifts that were all imperceptible.

### 3. Builder Conviction Document (Expected: +0.2 PA-05)
**Phase affected:** Phase 3 (Building) → Phase 7 (Weave) → Phase 9 (Fix Cycles)
**Current state:** Builder produces HTML only. REFINE agent has no ground truth for the builder's creative intent.
**Proposed change:** Builder produces a 20-30 line conviction statement: metaphor interpretation, 3 strongest decisions, 1 creative risk, per-zone intent summary. Fed to REFINE agent and weaver.
**Evidence:** Without conviction, the REFINE agent cannot distinguish intentional restraint from omission. Without conviction, the weaver cannot assess whether PA findings represent builder failure or brief failure.

### 4. Per-Zone CSS Budget Allocation (Expected: +0.2 PA-05)
**Phase affected:** Phase 3 (Building)
**Current state:** Builder allocates CSS freely. Observed failure: 22% of CSS (227 lines) spent on imperceptible micro-typography.
**Proposed change:** Add zone-proportional CSS budget guidance to the brief: "High-density zones: ~150-200 CSS lines. Medium: ~100-150. Low: ~80-100. No zone exceeds 25% of total CSS budget." This is GUIDANCE, not enforcement.
**Evidence:** CD-006 (Ceiling tier, 39/40) spent CSS proportionally: 11 components, 5 grids, 3 breakpoints. Flagship spent disproportionally: 22% on invisibly small letter-spacing values.

### 5. Distribution Gate (Expected: +0.15 PA-05)
**Phase affected:** Phase 5 (Gate Running)
**Current state:** Gates check minimums/maximums but not distribution. A page with all backgrounds at exactly 16 RGB delta passes GR-11 but looks flat.
**Proposed change:** Add GR-43: CSS Value Distribution. For background deltas, verify values span the full calibration range (15=subtle to 50=dramatic). For spacing, verify at least 3 distinct values used. For letter-spacing, verify range of values used (not all at 0.03em).
**Evidence:** Gas Town worked example notes Z4-Z5 boundary had only 17 RGB delta — technically passing but perceptually flat. Threshold gaming (AP-10) catches >50% at floor but not "all values in 15-20 range."

### 6. Brief Amendment for REBUILD (Expected: +0.15 PA-05)
**Phase affected:** Phase 9 (Fix Cycles)
**Current state:** REBUILD uses the SAME brief that produced the failed build.
**Proposed change:** Orchestrator analyzes PA findings for brief-attributable failures ("no borders visible" when Tier 1 says "borders speak"). Adds a 5-10 line "emphasis supplement" to the brief before the rebuild: "EMPHASIS: The first build had [FINDING]. The original brief instructs [TIER/DISPOSITION]. Ensure [SPECIFIC TECHNIQUE]."
**Evidence:** Same brief → same results is a documented failure mode. The brief may be technically correct but insufficiently emphatic on critical elements.

### 7. Automated GR-25 Suppressor Scan (Expected: +0.1 PA-05, +reliability)
**Phase affected:** Phase 2.5 (Precondition Gates)
**Current state:** Orchestrator manually scans brief for suppressor patterns.
**Proposed change:** Regex-based scan for 20 known suppressor text patterns: "sample 2-4", "verify that", "fail if", "must be", ">= N channels", judgment language ("good", "appropriate", "sufficient"), diagnostic language, count-gates.
**Evidence:** 20 suppressors identified, ALL correlate with quality degradation. Manual detection is error-prone; automated detection is reliable.

### 8. Hover-State Screenshots (Expected: +0.1 PA-05)
**Phase affected:** Phase 4 (Screenshot Capture)
**Current state:** Cold look + scroll-through at 3 viewports. No hover state capture.
**Proposed change:** After cold look captures, trigger hover state on all links, buttons, and callout elements. Capture hover screenshots at 1440px viewport.
**Evidence:** D-07 (Edge Intentionality) includes hover states as a key technique. PA auditors currently cannot assess hover execution. This gap means the builder's hover work is invisible to quality assessment.

### 9. Structured Metaphor Exploration (Expected: +0.1 PA-05)
**Phase affected:** Phase 1 (Content Analysis)
**Current state:** Content Analyst generates 3 metaphor seeds.
**Proposed change:** Expand to 5 seeds, each with explicit structural mapping: metaphor concept → zone group → CSS naming scheme → transition implications. Helps Brief Assembler produce more specific Tier 3 instructions.
**Evidence:** Metaphor selection is the second-highest-impact creative decision (after mode selection). More candidates with structural mapping reduces the risk of choosing a metaphor that cannot sustain full-page composition.

### 10. Minority Finding Preservation (Expected: +0.05 PA-05 per build, compounding)
**Phase affected:** Phase 7 (Integrative Weave)
**Current state:** Findings with <2/9 auditor agreement are potentially discarded.
**Proposed change:** Weaver appends a "low-confidence observations" section to the verdict: 1-line summaries of 1/9 findings. Over multiple builds, recurring low-confidence findings become high-confidence patterns.
**Evidence:** The Mode 4 PA showed 9/9 convergence on major findings, but unique per-auditor observations (e.g., specific font rendering, emotional response at particular scroll position) were also valid. These represent the "long tail" of quality improvement.

---

## SUMMARY METRICS

| Metric | Value |
|--------|-------|
| Total pipeline artifacts | 11 files, ~6,500 lines |
| Total gates | 42 (16 REQUIRED + 6 RECOMMENDED + 20 ADVISORY) |
| Total PA questions | 65 standard + 9 Tier 5 = 74 |
| Total agents per run | 15 (1 orchestrator + 14 workers) |
| Highest compression point | Phase 2 Tier 3 synthesis (36:1) |
| Lowest compression point | Channel 1 Universal (1:1) |
| Highest variance phase | Phase 3 Building |
| Most reliable quality signal | Phase 6 PA Audit (9 fresh-eyes auditors) |
| Estimated single-pass time | 80-105 min |
| Estimated with fix cycle | 120-165 min |
| Circuit breaker | Max 1 REBUILD + 1 REFINE |
| Target PA-05 | >= 3.5 (SHIP threshold) |
