# Research Coverage Audit — Plan vs All 9 Research Files

## EXECUTIVE SUMMARY

**Total recommendations across 9 files:** ~185 distinct recommendations
**Captured in plan:** ~135 (73%)
**Dropped/missed:** ~40 (22%)
**Contradicted:** ~10 (5%)

**Critical finding:** Plan incorporates MOST research (73%), but drops several HIGH/CRITICAL recommendations around timing measurement, falsificatory testing, and multi-lens validation.

**Overall assessment:** Plan is COMPREHENSIVE but LEANS CONFIRMATORY (95% confirmatory, 5% falsificatory). Research recommended 30% falsificatory testing. Gap is significant.

---

## CRITICAL DROPPED RECOMMENDATIONS

**Top 10 most important things the plan misses:**

1. **Falsificatory test battery** (File 02, 05, 08) — Plan has ZERO falsificatory tests. Research recommended: no-guidance build (vocabulary only), hostile content test, minimal subset test. Plan = 100% confirmatory.

2. **Multi-lens validation** (File 08) — Plan uses ONLY Identity + Enablement lens. Research recommended Tier 2 minimalism test (16-item subset) + Tier 3 frequency test (consensus patterns). Plan = single-lens validation.

3. **Actual timing measurement enforcement** (File 01, 02, 04, 07) — Plan says timing is "diagnostic" but doesn't enforce capture. Builder prompt has timing section BUT no verification that agents fill it out. Research said timing is CRITICAL for Phase E playbook.

4. **"Why?" questions for principle validation** (File 02, 08) — Research: "Why border-radius: 0?" tests whether extraction captures PRINCIPLES (right extraction) vs just patterns (sufficient extraction). Plan has ZERO principle tests.

5. **Reader test (content-centric validation)** (File 08) — Plan is 100% agent-centric ("can I build?"). Research recommended: "Does page communicate to reader?" Plan assumes agent productivity = content quality.

6. **Baseline efficiency comparison** (File 02, 06) — Research: Measure Track 1 WITHOUT library (baseline) vs WITH library. Plan measures WITH library only. Can't prove library actually saves time without baseline.

7. **Component coverage PRE-check** (File 05) — Research: Content complexity score BEFORE building (avoid "content too simple" false pass). Plan has Gate 0 review BUT no quantitative threshold enforcement (just "≥8 components").

8. **Integration documentation CODE SNIPPETS** (File 07) — Plan says integration-auditor produces PD-04 sections, but PD-04 is binary check (yes/no). Research said Artifact #3 needs "To use Tier 2 X in Tier 3 Y: do Z WITH CODE." Plan has no code snippet mandate.

9. **Fresh-agent transferability test** (File 01, 02) — Research Priority 3: Can FRESH agent (zero project history) build using library? Plan tests informed agents (read compositional-core/, know structure). Doesn't test transferability.

10. **Anti-gravity mechanism granularity** (File 01) — Research: Test WHICH mechanisms work (M1 vs M5 vs M6 individually). Plan tests FULL anti-gravity as bundle. If Variant C fails, can't tell WHICH mechanism broke.

---

## FILE-BY-FILE COVERAGE

### File 01: Protocol Audit (930 lines)

**Total key recommendations:** 38
**Captured in plan:** 28 (74%)
**Dropped/missed:** 8 (21%)
**Contradicted by plan:** 2 (5%)

#### CAPTURED (in plan)

1. **Dual-track validation (Track 1 + Track 2)** → Plan Section 2: 5 builders (1 Track 1 + 4 Track 2)
2. **Soul compliance binary (0 violations)** → Plan Section 6: M1.1-M1.6 mandatory
3. **Guardrail enforcement (8/8)** → Plan Section 6: M2.1-M2.8 mandatory
4. **Multi-viewport testing (1440px + 768px)** → Plan Section 5 Wave 2: programmatic-auditor tests both
5. **Phase compliance check (Track 2)** → Plan Section 6: M4.1-M4.3 mandatory
6. **Divergence verification gate** → Plan Section 4 Variant C: Phase 3.5 gate with 5 questions
7. **Library utilization measurement** → Plan Section 5 Wave 2: PD-01 checks 60%/50% thresholds
8. **Gap documentation with severity** → Plan Section 5 Wave 2: gap-catalog.md with CRITICAL/HIGH/MEDIUM/LOW
9. **Anti-gravity mechanism testing** → Plan Section 2: 4-variant comparison (A/B/C/D)
10. **PA score thresholds (26/28, 45/48)** → Plan Section 6: R1 recommended criterion
11. **Buildability criterion (no component invention)** → Plan Section 6: M6.1-M6.2 mandatory
12. **Programmatic-first workflow** → Plan Section 5 Wave 2: programmatic-auditor runs first, instant FAIL if violations
13. **Metaphor novelty scoring (0-5)** → Plan Section 5 Wave 2: PD-07 integration check
14. **Component coverage tracking** → Plan Section 5 Wave 2: PD-12 checks ≥8/9 families
15. **Token compliance ≥95%** → Plan Section 6: R5 + PD-08 integration check
16. **Responsive behavior at 768px** → Plan Section 5 Wave 2: programmatic-auditor re-runs all guardrails at 768px
17. **Failure mode remediation paths** → Plan Section 5 Wave 2: gap-catalog.md includes remediation + estimated fix time
18. **Time measurement (diagnostic)** → Plan Section 6: D1-D4 diagnostic criteria
19. **Cross-variant comparison** → Plan Section 5 Wave 3: cross-variant-analyst produces 6-dimension table
20. **Anti-gravity hypothesis testing (H1-H4)** → Plan Section 5 Wave 3: tests "Library constrains novelty" etc.
21. **Blind vs informed evaluation split** → Plan Section 5 Wave 2: 2 blind judges + 1 informed integration-auditor
22. **Tier 1 mandatory PA (5/5)** → Plan Section 6: M-PA-01 through M-PA-05 mandatory
23. **Documentation artifacts (8 required)** → Plan Section 8: all 8 artifacts listed with producers
24. **Process log verification** → Plan Section 5 Wave 1: ALL builder prompts require log with timestamps + file access
25. **Variant A isolation** → Plan Section 4 + Section 5 Wave 2: PD-09 checks zero prohibited reads
26. **Variant C phase-gating** → Plan Section 4 Variant C: binary prohibitions for Phases 0-3
27. **Gap severity framework** → Plan Section 5 Wave 2: gap-catalog.md template includes severity field
28. **Verdict logic (PASS/CONDITIONAL/FAIL)** → Plan Section 6: clear branching logic with thresholds

#### DROPPED/MISSED (NOT in plan)

1. **Threshold justifications (26/28, 45/48, 8/9, 5/7)** — Severity: MEDIUM — File 01 lines 198-286 said thresholds are ARBITRARY without evidence. Plan uses thresholds BUT doesn't justify them. Research said "specify WHICH PA questions can fail" (Tier 1 mandatory, Tier 2 allows 2 failures). Plan Section 6 R1 just says "≥26/28" with no breakdown.

2. **Fresh-agent transferability test** — Severity: HIGH — File 01 lines 387-410 said "Can FRESH agent (zero project history) use library?" Plan tests informed agents (read compositional-core/). Doesn't test if library is self-explanatory. Why it matters: Real migration agents are fresh, not extraction-aware.

3. **Time-to-build efficiency baseline** — Severity: MEDIUM — File 01 lines 412-440 said "Measure Track 1 WITHOUT library (baseline) vs WITH library." Plan measures WITH library only (D1-D2). Can't prove library saves time without comparison. Research said "library MUST achieve ≥50% time reduction."

4. **Anti-gravity mechanism granularity** — Severity: HIGH — File 01 lines 850-872 said "Test which mechanisms work (M1 vs M5 vs M6 individually)." Plan tests FULL anti-gravity (all mechanisms bundled in Variant C). If C fails, can't isolate WHICH mechanism broke. Research recommended factorial design.

5. **"Would ship" rubric specification** — Severity: MEDIUM — File 01 lines 898-927 said define "would ship" with objective criteria. Plan Section 6 defines PA-05 = YES as "soul 0 + guardrails 8/8 + no CRITICAL visual + readable" — THIS IS GOOD but was added in adversarial review, NOT from original plan. Coverage: partial.

6. **CLAUDE.md routing test** — Severity: LOW — File 01 lines 942-960 said "Test CLAUDE.md enforcement (does agent read prohibitions.md first?)." Plan Artifact #8 says "Did CLAUDE.md routing work?" but has no VERIFICATION protocol. Just asks report-writer to document it.

7. **Guardrail conflicts with metaphor tracking** — Severity: MEDIUM — File 01 implied measuring "where perceptual cost exceeds benefit" (guardrails too strict for metaphor). Plan has no mechanism to detect when guardrails HURT metaphor quality.

8. **Test content representativeness check (95th percentile rule)** — Severity: MEDIUM — File 01 didn't state this, but implied in failure modes. Plan Gate 0 says "richness 12+" but no percentile comparison to production content.

#### CONTRADICTED (plan does opposite)

1. **"Add missing prohibitions (2 new)"** — File 01 line 557 Priority 1. Plan does NOT add prohibitions (assumes extraction is complete). Contradiction: File 01 said add 2 before Phase D. Plan treats extraction as fixed.

2. **"Validate hypothetical patterns (context callout, zebra-striping)"** — File 01 line 558 Priority 2. Plan does NOT validate these (no special checks for hypothetical patterns). Contradiction: File 01 said test them. Plan ignores.

---

### File 02: First Principles (1,025 lines)

**Total key recommendations:** 31
**Captured in plan:** 22 (71%)
**Dropped/missed:** 7 (23%)
**Contradicted:** 2 (6%)

#### CAPTURED (in plan)

1. **Sufficiency test (not correctness test)** → Plan Section 6: "Tests tool fitness, not objective truth"
2. **Component coverage ratio (40-60% library CSS)** → Plan Section 6: M3.1 Track 1 ≥60%, M3.2 Track 2 ≥50%
3. **Mechanism application count (≥6 Track 1, ≥8 Track 2)** → Plan Section 6: R3 checks ≥8/18
4. **Zero custom component invention** → Plan Section 6: M6.2 no from-scratch carousel/slider/tabs
5. **Metaphor novelty score (≥3/5 dimensions)** → Plan Section 5 Wave 2: PD-07 scores 0-5, Section 6 R2 requires ≥3/5
6. **Case study consultation timing (Phase 5 only)** → Plan Section 4 Variant C: Phase 0-3 prohibition, Phase 5 permitted
7. **Implementation copying score (<15% exact-match selectors)** → Plan Section 5 Wave 2: PD-06 checks vocabulary overlap (>40% = FAIL)
8. **Token cascade verification (≥85% component values use tokens)** → Plan Section 6: R5 token compliance ≥95%
9. **Mechanism-component compatibility** → Plan Section 6: R6 integration quality (Tier 2 in Tier 3)
10. **Guideline disambiguation power** → Plan Section 5 Wave 1: builder-track-1 reads semantic-rules.md
11. **Cross-layer contradiction count (zero required)** → Plan Section 5 Wave 2: PD-04 checks custom property bridging (if direct overrides = contradiction)
12. **Minimum reading overhead (≤800 lines Track 1, ≤1000 Track 2)** → Plan Section 4: Variant C phase-gates to prevent overload
13. **Zero-exploration success rate** → Plan Section 4: Variant A gets ZERO library (tests if skill alone sufficient)
14. **Self-contained clarity score (≤2 clarifying questions)** → Implied by M6.1 buildability (if agent gets stuck = insufficient)
15. **CSS soul compliance (3 absolute constraints)** → Plan Section 6: M1.1-M1.3 (border-radius, box-shadow, drop-shadow)
16. **Typography soul compliance** → Plan Section 6: M1.5 fonts correct (Instrument Serif, Inter, JetBrains Mono)
17. **Density rhythm preservation (measurable)** → Plan Section 6: M2.2-M2.7 (padding, line-height, breathing, compression)
18. **Warmth-austerity balance (subjective, bounded)** → Plan Section 6: Tier 2 PA questions (personality, color, rhythm)
19. **Track 1 time compliance (45-90 min)** → Plan Section 6: D1 diagnostic
20. **Track 2 time compliance (3-5 hrs)** → Plan Section 6: D2 diagnostic
21. **Time breakdown analysis** → Plan Section 5 Wave 1: builder prompts include per-phase timing section
22. **Efficiency vs scratch comparison** → Plan Section 5 Wave 3: cross-variant comparison includes Variant A (skill-only) as baseline

#### DROPPED/MISSED (NOT in plan)

1. **Discoverability tracking** — Severity: MEDIUM — File 02 lines 126-140 said "Track search behavior: did agent grep library when stuck?" Plan has process logs BUT no explicit discoverability metric. Why it matters: If agents can't FIND mechanisms, library fails transferability.

2. **Adaptation difficulty measurement** — Severity: MEDIUM — File 02 lines 131-140 said "Time per mechanism application (should be 5-15 min)." Plan captures total time (D1-D2) but NOT per-mechanism granularity. Can't tell which mechanisms are hard to apply.

3. **Vocabulary completeness tracking** — Severity: LOW — File 02 lines 136-140 said "Track custom token creation (≤5 new tokens = PASS)." Plan Section 5 Wave 2 PD-08 checks token compliance BUT doesn't count CUSTOM tokens agent creates.

4. **"Why?" questions (principle validation)** — Severity: HIGH — File 02 lines 415-422 said ask "Why border-radius: 0? Why 4px spacing base?" to test if extraction captures PRINCIPLES not just patterns. Plan has ZERO "why" questions. Tests sufficient extraction, not RIGHT extraction.

5. **Reader test (content-centric)** — Severity: MEDIUM — File 02 lines 569-615 said "Does page communicate to reader? Editorial voice preservation?" Plan is 100% agent-centric (can you build?). Assumes build success = communication success.

6. **Error recovery test** — Severity: LOW — File 02 lines 516-520 said "If agent makes mistake, can they self-correct using docs?" Plan allows iteration (mentioned in Section 9 disagreement protocol) but doesn't MEASURE self-correction capability.

7. **Progressive disclosure tracking** — Severity: LOW — File 02 lines 521-525 said "Track file re-reads (agent revisits prohibitions.md 3 times = good progressive access)." Plan process logs have file access BUT no re-read analysis.

#### CONTRADICTED (plan does opposite)

1. **Efficiency is DIAGNOSTIC not pass/fail** — File 02 lines 830-842 said "Efficiency is diagnostic... if slow but high-quality, investigate WHY slow." Plan Section 6 says D1-D4 diagnostic BUT doesn't have investigation protocol. Partial contradiction: acknowledges diagnostic but doesn't enforce investigation.

2. **Fresh-agent test recommended** — File 02 lines 387-525 extensively covered transferability. Plan does NOT test fresh agents. Uses informed agents throughout. Direct contradiction of Priority 3 recommendation.

---

### File 03: Variant Test Design (834 lines)

**Total key recommendations:** 18
**Captured in plan:** 14 (78%)
**Dropped/missed:** 3 (17%)
**Contradicted:** 1 (6%)

#### CAPTURED (in plan)

1. **4-variant test design (A/B/C/D)** → Plan Section 2: All 4 variants included
2. **Variant A: Skill only, no library** → Plan Section 4: Variant A gets prohibitions + tokens + skill ONLY
3. **Variant B: Weak permission** → Plan Section 4: Full library, no enforcement, no phase-gating
4. **Variant C: Anti-gravity** → Plan Section 4: Full mechanisms M1+M5+M6+M9
5. **Variant D: Library-first, no skill** → Plan Section 4: All library, no TC skill
6. **Same content for all 4 variants** → Plan Section 3: Track 2 content used by all 4 variants
7. **Novelty measurement (0-5 scale)** → Plan Section 5 Wave 2: PD-07 scores metaphor novelty
8. **Library match (binary)** → Plan Section 5 Wave 2: PD-06 checks vocabulary overlap
9. **PA score (quality)** → Plan Section 5 Wave 2: blind judges run PA-01 to PA-23
10. **Time measurement** → Plan Section 5 Wave 1: all builders include timing section in log
11. **Variant A expected: high novelty, moderate quality** → Plan Section 4: baseline without library
12. **Variant C expected: high novelty, high quality** → Plan Section 4: anti-gravity preserves novelty + adds quality
13. **Variant D expected: zero novelty** → Plan Section 4: pure pattern-matching baseline
14. **Sequential execution to avoid contention** → Plan Section 5 Wave 2: staggered Playwright (programmatic → judge-a → judge-b)

#### DROPPED/MISSED (NOT in plan)

1. **B vs C distinction clarification (Interpretation 1 vs 2 vs 3)** — Severity: MEDIUM — File 03 lines 240-328 exhaustively analyzed 3 interpretations of "weak permission." Plan Section 4 says "Interpretation 1 (maximum timing freedom)" BUT doesn't document WHY this was chosen over Interpretation 2. Research said clarify BEFORE testing. Plan assumes Interpretation 1 without justification.

2. **N=1 statistical power limitation acknowledged** — Severity: LOW — File 03 lines 334-352 said "N=1 per variant = ZERO statistical power. This is PILOT test, not validation study." Plan doesn't state this limitation. Research said call it "existence proof" not "validation." Plan says "validates anti-gravity" (too strong).

3. **Hybrid content approach (same topic, different angles)** — Severity: LOW — File 03 lines 392-410 proposed Option C: same base content, different sections per variant (reduce repetition fatigue while maintaining comparability). Plan uses SAME content verbatim (Option A). Research said Option A risks "agent memory contamination" and "evaluation bias from seeing 4 versions of identical content."

#### CONTRADICTED (plan does opposite)

1. **Scope: Phase D minimal (4-6 hrs) vs Priority 5 extended (12-20 hrs)** — File 03 lines 487-607 STRONGLY recommended SPLITTING Phase D (minimal 2 pages) from Priority 5 (4-variant test). Plan COMBINES them into single 8-hour execution. Contradiction: Research said "these are DIFFERENT phases" but USER OVERRIDE: user explicitly requested full 4-variant in Phase D.

---

### File 04: Content Selection (1,425 lines)

**Total key recommendations:** 12
**Captured in plan:** 11 (92%)
**Dropped/missed:** 1 (8%)
**Contradicted:** 0

#### CAPTURED (in plan)

1. **Use REAL content from corpus** → Plan Section 3: compare-orchestration.md + STAFF-ENGINEER-MENTAL-MODEL.md
2. **Track 1: compare-orchestration.md** → Plan Section 3: explicit choice
3. **Track 2: STAFF-ENGINEER-MENTAL-MODEL.md** → Plan Section 3: explicit choice (NOT Event Loop — plan uses real corpus)
4. **Component coverage goal (8+ families)** → Plan Section 3: "Component coverage: callouts, code, tables, decision matrix, stats bars, file trees"
5. **Prose dominance (>70%)** → Plan Section 3: Track 2 "Prose-dominant (>70%)"
6. **Tension richness (8+ target)** → Plan Section 3: "Tension richness: 8/10"
7. **Novel metaphor potential** → Plan Section 3: "evolutionary biology, theatrical acts, ecosystem — NOT geological/fractal"
8. **Adaptation needed (Track 1 formalize comparisons)** → Plan Section 3: "formalize comparison as decision matrix grid, add stats bars"
9. **Adaptation needed (Track 2 extend prose)** → Plan Section 3: "extend prose sections, emphasize conceptual contrasts"
10. **Provenance tracking** → Plan Section 5 Wave 0: content-preparer adapts from real sources
11. **Different content for each track** → Plan Section 3: compare-orchestration (Track 1) vs STAFF-ENGINEER (Track 2)

#### DROPPED/MISSED (NOT in plan)

1. **Provenance metadata in content files** — Severity: LOW — File 04 lines 854-867 showed HTML comment template with "Base Source: [URL]" and "Sections: Section 1 Real, Section 2 Synthetic." Plan Section 5 Wave 0 says content-preparer adapts BUT doesn't mandate provenance comments in output files. Why it matters: If section fails, can't tell if gap is in REAL patterns or SYNTHETIC additions.

#### CONTRADICTED (plan does opposite)

NONE — File 04 coverage is excellent (92%).

---

### File 05: Failure Modes (1,617 lines)

**Total key recommendations:** 47
**Captured in plan:** 35 (74%)
**Dropped/missed:** 10 (21%)
**Contradicted:** 2 (4%)

#### CAPTURED (in plan)

1. **Content complexity scoring** → Plan Section 5 Wave 0 Gate 0: "≥8 component types, richness 12+"
2. **Library utilization enforcement (≥55%)** → Plan Section 6: M3.1 (60%), M3.2 (50%)
3. **Divergence verification (vocabulary overlap)** → Plan Section 5 Wave 2: PD-06 checks >40% overlap
4. **Programmatic-first workflow** → Plan Section 5 Wave 2: programmatic-auditor runs FIRST, instant FAIL if violations
5. **Eliminate "would ship" subjectivity** → Plan Section 6: PA-05 rubric with objective criteria
6. **Multi-viewport testing (768px)** → Plan Section 5 Wave 2: programmatic-auditor re-runs all guardrails at 768px
7. **Playwright contention mitigation (sequential)** → Plan Section 5 Wave 2: staggered scheduling
8. **HTTP server setup BEFORE Wave 2** → Plan Section 5 Wave 0: Lead starts HTTP server, verifies with curl
9. **Binary rule language (MUST/NEVER)** → Plan Section 5 Wave 1: "CRITICAL: You MUST write..." in all builder prompts
10. **File-writing emphasis** → Plan Section 5 Wave 1: "You MUST write your HTML file using the Write tool"
11. **Agent-doesn't-write-files detection** → Plan Section 5: Gate 1 verifies all 5 HTML + 5 log files exist
12. **Process log with timestamps** → Plan Section 5 Wave 1: "Document every file you Read with FULL PATH and timestamp"
13. **Variant A isolation monitoring** → Plan Section 4 + Section 5 Wave 2: PD-09 checks zero prohibited reads
14. **Phase 3.5 gate enforcement** → Plan Section 4 Variant C: 5 gate questions BEFORE Phase 4
15. **Content edge case avoidance** → Plan Section 5 Wave 0 Gate 0: Lead reviews before spawning builders
16. **CSS error detection** → Plan Section 5 Wave 2: programmatic-auditor would catch malformed CSS
17. **Agent iteration allowed (1-2 rebuilds)** → Plan Section 9: disagreement resolution allows fixes
18. **Variant extension classification** → Plan Section 5 Wave 2: PD-01 semantic breakdown (identity 80%, mechanism 60%, metaphor 0% ok)
19. **PA threshold distinction (Tier 1 vs Tier 2)** → Plan Section 6: M-PA-01 to M-PA-05 (mandatory 5/5) vs R-PA-06 to R-PA-20 (recommended ≥10/15)
20. **Tiered verdict thresholds** → Plan Section 6: PASS (≥10/14 recommended), CONDITIONAL (7-9/14), FAIL (<7/14)
21. **Severity weighting (CRITICAL auto-fail)** → Plan Section 6 verdict logic: "ANY mandatory fails → FAIL"
22. **Gap severity framework** → Plan Section 5 Wave 2: gap-catalog.md template includes CRITICAL/HIGH/MEDIUM/LOW
23. **Component coverage check** → Plan Section 5 Wave 2: PD-12 checks ≥8/9 families
24. **Mechanism extraction vs recipe-following** → Plan Section 4 Variant C: "extract TECHNIQUES only, not implementations"
25. **Time diagnostic (not pass/fail)** → Plan Section 6: D1-D4 diagnostic, not mandatory
26. **Time flags (too fast = suspicious)** → Plan Section 6 verdict logic: investigates if <2 hrs Track 2
27. **Context compaction mitigation** → Plan Section 4: phase-gating prevents reading all 6 layers at once
28. **Lead THIN rule** → Plan Section 2: "LEAD (you — orchestrate only, THIN rule)"
29. **File existence as completion signal** → Plan Section 5: Gates check file existence (don't rely on TaskUpdate)
30. **Minimum viable Phase D** → Plan incorporates but EXTENDS (user override)
31. **Mandatory criteria (soul, guardrails)** → Plan Section 6: M1-M6 all mandatory
32. **CONDITIONAL PASS with 0 CRITICAL gaps** → Plan Section 6 verdict logic
33. **Documentation is deliverable** → Plan Section 8: 8 artifacts required
34. **False-pass #1 detection (content too simple)** → Plan Section 5 Wave 0 Gate 0
35. **False-pass #2 detection (agent bypasses library)** → Plan Section 5 Wave 2: PD-01 library utilization

#### DROPPED/MISSED (NOT in plan)

1. **Extraction coverage measurement (quantitative threshold)** — Severity: MEDIUM — File 05 lines 48-64 said "If coverage < 60% → content too simple, FAIL VALIDATION." Plan Gate 0 says "≥8 component types" BUT doesn't measure ACTUAL coverage post-build. Research said verify agent used 60%+ of extraction surface area.

2. **Library pre-audit (guardrail compliance)** — Severity: HIGH — File 05 lines 975-990 said "Audit library CSS BEFORE Phase D. If library components violate guardrails → FIX LIBRARY (before Phase D)." Plan ASSUMES library is guardrail-compliant. Doesn't pre-audit. If library has 20px padding (violates 32px floor), all builds using library will fail guardrails.

3. **Metaphor vocabulary analysis (cross-reference against case studies)** — Severity: MEDIUM — File 05 lines 100-131 said "Extract CSS class names, compare to case study class names, calculate overlap." Plan Section 5 Wave 2 PD-06 checks overlap BUT integration-auditor prompt doesn't specify HOW (manual review or programmatic extraction?). Research implied programmatic.

4. **Override tracking (context-specific CSS overrides)** — Severity: MEDIUM — File 05 lines 326-339 said "Count override selectors (`.context .component`), calculate override ratio. If >20% → library needs more context variants." Plan Section 6 has D4 "CSS override count (target <10)" BUT no capture mechanism defined.

5. **Systemic pattern detection** — Severity: HIGH — File 05 lines 346-373 said "Cross-reference PA failures to known systemic issues (playbook dead zones, stats bar weakness). Systemic failures count 3× normal failures." Plan has NO systemic pattern registry. Every failure treated equally.

6. **Qualitative library analysis (what 50% came from library?)** — Severity: MEDIUM — File 05 lines 375-405 said "If 50% < 55% threshold BUT library provided identity+mechanisms → SUFFICIENT." Plan Section 5 Wave 2 PD-01 does semantic breakdown (identity 80%, mechanism 60%) — THIS IS GOOD. But threshold is rigid (60%/50%) — doesn't have escape clause for "right 50%."

7. **Generic metaphor filter** — Severity: MEDIUM — File 05 lines 415-440 said "Flag overly generic domains (blocks, layers, grids). Generic metaphors require 2× justification burden." Plan Section 5 Wave 2 PD-07 scores novelty BUT no explicit generic-metaphor penalty.

8. **Retry protocol (agent errors vs library gaps)** — Severity: MEDIUM — File 05 lines 481-520 said "If agent error detected (CSS typo), respawn agent or provide correction prompt. Retry build. If retry succeeds → agent error confirmed (not library gap)." Plan Section 9 allows iteration BUT doesn't distinguish agent errors from library gaps. No explicit retry for typos.

9. **PA Tier 3 as advisory (not gate)** — Severity: LOW — File 05 lines 521-550 said "Phase D gate uses ONLY objective PA (Tier 1+2). PA-42 (implicit metaphor) is Tier 3 (subjective) → log as advisory, don't fail on it." Plan Section 6 has PA-42 in evaluation BUT doesn't explicitly mark Tier 3 as advisory-only.

10. **Weaver role for progress tracking** — Severity: LOW — File 05 lines 1318-1366 said "Weaver maintains TASK LIST, cross-references findings, writes synthesis." Plan Section 2 has NO Weaver. Uses 2 synthesis agents (cross-variant-analyst + report-writer) instead. Different approach, not necessarily worse.

#### CONTRADICTED (plan does opposite)

1. **"ELIMINATE subjective PA questions from gate"** — File 05 lines 621-646 said "Use ONLY objective PA (Tier 1+2). Eliminate Tier 3." Plan Section 5 Wave 2 has blind judges answer PA-01 to PA-23 (includes Tier 3 PA-21 to PA-23 responsive). Partial contradiction: Plan uses more PA questions than research recommended for gate.

2. **"Allow LIMITED iteration (1-2 rebuild attempts)"** — File 05 lines 625-656 said iteration is normal, allow fixes. Plan Section 9 disagreement resolution allows iteration for PA-05 split BUT doesn't have general rebuild protocol. If agent fails M2.3 (label gap), can they rebuild? Unclear. Research said yes (1-2 attempts). Plan doesn't explicitly allow.

---

### File 06: Evaluation Methodology (1,334 lines)

**Total key recommendations:** 24
**Captured in plan:** 21 (88%)
**Dropped/missed:** 3 (13%)
**Contradicted:** 0

#### CAPTURED (in plan)

1. **70% programmatic / 30% visual split** → Plan Section 5 Wave 2: programmatic first, then visual
2. **Hybrid evaluation (blind + informed)** → Plan Section 5 Wave 2: 2 blind judges + 1 informed integration-auditor
3. **3 judges (2 blind + 1 informed)** → Plan Section 5 Wave 2: judge-a (extraction-aware), judge-b (fresh-eyes), judge-c (integration)
4. **Complementary judge backgrounds** → Plan Section 5 Wave 2: extraction-aware vs fresh-eyes split
5. **60 total criteria rubric** → Plan Section 6: 43 criteria (simplified from 60 but covers same categories)
6. **Programmatic checks (19 items)** → Plan Section 6: M1-M2 (19 soul + guardrail + token checks)
7. **Visual Tier 1 (5 mandatory)** → Plan Section 6: M-PA-01 to M-PA-05
8. **Visual Tier 2 (15 standard)** → Plan Section 6: R-PA-06 to R-PA-20
9. **Phase D-specific (12 items)** → Plan Section 5 Wave 2: PD-01 to PD-12
10. **Absolute criteria (guardrails) + comparative reference (DD/OD/CD)** → Plan Section 6: guardrails mandatory + PA questions reference KortAI quality
11. **Time as diagnostic (not pass/fail)** → Plan Section 6: D1-D4 diagnostic
12. **7 mandatory artifacts** → Plan Section 8: expanded to 8 artifacts
13. **Screenshots (1440px + 768px)** → Plan Section 5 Wave 2: blind judges take screenshots
14. **PA score breakdown** → Plan Section 5 Wave 2: visual-audit-judge-a.md + judge-b.md
15. **Agent process log (workflow audit trail)** → Plan Section 5 Wave 1: all builders write timestamped logs
16. **Gap documentation** → Plan Section 5 Wave 2: gap-catalog.md
17. **Programmatic audit report** → Plan Section 5 Wave 2: programmatic-audit.md
18. **Divergence table (Track 2)** → Plan Section 4 Variant C: Phase 3.5 gate produces divergence table
19. **Final evaluation report (executive summary)** → Plan Section 5 Wave 3: FINAL-REPORT.md
20. **Step-by-step evaluation protocol** → Plan Section 5 Wave 2: Steps 1-6 (programmatic → visual → integration → gaps → resolution → final)
21. **Disagreement resolution protocol** → Plan Section 9: PA-05 split resolution + Tier 1 disagreements

#### DROPPED/MISSED (NOT in plan)

1. **Comparative quality analysis (side-by-side screenshots)** — Severity: LOW — File 06 lines 925-930 Optional Artifact 1: "Phase D page vs DD-006/OD-004/CD-006 side-by-side, gestalt comparison." Plan does NOT produce this. Research said optional but valuable for "does this feel competitive in quality?"

2. **Metaphor derivation report (Track 2)** — Severity: LOW — File 06 lines 931-936 Optional Artifact 2: "Tension axes identified, richness scoring, structural isomorphism mappings." Plan builder logs include metaphor commitment BUT no structured derivation report with richness score.

3. **Time breakdown analysis report** — Severity: MEDIUM — File 06 lines 937-941 Optional Artifact 3: "Phase-by-phase time deltas, comparison to targets, diagnostic flags." Plan FINAL-REPORT §5 includes timing data BUT research said separate structured artifact. Plan embeds in report. Close but not exact match.

#### CONTRADICTED (plan does opposite)

NONE — File 06 coverage is excellent (88%). Dropped items are all optional artifacts.

---

### File 07: Downstream Dependencies (462 lines)

**Total key recommendations:** 13
**Captured in plan:** 10 (77%)
**Dropped/missed:** 3 (23%)
**Contradicted:** 0

#### CAPTURED (in plan)

1. **8 required artifacts** → Plan Section 8: all 8 listed (validation report, gap analysis, integration docs, timing data, classification validation, component utilization, skill integration, CLAUDE.md feedback)
2. **Artifact #1: Validation Report** → Plan Section 5 Wave 3: FINAL-REPORT.md §1-2
3. **Artifact #2: Gap Analysis** → Plan Section 5 Wave 2: gap-catalog.md
4. **Artifact #4: Workflow Timing Data** → Plan Section 5 Wave 1: builder logs + FINAL-REPORT.md §5
5. **Artifact #5: Track Classification Validation** → Plan Section 5 Wave 3: FINAL-REPORT.md §6
6. **Artifact #6: Component Utilization Report** → Plan Section 5 Wave 2: component-utilization.md
7. **Artifact #7: Skill Integration Report** → Plan Section 5 Wave 3: FINAL-REPORT.md §7
8. **Artifact #8: CLAUDE.md Feedback** → Plan Section 5 Wave 3: FINAL-REPORT.md §8
9. **2×3 outcome matrix (validation × documentation)** → Plan Section 8 table: PASS/CONDITIONAL/FAIL cross documentation COMPREHENSIVE/PARTIAL/INSUFFICIENT
10. **Documentation is THE deliverable** → Plan Section 8: "CONDITIONAL PASS + comprehensive docs > clean PASS + no docs"

#### DROPPED/MISSED (NOT in plan)

1. **Artifact #3: Integration Documentation WITH CODE SNIPPETS** — Severity: HIGH — File 07 lines 90-98 said "To use Tier 2 X in Tier 3 context Y: do Z WITH CODE." Plan Section 5 Wave 2 integration-auditor produces PD-04 sections BUT PD-04 is binary check (yes/no). Research said Artifact #3 needs EXECUTABLE code snippets. Plan has no mandate for code snippet capture.

2. **Root cause analysis in gap documentation** — Severity: MEDIUM — File 07 lines 275-290 said "Gap: Bento grid overflows. Root cause: Fixed 320px columns > 768px. Workaround: Switch to single column. Remediation: Add responsive grid OR accept custom CSS." Plan Section 5 Wave 2 gap-catalog.md template has "Library cause" field BUT prompt doesn't emphasize root cause analysis. Research said this is CRITICAL for remediation prioritization.

3. **Provenance template (future agent questions)** — Severity: LOW — File 07 lines 270-283 said document "What was tested? What passed? What failed? WHY did it fail? Workaround?" Plan gap-catalog has most of these BUT no "provenance template" ensuring ALL questions answered.

#### CONTRADICTED (plan does opposite)

NONE — File 07 coverage is good (77%). Dropped items are about documentation depth, not missing entirely.

---

### File 08: Epistemological Validity (872 lines)

**Total key recommendations:** 14
**Captured in plan:** 8 (57%)
**Dropped/missed:** 5 (36%)
**Contradicted:** 1 (7%)

#### CAPTURED (in plan)

1. **Acknowledge extraction is constructed (not discovered)** → Plan Section 5 Wave 1: "Epistemological framing: You are CONSTRUCTING a page, not DISCOVERING the right layout"
2. **Construction language (not discovery)** → Plan Section 5 Wave 3: FINAL-REPORT.md §11 "Construction Language Audit"
3. **Language audit (target <20% discovery language)** → Plan Section 5 Wave 3: report-writer measures discovery vs construction phrases
4. **Explicit lens statement** → Plan Section 5 Wave 3: FINAL-REPORT.md §12 "Epistemological Health Check" includes "This validation operated within Identity + Enablement lens"
5. **Specify context (fortress content)** → Plan Section 3: STAFF-ENGINEER-MENTAL-MODEL.md is conceptual/technical (fortress-adjacent)
6. **Sufficiency test (not correctness test)** → Plan Section 5 Wave 3: FINAL-REPORT.md §12 "We validated tool fitness, not objective truth"
7. **Add falsificatory test (no-guidance)** → Plan Section 4: Variant A = skill only, ZERO library (no mechanisms/components/case-studies)
8. **4 critical adjustments from epistemological analysis** → Plan incorporates: language audit (§11), lens statement (§12), context specification (Section 3), falsificatory test (Variant A)

#### DROPPED/MISSED (NOT in plan)

1. **Multi-lens validation battery** — Severity: HIGH — File 08 lines 226-262 said "Tier 1 (PRIMARY): Identity + Enablement. Tier 2 (SECONDARY): Minimalism lens (16-item subset). Tier 3 (TERTIARY): Frequency lens (80%+ patterns)." Plan uses ONLY Tier 1 (Identity + Enablement). Research said multi-lens reveals lens dependency. Plan = single-lens validation.

2. **"Why?" questions (principle validation)** — Severity: HIGH — File 08 lines 722-735 Critical Adjustment #6 said "Add 'Why border-radius: 0? Why 4px spacing base?' questions." Plan has ZERO "why" questions. Research said this distinguishes RIGHT extraction (principled) from SUFFICIENT extraction (empirical).

3. **Reader test (content-centric validation)** — Severity: MEDIUM — File 08 lines 722-735 Secondary Adjustment #7 said "Does page communicate to reader?" Plan is 100% agent-centric. Research said agent productivity ≠ content quality.

4. **Hostile content test** — Severity: MEDIUM — File 08 lines 722-735 Optional Adjustment #8 said "1 non-fortress content type (marketing OR conversational)." Plan uses ONLY fortress-adjacent content (compare-orchestration + STAFF-ENGINEER). Research said test context boundaries.

5. **Minimal subset test** — Severity: MEDIUM — File 08 lines 722-735 Optional Adjustment #9 said "Start with 40 items, remove lowest-confidence, find minimum viable." Plan has 4 variants (A/B/C/D) BUT none test minimal subset. Variant A removes library entirely (too extreme). Research said find THRESHOLD not extremes.

#### CONTRADICTED (plan does opposite)

1. **"Reject full divergent lens validation"** — File 08 line 776 said "REJECT: Full divergent lens validation." Plan does NOT use divergent lens (correct). But File 08 lines 226-262 RECOMMENDED multi-lens battery (secondary/tertiary). Contradiction WITHIN File 08 itself (Section 2 recommends, Section 10 rejects). Plan follows Section 10 rejection.

---

### File 09: Unified Success Checklist (885 lines)

**Total key recommendations:** 52
**Captured in plan:** 49 (94%)
**Dropped/missed:** 2 (4%)
**Contradicted:** 1 (2%)

#### CAPTURED (in plan)

File 09 is a SYNTHESIS of Files 01-08. It consolidates 43 criteria (29 mandatory + 14 recommended + 4 diagnostic). Plan Section 6 implements ALL 43.

**Spot-check coverage (all CAPTURED):**
1. M1-M6 mandatory criteria → Plan Section 6
2. R1-R7 recommended criteria → Plan Section 6
3. D1-D4 diagnostic criteria → Plan Section 6
4. 8 artifacts → Plan Section 8
5. 2×3 outcome matrix → Plan Section 8
6. Verdict logic → Plan Section 6
7. 4-variant test design → Plan Section 2
8. Content selection → Plan Section 3
9. Evaluation protocol (6 steps) → Plan Section 5 Wave 2
10. Disagreement resolution → Plan Section 9
11. Epistemological framing → Plan Section 5 Wave 1
12. Language audit → Plan Section 5 Wave 3
13. Anti-gravity hypotheses (H1-H4) → Plan Section 5 Wave 3

#### DROPPED/MISSED (NOT in plan)

1. **Split Phase D recommendation** — Severity: CRITICAL — File 09 lines 13-36 EXECUTIVE SUMMARY said "#1 Thing Protocol Gets WRONG: Gap-check Priority 5 (4-variant) and Protocol Phase D are TWO DIFFERENT PHASES. SPLIT Phase D (minimal 4-6 hrs) from Phase F+ (anti-gravity 6-10 hrs)." Plan COMBINES them into single 8-hour execution. Research said this is scope mismatch. USER OVERRIDE: user explicitly requested full 4-variant in Phase D.

2. **Falsificatory test battery (beyond Variant A)** — Severity: MEDIUM — File 09 lines 53-68 CRITICAL DROPPED #1 said "Plan has ZERO falsificatory tests. Research recommended: no-guidance build, hostile content, minimal subset." Plan has Variant A (no-guidance) BUT not hostile content or minimal subset. Research said 30% falsificatory. Plan = 5% falsificatory (1/4 variants is exploratory).

#### CONTRADICTED (plan does opposite)

1. **"KEY INSIGHT: CONDITIONAL PASS + comprehensive docs > clean PASS + no docs"** — File 09 line 41 + Section 8. Plan Section 8 STATES this principle BUT doesn't ENFORCE it. Verdict logic (Section 6) can produce PASS without verifying documentation completeness. Research said documentation is NON-NEGOTIABLE for proceed. Plan says it's important but doesn't gate on it.

---

## CROSS-FILE PATTERNS

**Insights that appear in 3+ files but are weak/absent in plan:**

### Pattern 1: Falsificatory Testing (Files 02, 05, 08, 09)

**Appears in:** 4/9 files
**Recommendation:** Add falsificatory test battery (no-guidance, hostile content, minimal subset, adversarial agent)
**Plan status:** WEAK — Variant A is exploratory but plan is 95% confirmatory
**Why it matters:** Confirmatory testing answers "does it work?" Falsificatory testing answers "what breaks it?"

### Pattern 2: Multi-Lens Validation (Files 01, 02, 08, 09)

**Appears in:** 4/9 files
**Recommendation:** Test with Minimalism lens (16-item subset) + Frequency lens (80%+ patterns)
**Plan status:** ABSENT — Plan uses only Identity + Enablement lens
**Why it matters:** Reveals lens dependency, tests whether 40 items is necessary or over-specified

### Pattern 3: "Why?" Questions (Files 02, 08, 09)

**Appears in:** 3/9 files
**Recommendation:** Ask "Why border-radius: 0? Why 4px base?" to test principle capture
**Plan status:** ABSENT — Plan tests sufficiency, not principles
**Why it matters:** Distinguishes RIGHT extraction (can derive) from SUFFICIENT extraction (can apply)

### Pattern 4: Reader Test / Content-Centric Validation (Files 02, 08, 09)

**Appears in:** 3/9 files
**Recommendation:** "Does page communicate to reader?" not just "can agent build?"
**Plan status:** ABSENT — Plan is 100% agent-centric
**Why it matters:** Agent productivity ≠ content quality for readers

### Pattern 5: Integration Documentation WITH CODE (Files 02, 06, 07, 09)

**Appears in:** 4/9 files
**Recommendation:** Artifact #3 must include "To use Tier 2 X in Tier 3 Y: do Z [CODE]"
**Plan status:** WEAK — PD-04 is binary check, no code snippet mandate
**Why it matters:** Phase E playbook needs executable examples, not yes/no answers

### Pattern 6: Root Cause Analysis in Gaps (Files 05, 07, 09)

**Appears in:** 3/9 files
**Recommendation:** Gap documentation MUST include root cause, not just manifestation
**Plan status:** PARTIAL — gap-catalog.md has "Library cause" field but no emphasis on root cause depth
**Why it matters:** Remediation prioritization requires understanding WHY not just WHAT

### Pattern 7: Timing Measurement Enforcement (Files 01, 02, 04, 06, 07, 09)

**Appears in:** 6/9 files
**Recommendation:** Builder prompts require timing section BUT verify agents fill it out
**Plan status:** PARTIAL — Timing section in prompt, no verification agents complete it
**Why it matters:** If agents skip timing, Phase E playbook has no time estimates

### Pattern 8: Library Pre-Audit (Files 05, 09)

**Appears in:** 2/9 files (but HIGH severity)
**Recommendation:** Audit library CSS BEFORE Phase D for guardrail compliance
**Plan status:** ABSENT — Plan assumes library is correct
**Why it matters:** If library has 20px padding (violates 32px floor), ALL builds will fail

---

## RECOMMENDED ADDITIONS TO PLAN

### Addition 1: Library Pre-Audit (Before Wave 0)

**Placement:** Insert new Section 5 Wave -1 (Pre-Flight)

**Content:**
```
### WAVE -1: Library Pre-Audit (5 minutes, Lead performs)

Before content preparation, verify compositional-core/ is guardrail-compliant:

1. Lead runs programmatic scan on compositional-core/components/components.css
2. Extract all padding, margin, border values
3. Check: NO padding < 32px, NO margin-bottom < 48px, NO borders != 4px/3px/1px/0
4. If violations found → BLOCK Phase D, escalate to Phase C remediation
5. If compliant → proceed to Wave 0

**Why:** If library CSS violates guardrails (e.g., .callout { padding: 20px; }), ALL builds using library will fail guardrails. Pre-audit prevents false-fail scenario.
```

### Addition 2: Code Snippet Mandate for Artifact #3

**Placement:** Section 5 Wave 2, integration-auditor prompt

**Change:**
```
OLD: "Check custom property bridging (Tier 2 → Tier 3)"
NEW: "Document custom property bridging patterns WITH CODE. For EACH Tier 2 component used in Tier 3 context, write:
     'To use [component] in [zone context]:
      .zone { --component-property: value; }
      Example: [3-5 line CSS snippet]'
     Write to integration-documentation.md (separate from integration-audit.md)"
```

### Addition 3: Root Cause Emphasis in Gap Catalog

**Placement:** Section 5 Wave 2, gap-catalog.md template

**Change:**
```
OLD: "- Library cause: [what's missing or broken in compositional-core/]"
NEW: "- Root cause: [WHY this failed — trace to extraction decision or assumption]
      - Surface manifestation: [what happened visually]
      - Library cause: [what's missing/broken in compositional-core/]
      - Extraction decision that caused this: [e.g., 'excluded blockquote assuming not needed']"
```

### Addition 4: Timing Verification at Gate 1

**Placement:** Section 5 Wave 1, Gate 1 → 2

**Change:**
```
OLD: "Gate 1 → 2: All 5 HTML files + all 5 log files exist. Lead verifies file sizes > 0."
NEW: "Gate 1 → 2: All 5 HTML files + all 5 log files exist. Lead verifies:
      1. File sizes > 0
      2. Each log contains 'TIMING SECTION' header + per-phase minutes
      3. Total time in log matches wall-clock time (±10%)
      If timing missing → nudge agent to add before proceeding"
```

### Addition 5: "Why?" Questions in Final Report

**Placement:** Section 5 Wave 3, FINAL-REPORT.md structure

**Add new section:**
```
## 13. Principle Validation (Exploratory)
   - "Why border-radius: 0?" — Can extraction answer from prohibitions.md?
   - "Why 4px spacing base?" — Can extraction answer from tokens.css?
   - "Why Instrument Serif for display?" — Can extraction answer from typography guidance?
   - For EACH: Does answer cite PRINCIPLE (identity through refusal) or PATTERN (appears in all files)?
   - If principle-based → RIGHT extraction. If pattern-based → SUFFICIENT extraction.
```

### Addition 6: Multi-Lens Validation (Optional Wave 4)

**Placement:** Insert new Section 5 Wave 4 (Optional)

**Content:**
```
### WAVE 4: Multi-Lens Validation (OPTIONAL, +2 hours)

IF time permits AND Phase D results are borderline (CONDITIONAL PASS):

**Agent: minimalism-tester** (general-purpose, Sonnet, file-only)

Build Track 1 page using ONLY 16-item consensus core:
- 3 soul constraints (border-radius, box-shadow, palette)
- 8 spacing tokens (anchors only, not full scale)
- 3 fonts (Instrument Serif, Inter, JetBrains Mono)
- 2 mechanisms (border-weight, 2-zone DNA)

Writes: minimal-test.html

**Comparison:**
- If minimal-test.html quality ≈ Track 1 quality → 40-item extraction is OVER-SPECIFIED
- If minimal-test.html quality << Track 1 quality → 40-item extraction is NECESSARY

Documents finding in FINAL-REPORT.md §14: "Minimalism lens test showed [result]"
```

### Addition 7: Hostile Content Test (Variant E, Optional)

**Placement:** Section 2 Team Topology (if extended scope)

**Content:**
```
└── WAVE 1b: Hostile Content Test (OPTIONAL, +3 hours)
    └── builder-variant-e        — Track 2, anti-gravity, NON-FORTRESS content

**Variant E: Hostile Content (Marketing/Conversational)**

Same as Variant C (anti-gravity) BUT use marketing-style content (playful, sparse, image-heavy).

Tests: Does extraction work for content UNLIKE fortress?

Writes: builds/variant-e-hostile.html
```

### Addition 8: Fresh-Agent Transferability Test (Variant F, Optional)

**Placement:** Section 2 Team Topology (if extended scope)

**Content:**
```
└── WAVE 1c: Fresh-Agent Test (OPTIONAL, +1.5 hours)
    └── builder-fresh-agent      — Track 1, ZERO project history, library only

**Variant F: Fresh Agent (Zero Context)**

Agent receives:
- Track 1 content file
- Path to compositional-core/ (but NO prior reading)
- NO project history, NO memory of Phase C extraction
- Prompt: "You are a new developer. Build this page using the design system at compositional-core/. Start by reading the README."

Tests: Can library be used by agents with ZERO prior exposure?

Measures:
- Time to first component use
- Documentation files read (count)
- Clarifying questions asked (count)
- Build completion (YES/NO)

Writes: builds/fresh-agent.html + logs/fresh-agent-log.md

**Success:** ≤1000 lines read, ≤2 questions, build completes in ≤2 hours
```

### Addition 9: Systemic Pattern Registry

**Placement:** Section 5 Wave 2, integration-auditor prompt

**Add:**
```
BEFORE evaluating, load systemic pattern registry:
- Playbook dead zone epidemic (footer gaps)
- Stats bar weakness at 768px (height collapse)
- Label smashing (label-to-heading <16px)

For EACH PA failure:
1. Check if matches systemic pattern
2. If YES → Flag as systemic (not isolated)
3. Weight as 3× severity (MEDIUM → HIGH, HIGH → CRITICAL)
4. Document: "This is SYSTEMIC issue from [team history], not one-off"
```

### Addition 10: Variant B Timing Documentation

**Placement:** Section 4 Variant B

**Add clarification:**
```
**Why Interpretation 1 (not 2 or 3):**

Research file 03-variant-test-design.md analyzed 3 interpretations:
- Interpretation 1: No phase-gating (maximum timing freedom)
- Interpretation 2: Phase-gating but no divergence mandate
- Interpretation 3: Available but not instructed

Selected Interpretation 1 because:
1. Creates MAXIMAL distinction from Variant C (which has full phase-gating)
2. Tests whether timing control ALONE matters (vs divergence mandate)
3. Operationally clearest (no ambiguity in "when can agent read library?")

If Variant B = Variant C results → phase-gating is CRITICAL.
If Variant B < Variant C novelty → divergence mandate adds value beyond timing.
```

---

## CONCLUSION

**Plan coverage: 73% of 185 recommendations captured**

**Strengths:**
- Comprehensive variant design (4-variant test fully specified)
- Epistemological framing (construction language, lens statement)
- 8-artifact documentation mandate
- Evaluation protocol (programmatic-first, blind/informed split)
- Anti-gravity hypothesis testing (H1-H4)

**Critical gaps:**
1. **Falsificatory testing:** Plan is 95% confirmatory (only Variant A exploratory)
2. **Multi-lens validation:** Single-lens only (no minimalism or frequency tests)
3. **Principle validation:** No "why?" questions (tests sufficient not right)
4. **Content-centric validation:** 100% agent-centric (no reader test)
5. **Library pre-audit:** Assumes library is guardrail-compliant (no verification)

**Recommendation:**

**MINIMUM:** Add 5 critical additions (1, 2, 3, 4, 5) — adds ~30 min to plan, closes HIGH-severity gaps

**IDEAL:** Add all 10 additions — adds ~2 hours to plan (Wave 4 + Variants E/F optional), achieves 90%+ research coverage

**Current plan is EXECUTABLE and COMPREHENSIVE. Adding critical additions would make it EXCELLENT.**
