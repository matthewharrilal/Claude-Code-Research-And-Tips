# Fresh-Eyes Spec Review — Pipeline v3 Artifacts

**Reviewer:** Fresh-eyes agent (zero prior pipeline context)
**Date:** 2026-02-25
**Scope:** All 10 files in `ephemeral/va-extraction/`
**Method:** Read each file cold, in sequence, noting every point of confusion, contradiction, or concern.

---

## Executive Summary

The 10-file spec suite is impressively thorough — a multi-phase build pipeline with programmatic gates, perceptual auditing, and structured verdicts. However, **the files have drifted from each other**. The most serious problems are not missing features but **internal contradictions**: gate counts that don't agree, thresholds that differ between spec and implementation, line counts that are stale, and information isolation boundaries that exist in prose but not in file structure. A reader following one file's instructions will violate another file's rules.

**Severity tally:**
- CRITICAL (blocks correct execution): 4
- SERIOUS (causes confusion or incorrect behavior): 9
- MINOR (cosmetic or low-impact): 6

---

## 1. CONTRADICTIONS

### C-01: Gate Count Civil War [CRITICAL]

Three files define gate counts and they all disagree.

| Source | REQUIRED | RECOMMENDED | ADVISORY | Total (excl. BV/DIAG) |
|--------|----------|-------------|----------|----------------------|
| gate-runner-spec.md (summary table, line ~185) | 18 | 8 | 5 | 31 |
| gate-manifest.json (tierSummary) | 16 | 9 | 7 | 32 |
| gate-runner-core.js (actual implementation) | ~16 | ~9 | ~7 | ~32 |
| MANIFEST.md (Section 3.1) | "37 gates" | — | — | 37 |
| EXECUTION-TRACKER-TEMPLATE.md (Phase 3A) | — | — | — | 33 |

The spec says 18 REQUIRED but lists GR-07, GR-12, and GR-43 as REQUIRED. In gate-manifest.json, GR-07 is RECOMMENDED, GR-12 is absent (absorbed into GR-18), and GR-43 is RECOMMENDED. The core.js implementation matches the manifest, not the spec.

**Impact:** An orchestrator reading gate-runner-spec.md will expect 18 REQUIRED gates and treat GR-07/GR-12/GR-43 failures as blocking. The actual gate runner won't even run GR-12 and won't fail the build on GR-07 or GR-43.

**Recommendation:** gate-runner-spec.md needs to be regenerated from gate-manifest.json + gate-runner-core.js. The spec is stale.

---

### C-02: GR-21 Threshold Mismatch [SERIOUS]

- **gate-runner-spec.md** (line ~100): GR-21 "Background Palette" — threshold: `<=4 distinct background colors`
- **gate-runner-core.js** (in `runAntiPatternGates`): `const pass = maxDistinct <= 6;`

The spec says 4, the code says 6. A page with 5 distinct backgrounds would PASS the actual gate runner but FAIL according to the spec.

**Impact:** If someone manually checks against the spec, they'll reject pages the gate runner accepts.

---

### C-03: gate-manifest.json Internal Inconsistency [SERIOUS]

The `totalGateCount` object in gate-manifest.json:
```json
"totalGateCount": {
  "inGateRunner": 32,
  "briefVerification": 4,
  "diagnostic": 2,
  "grandTotal": 38,
  "total": 38
}
```

32 + 4 + 2 = 38. But the tier summary adds up to: 16 + 9 + 7 = 32 (in-runner), which checks out. However, `grandTotal` and `total` are redundant fields with the same value. More importantly, the MANIFEST says "37 gates" in multiple places, the execution tracker says "33", and the manifest JSON says 38. These are three different numbers for the same thing.

**Impact:** Any document referencing "the total gate count" will pick a different number depending on which file it reads.

---

### C-04: Template Size Confusion [SERIOUS]

- **artifact-orchestrator.md** (Section 6, Step 1.3): References a "73-line template" for the TC Brief
- **artifact-builder-recipe.md** (Phase 1, Step 1.3): Also references "73-line template"
- **MANIFEST.md** (artifact registry): Lists `artifact-tc-brief-template.md` as "~165 lines"
- **EXECUTION-TRACKER-TEMPLATE.md** (pre-flight): Lists `artifact-tc-brief-template.md` as "~165 lines"

Is the template 73 lines or 165 lines? These can't both be right. If it was expanded from 73 to 165, the orchestrator and recipe still reference the old size.

---

### C-05: File Line Count Staleness [MINOR]

EXECUTION-TRACKER-TEMPLATE.md pre-flight checklist says:
- `artifact-builder-recipe.md accessible (840 lines)` — actual file is ~960 lines
- `artifact-orchestrator.md accessible (971 lines)` — actual file is ~1,061 lines

These are stale. While line-count checks in a template are a nice idea, they become misleading when the files grow. An operator checking pre-flight will see a mismatch and not know if the file is wrong or the template is stale.

---

### C-06: PA Question Count Discrepancies [MINOR]

- **pa-deployment.md** (line 54): "Total: 69 questions across 9 auditors"
- **pa-questions.md**: Lists questions in Sections 1-3. Counting unique question IDs: the numbering jumps (PA-01 through PA-81 with many gaps). The actual count appears to be 69, but verification is difficult because questions are spread across 4 sections and some have sub-parts.
- **EXECUTION-TRACKER-TEMPLATE.md** (Phase 3B): Auditor question counts in parentheses add up to: 9+8+10+11+7+5+8+5+6 = 69. This matches.

This one checks out numerically, but the fact that question IDs go up to PA-81 with massive gaps (no PA-06, PA-07, PA-09, PA-10, PA-21, PA-40, PA-49, PA-57-59, PA-78-79) is confusing for a first-time reader. There's no explanation of the gap numbering (retired questions? reserved IDs?).

---

## 2. INFORMATION LEAKS

### L-01: pa-questions.md Section 4 Contains Calibration Data [CRITICAL]

**pa-questions.md** is the file sent to PA auditors. Section 4 (lines ~290-390) is titled "Quality Framework Integration" and marked:

> **IMPORTANT: Section 4 is for WEAVER and ORCHESTRATOR use only.** The orchestrator MUST send only Sections 1-3 + Appendices A-B to auditors.

But Section 4 is IN THE SAME FILE. It contains:
- Historical calibration scores: "Gas Town (PA-05 3.5)", "CD-006 pattern"
- Tier definitions with score ranges (1=FLAT, 2=ASSEMBLED, 3=COMPOSED, 4=DESIGNED)
- The exact PA-05 scoring rubric the Weaver uses

The fresh-eyes principle (pa-deployment.md Section 3) is described as "NON-NEGOTIABLE" — auditors must be "context-starved." Yet the calibration data is sitting in the same file the orchestrator must parse to extract their questions.

**Risk:** If the orchestrator sends the full pa-questions.md file to auditors (which is the natural thing to do — it's the questions file), the auditors receive calibration data that directly violates the fresh-eyes principle. The mitigation is a text warning, not a structural separation.

**Recommendation:** Section 4 should be in pa-weaver.md (which IS information-isolated from auditors), not in pa-questions.md.

---

### L-02: pa-questions.md Appendix B Contains Perception Thresholds [SERIOUS]

Appendix B (lines ~410-432) lists quantitative thresholds:
- Background delta >= 15 RGB
- Letter-spacing >= 0.025em
- Padding delta >= 24px
- Stacked gap <= 120px

These are the SAME thresholds used in the gate runner. An auditor with access to these numbers is no longer doing perceptual assessment — they're doing manual gate-checking. The fresh-eyes principle says auditors should describe what they SEE ("the background shifts from warm cream to cooler gray"), not check numeric thresholds.

However, the instruction says to send "Sections 1-3 + Appendices A-B" to auditors. So auditors are INTENDED to receive Appendix B? This contradicts the fresh-eyes principle's "no CSS vocabulary" requirement.

**Ambiguity:** Is Appendix B meant for auditors or not? The routing instruction includes it, but the perceptual philosophy excludes it.

---

### L-03: artifact-builder-recipe.md Contains Disposition Verdicts [MINOR]

The builder recipe (Phase 2, Step 2.3) includes all 9 dispositions (D-01 through D-09) with their exact rules. D-01 through D-09 are also used by the gate runner and orchestrator for verification. The builder seeing the exact gate-check formulations (e.g., D-09's hex lock `#1a1a2e` or `#0a0a1a`) means the builder is optimizing for gate compliance rather than design quality.

This may be intentional (the recipe explicitly tells builders to apply these), but it's worth noting that the builder knows exactly what the gate runner will check. If the goal is "build from the soul, verify with gates," the builder has full gate visibility.

---

## 3. CONFUSION

### X-01: What Is "Mode" and When Is It Decided? [SERIOUS]

The pipeline has two modes: APPLIED and COMPOSED. But the reader encounters mode references in a confusing order:

1. **MANIFEST.md** (Phase 0.5): Mode is determined after content analysis. APPLIED = "recipe-following mode for most content." COMPOSED = "metaphor-driven architecture for special content."
2. **artifact-orchestrator.md** (Section 5): Mode selection criteria listed — but also references a "3-pass architecture" (Section 10) that seems to be an alternative to mode selection?
3. **artifact-builder-recipe.md**: The entire recipe is written as if BOTH modes will use it, but with different emphasis. There's no clear fork point.
4. **EXECUTION-TRACKER-TEMPLATE.md**: Mode is tracked in Build Metadata AND Phase 0.5, which is fine.

The confusion: Section 10 of artifact-orchestrator.md describes a "3-Pass Builder Architecture (Experimental)" that reads like a completely different execution model. It's marked "EXPERIMENTAL" and "status: UNPROVEN" but sits in the authoritative orchestrator document without clear boundary markers. A new reader can't tell if this replaces the standard Phase 2 or is an optional enhancement.

---

### X-02: Who Produces the Execution Brief? [SERIOUS]

- **MANIFEST.md** (Agent 2): "Brief Assembler" produces the Execution Brief in Phase 1
- **artifact-orchestrator.md** (Section 6): Describes brief assembly as the orchestrator's job with specific routing rules
- **artifact-builder-recipe.md** (Phase 1): Describes brief assembly as part of the builder's recipe

Is the Brief Assembler a separate agent? Or is it the orchestrator doing brief assembly? Or is it the builder reading the recipe and assembling its own brief?

The MANIFEST says it's Agent 2 (a separate agent). The orchestrator doc describes it as orchestrator actions. The recipe describes it as builder actions. For a first-time reader, the brief assembly ownership is unclear.

---

### X-03: "Soul" vs "Identity" vs "Disposition" Terminology [MINOR]

Three overlapping term families describe non-negotiable design rules:

- **Soul Constraints** (SC-01 through SC-10): Referenced in MANIFEST, used in gate runner
- **Identity Gates** (GR-01 through GR-10): Gate runner implementation of soul constraints
- **Dispositions** (D-01 through D-09): Builder recipe instructions, some map to soul constraints, some don't

The mapping is not explicit anywhere. SC-01 appears to correspond to GR-01 and D-01, but SC-10 doesn't have a D-10. D-09 (background hex lock) has a corresponding gate (checked in core.js) but is also listed as "EXPERIMENTAL." Are experimental dispositions enforced by non-experimental gates?

A cross-reference table mapping SC-XX to GR-XX to D-XX would eliminate this confusion.

---

### X-04: Circuit Breaker Logic Is Scattered [MINOR]

The circuit breaker (what happens on REBUILD or repeated REFINE verdicts) is mentioned in:
- MANIFEST.md (Section 7.3): "2nd REBUILD = ABORT"
- artifact-orchestrator.md (Section 7): Decision tree with revision limits
- EXECUTION-TRACKER-TEMPLATE.md: Circuit breaker field in summary

But the actual rules are slightly different in each location. MANIFEST says "2nd REBUILD = ABORT." Orchestrator says "1st REBUILD → full rebuild, circuit breaker on 2nd." These may be consistent but the phrasing differs enough that a reader must cross-reference to confirm.

---

## 4. TONE MISMATCHES

### T-01: MANIFEST.md Voice Shifts [SERIOUS]

MANIFEST.md reads like it was assembled from multiple source documents. The tone shifts notably:

- **Sections 1-3** (lines 1-200): Clean, imperative, well-structured. Reads like a spec.
- **Section 4** (routing tables, lines ~200-500): Dense reference material. Reads like extracted database content.
- **Section 9** (agent prompt templates, lines ~700-900): Suddenly switches to second-person ("You are the Content Analyst..."). These are prompt templates embedded in a spec document.
- **Section 11** (model mandate, lines ~1050-1100): Returns to spec voice but with a more casual/emphatic tone ("STRONG RECOMMENDATION", exclamation-like emphasis).

The embedded prompt templates (Section 9) are the biggest tonal break. They're useful but feel like they belong in a separate file (e.g., `agent-prompt-templates.md`). Having them inline means the MANIFEST is simultaneously a spec for the orchestrator AND a template library, which makes it harder to maintain.

---

### T-02: artifact-builder-recipe.md Mixes Recipe and Prohibition [MINOR]

The file title says "recipe" and the first half delivers — sequenced Read/Select/Deploy/Assess steps. But starting around Phase 4 (line ~500), the tone shifts to prohibition-heavy language:

- "NEVER use more than..."
- "MUST NOT exceed..."
- "FAIL if..."

This is the "recipe vs checklist" anti-pattern that the pipeline's own research identifies as harmful. The first half is recipe (good), the second half degrades into checklist (the thing the pipeline explicitly warns against).

---

### T-03: pa-weaver.md Calibration Scales Feel Research-Derived [MINOR]

pa-weaver.md's calibration scales (multi-coherence scale, metaphor expression spectrum, severity scale) read like they were extracted from research papers or analysis documents. They use terms like "fractal" and "compositional intelligence" without defining them for the Weaver agent. Since the Weaver is an LLM agent receiving this as context, research terminology may either help (if the model knows the concepts) or confuse (if it pattern-matches on jargon without understanding).

---

## 5. FLOW PROBLEMS

### F-01: artifact-orchestrator.md Forward References [SERIOUS]

The orchestrator document references artifacts by filename throughout but doesn't provide a file path registry until the reader reaches MANIFEST.md. A reader starting with artifact-orchestrator.md encounters:
- "artifact-tc-brief-template.md" (what is this? where is it?)
- "artifact-value-tables.md" (same)
- "mechanism-catalog.md" (same)
- "tokens.css" and "components.css" (same)

None of these are in the 10-file review set. The orchestrator doc assumes the reader already knows the full file inventory, which only exists in MANIFEST.md.

**Impact:** An orchestrator agent receiving artifact-orchestrator.md without MANIFEST.md cannot locate the referenced files.

---

### F-02: gate-runner-spec.md Is Redundant with gate-manifest.json [MINOR]

gate-runner-spec.md and gate-manifest.json contain the same information in different formats:
- gate-runner-spec.md: Human-readable markdown table
- gate-manifest.json: Machine-readable JSON

But they disagree (see C-01). If both must exist, one should be generated from the other. Currently they appear to be independently maintained, which guarantees drift.

---

### F-03: EXECUTION-TRACKER-TEMPLATE.md References Phase 3B Auditor Counts That Don't Match Deployment [MINOR]

The tracker template (Phase 3B) lists auditor question counts:
```
| A | Impression + Emotion | PA-01,03,04,05,45,65,67,72,76 (9) |
```

This matches pa-deployment.md exactly. Good. But if pa-deployment.md is ever updated (questions added/removed/reassigned), the tracker template must be manually updated too. There's no indication of which file is authoritative for auditor assignments.

---

## 6. MISSING CONTEXT

### M-01: No Glossary of Abbreviations in Any Single File [MINOR]

Terms used across files without definition in most of them:
- **BV**: Brief Verification (defined in MANIFEST, used everywhere)
- **TC**: Tension Composition (used in orchestrator, recipe, MANIFEST — never fully spelled out except in MANIFEST glossary)
- **CCS**: Compositional Confidence Score (appears in pa-deployment.md as "RESEARCH CONSTRUCT" but never defined)
- **DPR**: Device Pixel Ratio (appears in pa-deployment.md Section 2.3a, defined by context but not explicitly)
- **SC**: Soul Constraint (used in gate-runner-spec.md, never explicitly mapped)

MANIFEST.md has a glossary (Section 8), but it's the ONLY file with one. Other files use abbreviations assuming the reader has read the MANIFEST.

---

### M-02: Wave 3 Reclassification Not Explained [MINOR]

EXECUTION-TRACKER-TEMPLATE.md (line 167):
> Note: GR-23–GR-28 are now orchestrator decision rules (Wave 3 reclassification), not gate-runner gates.

This is the ONLY mention of "Wave 3 reclassification" in any of the 10 files. What was Wave 3? When did it happen? Why were GR-23-GR-28 reclassified? The note is informative but context-free.

Similarly, gate-manifest.json references "reclassifiedToOrchestrator" as a field but provides no explanation of the reclassification rationale.

---

## Summary of Findings by Severity

### CRITICAL (4)
| ID | Finding | Files Affected |
|----|---------|---------------|
| C-01 | Gate count contradictions across 3+ files | gate-runner-spec.md, gate-manifest.json, gate-runner-core.js, MANIFEST.md, EXECUTION-TRACKER-TEMPLATE.md |
| L-01 | Section 4 calibration data in auditor-facing file | pa-questions.md |
| X-01 | Mode/3-pass architecture confusion | artifact-orchestrator.md |
| X-02 | Brief assembly ownership unclear | MANIFEST.md, artifact-orchestrator.md, artifact-builder-recipe.md |

### SERIOUS (9)
| ID | Finding | Files Affected |
|----|---------|---------------|
| C-02 | GR-21 threshold: spec says 4, code says 6 | gate-runner-spec.md, gate-runner-core.js |
| C-03 | gate-manifest.json internal count inconsistency | gate-manifest.json, MANIFEST.md |
| C-04 | TC Brief template 73 lines vs 165 lines | artifact-orchestrator.md, artifact-builder-recipe.md, MANIFEST.md |
| L-02 | Appendix B thresholds sent to auditors despite fresh-eyes principle | pa-questions.md, pa-deployment.md |
| T-01 | MANIFEST.md voice shifts (spec + templates + reference) | MANIFEST.md |
| F-01 | Orchestrator references artifacts without paths | artifact-orchestrator.md |

### MINOR (6)
| ID | Finding | Files Affected |
|----|---------|---------------|
| C-05 | Stale line counts in execution tracker | EXECUTION-TRACKER-TEMPLATE.md |
| C-06 | PA question ID gaps unexplained | pa-questions.md |
| X-03 | Soul/Identity/Disposition mapping unclear | Multiple |
| X-04 | Circuit breaker logic scattered | MANIFEST.md, artifact-orchestrator.md |
| T-02 | Recipe degrades to checklist in second half | artifact-builder-recipe.md |
| T-03 | Research terminology in weaver calibration | pa-weaver.md |
| F-02 | Spec and manifest are redundant + divergent | gate-runner-spec.md, gate-manifest.json |
| F-03 | Tracker auditor counts coupled to deployment | EXECUTION-TRACKER-TEMPLATE.md, pa-deployment.md |
| M-01 | No per-file glossary | All files except MANIFEST.md |
| M-02 | Wave 3 reclassification unexplained | EXECUTION-TRACKER-TEMPLATE.md, gate-manifest.json |
| L-03 | Builder sees gate formulations | artifact-builder-recipe.md |
| X-04 | Circuit breaker phrasing differs | Multiple |

---

## Top 3 Recommendations

1. **Reconcile gate-runner-spec.md with gate-manifest.json and gate-runner-core.js.** The spec is the most stale of the three. Either regenerate it from the implementation or delete it and use gate-manifest.json as the single source of truth. This eliminates C-01, C-02, and F-02 in one action.

2. **Move pa-questions.md Section 4 to pa-weaver.md.** The calibration data belongs with the Weaver, not in the auditor question file. This eliminates L-01 and reduces the risk of fresh-eyes contamination. Consider also moving Appendix B (thresholds) or adding explicit guidance on whether auditors should use quantitative thresholds or perceptual language.

3. **Add a cross-reference table mapping SC-XX to GR-XX to D-XX.** Put it in MANIFEST.md's glossary section. This eliminates X-03 and makes the relationship between soul constraints, gates, and dispositions explicit for any reader entering the spec suite.

---

*Review completed 2026-02-25. Zero prior pipeline context. All findings based solely on internal consistency of the 10 reviewed files.*
