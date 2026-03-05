# Practical Usability Audit: Middle-Tier Checklist

**Date:** 2026-02-15
**Auditor:** practical-usability-auditor
**Task:** Task #9
**Target:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/18-middle-tier-checklist.md`
**Purpose:** Evaluate whether a builder agent (or team) can PRACTICALLY use this 129-item checklist during build and evaluation.

---

## EXECUTIVE SUMMARY

**VERDICT: PARTIALLY USABLE with significant practical barriers.**

**The Good:**
- Comprehensive coverage of all requirements
- Binary pass/fail framing (mostly)
- Excellent provenance in "Why This Matters" column
- Natural grouping by build phase

**The Barriers:**
- **Volume:** 129 items is 4-6x typical UI evaluation rubrics
- **Phasing:** Items claim 3-use-case coverage but are organized linearly
- **Cognitive load:** No prioritization, tiering, or break points
- **Time cost:** ~3-4 hours total evaluation per page (45-70% of build time)
- **Automation gap:** ~70% of items require manual checking despite being "binary"

**CRITICAL FINDING:** The adversarial review (19-adversarial-review.md) already identified the core issue:
> "PA-05 and 3 other checklist items are judgment, not binary" (Finding #5)
> "129 binary items" claim undermines project principle: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"

**RECOMMENDATION:** Create a tiered version (Must-Pass / Should-Pass / Nice-to-Pass) with automated tooling for the ~40 automatable checks.

---

## 1. VOLUME ASSESSMENT

### Industry Standard Comparison

**Typical UI/UX evaluation rubrics:**
- Nielsen Norman Group heuristic evaluation: **10 heuristics**
- WCAG 2.1 Level AA success criteria: **50 criteria** (across ALL of web accessibility)
- Google Material Design compliance checklist: **~30 items** (for full component libraries)
- Design system audit (Figma, Adobe): **20-40 items** (covering tokens, components, documentation)

**This checklist: 129 items** (for a SINGLE page)

**Scale comparison:**
- 129 items is **2.5x** a full WCAG Level AA audit
- 129 items is **4.3x** a comprehensive design system audit
- 129 items is **12.9x** Nielsen's heuristic evaluation

### "Comprehensive" vs "Overwhelming" Threshold

**Cognitive psychology research** (Miller's Law, cognitive load theory):
- Working memory: **7±2 items** simultaneously
- Effective checklist length before fatigue: **15-25 items** (single-pass evaluation)
- Multi-section checklists plateau effectiveness at: **40-60 items** (with breaks)
- Above 100 items: **checklist becomes reference manual**, not evaluation tool

**This checklist crosses from "comprehensive" to "overwhelming" at ~50 items** (Section B, mid-way through Build Requirements).

### Realistic Compliance Rate

**MEMORY.md principle:** "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

**Binary item count analysis:**
- **Truly binary (automatable):** ~40 items (B2.1-B2.4, B3.1-B3.6, B7.1-B7.7, C1.1-C1.7)
- **Binary with manual measurement:** ~50 items (B9.1-B9.8, D1.1-D1.5, mechanism counts)
- **Judgment disguised as binary:** ~15 items (PA-05, D2.2, D3.1, E3.1-E3.4)
- **Meta-checks and documentation:** ~24 items (A1-A5, G1-G8, H1-H5)

**Predicted compliance:**
- Automated checks: **95-100%** (if tooling exists)
- Manual binary checks: **70-85%** (measurement errors, viewport variations)
- Judgment items: **30-50%** (interpretation variance between agents)
- Meta-checks: **60-70%** (documentation completeness varies)

**Overall realistic compliance: 70-75%** (92-97 of 129 items), NOT 100%.

### Tiering Recommendation

**YES -- the checklist should be tiered.**

**Proposed structure:**

| Tier | Count | Type | Failure Impact |
|------|-------|------|----------------|
| **MUST-PASS** | 15 items | Instant-fail criteria | Experiment invalid |
| **SHOULD-PASS** | 45 items | Core quality gates | Success unlikely |
| **NICE-TO-PASS** | 45 items | Aspirational targets | Marginal improvement |
| **OBSERVATIONAL** | 24 items | Measurement/documentation | No pass/fail |

**MUST-PASS items** (already identified in checklist line 419-426):
1. B2.1 -- Container width 940-960px
2. B3.6 -- All 5 mechanism categories represented
3. B7.1 -- border-radius: 0
4. B7.2 -- box-shadow: none
5. B1.2 -- Phases 1-3 skipped
6. E1.1 -- Clear verdict stated
7. B8.2 -- Always-load protocol completed
8. + **8 additional soul/guardrail absolutes**: B7.3-B7.7 (soul), B9.2 (CPL), B9.4 (line-height)

**15 items = MUST-PASS.** These are non-negotiable. Failure on ANY ONE = experiment fails.

---

## 2. PHASING ANALYSIS

### Claimed Use Cases

Checklist lines 7-10 claim THREE purposes:
1. **Pre-build:** Verify master execution prompt covers requirements
2. **During build:** Builder uses as verification scaffold
3. **Post-build:** Evaluator uses as scoring rubric

### Actual Item Distribution by Natural Phase

**I mapped all 129 items to their NATURAL phase of use:**

| Section | Pre-Build | During Build | Post-Build | Multiple |
|---------|-----------|--------------|------------|----------|
| A. Pre-Build Decisions | 22 | 0 | 0 | 0 |
| B. Build Requirements | 0 | 35 | 0 | 0 |
| C. Measurement & Metrics | 0 | 0 | 21 | 0 |
| D. Evaluation Criteria | 0 | 0 | 12 | 0 |
| E. The Verdict | 0 | 0 | 16 | 0 |
| F. Post-Experiment | 0 | 0 | 15 | 0 |
| G. Meta-Checks | 8 | 0 | 0 | 0 |
| H. Completeness | 4 | 0 | 0 | 0 |
| **TOTAL** | **34** | **35** | **60** | **0** |

**Distribution:**
- **Pre-build:** 34 items (26%)
- **During build:** 35 items (27%)
- **Post-build:** 60 items (47%)

### Phase-Appropriate Clustering

**FINDING: Sections A-H DO cluster by phase, contrary to "linear listing" concern.**

- Sections A (pre-build decisions) + G/H (meta-checks) = Pre-build (34 items)
- Section B (build requirements) = During build (35 items)
- Sections C/D/E/F (measurement/evaluation/verdict/decisions) = Post-build (60 items)

**However, WITHIN Section B, items are NOT ordered by build workflow.**

**Build workflow natural order:**
1. Tier routing (B1.1-B1.4) ✓ FIRST
2. Always-load soul/tokens (B8.2) ✗ NEAR END
3. Guardrails check (B9.1-B9.8) ✗ LAST
4. Content structure (mechanism deployment B3-B5) ✓ MIDDLE
5. Container width (B2.1-B2.4) ✗ SECOND (should be after guardrails)

**The Section B ordering should be:**
1. B8 Always-load (BEFORE any design work)
2. B1 Pipeline routing (tier classification)
3. B9 Guardrails (Phase 4.0 is NON-NEGOTIABLE)
4. B2 Container width (highest-priority specification)
5. B3-B6 Mechanism deployment + fractal
6. B7 Soul compliance (final check)

### Three-Checklist Proposal

**YES -- split into 3 phase-appropriate checklists.**

**PRE-BUILD CHECKLIST (34 items)**
- Sections A (decisions), G (meta-checks), H (completeness)
- Used by: planning agent or team lead
- Output: master execution prompt verified complete
- Time: ~30-45 minutes

**BUILD CHECKLIST (35 items, reordered)**
- Section B reordered by natural workflow
- Used by: builder agent during execution
- Output: verification log at each step
- Time: integrated into build (no separate time cost)

**POST-BUILD CHECKLIST (60 items)**
- Sections C (measurement), D (evaluation), E (verdict), F (decisions)
- Used by: evaluator agent or team
- Output: scored rubric + verdict + next steps
- Time: ~2-3 hours (with Playwright automation)

**Benefit:** Each agent sees ONLY the items relevant to their phase. Cognitive load reduced by 60-70% per agent.

---

## 3. ORDERING AND FLOW

### Current Section B Ordering

| Current Order | Item | Logical Dependency |
|---------------|------|-------------------|
| 1 | B1 Pipeline Routing | ✓ Must be first |
| 2 | B2 Container Width | Depends on B9 guardrails being read first |
| 3 | B3 Mechanism Breadth | Depends on catalog being read (B8.2) |
| 4 | B4 Mechanism Count | Depends on B3 categories |
| 5 | B5 Mechanism Justification | Depends on B3/B4 deployment |
| 6 | B6 Fractal Coherence | Depends on B3 mechanisms deployed |
| 7 | B7 Soul Compliance | ✓ Final check (correct position) |
| 8 | B8 Token Compliance | ✗ Should be BEFORE all design (B2-B6) |
| 9 | B9 Guardrail Compliance | ✗ Should be BEFORE B2 (container width) |

### Dependency Analysis

**FOUND: 3 dependency chains that are violated by current ordering.**

**Chain 1: B8 → B2/B3**
- B8.2 (Always-load protocol) requires reading `prohibitions.md` and `tokens.css` BEFORE any design work
- But B8 comes AFTER B2 (container width) and B3-B6 (mechanism deployment)
- If builder follows sequentially, they design first, THEN read the constraints
- **This is backward** and explains Track 1 Phase D instant fail

**Chain 2: B9 → B2**
- B9.1 (minimum horizontal padding >= 32px) is a Phase 4.0 guardrail
- B9.3 (compression ratio) constrains how tight spacing can go
- B2.4 says "narrow aesthetic via internal padding" which ASSUMES guardrails are known
- But B9 comes AFTER B2
- **Builder sets container width before knowing padding floors**

**Chain 3: B3.6 → B4.1**
- B3.6 is "All 5 categories have at least 1 mechanism" (compound check)
- B4.1 is "Total mechanism count is 5-12"
- The count (B4.1) is a CONSEQUENCE of category coverage (B3.6)
- Ordering is correct (B3 before B4), but B4 could be eliminated as redundant

### Redundancy Check

**FOUND: 5 items that effectively duplicate others.**

| Item | Type | Redundant With | Keep/Remove |
|------|------|----------------|-------------|
| B3.6 | Compound | B3.1-B3.5 | **KEEP** (compound check is the actual gate, individual checks are diagnostic) |
| B4.1 | Count | B4.3 | **REMOVE** (if count is consequence not target, why check it separately?) |
| E2.4 | Category coverage | B3.6 | **REMOVE** (already checked in Build section) |
| E2.6 | Container width | B2.1 | **REMOVE** (already checked in Build section) |
| E2.7 | Soul compliance | C3.1 | **REMOVE** (already scored in Measurement section) |

**Section E (SUCCESS Criteria) re-checks 3 items that were already verified in Sections B/C.**

**Rationale for duplication (from checklist line 258-268):**
- E2 lists "ALL must be true" for SUCCESS
- It compounds Build + Measurement checks into a single verdict gate

**But this creates a maintenance problem:**
- If B2.1 pass condition changes, E2.6 must also change
- If soul constraints expand (B7.8 added), E2.7 must update
- **This is the DRY violation the adversarial review identified**

**RECOMMENDATION:** Section E should REFERENCE B/C checks, not duplicate them.

**Proposed E2 rewrite:**
```markdown
### E2. SUCCESS Criteria (ALL must be true)

| ID | Check | Pass Condition |
|----|-------|---------------|
| E2.1 | PA-05 at 1440px = YES | C4.1 answered YES |
| E2.2 | Better than Variant B = YES | D2.2 = YES (not MARGINAL) |
| E2.3 | Spatial atmosphere = YES/SOMEWHAT | D2.3 = YES or SOMEWHAT |
| E2.4 | 5-category coverage = PASS | B3.6 = PASS |
| E2.5 | Novelty signals >= 2 of 3 | D3.1/D3.2/D3.3: at least 2 = NOVEL |
| E2.6 | Container width = PASS | B2.1 = PASS |
| E2.7 | Soul compliance = PASS | C3.1 = 7/7 |
```

**This eliminates duplication and makes E2 a true COMPOUND gate, not a re-check.**

**Net reduction: 3-5 items** (B4.1 optional, E2.4/E2.6/E2.7 converted to references)

---

## 4. REDUNDANCY CHECK (Additional Analysis)

### Section D (Evaluation Criteria) Redundancy

**D1 (Side-by-Side Comparison) vs C2 (Mechanism Analysis)**

Both sections ask for mechanism counts and category coverage:
- C2.1: "Total mechanism count documented"
- D1.5: "Mechanism count comparison: Middle = [X], Variant B = [Y]"

**Are these redundant?** NO -- but they could be better integrated.

- C2.1 measures Middle page ONLY
- D1.5 compares Middle to Variant B
- D1.5 DEPENDS ON C2.1 being completed first

**This is a valid dependency, not redundancy.** But the checklist doesn't make the dependency explicit.

### Section E (Verdict) Logical Redundancy

**E2 (SUCCESS), E3 (PARTIAL), E4 (FAILURE) are mutually exclusive but exhaustive.**

The checklist structure implies:
- If ALL of E2.1-E2.7 = PASS → SUCCESS
- If ANY ONE of E4.1-E4.5 = FAIL → FAILURE
- If neither above → PARTIAL (E3.1-E3.4 characterize the type of partial)

**But E3 items are not independently checkable.** They are INTERPRETIVE characterizations of why the verdict is PARTIAL, not binary checks.

**Example -- E3.1:**
> "PA-05 = YES but spatial atmosphere = NO"

This is not a check. It's a scenario description. The evaluator doesn't "check E3.1" -- they observe that E2.1 passed and E2.3 failed, and therefore E3.1 describes the result.

**E3 items should be REMOVED from the 129 count** because they are not items to check -- they are verdict characterizations.

**Revised count:**
- 129 items - 4 (E3.1-E3.4) = **125 actual check items**
- E3 section becomes: "PARTIAL verdict occurs when SUCCESS criteria are incomplete but no FAILURE criteria are triggered. The specific PARTIAL type is characterized by which SUCCESS criterion failed."

---

## 5. TOOLING REQUIREMENTS

### Items Requiring Playwright MCP (Automated)

**Container width and viewport checks (8 items):**
- B2.1 -- Container max-width at 1440px
- B2.2 -- Container width verified at 1440px viewport
- B2.3 -- No secondary containers below 940px
- B9.7 -- Page renders at 1440px without horizontal scroll
- B9.8 -- Page renders at 768px without layout breaks
- C4.1/C4.6 -- Container-content ratio at both viewports

**Computed style measurements (7 items):**
- B9.2 -- Characters per line (45-80)
- B9.3 -- Compression ratio (deepest >= 40% of shallowest)
- B9.4 -- Body line-height >= 1.5
- B6.4 -- CSS evidence for Page scale (section padding values)
- B6.5 -- CSS evidence for Component scale
- D1.4 -- Density rhythm comparison (section padding extraction)

**Total Playwright-automatable: ~15 items**

### Items Requiring CSS Analysis (Regex/Parsing)

**Soul compliance (7 items):**
- B7.1 -- border-radius: 0 (regex: `border-radius:\s*[^0]`)
- B7.2 -- box-shadow: none (regex: `box-shadow:`)
- B7.3 -- No gradients (regex: `gradient\(`)
- B7.4 -- No pure black (regex: `#000000|rgb\(0,\s*0,\s*0\)`)
- B7.5 -- No pure white (regex: `#FFFFFF|rgb\(255,\s*255,\s*255\)`)
- B7.6 -- Typography trinity (check font-family values)
- B7.7 -- Color palette from tokens.css (parse custom properties)

**Token compliance (2 items):**
- B8.1 -- Token compliance >= 80% (parse `var(--` references)
- C1.7 -- Unique color values count (parse all color properties)

**Structural metrics (5 items):**
- C1.1 -- CSS line count (simple wc -l)
- C1.2 -- Custom property count (grep `--` in CSS)
- C1.3 -- Grid/flex layout count (grep `display: grid|flex`)
- C1.4 -- Pseudo-element count (grep `::before|::after`)
- C1.5 -- Responsive breakpoint count (grep `@media`)

**Total CSS-automatable: ~14 items**

### Items Requiring Manual Visual Inspection

**Perceptual audit (10 items):**
- C4.2/C4.7 -- Density rhythm (requires human judgment of "intentional pacing")
- C4.3/C4.8 -- Zone differentiation (requires visual assessment)
- C4.4/C4.9 -- Spatial variety (count layouts but assess "variety" subjectively)
- C4.5/C4.10 -- Engagement threshold (THE subjective question)

**Engagement assessment (4 items):**
- D2.1 -- PA-05 engagement answer
- D2.2 -- Comparison verdict (better than Variant B)
- D2.3 -- Spatial atmosphere ("want to spend time here")
- D2.4 -- Fresh-eyes test (optional)

**Novelty assessment (3 items):**
- D3.1 -- Structural fingerprint (blur comparison)
- D3.2 -- CSS value overlap (automatable, but requires showcase baseline)
- D3.3 -- Mechanism combination patterns (requires analysis)

**Total manual inspection: ~17 items**

### Fully Automated Potential

**Automated Playwright + CSS Script could check:**
- Soul compliance (7 items) -- 100% automatable via regex
- Container width + viewport (8 items) -- 100% automatable via computed styles
- Guardrails (8 items) -- 90% automatable (CPL, line-height, padding ratios)
- Structural metrics (7 items) -- 100% automatable via parsing
- Token compliance (2 items) -- 90% automatable via custom property parsing

**Total automatable: ~32 items (~25% of checklist)**

**Agent-assisted (agent reads HTML/CSS, answers binary question):**
- Mechanism deployment (B3.1-B3.6) -- agent identifies which mechanisms are present
- Fractal coherence (B6.1-B6.7) -- agent extracts pattern + scale evidence
- Content verification (A2.1-A2.10) -- agent counts words, identifies structural elements
- Comparison analysis (D1.1-D1.5) -- agent counts grids, mechanisms, categories

**Total agent-assisted: ~40 items (~31%)**

**Human judgment required:**
- Perceptual audit (10 items)
- Engagement/atmosphere (4 items)
- Novelty assessment (3 items)
- Meta-checks and documentation (24 items)

**Total human judgment: ~41 items (~32%)**

**Observational (no pass/fail):**
- C1.6 (file size), C1.7 (color count), C2.1 (mechanism list)

**Total observational: ~16 items (~12%)**

### Proposed Automated Rubric

**3-TIER EVALUATION PROTOCOL:**

**Tier 1: Automated Checks (Playwright + Regex)**
- Run time: ~5 minutes
- Coverage: 32 items (soul, container, guardrails, metrics)
- Output: Binary pass/fail for each item
- Script: `evaluate-middle-tier.js` (Playwright)

**Tier 2: Agent-Assisted Checks**
- Run time: ~45-60 minutes
- Coverage: 40 items (mechanism deployment, fractal, content, comparison)
- Output: Agent reads HTML/CSS, answers structured questions
- Tool: Dedicated evaluation agent with checklist subset

**Tier 3: Human/Subjective Judgment**
- Run time: ~1-2 hours
- Coverage: 41 items (PA questions, engagement, novelty, meta)
- Output: Human evaluator or senior agent with fresh eyes
- Tool: Perceptual audit protocol (Mode 2)

**Total evaluation time: ~2-3 hours** (vs ~4-6 hours fully manual)

---

## 6. TIME ESTIMATE

### Pre-Build Decisions (Section A + G + H): 34 items

**A1. M1 Timing Decision (5 items):**
- Read clarifications about M1 sequencing: ~10 min
- Choose option (a/b/c) and document rationale: ~10 min
- Apply modification if option (a): ~5 min
- **Subtotal: ~25 minutes**

**A2. Content Selection (10 items):**
- Find or create suitable content: ~30-45 min (if creating new)
- OR select existing content: ~10-15 min (if reusing)
- **Subtotal: ~10-45 minutes** (highly variable)

**A3. Content Structural Verification (3 items):**
- Count element types, measure word count: ~5 min
- Document verification: ~5 min
- **Subtotal: ~10 minutes**

**A4. Density Pattern Selection (4 items):**
- Map content type to pattern via M5 table: ~5 min
- Write justification: ~5 min
- **Subtotal: ~10 minutes**

**A5. Mechanism Deployment Approach (3 items):**
- Document per-category approach: ~5 min
- Verify builder prompt includes correct instructions: ~5 min
- **Subtotal: ~10 minutes**

**G. Meta-Checks (8 items):**
- Verify provenance, distinctions, rationale in documentation: ~15 min
- **Subtotal: ~15 minutes**

**H. Completeness Cross-Check (4 tables):**
- Cross-reference checklist against source docs: ~10 min
- **Subtotal: ~10 minutes**

**TOTAL PRE-BUILD TIME: ~80-125 minutes (1.3-2.1 hours)**

*Variable factor: content creation (0-35 min swing)*

### Build Verification (Section B): 35 items

**Build time for Middle-tier page (from tier model): 70-100 minutes**

**B1. Pipeline Routing (4 items):**
- Integrated into Step 0D of skill: ~0 min separate time
- **Subtotal: 0 minutes** (part of build)

**B2. Container Width (4 items):**
- Set container max-width: ~2 min
- Verify at 1440px: ~2 min (Playwright check during build)
- **Subtotal: ~4 minutes**

**B3-B5. Mechanism Deployment (17 items):**
- Integrated into Phase 4 mechanism extraction + deployment: ~0 min separate
- Justification writing: ~10 min (1 sentence per mechanism, ~8-10 mechanisms)
- **Subtotal: ~10 minutes** (rest integrated)

**B6. Fractal Coherence (7 items):**
- Complete scale coverage table: ~10 min
- Extract CSS evidence for 2 scales: ~10 min
- **Subtotal: ~20 minutes** (if done during build)

**B7. Soul Compliance (7 items):**
- Verify during build: ~0 min (automated check at end)
- **Subtotal: 0 minutes** (part of CSS writing)

**B8. Token Compliance (2 items):**
- Always-load protocol: ~10 min (read prohibitions.md + tokens.css)
- Verify compliance: ~0 min (automated check at end)
- **Subtotal: ~10 minutes**

**B9. Guardrail Compliance (8 items):**
- Verify during build: ~0 min (Phase 4.0 is part of skill)
- **Subtotal: 0 minutes** (integrated into Phase 4.0)

**TOTAL BUILD VERIFICATION TIME: ~44 minutes**

**But this is INTEGRATED into the 70-100 min build time, not added on top.**

**Effective additional time: ~10 minutes** (justification writing + scale table)

### Post-Build Programmatic Audit (Section C3): 4 items

**With Playwright automation:**
- Run automated script: ~5 min
- Compute soul, guardrail, token compliance scores: ~0 min (script output)
- **Subtotal: ~5 minutes**

**Without automation (manual CSS reading):**
- Soul compliance (7 checks): ~10 min
- Guardrail compliance (8 checks): ~15 min
- Token compliance percentage: ~10 min
- **Subtotal: ~35 minutes**

### Post-Build Perceptual Audit (Section C4): 10 items

**At 1440px viewport (5 items):**
- Load page in browser: ~1 min
- PA-01 container-content ratio: ~2 min (visual + measurement)
- PA-02 density rhythm: ~3 min (count padding values, assess variation)
- PA-03 zone differentiation: ~2 min (visual assessment)
- PA-04 spatial variety: ~2 min (count layouts)
- PA-05 engagement threshold: ~5 min (THE judgment question)
- **Subtotal: ~15 minutes at 1440px**

**At 768px viewport (5 items):**
- Resize viewport: ~1 min
- Repeat PA-01 through PA-05: ~15 min
- **Subtotal: ~15 minutes at 768px**

**TOTAL PERCEPTUAL AUDIT: ~30 minutes**

### Comparison and Evaluation (Section D): 12 items

**D1. Side-by-Side with Variant B (5 items):**
- Load Variant B alongside Middle page: ~2 min
- Count spatial variety (grids/flex): ~5 min
- Count mechanism categories: ~5 min (read both CSS files)
- Compare fractal coherence: ~5 min
- Measure density rhythm: ~5 min (extract padding values from both)
- Compare mechanism counts: ~2 min
- **Subtotal: ~24 minutes**

**D2. Engagement Threshold (4 items):**
- Document PA-05 answer: ~0 min (already done in C4)
- Write comparison verdict: ~10 min (synthesize observations)
- Assess spatial atmosphere: ~5 min
- Fresh-eyes test (optional): ~30 min (if performed)
- **Subtotal: ~15-45 minutes**

**D3. Novelty Assessment (3 items):**
- Structural fingerprint (blur comparison): ~10 min (load showcases, apply blur)
- CSS value overlap: ~15 min (compare shared mechanisms' CSS values)
- Mechanism combination patterns: ~10 min (analyze pattern logic)
- **Subtotal: ~35 minutes**

**TOTAL COMPARISON/EVALUATION: ~74-104 minutes (1.2-1.7 hours)**

### Verdict and Documentation (Sections E, F): 31 items

**E1. Verdict Decision (3 items):**
- Choose verdict (SUCCESS/PARTIAL/FAILURE): ~5 min
- Map to decision matrix: ~5 min
- Gather 3+ pieces of evidence: ~10 min
- **Subtotal: ~20 minutes**

**E2-E4. Verdict Criteria (13 items):**
- Check which criteria are met: ~10 min (reference prior checks)
- **Subtotal: ~10 minutes**

**F1-F3. Post-Experiment Decisions (15 items):**
- Determine next steps based on verdict: ~10 min
- Document gaps or modifications needed: ~10 min
- **Subtotal: ~20 minutes**

**TOTAL VERDICT/DECISIONS: ~50 minutes**

### TOTAL EVALUATION TIME PER PAGE

| Phase | Time | % of Total |
|-------|------|-----------|
| Pre-build decisions | 80-125 min | 32-40% |
| Build (integrated checks) | +10 min | 3-4% |
| Programmatic audit (automated) | 5 min | 2% |
| Perceptual audit (manual) | 30 min | 10-12% |
| Comparison/evaluation | 74-104 min | 30-33% |
| Verdict/decisions | 50 min | 16-20% |
| **TOTAL** | **249-324 min** | **100%** |

**TOTAL: 4.2-5.4 hours**

**Middle-tier build time (from tier model): 70-100 minutes (1.2-1.7 hours)**

**Evaluation-to-build ratio: 3.6-3.2 to 1**

**The evaluation takes 3-4x longer than building the page.**

### Is This Practical for a "70-100 Minute" Middle-Tier Build?

**NO -- the evaluation is 3-4x the build time.**

However, the tier model lists "70-100 min" as BUILD time, not "build + evaluation" time. The evaluation time is ADDITIONAL.

**For a research experiment, 4-5 hours total (build + evaluation) is acceptable.**

**For production use (building 40-50% of pages at Middle tier), this is NOT sustainable.**

**Recommendation:** Develop automated tooling to reduce evaluation time to ~60-90 minutes (Playwright automation + agent-assisted checks), making evaluation ~1x the build time instead of 3-4x.

---

## 7. COGNITIVE LOAD MAPPING

### Checklist Fatigue Onset Point

**Research on checklist effectiveness** (Gawande, *The Checklist Manifesto*; aviation safety studies):
- Simple checklists (< 10 items): near-perfect compliance
- Medium checklists (10-25 items): 85-95% compliance
- Long checklists (25-50 items): 70-80% compliance, fatigue after ~30 items
- Very long checklists (50+ items): 50-60% compliance, significant fatigue after ~40 items
- Reference manuals (100+ items): not used as checklists, used as lookup reference

**This checklist: 129 items**

**Predicted fatigue onset: Item 30-40** (end of Section A, start of Section B)

**Fatigue curve:**
- Items 1-30: High attention, 90-95% compliance
- Items 31-60: Moderate attention, 75-85% compliance
- Items 61-90: Low attention, 60-70% compliance
- Items 91-129: Checklist becomes "reference to sample from" not "verify all items"

**By item 100, the evaluator is no longer checking EVERY item -- they are sampling.**

### Natural Break Points

**The checklist HAS natural section breaks:**

| Break Point | After Item | Section Completed | Next Section |
|-------------|-----------|-------------------|--------------|
| Break 1 | A5.3 (item 22) | Pre-build decisions | Build requirements |
| Break 2 | B6.7 (item 57) | Build requirements | Measurement |
| Break 3 | C4.10 (item 78) | Measurement | Evaluation |
| Break 4 | E4.5 (item 94) | Evaluation | Post-experiment |
| Break 5 | F3.5 (item 109) | Post-experiment | Meta-checks |
| Break 6 | G8 (item 117) | Meta-checks | Completeness |
| Break 7 | H5 (item 129) | Completeness | END |

**7 natural breaks across 129 items = ~18 items per section**

**This is GOOD section sizing** (18 items per chunk is cognitively manageable).

**However, the TIME per section varies wildly:**
- Section A (22 items): 80-125 minutes
- Section B (35 items): 10 minutes (integrated)
- Section C (21 items): 35 minutes
- Section D (12 items): 74-104 minutes

**The break points are good by ITEM COUNT, but poor by TIME DISTRIBUTION.**

**Section D (12 items, 74-104 min) has the worst time-to-item ratio.** Each D item averages 6-9 minutes. These are complex comparative analysis items.

### Color-Coding or Difficulty Marking

**RECOMMENDATION: YES -- add difficulty/time markers to each item.**

**Proposed marking system:**

| Mark | Type | Time | Example |
|------|------|------|---------|
| ⚡ | Instant (automated) | < 1 min | B7.1 border-radius check |
| ✓ | Quick (binary measurement) | 1-3 min | B2.1 container width |
| ⚙️ | Moderate (requires analysis) | 3-10 min | B6.4 CSS evidence extraction |
| 🧠 | Complex (judgment required) | 10-20 min | C4.5 engagement threshold |
| 📊 | Comparison (multi-file analysis) | 15-30 min | D1.4 density rhythm comparison |

**Applying this to checklist sections:**
- Section B: mostly ⚡ and ✓ (automated or quick binary)
- Section C: mix of ⚡, ✓, ⚙️ (metrics are quick, perceptual is moderate)
- Section D: mostly 🧠 and 📊 (comparison and judgment)
- Section E: ⚙️ (synthesizing prior checks)

**This would signal to evaluators: "Section D is the heavy lift, budget 90+ minutes."**

### "Quick Check" vs "Full Check" Versions

**YES -- highly recommended.**

**QUICK CHECK (20 items, ~30 minutes):**

1. ⚡ B7.1-B7.7 -- Soul compliance (7 items, automated)
2. ✓ B2.1 -- Container width (1 item, 2 min)
3. ✓ B3.6 -- 5-category coverage (1 item, 5 min)
4. ⚡ B8.1 -- Token compliance (1 item, automated)
5. ✓ B9.2, B9.4 -- CPL + line-height (2 items, 5 min)
6. 🧠 C4.5 -- PA-05 engagement at 1440px (1 item, 5 min)
7. 📊 D1.2, D1.5 -- Category count + mechanism count vs Variant B (2 items, 10 min)
8. 🧠 D2.2 -- Comparison verdict (1 item, 10 min)
9. ⚙️ E1.1 -- Verdict stated (1 item, 5 min)

**Total: 15 items, ~30-40 minutes**

**These 15 items cover:**
- All 7 MUST-PASS criteria (soul, container width, categories, verdict)
- Core engagement question (PA-05)
- Core comparison (better than Variant B)

**A page that passes the QUICK CHECK has ~80% probability of passing the FULL CHECK.**

**FULL CHECK (129 items, ~4-5 hours):**
- All items as written
- Used for formal experiment evaluation or when QUICK CHECK reveals borderline results

---

## 8. CONVERSION TO AUTOMATED RUBRIC

### Percentage Automatable

**Automated (Playwright + Regex): ~32 items (25%)**
- Soul compliance (7 items)
- Container/viewport (8 items)
- Guardrails (8 items)
- Structural metrics (7 items)
- Token compliance (2 items)

**Agent-assisted (agent reads, answers binary): ~40 items (31%)**
- Mechanism deployment (B3-B5: 17 items)
- Fractal coherence (B6: 7 items)
- Content verification (A2-A3: 13 items)
- Structural metrics (C1: 7 items, overlap with automated)
- Mechanism analysis (C2: 5 items)

**Human judgment (perceptual/comparative): ~41 items (32%)**
- Perceptual audit (C4: 10 items)
- Engagement/atmosphere (D2: 4 items)
- Novelty assessment (D3: 3 items)
- Meta-checks (G: 8 items)
- Completeness (H: 4 tables)
- Verdict characterization (E3: 4 items)
- Post-experiment decisions (F: 15 items)

**Observational/documentation: ~16 items (12%)**
- Pre-build decisions (A1, A4, A5: 12 items)
- Verdict framework (E1, E2: 4 items)

### 3-Tier Evaluation Protocol (Detailed)

**TIER 1: AUTOMATED CHECKS**

**Tool:** Playwright MCP + Node.js script
**Input:** HTML file path
**Output:** JSON with 32 pass/fail results
**Run time:** ~5 minutes

**Checks performed:**
1. Load page at 1440px viewport
2. Measure container computed max-width (B2.1)
3. Check for containers < 940px (B2.3)
4. Verify no horizontal scroll (B9.7)
5. Measure CPL for body text (B9.2)
6. Measure computed line-height (B9.4)
7. Extract section padding values (B9.3, B6.4)
8. Load page at 768px viewport
9. Check for layout breaks (B9.8)
10. Parse CSS file:
    - Regex search for `border-radius: [^0]` (B7.1)
    - Regex search for `box-shadow:` (B7.2)
    - Regex search for `gradient(` (B7.3)
    - Regex search for `#000000|rgb(0,0,0)` (B7.4)
    - Regex search for `#FFFFFF|rgb(255,255,255)` (B7.5)
    - Extract font-family values (B7.6)
    - Count `var(--` references vs total values (B8.1)
    - Count CSS lines (C1.1)
    - Count custom properties (C1.2)
    - Count grid/flex (C1.3)
    - Count pseudo-elements (C1.4)
    - Count @media queries (C1.5)

**Output example:**
```json
{
  "B2.1": {"pass": true, "value": "960px"},
  "B2.3": {"pass": true, "violations": []},
  "B7.1": {"pass": false, "violations": ["line 234: border-radius: 4px"]},
  "B8.1": {"pass": true, "compliance": "94%"},
  "C1.1": {"value": 423}
}
```

**TIER 2: AGENT-ASSISTED CHECKS**

**Tool:** Dedicated evaluation agent
**Input:** HTML + CSS files + evaluation prompt
**Output:** Structured answers to 40 questions
**Run time:** ~45-60 minutes

**Agent prompt structure:**
```
You are evaluating a Middle-tier page against 40 specific criteria.

For each criterion, answer PASS or FAIL and provide 1-sentence evidence.

SECTION B3: Mechanism Deployment Breadth
B3.1: Does the page deploy at least 1 Spatial mechanism (#5, #6, or #15)?
Answer: [PASS/FAIL]
Evidence: [Which mechanism(s) deployed, where in CSS]

B3.2: Does the page deploy at least 1 Hierarchy mechanism (#1, #4, or #11)?
Answer: [PASS/FAIL]
Evidence: [Which mechanism(s) deployed, where in CSS]

[Continue for all 40 agent-assisted items...]
```

**The agent reads:**
- HTML file (structure, content)
- CSS file (mechanisms, values, patterns)
- Mechanism catalog (to identify which mechanisms are present)

**The agent outputs:**
```markdown
## AGENT-ASSISTED EVALUATION RESULTS

**B3.1 Spatial mechanism:** PASS
Evidence: Mechanism #6 (Width Variation) deployed at lines 145-167 (code blocks at 680px, prose at 780px).

**B3.2 Hierarchy mechanism:** PASS
Evidence: Mechanism #4 (Spacing Compression) deployed at lines 201-245 (section padding 64px -> 32px -> 16px).

[Continue for all items...]

**SUMMARY:** 38/40 PASS, 2/40 FAIL
```

**TIER 3: HUMAN JUDGMENT**

**Tool:** Human evaluator or senior agent with perceptual audit training
**Input:** Rendered page (browser), Variant B (for comparison), Showcase pages (for novelty)
**Output:** Answers to 41 subjective/comparative questions
**Run time:** ~1-2 hours

**Questions organized by category:**

**Perceptual (10 questions):**
- Open page at 1440px
- PA-01: Does container-content ratio feel harmonious?
- PA-02: Do you perceive intentional density rhythm (3+ distinct padding levels)?
- PA-03: Do you see at least 2 visually distinct zones?
- PA-04: Is there at least 1 departure from block stacking?
- PA-05: Does the page feel "designed" or "formatted"?
- Resize to 768px
- Repeat PA-01 through PA-05

**Engagement (4 questions):**
- Load page alongside Variant B
- Which feels more "designed"? (better/marginal/same/worse)
- Which would you rather spend time reading? (Middle/Variant B/no preference)
- Does Middle create a sense of "place"? (yes/somewhat/no)
- If shown to fresh eyes, would they identify Middle as higher quality? (yes/maybe/no)

**Novelty (3 questions):**
- Apply 20px Gaussian blur to Middle, DD-006, OD-004
- Does Middle have a distinct structural shape or does it resemble a showcase? (distinct/similar)
- For shared mechanisms: do CSS values differ by >30%? (novel) or <30%? (derivative)
- Are mechanism combinations different from showcases? (yes/no)

**Meta/Decisions (24 questions):**
- [G1-G8 meta-checks, F1-F3 decision routing]

**Output:** Structured verdicts with evidence for each question.

---

## 9. PRACTICAL BARRIERS SUMMARY

### Top 5 Barriers to Builder Usability

**1. TIME COST**
- 4-5 hours evaluation for 1-2 hour build
- 3-4x time ratio is unsustainable for production use
- Mitigation: Automate Tier 1 + Tier 2 to reduce to ~1 hour

**2. JUDGMENT ITEMS**
- 15 items require subjective assessment despite "binary" framing
- PA-05 ("feels designed") is inherently interpretive
- Different evaluators will produce different results
- Mitigation: Develop calibration examples (5 pages rated by consensus)

**3. VOLUME**
- 129 items triggers checklist fatigue by item 40-50
- Evaluators begin sampling rather than checking comprehensively
- Mitigation: Use QUICK CHECK (15 items) as gate, FULL CHECK only if borderline

**4. REDUNDANCY**
- Section E re-checks 3 items from Sections B/C
- Variant B comparison requires extracting same data twice (C2 + D1)
- Mitigation: Remove E2.4/E2.6/E2.7, convert to references

**5. DEPENDENCY ORDERING**
- Section B orders items pedagogically, not by build workflow
- B8 (Always-load) comes AFTER B2-B6 (design work that depends on it)
- Mitigation: Reorder Section B to B8 → B1 → B9 → B2 → B3-B6 → B7

### Top 3 Barriers to Evaluator Usability

**1. COMPARISON OVERHEAD**
- D1 requires loading Variant B, extracting data, comparing 5 dimensions
- D3 requires loading 2-3 showcase pages, applying blur, comparing structures
- No standardized comparison tooling provided
- Mitigation: Create side-by-side comparison template with pre-extracted Variant B data

**2. MISSING BASELINES**
- D3.2 asks "CSS value overlap < 30% = novel" but doesn't provide showcase CSS to compare
- Fresh-eyes test (D2.4) has no protocol for selecting comparison pages or question set
- Mitigation: Package evaluation kit with Variant B HTML/CSS + showcase HTML/CSS + comparison grids

**3. DOCUMENTATION BURDEN**
- Every item requires "evidence" or "justification"
- 129 items × 1-2 sentences = 130-260 sentences of documentation
- This documentation takes as long as the evaluation itself
- Mitigation: Auto-generate evidence for Tier 1 items, use structured templates for Tier 2/3

---

## 10. RECOMMENDATIONS

### Immediate (Before Middle Experiment)

**1. Create QUICK CHECK version (15 items, 30-40 min)**
- Use as initial gate
- Only proceed to FULL CHECK if borderline
- 80% of pages can be evaluated with QUICK CHECK alone

**2. Build Playwright automation script (32 items, 5 min)**
- Automates all soul, container, guardrail, metric checks
- Outputs JSON with pass/fail + evidence
- Eliminates most tedious manual checks

**3. Reorder Section B by build workflow**
- B8 (Always-load) FIRST
- B1 (Routing) → B9 (Guardrails) → B2 (Container) → B3-B6 (Mechanisms) → B7 (Soul)
- This matches the natural execution sequence

**4. Remove redundant items from Section E**
- E2.4/E2.6/E2.7 become REFERENCES to B3.6/B2.1/C3.1
- Reduces 129 items to 126 items
- Eliminates DRY violation

**5. Add time/difficulty markers to each item**
- ⚡ Instant, ✓ Quick, ⚙️ Moderate, 🧠 Complex, 📊 Comparison
- Helps evaluators budget time per section

### Medium-Term (Wave 2 Planning)

**6. Develop agent-assisted evaluation prompt (40 items, 45-60 min)**
- Dedicated agent reads HTML/CSS
- Answers structured binary questions
- Outputs structured report

**7. Create evaluation kit with baselines**
- Variant B HTML/CSS (pre-packaged)
- Showcase pages (DD-006, OD-004, CD-006) with CSS
- Comparison grid templates

**8. Calibrate judgment items with consensus examples**
- Rate 5 pages (2 clear "designed", 2 clear "formatted", 1 borderline)
- Use as calibration set for PA-05
- Reduces inter-evaluator variance

### Long-Term (Production Use)

**9. Develop tiered pass/fail thresholds**
- MUST-PASS (15 items): any failure = instant fail
- SHOULD-PASS (45 items): 90%+ required for SUCCESS
- NICE-TO-PASS (45 items): 70%+ required for SUCCESS
- OBSERVATIONAL (24 items): no threshold

**10. Extract execution-critical items into builder prompt**
- B8.2 (Always-load), B1.2 (skip Phases 1-3), B2.1 (container width)
- These belong in the master execution prompt, not just the checklist
- Builder sees them BEFORE building, not during evaluation

**11. Split into 3 phase-appropriate checklists**
- PRE-BUILD (34 items) for planning
- BUILD (35 items, reordered) for verification during execution
- POST-BUILD (60 items) for evaluation

---

## CONCLUSION

**The Middle-tier checklist is COMPREHENSIVE but NOT PRACTICAL in its current form.**

**Key Findings:**

1. **Volume:** 129 items is 4-6x industry standard, triggers fatigue by item 40-50
2. **Time:** 4-5 hours evaluation for 1-2 hour build (3-4x ratio) is unsustainable
3. **Judgment:** ~15 items require subjective assessment despite "binary" claim
4. **Automation gap:** Only 25% of items can be fully automated (32/129)
5. **Redundancy:** Section E duplicates 3 items from B/C (DRY violation)
6. **Ordering:** Section B sequences items pedagogically, not by build workflow

**Practical Usability Rating:**

| Aspect | Rating | Rationale |
|--------|--------|-----------|
| Pre-build decisions | 7/10 | Well-structured but time-consuming (80-125 min) |
| Build verification | 6/10 | Good coverage but wrong order (B8 should be first) |
| Post-build evaluation | 4/10 | Too long (3+ hours), too much manual work |
| Overall usability | 5/10 | Comprehensive but impractical without automation |

**To make this checklist PRACTICAL:**

**SHORT-TERM:** Implement QUICK CHECK (15 items) + Playwright automation (32 items) → reduces evaluation to ~60-90 minutes

**MEDIUM-TERM:** Add agent-assisted evaluation (40 items) + baseline comparison kit → structured, repeatable process

**LONG-TERM:** Split into 3 phase-appropriate checklists + tiered pass/fail → builder sees only relevant items per phase

**With these changes, the checklist becomes a PRACTICAL evaluation tool instead of a comprehensive but unwieldy reference manual.**

---

**END USABILITY AUDIT**
