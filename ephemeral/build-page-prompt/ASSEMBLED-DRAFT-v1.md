# MASTER EXECUTION PROMPT: /build-page Pipeline Assembly
# ASSEMBLED DRAFT v1 -- 2026-02-19

---

## SECTION 0: MISSION + NON-NEGOTIABLES (Preamble)

**You are assembling the /build-page pipeline for the KortAI design system.** This pipeline builds HTML pages at Flagship 4/4 quality -- a level that has NEVER been achieved. When complete, running `/build-page content.md` will orchestrate: content analysis, Opus builder deployment with a conventions brief, 21-gate programmatic verification, 9-auditor Mode 4 perceptual audit with 8 Tier 5 questions, and fix cycles until PA-05 >= 3.5 AND Tier 5 >= 6/8.

**Three non-negotiables (memorize these -- they appear at every layer):**

1. **Container: 940-960px.** Every page. No exceptions. The #1 Phase D failure mode.
2. **Warm palette: R >= G >= B** on every background color. No cool grays. No pure black (#000) or pure white (#FFF).
3. **Perceptible CSS: Every value the builder writes must be visible to a human eye.** >= 15 RGB background delta between zones. >= 2px font-size delta. No letter-spacing below 0.02em. No stacked gaps above 120px.

**What you will produce:**

| # | Action | File | Type |
|---|--------|------|------|
| 1 | WRITE | `design-system/pipeline/conventions-brief.md` | New file (~230 lines) |
| 2 | WRITE | `design-system/pipeline/gate-runner.md` | New file (~400 lines) |
| 3 | WRITE | `design-system/pipeline/flagship-pa-questions.md` | New file (~80 lines) |
| 4 | WRITE | `~/.claude/skills/build-page/SKILL.md` | New file (~350 lines) |
| 5 | EDIT | `~/.claude/skills/tension-composition/SKILL.md` | 22 edits (tier removal + enrichment) |
| 6 | EDIT | `~/.claude/skills/perceptual-auditing/SKILL.md` | 13 edits (tier removal + Tier 5 addition) |
| 7 | EDIT | `design-system/CLAUDE.md` | 8 edits (/build-page integration) |
| 8 | EDIT | `design-system/compositional-core/CLAUDE.md` | 6 edits (ALWAYS FLAGSHIP) |
| 9 | RUN | Build A: `/build-page` against Gas Town content | Validation |
| 10 | RUN | Build B: `/build-page` against RESEARCH-SYNTHESIS | Validation |

**Execution order:** Items 1-4 can be written in parallel. Items 5-8 can be done in parallel (different files). Item 9 depends on all prior items. Item 10 depends on Item 9 passing.

>>> RE-READ THE 3 NON-NEGOTIABLES ABOVE BEFORE PROCEEDING.

---

### CHECKPOINT 0: Before proceeding, verify:
- [ ] You can state the 3 non-negotiables from memory (container width, warm palette, perceptible CSS)
- [ ] You understand the 10 actions in the file inventory
- [ ] You know the execution order (1-4 parallel, 5-8 parallel, 9 then 10)

---

## SECTION 1: TEAM ARCHITECTURE

**Use TeamCreate to spawn the build-page team.** You are the team lead / orchestrator.

### Wave 1: File Writers (6 agents, parallel, ~20-30 min)

| # | Role | Model | Output File |
|---|------|-------|-------------|
| 1 | conventions-brief-writer | **Opus** | `design-system/pipeline/conventions-brief.md` |
| 2 | gate-runner-writer | Sonnet | `design-system/pipeline/gate-runner.md` |
| 4 | build-page-skill-writer | **Opus** | `~/.claude/skills/build-page/SKILL.md` |
| 5 | tc-skill-editor | Sonnet | `~/.claude/skills/tension-composition/SKILL.md` |
| 6 | pa-skill-editor | Sonnet | `~/.claude/skills/perceptual-auditing/SKILL.md` |
| 7 | claude-md-editor | Sonnet | `design-system/CLAUDE.md` + `design-system/compositional-core/CLAUDE.md` |

### Wave 1.5: PA Questions (1 agent, after #6 completes, ~10-15 min)

| # | Role | Model | Output File |
|---|------|-------|-------------|
| 3 | pa-questions-writer | Sonnet | `~/.claude/skills/perceptual-auditing/SKILL.md` (append Tier 5) |

**CONTENTION:** Agents #6 and #3 both edit the PA skill. Agent #6 runs first (tier removal). Agent #3 runs after (Tier 5 addition). They MUST NOT run simultaneously.

### Wave 2: Verification (2 agents, parallel, depends on Wave 1+1.5, ~15-20 min)

| # | Role | Model | Output File |
|---|------|-------|-------------|
| 8 | cross-reference-verifier | **Opus** | `ephemeral/build-page-prompt/_verification/cross-ref-report.md` |
| 9 | quality-auditor | **Opus** | `ephemeral/build-page-prompt/_verification/quality-report.md` |

### Wave 3: Fix Cycle (1 agent, conditional, ~10-20 min)

| # | Role | Model | Output File |
|---|------|-------|-------------|
| 10 | fix-executor | Sonnet | Updates to Wave 1/1.5 output files |

Only runs if Wave 2 reports have BLOCKING findings. Max 2 fix cycles.

### Wave 4: Validation (1 agent, depends on Wave 3 or Wave 2)

| # | Role | Model | Output File |
|---|------|-------|-------------|
| 11 | validation-runner | **Opus** | `ephemeral/build-page-prompt/_verification/validation-report.md` |

**Dependency graph:**
```
Wave 1 (#1,#2,#4,#5,#6,#7) ─┬─> Wave 1.5 (#3, after #6) ─┬─> Wave 2 (#8,#9) ─> Wave 3 (#10) ─> Wave 4 (#11)
```

**Communication protocol:** File-bus primary. SendMessage to team-lead ONLY for: (1) file contention, (2) blocking dependency missing, (3) ambiguity between sources, (4) task impossible.

---

### CHECKPOINT 1: Before spawning agents, verify:
- [ ] You understand the wave structure (1 -> 1.5 -> 2 -> 3 -> 4)
- [ ] You know which agents are Opus (1, 4, 8, 9, 11) vs Sonnet (2, 3, 5, 6, 7, 10)
- [ ] You understand the PA skill contention resolution (#6 before #3)
- [ ] File paths are clear for all 7 output files

---

## SECTION 2: CONVENTIONS BRIEF

>>> WRITE FILE: `design-system/pipeline/conventions-brief.md`

**This is the most important file in the entire pipeline.** It is what the Opus builder reads as PRIMARY GUIDANCE. It must be a WORLD-DESCRIPTION (what the design system IS), not a CHECKLIST (what to verify). Format target: 55% conventions / 25% recipe / 20% checklist.

**Agent #1 (conventions-brief-writer, Opus) reads these sources IN ORDER:**

1. `ephemeral/build-page-prompt/DRAFT-09-conventions-brief-section.md` -- PRIMARY SOURCE (contains the full brief text between the markdown code fences)
2. `design-system/compositional-core/vocabulary/tokens.css` -- CSS variable values
3. `design-system/compositional-core/identity/prohibitions.md` -- soul constraints
4. `design-system/compositional-core/grammar/mechanism-catalog.md` -- mechanism vocabulary

**The exact content to write is in DRAFT-09, enclosed between the triple-backtick markdown fence starting with `# Conventions Brief -- KortAI Design System`.** The agent should write this content to the output file, making only these adjustments:

1. **Verify all file references:** Any reference to `merged-components.css` should be `components.css`. Any file path should be verified against the actual file system.
2. **Verify threshold consistency:** Background delta >= 15 RGB. Letter-spacing minimum 0.02em per-element, 0.03em between-zone delta. Stacked gap <= 120px (NOT 108px -- the gate-runner uses 120px per cross-validation resolution).
3. **Verify format balance:** Count imperative verbs vs declarative verbs. If constraint language ("must," "verify," "ensure," "fail") exceeds 20% of total words, rewrite those sections using world-description language.

**Brief structure (14 sections, ~230 lines):**

| Section | Content | Format |
|---------|---------|--------|
| 1. Identity | Soul constraints, font trinity, container, spacing, palette | Conventions |
| 2. Perception | Physics of visibility, threshold values embedded as world-description | Conventions |
| 3. Richness | Anti-scale model: density x restraint x confidence | Conventions |
| 4. Multi-Coherence | 6 channels, 4 directions, boundary-by-boundary | Conventions + recipe |
| 5. Fractal Echo | 5-scale table, build order, dependency verification | Conventions + recipe |
| 6. Unified Metaphor | Structural requirement, CSS-driven not label-driven | Conventions |
| 7. Transition Grammar | SMOOTH/BRIDGE/BREATHING with CSS values | Conventions |
| 8. CSS Vocabulary | Component DNA, border budget, dark slab, callouts, layouts | Conventions |
| 9. Creative Authority | What the builder IS FREE to do, override protocol | Conventions |
| 10. Compositional Memory | 3 habits: boundary naming, midpoint reflection, category awareness | Conventions |
| 11. Five Questions | Squint, Scroll, Second Half, Boundary, Skeleton | Conventions |
| 12. Restraint List | What this world does NOT contain | Conventions |
| 13. Accessibility | HTML skeleton template, ARIA, WCAG | Recipe |
| 14. Responsive | 3 breakpoints, soul unchanged | Conventions |
| Conviction Card | Pre-build commitment template | Recipe |
| Process | Understand -> Plan -> Build -> Verify | Recipe |

**CRITICAL FRAMING for Agent #1:** This file must convey what the design system IS and trust the builder with the method. CD-006 (39/40, Ceiling tier -- NOT the Flagship target) received essentially a world-description and produced excellent output. The Flagship experiment received a 963-line checklist and produced 1.5/4. Format IS the message.

---

### CHECKPOINT 2: After conventions brief is written, verify:
- [ ] File exists at `design-system/pipeline/conventions-brief.md`
- [ ] Contains all 14 sections plus Conviction Card and Process
- [ ] Count words "must," "verify," "ensure," "fail" -- constraint language < 20% of total words
- [ ] Container width stated as 940-960px (not other values)
- [ ] Background delta threshold stated as >= 15 RGB
- [ ] Letter-spacing minimum stated as >= 0.02em
- [ ] References `components.css` (not `merged-components.css`)
- [ ] HTML skeleton template present with font loading, skip link, ARIA landmarks

---

## SECTION 3: GATE RUNNER

>>> WRITE FILE: `design-system/pipeline/gate-runner.md`

**Agent #2 (gate-runner-writer, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-10-gate-runner-section.md` -- PRIMARY SOURCE (contains the full gate-runner content between `---BEGIN FILE CONTENT---` and `---END FILE CONTENT---`)

**The exact content to write is in DRAFT-10.** The agent should extract the content between the file content markers and write it to the output file.

**21 gates total:**

| Tier | Count | Gates | Blocks? |
|------|-------|-------|---------|
| A: Composition-Critical | 12 | SC-01, SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15, SC-13B (advisory), SC-16 (advisory), DG-1, DG-2 | 10 blocking, 2 advisory |
| B: Identity Enforcement | 7 | SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08 | All blocking |
| C: Behavioral | 2 | BG-1, BG-2 | Non-blocking |
| Additional | 2 | DG-3, DG-4 | Both blocking |

**Key Flagship thresholds (these MUST match the conventions brief):**

| Gate | Threshold |
|------|-----------|
| SC-01 | Container 940-960px |
| SC-09 | Background delta >= 15 RGB at every zone boundary |
| SC-10 | Stacked gap <= 120px |
| SC-11 | Display-body delta >= 10px, 3+ typography zones |
| SC-12 | 3-5 zones |
| SC-13 | >= 3 channels at every boundary, avg >= 4 |
| SC-14 | No letter-spacing < 0.025em, no intra-zone bg 1-14 RGB |
| SC-15 | >= 3 distinct border configurations |
| SC-06 | >= 5 ARIA landmarks |
| SC-08 | >= 8 component types |

**Cross-validation corrections already applied in DRAFT-10:**
- SC-10 threshold: 120px (not 108px)
- SC-14 letter-spacing: 0.025em per-element (not 0.02em)
- SC-04/SC-05: Exceptions for inverted contexts and semantic accents
- All references use `components.css`

**Gate execution includes:**
- Micro-gate schedule (4 checkpoints during build: MG-1 through MG-4)
- Full gate run groups (5 groups with dependency chain)
- Gate failure protocol (structured JSON fix recipes)
- Gate-to-PA handoff (one-way: all blocking gates PASS before PA runs)
- parseRGB helper function

---

### CHECKPOINT 3: After gate-runner is written, verify:
- [ ] File exists at `design-system/pipeline/gate-runner.md`
- [ ] Contains all 21 gates (count them)
- [ ] SC-10 threshold is 120px (not 108px)
- [ ] SC-14 letter-spacing threshold is 0.025em (not 0.02em or 0.03em)
- [ ] SC-04 has callout/accent exception clause
- [ ] SC-05 has inverted-context exception clause
- [ ] SC-11 includes display-body >= 10px (Flagship elevation)
- [ ] Micro-gate schedule present (MG-1 through MG-4)
- [ ] parseRGB helper function present
- [ ] Gate failure JSON format documented

---

## SECTION 4: PA QUESTIONS (Flagship Tier 5)

>>> WRITE FILE: `design-system/pipeline/flagship-pa-questions.md`

**Agent #3 (pa-questions-writer, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-pa-questions.md` -- PRIMARY SOURCE
2. `ephemeral/build-page-prompt/DRAFT-11-pa-orchestrator-section.md` -- Contains both PA questions and orchestrator (Section 4 of DRAFT-11)

**Content: 8 Tier 5 questions detecting compositional depth ABOVE PA-05 designed threshold.**

| ID | Question Focus | Auditor |
|----|---------------|---------|
| PA-60 | Design moment density (>= 3 unique moments) | F (Consistency+Rhythm) |
| PA-61 | Multi-voice composition (independent channel rhythms) | F (Consistency+Rhythm) |
| PA-62 | Transition variation (dramatic AND quiet boundaries) | D (Flow+Pacing) |
| PA-63 | Fractal zoom coherence (component echoes page) | E (Grid+Layout) |
| PA-64 | Restraint as expression (designed quiet vs unfinished) | C (Spatial+Proportion) |
| PA-65 | Musical analogy (single instrument / choir / ensemble) | A (Impression+Emotion) |
| PA-66 | Negative space variety (different "flavors" of emptiness) | C (Spatial+Proportion) |
| PA-67 | Novelty beyond competence (inventive, not just well-executed) | A (Impression+Emotion) |

**Tier 5 scoring:**

| YES Count | Label |
|-----------|-------|
| 7-8/8 | COMPOSED (Flagship target) |
| 5-6/8 | APPROACHING |
| 3-4/8 | STRUCTURED |
| 0-2/8 | VOCABULARY ONLY |

**Auditor assignment summary (48 standard + 8 Tier 5 = 56 total):**

| Auditor | Role | Standard Qs | Tier 5 | Total |
|---------|------|-------------|--------|-------|
| A | Impression+Emotion | PA-01,04,05,18,19,20,45 | PA-65,67 | 9 |
| B | Readability+Typography | PA-02,06,07,08,29 | -- | 5 |
| C | Spatial+Proportion | PA-09,10,11,30,31,32,33,50,51,52,53 | PA-64,66 | 13 |
| D | Flow+Pacing | PA-12,13,34,35,36 | PA-62 | 6 |
| E | Grid+Layout | PA-14,15,37,38,39 | PA-63 | 6 |
| F | Consistency+Rhythm | PA-16,17,40,41 | PA-60,61 | 6 |
| G | Metaphor+Ideology | PA-42,43,44 | -- | 3 |
| H | Responsive | PA-21,22,23,46,47 | -- | 5 |
| I | Adversarial | PA-26,27,28,48 | -- | 4 |

Each question in the file must include: full question text, what it detects, YES/NO scoring criteria, and auditor assignment.

---

### CHECKPOINT 4: After PA questions file is written, verify:
- [ ] File exists at `design-system/pipeline/flagship-pa-questions.md`
- [ ] Contains all 8 Tier 5 questions (PA-60 through PA-67)
- [ ] Each question has: text, detection target, YES/NO criteria, auditor assignment
- [ ] Scoring table present (COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY)
- [ ] Auditor assignment table matches the summary above
- [ ] Total question count stated as 56 (48 + 8)

---

## SECTION 5: BUILD-PAGE ORCHESTRATOR (SKILL.md)

>>> WRITE FILE: `~/.claude/skills/build-page/SKILL.md`

**Agent #4 (build-page-skill-writer, Opus) reads these sources IN ORDER:**

1. `ephemeral/build-page-prompt/DRAFT-orchestrator.md` -- PRIMARY SOURCE (complete orchestration sequence)
2. `ephemeral/build-page-prompt/DRAFT-11-pa-orchestrator-section.md` -- PA deployment + fix cycle detail
3. `ephemeral/build-page-prompt/07-metacog-analysis.md` -- Failure modes to counter
4. `ephemeral/build-page-prompt/11-format-analysis.md` -- Recipe vs checklist guidance
5. `ephemeral/build-page-prompt/16-team-architecture.md` -- Runtime team architecture
6. `ephemeral/build-page-prompt/CROSSREF-47-team-design-verification.md` -- Amendments to apply

**This file IS the master execution prompt.** It determines whether the entire pipeline succeeds or fails. It MUST be a RECIPE (imperative verbs, sequenced steps, specific values).

**Architecture: Fat Core.** One Opus agent plans AND builds. No separate planner. ALWAYS FLAGSHIP. No tier routing.

**Structure (10 sections, ~350-400 lines):**

```
---
name: build-page
description: >
  Build a fully designed HTML page using the KortAI design system.
  Orchestrates: Opus builder, programmatic gates, 9-auditor PA, fix cycles.
  Trigger: /build-page, "build a page", "run the pipeline".
---

## 0. MISSION
  PA-05 >= 3.5 AND Tier 5 >= 6/8. Container 940-960px. Warm palette. Perceptible CSS.
  Target: Flagship 4/4 (14-dimension definition -- NEVER achieved, BEYOND CD-006).

## 1. INTAKE
  Parse content source. Create output directory structure.

## 2. TEAM CREATION (Spawn Opus Builder)
  Builder reads 6 files in order: content, conventions-brief, prohibitions, tokens, mechanism-catalog, components.css.
  Builder prompt: recipe format, creative authority clause, content-form coupling instruction.
  Builder model: ALWAYS Opus.
  Builder writes 3 files: output.html, _build-log.md, _cascade-value-table.md.

## 3. GATE RUNNER
  Start HTTP server. Run 21 gates via Playwright. Disable animations. Wait for fonts.
  Micro-gates during build (MG-1 through MG-4).
  Full gate run after build complete.
  If any Tier A/B gate FAILS: produce structured fix instruction with measured values + CSS recipe.

## 4. SCREENSHOT CAPTURE
  3 viewports (1440, 1024, 768). Full-page cold look + scroll-through at 80% viewport steps.
  Orchestrator captures ALL screenshots BEFORE spawning auditors.

## 4.5 LOCK SHEET (Amendment S-01)
  Generate lock sheet from _build-log.md: LOCKED (Soul), LOCKED (Research), CHALLENGEABLE (Builder).
  Feed to Weaver ONLY. NOT to auditors (preserves fresh-eyes).

## 5. PA DEPLOYMENT (9 Opus Auditors + 1 Opus Weaver)
  All 9 auditors spawn in PARALLEL. Each reads saved screenshots (NO Playwright).
  Each gets full question text (not just IDs) for their assigned questions.
  Each writes report to _pa/pa-auditor-[LETTER].md.
  Weaver reads all 9 + lock sheet. Produces dual verdict (PA-05 + Tier 5).

## 6. FIX CYCLE
  If verdict = FIX: same builder gets structured feedback.
  Gate failures: specific CSS recipes. PA issues: directional guidance (not CSS prescription).
  Cycle 1: 9 auditors, all 56 questions. Cycles 2-3: 2 auditors (A+C), focused + Tier 5.
  Max 3 cycles. Then ESCALATE.

## 7. SUCCESS BAR
  PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations AND zero voids AND metaphor STRUCTURAL.

## 8. OUTPUT SUMMARY
  Report PA-05, Tier 5, verdict, files, fix cycles used, agents spawned.
```

**CRITICAL CONSTRAINTS for Agent #4:**
- 350-400 lines (not 530+ like failed Flagship prompt, not 75 like builder-starved version)
- Recipe format (imperative verbs: "spawn," "read," "run," "verify," "capture")
- Zero judgment language ("appropriate," "sufficient," "harmonious" are BANNED)
- Must route mechanism-catalog.md to BUILDER (not to a planner that doesn't exist)
- Must include perception thresholds as hard numbers
- Must include creative authority clause
- Must include content-form coupling instruction
- Must include Step 4.5 Lock Sheet (Amendment S-01 from cross-reference)

**Anti-failure techniques to embed:**
- AT-01: Progressive zoom (high-level intake -> detailed build -> verification)
- AT-02: Anti-checklist (creative verbs, not constraint verbs)
- AT-03: "Read brief as RECIPE (sequenced steps), not CHECKLIST (constraints to satisfy)"
- AT-04: 4 builder self-checks during build
- AT-05: "If you find yourself writing ABOUT the page instead of BUILDING the page, STOP and BUILD"
- AT-06: "CD-006 is a Ceiling FLOOR REFERENCE, not the Flagship target"

---

### CHECKPOINT 5: After SKILL.md is written, verify:
- [ ] File exists at `~/.claude/skills/build-page/SKILL.md`
- [ ] YAML frontmatter present with name, description, triggers
- [ ] Line count is 300-450 (check with wc -l)
- [ ] Contains all 10 sections (0 through 8 + 4.5 lock sheet)
- [ ] Builder reads 6 files (content, conventions-brief, prohibitions, tokens, mechanism-catalog, components.css)
- [ ] Builder model stated as "ALWAYS Opus"
- [ ] Creative authority clause present
- [ ] Content-form coupling instruction present
- [ ] Perception thresholds present as hard numbers (15 RGB, 2px, 0.02em, 120px)
- [ ] 9 PA auditors with question assignments matching Section 4
- [ ] Lock sheet generation step present (Step 4.5)
- [ ] Fix cycle limited to max 3
- [ ] Success bar: PA-05 >= 3.5 AND Tier 5 >= 6/8
- [ ] Zero instances of: "appropriate," "sufficient," "harmonious," "balanced," "optimal"

---

## SECTION 6: SKILL EDITS

### 6A: Tension-Composition Skill Edits (22 operations)

>>> EDIT FILE: `~/.claude/skills/tension-composition/SKILL.md`

**Agent #5 (tc-skill-editor, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-12-skill-edits.md` -- PRIMARY SOURCE (contains all exact old_string/new_string pairs in Section A)

**Read the current SKILL.md first. Then apply edits BOTTOM-UP (highest line numbers first) to preserve line numbers for subsequent edits.**

**Edit execution order (from DRAFT-12 Section C, PHASE 2):**

1. A-E06 (Phase 5 telescope distillate)
2. A10b (tokenization optional language)
3. A10a (tokenization header)
4. A9d (landmark verification)
5. A9c (landmark fail)
6. A9b (landmark pass)
7. A9a (landmark tier requirements)
8. A-E02 (fractal echo protocol -- replaces fractal gate)
9. A8 (fractal tier requirements)
10. A11a (rhythm variation qualifier)
11. A-E03 (transition grammar append)
12. A-E01 (multi-coherence binding rules)
13. A7b (per-category natural landing)
14. A7a (per-category qualifier)
15. A6 (Phase 4 deployment levels)
16. A-E05 (Phase 4 header + stack integration + density patterns)
17. A-E04 (anti-scale model before Phase 4.0)
18. A5 (metaphor rubric qualifier)
19. A4 (0D-CEILING context box)
20. A3 (routing + degradation)
21. A2 (Middle skip block -- DELETE)
22. A1 (Step 0D tier table)

**Net effect:** ~180 lines removed, ~120 lines added = ~60 line reduction. All tier routing removed. All Flagship enrichments applied.

### 6B: Perceptual-Auditing Skill Edits (13 operations)

>>> EDIT FILE: `~/.claude/skills/perceptual-auditing/SKILL.md`

**Agent #6 (pa-skill-editor, Sonnet) reads DRAFT-12 Section B.** Apply in this order (from DRAFT-12 Section C, PHASE 1):

1. B-S1 (PA-05 scoring reference to Tier 5)
2. B1a + B1b (PA-05c qualifiers)
3. B2 (PA-09 qualifier)
4. B3 (PA-17/41 elevation block -- replace CEILING+ with universal)
5. B4 (Tier 4 label)
6. B-E01 (Tier 5 questions -- LARGE insertion before Quantitative Guardrails)
7. B-XR1 + B-XR2 (question count updates: 48 -> 56)
8. B-E02 (multi-coherence evaluation guidance)
9. B-E03 (progressive zoom test)
10. B-E04 + B-E04b (Mode 4 team + weaver dual verdict)
11. B-S2 (fresh-eyes reinforcement)

**Agent #3 (pa-questions-writer, Sonnet, Wave 1.5) THEN adds Tier 5 questions** if they are not already included via B-E01. The DRAFT-12 B-E01 edit IS the Tier 5 insertion. If Agent #6 applies B-E01 correctly, Agent #3 verifies the insertion rather than re-adding.

**Post-edit verification checklist (from DRAFT-12 Section D):**

PA Skill:
- [ ] "Ceiling+" appears ONLY in factual provenance, never as a conditional
- [ ] "48 questions" does NOT appear -- all references say "56 questions"
- [ ] Tier 5 section exists between Tier 4 and Quantitative Guardrails
- [ ] All 8 Tier 5 questions present (PA-60 through PA-67)
- [ ] Mode 4 team table includes Tier 5 assignments
- [ ] Weaver dual-verdict protocol exists after task graph

TC Skill:
- [ ] Step 0D contains NO tier classification table
- [ ] No "Floor," "Middle," "Ceiling" as tier names in routing logic
- [ ] "Middle-tier+" and "Ceiling+" qualifiers do NOT appear on any MANDATORY rule
- [ ] "SKIP Phases 1-3" does NOT appear
- [ ] Phase 4 preamble has stack integration table
- [ ] Phase 4.0A (anti-scale model) exists before Phase 4.0
- [ ] Multi-coherence binding rules exist in Phase 4.3
- [ ] Fractal echo protocol with 5-scale table exists in Phase 4.7
- [ ] Tokenization is marked MANDATORY

---

### CHECKPOINT 6: After all skill edits are applied, verify:
- [ ] TC SKILL.md: search for "Floor" in routing/conditional context -- zero results
- [ ] TC SKILL.md: search for "SKIP Phases" -- zero results
- [ ] PA SKILL.md: search for "48 questions" -- zero results (should say 56)
- [ ] PA SKILL.md: Tier 5 section exists with all 8 questions
- [ ] Both skill files still parse as valid markdown (no broken fences)

---

## SECTION 7: CLAUDE.md EDITS

### 7A: design-system/CLAUDE.md (8 edits)

>>> EDIT FILE: `design-system/CLAUDE.md`

**Agent #7 (claude-md-editor, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-13-claude-md-architecture.md` -- Section A (contains all 8 exact old_string/new_string pairs)

**Read the file first.** Apply edits 1-8 in order:

| Edit | What Changes |
|------|-------------|
| 1 | Update Current Phase to "/build-page Pipeline ACTIVE" |
| 2 | Update Key Principle to add /build-page routing |
| 3 | Update QUICK START build entry to "/build-page" |
| 4 | Replace SKILLS section (TC+PA as sub-skills of /build-page) |
| 5 | Simplify Builder Ingestion Protocol |
| 6 | Simplify Routing Logic (Q1-Q5 -> Q1-Q3) |
| 7 | Update Anti-Pattern #7 (Track 1/2 -> /build-page) |
| 8a+8b | Update Evolution State + Timeline |

**Self-check after 8 edits:** Search for "Track 1" in QUICK START, ROUTING LOGIC, ANTI-PATTERNS -- should return zero. Search for "/build-page" -- should appear >= 6 times.

### 7B: design-system/compositional-core/CLAUDE.md (6 edits)

>>> EDIT FILE: `design-system/compositional-core/CLAUDE.md`

**Same agent reads DRAFT-13 Section B.** Apply edits 1-6 in order:

| Edit | What Changes |
|------|-------------|
| 1 | Update Status to "ALWAYS FLAGSHIP" |
| 2 | Replace TRACK CLASSIFICATION with BUILD PROTOCOL |
| 3 | Replace TRACK 1 WORKFLOW with MANUAL BUILD WORKFLOW |
| 4 | Rename TRACK 2 WORKFLOW to FLAGSHIP BUILD WORKFLOW |
| 5 | Update VERIFICATION CHECKLIST to Flagship thresholds |
| 6 | Update EXPERIMENT LESSONS section |

**Self-check after 6 edits:** Search for "ALWAYS FLAGSHIP" -- should appear >= 2 times. Search for "SC-09" -- should appear in verification checklist. Search for "Track 1 WORKFLOW" -- zero results.

---

### CHECKPOINT 7: After CLAUDE.md edits, verify:
- [ ] design-system/CLAUDE.md: "/build-page" appears >= 6 times
- [ ] design-system/CLAUDE.md: "Track 1" absent from QUICK START, ROUTING, ANTI-PATTERNS
- [ ] compositional-core/CLAUDE.md: "ALWAYS FLAGSHIP" appears >= 2 times
- [ ] compositional-core/CLAUDE.md: "SC-09" in verification checklist
- [ ] Both files parse as valid markdown

---

## SECTION 8: VALIDATION PROTOCOL

### Build A: Structurally Heterogeneous Content

>>> CONTENT FILE: `extractions/deep/yegge-gas-town-extraction.md`

This file has 1,324 lines with 4+ code blocks (Go, bash, tmux), 5+ content modes, 4+ domain transitions, ASCII diagrams, tables, quotes, and inherent tension. Structural heterogeneity FORCES visual variety.

**Run:** `/build-page extractions/deep/yegge-gas-town-extraction.md`

**Pass criteria:**
- PA-05 >= 3.5/4
- Tier 5 >= 6/8 (COMPOSED)
- All 15 blocking gates PASS at Flagship thresholds
- Zero soul violations
- Zero void patterns (no whitespace voids >= 200px)
- Metaphor is STRUCTURAL

**Decision tree:**
- PA-05 >= 3.5 AND Tier 5 >= 6/8: **PASS** -- proceed to Build B
- PA-05 3.0-3.4: Run 1 fix cycle. If post-fix >= 3.5: PASS.
- PA-05 < 3.0: **STOP.** Pipeline needs revision.

### Build B: Known Hard Content

>>> CONTENT FILE: `design-system/research/RESEARCH-SYNTHESIS.md`

Previous scores: 1.5/4 (Flagship attempt), 2.5/4 (CSS remediation). Uniform prose, no code blocks, weak structural heterogeneity. Tests whether pipeline improves over 2.5/4 baseline.

**Run:** `/build-page design-system/research/RESEARCH-SYNTHESIS.md`

**Pass criteria:**
- PA-05 >= 3.0/4 (improvement over 2.5 baseline)
- All 15 blocking gates PASS
- SC-09 >= 15 RGB at every zone boundary (was 1-8 RGB in failed attempt)

### Overall Verdict Table

| Build A (Gas Town) | Build B (RESEARCH-SYNTHESIS) | Pipeline Verdict |
|--------------------|------------------------------|-----------------|
| >= 3.5 + Tier 5 >= 6/8 | >= 3.0 | **PIPELINE PASS** |
| >= 3.5 + Tier 5 >= 6/8 | 2.5-2.9 | **CONDITIONAL PASS** |
| >= 3.5 + Tier 5 >= 6/8 | < 2.5 | **SELECTIVE PASS** (content ceiling) |
| 3.0-3.4 | any | **NEEDS CALIBRATION** |
| < 3.0 | N/A | **PIPELINE FAIL** |

---

### CHECKPOINT 8: After validation builds, verify:
- [ ] Build A produced output.html
- [ ] Build A gate runner executed without errors
- [ ] Build A PA auditors produced findings
- [ ] Build A PA-05 score recorded
- [ ] Build A Tier 5 score recorded
- [ ] Build B attempted (only if Build A >= 3.0)
- [ ] Overall verdict determined from table above

---

## SECTION 9: RECENCY RESTATEMENT

>>> RE-READ THIS BEFORE REPORTING RESULTS.

**Three non-negotiables (same as Section 0):**

1. **Container: 940-960px.** Every page. No exceptions.
2. **Warm palette: R >= G >= B.** No cool grays. No pure black/white.
3. **Perceptible CSS.** >= 15 RGB bg delta. >= 2px font-size delta. No letter-spacing < 0.02em. No stacked gaps > 120px.

**You are done when:**
- All 4 new files exist at correct paths
- All 49 edits applied to existing files (22 TC + 13 PA + 8 CLAUDE.md + 6 compositional-core/CLAUDE.md)
- Build A run and PA-05 score recorded
- Build B run (if Build A >= 3.0) and PA-05 score recorded
- Overall verdict determined

**If you find yourself writing ABOUT the pipeline instead of BUILDING the pipeline, STOP and BUILD.**

---

**END OF MASTER EXECUTION PROMPT -- ASSEMBLED DRAFT v1**

**Document statistics:**
- Total sections: 10 (0 through 9)
- Checkpoints: 9 (0 through 8)
- New files specified: 4
- Edit operations specified: 49
- Validation builds: 2
- Estimated total line count: ~530 lines
