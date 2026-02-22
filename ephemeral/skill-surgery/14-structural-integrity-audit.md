# 14 -- Structural Integrity Audit (Post-Surgery Pipeline)

**Auditor:** integrity-auditor (Opus 4.6)
**Date:** 2026-02-20
**Mandate:** Verify the ENTIRE post-surgery pipeline will NOT reproduce the 7 failure modes that the surgery was designed to prevent.

**Files read (complete):**
1. `~/.claude/skills/build-page/SKILL.md` (483 lines)
2. `~/.claude/skills/tension-composition/SKILL.md` (1,616 lines, post-trim+enrichment)
3. `~/.claude/skills/perceptual-auditing/SKILL.md` (993 lines, post-trim)
4. `design-system/pipeline/conventions-brief.md` (565 lines)
5. `design-system/pipeline/gate-runner.md` (1,159 lines)
6. `ephemeral/skill-surgery/07-fresh-eyes-audit.md` (357 lines)
7. `ephemeral/skill-surgery/08-failure-mode-coverage.md` (476 lines)
8. `ephemeral/skill-surgery/01-prerequisites-report.md`
9. `ephemeral/skill-surgery/02-pa-trim-report.md`
10. `ephemeral/skill-surgery/03-tc-enrichment-report.md`

---

## 1. COMPLETE PIPELINE EXECUTION TRACE

### Data Flow Map

```
User triggers /build-page <content-path>
│
├─ Step 1: INTAKE
│  Orchestrator reads build-page SKILL.md (483 lines)
│  Creates output dir: ephemeral/pages/[content-slug]/
│
├─ Step 2: TC SKILL INVOCATION
│  Spawns 1 Opus agent with TC spawn prompt
│  TC agent reads IN ORDER:
│    1. ~/.claude/skills/tension-composition/SKILL.md (1,616 lines)
│    2. [content-file-path]
│    3. design-system/compositional-core/grammar/mechanism-catalog.md
│    4. design-system/compositional-core/identity/prohibitions.md   ← ADDED by B-01 fix
│    5. design-system/compositional-core/vocabulary/tokens.css      ← ADDED by B-01 fix
│  Executes Phases 0-4 (Assessment, Multi-Axis, Tension, Metaphor, Mechanisms)
│  Outputs: [output-dir]/_tc-brief.md (~80-120 lines, 8 sections post-enrichment)
│  Orchestrator verifies: _tc-brief.md exists, contains all 5+ sections
│
├─ Step 3: BUILDER DEPLOYMENT
│  Spawns 1 Opus builder agent
│  Builder reads IN ORDER:
│    1. [output-dir]/_tc-brief.md                         ← PRIMACY (compositional foundation)
│    2. design-system/pipeline/conventions-brief.md       ← WORLD MODEL (565 lines)
│    3. [content-file-path]                               ← THE MATERIAL
│  Reference files (consult as needed):
│    4. design-system/compositional-core/grammar/mechanism-catalog.md
│    5. design-system/compositional-core/components/components.css
│    6. design-system/compositional-core/vocabulary/tokens.css
│    7. design-system/compositional-core/identity/prohibitions.md  ← READ LAST before CSS
│  Builder process: Phase A (internalize TC brief) → Phase B (plan: conviction, tables)
│    → Phase C (build: HTML+CSS with 4 checkpoints) → Phase D (self-verify)
│  Outputs: output.html, _build-log.md, _cascade-value-table.md
│
├─ Step 4: GATE RUNNER (Orchestrator runs directly)
│  4.1: Start HTTP server (python3 -m http.server 8765)
│  4.2: Navigate to http://localhost:8765/output.html via Playwright
│  4.2a: Inject animation disabler + await document.fonts.ready
│  4.2b: Run SC-00 (zone selector validation) FIRST
│       If SC-00 FAIL → skip per-zone gates, report overall FAIL
│  4.2c: Run GROUP 1 (identity: SC-01-05) in parallel
│  4.2d: Run GROUP 2 (structure: SC-06-08, SC-12, DG-3) in parallel
│  4.2e: Run GROUP 3 (perception: SC-09-11, SC-14-15) sequentially
│  4.2f: Run GROUP 4 (compositional: SC-13, SC-13B, SC-16) sequentially
│  4.2g: Run GROUP 5 (deliverable: DG-1, DG-2, DG-4) after GROUP 4
│  4.3: Write _gate-results.json (all gates with measured values)
│  4.4: Check deliverable gates (DG-1 through DG-4) + behavioral gates (BG-1, BG-2)
│  If ANY blocking gate fails → compose fix instructions → jump to Step 7
│
├─ Step 5: SCREENSHOT CAPTURE (Orchestrator runs directly)
│  For each viewport [1440, 1024, 768]:
│    Set viewport → inject animation disabler → await fonts
│    → full-page cold screenshot → scroll-through at 80% steps
│  Save to [output-dir]/_screenshots/
│  Stop HTTP server
│
├─ Step 5.5: LOCK SHEET (Orchestrator generates)
│  Categorize elements: LOCKED (Soul) / LOCKED (Research) / CHALLENGEABLE (Builder)
│  Write to [output-dir]/_lock-sheet.md
│  Routes to WEAVER ONLY (not auditors)
│
├─ Step 6: PA DEPLOYMENT
│  6.1: Spawn 9 Opus auditors in parallel (A through I)
│       Each receives: PA SKILL.md reference, assigned question text (pasted in full),
│       screenshot file paths. ZERO build context.
│  6.2: Question assignments:
│       A: PA-01,03,04,05,18,19,20,45,65,67 (10 questions)
│       B: PA-02,06,07,08,29,70 (6 questions)
│       C: PA-09,10,11,30,31,32,33,50,51,52,53,64,66 (13 questions)
│       D: PA-12,13,34,35,36,69,62 (7 questions)
│       E: PA-14,15,37,38,39,63 (6 questions)
│       F: PA-16,17,24,40,41,60,61 (7 questions)
│       G: PA-25,42,43,44,68 (5 questions)
│       H: PA-21,22,23,46,47 (5 questions)
│       I: PA-26,27,28,48 (4 questions)
│       TOTAL: 63 questions assigned
│       MISSING: PA-55, PA-56 (sub-perceptual detection) ← NOT ASSIGNED
│  6.3: After all 9 auditors complete → spawn 1 Opus weaver
│       Weaver reads: 9 auditor reports, _gate-results.json, _lock-sheet.md
│       Produces: _pa-report.md (6-section synthesis), _pa-matrix.md (question matrix)
│       Verdict: SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE
│
├─ Step 7: FIX CYCLE (if weaver verdict = FIX)
│  7.1: Compose fix-instructions-cycle-N.md with:
│       - Gate failures (measured values, thresholds, CSS fixes, brief_section references)
│       - Compositional context from build log (planned coherence directions)
│       - PA top-5 issues (directional, not prescriptive)
│       - Tier 5 gaps with auditor reasons
│       - DO NOT TOUCH list
│  7.2: Send to SAME builder with framing: "Re-read _tc-brief.md AND conviction statement"
│  7.3: Builder applies fixes → re-run gates → re-capture screenshots
│       Cycle 2-3: 2 PA auditors (A + C) with focused questions + Tier 5
│  7.4: Max 3 cycles. After 3 → ESCALATE to user.
│       TC re-invocation if PA-44 AND PA-68 both fail across 2+ cycles
│
├─ Step 8: SUCCESS BAR
│  PA-05 >= 3.5 AND Tier 5 >= 7/9 AND all mandatory criteria MET → SHIP
│
└─ Step 9: OUTPUT SUMMARY
   Write _run-manifest.md + report to user
```

### Critical File Reference Chain

| Build Stage | Files Read | Lines | Who Reads |
|-------------|-----------|-------|-----------|
| TC Derivation | TC SKILL + content + mechanism-catalog + prohibitions + tokens | ~2,886 | TC agent |
| Building | TC brief + conventions-brief + content + 4 reference files | ~2,812 | Builder |
| Gate Verification | output.html (via Playwright) + gate-runner.md (reference) | ~1,159 | Orchestrator |
| PA Audit | PA SKILL + screenshots (visual) | ~993 | Each auditor |
| Weaving | 9 reports + gate results + lock sheet | ~2,000+ | Weaver |
| Fix Cycle | Fix instructions + TC brief + build log + conventions-brief | ~700 | Same builder |

---

## 2. PER-FAILURE-MODE PREVENTION ASSESSMENT

### FM-1: Guardrail Factory (7.9:1 Ratio)

**Prevention status: MOSTLY PREVENTED**

**How:**
- Conventions brief has been fully rewritten. My section-by-section analysis:
  - Sections 1, 2, 9B, 12 = GUARDRAIL (~104 lines)
  - Sections 3, 4, 5, 7, 8, 10, 11, 13, 14, PROCESS, CONVICTION = PLAYBOOK (~330 lines)
  - Estimated ratio: **3.2:1 PLAYBOOK-to-GUARDRAIL** (inverted from 7.9:1)
- Gate runner includes `brief_section` references routing builder back to conventions-brief sections during fix cycles
- TC-ENRICH-01 adds recipe-format Section 6 to TC brief with verb taxonomy (Find/Delete/Replace/Add/Set)
- TC-ENRICH-03 adds per-mechanism CSS recipe hints

**Remaining path to recurrence:**
- TC brief Section 4 (SELECTED MECHANISMS) is still fundamentally a LIST of 14+ mechanisms, even with 1-line CSS recipes. The builder receives mechanisms as a SET not a SEQUENCE. TC-ENRICH-01 Section 6 (recipe) partially addresses this by keying mechanisms to zones, but the mechanism catalog itself (869 lines) remains "consult as needed."
- Probability of recurrence: **LOW** (the conventions brief transformation is substantial)

**Specific change to close gap:** TC Section 6 recipe should include mechanism deployment ORDER keyed to zones (e.g., "Zone 1: deploy M3 border-left + M7 backgrounds first, then M12 component grid").

---

### FM-2: Builder Isolation (75-Line Cap)

**Prevention status: MOSTLY PREVENTED**

**How:**
- The 75-line cap is eliminated. Builder now receives:
  - TC brief: ~80-120 lines (post-enrichment, up from ~50)
  - Conventions brief: 565 lines
  - Reference files: ~2,000+ lines available
  - Total: ~2,812 lines (37x the previous 75-line cap)
- TC brief is read FIRST (primacy effect = highest absorption)
- TC-ENRICH-10 embeds mechanism catalog impact profiles in TC brief
- TC-ENRICH-13 adds 3 builder absorption anchors at brief end (recency)
- B-01 fix adds prohibitions.md + tokens.css to TC agent's read list

**Remaining path to recurrence:**
- ACCESS is solved. ABSORPTION is the remaining risk. The conventions brief is 565 lines; critical PROCESS content (sequenced build steps, boundary CSS recipe) starts at ~line 500 in the middle-dead-zone.
- Reference files (mechanism-catalog 869 lines, components.css ~31KB) are "consult as needed" = effectively optional under time pressure.
- Probability of recurrence: **LOW-MEDIUM** (access solved, absorption risk remains)

**Specific change to close gap:** Add 15-20 line BUILDER QUICK-START at top of conventions-brief summarizing the build process before the theory sections.

---

### FM-3: Binary Compliance Without Quality

**Prevention status: PARTIALLY PREVENTED**

**How:**
- TC skill derives a structural metaphor (quality generator) with 6-criterion rubric (Phase 3.5G, score >= 12/18)
- Conventions brief Section 3 (RICHNESS = density x restraint x confidence) provides quality formula
- Conventions brief Section 9B sets quality FLOOR above gate thresholds (>= 14 mechanisms, >= 800 CSS lines, avg >= 4 channels)
- PA Tier 5 (PA-60 through PA-68) detects compositional depth above floor
- PA-ENRICH-05/06 distinguish DEPLOYED from ACTIVE channels
- TC-ENRICH-01 recipe format with target values above thresholds

**Remaining path to recurrence:**
- The fundamental gap persists: **detection is post-build, generation is pre-build.** The pipeline detects quality (PA) and verifies floors (gates) but has no mechanism that GENERATES above-floor quality during the build itself. The builder must internally decide to exceed thresholds based on the conventions brief's examples and the TC brief's recipe.
- A builder that writes exactly-at-threshold CSS (15 RGB bg delta, 3 channels, 2px typography delta) will pass all gates and produce a boring page. Only PA catches this, and only after the build is complete.
- Probability of recurrence: **MEDIUM** (detection strong, generation depends on builder quality)

**Specific change to close gap:** TC brief Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS) should include TARGET ranges, not just directions. E.g., "primary drama boundary: 25-35 RGB bg delta" not just "visible bg shift."

---

### FM-4: Programmatic != Perceptual

**Prevention status: MOSTLY PREVENTED**

**How:**
- SC-13 includes perception thresholds per channel (>= 15 RGB chromatic, >= 2px typographic, >= 24px spatial)
- SC-14 catches sub-perceptual CSS: letter-spacing < 0.025em, adjacent bg delta < 15 RGB, 3+ values clustered within 2px
- SC-14 was PURPOSE-DESIGNED for this failure mode -- it catches THE #1 flagship failure (22% of CSS invisible)
- PA-ENRICH-05 distinguishes DEPLOYED from ACTIVE channels
- PA-ENRICH-06 verifies magnitude exceeds perception thresholds
- Conventions brief Section 2 (PERCEPTION) educates the builder on the physics of visibility
- TC-ENRICH-06 updated all perception threshold values and duplicated into Phase 4.0 guardrails

**Remaining path to recurrence:**
- Behavioral/Material channels (5, 6) have no magnitude thresholds in SC-13. A hover opacity change of 0.01 "counts" as a behavioral shift.
- SC-13 measures ADJACENT zone transitions, not CUMULATIVE arc. A page with alternating 15-RGB shifts has perceptible transitions but no visible arc.
- PA catches arc absence (PA-62, PA-65) but gates do not.
- Probability of recurrence: **LOW** (SC-14 is the definitive fix for the flagship failure mode)

**Specific change to close gap:** None critical. The behavioral/material channel gap is minor.

---

### FM-5: Continuation Bias (Builder Can't Self-Revise)

**Prevention status: PARTIALLY PREVENTED**

**How:**
- Build-page Section 7 provides structured fix cycle with 3 types (mechanical/structural/compositional)
- TC-ENRICH-05 adds fix cycle re-invocation protocol (TYPE A/B/C classification)
- PA-ENRICH-08 classifies each top-5 issue by fix type
- PA-ENRICH-09 diagnoses metaphor failure root causes
- Gate runner `brief_section` references route builder back to conventions-brief during fixes
- Section 7.2 instructs builder to "Re-read _tc-brief.md AND conviction statement"
- TC re-invocation path (Section 7.4) when metaphor itself is the problem

**Remaining path to recurrence:**
- "Re-read _tc-brief.md" is a behavioral instruction. The builder MAY skim rather than internalize. Not structurally enforceable.
- Fix cycle PA drops from 9 auditors to 2 (A + C). The flagship's catastrophic void was caught by 9/9 auditors but MISSED by a previous 2-auditor audit. Systemic issues require breadth.
- The "same builder" rule preserves memory but also preserves bias. Builder will extend approach rather than revise it.
- Probability of recurrence: **MEDIUM** (behavioral mitigations, not structural)

**Specific change to close gap:** (1) Fix cycle 2 should use 4 auditors (A, C, D, F) not 2. (2) Add "REVISION PROMPT" to fix instructions: "If starting fresh with the same metaphor, would you make the same zone decisions? If not, state what you'd change."

---

### FM-6: Meta-Output Ratio (660:1)

**Prevention status: FULLY PREVENTED**

**How:**
- Operational infrastructure: ~6,929 lines across 9 pipeline files
- Per-run output: ~2,300-4,700 lines
- Ratio: ~2:1 (well within 20:1 threshold)
- Per-agent load: TC agent ~2,886 lines, Builder ~2,812 lines, PA auditors ~993 lines each
- Surgery trims reduced TC by ~390 lines and PA by ~328 lines (net of enrichment additions)
- The 660:1 ratio was an artifact of including the ENTIRE analytical corpus (50+ agent research)

**Remaining path to recurrence:** None in the operational pipeline. If future research produces more analytical files in ephemeral/, the analytical corpus grows, but it is separate from the operational pipeline.

**Probability of recurrence: NONE**

---

### FM-7: TC Gap (TC Output Doesn't Reach Builder)

**Prevention status: MOSTLY PREVENTED**

**How:**
- Build-page Step 2 spawns a dedicated TC Opus agent
- TC brief is the builder's FIRST file (primacy = highest absorption)
- TC brief now has 8 sections post-enrichment (Sections 1-5 specification + Section 6 recipe + Section 7 PA expectations + Section 8 absorption anchors)
- B-01 fix ensures TC agent has soul constraint awareness (prohibitions.md + tokens.css)
- TC-ENRICH-03 adds CSS recipe hints per mechanism
- TC-ENRICH-10 adds mechanism catalog impact profiles
- Orchestrator verification: "Verify _tc-brief.md exists and contains all 5 sections"

**Remaining path to recurrence:**
- 30:1 compression from TC skill (1,616 lines) to TC brief (~80-120 lines) -- critical derivation reasoning is lost
- No builder->TC communication channel. Builder cannot ask TC agent for clarification.
- The brief is WRITE-ONCE. If builder misinterprets the metaphor, the only recovery is TC re-invocation after 2+ fix cycle failures.
- Probability of recurrence: **LOW** (TC invocation is structural, compression is inherent)

**Specific change to close gap:** None critical. The builder->TC channel is a topology limitation.

---

## 3. SURGERY FINDINGS CHECK

### Fresh-Eyes Audit (07-fresh-eyes-audit.md) -- 10 BLOCKING Findings

| # | Finding | Severity | Status in Current Pipeline |
|---|---------|----------|---------------------------|
| 1 | Token compliance guidance has no destination after Phase 4.9 trim | BLOCKING | **STILL A GAP.** Prerequisites report (01) does not mention token compliance addition to conventions-brief. The TC trim removed Phase 4.9 (tokenization self-check). No replacement guidance was added to conventions-brief.md or builder spawn prompt. Token compliance at middle-tier experiment was 66.5%. Without guidance, this will not improve. |
| 2 | Font-weight threshold inconsistency TC >=100 vs PA >=200 | BLOCKING | **ADDRESSED.** TC enrichment report (03) confirms: "Font-weight set to >=200 (canonical, consistent with PA)." Both TC and PA now use >=200. |
| 3 | TC-ENRICH-01 must SUPPLEMENT not REPLACE Phase 4.5 sections | BLOCKING | **ADDRESSED.** TC enrichment report (03) confirms: "Sections 1-5 preserved intact. Sections 6-8 added alongside." Recipe is Section 6, existing sections preserved. |
| 4 | TC brief risks growing to 115+ lines, 2x target | SIGNIFICANT | **ADDRESSED.** TC enrichment report (03) confirms: "Changed from 40-60 to 80-120 lines in both the format header and completion criteria." |
| 5 | TC-ENRICH-20 (verb taxonomy) is hidden dependency of TC-ENRICH-01 | SIGNIFICANT | **ADDRESSED.** TC enrichment report (03) confirms: "Verb list folded into TC-ENRICH-01: Tier 1 (Find, Delete, Replace, Add, Set, Read) and Tier 2 (Select, Deploy, Assess, Compare) included in recipe section." |
| 6 | PA-ENRICH-04 (S-09 stacking) violates Language HARD BLOCK | SIGNIFICANT | **UNKNOWN.** PA enrichment is still in progress (task #5/22). Cannot verify without reading the enriched PA SKILL.md. If PA-ENRICH-04 was applied as arithmetic measurement, it violates the hard block. If reframed as perceptual detection, it is fine. |
| 7 | Enrichment internal ordering: apply 02-14 before 01 | SIGNIFICANT | **ADDRESSED.** TC enrichment report (03) confirms: "APPLIED LAST as instructed." All 02-14 enrichments applied before TC-ENRICH-01. |
| 8 | PA-ENRICH-01 needs warm palette footnote | MODERATE | **ADDRESSED.** TC enrichment report (03) confirms: "Warm palette note included: 'For warm-palette systems (R>=G>=B), effective perceptual threshold is 1.3x: background >=20 RGB.'" Applied in TC. PA enrichment status pending. |
| 9 | S-09 stacking limit (120px) + breathing zone minimum (48px) arithmetic tension | MODERATE | **NOT ADDRESSED.** No file in the pipeline clarifies whether the 120px limit includes or excludes section padding. At a boundary with structural border: 48px + 3px + 16px + 48px = 115px before any margin. This arithmetic tension is documented but unresolved. |
| 10 | Missing before/after TC brief comparison | MODERATE | **NOT ADDRESSED.** No pre/post TC brief comparison was conducted. This is the cheapest validation possible but was not scheduled. |

**Summary: 7/10 ADDRESSED, 1 STILL A GAP (token compliance), 1 UNKNOWN (PA enrichment pending), 1 NOT ADDRESSED (stacking arithmetic).**

---

### Failure Mode Coverage (08-failure-mode-coverage.md) -- 5 Top Gaps

| # | Gap | Status in Current Pipeline |
|---|-----|---------------------------|
| 1 | Conventions brief PROCESS section in dead zone | **NOT ADDRESSED.** PROCESS section remains at ~line 500. No quick-start section added. |
| 2 | Mechanism deployment is a list, not a sequence | **PARTIALLY ADDRESSED.** TC-ENRICH-01 adds zone-keyed recipe (Section 6), but the mechanism catalog integration is still "consult as needed." |
| 3 | No pre-build quality-above-floor generation | **NOT ADDRESSED.** TC brief Section 5 still provides directions, not target values above thresholds. |
| 4 | Reference files effectively optional | **PARTIALLY ADDRESSED.** TC-ENRICH-10 embeds impact profiles in TC brief. But mechanism CSS snippets are 1 line each -- not enough to transfer CSS patterns. |
| 5 | Fix cycle PA reduction (9->2) | **NOT ADDRESSED.** Build-page Section 7.4 still shows 2 auditors for cycles 2-3. |

**Summary: 0/5 FULLY ADDRESSED, 2/5 PARTIALLY ADDRESSED, 3/5 NOT ADDRESSED.**

---

## 4. PIPELINE INTEGRITY CHECKS

### 4.1 File Reference Verification

All file references in build-page SKILL.md verified to exist:

| Reference | File Exists? |
|-----------|-------------|
| `~/.claude/skills/tension-composition/SKILL.md` | YES |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | YES |
| `design-system/compositional-core/identity/prohibitions.md` | YES |
| `design-system/compositional-core/vocabulary/tokens.css` | YES |
| `design-system/pipeline/conventions-brief.md` | YES |
| `design-system/compositional-core/components/components.css` | YES |
| `design-system/pipeline/gate-runner.md` | YES |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | YES |
| `design-system/pipeline/flagship-pa-questions.md` | YES |

**Result: ALL file references valid.** No dangling references.

### 4.2 Section Number Cross-References

Build-page Section 7.1 fix instructions reference "conventions-brief.md Section [N]". Conventions-brief sections:
1. IDENTITY, 2. PERCEPTION, 3. RICHNESS, 4. MULTI-COHERENCE, 5. FRACTAL ECHO, 6. UNIFIED METAPHOR, 7. TRANSITION GRAMMAR, 8. CSS VOCABULARY, 9. CREATIVE AUTHORITY, 9B. QUALITY FLOOR, 10. COMPOSITIONAL MEMORY, 11. FIVE QUESTIONS, 12. RESTRAINT LIST, 13. ACCESSIBILITY, 14. RESPONSIVE, plus CONVICTION CARD, PROCESS, Builder Warnings.

Gate-runner.md `brief_section` references:
- SC-09, SC-14 sub-3 → Section 2 (PERCEPTION) -- **VALID**
- SC-10 → Section 2 (PERCEPTION) -- **VALID**
- SC-11 → Section 5 (FRACTAL ECHO) -- **VALID**
- SC-13, SC-13B → Section 4 (MULTI-COHERENCE) -- **VALID**
- SC-14 sub-1,2 → Section 2 (PERCEPTION) -- **VALID**
- SC-15 → Section 4 (MULTI-COHERENCE) -- **VALID**
- SC-01 → Section 1 (IDENTITY) -- **VALID**
- SC-02-05 → Section 1 (IDENTITY) + Section 12 (RESTRAINT LIST) -- **VALID**
- SC-06-08, DG-3 → Section 5 (FRACTAL ECHO) -- **VALID**

**Result: ALL section references valid.**

### 4.3 Gate Count Reconciliation

| Source | Count Stated | Actual | Match? |
|--------|-------------|--------|--------|
| build-page SKILL.md line 160 | "16 composition-critical gates" | 16 in table (SC-00 through SC-15) | YES (table matches) |
| build-page SKILL.md line 162 | "22 gates with proven JS" (referring to gate-runner.md) | 24 gate definitions in gate-runner.md | **NO -- says 22, has 24** |
| gate-runner.md line 1143 | "1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22" | 18 SC + 4 DG + 2 BG = 24 definitions | **MISMATCH -- 22 vs 24** |
| gate-runner.md line 1144 | "Tier Pre: 1, Tier 1: 15, Tier 2: 4, Tier 3: 2" | 1+15+4+2 = 22 | Internally consistent |

**Explanation:** The "22" count in gate-runner.md treats DG-1 and DG-2 as part of the "17 blocking" group, and the separate "Tier 2: 4" line counts DG-1 through DG-4 by tier. The confusion is that DG-3 and DG-4 are in BOTH "17 blocking" AND "Tier 2: 4". The total is 22 unique gates, with 24 section headings because some gates appear in both tier and enforcement categorizations.

Actually, verifying more carefully: 1 pre-gate (SC-00) + 15 Tier 1 programmatic (SC-01 through SC-15, minus SC-13B and SC-16 which are advisory) = 16 blocking SC gates. Plus DG-3 (blocking) = 17. So the "17 blocking" = 15 SC blocking + DG-3 + DG-4 = 17, but that's only possible if all of SC-01 through SC-15 are blocking. SC-13B and SC-16 are advisory, so blocking SC gates = SC-01, SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08, SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15 = 15. Plus DG-1 (blocking), DG-2 (blocking), DG-3 (blocking), DG-4 (blocking) = 4. Total blocking = 15 + 4 = 19. But the summary says 17 blocking. Something does not reconcile.

**Result: Gate count documentation is INTERNALLY INCONSISTENT.** The build-page says "16" in its table and "22" referencing gate-runner. Gate-runner's own totals line says "22" but the breakdown doesn't add up cleanly. This is a documentation clarity issue, not a functional issue -- the actual gate definitions are complete and the JS code is present for all gates.

### 4.4 Question Count Reconciliation

| Source | Count | Actual |
|--------|-------|--------|
| build-page SKILL.md line 334 | "63 questions x 9 auditors" | 63 questions assigned in auditor table |
| build-page SKILL.md line 412 | "All 63" (cycle 1) | 63 |
| PA SKILL.md line 644 | "all 65 questions" (Mode 4) | 65 unique question IDs in PA SKILL.md |
| PA SKILL.md line 357 | "Total question count: 65 (54 standard + 2 sub-perceptual + 9 Tier 5)" | 65 |

**MISMATCH: build-page assigns 63 questions. PA SKILL.md defines 65.**

**Missing questions: PA-55 (sub-perceptual CSS detection, should go to Auditor C) and PA-56 (micro-typography detection, should go to Auditor B).**

PA SKILL.md line 357 explicitly says: "Assign PA-55 to Auditor C (Spatial+Proportion), PA-56 to Auditor B (Readability+Typography)."

Build-page's auditor table does NOT include these assignments. **This is a structural integrity issue -- 2 sub-perceptual detection questions designed specifically to catch the flagship's #1 failure mode are not assigned to any auditor.**

### 4.5 Perception Threshold Consistency

Checking threshold values across all 5 pipeline files:

| Property | TC SKILL (R-MC-03) | TC Phase 4.0 | Conventions Brief S2 | Gate Runner SC-13/14 | PA SKILL |
|----------|-------------------|--------------|---------------------|---------------------|----------|
| Background | >=15 RGB | >=15 RGB | >=15 RGB | >=15 RGB (SC-09, SC-14) | >=15 RGB |
| Font-size | >=2px | >=2px | >=2px | >=2px (SC-13) | >=2px |
| Letter-spacing | >=0.03em | >=0.03em | >=0.03em | >=0.025em floor (SC-14) | >=0.03em delta |
| Spatial (padding) | >=24px | >=24px | >=24px | >=24px (SC-13) | >=24px |
| Font-weight | >=200 | >=200 | Not stated | >=100 (SC-13) | >=200 (if enrichment applied) |
| Line-height | >=0.15 | >=0.15 | Not stated | Not gated | >=0.15 |
| Border-width | >=1px | >=1px | "1px / 3px / 4px" | >=1px (SC-15) | >=1px |
| Stacked gap | <=120px | <=120px | <=120px | <=120px (SC-10) | <=120px |
| Warm palette multiplier | 1.3x (>=20 RGB) | 1.3x (>=20 RGB) | Not stated | Not applied | Not stated |

**INCONSISTENCY FOUND:**
1. **Font-weight threshold:** TC SKILL says >=200, gate-runner SC-13 says >=100. The fresh-eyes audit (07) identified this exact inconsistency and recommended >=200 as canonical. TC enrichment applied >=200. But **gate-runner.md was NOT updated** -- SC-13 line 516 still checks `Math.abs(fw1 - fw2) >= 100`.
2. **Warm palette multiplier:** Applied to TC threshold tables but NOT to gate-runner or conventions-brief. The gate runner uses the standard 15 RGB threshold, not the warm-palette 20 RGB.
3. **Letter-spacing floor vs delta:** SC-14 checks floor (>=0.025em minimum) while TC/PA check delta (>=0.03em between zones). These are complementary, not contradictory.

### 4.6 Dangling References to Trimmed Content

Checking for references to content removed in trims:

| Reference Pattern | Files Checked | Found? |
|-------------------|--------------|--------|
| "Mode 1" / "Mode 2" / "Mode 3" | conventions-brief.md | NO (clean) |
| "Phase 5" / "Standalone" in TC spawn | build-page SKILL.md | NO -- spawn says "Phases 0-4" (correct) |
| Removed TC Phase 4.7B, 4.8, 4.9 references | build-page SKILL.md | NO (build-page only references TC output, not internal phases) |
| Lock sheet format references | PA SKILL.md | "Research sovereignty... is managed by /build-page" (clean redirect at line 963) |
| Modes 1-3 in PA SKILL.md | PA SKILL.md | "Modes 1-3 (Embedded, Quick, Standard) are available for standalone use outside the /build-page pipeline" -- 2-line stub, clean |

**Result: No dangling references found to trimmed content.**

---

## 5. TOP 10 STRUCTURAL INTEGRITY ISSUES (Ranked by Severity)

### Issue 1: PA-55 and PA-56 NOT ASSIGNED to auditors [BLOCKING]

**Severity: CRITICAL**
**Impact:** PA-55 (sub-perceptual CSS detection) and PA-56 (micro-typography detection) are the TWO questions specifically designed to catch the flagship's dominant failure mode (22% invisible CSS). They exist in PA SKILL.md with explicit assignment instructions (PA-55 → Auditor C, PA-56 → Auditor B). But build-page's auditor assignment table (lines 288-296) does NOT include them.
**Result:** The pipeline's most important perceptual defense against the #1 failure mode is absent from the execution path. Build-page says "63 questions," PA SKILL says "65 questions." The 2 missing are the sub-perceptual pair.
**Fix:** Add PA-55 to Auditor C's assignment list and PA-56 to Auditor B's assignment list in build-page SKILL.md Section 6.2. Update "63 questions" references to "65 questions."

### Issue 2: Font-weight threshold inconsistency between TC/PA (>=200) and gate-runner (>=100) [SIGNIFICANT]

**Severity: HIGH**
**Impact:** The fresh-eyes audit (07) identified this as BLOCKING and recommended >=200 as canonical. TC enrichment applied >=200. But gate-runner.md SC-13 line 516 still checks `>=100`. A font-weight shift from 400 to 500 (100-unit delta) passes SC-13 but is below the perceptual threshold per TC/PA. This recreates the programmatic-perceptual gap (FM-4) for this specific channel.
**Fix:** Update gate-runner.md SC-13 font-weight threshold from >=100 to >=200.

### Issue 3: Token compliance guidance has no destination [SIGNIFICANT]

**Severity: HIGH**
**Impact:** Fresh-eyes audit finding #1 (BLOCKING). TC Phase 4.9 (tokenization self-check, ~44 lines) was trimmed. No replacement guidance was added to conventions-brief.md or the builder spawn prompt. The middle-tier experiment achieved 66.5% token compliance. Without guidance, builders have no instruction to use CSS variables from tokens.css rather than hardcoded values.
**Fix:** Add ~15-line token compliance protocol to conventions-brief.md (e.g., "Use var(--color-primary) not #E83025. Use var(--space-12) not 48px. Check tokens.css for available variables before writing hardcoded values.").

### Issue 4: Gate count documentation inconsistency [MODERATE]

**Severity: MODERATE**
**Impact:** Build-page says "16 composition-critical gates" in its table, "22 gates" referencing gate-runner. Gate-runner says "22" in its summary but has 24 section headings. The actual gates are ALL defined with working JS -- the confusion is purely in documentation counts. Not a functional issue but makes the pipeline harder to audit and maintain.
**Fix:** Reconcile all three counts: (a) build-page table lists 16, (b) build-page text references 22+, (c) gate-runner defines 24. Pick one canonical counting method and state it consistently.

### Issue 5: Conventions-brief PROCESS section in absorption dead zone [MODERATE]

**Severity: MODERATE**
**Impact:** The builder's actual methodology (sequenced steps, boundary CSS recipe, verification pauses) starts at ~line 500 of the 565-line conventions brief. This is the middle-dead-zone where LLM absorption is lowest. The PROCESS section is the most actionable content for the builder.
**Fix:** Add 15-20 line BUILDER QUICK-START at top of conventions-brief (before Section 1) summarizing the build methodology. The full PROCESS section remains at its current location for depth.

### Issue 6: S-09 stacking arithmetic tension unresolved [MODERATE]

**Severity: MODERATE**
**Impact:** At a section boundary with structural borders: section-bottom-padding (48px min) + border (3px) + margin (16px) + next-section-top-padding (48px min) = 115px minimum. This approaches the 120px stacking limit with almost no room for dividers or additional spacing. The fresh-eyes audit flagged this (finding #9) but no resolution was applied.
**Fix:** Clarify in conventions-brief Section 2 that the 120px stacking limit is MEASURED (element bounding box gap), not SUMMED (CSS value addition). Alternatively, adjust individual padding guidance at boundaries to account for accumulation.

### Issue 7: No pre/post TC brief comparison validation [LOW-MODERATE]

**Severity: LOW-MODERATE**
**Impact:** Fresh-eyes audit finding #10. The surgery modified TC's output format (8 sections, recipe format, perception checks) without empirically validating that the post-surgery TC brief is better than the pre-surgery brief. This is the cheapest possible validation (2 TC agent runs, ~10 minutes) but was not scheduled.
**Fix:** Before first /build-page run, produce 1 TC brief using the current (post-surgery) TC skill on the middle-tier experiment content. Compare against the original middle-tier TC brief for: specificity of CSS directions, mechanism selection quality, recipe format presence.

### Issue 8: Warm palette multiplier not in gate-runner [LOW-MODERATE]

**Severity: LOW-MODERATE**
**Impact:** TC SKILL.md includes the warm-palette note (effective bg threshold 1.3x = >=20 RGB). But gate-runner SC-09 still uses the standard >=15 RGB threshold. For the KortAI warm palette (R>=G>=B, narrow band), 15 RGB differences may be imperceptible. The gate could pass backgrounds that look identical.
**Fix:** Add warm palette multiplier to SC-09 in gate-runner.md: effective threshold >=20 RGB when both backgrounds satisfy R>=G>=B.

### Issue 9: Fix cycle PA reduction (9→2) retains risk [LOW-MODERATE]

**Severity: LOW-MODERATE**
**Impact:** Fix cycles 2-3 use only 2 PA auditors (A + C). The flagship's catastrophic void (9/9 auditors flagged) was MISSED by a previous 2-PA audit. Systemic issues require breadth of perspective.
**Fix:** Cycle 2: use 4 auditors (A, C, D, F). Cycle 3: use 2 auditors (A, C). Cost: ~20 min extra per cycle 2 fix cycle.

### Issue 10: PA-ENRICH-04 (S-09 stacking) potential Language HARD BLOCK violation [LOW]

**Severity: LOW (pending PA enrichment verification)**
**Impact:** If PA-ENRICH-04 was applied as arithmetic gap measurement ("sum section-bottom-padding + divider margins..."), it violates the Language HARD BLOCK that prohibits auditors from using CSS vocabulary. Should be framed as perceptual detection ("does the gap feel like a designed pause or accidental void?").
**Fix:** Verify PA enrichment when task #5/22 completes. If arithmetic, reframe to perceptual.

---

## 6. SHIP / NO-SHIP RECOMMENDATION

### Verdict: SHIP WITH FIXES

**Rationale:**

The post-surgery pipeline is fundamentally sound. The 7 failure modes are addressed at different levels:

| Failure Mode | Prevention Level |
|-------------|-----------------|
| FM-1 Guardrail Factory | MOSTLY PREVENTED |
| FM-2 Builder Isolation | MOSTLY PREVENTED |
| FM-3 Binary Compliance | PARTIALLY PREVENTED |
| FM-4 Programmatic != Perceptual | MOSTLY PREVENTED |
| FM-5 Continuation Bias | PARTIALLY PREVENTED |
| FM-6 Meta-Output Ratio | FULLY PREVENTED |
| FM-7 TC Gap | MOSTLY PREVENTED |

**No failure mode is UNADDRESSED.** The worst ratings are "PARTIALLY PREVENTED" (FM-3, FM-5), and both of these are inherently difficult to solve structurally (quality generation requires creative intelligence, continuation bias is a fundamental LLM limitation).

**However, 3 fixes are required before the first /build-page run:**

1. **[CRITICAL] Add PA-55 and PA-56 to auditor assignments** in build-page SKILL.md Section 6.2. These are the sub-perceptual detection questions designed for the #1 failure mode. Without them, the pipeline has a designed defense that is never deployed. ~2 minutes to fix.

2. **[HIGH] Update gate-runner SC-13 font-weight threshold from >=100 to >=200.** The canonical value is >=200 per the fresh-eyes audit and TC enrichment. The gate-runner was not updated. ~1 minute to fix.

3. **[HIGH] Add token compliance guidance to conventions-brief.md.** ~15 lines instructing the builder to use CSS variables from tokens.css. Without this, the 66.5% token compliance from the middle-tier experiment will persist. ~5 minutes to fix.

**After these 3 fixes, the pipeline is structurally complete and ready for its first validation run.**

The remaining issues (Issues 4-10) are improvements, not blockers. They can be addressed after the first /build-page validation run provides empirical data on actual pipeline performance.

---

## APPENDIX: Complete File Inventory (Post-Surgery)

| File | Current Lines | Role in Pipeline |
|------|-------------|-----------------|
| `~/.claude/skills/build-page/SKILL.md` | 483 | Orchestration (Steps 1-9) |
| `~/.claude/skills/tension-composition/SKILL.md` | 1,616 | TC derivation (Phases 0-4) |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 993 | PA evaluation (65 questions) |
| `design-system/pipeline/conventions-brief.md` | 565 | Builder world-model |
| `design-system/pipeline/gate-runner.md` | 1,159 | 22+ gate definitions with JS |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | ~869 | Mechanism vocabulary |
| `design-system/compositional-core/components/components.css` | ~31KB | Component library |
| `design-system/compositional-core/vocabulary/tokens.css` | 174 | Token values |
| `design-system/compositional-core/identity/prohibitions.md` | ~353 | Soul constraints |
| `design-system/pipeline/flagship-pa-questions.md` | exists | Tier 5 question text |
| **TOTAL** | **~6,212+** | |
