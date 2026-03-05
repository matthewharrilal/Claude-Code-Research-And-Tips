# Structural Audit: Execution Completeness

**File:** `~/.claude/skills/falls-in-love/SKILL.md` (1,166 lines)
**Auditor focus:** Can a single Opus agent execute this from start to finish without asking for clarification?
**Date:** 2026-03-03

---

## 1. Cold Start Test

### What the agent receives at invocation (line 50):

The orchestrator spawns a single Opus agent with `subagent_type: "general-purpose"`, `model: "opus"`, passing the SKILL.md path and the content path. The agent reads both via the Read tool.

### Implicit assumptions the file makes:

#### Tools Available

| Assumption | Where stated | Clarity |
|-----------|-------------|---------|
| Read tool | Line 50: "reads both via the Read tool" | EXPLICIT |
| File writing (Write/Edit) | Never stated directly. Lines 43-49 describe creating directories, notebook, etc. Line 244 says "One HTML file. Self-contained." The agent must WRITE files but the tool is never named. | IMPLICIT -- gap |
| Bash tool | Line 968-987: Screenshot protocol uses bash commands (`lsof`, `python3 -m http.server`, `kill`). Never states "use the Bash tool." | IMPLICIT -- medium risk. The commands are given but the tool wrapper is assumed. |
| Playwright MCP tools | Lines 968-987: `browser_resize`, `browser_navigate`, `browser_evaluate`, `browser_take_screenshot` are referenced by name. These are Playwright MCP tool names. | PARTIALLY EXPLICIT -- the commands are named but "these are Playwright MCP tools" is never stated. An agent unfamiliar with the MCP tool naming convention could be confused. |
| Glob/Grep tools | Never mentioned. Not needed -- all file paths are explicit. | N/A |
| HTTP server capability | Line 970: `python3 -m http.server 8080`. Assumes python3 is available on the host and the agent has shell access. | IMPLICIT -- medium risk on non-standard environments. |

**Finding 1 (MODERATE):** The file never explicitly states "You have access to these tools: Read, Write/Edit, Bash, Playwright MCP (browser_resize, browser_navigate, browser_evaluate, browser_take_screenshot, browser_snapshot)." A tool manifest at the top would eliminate all ambiguity.

**Finding 2 (LOW):** The file assumes python3 is on PATH. This is true for macOS but not universal. The screenshot protocol section (lines 968-987) should note this dependency.

#### Output Format

| Question | Answer location | Clarity |
|---------|----------------|---------|
| What is the output? | Line 244: "One HTML file. Self-contained. All CSS in a `<style>` block. Google Fonts via `<link>` tags. No external dependencies." | EXPLICIT and clear |
| Where does the HTML live? | Line 53: `{OUTPUT_DIR}/_build-final.html` | EXPLICIT -- but see Finding 3 |
| What about the intermediate HTML? | Line 976: `http://localhost:8080/_build.html` | The working filename is `_build.html` but the final is `_build-final.html`. This implies a rename at completion. |
| Supplementary outputs? | Lines 246-247: "Optional: A builder's notebook, wave retrospectives, and a final reflection." Lines 43-44: `_screenshots/`, `_notebooks/` directories. | PARTIALLY SPECIFIED -- "optional" creates ambiguity for the notebook that is later treated as MANDATORY (line 496: "Notebook entries: 1 per pass") |

**Finding 3 (MODERATE):** The file uses two HTML filenames: `_build.html` (line 976, used during development) and `_build-final.html` (line 53, the final output). There is no instruction telling the agent when or how to transition from one to the other. Should the agent work in `_build.html` throughout and rename at the end? Or does the agent always write to `_build-final.html`? This is never specified.

**Finding 4 (MODERATE):** The notebook is called "optional" (line 246) but is treated as mandatory throughout:
- Line 133: "write one sentence in the notebook" (the Definition Journal)
- Line 496: "Notebook entries: 1 per pass" as a minimum requirement
- Line 588: "Track your triage in the builder's notebook"
- Line 1092: "The builder's notebook (reasoning, open questions, spatial hypotheses)"
- Line 1095: "If the notebook exceeds ~200 lines, prune older per-pass entries"

The notebook is NOT optional. It is a core execution artifact. The word "optional" on line 246 is incorrect and should be removed or clarified to mean "optional as a DELIVERABLE to the user, but mandatory as a PROCESS tool."

#### Where to Save Outputs

| Artifact | Path specified? |
|---------|----------------|
| Output directory | Line 40: `ephemeral/builds/{content-name}-devoted-{date}/` | YES |
| HTML file | Line 53: `{OUTPUT_DIR}/_build-final.html` | YES |
| Notebook | Line 45: `{OUTPUT_DIR}/_notebook.md` | YES |
| Screenshots | Line 41: `{OUTPUT_DIR}/_screenshots/` | YES (directory), but individual screenshot filenames are not specified |
| Wave retrospectives | Not specified. Presumably in `{OUTPUT_DIR}/` but no filename pattern given. | GAP |
| Early exit assessment | Line 55: `{OUTPUT_DIR}/_early-exit.md` | YES |

**Finding 5 (LOW):** Wave retrospective filenames are never specified. Should they be `_wave-0-retro.md`, `_retro-wave-0.md`, or entries in the notebook? Lines 898-921 describe retrospectives in detail but never say WHERE they are written. Line 1093 says "All wave retrospectives" carry forward across context windows, implying they are separate files, but the naming convention is absent.

#### Error Handling

**Finding 6 (HIGH):** The file contains ZERO error handling instructions. Specifically missing:

1. **Screenshot failure:** Line 989 says "Verify file sizes: real content = 30k-200k+. Blank = ~5-6k. If blank, restart server and retry." This is the ONLY error recovery instruction in the entire file. What if the server fails to start? What if port 8080 is already in use (non-self)? What if `browser_navigate` fails?

2. **File read failure:** If any of the ~30 research files fails to read (corrupted, moved, permission denied), what does the agent do? Skip it? Abort? Try again?

3. **Context window exhaustion:** Lines 1084-1141 describe context window management in detail, but the protocol assumes the agent CAN detect when it is approaching limits ("When the agent detects it is approaching context limits" -- line 1122). An Opus agent inside Claude Code does NOT get explicit context-remaining signals. It either gets a compression event or the conversation ends. The agent needs a heuristic: "After every 15-20 passes, assume you may be near context limits and write transition state proactively."

4. **Disk space:** Writing 100+ screenshots over 6-10 hours could consume significant disk space. No monitoring instruction.

5. **HTTP server process orphans:** The screenshot protocol kills the server after each session (line 986), but if the agent crashes mid-screenshot, the orphaned python server is never cleaned up. The startup line (970) attempts to kill existing processes on port 8080, which is a partial mitigation but not documented as such.

#### When to Stop / What "Done" Looks Like

| Signal | Location | Clarity |
|--------|---------|---------|
| Genuine satisfaction | Line 21: "The build is done when the builder looks at the page and feels that it has become the thing the content demanded." | PHILOSOPHICAL -- not actionable as a termination criterion |
| Wave 8 exhaustion | Lines 872-895: "Write the final retrospective. What was learned. What was built. What would change with more time. The agent writes 'I am done' and means it." | SLIGHTLY MORE CONCRETE but still subjective |
| 10 Falsifiable Criteria all met | Lines 996-1013 | CONCRETE but described as a "FLOOR, not a ceiling" |
| Content-Form Coupling: No section below ADEQUATE | Line 1025 | CONCRETE |
| DOM skeleton count >= 4 | Line 1033 | CONCRETE |
| All 3 exhaustion conditions met | Lines 477-485: delta stabilized at invisible grain + research re-read produces no new ideas + "infinite time" answer is invisible | REASONABLY CONCRETE |

**Finding 7 (MODERATE):** There is no HARD termination criterion. The file intentionally avoids one (line 10: "No endpoint except genuine satisfaction"), which is philosophically coherent but operationally risky. An agent could theoretically run indefinitely. The cost estimate ($150-300) implies a budget boundary, but the file never says "stop if cost exceeds $X." A pragmatic safeguard would be: "If you have completed Wave 8 and all 3 exhaustion conditions are met and the 10 falsifiable criteria are all at floor or above, you are done. Write the final retrospective and stop."

---

## 2. Wave-by-Wave Execution Test

### Wave 0: Content Immersion (Lines 503-524)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | "The content source file ONLY" (line 505) |
| Pass count | CLEAR | "Minimum passes: 8" (line 509), exhaustion signal defined |
| Evaluation criteria | CLEAR | Spatial hypothesis believed in, HTML has all content, skeleton stable (line 509) |
| Transition condition | CLEAR | Exhaustion signal met |
| Artifacts to produce | PARTIALLY CLEAR | HTML file, notebook entries, loss-detection table implied but not mandated here |

**Finding 8 (LOW):** Wave 0 says "No design system. No research. No vocabulary" (line 505), but the agent has already read the SKILL.md which contains the Design System Physics section (lines 1037-1053). The agent knows about `border-radius: 0`, the font trinity, etc. The instruction to ignore this knowledge at Wave 0 is implicit but never stated directly. Should the agent intentionally violate soul constraints at Wave 0? Line 507 says "This draft will violate soul constraints, use incorrect colors and spacing. That is fine." This is CLEAR but could be stronger: "Do NOT consult tokens.css or components.css during Wave 0."

### Wave 1: Design System Soul (Lines 527-552)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | identity.md, vocabulary.md, tokens.css, components.css + content + Wave 0 HTML (line 529) |
| Pass count | CLEAR | "Minimum passes: 10" (line 537) |
| Rotation schedule | EXPLICIT | Line 533: 8-position rotation + "agent's choice" |
| Evaluation criteria | CLEAR | All soul constraints satisfied, all CSS from tokens, spatial hypothesis survived (line 537) |
| Transition condition | CLEAR | Exhaustion signal met |
| Artifacts | PARTIALLY CLEAR | Retrospective implied, notebook entries required |

No significant gaps in Wave 1.

### Wave 2: Research R1-R5 (Lines 555-638)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | R1-R5 + RESEARCH-SYNTHESIS.md, all named explicitly with finding counts (lines 557-567) |
| Pass count | CLEAR | "Minimum passes: 12 (extend to 18 if files remain under-engaged)" (line 638) |
| Rotation schedule | EXPLICIT | 13-position rotation (line 569) with detailed rationale |
| Evaluation criteria | CLEAR | All findings annotated, research re-read produces no new ideas (line 638) |
| Transition condition | CLEAR | Exhaustion signal met |
| Artifacts | CLEAR | Triage notebook entries, wave retrospective |

**Finding 9 (LOW):** R4 has 192 findings (line 565). The file correctly warns not to absorb all in one pass. But it does not specify where R4 lives on disk. All R1-R5 files are named on line 557 but paths are relative -- the agent must know the project root to construct absolute paths. The Invocation section (lines 38-56) does not provide the project root or the research directory path.

**Finding 10 (MODERATE):** The file says "Total available research: ~11,000 lines" (line 240). At ~4 tokens per line, that is ~44,000 tokens. The agent has ~200K context. Reading ALL research across waves is feasible but leaves only ~156K tokens for everything else (HTML, CSS, notebook, SKILL.md itself at ~30K tokens, content file). For a large content file (10K+ lines), this gets tight by Wave 3. The file does not address what to do if the content + research + skill + HTML exceeds context capacity.

### Wave 3: Case Studies (Lines 642-743)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | 16 files listed explicitly (lines 644-645) |
| Pass count | CLEAR | "Minimum passes: 12 (extend to 18 if dimensions remain under-engaged)" (line 722) |
| Rotation schedule | EXPLICIT | Tiered system (crown jewels, dimension reps, reference files) with default rotation (lines 695-714) |
| Evaluation criteria | CLEAR | Spatial ideas absorbed AND TRANSLATED, borrowed components fail swap test (line 722) |
| Transition condition | CLEAR | Exhaustion signal met |
| Artifacts | CLEAR | Notebook entries with per-dimension tracking, retrospective |

**Finding 11 (MODERATE):** The Tier 1 crown jewel selection (lines 699-704) requires the agent to match content characteristics to case studies. This is a judgment call with good guidance (5 selection rules), but the agent must choose EXACTLY 3 from 9 case studies. What if 4 match equally? What if only 1 matches? The instruction says "3 files, selected by content relevance" but doesn't address edge cases.

**Finding 12 (LOW):** Wave 3 has 16 files but the file acknowledges the 2-primacy-turns-per-file guarantee is "structurally impossible" (line 697). The tiered system addresses this, but the guidance that Tier 3 files get "0-1 primacy turns" means some files may NEVER be at primacy. The 4-pass neglect threshold is relaxed to dimension level (line 712), which is a good adaptation, but the agent must understand this is a Wave-3-specific override of the general rule.

### Wave 4: Synthesis + Provenance (Lines 747-772)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | PARTIALLY | "RESEARCH-SYNTHESIS.md, semantic-rules.md, selected provenance documents" (line 749). Provenance documents are described as "agent-selected, 1-2 documents addressing conflicts" (line 753). |
| Pass count | CLEAR | "Minimum passes: 8" (line 759) |
| Rotation schedule | EXPLICIT | 8-position rotation (line 753) |
| Evaluation criteria | CLEAR | Conflicts resolved, page internally consistent (line 759) |
| Transition condition | CLEAR | |
| Artifacts | CLEAR | |

**Finding 13 (MODERATE):** "Selected provenance documents" (line 749) is vague. The agent must select 1-2 provenance documents that address conflicts between Wave 2 and Wave 3 applications. But where ARE the provenance documents? Line 238 mentions "synthesis documents, stage handoffs (optional depth)" but gives no paths. The case studies directory does not contain provenance files. The agent would need to search for them. If provenance documents are truly optional, this is fine. If they are expected at Wave 4, the paths must be specified.

**Confirmed: provenance documents are NOT in any clearly specified location.** The design system has `design-system/compositional-core/` but no `provenance/` subdirectory is referenced with concrete paths. This is a real gap for Wave 4.

### Wave 5: Combination Mastery (Lines 775-801)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | CD-006, grammar.md, the HTML file (line 777) |
| Pass count | CLEAR | "Minimum passes: 8" (line 789) |
| Rotation schedule | EXPLICIT | 8-position rotation (line 783) |
| Evaluation criteria | CLEAR | Zero inline styles, all zone transitions typed, CSS architecture sound (line 789) |
| Transition condition | CLEAR | |
| Artifacts | CLEAR | |

No significant gaps in Wave 5.

### Wave 6: Integration (Lines 809-844)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | "No new research" (line 811) -- works only with existing HTML, notebook, content |
| Pass count | CLEAR | "Minimum passes: 15" (line 844) with sub-ranges for each phase |
| Evaluation criteria | CLEAR | Taste audit produces genuine satisfaction, pride question = "yes" (line 844) |
| Transition condition | CLEAR | |
| Artifacts | CLEAR | |

**Finding 14 (MODERATE):** Wave 6 has 15-25 passes. At ~10K tokens per pass (the file's own estimate, line 1086), that is 150K-250K tokens for Wave 6 ALONE. This exceeds a single context window (~200K). The agent will need at LEAST one context transition during Wave 6. The wave's pass-level structure (Passes 1-5, 6-10, 11-15, 16-20, 21-25) suggests the agent may need 2 context transitions. The context transition protocol (lines 1120-1141) exists but the agent needs to proactively manage this within Wave 6, and the wave description does not remind the agent to do so.

### Wave 7: Self-Audit Cycle (Lines 846-870)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | The HTML, the content (re-read), the 10 falsifiable criteria |
| Pass count | CLEAR | "8-12 passes" implied by pass numbering (passes 1-12) |
| Evaluation criteria | CLEAR | 10 criteria scored, comprehensive check, content-coupling verified |
| Transition condition | PARTIALLY CLEAR | "Final surgery based on everything the audit revealed" (line 857) but no explicit "Wave 7 is done when..." |
| Artifacts | CLEAR | Falsifiable criteria scores, final surgery changes |

**Finding 15 (LOW):** Wave 7 lacks an explicit exhaustion signal. Every other wave has one (e.g., "All soul constraints satisfied" for Wave 1, "Conflicts resolved" for Wave 4). Wave 7 just has pass descriptions through pass 12 and then implies the agent moves to Wave 8. The implicit signal is: "surgery is complete and the audit reveals no further substantive issues." This should be stated explicitly.

### Wave 8: Final Enrichment (Lines 872-895)

| Dimension | Status | Detail |
|-----------|--------|--------|
| Input files specified | YES | Wave 7 findings, HTML, content (for final re-read) |
| Pass count | CLEAR | "5-10 passes" (line 872) with sub-ranges |
| Evaluation criteria | CLEAR | "'I am done' and means it" (line 882) plus the 5-layer depth check |
| Transition condition | CLEAR | This is the final wave. "I am done" = termination. |
| Artifacts | CLEAR | Final retrospective, final HTML |

No significant gaps in Wave 8, given that the termination question is addressed in Finding 7 above.

---

## 3. Decision Point Inventory

Every point where the agent must make a judgment call:

### 3.1 Spatial Hypothesis Formation (Wave 0, passes 4-8)

**Decision:** What spatial hypothesis to form for the content.
**Guidance quality:** STRONG. Lines 317-339 provide four readings, hypothesis formation template with good/bad examples, the swap test, and the loss-detection table. The seven cognitive moves (lines 366-373) and eight spatial archetypes (lines 376-390) provide extensive vocabulary.
**Default if uncertain:** The loss-detection table (lines 349-363) provides a systematic fallback. If the agent cannot form a hypothesis through reading, it can build the table and DERIVE the hypothesis.
**Recommendation:** Sufficient as-is.

### 3.2 Early Exit Decision (Wave 0)

**Decision:** Whether the content has spatial potential.
**Guidance quality:** GOOD. Line 55: "if the loss-detection table shows the content loses NOTHING in a single column (genuinely linear content)."
**Default if uncertain:** Line 55: "Options: (a) proceed anyway, (b) use /build-page, (c) provide different content. The user decides."
**Recommendation:** Sufficient as-is.

### 3.3 Crown Jewel Selection (Wave 3)

**Decision:** Which 3 case studies are the "crown jewels" for Tier 1 rotation.
**Guidance quality:** MODERATE. Lines 699-704 provide 5 selection heuristics mapping content characteristics to specific case studies.
**Default if uncertain:** No explicit default.
**Recommendation:** Add: "If no clear match, default to DD-006, CD-006, and the OD case study whose title most resonates with the content's organizational challenge."

### 3.4 Provenance Document Selection (Wave 4)

**Decision:** Which 1-2 provenance documents to read.
**Guidance quality:** WEAK. Line 753 says "agent-selected, 1-2 documents addressing conflicts identified between Wave 2 and Wave 3 applications." No paths. No catalog. No guidance on how to find them.
**Default if uncertain:** None.
**Recommendation:** Either provide explicit provenance file paths or state "If no conflicts were identified between Wave 2 and Wave 3 applications, skip provenance documents and extend the SYNTHESIS engagement by 2 passes."

### 3.5 Diagnostic Override (Every Wave)

**Decision:** Whether to override the next pass's primacy rotation.
**Guidance quality:** STRONG. Lines 425-430 provide a 4-step decision protocol with explicit rules.
**Default if uncertain:** Follow the default schedule (line 428: "If YES: follow default").
**Recommendation:** Sufficient as-is.

### 3.6 Wave Exhaustion (Every Wave)

**Decision:** Whether a wave is genuinely exhausted or the agent is experiencing process fatigue.
**Guidance quality:** STRONG. Lines 477-485: three simultaneous conditions. Line 501: "If the agent is consistently hitting minimums and wanting to stop, that is process fatigue, not genuine exhaustion."
**Default if uncertain:** Continue the wave.
**Recommendation:** Sufficient as-is.

### 3.7 Staleness Detection and Recovery (Every Wave)

**Decision:** Whether the evaluation is stale and what recovery action to take.
**Guidance quality:** EXCELLENT. Lines 176-205: 4 concrete detectors, wave-specific staleness signatures for all 9 waves, dimension-specific detectors, and 3 mandatory recovery actions.
**Default if uncertain:** "Assume your evaluation IS stale right now. Prove it is not." (Line 172) -- the burden of proof is on freshness.
**Recommendation:** Sufficient as-is.

### 3.8 Context Window Transition Timing

**Decision:** When to write transition state and prepare for context window boundary.
**Guidance quality:** WEAK. Line 1122: "When the agent detects it is approaching context limits (or receives a context compression event)." The detection mechanism is unspecified.
**Default if uncertain:** None provided.
**Recommendation:** Add a concrete heuristic: "After every 15 passes within a single context window, write transition state proactively. If you notice response latency increasing or your outputs being truncated, write transition state immediately."

### 3.9 Wave 8 Duration

**Decision:** Whether Wave 8 is a brief verification (5 passes) or a full surgical intervention (10 passes).
**Guidance quality:** MODERATE. Line 874: "If Wave 7 produced genuine satisfaction, this wave is a brief verification. If Wave 7 revealed deep structural issues, this wave is a final surgical intervention."
**Default if uncertain:** Default toward the longer version (better to over-invest than under-invest at the final wave).
**Recommendation:** Add: "Default to the full 10 passes unless Wave 7's audit found 0 issues requiring changes larger than 5 CSS lines."

### 3.10 "I Am Done" Declaration

**Decision:** When to declare the build complete.
**Guidance quality:** MODERATE. Multiple signals exist (3 exhaustion conditions, 10 falsifiable criteria, coupling grades, DOM skeleton count, the "infinite time" question) but no single unified "you are done when ALL of these are true" statement.
**Default if uncertain:** Continue building.
**Recommendation:** Add a completion checklist: "Before writing 'I am done,' verify: (1) All 3 exhaustion conditions met for Wave 8. (2) 10 falsifiable criteria all at floor or above. (3) No section below ADEQUATE coupling. (4) DOM skeleton count >= 4. (5) The 'infinite time' answer is invisible-grain adjustments. (6) The pride question produces 'yes' without qualification. If any one is false, continue."

---

## 4. Gap Analysis -- What's NOT in the File

### 4.1 Context Window Management (CRITICAL GAP)

The file addresses this at lines 1084-1141, which is the strongest operational section. However, several sub-gaps exist:

**4.1a. Detection heuristic is missing.** The agent cannot query "how much context do I have left?" Line 1122 assumes the agent "detects" approaching limits, but Claude agents do not receive explicit context-remaining signals. The agent needs a pass-counting heuristic.

**4.1b. What if transition state is lost?** If the agent crashes without writing transition state (power failure, timeout, etc.), the next context window has only the HTML file and whatever was written to disk before the crash. The notebook may be out of date. No recovery protocol exists for this scenario.

**4.1c. Multi-window notebook management is under-specified.** Line 1095 says "If the notebook exceeds ~200 lines, prune older per-pass entries, keeping only the wave summaries." But across 8-12 context windows, how does the agent know which entries to prune? The "NEVER prune" rule for the definition journal (line 1097) is clear, but the pruning protocol for everything else needs more specificity. How many lines of per-pass entries should survive pruning? 0? The last 10? The last wave's entries?

**4.1d. How many context windows are expected?** Line 1086 estimates ~15-20 passes per window. Total passes: 100-200. That is 5-13 context windows. This is stated but never operationalized into a plan. The agent would benefit from: "Expect 6-10 context windows. At each transition, you lose conversational memory but retain the HTML, notebook, and retrospectives. The HTML IS your memory."

### 4.2 Cost Monitoring (MODERATE GAP)

Line 1146 says "$150-300 per build." But the agent has no way to monitor its own cost. The agent does not know its per-token pricing. It does not know how many tokens it has consumed. No cost proxy is provided (e.g., "each context window is approximately $20-35, so 8 windows = $160-280").

**Recommendation:** Either (a) accept that cost is the user's responsibility and the agent should not worry about it, or (b) provide a heuristic: "Each context window costs approximately $20-35. Track context window count. If you exceed 10 context windows, you are approaching the upper cost bound. Assess whether remaining work justifies continued spending."

### 4.3 Playwright Usage Details (MODERATE GAP)

The screenshot protocol (lines 968-987) provides bash commands and tool names but is missing several operational details:

**4.3a. Initial browser setup.** Does the agent need to install the browser first? (`mcp__playwright__browser_install`). The file never mentions installation. If this is the first Playwright usage in a session, the browser may not be installed.

**4.3b. Tab management.** If the agent navigates to the page, takes a screenshot, then navigates again later, does it need to manage tabs? The file assumes a single-tab workflow but never says so.

**4.3c. Server lifecycle across the full build.** The screenshot protocol starts and stops the server each time. Over 100-200 passes with 2+ screenshots per wave (minimum 18 screenshot sessions), that is 18+ server start/stop cycles. Should the agent keep the server running between passes within a wave? The protocol implies start-stop each time, which is wasteful but safe.

**4.3d. Screenshot naming convention.** Line 41 creates `_screenshots/` but individual screenshots have no naming convention. The agent should use something like `wave-{N}-pass-{M}-{viewport}px.png` for traceability. The file never specifies this.

**4.3e. Full-page screenshots for tall pages.** A deeply built page with 15+ spatial zones could be 8,000-15,000px tall. Full-page screenshots at that height may produce very large files or render inaccurately. No guidance on handling this.

### 4.4 File Path Resolution (MODERATE GAP)

The file references ~30 input files by name but never provides base paths. The Invocation section (lines 38-56) describes what the orchestrator does (create output directory, etc.) but never tells the AGENT where the design system files live.

The agent receives "this SKILL.md path and the content path" (line 50). From SKILL.md's location (`~/.claude/skills/falls-in-love/SKILL.md`), the agent CANNOT derive the design system path (`design-system/compositional-core/...`) because the design system lives in the PROJECT directory, not in `~/.claude/`.

**Recommendation:** The orchestrator should pass the project root path to the agent, or the Invocation section should include: "The agent resolves all design-system paths relative to the project root: `{PROJECT_ROOT}/design-system/...`"

### 4.5 HTML Boilerplate (LOW GAP)

The file says the output is "One HTML file. Self-contained. All CSS in a `<style>` block. Google Fonts via `<link>` tags" (line 244). But it never provides the HTML boilerplate. The agent must construct:

- `<!DOCTYPE html>`, `<html lang="en">`, charset, viewport meta
- Google Fonts `<link>` tags for Instrument Serif, Inter, JetBrains Mono
- The `<style>` block structure
- Skip link, ARIA landmarks (required by line 1050)
- `prefers-reduced-motion` media query (required by line 1050)

The design system physics section (lines 1037-1053) lists requirements but does not provide the boilerplate. The agent can construct this from the requirements, but a starter template would eliminate unnecessary early-pass boilerplate work and let the agent focus on spatial invention from pass 1.

### 4.6 Recovery from Substantive Errors (LOW GAP)

What if the agent makes a catastrophic CSS error that breaks the page at pass 40? (e.g., a syntax error that makes the entire `<style>` block unparseable, or an overly broad selector that wipes out 20 zones of styling). The file has no "undo" or "backup" protocol. The agent could:

- Keep a backup copy of the HTML every N passes
- Use git versioning within the output directory
- Write a `_build-backup-pass-{N}.html` periodically

None of this is mentioned.

### 4.7 The "10+ Passes Per Slice" Reconciliation (LOW-MODERATE GAP)

Lines 278-299 define "10+ passes per slice" as the "most important operational concept." Lines 632-636 elaborate on what this means in Wave 2. But the arithmetic does not always work:

- Wave 2 has 12-18 passes total and 6 research files.
- Each file gets 2-3 primacy turns in the rotation.
- "10+ meaningful engagements" per file means 60+ total engagements across 6 files.
- But the wave has only 12-18 passes.

The resolution is on line 632: "Every pass is a full cycle for EVERY active dimension, not just the primacy file." So each pass counts as an engagement for ALL active dimensions. With 6 dimensions and 12 passes, each dimension gets 12 engagements (meeting the 10+ threshold). This is coherent but the math is non-obvious and could confuse the agent. The agent might think "I need 60 passes in Wave 2" and panic.

**Recommendation:** Add a brief arithmetic example: "With 6 files and 12 passes, each file accumulates 12 active engagements (one per pass, since all dimensions are active at every pass). The primacy file gets the DEEPEST engagement at each pass; non-primacy dimensions get ACTIVE engagement (CSS changed, screenshot evaluated through that lens). The 10+ threshold is met by pass 12 for all files."

---

## 5. Ambiguity Inventory

### Ambiguity 1: "10+ passes per slice" vs. per-wave minimums

**The two interpretations:**
- (A) Each research file needs 10+ DEDICATED passes where it is the primary focus. This would require 60+ passes in Wave 2 (6 files x 10).
- (B) Each research file needs to be ACTIVELY engaged with (CSS changed through its lens, screenshot evaluated through its lens) across 10+ passes of the wave, regardless of which file is at primacy. This requires only 12-18 passes total.

**Which is intended:** (B), as clarified on lines 632-636.
**Risk:** HIGH. Interpretation (A) would cause the agent to massively over-build Wave 2.
**Recommendation:** The clarification on lines 632-636 is good but occurs 354 lines after the "most important operational concept" declaration on line 278. Consider adding a one-line disambiguation at line 299: "NOTE: This means 10+ passes where the dimension is ACTIVELY engaged (CSS changed, screenshot evaluated through that lens), not 10+ passes at primacy position. See Wave 2 details for the arithmetic."

### Ambiguity 2: `_build.html` vs. `_build-final.html`

**The two interpretations:**
- (A) The agent works in `_build.html` throughout, then renames to `_build-final.html` at completion.
- (B) The agent always writes to `_build-final.html` and the screenshot protocol's reference to `_build.html` is an error.

**Which is intended:** Likely (A), but never stated.
**Recommendation:** Add to the Invocation section: "The agent writes to `{OUTPUT_DIR}/_build.html` during development. At completion (Wave 8 final retrospective), the agent copies the file to `{OUTPUT_DIR}/_build-final.html`."

### Ambiguity 3: "Optional" notebook

**The two interpretations:**
- (A) The notebook is truly optional -- the agent can choose not to keep one.
- (B) The notebook is mandatory as a process tool but optional as a deliverable to the user.

**Which is intended:** (B), based on the extensive mandatory notebook requirements throughout the file.
**Recommendation:** Change line 246 from "Optional: A builder's notebook, wave retrospectives, and a final reflection. These are thinking tools, not deliverables." to "The builder's notebook, wave retrospectives, and final reflection are MANDATORY process tools. They are not deliverables to the user but are essential to the build process."

### Ambiguity 4: What "pass" means at different scales

**The interpretations:**
- (A) A "pass" is a single full cycle: read -> build -> look -> evaluate -> refine -> decide (line 281-293). This is the canonical definition.
- (B) A "pass" is sometimes used to mean a single read-through of content (line 507: "reads the content 3-4 times through the four lenses above").
- (C) A "pass" in the context of primacy rotation means one slot in the rotation schedule (line 413: "Each numbered position in a rotation schedule is one pass").

**Which is intended:** (A) is the canonical definition. (B) and (C) are consistent with (A) in context. But the potential for confusion exists when the file says "reads the content 3-4 times" in the same wave that requires "8 passes." Are the 3-4 content readings counted as passes? Or are they WITHIN the first pass?

**Recommendation:** Clarify in Wave 0: "The 3-4 content readings are done during the first 3-4 passes. Each reading is paired with building, looking, and evaluating -- making it a full pass. The spatial hypothesis formation happens ACROSS these reading-passes, not after them."

### Ambiguity 5: Screenshot frequency

**The interpretations:**
- (A) Take screenshots at every pass (implied by "Each pass is a full cycle: ... 3. LOOK -- screenshot, scroll, experience" on line 287-288).
- (B) Take screenshots at a minimum of "2 per wave" (line 497).
- (C) Take screenshots at wave boundaries and mid-wave checkpoints (line 964).

**Which is intended:** (A) is the ideal, (B) is the floor, (C) is a supplementary instruction. But taking screenshots at EVERY pass across 100-200 passes means 100-200 screenshot sessions (each with server start, multiple viewports, server stop). At ~2-3 minutes per session, this is 3-10 hours of pure screenshot time -- which exceeds the entire build duration estimate.

**Recommendation:** Clarify the practical screenshot frequency: "LOOK at every pass means reviewing the page in the browser. Full screenshot sessions (multiple viewports, saved to disk) should happen at minimum 2 per wave. Quick evaluations (single viewport, not saved) can use `browser_snapshot` for faster feedback during mid-pass cycles."

### Ambiguity 6: Notebook entries -- how detailed?

**The interpretations:**
- (A) One notebook entry per pass = one sentence noting the pass's primary action and result.
- (B) One notebook entry per pass = a multi-paragraph reflection covering all 5 metacognitive layers.
- (C) Varies by wave -- sparse early, detailed later.

**Which is intended:** The file does not specify entry length. The definition journal is "one sentence" (line 133). The triage entries are "3-5 lines per file" (line 588). The per-pass tracking of dimensions is a list (line 634). But the general "1 per pass" requirement (line 496) has no length guidance.

**Recommendation:** Add: "Notebook entries should be 3-10 lines per pass. Minimum: (1) pass number and wave, (2) primacy file, (3) what you changed, (4) what you learned. Maximum: add 5-layer metacognitive notes. Keep entries functional, not exhaustive -- the notebook is a working tool, not documentation."

### Ambiguity 7: "Content-form coupling" grades -- who assigns them?

**The interpretations:**
- (A) The agent self-assigns coupling grades to each section during Wave 7.
- (B) The grades are an external evaluation rubric applied after the build.

**Which is intended:** (A), based on line 1025 ("Target: No section below ADEQUATE") being an internal criterion. But the grading rubric (lines 1017-1024) requires judgment about what "INEVITABLE" means for a specific piece of content. The agent is both builder and judge.

**Recommendation:** This is intentional (the agent IS both builder and judge). No change needed, but consider adding: "When grading coupling, apply the swap test as the objective discriminator. INEVITABLE = swap test fails catastrophically. STRONG = swap test fails for most content. ADEQUATE = swap test fails only for very similar content. GENERIC = swap test passes easily."

### Ambiguity 8: Responsive behavior depth

**The interpretations:**
- (A) The page must "work" at 1440px and 768px (line 1049). "Work" means render correctly and be usable.
- (B) The page must have content-DERIVED responsive behavior (lines 821-822) where the spatial argument is PRESERVED at narrow widths, not just reflowed.

**Which is intended:** Both. (A) is the floor from Design System Physics. (B) is the aspiration from Wave 6. But (B) is a much higher bar than (A). The agent might satisfy (A) early and never return to pursue (B).

**Recommendation:** Clarify: "Responsive behavior has two levels. FLOOR (must be met by Wave 1): the page renders correctly and is usable at 1440px and 768px. TARGET (pursued in Wave 6, passes 11-15): responsive behavior PRESERVES the content's spatial argument at narrow widths, not just reflowing into a vertical stack."

### Ambiguity 9: When to read SKILL.md itself

**The interpretations:**
- (A) The agent reads SKILL.md once at the start and internalizes it.
- (B) The agent re-reads specific sections of SKILL.md at wave boundaries (e.g., re-read the Wave 3 section before starting Wave 3).
- (C) The agent never re-reads SKILL.md after the initial read because it consumes too much context.

**Which is intended:** Unclear. SKILL.md is ~30K tokens. Re-reading it at every wave boundary would consume significant context. But NOT re-reading it means the agent forgets wave-specific instructions after a context transition.

**Recommendation:** Add to the context window transition protocol: "Do NOT re-read the full SKILL.md at each context window transition. Instead, read ONLY the section for the current wave (50-100 lines). The full SKILL.md should be read once at the start of the build and once if the agent feels procedurally uncertain."

---

## Summary of Findings

### Critical (execution-blocking if unresolved)

| # | Finding | Impact |
|---|---------|--------|
| 6 | Zero error handling instructions | Agent will freeze on first unexpected error |
| 4.1a | No context-limit detection heuristic | Agent cannot manage its own context transitions |
| 4.4 | File path resolution gap | Agent cannot find design system files from SKILL.md location alone |

### Moderate (execution-degrading)

| # | Finding | Impact |
|---|---------|--------|
| 1 | No tool manifest | Agent wastes early passes discovering available tools |
| 3 | Two HTML filenames without transition rule | Agent may use wrong filename throughout |
| 4 | "Optional" notebook is actually mandatory | Agent may skip essential process tracking |
| 7 | No hard termination criterion | Agent could run indefinitely past value |
| 9 | Research file paths are relative with no base | Agent must search for files |
| 10 | Content + research + skill could exceed context | No mitigation for large content files |
| 11 | Crown jewel selection edge cases unaddressed | Agent stuck if content matches 0 or 4+ studies |
| 13 | Provenance documents have no paths | Agent cannot execute Wave 4 provenance step |
| 14 | Wave 6 exceeds single context window | Agent needs proactive transition planning within Wave 6 |
| 4.2 | No cost monitoring mechanism | Agent has no spend awareness |
| 4.3a | No Playwright browser install mention | First-time Playwright usage may fail |
| 5.1 | "10+ passes per slice" ambiguity | Agent could 6x over-build Wave 2 |
| 5.5 | Screenshot frequency ambiguity | Screenshotting every pass would exceed build duration |

### Low (quality-degrading but not blocking)

| # | Finding | Impact |
|---|---------|--------|
| 2 | Python3 dependency assumed | Breaks on non-standard environments |
| 5 | Wave retrospective filenames unspecified | Retrospectives may be scattered or lost |
| 8 | Wave 0 soul-constraint avoidance is implicit | Agent may self-censor at Wave 0 |
| 12 | Some Tier 3 files get 0 primacy | Minor research gaps possible |
| 15 | Wave 7 has no explicit exhaustion signal | Transition to Wave 8 is judgment-only |
| 4.5 | No HTML boilerplate provided | Agent spends early passes on boilerplate |
| 4.6 | No backup/undo protocol | Catastrophic CSS errors have no recovery path |
| 4.7 | "10+ per slice" arithmetic non-obvious | Agent may miscalculate required passes |
| 5.4 | "Pass" used at multiple scales | Potential confusion in Wave 0 |
| 5.6 | Notebook entry length unspecified | Entries may be too sparse or too verbose |
| 5.8 | Responsive behavior has two unstated levels | Agent may stop at floor, never reach target |
| 5.9 | When to re-read SKILL.md is unspecified | Agent may waste context re-reading full skill |

---

## Recommendations -- Priority Order

### Must-fix before first production use

1. **Add a tool manifest** to the Invocation section listing all tools the agent has access to.
2. **Add file path resolution** -- either pass project root to the agent or specify all paths as absolute.
3. **Add basic error handling** for the 3 most likely failures: screenshot failure, file read failure, context transition interruption.
4. **Resolve the `_build.html` / `_build-final.html` naming** with an explicit rule.
5. **Add a context-limit detection heuristic** (pass counting, proactive transition state writing).
6. **Change "Optional" notebook to "Mandatory process tool"** to match actual usage throughout the file.

### Should-fix for reliable multi-run usage

7. **Add a unified completion checklist** combining all termination criteria.
8. **Clarify screenshot frequency** -- full sessions vs. quick evaluations.
9. **Add a brief arithmetic reconciliation** for "10+ passes per slice" in Wave 2.
10. **Specify wave retrospective filenames.**
11. **Address provenance document paths** or make them explicitly optional.
12. **Add a crown jewel selection default** for edge cases (0 or 4+ matches).
13. **Add proactive context transition reminder** in Wave 6 description.

### Nice-to-have for maximum execution quality

14. Provide HTML boilerplate template.
15. Add screenshot naming convention.
16. Specify notebook entry length guidelines.
17. Add CSS backup protocol (every N passes or at wave boundaries).
18. Add Playwright browser install check.
19. Add cost-per-context-window heuristic.
20. Clarify when to re-read SKILL.md sections.
