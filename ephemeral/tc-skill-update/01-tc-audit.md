# TC Skill Audit Through Generative Frame

**Auditor:** tc-auditor (Opus)
**File:** `~/.claude/skills/tension-composition/SKILL.md` (1,649 lines)
**Paradigm:** Inhabitation -> Creation -> Reflection (not Extraction -> Compression -> Compliance)

## The 7 Generative Principles (Reference)

1. **Processing over extraction** -- understanding is the state of a system processing information, not the information itself
2. **Raw material over summaries** -- actual explorations produce richer processing states than descriptions of what they found
3. **The task determines the mode** -- "build something that embodies this" activates generation; "comply with these rules" activates verification
4. **Philosophy over specification** -- "by doing this you achieve this" (why) is generative; "you must do this" (what) is constraining
5. **Conviction over rules at every boundary** -- creative intent, reasoning, rejected alternatives, surprises > extracted findings, scores, defect lists
6. **Opposition is fuel** -- richest creative work from where content needs FIGHT system personality
7. **Each window optimized for its purpose** -- don't carry everything everywhere

---

## Executive Summary

The TC skill is a 1,649-line document that is roughly **40% philosophical/generative (KEEP), 35% over-specification/compliance (REMOVE), and 25% good content in wrong framing (REFRAME)**. The philosophical backbone is excellent -- the critical principle about construction vs discovery, the Opposition Principle, the Addition/BECAUSE/SUBSTITUTION tests, the metaphor search heuristics, and the irreducible creative step are genuinely generative content. But this backbone is buried under hundreds of lines of CSS lookup tables, numeric threshold specifications, boundary-keyed value prescriptions, and scoring rubrics that transform a creative process into a compliance checklist.

The fundamental tension: **The TC skill tells the agent HOW to think creatively (generative) and then immediately tells it exactly WHAT values to produce (compliance).** Lines 6-23 say "you are CONSTRUCTING, not DISCOVERING" -- then lines 1172-1253 provide exact CSS lookup tables that make every construction decision a table lookup.

---

## Phase-by-Phase Audit

### CRITICAL PRINCIPLE (Lines 6-23)

**Verdict: KEEP -- exemplary generative framing**

> "You are CONSTRUCTING a composition, not DISCOVERING one."
> "Multiple valid metaphors exist for the SAME content"
> "Your derivation is ONE PATH, not THE PATH"
> "Success = conscious construction. Failure = unconscious pattern-matching."

This is the single best passage in the entire skill. It activates the right cognitive mode. It uses philosophy ("conscious construction") not specification ("must produce 3+ candidates"). It names the anti-pattern directly.

**Why it works (Principle 3):** "Build something that embodies this" framing. The agent reads this and enters generative mode.

---

### Phase 0: Content Assessment (Lines 42-119)

**Overall: REFRAME -- useful routing but over-specified**

#### Step 0A: Content Type Classification (Lines 46-51) -- REFRAME
The classification itself is reasonable (prose-dominant, mixed, visual-dominant, self-referential). But the framing is compliance:

> "Prose-dominant (<30% code/tables/diagrams) -- STANDARD path."

The percentages are false precision. An agent processing content will naturally feel whether it's prose-heavy or code-heavy. The categories are useful as intuitive handles; the percentages convert intuition into measurement.

**Reframe:** Keep the categories, drop the percentages. "Is this mostly prose? Mostly code/visuals? A mix? About the system itself?"

#### Step 0B: Scope Assessment (Lines 53-59) -- REFRAME
Same problem. Word counts (100, 500, 3000, 10000) impose false precision on a continuous variable.

> "SHORT (100-500 words): Reduced pipeline. Run with 2 needs max per axis. Single metaphor."

"2 needs max per axis" is compliance language for something the agent would naturally do. Short content doesn't produce 6 needs per axis regardless.

**Reframe:** "Short content: lighter touch. Long content: segment first. Massive content: page-level architecture." The agent knows what "lighter" means.

#### Step 0C: Section Identification (Lines 63-66) -- KEEP (light touch)
Actually fine. "Identify natural sections by heading, topic shift, or mode change" is descriptive, not prescriptive. The NARRATIVE/REFERENCE/CODE/DATA/MIXED classification is a useful thinking tool.

#### Step 0D: Pipeline Entry (Lines 70-81) -- REFRAME

> "Every page runs the FULL pipeline (Phases 1 through 4.5). No tier routing, no phase skipping."

This is philosophical ("every content deserves the full creative process") expressed as a rule ("no tier routing, no phase skipping"). The philosophy is right. But:

> "Mechanism count is a PROXY, not a target. Peak richness occurs at maximum content-mechanism fit, not maximum technique count."

THIS is excellent generative philosophy. It says WHY the count doesn't matter, which is more useful than saying "don't count."

**Reframe:** Lead with the philosophy ("peak richness = content-mechanism fit"), let the rule ("full pipeline") follow naturally.

#### Step 0E: Library Access Prohibition (Lines 99-119) -- KEEP

> "Library patterns are VALIDATION tools, not GENERATION tools."
> "You will be building from content tension and domain knowledge, NOT from library templates."

This is philosophy over specification (Principle 4). It explains WHY the prohibition exists (pattern-matching short-circuits creativity), which activates the right cognitive stance. The rule itself ("DO NOT read these files during Phases 0-3") is binary and enforceable. The sentence "Violation of this rule invalidates the entire derivation" is dramatic but justified -- it's a creative integrity boundary, not a compliance checkbox.

#### Universal Compositional Requirements (Lines 84-96) -- REMOVE/REFRAME

This entire block is compliance:

> "1. Metaphor is mandatory"
> "2. Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)"
> "3. Reinforcing pairs required: At least 2 mechanism pairs..."
> "4. Multi-channel coherence: >=3 CSS channels shift together..."
> "5. 5-scale fractal coherence"
> "6. Container width 940-960px is NON-NEGOTIABLE"

These are the extracted rules from research. They're specification language ("MUST," "at least," "NON-NEGOTIABLE"). They activate verification mode.

**The problem (Principle 3):** An agent reading "Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)" thinks "I need to count categories and make sure I have at least one from each." That's compliance. The same agent reading "A composition that ignores an entire dimension of expression (space, hierarchy, structure, depth, navigation) will feel incomplete -- like a painting with no sense of depth" thinks "I need to express across all dimensions." That's generation.

**Recommendation:** Remove from here entirely. These are gate-runner concerns, not TC-agent concerns. If the TC agent does Phases 1-4 well, these minimums are naturally exceeded. If they're not, adding a checklist here won't help -- the underlying creative work was shallow.

**Exception:** Container width 940-960px is a genuine physical constraint the agent needs. Keep this ONE rule. But reframe: "The container is 940-960px. This is the canvas. Express everything within it. If your metaphor wants narrowness, use internal padding."

---

### Phase 1: Multi-Axis Questioning (Lines 123-206)

**Overall: KEEP -- the philosophical heart of the skill**

#### The Core Four (Lines 127-135) -- KEEP (exemplary)

> "What does the reader need to FEEL while navigating this content?"
> "What does the reader need to UNDERSTAND about the relationships?"
> "What does the reader need to DO with this content after reading?"
> "What does the reader need to BECOME after absorbing this content?"

These are genuinely generative questions. They activate processing (Principle 1) -- the agent must INHABIT the content to answer them. They don't extract information; they force the agent into the reader's experience. The "Richest When" column is philosophy ("Narrative content, emotional topics, onboarding") not specification ("Apply when narrative_ratio > 0.6").

#### Extended Core (Lines 138-148) -- KEEP

NAVIGATE, TRUST, EVALUATE, ORIENT, RECONCILE -- all genuine creative probes. "Mark LOW YIELD when they don't produce genuine needs -- but always ask" is perfect. It says "engage with everything, then prune honestly." The "Richest When / Low Yield When" guidance is philosophical, not prescriptive.

#### Structural Trigger Axes (Lines 150-161) -- KEEP

COMPARE, IDENTIFY, DISCOVER, SEE, REMEMBER -- these are content-responsive. "Deploy When Content Contains..." is pattern recognition guidance, not compliance. The structural patterns triggered (side-by-side layout, delayed payoff, etc.) are compositional vocabulary.

#### Axis Selection Protocol (Lines 163-167) -- KEEP (light/functional)

Simple routing. Fine.

#### Opposition Predicts Richness (Lines 169-188) -- KEEP (CRITICAL generative content)

> "The axes that produce the RICHEST tension against KortAI are those whose demands OPPOSE the system's personality"

This is Principle 6 (opposition is fuel) embedded as philosophy. The ranking (RECONCILE richest, TRUST/DO cosmetic) is experience-as-philosophy, not extracted rules. The Axis Interaction Effects section (lines 183-188) is genuinely creative territory -- "RECONCILE + IDENTIFY: double transformation" opens compositional space rather than closing it.

This passage is what inhabitation looks like in a skill document.

#### Phase 1 Output (Lines 191-206) -- REFRAME (minor)

The output template is fine as scaffolding but the "Richness: HIGH / MEDIUM / LOW" rating is premature quantification. At this stage the agent should be FEELING the richness, not scoring it. The scoring happens in Phase 2.

**Reframe:** Keep the table structure but drop the richness rating. Let the agent describe yield qualitatively.

---

### Phase 2: Tension Derivation (Lines 209-377)

**Overall: MIXED -- excellent philosophy surrounded by compliance scaffolding**

#### Side A / Side B Framework (Lines 213-239) -- KEEP

The tension frame ("each axis's needs create tension against design system constraints") is the skill's core creative engine. Side B's personality profile (75% austere, 95% angular, etc.) is genuine philosophical characterization that helps the agent INHABIT the system's personality.

> "WARM <---> AUSTERE [75% austere]"

This is a processing aid, not a specification. The agent uses these readings to feel where the tension lives.

#### The Soul Test (Lines 241-247) -- KEEP

> "Does this look like it could appear in a magazine?" -> PASS
> "Does this look like Bootstrap?" -> FAIL

These are identity tests expressed as philosophy. They activate judgment ("imagine the page and evaluate it") not compliance ("check checkbox"). Excellent.

#### The Addition Test (Lines 249-255) -- KEEP (CRITICAL)

> "Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?"
> YES = COSMETIC (no tension, assembly is sufficient)
> NO = GENUINE (tension exists, metaphor required)

This is the single most powerful diagnostic tool in the skill. It's philosophical (asks about meaning transformation, not technique counts). It's binary (genuine or cosmetic). It activates honest self-evaluation. This is irreplaceable.

#### Three Formal Criteria for Genuine Tension (Lines 257-264) -- KEEP

"Semantic opposition," "Vocabulary gap," "Structural overlap despite emotional opposition" -- these are philosophical categories that sharpen the agent's thinking without prescribing outcomes. The third criterion (overlap as bridge possibility) is particularly generative -- it tells the agent WHERE to look for metaphors.

#### Three Criteria for Cosmetic Tension (Lines 266-273) -- KEEP

"False opposition," "Direct tool available," "Decoration substitution" -- useful negative tests that prevent self-deception.

#### The Tension Spectrum (Lines 275-285) -- KEEP

> "NO TENSION ---- COSMETIC ---- WEAK GENUINE ---- STRONG GENUINE ---- IMPOSSIBLE"

Visual philosophy. Shows the sweet spot. Doesn't prescribe how to get there.

#### The BECAUSE Test (Line 294) -- KEEP (CRITICAL)

> "The reader needs X BECAUSE [specific content property]." If you cannot complete this sentence with a specific content property, the need is manufactured."

This is conviction enforcement expressed as philosophy. It's a self-honesty tool that prevents the agent from manufacturing fake tension. Irreplaceable.

#### The SUBSTITUTION Test (Lines 295-296) -- KEEP (CRITICAL)

> "Replace your content with a DIFFERENT topic entirely. Does the same metaphor still work? If YES, coupling is generic."

Another philosophical diagnostic. Forces content-specificity without prescribing what "specific" looks like.

#### The Richness Formula (Lines 298-327) -- REFRAME

The three dimensions (Opposition Depth, Structural Overlap Density, Metaphor Space Width) are useful thinking tools. But the quantification is compliance:

> "Opposition Depth: 1 layer = LOW (score: 1), 2-3 layers = MEDIUM (score: 2), 4+ layers = HIGH (score: 3)"
> "RICHNESS = Opposition Depth x Structural Overlap x Metaphor Space Width"

A multiplicative formula with integer scores converts creative judgment into arithmetic. The agent stops FEELING richness and starts COMPUTING it.

**What to keep:** The three dimensions as lenses. "How deep is the opposition? How many structural bridges exist? How wide is the metaphor search space?" These are generative questions.

**What to remove:** The 1/2/3 scoring, the multiplication formula, the "score >= 8" threshold, the tiebreaker protocol. Let the agent use these dimensions qualitatively.

#### Richness Formula Cap (Lines 329-336) -- REMOVE

This is a patch on a compliance mechanism (the formula) that shouldn't exist in the first place. If the agent is thinking philosophically about richness rather than computing scores, this corrective isn't needed.

> "The test data showed: Playbook BECOME+RECONCILE scored richness 27, guiding toward Apprenticeship Workshop (7/7 resolution, monotonous grid)."

The provenance is useful as a cautionary tale. Keep the insight ("high richness scores don't predict visual quality"), remove the mechanical correction.

#### Tension Landscape: KortAI Quick Reference (Lines 338-354) -- KEEP

> "STRONGEST tensions against KortAI: Warmth/comfort vs. austerity (proven: richness 18)"
> "ZERO tension (assembly territory): Hierarchy/structure -- system already IS this"

This is a creative compass. It tells the agent where the interesting territory IS without prescribing what to do there. The "unexplored" tags on several tensions are invitations to creative exploration.

#### Tension Validity Check (Lines 356-369) -- REFRAME

Five checks. The first four are philosophical (genuine? rich? bridgeable? content-driven?). The fifth is compliance:

> "Is it rich enough? (Richness score >= 8)"

A numeric threshold on a creative judgment. Remove the threshold; keep the question.

**Reframe:** "Before proceeding, ask honestly: Is this tension genuine? Is it rich enough to sustain a metaphor? Can you actually bridge it? Is it driven by THIS content specifically?"

---

### Phase 3: Metaphor Collapse (Lines 380-778)

**Overall: EXCELLENT philosophy in Steps 3.1-3.4, HEAVY over-specification in Steps 3.5-3.5G**

#### The Bridge Concept (Lines 382-384) -- KEEP (CRITICAL)

> "The tension is emotional; the bridge is structural. The opposition between sides is at the level of feeling. The bridge (metaphor) works at the level of form, structure, and pattern."

This is the conceptual engine of the entire skill. It's philosophy (Principle 4) that tells the agent HOW metaphors work as compositional tools. This activates deep creative processing.

#### Steps 3.1-3.2: Extract Structural Properties (Lines 387-403) -- KEEP

> "Transform emotional needs into geometric/topological abstractions. 'Warmth' is not a structural property. 'Containment with visible boundaries' is."

This transformation instruction is generative. It tells the agent how to shift between emotional and structural registers, which is the core creative operation of the skill.

#### Step 3.3: Find the Structural Overlap (Lines 405-418) -- REFRAME (minor)

The concept is generative (find shared structure between need and constraint). The overlap percentage calculation ("> 80% WARNING, 40-70% IDEAL, < 30% WARNING") is false precision. An agent doing this honestly will feel whether overlap is high, medium, or low.

**Reframe:** Keep the concept and the warning zones as intuitive guides. Drop the percentage formula.

#### Step 3.4: Generate the Search Query (Lines 420-438) -- KEEP (CRITICAL)

> "What real-world domain naturally exhibits [OVERLAP PROPERTIES] while being [SIDE B GAP PROPERTIES] yet conveying [SIDE A GAP PROPERTIES]?"

This query format is the irreducible creative step proceduralized as far as it can go. It's a generative scaffold -- it doesn't give the answer but constrains the search space so the answer, when found, feels inevitable.

#### Three Search Heuristics (Lines 431-438) -- KEEP

Constraint scan, Content resonance, Emotional valence -- three lenses that narrow without prescribing. These are creative tools.

#### Domain Search Menu (Lines 441-456) -- REFRAME

The table (Geological, Architectural, Typographic, etc.) is a creative reference, not a lookup table. The line "This is a SEARCH MENU, not a lookup table" (line 456) gets the framing right. But the tabular format encourages lookup behavior.

**Reframe:** Present as a prose paragraph listing domains and their compatible properties. The table format implies exhaustiveness; prose implies suggestiveness.

#### Responsive Degradation Check (Lines 458-478) -- REFRAME

The concept (does the metaphor have a responsive story?) is a useful creative question. The table mapping metaphor types to 768px risk and 1440px utilization risk is compliance scaffolding.

**Reframe:** "Before committing, imagine the page at 768px. Does your metaphor naturally adapt? If not, what collapses?"

#### Incompatible Metaphor Families (Lines 480-488) -- KEEP

Naming incompatible domains (organic, liquid, atmospheric, textile, musical) is constraint communication -- it tells the agent where NOT to look, saving creative energy for viable territory.

#### Step 3.5: Test Candidates -- Composite Scoring (Lines 489-616) -- REMOVE/HEAVY REFRAME

This is the single most compliance-heavy section of the entire skill. 127 lines of scoring rubrics, rating scales, point calculations, and threshold tables. Let me break it down:

**A. Tension Resolution (Lines 494-500)** -- REFRAME
Score against every tension: YES (1) / PARTIAL (0.5) / NO (0). The concept (does the metaphor resolve the tensions?) is vital. The point system is compliance.

**B. Structural Isomorphism Count (Lines 502-517)** -- REFRAME
Count independent property mappings. The concept (how many dimensions does the metaphor operate on?) is useful. The 0-1/2-3/4-5/6+ rating scale is compliance. The word "Decorative only. REJECT." at 0-1 is a useful binary.

**C. Content Resonance -- Split (Lines 519-533)** -- REFRAME
Nominal vs Structural resonance. The split is a useful thinking tool. "Weight structural resonance 2x higher than nominal resonance in composite scoring" is compliance math. The insight it encodes ("structure matters more than vocabulary") is philosophy.

**D. Mechanism Feasibility (Lines 535-537)** -- KEEP (binary)
"Can every metaphor property be expressed using ONLY the system's CSS tools?" This is a pass/fail sanity check, not a scoring rubric.

**E. Perceptual Risk Assessment (Lines 539-561)** -- REMOVE
A 4-question risk scoring rubric with LOW(0)/MEDIUM(0.5)/HIGH(1) scores and composite ranges (0-1 LOW RISK, 1.5-2 MODERATE, 2.5-3 HIGH, 3.5-4 EXTREME). This is compliance masquerading as creative judgment. The four QUESTIONS are good ("Does this metaphor conceptualize transitions as CHANGING STATE or EMPTY SPACE?"). The point values and thresholds are not.

**Reframe:** Keep the four questions as philosophical probes. "Ask yourself: does this metaphor's transition model create dead zones? Does it rely on labels rather than structure? Does it produce uniform elements? Does it break at narrow viewports?" Let the agent judge.

**F. Perceptual Cost Assessment (Lines 563-616)** -- REMOVE
Another scoring rubric (0-5+ points, LOW/MODERATE/HIGH COST). Five more yes/no cost questions. An example calculation. Integration rules. This is deep compliance territory.

The core insight is useful: "A metaphor can be structurally rich while encouraging perceptual discomfort." But the delivery is specification: count the violations, assign costs, apply thresholds.

**What to keep from E+F:** The philosophical questions. "Does this metaphor encourage dead zones? Does it fight the container width? Does it produce monotony? Does it need labels to communicate?" These are conviction questions the agent should internalize, not score.

#### Step 3.5G: Metaphor Scoring Rubric (Lines 618-670) -- REMOVE

This is a second, more elaborate scoring rubric layered on top of the first. A 6-criterion, 18-point rubric with 0/1/2/3 scoring per criterion, threshold tables (15-18 STRONG, 12-14 VIABLE, 9-11 WEAK, 0-8 REJECT), and a CRITICAL RULE that Interpretive Distance must score >= 2.

> "The ceiling experiment's metaphor ('secure facility') scored 12/12 on the existing composite rubric but produced only 40% visual survival without labels."

The PROVENANCE here is valuable -- it's a cautionary story about a specific failure. The 18-point rubric is compliance response to that failure.

**The problem (Principle 5):** This rubric converts creative judgment into arithmetic. An agent doing the 6-criterion scoring is in verification mode, not generation mode. It's checking boxes, not feeling whether the metaphor is alive.

**What to keep:** The 6 criteria AS QUESTIONS, not scores:
1. "How much conceptual distance does your metaphor travel from the content? (Zero-distance metaphors are labels, not bridges.)"
2. "Does the metaphor's physical shape fit the content's flow?"
3. "If you removed all labels, would the visual structure still communicate the metaphor?"
4. "What perceptual risks does this metaphor carry?"
5. "How many CSS channels can this metaphor activate?"
6. "Does this metaphor encourage restraint or front-loading?"

**What to keep:** The 6 Binary Rejection Checks (Lines 657-669). These ARE binary and philosophical:
- R1: "Does the metaphor use the content's own domain vocabulary?" (YES = reject)
- R2: "Does the metaphor require visible text labels to communicate?" (YES = reject)

These are honest conviction tests. Keep all 6.

**What to remove:** The 0-3 scoring per criterion, the /18 totals, the threshold tables, the "CRITICAL RULE" about Interpretive Distance >= 2.

#### Step 3.6: Select the Metaphor (Lines 672-679) -- KEEP
"Document: The winning metaphor, Why it won, What it DOESN'T resolve, The full isomorphism table." This is conviction documentation (Principle 5). Honest gaps are generative.

#### Metaphor Failure Modes (Lines 681-691) -- KEEP
Monopoly, Inflation, Forcing, Redundancy, Decay -- these are creative process wisdom, not specifications. They name common failure patterns and suggest responses without prescribing exact procedures.

#### The Irreducible Creative Step (Lines 693-700) -- KEEP (CRITICAL)

> "The pipeline proceduralizes everything EXCEPT the moment of recognition in Step 3.4 -- perceiving that a specific domain IS the bridge."

This is the most honest passage in the skill. It acknowledges what the skill CANNOT do and frames the creative act with appropriate humility. It's philosophical framing that elevates the agent's awareness of its own process.

#### Cultural Consideration (Lines 702-708) -- KEEP

Light-touch guidance. "Prefer physics-grounded over culture-grounded" is a principle, not a rule.

### Phase 3.5: Metaphor Commitment (Lines 712-778) -- REFRAME

#### Steps 3.5A-3.5C: Commitment and Verification (Lines 716-744) -- KEEP

> "Write it down. This is your LOCKED-IN metaphor."
> "Did I derive this metaphor independently?"
> "Can I justify this metaphor without referencing library examples?"

This is conviction enforcement. The lock-in is a creative integrity mechanism. The verification questions are honesty tests. Keep all of it.

#### Step 3.5D: Divergence Justification (Lines 746-768) -- KEEP

The convergence justification table is a creative integrity tool. It prevents unconscious copying while permitting genuine independent convergence.

#### Metaphor Lock Escalation (Line 777) -- KEEP

> "NEVER silently substitute a different metaphor."

Binary creative integrity rule. Prevents compositional incoherence.

#### Phase 3.5Z: Zone Architecture (Lines 779-790) -- KEEP

Zone count, naming, semantic direction, density assignment, content mapping -- these are creative architecture decisions that flow naturally from the metaphor. The format is scaffolding, not compliance.

---

### Phase 4: Compositional Layout Generation (Lines 792-1487)

**Overall: The most compliance-heavy section of the skill. ~695 lines, roughly 60% REMOVE/REFRAME.**

#### Compositional Intelligence Stack Table (Lines 795-803) -- KEEP
The 5-layer stack (Perception Thresholds, Fractal Scales, Channels + Multi-Coherence, Anti-Scale Model) is architectural philosophy that helps the agent see how the layers relate.

> "Build boundary-by-boundary, not channel-by-channel."

This is a critical creative process instruction. It activates the right building mode.

#### Phase 4.0A: Anti-Scale Model (Lines 810-829) -- KEEP (CRITICAL)

> "RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE"
> "This is MULTIPLICATIVE. Zero in any factor = zero richness regardless of others."

This is philosophy expressed as a formula that actually works generatively. Unlike the richness scoring formula (which converts judgment to arithmetic), this formula works as a MENTAL MODEL. The agent uses it to check: "Am I dense? Am I restrained? Am I confident?" The multiplicative nature is insight, not compliance.

The Flagship failure example (lines 824-828) is provenance-as-philosophy -- a cautionary tale that teaches through story, not rules.

**What makes this different from the removed formulas:** This formula operates on creative categories (density, restraint, confidence) not extracted metrics (opposition depth x structural overlap x metaphor space width). The agent judges density by asking "would commenting out this CSS line cause a visible change?" -- that's creative self-evaluation, not arithmetic.

#### Phase 4.0: Perceptual Guardrails (Lines 830-1014) -- HEAVY REFRAME

This is ~184 lines of threshold tables, CSS value specifications, calculation formulas, and enforcement guidance. It is the densest compliance section in the entire skill.

**Content Proportion Guardrails (Lines 837-845)** -- REFRAME
Five rows of values (65% ratio, 80% ratio, 32px padding, 220px text width, 45-80 characters). The agent needs to know the canvas dimensions (940-960px container, 45-80 CPL). Everything else is derivable.

**Reframe:** "Your container is 940-960px. Line length should be 45-80 characters. These are physical reality, not aesthetic preference."

**Typographic Spacing Guardrails (Lines 847-855)** -- REMOVE
Five rows of spacing values (heading ratio >= 1.5, 16px label gap, 16px heading-body gap, 1.5 line-height, 48px section breathing). The agent needs line-height 1.5 (accessibility) and the heading ratio principle (headings belong to content below). The specific pixel values are over-specification.

**Compression and Density Guardrails (Lines 857-863)** -- REMOVE
"Deepest padding >= 40% of shallowest padding." This is a rule extracted from failure analysis. The philosophy behind it ("don't compress so aggressively that readability suffers") is more useful than the 40% threshold.

**Perception Thresholds Table (Lines 864-884)** -- REMOVE FROM TC SKILL

This is the single most important REMOVE recommendation. The perception thresholds (>=15 RGB, >=2px font-size, >=0.03em letter-spacing, >=24px spacing, >=200 font-weight, >=1px border, <=120px stacked gap) are gate-runner specifications. They belong in the programmatic verification layer, not in the creative process layer.

**Why this matters (Principle 7):** Each window should be optimized for its purpose. The TC agent's purpose is creative derivation. Embedding gate-runner thresholds in the creative process turns the agent into a self-verifier, which activates compliance mode (Principle 3: "comply with these rules" activates verification). The gate runner checks these thresholds AFTER the build. Putting them here makes the agent build-to-threshold instead of build-to-conviction.

**The S-09 Stacking Check (Lines 878-884)** is a particularly egregious example. This is a programmatic verification procedure (sum six values, compare to threshold) embedded in a creative process document. It belongs entirely in the gate runner.

**CPL Calculation Formula (Lines 886-921)** -- REMOVE from TC skill
A calculation formula with concrete examples, failure cases, and fix options. This is builder engineering, not compositional derivation. The TC agent derives the metaphor; the builder manages CPL.

**Container Width Guardrails (Lines 923-959)** -- REFRAME
The principle (940-960px, never compromise) is important. The 36 lines of explanation, examples, escape hatches, and priority ordering are over-specification. The agent needs ONE line:

> "Container is 940-960px. Express narrowness through internal padding, not width reduction."

**Heading Spacing Enforcement (Lines 963-1013)** -- REMOVE from TC skill
51 lines of heading spacing enforcement with CSS examples, fail cases, WCAG references, and margin collapse guidance. This is builder-level CSS engineering that belongs in a conventions brief, not a compositional derivation skill.

**Critical Principle: Priority Order (Lines 1016-1028)** -- REFRAME
The priority order (readability > breathing > content width > metaphor fidelity > aesthetic preference) is useful philosophy. Keep as a one-liner: "When metaphor conflicts with readability, readability wins. Always."

#### Step 4.0: Mechanism Library Access (Lines 1030-1089) -- REFRAME

The library access rules are fine (now you CAN read mechanism-catalog). The per-category mechanism deployment table (lines 1061-1069) is compliance:

> "Deploy at least 1 mechanism from EACH of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation)."

The philosophy behind this ("a composition that ignores entire dimensions feels incomplete") is more generative than the S:1+ H:1+ minimums.

The justification requirement (lines 1073-1076) is GOOD:

> "For EACH mechanism you deploy: one sentence on WHY it serves THIS content at THIS location"
> "For AT LEAST 3 mechanisms you considered but REJECTED: one sentence on WHY they don't fit"

This is conviction documentation (Principle 5). Keep.

**Layout Diversity Mandate (Lines 1081)** -- REFRAME
">=2 sections MUST use non-single-column layouts" is compliance. "Monotonous single-column layout is the #1 visual uniformity failure" is philosophy. Keep the philosophy.

**Scope-Dependent Quality Floors (Lines 1083-1087)** -- REMOVE
"SHORT: 8-10 mechanisms, 3-scale fractal echo minimum" -- this is extracted specification. If the agent does the creative work well, mechanism counts follow naturally.

#### Step 4.1: Extract Metaphor Physical Properties (Lines 1092-1170) -- REFRAME

The 5-category taxonomy (Spatial, Temporal, Material, Behavioral, Relational) is EXCELLENT creative scaffolding. The tables mapping properties to CSS mechanisms are COMPLIANCE -- they pre-solve the creative translation step.

**What to keep:** The 5 categories and the Completeness Checklist (lines 1144-1151):

> "1. Spatial: What is the physical arrangement?"
> "2. Temporal: What is the time dimension?"
> "3. Material: What is the substance like?"
> "4. Behavioral: What does it DO?"
> "5. Relational: How do parts relate?"

These are generative questions. The CSS tables (lines 1098-1142) pre-solve these questions.

**What to keep:** Density Patterns (lines 1153-1164). CRESCENDO, F-PATTERN, BENTO, PULSE are compositional vocabulary -- named patterns the agent can select from. "The metaphor determines WHICH pattern; the content determines WHERE density peaks" is philosophy.

#### Step 4.2: Translation Grammar (Lines 1172-1253) -- REMOVE

This is the single largest block of compliance in the skill: 81 lines of CSS lookup tables mapping Weight, Depth, Density, Flow, Containment, Transition, and Hierarchy to exact CSS values.

> "Heavy: border: 3px solid or border-left: 4px solid"
> "Surface: background: #FEF9F5"
> "Sparse: padding: 64px or 80px"

This REMOVES the creative translation step entirely. The agent doesn't need to figure out how to express "depth" in CSS -- it just looks it up. This violates Principles 1, 3, and 4 simultaneously:
- **Principle 1 (Processing over extraction):** The lookup table IS the extraction. The agent doesn't process; it retrieves.
- **Principle 3 (Task determines mode):** "Look up the CSS value for depth" is retrieval, not generation.
- **Principle 4 (Philosophy over specification):** These ARE specifications, pure and simple.

**The irony:** The skill's opening principle says "You are CONSTRUCTING, not DISCOVERING" -- then provides discovery tables.

**What to keep:** The 6 Exhaustive CSS Channels list (lines 1244-1255) is useful as a VOCABULARY inventory. "These are the 6 channels you can express through" is constraint communication, not compliance.

#### Step 4.2B: Pacing Prediction Heuristic (Lines 1257-1296) -- REFRAME

The concept (predict pacing risk before building) is useful. The 5 questions are good creative probes:

> "Section count: How many sections will the content produce?"
> "Breathing zone model: Does the metaphor call for empty transitions?"
> "Element uniformity: Does the metaphor produce same-shaped repeated elements?"
> "Dramatic moment placement: Is there a 'climax' moment?"
> "Transition model check: For each section boundary..."

These activate creative planning. The output format (PACING RISK: LOW/MODERATE/HIGH with specific fields) is compliance scaffolding.

**Reframe:** Keep the 5 questions as creative prompts. Drop the structured output format.

#### Step 4.2C: Rhythm Variation Requirement (Lines 1298-1324) -- REFRAME

> "Your page MUST include at least 3 DIFFERENT transition types between major sections."

This is a BINARY RULE expressed as a compliance requirement. But the philosophy behind it (lines 1319-1324) is excellent:

> "The issue is NOT mechanism count but transition VARIETY. Uniform spacing creates mechanical rhythm regardless of mechanism deployment."

**Reframe:** Lead with "Uniform transitions create mechanical rhythm. Vary your transitions." The "at least 3" is a useful floor but secondary to the principle.

#### Step 4.3: Coherence Checking (Lines 1326-1361) -- REFRAME

Five coherence rules (C-1 through C-5). The PRINCIPLES behind them are generative:
- C-1: "All channels reinforce the same direction" -- compositional integrity
- C-2: "Transition strength matches axis distance" -- musical thinking
- C-3: "Typography role matches content authority" -- semantic integrity
- C-4: "Border category matches containment intent" -- structural integrity
- C-5: "Accent color matches semantic role" -- identity integrity

The SPECIFICATIONS (exact CSS values, exact border widths, exact color mappings) are compliance. The agent needs the principles, not the lookup values.

#### Multi-Coherence Binding Rules (Lines 1363-1395) -- REMOVE/REFRAME

6 rules (R-MC-01 through R-MC-06). Some are useful:
- R-MC-01 (transition table as deliverable) -- KEEP (process scaffolding)
- R-MC-02 (minimum 3 channels per boundary) -- REFRAME (the principle "zone boundaries must be perceptible" is better)
- R-MC-03 (perception thresholds for counting) -- REMOVE (gate-runner territory, duplicates Phase 4.0 thresholds)
- R-MC-04 (direction agreement) -- KEEP (coherence philosophy)
- R-MC-05 (no contradiction across channels) -- KEEP (coherence philosophy)
- R-MC-06 (zone count: 2-4 major zones) -- REFRAME (useful range, over-specified justification)

#### Step 4.4: Component Inventory -- Tier 2 vs Tier 3 (Lines 1397-1415) -- KEEP

The Tier Boundary Test (Portability, Isolation, Substitution) is a useful creative thinking tool. It helps the agent decide whether to reuse or invent.

#### Step 4.5: Adapt-vs-Invent Decision (Lines 1417-1431) -- KEEP

> "Before inventing a new component: Can an existing component be ADAPTED? Can the property be expressed through LAYOUT alone? Is the property actually NECESSARY?"

Three honest questions that enforce restraint through philosophy, not rules.

#### Step 4.6: Transition Grammar (Lines 1433-1453) -- REFRAME

The transition matrix (From\To: Z-Pattern, F-Pattern, Bento, Spiral, Choreography) is a useful reference. The transition types (SMOOTH/BRIDGE/BREATHING) with semantic definitions are compositional vocabulary. The exact CSS values (48px margin + 1px solid, 64px margin + bg shift, 80px margin + 3px solid) are compliance.

**Reframe:** Keep the transition types as named concepts with semantic definitions. Move exact CSS values to conventions brief.

#### Step 4.7: Fractal Consistency GATE (Lines 1455-1487) -- REFRAME

5 binary rules. The concept (fractal self-similarity at 5 zoom levels) is genuine compositional philosophy. The mandatory Fractal Echo Table (lines 1466-1474) is a useful thinking tool that forces the agent to consider each scale explicitly.

**Keep:** The concept, the 5 scales (Navigation, Page, Section, Component, Character), the bottom-up construction principle, the "3 strong beats 5 weak" principle.

**Remove:** Specific thresholds in the table ("Padding >= 48px," "BG delta >= 15 RGB," "Tracking delta >= 0.025em") -- these are gate-runner thresholds duplicated into the creative process.

---

### Phase 4.5: Sub-Skill Output Mode (Lines 1491-1615)

**Overall: HEAVY REFRAME -- the TC brief format is the primary handoff mechanism**

#### TC Brief Format: 8 Sections (Lines 1496-1615)

**Section 1: STRUCTURAL METAPHOR (Lines 1499-1506)** -- REFRAME
The concept (document the metaphor and why it works) is conviction communication (Principle 5). But the format includes:

> "QUALITY: [score]/18 (Res:[n] Iso:[n] ResS:[n] Feas:[n] PRisk:[n] PCost:[n]) -- from Phase 3.5G rubric."

This is a compliance score summary in the conviction document. Remove the numeric scores. Keep: the metaphor name, WHY it's structural, CSS directions it suggests, the BECAUSE test result, and the risk profile (what to resist/amplify).

**Section 2: ZONE ARCHITECTURE (Lines 1508-1512)** -- KEEP
Zone names, sequence, direction, content summary, density, role, pacing, layout topology. This is creative architecture documentation.

**Section 3: CONTENT TENSIONS (Lines 1514-1518)** -- KEEP
List tensions, identify dominant tension. This is conviction documentation.

**Section 4: SELECTED MECHANISMS (Lines 1519-1529)** -- REFRAME
The mechanism list is useful. But:

> "For each mechanism: 1-line CSS recipe (e.g., 'border-left: 4px solid var(--accent-purple); padding: 24px 32px') AND how it serves the metaphor"

The CSS recipe pre-solves the builder's creative work. "How it serves the metaphor" is conviction. Keep conviction, reframe CSS recipes as suggestions/directions rather than prescriptions.

The REINFORCING PAIRS and REJECTED lists are excellent conviction documentation. KEEP.

**Section 5: METAPHOR-IMPLIED CSS DIRECTIONS (Lines 1531-1537)** -- KEEP
"These are DIRECTIONS, not prescriptions. The builder adapts them." The framing IS generative. But check consistency with Section 6 (which IS prescriptive).

**Section 6: BUILD RECIPE (Lines 1539-1596)** -- REMOVE/HEAVY REFRAME

This is the most compliance-heavy section of the TC brief. It is a boundary-keyed CSS specification with exact hex values, exact pixel values, and embedded perception checks:

> "Set zone background: [exact color value] (delta from previous zone: [N] RGB -- PERCEPTION CHECK: >=15 RGB? YES/NO)"
> "Deploy [mechanism name]: [2-line CSS snippet]"

The approved verb tiers (Tier 1: Find, Delete, Replace, Add, Set, Read; Tier 2: Select, Deploy, Assess, Compare) are compliance process specification.

The boundary-keyed CSS table (lines 1569-1578) pre-computes the ENTIRE compositional architecture in CSS terms:

> "Z[N]->Z[N+1] ([DIRECTION]):"
> "  Chromatic: [from hex] -> [to hex] (delta: [N] RGB)"
> "  Typographic: [from size/weight] -> [to size/weight]"

This is the extraction -> compression -> compliance paradigm in its purest form. Research produced findings, TC agent compressed them to exact CSS values, builder complies.

**The generative alternative (Principle 2, 4, 5):**
Replace the CSS-value specification with CONVICTION. Instead of "Set zone background: #FAF5ED (delta from Z1: 18 RGB -- PERCEPTION CHECK: >=15? YES)", write:

> "This zone deepens. The reader should feel a palpable shift -- like stepping from a sunlit porch into a warm library. The background darkens noticeably. The text tightens. The border weight increases. Everything says: we're going deeper."

This activates the builder's generative mode. It communicates the WHAT and WHY without pre-solving the HOW.

**Section 7: DETECTION EXPECTATIONS (Lines 1597-1602)** -- REFRAME
"NOTE: This section goes to the WEAVER for diagnostic context during fix cycles. It does NOT go to PA auditors." Good routing (Principle 7). But squint test expectations and CSS channel specifications are still compliance.

**Section 8: BUILDER ANCHORS (Lines 1604-1612)** -- KEEP (CRITICAL)

> "3 things the builder MUST NOT violate, derived from this specific page's metaphor + zones + tensions"

This is perfect conviction-as-constraint. Three non-negotiables, derived from THIS page, carrying the TC agent's creative conviction to the builder. This IS the new paradigm: conviction over rules at every boundary.

---

### Fix Cycle Protocol (Lines 1619-1631) -- KEEP

TYPE A (mechanical), TYPE B (structural), TYPE C (compositional) -- clear escalation path. "Always try TYPE A first" prevents over-reaction. This is process wisdom, not compliance.

### Warning Selection Protocol (Lines 1635-1649) -- REFRAME

The warning codes (W-DEADZONE, W-OVERLABEL, W-MONOTONY, etc.) are useful shorthand. The condition-to-warning mapping is compliance scaffolding. Keep warning concepts, drop the codification.

---

## Cross-Cutting Findings

### 1. Duplicate Specification Problem

Perception thresholds appear in THREE places:
- Phase 4.0 Perceptual Guardrails (lines 864-884)
- Multi-Coherence Rule R-MC-03 (lines 1377-1387)
- TC Brief Section 6 Build Recipe PERCEPTION CHECKs (lines 1584-1593)

This triple-encoding wastes ~60 lines and creates maintenance burden. These thresholds belong in ONE place: the gate runner. The TC agent should not be a self-verifier.

### 2. Scoring Rubric Proliferation

The skill contains at least 4 independent scoring systems:
- Richness Formula (Phase 2): Opposition x Overlap x Width = 1-27
- Composite Verdict (Phase 3.5): Resolution + Isomorphism + Resonance + Feasibility + Risk + Cost
- Metaphor Quality Rubric (Phase 3.5G): 6 criteria x 0-3 = /18
- Anti-Scale Model (Phase 4.0A): Density x Restraint x Confidence

Only the last one (Anti-Scale Model) functions generatively -- it's a mental model for creative self-evaluation. The other three convert creative judgment to arithmetic, activating compliance mode.

### 3. The CSS Lookup Table Problem

Lines 1098-1253 (Steps 4.1-4.2) contain ~155 lines of CSS lookup tables. These pre-solve the creative translation from metaphor properties to CSS mechanisms. A generatively-framed skill would:
- Name the 6 CSS channels (background, border, typography, spacing, layout, accent) as the VOCABULARY
- Provide the design system CONSTRAINTS (no border-radius, no box-shadow, 3 fonts, 3 border weights)
- Let the agent DERIVE the specific CSS expressions from metaphor + vocabulary + constraints

The lookup tables are the skill doing the builder's creative work for them.

### 4. The Brief Length Paradox

"Brief Length: Target 80-120 lines" (line 1611) -- but the brief format specification (Sections 1-8) contains embedded CSS tables, perception check protocols, boundary-keyed value tables, and verb tier restrictions that would require 150+ lines to fully populate. The format specification contradicts the length target.

Under the generative frame, the TC brief should be ~40-60 lines of conviction, direction, and architectural decisions -- with ZERO pre-computed CSS values. The builder receives raw material (the brief) and creates from it.

---

## Summary Tables

### By Phase: Keep / Remove / Reframe Counts

| Phase | Lines | KEEP | REMOVE | REFRAME |
|-------|-------|------|--------|---------|
| Critical Principle (6-23) | 18 | 18 | 0 | 0 |
| Phase 0 (42-119) | 78 | 30 | 18 | 30 |
| Phase 1 (123-206) | 84 | 78 | 0 | 6 |
| Phase 2 (209-377) | 169 | 95 | 34 | 40 |
| Phase 3 (380-778) | 399 | 190 | 119 | 90 |
| Phase 4 (792-1487) | 696 | 130 | 306 | 260 |
| Phase 4.5 (1491-1615) | 125 | 40 | 45 | 40 |
| Fix Cycle + Warnings (1619-1649) | 31 | 20 | 0 | 11 |
| **TOTAL** | **1,600** | **601 (38%)** | **522 (33%)** | **477 (30%)** |

### Top 10 KEEP Items (Irreplaceable Generative Content)

1. **Critical Principle** (lines 6-23): "You are CONSTRUCTING, not DISCOVERING"
2. **Core Four Axes** (lines 127-135): FEEL/UNDERSTAND/DO/BECOME questioning
3. **Opposition Predicts Richness** (lines 169-188): Opposition as creative fuel
4. **The Addition Test** (lines 249-255): Genuine vs cosmetic tension diagnostic
5. **The BECAUSE Test** (line 294): Content-coupling verification
6. **The Bridge Concept** (lines 382-384): Emotional tension, structural bridge
7. **The Search Query** (lines 420-428): Constrained creative search format
8. **The Irreducible Creative Step** (lines 693-700): Honest limitation of procedure
9. **Anti-Scale Model** (lines 810-829): Density x Restraint x Confidence
10. **Builder Anchors** (lines 1604-1612): 3 non-negotiable conviction constraints

### Top 10 REMOVE Items (Compliance That Should Go)

1. **Perception Thresholds Table** (lines 864-884): Gate-runner territory, not creative process
2. **S-09 Stacking Check** (lines 878-884): Programmatic verification in creative document
3. **CPL Calculation Formula** (lines 886-921): Builder engineering, not composition
4. **CSS Translation Grammar Tables** (lines 1172-1253): Pre-solves creative translation
5. **Heading Spacing Enforcement** (lines 963-1013): Builder-level CSS engineering
6. **Perceptual Risk Scoring Rubric** (lines 539-561): Point system for creative judgment
7. **Perceptual Cost Assessment** (lines 563-616): Another point system for creative judgment
8. **Metaphor Quality Scoring Rubric** (lines 618-670, except binary rejection checks): Arithmetic replacing judgment
9. **Richness Formula scoring/thresholds** (lines 298-327 scoring portions): False precision on creative judgment
10. **Build Recipe with boundary-keyed CSS tables** (lines 1539-1596): Extraction->compression->compliance in purest form

### Top 5 REFRAME Items (Good Content, Wrong Framing)

1. **Universal Compositional Requirements** (lines 84-96): Convert extracted rules to generative philosophy
2. **Per-category mechanism deployment** (lines 1061-1069): Convert minimums to "express across all dimensions"
3. **TC Brief Section 6 Build Recipe** (lines 1539-1596): Convert CSS specification to conviction + direction
4. **Phase 4.0 Guardrails** (lines 830-1014): Extract physical reality constraints, remove engineering specifications
5. **Coherence Rules C-1 through C-5** (lines 1326-1361): Keep principles, remove CSS value lookups

---

## The Central Recommendation

The TC skill has a philosophical SPINE (Phases 1-3 core, Anti-Scale Model, Builder Anchors) that is genuinely generative and should be preserved. This spine is buried under a compliance SHELL (CSS tables, scoring rubrics, threshold specifications, perception checks) that was accumulated through failure analysis.

**The pattern:** Each pipeline failure produced extracted findings. Each finding was compressed into a rule. Each rule was added to the skill. The skill grew from philosophy to compliance through accretion.

**The fix:** Separate the THINKING document (philosophy, questions, creative process) from the VERIFICATION layer (thresholds, calculations, CSS specifications). The TC skill should be ~650-800 lines of generative philosophy. The verification thresholds belong in the gate runner. The CSS value specifications belong in the conventions brief. The scoring rubrics should be replaced by philosophical questions.

**Under the generative frame:** The TC agent should finish its work having INHABITED the content, DERIVED a metaphor, and communicated CONVICTION about what the page should feel like -- not having COMPUTED scores, LOOKED UP CSS values, and ASSEMBLED a compliance specification.
