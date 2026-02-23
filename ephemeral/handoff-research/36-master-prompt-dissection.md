# 36 -- Master Execution Prompt Dissection

## What This File Covers

Complete structural analysis of the master execution prompt (`ephemeral/build-page-prompt/MASTER-EXECUTION-PROMPT.md`) -- what it says, how it was assembled from 42+ intermediate files, what research is visible in it, its relationship to the conventions brief and TC brief, and what was kept vs dropped during assembly.

---

## 1. WHAT THE MASTER PROMPT ACTUALLY SAYS

### Identity

The master execution prompt is a **578-line orchestration document** dated 2026-02-19. It is NOT a prompt that builds pages directly. It is a prompt that **builds the /build-page pipeline** -- creating the files, skills, and infrastructure that a future `/build-page` invocation will use.

This is a critical distinction: the prompt does not say "build me a page." It says "write the files that define how pages get built, then validate by building two test pages."

### Structure: 10 Sections + 9 Checkpoints

| Section | Lines | Purpose |
|---------|-------|---------|
| S0: Mission + Non-Negotiables | 1-41 | 3 non-negotiables, 10-action file inventory, execution order |
| S1: Team Architecture | 44-101 | 4-wave team design (11 agents), dependency graph, communication protocol |
| S2: Conventions Brief | 105-183 | Instructions for writing the conventions brief (~240 lines) |
| S3: Gate Runner | 186-228 | Instructions for writing the gate runner (~400 lines, 21 gates) |
| S4: PA Questions | 230-263 | Instructions for writing 8 Tier 5 PA questions |
| S5: Build-Page SKILL.md | 266-345 | Instructions for writing the /build-page orchestrator skill (~350-400 lines) |
| S6: Skill Edits | 349-431 | 39 edits (23 TC + 16 PA) with execution orders |
| S7: CLAUDE.md Edits | 433-461 | 20 edits (11 CLAUDE.md + 9 compositional-core/CLAUDE.md) |
| S8: Validation Protocol | 465-527 | 2 validation builds with pass criteria and verdict table |
| S9: Recency Restatement | 532-578 | Repeats 3 non-negotiables, completion criteria |

### The 3 Non-Negotiables (Primacy + Recency Sandwich)

These appear in S0 (first thing the reader sees) AND S9 (last thing the reader sees):

1. **Container: 940-960px.** Every page, no exceptions. Called "#1 Phase D failure mode."
2. **Warm palette: R >= G >= B** on every background. No cool grays, no pure black/white.
3. **Perceptible CSS:** >= 15 RGB background delta, >= 2px font-size delta, no letter-spacing < 0.025em, no stacked gaps > 120px.

### What It Specifies Be Built

**4 new files:**
- `design-system/pipeline/conventions-brief.md` (~240 lines) -- world-description for the builder
- `design-system/pipeline/gate-runner.md` (~400 lines) -- 21 programmatic verification gates
- `design-system/pipeline/flagship-pa-questions.md` (~80 lines) -- 8 Tier 5 depth questions
- `~/.claude/skills/build-page/SKILL.md` (~350-400 lines) -- the /build-page orchestrator

**59 edits to existing files:**
- 23 edits to tension-composition skill (tier removal + enrichment)
- 16 edits to perceptual-auditing skill (tier removal + Tier 5 addition)
- 11 edits to design-system/CLAUDE.md (/build-page integration)
- 9 edits to compositional-core/CLAUDE.md (ALWAYS FLAGSHIP)

**2 validation builds:**
- Build A: Gas Town (Yegge) content -- structurally heterogeneous (code, tables, quotes)
- Build B: RESEARCH-SYNTHESIS -- uniform prose, known hard content

### Distinct Rules/Instructions Count

I count approximately **71 distinct rules/instructions** in the prompt:

- 3 non-negotiables (stated twice = 6 mentions)
- 15 threshold values (container, RGB delta, font-size delta, letter-spacing, stacked gap, channels/boundary, zone count, border configs, component types, ARIA landmarks, mechanism count, typography zones, PA-05 target, Tier 5 target, fix cycle max)
- 9 checkpoints with ~60 binary verification items total
- 11 agent role specifications with model assignments
- 9 "critical adjustments" across sections (5 for conventions brief, 3 for gate runner, 9 for SKILL.md)
- 5 wave dependency constraints
- 4 file path corrections (components.css, conventions-brief path, threshold standardizations)
- Pass criteria for 2 validation builds
- 5-row verdict table

### Team Architecture

The prompt specifies a 4-wave team:

| Wave | Agents | Model | Purpose |
|------|--------|-------|---------|
| 1 | 6 (#1,#2,#4,#5,#6,#7) | 2 Opus + 4 Sonnet | Write 4 new files + edit 4 existing |
| 1.5 | 1 (#3) | Sonnet | PA questions (after #6) |
| 2 | 2 (#8,#9) | Both Opus | Cross-reference + quality audit |
| 3 | 1 (#10) | Sonnet | Fix BLOCKING issues (conditional) |
| 4 | 1 (#11) | Opus | Validation builds |

Key design decisions:
- Opus for creative/judgment roles (#1 conventions brief, #4 SKILL.md, #8/#9 verification, #11 validation)
- Sonnet for mechanical roles (#2 gate runner, #3 PA questions, #5/#6 skill edits, #7 CLAUDE.md edits, #10 fixes)
- Contention resolution: Agent #6 (PA skill editor) runs before Agent #3 (PA questions writer) -- both touch the PA skill
- Communication: file-bus primary, SendMessage only for blocking issues

---

## 2. HOW IT WAS ASSEMBLED (The Build-Page-Prompt Directory)

### The Assembly Pipeline

The `ephemeral/build-page-prompt/` directory contains **46 files totaling 25,461 lines (~1.1MB)**. These represent a multi-phase assembly pipeline:

**Phase 1: Research Extraction (8 agents, ~370KB)**

Files 01-08 are research extractions, each by an Opus agent reading the full upstream corpus:

| File | Lines | Agent | What It Extracted |
|------|-------|-------|-------------------|
| 01-brief-research.md | ~40k | brief-researcher | Everything for conventions-brief -- exact values, thresholds, CSS snippets from tokens.css, prohibitions.md, mechanism-catalog.md, flagship-44-recipe (23 reports), fat-core-capability (29 reports) |
| 02-gate-research.md | ~41k | gate-researcher | 21 gates with JS implementations, threshold sources |
| 03-pa-research.md | ~30k | pa-researcher | PA question design, Tier 5 questions, auditor assignments |
| 04-orchestrator-research.md | ~34k | orchestrator-researcher | Build pipeline architecture, fix cycle design |
| 05-tc-skill-audit.md | ~33k | tc-auditor | Current TC skill state, required edits |
| 06-pa-skill-audit.md | ~37k | pa-auditor | Current PA skill state, required edits |
| 07-metacog-analysis.md | ~45k | metacog-analyst | **Self-referential analysis** -- 10 failure modes for the master prompt itself |
| 08-nav-validation-research.md | ~36k | nav-researcher | CLAUDE.md edit requirements |

Key insight: **File 07 (metacog analysis) is extraordinary** -- it identifies 10 failure modes (skimming collapse, checklist drift, compression cascade, orchestrator logic errors, wrong file assumptions, threshold creep, success bar drift, validation theater, meta-output ratio, and premature optimization) that the prompt itself could fall victim to. It recommends a 400-600 line target, primacy/recency zones, and anti-checklist formatting.

**Phase 2: Cross-Validation (8 agents, ~310KB)**

Files 09-15 cross-reference the extractions:

| File | Lines | What It Does |
|------|-------|-------------|
| 09-cd006-ground-truth.md | ~43k | Validates extractions against CD-006 (the actual Ceiling artifact) |
| 10-failure-forensics.md | ~30k | Validates against Flagship failure root causes |
| 11-format-analysis.md | ~39k | Determines format ratios (recipe vs conventions vs checklist) |
| 12-builder-simulation.md | ~39k | Simulates a fresh builder reading the brief |
| 13-cross-validation.md | ~20k | Cross-validates thresholds across sources |
| 14-failure-pattern-match.md | ~38k | Matches failure patterns to prevention mechanisms |
| 15-stack-transfer-test.md | ~48k | Tests whether compositional intelligence survives compression |
| 02-brief-crossref.md | ~37k | Cross-references brief research against other extractions |

**Phase 3: Drafting (5 drafts, ~220KB)**

| File | Lines | What It Contains |
|------|-------|-----------------|
| DRAFT-09-conventions-brief-section.md | ~36k | The actual conventions brief text (between code fences) + assembly instructions |
| DRAFT-10-gate-runner-section.md | ~38k | The actual gate runner content + 21 gates with JS |
| DRAFT-11-pa-orchestrator-section.md | ~28k | PA questions + orchestrator SKILL.md content |
| DRAFT-12-skill-edits-section.md | ~61k | All 39 edits with exact old_string/new_string pairs |
| DRAFT-13-claude-md-architecture-section.md | ~41k | All 20 CLAUDE.md edits + validation protocol |

Plus earlier drafts: DRAFT-orchestrator.md, DRAFT-pa-questions.md, 10-gate-runner-draft.md

**Phase 4: Auditing (7 files, ~200KB)**

| File | What It Does |
|------|-------------|
| 16-team-architecture.md | Team design verification |
| 16-CONTRARIAN-CHALLENGE.md | Adversarial challenge -- "What WILL fail on first run?" |
| AUDIT-14-compression.md | Compression ratio analysis |
| AUDIT-15-contrarian.md | Adversarial challenge of assembled draft |
| AUDIT-16-metacog-review.md | Meta-review of prompt quality |
| 42-gate-crossref.md | Gate threshold cross-reference |

**Phase 5: Verification (6 files, ~135KB)**

| File | What It Does |
|------|-------------|
| CROSSREF-41-brief-verification.md | Brief vs spec verification |
| CROSSREF-45-skill-verification.md | Skill edit verification |
| CROSSREF-47-team-design-verification.md | Team design verification |
| VERIFY-brief-spec.md | Brief against user specification |
| VERIFY-gate-spec.md | Gates against user specification |
| VERIFY-pa-orchestrator-spec.md | PA + orchestrator against spec |
| VERIFY-coherence.md | Cross-draft coherence check |

**Phase 6: Assembly (3 files)**

| File | What It Does |
|------|-------------|
| ASSEMBLED-DRAFT-v1.md | First assembled draft (628 lines) |
| ASSEMBLED-VERIFICATION-LOG.md | Verification of assembly (232 lines) |
| ASSEMBLY-CHANGELOG.md | Final assembly decisions (188 lines) |

**Phase 7: Fresh-Eyes Validation**

| File | What It Does |
|------|-------------|
| VALIDATION-18-fresh-eyes.md | Fresh Opus instance reviews final prompt with zero context |

### Compression Ratios

| Stage | Lines In | Lines Out | Ratio |
|-------|----------|-----------|-------|
| Research extraction | ~12,000+ source lines | ~370KB (8 files) | Expansion (research is summarized but with specific values) |
| Cross-validation | ~370KB | ~310KB (8 files) | Near 1:1 (validation adds, doesn't compress) |
| Drafting | ~370KB + ~310KB | ~220KB (5 drafts) | ~3:1 |
| Assembly | ~220KB drafts + ~335KB audit/verify | 628 lines (ASSEMBLED-DRAFT) | ~11.2:1 |
| Final polish | 628 lines | 578 lines (MASTER-EXECUTION-PROMPT) | ~1.1:1 |
| **Total** | **~25,461 lines across 46 files** | **578 lines** | **~44:1** |

### What Was Kept vs Dropped

**KEPT (in the master prompt):**
- All threshold values (15 distinct thresholds with exact numbers)
- Team architecture with agent assignments and model selections
- File paths for all inputs and outputs
- Execution ordering (wave structure, dependency graph)
- 9 checkpoints with binary verification items
- Primacy/recency sandwich of 3 non-negotiables
- 5 critical adjustments per section for convention brief, gate runner, SKILL.md
- Validation protocol with verdict table

**DROPPED (referenced by pointer to DRAFT files instead of embedded):**
- The actual conventions brief text (232 lines in DRAFT-09)
- The actual gate runner code (1,048 lines in DRAFT-10)
- The actual PA questions and SKILL.md (643 lines in DRAFT-11)
- All 59 edit pairs (1,121 lines in DRAFT-12)
- All 20 CLAUDE.md edit pairs (885 lines in DRAFT-13)
- All metacognitive analysis (failure modes, compression analysis)
- All cross-validation evidence
- All adversarial challenges and their resolutions

**The prompt is an ORCHESTRATION layer that points to content, not a content document.** This is a deliberate design choice (DC-02 and DC-03 in the Assembly Changelog): embedding everything would produce a 3,000+ line prompt, well into "skimming collapse" territory per the metacognitive analysis.

### 7 BLOCKING Issues Fixed During Assembly

The assembly process caught and fixed 7 blocking issues:

1. **BF-01:** `merged-components.css` referenced but doesn't exist -- fixed to `components.css`
2. **BF-02:** SC-10 stacked gap 108px vs 120px inconsistency -- standardized to 120px
3. **BF-03:** SC-14 letter-spacing 0.02em vs 0.025em -- standardized to 0.025em
4. **BF-04:** Quality Floor section missing from conventions brief -- added Section 9B
5. **BF-05:** 80% creative authority number missing from brief -- added to Section 9
6. **BF-06:** DG-4 references `_build-plan.yaml` that builder never produces -- changed to `_build-log.md`
7. **BF-07:** Mechanism count threshold mismatch (per-category only vs total + per-category) -- added >= 14 total

---

## 3. WHAT RESEARCH IS VISIBLE IN THE PROMPT

### Directly Cited/Referenced Research

The master prompt does NOT cite specific research reports by name. There are zero references to "R1," "R3," "R5," or any specific research finding IDs. However, the following research is **clearly derived from specific findings** even without citation:

| Prompt Statement | Research Source | Evidence |
|-----------------|---------------|---------|
| "Container 940-960px -- #1 Phase D failure mode" | Phase D validation (14 agents, 2026-02-15) | 4/5 pages violated container width |
| "R >= G >= B on every background" | Flagship failure forensics (2026-02-17) | Cool grays detected in failed Flagship |
| ">= 15 RGB background delta" | Flagship failure (1-8 RGB proved imperceptible) | 11/25 corpus files + flagship analysis |
| "No letter-spacing below 0.025em" | Flagship failure (107 lines of 0.001-0.01em invisible) | Anti-conditions S-08 median value |
| "No stacked gaps above 120px" | Flagship failure (210-276px whitespace voids) | 6 void patterns in failed Flagship |
| ">= 14 mechanisms across 5 categories" | Tier model research (11 agents, 2026-02-15) | "Sample 2-4 mechanisms" identified as most limiting spec by ALL 11 agents |
| ">= 3 channel shifts at zone boundary" | Multi-coherence research confirmed across middle + ceiling + flagship experiments | CONFIRMED tier threshold |
| "PA-05 >= 3.5 AND Tier 5 >= 6/8" | Flagship 4/4 recipe research (24 agents, 23 reports) | Success bar from 14-dimension Flagship definition |
| "CD-006 is FLOOR REFERENCE, not target" | CD-006 reclassification (2026-02-19) | Reclassified from Flagship to CEILING (41 mechanisms but no pervading metaphor) |
| "Conventions brief as WORLD-DESCRIPTION not CHECKLIST" | Pipeline analysis (50+ agents, 41 files) | "Recipe vs Checklist = success vs failure" finding |
| "80% creative authority" | Flagship 4/4 recipe research | 230-line conventions brief draft specified 80/20 split |
| "Builder model ALWAYS Opus" | Flagship retrospective (9 agents) | Sonnet-for-builders as unexamined variable; CD-006 was Opus-built |

### Research Invisible in the Prompt (but present in DRAFT files)

The DRAFT files referenced by the prompt contain extensive research citations that the builder eventually sees. For example, DRAFT-09 (conventions brief) contains:

- Explicit references to CD-006 CSS patterns (component DNA, border budget, dark slab inversion)
- Flagship failure forensics (238 lines of invisible CSS = 22% budget waste)
- Anti-scale model from scale exploration research (5 agents, 2026-02-18)
- Tier model thresholds from richness + rigidity research (11 agents, 2026-02-15)
- Multi-coherence binding rules from enrichment research

The master prompt itself is thin on research references, but the files it points to are research-dense.

---

## 4. RELATIONSHIP: MASTER PROMPT vs CONVENTIONS BRIEF vs TC BRIEF

### Master Prompt (578 lines) -- HOW to build the pipeline

- Audience: The team lead / pipeline assembler (a fresh Claude instance)
- Purpose: Orchestrate creation of pipeline files, then validate
- Format: Procedural recipe with verification checkpoints
- Contains: Team architecture, file inventory, threshold consistency matrix, pass criteria
- Does NOT contain: Actual CSS values, actual mechanism descriptions, actual world-model

### Conventions Brief (609 lines, produced from the pipeline) -- WHAT the design world IS

- Audience: The Opus builder agent
- Purpose: Describe the design system's physics, vocabulary, and creative space
- Format: 55% world-description / 25% recipe / 20% checklist (target)
- Contains: 15 sections covering identity, perception, richness, multi-coherence, fractal echo, unified metaphor, transition grammar, CSS vocabulary, creative authority, quality floor, compositional memory, 5 self-check questions, restraint list, accessibility, responsive
- Key innovation: Describes CSS thresholds as "physics of perception" rather than rules -- backgrounds merge below 15 RGB, letter-spacing is invisible below 0.025em, etc.

### TC Brief (~99 lines, produced per-page by tension-composition skill) -- WHAT to build for THIS content

- Audience: The Opus builder agent (combined with conventions brief)
- Purpose: Content-specific building instructions derived from analyzing the source material
- Format: 8 sections -- structural metaphor, zone architecture, content tensions, selected mechanisms, metaphor-implied CSS directions, build recipe, detection expectations, builder anchors
- Contains (for Gas Town): "COMMAND POST / FIELD DISPATCH" metaphor, 4-zone architecture, 15 mechanisms, per-zone CSS recipes with specific hex values and px values, boundary CSS specifications with channel counts, 3 builder anchors

### Relationship: Complementary Layers

These three documents form a **telescoping specification**:

```
Master Prompt (meta-layer): HOW to assemble the pipeline
    |
    v
Conventions Brief (world-layer): WHAT the design physics are
    |
    v
TC Brief (instance-layer): WHAT to build for THIS specific content
```

They are NOT redundant. The master prompt never reaches the builder. The conventions brief reaches the builder but is content-agnostic. The TC brief is content-specific and references the conventions brief's vocabulary (e.g., uses the 4px/3px/1px border budget, the SMOOTH/BRIDGE/BREATHING transition types, the multi-coherence channel framework).

**What the TC brief adds on top:**
1. A structural METAPHOR specific to the content ("Command Post / Field Dispatch" for Gas Town)
2. A specific ZONE ARCHITECTURE (4 zones with names, density, pacing, layout)
3. CONTENT TENSIONS identified from source material (3 tension axes for Gas Town)
4. 15 SELECTED MECHANISMS from the 18 in the catalog, with per-zone assignments and metaphor roles
5. Specific HEX VALUES and PX VALUES for each zone (bg #FEF9F5 -> #F5F0E8 -> #FAF5ED -> #FEF9F5)
6. BOUNDARY CSS SPECIFICATIONS with channel counts (Z1->Z2: 4 channels, Z2->Z3: 3 channels)
7. TOP 5 CSS SNIPPETS -- actual code the builder can copy
8. BUILDER ANCHORS -- 3 things to never forget

The TC brief is essentially the **creative composition** -- the part that requires judgment about how THIS content maps to the design system's vocabulary. The conventions brief gives the vocabulary; the TC brief composes with it.

---

## 5. ASSEMBLY PROCESS: HOW 25K LINES BECAME 578

### Phase-by-Phase Assembly Genealogy

```
337 research findings (R1-R5)
    +
12,000+ lines (flagship-44-recipe, 23 reports)
    +
~750KB (fat-core-capability, 29 reports)
    +
~1.7MB (pipeline-analysis, 41 files)
    |
    v [8 Opus research extractors]
~370KB research extractions (8 files)
    |
    v [8 Opus cross-validators]
~310KB cross-validation reports (8 files)
    |
    v [5 Opus drafters + 2 earlier drafts]
~220KB draft sections (5 canonical drafts)
    |
    v [7 auditors: compression, contrarian, metacog, 4 spec verifiers]
~335KB audit/verification reports
    |
    v [1 Opus assembler reading 13 sources]
628-line assembled draft (11.2:1 compression)
    |
    v [1 Opus polisher + 1 fresh-eyes validator]
578-line MASTER-EXECUTION-PROMPT.md
```

**Total agents involved in assembly:** ~34 agents across 42+ deliverable files.

### What the Fresh-Eyes Validator Found

The fresh-eyes Opus validator (zero project context) rated the prompt:

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Clarity | 4/5 | Sequence clear, wave structure explicit. Minor: Agent numbering gap (#3 in Wave 1.5, not Wave 1) |
| Completeness | 3/5 | Content is by-reference (DRAFT files), not embedded. If any DRAFT is missing/corrupted, agent fails. |
| Actionability | 4/5 | Each agent has model, inputs, output, adjustments. Weak: Agent #3 verification scope ambiguous; constraint language < 20% is a judgment rule. |
| File Paths | 5/5 | All 14 paths clear and unambiguous. Path correction for conventions-brief explicitly called out. |
| Overall | 4/5 | 0 BLOCKING issues. 3 CONCERNING (by-reference fragility, agent #3 scope, conventions brief path correction as single point of failure). |

### Key Assembly Design Decisions

1. **By-reference not inline** -- Content lives in DRAFT files, prompt points to them. Avoids 3000+ line prompt. Trade-off: agents must read external files correctly.
2. **9 checkpoints** -- More than the recommended 4. Each is 3-8 binary items. Excess verification preferred over insufficient.
3. **Lock sheet included** -- DRAFT-11 argued against it. Team lead overruled. Included as lightweight Step 4.5.
4. **Conventions-brief-writer as Opus** -- Originally Sonnet in early drafts. Changed to Opus via CROSSREF-47 (this is "the most important file in the entire pipeline").
5. **Edit count corrected** from 49 to 59 during assembly.

---

## 6. THRESHOLD CONSISTENCY MATRIX

The Assembly Changelog contains a verified threshold matrix showing standardized values across all prompt sections:

| Threshold | Standardized Value | Sections |
|-----------|-------------------|----------|
| Container width | 940-960px | S0, S2, S3, S5, S7, S9 |
| Background delta | >= 15 RGB | S0, S2, S3, S5, S7, S9 |
| Font-size delta | >= 2px | S0, S2, S3, S9 |
| Letter-spacing minimum | >= 0.025em | S0, S2, S3, S5, S9 |
| Stacked gap | <= 120px | S0, S2, S3, S5, S7, S9 |
| Channel shifts/boundary | >= 3, avg >= 4 | S2, S3, S5 |
| PA-05 threshold | >= 3.5 | S5, S8, S9 |
| Tier 5 threshold | >= 6/8 | S5, S8, S9 |
| Zone count | 3-5 | S2, S3 |
| Border configs | >= 3 distinct | S2, S3 |
| Component types | >= 8 | S2, S3 |
| Mechanism count | >= 14 total | S2, S3 |
| Fix cycles max | 3 | S5 |

Two inconsistencies were found and resolved during assembly:
- Letter-spacing: 0.02em (conventions brief) vs 0.025em (gate runner) -- standardized to 0.025em
- Stacked gap: 108px (conventions brief) vs 120px (gate runner) -- standardized to 120px

---

## 7. RISK ASSESSMENT (FROM CONTRARIAN ANALYSIS)

The contrarian challenge (file 16-CONTRARIAN-CHALLENGE.md) identified failure probabilities:

| Risk | Probability |
|------|------------|
| Brief reads as checklist despite conventions framing | 40-50% |
| Skill edits fail on exact string match | 30% |
| PA-05 < 3.0 on first run | 60-70% |
| PA-05 >= 3.5 on first run (Flagship target) | 5-15% |
| PA-05 >= 3.5 after fix cycles | 25-40% |
| Full Flagship first run | 5-10% |

The contrarian also found 3 "WILL FAIL" issues:
1. Two competing DRAFT-13 files -- resolved by using the -section variant as canonical
2. DRAFT-12 edit dependency violation (E-02 depends on R-08 but runs before it) -- flagged for fix
3. Conventions brief at 232 lines vs recommended ~100 -- accepted as "world-description scales differently"

---

## 8. WHAT THE MASTER PROMPT ACTUALLY PRODUCED

The Gas Town page was the first validation build. The produced artifacts:
- Output HTML page: `ephemeral/pages/gas-town-steve-yegge/`
- TC brief: 99 lines with "Command Post / Field Dispatch" metaphor, 4 zones, 15 mechanisms
- Conventions brief: 609 lines (actual, vs ~240 line target in prompt -- significantly over)
- Gate runner: 1,339 lines (actual, vs ~400 line target)
- PA questions: 158 lines (9 Tier 5 questions, vs 8 specified -- PA-68 was added)

The conventions brief ended up at 609 lines, nearly 3x the ~230 line target. The gate runner at 1,339 lines, over 3x the ~400 line target. These overruns suggest the DRAFT content was more extensive than the prompt's line estimates.

---

## 9. STRUCTURAL OBSERVATIONS

### The Prompt's Self-Awareness

The master prompt is unusually self-aware about its own failure modes:

- **Primacy/recency sandwich**: The 3 non-negotiables appear first AND last, per the metacognitive analysis's recommendation
- **Anti-skimming**: 9 checkpoints force verification at each stage
- **Anti-checklist**: Conventions brief explicitly specified as 55% conventions / 25% recipe / 20% checklist
- **Constraint language cap**: < 20% constraint words in conventions brief
- **By-reference design**: Avoids 3000+ line prompt that would trigger skimming collapse
- **Anti-meta warning**: "If you find yourself writing ABOUT the pipeline instead of BUILDING the pipeline, STOP and BUILD."

### The Compression Paradox

The prompt sits at the center of a paradox it explicitly acknowledges:

1. Research produced 337 findings across months of work
2. These were compressed into ~25,000 lines of assembly artifacts
3. Which were compressed into a 578-line prompt
4. Which will be compressed again by the fresh instance reading it

The metacognitive analysis (file 07) calculated: at 20% survival per compression boundary, 0.8% of original intelligence survives 3 boundaries. The prompt's response is to separate WHAT (conventions brief as world-description) from HOW (procedural recipe), hoping the world-description format survives compression better than rules.

### What Is NOT in the Prompt

The prompt contains zero:
- CSS code or specific CSS values (those are in the conventions brief)
- Mechanism descriptions (those are in the mechanism catalog)
- Soul constraint details beyond summary (those are in prohibitions.md)
- Research citations or finding IDs
- Philosophical rationale for any design decision
- Examples of good or bad pages

The prompt is deliberately **contentless orchestration** -- it knows the STRUCTURE of what to build but delegates all SUBSTANCE to referenced files.

---

## 10. FILES IN BUILD-PAGE-PROMPT (Complete Inventory)

### Research Extractions (8 files, ~296KB)
- `01-brief-research.md` (40k) -- conventions brief extraction
- `02-brief-crossref.md` (37k) -- brief cross-reference
- `02-gate-research.md` (41k) -- gate runner extraction
- `03-pa-research.md` (30k) -- PA extraction
- `04-orchestrator-research.md` (34k) -- orchestrator extraction
- `05-tc-skill-audit.md` (33k) -- TC skill audit
- `06-pa-skill-audit.md` (37k) -- PA skill audit
- `07-metacog-analysis.md` (45k) -- metacognitive failure modes

### Cross-Validation (7 files, ~256KB)
- `08-nav-validation-research.md` (36k)
- `09-cd006-ground-truth.md` (43k)
- `10-failure-forensics.md` (30k)
- `11-format-analysis.md` (39k)
- `12-builder-simulation.md` (39k)
- `13-cross-validation.md` (20k)
- `14-failure-pattern-match.md` (38k)

### Additional Research/Cross-Ref (5 files, ~152KB)
- `15-stack-transfer-test.md` (48k)
- `15-orchestrator-cross-ref.md` (28k)
- `17-gate-cross-ref.md` (34k)
- `18-skill-edit-cross-ref.md` (33k)
- `19-orchestrator-cross-ref.md` (27k)

### Drafts (8 files, ~282KB)
- `DRAFT-09-conventions-brief-section.md` (36k)
- `DRAFT-10-gate-runner-section.md` (38k)
- `DRAFT-11-pa-orchestrator-section.md` (28k)
- `DRAFT-12-skill-edits-section.md` (61k) -- largest file
- `DRAFT-12-skill-edits.md` (57k) -- earlier version
- `DRAFT-13-claude-md-architecture-section.md` (41k)
- `DRAFT-13-claude-md-architecture.md` (39k) -- earlier version
- `DRAFT-orchestrator.md` (19k)
- `DRAFT-pa-questions.md` (6.6k)
- `10-gate-runner-draft.md` (21k) -- early gate draft

### Auditing (7 files, ~196KB)
- `16-team-architecture.md` (35k)
- `16-CONTRARIAN-CHALLENGE.md` (28k)
- `20-team-cross-ref.md` (23k)
- `42-gate-crossref.md` (26k)
- `AUDIT-14-compression.md` (35k)
- `AUDIT-15-contrarian.md` (26k)
- `AUDIT-16-metacog-review.md` (28k)

### Verification (5 files, ~117KB)
- `CROSSREF-41-brief-verification.md` (41k)
- `CROSSREF-45-skill-verification.md` (29k)
- `CROSSREF-47-team-design-verification.md` (22k)
- `VERIFY-brief-spec.md` (14k)
- `VERIFY-gate-spec.md` (12k)
- `VERIFY-pa-orchestrator-spec.md` (13k)
- `VERIFY-coherence.md` (27k)

### Assembly + Validation (4 files, ~78KB)
- `ASSEMBLED-DRAFT-v1.md` (30k)
- `ASSEMBLED-VERIFICATION-LOG.md` (16k)
- `ASSEMBLY-CHANGELOG.md` (13k)
- `VALIDATION-18-fresh-eyes.md` (19k)

### Final Output
- `MASTER-EXECUTION-PROMPT.md` (29k, 578 lines)

### Verification Subdirectory
- `_verification/` -- outputs from Wave 2 and Wave 4 agents

---

**END OF DISSECTION**

**Key Takeaway:** The master execution prompt is a 578-line orchestration document assembled from 25,461 lines across 46 files by ~34 agents. It builds the /build-page pipeline (not pages directly). Its design reflects explicit self-awareness about compression loss, skimming collapse, and checklist drift. The prompt's innovation is separating orchestration (what files to create) from content (referenced DRAFT files) and world-description (conventions brief) from procedural instructions (SKILL.md). The 44:1 compression ratio from source material to final prompt is the highest in the project's history.
