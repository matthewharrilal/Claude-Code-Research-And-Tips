# Section 2: The Architecture — Fat Core

## The Evidence That Changed Everything

Before designing anything, look at the data:

| Experiment | Agents | Builder Input | PA-05 Score | Quality |
|-----------|--------|---------------|-------------|---------|
| CD-006 | 1 Opus (+ human) | ~50 lines (tokens + soul) | ~4/4 (39/40 overall) | Crown jewel |
| Middle Tier | 8 | ~100 lines (recipe) | 4/4 DESIGNED | Best pipeline result |
| Remediation | 16+ | ~300 lines (targeted spec) | 2.5/4 COMPOSED | Improved but capped |
| Flagship | 19 | ~530 lines (full recipe) | 1.5/4 FLAT | Failure |

Quality inversely correlates with two variables: the number of agents and the volume of builder input. The best pages were built by the fewest agents reading the least instruction. The worst page was built by the most agents reading the most instruction.

CD-006 -- a single Opus agent with full creative context and a conventions document -- scored 39/40. The Flagship -- 19 agents with a 530-line builder checklist, 6 programmatic gates, and months of accumulated infrastructure -- scored 1.5/4. More agents did not mean better output. More infrastructure did not mean higher quality. More rules did not mean fewer defects.

The Flagship's programmatic gates all passed. Every binary check was green. And the page was perceptually flat: zero borders, uniform typography at 16px/400 across the entire page, backgrounds differing by 1-8 RGB points (invisible to the eye), six whitespace voids of 210-276 pixels each. The pipeline produced something technically correct and visually dead.

The question became: why?

## Where Intelligence Goes to Die

The answer is handoff boundaries. Every time one agent compresses its understanding into a document for another agent to read, intelligence is lost. The Flagship had 11 boundary crossings, 4 of them destructive -- meaning they destroyed more than 35% of the compositional intelligence passing through them.

The most destructive boundary was Boundary 3: the handoff from the TC planner (the agent that deeply analyzes the content and derives a visual metaphor) to the builder (the agent that writes HTML and CSS). The TC planner spent 30-60 minutes understanding the content -- its tensions, its emotional arc, its semantic structure. Then it compressed all of that understanding into a build recipe. The builder received the recipe and followed its steps. But recipes cannot carry compositional intent. A recipe can say "use border-left 4px solid." It cannot carry WHY that border matters at that specific moment in the reader's journey, or how it relates to the metaphor governing the entire page, or why its absence at certain sections creates a rhythm that the reader feels but never notices.

The compression ratio from TC planner output to builder instruction was approximately 20:1. The intelligence survival rate was approximately 35%. The agent that understood the content most deeply never wrote a line of CSS. The agent that wrote all the CSS never read the content.

CD-006 had no such boundary. The same agent that understood the content wrote the CSS. Zero compression. Zero handoff. Zero intelligence loss at the critical creative junction. That is why it scored 39/40.

## The Fat Core Principle

The architecture that emerges from this evidence is called Fat Core. The principle is simple: put the intelligence where it will be used.

Instead of spreading compositional understanding across many agents and hoping it survives the compression at each handoff, concentrate it in one powerful agent. Instead of verifying the process (did the builder follow steps 1 through 9?), verify the output (does the page look designed?). Instead of telling the builder what to do, tell it what not to violate -- and trust it to compose.

Fat Core means: one Opus agent that both plans AND builds, surrounded by automated verification and human-caliber perceptual evaluation. The creative work happens inside one mind. The verification happens outside it, performed by agents who have never seen the content and judge only what they see.

This is the architecture of a studio, not a factory. One artist. Many critics.

## The 12 Agents

The Fat Core pipeline uses exactly 12 agents. Each has a specific role, a clear boundary of responsibility, and a defined relationship to the others.

### Agent 1: The Orchestrator

The orchestrator is the conductor. It is deliberately thin -- a traffic cop, not a creative director. It reads the content file, assembles the inputs the core agent will need, spawns agents in the correct order, runs programmatic gates between build phases, pre-captures screenshots for the perceptual audit, and routes fix instructions back to the core agent if needed.

The orchestrator does NOT understand compositional intelligence. It does not interpret the content. It does not evaluate quality. It routes artifacts between agents and runs mechanical checks. This thinness is intentional: a thick orchestrator becomes a compression engine, squeezing rich agent output into brief coordination messages. The Flagship's orchestrator coordinated 19 agents and became exactly that bottleneck. The Fat Core orchestrator coordinates 12 agents by moving files, not by interpreting them.

The orchestrator is a Sonnet agent. It needs efficiency, not creative depth.

### Agent 2: The Core Agent

The core agent is the artist. This is the critical node -- the single Opus agent that does all the creative work. It reads the raw content directly. It discovers the tensions within that content. It derives a visual metaphor (if one emerges naturally). It architects the zones. It selects mechanisms. It writes the HTML and CSS. It verifies its own cascade values.

The core agent receives approximately 230 lines of input:

- A **content brief** (~30 lines) -- what to build, for whom, the key tensions
- A **conventions brief** (~100 lines) -- perception thresholds, soul constraints, spatial rules, quality floor, and creative authority
- **tokens.css** (~65 lines) -- the exact CSS custom property values
- **prohibitions.md** (~35 lines summary) -- the 8 absolute prohibitions

This is less input than any previous pipeline experiment gave its builder. But it is structured differently. The conventions brief tells the core agent WHAT outcomes to achieve and WHAT constraints to respect. It does not tell the agent HOW to build. There are no numbered phases. No step-by-step sequence. The core agent plans its own approach based on the content.

What the core agent does NOT receive is equally important:

- No 650-line operational recipe (the recipe ceiling caps quality at 3/4)
- No mechanism catalog (the agent discovers mechanisms from the content, not from a menu)
- No research digest (pre-digested intelligence degrades to checklist compliance)
- No transition table (the agent creates its own transitions based on semantic boundaries)
- No fractal echo table (the agent discovers fractal patterns organically)

The core agent is Opus. This is non-negotiable. CD-006 was built by Opus. The Middle experiment's success used an Opus builder. The Flagship's failure used Sonnet builders. Opus holds larger compositional structures in working memory. It sees how individual rules interact and makes choices that serve the whole page, not just the current line of CSS. Sonnet complies meticulously with individual rules. Opus complies AND creates beyond the constraints.

The core agent works in four phases, self-directed:

**Phase A -- Understand.** Read the content deeply. Determine the zone count, the emotional arc, the semantic direction. If a metaphor emerges naturally, name it. If it feels forced, skip it.

**Phase B -- Plan.** For each zone: background color, typography treatment, mechanisms to deploy, transition type to the next zone. Write this plan as an HTML comment at the top of the output file.

**Phase C -- Build.** Write the HTML and CSS. Skeleton first, then soul enforcement, then zone backgrounds, borders, typography, element-level richness, accessibility. At each step: "Can I SEE this? Does this serve the semantic direction?"

**Phase D -- Prove.** Write the cascade value table. Verify that at least 3 CSS channels shift at every zone boundary. Verify perception thresholds are met.

Between these phases, the orchestrator runs programmatic gates. But the phases themselves are the core agent's to sequence and pace. The agent that understands the content writes the CSS. The boundary between understanding and execution does not exist.

### Agents 3-11: The PA Auditors

Nine fresh-eyes auditors form the perceptual verification shell. They are the critics. Each one receives screenshots of the finished page at multiple viewport widths -- and nothing else. No content brief. No build plan. No knowledge of what metaphor the core agent intended. They judge only what they see.

Each auditor answers 5-6 assigned questions from the 48-question perceptual audit protocol. The questions cover soul compliance, spatial composition, typographic hierarchy, mechanism deployment, multi-coherence, and overall design quality. The auditors work in parallel, independently, with zero communication between them.

The fresh-eyes principle is the single most validated finding in the entire project. The 9-auditor Mode 4 PA caught the Flagship's catastrophic whitespace void (all 9 auditors flagged it). A previous 2-auditor lighter PA missed it entirely. Breadth of independent perspectives is what makes perceptual audit work.

The PA auditors can be Sonnet or Opus agents. They need perceptual judgment, not creative composition.

### Agent 12: The Weaver

The weaver is the judge. It reads all 9 PA reports and synthesizes them into a single verdict: SHIP, SHIP WITH FIXES, or DO NOT SHIP. It identifies convergent findings (7/9 auditors agree = real defect) and divergent findings (2/9 agree = noise or subjective preference). It produces a ranked list of issues and, for SHIP WITH FIXES verdicts, a targeted fix list of no more than 30 lines.

The weaver is an Opus agent. Synthesis across 9 independent reports requires the ability to weigh conflicting evidence and identify patterns -- a task that benefits from Opus-level reasoning.

## The 3 Phase-Locked Gates

Between the core agent's build phases, the orchestrator runs programmatic gates. These are mechanical checks -- Playwright scripts that measure computed CSS values. They catch objective errors that no amount of creative freedom should override.

Fat Core uses 3 gates, not the 15 of the full pipeline. Fewer gates means fewer interruptions to the core agent's creative flow. CD-006 had zero gates and scored 39/40. The Middle experiment had zero intermediate gates and scored 4/4. Gates are a safety net for the Fat Core, not a control mechanism over a thin builder.

### Gate 1: Structure (after skeleton)

Runs after the core agent completes its HTML skeleton and initial CSS. Checks:

- Container width is 940-960px
- Semantic HTML landmarks are present (header, main, footer/nav)
- Skip link exists
- Heading hierarchy is valid (no skipped levels)
- Zone count is 2-5, with data-zone attributes
- Component library classes are used (at least 10 of 26)

If Gate 1 fails, the core agent receives specific, measured feedback: "Container width is 1200px. Must be 940-960px." The fix is mechanical and targeted.

### Gate 2: Styling (after CSS)

Runs after the core agent has applied backgrounds, borders, typography, and soul constraints. Checks:

- Soul properties: border-radius is 0 everywhere, box-shadow is none, no gradients
- Background delta between adjacent zones is at least 15 RGB points
- Typography zones have at least 2px font-size delta
- Letter-spacing values are at least 0.03em between zones (or 0 -- no sub-perceptual values)
- Stacked gaps at section boundaries do not exceed 108px total
- At least 1 structural border per 400px of scroll

If Gate 2 fails, the orchestrator provides measured values and specific CSS fix suggestions: "Zone 2-3 background delta is 8 RGB points. Change .zone-3 background from #FAF5ED to #F0EBE3 (delta increases to 19)."

### Gate 3: Comprehensive (final check)

Runs after the core agent completes all work including accessibility and the cascade value table. Checks everything from Gates 1 and 2 (regression prevention) plus:

- Multi-coherence: at least 3 CSS channels shift at every zone boundary
- Warm palette compliance (R >= G >= B for all background colors)
- No pure black (#000) or pure white (#FFF)
- Font trinity: only the 3 allowed font families appear
- ARIA landmarks: at least 3
- Focus styles present (2px solid outline, 2px offset)
- Reduced motion media query present
- Responsive breakpoints at 768px and 1024px
- Print styles present
- Cascade value table present as HTML comment

Gate 3 is the final programmatic check before the perceptual audit. If it passes, the orchestrator pre-captures screenshots and spawns the 9 PA auditors.

## How the Pieces Fit Together

The full sequence:

1. **User types** `/build-page content.md`
2. **Orchestrator** reads the content, prepares the content brief, spawns the core agent with the conventions brief + tokens + prohibitions
3. **Core agent** reads the content, understands it, plans zones and mechanisms, begins building HTML + CSS
4. **Gate 1** runs after skeleton -- catches structural omissions before CSS work begins
5. **Core agent** continues: backgrounds, borders, typography, element richness
6. **Gate 2** runs after styling -- catches perception threshold violations before final polish
7. **Core agent** completes: accessibility, responsive breakpoints, cascade value table
8. **Gate 3** runs comprehensive -- final regression check
9. **Orchestrator** pre-captures screenshots at 1440px and 768px viewports
10. **9 PA auditors** evaluate screenshots independently, each answering 5-6 questions
11. **Weaver** synthesizes all 9 reports into a verdict
12. If PA-05 >= 3/4: **SHIP**. If PA-05 < 3/4: route top fixes to the **same core agent** for a fix cycle (up to 3 cycles). If still failing after 3 cycles: **ESCALATE** to user.

The fix cycle is a critical detail. In the Flagship pipeline, the fix-cycle builder was sometimes a different agent from the original builder. That agent received symptoms ("whitespace void at section 4") without context ("the spacing encodes a breathing pause before the conclusion"). In Fat Core, the fix-cycle builder IS the core agent. It remembers why it chose those backgrounds, how the borders create rhythm, what the metaphor means. It can distinguish between a genuine defect and a misunderstanding of intentional design.

Total agent count: 12. Total boundary crossings: 7, none destructive. Estimated build time: 150-180 minutes. Estimated cost: $15-30.

## Why This Is Not the Flagship

The Flagship failed for specific, diagnosable reasons. Fat Core is designed to avoid every one of them.

**The Flagship had 19 agents.** Fat Core has 12, and only 1 does creative work. The other 11 are mechanical (orchestrator, gate runner) or evaluative (PA auditors, weaver). There is no creative handoff between agents. The agent that understands the content writes the CSS.

**The Flagship gave its builder a 530-line checklist.** Fat Core gives its core agent a 100-line conventions brief. The checklist told the builder WHAT to do at each step. The conventions brief tells the core agent WHAT not to violate -- and grants explicit creative authority over everything else. Section 5 of the conventions brief reads: "Your compositional judgment supersedes this document on all non-soul matters."

**The Flagship's builder received guardrails without playbooks.** The ratio of prohibitions to actionable guidance was 7.9 to 1. The builder was told what NOT to do almost 8 times more often than it was told what TO do. Fat Core's conventions brief is balanced: constraints in Sections 1-4, creative authority in Section 5.

**The Flagship separated planning from building.** The TC planner understood the content deeply, then compressed that understanding into a recipe that the builder followed mechanically. The compression destroyed 65% of the compositional intelligence. Fat Core eliminates this boundary entirely. The agent that plans IS the agent that builds.

**The Flagship used Sonnet for building.** CD-006, the crown jewel at 39/40, was built by Opus. Sonnet complies with rules. Opus complies with rules AND creates beyond them. The difference between COMPOSED (3/4) and DESIGNED (4/4) lives in the four capabilities that exist in the agent, not in any document: content-form resonance, proportional intelligence, creative surprise, and emergent coherence. These require Opus.

**The Flagship had a recipe. Fat Core has conventions.** A recipe tells the builder HOW to execute, step by step. It caps quality at its own level of specificity -- if the recipe says "use border-left 4px solid," the builder uses border-left 4px solid, even when the content demands something different. Conventions tell the builder WHAT to achieve: "structural borders encode hierarchy." The builder decides how. This is the difference between a ceiling of 3/4 (recipe) and a ceiling of 4/4 (conventions + capable agent).

The Fat Core architecture is not a theory. It is the pattern that already produced the project's best results, extracted and formalized. CD-006 was a Fat Core build before the name existed: one agent, full creative context, conventions not recipes, verified by human judgment. Fat Core systematizes that pattern with automated verification (gates) and scalable perceptual evaluation (9 PA auditors) so it works without a human in the loop.
