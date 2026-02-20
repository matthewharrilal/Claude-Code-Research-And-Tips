# Anti-Regression Analysis: Would Enrichment Reproduce Documented Failure Modes?

**Agent:** anti-regression-analyst (Opus 4.6)
**Date:** 2026-02-20
**Purpose:** Evaluate whether adding compositional intelligence concepts to the pipeline would reproduce the 10 documented failure modes from the project's experimental history
**Evidence base:** MEMORY.md (200 lines of documented findings), SKILL.md (408 lines), conventions-brief.md (403 lines), anti-reproduction-protocol.md (7 binary gates), pipeline-analysis CLAUDE.md (corpus navigation)

---

## METHODOLOGY

For each of the 10 documented failure modes, I assess:
1. What the failure mode IS (with evidence citation)
2. How each proposed enrichment type maps to it
3. RISK LEVEL: HIGH / MEDIUM / LOW / NONE
4. SPECIFIC MITIGATION: what to do differently

The "proposed enrichment types" I evaluate are the categories of compositional intelligence that might be added to the pipeline:
- **A. Compositional fluency concepts** (metaphor-as-CSS-driver, parametric echo, density arc)
- **B. Multi-coherence verification** (channel counting, semantic direction alignment)
- **C. Perception thresholds** (RGB deltas, font-size deltas, stacking limits)
- **D. Recipe formatting** (sequenced build steps with exact values)
- **E. Scale/fractal concepts** (5-scale hierarchy, anti-scale model)
- **F. Content-form coupling** (section-responsive density, zone personality)

---

## FAILURE MODE 1: COMPLEXITY RATCHET

### What It Is
Rules accumulate and never retire. The pipeline grew from simple to 963 lines to 1,004 lines. Each iteration adds rules; none removes them. The complexity ratchet is documented in MEMORY.md: "rules only accumulate, never retire -- needs sunset protocol." The anti-reproduction protocol (Gate 6) identified that the meta-to-output ratio was already at infinity:1 during Pipeline v2 design.

### Current State
- SKILL.md: 408 lines (lean)
- conventions-brief.md: 403 lines (lean)
- Total builder-visible specification: ~811 lines

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **HIGH** | These are the most abstract concepts. "Parametric echo" and "density arc" are exactly the kind of concepts that generate 5-10 rules each without clear retirement criteria. The 963-line master prompt accumulated to that length by adding precisely these kinds of conceptual layers. |
| B. Multi-coherence | **LOW** | Already in conventions-brief.md Section 4 (lines 92-123). Further enrichment would refine existing content, not add new sections. |
| C. Perception thresholds | **LOW** | Already embedded in conventions-brief.md Section 2 (lines 51-69). Already binary. No accumulation pressure because thresholds replace judgment rules rather than adding to them. |
| D. Recipe formatting | **NONE** | Recipe formatting does not add rules. It restructures existing rules into sequenced steps. Line count may increase but cognitive load decreases because sequence replaces judgment. |
| E. Scale/fractal | **MEDIUM** | Already in conventions-brief.md Section 5 (lines 126-149). The scale hierarchy could expand into per-scale rules (5 scales x N rules = 5N new rules). The anti-scale research found "5 scales is the mathematical ceiling; beyond 5, add CHANNELS not LEVELS" -- this principle limits expansion but the temptation exists. |
| F. Content-form coupling | **MEDIUM** | This concept is mentioned in SKILL.md line 70-71 but not elaborated. It could grow unboundedly because content types are infinite. "Dense analytical content = tighter spacing" is one rule; applied per content type, it becomes N rules. |

### Aggregate Risk: **MEDIUM-HIGH**

### Specific Mitigation
1. **Sunset rule:** Before adding ANY concept, identify which existing line(s) it replaces. Net line count for the conventions brief must stay within 400-450 lines. If enrichment pushes beyond 450, something must be cut. This is the direct implementation of the sunset protocol MEMORY.md says is needed.
2. **One-in-one-out:** Every new rule requires deleting or merging an existing rule of equal or greater length. Document the deletion in a changelog.
3. **Budget ceiling:** The conventions brief is currently 403 lines. Set a hard cap at 500 lines. The SKILL.md is 408 lines. Set a hard cap at 450 lines. Combined builder-visible specification must not exceed 950 lines. (The failed 963-line prompt is the empirical evidence for this ceiling.)

---

## FAILURE MODE 2: GUARDRAIL FACTORY (7.9:1 RATIO)

### What It Is
The 963-line master prompt had a 7.9:1 ratio of guardrails (what NOT to do) to playbooks (what TO do). Builders were told extensively what to avoid and almost never what to build. This is documented in MEMORY.md: "91.2% compression loss from research to prompt. Fix: every guardrail needs a paired playbook with concrete CSS."

### Current State
The conventions brief is explicitly designed to be world-description, not checklist. Let me count:

**conventions-brief.md guardrail indicators:**
- "cannot be overridden" (line 13)
- "NEVER" appears in soul constraints (line 18)
- Section 12 "RESTRAINT LIST" (10 items, lines 276-293) -- all prohibitions
- Various "must"/"never" scattered throughout

**conventions-brief.md playbook indicators:**
- Section 8 "CSS VOCABULARY" (lines 183-208) -- 7 concrete CSS patterns with values
- Section 7 "TRANSITION GRAMMAR" (lines 166-179) -- 3 transition types with pixel values
- Section 4 example (lines 116-117) -- specific CSS values for multi-coherence
- Section 3 self-test (lines 80-81) -- actionable assessment method

**Estimated ratio: ~1.5:1** (much better than 7.9:1 but still guardrail-heavy)

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **HIGH** | Compositional concepts (metaphor, density arc, parametric echo) are inherently abstract. The natural language for these is descriptive/prohibitive ("the metaphor must be structural, not textual" -- guardrail language). Without deliberate effort, every compositional concept becomes 3-5 guardrails and 0-1 playbooks. |
| B. Multi-coherence | **MEDIUM** | Multi-coherence already has a good playbook example in the brief (line 116: specific CSS values). But enriching multi-coherence verification tends toward "FAIL if fewer than N channels shift" language, which is guardrail. |
| C. Perception thresholds | **LOW** | Thresholds are naturally playbook-shaped: "set delta to >= 15 RGB" is a playbook instruction with a concrete value. They replace judgment ("make it perceptible") with measurement. |
| D. Recipe formatting | **NONE** | Recipe formatting IS playbook by definition. "Step 1: Set X to Y" is pure playbook. This enrichment type actively reduces the guardrail-to-playbook ratio. |
| E. Scale/fractal | **MEDIUM** | The fractal echo table (brief lines 132-138) is playbook-shaped (min thresholds with verification). But scale concepts easily drift into "the composition must echo at all scales" (guardrail) without "here is how to echo at component scale: set inner padding to [value]" (playbook). |
| F. Content-form coupling | **HIGH** | "Dense analytical content = tighter spacing" -- but HOW tight? Without specific CSS values, this is a guardrail. The concept inherently requires per-content-type playbooks, which are expensive to write and tend to default to guardrails. |

### Aggregate Risk: **MEDIUM**

### Specific Mitigation
1. **Paired playbook mandate:** Every enrichment concept added to the brief MUST include at least one concrete CSS snippet showing what TO DO. Format: "LIKE THIS: [exact CSS]" alongside any "NOT LIKE THIS" example. This is Gate 3 from the anti-reproduction protocol.
2. **Ratio audit on commit:** After any enrichment edit, count guardrail and playbook sentences in the modified section. Reject if section ratio exceeds 1:1. The soul constraints section (Section 1) is exempt per Gate 3's escape hatch.
3. **CSS recipe appendix:** If a concept cannot be expressed as a CSS recipe in the brief itself, add a worked example to the mechanism catalog rather than adding a prohibition to the brief.

---

## FAILURE MODE 3: CHECKLIST TRAP

### What It Is
The Middle builder got a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs) and produced PA-05 4/4 DESIGNED. The Flagship builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if/Must be" verbs) and produced PA-05 1.5/4. MEMORY.md documents: "Recipe = DESIGNED; Checklist = FLAT."

### Current State
The conventions brief is explicitly NOT a checklist. Line 7: "Read this brief once, fully. Then build." The brief uses world-description language ("these are the physics of human perception") not checklist language. The PROCESS section (lines 381-398) is recipe-shaped: Understand / Plan / Build / Verify with verification pauses. The Quality Floor (Section 9B) has checklist-adjacent language (">= 14 mechanisms deployed") but frames it as "what a COMPOSED page naturally produces."

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **LOW** | These concepts are narrative/descriptive by nature. "Density arc" describes a quality of experience, not a checklist item. The risk is LOW because compositional concepts resist checklist formatting -- they are too abstract to become "verify: density arc present: YES/NO." |
| B. Multi-coherence | **HIGH** | Multi-coherence is the concept MOST susceptible to checklist formatting. ">= 3 channels at every boundary" is already checklist language in the brief. Adding more verification criteria ("avg >= 4", "semantic direction consistent") creates a multi-coherence checklist. The Flagship experiment had multi-coherence rules and achieved 0% perceptible multi-coherence. |
| C. Perception thresholds | **MEDIUM** | Thresholds naturally become checklist items: ">= 15 RGB, >= 2px font-size, >= 0.025em letter-spacing." BUT: the evidence shows these specific checklist items WORK (they are binary, concrete, and measurably effective). The risk is not that they become a checklist but that they crowd out recipe instructions by occupying the builder's attention budget. |
| D. Recipe formatting | **NONE** | Recipe formatting IS the antidote to the checklist trap. It is the cure, not the disease. |
| E. Scale/fractal | **MEDIUM** | The Fractal Echo Table (brief Section 5) is already borderline checklist: 5 rows, min threshold per row, "Verified? [ ]" column. Adding more scale requirements would deepen the checklist pattern. The DEPENDENCY note (line 140-141) is narrative/explanatory, which is good. |
| F. Content-form coupling | **LOW** | Content-form coupling resists checklisting because content varies. You cannot write "verify: content matches form: YES/NO" without judgment. It stays narrative by necessity. |

### Aggregate Risk: **MEDIUM**

### Specific Mitigation
1. **Verb audit:** After enrichment, scan the modified section for checklist verbs: "verify", "ensure", "check that", "fail if", "must be", "must have." Count them. If they exceed recipe verbs ("set", "write", "apply", "deploy", "use") in the section, rewrite as recipe steps.
2. **World-description framing:** Every new concept should be framed as "this is what happens in this world" (the conventions brief's existing voice) rather than "verify that this happens." The brief's current voice is its best defense against checklist drift.
3. **Separate verification from instruction:** Move all "verify" language into the SKILL.md gate runner (where it belongs as programmatic checks). The conventions brief should contain ONLY building instructions and world descriptions. Verification stays in the verification layer.

---

## FAILURE MODE 4: 660:1 META-TO-OUTPUT RATIO

### What It Is
The overall project meta-to-output ratio is 2.6:1 (47,944 lines infrastructure vs 18,428 lines product). The Flagship inflated to 660:1 (pathological). MEMORY.md threshold: "if meta-output exceeds 20:1, pipeline is feeding on itself." The anti-reproduction protocol's Gate 6 identified this ratio as already at infinity:1 during Pipeline v2 design.

### Current Assessment
This analysis itself contributes to the meta ratio. The pipeline-enrichment-research team (of which I am one agent) is producing meta-analysis about whether to produce meta-analysis. This is the recursive trap.

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **HIGH** | These concepts require extensive RESEARCH to define properly (what IS "parametric echo"? how does it manifest?). Each concept generates 5-20 pages of research before producing 2-3 lines of specification. Research-to-spec ratio: ~50:1 per concept. Adding 5 concepts = 250 pages of research for 15 lines of spec. |
| B. Multi-coherence | **LOW** | Already researched and specified. Enrichment would refine, not research from scratch. Marginal meta cost is low. |
| C. Perception thresholds | **LOW** | Already researched and specified. The threshold table exists. Adding it to a new location is copying, not researching. |
| D. Recipe formatting | **LOW** | Reformatting is mechanical transformation, not research. Converting "X must be Y" to "Step N: Set X to Y" generates approximately 0 meta-analysis. |
| E. Scale/fractal | **MEDIUM** | The scale research is done (6 Opus agents, 6 reports). But applying it to the brief requires deciding WHICH findings to embed, which requires meta-analysis of the research. |
| F. Content-form coupling | **HIGH** | This concept is underdeveloped in the pipeline. Defining content-form coupling rules would require new research (what content types exist? what form rules apply to each?). This generates significant new meta-output. |

### Aggregate Risk: **MEDIUM-HIGH** (for the research phase), **LOW** (for the application phase)

### Specific Mitigation
1. **No new research:** All enrichment must draw from EXISTING research (the 41-file pipeline analysis corpus, the scale exploration reports, the flagship retrospective). No new agent teams to investigate enrichment concepts. The research is done.
2. **Direct editing only:** Enrichment should be proposed as EXACT EDITS to the conventions brief and SKILL.md -- specific lines to add, modify, or delete. Not as concepts to "explore" or "investigate." This converts the task from research (meta-output) to editing (product-output).
3. **Meta budget:** This entire enrichment research effort (all agents, all reports) should total no more than 50 pages. If it exceeds that, the meta ratio is already pathological for the output it will produce (a few dozen lines of specification changes).

---

## FAILURE MODE 5: 50:1 COMPRESSION LOSS

### What It Is
337 research findings were compressed 50:1 into behavioral constraints, with 99.8% information loss. "Sample 2-4 mechanisms" replaced a rich vocabulary of 18 mechanism types with 337 supporting findings. The anti-reproduction protocol's Gate 1 requires every rule to include: (a) a concrete value, (b) a provenance citation, (c) a failure example.

### The Survivability Question
Would enrichment content survive the compression from:
1. Research findings (this report, others)
2. -> Brief/SKILL.md specification (~50-100 new lines)
3. -> Builder's working memory during a 2-hour build
4. -> CSS output

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **HIGH** | Abstract concepts compress catastrophically. "Parametric echo" in a spec becomes "vary component padding by zone" in working memory becomes... nothing in CSS. The builder has no concrete value to write. Compression kills abstract concepts first because they have no specific CSS anchor. |
| B. Multi-coherence | **LOW** | Multi-coherence compresses well because it has concrete measurement: "3 of 6 channels shifting" is a number. Numbers survive compression. The channel names (Chromatic, Typographic, Spatial, Structural) survive because they map to CSS properties. |
| C. Perception thresholds | **NONE** | Thresholds ARE concrete values. ">= 15 RGB" cannot be compressed further. It is already the compressed form. This is why perception thresholds have the highest propagation reliability (File 21 ranks them Tier 1). |
| D. Recipe formatting | **LOW** | Recipe steps survive compression because they are sequential and concrete. "Step 1: Set background delta >= 15" persists in working memory as a to-do item. The builder checks it off. |
| E. Scale/fractal | **MEDIUM** | The 5-scale hierarchy has compression risk because scale 4 (Component) and scale 5 (Character) are not intuitive CSS operations. "Echo the organizing principle at component scale" requires translation into CSS that the builder must invent. The fractal echo table helps but doesn't eliminate the translation gap. |
| F. Content-form coupling | **HIGH** | "Content-responsive density" is a principle, not a CSS value. The builder must translate "this section is analytical, so tighten spacing" into specific padding values. The translation is where compression loss occurs -- the PRINCIPLE survives but the APPLICATION is lost. |

### Aggregate Risk: **MEDIUM-HIGH** (for abstract concepts), **LOW** (for concrete values)

### Specific Mitigation
1. **CSS anchor requirement:** Every enrichment concept must include at least one specific CSS property-value pair. Not "tighter spacing" but "padding: 32px instead of 64px for dense zones." This is Gate 1 from the anti-reproduction protocol applied to enrichment.
2. **Builder translation test:** Before adding an enrichment concept to the brief, imagine a builder reading it for the first time in the middle of a 2-hour build. Can they write CSS from it in under 30 seconds? If not, the concept needs more specificity or should be converted to a recipe step.
3. **Compression audit:** After all enrichments, read the modified brief in a single pass. Any concept that cannot be recalled 10 minutes later without re-reading has failed the compression test and should be cut or made more concrete.

---

## FAILURE MODE 6: BINARY RULES ACHIEVE COMPLIANCE, NOT QUALITY

### What It Is
Binary rules achieve 100% agent compliance but ">=3 distinct spacing values" can be satisfied by 48px/49px/50px -- technically compliant, semantically empty. MEMORY.md: "Aggregate minimum compliance = formally correct, visually blank page." The Flagship experiment passed all programmatic gates while scoring PA-05 1.5/4.

### Current State
The conventions brief's Quality Floor (Section 9B, lines 230-239) is all binary rules: ">= 14 mechanisms", ">= 800 CSS lines", ">= 3 channel shifts", ">= 3 border configurations", ">= 8 component types", "3-5 zones with >= 15 RGB delta." These are necessary-but-not-sufficient conditions.

The brief's defense against minimum compliance is the creative authority section (Section 9, lines 212-225) and the world-description framing that makes the builder want to exceed minimums. But "want to" is not a mechanism.

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **LOW** | Compositional concepts cannot be reduced to binary rules because they are inherently judgment-based ("does the metaphor drive CSS?"). They escape the binary compliance trap by being un-checklistable. The risk is instead that they have NO compliance mechanism (see Failure Mode 2 -- judgment rules achieve ~0%). |
| B. Multi-coherence | **HIGH** | Multi-coherence is already a binary rule (">= 3 channels at each boundary"). Adding more binary multi-coherence rules (">= 4 average", "semantic direction consistent") increases the minimum compliance floor without increasing quality. The Flagship had multi-coherence rules and produced flat output. More multi-coherence rules would be satisfied by the same minimal effort. |
| C. Perception thresholds | **MEDIUM** | Perception thresholds are binary rules that PREVENT a specific failure (sub-perceptual CSS). They don't drive quality -- they prevent anti-quality. The risk is treating perception thresholds as sufficient ("all deltas pass") when they are only necessary. |
| D. Recipe formatting | **NONE** | Recipe steps bypass the compliance-vs-quality problem entirely. "Step 1: Set X to Y" doesn't need a compliance check -- the act of following the step IS the compliance. The quality comes from the specific values chosen, not from verifying afterward. |
| E. Scale/fractal | **MEDIUM** | Scale requirements could become binary rules (">= 3 scales expressed") that are satisfied by minimal effort at each scale. The fractal echo table already has this risk with its "Min Threshold" column. |
| F. Content-form coupling | **LOW** | Content-form coupling resists binary rule reduction because the coupling depends on content (which varies). You cannot write a binary rule for "does the visual treatment match the content?" without judgment. |

### Aggregate Risk: **MEDIUM**

### Specific Mitigation
1. **Distinguish floors from ceilings:** Binary rules are FLOOR DETECTORS (PA-05 equivalent). They catch failures but don't drive success. Label every binary rule as "FLOOR" and ensure the brief contains equal or greater volume of RECIPE content that drives quality.
2. **Semantic deltas, not syntactic deltas:** Where possible, express binary rules in perceptual terms. Not ">= 3 spacing values" but ">= 3 spacing values with minimum 8px delta between adjacent values." This prevents the 48/49/50 loophole.
3. **Acceptance: quality comes from recipe, not rules.** The brief's creative authority (Section 9) and world-description voice are the quality drivers. Binary rules prevent failure. Don't confuse the two.

---

## FAILURE MODE 7: INVERTED QUALITY ROUTING

### What It Is
The best reference files (mechanism catalog, scale-channel invocation) were routed to the PLANNER who doesn't write CSS. The BUILDER got tokens + prohibitions + a MISSING file. MEMORY.md: "Fix: route CSS-rich files to CSS-writing agents."

### Current State
The SKILL.md (lines 37-56) specifies the builder spawn prompt. The builder reads:
1. conventions-brief.md (FIRST -- 403 lines)
2. Content file (SECOND)
3. mechanism-catalog.md (reference)
4. components.css (reference)
5. tokens.css (reference)
6. prohibitions.md (reference)

This is ALREADY correctly routed. The builder gets the CSS-rich files (mechanism catalog, components.css). The previous inverted routing has been fixed.

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **MEDIUM** | If compositional fluency concepts are added to the SKILL.md (which the orchestrator reads) but not to the conventions-brief.md (which the builder reads), the inversion recurs. The orchestrator would understand "parametric echo" but the builder would never see it. |
| B-F. All others | **LOW** | If enrichment goes into the conventions brief (builder-visible) and/or the gate runner (orchestrator-visible for verification), routing is correct. The risk only exists if enrichment is placed in orchestrator-only documents. |

### Aggregate Risk: **LOW** (if routing discipline is maintained)

### Specific Mitigation
1. **Builder-first principle:** Every enrichment concept that affects CSS output MUST appear in the conventions brief (the file the builder reads FIRST). The SKILL.md can reference it for orchestration but the concept must be in the builder's primary document.
2. **Routing audit:** After all enrichments, list every concept and which file it appears in. Any concept in SKILL.md but NOT in conventions-brief.md is a routing inversion. Fix it.
3. **Reference file test:** Run the self-containment test from anti-reproduction Gate 4: remove all external file references from the builder's prompt. Can the builder still write CSS from the brief alone? If not, embed the missing values.

---

## FAILURE MODE 8: CSS BUDGET MISALLOCATION

### What It Is
The Flagship spent 22% of CSS (227 lines) on imperceptible micro-typography (letter-spacing 0.001-0.01em). CD-006 spent those lines on 11 components, 5 grids, 3 breakpoints. MEMORY.md: "Prompt emphasis on 'refinement gradients' directed skill toward invisibility."

### Current State
The conventions brief directly addresses this in Section 2 (Perception, lines 51-69): "CSS below these thresholds is invisible. Invisible CSS is wasted CSS." The perception threshold table prevents the specific failure of sub-perceptual letter-spacing. Section 3 (Richness, lines 80-81) reinforces: "for any CSS rule, imagine commenting it out. If removing it causes no visible change at 100% zoom, delete it permanently."

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **HIGH** | THIS IS THE MOST DANGEROUS ENRICHMENT TYPE for CSS budget misallocation. "Parametric echo" and "density arc" suggest SUBTLE VARIATION -- the exact kind of CSS that consumed 22% of the Flagship's budget. A builder reading "the organizing principle manifests at every scale" will spend CSS budget on micro-variations that are perceptually invisible. The brief's perception section mitigates this, but the tension between "subtle variation" and "perceptible variation" is exactly where the Flagship failed. |
| B. Multi-coherence | **LOW** | Multi-coherence enrichment would direct CSS budget toward zone boundaries (background, typography, borders) -- the high-impact, high-visibility CSS that CD-006 excelled at. This is budget well spent. |
| C. Perception thresholds | **NONE** | Perception thresholds actively PREVENT CSS budget misallocation by making sub-perceptual CSS impossible. They are the direct cure. |
| D. Recipe formatting | **LOW** | Recipe steps specify exact values, preventing the builder from inventing micro-variations. "Set letter-spacing to 0.05em" prevents 0.001em. |
| E. Scale/fractal | **MEDIUM** | Scale 5 (Character, ~12-20px) is where the Flagship misallocated its budget. The brief's DEPENDENCY note (line 140-141) warns against scale 5 without scale 2, which is good. But adding more scale concepts could redirect attention to micro-typography. |
| F. Content-form coupling | **LOW** | Content-form coupling directs CSS budget toward structural decisions (spacing, density, component selection) rather than micro-typography. |

### Aggregate Risk: **MEDIUM**

### Specific Mitigation
1. **Budget allocation guidance:** If compositional fluency concepts are added, pair them with explicit budget guidance: "Spend CSS budget on Chromatic and Structural channels (high-impact) before Typographic and Material channels (refinement). If your page has 800 lines of CSS, at least 500 should be layout, components, and backgrounds."
2. **Perception section primacy:** The conventions brief's Section 2 (Perception) must remain BEFORE any compositional fluency section. The builder must internalize "invisible CSS is wasted CSS" before reading "manifest the organizing principle at every scale." Order of reading creates primacy bias.
3. **Scale 5 warning reinforcement:** Any enrichment touching scale/fractal concepts must reinforce the dependency: "Scale 5 (Character) is LAST and OPTIONAL. Two strong scales beat five weak ones." This is already in the brief (line 142) but enrichment could dilute it.

---

## FAILURE MODE 9: SONNET-FOR-BUILDERS UNEXAMINED

### What It Is
CD-006 (39/40) was built by Opus. Flagship builders were Sonnet. MEMORY.md: "Sonnet complies meticulously; Opus complies AND creates beyond constraints. Potentially highest-leverage single intervention." The SKILL.md explicitly mandates Opus for builders (line 41: "Model: Opus (ALWAYS -- never Sonnet for builders)").

### Current State
The builder model specification is fixed at Opus. This failure mode is already addressed at the orchestration level.

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **MEDIUM** | Compositional fluency concepts DEPEND MORE on builder model than any other enrichment type. "Parametric echo" requires the builder to invent CSS expressions of an abstract concept -- this is exactly where Opus exceeds Sonnet. Adding these concepts to a brief that Sonnet reads would produce minimal compliance; Opus would produce genuine expression. The enrichment amplifies the model-dependence of the pipeline. |
| B. Multi-coherence | **LOW** | Multi-coherence is concrete enough (count channels) that model differences are small. |
| C. Perception thresholds | **LOW** | Binary thresholds are model-independent. Both Sonnet and Opus can check ">= 15 RGB." |
| D. Recipe formatting | **LOW** | Recipe steps are model-independent. "Set X to Y" works for any model. |
| E. Scale/fractal | **MEDIUM** | Like compositional fluency, scale/fractal concepts require creative interpretation that benefits from Opus. |
| F. Content-form coupling | **MEDIUM** | Content analysis and form-coupling require the builder to READ content and DECIDE how form responds. This is judgment-heavy and model-dependent. |

### Aggregate Risk: **MEDIUM** (for abstract enrichments), **LOW** (for concrete enrichments)

### Specific Mitigation
1. **Opus mandate is already in place.** The SKILL.md line 41 and line 406 both mandate Opus for builders. This is the primary mitigation. Enrichment does not change this.
2. **Model-sensitivity labeling:** For each enrichment concept, note whether it is model-sensitive (requires creative interpretation) or model-independent (binary check). Model-sensitive concepts should be MORE concrete in the brief because they need to survive even partial model degradation (e.g., if a future Opus version is less creative).
3. **Fallback CSS values:** For model-sensitive concepts, provide specific CSS values that serve as a "floor" if the builder doesn't creatively elaborate. "Parametric echo: at minimum, reduce component padding by 8px in each successive zone" gives even a literal model something to write.

---

## FAILURE MODE 10: RECIPE VS CHECKLIST FORMAT

### What It Is
The Middle builder got a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs) and produced PA-05 4/4 (DESIGNED). The Flagship builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if/Must be" verbs) and produced PA-05 1.5/4. This is the single clearest A/B result in the project's history.

### Current State
The conventions brief is NEITHER recipe nor checklist. It is a world-description. This is a deliberate design choice (line 3: "This brief describes the world you are building inside -- the materials, the physics, the quality of light. It does not tell you what to build."). The PROCESS section (lines 381-398) provides loose recipe structure: Understand / Plan / Build / Verify. But it does not provide the step-by-step specificity of the Middle builder's recipe.

### Risk Assessment Per Enrichment Type

| Enrichment | Risk | Reasoning |
|-----------|------|-----------|
| A. Compositional fluency | **HIGH** | Compositional concepts are the HARDEST to format as recipe steps. "Establish a density arc" cannot easily become "Step 1: Set zone 1 padding to 64px. Step 2: Set zone 2 padding to 48px. Step 3: Set zone 3 padding to 32px." The concept REQUIRES judgment about what the density arc looks like for THIS content. Adding compositional concepts pushes the brief toward description/checklist and away from recipe. |
| B. Multi-coherence | **MEDIUM** | Multi-coherence can be recipe-formatted ("At each zone boundary: 1. Change background by >= 15 RGB. 2. Change font-size by >= 2px. 3. Add or change a border. That is 3 channels.") but the current brief presents it as world-description, not recipe. Enrichment should maintain recipe format. |
| C. Perception thresholds | **LOW** | Thresholds are recipe-compatible: "When setting adjacent backgrounds, ensure delta >= 15 on at least one RGB channel." This is a recipe step. |
| D. Recipe formatting | **NONE** | This IS the format change. It is the solution, not a risk. |
| E. Scale/fractal | **MEDIUM** | Scale concepts can be recipe-formatted (the fractal echo table IS a recipe: fill in each row, verify threshold, proceed). But adding more scale requirements could push toward checklist ("verify: navigation scale expressed? page scale expressed? section scale expressed?"). |
| F. Content-form coupling | **HIGH** | Content-form coupling is inherently conditional ("IF content is analytical THEN..."). Conditional logic in a recipe creates branching, which increases cognitive load and can collapse into "check all conditions" -- a checklist with extra steps. |

### Aggregate Risk: **MEDIUM-HIGH**

### Specific Mitigation
1. **Recipe format test:** After enrichment, read the modified brief and classify each new section as RECIPE (sequenced, concrete, imperative verbs), WORLD-DESCRIPTION (descriptive, atmospheric, present-tense), or CHECKLIST (verification, conditional, "must be" verbs). The brief should be 60%+ world-description, 30%+ recipe, 10% or less checklist.
2. **Preserve the voice:** The conventions brief's current voice ("These are not rules to comply with. They are the physics of human perception.") is its strongest anti-checklist mechanism. Enrichment MUST maintain this voice. If a concept cannot be expressed in world-description voice, it belongs in the SKILL.md (orchestration layer), not the brief (builder layer).
3. **Sequencing over listing:** Any enrichment that involves multiple items should be presented as a sequence with dependencies (build order), not as a flat list of requirements. The fractal echo table's "Scale build order (build largest first, verify before proceeding)" is the model.

---

## CROSS-CUTTING ANALYSIS

### Risk Heat Map (Enrichment Type x Failure Mode)

| Failure Mode | A: Comp. Fluency | B: Multi-Coh. | C: Perception | D: Recipe | E: Scale | F: Content-Form |
|-------------|:-:|:-:|:-:|:-:|:-:|:-:|
| 1. Complexity ratchet | HIGH | LOW | LOW | NONE | MED | MED |
| 2. Guardrail factory | HIGH | MED | LOW | NONE | MED | HIGH |
| 3. Checklist trap | LOW | HIGH | MED | NONE | MED | LOW |
| 4. 660:1 meta ratio | HIGH | LOW | LOW | LOW | MED | HIGH |
| 5. 50:1 compression | HIGH | LOW | NONE | LOW | MED | HIGH |
| 6. Compliance != quality | LOW | HIGH | MED | NONE | MED | LOW |
| 7. Inverted routing | MED | LOW | LOW | LOW | LOW | LOW |
| 8. CSS budget misalloc. | HIGH | LOW | NONE | LOW | MED | LOW |
| 9. Sonnet-for-builders | MED | LOW | LOW | LOW | MED | MED |
| 10. Recipe vs checklist | HIGH | MED | LOW | NONE | MED | HIGH |
| **HIGH count** | **6** | **1** | **0** | **0** | **0** | **3** |
| **MED count** | **2** | **3** | **3** | **0** | **8** | **3** |

### Key Finding: Enrichment Types A and F Are Dangerous

**Compositional fluency (A)** has 6 HIGH risk ratings and 2 MEDIUM. It is the enrichment type most likely to reproduce documented failure modes. Every failure mode except "Checklist trap" and "Compliance != quality" rates it HIGH or MEDIUM. This is because compositional fluency concepts are inherently abstract, resist concrete CSS specification, and compress catastrophically.

**Content-form coupling (F)** has 3 HIGH risk ratings and 3 MEDIUM. It shares the same abstract/unbounded properties as compositional fluency and additionally requires per-content-type specification, which expands the rule space unboundedly.

### Key Finding: Enrichment Types C and D Are Safe

**Perception thresholds (C)** has 0 HIGH risk ratings. It actively mitigates several failure modes (CSS budget misallocation, 50:1 compression) and is neutral on the rest. Perception thresholds are the safest enrichment because they are concrete, binary, and already compressed.

**Recipe formatting (D)** has 0 HIGH or MEDIUM risk ratings. It is the ONLY enrichment type that scores NONE or LOW on every failure mode. It actively prevents the checklist trap, the guardrail factory, and the compliance-without-quality problem.

### Key Finding: Scale/Fractal (E) Is Medium Across the Board

Scale/fractal (E) has 8 MEDIUM risk ratings and 0 HIGH. It is moderately risky everywhere but catastrophically risky nowhere. This suggests it is enrichable IF the mitigations are applied consistently -- it is a "safe to add with care" category.

### Key Finding: Multi-Coherence (B) Has One Dangerous Trap

Multi-coherence (B) is LOW across most dimensions but HIGH for the checklist trap. Multi-coherence verification is the concept most likely to collapse into a checklist because its natural expression is counting and thresholds. The mitigation is to keep multi-coherence in the world-description voice and move verification language to the gate runner.

---

## MASTER RECOMMENDATION

### PROCEED WITH (Low regression risk):
1. **C: Perception thresholds** -- Already safe, already partially embedded, actively prevents failure modes. Refine and verify but no risk of regression.
2. **D: Recipe formatting** -- The single safest enrichment type. Actively prevents multiple failure modes. More recipe structure in the brief is unambiguously positive.

### PROCEED WITH CAUTION (Moderate regression risk, mitigations required):
3. **B: Multi-coherence** -- Refine existing Section 4 of the brief. Keep world-description voice. Move verification to gate runner. Watch for checklist drift.
4. **E: Scale/fractal** -- Refine existing Section 5 of the brief. Maintain scale build order. Watch for expansion into per-scale rule sets.

### PROCEED WITH EXTREME CAUTION or RECONSIDER (High regression risk):
5. **F: Content-form coupling** -- If added, must be concrete (specific CSS values per content type), not abstract ("respond to content"). Consider adding as a single brief paragraph with 2-3 examples rather than a new section.
6. **A: Compositional fluency** -- This is the enrichment type the team was MOST likely to propose and the one MOST likely to reproduce failure modes. If added, concepts must be expressed as CSS recipes with specific values, not as abstract principles. Every concept needs the CSS-anchor, playbook-pairing, and compression tests. Even with all mitigations, the risk of complexity ratchet and CSS budget misallocation remains HIGH.

### The Meta-Recommendation
The conventions brief is currently 403 lines and working. The SKILL.md is 408 lines and working. The most dangerous thing about enrichment is that it can turn a lean, working system into a bloated, failing one -- which is exactly what happened when the 963-line master prompt was built from the accumulated wisdom of 337 research findings. The enrichment team should operate under the constraint that the final enriched brief CANNOT exceed 450 lines and the enriched SKILL.md CANNOT exceed 450 lines. If a concept is worth adding, identify what it replaces.

---

## APPENDIX: MITIGATION CHECKLIST

Before merging any enrichment edit, verify ALL of the following:

| # | Check | Method | PASS criterion |
|---|-------|--------|----------------|
| 1 | Line budget | `wc -l conventions-brief.md` | <= 450 lines |
| 2 | Guardrail ratio | Count guardrail vs playbook sentences in modified section | <= 1:1 |
| 3 | Checklist verb audit | Count "verify/ensure/check/fail if/must be" vs "set/write/apply/deploy/use" | Recipe verbs >= checklist verbs |
| 4 | CSS anchor | Does every new concept contain >= 1 CSS property-value pair? | YES |
| 5 | Provenance citation | Does every new concept cite its source? | YES |
| 6 | Compression test | Can a fresh reader recall the concept 10 minutes after reading? | YES |
| 7 | Builder routing | Does the concept appear in conventions-brief.md (not only SKILL.md)? | YES for CSS-affecting concepts |
| 8 | World-description voice | Does the new text maintain the brief's atmospheric voice? | YES |
| 9 | Net deletion | Was at least one existing line deleted or merged for each concept added? | YES |
| 10 | Recipe format | Is the concept expressed as a sequence, not a flat list? | YES |
