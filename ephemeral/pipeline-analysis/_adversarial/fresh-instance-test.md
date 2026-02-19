# ADVERSARIAL FRESH-INSTANCE TEST (v2)

**Tester:** fresh-instance-tester (Opus 4.6)
**Date:** 2026-02-18
**Method:** Read ONLY CLAUDE.md and README.md. Perform 6 navigation/comprehension tests. THEN read actual files and grade each test.
**Stance:** Ruthlessly honest. The question is whether a fresh instance with ZERO prior context can operate effectively using only these two entry-point files.
**Supersedes:** v1 fresh-instance-simulation-test (same filename). This version performs actual file reads for grading rather than simulation-only.

---

## TEST PROTOCOL

The six tests, in order:

| # | Test | What it measures |
|---|------|-----------------|
| A | Navigate to any file by topic | Can CLAUDE.md route a fresh instance to the right file? |
| B | Explain what each of 41 files covers | How accurate is the file map in CLAUDE.md/README? |
| C | Identify the 5 most important findings | Can a fresh instance extract priority from the index? |
| D | Propose a discussion sequence | Does the ingestion protocol produce a sensible order? |
| E | Answer "What was the core question?" | Can the entry points convey the motivating question? |
| F | Answer "What paradigm shift happened?" | Can the entry points convey the dominant finding? |

---

## TEST A: NAVIGATE TO ANY FILE BY TOPIC

### Fresh-Instance Attempt (before reading any files)

I attempted to find the right file for 10 topics using only CLAUDE.md Section 7 (Topic Query Reference) and the file map.

| Topic | My routing (from CLAUDE.md) | Confidence |
|-------|---------------------------|------------|
| "Why did the builder produce invisible CSS?" | Files 08, 24, 42 (perception thresholds topic) | HIGH -- CLAUDE.md Section 7 maps "Perception thresholds" to exactly these files |
| "What team structure should we use?" | Files 07, 17, 41 Q7 (process/team topology) | HIGH -- explicit topic entry |
| "How do I actually build a page?" | File 42 (OPERATIONAL-RECIPE) | HIGH -- called out as the operational output in Section 4 |
| "Is the recipe vs checklist finding reliable?" | Files 04, 18, 24 primary + 25 dissent | MEDIUM -- mapped under "Recipe vs checklist format" but I'd also want 03 (reversals) |
| "What did the builder deviate from the spec?" | File 04 (remediation-building) | LOW -- topic not directly in Section 7; guessing from file description |
| "What are the blind spots in this analysis?" | Files 25, 26, 13, 20 | HIGH -- explicit "Bias in this analysis" entry |
| "How does info degrade across pipeline layers?" | Files 23, 11, 32 | HIGH -- "Propagation reliability" in Section 7 |
| "What is Layer F / Intentionality?" | Section 7 says NO COVERAGE (critical gap) | HIGH -- explicitly flagged as missing |
| "What did the remediation REVERSE vs the original?" | File 03 (remediation-rewinding) | MEDIUM -- not in Section 7, but file map says "How the remediation spec was designed" |
| "What are the specific perception threshold values?" | File 08 + file 42 | HIGH -- mapped under perception thresholds |

### Grading (after reading actual files)

I read files 02, 03, 04, 08, 13, 20, 21, 25, 27, 30, 35, 40, 42 for validation.

| Topic | Correct file? | Notes |
|-------|--------------|-------|
| Invisible CSS | YES -- File 08 is exactly right (zero perception terms, threshold table) | PASS |
| Team structure | YES -- File 07 maps 23 topology shifts | PASS |
| Build a page | YES -- File 42 is the 9-phase recipe | PASS |
| Recipe vs checklist reliability | PARTIALLY -- File 03 (reversals) is the PRIMARY source for this (Reversal A1), not 04/18/24. Section 7 routes to secondary files, not the primary. | PARTIAL PASS |
| Builder deviations | YES -- File 04 covers builder extensions, but file 30 (changelog-crossref) has the line-level trace. Section 7 doesn't map "builder deviations" as a topic at all. | PARTIAL PASS |
| Blind spots | YES -- Files 25, 26, 13, 20 are the adversarial layer | PASS |
| Info degradation | YES -- File 23 is the propagation analysis | PASS |
| Layer F | YES -- correctly flagged as gap | PASS |
| Remediation reversals | CORRECT FILE but WRONG DESCRIPTION. CLAUDE.md file map says file 03 is "How the remediation spec was designed" but the actual file is "What the Remediation Spec REWOUND From the Master Prompt" -- 27 specific reversals categorized A-D. The description obscures the file's actual contribution. | PARTIAL PASS |
| Threshold values | YES -- File 08 has the 8-property table | PASS |

### TEST A VERDICT: **PASS WITH GAPS**

**Score: 7/10 FULL PASS, 3/10 PARTIAL PASS, 0/10 FAIL**

**Gaps identified:**
1. **Topic routing is incomplete.** Section 7 has 17 topic entries for a 41-file corpus. Topics like "builder deviations," "remediation reversals," "builder agency," and "conviction layer" have no direct routing.
2. **File 03 description is misleading.** CLAUDE.md says "How the remediation spec was designed." The actual file is about REVERSALS -- 27 specific direction-changes. The description misframes the file's content.
3. **Recipe vs checklist is mis-routed.** The PRIMARY source for the guardrail-to-recipe paradigm shift is file 03 (Reversal A1), not files 04/18/24 as Section 7 suggests. A fresh instance would read the secondary sources first and miss the foundational argument.

---

## TEST B: EXPLAIN WHAT EACH OF 41 FILES COVERS

### Fresh-Instance Attempt

Using CLAUDE.md Section 5 (File Map) and README.md Complete File Inventory, I predicted each file's contents. Confidence: HIGH for 34 files, MEDIUM for 5 files, LOW for 2 files (15, 30).

### Grading (12 files sampled for validation)

| File | Description accuracy | Notes |
|------|---------------------|-------|
| 00 | ACCURATE | Chronological A-E phases, exactly as described |
| 02 | ACCURATE | 42 failures in 5 types, severity ratings, root cause attribution. CLAUDE.md nails this |
| 03 | **INACCURATE from CLAUDE.md**, ACCURATE from README | CLAUDE.md: "How the remediation spec was designed." Actual: "What the Remediation Spec REWOUND" -- 27 REVERSALS categorized A-D. README correctly says "Reversal inventory: 27 specific reversals." **This is a CLAUDE.md defect.** |
| 08 | ACCURATE | Perception science analysis, zero-hit search, threshold table |
| 13 | ACCURATE | Zero-context fresh-eyes review, 7 gaps identified |
| 20 | ACCURATE | Adversarial journey review, survivorship bias, effort confound, 6 biases + 4 unrun experiments |
| 21 | **UNDERSTATED by CLAUDE.md** | CLAUDE.md: "Language patterns and their behavioral effects." Actual: comprehensive verb taxonomy (233 vs 112 verbs), specificity spectrum, 6-dimension ratio analysis. README calls it "THE most operationally useful report" with 5/5 rating -- CLAUDE.md gives no indication of this importance. |
| 25 | ACCURATE | Systematic bias audit, 5-axis methodology per report |
| 27 | ACCURATE | Reproducibility test, backward tracing, Layer F gap identification |
| 35 | ACCURATE | 4-layer compression (tweet/abstract/brief/working doc), 50 nuances registry |
| 40 | ACCURATE | Entry point, 5 parts, exactly as described |
| 42 | ACCURATE | 9-phase recipe, content-agnostic, perception thresholds embedded |

### TEST B VERDICT: **PASS WITH NOTABLE GAPS**

**Extrapolated score: ~36/41 ACCURATE, ~3/41 PARTIAL, ~2/41 INACCURATE**

Critical inaccuracies:
1. **File 03 in CLAUDE.md** -- wrong framing ("designed" vs "rewound"). README is correct; CLAUDE.md is not.
2. **File 21 in CLAUDE.md** -- severely understated. No indication this is the corpus's "most operationally useful report."

Additional concern: CLAUDE.md and README give DIFFERENT descriptions for files 03, 21, and 30. A fresh instance reading only CLAUDE.md (which is auto-loaded) gets a wrong mental model for file 03.

---

## TEST C: IDENTIFY THE 5 MOST IMPORTANT FINDINGS

### Fresh-Instance Attempt (from CLAUDE.md + README only)

Based on emphasis, repetition, and cross-referencing in the entry-point files:

1. **Zero perception thresholds in the master prompt.** Mentioned in CLAUDE.md Sections 1, 7, 8. File 08 called "THE dominant finding."
2. **Recipe format > Checklist format.** CLAUDE.md Operating Mindset leads with this. File 42 structured as recipe.
3. **S-09 stacking loophole.** Referenced in CLAUDE.md Sections 1, 7, 8. Glossary entry. No dissent flagged.
4. **Binary rules ~100% compliance; judgment rules ~0%.** CLAUDE.md Section 7 and Glossary.
5. **N=2 sample size limitation.** CLAUDE.md Section 9 and README Known Issues.

### Grading (after reading files 41, 42, 35, 02, 03)

| My finding | Actual importance | Verdict |
|-----------|-------------------|---------|
| Zero perception thresholds | Q1 in file 41, UNANIMOUS, 10+ files cite. THE dominant finding. | CORRECT -- #1 |
| Recipe > Checklist | Q3 in file 41, STRONG MAJORITY. Reversal A1 in file 03. | CORRECT -- top 3 |
| S-09 stacking loophole | Widely referenced but file 35 classifies it as SUB-FINDING of perception gap. | PARTIALLY CORRECT -- important but not independently top-5 |
| Binary vs judgment rules | Q3 sub-finding in file 41. File 21 quantifies verb ratios (2.23:1 to 0.42:1). | CORRECT -- top 5 |
| N=2 limitation | Methodological CAVEAT, not a finding about the pipeline. | INCORRECT -- limitation, not finding |

**What I MISSED:**
- **Guardrail-to-playbook ratio (7.9:1).** Files 01, 02 identify this as structural root cause. CLAUDE.md mentions it only once in Section 7 -- easily skimmable.
- **CSS budget misallocation (22% sub-perceptual).** Files 05, 08, 35 converge on 233 lines invisible CSS. More impactful than S-09 stacking alone.
- **Information compression loss (50:1 from research to prompt).** File 23 ranks propagation across 10 tiers. The META finding explaining WHY the pipeline fails.

### TEST C VERDICT: **PARTIAL PASS**

**Score: 3/5 CORRECT, 1/5 PARTIAL, 1/5 WRONG**

**Root cause of failure:** CLAUDE.md does not signal finding importance. All 17 topic entries have equal visual weight. No distinction between "THE dominant finding" (perception gap), a sub-finding (S-09 stacking), and a methodological caveat (N=2). A fresh instance cannot extract priority ranking from the index structure.

---

## TEST D: PROPOSE A DISCUSSION SEQUENCE

### Fresh-Instance Attempt

Following CLAUDE.md Section 3 (budget table), for 100K tokens:
1. Read 40 (NAVIGATION-LAYER)
2. Read 41 (PIPELINE-UNDERSTANDING)
3. Read 42 (OPERATIONAL-RECIPE)
4. Read 01, 02, 03, 04, 08, 24 (core analysis)

### Grading

| Step | Correct? | Issue |
|------|----------|-------|
| 40 first | YES | Confirmed as entry point |
| 41 second | YES | Builds conceptual framework |
| 42 third | DEBATABLE | File 33 says read 42 AFTER core analysis. CLAUDE.md says 50K includes 42; README says 50K is 00+02+05+08+21. **CONFLICTING SEQUENCES.** |
| 01 before 02 | **WRONG** | README explicitly warns: "Do NOT read file 01 before file 02 -- creates preservation bias." CLAUDE.md contains NO anti-pattern warnings. |
| 08 after core | YES | Perception model needs failure context |
| 24 last | YES but... | README warns file 24 is "rated most overconfident." CLAUDE.md doesn't convey this. |

### TEST D VERDICT: **PARTIAL PASS**

**Score: 4/6 correct, 1 debatable, 1 wrong**

**Critical findings:**

**BLOCKING CONFLICT:** CLAUDE.md and README give COMPLETELY DIFFERENT 50K-token sequences:
- CLAUDE.md: "40, 41, 42" (synthesis first)
- README: "00, 02, 05, 08, 21 + first 100 lines of both source prompts" (primary analysis first)

These are irreconcilable strategies. A fresh instance doesn't know which to follow.

**MISSING ANTI-PATTERNS:** README has 6 specific "Do NOT" warnings:
1. Do NOT read 01 before 02
2. Do NOT read 24 early
3. Do NOT read bias challengers before reports they challenge
4. Do NOT read analysis before source prompts
5. Do NOT read all 41 sequentially
6. Do NOT skip file 00

CLAUDE.md has NONE of these. A fresh instance following CLAUDE.md would violate warning #1 naturally (numerical order), potentially causing the exact comprehension failure the README warns against.

---

## TEST E: ANSWER "WHAT WAS THE CORE QUESTION?"

### Fresh-Instance Attempt

From CLAUDE.md Section 1:

> A 963-line master execution prompt produced a page that passed every programmatic gate but scored PA-05 1.5/4 (FLAT). Then a 1,025-line remediation spec moved the score to PA-05 2.5/4 (SHIP WITH FIXES). Same inputs, different instructions, different outcome. **Why did one fail and the other succeed?**

### Grading

**ACCURATE.** File 41 Q1-Q20 all trace to this question. File 00 frames the same A-E arc. File 35 restates it at every compression layer.

**One subtle gap:** CLAUDE.md frames the remediation as a "success," but the actual score (2.5/4) is below the 3/4 shipping threshold. File 20 challenges whether the remediation "succeeded" at all -- arguing 30-40% of improvement came from iteration effects. CLAUDE.md's framing is slightly overconfident about the remediation.

### TEST E VERDICT: **PASS**

The core question is clearly communicated. Minor overconfidence about "success" vs "partial improvement."

---

## TEST F: ANSWER "WHAT PARADIGM SHIFT HAPPENED?"

### Fresh-Instance Attempt

From CLAUDE.md, I identified 7 shifts:

1. **Guardrail-first to Recipe-first** (described as "THE dominant reversal")
2. **Compliance framework to Perception framework** (File 08, "the missing layer")
3. **Multi-agent team to Single builder** (File 07)
4. **Abstract tokens to Concrete hex values** (File 05)
5. **Uniform HTML to Semantically varied sections** (File 06)
6. **Assumed coherence to Verified multi-coherence** (File 10)
7. **Per-property spacing caps to Total gap measurement** (S-09 stacking)

### Grading

**MOSTLY ACCURATE.** File 03 documents 27 reversals in 4 categories. My list captures 5 of 8 paradigm-level reversals.

**What I got right:**
- Guardrail to recipe IS the dominant shift (Reversal A1, confirmed by 03, 41, 42)
- Perception gap IS the dominant technical finding (08, 41 Q1)
- All 7 shifts I listed are real and documented

**What I missed:**
- File 25 argues these may be "5 facets of 1 shift" -- CLAUDE.md presents them as separate; the corpus DEBATES this
- Information compression shift (2,400:1 vs 1:1, file 07) -- the root mechanism behind most other shifts
- Conviction/execution separation (Reversal A4, file 03) -- the master prompt MIXED them; remediation SEPARATED them

**What CLAUDE.md fails to convey:** The paradigm shifts are DEBATED, not settled. File 20 raises survivorship bias. File 25 raises 3-variable confound. A fresh instance would present shifts as facts rather than hypotheses.

### TEST F VERDICT: **PASS WITH CAVEATS**

Shifts correctly identified. Debate about whether they're real shifts or confounded observations is not conveyed.

---

## AGGREGATE RESULTS

| Test | Verdict | Score |
|------|---------|-------|
| A: Navigate by topic | PASS WITH GAPS | 7/10 full, 3/10 partial |
| B: Explain file coverage | PASS WITH NOTABLE GAPS | ~36/41 accurate, ~3 partial, ~2 inaccurate |
| C: Identify top 5 findings | PARTIAL PASS | 3/5 correct, 1 partial, 1 wrong |
| D: Propose discussion sequence | PARTIAL PASS | 4/6 correct, 1 debatable, 1 wrong |
| E: Core question | PASS | Clearly communicated |
| F: Paradigm shift | PASS WITH CAVEATS | Correctly identified, debate not conveyed |

**OVERALL: CONDITIONAL PASS -- 4 passes (2 with caveats), 2 partial passes, 0 fails.**

---

## SPECIFIC DEFECTS IN CLAUDE.md

Ranked by impact on fresh-instance effectiveness:

### BLOCKING DEFECTS (would cause incorrect behavior)

**B-01: Conflicting budget sequences between CLAUDE.md and README.**
- CLAUDE.md Section 3: "50K tokens: 40, 41, 42"
- README: "50K tokens: 00, 02, 05, 08, 21"
- These are completely different strategies. A fresh instance doesn't know which to follow.
- **Fix:** Reconcile into a single sequence. Either CLAUDE.md should defer to file 33 as the authoritative source and remove its own budget table, or the two documents should agree.

**B-02: Missing anti-pattern warnings.**
- README has 6 specific "Do NOT" warnings about reading order. CLAUDE.md has none of them.
- The most critical: "Do NOT read file 01 before file 02 -- creates preservation bias."
- A fresh instance following CLAUDE.md's natural flow would read 01 before 02 (numerical order), triggering the exact comprehension failure README warns against.
- **Fix:** Add a "Reading Order Hazards" subsection to CLAUDE.md Section 3 with the 6 anti-patterns from README.

**B-03: File 03 description is wrong in CLAUDE.md.**
- CLAUDE.md: "How the remediation spec was designed"
- Actual: "What the Remediation Spec REWOUND From the Master Prompt" -- 27 reversals in categories A-D
- A fresh instance looking for "reversals" would not think to read a file described as "how the spec was designed."
- **Fix:** Change to "What the remediation spec REVERSED from the master prompt (27 reversals in 4 categories)"

### SIGNIFICANT DEFECTS (would cause suboptimal behavior)

**S-01: No importance hierarchy in topic routing.**
- Section 7 lists 17 topics with equal visual weight. "Perception thresholds" (THE dominant finding) and "Container width" (a specific constraint) appear identically. A fresh instance cannot distinguish dominant findings from sub-findings.
- **Fix:** Add a "Tier" column (1=unanimous, 2=majority, 3=contested) to Section 7.

**S-02: File 21 importance not conveyed.**
- README calls file 21 "THE most operationally useful report" (5/5). CLAUDE.md describes it generically as "Language patterns and their behavioral effects."
- **Fix:** Flag 5/5-rated files in the file map with a marker. At minimum, note file 21's operational importance.

**S-03: CLAUDE.md itself violates its own anti-summary rule.**
- Section 2 Rule 4: "NEVER transfer conclusions without judgment. State confidence, dissent, and N-size."
- But CLAUDE.md presents paradigm shifts as settled without noting the 3-variable confound (file 25), survivorship bias (file 20), or the "5 facets of 1 shift" challenge.
- **Fix:** Add confidence/dissent annotations to paradigm shift claims in Section 1.

**S-04: Layer numbering inconsistency.**
- CLAUDE.md defines 5 layers (0-4). README defines 7 layers (0-6) with different boundaries.
- CLAUDE.md Layer 3 = "Meta-Analysis (files 25-33)" but README Layer 3 = "Meta-Analysis (files 25-29)" with 30-38 split across Layers 4-5.
- **Fix:** Reconcile to single structure.

### MINOR DEFECTS

**M-01: File 15 barely described in either document.** A fresh instance has almost no basis for when to read it.

**M-02: Operating Mindset section is buried.** The 5 operating beliefs (CLAUDE.md lines 69-75) perfectly frame the corpus but appear after the specific questions. They should be the FIRST thing, before the questions.

**M-03: File 40 indexes only 37 files but corpus has 41.** README documents this (Known Issues); CLAUDE.md does not. Files 03, 12, 15, 30, 35 are missing from file 40's index.

---

## WHAT CLAUDE.md DOES WELL

1. **Question-driven structure (Section 1).** Organizing by "what question does this answer?" is the correct choice. Far superior to organizing by file number.

2. **Anti-summary rules (Section 2).** Operationally critical. Overrides the default LLM behavior of summarizing. Without these, a fresh instance would immediately flatten the corpus into consensus platitudes.

3. **Glossary (Section 8).** Essential for corpus-specific jargon (PA-05, CD-006, CCS, S-09, stacking loophole, TC pipeline, etc.). Without this, a fresh instance would waste tokens asking "what does PA-05 mean?"

4. **Known Limitations (Section 9).** Honest self-assessment: N=2, 3-variable confound, Layer F gap, circular provenance, agent homogeneity. Unusual and valuable.

5. **Topic Query Reference with Dissent column (Section 7).** Each topic includes both primary files AND dissent files. Prevents reading only the consensus view.

6. **Compaction Survival section.** Tells the system what to preserve during context compression. Operationally wise for long conversations.

---

## RECOMMENDATIONS

### Priority 1 (Fix before using CLAUDE.md with fresh instances):
1. Reconcile budget sequences between CLAUDE.md and README
2. Add anti-pattern warnings to CLAUDE.md Section 3
3. Fix file 03 description in CLAUDE.md

### Priority 2 (Would improve effectiveness):
4. Add importance tiers to Section 7 topics
5. Flag 5/5-rated files in the file map
6. Add confidence/dissent annotations to paradigm shift claims

### Priority 3 (Nice to have):
7. Reconcile layer numbering between CLAUDE.md and README
8. Move Operating Mindset to top of file
9. Note file 40's coverage gap in CLAUDE.md

---

## META-OBSERVATION: THE RECURSIVE IRONY

CLAUDE.md exhibits the guardrail-vs-recipe problem it documents.

CLAUDE.md tells a fresh instance WHAT to do (anti-summary rules, don't flatten, cite sources) but provides limited guidance on HOW to do it (which files first, in what exact order, with what specific reading strategies). The Discussion Engagement Protocol (Section 6) is the closest to a recipe, but it covers only 4 user scenarios.

The corpus found that recipes outperform checklists for LLM agents. CLAUDE.md is structured more like a checklist (rules + routing table) than a recipe (sequenced steps). A fresh instance must translate CLAUDE.md's declarative instructions into a procedural plan -- exactly the translation step the corpus identifies as the failure point.

The strongest version of CLAUDE.md would be a 5-step recipe:

```
Step 1: Read the Glossary (Section 8) for jargon.
Step 2: Read file 40 (NAVIGATION-LAYER).
Step 3: Follow file 40's 4-pass ingestion protocol.
Step 4: When a user asks a question, use Section 7 to route.
Step 5: Apply Section 2 anti-summary rules to every response.
```

This 5-line recipe would outperform the current 9-section document for a fresh instance, for the same reason the 9-phase remediation recipe outperformed the 97-rule master execution prompt.
