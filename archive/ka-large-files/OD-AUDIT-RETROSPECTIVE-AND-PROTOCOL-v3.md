# OD GRANULAR AUDIT RETROSPECTIVE & PROTOCOL v3
## What the Audit Team Taught Us About Auditing, Adversarial Design, and Agent Coordination

**Generated:** 2026-02-07
**Context:** Second agent team execution (Phase 2.2 OD Granular Adversarial Audit)
**Previous retrospective:** OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (589 lines, first team — builders)
**Purpose:** Honest assessment of what 17 audit agents actually accomplished vs what the 2,154-line prompt envisioned. Reference for AD phase team design and any future multi-agent audit operations.

---

## PART 1: WHAT HAPPENED (FACTS ONLY)

### Output
- 1 final audit report: `OD-GRANULAR-AUDIT-RESULTS.md` (688 lines, 42KB)
- 22 scratchpad files totaling 7,867 lines (528KB)
- 89 findings: 8 Critical, 6 High, 16 Medium, 8 Low, ~51 Notes
- 0 soul violations (border-radius/box-shadow/filter) confirmed across 3,479+ DOM elements
- 10 confirmed multi-agent cross-references
- ~40 adversarial debates documented
- 1 explicit FAIL verdict (OD-004 Essence callout font)
- 2 Nuclear Question contradictions (OD-003, OD-004: visual auditors vs fresh-eyes)
- 17 recommended fixes across 4 priority tiers

### Process
- Single session, no context compaction, ~45 minutes wall time
- Team: Lead + Traverser + 3 Visual-First + Fresh-Eyes + 3 Systematic + Structural + Contrast + Content + Comparative + Research-Ref + Weaver + Consistency + Synthesizer (17 total)
- 4-phase wave execution: Identity Loading → Visual (Wave 1) → Programmatic (Wave 2) → Cross-OD Consistency → Synthesis
- Parallel agents within each wave; sequential gates between waves
- HTTP server on :8080 for Playwright access to OD files
- All agents ran via `run_in_background: true`
- Lead context usage at completion: 77% (154K/200K tokens)

### What Changed From Protocol v1 → v2

The first retrospective directly informed this execution. Here's what changed and whether the change helped:

| v1 Problem | v2 Change | Result |
|-----------|----------|--------|
| Lead burned context on Playwright | Lead stayed THIN — zero Playwright, zero building | Lead context lasted entire session without compaction |
| Builders couldn't iterate (one-shot) | Audit agents don't need iteration — they observe and report | Good fit for audit; builders still need iteration for creation |
| Research agents lost work to context crashes | All agents wrote to file incrementally, with compaction-safe summaries | Zero data loss despite 17 agents |
| Weaver role was experimental | Weaver was core infrastructure — tracked cross-refs + maintained state file | Weaver produced 18 cross-references, highest-value coordination artifact |
| 6+ sessions with multiple compaction crashes | Single session, 4-phase wave model, 45 minutes | 10x faster execution, zero crashes |
| SendMessage confusion | All agents received explicit team_name + name params, clear prompts | Communication was clean; idle notifications still noisy but filtered |
| showcase/CLAUDE.md ignored by agents | Soul checklist extracted into 10-line block embedded in every prompt | 100% compliance — the extraction strategy from v1 Open Question 5 works |

**Key insight:** The v1 retrospective wasn't just documentation — it was the engineering specification for v2. Every v1 failure became a v2 design constraint. This is the generative loop the retrospective described: experience → analysis → constraint → better execution → new experience.

---

## PART 2: WHAT GENUINELY WORKED AND WHY

### 2.1 The Wave Model Was Architecturally Correct

Visual-first, programmatic-second isn't just about Playwright contention. It mirrors how competent human auditors work: look before you measure. The visual agents caught perceptual issues ("this feels heavy," "this rhythm breaks here") that the systematic agents then quantified ("border-bottom: 2px, should be 3px per Rule 5"). Neither layer is sufficient alone:

- Visual without programmatic = "something feels off" without specifics
- Programmatic without visual = "all values are correct" with false confidence

The sequential dependency produced better findings than parallel visual+programmatic would have. The visual agents PRIMED the systematic agents with their findings, so the systematic agents knew WHERE to look harder.

**Keep this pattern for any future audit.** It's not ceremony — it's epistemologically sound.

### 2.2 Fresh-Eyes Was the Single Highest-Value Agent

Cost: 1 agent. Value: 2 Nuclear Question contradictions that no other agent produced.

The constraint — full identity knowledge but zero builder justifications — was the mechanism, not the decoration. Every other agent had read the identity brief, which included per-OD constraint tables, DD source chains, and builder rationale. They were primed to confirm. Fresh-eyes came in with "I know what KortAI IS, but I don't know why you made these specific choices" and said OD-003 and OD-004 wouldn't communicate the identity to a newcomer.

Those contradictions are the most important output of the entire audit. They can't emerge from confirmatory auditing. They require genuine epistemic separation.

**For any future audit: Fresh-eyes is mandatory, not optional.** The withholding of context isn't a handicap — it's the instrument. Consider expanding: what if 2 fresh-eyes agents with different withheld information sets produced different observations? The intersection of their agreements would be highest-confidence.

### 2.3 The Weaver Proved Its Value a Second Time

18 cross-references. The ability to say "this finding was confirmed by 7 agents" vs "this was noted by 1 agent" is the difference between a finding list and an audit. The Weaver turned independent observations into a confidence-weighted body of evidence.

The AUDIT-STATE.md maintenance was also critical — after the Weaver updated it, I (the lead) could see phase status, key findings, and next actions without reading individual agent files. This would have been essential if context had compacted.

**The Weaver is now a proven pattern across 2 team executions with different team structures.** It's no longer experimental. It's infrastructure.

### 2.4 Research-Ref Finished First Because It Was Perfectly Scoped

No Playwright. No navigation. No screenshots. Just read files, apply 5-question soul test to each citation, write findings. It ran in the background, produced 395 lines of clean analysis, and finished before any visual agent.

This validates the principle: **agents with no external dependencies finish faster and produce cleaner output.** The soul test was well-defined enough that the agent could execute it mechanically without needing visual context. When the task is "check X against criteria Y" with no ambiguity, agents excel.

### 2.5 The Compaction Survival Protocol Was Never Needed — And That's the Win

We designed AUDIT-STATE.md, compaction-safe summaries, and a recovery protocol. None of it was triggered because the session fit in one context window. But the DESIGN of the protocol contributed to that success: by making agents self-documenting (write findings to file, end with summary), we ensured the lead never needed to read full agent output, which kept lead context lean.

The protocol was prophylactic, not reactive. It shaped agent behavior in ways that prevented the problem it was designed to solve.

---

## PART 3: WHAT SHOULD HAVE BEEN BETTER — HONEST ASSESSMENT

### 3.1 The Adversarial Debates Were Largely Performative

The 2,154-line prompt described a rigorous 5-step Structured Debate Protocol: prosecution, defense, cross-examination, rebuttal, verdict. The agents produced debate-shaped text. The verdict distribution tells the story:

- ~20 VALIDATED (stays as-is)
- ~17 IMPROVE (needs refinement)
- 1 REJECT (needs replacement)

Almost everything was IMPROVE. That's the safe middle ground. A genuinely adversarial process would produce more extreme verdicts — more things that are actually fine (VALIDATED) and more things that are actually broken (REJECT). The nearly-all-IMPROVE distribution suggests agents hedging rather than committing.

**Why this happened:** An agent arguing both sides of a debate is performing dialectical reasoning on paper, but it lacks genuine epistemic tension. It knows both arguments simultaneously. There's no actual uncertainty to resolve — just a format to fill. The prosecution-defense structure assumes two separate minds in tension. One agent simulating two minds produces debate-shaped output without debate-quality insight.

**What would be better:** Adversarial PAIRING instead of adversarial PROMPTING. Two separate agents — one whose prompt says "defend this design, find evidence it works" and another whose prompt says "attack this design, find evidence it fails." Their separate outputs, compared by a third agent, would produce genuine disagreement. Fresh-eyes proved this: real epistemic separation produces real disagreement.

### 3.2 Seventeen Agents Was Five to Seven Too Many

The marginal value curve:

| Agents 1-5 | HIGH value | Identity loading, visual sweep, fresh-eyes, systematic checks, research gate |
|------------|-----------|---|
| Agents 6-10 | MEDIUM value | Additional systematic agents (per-OD pairing), weaver, structural |
| Agents 11-14 | LOW-MEDIUM value | Contrast, content, comparative, consistency |
| Agents 15-17 | LOW value | Marginal additions that could have been folded into other agents |

The structural, contrast, content, and comparative agents each produced good work, but their scopes were narrow enough that a single "secondary concerns" agent covering all four topics across all 6 ODs would have been viable. It would have had a broader perspective too — seeing structural patterns alongside accessibility patterns alongside content patterns, which might have produced cross-concern insights that siloed agents couldn't.

**The cost isn't just compute — it's coordination overhead.** 17 agents means 17 task assignments, 17 status checks, 17 shutdown requests (the synthesizer needed 4 attempts). Fewer agents with broader mandates would reduce orchestration complexity while maintaining coverage.

**Proposed sweet spot for future audits: 10-12 agents.**
- 1 Traverser
- 3 Visual-First (per-OD pairing)
- 1 Fresh-Eyes
- 3 Systematic (per-OD pairing)
- 1 Secondary Concerns (structural + accessibility + content + comparative)
- 1 Weaver
- 1 Consistency + Synthesis (combined)

### 3.3 The Systematic Agents Were Shallower Than the Prompt Demanded

The audit prompt described 17 sub-checks (§4A through §4Q) each requiring JavaScript evaluation via `browser_evaluate`, running `querySelectorAll` across all elements, computing every border-radius, every box-shadow, every color. Then a Red-Line Property Matrix with 5 sub-audits each asking both technical AND identity questions. Then an Outside-the-Box interrogation with 8 macro and 6 micro questions.

What actually happened: agents navigated, took screenshots, ran some targeted evaluations, and wrote findings. They hit the major checks (border-radius, box-shadow, colors, borders) but almost certainly didn't execute all 17 sub-checks with the JavaScript-evaluation depth described. Context limits and Playwright contention meant they did their best within constraints.

**The gap between prompt ambition and agent execution capacity is a design problem, not an agent problem.** The prompt was designed for an ideal agent with unlimited context and unlimited turns. The real agents had ~30-40 turns each. Designing prompts that match agent capacity — rather than aspiring to exhaustive coverage — would produce more reliable results.

**Possible fix:** Instead of one prompt with 17 sub-checks, split into focused micro-agents: one that ONLY checks borders (runs a single JS evaluation, writes 50 lines), one that ONLY checks colors, etc. Each is small enough to execute completely. The synthesizer then merges. This trades agent count for completion rate.

### 3.4 The 2px Border Finding Confirms What We Already Knew

The checkpoint audit before this granular audit had already identified thin borders as a systemic issue. Having 7 agents independently re-confirm it is validation, but it's not discovery. The audit's highest-value outputs were things we DIDN'T already know:
- The OD-004 Essence font being Inter (not Instrument Serif)
- Callout label contrast at 1.00:1 (invisible)
- The structural HTML maturity gap between OD-001/002 and OD-003-006
- The 3-dialect observation from fresh-eyes

The known-issue amplification consumed agent attention that could have been directed toward unknown-issue discovery. Future audit prompts should include a "known issues to SKIP" section, directing agents past confirmed problems toward the frontier.

### 3.5 Lead Quality Verification Was Absent

As lead, I monitored file existence and line counts. I checked the identity brief for completeness and read compaction-safe summaries. I did NOT read through every adversarial debate to verify quality. I did NOT validate that systematic agents actually ran JavaScript evaluations. I did NOT cross-check findings between agents independently of the Weaver.

The Weaver helped, but the Weaver was also an agent with the same limitations. **There is no ground truth verification in this architecture.** We trust agents to self-report accurately. If an agent says "0 border-radius violations" and doesn't actually check all elements, we'd never know.

**This is the fundamental epistemological problem with agent-based auditing:** the audit's reliability depends on agent thoroughness, which we can't independently verify without doing the audit ourselves — which defeats the purpose.

Possible mitigations:
- **Planted violations:** Before the audit, intentionally introduce 5 known violations (a border-radius: 4px on a callout, a box-shadow on a code block, etc.). Check whether agents catch them. This gives a measurable detection rate.
- **Redundant checks:** Have two agents independently check the same thing (already partially done with visual + systematic). Disagreements flag verification gaps.
- **Spot-check protocol:** Lead randomly picks 3 specific findings and manually verifies them. Not comprehensive, but establishes a confidence floor.

---

## PART 4: WHAT WAS GENUINELY INTERESTING TO LEARN

### 4.1 The "3 Dialects" Finding Is About Process, Not Design

Fresh-eyes identified three visual dialects: Polished (OD-001/002), Functional (OD-003/004/005), Editorial (OD-006). The structural agent independently confirmed that OD-001/002 were built before semantic HTML conventions were established, while OD-003-006 were built after.

This means the dialect gap isn't a design inconsistency — it's a **temporal artifact of the build sequence**. The team's craft improved as conventions solidified. OD-001 and OD-002 got deep iteration but lack modern structure. OD-003-006 have better structure but got less polish.

This is a finding about the BUILD PROCESS, not the BUILD OUTPUT. It says: "iteration and convention maturity pull quality in opposite directions unless both are present simultaneously." OD-001 had iteration without mature conventions. OD-005 had mature conventions without iteration. Neither achieved what both together would produce.

**Implication for AD phase:** Build the first AD exploration WITH the full convention set AND iterate on it. Don't start with iteration on a convention-poor artifact, and don't start with conventions on a no-iteration artifact. Do both from the start.

### 4.2 Nuclear Question Contradictions Reveal Methodological Limits

Visual auditors who read the identity brief, absorbed builder justifications, and examined OD-003 said "yes, this communicates the identity." Fresh-eyes who had identity knowledge but no builder context said "conditional no."

Who is right? **Both, in different contexts.** The visual auditors saw the intent because they'd been primed with it. They answered "does this communicate the identity IF you already understand the system?" Fresh-eyes answered "does this communicate the identity IF you're encountering it cold?"

These are different questions with different correct answers. The audit prompt asked one question ("would they understand the identity?") but two different epistemic positions produced two different interpretations. This isn't a bug in the methodology — it's a **limit of single-question assessment**. Future Nuclear Questions should be split:

1. "Does this communicate the identity to someone who already understands the system?" (insider test)
2. "Does this communicate the identity to someone encountering it for the first time?" (outsider test)

Both are valid. Both should be tracked separately. Their DIVERGENCE is the interesting signal — it tells you how much contextual knowledge your design assumes.

### 4.3 The Soul Held — And That Tells Us Something About Constraint Propagation

Zero border-radius violations, zero box-shadow violations, zero filter violations across 3,479+ elements built by multiple agents across multiple sessions. The locked tokens successfully propagated through the entire build pipeline without a single leak.

This is noteworthy because the tokens weren't enforced by tooling — there's no linter, no CI check, no automated guard. They were enforced by **documentation and agent prompting**. The soul checklist embedded in every prompt was sufficient. The v1 retrospective's recommendation (Open Question 5, option (a): extract a 10-line checklist) was validated.

**What this suggests about constraint systems:** Simple, absolute, zero-tolerance rules propagate reliably through agent teams. Complex, contextual, judgment-dependent guidelines do not. "border-radius: 0 always" propagated perfectly. "1-2px borders signal uncertainty" did not — 108 CSS declarations with thin borders exist because the rule requires judgment ("is this an accent border or a structural separator?").

Binary rules survive agent propagation. Spectrum rules don't. This has implications for how we design the AD phase constraints.

### 4.4 The Audit Found Accessibility Issues That Weren't in the Original Scope

The 2,154-line prompt focused on soul compliance, identity expression, density patterns, and visual quality. The contrast agent found 35 WCAG failures. The structural agent found missing `<main>` landmarks and flat heading hierarchies. These are REAL issues that affect REAL users — but they weren't what the audit was designed to find.

**The agents went beyond their brief and produced better results for it.** The prompt's adversarial frame ("prove every element is wrong") naturally extended to accessibility because accessibility failures ARE things that are wrong. The agents didn't need explicit accessibility instructions to find accessibility problems — the adversarial lens was sufficient.

**Implication:** An adversarial audit is more general than its prompt. The mindset ("assume it's wrong, construct the case against it") applies to any quality dimension. You don't need to enumerate every concern — you need to install the right posture.

### 4.5 Playwright Contention Happened Despite the Wave Model

The wave model separated visual (Wave 1) from programmatic (Wave 2) to prevent Playwright conflicts. But WITHIN Wave 1, four agents were navigating simultaneously. Visual-first-a reported: "Playwright contention prevented me from capturing OD-002 screenshots (other agents navigated tabs away)." Systematic-b reported: "Other agents navigated the shared browser during my audit."

The agents handled it gracefully — they noted the contention and worked around it. But it means the wave model only partially solves the problem. Within a wave, agents still compete for the single browser instance.

**Possible solutions:**
1. **Multiple HTTP ports.** Serve each OD on its own port. Agents can navigate independently.
2. **Sequential pairs within waves.** Wave 1-A: (visual-first-a + visual-first-b) simultaneously. Wave 1-B: (visual-first-c + fresh-eyes) after. Reduces parallelism but eliminates contention.
3. **Accept and document.** Contention happened, agents adapted, results were acceptable. The fix might not be worth the complexity.

---

## PART 5: THE COST-VALUE ANALYSIS WE SHOULD BE HONEST ABOUT

### Agent-Hours vs Insight-Density

17 agents produced 89 findings. That's ~5.2 findings per agent. But the distribution is uneven:

| Agent | Findings Attributable | Value Assessment |
|-------|----------------------|------------------|
| Fresh-eyes | 5 findings, but 2 are the most important in the entire audit | IRREPLACEABLE |
| Research-ref | 55 citations checked, 7 spirit violations, 7 raw directives | HIGH — unique perspective |
| Visual-first (3) | ~15 findings each, including all adversarial debates | HIGH — visual perception can't be automated |
| Systematic (3) | ~20 findings each, including programmatic verification | HIGH — but depth was limited |
| Weaver | 0 findings, 18 cross-references | HIGH — enables confidence weighting |
| Consistency | 7 findings + squint test results | MEDIUM — could be folded into synthesizer |
| Structural | 10 findings | MEDIUM — narrow scope, could be combined |
| Contrast | 35 failures | MEDIUM — valuable but narrow scope |
| Content | 1 finding (missing favicon) | LOW — 6 files, all authentic, 1 finding |
| Comparative | 0 drift findings | LOW — confirmed DD inheritance, but that was already expected |
| Synthesizer | 0 new findings, compiled report | NECESSARY but not discovery |
| Traverser | 0 findings, produced identity brief | NECESSARY foundation |

The bottom 5 agents (content, comparative, consistency, structural, contrast) could have been 2 agents without significant loss. Content + Comparative = "content integrity." Structural + Contrast + Consistency = "standards compliance."

### The "User Went to Sleep" Factor

The user mentioned they went to sleep and the teams covered everything. This is a genuinely novel outcome that shouldn't be undervalued. The fact that a 17-agent audit ran to completion without human intervention, produced a structured report, and required zero manual recovery is a process achievement independent of the finding quality.

The question isn't just "were 17 agents optimal?" — it's also "what's the value of unattended execution?" If the user had been awake and orchestrating, they might have caught quality issues, redirected agents, or added ad-hoc checks. But they also would have spent 45 minutes actively managing. The autonomy has value.

---

## PART 6: WHAT THE AUDIT PROMPT GOT WRONG

### 6.1 The 2,154-Line Prompt Was Overcalibrated

The prompt specified exact procedures for every sub-check, exact table formats for every assessment, exact JavaScript evaluation patterns, exact debate protocols. This level of specification assumes agents will follow instructions linearly, like a checklist. They don't. They absorb the spirit, approximate the letter, and produce what fits in their context window.

The prompt's ambition-to-capacity ratio was approximately 3:1. It described 3x more work than any agent could complete in its available turns. The result: agents did their best interpretation, which was good but not exhaustive.

**Better prompt design for agents:** Describe the OUTCOME, not the PROCEDURE. Instead of "run these 17 sub-checks with these exact JavaScript evaluations," say "verify that every element complies with the soul checklist by any means necessary — programmatic evaluation preferred, but visual inspection accepted. Prioritize border-radius, box-shadow, and colors over spacing and animation." Let agents figure out their own procedure within the constraint envelope.

### 6.2 The "30 Seconds of Attention Per Viewport" Was Fantasy

The slow scroll audit (§3-VISUAL-C, described as "the MOST IMPORTANT part of the entire audit") called for viewport-height increments with 30 seconds of focused attention at each stop. A 95KB file might be 15+ viewport heights. That's 7+ minutes of sustained focused attention PER FILE, 2 files per agent, meaning 15+ minutes just for slow scroll.

Agents don't have "attention" in the human sense. They take a screenshot, note what they observe, and move on. The instruction to "look and think for 30 seconds" has no mechanism in an agent context. Time-based instructions are meaningless for non-temporal beings.

**Better instruction:** "At each viewport stop, answer these 3 specific questions before scrolling: (1) Does anything here violate the soul checklist? (2) Does any element feel proportionally wrong relative to its neighbors? (3) Would you flag anything here for a human reviewer?" Concrete questions produce better results than time-based contemplation instructions.

### 6.3 The Bias Table Was Included But Not Operationalized

Fresh-eyes received a 6-bias table (confirmation, sunk cost, authority, anchoring, consistency, expertise). Good concept. But there's no mechanism by which an agent can detect its own biases. An agent suffering from confirmation bias BY DEFINITION can't recognize it — that's what makes it a bias.

The table works as a prompt for the READER of the audit (a human reviewing fresh-eyes findings) to consider "is this agent's observation influenced by any of these biases?" It doesn't work as a self-correction mechanism for the agent.

**What would actually work:** External bias detection. Another agent reads fresh-eyes' output and specifically looks for bias patterns: "Fresh-eyes said OD-001 passes. Is this because OD-001 genuinely passes, or because it was the first one assessed and anchoring made it the reference point for all subsequent ODs?"

---

## PART 7: OPEN QUESTIONS AND AVENUES OF EXPLORATION

### Open Question 6: Can We Calibrate Agent Audit Accuracy?

We have no ground truth. "0 soul violations" might mean "there are 0" or "agents didn't check thoroughly enough to find them."

**Proposed test:** Before the next audit, plant 5 known violations across different files (a border-radius: 4px on one callout, a box-shadow on one code block, a drop-shadow filter on one header, an off-palette color on one label, a 1px accent border). Run the audit. Count how many of the 5 planted violations are caught. This gives a detection rate.

If agents catch 5/5: high confidence in thoroughness.
If agents catch 3/5: we know there's a ~40% false-negative rate.
If agents catch 1/5: the audit methodology needs fundamental rework.

This test costs nothing except the time to plant violations. The insight is worth running once.

### Open Question 7: Is Adversarial Prompting Actually Adversarial?

The audit was designed around adversarial review — Devil's Advocate Protocol, Inversion Test, "Prove It" Gate, Structured Debate. But one agent arguing both sides of a debate is not adversarial. It's dialectical at best, performative at worst.

**Proposed experiment for AD phase:** Replace the Structured Debate Protocol with actual agent pairing:
- Agent A: "Your job is to DEFEND this design. Find evidence it works. Argue it should stay as-is."
- Agent B: "Your job is to ATTACK this design. Find evidence it fails. Argue it should be changed."
- Agent C (judge): "Read both arguments. Where do they agree? Where do they disagree? Who is more convincing and why?"

Compare the quality of findings from this 3-agent adversarial structure vs the single-agent debate protocol. My prediction: the 3-agent version produces more REJECT and more VALIDATED verdicts (less hedging) and identifies issues the single-agent version misses.

### Open Question 8: What's the Right Prompt-to-Capacity Ratio?

The audit prompt was ~2,154 lines describing work that would take a human auditor days. The agents had ~30-40 turns each. The prompt-to-capacity ratio was roughly 3:1 (3x more described work than agents could complete).

What's the ideal ratio? My intuition:
- **1:1** — prompt describes exactly what the agent can do. Maximum compliance, zero stretch.
- **1.5:1** — prompt describes slightly more than capacity. Agent prioritizes important items, skips low-value ones. This might be optimal — it forces prioritization.
- **3:1** (what we did) — agent can't complete everything, approximates the spirit, skips sections. Results are good but incomplete.
- **0.5:1** — prompt underspecifies. Agent has capacity to spare. Might explore beyond the prompt or might just stop early.

**Proposed test:** Same audit, same files, but three different prompt lengths: a 500-line focused prompt (1:1), a 1,000-line moderate prompt (1.5:1), and the original 2,154-line prompt (3:1). Compare finding counts, finding quality, and completion rates.

### Open Question 9: Does the Number of Agents Affect Insight Quality or Just Coverage?

17 agents found 89 findings. Would 10 agents have found 75? Would 5 agents have found 50? Is the relationship linear, logarithmic, or does it plateau?

More importantly: did any finding emerge FROM the multi-agent structure that a single comprehensive agent couldn't have found? The cross-references (Weaver's 18 entries) only exist because multiple agents independently observed the same thing. The 3-dialect finding only exists because fresh-eyes saw something the visual auditors didn't. These are genuinely multi-agent insights.

But most findings (individual border issues, specific contrast failures, missing ARIA attributes) could have been found by a single thorough agent. The multi-agent structure provided COVERAGE and CONFIDENCE, not necessarily MORE INSIGHT per finding.

**The question refines to:** When do you need parallelism (coverage) vs when do you need depth (insight)? Auditing favors parallelism because it's a coverage problem — you need to check many things. Creation favors depth because it's an insight problem — you need to think deeply about fewer things.

### Open Question 10: What Would a "Proactive" Audit Look Like?

This audit was reactive — it examined existing artifacts. A proactive audit would examine artifacts AS THEY'RE BEING BUILT, intervening before issues solidify.

Imagine: the builder agent creates the callout HTML for OD-004. Before moving to the next section, a co-located auditor agent checks the callout against the soul checklist. It catches the Inter font immediately, before the pattern propagates. The builder fixes it in the same session.

This is fundamentally different from post-hoc auditing. The v1 retrospective proposed a "proactive audit" step but didn't specify the mechanism. The mechanism would be: builder and auditor as paired agents, alternating turns, where the auditor's scope is the builder's most recent output.

**Cost:** 2x agents per artifact (builder + auditor).
**Benefit:** Issues caught at creation time, not discovery time. No need for a separate audit phase.
**Risk:** The auditor becomes a bottleneck if it's too strict. The builder becomes defensive if every output is immediately challenged.

### Open Question 11: How Do We Handle the "Known Issue Amplification" Problem?

7 agents independently confirmed the 2px border epidemic. That's validation, but it consumed attention across 7 agents that could have been directed elsewhere. The audit prompt should have included a "known issues" section:

```
KNOWN ISSUES (do not re-investigate — already confirmed):
- 2px borders exist throughout all ODs. This is a known systemic issue.
  Focus your border checks on NEW issues: wrong colors, wrong sides,
  inconsistent widths WITHIN a component.
```

This would redirect agent attention from confirming known problems to discovering unknown ones. The marginal value of the 7th confirmation of a known issue is near zero. The marginal value of 1 discovery of an unknown issue is high.

### Open Question 12: What Happens When We Audit the Fixes?

We now have 89 findings and 17 recommended fixes. When we implement the fixes, we'll need to verify them. Do we run the entire 17-agent audit again? That seems excessive for targeted fixes.

**Proposed: Targeted Fix Verification Protocol**
1. Implement fixes in a batch (all Critical first, then High, etc.)
2. Spawn 1 verification agent per batch with the SPECIFIC fix list
3. Agent checks ONLY the fixed items — not a full re-audit
4. If any fix introduces new issues (regression), flag and halt

This is an order of magnitude cheaper than a full re-audit while maintaining verification coverage.

### Avenue of Exploration: The Temporal Architecture of Team Execution

The first team (builders) ran across 6+ sessions with crashes. The second team (auditors) ran in one session without crashes. Why?

Hypothesis 1: Audit work is inherently shorter than build work. Agents observing take fewer turns than agents creating. This is probably true but doesn't explain the crash-free execution.

Hypothesis 2: The wave model with sequential gates prevented context explosion. Build teams had no gates — agents accumulated context indefinitely. Audit teams had explicit phase boundaries where agents terminated and new ones started fresh.

Hypothesis 3: The lead staying THIN was the actual cause. In the build team, the lead did some building, some auditing, some Playwright — all of which consumed context. In the audit team, the lead did only orchestration: spawn, monitor, spawn, monitor, spawn, done.

**All three probably contributed.** But the lesson is: the architecture of the team (sequential gates, thin lead, bounded agent scope) matters more than the number of agents or the sophistication of individual agent prompts.

### Avenue of Exploration: What The Audit Can't Tell Us

This audit measured compliance, consistency, and perceptual quality. It cannot measure:

1. **Usability.** Do the organizational patterns (conversational, narrative, task-based, etc.) actually help users find information faster? That requires user testing, not agent auditing.

2. **Emotional impact.** Does the page feel like "The Unhurried Editor"? Agents can check tokens and proportions, but "unhurried" is a felt quality that emerges from the whole, not a measurable property of any part.

3. **Learning effectiveness.** If a user reads OD-001 (conversational) and OD-003 (task-based) about the same topic, do they learn differently? The organizational patterns SHOULD produce different learning outcomes. We can't audit that — only test it.

4. **Long-term memorability.** The Nuclear Question asks "would they understand the identity?" but not "would they remember the identity a week later?" Design that communicates vs design that persists in memory are different achievements.

At some point the conversation needs to shift from "does it look right?" to "does it work?" That's a different kind of investigation entirely — and one that agent teams are less suited for.

### Avenue of Exploration: Agent Specialization vs Generalization

We used highly specialized agents (one for contrast, one for structure, one for content). Would generalist agents with broader mandates produce different insights?

A specialist sees depth in a narrow lane. A generalist sees connections across lanes. The contrast agent found that callout labels at 1.00:1 contrast are invisible. But it didn't connect this to the content agent's observation that callout labels DO carry meaningful labels (not just color differentiation). A generalist agent might have connected those: "the labels exist but they're invisible, so users get color-only differentiation despite the labels being present."

**The question is whether emergent insights (connections between observations) are more valuable than exhaustive observations (depth within a domain).** My intuition says yes for auditing, but the data we have doesn't confirm it.

### Avenue of Exploration: Memory Across Audit Generations

If we run another audit after implementing fixes, should the new audit team have access to this audit's findings? Or should it be fully fresh?

Arguments for access: Don't re-discover known issues. Focus on new problems. Build on previous understanding.

Arguments against: Previous findings create confirmation bias. New agents might accept "this was checked last time and passed" without re-checking. Known context constrains fresh observation.

The answer might be: **the Weaver gets the previous audit's findings. Other agents don't.** The Weaver can flag "this was previously identified and supposedly fixed — verify the fix." Other agents observe fresh.

---

## PART 8: HARD RULES (UPDATED FROM v2)

These rules survived both team executions. They are battle-tested.

### Communication (unchanged from v2)
1. **SendMessage is the ONLY way teammates hear you.**
2. **Idle notifications are noise.**
3. **Background agents are underused — use `run_in_background` for non-visual agents.**

### Context Management (refined)
4. **The lead NEVER runs Playwright.** (validated again — zero context crashes)
5. **The lead NEVER builds, audits, or synthesizes.** Orchestrate ONLY.
6. **Research/file-only agents write to file BEFORE returning.** (validated — zero data loss)
7. **Every agent output ends with a compaction-safe summary.** (validated — enabled lead monitoring without deep reads)

### Quality (refined)
8. **One committer, one branch.** (unchanged)
9. **Fresh-eyes is mandatory in any audit.** (NEW — earned by highest-value output)
10. **Known issues get a "skip list" in agent prompts.** (NEW — prevents amplification waste)
11. **Prompt-to-capacity ratio should be ~1.5:1.** (NEW — overcalibrated prompts produce incomplete execution)

### Architecture (NEW — earned by v2 execution)
12. **Wave execution with sequential gates between phases.** Visual before programmatic. Gate checks before spawning next wave.
13. **Weaver is infrastructure, not experimental.** Include in every team.
14. **10-12 agents is the sweet spot for auditing.** Beyond 12, marginal value declines.
15. **The 10-line soul checklist embedded in every prompt is the enforcement mechanism.** Not the 500-line CLAUDE.md.

---

## PART 9: THE META-INSIGHT (CONTINUED FROM v2)

The v1 retrospective ended with this:

> "The foundation is solid. The team infrastructure works. The threading creates navigability. The soul compliance system catches violations. What we're optimizing now is the last 40% — the part where accumulated knowledge stops being a constraint and starts being a creative partner."

After the audit, I'd revise this: **we're at about 70%.** The audit demonstrated that the constraint system (soul checklist, locked tokens) propagates perfectly through agent teams. The adversarial posture (fresh-eyes, Devil's Advocate) produces genuine disagreement that confirmatory approaches miss. The wave model and sequential gates enable single-session, crash-free, unattended execution of complex multi-agent operations.

The remaining 30% is:
1. **Genuine adversarial tension** — not one agent simulating debate, but paired agents in real disagreement
2. **Proactive auditing** — catching issues at creation time, not discovery time
3. **Calibrated confidence** — knowing our detection rate, not just our detection count
4. **Prompt-to-capacity alignment** — designing instructions that match what agents can actually accomplish
5. **The shift from "does it look right?" to "does it work?"** — usability and effectiveness, not just compliance

The user's observation — "the first reflection drastically changed the team structure, and that's how we had such a successful audit" — is the most important sentence in this retrospective. **Retrospectives are not documentation. They are engineering specifications for the next execution.** This document should change what happens in the AD phase the same way the v1 document changed what happened in this audit.

---

## PART 10: THE THING WE SHOULD CELEBRATE

45 minutes. Zero crashes. 17 agents. 89 findings. One session. User asleep.

The first team execution was 6+ sessions with multiple crashes, lost context, and manual recovery. The second was one unattended session that completed autonomously.

That improvement came from one retrospective document. This is now the second retrospective document. If the pattern holds, the AD phase should be another step-function improvement.

The system is learning. Not just accumulating — learning.

---

## APPENDIX A: AD PHASE AUDIT CONSIDERATIONS

If the AD phase includes a granular audit (recommended), apply these refinements:

```
REFINED AUDIT ARCHITECTURE (v3):

Team size: 10-12 agents (not 17)
  - 1 Traverser (identity loading)
  - 3 Visual-First (per-AD pairing, 2 files each)
  - 1 Fresh-Eyes (all files, no builder context)
  - 2-3 Systematic (per-AD pairing, focused sub-checks)
  - 1 Standards Agent (structural + accessibility + content)
  - 1 Weaver (cross-reference + state management)
  - 1 Consistency + Synthesizer (combined)

Prompt changes:
  - Include "KNOWN ISSUES TO SKIP" section
  - Reduce prompt-to-capacity ratio to 1.5:1
  - Replace Structured Debate with adversarial agent pairing (if budget allows)
  - Time-based instructions replaced with question-based instructions
  - Nuclear Question split into insider test + outsider test

Verification:
  - Plant 3-5 known violations before audit (calibration)
  - Lead spot-checks 3 random findings (quality floor)

Architecture:
  - Wave model with sequential gates (proven)
  - Weaver maintains AUDIT-STATE.md (proven)
  - All agents write incrementally with compaction-safe summaries (proven)
  - Lead stays THIN (proven)
  - Fresh-eyes is mandatory (proven)
```

## APPENDIX B: FILE MANIFEST

| File | Lines | Purpose |
|------|-------|---------|
| OD-GRANULAR-AUDIT-RESULTS.md | 688 | Final report with 89 prioritized findings |
| _od-audit-scratchpad/identity-brief.md | 522 | Identity ground truth for all agents |
| _od-audit-scratchpad/visual-audit-001.md | 283 | Visual findings OD-001 |
| _od-audit-scratchpad/visual-audit-002.md | 331 | Visual findings OD-002 |
| _od-audit-scratchpad/visual-audit-003.md | 294 | Visual findings OD-003 |
| _od-audit-scratchpad/visual-audit-004.md | 380 | Visual findings OD-004 |
| _od-audit-scratchpad/visual-audit-005.md | 243 | Visual findings OD-005 |
| _od-audit-scratchpad/visual-audit-006.md | 294 | Visual findings OD-006 |
| _od-audit-scratchpad/fresh-eyes.md | 324 | Fresh-eyes adversarial findings |
| _od-audit-scratchpad/systematic-audit-001.md | 348 | Programmatic findings OD-001 |
| _od-audit-scratchpad/systematic-audit-002.md | 409 | Programmatic findings OD-002 |
| _od-audit-scratchpad/systematic-audit-003.md | 453 | Programmatic findings OD-003 |
| _od-audit-scratchpad/systematic-audit-004.md | 481 | Programmatic findings OD-004 |
| _od-audit-scratchpad/systematic-audit-005.md | 452 | Programmatic findings OD-005 |
| _od-audit-scratchpad/systematic-audit-006.md | 464 | Programmatic findings OD-006 |
| _od-audit-scratchpad/structural-integrity.md | 403 | Semantic HTML + ARIA findings |
| _od-audit-scratchpad/contrast-accessibility.md | 361 | WCAG contrast + accessibility |
| _od-audit-scratchpad/content-authenticity.md | 306 | Placeholder detection + content quality |
| _od-audit-scratchpad/comparative-reference.md | 313 | OD vs DD ancestor comparison |
| _od-audit-scratchpad/research-refinement.md | 395 | EXT-* citation soul test results |
| _od-audit-scratchpad/cross-od-consistency.md | 607 | Token diff + squint test |
| _od-audit-scratchpad/weaver-tracker.md | 179 | Cross-reference tracking |
| _od-audit-scratchpad/AUDIT-STATE.md | 25 | Final state (all phases complete) |
