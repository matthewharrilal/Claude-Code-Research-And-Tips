# Fresh-Eyes Adversarial Audit

**Reviewer stance:** I have NEVER seen the source specifications (docs 00-08). I have never read the README ideology, the design system, the mechanism catalog, or any previous pipeline work. I am reading this plan cold and asking: could I build this?

---

## 1. Where the Plan Assumes Knowledge It Doesn't Provide

### F-01: "Seven Lenses" referenced but never defined
The plan says builders receive "Seven lenses: Creative evaluation compass (from README ideology)" (line 275) and later says the prompt-deepener-builder must "Read ideology (README.md + multi-window-handoff research)" (line 782). The prompt variable reference lists `{SEVEN_LENSES}` as "Static from README ideology, ~20 lines" (line 334).

**Problem:** The plan tells builders to use the Seven Lenses as a creative compass but never says what the seven lenses ARE. A builder implementing `assembler.ts` can resolve the variable from a file, but the prompt-architect in Wave 1 needs to WRITE the builder template containing these lenses, and is told to ensure "Builder MUST include Seven Lenses" (line 714). If the prompt-architect hasn't read README.md, they cannot do this. The plan should either list the seven lenses inline or specify the exact file path and section to extract them from.

### F-02: "Material constraints" listed but unexplained
Line 276: "Material constraints: No border-radius, no box-shadow, warm palette R>=G>=B, font trinity (Inter/Instrument Serif/JetBrains Mono)."

**Problem:** These are listed as pass-through facts, but there's no explanation of WHY these constraints exist. A prompt-architect tasked with writing the builder template in Wave 1 would have to include these without understanding the rationale. More critically, "warm palette R>=G>=B" is a mathematical constraint on color channels but the plan never explains what visual effect this produces or how strictly to enforce it (does #FF0000 pass? It has R>G>=B... but it's pure red, likely not "warm"). Without the ideology document, this is cargo-culted constraint replication.

### F-03: "KortAI identity" in world description never explained
Line 264: "System/world: World description (~17 lines, KortAI identity)." Line 505: "world-description.md -- KortAI world description / identity layer (~17 lines)."

**Problem:** "KortAI" appears nowhere else in the plan. What is KortAI? Is it the name of the design system? The organization? The product? A Wave 1 agent tasked with creating `templates/world-description.md` from scratch (it's one of the 4 NEW templates not in doc 07) has literally no information about what "KortAI identity" means. This is a critical gap because the world description is Layer 1 of every single prompt (line 128).

### F-04: "Creative tissue" extraction mechanism assumed
Lines 192-204 describe a 6-dimension creative tissue system with conviction markers (`<!-- CONVICTION_ADDITION_START -->` etc.). The plan assumes the builder agent will naturally emit these markers in its response. But with `--max-turns 1` and `--allowedTools ""` (line 217), the builder produces a SINGLE text response. The plan says the orchestrator "extracts" conviction additions from the response (line 138, line 204).

**Problem:** How does extraction work when the builder's response is supposed to be HTML (the artifact)? Does the builder respond with HTML PLUS conviction text? If so, how does the response handler distinguish HTML from conviction entries? The conviction markers are XML-style comments, but they'd need to be OUTSIDE the HTML or in a structured section. The plan's response-handler description (line 474) says "extract HTML from result text, extract conviction markers" but doesn't explain the expected response format. If I'm implementing `response-handler.ts`, I don't know whether to expect:

```
(a) Pure HTML with conviction embedded as HTML comments
(b) HTML first, then a text section with conviction markers
(c) JSON with separate fields (impossible with --output-format json wrapping)
```

### F-05: "CD-006 exploration HTML" referenced as calibration
Line 268: "Case study: CD-006 exploration HTML (387 lines) -- calibration reference." Line 325: `{CASE_STUDY}` resolves to "CD-006 exploration HTML (static), ~387 lines."

**Problem:** What is CD-006? The plan treats it as a self-evident reference. A builder creating `assembler.ts` could load the file, but the prompt-architect needs to know what CD-006 represents to frame it properly in the builder template. Is it the ceiling experiment? A case study? Why is this ONE file the calibration reference for the entire pipeline? The plan never explains.

### F-06: "Content markdown" -- what IS the input?
Line 322: `{CONTENT_MARKDOWN}` is "User's input content file, varies." The plan describes the pipeline as operating on "content" but never specifies what form this content takes or what makes content suitable for the pipeline. Is it a blog post? A research document? A longform essay?

**Problem:** `sample-content-creator` in Wave 3 (line 765) is told to create "~200 lines -- minimal but realistic content for testing pipeline without full corpus run." But realistic for WHAT? The agent needs to understand the content domain to create a meaningful fixture. Without knowing what the pipeline transforms content INTO, they're flying blind.

### F-07: "Gate-runner-browser.js -- Contains all 42+ gate functions. Copied from existing gate-runner-core.js" (line 478)
Where IS `gate-runner-core.js`? The plan says to copy it from existing code but never provides a path. The checklist item C.11 says "copy from existing" but existing WHERE? The plan references "GR-01 through GR-84" (line 156) for gate verdict, but the file description says "42+ gate functions." Are these 42 functions that implement 84 gate rules? Or does the plan disagree about the number of gates?

### F-08: References to "doc 07" templates without content
The plan repeatedly says "from doc 07" (lines 497-504, 714, 904-912) for 5 of the 9 prompt templates. But the plan never includes the CONTENT of doc 07's templates. Wave 1's prompt-architect is supposed to "Write all 9 prompt templates" with "5 from doc 07" -- does this mean COPY them verbatim? Adapt them? Use them as starting points? The plan says "doc 07 + enrichments" for the builder template (line 497) but doesn't specify what enrichments to add.

---

## 2. Where the Plan Is Ambiguous

### A-01: "Trim conviction layer first, then trim valley-position corpus files" (line 133)
When tokens exceed 100K, the plan says to trim. But how MUCH? Remove one conviction entry? All of them? Trim to 90K? 95K? "Trim" is ambiguous. Does "valley-position" mean the files currently in the middle of the rotation? If so, the specific trimming strategy depends on corpus file sizes that vary by subset.

### A-02: Builder response format (HTML extraction)
Line 474: response-handler.ts "extract HTML from result text." The builder is `--max-turns 1` with `--output-format json`. The JSON has a `result` field (string). But is the result field PURE HTML, or does it contain conversational text around the HTML? If the builder writes `Here's my artifact:` followed by HTML, the handler needs to strip that. If it's pure HTML, the builder needs instructions to emit ONLY HTML. The plan doesn't specify the expected builder output format, only the extraction from it.

### A-03: Cross-subset verifier trigger
Line 143: "Cross-subset verifier (every 2 subsets): check early patterns still visible." Does this mean after S2, S4, S6? Or after S2, S4, S6, S7? Or only between even-numbered subsets? Does the verifier run as its own `claude -p` call? With what role config? It's mentioned in the pipeline flow but absent from the Per-Role Invocation table (lines 213-223) and absent from the Pass-to-Pass Anatomy section.

### A-04: "Mini-PA (between refinement passes): Every 2-3 refinement passes, run 3 auditors + 1 viewport" (line 171)
Which 3 auditors? All 9 share questions from the PA question assignment table (referenced at line 291 but never included in the plan). Do you pick 3 at random? The 3 most critical? Is the viewport always 1440? Always desktop? The mini-PA is described in one line with no further specification.

### A-05: Verifier schedule within subset
Line 137: "If pass is 2, 5, or 8: spawn verifier." But line 272 says "Verifier observations: Only on passes 3 and 6 (post-verifier builders)." These are DIFFERENT statements: the verifier runs on passes 2, 5, 8 -- and the builder on passes 3, 6 receives verifier observations from passes 2, 5. But what about pass 8? The verifier runs on pass 8, but there's no pass 9 builder to receive those observations. Is the pass-8 verifier strictly for the retrospective? And if verifier runs on passes 2, 5, 8, that's 3 verifier calls per subset (21 total), which would change the "56 passes" count since verifiers are ADDITIONAL passes on top of the 8 builder passes.

**Wait -- this reveals a deeper ambiguity:** Are the 8 passes per subset ALL builder passes, with verifiers as extra? Or are some of the 8 passes verifier passes? If verifiers are 3 of the 8, then there are only 5 builder passes per subset. If verifiers are extra, then it's 8 builder + 3 verifier = 11 passes per subset = 77 total, not 56. The pipeline math at line 7 says "7 subsets x 8 passes x rotations = 56" but doesn't clarify whether verifiers are within or additional.

### A-06: Retrospective timing
Line 144: "Retrospective: claude -p reviewing all verifier observations + artifact evolution." Is this ONE retrospective after ALL 8 passes (or 11?) within a subset? Or one per verifier pass? The retrospective role appears in the invocation table (line 219) with `--max-turns 10` and Read tool access, but the plan never says what the retrospective outputs or how its output is used. Does it go into the conviction layer? Cross-subset summaries? Nothing?

### A-07: TC derivation and content analysis timing
The plan describes tc-derivation.md (line 500) and content-analysis.md (line 501) as NEW templates, and the prompt variable `{CONVICTION_BRIEF}` comes from "Generated by TC derivation step" (line 321). But WHEN does TC derivation run? Before Phase A? It's not in the Phase A loop or Phase B loop. It's not in any wave's agent list as a PIPELINE step (only as a template creation task). The plan seems to assume TC derivation happens before the 56-pass loop but never explicitly schedules it. If it's a `claude -p` call, it needs an invocation pattern and prompt template.

---

## 3. Where Numbers Could Be Wrong

### N-01: Pipeline math -- 56 passes vs actual
Line 7: "7 corpus subsets x 8 passes x rotations = 56 corpus integration passes."

But rotations are NOT a multiplier. Rotations are internal to the 8 passes (passes 1-3 = rotation A, 4-6 = B, 7-8 = C). So it IS 7 x 8 = 56 builder passes. But then:
- Are verifiers additional? If so: 56 builder + 21 verifier = 77
- Are retrospectives additional? If so: 77 + 7 retrospective = 84
- What about TC derivation? Content analysis? 84 + 2 = 86
- Cross-subset verifiers (every 2 subsets = 3): 86 + 3 = 89

The plan says "56 corpus integration passes (Phase A)" but the actual pass count for Phase A is potentially 77-89, significantly affecting cost estimates.

### N-02: Cost estimate arithmetic
Line 13: "$190-228 (Phase A ~$152, Phase B ~$38-76 with 9 auditors)."

Phase A at $152 for 56 passes = $2.71/pass. But each builder pass sends 30-80K tokens input (line 113). At Opus pricing (~$15/1M input, ~$75/1M output), a 50K-token input + ~10K output pass costs roughly $0.75 input + $0.75 output = $1.50/pass. 56 passes x $1.50 = $84, not $152. If the plan's $152 is correct, that implies ~$2.71/pass, meaning either output is much larger or caching isn't accounted for.

More importantly, if verifiers and retrospectives are additional (21 + 7 = 28 more calls), Phase A cost could be 84 passes x $1.50-2.71 = $126-228. The $190-228 total estimate may be just Phase A alone.

Phase B: 9 auditors + 1 weaver + 1 refine = 11 calls per PA cycle. 3 cycles = 33 calls. At ~$1-2 each = $33-66. Plus gate runner, screenshots, mini-PA... $38-76 range seems reasonable but only if you DON'T count the extra 28 Phase A calls.

### N-03: Agent count across waves
Line 954: "~64 agents across 6 waves (33 builders/researchers + 24 buddies + 7 retro pairs)."

Let me count from the plan:
- Wave 0: 6 agents + 2 retros = 8
- Wave 1: 5 builders + 4 buddies + 2 retros = 11 (but the table lists 9 agents including contract-integrator, not 5+4)
- Wave 2: 9 builders + 9 buddies + 3 retros = 21
- Wave 3: 6 agents + 2 retros = 8
- Wave 4: 4 agents + 2 retros = 6
- Wave 5: 8 builders + 2 retros = 10

Total: 8 + 11 + 21 + 8 + 6 + 10 = 64. The math checks.

But "7 retro pairs" = 14 agents (7 retro + 7 meta-retro). Let me count retros: W0=2, W1=2, W2=3, W3=2, W4=2, W5=2 (final-retro + final-meta-retro, though ship-verdict is separate). That's 13, not 14. The "7 retro pairs" claim doesn't match: there are 6 waves with 2 retros each EXCEPT Wave 2 which has 3. And Wave 5's retros are folded into the 10-agent list differently (final-retro + final-meta-retro + ship-verdict = 3?).

Actually, Wave 5 lists 10 agents total (line 795-810), with 8 roles (adversarial-breaker through ship-verdict), plus `final-retro` and `final-meta-retro` listed in the same table rather than separately. That's 10 agents, not "8 builders + 2 retros." The categorization in line 954 ("33 builders/researchers + 24 buddies + 7 retro pairs") doesn't cleanly map to the wave definitions.

### N-04: "~3,000 lines TypeScript" (line 955) vs module descriptions
Let me estimate from file descriptions:
- cli.ts: ~80 lines
- types/ (5 files): State schema alone is ~90 lines in the plan. With all 5 files: ~350 lines
- orchestrator/ (4 files): pipeline.ts (main loop, biggest module) ~400, pass-executor ~200, rotation ~50, phase-router ~80 = ~730
- prompts/assembler.ts: ~250 lines (complex: loads templates, resolves variables, concatenates corpus, token estimation)
- agents/ (2 files): claude-cli.ts ~150, response-handler.ts ~120 = ~270
- validation/ (4 files): html-validator ~80, gate-runner.ts ~100, gate-runner-browser.js ~500+, diff-checker ~80 = ~760+
- state/ (3 files): state-manager ~120, checkpoint ~80, resume ~100 = ~300
- pa/ (4 files): screenshot-capture ~120, auditor-spawner ~150, weaver-spawner ~80, pa-router ~60 = ~410
- instrumentation/ (2 files): metrics ~80, report ~200 = ~280
- logging/ (2 files): logger ~120, cost-tracker ~80 = ~200
- config/ (3 files): corpus.ts ~150 (38 paths), constants ~40, paths ~40 = ~230
- utils.ts: ~120

Total estimate: ~3,730 lines. Plus gate-runner-browser.js at 500+ lines = ~4,230. The "~3,000 lines TypeScript" estimate (line 955) seems low by 700-1,200 lines, ESPECIALLY if gate-runner-browser.js is counted (it's JavaScript, not TypeScript, but it's a source file that must be maintained).

### N-05: "~1,500 lines prompt templates" (line 956) vs 9 templates
- builder-corpus.md: ~200 lines (stated at line 497)
- verifier-corpus.md: ~100 lines (reasonable)
- retrospective.md: ~80 lines (NEW)
- tc-derivation.md: ~150 lines (NEW, complex -- must generate conviction brief)
- content-analysis.md: ~100 lines (NEW)
- pa-auditor.md: ~120 lines (× 9 variants via variables, but single template)
- pa-weaver.md: ~150 lines (complex synthesis)
- refine-builder.md: ~150 lines (from doc 07)
- world-description.md: ~17 lines (stated at line 505)

Total: ~1,067 lines. Getting to 1,500 requires either the templates being much larger (plausible after Wave 4 deepening adds length) or additional supporting files. The estimate might be post-Wave-4 rather than post-Wave-1.

---

## 4. References to Sections That Don't Exist Within the Plan

### R-01: "PA question assignment table" (line 291)
"Assigned questions (5-11 per auditor, see PA question assignment table)" -- this table does not appear anywhere in the plan. A builder implementing `auditor-spawner.ts` needs to know which questions map to which auditor (A through I). This is a BLOCKING gap: without this mapping, the PA subsystem can't route questions to auditors.

### R-02: "Prompt Variable Reference" referenced at line 89 but incomplete
"GAP-H02: Builder template has 20+ variables, plan doesn't list them. Full list in 'Prompt Variable Reference' section below." The Prompt Variable Reference section (lines 314-335) lists 14 variables. The gap claimed "20+" but only 14 are listed. What are the other 6+? Are they in the builder template only or across all templates? Verifier, PA auditor, weaver, and refine-builder templates also have variables but they're never enumerated.

### R-03: "Skills.sh Reference" section for Wave 2 builders (lines 838-845)
The plan says to include this reference in Wave 2 builder prompts. But the Pre-Wave section (lines 672-679) installs 4 skills packages. Are these skills actually USABLE by `claude -p` instances? The plan uses isolated workdirs with `CLAUDECODE: undefined` (line 232). If skills.sh is installed in the user's Claude Code environment but the `claude -p` instances have no session persistence and isolated workdirs, will they even see the skills? This is potentially a dead reference.

### R-04: "14 risk dimensions" from doc 06
Line 25: "14 risk dimensions, cost estimate." The plan's gap registry uses some of these but never enumerates all 14 risk dimensions. If these informed the gap analysis, they should be traceable. As-is, the reader can't verify whether all 14 dimensions were addressed.

---

## 5. Internal Contradictions (Same Information Stated Differently)

### C-01: Verifier pass schedule
Line 137: "If pass is 2, 5, or 8: spawn verifier."
Line 272: "Verifier observations: Only on passes 3 and 6 (post-verifier builders)."

These are reconcilable (verifier runs on 2,5,8; builder sees observations on 3,6) but they create confusion about pass 8. The verifier on pass 8 generates observations that... go where? The plan never says. If they feed into the retrospective, that should be stated.

### C-02: Gate count
Line 156: "GR-01 through GR-84" (84 gates)
Line 478: "Contains all 42+ gate functions"
Line 879: checklist says "gate-runner-browser.js -- browser-context gates (copy from existing)"

42+ functions vs 84 gate rule IDs. Are gates composed? Is GR-01 through GR-84 a numbering scheme across multiple files? The plan contradicts itself on gate count without explanation.

### C-03: Output format nuance
Line 217: Builder uses `--output-format json`
Line 256: "GOTCHA: With --json-schema, structured data is in `structured_output`, NOT `result`"
Line 135: "Parse JSON response: extract HTML from `result` field"

The GOTCHA suggests that if `--json-schema` is used, the response format changes. But the plan says to use `--output-format json` (not `--json-schema`). So the GOTCHA is informational, not actionable. But it sits in the reference section without clarification, potentially confusing a builder who reads it and wonders "should I be using --json-schema instead?"

### C-04: PA auditor tool access
Line 220: PA Auditor gets `--tools "Read,Glob,Grep"` (note: `--tools` flag)
Line 72: "Per-role tool config: Builder `--max-turns 1 --allowedTools ""`. PA `--tools "Read,Glob,Grep"`."

But `--tools` and `--allowedTools` are likely the same flag under different names (or are they? Doc confusion noted at GAP-B02). The plan resolves this at line 72 but then uses `--tools` in the invocation table. The actual CLI flag name matters for implementation. A builder implementing `claude-cli.ts` needs the EXACT flag name.

### C-05: Wave 5 agent count
Line 795: "Wave 5: Hardening & Final Audit (8 builders + 2 retros = 10 agents)"
But the Wave 5 table (lines 799-810) lists 10 agents total, and the last 3 are `final-retro`, `final-meta-retro`, `ship-verdict`. That's 7 builders + 3 retro/verdict = 10. Not "8 builders + 2 retros."

---

## 6. Where the Plan Is TOO Detailed

### D-01: Full TypeScript interfaces in the plan
Lines 340-428: the complete `PipelineState`, `PassRecord`, `CostTracker`, `ConvictionEntry`, and `ErrorCategory` type definitions. This is ~90 lines of TypeScript that belong in CODE (`types/state.ts`), not in a build plan. The plan should reference the schema by field names and business rules, not provide copy-pasteable interfaces. Having these in both the plan AND code creates a maintenance/sync problem: if a builder changes a field during implementation, the plan is immediately stale.

### D-02: `RunReport` schema
Lines 603-665: another 60+ lines of TypeScript interface. Same problem -- this is code, not plan.

### D-03: The 38 corpus file paths
GAP-D01 and corpus.ts are described as needing "38 verified paths." The plan references "Doc 03 says 95 files, 85,525 lines / 38 unique rotating" but then expects `config/corpus.ts` to contain all 38 verified paths. The paths should come from doc 03, not the plan. However, since the plan doesn't include them, this is actually a case where it correctly delegates to the source doc.

---

## 7. Where the Plan Is NOT Detailed Enough

### H-01: Error recovery strategy beyond retry
Line 473: "Retry with exponential backoff" and line 463: "retryLimit: 3, retryBackoff: [5000, 15000, 45000]."

But what happens AFTER 3 retries fail? The plan mentions 14 error categories (line 424-427) but never maps categories to recovery strategies:
- `model-overload` → retry? Switch model? Pause 5 min?
- `rate-limit` → retry with longer backoff? How long?
- `timeout` → retry with same timeout? Increase it?
- `state-corruption` → abort? Attempt repair?
- `budget-exceeded` → stop? Ask user?

The plan says "handle" errors but the handler behavior per category is unspecified.

### H-02: Stall detection algorithm
Line 168: "2 consecutive cycles with no PA improvement --> force SHIP." What constitutes "no improvement"? PA-05 unchanged? Tier 5 unchanged? Both? What if PA-05 goes from 2.5 to 2.6 -- is that improvement? Is there a minimum delta threshold? The phase-router needs a concrete comparison: `if (currentPA05 - previousPA05 < STALL_THRESHOLD)` -- what is STALL_THRESHOLD?

### H-03: Cross-subset summary generation
Line 78: "Each subset N receives 3-sentence summaries from S1..S(N-1). Orchestrator auto-generates from checkpoint verifier observations."

How does the orchestrator "auto-generate" a 3-sentence summary from verifier observations? Is this another `claude -p` call? If so, it's not in the invocation table or pass count. Is it hardcoded string concatenation? If so, the quality will be terrible. Is it a template with `{VERIFIER_OBS}` variable? None of this is specified.

### H-04: "Isolated workdir with `.git/HEAD`" (line 237)
"Scoped workdir with `.git/HEAD`" to "block CLAUDE.md traversal." How is this workdir created? Is it a temp directory with a fake `.git/HEAD`? Does it contain a real git repo? What content goes in `.git/HEAD`? This is a specific technical mechanism that's hand-waved. The builder of `claude-cli.ts` needs to know: create temp dir, write `.git/HEAD` with what content, set as cwd, clean up when?

### H-05: HTTP server for screenshots
Line 152: "Serve artifact via local HTTP server (Playwright blocks file://)." Line 485: "spawn HTTP server, navigate Playwright to localhost."

What HTTP server? Express? `http.createServer`? `python3 -m http.server`? What port? What if the port is in use? How is the server started and killed? The plan has zero implementation detail for a critical system component. It's a dependency for ALL of Phase B (PA hardening).

### H-06: How does the pipeline INITIALIZE?
The Phase A loop assumes an existing `output.html` artifact. Line 135: "extract HTML from `result` field." But for pass 1 of subset 1 -- there IS no existing artifact. What does the builder receive as `{CURRENT_ARTIFACT}`? An empty HTML skeleton? A boilerplate? Nothing? The first pass is fundamentally different from all others and the plan never addresses initialization.

### H-07: TC derivation and content analysis -- where in the flow?
These are listed as templates (lines 500-501) but never scheduled in the Phase A or Phase B flows. They produce `{CONVICTION_BRIEF}` (line 321) which is needed by EVERY builder pass. So they MUST run before pass 1. But they're not in the Pipeline Architecture section (lines 103-173). They seem to be what the plan calls "Window 1" (line 266: "Generated by TC derivation step, 80-165 lines from Window 1 TC derivation") but "Window 1" is never defined in the plan.

---

## 8. My First 5 Questions If Handed This Plan

### Q1: "What exactly does the builder OUTPUT?"

The builder has `--max-turns 1` and `--allowedTools ""` (can't write files). The response goes into `result` as text. Is this text PURE HTML? HTML wrapped in markdown code fences? HTML plus conversational text? HTML plus conviction markers? The response-handler needs to parse it, and the expected format is never defined. Every downstream module (validation, diff-checker, state-manager recording artifact size) depends on this answer.

**Is this answerable from the plan?** PARTIALLY. Line 474 says "extract HTML from result text, extract conviction markers" which implies the result contains BOTH HTML and conviction markers in some structure. But the structure itself is not specified. **GAP.**

### Q2: "Where do TC derivation and content analysis run in the pipeline flow?"

The plan has Phase A (56 corpus passes) and Phase B (PA hardening). TC derivation produces the conviction brief that every builder pass needs. Content analysis presumably produces the content map. Neither appears in the Phase A or Phase B flow diagrams. When are they called? Before Phase A as "Phase 0"? As the first 2 of the 56 passes? As separate steps?

**Is this answerable from the plan?** NO. The templates exist (lines 500-501), the variable reference says conviction brief is "Generated by TC derivation step" (line 321), but the step is never placed in the execution flow. **BLOCKING GAP.**

### Q3: "Which PA questions map to which auditor?"

Line 291: "Assigned questions (5-11 per auditor, see PA question assignment table)." The table doesn't exist in the plan. The auditor-spawner needs this mapping to construct 9 different prompts. Without it, PA auditors either all get all questions (defeating the purpose of parallel specialization) or the mapping must be invented during implementation (risky).

**Is this answerable from the plan?** NO. Referenced but absent. **BLOCKING GAP.**

### Q4: "How do I initialize the first pass?"

Pass 1 of Subset 1 has no previous artifact, no conviction layer, no discovery log, no verifier observations, no cross-subset summaries. What does the builder template look like with all these variables empty? Does the assembler skip them? Insert placeholders? Use a special "initialization" template variant?

**Is this answerable from the plan?** PARTIALLY. The variable reference (lines 314-335) lists sources but doesn't address the initial state. Line 330: `{CONVICTION_LAYER}` comes from `state.convictionLayer (capped at 10)` -- but initially it's empty. The assembler presumably resolves to empty string, but this is inferred, not stated. **MINOR GAP** (likely solvable but should be explicit).

### Q5: "What's the actual `--tools` vs `--allowedTools` flag name?"

The plan uses both interchangeably: line 72 uses `--allowedTools ""` for builder and `--tools "Read,Glob,Grep"` for PA. Line 220 uses `--tools`. GAP-B02 flags this confusion but the resolution says "Per-role tool config" and then uses BOTH flag names. Which one does the actual `claude` CLI accept?

**Is this answerable from the plan?** NO. GAP-B02 identifies the confusion but doesn't resolve to a single canonical flag name. The Wave 0 `cli-capabilities-verifier` is tasked with resolving this empirically, which means the plan CORRECTLY defers the answer -- but that means Wave 2 builders can't implement `claude-cli.ts` until Wave 0 has run. The dependency is implicit. **MINOR GAP** (correctly deferred but dependency should be explicit).

---

## Summary

| Category | Count | Severity |
|----------|-------|----------|
| Assumed knowledge (F-*) | 8 | 3 BLOCKING (F-03 KortAI, F-04 response format, F-07 gate source), 5 HIGH |
| Ambiguity (A-*) | 7 | 2 BLOCKING (A-05 pass count, A-07 TC timing), 5 HIGH |
| Numbers possibly wrong (N-*) | 5 | 2 HIGH (N-01 pass count, N-02 cost), 3 MEDIUM |
| Missing referenced sections (R-*) | 4 | 1 BLOCKING (R-01 PA question table), 3 HIGH |
| Internal contradictions (C-*) | 5 | 2 HIGH (C-02 gate count, C-04 tool flag), 3 MEDIUM |
| Too detailed (D-*) | 3 | All LOW (aesthetic preference, not harmful) |
| Not detailed enough (H-*) | 7 | 3 BLOCKING (H-05 HTTP server, H-06 initialization, H-07 TC timing), 4 HIGH |
| Top 5 questions | 3 NOT answerable, 2 PARTIALLY answerable | |

### Top 3 BLOCKING Issues

1. **TC derivation timing is a ghost.** The conviction brief is needed by every builder pass but the step that produces it is never scheduled. This would cause a runtime failure on the very first invocation.

2. **PA question assignment table is missing.** The auditor-spawner can't be implemented without it. This blocks the entire Phase B subsystem.

3. **Builder response format is undefined.** The plan says to extract HTML AND conviction markers from the builder's text response but never defines the expected structure. This blocks response-handler.ts, which blocks the entire Phase A loop.
