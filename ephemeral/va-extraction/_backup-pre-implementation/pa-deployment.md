# PA DEPLOYMENT — Auditor Assignments + Screenshot Protocol
## Pipeline v3 Layer 7 — Deployment Reference
Date: 2026-02-24
Status: AUTHORITATIVE — split from artifact-pa-protocol-MONOLITHIC.md
Split: Contains deployment information ONLY. Auditor assignments, screenshot protocol, model recommendations. What the orchestrator needs to SET UP the PA.

---

## COUNCIL VERDICT COMPLIANCE

This artifact incorporates the following authoritative rulings:
- **CF-02:** Compositional Critic removed as "primary emotional arc check." PA auditor is the PRIMARY quality check. (council-verdict.md Part 1, CF-02)
- **CF-04:** All PA-05 predictions carry "(hypothesis)" suffix. Evidence taxonomy applied. (council-verdict.md Part 1, CF-04)
- **Pattern 5:** 12 VALUES items rerouted from GATE-RUNNER to PA-AUDITOR. (council-verdict.md Part 2, Pattern 5, Category B)
- **Contradiction C:** Emotional arc assessed by PA auditor post-build, not gate-checked. Disposition-emotion links are DESIGN INTENTIONS, not guarantees. (council-verdict.md Part 3, Contradiction C)
- **CCS:** Tagged as RESEARCH CONSTRUCT, not operational metric. (council-verdict.md Part 2, Pattern 5)

---

## 1. 9-AUDITOR DEPLOYMENT ARCHITECTURE (Mode 4)

### 1.1 Architecture Overview

> Source: ITEM 69 (extract-d01-d03.md, VA L158) — "PHASE 3: PERCEPTUAL AUDIT (Verification Only)"
> Source: ITEM 30 (extract-d06-d08.md, VA L548-550) — "Standard Mode 4 PA Audit (9 auditors + 1 integrative + 1 weaver)"
> Source: ITEM 160 (extract-d21-d25.md, VA L2006) — "PROVEN: PA Mode 4 (9 auditors) >> Mode 2 for catching failures"

Mode 4 deploys 11 agents total:
- 9 PA Auditors (A through I), each with assigned questions
- 1 Integrative Auditor (no assigned questions — gestalt impression only)
- 1 Weaver (reads all 10 reports, produces VERDICT)

All agents run in PARALLEL (except Weaver, which is sequential after all auditors complete).

### 1.2 Auditor Assignments

> Source: ITEM 72 (extract-d01-d03.md, VA L168-169) — question distribution
> Source: ITEM 73 (extract-d01-d03.md, VA L172-173) — PA-8
> Source: ITEM 74 (extract-d01-d03.md, VA L176-177) — PA-9
> Source: ITEM 84 (extract-d09-d11.md, VA L893) — "PA-1 thru PA-9 (9 parallel auditors)"

| Auditor | Role | Core Questions | Tier 5 Questions | Extended | Total |
|---------|------|---------------|-------------------|----------|-------|
| **A** | Impression + Emotion | PA-01, PA-03, PA-04, PA-05, PA-45 | PA-65, PA-67 | PA-72, PA-76 | 9 |
| **B** | Readability + Typography | PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70 | — | PA-77 | 8 |
| **C** | Spatial + Proportion | PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53 | PA-64, PA-66 | — | 11 |
| **D** | Flow + Pacing | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71 | PA-62 | PA-74, PA-75 | 11 |
| **E** | Grid + Layout | PA-14, PA-15, PA-37, PA-38, PA-39 | PA-63 | — | 6 |
| **F** | Consistency + Rhythm | PA-16, PA-17, PA-40, PA-41 | PA-60, PA-61 | — | 6 |
| **G** | Metaphor + Ideology | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44 | PA-68 | — | 7 |
| **H** | Responsiveness | PA-22, PA-23, PA-46, PA-47 | — | PA-73 | 5 |
| **I** | Cross-Page + Adversarial | PA-24, PA-25, PA-26, PA-27, PA-28, PA-48 | — | — | 6 |

**Total: 69 questions across 9 auditors** (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)

> **Load balance note (FIX-061/062/063):** PA-52 moved C->D (pacing aligns with D's PA-35), PA-55 moved C->B (descriptive question suits B's role), PA-70 moved D->B (density/typography question suits B's role). FIX-064 (C1/C2 split) is DEFERRED CONTINGENT — only revisit if C's quality degrades at 11 questions.

> Source: ITEM 65 (extract-d21-d25.md, VA L1777) — "PA question count reconciliation"

### 1.2.1 Cross-Viewport Comparison Requirements

The following questions REQUIRE multi-viewport evidence. Auditors assigned these questions MUST compare screenshots across viewports, not assess a single viewport in isolation:

| Question | Required Viewports | Comparison Method |
|----------|-------------------|-------------------|
| PA-22 | 1440px, 1024px, 768px | "Would a user with ONLY this screen size feel served?" — answer separately per viewport, then synthesize |
| PA-23 | 1024px vs 768px | Side-by-side comparison: what changed for the worse between these two widths? |
| PA-46 | 768px vs 1440px | Does 768px reorganization make sense, or is it just a shrunk version of 1440px? |

**Method:** For each cross-viewport question, auditors should (1) review the 1440px screenshots first, (2) review 768px screenshots, (3) compare observations side-by-side, then (4) check 1024px as an intermediate reference point. Document evidence from EACH viewport separately before drawing conclusions.

### 1.3 PA-05 Distributed Cross-Validation Protocol

> Source: FIX-065 — PA-05 is the PRIMARY success metric. Single-evaluator risk is the biggest protocol weakness.

Auditor A remains the PRIMARY evaluator for all 4 PA-05 sub-criteria. However, 4 other auditors provide SECONDARY cross-validation scores for the sub-criterion in their domain:

| PA-05 Sub-Criterion | Primary (A) | Cross-Validator | Rationale |
|---------------------|-------------|-----------------|-----------|
| **DESIGNED** (PA-05a) | A | **F** (Consistency + Rhythm) | F assesses whether mechanisms are in conversation — core of DESIGNED |
| **COHERENT** (PA-05b) | A | **G** (Metaphor + Ideology) | G assesses whether one design voice persists — core of COHERENT |
| **PROPORTIONATE** (PA-05c) | A | **C** (Spatial + Proportion) | C directly owns spatial balance questions — core of PROPORTIONATE |
| **POLISHED** (PA-05d) | A | **B** (Readability + Typography) | B assesses execution quality details — core of POLISHED |

**Cross-Validation Workflow:**
1. Each cross-validator rates ONLY their assigned sub-criterion as a SECONDARY assessment (PASS / CONDITIONAL PASS / FAIL) at the END of their own report.
2. Cross-validators use the same criteria as PA-05 sub-criteria definitions but apply it through their domain lens.
3. The Weaver receives BOTH Auditor A's primary scores AND the 4 cross-validation scores.
4. If primary and cross scores AGREE: Weaver uses the agreed score.
5. If primary and cross scores DISAGREE: Weaver must explain the disagreement and resolve it, citing evidence from both reports.

**Cross-validators do NOT see Auditor A's scores.** They assess independently. This is a blind cross-validation.

### 1.4 Agent Requirements

> Source: ITEM 85 (extract-d09-d11.md, VA L894) — "all PA auditors must be Opus"
> Source: ITEM 89 (extract-d09-d11.md, VA L899) — "Weaver must be Opus"
> Source: ITEM 75 (extract-d01-d03.md, VA L182-184) — "Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions"

| Agent | Model | Requirement |
|-------|-------|-------------|
| Auditors A-I | Opus | All 9 auditors STRONG RECOMMENDATION Opus (perceptual judgment quality degrades with smaller models, but not a hard requirement) |
| Integrative Auditor | Opus | No assigned questions, gestalt only |
| Weaver | Opus | Reads all 10 reports, produces VERDICT |

**Evidence Format Requirement (FIX-067):** Every PA question answer MUST follow this format:

> **ANSWER FORMAT:** YES / NO / CONDITIONAL + for each finding: [screenshot reference, e.g., `1440/scroll-03.png`] + [1-sentence description of what you see]

This applies to ALL 69 questions across ALL 9 auditors (A-I). Evidence is a STRUCTURAL part of the answer, not optional. Answers without screenshot references are INCOMPLETE.

**Completion Manifest Requirement (FIX-066):** Each auditor's report MUST include a **completion table** as its FINAL section:

```
## Completion Manifest — Auditor [LETTER]
| Question ID | Answered | Evidence Screenshot(s) |
|-------------|----------|----------------------|
| PA-XX       | YES      | 1440/scroll-02.png   |
| PA-YY       | YES      | 768/cold-look.png    |
| ...         | ...      | ...                  |
```

### 1.5 Integrative Auditor

> Source: ITEM 75 (extract-d01-d03.md, VA L182-184)
> Source: ITEM 73 (extract-d21-d25.md, VA L1789) — "Add integrative gestalt auditor (#14)"

The Integrative Auditor has NO assigned questions and does NOT score PA-05. Their role:
1. Receive ALL screenshots
2. Write a free-form **gestalt impression** from screenshots (what FEELS right, what FEELS wrong — no structured questions)
3. Identify **cross-cutting patterns** that no individual auditor catches (because each is focused on their question set)
4. Observe the **emotional arc** using the 4-register framework (see pa-questions.md Part 6): SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE
5. Flag cross-cutting issues (e.g., "the rhythm is consistent but the rhythm itself is monotonous")

> **CLARIFICATION (FIX-083):** PA-05 scoring is the WEAVER's responsibility, NOT the Integrative Auditor's. The Integrative Auditor's gestalt impression INFORMS the Weaver's PA-05 score but does not constitute a score itself. Any prior reference (including MANIFEST) stating that the Integrative Auditor scores PA-05 is INCORRECT.

---

## 2. SCREENSHOT PRE-CAPTURE PATTERN

### 2.1 Protocol

> Source: ITEM 70 (extract-d01-d03.md, VA L161) — "Lead takes ALL screenshots at 1440px, 1024px, 768px"
> Source: ITEM 71 (extract-d01-d03.md, VA L162) — "eliminates Playwright contention, enables parallel auditors"
> Source: ITEM 82 (extract-d09-d11.md, VA L889) — "Screenshots at 3 viewports"

**The orchestrator (team lead) captures ALL screenshots BEFORE spawning any PA auditors.**

This is a proven pattern (Mode 4 PA: 102 screenshots, 9 agents parallel, zero contention).

### 2.1.1 Expected Screenshot Count

**Minimum:** ~24 screenshots (3 viewports x [1 cold look + ~7 scroll shots at 80% viewport-height steps]).
**Typical:** 30-40 screenshots (minimum + detail shots for dense sections, component close-ups, or areas flagged during cold look).
**Historical reference:** Gas Town Mode 4 PA captured 102 screenshots (36 core + 66 detail shots). Detail shots are captured at orchestrator discretion for complex pages.

### 2.2 Capture Sequence

For each of 3 viewport widths (1440px, 1024px, 768px):

1. **Cold Look** — 1 full-page screenshot at viewport top (no scrolling)
2. **Scroll-Through** — Sequential screenshots at 80% viewport-height steps, covering the entire page
3. **Disable animations first:** `animation: none !important; opacity: 1 !important;`
4. **Wait for fonts:** `document.fonts.ready` is CRITICAL before capturing

### 2.3 File Naming Convention

```
screenshots/
  1440/
    cold-look.png
    scroll-01.png
    scroll-02.png
    ...
  1024/
    cold-look.png
    scroll-01.png
    ...
  768/
    cold-look.png
    scroll-01.png
    ...
```

### 2.4 Auditor Screenshot-Reading Protocol

Auditors receive file paths to saved PNG screenshots and use the Read tool (which renders images visually). They CANNOT interact with the page.

**Workflow:**
1. Receive file paths
2. Read each screenshot using Read tool
3. Apply Cold Look Protocol to cold-look screenshots independently
4. Read scroll-through screenshots in sequence
5. Apply Zone Sweep (5 dimension passes) on scroll-through sequence
6. Answer assigned questions using evidence from screenshots

**Key rule:** Assessment is purely VISUAL. Describe what you SEE using perceptual language ("The background shifts from warm cream to cooler gray") not CSS language ("background-color changes from #FEF9F5 to #F0EBE3").

---

## 3. FRESH-EYES PRINCIPLE (NON-NEGOTIABLE)

> Source: perceptual-auditing/SKILL.md, line 46-48

**PA auditors MUST be context-starved.** Do NOT provide:
- Mechanism counts
- Pattern names
- Build plan details
- Prior experiment results
- Tier 5 expected scores
- Compositional stack theory

If the auditor knows "this should have 12 mechanisms," they will see 12 mechanisms everywhere.

**Zero context = genuine first impressions.**

The auditor receives ONLY:
1. The rendered page (saved screenshots)
2. The PA questions
3. Nothing else

### 3.1 The One Rule

> "React to what you see before you check what you know."

If an agent's first action after taking a screenshot is opening a CSS file, the skill has failed.
If an agent's first action is describing what they SEE and FEEL, the skill is working.

### 3.2 The Three Laws

1. The answer must require a screenshot (not answerable from source code alone)
2. The answer must be describable in plain language (no CSS vocabulary)
3. A non-designer must be able to validate the answer

---

*End of PA Deployment artifact. Split from artifact-pa-protocol-MONOLITHIC.md.*
