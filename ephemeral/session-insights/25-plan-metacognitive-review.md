# Metacognitive Plan Review: Will Agents Execute This Plan Correctly?

**Reviewer:** metacognitive-plan-reviewer
**Date:** 2026-02-16
**Subject:** Plan `wiggly-sprouting-ember.md` (745 lines)
**Sources:** Plan file, `23-metacognitive-review.md` (prompt-level metacognition), `MEMORY.md` (behavioral patterns), `agent-team-lessons.md` (15-team empirical data)

---

## METHOD

This review models HOW each agent will actually behave — not what the plan INTENDS, but what LLM continuation bias, primacy effects, attention decay, and established failure modes predict will happen. Each agent is analyzed across: (1) what it receives, (2) what it will anchor to, (3) what it will likely produce, (4) specific failure modes, and (5) probability estimates.

---

## 1. CONTENT-SELECTOR (Sonnet, Phase 0)

### What It Receives
- Instructions to select 800-1,200 words of technical content
- 10 binary criteria (A2.1-A2.10)
- 3 structural verification items (A3.1-A3.3)
- 8 domain suggestions: dev environment, deployment pipeline, database optimization, API versioning, authentication flow, container orchestration, monitoring/observability, performance profiling
- Prohibition: NOT scientific calibration, NOT about design systems

### Behavioral Prediction

**PRIMACY BIAS on domain selection: 75% probability the agent picks one of the first 3 suggestions listed.** The plan lists 8 domains in order. LLMs exhibit primacy bias — the first items in a list get disproportionate selection. "Development environment setup" or "deployment pipeline" will likely be chosen because they appear first.

**This matters because:** The domain determines what content structure emerges, which determines which density pattern maps, which determines mechanism deployment. If the domain is always a tutorial-style walkthrough (dev setup, deployment), the pattern will always be CRESCENDO. This is noted in the prior metacognitive review (Prediction 3, 70% confidence for CRESCENDO). The plan does include a NOTE: "Do NOT default to CRESCENDO. Evaluate actual content structure against all 4 patterns." — but this instruction targets the PLANNER, not the content-selector. The content-selector's domain choice already constrains pattern selection before the planner ever sees it.

**Will it produce GENUINE content?** PROBABLY YES (80% confidence). Sonnet can produce authentic-feeling technical prose about deployment pipelines or API versioning. The 800-1,200 word range is well within single-pass generation capability. The structural requirements (3+ paragraphs, 2+ code blocks, 2+ callouts, etc.) are checklist-binary, which Sonnet handles with near-100% compliance.

**A2.10 pattern mapping risk: 30% chance of incorrect mapping.** The content-selector must map its content to exactly ONE of 4 patterns. But the content-selector is SUPPOSED to commit content BEFORE mechanisms are considered. The pattern mapping is a mechanism-adjacent decision — it determines which compositional skeleton is used. The content-selector is being asked to make a compositional decision it's not qualified for.

**Verification of A2.1-A2.10: 95% compliance.** These are binary checklist items. Sonnet reliably completes checklists. The risk is in the QUALITY of compliance (technically 800 words but generic filler vs. genuinely useful technical content), not in the QUANTITY.

### Failure Modes

| Failure | Probability | Impact | Mitigation in Plan |
|---------|------------|--------|-------------------|
| Picks first-listed domain (primacy) | 75% | LOW (domain doesn't affect experiment validity, only novelty interest) | NOTE says "Do NOT default to CRESCENDO" but targets planner, not content-selector |
| Generic/placeholder content | 20% | MEDIUM (weakens mechanism-content fit assessment) | Binary criteria force structural variety |
| Incorrect pattern mapping (A2.10) | 30% | MEDIUM (planner inherits wrong skeleton) | Planner can override, but continuation bias makes override unlikely |
| Fails to write output file | 15% | HIGH (blocks entire pipeline) | Plan mentions Block 2 file-write enforcement for BUILDER but NOT for content-selector |

### CRITICAL GAP: File-write enforcement is NOT in the content-selector's prompt.

The plan specifies Block 2 (file-write enforcement) for the BUILDER (Section 4.2, Appendix B). But memory says: "File-writing emphasis must be in ALL worker prompts." The content-selector's output file is `01-content-selection.md`. The plan does not include explicit file-write enforcement for this agent. Historical data: researchers fail to write files ~80% of the time. Content-selector is closer to a "researcher" role than a "builder" role.

**Recommended mitigation:** Add to content-selector prompt: "CRITICAL: You MUST write your output to `ephemeral/middle-tier-experiment/01-content-selection.md` using the Write tool. Your task is NOT complete until this file exists."

---

## 2. PLANNER (Opus, Phase 1)

### What It Receives
- Content from content-selector (800-1,200 words)
- The full master prompt (1,761 lines, ~12,000-14,000 tokens)
- OR: a compressed version of the master prompt via the plan
- Must read: prohibitions.md (353 lines) + tokens.css (174 lines) FIRST

### Behavioral Prediction

**ABSTRACTION DEFAULT is the #1 risk.** The plan says the planner must produce "concrete CSS values" (Phase 3, Section 3.11). But the master prompt is ANALYTICAL in tone — 1,761 lines of reasoning, frameworks, and taxonomies. Opus continuation bias will match this tone. The planner will anchor to the analytical framing and produce a plan that DESCRIBES what to build rather than SPECIFYING exact CSS values.

The plan includes a 7-section output format (Section 3.11): CONTENT, SECTION MAP, MECHANISM TABLE, TRANSITION TABLE, REINFORCING PAIRS, FRACTAL TABLE, BUILDER BLOCKS. This format is CONCRETE — it demands tables with CSS evidence. But: will Opus fill the tables with actual `var(--space-8)` values, or with descriptions like "use moderate spacing"?

**Prediction: 60% chance the plan is too abstract for the builder.** (Matches the prior metacognitive review's Prediction 5.) The 7-section format HELPS (tables force concreteness), but Opus's default behavior is to explain rather than specify.

**Will it read prohibitions.md + tokens.css FIRST?** YES (95% confidence). The plan says "MUST read these files IN ORDER before any design work" (Section 2.2) and labels skipping as "INSTANT FAIL (B8.2)." Binary, high-salience, early in the plan. The plan also lists these as items 1-2 in the Tier 1 MUST-LOAD table (Phase 8). Dual reinforcement.

**Will it correctly use per-category minimum (NOT "sample 2-4")?** YES (90% confidence). The plan explicitly says this 3 times: Section 3.3 ("Deploy AT LEAST 1 from each of 5 categories"), Section 3.5 ("M1 Override: planner MUST use per-category minimum"), and Appendix B Block 4. Triple reinforcement on a binary rule.

**But: will it read the FULL mechanism catalog?** MAYBE (70% confidence). The plan says to read "all 18 mechanisms" at step 10 of the execution sequence. The mechanism catalog is 1,011 lines. Opus can handle this in context, but attention decay across 18 mechanism descriptions (averaging ~55 lines each) means mechanisms #12-#18 get less processing than #1-#6. The per-category table partially corrects this by forcing attention back to all categories.

**Context capacity concern:** The planner receives the content (~1,200 words), must read prohibitions.md (353 lines), tokens.css (174 lines), mechanism-catalog.md (1,011 lines), semantic-rules.md (286 lines), usage-criteria.md (298 lines), and the skill file (~1,533 lines). Total: ~3,655 lines of reference files PLUS the plan itself (745 lines) PLUS whatever prompt the team lead provides. This is ~25,000-30,000 tokens of reference material plus ~5,000 tokens of plan/prompt. Opus can handle this, but the compression into working memory will lose refinement details.

**What will be compressed out:** Component sequencing rules (velocity, temperature, weight — from Section 3.10), transition type specifics (SMOOTH vs BRIDGE vs BREATHING CSS values from Section 3.9), compositional rules (41 rules from Phase 7.3). These sit in the "middle" of the plan, past the anchoring zone but before the salient ending.

**Prediction: the planner will NOT include explicit component sequencing in its plan (55% chance).** This is a refinement detail in the attention decay zone. The plan mentions it in Section 3.10 but doesn't enforce it as a binary deliverable — it's not in the 7-section output format.

### Failure Modes

| Failure | Probability | Impact | Mitigation in Plan |
|---------|------------|--------|-------------------|
| Plan too abstract (descriptions, not CSS values) | 60% | HIGH (builder can't execute) | 7-section format helps, but no anti-abstraction enforcement |
| Picks CRESCENDO regardless of content | 70% | LOW (valid for tutorial content) | Plan says "Do NOT default to CRESCENDO" — judgment rule, ~50% compliance |
| Misses component sequencing rules | 55% | MEDIUM (monotonous section ordering) | Not in 7-section output format, attention decay zone |
| Misses transition type details | 45% | MEDIUM (builder invents transitions) | In 7-section format as TRANSITION TABLE, but CSS values may be abstract |
| Fails to include Appendix B blocks verbatim | 20% | HIGH (builder misses enforcement blocks) | Explicitly in 7-section format as item 7 |
| Mechanism primacy bias (#1-#6 overweight) | 50% | LOW (per-category table corrects) | Category checklist forces breadth |
| Fails to write output file | 5% | HIGH (blocks pipeline) | Opus is more reliable at task completion than Sonnet researchers |

### CRITICAL GAP: No anti-abstraction instruction.

The 23-metacognitive-review recommends Adjustment 5: "Add Anti-Abstraction Instruction." The plan does NOT include this. The 7-section output format implicitly pushes toward concreteness via tables, but there is no explicit instruction saying "include specific CSS values, not descriptions."

**Recommended mitigation:** Add to planner prompt: "Your MECHANISM TABLE and SECTION MAP must contain EXACT CSS values (e.g., `padding: var(--space-16)`, `background: var(--color-zone-sparse)`, `border-bottom: 1px solid var(--color-border)`). Abstract descriptions like 'use moderate spacing' or 'apply sparse background' are INSUFFICIENT. The builder instance has never read the mechanism catalog — your plan is its ONLY specification."

---

## 3. BUILDER (Sonnet, Phase 2)

### What It Receives
- The planner's 7-section output
- Appendix B blocks 1-4 (Soul Checklist, File-Write, Container Width, M1 Override)
- :root CSS block (53 custom properties)
- Base typography, accessibility patterns, responsive strategy
- Font CDN link

### Behavioral Prediction

**FILE-WRITE is the paramount risk.** Memory says: "File-writing emphasis must be in ALL worker prompts." "Workers spawned by captains via Task tool frequently complete WITHOUT writing files — THE critical failure mode." The plan addresses this with Block 2 (Section 4.2): "File-Write Enforcement (output to `ephemeral/middle-tier-experiment/middle-tier-page.html`)." This is GOOD — it's explicitly in the builder's mandatory blocks.

**But: will Block 2 be phrased strongly enough?** The plan says "Block 2: File-Write Enforcement" but doesn't specify the exact wording. The empirical evidence says the prompt must include "CRITICAL: You MUST write your output file using the Write tool. Your task is NOT complete until this file exists." Generic mentions of file output are insufficient.

**Can Sonnet implement 8-10 mechanisms with correct CSS?** PROBABLY (75% confidence), IF the plan provides exact CSS values. Sonnet is reliable at implementing concrete specifications. The risk is the planner-to-builder handoff: if the plan says "deploy mechanism #5 (Dense/Sparse Alternation)" without specifying exact padding values, Sonnet will INVENT values that may not align with tokens.css.

**Will Sonnet correctly use the :root block?** YES (95% confidence). Copy-paste CSS blocks are the most effective prompt feature (per the 23-metacognitive-review). The :root block is self-contained — Sonnet copies it into `<style>` and references the custom properties. This is mechanical, not creative.

**Container width compliance:** HIGH (90% confidence). The plan includes Block 3 ("Container Width Enforcement: 940-960px NON-NEGOTIABLE"). The :root block includes `max-width: 960px`. The builder copies the block. Compliance is nearly guaranteed by the copy-paste mechanism.

**But: will Sonnet produce a page that FEELS designed, or just formatted?** This is THE experiment's core question and depends on whether the planner's specification translates to genuine compositional quality. If the planner produced abstract descriptions, Sonnet will produce a structurally correct but compositionally flat page. If the planner produced exact CSS values with section-by-section specifics, Sonnet will produce a page with genuine spatial rhythm.

**Prediction: the builder will produce a structurally compliant page that passes Critical-10 and Quick Check but may fall short on PA-05 "designed vs formatted" perception (40% chance of MARGINAL on PA-05).** This is because PA-05's sub-criteria (non-default layout elements, padding ratio, visual hierarchy, compositional CSS ratio) require COMPOSITIONAL decisions that the builder is unlikely to make independently. The builder follows specs; it doesn't compose.

### Failure Modes

| Failure | Probability | Impact | Mitigation in Plan |
|---------|------------|--------|-------------------|
| Fails to write HTML file | 10% | CRITICAL (blocks all downstream) | Block 2 file-write enforcement (but exact wording unspecified) |
| Implements abstract plan literally (generic CSS) | 40% | HIGH (page feels formatted, not designed) | Depends entirely on planner output quality |
| Container width violated | 5% | CRITICAL (instant fail) | Block 3 + :root copy-paste = very strong |
| Soul violation (border-radius, box-shadow) | 5% | CRITICAL (instant fail) | Block 1 soul checklist + :root block |
| Missing mechanism categories | 10% | HIGH (5-category coverage fail) | Block 4 M1 override + planner's mechanism table |
| Incorrect font references | 15% | MEDIUM (soul typography fail) | CDN link provided, but Sonnet may not connect link to usage |
| Missing semantic HTML landmarks | 20% | MEDIUM (B10 build quality fail) | Plan mentions ">= 3 landmarks" but not prominently |

### CRITICAL GAP: Builder prompt receives Appendix B blocks but the plan doesn't specify HOW these are delivered.

The plan says the builder "receives" the planner's output + Appendix B blocks. But in practice, the team lead must construct the builder's prompt by COMBINING these. If the team lead sends the planner's output and forgets to append Block 2 (file-write), the builder may not write the file. If the team lead sends Blocks 1-4 but doesn't send the :root CSS block, the builder will invent CSS values.

**Recommended mitigation:** The plan should include a "BUILDER PROMPT TEMPLATE" section that explicitly lists what the team lead must paste into the builder prompt, in order:
1. Planner's full output (7 sections)
2. :root CSS block (verbatim)
3. Base typography block (verbatim)
4. Accessibility patterns block (verbatim)
5. Responsive strategy block (verbatim)
6. Appendix B Blocks 1-4 (verbatim)
7. Font CDN link
8. File-write enforcement: "CRITICAL: Write output to `ephemeral/middle-tier-experiment/middle-tier-page.html` using the Write tool. Your task is NOT complete until this file exists."

---

## 4. PROGRAMMATIC AUDITOR (Sonnet, Phase 3a)

### What It Receives
- The built HTML file
- Verification checklist (Critical-10, Quick Check 15 items)
- Playwright protocol (serve via HTTP, disable animations, wait for fonts, measure computed styles, check 1440px + 768px)

### Behavioral Prediction

**Will it serve via HTTP?** DEPENDS on whether the team lead starts the HTTP server before spawning this agent. Memory says: "HTTP server MUST be started before spawning agents that need Playwright." The plan mentions "Start HTTP server for Playwright" in Stage A (Phase 9, step 3). But: who starts it? The plan assigns Stage A to "Setup" without specifying an agent.

**Prediction: the team lead will start the HTTP server (80% confidence).** This is a setup step the lead should handle. But if the lead forgets, the programmatic auditor will try `file://` which Playwright blocks, fail silently, and produce a report based on source code analysis rather than computed styles.

**Will it check BOTH 1440px AND 768px?** PROBABLY (75% confidence). The plan specifies both viewports explicitly (Section 5.4). Binary rule. But Playwright viewport switching requires explicit code (`page.setViewportSize`). If the auditor runs its checks at the default viewport and forgets to switch, 768px checks will be skipped.

**Will it wait for `document.fonts.ready`?** MAYBE (60% confidence). This is a technical detail that Sonnet may not implement unless explicitly told. The plan mentions it (Section 5.4, item 3) but it's one item in a 6-item protocol list. Memory says this is "CRITICAL before checking computed font."

**Historical precedent:** Team 15's programmatic auditor "shortcut after page-A only — recovery agent needed for B-E." Auditors have a history of incomplete coverage.

### Failure Modes

| Failure | Probability | Impact | Mitigation in Plan |
|---------|------------|--------|-------------------|
| No HTTP server started | 20% | HIGH (Playwright fails on file://) | Plan mentions it in Stage A but doesn't assign to specific agent |
| Skips 768px viewport | 25% | MEDIUM (responsive issues missed) | Explicit in plan but requires viewport switch code |
| Skips document.fonts.ready | 40% | MEDIUM (font checks fail) | Mentioned but buried in protocol list |
| Fails to write report file | 15% | MEDIUM (no audit record) | File-write enforcement NOT in auditor prompt |
| Incomplete coverage (shortcut) | 30% | MEDIUM (only checks Critical-10, skips Quick Check) | Plan lists both but auditor may satisfice |

### CRITICAL GAP: HTTP server startup is not assigned to a specific agent or the lead.

**Recommended mitigation:** Add explicit instruction: "TEAM LEAD: Before spawning programmatic-auditor or perceptual-auditor, start HTTP server: `python3 -m http.server 8080 --directory /path/to/project/root` and verify `http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html` loads."

---

## 5. PERCEPTUAL AUDITOR (Sonnet, Phase 3b)

### What It Receives
- The built HTML file (via Playwright/HTTP)
- PA-01 through PA-20 questions
- PA-SEM-01 through PA-SEM-03 questions
- ZERO design context (fresh-eyes mandate)

### Behavioral Prediction

**FRESH-EYES ENFORCEMENT is the critical question.** The plan says the perceptual auditor must be "fresh eyes, zero context." Memory confirms: "Fresh-eyes zero-context agents find issues research-loaded agents miss entirely." But in a team, the perceptual auditor will be spawned by the team lead. Will the team lead accidentally include design context in the spawn prompt?

**Prediction: 30% chance the team lead includes context that compromises fresh-eyes.** The team lead has been immersed in mechanism vocabulary, tier models, and compositional rules. When writing the perceptual auditor's prompt, the lead may include phrases like "this is a Middle-tier page built with 8-10 mechanisms using the CRESCENDO pattern." This primes the auditor to evaluate AGAINST the plan rather than evaluate the page on its own merits.

**Will PA-05 be correctly operationalized?** MAYBE (55% confidence). The plan includes the 4 sub-criteria (Section 5.3), but operationalizing PA-05 requires the auditor to perform specific measurements (non-default layout elements count, padding range ratio, visual hierarchy blur test, compositional CSS ratio). These are not standard PA questions — they're quantitative tests masquerading as perceptual assessment. A Sonnet agent asked "would you put your name on this?" will answer with prose judgment, not measurements.

**The plan specifies PA-05a through PA-05d with numeric thresholds.** This IS binary. But: will the auditor agent receive these thresholds in its prompt? The plan says to run PA-05 operationalized (Section 5.3), but the actual thresholds are in the plan at the TEAM LEAD level, not necessarily in the auditor's prompt. The team lead must extract these thresholds and include them.

### Failure Modes

| Failure | Probability | Impact | Mitigation in Plan |
|---------|------------|--------|-------------------|
| Fresh-eyes compromised by lead context | 30% | MEDIUM (biased assessment) | Plan says "zero context" but doesn't enforce prompt template |
| PA-05 answered with prose, not measurements | 45% | HIGH (PA-05 sub-criteria ungradable) | Plan has thresholds but they must be in auditor prompt |
| Answers PA-01 to PA-20 but skips PA-SEM | 25% | MEDIUM (semantic audit missed) | PA-SEM is listed separately, may be perceived as optional |
| Fails to write report file | 15% | MEDIUM (no audit record) | File-write enforcement NOT in auditor prompt |
| Playwright contention with programmatic auditor | 15% | LOW (plan says parallel Phase 3, memory says 2 concurrent is usually safe) | 2 concurrent is empirically safe |

### CRITICAL GAP: No perceptual auditor prompt template.

The plan says "fresh eyes, zero context" but doesn't provide a template for the perceptual auditor's prompt. In practice, the team lead must construct a prompt that:
1. Does NOT mention the design system, mechanisms, patterns, or tiers
2. DOES include the HTML file path + HTTP URL
3. DOES include PA-01 to PA-20 questions
4. DOES include PA-SEM-01 to PA-SEM-03 questions
5. DOES include PA-05a to PA-05d thresholds with numeric criteria
6. DOES include file-write enforcement

**Recommended mitigation:** Add a "PERCEPTUAL AUDITOR PROMPT TEMPLATE" section that pre-writes the prompt, so the lead copies it verbatim rather than constructing it (and accidentally including context).

---

## 6. EVALUATOR / VERDICT SYNTHESIZER (Sonnet, Phase 4-5)

### What It Receives
- Programmatic audit report
- Perceptual audit report
- The built HTML file
- Decision matrix (4 cells: Designed/Novel, Designed/Derivative, Under-designed/Novel, Under-designed/Derivative)
- Novelty assessment method (3 tests: D3.1-D3.3)
- Variant B baseline HTML for comparison
- Crown jewels HTML (DD-006, CD-006) for novelty comparison

### Behavioral Prediction

**DECISION MATRIX COMPLIANCE: 70% chance it's used correctly, 30% chance prose analysis replaces it.** The decision matrix is a 2x2 grid. LLMs CAN use matrices if presented clearly. But Sonnet's default behavior is to produce analytical prose, not grid lookups. The evaluator may write paragraphs about engagement and novelty without actually mapping to a grid cell.

The plan splits evaluation across 3 agents: comparative-auditor (Phase 4a), novelty-evaluator (Phase 4b), and verdict-synthesizer (Phase 5). This helps because each agent has a narrower scope. But it also means: the verdict-synthesizer must COMBINE outputs from two other agents. If either upstream agent produces ambiguous assessments ("the page shows some design sophistication but also some formatting patterns"), the synthesizer faces a judgment call that the matrix can't resolve.

**Will the novelty evaluator actually READ the comparison HTML files?** MAYBE (60% confidence). The plan requires comparison against DD-006, CD-006, and OD-004 (Section 6.4, novelty assessment D3.1-D3.3). These are large HTML files (DD-006 is referenced as "20+ refs"). The novelty evaluator must:
1. Read the built page
2. Read DD-006-fractal.html
3. Read CD-006-pilot-migration.html
4. Possibly read OD-004

That's 3-4 HTML files. Sonnet can handle this, but: will the agent actually perform the 20px Gaussian blur test (D3.1)? This requires Playwright screenshots with CSS blur applied, then visual comparison. A Sonnet agent without explicit Playwright instructions for this specific test will likely skip the blur test and substitute prose comparison ("the pages have different visual rhythms").

**D3.2 (CSS value overlap) is more tractable.** Extracting CSS values and computing overlap is a mechanical task Sonnet can do. But it requires reading the CSS from both pages and computing a percentage. The plan specifies "<30% = NOVEL, >60% = DERIVATIVE" — binary threshold.

**D3.3 (mechanism combination comparison) requires knowing which mechanisms the comparison pages use.** The plan provides Variant B's mechanism list (Section 6.5) but does NOT provide DD-006's or CD-006's mechanism lists. The novelty evaluator would need to IDENTIFY mechanisms in crown jewels by reading their CSS. This is a significant analytical burden for a Sonnet agent.

### Failure Modes

| Failure | Probability | Impact | Mitigation in Plan |
|---------|------------|--------|-------------------|
| Decision matrix replaced by prose | 30% | MEDIUM (verdict unclear) | Plan provides explicit matrix, but Sonnet defaults to prose |
| Novelty blur test (D3.1) skipped | 60% | MEDIUM (novelty assessment incomplete) | Plan specifies test but doesn't provide Playwright code |
| Crown jewel mechanism identification skipped | 50% | MEDIUM (D3.3 assessment impossible without it) | Plan lists Variant B mechanisms but not crown jewel mechanisms |
| Variant B comparison based on source code, not perception | 40% | MEDIUM (misses perceptual differences) | Plan says "perceptual, not just procedural" but this is a judgment instruction |
| Fails to write verdict file | 10% | HIGH (no experiment conclusion) | Not explicitly enforced |
| Ambiguous PARTIAL verdict without actionable recommendations | 35% | MEDIUM (experiment inconclusive) | Plan provides post-experiment decision tree |

### CRITICAL GAP: Crown jewel mechanism lists not provided.

D3.3 requires comparing mechanism combinations. The plan provides Variant B's list (Section 6.5: #1, #2, #4, #5, #7, #10, #11, #18). But DD-006 and CD-006 mechanisms are not enumerated in the plan. The novelty evaluator must reverse-engineer them from HTML/CSS, which is unreliable for a Sonnet agent.

**Recommended mitigation:** Add DD-006 and CD-006 mechanism lists to the plan, similar to the Variant B list in Section 6.5.

---

## 7. OVERALL FAILURE PROBABILITY BY PHASE

| Phase | Agent | Probability of Correct Execution | Probability of Catastrophic Failure | Key Risk |
|-------|-------|----------------------------------|-------------------------------------|----------|
| 0 | content-selector | 80% | 15% (file-write fail) | Primacy bias on domain, file-write not enforced |
| 1 | planner | 70% | 5% (file-write fail) | Abstraction default, component sequencing missed |
| 2 | builder | 75% | 10% (file-write fail) | Depends on planner concreteness, block delivery |
| 3a | programmatic-auditor | 65% | 20% (no HTTP server) | HTTP server not assigned, viewport switching |
| 3b | perceptual-auditor | 55% | 15% (fresh-eyes compromised + file-write) | No prompt template, PA-05 operationalization |
| 4-5 | evaluator chain | 60% | 10% (verdict unclear) | D3.1 blur test skip, crown jewel data missing |

**End-to-end probability of fully correct execution (ALL phases correct): ~12%**
(0.80 * 0.70 * 0.75 * 0.65 * 0.55 * 0.60 = 0.12)

**End-to-end probability of at least producing a page + verdict: ~65%**
(The experiment can tolerate imperfect audits and still produce a verdict.)

---

## 8. LLM-SPECIFIC BEHAVIORAL RISKS (Cross-Agent)

### Risk A: Continuation Bias Cascade
Each agent anchors to its input. Content-selector anchors to first-listed domain. Planner anchors to content-selector's pattern mapping. Builder anchors to planner's first section. Auditor anchors to plan expectations. Evaluator anchors to audit tone.

This cascade means: if content-selector chooses "development environment setup" (primacy) and maps it to CRESCENDO (obvious match), the planner will never seriously consider other patterns. The builder will implement a tutorial crescendo. The auditor will evaluate "does this look like a tutorial crescendo?" The evaluator will say "yes, it does." The experiment tests CRESCENDO-FOR-TUTORIALS, not MIDDLE-TIER-IN-GENERAL.

**Severity: MEDIUM.** This is actually ACCEPTABLE for a first experiment. Testing one pattern concretely is better than testing four patterns abstractly. But the plan should acknowledge this limitation.

### Risk B: Satisficing vs Optimizing
Every agent will satisfice (meet minimum criteria) rather than optimize (push for best possible output). This is inherent to LLM behavior with checklists — once all boxes are checked, the agent stops. The content-selector will hit 800 words and stop. The planner will hit 1-per-category and stop. The builder will implement the spec and stop.

**Severity: HIGH for experiment validity.** The experiment asks "can lookup-based deployment reach the engagement threshold?" If agents satisfice to the MINIMUM lookup requirements, the experiment tests the FLOOR of Middle-tier, not the CENTER. A negative result might reflect satisficing behavior, not Middle-tier limitations.

**Recommended mitigation:** Add to planner prompt: "Your goal is NOT to meet minimum thresholds. Your goal is to create the BEST possible page within Middle-tier constraints. Minimum thresholds are FLOORS, not TARGETS. A page that barely passes is a FAILED experiment — it tells us nothing about Middle-tier potential."

### Risk C: Self-Assessment Bias in Auditors
The plan separates builder from evaluator to prevent self-assessment bias. Good. But: the programmatic auditor and perceptual auditor are both evaluating work they didn't produce and may default to CHARITABLE readings. LLMs are trained on helpful-assistant data, which biases toward positive assessment. An auditor asked "does this page feel designed?" will lean YES.

**Severity: MEDIUM.** The perceptual auditor's fresh-eyes constraint partially mitigates this. The programmatic auditor's binary checks (computed CSS values) are not susceptible to bias. But PA-05 and the semantic audit (PA-SEM) are judgment-based and vulnerable.

### Risk D: Report Length vs Report Quality
Agents producing audit reports will generate long, detailed documents. Length correlates poorly with quality for LLM output. A 5,000-word perceptual audit may contain 200 words of genuine insight buried in 4,800 words of template language. The verdict-synthesizer must extract signal from noise across multiple lengthy reports.

**Severity: LOW-MEDIUM.** The verdict-synthesizer is a separate agent that can focus on extraction. The structured formats (Critical-10, Quick Check, PA-05 sub-criteria) provide extraction targets.

---

## 9. CRITICAL BEHAVIORAL RISKS (RANKED)

1. **PLANNER ABSTRACTION DEFAULT (Impact: HIGH, Probability: 60%).** The planner produces an analytical essay instead of a concrete build specification. The builder can't execute abstract instructions. The entire downstream pipeline depends on planner concreteness.

2. **FILE-WRITE ENFORCEMENT GAPS (Impact: CRITICAL, Probability: varies by agent).** The plan includes file-write enforcement for the builder (Block 2) but NOT for content-selector, auditors, or evaluators. Historical data shows 15-80% file-write failure rates depending on agent role.

3. **HTTP SERVER STARTUP UNASSIGNED (Impact: HIGH, Probability: 20%).** Neither the plan nor any agent is explicitly responsible for starting the HTTP server. If forgotten, both Playwright-based auditors fail.

4. **PERCEPTUAL AUDITOR FRESH-EYES COMPROMISE (Impact: MEDIUM, Probability: 30%).** No prompt template means the team lead constructs the prompt ad-hoc, risking context leakage.

5. **PA-05 OPERATIONALIZATION NOT IN AUDITOR PROMPT (Impact: MEDIUM-HIGH, Probability: 45%).** PA-05 sub-criteria with numeric thresholds exist in the plan but may not reach the auditor's prompt.

6. **CROWN JEWEL MECHANISM LISTS MISSING (Impact: MEDIUM, Probability: 100% — gap is certain).** D3.3 novelty test requires mechanism lists for DD-006 and CD-006 that aren't in the plan.

7. **BUILDER PROMPT ASSEMBLY UNSPECIFIED (Impact: MEDIUM-HIGH, Probability: 30%).** The plan describes what the builder receives but doesn't provide a template for assembling the builder's prompt.

---

## 10. RECOMMENDED MITIGATIONS (Specific Prompt Text)

### M1: Anti-Abstraction Instruction for Planner

Add to planner prompt after the 7-section output format:

```
ANTI-ABSTRACTION RULE: Your SECTION MAP and MECHANISM TABLE must contain
EXACT CSS values. Examples of CORRECT entries:
  - "Section 2: padding: var(--space-16) var(--space-8), background: var(--color-zone-sparse)"
  - "Mechanism #5: padding alternates between var(--space-16) and var(--space-4)"

Examples of INCORRECT entries (DO NOT produce these):
  - "Section 2: use moderate spacing with a sparse background"
  - "Mechanism #5: alternate between dense and sparse sections"

The builder instance has NEVER read the mechanism catalog. Your plan is its
ONLY specification. If you write "deploy mechanism #5," the builder will not
know what CSS to produce.
```

### M2: File-Write Enforcement for ALL Agents

Add to EVERY agent prompt:

```
CRITICAL: You MUST write your output file using the Write tool. Your task is
NOT complete until the file exists. Output file: [specify per agent]
```

Agent-specific paths:
- content-selector: `ephemeral/middle-tier-experiment/01-content-selection.md`
- planner: `ephemeral/middle-tier-experiment/02-build-plan.md`
- builder: `ephemeral/middle-tier-experiment/middle-tier-page.html`
- programmatic-auditor: `ephemeral/middle-tier-experiment/03-programmatic-audit.md`
- perceptual-auditor: `ephemeral/middle-tier-experiment/04-perceptual-audit.md`
- comparative-auditor: `ephemeral/middle-tier-experiment/05-comparison-report.md`
- novelty-evaluator: `ephemeral/middle-tier-experiment/06-novelty-assessment.md`
- verdict-synthesizer: `ephemeral/middle-tier-experiment/07-VERDICT.md`

### M3: HTTP Server Startup Assignment

Add to Stage A (before agent spawning):

```
TEAM LEAD SETUP (before spawning ANY agent):
1. mkdir -p ephemeral/middle-tier-experiment/
2. python3 -m http.server 8080 &
3. Verify: curl http://localhost:8080/ returns directory listing
4. After builder completes: verify http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html loads
```

### M4: Perceptual Auditor Prompt Template

Pre-written prompt for the team lead to copy verbatim:

```
You are a perceptual auditor. You have NEVER seen any design specifications,
mechanism catalogs, or planning documents. You are looking at this page for
the FIRST time.

View the page at: http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html

Answer EACH of these questions honestly:
[PA-01 through PA-20 questions here]
[PA-SEM-01 through PA-SEM-03 questions here]

SPECIAL: For PA-05 ("Would you put your name on this?"), also answer:
- PA-05a: How many NON-DEFAULT layout elements do you see? (threshold: >= 2 at 1440px)
- PA-05b: What is the ratio between the largest and smallest padding? (threshold: >= 2.0x)
- PA-05c: If you blur the page at 20px for 3 seconds, can you identify the visual hierarchy? (YES/NO)
- PA-05d: What percentage of CSS appears to be custom compositional rules vs framework defaults? (threshold: >= 15%)

Score PA-05: 4/4 = DESIGNED, 2-3/4 = MARGINAL, 0-1/4 = FORMATTED

CRITICAL: Write your complete audit to ephemeral/middle-tier-experiment/04-perceptual-audit.md
```

### M5: Anti-Satisficing Instruction

Add to planner prompt:

```
Your goal is NOT to meet minimum thresholds. Minimum thresholds are FLOORS,
not TARGETS. A page that barely passes Critical-10 and lands at exactly 7
mechanisms is a wasted experiment — it tells us nothing about Middle-tier
potential. Push toward 9-10 mechanisms with genuine content-based justification.
```

### M6: Crown Jewel Mechanism Lists

Add to the novelty evaluator's prompt (the plan should pre-compute these):

```
MECHANISM LISTS FOR COMPARISON:

Variant B (7 mechanisms): #1, #2, #4, #5, #7, #10, #11, #18
DD-006 (estimated from CSS): [team lead should enumerate before spawning]
CD-006 (estimated from CSS): [team lead should enumerate before spawning]

For D3.3: Compare the built page's mechanism set against ALL THREE lists.
Novel = different combination from ALL. Derivative = same as ANY.
```

### M7: Builder Prompt Assembly Checklist

Add to plan:

```
BUILDER PROMPT ASSEMBLY (team lead copies in this order):
1. [ ] Planner's full 7-section output
2. [ ] :root CSS block (Section 4.3, verbatim)
3. [ ] Base typography block (Section 4.4, verbatim)
4. [ ] Accessibility patterns (Section 4.5, verbatim)
5. [ ] Responsive strategy (Section 4.6, verbatim)
6. [ ] Font CDN link (Section 2.2)
7. [ ] Appendix B Block 1: Soul Checklist
8. [ ] Appendix B Block 2: File-Write Enforcement
9. [ ] Appendix B Block 3: Container Width Enforcement
10. [ ] Appendix B Block 4: M1 Override
```

---

## 11. ASSESSMENT SUMMARY

### Plan Strengths (What Will Work)
1. **Two-Instance pattern is correctly designed.** Separating planner from builder exploits continuation bias. The builder will anchor to the plan, not re-derive.
2. **Binary rules are well-distributed.** Container width (5 mentions), soul compliance (4 mentions), per-category minimum (3 mentions). These will achieve ~90%+ compliance.
3. **7-section output format for planner is the plan's best innovation.** Tables force concreteness. Without this, the planner would produce 100% prose.
4. **8-agent team with per-phase ownership is empirically validated.** Per-file ownership = zero contention, confirmed 6+ times.
5. **Phase 3 parallel auditing is safe.** 2 concurrent Playwright agents is empirically acceptable.

### Plan Weaknesses (What Will Break)
1. **No anti-abstraction enforcement.** The planner will default to descriptions, not CSS values. (M1 fixes this.)
2. **File-write enforcement only for builder.** 4 other agents can fail to write files. (M2 fixes this.)
3. **HTTP server startup unassigned.** Silent failure cascades to both auditors. (M3 fixes this.)
4. **No perceptual auditor prompt template.** Fresh-eyes compromised by ad-hoc construction. (M4 fixes this.)
5. **No builder prompt assembly checklist.** Team lead may omit blocks. (M7 fixes this.)
6. **Crown jewel mechanism lists missing.** D3.3 novelty test impossible without them. (M6 fixes this.)

### Bottom Line

The plan is architecturally sound but operationally incomplete. It correctly models WHAT should happen at each phase but under-specifies HOW each agent is prompted. The 7 mitigations above (M1-M7) address the operational gaps. With all mitigations applied, end-to-end correct execution probability rises from ~12% to ~45-55%. The remaining ~45-55% failure probability is inherent to multi-agent execution and cannot be eliminated by prompt engineering alone — it requires the team lead to actively monitor, intervene, and potentially respawn failed agents (which the plan correctly accounts for in its time budget).

The plan's fundamental approach — lookup-based Middle-tier with per-category mechanism minimums — will be correctly tested. The experiment's validity depends more on planner concreteness (M1) and file-write reliability (M2) than on any architectural flaw.

---

*End of metacognitive plan review.*
