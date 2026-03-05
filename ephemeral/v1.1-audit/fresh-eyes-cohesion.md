# Fresh-Eyes Cohesion Audit: /research-compose SKILL.md (v1.1)

**Auditor perspective:** First-time reader. No prior exposure to this pipeline, its history, or its vocabulary.
**File reviewed:** `skills/research-compose/SKILL.md` (887 lines)
**Date:** 2026-03-02

---

## 1. Flow Clarity

**Can I follow the pipeline from start to finish?** Mostly yes. The high-level flow is clear: Setup -> Derive (tension-composition) -> Research (5 specialists + synthesizer) -> Build (3-pass rotation) -> Evaluate (perceptual audit) -> Refine (fix cycles). The Quick Reference table at line 29 is excellent and I found myself returning to it multiple times as an anchor.

**Where it gets confusing:**

- **The "Section N" numbering system is disorienting.** The pipeline has Phases (0-5), Steps within phases (2A, 2B, 2C, 2D), and then a separate "Section" numbering system (Sections 0-10) for the research package contents. These Section numbers appear without introduction. When I first hit "Section 0: Soul Checklist" at line 332, I didn't know what numbering system this was or how it related to the Phase numbering. The Section numbers are INTERNAL to the research packages but they're referenced throughout the orchestrator as if the reader already knows them. A one-paragraph explainer mapping Section 0-10 to their purpose would help enormously.

- **The rotation explanation is clear in CONCEPT but muddy in EXECUTION.** Lines 385-387 explain the U-shaped attention curve rationale well. But the actual build passes don't cleanly map to the three packages. Pass 1 gets Package 1 (Foundations), Pass 2 gets Package 2 (Enrichment), Pass 3 gets Package 3 (Hardening). This 1:1 mapping is simple. But then: Pass 2 also gets `_pass-1-decisions.md`, and Pass 3 gets both `_pass-1-decisions.md` AND `_pass-2-decisions.md`. The decisions files are the cross-pass continuity mechanism, but this is only stated implicitly. A sentence like "The decisions.md files are how earlier passes communicate to later passes what was built, since later passes don't see earlier packages" would clarify.

- **Phase 4 is the longest phase section and feels procedural.** The screenshot capture protocol (Steps 4A through 4D) runs from line 490 to line 659 -- 170 lines of dense, step-by-step instructions. The detail level is appropriate for a runbook, but the sheer length makes it hard to see the forest. A brief summary at the top of Phase 4 saying "This phase has 4 steps: screenshot capture, parallel PA audit, weave synthesis, extract comparison report" would help orientation.

- **The jump from Phase 4 to Phase 5 has a decision tree that could be clearer.** Lines 656-658 give three possible outcomes (SHIP, REBUILD, REFINE) as a list. But the implications of REBUILD are vague -- "Ask whether to restart from Phase 1 with different TC analysis" -- does that mean the whole pipeline restarts? Or just Phases 1-3? A reader needs to understand the cost implications here.

- **"Layer B Checkpoint Format" appears before any phase.** The Instrumentation section at line 72 introduces "Layer A," "Layer B," and "Layer C" as if they're well-known concepts. Layer B is defined here. Layer A and Layer C are mentioned at line 843 but never formally introduced. I can infer what they are from context (Layer A = agent logs, Layer B = checkpoints, Layer C = comparison report), but they feel like insider vocabulary.

**Phases that feel under-explained:**

- **Phase 0 is fine** -- simple and clear.
- **Phase 1 is fine** -- clear delegation to the TC skill.
- **Phase 2 is the most well-documented phase** -- comprehensive specialist descriptions, validation steps, synthesizer instructions.
- **Phase 3 is adequate** -- though Pass 2 and Pass 3 are lighter on detail than Pass 1.
- **Phase 4 is over-documented procedurally** but under-documented conceptually. WHY sanitized paths? WHY 5 auditors instead of 3 or 7? WHY this specific question distribution?
- **Phase 5 is adequate** but the cost-warning-before-proceeding pattern is only stated once and could be missed.

---

## 2. Section 10 Integration

**Does the Compositional Questions layer feel organic or bolted-on?**

It feels 70% organic, 30% bolted-on. Here is what works and what does not:

**What works:**
- Section 10 has a clear PURPOSE: generative "What if..." questions that drive multi-channel CSS coordination. This is well-motivated.
- The three sources (TC questions, KB question families, cross-specialist synthesis) are well-differentiated at line 338-340.
- The synthesizer's responsibility for producing Section 10 is clearly placed in Step 2C (line 337).
- The builder reflection adds "questions explored" as a v1.1 dimension (line 475).
- Phase 4 checkpoint now tracks "Channels coordinated per question" and "Questions explored" (line 654).

**What feels bolted-on:**
- **Section 10 ONLY appears in `_package-pass-1.md`.** The Key Design Decisions section (line 856) explains this was deliberate -- questions are explored during structure creation, and Passes 2-3 deepen through the decisions.md handoff. But this explanation comes at the END of the document (line 856), long after the reader has been through the build phases wondering why Passes 2 and 3 don't reference Section 10. The justification should appear at or near the Section 10 introduction (around line 337), not 500 lines later.

- **The thread from TC -> Specialist -> Synthesizer -> Builder -> PA has gaps.** Here is what I can trace:
  1. TC Brief produces "Compositional Questions" section (Phase 1 validation, line 151). Clear.
  2. Specialists 1 and 2 preserve TC Experimental Questions (line 191, 291). Clear.
  3. Synthesizer merges them into Section 10 (line 337-340). Clear.
  4. Builder Pass 1 receives Section 10 via `_package-pass-1.md`. Clear.
  5. Builder Pass 2... where does it see the questions? Through `_pass-1-decisions.md`? This is implied but never stated. The Pass 2 builder instructions say "provide path for agent to Read" for the decisions file, but there is no explicit mention that the decisions file CARRIES question-exploration notes.
  6. Builder Pass 3... same gap. The decisions files are the handoff, but the document never says "Pass 1 must record which questions it explored and how in `_pass-1-decisions.md` so that Pass 2 can deepen them."
  7. PA Weaver checks question-channel coordination (line 654). Clear from the checkpoint template, but unclear from the Weaver's prompt description (lines 608-613). Output 4 mentions "Package Compliance" and "NOVEL/STANDARD compliance tracked separately" but does not explicitly mention Section 10 questions as a tracked dimension -- this only appears in the v1.1 addition note at line 652.

- **The citation prefix `QUESTION` (line 860) is introduced in Key Design Decisions but never appears in the build phase instructions.** The builders are told about 6 citation prefixes, but this information lives in the prompt files, not in the orchestrator document. Since the orchestrator validates outputs, it should know what it is looking for. Currently, the validation steps in Phase 3 do not check for any citation format compliance.

- **The quality floor for Specialist 1 mentions "TC Experimental Questions (Preserved) section present" (line 191), which implies Specialist 1 must carry the TC questions through. But this is a pass-through requirement on a research specialist, not a research task. It feels grafted onto Specialist 1's role rather than being a natural part of its analysis work.**

**Summary:** Section 10 is well-conceived but its integration has seams. The forward references (decisions.md carrying question notes) and backward references (Key Design Decisions explaining Pass 1-only placement) are too far apart. A reader in Phase 3 has to hold in mind an implication from Phase 2 and a justification from the appendix simultaneously.

---

## 3. Validation Gates

**Are the validation checks clear?**

Mostly yes. Each phase has explicit validation steps with numbered criteria. The pattern of "verify file exists, check line count, check for specific content" is consistent and learnable.

**Would I know what to look for at each gate?**

For structural checks (file exists, line count, contains `<style>`), absolutely. For content checks, it gets murkier:

- **Phase 1, criterion 6: "Brief is conviction-driven (creative invitations, not compliance checklists)."** This is a judgment call, not a verifiable check. The document asks the orchestrator to make a subjective assessment, but the orchestrator is explicitly told it handles "plumbing, not creativity" (line 10, 819). These two instructions conflict. How should a non-creative orchestrator judge whether a brief is "conviction-driven"?

- **Phase 2, Step 2D, criterion 3: "grep for sequenced verbs (Read, Deploy, Apply, Internalize). If the file has more checklist verbs (Verify, Fail if, Must be) than recipe verbs, flag it."** This is creative and specific -- I could actually implement this grep. Good gate.

- **Phase 2, Step 2D, criterion 5: "verify at least 2 mechanism rationales reference specific content features."** This requires reading and understanding the mechanism rationales. For an orchestrator that is told not to read full file contents (line 22: "prefer Bash-based checks over reading full file contents"), this seems to require reading the file.

- **Phase 3 validation is mostly structural** (file exists, size comparison, contains `<style>`). This feels appropriately scoped for the orchestrator.

- **Phase 4 validation is delegated to the Weaver agent**, which is sensible.

**Gates that seem too strict:**
- The `>= 130 lines` check for each package file (line 357) combined with the `>= 100 lines` minimum (line 373) creates confusion. Is the floor 100 or 130? The 130-line check at Step 2D and the 100-line fallback at the re-spawn threshold are different numbers.

**Gates that seem too loose:**
- Phase 3 validation never checks that the HTML actually renders content from the markdown. A builder could produce a valid, self-contained HTML file with `<style>` and Google Fonts that contains lorem ipsum, and it would pass all Phase 3 gates. There is no content-fidelity check.
- Phase 3 validation for Pass 2 checks "File is >= size of `_build-pass-1.html`" but file size is a crude proxy. A builder could add 10KB of comments and pass.

---

## 4. Cost Model

**Does the cost estimate make sense?**

The per-phase ranges are: Phase 1 ($3-5), Phase 2 ($10-18), Phase 3 ($12-18), Phase 4 ($5-10), Phase 5 ($0-8 per cycle). Total: $30-59 base.

The actual test runs mentioned in the version history were $28.79 (Yegge/Gas Town, from project memory). This falls below the $30 lower bound, which suggests the estimates are slightly conservative -- fine for budgeting.

**Are agent counts clear?**

Yes. The Quick Reference table (line 38) is explicit: "16-17 base... Maximum with 2 refine cycles: 30 agents." The breakdown per phase is consistent throughout.

**Is the $50 gate understandable?**

Yes, clearly stated at line 93 as a HARD GATE requiring explicit user approval. The Key Design Decisions section (line 862) reinforces this. However, there is a practical gap: the cost estimates are RANGES, not actuals. The orchestrator cannot know the actual cost -- it can only estimate. So when it reports "Cumulative cost estimate: $45-51," has it hit the $50 gate or not? The document should clarify: is the trigger when the UPPER bound exceeds $50, or when the LOWER bound does? Based on the phrasing "If cumulative upper bound exceeds $50" (line 93), this is answered -- but only a careful reader would catch the word "upper bound" in a long sentence.

**Minor issue:** Phase 2's cost note says "$10-18, increased for Section 10 assembly" (line 93). This "increased" language implies the reader knows what the pre-increase number was. For a first-time reader, this is noise -- just state $10-18.

---

## 5. Missing Instructions

**What would I need to know to run this pipeline that the document does not tell me?**

- **How to invoke the pipeline.** The frontmatter lists trigger phrases ("research-compose", "tripod compose", etc.) but does not explain the invocation syntax. Do I type `/research-compose path/to/content.md`? Or `/research-compose` and then provide the path when prompted? The Prerequisites section says "The user provides a path to a markdown file" but does not show the expected input format.

- **What "Agent tool" means concretely.** Line 58 says "Use the Agent tool with `subagent_type: 'general-purpose'` and `model: 'opus'`." This assumes the reader knows there is an "Agent tool" in the Claude Code environment with these parameters. A first-time orchestrator (which is a Claude instance, not a human) probably knows this from its environment, but if a human were reading this document to understand the pipeline, they would be lost.

- **What the TC skill actually does.** Phase 1 delegates to `~/.claude/skills/tension-composition/SKILL.md` but never explains what tension-composition IS. The document says "TC derivation" and "conviction brief" and "metaphor" but never defines these terms. A first-time reader must infer from context that TC is a process for deriving a design metaphor from content. A one-sentence definition would help: "Tension-composition analyzes the content to derive a governing metaphor and compositional direction that guides all design decisions."

- **What "soul principles" are.** Line 106 mentions "soul principles" and lists three CSS rules (border-radius: 0, box-shadow: none, no gradients). But the term "soul" is never defined. Are these the ONLY soul principles? Or are there more in the identity files? The document says "Verify soul principles are clear" but only lists three examples. If there are more, the orchestrator needs to know all of them.

- **What happens if the browser pre-flight fails after install.** Line 111 says to call `browser_install` and retry. But what if the retry also fails? No fallback is provided. Does the pipeline abort? Can it run without screenshots (skipping Phase 4)?

- **What the PA skill questions actually are.** Phase 4 assigns specific questions (E-01 through E-20) to auditors but never lists the questions. The references are to the PA skill at `~/.claude/skills/perceptual-auditing/SKILL.md`. A cross-reference is fine, but the orchestrator should know at minimum that these are experiential/perceptual questions, not technical compliance checks. The parenthetical hints (e.g., "E-01 (first notice)") help but are insufficient to understand the auditing framework.

- **What "STRIPPED version of the PA skill" means in practice.** Line 557 says each auditor receives a stripped version containing only their assigned questions. But WHO does the stripping? The orchestrator? Is there a script? Does the orchestrator manually extract sections? This is a non-trivial text processing task that is described in one line.

- **Whether the 13 prompt files already exist.** The Prompt File Reference (line 866) lists 13 files. But does the reader need to CREATE these, or are they pre-installed? Line 870 says "Prompt files are installed at" the path, implying they exist. But if someone is setting up this pipeline for the first time, they need to know whether to create or find these files.

---

## 6. Version History

**Does the version history accurately describe what changed?**

The v1.1 entry (line 852) lists: "31-finding remediation. Added Compositional Questions layer (Section 10), standardized citation format, TC question carry-through, KB question families, count variability, builder question exploration across 3 passes, PA rebalancing, weaver override visibility, pre-fix preservation, $50 hard gate."

This is a LOT of changes compressed into one table cell. It reads as a changelog dump rather than a narrative of what changed and why. The "Core improvement" sentence at the end is the most useful part.

**Is it useful?**

For someone comparing v1.0 to v1.1, moderately useful as a checklist of what to look for. For a first-time reader, not very -- the v1.0 entry tells me nothing about what the original pipeline looked like, and the v1.1 entry is a feature list without context.

**What would improve it:**

A brief "What v1.0 lacked" statement before the v1.1 changes. Something like: "v1.0 produced pages with 3-4 channel coordination per compositional idea and had no mechanism for carrying generative questions through the pipeline. v1.1 adds Section 10 (Compositional Questions) to push coordination to 5-7 channels."

The Key Design Decisions section (lines 854-864) is MORE useful than the version history table for understanding v1.1 changes. Consider merging them or at least cross-referencing.

---

## 7. Overall Readability

**Rating: 7/10**

**Justification:** The document is well-structured at the phase level. I can follow the overall flow. The Quick Reference table, per-phase validation gates, and output manifest are all useful landmarks. The writing is direct and specific where it matters most (agent spawning, file routing, validation criteria).

It loses points for:
- The dual numbering system (Phases vs Sections) causing confusion (-1)
- Section 10 integration seams requiring forward/backward reading (-0.5)
- Implicit knowledge assumptions (TC, soul, PA questions, agent tool) (-0.5)
- Phase 4's procedural density without conceptual orientation (-0.5)
- Key Design Decisions section appearing after the Output Manifest, making it easy to miss (-0.5)

**The single biggest clarity improvement:**

**Add a "Package Section Map" immediately before Phase 2.** This would be a simple table:

```
| Package Section | Lives In | Purpose | Phase Where Used |
|-----------------|----------|---------|------------------|
| Section 0: Soul Checklist | Pass 1 | Non-negotiable CSS rules | Build Pass 1 |
| Section 1: Build Context | Pass 1 | Metaphor + content map + zones | Build Pass 1 |
| Section 2: Mechanism Selections | Pass 1 | What mechanisms and why | Build Pass 1 |
| Section 3: Findings -> Actions | Pass 2 | Research mapped to CSS | Build Pass 2 |
| Section 4: Zone Architecture | Pass 2 | Zone-by-zone recipe | Build Pass 2 |
| Section 5: Case Study Processes | Pass 2 | What worked in similar builds | Build Pass 2 |
| Section 6: Anti-Patterns | Pass 3 | What to avoid and why | Build Pass 3 |
| Section 7: CSS Examples | Pass 3 | Validated code patterns | Build Pass 3 |
| Section 8: Structural Propositions | Pass 3 | Testable hypotheses | Build Pass 3 |
| Section 9: Consumption Protocol | Pass 1 | How to read the package | Build Pass 1 |
| Section 10: Compositional Questions | Pass 1 | Generative "What if..." prompts | Build Pass 1 (explored), Passes 2-3 (deepened via decisions.md) |
```

This single table would dissolve the numbering confusion, make the rotation strategy concrete, explain where Section 10 lives and why, and serve as a reference for the rest of the document. Every time a "Section N" reference appears later, the reader could return to this map.

---

## Additional Observations

**Things that work particularly well:**
- The context recovery blocks at the top of each phase are a smart pattern for long-running pipelines subject to context compression.
- The "Agent does NOT receive" lists are as important as the "Agent receives" lists. This negative-space documentation prevents accidental context contamination.
- The pre-fix preservation pattern (Step 5D) is simple but thoughtful -- it prevents losing the baseline.
- The STOP condition in Step 2B (3+ specialists below floor) is a good abort mechanism.
- The output manifest at line 776 is clean and complete.

**Things that could be better:**
- The builder reflection at line 475 says "7 dimensions" but the parenthetical lists 7 items with "questions explored" marked as v1.1. The earlier reference at line 797 says "6-dimension reflection." This is an inconsistency -- the output manifest was not updated for v1.1.
- The comparison report extraction at Step 4D (lines 616-652) is a surprising amount of bash scripting for the orchestrator. If the Weaver always produces Output 4 with the exact header "## Output 4: Package Compliance," the grep approach works. But the document itself acknowledges the header might vary (line 629: "If grep finds nothing... the Weaver used a slightly different header"). This fragility suggests the extraction should be part of the Weaver's output contract, not a post-hoc grep.
- Line 38 says "Maximum with 2 refine cycles: 30 agents" but the math is 16-17 base + 7 per cycle x 2 cycles = 30-31. The "30" number is correct only if the base is 16 and each cycle is exactly 7. A small discrepancy but it undermines trust in the estimates.
- The document alternates between addressing the orchestrator as "you" and describing what the orchestrator does in third person. This is mostly consistent ("YOU do this" vs "Agent does") but occasionally blurs (line 819 says "The orchestrator handles plumbing" in third person, while most phase instructions say "YOU verify").
