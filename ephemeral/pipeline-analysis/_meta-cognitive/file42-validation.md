# File 42 Validation Report: Cross-Validation Against Corpus Findings

**Validator:** file42-validator (Opus 4.6)
**Date:** 2026-02-18
**Subject:** Does the Operational Recipe (Pipeline v2 Draft 1) address ALL diagnosed failures?
**Method:** Each corpus-diagnosed failure mode checked against File 42's 1,746 lines, with evidence quality rated on a 3-point scale: STRONG (exact values + perception check), MODERATE (addressed but incomplete), WEAK (mentioned but not operationalized)

---

## ADDRESSED: Failure Modes File 42 Fully Resolves

### Failure 1: 50:1 Compression / No Perception Thresholds
**Corpus source:** File 02 (F-09, THE primary failure, 7/8 concordance), File 08 (entire report)
**File 42 location:** Phase 8A (lines 1257-1271), Appendix A (lines 1607-1624)
**Evidence quality:** STRONG

File 42 includes an explicit perception threshold table with 9 properties and minimum perceptible deltas:
- Background color: >= 10 RGB points (line 1613)
- Font-size: >= 2px (line 1616)
- Font-weight: 400 vs 600 (line 1617)
- Line-height: >= 0.2 (line 1615)
- Letter-spacing: >= 0.025em (line 1614)
- Border weight: >= 1px (line 1618)
- Margin-bottom: >= 8px (line 1619)
- Max-width: >= 6ch (line 1620)
- Color (text): >= 15 RGB net shift (line 1621)

Additionally, Phase 8A provides a verification procedure: "For every CSS property that varies across zones, verify the delta exceeds the perception threshold" (line 1258). The rule "If a human cannot SEE the difference without a color picker, do NOT ship the CSS" appears at line 1271.

**Assessment:** This is the corpus's #1 diagnosed failure mode, and File 42 addresses it comprehensively. The thresholds are embedded in Phase 5 values (font-size 15/16/17px, line-height 1.55/1.7/1.85, etc.) AND verified in Phase 8. Compliance is automatic if the recipe is followed.

**Note:** File 08 (perception-model) uses >=15 RGB for backgrounds; File 42 uses >=10 RGB (line 1613). The pipeline-implications meta-cognitive file also uses >=15 RGB. This discrepancy is noted but not blocking -- 10 RGB is the minimum; the recipe's actual values produce 10-20 RGB deltas which satisfy either threshold.

---

### Failure 2: Judgment Rules Instead of Binary / Recipe Format
**Corpus source:** File 02 (F-22, F-36-F-42), File 05 (Section 4), File 18 (prompt archetypes), File 22 (guardrail-to-playbook ratio)
**File 42 location:** Lines 10-25 (HOW TO READ THIS DOCUMENT), entire recipe structure
**Evidence quality:** STRONG

File 42 opens with an explicit contrast table (lines 14-19) showing Checklist (FAILED) vs Recipe (SUCCEEDED). Key metrics:
- Constraint:Action ratio: 0.32:1 (actions dominate) vs the master prompt's 3.0:1
- Verbs: "Delete", "Add", "Replace", "Set" vs "FAIL IF", "must be", "verify"
- Values: "font-size: 17px" (exact) vs "channel actively used" (any amplitude)
- Verification: "can you SEE the difference?" vs "did the CSS rule exist?"

Every phase (0-8) is structured as sequential steps with exact CSS values. Phase 4 provides copy-pasteable CSS blocks for borders (lines 688-717). Phase 5 provides exact typography values per zone (lines 946-1028). The recipe IS the format.

**Assessment:** The corpus's #2 finding (recipe > checklist) is File 42's organizing principle. The entire document is a recipe. Evidence quality is the highest possible -- the document self-identifies as a recipe and measures itself against the checklist that failed.

---

### Failure 3: Guardrail Factory (7.9:1 Ratio)
**Corpus source:** File 02 (F-10, BLOCKING), File 22 (structural architecture), MEMORY.md
**File 42 location:** Throughout; measured at line 20
**Evidence quality:** STRONG

File 42 self-reports a constraint:action ratio of 0.32:1 (line 20). This is a direct inversion of the master prompt's 7.9:1 guardrail-to-playbook ratio identified by File 22.

Verification by sampling Phase 4 (Structural Borders, lines 676-937):
- Action instructions: Steps 4.1-4.7, each with exact CSS blocks
- Constraints: "Divider margins MUST be <= 24px" (line 759), "THE RULE" statements
- Estimated ratio in Phase 4: ~7 action steps : ~3 constraint statements = 0.43:1

Phase 5 (Typography, lines 940-1036):
- Action instructions: Steps 5.1-5.3 with exact CSS
- Constraints: threshold references
- Estimated ratio: ~5 action steps : ~1 constraint = 0.20:1

**Assessment:** File 42 decisively inverts the guardrail:playbook ratio. The builder gets told WHAT TO DO with concrete CSS values. Constraints are embedded in the values themselves ("If you follow the steps in order, compliance is automatic" -- line 24). This directly addresses the structural architecture finding from File 22.

---

### Failure 4: Builder Visibility Cap (75 Lines, 13.4%)
**Corpus source:** File 02 (F-04, F-19, F-20), File 07 (shift #5), File 22 (cognitive load comparison)
**File 42 location:** Part 2, lines 1357-1399 (Team Architecture) and Risk 6 (lines 1579-1585)
**Evidence quality:** STRONG

File 42 explicitly addresses this in Part 2 (Team Architecture):
- Middle-tier: "1 builder agent (Opus). The recipe is the complete spec. One agent reads it, executes it, verifies it." (line 1361)
- Risk 6 warning: "Give the builder the COMPLETE recipe. Do NOT compress or summarize." (line 1584)
- "The recipe IS the builder's input. If the recipe is too long, shorten the RECIPE, not the builder's view of it." (line 1585)

For ceiling/flagship: the 4-wave architecture (lines 1371-1398) specifies that Wave 1 builder "Has complete recipe + Wave 0 outputs" (line 1381).

**Assessment:** File 42 eliminates the 75-line visibility cap entirely. The builder sees 100% of the specification. The document explicitly warns against recreating the compression failure. The single-builder pattern (1 agent, full spec) is the default.

---

### Failure 5: Inverted Quality Routing
**Corpus source:** File 02 (F-19, F-20), File 07 (manifest pattern), MEMORY.md
**File 42 location:** Part 4.2 (lines 1511-1518), Part 2 team architecture
**Evidence quality:** MODERATE

File 42's Part 4.2 lists files the builder should read for content-specific decisions:
- mechanism-catalog.md (18 mechanisms)
- merged-components.css
- case-studies/_INDEX.md (9 examples)
- RESEARCH-SYNTHESIS.md
- usage-criteria.md

This reverses the inversion: CSS-rich files (mechanism catalog, components) are routed TO the builder, not held by planners. However, this is in Part 4 ("What This Recipe Does Not Cover") rather than in the main recipe phases. The builder MAY read these but is not REQUIRED to read them as a recipe step.

For single-builder middle-tier (the default), routing is moot -- the builder reads everything. For multi-agent ceiling/flagship, the routing is specified in Part 2 but without explicit file-read directives per wave.

**Assessment:** Partially addressed. The single-builder default eliminates routing problems entirely. For multi-agent builds, the reference file routing exists but is advisory rather than mandatory. The master prompt's specific failure (best CSS references went to planner, prohibitions went to builder) would NOT recur in File 42's architecture because the builder always has the complete recipe. However, File 42 could be stronger by explicitly requiring the builder to read mechanism-catalog.md and components CSS as Phase 0 mandatory files (currently only prohibitions.md and tokens.css are mandatory in Step 0.1, lines 43-47).

---

### Failure 6: S-09 Stacking Loophole
**Corpus source:** File 02 (F-03, BLOCKING), File 08 (Section 5, all 11 transitions)
**File 42 location:** Step 0.6 (lines 136-158), Phase 8B (lines 1275-1281)
**Evidence quality:** STRONG

File 42 addresses this with explicit stacking arithmetic in Step 0.6:

```
Worst-case total gap = section-padding-bottom + divider-margin-top + divider-height + divider-margin-bottom + next-section-padding-top
Breathing worst case = 32px + 24px + 4px + 24px + 24px = 108px < 120px target -- PASSES
```

The fix has three components:
1. Divider margins capped at 16-24px (lines 729-744), down from 48-80px
2. Total gap target: 120px (line 151)
3. Phase 8B verification: "No gap exceeds 120px of blank background" (line 1277)

The WHY explanation (lines 155-157) explicitly references the S-09 stacking loophole as the "#2 failure cause" and explains why reduced margins prevent it.

**Assessment:** Comprehensively addressed. The stacking loophole is prevented by design (reduced margins make compliance automatic) AND verified at Phase 8B. The arithmetic proof is embedded in the recipe so the builder understands WHY these specific values were chosen. This is one of File 42's strongest resolutions.

---

### Failure 7: CSS Budget Misallocation (Sub-Perceptual Micro-Typography)
**Corpus source:** File 02 (F-27, F-32, F-33, F-34), File 05 (Section 1, 233 lines invisible)
**File 42 location:** Appendix B (lines 1628-1654), Appendix A (lines 1607-1624), Phase 5 values
**Evidence quality:** STRONG

File 42 prevents CSS budget misallocation through three mechanisms:

1. **Perception thresholds:** Every Phase 5 typography value exceeds the minimum perceptible delta. Font-size 15/16/17px = 2px deltas (exactly at threshold). Letter-spacing 0.02em/-0.01em = 0.03em total range (exceeds 0.025em threshold). No value below threshold is written.

2. **Deallocation protocol (Appendix B):** For REMEDIATION of existing pages, Phase 0 Deallocation explicitly identifies and removes sub-perceptual CSS. The criteria (lines 1636-1648) include: letter-spacing delta < 0.025em, background delta < 10 RGB, font-weight delta < 100 units, etc.

3. **Anti-drift warning (Risk 1, lines 1539-1545):** File 42 warns against sub-perceptual CSS drift over time and provides early warning signs and mitigation.

**Assessment:** File 42 prevents the specific CSS budget misallocation that consumed 22% of the flagship's CSS. The recipe values are at or above perception thresholds, the deallocation protocol catches existing invisible CSS, and the risk warning prevents future drift. The 99-line typographic convergence gradient (the worst offender) is structurally impossible under File 42's architecture because the recipe specifies 3 zone groups, not 12 individual zones.

---

### Failure 10: Recipe vs Checklist Format
**Corpus source:** File 02 (F-22), File 05 (Section 4), File 18 (prompt archetypes)
**File 42 location:** Lines 10-25 (meta-description), entire document structure
**Evidence quality:** STRONG

File 42 IS a recipe. This is not a finding to address -- it IS the address. Every phase tells the builder WHAT TO DO with exact values. The document self-identifies as a recipe at line 12: "This is a RECIPE, not a checklist." The contrast table at lines 14-19 makes the distinction explicit. The evidence from Middle-tier (4/4 with recipe) vs Flagship (1.5/4 with checklist) is cited at lines 22-23.

**Assessment:** Strongest possible resolution. The document's identity IS the answer to this failure mode.

---

## PARTIALLY ADDRESSED: Present But Incomplete

### Failure 8: Missing Agent Communication Protocol
**Corpus source:** File 02 (F-26, CP-A through CP-F), File 07 (Section 4), MEMORY.md ("zero SendMessage = quality cost")
**File 42 location:** Part 2, lines 1394-1397 (Communication protocol)
**Evidence quality:** MODERATE (for multi-agent) / N/A (for single-agent)

File 42 specifies:
- "Waves 0-1: File-bus only (agents write files, next wave reads files)"
- "Waves 2-3: File-bus + SendMessage for BLOCKING findings only"
- "Total agents: 6-7"

For the DEFAULT single-builder pattern, communication is irrelevant (one agent). For the ceiling/flagship 4-wave pattern, File 42 provides a minimal protocol. However:

**What's missing:**
1. No message templates (the master prompt had CP-A through CP-F with specific formats)
2. No minimum message count
3. No specification of WHAT counts as a "BLOCKING finding" worthy of SendMessage
4. The "file-bus + SendMessage for BLOCKING findings only" is a judgment call -- the exact failure mode the corpus diagnosed (communication as obligation, not task)

The MEMORY.md correction (from "zero SendMessage = success" to "zero SendMessage = quality cost") is NOT reflected in File 42's architecture. File 42 defaults to zero communication (single-builder) and minimal communication (4-wave), whereas the retro-analysis found that quality requires communication.

**Assessment:** The single-builder default sidesteps communication entirely, which the corpus found acceptable for middle-tier (PA-05 4/4 with zero messages). For ceiling/flagship, the communication protocol is skeletal. File 42 should specify: (a) what the builder should SEND if it encounters ambiguity, (b) what verification agents should SEND if they find BLOCKING issues, (c) whether the builder should PAUSE for verification agent reports or continue building. The "SendMessage for BLOCKING findings only" clause is underspecified.

---

### Failure 9: Sonnet-for-Builders (Unexamined)
**Corpus source:** MEMORY.md ("Sonnet-for-builders is unexamined"), File 07 (shift #2)
**File 42 location:** Part 2, lines 1365-1368 (When to use Opus vs Sonnet)
**Evidence quality:** MODERATE

File 42 addresses model selection:
- "Opus: For any page where content-specific decisions matter (metaphor, zone semantics, callout variant selection). Opus makes better judgment calls in ambiguous contexts."
- "Sonnet: For pages where all decisions are pre-made (template replication, Track 1 assembly with predetermined layout)."

This is a reasonable heuristic. However:

**What's missing:**
1. No specification of which recipe steps require Opus judgment vs Sonnet compliance
2. The retrospective's contrarian finding ("Sonnet complies meticulously; Opus complies AND creates beyond constraints -- potentially highest-leverage single intervention") is not cited
3. No guidance on WHEN the recipe's CONTENT DECISIONS (marked with [CONTENT DECISION] throughout) are simple enough for Sonnet vs complex enough for Opus
4. The pipeline-implications file (Q4, Build 4) identifies Sonnet vs Opus as "THE MOST IMPORTANT unresolved question from the retrospective" -- File 42 treats it as a resolved heuristic

**Assessment:** Partially addressed. The heuristic is reasonable but untested. The corpus explicitly flags this as the highest-leverage unexamined intervention. File 42 should either (a) recommend Opus as the default builder until Sonnet is tested, or (b) explicitly note that the Opus-vs-Sonnet question is unresolved and requires Build 4 (MVP validation) to answer. Currently, File 42 makes it sound like a settled question.

---

### Content-Form Relationship (Content Register Variation)
**Corpus source:** File 02 (F-16, RC-13), File 09 (content-agnosticism)
**File 42 location:** Step 0.2 (lines 52-73), Part 4.1 (lines 1494-1506), Part 4.3 (lines 1523-1531)
**Evidence quality:** MODERATE

File 42 addresses content analysis in Phase 0:
- Step 0.2 requires reading content and noting word count, content type inventory, and content arc
- [CONTENT DECISION] markers throughout flag where content-specific judgment is needed
- Part 4.1 explicitly lists 8 content-specific decisions the recipe cannot make

**What's missing:**
1. The recipe is content-AGNOSTIC by design but does not address the content-register uniformity problem. File 02's F-16 identified that "all 12 sections use identical third-person declarative prose, driving visual monotony because identical content types demand identical CSS treatment." File 42's recipe can create varied CSS, but if the content itself is uniform prose, the CSS variation will feel imposed rather than organic.
2. No guidance on HOW to vary content register (mixing lists, tables, quotes, short declarative statements) within the HTML skeleton phase. Step 1.4 (Component Markup) addresses callouts and tables but doesn't encourage content-type MIXING within sections.
3. File 09 (content-agnosticism) estimates that 46% of the pipeline is content-dependent, but File 42 doesn't quantify which phases are content-agnostic vs content-dependent.

**Assessment:** File 42 handles content-form alignment better than the master prompt (which ignored it entirely) by requiring content analysis in Phase 0. But the specific failure -- uniform prose register creating visual monotony -- is acknowledged as "out of scope" rather than solved. This is an honest limitation, not a gap.

---

### Metaphor Integration (Track 2)
**Corpus source:** File 02 (F-40, metaphor self-evaluation), MEMORY.md ("metaphor downgraded from structural to announced")
**File 42 location:** Part 4.3 (lines 1523-1531), Risk 8 (lines 1596-1601)
**Evidence quality:** WEAK

File 42 provides a 5-step metaphor integration process in Part 4.3:
1. Execute tension-composition skill Phases 0-3 (BLIND)
2. Lock metaphor at Phase 3.5
3. Map metaphor to zone semantics
4. Replace generic zone classes with metaphor-specific names
5. Adjust CSS values to express the metaphor

Risk 8 warns: "Guardrails are ABSOLUTE. No metaphor may override them."

**What's missing:**
1. The MG-04 failure (metaphor structural test self-administered by the agent who created it -- File 02 F-40, BLOCKING) is not addressed. File 42 does not specify WHO administers the metaphor structural test. If the builder self-evaluates ("remove all labels -- does visual structure communicate the metaphor?"), the same confirmation bias will produce the same false positive.
2. No perception threshold for metaphor visibility. The ceiling experiment had a "convergence" metaphor that produced sub-perceptual gradients. File 42's perception thresholds apply to individual CSS properties but don't prevent a metaphor from expressing itself through too many micro-variations across too many zones.
3. The "40% without labels" finding (Mode 4 PA downgrade from "structural" to "announced") is not referenced. File 42 should include: "Test metaphor perception: show the page to a fresh-eyes agent with labels removed. If they cannot identify the metaphor, it is announced, not structural."

**Assessment:** Weakly addressed. The 5-step process is a reasonable skeleton but misses the corpus's specific findings about metaphor evaluation failures. For Track 2 pages, File 42 needs a fresh-eyes metaphor gate and metaphor-specific perception thresholds.

---

## MISSING: Not in File 42 At All

### Plan-Fidelity Gate (RC-15)
**Corpus source:** File 02 (F-15, SIGNIFICANT), File 02 (F-41)
**File 42 location:** Not present
**Impact:** MODERATE

The master prompt's 6-gate sequence never checked whether the built artifact matched the build plan. File 42 eliminates the separate Planner agent (the plan IS the recipe), which makes plan-fidelity less critical. However, File 42's [CONTENT DECISION] markers create builder-generated plans (zone semantics, section architecture, transition types) during Phase 0. No gate verifies that Phase 1-7 execution matches the Phase 0 plan.

**Recommendation:** Add to Phase 8: "Review your Phase 0 plan. Does each section's actual layout match its planned layout shape (Step 0.5)? Does each transition match its planned type (Step 0.6)? If >2 deviations, document why."

---

### Absence Coherence Loophole (F-01)
**Corpus source:** File 02 (F-01, BLOCKING -- "consistent absence reads as restraint" validated omitting borders)
**File 42 location:** Not explicitly addressed
**Impact:** LOW (mitigated by recipe structure)

File 42 doesn't reference the "absence coherence" concept, but it doesn't need to. The recipe's action-oriented structure prevents this loophole: Phase 4 tells the builder to ADD borders (Step 4.1), not to consider whether borders should be present. By specifying exact border CSS, the recipe eliminates the philosophical justification for omission.

However, if the builder deviates from the recipe (skips Phase 4), no gate catches the omission. Phase 8C (Scale 5 Verification, line 1289) checks "At least 2 sections have distinct layout" but does not explicitly check for the presence of structural borders.

**Recommendation:** Add to Phase 8C: "Scale 4 (Component): Callout variants have distinct border colors AND background tints. Section-level left borders present on >= 3 sections."

---

### Kill Criteria / Recovery Protocols
**Corpus source:** File 02 (F-05), File 07 (shift #21, #22)
**File 42 location:** Not present
**Impact:** LOW for middle-tier, MODERATE for ceiling/flagship

File 42 has no kill criteria (ABORT conditions) and no recovery protocols (what to do when a gate fails). Phase 8 says "SHIP IF" / "FIX IF" / "DO NOT SHIP IF" (lines 1347-1349) but provides no guidance for what happens when the answer is "DO NOT SHIP."

For middle-tier (single builder), the builder can simply re-execute the failing phase. For ceiling/flagship, a DO NOT SHIP verdict after 4 waves of agent execution is costly. The master prompt had RP-01 through RP-04 (recovery protocols) and kill criteria ("max 2 fix cycles per gate, then ABORT").

**Recommendation:** Add after Phase 8: "If Phase 8D (Soul) fails: STOP. Soul violations require rebuilding -- return to Phase 2. If Phase 8B (Voids) or 8C (Scale) fails: return to the failing phase and re-execute. If Phase 8G (Gestalt) = PATCHED after 2 fix attempts: SHIP AS-IS at current tier, escalate to Mode 4 PA for detailed remediation guidance."

---

### Content Transformation Rules (CT-01 through CT-08)
**Corpus source:** File 02 (F-16), File 13 (fresh-eyes, Section 5A)
**File 42 location:** Not present (by design)
**Impact:** LOW (content-agnostic recipe doesn't transform content)

File 42 is explicitly content-agnostic: "This recipe is CONTENT-AGNOSTIC" (line 34). It does not include content transformation rules. The master prompt's CT-01 through CT-08 governed prose rewriting, which is a Track 2 concern, not a Track 1 building concern.

File 13 (adversarial fresh-eyes, Section 5A) identifies content transformation as something "the master prompt does better." File 42's approach is to leave content as-is and design CSS around it.

**Assessment:** Intentional omission, not a gap. Content transformation belongs in the tension-composition SKILL.md, not in a content-agnostic building recipe. File 42 correctly separates building (universal) from content transformation (specialized).

---

### CCS (Compositional Coupling Score) Computation
**Corpus source:** File 02 (F-23), File 10 (coherence model shift)
**File 42 location:** Not present (replaced by cascade verification)
**Impact:** LOW

File 42 replaces CCS with Phase 8E (Multi-Coherence Verification, lines 1303-1319). Instead of computing CCS (which was never computed in any experiment), Phase 8E provides a concrete cascade verification table showing how many CSS properties shift at each zone boundary, with a minimum of >= 3 properties per major transition.

This is the cascade verification approach recommended by File 10. It trades CCS's theoretical elegance for practical measurability.

**Assessment:** Intentional replacement, not a gap. CCS was never computed; cascade verification is always computable. The approach is consistent with File 42's philosophy of "binary, measurable, perception-based."

---

## CONTESTED: File 42 Asserts What Adversarial Files Challenge

### Contest 1: Recipe Format as Universal Solution
**File 42 assertion:** "Every step in this document tells you WHAT TO DO. If you follow the steps in order, compliance is automatic." (line 24)
**Adversarial challenge:** File 25, Finding 1 -- "The Recipe Thesis Is Under-Tested... supported by exactly TWO data points... No report asks: what if the recipe format works for REMEDIATION but fails for FROM-SCRATCH builds?"

File 42 IS a from-scratch recipe (it's content-agnostic, not remediation-specific). But the recipe thesis derives from: (1) Middle-tier recipe -> PA-05 4/4, and (2) Flagship checklist -> PA-05 1.5/4. File 25 correctly identifies this as N=2 evidence with a 3-variable confound (format + specificity + perception thresholds changed simultaneously).

**Assessment:** File 42 treats the recipe thesis as proven. The corpus's adversarial analysis treats it as promising-but-unconfirmed. File 42 should acknowledge: "This recipe's format is correlated with success (N=2), but the causal variable is not isolated. Build 1 (pipeline-implications Q5) will test whether the recipe format alone is sufficient."

---

### Contest 2: Perception Thresholds as Universal Constants
**File 42 assertion:** ">= 10 RGB points between adjacent zones" (line 1613), ">= 2px" font-size (line 1616), etc.
**Adversarial challenge:** File 25, Report 08 challenge -- "Perception thresholds are an ENGINEERING APPROXIMATION, not a perceptual truth... depend on viewing conditions, user characteristics, and context."

File 42 presents thresholds as fixed engineering constants. File 25 challenges that 10 RGB on warm cream may differ from 10 RGB on cool gray, and that scrolling perception differs from static comparison. The pipeline-implications file uses >=15 RGB (not 10), further indicating the values are not settled.

**Assessment:** File 42's thresholds are reasonable engineering approximations, but the document presents them with more certainty than the evidence warrants. The 10 vs 15 RGB discrepancy between files is a signal that the thresholds need empirical validation. File 42 should add: "These thresholds are derived from single-experiment forensics (N=1). Empirical validation across viewing conditions is recommended. When in doubt, exceed the threshold by 50%."

---

### Contest 3: Sub-Perceptual CSS Has Zero Value
**File 42 assertion:** "If a human cannot SEE the difference without a color picker, do NOT write the CSS" (line 1271)
**Adversarial challenge:** File 25, Finding 2 -- "ALL 10 reports accept that 216 lines of sub-perceptual CSS had zero value. None examines the counter-argument: that sub-perceptual variation contributes to ATMOSPHERE."

File 42 treats sub-perceptual CSS as strictly zero-value. File 25 raises the possibility that sub-threshold stimuli contribute to affective response (citing fashion industry stitch density as an analogy). The builder who performed the remediation preserved 2 sub-perceptual rules, suggesting even practitioners don't fully accept the zero-value claim.

**Assessment:** File 42's position is operationally correct (don't waste CSS budget on invisible variation when visible variation is absent). But the absolutist framing ("do NOT write the CSS") may be over-strong. For a page already at PA-05 4/4 with visible richness at every scale, adding sub-perceptual refinement layers might contribute to the "atmospheric" quality that distinguishes 4/4 from a hypothetical 5/5. File 42 could soften to: "Do NOT write sub-perceptual CSS until ALL channels have perceptible activation. Once perception is established, sub-perceptual refinement is a judgment call."

---

### Contest 4: CD-006 as Unexamined Benchmark
**File 42 assertion:** References CD-006 extensively as the quality standard (lines 22, 86, 567, 1731-1737)
**Adversarial challenge:** File 25, Finding 3 -- "No report examines CD-006's production conditions in detail. Was CD-006 built by a single Opus agent? With or without perception thresholds? If CD-006 was built WITHOUT a recipe and WITHOUT perception thresholds, then the recipe + thresholds theory is INSUFFICIENT to explain quality."

CD-006 scored 39/40 without any recipe, without perception thresholds, and without the remediation. If File 42's theory (recipe + thresholds = quality) were complete, CD-006's success under different conditions would be unexplained. The most likely explanation: CD-006 was built by an Opus agent with compositional fluency (the "ambient richness" model from File 05 Section 5). The recipe may be a SUBSTITUTE for compositional fluency, not the CAUSE of quality.

**Assessment:** File 42 uses CD-006 as evidence for the recipe approach, but CD-006 was produced by a different approach. This doesn't invalidate File 42's recipe, but it does suggest the recipe is sufficient-but-not-necessary. An Opus builder with compositional fluency may produce superior results without the recipe. File 42 should note this explicitly in Part 3.4 (Core Principle).

---

### Contest 5: N=2 Limitation
**File 42 assertion:** Appendix D (Provenance and Evidence, lines 1720-1738) cites findings with "UNANIMOUS" and "CONFIRMED" concordance labels
**Adversarial challenge:** File 25, Finding 4 -- "Every report draws conclusions from ONE flagship experiment, ONE ceiling experiment, and ONE middle-tier experiment. Three data points."

File 42's Appendix D lists 12 findings with concordance ratings. Most are "CONFIRMED" based on the same 2-3 experiments. File 27 (reproducibility-test) explicitly warns against generalization from N=2.

**Assessment:** File 42's evidence provenance is transparent (Appendix D) but presents N=2 concordance with language that implies higher confidence than warranted. "CONFIRMED" based on 2 data points should be "SUPPORTED (N=2)" or "OBSERVED (insufficient N for confirmation)." File 42 should add a caveat to Appendix D: "All findings derive from N<=3 experiments. Concordance ratings reflect agreement across ANALYSES of the same experiments, not independent replications."

---

## OVERALL VERDICT

### Quantitative Assessment

| Category | Count | Failure IDs |
|----------|-------|-------------|
| FULLY ADDRESSED | 7 | F1 (perception thresholds), F2 (recipe format), F3 (guardrail ratio), F4 (builder visibility), F6 (S-09 stacking), F7 (CSS budget), F10 (recipe vs checklist) |
| PARTIALLY ADDRESSED | 4 | F5 (quality routing), F8 (agent communication), F9 (Sonnet-for-builders), Content-form |
| MISSING | 4 | Plan-fidelity gate, Kill criteria, Content transformation (intentional), CCS (replaced) |
| CONTESTED | 5 | Recipe universality, Threshold values, Sub-perceptual zero-value, CD-006 benchmark, N=2 confidence |

### Verdict: READY FOR PIPELINE V2 WITH REVISIONS

File 42 addresses the 7 most critical failure modes identified by the corpus:
1. Perception thresholds (the #1 failure) -- STRONG
2. Recipe format (the #2 finding) -- STRONG
3. Builder visibility (the #3 failure) -- STRONG
4. S-09 stacking (the #2 spatial failure) -- STRONG
5. CSS budget misallocation -- STRONG
6. Guardrail-to-playbook ratio -- STRONG
7. Void prevention -- STRONG

The 4 partially addressed items are real but not blocking:
- Agent communication: only matters for ceiling/flagship (5-10% of pages)
- Sonnet-for-builders: explicitly noted as unresolved in the corpus
- Content-form alignment: honestly out of scope for a building recipe
- Quality routing: mitigated by single-builder default

The 4 missing items are either intentionally omitted (content transformation, CCS) or low-impact (plan-fidelity, kill criteria).

The 5 contested items represent the frontier of uncertainty. File 42 should acknowledge these with appropriate epistemic humility rather than presenting them as settled.

### Recommended Revisions Before Codification

**Priority 1 (address before Pipeline v2 launch):**
1. Add fresh-eyes metaphor gate to Part 4.3 (Track 2 metaphor integration)
2. Add explicit border-presence check to Phase 8C ("Section-level left borders present on >= 3 sections")
3. Add N=2 caveat to Appendix D
4. Reconcile 10 vs 15 RGB background threshold (pipeline-implications uses 15; File 42 uses 10)

**Priority 2 (address after Build 1 validation):**
5. Strengthen ceiling/flagship communication protocol (Part 2)
6. Add plan-fidelity check to Phase 8 (Phase 0 plan vs Phase 7 output)
7. Add kill criteria and recovery protocols after Phase 8
8. Add Opus-default recommendation for builders until Sonnet is tested (Build 4)

**Priority 3 (epistemic adjustments):**
9. Soften sub-perceptual zero-value claim to "do not write sub-perceptual CSS until perceptible channels are established"
10. Note CD-006 as evidence of compositional fluency working WITHOUT a recipe (Part 3.4)
11. Add recipe-format N=2 caveat to line 24 area
12. Note that perception thresholds need empirical validation across viewing conditions (Appendix A)

### What File 42 Gets Right That the Master Prompt Got Wrong

File 42 represents a genuine paradigm shift from the master prompt, not an incremental improvement. The 5 core inversions:

| Dimension | Master Prompt | File 42 |
|-----------|--------------|---------|
| Format | Checklist (constraints) | Recipe (actions) |
| Verification | Rule compliance | Perception checks |
| Builder input | 75 lines (13.4%) | ~1,746 lines (100%) |
| CSS philosophy | Deploy then check | Specify perceptible values |
| Agent topology | 12 agents, hub-spoke | 1 builder (default) |

File 42 is a credible Pipeline v2 Draft 1. With the Priority 1 revisions, it is ready for Build 1 (validation). The Priority 2 and 3 revisions can be incorporated based on Build 1 results.

---

**END OF VALIDATION REPORT**
**Total corpus files cross-referenced:** 8 primary + MEMORY.md
**Total failure modes evaluated:** 10 diagnosed + 4 supplementary
**Verdict:** READY FOR V2 WITH REVISIONS (7 ADDRESSED, 4 PARTIAL, 4 MISSING/INTENTIONAL, 5 CONTESTED)
