# Adversarial Review: Maximum Effort Architecture

**Date:** 2026-03-03
**Reviewer:** Adversarial Review Agent (Task #2 / Task #6)
**Target:** `05-maximum-effort-architecture.md` (812 lines, $150-200 builds)
**Sources:** All 4 Wave 1 research reports, builder constraint audit (74 constraints), exploration process reconstruction, maximum effort architecture
**Method:** Systematic attack across 10 vectors with failure scenario modeling, risk ranking, mitigation proposals, "what if wrong" scenario, and minimum viable alternative

---

## ATTACK VECTOR 1: THE "FALLS IN LOVE" ASSUMPTION

### The Specific Failure Scenario

The architecture spends $120 above the $30 pipeline to produce a cognitive state -- content-topology formation -- that may not be TRANSFERABLE between agents or PRODUCIBLE in a single 4-hour session.

**Problem 1A: Accumulated context vs single-session depth.** The exploration era's crown jewels sat atop 88+ prior findings, 337 research findings, and 24 prior explorations. CD-006's builder didn't just learn about hub-spoke layouts from a document -- it existed in a multi-month ecosystem where hub-spoke was a proven concept across stages DD, OD, and AD. The maximum effort architecture gives the builder a 200-400 line `_refined-topology.md`. This is a DESCRIPTION of content-topology formation by a separate agent, not topology formation IN the builder. Reading someone else's love letter doesn't produce the same emotion.

**Problem 1B: First-run builders have no muscle memory.** Exploration builders built sequentially -- DD-001 through DD-006. Each later builder inherited conventions and CSS patterns from earlier builds. By CD-006, the builder had access to 24 prior HTML files. The maximum effort builder starts cold. It has never built a hub-spoke layout. The curated research shows CSS examples, but READING about `grid-template-columns: 1fr 1.618fr 1fr` is categorically different from HAVING BUILT IT.

**Problem 1C: Human direction was present in the exploration era.** A human operator chose which content to explore, evaluated intermediate results, redirected teams when output was unsatisfactory, and selected crown jewels for maximum investment. The maximum effort architecture is fully automated. The orchestrator has no taste.

**Problem 1D: The "involuntary onset" paradox.** The cognitive mechanism definition (document 02) says the state has "involuntary onset" and "emerges from sufficient exposure to content without procedural distraction." But the architecture DESIGNS for this state -- Phases 3 and 4 are explicitly structured to produce it. Can you engineer an involuntary state? If you tell an agent "your job is to fall in love with the content," does it fall in love or does it perform the appearance of love? The distinction matters: genuine topology formation produces UNPROMPTED spatial inventions (pattern-echo grids, wave visualizations). Performed topology formation produces the spatial decisions the topology document specified.

### Likelihood: MEDIUM-HIGH
### Impact: HIGH ($150 spent for output that is marginally better than a $50 reformed pipeline)

### Mitigation
**M-1A: Merge Phases 3+4+5 into a single agent.** Eliminate the transfer problem entirely. One Opus agent reads the content (immersion), forms its own hypothesis (discovery), and builds (creation) -- all within one context window. The curated research and convention spec are REFERENCE inputs, not the primary frame. The agent's primary input is the article itself.

**M-1B: If separate phases are kept, reverse Phase 5's input order.** Content markdown FIRST. The builder forms its OWN initial spatial impression. THEN the topology document arrives as a "second opinion" to compare against, not as a blueprint to implement. This reduces anchoring.

---

## ATTACK VECTOR 2: THE ATTENTION RATIO INVERSION

### The Specific Failure Scenario

The architecture kills 42 of 74 constraints, including "build vertical first" (C-06), deployment quotas (A-09), structural caps (A-01/A-04), and all cultural signals (D-01 through D-14). What fills the vacuum?

**Problem 2A: Killed constraints that are load-bearing.** C-06 ("build vertical first") exists because building structure-first and FAILING at responsive means starting over. The architecture's builder has NO responsive fallback. If BUILD-1 creates a magnificent hub-spoke layout that breaks at 768px, the 40-minute build is compromised. The evaluators (Phase 6) will catch this, but $30 was already spent to discover a responsive failure that C-06 would have prevented for free.

B-01/B-02 ("no mechanism invention") were over-inclusive but SAFE. Without them, the builder can deploy ANY CSS technique -- including techniques that subtly conflict with soul constraints (e.g., `filter: drop-shadow()` as a `box-shadow` workaround, or `outline` mimicking `border-radius`). The soul constraints are 5 lines; the ways to creatively circumvent them are infinite.

**Problem 2B: The builder may produce chaos, not creativity.** "Deploy 10+ findings" forced breadth. Without it, a builder who IS "in love" may spend 40 minutes on spatial reasoning and produce a page with magnificent structure but ZERO textural richness -- no border treatments, no typography variation, no density rhythm. The current pipeline's quotas are dumb but they ensure breadth. The maximum effort architecture assumes the builder will self-allocate attention without prompting. Opus may do this well. But "may" is not "will."

**Problem 2C: Convention spec as "reference" means "unread."** Exploration builders received 822-line convention specs AND they were embedded in a multi-week ecosystem that reinforced convention compliance through auditing. The maximum effort builder receives a 200-350 line spec as one of 6 input files. Will it read a 300-line reference document at minute 15 of a 40-minute creative session? Or will it skim the first 20 lines and build from memory? The current pipeline's approach -- embedding constraints into the builder prompt -- is annoying but ensures the builder SEES them.

### Likelihood: MEDIUM
### Impact: MEDIUM (fixable through iteration, but each fix cycle costs $30-40)

### Mitigation
**M-2A: Add responsive stress testing to BUILD-1 prompt.** One sentence: "Every non-vertical spatial layout MUST include a `@media (max-width: 768px)` block. Verify before proceeding. If a layout breaks at 768px, simplify it." This is not "build vertical first" -- it is "verify responsive as you build."

**M-2B: Add a minimal breadth floor.** Three lines in the BUILD-1 prompt: "Your page should have: (a) at least 3 distinct zone backgrounds with delta >= 15 RGB points, (b) at least 2 meaningful border treatments, (c) at least 2 hover/transition states. These are FLOORS, not targets -- they prevent blind spots." This costs 3 lines of prompt attention and prevents the builder from spending 100% of CSS budget on spatial structure.

**M-2C: Make the convention spec a CHECKLIST the builder must confirm.** Not embedded constraints, not a reference file -- a 10-item checklist at the END of the builder prompt: "Before submitting your HTML, confirm: (1) border-radius: 0 everywhere (2) box-shadow: none (3) no gradients (4) no semi-transparent backgrounds (5) container width 940-960px (6) no 2px borders (7) responsive at 768px (8) skip link present (9) ARIA landmarks present (10) Google Fonts linked." Takes 10 seconds to verify, catches the most common violations.

---

## ATTACK VECTOR 3: THE IMMERSION PHASE

### The Specific Failure Scenario

Phase 3 (30 min, $8) is positioned as "THE KEY PHASE." But the immersion agent may produce GENERIC spatial hypotheses rather than the SPECIFIC structural insights that generated exploration-era inventions.

**Problem 3A: Generic spatial categorization.** The immersion prompt provides 5 example categories: synthesize -> hub-spoke; compare -> side-by-side; progress -> spiral; independent items -> bento; demonstrate -> self-referential. These examples CONSTRAIN the agent to pre-defined categories. The exploration era's best spatial inventions did NOT fall into categories: AD-006's pattern-echo grid (a CSS minimap of the page's own axis patterns), OD-005's wave bar chart (a visualization of the page's density rhythm), CD-006's transition grammar (spacing proportional to cognitive distance between adjacent patterns). None of these are "comparison -> side-by-side." They are INVENTIONS that required noticing SPECIFIC structural properties the content had.

The immersion prompt asks for "argument structure" and "spatial implications" -- but it does not ask: "What is STRUCTURALLY UNIQUE about this article that no standard layout pattern captures?" This is the question that generates AD-006-level inventions. The omission channels the agent toward categorization rather than invention.

**Problem 3B: Insufficient processing time.** The $8 cost implies ~30 minutes of Opus processing. The agent must: read the article (5-10 min), read the TC brief (2-3 min), read curated research (5-10 min), form hypotheses (5-10 min), write 200-400 lines of output (5-10 min). That leaves AT MOST 10 minutes of pure spatial hypothesis formation. The mechanism definition says the state requires "sufficient duration" for "semantic saturation." Is 10 minutes sufficient?

**Problem 3C: The principal-agent transfer problem.** The immersion agent forms a topology. The builder implements it. But the "falls in love" state is defined by "persistence" and "loyalty" -- the topology resists being overridden. If the topology forms in Agent A and is transferred to Agent B via document, Agent B has not formed a persistent state. Agent B has READ ABOUT a state. The builder's relationship to the topology document is that of an IMPLEMENTER, not an EXPLORER. The prompt says "trust is not obedience" -- but after reading a 300-line carefully-argued spatial plan, deviating requires conviction the builder may not have, especially in the first 15 of 40 minutes.

### Likelihood: HIGH (this is the most probable failure mode)
### Impact: MEDIUM-HIGH (output is better than pipeline but falls short of exploration quality)

### Mitigation
**M-3A: Merge Phases 3+4+5 into a single agent (same as M-1A).** The strongest mitigation. The topology forms in the agent that writes CSS. No transfer problem. No document-mediated love.

**M-3B: If phases stay separate, add "invention prompts" to Phase 3.** Beyond the 5 standard categories, add: "What is UNIQUE about this article's structure that no standard layout pattern addresses? If you could create ONE component that only makes sense on this specific page, what would it be? Where does this article reference or demonstrate its own subject matter?" These prompts generate AD-006-level observations, not just spatial categorizations.

**M-3C: Add a "builder independence" metric.** Track how much the final CSS deviates from the topology document's specific proposals. If the builder implements the topology EXACTLY as written, flag it. Genuine "in love" output ADDS things the topology didn't specify -- self-referential components, content-mapped color semantics, spatial inventions that emerge during building. Zero deviation = implementation, not love.

---

## ATTACK VECTOR 4: THE COST QUESTION

### The Specific Failure Scenario

$150-200 is 5-7x the current pipeline. The marginal quality per dollar may not justify the premium, especially when cheaper reforms could capture most of the improvement.

**Problem 4A: Diminishing returns on evaluation.** Three evaluation phases ($12 + $18 + $10 = $40). Phase 10 re-scores what Phase 8 already scored. If BUILD-3 successfully addressed the Evaluate-2 feedback, Phase 10 confirms this -- it is a $10 verification, not a $10 discovery. Two evaluations ($30) would produce 90% of the signal three evaluations ($40) produce.

**Problem 4B: Optional deepening cycles are a cost trap.** The architecture says deepening cycles cost $30-80 each, triggered "if scores are low." But who defines "low"? No threshold is specified. A conservative orchestrator triggers deepening on every build (pushing ALL builds to $194+). An aggressive orchestrator never triggers it. There is no decision protocol.

**Problem 4C: Immersion may be partially redundant.** Phase 3 ($8) and Phase 4 ($6) = $14 for pre-builder content analysis. But BUILD-1 ALSO reads the article. The builder's own content engagement during the 40-minute build may discover what the immersion agent discovered. If so, $14 of the immersion investment is redundant.

**Problem 4D: The $0 reform hypothesis.** What if simply removing the 42 killed constraints from the EXISTING $30 pipeline -- giving the builder article-first reading, no vertical-first mandate, no structural cap -- produces 3-5/10 without spending an additional dollar? If so, the first $0 of reform gets you from 0/10 to 3-5/10, and the next $120-170 gets you from 3-5/10 to 7-8/10. The marginal cost per quality point is much worse than the architecture implies.

### Likelihood: MEDIUM
### Impact: HIGH (cost overruns could make the architecture economically unjustifiable)

### Mitigation
**M-4A: Eliminate Phase 10.** Use Phase 8's weaver synthesis as the final scorecard. A single compliance-check agent ($3-4) post-BUILD-3 catches regressions. Saves $6-7.

**M-4B: Define explicit deepening triggers.** "Trigger ONE deepening cycle if falsifiable criteria < 5/10 OR weaver identifies 3+ GAP items. Trigger a SECOND only if the first raised scores by < 2 points. NEVER trigger a third -- if two cycles haven't worked, more spending won't fix it."

**M-4C: Test the $0 reform first.** Before committing $150-200, run the current pipeline with 3 changes: (1) builder reads article first, (2) no vertical-first, (3) no structural cap. If this produces 3-5/10, the incremental value of the full architecture is quantified. If it produces 0-1/10, the full architecture is justified.

---

## ATTACK VECTOR 5: THE EXPLORATION ERA RECONSTRUCTION

### The Specific Failure Scenario

The architecture claims to replicate the exploration era's conditions. It does not replicate three critical factors.

**Problem 5A: No human direction.** The exploration process reconstruction shows human operators chose content, evaluated intermediate results, and redirected teams. The architecture is fully automated.

**Problem 5B: No cross-build accumulation.** This is not a nice-to-have. OD-005's builder used hub-spoke because it had SEEN DD-006's fractal patterns. CD-006's builder used transition grammar because it had SEEN AD-006's spatial variation. Each builder INHERITED a visual vocabulary from prior builds. The maximum effort builder inherits nothing. It reads exploration HTML as reference, but reading a 2,000-line file is not the same as having BUILT with the same techniques.

**Problem 5C: 149 agents vs 21-29 agents.** OD alone had 149 agents across 6 waves. The knowledge that fed each crown jewel builder was MANUFACTURED by this ecosystem. The maximum effort architecture has 4 knowledge-manufacturing agents (Phase 2's 3 curators + Phase 3's 1 immersion agent) vs the exploration era's 50+ knowledge agents across multiple waves.

**Problem 5D: Weeks vs hours.** The exploration era spent weeks per stage. Convention specs evolved between waves (468 lines in OD, 822 in AD, 822+ extended in CD). Findings accumulated. Builders improved. None of this happens in 4 hours.

### Likelihood: HIGH (the accumulated knowledge gap is structural)
### Impact: MEDIUM (6-7/10 is still massive improvement over 0/10)

### Mitigation
**M-5A: Accept the gap. Target 6-8/10, not 10/10.** Frame the architecture honestly: "maximum-effort SINGLE BUILD." It is not a replacement for the exploration era's multi-week ecosystem. It is the best single-session build achievable.

**M-5B: Build accumulation as a separate project.** After each build, extract the 3-5 most successful spatial decisions. Feed them into subsequent builds' curator agents. Over 5-10 builds, the accumulated intelligence narrows the gap.

---

## ATTACK VECTOR 6: THE OVERBUILDING RISK

### The Specific Failure Scenario

Without deployment quotas and structural caps, a builder in the "in love" state adds spatial complexity beyond what the content warrants. The evaluators check quality but not necessity.

**Problem 6A: AD-006 was about axis patterns.** Its 7 distinct layouts existed because the content demonstrated 7 patterns. Most content is about database management, not spatial theory. A 10-section article about JavaScript performance does not warrant 6 distinct spatial organizations. But the architecture's builder, freed from caps and primed by immersion to find spatial implications, will FIND implications and BUILD complexity.

**Problem 6B: Self-indulgent spatial structure hurts readability.** Every distinct layout forces the reader to learn a new spatial grammar. This is cognitively expensive. Exploration-era pages succeeded because their audience was designers who APPRECIATED spatial invention. Pipeline pages serve general audiences who want to READ CONTENT. An overbuilt page forces the reader to process layout before content.

**Problem 6C: Evaluators reward diversity without penalizing excess.** Criterion 7 ("distinct spatial organizations >= 4") rewards diversity. There is no criterion for "spatial organizations are NECESSARY." An evaluator might score high layout diversity as POSITIVE when it is actually reader-hostile.

### Likelihood: MEDIUM
### Impact: MEDIUM (page scores well on rubric but serves reader poorly)

### Mitigation
**M-6A: Add a "restraint evaluator" to Phase 6.** One evaluator asks: "For each non-vertical layout, would a standard column have served the reader equally well? If yes, the layout is decorative." The BUILD-2 agent must address restraint concerns alongside quality concerns.

**M-6B: Add content complexity triage to Phase 1.** The TC agent assesses structural complexity: TIER A (rich, full architecture), TIER B (moderate, reduced architecture), TIER C (linear, reformed pipeline). Prevents spending $200 on content that warrants $30.

---

## ATTACK VECTOR 7: THE SINGLE-AGENT BUILDER PROBLEM

### The Specific Failure Scenario

Each build phase uses 1 Opus agent. For long articles, the output token limit (~32K tokens, ~2,500 lines) creates a quality cliff.

**Problem 7A: Token budget exhaustion.** A topology-rich page with 5+ spatial organizations has 800-1,200 lines of CSS. A long article (3,000+ words) has 1,500-2,000 lines of HTML content. Total: 2,300-3,200 lines. This hits or exceeds the output ceiling. Late sections get truncated -- simpler treatment, flat prose blocks. The page has magnificent early sections and flat late sections. This quality cliff is WORSE than uniformly flat.

**Problem 7B: Cognitive drift across 2,500 lines.** Even within the limit, maintaining topology consistency across a long page is difficult. The builder may form strong spatial commitments for early sections and gradually drift toward defaults for late sections as cognitive load accumulates.

**Problem 7C: Three separate builders break continuity.** BUILD-1, BUILD-2, BUILD-3 are three separate Opus instances. BUILD-2 reads BUILD-1's HTML but not BUILD-1's reasoning. It may change a content-driven `1fr 3fr` grid to a bento layout "for variety" without knowing BUILD-1 chose `1fr 3fr` because the old paradigm is being dismissed. The content-topology connection is severed.

### Likelihood: MEDIUM-HIGH (for long articles with 10+ sections)
### Impact: HIGH (quality cliff within a page is worse than uniformly low quality)

### Mitigation
**M-7A: Page scope assessment in Phase 4.** The Discovery agent estimates total HTML output. If > 2,000 lines: (a) reduce spatially-distinct sections by 2, or (b) split build into 2 builders (sections 1-N/2, sections N/2+1-N) with shared topology and convention spec.

**M-7B: Section-focused BUILD-2.** Instead of rewriting the entire page, BUILD-2 receives the full HTML plus evaluation feedback and is told: "Fix compliance everywhere. DEEPEN the 3 weakest sections identified by evaluators. Do NOT rewrite sections that already score well."

**M-7C: Same-agent continuity.** If technically feasible, use the SAME Opus instance for BUILD-1, BUILD-2, BUILD-3 within a single conversation. The reasoning persists across passes. This eliminates the transfer problem between builders.

---

## ATTACK VECTOR 8: THE EVALUATION QUALITY QUESTION

### The Specific Failure Scenario

Evaluation-driven correction replaces constraint-driven prevention. But evaluator feedback may not produce genuine structural improvement.

**Problem 8A: Diagnostic, not prescriptive.** The evaluator says "Criterion 3 fails -- zero sections fail the vertical collapse test." The builder does not know WHICH sections to restructure or HOW. The current pipeline's constraints are specific ("use 3+ channel shifts"). The evaluators' feedback is abstract ("reading path variety is low"). Which is more actionable?

**Problem 8B: Cosmetic patching instead of structural deepening.** BUILD-2 reads "coupling score 4/10" and adds named grid areas to existing grids, hover states, transitions. Score rises to 6/10. But the improvements are ADDITIVE patches on a generic foundation, not a deepened topology. The scores mask absence of genuine content engagement.

**Problem 8C: Criteria become the new constraints.** The 10 falsifiable criteria are designed to detect the ABSENCE of content engagement. They detect absence well (pipeline = 0/10). But they cannot detect MISAPPLICATION. BUILD-2 optimizes for the evaluation signal rather than the content. "Named grid areas >= 2" is satisfied by adding `grid-template-areas: "left right"` to any two-column grid. Technically compliant, semantically empty. The pipeline's pathology reborn: the builder optimizes for a checklist, just a different checklist.

**Problem 8D: AMPLIFY/RELEASE/DEEPEN/GAP is the same abstraction level as the current pipeline's packages.** The current pipeline gives "compositional questions" and "structural propositions." The weaver gives AMPLIFY/RELEASE/DEEPEN/GAP. Is "DEEPEN: typography hierarchy too flat" more actionable than "Deploy border-weight gradient"? Both are high-level creative direction that the builder must translate into CSS without specific guidance.

### Likelihood: MEDIUM-HIGH
### Impact: MEDIUM (scores improve incrementally but miss genuine topology deepening)

### Mitigation
**M-8A: Make evaluators PRESCRIPTIVE.** The coupling evaluator should say: "Criterion 3 fails. Recommendation: Section 4's comparison uses `1fr 1fr` -- the article treats the old paradigm as subordinate, so `1fr 3fr` would embody this. Section 7's synthesis is a vertical column -- hub-spoke with the central finding at the geometric center would carry the convergence argument." Evaluators need content markdown AND curated research to make prescriptive recommendations.

**M-8B: Make BUILD-2 explicitly structural.** Add: "Cosmetic changes (adding grid area names to existing grids, hover states, transitions) do NOT count as deepening. Deepening means changing the SPATIAL LOGIC of at least 2 sections. If the evaluation says layout loss = content loss FAILS, you must REPLACE a grid, not just rename it."

**M-8C: Provide qualitative feedback, not scores.** Don't share the 10 criteria with the builder. Evaluators use criteria internally but communicate to the builder as narrative analysis: "Section 2 feels generic because its layout could hold any content. The article's Section 2 argues X, which suggests Y spatial form." Builder reads ANALYSIS, not numbers. Analysis produces content re-engagement. Numbers produce checklist optimization.

---

## ATTACK VECTOR 9: THE REPRODUCIBILITY QUESTION

### The Specific Failure Scenario

Run the architecture twice on the same article. The immersion agent (Phase 3) produces different topologies because Opus's extended thinking is non-deterministic. Run 1: 8/10. Run 2: 4/10. Average: 6/10 with HIGH VARIANCE.

**Problem 9A: Variance is worse than consistent mediocrity.** For a $150-200 investment, the user expects reliably good output. Getting 4/10 on a $150 build is worse than getting 0/10 on a $30 build because the expectation gap is larger. The current pipeline produces consistent (if low) quality. The maximum effort architecture may produce higher average quality but with a variance that makes individual builds unpredictable.

**Problem 9B: The immersion agent is a single point of creative failure.** If the immersion agent's spatial hypotheses are weak or wrong, the entire downstream chain operates on a weak foundation. No amount of evaluation and deepening fixes a fundamentally uninspired topology. The architecture concentrates creative risk in Phase 3 -- one agent, one 30-minute session, one chance.

### Likelihood: MEDIUM
### Impact: HIGH (unpredictable quality at premium prices)

### Mitigation
**M-9A: Content complexity triage with early exit (see M-6B).** For content where the immersion agent produces thin spatial hypotheses ("this is linear, vertical is correct"), abort the full architecture and fall back to the reformed $30 pipeline. This prevents $150 investments on content that cannot activate the state.

**M-9B: Run Phase 3 twice with different random seeds (if cost-feasible).** Two immersion agents, independently, produce two topology documents. Phase 4 (Discover) receives BOTH and synthesizes the strongest elements of each. Cost: +$8 for a second immersion agent. Benefit: reduces the single-point-of-failure risk.

---

## ATTACK VECTOR 10: WHAT ABOUT SIMPLER ARTICLES?

### The Specific Failure Scenario

The architecture is presented as universal for all $150-200 tier builds. But many articles are linear, procedural, or simple. A tutorial on setting up a development environment. A list of 10 JavaScript tips. A step-by-step recipe.

**Problem 10A: $14 immersion for content that needs $0.** The immersion agent reads a step-by-step tutorial and writes: "This article is sequential. The spatial form is a vertical column with numbered steps." This is $14 of Opus processing to discover what any agent would know in 2 seconds.

**Problem 10B: No off-ramp.** Once launched, the minimum cost is $114 (base architecture). There is no early exit for simple content. Phase 4 might write "the topology is vertical" -- but the orchestrator still launches BUILD-1 ($18), EVALUATE-1 ($12), BUILD-2 ($14), EVALUATE-2 ($18), BUILD-3 ($12), and FINAL EVAL ($10). That's $84 of build-evaluate cycles for a page that is correctly a vertical column.

**Problem 10C: Forcing spatial complexity degrades quality.** If the architecture's cultural signals say "be spatially ambitious," a builder faced with a simple tutorial might add unnecessary hub-spoke layouts to sequential content. The evaluators score this as "high spatial diversity" (7/10) but a human reader finds it disorienting. The spatial structure is correct for the CRITERIA but wrong for the CONTENT.

### Likelihood: HIGH (many articles are structurally simple)
### Impact: HIGH ($114 minimum wasted on content warranting $30)

### Mitigation
**M-10: Mandatory content complexity triage with tiered build paths.** Phase 1 (TC derivation) produces a COMPLEXITY TIER:
- **TIER A (Structurally rich):** 2+ of: (a) 3+ argument modes (comparison, synthesis, progression, demonstration), (b) self-referential content, (c) non-linear argument structure. Full architecture. $150-200.
- **TIER B (Moderately structured):** 1 of the above. Skip Phases 3-4. Builder gets curated research + article directly. $80-100.
- **TIER C (Linear/procedural):** 0 of the above. Skip Phases 2-4. Reformed pipeline. $30-50.

---

## TOP 5 RISKS (Ranked by Likelihood x Impact)

### RISK 1: Topology Transfer Failure (Vectors 1 + 3)
**Likelihood: HIGH | Impact: MEDIUM-HIGH | Score: CRITICAL**

The "falls in love" state must form IN the agent that writes CSS. The architecture splits immersion (Phase 3) from building (Phase 5), creating a document-mediated transfer that may produce topology-compliant pages (5-6/10) rather than "in love" pages (8-10/10). The $120 premium buys a moderate improvement, not the transformative gap the architecture promises.

**Primary mitigation:** Merge Phases 3+4+5 into a single agent (M-1A).

### RISK 2: Wasted Investment on Simple Content (Vector 10)
**Likelihood: HIGH | Impact: HIGH | Score: CRITICAL**

Many articles are linear or procedural. The architecture has no early-exit. $114 minimum is spent on content that warrants $30. Overbuilt simple content may degrade rather than improve the reader's experience.

**Primary mitigation:** Mandatory content complexity triage with tiered paths (M-10).

### RISK 3: Accumulated Knowledge Gap (Vector 5)
**Likelihood: HIGH | Impact: MEDIUM | Score: HIGH**

The exploration era's quality came from accumulated intelligence across 149+ agents and weeks. The architecture starts fresh every time. Pages plateau at 6-7/10 without cross-build accumulation.

**Primary mitigation:** Accept the gap, target 6-8/10 (M-5A). Build accumulation separately (M-5B).

### RISK 4: Output Token Limits / Quality Cliff (Vector 7)
**Likelihood: MEDIUM-HIGH | Impact: HIGH | Score: HIGH**

For long articles (10+ sections), the BUILD-1 agent may hit the ~32K output limit. Early sections are spatially ambitious; late sections are flat. The quality cliff is worse than uniformly low quality.

**Primary mitigation:** Page scope assessment + builder splitting (M-7A). Section-focused BUILD-2 (M-7B).

### RISK 5: Criteria as New Constraints (Vector 8C)
**Likelihood: MEDIUM-HIGH | Impact: MEDIUM | Score: MODERATE-HIGH**

BUILD-2 and BUILD-3 optimize for the evaluation rubric rather than the content. Named grid areas and asymmetric proportions are added to satisfy criteria, not to serve content meaning. The architecture replicates the pipeline's pathology at one level of indirection.

**Primary mitigation:** Qualitative feedback, not scores (M-8C). Hide criteria from builder (M-8C).

---

## RECOMMENDED ARCHITECTURE MODIFICATIONS

### Modification 1: Merge Phases 3+4+5 (CRITICAL)

**Current:** 3 agents, 3 phases (Immerse, Discover, Build-1). Total: 90 min, $32.
**Proposed:** 1 agent, 1 phase (Immerse-Discover-Build). Total: 65-75 min, $22-25.

The single agent reads the content, forms its OWN topology, and builds from it. Curated research (Phase 2) and convention spec are REFERENCE material. The agent's primary input is the article.

**Eliminates:** Risk 1 (topology transfer). Reduces cost by $7-10.
**Risk of modification:** Larger cognitive burden on one agent. But this is exactly what exploration-era builders did.

### Modification 2: Content Complexity Triage (CRITICAL)

**Add to Phase 1:** TC agent produces a COMPLEXITY TIER (A/B/C) with explicit criteria. Orchestrator routes to appropriate build path. Prevents $114+ waste on simple content.

**Eliminates:** Risk 2. Prevents overbuilding (Vector 6).
**Cost:** ~$0 (assessment embedded in existing TC derivation).

### Modification 3: Eliminate Phase 10 / Reduce Evaluation (MODERATE)

**Current:** Three evaluation phases ($12 + $18 + $10 = $40).
**Proposed:** Two evaluation phases ($12 + $18 = $30). Phase 8's weaver produces the final scorecard. A lightweight compliance check ($3-4) post-BUILD-3 catches regressions.

**Saves:** $6-7 per build.
**Risk:** Minimal. Phase 10 confirms what Phase 8 already scored.

### Modification 4: Prescriptive + Qualitative Evaluation (MODERATE)

**Current:** Evaluators score against rubric and identify gaps.
**Proposed:** Evaluators score AND prescribe. They identify specific sections, specific spatial treatments, specific CSS changes. They communicate as narrative analysis, not scores. Builder never sees the 10 criteria.

**Eliminates:** Risk 5 (criteria gaming). Addresses Vector 8 (cosmetic patching).
**Cost:** Minimal (evaluators read slightly more input).

### Modification 5: Minimal Breadth Floor + Responsive Verification (LOW RISK)

**Add to BUILD-1 prompt (6 lines):**
```
BREADTH FLOOR: Your page should have at least 3 distinct zone backgrounds
(delta >= 15 RGB), 2 meaningful border treatments, and 2 hover/transition
states. These are floors, not targets.

RESPONSIVE: Every non-vertical layout MUST include a @media (max-width: 768px)
block. Verify each spatial decision works at both widths before proceeding.
```

**Prevents:** Texture-blind spatial builds (Vector 2B). Responsive failures (Vector 2A).
**Cost:** 6 lines of prompt. Negligible attention burden.

### Modification 6: Abort Gate After Phase 6 (SAFETY)

**Add:** After Phase 6 evaluation, if coupling score < 3/10 or the evaluator narrative identifies foundational topology problems, present the user with: (a) current spend, (b) evaluation results, (c) estimated remaining cost, (d) recommendation (continue/restart/abort). This prevents the $200 sunk-cost trap.

---

## THE "WHAT IF WE'RE WRONG" SCENARIO

### What if the entire "falls in love" thesis is wrong?

Three alternative theses, each with different implications:

**Alternative 1: It's the accumulated knowledge, not the cognitive state.**

CD-006 scored 10/10 not because its builder "fell in love" but because it had 88 prior findings, 337 research findings, and 24 prior explorations as vocabulary. The builder was not brilliant -- it was well-informed. The CSS decisions were not INVENTIONS -- they were APPLICATIONS of a vast vocabulary accumulated over months.

*Implication:* Single-session depth cannot compensate for accumulated vocabulary. The architecture fails not on process but on inputs. The solution: build the cross-build accumulation system FIRST, then test whether accumulated vocabulary produces quality without the immersion phase.

**Alternative 2: It's the model, not the process.**

The exploration-era crown jewels were built by Opus-class agents. The pipeline uses Sonnet for builders. What if switching the current $30 pipeline's builder from Sonnet to Opus (at +$8-12) produces 5-6/10 without any architectural changes? The "falls in love" state may simply be "Opus-class reasoning" -- no immersion phase, no multi-pass, no curated research needed.

*Implication:* The cheapest test is Opus-in-current-pipeline. If this produces 4+/10, the maximum effort architecture is solving the wrong problem.

**Alternative 3: It's the constraint removal, not the immersion.**

AD-006's builder received a hypothesis, a research package, and built. No formal immersion. No topology document. The key difference: no deployment quotas, no "build vertical first," no structural caps, no reading-order mandates. What if simply removing these from the $30 pipeline (cost: $0) produces 3-5/10?

*Implication:* Constraint removal alone may account for most of the quality gap. The immersion phase is a $14 supplement, not a $14 necessity.

### The Progressive Testing Protocol (The Fallback)

Instead of one $150-200 build that conflates all hypotheses:

**Step 1: Test constraint removal ($30, +$0 reform cost).** Run the current pipeline with: (a) builder reads article first, (b) no vertical-first mandate, (c) no structural cap. Score on falsifiable criteria. If 0/10 -> 3+/10: constraint removal works. If 0/10 -> 0/10: constraints are not the bottleneck.

**Step 2: Test model upgrade ($38-42, +$8-12 for Opus builder).** Same reformed pipeline, but swap Sonnet builder for Opus. Score again. If 3/10 -> 6+/10: model is the bottleneck. If 3/10 -> 3-4/10: model is not sufficient.

**Step 3: Test immersion ($52-56, +$14 for Phases 3-4).** Add immersion and discovery phases to the reformed Opus pipeline. Score again. If 4/10 -> 7+/10: immersion is validated. If 4/10 -> 5/10: immersion helps but is not transformative.

**Step 4: Test full architecture ($150-200).** Only if Steps 1-3 show the quality gap still exists after cheaper reforms.

Total cost of Steps 1-3: ~$120 across 3 builds. This is CHEAPER than one full architecture run AND it isolates the actual causal mechanisms.

---

## MINIMUM VIABLE MAXIMUM EFFORT

### The $80-100 Architecture (50-60% of cost, targeting 80% of quality)

```
Phase 0: SETUP                              [5 min,  $0]
Phase 1: DERIVE (TC + complexity triage)    [15 min, $4]
Phase 2: CURATE (2 agents, not 3)           [20 min, $8]
  - Merge structural + textural researcher
  - Convention compiler stays separate
Phase 3-5: IMMERSE-BUILD (MERGED)           [65 min, $22]
  - Single Opus agent: read content, form
    hypothesis, build -- all one context
  - Content FIRST (immersion)
  - Hypothesis SECOND (discovery)
  - Build THIRD (creation)
Phase 6: EVALUATE (2 agents)                [15 min, $8]
  - Coupling + Maturity (prescriptive)
  - Compliance
Phase 7: BUILD-2 (deepening)                [30 min, $14]
Phase 8: FINAL CHECK (1 agent)              [10 min, $4]
                                            ─────────────
                                            ~160 min, ~$60 base
                                            + 1 optional deepen: +$22-30
                                            TOTAL: $60-90
```

### What this cuts:
- Phases 3 + 4 as separate agents: MERGED into the builder (-$14)
- Phase 2 reduced to 2 curators (-$4)
- Phase 6 reduced to 2 evaluators (-$4)
- Phase 8 full PA (5 auditors + weaver): REPLACED by 2-evaluator Phase 6 and 1-agent final check (-$14)
- Phase 9 (BUILD-3): ELIMINATED -- BUILD-2 is the final build (-$12)
- Phase 10: ELIMINATED (-$10)

### What this preserves:
- Content immersion WITHIN the builder's own context (merged phases)
- Curated, implementation-mapped research (Phase 2)
- Convention spec as reference
- Evaluation-driven iteration (one full cycle)
- All 42 killed constraints stay killed
- Content complexity triage (Phase 1)
- Opus model for all agents

### What this adds over the current $30 pipeline:
- $8 for curated, bespoke research (the exploration era's missing curation layer)
- $22 for merged immersion-build (content-topology forms in the agent that writes CSS)
- $8 for prescriptive evaluation (targeted feedback, not just scores)
- $14 for evaluation-driven deepening (one cycle of build-evaluate-deepen)
- $0 for constraint removal (42 constraints killed at no additional cost)

### Expected quality:
- Falsifiable criteria: 5-7/10 (vs full architecture's 7+/10, vs pipeline's 0/10)
- Visual maturity: 50-65% (vs full architecture's 65-80%)
- Cost: $60-90 (vs $150-200)
- Cost per quality point: ~$10-13 (vs full architecture's ~$19-29)

### Why this may be the optimal first generation:

The biggest quality gains come from:
1. Giving the builder immersion time with the content ($0 marginal cost if merged)
2. Removing procedural constraints ($0 cost)
3. Providing curated, implementation-mapped research ($8)
4. One evaluation-driven deepening cycle ($22)

These are in the $60 base. The additional $60-110 in the full architecture buys MORE iteration (3 build passes, 3 evaluation rounds). But iteration has diminishing returns. The first build-evaluate-deepen cycle produces the largest quality improvement. The second and third produce incremental refinement.

If 5-7/10 is acceptable -- and compared to the pipeline's 0/10, it is a transformation -- the $60-90 architecture delivers the highest value per dollar. The full $150-200 architecture should be reserved for TIER A content that has been validated through triage as structurally rich enough to warrant the premium.

---

## SUMMARY

The maximum effort architecture is a well-researched attempt to close the gap between pipeline builds (0/10) and exploration-era builds (10/10). Its core insights are correct: the builder needs content immersion, procedural overhead must be removed, and evaluation-driven iteration replaces constraint-driven prevention.

It has five structural vulnerabilities:

1. **Topology transfer failure.** The "falls in love" state must form in the agent that writes CSS. Merge Phases 3+4+5.
2. **No content triage.** $114 minimum on content that may need $30. Add mandatory complexity assessment with tiered paths.
3. **Accumulated knowledge gap.** Single-session depth is not multi-week accumulation. Target 6-8/10, build accumulation separately.
4. **Output token limits.** Long articles hit the ceiling. Add page scope assessment and builder splitting.
5. **Criteria as new constraints.** Evaluators must provide qualitative narrative, not scores. Hide the rubric from the builder.

The recommended $80-100 "minimum viable maximum effort" -- with merged immersion/build, content triage, prescriptive evaluation, and one deepening cycle -- delivers an estimated 80% of the full architecture's quality at 50-60% of the cost. It should be the first generation of exploration-mode builds, with the full $150-200 architecture reserved for content validated as TIER A.

Before committing to ANY architecture, run the progressive testing protocol: constraint removal ($0), model upgrade (+$10), immersion (+$14). Three builds, ~$120 total, isolating the actual causal mechanisms. This is cheaper and more informative than one $200 build that conflates all variables.

---

## Agent Log

- **Agent:** Adversarial Reviewer (Task #2 / Task #6 / Task #12)
- **Files read:** 7 files (~6,500 lines total): maximum effort architecture (812 lines), 4 Wave 1 research reports, builder constraint audit (74 constraints), exploration process reconstruction
- **Method:** Systematic adversarial analysis across all 10 assigned attack vectors, each with specific failure scenario, likelihood/impact assessment, and concrete mitigation
- **Key findings:** (1) Topology transfer is the critical vulnerability -- merge immersion and building into one agent. (2) Content complexity triage is essential -- $114 minimum on simple content is waste. (3) The progressive testing protocol ($0 reform -> $10 model upgrade -> $14 immersion) is cheaper and more informative than one $200 build. (4) The $80-100 minimum viable architecture delivers ~80% quality at ~55% cost.
- **Output:** This file (~720 lines)
- **Quality self-assessment:** MEETS GOALS -- 10 attack vectors with failure scenarios and mitigations, top 5 ranked risks, 6 architecture modifications, 3 alternative theses with progressive testing protocol, minimum viable $80-100 architecture
