# Wave 5: Final Review

**Reviewer:** Final Opus reviewer
**Date:** 2026-03-02
**Files reviewed:** SKILL-assembled.md (842 lines, then re-read at 829 lines after post-review edits) + 13 prompt files (3,428 lines) + wave-3/wave-4 checkpoints

---

## Fix Verification (18/18)

### BLOCKING Fixes (7/7)

| ID | Status | Evidence |
|----|--------|----------|
| C4 | VERIFIED | Weaver prompt line 18: `_build-final.html` listed in Weaver inputs. SKILL line 591: `{OUTPUT_DIR}/_build-final.html` in Weaver receive list. |
| C19 | VERIFIED | All 10 SKILL agent spawn instructions use "pass the file path to the agent in its task description. The agent reads it via the Read tool -- do NOT read the full prompt into your own context." SKILL lines 187, 208, 233, 255, 274, 327, 399, 432, 462, 697. No "read and include" pattern remains. |
| R01 | VERIFIED | SKILL lines 16-23: CONTEXT RECOVERY section present at top. Lines 20-22: three context management rules (don't read prompts, prefer Bash checks, only read routing-critical files). All agent spawns pass paths not contents. |
| R02 | VERIFIED | SKILL lines 492, 498, 541, 717, 722: All server management uses `lsof -ti:8080 | xargs kill -9 2>/dev/null || true`. Line 498: explicit note that `$!` does NOT persist between Bash calls. Line 496: curl verification step added. |
| R03 | VERIFIED | SKILL lines 715-722: Full server start/stop protocol inlined in Phase 5 Step 5E (REFINE). Includes kill, start, sleep, re-capture, and kill again. |
| R04 | VERIFIED | SKILL line 656: COST WARNING with explicit user confirmation before first fix cycle. Cost estimate per cycle ($8-16) and total ($16-32) documented. |
| Q01 | VERIFIED | SKILL lines 359-363: Structural uniqueness spot-check in Step 2D synthesizer validation. Requires at least 2 mechanism rationales to reference specific content features, not just "for this article." |

### SIGNIFICANT Fixes (11/11)

| ID | Status | Evidence |
|----|--------|----------|
| C2 | VERIFIED | TRIPOD-PIPELINE-SPECIFICATION.md line 725: "Maximum 2 fix cycles." SKILL line 654: "Maximum 2 fix cycles." SKILL line 36: "Max 2 cycles." Grep confirms zero instances of "Maximum 3" in any active file. |
| C3 | VERIFIED | SKILL lines 623-638: Step 4D explicitly states comparison report = EXTRACT/COPY from synthesis.md Output 4. "This is a COPY operation, not a composition -- do NOT write your own analysis." |
| C7 | VERIFIED | builder-pass-3-prompt.md line 288: "the refine builder reads it" (was "Weaver reads it"). |
| C12 | VERIFIED | SKILL lines 685-690: Refine builder input order is (1) synthesis.md FIRST, (2) relevant package file(s) SECOND, (3) gap statements THIRD, (4) builder-reflection.md FOURTH, (5) _build-final.html LAST. Synthesis (creative direction) is in primacy position, HTML is last. |
| Q02 | VERIFIED | synthesizer-prompt.md lines 110-149: Section 1 explicitly includes "Zone Architecture Overview" with zone count, density progression, ASCII density diagram, and key spacing. Lines 149: "CRITICAL: This zone overview MUST be included in Section 1." Also reflected in SKILL lines 333-335. |
| Q03 | VERIFIED | builder-pass-1-prompt.md line 302: "You have creative authority on HOW, not WHETHER." Full paragraph reframes authority as creative interpretation of HOW to deploy mechanisms, not WHETHER to deploy them. |
| Q10 | VERIFIED | synthesizer-prompt.md lines 184-191: Novelty markers [NOVEL]/[STANDARD] required on every mechanism and finding. weaver-prompt.md lines 91-96: Weaver tracks NOVEL vs STANDARD compliance separately. SKILL line 640 area: comparison report tracks novelty. |
| R05 | VERIFIED | SKILL line 60: "If an agent spawn fails (error, timeout, empty output), wait 30 seconds and retry once. If the retry also fails, log the failure in _pipeline-log.md and proceed without that agent's output." |
| R06 | VERIFIED | synthesizer-prompt.md lines 455-457: Only cd-006 referenced as the exemplar to study. SKILL lines 324-325 still passes both cd-001 and cd-006 as available paths, but the prompt directs the agent to study only cd-006. See note in Internal Consistency section. |
| R07 | VERIFIED | SKILL lines 520-522: Blank screenshot recovery protocol. File-size check (< 10KB = potentially blank, > 50KB = valid). If blank: kill/restart server, wait 3s, re-navigate, re-capture. After 2 retries, STOP and report. |
| R09 | VERIFIED | SKILL line 111: "Browser pre-flight: Verify Playwright browser is available by navigating to about:blank. If this fails with a 'browser not installed' error, call browser_install and retry." |
| R10 | VERIFIED | SKILL lines 300-303: "STOP CONDITION: If 3+ specialists produce below-floor output AFTER re-runs, STOP and report to user." |

**All 18 fixes verified: 18/18.**

---

## Internal Consistency

### Prompt File References

**[UPDATED after post-review edits]**

The SKILL's Prompt File Reference table (lines 815-829) now lists all 13 prompt files:
- tc-derivation.md (TC Agent)
- specialist-1-prompt.md through specialist-5-prompt.md
- synthesizer-prompt.md
- builder-pass-1-prompt.md through builder-pass-3-prompt.md
- pa-auditor-prompt.md (PA Auditor)
- weaver-prompt.md (Weaver)
- refine-builder-prompt.md

All 13 prompt files are now referenced both in the table AND inline at their respective agent spawn points:
- TC Agent: SKILL line 137 now references tc-derivation.md
- PA Auditor: SKILL line 572 now references pa-auditor-prompt.md
- Weaver: SKILL line 597 now references weaver-prompt.md

**Previously identified orphan prompt issues (tc-derivation.md, weaver-prompt.md) are RESOLVED.** All prompt files have corresponding SKILL references.

### Prompt File Count

The task description says "14 prompt files" but only 13 exist on disk. The wave-4 checkpoint also says "Prompt files (14)" but lists the same 13 files that exist. This is a counting error in the checkpoint/task description, not a missing file. The actual set of 13 prompt files is complete for the 13 distinct agent roles (TC, 5 specialists, synthesizer, 3 builders, PA auditor, weaver, refine builder).

### Agent Count Verification

SKILL line 38: "Total agents per run: 16-17 (1 TC + 5 specialists + 1 synthesizer + 3 builder passes + 5 PA auditors + 1 weaver + 0-1 refine builder)"

Counting: 1 + 5 + 1 + 3 + 5 + 1 + 0-1 = 16-17. **CORRECT.**

### Fix Cycle Limits

All references to fix cycles now consistently say "Maximum 2":
- SKILL line 36: "Max 2 cycles"
- SKILL line 654: "Maximum 2 fix cycles"
- SKILL line 712: "If fix cycle >= 2, STOP"
- TRIPOD-PIPELINE-SPECIFICATION.md line 725: "Maximum 2 fix cycles"
- No prompt file references fix cycle limits (correct -- prompts don't need this).

### File Path Conventions

All prompt files use `{OUTPUT_DIR}` placeholder consistently. Specialist prompts use absolute paths for source files (e.g., `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R1-DOCUMENTATION-PATTERNS.md`). These absolute paths will break on any machine other than the original developer's. However, the SKILL's prompt reference table notes at line 829: "Installation note: When installing this skill, copy all prompt files to `~/.claude/skills/research-compose/prompts/` alongside SKILL.md. Update paths below to match the installed location." **The source file paths in specialist prompts (not prompt paths) are a separate concern -- they reference the design system files, which must exist at specific absolute paths. This is an inherent limitation, not a bug.** If the project repo is cloned to a different location, the absolute paths in specialist prompts 1-5 will need updating.

### R06 Synthesizer Exemplar Inconsistency

SKILL lines 323-325 pass both cd-001 AND cd-006 paths to the synthesizer agent. But the synthesizer prompt (line 455-457) instructs the agent to study only cd-006 as the exemplar. The SKILL should pass only cd-006 to match the R06 fix intent of reducing context load. As-is, the synthesizer agent receives two paths but the prompt only tells it to read one -- the extra path is harmless noise but unnecessary context. **Severity: LOW.**

---

## New Contradictions

### No New Contradictions from Wave 4 Fixes

Checked each fix for secondary effects:

1. **Q10 Novelty Markers:** The [NOVEL]/[STANDARD] tags are consistently defined in synthesizer-prompt.md (lines 184-191), referenced in weaver-prompt.md (lines 91-96), and tracked in the SKILL's Step 4D comparison report extraction. No conflicts with existing instructions.

2. **Q02 Zone Architecture Overview:** Added to synthesizer Section 1 (lines 110-149). Does not conflict with the full Section 4 Zone Architecture (lines 265-302). The synthesizer prompt explicitly states Section 1's overview is "condensed from Section 4" and notes its purpose: "the Pass 1 builder NEEDS this to create zones correctly." No redundancy conflict -- it is intentional duplication for rotation split.

3. **Q03 Creative Authority Reframe:** builder-pass-1-prompt.md line 302 says "creative authority on HOW, not WHETHER." This is consistent with the recipe-over-checklist philosophy throughout. No other prompt contradicts this.

4. **C12 Refine Builder Input Reorder:** SKILL lines 685-690. synthesis.md is first, HTML is last. This does not conflict with refine-builder-prompt.md lines 9-24, which independently specify the same reading order: Weaver's Creative Direction FIRST, HTML LAST.

5. **R05 Agent Retry:** SKILL line 60. The retry protocol is a top-level instruction that applies to ALL agent spawns. It does not conflict with the per-specialist re-spawn logic in Step 2B (lines 294-298), which is about quality-floor failures, not spawn failures. Different failure modes, different responses.

No new contradictions found.

---

## Completeness

### Placeholder Markers

Grep for TODO, FIXME, RETHINK, PLACEHOLDER, XXX across SKILL and all 13 prompts: **ZERO found.**

### Entry/Exit Conditions by Phase

| Phase | Entry Condition | Exit Condition | Clear? |
|-------|----------------|----------------|--------|
| 0 SETUP | Content file exists | Files loaded, dirs created, browser verified | YES |
| 1 DERIVE | Phase 0 complete | _tc-brief.md exists, > 50 lines, 6 sections, definitive metaphor, 3+ waypoints | YES |
| 2 RESEARCH | Phase 1 complete | All specialist outputs exist and meet quality floors; all 3 package files exist and >= 100 lines | YES |
| 3 BUILD | Phase 2 complete | _build-final.html exists, > 1KB, has `<style>`, has Google Fonts, self-contained; _builder-reflection.md exists | YES |
| 4 EVALUATE | Phase 3 complete | synthesis.md has verdict; comparison-report.md extracted | YES |
| 5 REFINE | Verdict = REFINE | SHIP verdict or 2 fix cycles completed | YES |

All phases have clear entry/exit conditions.

### Output Specifications

Every prompt file specifies its outputs clearly:
- tc-derivation.md: `{OUTPUT_DIR}/_tc-brief.md`
- specialist-1 through 5: Output file names specified
- synthesizer: Three files clearly named
- builder passes 1-3: HTML + decisions/reflection files clearly named
- pa-auditor: `{OUTPUT_DIR}/_pa/auditor-{N}.md`
- weaver: `{OUTPUT_DIR}/_pa/synthesis.md`
- refine-builder: `{OUTPUT_DIR}/_fixes/fix-{N}-page.html` + `fix-{N}-feedback.md`

---

## Installation Readiness

### Path Analysis

The SKILL currently uses `ephemeral/tripod-pipeline-build/prompts/` as the prompt file path prefix (lines 815-829). The installation note at line 813 says to copy to `~/.claude/skills/research-compose/prompts/` and update paths. **This means the SKILL is NOT immediately installable -- a find-and-replace of prompt paths is required at installation time.**

This is documented and intentional (line 813), but worth noting: there are 13 path references in the Prompt File Reference table that need updating, plus inline references in Phase 1, Phase 2A (specialist spawns), Phase 3 (builder spawns), Phase 4 (PA + Weaver), and Phase 5 (refine builder).

### Self-Containment

The SKILL depends on:
1. **External skills:** `~/.claude/skills/tension-composition/SKILL.md` (for TC derivation), `~/.claude/skills/perceptual-auditing/SKILL.md` (for PA protocol). These must exist at install time.
2. **Design system files:** 57 source files at specific absolute paths under the project directory. These are the knowledge base being curated.
3. **Tools:** Playwright MCP (browser_resize, browser_navigate, browser_take_screenshot, browser_evaluate, browser_install), Agent tool, Read tool, Bash tool.
4. **Infrastructure:** Python3 (for HTTP server), port 8080 available.

The SKILL is NOT a standalone portable artifact -- it is tightly coupled to the design system repository and the two prerequisite skills. This is by design (it orchestrates curation of a specific 26,528-line knowledge base).

### Hardcoded Paths That Need Updating

1. **Prompt file paths (13 references):** `ephemeral/tripod-pipeline-build/prompts/` -> `~/.claude/skills/research-compose/prompts/`
2. **Specialist source file paths (in prompt files):** Absolute paths to `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/...` -- these are references to the knowledge base, not the skill itself. They will need updating if the project directory changes.

### Orphaned Prompt Files

**RESOLVED after post-review edits.** All 13 prompt files are now referenced by the SKILL in both the Prompt File Reference table and at their respective agent spawn points.

---

## Issues Found (Ordered by Impact)

### HIGH Impact

None. All BLOCKING and SIGNIFICANT fixes verified. Core pipeline flow is coherent.

### MEDIUM Impact

None after post-review edits. The two previously identified MEDIUM issues (orphaned tc-derivation.md and weaver-prompt.md) were fixed by the team lead before this review was finalized.

### LOW Impact

1. **R06 partial: SKILL still passes cd-001 to synthesizer.** Lines 324-325 pass both exemplar paths. The prompt only tells the agent to study cd-006. The extra path wastes a small amount of context. **Recommendation:** Remove cd-001 from the SKILL's synthesizer input list.

2. **Prompt file count stated as 14 in wave-4 checkpoint:** Actual count is 13. Minor documentation error -- no runtime impact. **(Note: wave-4-checkpoint.md was updated to say 13 during this review.)**

3. **Absolute paths in specialist prompts:** Specialist prompts 1-5 contain hardcoded absolute paths to design system files (e.g., `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R1-DOCUMENTATION-PATTERNS.md`). These are knowledge base references, not skill infrastructure paths. They will break if the project is cloned to a different directory. **Mitigation:** The SKILL's orchestrator also lists these same paths (SKILL lines 179-206), so the orchestrator would need to pass correct paths regardless. The prompts duplicate this information -- the specialist could use paths provided by the orchestrator instead. But this is an installation concern, not a first-run crash risk.

---

## Post-Review Edits (Applied by Team Lead)

After the initial review was written, the team lead applied 4 edits to SKILL-assembled.md (842 -> 829 lines). These edits addressed the two MEDIUM issues identified in the initial review:

1. **Phase 1 (line 137-139):** TC agent spawn now references `tc-derivation.md` prompt file. The agent receives both the TC skill and the supplementary research-compose-specific instructions. VERIFIED.

2. **Step 4B (line 572):** PA auditor spawn now references `pa-auditor-prompt.md` prompt file. Agents read it via the Read tool. The stripped PA skill sections are still provided alongside. VERIFIED.

3. **Step 4C (line 597):** Weaver spawn now references `weaver-prompt.md` prompt file. The inline duplication of the 4-output list was removed (previously at lines 599-619 in the old version). The Weaver now gets the full prompt with edge-case handling. Output list retained in condensed form (lines 599-603). VERIFIED.

4. **Prompt File Reference table (lines 815-829):** Now lists all 13 prompt files (TC Agent, PA Auditor, and Weaver added). VERIFIED.

All 4 edits are clean. No new contradictions introduced. The SKILL is tighter (829 vs 842 lines) with less duplication.

---

## Verdict

**READY FOR INSTALLATION** with 1 minor recommended improvement:

1. **Remove cd-001 from synthesizer inputs** (SKILL line 324) to match the R06 fix intent. Harmless noise, not a crash risk.

The previously recommended fix (reference tc-derivation.md and weaver-prompt.md) was already applied by the team lead in post-review edits. All 13 prompt files are now referenced.

---

## Confidence Level

**8/10** -- confidence the skill will execute successfully on first run.

**Rationale for 8 (raised from 7 after post-review edits):**
- (+) All 18 fixes verified. Zero placeholder/TODO markers. Phase entry/exit conditions are clear. Context recovery and cost management are solid.
- (+) The 3-pass rotation, 5-specialist + synthesizer architecture, and PA evaluation loop are coherent and well-documented.
- (+) All major runtime hazards (context overflow, PID loss, blank screenshots, port conflicts, spawn failures) have explicit mitigation.
- (+) All 13 prompt files now referenced by the SKILL (post-review edits resolved tc-derivation.md and weaver-prompt.md orphan issues). Agents receive full instructions.
- (+) Inline instruction duplication removed from Weaver section -- cleaner, less chance of stale duplication.
- (-) Real-world context pressure in an 829-line SKILL + multiple file reads + screenshot capture + 16-17 agent spawns is significant. Context compression will occur. The CONTEXT RECOVERY section and pipeline log mitigate this, but first-run context management is always the highest risk.
- (-) The absolute paths to knowledge base files require the project to be at the exact expected location. Any repo relocation without path updates causes failure.
- (-) No live test has been run. The spec-to-runtime gap is where most pipelines discover issues.

**What would raise confidence to 9/10:** A dry run on simple content and verifying the screenshot capture pipeline works end-to-end with current Playwright MCP.
