# Meta-Cognitive Architecture Evaluation: /compose Skill

**Evaluator:** Fresh-eyes Opus agent (zero prior context with this pipeline)
**Date:** 2026-03-01
**Files evaluated:**
- `~/.claude/skills/compose/SKILL.md` (199 lines)
- `~/.claude/skills/tension-composition/SKILL.md` (~830 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (~525 lines)

---

## 1. Self-Containment

**Verdict: MOSTLY SELF-CONTAINED, with 4 gaps.**

The compose skill is remarkably clean for 199 lines. A fresh Claude Code instance could follow the step-by-step structure without prior pipeline knowledge. Phase numbering is clear (0-4), agent roles are explicit, and the output manifest gives a concrete picture of what "done" looks like.

**Gap 1: File path format is ambiguous.** The skill uses relative paths like `design-system/compositional-core/identity/identity.md`. A fresh instance in a different working directory would fail. The skill assumes the working directory is the project root but never states this. All 7 referenced design system files exist and are findable, but only if you start from the right place.

**Recommendation:** Add to Prerequisites: "Working directory must be the project root (the directory containing `design-system/`)."

**Gap 2: "Opus agent" is under-specified.** The skill says "Spawn: One Opus agent" but never explains HOW. A fresh Claude Code instance needs to know: use the Task tool? Which subagent type? What model parameter? The skill assumes knowledge of Claude Code's agent spawning mechanics.

**Recommendation:** Add a brief "Agent Spawning" section to Prerequisites explaining the specific tool/method used to spawn sub-agents. If this is Task tool, say so. If it's some other mechanism, document it.

**Gap 3: The TC skill reference uses a tilde path.** Line 44: `~/.claude/skills/tension-composition/SKILL.md`. This is fine for the orchestrator reading the skill, but the instruction says "Agent receives... The TC skill." Does the orchestrator paste the TC skill content into the agent prompt? Or does it tell the agent to read the file? This matters enormously for context budget. The TC skill is ~830 lines -- pasting it into a prompt consumes significant context.

**Recommendation:** Be explicit: "Read the TC skill file and include its full contents in the agent's prompt" or "Tell the agent to read this file path."

**Gap 4: `[output-dir]` placeholder.** Used throughout but only defined once in Prerequisites as `ephemeral/builds/<content-name>-<date>/`. A fresh instance would need to construct this. The `<content-name>` extraction logic is unstated -- is it the filename stem? The first heading? Something else?

**Recommendation:** Specify: "Content name is derived from the markdown filename without extension. Example: `my-article.md` -> `ephemeral/builds/my-article-2026-03-01/`."

---

## 2. Agent Isolation

**Verdict: WELL-DESIGNED, with 2 leakage risks.**

The isolation model is the skill's strongest architectural feature. Three explicit isolation boundaries:

| Agent | RECEIVES | DOES NOT RECEIVE |
|-------|----------|------------------|
| TC | Content + identity files + TC skill | Components, mechanisms, gate criteria, prior builds |
| Builder | Content + brief + tokens + mechanisms + grammar + components | Gate thresholds, PA questions, audit criteria, prior builds |
| PA | Screenshots + PA skill | Brief, metaphor, CSS, builder reflection, pipeline context |

This is clean and well-reasoned. The TC library prohibition (no mechanisms until Phase 4) is enforced by the compose skill simply not including those files in the agent prompt. PA fresh-eyes principle is enforced by giving auditors only screenshots.

**Leakage Risk 1: Builder receives mechanisms.md AND grammar.md AND components.css AND components.md.** That is 4 vocabulary files. The old pipeline research identified that builders who receive too many reference files tend to APPLY patterns rather than COMPOSE from conviction. The compose skill gives the builder MORE reference material than it gives the TC agent. This is deliberate (builder needs CSS vocabulary), but the risk is that the builder reads mechanisms.md like a menu and deploys mechanisms mechanically rather than metaphor-first.

The builder instructions partially address this ("The conviction brief tells you WHAT to create... The vocabulary files tell you HOW"), but there is no explicit instruction like "Read the conviction brief FIRST and form your compositional plan BEFORE opening the vocabulary files." Order of reading matters for LLM context priming.

**Recommendation:** Add to builder instructions: "Read and internalize the conviction brief BEFORE reading any vocabulary files. The brief shapes your creative intent; the vocabulary files provide implementation tools. If you read the vocabulary files first, you will compose from available tools rather than from conviction."

**Leakage Risk 2: The orchestrator itself is context-contaminated.** The orchestrator reads ALL files (Phase 0), sees the TC brief, sees the builder output, and then captures screenshots for PA. When the orchestrator writes the PA synthesis (Step 3C), it has full pipeline context. The synthesis should be purely about aggregating auditor findings, but the orchestrator KNOWS the metaphor, the brief, and the builder's intent. This could bias synthesis toward "the auditors confirmed the metaphor works" rather than "the auditors perceived X."

**Recommendation:** Either (a) make the synthesis purely mechanical (convergent = 2+ auditors said same thing, divergent = only 1), or (b) spawn a separate synthesis agent that receives only auditor reports. The current instruction at Step 3C is adequate ("Read all auditor reports. Synthesize into convergent/divergent/verdict") but could be strengthened with: "Do NOT apply your knowledge of the metaphor or brief when interpreting auditor findings."

---

## 3. Handoff Completeness (Conviction Brief)

**Verdict: SUFFICIENT but with a structural gap.**

The conviction brief format (6 sections, ~80-120 lines) is well-designed. The sections cover:

1. **World-Description** (~12 lines) -- The metaphor as natural law. Excellent.
2. **Calibration** (~10 lines) -- Specific hex/spacing/type ranges. Critical for perceptibility.
3. **Opposition Map** (~15 lines) -- Creative invitations from tension. Rich.
4. **Compositional Arc** (~20 lines) -- The experiential journey. This is the builder's primary navigation.
5. **Creative Conditions** (~10 lines) -- Experimental invitations. Good.
6. **Content Map** (~15 lines) -- Structural outline with register/emotion/wordcount.

**What could be lost:**

**The transition table is not in the brief.** The TC skill's Phase 4.3 produces a transition table (Background | Typography | Spacing | Structural | Direction per boundary). This is the most CSS-actionable output of the TC pipeline. But the conviction brief format in Phase 4.5 does not include a transition table -- it describes transitions as FEELINGS ("the shift should feel like stepping from a porch into a hallway"). The builder is told to "Build boundary-by-boundary" and "Write a transition table first" (compose skill line 84-85), but the builder must derive the table from the prose brief rather than receiving it pre-computed.

This is a DESIGN CHOICE, not a defect. The brief carries conviction; the builder translates conviction into CSS. Including a pre-computed transition table would make the builder an implementer rather than a composer. But the risk is that a weaker builder (or one running low on context) might fail to translate prose feelings into CSS channel assignments.

**The zone architecture (Step 3.5Z) output is ambiguous.** The TC skill says "derive the zone architecture from the committed metaphor" with zone count, naming, direction, density, and content mapping. But the conviction brief format does not have a dedicated "zones" section. Where does zone architecture go? It is implied by Section 4 (Compositional Arc) and Section 6 (Content Map), but the builder would need to reconstruct the zone boundaries from prose rather than receiving an explicit zone table.

**The Exploration Recommendation section is orphaned.** The TC skill (lines 756-777) describes recommending 3-4 case study explorations for the builder to read. But the compose skill's Phase 2 (BUILD) does not include any case study files in the builder's input. This is either intentional simplification or an oversight. If intentional, the Exploration Recommendation in the TC skill becomes dead code when invoked via /compose.

**Recommendation:** Decide whether the builder should receive case study explorations. If yes, add them to Phase 2 inputs. If no (keeping the builder leaner), add a note to the TC skill that Exploration Recommendations are standalone-mode only.

---

## 4. Builder Prompt

**Verdict: LEAN but likely sufficient, with one critical omission.**

The builder instructions embedded in Phase 2 are 11 lines of prose. They convey:
- Build boundary-by-boundary (good -- prevents channel-by-channel monotony)
- Use concept-based CSS naming (good -- strongest single indicator of composition quality)
- Richness = semantic density x restraint x spatial confidence (good -- the governing equation)
- 80% creative authority (good -- establishes builder autonomy)
- Output format: self-contained HTML with inline CSS (clear)
- Google Fonts: Instrument Serif, Inter, JetBrains Mono (specific)

**The vocabulary load is substantial but appropriate.** The builder receives:
- `tokens.css` (124 lines) -- CSS custom properties
- `mechanisms.md` (unknown length) -- 20 mechanisms
- `grammar.md` (unknown length) -- compositional rules
- `components.css` (779 lines) -- CSS implementations
- `components.md` (unknown length) -- component inventory

This is MORE than the old pipeline's builder received (which was reportedly a "75-line builder visibility cap" -- see MEMORY.md). The compose skill inverts the old pipeline's routing failure: instead of sending CSS-rich files to the planner and giving the builder tokens-only, it sends CSS-rich files to the builder. This is correct.

**Critical omission: No soul principles in the builder prompt.** The compose skill's Phase 0 says the orchestrator verifies soul principles (border-radius: 0, box-shadow: none, no gradients). But the builder instructions do not include these prohibitions. The builder receives `tokens.css` (which presumably encodes these), but there is no explicit statement in the builder prompt like "border-radius must be 0 on all elements."

The conviction brief's Section 1 (World-Description) is supposed to carry soul as "physics, not prohibition" ("In this world, edges are sharp"). But this depends entirely on the TC agent writing a world-description that encodes every soul constraint. If the TC agent writes "sharp edges, warm surfaces, flat light" but forgets to mention "no gradients" or "no semi-transparent backgrounds," the builder has no backstop.

**Recommendation:** Add to the builder instructions: "Soul constraints (non-negotiable): border-radius: 0 on all elements. box-shadow: none on all elements. No CSS gradients. No semi-transparent backgrounds (rgba with alpha < 1). No cool grays. These are physics of this world, not style choices."

**Secondary concern: No responsive instruction.** The builder instructions say nothing about responsive design. The PA skill audits at multiple viewports (including 768px). The compose skill captures screenshots at 768px. But the builder is never told to write responsive CSS. There is no `@media` query guidance, no mobile-first vs desktop-first instruction, no minimum touch target size. A builder could produce a page that looks perfect at 1440px and breaks at 768px.

**Recommendation:** Add: "Write responsive CSS. The page will be evaluated at 1440px and 768px viewports. At minimum, ensure readable text size, no horizontal overflow, and meaningful layout adaptation at 768px."

---

## 5. PA Deployment

**Verdict: 3 is the MINIMUM viable signal. The skill correctly labels it as such.**

The skill says "3 Opus agents as independent auditors (minimum viable for signal -- scale to 5-9 if budget allows)." This is honest framing.

**Signal quality analysis:**

The PA skill defines 5 auditors with specific question assignments:
- Auditor A: E-01, E-05, E-11, E-17
- Auditor B: E-02, E-08, E-14, E-18
- Auditor C: E-03, E-07, E-12, E-19
- Auditor D: E-04, E-06, E-13, E-20
- Auditor E: E-09, E-10, E-15, E-16

With 3 auditors, you cover 12 of 20 questions (60%). The compose skill does not specify WHICH 3 auditors from the PA skill's assignment table. This means the orchestrator must decide which questions to prioritize, or assign questions ad hoc.

**The convergence problem:** With 3 auditors, "convergent findings (2+ auditors agree)" means 2 out of 3 (67%). With 9 auditors, convergence means 5+ out of 9 (56%). The 3-auditor setup has HIGHER convergence threshold percentage but LOWER absolute diversity. In the old pipeline, the whitespace void was caught by 9/9 auditors. With 3 auditors, you would still catch it (3/3). But a subtler issue caught by 4/9 auditors might be missed entirely with 3 auditors.

**Practical recommendation:** 3 is adequate for the experiment. For production, 5 is the sweet spot (covers all 20 questions with the PA skill's defined assignment table). 9 is for high-stakes pages where you want maximum divergence.

**The compose skill should specify question assignment.** With 3 auditors, which questions? I recommend A, B, D from the PA table (covers first encounter, scroll experience, spatial confidence, density, rhythm, one-change). This gives the strongest signal for the most common failure modes.

**Recommendation:** Add to Phase 3B: "With 3 auditors, assign questions as follows: Auditor 1 gets E-01, E-05, E-11, E-17 (first encounter + density + tension + voice). Auditor 2 gets E-02, E-08, E-14, E-18 (scroll + thirds + rhythm + best moment). Auditor 3 gets E-04, E-06, E-13, E-20 (space + confidence + complexity + one change)."

---

## 6. Fix Cycle Protocol

**Verdict: CLEAR ENOUGH, but missing the mechanical feedback channel.**

The Type A/B/C classification is well-defined:
- TYPE A: CSS value wrong. Quick fix.
- TYPE B: Layout doesn't match brief. Re-read Sections 1 and 4.
- TYPE C: Metaphor fundamentally broken. Full TC re-invocation.

Escalation logic is clear: A first, 3+ A on same section -> B, B reveals metaphor problem -> C. Maximum 3 fix cycles prevents infinite loops.

**The generative language requirement is correct but risky.**

The skill says: "Send fix feedback using GENERATIVE language: 'The opening zone wants more warmth' not 'Fix PA-03 score.'" This is philosophically sound -- the builder should compose, not debug. But it creates a TRANSLATION BURDEN on the orchestrator.

The PA auditors produce experiential prose ("the top area feels cramped and anxious"). The orchestrator must translate this into generative builder direction ("the opening zone wants more spaciousness -- let it breathe"). This translation is creative work, and the orchestrator is supposed to handle "plumbing, not creativity" (Key Principle 1).

**The missing mechanical channel:** The old pipeline had a gate runner that produced binary pass/fail results on programmatic checks (background RGB delta, spacing values, container width, etc.). The compose skill has NO gate runner. The PA skill references the gate runner three times as a companion system:

- "The gate runner handles numerical compliance separately" (line 407)
- "Both are needed. The gate runner catches mechanical failures" (line 422)
- "The gate runner handles compliance separately, in parallel, with binary precision" (line 522)

But the compose skill never invokes a gate runner. This means TYPE A mechanical fixes (CSS value wrong) can only be detected through PA auditor perception, not programmatic verification. A background delta of 8 RGB (below the 15 RGB perceptibility threshold) would need to be caught by a human-language auditor saying "the zones all look the same color" rather than a programmatic check saying "GR-18 FAIL: delta 8 < 15."

This is the single most significant architectural gap in the compose skill. The PA skill was DESIGNED to work alongside a gate runner. Using PA without a gate runner means mechanical failures must be caught perceptually, which is both less reliable and more expensive (Opus agent time for what could be a programmatic check).

**Recommendation:** Either (a) add a lightweight programmatic validation step between BUILD and EVALUATE that checks: container width 860-1100px, background deltas >= 15 RGB between adjacent zones, no border-radius > 0, no box-shadow values, no gradients in CSS, minimum 3 distinct spacing values, Google Fonts loaded; or (b) explicitly state that the compose skill operates WITHOUT programmatic gates and relies entirely on perceptual audit, accepting the trade-off.

---

## 7. Missing Pieces (Old Pipeline vs. /compose)

| Old Pipeline Feature | Present in /compose? | Critical? |
|---------------------|---------------------|-----------|
| Gate runner (47 programmatic gates) | NO | YES -- see section 6 |
| Conviction manager (tracking dimensions across passes) | NO | No -- single-pass sufficient |
| Cross-subset verifier | NO | No -- single content |
| Phase A/B multi-pass rotation | NO | No -- simpler architecture sufficient |
| Explicit token budget management | NO | MAYBE -- see below |
| Diff-based validation (comparing pass N to pass N-1) | NO | No -- fix cycles handle this |
| HTTP server for screenshot serving | NOT EXPLICIT | YES -- see section 8 |
| DPR-safe screenshot capture | NOT EXPLICIT | YES -- see section 8 |
| Builder reflection protocol (6 dimensions) | YES (line 97) | N/A |
| Weaver synthesis agent | PARTIAL (orchestrator does it) | Acceptable trade-off |
| Exploration loading recommendations | NO | Minor -- could improve builder quality |
| Conventions brief (separate mechanical constraints doc) | NO | MODERATE -- soul constraints need backup |
| Workspace setup (directory creation, file copying) | MINIMAL | Adequate for experiment |

**Token budget is the silent risk.** The old pipeline had TOKEN_TRIM constants and explicit budget management. The compose skill sends the builder:
- Content markdown (unknown length -- could be 2,000+ lines)
- Conviction brief (~80-120 lines)
- tokens.css (124 lines)
- mechanisms.md (~unknown, likely 200-400 lines)
- grammar.md (~unknown, likely 200-400 lines)
- components.css (779 lines)
- components.md (~unknown, likely 100-200 lines)

That is potentially 3,500-4,000+ lines of input before the builder writes any CSS. If the content markdown is long, the builder may hit context limits. The old pipeline managed this explicitly. The compose skill does not address it at all.

**Recommendation:** Add a note: "If content markdown exceeds 1,500 lines, consider summarizing reference sections (code blocks, data tables) before passing to the builder. The builder's total input should stay under 4,000 lines to preserve output quality."

---

## 8. Screenshot Protocol

**Verdict: CRITICALLY UNDER-SPECIFIED.**

The compose skill says:

> "Serve the HTML file and take screenshots at these viewports: 1440px width (desktop), 768px width (tablet). For each viewport, capture: Above-the-fold (no scroll), Full-page scrolling screenshots at ~900px intervals."

This is WHAT to do but not HOW. A fresh Claude Code instance faces these questions:

**Q1: How do I serve the HTML file?** The PA skill mentions "Playwright blocks `file://` protocol" (line 277). The compose skill does not mention this. A fresh instance might try to open `file:///path/to/page.html` in Playwright and get blank screenshots. The PA skill says "Serve the HTML file via HTTP" but does not say how. Options include `python3 -m http.server`, `npx serve`, or a custom Node script. None are specified.

**Q2: How do I take screenshots?** The compose skill never mentions Playwright, the Playwright MCP, or any specific tool. A fresh instance would need to know that Playwright MCP tools are available (browser_navigate, browser_take_screenshot, browser_resize). The PA skill's "Screenshot Pre-Capture Protocol" (lines 276-286) has detailed instructions including `document.fonts.ready`, animation disabling, DPR-safe capture, and blank-screenshot validation. NONE of this appears in the compose skill.

**Q3: What about DPR issues?** The MEMORY.md mentions "DPR 0.667 workaround caused 8 dark screenshots" as a known issue. The PA skill says "Use DPR-safe capture settings to prevent black screenshots on Retina displays." The compose skill says nothing about DPR.

**Q4: What viewport HEIGHT?** Screenshots at "~900px intervals" for scrolling, but the viewport height for above-the-fold is unstated. Playwright defaults vary. The PA skill specifies "80% viewport-height steps" which is more precise.

**This is the most likely point of failure for a fresh instance.** The screenshot protocol requires specific technical knowledge (HTTP serving, Playwright MCP, DPR handling, animation disabling, font loading). The compose skill assumes this knowledge exists.

**Recommendation:** Add a "Screenshot Protocol" section to Prerequisites or Phase 3A:

```
### Screenshot Protocol

1. Start a local HTTP server:
   python3 -m http.server 8080 --directory [output-dir]

2. Use Playwright MCP tools to capture screenshots:
   a. browser_resize to set viewport width (1440 or 768) and height (900)
   b. browser_navigate to http://localhost:8080/page.html
   c. Wait for fonts: browser_evaluate with function "() => document.fonts.ready"
   d. Disable animations: browser_evaluate with function
      "() => { const s = document.createElement('style');
       s.textContent = '* { animation: none !important; transition: none !important; opacity: 1 !important; }';
       document.head.appendChild(s); }"
   e. browser_take_screenshot for cold look (full page)
   f. Scroll and capture at 900px intervals for scroll-through

3. Validate: Check each screenshot is not blank/black before proceeding.
4. Save to [output-dir]/_screenshots/ with naming: desktop-cold.png, desktop-scroll-01.png, etc.
```

---

## 9. Error Handling

**Verdict: NO ERROR HANDLING EXISTS.**

The compose skill is a happy-path document. It describes what happens when everything works. It does not address:

**9A: TC agent produces a bad brief.** Phase 1 says "You verify: Brief has all 6 sections, Metaphor is committed, Brief is conviction-driven." But what if the TC agent fails the verification? The skill does not say what to do. Options: re-spawn TC agent, ask TC agent to revise, abort and report to user. All unstated.

**Recommendation:** Add: "If the brief fails verification, re-spawn the TC agent with specific feedback on what is missing. Maximum 2 TC attempts. If both fail, report to user with the failed brief and ask for direction."

**9B: Builder produces invalid HTML.** The compose skill has no HTML validation step. The builder could produce:
- Malformed HTML that crashes the browser
- HTML without the required `<style>` block
- HTML that references external files (not self-contained)
- HTML with zero CSS (technically valid, visually empty)

**Recommendation:** Add a minimal validation step after Phase 2: "Verify: (a) HTML file exists and is > 1KB, (b) contains a `<style>` block, (c) contains no external stylesheet links, (d) contains Google Fonts import."

**9C: PA agents disagree on verdict.** If 2 auditors say SHIP and 1 says REBUILD, what happens? The synthesis step (3C) says "Overall verdict: SHIP / REFINE / REBUILD" but does not specify how to resolve disagreement. Is it majority vote? Weighted by severity? Orchestrator judgment?

**Recommendation:** Add: "Verdict determination: If all auditors agree, use that verdict. If split, use the MOST SEVERE verdict from any auditor who provided a CONVERGENT finding. A single REBUILD vote from an auditor whose key finding was shared by at least one other auditor = REBUILD."

**9D: Agent spawning fails.** Claude Code agent spawning is not 100% reliable. What if an agent fails to produce output? Times out? Returns an empty file?

**Recommendation:** Add: "If any agent fails to produce output, re-spawn once. If the second attempt also fails, report to user."

**9E: Screenshots fail.** HTTP server might not start. Playwright might not be installed. The page might be blank. DPR issues might produce black screenshots.

**Recommendation:** Covered by the screenshot protocol addition in section 8.

---

## 10. Overall Verdict

**READY FOR EXPERIMENT with 5 recommended fixes.**

The compose skill is architecturally sound. It represents a dramatic simplification from the old 40+ file TypeScript orchestrator. The three-phase structure (DERIVE -> BUILD -> EVALUATE) with fix cycles is clean. The agent isolation model is well-designed. The conviction brief as the sole handoff document is a correct architectural choice.

The skill is a 199-line replacement for a system that was thousands of lines. That compression ratio is itself an achievement. The question is whether the compression dropped essential information or whether it dropped accidental complexity. My assessment: **mostly accidental complexity was dropped, but 5 pieces of essential information are missing.**

### Priority fixes before the Step 6 experiment:

| Priority | Fix | Lines to add | Risk if unfixed |
|----------|-----|-------------|-----------------|
| **P0** | Screenshot protocol (HOW to serve + capture) | ~15 lines | EXPERIMENT BLOCKS -- fresh instance cannot take screenshots |
| **P1** | Soul constraints in builder prompt | ~5 lines | Builder may produce rounded corners, gradients, shadows |
| **P1** | Responsive CSS instruction for builder | ~3 lines | Page may break at 768px, PA audit finds issues builder was never told to prevent |
| **P2** | PA question assignment for 3 auditors | ~5 lines | Orchestrator improvises, may miss critical questions |
| **P2** | Minimal HTML validation after build | ~5 lines | Malformed output wastes PA agent budget |

### Non-blocking observations (fix after experiment):

- Gate runner absence is a deliberate simplification. For the experiment, PA-only evaluation is acceptable. For production, programmatic gates should be restored.
- Token budget management should be added if the skill is used on long content (>1,500 lines).
- The orchestrator synthesizing PA results (instead of a separate weaver agent) is a cost-saving trade-off. Acceptable for now.
- Exploration loading for the builder is absent. This is fine for the experiment; the builder has sufficient vocabulary from the 4 reference files.
- Error handling can be added incrementally based on actual failure modes encountered during the experiment.

### What the skill gets RIGHT (protect these):

1. **Conviction-first architecture.** The brief carries creative direction, not compliance checklists. This inverts the old pipeline's guardrail-factory failure.
2. **Agent isolation.** TC cannot see components. Builder cannot see PA criteria. PA cannot see the metaphor. Each agent operates in its intended register.
3. **80% creative authority.** Explicitly stated. The builder composes, not complies.
4. **Fix cycle typing (A/B/C).** Mechanical, structural, compositional -- with escalation logic. This prevents the old pipeline's "fix the 6 defects" anti-pattern.
5. **Same builder for fix cycles.** Compositional memory is irreplaceable. The skill recognizes this.
6. **Generative language for fixes.** "The opening zone wants more warmth" not "Fix PA-03." This is correct, even though it creates translation burden.

### The deeper question:

The compose skill is 199 lines. The TC skill is ~830 lines. The PA skill is ~525 lines. Combined: ~1,554 lines. The old pipeline was thousands of lines of TypeScript + a ~1,300 line manifest + hundreds of lines of prompt templates. The compose skill achieves the same architecture in roughly 1/10th the code. The question is not whether it is complete (it is not -- 5 fixes needed) but whether its SIMPLICITY is a feature or a defect.

My assessment: **simplicity is the primary feature.** The old pipeline's complexity was itself a failure mode (660:1 meta-to-output ratio, 99.8% information loss in prompt compression, Gate 6 at infinity:1). The compose skill's leanness means a fresh instance can hold the ENTIRE orchestration protocol in context simultaneously. That is worth more than completeness.

The 5 recommended fixes add ~33 lines. The result would be a ~232-line orchestrator. Still dramatically simpler than the old pipeline. Still holdable in a single context window. And sufficient for the experiment.

---

*This evaluation was produced by a fresh-eyes Opus agent with zero prior exposure to the old pipeline's implementation details. All observations are derived solely from reading the three skill files and the referenced design system files.*
