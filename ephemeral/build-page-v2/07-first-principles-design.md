# First-Principles Design: What Does the New Process Need?

**Author:** first-principles agent (Opus, zero pipeline context)
**Date:** 2026-02-27
**Method:** Start from what each window's agent NEEDS. Find files that satisfy those needs. Design from need, not from inheritance.

---

## The Process Architecture (Given)

```
Window 1: DERIVE + BUILD
   One Opus agent reads content, derives metaphor, writes conviction brief,
   builds the HTML page, writes a reflection.
   |
   v -- artifact.html + conviction-brief.md + reflection.md
   |
Window 2: EVALUATE
   Orchestrator screenshots the artifact.
   Gate runner (~28 gates) runs on the HTML/CSS.
   5 PA auditors (parallel) answer experiential questions from screenshots.
   Weaver synthesizes auditor reports.
   Orchestrator makes routing decision: SHIP / REFINE / RETHINK.
   |
   v -- gate-results.json + 5 auditor reports + weaver synthesis + verdict
   |
Window 3 (if REFINE): REFINE
   Different Opus builder. One pass. Receives artifact + conviction +
   reflection + weaver synthesis. Builds improved version.
```

**Plumbing** (orchestrator controls): file loading, agent spawning, screenshots, gates, routing.
**Freedom** (inside each window): everything creative.

---

## WINDOW 1: DERIVE + BUILD

### What does this agent need to do?

1. Read content deeply
2. Derive a structural metaphor from the content's tension against the design system
3. Write a conviction brief (creative commitment)
4. Build a complete HTML page with embedded CSS
5. Write a reflection (what worked, what didn't, what's unresolved)

### What does this agent need in their prompt?

**Need 1: The content itself.**
- The markdown file they're building a page for.
- This is the PRIMARY input. Everything else serves this.

**Need 2: The world they're building in.**
- What makes this design system THIS design system (not Bootstrap, not Tailwind, not generic).
- Sharp edges, warm palette, flat surfaces, 3 typefaces, border hierarchy.
- Stated as PHYSICS of the world, not rules to comply with.

**Satisfied by:** `design-system/compositional-core/identity/prohibitions.md` -- but this file is 420 lines, framed as prohibitions (compliance language), and includes evidence citations and meta-prohibitions that the builder doesn't need. The builder needs the WORLD, not the RULES.

**What the builder actually needs (derived from prohibitions.md):** A ~30-line world-description that encodes the same identity constraints as experiential physics. Something like what already exists in the TC skill rewrite's "Side B" section (lines 186-211) -- the personality spectrum + the soul test. This is NOT a new file to create; it's a distillation that already exists in the TC skill.

**Need 3: The design vocabulary available.**
- What CSS tools exist: token values, spacing scale, border weights, color palette.
- Stated as a PALETTE, not as specifications.

**Satisfied by:** `design-system/compositional-core/vocabulary/tokens.css` (174 lines). This file is excellent as-is. It's a :root block with every available value. The builder reads it and knows what colors, fonts, spacing, and border weights are available.

**Need 4: The mechanism vocabulary.**
- What compositional techniques exist: border-weight gradient, 2-zone DNA, spacing compression, zone backgrounds, etc.
- Stated as TECHNIQUES with CSS patterns, not as theory.

**Satisfied by:** `design-system/compositional-core/grammar/mechanism-catalog.md`. Currently ~800+ lines with 18 mechanisms. Each mechanism has CSS patterns, transfer tests, application modes, and zone mappings. The builder needs ALL of this -- mechanisms are their creative vocabulary.

**But:** The mechanism catalog currently includes per-category selection protocol text, critical distinction preambles, and other instructional framing that should be in the creative process guide, not in the reference catalog. The builder needs the MECHANISMS (CSS patterns + when to use), not the PEDAGOGY (how mechanism selection differs across tiers).

**Need 5: The component library.**
- Pre-built CSS patterns for common elements: callouts, code blocks, tables, navigation.
- The builder should use these as starting points, adapting them to their metaphor.

**Satisfied by:** `design-system/compositional-core/components/components.css` (~31KB). The builder loads this and has a full component library.

**Need 6: A creative process guide.**
- How to derive a metaphor from content tension.
- Not 841 lines of ceremony. The core creative process:
  1. Read the content as a reader. What excites you?
  2. Ask 4 core questions: FEEL / UNDERSTAND / DO / BECOME
  3. Find where the content's needs FIGHT the world's personality (tension)
  4. Test: is the tension genuine? (Addition test, BECAUSE test, Substitution test)
  5. Generate 3 metaphor candidates. Pick the one that excites you.
  6. One binary check: is this metaphor STRUCTURAL or merely DECORATIVE?
  7. Write a conviction brief.

**Satisfied by:** A simplified version of the TC skill rewrite (`ephemeral/tc-skill-update/SKILL-REWRITE.md`). The current rewrite is ~750+ lines. The builder needs the CREATIVE PROCESS (~200-250 lines), not the full skill documentation.

**Key insight from the process adversarial (Part 3):** Combining TC and BUILD in one window means the conviction brief is self-authored. The builder derives the metaphor and writes the brief FOR THEMSELVES. This changes the brief from a received document to a creative checkpoint. The brief format should reflect this -- it's a commitment, not a specification.

**Need 7: A receiving principle (embedded, ~5 lines).**
- Read the content as a reader first.
- Notice what excites you. State your creative commitment in 2 sentences.
- Read the vocabulary files.
- Build.
- Your perception is the tiebreaker.

**This is NOT a separate file.** It's embedded in the prompt the orchestrator uses to spawn this agent.

### Window 1: File Loading Order

The ORDER matters. Creative framing before compliance material.

```
1. Receiving principle (embedded in spawn prompt, 5 lines)
2. Content markdown (the thing they're building for)
3. Creative process guide (~200-250 lines, simplified TC)
4. World-description (~30 lines, distilled from prohibitions.md)
5. tokens.css (174 lines -- the palette)
6. mechanism-catalog.md (~800 lines -- the vocabulary)
7. components.css (~31KB -- the component library)
```

**Total:** ~1,300 lines of reference material + content + components.css.
This leaves ~80% of context for thinking + building.

### Window 1: Outputs

The builder produces 3 files:

1. **`artifact.html`** -- The complete HTML page with embedded CSS.

2. **`conviction-brief.md`** (~50 lines) -- The builder's creative commitment.
   Format (simplified from TC skill's Phase 4.5):
   - WORLD-DESCRIPTION (10 lines): The metaphor as world-physics
   - CALIBRATION (5 lines): Color/spacing/typography ranges for this page
   - OPPOSITION (3-5 lines): Where the creative fight lives
   - ARC (5-10 lines): The reader's experiential journey
   - CONTENT MAP (15 lines): What content goes where

3. **`reflection.md`** (~15-20 sentences) -- 3 dimensions:
   - CONVICTION: What were you trying to make? Where did you succeed/fall short?
   - ALTERNATIVES: What roads did you not take, and why?
   - UNRESOLVED: What tension remains? What would you tell the next builder?

---

## WINDOW 2: EVALUATE

### What does the orchestrator need to do?

1. Take screenshots of the artifact at 3 viewports (1440px, 1024px, 768px)
2. Run the gate runner (~28 gates) on the HTML/CSS
3. Spawn 5 PA auditors with screenshots + experiential questions
4. Spawn the Weaver to synthesize auditor reports
5. Make a routing decision: SHIP / REFINE / RETHINK

### What does the orchestrator need?

**Need 1: The artifact.** (From Window 1.)

**Need 2: A gate runner.** A JavaScript file that reads the HTML, runs ~28 programmatic checks, and produces a JSON result. The gate runner is pure PLUMBING -- it has nothing to do with creativity. It checks:
- Physics: WCAG contrast, footer text size
- Identity: container width, font trinity, border hierarchy, no decorative elements
- Perception: background delta >= 15 RGB, stacked gap <= 120px, single margin <= 96px, trailing void, ghost mechanisms
- Structure: typography variation
- Meta: gate coverage, experiential marker

**Satisfied by:** A gate runner JS file. The specific gates and thresholds come from the gate audit (Task #2). This is a file that already exists in some form (`gate-runner-core.js`) but needs to be reduced from ~54 gates to ~28.

**Need 3: Screenshot capture protocol.** The orchestrator captures screenshots before spawning auditors. This is PLUMBING:
- Serve HTML via HTTP (Playwright blocks file://)
- For each viewport (1440, 1024, 768):
  - Wait for document.fonts.ready
  - Disable animations
  - Take cold-look screenshot (full page)
  - Take scroll-through screenshots at 80% viewport-height steps
- Save to structured directories

**This protocol already exists** in the PA skill's "Screenshot Pre-Capture Protocol" section.

**Need 4: Routing logic.** How to interpret gate results + auditor reports:
- All gates pass + auditors describe a page that works --> SHIP
- Gates fail mechanically + auditors satisfied --> patch CSS in-window, re-run gates, SHIP
- Auditors identify compositional issues --> REFINE
- Auditors identify fundamental problems (wrong metaphor, fighting content) --> RETHINK

**This is ~10 lines of logic embedded in the orchestrator prompt.**

### What does each PA auditor need?

**Need 1: Screenshots.** File paths to saved PNG screenshots. No live page interaction.

**Need 2: Experiential questions.** 4 questions per auditor (20 total, covering all 5 tiers). Each auditor also does Section 0 (cold look + scroll-through).

**Satisfied by:** The PA skill (`~/.claude/skills/perceptual-auditing/SKILL.md`). The 20 experiential questions (E-01 through E-20) and the Section 0 protocol are exactly what the auditors need. The 5-auditor assignment matrix is already defined:

| Auditor | Questions |
|---------|-----------|
| A | E-01, E-05, E-11, E-17 |
| B | E-02, E-06, E-14, E-18 |
| C | E-03, E-07, E-12, E-19 |
| D | E-04, E-08, E-13, E-20 |
| E | E-09, E-10, E-15, E-16 |

**Need 3: Section 0 cold look protocol.** Every auditor must do this before answering questions. This is in the PA skill.

**Need 4: A receiving principle (~5 lines, embedded in spawn prompt).**
- You are seeing this page for the first time. You know nothing about it.
- Describe what you SEE and FEEL. No design vocabulary.
- Your perception is sovereign.
- React to what you see before you check what you know.

**Need 5: Information ISOLATION.** Auditors must NOT receive: conviction brief, reflection, gate results, build context, mechanism counts, pipeline vocabulary. They get screenshots + questions + the cold look protocol. Nothing else.

**Satisfied by:** The PA skill's "Information Isolation" section already specifies this exactly.

### What does the Weaver need?

**Need 1: All 5 auditor reports.**

**Need 2: The screenshots** (to form their own experiential anchor before reading reports).

**Need 3: The Weaver protocol.**
- View screenshots first, write 3-sentence first impression (experiential anchor)
- Read all 5 reports, note convergence (3+ auditors describe same experience) and divergence
- Produce: Experience Portrait (~15 lines) + Creative Direction (AMPLIFY / RELEASE / DEEPEN) + Verdict (SHIP / REFINE / RETHINK)

**Satisfied by:** The PA skill's "THE WEAVER: CREATIVE SYNTHESIS" section (lines 311-415). This is complete and well-designed.

### Window 2: No new files needed

Everything Window 2 needs already exists in some form:
- Gate runner: needs to be REDUCED (54 -> ~28 gates) but exists
- PA questions + protocol: PA skill has everything
- Weaver protocol: PA skill has everything
- Screenshot capture: PA skill has the protocol
- Routing logic: ~10 lines embedded in orchestrator prompt

---

## WINDOW 3: REFINE (if needed)

### What does the REFINE builder need?

This is a DIFFERENT Opus instance. They've never seen the content, the conviction brief, or the artifact before. They're coming in fresh.

**Need 1: The artifact.** The HTML page from Window 1. They scroll through it first, forming their OWN impression.

**Need 2: The conviction brief.** The previous builder's creative commitment. This tells the REFINE builder what the page was trying to become.

**Need 3: The reflection.** The previous builder's account of what worked, what was rejected, and what tensions remain unresolved.

**Need 4: The Weaver synthesis** (or raw auditor reports if no Weaver).
- Experience Portrait: what the page feels like
- Creative Direction: AMPLIFY / RELEASE / DEEPEN
- Verdict + reason

**Need 5: The raw content.** The markdown they're refining a page for.

**Need 6: The same vocabulary files** as the Window 1 builder:
- tokens.css (palette)
- mechanism-catalog.md (techniques)
- components.css (component library)
- World-description (~30 lines)

**Need 7: A receiving principle (~5 lines, embedded in spawn prompt).**
1. Scroll through the page. Write 2 sentences about what you experience.
2. Read the Weaver's synthesis. Note convergence and creative direction.
3. Read the previous builder's reflection. What excites you?
4. Read the conviction brief. This is what the page was trying to become.
5. What is the ONE thing you want to do with this page? Start there.

### Window 3: File Loading Order

```
1. Receiving principle (embedded in spawn prompt, 5 lines)
2. artifact.html (the page -- scroll through it FIRST)
3. Weaver synthesis (~30 lines)
4. reflection.md (~20 lines)
5. conviction-brief.md (~50 lines)
6. Content markdown
7. World-description (~30 lines)
8. tokens.css (174 lines)
9. mechanism-catalog.md (~800 lines)
10. components.css (~31KB)
```

**The order is critical.** The REFINE builder forms their OWN impression of the artifact BEFORE reading anyone else's account. Creative framing before compliance material.

### Window 3: Outputs

1. **`artifact-refined.html`** -- The improved page.
2. **`reflection-refined.md`** -- The REFINE builder's own 3-dimension reflection.

### Post-REFINE Evaluation

The orchestrator runs an abbreviated evaluation:
- Gate runner on the refined artifact (all ~28 gates)
- If gates pass and the original verdict was REFINE (not RETHINK): SHIP
- If significant structural changes were made: run 2-5 auditors again
- If gates fail: mechanical CSS patches in-window, re-run gates

---

## FILE INVENTORY: What Exists vs What's Needed

### Files that already exist and satisfy process needs AS-IS:

| File | Lines | Serves | Notes |
|------|-------|--------|-------|
| `tokens.css` | 174 | Window 1 + 3: palette/vocabulary | Perfect as-is |
| `mechanism-catalog.md` | ~800+ | Window 1 + 3: compositional techniques | Good, minor pruning of pedagogical preamble |
| `components.css` | ~31KB | Window 1 + 3: component library | Good as-is |
| PA skill (`SKILL.md`) | ~518 | Window 2: auditor questions + protocols | Perfect as-is. Contains questions, Section 0, auditor assignment, Weaver protocol, information isolation, screenshot capture |

### Files that exist but need TRANSFORMATION:

| Current File | Problem | What's Needed | Est. Lines |
|-------------|---------|---------------|------------|
| `prohibitions.md` (420 lines) | Compliance framing, evidence citations, meta-prohibitions. Builder needs WORLD, not RULES | **World-description** (~30 lines): Identity constraints as experiential physics. Sharp, warm, flat, 3 fonts, border hierarchy, container width. Already partially exists in TC skill (lines 186-211) | ~30 |
| TC skill rewrite (~750+ lines) | Full pipeline with phases, gate machinery, lock-in checks, standalone appendix. Builder needs CREATIVE PROCESS, not PIPELINE | **Creative process guide** (~200-250 lines): Content reading -> 4 core axes -> tension tests -> metaphor derivation -> conviction brief format. Extract Phases 0-4.5, strip Phase 5, strip standalone appendix, strip library prohibition ceremony (orchestrator handles that) | ~200-250 |
| `gate-runner-core.js` (~2,270 lines, 54 gates) | Too many gates, many are process ceremony | **Reduced gate runner** (~28 gates): Physics + Identity + Perception + 1 Structural + 2 Meta. Strip process-tracking, proxy structural, most BV. See gate audit (Task #2) for exact list | ~1,200-1,500 |

### Files that need to be CREATED:

| File | Purpose | Est. Lines | Content |
|------|---------|------------|---------|
| **`/build-page SKILL.md`** | The new skill: thin orchestrator that loads files, spawns agents, captures screenshots, runs gates, makes routing decisions | ~150-200 | Windows 1-3 orchestration. Spawn prompts (with embedded receiving principles). File loading sequences. Screenshot protocol. Routing logic. Gate interpretation. |

### Files that are NOT needed (ceremony from old pipeline):

| What | Why Not Needed |
|------|---------------|
| Execution tracker template | One-cycle process doesn't need multi-iteration tracking |
| Manifest (~1,300 lines) | Replaced by the skill itself (~200 lines) |
| 9 artifact files | Content distributed into: world-description, creative process guide, skill itself |
| Receiving protocol document (524 lines) | Replaced by 5-line principles embedded in spawn prompts |
| Experiment protocol | Not needed for production builds |
| Value tables | Encoded in conviction brief format |
| Worked examples | Not needed if creative process guide is clear |
| Council verdict (575 lines) | Process-level override document, not needed |
| TC brief template (separate file) | Brief format embedded in creative process guide |
| Conventions brief (separate file) | World-description + tokens.css cover this |
| Operational recipe (separate file) | Builder derives their own approach from vocabulary |

---

## THE COMPLETE FILE SET

Here is everything the new /build-page process needs, organized by window:

### Orchestrator (the /build-page skill itself)

```
~/.claude/skills/build-page/SKILL.md  (~150-200 lines)
   |
   |-- Window 1: Spawn combined TC+BUILD agent
   |     Loading order: content + creative-process-guide + world-description
   |     + tokens.css + mechanism-catalog + components.css
   |     Embedded receiving principle (5 lines)
   |     Expected outputs: artifact.html, conviction-brief.md, reflection.md
   |
   |-- Window 2: Evaluate
   |     Screenshot capture protocol (from PA skill)
   |     Run gate-runner.js on artifact
   |     Spawn 5 PA auditors with screenshots + questions (from PA skill)
   |     Spawn Weaver with auditor reports + screenshots
   |     Routing decision: SHIP / REFINE / RETHINK
   |
   |-- Window 3 (if REFINE): Spawn REFINE builder
   |     Loading order: artifact + weaver-synthesis + reflection + conviction
   |     + content + world-description + tokens.css + mechanism-catalog + components.css
   |     Embedded receiving principle (5 lines)
   |     Expected outputs: artifact-refined.html, reflection-refined.md
   |     Post-REFINE: abbreviated evaluation (gates + optional PA)
```

### Reference Files (loaded into agent prompts)

```
EXISTING (use as-is):
  design-system/compositional-core/vocabulary/tokens.css         (174 lines)
  design-system/compositional-core/grammar/mechanism-catalog.md  (~800 lines)
  design-system/compositional-core/components/components.css     (~31KB)
  ~/.claude/skills/perceptual-auditing/SKILL.md                  (~518 lines)

NEEDS TRANSFORMATION:
  creative-process-guide.md   (~200-250 lines, derived from TC skill rewrite)
  world-description.md        (~30 lines, derived from prohibitions.md)
  gate-runner.js              (~1,200-1,500 lines, reduced from current 2,270)

TOTAL NEW FILES TO CREATE: 3 (+ 1 rewritten skill)
```

---

## DESIGN DECISIONS AND RATIONALE

### Decision 1: Combined TC+BUILD in one window

**Why:** The builder who derives their own metaphor builds with genuine conviction. Translation loss across context boundaries (TC agent -> builder agent) was a documented problem. The Middle-tier experiment's builder (who received someone else's brief) produced PA-05 4/4, but the REFINE builder pattern (different Opus, reads conviction + artistic only) produced +1.5 PA-05 improvement in the Gas Town run. The evidence suggests that OWNING the creative vision matters more than SEPARATION of concerns.

**Risk:** Builder may allocate insufficient attention to metaphor derivation because building is also in scope. Mitigated by the creative process guide's sequential structure -- derivation happens BEFORE building begins.

### Decision 2: 5 auditors (not 2)

**Why:** The process adversarial makes a reasonable case for 2 auditors for "standard" pages. But the project's strongest evidence says otherwise: the Mode 4 PA (9 auditors) caught the whitespace void that a 2-auditor PA missed entirely. 5 auditors with 4 questions each provides strong convergence data (3+ auditors describing the same experience) at 44% less cost than 9 auditors. With the screenshot pre-capture pattern, all 5 run in parallel with zero contention.

**The compromise position:** 5 auditors is the DEFAULT. The user can explicitly request 2 for quick iterations. But the default should catch problems, not miss them.

### Decision 3: Keep the Weaver

**Why:** The Weaver's unique contribution is REFRAMING audit output as creative direction (AMPLIFY / RELEASE / DEEPEN) rather than a fix list. Without the Weaver, the REFINE builder reads auditor reports and processes them as PROBLEMS TO FIX (analytical mode). The Weaver's output activates CREATIVE engagement. For 5 auditor reports (200-400 lines total), synthesis genuinely adds value.

**The alternative (no Weaver):** Embed a reframing prompt in the REFINE builder's receiving principle. "Read the auditor reports as people describing their experience, not as problems to fix." This works but loses the Experience Portrait -- a coherent narrative of the page-as-experience.

### Decision 4: World-description (30 lines) instead of prohibitions.md (420 lines)

**Why:** The builder needs to INHABIT the world, not COMPLY with rules. "Every surface is sharp. Corners are cut, not curved." is more generative than "NEVER Use border-radius > 0 on Any Element. Why it exists: Sharp edges = decisive, confident..." The identity constraints are identical; the framing is experiential rather than prohibitive.

**What's lost:** Evidence citations, exception documentation, meta-prohibitions. The builder doesn't need to know WHY border-radius is prohibited (research provenance) -- they need to know that THIS WORLD HAS SHARP EDGES.

**What about exceptions?** The conditional prohibitions (9 through 18 in prohibitions.md) handle edge cases like 2px borders for confidence encoding. These exceptions should be in the world-description as physics: "Borders come in three weights: 4px structural, 3px accent, 1px subtle. The 2px weight is absent -- the jump from 3 to 1 is deliberate." The exception documentation is for AUDITORS, not builders.

### Decision 5: Creative process guide (~200-250 lines) not TC skill (841 lines)

**Why:** The TC skill rewrite contains excellent creative protocol buried in pipeline machinery. The builder needs:
- Phase 0: Content assessment (type, scope, sections) -- ~40 lines
- Phase 1: 4 core axes (FEEL/UNDERSTAND/DO/BECOME) + 5 extended -- ~50 lines
- Phase 2: Tension derivation (Addition test, BECAUSE test, Substitution test) -- ~40 lines
- Phase 3: Metaphor collapse (structural overlap, search heuristics, 6 rejection checks) -- ~50 lines
- Phase 3.5: Metaphor commitment (lock-in, creative check) -- ~15 lines
- Phase 4.5: Conviction brief format -- ~30 lines

Total: ~225 lines of essential creative protocol.

**What's cut:**
- Library Access Prohibition ceremony (orchestrator handles this by not loading case studies)
- Phase 4 Compositional Architecture (transition tables, pacing assessment, coherence rules) -- these are COMPOSITIONAL SPECIFICATIONS. The builder derives their own approach from the mechanism catalog.
- Phase 5 Standalone output (not relevant for sub-skill mode)
- Standalone appendix, divergence verification against case studies
- Axis interaction effects, tension landscape quick reference (nice-to-have, not essential)
- Step 4.5 "How Guardrails Survive" section (meta-justification, not operational)

### Decision 6: No exploration loading by default

**Why:** The process adversarial's strongest empirical argument: "The builder who produced the best page in this project's entire corpus did so WITHOUT reading any explorations." The mechanism catalog describes techniques. The components.css provides implementations. The builder's creative territory is the metaphor they derived from the content, not patterns they saw in someone else's work.

**What's lost:** Visual reference for unusual structural approaches (bento grid, fractal structure, island isolation). Mitigated by the mechanism catalog's CSS patterns, which show HOW each technique works even without seeing a full page implementation.

### Decision 7: One REFINE cycle default

**Why:** The Gas Town run achieved +1.5 PA-05 improvement in one REFINE cycle (2.0 -> 3.5). Diminishing returns after the first cycle. User can request additional cycles explicitly.

---

## WHAT THIS DESIGN PRESERVES

1. **Creative quality:** Metaphor derivation, conviction briefs, experiential auditing.
2. **Identity coherence:** World-description encodes identity constraints. Gate runner catches container width and font trinity programmatically.
3. **Perceptual verification:** 5 PA auditors with Section 0 cold look catch what builders cannot see (they're text agents manipulating visual output). Perception gates catch sub-perceptual CSS.
4. **Creative continuation:** REFINE builder receives conviction + reflection + Weaver synthesis. They build from the previous builder's creative state, not from scratch.

## WHAT THIS DESIGN CUTS

1. **The manifest** (1,300 lines of orchestration instructions). Replaced by a ~200-line skill.
2. **9 artifact files** and their cross-references. Content distributed into 3 files.
3. **The execution tracker.** One-cycle builds don't need multi-iteration tracking.
4. **29 gates** (from ~57 to ~28). Process-tracking, proxy structural, most BV gates stripped.
5. **524-line receiving protocol.** Replaced by 5-line principles embedded in spawn prompts.
6. **Separate TC and BUILD windows.** Combined into one context.
7. **Council verdicts, experiment protocols, value tables.** Not needed for production.
8. **Exploration loading.** Not needed when mechanism catalog + components.css provide vocabulary.
9. **6-dimension reflection.** Reduced to 3 dimensions.
10. **Multi-cycle automatic refinement.** One cycle default, user escalates.

## AGENT COUNT COMPARISON

| | Old Process | New Process |
|---|-----------|------------|
| Window 0 (Setup) | 1 | -- (merged into orchestrator) |
| Window 1 (TC) | 1 | -- (merged into Window 1) |
| Window 1 (BUILD) | 1 | 1 (combined TC+BUILD) |
| Window 2 (Gates) | 1 | orchestrator does this |
| Window 2 (PA Auditors) | 5-9 | 5 |
| Window 2 (Weaver) | 1 | 1 |
| Window 3 (Mechanical Fix) | 1 | -- (orchestrator patches CSS) |
| Window 3 (REFINE) | 1 | 1 |
| Post-REFINE evaluation | 7 | gates only (0 agents) or 5+1 |
| **Total (typical REFINE path)** | **~19** | **~8** (1 builder + 5 auditors + 1 weaver + 1 refine builder) |

---

## IMPLEMENTATION SEQUENCE

What needs to happen, in what order:

### Phase A: Create the 3 transformed files

1. **`world-description.md`** (~30 lines)
   - Source: prohibitions.md + TC skill's Side B personality spectrum
   - Method: Distill 22 prohibitions into experiential physics
   - Output: "Every surface is sharp..." style world-description + palette summary + border hierarchy + container width + font trinity

2. **`creative-process-guide.md`** (~200-250 lines)
   - Source: TC skill rewrite (SKILL-REWRITE.md)
   - Method: Extract Phases 0, 1, 2, 3, 3.5, 4.5. Strip Phase 4 compositional architecture, Phase 5, standalone appendix, library prohibition ceremony.
   - Output: Content assessment -> 4+5 axis questioning -> tension derivation (3 tests) -> metaphor collapse (search heuristics, 6 rejection checks) -> metaphor commitment -> conviction brief format

3. **`gate-runner.js`** (~1,200-1,500 lines, ~28 gates)
   - Source: existing gate-runner-core.js
   - Method: Apply gate audit results (Task #2). Strip process-tracking, proxy structural, absorbed, and most BV gates.
   - Output: Reduced gate runner with ~28 gates producing JSON results

### Phase B: Write the new /build-page skill

4. **`SKILL.md`** (~150-200 lines)
   - The thin orchestrator: 3 windows, file loading sequences, spawn prompts with embedded receiving principles, screenshot protocol, routing logic
   - References the 3 transformed files + 3 existing files + PA skill
   - No manifest, no artifact files, no execution tracker

### Phase C: Validate

5. Run the new process on 1-2 content files. Compare to old pipeline results.

---

## OPEN QUESTIONS

1. **Where should `world-description.md` live?** Options: (a) alongside prohibitions.md in `identity/`, (b) in the skill directory, (c) inline in the creative process guide. I lean toward (c) -- the world-description IS part of the creative process, specifically Phase 2's "Side B."

2. **Should `creative-process-guide.md` replace the TC skill or coexist?** If the guide IS the simplified TC, it could be the new `~/.claude/skills/tension-composition/SKILL.md`. Or it could be a separate file loaded by the /build-page skill. The standalone `/tension-composition` invocation (running TC without building) suggests the TC skill should remain separate, with the creative process guide being a subset extracted for the combined TC+BUILD window.

3. **Mechanism catalog pruning.** The pedagogical preamble (~45 lines about tier differences) should move to the creative process guide or be stripped entirely. The builder who has the creative process guide and the mechanism catalog doesn't need the catalog to explain HOW to select mechanisms -- the guide covers that.

4. **Gate runner: advisory gates.** Should advisory gates (identity soul checks, structural echo) still RUN and produce results, just not fail the build? Or should they be stripped entirely? I lean toward running them as diagnostics -- the orchestrator reports them but they don't affect routing.

5. **Post-REFINE evaluation depth.** When do you run full PA (5 auditors) after REFINE vs. gates-only? Proposal: gates-only if the Weaver verdict was REFINE (compositional polish). Full PA if the Weaver verdict was RETHINK (structural change). The user can always request full PA.

---

**END OF FIRST-PRINCIPLES DESIGN**
