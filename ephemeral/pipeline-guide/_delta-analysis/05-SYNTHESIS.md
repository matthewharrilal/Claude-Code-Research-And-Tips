# 05 -- SYNTHESIS: What Is the Delta Between the PV2 Diagram and the Implementation Guide?

**Purpose:** A plain-language answer for someone who hasn't read either document.
**Sources synthesized:** Inventories 01-04 in this directory, plus both source documents.

---

## THE ONE-PARAGRAPH ANSWER

The PV2 diagram is a **1,354-line reference architecture** that describes everything the pipeline COULD be — five different builder approaches, two top-level architectures (a multi-agent linear pipeline and a single-agent "Fat Core"), extensive theory about why intelligence gets lost between agents, and a set of experiments to determine which approach actually works. The implementation guide is a **1,997-line step-by-step manual** that picks ONE of those approaches (Fat Core), builds a concrete implementation plan around it, and sequences the work so you can stop early if the simplest approach turns out to be sufficient. Running the guide's Experiment C tests the Fat Core architecture, which is the PV2 diagram's **recommended** path — but it is roughly **60% of what the diagram describes**. The other 40% belongs to the multi-agent linear pipeline, which Fat Core replaces.

---

## 1. IS FAT CORE (EXPERIMENT C) THE SAME AS THE FULL PV2 PIPELINE?

**No.** Fat Core is one of five architecture variants the PV2 diagram describes. The diagram recommends it (based on evidence from 50+ research reports), but also documents the full Linear Pipeline alternative in equal detail.

**What Experiment C tests:**
- One Opus agent that plans AND builds (no planning-to-building handoff)
- A thin orchestrator that routes files and runs quality checks
- 15 automated quality gates organized into 3 groups
- 9 independent auditors who evaluate the output with fresh eyes
- A fix cycle (up to 3 rounds) where the SAME builder corrects issues

**What Experiment C does NOT test:**
- A separate planning agent (TC Planner) that produces a detailed build plan
- Handoff artifacts: Transition Table (YAML specifying exact CSS values per zone boundary) and Fractal Echo Table (how the visual pattern appears at 5 different zoom levels)
- A 9-phase structured build sequence with quality checks between each phase
- A mid-build "observation pause" where the builder stops to assess its own work
- A "flat mode" for content that lacks natural visual tension
- An escalation path for upgrading 3/4 quality to 4/4

**Why Fat Core drops these:** The core insight from the research is that splitting planning and building between separate agents causes a ~65% intelligence loss at the handoff. The Transition Table, Fractal Echo Table, and Handoff Gate all exist to REDUCE that loss. Fat Core ELIMINATES the handoff entirely — the same agent that understands the content writes the CSS. This makes the compression-fighting artifacts unnecessary.

---

## 2. HOW MANY DISTINCT "THINGS" ARE THERE?

### Three levels to understand:

**Level A — Architectures (how agents are organized):**

| Architecture | Agents | Key Idea | Tested? |
|-------------|--------|----------|---------|
| **Linear Pipeline** | 12-14 (planner + builder + gates + 9 auditors + weaver) | Separate planning from building, bridge the gap with artifacts | N=0 (untested) |
| **Fat Core** | 12 (orchestrator + core agent + 9 auditors + weaver) | One agent plans AND builds, verify the output | N=0 (untested) |
| **Single Opus** | 1 + PA | One agent with minimal instruction, verify the output | N=0 (untested) |

**Level B — Builder instruction formats (what the builder reads):**

| Format | Lines | Key Idea |
|--------|-------|----------|
| **Checklist** | ~530 | Long list of requirements (what NOT to do). Led to 1.5/4 quality. |
| **Recipe** | ~650 | Step-by-step cooking instructions (what to do, in order). Led to 2.5/4. |
| **Conventions Brief** | ~100 | Short principles document (WHY + creative freedom). Projected 3-4/4. |
| **Hybrid** | ~650 | Recipe for structure, conventions for composition. Untested. |

**Level C — Experiments (which combinations to test):**

| Guide Label | What It Tests | Architecture | Instruction | Infrastructure Needed |
|-------------|--------------|-------------|-------------|----------------------|
| **Exp A** | Absolute baseline | Single Opus | 42-line minimal prompt | Nothing (just the agent) |
| **Exp B** | Does the conventions brief help? | Single Opus | Conventions Brief (~100 lines) | Foundation edits + conventions brief only |
| **Exp C** | Does the verification shell help? | Fat Core | Conventions Brief (~100 lines) | Full pipeline (orchestrator + gates + PA) |
| **Exp D** | Does a recipe help or hurt? | Fat Core | Recipe (~650 lines) | Full pipeline + recipe |
| **Exp E** | Head-to-head tiebreaker | Fat Core x2 | Brief vs Recipe, blind comparison | Full pipeline + recipe |

---

## 3. WHAT EXACTLY DOES EACH EXPERIMENT TEST, MAPPED TO THE PV2 DIAGRAM?

### Experiment A: The Naked Test ($5, ~1 hour)

**Diagram equivalent:** Not explicitly in the diagram's final experiment list, but closest to "EXP E" (Single Opus, No Pipeline).

**What it proves:** Whether a single capable AI agent, given only the content and 42 lines of basic identity rules, can produce a well-designed page WITHOUT any pipeline infrastructure.

**If it scores >= 3.0/4:** The entire pipeline is unnecessary overhead. This would be the biggest finding — months of research produced a system that doesn't improve on a smart agent working alone.

**PV2 components tested:** 0 out of ~23. This tests the NULL HYPOTHESIS.

### Experiment B: The $5 Conventions Test ($5-10, ~2 hours)

**Diagram equivalent:** Diagram's "Experiment A" (final section) / "EXP E" (earlier section).

**What it proves:** Whether a 100-line document distilling the key principles (perception thresholds, soul constraints, spatial rules, quality floor, creative authority) is enough to guide a single agent to good results.

**If it scores >= 3.0/4:** No orchestrator, no automated gates, no fix cycles needed. The conventions brief IS the pipeline. Total implementation: 2 files (~200 lines), done in a day.

**PV2 components tested:** 2 out of ~23 (conventions brief + perception thresholds embedded in it).

### Experiment C: Fat Core Full Test ($30-50, ~4 hours)

**Diagram equivalent:** Diagram's "Experiment B" (final section) / "EXP D" (earlier section).

**What it proves:** Whether adding an orchestrator, 15 automated quality gates (catching measurable issues like wrong colors or missing structure), 9 independent auditors, and a fix cycle improves quality over Experiment B.

**If it scores >= B + 0.5:** Fat Core is the architecture. Build and ship it.

**PV2 components tested:** ~14 out of ~23. Covers: `/build-page` entry point, orchestrator, single core agent, 15 gates in 3 groups, 9 PA auditors, weaver, fix cycles, conventions brief, gate runner, perception thresholds, screenshot capture, 3-file output, creative authority clause.

**PV2 components NOT tested:** TC Planner, Transition Table, Fractal Echo Table, Phase 4T, Metaphor Validator, Handoff Gate, 9-phase build, micro-gates, observation pause, flat mode, convention escalation, recipe template.

### Experiment D: Full Recipe Test ($30-50, ~4 hours)

**Diagram equivalent:** Diagram's "EXP B" (earlier section) / "Experiment C" (final section).

**What it proves:** Whether giving the builder a detailed 650-line recipe (step-by-step instructions with exact CSS values) produces better or worse results than the 100-line conventions brief.

**If Recipe < Brief:** The "recipe ceiling" hypothesis is confirmed — detailed instructions CAP quality by constraining creativity.

**PV2 components tested:** Same as Exp C, plus the recipe instruction format.

### Experiment E: Head-to-Head ($40-80, ~6 hours)

**Diagram equivalent:** No direct equivalent. The diagram mentions EXP C (Hybrid) which the guide drops in favor of this.

**What it proves:** A blind A/B comparison between conventions brief and recipe, same content, same infrastructure, removing all confounds.

---

## 4. WHAT IS THE MINIMUM TO BUILD FOR EACH EXPERIMENT?

| Experiment | Files to Create | Files to Edit | Lines of New Code | Time to Prepare | Total Cost |
|-----------|----------------|---------------|-------------------|----------------|------------|
| **Exp A** | 0 | 0 | 0 | 0 | ~$5 |
| **Exp B** | 1 (conventions-brief.md) | 3 (tokens.css, semantic-rules.md, PA SKILL.md) | ~165 | 2-3 hours | ~$5-10 |
| **Exp C** | 5 (brief + perception-thresholds + gate-runner + gate-registry + SKILL.md) | 6 (tokens.css, semantic-rules.md, PA SKILL.md, TC SKILL.md, 2x CLAUDE.md) | ~1,250 | 12-18 hours | ~$30-50 |
| **Exp D** | Same as C + recipe file | Same as C | ~1,900 | 14-20 hours | ~$30-50 |
| **Exp E** | Same as D | Same as D | Same as D | Same as D | ~$40-80 |

**The guide's genius move:** It sequences these so you can STOP EARLY. If Experiment B (costing ~$5) scores 3.0+, you skip Experiments C-E and save $100+ and 2 days. The guide calls this the "Fast Path."

---

## 5. WHAT IS THE MAXIMUM THE PV2 DIAGRAM ENVISIONS?

If you built EVERYTHING the PV2 diagram describes (both architectures, all artifacts, all experiments), you would need:

| Category | Items | Lines |
|----------|-------|-------|
| Fat Core implementation | Orchestrator, conventions brief, gates, gate registry, perception thresholds | ~1,250 |
| Linear Pipeline additions | TC narrowing (1,878->660), operational recipe template, transition table schema, fractal echo template, handoff gate, micro-gates, metaphor validator, flat mode handler, escalation protocol | ~2,000 |
| All 5 experiments | Run each with Mode 4 PA evaluation | ~$110-195, ~2 days |
| Post-experiment codification | Codify whichever architecture wins | Variable |

**Total maximum:** ~3,250 lines of new/edited code + ~$110-195 in experiment costs + ~40-60 hours of work.

**But the diagram itself says NOT to build all of this.** Its Master Synthesis Verdict recommends Fat Core and says to DEFER the Linear Pipeline components "until experiments prove value." The guide follows this recommendation.

---

## 6. IF EXPERIMENT X WINS, YOU BUILD THIS MUCH

```
EXPERIMENT RESULTS --> WHAT YOU BUILD
========================================

Exp A >= 3.0/4
    STOP. Build NOTHING.
    The agent is good enough alone.
    Total code: 0 lines
    Total cost: ~$5
    What this means: The entire pipeline research was unnecessary.
    PV2 diagram coverage: 0%

Exp B >= 3.0/4
    Build the FAST PATH.
    Total new code: ~165 lines (1 file + 3 edits)
    Total cost: ~$10-15
    What you ship: conventions-brief.md + foundation edits
    What this means: A 100-line document IS the pipeline.
    PV2 diagram coverage: ~10%

Exp C >= B + 0.5 (and B < 3.0)
    Build FAT CORE.
    Total new code: ~1,250 lines (5 files + 6 edits)
    Total cost: ~$50-75
    What you ship: /build-page orchestrator + conventions brief +
                   gate runner + gate registry + perception thresholds
    What this means: Automated verification adds measurable value.
    PV2 diagram coverage: ~60%

Exp D > C
    Build FAT CORE + RECIPE.
    Total new code: ~1,900 lines (6 files + 6 edits)
    Total cost: ~$80-125
    What you ship: Everything in Fat Core + recipe template +
                   possible TC narrowing for recipe generation
    What this means: Detailed instructions help even a capable agent.
    PV2 diagram coverage: ~75%

ALL < 3.0
    INVESTIGATE.
    Something fundamental is wrong.
    Do NOT build more infrastructure.
    Re-examine assumptions.
    PV2 diagram coverage: N/A
```

### Visual Summary

```
                      WHAT GETS BUILT
                      ═══════════════

PV2 Diagram Total:    ████████████████████████████████████ 100%
                      |                                    |

Exp A wins (0 lines): ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   0%

Exp B wins (165 ln):  ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10%
                      ^-- conventions brief + edits

Exp C wins (1,250):   ████████████████████░░░░░░░░░░░░░░░  60%
                      ^-- Fat Core: orchestrator, gates,
                          PA shell, conventions brief

Exp D wins (1,900):   █████████████████████████░░░░░░░░░░  75%
                      ^-- Fat Core + recipe template

Full PV2 (3,250):     ████████████████████████████████████ 100%
                      ^-- Both architectures + all artifacts
                          (NOT RECOMMENDED by the diagram itself)
```

---

## 7. THREE CONTRADICTIONS TO BE AWARE OF

The guide mostly follows the PV2 diagram faithfully, but three contradictions exist:

### 7a. Tier Routing

- **PV2 diagram says:** "ALWAYS FLAGSHIP. No tier routing. No classification. Every page gets maximum intensity."
- **Guide says:** The orchestrator "classifies tier (Floor/Middle/Ceiling/Flagship)" and "Floor pages skip TC. Middle pages skip metaphor."
- **Impact:** Some pages might get reduced treatment under the guide's approach, which is exactly what the diagram's directive was designed to prevent. This needs a decision: follow the diagram (all pages get full treatment) or follow the guide (tiered treatment based on content complexity).

### 7b. Core Agent Input Files

- **PV2 diagram says:** The core agent receives 8 files including the mechanism catalog (18 mechanisms, full reference).
- **Guide says:** The core agent receives 4 files: conventions brief + tokens + prohibitions + content (~230 lines). No mechanism catalog.
- **Impact:** The builder has less reference material under the guide's approach. This is intentional (the research found quality INVERSELY correlates with input volume), but it means the builder can't look up specific mechanisms. This needs a decision: include the catalog or trust the agent's training.

### 7c. Gate Threshold Details

- **PV2 diagram says:** SC-03 checks "Only 3 allowed fonts" (exclusion). SC-11 checks ">= 2px delta" (single threshold).
- **Guide says:** SC-03 checks ">= 2 font families from trinity" (presence). SC-11 checks "display-body >= 10px delta, body-detail >= 2px" (two thresholds).
- **Impact:** The guide's SC-03 is more permissive (allows non-trinity fonts as long as 2+ trinity fonts are present). The guide's SC-11 is stricter (adds 10px requirement for display vs body). These are implementation details, but they affect what passes and fails.

---

## 8. THE BOTTOM LINE

**The guide is a faithful implementation of the PV2 diagram's recommended path.** It correctly:
- Chooses Fat Core (the diagram's recommended architecture)
- Sequences experiments cheapest-first with early exit
- Defers infrastructure until experiments prove it's needed
- Adds operational detail the diagram doesn't provide

**The gap between them is mostly intentional.** The ~40% of the PV2 diagram that the guide doesn't implement belongs to the Linear Pipeline architecture, which Fat Core replaces. Building that 40% would only be necessary if Fat Core fails AND the Linear Pipeline is specifically identified as the fix — which the research evidence suggests is unlikely.

**The three contradictions (tier routing, core agent input, gate thresholds) are real but resolvable.** They represent implementation decisions the guide made that differ from the diagram's specifications. Each needs a conscious decision rather than defaulting to either document.
