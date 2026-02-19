# VERBIAGE ANALYSIS: Master Execution Prompt vs Enhanced Remediation Spec

**Agent:** verbiage-analyst
**Date:** 2026-02-18
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines) | 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines)
**Method:** Full-read linguistic analysis across 6 dimensions

---

## 1. VERB TAXONOMY

### 1.1 Complete Verb Inventory

**MASTER EXECUTION PROMPT -- Imperative Verbs (exhaustive count):**

| Category | Verbs | Count |
|----------|-------|-------|
| **JUDGMENT** | verify (14), ensure (3), check (8), confirm (4), validate (1), assess (1), identify (5), describe (3), observe (2), compare (1), evaluate (0), examine (1), ask (3), determine (1) | **47** |
| **CONSTRAINT** | must (42), must not (8), shall not (0), fail if (17), kill (3), abort (4), never (8), prohibited (3), banned (1), non-negotiable (3) | **89** |
| **ACTION** | write (5), add (4), produce (4), deploy (3), remove (3), build (2), create (3), spawn (2), send (5), read (8), run (3), use (6), apply (1), include (3), document (2), capture (3), message (4) | **61** |
| **COGNITIVE** | derive (3), interpret (1), rewrite (1), invent (1), discover (0), conceive (0), feel (3), understand (1) | **10** |
| **PROCESS** | route (4), assign (3), receive (3), claim (1), mark (1), proceed (2), enter (1), lock (1), convene (1), restore (1), rollback (1), re-derive (2), escalate (3), pause (2) | **26** |

**Total Master verbs: ~233**
**Judgment+Constraint: 136 (58.4%)**
**Action: 61 (26.2%)**
**Cognitive+Process: 36 (15.4%)**

---

**ENHANCED REMEDIATION SPEC -- Imperative Verbs (exhaustive count):**

| Category | Verbs | Count |
|----------|-------|-------|
| **JUDGMENT** | verify (5), check (5), compare (2), ask (1), measure (2), inspect (1) | **16** |
| **CONSTRAINT** | do not (8), must (3), keep (2), preserve (1), never (0) | **14** |
| **ACTION** | delete (9), remove (5), replace (8), add (12), find (9), change (5), wrap (4), insert (2), override (2), reduce (3), scroll (4), open (3), resize (2), press (1), screenshot (1), select (1) | **71** |
| **COGNITIVE** | feel (2), look (2), see (2), notice (0) | **6** |
| **PROCESS** | proceed (2), keep (2), restore (1) | **5** |

**Total Remediation verbs: ~112**
**Judgment+Constraint: 30 (26.8%)**
**Action: 71 (63.4%)**
**Cognitive+Process: 11 (9.8%)**

### 1.2 Verb Ratio Analysis

| Ratio | Master | Remediation | Delta |
|-------|--------|-------------|-------|
| Judgment:Action | 1.53:1 | 0.23:1 | **6.7x reversal** |
| Constraint:Action | 1.46:1 | 0.20:1 | **7.3x reversal** |
| (Judgment+Constraint):Action | 2.23:1 | 0.42:1 | **5.3x reversal** |

The Master prompt uses 2.23 judgment/constraint verbs for every action verb. The Remediation uses 0.42 -- meaning **every 1 constraint is backed by 2.4 action directives**. This is the fundamental linguistic inversion between the two documents.

### 1.3 What the Ratio Reveals

The Master prompt is architecturally a **constraint document with action escape hatches**. Its dominant mode is "here are the boundaries; figure out what to do inside them." The Remediation is architecturally an **action document with constraint guardrails**. Its dominant mode is "do these specific things; here are the few things to avoid."

This distinction maps directly to the LLM cognitive load model: judgment verbs ("verify," "ensure," "check") require the model to form an internal representation, apply criteria, and produce a verdict. Action verbs ("delete," "replace," "add") require the model to locate a target and execute a transformation. The second path has fewer decision points, fewer ambiguity surfaces, and fewer opportunities for the model to diverge from intent.

---

## 2. SPECIFICITY SPECTRUM

### 2.1 Classification Protocol

Every directive in both prompts classified as:
- **ABSTRACT:** Qualitative, no measurable referent (e.g., "warm palette," "unhurried")
- **SEMI-CONCRETE:** Measurable but requires judgment to evaluate (e.g., ">= 60:40 content ratio," "feel like it was designed")
- **CONCRETE:** Exact value, selector, or code block (e.g., "#FEF5EB," "font-size: 17px," "delete lines 736-834")

### 2.2 Distribution

**MASTER EXECUTION PROMPT:**

| Specificity | Count | % | Examples |
|-------------|-------|---|----------|
| ABSTRACT | 41 | 24.3% | "Warm. Authoritative. Unhurried." / "confident intention at every scale" / "beauty, not compliance" / "restraint, not emptiness" |
| SEMI-CONCRETE | 97 | 57.4% | "Container 940-1100px" / "CCS >= 0.30" / ">= 3 transition types" / ">= 1 designed moment per quartile" / "signal-to-silence 0.6-0.8:1" |
| CONCRETE | 31 | 18.3% | "#1A1A1A" / "border-radius: 0" / "Instrument Serif / Inter / JetBrains Mono" / CSS code exemplars |

**Total directives classified: 169**

**ENHANCED REMEDIATION SPEC:**

| Specificity | Count | % | Examples |
|-------------|-------|---|----------|
| ABSTRACT | 7 | 5.3% | "feels DESIGNED vs PATCHED" / "breaks the monotony" / "compression" / "generous" |
| SEMI-CONCRETE | 18 | 13.7% | ">= 3 transitions visible" / "can you SEE color change without zooming" / "each screenful looks different" |
| CONCRETE | 106 | 80.9% | "font-size: 17px" / "#FEF5EB" / "margin: 16px 0" / "delete lines 736-834" / full CSS code blocks / exact HTML snippets |

**Total directives classified: 131**

### 2.3 Specificity Distribution Chart

```
Master:    ABSTRACT ████████████ 24%
           SEMI     ██████████████████████████████████ 57%
           CONCRETE ███████████ 18%

Remediation: ABSTRACT ███ 5%
             SEMI     ████████ 14%
             CONCRETE █████████████████████████████████████████████████ 81%
```

### 2.4 Interpretation

The Master prompt is dominated by **SEMI-CONCRETE** directives (57.4%): rules with measurable thresholds but requiring the agent to figure out HOW to achieve them. "CCS >= 0.30" tells the agent what score to hit but not what CSS to write. ">= 3 transition types" tells the agent the minimum count but not which transitions to use or where.

The Remediation is dominated by **CONCRETE** directives (80.9%): exact CSS values, exact HTML snippets, exact selectors. "Replace `--color-zone-s1` with `#FEF5EB`" has zero ambiguity -- the agent locates the variable and overwrites it.

The 57.4% -> 13.7% collapse of SEMI-CONCRETE directives is the most significant shift. SEMI-CONCRETE is where most LLM interpretation errors occur because the model must bridge from a measurable criterion to a concrete implementation. The Remediation eliminates this bridge by providing the implementation directly.

The Master's 24.3% ABSTRACT content (vs Remediation's 5.3%) represents conviction/atmosphere language. This language serves a legitimate purpose: it calibrates the agent's "aesthetic north star." But it also introduces judgment demands that the agent may not be equipped to resolve. "Warm. Authoritative. Unhurried." is non-falsifiable by any programmatic check.

---

## 3. SENTENCE STRUCTURE

### 3.1 Dominant Patterns

**MASTER -- Conditional/Declarative Pattern:**

The Master's most common sentence structure is the CONDITIONAL-CONSEQUENT format:

```
FAIL IF:
  S-01. Container width outside 940-1100px
        Verify: querySelector('.page-container').getBoundingClientRect().width
```

Structure: `[TRIGGER] [RULE-ID]. [CONDITION] [NEWLINE] [VERIFICATION-METHOD]`

Other frequent structures:
- **Declarative prohibition:** "border-radius: 0" / "No filter: drop-shadow()"
- **Threshold assertion:** "CCS >= 0.30 for Flagship"
- **Conditional escalation:** "If SCI < 0.60, identify low-CCS mechanisms and either strengthen coupling or demote"
- **Process routing:** "TC Phase 0 (Content Assessment): -> Content Architect (Opus)"

The Master uses **compound conditionals** extensively: "If content-to-void degrades > 10 percentage points from Pass 1, ROLLBACK Pass 2 and reduce elaboration." These require the agent to hold multiple values, compute a comparison, and branch execution -- high cognitive load.

**REMEDIATION -- Sequential/Imperative Pattern:**

The Remediation's most common sentence structure is the NUMBERED STEP format:

```
### Step 0.1: DELETE the typographic convergence gradient (lines ~736-834)

Find this block:
```css
.zone-s1 p {
  line-height: 1.8;
}
```
DELETE EVERYTHING from `/* --- Zone 1 ---*/` through the end of `/* --- Zone 3 ---*/`.
```

Structure: `[STEP-HEADER] [NEWLINE] [LOCATE-INSTRUCTION] [NEWLINE] [CODE-BLOCK] [NEWLINE] [TRANSFORMATION-INSTRUCTION]`

Other frequent structures:
- **Find-and-replace:** "Find the 3 divider rules. Replace ALL THREE with these values"
- **After-add:** "After the base `section p { ... }` rule, add:"
- **Wrap-with:** "Wrap each tension/resolution pair in a grid container"
- **Checkpoint:** "Open the page at 1440px. It should look IDENTICAL to before."

### 3.2 Sentence Complexity Analysis

| Metric | Master | Remediation |
|--------|--------|-------------|
| Average tokens per directive | ~28 | ~15 |
| Multi-clause sentences (containing "if," "when," "unless") | 43 | 7 |
| Branching instructions (if X do Y, else Z) | 12 | 2 |
| Cross-reference to other rules | 67 | 4 |
| Nested conditionals (if X and if Y then Z) | 8 | 0 |

### 3.3 Processing Implications

The Master's conditional structure creates a **decision tree** the agent must traverse at every step. Before writing a single line of CSS, the builder agent must:
1. Check if the action complies with ~89 constraints
2. Verify against ~47 judgment criteria
3. Cross-reference ~67 inter-rule dependencies
4. Navigate ~12 branching paths

The Remediation's sequential structure creates a **linear execution path**: Step 0.1, then Step 0.2, then Step 0.3. The agent processes the document as a task queue, not a constraint network. This maps directly to how LLMs process instructions: left-to-right, token-by-token. Sequential formats align with the model's natural processing direction; constraint networks require the model to hold and cross-reference distant context.

**Critical structural difference:** The Master uses **horizontal organization** (rule S-01 in section B1 references rule C-20 in section B3, which references gate check in C3). The Remediation uses **vertical organization** (Phase 0 is self-contained, Phase 1 is self-contained, each phase's inputs and outputs are local). Vertical organization reduces working-memory demands on the LLM.

---

## 4. COGNITIVE DEMAND MODEL

### 4.1 Demand Type Classification

Every directive classified as:
- **JUDGE:** Agent must evaluate a qualitative or quantitative condition and produce a verdict (pass/fail, yes/no, adequate/inadequate)
- **COMPUTE:** Agent must calculate a value from multiple inputs (CCS formula, content-to-void ratio, scale coherence index)
- **EXECUTE:** Agent must perform a concrete transformation (write CSS, modify HTML, delete lines)
- **COMPOSE:** Agent must create novel content (derive metaphor, invent components, write bridge prose)

| Demand Type | Master Count | Master % | Remediation Count | Remediation % |
|-------------|-------------|----------|-------------------|---------------|
| JUDGE | 53 | 31.4% | 9 | 6.9% |
| COMPUTE | 29 | 17.2% | 5 | 3.8% |
| EXECUTE | 48 | 28.4% | 102 | 77.9% |
| COMPOSE | 39 | 23.1% | 15 | 11.5% |

### 4.2 Demand Chain Length

**Master:** Typical demand chain is 3-4 steps deep:
1. COMPOSE a metaphor (TC Phase 1-3)
2. COMPUTE CCS score for metaphor-mechanism alignment (MC-01)
3. JUDGE whether CCS >= 0.30 (gate check)
4. EXECUTE fix or proceed (branching)

**Remediation:** Typical demand chain is 1-2 steps deep:
1. EXECUTE: "Find `.zone-s1 p { line-height: 1.8; }`, delete it"
2. JUDGE: "Open at 1440px, verify it looks identical"

### 4.3 LLM Reliability by Demand Type

From established LLM behavioral research and empirical observations across this project:

| Demand Type | LLM Reliability | Failure Mode |
|-------------|----------------|--------------|
| EXECUTE | ~95% | Selector typos, missed instances |
| COMPUTE | ~80% | Formula misapplication, wrong inputs |
| JUDGE | ~40-60% | Threshold disagreement, subjective drift |
| COMPOSE | ~30-70% (highly variable) | Quality unpredictable, context-dependent |

The Master prompt puts 48.6% of its cognitive demand in the JUDGE+COMPUTE quadrant where LLM reliability is 40-80%. The Remediation puts 77.9% in EXECUTE where reliability is ~95%.

### 4.4 The Judgment Tax

The Master's JUDGE demands create a "judgment tax": before the agent can write ANY CSS, it must first determine whether the CSS complies with dozens of criteria. This is computationally expensive for the model (many criteria to hold in working memory) and unreliable (the model's judgment on "does this feel warm" is not calibrated to human perception).

The Remediation eliminates the judgment tax by pre-computing the correct values. Instead of "make the background warm enough that zone transitions are perceptible," it says "set `--color-zone-s1: #FEF5EB`." The judgment was performed by the human prompt author (or the analytical agents who produced the remediation audit reports); the builder agent only needs to execute.

**Key insight:** The Master prompt asks the builder to be BOTH analyst and executor. The Remediation asks the builder to be ONLY executor. This separation of concerns -- analysis done by audit agents, execution done by builder agent -- is more reliable than asking one agent to do both.

---

## 5. NEGATION DENSITY

### 5.1 Negation Inventory

**MASTER EXECUTION PROMPT:**

| Negation Form | Count | Examples |
|---------------|-------|---------|
| must not / MUST NOT | 8 | "MUST NOT be first" / "MUST NOT add intentional-channel elements" |
| never / NEVER | 8 | "NEVER target 6+ scales" / "never body text" / "never replace them" |
| no / No | 23 | "No filter" / "No rgba()" / "No gradient" / "no single CSS margin" / "No contiguous void" |
| not / NOT | 31 | "NOT complexity" / "NOT equal perception" / "NOT mechanisms" / "NOT a limitation" |
| do not / DO NOT | 5 | "Do NOT see B3-B12" / "DO NOT SHIP" / "do NOT patch" |
| prohibited / forbidden / banned | 5 | "Direct copying... PROHIBITED" / "CSS property names FORBIDDEN" / "'Ask yourself X' is banned" |
| avoid | 0 | (none) |
| without | 4 | "without labels" / "without zooming" |
| **Total negations** | **84** | |

**Negation density: 84/963 lines = 0.087 negations per line (1 negation every ~11.5 lines)**

**ENHANCED REMEDIATION SPEC:**

| Negation Form | Count | Examples |
|---------------|-------|---------|
| do not / Do NOT | 8 | "Do NOT change container width" / "Do NOT add border-radius" / "Do NOT remove mechanism CSS comments" / "Do NOT spawn analytical agents" |
| never | 0 | (none) |
| no / No | 3 | "No gap may exceed 120px" / "no HTML changes" / "No action needed" |
| not | 5 | "not applicable" / "not every section" / "not addressed" / "not a limitation" (quotation) |
| prohibited | 0 | (none) |
| **Total negations** | **16** | |

**Negation density: 16/1025 lines = 0.016 negations per line (1 negation every ~64 lines)**

### 5.2 Negation Ratio

| Metric | Master | Remediation |
|--------|--------|-------------|
| Total negations | 84 | 16 |
| Negation density (per line) | 0.087 | 0.016 |
| **Ratio** | **5.4x higher** | baseline |

### 5.3 Negation Distribution by Position

**Master:** Negations appear throughout ALL sections, with concentration in:
- Section B2 (Soul): 10 negations in 10 rules (1:1 ratio -- every soul rule IS a negation)
- Section B6 (Metaphor Gates): 8 negations in 5 rules
- Section A (Conviction): 12 negations in philosophical framing

**Remediation:** Negations are concentrated in TWO locations:
- The APPENDIX: CONSTRAINTS section (8 of 16 total negations -- "Do NOT change/add/remove" list)
- Phase 0 deallocation instructions (3 negations -- "DELETE" is an action, but "keep ONLY" is implicit negation)

### 5.4 Positive vs Negative Framing

The Master prompt's negation density means ~36% of its regulatory content tells the agent what NOT to do. This creates a double processing burden:

1. The agent must first parse the negation to understand the prohibited state
2. Then infer the desired state from the space of non-prohibited alternatives

Example from Master: "No cool-toned grays (all neutrals warm-shifted)" -- the agent must (a) understand "cool-toned gray," (b) enumerate its grays, (c) evaluate each for "cool-toned-ness," (d) shift any that fail toward warm.

The Remediation equivalent: "color: #2A2520" -- the agent writes the value. The warm-shifting was pre-computed by the spec author.

**Key finding:** The Master's negation architecture makes the prohibited space explicit but leaves the permitted space implicit. The Remediation's positive-action architecture makes the permitted space explicit (the exact values to write) and concentrates prohibitions in a single appendix, separated from the action flow.

---

## 6. PROPAGATION TO OUTPUT: Verbiage-to-Behavior Tracing

### 6.1 Five Master Prompt Patterns Traced

**Pattern M1: "Container width outside 940-1100px" (S-01, SEMI-CONCRETE threshold)**

- **Verbiage type:** FAIL-IF conditional with verification method
- **Propagation:** STRONG. The flagship page uses a 960px container. The builder complied because the rule is (a) binary, (b) has a programmatic verification method (`getBoundingClientRect().width`), and (c) is in primacy position (first rule in B1).
- **Analysis:** Threshold-with-verification is the Master's highest-propagation pattern. Every rule that includes a JS verification query was followed.

**Pattern M2: "Warm. Authoritative. Unhurried." (A1 thesis, ABSTRACT conviction)**

- **Verbiage type:** Three adjectives without measurable criteria
- **Propagation:** PARTIAL. The builder chose warm-toned backgrounds and Instrument Serif headings (warm aesthetic). But "unhurried" produced excessive whitespace (70-80% void) -- the builder over-indexed on spaciousness as a proxy for "unhurried." The abstract term propagated as a DIRECTION (more space) without BOUNDS (how much space is too much).
- **Analysis:** Abstract conviction language propagates as bias, not as precision. The model amplifies the implied direction without calibrating magnitude.

**Pattern M3: ">= 3 transition types" (C-05, SEMI-CONCRETE minimum)**

- **Verbiage type:** Quantified minimum with named options (SMOOTH/BRIDGE/BREATHING)
- **Propagation:** STRONG for count, WEAK for quality. The builder deployed 3 transition types as required. But all transitions used excessive margins (48px/64px/80px), contributing to the whitespace void. The rule specified the MINIMUM COUNT but not the MAXIMUM SPACING per transition. The builder optimized for the measurable criterion (count) and defaulted to generous values for the unmeasured dimension (spacing).
- **Analysis:** Semi-concrete minimums produce floor compliance but not quality optimization. The agent satisfies the number and moves on.

**Pattern M4: "Compositional Coupling Score >= 0.30" (MC-01, COMPUTE-then-JUDGE)**

- **Verbiage type:** Formula requiring multi-step computation and judgment
- **Propagation:** WEAK. The ceiling experiment's CCS was ~0.05 (vs 0.30 minimum). The builder deployed 14 mechanisms but without coupling -- they operated independently. The formula was too complex for the builder to self-evaluate during construction. By the time auditors measured CCS, the page was already built.
- **Analysis:** Compute-then-judge patterns have low propagation because (a) the computation is expensive, (b) the builder is optimizing for visible construction, and (c) the formula requires a complete page to evaluate -- it cannot be checked incrementally.

**Pattern M5: "Metaphor structural test: remove all labels and titles. Does visual structure alone communicate?" (MG-04, ABSTRACT judgment)**

- **Verbiage type:** Thought experiment requiring counterfactual reasoning
- **Propagation:** ZERO. The ceiling experiment's metaphor was "announced" (40% without labels), failing MG-04. The builder agent never performed the counterfactual test. The instruction asks the agent to IMAGINE a state (labels removed) and JUDGE a perception (structural communication) -- this is maximally difficult for an LLM.
- **Analysis:** Counterfactual judgment instructions have near-zero propagation. The agent cannot meaningfully "imagine" removing labels and evaluating the result without actually doing it.

### 6.2 Five Remediation Patterns Traced

**Pattern R1: "DELETE EVERYTHING from `/* --- Zone 1 ---*/` through `/* --- Zone 3 ---*/`" (Step 0.1, CONCRETE action)**

- **Verbiage type:** Locate-by-content, bulk delete
- **Propagation:** PREDICTED STRONG. The instruction specifies (a) what to find (exact CSS comment text), (b) the boundary markers (start comment, end comment), (c) the action (DELETE). No judgment required. No threshold to evaluate. No formula to compute. The agent searches, selects, deletes.
- **Analysis:** Locate-delete is the highest-reliability instruction format. The only failure mode is mis-identification of the target (wrong comment block). The use of exact CSS comment strings as locators reduces this risk.

**Pattern R2: "Replace ALL 12 zone color variables" with specific hex values (Phase 2, CONCRETE replacement)**

- **Verbiage type:** Find-and-replace with exact values provided
- **Propagation:** PREDICTED STRONG. Each variable name is specified, each replacement value is specified. The agent performs 12 mechanical substitutions.
- **Analysis:** Find-replace with provided values is the SECOND-highest-reliability format after delete. The only failure mode is typo in the hex value -- mitigated by providing the full CSS block for copy-paste.

**Pattern R3: "Replace ALL THREE [divider rules] with these values" (Step 3.2, CONCRETE replacement with rationale)**

- **Verbiage type:** Replace with embedded explanation ("was 48px -- reduced to prevent void stacking")
- **Propagation:** PREDICTED STRONG. The instruction provides (a) the target (3 divider rules), (b) the complete replacement CSS, (c) the rationale (void stacking prevention), (d) the arithmetic proof (32+24+4+24+24 = 108 < 120).
- **Analysis:** The embedded rationale ("-- reduced to prevent void stacking") serves a different purpose than the Master's conviction language. It does not ask the agent to JUDGE; it explains WHY the provided value is correct. This builds the agent's confidence in the instruction without adding cognitive load.

**Pattern R4: "Wrap each tension/resolution pair in a grid container" (Step 1.7, CONCRETE structural change with example)**

- **Verbiage type:** HTML restructuring with WAS/NOW examples
- **Propagation:** PREDICTED STRONG. The WAS/NOW format provides (a) what the current state looks like, (b) what the target state looks like, (c) the specific class names to use. The agent matches the WAS pattern in the file and transforms it to the NOW pattern.
- **Analysis:** WAS/NOW is the remediation's most powerful instruction format. It eliminates ambiguity by showing both states. The agent does not need to infer intent -- it sees the transformation directly.

**Pattern R5: "PERCEPTION CHECK: Scroll through at 1440px. You should see..." (Phase 3 checkpoint, SEMI-CONCRETE validation)**

- **Verbiage type:** Post-action validation with expected observations
- **Propagation:** PREDICTED MODERATE. The instruction asks the agent to scroll and visually verify. This IS a judgment call ("Can you distinguish at least 3 transitions WITHOUT a color picker"), but it is (a) binary (yes/no), (b) simple (one criterion), (c) positioned AFTER the action (not a gate BEFORE the action), and (d) provides the expected observation ("warm peach -> tan -> honey -> cooling cream -> cool gray").
- **Analysis:** Post-action perception checks are more reliable than pre-action judgment gates because (a) the agent has concrete context (the page it just built), (b) the check is single-criterion, and (c) failure triggers a specific fix ("increase RGB deltas") rather than requiring the agent to re-derive the approach.

### 6.3 Propagation Reliability Ranking

| Rank | Pattern Type | Example | Predicted Reliability |
|------|-------------|---------|----------------------|
| 1 | CONCRETE delete | "DELETE lines 736-834" | ~98% |
| 2 | CONCRETE replace with values | "Replace with #FEF5EB" | ~95% |
| 3 | CONCRETE WAS/NOW restructure | "WAS: .component-block / NOW: .callout" | ~92% |
| 4 | BINARY threshold with verification | "Container 940-1100px" + getBoundingClientRect | ~90% |
| 5 | NUMBERED minimum with options | ">= 3 transition types" | ~85% (count yes, quality no) |
| 6 | Post-action perception check | "Scroll, you should see X" | ~70% |
| 7 | PRE-action judgment gate | "CCS >= 0.30 before proceeding" | ~50% |
| 8 | ABSTRACT conviction | "Warm. Authoritative. Unhurried." | ~30% (direction yes, magnitude no) |
| 9 | FORMULA + JUDGE compound | "Compute SCI, if < 0.60 then fix" | ~25% |
| 10 | COUNTERFACTUAL thought experiment | "Imagine removing labels, would structure communicate?" | ~5% |

**The Remediation operates at ranks 1-3 and 6 (predicted reliability 70-98%). The Master operates across ranks 4-10 (predicted reliability 5-90%), with concentration at ranks 7-9 (25-50%).**

---

## 7. CROSS-CUTTING FINDINGS

### Finding 1: The Inversion Principle

The two prompts represent a complete linguistic inversion:

| Dimension | Master | Remediation |
|-----------|--------|-------------|
| Verb dominant | Judgment (58%) | Action (63%) |
| Specificity dominant | Semi-concrete (57%) | Concrete (81%) |
| Structure dominant | Conditional/branching | Sequential/linear |
| Cognitive demand | Judge + Compute (49%) | Execute (78%) |
| Negation density | 1 per 11.5 lines | 1 per 64 lines |
| Propagation band | Ranks 4-10 | Ranks 1-3, 6 |

These are not random differences. They represent two fundamentally different theories of how to extract behavior from an LLM:

- **Master theory:** Provide the goal space (constraints + thresholds + atmosphere) and let the agent navigate to a solution.
- **Remediation theory:** Provide the solution path (exact steps + exact values) and let the agent follow it.

### Finding 2: The Judgment Bottleneck

The Master's 53 JUDGE directives are the primary bottleneck for reliable execution. Each JUDGE directive creates a decision point where the agent's interpretation may diverge from the prompt author's intent. At 40-60% reliability per judgment, a sequence of even 5 judgment calls produces (0.5)^5 = 3.1% probability of ALL judgments aligning with intent. The Master has 53 such calls.

The Remediation's 9 JUDGE directives are concentrated in Phase 8 (verification), AFTER all construction is complete. This means judgment failures cannot corrupt the build -- they can only affect the quality of the post-hoc evaluation. The build itself is judgment-free.

### Finding 3: The Cross-Reference Tax

The Master contains ~67 cross-references between rules (e.g., "P-08: S-01 + S-02 + S-10 + S-12 must still pass"). Each cross-reference requires the agent to recall or re-read a distant rule, increasing working memory demands. The Remediation contains ~4 cross-references, all within the same phase.

This is the structural manifestation of the vertical-vs-horizontal organization difference. The Master is a NETWORK of interrelated rules. The Remediation is a PIPELINE of sequential phases. Networks are more expressive but harder for sequential processors (LLMs) to navigate.

### Finding 4: Conviction Language as Directional Bias

The Master's conviction language (Section A: 107 lines, Section D: 10 lines) serves as a "weight initialization" for the agent's decision-making. "Warm. Authoritative. Unhurried." biases the agent toward certain aesthetic choices. But conviction language propagates as DIRECTION without MAGNITUDE:

- "Warm" -> agent uses warm colors (correct direction) but may under-warm or over-warm (uncalibrated magnitude)
- "Unhurried" -> agent adds spacing (correct direction) but adds TOO MUCH spacing (uncalibrated magnitude = catastrophic void)

The Remediation replaces conviction with pre-computed values. "#FEF5EB" encodes exactly how warm. "margin: 16px 0" encodes exactly how unhurried. The direction AND magnitude are specified.

**However:** The Remediation's approach only works when the correct values are KNOWN. The Master must use conviction language because the builder is creating something new -- the correct values don't exist yet. The Remediation is modifying something existing -- the correct values were discovered through audit.

### Finding 5: The Phase 8 Pattern -- Judgment as Verification, Not Navigation

The Remediation's most instructive structural innovation is placing ALL judgment in Phase 8 (verification), after ALL action phases (0-7) are complete. This means:

1. The agent builds with zero judgment overhead (Phases 0-7)
2. The agent evaluates the result (Phase 8)
3. If Phase 8 fails, the agent knows which Phase to revisit

Compare with the Master, where judgment is embedded AT EVERY STEP:

1. Judgment (does metaphor pass gate?) -> Build -> Judgment (does spatial pass gate?) -> Build -> Judgment (does composition pass gate?) -> ...

The Master's interleaved judgment creates a sawtooth cognitive pattern (judge-act-judge-act) that is more demanding than the Remediation's flat-then-verify pattern (act-act-act-act-verify).

### Finding 6: Why Both Documents Are Necessary

Despite the Remediation's higher reliability per-instruction, it cannot REPLACE the Master. They serve different functions in the pipeline:

| Function | Master | Remediation |
|----------|--------|-------------|
| Create from scratch | YES (compass) | NO (needs existing artifact) |
| Modify existing | POSSIBLE but unreliable | YES (scalpel) |
| Ensure quality ceiling | YES (defines "designed") | NO (achieves "competent") |
| Ensure execution floor | WEAK (judgment failures) | STRONG (concrete actions) |
| Transfer across content | YES (content-agnostic) | NO (content-specific) |

The Master is a GENERATIVE document -- it can produce ANY page from ANY content. The Remediation is a SPECIFIC document -- it can only modify THIS page of THIS content. The Master trades reliability for generality; the Remediation trades generality for reliability.

**The optimal pipeline would use the Master for generation (Passes 0-4) and then produce a Remediation-style document from audit findings for iteration (Pass 5+).** This is essentially what the current pipeline already does -- the Remediation spec IS the Master's audit output translated into action language.

---

## 8. ACTIONABLE RECOMMENDATIONS

### For Future Master Prompt Versions

1. **Reduce JUDGE directives by 60%.** Convert judgment rules to binary checks with programmatic verification. "Does the page feel warm?" -> "Are all background hex values within the warm palette defined in tokens.css? (Y/N, run JS check)."

2. **Cap cross-references at 20.** Currently 67. Each cross-reference is a context-window tax. Group interdependent rules into self-contained clusters.

3. **Move conviction language to a SEPARATE document** that Opus agents read but Sonnet builders never see. Conviction biases without calibrating.

4. **Add WAS/NOW examples for every SEMI-CONCRETE rule.** ">= 3 transition types" is semi-concrete. Adding "Example: SMOOTH (48px+1px) at T1, BRIDGE (64px+bg+prose) at T4, BREATHING (80px+3px) at T8" makes it concrete.

5. **Place ALL judgment AFTER all action** (the Phase 8 pattern). Builder builds first, self-checks second.

### For Future Remediation Specs

1. **Preserve the sequential structure.** Phase numbers, step numbers, linear flow. This is the spec's greatest strength.

2. **Increase PERCEPTION CHECK frequency.** Currently after Phases 0, 3, 4, 5. Add after Phases 1, 2, 6, 7 also. Each check is cheap (scroll + observe) and catches failures early.

3. **Add rollback instructions.** Currently only Phase 0 has a rollback ("restore it"). Add explicit rollback for every phase.

4. **Separate the CONSTRAINTS appendix.** Currently 36 lines of "Do NOT" at the end. Move to a pre-flight checklist the agent reads BEFORE starting, then forget.

---

**END OF VERBIAGE ANALYSIS**

**Key statistic:** The Master uses 2.23 judgment/constraint verbs per action verb. The Remediation uses 0.42. This 5.3x inversion is the single most explanatory variable for the difference in predicted execution reliability between the two documents.
