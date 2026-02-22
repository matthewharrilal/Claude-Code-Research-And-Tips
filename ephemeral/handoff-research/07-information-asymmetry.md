# Information Asymmetry Across the /build-page Pipeline

**Date:** 2026-02-20
**Scope:** Map what each agent KNOWS vs NEEDS TO KNOW. Identify critical gaps where information exists in the pipeline but does not reach the agent that needs it.

**Source files analyzed:**
- `~/.claude/skills/build-page/SKILL.md` (486 lines)
- `~/.claude/skills/tension-composition/SKILL.md` (~1,612 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (994 lines)
- `design-system/pipeline/conventions-brief.md` (584 lines)
- `design-system/pipeline/gate-runner.md` (1,160 lines)

---

## 1. AGENT-BY-AGENT INFORMATION MAP

### 1.1 Orchestrator (build-page SKILL.md)

**KNOWS:**
- Content file path and output directory
- Full pipeline architecture (which agents to spawn, in what order)
- TC brief structure (8 required sections, 80-120 lines)
- Builder deliverable requirements (3 files: output.html, _build-log.md, _cascade-value-table.md)
- Complete gate runner specification (22 gates, all thresholds, all JS)
- PA question assignments (which auditor gets which questions)
- Lock sheet generation logic (LOCKED Soul / LOCKED Research / CHALLENGEABLE Builder)
- Fix cycle routing rules (MECHANICAL / STRUCTURAL / COMPOSITIONAL)
- Success bar (PA-05 >= 3.5 AND Tier 5 >= 7/9)
- TC re-invocation trigger conditions (PA-44 + PA-68 fail across 2+ cycles)

**NEEDS TO KNOW:**
- Everything above (it has it)
- Quality of intermediate outputs to make real-time routing decisions

**GAPS:**
1. **No quality assessment of TC brief before forwarding to builder.** The orchestrator verifies the TC brief EXISTS and contains all 8 sections, but never evaluates whether the metaphor is STRUCTURAL or whether the mechanism selections are sufficient. BG-1 and BG-2 are checked AFTER the build, not before. A weak TC brief propagates silently into a weak build.
2. **No visibility into builder's mid-build state.** The orchestrator waits for the builder to complete, then runs gates. It cannot intervene during the build. The micro-gate schedule (MG-1 through MG-4) exists in gate-runner.md but is described as running "between build phases" -- there is no mechanism in the orchestrator's prompt for mid-build gate injection. The builder is told to self-check at 3 checkpoints, but these are honor-system.
3. **No learning across pipeline runs.** The orchestrator has zero memory of previous builds. It cannot say "the last 3 builds all failed SC-09 at Z2-Z3 -- pre-warn the builder." Each run starts from zero.

---

### 1.2 TC Agent

**KNOWS:**
- Full TC SKILL.md (~1,612 lines): 5 phases, 14 axes, tension derivation, metaphor collapse, mechanism selection
- Content file (read completely)
- mechanism-catalog.md (mechanism vocabulary for Phase 4 selection)
- prohibitions.md (soul constraints -- what builder cannot override)
- tokens.css (available CSS variables and palette)

**NEEDS TO KNOW:**
- Content deeply enough to derive genuine tension (it has this)
- Available mechanisms and their CSS implications (it has this via mechanism-catalog)
- Perception thresholds (to ensure selected mechanisms will be VISIBLE)

**GAPS:**
1. **TC does not know perception thresholds.** The TC brief selects mechanisms and proposes zone architecture, but has zero knowledge of the perception physics from conventions-brief.md Section 2. TC might propose 4 zones with backgrounds that are conceptually distinct but RGB-close, leaving the builder to discover the problem at build time. The TC SKILL.md mentions "metaphor-implied CSS directions" as an output section, but provides no perception floor values.
2. **TC does not know previous failed metaphors.** In TYPE C fix cycles, the orchestrator re-spawns TC with "the same content + builder's _build-log.md showing what went wrong." But the build log shows what the BUILDER did wrong, not necessarily what was wrong with the METAPHOR. The TC agent gets the builder's failure evidence but not a diagnosis of WHY the metaphor failed (IMPLEMENTATION vs STRUCTURAL vs COVERAGE). The weaver classifies the failure type, but the weaver's classification does not flow back to TC.
3. **TC does not know the conventions brief.** The builder's entire world model (584 lines of compositional intelligence: multi-coherence, fractal echo, transition grammar, CSS vocabulary, creative authority) is invisible to TC. TC derives a metaphor in a vacuum, then hands it to a builder who operates in a different conceptual universe. The metaphor might suggest things that conflict with the conventions brief's transition grammar, or miss opportunities the brief describes.
4. **TC does not know what the builder CAN do well.** TC's mechanism selection in Phase 4 is based on content-mechanism fit. It does not account for which mechanisms are EASY vs HARD for Opus builders to implement in CSS. Some mechanisms (e.g., parametric echo across zones) require sophisticated conditional CSS that builders historically struggle with. TC cannot select for feasibility because it does not know builder capabilities.

---

### 1.3 Builder (Opus)

**KNOWS:**
- TC brief (_tc-brief.md): 80-120 lines. Metaphor, zone architecture, content tensions, selected mechanisms, CSS directions, build recipe, detection expectations (marked WEAVER-only), builder anchors (3 guardrails)
- conventions-brief.md: 584 lines. Identity, perception, richness, multi-coherence, fractal echo, unified metaphor, transition grammar, CSS vocabulary, creative authority, quality floor, compositional memory, five questions, restraint list, accessibility, responsive behavior, conviction card, process flow
- Content file (the material to compose)
- mechanism-catalog.md (reference file, consulted as needed)
- components.css (component library, consulted as needed)
- tokens.css (CSS variable values)
- prohibitions.md (soul constraints, read LAST before CSS begins)

**NEEDS TO KNOW:**
- What CSS to write and why (it has a strong foundation for this)
- Perception thresholds (it has this from conventions-brief Section 2)
- What "good" looks like at each scale (it has fractal echo guidance)
- What NOT to do (it has the restraint list and prohibition set)

**GAPS:**
1. **Builder does not see gate runner thresholds.** The builder knows perception thresholds from the conventions brief (>= 15 RGB, >= 2px font-size, etc.) but does not know the EXACT gate runner checks. Gate SC-13 measures multi-coherence at zone boundaries by comparing the LAST child element of one zone with the FIRST child element of the next zone. The builder writes zone-level CSS, not element-level. If the last child inherits unexpected styles, SC-13 measures something the builder never intended. The builder cannot optimize for the measurement methodology because it does not know the methodology.
2. **Builder does not see previous PA reports.** On a first build, this is by design. But in fix cycles 2-3, the builder receives fix instructions compiled by the orchestrator from the weaver's report, not the raw auditor quotes. There is information loss: 9 auditors produce rich perceptual descriptions, the weaver synthesizes to Top-5, and the orchestrator further compresses to fix instructions. The builder gets directions ("reduce gap between zone 2 and 3") but not the auditor's perceptual experience ("the page feels like it drops into a void here -- momentum dies").
3. **Builder does not know what the PA auditors will evaluate.** The builder knows the conventions brief and the 5-question self-check. It does not know the 65 PA questions, the Tier 5 rubrics, the void prevention tier, or the sub-perceptual detection questions. This is PARTIALLY by design (avoid audit optimization), but it means the builder cannot anticipate PA-50 through PA-53 (void prevention) or PA-55/56 (sub-perceptual detection). The conventions brief addresses these concerns indirectly (Section 2 on perception, Section 11 on five questions), but the builder has no way to know that "the squint test" maps to PA-10, or that PA-52 will divide the page into thirds.
4. **Builder does not see research-synthesis.md or case studies.** The conventions brief distills research findings into operational guidance, but the original findings (337 across R1-R5) and the case study analyses are not available to the builder. CD-006 scored 39/40 -- the builder cannot study WHY. This is the "50:1 compression" finding from prior research: 337 findings compressed to 584 lines of brief.
5. **Builder does not know the lock sheet categories before building.** The lock sheet is generated AFTER the build, from the build log and gate results. But during the build, the builder has to make the same mental categorization (what is SOUL-locked vs what is my creative choice). The conventions brief's Section 9 (Creative Authority) addresses this, but the explicit LOCKED/CHALLENGEABLE framework is absent during composition.

---

### 1.4 Gate Runner (Orchestrator executing Playwright JS)

**KNOWS:**
- The rendered HTML/CSS output (full DOM access via Playwright)
- All 22 gate specifications from gate-runner.md (thresholds, JS code, fix recipes)
- Zone selector fallback chain (SC-00)
- Gate dependency chain (SC-00 -> SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16)
- Fix recipe templates with conventions-brief section references

**NEEDS TO KNOW:**
- What the builder PLANNED at each boundary to verify semantic direction
- What the TC brief prescribed as zone architecture

**GAPS:**
1. **Gate runner does not know the TC brief's planned transitions.** SC-13 counts channel shifts at boundaries. SC-13B attempts to classify direction (INTENSIFYING vs RELAXING). But neither gate knows the PLANNED direction from the TC brief. If TC prescribed "DEEPENING at Z2->Z3" but the builder implemented "OPENING," SC-13 still passes (3+ channels shift) and SC-13B classifies what it sees, not what was intended. There is no gate that cross-validates builder output against TC intent.
2. **Gate runner does not know the builder's transition table.** The builder writes a transition table in _build-log.md before building. DG-4 validates this table's structure, but during the full gate run, the per-zone gates (SC-09, SC-13) measure the HTML directly without comparing to the planned values. DG-2 (cascade value table) does cross-validate builder-claimed values against SC-13 measured values, but this catches builder SELF-REPORTING errors, not TC-to-builder alignment errors.
3. **Gate runner cannot detect compositional quality.** This is acknowledged explicitly: "Gates raise the FLOOR -- they prevent FLAT (1.5/4) pages from consuming PA auditor time. Gates never judge composition; they filter for it." But the consequence is that a page can pass all 22 gates while being compositionally incoherent. The gate system catches the FLAGSHIP failure (sub-perceptual CSS) but cannot catch the CEILING failure (metaphor announced but not structural).
4. **Advisory gates produce data that nobody uses well.** SC-13B (direction coherence) and SC-16 (monotonic progression) are ADVISORY -- they do not block. Their diagnostic output is "included as PA CONTEXT -- orientation for auditors about where to look." But PA auditors are fresh-eyes and do NOT receive gate results. Only the WEAVER receives gate results. The advisory data reaches one agent (weaver) who uses it for classification, not for directing auditor attention.

---

### 1.5 PA Auditors (9 Opus agents)

**KNOWS:**
- Screenshots (cold-look + scroll-through at 1440px, 1024px, 768px)
- PA SKILL.md subset (their assigned questions, evaluation framework, Three Laws, Sovereignty Principle, perceptual language guidance, quantitative guardrails, metaphor-awareness principles, multi-coherence evaluation guidance, coherence ARC detection, progressive zoom test)
- Their specific question assignments (7-14 questions per auditor, including Tier 5)
- Screenshot-reading protocol (how to use saved PNGs)

**DOES NOT KNOW (by design):**
- The TC brief (metaphor, zones, tensions, mechanisms)
- The conventions brief (world model, compositional intelligence)
- The build log (builder's conviction statement, transition table, fractal echo table)
- Gate results (which gates passed/failed, measured values)
- Lock sheet (which elements are locked vs challengeable)
- Any CSS source code
- Any prior experiment results

**NEEDS TO KNOW:**
- What they see on the page (they have this via screenshots)
- How to evaluate what they see (they have this via SKILL.md)
- The full question text with rubric (they MUST receive this pasted into prompt)

**GAPS:**
1. **Auditors cannot detect INTENT failure.** PA-44 asks: "If you removed all labels, could you still sense the metaphor from visual structure alone?" The auditor can answer this perceptually. But if the metaphor is "geological strata" and the auditor perceives "layered zones" but not "geological," that could be either SUCCESS (structural metaphor detected even without knowing the name) or FAILURE (wrong metaphor perceived). Without knowing the intent, the auditor cannot distinguish "correctly perceived different metaphor" from "failed to express intended metaphor."
2. **Auditors lack cross-page calibration.** Each auditor sees only THIS page. They have no reference point for "what DESIGNED looks like in this design system." The PA SKILL.md includes reference failure cases (e.g., "the flagship had backgrounds differing by 1-8 RGB") but no reference SUCCESS cases. An auditor rating PA-05 has no anchor for "4/4 DESIGNED" beyond their own aesthetic judgment.
3. **The fresh-eyes principle creates a diagnostic blind spot.** Auditors describe WHAT is wrong but cannot reliably diagnose WHY. "The page feels monotone" could mean: (a) sub-perceptual backgrounds, (b) missing border configurations, (c) uniform typography, (d) metaphor not structural, (e) all of the above. Without knowing which mechanisms were INTENDED, the auditor cannot say which mechanism FAILED. This is acceptable -- the weaver is supposed to do diagnosis. But it means auditor reports are symptom descriptions, not causal analyses.

**ASYMMETRY AS FEATURE:**
The fresh-eyes principle is the single most important deliberate information asymmetry in the pipeline. PA auditors MUST NOT know the metaphor, the build plan, or the gate results. Their value comes from naive perception -- they see what a READER would see. Every piece of build context they receive becomes a confirmation bias vector. The question is not whether to give them more information; it is whether the weaver can adequately bridge the gap between perception and diagnosis.

---

### 1.6 Weaver (1 Opus agent)

**KNOWS:**
- 9 auditor reports (raw perceptual assessments, YES/NO/PARTIALLY answers, severity ratings)
- Gate results (_gate-results.json: all 22 gates with measured values)
- Lock sheet (_lock-sheet.md: LOCKED Soul / LOCKED Research / CHALLENGEABLE Builder)
- Calibration tables (multi-coherence scale, severity scale, metaphor expression spectrum)
- The full weaver protocol from build-page SKILL.md (6-section synthesis, PA-05 scoring, Tier 5 scoring, verdict matrix, fix-type classification)

**DOES NOT KNOW:**
- TC brief (metaphor, zone architecture, tensions, selected mechanisms, CSS directions, build recipe, detection expectations)
- Builder's conviction statement
- Builder's transition table
- Builder's fractal echo table
- Builder's midpoint observation
- Builder's override log
- The conventions brief
- The content file
- What the builder was TRYING to do

**NEEDS TO KNOW:**
- Auditor findings (it has this)
- Gate diagnostic data (it has this)
- Enough context to diagnose ROOT CAUSE vs SYMPTOM
- Enough context to classify fixes correctly (MECHANICAL / STRUCTURAL / COMPOSITIONAL)

**GAPS:**
1. **THE MOST COSTLY GAP: Weaver cannot diagnose root cause without TC brief or build log.** The weaver must classify each Top-5 issue as MECHANICAL, STRUCTURAL, or COMPOSITIONAL. MECHANICAL means "CSS value wrong" -- the weaver can diagnose this from gate results (measured value vs threshold). STRUCTURAL means "zone organization issue" -- the weaver can partially diagnose this from auditor descriptions of spatial problems. But COMPOSITIONAL means "metaphor not expressed visually, requires TC re-invocation." How can the weaver know the metaphor is the problem if the weaver does not know what the metaphor IS?

   The weaver must distinguish between:
   - "The builder tried to express geological strata but wrote uniform CSS" (IMPLEMENTATION failure -- builder fix)
   - "Geological strata is an unvisualizable metaphor for this content" (STRUCTURAL failure -- TC re-derive)
   - "The metaphor appears in sections 1-3 but vanishes in 4-8" (COVERAGE failure -- builder extends)

   Without knowing the metaphor, the weaver can detect "something is missing" but cannot determine whether the problem is in the CONCEPT (TC domain) or the EXECUTION (builder domain). The PA SKILL.md even describes this diagnosis explicitly (lines 741-747), but the weaver does not have the inputs to perform it.

2. **Weaver does not see the TC brief's "DETECTION EXPECTATIONS" section.** The TC brief contains Section 7: "DETECTION EXPECTATIONS: What PA auditors should detect per mechanism (WEAVER-only)." This section was DESIGNED to be the weaver's calibration reference -- it lists what each mechanism should look like perceptually. But the build-page SKILL.md routes the TC brief ONLY to the builder (Step 3) and to the orchestrator for verification (Step 2 end). The weaver receives gate results and lock sheet, not the TC brief. The WEAVER-ONLY section exists but is never delivered to the weaver.

3. **Weaver does not see the builder's conviction statement.** The conviction statement names: content, zones, organizing principle, coherence direction, metaphor, and 6 commitments. This is exactly the information the weaver needs to bridge "auditors see X" to "builder intended Y, gap is Z." Without it, the weaver operates in symptom space, not cause space.

4. **Weaver sees the lock sheet but cannot challenge it.** The lock sheet categorizes elements as LOCKED or CHALLENGEABLE. The weaver uses this to determine which fixes are feasible. But the weaver generated its findings from auditor reports that explicitly IGNORE the lock sheet. If 7/9 auditors say "this border treatment is wrong" but the lock sheet says it is LOCKED (Research), the weaver must suppress a finding that might be correct. The lock sheet is generated by the orchestrator from gate data; the weaver should be able to flag "PA disagrees with this lock" rather than silently accepting it.

---

## 2. INFORMATION FLOW DIAGRAM

```
CONTENT FILE
    |
    v
TC AGENT <-- SKILL.md (1,612 lines) + mechanism-catalog + prohibitions + tokens
    |
    | _tc-brief.md (80-120 lines)
    v
ORCHESTRATOR --------> Verifies 8 sections exist (structural check only)
    |
    | TC brief + conventions-brief + content + reference files
    v
BUILDER (Opus) ------> Builds output.html + _build-log.md + _cascade-value-table.md
    |
    | output.html (rendered via Playwright)
    v
GATE RUNNER <---------- gate-runner.md (1,160 lines, 22 gates)
    |
    | _gate-results.json (measured values)
    v
ORCHESTRATOR --------> Generates _lock-sheet.md, captures screenshots
    |
    | screenshots + PA questions
    v                                    _gate-results.json
PA AUDITORS (9x) ----> 9 reports         |
    |                                     v
    | 9 reports + gate results + lock sheet
    v
WEAVER --------> _pa-report.md + _pa-matrix.md + verdict
    |
    | Top-5 issues + verdict
    v
ORCHESTRATOR --------> Composes fix instructions
    |
    | fix-instructions-cycle-N.md
    v
BUILDER (same) ------> Applies fixes

```

**Critical information that does NOT flow:**
- TC brief -> Weaver (designed but not implemented)
- Builder conviction statement -> Weaver
- TC Detection Expectations -> Weaver (Section 7 exists but is undelivered)
- Perception thresholds -> TC Agent
- Gate measurement methodology -> Builder
- Auditor raw perceptual descriptions -> Builder (compressed through weaver + orchestrator)
- Previous build results -> Any agent in next run
- Builder capabilities/limitations -> TC Agent

---

## 3. CRITICAL QUESTIONS ANSWERED

### 3.1 What is the MOST COSTLY information gap?

**The weaver's inability to see the TC brief and builder conviction statement is the single most costly gap.**

Evidence:
- The weaver must classify fixes as MECHANICAL / STRUCTURAL / COMPOSITIONAL
- COMPOSITIONAL classification triggers TC re-invocation (the most expensive fix cycle)
- Without knowing the metaphor, the weaver cannot distinguish "failed execution" from "failed concept"
- The TC brief even contains a section (DETECTION EXPECTATIONS) explicitly designed for the weaver
- This section is never delivered

**Cost estimation:** A misclassified COMPOSITIONAL issue as MECHANICAL wastes 2 fix cycles (builder tries to fix a metaphor problem with CSS patches) before escalation. A misclassified MECHANICAL issue as COMPOSITIONAL wastes a full TC re-invocation + fresh build (60+ minutes) when a CSS tweak would have sufficed.

**The fix is trivial:** Add the TC brief and builder conviction statement to the weaver's input files. This is 3 lines in the weaver spawn prompt:
```
Also read the TC brief at [output-dir]/_tc-brief.md for the intended metaphor,
zone architecture, and detection expectations. Read the builder's conviction
statement in [output-dir]/_build-log.md (first section only) for the planned
coherence direction and commitments.
```

**Risk:** Giving the weaver compositional context could bias its interpretation of auditor findings. But the weaver already receives the lock sheet (which encodes build decisions) and gate results (which encode measured values). The TC brief adds INTENT, which is exactly what the weaver needs for diagnosis. The PA auditors remain fresh-eyes; only the weaver gains context.

---

### 3.2 When is information asymmetry a FEATURE vs a BUG?

**FEATURE (Deliberate withholding that improves quality):**

| Asymmetry | Why It Is Deliberate | What Would Break If Closed |
|-----------|---------------------|---------------------------|
| PA auditors do not see TC brief | Fresh-eyes principle: naive perception catches what knowledge blinds you to | Auditors would look for "geological strata" instead of seeing "monotone zones." Confirmation bias eliminates the audit's primary value. |
| PA auditors do not see gate results | Gates filter mechanically; PA judges perceptually. Knowing "SC-13 passed" would bias auditors toward "multi-coherence is fine" | Auditors would skip careful boundary evaluation. Gate-passing pages with perceptual failures would get approved. |
| PA auditors do not see lock sheet | Auditors should report what they see, not what they are allowed to fix | Auditors would self-censor findings about locked elements, suppressing valid perceptual problems. |
| TC does not see case studies during Phases 0-3 | Library patterns are VALIDATION tools, not GENERATION tools. Seeing them before metaphor commitment causes pattern-matching, not tension-deriving. | TC would produce metaphors that look like existing case studies instead of deriving content-specific ones. |
| Builder does not see PA questions | Prevents audit optimization -- building TO PASS rather than building TO SERVE CONTENT | Builder would write CSS to satisfy rubric items rather than expressing the metaphor through CSS. |

**BUG (Accidental withholding that degrades quality):**

| Asymmetry | Why It Is Accidental | Cost |
|-----------|---------------------|------|
| Weaver does not see TC brief | TC brief Section 7 (Detection Expectations) is labeled "WEAVER-only" but never routed to weaver | Cannot diagnose root cause, misclassifies fix types, wastes cycles |
| Weaver does not see conviction statement | Conviction statement contains exactly what weaver needs for diagnosis | Cannot bridge perception to intent |
| TC does not know perception thresholds | TC proposes zone architecture without knowing visibility physics | May select mechanisms or zone backgrounds that fall below perception floors |
| Gate runner does not know planned transitions | Cannot verify builder implemented what TC prescribed | Catches mechanical failures but not alignment failures |
| Builder does not receive raw auditor language in fix cycles | Compressed through weaver and orchestrator, loses perceptual nuance | Builder fixes the symptom description, not the perceptual experience |
| No agent learns from previous pipeline runs | Every run starts from zero state | Same failure patterns recur across builds |

---

### 3.3 What information flows BACKWARDS in fix cycles?

**Fix Cycle Information Path:**

```
PA Auditors -> Weaver -> Orchestrator -> Builder
   (9 reports)  (Top-5 synthesis)  (fix-instructions-cycle-N.md)  (applies fixes)
```

**What the builder receives in fix instructions (from Section 7.1):**
1. Gate failures with measured values, thresholds, deltas, and specific CSS fixes
2. Compositional context: the boundary's planned coherence direction (from the builder's OWN transition table), which channels shift and which are missing, conventions-brief section reference
3. PA Top-5 issues: auditor exact quote, scroll position, direction (what to change, not what CSS to write)
4. Tier 5 gaps: which questions scored NO, auditor reason, implication
5. Protected elements: what scored well, do not regress

**What the builder is also told to re-read:**
- _tc-brief.md (metaphor, zones, tensions)
- Own conviction statement and transition table in _build-log.md

**Assessment: The backward flow is GOOD but has two weaknesses:**

1. **Auditor quotes are single sentences.** "This section feels like a dropped signal" (from PA-33) loses the context of the auditor's full cold-look reaction, their scroll-through experience, and their severity reasoning. The orchestrator takes the weaver's top-5, which takes the auditor's best quote per issue. Three layers of compression.

2. **No mechanism-level diagnosis flows back.** The fix instructions say "SC-09 FAIL at Z2->Z3, bg delta 8 RGB, fix: darken background while maintaining DEEPENING direction." This is good mechanical guidance. But for compositional issues (PA-65 = NO, PA-68 = NO), the fix instruction says "PA-68: NO -- metaphor fades in bottom third. IMPLICATION: missing compositional property." The builder is told WHAT is missing but not WHICH MECHANISMS from the TC brief's selection would address it. The TC brief selected specific mechanisms for specific zones -- this mapping is available but not included in fix instructions.

---

## 4. SUMMARY: RANKED INFORMATION GAPS

| Rank | Gap | Severity | Cost | Fix Complexity |
|------|-----|----------|------|----------------|
| 1 | Weaver does not see TC brief (especially Section 7: Detection Expectations) | CRITICAL | Misclassified fix types waste 60+ min per occurrence | TRIVIAL: 3 lines in weaver spawn prompt |
| 2 | Weaver does not see builder conviction statement | HIGH | Cannot bridge perception to intent for root-cause diagnosis | TRIVIAL: 1 line addition to weaver read list |
| 3 | TC does not know perception thresholds | HIGH | May propose zone architecture below visibility floors | MODERATE: Add 15-line perception summary to TC spawn prompt |
| 4 | No TC-to-gate alignment verification | MEDIUM | Builder can diverge from TC intent without detection | MODERATE: New gate or DG-4 extension comparing TC brief zones to built zones |
| 5 | Builder receives compressed auditor language in fix cycles | MEDIUM | Fixes symptoms instead of perceptual experiences | LOW: Include auditor report paths in fix instructions so builder can optionally read raw reports |
| 6 | No cross-run learning | MEDIUM | Same failure patterns recur | HIGH: Requires persistent state mechanism outside current architecture |
| 7 | Gate runner does not know planned transitions | LOW | Catches mechanical failures but not semantic alignment | MODERATE: Parse transition table from build log, compare to measured values |
| 8 | Builder does not see gate measurement methodology | LOW | Occasional measurement-vs-intent mismatches at zone boundaries | LOW: Add 5-line note to builder prompt about zone boundary measurement point |

**Total fix effort for gaps 1-2 (the highest-leverage changes):** ~5 lines of prompt text. Zero architectural changes. These two gaps are pure prompt routing oversights -- the information EXISTS (TC brief Section 7, conviction statement) and was DESIGNED for the weaver, but the routing was never implemented.

---

## 5. ARCHITECTURAL OBSERVATION

The information asymmetry pattern reveals a deeper architectural issue: **the pipeline is organized around SEQUENTIAL HANDOFFS, not SHARED CONTEXT.**

Each agent receives a prompt, does its work, writes files, and exits. The next agent receives different files. Information that crosses agent boundaries must be EXPLICITLY routed through file paths in spawn prompts. Any information not named in a spawn prompt is invisible to that agent, even if the file sits in the same output directory.

This architecture has strengths (clean separation, fresh-eyes principle works naturally) and weaknesses (the routing table must be manually maintained, any oversight creates a permanent blind spot). The TC brief's "WEAVER-only" section is the clearest example: someone designed the pipeline to include weaver-specific calibration data in the TC brief, but never updated the weaver's spawn prompt to read it.

**The pipeline needs an explicit INFORMATION ROUTING TABLE** -- a single-page reference showing exactly which files each agent reads and writes, maintained alongside the SKILL.md. When any file's content changes (e.g., adding Section 7 to the TC brief), the routing table flags which agents should receive it.

Current implicit routing (reconstructed from spawn prompts):

| File | TC | Builder | Gate Runner | PA Auditors | Weaver |
|------|:--:|:-------:|:-----------:|:-----------:|:------:|
| Content file | READ | READ | -- | -- | -- |
| TC SKILL.md | READ | -- | -- | -- | -- |
| _tc-brief.md | WRITE | READ | -- | -- | **MISSING** |
| conventions-brief.md | -- | READ | -- | -- | -- |
| mechanism-catalog.md | READ | READ (ref) | -- | -- | -- |
| prohibitions.md | READ | READ | -- | -- | -- |
| tokens.css | READ | READ | -- | -- | -- |
| components.css | -- | READ (ref) | -- | -- | -- |
| gate-runner.md | -- | -- | READ | -- | -- |
| output.html | -- | WRITE | READ (via Playwright) | -- | -- |
| _build-log.md | -- | WRITE | READ (DG-4) | -- | **MISSING** |
| _cascade-value-table.md | -- | WRITE | READ (DG-2) | -- | -- |
| _gate-results.json | -- | -- | WRITE | -- | READ |
| _lock-sheet.md | -- | -- | -- | -- | READ |
| _screenshots/ | -- | -- | -- | READ | -- |
| PA SKILL.md | -- | -- | -- | READ (subset) | -- |
| _pa/auditor-[A-I].md | -- | -- | -- | WRITE | READ |
| _pa-report.md | -- | -- | -- | -- | WRITE |

The two **MISSING** cells are the two highest-leverage gaps identified in this report.
