# Phase D Evaluation System — Plain-Language Explanation

**Date:** 2026-02-14
**Analyst:** eval-analyst
**Purpose:** Explain how Phase D scoring worked and what each variant achieved

---

## What Was Being Tested

Phase D tested whether a design system library (compositional-core) is complete enough for agents to build high-quality pages. Five pages were built:

1. **Track 1 (Assembly):** Builder assembled a page using ONLY library components
2. **Variant A (Skill-Only):** Builder used tension-composition skill WITHOUT library components
3. **Variant B (Weak Permission):** Library available but not pushed
4. **Variant C (Anti-Gravity):** Maximum anti-gravity enforcement to prevent copying library patterns
5. **Variant D (Library-First):** Builder read library FIRST (intentional pattern-matching baseline)

All 5 pages rendered the same content (staff engineer mental model discussion), but used different approaches.

---

## How Evaluation Worked

### Three Evaluation Systems

**1. Programmatic DOM Audit (19 Binary Checks)**

Automated checks run on HTML/CSS to verify compliance with design system rules:

**Soul Constraints (6 checks):**
- S1: All border-radius must be 0 (sharp corners, never rounded)
- S2: No box-shadow anywhere (flat surfaces only)
- S3: No drop-shadow filters
- S4: No pure white (#FFFFFF) or pure black (#000000) in content
- S5: Only 3 fonts allowed (Instrument Serif, Inter, JetBrains Mono)
- S6: No 2px borders (only 0, 1px, 3px, or 4px)

**Guardrails (8 checks):**
- G1: Container width ≥940px at desktop, ≥499px at tablet
- G2: Content padding ≥32px per side
- G3: Label-to-heading gap ≥16px
- G4: Compression ratio ≥40% (deepest/shallowest padding variation)
- G5: Characters per line between 45-80 (readability)
- G6: Line-height ≥1.5 on body text
- G7: Section spacing ≥48px (breathing room)
- G8: Border-radius recheck (catches inheritance issues)

**Token Compliance (3 checks):**
- T1: All colors from defined palette
- T2: All spacing values are multiples of 4px
- T3: Font trinity correctly loaded

**Result:** Each check is PASS/FAIL. A single critical violation fails the whole page.

---

**2. Visual Perceptual Audit (23 Questions)**

Two human judges evaluated pages using the perceptual-auditing skill:

**Tier 1 — MANDATORY Five (ship-blockers):**
- PA-01: What's the first thing that bothers you?
- PA-02: Is any text uncomfortable to read?
- PA-03: Does this feel like one designer made it, or three?
- PA-04: Where does your eye go first? Is that where it SHOULD go?
- PA-05: Would you put your name on this? What would you fix first?

**Tier 2 — Standard Fifteen (quality checks):**
- Readability (PA-06 through PA-08, PA-29)
- Spatial balance (PA-09 through PA-11, PA-30 through PA-33)
- Visual flow (PA-12 through PA-13, PA-34 through PA-36)
- Grid/layout (PA-14 through PA-15, PA-37 through PA-39)
- Consistency (PA-16 through PA-17, PA-40 through PA-41)
- Color/emotion (PA-18 through PA-20)

**Two Judges:**
- **Judge A (extraction-aware):** Knows design system uses sharp edges, warm palette, specific typography — evaluates quality WITHIN that framework
- **Judge B (fresh-eyes):** NO knowledge of design system — evaluates pure perceptual quality

**Result:** Each question is PASS/FAIL or rated on a scale. Judges give ship verdicts (YES/YES WITH RESERVATIONS/NO).

---

**3. Integration Audit (12 Phase D Criteria)**

File-only auditor evaluated process compliance:

- PD-01: Library utilization % (measured CSS lines)
- PD-02: Phase compliance (did builder follow phase sequence?)
- PD-03: Buildability (can library components be assembled?)
- PD-04: Custom property bridging (zone-based component overrides)
- PD-05: Mechanism application (how many of 18 design mechanisms used?)
- PD-06: Divergence check (is metaphor >40% similar to library?)
- PD-07: Metaphor novelty (0-5 scale comparing to 9 library case studies)
- PD-08: Token compliance (% of CSS using tokens.css values)
- PD-09: Variant A isolation (skill-only used zero library?)
- PD-10: Variant B library timing (when did weak-permission access library?)
- PD-11: Phase 3.5 gate completeness (anti-gravity divergence verification)
- PD-12: Component coverage (how many of 9 component families used?)

**Result:** Each criterion is PASS/FAIL/PARTIAL/N/A. Percentage passing determines overall verdict.

---

## The Scoring Results

### Track 1 (Assembly)

**Programmatic:** 11/19 PASS at 1440px (INSTANT FAIL)

**Critical violations:**
- Pure white header background (S4)
- Zero padding on main container (G2)
- 112-132 characters per line — WAY too wide (G5)
- Off-palette colors: gray #808080, wrong shades of green/purple (T1)
- Non-4px-multiple padding on code elements (T2)

**Integration:** 8/8 applicable criteria PASS (100%)

**What this means:** Library components work perfectly when assembled correctly, but this builder didn't follow the "always-load" protocol — didn't read prohibitions.md before building. This is a BUILDER ERROR, not a library gap.

---

### Variant A (Skill-Only, Architectural Blueprint)

**Metaphor:** Multi-view technical drawings (Plan View, Elevation View, Section Cut)

**Programmatic:** 15/19 PASS at 1440px (CONDITIONAL FAIL)

**Only critical violation:** Characters per line ~96 (G5) — container too wide

**Perceptual (Judge A):** 13/20
- Tier 1: 3/5 (black callout box dominates fold, breaks flow)
- Tier 2: 10/15 (pure black breaks warm palette, weight concentrated at top)
- Ship verdict: YES WITH RESERVATIONS

**Integration:** 6/12 PASS (50%)
- ✅ 0% library (expected for skill-only)
- ❌ Only 6 mechanisms (target: 8)
- ❌ Only 2/9 component families (target: 6)

**What this means:** Skill alone CAN produce buildable pages, but missed mechanism/component targets because content was prose-only (no code blocks, tables, diagrams to exercise full inventory).

**Quality issue:** Black callout box violates soul constraint (should use warm palette). Blueprint metaphor is novel (3/5 divergence from library) but execution has perceptual problems.

---

### Variant B (Weak Permission, Scientific Lab)

**Metaphor:** Laboratory calibration protocols (Safety Briefing, Measurement Protocol, Error Analysis)

**Programmatic:** 18/19 PASS at 1440px (BEST COMPLIANCE)

**Only issue:** Characters per line borderline at 80-85 (G5) — needs measurement verification

**Perceptual (Judge A):** 19/20
- Tier 1: 5/5 (nothing immediately bothersome, clear lab metaphor)
- Tier 2: 14/15 (metric boxes slightly cramped)
- Ship verdict: YES

**Integration:** 5/12 PASS (41%)
- ✅ 0% library utilization (chose not to use available library)
- ✅ 4/5 novelty (completely different domain from library)
- ❌ Only 6 mechanisms (target: 8)
- ❌ Only 4/9 component families (target: 6)

**What this means:** "Library available but not required" produced:
- HIGHEST novelty (4/5)
- HIGHEST perceptual quality (19/20)
- ZERO library utilization (builder chose not to use it)
- ZERO soul violations

**This is the surprising winner** — weak permission outperformed anti-gravity for both novelty AND quality.

---

### Variant C (Anti-Gravity, Metamorphic Geology)

**Metaphor:** Metamorphic transition zones (diagenetic → low-grade → medium-grade metamorphism)

**Programmatic:** 17/19 PASS at 1440px (FAIL)

**Critical violation:** Container width <940px at desktop (G1) — too narrow (~600-700px)

**Perceptual (Judge A):** 19/20
- Tier 1: 5/5 (calm, spacious, confident)
- Tier 2: 14/15 (beige callouts too subtle, no dramatic visual moment)
- Ship verdict: YES

**Integration:** 3/12 PASS (25%)
- ⚠️ 47% library utilization (partial)
- ✅ Phase 0-1 compliance verified (case-studies/ not accessed early)
- ❌ **85% overlap with OD-004 geological metaphor** (same domain)
- ❌ Only 1/5 dimensions different (below 3/5 threshold)
- ❌ NO divergence table found in log (should have regenerated)
- ❌ Only 3/9 component families (target: 6)

**What this means:** Anti-gravity mechanisms FAILED to prevent pattern-matching. Despite Phase 0-3 library prohibition and Phase 3.5 divergence gate, builder converged to OD-004's geological domain.

**Critical finding:** Phase 3.5 gate either (a) not enforced, (b) passed with weak justification (1/5 dimensions = "same family, different species"), or (c) missing from log.

**Perceptual quality was excellent (19/20)** but novelty was lowest among creative variants (1/5).

---

### Variant D (Library-First, Geological Stratification)

**Metaphor:** Sedimentary stratigraphy (Bedrock → Strata → Topsoil → Atmosphere)

**Programmatic:** 18/19 PASS at 1440px (FAIL)

**Critical violation:** Container width <940px at desktop (G1) — too narrow (~700-800px)

**Perceptual (Judge A):** 13/20
- Tier 1: 3/5 (black header banner crushes top, eye fixates on dark mass instead of content)
- Tier 2: 10/15 (top-heavy, jarring transition from dark to light, pure black breaks palette)
- Ship verdict: YES WITH RESERVATIONS

**Integration:** 6/12 PASS (50%)
- ✅ 68% library utilization
- ✅ 8 mechanisms (meets target)
- ✅ **0/5 novelty (exact OD-004 match) — EXPECTED for baseline**
- ❌ Only 3/9 component families (target: 6)

**What this means:** Library-first produced:
- FASTEST build time (37 min vs 78-117 min)
- EXACT library pattern-match (0/5 novelty) — intentional baseline
- GOOD mechanism coverage (8/18)
- POOR perceptual quality (13/20) due to black header violation

**This proves library gravitational pull is STRONG** — early library exposure leads to convergence.

---

## Cross-Variant Patterns

### 1. Container Width is THE Critical Variable

**Too wide (Track 1, Variant A):**
- 1000-1052px containers
- 96-132 characters per line
- **Result:** FAIL — excessive CPL, readability crisis

**Too narrow (Variant C, Variant D):**
- 600-800px containers
- Driven by metaphor aesthetics (geological core sample)
- **Result:** FAIL — violates 940px minimum, wastes horizontal space

**Just right (Variant B):**
- ~940px at desktop
- Borderline 80-85 CPL
- **Result:** CONDITIONAL PASS — optimal balance

**The sweet spot:** 940-960px (65% of 1440px viewport)

---

### 2. Black Element Epidemic

**Variants with pure black violations:**
- **Variant A:** Black callout box (Judge: "feels alien to warm palette")
- **Variant D:** Black header banner (Judge: "crushes the top, oppressive")

**Variants WITHOUT black violations:**
- **Variant B:** Warm lab zones
- **Variant C:** Warm gradient transitions

**Pattern:** Skill-only (A) and library-first (D) introduced soul violations. Anti-gravity (C) and weak permission (B) avoided them.

**Hypothesis:** Framing constraints as prohibitions (anti-gravity) or identity preservation (weak permission) increases soul constraint salience better than skill-alone or pattern-matching.

---

### 3. Anti-Gravity Paradox

**Variant C (anti-gravity) achieved:**
- HIGHEST perceptual quality (tied 19/20)
- LOWEST novelty among creative variants (1/5)
- 2x slower than library-first (78 min vs 37 min)

**Variant A (skill-only) achieved:**
- MODERATE novelty (3/5)
- LOWEST perceptual quality among creative variants (13/20)
- SLOWEST build time (117 min)

**The paradox:** Anti-gravity enforcement improved execution quality but DIDN'T prevent domain convergence. Builder still chose geological metaphor (same family as OD-004) despite phase gates.

**Why this happened:**
1. Indirect library exposure: prohibitions.md mentions OD-004 findings, mechanism-catalog.md shows OD-004 examples
2. Content vocabulary naturally suggests "layers", "transformation", "threshold" → geological concepts
3. Phase 3.5 gate accepted "same family, different species" (metamorphism vs stratigraphy)

---

### 4. Weak Permission Paradox

**Variant B (weak permission) achieved:**
- HIGHEST novelty (4/5)
- HIGHEST perceptual quality (tied 19/20)
- 0% library utilization (chose NOT to use available library)
- ZERO soul violations

**Variant C (anti-gravity) achieved:**
- LOWEST novelty (1/5)
- HIGHEST perceptual quality (tied 19/20)
- 47% library utilization

**The paradox:** Soft framing ("library available but not required") produced HIGHER novelty than hard gates ("library prohibited then gated").

**Hypothesis:** Weak permission removes urgency to consult library. Prohibition creates psychological scarcity — when access opens (Phase 4-5), convergence pressure increases.

---

### 5. Prose-Only Content Limits Testing

**ALL Track 2 variants failed component coverage:**
- Variant A: 2/9 families (22%)
- Variant B: 4/9 families (44%)
- Variant C: 3/9 families (33%)
- Variant D: 3/9 families (33%)

**Target:** 6/9 families (67%)

**Root cause:** Content was 85% prose, 0% code blocks, 0% tables, 0% file trees. This makes 5/9 component families IMPOSSIBLE to test.

**Implication:** Phase D content selection prioritized metaphor testing over component diversity.

**Fix for Phase D-V2:** Use MIXED content (50% prose, 25% code, 15% data, 10% structure) to exercise 7-8/9 families.

---

## Hypothesis Test Results

### H1: Library constrains novelty (A >> D)

**Expected:** Skill-only (A) should have MUCH HIGHER novelty than library-first (D)

**Data:**
- Variant A: 3/5 novelty
- Variant D: 0/5 novelty

**Result:** ✅ CONFIRMED — Library-first converged to exact library match. Skill-only produced different domain.

---

### H2: Anti-gravity preserves novelty (C >= A)

**Expected:** Anti-gravity (C) should have novelty >= skill-only (A)

**Data:**
- Variant C: 1/5 novelty
- Variant A: 3/5 novelty

**Result:** ❌ REJECTED — Anti-gravity produced LOWER novelty than skill-only.

**Key finding:** Phase gates didn't prevent geological domain convergence.

---

### H3: Anti-gravity improves quality (C PA > A PA)

**Expected:** Anti-gravity (C) should have HIGHER PA score than skill-only (A)

**Data:**
- Variant C: 19/20
- Variant A: 13/20

**Result:** ✅ CONFIRMED — Anti-gravity achieved +6 points higher perceptual quality.

---

### H4: Weak permission insufficient (C > B in novelty)

**Expected:** Anti-gravity (C) should have HIGHER novelty than weak permission (B)

**Data:**
- Variant C: 1/5 novelty
- Variant B: 4/5 novelty

**Result:** ❌ REJECTED — Weak permission produced HIGHER novelty than anti-gravity.

**Key finding:** Soft framing outperformed hard gates for novelty preservation.

---

## What The Scores Mean

### Overall Phase D Verdict: CONDITIONAL PASS

**Library Sufficiency (Track 1):** ✅ VALIDATED
- Components work when properly assembled
- Builder error (didn't read prohibitions first), not library gap

**Anti-Gravity Enforcement:** ❌ FAILED
- Variant C converged to OD-004 geological domain (85% overlap)
- Phase 3.5 gate either missing, non-blocking, or accepted weak justification

**Content Selection:** ⚠️ INAPPROPRIATE
- Prose-only limited component testing to 22-44% vs 67% target
- Need mixed content for Phase D-V2

**Strongest Finding:** Weak permission (Variant B) achieved optimal balance:
- Highest novelty (4/5)
- Highest quality (19/20)
- Zero soul violations
- Zero library utilization (chose independence)

---

## Critical Gaps Identified

### GAP-001: Anti-Gravity R6 Enforcement Failure (CRITICAL)

Variant C converged to OD-004 without divergence table or regeneration. Phase 3.5 gate either not enforced, not blocking, or accepted "same family, different species" logic.

**Fix:** Verify full Variant C log for Phase 3.5 presence. If present but non-blocking, make it BLOCKING. If absent, this is builder skip error.

---

### GAP-002: Prose-Only Content Limits Component Testing (CRITICAL)

All Track 2 variants failed component coverage (22-44% vs 67% target) because content had no code blocks, tables, or diagrams.

**Fix:** Phase D-V2 must use mixed content (50% prose, 50% code/tables/diagrams).

---

### GAP-003: Mechanism Count Ceiling for Prose Content (CRITICAL)

Variants A/B scored 6 mechanisms (target: 8). Prose-only content can't use code block (#17) or data table (#18) mechanisms.

**Fix:** Adjust target to >=6 for prose-only, keep >=8 for mixed content.

---

## Recommendations

### Immediate (Before Phase D-V2)

1. **Fix Track 1 builder prompt:** Enforce always-load (prohibitions.md + tokens.css FIRST)
2. **Create mixed content template:** 50% prose, 25% code, 15% data, 10% structure
3. **Strengthen Phase 3.5 gate:** Make BLOCKING for <3/5 divergence dimensions
4. **Document container width sweet spot:** 940-960px at desktop (not just 940px minimum)

### Secondary (Before Phase E)

5. **Test stronger weak permission:** "Library ENCOURAGED after Phase 3.5" (Variant B-V2)
6. **Add custom property bridging documentation:** tier-3-bridging.md with examples
7. **Add dark header variant to components.css:** Missing from library despite CD-006 usage
8. **Update anti-gravity mechanisms:** Address indirect library exposure (OD-004 mentions in prohibitions/mechanisms)

---

## The Big Picture

Phase D proves:

1. **Library is SUFFICIENT** for assembly tasks (Track 1 would PASS if builder followed protocol)
2. **Anti-gravity mechanisms WORK for quality** (Variant C: 19/20) but FAIL for novelty (1/5)
3. **Weak permission is OPTIMAL** for balancing novelty + quality (Variant B: 4/5 novelty, 19/20 quality)
4. **Library gravitational pull is STRONG** — even with phase gates, geological domain emerged (Variant C)
5. **Container width is THE critical variable** — 4/5 pages violated 940px sweet spot

**Proceed to Phase E with caveats:**
- Fix container width guidance
- Run Phase D-V2 with mixed content
- Strengthen Phase 3.5 gate to BLOCK weak convergence
- Consider weak permission as default (not anti-gravity) for Track 2 builds
