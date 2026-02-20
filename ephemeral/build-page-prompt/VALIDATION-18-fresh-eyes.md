# Fresh-Eyes Validation: MASTER-EXECUTION-PROMPT.md
# Validator: Fresh Opus instance with ZERO project context
# Date: 2026-02-19

---

## 1. CLARITY: Do I know EXACTLY what to do?

**Rating: 4/5 -- Yes, with minor gaps.**

After reading the prompt, I can state the sequence:

1. Memorize 3 non-negotiables (container 940-960px, warm palette R>=G>=B, perceptible CSS thresholds)
2. Spawn a team of 11 agents across 4 waves (Wave 1: 6 parallel writers, Wave 1.5: 1 PA questions writer, Wave 2: 2 verifiers, Wave 3: conditional fixer, Wave 4: validation runner)
3. Wave 1 writes 4 new files and applies edits to 4 existing files
4. Wave 1.5 writes PA questions file (after PA skill editor completes)
5. Wave 2 cross-references and audits all output
6. Wave 3 fixes BLOCKING issues (if any)
7. Wave 4 runs `/build-page` against Gas Town content, then RESEARCH-SYNTHESIS
8. Report verdict from the verdict table

**The sequence is clear.** The wave dependency chain is stated explicitly AND shown as a graph. Good.

---

## 2. COMPLETENESS: Does the prompt contain ALL the content needed?

**Rating: 3/5 -- CONCERNING gaps.**

The prompt does NOT contain the full content for any of the 4 new files. Instead, it references external DRAFT files:

| File to Write | Content Source | In This Prompt? |
|---------------|---------------|-----------------|
| conventions-brief.md | DRAFT-09 | NO -- external reference |
| gate-runner.md | DRAFT-10 | NO -- external reference |
| flagship-pa-questions.md | DRAFT-11 Section 4 | NO -- external reference |
| build-page SKILL.md | DRAFT-11 Section 5 | NO -- external reference |

The prompt tells agents to READ these external drafts and apply adjustments. **This is architecturally sound** -- the prompt is an orchestration layer, not a content dump. But it means:

- [CONCERNING] If any DRAFT file is missing, corrupted, or has been edited since the prompt was written, the corresponding agent fails silently. There is no content fallback embedded in the prompt itself.
- [CONCERNING] The prompt describes the STRUCTURE of each file (section tables, line counts) but not the CONTENT. I cannot verify whether the drafts actually contain what the prompt claims they contain.
- [MINOR] DRAFT-09 is described as "between the markdown code fences starting with `# Conventions Brief`" -- but what if there are multiple fenced blocks? The instruction could be more precise about which fence.

**For skill edits (23 TC + 16 PA + 11 CLAUDE.md + 9 compositional-core):** The prompt says exact old_string/new_string pairs exist in DRAFT-12 and DRAFT-13. This is appropriate -- embedding 59 edit pairs inline would make the prompt unreadably long. But it means edit execution is fully dependent on those external files being correct.

---

## 3. ACTIONABILITY: Can I execute each step without guessing?

**Rating: 4/5 -- Mostly yes.**

**Strong points:**
- Each agent has: model specified, input files listed in read order, output file path, critical adjustments enumerated
- Edit operations reference exact DRAFT sections with execution order
- Checkpoints after each section provide verification criteria

**Weak points:**
- [CONCERNING] **Agent #3 dependency on Agent #6:** The prompt says Agent #3 "verifies Tier 5 insertion in the PA skill." But Agent #6 is the one doing the PA skill edits. Does Agent #3 verify by READING the file after Agent #6 writes, or by checking against the DRAFT? The verification scope of Agent #3 is ambiguous.
- [MINOR] **Adjustment 5 for conventions brief** says "count words 'must,' 'verify,' 'ensure,' 'fail'" and "if constraint language exceeds 20%." This is a judgment call -- how to count these words, what denominator to use, what counts as "constraint language." Binary rules achieve 100% compliance; this is a judgment rule.
- [MINOR] **Lock Sheet (Step 4.5):** The prompt says "INCLUDE IT as a lightweight step" and describes what it should contain, but the actual format/template is not specified. The agent must design the lock sheet format. This is acceptable for an Opus agent but represents a design decision that could vary across executions.

---

## 4. FILE PATHS: Are all paths complete and unambiguous?

**Rating: 5/5 -- All paths clear.**

| Path | Status |
|------|--------|
| `design-system/pipeline/conventions-brief.md` | Clear, new file |
| `design-system/pipeline/gate-runner.md` | Clear, new file |
| `design-system/pipeline/flagship-pa-questions.md` | Clear, new file |
| `~/.claude/skills/build-page/SKILL.md` | Clear, new file (tilde-expanded) |
| `~/.claude/skills/tension-composition/SKILL.md` | Clear, existing file |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | Clear, existing file |
| `design-system/CLAUDE.md` | Clear, existing file |
| `design-system/compositional-core/CLAUDE.md` | Clear, existing file |
| `extractions/deep/yegge-gas-town-extraction.md` | Clear, validation content |
| `design-system/research/RESEARCH-SYNTHESIS.md` | Clear, validation content |
| `ephemeral/build-page-prompt/_verification/cross-ref-report.md` | Clear, verification output |
| `ephemeral/build-page-prompt/_verification/quality-report.md` | Clear, verification output |
| `ephemeral/build-page-prompt/_verification/validation-report.md` | Clear, verification output |
| All DRAFT source files (DRAFT-09 through DRAFT-13) | Clear paths in `ephemeral/build-page-prompt/` |

No ambiguity. The prompt even calls out the path CORRECTION for conventions-brief (pipeline/ not compositional-core/).

---

## 5. CONFUSION POINTS: Where would I get confused?

1. [CONCERNING] **Agent numbering gap.** The Wave 1 table has agents #1, #2, #4, #5, #6, #7. Agent #3 is in Wave 1.5. This is internally consistent but confusing -- I expected sequential numbering within waves. The gap (no #3 in Wave 1) would momentarily confuse me during TeamCreate.

2. [CONCERNING] **"Agent #6 runs first, Agent #3 runs after" but they are in different waves.** The text says "CONTENTION: Agents #6 and #3 both touch the PA skill." This is CRITICAL but could be missed during skimming. The contention is already handled by the wave structure (1.5 is after 1), but the re-statement is helpful. However, the statement "They MUST NOT run simultaneously" is redundant with the wave design and might cause me to wonder if I'm misunderstanding the dependency.

3. [MINOR] **Section numbering vs Wave numbering.** The prompt has Sections 0-9 for content organization, and Waves 1-4 for team execution. These are different numbering systems that overlap (Section 1 is Team Architecture, Wave 1 is File Writers). Clear enough on careful reading but could trip up a skimmer.

4. [MINOR] **DRAFT-11 has TWO code-fenced blocks** referenced separately (Section 4 for PA questions, Section 5 for SKILL.md). The prompt distinguishes them as "first set" and "second set" -- adequate but not ideal. A more robust reference would name them by their opening content marker.

5. [CONCERNING] **Conventions brief path inconsistency within the prompt itself.** Section 5 (build-page SKILL) says: "Conventions brief path: The builder spawn prompt references `design-system/compositional-core/conventions-brief.md`. Change to `design-system/pipeline/conventions-brief.md`." This means the SOURCE DRAFT has the WRONG path, and the agent must correct it. If the agent misses this adjustment, the built pipeline will reference a non-existent file. This is a single point of failure for the entire pipeline.

---

## 6. MISSING INFORMATION

1. [BLOCKING] **TeamCreate syntax/API.** The prompt says "Use TeamCreate to spawn the /build-page assembly team." But I have NO reference for TeamCreate's API. What parameters does it take? Can I spawn all Wave 1 agents in a single call? Do I specify model per-agent? Do I specify dependencies? The prompt assumes I know how to use TeamCreate.

   **Mitigation:** As a Claude Code agent, I would have access to the TeamCreate tool if it's available in my toolset. But if this prompt is meant for a fresh instance that may or may not have TeamCreate, this is blocking. If TeamCreate is NOT available, the entire team architecture section is unexecutable.

   **UPDATE after reflection:** This prompt is designed for execution by a team lead within Claude Code, which HAS a TaskCreate/TeamCreate system. The prompt correctly assumes the tool is available. Downgrade from BLOCKING to CONCERNING -- a fresh instance would still need to figure out the exact API, but it's an available tool.

2. [CONCERNING] **Agent prompt content.** The prompt specifies what each agent READS and what adjustments to make, but does NOT provide the full prompt text to send to each agent. As team lead, I would need to compose agent prompts from the section content. This is fine for an Opus team lead but introduces a composition step where information could be lost or garbled.

3. [MINOR] **_verification/ directory creation.** The prompt references output to `ephemeral/build-page-prompt/_verification/` but doesn't explicitly say to create this directory. Agents might fail if the directory doesn't exist. Most file-writing tools create intermediate directories, so this is likely fine.

4. [MINOR] **Validation content file existence.** The prompt references `extractions/deep/yegge-gas-town-extraction.md` for Build A. If this file doesn't exist, the validation step fails. No fallback content specified.

---

## 7. TEAM ARCHITECTURE: Do I understand TeamCreate?

**Rating: 3/5 -- Architecture clear, tooling assumed.**

The team structure is VERY well-specified:
- 11 agents total across 4 waves
- Model (Opus vs Sonnet) specified for each
- Dependencies explicit (wave ordering, #6-before-#3 contention)
- Communication protocol stated (file-bus primary, SendMessage only for 4 escalation cases)

What's NOT specified:
- [CONCERNING] The exact TeamCreate API call syntax
- [CONCERNING] Whether I can spawn Wave 1 agents all at once or must do them individually
- [MINOR] Whether agent names must match the role names in the table
- [MINOR] How to monitor agent completion (polling? callbacks? task system?)

---

## 8. ORDERING: Is execution order clear?

**Rating: 5/5 -- Excellent.**

The dependency graph is stated three ways:
1. Textually in Section 1 ("Wave 1 -> 1.5 -> 2 -> 3 -> 4")
2. As an ASCII graph
3. In Section 0 ("Items 1-4 parallel, 5-8 parallel, 9 then 10")

The PA skill contention (#6 before #3) is called out explicitly.

Within-wave parallelism is stated. Cross-wave dependencies are stated. Conditional execution (Wave 3 only if BLOCKING, Build B only if Build A >= 3.0) is stated.

**One minor note:** Section 0 says "Items 1-4 parallel, 5-8 parallel, 9 then 10" referring to the file inventory numbers. Section 1 uses Wave numbers (1, 1.5, 2, 3, 4) and agent numbers (#1-#11). Three numbering systems, all consistent but requiring mental mapping. Clear enough.

---

## 9. SUCCESS BAR: Do I know what "done" looks like?

**Rating: 5/5 -- Unambiguous.**

The prompt specifies:
- All 4 new files exist at correct paths
- All 59 edits applied
- Build A: PA-05 >= 3.5/4 AND Tier 5 >= 6/8 AND 17 blocking gates pass AND zero soul violations AND zero void patterns >= 200px
- Build B (conditional): PA-05 >= 3.0/4 AND 17 blocking gates pass AND SC-09 >= 15 RGB
- Overall verdict from a 4-row truth table (PIPELINE PASS / CONDITIONAL PASS / NEEDS CALIBRATION / PIPELINE FAIL)

This is a BINARY success bar. No judgment required. Excellent.

---

## 10. EDGE CASES

### A gate fails and you need to fix it?
[CONCERNING] **Partially addressed.** The prompt describes Wave 3 (fix-executor, max 2 cycles) for Wave 2 verification failures. But what about VALIDATION BUILD gate failures? Section 8 has the verdict table but doesn't say what to do on PIPELINE FAIL. Do I iterate? Report and stop? The prompt says "If you find yourself writing ABOUT the pipeline instead of BUILDING the pipeline, STOP and BUILD." -- implying action over analysis. But the specific recovery protocol for validation failure is absent.

### A skill edit doesn't match (old_string not found)?
[CONCERNING] **Not addressed.** The prompt says "copy them VERBATIM into the Edit tool" but doesn't specify what to do if the file has been modified since DRAFT-12/13 were written and an old_string doesn't exist. The agent would need to: (a) report to team lead, or (b) adapt the edit. No guidance provided. This is a REALISTIC scenario -- 59 edits across 4 files means even one line-ending difference could cause a match failure.

### The validation build scores below the bar?
[CONCERNING] **Partially addressed.** The verdict table tells me the LABEL (PASS / CONDITIONAL / NEEDS CALIBRATION / FAIL). But it doesn't tell me the NEXT ACTION for each label. PIPELINE PASS = done, clearly. But CONDITIONAL PASS = ship? iterate? NEEDS CALIBRATION = adjust thresholds? rebuild? PIPELINE FAIL = abort? root-cause?

### An agent dies mid-task?
[MINOR] **Not addressed.** No recovery protocol for agent failure. Standard practice would be to respawn with the same prompt, but this isn't stated. For the PA skill contention case (#6 before #3), an Agent #6 failure would block Agent #3 indefinitely with no stated timeout or fallback.

---

## 11. PROMPT LENGTH: At 542 lines, did I skim any sections?

**I did NOT skim -- I read every line.** However, I can identify which sections a less diligent reader WOULD skim:

1. **The gate table in Section 3 (lines 204-212):** Dense table with gate codes. A skimmer would miss the advisory vs blocking distinction and the "Additional" row with DG-3 and DG-4.

2. **The TC skill edit ordering (lines 342-366):** 23 numbered items where the edit numbers are NOT sequential (1,2,3,4,5,22,6,7,8,9,11,12,10,13,14,15,16,17,18,19,20,21,23). This non-sequential ordering is CRITICAL -- TC Edit 22 appears 6th in execution order, TC Edit 10 appears 13th. A skimmer executing edits in numeric order would produce incorrect results.

3. **The conventions brief section table (lines 148-168):** Format column (Conventions / Conventions+recipe / Recipe) would be missed by a skimmer. This determines the TONE of each section, which matters for the 20% constraint language limit.

4. **The checkpoint summary table (lines 520-530):** Would be treated as redundant by a skimmer. It IS mostly redundant but serves as a final verification index.

**Risk assessment:** The non-sequential TC edit ordering (point 2) is the most dangerous skimming target. [CONCERNING]

---

## 12. FORMAT: Recipe or checklist?

**The prompt is predominantly a RECIPE (tells you what to DO).** Breakdown:

| Section | Format | Evidence |
|---------|--------|----------|
| 0: Mission | Recipe | "What you will produce," action table, execution order |
| 1: Team Architecture | Recipe | "Use TeamCreate to spawn," wave structure, dependency graph |
| 2: Conventions Brief | Recipe + Conventions | "Agent reads these sources IN ORDER," 5 critical adjustments |
| 3: Gate Runner | Recipe | "Extract content, write to file, apply adjustments" |
| 4: PA Questions | Recipe | "Write exactly as it appears" |
| 5: Build-Page SKILL | Recipe | "Write content, applying these 6 adjustments" |
| 6: Skill Edits | Recipe | Exact execution order, edit-by-edit |
| 7: CLAUDE.md Edits | Recipe | Exact edit references, verification criteria |
| 8: Validation | Recipe + Checklist | Pass criteria are checklist-style, but build sequence is recipe |
| 9: Recency | Checklist | "You are done when" = completion checklist |
| Checkpoints (all) | Checklist | Binary pass/fail verification items |

**Ratio: ~70% recipe / ~20% checklist / ~10% conventions.** This is a GOOD ratio for agent execution based on the project's own research (recipe = success, checklist = failure).

---

## 13. OVERALL READINESS

**Rating: 4/5 -- Nearly complete, minor issues.**

### BLOCKING Issues (0):
None. The prompt can be executed as-is by an Opus team lead with access to the DRAFT files and TeamCreate.

### CONCERNING Issues (8):

1. **External DRAFT file dependency** -- all content lives in DRAFT-09 through DRAFT-13. If any draft is wrong, the pipeline is wrong. No inline fallback.

2. **Agent #3 verification scope ambiguous** -- does it verify Agent #6's PA edits by reading the file, or by reading the DRAFT?

3. **TeamCreate API not specified** -- assumes the executing instance knows the tool. Reasonable for Claude Code but adds an interpretation step.

4. **Agent prompt composition required** -- team lead must compose prompts from section content. Information loss possible during this step.

5. **Non-sequential TC edit ordering** -- Edit numbers 1,2,3,4,5,**22**,6,7,8,9,**11**,12,**10**,13... A skimmer executing in numeric order produces incorrect results.

6. **Conventions brief path inconsistency** -- DRAFT has wrong path (compositional-core), prompt says to correct to pipeline/. Single point of failure.

7. **Edit match failure protocol absent** -- 59 edits with no guidance on what to do if old_string doesn't match.

8. **Validation failure recovery absent** -- verdict table gives labels but not next actions for non-PASS outcomes.

### MINOR Issues (5):

1. Agent numbering gap (#3 missing from Wave 1 table)
2. Three overlapping numbering systems (file inventory, waves, agent numbers)
3. _verification/ directory creation not explicit
4. Validation content file existence assumed
5. Lock sheet format left to agent design

### Strengths:

- **Three non-negotiables stated 3 times** (Section 0, Section 9, and implicitly in every checkpoint). Recency bias exploited well.
- **Binary success bar** -- no judgment required for pass/fail
- **Wave-based dependency graph** stated in 3 formats (text, ASCII, table)
- **Checkpoints after every section** with binary verification items
- **Recipe format dominant** (70%) -- aligned with project's own finding that recipe > checklist
- **Contention explicitly managed** (#6 before #3)
- **"If you find yourself writing ABOUT the pipeline instead of BUILDING the pipeline, STOP and BUILD."** -- excellent meta-awareness guardrail
- **Threshold values consistent throughout** -- 120px, 0.025em, 15 RGB appear in Sections 0, 2, 3, 5, 7, and 9

### Summary Verdict:

This prompt is **ready for execution** by an Opus team lead familiar with the Claude Code toolset. The 8 CONCERNING issues are real but manageable -- most are edge cases that won't arise in a clean execution. The most dangerous issue is the non-sequential TC edit ordering (#5 above), which should ideally be re-ordered or more prominently flagged.

The prompt's greatest strength is its REDUNDANCY -- the 3 non-negotiables, threshold values, and file paths are restated enough times that missing one occurrence is survivable. Its greatest weakness is its EXTERNAL DEPENDENCIES -- the DRAFT files are load-bearing, and any mismatch between DRAFT content and prompt descriptions would cause silent errors.

**Recommended pre-flight check before execution:**
- Verify DRAFT-09 through DRAFT-13 all exist and contain the referenced content markers
- Verify the 4 existing files to be edited (TC skill, PA skill, 2x CLAUDE.md) have not been modified since the DRAFTs were written
- Verify `extractions/deep/yegge-gas-town-extraction.md` exists for Build A
