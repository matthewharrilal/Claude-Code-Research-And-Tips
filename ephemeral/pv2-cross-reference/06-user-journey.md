# User Journey Cross-Reference: Fire-and-Forget vs. Flagship Approval Gates

**Agent:** user-journey-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference PV2-ARCHITECTURE-DIAGRAM against pv2-user-experience.md, pv2-handoff-protocol.md, and discussion-enrichment.md to resolve the fire-and-forget / always-flagship contradiction.

**Source files read:**
1. `PV2-ARCHITECTURE-DIAGRAM.html` (1,143 lines) -- the rendered architecture
2. `pv2-user-experience.md` (887 lines) -- UX specification for /build-page
3. `pv2-handoff-protocol.md` (709 lines) -- TC-to-builder handoff contract
4. `discussion-enrichment.md` (1,244 lines) -- meta-cognitive discussion strategy
5. `pipeline-v2-architecture.md` (first 200 lines) -- unified architecture decisions

---

## THE CONTRADICTION STATED

The user has expressed three directives that interact tensionally:

| Directive | Source | Implication |
|-----------|--------|-------------|
| **ALWAYS FLAGSHIP** | User instruction | No tier routing. Every page gets full TC pipeline, Opus builder, 9-auditor Mode 4 PA, metaphor derivation, isomorphism table. |
| **FIRE AND FORGET** | User instruction | Give content, walk away, come back to finished HTML + PA report. Zero user interaction during the build. |
| **Input is EXISTING MARKDOWN** | User instruction | Content source is always a markdown file. No URL fetch, no paste, no conversation extraction. |

The diagram (Section 5, Tier Routing table) specifies for Flagship:

> "Mandatory APPROVAL at Phases 0, 1, 3, 4, 8"

The UX spec (pv2-user-experience.md, lines 540-614) describes Flagship as a multi-wave interactive process with 3 user interaction points (content source, tier selection, ship decision) PLUS gate failure conversations.

**These two things cannot coexist.** Fire-and-forget means zero user interaction after invocation. Mandatory approvals at 5 phases means at least 5 user interaction points.

---

## PART 1: WHERE EACH SOURCE STANDS

### PV2-ARCHITECTURE-DIAGRAM.html

The diagram describes the full architecture with tier routing intact. Key Flagship specs:

- **Tier routing:** Automatic classification based on content complexity (line 577-580)
- **TC involvement:** Full Phases 0-3.5 with metaphor derivation (line 587-589)
- **4-wave architecture:** Wave 0 (analysis), Wave 1 (build), Wave 2 (verification), Wave 3 (fix integration) -- lines 888-930
- **Mandatory approvals at 5 phases** (line 836)
- **Expected build time:** 240-400 min (line 872)
- **PA depth:** 9 auditors, all 48 questions, Mode 4 (line 854)

The diagram treats Flagship as a supervised process where the orchestrator coordinates waves and the user (or planner) approves checkpoints.

### pv2-user-experience.md

The UX spec designs an INTERACTIVE command. Even the "default" Middle tier has 3 interaction points:

1. Content source selection (lines 39-68)
2. Tier recommendation acceptance (lines 69-91)
3. Ship/fix/open decision (lines 206-227)

For Flagship specifically (lines 540-614), the UX spec adds:
- Progress display with wave status updates
- Mode 4 PA results displayed inline
- Fix option presented with estimated impact
- User chooses: apply all fixes / show issues / ship as-is

The UX spec's "fire-and-forget" mode doesn't exist. Its closest equivalent is providing the file path inline with the command:

```
/build-page design-system/research/RESEARCH-SYNTHESIS.md
```

...which skips content source selection but still requires tier acceptance and ship decision.

### pv2-handoff-protocol.md

The handoff protocol is ALREADY fire-and-forget at the handoff boundary. Once TC writes `_build-plan.md`, the builder executes autonomously. The handoff validation checklist (Part C, lines 351-381) is a programmatic check, not a user interaction. The builder reads foundation files, validates handoff completeness, and begins building without asking anyone.

The key insight: **the handoff protocol is designed for agent-to-agent autonomy, not user-to-agent interaction.** The "mandatory approvals" in the diagram are approvals BY THE PLANNER AGENT, not by the user.

But reading more carefully, line 379 says:

> "IF ANY REQUIRED FIELD IS MISSING: STOP. Do not build. Report missing field(s) to TC via SendMessage."

This is agent-to-agent escalation, not user escalation. The fire-and-forget model works IF the handoff protocol is robust enough that the builder never needs to escalate to the user.

### discussion-enrichment.md

This file doesn't directly address the user journey, but it surfaces two relevant meta-cognitive points:

1. **Q-03 (lines 265-276):** The middle-tier succeeded with zero inter-agent messaging. The flagship failed with zero messaging. Messaging matters when task complexity exceeds single-agent context. For always-flagship, messaging between TC planner and builder is ESSENTIAL -- but messaging between the BUILD SYSTEM and the USER can be eliminated.

2. **Anti-Pattern 4: The Operational Escape (lines 1028-1042):** "Jumping to the operational recipe without understanding the analysis that produced it recreates the EXACT failure mode the corpus diagnosed." This suggests that skipping human review of the build plan is a risk -- but the risk is mitigated if the BUILD PLAN itself is rich enough (which the handoff protocol ensures).

---

## PART 2: RESOLVING THE CONTRADICTION

### What "Mandatory Approvals" Actually Means

The diagram's "Mandatory APPROVAL at Phases 0, 1, 3, 4, 8" was designed for a SUPERVISED Flagship build where a human or lead agent reviews checkpoints. But this conflates two distinct approval models:

| Model | Who Approves | When Invoked | Purpose |
|-------|-------------|--------------|---------|
| **User Approval** | Human | Traditional Flagship | "Does this match what I wanted?" |
| **Agent Approval** | Planner/Lead agent | Autonomous Flagship | "Does this match the build plan?" |

For fire-and-forget, ALL approvals must be AGENT approvals. The orchestrator or planner agent reviews checkpoints, not the user. This is not the same as eliminating checkpoints -- it's delegating them to the system.

### The Fire-and-Forget Flagship Architecture

Here is what fire-and-forget + always-flagship looks like end-to-end:

```
USER ACTION: /build-page path/to/content.md
(user walks away)

ORCHESTRATOR (autonomous):
  |
  +-- Skip tier classification (ALWAYS Flagship)
  +-- Skip content source prompt (path provided)
  +-- Skip tier acceptance (hardcoded)
  |
  v
WAVE 0: Content Analysis (~30-60 min)
  - TC planner (Opus) runs Phases 0-3.5
  - Metaphor derivation, isomorphism table
  - Outputs _build-plan.md
  - ORCHESTRATOR validates handoff (programmatic, not human)
  - IF FAIL: TC re-runs with fix instructions (no user involved)
  |
  v
WAVE 1: Build Execution (~90-150 min)
  - Opus builder reads recipe + build plan
  - Executes Phases 0-8 sequentially
  - AGENT CHECKPOINTS at Phases 0, 1, 3, 4, 8:
    - Planner agent reviews builder output
    - Planner approves or sends fix instructions via SendMessage
    - (This is the CD-006 pattern: inter-agent communication)
  - Programmatic gates run inline per-phase
  |
  v
WAVE 2: Verification (~30-45 min)
  - Lead captures all screenshots (pre-capture pattern)
  - 9 Opus PA auditors run in parallel (Mode 4)
  - All 48 PA questions answered
  - Weaver synthesizes verdict + PA-05 score
  |
  v
WAVE 3: Fix Integration (IF PA-05 < 3/4, ~30-60 min)
  - Builder applies top 3 blocking fixes
  - Re-runs programmatic gates
  - Quick PA re-check (2 auditors)
  - Maximum 3 fix cycles
  |
  v
WAVE 4: Delivery (autonomous)
  - IF PA-05 >= 3/4: write final HTML + PA report
  - IF PA-05 < 3/4 after 3 cycles: write HTML + PA report + NEEDS_ATTENTION flag
  - Output: HTML file + PA report file at known locations

USER RETURNS: Finds finished HTML + PA report
```

### The Key Design Decisions for Fire-and-Forget

**Decision 1: Eliminate ALL user prompts.** The command is:

```
/build-page path/to/content.md
```

No tier selection (always Flagship). No content source menu (path is the argument). No output path prompt (use deterministic path: `ephemeral/pages/[slug].html`). No ship/fix/open prompt (always auto-fix up to 3 cycles, then deliver whatever we have).

**Decision 2: Replace user approvals with agent approvals.** The 5 checkpoint approvals at Phases 0, 1, 3, 4, 8 become PLANNER AGENT approvals. The planner reads the builder's checkpoint output and either approves or sends fix instructions. This preserves the quality benefit of checkpoints without requiring user presence.

**Decision 3: Auto-fix, don't ask.** When PA identifies issues, the builder automatically applies fixes. When gates fail, the builder automatically corrects. The only time the system stops is after 3 failed fix cycles -- and even then, it delivers what it has with a flag.

**Decision 4: Produce TWO output files, not just the HTML.**

| Output | Path | Contents |
|--------|------|----------|
| **HTML artifact** | `ephemeral/pages/[slug].html` | The finished page |
| **PA report** | `ephemeral/pages/[slug]-pa-report.md` | Full PA-05 score, per-question results, fix history, build stats |

The PA report is the "come back and see what happened" artifact. It tells the user: what was the quality score, what issues were found, what was fixed, what remains.

**Decision 5: Use deterministic output paths.** The user doesn't specify where to put the output. The slug is derived from the content file name:

```
Input:  design-system/research/RESEARCH-SYNTHESIS.md
Output: ephemeral/pages/research-synthesis.html
Report: ephemeral/pages/research-synthesis-pa-report.md
```

---

## PART 3: IS 240-400 MINUTES ACCEPTABLE?

The diagram estimates Flagship build time at 240-400 min (4-6.7 hours). The UX spec estimates 90-180 min. The discrepancy matters.

### Time Breakdown for Fire-and-Forget Flagship

| Wave | Activity | Estimated Time | Parallelizable? |
|------|----------|---------------|-----------------|
| Wave 0 | TC Phases 0-3.5 (metaphor derivation) | 30-60 min | No (sequential) |
| Wave 0 | Handoff validation | 2-5 min | No (depends on Wave 0) |
| Wave 1 | Opus builder Phases 0-8 | 60-120 min | No (sequential phases) |
| Wave 1 | Agent checkpoints (5 reviews) | 15-30 min | Overlaps with build |
| Wave 2 | Screenshot capture | 5-10 min | No (Playwright exclusive) |
| Wave 2 | 9 PA auditors | 15-25 min | Yes (all parallel) |
| Wave 2 | Weaver synthesis | 5-10 min | No (depends on auditors) |
| Wave 3 | Fix integration (if needed) | 20-40 min | No (sequential) |
| Wave 3 | Quick PA re-check | 10-15 min | Partially |
| **Total (no fixes needed)** | | **~130-260 min** | |
| **Total (1 fix cycle)** | | **~160-315 min** | |

The 240-400 min figure from the diagram's tier table is high-end, assuming multiple fix cycles. The realistic range for a well-functioning pipeline is **130-260 min (2.2-4.3 hours).**

### Is This Acceptable?

For fire-and-forget, the wall-clock time is irrelevant to the user's experience. They submit the command and walk away. Whether it takes 2 hours or 4 hours, they're not waiting at a terminal. The only thing that matters is:

1. **Does the output exist when they return?** Yes -- the pipeline runs autonomously.
2. **Is the quality worth the wait?** This is the key question.

The time is spent on activities with proven quality impact:
- Metaphor derivation → structural richness (PA-05 +0.5-1.0 vs no metaphor)
- 9-auditor Mode 4 PA → catches gestalt failures that 2-PA misses
- Fix integration → addresses PA-identified issues before delivery
- Agent checkpoints → prevents "builder can't ask planner" failure (the missing footer)

Dropping any of these to reduce time would sacrifice the quality that justifies always-flagship.

**Verdict: Yes, 130-260 min is acceptable for fire-and-forget.** The user's time cost is ~30 seconds (typing the command). The system's time cost is 2-4 hours of autonomous work. The output is a fully verified HTML page with a PA report.

---

## PART 4: THE END-TO-END USER JOURNEY

### What the User Actually Does

```
Step 1: User types:  /build-page design-system/research/RESEARCH-SYNTHESIS.md
Step 2: User walks away.
Step 3: User comes back (2-4 hours later).
Step 4: User finds two files:
        - ephemeral/pages/research-synthesis.html
        - ephemeral/pages/research-synthesis-pa-report.md
Step 5: User opens the HTML in a browser, reads the PA report.
Step 6: DONE.
```

That's it. Five interactions, three of which are just looking at output.

### What the System Does (Invisible to User)

The full autonomous pipeline, broken into phases:

**PHASE A: Intake (5 seconds)**
- Orchestrator receives path, reads file, counts words, detects content type
- Tier: Flagship (hardcoded)
- Output path: derived from filename

**PHASE B: Content Analysis (30-60 min)**
- Spawns TC planner (Opus)
- TC runs Phases 0-3.5:
  - Phase 0: Content ingestion, word count, content type, arc detection
  - Phase 1: Multi-axis questioning (FEEL / UNDERSTAND / DO / BECOME)
  - Phase 2: Tension derivation
  - Phase 3: Metaphor collapse
  - Phase 3.5: Layout generation (zone architecture, mechanism deployment, isomorphism table)
- TC writes `_build-plan.md`
- Orchestrator runs handoff validation (binary checks per handoff protocol Part C)
- IF validation FAILS: TC re-runs with specific fix instructions (up to 2 retries)

**PHASE C: Build Execution (60-120 min)**
- Spawns Opus builder + planner agent
- Builder reads: operational-recipe.md, _build-plan.md, tokens.css, prohibitions.md, merged-components.css, mechanism-catalog excerpts
- Builder executes 9 phases sequentially:
  - Phase 0: Content analysis + zone architecture (PLANNER CHECKPOINT)
  - Phase 1: HTML skeleton with semantic markup (PLANNER CHECKPOINT)
  - Phase 2: CSS reset + soul enforcement + base typography
  - Phase 3: Zone backgrounds + warm palette (PLANNER CHECKPOINT)
  - Phase 4: Structural borders + dividers + components (PLANNER CHECKPOINT)
  - Phase 5: Typography zones
  - Phase 6: Element-level richness
  - Phase 7: Accessibility + responsive
  - Phase 8: Verification (programmatic self-check) (PLANNER CHECKPOINT)
- Programmatic gates run inline at each phase
- Planner reviews checkpoints and approves/rejects via SendMessage

**PHASE D: Verification (25-45 min)**
- Lead captures screenshots at 1440px, 768px, 480px (pre-capture pattern)
- Disables animations (opacity: 1, animation: none)
- Full scroll-through at each viewport
- Spawns 9 Opus PA auditors in parallel
- Each auditor receives ONLY screenshots + assigned PA questions
- All 48 PA questions answered
- Weaver synthesizes verdict, PA-05 score, fix list

**PHASE E: Fix Integration (0-120 min, 0-3 cycles)**
- IF PA-05 >= 3/4 AND 0 soul violations AND all gates PASS: skip to delivery
- IF PA-05 < 3/4 OR any gate FAIL:
  - Builder applies top 3 blocking fixes
  - Re-runs programmatic gates
  - Quick PA re-check (2 fresh auditors)
  - Repeat up to 3 cycles

**PHASE F: Delivery (2 min)**
- Writes final HTML to `ephemeral/pages/[slug].html`
- Writes PA report to `ephemeral/pages/[slug]-pa-report.md`
- PA report contains:
  - PA-05 score (final)
  - Per-question results (48 answers)
  - Fix history (what was changed, what improved)
  - Build stats (agents, phases, CSS lines, HTML lines, duration)
  - Verdict: SHIP / SHIP WITH FIXES / NEEDS ATTENTION
  - If NEEDS ATTENTION: specific remaining issues

---

## PART 5: WHAT CHANGES IN THE DIAGRAM

The PV2-ARCHITECTURE-DIAGRAM needs these modifications to support fire-and-forget + always-flagship:

### 5.1 Tier Routing Section (Section 5)

**REMOVE** the 3-tier table. Replace with a single row:

| Dimension | Always Flagship |
|-----------|----------------|
| Builder | 1 Opus agent + planner |
| TC Involvement | Phases 0-3.5 (full metaphor) |
| Handoff | Full: zone arch + mechanisms + isomorphism + bridge prose + reinforcing pairs |
| Checkpoints | Agent approval at Phases 0, 1, 3, 4, 8 (NOT user approval) |
| Programmatic Gates | 12 gates, ALL BLOCKING + tighter thresholds |
| Stacked Gap Limit | 108px hard cap |
| Perceptual Audit | 9 auditors, all 48 questions (Mode 4) |
| PA-05 Threshold | >= 3/4 COMPOSED (aspire to 4/4) |
| Fix Cycles | Max 3 cycles, auto-applied |
| Expected Build Time | 130-260 min |

### 5.2 User Journey Section (Section 2)

**SIMPLIFY** Step 1 from "content source + tier?" to just "path to markdown file." Remove Step 2 (tier classification) entirely. Remove all user interaction nodes from the flow.

**ADD** Step 6: "Delivery -- system writes HTML + PA report to deterministic paths."

**CHANGE** Step 6's current "Fix Integration" to clarify that fixes are auto-applied, not user-prompted.

### 5.3 Flagship Wave Architecture (Section 6)

**ADD** to Wave 1: "Planner agent (not user) reviews checkpoints."

**ADD** Wave 4 (Delivery): "Write HTML + PA report. If PA-05 < 3/4 after 3 cycles, flag NEEDS_ATTENTION."

### 5.4 Resolved Decisions (Section 9)

**ADD** Decision 8: "Fire-and-forget autonomy. All user interaction eliminated except invocation and output review. Agent checkpoints replace user checkpoints. Auto-fix replaces ask-and-wait."

---

## PART 6: RISKS OF FIRE-AND-FORGET FLAGSHIP

### Risk 1: Runaway Build Time
**Scenario:** TC derives a metaphor that doesn't map cleanly. Builder gets stuck on Phase 4. Fix cycles loop. Total time exceeds 6 hours.
**Mitigation:** Hard timeout per wave. Wave 0: 90 min max. Wave 1: 180 min max. Wave 2: 60 min max. Wave 3: 90 min max per cycle. If any wave times out, deliver what exists with a BUILD_TIMEOUT flag.

### Risk 2: Quality Failure Without User Feedback
**Scenario:** PA-05 never reaches 3/4 after 3 fix cycles. The page is mediocre but delivered without the user knowing it fell short.
**Mitigation:** The PA report makes quality transparent. A NEEDS_ATTENTION flag is not silent -- the report file name could include it: `research-synthesis-NEEDS-ATTENTION-pa-report.md`. The user sees the flag when they return.

### Risk 3: Content Misinterpretation
**Scenario:** TC misreads the content arc and derives an inappropriate metaphor. The builder faithfully implements an architecture that doesn't match the content.
**Mitigation:** The handoff validation gate checks structural properties (zone count, mechanism categories, grid layouts) but CANNOT check semantic fit. This is a genuine gap. The PA auditors partially catch it (PA-03: "Does this feel like one unified design?") but they don't see the original content. A CONTENT-FIT question could be added to the PA protocol: "Does the visual architecture MATCH the content's logical structure?" -- but this would require the auditor to read the content, breaking the fresh-eyes principle.

**Accepted risk:** Content misinterpretation will occasionally happen. The PA report will document it as a low PA-03 or PA-04 score. The user can then request a rebuild with a different metaphor seed.

### Risk 4: Cost at Scale
**Scenario:** Always-flagship with 9 Opus auditors + Opus builder + Opus planner + TC planner is expensive. For a batch of 10 pages, this is 100+ agent-sessions.
**Mitigation:** This is the explicit trade-off of "always flagship." The user has chosen maximum quality over cost efficiency. If they later want cost control, the tier system can be re-enabled with a `--tier` flag override.

### Risk 5: No Iterative Refinement
**Scenario:** The user returns, sees the PA report, wants changes. There's no "fix this specific thing" flow in fire-and-forget mode.
**Mitigation:** The user can always manually edit the HTML or re-invoke `/build-page` with the same content. A future enhancement could add `--remediate path/to/existing.html` mode (already in the UX spec, line 727). But for v1, the flow is: build fresh, review, rebuild if needed.

---

## PART 7: WHAT THE UX SPEC NEEDS TO CHANGE

The pv2-user-experience.md (887 lines) was designed for an interactive model. For fire-and-forget + always-flagship, these sections change:

### Phase 0: Intake

**REMOVE:** Steps 0.1 (content source menu), 0.2 (tier selection), 0.3 (output configuration). Replace with:

```
User invokes: /build-page path/to/content.md

System response (immediate, then autonomous):
  BUILDING: "[extracted title]"
  Tier: Flagship | Content: N words | Sections: ~M
  Output: ephemeral/pages/[slug].html
  Report: ephemeral/pages/[slug]-pa-report.md
  Estimated time: ~2-4 hours (autonomous)

  The build is running. You'll find the output files when it completes.
```

### Phases 1-8: Build Execution

**KEEP** the progress display design but make it WRITE to a status file rather than display to the user:

```
ephemeral/pages/[slug]-build-status.md

BUILDING: "Research Synthesis: Cross-Research Insights"
==========================================================
  Tier: Flagship | Content: 2,847 words | Sections: 8

  Wave 0: Content Analysis ............... DONE (metaphor: "Archaeological Dig")
  Wave 1: Building ....................... Phase 4/8: Borders + Components [ACTIVE]
  Wave 2: Verification .................. pending
  Wave 3: Fix Integration ............... pending

  Started: 2026-02-19 14:23
  Last updated: 2026-02-19 15:07
```

The user can OPTIONALLY check this file for progress, but it's not required.

### Phase 9: Gate Results

**REMOVE** the interactive ship/fix/open prompt. Replace with autonomous delivery:

- PA-05 >= 3/4 AND all gates PASS: deliver HTML + report (SHIP verdict)
- PA-05 < 3/4 but fixable: auto-fix, re-verify, deliver (SHIP WITH FIXES verdict)
- PA-05 < 3/4 after 3 cycles: deliver as-is + report (NEEDS ATTENTION verdict)

### Gate Failure Protocol

**REMOVE** the user-choice model (apply cheapest fix / show me / ship anyway). Replace with:

- Soul violations: auto-fix (unchanged)
- Programmatic gate failures: auto-fix by builder
- PA gate failures: auto-fix top 3 blocking issues per cycle

### Power User Flags

**SIMPLIFY** to the flags that matter for fire-and-forget:

| Flag | Effect |
|------|--------|
| `--output path/to/file.html` | Override output path |
| `--no-pa` | Skip PA audit (for rapid iteration, NOT recommended) |
| `--metaphor "geological strata"` | Pre-seed metaphor (skip TC Phases 1-3) |
| `--remediate path/to/existing.html` | Remediation mode |
| `--dry-run` | Run TC only, output build plan without building |
| `--batch path/to/directory/` | Process multiple files |

**REMOVE:** `--tier`, `--pa-mode`, `--recipe`, `--verbose` (tier is always flagship, PA is always Mode 4, recipe is always operational-recipe.md, progress goes to status file).

---

## PART 8: WHAT THE HANDOFF PROTOCOL NEEDS TO CHANGE

The pv2-handoff-protocol.md is already well-suited for fire-and-forget because it's an agent-to-agent contract. Minimal changes needed:

### Change 1: TIER is always Flagship

The routing header's TIER field is always "Flagship." The tier-specific conditional logic in Section 2 (zone architecture), Section 4 (mechanism deployment), and Section 5 (metaphor specification) always uses the Flagship path.

### Change 2: Builder Directives include agent checkpoint protocol

Add to Section 7 (Builder Directives):

```markdown
### Agent Checkpoint Protocol

At Phases 0, 1, 3, 4, 8, the builder MUST:
1. Write checkpoint summary to _checkpoint-N.md
2. Send checkpoint summary to planner via SendMessage
3. Wait for planner approval before proceeding
4. If planner requests changes: apply, re-run phase, re-checkpoint

The PLANNER (not the user) approves checkpoints. This enables
autonomous operation while preserving quality review.
```

### Change 3: Escalation goes to delivery, not user

Part C, Step 1 (line 379) says:

> "IF ANY REQUIRED FIELD IS MISSING: STOP. Do not build. Report missing field(s) to TC via SendMessage."

For fire-and-forget, add a fallback: if TC cannot fix the handoff after 2 retries, the orchestrator delivers the build plan as-is with a HANDOFF_INCOMPLETE flag in the PA report. The builder proceeds with available information rather than blocking indefinitely.

---

## PART 9: WHAT DISCUSSION-ENRICHMENT REVEALS ABOUT THIS DESIGN

The discussion-enrichment file surfaces several meta-cognitive considerations relevant to the fire-and-forget design:

### The Compression Risk (Q-13, lines 409-419)

> "Compression is not the same as information loss. A well-designed compression could preserve the essential information."

Fire-and-forget is a compression of the user journey. The traditional Flagship journey has 8+ interaction points. Fire-and-forget compresses this to 1 (invocation). The question is whether this compression preserves essential information:

- **Content source:** Preserved (path argument)
- **Quality intent:** Preserved (always flagship)
- **Fix preferences:** LOST (user can't choose which fixes to apply)
- **Ship threshold:** PARTIALLY LOST (system uses 3/4 default; user might accept 2.5/4)
- **Visual feedback:** DEFERRED (user sees output after, not during)

The compression is well-designed IF the default fix behavior and ship threshold match the user's preferences. For THIS user, "always flagship" suggests they want maximum quality, which aligns with auto-fixing and a 3/4 threshold.

### The Operational Escape Warning (Anti-Pattern 4, lines 1028-1042)

The discussion enrichment warns against jumping to the recipe without understanding WHY each step exists. In fire-and-forget mode, the user never sees the build plan, the metaphor derivation, or the checkpoint reviews. They only see the output.

**Counter-argument:** The user HAS already understood the WHY -- they built the entire pipeline through months of research, 50+ agent teams, and iterative experimentation. The fire-and-forget mode is not operational escape; it's the REWARD for having done the deep understanding work. The PA report preserves accountability: if quality suffers, the report explains why.

### The Methodology Worship Warning (Anti-Pattern 9, lines 1121-1138)

> "More auditors found the whitespace void — but did 9 auditors find it because there were 9, or because the artifact was different, or because the auditors had different instructions?"

For fire-and-forget, always using 9 auditors might be methodology worship. Some pages (short reference docs, simple tutorials) don't NEED 9 auditors. But the user said "always flagship" which means always Mode 4.

**Resolution:** Trust the user's directive. They've seen Mode 4 catch what Mode 2 misses. They're willing to pay the cost. The system obeys.

---

## PART 10: SUMMARY OF FINDINGS

### The Core Resolution

Fire-and-forget + always-flagship is resolved by replacing USER approvals with AGENT approvals. The quality checkpoints don't disappear -- they're delegated to the planner agent. The fix cycles don't disappear -- they're automated. The PA audit doesn't disappear -- it runs autonomously and produces a report.

### What the User Gets

1. **Invocation:** `/build-page path/to/content.md` (one command, ~5 seconds)
2. **Output:** Two files at deterministic paths (~2-4 hours later)
3. **Transparency:** Full PA report with quality scores, fix history, and build stats

### What the System Does

1. TC derives metaphor + build plan (autonomous)
2. Opus builder executes 9-phase recipe with agent checkpoints (autonomous)
3. 9-auditor Mode 4 PA verifies quality (autonomous)
4. Up to 3 auto-fix cycles (autonomous)
5. Delivers HTML + PA report (autonomous)

### What Changes in the Architecture

- Tier routing: eliminated (always Flagship)
- User prompts: eliminated (path is the only input)
- Checkpoint approvals: delegated to planner agent
- Fix decisions: automated (always auto-fix)
- Ship decisions: automated (PA-05 >= 3/4 = SHIP, else NEEDS ATTENTION)
- Output format: HTML + PA report at deterministic paths
- Progress: written to optional status file, not displayed interactively

### The Acceptable Time Range

130-260 min for a typical build. User is not present during this time, so wall-clock duration is a system cost, not a user cost. The time buys: metaphor-driven architecture, agent-reviewed checkpoints, 9-auditor perceptual verification, and autonomous fix integration.

### Open Questions for the User

1. **PA-05 auto-ship threshold:** Is 3/4 correct, or would you accept 2.5/4 for faster delivery?
2. **NEEDS ATTENTION handling:** Should the system try a completely fresh rebuild (new metaphor, new builder) before flagging NEEDS ATTENTION? This could add another 2-4 hours but might recover from bad metaphor choices.
3. **Batch mode:** Should `/build-page --batch path/to/dir/` process files sequentially or in parallel? Parallel is faster (3-4 concurrent builds) but resource-intensive.
4. **Status file:** Do you want the build-status.md file for optional progress checking, or is it unnecessary overhead?

---

**END OF USER JOURNEY CROSS-REFERENCE**

**Statistics:**
- Source files read: 5 (architecture diagram + 3 cross-ref targets + unified architecture)
- Contradiction resolved: YES (agent approvals replace user approvals)
- Architecture changes identified: 4 (diagram), 7 (UX spec), 3 (handoff protocol)
- Risks identified: 5 (with mitigations)
- Open questions surfaced: 4
- Total analysis: ~3,200 words
