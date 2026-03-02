# Contamination Audit: Old Pipeline Thinking in New Process Design

**Auditor:** contamination-auditor (Opus, Task #13)
**Date:** 2026-02-27
**Method:** Read all 9 deliverables. For each: identify language, structure, or design patterns that carry old pipeline thinking into the new process. Distinguish genuine plumbing (necessary structural control) from contamination (old habits controlling creative output).

**Key test applied throughout:** "Is this controlling WHAT the agent creates (contamination) or controlling THAT the agent receives the right inputs and produces a structural output (plumbing)?"

---

## SUMMARY

| File | Contamination Count | HIGH | MEDIUM | LOW |
|------|-------------------|------|--------|-----|
| 01-current-state-map.md | 2 | 0 | 1 | 1 |
| 02-gate-audit.md | 5 | 1 | 2 | 2 |
| 03-skill-architecture.md | 8 | 2 | 3 | 3 |
| 04-reference-file-map.md | 3 | 0 | 1 | 2 |
| 07-first-principles-design.md | 3 | 0 | 1 | 2 |
| 10-orchestrator-plumbing.md | 4 | 1 | 2 | 1 |
| 11-window1-design.md | 2 | 0 | 1 | 1 |
| 12-window2-design.md | 5 | 1 | 2 | 2 |
| 13-window3-design.md | 2 | 0 | 1 | 1 |
| **TOTAL** | **34** | **5** | **14** | **15** |

**Overall assessment:** The team has done a genuinely good job of thinking from new principles. Most contamination is LOW (terminology inherited from old pipeline). The 5 HIGH findings represent places where old pipeline logic has genuinely infiltrated the new design's decision-making.

---

## FILE 1: 01-current-state-map.md

### C-01: "Pipeline" terminology throughout
- **Quote:** Title: "Current Pipeline State Map", line 1
- **Quote:** "New Process Status" column header alongside "Role in Current Pipeline" -- good awareness of the distinction, but the document itself uses "pipeline" 12+ times to describe the new process
- **Severity:** LOW
- **Recommended fix:** This is a mapping document and uses "pipeline" mostly to describe the OLD system. A few instances describe the new process as "pipeline" (e.g., "Pipeline PA uses the split files below" at line 31). Find-and-replace "new pipeline" with "new process" throughout.

### C-02: "ALWAYS FLAGSHIP" routing assumption
- **Quote:** Line 33 in routing row: "ALWAYS FLAGSHIP"
- **Severity:** MEDIUM
- **Recommended fix:** The tier model (Floor/Middle/Ceiling/Flagship) is old pipeline vocabulary. The new process doesn't need tier classification at all -- every page gets the same creative treatment. Saying "ALWAYS FLAGSHIP" still imports the tier concept and then collapses it. Better: simply remove routing entirely. The new process doesn't route because there's nothing to route -- the concept of tier-based routing doesn't exist, not even a degenerate case of "always highest tier."

---

## FILE 2: 02-gate-audit.md

### C-03: BV-03 "Forbidden Spec Language" gate
- **Quote:** Line 92-93: `BV-03: Brief does not contain specification language ("must," "required," "shall") in creative sections. Catches compliance creep in the conviction brief.`
- **Severity:** MEDIUM
- **Why contamination:** This gate polices the LANGUAGE of the conviction brief. The conviction brief is a creative document the builder writes for themselves. A gate that scans creative text for forbidden words is compliance enforcement on creative output -- exactly what the new process is supposed to eliminate. The builder who writes "the deep zone must feel like compression" is expressing creative conviction, not compliance. Banning "must" from the creative vocabulary is old-pipeline policing.
- **Counterargument:** The gate catches a real problem -- briefs that read like spec documents instead of creative commitments. But the fix is in the PROMPT framing (the receiving principle already says "your creative commitment, not a document for someone else"), not in a gate that scans for word frequency.
- **Recommended fix:** Strip BV-03. Trust the receiving principle + TC skill to produce conviction-framed briefs. If the brief reads like a spec, the issue is in the Window 1 agent's processing, not in a word-frequency gate.

### C-04: BV-08 "Brief-Output Diff" retained as RECOMMENDED
- **Quote:** Line 101: `BV-08: >= 80% coverage across 6 dimensions comparing brief spec to HTML/CSS output. Catches what the builder dropped during compression.`
- **Severity:** HIGH
- **Why contamination:** This is the old pipeline's compliance-checking architecture operating on a creative process. The brief is the builder's own creative commitment. Comparing brief-to-output and measuring "coverage" treats the brief as a SPECIFICATION that the builder must comply with. But the builder wrote the brief themselves. If they deviated, they deviated for creative reasons. BV-08 assumes "the brief is right, the output should match" -- this is the compliance mindset the new process explicitly rejects.
- **The gate audit itself acknowledges this:** "Despite the adversarial review's philosophical concern about 'compliance checking a generative process,' this gate catches REAL losses." But the "REAL losses" framing assumes the brief is authoritative over the builder's own creative judgment during building.
- **Recommended fix:** Strip BV-08. If the builder's output diverges from their own brief, that's creative evolution, not compliance failure. The PA auditors catch actual perceptual problems. BV-08 catches divergence-from-spec, which is a value of the old pipeline, not the new process.

### C-05: GR-64 "Usability Priority Verification" checks Weaver output
- **Quote:** Line 82-83: `GR-64: If >= 3/9 auditors flagged usability issues, Weaver Fix #1 must contain usability term.`
- **Severity:** MEDIUM
- **Why contamination:** This gate checks the CONTENT of the Weaver's creative output. It says "the Weaver's first fix recommendation must mention usability." This is the orchestrator evaluating creative quality -- exactly the boundary the new process's plumbing/freedom split is supposed to enforce. The Weaver's synthesis is sovereign creative judgment. A gate that checks whether the Weaver mentioned the right word in the right position is compliance enforcement on creative output.
- **Recommended fix:** Replace with a plumbing mechanism: the orchestrator's experiential scan (Step 2.6 in the plumbing spec) already detects usability issues. If the orchestrator flags BLOCKING-USABILITY, that note is pre-seeded into auditor prompts. The Weaver doesn't need a gate checking their output -- the information flow already ensures usability is visible.

### C-06: Gate categorization carries old naming
- **Quote:** Line 24: "Category A: Physics Gates" through "Category H: Builder Narration Gates"
- **Severity:** LOW
- **Recommended fix:** The categorization is clean and well-reasoned. But "Builder Narration Gates" (Category H) is old-pipeline thinking -- gates that check the builder's self-narration (GR-83 INTENT comments, GR-84 IMPROVEMENTS comments, GR-43 self-evaluation). These are process-tracking gates wearing new names. If the builder is composing from conviction, mandating a specific count of INTENT comments (>= 15) is ceremony. Consider whether Category H survives the plumbing/freedom test: do these gates control WHAT the agent creates (contamination) or THAT structural outputs exist (plumbing)? Answer: they control the format and quantity of builder meta-commentary, which is creative output, not structural plumbing.

### C-07: "Pipeline" in terminology
- **Quote:** Line 18: "Gates survive if they catch empirically proven failures that the generative frame cannot prevent."
- **Severity:** LOW
- **Recommended fix:** Minor. The document uses "pipeline" sparingly and mostly in historical context. The quoted line is actually well-framed for the new process. No action needed beyond a terminology pass.

---

## FILE 3: 03-skill-architecture.md

### C-08: "Pre-Pipeline Setup" section header
- **Quote:** Line 54: "SECTION 0: Pre-Pipeline Setup"
- **Severity:** LOW
- **Recommended fix:** Rename to "SECTION 0: Setup" or "SECTION 0: Pre-Process Setup"

### C-09: Structural Validation checklists use "ensure"/"verify" patterns
- **Quote:** Line 67-69: "Structural Validation: Content file exists and is non-empty / Output directory created / _content.md written"
- **Quote:** Lines 194-203: "Structural Validation (orchestrator checks AFTER Window 1 completes)"
- **Severity:** LOW
- **Why this is NOT contamination:** These checklists verify file existence, not creative quality. "HTML file exists" and "Brief file exists" are plumbing checks. The format looks like old-pipeline compliance checklists, but the CONTENT is structural validation, not quality evaluation.
- **Why flagging anyway:** The CHECKLIST FORMAT itself is a minor contamination signal. The new process is supposed to be recipe-format, not checklist-format. Even plumbing can be stated as sequenced steps rather than checkbox items.
- **Recommended fix:** Convert `- [ ] Content file exists and is non-empty` to `IF content file missing or empty: STOP` -- same information, recipe format.

### C-10: Auditor question extraction from PA skill
- **Quote:** Lines 376-378: "These are taken directly from `~/.claude/skills/perceptual-auditing/SKILL.md` Sections: Tier 1 (E-01 through E-03), Tier 2 (E-04 through E-08)..."
- **Severity:** MEDIUM
- **Why contamination:** The question numbering system (E-01 through E-20, organized by Tiers 1-5) is old pipeline taxonomy. The tier classification was designed for the 9-auditor, 69-question system. In a 2-auditor, 20-question process, tier classifications are unnecessary overhead. The questions themselves are valuable; the taxonomic infrastructure around them (tier numbers, old PA- numbering) is inherited ceremony.
- **Recommended fix:** Number the 20 questions Q-01 through Q-20 in the new process. Group them by what they measure (first encounter, spatial experience, content-form relationship), not by old tier levels. The orchestrator assigns them sequentially (Auditor A: Q-01 through Q-10, Auditor B: Q-11 through Q-20) without tier metadata.

### C-11: Conviction brief excerpt for auditors
- **Quote:** Lines 327-329: "Conviction brief Sections 1 + 4 ONLY (world-description + compositional arc) -- extracted from _tc-brief.md"
- **Severity:** HIGH
- **Why contamination:** This contradicts the fresh-eyes principle that the new process claims to uphold. The old pipeline gave auditors context because it had 9 auditors doing specialized work. The new process has 2 auditors doing experiential work. Giving them the conviction brief's world-description and arc means they know what the page is SUPPOSED to feel like before they experience it. An auditor who reads "geological descent metaphor" will see geological descent. An auditor who knows nothing will describe what they actually see.
- **The Window 2 design (12-window2-design.md) directly contradicts this:** Section "Open Design Questions #1" at line 680 says "My recommendation: NO conviction brief for auditors." This is a live contradiction between File 3 and File 8.
- **Recommended fix:** Remove conviction brief from auditor prompts entirely. Auditors receive ONLY: screenshots + receiving principle + Section 0 protocol + their questions + language constraint. Zero context about intent. This is what the PA skill prescribes, what the Window 2 specialist recommends, and what the adversarial review supports.

### C-12: "Orchestrator Experiential Scan" as quality check
- **Quote:** Lines 243-250: "After screenshots, the orchestrator SCROLLS THE PAGE at reading speed. Notes: Any text that cannot be read / Any chart or table that cannot be decoded / Any navigation that fails"
- **Severity:** MEDIUM
- **Why potentially contamination:** The orchestrator is supposed to be plumbing. Scrolling the page and making judgment calls about readability crosses the plumbing/freedom boundary. The Window 2 spec addresses this and calls it "Plumbing-ish" (line 31 of 12-window2-design.md), acknowledging the boundary violation. The old pipeline had the Observer agent doing exactly this -- scrolling through, making notes, checking quality.
- **Why it might be legitimate plumbing:** The scan checks for USABILITY (can you read the text?), not QUALITY (is the composition beautiful?). This is closer to the GR-60 WCAG contrast gate than to the PA's experiential audit.
- **Recommended fix:** Keep but constrain. The scan should check ONLY for broken rendering (text over text, elements off-screen, loading failures). NOT for "text that cannot be read" (which could mean poor font choice -- a creative judgment). Rename from "Experiential Scan" to "Usability Scan" to make the boundary explicit. State: "The orchestrator checks for broken rendering. It does NOT evaluate readability, density, or aesthetic choices."

### C-13: Section 4 "Structural Validation" checks auditor reports for contamination
- **Quote:** Lines 396-398: `No report contains CSS property names (contamination check)`
- **Severity:** MEDIUM
- **Why contamination (ironic):** Checking auditor reports for CSS vocabulary is the orchestrator evaluating the CONTENT of creative output. The auditor's report is their sovereign perception. If an auditor writes "the padding feels too large," the gate flags it. But the auditor is describing a perception, not a CSS property -- the word "padding" happened to be in their vocabulary. The language constraint is embedded in the auditor's prompt (the right approach). A post-hoc scan of their output for banned words is compliance enforcement on creative agents -- exactly the pattern the new process rejects.
- **Recommended fix:** Remove the contamination check from structural validation. The language constraint in the auditor's prompt is sufficient. If an auditor uses CSS vocabulary despite the constraint, that's a prompt effectiveness issue, not a gate-level validation concern. The auditor's perception is still valid even if they use technical language to express it.

### C-14: "Non-Negotiables" appendix format
- **Quote:** Lines 765-778: 10 numbered "non-negotiables" including "Container: 940-960px" through "Maximum 1 REFINE cycle by default"
- **Severity:** LOW
- **Why contamination:** The format ("Non-Negotiables") is old-pipeline language. The list mixes plumbing constraints (container width, warm palette) with process constraints (maximum 1 REFINE cycle) with architectural constraints (different builder for REFINE) with creative constraints (DERIVE+BUILD in one window). Lumping all of these under "Non-Negotiables" suggests they are all the same type of constraint. They are not.
- **Recommended fix:** Split into two lists: PHYSICS (constraints that apply to the artifact: container width, warm palette, perceptible CSS) and PROCESS (constraints that apply to the orchestrator: different builder for REFINE, gates and PA don't cross-contaminate, structural validation only). This makes the plumbing/freedom split visible even in the constraint list.

---

## FILE 4: 04-reference-file-map.md

### C-15: "Pipeline" terminology
- **Quote:** Line 5: "the pipeline uses", Line 642: "Pipeline protocol for derivation"
- **Severity:** LOW
- **Recommended fix:** Replace "pipeline" with "process" throughout. This file uses "pipeline" inconsistently -- sometimes for the old system, sometimes for the new.

### C-16: soul-constraints.md classified as "DISCARD from pipeline loading"
- **Quote:** Lines 86-89: "Redundant with prohibitions.md. The same 3 constraints are covered (with more detail) in prohibitions.md"
- **Severity:** LOW
- **Why flagging:** The classification logic is fine. But the phrasing "DISCARD from pipeline loading" reinforces the old mental model where files are "loaded into the pipeline." In the new process, the question is "does the builder need this to inhabit the world?" The answer happens to be no (prohibitions.md covers it), but the framing should be "the builder already receives this information via prohibitions.md" rather than "the pipeline doesn't load this."
- **Recommended fix:** Minor reframe. Change "DISCARD from pipeline loading" to "Not referenced -- covered by prohibitions.md" throughout.

### C-17: "ALWAYS FLAGSHIP" as routing decision
- **Quote:** Line 33: "ALWAYS FLAGSHIP" for routing artifact and Line 230: "ALWAYS FLAGSHIP, no routing"
- **Severity:** MEDIUM
- **Why contamination:** Same as C-02. The tier model is imported and then collapsed. The file explicitly acknowledges "Every page gets full composition" but still frames this as a routing decision ("ALWAYS FLAGSHIP"). The new process doesn't have a routing decision at all -- there's nothing to route.
- **Recommended fix:** Replace "ALWAYS FLAGSHIP" with "Eliminated -- the new process has no tier routing." Remove tier vocabulary from the new process design entirely. The tiers were a research finding, not an operational category.

---

## FILE 5: 07-first-principles-design.md

### C-18: 5 auditors as default (contradicts own team's 03-skill-architecture.md)
- **Quote:** Lines 404-406: "5 auditors is the DEFAULT. The user can explicitly request 2 for quick iterations."
- **Quote from 03-skill-architecture.md:** Line 307: "Standard: 2, High-stakes: 5"
- **Severity:** MEDIUM
- **Why flagging:** This is not old pipeline contamination per se -- it's a legitimate design disagreement. But the REASONING behind 5-as-default draws on old pipeline data: "the Mode 4 PA (9 auditors) caught the whitespace void that a 2-auditor PA missed entirely." The 9-auditor architecture was the old pipeline's answer to quality assurance. Defaulting to 5 auditors because 2 "might miss things" is inheriting the old pipeline's assumption that MORE auditors = BETTER coverage. The new process's philosophy is "conviction + fresh-eyes, not exhaustive coverage."
- **Recommended fix:** This needs a team decision, not a fix. But flag: if the new process defaults to 5 auditors, it's running 5 agents for every build. That's closer to the old pipeline's 9 than to the "3 windows, 5-7 agents" the architecture promises. 2 auditors for standard, 5 for high-stakes is the more consistent choice with the new process philosophy.

### C-19: "Pipeline" terminology
- **Quote:** Line 564: "How This Design Serves the Pipeline's Goals", Line 96: "process guide for the combined TC+BUILD window"
- **Severity:** LOW
- **Recommended fix:** Replace "pipeline" with "process" in references to the new design. This document is generally good about using "process" language but slips into "pipeline" in a few headings.

### C-20: Execution tracker mentioned
- **Quote:** Line 332: "One-cycle process doesn't need multi-iteration tracking"
- **Severity:** LOW
- **Why flagging:** The document correctly identifies that the execution tracker is not needed. But by discussing it at length (why it's not needed, what it tracked, how many fields it had), the document carries the CONCEPT forward. In a first-principles design, the execution tracker wouldn't be mentioned at all because the concept doesn't exist in the new design.
- **Recommended fix:** No action needed -- this is a mapping document that explains what's gone. Just noting the pattern.

---

## FILE 6: 10-orchestrator-plumbing.md

### C-21: Step 4.2 extracts conviction brief excerpt for auditors
- **Quote:** Lines 435-441: "EXTRACT Section 1 (WORLD-DESCRIPTION) and Section 4 (ARC) only. SET brief_excerpt = extracted text."
- **Severity:** HIGH
- **Why contamination:** This is the same issue as C-11 but in the implementation spec. The plumbing spec implements the conviction-brief-to-auditor flow that the Window 2 design (12-window2-design.md, Open Design Question #1) recommends AGAINST. This is a live contradiction that will produce old-pipeline behavior: auditors who know the page's creative intent before experiencing it.
- **Recommended fix:** Remove Step 4.2 entirely. Remove `brief_excerpt` from the auditor prompt construction (Step 4.5[D]). Auditors receive screenshots + receiving principle + questions + language constraint. Nothing else.

### C-22: Step 4.9 contamination check scans for CSS vocabulary
- **Quote:** Lines 524-527: `CONTAMINATION CHECK: IF file contains "px" OR "rem" OR "font-size"...`
- **Severity:** MEDIUM
- **Why contamination:** Same as C-13 but in implementation. The orchestrator is scanning creative output for forbidden vocabulary. This is compliance enforcement on the auditors' sovereign perceptual reports.
- **Recommended fix:** Remove the contamination check. The language constraint in the auditor prompt is the right mechanism. Post-hoc scanning is old-pipeline compliance checking.

### C-23: Step 3.0 BV gates check brief content
- **Quote:** Lines 382-391: BV-01 through BV-04 check that the brief contains specific section headings (WORLD, CALIBRATION, OPPOSITION, ARC)
- **Severity:** LOW
- **Why this is mostly plumbing:** Checking that the brief has sections is structural validation ("did the agent produce the thing in the right format"). This IS plumbing. The issue is borderline: checking for "OPPOSITION" in the brief content means the orchestrator is verifying the builder included a specific creative concept, not just a structural section.
- **Recommended fix:** Keep BV-01 and BV-04 (section structure). Consider whether BV-02 and BV-03 are structural (checking for section headers) or content-evaluative (checking for specific creative concepts). If the brief format specifies these exact section names, they are structural. If the builder might use different names for the same concepts, the gates are forcing naming compliance.

### C-24: "MAXIMUM COMPLIANCE" framing
- **Quote:** Line 12: "This spec is designed for MAXIMUM COMPLIANCE within Claude Code's constraints."
- **Severity:** MEDIUM
- **Why contamination:** "MAXIMUM COMPLIANCE" is old-pipeline language. The new process's design principle is plumbing that makes following instructions EASIER than skipping them (Pattern #3, Path of Least Resistance). That's a different framing from "maximum compliance." Compliance is imposed from outside; path-of-least-resistance is designed from inside. The plumbing spec actually implements path-of-least-resistance correctly -- the language just doesn't match the philosophy.
- **Recommended fix:** Change "MAXIMUM COMPLIANCE" to "MAXIMUM RELIABILITY" or "MAXIMUM CONSISTENCY." The enforcement patterns (atomic operations, verifiable artifacts, path of least resistance, zero interpretable instructions) are about reliability of execution, not compliance with authority.

---

## FILE 7: 11-window1-design.md

### C-25: "Pipeline" in one key sentence
- **Quote:** Line 11: "Window 1 is the only place in the pipeline where CREATIVE WORK happens from scratch."
- **Quote:** Line 564: "How This Design Serves the Pipeline's Goals"
- **Severity:** LOW
- **Recommended fix:** Replace "pipeline" with "process." This document is otherwise clean -- it uses "process" language naturally and the creative framing is genuinely new-paradigm.

### C-26: "Phase gate" framing for the conviction brief checkpoint
- **Quote:** Line 41: "The conviction brief is written BEFORE Steps 4-7. This is the phase gate."
- **Quote:** Line 505: "The Checkpoint: How the Phase Gate Works"
- **Severity:** MEDIUM
- **Why contamination:** "Phase gate" is pipeline/process-engineering terminology from the old system. The checkpoint in Window 1 is a CREATIVE SEQUENCING decision: the builder encounters material in a specific order to shape their cognitive mode. Calling it a "phase gate" imports industrial process control language into what is actually a reading-order architecture. The old pipeline had literal phase gates (commitment gate in TC Phase 3.5) that blocked progression. The new checkpoint is a textual instruction that says "derive before reading vocabulary."
- **Recommended fix:** Replace "phase gate" with "reading-order checkpoint" or simply "checkpoint." The mechanism is already described well as a "STOP" marker between creative derivation and vocabulary absorption. It doesn't need the industrial framing.

---

## FILE 8: 12-window2-design.md

### C-27: Open Design Question #1 creates a live contradiction
- **Quote:** Lines 680-688: "Should the orchestrator provide conviction brief excerpts to auditors? ... My recommendation: NO conviction brief for auditors."
- **Severity:** HIGH
- **Why flagging as HIGH:** This is not contamination within this file -- this file gets it right. But this file's recommendation CONTRADICTS the skill architecture (03, line 327-329) and the plumbing spec (10, Step 4.2), both of which implement brief-to-auditor flow. This is an unresolved design disagreement that will produce old-pipeline behavior if the skill architecture's version wins. The Window 2 designer identified the contamination; the other designers didn't catch it. This needs explicit resolution.
- **Recommended fix:** Resolve in favor of NO conviction brief for auditors (Window 2 design's recommendation). Update 03-skill-architecture.md and 10-orchestrator-plumbing.md accordingly.

### C-28: GR-64 in the gate list checks creative output
- **Quote:** Lines 176-182: Essential gate list includes GR-64 (Usability Priority Verification)
- **Severity:** MEDIUM
- **Why contamination:** Same as C-05. GR-64 checks the Weaver's creative synthesis for specific keywords. This is the orchestrator evaluating creative output quality, violating the plumbing/freedom split that this very document establishes.
- **Recommended fix:** Remove GR-64 from the essential gate list. The orchestrator's usability scan (Phase 2 of this document) catches usability issues through direct inspection. The Weaver's output is sovereign.

### C-29: BV gates reimagined but still check brief content
- **Quote:** Lines 177-182: BV-01 through BV-04 in the essential gate list
- **Severity:** LOW
- **Why noting:** The BV gates as described here (BV-01: "Brief has world-description section") are structural checks, which IS plumbing. But the old pipeline's BV gates included BV-05 (recipe keyword scan) and BV-06 (anti-regression language scan) which checked CONTENT. The new BV gates are cleaner but the BV FRAMEWORK is inherited. Whether checking "brief has section called WORLD-DESCRIPTION" is structural (plumbing) or content-evaluative (contamination) depends on whether the builder might legitimately structure their conviction brief differently.
- **Recommended fix:** Consider: if the builder produces a conviction brief with 5 sections using different names (e.g., "THE PLACE" instead of "WORLD-DESCRIPTION"), should BV-01 fail? If yes, the gate is format-compliance. If no, the string search won't find it. The gate should check for section count (5 sections) rather than section names.

### C-30: "Pipeline" in key framing
- **Quote:** Line 547: "If the Weaver knows 'GR-11 FAIL: background delta 8 RGB,' they will frame their creative direction around fixing that specific value."
- **Severity:** LOW
- **Recommended fix:** This sentence is actually demonstrating good anti-contamination thinking (explaining why gates should not be visible to the Weaver). The "pipeline" usage elsewhere in the file is minimal and mostly refers to the old system. No action needed.

### C-31: The 20 questions still reference old PA-skill tier structure
- **Quote:** Lines 694-698: "The PA skill (current canonical): 20 questions (E-01 through E-20) plus responsive supplements E-R1 through E-R3... The PA design spec (08-pa-design-spec.md): 22 questions (E-01 through E-22)"
- **Severity:** LOW
- **Why contamination:** The old PA numbering (E-01, E-R1, PA-05 tier system) is inherited vocabulary. The new process should have its own question set with its own naming convention. The tier structure (Tier 1: first encounter, Tier 2: spatial, etc.) was designed for 9 auditors with specialized assignments. With 2 auditors getting 10 questions each, the tier structure is organizational overhead.
- **Recommended fix:** Number the final 20 questions Q-01 through Q-20. Drop tier classifications. The assignment split (sequential for 2 auditors, tier-spanning for 5) can be described without the tier framework.

---

## FILE 9: 13-window3-design.md

### C-32: "Pipeline" in historical references
- **Quote:** Line 300: "The receiving protocol (13-receiving-protocol.md, R-04) provides the full anti-compliance mechanism."
- **Severity:** LOW
- **Recommended fix:** These are references to old deliverables for provenance. They don't contaminate the new design. No action needed.

### C-33: The REFINE builder prompt might trigger compliance behavior
- **Quote:** Lines 145-253 (the full prompt template)
- **Severity:** MEDIUM
- **Why flagging:** The prompt template is well-designed and genuinely anti-compliance in spirit. However, the CONVENTIONS section (lines 217-229) lists 13 mechanical constraints in checklist format. These arrive as the last thing the REFINE builder reads before "BUILD." In the Window 1 design (11-window1-design.md), this placement is justified: conventions arrive AFTER conviction is established. But in Window 3, the REFINE builder doesn't derive a new conviction -- they inherit one. The conventions list arriving just before "BUILD" in a refinement context could function as a compliance checklist: "before you submit, make sure you hit all 13 items."
- **Why this might be fine:** The REFINE builder's creative anchor is their own 2-sentence impression (Step 1 checkpoint) and their ONE THING commitment (before BUILD). These creative anchors may be strong enough to prevent the conventions from becoming a checklist.
- **Recommended fix:** Consider moving the conventions EARLIER in the REFINE prompt -- after the conviction brief (Step 4) but before the "creative commitment" prompt (just before BUILD). This way the builder absorbs conventions as context, then makes a creative commitment, then builds from that commitment rather than from the conventions list.

---

## CROSS-FILE CONTAMINATION PATTERNS

### Pattern A: Brief-to-Auditor Flow (C-11, C-21, C-27)

The most significant contamination across files. Three files address whether auditors should receive conviction brief excerpts:

| File | Position |
|------|----------|
| 03-skill-architecture.md | YES -- gives Sections 1 + 4 |
| 10-orchestrator-plumbing.md | YES -- Step 4.2 implements extraction |
| 12-window2-design.md | NO -- recommends zero context, contradicts 03 and 10 |

**Resolution needed:** This is a live design contradiction. The Window 2 designer has the stronger argument (fresh-eyes principle, PA skill alignment, adversarial review support). Files 03 and 10 should be updated to remove brief-to-auditor flow.

### Pattern B: Gates That Check Creative Output (C-03, C-04, C-05, C-13, C-22, C-28)

Six separate contamination findings share the same root cause: gates or validation checks that evaluate the CONTENT of creative agent output. The new process's plumbing/freedom split should mean that the orchestrator only validates structural properties of agent output (file exists, has correct format, correct number of sections). But several gates and validation checks cross this line:

| Gate/Check | What It Evaluates | Plumbing or Freedom? |
|-----------|-------------------|---------------------|
| BV-03 (forbidden spec language) | Words in conviction brief | Freedom -- policing creative language |
| BV-08 (brief-output diff) | Coverage of brief specs in HTML | Freedom -- compliance checking creative process |
| GR-64 (usability priority) | Content of Weaver synthesis | Freedom -- checking creative output for keywords |
| GR-83 (INTENT comment count) | Count of builder meta-comments | Borderline -- format requirement on creative output |
| Contamination check (Step 4.9) | Words in auditor reports | Freedom -- policing creative language |

**Principle:** If a gate checks a CREATIVE AGENT'S output for specific CONTENT (words, coverage, keyword presence), it is contamination. If a gate checks output for STRUCTURAL properties (file exists, section count, file size), it is plumbing.

### Pattern C: "Pipeline" Terminology (C-01, C-07, C-08, C-15, C-19, C-25, C-30, C-32)

Eight LOW findings across all files. The user explicitly said to call the new system a "process," not a "pipeline." This is the easiest fix -- a project-wide find-and-replace where "pipeline" refers to the new system.

### Pattern D: Tier/Routing Vocabulary (C-02, C-17)

The old pipeline's tier model (Floor/Middle/Ceiling/Flagship) and routing logic (Track 1 vs Track 2, tier-based agent allocation) appear in two files as "ALWAYS FLAGSHIP." This imports the tier concept and then collapses it, when the correct approach is to not import it at all.

---

## TOP 5 ACTIONS (Ranked by Impact)

1. **Resolve brief-to-auditor contradiction.** Auditors should receive ZERO conviction brief content. Update 03-skill-architecture.md and 10-orchestrator-plumbing.md to match 12-window2-design.md's recommendation. (Fixes C-11, C-21, C-27)

2. **Strip gates that evaluate creative output content.** Remove BV-03, BV-08, GR-64, and the auditor contamination check. Replace GR-64 with the orchestrator's own usability scan. Replace BV-08 with nothing -- the PA catches real perceptual problems without needing brief-output compliance checking. (Fixes C-03, C-04, C-05, C-13, C-22, C-28)

3. **Remove tier vocabulary from the new process.** Replace "ALWAYS FLAGSHIP" with "the new process has no tier routing." Remove Tier 1-5 question classifications. Renumber questions Q-01 through Q-20. (Fixes C-02, C-10, C-17, C-31)

4. **Replace "pipeline" with "process" where referring to the new system.** Project-wide terminology fix. (Fixes C-01, C-07, C-08, C-15, C-19, C-25)

5. **Constrain the orchestrator's experiential scan to broken rendering only.** Rename from "Experiential Scan" to "Usability Scan." Limit to rendering failures, not readability judgment. (Fixes C-12)

---

## WHAT I CONSIDERED CONTAMINATION BUT IS ACTUALLY NECESSARY PLUMBING

### The Gate Runner Itself

One might argue that a 28-gate programmatic verification system IS old pipeline thinking. But the gates catch real failures that LLMs cannot perceive (sub-perceptual CSS, RGB arithmetic, stacked gap totals). The gate audit (02-gate-audit.md) does a thorough job of stripping ceremony gates and keeping empirically-proven failure-prevention gates. The 28 survivors are plumbing, not contamination.

### The Orchestrator's Artifact Verification Chain

The plumbing spec's verification chain (Glob -> Read -> check -> proceed) looks like old-pipeline ceremony. But it addresses a REAL problem: LLM orchestrators skip steps. The artifact chain is infrastructure reliability engineering, not quality compliance. Each verification checks "did the thing happen" not "was the thing good."

### The Reading-Order Architecture

Placing vocabulary files after the conviction brief could be seen as old-pipeline "phase gating." But it serves a fundamentally different purpose: the old pipeline's gates prevented progression to protect downstream agents from bad input. The new process's reading order shapes the builder's cognitive mode to maximize creative quality. Same mechanism (ordering), different purpose (creative activation vs compliance enforcement).

### The REFINE Builder Pattern

Using a different Opus instance for refinement could be seen as old-pipeline multi-agent overhead. But continuation bias is a real LLM limitation. The same builder who made a flat page cannot see its flatness. A different builder with the original's creative state (via reflection + conviction brief) can. This is architecture for quality, not ceremony.

---

**END OF CONTAMINATION AUDIT**
