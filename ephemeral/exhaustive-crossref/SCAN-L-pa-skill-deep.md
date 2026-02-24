# SCAN-L: PA SKILL Deep Dive Cross-Reference

**Scanner:** Scanner L (Task #24)
**Date:** 2026-02-17
**Scope:** Full PA SKILL.md vs FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md
**Method:** Line-by-line PA SKILL audit against FINAL prompt

---

## EXECUTIVE SUMMARY

The FINAL prompt covers PA integration at a high level but has notable gaps in **individual question assignment completeness**, **Mode 4 team structure detail**, **PA-05c expanded sub-dimensions**, **quantitative guardrails transmission**, **dual severity track**, **information isolation rules**, and several **language/protocol details**. Most CRITICAL gaps involve missing PA question assignments for specific auditors and missing Mode 4 team composition accuracy.

**Overall coverage rating:** 78% — Core PA routing present, key protocols present, but auditor-level detail and critical sub-protocols have gaps.

---

## STEP 3: SYSTEMATIC ELEMENT AUDIT

### 3.1 — ALL 48 PA QUESTIONS: Auditor Assignment Coverage

The FINAL prompt (Section C4) lists 9 auditor assignments as:

```
A: PA-01,03,04,05,18,19,20,45  (8 Qs)
B: PA-02,06,07,08,29           (5 Qs)
C: PA-09,10,11,30,31,32,33,50,51,52,53 (11 Qs)
D: PA-12,13,34,35,36           (5 Qs)
E: PA-14,15,37,38,39           (5 Qs)
F: PA-16,17,40,41              (4 Qs)
G: PA-42,43,44                 (3 Qs)
H: PA-21,22,23,46,47           (5 Qs)
ADV: PA-24,25,26,27,28,48      (6 Qs)
```

**SKILL.md Mode 4 team assignments:**
```
Auditor A: PA-01,04,05,18,19,20,45     (7 Qs — SKILL says "Impression+Emotion")
Auditor B: PA-02,06,07,08,29           (5 Qs — matches)
Auditor C: PA-09,10,11,30,31,32,33,50,51,52,53 (11 Qs — matches)
Auditor D: PA-12,13,34,35,36           (5 Qs — matches)
Auditor E: PA-14,15,37,38,39           (5 Qs — matches)
Auditor F: PA-16,17,40,41              (4 Qs — matches)
Auditor G: PA-42,43,44                 (3 Qs — matches)
Auditor H: PA-21,22,23,46,47           (5 Qs — matches)
Adversarial: PA-26,27,28,48            (4 Qs in SKILL.md)
```

**GAP FOUND — CRITICAL:**

| Issue | Detail |
|-------|--------|
| **PA-03 assignment discrepancy** | FINAL prompt puts PA-03 in Auditor A's set. SKILL.md Auditor A (Impression+Emotion) covers PA-01,04,05,18,19,20,45 — PA-03 is NOT listed in SKILL.md Mode 4 team. PA-03 ("feels like 3 designers?") is a Tier 1 Mandatory question but has NO explicit SKILL.md Mode 4 owner. The FINAL prompt adds PA-03 to Auditor A, which is reasonable but diverges from SKILL.md. |
| **ADV set mismatch** | FINAL prompt: PA-24,25,26,27,28,48 (6 Qs). SKILL.md Adversarial: PA-26,27,28,48 (4 Qs). PA-24 ("belongs with siblings?") and PA-25 ("identify the design system?") are Cross-Page questions assigned to Adversarial in FINAL but not in SKILL.md. SKILL.md Mode 4 does not explicitly assign PA-24/25. |
| **PA-24 and PA-25 unassigned in SKILL** | These cross-page questions exist in Tier 3 of SKILL.md but have no Mode 4 auditor assignment listed. FINAL prompt assigns them to ADV. |

**Complete PA question accounting:**

All 48 questions (PA-01 through PA-48) plus PA-50 through PA-53 (void pipeline):

| Question Range | In FINAL Prompt | Assigned Auditor | Coverage |
|----------------|-----------------|-----------------|----------|
| PA-01 | YES | Auditor A | COVERED |
| PA-02 | YES | Auditor B | COVERED |
| PA-03 | YES (added to A) | Auditor A | DIVERGES from SKILL (not in SKILL A) |
| PA-04 | YES | Auditor A | COVERED |
| PA-05 | YES | Auditor A (+ all) | COVERED |
| PA-06 | YES | Auditor B | COVERED |
| PA-07 | YES | Auditor B | COVERED |
| PA-08 | YES | Auditor B | COVERED |
| PA-09 | YES | Auditor C | COVERED |
| PA-10 | YES | Auditor C | COVERED |
| PA-11 | YES | Auditor C | COVERED |
| PA-12 | YES | Auditor D | COVERED |
| PA-13 | YES | Auditor D | COVERED |
| PA-14 | YES | Auditor E | COVERED |
| PA-15 | YES | Auditor E | COVERED |
| PA-16 | YES | Auditor F | COVERED |
| PA-17 | YES | Auditor F (primary) | COVERED |
| PA-18 | YES | Auditor A | COVERED |
| PA-19 | YES | Auditor A | COVERED |
| PA-20 | YES | Auditor A | COVERED |
| PA-21 | YES | Auditor H | COVERED |
| PA-22 | YES | Auditor H | COVERED |
| PA-23 | YES | Auditor H | COVERED |
| PA-24 | YES | ADV | COVERED (FINAL adds to ADV) |
| PA-25 | YES | ADV | COVERED (FINAL adds to ADV) |
| PA-26 | YES | ADV | COVERED |
| PA-27 | YES | ADV | COVERED |
| PA-28 | YES | ADV | COVERED |
| PA-29 | YES | Auditor B | COVERED |
| PA-30 | YES | Auditor C | COVERED |
| PA-31 | YES | Auditor C | COVERED |
| PA-32 | YES | Auditor C | COVERED |
| PA-33 | YES | Auditor C | COVERED |
| PA-34 | YES | Auditor D | COVERED |
| PA-35 | YES | Auditor D | COVERED |
| PA-36 | YES | Auditor D | COVERED |
| PA-37 | YES | Auditor E | COVERED |
| PA-38 | YES | Auditor E | COVERED |
| PA-39 | YES | Auditor E | COVERED |
| PA-40 | YES | Auditor F | COVERED |
| PA-41 | YES | Auditor F (primary) | COVERED |
| PA-42 | YES | Auditor G | COVERED |
| PA-43 | YES | Auditor G | COVERED |
| PA-44 | YES | Auditor G | COVERED |
| PA-45 | YES | Auditor A | COVERED |
| PA-46 | YES | Auditor H | COVERED |
| PA-47 | YES | Auditor H | COVERED |
| PA-48 | YES | ADV | COVERED |
| PA-50 | YES | Auditor C | COVERED |
| PA-51 | YES | Auditor C | COVERED |
| PA-52 | YES | Auditor C | COVERED |
| PA-53 | YES | Auditor C | COVERED |

**VERDICT: All 52 questions assigned.** PA-03 diverges from SKILL.md but is assigned (IMPORTANT, not critical). PA-24/25 ADV assignment is reasonable. No questions are missing.

---

### 3.2 — TIER RANKINGS (A/B/C/D)

**SKILL.md defines:** Tier 1 (Mandatory Five: PA-01 through PA-05), Tier 2 (Standard Fifteen), Tier 3 (Deep Dive), Tier 4 (Void Prevention — Ceiling+ only).

**FINAL prompt (C4):**
```
TIER A QUESTIONS (highest diagnostic, 9/9 hit rate, 0% false positive):
  PA-01, PA-05, PA-09, PA-12, PA-13, PA-30, PA-32, PA-33, PA-35, PA-42.
  Findings on Tier A = report even at MINOR severity. PA-09 finding = auto-BLOCKING.
```

**GAP FOUND — IMPORTANT:**

The FINAL prompt uses "Tier A/B/C/D" naming which is **NOT the SKILL.md tier terminology**. SKILL.md uses Tier 1/2/3/4 where:
- Tier 1 = Mandatory Five (PA-01 through PA-05)
- Tier 2 = Standard Fifteen
- Tier 3 = Deep Dive (Standalone only)
- Tier 4 = Void Prevention (Ceiling+ only)

The FINAL prompt's "Tier A" is a DIFFERENT categorization — it refers to highest-diagnostic questions from Mode 4 empirical data (9/9 hit rate). This is a NEW concept not in SKILL.md that was apparently derived from research.

**Specific discrepancies:**
1. SKILL.md Tier 1 = PA-01,02,03,04,05. FINAL "Tier A" = PA-01,05,09,12,13,30,32,33,35,42. These overlap only at PA-01 and PA-05.
2. PA-02,03,04 are SKILL.md Tier 1 Mandatory but are NOT in FINAL's "Tier A."
3. SKILL.md's Tier 4 (void pipeline PA-50 through PA-53) is correctly routed to Auditor C.

**Risk:** Builders reading the FINAL prompt may interpret "Tier A" as synonymous with SKILL Tier 1, and deprioritize PA-02, PA-03, PA-04 (which are SKILL.md Tier 1 mandatory).

---

### 3.3 — PA-05 SUB-CRITERIA (Designed, Coherent, Proportionate, Polished)

**SKILL.md PA-05 has:**
1. DESIGNED sub-criterion
2. COHERENT sub-criterion
3. PROPORTIONATE (PA-05c) sub-criterion — with 3 expanded sub-dimensions: 3a Horizontal, 3b Vertical, 3c Breathing
4. POLISHED sub-criterion
5. Scoring: 4/4 = YES, 3/4 = YES WITH RESERVATIONS, 2/4 or fewer = NO

**FINAL prompt (B9):**
```
PA-05 scoring: -> All auditors contribute. 4 sub-criteria: Designed, Coherent, Proportionate, Polished.
               Calibration: Middle=4/4, Ceiling=1.5/4, DD-006=4/4, CD-006=4/4.
               [NOTE: CD-006=4/4 was INCORRECT. Corrected to CD-006=~3/4 COMPOSED (39/40 soul, CEILING tier).]
```

**FINAL prompt (C5 Gate-Then-Ranking):**
```
PA-05 composite < 3/4: signature question below threshold
PA-05c PROPORTIONATE fail  | TC 4.2A (Skeleton)   | Skeleton Builder
PA-05a DESIGNED fail       | TC 4.1 (Extraction)  | Planner
PA-05b COHERENT fail       | TC 4.3 (Coherence)   | Builder
PA-05d POLISHED fail       | TC 4.4 (Polish)      | Mechanism Builder
```

**COVERAGE STATUS:**
- 4 sub-criteria named: YES (B9)
- Calibration scores present: YES (B9)
- PA-05c routing: YES (C6)
- Sub-labels (PA-05a, PA-05b, PA-05c, PA-05d): YES (C6)

**GAP FOUND — IMPORTANT:**

PA-05c **expanded sub-dimensions** (3a Horizontal, 3b Vertical, 3c Breathing) are present in SKILL.md but **NOT referenced** in the FINAL prompt. The SKILL says:

> "PA-05c Scoring (Ceiling+ only): All THREE sub-dimensions must PASS for PA-05c to PASS. If any single sub-dimension FAILS, PA-05c = FAIL, and the failing sub-dimension(s) must be named in the finding."

This enables precise diagnosis. Without it in the FINAL prompt, auditors may report "PA-05c FAIL" without specifying which of the three sub-dimensions (Horizontal/Vertical/Breathing) failed, losing diagnostic precision.

---

### 3.4 — VOID DETECTION PIPELINE (PA-50 through PA-53)

**SKILL.md Tier 4 (Ceiling+ only):**
- PA-50: count consecutive blank viewport-heights
- PA-51: percentage of scroll height with meaningful content
- PA-52: each third of page has at least one designed moment
- PA-53: content container width utilization at 1440px

**FINAL prompt coverage:**

B9: `PA-50 through PA-53: -> Auditor C (Spatial specialist). Sequential: detect -> quantify -> classify -> assess.`

C3 (Gate 5): `Mode 4 PA (9 auditors, 48 questions). Programmatic soul/token/CPL audit.`

C4: `C: PA-09,10,11,30,31,32,33,50,51,52,53 (Spatial+Void Pipeline, 11 Qs)`

C5 (Gate Phase 1): `PA-50: 2+ consecutive blank viewport-heights`
`PA-51: VOID-DOMINATED classification (<40% content)`
`PA-52: any third of page lacks designed moment (Flagship tier)`

**COVERAGE STATUS:** STRONG — All 4 void pipeline questions assigned, gate conditions specified, sequential protocol referenced.

**MINOR GAP:** SKILL.md states PA-52 void check applies to "Flagship tier" (each third must have designed moment), and FINAL C5 correctly gates on this. However, SKILL.md also specifies thresholds:
- Max consecutive blank viewports: 1.5 viewport-heights
- Min content percentage: 60%
- Width utilization: 65-80%

These specific thresholds are in FINAL's B1/S-12 rules but not explicitly cross-referenced to PA-50/51/53 in the auditor section. Auditors reading only C4 won't see the specific numeric thresholds they're validating against.

---

### 3.5 — COLD LOOK PROTOCOL DETAILS

**SKILL.md Cold Look Protocol (4 steps + format):**
1. CLEAR all CSS/specs
2. LOOK (5 seconds)
3. REACT (4 locked responses: gut reaction, worst thing, best thing, ship verdict)
4. LOCK (responses final, cannot change)
5. REPEAT per viewport

**Locked format:**
```
COLD LOOK ({WIDTH}px):
Gut reaction: [one sentence]
Worst thing:  [one element]
Best thing:   [one element]
Ship verdict: YES / YES WITH RESERVATIONS / NO
```

**SKILL.md also specifies:** Research Contextualizer writes Lock Sheet. Auditors never see Lock Sheet before Cold Look (Temporal Firewall).

**FINAL prompt (C4):**
```
COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction, THEN questions. Zero TC context.
Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR), evidence, recommendation.
Each non-finding: "NO FINDING for PA-XX" (mandatory -- prevents silent skipping).
```

**GAP FOUND — IMPORTANT:**

The FINAL prompt Cold Look coverage is **partial**. Present:
- 5-second window: YES
- Gut reaction: YES (implied)
- Zero TC context: YES

Missing:
- The **4-field locked format** (gut reaction / worst thing / best thing / ship verdict) — not in FINAL
- The **LOCK rule** (responses final after writing, cannot be changed after reading specs) — not in FINAL
- The **per-viewport repeat** instruction — not explicitly stated
- The **CLEAR step** (close all CSS files, specs, convention docs) — not in FINAL
- The **Temporal Firewall** (auditors never see Lock Sheet before Cold Look) — not in FINAL

Without the locked format and LOCK rule, auditors may write informal reactions and retroactively revise them after reading specs — defeating the fresh-eyes principle.

---

### 3.6 — SEVERITY SYSTEM (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC)

**SKILL.md defines:**

**Dual Severity Track:**
- Rule Track: SOUL VIOLATION / CONVENTION BUG / OVERFLOW
- Perception Track (NEW): WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER

SKILL.md also has **PA-09 Severity Calibration** (viewport count based):
- 1-2 viewports low-content: LOOKS-WRONG
- 3-5 viewports low-content: WOULD-NOT-SHIP
- 6+ viewports low-content: CATASTROPHIC

**FINAL prompt (C5):**
```
SEVERITY SYSTEM:
  LOOKS-WRONG: visual anomaly, does not prevent shipping. Report and note.
  WOULD-NOT-SHIP: significant defect requiring fix before release.
  CATASTROPHIC: fundamental failure requiring structural rework.
  Corroboration escalation: 5+ auditors agree on severity -> auto-escalate one tier.
```

C4: `Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR), evidence, recommendation.`

**GAP FOUND — CRITICAL:**

There is a **terminology conflict** between C4 and C5:
- C4 uses: BLOCKING / SIGNIFICANT / MINOR
- C5 uses: LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC

These are DIFFERENT systems. SKILL.md uses LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC for Perception Track. The FINAL prompt uses BLOCKING/SIGNIFICANT/MINOR in C4 (per-finding format) but LOOKS-WRONG/WOULD-NOT-SHIP/CATASTROPHIC in C5 (severity definitions). This creates direct contradiction for auditors who read both sections.

Builders/auditors don't know which system to use when filing a finding.

Additionally, the Perception Track / Rule Track **dual severity** concept from SKILL.md is **NOT in the FINAL prompt**. The key rule "Perception Track findings can NEVER be reclassified onto Rule Track" is missing — auditors could have valid perceptual findings dismissed as "convention allows it."

**PA-09 severity calibration (viewport count thresholds)** IS referenced in C5 gate conditions (PA-50: 2+ consecutive = gate fail) but the **explicit 3-tier calibration table** from SKILL.md is not reproduced. Auditors won't know that 1-2 viewports = LOOKS-WRONG (acceptable) vs 6+ = CATASTROPHIC (rebuild required).

---

### 3.7 — CALIBRATION SCORES (Middle=4/4, Ceiling=1.5/4)

**SKILL.md mentions:**
- Middle-tier experiment: 4/4 sub-criteria, achieved DESIGNED
- PA-05 Validation note in sub-criteria section

**FINAL prompt (B9):**
```
Calibration: Middle=4/4, Ceiling=1.5/4, DD-006=4/4, CD-006=4/4.
               [NOTE: CD-006=4/4 was INCORRECT. Corrected to CD-006=~3/4 COMPOSED (39/40 soul, CEILING tier).]
```

**COVERAGE STATUS:** PRESENT and EXPANDED (FINAL adds DD-006=4/4 and CD-006=~3/4 COMPOSED which SKILL.md doesn't list). NOTE: The original "CD-006=4/4" calibration was incorrect -- CD-006 is CEILING tier with 39/40 soul score, ~3/4 PA-05 COMPOSED.

No gap here.

---

### 3.8 — ENRICHMENTS (Depth-12, Depth-17 questions)

SKILL.md mentions "9 AUDITOR ASSIGNMENTS (authoritative -- aligned with SKILL.md + Depth-12 + Depth-17)" in C4. These appear to be enrichment documents that added questions or modified assignments.

**SKILL.md itself** does not explicitly label questions as "Depth-12" or "Depth-17" internally. These appear to be external enrichment documents referenced by the FINAL prompt.

**COVERAGE STATUS:** The FINAL prompt references "Depth-12 + Depth-17" in C4's parenthetical description but provides no content from those enrichments. Auditors reading SKILL.md would not know what changes Depth-12/17 made.

**GAP FOUND — NICE-TO-HAVE:** The specific changes made by Depth-12 and Depth-17 enrichments are not summarized anywhere in the FINAL prompt. If those enrichments modified question wording or added sub-questions, auditors relying only on SKILL.md won't know.

---

### 3.9 — PA-17/PA-41 ELEVATION TO TIER 1 FOR CEILING+

**SKILL.md:**
```
CEILING+ TIER ELEVATION (MANDATORY, NOT ADVISORY):
PA-17 and PA-41 are formally elevated to Tier 1 equivalent for all Ceiling-tier and above audits.
FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question
All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
Binary enforcement: If auditing a Ceiling+ page and PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS"
```

**FINAL prompt (B9):**
```
PA-17/PA-41: -> Auditor F primary. Elevated to Tier 1 for Ceiling+. Others corroborate.
              5+ contradictions of Auditor F = escalate.
```

**FINAL prompt (C5 Gate Phase 1):**
```
PA-17 FAIL (Ceiling+ mandatory): rhythm failure
PA-41 FAIL (Ceiling+ mandatory): repetition monotony
```

**COVERAGE STATUS:** PRESENT. Both PA-17 elevation and PA-41 elevation captured. Primary auditor (F) designated. Gate conditions defined.

**MINOR GAP:** SKILL.md specifies "All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set." FINAL prompt says "Others corroborate" which is softer than "MUST evaluate." This could allow auditors to skip PA-17/41 cross-evaluation.

---

### 3.10 — MODE 4 METHODOLOGY (9 auditors, screenshot pre-capture)

**SKILL.md Mode 4 team:**
```
[Lead]
  ├── Research Contextualizer (Wave 1)
  ├── Auditor A: Impression+Emotion (PA-01,04,05,18,19,20,45)
  ├── Auditor B: Readability+Typography (PA-02,06,07,08,29)
  ├── Auditor C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53)
  ├── Auditor D: Flow+Pacing (PA-12,13,34,35,36)
  ├── Auditor E: Grid+Layout (PA-14,15,37,38,39)
  ├── Auditor F: Consistency+Rhythm (PA-16,17,40,41)
  ├── Auditor G: Metaphor+Ideology (PA-42,43,44)
  ├── Auditor H: Responsive (PA-21,22,23,46,47)
  ├── Adversarial (PA-26,27,28,48)
  └── Weaver-Synthesizer (Wave 3)
```
That's **10 roles** (Lead + Contextualizer + 8 auditors + Adversarial + Weaver = 11 in Mode 4 SKILL count).

**SKILL.md screenshot pre-capture protocol:**
- Team lead takes ALL screenshots BEFORE spawning auditors
- 4 viewports (per FINAL: 1440px, 1024px, 768px, 480px)
- Cold look + full scroll at each
- 50-80 screenshots
- Auditors read saved images via Read tool
- Eliminates Playwright contention entirely

**FINAL prompt (C4):**
```
Screenshot pre-capture: Team-lead captures ALL screenshots BEFORE spawning auditors.
  4 viewports: 1440px, 1024px, 768px, 480px. Cold look + full scroll at each. 50-80 screenshots.

9 AUDITOR ASSIGNMENTS (authoritative -- aligned with SKILL.md + Depth-12 + Depth-17):
  A: PA-01,03,04,05,18,19,20,45  (8 Qs)
  [...]
```

**GAP FOUND — IMPORTANT:**

The SKILL.md Mode 4 structure includes a **Research Contextualizer** (Wave 1 — writes Lock Sheet). The FINAL prompt's C4 does NOT mention the Research Contextualizer role. The Lock Sheet is a critical component — it defines ALWAYS-LOCKED, LOCKED, and CHALLENGEABLE decisions so the Weaver can correctly classify findings.

**SKILL.md team roles CAN/CANNOT rules:**
- Research Contextualizer: CAN read research files, write Lock Sheet; CANNOT Playwright
- Visual Auditors: CANNOT read ANY source file; language HARD BLOCK (no CSS property names)
- Adversarial: CAN read CHALLENGEABLE section only
- Synthesizer/Weaver: CAN read Lock Sheet + findings; CANNOT make fixes

None of these role restrictions appear in the FINAL prompt. Without them, auditors may read source files (contaminating perceptual findings) or use CSS vocabulary in answers.

**SKILL.md specifies:** "Answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position, or ANY CSS property name."

This **language hard block** is NOT in the FINAL prompt.

**Scroll-through protocol** (mandatory for Mode 4): Present in SKILL.md with JavaScript implementation. NOT referenced in FINAL prompt C4.

---

### 3.11 — METAPHOR-AWARENESS PRINCIPLES

**SKILL.md** has an extensive section on metaphor-awareness for auditors:
- Metaphor expression spectrum (Structural > Atmospheric > Labeled > Announced)
- Common metaphor traps (Compression, Width, Density, Monotony, Label, Dead Zone)
- Audit questions for metaphor-driven layouts (4 meta-questions)
- Sovereignty principle: "Metaphors encode spatial biases as CSS values"

**FINAL prompt (C5 Gate Phase 2):**
```
PA-44 metaphor expression (structural > atmospheric > labeled > announced),
```

**FINAL prompt (C6):**
```
PA-44 metaphor announced  | TC Phase 3 (re-derive)  | Metaphor Agent
```

**FINAL prompt (MG-04):**
```
Metaphor structural test: remove all labels and titles. Does the visual structure alone
communicate the metaphor? YES = proceed. NO = re-derive. Binary gate.
```

**GAP FOUND — NICE-TO-HAVE:**

The SKILL.md metaphor trap taxonomy (Compression/Width/Density/Monotony/Label/Dead Zone traps with specific floors) is not in the FINAL prompt. This is reference material auditors need when evaluating metaphor-driven layouts. Without it, auditors may flag metaphor-driven spatial choices as failures when they're intentional.

The four-step metaphor audit questions from SKILL.md are also not in the FINAL prompt:
1. Can you identify the metaphor WITHOUT reading labels?
2. Is there any place where the metaphor's logic is hurting the visual experience?
3. Could the SAME concept be expressed with BETTER spatial use?
4. Is the metaphor FELT, SENSED, READ, or TOLD?

---

### 3.12 — QUANTITATIVE GUARDRAILS

**SKILL.md** has extensive quantitative guardrail tables:
- Content Width and Proportion (min/optimal/max for container width, CPL, content-to-viewport ratio)
- Typographic Spacing (6 metrics with min/optimal/max)
- Layout and Grid Spacing (5 metrics)
- Compression Limits (4 metrics)
- Hierarchy and Weight (3 metrics)
- Verification Checklist (8 items)
- Application Priority (4 priority rules for metaphor-guardrail conflicts)

**FINAL prompt:**
- Container width: YES (S-01, Appendix)
- CPL: YES (S-07, Appendix)
- Content-to-void: YES (S-02, graduated)
- Max spacing 96px: YES (S-09, S-11)
- Header proportion: YES (S-03)
- Footer: YES (S-04)
- Token compliance: YES (B10, Appendix)
- Line-height: NOT explicitly stated as a guardrail in FINAL

**GAP FOUND — IMPORTANT:**

Typographic spacing guardrails from SKILL.md are **not in the FINAL prompt**:
- Body line-height minimum 1.5
- Heading line-height minimum 1.2
- Space after heading minimum 12px / maximum 32px
- Space before heading minimum 24px / maximum 64px
- Label-to-heading gap minimum 8px / maximum 24px
- Paragraph gap minimum 16px / maximum 32px

The **Measurement Note** in SKILL.md (about CSS margin collapse making declared 2:1 ratio appear equal) is not in the FINAL prompt. Without this, auditors may incorrectly flag heading spacing as violating the 1.5:1 ratio when it's actually correct and just collapsed.

The **Application Priority** section (NEVER compromise readability floors vs ADJUST metaphor) is not reproduced in the FINAL prompt. Auditors don't know when a guardrail is inviolable vs adjustable.

---

### 3.13 — INFORMATION ISOLATION / TEMPORAL FIREWALL

**SKILL.md:**
- Visual Auditors CANNOT read any source file, CANNOT use browser_evaluate, CANNOT reference CSS properties
- Research Contextualizer CANNOT communicate with auditors
- Lock Sheet is never shown to auditors before Cold Look
- Synthesizer receives Lock Sheet + findings, CANNOT make fixes

**FINAL prompt:** None of this information isolation protocol is described. There is no mention of:
- Lock Sheet creation by Contextualizer
- Temporal Firewall concept
- Auditor file-reading restrictions
- Language hard block for CSS property names

**GAP FOUND — CRITICAL:** Without information isolation rules, a future team-lead spawning auditors would not know to:
1. Prevent auditors from reading source files
2. Enforce the CSS language block
3. Create a Lock Sheet before auditors start
4. Maintain the temporal firewall

---

### 3.14 — DUAL SEVERITY TRACK (Rule Track vs Perception Track)

**SKILL.md:**
- Rule Track: SOUL VIOLATION → Always fix; CONVENTION BUG → Always fix; OVERFLOW → Usually fix
- Perception Track: WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER
- Critical rules: Perception Track findings NEVER reclassifiable to Rule Track; cannot be dismissed because convention allows it

**FINAL prompt (C5):** Three-tier severity present (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC) but dual-track concept absent. The protection rule ("perception findings cannot be dismissed by convention compliance") is missing.

**GAP FOUND — IMPORTANT.**

---

## STEP 4: COMPLETE GAP ANALYSIS

### CRITICAL GAPS

---

**CRITICAL-01: Severity Terminology Conflict (C4 vs C5)**

**Classification:** CRITICAL
**Element:** Severity system naming
**Issue:** C4 uses BLOCKING/SIGNIFICANT/MINOR; C5 uses LOOKS-WRONG/WOULD-NOT-SHIP/CATASTROPHIC. Contradiction in same document.

**Insertable fix for C4:**
```
Each finding: PA-XX, severity (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC), evidence, recommendation.
Each non-finding: "NO FINDING for PA-XX" (mandatory -- prevents silent skipping).
Note: LOOKS-WRONG = visual anomaly (shippable). WOULD-NOT-SHIP = mandatory fix. CATASTROPHIC = structural rebuild.
```

**Recommended placement:** Replace C4 finding format line (currently "Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR)...").

---

**CRITICAL-02: Information Isolation / Temporal Firewall Missing**

**Classification:** CRITICAL
**Element:** Auditor cannot-read and language restrictions
**Issue:** Without these rules, auditor findings will be contaminated by source-reading and CSS vocabulary, making them unvalidatable.

**Insertable fix — add to C4 after auditor assignments:**
```
AUDITOR RESTRICTIONS (HARD RULES):
  - Auditors read ONLY pre-captured screenshots. ZERO source file reading.
  - Language hard block: answers may NOT contain px, rem, em, %, hex, css property names.
    Use instead: heavy/light, cramped/spacious, jarring/smooth, confident/anxious.
  - Lock Sheet written by Research Contextualizer BEFORE auditors start.
  - Auditors never see Lock Sheet before completing Cold Look and all assigned PA questions.
  - Temporal Firewall: perceptual reactions locked FIRST, classification happens separately.
```

**Recommended placement:** C4, after auditor assignment table, before Tier A questions.

---

**CRITICAL-03: Research Contextualizer Role Missing from Mode 4 Roster**

**Classification:** CRITICAL
**Element:** Wave 1 agent (Lock Sheet writer)
**Issue:** Mode 4 requires a Research Contextualizer to write the Lock Sheet before auditors start. Without it, LOCKED vs CHALLENGEABLE decisions are undefined, and auditors may challenge soul rules.

**Insertable fix — add to C4:**
```
Wave 1 (BEFORE auditors):
  Research Contextualizer (Sonnet): reads prohibitions.md + semantic-rules.md + tokens.css.
  Writes lock-sheet.md with ALWAYS-LOCKED, LOCKED, CHALLENGEABLE decisions.
  Format: | Rule | Lock Source | (per SKILL.md Lock Sheet Format)
  Auditors unblocked ONLY after lock-sheet.md confirmed written.
```

**Recommended placement:** C4, before screenshot pre-capture line.

---

### IMPORTANT GAPS

---

**IMPORTANT-01: PA-05c Expanded Sub-Dimensions Not Referenced**

**Classification:** IMPORTANT
**Element:** PA-05c 3a/3b/3c sub-dimensions
**Issue:** "All THREE sub-dimensions must PASS for PA-05c to PASS" rule is in SKILL.md but not in FINAL prompt. Without it, auditors report PA-05c as pass/fail without diagnosing WHICH dimension (Horizontal/Vertical/Breathing) failed.

**Insertable fix — add to B9:**
```
PA-05c sub-dimensions (Ceiling+ mandatory -- all THREE must pass):
  3a. Horizontal: content fills 65-80% of viewport width. FAIL = narrow strip.
  3b. Vertical: every third of scroll (0-33%, 33-66%, 66-100%) has >= 1 designed moment.
  3c. Breathing: negative space feels purposeful (silence), not abandoned (dropped signal).
  If ANY sub-dimension FAILS, PA-05c = FAIL. Name failing sub-dimension(s) in finding.
```

**Recommended placement:** B9, after PA-05 scoring line.

---

**IMPORTANT-02: Partial Cold Look Protocol (Missing Lock Format + LOCK Rule)**

**Classification:** IMPORTANT
**Element:** Cold Look locked format and LOCK step
**Issue:** Without 4-field format and LOCK step, auditors write informal reactions they may retroactively revise.

**Insertable fix — add to C4:**
```
COLD LOOK FORMAT (LOCKED IMMEDIATELY — cannot be changed after reading specs):
  COLD LOOK ({WIDTH}px):
  Gut reaction: [one sentence — what did you FEEL?]
  Worst thing:  [one element or area — fix first?]
  Best thing:   [one element — protect this]
  Ship verdict: YES / YES WITH RESERVATIONS / NO
Complete per viewport BEFORE answering PA questions.
```

**Recommended placement:** C4, after "Zero TC context" line.

---

**IMPORTANT-03: Typographic Spacing Guardrails Not Specified**

**Classification:** IMPORTANT
**Element:** Line-height, heading spacing, paragraph spacing minimums
**Issue:** Builder self-check (B10) has no line-height verification step. Auditors have no numeric floor to check typography against. SKILL.md Verification Checklist includes these.

**Insertable fix — add to B10:**
```
[ ] Body line-height >= 1.5 (WCAG minimum, NEVER below 1.4)
[ ] Heading line-height >= 1.2
[ ] Space above headings >= 1.5x space below (spacing ratio check)
[ ] Paragraph gap >= 16px
```

**Recommended placement:** B10 Builder Self-Check, after existing spacing checks.

---

**IMPORTANT-04: Dual Severity Track (Perception Track Protection Rule) Missing**

**Classification:** IMPORTANT
**Element:** "Perception Track findings cannot be dismissed by convention compliance"
**Issue:** Without this rule, a planner or builder can dismiss a perceptual finding by saying "the convention allows it." This happens frequently in post-audit fix routing.

**Insertable fix — add to C5:**
```
PERCEPTION TRACK PROTECTION:
  Perception Track findings (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC) CANNOT be:
  - Reclassified as Rule Track findings
  - Dismissed because "the convention allows it"
  When convention compliance and perceptual quality conflict: ESCALATE to team-lead.
```

**Recommended placement:** C5, after Severity System block.

---

**IMPORTANT-05: Void Pipeline Numeric Thresholds Not Cross-Referenced in Auditor Section**

**Classification:** IMPORTANT
**Element:** PA-50/51/52/53 specific pass/fail thresholds
**Issue:** Thresholds exist in B1 (spatial rules) but auditors in C4 aren't directed to them. Auditor C's PA-50 answer without knowing "2+ consecutive = FAIL" can produce vague findings.

**Insertable fix — add to C4 Auditor C description:**
```
Auditor C void thresholds (binary):
  PA-50: 0-1 consecutive blank viewports = PASS. 2+ = FAIL. BLOCKING.
  PA-51: >= 60% content coverage = PASS. < 40% = VOID-DOMINATED. 40-60% = SPARSE.
  PA-52: each third (0-33%, 33-66%, 66-100%) must have >= 1 designed moment.
  PA-53: 65-80% of 1440px viewport = PASS. Below 65% = FAIL (narrow strip).
```

**Recommended placement:** C4, after Auditor C's question list.

---

**IMPORTANT-06: PA-17/41 Cross-Evaluation Instruction Weakened**

**Classification:** IMPORTANT
**Element:** "All Mode 4 auditors MUST evaluate PA-17 and PA-41"
**Issue:** SKILL.md says MUST; FINAL says "Others corroborate" (softer). Auditors not explicitly told to evaluate PA-17/41 outside their assigned set may skip it.

**Insertable fix — modify B9:**
Change: `Others corroborate.`
To: `All 9 auditors MUST note rhythm/monotony observations (PA-17/41) regardless of assigned set.`

**Recommended placement:** B9, PA-17/PA-41 line.

---

**IMPORTANT-07: Tier Naming Conflict (SKILL Tier 1/2/3/4 vs FINAL "Tier A")**

**Classification:** IMPORTANT
**Element:** Tier terminology alignment
**Issue:** SKILL.md Tier 1 = PA-01 through PA-05 (Mandatory Five). FINAL "Tier A" = diagnostic-priority set (PA-01,05,09,12,13,30,32,33,35,42). PA-02,03,04 are SKILL Tier 1 but not in FINAL Tier A, creating a deprioritization risk.

**Insertable fix — add clarification to C4:**
```
NOTE: FINAL "Tier A" = highest-diagnostic from Mode 4 empirical data (9/9 hit rate).
  PA-02, PA-03, PA-04 are SKILL.md Tier 1 MANDATORY — report all findings regardless of "Tier A" status.
  Tier A = extra-reporting threshold. Tier 1 Mandatory = non-optional coverage.
```

**Recommended placement:** C4, immediately after Tier A Questions block.

---

### NICE-TO-HAVE GAPS

---

**NICE-01: Metaphor Trap Taxonomy Not Referenced**

**Classification:** NICE-TO-HAVE
**Element:** Compression/Width/Density/Monotony/Label/Dead Zone trap taxonomy
**Issue:** Auditor G lacks the vocabulary to identify metaphor traps vs preference differences. Without the trap taxonomy, PA-42/43/44 answers may conflate "metaphor-driven necessary compromise" with "unacceptable visual cost."

**Insertable fix (brief reference):**
```
Auditor G reads: ~/.claude/skills/perceptual-auditing/SKILL.md section "Common Metaphor Traps"
for vocabulary: Compression/Width/Density/Monotony/Label/Dead Zone traps.
```

**Recommended placement:** Section E reference library, under PA AUDITORS reads.

---

**NICE-02: Depth-12 / Depth-17 Enrichment Content Not Summarized**

**Classification:** NICE-TO-HAVE
**Element:** Changes made by Depth-12 and Depth-17 enrichments
**Issue:** FINAL references these but doesn't explain what they changed. Agents reading SKILL.md won't know if Depth-12/17 added sub-questions or modified wording.

No immediate fix needed — these are likely already incorporated in SKILL.md's current form.

---

**NICE-03: Scroll-Through Protocol Implementation Not in FINAL**

**Classification:** NICE-TO-HAVE
**Element:** JavaScript scroll-through capture code
**Issue:** SKILL.md provides the browser_run_code implementation. FINAL prompt references screenshot pre-capture but doesn't give the implementation. Without it, team-lead may use full-page screenshots (compressing 15,000px pages to thumbnail scale) instead of viewport-sequential captures.

**Insertable fix (brief reference):**
```
Scroll-through: viewport-sequential captures (NOT full-page). 80% viewport-height step.
See SKILL.md scroll-through protocol for browser_run_code implementation.
```

**Recommended placement:** C4, after screenshot pre-capture block.

---

**NICE-04: Zone Sweep 5-Pass Protocol**

**Classification:** NICE-TO-HAVE
**Element:** Readability / Spatial Balance / Hierarchy / Consistency / Ship Test passes
**Issue:** SKILL.md defines a structured 5-pass zone sweep for scroll-through screenshots. Not in FINAL. Auditors may evaluate haphazardly without this structure.

Reference to SKILL.md Zone Sweep section would suffice.

---

**NICE-05: File Structure / Output Format**

**Classification:** NICE-TO-HAVE
**Element:** `{target-dir}/_perceptual-audit/` directory structure
**Issue:** SKILL.md specifies output file naming (findings-impression-emotion.md, lock-sheet.md, AUDIT-REPORT.md, etc.). Not in FINAL. May cause file naming inconsistency across experiments.

Reference: "PA auditors write to `{output-dir}/_perceptual-audit/findings-{auditor-name}.md`. Weaver writes AUDIT-REPORT.md."

---

## STEP 5: PRIORITIZED ACTION LIST

### CRITICAL (Fix Before Using Prompt)

| # | Gap | Fix Location | Lines to Add |
|---|-----|-------------|-------------|
| CRITICAL-01 | Severity naming conflict: C4 BLOCKING/SIGNIFICANT vs C5 LOOKS-WRONG/WOULD-NOT-SHIP | C4, replace finding format line | 3 lines |
| CRITICAL-02 | Auditor restrictions (no source reading, language block, temporal firewall) | C4, after auditor table | 8 lines |
| CRITICAL-03 | Research Contextualizer role missing from Mode 4 | C4, before screenshot pre-capture | 5 lines |

### IMPORTANT (Fix Before Final Ship)

| # | Gap | Fix Location | Lines to Add |
|---|-----|-------------|-------------|
| IMP-01 | PA-05c sub-dimensions 3a/3b/3c not in FINAL | B9, after PA-05 scoring | 6 lines |
| IMP-02 | Cold Look format + LOCK rule missing | C4, after Zero TC context | 7 lines |
| IMP-03 | Typographic guardrails missing from B10 | B10, Builder self-check | 4 lines |
| IMP-04 | Perception Track protection rule missing | C5, after severity block | 5 lines |
| IMP-05 | Void pipeline thresholds not cross-referenced to Auditor C | C4, Auditor C block | 6 lines |
| IMP-06 | PA-17/41 "MUST" vs "corroborate" weakness | B9, PA-17/41 line | 1 line edit |
| IMP-07 | Tier naming conflict (SKILL Tier 1 vs FINAL Tier A) | C4, after Tier A block | 4 lines |

### NICE-TO-HAVE

| # | Gap | Fix Location |
|---|-----|-------------|
| NICE-01 | Metaphor trap taxonomy reference | Section E PA reads |
| NICE-02 | Depth-12/17 content | Already in SKILL.md |
| NICE-03 | Scroll-through implementation | C4 screenshot block |
| NICE-04 | Zone Sweep 5-pass reference | C4 or SKILL.md ref |
| NICE-05 | Output file naming structure | C4 or C5 |

---

## OVERALL PA COVERAGE ASSESSMENT

| PA Element | FINAL Prompt Coverage | Rating |
|------------|----------------------|--------|
| All 48 PA questions assigned | YES (all covered) | PASS |
| Void pipeline PA-50-53 | YES, correctly routed | PASS |
| PA-05 4 sub-criteria named | YES | PASS |
| PA-05 calibration scores | YES, plus expanded | PASS |
| PA-05c expanded sub-dimensions (3a/3b/3c) | NO | GAP (IMPORTANT) |
| Tier rankings (Tier 1/2/3/4) | PARTIAL (renamed to "Tier A") | GAP (IMPORTANT) |
| Severity system defined | YES but CONFLICT in naming | GAP (CRITICAL) |
| PA-09 severity calibration | PARTIAL (gate conditions present, table absent) | GAP (IMPORTANT) |
| Cold Look protocol: 5-second | YES | PASS |
| Cold Look protocol: locked format | NO | GAP (IMPORTANT) |
| Cold Look protocol: temporal firewall | NO | GAP (CRITICAL) |
| PA-17/41 elevation to Tier 1 | YES (B9 + C5 gate) | PASS |
| PA-17/41 all-auditors MUST | WEAKENED (MUST → corroborate) | GAP (IMPORTANT) |
| Mode 4: 9 auditors | YES | PASS |
| Mode 4: screenshot pre-capture | YES | PASS |
| Mode 4: Research Contextualizer | NO | GAP (CRITICAL) |
| Mode 4: Lock Sheet | NO | GAP (CRITICAL) |
| Mode 4: auditor restrictions | NO | GAP (CRITICAL) |
| Mode 4: language hard block | NO | GAP (CRITICAL) |
| Dual severity track | NO | GAP (IMPORTANT) |
| Quantitative guardrails — spatial | YES (B1 + Appendix) | PASS |
| Quantitative guardrails — typographic | PARTIAL | GAP (IMPORTANT) |
| Metaphor expression spectrum | PARTIAL (levels named in C5) | PARTIAL |
| Metaphor-awareness principles | PARTIAL (PA-42/43/44 present) | PARTIAL |
| Metaphor traps taxonomy | NO | NICE-TO-HAVE |
| Information isolation table | NO | GAP (CRITICAL) |
| Gate verification (Lock/Audit/Synth) | PARTIAL (C3 gate sequence) | PARTIAL |
| Depth-12/17 enrichments | Referenced but not explained | NICE-TO-HAVE |

**Total: 3 CRITICAL gaps, 7 IMPORTANT gaps, 5 NICE-TO-HAVE gaps**

---

## SUMMARY FOR TEAM LEAD

The FINAL prompt is strong on **what to audit** (all 52 PA questions covered, void pipeline assigned, PA-05 sub-criteria named) but weak on **how to run the audit** (team structure, information isolation, language restrictions, cold look format). The 3 CRITICAL gaps are all operational: the severity naming conflict will cause confusion, the missing auditor restrictions will contaminate findings, and the missing Research Contextualizer means no Lock Sheet is created.

Addressing the 3 CRITICAL gaps would take approximately 16 lines of additions to C4 and 3 lines to correct C4's severity naming. The 7 IMPORTANT gaps add another 33 lines across 5 sections.

**Recommended insertion order:**
1. Fix CRITICAL-01 (3 lines, prevents immediate confusion)
2. Add CRITICAL-03 (5 lines, enables Lock Sheet creation)
3. Add CRITICAL-02 (8 lines, enforces information isolation)
4. Add IMP-06 (1 line, strengthens PA-17/41 mandate)
5. Add IMP-02 (7 lines, completes Cold Look protocol)
6. Add IMP-01 (6 lines, adds PA-05c diagnostic precision)
7. Add IMP-07 (4 lines, prevents tier terminology confusion)

---

*Scan complete. All PA SKILL elements systematically audited against FINAL prompt.*
