# Old Pipeline Architecture: Forensic Archaeology

**Agent:** old-pipeline-archaeologist (Opus 4.6)
**Date:** 2026-02-23
**Sources:** 578-line archived SKILL.md, 578-line MASTER-EXECUTION-PROMPT.md, 49 assembly files in `ephemeral/build-page-prompt/`, design-system CLAUDE.md files, 6 research files (4,104 lines), 6-layer compositional-core (6,843 lines across key files)

---

## 1. COMPLETE INFORMATION FLOW MAP

### 1.1 The Full Information Chain (Bottom to Top)

The old pipeline (Pipeline v2, codified 2026-02-19) has the following information chain, from original research to what the builder agent actually processes:

```
LAYER 0: RAW RESEARCH (337 findings, ~4,104 lines)
    R1: Documentation Patterns (584 lines, 28 findings)
    R2: Creative Layouts (810 lines, 27 findings)
    R3: Density Dimensions (553 lines, 51 findings)
    R4: Axis Innovations (990 lines, 192 findings)
    R5: Combination Theory (784 lines, 39 findings)
    RESEARCH-SYNTHESIS.md (383 lines, cross-cutting)
        |
        | Phase C Extraction (19 agents, 42 files)
        | COMPRESSION: 337 findings -> 6-layer ontology (~6,800 lines)
        v
LAYER 1: COMPOSITIONAL CORE (6-layer ontology)
    Layer 1: prohibitions.md (419 lines) -- 22 prohibitions
    Layer 2: tokens.css (183 lines) -- 65 tokens
    Layer 3: mechanism-catalog.md (1,218 lines) -- 18 mechanisms
    Layer 4: components.css (1,195 lines) -- component library
    Layer 5: case-studies/ (9 studies) -- anti-prescription format
    Layer 6: guidelines/ -- semantic rules, responsive strategy
        |
        | Middle/Ceiling/Flagship experiments (N=4)
        | Retro-analysis (11 agents), Flagship dissection (16 agents)
        | Pipeline analysis (50+ agents, 41 files)
        | Flagship 4/4 recipe research (24 agents, 23 reports)
        v
LAYER 2: EXPERIMENTAL CORPUS (~200+ agent reports, ~1.7MB)
    Failure forensics, root cause analysis, compression audits
    Anti-conditions (14 suppressors), format analysis
    Stack transfer tests, builder simulations, contrarian challenges
        |
        | Prompt assembly (34 agents, 42 deliverables)
        | 8 researchers + 7 meta-auditors + 5 drafters +
        | 5 cross-ref verifiers + 3 auditors + 4 spec verifiers +
        | 1 assembler + 1 fresh-eyes validator
        | SOURCE: ~8,241 lines across 7 draft files
        | COMPRESSION: 8,241 -> 4,977 lines (1.66:1)
        v
LAYER 3: MASTER EXECUTION PROMPT (578 lines)
    10 sections, 9 verification checkpoints
    Instructions for writing 4 new files + editing 4 existing files
    Team architecture (11 agents across 4 waves)
        |
        | Fresh instance reads prompt, writes 4 files
        | COMPRESSION: 578 lines -> 4 output files
        v
LAYER 4: PIPELINE OUTPUT FILES (4 new files)
    A. conventions-brief.md (~609 lines) -- builder's world model
    B. gate-runner.md (~1,340 lines) -- 25 gates with JS code
    C. flagship-pa-questions.md (~80 lines) -- 8 Tier 5 questions
    D. build-page SKILL.md (578 lines) -- the orchestrator
        |
        | /build-page invocation: orchestrator reads SKILL.md
        | Spawns TC agent + Opus builder
        v
LAYER 5: BUILDER RUNTIME INPUTS
    Primary (read in full):
      TC brief (~80-120 lines) -- content-specific metaphor + zones
      conventions-brief.md (~609 lines) -- world description
      Content file (~200-1,400 lines) -- the material
    Reference (consulted as needed):
      mechanism-catalog.md (~1,218 lines)
      components.css (~1,195 lines)
      tokens.css (~183 lines)
      prohibitions.md (~419 lines)
        |
        | Builder processes ~3,700 lines of reference material
        | Working memory effectively processes ~150-300 lines
        | (primacy-recency curve: first ~150 and last ~50 get attention)
        v
LAYER 6: BUILDER CSS OUTPUT
    output.html -- the page
    _build-log.md -- decisions + reflections
    _cascade-value-table.md -- computed CSS values
```

### 1.2 Architecture Diagram

```
                    /build-page content.md
                           |
                    [ORCHESTRATOR]
                     (SKILL.md)
                    /     |     \
                   /      |      \
            [TC AGENT]    |    [GATE RUNNER]
            (1 Opus)      |    (Playwright JS)
                |         |         |
          _tc-brief.md    |    _gate-results.json
                |         |         |
            [BUILDER]     |    [SCREENSHOT CAPTURE]
            (1 Opus)      |    (3 viewports)
                |         |         |
           output.html    |    _screenshots/
           _build-log.md  |         |
           _cascade.md    |    [9 PA AUDITORS]
                          |    (9 Opus, parallel)
                          |         |
                          |    [PA WEAVER]
                          |    (1 Opus)
                          |         |
                          |    _pa-report.md
                          |    _pa-matrix.md
                          |         |
                          |    [FIX CYCLE]
                          |    (max 3 cycles)
                          |         |
                    [VERDICT: SHIP/FIX/REBUILD]

    Total agents per run: 1 orchestrator + 1 TC + 1 builder + 9 PA + 1 weaver = 13
    Fix cycles add: +4 PA (cycle 2) or +3 PA (cycle 3) per cycle
    Maximum: 13 + 7 = 20 agents per full run
```

---

## 2. COMPRESSION RATIOS AT EACH STAGE

### 2.1 Complete Compression Chain

| Stage | Input Lines | Output Lines | Ratio | What Dies |
|-------|-------------|--------------|-------|-----------|
| Research -> Compositional Core | 4,104 (research) | ~6,800 (ontology) | 0.6:1 (expansion) | Research CONTEXT (why findings exist). 337 findings become 18 mechanisms + 65 tokens + 22 prohibitions. Finding rationale compressed away. |
| Experimental Corpus -> Draft Sections | ~50,000+ (200+ reports) | 8,241 (7 drafts) | ~6:1 | Agent reasoning, alternative approaches, rejected hypotheses, edge cases, nuance. Only converged conclusions survive. |
| Draft Sections -> Master Prompt | 8,241 | 578 | 14.2:1 | Literal file content. Prompt becomes meta-instructions ("read DRAFT-09 and write the brief") rather than containing the brief itself. |
| Master Prompt -> 4 Output Files | 578 | ~2,607 total | 0.22:1 (expansion) | Prompt's understanding of WHY. Fresh instance writes files mechanically. |
| Conventions Brief -> Builder Working Memory | 609 | ~150-300 effective | 2-4:1 | Sections 5-14 get degraded attention (primacy-recency curve). Fractal echo, compositional memory, quality floor, responsive rules all in the attention trough. |
| All Builder Inputs -> CSS Output | ~3,700 (all ref files) | ~700-1,500 CSS lines | 2.5-5:1 | 86.6% of input is unprocessed (from Flagship experiment data). Builder effectively works from ~75-150 lines of internalized guidance. |

### 2.2 End-to-End Compression

| Measure | Value |
|---------|-------|
| Total research input | 4,104 lines (337 findings) |
| Total experimental analysis | ~50,000+ lines (200+ agent reports) |
| Total infrastructure written | ~54,000+ lines |
| Builder effective input | ~150-300 lines |
| **End-to-end compression** | **180:1 to 360:1** |
| CSS output | ~700-1,500 lines |
| **Research-to-output ratio** | **27:1 to 54:1** |

### 2.3 The "50:1 Compression" Finding

The memory file states: "50:1 compression from agent output to behavioral constraint -- 99.8% information loss." This was measured specifically from the Flagship prompt (963 lines from ~47,000 lines of analysis). The v2 pipeline improved this to 14.2:1 (master prompt) but the EFFECTIVE compression at the builder level remains extreme because the builder does not read the master prompt -- it reads files that were PRODUCED from the master prompt by a different instance.

---

## 3. WHAT THE BUILDER ACTUALLY RECEIVES

### 3.1 Builder File Manifest (from SKILL.md Step 3)

The builder reads these files IN THIS ORDER (order matters):

| # | File | Lines | Purpose | Primacy Position |
|---|------|-------|---------|-----------------|
| 1 | _tc-brief.md | 80-120 | Content-specific metaphor, zones, tensions, mechanisms | HIGH (read first) |
| 2 | conventions-brief.md | 609 | World description: identity, perception, richness, multi-coherence, fractal echo, transitions, CSS vocabulary, creative authority, quality floor | HIGH (read second) |
| 3 | Content file | 200-1,400 | The actual material to design | MEDIUM |
| 4 | mechanism-catalog.md | 1,218 | CSS patterns for 18 mechanisms | LOW (reference, consulted) |
| 5 | components.css | 1,195 | Component library | LOW (reference, consulted) |
| 6 | tokens.css | 183 | CSS variable values | LOW (reference, consulted) |
| 7 | prohibitions.md | 419 | Soul constraints | MEDIUM-HIGH (read last before CSS -- recency) |

**Total available: ~3,824 - 5,024 lines** depending on content file length.

### 3.2 What the Builder Actually Processes

From the metacognitive analysis (file 07) and builder simulation (file 12):

- **High attention (first ~150 lines):** TC brief (full), conventions brief Sections 1-4 (Identity, Perception, Richness, Multi-Coherence)
- **Medium attention:** conventions brief Sections 5-8 (Fractal Echo, Transition Grammar, CSS Vocabulary, Creative Authority)
- **Low attention (attention trough):** conventions brief Sections 9-14 (Quality Floor, Compositional Memory, Five Questions, Restraint, Accessibility, Responsive)
- **Recency boost (last ~50 lines):** prohibitions.md soul constraints
- **Consulted on demand:** mechanism-catalog, components.css, tokens.css

**Effective processing:** The Flagship experiment proved the builder processed ~75 lines (13.4% of the 963-line prompt). The v2 architecture gives the builder a 609-line conventions brief, so effective processing is estimated at ~80-150 lines (13-25% of the brief).

---

## 4. EVERY KNOWN FAILURE MODE

### 4.1 Failure Modes from the Experimental Record (N=4 pipeline attempts)

| ID | Failure Mode | Experiment | PA-05 Score | Root Cause |
|----|-------------|------------|-------------|------------|
| EXP-1 | Phase D: Container width violation | 4/5 pages violated 940-960px | N/A (compliance test) | Container width not enforced as absolute constraint |
| EXP-2 | Middle Tier: Missing footer | PA-05 4/4 but incomplete | PA-05 4/4 | Zero inter-agent communication. Builder could not ask planner. |
| EXP-3 | Flagship: Imperceptible backgrounds | 0/11 transitions >= 15 RGB | PA-05 1.5/4 | No perception thresholds. Builder wrote sub-perceptual CSS. |
| EXP-4 | Flagship: Uniform typography | All paragraphs 16px/400 | PA-05 1.5/4 | "Typographic convergence gradient" via 0.004-0.01em letter-spacing = invisible |
| EXP-5 | Flagship: 6 whitespace voids (210-276px) | Stacked spacing exceeded 200px | PA-05 1.5/4 | S-09 stacking loophole: individual values pass, totals fail |
| EXP-6 | Flagship: Zero section-level borders | 12 sections, 0 structural borders | PA-05 1.5/4 | No rule required section-level borders |
| EXP-7 | Flagship: Zero grid/flex layouts | Single-column throughout | PA-05 1.5/4 | No layout variation requirement |
| EXP-8 | Flagship Remediation: Border selectors wrong | Selectors too specific, CSS not applying | PA-05 2.5/4 | Selector specificity mismatch between planned and actual HTML |
| EXP-9 | Flagship Remediation: Typography not applying | 15px font-size rule not triggering | PA-05 2.5/4 | CSS specificity conflict with inline styles |

### 4.2 Architectural Failure Modes (from metacognitive analysis, file 07)

| ID | Mode | Probability | Description |
|----|------|-------------|-------------|
| FM-01 | SKIMMING COLLAPSE | HIGH | Builder attention degrades after ~150 lines. Sections 5-14 of brief receive degraded attention. Quality of later-built zones is lower. |
| FM-02 | CHECKLIST DRIFT | HIGH | Any list of tasks induces compliance mode. Builder checks off requirements rather than composing. |
| FM-03 | COMPRESSION CASCADE | HIGH | Each representational boundary (research -> prompt -> agent -> output) destroys 60-80% of non-procedural intelligence. At 3 boundaries with 20% survival: 0.8% of original intelligence survives. |
| FM-04 | ORCHESTRATOR LOGIC ERRORS | MEDIUM-HIGH | Multi-step workflow dependency errors. Wrong file paths, wrong read order, wrong agent routing. |
| FM-05 | WRONG FILE ASSUMPTIONS | MEDIUM-HIGH | Edit instructions assume file state that may have changed since last read. Edits fail or corrupt. |
| FM-06 | BRIEF BECOMES CHECKLIST | MEDIUM-HIGH | Conventions brief intended as "world description" drifts to constraint list. Tone is dispositional; content is specification. |
| FM-07 | PERFUNCTORY VALIDATION | MEDIUM | Validation builds are last task, receive least attention. Treated as ceremony not gate. |
| FM-08 | CONTENT GENERATION vs CURATION | MEDIUM | Fresh instance generates plausible but incorrect values (e.g., hex colors that look right but differ by only 12 RGB). |
| FM-09 | TEACHING vs DIRECTING | MEDIUM | Explaining WHY consumes prompt real estate without changing behavior. Teaching and directing compete for same attention budget. |
| FM-10 | RECURSIVE META-ANALYSIS | LOW-MEDIUM | Opus builder analyzes the pipeline instead of executing it. 660:1 meta-to-output ratio failure. |

### 4.3 Root Causes from Failure Analysis Corpus (31 total)

From the failure-pattern-match report (file 14), 15 root causes + 14 suppressors + additional findings:

**15 Root Causes (RC-1 through RC-15):**

| Status in v2 | Count | Examples |
|--------------|-------|---------|
| FULLY ADDRESSED | 11 | RC-1 (no generative arrow), RC-3 (builder visibility cap), RC-5 (zero agent comms), RC-8 (2400:1 compression), RC-9 (component library invisible), RC-15 (no plan-fidelity gate) |
| PARTIALLY ADDRESSED | 2 | RC-6 (validation = coverage not causation), RC-12 (layout variation is guardrail not playbook) |
| BLOCKING | 2 | S-10/BG-1 (content-form decoupling -- no instruction for per-section treatment), S-02/BG-2 (constraint count ~30-35, above ~20 threshold) |

**14 Suppressors (S-01 through S-14):**

| Status in v2 | Count | Examples |
|--------------|-------|---------|
| FULLY ADDRESSED or ELIMINATED | 10 | S-01 (checklist format), S-03 (inverted quality routing), S-07 (multi-pass fragmentation), S-12 (Sonnet builders), S-14 (analytical process drift) |
| PARTIALLY ADDRESSED | 3 | S-02 (prohibition overload), S-10 (content-form decoupling), S-13 (exemplar deprivation) |
| BLOCKING | 1 | S-10 (content-form coupling remains implicit) |

---

## 5. WHAT INFORMATION WAS LOST AND WHY

### 5.1 Systematic Loss Categories

#### CATEGORY A: RESEARCH RATIONALE (WHY things are the way they are)

**What was lost:** The reasoning chain from 337 research findings to design decisions. Why border-radius is 0. Why the spacing scale uses 4px base. Why Instrument Serif for display only. The SITUATED nature of every pattern (where validated, what content properties assumed, where untested).

**Why lost:** Phase C Extraction deliberately compressed research into operational vocabulary. The compositional core is "CHOICE-oriented" (what to use, when) not "CONTEXT-oriented" (why it exists). This is intentional -- builders need tools, not history.

**Impact:** Moderate. Builders can build without knowing history. But when they encounter edge cases (content with no hierarchy, uniform prose), they lack the reasoning to adapt intelligently. They fall back to literal compliance.

**Lines lost:** ~4,104 lines of research -> 0 lines reach the builder. Research files are explicitly marked "NEVER for building tasks."

#### CATEGORY B: COMPOSITIONAL INTELLIGENCE STACK (the deep structure)

**What was lost:** The stack transfer test (file 15) measured compression of 5 intelligence layers:

| Layer | Full Form Lines | Brief Form Lines | Compression | Items Completely Lost |
|-------|----------------|------------------|-------------|----------------------|
| Scales (5 zoom levels) | 493 | 24 | 20.5:1 | CSS property tables per scale, dependency chain, build order, verification methods, per-scale thresholds |
| Channels (6 CSS families) | 720 | 20 | 36:1 | Deployment CSS examples, mechanism-to-channel routing, layout diversity shortcut, 21 of 24 semantic directions |
| Multi-Coherence | ~200 | ~8 | 25:1 | Boundary analysis examples, what works vs what fails data |
| Anti-Scale Model | ~236 | ~8 | 29.5:1 | Operationalized definitions, restraint examples |
| Fractal Self-Similarity | ~300 | ~15 | 20:1 | Structural vs parametric echo distinction, Character scale as LAST and OPTIONAL |

**Why lost:** The conventions brief targets ~230 lines (later expanded to 609 in final version). Encoding 1,949 lines of compositional intelligence into 75 lines of brief content requires catastrophic compression. The v2 assembly team partially fixed this (brief expanded, sections enriched), but the fundamental constraint remains: the brief is a SUMMARY, not a reproduction.

**Impact:** CRITICAL. The stack transfer test identified 4 items as critically lost:
1. **CSS property tables per scale** -- builder must INVENT what "navigation scale CSS" means
2. **Scale dependency chain** -- builder attempts all 5 scales simultaneously instead of building bottom-up
3. **Build order** -- no sequencing of scale construction
4. **Per-scale verification methods** -- no self-checks during build

#### CATEGORY C: FAILURE FORENSICS (what went wrong and specifically how)

**What was lost:** The 10-failure-forensics report contains 200 lines of exact CSS values from the failed Flagship (PA-05 1.5/4): all 12 zone backgrounds with RGB values, all adjacent-zone deltas proving imperceptibility (0/11 above 15 RGB), the complete letter-spacing distribution showing all values sub-pixel (0.032px to 0.28px), the 6 whitespace void measurements (192-272px), the border audit (zero section-level borders).

**Why lost:** The conventions brief encodes the THRESHOLDS derived from these failures (>= 15 RGB, >= 0.025em letter-spacing, <= 120px stacked gap) but NOT the forensic data. The builder learns "backgrounds must differ by 15 RGB" but not "the Flagship had backgrounds differing by 1-11 RGB and they were all invisible." The RULE survives; the visceral understanding of WHY does not.

**Impact:** Moderate-High. The thresholds prevent the exact failure mode from recurring. But without understanding the failure forensics, the builder cannot generalize to NOVEL sub-perceptual traps. The builder complies with the threshold rather than internalizing perceptibility as a design principle.

**Lines lost:** ~200 lines of forensic data -> ~15 lines of threshold rules in the brief.

#### CATEGORY D: FORMAT INTELLIGENCE (recipe vs checklist distinction)

**What was lost:** The format analysis (file 11) contains 200+ lines proving that instruction FORMAT determines builder cognitive mode and quality ceiling. Three format types:
- Recipe (action verbs: "deploy", "select") -> ceiling 3.0-4.0
- Checklist (constraint verbs: "verify", "fail if") -> ceiling 1.5-2.5
- Conventions brief (world-building verbs: "is", "creates") -> ceiling 3.5-4.0

The conventions brief's verb inventory: 52 action, 14 constraint, 28 world-building = 55% recipe / 15% checklist / 30% conventions. This calibration is ITSELF a compression of the finding that format determines ceiling.

**Why lost:** The brief cannot explain its own format theory. It must simply BE the right format. The meta-knowledge of why format matters is embedded in the prompt assembly research, not in the pipeline itself.

**Impact:** Low for individual runs (the format IS correct). HIGH for pipeline evolution (without understanding WHY the format works, future editors may introduce checklist language, degrading the ceiling).

#### CATEGORY E: CD-006 GROUND TRUTH (what good CSS actually looks like)

**What was lost:** CD-006 (39/40 soul score, CEILING tier, ~3/4 PA-05 COMPOSED) is the best empirical reference. Its CSS contains: 23 border contexts, 10 grid/flex layouts, 11 component types, 10 perceptibly distinct backgrounds, 5 @media queries. The builder simulation (file 12) shows a fresh builder could reproduce CD-006-quality output if given CD-006's CSS as reference. But the pipeline deliberately withholds full exemplar HTML to prevent "template gravity."

**Why lost:** The conventions brief provides a 15-line boundary excerpt from CD-006 showing a multi-channel boundary shift. The full exemplar is withheld because previous experiments showed builders COPY exemplar CSS rather than COMPOSE from principles. The trade-off is intentional: less template gravity at the cost of exemplar deprivation (suppressor S-13).

**Impact:** Low-Moderate. Opus can build quality without exemplars (CD-006's 39/40 soul score proves this). But the anti-template decision means the builder must discover good CSS patterns from first principles each run, which is expensive in tokens and inconsistent across runs.

### 5.2 The Guardrail Factory Problem

The single most important finding from the pipeline analysis:

**The old Flagship prompt had a 7.9:1 guardrail-to-playbook ratio.** 55 prohibitions but only 7 playbooks. The builder was told what NOT to do 8 times more often than what TO do.

The v2 conventions brief inverts this: 52 action verbs, 14 constraint verbs, 28 world-building statements. But the GATES still operate as a pure guardrail system (25 binary pass/fail checks). The gates tell the builder what failed but not what to do instead. The fix recipe mechanism (gate failures include CSS fix suggestions) partially addresses this but only AFTER failure, not before.

**Net assessment:** The v2 pipeline moved from a guardrail factory to a hybrid (world-description brief + guardrail gates). The brief is ~55% recipe / 30% conventions / 15% checklist. This is a dramatic improvement from the original 7.9:1 ratio. But the VERIFICATION layer (gates + PA) remains purely evaluative, with zero generative capability.

---

## 6. TOKEN BUDGET ANALYSIS

### 6.1 What the Orchestrator Consumes

The SKILL.md orchestrator is 578 lines. When loaded as a Claude Code skill:
- YAML frontmatter + SKILL.md body = ~578 lines
- Plus system prompt, CLAUDE.md files, user message overhead = ~2,000-3,000 tokens of system context

The orchestrator itself does not build -- it spawns agents. Its token consumption is:
- Reading SKILL.md: ~4,000-5,000 tokens
- Managing 13-20 agents: ~1,000-2,000 tokens per agent spawn
- Gate running (Playwright JS execution): ~500-1,000 tokens per gate
- Screenshot management: ~200-500 tokens per screenshot
- **Total orchestrator tokens: ~30,000-50,000 tokens per run**

### 6.2 What the Builder Consumes

The builder agent receives:
| Input | Lines | Estimated Tokens |
|-------|-------|-----------------|
| TC brief | 80-120 | ~800-1,200 |
| Conventions brief | 609 | ~5,000-6,000 |
| Content file (e.g., Gas Town) | 1,324 | ~10,000-12,000 |
| mechanism-catalog.md | 1,218 | ~10,000-12,000 |
| components.css | 1,195 | ~8,000-10,000 |
| tokens.css | 183 | ~1,500 |
| prohibitions.md | 419 | ~3,500 |
| **Total builder input** | **~5,028** | **~40,000-46,000** |

Builder output (HTML + build log + cascade table): ~2,000-4,000 lines = ~15,000-30,000 tokens.

**Available context for BUILDING (in a 200K context window):**
- Input: ~46,000 tokens
- Output generation: ~30,000 tokens
- System overhead: ~10,000 tokens
- **Remaining for reasoning/planning: ~114,000 tokens**

This is GENEROUS. The builder has ample context budget. The problem is not token budget but ATTENTION budget -- the builder does not process all 46,000 input tokens with equal attention (FM-01: skimming collapse).

### 6.3 What the PA Deployment Consumes

9 PA auditors, each receiving:
- PA skill excerpt: ~200-300 lines (questions + scoring guidance)
- Screenshots: 12-18 images (~5,000-8,000 tokens per image)
- **Per auditor: ~60,000-100,000 tokens (mostly images)**
- **Total PA deployment: ~540,000-900,000 tokens across 9 agents**

PA is the most token-expensive phase of the pipeline, consuming 10-20x more than the builder.

### 6.4 Total Pipeline Token Budget

| Phase | Agents | Est. Tokens |
|-------|--------|-------------|
| TC Analysis | 1 | ~40,000 |
| Builder | 1 | ~90,000 |
| Gate Runner | 0 (orchestrator) | ~15,000 |
| Screenshots | 0 (orchestrator) | ~5,000 |
| PA Auditors | 9 | ~720,000 |
| PA Weaver | 1 | ~60,000 |
| Fix Cycle 1 | 1 builder + 4 PA + 1 weaver | ~400,000 |
| **Total (no fix cycles)** | **13** | **~930,000** |
| **Total (1 fix cycle)** | **19** | **~1,330,000** |
| **Total (3 fix cycles)** | **25** | **~2,000,000** |

---

## 7. CRITICAL WEAKNESSES THAT MOTIVATED PIPELINE v3

### 7.1 The Master Execution Prompt Was a Meta-Prompt, Not a Pipeline

The 578-line MASTER-EXECUTION-PROMPT.md does not contain the pipeline itself. It contains INSTRUCTIONS for a fresh Claude instance to BUILD the pipeline (write 4 files, edit 4 files, run 2 validation builds). This adds an entire representational boundary:

```
Research -> Analysis -> Prompt Assembly -> MASTER PROMPT -> Fresh Instance -> Pipeline Files -> Builder -> CSS
                                              ^
                                              |
                                    THIS BOUNDARY LOSES
                                    WHY everything matters
```

The master prompt tells the fresh instance WHAT to write but the fresh instance must GENERATE understanding of WHY. The prompt assembly team's understanding (from reading 50,000+ lines of analysis) cannot transfer through a 578-line prompt. The fresh instance produces files that are structurally correct but may lack the compositional intelligence that motivated each decision.

### 7.2 The Conventions Brief Is Untested Infrastructure

Contrarian challenge Ch-11: "Conventions brief has NEVER BEEN TESTED." The brief was assembled from analysis of what went wrong, not from experiments showing what works. It is a theoretical artifact. The first /build-page run IS the test.

As of the Gas Town build (the first actual run), the conventions brief had been:
- Drafted by 1 Opus agent from 789 lines of extracted values
- Cross-referenced by 2 agents
- Compression-audited by 1 agent
- Builder-simulated by 1 agent
- Fresh-eyes validated by 1 agent (scored 4/5)
- But NEVER used in an actual build to produce a page that was then audited

### 7.3 The 30-35 Constraint Problem

The failure analysis identified ~20 as the threshold for builder attention to binary constraints. The conventions brief contains 30-35 binary requirements (thresholds + mandates + quality floor items). While the FORMAT is better (world description, not flat list), the VOLUME of constraints still exceeds the empirically identified threshold.

### 7.4 Content-Form Coupling Remains Implicit

The single highest-severity blocking gap (BG-1 in file 14): the pipeline has no explicit instruction for per-section visual treatment driven by content meaning. The builder is told "identify the natural zones" but not "each section's visual density, component selection, and spacing should respond to what the content in that section IS ABOUT." Content-form coupling is implicit -- assumed as Opus's natural behavior -- but the remediation experiment (2.5/4) showed this coupling is NOT automatic.

### 7.5 No Generative Feedback During Build

The pipeline has EVALUATIVE feedback (gates, PA auditors) but ZERO generative feedback during the build phase. The builder writes all CSS, then learns what failed. The midpoint micro-gate (Step 3.1 in SKILL.md) was added to catch the #1 failure mode (imperceptible backgrounds) mid-build, but it only checks 3 gates. There is no mechanism for the builder to receive COMPOSITIONAL guidance during construction -- only mechanical pass/fail signals.

### 7.6 Template Gravity vs Exemplar Deprivation Trade-off

The pipeline deliberately withholds full exemplar HTML to prevent template gravity (builders copying CSS rather than composing). But this creates exemplar deprivation (suppressor S-13). The builder must discover good CSS patterns from first principles each time. This trade-off was accepted as "acceptable" but remains a known limitation.

### 7.7 PA-to-Fix Loop Is Expensive and Indirect

Each fix cycle requires:
1. Builder applies fixes to output.html
2. Re-run ALL gates
3. Re-capture ALL screenshots (3 viewports)
4. Re-deploy 3-4 PA auditors
5. Re-run weaver synthesis

Each cycle costs ~400,000 tokens and ~25-45 minutes. The fix instructions travel:
PA auditor observation -> weaver synthesis -> fix instruction file -> builder reads -> builder applies.
This is a 4-hop feedback loop where each hop can lose nuance.

### 7.8 The Assembly Process Itself Is Fragile

The master prompt references 7 external DRAFT files. If any is missing, corrupted, or edited since the prompt was written, the corresponding agent fails. The fresh-eyes validator (file VALIDATION-18) noted this as a 3/5 "CONCERNING" completeness gap. The prompt is an orchestration layer pointing to content elsewhere -- a single missing file breaks the chain.

### 7.9 Sonnet vs Opus Confound

The Flagship experiment used Sonnet builders (producing 1.5/4). CD-006 (39/40 soul score, CEILING tier, ~3/4 PA-05 COMPOSED) was built by Opus. The v2 pipeline mandates Opus for builders. But the retrospective (Contrarian finding) noted that Sonnet-for-builders was "the most unexamined variable." The improvement from 1.5/4 to 2.5/4 could be due to: (a) better prompt, (b) Opus builder, (c) CSS remediation spec, or (d) some combination. The confound is unresolved.

---

## 8. SUMMARY: THE OLD PIPELINE'S INFORMATION ECONOMY

### What Survives Intact

1. **Soul constraints** (border-radius: 0, box-shadow: none, container 940-960px, font trinity, warm palette). These are binary, absolute, and repeated at every layer. Survival rate: ~100%.

2. **Perception thresholds** (>= 15 RGB, >= 2px font-size, >= 0.025em letter-spacing, <= 120px stacked gap). These are numerical and embedded in both the brief AND the gates. Survival rate: ~95%.

3. **Component library access** (components.css routed directly to builder). Zero compression. Survival rate: ~100%.

4. **Mechanism catalog access** (mechanism-catalog.md routed directly to builder). Zero compression. Survival rate: ~100%.

### What Is Partially Compressed

5. **Multi-coherence concept** (720 lines of deep dive -> 20 lines in brief). The concept survives but CSS deployment examples, mechanism-to-channel routing, and layout diversity shortcut are lost. Survival rate: ~15%.

6. **Fractal echo concept** (493 lines -> 24 lines in brief). Scale names survive but build order, dependency chain, per-scale thresholds, and verification methods are lost. Survival rate: ~10%.

7. **Transition grammar** (full examples -> 3 types with CSS ranges). Structure survives but worked boundary examples are lost. Survival rate: ~40%.

### What Is Destroyed

8. **Research rationale** (4,104 lines -> 0 lines reach builder). Intentionally excluded. Survival rate: 0%.

9. **Failure forensics** (200+ lines of exact CSS values -> threshold rules only). The numbers survive; the visceral understanding dies. Survival rate: ~5%.

10. **Format theory** (why recipe > checklist > conventions). Embedded in structure but not communicable. Survival rate: 0% as explicit knowledge.

11. **CD-006 ground truth CSS** (1,000+ lines of proven CSS -> 15-line excerpt). Template gravity prevention. Survival rate: ~1.5%.

12. **Builder simulation insights** (200+ lines of predicted confusion points -> addressed in brief adjustments). The adjustments survive; the understanding of builder psychology dies. Survival rate: ~20% (as structural accommodation).

### The Architecture's Fundamental Character

The old pipeline is a **compression machine with anti-compression patches**. The base architecture compresses ~54,000 lines of research and analysis through 6 representational boundaries to reach a builder who effectively processes 150-300 lines. The v2 improvements (conventions brief format, direct file routing, perception thresholds, anti-checklist tone) are patches that reduce the damage at each boundary but do not eliminate the fundamental compression chain.

The pipeline's information economy is: **invest heavily in analysis (200+ agent-hours) to produce a small artifact (609-line brief + 578-line SKILL.md) that determines the quality ceiling for all future builds.** The ROI of this investment depends entirely on whether the brief is a SUFFICIENT encoding of compositional intelligence -- and as of the Gas Town build, that hypothesis remained untested.
