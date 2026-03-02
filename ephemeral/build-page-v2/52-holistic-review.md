# Holistic System Coherence Review (Wave 3)

**Author:** holistic (Task #52)
**Date:** 2026-02-28
**Artifacts read (7):**
- `~/.claude/skills/build-page/SKILL.md` (906 lines)
- `ephemeral/build-page-v2/gate-runner-v2.js` (983 lines)
- `ephemeral/build-page-v2/world-description.md` (17 lines)
- `ephemeral/build-page-v2/conventions-brief.md` (47 lines)
- `ephemeral/build-page-v2/prompt-templates.md` (590 lines)
- `~/.claude/skills/tension-composition/SKILL.md` (841 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (524 lines)

**References read (2):**
- `ephemeral/build-page-v2/58-wave2-retrospective.md` (Wave 2 retro)
- `ephemeral/build-page-v2/24-holistic-review.md` (original holistic review)

**Method:** Read every artifact in full. Traced the complete information flow from content input through final ship. Tested every handoff for data availability, role clarity, and creative integrity. Evaluated the system as something people (agents) will inhabit, not as a diagram.

---

## 1. SYSTEM COHERENCE: Does the Information Flow Work?

### The Full Trace

```
content.md
  |
  v
[STEP 0: Parse + mkdir + copy]
  |
  v
[STEP 1: Window 1 — DERIVE + BUILD]
  Input:  TC skill + content + prohibitions + tokens + mechanism catalog + components CSS + conventions (inline)
  Output: output.html + _tc-brief.md + _reflection.md
  |
  v
[STEP 2: Screenshots — 1440px + 768px, cold-look + scroll-through]
  |
  +-------------------------------+
  |                               |
  v                               v
[STEP 3: Gate Runner]      [STEP 4: 5 PA Auditors]      (PARALLEL)
  Input: browser DOM              Input: screenshots ONLY + 4 questions each
  Output: _gate-results.json      Output: 5x _pa/auditor-{A-E}.md
  |                               |
  +-------------------------------+
  |
  v
[STEP 5: Weaver]
  Input:  1440px screenshots + all 5 auditor reports + brief + reflection
  Output: _pa/weaver-synthesis.md (SHIP / REFINE / RETHINK)
  |
  v
[STEP 6: Routing — deterministic matrix]
  Inputs: creative_verdict + GATES_FAILED
  |
  +-----> SHIP  -------> [STEP 8: Final gates + ship report]
  +-----> REFINE -------> [STEP 7: Window 3]
  +-----> RETHINK ------> [STEP 6.5: Exclude metaphor, re-run from Step 1]
  +-----> PATCH_THEN_* -> [STEP 6.4: Deterministic CSS fixes, then route]
  |
  v
[STEP 7: Window 3 — REFINE]
  Input:  output.html (reads) + weaver synthesis (reads) + reflection (reads) + brief (reads) +
          content (reads) + mechanism catalog (reads) + components CSS (reads) +
          prohibitions (reads) + tokens (reads) + conventions (inline)
  Output: output.html (overwritten) + _reflection-v2.md
  |
  v
[STEP 8: Post-REFINE gates + regression check + ship]
```

### Every Handoff Verified

**Step 0 -> Step 1:** Content is copied to `{output_dir}/_content.md`. The SKILL.md reads it at Step 1.1 slot `[C]`. All 6 reference file paths are hardcoded and verified to exist (per Wave 2 retro lens 2). HANDOFF WORKS.

**Step 1 -> Step 2:** The builder produces `output.html`. Step 2 serves it via http-server and captures screenshots. Step 1.4-1.7 verify the artifact exists and is well-formed. HANDOFF WORKS.

**Step 2 -> Step 3:** Screenshots are saved to disk. The gate runner runs IN the browser via `browser_evaluate` -- it reads the live DOM, not screenshots. The gate runner needs the page navigated in the browser. Step 2.2 navigates; Step 3.2 evaluates in the same browser session. HANDOFF WORKS.

**Step 2 -> Step 4:** Screenshots are Glob'd at Step 4.1 and their paths are embedded in auditor prompts. Each auditor receives Read-able paths to cold-look + scroll-through PNGs. Auditors are spawned via Task with full prompts containing screenshot paths. HANDOFF WORKS.

**Step 4 -> Step 5:** The orchestrator reads all 5 auditor reports (Step 5.1) and embeds them inline in the Weaver prompt. The Weaver also receives screenshot paths (1440px only) and the conviction brief + reflection. HANDOFF WORKS.

**Step 5 -> Step 6:** The orchestrator reads the Weaver's file and string-searches for "RETHINK", "SHIP", or "REFINE". The routing matrix combines `creative_verdict` with `GATES_FAILED` (from Step 3). HANDOFF WORKS.

**Step 6 -> Step 7:** The REFINE builder reads files directly (unlike the Weaver who receives content inline). The orchestrator provides file paths in the prompt. The REFINE builder reads: output.html, weaver-synthesis.md, _reflection.md, _tc-brief.md, _content.md, and the 4 vocabulary files. All file paths are deterministic and created by prior steps. HANDOFF WORKS.

**Step 7 -> Step 8:** The orchestrator re-navigates to the (now-overwritten) output.html, re-captures screenshots, and re-runs the gate runner. Regression check compares essential_fail counts. HANDOFF WORKS.

### One Handoff Gap

**Weaver failure -> REFINE:** If the Weaver fails (Step 5.4, weaver_available=false), the routing fallback (keyword scan of raw auditor reports) determines the verdict. If the verdict is REFINE, the REFINE builder's prompt at Step 7.1 attempts to Read `weaver-synthesis.md` -- which does not exist. The SKILL.md does not specify what happens. The REFINE builder would receive a Read error for that file. This was identified in the Wave 2 retro (U-3) but remains UNFIXED.

**Severity: MEDIUM.** The Read error does not crash the process (the agent would note the missing file and proceed). But the REFINE builder loses its primary creative direction input. The SKILL.md's REFINE prompt template says "Read the Weaver's synthesis" as Step 2 -- if this fails, the builder skips to Step 3 (reflection) without external perception data. The fix is straightforward: if weaver_available=false, embed raw auditor reports in the REFINE prompt instead.

---

## 2. PLUMBING/FREEDOM IN PRACTICE

### What the Orchestrator Actually Does (Plumbing)

Reading the actual SKILL.md code, the orchestrator performs:
- File I/O: Read, Write, Glob, Bash (mkdir, cp, http-server, kill)
- Tool calls: browser_navigate, browser_resize, browser_take_screenshot, browser_evaluate
- Agent spawning: Task (with pre-constructed prompts)
- String operations: contains("RETHINK"), JSON.parse, startsWith("{")
- Numerical comparisons: line count, byte count, file count, essential_fail count
- State tracking: server_pid, server_port, has_brief, GATES_FAILED, creative_verdict, route

**Zero creative evaluation.** The orchestrator never asks "is this good?" It asks "does this file exist?", "does this string contain this keyword?", "did more gates fail after REFINE?" Every orchestrator decision is deterministic given its inputs. VERIFIED.

### What the Builders Actually Receive (Freedom)

**Window 1 builder receives:**
1. A receiving principle (5 lines of creative framing)
2. The TC skill (~841 lines of creative process)
3. Raw content (their material)
4. A STOP checkpoint (derive conviction before reading vocabulary)
5. Identity files (prohibitions + tokens -- "the world's physics")
6. Mechanism catalog + components CSS ("your tools")
7. A 13-line conventions brief (mechanical constraints)
8. A build instruction that says "work boundary-by-boundary" and "name CSS classes from your metaphor"

**Does it evaluate quality?** No. The SKILL.md's build instruction says "multiple channels should reinforce the same direction" and "vary transition types: some smooth continuations, some bridges, some full resets." These are creative guidance, not quality evaluation. They describe compositional techniques, not quality thresholds. The builder is told HOW to think about building, not WHAT SCORE to achieve.

**Does it constrain freedom?** Yes, in two places:
1. The conventions brief (13 mechanical constraints). These are physics, not opinions.
2. The file output requirements (3 files with named sections). These are structural, not creative.

**The PA auditor prompt:** Contains ONLY the receiving principle, Section 0 protocol, screenshot paths, 4 questions, language constraint, and output instruction. I verified: zero gate results, zero builder reflection, zero conviction brief, zero mechanism catalog, zero content markdown, zero numerical targets. The information isolation is absolute. VERIFIED.

**The Weaver prompt:** Contains receiving principle, screenshot paths, all 5 auditor reports inline, conviction brief, builder's reflection. Does NOT contain gate results, mechanism catalog, components CSS, content markdown, numerical targets. The Weaver is asked to write "creative direction FOR a creator, not corrections FOR a manager" and to produce a creative judgment verdict. This is freedom. VERIFIED.

**The REFINE prompt:** Contains the page, the Weaver synthesis, the reflection, the brief, the content, vocabulary files, conventions. The opening line: "Your job is not to fix problems. Your job is to make the page more of what it already is." The ONE THING prompt: "Not three things. Not 'address the Weaver's feedback.' One thing that, if you achieved it, would make you proud of your contribution." This is creative authority. VERIFIED.

### The Boundary Holds

The plumbing/freedom boundary in the built artifacts is clean. I checked every line of the SKILL.md for quality-evaluative language. The closest it comes is the conventions brief -- but those are dimensional constraints (width, spacing, color math), not quality judgments. The orchestrator's routing decision is based on string matching and numerical comparison, never on interpreting creative content.

**One subtle pressure point:** The deterministic patch table (Step 6.4) applies CSS fixes to failing gates. If GR-05 fails (R < G or G < B on a background), the orchestrator edits the builder's CSS. This is mechanical patching of a physics violation, not creative override. But the builder might have chosen that specific hex for a reason the gate cannot perceive. The fix: the builder should have absorbed the R >= G >= B constraint from the conventions brief and never produced a failing hex. If they did, it is a constraint violation, not a creative choice.

---

## 3. GENERATIVE FRAME TEST

### Does the System Embody Inhabitation -> Creation -> Reflection?

**The world-description (17 lines):** I read this as if I were a builder encountering it for the first time.

> "Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world -- angularity is confidence made visible."

This is a place. Not a specification. Not a list of CSS properties. A world with character, physics, personality. "Light is direct. Nothing floats. Nothing hovers above the page." This is atmospheric. "Think of a well-edited magazine spread, not a software interface." This gives me a mental image to build toward. The world-description INVITES. It does not RESTRICT.

**The prompt templates:** I read the Window 1 prompt as if I were the receiving builder.

The receiving principle opens with "Read the content as a reader first. What excites you about this material?" This is inhabitation. Then: "Derive your metaphor from the content's tension with the design system. The metaphor is yours." This is creative ownership. Then: "Write your conviction brief -- this is your creative commitment, not a document for someone else." This is self-directed creation. Then: "Read the vocabulary files AFTER your brief is written. They are tools, not instructions." This is tool-framing, not compliance-framing.

The build instruction: "Build from your conviction brief. Work boundary-by-boundary... The reader should feel they enter a different room at each boundary." This is spatial inhabitation language. "Name CSS classes from your metaphor, not generic (.geological-bedrock, not .section-dark)." This is metaphor-embodiment, not template-filling.

**Has implementation drifted it back toward extraction -> compression -> compliance?**

No. The generative frame survived implementation. The evidence:

1. The TC skill remains unchanged -- still Phase 0 through Phase 4, still discovery-oriented, still explicitly warns against "discovery bias" at line 6.
2. The PA auditors are genuinely context-free -- I verified zero build context in their prompts.
3. The Weaver writes "creative direction FOR a creator, not corrections FOR a manager."
4. The REFINE builder's opening line is "your job is not to fix problems."
5. The routing is mechanical, but the creative content flowing THROUGH the routing is untouched by it.

**The one drift risk:** The conventions brief. Thirteen lines of numerical constraints ("940-960px", ">= 15 RGB", "<= 120px") arrive in both Window 1 and Window 3. These are compliance specifications embedded in a creative process. The SKILL.md frames them as "mechanical constraints -- absorb these, do not checklist them." This framing is correct but soft. A builder who reads ">= 15 RGB difference" will check their RGB values while building. This is not catastrophic -- the constraints prevent real perceptual failures -- but it means the last thing the builder reads before "NOW BUILD" is a compliance checklist. The old holistic review (section 4A) flagged this same tension and concluded: "Whether this framing eliminates the anxiety depends on the builder's processing." I agree. The framing is the best available mitigation.

---

## 4. THE "WOULD I WANT TO WORK HERE" TEST

### As the Window 1 Builder

**Do I feel creative authority?** YES.

I receive: content I can engage with as a reader, a creative process (TC skill) that helps me think, vocabulary files framed as "tools not instructions," and a clear mandate: "The metaphor is yours."

The conventions brief is a known set of physics. I know the walls of the room. But inside those walls, I choose the metaphor, the zone architecture, the compositional arc, the spatial rhythm, the component adaptations, the CSS class names. Nobody tells me what the page should look like. Nobody shows me a reference design. I derive my own conviction and build from it.

**What would make me anxious?** The prompt is large. TC skill (841 lines) + content (variable) + prohibitions + tokens + mechanism catalog + components CSS + conventions = potentially 4,000-5,000+ lines of context before I start building. I might feel overwhelmed by the volume of vocabulary. The STOP checkpoint ("write your conviction brief before reading the vocabulary files below") helps -- it lets me form my creative direction before the vocabulary avalanche. But the avalanche still comes.

**What I would miss:** I do not receive the world-description.md. The world-description is a beautiful 17-line piece that would ground my creative process in a place, not just a set of files. The prohibitions.md and tokens.css provide the same information but in a specification format. The world-description provides it as atmosphere. Currently, only the receiving principle sets the atmospheric tone. The world-description would strengthen it.

### As a PA Auditor

**Do I feel free to be honest?** YES.

I know nothing. I see screenshots. I have 4 questions. I have a language constraint that forces me to think in perceptual terms ("spacious", "cramped", "alive", "flat") instead of technical terms. The cold look protocol gives me permission to react viscerally: "Gut reaction: [one sentence -- what did you FEEL?]" My reactions are locked. Nobody can revise them.

I have no gate results to bias me ("this page passed 14/15 gates so it must be good"). I have no conviction brief to prime me ("this page is supposed to feel geological"). I have no content markdown to anchor me ("the author is arguing X so the page should feel Y"). I experience the page as a stranger.

**What would make me anxious?** Nothing. This is the most clearly defined role in the system. I look, I react, I describe. The language constraint is freeing, not constraining -- it prevents me from retreating into CSS analysis and forces genuine perception.

### As the Weaver

**Do I feel empowered to make artistic judgments?** YES.

I receive my own screenshots (to form my own impression before reading reports), all 5 auditor reports, the conviction brief (what the builder intended), and the builder's reflection (what the builder felt). I am told: "Convergence confirms truth. Divergence surfaces subtlety. Both matter." I am told: "Write creative direction FOR a creator, not corrections FOR a manager." My verdict is "a creative judgment, not a calculation."

The AMPLIFY / RELEASE / DEEPEN / THE GAP framework gives me territories for creative direction without prescribing what I say about each territory. I decide what to amplify, what to release, what to deepen, and how to characterize the gap.

**What would concern me?** If 3 auditors say SHIP and 2 say RETHINK, I must navigate genuine disagreement. The system tells me to acknowledge convergence even when my own impression differs. But a 3-2 split with opposing verdicts is not convergence -- it is genuine perceptual disagreement. The instructions do not tell me how to handle this specific case. I would likely REFINE (conservative), but I might SHIP if the 3 SHIPs are strong and the 2 RETHINKs are about different aspects.

### As the REFINE Builder

**Do I have what I need?** MOSTLY YES.

I have the page itself (I read it and form my own impression). I have the Weaver's creative direction (what collective perception found). I have the previous builder's reflection (what they were reaching for). I have the conviction brief (what the page was trying to become). I have the content and all vocabulary files. I have the ONE THING prompt that focuses my creative energy.

**What I lack:**
1. The world-description. I receive prohibitions + tokens + conventions, but not the atmospheric 17-line piece that tells me about the world's character. The Wave 2 retro raised this question (U-9) and left it unresolved.
2. Advisory gate signals. If the gates detected that background deltas cluster at the perception floor or that multi-coherence is low, that would tell me WHERE the page has room for compositional richness. Without it, I rely entirely on auditor prose (which may or may not surface these specific dimensions). The original holistic review (section 3D) recommended including a one-line advisory summary.
3. Fallback if the Weaver failed. If weaver-synthesis.md does not exist, my Step 2 fails and I proceed without creative direction from the evaluation. I would be building from my own impression + the reflection + the brief alone.

---

## 5. TENSION INVENTORY

### T-1: World-Description's Role — UNRESOLVED

**The pull:** The world-description.md is beautifully written and captures the design system's soul in 17 lines. It would benefit both the Window 1 builder (atmospheric grounding) and the REFINE builder (world context).

**The counter-pull:** The SKILL.md does not reference world-description.md anywhere. The Window 1 builder receives the same information through prohibitions.md + tokens.css (as specifications). The REFINE builder receives it through the conviction brief (as creative interpretation). Adding another file increases prompt size.

**Assessment: PRODUCTIVE but DISCONNECTED.** The world-description exists in `ephemeral/build-page-v2/` but is not wired into the SKILL.md's execution flow. It was built (Task #45) but never integrated. Either it should be integrated into the Window 1 prompt (between the receiving principle and the TC skill, as atmospheric grounding), or it should be acknowledged as a reference document that informs the conventions-brief and prompt language but is not directly sent to builders.

### T-2: Inline Embedding (SKILL.md) vs File Reading (prompt-templates.md) for REFINE — PRODUCTIVE

**The pull:** SKILL.md embeds all content inline in the REFINE prompt (Steps 7.1 reads files, constructs prompt with content). This is more reliable for Task-spawned agents.

**The counter-pull:** prompt-templates.md tells the REFINE builder to Read files itself ("Read this file: {OUTPUT_DIR}/output.html"). This gives the builder agency over reading order.

**Assessment: PRODUCTIVE TENSION, correctly resolved.** The SKILL.md is the runtime authority. The prompt-templates.md is the reference for understanding prompt design. The Wave 2 retro documented this (Attack 5) and resolved it correctly: SKILL.md approach (inline embedding) is more reliable. The prompt-templates.md approach (file reading) gives the REFINE builder more natural reading flow. Both have merits. The SKILL.md wins because reliability trumps elegance for Task-spawned agents.

**However:** A careful reading reveals that the SKILL.md at Step 7.1 reads the files but then the REFINE PROMPT TEMPLATE at lines 700-832 says things like "STEP 1: THE PAGE / {ARTIFACT_HTML}" and "STEP 2: CREATIVE DIRECTION / {WEAVER}". This looks like inline embedding. But the prompt-templates.md Template 4 at lines 410-411 says "Read this file: {OUTPUT_DIR}/output.html". The SKILL.md is the authority. This divergence is documented but could confuse a fresh orchestrator that reads both files. Since the SKILL.md is the runtime file and prompt-templates.md is just a reference, this is acceptable.

### T-3: 20 Embedded Questions vs PA Skill as Source of Truth — RESOLVED BUT FRAGILE

**The pull:** The SKILL.md embeds all 20 questions inline (lines 340-388). This makes the skill self-contained.

**The counter-pull:** The PA skill (`~/.claude/skills/perceptual-auditing/SKILL.md`) is the canonical source. If questions are updated in the PA skill, the SKILL.md's embedded copy becomes stale.

**Assessment: RESOLVED.** The SKILL.md header says "do NOT parse PA skill at runtime" (line 338). The questions are intentionally frozen in the SKILL.md. The prompt-templates.md acknowledges the PA skill as canonical source for question ASSIGNMENTS (auditor groupings) but the SKILL.md embeds the actual question text. This is a deliberate design choice: runtime stability over dynamic freshness.

**The fragility:** Any future PA skill update that changes question text or numbering creates a drift between the PA skill and the SKILL.md. The Wave 2 retro's Discrepancy Note (prompt-templates.md lines 587-589) documents the B/D assignment discrepancy that was caught and fixed. Future discrepancies of this kind are likely if the PA skill evolves.

### T-4: Gate Runner Boundary — PRODUCTIVE

**The pull:** The gate-runner-v2.js uses ONLY browser context APIs (document, getComputedStyle, window). This makes it compatible with browser_evaluate.

**The counter-pull:** BV gates (text-only) and GR-62 (screenshot quality) must run OUTSIDE the browser, by the orchestrator. The gate runner file contains both the browser function (lines 33-878) and the utility functions (lines 893-983). The orchestrator must extract the right piece.

**Assessment: PRODUCTIVE.** The separation is correct: browser gates run in-browser, text gates run in the orchestrator, file gates run in Node. The gate-runner-v2.js file serves as a single reference for ALL gates, with clear section boundaries. The extraction step (SKILL.md lines 266-274) is the riskiest moment but is workable.

### T-5: Conventions Brief Duplication — DESTRUCTIVE (MINOR)

**The pull:** The SKILL.md embeds a 13-line conventions brief inline in both Window 1 and Window 3 prompts.

**The counter-pull:** The conventions-brief.md is a 47-line expanded version with additional detail.

**Assessment: MILDLY DESTRUCTIVE.** Two representations of the same constraints create maintenance burden. The SKILL.md's inline version is a subset of conventions-brief.md. If a threshold changes (e.g., stacked gap from 120px to 140px), it must be updated in THREE places: SKILL.md Window 1 (line 131), SKILL.md Window 3 (line 793), and conventions-brief.md (line 35). The gate-runner-v2.js hardcodes the same threshold (making it FOUR places). This quadruple-maintenance is a real risk for value drift.

**Mitigation:** The conventions-brief.md could be the single source of truth, Read at runtime and embedded. But the SKILL.md currently inlines the conventions to be self-contained. A future refactor should consider either: (a) Reading conventions-brief.md at runtime (adds one Read call), or (b) accepting the maintenance burden and documenting all four locations.

### T-6: Model Mandate (All Opus) vs Cost — NOT YET TESTED

**The pull:** The SKILL.md specifies "All agents: Opus" in NON-NEGOTIABLES (line 904). Every Task call uses model=Opus.

**The counter-pull:** Auditors and the Weaver might produce comparable quality with Sonnet at significant cost savings. The prompt-templates.md notes (line 277): "Future optimization: test Sonnet if quality delta < 10%."

**Assessment: PRODUCTIVE TENSION.** The Opus mandate is conservative and correct for a system that has not been live-tested. After empirical evidence, selective Sonnet usage (for auditors) could reduce cost without quality loss. This is a future optimization, not a current problem.

### T-7: Single REFINE Cycle Default vs Potential for More Improvement — PRODUCTIVE

**The pull:** The SKILL.md limits REFINE to 1 cycle by default (line 905), with user escalation to 2 (Step 9).

**The counter-pull:** The Gas Town evidence (+1.5 PA-05 in one REFINE cycle) suggests one cycle is sufficient. But different content might need more.

**Assessment: PRODUCTIVE.** The user-escalation pattern is correct. Automatic multi-cycle would optimize for pipeline metrics. One cycle + user judgment is the right balance. The `_user-direction.md` mechanism (Step 9) allows the user to provide specific feedback for the second cycle.

---

## 6. WHAT'S MISSING FROM THE SYSTEM

### M-1: World-Description Integration

The world-description.md exists but is not wired into the SKILL.md. It was built as part of Wave 2 (Task #45) and buddy-audited (Task #46). But the SKILL.md's Step 1.1 reads 6 files -- TC skill, content, prohibitions, tokens, mechanism catalog, components CSS -- and the world-description is not among them. The SKILL.md's prompt template (lines 67-161) does not reference it.

The world-description captures the design system's soul in atmospheric language. The prohibitions.md + tokens.css provide the same information as specifications. The world-description is the "why" behind the "what." A Window 1 builder who reads "Light is direct. Nothing floats. Surfaces sit flat against each other, honest about being surfaces" has a richer creative foundation than one who reads "border-radius: 0" and "box-shadow: none."

**Recommendation:** Add world-description.md as a 7th Read call in Step 1.1. Insert it in the prompt between the receiving principle and the TC skill, as atmospheric grounding. Label it: "THE WORLD YOU ARE BUILDING IN." This adds 17 lines to the prompt -- negligible context cost for significant atmospheric benefit.

### M-2: Weaver Failure Fallback for REFINE

Identified in Wave 2 retro (U-3) and confirmed here. If the Weaver fails, the REFINE builder loses its primary creative direction input. The fix: if weaver_available=false AND route=REFINE, embed the raw auditor reports in the REFINE prompt as a substitute. The REFINE builder processes raw perception instead of synthesized direction.

### M-3: Post-REFINE Gate Failure Recovery

Identified in Wave 2 retro (U-4). If Playwright disconnects between REFINE and post-REFINE gates (Step 8.2), the process halts. The failure protocol table (line 884-891) has entries for Steps 0-7 but not Step 8. Fix: add "Post-REFINE gates fail -> WARN user, ship without regression verification, log the advisory."

### M-4: Stale Server Cleanup

Identified in Wave 2 retro (U-1). A crashed previous run leaves port 8888 occupied. Without cleanup, the server start tries 8889/8890. Not blocking but suboptimal. Fix: add `Bash("lsof -ti:8888 | xargs kill 2>/dev/null")` before Step 2.1. Simple, safe, one line.

### M-5: Advisory Gate Summary for REFINE Builder

Identified in original holistic review (section 3D). The REFINE builder receives zero gate information. This is correct for essential gates (which are either mechanically patched or flagged as structural). But advisory gates (GR-20 structural echo, GR-51 bg delta distribution, GR-55 multi-coherence) carry signals about WHERE the page has room for compositional richness. A one-line advisory summary ("Advisory gates noted: bg deltas cluster at perception floor, multi-coherence below aspirational level") would help the REFINE builder without creating compliance pressure.

**Assessment:** This is a "nice to have," not a "must have." The Weaver's synthesis should capture these dimensions through auditor convergence patterns. If 3 auditors independently say "everything looks the same," that is the experiential version of "bg deltas cluster at perception floor." The advisory summary would be redundant with good Weaver synthesis but valuable when auditors miss specific dimensions.

### M-6: No Missing File That SHOULD Exist

The system has the 7 files it needs. The world-description (M-1) exists but is not connected. The conventions-brief exists and is connected (through inline embedding). The prompt-templates serve as reference documentation. The gate runner is the verification engine. The TC and PA skills are the creative and evaluative processes. The SKILL.md is the orchestrator. This is a complete system.

---

## 7. VERDICT: MOSTLY COHERES

The 7 artifacts form a coherent creative system. The information flow is complete and every handoff works. The plumbing/freedom boundary is clean -- verified by reading every line of the SKILL.md for quality-evaluative language and finding none. The generative frame (inhabitation -> creation -> evaluation -> deeper creation) survives implementation -- the prompts invite and inspire rather than constrain and restrict.

### Evidence for COHERES

1. **Information flow is complete.** Every handoff traced and verified. Content enters, transforms appropriately at each stage, and exits as a designed page.

2. **Plumbing/freedom boundary holds.** The orchestrator performs zero creative evaluation. Builders have genuine creative authority. Auditors are genuinely context-free. The Weaver produces creative direction, not fix lists.

3. **The generative frame is real.** The world-description invites. The receiving principles inspire. The ONE THING prompt focuses creative energy. The REFINE framing ("make the page more of what it already is") prevents compliance collapse.

4. **Cross-file consistency is strong.** Container 940-960px appears in all 5 relevant files (SKILL.md, gate-runner-v2.js, conventions-brief.md, prompt-templates.md, world-description.md). R >= G >= B appears in all 5. Font trinity appears in all 5. Border hierarchy appears in all 5. The Wave 2 retro's consistency table (lens 6) verified all properties align.

5. **The "would I want to work here" test passes for all 4 roles.** The Window 1 builder feels creative authority. The auditor feels free to be honest. The Weaver feels empowered to judge. The REFINE builder has what they need (mostly).

### Evidence for Not Yet Fully COHERES

1. **World-description is disconnected.** A beautifully written file that captures the system's soul is not wired into the execution flow. This is an integration gap, not a design gap.

2. **Weaver failure fallback is missing.** A failure in the Weaver leaves the REFINE builder without creative direction. This is a reliability gap.

3. **Conventions quadruple-maintenance.** The same thresholds appear in 4 places (SKILL.md x2, conventions-brief.md, gate-runner-v2.js). A value change must be coordinated across all 4. This is a maintenance risk.

4. **Gate runner extraction is underspecified.** The SKILL.md says "extract the function body" from gate-runner-v2.js. A fresh orchestrator must identify the correct line range (33-878) and exclude the utility functions (893-983). The extraction instruction could be more precise.

5. **Post-REFINE failure recovery is absent.** No failure protocol entry for Step 8 failures.

### What Would Upgrade This to COHERES

1. Wire world-description.md into Step 1.1 (add one Read call, insert 17 lines in prompt).
2. Add Weaver failure fallback: if weaver_available=false AND route=REFINE, embed raw auditor reports in REFINE prompt.
3. Add stale server cleanup before Step 2.1.
4. Add failure protocol entry for Step 8.
5. Clarify gate runner extraction: specify "pass lines 33-878 of gate-runner-v2.js" or "pass everything between `const gateRunnerV2 = async () => {` and the matching `};`".

None of these are architectural issues. They are integration polish. The architecture is sound. The creative process is genuine. The system mostly coheres.

---

**END OF HOLISTIC REVIEW**
