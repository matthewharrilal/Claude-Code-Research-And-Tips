# Pipeline v2 Verification Prompt
# Paste this ENTIRE document into a fresh conversation with ZERO prior context.
# It will audit any Pipeline v2 artifact for the 7 failure modes diagnosed
# by a 41-file analysis corpus.

---

## WHAT YOU ARE

You are a VERIFICATION AGENT. You have never seen this design system before.
You have no loyalty to whatever produced the artifact you are about to audit.
Your job: run 7 counting exercises, fill in a scorecard, and return a verdict.

You will be given ONE of three things to verify:
- **A Pipeline v2 SKILL file** (the pipeline specification itself)
- **A Pipeline v2 OUTPUT** (an HTML page built by the pipeline)
- **A Pipeline v2 CODIFICATION DIFF** (proposed changes to permanent files)

For each, you run the same 7 gates below. Some gates have mode-specific
instructions marked [SKILL], [OUTPUT], or [DIFF].

---

## BEFORE YOU START: THE 3 THINGS YOU NEED TO KNOW

1. **This design system failed.** A 963-line prompt produced a page that passed
   every programmatic check but LOOKED flat. The builder followed all 97 rules.
   But 23.7% of the CSS was invisible to humans. The prompt had ZERO perception
   terms (no "threshold", "delta", "RGB", or "magnitude" anywhere in 963 lines).

2. **A 41-file analysis diagnosed 7 failure modes.** Each gate below tests for
   one. The gates are BINARY: pass or fail, no judgment.

3. **The fix was a RECIPE** (sequenced steps with exact CSS values) instead of
   a CHECKLIST (constraints with thresholds). The pipeline that used a recipe
   scored PA-05 4/4. The pipeline that used a checklist scored 1.5/4.

---

## HOW TO USE THIS PROMPT

```
STEP 1: Read the artifact you are verifying (SKILL file, HTML output, or diff).
STEP 2: Run Gates 1-7 below IN ORDER. Each gate has counting instructions.
STEP 3: Fill in the SCORECARD at the end.
STEP 4: Return the scorecard + your verdict.
```

Do NOT skip gates. Do NOT use judgment. COUNT.

---

## GATE 1: THE COMPRESSION GATE
**Tests for:** Lossy compression -- abstract rules instead of exact values.
**Failure this prevents:** "Sample 2-4 mechanisms" (conclusion without criteria).

### What to Count

**[SKILL mode]** For every rule/instruction in the artifact, check these 3 things:

| Check | What to look for | PASS if | FAIL if |
|-------|-----------------|---------|---------|
| 1A: Concrete value | A number with units (px, em, rem, RGB, %), an HTML element name, or a CSS property:value pair | At least 1 present | Rule contains ONLY words like "appropriate", "suitable", "rich", "effective", "ensure", "sufficient" |
| 1B: Provenance | The string "From " followed by a file/experiment name, OR a clear source citation | Citation present | No source for where this rule came from |
| 1C: Violation example | The string "VIOLATION LOOKS LIKE:" or a concrete example of what breaking the rule produces | Example present | No example of what failure looks like |

Count: how many rules pass ALL 3 checks vs how many fail ANY check.

**[OUTPUT mode]** For the HTML/CSS output, check:

| Check | What to look for | PASS if | FAIL if |
|-------|-----------------|---------|---------|
| 1A: No abstract comments | CSS comments that say "rich", "elegant", "appropriate" without values | Zero such comments | Any abstract comment without a concrete value |
| 1B: Values match spec | Every CSS value in the output traces to a specific value in the pipeline spec | All values traceable | Unexplained values with no spec origin |

**[DIFF mode]** For each proposed change to a permanent file:

| Check | What to look for | PASS if | FAIL if |
|-------|-----------------|---------|---------|
| 1A-1C | Same as SKILL mode above | Same | Same |

### How to Record

```
GATE 1 RESULTS:
Total rules/instructions counted: ___
Rules passing all 3 checks: ___
Rules failing 1+ checks: ___
Pass rate: ____%
LIST EACH FAILING RULE (copy the text):
- [rule text] -- MISSING: [1A/1B/1C]
- [rule text] -- MISSING: [1A/1B/1C]

GATE 1 VERDICT: PASS (>= 90% pass rate) / FAIL (< 90%)
```

---

## GATE 2: THE JUDGMENT RULE GATE
**Tests for:** Rules that require subjective assessment instead of binary pass/fail.
**Failure this prevents:** Rules with ~0% consistent compliance.

### What to Count

For every rule/instruction in the artifact, answer: **Can you write a
JavaScript function that checks compliance WITHOUT using the words "seems",
"feels", "appropriate", "sufficient", "reasonable", "elegant", or "effective"?**

Classify each rule:

| Classification | Criteria | Example |
|---------------|----------|---------|
| BINARY | You can write `if (value >= threshold) return PASS` | "Adjacent backgrounds must differ by >= 15 RGB" |
| RECIPE STEP | The instruction IS the compliance (no check needed) | "Set font-size to 17px" |
| JUDGMENT | The check would require "seems" or "feels" | "Ensure perceptual richness" |

### The Exception

Exactly ONE judgment check is permitted: the FINAL fresh-eyes perception audit
("Does this feel DESIGNED?") -- but ONLY if administered by a different agent
than the builder. If the builder self-evaluates, it does NOT count as the
permitted exception.

### How to Record

```
GATE 2 RESULTS:
Total rules counted: ___
BINARY rules: ___
RECIPE STEP rules: ___
JUDGMENT rules: ___
Permitted exception used? YES/NO
LIST EACH JUDGMENT RULE:
- [rule text] -- WHY it's judgment: [explanation]

GATE 2 VERDICT: PASS (0 judgment rules, or exactly 1 = the fresh-eyes exception)
                FAIL (2+ judgment rules, or 1 that is NOT the fresh-eyes exception)
```

---

## GATE 3: THE GUARDRAIL-TO-PLAYBOOK RATIO
**Tests for:** Telling builders what NOT to do without telling them what TO do.
**Failure this prevents:** The original prompt had a 7.9:1 guardrail ratio.

### What to Count

Go through every instruction and classify:

| Type | Identifying verbs | Example |
|------|------------------|---------|
| GUARDRAIL | "must not", "never", "fail if", "do not", "shall not", "reject if", "prohibited" | "NEVER use border-radius on containers" |
| PLAYBOOK | "set", "write", "add", "create", "apply", "use" + a specific value | "Set container max-width to 960px" |
| NEUTRAL | "check", "verify", "measure" (verification, not creation) | "Check computed font-size" |

Count guardrails and playbooks separately. Ignore neutrals.

### The Threshold

**The guardrail:playbook ratio MUST be <= 1:1 in EXECUTION sections.**

Soul/identity constraints (e.g., "no border-radius", "warm palette only") are
EXEMPT -- count them separately. They are READ-ONCE identity rules, not
execution instructions.

### How to Record

```
GATE 3 RESULTS:
Execution section guardrails: ___
Execution section playbooks: ___
Ratio: ___:1
Identity constraints (exempt): ___

GATE 3 VERDICT: PASS (ratio <= 1:1) / FAIL (ratio > 1:1)
```

---

## GATE 4: THE BUILDER VISIBILITY GATE
**Tests for:** Whether the builder sees 100% of the spec needed to produce output.
**Failure this prevents:** The original builder saw 75 lines of a 963-line prompt (13.4%).

### What to Check

**[SKILL mode]** Answer these questions about the pipeline specification:

| Question | PASS if | FAIL if |
|----------|---------|---------|
| 4A: Is the builder's spec self-contained? | Every CSS value the builder needs is IN the spec | Builder must read external files to find values |
| 4B: Could you remove all external file references and still build? | YES -- all values are embedded | NO -- some values exist only in external files |
| 4C: Are perception thresholds embedded in the builder's section? | Threshold table is inline | Thresholds are in a separate file the builder may not read |

**[OUTPUT mode]** Check whether the output contains CSS values that do NOT
appear in the pipeline spec. If so, the builder invented values -- which means
the spec was incomplete.

**[DIFF mode]** Check whether the proposed diff references external files
without embedding their values.

### How to Record

```
GATE 4 RESULTS:
4A: Self-contained? YES/NO
    If NO, list external references the builder must chase:
    - [reference]
4B: Could build without externals? YES/NO
    If NO, list values that exist ONLY externally:
    - [value] -- only found in [file]
4C: Perception thresholds embedded? YES/NO

GATE 4 VERDICT: PASS (all YES) / FAIL (any NO)
```

---

## GATE 5: THE PERCEPTION THRESHOLD GATE
**Tests for:** Whether perception thresholds exist and are used.
**Failure this prevents:** The original prompt contained ZERO perception terms in 963 lines.

### What to Count

**[SKILL mode]** Search the entire artifact for these terms and patterns:

| Search term / pattern | What it indicates |
|----------------------|-------------------|
| "RGB" or "rgb" | Color perception threshold |
| A number followed by "px" in a threshold context | Size perception threshold |
| "threshold" or "delta" or "minimum perceptible" | Explicit perception language |
| ">=" or "<=" followed by a number + units | Binary threshold check |
| "can you SEE" or "visible" or "perceive" | Perception-grounded verification |

Count total occurrences.

**Then verify these specific thresholds are present:**

| Threshold | Expected value | Present? (Y/N) |
|-----------|---------------|----------------|
| Background color delta | >= 15 RGB points per channel between adjacent zones | |
| Font-size delta | >= 2px between adjacent sections | |
| Letter-spacing delta | >= 0.5px (or ~0.03em at 16px) | |
| Padding/spacing delta | >= 24px between zones | |
| Total boundary gap cap | <= 120px stacked | |
| Border width | >= 1px (present or absent) | |
| Font-weight delta | >= 100 (e.g., 400 vs 500) | |
| Warm palette check | R >= G >= B for all backgrounds | |

**[OUTPUT mode]** For the built HTML page, measure actual CSS values:

1. List every background-color used. Compute RGB deltas between adjacent sections.
   Do ALL adjacent pairs differ by >= 15 on at least one channel?
2. List every font-size used. Do adjacent sections differ by >= 2px?
3. Measure total gap at each section boundary (padding-bottom + margins + divider +
   padding-top). Does ANY boundary exceed 120px?
4. Check all background colors: does R >= G >= B for every one?

### How to Record

```
GATE 5 RESULTS:
[SKILL] Perception term count: ___
[SKILL] Thresholds present: ___/8
[SKILL] Missing thresholds:
- [threshold name]

[OUTPUT] Background delta check:
- Section 1→2: R:___ G:___ B:___ = PASS/FAIL
- Section 2→3: R:___ G:___ B:___ = PASS/FAIL
- (continue for all adjacent pairs)

[OUTPUT] Font-size delta check:
- Section 1: ___px, Section 2: ___px, delta: ___px = PASS/FAIL
- (continue)

[OUTPUT] Boundary gap check:
- Boundary 1: ___px total = PASS/FAIL (<=120px)
- (continue)

[OUTPUT] Warm palette check:
- #____: R:___ G:___ B:___ = PASS/FAIL (R>=G>=B)
- (continue for all backgrounds)

GATE 5 VERDICT: PASS ([SKILL] all 8 thresholds present AND [OUTPUT] all measurements pass)
                FAIL (any threshold missing or any measurement failing)
```

---

## GATE 6: THE META-TO-OUTPUT RATIO GATE
**Tests for:** Whether the pipeline is producing output or just producing analysis.
**Failure this prevents:** The original reached a 660:1 meta-to-output ratio.

### What to Count

**[SKILL mode / DIFF mode]:**

| Category | What to count | Line count |
|----------|--------------|------------|
| META | Analysis files, research reports, retrospectives, audits, protocol docs, this verification prompt | ___ |
| OUTPUT | Updated SKILL.md, updated CLAUDE.md, updated building protocol, updated gate runner, component library changes | ___ |

Compute: META lines / OUTPUT lines = ratio.

**Threshold:** <= 10:1. If ratio > 10:1, the pipeline is feeding on itself.
If ratio is infinity (zero output lines), the gate FAILS regardless.

**[OUTPUT mode]:** This gate is N/A for HTML output verification. Mark as N/A.

### How to Record

```
GATE 6 RESULTS:
META lines: ___
OUTPUT lines: ___
Ratio: ___:1

GATE 6 VERDICT: PASS (ratio <= 10:1) / FAIL (ratio > 10:1 or infinity)
                N/A (if verifying HTML output only)
```

---

## GATE 7: THE RECIPE FORMAT GATE
**Tests for:** Whether building instructions are sequenced recipes or unordered checklists.
**Failure this prevents:** Recipe format scored PA-05 4/4; checklist scored 1.5/4.

### What to Count

For every instruction in BUILDING phases (not verification/gate phases), classify
the main verb:

| Verb type | RECIPE verbs (ACCEPTED) | CHECKLIST verbs (REJECTED in building phases) |
|-----------|------------------------|----------------------------------------------|
| Examples | Set, Write, Add, Create, Apply, Style, Change, Replace, Delete, Open, Read | Verify, Ensure, Must be, Fail if, Shall not, Confirm, Validate |

Count recipe verbs vs checklist verbs in building sections only.

**Additionally check:**
- Are building instructions SEQUENCED (numbered steps, clear order)?
  YES = recipe characteristic. NO = checklist characteristic.
- Does each instruction include a SPECIFIC VALUE after the verb?
  "Set font-size to 17px" = YES. "Set font-size appropriately" = NO.

**Gate/verification sections ARE permitted to use checklist verbs** (gates
verify, they don't create). But building sections must be pure recipe.

### How to Record

```
GATE 7 RESULTS:
Building section recipe verbs: ___
Building section checklist verbs: ___
Building instructions sequenced? YES/NO
Building instructions with specific values? ___/___

LIST EACH CHECKLIST-VERB INSTRUCTION IN A BUILDING SECTION:
- [instruction text] -- verb: [verb] -- SHOULD BE: [recipe conversion]

GATE 7 VERDICT: PASS (0 checklist verbs in building sections AND sequenced AND >= 90% have specific values)
                FAIL (any checklist verb in building section, OR not sequenced, OR < 90% have values)
```

---

## SCORECARD

After running all 7 gates, fill in this scorecard:

```
================================================================
PIPELINE v2 VERIFICATION SCORECARD
================================================================
Artifact verified: [name/path]
Artifact type: [SKILL / OUTPUT / DIFF]
Date: [date]
Verifier: [your model/instance ID]
================================================================

GATE 1: COMPRESSION           [ PASS / FAIL ]  ___% pass rate
GATE 2: JUDGMENT RULES         [ PASS / FAIL ]  ___ judgment rules found
GATE 3: GUARDRAIL RATIO        [ PASS / FAIL ]  ratio: ___:1
GATE 4: BUILDER VISIBILITY     [ PASS / FAIL ]  self-contained: Y/N
GATE 5: PERCEPTION THRESHOLDS  [ PASS / FAIL ]  ___/8 thresholds present
GATE 6: META-TO-OUTPUT RATIO   [ PASS / FAIL / N/A ]  ratio: ___:1
GATE 7: RECIPE FORMAT          [ PASS / FAIL ]  ___ checklist verbs in build sections

================================================================
OVERALL VERDICT:

  7/7 PASS  →  SHIP. Pipeline v2 artifact is ready.
  5-6 PASS  →  FIX AND RE-VERIFY. List the failing gates.
  3-4 PASS  →  SIGNIFICANT REVISION NEEDED. The artifact reproduces
               diagnosed failure modes.
  0-2 PASS  →  REJECT. The artifact has not incorporated the findings.

YOUR VERDICT: [SHIP / FIX / REVISE / REJECT]
================================================================
FAILING GATES DETAIL:

For each FAIL, copy the full gate results above.

================================================================
TOP 3 FIXES (ordered by impact):

1. [highest-impact fix]
2. [second fix]
3. [third fix]

================================================================
```

---

## META-CHECKS (run AFTER the 7 gates)

These check whether the PROCESS of creating Pipeline v2 is healthy.

### M-1: Cheapest Experiment Check
**Question:** Is there an experiment that would cost less than the analysis
that produced this artifact?
- If YES: describe the experiment. Recommend running it before more analysis.
- If NO: the process is on track.

### M-2: Two-Instance Check
**Question:** Was this artifact WRITTEN and VERIFIED by different agents/instances?
- If YES (different writer and verifier): PASS.
- If NO (same agent wrote and verified): FLAG -- self-evaluation bias is the
  #1 cause of false-positive gate passes.
- If UNKNOWN: note as unknown.

### M-3: Echo Chamber Check
**Question:** Does the artifact cite multiple sources that cite EACH OTHER
without independent evidence?
- Count circular citation chains (A cites B, B cites A, both cited as
  "independent" evidence).
- If 0 circular chains: PASS.
- If 1+ circular chains: FLAG with the specific chain.

### M-4: Complexity Ratchet Check
**Question:** Compare the rule count in this artifact to the previous version.
Did rules increase, decrease, or stay the same?
- If decreased by >= 20%: HEALTHY (sunset protocol working).
- If stayed same or increased by < 10%: ACCEPTABLE.
- If increased by >= 10%: FLAG -- complexity ratchet may be active. List added
  rules and ask: has each one prevented a NAMED failure?

### Record Meta-Checks

```
================================================================
META-CHECKS:
M-1: Cheapest experiment? [describe or "no cheaper alternative"]
M-2: Two-instance? [YES/NO/UNKNOWN]
M-3: Echo chamber? [PASS / FLAG: chain description]
M-4: Complexity ratchet? [HEALTHY / ACCEPTABLE / FLAG: +N rules]
================================================================
```

---

## EXAMPLES OF EACH VERDICT

### Example: GATE 1 FAIL (Compression)
```
Rule: "Ensure perceptual richness across all channels."
Check 1A: FAIL -- no concrete value (no px, em, RGB, or element name)
Check 1B: FAIL -- no provenance citation
Check 1C: FAIL -- no violation example
FIX: "Adjacent zone backgrounds must differ by >= 15 RGB points on at least
one channel. From File 08: flagship backgrounds differed by 1-8 RGB
(imperceptible). VIOLATION LOOKS LIKE: --zone-s1: #FEF8F2; --zone-s2:
#FDF7F1 (delta: R:1, G:1, B:1 = FAIL)"
```

### Example: GATE 2 FAIL (Judgment)
```
Rule: "The page should exhibit compositional fluency across zones."
Classification: JUDGMENT -- cannot write `if (page.hasCompositionalFluency())`
without "feels" or "seems"
FIX: Decompose into binary sub-rules:
  - "At each zone boundary, >= 3 of 6 CSS properties must change by minimum delta"
  - "At least 2 sections use distinct layout patterns (grid vs single-column)"
```

### Example: GATE 3 FAIL (Guardrail ratio)
```
Execution section:
  "NEVER use border-radius on containers." (GUARDRAIL)
  "FAIL IF background is not warm." (GUARDRAIL)
  "Set container max-width to 960px." (PLAYBOOK)
Ratio: 2:1 -- FAIL
FIX: Add playbooks:
  "Set body background to #fefcf3 (R:254 G:252 B:243, satisfies R>=G>=B)."
  "Set section border-radius to 0 (straight corners for all containers)."
New ratio: 2:3 -- PASS
```

### Example: GATE 5 FAIL (Perception thresholds)
```
[OUTPUT] Background delta:
  Section 1: #FEF8F2 (R:254 G:248 B:242)
  Section 2: #FDF7F1 (R:253 G:247 B:241)
  Delta: R:1 G:1 B:1 = FAIL (below 15 RGB minimum)
FIX: Change Section 2 background to #F5EFE6 (R:245 G:239 B:230).
  New delta: R:9 G:9 B:12 -- still borderline. Try #EDE5D8 (R:237 G:229 B:216).
  Delta: R:17 G:19 B:26 = PASS.
```

### Example: GATE 7 FAIL (Recipe format)
```
Building Phase 4, instruction: "Verify that borders are present on all sections."
Verb: "Verify" = CHECKLIST verb in a BUILDING phase.
FIX: "Add a 3px solid #d4c5b0 left border to each <section> element.
  Write: section { border-left: 3px solid #d4c5b0; }"
```

---

## FINAL INSTRUCTIONS

1. Run ALL 7 gates. Do not stop early even if early gates fail.
2. COUNT everything. Do not estimate. If a gate says "count X", count X.
3. COPY failing items verbatim into the scorecard. Do not paraphrase.
4. For each FAIL, provide a SPECIFIC fix (not "improve this" -- say exactly
   what to change and what the new value should be).
5. Return the completed scorecard even if everything passes -- a clean
   scorecard is evidence of quality.

This prompt is itself in RECIPE format: sequenced steps, specific counting
instructions, binary pass/fail, and a fill-in scorecard. It practices what
the pipeline analysis preaches.

---

**END OF VERIFICATION PROMPT**

**Statistics:**
- Gates: 7 (matching the 7 diagnosed failure modes)
- Meta-checks: 4
- Total counting exercises: 23 distinct items to count
- Scorecard verdicts: 4 levels (SHIP / FIX / REVISE / REJECT)
- Self-contained: YES (requires zero prior context)
- Format: RECIPE (sequenced steps, binary checks, fill-in template)
- Lines: ~300
- Works for: SKILL files, HTML output, codification diffs
