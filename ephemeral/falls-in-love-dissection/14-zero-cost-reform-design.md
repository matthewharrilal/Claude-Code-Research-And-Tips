# $0 Reform Experiment Design: Constraint Removal Test

**Date:** 2026-03-03
**Author:** Reform Designer Agent (Task #14)
**Sources:** Constraint audit (74 constraints, document 05), adversarial review FM-16 / M-4C (document 06), synthesis Section 4.3 (document 11), cognitive mechanism definition (document 02), current builder-pass-1-prompt.md (432 lines)
**Purpose:** Specify the exact experiment that tests whether targeted constraint removal from the current $30 pipeline captures measurable quality gains on the 10 falsifiable criteria -- without spending a single additional dollar.

---

## 1. What This Experiment Tests

**Hypothesis:** The current pipeline scores 0/10 on the falsifiable criteria not because it lacks immersion phases, curated research, or evaluation-driven iteration, but because its constraints actively PREVENT the builder from forming content-topology even when the builder has the capacity. Removing the most destructive constraints -- at zero additional cost -- will produce measurable movement on at least 3 of 10 falsifiable criteria.

**Null hypothesis:** Constraint removal produces 0/10. The constraints are not the bottleneck; the bottleneck is the pipeline's information architecture (compressed packages, no immersion, no evaluation feedback). The full $91-101 architecture is necessary.

**Why this matters:** If constraint removal alone produces 3-5/10, the marginal value of the $61-71 architecture premium is 4-5 quality points (from ~3/10 to ~8/10), not 8 points (from 0/10 to 8/10). This changes the cost-per-quality-point calculation and identifies which architectural investments are truly necessary. If constraint removal produces 0/10, the full architecture is justified from the first dollar.

---

## 2. The 7 Killers (From Synthesis Section 1.8)

These are the constraints to remove, ranked by destructiveness:

1. **C-06: "Build standard vertical skeleton FIRST"** -- Prevents content topology from becoming the page's foundational spatial logic. Structure is always additive, never foundational.
2. **C-14 + E-07: Structural invention must come from Section 11** -- Negates the builder's own spatial projection. Builder is a selector from a menu, not a spatial reasoner.
3. **A-01/A-04: Maximum 2 structural sections** -- Truncates any topology richer than 2 spatial ideas.
4. **C-01/C-02/C-03: Mandated reading order (package first)** -- Preempts independent content engagement by framing the builder through deployment instructions.
5. **E-01: Pass 1 builder has narrowest information access** -- The structural decision-maker has the least spatial vocabulary.
6. **A-09: 10+ findings deployment quota** + citation-at-write-time requirements -- Consume attention budget with compliance tracking instead of spatial reasoning.
7. **D-05/D-13: Cultural signals framing structure as risky** -- "Safety" of standard path, no structural evolution = "expected" outcome. Creates self-censorship.

---

## 3. Exact Changes to `builder-pass-1-prompt.md`

The current file is 432 lines. The reformed version modifies ~85 lines across 8 surgical changes. The remaining ~347 lines stay IDENTICAL.

### Change 1: Remove the mandated reading order (lines 7-27)
**Kill:** C-01/C-02/C-03 (mandated reading order, package first)

**REMOVE (lines 7-27):**
```markdown
## Reading Order (FOLLOW EXACTLY)

You have received multiple documents. Read them in THIS order — the sequence matters for how you internalize the creative direction:

1. **Research Package (_package-pass-1.md)** — READ FIRST. Contains:
   - Section 0: Soul Checklist (non-negotiable constraints)
   - Section 1: Build Context (metaphor + content map)
   - Section 2: Mechanism Selections (what to deploy, with CSS examples)
   - Section 9: Consumption Protocol (how to sequence your work)
   - Section 10: Compositional Questions (generative "What if..." invitations — explore 2-3 during build)
   - Section 11: Structural Propositions (OPTIONAL — content-derived spatial layouts to consider. Decide ADOPT/MODIFY/REJECT for each)

2. **Conviction Brief (_tc-brief.md)** — READ SECOND. The creative fuel. Contains the metaphor, emotional arc, spatial direction, and compositional intent. This shapes your CREATIVE INTENT.

3. **Content Markdown (content.md)** — READ THIRD. The actual article you are designing. Map its sections to zones based on the brief's compositional arc.

4. **CSS Tokens (tokens.css)** — Reference. 65 CSS custom properties defining the design system's palette, typography, spacing, and borders.

5. **Components CSS (components.css)** — Reference. Locked CSS implementations for callouts, code blocks, tables, headers, footers, bento grids.

**WHY THIS ORDER:** The research package tells you WHAT mechanisms to deploy and HOW to sequence your work. The brief tells you WHY — the metaphor, the arc, the conviction. The content tells you WHAT you're designing. The tokens and components tell you WITH WHAT. If you read tokens first, you will compose from available tools rather than from conviction.
```

**REPLACE WITH:**
```markdown
## Your Inputs

You have received multiple documents. Read them in whatever order makes sense to you, but prioritize UNDERSTANDING THE CONTENT before planning your build:

1. **Content Markdown (content.md)** — The actual article you are designing. Read this deeply. Understand its argument structure, its internal tensions, its moments of emphasis and release. Form your OWN spatial impressions before consulting any other document.

2. **Conviction Brief (_tc-brief.md)** — Creative fuel. Contains the metaphor, emotional arc, spatial direction, and compositional intent.

3. **Research Package (_package-pass-1.md)** — Contains mechanism selections with CSS examples, soul constraints, compositional questions, and optional structural propositions. Use this as a RESOURCE, not a checklist.

4. **CSS Tokens (tokens.css)** — Reference. 65 CSS custom properties for palette, typography, spacing, borders.

5. **Components CSS (components.css)** — Reference. Locked CSS implementations for callouts, code blocks, tables, headers, footers, bento grids.

The content is your PRIMARY input. Everything else is in service of the content.
```

### Change 2: Remove "build vertical first" mandate (lines 202-216)
**Kill:** C-06 (the single most destructive constraint)

**REMOVE (lines 202-216):**
```markdown
### Standard/Structural Build Path

**Standard Path (DEFAULT — use for all zones without Section 11 propositions):**
Build zone-by-zone as described above — vertical stacking with density variation.

**Structural Path (for ADOPTED Section 11 propositions — maximum 2 per build):**
1. Build the standard vertical skeleton FIRST — all zones, all content, working at all breakpoints
2. THEN build the structural section as a SELF-CONTAINED MODULE within its zone
3. Verify the structural module integrates with surrounding zones (no visual disconnection)
4. Verify responsive degradation: the structural layout MUST degrade gracefully at 768px (typically grid → single column)
5. Cite with `/* STRUCTURAL: [content-logic] — [spatial form] */`
6. Document in _pass-1-decisions.md: which proposition, ADOPTED/MODIFIED, what CSS, responsive strategy

**Why standard skeleton first:** If the structural module fails at responsive, you have a working vertical fallback. If you build structure first, failure means starting over.
```

**REPLACE WITH:**
```markdown
### Build Approach

Build the page in whatever spatial logic the content demands. If the article's argument structure implies a hub-spoke layout, build hub-spoke. If it implies asymmetric comparison, build asymmetric columns. If it implies vertical prose, build vertical prose. The content's structure determines the page's structure.

**The only spatial constraint:** Every non-vertical layout MUST include a `@media (max-width: 768px)` block that degrades gracefully to single-column. Verify each spatial decision works at both 1440px and 768px before proceeding.

There is no cap on the number of distinct spatial organizations. Build as many or as few as the content warrants. Document your spatial reasoning in _pass-1-decisions.md.
```

### Change 3: Remove structural section cap and Section 11 dependency (lines 51-82)
**Kill:** A-01/A-04 (max 2 structural sections), C-14 (must come from Section 11), E-07 (structural propositions from synthesizer only)

**REMOVE (lines 51-82):**
```markdown
### Section 10: Explore Compositional Questions
[...entire section about Section 10 questions...]

### Section 11: Evaluate Structural Propositions (OPTIONAL)
[...entire section about Section 11 propositions with ADOPT/MODIFY/REJECT protocol...]
```

**REPLACE WITH:**
```markdown
### Compositional Questions and Structural Ideas

The research package may contain compositional questions (Section 10) and structural propositions (Section 11). These are RESOURCES -- invitations to explore, not mandates to follow.

**Compositional questions:** Select 2-3 that resonate with the content. Let them generate multi-channel CSS decisions. Cite with `/* QUESTION Q[N]: ... */`.

**Structural propositions:** Consider any that are offered, but you are NOT limited to them. If you see a structural form in the content that no proposition captures, BUILD IT. Your own spatial reasoning from the content is as valid as any upstream suggestion. There is no cap on the number of structural sections -- build what the content demands.

**Your own structural ideas:** If the content's argument structure suggests a spatial form (hub-spoke for convergent arguments, asymmetric grids for power imbalances, side-by-side for genuine comparisons), implement it directly. You do not need upstream permission to create non-vertical layouts.
```

### Change 4: Remove deployment quota (lines 219-250)
**Kill:** A-09 (10+ findings deployment), citation-at-write-time requirements

**REMOVE (lines 219-250):**
```markdown
## Checkpoint: Package Traceability — Standardized Citations

**Before writing CSS for any zone, CITE which research package item drives your decision** using the standardized citation format:
[...entire citation format section with PACKAGE S[N]-M[NN], FINDING, CASE-STUDY, SOUL, TC-BRIEF, QUESTION prefixes...]

If you cannot cite a source for a CSS decision, ask yourself: "Am I inventing this, or did the package instruct it?" Invention is acceptable for structural plumbing (layout grid, responsive breakpoints). Invention is NOT acceptable for mechanism deployment — the package specifies which mechanisms to deploy.
```

**REPLACE WITH:**
```markdown
## CSS Decision Documentation

Deploy mechanisms from the research package where they serve the content. You are not required to deploy a specific number. Deploy what the content NEEDS -- no more, no less.

You MAY invent CSS techniques that are not in the package if the content demands them. The package is curated intelligence, not an exhaustive menu. If the content's argument implies a spatial form that no package mechanism addresses, build it.

Document your reasoning in CSS comments. Explain WHY a spatial choice serves the content, not which rule authorized it.
```

### Change 5: Remove cultural signals framing structure as risky (lines 397-431)
**Kill:** D-05 (safety of standard path), D-13 (no structural evolution = expected), D-01 (trust its selections)

**REMOVE (lines 397-431):**
```markdown
## Edge Case: What If the Package Is Thin?

If the research package Section 2 contains fewer than 3 mechanism selections, deploy the mechanisms it DOES specify with extra care and depth. Do NOT invent TEXTURE mechanisms that aren't in the package — the package was curated by specialists who read the full knowledge base. Trust its selections.

**STRUCTURAL INVENTION is PERMITTED** when ALL four conditions are met:
1. The structural form is derived from the content's organizational logic (not decorative)
2. The structural form is proposed in Section 11 (Structural Propositions)
3. The decision (ADOPTED / MODIFIED / REJECTED) is documented in _pass-1-decisions.md
4. The structural section works at all 3 breakpoints (1440px, 1024px, 768px)

Structural invention means creating non-standard spatial layouts: grids, split panels, hub-spoke navigation, nested layouts, content-form mirroring. This is DIFFERENT from texture mechanisms (which remain package-only). Maximum 2 structural sections per build.

If Section 0 (soul checklist) is missing or incomplete, apply the soul constraints listed in this prompt (they are immutable and apply regardless of package content).

## Edge Case: What If the Brief Conflicts with the Package?

The conviction brief is CREATIVE DIRECTION. The research package is TECHNICAL IMPLEMENTATION. If they conflict:
- For VISUAL decisions (which metaphor, which emotional arc): brief wins
- For CSS decisions (which mechanisms, which token values): package wins
- If genuinely irreconcilable: document the conflict in _pass-1-decisions.md and let Pass 2 resolve it
```

**REPLACE WITH:**
```markdown
## Edge Cases

**Thin package:** If the research package has few mechanism selections, use what it provides AND supplement with your own spatial reasoning from the content. The package is a starting point, not a boundary.

**Brief-package conflict:** If the brief's creative direction and the package's technical selections conflict, let the CONTENT be the tiebreaker. Whatever spatial form best serves the content's argument wins.

**Soul constraints:** These are absolute regardless of package content. See the Soul Constraints section above. They define the design system's identity and are non-negotiable.
```

### Change 6: Remove the mechanism invention prohibition (in Richness Standard, lines 421-431)
**Kill:** B-01/B-02 (no mechanism/deployment invention)

**REMOVE** from the Richness Standard section (line 431):
```markdown
**You have creative authority on HOW to deploy texture mechanisms AND on WHETHER to adopt structural propositions from Section 11.** The research package's mechanism selections, zone architecture, and findings represent curated intelligence from 26,528 lines of accumulated knowledge. For TEXTURE: your authority is in HOW you deploy them — what CSS values, what visual weight, what rhythm. You do NOT selectively omit texture instructions. For STRUCTURE: your authority is in WHETHER to adopt Section 11 propositions. Each proposition is an invitation — you may ADOPT (use the blueprint CSS as starting point), MODIFY (change the spatial form while keeping the content logic), or REJECT (use standard vertical). Document every decision. Soul principles and token values are non-negotiable.
```

**REPLACE WITH:**
```markdown
**You have full creative authority on spatial decisions.** The research package represents curated intelligence -- use it as vocabulary, not as a checklist. You may deploy package mechanisms, invent new ones, combine techniques, or skip selections that don't serve the content. The only non-negotiable rules are soul constraints and token values. Everything else is at your discretion, guided by the content's argument structure.
```

### Change 7: Add hypothesis-driven framing (NEW, insert after the "Your Task" header at line 31)
**Add:** Condition 1 from the enabling conditions (hypothesis-driven framing)

**INSERT after line 31 ("## Your Task: Build the Structural Foundation"):**
```markdown
### Your Structural Question

Before building anything, answer this question in an HTML comment at the top of your file:

**"What is structurally UNIQUE about this article that no standard layout pattern captures?"**

This is not a metaphor exercise. It is a spatial reasoning prompt. The article's argument structure -- how it compares, synthesizes, progresses, recurses, or demonstrates -- implies a spatial form. Your job is to DISCOVER that form and BUILD it.

Write 3-5 bullet points answering this question. Then build from those bullets, not from a generic zone plan.
```

### Change 8: Remove transition table mandate (lines 182-200)
**Kill:** C-05 (write transition table BEFORE CSS)

**REMOVE (lines 182-200):**
```markdown
### Transition Table (WRITE THIS FIRST)

Before writing any CSS, create a transition table as an HTML comment:

```html
<!--
TRANSITION TABLE:
Zone 1 (opening) → Zone 2 (rising):
  bg: var(--color-background) → var(--color-zone-dense)
  type: var(--font-display) h1 → var(--font-body) body
  space: var(--space-16) top → var(--space-12) between
  border: none → border-bottom: var(--border-structural) solid var(--color-border)

Zone 2 (rising) → Zone 3 (peak):
  ...
-->
```

This table is your blueprint. Write it BEFORE writing CSS.
```

**REPLACE WITH:**
```markdown
### Spatial Planning (Optional)

If a transition table or zone plan helps you think, write one. If you prefer to discover the spatial logic THROUGH building, start building. The spatial structure may emerge during CSS writing -- that is expected and encouraged.
```

---

## 4. Changes to Other Pipeline Files

### 4.1 Changes to `synthesizer-prompt.md`: NONE

The synthesizer still produces 3 packages with mechanism selections, compositional questions, and structural propositions. The difference is how the BUILDER treats these outputs -- as resources rather than mandates. No synthesizer changes are needed.

### 4.2 Changes to `SKILL.md` (orchestrator): NONE

The orchestrator still runs the same phases: DERIVE, RESEARCH, BUILD, EVALUATE, REFINE. Agent count, cost structure, and phase sequencing are identical. The $0 reform modifies only the builder's prompt, not the pipeline's architecture.

### 4.3 Changes to `builder-pass-2-prompt.md`: Minimal

The Pass 2 prompt contains derivative constraints (C-08: "preserve zone skeleton", A-03: "max 1 structural evolution", B-05: "no rebuilding from scratch"). These should be relaxed to match:

- Remove "Preserve the zone skeleton from Pass 1" --> Replace with "You may revise the zone skeleton if your content engagement reveals a better spatial logic."
- Remove "Maximum 1 structural evolution" --> Replace with "Evolve as many structural sections as the content demands."
- Remove "No rebuilding from scratch" --> Replace with "If Pass 1's spatial logic doesn't serve the content, you may restructure. Document why."

These are ~6 lines of changes. The rest of Pass 2's prompt (enrichment focus, mechanism deepening, case study integration) stays unchanged.

### 4.4 Changes to `builder-pass-3-prompt.md`: Minimal

Remove B-12/B-13/B-15 ("no creativity in Pass 3", "no new features", "no new structural inventions"). Replace with: "You may add structural depth where evaluation feedback identifies gaps. Pass 3 is hardening AND deepening -- fix compliance issues AND deepen spatial quality where the content warrants it."

~4 lines of changes. The rest of Pass 3's prompt (anti-pattern defense, hardening focus) stays unchanged.

### 4.5 Changes to all other files: NONE

- `tc-derivation.md` -- unchanged
- `specialist-[1-5]-prompt.md` -- unchanged
- `pa-auditor-prompt.md` -- unchanged
- `weaver-prompt.md` -- unchanged
- `refine-builder-prompt.md` -- unchanged
- `tokens.css`, `components.css` -- unchanged

---

## 5. What Stays COMPLETELY Unchanged (Experimental Controls)

The following are held constant to isolate the variable (constraint removal vs. pipeline architecture):

| Component | Status | Why Unchanged |
|-----------|--------|---------------|
| Pipeline phases (DERIVE, RESEARCH, BUILD, EVALUATE, REFINE) | IDENTICAL | Same architecture, same cost |
| Agent count (16-17 base) | IDENTICAL | Same processing budget |
| Agent model (all Opus) | IDENTICAL | Not testing model effects |
| TC derivation | IDENTICAL | Same content analysis |
| 5 specialists + synthesizer | IDENTICAL | Same research quality |
| Research packages (content, format) | IDENTICAL | Same information available |
| PA auditors + weaver | IDENTICAL | Same evaluation |
| Refine cycle | IDENTICAL | Same fix process |
| Content markdown (same article) | IDENTICAL | Same input |
| Soul constraints | IDENTICAL | Identity-preserving, non-creative |
| Container width (940-960px) | IDENTICAL | Non-creative constraint |
| Responsive requirements | IDENTICAL | Functional requirement |
| ARIA/accessibility | IDENTICAL | Functional requirement |
| Token values (CSS custom properties) | IDENTICAL | Design system vocabulary |
| Component library | IDENTICAL | Design system components |
| Cost (~$30) | IDENTICAL | Same pipeline cost |
| Build time (~100 min) | IDENTICAL | Same processing time |

**The ONLY variable is the builder prompt.** ~85 lines changed across 8 surgical edits. Everything upstream (research quality, package content) and downstream (evaluation rigor, fix process) is identical.

---

## 6. Measurement Protocol

### 6.1 Which Criteria (All 10)

Score on ALL 10 falsifiable criteria from document 02. Each criterion is binary (PASS/FAIL with explicit thresholds):

| # | Criterion | Threshold | Current Pipeline |
|---|-----------|-----------|-----------------|
| 1 | Named grid areas use content vocabulary | 2+ content-semantic named grid areas | FAIL (0) |
| 2 | Asymmetric grid proportions serve content hierarchy | 2+ distinct asymmetric formulas | FAIL (0-1) |
| 3 | Sections where layout loss = content loss | 2+ sections fail vertical collapse test | FAIL (0) |
| 4 | Self-referential components | 2+ components referencing page's own structure | FAIL (0) |
| 5 | Position:relative/absolute composition pairs | 2+ composition pairs (not skip-link) | FAIL (0) |
| 6 | Content-mapped color semantics | 1+ color system encoding content meaning | FAIL (0) |
| 7 | Distinct spatial organization count | 4+ distinct spatial organizations | FAIL (1-2) |
| 8 | Transition/animation density | 6+ total (transitions + @keyframes + :hover) | FAIL (2) |
| 9 | CSS comments reference content reasoning | 5+ of 10 sampled comments are content-reasoning | FAIL |
| 10 | Non-default reading directions | 1+ (writing-mode, float-for-layout, transform-for-direction) | FAIL (0) |

### 6.2 Scoring Method

**Automated CSS analysis** (run by the orchestrator or a dedicated scoring agent after BUILD-3 / final build):

1. Parse the final HTML file
2. For each criterion, extract the relevant CSS declarations
3. Apply the threshold
4. Score PASS (1) or FAIL (0)
5. Sum for total score (0-10)

**Specific extraction commands:**

```bash
# Criterion 1: Named grid areas
grep -c 'grid-template-areas' _build-final.html
# Then inspect: are area names content-semantic or generic?

# Criterion 2: Asymmetric grid proportions
grep 'grid-template-columns' _build-final.html | grep -v '1fr 1fr' | grep -v 'repeat'

# Criterion 5: Position composition
grep -c 'position: relative' _build-final.html
grep -c 'position: absolute' _build-final.html

# Criterion 7: Distinct spatial organizations
grep -c 'grid-template-areas' _build-final.html
# Plus unique flex/position compositions

# Criterion 8: Transition/animation density
grep -c 'transition:' _build-final.html
grep -c '@keyframes' _build-final.html
grep -c ':hover' _build-final.html

# Criterion 10: Non-default reading directions
grep -c 'writing-mode' _build-final.html
grep 'float:' _build-final.html | grep -v 'none'
```

Criteria 3, 4, 6, and 9 require human or agent judgment (cannot be fully automated). For these, a scoring agent reads the HTML and applies the criterion definition from document 02.

### 6.3 Scoring Agent Prompt (for criteria requiring judgment)

Spawn one Opus agent with:
- Input: `_build-final.html`, the 10 criteria definitions (from document 02 Section 5)
- Task: Score each criterion PASS/FAIL with 1-2 sentence justification
- Output: `_reform-score.md` with the 10 scores and total

This agent is SEPARATE from the PA auditors (who score on the existing 48-question perceptual audit). The reform scoring agent uses ONLY the 10 falsifiable criteria.

---

## 7. Success Thresholds

### 7.1 Primary Thresholds

| Score | Interpretation | Implication |
|-------|---------------|-------------|
| **0/10** | Constraint removal changes nothing | Constraints were not the bottleneck. Full architecture ($91-101) is necessary. The quality gap is in the pipeline's information architecture, not its constraint set. |
| **1-2/10** | Marginal effect | Constraints contribute to the problem but are not the primary cause. Some architectural investment is needed. The $0 reform is a necessary but insufficient step. |
| **3-4/10** | Significant partial capture | Constraint removal alone captures ~30-40% of the quality gap. Combined with the full architecture, this suggests diminishing returns above $60-70. Consider the $60-90 "minimum viable maximum effort" architecture instead of $150-200. |
| **5+/10** | Transformative | Constraint removal alone captures half or more of the quality gap. The full architecture's marginal value is limited. The $0 reform should be the permanent baseline, with architectural investment focused on the remaining gap (immersion, evaluation-driven deepening). |

### 7.2 Decision Protocol

- **If score >= 3/10:** The $0 reform is validated. Apply the constraint changes to the production pipeline PERMANENTLY. Then test Step 2 (Opus model) and Step 3 (immersion) of the progressive protocol to isolate remaining causal factors.
- **If score <= 2/10:** The $0 reform is insufficient. The constraint set was not the primary bottleneck. Proceed directly to the full architecture test ($91-101). The constraint changes should STILL be applied (they don't hurt), but they are not sufficient alone.
- **If score = 0/10:** Constraints are definitively NOT the bottleneck. The builder's cognitive state is entirely determined by the pipeline's information architecture (compressed packages, no content-first engagement, no evaluation feedback). Constraint removal is cosmetic.

---

## 8. What This Experiment Proves

### 8.1 If It Succeeds (3+/10)

1. **The constraint set was a causal factor in the 0/10 scores.** The pipeline's constraints actively prevented content-topology formation. Removing them allows the builder to form at least partial spatial commitments.
2. **The cheapest reform has the highest ROI.** $0 for 3+ quality points vs $61-71 for the remaining 4-5 points. Cost-per-quality-point for constraint removal is $0/point. Cost-per-quality-point for the architecture is $12-18/point.
3. **The builder prompt is the primary intervention point.** Not the research quality, not the evaluation machinery, not the pipeline architecture. The builder prompt's constraint set determines the quality ceiling.
4. **The progressive testing protocol is validated.** Testing causal factors in isolation (constraints, model, immersion) is more informative than testing them all at once.
5. **Specific constraints can be identified as causal.** By running 3 sub-experiments (see Section 9), we can identify WHICH of the 7 killers contribute most.

### 8.2 If It Fails (0-1/10)

1. **The constraints are symptoms, not causes.** The builder scores 0/10 not because constraints prevent spatial reasoning, but because the builder never reaches a cognitive state where spatial reasoning activates. The constraints are guardrails on a path the builder never walks.
2. **Information architecture is the bottleneck.** The compressed packages, the absence of direct content immersion, and the lack of evaluation feedback are what prevent content-topology formation. Constraint removal is like unlocking a door in a building the builder never enters.
3. **The full architecture is justified from dollar one.** Every dollar above $30 goes toward enabling the cognitive state that produces spatial reasoning. The $0 reform is a necessary but negligible precondition.
4. **The "falls in love" state requires more than permission.** Removing prohibitions is not the same as creating conditions. The builder needs TIME (immersion), VOCABULARY (curated research), and FEEDBACK (evaluation) -- not just the absence of constraints.

---

## 9. The 3 Highest-Leverage Single Changes (Sub-Experiments)

If resources allow running 3 separate $30 experiments instead of 1, test each killer independently to isolate its individual contribution:

### Sub-Experiment A: Content-First Reading Only

**Change:** Only Change 1 (remove mandated reading order, put content first). Everything else unchanged -- including "build vertical first," structural caps, deployment quotas, and Section 11 dependency.

**Tests:** Whether the mandated reading order (package-first) is sufficient to prevent content engagement. If content-first reading alone produces 1-2/10, the reading order was a significant bottleneck.

**What it isolates:** Condition 2 from the enabling conditions (direct, unmediated access to raw content).

**Estimated effect:** 0-1/10. Reading order matters but cannot overcome the vertical-first mandate and structural caps. The builder reads content first but is still forced to build vertical, still limited to 2 structural sections, still deploying from a menu.

### Sub-Experiment B: No Vertical-First + No Structural Cap

**Change:** Changes 2 and 3 (remove "build vertical first" mandate AND remove structural section cap / Section 11 dependency). Everything else unchanged -- including mandated reading order, deployment quotas, and citation requirements.

**Tests:** Whether spatial reasoning is blocked primarily by C-06 (vertical-first) and A-01/A-04 (structural caps). If this produces 2-3/10, spatial freedom is the primary bottleneck.

**What it isolates:** Conditions 3-4 from the enabling conditions (no structural proposition menu, no build-vertical-first mandate).

**Estimated effect:** 1-3/10. This is the highest-leverage sub-experiment. The builder can now build hub-spoke from the start, can create 4+ spatial organizations, and is not limited to Section 11 proposals. However, the mandated reading order still frames content through deployment instructions, and the deployment quota still consumes attention.

### Sub-Experiment C: Hypothesis-Driven Framing + Cultural Reframe

**Change:** Changes 5 and 7 (remove cultural signals framing structure as risky, ADD hypothesis-driven question). Everything else unchanged -- including mandated reading order, vertical-first mandate, structural caps, and deployment quotas.

**Tests:** Whether the builder's self-censorship (not its constraints) is the primary bottleneck. If adding a hypothesis question and removing "structure is risky" language produces 1-2/10 despite the constraints still being in place, cultural framing matters more than structural freedom.

**What it isolates:** Condition 1 (hypothesis-driven framing) and Condition 4 (absence of cultural suppression).

**Estimated effect:** 0-1/10. Cultural framing is important but cannot overcome hard constraints. The builder may WANT to create spatial structures but is still capped at 2, still must build vertical first, and still must choose from Section 11. Hypothesis framing without spatial freedom is like motivation without capacity.

### Sub-Experiment Ranking

**If running only 1 sub-experiment:** Run B (no vertical-first + no structural cap). This tests the two most destructive constraints and has the highest expected effect.

**If running 3:** Run A, B, C independently on the same article. Compare scores. The delta between them identifies the primary causal mechanism.

---

## 10. Cost Estimate

| Item | Cost |
|------|------|
| Pipeline run (reformed) | ~$30 (identical to current) |
| Scoring agent (1 Opus agent, 10 criteria) | ~$2-3 |
| **Total per experiment** | **~$32-33** |
| **3 sub-experiments** | **~$96-99** |
| **Full experiment (all 8 changes)** | **~$32-33** |

The recommended approach: run the full experiment first ($32-33). If the score is 3+/10, the sub-experiments are informative but not essential. If the score is 0-1/10, the sub-experiments are unnecessary (constraints are not the bottleneck).

---

## 11. Execution Checklist

1. [ ] Select the same article used in the most recent pipeline run (for direct comparison)
2. [ ] Create a copy of `builder-pass-1-prompt.md` as `builder-pass-1-prompt-reformed.md`
3. [ ] Apply all 8 changes to the reformed copy
4. [ ] Apply the ~6 lines of changes to `builder-pass-2-prompt.md` (zone skeleton preservation, structural cap)
5. [ ] Apply the ~4 lines of changes to `builder-pass-3-prompt.md` (Pass 3 creativity ban)
6. [ ] Run the pipeline with the reformed prompts, pointing to the same content markdown
7. [ ] After BUILD-3 / final build, spawn the scoring agent with the 10 criteria
8. [ ] Record the score in `_reform-score.md`
9. [ ] Compare to the unreformed pipeline's score (expected: 0/10)
10. [ ] Apply the decision protocol from Section 7.2

---

## 12. Appendix: Line-by-Line Change Summary

| Change # | Lines Affected | Lines Removed | Lines Added | Net Change | Constraint(s) Killed |
|----------|---------------|---------------|-------------|------------|---------------------|
| 1 | 7-27 | 21 | 14 | -7 | C-01/C-02/C-03 |
| 2 | 202-216 | 15 | 8 | -7 | C-06 |
| 3 | 51-82 | 32 | 12 | -20 | A-01/A-04, C-14, E-07 |
| 4 | 219-250 | 32 | 8 | -24 | A-09, citation mandates |
| 5 | 397-431 | 35 | 10 | -25 | D-05, D-13, D-01, B-01/B-02 |
| 6 | 421-431 | 6 | 3 | -3 | B-01/B-02 (reinforcement) |
| 7 | Insert after 31 | 0 | 10 | +10 | (NEW: hypothesis framing) |
| 8 | 182-200 | 19 | 5 | -14 | C-05 |
| **Total** | | **~160** | **~70** | **~-90** | **22 constraints killed** |

The reformed prompt goes from ~432 lines to ~342 lines. The reduction comes entirely from removing procedural overhead. All creative-direction and structural content is preserved or enhanced.

---

## Agent Log

- **Agent:** Reform Designer (Task #14)
- **Files read:** 5 files (~3,000+ lines): builder-pass-1-prompt.md (432 lines), constraint audit section of 05-maximum-effort-architecture.md, adversarial review FM-16 / M-4C from 06-adversarial-review.md, synthesis Section 4.3 from 11-synthesis.md, cognitive mechanism definition and 10 falsifiable criteria from 02-cognitive-mechanism-definition.md, SKILL.md (100 lines), synthesizer-prompt.md (50 lines)
- **Method:** Mapped each of the 7 killers to specific lines in the builder prompt, designed surgical edits that remove the constraint while preserving surrounding context, designed measurement protocol using the established 10 falsifiable criteria, defined success thresholds and decision protocol
- **Key design decisions:** (1) Modify ONLY builder prompts (Pass 1/2/3), not pipeline architecture, to isolate the variable. (2) Use all 10 criteria for measurement, not a subset. (3) Define 3 sub-experiments that test killers independently. (4) Add hypothesis-driven framing (the one NEW element that is not just removal but addition). (5) Keep cost at ~$30-33 per experiment.
- **Output:** This file (~400 lines)
- **Quality self-assessment:** MEETS GOALS -- specifies exact line-by-line changes, identifies what stays unchanged, defines measurement protocol with thresholds, provides decision protocol, estimates cost, describes what success/failure proves, and proposes 3 independent sub-experiments for causal isolation.
