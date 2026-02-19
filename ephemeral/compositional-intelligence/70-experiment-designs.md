# Report 70: Three Runnable Experiment Designs

**Author:** Experiment Designer (Opus 4.6)
**Date:** 2026-02-19
**Task:** #70 -- Design 3 concrete, RUNNABLE experiments to resolve the 3-variable confound before codifying PV2
**Sources:** Reports 27, 29, 30 (meta-analysis), PV2-PIPELINE-DIAGRAM.md (977 lines), RESEARCH-SYNTHESIS.md (384 lines), prohibitions.md, tokens.css

---

## PURPOSE

Three experiments. Same content. Same metrics. Different prompt architectures. Run today, resolve the debate.

**The 3-variable confound:** Recipe format, perception thresholds, and builder model (Opus vs Sonnet) changed simultaneously between the flagship (1.5/4) and the remediation (2.5/4). We do not know which variable caused the improvement. These experiments isolate each.

**Content for all 3 experiments:** `design-system/research/RESEARCH-SYNTHESIS.md` (384 lines, 5 unified principles, 3 conflicts + resolutions, section design matrix, 10 actionable findings, 5 anti-patterns, exploration hypotheses).

**Metrics for all 3 experiments (identical protocol):**
1. PA-05 score (Mode 4: 9 independent Opus auditors, 48 questions, screenshot pre-capture)
2. Mechanism count (distinct compositional mechanisms deployed)
3. Channel shifts per boundary (how many CSS properties change at each section transition)
4. CSS line count (total lines of CSS in the output)
5. Component library adoption (N/26 component classes used)
6. Soul compliance (binary: all 8 absolute prohibitions pass?)
7. Perception threshold compliance (SC-09 through SC-12)
8. Build duration (wall clock, agent spawn to HTML written)

**Shared verification protocol (all 3 experiments):**
After build, team lead:
1. Serves HTML via `python3 -m http.server 8080`
2. Pre-captures screenshots at 1440px and 768px (cold look + full scroll-through, animations disabled)
3. Spawns 9 independent Opus PA auditors with zero build context (screenshots only)
4. PA weaver synthesizes 9 reports into PA-05 score + top-3 issues
5. Runs programmatic gate checks via Playwright (SC-01 through SC-12)

---

## EXPERIMENT A: Opus + Minimal Prompt ("The CD-006 Replication")

### What This Tests

Whether a single Opus builder with soul constraints + perception thresholds + content + minimal instruction can produce PA-05 >= 3/4 without any recipe, pipeline, or multi-agent orchestration. This is the contrarian hypothesis: compositional intelligence is a BUILDER property, not a SYSTEM property.

### What It Proves

- If PA-05 >= 3/4: The pipeline is unnecessary. Opus + constraints + thresholds is sufficient. PV2's 1,605 lines of infrastructure add no measurable value over 42 lines.
- If PA-05 = 2-2.5/4: Opus + constraints produces STYLED but not COMPOSED. The recipe adds value for the 2.5 -> 3 gap.
- If PA-05 < 2/4: Opus alone is insufficient. The recipe and/or multi-agent verification are essential.

### Agent Architecture

- **1 agent total:** Single Opus builder (claude-opus-4-6)
- **No planner.** No TC analysis. No metaphor derivation. Builder reads content directly.
- **No verification agents.** Post-build PA is done by the shared verification protocol (not part of the build itself).

### Exact Prompt Text (42 lines)

```
You are building an HTML page for the content in RESEARCH-SYNTHESIS.md.

READ THESE FILES FIRST:
1. design-system/compositional-core/identity/prohibitions.md (soul constraints)
2. design-system/compositional-core/vocabulary/tokens.css (design tokens)
3. design-system/research/RESEARCH-SYNTHESIS.md (the content to compose)

SOUL CONSTRAINTS (absolute, zero exceptions):
- border-radius: 0 on ALL elements
- box-shadow: none on ALL elements
- No filter: drop-shadow()
- No gradients (linear-gradient, radial-gradient)
- No pure #000000 or #FFFFFF
- opacity: 1 on all container/background elements
- Display headings: Instrument Serif only
- Body text: Inter only
- Code: JetBrains Mono only

PERCEPTION THRESHOLDS (every visual choice must be VISIBLE):
- Container: max-width 940-960px, centered
- Background colors: adjacent zones must differ by >= 15 RGB points
- Font-size: at least 3 typographic zones (display/body/detail) with >= 2px delta between zones
- Letter-spacing: >= 0.03em difference between typographic zones
- Borders: at least 3 structural borders using 4px solid (not decorative)
- Stacked spacing: no adjacent gap totals exceeding 108px
- Structural borders or background shifts at EVERY major section boundary

COMPOSITION INSTRUCTION:
Build a single HTML file that serves this content. Read the content deeply.
Understand what it is about. Make every visual decision serve the content's
purpose. Use the color palette from tokens.css. Make zone boundaries VISIBLE
(you should be able to see them without squinting). Make typography create
hierarchy (the reader should instantly know what's most important). Include:
- Skip link + ARIA landmarks (main, nav, complementary) for accessibility
- Responsive design at 768px and 1024px breakpoints
- Focus styles (2px solid outline, 2px offset)
- At least 2 distinct grid layouts
- A cascade value table as an HTML comment at the end showing computed
  background, font-size, font-weight, letter-spacing, and border-left
  values at every section boundary

Write the complete HTML file to: ephemeral/experiments/experiment-a/output.html
```

### Duration Estimate

- Build: 60-120 min (single Opus agent, no planning phase)
- Verification: 30-45 min (shared protocol)
- Total: 90-165 min

### Key Variables Isolated

| Variable | Experiment A |
|----------|-------------|
| Builder model | Opus |
| Recipe | NONE (42 lines of principles) |
| TC planning | NONE |
| Perception thresholds | YES (inline) |
| Component library | NOT referenced (builder may use own patterns) |
| Mechanism catalog | NOT provided |
| Agent count | 1 |

---

## EXPERIMENT B: Opus + Full Recipe ("The PV2 Test")

### What This Tests

Whether PV2's full recipe (operational sequence, specific CSS values, action verbs, phase checkpoints) produces measurably better results than Experiment A's minimal prompt. This is the PV2 hypothesis: the recipe is the active ingredient.

### What It Proves

- If PA-05 > Experiment A by >= 0.5: The recipe adds real value. PV2's sequential recipe is justified.
- If PA-05 = Experiment A (+/- 0.25): The recipe adds no value over minimal constraints. The 650 lines are unnecessary.
- If PA-05 < Experiment A: The recipe actively HURTS quality (the cage hypothesis from Report 29).

### Agent Architecture

- **2 agents:** TC planner (Opus) + Opus builder
- **TC planner** runs Phases 0-3.5, produces _build-plan.md
- **Builder** receives build plan + full recipe + 6 reference files
- **No mid-build verification agents.** Post-build PA is done by shared protocol.

### Exact TC Planner Prompt (48 lines)

```
You are the TENSION-COMPOSITION PLANNER. Analyze the content and produce
a build plan for a single HTML page.

READ THESE FILES:
1. design-system/compositional-core/identity/prohibitions.md
2. design-system/compositional-core/vocabulary/tokens.css
3. design-system/research/RESEARCH-SYNTHESIS.md (THE CONTENT)
4. design-system/compositional-core/grammar/mechanism-catalog.md

EXECUTE THESE PHASES:

PHASE 0 -- Content Structure Analysis:
Read the content. Determine zone count (2-5 zones). Map sections to zones.
Identify content topology (linear? hierarchical? comparative?).

PHASE 1 -- Multi-Axis Questioning:
Ask of the content: What should the reader FEEL? UNDERSTAND? DO? BECOME?
Identify at least one DISCOVERED axis unique to this content.

PHASE 2 -- Tension Derivation + Addition Test:
Do genuine tensions exist between the axes? (e.g., FEEL wants warmth but
UNDERSTAND wants precision). If NO genuine tension -> output FLAT MODE
(zones + recipe, no metaphor). If YES -> proceed to Phase 3.

PHASE 3 -- Metaphor Collapse:
Collapse the tension into a STRUCTURAL metaphor. The metaphor MUST suggest
specific CSS forms (not just be a poetic label). Test: "Does this metaphor
tell me what CSS to write?" If NO -> revise or go FLAT MODE.

PHASE 3.5 -- Lock-In Gate:
Verify the build plan includes:
- Zone count (2-5)
- Background colors per zone (>= 15 RGB delta between adjacent)
- At least 1 mechanism per category: Spatial, Temporal, Material, Behavioral, Relational
- >= 3 transition types planned (SMOOTH, BRIDGE, BREATHING)
- >= 2 grid layouts planned

OUTPUT: Write _build-plan.md containing zone map, mechanism deployment,
background colors, transition plan, metaphor (if any), and builder warnings.

Write to: ephemeral/experiments/experiment-b/_build-plan.md
```

### Exact Builder Prompt (127 lines)

```
You are the OPUS BUILDER. Build a single HTML page following the recipe below.

READ THESE FILES IN ORDER:
1. design-system/compositional-core/identity/prohibitions.md (soul constraints)
2. design-system/compositional-core/vocabulary/tokens.css (design tokens)
3. ephemeral/experiments/experiment-b/_build-plan.md (TC planner output)
4. design-system/compositional-core/grammar/mechanism-catalog.md (18 mechanisms)
5. design-system/compositional-core/components/components.css (component library)
6. design-system/research/RESEARCH-SYNTHESIS.md (the content)

═══════════════════════════════════════════════════════════════════════
9-PHASE SEQUENTIAL RECIPE
Execute phases IN ORDER. Do not skip phases.
═══════════════════════════════════════════════════════════════════════

PHASE 0: Content Analysis + Zone Architecture
- Read _build-plan.md. Map content sections to zones per the plan.
- Confirm zone count matches plan.
- Self-test: "Am I about to BUILD or about to RE-PLAN?" You should build.

PHASE 1: HTML Skeleton
- Semantic markup: <main>, <nav>, <article>, <section>, <aside>.
- Apply component library classes where applicable. Target >= 10/26 classes.
- Include >= 2 grid layouts (e.g., 2-column and 3-column).
- ARIA landmarks: >= 3 (main, nav, complementary at minimum).
- Skip link: <a href="#main" class="skip-link">Skip to content</a>.

PHASE 2: CSS Reset + Soul + Base Typography
- Set border-radius: 0 and box-shadow: none on ALL elements.
- Container: max-width: 960px; margin: 0 auto; padding: 0 32px.
- Base typography: font-size 16-18px, line-height 1.7+, Inter for body.
- Enforce warm palette: for ALL colors, R >= G >= B.
- Budget: ~50 lines CSS. Soul is FOUNDATION, not finish.

PHASE 3: Zone Backgrounds
- Apply background colors per zone from the build plan.
- MANDATORY: >= 15 RGB points delta between adjacent zones.
- Self-check: "Can I SEE the zone boundaries without borders?"
- If NO: increase delta until boundaries are visible.
- Example: if zone 1 = #fefcf3, zone 2 must differ by at least
  rgb(15,15,15) in any direction, e.g., #efece4 or #f5ede0.

PHASE 4: Structural Borders + Dividers + Transitions
- Apply border-left: 4px solid on callouts/blockquotes (structural, not decorative).
- Horizontal rules between major sections.
- Deploy >= 3 transition types between zones:
  SMOOTH: gradual background shift across a padding zone.
  BRIDGE: decorative hr or border element marking the boundary.
  BREATHING: deliberate whitespace pause (48-64px) between sections.
- Apply callout variants if content warrants (info, warning, tip).

PHASE 5: Typography Zones
- Create 3-zone typography arc:
  Display zone (h1-h2): 28-36px, Instrument Serif, font-weight 400.
  Body zone (p, li): 16-18px, Inter, font-weight 400.
  Detail zone (caption, meta, small): 13-14px, Inter, font-weight 400.
- MANDATORY: >= 2px font-size delta between adjacent typographic zones.
- Letter-spacing: >= 0.03em difference between typographic zones.
  e.g., Display: 0em, Body: 0.01em, Detail: 0.04em.

PHASE 6: Element-Level Richness
- Hover states on interactive elements (links, buttons).
- Selection styling: ::selection { background: rgba(232,48,37,0.15); }
- Link underline treatments (text-decoration-color, underline-offset).
- Table striping if tables exist: nth-child(even) subtle bg shift.
- List marker styling: custom list-style or ::marker color.
- Code block backgrounds using --bg-dark.
- Pull-quote or blockquote visual distinction (border-left + italic + indent).

PHASE 7: Accessibility
- Skip link: visually hidden, visible on :focus.
  .skip-link { position: absolute; top: -40px; left: 0; }
  .skip-link:focus { top: 0; z-index: 100; }
- Focus styles: outline: 2px solid var(--color-primary); outline-offset: 2px.
- @media (prefers-reduced-motion: reduce) { *, *::before, *::after {
    animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
- Responsive breakpoints:
  @media (max-width: 768px) { ... single column, reduce font sizes ... }
  @media (max-width: 1024px) { ... adjust grid layouts ... }
- @media print { ... hide nav, simplify layout ... }
- Target: full WCAG 2.1 AA compliance.

PHASE 8: Verification + Cascade Value Table
- Self-check A: "Can I SEE zone boundaries without labels?"
- Self-check B: "Is typography visibly different across zones?"
- Self-check C: "Do structural borders exist at section boundaries?"
- Self-check D: Run through prohibitions.md checklist mentally.
- REQUIRED DELIVERABLE: Cascade Value Table as HTML comment at end of file.
  Record computed CSS at EVERY section boundary:
  | Boundary | background | font-size | font-weight | letter-spacing | border-left | padding | color |
  For EVERY major section transition, all 7 properties.
  Verify: >= 3 channels shift at every transition.

═══════════════════════════════════════════════════════════════════════

Write the complete HTML file to: ephemeral/experiments/experiment-b/output.html
```

### Duration Estimate

- TC planning: 30-60 min
- Build: 90-150 min
- Verification: 30-45 min
- Total: 150-255 min

### Key Variables Isolated

| Variable | Experiment B |
|----------|-------------|
| Builder model | Opus |
| Recipe | FULL (127-line recipe with 9 phases, specific CSS values) |
| TC planning | YES (48-line TC planner, Phases 0-3.5) |
| Perception thresholds | YES (embedded in recipe phases) |
| Component library | YES (provided as input file) |
| Mechanism catalog | YES (provided as input file) |
| Agent count | 2 (planner + builder) |

---

## EXPERIMENT C: Opus + Principles Brief + Gates ("The Hybrid Test")

### What This Tests

Whether a middle ground -- principles (WHAT must be true) without sequencing (HOW to get there) -- plus post-build programmatic gates produces results comparable to or better than the full recipe. This is the Architecture C hypothesis from Report 29: constraints + verification beats sequenced prescription.

### What It Proves

- If PA-05 > Experiment B: Principles beat recipe. The recipe CONSTRAINS rather than enables. PV2 should adopt Architecture C.
- If PA-05 = Experiment B (+/- 0.25): No difference. Use the simpler option (principles brief = fewer lines to maintain).
- If PA-05 < Experiment B: Recipe beats principles. Sequential structure adds measurable value. PV2's recipe is justified.

### Agent Architecture

- **2 agents:** TC planner (Opus, same as Experiment B) + Opus builder
- **TC planner** identical to Experiment B (same prompt, same output)
- **Builder** receives principles brief (WHAT, not HOW) + reference files + build plan
- **Post-build programmatic gates** run 12 binary checks before PA
- **No mid-build checkpoints.** Builder has full compositional freedom.

### Exact TC Planner Prompt

**Identical to Experiment B** (same 48 lines, same output location adjusted to experiment-c directory). This ensures the planner variable is controlled.

```
[Same as Experiment B TC Planner Prompt above, except:]
Write to: ephemeral/experiments/experiment-c/_build-plan.md
```

### Exact Builder Prompt (98 lines)

```
You are the OPUS BUILDER. Build a single HTML page for the content below.

READ THESE FILES:
1. design-system/compositional-core/identity/prohibitions.md (soul constraints)
2. design-system/compositional-core/vocabulary/tokens.css (design tokens)
3. ephemeral/experiments/experiment-c/_build-plan.md (TC planner output)
4. design-system/compositional-core/grammar/mechanism-catalog.md (18 mechanisms)
5. design-system/compositional-core/components/components.css (component library)
6. design-system/research/RESEARCH-SYNTHESIS.md (the content)

═══════════════════════════════════════════════════════════════════════
PRINCIPLES BRIEF
These state WHAT must be true. You decide HOW and in what ORDER.
═══════════════════════════════════════════════════════════════════════

SEMANTIC DIRECTION:
Read the content deeply. The build plan provides a semantic direction
(metaphor or zone architecture). Every CSS decision you make must serve
this direction. If a CSS property doesn't reinforce the direction, remove it.

SOUL (non-negotiable):
- border-radius: 0 on ALL elements, zero exceptions
- box-shadow: none on ALL elements, zero exceptions
- No drop-shadow, no gradients, no opacity < 1 on containers
- No pure #000000 or #FFFFFF
- Container: max-width 940-960px, centered, padding >= 32px
- Font trinity: Instrument Serif (display), Inter (body), JetBrains Mono (code)
- Warm palette enforcement: R >= G >= B for all colors

PERCEPTION (must be VISIBLE):
- Background zones: adjacent zones differ by >= 15 RGB points
- Typography: 3 zones (display >= 28px / body 16-18px / detail 13-14px)
  with >= 2px delta between zones and >= 0.03em letter-spacing delta
- Structural borders: at least 3 using 4px solid at section boundaries
- Stacked gap: no adjacent spacing totals > 108px
- Multi-coherence: >= 3 CSS channels shift at every major section boundary

STRUCTURE (non-negotiable):
- Semantic HTML: <main>, <section>, <article>, <aside>, <nav>
- ARIA landmarks: >= 3 (main, nav, complementary minimum)
- Skip link (visually hidden, visible on focus)
- Focus styles: 2px solid outline, 2px offset
- Component library: use >= 10/26 classes from components.css
- Grid layouts: >= 2 distinct layouts
- Responsive: 768px and 1024px breakpoints
- Print stylesheet
- Reduced motion media query

RICHNESS (compositional):
- Deploy at least 1 mechanism from each category in the mechanism catalog:
  Spatial (1+), Temporal (1+), Material (1+), Behavioral (1+), Relational (1+)
- Zone transitions: >= 3 distinct types (smooth shift, bridge element, breathing pause)
- Hover states on interactive elements
- Selection styling (::selection)
- Link underline treatments
- Table striping if tables present
- Code block distinct backgrounds

DELIVERABLES:
- Complete HTML file with all CSS inline in <style> tag
- Cascade value table as HTML comment at end of file:
  Record background, font-size, font-weight, letter-spacing, border-left,
  padding, and color at EVERY section boundary

COMPOSITION FREEDOM:
You decide the build ORDER. You decide WHICH specific colors, WHICH
specific spacing values, WHICH specific mechanisms to deploy and WHERE.
The principles above define the FLOOR. Your compositional intelligence
defines the CEILING. Make this page feel DESIGNED -- where every visual
decision serves the content, where nothing is accidental, where the
whole exceeds its parts.

═══════════════════════════════════════════════════════════════════════

Write the complete HTML file to: ephemeral/experiments/experiment-c/output.html
```

### Programmatic Gates (Post-Build, Pre-PA)

After the builder completes, the team lead runs 12 programmatic checks via Playwright before proceeding to the PA. These are binary PASS/FAIL. Any failure is logged but does NOT trigger a fix cycle in this experiment (we want to measure what the builder produces on first pass).

```javascript
// Gate checks (run via Playwright getComputedStyle):
// SC-01: Container max-width between 940-960px
// SC-02: border-radius === '0px' on all elements, box-shadow === 'none'
// SC-03: Only 3 font families used (Instrument Serif, Inter, JetBrains Mono)
// SC-04: All colors satisfy R >= G >= B (warm palette)
// SC-05: No #000000 or #FFFFFF in computed styles
// SC-06: >= 3 ARIA landmarks (role="main", role="navigation", role="complementary")
// SC-07: Skip link present (a[href="#main"] or similar)
// SC-08: Component library classes found in DOM (>= 10 distinct classes)
// SC-09: Background RGB delta >= 15 between adjacent zone containers
// SC-10: No stacked margin+padding gaps > 108px
// SC-11: >= 3 distinct font-size zones with >= 2px delta
// SC-12: 2-5 distinct background zone colors
```

### Duration Estimate

- TC planning: 30-60 min
- Build: 60-120 min (likely faster -- no 9-phase sequencing overhead)
- Gate checks: 2-5 min
- Verification: 30-45 min
- Total: 120-230 min

### Key Variables Isolated

| Variable | Experiment C |
|----------|-------------|
| Builder model | Opus |
| Recipe | PRINCIPLES BRIEF (98 lines -- WHAT not HOW) |
| TC planning | YES (same as Experiment B) |
| Perception thresholds | YES (embedded in principles) |
| Component library | YES (provided as input file) |
| Mechanism catalog | YES (provided as input file) |
| Agent count | 2 (planner + builder) |
| Sequencing | NONE (builder decides order) |
| Post-build gates | YES (12 binary checks, logged not blocking) |

---

## COMPARISON MATRIX

| Dimension | Experiment A | Experiment B | Experiment C |
|-----------|-------------|-------------|-------------|
| **Prompt length** | 42 lines | 175 lines (48 TC + 127 builder) | 146 lines (48 TC + 98 builder) |
| **Builder model** | Opus | Opus | Opus |
| **TC planning** | None | Full (Phases 0-3.5) | Full (same as B) |
| **Recipe format** | Principles only | 9-phase sequential recipe | Principles brief (WHAT not HOW) |
| **Phase sequencing** | None | Mandatory (0-8 in order) | None (builder decides) |
| **Specific CSS values** | Thresholds only | Exact values per phase | Thresholds only |
| **Mechanism catalog** | Not provided | Provided | Provided |
| **Component library** | Not provided | Provided | Provided |
| **Build plan** | None | From TC planner | From TC planner (same) |
| **Mid-build checkpoints** | None | None (simplified from PV2) | None |
| **Post-build gates** | None | None | 12 binary gates |
| **Agent count** | 1 | 2 | 2 |
| **Est. duration** | 90-165 min | 150-255 min | 120-230 min |
| **Lines of infrastructure** | ~42 | ~175 | ~146 + gate runner |
| **Hypothesis tested** | Builder property | Recipe value | Principles + gates |

---

## EXECUTION PROTOCOL

### Pre-Experiment Setup

```bash
# Create experiment directories
mkdir -p ephemeral/experiments/experiment-a
mkdir -p ephemeral/experiments/experiment-b
mkdir -p ephemeral/experiments/experiment-c

# Verify input files exist
ls design-system/compositional-core/identity/prohibitions.md
ls design-system/compositional-core/vocabulary/tokens.css
ls design-system/research/RESEARCH-SYNTHESIS.md
ls design-system/compositional-core/grammar/mechanism-catalog.md
ls design-system/compositional-core/components/components.css
```

### Execution Order

**Option 1: Parallel (recommended, ~4 hours total)**
- Experiment A and Experiment B/C TC planners can run simultaneously
- Experiment B builder and Experiment C builder can run after their respective TC planners complete
- All 3 PA verification rounds run after all builds complete

**Option 2: Sequential (if resource-constrained, ~7-9 hours total)**
- Run A first (fastest, establishes baseline)
- Run B second (adds recipe variable)
- Run C third (adds principles + gates variable)
- Run PA for each after it completes

### Post-Experiment Analysis

After all 3 experiments complete, produce a comparison report:

```
EXPERIMENT RESULTS COMPARISON
═══════════════════════════════════════════════════════
                    Exp A       Exp B       Exp C
                    (Minimal)   (Recipe)    (Principles)
PA-05 Score:        __/4        __/4        __/4
Mechanism Count:    __          __          __
Channels/Boundary:  __          __          __
CSS Lines:          __          __          __
Components Used:    __/26       __/26       __/26
Soul Compliance:    __          __          __
Threshold Compliance: __        __          __
Build Duration:     __ min      __ min      __ min
═══════════════════════════════════════════════════════

VERDICT:
- If A >= B >= C: Pipeline unnecessary. Opus + constraints is sufficient.
- If B > A AND B > C: Recipe adds value. Codify PV2 as designed.
- If C > B >= A: Principles beat recipe. Adopt Architecture C.
- If A = B = C: All approaches equivalent. Use simplest (A).
- If B > C > A: Recipe beats principles, both beat minimal. Recipe justified.
```

---

## WHAT EACH EXPERIMENT RESOLVES

### The 5 Open Questions

| Question | Resolved By | How |
|----------|------------|-----|
| Is compositional intelligence a builder or system property? | A vs B | If A >= B, builder property. If B >> A, system property. |
| Does the recipe add value over minimal constraints? | A vs B | Direct comparison, same builder, same content. |
| Does sequential prescription beat unsequenced principles? | B vs C | Same reference files, different instruction format. |
| Is the mechanism catalog + component library necessary? | A vs B/C | A lacks both; B and C have both. |
| Is TC planning necessary? | A vs B/C | A has no planning; B and C have identical planning. |

### The Meta-Question

**Is PV2 worth codifying?**

- If Experiment B produces PA-05 >= 3/4 AND B > A by >= 0.5: **YES.** The recipe and planning add measurable value.
- If Experiment A produces PA-05 >= 3/4: **NO.** A 42-line prompt achieves the same result. Codify 42 lines, not 1,605.
- If Experiment C produces PA-05 >= B AND >= 3/4: **MODIFY.** Adopt principles brief instead of sequential recipe. Codify ~146 lines, not 1,605.

---

## RISK ANALYSIS

### What Could Go Wrong

1. **Content favorability bias.** RESEARCH-SYNTHESIS.md is meta-content about design. It's maximally favorable to the design system. All 3 experiments benefit equally, so relative comparison is valid even if absolute scores are inflated.

2. **Builder variance.** Each experiment uses a different Opus instance. Builder creativity varies. Mitigation: the 9-auditor PA averages out perceptual variance. If scores are within 0.25 of each other, treat as equivalent.

3. **TC planner variance.** Experiments B and C use separate TC planner invocations. The planner might produce different build plans. Mitigation: compare the two _build-plan.md files. If they differ substantially, note this as a confound.

4. **Prompt interpretation variance.** The 42-line prompt (Exp A) is more ambiguous than the 127-line recipe (Exp B). Opus might interpret ambiguity differently each time. Mitigation: this IS the variable being tested. If ambiguity produces equivalent quality, that's a finding.

### What We Cannot Resolve

- **N=1 per condition.** Each experiment produces one page. Statistical significance requires multiple runs. But each run is 2-4 hours. Accept N=1 and note confidence bounds.
- **Content generalizability.** All 3 use RESEARCH-SYNTHESIS. Results may not transfer to cooking blogs or API docs. This is a known limitation.
- **Human iteration variable.** CD-006 had human iteration. None of these experiments do. If all 3 score < 3/4, the missing variable might be human-in-the-loop, not recipe vs principles.

---

## TOTAL COST ESTIMATE

| Item | Parallel | Sequential |
|------|----------|------------|
| Experiment A (build) | ~90 min | ~90 min |
| Experiment B (TC + build) | ~180 min | ~180 min |
| Experiment C (TC + build) | ~150 min | ~150 min |
| PA Verification (x3) | ~120 min | ~120 min |
| **Total wall clock** | **~4 hours** | **~9 hours** |
| Agent spawns | ~12 (3 builders + 3x9 PA) | Same |

Compare to: codifying PV2 = 4-6 hours of writing 1,605 lines that may be unnecessary. These experiments cost the same time and produce data that resolves the architecture question.

---

**END OF REPORT 70**

**Verdict:** Three experiments, same content, same metrics, different architectures. Run today. The data resolves the 3-variable confound, the recipe necessity question, the builder-vs-system question, and the principles-vs-prescription question. Every prompt is ready to paste. Every metric is defined. Every comparison is pre-specified. Stop analyzing. Start testing.
