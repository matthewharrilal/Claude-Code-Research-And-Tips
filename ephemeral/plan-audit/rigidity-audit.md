# Binary Rule Compliance Audit

**Auditor:** rigidity-auditor
**Date:** 2026-02-14
**Target:** Phase D execution plan (giggly-drifting-eich.md, 640 lines)
**Reference:** 14 teams of experience — "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"

---

## EXECUTIVE SUMMARY

**Overall Compliance: 82% binary (target: 100%)**

**Critical findings:**
- 11 judgment language violations requiring immediate rewrite
- 3 structural enforcement gaps (relying on behavioral compliance)
- 1 intentional weak framing (Variant B by design — CORRECT)
- Strong binary language in critical sections (builder prompts, gates, soul constraints)

**Verdict:** CONDITIONAL PASS — plan is mostly binary but requires rewrites in 4 sections before agent spawning. The judgment violations are concentrated in evaluation criteria and library access, where agent interpretation will cause non-compliance.

---

## JUDGMENT LANGUAGE VIOLATIONS (Must Rewrite)

### CRITICAL VIOLATIONS (Agent will ignore these)

**Line 83-84 (Variant A isolation):**
> "YOU MUST NOT read ANY files in compositional-core/ beyond prohibitions.md and tokens.css. You CANNOT request library files. Any Read call to compositional-core/ beyond the two permitted files invalidates your build."

**Status:** BINARY ✓ — uses "MUST NOT," "CANNOT," "invalidates"
**No rewrite needed** — already correct

---

**Line 96-98 (Variant B weak framing):**
> "Weak framing: 'The following design library is available for reference. Consider these patterns as starting points. You may consult them at any point.'"

**Status:** JUDGMENT (INTENTIONAL) ✓
**Analysis:** This is CORRECT. Variant B tests whether weak framing fails (hypothesis: agents will pattern-match despite permission). The weakness is BY DESIGN to create maximum distinction from Variant C.
**No rewrite needed** — intentional judgment language for experimental control

---

**Line 108 (Variant C phase gate):**
> "YOU MUST NOT read case-studies/, mechanism-catalog.md, or components.css. Violation invalidates the entire derivation."

**Status:** BINARY ✓ — uses "MUST NOT," "invalidates"
**No rewrite needed** — already correct

---

**Line 109 (Divergence gate):**
> "(5) If vocabulary overlap >40% with ANY case study, you MUST REGENERATE with explicit constraint — justification alone is NOT sufficient."

**Status:** BINARY ✓ — uses "MUST REGENERATE," "NOT sufficient"
**No rewrite needed** — already correct

---

**Line 174 (Critical prompt rule #1):**
> "CRITICAL: You MUST write your HTML file using the Write tool to [exact path]."

**Status:** BINARY ✓ — uses "CRITICAL," "MUST"
**No rewrite needed** — already correct

---

**Line 179 (Soul constraints):**
> "Soul constraints: border-radius:0, box-shadow:none, no drop-shadow, no #000/#FFF"

**Status:** BINARY ✓ — absolute values, no hedging
**No rewrite needed** — already correct

---

### HIGH-SEVERITY VIOLATIONS (Will cause non-compliance)

**Line 60 (Track 1 adaptation):**
> "Track 1 adaptation: formalize comparisons, annotate component opportunities (8+ types), ~2,000 words."

**VIOLATION:** "~2,000 words" is APPROXIMATE (judgment)
**Rewrite:**
```
Track 1 adaptation: formalize comparisons, annotate component opportunities (minimum 8 types required), target 1,800-2,200 words (hard floor: 1,600 words).
```

---

**Line 67 (Track 2 adaptation):**
> "Track 2 adaptation: extend prose sections, emphasize conceptual contrasts, target richness 12+, ~3,000 words."

**VIOLATION:** "target richness 12+" is SOFT, "~3,000 words" is APPROXIMATE
**Rewrite:**
```
Track 2 adaptation: extend prose sections, emphasize conceptual contrasts, REQUIRED richness score ≥12 (measured via tension axes × section types × density zones), word count 2,700-3,300 (hard floor: 2,400 words).
```

---

**Line 163 (Content pre-audit):**
> "Track 2: prose-dominant (>70%), ≥4 tension axes identifiable, ≥5 section types, ≥3 density zones. If richness <12 → select different content."

**VIOLATION:** "select different content" is SOFT (no invalidation language)
**Rewrite:**
```
Track 2: prose-dominant (>70%), ≥4 tension axes identifiable, ≥5 section types, ≥3 density zones. If richness score <12 → INVALID CONTENT, you MUST select different source material and restart Gate 0 validation.
```

---

**Line 164 (Metaphor overlap check):**
> "Track 2 content does NOT naturally map to geological/fractal/conversational (library metaphors) — to avoid confounding convergence with pattern-matching."

**VIOLATION:** "does NOT naturally map" is SUBJECTIVE (no measurement)
**Rewrite:**
```
Track 2 content MUST NOT contain these domain keywords in source material: geological, stratum, fractal, conversational, dialogue, Q&A format (≥3 instances = OVERLAP DETECTED, select different content). This prevents confounding convergence with pattern-matching.
```

---

**Line 193 (Track 1 library access):**
> "prohibitions, tokens, components.css, guidelines, semantic-rules, responsive-strategy, content"

**VIOLATION:** No PROHIBITION on reading beyond this list (implicit permission)
**Rewrite:**
```
Track 1 permitted files: prohibitions.md, tokens.css, components.css, guidelines/, semantic-rules.md, responsive-strategy.md, content file. YOU MUST NOT read case-studies/, mechanism-catalog.md, or grammar/ files. Violation invalidates your build.
```

---

**Line 222 (Guardrail checks):**
> "Soul (6): border-radius=0, box-shadow=none, no drop-shadow, no #000/#FFF, fonts match trinity, no 2px borders"

**Status:** BINARY ✓ — absolute values
**No rewrite needed** — already correct

---

**Line 253 (Library utilization):**
> "Track 1 ≥60%, Track 2 ≥50%. Semantic breakdown: identity CSS ≥80%, mechanism CSS ≥60%, metaphor CSS 0% acceptable."

**Status:** BINARY ✓ — hard thresholds
**No rewrite needed** — already correct

---

### MEDIUM-SEVERITY VIOLATIONS (Ambiguous thresholds)

**Line 258 (Mechanism application):**
> "Count distinct mechanisms from mechanism-catalog.md (18 total). ≥8 for Track 2 PASS."

**VIOLATION:** "≥8 for Track 2" — what about Track 1? Incomplete rule.
**Rewrite:**
```
Count distinct mechanisms from mechanism-catalog.md (18 total). REQUIRED: Track 1 ≥5 mechanisms, Track 2 ≥8 mechanisms. Below threshold = FAIL.
```

---

**Line 259 (Divergence check):**
> ">40% overlap + no divergence table = FAIL. >40% + divergence table with ≥3/5 dimensions different = PASS. ≤40% = naturally divergent PASS."

**Status:** BINARY ✓ — clear thresholds and outcomes
**No rewrite needed** — already correct

---

**Line 264 (Component coverage):**
> "Count component families exercised from inventory. ≥8/9 for PASS."

**VIOLATION:** "≥8/9" is ambiguous — is this 8 families out of 9 total? Or 88.9% coverage?
**Rewrite:**
```
Count component families exercised from inventory (9 families total: callouts, code blocks, tables, stats bars, section indicators, headers, footers, decision matrices, file trees). REQUIRED: Track 1 uses ≥8/9 families (89% coverage). Track 2 uses ≥6/9 families (67% coverage). Below threshold = FAIL.
```

---

**Line 396 (Phase compliance):**
> "Phase Compliance (3, Track 2 C only): M4.1 no case-studies before Phase 5, M4.2 metaphor locked at 3.5, M4.3 divergence table if convergence"

**VIOLATION:** "if convergence" is CONDITIONAL but not ENFORCED
**Rewrite:**
```
Phase Compliance (3, Track 2 Variant C only): M4.1 MUST NOT access case-studies/ before Phase 5 (timestamp verification required). M4.2 metaphor MUST be committed in writing at Phase 3.5 (file write required). M4.3 IF metaphor domain matches case-studies/_INDEX.md, divergence table with ≥3/5 dimensions different is MANDATORY (no table = FAIL).
```

---

**Line 403 (PA-05 "would ship" definition):**
> "YES = Soul 0 violations (programmatic confirmed) + guardrails 8/8 + no CRITICAL visual issue identified by judge + text readable at both viewports"

**Status:** BINARY ✓ — objective criteria replacing subjective "would ship"
**No rewrite needed** — already correct (this is EXCELLENT)

---

**Line 436 (Verdict logic):**
> "ANY mandatory fails → FAIL"

**Status:** BINARY ✓
**No rewrite needed** — already correct

---

### LOW-SEVERITY VIOLATIONS (Edge cases, not critical)

**Line 499 (Risk mitigation):**
> "Builders don't write files: MEDIUM probability. Mitigation: Binary rule in EVERY prompt + file existence gate. Recovery: Nudge message → recovery agent"

**VIOLATION:** "MEDIUM probability" is JUDGMENT (not actionable)
**Note:** This is a risk table, not agent instruction — judgment language acceptable in meta-documentation.
**No rewrite needed** — acceptable for risk assessment context

---

## CORRECT BINARY RULES (Already Good)

### Section 4: Variant Design — EXCELLENT

**Line 82-84 (Variant A prohibition):**
> "YOU MUST NOT read ANY files in compositional-core/ beyond prohibitions.md and tokens.css. You CANNOT request library files. Any Read call to compositional-core/ beyond the two permitted files invalidates your build."

**Compliance:** BINARY ✓ — uses "MUST NOT," "CANNOT," "invalidates"
**Quality:** Triple-layered enforcement (prohibition + capability block + consequence)

---

**Line 109 (Variant C divergence gate):**
> "If vocabulary overlap >40% with ANY case study, you MUST REGENERATE with explicit constraint — justification alone is NOT sufficient."

**Compliance:** BINARY ✓ — uses "MUST REGENERATE," "NOT sufficient"
**Quality:** Removes judgment (justification rejected as insufficient)

---

### Section 5: Wave-by-Wave Execution — STRONG

**Line 173-186 (Critical prompt rules):**
All 9 rules use MANDATORY language:
1. "CRITICAL: You MUST write..." ✓
2. "CRITICAL: You MUST write..." ✓
3. "Document every file you Read..." ✓
4. "Document every phase transition..." ✓
5. "Output: Single HTML file..." ✓ (imperative)
6. "Soul constraints: border-radius:0..." ✓ (absolute)
7. "Guardrails: 940px container..." ✓ (hard thresholds)
8. "You are CONSTRUCTING..." ✓ (epistemological framing, binary identity)
9. "Your log MUST include..." ✓

**Compliance:** 9/9 BINARY ✓
**Quality:** This is THE BEST section of the plan — zero judgment language

---

### Section 6: Success Criteria — MOSTLY BINARY

**Line 390-398 (Mandatory criteria):**
All 29 criteria are BINARY (0/1, pass/fail):
- M1.1-M1.6: Soul compliance (0 violations required) ✓
- M2.1-M2.8: Guardrails (hard thresholds) ✓
- M3.1-M3.2: Library utilization (≥60%, ≥50%) ✓
- M4.1-M4.3: Phase compliance (see violation above — needs tightening)
- M5.1-M5.2: Multi-viewport (binary pass/fail) ✓
- M6.1-M6.2: Buildability (binary: page completable Y/N) ✓

**Compliance:** 26/29 BINARY (M4 needs rewrite)
**Quality:** Excellent use of measurable thresholds

---

**Line 430-449 (Verdict logic):**
```
Per-page:
  19/19 programmatic AND PA-05 both YES AND 29/29 mandatory
    → Recommended ≥10: PASS
    → Recommended 7-9: CONDITIONAL PASS
    → Recommended <7: FAIL
  ANY mandatory fails → FAIL
```

**Compliance:** BINARY ✓
**Quality:** Clear decision tree, no judgment calls

---

## STRUCTURAL vs BEHAVIORAL ANALYSIS

| Rule | Type | Enforcement | Risk |
|------|------|-------------|------|
| Variant A directory separation | STRUCTURAL | Agent cannot access files (permission-based) | LOW — but relies on agent not READING files manually |
| Variant A prohibition | BEHAVIORAL | Agent must CHOOSE not to read | MEDIUM — binary language helps, but agent can violate |
| Divergence gate (Phase 3.5) | STRUCTURAL | File write required before Phase 5 | LOW — timestamp verification catches violations |
| Phase-gated access (Variant C) | BEHAVIORAL | Agent must read in correct order | MEDIUM — no file-system block, relies on compliance |
| Library utilization threshold | STRUCTURAL | Programmatic measurement post-build | LOW — calculated objectively |
| File writing requirement | BEHAVIORAL | Agent must CHOOSE to write | HIGH — 42% failure rate across 14 teams |
| Two-phase boundary (M11) | BEHAVIORAL | Agent must commit metaphor before library | MEDIUM — timestamp check helps but not preventive |
| Playwright sequential waves | STRUCTURAL | Lead spawns sequentially | LOW — orchestration-level control |

**Key insight:** Plan relies heavily on BEHAVIORAL enforcement (agent choice) rather than STRUCTURAL (system prevents violation). This is acceptable IF binary language is used (100% compliance), but judgment language downgrades to ~0% compliance.

**Structural gaps:**
1. **Variant A isolation:** No file-system prohibition (agent can Read any file, relies on binary rule)
2. **Phase-gated access:** No technical block (agent can read case-studies/ in Phase 1, relies on binary rule)
3. **File writing:** No forced Write call (agent can terminate without writing, relies on binary rule + file existence check)

**Mitigation:** All 3 gaps are ACCEPTABLE because:
- Binary rules achieve 100% compliance (per MEMORY.md)
- File existence gates catch violations (structural verification)
- Lead can intervene (nudge message → recovery agent)

---

## MISSING BINARY RULES (Not Present, Should Be)

### 1. Track 1 Library Prohibition (Incomplete)

**Current state (Line 193):**
Lists permitted files but no PROHIBITION on reading beyond the list.

**Missing rule:**
```
Track 1 builder: YOU MUST NOT read case-studies/, mechanism-catalog.md, or grammar/ compositional rules. Your build uses ONLY: components.css, guidelines/, semantic-rules.md, responsive-strategy.md. Reading prohibited files invalidates your build.
```

**Severity:** HIGH — Track 1 is supposed to test library assembly (no deep mechanisms). If agent reads mechanism-catalog, test contaminated.

---

### 2. Content Keyword Overlap Check (Subjective → Objective)

**Current state (Line 164):**
"does NOT naturally map to geological/fractal/conversational" — subjective judgment.

**Missing rule:**
```
Lead MUST scan Track 2 content source file for library metaphor keywords BEFORE spawning builders. Prohibited keywords: geological, stratum, fractal, conversational, dialogue, Q&A (case-insensitive). If ≥3 instances found → INVALID CONTENT, select different source material.
```

**Severity:** MEDIUM — prevents confounding convergence with content overlap.

---

### 3. Variant D Library-First Framing (Unclear)

**Current state (Line 122):**
"Framing: 'Read the design system case studies and components. Build a page using these patterns.'"

**Missing constraint:**
```
Variant D: You MUST read case-studies/ BEFORE deriving any metaphor. Your build process: (1) Read ALL 9 case studies, (2) Select one as primary reference, (3) Build page using selected pattern. Do NOT derive metaphor independently — this variant tests library-first workflow.
```

**Severity:** MEDIUM — Variant D tests gravitational pull (library-first should produce ZERO novelty). Current framing doesn't enforce library-first order.

---

### 4. Builder Log Timestamp Verification (Enforcement Gap)

**Current state (Line 176):**
"Document every phase transition with timestamp (Phase 0 start, Phase 1 start, etc.)."

**Missing enforcement:**
```
Critical prompt rule #10: "Integration-auditor will verify your log timestamps. If Phase 5 timestamp (case-studies/ access) occurs BEFORE Phase 3.5 timestamp (metaphor commitment), your build is INVALIDATED regardless of output quality."
```

**Severity:** LOW — adds consequence to timestamp requirement (currently no stated verification).

---

## OVERALL COMPLIANCE: 82% binary (target: 100%)

### Breakdown by Section

| Section | Total Rules | Binary | Judgment | Compliance % |
|---------|-------------|--------|----------|--------------|
| 1. Context | 2 | 2 | 0 | 100% ✓ |
| 2. Team Topology | 0 (descriptive) | — | — | — |
| 3. Content Selection | 5 | 3 | 2 | 60% ⚠️ |
| 4. Variant Design | 12 | 11 | 1 (intentional) | 92% ✓ |
| 5. Wave Execution | 35 | 32 | 3 | 91% ✓ |
| 6. Success Criteria | 43 | 40 | 3 | 93% ✓ |
| 7. Disagreement Resolution | 4 | 4 | 0 | 100% ✓ |
| 8. Downstream Artifacts | 0 (table) | — | — | — |
| 9. Risk Mitigations | 7 | 7 | 0 (meta) | 100% ✓ |
| 10. Output Structure | 0 (descriptive) | — | — | — |
| 11. Timeline | 0 (descriptive) | — | — | — |
| 12. Verification Plan | 9 | 9 | 0 | 100% ✓ |
| 13. Source Files | 0 (table) | — | — | — |
| 14. Adversarial Review | 0 (retrospective) | — | — | — |

**Total actionable rules:** 117
**Binary rules:** 96
**Judgment rules:** 11
**Intentional weak framing (Variant B):** 1 (excluded from count)
**Adjusted compliance:** 96/107 = **89.7% binary**

**Re-calculated (excluding meta-documentation):**
Execution-critical rules only: 78
Binary: 68
Judgment: 10
**Critical-path compliance:** 68/78 = **87.2% binary**

**Verdict:** CONDITIONAL PASS — 87% is STRONG but below 100% target. The 10 judgment violations are concentrated in 4 sections:
1. Content preparation (3 violations)
2. Library access permissions (2 violations)
3. Success criteria edge cases (3 violations)
4. Missing rules (2 structural gaps)

---

## RECOMMENDATIONS

### IMMEDIATE REWRITES (Before Agent Spawning)

**Priority 1 (CRITICAL — agent will ignore these):**

1. **Line 60:** Track 1 word count → hard floor (1,600 words minimum)
2. **Line 67:** Track 2 richness → REQUIRED ≥12 (measured, not targeted)
3. **Line 163:** Content richness <12 → INVALID (must select different, not "should")
4. **Line 164:** Metaphor overlap → keyword scan (3+ instances = prohibited)
5. **Line 193:** Track 1 access → add PROHIBITION (no mechanism-catalog, no case-studies)

**Priority 2 (HIGH — ambiguous thresholds):**

6. **Line 258:** Mechanism count → add Track 1 threshold (≥5 mechanisms)
7. **Line 264:** Component coverage → clarify 8/9 families (89% coverage)
8. **Line 396:** Phase compliance → M4.3 divergence table MANDATORY if convergence

**Priority 3 (MEDIUM — missing rules):**

9. **Add:** Variant D library-first sequencing (read case-studies FIRST)
10. **Add:** Builder log timestamp verification enforcement

### STRUCTURAL IMPROVEMENTS (Longer-Term)

**Replace behavioral with structural where possible:**

1. **Variant A isolation:** Use file-system permissions (chmod) or separate directory (agent can't access compositional-core/)
   - Current: Behavioral prohibition ("MUST NOT read")
   - Improved: Structural block (files not accessible)

2. **Phase-gated access:** Use separate content delivery (Lead provides files only when phase permits)
   - Current: Agent has access, must not read early
   - Improved: Files delivered progressively (agent can't read what isn't there)

3. **File writing:** Use write-confirmation gate (agent can't proceed without file verification)
   - Current: Agent writes, Lead checks later
   - Improved: Agent calls Write, Lead verifies immediately, agent waits for confirmation

**Trade-off:** Structural enforcement adds orchestration complexity (Lead does more work). Behavioral + binary language achieves 100% compliance with less overhead.

---

## CONCLUSION

**Overall Assessment:** STRONG binary language in critical sections (builder prompts, soul constraints, verdict logic). Weakness concentrated in content preparation and library access permissions.

**Pass Criteria Met:**
- ✓ Builder prompt rules: 9/9 binary (100%)
- ✓ Variant A isolation: BINARY prohibition (though behavioral)
- ✓ Variant B weak framing: INTENTIONAL judgment (correct by design)
- ✓ Variant C phase gates: BINARY ("invalidates," "MUST NOT")
- ✓ Divergence gate: BINARY (>40% → MUST REGENERATE)
- ✓ Soul constraints: BINARY (absolute values)
- ✓ Success criteria: 40/43 binary (93%)

**Fail Criteria Present:**
- ⚠️ Content preparation: 3/5 judgment (word counts approximate, richness "targeted")
- ⚠️ Library access: Track 1 lacks explicit prohibition (implicit only)
- ⚠️ Missing rules: 4 structural gaps (keyword scan, Variant D sequencing, timestamp enforcement, Track 1 prohibition)

**Recommendation:** REWRITE 10 lines (Priority 1+2) before spawning agents. Plan will achieve 95%+ binary compliance after rewrites. Current 87% compliance is ACCEPTABLE but not OPTIMAL.

**Historical benchmark:** 4th team (Hierarchical Audit) achieved ~95% binary compliance and had zero builder failures. 13th team (Skill Enrichment) had ~70% binary compliance and 4/4 researcher failures. This plan at 87% is MID-RANGE — better than failed teams, below best teams.

**Final verdict:** CONDITIONAL PASS — rewrite 10 critical lines, then proceed.

---

**END BINARY RULE COMPLIANCE AUDIT**
