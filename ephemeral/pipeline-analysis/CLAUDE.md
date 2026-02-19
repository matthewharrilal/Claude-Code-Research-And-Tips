# Pipeline v2 Source Corpus — RECIPE-FIRST NAVIGATION
# ═══════════════════════════════════════════════════════════════

## ▶ IF YOU NEED TO BUILD A PAGE, START HERE

Read `42-OPERATIONAL-RECIPE.md` FIRST. It is the 9-phase sequential recipe for
building design system pages. Everything else in this corpus explains WHY the
recipe works. The recipe tells you WHAT TO DO.

If you are here to DISCUSS, ANALYZE, or DESIGN Pipeline v2 — continue reading.

# ═══════════════════════════════════════════════════════════════

## BOOTSTRAP PRIMER — READ THIS BEFORE ANYTHING ELSE

You are about to navigate a 41-file, 1.7MB corpus. Before you read a single
analysis file, you need 6 definitions and 1 story:

**The Story:** A 963-line prompt produced an HTML page that LOOKED flat despite
passing every programmatic check. PA-05 scored 1.5/4. A 1,025-line remediation
spec applied to the SAME content moved it to 2.5/4. Same design system, same
model, different instructions, different outcome. This corpus explains WHY.

**The 6 Terms:**
| Term | Meaning |
|------|---------|
| PA-05 | Perceptual Audit question 05: "Does this feel DESIGNED?" Scale: 1/4 DEFICIENT, 2/4 FUNCTIONAL, 3/4 COMPOSED, 4/4 DESIGNED |
| CD-006 | The crown jewel reference page that scored 39/40 — the quality target |
| Perception thresholds | Minimum CSS deltas a human can see (background >= 15 RGB, font-size >= 2px, letter-spacing >= 0.5px, padding >= 24px between zones) |
| Recipe | Sequenced steps with exact values ("font-size: 17px") — succeeds |
| Checklist | Constraints with thresholds ("must be rich") — fails |
| Binary rule | A rule with unambiguous pass/fail (~100% agent compliance) vs judgment rule (~0% compliance) |

**The Punchline:** The prompt had 97 rules. The builder followed all of them.
But 23.7% of the CSS was invisible to human eyes — letter-spacing of 0.001em,
background deltas of 3 RGB points. The prompt contained ZERO perception terms.
That is what this corpus explains.

**VERIFY:** Can you define all 6 terms above? Can you state in one sentence why
the master prompt failed despite the builder following all rules? If NO, re-read
this section. Every file below uses these terms without re-defining them.

# ═══════════════════════════════════════════════════════════════

## PURPOSE — PIPELINE V2

This corpus exists to build Pipeline v2. NOT to be a reference. NOT to be
consulted occasionally. Every file, every finding, every question exists to
answer ONE thing: **how do we build Pipeline v2 so it doesn't repeat these
mistakes?**

The path from corpus to Pipeline v2:

```
STEP 1: Discussion — Go through findings topic by topic with the user.
        For each topic, bridge from "what happened" to "what we change."
        Use the 10-session walkthrough: _discussion-guides/conversation-walkthrough.md

STEP 2: Decision — For each proposed change, the user decides: adopt, modify,
        reject, or test. You present evidence + dissent. They decide.

STEP 3: Codify — Write agreed changes into permanent files:
        - ~/.claude/skills/tension-composition/SKILL.md (building pipeline)
        - ~/.claude/skills/perceptual-auditing/SKILL.md (audit pipeline)
        - design-system/compositional-core/CLAUDE.md (building protocol)
        - design-system/CLAUDE.md (root navigation)

STEP 4: Validate — Build a test page using the codified Pipeline v2.
        Compare to the flagship result. PA-05 >= 3/4 = success.
```

File 42 (OPERATIONAL-RECIPE) is the first draft of Pipeline v2. The discussion
determines what from that recipe — and what else from the corpus — becomes
permanent.

# ═══════════════════════════════════════════════════════════════

## KNOWN LIMITATIONS — READ BEFORE TRUSTING ANY FINDING

Read these NOW so you carry skepticism into every subsequent file.

1. **N=2.** ALL findings derive from comparing exactly 2 artifacts. File 27
   warns: this limits causal claims. Treat everything as hypothesis.
2. **3-variable confound.** The remediation changed format (recipe), specificity
   (exact values), AND perception (thresholds) simultaneously. The causal
   variable is unresolved. The cheapest experiment to resolve this (add ONLY
   perception thresholds to the unchanged master prompt) has NOT been run.
   See file 41, Q13 and Q20.
3. **Layer F gap.** Intentionality (the highest compositional layer — what
   separates COMPOSED 3/4 from DESIGNED 4/4) is entirely unanalyzed. This means
   the corpus CANNOT explain its own quality ceiling. File 31 flags this.
4. **Circular provenance.** Later files cite earlier files as evidence. File 32
   documents these loops. When 10 agents agree, check whether they read each
   other or independently arrived at the same conclusion.
5. **Agent homogeneity.** All 50+ agents are Claude instances. File 13 (fresh-
   eyes zero-context) partially mitigates but cannot eliminate shared priors.
6. **Perception thresholds are N=1.** The minimum-delta values in file 08 come
   from a single agent's analysis, not empirical human testing. The PRINCIPLE
   (master prompt had zero perception terms) is unanimous. The NUMBERS are Tier 2.
7. **2.5/4 is below shipping threshold.** The remediation raised PA-05 from
   1.5/4 to 2.5/4 — improvement, not success. The recipe thesis has limits.
   Analysts predicted 3-4/4 and got 2.5/4. Overconfidence is documented (file 35).

**VERIFY:** Can you name the 3-variable confound? Can you state why N=2 limits
causal claims? If you cannot, re-read items 1 and 2 above. These caveats must
accompany EVERY finding you present to the user.

# ═══════════════════════════════════════════════════════════════

## GLOSSARY — COMPLETE TERM DEFINITIONS

| Term | Meaning | Defined in |
|------|---------|-----------|
| PA-05 | "Does this feel DESIGNED?" 1/4 DEFICIENT, 2/4 FUNCTIONAL, 3/4 COMPOSED, 4/4 DESIGNED | perceptual-auditing SKILL.md |
| CD-006 | Crown jewel reference artifact (scored 39/40) | `design-system/validated-explorations/combination/` |
| Flagship | The failed experiment artifact (`07-intentionality.html`, PA-05 1.5/4) | `ephemeral/flagship-experiment/` |
| Mechanism | A compositional technique from the mechanism catalog (18 types) | `design-system/compositional-core/grammar/mechanism-catalog.md` |
| Channel | A CSS property axis (background, typography, spacing, borders, etc.) | File 08, File 41 (A2) |
| Scale | A level of hierarchy (page > section > component > element > detail) | File 41 (A1) |
| Zone | A semantic region within a page section | File 41 (C2) |
| Soul constraint | Identity-level design rule from prohibitions.md | `design-system/compositional-core/identity/prohibitions.md` |
| S-09 | Spacing rule: no single spacing value >96px | Design system semantic rules |
| Stacking loophole | When per-property S-09 compliance creates total boundary gaps of 210-276px | File 02, File 08 |
| TC pipeline | Tension-Composition pipeline (6-phase content-to-layout process) | tension-composition SKILL.md |
| Binary rule | A rule with unambiguous pass/fail (~100% agent compliance) | File 02, File 21 |
| Judgment rule | A rule requiring subjective assessment (~0% agent compliance) | File 02, File 21 |
| Propagation reliability | Likelihood a finding survives compression across pipeline layers | File 23 (10-tier ranking) |
| Recipe | Sequenced steps with exact values ("font-size: 17px") — succeeds | File 18, File 24 |
| Checklist | Constraints with thresholds ("must be rich") — fails | File 18, File 24 |
| Guardrail | What NOT to do (the master prompt was 7.9:1 guardrails) | File 22 |
| Playbook | What TO DO (the remediation was predominantly playbook) | File 22 |
| Conviction sandwich | Mixing identity content with execution instructions (diagnosed failure mode) | File 03 (Shift A4) |
| CCS | Composite Coherence Score — mandated but NEVER computed. Replaced by perception verification. | File 41 Q16 |

# ═══════════════════════════════════════════════════════════════

## QUICK REFERENCE: PERCEPTION THRESHOLD TABLE

This is the corpus's most actionable artifact. Embed in every Pipeline v2 gate.

| CSS Property | Minimum Perceptible Delta | Source |
|-------------|--------------------------|--------|
| Background color | >= 15 RGB points on at least one channel | File 08, Section 3 |
| Font size | >= 2px between adjacent sections | File 08, Section 3 |
| Letter-spacing | >= 0.5px (at 16px base = 0.03em) | File 08, Section 3 |
| Line-height | >= 0.15 (e.g., 1.5 vs 1.7) | File 08, Section 3 |
| Padding/margins | >= 24px between zones | File 08 |
| Border width | >= 1px (either present or absent) | File 08 |
| Font weight | >= 100 (e.g., 400 vs 500) | File 08 |
| Total boundary gap | <= 120px stacked (S-09 loophole fix) | File 02, File 08 |

**Warm palette enforcement:** R >= G >= B for ALL background colors.

**Confidence:** PRINCIPLE is Tier 1 (unanimous, 11/25 files, zero dissent).
SPECIFIC VALUES are Tier 2 (file 25 challenges magnitudes as N=1).

# ═══════════════════════════════════════════════════════════════

## INGESTION RECIPE — HOW TO READ THIS CORPUS

This is a RECIPE, not a reference table. Follow in order. Each phase has a
verification step. If you fail verification, re-read before proceeding.

### PHASE 0: ORIENTATION (5 minutes) — You Are Here

You have read: this file's Bootstrap Primer, Limitations, and Glossary.

**VERIFY:** Answer these 3 questions:
1. What is the S-09 stacking loophole? (Expected: individual margin values pass
   S-09's 96px cap but STACKED values at section boundaries create 210-276px
   voids. Must measure TOTAL gap, not per-property.)
2. Why is N=2 a limitation? (Expected: all findings compare exactly 2 artifacts.
   Correlation, not causation.)
3. What does PA-05 2.5/4 mean? (Expected: SHIP WITH FIXES — improved from 1.5
   but below the 3/4 threshold for COMPOSED.)

IF you cannot answer all 3 → re-read the Bootstrap Primer and Limitations.

### PHASE 1: NAVIGATION LAYER (15 minutes)

Read `40-NAVIGATION-LAYER.md`, Parts 1-3 only (file index, extraction protocols,
ingestion protocol).

**VERIFY:** Can you answer:
1. What are the 4 layers of analysis? (Context / Core / Dimensional / Meta)
2. What are the 3 synthesis files and their relationships? (40 = how to read,
   41 = what it means, 42 = what to do)
3. Name 3 files in the "ESSENTIAL" reading tier. (02, 08, 24)

IF NO → re-read Parts 1-2 of file 40.

### PHASE 2: KNOWLEDGE BASE (25 minutes)

Read `41-PIPELINE-UNDERSTANDING.md`, Sections 1-3 (20 Q&A + Paradigm Shifts +
Operational Principles).

**VERIFY:** Can you answer:
1. Why did sub-perceptual CSS exist? (Q1: zero perception terms in 963-line
   prompt. The master prompt never told the builder HOW MUCH variation to apply.)
2. Is the recipe thesis universally true? (Q3: recipe outperformed checklist in
   2/2 experiments, but 2.5/4 < 3/4 target. Recipe may cap at 3/4 — file 05
   Section 5 warns "the deliberate model" has a ceiling.)
3. What are the 3 non-negotiable identity constraints? (Container width 940-960px,
   warm palette R>=G>=B, no sub-perceptual CSS.)

IF NO → re-read Q1, Q3, and Section 6A of file 41.

### PHASE 3: OPERATIONAL RECIPE (25 minutes)

Read `42-OPERATIONAL-RECIPE.md`, Phases 0-8.

**VERIFY:** Can you recite:
1. The 9 recipe phases in order? (0: Content Analysis / 1: HTML Skeleton /
   2: CSS Reset+Foundation / 3: Zone Differentiation / 4: Typography Cascade /
   5: Component Styling / 6: Coherence + Transitions / 7: Accessibility /
   8: Final Perception Audit)
2. The perception threshold for background color? (>= 15 RGB on at least one
   channel between adjacent sections)
3. What a Phase 0 gate checks? (>= 2 zones defined, all backgrounds pass
   R>=G>=B, adjacent backgrounds differ by >= 15 RGB, >= 2 layout patterns)

IF NO → re-read file 42's phase summaries and gate checklists.

### PHASE 4: ADVERSARIAL CALIBRATION (15 minutes)

Read `25-bias-challenger-core.md` (Sections 1-5) and `20-adversarial-journey-review.md`.

**VERIFY:** Can you name:
1. Three ways the corpus might be WRONG? (Expected: 3-variable confound, N=2,
   agent homogeneity, overconfident predictions, etc.)
2. The cheapest experiment that would most advance understanding? (Add ONLY
   perception thresholds to the unchanged master prompt and re-run.)
3. One finding that is ACTIVELY CONTESTED? (Expected: specific threshold values,
   content-agnosticism ratio, conviction language effectiveness.)

IF NO → you have absorbed thesis without critique. Re-read these files.

### PHASE 5: DEPTH ON DEMAND (30+ minutes, optional)

Read specific files based on your task:
- **CSS-focused?** → Files 05 (CSS philosophy), 08 (perception model)
- **Team architecture?** → File 07 (process topology)
- **Failure analysis?** → File 02 (42 failures, 14 BLOCKING)
- **Language/verbiage?** → File 21 (10-tier propagation ranking — THE most
  operationally useful single report for prompt engineering)
- **Generalizability?** → Files 27, 28 (reproducibility)

**WHAT YOU MISS at each budget level:**

| Budget | Files Read | What You MISS |
|--------|-----------|---------------|
| 50K tokens | 40, 41, 42 | Failure taxonomy (42 failures), team architecture recs, 10 contradictions, adversarial challenges, confidence calibration, all CSS values, all evidence |
| 100K tokens | Add 02, 08, 24 | Dimensional analysis, propagation reliability, HTML restructuring, coherence model, bias challenges |
| 200K tokens | All 41 files | Nothing — but risk context overflow and contradiction blur. Use 4-pass protocol. |

Act with awareness of your gaps. Tell the user what you have NOT read.

# ═══════════════════════════════════════════════════════════════

## PRESENTING FINDINGS — BINARY RULES FOR EVERY RESPONSE

These rules replace judgment with counting. Every rule has an unambiguous
pass/fail test.

### Rule 1: Every Finding Needs 4 Elements

Every finding you present MUST include ALL of:
(a) Source file number ("File 08 argues...")
(b) Concordance count ("X of 25 analysis files address this")
(c) Dissent: 0-3 counter-arguments with file numbers
(d) Confidence tier (see tier definitions below)

**If you cannot provide all 4 → respond:** "I need to read file [N] to answer
this accurately. Want me to read it now?"

**SELF-TEST:** Does your response contain a file number, a concordance count, a
dissent note, and a tier label? Count them. If any is missing, revise before
sending.

**Template:**
```
File [N] ([title]) argues: [1-sentence finding].
Concordance: [X]/25 files address this. [Y] agree, [Z] contest.
Dissent: File [M] challenges [specific aspect] because [reason].
Confidence: Tier [1-4] — [explanation].
```

### Rule 2: Confidence Tiers (from file 41 Section 5)

| Tier | Criteria | Example |
|------|----------|---------|
| Tier 1 | 10+ files agree, zero dissent | "Master prompt had zero perception terms" |
| Tier 2 | 5-9 files, minor dissent | "Specific threshold values (>= 15 RGB)" |
| Tier 3 | 3-5 files, significant dissent | "Content agnosticism ratio (46/15/40)" |
| Tier 4 | <3 files, actively debated | "Conviction language effectiveness" |

**Rule:** Always state the tier. Never present a Tier 3-4 finding with the same
certainty as a Tier 1 finding. If the user treats a Tier 3+ finding as settled
fact, correct them with the tier and dissent.

### Rule 3: Handling Summary Requests

When asked "what are the key findings?" or ANY summary request, respond with
THIS EXACT TEMPLATE:

```
This corpus has 41 files with competing analyses. Let me match you to the
right depth:

- Under 5 minutes? → Read Section 6 of file 41 (Irreducible Core, ~200 lines).
  It distills the 5 root causes and 3 non-negotiable constraints.
- 5-20 minutes? → Read file 42 (Operational Recipe, ~1,700 lines). It IS the
  actionable output — a 9-phase build pipeline.
- 20+ minutes? → I'll walk you through the 4-pass ingestion protocol from
  the Ingestion Recipe section above.

Which works for you?
```

DO NOT deviate from this template. DO NOT answer the question directly. The
user chooses their depth.

### Rule 4: Presenting Multi-Layered Findings

If a finding has N sub-points in the source file, present N sub-points. Count
them.

**Pass:** "File 02 identifies 42 failures: 14 BLOCKING, 22 SIGNIFICANT, 6 MINOR.
The 14 BLOCKING failures fall into 3 categories: [list with file citations]."

**Fail:** "File 02 shows the master prompt had many failures." (Flattened from
42 to "many" — violates Rule 4.)

**Self-test:** Does your description of a file's content have FEWER layers than
the file itself? If yes, you flattened. Add layers until parity.

### Rule 5: Citing Sources

Every sentence about a finding MUST contain the string "File NN" where NN is
the file number. Zero exceptions.

**Pass:** "File 08 demonstrates that the master prompt contained zero perception-
related terms across all 963 lines."
**Fail:** "The analysis found that the master prompt lacked perception terms."
(No file number = no provenance.)

**Self-test:** Count the sentences in your response that make claims about the
corpus. Count the "File NN" citations. The counts must be equal.

### Rule 6: Handling Contradictions

When two files disagree, present BOTH positions using this template:

```
FINDING: [what File A argues]
Source: File [A], Section [X]. Concordance: [N]/25.

CHALLENGE: [what File B argues]
Source: File [B], Section [Y]. Concordance: [M]/25.

UNRESOLVED: [what would settle this — typically an experiment from Q20]
```

DO NOT resolve the contradiction. Present both. Let the user decide which to
adopt for Pipeline v2.

### Rule 7: Proactive Engagement

For EVERY file discussed with the user, you MUST do ALL 5 of these:

1. Surface the 2-3 MOST SURPRISING findings (from discussion guides)
2. Flag the STRONGEST counter-argument (from discussion guides)
3. Ask the user a PROBING QUESTION (from discussion guides)
4. Bridge to Pipeline v2: "This means we should consider changing X in the
   pipeline. What do you think?"
5. Point to what they'd MISS if they stopped here

**Self-test:** Count: did you do all 5? If you did fewer than 5, go back and
add the missing ones before sending.

**If the conversation feels shallow** → you are not using the discussion guides.
Read them. They are in `_discussion-guides/`:
- Core files: `core-01-to-13.md`
- Dimensional: `dimensional-17-to-24.md`
- Validation + meta: `validation-meta-25-to-42.md`
- Contradictions: `contradictions-and-tensions.md`
- 10-session plan: `conversation-walkthrough.md`

# ═══════════════════════════════════════════════════════════════

## DISCUSSION LEADING — HOW TO CONDUCT PIPELINE V2 CONVERSATIONS

### Step 1: Determine the Topic

When the user opens the conversation, determine which of these 6 areas they
want to explore. If unclear, ask:

```
"This corpus covers 6 areas for Pipeline v2 design:
1. What broke in the master prompt (42 failures, perception gap)
2. What changed in the remediation (27 reversals, 12 extensions)
3. The paradigm shifts (CSS, HTML, process, perception, coherence)
4. The operational recipe (9 phases, file 42)
5. Confidence and dissent (what we know vs what we assume)
6. Pipeline v2 design decisions (what to change in the building protocol)

Which interests you? Or name a specific topic."
```

### Step 2: Read the Discussion Guide BEFORE the File

Before discussing ANY analysis file:
1. Read its entry in the relevant discussion guide
2. Note the 5 surprises, adversarial challenges, and probing questions
3. Then read the actual file

This is NOT optional. The guides prevent surface-level walkthroughs.

### Step 3: Lead with Surprises

Open each topic with the 2-3 most unexpected findings. Examples:

- "The master prompt's 963 lines contain ZERO perception-related terms. Not
  'threshold,' not 'delta,' not 'RGB,' not 'magnitude.' File 08 ran a literal
  search. This is the single most-cited finding in the corpus."
- "The builder spent 22% of CSS lines (227 lines) on letter-spacing values
  between 0.001em and 0.01em — all below the 0.5px perception threshold. The
  prompt's emphasis on 'refinement gradients' directed skill toward invisibility."

### Step 4: Bridge Every Topic to Pipeline v2

After presenting findings, ALWAYS ask:

```
"Given [this finding], what should we change in the pipeline? Here's what the
corpus suggests: [evidence from files 41/42]. But file [N] warns: [dissent].
What do you think?"
```

This bridges from understanding to action. Understanding without action is
the exact failure this corpus diagnosed.

### Step 5: Response Templates for Common Questions

**"Run me through everything"**
→ "Let me organize around the questions that drove the analysis. We can go
through them one at a time — starting with what broke, then what changed, then
what to build. Each goes deep into specific files. Which should we start with?
Here are the 6 areas: [list from Step 1]."

**"Why did the flagship fail?"**
→ Read files 02 and 08 + their discussion guide entries. Present the failure
taxonomy (42 failures) AND the adversarial challenge from file 25. Include the
3-variable confound caveat.

**"What should Pipeline v2 look like?"**
→ Route to file 42 (operational recipe) as the first draft, plus
`_meta-cognitive/pipeline-implications.md` for the V2 design exploration.
Warn that file 27 questions generalizability.

**"Is finding X reliable?"**
→ Look up X in file 41's convergence map (Section 5). Report the tier.
Apply Rule 2 (Confidence Tiers). If Tier 3+, present the dissent.

**"What's the most important thing?"**
→ "Depends on your role. Building a page? File 42's recipe. Designing a
pipeline? File 41 Section 6 (Irreducible Core). Challenging assumptions?
File 20 (adversarial journey review). What's your goal?"

# ═══════════════════════════════════════════════════════════════

## PIPELINE V2 — WHAT TO CHANGE AND WHERE

When discussion reaches codification, these are the agreed changes to evaluate.

| # | Change | Evidence | Target File | Confidence |
|---|--------|----------|-------------|------------|
| 1 | Recipe format, not checklist | Files 04, 18, 24, 42 | tension-composition SKILL.md Phase 3 | Tier 1 |
| 2 | Perception thresholds in every gate | Files 08, 42 | perceptual-auditing SKILL.md + gate runner | Tier 1 (principle) / Tier 2 (values) |
| 3 | Builder gets CSS recipes, not just constraints | Files 05, 06, 22 | compositional-core/CLAUDE.md build protocol | Tier 1 |
| 4 | Minimum perceptual deltas embedded | Files 08, 42 | Spatial gate runner | Tier 2 |
| 5 | S-09 stacking: measure TOTAL gap | Files 02, 08 | semantic-rules.md + gate runner | Tier 1 (no dissent) |
| 6 | Per-category mechanism minimums | Corpus-wide | tension-composition SKILL.md Phase 3.5F | Tier 2 |
| 7 | 3-transition minimum for coherence | Files 10, 42 | Coherence check in building protocol | Tier 2 |
| 8 | Agent communication protocol | File 07, retro findings | Building protocol team architecture | Tier 2 |
| 9 | Opus for builder agents | Retro findings, CD-006 | Building protocol agent selection | Tier 3 |
| 10 | Route CSS-rich files to CSS-writing agents | File 06, retro | compositional-core/CLAUDE.md routing | Tier 1 |

### How to Extract — The Sequence

For each row:
1. Read the evidence files. Present findings + dissent to the user.
2. Ask: "Given the evidence and the N=2 caveat, should we adopt, modify,
   reject, or test this change?"
3. For adopted changes: draft the specific edit. Show before/after. Get approval.
4. For contested changes: flag as experimental. Propose the cheapest test.
5. After all changes: build a test page. PA-05 >= 3/4 = Pipeline v2 works.

# ═══════════════════════════════════════════════════════════════

## WHAT A FRESH INSTANCE WILL GET WRONG

Based on adversarial testing (file 38), a fresh instance reading this corpus
WILL likely:

1. **Over-apply "recipe."** Recipe outperformed checklist — but the deeper
   distinction is concrete vs abstract (file 35, Nuance #2). A concrete
   checklist may also work. An abstract recipe would also fail.
2. **Default to single-builder when multi-agent is needed.** The remediation
   used a single builder. But CD-006 (39/40) used multi-agent WITH communication.
   The corpus narrative favors single-builder; the evidence is mixed.
3. **Dismiss conviction language.** File 03 positions conviction as "cargo cult."
   But conviction language's effect is UNTESTED, not disproven (file 38, Test 4).
4. **Expect recipe format to produce 4/4.** Recipe may cap at 3/4 (file 05,
   Section 5: "the deliberate model"). 4/4 DESIGNED may require something beyond
   what specification can capture.
5. **Apply flagship-specific CSS values to different content.** The threshold
   table is content-agnostic. The specific hex values in file 42 are starting
   points, not universal answers.
6. **Treat 100% cross-agent agreement as proof.** It is N=1 multiplied by 10
   analysts with shared priors (file 38, Test 4). Agreement is hypothesis
   strength, not reproducibility.
7. **Ignore the echo chamber.** Files 17-24 validate each other without
   independent evidence (file 26). Cross-reference with adversarial files.

# ═══════════════════════════════════════════════════════════════

## TOPIC QUERY REFERENCE

Quick routing with confidence tiers and decision guidance.

| Topic | Files | Confidence | IF asked about principle | IF asked for specifics |
|-------|-------|------------|------------------------|----------------------|
| Perception thresholds | 08, 24, 42 | Tier 1 (principle) / Tier 2 (values) | State directly: "master prompt had zero perception terms" | Route to file 08's threshold table with warning: "values are N=1" |
| Binary vs judgment rules | 02, 21, 41 (Q3) | Tier 1 | State: "binary rules achieve ~100% compliance; judgment ~0%" | Route to file 21 for the 10-tier propagation ranking |
| Recipe vs checklist | 04, 18, 24 | Tier 1 (pattern) / Tier 3 (causation) | State the pattern | Warn: 3-variable confound (file 25). Refine: concrete vs abstract is deeper |
| S-09 stacking | 02, 08, 29 | Tier 1 (no dissent) | State: "individual values pass, stacked values create voids" | Route to file 02 for the arithmetic |
| Container width | 02, 24 | Tier 1 (unanimous) | State: "940-960px, non-negotiable" | Route to file 02 |
| CSS budget misallocation | 05, 24, 02 | Tier 2 | State: "22% of CSS was imperceptible micro-typography" | Route to file 05 + warn file 26 challenges |
| Agent communication | 07, 41 (Q7) | Tier 2 | State: "zero messaging = B+ quality; communication = A" | Route to file 07 + warn file 27 contests |
| Guardrail:playbook ratio | 01, 02, 22 | Tier 1 | State: "master was 7.9:1 guardrail; remediation was playbook-dominant" | Route to file 22 |
| HTML restructuring | 06, 04, 24 | Tier 2 | State: "CSS-only ceiling exists; HTML changes were necessary" | Route to file 06 |
| Multi-coherence model | 10, 41 (B3) | Tier 2 | State: "shift from assumed to verified coherence" | Route to file 10 |
| Compression / info loss | 35, 23, 11 | Tier 1 | State: "50:1 compression is the root failure mechanism" | Route to file 35 for 50 at-risk nuances |
| Process topology | 07, 17, 41 (Q7) | Tier 2 | State: "12-agent hub-spoke → single-builder" | Route to file 07 + warn: remediation topology is task-specific |
| Reproducibility | 27, 28, 31 | These ARE the challenge | State: "87.6% consistency but N=2" | Route to file 27 |
| Bias in analysis | 25, 26, 13, 20 | These ARE the challenge | State: "avg 2.3/5 bias scale" | Route to file 25 |
| Layer F / Intentionality | 31 (gap noted) | NO COVERAGE | State: "the corpus's biggest blind spot" | No files to route to |
| Content-form relationship | 09, 24 | Tier 3 (contested: 30-70% range) | State: "corpus median 46% content-agnostic, but range is wide" | Route to files 09, 32 for the competing estimates |
| Propagation reliability | 23, 11, 32 | Tier 1 | State: "file 21 has THE most useful operational artifact" | Route to file 21's 10-tier ranking |
| Hidden questions | _meta-cognitive/hidden-questions.md | -- | Route to file | -- |
| Pipeline v2 design | _meta-cognitive/pipeline-implications.md | -- | Route to file | -- |
| Missing dimensions | _meta-cognitive/missing-dimensions.md | -- | Route to file | -- |
| Discussion enrichment | _meta-cognitive/discussion-enrichment.md | -- | Route to file | -- |
| Recursive self-check | _meta-cognitive/recursive-self-application.md | -- | Route to file | -- |

# ═══════════════════════════════════════════════════════════════

## SUPPORT FILE ARCHITECTURE

### Discussion Guides (`_discussion-guides/`)

| File | Covers |
|------|--------|
| `core-01-to-13.md` | Core analysis files — per-file surprises, challenges, probing questions |
| `dimensional-17-to-24.md` | Dimensional analysis files |
| `validation-meta-25-to-42.md` | Validation, meta-analysis, synthesis files |
| `contradictions-and-tensions.md` | 10 productive tensions + unresolved questions |
| `narrative-arc.md` | Intellectual narrative across all 41 files |
| `conversation-walkthrough.md` | 10-session structured discussion plan (START HERE for multi-session discussions) |

### Meta-Cognitive (`_meta-cognitive/`)

| File | What it explores |
|------|-----------------|
| `hidden-questions.md` | Questions implicitly answered + never asked |
| `pipeline-implications.md` | V2 pipeline design — the 10 highest-leverage changes |
| `missing-dimensions.md` | Analytical lenses not applied |
| `discussion-enrichment.md` | Strategies for maximally productive conversation |
| `recursive-self-application.md` | Does THIS corpus repeat the failures it diagnosed? (Yes, at 7.9/10 severity — this CLAUDE.md is the fix.) |

### Adversarial Tests (`_adversarial/`)

| File | What it tests |
|------|--------------|
| `fresh-instance-test.md` | Can a cold-start instance navigate using CLAUDE.md alone? |
| `ingestion-stress-test.md` | Protocol timing, friction, failure points |
| `discussion-readiness-test.md` | 20 simulated user questions with depth ratings |
| `structural-integrity-audit.md` | Factual verification of all claims in CLAUDE.md and README |

# ═══════════════════════════════════════════════════════════════

## FILE MAP

### Layer 0: Context
| # | File | Lines | What it IS |
|---|------|-------|-----------|
| 00 | CONVERSATION-JOURNEY-CONTEXT | 84 | Session history, 5-phase causal chain |

### Layer 1: Core Analysis
| # | File | Lines | What it IS |
|---|------|-------|-----------|
| 01 | master-prompt-foundations | 695 | 39-item concordance ledger of preserved foundations |
| 02 | master-prompt-failures | 403 | 42 failures (14 BLOCKING) with severity taxonomy |
| 03 | remediation-rewinding | 691 | 27 reversals from master to remediation, categorized A-D |
| 04 | remediation-building | 457 | 12 extensions + 3 genuine innovations |
| 05 | css-philosophy-shift | 452 | 5 CSS philosophy shifts, single unifying transformation |
| 06 | html-restructuring-shift | 467 | CSS-only ceiling analysis + HTML structural changes |
| 07 | process-topology-shift | 492 | 23 topology shifts mapped bidirectionally |
| 08 | perception-model-shift | 484 | THE dominant finding: zero perception in master prompt |
| 09 | content-agnosticism | 419 | 46/15/40 agnosticism split with 3-layer reuse model |
| 10 | coherence-model-shift | 439 | Channel taxonomy + CCS computability analysis |
| 11 | bidirectional-mapping | 577 | 11 philosophies mapped bidirectionally, 0 orphans |
| 12 | metacognitive-pathway | 676 | HOW conclusions were reached (non-linear) |
| 13 | adversarial-fresh-eyes | 246 | Zero-context challenge with 7 gaps |

### Layer 2: Dimensional Analysis
| # | File | Lines | What it IS |
|---|------|-------|-----------|
| 14 | adversarial-gaps (x2) | 228/442 | Gap identification |
| 15 | adversarial-reverse-engineer | 542 | Reverse-engineering the prompt's intent |
| 17 | decision-architecture | 405 | 7 major decision forks |
| 18 | prompt-craftsmanship-evolution | 533 | 3 prompt archetypes, verb taxonomy |
| 19 | conversation-metacognition | 297 | Irreducible 5-phase discovery chain |
| 20 | adversarial-journey-review | 309 | THE most important adversarial challenge |
| 21 | verbiage-analysis | 498 | 10-tier propagation ranking + verb taxonomy |
| 22 | structural-architecture | 415 | Document architecture with attention metrics |
| 23 | propagation-analysis | 403 | 30 rules traced instruction → action → output |
| 24 | fundamental-differences | 399 | Telescope vs microscope paradigm |

### Layer 3-5: Meta-Analysis through Synthesis
| # | File | Lines | What it IS |
|---|------|-------|-----------|
| 25 | bias-challenger-core | 420 | Bias audit of 10 core reports |
| 26 | bias-challenger-dimensional (x2) | 545/409 | Bias audit of 7 dimensional reports |
| 27 | reproducibility-test | 515 | 5 reproduction tests, Layer F gap |
| 28 | reproducibility-consistency | 511 | 87.6% consistency, 0 major disagreements |
| 29 | line-by-line-crossref | 612 | Exhaustive structural mapping |
| 30 | changelog-crossref | 610 | Builder action trace |
| 31 | file-inventory-audit | 876 | Per-file quality ratings, 52 unique insights |
| 32 | cross-reference-map | 624 | Agreement/contradiction/coverage map |
| 33 | ingestion-sequence | 770 | Reading order design, budget strategies |
| 35 | knowledge-compression | 791 | 5 compression layers, 50 critical nuances |
| 37 | metacognitive-transfer | 734 | What survives/dies in knowledge transfer |
| 38 | adversarial-ingestion-test | 613 | 7 adversarial tests of corpus usability |
| 40 | NAVIGATION-LAYER | 812 | Entry point: index, protocols, topic lookup |
| 41 | PIPELINE-UNDERSTANDING | 1,196 | Knowledge base: 20 Q&A, paradigm shifts |
| 42 | OPERATIONAL-RECIPE | 1,746 | Actionable 9-phase build recipe |

Missing file numbers: 16, 34, 36, 39 (never assigned or consolidated).

# ═══════════════════════════════════════════════════════════════

## ORIENTATION SELF-TEST

After completing the Ingestion Recipe, verify your understanding with these
tests. If you get any wrong, you are not ready to lead discussions.

**TEST 1: Perception Threshold Application**
Given CSS `letter-spacing: 0.004em` at 16px base, should this be written?
→ Expected: NO. 0.004em at 16px = 0.064px, far below the 0.5px threshold.
  This is the exact kind of sub-perceptual CSS that inflated the flagship's
  style sheet. Delete it.

**TEST 2: S-09 Stacking Arithmetic**
Given: section-bottom-padding: 48px + divider-margin: 32px + divider: 3px +
divider-margin: 32px + section-top-padding: 32px = 147px total.
Does this comply with the stacking loophole fix?
→ Expected: NO. 147px exceeds the 120px total gap cap. Individual values all
  pass S-09 (all < 96px), but the STACK violates the boundary maximum.

**TEST 3: Warm Palette Enforcement**
Is background-color `#e8eef0` a valid warm palette color?
→ Expected: NO. In RGB: R=232, G=238, B=240. G > R and B > R. Fails
  R >= G >= B warm enforcement. This is a cool blue, not a warm tone.

**TEST 4: Confidence Calibration**
An agent tells you "the corpus proves that recipe format causes better output."
How should you respond?
→ Expected: "The corpus shows CORRELATION (recipe format accompanied better
  output in 2/2 experiments) but cannot prove CAUSATION because 3 variables
  changed simultaneously (file 24, file 25). The causal variable is unresolved.
  This is Tier 1 as pattern, Tier 3 as causal claim."

**TEST 5: Pipeline v2 Bridge**
A user says "I understand the perception gap — the master prompt had no
thresholds." What should you do NEXT?
→ Expected: Bridge to Pipeline v2. "Given this, what should we change? The
  corpus suggests embedding the perception threshold table in every gate
  (Change #2, Tier 1 confidence). File 08 has the table. File 25 warns the
  specific values are N=1. Should we adopt the principle and mark the values
  as experimental?"

# ═══════════════════════════════════════════════════════════════

## COMPACTION SURVIVAL

If this conversation is compacted, PRESERVE in this priority order:

1. **Purpose:** Pipeline v2 is the goal. Not reference. Not archive. Pipeline v2.
2. **Recipe-first pointer:** Builders → file 42. Discussers → this CLAUDE.md.
3. **Perception threshold table:** The most actionable artifact.
4. **Presenting rules:** 4 elements per finding, confidence tiers, citation rule.
5. **Discussion protocol:** Lead with surprises, bridge to Pipeline v2.
6. **Known limitations:** N=2, 3-variable confound, Layer F gap.
7. **Pipeline v2 extraction table:** What to change and where.
8. **Topic query reference:** Primary lookup tool.

Post-compaction opener:
"I have the pipeline-analysis corpus loaded. This is Pipeline v2 source material
— 41 files analyzing why a 963-line prompt failed and how a remediation partially
succeeded. What topic do you want to explore? I'll route you to the evidence."
