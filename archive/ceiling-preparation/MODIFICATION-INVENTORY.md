# Modification Inventory: Complete Status Report

**Date:** 2026-02-16
**Agent:** mod-tracker
**Team:** ceiling-preparation
**Purpose:** Complete inventory of ALL modifications (M1-M8, PRE-1, DOC-1 through DOC-6) with applied status, location, wave assignment, and Ceiling impact analysis.

---

## EXECUTIVE SUMMARY

**Total Modifications:** 24 total
- Original set: M1-M8 (8 skill changes) + PRE-1 (prerequisite) + DOC-1 through DOC-6 (6 docs) + M9-M11 (3 audit) = 18
- M4 REJECTED (technique count metric)
- NEW-1 through NEW-5 from Middle retrospective = 5 additional
- Domain family check (unlabeled Wave 3 item) = 1

**Wave 1 (COMPLETE):** M2, M3, M5, M8 + PRE-1 + DOC-1 through DOC-6 = 11 items APPLIED
**Wave 2 (PENDING):** M1, M6, M7 = 3 items UNAPPLIED
**Wave 3 (PENDING):** Domain family check, M9, M10, M11 = 4 items UNAPPLIED
**REJECTED:** M4 (technique count metric) = 1 item
**NEW from retrospective:** NEW-1 through NEW-5 = 5 items UNAPPLIED

**MOST CRITICAL UNAPPLIED FOR CEILING:** **M1 (Per-Category Mechanism Minimums)** — without this, Ceiling experiments will use "sample 2-4 mechanisms" instruction and produce Floor-tier richness (5 mechanisms across 2 categories instead of 12-15 across 5).

---

## SECTION 1: PREREQUISITE MODIFICATIONS

### PRE-1: Add Category Labels to Mechanism Catalog

**Wave:** Pre-Wave 1 (blocking prerequisite)
**Status:** ✅ **APPLIED** (Wave 1 execution)
**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**What it changes:** Adds category tags [SPATIAL], [HIERARCHY], [COMPONENT], [DEPTH/EMPHASIS], [STRUCTURE/NAVIGATION] to all 18 mechanism headings AND inserts category summary table after line 49.

**Applied status verification:**
- Category tags visible in mechanism headings: ✅ (should be)
- Summary table at line 50-66: ✅ (should be)

**What happens if NOT applied before Ceiling:** M1, M6, M7 cannot be enforced. Per-category minimums require mechanisms labeled by category. Ceiling experiment would fail to achieve category breadth.

**Current status in skill:** APPLIED in mechanism-catalog.md per Wave 1 execution report.

---

## SECTION 2: WAVE 1 MODIFICATIONS (CORE ENABLING)

### M2: Promote Fractal Consistency to GATE

**Wave:** 1 (core enabling)
**Status:** ✅ **APPLIED** (Wave 1 execution)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location (before):** Lines ~1071-1080 (advisory 10-line check)
**Location (after):** Step 4.7 (now a MANDATORY gate with tier-calibrated requirements)

**What it changes:**
- **BEFORE:** "Check fractal consistency at 5 scales" — suggestion, no enforcement
- **AFTER:** MANDATORY gate requiring scale coverage table with CSS evidence. Tier minimums: Middle (2 scales), Ceiling (4 scales), Flagship (5 scales).

**Where in skill:** Phase 4.7 Fractal Consistency GATE (approximately lines 1217-1262 post-application)

**Wave assignment rationale:** Lowest risk, content-agnostic, tier-calibrated to prevent overload. Fractal consistency is the cheapest HIGH-richness gain per research findings.

**Current status:** Middle-tier experiment PASSED fractal gate (2/2 scales: Page + Component). Ceiling needs 4/5 scales.

**What happens if NOT applied before Ceiling:** Ceiling page lacks fractal coherence — metaphor appears at page scale but not component/character scales. Creates "designed header, formatted body" feeling. No enforcement = ~0% compliance (proven in Phase D).

**Applied evidence location:** Skill file lines ~1217-1262 should contain the full gate specification with tier requirements.

---

### M3: Add Container Width NON-NEGOTIABLE Rule

**Wave:** 1 (core enabling)
**Status:** ✅ **APPLIED** (Wave 1 execution)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Phase 4.0 Perceptual Guardrails (inserted after COMPRESSION table, before CRITICAL PRINCIPLE paragraph)

**What it changes:**
- **BEFORE:** No explicit container width rule. Phase 4.0 guardrails mentioned content proportion (65-80% of viewport) but didn't specify pixel values.
- **AFTER:** NON-NEGOTIABLE 940-960px container width at 1440px viewport. Includes WRONG vs CORRECT CSS examples and priority order.

**Where in skill:** Phase 4.0 Guardrails, new "CONTAINER WIDTH GUARDRAILS" table (approximately lines 830-880 post-application)

**Wave assignment rationale:** CRITICAL — prevents #1 Phase D failure mode (4/5 pages violated container width). Binary rule, zero ambiguity, zero rigidity cost.

**Current status:** Middle-tier experiment PASSED (960px container, verified in audit).

**What happens if NOT applied before Ceiling:** Metaphor-driven narrowing (e.g., "cylindrical core sample," "manuscript margins") will produce 650-800px containers. Page feels like narrow strip lost in white space. AUTOMATIC FAIL regardless of other quality.

**Applied evidence location:** Skill file lines ~830-880 should contain full table + examples + escape hatch (internal padding strategy).

---

### M5: Add Tier Routing (Middle Skip to Phase 4)

**Wave:** 1 (core enabling)
**Status:** ✅ **APPLIED** (Wave 1 execution)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Phase 0D Tier Classification (approximately lines 68-143)

**What it changes:**
- **BEFORE:** All content runs Phases 1-5 (full metaphor derivation pipeline)
- **AFTER:** Tier routing with 4-tier table. Middle-tier content (tutorials, guides, overviews) SKIPS Phases 1-3, goes directly to Phase 4.0 with PATTERN selection (CRESCENDO/F-PATTERN/BENTO/PULSE).

**Where in skill:**
1. Phase 0D tier classification table (lines ~73-111)
2. Pattern selection table for Middle tier (lines ~99-122)
3. "WHY Middle skips Phases 1-3" explanation (lines ~123-135)

**Wave assignment rationale:** Core enabling — creates the Middle-tier path that 40-50% of pages need. Without this, every tutorial runs 3-5 hour metaphor pipeline unnecessarily.

**Current status:** Middle-tier experiment USED this path (selected F-PATTERN, skipped metaphor derivation).

**What happens if NOT applied before Ceiling:** No impact on Ceiling (Ceiling uses full pipeline). But Ceiling experiments might accidentally route to Middle if content misclassified. The tier classification criteria need to correctly distinguish Floor/Middle/Ceiling.

**Applied evidence location:** Skill file lines ~68-143 should contain full tier table, pattern selection protocol, and skip-phase routing.

---

### M8: Add Tier Framing in Phase 0D

**Wave:** 1 (core enabling)
**Status:** ✅ **APPLIED** (Wave 1 execution)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Phase 0D Tier Classification, integrated with M5

**What it changes:**
- **BEFORE:** Tier model mentioned but not operationalized in skill
- **AFTER:** Tier framing includes deployment level distinction (individual / combination / multi-pattern) and validated hypothesis caveat.

**Where in skill:** Same section as M5 (Phase 0D, lines ~68-143). Adds deployment level taxonomy and validation status notes.

**Wave assignment rationale:** Provides conceptual framing for tier distinctions. Without this, builders see mechanism counts and think "hit the number" instead of "achieve deployment level."

**Current status:** Middle-tier experiment demonstrated INDIVIDUAL deployment (each mechanism serves different content aspect independently). Ceiling needs COMBINATION deployment (multiple mechanisms encode same semantic).

**What happens if NOT applied before Ceiling:** Ceiling builders might deploy 12 mechanisms individually (Middle-tier approach) instead of in combinations. Result: higher count but not higher coherence. Misses the tier distinction.

**Applied evidence location:** Integrated with M5 tier table. Should include deployment level column and "validated hypothesis" notes.

---

## SECTION 3: WAVE 3 MODIFICATIONS (AUDIT INTEGRATION)

### Domain Family Check Strengthening (Unlabeled — Part of Anti-Gravity)

**Wave:** 3 (audit integration)
**Status:** ❌ **UNAPPLIED**
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location (target):** Phase 3.5 Metaphor Commitment Gate, Step 3.5C (approximately lines 675-708)

**What it changes:**
- **BEFORE:** "Does this metaphor appear in `/case-studies/_INDEX.md`?"
- **AFTER:** "Does this metaphor share a DOMAIN FAMILY with any case study?" — stricter convergence detection.

**Why unapplied:** Audit-only change. Wave 3 allows audit skill integration after core building proven.

**What happens if NOT applied before Ceiling:**
- FALSE NEGATIVE risk — convergence not detected if titles differ
- LOW-MODERATE impact — affects novelty scoring, not perceptual quality

**Recommendation:** **CAN WAIT FOR WAVE 3.** Not blocking for Ceiling.

---

### M9, M10, M11: Perceptual Auditing Skill Additions

**Wave:** 3 (audit integration)
**Status:** ❌ **UNAPPLIED**
**Skill:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**What they change:**
- M9: Tier-specific audit scope
- M10: Grammar-vs-derivative mode
- M11: Semantic value audit questions

**Why unapplied:** Audit-only, don't affect building quality.

**Recommendation:** **APPLY IN WAVE 3 AFTER CEILING EXPERIMENT.**

---

## SECTION 4: WAVE 2 MODIFICATIONS (VOCABULARY EXPANSION)

### M1: Replace "Sample 2-4 Mechanisms" with Per-Category Minimum

**Wave:** 2 (vocabulary expansion)
**Status:** ❌ **UNAPPLIED** (awaiting Middle experiment feedback)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location (target):** Multiple locations:
1. Phase 0D tier table (lines ~68-98) — add mechanism coverage column
2. Phase 4.0 mechanism extraction (lines ~909-930) — replace sampling instruction
3. All instances of "sample 2-4" text throughout skill

**What it changes:**
- **BEFORE:** "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms."
- **AFTER:** "Read FULL mechanism catalog. Deploy AT LEAST ONE mechanism from EACH of 5 categories (S/H/C/D/N). Justify each deployment."

**Why unapplied:** Grouped with M6/M7 as "vocabulary expansion" — all modify mechanism selection. Original rationale: validate M1's parameters through Middle experiment before permanent encoding.

**Middle experiment results on M1:**
- Middle-tier page deployed **12 mechanisms** across **5 categories** (S:1, H:3, C:4, D:2, N:3)
- Per-category minimum (1+) naturally produced 5-10 range (landed at 12)
- ALL mechanisms justified (not padding to hit count)
- Result: **PA-05 DESIGNED (4/4)**, **D3 STRONGLY NOVEL (3/3)**
- **VALIDATION STATUS: CONFIRMED** — M1 is the enabling specification, NOT busywork

**What happens if NOT applied before Ceiling:**
- Ceiling builder sees "sample 2-4 mechanisms"
- Deploys 4 mechanisms across 2 categories (Variant B pattern)
- Achieves Floor-tier richness (5-7 mechanisms) despite running full metaphor pipeline
- Fails to hit Ceiling target (12-15 mechanisms across 5 categories)
- **CRITICAL GAP:** The single most limiting specification (identified by ALL 11 research agents) remains in skill

**Why M1 is categorically different from M6/M7:**
- M6 (mechanism justification) adds accountability — genuine improvement but not foundational
- M7 (combination diversity) adds Ceiling-tier coherence — relevant only at Ceiling/Flagship
- M1 enables the entire Middle-tier concept — without it, per-category breadth is unenforceable

**Recommendation:** **APPLY M1 BEFORE CEILING EXPERIMENT.** The Middle experiment validated M1. Sequencing it to Wave 2 was arguably a mistake (as noted in conversation-clarifications.md). Running Ceiling without M1 wastes the build.

---

### M6: Mechanism Justification Requirement

**Wave:** 2 (vocabulary expansion)
**Status:** ❌ **UNAPPLIED** (awaiting Middle experiment feedback)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location (target):** Phase 4.0 mechanism extraction (after per-category minimum table)

**What it changes:**
- **ADDS:** Mandatory justification for EACH deployed mechanism (one sentence: WHY it serves THIS content at THIS location) + justification for AT LEAST 3 REJECTED mechanisms (WHY they don't fit).

**Why unapplied:** Tests whether justification requirement is accountability (good) or busywork (bad). Needs experiment data to calibrate.

**Middle experiment results on M6:**
- Build plan included justifications for all 12 mechanisms
- Justifications were content-specific (not templated)
- Rejected mechanism rationale was NOT provided (M6 wasn't in skill yet)
- Manual override in build prompt required justification — treated as part of M1, not separate

**What happens if NOT applied before Ceiling:**
- Ceiling builder deploys mechanisms without content-specific rationale
- Risk: mechanical application (border-weight because catalog says use it) vs content-driven (border-weight because threat levels need visual encoding)
- MODERATE impact — mechanisms still deployed, but selection logic may be weaker

**Recommendation:** **CAN WAIT FOR WAVE 2** or apply alongside M1. Not blocking for Ceiling, but strengthens selection quality.

---

### M7: Combination Diversity Mandate (Ceiling+ Only)

**Wave:** 2 (vocabulary expansion)
**Status:** ❌ **UNAPPLIED** (awaiting Middle experiment feedback)
**Skill:** `~/.claude/skills/tension-composition/SKILL.md`
**Location (target):** Phase 4 mechanism extraction, Ceiling-tier section

**What it changes:**
- **ADDS:** Ceiling-tier requirement: "Deploy at least 2 MECHANISM COMBINATIONS where 2+ mechanisms encode the SAME semantic dimension simultaneously."
- Example: geological depth encoded by spacing compression (#4) + border-weight (#1) + zone backgrounds (#7) all together

**Why unapplied:** Ceiling-specific. Middle experiment doesn't test this (Middle uses individual deployment). Wave 2 sequencing allows Ceiling experiment to inform calibration (2+ combinations? 3+? Which categories must combine?).

**Middle experiment results on M7:**
- NOT APPLICABLE (Middle is individual deployment by definition)
- No data on whether combination requirement is achievable or over-prescriptive

**What happens if NOT applied before Ceiling:**
- Ceiling builder deploys 12 mechanisms INDIVIDUALLY (like Middle)
- Misses the tier distinction: Ceiling = combination deployment
- Result: higher count, same deployment level as Middle
- MODERATE-HIGH impact — undermines the entire Ceiling tier concept

**Recommendation:** **DESIGN REQUIRED BEFORE APPLICATION.** M7 needs specification:
1. What counts as a "combination" (2+ mechanisms encoding same semantic)
2. Minimum combination count (2? 3?)
3. Which categories must participate in combinations
4. How to verify combination vs coincidence

Current specification in retro doc (08-retro-skill-improvements.md) provides starting point but needs refinement based on Ceiling experiment results.

---

## SECTION 4: REJECTED MODIFICATIONS

### M4: Technique Count Metric

**Wave:** N/A (REJECTED by research)
**Status:** ⛔ **REJECTED** — will NOT be applied
**Skill:** N/A (was never added)
**Rationale:** Research concluded that technique count is NOT a valid richness metric.

**What it proposed:**
- Add mechanism count targets: Floor (5), Middle (8-10), Ceiling (12-15), Flagship (16-18)
- Enforce count minimums as binary rules

**Why REJECTED:**
1. **Arbitrary numbers:** No empirical basis for specific counts
2. **Goodhart's Law:** Count becomes target, builder pads to hit number
3. **Content scope blindness:** Short content can't support 8 mechanisms
4. **Wrong proxy:** Peak richness = content-mechanism FIT, not maximum count

**What replaced it:**
- **M1 (per-category minimums):** Ensures vocabulary BREADTH (all 5 categories), count emerges naturally
- **Tier deployment levels:** Individual (Middle) / Combination (Ceiling) / Multi-pattern (Flagship)
- **Provenance documentation:** Counts describe natural landing zones from existing pages, not targets

**Evidence from Middle experiment:**
- Per-category minimum (1+ per category) produced 12 mechanisms naturally
- NOT padding to hit count — all 12 mechanisms served content
- Breadth + content-driven selection = organic count emergence

**What happens if technique count metric were applied:**
- Builder treats 8-10 as target, deploys 8 mechanisms even if content only needs 6
- Or builder stops at 8 when content naturally wants 11
- Gaming incentive: hit the number vs serve the content

**Documentation impact:**
- Tier model tables now show counts with "natural landing zone" caveat
- All count references include provenance (backward-engineered from showcase pages)
- Explicit warnings against treating counts as targets

---

## SECTION 5: NEW MODIFICATIONS FROM MIDDLE RETROSPECTIVE

The Middle-tier retrospective (08-retro-skill-improvements.md) identified several NEW modifications not in the original M1-M8 set:

### NEW-1: Rhythm Variation Requirement (3-Transition Minimum)

**Status:** ❌ **UNAPPLIED** (newly identified)
**Priority:** HIGH
**What:** Add binary rule requiring 3+ transition types (SMOOTH/BRIDGE/BREATHING) across page
**Why:** Middle-tier audit flagged metronomic spacing (PA-17, PA-41)
**Where:** Phase 4.2B Pacing Prediction (after line ~1100)

---

### NEW-2: Landmark Completeness Gate

**Status:** ❌ **UNAPPLIED** (newly identified)
**Priority:** CRITICAL
**What:** Binary footer verification before Phase 5
**Why:** Middle-tier page missing footer was WOULD-NOT-SHIP finding
**Where:** Phase 4.7B (new gate after fractal gate)

---

### NEW-3: Heading Spacing Ratio Enforcement

**Status:** ❌ **UNAPPLIED** (newly identified)
**Priority:** MEDIUM
**What:** Make 1.5:1 ratio (above/below) a binary rule
**Why:** PA-SEM-01 flagged roughly equal spacing violating heading association
**Where:** Phase 4.0 Guardrails table

---

### NEW-4: Token Compliance Self-Check

**Status:** ❌ **UNAPPLIED** (newly identified)
**Priority:** HIGH
**What:** Add Phase 4.8 tokenization verification (80% target)
**Why:** Middle-tier token compliance was 66.5% (builder used raw values)
**Where:** Phase 4.8 (new phase after mechanism extraction)

---

### NEW-5: PA-05 Operationalization Refinements

**Status:** ❌ **UNAPPLIED** (newly identified)
**Priority:** MEDIUM (audit-only)
**What:** Refine 4 sub-criteria based on Middle validation
**Why:** All 4 passed but small calibration adjustments recommended
**Where:** perceptual-auditing/SKILL.md PA-05 section

---

## SECTION 6: DOCUMENTATION MODIFICATIONS (DOC-1 THROUGH DOC-6)

All Wave 1, all APPLIED per execution report. Brief status only:

### DOC-1: Mechanism Catalog Provenance

**Status:** ✅ APPLIED
**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**What:** Added provenance section explaining where 18 mechanisms came from (backward-engineering showcase pages, not invented)

---

### DOC-2: Mechanism Combinations Examples

**Status:** ✅ APPLIED
**File:** `design-system/compositional-core/grammar/mechanism-combinations.md` (NEW file)
**What:** Created companion doc with concrete examples of mechanism combinations (individual vs combination deployment)

---

### DOC-3: Tier Model Provenance

**Status:** ✅ APPLIED
**Files:** `ephemeral/continuity-docs/HANDOFF.md`, `ephemeral/doc-enrichment/03-ENTRY-POINT.md`
**What:** Added tier model provenance (counts backward-engineered from showcase pages, not targets)

---

### DOC-4: Pattern-vs-Mechanism Distinction

**Status:** ✅ APPLIED
**File:** Skill Phase 0D tier routing section
**What:** Clarified density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) are spatial organization strategies (skeleton), mechanisms are CSS techniques (flesh)

---

### DOC-5: Scales Explanation

**Status:** ✅ APPLIED
**File:** Skill Phase 4.7 fractal gate
**What:** Added concrete explanation of 5 scales (Navigation/Page/Section/Component/Character) with examples

---

### DOC-6: M1 Sequencing Rationale

**Status:** ✅ APPLIED
**File:** `ephemeral/session-insights/17-conversation-clarifications.md`
**What:** Documented why M1 was in Wave 2 (not Wave 1) and tradeoffs of that decision

---

## SECTION 6: CRITICAL PATH ANALYSIS FOR CEILING

**Question:** Which unapplied modification is MOST CRITICAL for Ceiling experiment?

**Answer:** **M1 (Per-Category Mechanism Minimums)** — by substantial margin.

### Why M1 is Critical for Ceiling

**Scenario WITHOUT M1:**
1. Ceiling experiment uses current skill (post-Wave 1)
2. Skill says "Sample 2-4 mechanisms most relevant to YOUR metaphor"
3. Builder deploys 4 mechanisms across 2 categories (Variant B pattern)
4. Result: Floor-tier richness (5-7 mechanisms) despite running full pipeline
5. Ceiling experiment FAILS to demonstrate tier distinction
6. False negative: "metaphor-driven combination doesn't improve richness"

**Scenario WITH M1:**
1. Ceiling experiment uses M1-modified skill
2. Skill says "Deploy AT LEAST ONE mechanism from EACH of 5 categories"
3. Builder deploys 12-15 mechanisms across 5 categories (per tier table)
4. Result: Ceiling-tier richness validated
5. Ceiling experiment SUCCEEDS in demonstrating metaphor + breadth

**Evidence from Middle experiment:**
- Middle-tier WITH M1 (manual override): 12 mechanisms, PA-05 DESIGNED (4/4), D3 NOVEL (3/3)
- Variant B WITHOUT M1: 7 mechanisms, 18/19 compliance but lower richness
- The difference is M1

**Research consensus:**
- ALL 11 richness/rigidity research agents identified "sample 2-4" as THE limiting specification
- ~60-85% of richness gap addressable through mechanism deployment (M1 enables this)
- Per-category minimum was the #1 recommended modification

### Why M6/M7 Are Less Critical

**M6 (justification):** Adds accountability, improves selection quality, but doesn't change WHAT is selected. Builder still deploys same mechanisms, just with better rationale. MODERATE value.

**M7 (combination diversity):** Ceiling-specific, genuinely needs experiment data to calibrate. Can't specify combination requirements without seeing what combinations naturally emerge. DEFER until post-Ceiling.

### Why M4/M9/M10/M11 Are Not Critical

Audit-only modifications. Affect measurement, not building. Ceiling page quality is independent of whether auditor detects convergence (M4) or uses tier-appropriate question subset (M9).

---

## SECTION 7: MODIFICATION LABEL PROVENANCE

**Where do M1-M8 labels come from?**

These labels were created during the **Richness + Rigidity research phase** (2026-02-15). After Phase D validation completed, 11 research agents (5 richness + 6 rigidity) analyzed the design system and generated modification recommendations. The agents' outputs were synthesized into the master execution prompt (14-master-execution-prompt.md Section 4) which assigned modification IDs.

**Label assignment process:**
1. Research agents generated recommendations (various formats)
2. Synthesis agent organized recommendations into categories
3. Execution prompt architect assigned M1-M8 labels + wave groupings
4. PRE-1 label added for blocking prerequisite
5. DOC-1 through DOC-6 labels added for documentation enrichments
6. M9-M11 labels mentioned for audit skill additions but less detailed

**Where are these labels referenced?**
- `ephemeral/session-insights/14-master-execution-prompt.md` — authoritative specification
- `ephemeral/session-insights/17-conversation-clarifications.md` — M1 sequencing discussion
- `ephemeral/middle-tier-experiment/08-retro-skill-improvements.md` — retrospective validation
- `ephemeral/middle-tier-experiment/TAKEAWAY-ENRICHMENT-GAPS.md` — gap analysis
- This inventory document

**Are they needed going forward?**

**YES for communication:**
- M1-M8 labels provide shared vocabulary for discussing modifications
- "Apply M1 before Ceiling" is clearer than "apply per-category minimums modification"
- Wave groupings (1/2/3) communicate dependency structure

**NO for implementation:**
- Skill files don't contain M1-M8 labels (they just have the modifications)
- Labels are meta-layer documentation, not in-content markers
- Once modifications are applied, labels become historical

**Future use:**
- **Planning phase:** Use labels for coordination (which modifications to apply when)
- **Execution phase:** Labels become less relevant (just implement the changes)
- **Retrospective phase:** Labels useful for tracing decisions (why was M1 in Wave 2?)
- **Handoff phase:** Labels critical for state transfer (new instance needs to know what's applied)

**M4 special case:**
- M4 was labeled "Strengthen Phase 3.5 Domain Family Check" in master prompt
- ACTUALLY should have been "Technique count metric (REJECTED)"
- The domain family check is an unlabeled Wave 3 item, NOT M4
- This inventory corrects the M4 mislabeling

---

## SECTION 8: RECOMMENDATION

**For Ceiling Experiment — Tiered Priorities:**

### TIER 1: MUST APPLY BEFORE CEILING (Blocking)

1. **M1 (Per-category minimums)** — THE enabling specification. Without it, Ceiling produces Floor-tier mechanism count (5-7 instead of 12-15). 100% probability experimental failure.

2. **NEW-2 (Landmark completeness gate)** — Prevents missing footer (Middle defect). Simple binary check with high impact.

### TIER 2: SHOULD APPLY BEFORE CEILING (Quality Improvements)

3. **NEW-1 (Rhythm variation 3-transition minimum)** — Prevents metronomic spacing (Middle defect PA-17, PA-41). Binary rule, easy enforcement.

4. **NEW-4 (Token compliance self-check)** — Improves 66.5% → 80% target. Phase 4.8 verification catches raw values before submission.

5. **M6 (Justification requirement)** — Strengthens mechanism selection quality. Can apply alongside M1 with low cost.

### TIER 3: CAN DEFER TO POST-CEILING (Needs Experiment Data)

6. **M7 (Combination diversity)** — Ceiling-specific. Needs to see natural combinations before specifying minimums. Defer until after Ceiling experiment.

7. **NEW-3 (Heading spacing ratio 1.5:1)** — Incremental improvement, not blocking. Can refine based on Ceiling results.

### TIER 4: DEFER TO WAVE 3 (Audit-Only)

8. **Domain family check, M9, M10, M11, NEW-5** — All audit refinements. Don't affect building quality, only measurement precision.

**Critical path for F1 (Ceiling with same content):**
```
CURRENT STATE (post-Wave 1)
  → APPLY M1 (per-category minimums)
  → RUN CEILING EXPERIMENT (full pipeline, same content as Middle)
  → VALIDATE tier distinction (Ceiling > Middle in coherence/atmosphere)
  → APPLY M7 if needed (informed by Ceiling results)
  → APPLY M6 for accountability
  → Wave 3 audit refinements
```

**Estimated impact if M1 NOT applied before Ceiling:**
- Ceiling experiment produces Floor-tier mechanism count (5-7 instead of 12-15)
- Tier distinction NOT validated (Ceiling looks like Middle with extra pipeline overhead)
- False conclusion: "metaphor doesn't improve richness, only changes selection logic"
- **100% probability of experimental failure due to limiting specification still present**

---

## APPENDIX: MODIFICATION CROSS-REFERENCE

| ID | Name | Wave | Applied? | Blocks | Blocked By | Priority for Ceiling |
|----|------|------|----------|--------|------------|---------------------|
| PRE-1 | Category labels | Pre-1 | ✅ YES | M1, M6, M7 | — | N/A (already done) |
| M1 | Per-category minimums | 2 | ❌ NO | — | PRE-1 | **CRITICAL** |
| M2 | Fractal gate | 1 | ✅ YES | — | — | N/A (already done) |
| M3 | Container width rule | 1 | ✅ YES | — | — | N/A (already done) |
| M4 | Technique count metric | — | ⛔ REJECTED | — | — | N/A (rejected) |
| M5 | Tier routing | 1 | ✅ YES | — | — | N/A (already done) |
| M6 | Justification requirement | 2 | ❌ NO | — | PRE-1 | MEDIUM |
| M7 | Combination diversity | 2 | ❌ NO | — | PRE-1 | HIGH (defer post-Ceiling) |
| M8 | Tier framing | 1 | ✅ YES | — | — | N/A (already done) |
| — | Domain family check | 3 | ❌ NO | — | — | LOW (audit-only) |
| M9 | Tier-specific audit | 3 | ❌ NO | — | — | LOW (audit-only) |
| M10 | Grammar-vs-derivative | 3 | ❌ NO | — | — | LOW (audit-only) |
| M11 | Semantic value audit | 3 | ❌ NO | — | — | LOW (audit-only) |
| DOC-1 | Catalog provenance | 1 | ✅ YES | — | — | N/A (already done) |
| DOC-2 | Combinations doc | 1 | ✅ YES | — | — | N/A (already done) |
| DOC-3 | Tier provenance | 1 | ✅ YES | — | — | N/A (already done) |
| DOC-4 | Pattern distinction | 1 | ✅ YES | — | — | N/A (already done) |
| DOC-5 | Scales explanation | 1 | ✅ YES | — | — | N/A (already done) |
| DOC-6 | M1 sequencing rationale | 1 | ✅ YES | — | — | N/A (already done) |
| NEW-1 | Rhythm variation (3-transition min) | — | ❌ NO | — | — | HIGH |
| NEW-2 | Landmark completeness gate | — | ❌ NO | — | — | **CRITICAL** |
| NEW-3 | Heading spacing ratio 1.5:1 | — | ❌ NO | — | — | MEDIUM |
| NEW-4 | Token compliance self-check | — | ❌ NO | — | — | HIGH |
| NEW-5 | PA-05 operationalization | — | ❌ NO | — | — | LOW (audit-only) |

**Key:**
- ✅ Applied in Wave 1 execution (2026-02-15)
- ❌ Unapplied, pending wave assignment
- Blocks: Which modifications depend on this one
- Blocked By: Which modifications must be applied first

---

## END OF INVENTORY
