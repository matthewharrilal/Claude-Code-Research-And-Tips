# 03 -- Pipeline Modification Architecture Analysis

**Agent:** architecture-analyst (Opus)
**Task:** #3 -- Analyze pipeline modification architecture -- how changes propagate
**Date:** 2026-02-20
**Files Read:** SKILL.md (408 lines), conventions-brief.md (403 lines), gate-runner.md (992 lines), flagship-pa-questions.md (144 lines), design-system/CLAUDE.md (697 lines), compositional-core/CLAUDE.md (662 lines), PV2-PIPELINE-DIAGRAM.md (1,355 lines), TC SKILL.md (first 100 lines)

---

## 1. MODIFICATION PATTERN: How to Change Pipeline Behavior

### 1A. The Core Architecture (What Exists Now)

The pipeline is a **5-file permanent system** with a clear execution flow:

```
/build-page SKILL.md (orchestrator, 408 lines)
       |
       v
conventions-brief.md (builder world-description, 403 lines)
       |                                        |
       v                                        v
gate-runner.md (21 verification gates)    flagship-pa-questions.md (8 Tier 5 Qs)
       |                                        |
       v                                        v
[compositional-core/ reference files]     [perceptual-auditing SKILL.md]
```

Plus two CLAUDE.md routing files (design-system/ and compositional-core/) that enforce loading order and phase-gating.

### 1B. The Cleanest Modification Approaches (Ranked)

**RANK 1: Edit existing files (DEFAULT -- use for 80% of changes)**

Most pipeline behavior changes are best expressed as edits to one of the 5 core files. The system was designed for this -- each file has a clear role and a clear "language" it speaks.

- **To change what the builder KNOWS:** Edit `conventions-brief.md`
- **To change what gets VERIFIED programmatically:** Edit `gate-runner.md`
- **To change what gets VERIFIED perceptually:** Edit `flagship-pa-questions.md`
- **To change the PROCESS (agent count, wave structure, fix cycles):** Edit `SKILL.md`
- **To change what gets LOADED and in what ORDER:** Edit the two CLAUDE.md files

Edits propagate immediately -- the next `/build-page` invocation reads the updated file. No compilation, no deployment, no cache invalidation.

**RANK 2: Add a new reference file that existing agents READ (for 15% of changes)**

When new knowledge doesn't fit cleanly into any existing file's role -- e.g., a new category of compositional intelligence that the builder needs to consult.

- Add to `design-system/compositional-core/` (builder reference)
- Add to `design-system/pipeline/` (orchestrator/gate reference)
- Then edit `SKILL.md` to include the new file in the builder's read list (Section 2, builder spawn prompt, lines 46-83)

**RANK 3: Add new gates (for 5% of changes)**

When a new mechanical failure mode is discovered that can be caught programmatically:

- Add the gate definition to `gate-runner.md` (with JS check, threshold, fix recipe)
- Add the gate to `SKILL.md`'s gate table (Section 3.2, lines 119-134)
- Add the gate to `SKILL.md`'s structured output section (Section 3.3)

**RANK 4: Add a new skill (VERY RARE -- <1% of changes)**

Only justified when a completely new capability is needed that doesn't fit the existing pipeline stages. The current system already has TC (planning) and PA (auditing) as sub-skills. Adding a third would be justified only for something like "automated content analysis" or "CSS linting" that is genuinely a new capability, not a refinement of an existing one.

**RANK 5: Add a new pipeline stage (EXTREMELY RARE)**

Only if a qualitatively different processing step is needed between existing waves. The PV2 diagram already identified potential stages (Wave 0.5 metaphor validation, Wave 0.9 handoff gate) but the current codified pipeline absorbed these into the orchestrator's own execution rather than adding formal stages.

---

## 2. FILE ROLES AND BOUNDARIES

### 2A. `~/.claude/skills/build-page/SKILL.md` (408 lines) -- THE ORCHESTRATOR

**Role:** Process definition. Controls WHAT HAPPENS, WHEN, BY WHOM, and HOW RESULTS ARE EVALUATED. This is the "stage directions" -- it tells you who enters, when they speak, and what the success criteria are.

**Contains:**
- Mission statement and success bar (PA-05 >= 3.5, Tier 5 >= 6/8)
- Team creation protocol (Wave 1 builder, Wave 2 PA auditors)
- Builder spawn prompt (what files to read, in what order, what process to follow)
- Gate runner execution protocol (how to run 12+ gates via Playwright)
- Screenshot capture protocol
- Lock sheet generation
- PA deployment protocol (9 auditors + 1 weaver, question assignments)
- Fix cycle protocol (structured fix instructions, same builder, max 3 cycles)
- Non-negotiable restatement

**SHOULD contain:** Process-level decisions. Agent topology. Wave structure. Success criteria. File routing (which files each agent reads). Fix cycle mechanics.

**SHOULD NOT contain:**
- Compositional knowledge (that belongs in conventions-brief.md)
- Gate JavaScript code (that belongs in gate-runner.md -- but currently the gate thresholds ARE duplicated here in the table at lines 119-134; this is a CONSISTENCY RISK)
- PA question text (that belongs in flagship-pa-questions.md / PA SKILL.md)
- Design system values (tokens, prohibitions -- those belong in compositional-core/)

**Known boundary violation:** The gate threshold table at lines 119-134 duplicates information from gate-runner.md. If someone edits a threshold in gate-runner.md but not in SKILL.md (or vice versa), the orchestrator's structured output and the actual gate check will diverge. **This is the single highest-risk consistency issue in the pipeline.**

### 2B. `conventions-brief.md` (403 lines) -- THE WORLD DESCRIPTION

**Role:** Builder knowledge. Describes the WORLD the builder works in -- the physics (perception thresholds), the materials (CSS vocabulary), the quality standards (richness formula, multi-coherence), and the creative authority granted. This is the builder's "operating manual" -- everything they need to know to compose a page.

**Contains:**
- Identity/Soul constraints (Section 1)
- Perception thresholds (Section 2)
- Richness formula (Section 3)
- Multi-coherence binding rule (Section 4)
- Fractal echo / scale coverage (Section 5)
- Unified metaphor requirement (Section 6)
- Transition grammar (Section 7)
- CSS vocabulary patterns (Section 8)
- Creative authority clause (Section 9)
- Quality floor minimums (Section 9B)
- Compositional memory prevention (Section 10)
- Five self-check questions (Section 11)
- Restraint list (Section 12)
- Accessibility template (Section 13)
- Responsive behavior (Section 14)
- Conviction card (process deliverable)

**SHOULD contain:** Everything the builder needs to KNOW to make good compositional decisions. World-model knowledge. Physics of perception. Materials available. Quality standards. Creative latitude.

**SHOULD NOT contain:**
- Process sequencing (that's SKILL.md's job -- though the brief does have a "PROCESS" section at line 380+ that defines the Understand/Plan/Build/Verify flow; this is appropriate because it describes the builder's OWN process, not the pipeline's process)
- Gate thresholds (those belong in gate-runner.md -- though the brief DOES embed perception thresholds like ">=15 RGB" which are the SAME values as gate thresholds; this is INTENTIONAL DUPLICATION, not a violation, because the builder needs to know the physics to build correctly, not just to pass gates)
- PA question text (auditors must be zero-context)
- Agent topology or team structure
- Fix cycle mechanics

**Key insight:** The conventions brief is a WORLD-DESCRIPTION, not a CHECKLIST or RECIPE. Its language is descriptive ("Human perception has hard limits...") not prescriptive ("You must set background delta to >= 15 RGB"). This framing is critical -- it establishes the builder's world-model rather than constraining their process.

### 2C. `gate-runner.md` (992 lines) -- THE VERIFICATION SPEC

**Role:** Programmatic verification definition. Contains the JavaScript checks, thresholds, fix recipe formats, gate categorization (Tier A/B/C), execution order, micro-gate schedule, and gate-to-PA handoff protocol.

**Contains:**
- 21 gate definitions (15 Tier 1 programmatic + 4 Tier 2 deliverable + 2 Tier 3 behavioral)
- JavaScript checks for each gate
- Threshold values with Flagship elevations
- Fix recipe format specifications
- Micro-gate schedule (MG-1 through MG-4)
- Execution groups (5 dependency-ordered groups)
- Gate failure protocol
- Complete gate summary table
- Helper functions (parseRGB)

**SHOULD contain:** Gate definitions. JS code. Thresholds. Fix recipe formats. Execution order. Dependency chains. Failure protocols.

**SHOULD NOT contain:**
- PA questions or scoring
- Builder instructions or compositional guidance
- Pipeline process (wave structure, agent creation)
- Design system philosophy

**Known issue:** The gate-runner.md is the DEFINITIVE specification for gate behavior, but the orchestrator (SKILL.md) also contains a gate summary table (Section 3.2). These MUST stay synchronized. The gate-runner has more detail (JS code, fix recipes, provenance), so it is the source of truth.

### 2D. `flagship-pa-questions.md` (144 lines) -- THE TIER 5 QUESTIONS

**Role:** Defines the 8 additional questions that distinguish Flagship from merely Designed output. Pure content -- question text, detection target, scoring rubric, auditor assignment.

**Contains:**
- 8 Tier 5 questions (PA-60 through PA-67)
- Scoring criteria (YES/NO with specific evidence requirements)
- Auditor assignments
- Aggregate scoring table (COMPOSED / APPROACHING / STRUCTURED / VOCABULARY ONLY)

**SHOULD contain:** Only Tier 5 question definitions and scoring.

**SHOULD NOT contain:**
- Standard PA questions (those are in the PA SKILL.md)
- Gate definitions
- Builder instructions
- Process mechanics

### 2E. `design-system/CLAUDE.md` and `compositional-core/CLAUDE.md` -- THE ROUTING LAYER

**Role:** Auto-loaded on directory entry. Controls what agents read, in what order, and enforces phase-gating (library prohibition until Phase 5). These are PROCESS ENFORCEMENT files that shape agent behavior through loading protocols.

**SHOULD contain:** File routing, ingestion protocol, phase-gating rules, anti-gravity enforcement, soul constraint summaries, supersession matrix.

**SHOULD NOT contain:** Detailed compositional knowledge (that's conventions-brief.md), gate specifications (that's gate-runner.md), or pipeline process (that's SKILL.md).

---

## 3. CHANGE PROPAGATION: Impact Surface Analysis

### 3A. If I Edit `conventions-brief.md`

**Direct impact:**
- Every future builder agent reads the updated brief
- Builder behavior changes on next `/build-page` invocation
- No compilation or deployment step needed

**Indirect impact:**
- Gate thresholds may need synchronization if perception thresholds change (e.g., changing ">=15 RGB" to ">=20 RGB" in the brief requires updating SC-09 in gate-runner.md)
- The SKILL.md builder spawn prompt (lines 46-83) references conventions-brief.md by path -- the prompt does NOT duplicate brief content, so content changes propagate cleanly
- The compositional-core/CLAUDE.md "Perceptual Cost Economics" section (lines 517-529) duplicates some threshold values from the brief -- these need synchronization

**Impact surface:** MEDIUM. Changes to the brief affect builder behavior but may require synchronization with gate-runner.md thresholds and CLAUDE.md summaries.

**Propagation diagram:**
```
conventions-brief.md CHANGED
    |
    +--> Builder reads updated world model (AUTOMATIC)
    |
    +--> gate-runner.md thresholds? (MANUAL SYNC if thresholds changed)
    |
    +--> compositional-core/CLAUDE.md summaries? (MANUAL SYNC if values changed)
    |
    +--> design-system/CLAUDE.md soul constraints? (MANUAL SYNC if identity changed)
```

### 3B. If I Edit `gate-runner.md`

**Direct impact:**
- Next gate run uses updated checks
- The orchestrator (SKILL.md) executes gates via Playwright -- it reads gate-runner.md for the CHECK DEFINITIONS but the gate TABLE in SKILL.md (lines 119-134) summarizes thresholds

**Indirect impact:**
- SKILL.md gate summary table (lines 119-134) must be synchronized
- conventions-brief.md perception thresholds should match (if gate thresholds change, the brief's physics should update)
- compositional-core/CLAUDE.md perceptual cost economics section

**Impact surface:** MEDIUM. Gate changes are self-contained in execution but threshold changes ripple to brief and SKILL.md.

### 3C. If I Edit `SKILL.md`

**Direct impact:**
- Next `/build-page` invocation uses updated process
- Agent topology, wave structure, success criteria, file routing all change

**Indirect impact:**
- If builder spawn prompt changes (which files builder reads), the builder's knowledge surface changes
- If gate table changes but gate-runner.md doesn't, inconsistency
- If PA deployment changes (question assignments), audit coverage changes

**Impact surface:** HIGH. The orchestrator touches everything. Changes here can affect builder behavior, gate execution, PA coverage, and fix cycle mechanics.

### 3D. If I Edit `flagship-pa-questions.md`

**Direct impact:**
- Next PA deployment uses updated Tier 5 questions
- Auditor question text changes

**Indirect impact:**
- SKILL.md question assignment table (Section 5.2, lines 229-239) references PA question IDs by number -- if IDs change, assignments must update
- Weaver synthesis instructions reference Tier 5 scoring -- if scoring rubric changes, weaver instructions need synchronization

**Impact surface:** LOW. PA questions are relatively isolated. Changes propagate cleanly as long as question IDs and auditor assignments stay synchronized.

### 3E. If I Edit Reference Files (tokens.css, prohibitions.md, mechanism-catalog.md, components.css)

**Direct impact:**
- Builder reads updated reference files (these are part of the builder's file set in SKILL.md lines 53-56)
- Changes apply to next build automatically

**Indirect impact:**
- conventions-brief.md may reference specific values (e.g., color hex codes in Section 1, spacing values in Section 1)
- gate-runner.md checks may use values that should match (e.g., SC-04 warm palette check, SC-05 no pure extremes)
- compositional-core/CLAUDE.md and design-system/CLAUDE.md contain soul constraint summaries

**Impact surface:** HIGH for identity changes (tokens, prohibitions). LOW for vocabulary changes (mechanism catalog, components).

---

## 4. NEW FILE THRESHOLD: When to Add vs. Edit

### 4A. Add a New File When ALL of These Are True:

1. **Role separation:** The new content serves a role that NO existing file serves. It's not a refinement of the brief, not a new gate, not a new PA question, not a process change.

2. **Size justification:** The content is substantial enough (>50 lines) that embedding it in an existing file would dilute that file's role or push it past a cognitive load threshold.

3. **Reader separation:** The content is read by a DIFFERENT set of agents than the host file. (E.g., if only the orchestrator needs it but it doesn't fit SKILL.md's process-definition role.)

4. **Update independence:** The content changes on a different cadence than its host file. (E.g., perception thresholds might update independently of the conventions brief.)

### 4B. DO NOT Add a New File When:

- The content is a REFINEMENT of an existing file's role (edit the file instead)
- The content is <50 lines (embed it in the appropriate existing file)
- The content is read by the SAME agents that read an existing file (consolidate)
- You're adding it "for organization" without a functional reason

### 4C. Current Pipeline Files vs. Ideal Count

The current 5-file pipeline is CLOSE to ideal. The PV2 diagram (line 887-917) proposed 4 new files + 5 edits. The codified pipeline implements a different structure (Fat Core architecture with conventions brief). The result:

- `SKILL.md` (orchestrator) -- NECESSARY
- `conventions-brief.md` (builder world model) -- NECESSARY
- `gate-runner.md` (verification spec) -- NECESSARY
- `flagship-pa-questions.md` (Tier 5 questions) -- NECESSARY
- Reference files in compositional-core/ -- NECESSARY (already exist)

**One file that COULD be extracted:** The perception thresholds are currently embedded in THREE places: conventions-brief.md (Section 2), gate-runner.md (per-gate thresholds), and compositional-core/CLAUDE.md (lines 517-529). A single `perception-thresholds.md` file that all three reference would eliminate the synchronization risk. The PV2 diagram proposed this (line 899-901). The current pipeline chose to duplicate instead, which is simpler but riskier.

---

## 5. PIPELINE DIAGRAM EVOLUTION: What Changes Look Like

### 5A. Adding a New Reference File

```
CURRENT:
Builder reads: conventions-brief.md, content.md, tokens.css, prohibitions.md,
               mechanism-catalog.md, components.css

AFTER ADDING new-reference.md:
Builder reads: conventions-brief.md, content.md, tokens.css, prohibitions.md,
               mechanism-catalog.md, components.css, NEW-REFERENCE.md

CHANGES NEEDED:
1. Create the new file
2. Edit SKILL.md builder spawn prompt (line 52-56) to add new file to read list
3. Consider reading ORDER -- where in the primacy chain does it go?
```

The pipeline topology is UNCHANGED. No new agents, no new waves, no new gates. Just a wider input surface for the builder. **Risk:** Increases builder input volume (currently ~1,300 lines across 8 files). The contrarian thesis (PV2 Report 31) warns that quality inversely correlates with input volume. Every new reference file should justify its existence against this risk.

### 5B. Adding a New Gate Category

```
CURRENT: 21 gates (15 Tier 1 + 4 Tier 2 + 2 Tier 3)

AFTER ADDING SC-17:
22 gates (16 Tier 1 + 4 Tier 2 + 2 Tier 3)

CHANGES NEEDED:
1. Add gate definition to gate-runner.md (JS check, threshold, fix recipe, provenance)
2. Add gate to gate-runner.md execution groups (determine dependency)
3. Add gate to gate-runner.md summary table
4. Add gate to SKILL.md gate table (Section 3.2)
5. If it's a micro-gate: add to micro-gate schedule in gate-runner.md
6. Update gate-runner.md totals
```

**Risk:** Each new gate adds ~30 seconds to the gate run and requires fix recipe authoring. Gates with false positive risk can block good pages. The 70/30 boundary (gates catch 70%, PA catches 30%) should not shift -- don't add gates for things that require perceptual judgment.

### 5C. Adding New PA Questions

```
CURRENT: 48 standard + 8 Tier 5 = 56 questions across 9 auditors

AFTER ADDING PA-68, PA-69:
48 standard + 10 Tier 5 = 58 questions

CHANGES NEEDED:
1. Add question definitions to flagship-pa-questions.md
2. Add auditor assignments to flagship-pa-questions.md assignment table
3. Update SKILL.md auditor assignment table (Section 5.2, lines 229-239)
4. Update SKILL.md weaver instructions if Tier 5 scoring changes
5. Update flagship-pa-questions.md aggregate scoring table
```

**Risk:** More questions per auditor increases cost and time. The current distribution is already uneven (Auditor C has 13 questions, Auditor G has 3). New questions should go to under-loaded auditors.

### 5D. Adding a New Pipeline Stage

```
CURRENT: Intake -> Build (Wave 1) -> Gate Run -> Screenshots -> Lock Sheet -> PA (Wave 2) -> Fix Cycle

AFTER ADDING "Wave 0: TC Planning" (restoring separated TC):
Intake -> TC Planning (Wave 0) -> Handoff Gate -> Build (Wave 1) -> Gate Run -> Screenshots -> Lock Sheet -> PA (Wave 2) -> Fix Cycle

CHANGES NEEDED:
1. Rewrite SKILL.md Sections 1-2 to add new wave
2. Create or invoke TC skill as separate agent
3. Define handoff artifacts and validation gate
4. Update SKILL.md builder spawn prompt to consume TC output
5. Update SKILL.md success bar if TC adds new criteria
```

**Risk:** This is the HIGHEST-COST modification. It changes the pipeline topology, adds boundaries (with compression risk), and requires coordination between agents. The current Fat Core architecture specifically ELIMINATED the TC-builder separation to avoid Boundary 3 compression loss. Re-adding it should only happen with strong experimental evidence.

---

## 6. STRUCTURAL OPTIONS FOR ENRICHMENT

### 6A. The Options

**(a) Edits to existing files**

**Best for:** Refinements, threshold changes, new CSS vocabulary, additional builder guidance, expanded perception physics, new quality floor minimums.

**Example:** Adding compositional intelligence to conventions-brief.md means adding new sections or expanding existing ones (e.g., enriching Section 4 Multi-Coherence with more nuanced direction grammar, or expanding Section 8 CSS Vocabulary with proven compositional patterns).

**Strengths:**
- Zero new files, zero new infrastructure
- Changes propagate immediately
- No synchronization risk
- Builder input volume unchanged (words change, not count)

**Weaknesses:**
- conventions-brief.md is already 403 lines; significant additions push toward cognitive overload
- Content density must remain high -- no filler
- Hard to track what was added when (no version history within a file)

**Verdict:** RECOMMENDED for knowledge that refines the builder's world model. The brief has room for ~100 more lines before hitting the 500-line cognitive load threshold identified in PV2 research (Report 31: quality drops sharply above ~300 lines of builder input; current brief is consumed alongside ~900 lines of other reference files).

**(b) A new reference file the builder reads**

**Best for:** Knowledge that is large (>100 lines), has a distinct role from the brief, and is needed during build but not for every decision.

**Example:** A `compositional-playbook.md` with concrete CSS recipes for multi-coherence transitions, organized by transition type (SMOOTH/BRIDGE/BREATHING) with exact before/after CSS for each channel.

**Strengths:**
- Clean separation -- builder can consult it as needed rather than holding it all in context
- Can be large without diluting the brief
- Can update independently

**Weaknesses:**
- Increases builder input file count (currently 8 files per SKILL.md line 535-543 of PV2)
- Adds to total input volume (the contrarian's concern)
- Requires SKILL.md edit to add to builder read list
- Risk of builder ignoring it (bolted-on, not inherent)

**Verdict:** RECOMMENDED for large compositional intelligence bodies that would overwhelm the brief. Must be structured for CONSULTATION (indexed, scannable) not sequential reading.

**(c) A new skill that gets invoked**

**Best for:** New capabilities that require a separate agent with different context than the builder. Something that processes information differently or requires a different perspective.

**Example:** A `/compose-transitions` skill that takes zone boundaries and outputs a transition table with specific CSS values -- essentially restoring TC's planning role as a separate invocable step.

**Strengths:**
- Clean separation of concerns
- Can have its own context window (no competition with builder's context)
- Can be invoked by orchestrator at the right time

**Weaknesses:**
- Adds a new agent (cost, time, Boundary 3-type compression)
- The entire Fat Core thesis is AGAINST separation of planning and building
- Requires handoff artifacts (new boundary = compression risk)
- Most complex modification pattern

**Verdict:** NOT RECOMMENDED unless the enrichment fundamentally cannot live inside the builder's context. The pipeline specifically chose Fat Core (one agent plans + builds) to eliminate inter-agent compression. Adding a new skill re-introduces the problem.

**(d) Enriched gate specs**

**Best for:** Catching new failure modes programmatically. Adding MEASUREMENT of compositional properties that can be objectively checked.

**Example:** Adding a gate that measures the VARIETY of component types per viewport-height screenful, or a gate that checks whether layout topology actually changes across the page.

**Strengths:**
- Verification catches problems the builder missed
- Gates produce fix recipes (actionable)
- Gates are binary (100% agent compliance)
- Don't increase builder input volume

**Weaknesses:**
- Gates can only catch MECHANICAL failures (~26% of quality)
- Gates cannot judge COMPOSITIONAL quality (the remaining ~74%)
- New gates add execution time
- Gates with false positives can block good creative work

**Verdict:** RECOMMENDED for new mechanical failure modes. NOT RECOMMENDED for compositional intelligence (gates verify, they don't teach).

**(e) Combination**

**Best for:** Comprehensive enrichment that spans multiple concerns.

**Example:**
- Add compositional intelligence as BRIEF EDITS (conventions-brief.md, ~50-80 lines)
- Add detailed playbook as NEW REFERENCE FILE (compositional-playbook.md, ~200 lines)
- Add mechanical checks as NEW GATES (2-3 new gates in gate-runner.md)
- Add compositional assessment as NEW PA QUESTIONS (2-3 new Tier 5 questions)

**Verdict:** THE MOST LIKELY CORRECT ANSWER for substantial enrichment. Different types of knowledge belong in different pipeline layers. The key is matching each piece of knowledge to the RIGHT layer:

```
KNOWLEDGE TYPE                    --> PIPELINE LAYER
World-model / physics / creative  --> conventions-brief.md (edits)
Concrete CSS recipes / playbooks  --> new reference file (builder reads)
Mechanical failure detection      --> gate-runner.md (new gates)
Perceptual quality assessment     --> flagship-pa-questions.md (new Qs)
Process / wave structure          --> SKILL.md (edits)
```

### 6B. Recommended Architecture for Compositional Intelligence Enrichment

Based on this analysis, the recommended architecture is:

**Layer 1: Brief enrichment (conventions-brief.md edits, ~50-80 lines)**
Add compositional intelligence that belongs in the builder's WORLD MODEL -- things the builder needs to KNOW to make good decisions. This includes: enriched multi-coherence direction grammar, content-form coupling principles, compositional surprise guidance, restraint-as-expression principles.

**Layer 2: Reference enrichment (new file OR expanded mechanism-catalog.md, ~100-200 lines)**
Add concrete CSS recipes that the builder CONSULTS during build -- specific transition patterns, multi-coherence boundary examples, component combination recipes. This is the "playbook" that complements the brief's "world description."

**Layer 3: Verification enrichment (gate-runner.md, 2-3 new gates)**
Add programmatic checks for new failure modes discovered through the enrichment research -- e.g., layout topology variety, component density per viewport.

**Layer 4: Assessment enrichment (flagship-pa-questions.md, 1-2 new questions)**
Add perceptual assessment questions that evaluate the compositional properties the enrichment adds.

**THE CRITICAL CONSTRAINT:** Total builder input volume should NOT exceed ~1,500 lines (currently ~1,300). Every line added must earn its place against the contrarian thesis that quality inversely correlates with input volume. If the reference file pushes past 1,500, consider what can be REMOVED to make room.

---

## 7. CROSS-CUTTING FINDINGS

### 7A. The Synchronization Problem

Three values are currently duplicated across multiple files:

| Value | conventions-brief.md | gate-runner.md | SKILL.md | CLAUDE.md files |
|-------|---------------------|----------------|----------|-----------------|
| Container 940-960px | Section 1 | SC-01 | Line 17, Line 123 | Both CLAUDE.md |
| BG delta >= 15 RGB | Section 2 | SC-09 | Line 131 | compositional-core/ |
| Stacked gap <= 120px | Section 2 | SC-10 | Line 132 | compositional-core/ |
| Font trinity | Section 1 | SC-03 | Line 127 | Both CLAUDE.md |
| No pure B/W | Section 1 | SC-05 | Line 128 | design-system/ |

**Risk:** If any value is updated in one file but not the others, the system produces contradictory guidance. The builder might follow one threshold while the gate enforces another.

**Mitigation options:**
1. Single source of truth file (perception-thresholds.md) that others reference by path -- but LLM agents can't do dynamic includes
2. Accept duplication but add "SOURCE OF TRUTH: gate-runner.md" annotations
3. Reduce duplication by removing redundant values from CLAUDE.md files (which are routing, not specification)

**Recommended:** Option 2. Accept duplication as inherent to LLM-based pipelines, but annotate source of truth explicitly.

### 7B. The 403-Line Brief Is Near Its Ceiling

The conventions-brief.md is 403 lines. PV2 research (Report 31) found quality inversely correlates with input volume, with a sharp dropoff above ~300 lines. The brief is already consumed alongside ~900 lines of other reference files (tokens.css, prohibitions.md, mechanism-catalog.md, components.css). Total builder input is ~1,300 lines.

**Implication for enrichment:** Any addition to the brief must be matched by equal or greater REMOVAL. The brief cannot grow indefinitely. If compositional intelligence enrichment adds 80 lines, consider what 80 lines can be removed or compressed.

**Candidates for compression:**
- Section 8 (CSS Vocabulary, lines 183-208) is 25 lines of concrete patterns that could move to mechanism-catalog.md
- Section 12 (Restraint List, lines 275-293) is 18 lines that could be compressed to 8
- Section 13 (Accessibility, lines 296-338) is 42 lines of HTML template that could move to a reference file

### 7C. The Pipeline Has No Version Control Mechanism

Changes to pipeline files are not tracked within the pipeline itself. There's no changelog, no version number, no "this file was last updated on X." If someone edits gate-runner.md to change a threshold, there's no mechanism to alert the conventions-brief.md maintainer.

**Recommendation:** Add a `## CHANGELOG` section to each pipeline file, or maintain a `pipeline-changelog.md` that tracks modifications across all files.

### 7D. The SKILL.md Is Both Orchestrator AND Specification

SKILL.md currently serves two roles:
1. **Orchestrator:** The code that runs the pipeline (spawn agents, run gates, etc.)
2. **Specification:** The documentation of WHAT the pipeline does (gate table, PA assignments, success bar)

These two roles have different update cadences. The orchestrator changes when process changes. The specification changes when behavior changes. Conflating them means every specification change is also an orchestrator change.

**This is acceptable at 408 lines.** If SKILL.md grows past ~600 lines, consider separating specification (what gates exist, what PA questions are asked) from orchestration (how agents are spawned, how gates are run).

---

## 8. SUMMARY: KEY TAKEAWAYS FOR PIPELINE MODIFICATION

1. **Edit first, add second.** 80% of changes are best expressed as edits to existing files.
2. **Match knowledge to layer.** World-model knowledge goes in the brief. Mechanical checks go in gates. Perceptual assessment goes in PA questions. Process goes in SKILL.md.
3. **Respect the 1,500-line input cap.** Every line added to builder input must earn its place. Consider what to REMOVE when adding.
4. **Synchronize thresholds manually.** Duplication across files is inherent to LLM pipelines. Annotate source of truth. Check synchronization after any threshold change.
5. **New files require all four criteria.** Role separation, size justification, reader separation, and update independence.
6. **New pipeline stages are highest-cost.** Only add if experimentally justified. The Fat Core thesis specifically argues against separation.
7. **The conventions-brief.md is at 403 lines.** It is the most important file for builder quality and is near its cognitive load ceiling. Additions require compression elsewhere.
