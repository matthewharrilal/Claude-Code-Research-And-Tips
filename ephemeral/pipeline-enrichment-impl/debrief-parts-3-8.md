# Execution Report Debrief -- Parts 3-8

Pasted by user on 2026-02-20 for cross-referencing against pipeline files.

---

## Part 3: SKILL.md Orchestration Details

### Fix Cycle Template

The fix instruction template (SKILL.md lines 308-327) has 4 sections:
- Gate Failures -- structured with specific CSS (mechanical fixes)
- PA Top-5 Issues -- directional, NOT prescriptive ("what to change, not what CSS to write") -- preserves builder creative authority
- Tier 5 Gaps -- includes compositional implications
- DO NOT TOUCH -- protected elements to prevent regression

Key finding: the template does NOT reference conventions-brief sections and does NOT carry concept-level framing (no metaphor context, no "remember your conviction statement"). This is the recipe-to-checklist degradation in action.

### File Reading Order

Builder reads files in explicit order with rationale: "primacy establishes world model, recency keeps soul constraints fresh":
1. conventions-brief.md -- FIRST (world model)
2. Content file -- SECOND (parsed through world model)
3. Reference files (mechanism-catalog, components.css, tokens.css) -- as needed
4. prohibitions.md -- LAST before CSS begins (soul constraints fresh in memory)

### TeamCreate vs Task Tool Ambiguity

SKILL.md says "Use TeamCreate" in main instructions (lines 30, 204) but then says "When spawning agents via the Task tool, ALWAYS set model: opus explicitly" in practical details (line 398). This is a potential confusion point -- TeamCreate and Task tool are different spawning mechanisms.

### Output Directory Structure

[output-dir]/
├── output.html
├── _build-log.md
├── _cascade-value-table.md
├── _lock-sheet.md
├── _run-manifest.md
├── _gate-results.json
├── _screenshots/           (cold + scroll at 1440/1024/768)
├── _pa/                    (9 auditor reports + synthesis + matrix)
└── _fixes/                 (fix instructions per cycle)

### Run Manifest

_run-manifest.md contains 10 items: timestamp, content path, builder model, gate pass/fail with IDs, PA-05 breakdown, Tier 5 verdict, fix cycles used, agents spawned, overall verdict, all produced files.

### Bonus Observations

1. Orchestrator does gate-running ITSELF (Playwright stays serial)
2. Lock sheet goes to WEAVER ONLY (not PA auditors -- preserves fresh-eyes)
3. SKILL references external gate-runner.md but only has the summary table (15 gates), not full JS
4. Belt-and-suspenders model specification (both line 40 and line 398 say Opus)

---

## Part 4: Gate Runner Analysis

### Gate Count: 21 Total

Tier A -- Composition-Critical (12):
- SC-01 (Container Width), SC-09 (Background Delta), SC-10 (Stacked Gap), SC-11 (Typography Zones), SC-12 (Zone Count), SC-13 (Multi-Coherence), SC-14 (Sub-Perceptual), SC-15 (Border Presence)
- SC-13B (Channel Direction Coherence, ADVISORY), SC-16 (Monotonic Progression, ADVISORY)
- DG-1 (Fractal Echo Table), DG-2 (Cascade Value Table)

Tier B -- Identity Enforcement (7):
- SC-02 through SC-08 (Soul, Fonts, Palette, Extremes, ARIA, Skip Link, Components)

Additional: DG-3 (Landmarks), DG-4 (Handoff Validation)

Tier C -- Behavioral (2):
- BG-1 (Metaphor Independence), BG-2 (Metaphor Structural)

### DISCREPANCY: BG-1 and BG-2 exist in gate-runner.md but are ENTIRELY ABSENT from SKILL.md. Metaphor quality is programmatically unchecked.

### Mechanism Count: MAJOR THRESHOLD GAP

- gate-runner.md: >= 14 total AND >= 1 per category
- SKILL.md: >= 1 per category ONLY (the ">= 14 total" was DROPPED)

This means SKILL.md allows 5 mechanisms (one per category) to pass where gate-runner.md requires 14. That's a 5 vs 14 floor.

### Stacked Gap: CONSISTENT (both say <= 120px)

### Sub-Perceptual Letter-Spacing: CONSISTENT (both say 0.025em)

### Gate-to-PA Handoff: FORMAT DISCREPANCY

- gate-runner.md uses measured: {} objects + fix: {} blocks
- SKILL.md uses measured_value strings + delta_from_threshold

More importantly: gate-runner.md says gate results serve as "PA CONTEXT" but SKILL.md's PA auditor prompts do NOT include _gate-results.json. Auditors only receive screenshots. The context pathway described in gate-runner.md is NOT implemented.

### Fix Recipes: AUTOMATION GAP

gate-runner.md embeds fix recipes IN gate output (instruction + css + alternative + reference). SKILL.md expects the orchestrator to COMPOSE fix instructions manually. The gate-runner approach is more automated; SKILL.md is more manual.

### Micro-Gate Schedule: CRITICAL DISCREPANCY

gate-runner.md: 4 micro-gate checkpoints (MG-1 through MG-4) run by the ORCHESTRATOR via Playwright that BLOCK the builder mid-build. Max 2 re-runs per micro-gate.

SKILL.md: 4 "checkpoints" that are BUILDER SELF-CHECKS (honor system). The builder cannot run Playwright on its own output mid-build. Self-checks have ~0% enforcement power.

The entire micro-gate architecture from gate-runner.md is converted to honor-system questions in SKILL.md.

Threshold differences too: MG-1 requires >= 5 ARIA landmarks, SKILL.md checkpoint says >= 3. MG-3 requires >= 3 border configs, SKILL.md checkpoint says >= 2 weights.

### Summary of Discrepancies

| Area | gate-runner.md | SKILL.md | Severity |
|------|----------------|----------|----------|
| Mechanism count | >= 14 AND per-category | Per-category only (5 possible) | HIGH |
| Micro-gates | 4 orchestrator-run Playwright gates | 4 builder self-checks (honor) | HIGH |
| Fix recipes | Embedded in gate JSON | Composed manually | MEDIUM |
| Gate-to-PA context | Diagnostic data to PA | NOT routed to auditors | MEDIUM |
| Behavioral gates | BG-1, BG-2 defined | Entirely absent | MEDIUM |

---

## Part 5: PA Questions Analysis

### Tier 5 Questions: 8 total (PA-60 through PA-67)

Each maps to a Compositional Intelligence Stack Layer:
- PA-60 = Multi-Coherence, PA-61 = Channel Independence, PA-62 = Transition Variation, PA-63 = Fractal Coherence, PA-64 = Restraint, PA-65 = Compositional Voice, PA-66 = Negative Space, PA-67 = Novelty

### Scoring Rubric (consistent across files)

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 7-8/8 | COMPOSED | Full compositional depth |
| 5-6/8 | APPROACHING | Most stack layers active |
| 3-4/8 | STRUCTURED | Some CI visible |
| 0-2/8 | VOCABULARY ONLY | Mechanisms not composed |

### Auditor Assignments: 9 auditors, 56 total questions

Heaviest load: Auditor C at 13 questions. Only 5 of 9 auditors receive Tier 5 questions (A, C, D, E, F).

### Metaphor Pervasion: BLIND SPOT IDENTIFIED

No question directly asks "Does a single metaphor pervade the entire page?" The closest is PA-44 ("Could you sense the metaphor from visual structure alone if labels were removed?") but this tests EXPRESSION QUALITY (structural vs announced), not SPATIAL COVERAGE (present in all sections).

A page could have a structural metaphor in sections 1-3 that disappears in sections 4-8, and PA-44 would only catch this if the auditor happened to look at the missing sections. The gap: no binary test for "is the metaphor present in ALL scroll thirds?"

---

## Part 6: Process Reconstruction

### Agent Count: 13+ agents executed the master prompt

- Wave 1 (parallel): 6 writers -- conventions-brief (Opus), gate-runner (Sonnet), SKILL.md (Opus), TC edits (Sonnet), PA edits (Sonnet), CLAUDE.md edits (Sonnet)
- Wave 1.5: PA questions writer (Sonnet)
- Wave 2: Cross-ref verifier (Opus) + quality auditor (Opus)
- Additional: 4 specialized audit agents

Model split: 5 Opus + 5 Sonnet + 4 Opus auditors.

### File Creation Order

1. All Wave 1 files created simultaneously
2. flagship-pa-questions.md sequenced after PA skill edits (contention avoidance)
3. Verification reports
4. Specialized audit reports

### Master Prompt Contradictions: 3 found

1. DG-4 references _build-plan.yaml but builder never produces it (partially resolved)
2. Component count 8 vs 10 inconsistency (resolved to 8)
3. Conventions brief path was wrong (resolved correctly)

### Deviations from Spec

- Validation builds were never run. Items 9-10 (running /build-page against actual content) appear not to have been executed.
- 2 residual "Middle+" references in TC skill were missed by edit operations
- 2 threshold inconsistencies remain (0.02em instead of 0.025em in 2 CLAUDE.md files)

### Verification: Extensive (6 verification files produced)

- Cross-ref: 2 FAILs (letter-spacing, merged-components.css references)
- Quality: 4/5 for brief, 4/5 for SKILL.md
- TC edits: 21/23 PASS
- PA edits: 16/16 PASS
- CLAUDE.md edits: 20/20 PASS

---

## Part 7: Known Issues Verification

All 5 known issues CONFIRMED with quoted evidence:

### 1. Boundary-by-Boundary vs Channel-Grouped: EXISTS (SIGNIFICANT)

- Brief says "working BOUNDARY BY BOUNDARY"
- SKILL.md checkpoints are channel-grouped ("After zone backgrounds... After borders... After typography...")
- A builder following SKILL.md + micro-gates will naturally work channel-by-channel, contradicting the brief

### 2. Stack Progression Absence: CONFIRMED ABSENT (MODERATE)

- "Anti-scale" does not appear in any of the 3 files
- Only implicit through section ordering
- Builder could treat scales, channels, and multi-coherence as independent concepts

### 3. Fix Cycle Recipe-to-Checklist Degradation: EXISTS (HIGH)

- Fix template is pure mechanics (gate IDs + measured values + CSS fix)
- Zero references to metaphor, conviction statement, fractal echo, or multi-coherence direction
- SKILL.md says "Compositional memory preservation is essential" but provides zero mechanism to re-invoke it

### 4. Behavioral/Material Channel Phantom Status: CONFIRMED (HIGH)

- Behavioral: 1 line definition, zero CSS examples, zero thresholds
- Material: 1 line, "surface treatment" undefined anywhere
- Brief explicitly calls them "enhancement channels" that "do not substitute for the primary four"
- Gate-runner checks are trivial binary (transition presence, backgroundImage change)
- Soul forbids gradients, so backgroundImage rarely differs
- Phantom channels inflate multi-coherence denominator while being practically unreachable

### 5. Return Path Extinction: CONFIRMED (HIGH)

- Fix recipes reference gate IDs and tokens.css -- NEVER conventions-brief sections, metaphor, conviction statement, or multi-coherence direction
- Fix cycles operate at symptom level, not compositional level

Summary: 5/5 confirmed. 3 HIGH, 1 SIGNIFICANT, 1 MODERATE. Issues 3 and 5 overlap (both describe fix-cycle compositional poverty from different angles).

---

## Part 8: Honest Assessment

### 8.1 Would a fresh Opus builder know HOW to build?

MOSTLY YES -- but with a critical gap. The brief gives ~70% of what's needed. A builder would know what a compositionally rich page IS and have the CSS vocabulary to construct one. But they NEED mechanism-catalog.md and components.css as reference files (which the orchestrator correctly provides).

The brief's strongest quality: "It genuinely reads as a world-description, not a checklist. The constraint language density is ~0.2%. I would feel INVITED to compose, not CONSTRAINED to comply."

### 8.2 Single weakest part?

The zone selector assumption in the gate runner. Every composition-critical gate depends on document.querySelectorAll('[class*="zone"], section[data-zone], .section') returning the correct elements. If the builder uses different class names, EVERY gate either silently passes or returns meaningless data. Single point of failure that could produce false PASSes across the entire verification layer.

Runner-up: validation builds were never run.

### 8.3 Single strongest part?

The conventions brief's world-description voice. "Every threshold is embedded as a FACT about the world rather than a RULE to comply with. This is the exact inversion of the Flagship prompt's 7.9:1 guardrail-to-playbook ratio. The brief is approximately 80% playbook, 20% guardrail."

### 8.4 One change to the master prompt before re-executing?

Embed a completed conventions brief example (a "golden reference") as an appendix. The brief describes the world beautifully but never shows a completed page through its lens. A 50-line appendix showing how CD-006 maps to the brief's framework would bridge the gap between understanding the world and building within it. "The brief tells the builder everything about the INSTRUMENT but shows no MUSIC."

### 8.5 Confidence that /build-page produces PA-05 >= 3.0 on first run?

5/10 -- coin flip.

Reasons for confidence: conventions brief is excellent, builder is Opus, perception thresholds are world-description not rules, 21 gates catch exact prior failure modes, multi-coherence is operationalized with CSS values.

Reasons for doubt: pipeline has NEVER been tested end-to-end, zone selector fragility could produce false PASSes, N=0 for this exact configuration, the 75-line builder visibility problem may persist (will Opus actually ABSORB 403 lines of world-description or skim and default to safe patterns?), two threshold inconsistencies remain, DG-4's residual _build-plan.yaml reference.

"The pipeline is the best-designed system this project has ever produced. But it is untested. 'Well-designed' and 'works on first run' are very different things. The Flagship experiment was also well-designed (530-line prompt, 71 binary rules) and scored 1.5/4."

Expected range: PA-05 2.5-3.5 on first run, depending heavily on whether the Opus builder absorbs the world-description or defaults to compliant-but-flat.

What would raise confidence to 7/10: Running one trial build, measuring what breaks, fixing the obvious failure modes.
