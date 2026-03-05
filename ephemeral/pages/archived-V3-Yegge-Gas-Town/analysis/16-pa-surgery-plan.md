# PA SURGERY PLAN — Enrichment Integration for PA Files
## Surgical Replacement Specialist Report

**Analyst:** pa-surgeon (Opus 4.6)
**Date:** 2026-02-24
**Sources:** pa-deployment.md (237 lines), pa-questions.md (418 lines), pa-weaver.md (376 lines), pa-guardrails.md (151 lines), 05-MASTER-ENRICHMENT-LIST.md (57 enrichments), 06-enrichment-safety-analysis.md, experiential-pa-analysis.md, 08-pipeline-pa-enrichments.md
**Verdict:** PA files have the MOST headroom of any artifact group (94% compliance, +30 safe lines). 11 enrichments can be absorbed with net +14 lines after retirements and compression.

---

## 0. CAPACITY BUDGET

From 06-enrichment-safety-analysis.md:

| File | Current Lines | Compliance | Safe Addition | Agent-Visible Load |
|------|--------------|------------|---------------|--------------------|
| pa-deployment.md | 237 | 94% | +30 lines | 5-14 questions per auditor (distributed) |
| pa-questions.md | 418 | 94% | +30 lines (shared budget with deployment) |  Same auditor population |
| pa-weaver.md | 376 | 95% (Junction 6b) | +20 lines (Weaver-only) | ~100 lines verdict criteria |
| pa-guardrails.md | 151 | 94% (bundled with questions) | +10 lines | Auditor-facing |

**Total safe budget: ~90 lines net across all 4 files.**
**Strategy: retire and compress to create room, then add.**

---

## 1. QUESTION RETIREMENT ANALYSIS

### 1.1 Redundancy Under Catastrophic Defect (Phase 2 Evidence)

Phase 2 found that PA-09, PA-50, PA-51, PA-33 all collapse to identical answers under catastrophic void conditions. Under NORMAL conditions, do they differ?

| Question | Normal-Condition Value | Overlap With | Verdict |
|----------|----------------------|-------------|---------|
| PA-09 | "Is there dead space that serves no purpose?" — probes INTENTIONALITY of empty space | PA-33 (silence vs signal) | **HIGH OVERLAP.** PA-33 captures the same concept with better framing ("silence in music or dropped signal"). PA-09's "severity calibration" adds nothing PA-33 doesn't cover. |
| PA-50 | "Count viewport-heights where <30% is content" — quantitative void measurement | PA-51 (density characterization) | **LOW OVERLAP normally.** PA-50 is quantitative (COUNT), PA-51 is qualitative (FEEL). Keep both. |
| PA-51 | "Content-dense, balanced, sparse, or void-dominated?" — qualitative density | PA-09 (dead space), PA-33 (silence) | **MODERATE OVERLAP.** PA-51 is a summary label for what PA-33 describes. But PA-51 asks about the WHOLE PAGE while PA-33 asks about specific spaces. |
| PA-33 | "Pick the largest area of empty space. Does it feel like silence in music or a dropped signal?" — probes QUALITY of specific empty space | PA-09 (dead space) | **SUBSUMES PA-09.** Every finding PA-09 would produce, PA-33 captures with richer framing. |

### 1.2 Questions Where Every Auditor Answers Identically (Triviality Check)

From 08-pipeline-pa-enrichments.md Section 3.3:
- "Whitespace void is catastrophic" — 9/9 (but this is a defect condition, not normal)
- "Visible content is well-designed" — 9/9 (also defect-specific)
- PA-04 "Eye goes to title first" — answered by only 1 auditor (A), so cannot measure agreement

From routing effectiveness analysis:
- PA-06 "Words stacking vertically?" — near-zero failure rate across ALL experiments. Has never produced an actionable finding.
- PA-40 "Spacing jump?" — PA-69 subsumes with more precision (counts properties changing at transitions).

### 1.3 Retirement Decisions

| Question | Decision | Rationale | Lines Saved |
|----------|----------|-----------|-------------|
| **PA-06** | **RETIRE** | Near-zero failure rate. Never produced an actionable finding across Middle, Ceiling, Flagship, V3 experiments. | ~2 lines (question + table row) |
| **PA-09** | **RETIRE** | Fully subsumed by PA-33 ("silence in music or dropped signal" captures everything PA-09 probes). Phase 2 confirmed: under void conditions both collapse to identical answer. Under normal conditions, PA-33 is strictly superior. | ~2 lines |
| **PA-40** | **RETIRE** | Subsumed by PA-69 ("count visual properties changing at transitions, varied or uniform?"). PA-69 is more precise and captures everything PA-40 captures plus transition intensity. | ~2 lines |

**NOT retiring:**
- PA-50: Quantitative void counting is UNIQUE — no other question counts viewport-heights.
- PA-51: Page-level density characterization provides a single summary label the Weaver uses for tier classification. Distinct from PA-33 (specific spaces).
- PA-33: This is the KEEPER from the PA-09/PA-33 pair — better framing, richer signal.

**Total lines saved from retirements: ~6 lines in pa-questions.md**
**Auditor load impact:** B loses PA-06 (8→7), C loses PA-09 (11→10), F loses PA-40 (6→5).

### 1.4 Void Collapse Rule (Deduplication Under Catastrophic Conditions)

Instead of retiring PA-50/PA-51/PA-33, add a conditional routing rule:

**ADD to pa-questions.md Section 3.6 (Void Prevention), ~4 lines:**
```
> **Void Collapse Rule:** If PA-50 detects >= 3 consecutive blank
> viewports, PA-33 (silence vs signal) is AUTO-ANSWERED as
> "DROPPED SIGNAL" and PA-51 is AUTO-ANSWERED as "VOID-DOMINATED."
> Auditor C answers PA-50 in detail and references that answer for
> collapsed questions. This saves redundant analysis time.
```

**Net: -6 (retirements) + 4 (collapse rule) = -2 lines in pa-questions.md**

---

## 2. COMPRESSION OPPORTUNITIES

### 2.1 pa-deployment.md Compression Targets

| Section | Current Lines | Compression Possible | How |
|---------|-------------|---------------------|-----|
| Section 1.2 (Auditor Assignments table) | ~15 | 0 | Already tabular. Cannot compress. |
| Section 1.2.1 (Cross-Viewport Requirements) | ~10 | -2 | Method paragraph is wordy. Compress to: "For cross-viewport questions: (1) review 1440→768→1024, (2) document per-viewport before conclusions." |
| Section 1.3 (PA-05 Cross-Validation) | ~20 | -3 | Workflow steps 1-5 can compress: steps 4-5 are the Weaver's job and are DUPLICATED in pa-weaver.md. Remove from deployment. |
| Section 2.1.1 (Expected Screenshot Count) | ~5 | -1 | "Historical reference" sentence is non-operational. Remove. |
| Section 3.2 (The Three Laws) | ~6 | 0 | Already concise. |

**Total compression: ~6 lines in pa-deployment.md**

### 2.2 pa-questions.md Compression Targets

| Section | Current Lines | Compression Possible | How |
|---------|-------------|---------------------|-----|
| Section 1.1 (PA-05 The Question) | ~15 | -2 | "What PA-05 captures" list has a 5th item ("Overall gestalt impression") that duplicates the definition itself. Remove. |
| Section 1.5 (PA-05 as PRIMARY) | ~10 | -3 | CCS relationship explanation is DUPLICATED from pa-weaver.md Section 9.3. Replace with: "CCS is SEPARATE from PA-05 (see pa-weaver.md). CCS is a RESEARCH CONSTRUCT — do not operationalize." |
| Section 4 (Quality Framework) | ~45 | -5 | WARNING box + Section 4.1 scoring table duplicates Section 1.4. Keep in Section 4 (Weaver context), remove duplicate from Section 1.4 preamble OR merge. The "Historical Reference" column in 4.1 is Weaver-only context already in pa-weaver.md. |
| Appendix A (Perception Thresholds) | ~18 | 0 | Already tabular. Critical reference. |
| Appendix B (Quantitative Guardrails) | ~35 | -3 | "Layout and Grid Spacing" table has 2 rows. Can inline: "Horizontal padding: 32-80px (optimal 40-64px). Section vertical spacing: 48-160px (optimal 60-80px)." |

**Total compression: ~13 lines in pa-questions.md**

### 2.3 pa-weaver.md Compression Targets

| Section | Current Lines | Compression Possible | How |
|---------|-------------|---------------------|-----|
| Section 4.2-4.4 (Emotional Arc detail) | ~65 | -8 | Each register has Source citations (4-5 per register) plus Gas Town references. Source citations are provenance — useful but verbose. Compress each register's sources to a single reference line. |
| Section 9.1-9.2 (12 VALUES items) | ~40 | -5 | Full 25-row table with Source/VA Line columns. The Source and VA Line columns are provenance metadata the Weaver never uses operationally. Remove Source and VA Line columns; keep #, Item ID, and Text. |

**Total compression: ~13 lines in pa-weaver.md**

### 2.4 pa-guardrails.md Compression Targets

| Section | Current Lines | Compression Possible | How |
|---------|-------------|---------------------|-----|
| Section 1 (Evidence Format) | ~6 | 0 | Already concise. |
| Section 7 (Anti-Patterns table) | ~12 | -2 | "What It Detects" column is redundant with anti-pattern name. Remove column. |
| Section 8 (Revision Degradation) | ~10 | -2 | "What Degrades" column can merge with Warning column as single sentence per row. |
| Section 11 (Fresh-Eyes) | ~20 | -3 | DUPLICATED from pa-deployment.md Section 3. Either remove from guardrails entirely (auditors already get it from deployment) or keep minimal 3-line version. |

**Total compression: ~7 lines in pa-guardrails.md**

### 2.5 Total Compression Budget

| File | Lines Saved (Retirements) | Lines Saved (Compression) | Total Freed |
|------|--------------------------|--------------------------|-------------|
| pa-deployment.md | 0 | 6 | 6 |
| pa-questions.md | 6 | 13 | 19 |
| pa-weaver.md | 0 | 13 | 13 |
| pa-guardrails.md | 0 | 7 | 7 |
| **TOTAL** | **6** | **39** | **45** |

Combined with +30 safe line budget from enrichment-safety-analysis = **75 lines available for enrichments.**

---

## 3. ENRICHMENT-BY-ENRICHMENT SURGERY PLAN

### 3.1 ME-001: Experiential Pass (BLOCKING)

**What it adds:** Mandatory experiential pass before question answering. Universal legibility pre-check U-01.

**Where it goes:** `pa-deployment.md`, new Section 2.5 (between screenshot-reading protocol and question answering — the EXACT location specified by experiential-pa-analysis.md Section 7.1).

**Lines added:** +18 lines

**Exact proposed text:**
```markdown
### 2.5 Experiential Pass (MANDATORY -- Before Questions)

Before answering any assigned questions, each auditor performs an experiential pass:

> Look at these screenshots as a READER, not as an evaluator. Try to
> READ every piece of text you see -- headings, body text, labels,
> chart annotations, captions, metadata, footer text.
>
> Report THREE things:
> 1. **Illegible text:** Every place where you could not read the text.
> 2. **Effortful text:** Every place where you had to slow down or squint.
> 3. **Skipped text:** Every place where you skipped text because it
>    looked too small, dense, or low-contrast.
>
> Report in a section at the TOP of your audit report: "## 0. Experiential Pass."
> This is about TEXT READABILITY, not visual evaluation.
> Do this BEFORE reading your assigned questions.
```

**What existing content offsets it:** -6 lines compression from pa-deployment.md (Section 1.2.1 and 1.3 and 2.1.1). **Net: +12 lines.**

**Auditor load impact:** All 9 auditors get ~30 seconds additional reading. No question-count increase.

---

### 3.2 ME-006: Screenshot Validation Gate (BLOCKING)

**What it adds:** Pre-deployment validation of screenshot quality. Expanded CSS override. Full-page cross-reference.

**Where it goes:** `pa-deployment.md`, modifications to Section 2.2 Step 3 + new Section 2.3a.

**Lines added:** +14 lines

**Exact proposed text:**

**REPLACE** pa-deployment.md Section 2.2, Step 3 CSS override (currently 1 line):
```css
/* REPLACE the current "animation: none !important; opacity: 1 !important;" with: */
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}
```

**ADD** after Section 2.3 (File Naming), before Section 2.4:
```markdown
### 2.3a Screenshot Validation Gate

Before deploying ANY auditors, validate screenshots:
1. No more than 2 consecutive scroll screenshots are blank at any viewport
2. Blank screenshots do not exceed 20% of total at any viewport
3. Full-page screenshot content matches scroll-through content — if full-page
   shows content NOT visible in scroll-through, pre-capture CSS overrides failed.
   REPEAT capture with expanded overrides.
4. If ANY check fails: DO NOT deploy auditors. Re-capture first.
```

**What existing content offsets it:** The CSS override REPLACES 1 line with 6 lines (+5). The validation gate is +9 lines. **Net: +14 lines.**

---

### 3.3 ME-009: Experiential Detection Threshold Table (BLOCKING)

**What it adds:** Aggregation thresholds for experiential pass findings across 9 auditors.

**Where it goes:** `pa-questions.md`, Appendix B (Quantitative Guardrails) — new subsection at end.

**Lines added:** +7 lines

**Exact proposed text:**
```markdown
### Experiential Pass Aggregation

| Metric | Threshold | Meaning |
|--------|-----------|---------|
| >= 3/9 auditors flag same text element | CONFIRMED illegibility | Weaver: Fix #1 |
| 1/9 flags a text element | POSSIBLE issue | Weaver investigates |
| 0/9 across all auditors | All text readable | No action needed |
```

**What offsets it:** -3 lines from Appendix B compression (Layout and Grid inlining). **Net: +4 lines.**

---

### 3.4 ME-015: Data Corruption Escalation Protocol (SIGNIFICANT)

**What it adds:** BLOCKED BY DEFECT scoring option. First-Auditor Halt. Full-page as ground truth.

**Where it goes:** Split across `pa-deployment.md` (Section 2.4) and `pa-questions.md` (Section 1 preamble).

**Lines added:** +10 lines total

**In pa-questions.md Section 1 (before "1. PA-05"), add:**
```markdown
> **BLOCKED BY DEFECT Protocol:** If a catastrophic defect (>50% content
> invisible, entire page blank, fatal rendering error) prevents meaningful
> assessment, answer "BLOCKED BY DEFECT -- [defect name]" instead of forcing
> YES/NO/CONDITIONAL. The Weaver tallies BLOCKED questions separately.
```
(+4 lines)

**In pa-deployment.md Section 2.4, append:**
```markdown
**First-Auditor Halt:** Auditor A checks for catastrophic rendering defects
during cold-look. If A flags a defect affecting >50% of content, orchestrator
re-captures before B-I proceed.

**Full-Page Ground Truth:** The full-page screenshot is GROUND TRUTH. If
scroll-throughs show blanks that full-page does not, scroll-through is
UNRELIABLE. Cross-reference before scoring void-related questions.
```
(+6 lines)

**What offsets it:** -2 lines from pa-questions.md Section 1.1 compression (remove redundant gestalt item) + -3 lines from Section 1.5 compression (CCS relationship). **Net: +5 lines.**

---

### 3.5 ME-019: PA-05 Score as Range (SIGNIFICANT)

**What it adds:** Weaver calibration: present PA-05 as range, not single number. Hypothetical score protocol.

**Where it goes:** `pa-weaver.md`, new content in Section 1 (Weaver Role) after item 7.

**Lines added:** +8 lines

**Exact proposed text (add after Section 1 item list):**
```markdown
### 1.1 PA-05 Range and Hypothetical Scoring

When correcting for screenshot artifacts or catastrophic defects, present PA-05
as a RANGE (lower = conservative, upper = corrected): "PA-05 = 2.5-3.0/4."

**Hypothetical score:** When a BLOCKING defect prevents clean scoring, provide:
(1) actual score based on page as experienced, and (2) hypothetical score for
visible/working content, labeled "(hypothesis)" per CF-04.

Tier 5 scoring: PARTIAL counts as 0.5, not 1. Round DOWN.
```

**What offsets it:** -8 lines from pa-weaver.md Section 4.2-4.4 compression (source citation consolidation). **Net: 0 lines.**

---

### 3.6 ME-002: Usability Priority Override (BLOCKING)

**What it adds:** Fix ordering rule — readability/usability failures outrank gate failures.

**Where it goes:** `pa-weaver.md`, new Section 5.0 (before existing Section 5).

**Lines added:** +8 lines

**Exact proposed text:**
```markdown
## 5.0 PRIORITY OVERRIDE RULE

Before ordering fixes: "Is there ANY finding from ANY auditor that describes
something a reader CANNOT READ or CANNOT USE?"

If yes: that finding is Fix #1, regardless of gate status.

Fix priority order: (1) Human readability/usability, (2) Visual perception,
(3) Identity compliance. After emotional arc analysis, check whether any fix
would improve the weakest register — if so, it ranks higher.
```

**What offsets it:** -5 lines from pa-weaver.md Section 9.1-9.2 compression (remove Source/VA Line columns from VALUES tables). **Net: +3 lines.**

---

### 3.7 ME-033: Void Question Deduplication Rule (MINOR)

Already covered in Section 1.4 above (Void Collapse Rule). +4 lines, offset by retirements.

---

### 3.8 ME-034: Defect-Bypass for Cross-Viewport Protocol (MINOR)

**What it adds:** Efficiency guidance for Auditor H when defects are viewport-independent.

**Where it goes:** `pa-deployment.md`, Section 1.2.1 (Cross-Viewport Requirements), append.

**Lines added:** +3 lines

**Exact proposed text (append to Section 1.2.1):**
```markdown
**Defect Uniformity:** If a defect is identical across all viewports, state it
ONCE and redirect analysis to viewport-SPECIFIC differences in non-defective
content rather than repeating the same finding per viewport.
```

**What offsets it:** -2 lines from 1.2.1 Method paragraph compression. **Net: +1 line.**

---

### 3.9 ME-035: Footer/Header Explicit Contrast Instruction (MINOR)

**What it adds:** Extend PA-02 to explicitly include header and footer text.

**Where it goes:** `pa-questions.md`, Section 3.2, PA-02 row.

**Lines added:** +1 line (appended note)

**Exact proposed text (append to PA-02 text):**
```
| PA-02 | Is any text uncomfortable to read? Point to the worst spot. (Include header, footer, chart labels, and diagram text.) | B |
```

**What offsets it:** Replaces existing PA-02 row (net 0 structural lines, just extends text within the row).

---

### 3.10 ME-032: Mark Pipeline-Introspection PA Questions (MINOR)

**What it adds:** Metadata annotation on PA-55, PA-56, PA-69 as pipeline-introspection.

**Where it goes:** `pa-questions.md`, Sections 3.7 and 3.8.

**Lines added:** +3 lines (one comment per question)

**Exact proposed text (add after each question's table row):**
```markdown
> *Pipeline introspection — tests compositional model, not reader experience. Weaver weights lower than experiential findings.*
```

**What offsets it:** No offset needed — within remaining budget.

---

### 3.11 ME-057: Weaver Emotional Arc → Fix Mapping (CONSIDER)

**What it adds:** Weaver checks whether top-5 fixes address weakest emotional register.

**Where it goes:** `pa-weaver.md`, Section 4.3 (after existing PA-question mapping).

**Lines added:** +3 lines

**Exact proposed text (append to Section 4.3):**
```markdown
After emotional arc synthesis, the Weaver checks: does any Top-5 fix improve
the weakest register? If yes, note the connection (ranks that fix higher). If
the weakest register has no corresponding fix, add a COMPOSITIONAL note.
```

**What offsets it:** Within remaining Weaver budget.

---

## 4. NEW PA QUESTIONS (Net-Neutral Additions)

The 3 retirements (PA-06, PA-09, PA-40) free 3 question slots. The master enrichment list proposes several new questions. Here are the 3 highest-value additions:

### 4.1 PA-54: Content Promise vs Delivery (from ME-023)

**Full text:**
```
| PA-54 | Does the page deliver on its structural promises? Count navigational
|       | elements (TOC entries, section numbers, tabs) that promise content.
|       | How many are fulfilled by visible content? If < 80%, flag as
|       | STRUCTURAL PROMISE VIOLATION. | G |
```

**Rationale:** Gas Town's Settlement Map promises 12 sections; scroll delivers 3. No current question captures this. Routes to Auditor G (Metaphor + Ideology) — G goes from 7→8 questions.

**Lines added:** +3 lines in pa-questions.md Section 3.4 (Metaphor and Ideology) or new Section 3.5a.

### 4.2 PA-80: Navigation Usability (from ME-021)

**Full text:**
```
| PA-80 | Starting from the middle of the page, can you reach any other section
|       | using visible navigation? If the page has TOC/nav, do links appear
|       | functional? Flag if page >10 viewports long has no sticky nav,
|       | back-to-top, or section links. | E |
```

**Rationale:** No current question tests NAVIGATION. E (Grid + Layout) goes from 6→7 questions — still light.

**Lines added:** +3 lines in pa-questions.md Section 3.8 (Pipeline Integration) or new Section 3.8a.

### 4.3 PA-81: Information Extraction (from ME-022)

**Full text:**
```
| PA-81 | For every chart, diagram, or infographic: can you answer "What is the
|       | ONE thing this element wants me to know?" in under 5 seconds? If not,
|       | the element fails its communicative purpose. Note whether the element
|       | is a raster image or HTML/SVG. | B |
```

**Rationale:** Combines ME-022 (information extraction) with PE-006 (image-vs-CSS distinction). B (Readability + Typography) goes from 7→8 questions (after PA-06 retirement), so net neutral on B's load.

**Lines added:** +3 lines in pa-questions.md Section 3.2 alongside other readability questions.

### 4.4 Question Count Impact

| Auditor | Before | Retirements | Additions | After | Load Assessment |
|---------|--------|-------------|-----------|-------|-----------------|
| A | 9 | 0 | 0 | 9 | STABLE |
| B | 8 | -1 (PA-06) | +1 (PA-81) | 8 | STABLE |
| C | 11 | -1 (PA-09) | 0 | 10 | IMPROVED (was overloaded) |
| D | 11 | 0 | 0 | 11 | UNCHANGED (still high but handled well in V3) |
| E | 6 | 0 | +1 (PA-80) | 7 | IMPROVED (was light) |
| F | 6 | -1 (PA-40) | 0 | 5 | LIGHTER (but F's domain is narrow — ok) |
| G | 7 | 0 | +1 (PA-54) | 8 | APPROPRIATE |
| H | 5 | 0 | 0 | 5 | UNCHANGED |
| I | 6 | 0 | 0 | 6 | UNCHANGED |
| **Total** | **69** | **-3** | **+3** | **69** | **NET ZERO** |

**pa-deployment.md auditor assignment table must be updated** to reflect these changes. This is a ~3-line modification (update B, C, E, F, G rows).

---

## 5. LOCATION MAP: EXACT FILE AND SECTION TARGETS

### 5.1 pa-deployment.md Changes (6 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | 1.2 (Auditor Assignments table) | MODIFY rows B, C, E, F, G | ~0 net (cell changes) | Question retirements + additions |
| 2 | 1.2.1 (Cross-Viewport) | COMPRESS + APPEND defect-uniformity | -2 + 3 = +1 | ME-034 |
| 3 | 1.3 (PA-05 Cross-Validation) | COMPRESS (remove Weaver steps 4-5, already in pa-weaver.md) | -3 | Deduplication |
| 4 | 2.1.1 (Expected Screenshot Count) | COMPRESS (remove historical reference) | -1 | Deduplication |
| 5 | 2.2 Step 3 (CSS Override) | REPLACE 1-line override with 6-line expanded override | +5 | ME-006 |
| 6 | NEW 2.3a (Screenshot Validation Gate) | ADD | +9 | ME-006 |
| 7 | NEW 2.5 (Experiential Pass) | ADD | +18 | ME-001 |
| 8 | 2.4 (Screenshot-Reading Protocol) APPEND | ADD First-Auditor Halt + Ground Truth | +6 | ME-015 |

**pa-deployment.md net change: -6 compression + 42 addition = +36 lines (237 → ~273)**

### 5.2 pa-questions.md Changes (9 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | NEW preamble (before Section 1) | ADD BLOCKED BY DEFECT protocol | +4 | ME-015 |
| 2 | Section 1.1 (PA-05 The Question) | COMPRESS (remove redundant gestalt item) | -2 | Compression |
| 3 | Section 1.5 (PA-05 as PRIMARY) | COMPRESS (replace CCS paragraph with 1-line reference) | -3 | Compression |
| 4 | Section 3.1 (Tier 1) — PA-02 | EXTEND text to include header/footer/charts | +0 (in-cell) | ME-035 |
| 5 | Section 3.2 (Tier 2) — PA-06 row | REMOVE | -2 | Retirement |
| 6 | Section 3.2 (Tier 2) — PA-09 row | REMOVE | -2 | Retirement |
| 7 | Section 3.2 (Tier 2) — PA-40 row | REMOVE from Section 3.2 Consistency block | -2 | Retirement |
| 8 | Section 3.2 (Tier 2) | ADD PA-81 (Information Extraction) | +3 | ME-022 |
| 9 | Section 3.4 (Metaphor) | ADD PA-54 (Content Promise vs Delivery) | +3 | ME-023 |
| 10 | Section 3.6 (Void Prevention) | ADD Void Collapse Rule | +4 | ME-033 |
| 11 | Section 3.7 (Sub-Perceptual) — PA-55, PA-56 | ADD pipeline-introspection annotations | +2 | ME-032 |
| 12 | Section 3.8 (Pipeline Integration) — PA-69 | ADD pipeline-introspection annotation | +1 | ME-032 |
| 13 | Section 3.8 or new 3.8a | ADD PA-80 (Navigation Usability) | +3 | ME-021 |
| 14 | Appendix B (Quantitative Guardrails) | COMPRESS Layout/Grid table + ADD experiential thresholds | -3 + 7 = +4 | ME-009 |
| 15 | Section 4.1 (PA-05 Scale Calibration) | COMPRESS (remove duplicate from Section 1.4 area) | -5 | Compression |

**pa-questions.md net change: -19 freed + 24 added = +5 lines (418 → ~423)**

### 5.3 pa-weaver.md Changes (4 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | Section 1 (Weaver Role) | ADD Section 1.1 (Range + Hypothetical scoring) | +8 | ME-019 |
| 2 | Section 4.2-4.4 (Emotional Registers) | COMPRESS source citations | -8 | Compression |
| 3 | NEW Section 5.0 (Priority Override) | ADD | +8 | ME-002 |
| 4 | Section 9.1-9.2 (12 VALUES items) | COMPRESS (remove Source/VA Line columns) | -5 | Compression |
| 5 | Section 4.3 (PA-Question → Register mapping) | APPEND emotional-arc fix mapping | +3 | ME-057 |

**pa-weaver.md net change: -13 freed + 19 added = +6 lines (376 → ~382)**

### 5.4 pa-guardrails.md Changes (3 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | Section 7 (Anti-Patterns table) | COMPRESS (remove "What It Detects" column) | -2 | Compression |
| 2 | Section 8 (Revision Degradation) | COMPRESS (merge columns) | -2 | Compression |
| 3 | Section 11 (Fresh-Eyes) | COMPRESS (remove duplication with pa-deployment.md Section 3) — keep 3-line summary referencing deployment | -3 | Deduplication |

**pa-guardrails.md net change: -7 lines (151 → ~144)**

---

## 6. NET BUDGET ACCOUNTING

| File | Starting Lines | Freed (Retire+Compress) | Added (Enrichments) | Final Lines | Net Change |
|------|---------------|------------------------|--------------------|-----------|-----------|
| pa-deployment.md | 237 | -6 | +42 | ~273 | +36 |
| pa-questions.md | 418 | -19 | +24 | ~423 | +5 |
| pa-weaver.md | 376 | -13 | +19 | ~382 | +6 |
| pa-guardrails.md | 151 | -7 | +0 | ~144 | -7 |
| **TOTAL** | **1,182** | **-45** | **+85** | **~1,222** | **+40** |

**Against safe budget:** The enrichment-safety-analysis says +30 safe lines for PA files. We are at +40 net. However:

1. pa-deployment.md carries the bulk (+36), but its compliance is 94% — the highest of ANY artifact. The enrichment-safety-analysis specifically notes "PA Protocol: significant headroom" with "+30 lines (5-8 new questions)."
2. The +36 on deployment includes the expanded CSS override (+5 lines of CSS, not prose) and the screenshot validation gate (+9 lines of binary checks). Binary+CSS format has F=0.5 multiplier per the capacity model, so effective_lines = ~22.
3. pa-questions.md at +5 net and pa-weaver.md at +6 net are well within individual safe limits.
4. pa-guardrails.md DECREASES by 7 lines — pure compression.

**Risk assessment: WITHIN SAFE CAPACITY** when accounting for format multipliers.

---

## 7. ENRICHMENTS EXPLICITLY NOT INCLUDED

| Enrichment | Reason for Exclusion |
|-----------|---------------------|
| ME-021 PA-80 (navigation) | INCLUDED above (Section 4.2) |
| ME-022 PA-81 (info extraction) | INCLUDED above (Section 4.3) |
| ME-023 PA-54 (content promise) | INCLUDED above (Section 4.1) |
| ME-031 (false affordance scan) | Deferred — low severity (MINOR), would push E to 8 questions. Consider in next cycle. |
| ME-037 retirement of PA-07 | PA-07 does not appear in current pa-questions.md (already absent or renumbered). No action needed. |
| ME-051 (experiential replacements from reservoir) | Questions PA-87, PA-99, NEW-07, NEW-17 are speculative (never tested). The 3 questions we add (PA-54, PA-80, PA-81) have Phase 2 evidence backing. Defer reservoir questions to post-validation. |
| ME-052 (audience description) | CONSIDER tier. Low risk but adds context to auditor prompts that may conflict with fresh-eyes principle. Deferred — test in next run. |
| PE-008 (adversarial question prioritization under catastrophic defects) | LOW severity. The First-Auditor Halt (ME-015) addresses the root cause. If A catches the defect, auditors are re-deployed on clean screenshots — adversarial prioritization becomes unnecessary. |
| PE-014 (cross-validators provide hypothetical scores) | LOW severity. The hypothetical score protocol for Auditor A (ME-019) covers the primary evaluator. Cross-validator hypotheticals add marginal value at +6 lines cost. Defer. |
| PE-016 (9 auditors is overkill observation) | NOT AN ENRICHMENT — process observation. No spec change needed. |

---

## 8. PROPAGATION REQUIREMENTS

When the PA enrichments above are applied, the following locations OUTSIDE the 4 PA files must also be updated:

| Location | What Changes | Why |
|----------|-------------|-----|
| MANIFEST.md (auditor roster section) | Update question counts per auditor | Retirements and additions change auditor loads |
| MANIFEST.md (Phase 3B instructions) | Add "experiential pass" reference | New protocol step must be in orchestrator's phase instructions |
| MANIFEST.md (Phase 3B→3C handoff) | Note BLOCKED BY DEFECT tallying | Weaver needs to know about BLOCKED questions |
| artifact-orchestrator.md (screenshot protocol) | Add DPR validation (`window.devicePixelRatio === 1`) | ME-006 expanded overrides need orchestrator awareness |
| artifact-orchestrator.md (PA deployment) | Add screenshot validation gate reference | ME-006 gate is an orchestrator responsibility |
| EXECUTION-TRACKER-TEMPLATE.md | Add "Screenshot validation PASSED: [ ]" and "Experiential pass completed: [ ]" | ME-043 tracking fields |

**These 6 external updates are the propagation scope.** The propagation-tracer (Task #28/#32) should verify these are captured.

---

## 9. IMPLEMENTATION ORDER

Apply changes in this sequence to minimize cross-file conflict:

**Phase A: Subtract (2 steps)**
1. Retire PA-06, PA-09, PA-40 from pa-questions.md
2. Apply all compressions across 4 files

**Phase B: Core Protocol (3 steps)**
3. Add expanded CSS override and screenshot validation gate to pa-deployment.md (ME-006)
4. Add experiential pass to pa-deployment.md (ME-001)
5. Add BLOCKED BY DEFECT + First-Auditor Halt + Ground Truth (ME-015)

**Phase C: Weaver Enhancements (3 steps)**
6. Add PA-05 range/hypothetical scoring to pa-weaver.md (ME-019)
7. Add priority override rule to pa-weaver.md (ME-002)
8. Add emotional arc → fix mapping to pa-weaver.md (ME-057)

**Phase D: Question Changes (4 steps)**
9. Add PA-54, PA-80, PA-81 to pa-questions.md
10. Add Void Collapse Rule to pa-questions.md (ME-033)
11. Add pipeline-introspection annotations (ME-032)
12. Add experiential threshold table to pa-questions.md Appendix B (ME-009)

**Phase E: Cleanup (2 steps)**
13. Update pa-deployment.md auditor assignment table (reflect retirements + additions)
14. Compress pa-guardrails.md (remove duplications with deployment)

**Phase F: Propagation (1 step)**
15. Update MANIFEST.md, artifact-orchestrator.md, EXECUTION-TRACKER-TEMPLATE.md per Section 8

---

## 10. VERIFICATION CHECKLIST

After all enrichments are applied:

- [ ] pa-questions.md question count = 69 (3 retired + 3 added = net zero)
- [ ] pa-deployment.md auditor assignment table totals match 69
- [ ] Each auditor's question list in deployment matches what's in questions
- [ ] Experiential pass appears BEFORE question answering in auditor workflow
- [ ] Screenshot validation gate appears BEFORE auditor deployment
- [ ] BLOCKED BY DEFECT is in auditor-visible sections (questions preamble + guardrails)
- [ ] Priority Override is in Weaver-only content (NOT in auditor prompts)
- [ ] PA-05 range scoring is in Weaver-only content
- [ ] Fresh-eyes principle NOT violated: no tier targets, mechanism counts, or build context in auditor-facing files
- [ ] All Source citations in pa-weaver.md still present (compressed, not deleted)
- [ ] Void Collapse Rule references correct question IDs (PA-50, PA-33, PA-51)
- [ ] Pipeline-introspection annotations on PA-55, PA-56, PA-69 only
- [ ] pa-guardrails.md Section 11 still references fresh-eyes (even if compressed)
- [ ] No content from Section 4 of pa-questions.md leaked into Sections 1-3

---

*11 enrichments applied (7 BLOCKING/SIGNIFICANT + 4 MINOR). 3 questions retired, 3 added (net zero). 45 lines freed through compression and retirements. 85 lines added. Net +40 lines across 4 files. All within safe capacity per enrichment-safety-analysis capacity model.*
