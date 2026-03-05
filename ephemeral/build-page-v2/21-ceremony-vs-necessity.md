# Ceremony vs Necessity: Adversarial Audit

**Author:** ceremony-auditor (Task #14, Opus)
**Date:** 2026-02-27
**Method:** Compare first-principles design (07) against architecture (03) + window specialist designs (10-13). Apply the STRUCTURAL INTEGRITY test: "If we removed this, would the process break or would we just lose a monitoring feature?"

---

## Framework

Every element in the architecture falls into one of five categories:

1. **GENUINE NEED** -- First-principles calls for it, architecture captures it well
2. **CEREMONY** -- Exists in the architecture because it existed before, not because first-principles demands it
3. **GAP** -- First-principles calls for it, architecture misses it
4. **OVER-ENGINEERING** -- Architecture is more complex than first-principles requires
5. **UNDER-ENGINEERING** -- Architecture is simpler than what the process genuinely needs

The key test: **PLUMBING vs FREEDOM.**
- **Plumbing** (high compliance needed): Which files load, what order, which model, screenshots at which viewports, gate runner JS, routing decisions
- **Freedom** (low pressure needed): What agents create, how they process, creative decisions, quality of output

Ceremony often disguises itself as plumbing. Some plumbing is also over-engineered plumbing.

---

## 1. GENUINE NEEDS: Architecture Captures First-Principles Well

These are the places where the architecture correctly embodies what the first-principles design says is needed. They are the structural spine of the process and should not be touched.

### 1A. Combined TC+BUILD in Window 1

**First-principles says:** "The builder who derives their own metaphor builds with genuine conviction. Translation loss across context boundaries was a documented problem."

**Architecture says:** One Opus agent does TC derivation AND building in a single context window.

**Verdict: GENUINE.** This is the central architectural insight. Both sources agree. The evidence supports it. The creative process guide and the building happen in the same context, preventing conviction-to-compliance drift.

### 1B. Reading Order as Architecture

**First-principles says:** "Content + TC skill first, vocabulary + constraints last. The ORDER matters. Creative framing before compliance material."

**Architecture (Window 1 design, 11-window1-design.md) says:** 7-step sequence with creative process before vocabulary, conviction brief before identity files, conventions last.

**Verdict: GENUINE.** The Window 1 specialist's reading order analysis is the best piece of work in the entire set. The "what happens if order is wrong" section provides causal reasoning, not just preference. This reading order IS the architecture's most important decision.

### 1C. Screenshot Pre-Capture by Orchestrator

**First-principles says:** "The orchestrator captures screenshots before spawning auditors."

**Architecture says:** Same. Detailed protocol for 3 viewports, DPR handling, quality validation.

**Verdict: GENUINE PLUMBING.** This eliminates Playwright contention, enables parallel auditors, and produces a shared visual artifact. This is proven infrastructure that serves a clear structural purpose.

### 1D. Gates and PA Never Cross-Contaminate

**First-principles says:** "Gates and PA run simultaneously. They never see each other's results."

**Architecture says:** Same. Emphasized repeatedly across multiple documents.

**Verdict: GENUINE.** This is a structural integrity concern. If auditors see gate results, they shift from perceiving to verifying. If gates see auditor prose, the routing decision mixes signal types. The separation is not ceremony -- it is epistemic hygiene that protects the quality of both evaluation channels.

### 1E. Different Builder for REFINE

**First-principles says:** "A DIFFERENT Opus instance. They've never seen the content, the conviction brief, or the artifact before."

**Architecture says:** Same. Window 3 is always a different Opus builder.

**Verdict: GENUINE.** Defeats continuation bias. The evidence is strong: +1.5 PA-05 in one REFINE cycle with a different builder. This is a proven intervention.

### 1F. 5-Line Receiving Principles

**First-principles says:** 5-line principles embedded in spawn prompts, not separate 524-line documents.

**Architecture says:** Same. Three different 5-line principles for Window 1, PA auditors, and REFINE builder.

**Verdict: GENUINE.** The 524-line receiving protocol was never read by any agent in full. 5 lines that are operationally embedded at the moment of action outperform 524 lines of design rationale. The Window 1 specialist's analysis of why each line works (11-window1-design.md) provides the best evidence for this.

### 1G. Conviction Brief Format (5 sections, ~50 lines)

**First-principles says:** WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP.

**Architecture says:** Same. No CREATIVE CONDITIONS (builder IS the creator). No EXPLORATION RECOMMENDATION.

**Verdict: GENUINE.** The sections are derived from what Window 2 (auditors see sections 1+4) and Window 3 (REFINE builder sees all) need. Each section has a downstream consumer. Nothing is written for ceremony.

### 1H. 3-Dimension Reflection (vs old 6-Dimension)

**First-principles says:** CONVICTION, ALTERNATIVES, UNRESOLVED. "Merging works because SURPRISES, EXPERIENCE, and UNRESOLVED all point the REFINE builder toward the page's creative frontier."

**Architecture says:** Same 3 dimensions with the same rationale.

**Verdict: GENUINE.** 6 dimensions produced analytical separation of intertwined observations. 3 dimensions let the builder write freely about the creative state. The reduction is not ceremony-cutting for its own sake -- it is recognizing that 6 artificial bins produced worse signal than 3 natural bins.

### 1I. One REFINE Cycle Default

**First-principles says:** "+1.5 PA-05 in one cycle. Diminishing returns after the first. User escalates."

**Architecture says:** Same. Maximum 1 automatic REFINE, user can request second.

**Verdict: GENUINE.** Automatic multi-cycle was optimizing for pipeline metrics, not user judgment. The user sees the page and decides. This is correct.

---

## 2. CEREMONY: Things That Exist Because They Existed Before

These are elements in the architecture that the first-principles design does not call for. They exist because the old pipeline had them and they survived into the new design by inertia, not by necessity.

### 2A. Execution Tracker Template (~60 lines)

**First-principles says:** NOTHING. The word "tracker" does not appear in the first-principles design. The implementation sequence (Phase A/B/C) mentions no tracking template.

**Architecture (04-reference-file-map.md) says:** "MODIFY -- simplify to ~60 lines. Essential fields: build date, content path, slug, conviction brief filename, artifact filename, gate results summary, auditor count, auditor verdicts, routing decision, REFINE (yes/no)."

**The structural integrity test:** If we removed the execution tracker, would the process break? NO. The orchestrator writes gate results to `_gate-results.json`. Auditors write to `_pa/auditor-*.md`. The routing decision is reported to the user. Every piece of information the tracker would contain already exists in the files the process naturally produces. The tracker is a SUMMARY of information that is already stored.

**Counter-argument:** "But without the tracker, how do we know what happened in the build?" You read the files. `_gate-results.json` tells you gates. `_pa/auditor-*.md` tells you auditor verdicts. The tracker is a convenience document for post-hoc review, not a structural requirement.

**VERDICT: CEREMONY.** Strip the tracker entirely. If post-hoc review is needed, the orchestrator can print a summary to the conversation at the end of the build. No file needed.

### 2B. gate-manifest.json (~200 lines)

**First-principles says:** "A gate runner JS file. The specific gates and thresholds come from the gate audit." No mention of a separate manifest.

**Architecture (04-reference-file-map.md) says:** "MODIFY -- update to reflect ~28 surviving gates. Loaded by orchestrator to know which gates to run and in what order."

**The structural integrity test:** The gate-runner-core.js file already defines every gate function. The functions run or they don't. A separate JSON manifest that lists the gates is a registry of what is already encoded in the JS. The orchestrator does not read the manifest and then selectively call gates -- it calls one `browser_evaluate` that runs ALL gates (as correctly specified in the plumbing spec's Step 3).

**Counter-argument:** "The manifest provides human-readable documentation of which gates exist." That is documentation, not plumbing. Documentation is useful but it is not a structural dependency.

**The plumbing spec (10-orchestrator-plumbing.md) makes this contradiction visible:** Step 3 specifies a SINGLE ATOMIC gate runner call that runs ALL gates. If the gate runner runs everything in one call, what does the manifest control? Nothing.

**VERDICT: CEREMONY.** The gate manifest is a registry of information already encoded in the JS code. If someone needs to know which gates exist, they read the gate runner code or the gate audit report. The manifest adds a synchronization burden (keep manifest in sync with JS) for zero structural benefit.

### 2C. Separate pa-questions.md File (~200 lines)

**First-principles says:** "The 20 experiential questions (E-01 through E-20) and the Section 0 protocol are exactly what the auditors need. Satisfied by: The PA skill."

**Architecture (03-skill-architecture.md) says:** "The orchestrator EXTRACTS the question text from the PA skill and embeds it directly in each auditor's prompt."

**Architecture (04-reference-file-map.md) says:** "MODIFY pa-questions.md -- reduce to 20 experiential questions, ~200 lines."

**The structural integrity test:** The orchestrator extracts questions from the PA skill file. It does not read a separate pa-questions.md file. The pa-questions.md file in `ephemeral/va-extraction/` is a legacy artifact from the old pipeline where questions were stored separately. In the new pipeline, the PA skill IS the canonical source and the orchestrator reads it directly.

**VERDICT: CEREMONY.** The questions live in the PA skill. There is no separate pa-questions.md in the new process. The reference file map lists it by inheritance from the old pipeline's file inventory. Delete the reference.

### 2D. Separate pa-weaver.md File (~200 lines)

**First-principles says:** "The PA skill's 'THE WEAVER: CREATIVE SYNTHESIS' section is complete and well-designed."

**Architecture (03-skill-architecture.md) says:** The Weaver protocol is embedded in the Weaver's prompt by the orchestrator. The Weaver does not receive the full PA skill.

**Architecture (04-reference-file-map.md) says:** "MODIFY pa-weaver.md -- simplify to ~200 lines for high-stakes path only."

**The structural integrity test:** The Weaver's protocol is embedded in the Weaver spawn prompt by the orchestrator. The orchestrator constructs the Weaver's prompt from embedded literal text, not by pointing the Weaver at a file. A separate pa-weaver.md file is a reference document the orchestrator reads for its own understanding, but the Weaver never sees it.

**But there is a genuine need:** The orchestrator needs to know WHAT to put in the Weaver prompt. If the Weaver protocol is not documented somewhere, the orchestrator's skill file must contain it inline. The question is: does this documentation belong in a separate file or inline in the skill?

**VERDICT: BORDERLINE CEREMONY.** The Weaver protocol content is genuinely needed, but a separate file is not. The Weaver protocol should be INLINE in the /build-page skill file, like the receiving principles and the conventions brief. This eliminates one file reference and puts the Weaver's instructions where they are used: in the skill that constructs the Weaver's prompt.

### 2E. pa-manifest.md (~60 lines)

**First-principles says:** Nothing about a PA manifest. The auditor assignment matrix is specified inline.

**Architecture (04-reference-file-map.md) says:** "MODIFY -- simplify to ~60 lines. Tracking which auditor answered which questions."

**The structural integrity test:** The orchestrator constructs auditor prompts with specific question assignments (hard-coded in the skill: Auditor A gets E-01 through E-10, etc.). The assignment is deterministic, not tracked. After auditors complete, the orchestrator can read `_pa/auditor-A.md` and see which questions were answered. A PA manifest tracking "which auditor answered which questions" duplicates information that is (a) deterministic from the skill's hard-coded assignment and (b) visible in the auditor report files.

**VERDICT: CEREMONY.** The auditor assignment is deterministic. The reports are self-documenting. The manifest adds no information.

### 2F. Builder Narration Gates (BV-08, GR-83, GR-84, GR-43)

**First-principles says:** Nothing about builder narration gates. The builder produces 3 files (HTML, brief, reflection). Gates check the HTML for mechanical compliance. There is no mention of INTENT comments, IMPROVEMENTS comments, SELF-EVALUATION comments, or brief-output diff.

**Architecture (02-gate-audit.md) says:** 4 RECOMMENDED builder narration gates in "Category H: Builder Narration Gates -- KEEP for compression loss defense."

**The structural integrity test:** These gates require the builder to embed specific HTML comments (`<!-- INTENT: -->`, `<!-- IMPROVEMENTS: -->`, `<!-- SELF-EVALUATION: -->`) and maintain a certain level of comment coverage. In the old pipeline, these comments served as a communication channel between the builder and the IMPROVE agent. In the new pipeline, there IS no IMPROVE agent. The REFINE builder reads auditor reports and the reflection, not HTML comments.

**Counter-argument from gate audit:** "BV-08 catches what the builder dropped during compression. D2 crack was a proven failure mode." This is true. But in the new pipeline, the conviction brief (not the HTML comments) is the specification. The PA auditors (not BV-08) catch what was dropped perceptually. The REFINE builder reads the reflection (not INTENT comments) to understand the creative state.

**VERDICT: CEREMONY from the old IMPROVE-cycle architecture.** The builder narration gates (BV-08, GR-83, GR-84, GR-43) were designed for a multi-cycle IMPROVE process where HTML comments communicated between iterations. The new single-REFINE architecture communicates through files (reflection, auditor reports, conviction brief). HTML comment mandates add cognitive load on the builder for zero downstream benefit.

**Recommendation:** Strip all 4 builder narration gates. This reduces the gate count from 28 to 24. The brief verification gates (BV-01 through BV-04) remain because they check a file the process depends on. The narration gates check artifacts no downstream consumer reads.

### 2G. GR-63 (Builder Experiential Marker)

**First-principles says:** Nothing about an experiential marker HTML comment.

**Architecture (02-gate-audit.md) says:** "REQUIRED. HTML contains `<!-- EXPERIENTIAL-CHECK: -->` with >= 100 chars mentioning legibility + visual clarity. Evidence the builder actually looked at their own work."

**The structural integrity test:** This gate requires the builder to embed a comment proving they "looked at their own work." But the builder is an LLM -- they wrote HTML, they did not LOOK at the page. The experiential check is a fiction: the builder writes "I checked legibility" without having seen the page rendered. The ACTUAL experiential check is Window 2's PA auditors, who DO see the page rendered.

**Counter-argument:** "Gas Town incident: the builder never self-checked." The Gas Town fix was to add a comment. But the comment does not cause the builder to check -- it causes the builder to WRITE that they checked. These are different things. The builder cannot see the rendered page. The PA auditors can. The experiential check is correctly placed in Window 2, not Window 1.

**VERDICT: CEREMONY.** The comment is a compliance artifact that cannot cause the behavior it claims to verify. The 3-dimension reflection already captures the builder's self-assessment (CONVICTION dimension: "where did you succeed and fall short?"). GR-63 adds no structural value.

**Gate count after 2F + 2G:** 28 -> 23 essential gates (removing BV-08, GR-43, GR-63, GR-83, GR-84).

### 2H. GR-64 (Usability Priority Verification)

**First-principles says:** The orchestrator checks for illegibility/broken usability BEFORE spawning auditors. If found, it's pre-seeded into auditor prompts.

**Architecture (02-gate-audit.md) says:** "GR-64: If >= 3/9 auditors flagged usability issues, Weaver Fix #1 must contain usability term."

**The structural integrity test:** GR-64 checks whether the Weaver's report prioritizes usability. In standard mode (no Weaver), this gate has no target. In high-stakes mode, it checks a Weaver report that was produced by a fresh-eyes agent instructed to prioritize usability (receiving principle line 4: "If text is illegible or something is broken, that outranks everything else"). If the Weaver ignores usability issues that 3+ auditors flagged, the Weaver has failed as an agent, and a gate checking the Weaver's output cannot fix that.

**VERDICT: CEREMONY.** The usability check is genuine (orchestrator experiential scan + auditor receiving principle). The meta-check on the Weaver's report is ceremony -- it verifies that an agent followed its instructions by checking the agent's output for a keyword. If the Weaver fails to prioritize usability, the solution is a better Weaver prompt, not a gate.

**Gate count after 2H:** 23 -> 22 essential gates.

---

## 3. GAPS: First-Principles Calls For It, Architecture Misses It

### 3A. World-Description (~30 lines) -- Missing from Architecture

**First-principles says:** "A ~30-line world-description that encodes the same identity constraints as experiential physics." This is listed as a file that NEEDS TRANSFORMATION from prohibitions.md. The builder needs the WORLD, not the RULES.

**Architecture says:** The builder receives full prohibitions.md (419 lines) + a ~40-line conventions brief. There is no separate world-description file.

**The gap:** The first-principles design identifies that the builder needs identity constraints framed as EXPERIENCE ("Every surface is sharp. Corners are cut, not curved.") not as COMPLIANCE ("NEVER Use border-radius > 0 on Any Element. Why it exists: ..."). The architecture loads the compliance-framed file directly and relies on the receiving principle to reframe it.

**Why this matters:** The receiving principle says "Build from your conviction. Your perception is the tiebreaker." But the builder then encounters 419 lines of "NEVER do X" language. The compliance framing fights the creative framing. A 30-line world-description resolves this tension by encoding the SAME constraints in experiential language.

**Counter-argument:** "The conventions brief covers the mechanical values. Prohibitions.md covers the philosophy. Together they work." But the first-principles design explicitly says: "The builder needs the WORLD, not the RULES. What the builder actually needs: a ~30-line world-description."

**VERDICT: GAP.** The world-description is the first-principles design's most actionable recommendation that the architecture does not implement. Creating it would REPLACE prohibitions.md in the builder's context (not supplement it), saving ~390 lines of context while improving creative framing. The conventions brief handles mechanical values. The world-description handles identity. Prohibitions.md becomes an auditor/research reference, not a builder input.

### 3B. Creative Process Guide (~200-250 lines) -- Partially Present

**First-principles says:** "A simplified version of the TC skill rewrite. The builder needs the CREATIVE PROCESS (~200-250 lines), not the full skill documentation."

**Architecture says:** "TC Skill simplified (~300 lines): Task #5's output." The architecture points to the TC skill simplification as a dependency.

**The gap is partial:** The architecture references the simplified TC skill but does not specify WHAT to cut from the current 841-line (or 1,648-line) skill. The first-principles design provides an explicit cut list: keep Phases 0, 1, 2, 3, 3.5, 4.5; cut Phase 4 compositional architecture, Phase 5 standalone, standalone appendix, library prohibition ceremony. The architecture says "~300 lines" but the first-principles says "~200-250 lines" -- there's a 50-100 line gap that likely represents residual ceremony in the architecture's estimate.

**VERDICT: PARTIAL GAP.** The architecture acknowledges the need but defers to Task #5 without specifying what ~300 lines should contain. The first-principles design's explicit cut list should be the specification for Task #5.

### 3C. No Conviction Brief Excerpts for Auditors -- Contradicted

**First-principles says:** "Auditors must NOT receive: conviction brief, reflection, gate results, build context..." The PA skill's Information Isolation section is referenced as the authority.

**Architecture (03-skill-architecture.md) says:** Auditors receive "Conviction brief Sections 1 + 4 ONLY (world-description + compositional arc) -- extracted from `{OUTPUT_DIR}/_tc-brief.md` and embedded in prompt."

**Window 2 specialist (12-window2-design.md) says:** "My recommendation: NO conviction brief for auditors. The PA skill's fresh-eyes principle is correct."

**The plumbing spec (10-orchestrator-plumbing.md, Step 4.2) says:** Extract brief excerpt (Sections 1 + 4) and embed in auditor prompt.

**VERDICT: CONTRADICTION, not a gap.** The architecture (03) says yes, the Window 2 specialist (12) says no, the plumbing spec (10) says yes. The first-principles design (07) says no. The contradiction needs resolution, and I side with first-principles + the Window 2 specialist: NO conviction brief for auditors. Fresh-eyes principle is correct. If the metaphor is structural, auditors will describe it without being told. If they don't, the metaphor is announced, not structural.

**Impact:** The plumbing spec's Step 4.2 should strip the brief excerpt extraction. Auditors receive ONLY: receiving principle, Section 0 protocol, screenshots, questions, language constraint. Nothing else.

### 3D. Phase-Gated Loading of Vocabulary Within Window 1 Prompt

**First-principles says:** The builder reads vocabulary files "AFTER your brief is written" (receiving principle line 4). Loading order enforces this.

**Architecture (11-window1-design.md) says:** A textual CHECKPOINT between content and vocabulary files: "STOP. Before reading the files below, complete your TC derivation."

**The gap:** This is a SOFT gate that relies on the agent processing sequentially. The first-principles design's loading order specification is structural (creative material at positions 1-3, vocabulary at positions 4-7), but the architecture acknowledges it's a soft gate and argues why a soft gate is sufficient.

**VERDICT: NOT A GAP -- correctly analyzed.** The Window 1 specialist provides the best reasoning in the set for why a soft gate works here: "An agent that skips derivation and jumps to vocabulary would need to actively violate the receiving principle, ignore the checkpoint, AND skip the TC skill's sequential phases." The sequential structure of the prompt is the enforcement mechanism.

---

## 4. OVER-ENGINEERING: Architecture is More Complex Than First-Principles Requires

### 4A. Orchestrator Experiential Scan (Step 2.6 in Plumbing Spec)

**First-principles says:** Nothing about the orchestrator scrolling through the page to check for illegibility.

**Architecture (12-window2-design.md) says:** The orchestrator scrolls through the page at reading speed and checks for illegibility/broken usability. Flags BLOCKING-USABILITY if found.

**The structural integrity test:** If we removed the orchestrator scan, would the process break? No. The auditors will see the page. If text is illegible, they will mention it (receiving principle line 4: "If text is illegible or something is broken, that outranks everything else"). GR-60 checks WCAG contrast ratios programmatically.

**The Window 2 specialist's own analysis admits:** "5 auditors will see the page. If text is illegible, all 5 will mention it. Why does the orchestrator need to check?" The specialist then argues the scan provides "clean signal for routing" -- but the routing decision already handles auditor-reported usability issues.

**Counter-argument:** "The orchestrator needs ground truth to distinguish 'CSS fix needed' from 'creative problem.'" But this is what the routing decision tree does: it reads auditor Section 0 verdicts and classifies issues. The orchestrator does not need its own experiential scan to make a deterministic routing decision.

**VERDICT: OVER-ENGINEERING.** The orchestrator experiential scan duplicates what auditors do AND what GR-60 does. It adds ~2 minutes of orchestrator time and requires the orchestrator to make a judgment call ("is this text readable?") in a system designed for zero interpretable instructions. The Window 2 specialist concedes: "If the first 3 runs never trigger it, consider stripping it."

**Recommendation:** Strip the orchestrator experiential scan. If usability is broken, GR-60 catches contrast and auditors catch everything else. Remove BLOCKING-USABILITY pre-seeding from auditor prompts. The auditor receiving principle already handles usability priority.

### 4B. Contamination Check on Auditor Reports (Step 4.9 in Plumbing Spec)

**First-principles says:** Nothing about checking auditor reports for CSS vocabulary.

**Architecture (10-orchestrator-plumbing.md) says:** "IF file contains 'px' OR 'rem' OR 'font-size' OR 'margin' OR 'padding' OR 'border-radius': PRINT WARNING."

**The structural integrity test:** If an auditor uses CSS vocabulary, their perceptual report is contaminated. But what does the orchestrator DO with this warning? Nothing. It is a warning-only check. The routing decision does not change. The Weaver does not receive the warning. The REFINE builder does not receive it. The contamination check produces information without consequence.

**Counter-argument:** "It tells the user that auditor quality may be compromised." If so, it is a diagnostic for the user, not a structural dependency. The process does not change based on the contamination check result.

**VERDICT: OVER-ENGINEERING.** Information without consequence is ceremony. If contamination is a real concern, the fix is a better auditor prompt (which the language constraint already provides), not a post-hoc check.

### 4C. Structural Validation Tables After Every Window

**First-principles says:** The orchestrator checks "did you produce the thing" (output.html exists, brief exists, reflection exists). Three checks.

**Architecture (03-skill-architecture.md + 10-orchestrator-plumbing.md) says:** Multiple verification steps with sub-checks:
- VERIFY 1.4: Glob for output.html
- VERIFY 1.5: Read first 50 lines, check line count > 10, check contains "<html"
- VERIFY 1.6: Glob for brief
- VERIFY 1.7: Glob for reflection
- VERIFY 4.8: Glob for auditor reports
- VERIFY 4.9: Read each report, check first 30 lines, check for "cold look", contamination check
- VERIFY 5.5: Glob for weaver synthesis
- Plus structural validation tables after Windows 1, 2, and 3

**The structural integrity test:** The MANDATORY verification checks are genuine plumbing. But the architecture layers redundant checks: Glob (does it exist?) + Read (is it non-empty? does it contain specific strings?) + Print (create audit trail). Some of this is genuine (Glob + Read for the HTML is necessary -- the agent might not have written anything). Some is ceremony (checking that the auditor report contains "cold look" or "gut" is verifying agent behavior, not structural integrity).

**VERDICT: PARTIALLY OVER-ENGINEERED.** Keep Glob + Read for HTML (structural). Keep Glob for brief and reflection (existence check). Strip content checks on auditor reports (agent behavior verification). Strip structural validation tables as formal constructs -- they add no value beyond the Glob/Read checks already specified.

**The plumbing spec's own principle contradicts itself here:** "ZERO INTERPRETABLE INSTRUCTIONS for programmatic steps" is correct, but "CHECK: file contains 'cold look' OR 'first impression' OR 'gut'" IS an interpretable instruction (string matching on natural language output is fragile).

### 4D. The 1024px Viewport

**First-principles says:** 3 viewports: 1440px, 1024px, 768px. Screenshots at all three.

**Architecture (12-window2-design.md) says:** Same 3 viewports captured, but 1024px screenshots NOT listed in auditor prompts by default. "It's there if needed (manual review, debugging)."

**The structural integrity test:** If we capture 1024px screenshots that no one looks at, we have spent ~60 seconds of Playwright time per build for zero downstream benefit. The auditors don't see them. The gate runner doesn't use them (it runs at 1440px). The Weaver doesn't see them.

**Counter-argument:** "1024px is a common tablet viewport." True. But auditors already evaluate at 1440px (desktop) and 768px (mobile). 1024px is a midpoint that rarely reveals issues not visible at either extreme.

**VERDICT: OVER-ENGINEERING.** Capture screenshots at 1440px and 768px only. If tablet evaluation is needed, the user requests it. This saves ~30% of screenshot capture time per build.

### 4E. The Four Enforcement Patterns (Plumbing Spec Preamble)

**First-principles says:** Nothing about enforcement patterns. The process is described as what happens, not how to make an LLM orchestrator do it.

**Architecture (10-orchestrator-plumbing.md) says:** 4 enforcement patterns: Single Atomic Operations, Verifiable Artifact Chain, Path of Least Resistance, Zero Interpretable Instructions.

**The structural integrity test:** These are META-INSTRUCTIONS about how to write the skill file, not instructions IN the skill file. The enforcement patterns are good design principles for the person writing the skill. They are not ceremony, but they are not content -- they are process guidance for the implementation phase.

**VERDICT: NOT CEREMONY, BUT MISPLACED.** The enforcement patterns are valid design principles that should inform Task #6 (implementation), not appear in the skill file itself. They are architecture rationale, not architecture. Keep them as implementation guidance, not as part of the specification.

---

## 5. UNDER-ENGINEERING: Architecture is Simpler Than First-Principles Requires

### 5A. Conventions Brief Content

**First-principles says:** ~40 lines covering container, typography, color, spacing, borders, responsive, accessibility, embedding.

**Architecture (03-skill-architecture.md) says:** ~40 lines embedded in the prompt. Lists 16 bullet points.

**Architecture (11-window1-design.md) says:** Same content but adds 3 additional lines: "At each zone boundary, multiple channels should reinforce the same direction" + "Vary transition types" + "Name CSS classes from your metaphor."

**The under-engineering:** Those 3 additional lines in the Window 1 specialist's version are CREATIVE GUIDANCE, not mechanical constraints. "Name CSS classes from your metaphor" is a creative instruction that belongs in the receiving principle or TC skill, not in the conventions brief. Including creative guidance in the conventions brief blurs the plumbing/freedom boundary.

**VERDICT: MILD UNDER-ENGINEERING of the BOUNDARY, not of content.** The conventions brief should be PURELY mechanical: values, thresholds, binary constraints. Zero creative guidance. The 3 additional lines should move to the TC skill or receiving principle. Mechanical constraints in the conventions brief. Creative guidance in the creative process guide. Never mix them.

### 5B. Error Handling and Recovery

**First-principles says:** Nothing about error handling. The first-principles design describes the happy path.

**Architecture (10-orchestrator-plumbing.md) says:** Detailed error handling: file not found, port in use, Playwright fails, agent times out, screenshots blank, gate runner throws.

**VERDICT: GENUINE UNDER-ENGINEERING in first-principles.** The architecture is correct to add error handling. An orchestrator that can only follow the happy path will fail on the first unexpected condition. The plumbing spec's error handling is properly scoped and not over-engineered.

### 5C. RETHINK Protocol Details

**First-principles says:** "Maximum 1 RETHINK. If the second attempt also routes to RETHINK, ship the better artifact."

**Architecture (03-skill-architecture.md) says:** Log failed metaphor, spawn new agent with "Do NOT use metaphor X," max 1 RETHINK, ship the better one.

**But:** Neither document specifies HOW to determine "the better artifact." The orchestrator compares "auditor cold-look verdicts" -- but both RETHINK artifacts received RETHINK verdicts (otherwise they would have been SHIP or REFINE). Comparing two RETHINK-verdicted artifacts by cold-look verdicts is comparing "NO" with "NO."

**VERDICT: MILD UNDER-ENGINEERING.** The RETHINK comparison needs a tiebreaker: number of essential gate failures, or the orchestrator asking the user to choose. The architecture hand-waves the comparison.

---

## 6. CROSS-CUTTING FINDINGS

### 6A. The Architecture Has TWO Conventions Briefs

**First-principles (07):** Proposes the conventions brief as one of the 3 files that NEEDS TRANSFORMATION. ~40 lines, new file at `design-system/compositional-core/conventions-brief.md`.

**Architecture (03):** Embeds conventions as literal text in the prompt (~40 lines). No separate file.

**Reference file map (04):** Lists conventions-brief.md as a NEW file to create at `design-system/compositional-core/conventions-brief.md`.

**Window 1 specialist (11):** Embeds the conventions as literal text in Section G of the prompt.

**The contradiction:** Is the conventions brief a file or embedded text? If it's a file, it must be maintained separately. If it's embedded text, it's duplicated in the Window 1 prompt AND the Window 3 prompt.

**VERDICT:** Embed it in the skill file ONCE, not as a separate file. The skill file references it in both Window 1 and Window 3 prompt construction. A separate file adds a synchronization point (change threshold -> update conventions file -> hope skill references it). Embedded text is self-contained. The first-principles design's instinct to create a file was wrong -- the architecture's instinct to embed was right, but neither realized the other's position.

### 6B. BV Gate Count Discrepancy

**Gate audit (02):** 28 total = 19 REQUIRED + 5 RECOMMENDED + 4 REQUIRED (BV). BV-01 through BV-04 are brief verification gates.

**Architecture (03):** Lists 20 essential gates in the Window 2 table, including BV-01 through BV-04 rewritten as "Brief has world-description section," etc.

**First-principles:** Does not mention BV gates at all.

**The discrepancy:** BV-01 through BV-04 in the gate audit check: tier line budget, background delta verification in brief, forbidden spec language, component reference validity. BV-01 through BV-04 in the architecture check: section existence (WORLD, CALIBRATION, ARC, CONTENT MAP).

These are DIFFERENT checks with the same gate IDs. The architecture has simplified the BV gates from content checks to existence checks, but kept the same numbering.

**VERDICT:** The architecture's simplified BV checks (section existence by string match) are what the plumbing spec implements. The gate audit's more complex BV checks (delta verification, spec language scan, component reference validity) are carry-forward from the old pipeline's brief format. The simplified checks are correct for the new 5-section brief format. But the gate count should reflect reality: the "28 gates" claim includes gates that were redefined.

### 6C. The Gate Count is Actually ~22, Not ~28

After stripping ceremony gates identified in this audit:

| Stripped | Gate(s) | Reason |
|----------|---------|--------|
| Builder narration | BV-08, GR-43, GR-83, GR-84 | No downstream consumer in new architecture |
| Experiential marker | GR-63 | Cannot cause the behavior it claims to verify |
| Usability priority | GR-64 | Meta-check on Weaver report with no consequence |

**Revised gate count:** 28 - 6 = **22 essential gates** (15 REQUIRED + 3 RECOMMENDED + 4 BV simplified).

Plus ~7 advisory gates unchanged.

This is a 61% reduction from the original 57, not 51%.

---

## 7. SUMMARY TABLE

| # | Element | Category | Recommendation |
|---|---------|----------|----------------|
| 1A | Combined TC+BUILD | GENUINE | Keep |
| 1B | Reading order as architecture | GENUINE | Keep |
| 1C | Screenshot pre-capture | GENUINE PLUMBING | Keep |
| 1D | Gates/PA separation | GENUINE | Keep |
| 1E | Different REFINE builder | GENUINE | Keep |
| 1F | 5-line receiving principles | GENUINE | Keep |
| 1G | 5-section conviction brief | GENUINE | Keep |
| 1H | 3-dimension reflection | GENUINE | Keep |
| 1I | 1 REFINE cycle default | GENUINE | Keep |
| 2A | Execution tracker | CEREMONY | **Strip entirely** |
| 2B | gate-manifest.json | CEREMONY | **Strip entirely** |
| 2C | Separate pa-questions.md | CEREMONY | **Strip reference** |
| 2D | Separate pa-weaver.md | BORDERLINE | **Inline into skill** |
| 2E | pa-manifest.md | CEREMONY | **Strip entirely** |
| 2F | Builder narration gates (4) | CEREMONY | **Strip from gate runner** |
| 2G | GR-63 experiential marker | CEREMONY | **Strip from gate runner** |
| 2H | GR-64 usability priority | CEREMONY | **Strip from gate runner** |
| 3A | World-description (~30 lines) | GAP | **Create, replacing prohibitions.md for builders** |
| 3B | TC simplification spec | PARTIAL GAP | **Use first-principles cut list for Task #5** |
| 3C | Conviction brief to auditors | CONTRADICTION | **Resolve: NO brief to auditors** |
| 3D | Phase-gated vocabulary loading | NOT A GAP | Soft gate is sufficient |
| 4A | Orchestrator experiential scan | OVER-ENGINEERING | **Strip** |
| 4B | Contamination check on reports | OVER-ENGINEERING | **Strip** |
| 4C | Structural validation tables | PARTIAL OVER-ENGINEERING | **Simplify to Glob+Read only** |
| 4D | 1024px viewport | OVER-ENGINEERING | **Strip (capture 1440 + 768 only)** |
| 4E | 4 enforcement patterns | MISPLACED | **Move to implementation guidance** |
| 5A | Conventions brief boundary | MILD UNDER-ENGINEERING | **Strip creative guidance from conventions** |
| 5B | Error handling | UNDER-ENGINEERED in first-principles | Architecture correctly fills gap |
| 5C | RETHINK comparison | MILD UNDER-ENGINEERING | **Add tiebreaker logic** |

---

## 8. HIGHEST-IMPACT CHANGES (Ranked by ROI)

### Tier 1: High Impact, Low Effort

1. **Strip 6 ceremony gates** (2F + 2G + 2H): Reduces gate runner code by ~20%. Removes builder comment mandates that add cognitive load during the creative phase. Zero downstream impact.

2. **Resolve auditor brief excerpt contradiction** (3C): Remove brief excerpt from auditor prompts. One deletion from the plumbing spec. Restores fresh-eyes principle.

3. **Strip execution tracker, gate manifest, pa-manifest, pa-questions.md references** (2A + 2B + 2C + 2E): Removes 4 files from the reference manifest. Eliminates synchronization burdens.

### Tier 2: Medium Impact, Medium Effort

4. **Create world-description (~30 lines)** (3A): Replace 419-line prohibitions.md in builder context with 30-line experiential world-description. Saves ~390 lines of context, reframes identity constraints from compliance to creative.

5. **Strip orchestrator experiential scan** (4A): Removes ~2 minutes of orchestrator time and a judgment call that contradicts the "zero interpretable instructions" principle.

6. **Drop 1024px viewport** (4D): Saves ~30% of screenshot capture time. No downstream consumer.

### Tier 3: Low Impact, Worth Noting

7. **Inline Weaver protocol into skill file** (2D): Eliminates one file reference.

8. **Strip contamination check** (4B): Removes a warning-only check with no consequence.

9. **Clean creative guidance out of conventions brief** (5A): Sharpens the plumbing/freedom boundary.

---

## 9. THE META-QUESTION: Is This Architecture Ceremony-Light?

**Yes.** Compared to the old pipeline (57 gates, 47 files, 22,200 lines of reference material, 1,300-line manifest, 9 artifact files, 524-line receiving protocol, execution tracker with 375 fields, observer agent, experiment protocol, council verdict), the new architecture is dramatically leaner.

The ceremony I identified is RESIDUAL -- fragments of old architecture that survived into the new design through inheritance rather than through need. The total ceremony (6 gates + 4 tracking files + 2 over-engineered features) is small relative to the genuine architecture.

**But residual ceremony has a compounding cost.** Each unnecessary gate is a comment mandate the builder must satisfy. Each unnecessary file is a synchronization burden. Each over-engineered feature is context the orchestrator wastes. The total cost of the residual ceremony is approximately:
- 6 builder HTML comments mandated by gates (cognitive load during creative phase)
- 4 files the orchestrator must maintain (synchronization risk)
- ~4 minutes of orchestrator time per build (scan + contamination check + 1024px screenshots)
- ~500 lines of reference material that could be pruned (pa-questions.md, pa-manifest.md, gate-manifest.json, execution tracker)

This is not catastrophic. But it is avoidable. And in a system designed around the principle "ceremony kills composition," avoidable ceremony should be avoided.

---

**END OF CEREMONY VS NECESSITY AUDIT**
