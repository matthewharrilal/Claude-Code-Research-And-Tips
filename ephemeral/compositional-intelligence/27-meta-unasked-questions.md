# Report 27: Unasked Questions — What This Investigation Implies But Hasn't Explicitly Asked

**Author:** Unasked Questions Explorer (Opus 4.6)
**Date:** 2026-02-19
**Sources:** PV2-PIPELINE-DIAGRAM.md, 14-MASTER-SYNTHESIS.md, tension-composition SKILL.md (structure), scale-research.md, plus full MEMORY.md context
**Task:** Identify the questions nobody asked, the assumptions nobody examined, and the blind spots in the investigation's framing

---

## SECTION 1: ASSUMPTIONS WE'RE MAKING (AND SHOULDN'T)

### Assumption A1: PV2 Is the Right Architecture

The entire investigation — 31+ tasks, 60+ agents, 900K+ lines of analysis — assumes PV2 is the destination and the question is "how do we make it work better?" But:

**What if the pipeline itself is the problem?**

PV2 is a SEQUENTIAL WATERFALL architecture: plan -> validate -> build -> verify -> fix. This is the same architecture that failed in the flagship experiment. PV2 fixes what each STAGE does but not the TOPOLOGY. Every failure in the pipeline analysis (whitespace voids, imperceptible backgrounds, uniform typography) is a failure of FEEDBACK — the builder couldn't see what they were producing through a reader's eyes. PV2 addresses this by adding verification AFTER building. But the alternative nobody examined is: what if the builder verified DURING building?

**The unasked question: Has anyone tested an iterative single-pass model where the builder renders, screenshots, evaluates, and adjusts within the same build phase?** Playwright is available. An Opus builder could render the HTML after Phase 3 (zone backgrounds), screenshot it, evaluate whether zones are visible, and adjust — all within the build step. This would eliminate the 30-45 minute Wave 2 verification for the common case.

**Why this matters:** PV2's 75-215 minute timeline is dominated by WAITING — waiting for TC to finish before building, waiting for the build to finish before verifying, waiting for verification to finish before fixing. A builder-with-eyes model could compress this to 60-90 minutes with BETTER feedback loops.

### Assumption A2: Skills Are the Right Delivery Mechanism

The tension-composition skill is 1,878 lines. The operational recipe will be ~650 lines. The perception thresholds file is ~80 lines. These all get loaded into context at different phases for different agents.

**But nobody asked: what if CLAUDE.md files work better than skills?**

Skills are invoked explicitly. CLAUDE.md files are loaded automatically on directory entry. The entire ALWAYS FLAGSHIP thesis ("every page gets maximum intensity, single path, zero classification") maps perfectly to CLAUDE.md auto-loading. Put the recipe in a CLAUDE.md file in the build directory, and the builder agent gets it automatically. No invocation, no routing, no skill dispatch overhead.

**The deeper question: Is the skill abstraction actually causing the compression problem?** The TC skill is 1,878 lines covering Floor/Middle/Ceiling/Flagship routing, but under ALWAYS FLAGSHIP, ~40% of that is dead code (tier classification, graceful degradation, Middle-tier pattern selection). The skill format preserves historical complexity that ALWAYS FLAGSHIP eliminates. A fresh CLAUDE.md written for ALWAYS FLAGSHIP would be ~60% shorter.

### Assumption A3: Multi-Agent Is Necessary

PV2 uses 4+ agents minimum: TC planner, metaphor validator, Opus builder, 9 PA auditors, PA weaver. The master synthesis endorses this topology.

**Nobody asked: what if a single Opus agent with the right 1,000 lines of context produces better results?**

CD-006 was built by a single Opus instance with a human iterating. It scored 39/40. The flagship experiment used 19 agents and scored 1.5/4. The Middle experiment used 8 agents and scored 4/4 but on simpler content. The remediation used a single Opus builder and went from 1.5/4 to 2.5/4.

Pattern: the more agents, the worse the result. The fewer agents, the better. The 39/40 crown jewel used ONE.

**The real question: Is multi-agent orchestration a solution to a problem that only exists because of multi-agent orchestration?** The "missing footer" problem — the builder couldn't ask the planner — only exists because there IS a separate planner. If a single agent reads the content, derives tensions, AND builds the HTML, there is no inter-agent communication problem because there is no inter-agent boundary.

**Counter-argument this doesn't fully answer:** The single-agent model puts TC analysis, recipe execution, AND self-verification in the same context window. Continuation bias (the LLM property that prevents self-revision) means the agent will rate its own metaphor as "structural" even when it's "announced." The fresh-eyes PA auditors exist precisely to break this bias. But: does the PA break it enough to justify the 30-45 minute overhead, or would a simple "render, screenshot, evaluate" loop within the single agent be cheaper and better?

### Assumption A4: The Design System IS the Compositional Intelligence

Every report in this investigation treats compositional intelligence as something ENCODED IN FILES — the mechanism catalog, the tokens, the recipe, the thresholds. The investigation asks "where does this encoded intelligence get lost during pipeline traversal?"

**Nobody asked: what if compositional intelligence isn't encodable?**

The scale research found: "Richness = semantic density x restraint x spatial confidence." None of these are file-encodable. Semantic density is a property of the BUILDER'S CREATIVE DECISIONS. Restraint is the ABSENCE of action. Spatial confidence is a GESTALT PERCEPTION.

CD-006 demonstrated compositional intelligence without any of PV2's artifacts. No recipe. No perception thresholds. No mechanism catalog. No operational anything. It had: an Opus instance, soul constraints, and a human who could say "the bottom half feels empty, try again."

**The unasked question: Is the design system a NECESSARY CONDITION for compositional intelligence, or is it a SUFFICIENT CONDITION that happens to correlate with it?** The soul constraints (border-radius: 0, limited palette, no shadows) FORCE semantic density by closing the toolkit. That's 22 lines of prohibitions, not 1,878 lines of skill. What if 22 lines of prohibitions + 80 lines of perception thresholds + "build something that passes the soul test and the squint test" is all that's needed?

### Assumption A5: We're Solving the Right Problem

PV2 is designed to prevent PA-05 1.5/4 (the flagship failure). It targets >= 3/4 (COMPOSED). The master synthesis acknowledges the recipe ceiling at 3/4 and doesn't address 4/4 (DESIGNED).

**Nobody asked: what if preventing 1.5/4 and enabling 4/4 require OPPOSITE architectural choices?**

Preventing 1.5/4 requires: perception thresholds, binary gates, forced sequencing, mandatory deliverables. These all CONSTRAIN the builder.

Enabling 4/4 requires: compositional fluency, metaphor-driven architecture, intentional restraint, cognitive choreography. These all LIBERATE the builder.

PV2 stacks constraints to prevent failure. But the constraint stack may itself prevent greatness. The recipe tells the builder WHAT to do at each phase. A builder following a recipe produces COMPOSED (3/4) output — competent, hierarchical, differentiated. It does not produce DESIGNED (4/4) output — intentional, surprising, where the whole exceeds its parts.

**The question nobody asked: What would a pipeline look like that was designed FROM FIRST PRINCIPLES to produce 4/4, rather than designed from failure analysis to prevent 1.5/4?**

---

## SECTION 2: QUESTIONS NOBODY ASKED

### Q1: What's the MINIMUM viable pipeline?

Not PV2. Not the master prompt. The absolute bare minimum that reliably produces PA-05 >= 3/4.

My hypothesis: **42 lines.**

```
1.  Read prohibitions.md (22 lines)
2.  Read perception-thresholds.md (80 lines, but the table is ~20 lines)
3.  Single Opus builder instruction:
    "Build an HTML page for this content.
     - Container: 940-960px
     - Backgrounds: adjacent zones differ by >=15 RGB
     - Typography: 3 zones (display/body/detail), >=2px delta
     - Borders: at least 3 structural borders (4px solid)
     - Components: use at least 3 component types
     - Accessibility: skip link, ARIA landmarks >=3, focus styles
     - Can you SEE zone boundaries without borders? If not, fix them."
4.  Render, screenshot, evaluate. Fix if needed.
```

Nobody has tested this. The contrarian's 230-line alternative is in the right direction but still over-specified. What if the minimum is a single-page instruction sheet?

**Why this matters:** If the minimum produces 3/4, then PV2's additional ~1,600 lines are addressing the margin from 3/4 to... 3/4 (the recipe ceiling). The complexity provides no uplift beyond what the minimum achieves.

### Q2: Can You Test Compositional Intelligence WITHOUT Building a Full Page?

Every experiment in this project (Phase D validation, Middle experiment, Ceiling experiment, Flagship experiment) takes 2-6 hours and produces ONE data point. N=2 after 4 experiments.

**Nobody asked: is there a UNIT TEST for compositional intelligence?**

Proposal: Ask an Opus agent to produce a SINGLE SECTION (not a page) in 5-10 minutes. Screenshot it. Evaluate PA-05 on that section. If a single section can achieve "feels DESIGNED," the compositional intelligence exists in the builder. If not, no amount of recipe will produce it at page scale.

**The micro-experiment:** Give 3 Opus agents the same 200-word content section and ask each to build it with only prohibitions.md. Compare the 3 outputs. If they diverge significantly and one feels notably richer, that's evidence that builder creativity is the variable, not pipeline engineering.

### Q3: Can You Separate LEARNING Compositional Intelligence from DEPLOYING It?

The TC skill asks the builder to DERIVE tension from content in real-time. But tension derivation is a LEARNABLE SKILL. A builder who has done it 10 times will do it better than one doing it for the first time.

**Nobody asked: should the pipeline train the builder before deploying it?**

Concretely: before the builder starts Wave 1, give it 3 examples of excellent compositions (CD-006, DD-006, and the Middle experiment output) with brief annotations explaining WHY each works. Not as templates to copy, but as demonstrations of what "DESIGNED" looks like. This is few-shot prompting applied to composition.

The TC skill currently prohibits library access until Phase 5 to prevent pattern-matching. But there's a difference between "here are templates, copy one" and "here are examples of QUALITY, internalize the standard." The prohibition conflates these two.

### Q4: What Happens When the Content Doesn't Have a Natural Metaphor?

The TC skill has an "Addition Test" that fast-exits to FLAT mode for content without genuine tension. But FLAT mode is barely specified — "zones + recipe, no metaphor." Under ALWAYS FLAGSHIP, every page gets maximum intensity. What does "maximum intensity" mean for an API reference with zero narrative tension?

**Nobody asked: what does a DESIGNED API reference look like?**

The tier model classifies API references as Floor (skip pipeline, use Track 1). But ALWAYS FLAGSHIP eliminates Floor. So the pipeline will attempt to derive tensions from `GET /users/:id → Returns user object`. What metaphor bridges "the reader needs to find the right endpoint" and "the system demands editorial elegance"?

This isn't hypothetical. If the pipeline gets deployed, 10-20% of content will be low-tension reference material. The current architecture forces them through the full TC pipeline, which will either produce forced metaphors (the exact problem that created "geological intentionality") or immediately fast-exit, making the first 30-60 minutes of TC analysis pure waste.

**The question: Should ALWAYS FLAGSHIP mean "always the SAME pipeline" or "always the highest QUALITY achievable for this content type"?** These are different things. The first forces API docs through metaphor derivation. The second might mean API docs get a specialized reference-page recipe that skips TC entirely.

### Q5: What If the User's Content Is Wrong?

The entire pipeline assumes the input markdown is well-formed, appropriately scoped, and suitable for a single-page composition. Nobody asked: what if the content is 15,000 words that should be 3 pages? What if the content has no headings? What if the content contradicts itself? What if the markdown has broken formatting?

**The pipeline has no content quality gate.** It has a metaphor quality gate (Wave 0.5), a build plan quality gate (Wave 0.9), and a build quality gate (Wave 2). But no gate asks: "Is this content suitable for composition?"

**Why this matters:** Garbage in, garbage out. The most sophisticated recipe in the world cannot produce a DESIGNED page from content that is structurally incoherent. Content quality assessment should arguably be Phase -1.

---

## SECTION 3: BLIND SPOTS IN THE INVESTIGATION

### Blind Spot B1: Interaction Effects Are More Important Than Individual Dimensions

This investigation traces 5 scales and 6 channels separately. 11 individual reports asking "where does X get lost?" But the master synthesis's own finding C-02 (perception thresholds) shows that compositional intelligence is about INTERACTION: backgrounds + typography + borders + spacing all shifting together at zone boundaries (multi-coherence).

**Nobody asked: is there a COMBINATORIAL EXPLOSION problem?**

6 channels with 5 scales = 30 individual traces. But the actual number of INTERACTIONS is C(6,2) * 5 = 75 (pairwise channel interactions at each scale) plus C(6,3) * 5 = 100 (triple interactions) plus... The number of ways channels can interact across scales is enormous. Tracing each channel independently misses the interactions that CREATE compositional intelligence.

**The specific blind spot:** The cascade value table (required Phase 8 deliverable) measures 7 CSS properties at every boundary. But it measures them INDEPENDENTLY. It doesn't measure whether the COMBINATION of changes creates a coherent transition or a jarring one. A transition where background, typography, and spacing all shift by the minimum threshold might feel DESIGNED or might feel like 3 random changes happened at the same point. The difference is RELATIONSHIP between the shifts, not the shifts themselves.

### Blind Spot B2: Who Maintains the Gates?

The complexity ratchet is a documented principle in this project. Rules only accumulate, never retire. PV2 has 12 programmatic gates. This investigation proposes adding more (sub-perceptual prevention, content quality). The operational recipe has 9 phases with mandatory checkpoints.

**Nobody asked: what happens in 6 months when these gates need updating?**

Gates encode assumptions. SC-09 (background delta >= 15 RGB) assumes warm cream backgrounds. What if a future project uses a dark theme? SC-11 (font-size delta >= 2px) assumes 16-18px body text. What if accessibility requirements push to 20px base? SC-10 (stacked gap <= 108px) was derived from ONE set of experiments.

**The maintenance question nobody asked:** Every gate has an EXPIRATION DATE when its underlying assumption changes. The pipeline has no mechanism for identifying when a gate's assumption has been invalidated. Gates will accumulate, some will become wrong, builders will encounter impossible-to-satisfy gate combinations, and the response will be to add MORE gates to handle the exceptions. This is the complexity ratchet in action.

**Proposal that nobody made:** Every gate should have a documented ASSUMPTION and a SUNSET CONDITION. "SC-09 assumes warm cream backgrounds. If base background changes to L < 50, this threshold must be recalibrated." The anti-reproduction protocol mentions a sunset protocol, but it's for the analysis, not for the gates themselves.

### Blind Spot B3: The Skill Format Itself May Be a Constraint

The TC skill is 1,878 lines of PROSE that an LLM reads, interprets, and follows. This is the same format as the master prompt that failed (963 lines). The operational recipe will be ~650 lines of prose that a builder reads and follows.

**Nobody asked: is prose the right format for machine instructions?**

LLMs are continuation machines. They predict the next token based on context. When a 650-line recipe says "Phase 3: Set backgrounds with >= 15 RGB delta," the LLM PREDICTS what a builder following that instruction would write. But the instruction is AMBIGUOUS — "set backgrounds" could mean 100 different things. The recipe reduces ambiguity with examples ("if zone 1 = #fefcf3, zone 2 must be <= #efece4"), but examples are also prose that must be INTERPRETED.

**The alternative nobody proposed: what if the recipe were CODE, not prose?**

```javascript
// Phase 3: Zone Backgrounds
for (let i = 1; i < zones.length; i++) {
  const delta = rgbDelta(zones[i].bg, zones[i-1].bg);
  assert(delta >= 15, `Zone ${i} bg too similar to zone ${i-1}`);
}
```

This is unambiguous. It can be EXECUTED, not interpreted. The gate runner already does this for verification. Why not for specification? Instead of "set backgrounds with >= 15 RGB delta," give the builder a function that VALIDATES their choices in real-time.

The investigation's Task #15 (YAML/Structured Gate Architecture) touches this, but frames it as a GATE concern. The deeper question is whether the ENTIRE recipe should be structured data rather than prose.

### Blind Spot B4: The Human Is Missing

The fire-and-forget model eliminates the human from the build loop. PV2 explicitly says: "User walks away and comes back in 2-4 hours." This is presented as a feature.

**Nobody asked: is removing the human from the loop actually an improvement?**

CD-006 (39/40) was built with human iteration. The human could say "the bottom looks empty" and the builder could adjust. PV2 replaces the human with 9 PA auditors who produce a report that feeds a fix loop. But the PA auditors evaluate AFTER the full build, not during it.

**The question: what if the optimal pipeline keeps the human in the loop at exactly ONE critical juncture?**

Specifically: after Wave 0 (TC planning), before Wave 1 (building), show the user the build plan and ask "does this capture your intent?" This adds 5 minutes of human review and prevents the entire category of failure where TC derives tensions that don't match what the user wanted. Under fire-and-forget, a bad build plan wastes 90-150 minutes of builder time. Under human-at-plan-review, it wastes 5 minutes.

The project explicitly rejects this ("The user is fire-and-forget. Agent approvals replace user approvals.") But the rejection is an ASSUMPTION, not a finding.

### Blind Spot B5: We're Designing for Research Content, Not Real Content

Every experiment in this project uses design system research content — meta-content about design itself. The RESEARCH-SYNTHESIS content that PV2 will first be tested on is literally about the design system's own findings.

**Nobody asked: does the pipeline work on content that DOESN'T know what a "mechanism" or "tension" or "zone" is?**

When the TC skill derives tension from research content, the content itself provides vocabulary for the derivation ("this content discusses density dimensions, visual hierarchy, spatial zones..."). The content IS the domain. The metaphor can be self-referential.

When the TC skill encounters a blog post about cooking, a legal brief, or a startup pitch deck, it must derive tension from content that has NO relationship to design vocabulary. The questioning axes (FEEL/UNDERSTAND/DO/BECOME) will produce different results. The Addition Test will encounter genuine tensions that the design system has never seen.

**The blind spot:** Every "validated" result (Middle 4/4, Remediation 2.5/4) is on content that is MAXIMALLY FAVORABLE to the pipeline because the content is about the pipeline's own domain.

---

## SECTION 4: META-QUESTIONS

### Meta-Q1: At What Point Does Pipeline Sophistication Become an Obstacle to Quality?

Gate 6 (meta:output ratio) is at infinity:1. This investigation adds to the meta side. The master synthesis says "CODIFY, BUILD, TEST — stop analyzing." Then spawns 31 more analysis tasks.

**The honest question: has the analysis already passed the point of diminishing returns?**

Evidence that it has:
- The core insights were identified by the FIRST 11 research agents (richness + rigidity research). Everything since has refined, validated, and elaborated — but the tier model, recipe vs checklist finding, and perception threshold discovery were all in the first round.
- The Middle experiment (4/4) was built BEFORE the ceiling, flagship, dissection, retrospective, remediation, and pipeline analysis teams. Success preceded 90% of the analysis.
- Each subsequent team produces MORE lines of analysis but FEWER novel insights per line.

Evidence that it hasn't:
- The flagship experiment FAILED, and the failure analysis (dissection + retrospective) identified 7 NEW root causes not in the original research.
- The remediation proved that recipe format + specific CSS values produce measurable improvement.
- The PV2 architecture resolves 13/14 BLOCKING failures, a result that required systematic tracing.

**My assessment:** The analysis passed the INSIGHT threshold somewhere around the remediation audit (12 agents). Everything after that is ENGINEERING — mapping insights to implementation. The engineering is necessary but should take 10% of the time, not 300%.

### Meta-Q2: Is There a Complexity Budget?

The project tracks meta:output ratio but doesn't have a COMPLEXITY BUDGET. How many gates is too many? How many recipe phases is too many? How many PA auditors is too many?

**Proposal:** The complexity budget should be proportional to the number of FAILURE MODES it prevents. Each gate prevents one or more failure modes. If a gate prevents a failure mode that has never been observed, it's speculative complexity. If a gate prevents a failure mode that occurred in 2/2 experiments, it's essential complexity.

Current state:
- SC-01 (container width): ESSENTIAL (4/5 Phase D pages failed this)
- SC-02 (soul properties): ESSENTIAL (flagship had violations)
- SC-09 (background delta): ESSENTIAL (flagship had 1-8 RGB, invisible)
- SC-10 (stacked gap): ESSENTIAL (flagship had 210-276px voids)
- SC-11 (font-size zones): ESSENTIAL (flagship had all 16px/400)
- SC-12 (zone count): MODERATE (never violated in experiments)
- SC-06 (ARIA landmarks): NICE-TO-HAVE (accessibility, not composition)
- SC-07 (skip link): NICE-TO-HAVE (accessibility, not composition)
- SC-08 (component library): MODERATE (flagship had 3/26, target >=10/26)

Under a complexity budget, NICE-TO-HAVE gates would be advisory, not blocking. This reduces the builder's constraint surface without compromising compositional quality.

### Meta-Q3: What Would We Do Differently If We Knew This Investigation Would Fail?

"Fail" meaning: PV2 gets codified, built, tested, and produces PA-05 2.5/4 — the same as the remediation, not the projected 3-3.5/4.

**If PV2 fails, the pipeline thesis is falsified.** Recipe + thresholds + gates + 9 PA auditors = the same result as recipe + thresholds + 1 Opus builder. The entire verification/fix loop architecture adds nothing.

**What would we do differently?**

1. **Test the minimum first.** Before codifying 1,605 lines, test the 42-line version (Section 2, Q1 above). If it produces 2.5/4, the recipe is doing the work and everything else is overhead.

2. **Test builder selection.** Run the same recipe with Sonnet vs Opus vs Opus-with-examples. If Opus-with-examples hits 3.5/4 and Opus-without-examples hits 2.5/4, few-shot prompting is worth more than all of PV2's verification architecture.

3. **Test iterative building.** Give an Opus builder the recipe + Playwright + "render and screenshot after each phase, adjust if you can't see the zones." If this produces 3/4, the PA auditor architecture is unnecessary.

Each of these experiments takes 2-4 hours. All three could run in parallel in one afternoon. They would resolve the 3-variable confound that the master synthesis acknowledges is unresolved.

### Meta-Q4: What If the Answer Was Always "Opus + Constraints + Iteration"?

The scale research found: "Constraint pressure hypothesis: DD-006 and CD-006 aren't rich because they're fractal. They're rich because the KortAI soul closes 60% of the design toolkit, forcing every remaining channel to carry meaning."

The flagship retrospective found: "Sonnet-for-builders is unexamined. Opus complies AND creates beyond constraints."

The remediation proved: recipe format + Opus builder + specific CSS values = measurable improvement.

**What if compositional intelligence is an EMERGENT PROPERTY of Opus operating under soul constraints, and the pipeline's job is simply to create the conditions for emergence rather than prescribe the outcome?**

Under this framing:
- The recipe tells the builder WHAT to build (phases, sequence, specific values). This is PRESCRIPTION.
- The soul constraints tell the builder WHAT NOT to build (border-radius: 0, no shadows, limited palette). This is CONSTRAINT.
- The perception thresholds tell the builder WHAT MUST BE VISIBLE (>=15 RGB, >=2px, >=0.5px). This is STANDARD.

CONSTRAINT + STANDARD + OPUS may be sufficient. PRESCRIPTION may be unnecessary or even counterproductive (the recipe ceiling at 3/4).

**The ultimate unasked question: Is PV2's recipe a CRUTCH that prevents the builder from reaching 4/4, or a SCAFFOLD that enables the builder to reliably reach 3/4?**

If scaffold: keep it, accept the ceiling, accept that 4/4 requires human iteration.
If crutch: remove it, trust Opus + constraints + standards, and accept higher variance with higher ceiling.

---

## SECTION 5: THE DEEPEST QUESTION

All of the above circles around one fundamental question that this investigation has never explicitly asked:

**Is "compositional intelligence" a property of the SYSTEM (files, skills, recipes, gates) or a property of the BUILDER (Opus's creative capacity operating under constraints)?**

If it's a property of the system, then PV2 is the right approach: encode it better, route it more effectively, verify it more rigorously.

If it's a property of the builder, then the entire 900K-line analysis is solving the wrong problem. The right problem is: "How do we select and brief a builder agent so that its inherent compositional intelligence can flourish within our constraints?"

CD-006 suggests builder. The flagship experiment suggests system (wrong system = bad output). The remediation suggests both (better system + same builder = better output).

The answer is almost certainly BOTH. But the ratio matters enormously. If it's 80% builder / 20% system, PV2 is over-engineering the 20%. If it's 20% builder / 80% system, PV2 is correctly engineering the 80%.

**Nobody has tested this ratio.** The cheapest test: give the same builder TWO prompts — one with the full recipe, one with just constraints + standards + "build something that feels designed." Compare the outputs. If the constraint-only version is within 0.5 PA-05 points, the recipe is doing less than we think.

---

## SECTION 6: WHAT THIS INVESTIGATION SHOULD DO NEXT (THAT IT WON'T)

1. **Kill the investigation.** Not pause. Kill. The master synthesis already says "CODIFY, BUILD, TEST." This report says the same thing from a different angle. Every additional analysis agent adds to Gate 6 without adding proportional insight.

2. **Run 3 micro-experiments before codifying.** Total time: one afternoon.
   - Experiment A: Minimum viable prompt (42 lines) + Opus builder
   - Experiment B: Full recipe + Opus builder (no PA, no gates)
   - Experiment C: Full recipe + Opus builder + render-screenshot-evaluate loop during build

   These isolate: Is the recipe necessary? Are external verifiers necessary? Is self-verification during build sufficient?

3. **Test on non-research content.** Use a cooking blog post, a legal brief, or a product changelog. If PA-05 drops to 2/4, the pipeline is content-specific. If it stays at 3/4, it generalizes.

4. **Accept the recipe ceiling.** 3/4 is COMPOSED. It's good. It's better than 1.5/4. Stop trying to engineer 4/4 through pipeline architecture. 4/4 requires either human iteration or builder creative capacity that can't be prescribed.

5. **Stop measuring meta:output ratio.** Gate 6 is a self-referential trap. Measuring the ratio requires analysis. Analysis increases the ratio. The only way to improve it is to STOP MEASURING and START BUILDING.

---

## SUMMARY: THE 10 MOST IMPORTANT UNASKED QUESTIONS

| # | Question | Why It Matters |
|---|----------|---------------|
| 1 | Is compositional intelligence a system property or a builder property? | Determines whether PV2 is solving the right problem |
| 2 | What's the minimum viable pipeline? | Might be 42 lines, not 1,605 |
| 3 | Can a builder self-verify during building (render+screenshot+evaluate)? | Could eliminate the 30-45 min Wave 2 verification |
| 4 | Does the pipeline work on non-research content? | All evidence is N=2 on maximally favorable content |
| 5 | Is the recipe a scaffold or a crutch? | Scaffold accepts 3/4 ceiling; crutch means removing it enables 4/4 |
| 6 | What does "maximum intensity" mean for low-tension content? | ALWAYS FLAGSHIP forces API docs through metaphor derivation |
| 7 | Who maintains the gates in 6 months? | Complexity ratchet applies to verification, not just rules |
| 8 | Should the human be at ONE critical juncture? | 5 min of human review at plan stage might prevent 90+ min of wasted build |
| 9 | Is there a unit test for compositional intelligence? | Current experiments are 2-6 hours for 1 data point |
| 10 | What if Opus + constraints + iteration is the whole answer? | CD-006 suggests this. No experiment has isolated it. |

---

**END OF REPORT 27**

**Key verdict:** This investigation's biggest blind spot is that it treats compositional intelligence as an ENCODING PROBLEM (how to compress research into skills/recipes/gates) rather than an EMERGENCE PROBLEM (how to create conditions for Opus to produce rich compositions). The evidence is mixed but leans toward emergence: CD-006 emerged, the flagship was over-encoded, the remediation improved by giving ONE builder MORE context. PV2 may be architecturally sound but philosophically misoriented — encoding the WHAT (specific CSS values) when it should be encoding the WHY (what makes a composition feel designed) and trusting the builder with HOW.
