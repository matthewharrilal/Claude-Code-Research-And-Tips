# Phase D Evaluation Methodology
## Designing Fair and Rigorous Validation of Component Library Sufficiency

**Date:** 2026-02-14
**Author:** evaluation-methodology-designer (agent)
**Purpose:** Define HOW Phase D test pages get evaluated with rigor and fairness

**Context:** Phase D builds 2 test pages (Track 1 + Track 2) to prove compositional-core/ sufficiency BEFORE migration playbook. Evaluation methodology must distinguish genuine success from template-matching, measure quality objectively where possible, and acknowledge subjective judgment where necessary.

---

## EXECUTIVE SUMMARY

**Evaluation approach:**
- **70% programmatic / 30% visual** split for objective measurement
- **Blind evaluation for visual quality**, informed check for library integration
- **3 judges** (2 blind visual + 1 informed integration auditor)
- **Rubric:** PA-01 to PA-48 + 12 Phase D-specific criteria
- **Baseline:** Absolute criteria (guardrails) + comparative reference (DD-006, OD-004, CD-006)
- **Time measurement:** DIAGNOSTIC, not pass/fail criterion
- **Documentation:** Screenshots + PA breakdown + agent process log + gap catalog

**Key principle:** "The methodology should catch FAKE SUCCESS (template-matching, guardrail violations) while allowing GENUINE SUCCESS (creative composition meeting floors)."

---

## 1. PROGRAMMATIC vs VISUAL SPLIT

**OBJECTIVE:** Maximize automated verification, minimize subjective judgment surface.

### Programmatic Checks (100% Objective, Binary Pass/Fail)

**What can be verified via DOM inspection + computed styles:**

#### Soul Compliance (8 checks)
1. **border-radius: 0** on ALL elements (no exceptions)
2. **box-shadow: none** on ALL elements (no exceptions)
3. **filter: drop-shadow()** ABSENT (no shadow effects)
4. **opacity: 1** on all container/background elements (no semi-transparent tricks)
5. **background: linear-gradient()** ABSENT (no gradient backgrounds)
6. **No pure #000 or #FFF** (text must be #1A1A1A, bg must be #FEF9F5)
7. **Font families correct:**
   - H1-H2 = 'Instrument Serif'
   - Body = 'Inter'
   - Code = 'JetBrains Mono'
8. **No 2px borders** anywhere (epidemic value prohibited)

**Measurement:** DOM scan → computed styles → binary PASS/FAIL per element.

**Pass threshold:** 100% compliance. Zero violations.

---

#### Guardrail Compliance (8 checks)

**G1: Content-to-viewport ratio ≥ 65%**
- **Measurement:** `querySelector('.page-container').offsetWidth / 1440px >= 0.65`
- **Target:** 940px minimum at 1440px viewport
- **Pass:** Container width ≥ 940px

**G2: Horizontal padding floor ≥ 32px**
- **Measurement:** `getComputedStyle(container).paddingLeft >= 32px`
- **Target:** 32px minimum per side
- **Pass:** padding-left AND padding-right ≥ 32px

**G3: Label-to-heading gap ≥ 16px**
- **Measurement:** `getComputedStyle(heading).marginTop >= 16px` (when label precedes)
- **Target:** 16px minimum separation
- **Pass:** All heading margins (when label exists) ≥ 16px

**G4: Compression ratio ≥ 40%**
- **Measurement:** `Math.min(...zonePaddings) / Math.max(...zonePaddings) >= 0.40`
- **Target:** Deepest zone padding ≥ 40% of shallowest
- **Pass:** Ratio ≥ 0.40

**G5: Characters per line 45-80**
- **Measurement:** `textContainer.offsetWidth / avgCharWidth` (approximation)
- **Target:** 45-80 CPL (65ch ideal)
- **Pass:** Max-width on text containers ~65ch

**G6: Body line-height ≥ 1.5**
- **Measurement:** `getComputedStyle(bodyText).lineHeight >= 1.5`
- **Target:** 1.5 minimum (WCAG)
- **Pass:** All body paragraphs line-height ≥ 1.5

**G7: Section breathing ≥ 48px**
- **Measurement:** `getComputedStyle(section).marginBottom >= 48px`
- **Target:** 48px minimum between sections
- **Pass:** All section gaps ≥ 48px

**G8: Border-radius always zero**
- **Duplicate of Soul #1** (included in both for emphasis)
- **Pass:** 100% compliance

**Pass threshold:** 8/8 guardrails met. No exceptions.

---

#### Token Compliance (3 checks)

**T1: All color values from tokens.css**
- **Measurement:** Extract all `color`, `background-color`, `border-color` values → match against token palette
- **Allowed values:** 8 colors from tokens.css (#E83025, #FEF9F5, #1A1A1A, etc.)
- **Pass:** Zero off-palette colors (except code syntax highlighting)

**T2: All spacing values from scale**
- **Measurement:** Extract all `padding`, `margin`, `gap` values → match against 4px base scale
- **Allowed values:** Multiples of 4px (8, 16, 24, 32, 48, 64, 80, 96)
- **Pass:** 95%+ adherence (allow 1-2 edge cases)

**T3: Font families from trinity**
- **Already covered in Soul #7**
- **Pass:** 100% compliance

**Pass threshold:** 3/3 token checks met.

---

### Visual Checks (Require Rendering + Human Judgment)

**What CANNOT be verified programmatically:**

#### Tier 1: Mandatory Five (PA-01 to PA-05)
- **PA-01:** What's the first thing that bothers you?
- **PA-02:** Is any text uncomfortable to read?
- **PA-03:** Does this feel like one designer made it?
- **PA-04:** Where does your eye go first? Is that correct?
- **PA-05:** Would you ship this?

**Evaluation:** Blind auditor (no knowledge of Track/library usage).

**Judgment:** Subjective but binary (PASS/FAIL per question).

---

#### Tier 2: Standard Fifteen (PA-06 to PA-20 selected)
- **Readability:** PA-06 (word stacking), PA-07 (paragraph tracking), PA-08 (squinting)
- **Spatial:** PA-09 (dead space), PA-10 (squint test balance), PA-11 (margin psychology)
- **Flow:** PA-12 (section transitions), PA-13 (visual ending)
- **Grid:** PA-14 (column breathing), PA-15 (alignment scatter)
- **Consistency:** PA-16 (identical elements), PA-17 (visual rhythm)
- **Color:** PA-18 (gray family), PA-19 (intruders), PA-20 (personality)

**Evaluation:** Blind auditor at 1440px AND 768px.

**Judgment:** Subjective, binary PASS/FAIL per question.

---

#### Tier 3: Metaphor Quality (PA-42 to PA-44, Track 2 only)
- **PA-42:** Metaphor-driven compromise (concept vs comfort)?
- **PA-43:** Metaphor perceptual cost (lighter expression possible)?
- **PA-44:** Implicit vs explicit metaphor (structural or textual)?

**Evaluation:** Informed auditor (knows metaphor, can assess structural fidelity).

**Judgment:** Subjective, quality scale (IMPLICIT > BORDERLINE > EXPLICIT).

---

### Recommended Split: 70% Programmatic / 30% Visual

**Rationale:**
- Programmatic checks catch 100% of soul violations and guardrail failures
- Visual checks catch gestalt issues programmatic can't measure (e.g., "feels like three designers")
- 70/30 maximizes objectivity while preserving perceptual quality gate

**Implementation:**
1. **Programmatic audit runs FIRST** (automated script)
   - If soul violations OR guardrail failures → INSTANT FAIL (no visual audit needed)
   - If programmatic PASS → proceed to visual audit

2. **Visual audit runs SECOND** (human auditors)
   - Blind judges evaluate PA-01 to PA-20
   - Informed judge evaluates library integration + metaphor quality

**Pass threshold:**
- Programmatic: 100% (19/19 soul + guardrails + tokens)
- Visual: 90% (18/20 PA questions, with PA-05 "would ship" MANDATORY YES)

---

## 2. BLIND vs INFORMED EVALUATION

**OBJECTIVE:** Prevent confirmation bias while enabling integration quality check.

### Evaluation Design: Hybrid (Blind Visual + Informed Integration)

**Blind Visual Evaluation (2 judges):**

**Judges:** 2 independent auditors, NO knowledge of:
- Which track (Track 1 vs Track 2)
- Whether library was used
- What metaphor was intended (Track 2)
- What the builder agent read during construction

**Judges ONLY receive:**
- Screenshots at 1440px and 768px
- PA-01 to PA-20 questions
- Zero context

**Purpose:** Pure perceptual quality judgment, unbiased by process knowledge.

**Why 2 judges?** Agreement = confidence, disagreement = flag for resolution.

---

**Informed Integration Check (1 judge):**

**Judge:** Single auditor WITH knowledge of:
- Which track (Track 1 or Track 2)
- Which library CSS files were loaded
- What metaphor was derived (Track 2)
- Agent process log (what was read, in what order)

**Judge receives:**
- Full HTML + CSS source
- Library component inventory
- Agent workflow log
- Metaphor derivation (Track 2)

**Purpose:** Verify library utilization, integration quality, divergence from templates.

**Evaluation criteria:**
- Did Track 1 use library components correctly?
- Did Track 2 apply mechanisms (not copy implementations)?
- Are CSS custom properties used for zone contexts?
- Zero template-matching (case studies NOT copied)?

---

### Why Hybrid, Not Pure Blind?

**Pro blind:**
- ✅ Prevents "I know library was used → must be good" bias
- ✅ Forces quality to stand on visual merit alone

**Con blind:**
- ❌ Can't assess library integration quality (critical for Phase D goal)
- ❌ Can't verify divergence from templates (anti-gravity mechanism)
- ❌ Can't check mechanism extraction vs recipe-following

**Pro informed:**
- ✅ Can verify library components were used (not re-implemented from scratch)
- ✅ Can check Track 2 applied mechanisms to NEW metaphor (not copied)
- ✅ Can assess custom property bridging (Tier 2 → Tier 3)

**Con informed:**
- ❌ Risk of "library = good" confirmation bias

**Hybrid solution:**
- **Blind judges** evaluate visual quality (bias-free)
- **Informed judge** evaluates library integration (process verification)
- **Both required for PASS** (visual quality AND library utilization must succeed)

**Conflict resolution:**
- If blind judges FAIL visual → FAIL overall (quality not negotiable)
- If blind judges PASS but informed judge finds template-matching → FAIL overall (anti-gravity violation)
- If blind judges PASS and informed judge confirms library usage → PASS

---

## 3. MULTIPLE JUDGES

**OBJECTIVE:** Minimize individual bias, establish inter-rater reliability.

### Recommended: 3 Judges (2 Blind + 1 Informed)

**Judge allocation:**

| Judge | Type | Scope | Questions |
|-------|------|-------|-----------|
| **Judge A** | Blind visual | Full PA-01 to PA-20 | Perceptual quality at 1440px + 768px |
| **Judge B** | Blind visual | Full PA-01 to PA-20 | Perceptual quality at 1440px + 768px |
| **Judge C** | Informed integration | Library + metaphor | Integration quality + divergence check |

**Total judges: 3** (2 is minimal, 3 is standard, 5+ excessive for 2 pages)

---

### Why 2 Blind Visual Judges?

**Agreement = Confidence:**
- If Judge A and Judge B both PASS → high confidence in visual quality
- If both FAIL → high confidence in quality issue

**Disagreement = Flag:**
- If Judge A PASS, Judge B FAIL → investigate specific PA questions
- Review disagreement items → third-party resolution OR document as edge case

**Why not 3 blind?**
- Diminishing returns (2 → 3 adds <10% confidence)
- Phase D is validation, not research (2 sufficient)

---

### Why 1 Informed Judge (Not 2)?

**Integration check is BINARY:**
- Did library components get used? YES/NO
- Are custom properties bridging correctly? YES/NO
- Was template copied? YES/NO

**Less subjective than visual judgment** → single informed judge sufficient.

---

### Judge Backgrounds: Should They Differ?

**Recommendation: YES — Complementary expertise.**

**Judge A (Blind visual):**
- **Background:** Extraction-aware (read compositional-core/, knows mechanisms)
- **Advantage:** Can recognize KortAI patterns without being told
- **Risk:** Might see library patterns and infer process (reduces blindness)

**Judge B (Blind visual):**
- **Background:** Fresh-eyes (NOT extraction-aware, minimal KortAI context)
- **Advantage:** True blind evaluation, catches issues extraction-aware judge might miss
- **Risk:** Might flag intentional KortAI patterns as violations (e.g., sharp edges)

**Judge C (Informed integration):**
- **Background:** Extraction-aware + library architect (built compositional-core/)
- **Advantage:** Knows library deeply, can verify mechanism application
- **Risk:** Confirmation bias (library = good)

**Mitigation for Judge C bias:**
- Explicit rubric: "Did agent apply mechanisms or copy recipes?"
- Divergence table MANDATORY if Track 2 metaphor matches library
- Zero tolerance for template-matching (instant FAIL)

---

### Disagreement Resolution Protocol

**Scenario 1: Blind judges disagree (Judge A PASS, Judge B FAIL)**

**Resolution:**
1. Identify specific PA questions where disagreement exists
2. Third-party review (lead agent or human) evaluates those questions
3. Document disagreement in evaluation report (transparent)
4. If critical questions (PA-01 to PA-05) → FAIL overall
5. If non-critical questions (PA-06+) → PASS with reservations

**Scenario 2: Blind PASS, informed FAIL (visual quality good, integration bad)**

**Resolution:**
- Informed judge documents integration failure (template-matching, library not used, etc.)
- **FAIL overall** → library integration is Phase D success criterion

**Scenario 3: Blind FAIL, informed PASS (visual quality bad, integration good)**

**Resolution:**
- **FAIL overall** → visual quality non-negotiable (would-ship test)
- Document integration success for future reference

---

## 4. RUBRIC DESIGN

**OBJECTIVE:** Comprehensive evaluation covering visual quality + Phase D-specific integration.

### Existing PA Questions (48 total)

**Already defined in perceptual-auditing skill:**
- **Tier 1:** PA-01 to PA-05 (mandatory five)
- **Tier 2:** PA-06 to PA-28 (standard fifteen)
- **Tier 3:** PA-29 to PA-48 (metaphor-awareness, responsiveness, deep dive)

**Coverage:**
- Visual quality: PA-01 to PA-20
- Metaphor quality: PA-42 to PA-44
- Responsive quality: PA-21 to PA-23, PA-46
- Cross-page: PA-24 to PA-25
- Adversarial: PA-26 to PA-28, PA-48

**What's MISSING for Phase D specifically:**

---

### Phase D-Specific Rubric Items (12 new criteria)

**PD-01: Library Component Utilization (Track 1)**
- **Question:** Are ALL components from compositional-core/components.css, or did agent re-implement from scratch?
- **Pass:** 100% library usage (no custom callout/code/table CSS)
- **Fail:** ANY component re-implemented outside library
- **Judge:** Informed integration (source code review)

**PD-02: Library Component Utilization (Track 2)**
- **Question:** Did agent use library components for Tier 2 elements (callouts, code blocks), wrapping them in Tier 3 zones?
- **Pass:** Tier 2 from library, Tier 3 custom (zone wrappers, metaphor containers)
- **Fail:** Tier 2 components re-implemented OR Tier 3 zones copied from case studies
- **Judge:** Informed integration (source code review)

---

**PD-03: Token Compliance (All Values from tokens.css)**
- **Question:** Are ALL color/spacing/font values from tokens.css (no hard-coded values)?
- **Pass:** 100% token usage (var(--color-primary), var(--space-8), etc.)
- **Fail:** Hard-coded values (e.g., `padding: 20px` instead of `var(--space-5)`)
- **Judge:** Programmatic (CSS scan)

**PD-04: Custom Property Bridging (Tier 2 → Tier 3)**
- **Question:** Do Tier 3 zone contexts override Tier 2 component properties via custom properties?
- **Pass:** `.zone--compressed .callout { --callout-padding: 16px 24px; }` pattern used
- **Fail:** Tier 3 overrides via direct CSS (`.zone--compressed .callout { padding: 16px 24px; }`)
- **Judge:** Informed integration (source code review)

---

**PD-05: Mechanism Application (Track 2)**
- **Question:** Did agent extract MECHANISMS (border-weight gradient, 2-zone DNA) and apply to NEW metaphor?
- **Pass:** Mechanisms used with DIFFERENT vocabulary (e.g., .botanical-stage NOT .stratum)
- **Fail:** Mechanisms copied with SAME vocabulary (e.g., .stratum used in non-geological metaphor)
- **Judge:** Informed integration (metaphor divergence check)

**PD-06: Divergence from Case Studies (Track 2)**
- **Question:** If metaphor matches library case study, is 5-dimension divergence table complete with 3+ differences?
- **Pass:** Divergence table complete, 3+ dimensions differ OR metaphor doesn't match library
- **Fail:** Metaphor matches library, divergence table incomplete OR <3 dimensions differ
- **Judge:** Informed integration (divergence table review)

---

**PD-07: Phase Compliance (Track 2)**
- **Question:** Did agent follow phase-gated protocol (case-studies/ prohibited until Phase 5)?
- **Pass:** Agent workflow log shows case-studies/ access ONLY at Phase 5+
- **Fail:** Agent read case-studies/ during Phases 0-3
- **Judge:** Informed integration (workflow log review)

**PD-08: Metaphor Structural Isomorphism (Track 2)**
- **Question:** Does metaphor map to content structure with ≥4 isomorphisms?
- **Pass:** 4+ mappings between content properties and metaphor properties
- **Fail:** <4 mappings OR mappings are superficial (label-only, not structural)
- **Judge:** Informed integration (metaphor derivation review)

---

**PD-09: Guardrail Enforcement (All Guardrails Met)**
- **Question:** Do all 8 guardrails pass programmatic checks?
- **Pass:** G1 through G8 = 8/8 PASS
- **Fail:** ANY guardrail fails
- **Judge:** Programmatic (automated script)

**PD-10: Soul Compliance (Zero Violations)**
- **Question:** Are all 8 soul constraints verified?
- **Pass:** border-radius: 0, box-shadow: none, correct palette, fonts, no gradients, no 2px
- **Fail:** ANY soul violation
- **Judge:** Programmatic (automated script)

---

**PD-11: Perceptual Risk (Track 2)**
- **Question:** Did pipeline Phase 3.5F flag ≤2 perceptual risks?
- **Pass:** 0-2 risks flagged during metaphor derivation
- **Fail:** 3+ risks flagged
- **Judge:** Informed integration (pipeline output review)

**PD-12: Would-Ship Verdict (Final Quality Gate)**
- **Question:** Would blind visual judges ship this page as-is?
- **Pass:** Both blind judges answer PA-05 "YES" (or "YES with minor polish")
- **Fail:** Either blind judge answers PA-05 "NO"
- **Judge:** Blind visual (both judges)

---

### Complete Rubric: 60 Total Criteria

| Category | Criteria Count | Source | Judge Type |
|----------|----------------|--------|------------|
| **Soul compliance** | 8 | Programmatic | Automated script |
| **Guardrail compliance** | 8 | Programmatic | Automated script |
| **Token compliance** | 3 | Programmatic | Automated script |
| **PA Tier 1 (mandatory)** | 5 | PA-01 to PA-05 | Blind visual (both) |
| **PA Tier 2 (standard)** | 15 | PA-06 to PA-20 | Blind visual (both) |
| **PA Tier 3 (metaphor)** | 3 | PA-42 to PA-44 | Informed integration |
| **Phase D-specific** | 12 | PD-01 to PD-12 | Mixed (6 informed, 2 programmatic, 1 blind) |
| **Responsive (optional)** | 6 | PA-21 to PA-23, PA-46 to PA-48 | Blind visual (768px) |

**Pass threshold:**
- **Programmatic (19 criteria):** 100% (19/19)
- **Visual Tier 1 (5 criteria):** 100% (5/5, PA-05 mandatory YES)
- **Visual Tier 2 (15 criteria):** 90% (14/15 minimum)
- **Phase D (12 criteria):** 100% (12/12, integration non-negotiable)
- **Overall:** 54/60 minimum (90% total, with all CRITICAL passing)

**Critical criteria (MUST PASS):**
- PD-09: Guardrail enforcement (8/8)
- PD-10: Soul compliance (8/8)
- PD-12: Would-ship verdict (YES from both blind judges)
- PD-01/02: Library utilization (100% for relevant track)

---

## 5. COMPARISON BASELINE

**OBJECTIVE:** Define what Phase D output gets compared against.

### Recommended: Hybrid Baseline (Absolute Criteria + Comparative Reference)

**Primary baseline: ABSOLUTE CRITERIA (Guardrails + Soul)**

**What:** Programmatic floors that MUST be met regardless of context.

**Why absolute:**
- Guardrails are quantitative, measurable, binary (940px or not)
- Soul constraints are identity-defining (border-radius: 0, no exceptions)
- Phase D proves library enforces these automatically

**Comparison method:**
- Programmatic scan → binary PASS/FAIL
- Zero tolerance for violations

**Justification:** These are non-negotiable minimums. No "good enough" exception.

---

**Secondary baseline: COMPARATIVE REFERENCE (Top 3 Explorations)**

**What:** Visual quality comparison against known-good explorations:
- **DD-006 (Fractal):** Density excellence, fractal rhythm, 20+ references
- **OD-004 (Confidence):** Organizational excellence, confidence encoding
- **CD-006 (Pilot):** Combination excellence, 39/40 audit score

**Why comparative:**
- Visual quality is gestalt (hard to define absolutely)
- "Would ship" is relative to existing quality bar
- Explorations set the quality standard

**Comparison method:**
- Blind judges view Phase D page + reference exploration side-by-side
- Answer: "Does this feel comparable in quality?"
- NOT "is this identical?" (different content, different metaphor)

**Justification:** Phase D pages should approach exploration-level quality (not necessarily equal, but competitive).

---

**Tertiary baseline: PROTOCOL EXAMPLE OUTPUT (Appendix)**

**What:** Example Track 1 and Track 2 outputs in `09-EXTRACTION-VALIDATION-PROTOCOL.md` Appendix.

**Why example:**
- Shows concrete implementation of library components
- Demonstrates guardrail compliance in practice
- Provides HTML structure reference

**Comparison method:**
- Informed judge checks: "Does Track 1 page follow example structure?"
- NOT "is HTML identical?" (different content)

**Justification:** Examples are GUIDANCE, not templates. Track 1 should follow pattern; Track 2 should diverge.

---

### What We DON'T Compare Against

**NOT against DD/OD/CD content directly:**
- **Pro:** Known quality, validated through audits
- **Con:** Different content, different tensions → unfair comparison
- **Decision:** Use as QUALITY REFERENCE (gestalt feel), NOT as template

**NOT against nothing (pure absolute criteria):**
- **Pro:** No bias, clear pass/fail
- **Con:** Visual quality needs reference point for "good enough"
- **Decision:** Use absolute criteria for guardrails, comparative for visual quality

**NOT against each other (if 4 variants built):**
- **Pro:** Controlled comparison
- **Con:** Confounds (all 4 could be bad, or all 4 could violate same guardrail)
- **Decision:** Phase D builds 2 pages only (1 Track 1, 1 Track 2), no variants

---

### Final Baseline Design

**Three-tier evaluation:**

**Tier 1: Absolute Programmatic (MUST PASS, 100%)**
- Soul compliance (8/8)
- Guardrail compliance (8/8)
- Token compliance (3/3)
- **Comparison:** Binary PASS/FAIL against specification

**Tier 2: Absolute Visual (MUST PASS, 5/5)**
- PA-01 to PA-05 (mandatory five)
- **Comparison:** Binary PASS/FAIL per question

**Tier 3: Comparative Visual (SHOULD PASS, 14/15)**
- PA-06 to PA-20 (standard fifteen)
- **Comparison:** Gestalt quality vs DD-006/OD-004/CD-006 (competitive feel)

**Tier 4: Integration (MUST PASS, 12/12)**
- PD-01 to PD-12 (Phase D-specific)
- **Comparison:** Binary PASS/FAIL against process expectations

**Overall PASS:** Tier 1 + Tier 2 + Tier 4 = 100%, Tier 3 ≥ 90%

---

## 6. TIME MEASUREMENT

**OBJECTIVE:** Determine if build time is diagnostic or criterion.

### Recommended: DIAGNOSTIC (Informative, Not Pass/Fail)

**Measurement approach:**
- Track timestamps for each phase (Phase 0 through Phase 7)
- Measure total wall-clock time (start → completion)
- Compare against targets (Track 1: 45-90 min, Track 2: 3-5 hours)

**NOT a pass/fail criterion:**
- If Track 1 takes 3 hours → PASS if quality met, but document WHY slow
- If Track 2 takes 12 hours → PASS if quality met, but flag library gap

**Why diagnostic, not criterion:**

**Pro diagnostic:**
- ✅ Slow build reveals library gaps (missing components = slower assembly)
- ✅ Fast build validates library sufficiency
- ✅ Time variance documents edge cases (what slows agents down)

**Con criterion:**
- ❌ Fast bad build passes (template-matching can be FASTER than creative composition)
- ❌ Slow good build fails (careful mechanism application takes longer)
- ❌ Agent variability (some agents read faster, some think longer)

**Correct use of time data:**

**IF Track 1 > 90 min:**
- **Investigate:** Which components missing? Which decisions took longest?
- **Action:** Add missing components to library OR document acceptable complexity

**IF Track 2 > 5 hours:**
- **Investigate:** Which phase took longest? Metaphor derivation? CSS implementation?
- **Action:** If derivation slow → acceptable (creative work). If CSS slow → library gap.

**IF Track 1 < 30 min:**
- **Investigate:** Template-matching? (too fast = suspicious)
- **Action:** Divergence check (did agent copy example HTML?)

**IF Track 2 < 2 hours:**
- **Investigate:** Case study copying? (too fast for genuine derivation)
- **Action:** Anti-gravity audit (phase compliance, divergence check)

---

### Time Measurement Protocol

**Tracked timestamps:**
1. **Start time** (agent invocation)
2. **Phase 0 complete** (vocabulary loaded)
3. **Phase 1-3 complete** (tension derivation done, Track 2 only)
4. **Phase 3.5 gate** (metaphor committed, Track 2 only)
5. **Phase 4 complete** (mechanisms extracted, Track 2 only)
6. **Phase 5 complete** (case studies consulted, Track 2 only)
7. **Phase 6 complete** (HTML + CSS implementation done)
8. **Phase 7 complete** (perceptual audit passed)
9. **End time** (final output written)

**Time deltas calculated:**
- **Metaphor derivation time** (Phase 1-3, Track 2)
- **Implementation time** (Phase 6)
- **Verification time** (Phase 7)
- **Total time** (start → end)

**Comparison targets:**

| Track | Phase | Target Time | Diagnostic Threshold |
|-------|-------|-------------|----------------------|
| Track 1 | Total | 45-90 min | <30 min = suspicious, >2 hrs = gap |
| Track 2 | Derivation (1-3) | 60-90 min | <30 min = template-matching risk |
| Track 2 | Implementation (6) | 90-150 min | >3 hrs = library gap |
| Track 2 | Total | 3-5 hours | <2 hrs = suspicious, >8 hrs = gap |

**Documentation in report:**
- Timestamp log (all 9 checkpoints)
- Delta table (time per phase)
- Diagnostic flags (too fast? too slow?)
- Gap hypothesis (if time anomalous)

---

## 7. DOCUMENTATION REQUIREMENTS

**OBJECTIVE:** Capture complete evaluation context for transparency and future reference.

### Mandatory Documentation (7 Artifacts)

**Artifact 1: Screenshots (1440px + 768px)**

**What:**
- Full-page screenshot at 1440px viewport
- Full-page screenshot at 768px viewport
- Scroll-through screenshots (5-15 per viewport, 80% overlap)

**Why:**
- Blind judges need visual context
- Responsive behavior verification
- Future reference (what did this look like?)

**Storage:**
- `ephemeral/phase-d-validation/screenshots/`
- Naming: `{track}-{page-name}-{viewport}px-{full|scroll-NN}.png`

**Mandatory:** YES (both viewports)

---

**Artifact 2: PA Score Breakdown (48 Questions)**

**What:**
- Full PA-01 to PA-48 answers from each blind judge
- Binary PASS/FAIL per question
- Optional: Free-text justification for FAIL answers

**Why:**
- Transparency (why did judges pass/fail?)
- Disagreement tracking (where did judges differ?)
- Pattern detection (which questions fail most often?)

**Storage:**
- `ephemeral/phase-d-validation/pa-scores/`
- Format: Markdown table with PASS/FAIL columns per judge

**Mandatory:** YES (summary at minimum, full breakdown preferred)

---

**Artifact 3: Agent Process Log (Workflow Audit Trail)**

**What:**
- Timestamped log of every file agent read
- Order of file access (did agent read case-studies/ early?)
- Phase completion timestamps (when did Phase 3.5 gate pass?)

**Why:**
- Phase compliance verification (anti-gravity audit)
- Gap detection (which files did agent need but didn't exist?)
- Workflow optimization (what slowed agent down?)

**Storage:**
- `ephemeral/phase-d-validation/process-logs/`
- Format: Chronological list with timestamps

**Example:**
```
2026-02-14 10:00:00 - START Track 2 build
2026-02-14 10:00:15 - READ compositional-core/identity/prohibitions.md
2026-02-14 10:01:30 - READ compositional-core/vocabulary/tokens.css
2026-02-14 10:02:00 - INVOKE tension-composition skill
2026-02-14 10:45:00 - Phase 3 complete (metaphor: botanical growth)
2026-02-14 10:46:00 - GATE Phase 3.5 (divergence check: PASS)
2026-02-14 10:50:00 - READ compositional-core/grammar/mechanism-catalog.md
2026-02-14 11:30:00 - Phase 6 complete (HTML + CSS written)
2026-02-14 12:00:00 - Phase 7 complete (PA audit: 47/48 PASS)
2026-02-14 12:05:00 - END (total: 2h 5min)
```

**Mandatory:** YES (critical for anti-gravity verification)

---

**Artifact 4: Gap Documentation (Missing Components, Broken Interfaces)**

**What:**
- Every library gap encountered during build
- Missing Tier 2 components (e.g., "no blockquote component")
- Broken custom property interfaces (e.g., "callout padding override didn't cascade")
- Insufficient Tier 2.5 patterns (e.g., "no CRESCENDO density guidance")

**Why:**
- Drives extraction remediation (what to add to library)
- Prioritizes Phase D fixes (critical vs nice-to-have)
- Informs Phase E playbook (document known gaps)

**Storage:**
- `ephemeral/phase-d-validation/gaps/`
- Format: Gap table with severity + remediation plan

**Example:**
```markdown
| Gap ID | Type | Description | Severity | Remediation |
|--------|------|-------------|----------|-------------|
| G-01 | Missing Tier 2 | No blockquote component | HIGH | Add tier-2-quote.css |
| G-02 | Custom property | Callout padding override didn't work | CRITICAL | Fix CSS variable cascade |
| G-03 | Tier 2.5 pattern | CRESCENDO density has no CSS | MEDIUM | Add tier-2.5-crescendo.css |
```

**Mandatory:** YES (core Phase D deliverable)

---

**Artifact 5: Programmatic Audit Report (Soul + Guardrails + Tokens)**

**What:**
- Automated script output with binary PASS/FAIL per check
- Element-level detail for violations (which element failed which check)
- Summary table (19/19 programmatic checks)

**Why:**
- Objective verification (no human judgment)
- Fast feedback (instant soul check)
- Detailed debugging (which element violated which rule)

**Storage:**
- `ephemeral/phase-d-validation/programmatic-audit.md`
- Format: Markdown table + violation details

**Example:**
```markdown
## Soul Compliance (8/8 PASS)
- border-radius: 0 → PASS (0 violations, 247 elements checked)
- box-shadow: none → PASS (0 violations, 247 elements checked)
- ...

## Guardrail Compliance (8/8 PASS)
- G1: Container width ≥ 940px → PASS (1024px measured)
- G2: Horizontal padding ≥ 32px → PASS (48px left, 48px right)
- ...

## Token Compliance (3/3 PASS)
- T1: All colors from palette → PASS (8/8 colors verified)
- T2: All spacing from scale → PASS (95% adherence, 2 edge cases)
- T3: Font families correct → PASS (100% compliance)
```

**Mandatory:** YES (must run before visual audit)

---

**Artifact 6: Divergence Table (Track 2 Only)**

**What:**
- 5-dimension comparison table between agent metaphor and library case studies
- Documented justification if convergence (3+ dimensions same)

**Dimensions:**
1. Metaphor domain (geological vs botanical vs manuscript)
2. Structural isomorphisms (bedrock→foundation vs seed→root)
3. Section architecture (6 strata vs 4 scales)
4. Vocabulary (geological terms vs plant terms)
5. Mechanisms used (border-weight vs spacing-compression)

**Why:**
- Anti-gravity verification (template-matching check)
- Creative independence proof
- Justification for convergence (if metaphor matches library)

**Storage:**
- `ephemeral/phase-d-validation/divergence-table.md`
- Format: Markdown table with SAME/DIFFERENT per dimension

**Example:**
```markdown
| Dimension | Library (OD-004 Confidence) | Agent Metaphor (Botanical Growth) | Same/Different |
|-----------|----------------------------|----------------------------------|----------------|
| Domain | Geological stratification | Botanical growth stages | DIFFERENT |
| Isomorphisms | Bedrock=foundation, strata=layers | Seed=origin, root=foundation | DIFFERENT |
| Architecture | 6 confidence strata | 4 growth stages | DIFFERENT |
| Vocabulary | Stratum, bedrock, depth | Seedling, root, stem, canopy | DIFFERENT |
| Mechanisms | Border-weight gradient | Spacing expansion (inverse compression) | DIFFERENT |
```

**Mandatory:** YES if Track 2 metaphor matches library (convergence case), NO if divergent

---

**Artifact 7: Final Evaluation Report (Executive Summary)**

**What:**
- Pass/fail verdict per rubric category
- Overall PASS/CONDITIONAL PASS/FAIL
- Top 3 strengths + top 3 gaps
- Recommended actions (if gaps found)

**Why:**
- Decision document (proceed to Phase E or fix gaps?)
- Executive summary for stakeholders
- Input to Phase E playbook

**Storage:**
- `ephemeral/phase-d-validation/FINAL-REPORT.md`
- Format: Structured markdown with verdict table

**Example structure:**
```markdown
# Phase D Validation Report — Final Verdict

## Overall Verdict: PASS

## Rubric Scores
| Category | Score | Pass? |
|----------|-------|-------|
| Programmatic (soul + guardrails + tokens) | 19/19 | ✅ PASS |
| Visual Tier 1 (PA-01 to PA-05) | 5/5 | ✅ PASS |
| Visual Tier 2 (PA-06 to PA-20) | 14/15 | ✅ PASS |
| Phase D Integration (PD-01 to PD-12) | 12/12 | ✅ PASS |
| **Total** | **50/51 (98%)** | ✅ PASS |

## Strengths
1. Library components integrated seamlessly (Track 1)
2. Metaphor divergence strong (5/5 dimensions different, Track 2)
3. Guardrails enforced automatically (8/8, zero violations)

## Gaps Found
1. Missing blockquote component (severity: MEDIUM)
2. CRESCENDO density pattern has no CSS (severity: MEDIUM)
3. PA-14 (column breathing) borderline at 768px (severity: LOW)

## Recommended Actions
1. Add `tier-2-quote.css` to library (1-2 hours)
2. Create `tier-2.5-crescendo.css` (2-3 hours)
3. Document 768px column breathing edge case in guidelines

## Next Steps
✅ Proceed to Phase E (Migration Playbook v2)
```

**Mandatory:** YES (decision document)

---

### Optional Documentation (3 Additional Artifacts)

**Optional 1: Comparative Quality Analysis**
- Side-by-side screenshots: Phase D page vs DD-006/OD-004/CD-006
- Gestalt comparison ("does this feel competitive in quality?")
- Storage: `ephemeral/phase-d-validation/quality-comparison.md`

**Optional 2: Metaphor Derivation Report (Track 2)**
- Tension axes identified (4+ axes)
- Richness scoring (≥8 target)
- Structural isomorphism mappings (4+ required)
- Storage: `ephemeral/phase-d-validation/metaphor-derivation.md`

**Optional 3: Time Breakdown Analysis**
- Phase-by-phase time deltas
- Comparison to targets
- Diagnostic flags (too fast? too slow?)
- Storage: `ephemeral/phase-d-validation/time-analysis.md`

---

### Documentation Checklist Template

```markdown
## Phase D Validation Documentation Checklist

### Mandatory (7 artifacts)
- [ ] Screenshots (1440px + 768px, full-page + scroll-through)
- [ ] PA Score Breakdown (48 questions, 2 blind judges)
- [ ] Agent Process Log (timestamped workflow)
- [ ] Gap Documentation (missing components, broken interfaces)
- [ ] Programmatic Audit Report (19 automated checks)
- [ ] Divergence Table (Track 2 only, if convergence)
- [ ] Final Evaluation Report (verdict + strengths + gaps + actions)

### Optional (3 artifacts)
- [ ] Comparative Quality Analysis (vs DD/OD/CD)
- [ ] Metaphor Derivation Report (Track 2 only)
- [ ] Time Breakdown Analysis (diagnostic)

### Verification
- [ ] All mandatory artifacts exist in `ephemeral/phase-d-validation/`
- [ ] Final report has clear PASS/CONDITIONAL PASS/FAIL verdict
- [ ] Gap remediation plan documented (if gaps found)
- [ ] Next steps identified (proceed to Phase E or rework)
```

---

## EVALUATION PROTOCOL STEP-BY-STEP

**Phase D evaluation workflow (what evaluators do):**

### Step 1: Programmatic Audit (Automated, 5 minutes)

**Who:** Automated script (no human)

**What:**
1. Run DOM scan on HTML output
2. Extract all computed styles
3. Verify soul compliance (8 checks)
4. Verify guardrail compliance (8 checks)
5. Verify token compliance (3 checks)
6. Generate programmatic audit report

**Output:** `programmatic-audit.md` with 19/19 binary results

**Decision gate:**
- If ANY programmatic check FAILS → INSTANT FAIL (no visual audit needed)
- If 19/19 PASS → Proceed to Step 2

---

### Step 2: Blind Visual Audit (2 Judges, 20-30 minutes each)

**Who:** Judge A + Judge B (blind, no process knowledge)

**What:**
1. View screenshots (1440px + 768px)
2. Answer PA-01 to PA-05 (Tier 1 mandatory)
3. Answer PA-06 to PA-20 (Tier 2 standard)
4. Record PASS/FAIL per question
5. Optional: Justify FAIL answers with free text

**Output (per judge):**
- `pa-scores-judge-a.md` (20 questions, PASS/FAIL per question)
- `pa-scores-judge-b.md` (20 questions, PASS/FAIL per question)

**Decision gate:**
- If EITHER judge fails PA-05 "would ship" → FAIL overall
- If judges disagree on 5+ questions → Flag for resolution
- If judges agree PASS (18/20+) → Proceed to Step 3

---

### Step 3: Informed Integration Audit (1 Judge, 30-45 minutes)

**Who:** Judge C (informed, knows track/library/metaphor)

**What:**
1. Review source HTML + CSS
2. Check library component usage (PD-01/02)
3. Verify token compliance (PD-03, cross-check with programmatic)
4. Check custom property bridging (PD-04)
5. Verify mechanism application (PD-05, Track 2)
6. Check divergence table (PD-06, Track 2 if convergence)
7. Verify phase compliance (PD-07, Track 2 workflow log)
8. Check metaphor isomorphism (PD-08, Track 2)
9. Review process log (timestamps, file access order)

**Output:**
- `integration-audit.md` (12 PD criteria, PASS/FAIL per criterion)
- `divergence-table.md` (Track 2 only, if applicable)

**Decision gate:**
- If ANY critical PD criterion fails (PD-01/02, PD-06, PD-07) → FAIL overall
- If 12/12 PASS → Proceed to Step 4

---

### Step 4: Gap Documentation (1 Scribe, 15 minutes)

**Who:** Scribe agent (reviews all audit outputs)

**What:**
1. Compile all FAIL items from programmatic + visual + integration audits
2. Categorize gaps (missing component, broken interface, insufficient pattern)
3. Assign severity (CRITICAL, HIGH, MEDIUM, LOW)
4. Propose remediation (add X to library, fix Y interface, document Z)

**Output:**
- `gaps/gap-catalog.md` (gap table with severity + remediation)

**Decision gate:**
- If CRITICAL gaps exist → Document in final report, likely CONDITIONAL PASS or FAIL
- If only MEDIUM/LOW gaps → Document in final report, likely PASS

---

### Step 5: Disagreement Resolution (Lead, 10-20 minutes if needed)

**Who:** Lead agent or human reviewer

**What:**
1. Identify where Judge A and Judge B disagree (PA questions)
2. Review screenshots at those specific questions
3. Make third-party judgment (PASS or FAIL)
4. Document disagreement + resolution in final report

**Output:**
- Updated PA scores with resolution notes

**Decision gate:**
- If critical questions (PA-01 to PA-05) resolved as FAIL → FAIL overall
- If non-critical questions resolved → Document as edge case

---

### Step 6: Final Report Synthesis (Lead, 15 minutes)

**Who:** Lead agent

**What:**
1. Compile all audit outputs
2. Calculate overall scores (19/19 programmatic, 5/5 Tier 1, 14/15 Tier 2, 12/12 PD)
3. Determine verdict (PASS / CONDITIONAL PASS / FAIL)
4. Identify top 3 strengths + top 3 gaps
5. Propose next steps (Phase E or remediation)

**Output:**
- `FINAL-REPORT.md` (executive summary, verdict, actions)

**Decision gate:**
- **PASS:** All critical checks met, proceed to Phase E
- **CONDITIONAL PASS:** Minor gaps, addressable during pilot, proceed with caution
- **FAIL:** Critical gaps, extraction rework required

---

### Total Evaluation Time Estimate

| Step | Time | Judge Count | Total Time |
|------|------|-------------|------------|
| Programmatic audit | 5 min | Automated | 5 min |
| Blind visual (parallel) | 25 min each | 2 judges | 25 min (parallel) |
| Informed integration | 40 min | 1 judge | 40 min |
| Gap documentation | 15 min | 1 scribe | 15 min |
| Disagreement resolution | 15 min (if needed) | 1 lead | 0-15 min |
| Final report | 15 min | 1 lead | 15 min |
| **Total** | — | — | **~1.5 hours** (2 hours with disagreement) |

**Per-page evaluation: 1.5-2 hours**
**Full Phase D (2 pages): 3-4 hours**

---

## SUMMARY COMPARISON TABLE

**Evaluation methodology at a glance:**

| Dimension | Decision | Rationale |
|-----------|----------|-----------|
| **Programmatic/Visual Split** | 70% programmatic / 30% visual | Maximize objectivity, minimize subjective surface |
| **Blind vs Informed** | Hybrid (2 blind + 1 informed) | Blind for quality, informed for integration |
| **Judge Count** | 3 judges (2+1) | Inter-rater reliability without excessive cost |
| **Judge Backgrounds** | Complementary (extraction-aware + fresh-eyes + architect) | Diverse perspectives catch different issues |
| **Rubric** | 60 total (19 programmatic + 20 visual + 9 metaphor + 12 Phase D) | Comprehensive coverage, PA + Phase D-specific |
| **Baseline** | Hybrid (absolute guardrails + comparative quality) | Floors non-negotiable, visual quality vs known-good |
| **Time Measurement** | Diagnostic (not pass/fail) | Informs gap detection, not quality criterion |
| **Documentation** | 7 mandatory artifacts | Transparency, gap tracking, decision support |
| **Evaluation Time** | 1.5-2 hrs per page | Thorough but efficient |

---

## KEY DECISION RATIONALES

### Why 70/30 Programmatic/Visual?

**Programmatic checks are:**
- Faster (5 min vs 25 min)
- Objective (no judge bias)
- Comprehensive (checks EVERY element, not sample)
- Automatable (run repeatedly, no human cost)

**Visual checks are:**
- Necessary for gestalt ("feels like one designer")
- Catch perceptual issues programmatic can't measure
- Required for would-ship verdict (PA-05)

**70/30 balances:** Maximum automation with essential human judgment.

---

### Why Blind + Informed, Not Pure Blind?

**Pure blind misses:**
- Library integration quality (can't verify component usage)
- Divergence from templates (can't check anti-gravity)
- Mechanism extraction (can't distinguish from recipe-following)

**Pure informed risks:**
- Confirmation bias ("library = good")
- Process knowledge contaminating visual judgment

**Hybrid solves:** Blind judges for quality (unbiased), informed judge for integration (verification).

---

### Why 3 Judges, Not 2 or 5?

**2 judges:**
- ❌ Disagreement = 50/50 tie (no resolution mechanism)
- ✅ Sufficient if agreement high

**3 judges (2 blind + 1 informed):**
- ✅ Blind disagreement = third-party resolution (lead agent)
- ✅ Informed judge separate role (integration, not visual)
- ✅ Cost-effective (3 judges @ 1.5 hrs = 4.5 hrs labor)

**5 judges:**
- ❌ Diminishing returns (3→5 adds <5% confidence)
- ❌ Excessive cost (5 judges @ 1.5 hrs = 7.5 hrs labor)

**3 is optimal:** Inter-rater reliability without excessive cost.

---

### Why Absolute + Comparative Baseline, Not One or Other?

**Absolute only:**
- ✅ Clear floors (940px, 32px padding, etc.)
- ❌ No visual quality reference ("good enough" undefined)

**Comparative only:**
- ✅ Quality bar from explorations
- ❌ Subjective (what does "comparable" mean?)

**Hybrid:**
- ✅ Absolute for guardrails (binary, measurable)
- ✅ Comparative for visual quality (gestalt vs known-good)
- ✅ Best of both (floors + reference)

---

### Why Diagnostic Time, Not Pass/Fail?

**Time as criterion:**
- ❌ Fast bad build passes (template-matching faster than creative composition)
- ❌ Slow good build fails (careful mechanism application takes longer)
- ❌ Agent variability (reading speed, thinking time)

**Time as diagnostic:**
- ✅ Reveals library gaps (slow build = missing components)
- ✅ Flags template-matching (too fast = suspicious)
- ✅ Informs playbook (what takes longest?)

**Diagnostic use:** Time informs gap detection, not quality judgment.

---

## FAILURE MODE ANALYSIS

**What could go wrong with this methodology?**

### Failure 1: Programmatic Audit Gives False Pass

**Scenario:** Agent uses library components but violates soul constraints in custom CSS.

**Example:** `.custom-zone { border-radius: 4px; }` passes library component checks but fails soul.

**Mitigation:**
- Programmatic audit scans ALL elements (library + custom)
- Soul checks run on FULL rendered DOM, not just library CSS
- Informed judge reviews ALL CSS (library + custom)

**Detection:** Programmatic audit Step 1 catches it.

---

### Failure 2: Blind Judges Disagree on Critical Questions

**Scenario:** Judge A says PA-05 "would ship" = YES, Judge B says NO.

**Example:** Judge A (extraction-aware) recognizes KortAI patterns, Judge B (fresh-eyes) sees sharp edges as harsh.

**Mitigation:**
- Disagreement resolution protocol (Step 5)
- Lead agent or human reviews specific question
- Document disagreement transparently

**Detection:** PA score comparison catches it.

---

### Failure 3: Informed Judge Has Confirmation Bias

**Scenario:** Judge C sees library was used → assumes quality is good → overlooks template-matching.

**Example:** Track 2 page copies DD-006 structure, informed judge passes because "library components work."

**Mitigation:**
- Explicit anti-template rubric (PD-05, PD-06)
- Divergence table MANDATORY if metaphor matches library
- Zero tolerance for template-matching (instant FAIL)

**Detection:** PD-06 divergence check catches it.

---

### Failure 4: Agent Reads Case Studies Early (Phase Violation)

**Scenario:** Track 2 agent reads case-studies/ during Phase 1 (prohibited), derives "independent" metaphor that matches library.

**Example:** Agent reads DD-006, derives "geological stratification" metaphor, claims independent convergence.

**Mitigation:**
- Workflow log MANDATORY (timestamps every file access)
- PD-07 checks phase compliance
- Early case-study access = instant FAIL (anti-gravity violation)

**Detection:** Process log review catches it.

---

### Failure 5: Time Diagnostic Misinterpreted

**Scenario:** Track 1 page takes 3 hours (slow), evaluators FAIL it based on time alone.

**Example:** Build was slow due to agent reading extra research (thorough), NOT library gap.

**Mitigation:**
- Time is DIAGNOSTIC, not criterion (documented in protocol)
- Final report must justify verdict with quality criteria, not time
- Slow build with quality PASSES (document WHY slow)

**Detection:** Final report review catches misinterpretation.

---

## FINAL RECOMMENDATIONS

**This evaluation methodology should be adopted with:**

1. **Programmatic audit runs FIRST** (5 min, instant FAIL if violations)
2. **Blind visual audit for quality** (2 judges, 25 min each, parallel)
3. **Informed integration audit for library usage** (1 judge, 40 min)
4. **Gap documentation for remediation** (scribe, 15 min)
5. **Final report with verdict** (lead, 15 min)

**Total time: 1.5-2 hours per page, 3-4 hours for full Phase D (2 pages)**

**Pass criteria:**
- Programmatic: 19/19 (100%, soul + guardrails + tokens)
- Visual Tier 1: 5/5 (100%, PA-01 to PA-05, PA-05 mandatory YES)
- Visual Tier 2: 14/15+ (90%, PA-06 to PA-20)
- Phase D Integration: 12/12 (100%, PD-01 to PD-12)

**Overall PASS threshold: 50/51 (98%), with all CRITICAL passing**

**Documentation: 7 mandatory artifacts** (screenshots, PA scores, process log, gaps, programmatic audit, divergence table, final report)

**This methodology balances:**
- Objectivity (programmatic checks) with gestalt judgment (visual quality)
- Blindness (unbiased quality) with knowledge (integration verification)
- Rigor (comprehensive rubric) with efficiency (1.5-2 hrs per page)
- Transparency (full documentation) with pragmatism (essential artifacts only)

---

**END EVALUATION METHODOLOGY DOCUMENT**
