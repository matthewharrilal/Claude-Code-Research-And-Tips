# Reference File Quality Audit — Flagship Dissection

## Auditor: ref-file-auditor
## Scope: All files referenced in Section E (Reference Library) of FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md
## Cross-referenced against: 00-AUDIT-DATA.md (flagship output measurements)

---

## Assessment Criteria

For each file:
- **(a)** Does it tell a builder WHAT TO DO or just WHAT EXISTS?
- **(b)** Does it provide concrete CSS examples a builder can copy?
- **(c)** Could a builder reading ONLY this file produce rich output?
- **(d)** Is the content OPERATIONAL or THEORETICAL?
- **(e)** What is the ratio of prescriptive to descriptive content?

---

## Per-File Grades

### 1. `design-system/compositional-core/vocabulary/tokens.css` (184 lines)
**Routed to:** BUILDER (all builders read this)
**Grade: B**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | WHAT EXISTS — pure variable definitions |
| (b) Concrete CSS examples | Yes, but only as token definitions (`:root { --color-bg: #fefcf3; }`) — not usage patterns |
| (c) Could builder produce rich output from this alone? | NO — knows the palette but not how to create richness |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL as reference lookup, not as playbook |
| (e) Prescriptive:Descriptive ratio | 10:90 — comments about maximums (`--space-max-zone: 96px`) are the only prescriptive content |

**Key observation:** Contains 65 tokens covering colors, typography trinity (Instrument Serif / Inter / JetBrains Mono), spacing scale (4px base), border widths, syntax highlighting. Spacing maximums are present but not explained. A builder would know "use `--space-4`" but not "use `--space-4` between paragraphs in dense zones and `--space-8` in breathing zones."

---

### 2. `design-system/compositional-core/grammar/mechanism-catalog.md` (1,218 lines)
**Routed to:** PLANNER (not Builder)
**Grade: B+**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | Both — documents 18 mechanisms AND how to apply them |
| (b) Concrete CSS examples | YES — each mechanism has CSS code blocks builders could copy |
| (c) Could builder produce rich output from this alone? | PARTIALLY — would get vocabulary but not composition |
| (d) OPERATIONAL vs THEORETICAL | Mixed — application modes + transition grammar are operational; frequency tables are descriptive |
| (e) Prescriptive:Descriptive ratio | 40:60 |

**Key observation:** This is the richest file for a CSS builder — it has concrete code examples for all 18 mechanisms, application modes (Progressive vs Discrete), transition grammar (HARD CUT, SPACING SHIFT, CHECKPOINT), restraint protocol with density caps. BUT IT GOES TO THE PLANNER, NOT THE BUILDER. The builder never sees it directly. The planner compresses this 1,218-line file into a build plan, losing most operational detail. This is a critical routing error.

---

### 3. `design-system/compositional-core/guidelines/semantic-rules.md` (530 lines)
**Routed to:** PLANNER
**Grade: B**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | WHAT TO DO — decision rules with if/then structure |
| (b) Concrete CSS examples | Yes — before/after comparisons for arbitrary vs semantic choices |
| (c) Could builder produce rich output from this alone? | NO — provides semantic correctness but not spatial/compositional awareness |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL — 7 gap-fills are decision rules |
| (e) Prescriptive:Descriptive ratio | 50:50 |

**Key observation:** Fills 7 semantic gaps (Info vs Note callouts, inline vs block code, table styling, breathing-room triggers, callout differentiation with 5 colors/8 classes, content density floors, content-form fit). The 3-question semantic value test is excellent. But this file helps builders make CORRECT choices, not RICH choices. Correctness and richness are orthogonal.

---

### 4. `design-system/compositional-core/identity/prohibitions.md` (420 lines)
**Routed to:** BUILDER (all builders read this)
**Grade: A (for its purpose) / D (as richness enabler)**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | 100% WHAT NOT TO DO |
| (b) Concrete CSS examples | Yes — binary tests (`border-radius: 0`, `box-shadow: none`, `opacity: 1`) |
| (c) Could builder produce rich output from this alone? | NO — avoids mistakes but produces nothing |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL — all 24 prohibitions are binary testable |
| (e) Prescriptive:Descriptive ratio | 95:5 — but ALL negative prescriptions |

**Key observation:** 24 prohibitions (8 absolute, 14 conditional, 2 meta) with evidence citations. Includes #21 (no full viewport of void) and #22 (no front-loaded visual weight concentration) — both directly relevant to the flagship failures. The prohibitions are EXCELLENT guardrails and ZERO playbook. A builder reading only this file would produce a blank page that violates nothing.

**Irony:** Prohibition #21 ("no full viewport of void") directly forbids what the flagship output does at scroll positions 4000px, 5000px, and 6000px. The rule exists but the builder either didn't read it or didn't know how to avoid it.

---

### 5. `design-system/compositional-core/components/merged-components.css`
**Routed to:** BUILDER (via reference as `00-components-extract.md`)
**Grade: F — FILE DOES NOT EXIST**

The Read tool returned a "File does not exist" error for this path. Section E references component extracts for builders to read. If the underlying component CSS file doesn't exist, the extracted version likely contains stale or fabricated content.

**Critical finding:** Builders are told to read component patterns from a file that isn't there. This means builders have ZERO reusable component patterns to work from — no callout boxes, no blockquote styling, no aside patterns, no divider components. This directly explains why Ch4 (Structural: borders/dividers/containment) is COMPLETELY ABSENT from the flagship output.

---

### 6. `ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md` (952 lines)
**Routed to:** PLANNER, MECHANISM BUILDER, METAPHOR BUILDER
**Grade: A**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | WHAT TO DO — invocation language, builder checklists, worked examples |
| (b) Concrete CSS examples | YES — crown jewel CSS evidence for each interaction type |
| (c) Could builder produce rich output from this alone? | YES — if a builder read only this, they'd understand how mechanisms need each other |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL — CCS formula, binary verification checks, cross-dimension matrix |
| (e) Prescriptive:Descriptive ratio | 70:30 |

**Key observation:** This is the most actionable richness file in the entire reference library. It covers 5 interaction types (Reinforcing, Modulating, Responding, Contrasting, Cascading) with CSS evidence from crown jewels, builder invocation language, fractal coherence protocol at 5 scales, 15-pair cross-dimension matrix, and anti-metronome rhythm coherence. The CCS formula with worked example (CD-006 CCS ~0.55) gives builders a concrete target. BUT: it goes to Planner/Metaphor Builder, not the CSS builder.

---

### 7. `ephemeral/prompt-enrichment-audit/15-scale-channel-invocation.md` (708 lines)
**Routed to:** PLANNER, METAPHOR BUILDER
**Grade: A**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | WHAT TO DO — 8 binary rules, 7 operational formulas, builder quick-reference |
| (b) Concrete CSS examples | YES — channel manifestations at each scale with CSS properties |
| (c) Could builder produce rich output from this alone? | YES — the 5x7 richness matrix alone would guide diverse channel activation |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL — formulas, tier targets, anti-pattern documentation |
| (e) Prescriptive:Descriptive ratio | 65:35 |

**Key observation:** 7 channel taxonomy (Chromatic, Typographic, Spatial, Structural, Density, Rhythmic, Intentional) with manifestations at 5 scales. The richness matrix (5x7=35 cells) provides concrete targets. 8 binary rules (C-01 through C-08) are agent-friendly. 6 anti-patterns documented. The builder quick-reference checklist is exactly what a CSS builder needs. BUT AGAIN: goes to Planner and Metaphor Builder, not the CSS builder.

---

### 8. `ephemeral/flagship-preparation/11-crown-jewel-forensics.md` (565 lines)
**Routed to:** INTENTIONALITY BUILDER
**Grade: A**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | Both — shows WHAT crown jewels did AND extracts 15 must-replicate techniques |
| (b) Concrete CSS examples | YES — complete CSS property inventories from DD-006 and CD-006 |
| (c) Could builder produce rich output from this alone? | YES — the 15 must-replicate techniques are a richness playbook |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL — line-by-line forensic evidence, critical numbers table with flagship targets |
| (e) Prescriptive:Descriptive ratio | 55:45 |

**Key observation:** Forensic analysis of DD-006 (1,120 lines, 36/40) and CD-006 (2,085 lines, 39/40). The subtlety inventory (15 invisible-but-present techniques in CD-006) is exactly the kind of operational guidance that produces richness. The 8-check crown jewel quality gate and critical numbers table with flagship targets are directly actionable. This file goes to the Intentionality Builder — an Opus agent who synthesizes but doesn't write CSS.

---

### 9. `ephemeral/flagship-preparation/13-compositional-fluency.md` (671 lines)
**Routed to:** INTENTIONALITY BUILDER
**Grade: B+**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | Primarily WHAT IS — theory of compositional vs vocabulary fluency |
| (b) Concrete CSS examples | YES — OD-004 reinforcing, DD-006 modulating, CD-006 responding/contrasting/cascading |
| (c) Could builder produce rich output from this alone? | PARTIALLY — understands WHY agents struggle but not specific remedies |
| (d) OPERATIONAL vs THEORETICAL | 60% THEORETICAL, 40% OPERATIONAL (6 strategies section) |
| (e) Prescriptive:Descriptive ratio | 35:65 |

**Key observation:** Explains the vocabulary-vs-composition gap (knowing many mechanisms vs. mechanisms needing each other). The 5 reasons agents struggle (linear processing, continuation bias, no relationship specs, measurement gap, file-bus isolation) are diagnostic, not prescriptive. The 6 strategies for achieving composition are the operational core but are at strategy level, not CSS level. Good for team lead understanding; less useful for a builder who needs CSS examples.

---

### 10. `ephemeral/flagship-preparation/05-content-first-methodology.md` (966 lines)
**Routed to:** INTENTIONALITY BUILDER
**Grade: A**

| Criterion | Assessment |
|-----------|------------|
| (a) WHAT TO DO vs WHAT EXISTS | WHAT TO DO — templates, flowcharts, decision protocols |
| (b) Concrete CSS examples | Minimal — this is a methodology file, not a CSS file |
| (c) Could builder produce rich output from this alone? | NO — provides content structure but not visual richness |
| (d) OPERATIONAL vs THEORETICAL | OPERATIONAL — content inventory template, 5-step selection protocol, scoring rubric |
| (e) Prescriptive:Descriptive ratio | 70:30 |

**Key observation:** Reverses pattern-first approach with content inventory template, content-to-pattern selection rules, revised metaphor scoring rubric (6 criteria), density planning tables, and worked example applied to ceiling experiment. Highly operational for PLANNING but provides zero CSS guidance for BUILDING. This is the right file for the right agent (Intentionality Builder does planning, not CSS).

---

## Summary Grade Table

| File | Lines | Routed To | Grade | Prescriptive % | Richness Contribution |
|------|-------|-----------|-------|----------------|----------------------|
| tokens.css | 184 | BUILDER | B | 10% | Low — reference lookup only |
| mechanism-catalog.md | 1,218 | PLANNER | B+ | 40% | High — but WRONG RECIPIENT |
| semantic-rules.md | 530 | PLANNER | B | 50% | Medium — correctness not richness |
| prohibitions.md | 420 | BUILDER | A/D | 95% (negative) | Zero — 100% guardrail |
| merged-components.css | — | BUILDER | F | — | MISSING FILE |
| 16-multi-coherence.md | 952 | PLANNER/META | A | 70% | Highest — but WRONG RECIPIENT |
| 15-scale-channel.md | 708 | PLANNER/META | A | 65% | Very high — but WRONG RECIPIENT |
| 11-crown-jewel-forensics.md | 565 | INTENT. BUILDER | A | 55% | High — goes to Opus non-CSS agent |
| 13-compositional-fluency.md | 671 | INTENT. BUILDER | B+ | 35% | Medium — mostly theory |
| 05-content-first-methodology.md | 966 | INTENT. BUILDER | A | 70% | High for planning, zero for CSS |

---

## THE META-FINDING: Inverted Quality Routing

The single most important finding of this audit is not about file quality — most files are individually good (5 of 10 are Grade A). The problem is **inverted quality routing**.

### What the CSS BUILDER receives:
1. tokens.css (B) — WHAT EXISTS
2. prohibitions.md (A/D) — WHAT NOT TO DO
3. merged-components.css (F) — FILE MISSING
4. Build plan (quality unknown) — compressed from Planner
5. Component/case-study extracts — quality unknown

**Builder's total richness guidance: near zero.** The builder gets a palette, a list of prohibitions, a missing file, and whatever the Planner compressed into the build plan. No mechanism examples. No multi-coherence guidance. No scale-channel matrix. No crown jewel forensics. No compositional fluency strategies.

### What the PLANNER and OPUS AGENTS receive:
1. mechanism-catalog.md (B+) — 18 mechanisms with CSS examples
2. semantic-rules.md (B) — decision rules
3. 16-multi-coherence-invocation.md (A) — richness playbook
4. 15-scale-channel-invocation.md (A) — channel activation guide
5. 11-crown-jewel-forensics.md (A) — 15 must-replicate techniques
6. 13-compositional-fluency.md (B+) — composition theory
7. 05-content-first-methodology.md (A) — planning methodology

**Planner/Opus total richness guidance: comprehensive.** These agents understand richness deeply but don't write CSS. They compress their understanding into build plans that the Builder then executes.

### The Compression Problem

The Planner reads ~4,600 lines of richness guidance (mechanism-catalog + MC invocation + SC invocation + semantic rules) and compresses it into a build plan. Based on the flagship output (zero borders, uniform margins, uniform typography), this compression is lossy — the build plan apparently did not convey:
- Which channels to activate per section
- How mechanisms should interact with each other
- What Scale 5 variation looks like in CSS properties
- That borders/dividers/containment (Ch4) should exist at all

**The reference files are a guardrail factory for builders and a richness factory for non-builders.** The agents who understand richness can't write CSS. The agents who write CSS can't understand richness. The build plan is the bottleneck, and it apparently fails to transfer richness knowledge.

---

## Recommendations

### BLOCKING (Must Fix)
1. **Route mechanism-catalog.md to ALL builders** — not just Planner. This is the single highest-leverage fix. Builders need to see CSS examples of mechanisms, not just hear "use alternating density."
2. **Fix or remove merged-components.css reference** — builders are told to read a file that doesn't exist. Either create the file or remove the reference.
3. **Route 15-scale-channel-invocation.md to builders** — the builder quick-reference checklist in this file is explicitly designed for builders but doesn't reach them.

### HIGH
4. **Add a "builder richness checklist" to Section E** — a short file (50-100 lines) that tells builders: "Before you submit, verify: at least 2 border styles used, at least 3 different margin values, at least 2 font-weight values, background colors vary by >15 RGB points between adjacent sections."
5. **Route crown-jewel forensics to CSS builders** — the 15 must-replicate techniques are CSS-level operational guidance that only the CSS builder can act on.
6. **Include a build plan template** — the Planner compresses 4,600 lines into a build plan, but there's no template ensuring the build plan preserves richness information. The template should require: per-section mechanism list, per-section channel activation, explicit CSS property targets.

### MINOR
7. **Add usage examples to tokens.css** — currently shows `--space-4: 16px;` but not "use `--space-4` for paragraph margins in dense zones."
8. **Tag prescriptive content in mechanism-catalog.md** — the 40% that's prescriptive is mixed with the 60% that's descriptive. Separate "BUILDER INSTRUCTIONS" blocks from "REFERENCE" blocks.

---

## Connection to Flagship Failures

| Flagship Failure | Reference File Root Cause |
|-----------------|--------------------------|
| Ch4 ABSENT (zero borders) | merged-components.css MISSING + mechanism-catalog.md not routed to builder |
| Uniform margins (Ch3) | No spatial variation guidance in builder-facing files |
| Scale 5 uniform | No Scale 5 operational rules in builder-facing files |
| Whitespace voids | Prohibition #21 exists but builder lacks positive guidance for what TO put in sections |
| Identical sections | No per-section differentiation plan in builder reference set |
| Barely perceptible bg colors | No chromatic channel guidance in builder-facing files (tokens.css has colors but not zone-based variation rules) |

**Every flagship failure traces back to the builder receiving guardrails without playbook.** The reference library is rich. The routing is broken.
