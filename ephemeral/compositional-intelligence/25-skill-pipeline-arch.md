# SKILL PIPELINE ARCHITECTURE

**Author:** Skill Pipeline Architect (Opus 4.6)
**Task:** #25
**Date:** 2026-02-19
**Sources:** PV2-PIPELINE-DIAGRAM.md (977 lines), TC SKILL.md (~1,878 lines), PA SKILL.md (848 lines), 14-MASTER-SYNTHESIS.md (599 lines)

---

## 1. THE COMPRESSION PROBLEM — STATED PRECISELY

The current PV2 pipeline has this information flow:

```
337 research findings
      |
      | (50:1 compression into TC SKILL.md)
      v
TC SKILL.md (1,878 lines)
      |
      | (TC Planner reads content + runs Phases 0-3.5)
      v
_build-plan.md (~200-400 lines)
      |
      | (Builder receives plan + recipe + 5 reference files)
      v
Opus Builder context (~1,150 lines total)
      |
      | (Builder executes 9-phase recipe)
      v
output.html (700-1500 lines CSS + 500-1000 lines HTML)
      |
      | (Screenshots extracted, all context stripped)
      v
9 PA Auditors (see ONLY screenshots, zero build context)
      |
      | (PA Weaver synthesizes 9 reports)
      v
_pa-report.md (~200-400 lines)
```

**There are 5 arrows. Each arrow is a compression point.** The question is: which compressions are NECESSARY (information isolation serves a purpose) and which are DESTRUCTIVE (information loss degrades quality)?

### Compression Audit

| Boundary | Type | Lossy? | Purpose of Compression | Quality Cost |
|----------|------|--------|----------------------|--------------|
| Research -> TC SKILL | DESTRUCTIVE | YES — 50:1 | Impossible for builder to read 337 findings | High: "sample 2-4" was the single most limiting spec |
| TC SKILL -> _build-plan.md | CONSTRUCTIVE | YES — content-specific synthesis | Planner selects from vocabulary for THIS content | Low: this is creative compression, not lossy compression |
| _build-plan.md -> Builder context | DESTRUCTIVE | YES — builder gets plan + recipe but not WHY | Builder has ~1,150 lines but zero compositional intelligence from TC | Medium: recipe tells WHAT, not WHY those mechanisms were chosen |
| Builder -> Screenshots | NECESSARY | YES — total context strip | PA auditors MUST be context-free (fresh-eyes principle) | Zero: this compression SERVES quality |
| PA reports -> Fix directives | CONSTRUCTIVE | YES — 9 reports become top-3 issues | Focus enables action | Low: weaver preserves convergent findings |

**FINDING:** Two boundaries are destructive, two are constructive, one is necessary. The destructive boundaries are:

1. **Research -> TC SKILL** (50:1): Already partially fixed by enrichments (mechanism catalog now has impact profiles, zone mappings, application modes). But 337 findings compressed to "deploy 1+ per category" is still a massive loss.

2. **_build-plan.md -> Builder** (the WHY gap): The builder receives WHAT to build (zones, colors, mechanisms) and HOW to build (recipe phases) but not WHY those choices serve the content. When the builder encounters an ambiguous case ("should this callout be info or warning?"), it has no compositional reasoning to draw on.

---

## 2. CURRENT SKILL INVOCATION FLOW

### How Skills Currently Invoke Each Other

They don't. Skills are invoked by the orchestrator, not by each other. The flow is:

```
/build-page (orchestrator)
    |
    |-- invokes /tension-composition (TC)
    |       |-- TC reads: content.md, tokens.css, prohibitions.md
    |       |-- TC outputs: _build-plan.md
    |       |-- TC does NOT invoke PA
    |
    |-- orchestrator validates _build-plan.md (handoff gate)
    |
    |-- orchestrator spawns Opus builder (NOT a skill invocation)
    |       |-- Builder reads: recipe + plan + tokens + prohibitions + components + catalog
    |       |-- Builder outputs: output.html
    |
    |-- orchestrator invokes /perceptual-auditing (PA)
    |       |-- PA reads: screenshots ONLY
    |       |-- PA outputs: _pa-report.md
    |
    |-- orchestrator runs fix loop (0-3 cycles)
```

**Key observation:** The orchestrator is the ONLY entity that invokes skills. Skills are leaves, not nodes in a call graph. TC does not call PA. PA does not call TC. The builder is not a skill at all — it's a raw Opus agent with reference files.

### What Crosses Skill Boundaries Today

| Boundary | Artifact | Format | Size |
|----------|----------|--------|------|
| TC -> Orchestrator -> Builder | _build-plan.md | Prose markdown | ~200-400 lines |
| Orchestrator -> Builder | operational-recipe.md | Prose markdown (recipe) | ~650 lines |
| Orchestrator -> Builder | tokens.css | CSS :root block | 174 lines |
| Orchestrator -> Builder | prohibitions.md | Prose markdown (rules) | 353 lines |
| Orchestrator -> Builder | merged-components.css | CSS classes | ~500 lines |
| Orchestrator -> Builder | mechanism-catalog.md | Prose markdown (catalog) | ~869 lines |
| Builder -> PA | Screenshots | PNG images | ~36-102 files |
| PA -> Orchestrator | _pa-report.md | Prose markdown | ~200-400 lines |

**Every cross-boundary artifact is unstructured prose or raw CSS.** There is no schema, no contract, no structured data exchange. The builder reads natural language and interprets it. The PA reads images and describes them in natural language.

---

## 3. SKILL DEPENDENCY GRAPH

```
                    /tension-composition
                          |
                   [_build-plan.md]
                          |
                  Handoff Gate (binary)
                          |
                    Opus Builder
                          |
                    [output.html]
                          |
              +-----------+-----------+
              |                       |
        Gate Runner (JS)    /perceptual-auditing
              |                       |
        [gate-results]         [_pa-report.md]
              |                       |
              +-----------+-----------+
                          |
                    Fix Decision
                          |
              +-----+-----+-----+
              |           |           |
            SHIP     FIX CYCLE    ESCALATE
```

### Serial Chain (Critical Path)

```
TC (30-60 min) -> Gate (1 min) -> Build (90-150 min) -> Verify (30-45 min) -> Fix (0-60 min)

TOTAL SERIAL: 151-316 min
```

### What Can Run in Parallel

| Phase | Parallelizable? | Why / Why Not |
|-------|----------------|---------------|
| TC + Build | NO | Build depends on TC output |
| TC + PA | NO | PA depends on Build output |
| Gate Runner + PA | YES | Both verify independently, only need output.html |
| 9 PA Auditors | YES | Each reads the same screenshots independently |
| Fix cycle builds | NO | Sequential (fix -> verify -> fix) |

**The pipeline is fundamentally serial.** TC must complete before Build. Build must complete before Verify. The only parallelism is WITHIN Wave 2 (gate runner + 9 auditors all run concurrently against the same artifact).

### Minimum Serial Chain

The minimum is 3 sequential steps: PLAN -> BUILD -> VERIFY. You cannot verify what hasn't been built. You cannot build what hasn't been planned. The 4-wave structure (TC -> Build -> Verify -> Fix) is already minimal — Wave 3 (Fix) is conditional and may not execute.

---

## 4. DIRECT ROUTING — THE KEY ARCHITECTURAL QUESTION

### The Current Flow (Compressed)

```
TC derives 12 mechanisms with rationale
    |
    v
_build-plan.md (lists mechanisms, no CSS)
    |
    v
Builder reads plan + recipe
    |
    v
Builder interprets plan -> writes CSS
```

At the TC -> Builder boundary, the compositional INTELLIGENCE (WHY this mechanism, WHY this zone order, WHY this transition type) is compressed into a list. The builder gets "deploy border-weight gradient" but not "border-weight gradient because the content has 4 confidence levels that map to geological strata depths, and border weight is the STRUCTURAL channel that makes depth felt without relying on labels."

### Alternative: Structured Build Manifest

Instead of prose markdown, TC could output a structured artifact that the builder consumes mechanically:

```yaml
# _build-manifest.yaml
zones:
  - id: zone-1
    name: "Introduction"
    sections: ["hero", "context-box"]
    background: "#fefcf3"
    role: "orientation — reader enters the content here"

  - id: zone-2
    name: "Core Argument"
    sections: ["thesis", "evidence-1", "evidence-2"]
    background: "#f5efe5"  # 15+ RGB delta from zone-1
    role: "density peak — highest information concentration"

mechanisms:
  spatial:
    - name: "dense-sparse-alternation"
      zones: ["zone-2", "zone-3"]
      why: "evidence sections alternate dense data with breathing commentary"
      css_hint: "grid-template-columns varies between sections"

  hierarchy:
    - name: "border-weight-gradient"
      zones: ["zone-1", "zone-2", "zone-3", "zone-4"]
      why: "4 confidence levels map to 4px/3px/2px/1px"
      css_hint: "border-left-width decreases with depth"

transitions:
  - from: "zone-1"
    to: "zone-2"
    type: "BRIDGE"
    css_hint: "decorative hr with accent color"

  - from: "zone-2"
    to: "zone-3"
    type: "BREATHING"
    css_hint: "48-64px gap, no decoration"

metaphor:
  name: "Geological Strata"
  structural_survival: 3  # Would survive label removal
  isomorphisms:
    - content: "confidence levels"
      metaphor: "depth layers"
      css: "background darkens, border thickens, spacing compresses"
    - content: "evidence accumulation"
      metaphor: "sedimentary deposit"
      css: "sections stack with visible stratification borders"
```

### Assessment: YAML Manifest vs Prose Plan

| Dimension | Prose _build-plan.md | YAML _build-manifest.yaml |
|-----------|---------------------|--------------------------|
| Builder parsing | Interpretation required | Mechanical extraction |
| Ambiguity | High (natural language) | Low (structured fields) |
| Compression loss | High (WHY disappears) | Medium (WHY preserved in `why` fields) |
| Flexibility | High (builder can improvise) | Lower (schema constrains) |
| Verification | Hard (how do you verify prose was followed?) | Easy (parse YAML, check fields present) |
| Compositional intelligence transfer | Low (list of mechanisms) | Medium (css_hint + why + zone mapping) |
| Builder creativity | Preserved | Partially constrained |

**VERDICT:** A structured manifest REDUCES ambiguity at the TC -> Builder boundary but at the cost of constraining builder creativity. The right approach is HYBRID: structured SKELETON (zones, mechanisms, transitions are machine-parseable) with prose ANNOTATIONS (why fields, role descriptions, metaphor rationale).

### The CSS Snippet Alternative

Instead of the builder INTERPRETING mechanism names and writing CSS from scratch, TC could output CSS SNIPPETS that the builder ASSEMBLES:

```css
/* TC-GENERATED: Zone backgrounds */
.zone-1 { background-color: #fefcf3; }
.zone-2 { background-color: #f5efe5; }
.zone-3 { background-color: #ece4d5; }
.zone-4 { background-color: #e3dac8; }

/* TC-GENERATED: Border-weight hierarchy */
.zone-1 .callout { border-left: 4px solid #5c4b3a; }
.zone-2 .callout { border-left: 3px solid #5c4b3a; }
.zone-3 .callout { border-left: 2px solid #5c4b3a; }
.zone-4 .callout { border-left: 1px solid #5c4b3a; }

/* TC-GENERATED: Transition — BRIDGE between zone-1 and zone-2 */
.zone-1 + .zone-2::before {
  content: '';
  display: block;
  border-top: 3px solid #c49052;
  margin: 48px 0;
}
```

**Assessment:** This is too prescriptive. TC is the TELESCOPE — it should specify WHAT and WHY, not HOW. If TC writes CSS, it removes the builder's ability to adapt mechanisms to the actual HTML structure (which TC hasn't seen, since TC operates on content markdown, not HTML). CSS snippets also violate the TC skill's own principle: "mechanisms.md provides TECHNIQUES, not implementations."

**REJECT the CSS snippet approach.** Keep TC declarative.

---

## 5. INVOCATION WITHOUT COMPRESSION — THE 337-FINDINGS PROBLEM

### The Core Question

The 337 research findings are compressed 50:1 into "deploy 1+ per category." How do you invoke the FULL 337 findings without the builder having to read them all?

### Answer: You Don't. You Pre-Digest Them Into the Reference Files.

The 337 findings are ALREADY distilled into the 6 reference files the builder reads:

| Reference File | What It Contains | Research Source |
|----------------|-----------------|----------------|
| mechanism-catalog.md | 18 mechanisms with impact profiles, application modes, zone mappings | R3, R4, R5 (distilled) |
| tokens.css | 65 locked tokens | R1, specification |
| prohibitions.md | 22 prohibitions | Soul discoveries + R1-R5 |
| merged-components.css | 31KB component library | DD/OD/CD explorations |
| operational-recipe.md | 9-phase build procedure | File 42 (which synthesized all experiments) |
| perception-thresholds.md | Delta table + 6 channels | Flagship + remediation analysis |

**The builder does not need 337 findings. The builder needs the 337 findings PRE-DIGESTED into actionable reference material.** This is what the compositional core IS — the 6-layer ontology is the distillation of 337 findings into operational vocabulary.

### What IS Lost: The WHY Layer

The reference files tell the builder WHAT (deploy border-weight gradient) and HOW (4px/3px/2px/1px, see catalog impact profile). They do NOT tell the builder WHY this mechanism was selected for THIS content.

**The WHY comes from TC.** The _build-plan.md is the bridge between generic vocabulary (337 findings -> reference files) and content-specific deployment (THIS content -> THESE mechanisms -> THIS arrangement).

### The Real Compression Problem

The compression problem is NOT "337 findings compressed to 5 mechanisms." That compression is CORRECT — not every finding applies to every page. The REAL compression problem is:

**TC's compositional reasoning (Phases 1-3) is compressed to a flat list of mechanism names in _build-plan.md.**

The tension derivation, metaphor collapse, and isomorphism mapping that TC performs in Phases 1-3 represent ~30-60 minutes of compositional reasoning. This reasoning is compressed to a few hundred lines of plan. The PROCESS by which TC arrived at "geological strata" is lost — the builder sees only the conclusion.

### Solution: Annotated Build Plan with Reasoning Chain

Enhance _build-plan.md to include the reasoning chain, not just conclusions:

```markdown
## Zone 2: Core Argument

**Sections:** thesis, evidence-1, evidence-2
**Background:** #f5efe5

### WHY this zone exists:
The content shifts from orientation to density here. Phases 1-2 identified
a FEEL->UNDERSTAND tension: the reader needs to feel confident enough to
absorb dense evidence. The zone boundary signals "now we go deep."

### Mechanisms deployed here:
- **Border-weight gradient (Hierarchy):** 3px left-border on callouts.
  WHY: The evidence sections contain confidence-rated claims. Border weight
  encodes confidence visually — thicker = more certain. This emerged from
  the FEEL axis (confidence-as-weight).

- **Dense/sparse alternation (Spatial):** Grid layout for evidence items,
  single-column for commentary between.
  WHY: Evidence is comparative (reader needs to see items side-by-side).
  Commentary is reflective (reader needs breathing room). The alternation
  is the UNDERSTAND axis expressing itself spatially.

### Builder warning:
Evidence-1 has 6 items. At 960px container with 2-column grid, each column
is ~440px. Items with long titles may exceed 80 CPL. Consider 3-column
for items with short content, 2-column for items with paragraph content.
```

**This preserves compositional intelligence without requiring the builder to read 337 findings.** The builder sees: what, how, why, and warning. The WHY is content-specific, not generic vocabulary.

**Cost:** _build-plan.md grows from ~200-400 lines to ~400-600 lines. The builder reads ~200 additional lines of reasoning. Given the builder already reads ~1,150 lines, this is a 17% increase for potentially significant quality improvement.

---

## 6. THE "NO SKILLS" BASELINE — CD-006's Challenge

### The Question

CD-006 scored 39/40 with NO skills, NO recipe, NO perception thresholds, NO programmatic gates. A single Opus builder with direct access to all reference files and a human iterating. Is the skill architecture CAUSING compression?

### Analysis

| Factor | CD-006 | PV2 Pipeline |
|--------|--------|-------------|
| Builder model | Opus | Opus |
| Human iteration | YES (multi-pass with feedback) | NO (fire-and-forget) |
| Recipe | NO | YES (650 lines) |
| Build context | Full (all reference files + conversation history) | Full (1,150 lines reference) |
| Perception gates | NO | YES (12 binary + 9 PA auditors) |
| Compositional reasoning | IN-CONTEXT (Opus derived it during conversation) | OUT-OF-CONTEXT (TC derived it, builder received conclusions) |
| Time | Unknown (likely 2-4 hours with iteration) | 75-215 min (autonomous) |

**The critical difference: compositional reasoning was IN-CONTEXT for CD-006.**

The Opus builder for CD-006 didn't receive a build plan from another agent. It derived the composition ITSELF, in the same context window, while building. The metaphor, zone architecture, mechanism selection, and CSS implementation all happened in ONE agent's reasoning chain. There was no TC -> Builder boundary to compress across.

### Is the Skill Architecture Causing Compression?

**Partially, yes.** The TC -> Builder boundary is a compression point that CD-006 didn't have. When TC derives a metaphor and the builder implements it, the builder is working with CONCLUSIONS, not REASONING. When one Opus agent does both, reasoning and implementation share a context window.

**But CD-006 also had human iteration.** The human could say "this section feels flat" and the Opus builder could revise. PV2's fix loop approximates this (PA identifies issues, builder fixes), but with screenshots-only feedback instead of conversational feedback.

### Implications for Skill Architecture

1. **The pipeline should NOT try to replicate CD-006's single-agent pattern.** CD-006 worked because of human-in-the-loop iteration. That's incompatible with fire-and-forget.

2. **The pipeline SHOULD maximize the builder's compositional context.** The annotated build plan (Section 5 above) partially addresses this. But there's a deeper question: should the builder READ TC's full derivation, not just its conclusions?

3. **The contrarian's 230-line alternative tests this.** If you give a single Opus builder soul gates + perception thresholds + "build this content into a designed page" + the full reference library, does it match CD-006? If yes, the skill pipeline is over-engineered. If no, the recipe's sequential phases provide structural value that creative freedom alone doesn't.

### My Assessment

CD-006 contradicts the recipe thesis but NOT the perception thesis. CD-006 didn't need a recipe because a skilled Opus with human feedback self-corrects. CD-006 DID need what PV2's perception layer provides — it's just that the human played that role.

**The skill architecture is justified for fire-and-forget. For human-in-the-loop builds, it's unnecessary overhead.**

---

## 7. RECOMMENDED SKILL PIPELINE ARCHITECTURE

### Architecture: Hybrid Structured + Prose with Reasoning Preservation

```
/build-page content.md
    |
    v
ORCHESTRATOR (~205 lines)
    |
    |-- [Wave 0] Invoke /tension-composition
    |       Input: content.md
    |       Output: _build-plan.md (ENHANCED — includes reasoning chain)
    |       Format: Markdown with structured sections
    |
    |-- [Wave 0.5] Spawn fresh-eyes metaphor validator
    |       Input: ONLY metaphor description from _build-plan.md
    |       Output: STRUCTURAL / ANNOUNCED verdict
    |       Gate: binary
    |
    |-- [Wave 0.9] Handoff Gate (orchestrator runs directly)
    |       Input: _build-plan.md
    |       Checks: 5 binary conditions
    |       Gate: all must PASS
    |
    |-- [Wave 1] Spawn Opus builder
    |       Input: 7 files (was 6 — add TC reasoning)
    |         1. operational-recipe.md (~650 lines)
    |         2. _build-plan.md with reasoning chain (~400-600 lines)
    |         3. tokens.css (174 lines)
    |         4. prohibitions.md (353 lines)
    |         5. merged-components.css (~500 lines)
    |         6. mechanism-catalog.md (~869 lines)
    |         7. perception-thresholds.md (~80 lines)
    |       Output: output.html + _cascade-value-table.md
    |
    |-- [Wave 2a] Run gate-runner.js (12 binary gates)
    |       Input: output.html
    |       Output: gate-results.json
    |       Parallel with Wave 2b
    |
    |-- [Wave 2b] Invoke /perceptual-auditing (Mode 4)
    |       Input: screenshots of output.html (pre-captured by lead)
    |       Output: _pa-report.md
    |       Parallel with Wave 2a
    |
    |-- [Wave 3] Fix loop (max 3 cycles)
    |       Input: gate-results + pa-report + output.html
    |       Output: revised output.html
    |
    v
OUTPUT: output.html + _pa-report.md + _build-log.md
```

### What Changes from Current PV2

| Change | Rationale | Size |
|--------|-----------|------|
| _build-plan.md includes reasoning chain | Preserves TC's compositional intelligence through the boundary | +200 lines to plan |
| perception-thresholds.md added as 7th builder input file | Builder currently has no direct access to threshold values | +80 lines to builder context |
| _cascade-value-table.md as required builder deliverable | "Prove it" artifact — measured coherence, not claimed | +50 lines builder output |
| Structured sections in _build-plan.md | Orchestrator can parse zones, mechanisms, transitions mechanically for handoff gate | Restructure, not addition |

### What Does NOT Change

1. **Skills remain leaves, not callers.** TC does not invoke PA. PA does not invoke TC. The orchestrator remains the sole coordinator.
2. **PA remains context-free.** The fresh-eyes principle is non-negotiable. PA auditors see ONLY screenshots.
3. **Builder remains a single Opus agent.** Multi-agent building creates contention and loses context continuity.
4. **Recipe format remains prose.** YAML/JSON schemas constrain builder creativity. The recipe's sequential phases provide enough structure.

### Skill Boundary Protocol

What crosses each boundary:

| Boundary | What Crosses | Format | Contract |
|----------|-------------|--------|----------|
| Orchestrator -> TC | content.md path | String | File must exist, be markdown, be readable |
| TC -> Orchestrator | _build-plan.md | Structured markdown with required sections | Must contain: zones[], mechanisms{category: []}, transitions[], metaphor{}, reasoning{} |
| Orchestrator -> Metaphor Validator | Metaphor description string | Prose paragraph | Extracted from _build-plan.md metaphor section |
| Orchestrator -> Builder | 7 file paths | File references | All files must exist at specified paths |
| Builder -> Gate Runner | output.html path | File reference | File must be valid HTML |
| Builder -> PA | Screenshots directory | PNG files | Pre-captured by orchestrator, minimum 10 screenshots |
| PA -> Orchestrator | _pa-report.md | Prose markdown with PA-05 score | Must contain: pa05_score (1-4), top_issues[], verdict |

### New Skills Needed?

| Proposed Skill | Verdict | Rationale |
|----------------|---------|-----------|
| /build-page orchestrator | YES — the 205-line skill | This is PV2's entry point |
| /gate-check programmatic verifier | NO — JS script, not a skill | gate-runner.js is code, not a cognitive pipeline |
| /metaphor-validate | NO — too small for a skill | 5-10 min binary check; inline in orchestrator logic |
| /fix-cycle | NO — orchestrator handles this | Fix loop is orchestrator logic, not compositional reasoning |
| /cascade-verify | MAYBE — deferred | If cascade value table verification becomes complex, extract. For now, builder self-checks. |

**Net: ONE new skill (/build-page). TC and PA remain as-is with minor enrichments.**

---

## 8. THE DEEPER QUESTION — DOES SKILL SEPARATION CAUSE THE PROBLEM?

### Thesis: Skill Boundaries Are Compression Points

Every skill boundary forces a serialization: one agent's context -> text artifact -> another agent's context. Text artifacts are lossy. The TC planner's 30-60 minutes of compositional reasoning are serialized into _build-plan.md. The builder reconstructs from this artifact, inevitably losing nuance.

This is the fundamental tradeoff of multi-agent systems: specialization (each agent is expert at its phase) vs continuity (one agent maintains full context).

### When Skill Separation Helps

1. **TC and Builder have different cognitive modes.** TC is creative-expansive (telescope). Builder is procedural-sequential (microscope). Asking one agent to switch modes mid-task degrades both modes.

2. **PA REQUIRES separation.** Fresh-eyes auditors MUST NOT have build context. This is not a compression problem — it's an intentional information barrier that improves quality.

3. **Fix loops require independent assessment.** If the builder self-assesses, continuation bias prevents honest evaluation.

### When Skill Separation Hurts

1. **The TC -> Builder boundary loses WHY.** Fixed by annotated build plan (Section 5).

2. **The builder cannot ask TC clarification questions.** The 5 mandatory checkpoints (Phases 0, 1, 3, 4, 8) create structured communication points, but these are one-way (builder outputs -> planner reviews). The builder cannot say "I'm in Phase 4 and this transition needs clarification — is it BRIDGE or BREATHING?" Solutions:
   - **File-bus bidirectional:** Builder writes `_builder-question.md`, planner reads and responds with `_planner-clarification.md`. Orchestrator monitors and routes.
   - **Blocker escalation:** Builder flags ambiguity in checkpoint output. Planner receives it at next checkpoint review.
   - **Pre-emptive clarity:** TC's enhanced _build-plan.md includes builder warnings and ambiguity notes per zone, reducing the need for clarification.

3. **The recipe is generic; the content is specific.** The operational-recipe.md is the same for every page. The content-specific intelligence lives only in _build-plan.md. This means 650 out of ~1,150 builder lines are content-AGNOSTIC. This is correct for procedural phases (HTML skeleton, CSS reset, accessibility) but suboptimal for creative phases (zone backgrounds, element-level richness, transitions).

### Recommendation: Keep Skill Separation, Enrich the Boundary Artifacts

The skill architecture is sound. The compression problem is at the BOUNDARIES, not in the ARCHITECTURE. Fix the boundaries:

1. **Annotated build plan** preserves TC reasoning (Section 5)
2. **Structured sections** enable mechanical validation at handoff gate
3. **Perception thresholds file** as direct builder input closes the threshold gap
4. **Cascade value table** as required deliverable creates a "prove it" artifact

Do NOT collapse TC + Build into one skill. The cognitive mode separation (telescope vs microscope) is genuinely valuable. The fix is richer boundary artifacts, not fewer boundaries.

---

## 9. SKILL INVOCATION CHAIN — FINAL ARCHITECTURE

```
USER: /build-page content.md

WAVE 0 (serial):
  /tension-composition(content.md)
  -> _build-plan.md (enhanced, ~400-600 lines)
  -> includes: zones, mechanisms, transitions, metaphor, reasoning chain

WAVE 0.5 (serial):
  Fresh-eyes validator(metaphor description only)
  -> STRUCTURAL | ANNOUNCED
  -> If ANNOUNCED: return to TC or FLAT mode

WAVE 0.9 (serial):
  Handoff gate(parse _build-plan.md)
  -> 5 binary checks
  -> If any FAIL: return to TC

WAVE 1 (serial):
  Opus builder(7 reference files)
  -> output.html + _cascade-value-table.md
  -> 5 mandatory checkpoints (planner reviews at phases 0, 1, 3, 4, 8)

WAVE 2 (parallel):
  gate-runner.js(output.html) -> gate-results.json
  /perceptual-auditing(screenshots) -> _pa-report.md

WAVE 3 (conditional, serial, max 3 cycles):
  If gates PASS + PA-05 >= 3/4: SHIP
  If gates PASS + PA-05 < 3/4: Builder fixes top-3 -> 2-PA re-check -> repeat
  If 3 cycles exhausted: ESCALATE to user

OUTPUT:
  output.html (~700-1500 CSS + ~500-1000 HTML lines)
  _pa-report.md (~200-400 lines)
  _build-log.md (TC output + gate results + timing)
```

### Timing Estimate

| Wave | Duration | Cumulative |
|------|----------|------------|
| Wave 0 (TC) | 30-60 min | 30-60 min |
| Wave 0.5 (metaphor check) | 5-10 min | 35-70 min |
| Wave 0.9 (handoff gate) | ~1 min | 36-71 min |
| Wave 1 (build) | 90-150 min | 126-221 min |
| Wave 2 (verify, parallel) | 30-45 min | 156-266 min |
| Wave 3 (0-3 fix cycles) | 0-60 min | 156-326 min |
| **TOTAL** | | **156-326 min** (2.5-5.5 hours) |

### Skills Inventory (Final)

| Skill | Status | Lines | Role |
|-------|--------|-------|------|
| /build-page | NEW | ~205 | Orchestrator (entry point) |
| /tension-composition | EXISTING (enriched) | ~1,878 + minor edits | Content analysis + composition planning |
| /perceptual-auditing | EXISTING (enriched) | ~848 + minor edits | Mode 4 perceptual verification |

**3 skills total. 2 existing, 1 new. No micro-skills, no YAML schemas, no structured data exchange beyond enhanced markdown with structured sections.**

---

## 10. ANSWERS TO THE 6 QUESTIONS

### Q1: Current Flow — How Do You Prevent Information Loss at Each Arrow?

**Arrow 1 (Research -> TC):** Already addressed. The 337 findings are distilled into reference files. TC reads the mechanism catalog with impact profiles. The compression is correct — not every finding applies to every page.

**Arrow 2 (TC -> Builder):** ENHANCE _build-plan.md with reasoning chain. Builder sees WHY, not just WHAT. +200 lines, 17% context increase.

**Arrow 3 (Builder -> PA):** DO NOT prevent this compression. Fresh-eyes isolation is quality-serving.

### Q2: Direct Routing — Should TC Outputs Go Directly to the Builder?

YES, they already do. _build-plan.md goes from TC to builder via orchestrator (orchestrator just validates, doesn't transform). The enhancement is making _build-plan.md RICHER, not changing the routing.

NO to CSS snippets from TC. TC is the telescope (declarative), builder is the microscope (procedural). TC should not write CSS.

### Q3: Skill Boundary Protocol — What Crosses Boundaries?

Enhanced markdown with structured sections. Not YAML, not JSON, not CSS snippets. The structured sections (zones[], mechanisms{}, transitions[]) enable mechanical validation at the handoff gate while preserving prose flexibility for reasoning chain and builder warnings.

### Q4: Invocation Without Compression — How Do You Invoke 337 Findings?

You don't invoke them at runtime. You pre-digest them into reference files (mechanism catalog, tokens, prohibitions, components). The builder reads the DISTILLED vocabulary. TC selects from the vocabulary for THIS content. The build plan bridges generic vocabulary and content-specific deployment.

### Q5: Skill Dependency Graph — What's the Minimal Serial Chain?

PLAN -> BUILD -> VERIFY. Three serial phases. Wave 0 (TC) is PLAN. Wave 1 is BUILD. Wave 2 (gates + PA) is VERIFY. Wave 3 (fix) is conditional. Only Wave 2's internal components (gate runner + 9 PA auditors) can run in parallel.

### Q6: The "No Skills" Baseline — Is the Skill Architecture Causing Compression?

PARTIALLY. The TC -> Builder boundary IS a compression point that CD-006 didn't have. But CD-006 had human iteration, which is incompatible with fire-and-forget. The skill architecture is justified for autonomous operation. For human-in-the-loop builds, a single Opus with full reference access would likely outperform the pipeline.

The honest answer: PV2's skill architecture trades ~10-15% quality (from boundary compression) for 100% autonomy (fire-and-forget). That's the right tradeoff for the stated goal.
