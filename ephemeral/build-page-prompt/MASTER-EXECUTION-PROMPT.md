# MASTER EXECUTION PROMPT: /build-page Pipeline Assembly
# FINAL -- 2026-02-19

---

## SECTION 0: MISSION + NON-NEGOTIABLES

**You are assembling the /build-page pipeline for the KortAI design system.** This pipeline builds HTML pages at Flagship 4/4 quality -- a level that has NEVER been achieved. CD-006 (39/40, Ceiling tier) is the FLOOR REFERENCE, not the target. When complete, running `/build-page content.md` will orchestrate: Opus builder deployment with a conventions brief, 21-gate programmatic verification, 9-auditor Mode 4 perceptual audit with 8 Tier 5 questions, and fix cycles until PA-05 >= 3.5 AND Tier 5 >= 6/8.

**Three non-negotiables (memorize these -- they appear at every layer):**

1. **Container: 940-960px.** Every page. No exceptions. The #1 Phase D failure mode.
2. **Warm palette: R >= G >= B** on every background color. No cool grays. No pure black (#000) or pure white (#FFF).
3. **Perceptible CSS: Every value the builder writes must be visible to a human eye.** >= 15 RGB background delta between zones. >= 2px font-size delta. No letter-spacing below 0.025em. No stacked gaps above 120px.

**What you will produce:**

| # | Action | File | Type |
|---|--------|------|------|
| 1 | WRITE | `design-system/pipeline/conventions-brief.md` | New file (~230 lines) |
| 2 | WRITE | `design-system/pipeline/gate-runner.md` | New file (~400 lines) |
| 3 | WRITE | `design-system/pipeline/flagship-pa-questions.md` | New file (~80 lines) |
| 4 | WRITE | `~/.claude/skills/build-page/SKILL.md` | New file (~350 lines) |
| 5 | EDIT | `~/.claude/skills/tension-composition/SKILL.md` | 23 edits (tier removal + enrichment) |
| 6 | EDIT | `~/.claude/skills/perceptual-auditing/SKILL.md` | 16 edits (tier removal + Tier 5 addition) |
| 7 | EDIT | `design-system/CLAUDE.md` | 11 edits (/build-page integration) |
| 8 | EDIT | `design-system/compositional-core/CLAUDE.md` | 9 edits (ALWAYS FLAGSHIP) |
| 9 | RUN | Build A: `/build-page` against Gas Town content | Validation |
| 10 | RUN | Build B: `/build-page` against RESEARCH-SYNTHESIS | Validation |

**Execution order:** Items 1-4 can be written in parallel (different files). Items 5-8 can be done in parallel (different files). Item 9 depends on all prior items. Item 10 depends on Item 9 passing.

>>> RE-READ THE 3 NON-NEGOTIABLES ABOVE BEFORE PROCEEDING.

---

### CHECKPOINT 0: Before proceeding, verify:
- [ ] You can state the 3 non-negotiables from memory (container width, warm palette, perceptible CSS)
- [ ] You understand the 10 actions in the file inventory
- [ ] You know the execution order (1-4 parallel, 5-8 parallel, 9 then 10)

---

## SECTION 1: TEAM ARCHITECTURE

**Use TeamCreate to spawn the /build-page assembly team.** You are the team lead / orchestrator.

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
| 3 | pa-questions-writer | Sonnet | `design-system/pipeline/flagship-pa-questions.md` |

**CONTENTION:** Agents #6 and #3 both touch the PA skill. Agent #6 runs first (tier removal edits). Agent #3 runs after (writes the standalone PA questions file AND verifies Tier 5 insertion in the PA skill). They MUST NOT run simultaneously.

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

### Wave 4: Validation Runner (1 agent, depends on Wave 3 or Wave 2)

| # | Role | Model | Output File |
|---|------|-------|-------------|
| 11 | validation-runner | **Opus** | `ephemeral/build-page-prompt/_verification/validation-report.md` |

**Dependency graph:**
```
Wave 1 (#1,#2,#4,#5,#6,#7) --> Wave 1.5 (#3, after #6) --> Wave 2 (#8,#9) --> Wave 3 (#10) --> Wave 4 (#11)
```

**Communication protocol:** File-bus primary. SendMessage to team-lead ONLY for: (1) file contention, (2) blocking dependency missing, (3) ambiguity between sources, (4) task impossible.

---

### CHECKPOINT 1: Before spawning agents, verify:
- [ ] You understand the wave structure (1 -> 1.5 -> 2 -> 3 -> 4)
- [ ] You know which agents are Opus (1, 4, 8, 9, 11) vs Sonnet (2, 3, 5, 6, 7, 10)
- [ ] You understand the PA skill contention resolution (#6 before #3)
- [ ] File paths are clear for all output files

---

## SECTION 2: CONVENTIONS BRIEF

>>> WRITE FILE: `design-system/pipeline/conventions-brief.md`

**This is the most important file in the entire pipeline.** It is what the Opus builder reads as PRIMARY GUIDANCE. It must be a WORLD-DESCRIPTION (what the design system IS), not a CHECKLIST (what to verify). Format target: 55% conventions / 25% recipe / 20% checklist.

**Agent #1 (conventions-brief-writer, Opus) reads these sources IN ORDER:**

1. `ephemeral/build-page-prompt/DRAFT-09-conventions-brief-section.md` -- PRIMARY SOURCE (contains the full brief text between the markdown code fences starting with `# Conventions Brief -- KortAI Design System`)
2. `design-system/compositional-core/vocabulary/tokens.css` -- CSS variable values
3. `design-system/compositional-core/identity/prohibitions.md` -- soul constraints
4. `design-system/compositional-core/grammar/mechanism-catalog.md` -- mechanism vocabulary

**The exact content to write is in DRAFT-09, enclosed between the triple-backtick markdown fence.** The agent writes this content to the output file, making ONLY these adjustments:

>>> CRITICAL ADJUSTMENTS (apply all 5):

1. **Verify `components.css` (not `merged-components.css`):** `merged-components.css` DOES NOT EXIST. Every reference must say `components.css`.

2. **Standardize thresholds:** Background delta >= 15 RGB. Letter-spacing minimum 0.025em per-element (NOT 0.02em). Stacked gap <= 120px (NOT 108px). Stacked gap in the brief Section 2 says "108px" -- change to "120px". Letter-spacing in Section 2 says "0.02em" -- change to "0.025em".

3. **Add Quality Floor subsection** (insert after Section 9 Creative Authority, before Section 10 Compositional Memory):

```markdown
## 9B. QUALITY FLOOR (The Minimum Bar)

Every page built with this system meets these minimums. They are not aspirations -- they are the floor below which a page is UNFINISHED.

- **>= 14 mechanisms** deployed across all 5 categories (Spatial 1+, Hierarchy 1+, Component 1+, Depth/Emphasis 1+, Structure/Navigation 1+)
- **>= 800 CSS lines** of perceptible, non-redundant styling
- **>= 3 channel shifts** at every zone boundary, average >= 4 across all boundaries
- **>= 3 distinct border configurations** (1px, 3px, 4px weights)
- **>= 8 component types** from the library
- **3-5 zones** with >= 15 RGB background delta between each

These numbers describe what a COMPOSED page naturally produces. If your page falls below any of them, something is missing.
```

4. **Add "80%" to Creative Authority section:** In Section 9, after "You are the composer." add: "Approximately 80% of all decisions -- grid layouts, component styling, mechanism selection, metaphor choice, density arc -- are yours to make."

5. **Verify constraint language < 20%:** Count words "must," "verify," "ensure," "fail" in the final output. If constraint language exceeds 20% of total words, rewrite those sections using world-description language.

**Brief structure (15 sections including 9B, ~240 lines):**

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
| 9. Creative Authority | What the builder IS FREE to do, 80% ownership, override protocol | Conventions |
| 9B. Quality Floor | Minimum 14 mechanisms, 800+ CSS lines, >= 3 channel shifts | Conventions |
| 10. Compositional Memory | 3 habits: boundary naming, midpoint reflection, category awareness | Conventions |
| 11. Five Questions | Squint, Scroll, Second Half, Boundary, Skeleton | Conventions |
| 12. Restraint List | What this world does NOT contain | Conventions |
| 13. Accessibility | HTML skeleton template, ARIA, WCAG | Recipe |
| 14. Responsive | 3 breakpoints, soul unchanged | Conventions |
| Conviction Card | Pre-build commitment template | Recipe |
| Process | Understand -> Plan -> Build -> Verify | Recipe |

---

### CHECKPOINT 2: After conventions brief is written, verify:
- [ ] File exists at `design-system/pipeline/conventions-brief.md`
- [ ] Contains all 15 sections plus Conviction Card and Process
- [ ] Container width stated as 940-960px
- [ ] Background delta threshold stated as >= 15 RGB
- [ ] Letter-spacing minimum stated as >= 0.025em (NOT 0.02em)
- [ ] Stacked gap threshold stated as <= 120px (NOT 108px)
- [ ] Quality Floor section present with >= 14 mechanisms, 800+ CSS lines, >= 3 channel shifts
- [ ] Creative Authority says "80%" explicitly
- [ ] References `components.css` (not `merged-components.css`)
- [ ] HTML skeleton template present with font loading, skip link, ARIA landmarks
- [ ] Constraint language ("must," "verify," "ensure," "fail") < 20% of total words

---

## SECTION 3: GATE RUNNER

>>> WRITE FILE: `design-system/pipeline/gate-runner.md`

**Agent #2 (gate-runner-writer, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-10-gate-runner-section.md` -- PRIMARY SOURCE (contains the full gate-runner content between `---BEGIN FILE CONTENT---` and `---END FILE CONTENT---`)

**Extract the content between those markers and write it to the output file.** Apply these adjustments:

>>> CRITICAL ADJUSTMENTS (apply all 3):

1. **DG-4 sub-check 3:** Change from "mechanisms: >= 1 in each of 5 categories" to "mechanisms: >= 14 total AND >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)". This adds the user-specified total count alongside the per-category minimums.

2. **Verify all thresholds match:** SC-10 = 120px, SC-14 = 0.025em, SC-09 = 15 RGB. These are already correct in DRAFT-10.

3. **Verify `components.css`:** Already correct in DRAFT-10.

4. **Zone count assertion:** The gate runner MUST assert `zones.length >= 3` before running any per-zone gates (SC-09, SC-10, SC-11, SC-13). If zone selectors match zero elements, gates must FAIL — not silently pass on an empty result set. This is the #1 silent failure mode.

**21 gates total:**

| Tier | Count | Gates | Blocks? |
|------|-------|-------|---------|
| A: Composition-Critical | 12 | SC-01, SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15, SC-13B (advisory), SC-16 (advisory), DG-1, DG-2 | 10 blocking, 2 advisory |
| B: Identity Enforcement | 7 | SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08 | All blocking |
| C: Behavioral | 2 | BG-1, BG-2 | Non-blocking |
| Additional | 2 | DG-3, DG-4 | Both blocking |

---

### CHECKPOINT 3: After gate-runner is written, verify:
- [ ] File exists at `design-system/pipeline/gate-runner.md`
- [ ] Contains all 21 gates (count them)
- [ ] SC-10 threshold is 120px (not 108px)
- [ ] SC-14 letter-spacing threshold is 0.025em
- [ ] SC-04 has callout/accent exception clause
- [ ] SC-05 has inverted-context exception clause
- [ ] DG-4 sub-check 3 requires >= 14 total AND >= 1 per category
- [ ] Micro-gate schedule present (MG-1 through MG-4)
- [ ] parseRGB helper function present

---

## SECTION 4: PA QUESTIONS (Flagship Tier 5)

>>> WRITE FILE: `design-system/pipeline/flagship-pa-questions.md`

**Agent #3 (pa-questions-writer, Sonnet, Wave 1.5) reads:**

1. `ephemeral/build-page-prompt/DRAFT-11-pa-orchestrator-section.md` -- Section 4 content (between the first set of triple-backtick fences, starting with `# Flagship PA: Tier 5 Compositional Depth Questions`)

**Write the PA questions content exactly as it appears in DRAFT-11 Section 4.** No adjustments needed -- all 8 questions (PA-60 through PA-67), scoring rubric, and auditor assignments are correct.

**8 Tier 5 questions:**

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

**Scoring: 7-8 COMPOSED / 5-6 APPROACHING / 3-4 STRUCTURED / 0-2 VOCABULARY ONLY**

---

### CHECKPOINT 4: After PA questions file is written, verify:
- [ ] File exists at `design-system/pipeline/flagship-pa-questions.md`
- [ ] Contains all 8 Tier 5 questions (PA-60 through PA-67)
- [ ] Each question has: text, detection target, YES/NO criteria, auditor assignment
- [ ] Scoring table present (COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY)
- [ ] Auditor assignment table present with 56 total questions (48 + 8)

---

## SECTION 5: BUILD-PAGE ORCHESTRATOR (SKILL.md)

>>> WRITE FILE: `~/.claude/skills/build-page/SKILL.md`

**Agent #4 (build-page-skill-writer, Opus) reads these sources IN ORDER:**

1. `ephemeral/build-page-prompt/DRAFT-11-pa-orchestrator-section.md` -- Section 5 content (between the second set of triple-backtick fences, starting with the YAML frontmatter `---\nname: build-page`)
2. `ephemeral/build-page-prompt/DRAFT-10-gate-runner-section.md` -- Gate thresholds and JS check methods
3. `design-system/pipeline/conventions-brief.md` -- The file you just created (for cross-reference consistency)

**Write the SKILL.md content from DRAFT-11 Section 5**, applying these adjustments:

>>> CRITICAL ADJUSTMENTS (apply all 6):

1. **Line 223:** Change `merged-components.css` to `components.css` in builder spawn prompt.

2. **Line 293 (SC-10 in gate table):** Change `<= 108px` to `<= 120px`.

3. **Conventions brief path:** The builder spawn prompt references `design-system/compositional-core/conventions-brief.md`. Change to `design-system/pipeline/conventions-brief.md`.

4. **DG-4 and _build-plan.yaml:** The builder spawn prompt tells the builder to write 3 files (output.html, _build-log.md, _cascade-value-table.md). DG-4 references `_build-plan.yaml` which the builder never produces. Change DG-4 to validate the builder's transition table and fractal echo table FROM `_build-log.md` instead of from a separate YAML file.

5. **TeamCreate usage:** Ensure all agent spawning uses TeamCreate (line 197, 328). Already correct in DRAFT-11.

6. **Step 4.5 Lock Sheet:** The assembled draft specifies a Lock Sheet step. DRAFT-11 argues against it (weaver already gets gate diagnostics). INCLUDE IT as a lightweight step: orchestrator generates lock sheet from _build-log.md categorizing elements as LOCKED (Soul), LOCKED (Research), or CHALLENGEABLE (Builder). Feed to weaver ONLY -- NOT to auditors (preserves fresh-eyes).

7. **Builder _build-log.md enrichment:** The builder spawn prompt must require the builder to include a BRIEF REFLECTION section in _build-log.md with: (a) which conventions-brief sections most influenced decisions, (b) which mechanisms were selected and from which catalog categories, (c) the unifying metaphor chosen and why. This is NOT optional — without it, we cannot diagnose absorption failures post-run.

8. **Structured gate output:** The gate runner step must produce `_gate-results.json` containing for each of 21 gates: gate_id, pass/fail, measured_value, threshold, delta_from_threshold. Not just pass/fail — the MEASURED VALUES. A gate passing at 941px (1px above 940px minimum) is useful diagnostic data that pure pass/fail hides.

9. **Enriched weaver output:** Change the weaver's output from TOP-3 issues to:
   (a) TOP-5 issues (not TOP-3) with actionable CSS-level feedback,
   (b) FULL per-question matrix: 56 questions × 9 auditors × YES/NO (written to `_pa-matrix.md`),
   (c) Inter-auditor agreement: for each question, count of YES vs NO across auditors. Questions where auditors DISAGREE (5-4 split) are flagged as CALIBRATION TARGETS.
   The TOP-5 goes to the builder in fix cycles. The full matrix goes to `_pa-matrix.md` for post-run retrospection. The builder does NOT need to see the full matrix — just the TOP-5.

**Structure (11 sections, ~350-400 lines):**

```
---
name: build-page
description: Build a fully designed HTML page using the KortAI design system.
---
## 0. MISSION
## 1. INTAKE
## 2. TEAM CREATION (Spawn Opus Builder)
## 3. GATE RUNNER
## 4. SCREENSHOT CAPTURE
## 4.5 LOCK SHEET
## 5. PA DEPLOYMENT (9 Opus Auditors + 1 Opus Weaver)
## 6. FIX CYCLE
## 7. SUCCESS BAR
## 8. OUTPUT SUMMARY
   Orchestrator writes `_run-manifest.md` with: run timestamp, content file used,
   builder model, gate pass/fail count, PA-05 score, Tier 5 score, fix cycles used,
   total agents spawned, and overall verdict. ONE FILE, ONE PAGE of data.
## 9. PRACTICAL DETAILS
## 10. RE-STATEMENT OF NON-NEGOTIABLES
```

---

### CHECKPOINT 5: After SKILL.md is written, verify:
- [ ] File exists at `~/.claude/skills/build-page/SKILL.md`
- [ ] YAML frontmatter present with name, description, triggers
- [ ] Line count is 300-450 (check with wc -l)
- [ ] Builder reads 6 files IN THIS ORDER: (1) conventions-brief.md FIRST (primacy — establishes world model), (2) content.md SECOND (parsed through the world model), (3) mechanism-catalog.md, (4) components.css, (5) tokens.css, (6) prohibitions.md LAST (recency — soul constraints freshest when CSS begins)
- [ ] Conventions brief path is `design-system/pipeline/conventions-brief.md` (NOT compositional-core)
- [ ] Builder model stated as "ALWAYS Opus"
- [ ] References `components.css` (NOT `merged-components.css`)
- [ ] SC-10 threshold is 120px
- [ ] 9 PA auditors with question assignments matching Section 4
- [ ] Lock sheet generation step present (Step 4.5)
- [ ] Fix cycle limited to max 3
- [ ] Success bar: PA-05 >= 3.5 AND Tier 5 >= 6/8
- [ ] Zero instances of: "appropriate," "sufficient," "harmonious," "balanced," "optimal"
- [ ] Builder spawn prompt requires BRIEF REFLECTION in _build-log.md
- [ ] Gate runner produces _gate-results.json with measured values (not just pass/fail)
- [ ] Weaver produces TOP-5 (not TOP-3) + full _pa-matrix.md + agreement analysis
- [ ] Output summary section includes _run-manifest.md

---

## SECTION 6: SKILL EDITS

### 6A: Tension-Composition Skill Edits (23 operations)

>>> EDIT FILE: `~/.claude/skills/tension-composition/SKILL.md`

**Agent #5 (tc-skill-editor, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-12-skill-edits-section.md` -- Section 5A (contains all 23 exact old_string/new_string pairs)

**Read the current SKILL.md first. Then apply all 23 edits in the execution order specified in DRAFT-12 Section 5C (PHASE 2).** Each edit has exact old_string and new_string -- copy them VERBATIM into the Edit tool.

**Execution order (from DRAFT-12 Section 5C):**

1. TC Edit 1 (Step 0D tier table removal, ~77 lines)
2. TC Edit 2 (Step 0D-CEILING removal)
3. TC Edit 3 (rubric qualifier)
4. TC Edit 4 (Phase 4 preamble replacement)
5. TC Edit 5 (Anti-Scale Model insertion)
6. TC Edit 22 (Density Patterns in Phase 4.1)
7. TC Edit 6 (CPL baseline)
8. TC Edit 7 (per-category qualifier)
9. TC Edit 8 (Middle experiment validation)
10. TC Edit 9 (natural-landing table)
11. TC Edit 11 (rhythm qualifier)
12. TC Edit 12 (rhythm evidence)
13. TC Edit 10 (Multi-Coherence insertion after C-5)
14. TC Edit 13 (Transition Grammar semantic enrichment)
15. TC Edit 14 (Fractal gate replacement)
16. TC Edit 15 (Landmark tier requirements)
17. TC Edit 16 (PASS example framing)
18. TC Edit 17 (FAIL example framing)
19. TC Edit 18 (footer mirror qualifier)
20. TC Edit 19 (tokenization mandatory)
21. TC Edit 20 (tokenization baseline)
22. TC Edit 21 (tokenization optional note)
23. TC Edit 23 (Telescope Distillate in Phase 5)

**Net effect:** ~180 lines removed, ~120 lines added = ~60 line reduction. All tier routing removed. All Flagship enrichments applied.

### 6B: Perceptual-Auditing Skill Edits (16 operations)

>>> EDIT FILE: `~/.claude/skills/perceptual-auditing/SKILL.md`

**Agent #6 (pa-skill-editor, Sonnet) reads DRAFT-12 Section 5B.** Apply all 16 edits in the order specified in DRAFT-12 Section 5C (PHASE 1):

1. PA Edit 1 (question count 48->56)
2. PA Edit 2 (fresh-eyes update)
3. PA Edit 3 (PA-05c qualifier)
4. PA Edit 4 (PA-05c scoring qualifier)
5. PA Edit 5 (PA-05 validation note)
6. PA Edit 6 (PA-09 qualifier)
7. PA Edit 7 (PA-17/41 rewrite)
8. PA Edit 8 (Tier 4 header)
9. PA Edit 9 (Tier 5 questions insertion -- LARGE)
10. PA Edit 10 (multi-coherence guidance)
11. PA Edit 11 (Progressive Zoom Test)
12. PA Edit 12 (Mode 4 question count)
13. PA Edit 13 (Mode 4 team structure)
14. PA Edit 14 (Weaver dual-verdict)
15. PA Edit 15 (Mode 1/2 exclusion)
16. PA Edit 16 (red flags)

---

### CHECKPOINT 6: After all skill edits are applied, verify:

**TC Skill:**
- [ ] Search for "Floor" in routing/conditional context -- zero results
- [ ] Search for "SKIP Phases" -- zero results
- [ ] Search for "Middle-tier+" -- zero results
- [ ] Phase 4.0A (Anti-Scale Model) exists
- [ ] Multi-Coherence Binding Rules exist in Phase 4.3
- [ ] Fractal echo protocol with 5-scale table exists in Phase 4.7
- [ ] Tokenization is marked MANDATORY

**PA Skill:**
- [ ] Search for "48 questions" -- zero results (should say 56)
- [ ] Tier 5 section exists with all 8 questions (PA-60 through PA-67)
- [ ] Mode 4 team table includes Tier 5 assignments
- [ ] Weaver dual-verdict protocol exists

---

## SECTION 7: CLAUDE.md EDITS

### 7A: design-system/CLAUDE.md (11 edits)

>>> EDIT FILE: `design-system/CLAUDE.md`

**Agent #7 (claude-md-editor, Sonnet) reads:**

1. `ephemeral/build-page-prompt/DRAFT-13-claude-md-architecture-section.md` -- Section A (contains all 11 exact old_string/new_string pairs: A-EDIT-1 through A-EDIT-11)

**Read design-system/CLAUDE.md first.** Then apply edits A-EDIT-1 through A-EDIT-11 in order. Each edit has exact old_string and new_string.

### 7B: design-system/compositional-core/CLAUDE.md (9 edits)

>>> EDIT FILE: `design-system/compositional-core/CLAUDE.md`

**Same agent reads DRAFT-13 Section B.** Apply edits B-EDIT-1 through B-EDIT-9 in order.

>>> CRITICAL: B-EDIT-5 and B-EDIT-8 reference SC-10 threshold. Ensure they say 120px (not 108px). If DRAFT-13 says 108px, change to 120px.

---

### CHECKPOINT 7: After CLAUDE.md edits, verify:
- [ ] design-system/CLAUDE.md: "/build-page" appears >= 6 times
- [ ] design-system/CLAUDE.md: "Track 1" absent from QUICK START, ROUTING, ANTI-PATTERNS
- [ ] compositional-core/CLAUDE.md: "ALWAYS FLAGSHIP" appears >= 2 times
- [ ] compositional-core/CLAUDE.md: SC-09 (>= 15 RGB) in verification checklist
- [ ] compositional-core/CLAUDE.md: SC-10 says 120px (not 108px)
- [ ] Both files parse as valid markdown

---

## SECTION 8: VALIDATION PROTOCOL

### Build A: Structurally Heterogeneous Content (RUN FIRST)

>>> CONTENT FILE: `extractions/deep/yegge-gas-town-extraction.md`

This file has 1,324 lines with 4+ code blocks, 5+ content modes, 4+ domain transitions, ASCII diagrams, tables, quotes, and inherent tension. Structural heterogeneity FORCES visual variety.

**Run:** `/build-page extractions/deep/yegge-gas-town-extraction.md`

**Pass criteria (ALL must be met):**
- PA-05 >= 3.5/4
- Tier 5 >= 6/8 (COMPOSED)
- All 17 blocking gates PASS at Flagship thresholds
- Zero soul violations
- Zero void patterns (no whitespace voids >= 200px)

### Build B: Known Hard Content (RUN SECOND, only if Build A >= 3.0)

>>> CONTENT FILE: `design-system/research/RESEARCH-SYNTHESIS.md`

Previous scores: 1.5/4 (Flagship attempt), 2.5/4 (CSS remediation). Uniform prose, weak structural heterogeneity.

**Run:** `/build-page design-system/research/RESEARCH-SYNTHESIS.md`

**Pass criteria:**
- PA-05 >= 3.0/4 (improvement over 2.5 baseline)
- All 17 blocking gates PASS
- SC-09 >= 15 RGB at every zone boundary

### Overall Verdict Table

| Build A (Gas Town) | Build B (RESEARCH-SYNTHESIS) | Pipeline Verdict |
|--------------------|------------------------------|-----------------|
| >= 3.5 + Tier 5 >= 6/8 | >= 3.0 | **PIPELINE PASS** |
| >= 3.5 + Tier 5 >= 6/8 | 2.5-2.9 | **CONDITIONAL PASS** |
| 3.0-3.4 | any | **NEEDS CALIBRATION** |
| < 3.0 | N/A | **PIPELINE FAIL** |

---

### CHECKPOINT 8: After validation builds, verify:
- [ ] Build A produced output.html
- [ ] Build A gate runner executed without errors
- [ ] Build A PA-05 score recorded
- [ ] Build A Tier 5 score recorded
- [ ] Build B attempted (only if Build A >= 3.0)
- [ ] Overall verdict determined from table above

### Run Output Directory

Each validation build writes ALL output to a numbered directory:

```
ephemeral/build-page-runs/run-{N}/
├── output.html              # The page
├── _build-log.md            # Builder decisions + brief reflection
├── _gate-results.json       # Structured gate data (21 gates × measured values)
├── _pa-matrix.md            # Full 56 × 9 question matrix
├── _weaver-verdict.md       # Full weaver synthesis
└── _run-manifest.md         # One-page run summary
```

This structure enables cross-run comparison. Run-1 vs Run-2 diffs reveal exactly which interventions moved which metrics.

---

## SECTION 9: RECENCY RESTATEMENT

>>> RE-READ THIS BEFORE REPORTING RESULTS.

**Three non-negotiables (same as Section 0):**

1. **Container: 940-960px.** Every page. No exceptions.
2. **Warm palette: R >= G >= B.** No cool grays. No pure black/white.
3. **Perceptible CSS.** >= 15 RGB bg delta. >= 2px font-size delta. No letter-spacing < 0.025em. No stacked gaps > 120px.

**You are done when:**
- All 4 new files exist at correct paths
- All 59 edits applied to existing files (23 TC + 16 PA + 11 CLAUDE.md + 9 compositional-core/CLAUDE.md)
- Build A run and PA-05 score recorded
- Build B run (if Build A >= 3.0) and PA-05 score recorded
- Overall verdict determined

**If you find yourself writing ABOUT the pipeline instead of BUILDING the pipeline, STOP and BUILD.**

---

## VERIFICATION CHECKPOINTS SUMMARY

| Checkpoint | Section | Critical Checks |
|------------|---------|----------------|
| 0 | Mission | 3 non-negotiables memorized |
| 1 | Team | Wave structure, Opus vs Sonnet, contention |
| 2 | Brief | 15 sections, thresholds (0.025em, 120px, 15 RGB), Quality Floor, 80%, components.css |
| 3 | Gates | 21 gates, SC-10=120px, SC-14=0.025em, DG-4 total+category |
| 4 | PA Qs | 8 questions, scoring, 56 total |
| 5 | SKILL | 300-450 lines, 6 files for builder, components.css, lock sheet, fix cycles |
| 6 | Edits | TC: no tier routing, PA: 56 questions + Tier 5 |
| 7 | CLAUDE | /build-page >= 6x, ALWAYS FLAGSHIP, SC-10=120px |
| 8 | Builds | PA-05 + Tier 5 scores recorded, verdict determined |

---

**END OF MASTER EXECUTION PROMPT**

**Document statistics:**
- Total sections: 10 (0 through 9)
- Checkpoints: 9 (0 through 8)
- New files specified: 4
- Edit operations specified: 59 (23 TC + 16 PA + 11 CLAUDE.md + 9 compositional-core/CLAUDE.md)
- Validation builds: 2
- Instrumentation outputs: 6 (_build-log.md reflection, _gate-results.json, _pa-matrix.md, _weaver-verdict.md, _run-manifest.md, output directory structure)
- Total line count: ~580 lines
