# SCAN F: Cross-Reference Against Flagship Validation Files 08-13

**Scanner:** F (Task #6, claude-sonnet-4-5-20250929)
**Date:** 2026-02-17
**Prompt scanned:** `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`
**Validation files cross-referenced:**
- `08-middle-lessons-coverage.md`
- `09-crown-jewel-coverage.md`
- `10-prompt-wrapper-alignment.md`
- `11-adversarial-completeness.md`
- `12-synthesis-fidelity.md`
- `13-FINAL-VALIDATION-VERDICT.md`

---

## METHODOLOGY

Each file was read in full. For every gap, rule, or specification flagged in the validation files,
I checked whether the FINAL prompt (v2, `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`) addresses it.
I distinguish between:
- **STILL MISSING:** gap not resolved by the v2 FINAL prompt
- **RESOLVED:** gap addressed in v2 vs the earlier 10-ENRICHED file the validators reviewed
- **PRESENT BUT PARTIAL:** prompt contains it but incompletely

Note: The 6 validation files (08-13) validated an EARLIER version
(`10-ENRICHED-MASTER-EXECUTION-PROMPT.md`, 530 lines). The FINAL prompt (v2) is the post-fix
version that applied 7 BLOCKING + 10 HIGH + 8 MINOR fixes from those validators' verdicts.
Most BLOCKING fixes (BG-01 through BG-07) are confirmed applied in the FINAL prompt's
INTEGRATION LOG. My job is to identify what STILL remains missing or incomplete.

---

## SECTION 1: FILE 08 -- Middle-Tier Lessons Coverage

### 08 Verdict
PASS. 14 COVERED, 1 PARTIAL (timing model, LOW severity). No BLOCKING gaps from this file.

### Gaps Still Present in FINAL Prompt

**08-GAP-01: Timing model recalibration [LOW severity, NICE-TO-HAVE]**

- **Validator finding:** Lesson 7 (35-min Middle execution). Marked PARTIAL, LOW severity. Timing
  recalibration is a planning concern, not a prompt rule.
- **FINAL prompt status:** Still not present. The staged downgrade at 240 min (C4) provides
  implicit timing awareness. No per-pass time budgets.
- **Classification:** NICE-TO-HAVE. The validator correctly notes this belongs in HANDOFF.md,
  not the execution prompt.
- **Insertable text (optional):** If the team wishes to add this to C3:
  ```
  PASS TIME BUDGETS (soft targets, trigger staged-downgrade evaluation if exceeded by >50%):
  Pass 0 (Content + Metaphor): 60 min
  Pass 1 (Skeleton + Gate 1): 45 min
  Pass 2 (Mechanisms + Gate 3): 45 min
  Pass 3 (Metaphor Integration + Gate 4): 30 min
  Pass 4 (Intentionality): 30 min
  Pass 5 (PA Audit + Gate 5): 60 min
  Gates + overhead slack: 50 min
  Total budget: 320 min (trigger staged downgrade at 240 min)
  ```

### Summary for File 08
- CRITICAL gaps: 0
- IMPORTANT gaps: 0
- NICE-TO-HAVE gaps: 1 (timing model)
- Overall: **PASS -- no actionable gaps**

---

## SECTION 2: FILE 09 -- Crown Jewel Forensic Validation

### 09 Verdict
PASS WITH MINOR GAPS. Container width, transitions, soul, fractal all accurate.
3 gaps: print media query, prefers-reduced-motion, progressive responsive.

### Gaps Still Present in FINAL Prompt

**09-GAP-01: Print media query (Technique #11) -- no binary rule or builder assignment [IMPORTANT]**

- **Validator finding:** Technique #11 of 15 must-replicate techniques. No rule requires it.
  No builder is assigned it.
- **FINAL prompt status:** Still absent. The INTEGRATION LOG shows no fix applied for this.
  Intentionality Builder reads crown jewel forensics file, so it may appear organically, but
  there is no binary gate.
- **Classification:** IMPORTANT. Both crown jewels include print media queries. Omitting it
  produces a page that fails print accessibility -- a subtle but real production gap.
- **Insertable text (C-15 or intentionality builder instructions in C1):**
  ```
  C-15 addition: Or (g) print media query with typographic simplification.
  ```
  OR in Section C1 under INTENTIONALITY BUILDER:
  ```
  Technique replicas from crown jewels:
  - Print media query (@media print): hide navigation, simplify typography, expand max-width
  - prefers-reduced-motion: wrap all CSS transitions in this media query
  These appear in BOTH CD-006 and DD-006. Include in Pass 4.
  ```

**09-GAP-02: prefers-reduced-motion (Technique #12) -- no rule [IMPORTANT]**

- **Validator finding:** Soft gap. No rule requires it; a builder reading CD-006 may include it
  organically.
- **FINAL prompt status:** Still absent as binary rule.
- **Classification:** IMPORTANT (accessibility + crown jewel fidelity). CD-006 and DD-006 both
  include it.
- **Insertable text (B2 Soul rules or B7 Process rules):**
  ```
  U-11. All CSS transitions/animations wrapped in @media (prefers-reduced-motion: no-preference)
        so motion is opt-in, not opt-out. Required for crown jewel parity.
  ```

**09-GAP-03: Progressive responsive degradation (Technique #15) -- no binary gate [IMPORTANT]**

- **Validator finding:** No explicit "must have 3 breakpoints" rule. A builder could ship with no
  responsive breakpoints.
- **FINAL prompt status:** Still absent as binary gate. No responsive breakpoint rule found in
  the FINAL prompt's B-section rules.
- **Classification:** IMPORTANT. A flagship page without responsive CSS would fail at 768px
  viewport -- tested by PA Auditor H (PA-21,22,23,46,47).
- **Insertable text (B1 Spatial or B7 Process):**
  ```
  S-16. Responsive breakpoints: >= 2 breakpoints present (768px minimum + 480px optional).
        At 768px: single-column layout, font-size reduction to maintain CPL 45-80.
        Verify: @media queries exist in CSS and DOM reflows correctly at 768px viewport.
  ```

**09-GAP-04: A7 bridge prose quote context conflation [LOW severity, NICE-TO-HAVE]**

- **Validator finding:** A7 shows `.transition--breathing` CSS but quotes bridge prose from a
  `.transition--bridge` element. Could confuse builders.
- **FINAL prompt status:** Still present. INTEGRATION LOG shows E-18 (var() count fix) applied
  but not the A7 bridge prose clarification.
- **Classification:** NICE-TO-HAVE. The validator rates this LOW impact since B10 and C-05/C-07
  are unambiguous.

### Summary for File 09
- CRITICAL gaps: 0
- IMPORTANT gaps: 3 (print media query, prefers-reduced-motion, responsive breakpoints)
- NICE-TO-HAVE gaps: 1 (A7 context conflation)
- Overall: **MINOR GAPS -- 3 IMPORTANT items without insertable rules**

---

## SECTION 3: FILE 10 -- Prompt-Wrapper Alignment Validation

### 10 Verdict
CONDITIONALLY ALIGNED -- 5 BLOCKING issues. 25% rule gap between prompt and wrapper.

### Gap Status in FINAL Prompt

The FINAL prompt INTEGRATION LOG confirms the following from file 10's findings were applied:
- BG-03b: MC items added to B10 (RESOLVED)
- BG-04: PA assignments aligned (RESOLVED)
- BG-07: SC-08 added to Gate 1 (RESOLVED)
- HP-04: MC in B10 (RESOLVED, merged with BG-03b)
- HP-05: MC in Gate 3 (RESOLVED)
- HP-06: Viewports updated to 4 (RESOLVED)
- HP-08: Orphan extracts routed (RESOLVED)
- HP-09: Content-form alignment file path resolved (RESOLVED)

The following remain as STILL MISSING in the FINAL prompt:

**10-GAP-01: S-09/S-11 max spacing 96px -- no programmatic audit [IMPORTANT]**

- **Validator finding (Check 9, item 5):** S-09 and S-11 (max spacing 96px per-property) have
  "no explicit wrapper mention." The builder's programmatic audit does not check for CSS margin
  or padding values above 96px.
- **FINAL prompt status:** Rules S-09 and S-11 are present in B1. But the B10 self-check does
  not include an S-09/S-11 item. The programmatic audit description in C4 doesn't mention CSS
  margin/padding threshold checks.
- **Classification:** IMPORTANT. S-09/S-11 prevent the exact void catastrophe that killed the
  Ceiling experiment. "Even if the rule is present, if it is not in the self-check, builders
  skip it." (per memory: "Binary rules achieve 100% compliance; judgment rules ~0% -- but only
  if the binary rule is actually checked.")
- **Insertable text (B10 self-check):**
  ```
  [ ] S-09/S-11: No CSS margin or padding value > 96px   (check computed styles and CSS)
  ```
  AND in programmatic audit spec (after token compliance check):
  ```
  S-09/S-11: document.querySelectorAll('*').forEach(el => {
    const s = getComputedStyle(el);
    ['marginTop','marginBottom','paddingTop','paddingBottom'].forEach(p => {
      if (parseFloat(s[p]) > 96) console.warn(p, s[p], el);
    });
  });
  ```

**10-GAP-02: S-03 header proportion -- missing from programmatic audit [IMPORTANT]**

- **Validator finding (Check 1, S-03 row):** S-03 (header <= 20% viewport) is in B10 self-check
  but NOT in the programmatic audit. "Programmatic audit omits S-03."
- **FINAL prompt status:** S-03 in B10 is confirmed present. Programmatic audit route in C4
  lists U-01 through U-10 checks but not S-03.
- **Classification:** IMPORTANT. Header proportion is in the kill criteria (KB/S-03 pathway) and
  is one of the primary spatial failure modes. Needs JS verification, not just builder judgment.
- **Insertable text (programmatic audit in C4):**
  ```
  S-03: header height check:
    const h = document.querySelector('header').getBoundingClientRect().height;
    const vp = window.innerHeight;
    console.log('Header %:', (h/vp*100).toFixed(1) + '% (WARN at 20%, ABORT at 25%)');
  ```

**10-GAP-03: S-08 heading spacing -- self-check only, no gate [NICE-TO-HAVE]**

- **Validator finding (Check 1, S-08 row):** S-08 (heading spacing >= 1.5:1) in B10 self-check
  but not in any gate.
- **FINAL prompt status:** B10 self-check item confirmed present. No gate enforcement.
- **Classification:** NICE-TO-HAVE. Low priority since heading spacing is caught by B10.

**10-GAP-04: Void thresholds not specified in wrapper [IMPORTANT]**

- **Validator finding (Check 7):** "Void threshold (skeleton): 1620px -- Not in wrapper. Void
  threshold (final): 2160px -- Not in wrapper (S-10 referenced but value not)."
- **FINAL prompt status:** The parameter table has both values. S-10 rule states "2160px" in B1.
  Gate 1 references S-10 but the wrapper (if it still lacks the value) would not catch the
  1620px skeleton threshold at the right gate.
- **Classification:** IMPORTANT. The two-threshold model (stricter 1620px during skeleton, 2160px
  at final) is nuanced and needs to be enforced at the correct gate (Gate 1 vs final Gate 5).
  S-10 as written says "No contiguous void > 2160px (1.5 x 1440px viewport width). Skeleton
  stage: stricter 1620px check." This is in the FINAL prompt (B1). Self-check is the main
  enforcement mechanism. The key gap is the skeleton-stage 1620px check is not explicitly
  gated at Gate 1 -- it's buried in S-10's text.
- **Insertable text (C3 Gate 1):**
  ```
  Gate 1 add: S-10 skeleton check: No void > 1620px at skeleton stage.
              (Final threshold 2160px applies at Gate 5.)
  ```

**10-GAP-05: Token compliance 80% threshold missing from programmatic audit output [IMPORTANT]**

- **Validator finding (Check 7):** "Programmatic audit counts var() but doesn't specify the 80%
  threshold."
- **FINAL prompt status:** B10 self-check states "Token compliance >= 80%." The programmatic
  audit specification in C4 mentions checking token compliance but the actual pass/fail threshold
  value needs to be stated for the programmatic audit output format.
- **Classification:** IMPORTANT (LOW end). The 80% threshold is in B10. Adding it to the
  programmatic audit output completes the enforcement chain.

**10-GAP-06: P-04 builder self-scroll -- missing from wrapper agent instructions [IMPORTANT]**

- **Validator finding (Check 9, blocking gap #4):** "P-04 (builder self-scroll): Visual
  verification before file write. This was identified as critical in ceiling failure analysis.
  Wrapper doesn't enforce it."
- **FINAL prompt status:** P-04 is present in B7 as a binary rule. B10 self-check has 16 items
  but P-04 is NOT among them. If the FINAL prompt did not add P-04 to B10, this remains
  unenforced at the most important compliance point.
  Checking FINAL prompt B10: items listed are S-01, S-07, S-02, S-12, U-01 through U-10, S-03+S-04,
  S-05, C-05+C-06, token compliance, S-08, C-09, C-18, MC-01, MC-02, MC-06, SC-08.
  P-04 (builder self-scroll) is NOT in B10.
- **Classification:** IMPORTANT. The ceiling failure forensics identified self-scroll as a
  critical prevention step. It prevents builders from writing files with invisible void regions.
- **Insertable text (B10 self-check, after last spatial item):**
  ```
  [ ] P-04: Self-scroll confirmed -- scrolled top-to-bottom in browser, checked every viewport position
  ```

**10-GAP-07: C-07 bridge transition prose -- no gate check [IMPORTANT]**

- **Validator finding (Check 1, C-07 row):** "NOT in wrapper or B10 self-check. Bridge transition
  prose is compositional quality, no explicit gate."
- **FINAL prompt status:** C-07 is in B3 as "Bridge transitions MUST contain cognitive-reframe
  prose (1-3 sentences justifying the shift)." Gate 3 lists "C-05+C-06+C-07: transition checks."
  FINAL prompt C3 Gate 3 says: "C-05+C-06+C-07: transition checks." So C-07 IS gated.
  This appears RESOLVED in the FINAL prompt.
- **Classification:** RESOLVED -- no action needed.

**10-GAP-08: C-10 purpose-built components -- missing from wrapper [IMPORTANT]**

- **Validator finding (Check 1, C-10 row):** C-10 (>= 2 purpose-built components invented for
  THIS content) has "NOT mentioned in wrapper."
- **FINAL prompt status:** C-10 is in B3 and appears in Gate 4 per C3: "C-10: >= 2 purpose-built
  components." So it IS gated.
- **Classification:** RESOLVED -- Gate 4 covers C-10.

**10-GAP-09: C-14 signal-to-silence ratio -- no wrapper gate [IMPORTANT]**

- **Validator finding (Check 1, C-14 row):** "NOT mentioned in wrapper. Signal-to-silence ratio."
- **FINAL prompt status:** Gate 3 in C3 includes "C-14: signal-to-silence 0.6-0.8:1." RESOLVED
  in FINAL prompt.
- **Classification:** RESOLVED.

**10-GAP-10: C-17 bridge cognitive prose -- no wrapper gate [IMPORTANT]**

- **Validator finding (Check 1, C-17 row):** Same as C-07.
- **FINAL prompt status:** RESOLVED -- C-07 gate covers this (C-07 and C-17 both cover bridge
  prose with cognitive reframe).
- **Classification:** RESOLVED.

**10-GAP-11: Planner agent missing from C1 [CRITICAL -- was BG-01]**

- **Validator finding:** 11/12 agents spawned, Planner missing.
- **FINAL prompt status:** INTEGRATION LOG entry BG-01 confirms Planner added to C1 with:
  "Pass 0.5: Planner (Opus): receives content assessment + metaphor derivation, produces build
  plan with mechanism deployment map, spatial budget, section ordering."
- **Classification:** RESOLVED.

**10-GAP-12: Gate 3 labels "CP-01 through CP-04" (prompt typo) [NICE-TO-HAVE]**

- **Validator finding:** Gate 3 says "CP-01 through CP-04" but should be "C-01 through C-04."
  Validator says wrapper correctly uses C-01, so it's a prompt typo.
- **FINAL prompt status:** FINAL prompt C3 Gate 3 says "CP-01 through CP-04 + spatial re-check."
  This is STILL the typo. The INTEGRATION LOG does not list this fix.
- **Classification:** IMPORTANT. Agents reading the FINAL prompt will see "CP-01 through CP-04"
  and may misinterpret as Communication Protocol checkpoints, not Compositional rules.
- **Insertable text (C3 Gate 3):**
  Change: "CP-01 through CP-04"
  To: "C-01 through C-04 (compositional minimums)"

### Summary for File 10
- CRITICAL gaps: 0 (BG-01 Planner resolved)
- IMPORTANT gaps: 7 (S-09/S-11 programmatic, S-03 programmatic, void thresholds in gates,
  token 80% in programmatic, P-04 in B10, Gate 3 CP typo, skeleton 1620px at Gate 1)
- NICE-TO-HAVE gaps: 2 (S-08 no gate, A7 conflation)
- Overall: **MODERATE GAPS -- 7 IMPORTANT items**

---

## SECTION 4: FILE 11 -- Adversarial Completeness Audit

### 11 Verdict
4 CRITICAL + 8 HIGH + 9 MODERATE + 3 LOW. Top recommendation: add Content Writer agent.

### Gap Status in FINAL Prompt

**11-GAP-01 (OG-1): Planner agent phantom reference [WAS CRITICAL -- now check RESOLVED]**

- **Validator finding:** Planner referenced in CP-A, Section E, B10 but not in C1 roster.
- **FINAL prompt status:** RESOLVED via BG-01. Planner appears in C1 as Pass 0.5 agent.
- **Classification:** RESOLVED.

**11-GAP-02 (OG-2): Build plan has no author [WAS HIGH -- check RESOLVED]**

- **FINAL prompt status:** RESOLVED via BG-01. Planner in Pass 0.5 produces 03-build-plan.md.
- **Classification:** RESOLVED.

**11-GAP-03 (CG-1): Content transformation unspecified -- no Content Writer [CRITICAL]**

- **Validator finding:** No agent transforms RESEARCH-SYNTHESIS.md from research prose to
  showcase prose. Content Architect produces a structural inventory, not adapted prose.
  "The most likely outcome: the builder copies research prose verbatim, producing a page that
  reads like a research paper, not a showcase."
- **FINAL prompt status:** INTEGRATION LOG entry HP-03 (Content Adapter) is listed as "C1 Pass
  0: Content Architect also adapts prose." The FINAL prompt C1 says the Content Architect's
  Pass 0 role includes: "ALSO: adapt RESEARCH-SYNTHESIS.md prose into showcase-ready sections
  (research register -> reader-friendly register). Output: 01-adapted-content.md."
  Additionally, B11 (Content Transformation) adds 8 CT rules (CT-01 through CT-08) with
  specific prose requirements: tone target, word count per section, verbatim prohibition,
  reader-facing headings.
  Gate 0.5 (Content Quality gate) fires after adapted-content.md is produced.
- **Classification:** RESOLVED in FINAL prompt via HP-03 + B11 + Gate 0.5.

**11-GAP-04 (CG-2): Word count target absent [WAS HIGH]**

- **Validator finding:** No total word count target for the page. S-15 gives zone counts by word
  count but no target total.
- **FINAL prompt status:** B11 CT-03 specifies: "Total page: 2500-4000 words of prose." RESOLVED.
- **Classification:** RESOLVED.

**11-GAP-05 (RR-1): No reader proxy agent [CRITICAL]**

- **Validator finding:** No agent reads the page AS a reader. PA auditors evaluate technique,
  not experience. "Who speaks for the reader?"
- **FINAL prompt status:** The FINAL prompt does not add a Reader Proxy agent. The PA cold-look
  protocol (5 seconds, gut reaction) is the closest approximation. C4 covers 9 PA auditors but
  none is specifically designated as a reader proxy.
  The adversarial audit's "Top 5 Recommendations" #3 was: "Add Reader Proxy at Gate 4."
  The INTEGRATION LOG does not list a reader proxy fix.
- **Classification:** IMPORTANT. Not CRITICAL (the cold-look protocol provides partial coverage)
  but genuinely missing. Experiential failures that technique audits miss will not be caught.
- **Insertable text (C1 Gate 4 or C4):**
  ```
  READER PROXY (optional, Sonnet): at Gate 4, reads the post-metaphor HTML with ZERO design
  context and answers: "What is this page about? Would I keep scrolling? What did I feel?"
  Provides 1-paragraph experiential report to team-lead. Costs ~15 min. Recommended for
  Flagship tier.
  ```

**11-GAP-06 (CQ-1): No explicit content writer agent [WAS CRITICAL]**

- **Validator finding:** "Who transforms RESEARCH-SYNTHESIS.md into showcase prose?"
- **FINAL prompt status:** RESOLVED via HP-03 (Content Architect expanded to include prose
  adaptation). Content Architect now produces 01-adapted-content.md with showcase-ready prose.
- **Classification:** RESOLVED.

**11-GAP-07 (CQ-2): Tone mismatch -- research register vs warm-authoritative [WAS HIGH]**

- **Validator finding:** RESEARCH-SYNTHESIS.md is analytical. The target is "warm, authoritative,
  unhurried." These are different registers. No agent handles tonal transformation.
- **FINAL prompt status:** RESOLVED via B11 CT-02: "Tone target: Warm. Authoritative. Unhurried.
  Warm = second person, active voice, concrete examples. Authoritative = declarative sentences,
  no hedging ('perhaps', 'it should be noted'). Unhurried = short paragraphs (2-4 sentences),
  generous transitions between ideas."
- **Classification:** RESOLVED.

**11-GAP-08 (HF-1): Wrapper fear gradient undermines prompt conviction [HIGH]**

- **Validator finding:** Wrapper Phase 0 opens with "most important build in this design system's
  history. 22 agents across 5 research passes produced 758,000 lines." = INTIMIDATION FRAMING.
  Wrapper Critical Reminders with failure comparisons = FEAR GRADIENT. Contradicts prompt's
  "mission is beauty, not compliance."
- **FINAL prompt status:** The FINAL prompt's conviction layer is maintained ("The mission is
  beauty, not compliance"). But the wrapper emotional architecture is NOT within scope of the
  FINAL prompt file. This gap may remain in the wrapper itself.
  The INTEGRATION LOG does not list a wrapper emotional architecture fix.
- **Classification:** IMPORTANT. The wrapper amplifies the very defensive posture the prompt
  tries to counter. A builder reading the wrapper first (as required) will arrive at the creative
  work already primed for anxiety, not confidence.
- **Insertable text (wrapper preamble replacement -- if wrapper is edited):**
  Replace: "You are about to execute the most important build in this design system's history.
  22 agents across 5 research passes produced 758,000 lines of analysis."
  With: "You are building a warm, authoritative, unhurried page about visual design research.
  Everything below is scaffolding for that goal. The mission is beauty, not compliance."

**11-GAP-09 (TG-1): No per-pass time budgets [HIGH]**

- **Validator finding:** No time budget per pass. If Pass 0 takes 90 min, only 150 min remain for
  Passes 1-5.
- **FINAL prompt status:** Not addressed in FINAL prompt. Staged downgrade at 240 min exists
  (C4) but no per-pass budgets.
- **Classification:** IMPORTANT. See 08-GAP-01 for insertable text.

**11-GAP-10 (OG-3): Gate 0 lacks spatial verification on text-only artifact [MODERATE]**

- **Validator finding:** Gate 0 checks content-to-void >= 60:40 but there is no HTML yet at
  Gate 0 -- only text inventories. The team-lead must do mental spatial math from word counts.
- **FINAL prompt status:** Gate 0 still checks spatial properties on non-spatial artifacts.
  C3 says "Gate 0: Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5."
  These are estimates, not measurements.
- **Classification:** IMPORTANT (LOW end). The fix is to explicitly label Gate 0 as ESTIMATE-BASED
  and clarify that the 60:40 is a projection from word count, not a measurement.
- **Insertable text (C3 Gate 0):**
  Add to Gate 0 line: "(ESTIMATE from content inventory -- not measurable until skeleton build)"

**11-GAP-11 (OG-4): Competitive skeleton build has no selection criteria [MODERATE]**

- **Validator finding:** "2 parallel [skeleton builders], team-lead picks better." No scoring
  rubric for comparison. Is it content-to-void? Header proportions? All equally weighted?
- **FINAL prompt status:** C1 says "2 parallel, team-lead picks better." No selection rubric
  added in FINAL prompt.
- **Classification:** IMPORTANT. Without criteria, team-lead makes a judgment call -- exactly
  what the binary-rule architecture claims to eliminate. This is a genuine process gap.
- **Insertable text (C1 Pass 1):**
  ```
  SKELETON SELECTION CRITERIA (applied by Embedded Auditor reporting to team-lead):
    Primary: S-02 content-to-void ratio (higher wins; < 5% difference = tie)
    Secondary: S-03 header proportion (lower wins; < 5% difference = tie)
    Tiebreaker: S-05 section count (more complete wins)
  ```

**11-GAP-12 (CC-1): Typography trinity font name inconsistency [LOW]**

- **Validator finding:** U-09 in enriched prompt said "Source Sans 3 / Source Code Pro" (wrong).
  Design system uses Inter / JetBrains Mono.
- **FINAL prompt status:** RESOLVED via BG-02. U-09 now reads "Typography trinity: Instrument
  Serif / Inter / JetBrains Mono."
- **Classification:** RESOLVED.

**11-GAP-13 (CC-3): SC-03 richness matrix unmeasurable [MODERATE]**

- **Validator finding:** SC-03 ">= 30 of 35 cells populated for Flagship." But who fills the
  matrix? How is "populated" defined? An agent could count accidental CSS properties.
- **FINAL prompt status:** SC-03 is present but still lacks a verification method. No programmatic
  check or agent assignment for matrix population.
- **Classification:** IMPORTANT. Without a measurement method, SC-03 is a judgment rule
  (achieving ~0% compliance by the prompt's own architectural principle).
- **Insertable text (SC-03 rule):**
  Add after SC-03:
  ```
  SC-03 verification: Planner produces a 5x7 matrix in 03-build-plan.md mapping each planned
  mechanism to its scale level(s) and channel(s). Cells = (scale, channel) pairs explicitly
  planned. Unplanned CSS properties do not count. Target >= 30 planned cells.
  ```

### Summary for File 11
- CRITICAL gaps: 0 (CG-1/CQ-1 resolved by HP-03+B11; OG-1/OG-2 resolved by BG-01)
- IMPORTANT gaps: 7 (reader proxy, wrapper fear gradient, per-pass time budgets, Gate 0 estimate
  label, skeleton selection criteria, SC-03 measurement method, P-04 self-scroll)
- MODERATE gaps: 0 (OG-3, OG-4, HF-1, CC-3 promoted to IMPORTANT above)
- NICE-TO-HAVE: 0
- Overall: **MODERATE GAPS -- 7 IMPORTANT items**

---

## SECTION 5: FILE 12 -- Synthesis Fidelity Validation

### 12 Verdict
PASS WITH RESERVATIONS. 77.2% effective coverage. 3 most critical losses: gate-then-ranking,
PA-to-TC feedback routing, dual severity system.

### Gap Status in FINAL Prompt

**12-GAP-01: Gate-then-ranking rubric flow [WAS HIGH]**

- **Validator finding:** Report 12 provides a two-phase rubric: Phase 1 (Gate) ship/no-ship,
  Phase 2 (Ranking) quality evaluation. File 10 lacked this.
- **FINAL prompt status:** The FINAL prompt added C5 (Gate-then-Ranking Protocol) via SYNTH
  integration. C5 defines:
  - PHASE 1 (GATE): Binary ship/no-ship questions (PA-01 at WOULD-NOT-SHIP, PA-05 < 3/4, etc.)
  - PHASE 2 (RANKING): Comparative quality dimensions (PA-05 composite, PA-20, PA-35, PA-44, etc.)
  - SEVERITY SYSTEM: LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC with corroboration escalation.
- **Classification:** RESOLVED. C5 directly addresses this.

**12-GAP-02: PA-to-TC feedback routing table [WAS HIGH]**

- **Validator finding:** When PA audit finds issues, team-lead must improvise which TC phase to
  re-enter. No structured routing.
- **FINAL prompt status:** The FINAL prompt added C6 (PA-to-TC Fix Routing) via SYNTH integration.
  C6 is a full routing table: PA Finding Category -> TC Phase to Re-Enter -> Agent.
- **Classification:** RESOLVED. C6 directly addresses this.

**12-GAP-03: Full dual severity system [WAS MEDIUM-HIGH]**

- **Validator finding:** Report 12 provides two independent severity tracks (perception:
  WOULD-NOT-SHIP/LOOKS-WRONG/COULD-BE-BETTER; rule: SOUL VIOLATION/CONVENTION BUG/OVERFLOW).
  File 10 used simplified BLOCKING/SIGNIFICANT/MINOR.
- **FINAL prompt status:** C5 (SEVERITY SYSTEM) uses: LOOKS-WRONG / WOULD-NOT-SHIP /
  CATASTROPHIC. This is a three-tier perception track. The rule-track (SOUL VIOLATION, etc.)
  is still absent.
- **Classification:** IMPORTANT (LOW end). The perception track is present. The rule track is
  still simplified. The dual-track nuance is partially captured. For Flagship execution, the
  LOOKS-WRONG/WOULD-NOT-SHIP/CATASTROPHIC system is operationally sufficient.
  The "COULD-BE-BETTER" severity level from the original PA skill is absent.
- **Insertable text (C5 SEVERITY SYSTEM):**
  Add: "COULD-BE-BETTER: minor improvement opportunity, does not affect ship decision."
  (This is the 4th severity level for completeness with PA SKILL.md.)

**12-GAP-04: Report 01 Addition/BECAUSE tests not defined in prompt [MEDIUM]**

- **Validator finding:** TC Phase 2 routing (B8) mentions "Addition Test + BECAUSE Test" in the
  agent assignment table but the TESTS THEMSELVES are not defined in the prompt.
- **FINAL prompt status:** B8 still says "Addition Test + BECAUSE Test" without defining them.
  These are defined in the TC SKILL.md file, which the Metaphor Agent reads. So they ARE
  reachable but not in-prompt.
- **Classification:** NICE-TO-HAVE. The Metaphor Agent reads the TC SKILL which defines these
  tests. No critical gap since the operational details are in the assigned reading.

**12-GAP-05: Report 11 TC warning system (W-prefixed warnings) absent [MEDIUM]**

- **Validator finding:** TC warning system (W-DEADZONE, W-OVERLABEL, W-MONOTONY for builders)
  not present. Builders get binary rules instead.
- **FINAL prompt status:** Still absent. Binary rules are actually superior per the architectural
  principle, so this is intentional.
- **Classification:** NICE-TO-HAVE. Binary rules achieve higher compliance than contextual
  warnings. Not a gap.

**12-GAP-06: Report 12 auditor assignment reorganization [MEDIUM]**

- **Validator finding:** C4 assignments differ from Report 12's load-balanced system. Synthesis
  chose domain coherence over load balancing. Auditor A in C4 gets PA-01,03,04,05,18,19,20,45
  but file 10 assigned PA-01,02,03,04,05.
- **FINAL prompt status:** FINAL prompt C4 auditor assignments show Auditor A:
  "PA-01,03,04,05,18,19,20,45 (Identity+First Impression+Color, 8 Qs)." This is the
  domain-coherent assignment. The load-balanced alternative was not adopted.
  HP-07 (PA-03 missing from operational scaffolding) was addressed: "Add PA-03 to Auditor A."
- **Classification:** RESOLVED (domain-coherent approach maintained; HP-07 fix applied).

**12-GAP-07: Report 13 PA-to-TC terminology collision unresolved [LOW]**

- **Validator finding:** "Perceptual risk" (TC concept) vs "perception track" (PA concept) --
  same word, different concepts.
- **FINAL prompt status:** No rename applied. The FINAL prompt uses "perceptual risk" in TC
  context without conflict markers.
- **Classification:** NICE-TO-HAVE. Unlikely to cause builder confusion.

**12-GAP-08: Report 15 agent-channel ownership not specified [MEDIUM]**

- **Validator finding:** Report 15 assigns channels to specific agents. FINAL prompt assigns by
  PASS not by CHANNEL.
- **FINAL prompt status:** Still pass-based. No channel ownership map.
- **Classification:** NICE-TO-HAVE. Pass-based assignment is simpler and works. Channel ownership
  adds precision but not critical for execution.

**12-GAP-09: Report 20 phased reveal protocol absent [MEDIUM]**

- **Validator finding:** Report 20's 3-batch delivery with `>>> STOP <<<` markers not present.
- **FINAL prompt status:** Still absent. Single-prompt structure maintained.
- **Classification:** NICE-TO-HAVE. The anti-skimming techniques (numbered rules, FAIL IF prefix,
  code blocks, checkboxes) are deployed as alternatives. Phased reveal adds compliance but
  increases complexity.

### Summary for File 12
- CRITICAL gaps: 0
- IMPORTANT gaps: 1 (dual severity -- "COULD-BE-BETTER" missing from C5)
- NICE-TO-HAVE gaps: 5 (Addition/BECAUSE tests, TC warnings, channel ownership, phased reveal,
  terminology collision)
- Overall: **MINOR GAPS -- 1 IMPORTANT item**

---

## SECTION 6: FILE 13 -- FINAL VALIDATION VERDICT

### 13 Verdict
NEEDS FIXES. 7 BLOCKING, 10 HIGH-PRIORITY, 7 contradictions, 7 cross-cutting themes.
"After the 8 BLOCKING fixes, the prompt + wrapper system will be execution-ready."

### Gap Status in FINAL Prompt

The FINAL prompt INTEGRATION LOG lists all 7 BLOCKING gaps (BG-01 through BG-07) as APPLIED.
I check each:

**BG-01: Planner added to C1 -- RESOLVED.** (Confirmed in FINAL prompt C1.)

**BG-02: U-09 font names fixed -- RESOLVED.** (U-09: "Instrument Serif / Inter / JetBrains Mono.")

**BG-03: 16-MC routed to Planner + Metaphor Builder -- RESOLVED.** (Section E confirms both
agents now read this file.)

**BG-04: PA auditor assignments reconciled -- RESOLVED.** (C4 shows domain-coherent 9-auditor
system. Confirmed updated vs earlier 10-ENRICHED.)

**BG-05: Wrapper file paths fixed -- Check FINAL prompt.** The FINAL PROMPT integration log
lists HP-08 (Orphan extracts) as resolved by pointing to 00-components-extract and
00-case-studies-extract. Section E BUILDER now reads: "00-components-extract.md" and
"00-case-studies-extract.md." The underlying file path issue (merged-components.css vs
components.css) is a WRAPPER issue, not a FINAL PROMPT issue. If the wrapper is not separately
corrected, BG-05 may still be unresolved in the wrapper.
**Classification: PARTIALLY RESOLVED** in FINAL prompt (Section E uses extract filenames which
work regardless of underlying path). But the wrapper's Phase 1A Read #5/#6 need separate fixing.

**BG-06: CCS formula corrected to per-mechanism removal test -- RESOLVED.** (MC-01 in FINAL
prompt: "CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is
removed) / (total deployed - 1). CCS for page = average CCS across all deployed.")

**BG-07: SC-08 added to Gate 1 -- RESOLVED.** (Gate 1 says "SC-01 through SC-08" in C3.)

Now checking HIGH-PRIORITY gaps (HP-01 through HP-10):

**HP-01: C-08/MC-02 reinforcing pairs contradiction -- RESOLVED.** (C-08 annotated "GATE
MINIMUM," MC-02 annotated "Flagship aspiration; C-08 gate >= 2 is the binary minimum.")

**HP-02: Transition name mapping added to C-05 -- RESOLVED.** (C-05 now includes catalog
mapping: "SMOOTH = catalog 'SPACING SHIFT', BRIDGE = catalog 'CHECKPOINT', BREATHING = catalog
'HARD CUT'.")

**HP-03: Content Adapter role added -- RESOLVED.** (C1 Pass 0 Content Architect expanded to
include prose adaptation. B11 CT rules added.)

**HP-04: MC items added to B10 -- RESOLVED.** (B10 now includes MC-01, MC-02, MC-06, SC-08.)

**HP-05: MC checks added to Gate 3 -- RESOLVED.** (Gate 3: "MC self-check (CCS >= 0.30,
>= 3 reinforcing pairs, >= 1 cascade).")

**HP-06: Viewports updated to 4 -- RESOLVED.** (C4: "4 viewports: 1440px, 1024px, 768px, 480px.
50-80 screenshots.")

**HP-07: PA-03 assigned to Auditor A -- Note.** C4 shows "A: PA-01,03,04,05,18,19,20,45."
PA-03 IS in Auditor A's list. Resolved at prompt level. The depth resource
(17-pa-operational-scaffolding.md) is a separate file not part of the FINAL prompt.
**Classification: RESOLVED in prompt.**

**HP-08: Orphan extracts routed to builders -- RESOLVED.** (Section E Builder reads both
00-components-extract.md and 00-case-studies-extract.md.)

**HP-09: Content-form alignment file path -- RESOLVED.** (Section E INTENTIONALITY BUILDER reads:
"ephemeral/flagship-preparation/05-content-first-methodology.md")

**HP-10: Void threshold source citation -- RESOLVED.** (Appendix: void threshold source corrected
to "LIVING-STATE.md".)

### Cross-Cutting Themes -- Still Present?

**THEME-01: Phantom Planner -- RESOLVED.** (BG-01 fixed.)

**THEME-02: MC Layer Under-Operationalized -- PARTIALLY RESOLVED.** BG-03 (route 16-MC),
BG-06 (CCS formula), HP-04 (MC in B10), HP-05 (MC in Gate 3) all applied. But the 120:1
compression is an inherent limitation. SC-03 richness matrix still lacks a verification
method (see 11-GAP-13 above).

**THEME-03: Transition Grammar Inconsistency -- RESOLVED.** HP-02 added catalog mapping to C-05.

**THEME-04: Binary Rules Without Enforcement -- MOSTLY RESOLVED.** MC-04 through MC-08 still
not all individually gated, but Gate 3's MC self-check + Gate 4's explicit MC-04/MC-05/MC-06
checks (from C3) provide enforcement. SC-08 added to Gate 1. P-04 still not in B10 (see 10-GAP-06).

**THEME-05: Scale Well-Captured, Coherence Under-Captured -- PARTIALLY RESOLVED.** 16-MC routing
and B10 MC items improve coherence operationalization. Still 65-70% vs 90% for scale.

**THEME-06: Source Citation Inaccuracies -- MOSTLY RESOLVED.** HP-10 fixed void threshold source.
CONTRA-06 (DD-006 mechanism count) listed as E-17: "A5: '6 mechanisms' -> '~6-12 mechanisms'."
CONTRA-07 (var() count) listed as E-18: fixed to "54 token definitions (~270 var() usages)."

**THEME-07: Wrapper-Prompt Alignment Gap -- PARTIALLY RESOLVED.** BG-05 (file paths in wrapper)
applied at prompt level but wrapper itself may still need correction.

### Remaining Contradictions from File 13

**CONTRA-02: Scale requirement -- SC-01 (preferred 2-3) vs source documents (5/5) [RESOLVED]**
File 13 resolution: "SC-01 is the intentional policy correction based on empirical evidence.
The 'preferred 2-3' is correct for the enriched prompt." FINAL prompt maintains this.

**CONTRA-04: Container width -- S-01 (940-1100px) vs soundness audit [RESOLVED]**
File 13: "The broader range is defensible (CD-006 uses 1100px successfully)." Maintained.

**CONTRA-05: Transition names -- resolved by HP-02 mapping. RESOLVED.**

**CONTRA-06: DD-006 mechanism count -- resolved by E-17. RESOLVED in FINAL prompt.**

**CONTRA-07: var() count -- resolved by E-18. RESOLVED in FINAL prompt.**

**CONTRA-01: Reinforcing pairs (C-08 vs MC-02) -- resolved by HP-01. RESOLVED.**

**CONTRA-03: CCS formula -- resolved by BG-06. RESOLVED.**

### Remaining Minor Gaps from File 13 Edit List

| # | Edit | Status in FINAL prompt |
|---|------|------------------------|
| E-17 | DD-006 mechanism count "~6-12" | APPLIED (INTEGRATION LOG) |
| E-18 | var() count "~270 usages" | APPLIED (INTEGRATION LOG) |
| E-19 | Alexander formula notation | APPLIED (INTEGRATION LOG) |
| E-20 | Parameter table source citations | APPLIED (INTEGRATION LOG, HP-10) |
| E-21 | Remove duplicate MC-08/C-11 | NOT listed in INTEGRATION LOG -- check |
| E-22 | "Void is CONTENT problem" to P-08 | APPLIED (INTEGRATION LOG) |
| E-23 | Container width decision rationale | NOT listed -- still missing |
| E-24 | Planner spawn to Wrapper Phase 2 | WRAPPER change; not in FINAL prompt |

**13-GAP-01: E-21 -- MC-08/C-11 duplicate not removed [NICE-TO-HAVE]**

- **FINAL prompt status:** C-11 is "Section spacing MUST vary: at least 3 distinct spacing values
  across sections." MC-08 is ">= 3 distinct padding/margin values across section boundaries."
  These are slightly different formulations of the same concept but in different rule categories
  (Compositional vs Multi-Coherence). File 13 recommended removing the duplicate.
  If both are present in FINAL prompt, this is a minor redundancy.
- **Classification:** NICE-TO-HAVE. Redundancy is not harmful; both rules being present
  reinforces the concept. Only remove if line budget is tight.

**13-GAP-02: E-23 -- Container width rationale not documented [NICE-TO-HAVE]**

- **FINAL prompt status:** Appendix has: "Container width | 940-1100px (960px default, 1100px
  proven upper bound from CD-006)." The rationale IS present in the Source column: "Identity
  layer + CD-006 forensics." Adequate.
- **Classification:** NICE-TO-HAVE. Rationale is present inline.

**13-GAP-03: Gate 3 CP typo ("CP-01 through CP-04") [IMPORTANT]**

- See 10-GAP-12 above. Still "CP-01 through CP-04" in FINAL prompt C3.
- **Classification:** IMPORTANT.

### Summary for File 13
- CRITICAL gaps: 0 (all 7 BLOCKING gaps confirmed RESOLVED)
- IMPORTANT gaps: 1 (Gate 3 CP typo -- same as 10-GAP-12)
- NICE-TO-HAVE gaps: 2 (E-21 duplicate, E-23 rationale already present)
- Overall: **MINOR GAPS -- 1 IMPORTANT item**

---

## CONSOLIDATED GAP REGISTER

All gaps from all 6 validation files, deduplicated, classified.

### CRITICAL Gaps (must fix before execution)

None. All CRITICAL/BLOCKING gaps from validation files 08-13 are confirmed RESOLVED in the
FINAL prompt v2 via the INTEGRATION LOG.

### IMPORTANT Gaps (should fix for quality execution)

| ID | Source File | Gap Description | Insertable Text Provided? |
|----|------------|-----------------|--------------------------|
| IMP-01 | 10 | Gate 3 says "CP-01 through CP-04" (typo -- should be "C-01 through C-04") | YES |
| IMP-02 | 10 | S-09/S-11 max spacing not in B10 self-check or programmatic audit | YES |
| IMP-03 | 10 | S-03 header proportion missing from programmatic audit | YES |
| IMP-04 | 10 | Gate 1 doesn't explicitly call 1620px skeleton void threshold | YES |
| IMP-05 | 10 | P-04 builder self-scroll not in B10 self-check | YES |
| IMP-06 | 10 | Gate 0 not labeled as estimate-based (no HTML exists at Gate 0) | YES |
| IMP-07 | 11 | No reader proxy agent at Gate 4 | YES |
| IMP-08 | 11 | Wrapper fear gradient contradicts prompt conviction layer | YES |
| IMP-09 | 11 | No per-pass time budgets | YES |
| IMP-10 | 11 | Competitive skeleton build has no selection criteria | YES |
| IMP-11 | 11 | SC-03 richness matrix has no verification method or assigned producer | YES |
| IMP-12 | 09 | Print media query has no binary rule or builder assignment | YES |
| IMP-13 | 09 | prefers-reduced-motion has no binary rule | YES |
| IMP-14 | 09 | Progressive responsive breakpoints have no binary gate | YES |
| IMP-15 | 12 | C5 severity system missing "COULD-BE-BETTER" tier | YES |

### NICE-TO-HAVE Gaps

| ID | Source File | Gap Description |
|----|------------|-----------------|
| NTH-01 | 08 | Per-pass time budgets (timing model) |
| NTH-02 | 09 | A7 bridge prose quote context conflation |
| NTH-03 | 10 | S-08 heading spacing not in gate |
| NTH-04 | 12 | Addition/BECAUSE tests not defined in prompt (in TC SKILL file) |
| NTH-05 | 12 | TC warning system W-prefixes (binary rules are better anyway) |
| NTH-06 | 12 | Channel ownership map (pass-based works) |
| NTH-07 | 12 | Phased reveal protocol (anti-skimming alternatives deployed) |
| NTH-08 | 13 | C-11/MC-08 duplicate removal |

---

## PRIORITY ANALYSIS

### Top 5 IMPORTANT Gaps by Execution Risk

**Rank 1: IMP-01 (Gate 3 CP typo)**
If agents read "CP-01 through CP-04" (Communication Protocol) instead of "C-01 through C-04"
(Compositional), Gate 3 checks the WRONG rules. Builders may pass a gate that should have
failed on compositional minimums. This is a direct execution error risk.

**Rank 2: IMP-02 (S-09/S-11 not in B10 or programmatic audit)**
Max spacing 96px is the ceiling-experiment failure root cause. Without self-check enforcement,
builders may produce void-inducing margins. This directly risks the DO NOT SHIP verdict.

**Rank 3: IMP-05 (P-04 self-scroll not in B10)**
Visual verification before file write was identified in ceiling failure forensics. Without it,
void regions invisible to code inspection pass through to the PA audit.

**Rank 4: IMP-04 (Gate 1 doesn't specify 1620px skeleton threshold)**
The two-threshold model is nuanced. If Gate 1 only checks the final 2160px threshold, skeletal
void that would have failed the stricter check passes Gate 1 and proceeds to mechanism deployment
where it becomes harder to fix.

**Rank 5: IMP-10 (Skeleton selection criteria missing)**
Without criteria, the team-lead makes a judgment call on which skeleton "wins." This is the
type of decision the binary-rule architecture explicitly avoids. A poor skeleton selection
propagates void problems into all downstream passes.

### Gaps Already Addressed (cross-reference notes)

The following items from validation files 08-13 were flagged as gaps but are CONFIRMED
RESOLVED in the FINAL prompt v2:
- BG-01 through BG-07 (all 7 blocking gaps)
- HP-01 through HP-10 (all 10 high-priority gaps)
- E-17 through E-22 (5 of 8 minor gaps applied)
- B11 (Content Transformation section)
- B12 (Recovery Protocols section)
- C5 (Gate-then-Ranking Protocol)
- C6 (PA-to-TC Fix Routing)
- Gate 0.5 (Content Quality gate)

---

## RECOMMENDED INSERTABLE TEXT (CRITICAL/IMPORTANT Items)

### Fix IMP-01: Gate 3 CP typo

In `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`, Section C3, Gate 3 line:

Find: `CP-01 through CP-04. MC self-check`
Replace: `C-01 through C-04 (compositional minimums). MC self-check`

### Fix IMP-02: S-09/S-11 in B10 self-check

Add to B10 self-check after the S-08 line:
```
[ ] S-09/S-11: No CSS margin or padding > 96px   (computed styles check)
```
Programmatic verification:
```javascript
// Add to programmatic audit in C4
// S-09/S-11 check:
document.querySelectorAll('*').forEach(el => {
  const s = window.getComputedStyle(el);
  ['marginTop','marginBottom','paddingTop','paddingBottom'].forEach(p => {
    if (parseFloat(s[p]) > 96) console.warn('S-09/S-11 VIOLATION:', p, s[p], el);
  });
});
```

### Fix IMP-03: S-03 in programmatic audit

Add to programmatic audit spec (after token compliance):
```javascript
// S-03: Header height check
const hdr = document.querySelector('header');
const h = hdr ? hdr.getBoundingClientRect().height : 0;
const vp = window.innerHeight;
const pct = (h/vp*100).toFixed(1);
console.log('S-03 Header:', pct + '% (WARN>=20%, ABORT>=25%)');
```

### Fix IMP-04: Gate 1 skeleton void threshold

In C3 Gate 1, add:
```
S-10 skeleton: No void > 1620px at this stage (final threshold 2160px applies at Gate 5).
```

### Fix IMP-05: P-04 in B10 self-check

Add to B10 self-check (after the last CCS item):
```
[ ] P-04: Self-scroll confirmed -- scrolled full page in browser, every viewport position checked
```

### Fix IMP-06: Gate 0 estimate label

In C3 Gate 0, append:
```
(ESTIMATE from content inventory -- spatial ratios are projections, not measurements)
```

### Fix IMP-07: Reader Proxy (optional)

Add to C1 after Gate 4:
```
READER PROXY (recommended, Sonnet): Reads page cold, zero design context.
  Answers: "What is this page about? Would I keep scrolling? What did I feel at scroll 50%?"
  Writes 1-paragraph experiential report. Cost: ~15 min. Informs metaphor coherence decision.
```

### Fix IMP-10: Skeleton selection criteria

Add to C1 Pass 1 (Embedded Auditor instructions):
```
SKELETON SELECTION CRITERIA (Embedded Auditor reports, team-lead decides):
  Primary: S-02 ratio (higher wins; < 5% difference = tie)
  Secondary: S-03 header % (lower wins; < 5% difference = tie)
  Tiebreaker: S-05 section completeness (more complete wins)
```

### Fix IMP-11: SC-03 verification method

Add to SC-03 rule:
```
SC-03 verification: Planner populates 5x7 matrix in 03-build-plan.md with planned
(scale, channel) pairs. Unplanned CSS does not count. Target: >= 30 planned cells.
```

### Fix IMP-12/13/14: Accessibility and responsive rules

Add to B7 Process or B2 Soul:
```
U-11. @media (prefers-reduced-motion: no-preference) { /* all transitions */ }
U-12. @media print { ... } (typographic simplification, expand max-width, hide decorative)
S-16. >= 2 responsive breakpoints: 768px minimum. Single-column at 768px, CPL 45-80 maintained.
      Verify: @media queries present and DOM reflows at viewport 768px.
```

### Fix IMP-15: COULD-BE-BETTER severity

In C5 SEVERITY SYSTEM, add:
```
COULD-BE-BETTER: minor improvement opportunity; does not affect ship/no-ship decision.
  Report with suggestion only. No fix required.
```

---

## OVERALL ASSESSMENT

The FINAL prompt (v2) successfully resolved all 7 BLOCKING and all 10 HIGH-PRIORITY gaps from
the flagship validation reports. The 4 reports that previously had 100% coverage (03, 04, 08,
18) remain covered. The 3 most critical losses from file 12 (gate-then-ranking, PA-to-TC routing,
dual severity) are now addressed via C5 and C6.

**What remains:**
- 15 IMPORTANT gaps (quality-affecting but not execution-blocking)
- 8 NICE-TO-HAVE gaps (minor improvements)

**Top 3 highest-leverage remaining fixes:**
1. IMP-01 (Gate 3 CP typo) -- execution error risk, 1-minute fix
2. IMP-02 (S-09/S-11 in B10) -- void catastrophe prevention, 3-minute fix
3. IMP-05 (P-04 self-scroll in B10) -- ceiling failure prevention, 1-minute fix

**Assessment:** The FINAL prompt is execution-ready for the flagship experiment with the 7
BLOCKING fixes applied. The 15 remaining IMPORTANT gaps represent quality improvements, not
showstoppers. The 3 highest-leverage fixes above can be applied in under 5 minutes and would
further reduce the probability of the specific failure modes that killed the Ceiling experiment.

---

**END SCAN F**
**Files cross-referenced:** 6 (08-13)
**Total gaps identified:** 23 (0 CRITICAL, 15 IMPORTANT, 8 NICE-TO-HAVE)
**Confirmed RESOLVED in FINAL v2:** All 7 BLOCKING + all 10 HIGH-PRIORITY from file 13
**Insertable text provided for:** 15 of 15 IMPORTANT gaps
