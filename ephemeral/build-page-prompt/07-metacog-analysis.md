# 07 -- METACOGNITIVE FAILURE MODE ANALYSIS: How the Master Execution Prompt Itself Could Fail

**Agent:** metacog-analyst (Opus 4.6)
**Date:** 2026-02-19
**Method:** Read 8 source files (~5,700 lines, ~370KB) spanning two research corpora (flagship-44-recipe: contrarian, unasked-questions, compression-metacog, telescope-microscope, recipe-ceiling; fat-core-capability: contrarian, master-synthesis; pipeline-analysis: CLAUDE.md). Applied each corpus's failure frameworks reflexively to the prompt we are about to write.

**Central question:** The master execution prompt IS the pipeline. If the prompt fails, everything fails. How will it fail?

---

## SECTION 1: TOP 10 FAILURE MODES

### FM-01: SKIMMING COLLAPSE (Probability: HIGH)

**The problem:** A fresh Opus instance receiving a 600-1,000 line prompt will not read it with uniform attention. LLM attention follows a primacy-recency curve: the first ~150 lines and last ~50 lines receive high attention; everything in the middle receives degraded attention. (File 14/telescope-microscope documents this as the >1000-line threshold where "only microscope operates.")

**Evidence from this project:**
- The 963-line flagship prompt was "read" by Sonnet builders, but the builder's CSS reveals it processed ~75 lines of directly actionable content (13.4% of prompt). The other 86.6% was dead weight.
- File 13/compression-metacog: "quality PEAKS at ~100 lines of input and DEGRADES monotonically as input increases."
- File 14: Input volume >1000 lines = telescope content is "skimmed or ignored entirely."

**How it manifests in OUR prompt:** The fresh instance reads our prompt's opening sections carefully, builds the first 1-2 files with high fidelity, then treats the remaining files as "more of the same." The LAST files written (validation builds, edits to existing files) will be the lowest quality because they fall in the attention trough.

**The specific danger:** Our prompt must instruct the agent to write 4 new files + edit 4 existing files + run 2 validation builds. That is 10 sequential actions. If the attention curve applies, actions 4-8 will receive degraded attention.

---

### FM-02: CHECKLIST DRIFT (Probability: HIGH)

**The problem:** A prompt that lists 10 tasks will be treated as a checklist regardless of how it is formatted. The fresh instance will enter "compliance mode" -- checking off tasks rather than composing them. (File 17/recipe-ceiling: "A builder attending to RULES produces compliance. A builder attending to DEFECTS produces competence. A builder attending to the RELATIONSHIP BETWEEN FORM AND CONTENT produces design.")

**Evidence from this project:**
- The flagship builder received a prompt with 97 rules and produced 1.5/4. It complied with every binary rule and produced imperceptible CSS.
- The remediation builder received a 1,025-line spec and scored 2.5/4 -- thorough compliance, zero compositional judgment.
- File 17: "The pre-compilation of judgment into rules is the fundamental problem."

**How it manifests in OUR prompt:** The conventions brief is supposed to be a "dispositional document" (describing what the design system IS, not prescribing what to do). But the prompt ALSO says "write this file, then write that file, then edit this." That procedural scaffolding will override the dispositional framing. The fresh instance will treat the conventions brief content as "stuff to transcribe into a file" rather than "understanding to internalize."

**The specific danger:** The conventions brief that the agent writes will be a SUMMARY of what we told it to write, not a COMPOSED document that demonstrates compositional understanding. It will contain all the right keywords and none of the right intelligence.

---

### FM-03: COMPRESSION CASCADE (Probability: HIGH)

**The problem:** The prompt compresses months of research into instructions. The fresh instance compresses those instructions into its working understanding. That working understanding gets further compressed as it writes each file. By the time CSS values appear in the conventions brief, they have been compressed through 3+ representational boundaries. (File 13/compression-metacog: "In any system with N representational boundaries, the surviving intelligence fraction is original * (survival_rate_per_boundary ^ N).")

**Evidence from this project:**
- File 13 documents 5 compression altitudes in this project, each destroying 60-80% of non-procedural intelligence.
- The flagship prompt compressed 337 research findings into 97 rules. The builder compressed those into ~75 lines of working instructions. The CSS compressed those into sub-perceptual values.
- Research -> prompt -> agent -> output = 3 boundaries. At 20% survival per boundary: 0.8% of original intelligence survives.

**How it manifests in OUR prompt:** We write the prompt with deep understanding of WHY each conventions brief section matters. The fresh instance reads the prompt and extracts WHAT to write but loses the WHY. The conventions brief it produces will have the right structure and the wrong content -- section headings match but the actual guidance is hollow or generic.

**The specific danger:** The perception thresholds table will survive (it's procedural -- exact values). The compositional principles will not survive (they're judgment -- "restraint means concentrating CSS budget" becomes "use restraint"). The telescope content dies; the microscope content lives.

---

### FM-04: ORCHESTRATOR LOGIC ERRORS (Probability: MEDIUM-HIGH)

**The problem:** The prompt must describe a multi-step workflow: write file A, write file B using content from file A, edit file C referencing file B, run validation. The fresh instance must hold this dependency graph in working memory while executing sequentially. If it misunderstands a dependency, downstream files will reference non-existent content or use wrong paths.

**Evidence from this project:**
- Pipeline Analysis CLAUDE.md documents "inverted quality routing" -- the flagship sent best reference files to the planner (who doesn't write CSS) instead of the builder (who does). This was a routing error in the original pipeline, and our prompt could reproduce it.
- File 16/contrarian: "The Flagship had 19 agents with zero messaging" -- coordination failures are the default in complex multi-step processes.

**How it manifests in OUR prompt:** The fresh instance writes the conventions brief (file 1) correctly. It then writes the operational recipe (file 2) but forgets to reference specific sections of the conventions brief, creating a disconnected pair. It edits SKILL.md (file 3) but applies changes to the wrong section because the prompt described the target location ambiguously. The validation build uses the newly written files but the agent doesn't verify they were actually saved correctly first.

**The specific danger:** File path errors. The prompt will reference paths like `~/.claude/skills/tension-composition/SKILL.md` and `design-system/compositional-core/CLAUDE.md`. If the agent makes a single typo or uses the wrong base directory, writes silently go to wrong locations.

---

### FM-05: WRONG ASSUMPTIONS ABOUT FILE CONTENTS (Probability: MEDIUM-HIGH)

**The problem:** The prompt will say "edit file X by adding Y after section Z." But the fresh instance has never read file X. It will ASSUME what section Z looks like based on the prompt's description, which may not match reality. If the file has been edited since our last read, or if we describe it imprecisely, the edit will fail or corrupt the file.

**Evidence from this project:**
- The pipeline analysis corpus (CLAUDE.md) documents 7 common mistakes fresh instances make, including "apply flagship-specific CSS values to different content" and "dismiss conviction language" -- both are assumption errors.
- File 11/contrarian: CD-006's builder had access to the FULL mechanism catalog. If we describe it in the prompt as "18 mechanisms in 5 categories" but the catalog has been enriched to 20 mechanisms in 6 categories, the conventions brief will reference the wrong inventory.

**How it manifests in OUR prompt:** The prompt says "edit SKILL.md Phase 3 to replace 'sample 2-4 mechanisms' with per-category minimums." The fresh instance opens SKILL.md and finds that Phase 3 has already been restructured (by a prior enrichment team), and the phrase "sample 2-4" no longer exists. It either fails the edit or invents a new location for the change.

**The specific danger:** Every "edit existing file" instruction assumes the file is in a known state. If ANY prior team has modified these files since our last read, the edits could corrupt working code.

---

### FM-06: THE CONVENTIONS BRIEF BECOMES A CHECKLIST (Probability: MEDIUM-HIGH)

**The problem:** The conventions brief is supposed to be a dispositional document -- "what the design system IS" -- not a procedural recipe or a constraint list. But writing a dispositional document is HARD. It requires the author to understand the design system deeply enough to describe its character, not just its rules. A fresh instance will default to what it knows: listing rules. (File 17: "A specification recipe's ceiling is 2.5/4. A dispositional recipe has the best chance at 4/4.")

**Evidence from this project:**
- File 17 identifies 3 recipe types: specification (WHAT to build, ceiling 2.5), procedural (WHAT steps, ceiling 3.0-3.5), dispositional (HOW TO BE, ceiling unknown/possibly 4/4).
- The flagship's 963-line prompt was supposed to encode compositional intelligence but became a "guardrail factory" with 7.9:1 guardrail-to-playbook ratio.
- File 13: "Procedure survives compression; judgment does not." The conventions brief's most valuable content IS judgment, which means it's the most vulnerable to compression into procedural language.

**How it manifests in OUR prompt:** We instruct the agent to write a conventions brief that "describes what the design system IS and trusts the builder with the method." The agent writes a document that SAYS it trusts the builder but actually LISTS 30 rules the builder must follow. The document's tone is dispositional; its content is specification. This is the most likely failure because the distinction between description and prescription is subtle and the agent will default to prescription.

**The specific danger:** The prompt will contain example content for the conventions brief (perception thresholds, zone semantics, transition grammar). The fresh instance will COPY these examples verbatim rather than COMPOSING a brief that integrates them with understanding. The result will be a patchwork of quoted sections, not a coherent document.

---

### FM-07: VALIDATION BUILDS ARE PERFUNCTORY (Probability: MEDIUM)

**The problem:** The prompt asks the agent to run 2 validation builds after writing all files. By this point, the agent has been working for 60-90 minutes and has written 4 files + edited 4 files. The validation builds are the LAST task. They will receive the least attention and effort.

**Evidence from this project:**
- File 16/unasked-questions: "The project has spent 200+ agent-hours of analysis and 0 pages at Flagship 4/4." Analysis is comfortable; building is hard. The agent will spend 80% of time on file creation and 20% on validation.
- Every experiment that included a "verify your work" step found that builders treated verification as a checkbox, not a genuine quality gate.

**How it manifests in OUR prompt:** The agent writes all files carefully, then runs the validation build. The build produces a page with defects. The agent notes the defects in its output but does not FIX them because the prompt said "run 2 validation builds" (verification task), not "run 2 validation builds and fix any issues" (iterative task). The prompt's phrasing determines whether validation is a gate or a ceremony.

**The specific danger:** If validation is treated as ceremony, we ship broken files and discover the errors during the next human review. If validation is treated as a gate, the agent may spend hours in a fix loop, burning tokens without converging.

---

### FM-08: CONTENT GENERATION VS. CONTENT CURATION (Probability: MEDIUM)

**The problem:** The conventions brief requires CURATED content -- carefully selected perception thresholds, transition grammar rules, zone semantics -- drawn from specific research findings. A fresh instance cannot curate content it has never seen. It can only GENERATE content that approximates what curated content would look like. Generated content will be plausible but may contain errors, invented thresholds, or misattributed rules.

**Evidence from this project:**
- File 11/contrarian: "The conventions brief has NEVER BEEN TESTED. It was assembled from the team's analysis of what went wrong... It is a theoretical artifact."
- File 16/unasked-questions: "No amount of additional analysis can substitute for [testing the brief]."
- File 13: "Every time knowledge moves from one agent to another... what cannot be represented there is silently destroyed."

**How it manifests in OUR prompt:** The prompt says "the perception threshold table is: backgrounds >= 15 RGB, font-size >= 2px, letter-spacing >= 0.5px..." The agent writes the conventions brief with these exact values. But when writing the OPERATIONAL RECIPE, it needs to provide CSS examples that satisfy these thresholds. It GENERATES example hex values that it BELIEVES differ by 15 RGB but actually differ by 12. Nobody catches this because the validation build doesn't include a threshold checker.

**The specific danger:** Invented examples that look right but are wrong. The agent will confidently generate CSS values, zone semantic names, and transition grammar examples that are plausible but do not match the actual design system's vocabulary (tokens.css, mechanism-catalog.md).

---

### FM-09: THE PROMPT TEACHES INSTEAD OF DIRECTING (Probability: MEDIUM)

**The problem:** The prompt must convey WHY certain design choices matter (so the conventions brief is written with understanding, not just compliance). But teaching takes volume. Explaining WHY the perception thresholds exist requires describing the flagship failure (sub-perceptual CSS), which requires describing what sub-perceptual CSS is, which requires... The prompt balloons from 300 lines to 800+ lines, entering the skimming-collapse zone (FM-01).

**Evidence from this project:**
- File 14/telescope-microscope: "Format that fails: 200 more words of telescope before any instruction."
- File 17: "The recipe paradox: more specification produces worse output."
- Pipeline CLAUDE.md: "File 20's data proves: quality PEAKS at ~100 lines of input and DEGRADES monotonically."

**How it manifests in OUR prompt:** We include 200 lines of background context ("This project spent 200+ agent-hours analyzing...") to help the fresh instance understand the stakes. The instance reads the first 50 lines of context, forms a general impression ("this is important"), and then skims the next 150 lines looking for actionable instructions. The teaching content consumed prompt real estate without changing behavior.

**The specific danger:** Teaching and directing compete for the same attention budget. Every line of "here's why this matters" displaces a line of "here's what to do." The optimal prompt is ALL direction and ZERO teaching -- the understanding should be embedded IN the structure, not stated ABOUT the structure.

---

### FM-10: RECURSIVE META-ANALYSIS TRAP (Probability: LOW-MEDIUM)

**The problem:** The fresh instance, being Opus, may recognize that it is writing pipeline infrastructure and begin to META-ANALYZE the pipeline rather than execute. It reads the prompt, recognizes the pattern ("write a conventions brief for a design system pipeline"), and starts generating ANALYSIS of what the brief should contain rather than the brief itself.

**Evidence from this project:**
- File 16/unasked-questions: "The project GENERATES analysis. It is what the project IS." The gravitational pull toward analysis over action is the strongest force in this project.
- File 11/contrarian: "STOP BUILDING INFRASTRUCTURE. START BUILDING PAGES." Repeated across both contrarian reports.
- The meta-to-output ratio is already at NaN:0 for the stated target.

**How it manifests in OUR prompt:** The agent reads the prompt's background section, resonates with the meta-analytical frame, and begins writing comments like "This section of the conventions brief should encode the perception thresholds because..." instead of writing the actual perception thresholds. The agent produces a PLAN for each file rather than the file itself. Output is 90% commentary and 10% deliverable.

**The specific danger:** Opus is particularly susceptible to this because it is analytically powerful. Sonnet would just execute. Opus will think about executing, write about thinking about executing, then produce a thoughtful analysis of why the execution should proceed differently than specified. This is the "660:1 meta-to-output ratio" failure mode at the individual agent level.

---

## SECTION 2: ANTI-FAILURE TECHNIQUES

### AT-01: STRUCTURAL ANTI-SKIMMING

**What prevents skimming?**

The prompt must be structured so that EVERY section is immediately actionable. No background sections. No teaching sections. No "context" preambles. Every paragraph either (a) gives a specific instruction or (b) provides content the agent must copy or adapt.

**Specific techniques:**
1. **Front-load each section with the deliverable.** Not "Phase 1: Understanding the conventions brief. The conventions brief is..." but "WRITE FILE: ~/.claude/skills/build-page/conventions-brief.md. CONTENT FOLLOWS:"
2. **Use numbered steps within each file task.** "Step 1: Read tokens.css. Step 2: Copy the perception threshold table below. Step 3: Write Section 1 using the template below."
3. **Embed checkpoints.** After each file creation: "STOP. Verify this file exists by reading it back. If the read fails, re-write it."
4. **Bold the first line of every section.** Opus scans for visual anchors. Bold lines get attention even during skimming.
5. **Never put critical information in the middle of a paragraph.** Put it on its own line, prefixed with a marker: `>>> CRITICAL: Container width must be 940-960px.`

**Evidence:** Pipeline CLAUDE.md uses exactly this structure (10/10 anti-skimming techniques) and adversarial testing showed fresh instances navigated it successfully.

---

### AT-02: ANTI-CHECKLIST STRUCTURE

**What prevents checklist drift?**

The prompt must frame each file as a CREATIVE ACT, not a COMPLIANCE ACT. The difference is in the verbs:

| Checklist Verbs (avoid) | Creative Verbs (use) |
|---|---|
| Verify, Ensure, Must be, Fail if | Compose, Design, Choose, Express |
| Include, Contain, List | Integrate, Weave, Connect |
| Check, Validate, Confirm | Assess, Judge, Refine |

**Specific techniques:**
1. **Open each file task with a compositional framing.** "This file is the builder's artistic brief. It must convey the FEELING of the design system, not just its rules. Write it as if explaining the design system's character to a colleague who will then build something beautiful with it."
2. **Provide EXAMPLES, not TEMPLATES.** A template says "fill in the blanks." An example says "here's what good looks like; compose something at this level." The agent composes rather than completes.
3. **After listing what a file must contain, add:** "These are the ingredients. Your job is to cook them into a coherent document, not to arrange them in order."

**Evidence:** File 17/recipe-ceiling: "The recipe's job is not to contain the answer but to create the silence in which the builder can hear the question." The prompt should create conditions for good writing, not prescribe the writing.

---

### AT-03: ANTI-COMPRESSION ORDERING

**What prevents compression of critical content?**

The most important content must go FIRST (primacy effect) and be REPEATED at the end (recency effect). Middle content should be procedural (survives compression) not conceptual (dies in compression).

**Specific techniques:**
1. **First 50 lines:** Identity constraints + perception thresholds + the single most important principle ("every CSS value must be perceptible to a human"). These survive because they're in the primacy zone.
2. **Middle lines (50-400):** File-by-file creation instructions. Procedural content. Exact paths, templates, step sequences. This content survives compression because it's actionable.
3. **Final 30 lines:** Re-state the 3 non-negotiables (container width, warm palette, perceptible CSS). These survive because they're in the recency zone.
4. **Never introduce a NEW concept after line 300.** Any concept that first appears after line 300 has a <20% chance of being processed.

**Evidence:** File 14's volume threshold table shows >1000 lines = "microscope only." Our prompt should stay under 600 lines, with conceptual content concentrated in lines 1-100 and 500-600.

---

### AT-04: SELF-VERIFICATION PROTOCOL

**What verification steps catch errors during execution?**

Build verification INTO the workflow, not AFTER it. The agent should verify each file immediately after creating it, before proceeding to the next.

**Specific techniques:**
1. **After each Write:** "Read back the file you just wrote. Verify: (a) it exists at the correct path, (b) it contains the perception threshold table, (c) it does not contain the word 'checklist' or 'must' more than 3 times."
2. **After each Edit:** "Read the edited file. Verify: (a) the old content is gone, (b) the new content is present, (c) the surrounding context is intact."
3. **Before validation builds:** "Read the conventions brief and the operational recipe. Verify they cross-reference each other correctly. The brief's zone semantic names must match the recipe's zone references."
4. **Binary self-checks:** "Count the number of perception threshold values in the conventions brief. If < 6, you missed some. If > 12, you over-specified."

**Evidence:** Pipeline CLAUDE.md embeds verification into every ingestion phase ("VERIFY: Can you answer these 3 questions? IF NO, re-read."). This structure works for fresh instances.

---

### AT-05: THE CONTINUOUS-ZOOM FORMAT

**What structure prevents the conventions brief from becoming a checklist?**

File 14/telescope-microscope's key insight: telescope and microscope should not be two separate documents but one continuous zoom from compositional intent to CSS values.

**Applied to our prompt:** The prompt should present the conventions brief content as a ZOOM SEQUENCE, not a section list:

```
ZOOM LEVEL 1 (10 lines): What the design system IS
  "KortAI's design system creates warm, confident pages where every
   visual choice serves the content's argument..."

ZOOM LEVEL 2 (20 lines): What zones MEAN
  "Zone 1 = orientation. Zone 2 = engagement. Zone 3 = depth..."

ZOOM LEVEL 3 (30 lines): What CSS values EXPRESS
  "Zone 1 backgrounds: lightest. Zone 2: warmer by >= 15 RGB..."

ZOOM LEVEL 4 (40 lines): Binary constraints
  "Container: 940-960px. Borders: 4px/3px/1px. Warm palette: R>=G>=B."
```

The agent reads this progressive zoom and writes a brief that follows the same structure. The structure itself encodes the telescope-microscope fusion.

---

### AT-06: LITERAL CONTENT BLOCKS

**What prevents content generation errors?**

For critical content (perception thresholds, token references, soul constraints), the prompt should provide the EXACT TEXT to include, not a description of what to include.

**Specific techniques:**
1. **Embed the perception threshold table literally.** Not "include a table of perception thresholds" but:
```
COPY THIS TABLE INTO THE CONVENTIONS BRIEF:

| Property | Minimum Delta |
|---|---|
| Background | >= 15 RGB on at least one channel |
| Font-size | >= 2px between sections |
| Letter-spacing | >= 0.5px (0.03em at 16px) |
| Padding | >= 24px between zones |
| Border | present (>= 1px) or absent |
| Total boundary gap | <= 120px stacked |
```

2. **Provide file paths as code blocks.** Not "edit the tension-composition skill" but:
```
FILE: /Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md
```

3. **Mark literal content with `>>> LITERAL:` prefix.** The agent knows to copy, not paraphrase.

**Evidence:** File 13/compression-metacog: "Procedure survives compression; judgment does not." Literal content is procedure. Descriptions are judgment. Use literal content for everything that must survive.

---

## SECTION 3: THE PROMPT'S OWN DESIGN

### Q1: Should the prompt be a recipe, a conventions brief, or something else?

**Answer: A RECIPE that CONTAINS the conventions brief content as literal blocks.**

The prompt is an instruction to a builder-agent. It should use the format proven to work for builder-agents: sequenced steps with exact values (File 17's "procedural recipe"). But the CONTENT it instructs the agent to write includes a conventions brief, which is dispositional. So the prompt is a recipe whose payload is a disposition.

This is analogous to a recipe for making bread: the recipe is procedural ("mix flour, water, yeast; knead 10 minutes; rise 1 hour"), but the PRODUCT (bread) is not procedural -- it is organic and emergent. Our prompt is procedural ("write file A with this content; edit file B at this location"), and the product (the conventions brief) should be dispositional.

**The key architectural decision:** The prompt should NOT try to be dispositional itself. It should be relentlessly procedural -- step 1, step 2, step 3 -- with literal content blocks embedded at each step for the agent to use as raw material.

---

### Q2: What is the optimal length?

**Answer: 400-600 lines.**

Evidence:
- File 14: Quality peaks at ~100 lines of DIRECT instruction but the total input (instruction + reference) can be ~2,500 lines. Our prompt contains both instruction and embedded reference content.
- File 17: The "30-50 lines" optimal is for the conventions brief the BUILDER reads, not for the meta-prompt that creates the brief.
- Pipeline CLAUDE.md: 712 lines, works for fresh instances (adversarially tested).

**The breakdown:**
- Lines 1-50: Identity, non-negotiables, the single-paragraph mission statement
- Lines 50-100: File inventory (what to create, what to edit, in what order)
- Lines 100-350: Per-file instructions with embedded literal content blocks
- Lines 350-450: Edit instructions for existing files (diffs, not full rewrites)
- Lines 450-550: Validation build instructions with self-check protocol
- Lines 550-600: Recency-zone restatement of non-negotiables + final self-check

**What to CUT if the prompt exceeds 600 lines:**
1. Background context (the agent doesn't need to know the project's history)
2. Rationale for design decisions (WHY we chose this structure)
3. Alternative approaches that were rejected
4. Anything the agent doesn't directly USE while writing

---

### Q3: Should the prompt include the ACTUAL CONTENT of files, or instructions about what to write?

**Answer: BOTH, in a specific pattern.**

For each file, the prompt should provide:
1. **Exact path** (literal)
2. **Section structure** (template -- section names and ordering)
3. **Critical content blocks** (literal -- perception thresholds, token references, soul constraints)
4. **Compositional guidance** (instructions -- "write this section to convey the FEELING of...")
5. **Anti-pattern warnings** (instructions -- "this section must NOT become a rule list")

The ratio should be approximately 60% literal content / 40% compositional instructions. This ensures the critical content is correct (literal) while the connective tissue reflects understanding (composed).

**What MUST be literal:**
- Perception threshold table (exact values)
- File paths (exact strings)
- Token names and CSS variable references
- Soul constraints (from prohibitions.md)
- Section headers and structure

**What should be COMPOSED by the agent:**
- Introductory framing for each section
- Transition text between sections
- Examples that illustrate principles
- The "voice" and "character" of the design system description

---

### Q4: Should the prompt have self-check points?

**Answer: YES, exactly 4.**

One self-check per major phase:
1. **After writing the conventions brief:** "Read it back. Count the perception threshold values. Count the words 'must,' 'verify,' 'ensure,' 'fail.' If constraint language exceeds 20% of total words, the brief has drifted into checklist territory. Revise."
2. **After writing the operational recipe:** "Read it back. Does every phase have (a) an exact CSS value or file reference, (b) a self-check question, and (c) a 'WHY THIS MATTERS' annotation? If any phase lacks all three, add them."
3. **After editing existing files:** "Read the edited files. Do the edits reference content that exists in the new files you just created? If any cross-reference points to a section that doesn't exist, fix it."
4. **After validation builds:** "Read the validation build output. Are there error messages? If yes, list them and fix the root cause before proceeding."

More than 4 self-checks creates overhead without value (the agent treats them as noise). Fewer than 4 misses critical failure points.

---

## SECTION 4: BAKED-IN ASSUMPTIONS WE MIGHT BE WRONG ABOUT

### BA-01: "Opus Will Compose at Flagship Level with the Right Inputs"

**Status: CONTESTED (File 11/contrarian: "empirically vacuous")**

This is the foundational assumption. The entire master prompt's purpose is to give a fresh Opus the "right inputs" so it composes a conventions brief + recipe + edits at high quality.

**What could be wrong:**
- Opus may produce COMPETENT infrastructure (3/4 COMPOSED) but not EXCELLENT infrastructure (4/4 DESIGNED). The conventions brief may be well-structured and well-written but lack the compositional depth that makes CD-006's building context exceptional.
- File 17: "Even a dispositional recipe has a ceiling... determined by the builder model's compositional intelligence." If Opus's compositional intelligence peaks at "professionally competent" for infrastructure documents (as opposed to HTML pages where it demonstrably excels), the conventions brief will be competent but not inspired.
- The n=0 problem: We have ZERO examples of Opus writing a conventions brief. We have examples of it writing HTML pages (CD-006) and applying CSS fixes (remediation). Writing a meta-level document about how to write HTML pages is a different task entirely.

**What we're betting on:** That Opus's demonstrated compositional intelligence transfers from "writing CSS" to "writing about how to write CSS." This transfer is plausible but undemonstrated.

**Mitigation:** Include worked examples of what good conventions brief content looks like. Not full sections, but 3-5 paragraph samples that demonstrate the desired quality level. The agent pattern-matches to the examples.

---

### BA-02: "9 PA Auditors Can Detect Flagship Quality"

**Status: PARTIALLY VALID, PARTIALLY CIRCULAR (File 11/contrarian: "PA-05's collapse at 4/4 is not a deficiency -- it is accuracy")**

This assumption applies not to the prompt itself but to the validation builds. The prompt instructs the agent to build validation pages and (presumably) these will later be audited.

**What could be wrong:**
- File 11: "The PA-05 scale was designed by researchers in this project. The anchoring for each level was written by Claude instances analyzing Claude output." This is a self-referential measurement. Claude judges Claude's work using Claude's criteria.
- File 16/unasked-questions (UQ-01): "Is PA-05 4/4 a valid target or a convenient fiction?" If PA-05 systematically overvalues complexity, the pipeline optimizes for the wrong target.
- The 9 auditors share Claude's priors. A genuinely novel compositional approach might score LOW because it doesn't match what Claude's training data considers "designed."

**Mitigation:** The prompt should NOT reference PA-05 scores. It should reference PERCEPTIBLE QUALITY -- "can a human see the difference between adjacent zones?" This grounds validation in physics (perception thresholds) rather than aesthetics (PA-05 judgment).

---

### BA-03: "The Fix Cycle Will Converge (Not Oscillate)"

**Status: UNTESTED BUT CONCERNING (File 17: "continuation bias means the builder will tend to build on its first decisions")**

The prompt likely includes a fix cycle: build page -> audit -> fix -> re-audit. The assumption is that each cycle improves quality.

**What could be wrong:**
- File 17: "Without critique, even a dispositionally-primed builder may plateau at 3.0-3.5." If the first build hits 2.5, the fix cycle may converge at 3.0 but never reach 3.5+.
- Oscillation risk: The fix cycle might fix problem A but introduce problem B. The next cycle fixes B but re-introduces A. This was observed in the remediation -- fixing background deltas improved perception but removing "sub-perceptual" CSS also removed some intentional micro-refinements.
- Fix fatigue: After 2-3 fix cycles, the agent stops making meaningful changes and starts making cosmetic changes to appear productive.

**Mitigation:** Limit the fix cycle to exactly 2 iterations. First fix: address all BLOCKING issues. Second fix: address remaining SIGNIFICANT issues. If quality is still below threshold after 2 fixes, the initial build was too far off and needs a fresh start, not more patching.

---

### BA-04: "The Conventions Brief Format Actually Works Better Than a Recipe"

**Status: THEORETICAL (File 17: "Category 3 [dispositional recipe] has never been tested")**

The master prompt instructs the agent to write a conventions brief (dispositional) AND an operational recipe (procedural). The assumption is that builders need BOTH -- the brief for compositional understanding, the recipe for execution.

**What could be wrong:**
- File 14/telescope-microscope demonstrates that the brief and recipe should be a CONTINUOUS ZOOM, not separate documents. If they're written as separate files, the builder reads one OR the other, not both.
- File 17: "The Middle experiment succeeded with a planner-generated recipe. The recipe's compositional intelligence came from the PLANNER, not from the brief." If the recipe contains enough compositional intelligence (Level 2-3 ACI from file 14), the brief is redundant.
- File 16/fat-core contrarian: "The Middle experiment is not a test of 'conventions brief' -- it's a test of 'Opus planner + recipe delivery.'" The brief format has literally never been tested as a builder input.

**Mitigation:** The prompt should instruct the agent to write ONE document that INTEGRATES brief and recipe content, structured as a continuous zoom. Not two files that must be read together. A single "builder's guide" that goes from "what this design system IS" to "what CSS to write and in what order" in one flow.

**Counter-argument for keeping them separate:** If the builder's guide is too long (>200 lines), the volume alone kills effectiveness (FM-01). Two shorter documents (80-line brief + 120-line recipe) may be better than one 200-line hybrid. This is a genuine design tension.

---

### BA-05: "A Single Fresh Instance Can Execute This Entire Workflow"

**Status: UNTESTED AND PROBABLY WRONG**

The master prompt asks one agent to: read the prompt, understand the design system, write a conventions brief, write an operational recipe, write supplementary files, edit 4 existing files, run 2 validation builds, and self-verify. That is 10+ sequential tasks requiring sustained compositional intelligence over potentially 2+ hours.

**What could be wrong:**
- Context window degradation. As the agent writes files and accumulates output, its context window fills. By task 7, the prompt's opening content (the non-negotiables, the design principles) has been pushed far back in context. The agent's working understanding of the prompt degrades with each task.
- Cognitive mode switching. Writing a dispositional conventions brief requires one mode. Writing a procedural recipe requires another. Editing existing code requires a third. Running validation builds requires a fourth. The agent must switch modes 4+ times. Each switch risks losing the context from the previous mode.
- Fatigue analogue. LLMs don't get "tired," but the quality of generation does degrade with output length. A 10,000-token generation task produces lower-quality output in tokens 8,000-10,000 than in tokens 1-2,000.

**Mitigation:**
1. Order tasks from hardest to easiest. The conventions brief (hardest, most creative) should be FIRST. Edits to existing files (easiest, most mechanical) should be LAST.
2. Embed re-grounding markers at task boundaries: ">>> RE-READ LINES 1-50 OF THIS PROMPT BEFORE PROCEEDING."
3. Keep total expected output under 8,000 lines. If the 4 new files + 4 edits + 2 validation builds exceed this, split into 2 prompt executions.

---

### BA-06: "Content From Research Reports Can Be Compressed Into a Prompt Without Fatal Loss"

**Status: STRUCTURAL IMPOSSIBILITY (File 13: "lossy compression is inevitable; the losses can be directed")**

The master prompt compresses the findings of 370KB+ of research into ~500 lines. This is ~740:1 compression. File 13 demonstrates that intelligence survival at this compression ratio is near zero for non-procedural content.

**What could be wrong:**
- The prompt WILL lose the relational knowledge ("X works BECAUSE of its relationship to Y")
- The prompt WILL lose the proportional knowledge ("X matters MORE than Y")
- The prompt WILL lose the emergent knowledge ("quality arises from the INTERACTION of X and Y")
- Only procedural knowledge survives ("set background to >= 15 RGB delta")

**Mitigation:** Accept the loss. Don't try to compress 370KB into 500 lines. Instead:
1. Include the 5 most critical PROCEDURAL findings as literal content
2. Point the agent to reference files it should READ DIRECTLY (tokens.css, mechanism-catalog.md, prohibitions.md)
3. Trust that the agent's reading of these reference files will regenerate some of the relational/proportional knowledge that the prompt cannot transmit

**The honest assessment:** The master prompt will transmit ~15% of the project's accumulated intelligence. The reference files will transmit another ~30%. The remaining ~55% is lost. This is the structural ceiling of any single-prompt approach. If that 55% turns out to be critical, the single-prompt approach is insufficient.

---

### BA-07: "The Design System Files Are Stable and Complete"

**Status: ASSUMED BUT UNVERIFIED**

The prompt will reference specific files (tokens.css, mechanism-catalog.md, prohibitions.md, SKILL.md). It assumes these files are in their final, correct state.

**What could be wrong:**
- The enrichment teams may have introduced errors or inconsistencies
- The mechanism catalog may reference mechanisms that are not in the component library
- Token names in tokens.css may not match references in other files
- SKILL.md may have stale references to file structures that have been reorganized

**Mitigation:** The prompt should include a "pre-flight check" as Step 0: "Before creating any files, read: tokens.css, prohibitions.md, mechanism-catalog.md. Verify they exist and are non-empty. If any file is missing or empty, STOP and report the error."

---

## SECTION 5: SYNTHESIS -- THE PROMPT'S META-ARCHITECTURE

### The Fundamental Tension

The prompt faces an impossible tension:
- **Too short** (<300 lines): Missing critical content. The agent invents what it doesn't know.
- **Too long** (>800 lines): Skimming collapse. The agent ignores what it can't process.
- **Too prescriptive**: Checklist drift. The agent complies without composing.
- **Too dispositional**: The agent analyzes instead of executing.
- **Too literal**: The output is a patchwork of copied blocks.
- **Too instructional**: The agent generates plausible but incorrect content.

### The Recommended Architecture

```
SECTION 0: MISSION (10 lines)
  Single paragraph: what we're building, why, what success looks like.
  3 non-negotiables (container width, warm palette, perceptible CSS).

SECTION 1: INVENTORY (15 lines)
  List of all files to create/edit, in execution order.
  Dependency graph: which files reference which.

SECTION 2: PRE-FLIGHT (20 lines)
  Read 3 reference files. Verify they exist.
  Read 1 reference page (CD-006). Note its quality level.

SECTION 3: FILE CREATION -- CONVENTIONS BRIEF (100-120 lines)
  Path. Structure template. 3 literal content blocks (thresholds, tokens, soul).
  Compositional guidance for connective sections.
  Self-check: count constraint words, verify threshold values.

SECTION 4: FILE CREATION -- OPERATIONAL RECIPE (80-100 lines)
  Path. Phase template (9 phases). Literal phase names and gate checks.
  Compositional guidance for per-phase instructions.
  Self-check: verify cross-references to conventions brief.

SECTION 5: FILE CREATION -- SUPPLEMENTARY FILES (40-60 lines)
  Paths. Content specifications. Literal blocks where needed.

SECTION 6: FILE EDITS (60-80 lines)
  For each edit: exact file path, exact old text, exact new text.
  Self-check: read file after edit, verify change applied.

SECTION 7: VALIDATION BUILDS (40-50 lines)
  Build instructions. What to check. How to fix if broken.
  Binary pass/fail criteria.

SECTION 8: RECENCY RESTATEMENT (15 lines)
  Re-state 3 non-negotiables.
  Re-state the mission.
  "You are done when all files exist, all edits applied, both builds pass."

TOTAL: 380-470 lines
```

This architecture:
- Stays under 600 lines (anti-skimming)
- Front-loads identity (primacy zone)
- Embeds literal content (anti-compression)
- Includes 4 self-checks (anti-error)
- Ends with restatement (recency zone)
- Orders hardest tasks first (anti-fatigue)
- Separates creative tasks (Sections 3-4) from mechanical tasks (Sections 6-7)

### What This Architecture Cannot Prevent

1. **The agent may still produce a conventions brief that reads like a checklist.** The dispositional-vs-prescriptive distinction is subtle and hard to enforce through instructions alone.
2. **The agent may still invent CSS values that violate thresholds.** Self-checks catch SOME of these but not all.
3. **The validation builds may not test what matters.** If the validation build uses the newly written conventions brief, it tests whether the brief is SYNTACTICALLY correct, not whether it PRODUCES good pages.
4. **The 55% intelligence loss is real.** No prompt architecture can transmit what the prompt cannot contain.

### The Honest Probability Assessment

| Outcome | Probability |
|---|---|
| All files created at correct paths, syntactically correct | 90% |
| Conventions brief is dispositional (not a checklist) | 50-60% |
| Conventions brief content is factually accurate | 70-80% |
| Operational recipe is properly sequenced | 80-85% |
| Edits to existing files apply cleanly | 75-85% |
| Validation builds run without errors | 60-70% |
| Resulting pipeline ACTUALLY PRODUCES better pages than previous pipeline | 35-50% |

The last row is the one that matters. And it's the one with the widest uncertainty band. Because ultimately, we're betting that a prompt-about-a-pipeline will produce a pipeline-that-produces-pages -- and that's TWO layers of indirection between our intent and the final outcome.

---

## SECTION 6: CONTRARIAN SELF-APPLICATION

This report itself is susceptible to exactly the failure modes it diagnoses:

1. **FM-01 (Skimming):** This report is 450+ lines. The team lead will skim Sections 3-4 and focus on Sections 1-2. The failure modes and anti-techniques will be processed; the assumptions and synthesis will receive less attention.

2. **FM-03 (Compression):** When the team lead compresses this report into prompt design decisions, the specific mitigations will survive but the reasoning behind them will be lost. "Include 4 self-checks" survives. "The reason for exactly 4 is that more creates noise and fewer misses critical points" does not.

3. **FM-10 (Meta-analysis trap):** This report IS meta-analysis about a meta-prompt about a pipeline about pages. The meta-to-output ratio just increased by another ~450 lines.

**The escape:** The recommended architecture in Section 5 is the actionable deliverable. Everything else in this report is evidence for that architecture. If the team lead reads only Section 5 and uses it as a template, this report has succeeded. If the team lead reads the entire report and uses it as research input for further analysis, this report has failed.

**The one sentence that matters:** The prompt should be 400-500 lines of relentlessly procedural steps with literal content blocks embedded, structured as a progressive zoom from mission to CSS values, with 4 self-checks and a recency-zone restatement.

---

*Written by metacog-analyst (Opus 4.6). This document is itself an instance of FM-09 (the prompt teaches instead of directing). The recommended architecture is 15 lines. The evidence for it is 440 lines. The compression ratio is 29:1. Proceed accordingly.*
