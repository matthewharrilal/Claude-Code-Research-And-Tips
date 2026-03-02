# Red Team: Internal Consistency Audit

**Agent:** Adversarial Red Team (Consistency)
**Scope:** All files in SKILL-assembled.md, TRIPOD-PIPELINE-SPECIFICATION.md, 13 prompts, 2 support specs
**Date:** 2026-03-02

---

### FINDING-C1: Agent Count Mismatch — SKILL vs Spec

- **Severity:** MEDIUM
- **Location:** SKILL-assembled.md line 29 vs TRIPOD-PIPELINE-SPECIFICATION.md line 135
- **Contradiction:** The SKILL says "Total agents per run: 16-17 (1 TC + 5 specialists + 1 synthesizer + 3 builder passes + 5 PA auditors + 1 weaver + 0-1 refine builder)." The spec says "Total agents per run: 14-15 (1 TC + 5 specialists + 1 synthesizer + 1 builder x 3 + 5 PA + 1 weaver + 0-1 refine)."
- **Impact:** The SKILL counts each builder pass as a separate agent (3 agents), giving 16-17. The spec counts the builder as "1 builder x 3 passes" (1 agent used 3 times), giving 14-15. Both additions work to their own interpretation: SKILL = 1+5+1+3+5+1+0/1 = 16/17; Spec = 1+5+1+1+5+1+0/1 = 14/15 (but this only adds to 14/15 if you count "1 builder x 3" as 1). The spec's arithmetic is wrong for its own definition: 1+5+1+3+5+1+0/1 = 16/17 regardless. The spec appears to have used 1 for "builder" instead of 3 for "builder passes." Since each builder pass is a fresh agent spawn (explicitly stated in both files), the SKILL's count of 16-17 is correct.
- **Fix:** Update the spec's line 135 to match the SKILL: "14-15" should be "16-17". Or clarify the spec's counting convention.

---

### FINDING-C2: Max Fix Cycles Contradiction — Spec vs SKILL

- **Severity:** SIGNIFICANT
- **Location:** TRIPOD-PIPELINE-SPECIFICATION.md line 725 ("Maximum 3 fix cycles") vs SKILL-assembled.md line 27 ("Max 2 cycles") and line 663 ("Maximum 2 fix cycles")
- **Contradiction:** The spec Section 12 (Proven Patterns from /compose) states: "Maximum 3 fix cycles. Track by counting `fix-N-feedback.md` files. If fix-3 exists, stop." The SKILL consistently says "Maximum 2 fix cycles" in the Quick Reference table and in Phase 5.
- **Impact:** If the orchestrator reads the spec, it would allow 3 cycles. If it follows the SKILL, it allows only 2. The SKILL is what the orchestrator actually reads, so in practice 2 cycles will be used. But if someone checks against the spec as source of truth, there is a mismatch.
- **Fix:** Update the spec's Section 12 to say "Maximum 2 fix cycles" to match the SKILL. The spec is a pre-build specification; the SKILL is the assembled implementation. The SKILL's value (2) should be canonical.

---

### FINDING-C3: Comparison Report — Stand-Alone File vs Weaver Output 4

- **Severity:** SIGNIFICANT
- **Location:** SKILL-assembled.md lines 612-635 (Step 4D) vs pa-integration-spec.md lines 340-346 (Section 8) vs TRIPOD-PIPELINE-SPECIFICATION.md lines 493-496
- **Contradiction:** Three different positions on `_comparison-report.md`:
  1. **SKILL (Step 4D):** The ORCHESTRATOR writes `_comparison-report.md` as a separate step AFTER the Weaver completes. It reads the Weaver's Package Compliance section AND the package files AND the HTML, then writes its own comparison report. This is a separate artifact.
  2. **pa-integration-spec.md (Section 8):** States explicitly: "that document IS Output 4 of the Weaver's synthesis. There is no separate `_comparison-report.md` file." Then adds: "The orchestrator CAN extract Output 4 into a standalone `_comparison-report.md` for archival purposes after the pipeline completes, but this is optional post-processing."
  3. **Spec (Section 9, Layer C):** States: "The Weaver produces this as Output 4: Package Compliance within `_pa/synthesis.md`. The orchestrator then extracts it into a standalone `_comparison-report.md` for archival purposes."
- **Impact:** The SKILL instructs the orchestrator to actively WRITE a new comparison report (Step 4D) by reading multiple files and composing a structured document. The pa-integration-spec says this file doesn't separately exist (it IS Output 4). The spec says it's an extraction/copy. These are three different operations. The SKILL's Step 4D is the most dangerous — it asks the orchestrator to do creative synthesis work (composing a report with section-by-section analysis), which contradicts Principle 1 ("The orchestrator handles plumbing, not creativity").
- **Fix:** Align all three. Recommended: follow the pa-integration-spec's position. The orchestrator should extract Output 4 from `_pa/synthesis.md` into `_comparison-report.md` (a copy/extraction, not a composition). Update the SKILL's Step 4D to be a copy operation, not a synthesis operation.

---

### FINDING-C4: Weaver Does NOT Receive HTML Source — Contradiction Between SKILL and Weaver Prompt

- **Severity:** BLOCKING
- **Location:** SKILL-assembled.md lines 587-599 (Weaver receives) vs weaver-prompt.md line 18 vs pa-integration-spec.md lines 296-306
- **Contradiction:** The SKILL's Step 4C lists what the Weaver receives. It includes screenshots, auditor reports, the Weaver protocol, and the 3 package files. It does NOT list `_build-final.html`. However:
  - The weaver-prompt.md line 18 explicitly lists: "5. **The HTML source** — `{OUTPUT_DIR}/_build-final.html` (for CSS-level compliance checks)"
  - The pa-integration-spec.md Section 5 (Edge Case 2, line 296) says: "The Weaver receives the HTML source file in addition to screenshots" and "The orchestrator includes the path to `_build-final.html` in the Weaver's prompt so the Weaver can Read the file."
  - The pa-integration-spec.md Section 4 template assesses certain sections from "HTML source" (lines 300-306).
- **Impact:** If the orchestrator follows the SKILL literally, it will NOT give the Weaver the HTML source. But the Weaver's prompt expects it, and the compliance protocol requires it for CSS-level checks (soul checklist verification, anti-pattern CSS matching, CSS example comparison). Without the HTML source, Sections 0, 3, 5, 6, 7 of the compliance report cannot be fully assessed — only screenshot-based judgment is possible. The Weaver prompt explicitly says "for CSS-level compliance checks."
- **Fix:** Add `_build-final.html` to the SKILL's Step 4C Weaver input list: "**NEW in /research-compose:** The 3 package files for compliance checking... **ALSO NEW:** `{OUTPUT_DIR}/_build-final.html` (the HTML source for CSS-level compliance checks)"

---

### FINDING-C5: Specialist 5 Quality Floor Line Range Mismatch

- **Severity:** LOW
- **Location:** SKILL-assembled.md line 269 vs specialist-5-prompt.md line 162 vs TRIPOD-PIPELINE-SPECIFICATION.md line 279
- **Contradiction:** Three different line count ranges for Specialist 5's output:
  - SKILL: "80 lines minimum" (line 269)
  - Specialist 5 prompt: "Output length: 80-120 lines (dense, structured, no filler — the original 60-80 range was too tight for comprehensive protocol analysis)" (line 162)
  - Spec: "`_specialist-5-protocol.md` (~60-80 lines)" and quality floor says "Consumption protocol defined... Agent-0C's effective patterns identified (minimum 5 patterns)... Template structure proposed... Anti-orphaning principle stated." (line 279-281)
- **Impact:** The spec says 60-80 lines. The prompt says 80-120 (noting it was changed from 60-80). The SKILL says 80 minimum. The spec has not been updated to reflect the change made in the prompt. If someone checks the spec, they'll see a different range. Functionally, the SKILL and prompt agree on the floor (80), so execution should be fine.
- **Fix:** Update the spec's Section 5.6 to say "~80-120 lines" instead of "~60-80 lines" to match the prompt and SKILL.

---

### FINDING-C6: Synthesizer Receives Exemplar Packages — SKILL vs Synthesizer Prompt

- **Severity:** LOW
- **Location:** SKILL-assembled.md lines 311-313 (Step 2C, Synthesizer receives) vs synthesizer-prompt.md lines 430-458 (Format Exemplars)
- **Contradiction:** The SKILL says the synthesizer receives two exemplar packages as file paths:
  - `archive/combination-research/research-package-cd-001.md`
  - `archive/combination-research/research-package-cd-006.md`
  The synthesizer prompt says "Study these two Agent-0C packages as structural models" and provides paths for cd-001 and cd-006. These are consistent in identity (both cd-001 and cd-006).
  However, the synthesizer prompt's "WHAT YOU RECEIVE" section (lines 15-24) lists only 4 items: 5 specialist outputs, _tc-brief.md, content.md, and "This prompt." It does NOT list the exemplar packages in the input specification. They appear later as "Format Exemplars" but are not in the official input list.
- **Impact:** Minor — the synthesizer prompt references the packages as "Read from:" with paths, so the agent will try to read them. But the formal input list doesn't mention them, which could cause confusion about whether the orchestrator needs to explicitly provide these paths or whether the synthesizer finds them from the prompt's "read from" instruction.
- **Fix:** Add the exemplar packages to the synthesizer prompt's "WHAT YOU RECEIVE" section as item 5, matching what the SKILL says.

---

### FINDING-C7: Weaver Receives Builder Reflection — Inconsistency

- **Severity:** MEDIUM
- **Location:** SKILL-assembled.md line 599 (Weaver does NOT receive) vs builder-pass-3-prompt.md line 288 vs weaver-prompt.md lines 22-25
- **Contradiction:**
  - The SKILL says the Weaver does NOT receive "The conviction brief or builder reflection" (line 599).
  - Builder Pass 3 prompt says: "This reflection feeds into the PA evaluation phase. The weaver reads it alongside auditor reports to understand builder intent vs auditor perception." (line 288)
  - The weaver prompt says the Weaver does NOT receive "Builder reflection or decisions files" (line 23).
- **Impact:** The builder Pass 3 prompt tells the builder that the Weaver WILL read the reflection. This is misleading — the Weaver explicitly does NOT receive it (confirmed by both the SKILL and the Weaver prompt). The builder might write the reflection differently if they knew the Weaver doesn't see it. However, the reflection is still useful — the refine builder reads it (SKILL line 687).
- **Fix:** Remove or rewrite builder-pass-3-prompt.md line 288. Replace with: "This reflection feeds into the REFINE phase. If the build enters fix cycles, the refine builder reads it to understand your intent and unresolved tensions."

---

### FINDING-C8: PA Auditor Question Assignment — 20 Questions Referenced, Only 20 Listed

- **Severity:** LOW
- **Location:** SKILL-assembled.md lines 562-566 vs pa-auditor-prompt.md line 39
- **Contradiction:** The SKILL lists 20 PA questions (E-01 through E-20) distributed across 5 auditors, 4 each. The PA auditor prompt contains a placeholder: "{ORCHESTRATOR: Insert the 4 assigned questions here based on auditor number}". This is correct — the orchestrator must inject the specific questions.
  However, the pa-auditor-prompt.md does NOT contain the actual text of any of the 20 PA questions (E-01 through E-20). It only has the placeholder. The SKILL says to "Read the PA auditor prompt from `~/.claude/skills/research-compose/prompts/pa-auditor-prompt.md`" — but this prompt alone is insufficient because it contains no questions.
  The SKILL also references the PA skill: "A STRIPPED version of the PA skill containing ONLY: The One Rule, Three Laws... Their assigned questions (NOT all 20)." The actual question text lives in `~/.claude/skills/perceptual-auditing/SKILL.md`.
- **Impact:** The orchestrator needs to extract specific questions from the PA skill AND insert them into the prompt. The SKILL describes what to include (lines 555-559) but doesn't provide the exact extraction mechanism. If the orchestrator can't find `~/.claude/skills/perceptual-auditing/SKILL.md` or doesn't know how to extract individual questions from it, the auditors will receive no questions.
- **Fix:** Consider including the 20 question texts directly in the pa-auditor-prompt.md (grouped by auditor) or in the SKILL itself, so the orchestrator doesn't need to parse an external skill file. At minimum, add explicit extraction instructions to the SKILL.

---

### FINDING-C9: Spec Phase Numbering vs SKILL Phase Numbering

- **Severity:** LOW
- **Location:** TRIPOD-PIPELINE-SPECIFICATION.md Section numbering vs SKILL-assembled.md phase numbering
- **Contradiction:** The spec uses numbered sections for phases:
  - "4. PHASE 1: DERIVE" (Section 4 = Phase 1)
  - "5. PHASE 2: RESEARCH" (Section 5 = Phase 2)
  - "6. PHASE 3: BUILD" (Section 6 = Phase 3)
  - "7. PHASE 4: EVALUATE" (Section 7 = Phase 4)
  - "8. PHASE 5: REFINE" (Section 8 = Phase 5)
  The SKILL uses Phases 0-5 (with Phase 0 = SETUP). The spec doesn't have a Phase 0 as a numbered section.
- **Impact:** Minor confusion if cross-referencing. A reference to "Phase 1" is unambiguous in both documents. But the spec's section numbers (4-8 for phases 1-5) could cause confusion during implementation.
- **Fix:** No action needed. This is cosmetic. Both documents clearly label phase names.

---

### FINDING-C10: Synthesizer Log Location — Instrumentation Spec vs Synthesizer Prompt

- **Severity:** MEDIUM
- **Location:** instrumentation-spec.md line 60 vs synthesizer-prompt.md lines 555-620
- **Contradiction:** The instrumentation spec says the Synthesizer's log goes at the "Footer of `_package-pass-3.md` (last file it writes)." The synthesizer prompt shows Agent Log footers on ALL THREE package files — `_package-pass-1.md`, `_package-pass-2.md`, and `_package-pass-3.md` each have their own Agent Log section (see the output format templates at lines 555-620 of the synthesizer prompt).
- **Impact:** If the Synthesizer follows its prompt, it writes 3 logs (one per file). The instrumentation spec expects only 1 log (on pass-3). This means:
  1. The pass-1 and pass-2 logs consume token budget that the instrumentation spec doesn't account for (~15 lines x 2 = 30 extra lines across 2 files).
  2. The instrumentation spec's Layer A log list becomes incomplete — it says "Synthesizer: Footer of `_package-pass-3.md`" but the actual output has logs on all 3 files.
  This is not a functional problem (more logs is better for diagnostics) but it's an inconsistency.
- **Fix:** Update instrumentation-spec.md line 60 to: "Synthesizer: Footer of each `_package-pass-N.md` file (3 logs total)".

---

### FINDING-C11: Builder Pass 1 Token Count Mismatch

- **Severity:** LOW
- **Location:** SKILL-assembled.md line 383 (tokens.css = 124 lines) vs builder-pass-1-prompt.md line 21 (tokens.css = "65 CSS custom properties")
- **Contradiction:** The SKILL describes tokens.css as "124 lines." The builder Pass 1 prompt describes tokens.css as containing "65 CSS custom properties." These are not contradictory per se (124 lines can contain 65 custom properties), but the different framings could confuse an implementer checking consistency.
- **Impact:** Minimal. The file is the same file. The SKILL correctly provides the line count for loading purposes; the prompt correctly describes the content for the builder's context.
- **Fix:** No action needed. Both descriptions are accurate.

---

### FINDING-C12: Refine Builder Reading Order — SKILL vs Refine Prompt

- **Severity:** MEDIUM
- **Location:** SKILL-assembled.md lines 680-688 (Step 5B) vs refine-builder-prompt.md lines 10-24
- **Contradiction:** The SKILL says the refine builder receives, in this order:
  1. `_build-final.html` (current page)
  2. `_pa/synthesis.md` (Weaver's creative direction)
  3. Relevant package file(s)
  4. `_builder-reflection.md`

  The refine builder prompt specifies a DIFFERENT reading order:
  1. Weaver's Creative Direction (READ FIRST)
  2. Relevant Research Package section(s) (READ SECOND)
  3. Specific gaps from the Weaver (READ THIRD)
  4. Builder Reflection (READ FOURTH)
  5. Current HTML (READ LAST)

  The prompt explicitly says "WHY THIS ORDER: Creative direction FIRST... HTML LAST." But the SKILL lists HTML first in the agent's received inputs.
- **Impact:** The SKILL describes what the orchestrator PROVIDES (file listing order). The prompt describes what the builder should READ FIRST (reading order). These are different things — provision order vs consumption order. However, if the orchestrator follows the SKILL and puts `_build-final.html` first in the prompt, it gets primacy position in the transformer's attention, contradicting the refine builder prompt's explicit instruction to read creative direction first.
- **Fix:** Reorder the SKILL's Step 5B input list to match the prompt's reading order: synthesis.md first, package file(s) second, builder-reflection third, _build-final.html last. The SKILL should match the prompt's intended reading order since the orchestrator controls what goes into the agent's context.

---

### FINDING-C13: Refine Builder Does Not Receive Comparison Report Gaps

- **Severity:** MEDIUM
- **Location:** SKILL-assembled.md lines 680-702 vs refine-builder-prompt.md lines 17-19 vs pa-integration-spec.md lines 212-218
- **Contradiction:** The pa-integration-spec explicitly says the fix builder receives:
  1. Weaver's Creative Direction (Output 2)
  2. Relevant package section(s)
  3. **Weaver's specific gaps — extracted from Output 4, presented as: "The research package instructed X. The build shows Y instead. Close this gap."**
  4. The current HTML

  The refine builder prompt expects (line 17-19): "Specific gaps from the Weaver — READ THIRD. Each gap is stated as: 'The research package instructed X. The build shows Y instead. Close this gap.'"

  But the SKILL's Step 5B does NOT instruct the orchestrator to extract specific gaps from Output 4 and present them in this format. The SKILL says the agent receives the synthesis.md file (full), not extracted gaps. The orchestrator would need to parse Output 4, extract individual gaps, and reformat them — a creative/parsing operation that the SKILL doesn't describe.
- **Impact:** The refine builder expects pre-formatted gap statements ("instructed X, build shows Y, close this gap"). But the SKILL just gives it the full synthesis.md file. The refine builder would need to find and extract these gaps itself, which adds cognitive load and may result in missed gaps.
- **Fix:** Add explicit instructions in the SKILL's Step 5B for the orchestrator to extract gaps from Output 4 of `_pa/synthesis.md` and format them as gap statements in the refine builder's prompt. Or update the refine builder prompt to say "Read synthesis.md and extract gaps yourself."

---

### FINDING-C14: SKILL Step 4D "PA Confirmation" Field Has No Source

- **Severity:** LOW
- **Location:** SKILL-assembled.md lines 629-634 (comparison report format)
- **Contradiction:** The SKILL's Step 4D comparison report template includes a field: "PA confirmation: {did auditors flag this gap?}" for each section. This requires the orchestrator to cross-reference the Weaver's Output 4 (package compliance) against individual auditor reports to determine if auditors independently flagged the same gaps.
  However, the Weaver's Output 4 format (from weaver-prompt.md and pa-integration-spec.md) does NOT include a "PA confirmation" field. The Weaver assesses compliance from package vs build, and independently synthesizes auditor reports in Outputs 1-3. The connection between "this gap" and "this auditor finding" is not made by the Weaver.
- **Impact:** If the orchestrator is writing the comparison report (per the SKILL), it would need to read all 5 auditor reports, understand their findings, and cross-reference against package gaps. This is substantial analytical work — not plumbing. It also means the orchestrator must have all auditor reports in context, adding context pressure.
- **Fix:** Either remove the "PA confirmation" field from the comparison report template (simplify to just the Weaver's compliance data), or instruct the Weaver to include PA confirmation in Output 4 (it already has auditor reports available).

---

### FINDING-C15: Package Section Count — "Sections 0-8" = 9 Sections, But Section 9 Exists

- **Severity:** LOW
- **Location:** weaver-prompt.md line 68 ("For each package section (0 through 8, skipping Section 9)"), pa-integration-spec.md line 181 ("Sections fully followed: [N]/9")
- **Contradiction:** There are 10 sections total (0, 1, 2, 3, 4, 5, 6, 7, 8, 9). The compliance report covers Sections 0-8 (9 sections), skipping Section 9. The summary says "[N]/9" — which is correct for 9 assessed sections. No real contradiction here, but the naming is potentially confusing: "9 sections" are assessed, but Section 9 (the 10th section) is the one skipped. A reader might think "9/9" means "all sections" when actually one section (Section 9) is intentionally excluded.
- **Impact:** Minimal. The instructions are clear that Section 9 is skipped. The "/9" denominator is correct.
- **Fix:** No action needed. Could add a clarifying note: "9 of 10 sections assessed (Section 9: Consumption Protocol is process-oriented and not assessable from output)."

---

### FINDING-C16: Specialist 4 Quality Floor — SKILL vs Prompt

- **Severity:** LOW
- **Location:** SKILL-assembled.md line 248 vs specialist-4-prompt.md lines 349-356
- **Contradiction:**
  - SKILL: "Quality floor: 60 lines minimum. Soul checklist (all non-negotiables). 6+ anti-patterns risk-profiled..."
  - Specialist 4 prompt: "Total output: 60-80 lines (dense — every line carries information)." and "At least 8 conventions with FULL REASONING extracted" and "At least 6 risk-profiled for THIS build"
  The prompt additionally requires "At least 5 freedom areas mapped" (Category 4: Creative Territory) and "At least 8 conventions with reasoning." These requirements are NOT mentioned in the SKILL's quality floor summary for S4.
- **Impact:** The SKILL's quality floor for S4 is incomplete — it mentions only 2 of 5 quality requirements from the prompt. The orchestrator validates against the SKILL's floor (60 lines, soul checklist, 6+ anti-patterns). It would miss checking for the 8+ conventions and 5+ freedom areas that the prompt requires.
- **Fix:** Update the SKILL's S4 quality floor to include all requirements: "60 lines minimum. Soul checklist complete. 8+ conventions with reasoning. 6+ anti-patterns risk-profiled. 5+ creative territory areas mapped."

---

### FINDING-C17: Specialist Output Filenames — Specialist 3 Edge Case

- **Severity:** LOW
- **Location:** SKILL-assembled.md lines 279 ("_specialist-{N}-*.md") vs specialist-3-prompt.md line 207
- **Contradiction:** The SKILL's validation step says "Verify file exists: {OUTPUT_DIR}/_specialist-{N}-*.md" using a glob pattern. Specialist 3's prompt says to write output to: "_specialist-3-casestudies.md". This matches. All specialist output filenames are consistent:
  - S1: `_specialist-1-findings.md` (SKILL line 173, prompt line 15)
  - S2: `_specialist-2-validated.md` (SKILL line 196, prompt line 17)
  - S3: `_specialist-3-casestudies.md` (SKILL line 223, prompt line 207)
  - S4: `_specialist-4-constraints.md` (SKILL line 247, prompt line 289)
  - S5: `_specialist-5-protocol.md` (SKILL line 268, prompt line 188)
  All consistent. No finding here — marking as verified consistent.
- **Impact:** None.
- **Fix:** None needed.

---

### FINDING-C18: Refine Builder — Missing Fix Phrasing Integration

- **Severity:** LOW
- **Location:** SKILL-assembled.md lines 697-698 vs refine-builder-prompt.md
- **Contradiction:** The SKILL says: "Fix feedback phrasing: Use GENERATIVE language from the Weaver's creative direction: 'The opening zone wants more warmth' not 'Fix PA-03 score.' Feed the Weaver's AMPLIFY/RELEASE/DEEPEN items as creative direction."
  The refine builder prompt does not contain the phrase "PA-03 score" or any reference to PA scores. This is consistent — the prompt uses generative language. The SKILL's instruction here is addressed to the ORCHESTRATOR (how to phrase feedback when spawning the refine builder), not to the refine builder itself.
- **Impact:** None — the instruction is correctly targeted at the orchestrator.
- **Fix:** None needed.

---

### FINDING-C19: Prompt Path Convention — `~/.claude/skills/research-compose/prompts/` vs Actual Location

- **Severity:** BLOCKING
- **Location:** SKILL-assembled.md lines 112, 170, 194, 220, 244, 265, 317, 393, 428, 460, 578, 602, 696 — all prompt path references
- **Contradiction:** Every prompt reference in the SKILL uses the path pattern: `~/.claude/skills/research-compose/prompts/{prompt-name}.md`. For example:
  - "Read the TC agent prompt from `~/.claude/skills/research-compose/prompts/tc-derivation.md`"
  - "Read the prompt from `~/.claude/skills/research-compose/prompts/specialist-1-prompt.md`"

  But the prompts currently live at: `ephemeral/tripod-pipeline-build/prompts/{prompt-name}.md` (their build location). They have NOT yet been installed to `~/.claude/skills/research-compose/prompts/`.

  The SKILL is being assembled for installation at `~/.claude/skills/research-compose/SKILL.md`. When it IS installed, the prompts need to be co-located at `~/.claude/skills/research-compose/prompts/`. If the skill is installed but the prompts are not copied to that path, EVERY agent spawn will fail because the orchestrator cannot find the prompt files.
- **Impact:** BLOCKING at deployment time. The SKILL will reference 13 prompt files that don't exist at the referenced paths unless they are explicitly installed alongside the SKILL.
- **Fix:** This is an installation/deployment concern. The build process must copy all 13 prompt files to `~/.claude/skills/research-compose/prompts/` when installing the SKILL. Document this in the SKILL or create an install script. Alternatively, use relative paths from the SKILL's location (e.g., `prompts/tc-derivation.md` relative to the SKILL file's directory).

---

### FINDING-C20: Builder Pass 3 — Sub-Perceptual Letter-Spacing Threshold Inconsistency

- **Severity:** MEDIUM
- **Location:** builder-pass-1-prompt.md line 299 vs builder-pass-3-prompt.md line 121
- **Contradiction:**
  - Builder Pass 1 prompt says: "No sub-perceptual values: letter-spacing must be >= 0.025em" (line 299)
  - Builder Pass 3 prompt says: "No letter-spacing < 0.025em" (line 232, under Perceptual Minimum checklist)

  These are CONSISTENT with each other. However, cross-referencing with the MEMORY.md context: "MINIMUM PERCEPTUAL DELTAS: ... letter-spacing >= 0.5px" — 0.025em at 16px body = 0.4px, which is BELOW the 0.5px threshold documented in the project memory. At 15px body, 0.025em = 0.375px — even further below.
- **Impact:** The threshold in the builder prompts (0.025em) may be lower than what's actually perceptible (0.5px from MEMORY.md). This means builders might still produce sub-perceptual letter-spacing that technically passes the 0.025em check. Not a direct internal consistency failure between pipeline files, but worth noting as a potential threshold that's too lenient.
- **Fix:** Consider raising the threshold to 0.03em or 0.035em to ensure perceptibility at 15-16px body sizes.

---

### FINDING-C21: Weaver Protocol Source — PA Skill Reference

- **Severity:** LOW
- **Location:** SKILL-assembled.md line 590 vs weaver-prompt.md
- **Contradiction:** The SKILL says the Weaver receives "The Weaver protocol from PA skill: `~/.claude/skills/perceptual-auditing/SKILL.md` (Section: 'THE WEAVER: CREATIVE SYNTHESIS')". This implies the orchestrator needs to extract a SECTION from the PA skill and provide it to the Weaver.
  But the weaver-prompt.md is a standalone prompt file that already contains all the Weaver's instructions. The Weaver prompt (line 13) lists "The Weaver protocol" as an input, but the prompt itself IS the protocol — it doesn't need the PA skill's section too.
  The question is: does the orchestrator provide BOTH the weaver-prompt.md AND the PA skill section? Or just the weaver-prompt.md?
- **Impact:** If the orchestrator provides both, there could be redundancy or minor conflicts between the standalone weaver prompt and the PA skill's Weaver section. If it provides only the weaver-prompt.md, the reference to the PA skill in the SKILL is misleading.
- **Fix:** Clarify in the SKILL: the weaver-prompt.md IS the Weaver's complete protocol (it was written to be self-contained). Remove or clarify the reference to the PA skill section. The orchestrator should use weaver-prompt.md as the sole Weaver prompt.

---

### FINDING-C22: Spec Lists Layer 6 as 7 Files (3,994 lines) But SKILL Routes Only Partial Layer 6

- **Severity:** LOW
- **Location:** TRIPOD-PIPELINE-SPECIFICATION.md lines 556-564 (Layer 6: 7 files) vs specialist assignments in the SKILL
- **Contradiction:** The spec's Layer 6 (Synthesis & Evaluation) lists 7 files totaling 3,994 lines:
  1. R5-EVALUATION-MATRIX.md (706)
  2. 09-CD-SYNTHESIS-BRIEFING.md (646)
  3. OD-SYNTHESIS.md (672)
  4. AD-SYNTHESIS.md (306)
  5. OD-AUDIT-SYNTHESIS.md (522)
  6. AD-AUDIT-SYNTHESIS.md (496)
  7. DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md (646)

  The SKILL routes files 1 to Specialist 1 (Layer 6a), files 2-4 to Specialist 2 (Layer 6b), and files 5-7 to NO ONE. The SKILL's specialist file assignments in Phase 2 do NOT include OD-AUDIT-SYNTHESIS.md, AD-AUDIT-SYNTHESIS.md, or DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md.
- **Impact:** 1,664 lines of audit synthesis data are not read by any specialist. These files contain perceptual audit findings from prior builds — potentially valuable for informing this build's PA approach or for identifying common audit failure patterns. However, the spec's Section 10 lists them as part of the knowledge base but the file routing map (Section 14) does not explicitly assign them to any specialist either.
- **Fix:** Either assign files 5-7 to Specialist 2 (who already handles provenance/validation data) or document the exclusion as intentional. If the files are not relevant for per-build curation, remove them from the knowledge base listing or mark them as "not routed."

---

### FINDING-C23: Spec Total Knowledge Base — 57 Files / 26,528 Lines vs Actual Routing

- **Severity:** LOW
- **Location:** TRIPOD-PIPELINE-SPECIFICATION.md line 7 ("26,528 lines across 57 files"), SKILL-assembled.md line 8 (same claim)
- **Contradiction:** The spec lists 11 layers totaling the knowledge base. Layer 10 (Current Pipeline Vocabulary, 1,053 lines, 4 files) is explicitly described as "What the builder gets TODAY — the compressed derivatives. REPLACED by research package." These files are NOT routed to any specialist. Additionally, Layer 6 has 3 unrouted files (Finding C22). And the 18 validated exploration HTML files (mentioned at line 607 of the spec) are not routed either.
  So while 57 files / 26,528 lines is the total knowledge base, the specialists collectively read ~24,525 lines across ~46 files (as the spec notes in the overview table line 55). The "26,528 lines across 57 files" claim in the SKILL's description is technically the total knowledge base size, not the amount traversed. The SKILL line 8 says "curated selections from all 57 source files" — but the specialists don't read all 57.
- **Impact:** Minor marketing discrepancy. The SKILL says "all 57 source files" but specialists read ~46. Not a functional issue.
- **Fix:** Change the SKILL description to "curated selections from the 57-file accumulated knowledge base" (avoids the "all 57" claim).

---

## Summary

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| BLOCKING | 2 | C4, C19 |
| SIGNIFICANT | 2 | C2, C3 |
| MEDIUM | 5 | C1, C7, C10, C12, C13 |
| LOW | 10 | C5, C6, C8, C9, C11, C14, C15, C16, C20, C21 |
| Verified Consistent | 2 | C17, C22/C23 (documented but not failures) |

**Total: 2 BLOCKING, 2 SIGNIFICANT, 5 MEDIUM, 10 LOW**

### The Two BLOCKING Findings

1. **C4 (Weaver missing HTML source):** The SKILL does not instruct the orchestrator to give the Weaver the HTML source file, but the Weaver prompt expects it and the compliance protocol requires it for CSS-level checks. Without this, Output 4 (Package Compliance) cannot assess Sections 0, 3, 5, 6, or 7 from CSS evidence. Fix: add `_build-final.html` to the SKILL's Weaver input list.

2. **C19 (Prompt path references don't exist yet):** Every prompt reference uses `~/.claude/skills/research-compose/prompts/` which is the installation path, not the build path. If prompts aren't installed alongside the SKILL, every agent spawn fails. Fix: document the installation requirement or adjust paths.
