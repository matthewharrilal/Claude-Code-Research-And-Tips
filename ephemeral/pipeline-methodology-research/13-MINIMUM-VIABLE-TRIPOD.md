# 13: Minimum Viable Tripod Analysis

**Analyst:** analyst-mvt (Opus)
**Date:** 2026-03-01
**Task:** Determine the smallest version of all three instruments (master execution prompt, research package, curation process) that could work within the pipeline's cost/time constraints (<2 hours, <$30/build).
**Input:** 01-MASTER-FINDINGS.md, compose/SKILL.md, deep-build/SKILL.md, conventions-brief.md, pipeline/PV2-PIPELINE-DIAGRAM.md, 08-DIMENSIONAL-ARCHITECTURAL.md, 06-DIMENSIONAL-FUNCTIONAL.md

---

## 1. Current Pipeline Cost Baseline

Before defining "minimum viable," we need precise numbers on what exists.

### /compose Pipeline (Current Production)

| Agent | Model | Cost | Time | Purpose |
|-------|-------|------|------|---------|
| TC (1 agent) | Opus | $1-3 | 20-40 min | Tension-composition derivation |
| Builder (1 agent) | Opus | $2-5 | 30-60 min | HTML + CSS construction |
| 5 PA Auditors | Opus | $5-10 | 15-25 min (parallel) | Fresh-eyes perceptual audit |
| 1 Weaver | Opus | $1-2 | 10-15 min | Synthesize auditor findings |
| Fix cycles (1-3) | Opus | $2-15 | 15-45 min | Iterative improvement |
| **Total** | | **$11-35** | **1.5-3h** | |

### deep-build Pipeline v5 (Most Recent Full Run)

Empirical from 2026-03-01 run: **1h 40m, $28.79**, 8 Phase A passes + 3 PA cycles. This is the tightest real-world cost data we have.

### Budget Available for Tripod

If the total budget is <$30 and <2 hours, and the current pipeline already consumes $11-28 in 1.5-2 hours, the budget for ANY new mechanism is:

- **Cost headroom:** $2-19 (depending on current run cost)
- **Time headroom:** 0-30 minutes
- **Realistic budget for researcher agent:** $3-8 and 10-20 minutes

This is extremely tight. The minimum viable tripod must operate within this margin or it displaces existing pipeline steps.

---

## 2. Minimum Viable Master Execution Prompt

### What the Current Builder Gets

The builder currently receives (per /compose Phase 2):
- Content markdown (variable length)
- TC conviction brief (variable, NO LINE LIMIT per skill spec)
- tokens.css (124 lines)
- mechanisms.md (88 lines)
- grammar.md (149 lines)
- components.css (779 lines)
- components.md (37 lines)

The conventions-brief.md (610 lines) is a separate document used in the deep-build pipeline. It contains the "world description" — soul constraints, perception physics, multi-coherence rules, fractal echo protocol, transition grammar, CSS vocabulary, creative authority declaration, and the conviction card template.

### What Needs to Change

The master findings identify three things the builder needs but does not receive:

1. **Sequencing** — The builder gets mechanisms as a flat list. No ordering, no "do X before Y." The exploration era's research packages included sequenced build plans: "Step 1: establish zone backgrounds (chromatic). Step 2: set boundary typography (typographic channel). Step 3: add structural borders. Step 4: verify multi-coherence at each boundary."

2. **Absorption protocol** — The builder gets vocabulary but no protocol for HOW to consume it. The exploration-era FIX agents had a 5-step "Inline Threading Header Absorption Protocol." The builder needs an equivalent: read conviction brief FIRST (creative fuel), THEN vocabulary (tools), NEVER the reverse.

3. **Findings production** — The builder currently builds and discards. No mechanism to capture what was discovered during construction. Even simple findings production — "this metaphor worked well with bento-grid at zone 3 because the content had exactly 4 parallel items" — would feed forward to future builds.

### Could It Be 20 Lines of Additions?

Yes. Here is the minimum viable prompt addition:

```
SEQUENCING PROTOCOL (10 lines)
1. Read conviction brief. Internalize metaphor BEFORE touching vocabulary.
2. Write conviction card (from conventions brief template).
3. Plan zone architecture: count zones, name boundaries, declare direction at each.
4. Build BOUNDARY by BOUNDARY, not channel by channel. At each boundary,
   set ALL shifting channels simultaneously (bg + type + spacing + borders).
5. After midpoint: render and scroll. Strengthen weakest section.
6. After completion: answer the 5 questions from the conventions brief.

ABSORPTION PROTOCOL (5 lines)
- Conviction brief = WHY (creative fuel). Read FIRST, fully, before anything else.
- Vocabulary files = HOW (tools). Read SECOND, as implementation reference.
- If you read tools before creative fuel, you will compose FROM tools, not FOR conviction.
- Never let mechanism names drive layout decisions. The metaphor drives. Mechanisms serve.

FINDINGS LOG (5 lines)
After your build, in your reflection log, record:
- 1-3 discoveries: things you learned during construction that weren't in the brief
- 1-3 content-mechanism fits: which mechanisms served this content type particularly well
- 1-3 anti-patterns: what you tried and abandoned, and why
```

That is 20 lines. The conventions brief already contains MOST of this (the conviction card template, the 5 questions, the boundary-by-boundary instruction), but it is buried in 610 lines. The minimum viable change is: extract these 20 lines and place them at the TOP of the builder's input, before all vocabulary.

### Assessment

**Cost:** $0 (no additional agent, no additional time — just prompt restructuring)
**Time:** 0 minutes additional
**Risk:** Near zero. This is ordering and emphasis, not new capability.
**Expected impact:** MODERATE. Sequencing prevents the most common builder failure mode (starting with vocabulary, composing from tools). Findings production creates a feedback channel that currently does not exist. But this alone does not close the main gap — the builder still receives the same 7 generic files.

---

## 3. Minimum Viable Research Package

### What the Exploration Era's Research Package Contained

Agent-0C in the CD stage created 6 packages at 100-200 lines each, containing:
- Soul checklist (MANDATORY — 10-15 lines)
- Applicable research findings EMBEDDED, not referenced (30-60 lines)
- Stage findings relevant to the builder's specific exploration (20-40 lines)
- CSS examples matching the pattern being explored (30-60 lines)
- Anti-pattern checklist (10-20 lines)
- Implementation plans with expected evidence and constraint linkage (20-40 lines)

### Could a SINGLE Opus Agent Compile This in 5-10 Minutes?

Yes, with constraints. Here is what it would read and produce.

**What it reads (input):**
1. The TC conviction brief (~100-300 lines, already exists from Phase 1)
2. The content markdown (variable)
3. mechanism-catalog.md or mechanisms.md (88 lines — mechanism names + categories)
4. 2-3 targeted case studies from compositional-core/case-studies/ (selected by metaphor affinity — if TC metaphor is "geological," read OD-004 case study; if "fractal," read DD-006)
5. grammar.md (149 lines — compositional rules)

**Total input:** ~700-1,200 lines. Well within Opus context for a 10-minute task.

**What it produces (output): A research package of 80-150 lines containing:**

```
RESEARCH PACKAGE FOR [CONTENT NAME] — [METAPHOR NAME]
========================================================

## SOUL CHECKLIST (never skip)
- border-radius: 0 everywhere
- box-shadow: none everywhere
- No gradients, no semi-transparent backgrounds
- Container width 940-960px
- Typography trinity: Instrument Serif / Inter / JetBrains Mono
- Color palette: #E83025 / #FEF9F5 / #1A1A1A

## MECHANISM SELECTIONS (curated for this content + metaphor)
[5-8 mechanisms selected from the 20 available, with WHY each serves this content]
- border-weight gradient: Your geological metaphor implies stratification.
  Deploy 4px at deepest stratum, 3px at mid-levels, 1px at surface.
  Expected evidence: visible hierarchy from border weight alone.
- drop-cap: Opening section has a philosophical hook. Deploy in Zone 1 only.
  Expected evidence: editorial authority, reader entry point.
[etc.]

## ANTI-PATTERNS FOR THIS BUILD
[3-5 mechanisms deliberately NOT selected, with reasoning]
- scroll-triggered animations: content is contemplative, not performative
- nested grids: content structure is linear narrative, not modular
[etc.]

## IMPLEMENTATION-MAPPED PLAN
Zone 1 (opening): bg #FEF9F5, 64px padding, Instrument Serif h1,
  deploy drop-cap. Direction: OPENING. 2 channels.
Zone 2 (context): bg shift to #F0EBE3 (delta 18 RGB), padding 48px,
  border-left 3px. Deploy section-meta labels. Direction: DEEPENING. 3 channels.
Zone 3 (deep-dive): bg #FFFFFF (delta 28 RGB), 40px padding, bento grid
  for the 4 parallel examples. Deploy zone-internal parametric echo.
  Direction: FOCUSING. 4 channels.
Zone 4 (resolution): return to #FEF9F5, 64px padding, 1px borders.
  Direction: RESOLVING. 2 channels.

## CSS EXAMPLES (from prior explorations that used similar patterns)
[15-30 lines of actual CSS from validated explorations that demonstrate
the selected mechanisms in context, with source attribution]
```

### Assessment of 5-10 Minute Compilation

**What this timeline allows:** A single Opus agent reading ~1,000 lines and producing ~100-150 lines can do this in 5-10 minutes of wall-clock time ($1-3 in API cost). The agent does NOT traverse the full 100,000-word accumulated knowledge corpus. It reads:
- The conviction brief (already synthesized by TC)
- The mechanism catalog (already compressed)
- 2-3 case studies (already anti-prescription formatted)
- The compositional grammar

**What this timeline does NOT allow:** Deep traversal of R1-R5 research streams (150,000+ words). Bespoke EXT-* commissioned research. Multi-wave enrichment. Handoff protocol compilation. In other words, the minimum viable researcher skips Layers A, B, D, and E from the functional analysis (06-DIMENSIONAL-FUNCTIONAL.md) and operates only on Layers F and G (case studies + operational vocabulary), informed by the TC brief.

**The quality question:** Is Layer F + G + TC brief enough to produce a meaningfully BETTER research package than the current static 7-file dump?

**Answer: Yes, because the curation itself is the value.** Even if the researcher reads the same files the builder would read, the act of SELECTING 5-8 mechanisms from 20 and writing implementation-mapped plans with zone-specific CSS values transforms generic vocabulary into specific strategy. The builder receives "deploy border-weight gradient in Zone 2, 3px, encoding geological stratification" instead of "border-weight gradient encodes hierarchy." The mechanism name is the same. The implementation plan is new. That plan is the gap the master findings identified.

---

## 4. Minimum Viable Curation Process

### Option A: Simple Pattern-Match Pipeline

The cheapest curation process:

```
1. Read TC brief → extract metaphor name + structural concept
2. grep case-studies/ for metaphor keywords (geological → OD-004, fractal → DD-006)
3. Read matching case studies → extract relevant mechanism deployments
4. Cross-reference with mechanisms.md → select 5-8 mechanisms
5. Write implementation-mapped plan (zone-by-zone, CSS values, expected evidence)
```

This is essentially a structured grep + extraction + reformatting pipeline. It requires no deep interpretation, no philosophical reasoning, no multi-step analysis. An Opus agent could execute it mechanically in 3-5 minutes.

**Risk:** Pattern-matching may miss non-obvious connections. If the TC metaphor is "architectural scaffolding," a grep for "architectural" or "scaffolding" might miss the deep connection to OD-003 (task-based organization, which shares the progressive-assembly structure even though it never uses the word "scaffolding").

### Option B: Interpretive Curation (Single Agent, 10 Minutes)

```
1. Read TC brief → understand the STRUCTURAL LOGIC of the metaphor (not just its name)
2. Read ALL 9 case studies (not just keyword matches) → identify which PROCESSES
   share structural affinity with this metaphor's logic
3. Read mechanisms.md → for each mechanism, assess: does this serve the content's
   structure as revealed by TC? Rate HIGH / MEDIUM / LOW / OMIT.
4. For HIGH mechanisms: write implementation plan (zone, CSS values, expected evidence)
5. For OMIT mechanisms: write reasoning (restraint list for builder)
```

This requires interpretation — understanding that "geological stratification" shares structural logic with "confidence gradient" (OD-004) because both encode hierarchy through vertical progression, even though the metaphors are different.

**Cost:** $2-4. **Time:** 8-12 minutes.

### Option C: Depth-First Traversal (Single Agent, 20 Minutes)

```
1. Read TC brief → extract metaphor + structural implications
2. Read R5-COMBINATION-THEORY.md (39 findings on multi-pattern interaction)
3. Read 2-3 targeted case studies
4. Read grammar.md for sequencing rules
5. Compile a RICH package: mechanism selections, implementation plans, CSS examples,
   anti-patterns, AND structural propositions (hypotheses about how the metaphor
   should manifest at each scale)
```

This adds Layer A (one research stream) to the curation. R5 is chosen because it covers combination theory — how patterns interact — which is the level the builder operates at.

**Cost:** $3-6. **Time:** 15-20 minutes.

### Assessment: Which Level of Curation Is Worth It?

**Option A is too thin.** Grep-based keyword matching misses structural affinity. The whole point of the researcher is to bridge the gap between metaphor and mechanism — mechanical pattern matching reproduces the same flatness as the static file dump.

**Option B is the sweet spot.** Interpretive reading of all case studies + metaphor-aware mechanism selection produces meaningful curation without deep corpus traversal. The case studies (Layer F) are already anti-prescription formatted and contain the PROCESS information that makes curation valuable. 10 minutes and $2-4 is well within the budget margin.

**Option C is worthwhile only if Option B proves insufficient.** Adding R5 reading adds depth but also adds 10 minutes and $2. The marginal value over Option B is uncertain — R5's 39 findings are already distilled into mechanisms.md and grammar.md.

---

## 5. The Cheapest Experiment

### Protocol

The absolute minimum test to determine whether the tripod improves quality:

**Step 0: Select content.** Use the same content as a previous pipeline run (e.g., the Yegge Gas Town article used in pipeline v5). This allows direct comparison.

**Step 1: TC derivation (unchanged).** Run the existing TC pipeline to produce a conviction brief. ~20-40 minutes, $1-3.

**Step 2: Researcher agent (NEW).** Single Opus agent, 10 minutes:
- Input: TC brief, content markdown, all 9 case studies from `compositional-core/case-studies/`, mechanisms.md, grammar.md
- Task: Produce an 80-150 line research package with mechanism selections, implementation-mapped plans, CSS examples, and anti-patterns.
- Output: `_research-package.md`
- Cost: $2-4. Time: 8-12 minutes.

**Step 3: Builder with research package.** Same builder prompt as /compose Phase 2, BUT with two additions:
- The 20-line prompt additions (sequencing protocol, absorption protocol, findings log) at the TOP
- The research package from Step 2 inserted AFTER the conviction brief, BEFORE the vocabulary files
- Output: page.html + _reflection.md + _findings-log.md
- Cost: $2-5. Time: 30-60 minutes.

**Step 4: PA evaluation (unchanged).** Same 5-auditor PA protocol. Compare verdicts.

### Total Experiment Cost

| Step | Cost | Time |
|------|------|------|
| TC derivation | $1-3 | 20-40 min |
| Researcher agent (NEW) | $2-4 | 8-12 min |
| Builder (modified) | $2-5 | 30-60 min |
| PA evaluation | $6-12 | 25-40 min |
| **Total** | **$11-24** | **1.5-2.5h** |

This is WITHIN the existing cost envelope ($11-35). The researcher agent adds only $2-4 and 8-12 minutes to the baseline run.

### What to Compare

Run two builds of the same content:
1. **Control:** Standard /compose pipeline (TC → Builder → PA)
2. **Treatment:** /compose + researcher (TC → Researcher → Builder → PA)

Compare:
- PA verdicts (SHIP vs REFINE vs REBUILD)
- Weaver's experience portrait (experiential quality comparison)
- Mechanism deployment count and diversity
- Zone boundary channel-shift count (multi-coherence metric)
- CSS lines (a proxy for compositional richness — exploration-era avg was 517-980)
- Builder reflection (does the builder report feeling more directed?)
- Findings log (did the builder discover new things?)

### What This Does NOT Test

This experiment does NOT test:
- Findings production feeding forward to future builds (requires N>1 builds)
- Whether the researcher improves over time with accumulated page-building discoveries
- Whether TC should receive accumulated knowledge (separate question)
- Whether multi-pass (researcher between PA Pass 1 and REFINE builder Pass 2) is better than single-pass with researcher

These are second-order questions. The first-order question is: does a 10-minute researcher agent producing a curated package measurably improve a single build? If yes, the second-order experiments are warranted.

---

## 6. Spectrum of Investment

### Level 0: Prompt Restructuring Only ($0, 0 minutes)

**What:** Add the 20-line prompt addition (sequencing protocol, absorption protocol, findings log) to the builder's input. Reorder the conventions brief to put sequencing FIRST. No new agents. No new pipeline steps.

**Expected impact:** LOW-MODERATE. Prevents the "compose from tools" anti-pattern. Creates findings production (even if manually consumed). Does not close the curation gap.

**Best for:** Immediate deployment. Zero risk, zero cost. Should be done regardless of what follows.

### Level 1: Minimum Viable Researcher ($2-4, 10 minutes)

**What:** Single Opus agent between TC and Builder. Reads TC brief + case studies + mechanisms. Produces 80-150 line research package. Builder receives package between conviction brief and vocabulary files.

**Expected impact:** MODERATE-HIGH. Closes the curation gap for mechanism selection. Provides implementation-mapped plans. Does not add deep research traversal.

**Best for:** The cheapest experiment. Tests whether curation itself improves quality.

### Level 2: Enhanced Researcher ($4-8, 15-20 minutes)

**What:** Single Opus agent with expanded reading: TC brief + case studies + mechanisms + grammar + R5-COMBINATION-THEORY.md. Produces 150-250 line package including structural propositions, CSS examples from exploration corpus, and multi-coherence planning.

**Expected impact:** HIGH. Adds the structural proposition layer that TC does not produce. The researcher can generate hypotheses like "density should correlate inversely with confidence level" based on R5 findings.

**Best for:** Second experiment if Level 1 shows promise but package quality is too thin.

### Level 3: Multi-Pass with Researcher ($15-25, 45-60 minutes)

**What:** Two-pass architecture:
- Pass 1: TC → Builder (quick) → Mini-PA (3 auditors)
- Researcher reads PA findings + TC brief + case studies
- Pass 2: REFINE builder receives conviction brief + PA creative direction + research package
- Full PA (5 auditors + weaver)

This is the REFINE builder enhancement described in 08-DIMENSIONAL-ARCHITECTURAL.md. The researcher operates BETWEEN passes, using PA's findings from Pass 1 to TARGET its knowledge traversal.

**Expected impact:** VERY HIGH. Combines iterative improvement (two-instance pattern) with targeted knowledge curation. The researcher knows exactly what problems Pass 1 had and can recommend specific mechanisms to address them.

**Cost:** Adds $5-12 and 30-40 minutes to the baseline. Total cost: $27-53, 2.5-3.5 hours. This EXCEEDS the <$30/<2h budget for a single run, but is within the deep-build pipeline's demonstrated $28.79/1h40m range.

**Best for:** High-stakes builds where quality is worth the cost. Not the first experiment.

### Level 4: Full Replication ($50-150, 4-8+ hours)

**What:** Multi-session, multi-wave architecture mimicking the exploration era:
- Wave 1: TC + Builder + PA (as current)
- Wave 2: Researcher traverses full corpus (R1-R5, stage findings, explorations)
- Wave 3: Enhanced builder with comprehensive research package
- Wave 4: Multi-auditor PA (9 auditors, Mode 4)
- Wave 5: Findings production + accumulation
- Wave 6: Re-enrichment cycle

**Expected impact:** THEORETICAL MAXIMUM. This is what the exploration era did, compressed into a pipeline.

**Cost:** Completely outside the <$30/<2h envelope. The OD stage alone was ~149 agents over weeks. Even at pipeline speed, this is a multi-hour, multi-session endeavor.

**Best for:** Research into quality ceilings. NOT a production pipeline.

---

## 7. The REFINE Builder as Proto-Tripod

### What Pipeline v5's REFINE Builder Already Does

The REFINE builder in deep-build/pipeline v5 is the closest existing mechanism to a tripod instrument:

1. **Different Opus instance** — No continuation bias from the original builder
2. **Reads conviction + artistic only** — Sees the creative fuel (conviction brief) and the creative direction (PA's AMPLIFY/RELEASE/DEEPEN), never the gates
3. **Reads the current artifact** — Has the actual HTML to improve, not just instructions to build from scratch
4. **Higher capability** — max-turns=25, full tools (Read/Write/Edit/Bash/Glob/Grep)

### What the REFINE Builder Lacks (Why It Is NOT a Tripod)

1. **No historical knowledge.** The REFINE builder knows "PA said whitespace voids exist in zone 3" but does NOT know "DD-005's tidal rhythm at 48px/24px solved this exact problem, and OD-006's breathing zones used 5 distinct backgrounds with 18+ RGB deltas between each."

2. **No implementation maps.** The REFINE builder receives the PA weaver's creative direction ("the opening zone wants more warmth") but NOT a mechanism-specific recommendation ("deploy parametric echo — tighter component padding in zones 2-3, looser in zone 1, achieving warmth through spatial confidence rather than chromatic shift").

3. **No structural propositions.** The REFINE builder cannot generate "density should inversely correlate with confidence" because it has never seen the exploration where that discovery was made.

4. **No content-specific mechanism routing.** The REFINE builder has the same generic vocabulary as the original builder. It does not receive "these 5 mechanisms serve narrative content particularly well" vs "these 5 mechanisms serve modular content."

### The REFINE Builder IS One Leg of the Tripod

The tripod (from 01-MASTER-FINDINGS.md) has three legs:
1. Master execution prompt (sequencing + absorption + findings)
2. Researcher/curation layer (knowledge traversal + per-build package)
3. Builder that consumes curated knowledge (implementation execution)

The REFINE builder is leg 3 with a partial version of leg 1 (it receives conviction + artistic direction, which is a form of sequencing). What it completely lacks is leg 2 — the curated research package.

### Minimum Change to Make REFINE a Full Tripod

Insert a researcher agent BETWEEN the PA weaver and the REFINE builder:

```
Current REFINE flow:
  Builder → PA (5 auditors + weaver) → REFINE builder (conviction + PA direction + artifact)

Tripod REFINE flow:
  Builder → PA (5 auditors + weaver) → RESEARCHER (TC brief + PA direction + case studies)
                                             ↓
                                       Research Package
                                             ↓
                                       REFINE builder (conviction + PA direction + package + artifact)
```

The researcher reads:
- The TC brief (knows the metaphor)
- The PA creative direction (knows what's working and what's not)
- The case studies (has structural precedents)
- mechanisms.md + grammar.md (has the vocabulary)

And produces a TARGETED package: "PA found whitespace voids in zones 3-4. In prior explorations, this was solved by [specific mechanisms with specific CSS values]. PA found typography is monotone. OD-004 achieved typographic variety through [specific approach]. Here is your implementation plan for the refinement pass."

**Cost of this change:** $2-4 and 8-12 minutes. The REFINE flow already takes 30-60 minutes for the full PA + REFINE cycle. Adding 10 minutes of researcher time is a 15-25% time increase on the fix cycle, not on the total pipeline.

---

## 8. Risk: When Is "Minimum Viable" Too Thin to Help?

### The Quality Floor for Research Packages

A research package that is TOO thin actively hurts by:
1. **Creating false precision.** If the researcher says "deploy border-weight gradient at zone 2" but the recommendation is poorly considered, the builder follows bad advice instead of using creative judgment.
2. **Reducing creative authority.** The builder currently has 80% creative authority. A thin research package could narrow this to 40% if the builder treats every recommendation as mandatory.
3. **Adding cost without value.** If the package merely restates what the builder would have done anyway (picks the obvious mechanisms for the obvious reasons), it consumed $2-4 and 10 minutes for zero improvement.

### Indicators That the Package Is Too Thin

- **Fewer than 5 mechanism selections.** The builder needs enough vocabulary to compose, not just 2-3 mechanisms.
- **No CSS examples.** Mechanism names without CSS are the current gap. If the package also gives names without CSS, it reproduces the problem.
- **Generic advice.** "Use multi-coherence at zone boundaries" is already in grammar.md. The package must add SPECIFIC recommendations (which channels, which values, which direction).
- **Wrong affinity matching.** If the package recommends bento grid for linear narrative content because a keyword matched, the curation is worse than no curation.

### Indicators That the Tripod Is Working

- **Builder's findings log has entries.** The builder discovered things during construction — this means the absorption protocol is working.
- **CSS lines increase.** Exploration-era average was 517-980 CSS lines. Pipeline builds average 800+. If tripod builds increase, the richer input is producing richer output.
- **PA verdicts improve.** More SHIP verdicts, fewer REBUILD verdicts.
- **Mechanism diversity increases.** Current builds deploy mechanisms from 3-4 of 5 categories. If tripod builds deploy from all 5, the per-category routing is working.
- **Builder reports feeling directed.** The builder's reflection says things like "the research package pointed me to parametric echo, which I wouldn't have considered" — this means the curation added value the builder didn't have.

### The Absolute Floor

Below this, the tripod is too thin to help:

- Researcher reads ONLY TC brief + mechanisms.md (misses case studies → no structural precedents)
- Package is < 50 lines (too compressed to contain implementation maps)
- Package has 0 CSS examples (reproduces the name-without-plan problem)
- Researcher spends < 3 minutes (not enough time to read case studies)

The minimum viable researcher must read at least TC brief + 2-3 case studies + mechanisms.md, spend at least 5 minutes, and produce at least 80 lines with CSS examples. Below this, the cost/benefit ratio inverts.

---

## 9. Recommendations

### Immediate (Zero Cost, Zero Risk)

1. **Add 20-line prompt restructuring to /compose builder prompt.** Sequencing protocol, absorption protocol, findings log. This is pure ordering and emphasis — the content already exists in conventions-brief.md but is buried.

2. **Add findings log to builder reflection.** The builder already produces a 6-dimension reflection. Add a 7th dimension: "Discoveries — things you learned during construction that weren't in the brief." This creates the findings channel that currently does not exist.

### First Experiment (Level 1: $2-4, 10 Minutes)

3. **Run the cheapest experiment.** Same content as a previous build (Yegge Gas Town). Add a single researcher agent between TC and Builder. Researcher reads TC brief + all 9 case studies + mechanisms.md + grammar.md. Produces 80-150 line research package. Builder receives it after conviction brief, before vocabulary. Compare PA verdicts against control run.

4. **Evaluate on 5 metrics:** PA verdict, mechanism diversity, CSS lines, builder-reported direction, and findings log content.

### Second Experiment (If Level 1 Shows Promise)

5. **Test Level 3: Multi-pass with researcher.** Add researcher between PA Pass 1 and REFINE builder. This tests whether TARGETED curation (informed by PA findings) is more valuable than GENERAL curation (informed only by TC brief). This is the highest-leverage single change because the REFINE builder already exists and already receives conviction + artistic direction.

### Do NOT Do Yet

6. **Full corpus traversal (Level 4).** The data does not yet support investing $50-150 in a single build. Test Levels 1 and 3 first. If both show improvement, Level 4 becomes a research question, not a production pipeline.

7. **TC modification.** The TC agent is explicitly isolated from accumulated knowledge for good reason (preventing creative contamination). Do not give TC access to case studies or research findings until the researcher experiment proves that the VALUE of historical knowledge outweighs the RISK of creative contamination. These are separate architectural questions.

---

## 10. Summary: The Minimum Viable Tripod

| Component | Minimum Viable Version | Cost | Time | Lines |
|-----------|----------------------|------|------|-------|
| Master execution prompt | 20-line addition to builder prompt | $0 | 0 min | 20 lines added |
| Research package | Single Opus agent reads TC brief + case studies + mechanisms | $2-4 | 8-12 min | 80-150 lines produced |
| Curation process | Option B: interpretive reading of all case studies + metaphor-aware mechanism selection | $2-4 | 8-12 min | (same agent as research package) |
| **Total tripod addition** | | **$2-4** | **8-12 min** | **20 lines added + 80-150 produced** |

The minimum viable tripod adds 1 agent, $2-4, and 8-12 minutes to the existing pipeline. It fits within the <$30/<2 hour constraint for any build that currently costs <$26 and runs <1h48m.

The cheapest experiment costs $11-24 total (WITHIN the existing cost envelope) and produces a direct comparison against the control pipeline. If the PA verdicts improve, the tripod is viable. If they do not, the loss is $2-4 and 10 minutes — the cost of a single additional agent call.

The risk is not wasted money. The risk is wasted COMPLEXITY — adding a pipeline step that persists even if it does not help. The experiment design mitigates this: run once, compare, decide. No permanent infrastructure until the data supports it.
