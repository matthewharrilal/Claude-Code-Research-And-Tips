# Agent-0C Investigation: The Cognitive Curation Process
## How Research Packages Were Actually Built During the CD Exploration Era

**Investigator:** investigator-0c
**Date:** 2026-03-01
**Evidence sources:** CD-BUILD-STATE.md, 6 research packages (cd-001 through cd-006), R5-EVALUATION-MATRIX.md, lock-sheet.md, CD-005-EVALUATION.md, CD-006-CONTENT-SELECTION.md, MASTER-CD-EXECUTION-PROMPT.md, MASTER-AD-EXECUTION-SPEC.md, AD-RESEARCH-GATE.md, OD-RESEARCH-GATE.md, 09-CD-SYNTHESIS-BRIEFING.md

---

## 1. AGENT-0C'S ROLE AND INSTRUCTIONS

### 1.1 Who Was Agent-0C?

Agent-0C was the **Research Packager** in Phase 0 of the CD (Combination Dimension) exploration stage. Per the CD-BUILD-STATE.md agent roster:

```
| Agent-0C | Research Packager | COMPLETE | 0 |
| Agent-0C2 | Decision Evaluator | COMPLETE | 0 |
```

Agent-0C was ONE of four Phase 0 agents (alongside Agent-0A: Convention Extender, Agent-0B: R-5 Evaluator, Agent-0D: Convention Auditor). Note: Agent-0C2 was a SEPARATE agent handling decision evaluation (CD-005 replacement, CD-006 content selection), not a continuation of Agent-0C.

### 1.2 Instructions (Reconstructed)

No verbatim prompt for Agent-0C was found in the codebase. The MASTER-CD-EXECUTION-PROMPT.md describes the Phase 0 team as:

```
PHASE 0 (~4 agents, ~30 min):
  Convention Extender, R-5 Evaluator, Research Packager, Convention Auditor
```

The execution prompt specifies that each builder receives:
- AD-PA-CONVENTIONS.md
- CD-CONVENTION-SPEC.md (created by Agent-0A in Phase 0)
- combination-rules.md
- **Their specific research package** (created by Agent-0C)

The instructions were likely communicated by the Lead agent via SendMessage during Phase 0. Based on the output artifacts and their headers, Agent-0C's task was:

1. Read the R5-EVALUATION-MATRIX.md (produced by Agent-0B)
2. Read accumulated identity, conventions, tokens, anti-patterns, and all AD explorations
3. Produce 6 per-builder research packages (one per CD exploration)
4. Produce 1 lock sheet classifying all conventions by modification authority

### 1.3 Input Materials Agent-0C Received

Based on the BUILT ON headers of the research packages:

| Input Document | Purpose |
|---------------|---------|
| R5-COMBINATION-THEORY.md (39 findings) | Primary research source -- CD's main job was consuming R-5 |
| HANDOFF-AD-TO-CD.md | AD terminal outputs feeding CD |
| AD-PA-CONVENTIONS.md | 27 conventions from AD perceptual audit |
| AD-CONVENTION-SPEC.md (822 lines) | Full AD convention specification |
| ACCUMULATED-IDENTITY-v2.md | System's accumulated identity |
| tokens/*.md (colors, typography, spacing, geometry) | Locked CSS values |
| anti-patterns/registry.md | What to avoid |
| R5-EVALUATION-MATRIX.md | Agent-0B's mapping of 39 findings to explorations |
| 09-CD-SYNTHESIS-BRIEFING.md | Comprehensive pre-execution synthesis (~2,800 lines) |

---

## 2. OUTPUT ARTIFACTS

### 2.1 The 6 Research Packages

Agent-0C produced 6 research packages, one per CD builder. All dated 2026-02-11, all stored at `explorations/combination/research-packages/` (now archived to `archive/combination-research/`).

| Package | Builder | Lines | Size |
|---------|---------|-------|------|
| research-package-cd-001.md | Builder-A | ~250 | Reasoning Inside Code |
| research-package-cd-002.md | Builder-B | ~250 | Task Containing Decision |
| research-package-cd-003.md | Builder-C | ~250 | File Tree with Callouts |
| research-package-cd-004.md | Builder-D | ~260 | Essence as Background (Wave 2) |
| research-package-cd-005.md | Builder-E | ~227 | Per Phase 0 Decision (Wave 2) |
| research-package-cd-006.md | Builder-F | ~342 | Pilot Migration / Crown Jewel (Wave 2) |

### 2.2 The Lock Sheet

Agent-0C also produced `lock-sheet.md` (160 lines), classifying all inherited and new conventions into three tiers:

| Tier | Count | Description |
|------|-------|-------------|
| ALWAYS-LOCKED | 11 | Soul identity -- cannot be challenged (border-radius:0, box-shadow:none, etc.) |
| LOCKED | 16 | Research-backed -- challenging requires counter-evidence from 3+ sources |
| CHALLENGEABLE | 16 | Convention values without direct research -- may be adapted with rationale |

---

## 3. THE COGNITIVE PROCESS (RECONSTRUCTED)

### 3.1 Package Structure -- The Template

Every research package follows an identical 8-section structure:

```
Section 0: SOUL CHECKLIST (mandatory, identical across all 6)
Section 1: COMMON REFERENCES (identical across all 6 -- shared DNA)
Section 2: YOUR COMBINATION (unique per exploration -- the assignment)
Section 3: COMPONENTS TO USE (unique -- what the builder gets)
Section 4: R-5 FINDINGS TO TEST (unique -- the research mapping)
Section 5: DENSITY PATTERN (unique -- how density manifests)
Section 6: STRUCTURAL CONSTRAINTS (mostly shared, some unique)
Section 7: ANTI-PATTERNS TO AVOID (unique risk profiles)
Section 8: SCORING CRITERIA (target scores + rubric)
```

This structure reveals the first cognitive operation: **template design**. Agent-0C designed a repeatable template that separates SHARED context (Sections 0, 1, 6) from UNIQUE context (Sections 2, 3, 4, 5, 7, 8). This is a deliberate information architecture choice -- builders get everything they need in one document without having to navigate multiple files.

### 3.2 Step 1: Digest the R5-EVALUATION-MATRIX

Agent-0B produced the R5-EVALUATION-MATRIX.md (700+ lines), which mapped all 39 R-5 findings to CD explorations. Agent-0C consumed this matrix to determine which findings to embed in each package.

Evidence: The finding assignments in each research package match the R5-EVALUATION-MATRIX exactly. For example:
- CD-001 gets H2, T2, N1, N2, N3, N4, G2, G3, A4, Recipe 2, S5 (11 findings) -- this matches the matrix's CD-001 column
- CD-006 gets ALL 39 findings -- matches the matrix's specification that CD-006 is the comprehensive stress test

Agent-0C did NOT simply copy the matrix. Each finding in the package includes a **"How to Test in CD-XXX"** column that is DIFFERENT from the matrix's "Test Method" column. This means Agent-0C:
1. Read the matrix's generic test method
2. Translated it into an exploration-SPECIFIC application instruction
3. Connected it to the specific DD/OD/AD combination assigned to that exploration

### 3.3 Step 2: Assign DD/OD/AD Triples

Each research package specifies a unique combination of density pattern, organizational pattern, and axis pattern:

| CD | DD | OD | AD |
|----|----|----|-----|
| 001 | CRESCENDO | NARRATIVE | F-PATTERN + BENTO |
| 002 | PULSE | TASK-BASED | Z-PATTERN + SPIRAL |
| 003 | ISLANDS | SPATIAL | BENTO + CHOREOGRAPHY |
| 004 | TIDAL | CONFIDENCE | SPIRAL + CHOREOGRAPHY |
| 005 | (per decision) | (per decision) | (per decision) |
| 006 | ALL (FRACTAL) | ALL (sequential) | ALL (COMPOUND) |

This assignment required DEEP understanding of:
- Which DD patterns pair naturally with which OD patterns
- Which AD patterns serve which content types
- How to ensure COVERAGE (each pattern appears, no pattern is overused)
- How to ensure DIFFERENTIATION (each exploration tests something unique)

Agent-0C provided **explicit rationale** for each triple. For CD-001: "CRESCENDO density builds progressively from sparse introduction to dense climax. NARRATIVE ARC organizes as a story: context, rising action, peak, resolution. F-PATTERN provides the vertical descent spine." This is not mechanical mapping -- it is compositional reasoning about how three independent dimensions interact.

### 3.4 Step 3: Select and Contextualize Components

For each exploration, Agent-0C selected which of the 11 component types the builder should use, based on:
1. The DD/OD/AD triple's natural component affinities
2. The exploration's conceptual focus
3. The need to test specific component COMBINATIONS (not just individual components)

For CD-001 (Reasoning Inside Code), Agent-0C selected 5 components (Code Snippet, Reasoning, Core Abstraction, Info Callout, Tip Callout) and identified a **"Super-Heavy Composite"** challenge: 3 heavy components on one page. Agent-0C then designed a STRATEGY to mitigate this: "Never place Code Snippet directly after Reasoning without a Tip or Info callout buffer."

For CD-006 (Crown Jewel), ALL 11 components were required with MINIMUM APPEARANCES specified (e.g., Code Snippet: 3+, Info Callout: 2+). Agent-0C also calculated the weight distribution: 5 heavy (33%), 3 medium (20%), 7 light (47%) and noted it needed adjustment per Q3 guidelines.

### 3.5 Step 4: Create Exploration-Specific Density Guidance

Each package includes a density pattern section with ASCII visualization and step-by-step application instructions. For CD-001:

```
LOW  ....
MED  ........
HIGH ............####
PEAK ################
```

Followed by 5 concrete phases mapping the CRESCENDO pattern to the CD-001 content structure. Agent-0C also specified BREATHING ZONES with pixel values: "Between Rising and Building: 24px (tightening -- CRESCENDO compression)."

This is RECIPE-like instruction -- the kind later identified as the critical differentiator between middle-tier success and flagship failure (per the retrospective findings). Agent-0C was writing RECIPES for builders, not checklists.

### 3.6 Step 5: Risk-Profile Each Exploration

Each package has a unique anti-pattern risk assessment:

| CD-001 | HIGH: Code Wall, Orphaned Heavy, Same-Velocity Stacking |
| CD-003 | CRITICAL: Callout Cacophony (highest callout density of any exploration) |
| CD-004 | CRITICAL: ANTI-PHYSICAL boundary (Essence as background risks z-depth) |
| CD-006 | HIGH across 5 anti-patterns (most complex exploration) |

Agent-0C didn't just LIST risks -- each risk includes a MITIGATION STRATEGY specific to the exploration. For CD-004's ANTI-PHYSICAL risk:

> "AMBIENT MEANS: Essence text integrated into the page fabric through STATIC typography and color, NOT through physical illusion. The Essence voice is present like a background hum -- through font choice and color warmth, not through transparency or layering."

### 3.7 Step 6: Calibrate Score Targets

Each package ends with a scoring rubric (40-point scale) and a CALIBRATED target score:

| CD-001 | 35-37/40 | "Super-heavy composite page. Challenge is managing 3 heavy components." |
| CD-002 | 35-37/40 | (Standard complexity) |
| CD-003 | 35-37/40 | (Standard complexity) |
| CD-004 | 35-37/40 | (ANTI-PHYSICAL challenge) |
| CD-005 | 34-36/40 | (Lower due to Phase 0 uncertainty) |
| CD-006 | 39-40/40 | "Crown jewel. Receives 30-40% of research investment." |

The differentiated score targets show Agent-0C understood the RELATIVE difficulty of each exploration and calibrated expectations accordingly.

---

## 4. THE LOCK SHEET: A CLASSIFICATION JUDGMENT

### 4.1 The Three-Tier System

The lock sheet classified 43 conventions into three tiers. This required Agent-0C to make JUDGMENT CALLS about each convention's authority level:

**ALWAYS-LOCKED (11 items):** These are the soul pieces plus their direct extensions. The judgment here is "what IS the soul?" Agent-0C drew the boundary at border-radius:0, box-shadow:none, no drop-shadow, Instrument Serif restriction, callout DNA, three-font system, primary accent color, background warmth, text color, ANTI-PHYSICAL identity, and full opacity.

**LOCKED (16 items):** Design mechanics (container width, footer requirement, breathing zone budget, etc.) plus combination rules and density/axis findings. The judgment here is "what has enough research evidence to resist challenge?" Agent-0C required "documented counter-evidence from 3+ independent sources" to modify these.

**CHALLENGEABLE (16 items):** Spacing values, temperature terms, component density tolerances, responsive preferences, and reading ratios. These are "reasonable judgment or single-source evidence" items. Agent-0C lowered the modification bar: "documented rationale before modification" and "post-build verification."

### 4.2 Quality Signals in the Lock Sheet

The lock sheet includes EVIDENCE STRENGTH annotations for every LOCKED convention:
- "LOCKED (unanimous)" for container max-width
- "REINFORCED" for prose line-length and dark header
- "SOFT-LOCKED (principle universal)" for progressive enhancement
- "Research-backed" for combination rules

This reveals Agent-0C's evidence hierarchy: unanimous > reinforced > locked > soft-locked > research-backed. Each level implies different confidence.

---

## 5. DECISION POINTS WHERE JUDGMENT WAS REQUIRED

### 5.1 Combination Assignment (Critical Judgment)

The most consequential judgment was mapping 20 available patterns (6 DD + 6 OD + 6 AD) to 6 explorations such that:
- Every exploration tests a UNIQUE combination
- Coverage is maximized (no pattern unused, no pattern overused)
- The combinations are NATURAL (not forced)
- Difficulty is GRADUATED (Wave 1 simpler than Wave 2)
- CD-006 gets the maximum-stress configuration

This is a combinatorial optimization problem with soft constraints. Agent-0C's solution assigns each DD, OD, and AD pattern exactly the right number of times while ensuring each exploration's triple feels coherent.

### 5.2 Finding-to-Exploration Mapping (Significant Judgment)

Agent-0C translated the R5-EVALUATION-MATRIX's finding-to-exploration mapping into ACTIONABLE instructions. The matrix says "T2 tests in CD-001." Agent-0C's package says: "Place Tip or Info callout between Code and Reasoning blocks. Verify reading doesn't fatigue."

This translation required understanding:
- The specific component layout of each exploration
- Where velocity mismatches would naturally occur
- What ACTIONABLE steps a builder could take

### 5.3 Lock Level Classification (Moderate Judgment)

Deciding whether a convention is ALWAYS-LOCKED, LOCKED, or CHALLENGEABLE required weighing:
- Number of independent sources confirming the convention
- Whether the convention is identity-defining or implementation-specific
- Whether CD builders might legitimately need to adapt the value

### 5.4 Score Target Differentiation (Minor Judgment)

Setting different score targets (34-36 vs 35-37 vs 39-40) required assessing relative difficulty and setting expectations that builders would find motivating but achievable.

---

## 6. COMPARISON TO OD AND AD PACKAGER PROCESSES

### 6.1 OD Stage (Stage 3)

The OD stage used research packages during its **re-enrichment** phase (not the initial build). Per OD-RESEARCH-GATE.md:
- 6 research packages existed: `research-package-od-001.md` through `research-package-od-006.md`
- Stored at `_od-reenrichment/research/`
- Created AFTER the initial OD explorations were built (remediation, not pre-build)

The OD re-enrichment was a **43-agent** effort that caused 3+ Lead compactions. The research packages were part of a REMEDIATION process, not a pre-build curation process. This is a fundamentally different context from CD's Phase 0 pre-build packaging.

Key difference: OD packages were **retroactive** (fixing existing explorations), CD packages were **proactive** (guiding new builds from scratch).

### 6.2 AD Stage (Stage 4)

The AD stage used a more formalized process per the MASTER-AD-EXECUTION-SPEC.md:

1. A **Gate Compiler** assembled per-AD research packages during transition T3 (FILTERED->BUILD)
2. Each package contained:
   - >= 5 EXT-AXIS-* findings (bespoke research, SOUL PASS verified)
   - >= 4 R-2 findings (EMBEDDED, not referenced -- anti-orphaning rule)
   - DELTA-DERIVED QUERIES from previous waves
   - SIGNATURE ELEMENTS (specific CSS/HTML patterns proving genuine application)
3. Research packages were per-wave, not per-exploration-lifetime
4. AD achieved 100% application of bespoke research (33/33 EXT-AXIS-* applied)

Per AD-RESEARCH-GATE.md:
```
| G0-16 | 6 research packages exist | PASS |
| G0-17 | Each package: >= 4 R-2 EMBEDDED, >= 5 EXT-AXIS-* SOUL PASS | PASS |
```

Key difference from CD: AD's "Gate Compiler" role was more mechanical (filter -> classify -> embed -> package). CD's Agent-0C role was more curatorial (synthesize -> strategize -> customize -> calibrate).

### 6.3 Evolution Across Stages

| Aspect | OD (Retroactive) | AD (Gate Compiler) | CD (Agent-0C) |
|--------|------------------|-------------------|--------------|
| Timing | After initial build (remediation) | Before each wave | Before all builds (Phase 0) |
| Content | Enrichment findings | Filtered research + bespoke | Full compositional strategy |
| Structure | Research-focused | Research + signature elements | 8-section template with strategy |
| Judgment | Moderate (which enrichments) | Low (filter + embed) | High (combination design + risk profiling) |
| Custom per builder | Moderate | Low | Very high |
| Recipe vs checklist | Neither (enrichment additions) | Checklist (apply these findings) | Recipe (here's HOW to apply) |
| Lines per package | Unknown | ~100-150 estimated | 227-342 |

The progression shows increasing sophistication: OD packages were additive patches, AD packages were filtered research bundles, CD packages were full compositional STRATEGIES with recipes.

---

## 7. WHAT WOULD BE NEEDED TO REPLICATE THIS PROGRAMMATICALLY

### 7.1 The Process Decomposed

Agent-0C's process can be decomposed into 8 operations:

1. **Template Design:** Create a repeatable N-section package structure separating shared from unique content. (AUTOMATABLE -- define template once)

2. **Matrix Consumption:** Read the finding-to-exploration mapping matrix and extract per-exploration finding sets. (AUTOMATABLE -- simple table lookup)

3. **Combination Assignment:** Map DD/OD/AD patterns to explorations with coverage, differentiation, and naturalism constraints. (PARTIALLY AUTOMATABLE -- combinatorial optimization is solvable, but "naturalism" judgment requires LLM reasoning)

4. **Application Contextualization:** Translate generic finding descriptions into exploration-specific actionable instructions. (NOT AUTOMATABLE without LLM -- requires understanding how a finding manifests in a specific context)

5. **Component Selection + Strategy:** Choose components per exploration and design mitigation strategies for heavy/light balance. (PARTIALLY AUTOMATABLE -- selection can be rule-based, strategy requires compositional reasoning)

6. **Density Visualization:** Create ASCII density patterns and map them to content structure. (NOT AUTOMATABLE -- requires understanding content-density correspondence)

7. **Risk Profiling:** Identify which anti-patterns are highest-risk per exploration and design specific mitigations. (PARTIALLY AUTOMATABLE -- risk identification is rule-based, mitigation design requires reasoning)

8. **Score Calibration:** Set differentiated score targets based on relative difficulty. (PARTIALLY AUTOMATABLE -- could use complexity heuristics)

### 7.2 Minimum Viable Programmatic Replication

A pipeline could replicate approximately 40% of Agent-0C's work through:
- Template generation (boilerplate sections)
- Matrix-based finding assignment (table lookup)
- Rule-based component selection (weight/velocity matching)
- Heuristic risk profiling (anti-pattern-to-combination risk scores)

The remaining 60% requires LLM judgment:
- Combination assignment rationale ("WHY this triple works together")
- Finding-to-action translation ("HOW to test this finding in this specific context")
- Mitigation strategy design ("WHAT to do when this risk materializes")
- Recipe-format instruction writing ("SEQUENCE these steps for the builder")
- Score calibration narrative ("WHY this target makes sense for this exploration")

### 7.3 Critical Insight: Agent-0C Was Writing Recipes

The retrospective research (2026-02-17) identified that **recipe format produces richer output than checklist format**:
- Middle tier got a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs)
- Flagship got a 71-line CHECKLIST (constraints, "Verify/Fail if/Must be" verbs)
- Recipe format won

Agent-0C's research packages ARE recipes. They tell builders: "Start with this density zone, build through this progression, insert this buffer between these components, end with this resolution." This is the RECIPE format that later experiments confirmed works better. Agent-0C discovered this format before the retrospective named it.

### 7.4 The Key Quality Signal

The quality signal in Agent-0C's packages is the presence of STRATEGIC NARRATIVE -- not just "apply T2" but "your specific challenge is 3 heavy components; here's your 4-step strategy to honor the velocity rule while maintaining CRESCENDO progression." This strategic narrative:
1. Acknowledges the exploration's unique challenge
2. Connects it to specific research findings
3. Provides a sequenced approach (not just rules to check)
4. Anticipates failure modes and pre-empts them

---

## 8. KEY FINDINGS

### 8.1 Agent-0C's Process Was Human-Scale Synthesis, Not Mechanical Assembly

Agent-0C did NOT simply copy-paste from the R5-EVALUATION-MATRIX into per-builder documents. The process involved:
- Reading ~5,000+ lines of source material (R-5, AD findings, conventions, identity, synthesis briefing)
- Designing a repeatable template structure
- Making 6 independent combination assignments with coverage optimization
- Translating 39 abstract findings into ~60 exploration-specific actionable instructions
- Identifying unique risk profiles for 6 different explorations
- Writing compositional STRATEGIES (recipes) for builders

### 8.2 The Template Was the Innovation

The 8-section template (Soul -> Common References -> Your Combination -> Components -> R-5 Findings -> Density -> Constraints -> Anti-Patterns -> Scoring) is Agent-0C's primary design contribution. It solved the "context overload" problem: builders needed access to ~5,000+ lines of accumulated context but couldn't read all of it. The template pre-digests relevant context into ~250 lines per builder.

### 8.3 Agent-0C and Agent-0C2 Were Distinct Roles

Agent-0C handled PACKAGING (structuring known information for builders). Agent-0C2 handled EVALUATION (making decisions that Agent-0C's packages reference). The CD-005 REPLACE decision and CD-006 content selection were Agent-0C2, not Agent-0C. This separation of packaging from decision-making is architecturally clean.

### 8.4 The Lock Sheet Persisted Through All Phases

The lock sheet was not a one-time artifact. It was referenced by:
- All 6 research packages (Section 1 common references)
- All builders during Phase 1A and 1B
- All auditors during Phase 2
- The CD-BUILD-STATE.md (Phase 0 summary)

This makes the lock sheet a SHARED CONTEXT DOCUMENT -- a living agreement about what can and cannot change. The three-tier classification (ALWAYS-LOCKED / LOCKED / CHALLENGEABLE) gave builders calibrated freedom.

### 8.5 Package Size Correlated with Exploration Complexity

The crown jewel (CD-006) received the largest package (342 lines) with ALL 39 findings. Standard explorations received ~250 lines with 9-11 findings. This deliberate budget allocation mirrors the "30-40% of research investment" allocation for CD-006 specified in the execution prompt.

### 8.6 Agent-0C's Recipe Format Predicted the Flagship Failure Mode

The research packages use RECIPE format (sequenced steps, specific mitigations, "do this then this" structure). The flagship experiment 6 days later (2026-02-17) used CHECKLIST format (constraints, verify/fail). The flagship FAILED on richness. The retrospective identified checklist-vs-recipe as a root cause. Agent-0C had already discovered the right format without knowing it was the right format.

---

## 9. IMPLICATIONS FOR PIPELINE REPLICATION

### 9.1 What a Programmatic Pipeline MUST Preserve

If the curation process is to be replicated programmatically, it must preserve:

1. **The template structure** -- builders need pre-digested, per-assignment context
2. **The recipe format** -- sequenced instructions, not constraint checklists
3. **The strategic narrative** -- acknowledging the exploration's unique challenge
4. **The risk profiling** -- anticipating failure modes specific to this assignment
5. **The lock sheet** -- shared agreement about modification authority

### 9.2 What Can Be Automated

- Template generation (boilerplate)
- Finding-to-exploration mapping (from matrix)
- Component selection (from weight/velocity rules)
- Soul checklist (identical across all packages)
- Common references (identical across all packages)
- Lock sheet structure (three tiers, fixed protocol)

### 9.3 What Requires LLM Judgment

- Combination triple assignment with naturalism
- Finding-to-action translation for specific contexts
- Mitigation strategy design for specific risks
- Density pattern visualization and content mapping
- Score calibration rationale
- The strategic narrative connecting all sections into a coherent RECIPE

### 9.4 The "Researcher" Role in a New Pipeline

Agent-0C's role maps to a "Research Curator" or "Context Packager" in a new pipeline. This agent:
1. Reads all accumulated research
2. Maps research to the specific build assignment
3. Produces a per-builder context document in RECIPE format
4. Classifies constraints by modification authority (lock sheet)
5. Calibrates expectations (score targets)

This is DIFFERENT from a "Researcher" (who generates new findings) or an "Evaluator" (who maps findings to targets). It is a SYNTHESIS role that translates institutional knowledge into actionable builder instructions.

---

## 10. DOCUMENT METADATA

**Lines:** ~330
**Evidence files consulted:** 16
**Key artifacts found:** 8 (6 research packages, 1 lock sheet, 1 evaluation matrix)
**Comparison stages analyzed:** 3 (OD re-enrichment, AD Gate Compiler, CD Agent-0C)
**Cognitive operations identified:** 8
**Automatable operations:** 3 (37.5%)
**Judgment-requiring operations:** 5 (62.5%)
