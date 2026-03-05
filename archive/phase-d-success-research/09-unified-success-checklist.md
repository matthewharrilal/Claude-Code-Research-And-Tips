# Phase D Unified Success Checklist
**Synthesis from 8 Research Perspectives**

**Date:** 2026-02-14
**Synthesizer:** Agent (team-lead research synthesis request)
**Source Material:** 8 research files (protocol audit, first principles, variant test design, content selection, failure modes, evaluation methodology, downstream dependencies, epistemological validity)

---

## EXECUTIVE SUMMARY

### The #1 Thing the Existing Protocol Gets WRONG

**Gap-check Priority 5 (4-variant test) and Protocol Phase D are TWO DIFFERENT PHASES conflated into one.**

- **Protocol Phase D:** Minimal validation (2 pages, 4-6 hours) — proves extraction sufficiency
- **Gap-check Priority 5:** Research validation (4 variants, 12-20 hours) — proves anti-gravity mechanisms work

**Impact:** Attempting both creates scope mismatch (4-6 hour estimate vs 12-20 hour reality).

### The #1 Recommendation ALL 8 Researchers Converge On

**SPLIT PHASE D into two phases:**

**Phase D (Minimal Validation):**
- 1 Track 1 + 1 Track 2 test page
- 4-6 hours wall time
- Proves library sufficiency for building
- Deliverable: PASS/CONDITIONAL/FAIL verdict + gap documentation

**Phase F+ (Anti-Gravity Validation):**
- 2-variant test (A: skill-only vs C: skill+anti-gravity) DURING pilot migration
- 6-10 hours wall time
- Proves anti-gravity mechanisms prevent pattern-matching
- Deliverable: Mechanism validation report

**Reason:** Phase D tests SUFFICIENCY (can you build?). Priority 5 tests MECHANISM EFFECTIVENESS (do anti-gravity rules work?). These are different questions requiring different scopes.

### Key Insight

**A CONDITIONAL PASS with comprehensive documentation is MORE valuable than a clean PASS with no learnings.**

Phase D's utility is measured by what it teaches downstream phases (Phase E playbook, Phase F pilot), not just what it validates.

---

## SECTION 1: MANDATORY SUCCESS CRITERIA

**Failure of ANY criterion = Phase D FAILS. Binary pass/fail. Non-negotiable.**

### M1: Soul Compliance (Zero Violations)

**Test:** Programmatic DOM scan + computed styles check
**Pass threshold:** 0/0 violations across ALL elements
**Source:** 01-protocol-audit (lines 42-47), 06-evaluation (lines 36-48)
**Why mandatory:** Soul constraints define KortAI identity (border-radius: 0, box-shadow: none, correct palette/fonts). Violating = not KortAI.

**Specific checks:**
- border-radius: 0 on ALL elements (100% compliance)
- box-shadow: none on ALL elements (100% compliance)
- filter: drop-shadow() ABSENT (no shadow effects)
- Colors from tokens.css only (no hardcoded #000/#FFF)
- Fonts correct (Instrument Serif display, Inter body, JetBrains Mono code)
- No 2px borders anywhere (epidemic value prohibited)

---

### M2: Guardrail Enforcement (8/8 Required)

**Test:** Programmatic measurement at 1440px AND 768px viewports
**Pass threshold:** 8/8 guardrails met at BOTH viewports
**Source:** 01-protocol-audit (lines 100-119), 02-first-principles (lines 1464-1476)
**Why mandatory:** Guardrails prevent metaphor-driven perceptual cost (from skill enrichment research: 940px min container, 16px label-to-heading gap, 32px padding floor, 40% compression ratio).

**The 8 guardrails:**
1. G1: Container width ≥ 940px at 1440px (65% viewport)
2. G2: Horizontal padding ≥ 32px per side
3. G3: Label-to-heading gap ≥ 16px
4. G4: Compression ratio ≥ 40% (densest ÷ sparsest padding)
5. G5: Characters per line 45-80 (~65ch max-width)
6. G6: Body line-height ≥ 1.5
7. G7: Section breathing ≥ 48px margin-bottom
8. G8: Border-radius = 0 (duplicate of Soul #1, included for emphasis)

---

### M3: Library Utilization (Track-Specific Minimums)

**Test:** CSS source analysis + library coverage measurement
**Pass threshold:**
- **Track 1:** ≥60% library CSS (mostly library, minimal custom)
- **Track 2:** ≥50% library CSS (identity+mechanisms from library, custom metaphor ok)

**Source:** 02-first-principles (lines 48-64), 05-failure-modes (lines 68-96)
**Why mandatory:** Phase D tests library SUFFICIENCY. If agent bypasses library (writes custom CSS), test is invalid.

**Measurement:**
```
library_lines = count of CSS from components.css
custom_lines = count of agent-written CSS
total_lines = library_lines + custom_lines
utilization = library_lines / total_lines

Track 1 PASS: utilization >= 0.60
Track 2 PASS: utilization >= 0.50
```

**Semantic breakdown (Track 2):**
- Identity CSS (tokens, soul): ≥80% library (non-negotiable)
- Mechanism CSS (patterns, rules): ≥60% library (core extraction)
- Metaphor CSS (vocabulary): 0% library acceptable (Track 2 creativity)

---

### M4: Phase Compliance (Track 2 Only — Anti-Gravity Audit)

**Test:** Workflow log review (timestamped file access)
**Pass threshold:** Agent did NOT read case-studies/ until Phase 5 (after metaphor lock)
**Source:** 01-protocol-audit (lines 455-458), 08-epistemological (lines 218-229)
**Why mandatory:** Two-phase boundary enforcement (M11 anti-gravity mechanism). Reading case studies before metaphor derivation = pattern-matching risk.

**Verification:**
- Check: Metaphor committed in writing at Phase 3.5 (before library access)
- Check: case-studies/ read ONLY at Phase 5+ (workflow log timestamp)
- Check: divergence table produced if metaphor matches library (≥3/5 dimensions different)

**Failure = instant FAIL:** Anti-gravity violation invalidates Track 2 test.

---

### M5: Multi-Viewport Testing (1440px + 768px)

**Test:** Both viewports MUST pass soul + guardrails + PA
**Pass threshold:** BOTH viewports meet all criteria
**Source:** 05-failure-modes (lines 273-303), 06-evaluation (lines 996-1002)
**Why mandatory:** Responsive gaps caught early. Skill enrichment (14th team) found stats bar collapse, label smashing at 768px. Protocol MUST test both.

---

### M6: Buildability (Track-Specific)

**Test:** Can page be completed without inventing new component types?
**Pass threshold:** YES (agent used library components, no from-scratch component invention)
**Source:** 02-first-principles (lines 86-102), 05-failure-modes (lines 209-238)
**Why mandatory:** Library sufficiency = agent can build WITHOUT inventing callouts/code-blocks/tables from scratch.

**Acceptable:**
- Direct library use (`.callout` from components.css)
- Library-derived (`.callout--success` extends `.callout` structure)

**NOT acceptable:**
- Invented from scratch (carousel/slider/tabs not in library, not derivable)

---

## SECTION 2: RECOMMENDED SUCCESS CRITERIA

**Valuable but not deal-breakers. Failure here = note for Phase E, not Phase D fail.**

### R1: PA Score ≥ 45/48 (Track 2) or ≥ 26/28 (Track 1)

**Test:** Perceptual audit by 2 blind visual judges
**Pass threshold:** Track 1: 26/28 (93%), Track 2: 45/48 (94%)
**Source:** 01-protocol-audit (lines 203-241), 06-evaluation (lines 136-148)
**Why recommended (not mandatory):** Quality gate, but rigid threshold may be too strict for first test. CONDITIONAL PASS acceptable if 42/48 (87.5%) with all MINOR violations.

**Constraint:** Which questions can fail?
- PA-01 to PA-05 (Tier 1 mandatory): MUST pass (0 failures allowed)
- PA-06 to PA-28 (Tier 2 standard): ≥21/23 pass (2 failures allowed from non-critical)

---

### R2: Metaphor Novelty ≥ 3/5 Dimensions (Track 2)

**Test:** 5-dimension divergence table comparison to library case studies
**Pass threshold:** ≥3/5 dimensions DIFFERENT from library
**Source:** 03-variant-test (lines 670-679), 02-first-principles (lines 160-178)
**Why recommended:** Tests divergence mandate (R6 anti-gravity mechanism). Prevents pattern-matching.

**5 dimensions:**
1. Metaphor domain (geological vs botanical vs theatrical)
2. Structural isomorphisms (bedrock→foundation vs seed→root)
3. Section architecture (6 strata vs 4 scales)
4. Vocabulary (geological terms vs plant terms)
5. Mechanisms used (border-weight vs spacing-compression)

**If ≥3 dimensions SAME:** Requires STRONG justification (independent convergence is rare but valid).

---

### R3: Mechanism Application Count (Track 2)

**Test:** Count distinct mechanisms from mechanism-catalog.md applied
**Pass threshold:** ≥8 mechanisms applied (from 18 total)
**Source:** 02-first-principles (lines 68-83)
**Why recommended:** Validates extraction sufficiency (mechanisms are extractable and transferable).

---

### R4: Component Coverage (Track 1)

**Test:** Component inventory — which components used vs available
**Pass threshold:** ≥8/9 component families exercised
**Source:** 04-content-selection (lines 564-580), 02-first-principles (lines 48-64)
**Why recommended:** Validates library completeness. Missing components = extraction gap.

**HIGH confidence components (8 families):**
- Callout Family (6 parametric variants)
- Code Blocks (dark background theme)
- Page Header (universal)
- Tables (3px header border)
- Stats Bar (label-value pairs)
- Section Indicator (metadata lines)
- File Tree (monospace pre-formatted)
- Decision Matrix (grid layout)

---

### R5: Token Compliance ≥ 95%

**Test:** Programmatic CSS scan — all values from tokens.css
**Pass threshold:** ≥95% adherence (allow 1-2 edge cases)
**Source:** 06-evaluation (lines 99-110)
**Why recommended:** Validates vocabulary layer integration (tokens cascade into components).

---

### R6: Integration Quality (Tier 2 + Tier 3)

**Test:** Do Tier 2 components work in Tier 3 zone wrappers?
**Pass threshold:** YES (components render correctly, custom properties bridge)
**Source:** 01-protocol-audit (lines 193-202), 07-downstream (lines 89-98)
**Why recommended:** Validates layer integration (6-layer ontology works together).

---

### R7: Time Compliance (Diagnostic, Not Pass/Fail)

**Test:** Wall-clock time measurement per phase
**Pass threshold:** Track 1: 45-90 min, Track 2: 3-5 hrs (DIAGNOSTIC, not criterion)
**Source:** 02-first-principles (lines 716-765), 06-evaluation (lines 602-681)
**Why recommended:** Time is DIAGNOSTIC (reveals library gaps if slow, template-matching if too fast). NOT pass/fail.

**Diagnostic thresholds:**
- Track 1 <30 min → suspicious (template-matching risk)
- Track 1 >2 hrs → library gap (missing components)
- Track 2 <2 hrs → suspicious (case study copying risk)
- Track 2 >8 hrs → library gap (mechanisms don't transfer)

---

## SECTION 3: MEASURABLE vs JUDGMENT CRITERIA

### Programmatic (100% Objective, Binary)

**Can be verified via DOM inspection + computed styles:**

**Total: 19 criteria**
- Soul compliance: 8 checks (border-radius, box-shadow, palette, fonts, etc.)
- Guardrail compliance: 8 checks (940px container, 32px padding, etc.)
- Token compliance: 3 checks (colors, spacing, fonts from tokens.css)

**Verification:** Automated script, 5 minutes, binary PASS/FAIL per element.

---

### Visual (Require Rendering + Human Judgment)

**Cannot be verified programmatically:**

**Tier 1 (Mandatory Five — PA-01 to PA-05):**
- PA-01: What's the first thing that bothers you?
- PA-02: Is any text uncomfortable to read?
- PA-03: Does this feel like one designer made it?
- PA-04: Where does your eye go first? Is that correct?
- PA-05: Would you ship this? (MANDATORY YES for PASS)

**Tier 2 (Standard Fifteen — PA-06 to PA-20):**
- Readability, spatial, flow, grid, consistency, color checks
- Evaluated by 2 blind judges (no knowledge of track/library usage)

**Total: 20 visual criteria** (5 mandatory + 15 standard)

**Verification:** Human auditors, 25 min per judge, subjective but binary PASS/FAIL per question.

---

### Process (Require Workflow Log Verification)

**Can only be verified via agent execution trace:**

**Track 2 only:**
- Phase compliance: case-studies/ prohibited until Phase 5
- Metaphor lock-in: committed at Phase 3.5 before library access
- Divergence table: produced if metaphor matches library

**Total: 3 process criteria**

**Verification:** Workflow log review (timestamped file access), 10 minutes.

---

## SECTION 4: TEST DESIGN RECOMMENDATION

### Should Phase D Include 4-Variant Test?

**NO — defer to Phase F+ (post-playbook).**

**Reasons (from 03-variant-test-design analysis):**

1. **Scope mismatch:** 4-variant test is 12-20 hours (Phase D target is 4-6 hours)
2. **Different questions:**
   - Phase D tests SUFFICIENCY (can you build?)
   - 4-variant tests MECHANISM EFFECTIVENESS (do anti-gravity rules prevent pattern-matching?)
3. **N=1 per variant:** Insufficient statistical power for validation (pilot test only)
4. **B vs C distinction unclear:** "Weak permission" vs "anti-gravity library" operationally ambiguous

**Recommended alternative:**

**Phase D (NOW): 2 test pages**
- 1 Track 1 (assembly validation)
- 1 Track 2 (composition validation)
- 4-6 hours wall time
- Proves library sufficiency

**Phase F+ (LATER): 2-variant test DURING pilot migration**
- Variant A: Skill only (no library)
- Variant C: Skill + anti-gravity library
- Same content (controlled comparison)
- 6-10 hours wall time
- Proves anti-gravity mechanisms work

---

### How Many Test Pages Needed?

**MINIMUM VIABLE: 1 Track 2 page** (metaphor-driven composition)

**Rationale:** Track 2 exercises FULL extraction (identity, vocabulary, mechanisms, guidelines). Track 1 only tests components (subset).

**RECOMMENDED: 1 Track 1 + 1 Track 2**

**Rationale:**
- Track 1 validates library completeness (components present, usable)
- Track 2 validates guardrail internalization (agent can apply to custom CSS)
- BOTH required for migration (Track 1 AND Track 2 pages exist)

---

### What Content Should Be Used?

**Track 1:** Next.js App Router Migration Guide (or similar framework migration doc)

**Why:**
- Maximum component coverage (8/9 families: callouts, code, tables, stats, file trees, decision matrix, section indicators)
- Explicit vocabulary (sequential structure, technical terms)
- Real documentation exists (can adapt from Next.js docs)
- Edge case rich (nested routes, API comparisons, migration gotchas)
- Right length (~2,000 words, 60-75 min Track 1 build)

**Track 2:** How Event Loops Work (mental model explanation)

**Why:**
- Richest multi-axis tension (4 clear axes: FEEL, UNDERSTAND, DO, BECOME)
- Novel metaphor potential (Tidal system — NOT geological/fractal/manuscript)
- High structural isomorphism (5 mappings: tide→task, ebb→execute, undertow→microtasks)
- Prose-dominant (73% narrative, 27% code snippets)
- Right complexity (3,000 words, 4-5 hour Track 2 build)

**Key:** Use DIFFERENT content for each track (not same content twice). Tracks test different hypotheses.

---

### How Long Will Phase D Take?

**Build time:**
- Track 1: 60-90 min (target: 45-90 min)
- Track 2: 4-5 hrs (target: 3-5 hrs)

**Evaluation time:**
- Programmatic audit: 5 min (automated)
- Blind visual audit: 25 min × 2 judges = 25 min (parallel)
- Informed integration audit: 40 min
- Gap documentation: 15 min
- Final report: 15 min

**Total wall time: 6-8 hours** (build + evaluation)

**Critical path:**
1. Wave 0: Setup (HTTP server, content prep) — 10 min
2. Wave 1: Track 1 builder — 60-90 min
3. Wave 2: Track 2 builder — 4-5 hrs (parallel with Wave 3 if needed)
4. Wave 3: Evaluation (programmatic + visual + integration) — 1.5-2 hrs
5. Wave 4: Documentation + final report — 30 min

---

## SECTION 5: EVALUATION PROTOCOL

### Step-by-Step: What Evaluators Do

**Step 1: Programmatic Audit (5 minutes, automated)**

- Run DOM scan on HTML output
- Extract computed styles
- Verify soul compliance (8 checks)
- Verify guardrail compliance (8 checks)
- Verify token compliance (3 checks)
- Generate programmatic-audit.md

**Decision gate:** If ANY programmatic check FAILS → INSTANT FAIL (no visual audit needed)

---

**Step 2: Blind Visual Audit (25 minutes per judge, 2 judges parallel)**

- View screenshots (1440px + 768px)
- Answer PA-01 to PA-05 (Tier 1 mandatory)
- Answer PA-06 to PA-20 (Tier 2 standard)
- Record PASS/FAIL per question

**Decision gate:** If EITHER judge fails PA-05 "would ship" → FAIL overall

---

**Step 3: Informed Integration Audit (40 minutes, 1 judge)**

- Review source HTML + CSS
- Check library component usage (Track 1: 100% library, Track 2: components from library)
- Verify token compliance (cross-check with programmatic)
- Check custom property bridging (Tier 2 → Tier 3)
- Verify mechanism application (Track 2: ≥8 mechanisms)
- Check divergence table (Track 2 if convergence)
- Verify phase compliance (Track 2 workflow log)

**Decision gate:** If ANY critical criterion fails → FAIL overall

---

**Step 4: Gap Documentation (15 minutes, 1 scribe)**

- Compile all FAIL items from programmatic + visual + integration audits
- Categorize gaps (missing component, broken interface, insufficient pattern)
- Assign severity (CRITICAL, HIGH, MEDIUM, LOW)
- Propose remediation (add X to library, fix Y interface, document Z)

**Decision gate:** If CRITICAL gaps exist → likely CONDITIONAL PASS or FAIL

---

**Step 5: Disagreement Resolution (10-20 minutes if needed, lead)**

- Identify where Judge A and Judge B disagree (PA questions)
- Review screenshots at those specific questions
- Make third-party judgment (PASS or FAIL)
- Document disagreement + resolution

---

**Step 6: Final Report Synthesis (15 minutes, lead)**

- Compile all audit outputs
- Calculate overall scores (19/19 programmatic, 5/5 Tier 1, 14/15 Tier 2, etc.)
- Determine verdict (PASS / CONDITIONAL PASS / FAIL)
- Identify top 3 strengths + top 3 gaps
- Propose next steps (Phase E or remediation)

---

### How Many Judges?

**3 judges (2 blind + 1 informed)**

**Judge A (Blind visual):**
- Background: Extraction-aware (read compositional-core/, knows mechanisms)
- Evaluates: PA-01 to PA-20 (perceptual quality)
- Purpose: Recognize KortAI patterns without being told

**Judge B (Blind visual):**
- Background: Fresh-eyes (NOT extraction-aware, minimal KortAI context)
- Evaluates: PA-01 to PA-20 (perceptual quality)
- Purpose: True blind evaluation (catch issues extraction-aware judge might miss)

**Judge C (Informed integration):**
- Background: Extraction-aware + library architect (built compositional-core/)
- Evaluates: Library usage, mechanism application, divergence check
- Purpose: Verify library integration quality

**Why 3?** Inter-rater reliability (2 blind for agreement/disagreement) + integration verification (1 informed).

---

### What Rubric?

**60 total criteria:**

| Category | Count | Source | Judge Type |
|----------|-------|--------|------------|
| Soul compliance | 8 | Programmatic | Automated script |
| Guardrail compliance | 8 | Programmatic | Automated script |
| Token compliance | 3 | Programmatic | Automated script |
| PA Tier 1 (mandatory) | 5 | PA-01 to PA-05 | Blind visual (both) |
| PA Tier 2 (standard) | 15 | PA-06 to PA-20 | Blind visual (both) |
| PA Tier 3 (metaphor) | 3 | PA-42 to PA-44 | Informed integration |
| Phase D-specific | 12 | PD-01 to PD-12 | Mixed (6 informed, 2 programmatic, 1 blind) |
| Responsive (optional) | 6 | PA-21 to PA-23, PA-46 to PA-48 | Blind visual (768px) |

**Pass threshold:**
- Programmatic (19 criteria): 100% (19/19)
- Visual Tier 1 (5 criteria): 100% (5/5, PA-05 mandatory YES)
- Visual Tier 2 (15 criteria): 90% (14/15 minimum)
- Phase D (12 criteria): 100% (12/12, integration non-negotiable)
- **Overall: 54/60 minimum (90% total), with all CRITICAL passing**

---

## SECTION 6: REQUIRED PHASE D ARTIFACTS

**Phase D must produce 8 artifacts (not just 2 beautiful pages).**

**From 07-downstream-dependencies analysis:**

| Artifact | Purpose | Consumer | Minimum Content |
|----------|---------|----------|-----------------|
| **1. Validation Report** | PASS/CONDITIONAL/FAIL verdict | Phase E (playbook), Phase F (pilot) | Verdict, 3 test checklists with scores, screenshots at 1440px + 768px |
| **2. Gap Analysis** | Every place library fell short | Phase C (remediation?), Phase E (workarounds) | Gap list per test, severity (CRITICAL/HIGH/MEDIUM/LOW), remediation plan |
| **3. Integration Documentation** | How layers work together | Phase E (playbook), Phase F (builders) | "To use Tier 2 X in Tier 3 context Y: do Z" with code snippets |
| **4. Workflow Timing Data** | How long each phase took | Phase E (time estimates), Phase B (Track classification) | Per-test: analysis, composition, build, audit, total time |
| **5. Track Classification Validation** | Did Addition Test work? BECAUSE test? | Phase B (content analysis), Phase E | "Track 1: Addition Test passed immediately. Track 2: Addition Test failed (richness 14), BECAUSE test passed." |
| **6. Component Utilization Report** | Which components used, which weren't | Phase C (coverage), Phase E | Component inventory with used/unused flags, confidence levels validated |
| **7. Skill Integration Report** | Did tension-composition work? | Phase E (Track 2 playbook), Phase F | "Phases 0-5 completed in 142 min. Guardrails enforced. Perceptual cost: 2.1." |
| **8. CLAUDE.md Feedback** | Did routing work? Phase-gating? | Phase C (lessons), Phase E | "Phase-gated access worked. Case studies prohibited until Phase 5." |

**Current protocol status:** Only Artifact #1 (Validation Report) and #2 (Gap Analysis) are explicit deliverables.

**CRITICAL ADDITION:** Protocol must expand to require ALL 8 artifacts (not just 2).

**Why:** Phase E cannot write evidence-based playbook without workflow documentation. A PASS with no documentation = failure.

---

## SECTION 7: FAILURE DETECTION

### Top 3 False-Pass Scenarios (Test Says "Works" When It Doesn't)

**From 05-failure-modes analysis:**

**False-Pass #1: Test Content Too Simple**

**Scenario:** Test page uses only basic components (header, paragraph, callout, code). Never exercises complex patterns (CRESCENDO density, border-weight gradient). Agent builds successfully using 10% of extraction → Phase D passes. Migration discovers gaps.

**Detection:**
- Content complexity score BEFORE building (5+ section types, 3+ density zones, 2+ organizational patterns)
- Extraction coverage measurement (8+ components used, 5+ mechanisms applied)
- If coverage < 60% → content too simple, FAIL VALIDATION

**Resolution:** Use content selection criteria (Track 1: Next.js migration, Track 2: Event loop) — both exercise 60%+ extraction.

---

**False-Pass #2: Agent Bypasses Library (Custom CSS)**

**Scenario:** Agent reads compositional-core/, ignores components.css, writes custom CSS from scratch. Uses correct tokens (var(--color-primary)). Page looks good, soul passes. Phase D PASSES but library was never used.

**Detection:**
- CSS source analysis: Count library CSS vs custom CSS
- Library utilization ratio: library_lines / total_lines
- Require MINIMUM 55% library utilization
- If library_ratio < 0.55 → FAIL VALIDATION (agent bypassed library)

**Resolution:** Execution spec MUST include binary rule: "REQUIRED: Use components from components.css. Custom CSS permitted ONLY for metaphor-specific vocabulary."

---

**False-Pass #3: Agent Pattern-Matches to DD-006 (Divergence Not Enforced)**

**Scenario:** Agent reads case-studies/ during Phase 5 (permitted). Metaphor is "geological layers" (similar to DD-006). Agent doesn't complete divergence table. Copies CSS patterns from DD-006. Page looks excellent. Phase D PASSES.

**Detection:**
- Divergence verification gate: If metaphor matches case-studies/_INDEX.md → 5-dimension divergence table REQUIRED
- Metaphor vocabulary analysis: Extract CSS class names, compare to case study CSS
- Calculate vocabulary overlap: shared_terms / total_terms
- If overlap > 40% and no divergence justification → pattern-matching detected, FAIL VALIDATION

**Resolution:** Execution spec MUST enforce Phase 3.5 gate BEFORE Phase 5. Divergence table mandatory if convergence detected.

---

### Top 3 False-Fail Scenarios (Test Says "Broken" When It's Fine)

**From 05-failure-modes analysis:**

**False-Fail #1: Test Content is Pathological Edge Case**

**Scenario:** Test content has 8-level nesting (uncommon structure). Library designed for 3-4 levels (normal docs). Agent struggles at depth 8. Border-weight gradient unclear. Phase D FAILS. But no KortAI page has 8-level nesting.

**Detection:**
- Content representativeness check BEFORE testing
- Compare test content structure to production content samples
- Measure: hierarchy depth, section count, density variance
- If test content exceeds 95th percentile → EDGE CASE (not representative)
- Use 50th-75th percentile content

**Resolution:** If Phase D fails on edge case → SELECT DIFFERENT CONTENT (representative). Edge case failure ≠ library insufficiency.

---

**False-Fail #2: Agent Makes CSS Error (Not Library Gap)**

**Scenario:** Agent uses library component correctly but makes CSS typo (border-left: var(--color-border) instead of border-left: 4px solid var(--color-border)). CSS renders invisible. Perceptual audit FAILS. Phase D FAILS. But library CSS was correct.

**Detection:**
- CSS validation: Run CSS linter on agent output
- Library reference check: Compare agent CSS to library CSS
- If linter flags errors → AGENT ERROR (not library gap)
- Classify as agent mistake (copy-paste error)

**Resolution:** Distinguish library gaps (missing components) from agent errors (CSS typos). Agent errors should trigger retry, not Phase D failure.

---

**False-Fail #3: Perceptual Audit Overly Strict on First Build**

**Scenario:** Agent builds page (first attempt). Perceptual auditor flags PA-42 (IMPLICIT metaphor check) — FAIL ("too explicit"). Agent rebuilds with adjustments. Second attempt: PA-42 PASS. But first attempt was acceptable (subjective criteria).

**Detection:**
- Eliminate SUBJECTIVE PA questions from Phase D gate
- Use ONLY objective PA (Tier 1+2: PA-01 to PA-20)
- PA-42 (implicit metaphor) is Tier 3 (subjective) → log as advisory, don't fail on it

**Resolution:** Phase D gate uses ONLY objective PA criteria (Tier 1+2). Subjective criteria logged but don't fail validation. Allow agent iteration (1-2 rebuild attempts).

---

### Resolution Protocol for Ambiguous Results

**Scenario:** PA score 42/48 (below 45 threshold but close). All 3 failures are MINOR (within 20% of threshold). Is this FAIL or ACCEPTABLE?

**Resolution:**

**Use tiered thresholds:**
- ≥48/48 (100%) → EXCELLENT (crown jewel quality)
- ≥45/48 (93.75%) → PASS (migration ready)
- ≥42/48 (87.5%) → CONDITIONAL PASS (acceptable, document improvements)
- <42/48 (87.5%) → FAIL (library gaps or content too complex)

**If 42/48 with all MINOR violations → CONDITIONAL PASS** (proceed to Phase E, document violations for improvement)

---

## SECTION 8: EPISTEMOLOGICAL HEALTH CHECK

### Is Circular Validation a Risk?

**YES — 80% risk if Phase D evaluators use same lens (Identity + Enablement) that Phase C used for extraction.**

**From 08-epistemological-validity analysis:**

**The circular validation trap:**
- Phase C: "Using Identity lens, border-radius: 0 is soul-defining"
- Phase D: "Using Identity lens, does extraction include border-radius: 0?" → YES → VALID
- **This is circular.** The lens that constructed "soul-defining" also validates it.

**Mitigation:**

**PRIMARY: Use sufficiency test (not correctness test)**
- Question: "Can I build KortAI-quality page with ONLY these 40 items?" (sufficiency)
- NOT: "Did extraction capture correct items?" (correctness)
- Tests whether extraction ENABLES lens goals (identity preservation + creative freedom)

**SECONDARY: Add divergent lens subset**
- Build 1 page using ONLY frequency-validated items (16-item consensus core: soul + palette + fonts)
- If page achieves same quality → Enablement extraction is over-specified
- If page fails quality → Enablement extraction is necessary

**CRITICAL: Acknowledge construction explicitly**
- Document: "This validation tests whether extraction achieves Identity + Enablement goals within that lens framework."
- NOT: "This validation proves extraction is objectively correct."

---

### Should Evaluators Use a Different Lens?

**NO — use same lens (Identity + Enablement) BUT test sufficiency, not correctness.**

**Why NOT divergent lens:**
- Different lens (Frequency or Minimalism) would invalidate entire extraction
- We CHOSE Identity + Enablement for reason (identity preservation + creative freedom)
- Divergent lens validation is unhelpful (rejects everything based on different criteria)

**Why SAME lens with sufficiency test:**
- Tests: "Does this extraction enable building for its stated purpose?"
- NOT: "Is this extraction objectively true?"
- Accepts circularity as FEATURE (lens-constructed extraction validated within lens framework)

**Add explicit framing:**
- "This validation tests coherence within Identity + Enablement lens, not objective correctness."
- "Alternative lenses would produce different extractions AND different validations."
- "We are validating tool fitness for stated purpose, not universal truth."

---

### What Language Should Success Criteria Use?

**CONSTRUCTION language (NOT discovery language).**

**From 08-epistemological analysis: 70% residual discovery language in Phase C output is UNACCEPTABLE for Phase D.**

**Language audit REQUIRED:**

❌ DISCOVERY (invalid):
- "The extraction contains sufficient components"
- "The extraction IS sufficient for KortAI pages"
- "The extraction enables building"

✅ CONSTRUCTION (valid):
- "I can build KortAI-quality fortress content using these 40 items within Identity + Enablement lens"
- "This extraction ENABLES building for the content types tested (technical docs, Q&A)"
- "Using this toolkit, I achieved soul compliance + perceptual quality for 2/2 test pages"

**Enforcement:**
- Pre-execution check: Count "is/contains/enables" (discovery) vs "I can/using this/within lens" (construction)
- Target: <20% discovery language (vs 70% in Phase C)
- ALL success criteria must use construction language

---

## SECTION 9: THE FINAL CHECKLIST

**Copy-paste-ready checklist with binary pass/fail per item.**

---

### MANDATORY (ALL must pass — failure = Phase D FAILS)

**Programmatic Checks (19 items — automated, 5 minutes)**

- [ ] **M1.1:** border-radius: 0 on ALL elements (0 violations)
- [ ] **M1.2:** box-shadow: none on ALL elements (0 violations)
- [ ] **M1.3:** filter: drop-shadow() ABSENT (0 violations)
- [ ] **M1.4:** Colors from tokens.css only (no hardcoded #000/#FFF)
- [ ] **M1.5:** Fonts correct (Instrument Serif display, Inter body, JetBrains Mono code)
- [ ] **M1.6:** No 2px borders anywhere (0 violations)
- [ ] **M2.1:** Container width ≥ 940px at 1440px (G1)
- [ ] **M2.2:** Horizontal padding ≥ 32px per side (G2)
- [ ] **M2.3:** Label-to-heading gap ≥ 16px (G3)
- [ ] **M2.4:** Compression ratio ≥ 40% (G4)
- [ ] **M2.5:** Characters per line 45-80 (G5)
- [ ] **M2.6:** Body line-height ≥ 1.5 (G6)
- [ ] **M2.7:** Section breathing ≥ 48px (G7)
- [ ] **M2.8:** Border-radius = 0 (G8, duplicate check)
- [ ] **M5.1:** ALL guardrails met at 1440px viewport (8/8)
- [ ] **M5.2:** ALL guardrails met at 768px viewport (8/8)
- [ ] **R5.1:** All colors from tokens.css (T1)
- [ ] **R5.2:** All spacing from 4px scale (T2, ≥95% adherence)
- [ ] **R5.3:** Font families from trinity (T3, 100% compliance)

**Visual Checks (5 items — 2 blind judges, 25 minutes each)**

- [ ] **M-PA-01:** What's the first thing that bothers you? (PASS required)
- [ ] **M-PA-02:** Is any text uncomfortable to read? (PASS required)
- [ ] **M-PA-03:** Does this feel like one designer made it? (PASS required)
- [ ] **M-PA-04:** Where does your eye go first? Is that correct? (PASS required)
- [ ] **M-PA-05:** Would you ship this? (MANDATORY YES — both judges)

**Integration Checks (4 items — 1 informed judge, 40 minutes)**

- [ ] **M3.1:** Library utilization ≥ 60% (Track 1) OR ≥ 50% (Track 2)
- [ ] **M3.2:** Identity CSS ≥ 80% library (Track 2 only)
- [ ] **M6.1:** Page buildable without inventing new component types (YES)
- [ ] **M6.2:** No from-scratch component invention (carousel/slider/tabs)

**Process Checks (1 item — Track 2 only, workflow log review, 10 minutes)**

- [ ] **M4.1:** Agent did NOT read case-studies/ until Phase 5 (after metaphor lock)

---

### RECOMMENDED (≥10/14 must pass for PASS, ≥7/14 for CONDITIONAL PASS)

**Visual Quality (15 items — 2 blind judges, included in same 25-min session)**

- [ ] **R-PA-06:** Word stacking issues? (PASS preferred)
- [ ] **R-PA-07:** Paragraph tracking issues? (PASS preferred)
- [ ] **R-PA-08:** Squinting required? (PASS preferred)
- [ ] **R-PA-09:** Dead space issues? (PASS preferred)
- [ ] **R-PA-10:** Squint test balance? (PASS preferred)
- [ ] **R-PA-11:** Margin psychology? (PASS preferred)
- [ ] **R-PA-12:** Section transitions? (PASS preferred)
- [ ] **R-PA-13:** Visual ending? (PASS preferred)
- [ ] **R-PA-14:** Column breathing? (PASS preferred)
- [ ] **R-PA-15:** Alignment scatter? (PASS preferred)
- [ ] **R-PA-16:** Identical elements consistent? (PASS preferred)
- [ ] **R-PA-17:** Visual rhythm? (PASS preferred)
- [ ] **R-PA-18:** Gray family? (PASS preferred)
- [ ] **R-PA-19:** Color intruders? (PASS preferred)
- [ ] **R-PA-20:** Personality? (PASS preferred)

**Track 2 Composition (5 items — Track 2 only, informed judge)**

- [ ] **R2.1:** Metaphor novelty ≥ 3/5 dimensions different from library
- [ ] **R3.1:** Mechanism application count ≥ 8 (from 18 total)
- [ ] **R6.1:** Tier 2 components work in Tier 3 zones (YES)
- [ ] **M4.2:** Divergence table produced if metaphor matches library (≥3/5 different)
- [ ] **M4.3:** Strong justification if convergence (3/4 criteria: content analysis, tension mapping, alternatives considered, timeline evidence)

**Track 1 Assembly (1 item — Track 1 only, informed judge)**

- [ ] **R4.1:** Component coverage ≥ 8/9 families exercised

---

### DIAGNOSTIC (Informative, NOT pass/fail)

**Time Measurement (4 items — captured automatically, no judgment)**

- [ ] **D-T1:** Track 1 build time: _____ min (target: 45-90 min)
- [ ] **D-T2:** Track 2 build time: _____ hrs (target: 3-5 hrs)
- [ ] **D-T3:** Track 1 time diagnostic: < 30 min (suspicious) OR > 2 hrs (gap) OR 45-90 min (good)
- [ ] **D-T4:** Track 2 time diagnostic: < 2 hrs (suspicious) OR > 8 hrs (gap) OR 3-5 hrs (good)

---

### TOTAL PASS THRESHOLD

**For PASS verdict:**
- MANDATORY: 29/29 (100% — M1-M6 all items)
- RECOMMENDED: ≥10/14 (71% — R-PA + R2-R6)
- **Overall: 39/43 minimum (91%) with ALL MANDATORY passing**

**For CONDITIONAL PASS verdict:**
- MANDATORY: 29/29 (100% — M1-M6 all items)
- RECOMMENDED: ≥7/14 (50% — R-PA + R2-R6)
- Gap severity: 0 CRITICAL gaps (HIGH/MEDIUM/LOW acceptable with remediation plan)
- **Overall: 36/43 minimum (84%) with ALL MANDATORY + 0 CRITICAL gaps**

**For FAIL verdict:**
- ANY MANDATORY fails → FAIL
- OR: RECOMMENDED < 7/14 → FAIL
- OR: ≥1 CRITICAL gap → FAIL

---

## FINAL RECOMMENDATIONS

### Critical Protocol Updates (MUST DO)

1. **Split Phase D scope:** Remove 4-variant test from Phase D, defer to Phase F+ (6-10 hours) DURING pilot migration
2. **Expand deliverables:** Require ALL 8 artifacts (not just validation report + gaps)
3. **Add language audit:** Replace discovery language with construction language in all success criteria
4. **Add explicit lens statement:** "This validation uses Identity + Enablement lens, tests tool fitness for stated purpose (not objective truth)"
5. **Multi-viewport testing:** BOTH 1440px AND 768px must pass (not just desktop)

### High-Value Additions (SHOULD DO)

6. **Add Track 2 process checks:** Phase compliance (M4.1), divergence verification (M4.2-M4.3)
7. **Specify test content:** Track 1 = Next.js migration, Track 2 = Event loop mental model
8. **Add component utilization tracking:** Document which components used/unused, confidence levels validated
9. **Add falsificatory test:** No-guidance build (vocabulary only, no mechanisms/components/case-studies)
10. **Document time as diagnostic:** NOT pass/fail criterion (informs gap detection)

### Key Decision

**The 2×3 Outcome Matrix (from 07-downstream-dependencies):**

| Validation | Documentation | Outcome | Can Proceed? |
|------------|---------------|---------|--------------|
| PASS | COMPREHENSIVE | **IDEAL** | ✅ YES → Phase E |
| PASS | PARTIAL | **RISKY** | ⚠️ MAYBE → E writes playbook on assumptions |
| PASS | INSUFFICIENT | **FAILURE** | ❌ NO → Re-run Phase D |
| CONDITIONAL | COMPREHENSIVE | **ACCEPTABLE** | ✅ YES → E writes gap-aware playbook |
| CONDITIONAL | PARTIAL | **MARGINAL** | ⚠️ MAYBE → Proceed with caution |
| CONDITIONAL | INSUFFICIENT | **FAILURE** | ❌ NO → Re-run Phase D |
| FAIL | * | **FAILURE** | ❌ NO → Remediate |

**Phase D must achieve PASS + COMPREHENSIVE or CONDITIONAL + COMPREHENSIVE to proceed.**

---

**END UNIFIED SUCCESS CHECKLIST**

**Total lines:** 1,063
**Total criteria:** 43 (29 mandatory + 14 recommended + 4 diagnostic)
**Estimated execution time:** 6-8 hours (build + evaluation + documentation)
**Recommended verdict threshold:** 39/43 (PASS) or 36/43 (CONDITIONAL PASS) with 0 CRITICAL gaps
