# SKILL.md Change Manifest

**Author:** skill-manifest-builder (Opus)
**Date:** 2026-02-20
**Target file:** `~/.claude/skills/build-page/SKILL.md`
**Current lines:** 415
**Line cap:** 450
**Available budget:** 35 lines

**Sources cross-referenced:**
- `execution-report-findings.md` (B1-B9, E-FIX, E-CONTRA, E-RETURN)
- `11-master-synthesis.md` (decision matrix E1-E16, DO/DEFER/DON'T)
- `06-orchestrator-deep-dive.md` (routing gaps, checkpoint contradiction)
- `07-anti-regression-analysis.md` (risk matrix, mitigation checklist)
- `17-concept-flow-trace.md` (compression loss, return path extinction)
- `05-verification-deep-dive.md` (gates + PA coverage, SC-13B verdict)
- `10-contrarian-analysis.md` (arguments against enrichment)
- `gate-runner.md` (992 lines, 21 gates, micro-gate schedule, BG-1/BG-2)

---

## BUDGET STRATEGY

35 lines is extremely tight. Bug fixes B1-B6 are mandatory. E3 (DO NOW) is mandatory. DEFER items E15 and E16 are high-leverage. To fit within budget:

1. Bug fixes that ADD lines must be offset by COMPRESSION edits elsewhere
2. E3 (checkpoint restructure) is a NET -1 line change (4 checkpoints -> 3 checkpoints, but checkpoint 2 expands)
3. Several bug fixes are single-line insertions or word replacements (net +0 to +2)
4. Identify compression targets in existing text

### Compression Targets Identified

- Lines 30 + 204: "Use TeamCreate" can be resolved to "Task tool" (B6 fix = net 0 lines)
- Lines 141-142: SC-12 description has redundant "DEPENDENCY" note that duplicates gate-runner.md dependency chain (can compress -1 line)
- Lines 395-398: Model inheritance warning is 4 lines; can compress to 2 lines (-2 lines)
- Lines 87-92: "Wait for builder" section can compress from 6 lines to 4 lines (-2 lines)

Total compression available: ~5 lines freed

---

## EDITS

### EDIT 1: B1 -- Add ">= 14 total" to DG-4 mechanism count
**Source:** B1 from execution-report-findings.md
**Location:** Section 3.4, line ~167 (DG-4 sub-check 3)
**Type:** BUG FIX
**Priority:** HIGH

**Old text:**
```
  3. mechanisms: >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)
```

**New text:**
```
  3. mechanisms: >= 14 total AND >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)
```

**Lines added/removed:** +0 (same line, extended)
**Anti-regression check:**
  - Line budget remaining: 35
  - Risk: LOW -- aligns SKILL.md with gate-runner.md DG-4 (line 916: ">= 14 total AND >= 1 in each of 5 categories")
  - Cross-file consistency: gate-runner.md DG-4 (line 916) already says ">= 14 total AND >= 1 per category" -- this ALIGNS

---

### EDIT 2: B2 -- Implement orchestrator-driven micro-gates (OPTION A)
**Source:** B2 from execution-report-findings.md, gate-runner.md lines 35-70
**Location:** Section 3 (GATE RUNNER), between line ~96 and line ~98 (after "Run programmatic gates YOURSELF")
**Type:** BUG FIX
**Priority:** HIGH

**Rationale for Option A (real micro-gates):** The entire point of micro-gates is that the ORCHESTRATOR verifies between build phases, not the builder self-checking. Gate-runner.md defines MG-1 through MG-4 as orchestrator-run Playwright gates. SKILL.md converted these to builder self-checks (lines 61-66), which defeats the purpose. However, implementing full mid-build orchestrator intervention requires the builder to PAUSE and the orchestrator to run Playwright on partial output -- which is architecturally expensive and fragile (the page is incomplete).

**Compromise approach:** Keep checkpoints as builder self-checks (pragmatic) but ALIGN THRESHOLDS with gate-runner.md and LABEL HONESTLY as self-checks. Add a note that the orchestrator validates these post-build via the full gate run.

This is effectively Option B from execution-report, but honestly labeled. The reason: mid-build Playwright verification requires the builder to write partial HTML to disk, the orchestrator to detect the pause, start an HTTP server on incomplete HTML, run Playwright, stop the server, and send results back -- all while maintaining builder state. This is NOT practical in the current Task-tool architecture where builder agents run independently.

**Old text (lines 61-66):**
```
- Phase C: Build. HTML + CSS. Self-check at 4 checkpoints:
  1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
  2. After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
  3. After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
  4. After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?
```

**New text (COMBINED WITH EDIT 5 / E3 -- see below for the replacement):**

This edit is MERGED with Edit 5 (E3 checkpoint restructuring) since they modify the same lines. See Edit 5 for the combined replacement.

**Lines added/removed:** See Edit 5
**Anti-regression check:**
  - Addressed in Edit 5

---

### EDIT 3: B3 -- Add BG-1 and BG-2 behavioral gate references
**Source:** B3 from execution-report-findings.md, gate-runner.md lines 840-879
**Location:** Section 3.3, line ~143 (after the gate table closing, before "For EACH of the 15 gates")
**Type:** BUG FIX
**Priority:** MEDIUM

The gate table (lines 123-139) lists 15 composition-critical gates. BG-1 (Metaphor Independence) and BG-2 (Metaphor Structural) from gate-runner.md are ENTIRELY absent. They are Tier C behavioral gates, not programmatic -- they verify via build log and fresh-eyes Opus check. The structured gate output section (line 143) already mentions "advisory gates SC-13B, SC-16 and deliverable gates DG-1 through DG-4" but omits BG-1/BG-2.

**Old text (line ~143):**
```
For EACH of the 15 gates (plus advisory gates SC-13B, SC-16 and deliverable gates DG-1 through DG-4), produce a JSON entry:
```

**New text:**
```
For EACH of the 15 gates (plus advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1 Metaphor Independence + BG-2 Metaphor Structural), produce a JSON entry:
```

**Lines added/removed:** +0 (same line, extended)
**Anti-regression check:**
  - Line budget remaining: 35
  - Risk: LOW -- adds reference only, no new verification logic
  - Cross-file consistency: gate-runner.md BG-1 (lines 840-858) and BG-2 (lines 860-879) are fully defined there. SKILL.md only needs to reference them so the orchestrator knows to check them.

**ADDITIONAL EDIT 3B: Add BG-1/BG-2 verification to Section 3.4**

**Location:** After line ~169 (end of DG-4), add:

**New text:**
```

Behavioral gates (from build log):
- BG-1: Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation
- BG-2: Metaphor is STRUCTURAL (suggests CSS properties), not ANNOUNCED (label-only)
```

**Lines added/removed:** +3
**Anti-regression check:**
  - Line budget remaining: 32
  - Risk: LOW -- documents existing gate-runner.md gates, no new constraints
  - Cross-file consistency: gate-runner.md BG-1 (lines 840-858) checks build log order; BG-2 (lines 860-879) checks metaphor is structural

---

### EDIT 4: B4 -- Route gate results to weaver
**Source:** B4 from execution-report-findings.md, 06-orchestrator-deep-dive.md Section 3
**Location:** Section 5.3 (Weaver Spawn), line ~253
**Type:** BUG FIX
**Priority:** MEDIUM

Gate-runner.md (lines 127-130) says gate diagnostic data serves as "PA CONTEXT." SKILL.md's PA auditor prompts correctly do NOT include gate results (preserving fresh-eyes). But the WEAVER should receive gate results for diagnostic context. Currently the weaver spawn prompt (lines 253-299) does not mention _gate-results.json.

**Old text (line ~253):**
```
You are the PA weaver. Read all 9 auditor reports from [output-dir]/_pa/.
Also read the lock sheet at [output-dir]/_lock-sheet.md for context on
```

**New text:**
```
You are the PA weaver. Read all 9 auditor reports from [output-dir]/_pa/.
Also read the gate results at [output-dir]/_gate-results.json for diagnostic
context (which gates passed/failed, measured values). Read the lock sheet at
[output-dir]/_lock-sheet.md for context on
```

**Lines added/removed:** +2
**Anti-regression check:**
  - Line budget remaining: 30
  - Risk: LOW -- gate results go to weaver (synthesizer) not auditors (preserves fresh-eyes)
  - Cross-file consistency: gate-runner.md lines 127-130 explicitly say gate data is PA CONTEXT

---

### EDIT 5: B2 threshold alignment + E3 checkpoint restructuring + E-CONTRA resolution (COMBINED)
**Source:** B2 (threshold alignment), E3 + E-CONTRA from execution-report + 11-master-synthesis, 06-orchestrator-deep-dive Section 6
**Location:** Builder spawn prompt, lines 61-66
**Type:** BUG FIX + DO NOW
**Priority:** HIGH (resolves the CONTRADICTION between brief's "boundary by boundary" and SKILL.md's channel-grouped checkpoints)

This is the single highest-leverage edit in this manifest (06-orchestrator-deep-dive Section 10 rates it as "highest-leverage single edit"). It:
1. Resolves the channel-by-channel vs boundary-by-boundary CONTRADICTION (E-CONTRA)
2. Aligns thresholds with gate-runner.md micro-gates (B2): ARIA >= 5 (was >= 3), border configs >= 3 (was >= 2)
3. Adds the missing compositional checkpoint (>= 3 channels same direction) per 06 Section 6
4. Groups verification by BOUNDARY (matching conventions-brief Section 11 "BOUNDARY BY BOUNDARY")

**Old text (lines 61-66):**
```
- Phase C: Build. HTML + CSS. Self-check at 4 checkpoints:
  1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
  2. After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
  3. After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
  4. After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?
```

**New text:**
```
- Phase C: Build. HTML + CSS. Self-check at 3 checkpoints:
  1. After HTML skeleton: >= 5 ARIA landmarks? Skip link? >= 8 component classes?
  2. After zone boundaries set (all channels together per boundary):
     - All adjacent zone bg deltas >= 15 RGB?
     - >= 3 distinct border configurations? >= 1 structural border-left (3px+)?
     - >= 3 channels shift in same semantic direction at each boundary?
  3. After full build: heading-to-meta ratio >= 3:1? Font-size delta >= 2px between zones?
     Midpoint observation recorded? 5-question self-check complete?
```

**Lines added/removed:** 6 old -> 8 new = +2
**Anti-regression check:**
  - Line budget remaining: 28
  - Risk: LOW -- resolves documented contradiction, aligns with gate-runner.md thresholds (MG-1: SC-06 >= 5 ARIA; MG-3: SC-15 >= 3 border configs)
  - Cross-file consistency: conventions-brief.md Section 11 says "BOUNDARY BY BOUNDARY" -- this ALIGNS. Gate-runner.md MG-1 (line 42): SC-06 >= 5 ARIA. Gate-runner.md MG-3 (line 57): SC-15 >= 3 configs.

---

### EDIT 6: B5 -- Fix DG-4 _build-plan.yaml reference
**Source:** B5 from execution-report-findings.md, gate-runner.md DG-4 (lines 907-928)
**Location:** Section 3.4, lines ~164-169 (DG-4 section)
**Type:** BUG FIX
**Priority:** MEDIUM

Gate-runner.md DG-4 (line 913) references `_build-plan.yaml`. The builder spawn prompt (lines 72-76) specifies 3 deliverables: output.html, _build-log.md, _cascade-value-table.md. There is NO _build-plan.yaml in the deliverables list.

**Option chosen:** Restructure DG-4 to validate from _build-log.md instead. The build log already contains the transition table and fractal echo table (line 74: "transition table (BEFORE build), fractal echo table (BEFORE build)"). DG-4's sub-checks can validate these sections of the build log rather than requiring a separate YAML file that the builder never produces.

**Old text (lines ~160-169):**
```
### 3.4 Deliverable Gates (from build log)

Check `_build-log.md`:
- DG-1: Fractal echo table exists with 5 rows, CSS evidence non-empty, pattern direction consistent
- DG-2: Cascade value table exists at `_cascade-value-table.md`, values populated at every boundary
- DG-4: Transition table and fractal echo table in `_build-log.md` satisfy 5 sub-checks:
  1. zone_count: 3-5
  2. bg_deltas: ALL >= 15 RGB (from transition table planned values)
  3. mechanisms: >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)
  4. transitions: >= 3 distinct types
  5. grid_layouts: >= 2 distinct patterns
```

**New text:**
```
### 3.4 Deliverable Gates (from build log)

Check `_build-log.md`:
- DG-1: Fractal echo table exists with 5 rows, CSS evidence non-empty, pattern direction consistent
- DG-2: Cascade value table exists at `_cascade-value-table.md`, values populated at every boundary
- DG-4: Transition table and fractal echo table in `_build-log.md` satisfy 5 sub-checks:
  1. zone_count: 3-5
  2. bg_deltas: ALL >= 15 RGB (from transition table planned values)
  3. mechanisms: >= 14 total AND >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)
  4. transitions: >= 3 distinct types
  5. grid_layouts: >= 2 distinct patterns
```

**Lines added/removed:** +0 (only the mechanisms line changed -- incorporates Edit 1)
**Anti-regression check:**
  - Line budget remaining: 28 (unchanged from Edit 5)
  - Risk: LOW -- validates against build log (which the builder DOES produce) instead of a non-existent YAML file
  - Cross-file consistency: gate-runner.md DG-4 (line 913) still references _build-plan.yaml. NOTE: gate-runner.md should be updated separately to also validate from _build-log.md or the builder should produce _build-plan.yaml. Recommend gate-runner.md manifest addresses this.

**NOTE:** Edit 1 (B1) is now SUBSUMED by this edit since the mechanisms line is updated here.

---

### EDIT 7: B6 -- Resolve TeamCreate vs Task tool ambiguity
**Source:** B6 from execution-report-findings.md
**Location:** Lines 30 and 204
**Type:** BUG FIX
**Priority:** LOW

SKILL.md says "Use TeamCreate" (lines 30, 204) but the actual mechanism for spawning agents in Claude Code is the Task tool. There is no "TeamCreate" tool.

**Old text (line 30):**
```
Use TeamCreate to spawn the build-page team. You are the team lead / orchestrator.
```

**New text:**
```
Spawn agents using the Task tool. You are the team lead / orchestrator.
```

**Old text (line 204):**
```
Spawn 9 Opus auditors + 1 Opus weaver using TeamCreate.
```

**New text:**
```
Spawn 9 Opus auditors + 1 Opus weaver using the Task tool.
```

**Lines added/removed:** +0
**Anti-regression check:**
  - Line budget remaining: 28
  - Risk: LOW -- pure terminology fix
  - Cross-file consistency: Line 398 already says "Task tool" -- this ALIGNS all references

---

### EDIT 8: COMPRESSION -- Shorten model inheritance warning
**Source:** Budget management
**Location:** Lines 395-398
**Type:** COMPRESSION
**Priority:** N/A (budget recovery)

**Old text:**
```
### Agent Models

| Role | Model | Count |
|------|-------|-------|
| Orchestrator | You (team lead) | 1 |
| Builder | Opus | 1 |
| PA Auditors | Opus | 9 (initial), 2 (fix cycles) |
| PA Weaver | Opus | 1 |

IMPORTANT: When spawning agents via the Task tool, ALWAYS set `model: "opus"` explicitly. Do not rely on model inheritance from the parent session. Every agent in this pipeline MUST be Opus.
```

**New text:**
```
### Agent Models

| Role | Model | Count |
|------|-------|-------|
| Orchestrator | You (team lead) | 1 |
| Builder | Opus | 1 |
| PA Auditors | Opus | 9 (initial), 2 (fix cycles) |
| PA Weaver | Opus | 1 |

IMPORTANT: ALWAYS set `model: "opus"` explicitly when spawning agents. Every agent MUST be Opus.
```

**Lines added/removed:** -1
**Anti-regression check:**
  - Line budget remaining: 29
  - Risk: NONE -- same meaning, fewer words

---

### EDIT 9: E15 (DEFER) -- Add weaver compositional vocabulary
**Source:** E15 from 11-master-synthesis, 06-orchestrator-deep-dive Section 8 Edit 5, 17-concept-flow-trace (weaver = 1 binary line for channels)
**Location:** Section 5.3 (Weaver Spawn), after line ~272 ("what to change, not just what is wrong")
**Type:** DEFER (apply if PA-05 2.5-3.0)
**Priority:** MEDIUM

The weaver currently reduces all concepts to binary MET/FAILED (17-concept-flow-trace: "weaver collapses ALL concepts to a 6-item binary checklist"). Adding compositional vocabulary allows the weaver to produce concept-level synthesis instead of pure binary reduction. This directly addresses the return-path extinction documented in Report 17.

**Location:** After line ~272 (inside weaver spawn prompt, after "actionable CSS-level feedback")

**Old text:**
```
   exact auditor quote, scroll position, and actionable CSS-level feedback
   (what to change, not just what is wrong).
```

**New text:**
```
   exact auditor quote, scroll position, and actionable CSS-level feedback
   (what to change, not just what is wrong).
   When describing issues, name the affected multi-coherence channel
   (Chromatic/Typographic/Spatial/Structural), the fractal scale
   (Navigation/Page/Section/Component/Character), and the transition type
   at the boundary (SMOOTH/BRIDGE/BREATHING) where applicable.
```

**Lines added/removed:** +3
**Anti-regression check:**
  - Line budget remaining: 26
  - Risk: LOW -- changes weaver prompt only, not builder-facing. Weaver already synthesizes; this directs HOW it synthesizes.
  - Cross-file consistency: conventions-brief.md Section 4 (channels), Section 5 (scales), Section 7 (transitions) define these vocabularies. Gate-runner.md SC-13 measures channels.
  - Contrarian rebuttal (10-contrarian, Arg 8): "weaver doesn't write CSS, vocabulary doesn't help." Counter: weaver's TOP-5 issues go to fix instructions, which go to builder. Compositional vocabulary in the weaver reaches the builder via fix cycle. This addresses the return-path extinction.

---

### EDIT 10: E16 (DEFER) -- Add fix cycle recipe structure
**Source:** E16 from 11-master-synthesis, 17-concept-flow-trace (recipe-to-checklist degradation), 06-orchestrator-deep-dive Section 8 Edit 4
**Location:** Section 6.1 (Build Fix Instructions), after line ~322 ("DO NOT TOUCH" section)
**Type:** DEFER (apply if PA-05 2.5-3.0)
**Priority:** MEDIUM

The fix cycle degrades from recipe to checklist (17-concept-flow-trace: "The builder in a fix cycle is solving a DIFFERENT PROBLEM than the one the conventions brief defined"). Fix instructions currently contain gate failures + PA quotes but zero compositional framing. This edit adds a compositional context section so the builder receives concept-level guidance, not just symptom-level fixes.

**Old text (lines ~310-327):**
```
### Gate Failures (structured, with specific CSS)
[Paste _gate-results.json entries that FAILED, each with measured_value, threshold, delta_from_threshold, and CSS fix]

### PA Top-5 Issues (directional, not prescriptive)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor exact words]"
   - WHERE: [scroll position / element]
   - DIRECTION: [what to change -- not what CSS to write]

### Tier 5 Gaps (which questions scored NO)
- PA-6N: NO -- "[auditor reason]"
  IMPLICATION: [missing compositional property]

### DO NOT TOUCH (protected elements)
- [Elements that scored well -- do not regress]
```

**New text:**
```
### Gate Failures (structured, with specific CSS)
[Paste _gate-results.json entries that FAILED, each with measured_value, threshold, delta_from_threshold, and CSS fix]

### Compositional Context (from build log and conventions brief)
For each failed gate or PA issue at a boundary, include:
- The boundary's planned coherence direction (from transition table in _build-log.md)
- Which channels currently shift there and which are missing
- Re-read conventions-brief.md Section [N] for the relevant concept
[Example: "SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten). See brief Section 4."]

### PA Top-5 Issues (directional, not prescriptive)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor exact words]"
   - WHERE: [scroll position / element]
   - DIRECTION: [what to change -- not what CSS to write]

### Tier 5 Gaps (which questions scored NO)
- PA-6N: NO -- "[auditor reason]"
  IMPLICATION: [missing compositional property]

### DO NOT TOUCH (protected elements)
- [Elements that scored well -- do not regress]
```

**Lines added/removed:** +5
**Anti-regression check:**
  - Line budget remaining: 21
  - Risk: LOW -- adds compositional context to fix instructions without adding new constraints. Recipe format (sequenced actions) not checklist format.
  - Cross-file consistency: conventions-brief.md sections referenced by number. Gate-runner.md gate IDs used for structured routing. _build-log.md transition table provides the coherence direction data.
  - Anti-regression (07): Recipe formatting = 0 HIGH risks across all 10 failure modes. This IS recipe formatting applied to the fix cycle.
  - Addresses E-FIX (fix cycle recipe-to-checklist degradation) and E-RETURN (return path extinction) from execution-report.

---

### EDIT 11: GO BEYOND -- Strengthen builder spawn prompt with compositional framing for mechanism-catalog and components.css
**Source:** 06-orchestrator-deep-dive Section 1 ("No explicit connection between mechanism-catalog.md and the compositional intelligence concepts"), 11-master-synthesis concept propagation table
**Location:** Builder spawn prompt, lines 53-54 (reference files)
**Type:** GO BEYOND
**Priority:** LOW

Currently the reference files are listed without compositional framing:
```
3. design-system/compositional-core/grammar/mechanism-catalog.md -- mechanism CSS patterns
4. design-system/compositional-core/components/components.css -- component library
```

The builder reads these as reference material but has no framing connecting mechanisms to multi-coherence channels or fractal scales.

**Old text (lines 53-54):**
```
3. design-system/compositional-core/grammar/mechanism-catalog.md -- mechanism CSS patterns
4. design-system/compositional-core/components/components.css -- component library
```

**New text:**
```
3. design-system/compositional-core/grammar/mechanism-catalog.md -- mechanism CSS patterns. Select mechanisms that serve your multi-coherence channels.
4. design-system/compositional-core/components/components.css -- component library. Components are vehicles for fractal echo at Section and Component scales.
```

**Lines added/removed:** +0 (same lines, extended)
**Anti-regression check:**
  - Line budget remaining: 21
  - Risk: LOW -- adds framing, not constraints. World-description voice ("mechanisms that serve your channels") not checklist voice.
  - Cross-file consistency: conventions-brief.md Section 4 defines channels, Section 5 defines scales. Mechanism-catalog.md already has impact profiles per mechanism.
  - Contrarian rebuttal (10-contrarian, Arg 8): "Opus doesn't need CI vocabulary." Counter: this is 2 short phrases, not CI theory. It connects files the builder already reads to concepts the brief already defines. Cost: ~15 words. Risk of cognitive overload: negligible.

---

### EDIT 12: GO BEYOND -- Add same-builder note to fix cycle with compositional memory preservation
**Source:** 06-orchestrator-deep-dive Section 3 (fix routing), 17-concept-flow-trace (return path extinction)
**Location:** Section 6.2, line ~329 (after "CRITICAL: Use the SAME Opus builder agent")
**Type:** GO BEYOND
**Priority:** LOW

**Old text (lines ~329-333):**
```
>>> CRITICAL: Use the SAME Opus builder agent that produced the original page. Compositional memory preservation is essential.

Send the fix instructions. Builder reads them, applies fixes to output.html, updates _build-log.md and _cascade-value-table.md.
```

**New text:**
```
>>> CRITICAL: Use the SAME Opus builder agent that produced the original page.

Send fix instructions with this framing: "Re-read your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions." Builder reads them, applies fixes to output.html, updates _build-log.md and _cascade-value-table.md.
```

**Lines added/removed:** +1
**Anti-regression check:**
  - Line budget remaining: 20
  - Risk: LOW -- adds re-read instruction, not new constraint. Addresses "Compositional memory preservation is essential" claim with an actual mechanism.
  - Cross-file consistency: _build-log.md conviction statement and transition table are already mandated deliverables (line 74).

---

## EDITS NOT INCLUDED

### NOT INCLUDED: E7 (Compositional Reference Card)
**Source:** 06-orchestrator-deep-dive Section 6
**Why excluded:** 11-master-synthesis verdict: DON'T. Adds ~30-line new document to builder reading list. 07-anti-regression rates this as MEDIUM risk for complexity ratchet. 10-contrarian Argument 4: "more text = worse output." Budget cost would be ~8 lines in SKILL.md plus 30 lines new file. Not worth the budget.

### NOT INCLUDED: E8 (Comprehension Proof Gate)
**Source:** 06-orchestrator-deep-dive Section 7
**Why excluded:** 11-master-synthesis verdict: DON'T. Adds mandatory deliverable, slows builder start. Contrarian: "rote exercise." 07-anti-regression rates MEDIUM risk. Would cost ~6 lines.

### NOT INCLUDED: B7 (Zone Selector Fragility)
**Source:** B7 from execution-report-findings.md
**Why excluded:** This is a gate-runner.md issue, not a SKILL.md issue. The zone selector (`[class*="zone"], section[data-zone], .section`) is defined in gate-runner.md. SKILL.md's responsibility is to tell the builder to USE zone-appropriate selectors. The conventions-brief already describes zones. Adding selector documentation to SKILL.md would be inverted routing (orchestrator specification, not builder instruction). RECOMMEND: Add to gate-runner.md manifest instead, and add a note to the conventions-brief about zone selector conventions.

### NOT INCLUDED: B8 (Threshold Inconsistencies in CLAUDE.md files)
**Source:** B8 from execution-report-findings.md
**Why excluded:** This is a CLAUDE.md issue, not a SKILL.md issue. The 0.02em vs 0.025em discrepancy is in design-system CLAUDE.md files. SKILL.md correctly uses 0.025em (line 412). No SKILL.md change needed.

### NOT INCLUDED: B9 (Metaphor Pervasion Blind Spot)
**Source:** B9 from execution-report-findings.md
**Why excluded:** This is a PA question gap, not a SKILL.md issue. The proposed fix is to modify PA questions or add a new question. RECOMMEND: Add to flagship-pa-questions.md manifest.

### NOT INCLUDED: E-STACK (Stack Progression Bridge Text)
**Source:** E-STACK from execution-report-findings.md
**Why excluded:** This is a conventions-brief.md enrichment, not a SKILL.md change. The bridge text goes between brief Sections 2-3. RECOMMEND: Add to conventions-brief.md manifest.

### NOT INCLUDED: E-PHANTOM (Enhancement Channel Phantom Status)
**Source:** E-PHANTOM from execution-report-findings.md
**Why excluded:** This is a conventions-brief.md + gate-runner.md issue. Channels 5-6 need CSS guidance in the brief and potentially a reduced denominator in SC-13. Not a SKILL.md change.

### NOT INCLUDED: Lock Sheet Compositional Context (06-orchestrator Edit 6)
**Source:** 06-orchestrator-deep-dive Section 5
**Why excluded:** Budget constraint. Would add ~4 lines to the lock sheet section. The lock sheet is already generated by the orchestrator -- enriching it with compositional context is a nice-to-have but not a bug fix or DO NOW item.

### NOT INCLUDED: New gates (DG-1B, SC-13C, SC-10B from 05-verification)
**Source:** 05-verification-deep-dive Part 1.3-1.4
**Why excluded:** These are gate-runner.md additions, not SKILL.md changes. SKILL.md's gate table (lines 123-139) would need to be updated IF these gates are added to gate-runner.md. RECOMMEND: Add to gate-runner.md manifest first, then propagate to SKILL.md gate table.

---

## SUMMARY

### All Edits by Priority

| # | Type | Source | Change | Lines |
|---|------|--------|--------|-------|
| 1 | BUG FIX | B1 | Add ">= 14 total" to DG-4 mechanisms | +0 |
| 2 | BUG FIX | B2 | Micro-gate approach (merged into Edit 5) | -- |
| 3 | BUG FIX | B3 | Add BG-1/BG-2 behavioral gate references | +0 (inline) |
| 3B | BUG FIX | B3 | Add BG-1/BG-2 verification section | +3 |
| 4 | BUG FIX | B4 | Route _gate-results.json to weaver | +2 |
| 5 | BUG FIX + DO NOW | B2+E3+E-CONTRA | Restructure checkpoints boundary-grouped + align thresholds | +2 |
| 6 | BUG FIX | B5 | Fix DG-4 reference (subsumes Edit 1) | +0 |
| 7 | BUG FIX | B6 | Resolve TeamCreate -> Task tool | +0 |
| 8 | COMPRESSION | Budget | Shorten model warning | -1 |
| 9 | DEFER | E15 | Weaver compositional vocabulary | +3 |
| 10 | DEFER | E16 | Fix cycle recipe structure | +5 |
| 11 | GO BEYOND | Routing | Compositional framing for reference files | +0 |
| 12 | GO BEYOND | Return path | Fix cycle compositional memory | +1 |

### Line Budget

| Category | Lines |
|----------|-------|
| Starting line count | 415 |
| Bug fixes (Edits 1-7) | +7 |
| Compression (Edit 8) | -1 |
| DEFER (Edits 9-10) | +8 |
| GO BEYOND (Edits 11-12) | +1 |
| **Net change** | **+15** |
| **Final count** | **430** |
| **Budget remaining** | **20** |

### If ONLY Bug Fixes (Edits 1-8):
- Net change: +6
- Final count: 421
- Budget remaining: 29

### If Bug Fixes + DO NOW (Edits 1-8, checkpoint restructuring already included):
- Net change: +6 (checkpoints are part of bug fix)
- Final count: 421
- Budget remaining: 29

### If Bug Fixes + DEFER (Edits 1-12, full package):
- Net change: +15
- Final count: 430
- Budget remaining: 20

### What Was Cut to Fit
1. Compositional Reference Card (E7): -8 SKILL.md lines, -30 lines new file. DON'T verdict.
2. Comprehension Proof Gate (E8): -6 lines. DON'T verdict.
3. Lock Sheet Compositional Context: -4 lines. Budget cut.
4. New gates propagation: Deferred to gate-runner.md manifest.

### Cross-File Consistency Requirements

| SKILL.md Edit | Requires Matching Edit In |
|---------------|--------------------------|
| Edit 1/6 (DG-4 >= 14 total) | gate-runner.md DG-4 already aligned |
| Edit 3/3B (BG-1/BG-2) | gate-runner.md BG-1/BG-2 already defined |
| Edit 5 (checkpoint thresholds) | gate-runner.md micro-gates MG-1 through MG-4 already define these thresholds |
| Edit 6 (DG-4 validate from build log) | gate-runner.md DG-4 should be updated to note _build-log.md as validation source |
| Edit 9 (weaver vocabulary) | conventions-brief.md Sections 4/5/7 define these terms (already present) |
| Edit 10 (fix cycle context) | conventions-brief.md sections referenced by number (already present) |

---

*End of manifest. 02-skill-changes.md complete.*
