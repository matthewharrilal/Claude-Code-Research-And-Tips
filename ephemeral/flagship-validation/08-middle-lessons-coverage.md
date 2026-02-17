# Middle-Tier Experiment Lessons Coverage Validation

**Date:** 2026-02-17
**Validator:** middle-tier-validator (Task #8)
**Sources validated against:**
- `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines)
- `ephemeral/prompt-enrichment-audit/AUXILIARY-EXECUTION-WRAPPER.md` (399 lines)
- `ephemeral/middle-tier-experiment/09-MASTER-RETROSPECTIVE.md` (507 lines, v2)
- `ephemeral/middle-tier-experiment/07-VERDICT.md` (228 lines)
- `ephemeral/middle-tier-experiment/TAKEAWAY-UNIFIED-ACTION-PLAN.md`
- `ephemeral/middle-tier-experiment/TAKEAWAY-PROCESS-METACOGNITION.md`
- `ephemeral/middle-tier-experiment/TAKEAWAY-EXPECTATIONS-VS-REALITY.md`
- `ephemeral/middle-tier-experiment/AUDIT-COMMUNICATION-REFS.md`

---

## VALIDATION MATRIX

Each lesson is checked against the enriched prompt and auxiliary wrapper. Status: COVERED / PARTIAL / MISSING.

---

### Lesson 1: PA-05 4/4 DESIGNED with SHORTER prompt (less is more)

**Source:** VERDICT E2.1, Master Retro Finding 4, Process Metacognition meta-lesson
**Expected in prompt:** Evidence that shorter/focused prompt achieves DESIGNED; acknowledgment that less is more

**Enriched Prompt Coverage:**
- Section A6 (line 76): "Every rule in this prompt has an attention cost. Binary rules are cheap (~1 unit). [...] This prompt is short because LENGTH IS THE ENEMY OF QUALITY."
- Section A3 (line 43): "EMPIRICAL WARNING: Middle experiment at 2 scales: PA-05 4/4 DESIGNED. Ceiling experiment at 4 scales: PA-05 1.5/4 DO NOT SHIP."
- Appendix parameter table (line 461): "Builder prompt length: <= 75 lines" and "Master prompt length: <= 250 lines (target 248)"
- Rule KB-04 (line 361): "execution prompt <= 200 lines. FAIL = COMPRESS."

**Auxiliary Wrapper Coverage:**
- Reminder #4 (line 388): "Middle experiment at 2 scales: PA-05 4/4. Ceiling experiment at 4 scales: PA-05 1.5/4. Do NOT over-engineer. Restraint is strength."

**Status: COVERED**
The prompt explicitly uses Middle's PA-05 4/4 as calibration evidence, enforces prompt length caps, and states "LENGTH IS THE ENEMY OF QUALITY." The less-is-more principle is structural, not just referenced.

---

### Lesson 2: 12 mechanisms with F-PATTERN density pattern

**Source:** VERDICT E2.4 (S:1, H:3, C:4, D:2, N:3 = 12), Master Retro Finding 1, Expectations divergence #2
**Expected in prompt:** Per-category minimums replacing "sample 2-4"; mechanism target of 12-14; F-PATTERN recognized

**Enriched Prompt Coverage:**
- Rule C-01 (line 163): "Per-category minimums: Spatial:1+ Hierarchical:1+ Chromatic:1+ Density:1+ Navigational:1+"
- Rule C-02 (line 164): "Mechanism target: 12-14 deployed. Hard cap: 16"
- Appendix (line 454): "Mechanism target: 12-14 [Target range]"
- Section A5 (line 66): "Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms."

**Auxiliary Wrapper Coverage:**
- Pass 2 section (lines 188-193): "Deploys 12-14 mechanisms per build plan. Hard cap 16. Per-category minimums: Spatial:1+..."

**Status: COVERED**
Per-category minimums are a first-class binary rule (C-01). The 12-14 target range directly reflects Middle's natural landing of 12. "Sample 2-4" language is entirely absent. F-PATTERN is not explicitly named (the prompt is content-agnostic and uses P-01 content inventory to derive pattern), which is correct -- naming F-PATTERN would be content-specific.

**Note:** The category names have shifted from Middle's (Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Nav) to the enriched prompt's (Spatial/Hierarchical/Chromatic/Density/Navigational). This is a vocabulary update reflecting mechanism-catalog enrichments, not an omission. Both systems require 5-category coverage.

---

### Lesson 3: Zero messaging = quality cost (CORRECTED framing)

**Source:** Master Retro v2 Finding 9, v2 Changelog, AUDIT-COMMUNICATION-REFS.md, Expectations divergence #5
**Expected in prompt:** Messaging is REQUIRED, not optional; evidence that zero messaging caused quality gaps

**Enriched Prompt Coverage:**
- Section C2 (lines 328-346): Full communication protocol with 5 mandatory checkpoints (CP-A through CP-E)
- Line 339: "Minimum 8 substantive messages across experiment. Zero messages at Gate 1 = PAUSE BUILD."
- Appendix (line 464): "Communication requirement: File + SendMessage (min 8 messages) [FAIL-IF binary]"
- B10 self-check (lines 292-294): "AFTER SELF-CHECK: SendMessage to planner with spatial concern" and "AFTER FILE WRITE: SendMessage to team-lead with page-height + content-ratio + section-count"

**Auxiliary Wrapper Coverage:**
- Phase 3 (lines 277-304): Entire section on "Mandatory Communication Protocol" with all 5 checkpoints and escalation triggers
- Line 304: "Zero messages at Gate 1 = PAUSE BUILD."
- Reminder #5 (line 390): "CD-006 scored 39/40 with agent messaging. Ceiling scored DO NOT SHIP with zero messaging. SendMessage is not overhead -- it IS the quality mechanism."

**Status: COVERED -- STRONGLY**
This is one of the most thoroughly addressed lessons. The CORRECTED framing (messaging = quality mechanism, not overhead) is embedded at multiple levels: binary rule in appendix, 5 mandatory checkpoints in coordination spec, explicit "PAUSE BUILD" consequence, and conviction-level reminder. The original "zero messaging = success" framing is completely absent.

---

### Lesson 4: Vocabulary fluency vs compositional fluency distinction

**Source:** Master Retro Finding 4, Expectations divergence #3, TAKEAWAY-UNIFIED-ACTION-PLAN CF-4
**Expected in prompt:** Two-dimension model: vocabulary = Middle tier, composition = metaphor + agent collaboration

**Enriched Prompt Coverage:**
- Section A4 (lines 49-54): "Source 1 (Constraint Pressure)" = vocabulary fluency, "Source 2 (Design Intelligence)" = compositional fluency
- Line 54: "Source 1 alone = 'professionally stiff' (Middle result). Source 1 + Source 2 = crown jewel (CD-006: 39/40)."
- Section A5 (lines 58-66): Full compositional fluency framework with 5 interaction types (REINFORCING, MODULATING, RESPONDING, CONTRASTING, CASCADING)
- Line 66: "Vocabulary is knowing the mechanisms; composition is choosing which interaction pattern to deploy."

**Auxiliary Wrapper Coverage:**
- Implicitly present through the 5-pass architecture (Pass 0-1 = vocabulary foundation, Pass 2-4 = compositional enrichment)

**Status: COVERED**
The two-dimension model is one of the prompt's foundational concepts. Section A4 names both dimensions explicitly and uses the Middle result ("professionally stiff") as the calibration point for what vocabulary alone produces. Section A5 operationalizes compositional fluency into 5 concrete interaction types, making it actionable rather than aspirational.

---

### Lesson 5: Missing footer = smoking gun (builder couldn't ask planner)

**Source:** Master Retro Findings 2 and 9, VERDICT perception track, Expectations divergence #9, TAKEAWAY CF-3
**Expected in prompt:** Landmark completeness gate; communication protocol enabling builder-planner questions

**Enriched Prompt Coverage:**
- Rule S-04 (line 123): "Footer: MUST exist with visible content. Gap <= 1 viewport height from last content."
- Rule S-05 (line 124): "All planned sections present, each with >= 200px rendered content height."
- Gate 2 (line 353): "Landmarks: Header + Footer + all sections present."
- B10 self-check item 6 (line 285): "S-03+S-04: Header < 20% + footer present with content"
- Communication CP-A (line 331): Builder -> Planner message including spatial concerns
- Communication escalation triggers (lines 342-345): Builder must message when uncertain

**Auxiliary Wrapper Coverage:**
- Gate 2 (line 182): "Header + Footer + all sections present"
- Phase 3 CP-A (line 283): Builder sends to Planner with container/height/concerns

**Status: COVERED -- STRONGLY**
The missing footer is addressed through THREE independent defenses: (1) S-04 as a FAIL-IF binary rule for footer existence, (2) Gate 2 as a blocking landmark check, (3) CP-A communication enabling builder-planner questions. The root cause (builder couldn't ask planner) is addressed by the entire C2 communication protocol.

---

### Lesson 6: Flat file-bus topology worked fine

**Source:** Master Retro Finding 6, Process Metacognition 1.1, Expectations divergence #5
**Expected in prompt:** Flat topology preserved; no intermediate captains

**Enriched Prompt Coverage:**
- Section C1 (lines 303-324): Agent roster shows flat structure: all passes report to team-lead directly, no captains
- Zero references to captains, hierarchies, or intermediate coordinators
- The topology is implicitly flat throughout: "Team-lead" appears in every pass as the direct coordinator

**Auxiliary Wrapper Coverage:**
- Phase 2 (lines 141-264): All agents spawned directly by team-lead, no intermediate hierarchy

**Status: COVERED**
The flat topology is preserved exactly as the Middle tier validated it. The change from Middle to Flagship is ONLY in communication protocol (file + messaging instead of file-only), not in topology structure.

---

### Lesson 7: ~35 min total execution (timing model recalibration)

**Source:** Master Retro Finding 3, Expectations divergence #1, TAKEAWAY CF-7
**Expected in prompt:** Realistic timing estimates for parallel agent execution; staged downgrade acknowledging time constraints

**Enriched Prompt Coverage:**
- C4 (line 388): "STAGED DOWNGRADE at 240 min" -- implies realistic timing awareness
- No explicit timing estimates in the enriched prompt itself (which is correct -- the prompt governs quality, not schedule)

**Auxiliary Wrapper Coverage:**
- Phase 5 (line 373): "Staged Downgrade at 240 Minutes" with tier fallback protocol

**Status: PARTIAL**
The prompt does not explicitly reference the 35-minute Middle result or the parallel agent timing model. The 240-minute staged downgrade in the wrapper implicitly acknowledges timing constraints. However, the Middle timing lesson is primarily a PLANNING insight (estimate differently), not a PROMPT rule. The prompt's job is to define quality gates, not scheduling. The HANDOFF.md and planning documents are the correct location for timing model recalibration.

**Gap assessment:** LOW severity. Timing recalibration is a planning concern, not an execution prompt concern. The staged downgrade at 240 min shows timing awareness.

---

### Lesson 8: Known defects -- CPL +2, token compliance 66.5%, missing footer

**Source:** VERDICT Known Defects 1-2, Perception Track
**Expected in prompt:** Binary rules for CPL, token compliance thresholds, footer existence gate

**Enriched Prompt Coverage:**
- **CPL:** Rule S-07 (line 128): "CPL: (content-width-px) / (font-size-px) / 0.6 = [45, 80]" -- binary rule with exact formula
- **Token compliance:** Appendix (line 472): "Token compliance: >= 80% var() usage [FAIL-IF binary]"; B10 self-check (line 287): "Token compliance >= 80% (var() count / total declarations, excluding :root)"
- **Footer:** S-04 (line 123), Gate 2 (line 353), B10 item 6 (line 285) -- triple defense

**Auxiliary Wrapper Coverage:**
- Phase 4 (line 327): Builder self-check enforcement; "If the self-check is missing or incomplete, reject the file"

**Status: COVERED**
All three Middle-tier defects are converted from judgment rules (which achieved 0% compliance) to binary FAIL-IF rules with verification methods. The CPL formula is provided so the builder can self-verify. Token compliance has a threshold and scan method. Footer has three independent checks. This directly implements the retro's meta-lesson: "If a constraint matters, make it binary."

---

## ADDITIONAL MIDDLE-TIER LESSONS (not in original checklist)

### Lesson 9: Binary rules = 100% compliance, judgment rules = 0%

**Source:** Master Retro, Process Metacognition CF-1
**Enriched Prompt Status: COVERED** -- Section B preamble (line 109): "Every rule below is numbered, binary, and verifiable. ZERO judgment language." All 71 rules are binary.

### Lesson 10: Opus for planner, Sonnet for workers

**Source:** Process Metacognition 1.3, VERDICT meta-check
**Enriched Prompt Status: COVERED** -- C1 roster (lines 303-324) specifies Opus for Content Architect, Metaphor Agent, Metaphor Builder, Intentionality Builder; Sonnet for Skeleton Builders, Embedded Auditor, Mechanism Builder.

### Lesson 11: Two-instance pattern prevents template copying

**Source:** Master Retro IV.3, Expectations divergence #7
**Enriched Prompt Status: COVERED** -- P-02 (line 242): "Phase 0E library prohibition: no mechanism catalog access before metaphor lock-in." P-03 (line 243): "Two-instance pattern: separate agents per pass (continuation bias prevention)." Reference library (Section E, lines 411-443) routes files per-agent.

### Lesson 12: Fresh-eyes zero-context auditing

**Source:** Master Retro Finding 5, CF-8
**Enriched Prompt Status: COVERED** -- C4 (lines 369-390): "COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction, THEN questions. Zero TC context." PA auditors receive "ZERO build context, ZERO CSS source, ZERO mechanism list, ZERO prior audit results" (wrapper line 235).

### Lesson 13: Per-file builder ownership = zero contention

**Source:** Master Retro IV.2, Process Metacognition 1.1
**Enriched Prompt Status: COVERED** -- Implicit in C1 roster. Each pass produces distinct deliverables. Only the Embedded Auditor has Playwright; builder writes HTML. Skeleton Builders A+B are explicitly competitive (line 309).

### Lesson 14: Content-mechanism fit as quality driver

**Source:** Master Retro IV.7 (border-weight gradient as design highlight), VERDICT F1.4
**Enriched Prompt Status: COVERED** -- P-01 (line 240): "Content inventory BEFORE metaphor derivation." A6 (line 73): "Designed MOMENTS are not designed COMPOSITION. Composition requires mechanism INTERACTION, not mechanism PRESENCE." C-10 (line 177): ">= 2 purpose-built components invented for THIS content (not generic reuse)."

### Lesson 15: Evaluation methodology gaps (single evaluator, no blind protocol)

**Source:** Master Retro Finding 7, Adversarial Findings challenges
**Enriched Prompt Status: COVERED** -- Gate 4 (line 355): "2 fresh-eyes agents" for metaphor evaluation. C4 (lines 369-390): 9-auditor Mode 4 PA deployment. PA-05 composite score averaged across all 9 auditors (wrapper line 262).

---

## COVERAGE SUMMARY

| # | Lesson | Status | Severity if Missing |
|---|--------|--------|---------------------|
| 1 | PA-05 4/4 DESIGNED with shorter prompt | COVERED | HIGH |
| 2 | 12 mechanisms with F-PATTERN | COVERED | HIGH |
| 3 | Zero messaging = quality cost (CORRECTED) | COVERED -- STRONGLY | CRITICAL |
| 4 | Vocabulary vs compositional fluency | COVERED | HIGH |
| 5 | Missing footer = smoking gun | COVERED -- STRONGLY | CRITICAL |
| 6 | Flat file-bus topology | COVERED | MEDIUM |
| 7 | ~35 min execution timing | PARTIAL | LOW |
| 8 | Known defects (CPL, tokens, footer) | COVERED | HIGH |
| 9 | Binary rules = 100% compliance | COVERED | HIGH |
| 10 | Opus planner + Sonnet workers | COVERED | MEDIUM |
| 11 | Two-instance pattern | COVERED | HIGH |
| 12 | Fresh-eyes zero-context auditing | COVERED | HIGH |
| 13 | Per-file builder ownership | COVERED | MEDIUM |
| 14 | Content-mechanism fit | COVERED | MEDIUM |
| 15 | Evaluation methodology gaps | COVERED | MEDIUM |

---

## VERDICT

**15 lessons validated. 14 COVERED, 1 PARTIAL.**

The PARTIAL item (#7, timing model recalibration) is LOW severity because timing is a planning concern, not an execution prompt concern. The staged downgrade at 240 minutes provides implicit timing awareness.

The two most CRITICAL lessons -- the communication framing correction (Finding 9 / v2 changelog) and the missing footer root cause -- are among the most thoroughly addressed items in the entire prompt. The communication protocol (5 checkpoints, minimum 8 messages, PAUSE BUILD on zero messages) is a first-class structural element, not a footnote. The footer defense (S-04 + Gate 2 + B10 self-check) provides triple redundancy.

**Overall assessment: PASS.** The enriched prompt captures ALL material middle-tier lessons with appropriate weight and structural integration. No BLOCKING gaps identified.
