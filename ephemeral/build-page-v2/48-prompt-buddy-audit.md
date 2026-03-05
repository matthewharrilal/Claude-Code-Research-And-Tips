# Prompt Template Buddy Audit

**Author:** prompt-buddy (Task #48)
**Date:** 2026-02-28
**Status:** COMPLETE
**Sources:** prompt-templates.md, 30-IMPLEMENTATION-PLAN-v2.md, 11-window1-design.md, 12-window2-design.md, 13-window3-design.md, perceptual-auditing/SKILL.md

---

## 1. PLAN ALIGNMENT

### Template 1 (Window 1: TC + BUILD)

**ALIGNED:**
- File reading order matches plan Section 1 exactly: [A] Receiving Principle, [B] TC Skill, [C] Raw Content, [CHECKPOINT], [D] Prohibitions, [E] Tokens, [F] Mechanism Catalog, [G] Components CSS, [H] Conventions Brief + Build Instructions.
- Output file requirements match: output.html, _tc-brief.md (5 sections), _reflection.md (3 dimensions).
- Conventions brief content is identical between template and plan (14-line brief, same values).
- Soft gate checkpoint language matches: "STOP. Write your conviction brief before reading the vocabulary files below."

**DISCREPANCIES:**
- **D-01 (MINOR): Plan specifies 8 sections [A]-[H], template merges them into a continuous prompt.** This is correct behavior -- the plan describes what the orchestrator assembles, the template shows the final product. No action needed.
- **D-02 (MINOR): Plan line 413 says `(~/.claude/skills/tension-composition/SKILL.md -- 841 lines, inserted verbatim)` as a source annotation. Template omits these annotations.** Correct -- annotations are plan metadata, not prompt content. The orchestrator replaces `{TC_SKILL_CONTENT}` with the actual file content, not with a source reference.
- **D-03 (MINOR): Window 1 design doc (11-window1-design.md) specifies the conventions brief at ~40 lines including 3 creative guidance lines (multi-coherence, transition variety, metaphor naming). Template includes these 3 lines in the build instructions section, not in the conventions brief.** This is a design improvement -- the template separates mechanical constraints (conventions brief, 14 lines) from creative guidance (build instructions, separate section). The plan-fixer (Change #20) explicitly made this separation. ALIGNED with fixed plan.

### Template 2 (PA Auditor)

**ALIGNED:**
- Receiving principle matches plan Section 2 auditor prompt word-for-word.
- Section 0 protocol matches.
- Language constraint matches.
- Output path format matches (`{OUTPUT_DIR}/_pa/auditor-{AUDITOR_ID}.md`).
- Information isolation is correct: no gate results, no conviction brief, no reflection, no content markdown, no mechanism catalog.

**DISCREPANCIES:**
- **D-04 (SIGNIFICANT): Cold look viewport specification.** Template says "do this for EACH viewport -- 1440px and 768px" with explicit cold look templates for both viewports. Plan Section 2 auditor prompt says "do this for EACH viewport" with `{WIDTH}px` placeholder. Template hardcodes 1440px and 768px which is correct per plan Change #10 (stripped 1024px). But the plan's auditor prompt at line 538 still has `{WIDTH}px` as a placeholder. The template correctly resolves this to two explicit viewport cold looks. No action needed -- template is more precise than plan.
- **D-05 (SIGNIFICANT -- DOCUMENTED): Question assignment discrepancy between plan and PA skill.** Plan Step 4 assigns B=Q-02, Q-06, Q-14, Q-18 and D=Q-04, Q-08, Q-13, Q-20. PA skill assigns B=E-02, E-08, E-14, E-18 and D=E-04, E-06, E-13, E-20. E-06 and E-08 are swapped between B and D. The template follows the PA skill (user decision #3 = canonical). This discrepancy is **fully documented** in the template's DISCREPANCY NOTE section (lines 587-589) and in the Orchestrator Notes (lines 279). The documentation is thorough and correct. However: **the plan itself should be updated to match** or at least cross-reference. Currently the plan at line 197 still says `B | Q-02, Q-06, Q-14, Q-18` which contradicts the template.
- **D-06 (MINOR): Plan auditor prompt says "YOUR {N} QUESTIONS" with `{N}` placeholder. Template says "YOUR 4 QUESTIONS."** Template is correct -- always 5 auditors with 4 questions each (user decision #1). The `{N}` in the plan is a vestige of the 2-auditor/10-question standard mode which was overridden.

### Template 3 (Weaver)

**ALIGNED:**
- Receiving principle matches plan Section 2 Weaver prompt.
- 5-section output structure matches plan Step 5.2 Weaver Output spec.
- Content embedding approach matches plan Step 5.1: orchestrator Reads files and embeds inline.
- Information isolation correct: no gate results, no components CSS, no mechanism catalog, no content markdown.

**DISCREPANCIES:**
- **D-07 (MINOR): Weaver receives only 1440px screenshots, not 768px.** Template line 308-309: "SCREENSHOTS (1440px):" with only `{SCREENSHOT_PATHS_1440}`. Plan Step 5.1 says "[B] 1440px screenshot paths." Window 2 design doc (12-window2-design.md) Section "Phase 5" says "1440px screenshots (cold-look + scroll-through)." All three agree: Weaver gets 1440px only. ALIGNED.
- **D-08 (MINOR): Plan Section 2 Weaver prompt includes receiving principle line 4: "If 3+ auditors converge on the same observation, your synthesis MUST acknowledge it, even if your own impression differs." Template has this as line 4 of the receiving principle.** Exact match. ALIGNED.
- **D-09 (MINOR): Window 2 design doc specifies 4 sections for Weaver output; plan and template specify 5 (EXPERIENTIAL ANCHOR, WHAT IS WORKING, WHAT IS ALMOST THERE, WHERE TO GO, VERDICT).** Window 2 design doc at line 513 says "4 sections" then lists 5. This is a typo in the design doc, not a template issue. Template matches plan.

### Template 4 (Window 3: REFINE)

**ALIGNED:**
- Reading order matches plan Step 7 exactly: [A] Receiving Principle, [B] HTML, [C] Weaver synthesis, [D] Reflection, [E] Conviction brief, [F] Content, [G-J] Vocabulary files, [K] Conventions brief, [L] User direction.
- Receiving principle matches plan Section 2 Window 3 prompt.
- Information isolation correct: no gate results, no individual auditor reports, no PA-05 scores.
- Pre-REFINE backup instruction (plan Step 7.0) is in orchestrator notes, not template (correct -- backup is orchestrator plumbing).
- Output files match: overwrite output.html, write _reflection-v2.md.

**DISCREPANCIES:**
- **D-10 (SIGNIFICANT): Template has REFINE builder reading files itself. Plan says [B] through [J] are Read() calls by the orchestrator that construct the prompt.** The template at Step 1 says "Read this file: {OUTPUT_DIR}/output.html" -- directing the agent to use its Read tool. Plan Step 7.1 says "8x Read() calls for prompt construction" suggesting the orchestrator embeds content inline. But the template's Orchestrator Notes (line 516) explicitly state: "The REFINE builder reads files itself (unlike the Weaver, who receives content inline). The orchestrator provides file paths, not content." This is an intentional design choice. **Check against plan:** Plan Step 7 table specifies [B] through [J] with Read() as Source, which is ambiguous -- could mean orchestrator reads or builder reads. The template's notes resolve the ambiguity: builder reads. However, this means the REFINE builder needs file-reading tool access (`subagent_type="code"` provides this). ALIGNED with intent, but plan could be more explicit.
- **D-11 (MINOR): Template uses `{USER_DIRECTION_BLOCK}` placeholder. Plan uses conditional `{IF _user-direction.md exists:}` syntax.** Both express the same logic -- conditional inclusion. Template makes it an explicit named block (lines 500-508) with its own section documenting the conditional. Cleaner than plan's inline conditional.

---

## 2. PLUMBING/FREEDOM BOUNDARY

### Plumbing Sections (Should Be Structural Only)

**Template 1 (Window 1):**
- File paths: PLUMBING. Correct.
- Output file names/requirements: PLUMBING. Correct.
- Conventions values: PLUMBING. Correct.
- TC skill content: FREEDOM (creative process guide). Correct.
- STOP checkpoint: PLUMBING (structural sequencing gate). Correct.

**Template 2 (PA Auditor):**
- Screenshot paths: PLUMBING. Correct.
- Output file path: PLUMBING. Correct.
- Language constraint: PLUMBING (vocabulary restriction). Correct.
- Section 0 protocol: PLUMBING (structural format) + FREEDOM (experiential content). Mixed correctly -- the format is plumbing, the content produced is freedom.

**Template 3 (Weaver):**
- Screenshot paths: PLUMBING. Correct.
- Output file path: PLUMBING. Correct.
- Section structure (5 sections): PLUMBING. Correct.
- Experiential anchor, synthesis, verdict: FREEDOM. Correct.

**Template 4 (Window 3):**
- File paths: PLUMBING. Correct.
- Checkpoint structure: PLUMBING. Correct.
- Conventions values: PLUMBING. Correct.
- ONE THING commitment: FREEDOM. Correct.

### Compliance Language Audit

**PASS.** Searched all four templates for compliance language:

| Pattern | Found? | Location |
|---------|--------|----------|
| "Verify that" / "Check that" | NO | -- |
| "Ensure" | NO | -- |
| "Must achieve" / "Must score" | NO | -- |
| "Quality bar" / "Quality gate" | NO | -- |
| PA-05 / score references | NO | -- |
| Gate IDs (GR-XX) | NO | -- |
| Mechanism counts | NO | -- |
| "Must create" (in creative sections) | NO | -- |

**Near-misses worth noting:**

- **F-01: "You must produce 3 files" (Template 1, line 51).** This is structural plumbing (output requirements), not creative compliance. The word "must" here means "you need to write these files" not "you must achieve quality X." PASS -- correctly in plumbing territory.
- **F-02: "Your synthesis MUST acknowledge it" (Template 3, line 4 of receiving principle).** This is in the Weaver's receiving principle. It constrains the synthesis process (if 3+ agree, you must acknowledge), not creative quality. This walks the line but is correct -- it prevents the Weaver from overriding convergent perception, which is a process constraint, not a quality evaluation. PASS.
- **F-03: "You may NOT replace the metaphor itself or violate the world-description" (Template 4, lines 3-4).** This is a scope constraint (what you cannot do), not a quality evaluation. PASS.
- **F-04: "Follow this sequence exactly" (Template 4, line 7).** Process sequencing instruction, not quality evaluation. PASS.

### Quality Evaluation Disguised as Structural Validation

**CLEAN.** No instances found of:
- Asking an agent to self-evaluate output quality
- Embedding numerical thresholds in creative sections
- Framing creative direction as verification steps
- Requiring agents to "check" their work against criteria

---

## 3. INFORMATION ISOLATION

### PA Auditors: Zero Build Context?

**VERIFIED CLEAN.** PA auditors receive:
- Screenshots (file paths)
- 4 assigned questions (literal text)
- Section 0 protocol
- Language constraint
- Output file path

PA auditors DO NOT receive:
- Conviction brief excerpts: CONFIRMED NOT PRESENT
- Builder reflection: CONFIRMED NOT PRESENT
- Gate results: CONFIRMED NOT PRESENT
- Mechanism catalog: CONFIRMED NOT PRESENT
- Components CSS: CONFIRMED NOT PRESENT
- Content markdown: CONFIRMED NOT PRESENT
- Builder prompt: CONFIRMED NOT PRESENT
- Other auditor reports: CONFIRMED NOT PRESENT
- "What this surfaces" annotations: CONFIRMED NOT PRESENT
- Any numerical targets: CONFIRMED NOT PRESENT

**I-01 (OBSERVATION): The auditor template contains the phrase "You know nothing about who made it, why, or what it's supposed to look like" (line 148).** This is active isolation language -- good. It sets the expectation that the auditor should not try to infer builder intent.

### Weaver: Gets Conviction Brief + Reflection?

**VERIFIED.** Weaver receives:
- 1440px screenshots
- All 5 auditor reports (inline)
- Full conviction brief (inline)
- Builder's reflection (inline)

Weaver does NOT receive:
- Gate results: CONFIRMED NOT PRESENT
- 768px screenshots: CONFIRMED NOT PRESENT (only 1440px)
- Components CSS: CONFIRMED NOT PRESENT
- Mechanism catalog: CONFIRMED NOT PRESENT
- Content markdown: CONFIRMED NOT PRESENT

### REFINE Builder: Weaver Synthesis but NOT Raw Auditor Reports?

**VERIFIED.** Template 4 Step 2 reads `{OUTPUT_DIR}/_pa/weaver-synthesis.md` only. No individual auditor report paths appear in the REFINE template.

**I-02 (OBSERVATION): Plan Section 2 Window 3 (standard mode) specifies REFINE builder receives raw auditor reports when no Weaver exists.** But user decision #1 says always 5 auditors, and always-5 triggers always-Weaver. So standard mode (2 auditors, raw reports to REFINE) is effectively dead code. The template correctly implements only the high-stakes path (Weaver synthesis to REFINE). However, this means if the Weaver fails (Task error, no output), the REFINE builder gets NO auditor data at all -- the template has no fallback for Weaver failure. Plan Step 5.5 sets `weaver_available = false` but the routing fallback (Step 6.2 keyword scan) only affects the routing decision, not what the REFINE builder receives. **This is a gap in the plan, not in the template.** The template correctly implements the happy path.

### Cross-Isolation Matrix vs. Template Reality

| Information | Plan Isolation Matrix | Template Reality | Match? |
|-------------|----------------------|------------------|--------|
| Gate results → Auditors | NO | NO | YES |
| Gate results → Weaver | NO | NO | YES |
| Gate results → REFINE | NO | NO | YES |
| Conviction brief → Auditors | NO | NO | YES |
| Conviction brief → Weaver | YES | YES | YES |
| Conviction brief → REFINE | YES (last) | YES (Step 4) | YES |
| Auditor reports → Weaver | YES (all 5) | YES (all 5 inline) | YES |
| Auditor reports → REFINE | NO (Weaver only) | NO (Weaver only) | YES |
| Mechanism catalog → Auditors | NO | NO | YES |
| Mechanism catalog → REFINE | YES | YES (file path) | YES |
| Screenshots → Weaver | YES (1440 only) | YES (1440 only) | YES |

**FULL MATCH.** Template isolation matrix at lines 558-569 accurately reflects what the templates actually deliver.

---

## 4. FRESH-EYES REVIEW

### If I Were Spawned with Template 1 (Window 1 Builder)

**Would I know what to do?** YES, clearly. The receiving principle gives orientation. The output requirements are explicit (3 files with named sections). The STOP checkpoint is clear.

**What's confusing?**
- **FE-01: The TC skill content could be overwhelming at 841 lines.** If I encounter the full skill before the content, I might spend excessive time processing it before I even know what content I am building for. The reading order (skill before content) is intentional per the design doc, but in practice, the skill is a LOT to absorb before the material arrives. Mitigation: the skill's internal structure presumably has its own reading order guidance.
- **FE-02: "CONVENTIONS (mechanical constraints -- absorb these, do not checklist them)" -- the parenthetical is doing important work.** But "absorb" is an interpretive instruction. What does it mean to "absorb" vs "checklist"? A literal-minded agent might not distinguish. The key behavior difference: absorb = set `max-width: 960px` once during building and move on; checklist = verify against every value after building. The template could be more explicit but this is a deliberate design choice (avoid over-specifying creative process).

**What would I do differently?** Nothing structural. The template is well-sequenced.

### If I Were Spawned with Template 2 (PA Auditor)

**Would I know what to do?** YES. The instructions are extremely clear. Section 0 protocol is explicit. Questions are verbatim. Output format is specified.

**What's confusing?**
- **FE-03: Screenshot path format.** Template line 190-191 says `{SCREENSHOT_PATHS_1440}` and `{SCREENSHOT_PATHS_768}`. The orchestrator needs to expand these into actual file path lists. What format? A newline-separated list? A bullet list? The Orchestrator Notes say "Format as a readable list" (line 276). This should work. But: the cold-look and scroll-through screenshots are separate concepts -- the template says "1440px cold look: {SCREENSHOT_PATHS_1440}" which bundles all 1440px screenshots (cold + scroll) under one label. The Section 0 protocol distinguishes cold look from scroll-through ("Read the cold-look screenshot... After the cold look, read the scroll-through screenshots in sequence"). The auditor needs to know which screenshot is which. The orchestrator should label them: "cold-look.png" and "scroll-01.png, scroll-02.png..." The naming convention handles this if the orchestrator preserves filenames.
- **FE-04: "Spend 5 seconds" (line 162) is not literally achievable by an LLM reading a screenshot.** This is aspirational framing that means "form an impression before analyzing." The instruction works because it activates the right processing mode, but a literal auditor might note that spending exactly 5 seconds is impossible. This is a known PA skill design decision and is working in practice.

### If I Were Spawned with Template 3 (Weaver)

**Would I know what to do?** YES. Clear process: own impression first, then read reports, then synthesize.

**What's confusing?**
- **FE-05: "Write 3 sentences about what YOU experience. These sentences are your experiential anchor -- they cannot be revised after reading auditor reports" (lines 305-306).** This is a soft constraint. The Weaver sees the full prompt including auditor reports below. Can the Weaver actually write 3 sentences about screenshots without being influenced by knowing auditor reports exist below? In practice, yes -- LLMs process prompts sequentially and can produce output at a checkpoint before processing later content. But this is the same soft-gate concern as Template 1's STOP checkpoint. Acknowledged risk.
- **FE-06: Section 1 output says "The first 3 sentences are unrevised" (line 349).** This implies the Weaver writes 3 sentences initially, then can ADD more after reading reports, but the original 3 are locked. Good design -- allows enrichment without corruption.

### If I Were Spawned with Template 4 (REFINE Builder)

**Would I know what to do?** YES. The step-by-step sequence with explicit file paths makes the process clear.

**What's confusing?**
- **FE-07: Steps 1-4 ask the builder to read files, but the prompt says "Follow this sequence exactly. Write each checkpoint response before proceeding" (line 405-406).** Only Step 1 has an explicit CHECKPOINT. Steps 2-4 have implicit checkpoints (questions asked but no "CHECKPOINT" label or "do not proceed" instruction). The builder might skip the reflective responses at Steps 2-4 because they do not see the same urgency as Step 1's explicit checkpoint. Consider adding "Write your response before proceeding to Step 3" etc.
- **FE-08: Step 5 lists vocabulary files as paths the builder should Read, but does not explicitly say "Read these files."** It says "Vocabulary files (these are tools, not instructions):" followed by file paths. A literal agent will understand to read them, but the formatting is subtly different from Steps 1-4 which use "Read this file:" explicitly. Minor consistency issue.

---

## 5. ADVERSARIAL ANALYSIS

### What If an Auditor Ignores the Experiential Pass?

**Risk:** An auditor skips Section 0 (cold look + scroll-through) and jumps straight to answering questions. They produce answers without the perceptual anchor.

**Impact:** Moderate. The auditor's answers lose the first-impression grounding. Their responses become analytical rather than experiential. The Weaver's convergence detection is weaker because one auditor's data is in a different register.

**Safeguard check:** The template says "Before answering any question, inhabit the page" (line 157) and "SECTION 0: THE EXPERIENTIAL PASS" appears before questions. The output format specifies "Structure: Section 0 (cold look for each viewport + scroll-through), then each question response" (lines 209-210). But there is no structural enforcement -- the orchestrator's verification at Step 4.5 only checks "file exists and has > 100 bytes." It does not verify Section 0 presence.

**A-01 (RECOMMENDATION): Add structural verification that auditor reports contain "COLD LOOK" and "Gut reaction:" keywords in the first 30 lines.** This is a plumbing check (keyword presence), not quality evaluation. It catches auditors who skipped Section 0 without evaluating Section 0's quality.

### What If the Weaver's Verdict Contradicts the Body?

**Risk:** The Weaver writes a body that says "the page has catastrophic whitespace, monotonous typography, and no compositional arc" then gives a SHIP verdict. Or writes glowing praise then gives RETHINK.

**Impact:** High. The routing decision uses the verdict keyword (Step 6.2). If the verdict says SHIP but the body says the page is broken, the page ships without refinement.

**Safeguard check:** Plan Step 5.5 checks for verdict keyword presence. Step 6.2 uses string-search for the keyword. Neither checks for consistency between body and verdict. The REFINE builder (if reached) reads the full Weaver synthesis -- so body-verdict contradiction would be caught there. But if the verdict says SHIP, the REFINE builder is never spawned.

**A-02 (RECOMMENDATION): The Weaver template's receiving principle already says "Your verdict is a creative judgment, not a calculation" (line 6). This is the right defense. Adding body-verdict consistency checking would be quality evaluation (forbidden in plumbing). Accept the risk that the Weaver is an Opus agent making a considered judgment. If the Weaver contradicts itself, that is a model failure, not a template failure.**

No template change needed. The risk is real but the fix would violate plumbing/freedom boundaries.

### What If the REFINE Builder Ignores the ONE THING Directive?

**Risk:** The builder states their ONE THING, then proceeds to address all Weaver territories (AMPLIFY + RELEASE + DEEPEN) shallowly instead of doing one thing deeply.

**Impact:** Moderate. The page receives surface-level improvements across multiple areas instead of deep improvement in one area. Historical evidence (Yegge Gas Town) suggests deep single-focus produces better results.

**Safeguard check:** The template's creative commitment section (lines 480-486) is explicit: "Not three things. Not 'address the Weaver's feedback.' One thing that, if you achieved it, would make you proud of your contribution." But there is no structural enforcement. The orchestrator does not verify that the REFINE builder's actions correlate with their stated ONE THING.

**A-03 (OBSERVATION): This is unfixable without violating creative freedom. The ONE THING is a creative framing device, not a contractual obligation. The template does the right thing -- it orients the builder toward depth. Whether the builder follows through is a creative decision. Adding enforcement would make the ONE THING a compliance requirement, defeating its purpose.**

### What If the REFINE Builder Replaces the Metaphor?

**Risk:** Template says "You may NOT replace the metaphor itself" but the REFINE builder rewrites CSS with a completely different spatial logic that functionally abandons the metaphor while keeping the class names.

**Impact:** High. The conviction brief and reflection become irrelevant. The page loses creative continuity.

**Safeguard check:** No structural enforcement. The post-REFINE gate runner checks mechanical properties, not metaphor continuity. The regression check (Step 8.3b) compares gate failure counts, not compositional coherence.

**A-04 (OBSERVATION): Metaphor continuity cannot be verified programmatically. The risk is accepted by design. The defense is the receiving principle's orientation: the builder reads the artifact first, forms their own impression, then reads the conviction brief. If the builder's impression + the brief's world produce a coherent creative response, the metaphor continues. If not, the metaphor was not working and RETHINK should have been the routing.**

### What If Content Is Adversarial (Designed to Break Templates)?

**Scenarios:**
- Content contains CSS code blocks that confuse the builder
- Content is 4,999 lines (just under the warning threshold but massive)
- Content has no narrative structure (API reference, changelog)

**Safeguard check:** Plan Step 0.2b handles length (warning at 5,000, stop at 8,000). Plan content suitability note says "optimized for content with narrative structure... For reference content, consider a simpler direct build." But neither the template nor the orchestrator enforces content type restrictions.

**A-05 (MINOR): Consider adding a content type hint to Template 1's receiving principle: "This process works best with narrative, argumentative, or analytical content. If the content is purely reference material (tables, API docs, changelogs), tell the orchestrator and ask for a simpler build path."** This would be a 1-line addition to the receiving principle.

---

## 6. CROSS-TEMPLATE CONSISTENCY

### Auditor Output Format -> Weaver Input

**Template 2 output format:** "Structure: Section 0 (cold look for each viewport + scroll-through), then each question response (3-8 sentences of prose with screenshot references)."

**Template 3 Weaver input:** "--- AUDITOR A --- {AUDITOR_REPORT_A}" with all 5 reports embedded inline.

**Consistency check:** The Weaver receives the raw auditor reports. The Weaver's receiving principle says "Read all auditor reports. Notice where 3+ agree (convergence) and where 1 disagrees (divergence)." The Weaver does not need auditor reports in any specific format -- it reads prose and synthesizes. The auditor output format (Section 0 + question responses) gives the Weaver structured material to work with. **CONSISTENT.**

### Weaver Output Format -> REFINE Builder Input

**Template 3 Weaver output:** 5 sections: EXPERIENTIAL ANCHOR, WHAT IS WORKING, WHAT IS ALMOST THERE, WHERE TO GO (AMPLIFY/RELEASE/DEEPEN/THE GAP), VERDICT.

**Template 4 REFINE builder input:** Step 2 says "Read this file: {OUTPUT_DIR}/_pa/weaver-synthesis.md" and "The Weaver's direction has territories: AMPLIFY (where the page has momentum), RELEASE (where it holds too tight), DEEPEN (where it has unexplored room)."

**Consistency check:** Template 4 references AMPLIFY, RELEASE, DEEPEN -- three of the four WHERE TO GO territories. THE GAP is not mentioned in the REFINE builder's prompt. **C-01 (MINOR): THE GAP territory is defined in the Weaver template but not referenced in the REFINE template's explanation of Weaver direction.** The REFINE builder will still read THE GAP when they read the Weaver's synthesis file, but the framing paragraph at Step 2 doesn't mention it. Low impact -- the builder reads the full file regardless of what the framing says.

### Builder Reflection -> Weaver Input / REFINE Input

**Template 1 reflection output:** 3 dimensions: CONVICTION, ALTERNATIVES, UNRESOLVED.

**Template 3 Weaver input:** Receives reflection inline as `{REFLECTION_CONTENT}` under header "BUILDER'S REFLECTION (the builder's creative state after building)."

**Template 4 REFINE input:** Step 3 reads `{OUTPUT_DIR}/_reflection.md` with framing "This is the previous builder's creative state -- what they were trying to make, what roads they did not take, what tensions remain unresolved."

**Consistency check:** The framing in both Template 3 and Template 4 accurately describes the 3-dimension reflection content. **CONSISTENT.**

### Conviction Brief -> Weaver Input / REFINE Input

**Template 1 brief output:** 5 sections: WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP.

**Template 3 Weaver input:** Receives brief inline as `{CONVICTION_BRIEF_CONTENT}` under header "CONVICTION BRIEF (what the builder was trying to create)."

**Template 4 REFINE input:** Step 4 reads `{OUTPUT_DIR}/_tc-brief.md` with framing "This is the conviction brief -- the metaphor, the world, the calibration ranges, the opposition map, the compositional arc."

**Consistency check:** Template 4's framing lists all 5 section concepts (metaphor = world-description, world = world-description, calibration ranges = calibration, opposition map = opposition, compositional arc = arc). CONTENT MAP is not mentioned in the framing but is in the file. Low impact. **CONSISTENT.**

### Conventions Brief Consistency

**Template 1 conventions brief:** 13 items (lines 97-109).
**Template 4 conventions brief:** 13 items (lines 461-474).
**Shared conventions brief (lines 528-542):** 13 items.

**C-02: Line-by-line comparison:** All three instances are **IDENTICAL.** The template correctly extracts the conventions brief into a shared reference section and verifies consistency. **CONSISTENT.**

---

## 7. META-COGNITIVE ANALYSIS

### Assumptions About LLM Behavior

**M-01: Sequential prompt processing.** Both soft gates (Template 1 STOP checkpoint, Template 3 experiential anchor) assume the agent processes the prompt top-to-bottom and can produce output at a checkpoint before processing content that appears later in the prompt. This is how current LLM inference works -- the prompt is processed sequentially, and the agent can write output at any point. But: the agent SEES the full prompt in its context. It knows vocabulary files exist below the STOP checkpoint. The assumption is that the sequential processing instruction + creative framing is strong enough to prevent the agent from "cheating" by reading ahead. **Evidence from practice: this assumption holds.** The Middle Tier experiment and Yegge Gas Town builds both produced conviction briefs that demonstrated genuine derivation before vocabulary reading.

**M-02: Creative response to receiving principles.** All four templates assume that a 5-line receiving principle can activate a specific processing mode (creative, experiential, generative). This assumption is that LLMs respond to framing and orientation language, not just to instructions. **Evidence: strong.** The receiving principles are based on patterns that worked in live runs. The key insight: orientation language (what excites you, what do you experience, what is the ONE thing) activates different processing modes than instruction language (verify, ensure, check).

**M-03: Language constraint enforcement.** Template 2 assumes the language constraint (no CSS vocabulary) will be followed. In practice, Opus agents generally comply with explicit vocabulary restrictions. But: the constraint lists specific banned words. What about CSS-adjacent words not on the list (e.g., "responsive", "breakpoint", "viewport", "layout", "column")? These are not CSS property names but are design vocabulary that might contaminate fresh-eyes perception. **M-03a (MINOR): The banned word list could be expanded to include design-adjacent vocabulary, but this risks over-constraining.** Current list is pragmatically effective.

**M-04: One-thing concentration.** Template 4 assumes that asking a builder to commit to ONE THING will produce deeper work than asking them to address all feedback. This is a hypothesis about LLM behavior: that concentration instructions produce concentrated output. **Evidence: moderate.** The Yegge Gas Town REFINE builder was not given an explicit ONE THING instruction but naturally focused. The ONE THING instruction codifies what worked naturally. Risk: an agent might choose a trivial ONE THING ("I want to adjust the footer") and do it deeply, producing minimal improvement. The receiving principle's "if you achieved it, would make you proud of your contribution" clause mitigates this by raising the bar for what counts as a worthy ONE THING.

### What Would Happen with a Different Model?

**Sonnet instead of Opus:**
- Template 1 (builder): Sonnet would likely produce a more compliant, less creative artifact. Historical evidence: Sonnet builders produce mechanically correct but compositionally flat pages. The template's creative framing may not be sufficient to activate Sonnet's generative register.
- Template 2 (auditor): Sonnet might work well here. Auditing is more analytical than generative. The PA skill notes "Future optimization: test Sonnet if quality delta < 10%."
- Template 3 (Weaver): Sonnet might produce adequate synthesis but miss divergent subtlety. The Weaver needs to notice when 1 auditor sees something 4 others missed.
- Template 4 (REFINE builder): Same concern as Template 1 -- creative authority requires creative capability.

### Content Types That Might Break These Prompts

- **Extremely short content (<200 words):** The TC derivation process (questioning, tension, metaphor) assumes sufficient material to derive from. A tweet-length piece of content would produce a forced, over-engineered metaphor.
- **Highly visual content (image galleries, infographics):** The templates assume text-heavy content. The builder's conviction brief format (WORLD-DESCRIPTION, CALIBRATION, ARC) maps to textual narrative structure.
- **Multi-language content:** The templates don't address content in non-English languages. The PA language constraint bans English CSS terms but says nothing about non-English design vocabulary.
- **Code-heavy content (>50% code blocks):** The builder might struggle to derive a metaphor from content that is predominantly code. The TC skill's questioning framework (FEEL/UNDERSTAND/DO/BECOME) is optimized for narrative/argumentative content.

---

## 8. VARIABLE CHECK

### All Variables Defined?

| Variable | Defined? | Source Clear? | Could Be Ambiguous? |
|----------|----------|---------------|---------------------|
| `{OUTPUT_DIR}` | YES | Step 0.3 | NO |
| `{CONTENT_PATH}` | YES | User input | NO |
| `{SLUG}` | YES | Derived from filename | NO |
| `{TC_SKILL_CONTENT}` | YES | Read of skill file | NO |
| `{RAW_CONTENT}` | YES | Read of _content.md | NO |
| `{PROHIBITIONS_CONTENT}` | YES | Read of prohibitions.md | NO |
| `{TOKENS_CONTENT}` | YES | Read of tokens.css | NO |
| `{MECHANISM_CATALOG_CONTENT}` | YES | Read of mechanism-catalog.md | NO |
| `{COMPONENTS_CSS_CONTENT}` | YES | Read of components.css | NO |
| `{SCREENSHOT_PATHS_1440}` | YES | Glob of screenshots | SLIGHTLY -- see V-01 |
| `{SCREENSHOT_PATHS_768}` | YES | Glob of screenshots | SLIGHTLY -- see V-01 |
| `{AUDITOR_ID}` | YES | A through E | NO |
| `{AUDITOR_QUESTIONS}` | YES | Pre-grouped text | NO |
| `{AUDITOR_REPORT_A}` ... `E` | YES | Read of auditor files | NO |
| `{CONVICTION_BRIEF_CONTENT}` | YES | Read of _tc-brief.md | NO |
| `{REFLECTION_CONTENT}` | YES | Read of _reflection.md | NO |
| `{WEAVER_REPORT}` | YES | Read of weaver-synthesis.md | NO |
| `{HTML_PATH}` | YES | output_dir + output.html | NO |
| `{USER_DIRECTION}` | YES (conditional) | Read of _user-direction.md | NO |
| `{USER_DIRECTION_BLOCK}` | YES | Conditional block | NO |

**V-01 (MINOR): `{SCREENSHOT_PATHS_1440}` and `{SCREENSHOT_PATHS_768}` -- the Glob returns file paths but the template doesn't specify formatting.** The orchestrator needs to format these as a readable list that distinguishes cold-look from scroll-through. The naming convention (cold-look.png, scroll-01.png, etc.) handles this if preserved, but the orchestrator notes should specify the format more precisely. The Orchestrator Notes at line 276 say "Format as a readable list" -- this is sufficient.

**V-02 (NOT A VARIABLE BUT WORTH NOTING): Template 4 at line 453 says "Re-read the content: {OUTPUT_DIR}/_content.md" -- this is a file path, not a variable placeholder.** The REFINE builder reads this file directly. CORRECT -- the REFINE builder reads files itself per the design decision.

### Could the Skill File Fill Each Variable?

The placeholder reference table (lines 10-32) maps every variable to its source and the orchestrator step that sets it. This is comprehensive. The skill file would need to:
1. Parse the command argument for content_path
2. Compute slug and date for output_dir
3. Read 6+ design system files for content variables
4. Glob screenshot directories for path lists
5. Read auditor report files for Weaver input
6. Conditionally read _user-direction.md

All of these are standard orchestrator operations. No variable requires creative judgment to fill. **PLUMBING-COMPLETE.**

---

## SUMMARY

### Severity Classification

| ID | Severity | Description |
|----|----------|-------------|
| D-05 | SIGNIFICANT (DOCUMENTED) | Plan Q-assignment still contradicts PA skill; template follows PA skill (correct) but plan should be updated |
| D-10 | SIGNIFICANT (BY DESIGN) | REFINE builder reads files itself vs. orchestrator embedding -- intentional per Orchestrator Notes |
| I-02 | SIGNIFICANT (PLAN GAP) | Weaver failure leaves REFINE builder with no auditor data -- no fallback in template or plan |
| D-04 | MINOR | Cold look viewport explicitly 1440+768 (correct, more precise than plan) |
| D-06 | MINOR | "YOUR 4 QUESTIONS" hardcoded (correct for always-5 auditors) |
| D-09 | MINOR | Window 2 design doc typo ("4 sections" but lists 5) |
| C-01 | MINOR | THE GAP not mentioned in REFINE builder's Weaver framing |
| FE-07 | MINOR | Steps 2-4 in REFINE template lack explicit checkpoint labels |
| A-01 | RECOMMENDATION | Add structural check for Section 0 presence in auditor reports |
| A-05 | MINOR | Consider content type hint for non-narrative content |

### Blocking Issues

**ZERO BLOCKING ISSUES.** The templates are well-constructed, internally consistent, and aligned with the plan's intent. All significant discrepancies are either (a) documented and intentional or (b) plan gaps that the templates cannot fix.

### Top 3 Improvements (Non-Blocking)

1. **Update plan Step 4 question assignments to match PA skill** (D-05). The template is correct; the plan is stale. This prevents confusion when the skill implementer reads the plan vs. the templates.

2. **Add explicit checkpoint labels to REFINE template Steps 2-4** (FE-07). Currently only Step 1 has "CHECKPOINT: Write 2 sentences... Do not proceed until you have written them." Steps 2-4 ask questions but don't force the builder to respond before proceeding. Adding brief checkpoint instructions would strengthen the sequential processing guarantee.

3. **Design Weaver failure fallback for REFINE builder** (I-02). If the Weaver agent fails, the REFINE builder currently receives no evaluation data. Options: (a) fall back to embedding raw auditor reports, (b) skip REFINE and ship with advisory. This is a plan-level decision, not a template-level fix.

### Overall Assessment

The prompt templates are **HIGH QUALITY** work. They accurately implement the plan's design intent, maintain clean plumbing/freedom boundaries, enforce information isolation, and use creative framing language rather than compliance language. The cross-template consistency is strong -- outputs from one template map correctly to inputs of the next. The discrepancy documentation (question assignment, file-reading design choice) shows thoughtful awareness of where templates diverge from source documents and why.

The templates are ready for implementation. The three recommended improvements are polish, not prerequisites.

---

**END OF AUDIT**
