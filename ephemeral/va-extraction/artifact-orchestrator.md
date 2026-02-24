# Orchestrator Flow — Pipeline v3 Complete Sequence
Date: 2026-02-23
Layer: 9 ORCHESTRATION (188 items) + 15 council-rerouted (Pattern 5 Category A) + 19 additional VALUES context items = 222 items total
Authority: Council Verdict (2026-02-23) — this document conforms to all rulings

---

## Document Purpose

This is the **master control document** for the orchestrator agent. It defines the complete pipeline sequence from content input to final page output: who does what, when, with what inputs, producing what outputs, and what decisions gate the next step.

**Council Mandates Applied:**
- Single-pass = DEFAULT. 3-pass = EXPERIMENTAL (blocked until experiment #21)
- Compositional Critic = REMOVED from default pipeline
- "Activation" framing = RETIRED. Replaced with PURPOSE + VOCABULARY
- Honest cost estimates required throughout
- Phased suppressor removal protocol (not blind removal)
- Evidence status on all predictions

---

## SECTION 0: MASTER EQUATION AND PRECONDITIONS

### Quality Equation
> Quality = Agent Capability x Content Affordance x Spec Fidelity
> Zero in ANY factor = zero quality

- **ITEM 2** (extract-d01-d03.md L13) Master Equation: Quality = Agent Capability x Content Affordance x Spec Fidelity
- **ITEM 3** (extract-d01-d03.md L14) Zero in ANY factor = zero quality

### Input Preconditions (All 3 must be TRUE before pipeline starts)

| # | Precondition | Factor | Check | Evidence |
|---|-------------|--------|-------|----------|
| 1 | Model = OPUS for builder | Agent Capability | Phase 2 model selection | OBSERVED (Opus correlates with better output, but variable not isolated) |
| 2 | Content has heterogeneity + metaphor viability | Content Affordance | Phase 0 content analysis | OBSERVED (content type affects output) |
| 3 | Suppressor count = 0 in constraint layer | Spec Fidelity | 73-line brief format design | THEORETICAL (never fully tested at 0) |

- **ITEM 127** (extract-d01-d03.md L278-280) INPUT PRECONDITIONS (All 3 must be TRUE)
- **ITEM 128** (extract-d01-d03.md L288-289) PRECONDITION 1: Model = OPUS
- **ITEM 129** (extract-d01-d03.md L290-291) Precondition 1 maps to Agent Capability factor
- **ITEM 130** (extract-d01-d03.md L293-294) Pipeline: Phase 2 model selection (enforce Opus)
- **ITEM 131** (extract-d01-d03.md L288-289) PRECONDITION 2: Content has heterogeneity + metaphor viability
- **ITEM 132** (extract-d01-d03.md L293-294) Precondition 2 maps to Content Affordance factor
- **ITEM 133** (extract-d01-d03.md L296-300) Pipeline: Phase 0 content analysis (assess content)
- **ITEM 134** (extract-d01-d03.md L288-290) PRECONDITION 3: Suppressor count = 0
- **ITEM 135** (extract-d01-d03.md L291-292) Precondition 3 maps to Specification Fidelity factor
- **ITEM 136** (extract-d01-d03.md L294-296) Pipeline: 73-line brief format design (eliminate suppressors)

### Pipeline Name and Framing

- **ITEM 1** (extract-d01-d03.md L11-15) PIPELINE v3 (official name)
  - Council ruling: "Activation Pipeline" name RETIRED. Use "Pipeline v3" only.
  - Framing: "PURPOSE + VOCABULARY: dispositional instructions provide compositional intent; value tables provide CSS vocabulary. The builder integrates both."

---

## SECTION 1: TOPOLOGY AND ARCHITECTURE

### Agent Topology: FLAT (each agent, direct I/O)

The orchestrator spawns agents sequentially. Each agent receives files directly from the orchestrator (not through intermediary agents). No hierarchical sub-leads.

- **ITEM 95** (extract-d01-d03.md L242) Hierarchical (lead->sub->worker) = OLD topology [META/historical]
- **ITEM 96** (extract-d01-d03.md L242) Flat (each agent, direct I/O) = NEW topology

### Iteration Architecture

**DEFAULT: Single-pass with self-evaluation**
- **ITEM 98** (extract-d01-d03.md L243) Single builder, self-evaluating (new)
- **ITEM 97** (extract-d01-d03.md L243) Multi-pass build (3-5 passes) = OLD [META/historical]
- Evidence: N=1 at PA-05 4/4 (Middle), N=1 at PA-05 3.5 (Gas Town). Both single-pass.

**EXPERIMENTAL: 3-pass architecture (blocked until experiment #21)**
- **ITEM 1** (extract-d06-d08.md L486) Middle = 1 pass, Ceiling = 2 passes, Flagship = 3 passes [EXPERIMENTAL]

### Model Selection

- **ITEM 99** (extract-d01-d03.md L244) Sonnet builders = OLD [META/historical]
- **ITEM 100** (extract-d01-d03.md L244) Opus builder (new)
  - Council ruling: STRONG RECOMMENDATION, not "non-negotiable." Pending experiment #19 isolation.
- **ITEM 86** (extract-d18-d20.md L1562) Opus builder (prerequisite for Composed mode)

### Builder Capabilities

- **ITEM 101** (extract-d01-d03.md L245) Zero Playwright for builders = OLD [META/historical]
- **ITEM 102** (extract-d01-d03.md L245) Builder HAS Playwright (new)
- **ITEM 62** (extract-d01-d03.md L128-129) Builder SEES its own output (Tier 4 info via EXPERIENCE)

### Iteration Policy: REBUILD Not FIX

- **ITEM 109** (extract-d01-d03.md L253) Fix cycles (FIX->FIX->FIX) = OLD [META/historical]
- **ITEM 110** (extract-d01-d03.md L253) REBUILD with fresh builder (new)
- **ITEM 111** (extract-d01-d03.md L255) Same builder in REPAIR mode = OLD [META/historical]
- **ITEM 112** (extract-d01-d03.md L255) Fresh builder in COMPOSING mode (new)
- **ITEM 113** (extract-d01-d03.md L256) Diagnostic language = OLD [META/historical]
- **ITEM 114** (extract-d01-d03.md L256) Generative/artistic language (new)
- **ITEM 115** (extract-d01-d03.md L257) S-11 + S-20 suppressors active = OLD [META/historical]

### Specification Format

- **ITEM 89** (extract-d01-d03.md L237) Checklist format = OLD (suppressor) [META/historical]
- **ITEM 91** (extract-d01-d03.md L238) "Verify/Fail if/Must be" = OLD compliance voice [META/historical]

### Prompt Curation: Survival Function (council Pattern 4 reclassification)

Reclassified from ROUTING/GATE-RUNNER to ORCHESTRATOR per council Pattern 4. The survival function runs during prompt assembly (Phase 0-1), NOT during gate verification (Phase 3). It is a CURATION function that determines which constraints survive into the builder's template.

- **ITEM 5** (extract-d18-d20.md L1346-1357) S(x) = 1/(1+C(x)): C(x)=0 survives, C(x)>0 dies — the survival function for prompt curation
- **ITEM 7** (extract-d18-d20.md L1356-1357) Both branches of the survival function: items with zero compositional complexity (C(x)=0) survive into the template; items with any violation count (C(x)>0) are removed

### Information Isolation: What the Builder Does NOT Receive

- **ITEM 55** (extract-d01-d03.md L112) Builder must NOT receive gate thresholds (post-build only)
- **ITEM 56** (extract-d01-d03.md L113) Builder must NOT receive prohibition list beyond soul (prevents S-02)
- **ITEM 57** (extract-d01-d03.md L114) Builder must NOT receive count-gates (">=3 channels") (prevents S-18)
- **ITEM 58** (extract-d01-d03.md L115) Builder must NOT receive fix cycle instructions
- **ITEM 21** (extract-d04-d05.md L419-421) Builder DOES NOT RECEIVE: research, gates, fix instructions, 55 prohibs
- **ITEM 22** (extract-d04-d05.md L420) Builder must not receive research archive
- **ITEM 23** (extract-d04-d05.md L420) Builder must not receive gate thresholds
- **ITEM 24** (extract-d04-d05.md L420) Builder must not receive fix instructions
- **ITEM 25** (extract-d04-d05.md L421) Builder must NOT receive 55 prohibitions
- **ITEM 26** (extract-d04-d05.md L421) Builder must not receive count-gates
- **ITEM 27** (extract-d04-d05.md L421) Builder must not receive process metadata

**Council clarification (Pattern 1 ruling):** Perception thresholds ARE sent to builder as CALIBRATION (e.g., "Backgrounds must differ by at least 15 RGB points to be perceptible"), but NOT as gates (e.g., "FAIL if delta < 15 RGB"). Gate-format thresholds stay with gate-runner only.

### Honest Complexity Accounting

Total builder input: ~3,600 lines (not "73 lines")
- Constraint layer: 73 lines (recipe format)
- Disposition layer: ~40 lines (8 instructions)
- Content map: ~35 lines
- tokens.css: 183 lines (direct file)
- components.css: 290 lines (direct file)
- Value tables: ~550 lines
- Content source material: varies
- CD-006 reference (optional): ~1,200 lines

Council ruling (CF-01): "73-line constraint layer within ~3,600 total builder input (including reference files shared with v2). FORMAT improvement (recipe vs checklist) and STRUCTURE improvement (layered constraint architecture), not volume reduction."

---

## SECTION 2: PHASE 0 — CONTENT ANALYSIS (~15 minutes)

### Agent

- **ITEM 6** (extract-d01-d03.md L26) Agent 1: Content Analyst (Opus)
- **ITEM 65** (extract-d09-d11.md L868) Agent 1 (Phase 0)
- **ITEM 66** (extract-d09-d11.md L869) (Opus) Read content, classify, map sections, assess metaphor

### Input

Content source material (raw markdown / article / research)
- **ITEM 4** (extract-d01-d03.md L18-19) CONTENT SOURCE (Input) Raw markdown / article / research
- **ITEM 5** (extract-d04-d05.md L372-374) CONTENT SOURCE (markdown) varies

### Process

The Content Analyst performs 6 operations:

1. **ITEM 7** (extract-d01-d03.md L28) Classify content type (prose/mixed/visual)
2. **ITEM 8** (extract-d01-d03.md L29) Map structural heterogeneity
3. **ITEM 9** (extract-d01-d03.md L30) Assess metaphor viability
4. **ITEM 10** (extract-d01-d03.md L31) Per-section character (NARRATIVE/REF/CODE)
5. **ITEM 11** (extract-d01-d03.md L32) Estimate density arc
6. **ITEM 12** (extract-d01-d03.md L33) Reader model classification

Additionally, from the Reader Model investigation:
- **ITEM 100** (extract-d12-d14.md L1118) Phase 0 Content Analyst outputs reader profile (~15 lines)
- **ITEM 102** (extract-d12-d14.md L1118-1119) Two agents: Content Analyst (reader profile) + Brief Assembler (merge)

### Output

- **ITEM 13** (extract-d01-d03.md L35) Output: CONTENT MAP (~30-50 lines)
- **ITEM 67** (extract-d09-d11.md L870) Output: content map (~35 lines)
- **ITEM 14** (extract-d01-d03.md L36) "What the content IS, not what the design SHOULD BE"

### Decision Point: Content Affordance Check

If the content lacks heterogeneity or metaphor viability (Precondition 2 fails), the orchestrator must decide:
- Proceed at Middle tier (lower ambition, still valid)
- OR reject the content as unsuitable for this pipeline

### Timing

- **ITEM 68** (extract-d09-d11.md L864-868) Phase 0 takes ~15 minutes
- **ITEM 5** (extract-d01-d03.md L24) PHASE 0: CONTENT ANALYSIS

---

## SECTION 3: PHASE 1 — BRIEF ASSEMBLY (~15 minutes)

### Agent

- **ITEM 16** (extract-d01-d03.md L44) Agent 2: Brief Assembler (Opus)
- **ITEM 10** (extract-d04-d05.md L395) BRIEF ASSEMBLER (Agent 2)
- **ITEM 70** (extract-d09-d11.md L874) Agent 2 (Phase 1)

### Input

- 73-line template (pre-compressed, created ONCE)
- Content map (~35 lines from Phase 0)
- Reader profile (~15 lines from Phase 0)

### Process

- **ITEM 15** (extract-d01-d03.md L41) PHASE 1: BRIEF ASSEMBLY
- **ITEM 17** (extract-d01-d03.md L46) MERGES 73-line template + content map -> BRIEF
- **ITEM 71** (extract-d09-d11.md L875) (Opus) Merge 73-line template + content map
- **ITEM 11** (extract-d04-d05.md L397-400) Template (73 lines) + Content Map (~35 lines) -> BRIEF
- **ITEM 101** (extract-d12-d14.md L1119) Brief Assembler merges reader profile into Tier 3

### Information Flow Architecture

- **ITEM 1** (extract-d04-d05.md L362) INFORMATION FLOW (Dual-Channel + Direct Files)
- **ITEM 2** (extract-d04-d05.md L368) Two channels + two direct-file routes + one feedback loop

**Channel 1 — UNIVERSAL (lossless, 1:1)**
- **ITEM 8** (extract-d04-d05.md L388-391) CHANNEL 1 UNIVERSAL (lossless, 1:1)
- 73-line template passes through without modification

**Channel 2 — CONTENT (regenerated ~10:1)**
- **ITEM 9** (extract-d04-d05.md L388-391) CHANNEL 2 CONTENT (regenerated ~10:1)
- Content map is REGENERATED (new analysis), not compressed (old pipeline)

**Template Properties:**
- **ITEM 6** (extract-d04-d05.md L381-385) 73-LINE TEMPLATE (pre-compressed) created ONCE, NOT per-build
- **ITEM 7** (extract-d04-d05.md L384) Compression: infinity:1 (already done)

### Brief Structure (4 Tiers)

The brief contains 4 tiers:

**Tier 1: IDENTITY (15 lines)**
- **ITEM 19** (extract-d01-d03.md L51) Tier 1: IDENTITY (15 lines)
- 10 soul constraints as world-description

**Tier 2: PERCEPTION PHYSICS (8 lines)**
- **ITEM 24** (extract-d01-d03.md L58) Tier 2: PERCEPTION PHYSICS (8 lines)
- **ITEM 25** (extract-d01-d03.md L59) 4 empirically validated thresholds as NATURAL LAWS
- Delivered to builder as CALIBRATION (council ruling), not pass/fail gates

**Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines)**
- **ITEM 31** (extract-d01-d03.md L65) Tier 3: COMPOSITIONAL FRAMEWORKS (50 lines)
- **ITEM 32** (extract-d01-d03.md L66-67) Multi-Coherence (18 lines) 6 channels, 4 directions, boundary-by-boundary
- **ITEM 33** (extract-d01-d03.md L68-69) Structural Metaphor (8 lines) derive from content, embody in CSS
- **ITEM 34** (extract-d01-d03.md L70-71) Density Arc (6 lines) OPENING->DEEPENING->RESOLVING
- **ITEM 35** (extract-d01-d03.md L72-73) Content-Form Coupling (4 lines) per-section decisions
- **ITEM 36** (extract-d01-d03.md L74-75) Creative Authority + Components (8 lines) creative freedom within identity constraints
- **ITEM 37** (extract-d01-d03.md L76) CSS Value Table (6 lines)

**Tier 4: DISPOSITION (8 instructions, ~40 lines)**
- **ITEM 38** (extract-d01-d03.md L79) Tier 4: DISPOSITION (8 instructions, ~40 lines)

**Content Map Appended:**
- **ITEM 47** (extract-d01-d03.md L90-92) CONTENT MAP appended to brief: per-section analysis, metaphor seeds
- **ITEM 13** (extract-d04-d05.md L399-400) Content Map (~35 lines) from Phase 0

### Output

- **ITEM 18** (extract-d01-d03.md L49) BRIEF (~93-113 lines)
- **ITEM 12** (extract-d04-d05.md L398) BRIEF (~113 lines) target size
- **ITEM 72** (extract-d09-d11.md L876) Output: brief (~113 lines)
- **ITEM 14** (extract-d04-d05.md L403) 1:1 (brief -> builder) no further compression

### Brief Size Constraints

- **ITEM 142** (extract-d01-d03.md L317) Sub-200 line brief (threshold for mode collapse)
- **ITEM 46** (extract-d06-d08.md L584) 73-line brief cap (on constraint layer)
- **ITEM 52** (extract-d06-d08.md L596) <=113 line cap on builder-visible specification

### Timing

- **ITEM 73** (extract-d09-d11.md L874) Phase 1 takes ~15 minutes
- **ITEM 69** (extract-d09-d11.md L873) Phase 1: Brief Assembly

---

## SECTION 4: MODE SELECTION (Orchestrator Decision)

### Applied vs Composed Mode

The orchestrator selects the builder's mode based on content-form routing. **The builder never sees both modes as a choice** (council ruling on Pattern 3).

- **ITEM 50** (extract-d18-d20.md L1483-1484) Swiss Army Knife vs Orchestra mode distinction
- **ITEM 51** (extract-d18-d20.md L1488-1493) APPLIED MODE: each mechanism solves LOCAL problem
- **ITEM 52** (extract-d18-d20.md L1488-1493) COMPOSED MODE: each mechanism serves GOVERNING LOGIC
- **ITEM 53** (extract-d18-d20.md L1495-1496) Applied Q: "What does THIS section need?"
- **ITEM 54** (extract-d18-d20.md L1495-1496) Composed Q: "What does the page's CONCEPT need here?"

### Mode Selection Logic

The orchestrator decides mode based on Phase 0 content analysis:

**Select APPLIED when:**
- Content is reference/catalog/documentation
- Low structural heterogeneity (uniform sections)
- No clear metaphor viability from Phase 0
- Target tier: Middle (PA-05 2.5-3.0)

**Select COMPOSED when:**
- Content is narrative/essay/synthesis
- High structural heterogeneity (varied sections)
- Metaphor viability confirmed in Phase 0
- Target tier: Ceiling or Flagship (PA-05 3.0+)

### Mode Determinants (post-build verification by gate-runner)

- **ITEM 74** (extract-d18-d20.md L1550) Mode determinant 1: Custom property naming (position vs concept)
- **ITEM 75** (extract-d18-d20.md L1551) Mode determinant 2: Component zone-modulation (absent vs present)
- **ITEM 76** (extract-d18-d20.md L1552) Mode determinant 3: Layout choice driver (content-type vs metaphor)
- **ITEM 77** (extract-d18-d20.md L1553) Mode determinant 4: Removal test CCS (<0.35 vs >0.45) — RESEARCH CONSTRUCT — do not operationalize until methodology standardized (council CF-02). Listed as mode INDICATOR only, not as a gate check or decision criterion.
- **ITEM 78** (extract-d18-d20.md L1554) Mode determinant 5: Governing logic (absent vs articulable in 1 sent)

### Mode Is Set At Build Start

- **ITEM 79** (extract-d18-d20.md L1556-1558) MODE IS SET AT BUILD START by spec format: Checklist->APPLIED, Recipe->COMPOSED possible
- **ITEM 80** (extract-d18-d20.md L1557) Checklist -> APPLIED mode (inevitable)
- **ITEM 81** (extract-d18-d20.md L1558) Recipe + disposition -> COMPOSED mode (possible, not guaranteed)
- **ITEM 82** (extract-d18-d20.md L1560-1562) Pipeline v3 creates conditions via D-01 + D-02 + Recipe + creative freedom within identity constraints + Opus

### COMPOSING Mode Gatekeeper

- **ITEM 98** (extract-d06-d08.md L701) COMPOSING mode gatekeeper
- **ITEM 137** (extract-d01-d03.md L308) Builder enters COMPOSING mode (not COMPLYING/PLANNING/REPAIRING)
  - Council reclassification: moved from GATES to DISPOSITION (builder-facing mode instruction)
- **ITEM 138** (extract-d01-d03.md L313) Recipe format (not checklist)
  - Council reclassification: moved from GATES to ORCHESTRATION (format specification for prompt assembly)

---

## SECTION 5: PHASE 2 — BUILDING (The Core Creative Act, ~45 minutes)

### Agent

- **ITEM 48** (extract-d01-d03.md L99) PHASE 2: BUILDING (The Core Creative Act)
- **ITEM 49** (extract-d01-d03.md L102) Agent 3: BUILDER (Opus — STRONG RECOMMENDATION per council)
- **ITEM 75** (extract-d09-d11.md L880) Agent 3 (Phase 2)
- **ITEM 76** (extract-d09-d11.md L881) (Opus) Build + self-evaluate + adjust

### Builder Inputs (4 required + 1 optional)

- **ITEM 50** (extract-d01-d03.md L105) Builder input #1: Brief (~100 lines)
- **ITEM 51** (extract-d01-d03.md L106) Builder input #2: Content source material
- **ITEM 52** (extract-d01-d03.md L107) tokens.css (direct Tier 1 vocabulary) — builder input #3
- **ITEM 53** (extract-d01-d03.md L108) components.css (pre-built component library) — builder input #4
- **ITEM 54** (extract-d01-d03.md L109) Builder input #5: CD-006 reference (optional crown jewel)
- **ITEM 15** (extract-d04-d05.md L407) BUILDER (Agent 3) receives 4 inputs
- **ITEM 16** (extract-d04-d05.md L410-417) Builder receives 4 inputs: brief, content, tokens.css, components.css
- **ITEM 17** (extract-d04-d05.md L413) ~113 lines (brief size target)
- **ITEM 20** (extract-d04-d05.md L415-416) tokens.css and components.css as DIRECT FILE routes
- **ITEM 5** (extract-d06-d08.md L494) Input: Brief + content + 73-line constraints
- **ITEM 6** (extract-d06-d08.md L494) 73-line constraints (cap)

### Builder Build Sequence (8 Steps)

The builder follows a zone-by-zone construction sequence with self-evaluation checkpoints:

**Step 1: Conviction Statement**
- **ITEM 59** (extract-d01-d03.md L119) Write conviction statement "This page is about X. Metaphor Y. Arc Z"

**Step 2: Build Header + Zone 1 (OPENING)**
- **ITEM 60** (extract-d01-d03.md L122) Build header + Zone 1 (OPENING)

**Step 3: Self-Evaluate Zone 1**
- **ITEM 61** (extract-d01-d03.md L125-130) SELF-EVALUATE (Playwright) screenshot, assess vs conviction
- **ITEM 62** (extract-d01-d03.md L128-129) Builder SEES its own output (Tier 4 info via EXPERIENCE)

**Step 4: Adjust**
- **ITEM 63** (extract-d01-d03.md L132) Adjust if needed

**Step 5: Build Zone 2-3 (DEEPENING)**
- **ITEM 64** (extract-d01-d03.md L134) Build Zone 2-3 (DEEPENING)

**Step 6: Midpoint Self-Evaluate**
- **ITEM 65** (extract-d01-d03.md L137-141) MIDPOINT SELF-EVALUATE (full-page scroll screenshot)

**Step 7: Build Zone 4 + Footer (RESOLVING)**
- **ITEM 66** (extract-d01-d03.md L143) Build Zone 4 + footer (RESOLVING)

**Step 8: Final Self-Evaluate**
- **ITEM 67** (extract-d01-d03.md L146-149) FINAL SELF-EVALUATE (1440px + 768px)

- **ITEM 77** (extract-d09-d11.md L882-883) Zone1->screenshot->Zone2-3->screenshot->Zone4+footer->screenshot

### Builder Mode: GENERATIVE

- **ITEM 2** (extract-d06-d08.md L490) PASS 1: STRUCTURAL SKELETON + PERVADING METAPHOR (20-35 min)
- **ITEM 3** (extract-d06-d08.md L491) Mode: GENERATIVE (composing, not complying)
- **ITEM 4** (extract-d06-d08.md L492) Builder: Opus instance A
- **ITEM 90** (extract-d01-d03.md L237) Recipe + disposition format (new pipeline)
- **ITEM 92** (extract-d01-d03.md L238) "This world IS / You ARE" (world-description voice)

### Output

- **ITEM 68** (extract-d01-d03.md L152) Output: Complete HTML page (800-1200 CSS lines)
- **ITEM 78** (extract-d09-d11.md L884) Output: complete HTML (800-1200 CSS)
- **ITEM 7** (extract-d06-d08.md L495-496) Pass 1 output: Complete HTML/CSS — skeleton strong, metaphor established

### Timing

- **ITEM 79** (extract-d09-d11.md L880) Phase 2 takes ~45 minutes (longest)
- **ITEM 74** (extract-d09-d11.md L879) Phase 2: Building

---

## SECTION 6: PHASE 3 — PERCEPTUAL AUDIT (Verification Only, ~30 minutes)

### Phase 3A: Screenshot Capture (orchestrator does this)

- **ITEM 69** (extract-d01-d03.md L158) PHASE 3: PERCEPTUAL AUDIT (Verification Only)
- **ITEM 80** (extract-d09-d11.md L887-890) Phase 3: Screenshot Capture
- **ITEM 70** (extract-d01-d03.md L161) Lead takes ALL screenshots at 1440px, 1024px, 768px
- **ITEM 71** (extract-d01-d03.md L162) eliminates Playwright contention, enables parallel auditors
- **ITEM 81** (extract-d09-d11.md L888) Lead takes screenshots
- **ITEM 82** (extract-d09-d11.md L889) Screenshots at 3 viewports: 1440px, 1024px, 768px

The orchestrator (or lead) serves the HTML page via HTTP, takes screenshots at all 3 viewports (cold look + scroll-through), and saves them as files. Auditors read saved images via Read tool. This eliminates Playwright contention entirely and enables 9+ parallel auditors.

### Phase 3B: PA Audit (parallel auditors)

- **ITEM 83** (extract-d09-d11.md L892) Phase 3: PA Audit (parallel)
- **ITEM 84** (extract-d09-d11.md L893) PA-1 thru PA-9 (9 parallel auditors)
- **ITEM 85** (extract-d09-d11.md L894) (9 Opus) all PA auditors must be Opus
- **ITEM 30** (extract-d06-d08.md L548-550) Standard Mode 4 PA Audit (9 auditors + 1 integrative + 1 weaver)

**Auditor Question Assignments:**
- **ITEM 72** (extract-d01-d03.md L168-169) PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42 (7 auditors x 6 questions)
- **ITEM 73** (extract-d01-d03.md L172-173) PA-8 Q43-48
- **ITEM 74** (extract-d01-d03.md L176-177) PA-9 Q49-54 (total 54 PA questions across 9 auditors)

**Integrative Auditor:**
- **ITEM 75** (extract-d01-d03.md L182-184) Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions
- **ITEM 86** (extract-d09-d11.md L895) + Integrative auditor
  - Views all screenshots with zero prior context; reports gestalt impressions

### Phase 3C: Weaver (verdict synthesis)

- **ITEM 76** (extract-d01-d03.md L191-192) Agent 15: WEAVER (Opus) reads 10 auditor reports -> VERDICT
- **ITEM 87** (extract-d09-d11.md L897) Phase 3: Weaver
- **ITEM 88** (extract-d09-d11.md L898) Agent 15 (Weaver) = 15 total agents
- **ITEM 89** (extract-d09-d11.md L899) Weaver must be Opus, produces final VERDICT
- **ITEM 80** (extract-d01-d03.md L219-220) Returns to Phase 2 with PA verdict as CONTEXT (generative language)

---

## SECTION 7: VERDICT AND DECISION TREE

### Ship / Refine / Rebuild Thresholds

- **ITEM 77** (extract-d01-d03.md L201-204) SHIP: PA-05>=3.5/4, Zero soul violations

**SHIP (PA-05 >= 3.5)**
- Pipeline complete. Page is ready.
- Programmatic gates run as final verification (not gating — informational).

**REFINE (PA-05 2.5-3.5)**
- **ITEM 78** (extract-d01-d03.md L206-210) REFINE: PA-05 2.5-3.5, DIFFERENT Opus agent, reads conviction
- **ITEM 48** (extract-d15-d17.md L1257) REFINE: DIFFERENT Opus agent (defeats continuation bias)
- **ITEM 49** (extract-d15-d17.md L1258) REFINE: Reads conviction + PA artistic impressions
- **ITEM 50** (extract-d15-d17.md L1259) REFINE agent never sees gate scores or threshold numbers
- **ITEM 47** (extract-d15-d17.md L1256) VERDICT: REFINE (PA-05 2.5-3.5)

REFINE protocol:
1. Spawn DIFFERENT Opus builder (defeats continuation bias)
2. Give it: original brief, Pass 1 output, PA weaver's artistic impressions (in generative language)
3. DO NOT give: gate scores, threshold numbers, diagnostic language
4. Builder enters COMPOSITIONAL mode (refining relationships, not fixing defects)
5. Return to Phase 3 for re-audit

**REBUILD (PA-05 < 2.5)**
- **ITEM 79** (extract-d01-d03.md L212-215) REBUILD: PA-05 < 2.5, FRESH builder in COMPOSING mode
- **ITEM 44** (extract-d15-d17.md L1252) REBUILD: Fresh Opus builder in COMPOSING mode
- **ITEM 45** (extract-d15-d17.md L1253) REBUILD: Reads previous conviction artifact (not fix list)
- **ITEM 46** (extract-d15-d17.md L1254) REBUILD: Generative language, not diagnostic
- **ITEM 43** (extract-d15-d17.md L1251) VERDICT: REBUILD (PA-05 < 2.5)

REBUILD protocol:
1. Spawn FRESH Opus builder in COMPOSING mode (not repair mode)
2. Give it: original brief, content, conviction artifact from failed build
3. DO NOT give: the failed HTML, fix lists, diagnostic analysis
4. Builder starts from scratch with the lesson of the conviction
5. Return to Phase 2 entirely

### Core Principle

- **ITEM 51** (extract-d15-d17.md L1261-1262) You cannot fix your way to Flagship. Only compose your way.
- **ITEM 37** (extract-d15-d17.md L1230-1232) THE GAP: 3.2->4.0 = 0.8 points = revision quality deficit

### Gate Logic Relocated from Gate Runner (Wave 1)

The following gate logic was removed from `artifact-gate-runner.md` during Wave 1 because these checks are orchestrator decisions, not DOM inspection gates. Their logic now lives here:

**GR-29 through GR-32 (Verdict Gates) — now orchestrator verdict logic above:**
- GR-29: PA-05 >= 3.5 AND zero soul violations = SHIP
- GR-30: PA-05 2.5-3.5 = REFINE
- GR-31: PA-05 < 2.5 = REBUILD
- GR-32: 3+ anti-pattern fails = REBUILD (overrides PA-05 score)
These are applied in the Ship/Refine/Rebuild thresholds section above.

**GR-35 (Layout Driver) — rerouted to PA:**
Layout driver assessment (content-type vs metaphor) is NOT automatable. Assessed by PA auditors via PA-05 sub-criteria (DESIGNED) and Tier 5 questions. No orchestrator action needed.

**GR-36 through GR-39 (Experiment Gates) — for separate experiment protocol document:**
- GR-36: Experiment #19 (Opus isolation) active state
- GR-37: Experiment #20 (disposition evaluation) active state
- GR-38: Experiment #21 (3-pass validation) active state
- GR-39: Experiment tracking and PA-05 score comparison across experimental conditions
These will be documented in a dedicated experiment protocol file (Wave 3).

**GR-40 through GR-42 (Policy Gates) — orchestrator process checks:**
- GR-40: Single-pass is the default (no unauthorized 3-pass)
- GR-41: REBUILD uses fresh builder (not same builder in repair mode)
- GR-42: Builder does not receive gate thresholds (overlaps with GR-27 precondition gate)
The orchestrator enforces these as process rules during Phase 2 spawning and Phase 3C verdict handling.

---

## SECTION 8: TOTAL BUILD SUMMARY

### Default Pipeline (Single-Pass)

- **ITEM 62** (extract-d09-d11.md L861) A SINGLE BUILD: Timeline & Agent Activity
- **ITEM 63** (extract-d09-d11.md L864) Time 0 to 105 minutes total build span
- **ITEM 64** (extract-d09-d11.md L867) Phase 0: Content Analysis
- **ITEM 69** (extract-d09-d11.md L873) Phase 1: Brief Assembly
- **ITEM 74** (extract-d09-d11.md L879) Phase 2: Building
- **ITEM 90** (extract-d09-d11.md L903) TOTAL: ~80-105 min, 15 agents, ~113 lines specification
- **ITEM 91** (extract-d09-d11.md L905-906) Compare old: ~240-400 min, 19-34 agents, 963 lines spec

### Timeline

| Phase | Duration | Agent Count | Key Agent |
|-------|----------|-------------|-----------|
| Phase 0: Content Analysis | ~15 min | 1 (Opus) | Content Analyst |
| Phase 1: Brief Assembly | ~15 min | 1 (Opus) | Brief Assembler |
| Phase 2: Building | ~45 min | 1 (Opus) | Builder |
| Phase 3A: Screenshots | ~5 min | 0 (lead does this) | Orchestrator |
| Phase 3B: PA Audit | ~15 min | 10 (9 auditors + 1 integrative) | PA-1 through PA-9 + Integrative |
| Phase 3C: Verdict | ~5 min | 1 (Opus) | Weaver |
| **TOTAL** | **~80-105 min** | **15 agents** | |

### Honest Cost Estimates (council mandate)

**Single-pass default:** ~60-120 min, ~$30-150 per page
**3-pass experimental (if validated):** ~125-255 min, ~$120-1,050 per page
**REFINE iteration (if needed):** adds ~60-75 min + PA re-audit
**REBUILD iteration (if needed):** adds ~80-105 min (full Phase 2-3 redo)

- **Rerouted ITEM 93** (extract-d01-d03.md L240) 19-34 agents (old) [historical context]
- **Rerouted ITEM 94** (extract-d01-d03.md L240) 12-15 agents (new)

---

## SECTION 9: REROUTED VALUES ITEMS (15 items, council Pattern 5 Category A)

These 15 items were originally classified as VALUES routed to GATE-RUNNER. The council ruled they are PLANNING TOOLS belonging to the ORCHESTRATOR, not runtime gate checks. They inform pipeline design decisions, historical context, and calibration.

> **Note:** 19 additional VALUES-layer items (ITEMS 81-87, 93-94, 103-104, 125-126, 143-149 from d01-d03) are included in Sections 8, 9, and 14 for orchestrator context but are NOT part of the council's Category A ruling. They are included because they provide useful planning/calibration data for the orchestrator agent.

### Suppressor Removal Planning

- **Rerouted ITEM 31** (extract-d04-d05.md L437) SUPPRESSOR REMOVAL CURVE
  - Council: relabeled "HYPOTHESIZED improvement (phased validation required)"
- **Rerouted ITEM 32** (extract-d04-d05.md L443) 4.0 FLAGSHIP TARGET
  - Council: target carries "(hypothesis)" suffix
- **Rerouted ITEM 39** (extract-d04-d05.md L465-466) Suppressors remaining: 20 16 12 8 4 0
- **Rerouted ITEM 43** (extract-d04-d05.md L473) S-01 removal should be prioritized (highest individual impact)
- **Rerouted ITEM 44** (extract-d04-d05.md L475) After S-01, next priority: S-08, S-03, S-09, S-13 (Inflection 2)
- **Rerouted ITEM 45** (extract-d04-d05.md L470-472) Total predicted gain: +1.3 to +2.0 PA-05 points (hypothesis)

### Historical Data Points

- **Rerouted ITEM 34** (extract-d04-d05.md L447-448) Gas Town PA-05 3.5 (old pipeline, Opus, 610 lines)
- **Rerouted ITEM 35** (extract-d04-d05.md L451-452) PA-05 3.0: Suppressors removed + soul + thresholds only
- **Rerouted ITEM 36** (extract-d04-d05.md L455-456) PA-05 2.5: Middle (old pipeline, recipe format, 100 lines)
- **Rerouted ITEM 37** (extract-d04-d05.md L459-460) PA-05 2.0: Current spec baseline (20 suppressors active)
- **Rerouted ITEM 38** (extract-d04-d05.md L462-463) PA-05 1.5: Flagship experiment (all 14 original suppressors)
- **Rerouted ITEM 46** (extract-d04-d05.md L447-448) Gas Town PA-05 3.5 used Opus builder + 610-line prompt
- **Rerouted ITEM 47** (extract-d04-d05.md L462-463) 1.0-point gap between Flagship(1.5) and Middle(2.5): MORE lines HURTS

### Quality Tier Predictions (all THEORETICAL per council)

- **Rerouted ITEM 75** (extract-d06-d08.md L643-644) Gas Town: 10-Dimension Flagship Gap visualization

### Compression Ratios (planning context)

- **Rerouted ITEM 103** (extract-d01-d03.md L247) 83:1 compression through TC (old) [historical]
- **Rerouted ITEM 104** (extract-d01-d03.md L247) 10:1 regeneration not compress (new)

### Pipeline Comparison Metrics

- **Rerouted ITEM 81** (extract-d01-d03.md L230) OLD PIPELINE (v1/v2) PA-05: 1.5-3.5/4 [historical]
- **Rerouted ITEM 82** (extract-d01-d03.md L230) NEW PIPELINE (v3) Target PA-05: 3.5-4.0/4 (hypothesis)

---

## SECTION 10: EXPERIMENTAL TIER — 3-PASS ARCHITECTURE

**STATUS: BLOCKED until experiment #21 validates Compositional Critic utility**
**All items in this section tagged EXPERIMENTAL**

Per council ruling (CF-02): "Compositional Critic has zero evidence. Pipeline must work without it. Single-pass is the default. 3-pass architecture is an optional enhancement."

### 3-Pass Structure (EXPERIMENTAL)

**Pass 1: Structural Skeleton + Pervading Metaphor (20-35 min)**
- **ITEM 2** (extract-d06-d08.md L490) [EXPERIMENTAL]
- **ITEM 3** (extract-d06-d08.md L491) Mode: GENERATIVE (composing, not complying) [EXPERIMENTAL]
- **ITEM 4** (extract-d06-d08.md L492) Builder: Opus instance A [EXPERIMENTAL]

**Compositional Critic (between passes) — EXPERIMENTAL/FANTASY**
- **ITEM 8** (extract-d06-d08.md L501) COMPOSITIONAL CRITIC (Opus — separate agent) [EXPERIMENTAL]
- **ITEM 9** (extract-d06-d08.md L503) Views SCREENSHOTS only (not CSS) [EXPERIMENTAL]
- **ITEM 10** (extract-d06-d08.md L504-507) Three Laws: never name CSS, never ref threshold, suggest QUALITY [EXPERIMENTAL]
- **ITEM 11** (extract-d06-d08.md L505) Law 1: Never name a CSS property [EXPERIMENTAL]
- **ITEM 12** (extract-d06-d08.md L506) Law 2: Never reference a threshold [EXPERIMENTAL]
- **ITEM 13** (extract-d06-d08.md L507) Law 3: Always suggest a QUALITY, not an ACTION [EXPERIMENTAL]
- **ITEM 14** (extract-d06-d08.md L509-512) Example: "The middle sags — energy dissipates by S5" [EXPERIMENTAL]
- **ITEM 15** (extract-d06-d08.md L514) NOT: "SC-09 FAILED: stacked gap 210px exceeds 120px" (anti-pattern) [EXPERIMENTAL]
- **ITEM 16** (extract-d06-d08.md L516-517) Artistic feedback + conviction artifact (~25 lines) [EXPERIMENTAL]
- **ITEM 17** (extract-d06-d08.md L517) ~25 lines critic-to-builder handoff [EXPERIMENTAL]

**Pass 2: Atmospheric Enrichment + Mechanism Coupling (15-25 min)**
- **ITEM 18** (extract-d06-d08.md L520) [EXPERIMENTAL]
- **ITEM 19** (extract-d06-d08.md L521) Mode: COMPOSITIONAL [EXPERIMENTAL]
- **ITEM 20** (extract-d06-d08.md L522) Builder: Opus instance B (FRESH — defeats continuation bias) [EXPERIMENTAL]
- **ITEM 21** (extract-d06-d08.md L522) FRESH = defeats continuation bias [EXPERIMENTAL]
- **ITEM 22** (extract-d06-d08.md L524) Input: Pass 1 output + Critic feedback + value tables [EXPERIMENTAL]
- **ITEM 23** (extract-d06-d08.md L525-526) Pass 2 output: Enriched page [EXPERIMENTAL]
- **ITEM 24** (extract-d06-d08.md L531-532) Second critic review: final impressions only [EXPERIMENTAL]

**Pass 3: Terminal Craft + Designed Moments (10-20 min)**
- **ITEM 25** (extract-d06-d08.md L537) [EXPERIMENTAL]
- **ITEM 26** (extract-d06-d08.md L538) Mode: POLISHING [EXPERIMENTAL]
- **ITEM 27** (extract-d06-d08.md L539) Builder: Opus instance C (or Sonnet for cost) [EXPERIMENTAL]
- **ITEM 28** (extract-d06-d08.md L541) Input: Pass 2 output + Critic's final impressions [EXPERIMENTAL]
- **ITEM 29** (extract-d06-d08.md L542-543) Pass 3 output: Finished page [EXPERIMENTAL]

### 3-Pass Predicted Quality Curve (all THEORETICAL)

- **ITEM 31** (extract-d06-d08.md L555) Pass 1 alone: PA-05 ~2.5-3.5 (hypothesis)
- **ITEM 32** (extract-d06-d08.md L556) + Pass 2: PA-05 ~3.0-3.8 (hypothesis)
- **ITEM 33** (extract-d06-d08.md L557) + Pass 3: PA-05 ~3.2-4.0 (hypothesis)
- **ITEM 34** (extract-d06-d08.md L558) Diminishing returns: Pass 4 adds <0.1 with S-20 risk
- **ITEM 35** (extract-d06-d08.md L558) Pass 4 max gain: <0.1

---

## SECTION 11: EXPERIMENT PROTOCOL

### 4-Stage Validation Program

The pipeline must be validated before full deployment. Stages are progressive — each gates the next.

- **ITEM 1** (extract-d09-d11.md L707) EXPERIMENT PROTOCOL DECISION TREE
- **ITEM 2** (extract-d09-d11.md L711-712) 4 Stages, Progressive

**STAGE 0: SMOKE TEST (3 hours, 1 run) — BLOCKING**
- **ITEM 3** (extract-d09-d11.md L715) STAGE 0: SMOKE TEST
- **ITEM 4** (extract-d09-d11.md L717) Pipeline v3 on Gas Town content
- **ITEM 5** (extract-d09-d11.md L718) Opus builder, 73-line brief, single pass
- **ITEM 6** (extract-d09-d11.md L722) Pass/fail: PA-05 >= 2.0?
- **ITEM 7** (extract-d09-d11.md L727-728) Continue to Stage 1 if pass
- **ITEM 8** (extract-d09-d11.md L728-730) STOP & DEBUG if fail

**STAGE 1: Q20 SHORTCUT (6 hours, 2 runs)**
- **ITEM 9** (extract-d09-d11.md L732) STAGE 1: Q20 SHORTCUT
- **ITEM 10** (extract-d09-d11.md L734-735) OLD Flagship prompt + ONLY 25-line threshold appendix
- **ITEM 11** (extract-d09-d11.md L736) Tests: Are thresholds the dominant cause?
- **ITEM 12** (extract-d09-d11.md L740) Success: delta PA-05 >= +0.5?
- **ITEM 13** (extract-d09-d11.md L745-746) Thresholds high-leverage, continue
- **ITEM 14** (extract-d09-d11.md L746-747) Thresholds alone insufficient, still continue

**STAGE 2: HEAD-TO-HEAD (12 hours, 4 runs)**
- **ITEM 15** (extract-d09-d11.md L750) STAGE 2: HEAD-TO-HEAD
- **ITEM 16** (extract-d09-d11.md L752) Old pipeline vs v3 on TWO content types
- **ITEM 17** (extract-d09-d11.md L753) (Gas Town + RESEARCH-SYNTHESIS)
- **ITEM 18** (extract-d09-d11.md L754) Opus builder both. Blind PA evaluation
- **ITEM 19** (extract-d09-d11.md L758-759) Success: v3 > old on BOTH content types?
- **ITEM 20** (extract-d09-d11.md L764-766) v3 validated -> Stage 3
- **ITEM 21** (extract-d09-d11.md L764-766) Content-dependent -> Stage 3
- **ITEM 22** (extract-d09-d11.md L764-766) v3 needs rethinking if loses BOTH

**STAGE 3: VARIABLE ISOLATION (18 hours, 6 runs)**
- **ITEM 23** (extract-d09-d11.md L769) STAGE 3: VARIABLE ISOLATION
- **ITEM 24** (extract-d09-d11.md L771-773) Dose-response curve: old->+thresholds->+recipe->-suppress->73-line
- **ITEM 25** (extract-d09-d11.md L775) Identifies WHICH changes cause improvement

**STAGE 4: FLAGSHIP EXISTENCE PROOF (5 hours, 1-2 runs)**
- **ITEM 26** (extract-d09-d11.md L779) STAGE 4: FLAGSHIP EXISTENCE PROOF
- **ITEM 27** (extract-d09-d11.md L781-783) Maximum investment: 3-pass + disposition + worked examples + critic
- **ITEM 28** (extract-d09-d11.md L783) PA + Tier 5 questions
- **ITEM 29** (extract-d09-d11.md L785) Tests: Is 4/4 even achievable?
- **ITEM 30** (extract-d09-d11.md L789-790) Success: PA-05>=3.5 AND Tier 5>=6/8?
- **ITEM 31** (extract-d09-d11.md L795-798) Flagship ACHIEVABLE if both thresholds met
- **ITEM 32** (extract-d09-d11.md L795-798) Flagship may not be discrete register, accept Ceiling if fail

### Program Totals

- **ITEM 33** (extract-d09-d11.md L801) TOTAL PROGRAM: 44 hours, 14 runs
- **ITEM 34** (extract-d09-d11.md L802) CHEAPEST USEFUL: Stage 0+1 = 9 hours
- **ITEM 35** (extract-d09-d11.md L803) HIGHEST ROI: Stage 0+1+2 = 21 hours

### Council Implementation Sequence

Per council Part 6, the implementation is phased:

**Phase 0: PRE-FLIGHT (BLOCKING)**
- Run smoke test (Stage 0, ~3 hours)
- If fail, STOP and diagnose

**Phase 1: SAFE FIXES (2-4 hours)**
- Remove Phase 1 suppressors (mechanism count language, judgment language, technique counting)
- Add perception threshold table to builder prompt
- Convert constraint format to recipe

**Phase 2: CHEAP EXPERIMENTS (4-8 hours each)**
- Experiment #22 (Q20 thresholds-only)
- Experiment #20 (disposition-only)

**Phase 3: DESIGN WORK (4-8 hours)**
- Restructure brief with disposition at both ends
- Design zone-level CSS value tables

**Phase 4: FULL EXPERIMENTS (8-20 hours each)**
- Experiment #19 (Opus vs Sonnet isolation)
- Experiment #18 (73-line constraint set test)
- Experiment #21 (creative revision cycle) — ONLY IF single-pass fails PA-05 3.0

**Phase 5: ARCHITECTURE (weeks+, only if experiments validate)**
- 3-pass iteration (only if experiment #21 validates)
- Flagship 4/4 pursuit (only if prior phases succeed)

- **ITEM 183** (extract-d21-d25.md L2048-2051) NEXT STEP: Run Q20 thresholds-only (4h), then #20 disposition (2-4h)

---

## SECTION 12: SUPPRESSOR MANAGEMENT

### Phased Suppressor Removal Protocol (council CF-03 ruling)

Council: "Suppressor removal curve relabeled: HYPOTHESIZED improvement (phased validation required). Monotonic framing REMOVED."

**Phase 1 Removals (SAFE — unanimously identified as harmful):**
- S-01: Mechanism count language ("sample 2-4") — highest individual impact
- S-03: Judgment language in specification
- S-08: Technique counting as quality metric

**Phase 2 Removals (TEST FIRST — keep as PROGRAMMATIC GATES with adjusted thresholds):**
- S-09: Stacking gap — adjusted to <=150px total stacked gap (not <=96px per-property)
- S-07: Letter-spacing bounds
- S-14: Mechanism minimums

**Also:** Builder receives perception threshold table (8 lines) as calibration — council item #2.

### Suppressor-Related Items

- **ITEM 116** (extract-d01-d03.md L257) Zero repair-mode suppressors
- **ITEM 117** (extract-d01-d03.md L259) 20 quality suppressors active (old)
- **ITEM 118** (extract-d01-d03.md L259) 0 suppressors active (new)
- **ITEM 51** (extract-d06-d08.md L595-597) Specification Interference: suppressor removal + 113 line cap
- **ITEM 53** (extract-d06-d08.md L596) Suppressor removal (all 20)
- **ITEM 55** (extract-d06-d08.md L597) avoids all 20 suppressors
- **ITEM 54** (extract-d06-d08.md L597) gates hidden from builder
- **ITEM 119** (extract-d01-d03.md L261) Builder sees gates (old pipeline) [META/historical]
- **ITEM 120** (extract-d01-d03.md L261) Builder sees frameworks only (new pipeline)
  - Council reclassified: GATES -> ORCHESTRATION (routing policy)
- **ITEM 121** (extract-d01-d03.md L262) Gates in builder prompt (old) [META/historical]
- **ITEM 122** (extract-d01-d03.md L262) Gates in orchestrator only (new)
- **ITEM 123** (extract-d01-d03.md L263) Builder optimizes for gates (old) [META/historical]
- **ITEM 124** (extract-d01-d03.md L263) Builder optimizes for quality (new)
  - Council reclassified: GATES -> DISPOSITION (builder-facing disposition)

### Suppressor Inflection Curve (HYPOTHESIZED per council)

- **ITEM 40** (extract-d04-d05.md L470-475) INFLECTION 1: Recipe Switch (+0.5-1.0) Remove S-01
- **ITEM 41** (extract-d04-d05.md L470-475) INFLECTION 2: Perception Floor (+0.5) Remove S-08
- **ITEM 42** (extract-d04-d05.md L470-475) INFLECTION 3: Architecture Collapse (+0.3-0.5) Remove remaining 8

---

## SECTION 13: 13 IRREDUCIBLE CONCEPTS

The pipeline must address all 13 concepts. Each is handled via one of three mechanisms: SPECIFY (binary rules), ACTIVATE (dispositional recipe), or create CONDITIONS (emergent).

- **ITEM 36** (extract-d06-d08.md L568) 13 IRREDUCIBLE CONCEPTS: Pipeline must address all 13
- **ITEM 37** (extract-d06-d08.md L571) 7 EXISTING (from 40-concept collapse)
- **ITEM 58** (extract-d06-d08.md L602) 6 MISSING (newly identified)
- **ITEM 74** (extract-d06-d08.md L632-634) "Specify/Activate/Create CONDITIONS" master routing principle

### Concept Distribution

- **ITEM 71** (extract-d06-d08.md L628) SPECIFIED (binary rules, measurable): 6 / 13
- **ITEM 72** (extract-d06-d08.md L629) ACTIVATED (dispositional, recipe): 5 / 13
- **ITEM 73** (extract-d06-d08.md L630) EMERGENT (conditions only): 2 / 13

### Concept Routing (per concept)

**Builder Cognitive Mode** — ACTIVATED via D-01 to D-08 + recipe format
- **ITEM 38** (extract-d06-d08.md L575-577)
- **ITEM 39** (extract-d06-d08.md L575) (11 concepts collapsed)

**Content-Form Coupling** — SPECIFIED + ACTIVATED via TC + D-01
- **ITEM 41** (extract-d06-d08.md L579-581)
- **ITEM 42** (extract-d06-d08.md L579) (9 concepts collapsed)
- **ITEM 43** (extract-d06-d08.md L580) TC brief routing + D-01

**Compression Physics** — SPECIFIED via 73-line + dual-channel
- **ITEM 44** (extract-d06-d08.md L583-585)
- **ITEM 45** (extract-d06-d08.md L583) (6 concepts collapsed)
- **ITEM 47** (extract-d06-d08.md L584) dual-channel architecture

**Intentional Composition** — ACTIVATED + EMERGENT via multi-coherence
- **ITEM 48** (extract-d06-d08.md L587-589)

**Peak-Valley Architecture** — ACTIVATED via D-04 + density arc
- **ITEM 49** (extract-d06-d08.md L591-593)
- **ITEM 50** (extract-d06-d08.md L591) D-04 + density arc

**Specification Interference** — suppressor removal + 113 line cap
- **ITEM 51** (extract-d06-d08.md L595-597)
- **ITEM 52** (extract-d06-d08.md L596) <=113 line cap
- **ITEM 53** (extract-d06-d08.md L596) suppressor removal
- **ITEM 54** (extract-d06-d08.md L597) gates hidden from builder

**Scale-Channel Independence** — 6-channel framework + value tables
- **ITEM 56** (extract-d06-d08.md L599-600)
- **ITEM 57** (extract-d06-d08.md L600) 6-channel framework + value tables

**Temporal Composition** — ACTIVATED via density arc recipe + D-06
- **ITEM 59** (extract-d06-d08.md L604-605)
- **ITEM 60** (extract-d06-d08.md L605) D-06 neg space

**Reader Model** — SPECIFIED via reader persona in content analysis
- **ITEM 61** (extract-d06-d08.md L607-608)

**Emotional Arc** — EMERGENT via D-04 + D-05 + arc framing
- **ITEM 62** (extract-d06-d08.md L610-612)
- **ITEM 63** (extract-d06-d08.md L612) builder produces, cannot be specified
  - Council ruling: D-04->Surprise, D-05->Closure, etc. are DESIGN INTENTIONS, not guaranteed causal links

**Compositional Anti-Patterns** — 6 binary gates in gate runner
- **ITEM 64** (extract-d06-d08.md L614-615)
- **ITEM 65** (extract-d06-d08.md L615) Exactly 6 anti-pattern gates, each binary pass/fail

**Cross-Page Coherence** — soul + shared tokens.css + components.css
- **ITEM 66** (extract-d06-d08.md L617-619)
- **ITEM 67** (extract-d06-d08.md L618) shared tokens.css + components.css

**Revision Quality** — REBUILD not FIX + zone-aware editing
- **ITEM 68** (extract-d06-d08.md L621-623)
- **ITEM 69** (extract-d06-d08.md L621) REBUILD not FIX
- **ITEM 70** (extract-d06-d08.md L622) zone-aware editing protocol

---

## SECTION 14: PIPELINE V3 DIAGNOSTIC CONTEXT

### Why v3 Exists (Root Cause Analysis)

- **ITEM 92** (extract-d06-d08.md L691) Pipeline v3 required (dependency for top 4 dims)
- **ITEM 93** (extract-d06-d08.md L697) "Right vocabulary, WRONG MODE of composition"
- **ITEM 94** (extract-d06-d08.md L698-699) Builder deploys mechanisms as CHECKLIST not RESPONSES to content
- **ITEM 95** (extract-d06-d08.md L700-701) Pipeline v3 addresses via dispositional recipe + activation arch
- **ITEM 97** (extract-d06-d08.md L701) activation architecture (file ref) [META]
- **ITEM 100** (extract-d06-d08.md L644) needs architecture change (triangle = Pervading Metaphor, Multi-coh, CI)

### Gas Town Flagship Gap

- **ITEM 76** (extract-d06-d08.md L649-650) Pervading Metaphor: 2.5/5 (needs architecture change)
- **ITEM 77** (extract-d06-d08.md L652-653) Multi-coherence: 1.5/5 (needs architecture change)
- **ITEM 78** (extract-d06-d08.md L655-656) Compositional Intelligence: 2.0/5 (needs architecture change)
- **ITEM 79** (extract-d06-d08.md L658-659) Material Authenticity: 1.5/5 (fixable by prompt)
- **ITEM 80** (extract-d06-d08.md L661-662) Detail Density: 2.0/5 (fixable by prompt)
- **ITEM 81** (extract-d06-d08.md L664-665) Typographic Craft: 2.0/5 (fixable by prompt)
- **ITEM 82** (extract-d06-d08.md L667-668) Scale Hierarchy CSS: 3.0/5
- **ITEM 83** (extract-d06-d08.md L670-671) Channel Shifts CSS: 3.0/5
- **ITEM 84** (extract-d06-d08.md L673-674) Emotional Arc CSS: 3.5/5
- **ITEM 85** (extract-d06-d08.md L676-677) Spatial Confidence CSS: 3.5/5

### Fix Tier Roadmap

- **ITEM 86** (extract-d06-d08.md L681-685) CSS-only fix tier: Channel Shifts, Emotional Arc, Spatial Confidence
- **ITEM 87** (extract-d06-d08.md L683) CSS-only tier: 2.5 -> 3.2/5
- **ITEM 88** (extract-d06-d08.md L687-689) Prompt enrichment tier: Typographic Craft, Material Auth, Detail Density
- **ITEM 89** (extract-d06-d08.md L687) Prompt enrichment tier: 3.2 -> 3.5/5
- **ITEM 90** (extract-d06-d08.md L691-694) Architecture change tier: Pervading Metaphor, Multi-coherence, etc.
- **ITEM 91** (extract-d06-d08.md L691) Architecture change tier: 3.5 -> 4.0+/5
- **ITEM 99** (extract-d06-d08.md L644) fixable by prompt (star = Material Auth, Detail Dens, Typo Craft)
- **ITEM 101** (extract-d06-d08.md L667-677) 4 dims fixable by CSS: Scale Hierarchy, Channel Shifts, Emo Arc, Spatial

### Quality Tier Thresholds (from rerouted VALUES)

- **Rerouted ITEM 83** (extract-d01-d03.md L233) 963 lines of specification (old) [historical]
- **Rerouted ITEM 84** (extract-d01-d03.md L233) ~113 lines of brief (new)
- **Rerouted ITEM 85** (extract-d01-d03.md L235) 7.9:1 guardrail-to-playbook (old) [historical]
- **Rerouted ITEM 86** (extract-d01-d03.md L235) 0.3:1 guardrail-to-playbook (new)
- **Rerouted ITEM 87** (extract-d01-d03.md L236) 55 prohibitions (old) [historical]
- **Rerouted ITEM 125** (extract-d01-d03.md L266-268) "RIGHT vocabulary, WRONG mode of composition"
- **Rerouted ITEM 126** (extract-d01-d03.md L266-268) Predicted: Vocabulary + correct MODE COMPOSING not COMPLYING

### Flagship Achievement Status (evidence level: OBSERVED)

- **ITEM 42** (extract-d09-d11.md L825) NEVER ACHIEVED — requires 3-pass + Opus
- **ITEM 46** (extract-d18-d20.md L1473) NEVER ACHIEVED. Requires 3-pass + metaphor.

These items document that Flagship-level composition (PA-05 >= 3.5 with unified pervading metaphor) has never been demonstrated in any build. Both carry evidence level OBSERVED (factual status of the historical record).

### Register/Tier Predictions (all carry "(hypothesis)" per council)

- **Rerouted ITEM 143** (extract-d01-d03.md L324-340) Compositional Fluency: mechanisms interdependent
- **Rerouted ITEM 144** (extract-d01-d03.md L334-335) Register 1->2->3 (CCS 0.15->0.80)
- **Rerouted ITEM 145** (extract-d01-d03.md L324-340) Peak-Valley Rhythm: designed moments within competent baseline
- **Rerouted ITEM 146** (extract-d01-d03.md L337-339) EMERGENT from conditions (both capabilities)
- **Rerouted ITEM 147** (extract-d01-d03.md L348-349) Floor (2.5-3.0): Preconditions met, gatekeeper partial (hypothesis)
- **Rerouted ITEM 148** (extract-d01-d03.md L351-352) Ceiling (3.0-3.5): All met, Register 2 (hypothesis)
- **Rerouted ITEM 149** (extract-d01-d03.md L354-356) Flagship (3.5-4.0): All met, Register 3 + unified metaphor (hypothesis)

---

## SECTION 15: REVISION QUALITY AND MODE THEORY

### Why Fix Cycles Degrade Quality

- **ITEM 28** (extract-d15-d17.md L1199) REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION
- **ITEM 29** (extract-d15-d17.md L1208-1221) THE MODE SHIFT: GENERATIVE (build) vs CORRECTIVE (fix)
- **ITEM 30** (extract-d15-d17.md L1208-1221) GENERATIVE: full composition in working memory, CCS >0.35

### Mode Determinants for Orchestrator

The orchestrator uses these to verify the builder achieved the target mode:

- **ITEM 62** (extract-d18-d20.md L1513) Position-based names provide no design guidance
- **ITEM 63** (extract-d18-d20.md L1513-1515) Concept names PREDICT other CSS properties

---

## SECTION 16: ACTIONABILITY AND RECOMMENDATION TIERS

### Recommendation Tiers (from Actionability Audit)

- **ITEM 57** (extract-d21-d25.md L1733-1734) 47 recommendations -> 25 after dedup -> 4 tiers
- **ITEM 58** (extract-d21-d25.md L1767-1769) TIER 1: IMMEDIATELY ACTIONABLE (9 items, 2-4 hours)
- **ITEM 68** (extract-d21-d25.md L1781-1783) TIER 2: ACTIONABLE WITH DESIGN (8 items, 4-8 hours)
- **ITEM 77** (extract-d21-d25.md L1794-1796) TIER 3: REQUIRES EXPERIMENTATION (5 items, 8-20 hrs)
- **ITEM 83** (extract-d21-d25.md L1804-1806) TIER 4: THEORETICAL (3 items, weeks+)
- **ITEM 84** (extract-d21-d25.md L1808) Live pipeline (#23)
- **ITEM 85** (extract-d21-d25.md L1809) Atmospheric coupling (Register 3 CCS>=0.55) (#24)
- **ITEM 86** (extract-d21-d25.md L1810) Flagship 4/4 achievement (the end goal) (#25)
- **ITEM 91** (extract-d21-d25.md L1836-1841) 5-phase implementation sequence
- **ITEM 92** (extract-d21-d25.md L1842) Remove 900 lines. Keep 73. Test.
  - Council: rewritten to "Restructure constraint layer to 73 lines in recipe format; total input comparable to v2 but better organized"

### Orchestrator-Relevant Recommendations

- **ITEM 71** (extract-d21-d25.md L1787) Design creative revision cycle (#12)
- **ITEM 79** (extract-d21-d25.md L1799) Opus-as-sole-builder experiment (#19)
- **ITEM 128** (extract-d21-d25.md L1941) REC-02 Start single-pass, add iteration only if needed
- **ITEM 127** (extract-d21-d25.md L1940) REC-01 Run smoke test BEFORE building anything (BLOCKING)
- **ITEM 131** (extract-d21-d25.md L1944) REC-05 Honest complexity accounting (~3,600 lines not 73)
- **ITEM 132** (extract-d21-d25.md L1945) REC-06 Design falsification test as MANDATORY
- **ITEM 133** (extract-d21-d25.md L1946) REC-07 Budget for failure recovery (25-40% builds fail)

---

## ITEM COVERAGE VERIFICATION

### Layer 9 ORCHESTRATION Items from classify-by-layer.md (188 items)

All 188 Layer 9 items appear in this document across Sections 0-16:
- Section 0: Preconditions (ITEMS 127-136, ITEM 1-3)
- Section 1: Topology (ITEMS 55-58, 89, 91, 95-102, 109-115, 119-124, 21-27 from d04-d05)
- Section 2: Phase 0 (ITEMS 4-14, 65-68 from d09-d11, 100, 102 from d12-d14)
- Section 3: Phase 1 (ITEMS 15-19, 31-37, 46-47, 69-73 from d09-d11, 6-14 from d04-d05, 142)
- Section 4: Mode Selection (ITEMS 50-54, 62-63, 74-78, 79-82, 86 from d18-d20, 98, 137-138)
- Section 5: Phase 2 (ITEMS 48-54, 59-68, 74-79 from d09-d11, 2-7, 90, 92 from d06-d08)
- Section 6: Phase 3 (ITEMS 69-76, 78-82 from d01-d03, 80-89 from d09-d11, 30 from d06-d08)
- Section 7: Verdict (ITEMS 77-80, 43-51 from d15-d17)
- Section 8: Summary (ITEMS 62-63, 90-91 from d09-d11)
- Section 10: 3-Pass (ITEMS 1-29, 31-35 from d06-d08, 8-28 from d06-d08)
- Section 11: Experiments (ITEMS 1-35 from d09-d11, 183 from d21-d25)
- Section 12: Suppressors (ITEMS 116-124, 40-42 from d04-d05, 51-55 from d06-d08)
- Section 13: 13 Concepts (ITEMS 36-74 from d06-d08)
- Section 14: Diagnostics (ITEMS 76-101 from d06-d08, 28-30 from d15-d17)
- Section 15: Revision Quality (ITEMS 28-30 from d15-d17, 62-63 from d18-d20)
- Section 16: Recommendations (ITEMS 57-58, 68, 71, 77, 79, 83-86, 91-92, 127-128, 131-133, 183 from d21-d25)

### 15 Council-Rerouted VALUES Items (Pattern 5 Category A) + 19 Additional Context Items

All 15 council-rerouted items appear in Section 9, plus 19 additional VALUES context items across Sections 8, 9, and 14:
- ITEMS 31, 32, 34-39, 43-47, 75 from d04-d05/d06-d08
- ITEMS 81-82, 83-87, 93-94, 103-104, 125-126, 143-149 from d01-d03

---

*This document is AUTHORITATIVE for the orchestrator agent. Where this document conflicts with any other VA document (except the council verdict), this document takes precedence. The council verdict takes precedence over everything.*
