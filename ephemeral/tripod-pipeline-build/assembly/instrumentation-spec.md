# Instrumentation Layer Specification

**Purpose:** Defines the three layers of pipeline visibility that let us diagnose WHERE knowledge transfer succeeds or fails. Every template in this document is exact -- agents and the orchestrator copy these structures verbatim.

**Audience:** The SKILL.md orchestration skeleton (for embedding Layer B checkpoints), agent prompt writers (for embedding Layer A log footers), and the Weaver prompt (for Layer C comparison report).

---

## Layer A: Agent-Level Logging

Every agent appends a structured log footer to the END of its output file. This is not a separate file -- it lives at the bottom of the agent's primary output, separated by a horizontal rule.

### Template

```markdown
---

## Agent Log

- **Agent:** [agent role name]
- **Files read:** [filename (line count), filename (line count), ...]
- **Decisions made:**
  - [decision]: [1-sentence rationale]
  - [decision]: [1-sentence rationale]
  - [decision]: [1-sentence rationale]
- **Output size:** [line count] lines
- **Quality self-assessment:** [MEETS FLOOR / BELOW FLOOR] — [1-sentence justification]
```

### Rules

1. **Files read** lists every file the agent opened, with approximate line count. This is diagnostic -- it shows whether the agent actually consumed its assigned material.
2. **Decisions made** captures 3-5 KEY decisions, not every micro-decision. Focus on: what was included/excluded, what format was chosen, what conflicts were resolved.
3. **Quality self-assessment** is a binary judgment against the quality floor defined in the agent's prompt. The agent states whether it met the floor and WHY in one sentence.
4. **No file contents in logs.** Never paste file excerpts into the log. Reference by name and line number only. This keeps logs under 15 lines.
5. **No time estimates.** Agents cannot accurately estimate their own execution time. Omit this field.

### Example: Specialist 1 (Findings Mapper) Log

```markdown
---

## Agent Log

- **Agent:** Specialist 1 — Findings Mapper
- **Files read:** R1-DOCUMENTATION-PATTERNS.md (584), R2-CREATIVE-LAYOUTS.md (810), R3-DENSITY-DIMENSIONS.md (553), R4-AXIS-INNOVATIONS.md (990), R5-COMBINATION-THEORY.md (784), RESEARCH-SYNTHESIS.md (383), R5-EVALUATION-MATRIX.md (706)
- **Decisions made:**
  - Rated 24 findings HIGH (threshold: direct CSS applicability to geological metaphor with long-form content)
  - Excluded R1 layout-grid findings (content is single-column narrative, grid patterns do not apply)
  - Used combination logic from R5-EVALUATION-MATRIX to cross-validate R4 axis findings
- **Output size:** 138 lines
- **Quality self-assessment:** MEETS FLOOR — 24 HIGH findings exceeds minimum 20, each includes finding ID + rationale + CSS action in recipe format
```

### Which Agents Write Layer A Logs

| Agent | Log Location |
|-------|-------------|
| Specialist 1-5 | Footer of `_specialist-N-*.md` |
| Synthesizer | Footer of `_package-pass-3.md` (last file it writes) |
| Builder Pass 1 | Footer of `_pass-1-decisions.md` |
| Builder Pass 2 | Footer of `_pass-2-decisions.md` |
| Builder Pass 3 | Footer of `_builder-reflection.md` |
| PA Auditors 1-5 | Footer of `auditor-N.md` |
| Weaver | Footer of `synthesis.md` |

**TC agent is exempt.** The TC agent runs the full tension-composition pipeline, which has its own internal structure. Adding a log footer would interfere with the brief's creative format.

---

## Layer B: Phase Checkpoint Reflections

The ORCHESTRATOR (not agents) writes a checkpoint entry to `_pipeline-log.md` after each phase completes. This file is append-only -- each phase adds a new section.

### Template

```markdown
## Phase [N]: [PHASE NAME] — Checkpoint

- **Timestamp:** [ISO 8601 or descriptive, e.g., "after Phase 2 completion"]
- **Agents spawned:** [count] ([role names])
- **Artifacts produced:**
  - [filename] — [line count] lines
  - [filename] — [line count] lines
- **Quality floor check:**
  - [artifact]: [PASS/FAIL] — [reason if FAIL]
  - [artifact]: [PASS/FAIL] — [reason if FAIL]
- **Concerns:** [any red flags observed, or "None"]
- **Cumulative cost estimate:** $[low]-[high] (Phase [N] est: $[low]-[high])
- **Decision:** [PROCEED / RE-RUN / ABORT] — [1-sentence justification]

---
```

### When Checkpoints Are Written

The orchestrator writes the checkpoint IMMEDIATELY after validating the phase's outputs and BEFORE beginning the next phase. This is the decision gate -- the orchestrator reads the checkpoint it just wrote and acts on the decision field.

| Phase | Checkpoint Written After | Key Validation |
|-------|-------------------------|----------------|
| Phase 1: DERIVE | `_tc-brief.md` passes structural validation (6 sections, definitive metaphor, 3+ waypoints) | Brief quality |
| Phase 2: RESEARCH | All 3 `_package-pass-N.md` files exist and meet minimum line counts | Package completeness |
| Phase 3: BUILD | `_build-final.html` exists, >1KB, contains `<style>` block and Google Fonts links | Build validity |
| Phase 4: EVALUATE | `_pa/synthesis.md` exists with verdict (SHIP/REFINE/REBUILD) | Verdict presence |
| Phase 5: REFINE | Refined `_build-final.html` passes same checks as Phase 3 | Refined build validity |

### Example: Phase 2 Checkpoint

```markdown
## Phase 2: RESEARCH — Checkpoint

- **Timestamp:** after Phase 2 completion
- **Agents spawned:** 6 (Specialist 1, Specialist 2, Specialist 3, Specialist 4, Specialist 5, Synthesizer)
- **Artifacts produced:**
  - _specialist-1-findings.md — 138 lines
  - _specialist-2-validated.md — 94 lines
  - _specialist-3-casestudies.md — 127 lines
  - _specialist-4-constraints.md — 72 lines
  - _specialist-5-protocol.md — 68 lines
  - _package-pass-1.md — 156 lines
  - _package-pass-2.md — 163 lines
  - _package-pass-3.md — 134 lines
- **Quality floor check:**
  - _specialist-1-findings.md: PASS — 24 HIGH findings (floor: 20)
  - _specialist-2-validated.md: PASS — 17 validated findings with provenance (floor: 15)
  - _specialist-3-casestudies.md: PASS — 4 case studies with structural affinity (floor: 3)
  - _specialist-4-constraints.md: PASS — 8 anti-patterns risk-profiled (floor: 6)
  - _specialist-5-protocol.md: PASS — consumption protocol defined, 6 Agent-0C patterns identified (floor: 5)
  - _package-pass-1.md: PASS — 156 lines (floor: 100)
  - _package-pass-2.md: PASS — 163 lines (floor: 100)
  - _package-pass-3.md: PASS — 134 lines (floor: 100)
- **Concerns:** Specialist 4 output is near floor (72 lines vs 60 minimum). Constraint coverage may be thin.
- **Cumulative cost estimate:** $11-20 (Phase 2 est: $8-15)
- **Decision:** PROCEED — all artifacts meet quality floors, package files are well-structured

---
```

### Cost Tracking

Cost estimates use RANGES, not exact numbers. The orchestrator cannot measure actual API costs. Instead, it estimates based on the spec's per-phase ranges (Section 15 of the pipeline spec):

| Phase | Estimated Range |
|-------|----------------|
| Phase 1: DERIVE | $3-5 |
| Phase 2: RESEARCH | $8-15 |
| Phase 3: BUILD | $12-18 |
| Phase 4: EVALUATE | $5-10 |
| Phase 5: REFINE | $0-8 |

The orchestrator sums the lower and upper bounds cumulatively. If the cumulative upper bound exceeds $50 at any checkpoint, the orchestrator PAUSES and reports to the user before proceeding.

### Re-Run Protocol

If the orchestrator's decision is RE-RUN:
1. Log which artifact(s) failed and why
2. Re-spawn only the failed agent(s), not the entire phase
3. Write a second checkpoint entry for the same phase (e.g., "Phase 2: RESEARCH — Checkpoint (re-run)")
4. Maximum 1 re-run per phase. If the re-run also fails, log ABORT and stop the pipeline.

---

## Layer C: Output Comparison Report

The WEAVER produces this as **Output 4: Package Compliance** within `_pa/synthesis.md`. It is NOT a separate file -- it is an additional section of the Weaver's synthesis output, appended after the standard 3 outputs (Experience Portrait, Creative Direction, Verdict).

### Template

```markdown
## Output 4: Package Compliance

### Assessment Method

I reviewed the 3 research package files (_package-pass-1.md, _package-pass-2.md, _package-pass-3.md) and compared each section's instructions against the built HTML. For process-oriented sections (Section 0: Soul Checklist, Section 9: Consumption Protocol), I assessed what is verifiable from the output. For build-oriented sections, I assessed CSS/HTML evidence directly.

### Section-by-Section Assessment

**Section 0: Soul Checklist**
- Package instructed: [summary of non-negotiables]
- Build evidence: [what the HTML shows — e.g., "border-radius: 0 on all elements confirmed"]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [specific gap if any, or "None"]

**Section 1: Build Context**
- Package instructed: [metaphor + content map summary]
- Build evidence: [how the metaphor manifests in visual structure]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [specific gap if any]

**Section 2: Mechanism Selections**
- Package instructed: [list of mechanisms with expected evidence]
- Build evidence: [which mechanisms are visible in the output]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [which mechanisms are missing or incorrectly deployed]

**Section 3: Findings -> Actions**
- Package instructed: [key findings with expected CSS actions]
- Build evidence: [which findings were applied]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [which findings were ignored]

**Section 4: Zone Architecture**
- Package instructed: [zone structure + density progression]
- Build evidence: [actual zone structure in the HTML]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [zone mismatches]

**Section 5: Case Study Processes**
- Package instructed: [processes + CSS patterns to integrate]
- Build evidence: [which CSS patterns appear in the build]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [which processes were not integrated]

**Section 6: Anti-Patterns**
- Package instructed: [risk-profiled anti-patterns with mitigations]
- Build evidence: [which anti-patterns are present/absent]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [which anti-patterns were not mitigated]

**Section 7: CSS Examples**
- Package instructed: [validated CSS examples to integrate]
- Build evidence: [which CSS patterns from examples appear in the build]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [which examples were not used]

**Section 8: Structural Propositions**
- Package instructed: [hypotheses about metaphor manifestation]
- Build evidence: [which propositions are supported by the visual output]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [which propositions are not embodied]

### Summary

- **Sections fully followed:** [count]/9
- **Sections partially followed:** [count]/9
- **Sections not followed:** [count]/9
- **Highest-impact gap:** [the single most significant gap between package instruction and build output]
- **Diagnosis:** [BUILDER DIVERGED / PACKAGE UNCLEAR / BOTH]
```

### Example: Section 3 Assessment

```markdown
**Section 3: Findings -> Actions**
- Package instructed: 22 findings mapped to CSS actions. Key: DD-F-006 (fractal density at 4 scales — header/section/subsection/inline), R4-F-112 (axis transitions via background-color shifts at zone boundaries), OD-F-009 (breathing rhythm — alternating 48px/32px section gaps).
- Build evidence: DD-F-006 is partially deployed — fractal density visible at header and section scales but not at subsection or inline level. R4-F-112 is fully deployed — 4 distinct background shifts at zone boundaries. OD-F-009 is not present — all section gaps appear uniform at approximately 48px.
- Compliance: PARTIALLY FOLLOWED
- Gap: DD-F-006 missing 2 of 4 scales. OD-F-009 breathing rhythm absent — uniform spacing throughout.
```

### What the Weaver CAN and CANNOT Assess

The Weaver receives the package files AND the screenshots (plus optionally the HTML source). Some sections are fully assessable, others only partially:

| Section | Assessable From | Limitation |
|---------|----------------|------------|
| 0: Soul Checklist | HTML source | Fully assessable — binary CSS checks |
| 1: Build Context | Screenshots + HTML | Metaphor manifestation is a judgment call |
| 2: Mechanisms | Screenshots + HTML | Most mechanisms visible; some subtle ones hard to confirm from screenshots alone |
| 3: Findings -> Actions | HTML source | Fully assessable — CSS evidence maps to finding actions |
| 4: Zone Architecture | Screenshots | Density progression visible; exact pixel values need HTML source |
| 5: Case Study Processes | HTML source | CSS pattern matching possible; process adoption is harder to verify |
| 6: Anti-Patterns | HTML source + Screenshots | Fully assessable — anti-patterns have specific CSS signatures |
| 7: CSS Examples | HTML source | Fully assessable — direct CSS comparison |
| 8: Structural Propositions | Screenshots | Judgment-based — propositions are visual hypotheses |
| 9: Consumption Protocol | NOT assessable | Process-oriented — no output evidence. SKIP this section. |

The Weaver SKIPS Section 9 (Consumption Protocol) in the compliance check because it describes the builder's reading/sequencing process, which leaves no trace in the output.

### Distinguishing "Builder Diverged" vs "Package Unclear"

For each gap, the Weaver makes a judgment:

- **BUILDER DIVERGED:** The package instruction was specific and actionable, but the build does not reflect it. Example: Package says "deploy DD-F-006 at 4 scales" and the build only has 2 scales.
- **PACKAGE UNCLEAR:** The package instruction was vague or contradictory, making it unreasonable to expect compliance. Example: Package says "apply appropriate density" without specifying values or zones.
- **BOTH:** The package was somewhat specific but the builder also made choices that moved away from the instruction.

This distinction matters for fix cycles: BUILDER DIVERGED means re-provide the same package section. PACKAGE UNCLEAR means the research phase produced insufficient specificity (a synthesizer quality issue, not a builder issue).

---

## Edge Case Mitigations

### Logging Adding Context Pressure

**Risk:** Agent logs consume tokens that could go toward the agent's primary output.

**Mitigation:** Logs are capped at 15 lines. The template enforces brevity: file list (1 line), 3-5 decisions (3-5 lines), output size (1 line), self-assessment (1 line). Total overhead: ~200 tokens per agent. At 14-15 agents, total logging overhead is ~3,000 tokens -- negligible against the pipeline's total token budget.

**Rule:** If an agent is approaching its output ceiling and the log would push it over, the agent truncates the decisions list to the top 3. The log is never omitted entirely.

### Cost Tracking Inaccuracy

**Risk:** The orchestrator's cost estimates are ranges, not measurements. Over a full pipeline run, cumulative error could be significant.

**Mitigation:**
1. Use the pipeline spec's per-phase ranges as anchors (they are empirically derived from /compose runs).
2. Track cumulative UPPER bound conservatively. The $50 pause threshold uses the upper bound.
3. After a complete run, the orchestrator writes a final cost summary in the pipeline log: "Estimated total: $X-Y. Actual cost should be checked against API billing."
4. Accept that cost tracking is approximate. Its purpose is to catch GROSS overruns ($80+ runs), not to measure within $5 accuracy.

### Quality Floor Re-Run Loops

**Risk:** An agent fails its quality floor, gets re-run, fails again, creating a loop.

**Mitigation:** Maximum 1 re-run per agent. If the re-run fails:
1. Log the failure in the pipeline log with both attempts' output sizes
2. Proceed with the best available output (the longer of the two attempts)
3. Note in the checkpoint that this phase has a known weak link
4. Do NOT abort the pipeline for a single specialist's thin output -- the synthesizer can compensate

### Comparison Report Scope Creep

**Risk:** The Weaver spends so much effort on the compliance report that Outputs 1-3 (the core PA synthesis) suffer.

**Mitigation:** The Weaver produces Outputs 1-3 FIRST, then Output 4. The compliance report is explicitly the LAST section of the synthesis file. The Weaver's prompt instructs: "Complete your Experience Portrait, Creative Direction, and Verdict before beginning the Package Compliance assessment. Outputs 1-3 are your primary job; Output 4 is diagnostic instrumentation."
