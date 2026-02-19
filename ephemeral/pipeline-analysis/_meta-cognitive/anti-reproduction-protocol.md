# Anti-Reproduction Protocol: Binary Gates for Pipeline v2 Codification

**Agent:** anti-reproduction-guardian (Opus 4.6)
**Date:** 2026-02-18
**Purpose:** Prevent Pipeline v2 from reproducing the 7 failure modes that 41 files diagnosed
**Evidence base:** recursive-self-application.md, 02-master-prompt-failures.md, 05-css-philosophy-shift.md, 22-structural-architecture.md, pipeline-implications.md

---

## THE CORE PROBLEM

The 41-file pipeline analysis corpus diagnosed why a 963-line master execution prompt failed. The recursive irony: the process of FIXING the pipeline is subject to the same failure modes. This document converts each diagnosed failure into a binary prevention gate that BLOCKS reproduction during Pipeline v2 codification.

Every gate follows the same structure:
- **FAILURE MODE:** What went wrong (with file evidence)
- **BINARY PREVENTION RULE:** A pass/fail test with zero judgment
- **VERIFICATION METHOD:** How to check compliance programmatically
- **VIOLATION CONSEQUENCE:** What happens if the rule is broken
- **ESCAPE HATCH:** How to override if the rule is genuinely wrong

---

## GATE 1: THE 50:1 COMPRESSION GATE

### Failure Mode
Research findings were compressed 50:1 into behavioral constraints that preserved conclusions while dropping decision criteria. "337 findings" became "sample 2-4 mechanisms." The WHY behind each rule vanished. (File 02, F-09 through F-18; recursive-self-application.md Section 1: CLAUDE.md itself compresses at 73:1)

### Binary Prevention Rule
**Every rule added to any Pipeline v2 artifact (SKILL.md, CLAUDE.md, building protocol) MUST include ALL THREE of the following inline:**

1. **A concrete value or element name.** The rule must contain at least one specific CSS property-value pair, HTML element name, pixel value, RGB value, or file path. Rules containing ONLY abstract terms ("appropriate", "suitable", "rich", "effective", "ensure", "sufficient") are REJECTED.

2. **A provenance citation.** The rule must cite its source as "From [file/experiment]: [specific finding]." Rules without provenance are REJECTED.

3. **A failure example.** The rule must include one concrete example of what VIOLATING it looks like. Format: "VIOLATION LOOKS LIKE: [specific CSS/HTML that breaks this rule]."

### Verification Method
For each rule in the Pipeline v2 artifact, run this 3-check scan:

```
CHECK 1: Does the rule contain at least one of: a number with units (px, em, rem, RGB, %),
         an HTML element name (<section>, <div>, .class-name), or a CSS property name?
         YES = PASS. NO = REJECT.

CHECK 2: Does the rule contain the string "From " followed by a file name or experiment name?
         YES = PASS. NO = REJECT.

CHECK 3: Does the rule contain the string "VIOLATION LOOKS LIKE:" followed by a concrete example?
         YES = PASS. NO = REJECT.
```

All three must PASS. Any single failure = rule is REJECTED until fixed.

### Violation Consequence
The rule is removed from the artifact and placed in a `_rejected-rules.md` quarantine file with the reason for rejection. It can be re-submitted after adding the missing element(s).

### Escape Hatch
If a rule is genuinely structural (e.g., "Phases must execute sequentially") and cannot contain a CSS value, it must instead contain a PROCESS value: a time limit, a line count, or a file path. Abstract-only rules require explicit sign-off documented in the quarantine file.

### Examples

**REJECTED:**
```
Ensure perceptual richness across all channels.
```
(No concrete value, no provenance, no violation example)

**ACCEPTED:**
```
Adjacent zone backgrounds must differ by >= 15 RGB points on at least one channel.
From 08-perception-model-shift.md: flagship backgrounds differed by 1-8 RGB (imperceptible).
VIOLATION LOOKS LIKE: --zone-s1: #FEF8F2; --zone-s2: #FDF7F1 (delta: R:1, G:1, B:1 = FAIL)
```

---

## GATE 2: THE JUDGMENT RULE GATE

### Failure Mode
Judgment-based rules achieved ~0% actual compliance while showing 100% claimed compliance. Rules like "signal-to-silence ratio: 0.6-0.8:1" and "fractal coherence across all scales" were CLAIMED as passing but produced zero visible improvement. (File 02, Failure Pattern 4: F-24, F-25, F-36, F-37, F-38, F-39, F-41; File 21 verbiage analysis)

### Binary Prevention Rule
**Every rule in Pipeline v2 must be testable by a programmatic check that returns PASS or FAIL with zero human judgment. If the rule cannot be expressed as a programmatic test, it is REJECTED.**

The test for whether a rule is binary: **Can you write a JavaScript function (or grep/regex) that checks compliance? If yes, the rule is binary. If the function would need to include the words "seems", "feels", "appropriate", "sufficient", or "reasonable", the rule is judgment-based and REJECTED.**

### Verification Method
For each rule, write the compliance check as pseudocode:

```
// BINARY (ACCEPTED):
function checkBackgroundDelta(zone1, zone2) {
  return Math.abs(zone1.R - zone2.R) >= 15 ||
         Math.abs(zone1.G - zone2.G) >= 15 ||
         Math.abs(zone1.B - zone2.B) >= 15;
}

// JUDGMENT (REJECTED):
function checkRichness(page) {
  return page.feelsDesigned(); // <-- "feels" = judgment = REJECT
}
```

If the pseudocode cannot be written without judgment verbs, the rule must be decomposed into binary sub-rules or converted to a recipe step ("Set X to Y" requires no check -- compliance is the act of writing the value).

### Violation Consequence
The rule is flagged as JUDGMENT and quarantined. Two paths forward:
1. Decompose it into 2-5 binary sub-rules that collectively approximate the intent.
2. Convert it to a recipe step with an exact value (recipe steps don't need rules -- they ARE the compliance).

### Escape Hatch
Exactly ONE judgment-based check is permitted per pipeline: the final fresh-eyes perception check ("Does this look designed?"). This check is permitted because it is administered by a zero-context agent (not the builder), making self-deception impossible. All other judgment checks are REJECTED.

### Examples

**REJECTED:**
```
The page should exhibit compositional fluency across zones.
```
(Cannot write a programmatic check for "compositional fluency")

**CONVERTED TO BINARY:**
```
At each zone boundary (N zones = N-1 boundaries), >= 3 of these 6 CSS properties
must change by their minimum perceptible delta: background-color (>=15 RGB),
font-size (>=2px), font-weight (>=200), border-left-width (>=1px change),
letter-spacing (>=0.025em), padding (>=8px change).
VERIFICATION: JavaScript that computes getComputedStyle at last element of zone N
and first element of zone N+1, compares 6 properties, counts deltas above threshold.
```

---

## GATE 3: THE GUARDRAIL-TO-PLAYBOOK RATIO GATE

### Failure Mode
The master prompt had a 7.9:1 guardrail-to-playbook ratio -- telling builders what NOT to do without telling them what TO do. Result: the builder defaulted to minimal compliance on everything not explicitly instructed. (File 22, Section 5; File 02, F-10 through F-14; recursive-self-application.md Section 5: CLAUDE.md itself has 2.0:1)

### Binary Prevention Rule
**Before merging any change to a Pipeline v2 artifact, count guardrails (prohibitions, constraints, "must not", "fail if", "never") and playbooks (action instructions, CSS recipes, "set X to Y", "write this"). The ratio must be <= 1:1. If guardrails outnumber playbooks, the change is REJECTED until playbooks are added.**

Counting rules:
- **Guardrail verbs:** "must not", "never", "fail if", "do not", "shall not", "reject if", "prohibited", any sentence whose main verb is negative
- **Playbook verbs:** "set", "write", "add", "create", "apply", "use", followed by a specific value or element
- **Neutral verbs:** "check", "verify", "measure" -- these count as neither

### Verification Method
```
grep -c "must not\|never\|fail if\|do not\|shall not\|reject\|prohibited" [file] → GUARDRAIL_COUNT
grep -c "^[0-9]\. \|Step [0-9]\|set.*to\|write.*:\|add.*{" [file] → PLAYBOOK_COUNT
RATIO = GUARDRAIL_COUNT / PLAYBOOK_COUNT
if RATIO > 1.0: REJECT
```

(Approximate -- actual verification should be per-section, not just grep, but the grep provides a first-pass screen.)

### Violation Consequence
The change is held in review. For every guardrail without a paired playbook, the author must add a concrete "INSTEAD, do this: [exact CSS/HTML/action]" instruction. The change is re-submitted after pairing.

### Escape Hatch
Soul constraints (identity-level prohibitions like "no border-radius" and "warm palette only") are exempt because they are identity constraints, not execution instructions. They exist in a separate section marked "IDENTITY -- READ ONCE" and are counted separately. The 1:1 ratio applies only to EXECUTION sections.

### Examples

**REJECTED (2:1 ratio):**
```
1. NEVER use border-radius on containers.
2. FAIL IF background is not warm (R >= G >= B).
3. Set container max-width to 960px.
```

**ACCEPTED (1:2 ratio):**
```
1. Set container max-width to 960px.
2. Set body background to #fefcf3 (warm cream, R:254 G:252 B:243 -- satisfies R >= G >= B).
3. FAIL IF any background has R < G or R < B.
```

---

## GATE 4: THE BUILDER VISIBILITY GATE

### Failure Mode
The builder saw 75 lines of a 963-line prompt (13.4%). The most generative content (CSS recipes, worked examples, component library) was in sections the builder never read. (File 02, F-19, F-20: "the most generative content in the entire prompt was hidden from the agent who needed it most"; File 22, Section 3: cognitive load comparison)

### Binary Prevention Rule
**Any agent that WRITES CSS or HTML must receive 100% of the specification relevant to their output. The specification for a builder agent must be SELF-CONTAINED: every CSS value, HTML element, perception threshold, and verification check needed to produce the output must be in the document the builder reads. If the builder must read external files to find values, those values must ALSO be embedded in the builder's spec.**

The test: **Remove all external file references from the builder's prompt. Can the builder still write every CSS value and HTML element required? If NO, the spec is INCOMPLETE and REJECTED.**

### Verification Method
1. List every CSS property-value pair in the expected output.
2. For each pair, search the builder's spec for that exact value.
3. If any expected value is ABSENT from the builder's spec, the spec FAILS.

```
EXPECTED_VALUES = extract_all_css_values(expected_output)
SPEC_VALUES = extract_all_css_values(builder_spec)
MISSING = EXPECTED_VALUES - SPEC_VALUES
if len(MISSING) > 0: REJECT (list missing values)
```

### Violation Consequence
Missing values are added to the builder's spec as embedded recipe steps. External file references are converted to inline code blocks. The spec is re-submitted after embedding.

### Escape Hatch
For ceiling/flagship builds where the builder needs to make CREATIVE decisions (not just follow recipes), the builder may read external reference files (mechanism catalog, case studies) BUT the perception thresholds and soul constraints must still be embedded. The escape hatch permits ADDITIONAL reading, not REPLACEMENT of embedded values.

---

## GATE 5: THE QUALITY ROUTING GATE

### Failure Mode
The best reference material (mechanism catalog with CSS recipes, case study HTML with working examples) was routed to the PLANNER who doesn't write CSS. The BUILDER received tokens + prohibitions + a missing file. (File 02, Failure Pattern 5; pipeline-implications.md #7)

### Binary Prevention Rule
**For every external reference file in the pipeline, the file MUST be routed to the agent that produces OUTPUT in the same medium. CSS-containing files go to CSS-writing agents. HTML-containing files go to HTML-writing agents. Research files go to planning agents. If a CSS-containing file is routed to a non-CSS-writing agent, the routing is REJECTED.**

The test: **For each file in the reference library, classify it as CSS-containing, HTML-containing, or research. For each agent, classify their output as CSS, HTML, or plan. If file-medium does not match agent-output-medium, flag a routing mismatch.**

### Verification Method
```
For each (file, agent) routing pair:
  FILE_MEDIUM = "CSS" if file contains property:value patterns, else "HTML" if file
                contains <tags>, else "research"
  AGENT_OUTPUT = "CSS" if agent writes .css or <style>, else "HTML" if agent writes
                 .html, else "plan"
  if FILE_MEDIUM in ("CSS", "HTML") and AGENT_OUTPUT != FILE_MEDIUM:
    FLAG: "{file} contains {FILE_MEDIUM} but is routed to {agent} who outputs {AGENT_OUTPUT}"
```

### Violation Consequence
The routing table is revised. CSS-rich files are re-routed to the builder. If the planner ALSO needs the file for planning decisions, the file is routed to BOTH agents (duplication is better than deprivation).

### Escape Hatch
Single-builder builds are exempt (the one agent reads everything). This gate applies only to multi-agent topologies.

---

## GATE 6: THE META-TO-OUTPUT RATIO GATE

### Failure Mode
The flagship reached a 660:1 ratio of planning content to actual output. 47,944 lines of infrastructure produced 18,428 lines of product. The pipeline was feeding on itself. (pipeline-implications.md, Lesson 6; recursive-self-application.md Section 8.4: "the fix is ACTION, not more analysis")

### Binary Prevention Rule
**Track the line count of all Pipeline v2 DESIGN artifacts (analysis, planning, protocol documents, this very document) against the line count of all Pipeline v2 OUTPUT artifacts (updated SKILL.md, updated CLAUDE.md, updated building protocol, updated gate runner). The meta-to-output ratio must stay <= 10:1. If it exceeds 10:1, STOP ANALYZING and START CODIFYING.**

Counting rules:
- **Meta:** Any file in `ephemeral/`, any research report, any retrospective, any audit, any discussion guide, any protocol document (including this one)
- **Output:** Any permanent file updated as a result of Pipeline v2 (SKILL.md, CLAUDE.md files, semantic-rules.md, gate runner code, component library updates)

### Verification Method
```
META_LINES = wc -l ephemeral/pipeline-analysis/**/*.md + ephemeral/pipeline-analysis/**/*.txt
OUTPUT_LINES = diff --stat of all permanent files changed for Pipeline v2
RATIO = META_LINES / OUTPUT_LINES
if RATIO > 10: STOP. Codify what you have. Analyze later.
```

### Violation Consequence
All analysis work STOPS. The team switches to codification mode: take the existing analysis and produce permanent file edits. No new analysis files are created until the ratio drops below 10:1 through output production.

### Current Status
The 41-file corpus is ~23,446 lines. The meta-cognitive files add ~4,000+. Total meta: ~27,000+ lines. Output so far: 0 permanent file changes (Pipeline v2 has not yet been codified). **Current ratio: INFINITY:1.** This gate is ALREADY VIOLATED. The next action must be codification, not more analysis.

### Escape Hatch
Discussion sessions with the user are exempt from the ratio (they produce understanding, not files). The ratio applies only to FILE PRODUCTION. But if 3 consecutive sessions produce zero permanent file changes, the ratio gate triggers regardless.

---

## GATE 7: THE RECIPE-VS-CHECKLIST GATE

### Failure Mode
The Middle experiment builder received a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs). Result: DESIGNED (4/4). The Flagship builder received a 71-line CHECKLIST (constraints, "Verify/Fail if/Must be" verbs). Result: FLAT (1.5/4). (File 05, Section 4; File 18 prompt-craftsmanship-evolution; File 22 structural-architecture; pipeline-implications.md #2)

### Binary Prevention Rule
**Every building instruction in Pipeline v2 must be in RECIPE format. Recipe format means: sequenced steps where each step starts with an action verb followed by a specific value. Checklist format (items starting with constraint verbs followed by thresholds) is REJECTED for builder-facing content.**

Verb classification:
- **RECIPE verbs (ACCEPTED):** Set, Write, Add, Create, Apply, Style, Change, Replace, Delete, Open, Scroll, Check (when followed by "you can SEE")
- **CHECKLIST verbs (REJECTED for builder content):** Verify, Ensure, Must be, Fail if, Shall not, Confirm, Validate (when followed by a threshold)

The test: **For each instruction in the builder's spec, identify the main verb. If it is a checklist verb, REJECT. If it is a recipe verb, ACCEPT.**

### Verification Method
```
for each line in builder_spec:
  verb = extract_first_verb(line)
  if verb in CHECKLIST_VERBS:
    REJECT(line, f"Checklist verb '{verb}' found. Convert to recipe format.")
  if verb in RECIPE_VERBS and not has_specific_value(line):
    REJECT(line, f"Recipe verb '{verb}' without specific value. Add a value.")
```

### Violation Consequence
Each rejected line is converted from checklist to recipe format:
- "Verify container width is 940-1100px" becomes "Set .container max-width to 960px"
- "Ensure backgrounds are warm" becomes "Write background-color: #fefcf3 for body, #f5efe6 for zone-1"
- "Fail if CPL outside 45-80" becomes "Set p max-width to 62ch and font-size to 17px (CPL = 62ch * 0.6 * 17px / 17px = 62 * 0.6 = 37.2ch... adjust to 68ch for CPL ~68)"

### Escape Hatch
Gate/verification sections (Phase 8 in the pipeline) are EXEMPT -- gates are inherently checklists because they verify, not create. The recipe-vs-checklist rule applies to BUILDING phases (Phases 0-7), not VERIFICATION phases (Phase 8). However, even verification phases should prefer "Can you SEE X?" over "Verify X meets threshold Y."

---

## META-PROCESS PROTECTIONS

These gates protect the Pipeline v2 DESIGN PROCESS ITSELF (the process of creating the gates above and codifying changes) from the failure modes.

### M-1: THE CHEAPEST EXPERIMENT GATE

**Before creating any new analysis document, ask: "What is the cheapest experiment that would test this hypothesis?" If the experiment costs less than the analysis document, RUN THE EXPERIMENT INSTEAD.**

Evidence: File 41, Q20 identifies the "cheapest most informative experiment" as adding ONLY perception thresholds to the unchanged master prompt. This experiment was never run. Instead, 41 files of analysis were produced. The experiment would have resolved the 3-variable confound (File 24) in ~2 hours. The analysis took ~40 hours of agent time.

Verification: Before any agent spawns a research task, the task description must include: "CHEAPEST EXPERIMENT ALTERNATIVE: [description of experiment that would test the same hypothesis]. ESTIMATED COST: [time]. REASON FOR CHOOSING ANALYSIS OVER EXPERIMENT: [justification]." If the justification is absent or the experiment is cheaper, the research task is REJECTED and the experiment is run instead.

### M-2: THE COMPLEXITY RATCHET BRAKE

**Every 5 builds, perform a RULE SUNSET AUDIT. For each rule in the pipeline, ask: "Has this rule prevented a specific, named failure in the last 5 builds?" If NO, the rule is REMOVED. No exceptions.**

Evidence: pipeline-implications.md, Lesson A7: "rules only accumulate, never retire." The master prompt grew from ~200 to 963 lines across experiments. No rule was ever removed. The complexity ratchet is a structural property of iterative pipelines.

The audit format:

```
| Rule ID | Rule Text | Prevented Failure in Build N? | Evidence | Decision |
|---------|-----------|------------------------------|----------|----------|
| S-01    | Container 940-1100px | Yes (Build 2: builder initially set 1200px) | Build 2 log | KEEP |
| SC-08   | No scale has all 7 channels | No -- never triggered in 5 builds | None | REMOVE |
```

Rules marked REMOVE are moved to a `_retired-rules.md` archive with their retirement date and rationale. They can be reinstated if a future build fails in a way the rule would have prevented.

**Target: rule count DECREASES by >= 20% per sunset audit.** If the count increases or stays flat, the audit was insufficient.

### M-3: THE TWO-INSTANCE GATE

**No agent may both WRITE and VERIFY the same artifact. The agent that writes a Pipeline v2 change must be different from the agent that verifies it.**

Evidence: File 02, Failure Pattern 3 (F-22, F-40, F-42): self-evaluation bias. The builder's self-scroll caught zero of the issues that 9/9 PA auditors flagged. File 37 (metacognitive-transfer): continuation bias prevents self-revision.

Implementation: Pipeline v2 changes follow a write-verify-merge cycle:
1. **Writer agent** drafts the change to SKILL.md / CLAUDE.md / building protocol
2. **Verifier agent** (different instance, zero context about the writer's reasoning) checks Gates 1-7 above
3. Only if all gates pass does the change get merged

### M-4: THE DISCUSSION-BEFORE-CODIFICATION GATE

**No permanent file change is made without a user-approved discussion. The pipeline analysis corpus exists for DISCUSSION, not for autonomous codification.**

Evidence: CLAUDE.md Section 1 ("WHY THIS CORPUS EXISTS"): "Discussion first. Go through the 41 files in structured conversation. Through that discussion, build shared understanding."

Implementation: Before any permanent edit to SKILL.md, CLAUDE.md, or building protocol:
1. The proposed change is presented to the user with: the change, its evidence (file citations), its adversarial challenge (what argues against it), and its escape hatch
2. The user approves, modifies, or rejects
3. Only approved changes are codified

### M-5: THE ANTI-ECHO-CHAMBER GATE

**For every finding cited as evidence for a Pipeline v2 change, at least one adversarial challenge must be cited alongside it. If no adversarial challenge exists in the corpus, one must be generated before the change is codified.**

Evidence: File 38, Test 7 (from File 26): "Reports 17-24 form an echo chamber -- they validate each other without independent evidence." File 25 (bias-challenger-core) exists specifically to challenge the core analysis.

Implementation: Every change proposal includes:
```
EVIDENCE FOR: [finding, file number, confidence tier]
EVIDENCE AGAINST: [adversarial challenge, file number]
RESIDUAL UNCERTAINTY: [what we still don't know]
```

If the "EVIDENCE AGAINST" field is empty, the change is held until an adversarial argument is generated (even if it's weak -- the act of searching for counter-evidence prevents uncritical adoption).

---

## SUNSET PROTOCOL: HOW RULES GET RETIRED

Rules accumulate because failure is memorable and success is invisible. A rule added after a painful failure feels essential forever, even after the underlying cause has been fixed. The sunset protocol makes rule retirement as systematic as rule creation.

### Retirement Criteria

A rule is a candidate for retirement if ANY of the following are true:

1. **Non-exercise:** The rule has not been triggered (would have caused a FAIL) in the last 5 builds.
2. **Redundancy:** The rule checks something that another rule already covers (e.g., both S-01 and a Phase 2 recipe step enforce container width).
3. **Recipe absorption:** The rule checks a property that the recipe already specifies as an exact value. If the recipe says "Set max-width to 960px," the rule "Container must be 940-1100px" is redundant -- the recipe IS the compliance.
4. **Perception obsolescence:** The rule checks a property that the perception threshold table already covers more specifically.

### Retirement Process

1. **Every 5 builds:** Run the sunset audit (M-2 above).
2. **For each retirement candidate:** Check if removing the rule would have changed the outcome of any past build. If NO, remove it. If YES, keep it.
3. **Archive, don't delete.** Retired rules go to `_retired-rules.md` with date, rationale, and the builds that were checked. They can be reinstated.
4. **Track the count.** After each audit, record: `Rules before: N, Removed: M, Added since last audit: K, Rules after: N - M + K`. If N-M+K > N (net increase), the complexity ratchet is winning and requires a more aggressive sunset.

### The 3-Build Reinstatement Window

If a build fails within 3 builds of a rule's retirement, and the retired rule would have caught the failure, the rule is automatically reinstated with a note: "Reinstated after Build N failure. Evidence: [what went wrong]." This makes retirement reversible and low-risk.

---

## VERIFICATION CHECKLIST: THE 7 GATES IN PRACTICE

For any Pipeline v2 change, run this checklist before merge:

```
[ ] GATE 1 (Compression): Every rule has a concrete value + provenance + violation example
[ ] GATE 2 (Judgment): Every rule has a pseudocode compliance check with no judgment verbs
[ ] GATE 3 (Guardrail ratio): Guardrails:Playbooks <= 1:1 in execution sections
[ ] GATE 4 (Builder visibility): Builder spec is self-contained (no missing values)
[ ] GATE 5 (Quality routing): CSS-rich files routed to CSS-writing agents
[ ] GATE 6 (Meta ratio): Meta:Output <= 10:1 (if violated, stop analyzing, start codifying)
[ ] GATE 7 (Recipe format): Building phases use recipe verbs, not checklist verbs

META GATES:
[ ] M-1 (Cheapest experiment): Is there a cheaper experiment than this analysis?
[ ] M-2 (Complexity ratchet): Has a sunset audit been done in the last 5 builds?
[ ] M-3 (Two-instance): Writer and verifier are different agents?
[ ] M-4 (Discussion first): User has approved this change?
[ ] M-5 (Anti-echo-chamber): Adversarial challenge cited alongside evidence?
```

---

## APPLICATION TO THE CURRENT STATE

### What These Gates Say About Where We Are

**Gate 6 is VIOLATED.** The meta-to-output ratio is effectively infinite (41 analysis files, 5+ meta-cognitive files, zero permanent codification). The next action MUST be codification -- taking the strongest findings and writing them into SKILL.md, CLAUDE.md, and the building protocol. More analysis before codification violates Gate 6.

**Gate 1 is TESTABLE NOW.** Take any proposed Pipeline v2 rule and check: does it have a concrete value, provenance, and violation example? If the answer is "not yet, we need more analysis to determine the value," Gate 6 says: pick the best current estimate, codify it, test it in a build, and revise. The value doesn't need to be perfect. It needs to exist.

**Gate 7 is the STRUCTURAL REQUIREMENT.** The pipeline analysis corpus identified recipe-vs-checklist as the single most correlated variable with build quality. Pipeline v2's building phases MUST be in recipe format. This is not a suggestion -- it is the primary finding of 41 files of analysis.

### The Recommended Next Step

1. Pick the 5 highest-confidence findings from the corpus (Tier 1 in File 41's convergence map: perception thresholds, recipe format, single-builder default, container width, deallocation-first).
2. For each finding, write the permanent edit to SKILL.md / CLAUDE.md / building protocol in recipe format, with provenance and violation examples (satisfying Gates 1, 2, 3, 7).
3. Have a different agent verify Gates 1-7 (satisfying M-3).
4. Discuss with the user (satisfying M-4).
5. Merge.
6. Build a test page with the updated pipeline (satisfying M-1: the cheapest experiment).
7. Run the sunset audit after the test build (satisfying M-2).

This sequence produces permanent output (breaking the Gate 6 violation), tests the pipeline (satisfying M-1), and retires unused rules (satisfying M-2). It is the CHEAPEST path from 41 files of analysis to a working Pipeline v2.

---

**END OF ANTI-REPRODUCTION PROTOCOL**

**Statistics:**
- Gates: 7 (covering all 7 diagnosed failure modes)
- Meta-process protections: 5
- Sunset protocol: 4 retirement criteria, 3-build reinstatement window
- Verification checklist: 12 items (7 gates + 5 meta)
- Current Gate 6 status: VIOLATED (meta:output = infinity:1)
- Recommended next action: CODIFY, not analyze
