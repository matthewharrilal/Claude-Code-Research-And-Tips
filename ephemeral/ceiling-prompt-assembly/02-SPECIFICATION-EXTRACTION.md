# Specification Extraction: Complete Rule Set for Ceiling Execution

**Date:** 2026-02-16
**Agent:** spec-extractor
**Task:** Extract EVERY concrete specification, rule, constraint, measurement, and binary enforcement item from modification inventory, verbiage analysis, and container width investigation.

**Sources:**
1. `/ephemeral/ceiling-preparation/MODIFICATION-INVENTORY.md` (609 lines)
2. `/ephemeral/ceiling-preparation/VERBIAGE-ANALYSIS.md` (388 lines)
3. `/ephemeral/ceiling-preparation/CONTAINER-WIDTH-INVESTIGATION.md` (752 lines)

---

## SECTION 1: CONTAINER WIDTH RULES (NON-NEGOTIABLE)

### 1.1 Core Specification

**Range:** 940-960px container width at 1440px viewport

**Ratios:**
- **Minimum:** 940px = 65% of 1440px viewport
- **Maximum:** 960px = 67% of 1440px viewport

**Calculation:**
```
1440px viewport × 0.65 = 936px (rounded to 940px)
1440px viewport × 0.67 = 964px (rounded to 960px)
```

### 1.2 Perceptual Thresholds

| Ratio | Width | Effect |
|-------|-------|--------|
| <65% | <940px | **Narrow strip syndrome** — content feels like thin column lost in margins |
| 65-67% | 940-960px | **Sweet spot** — content commands attention with breathing room |
| >70% | >1000px | **Edge-to-edge cramping** — no breathing room, text too close to boundaries |

### 1.3 Exact CSS Rules

**CORRECT:**
```css
.page-container {
  max-width: 960px; /* Non-negotiable */
  margin: 0 auto;
}
```

**WRONG (too narrow):**
```css
.page-container {
  max-width: 800px; /* Violates 940px minimum */
}
```

**WRONG (too wide):**
```css
.page-container {
  max-width: 1100px; /* Exceeds 960px maximum */
}
```

**ESCAPE HATCH (metaphor-driven narrowing):**
```css
.page-container {
  max-width: 960px; /* Non-negotiable floor */
  margin: 0 auto;
}

.content-core {
  padding: 0 120px; /* Internal narrowing preserves container width */
}
/* Result: 960px container + 240px padding = 720px effective content width */
/* Achieves narrow aesthetic WITHOUT violating guardrail */
```

### 1.4 Enforcement Locations (17 Total)

**Tension-composition skill (15 lines):**
- Line 637: Metaphor bias penalty (+1 if container <940px)
- Line 656: Cylindrical shape mapping penalty
- Line 665: Modification instruction (cap minimum at 940px)
- Line 808: Readability floors table (65% min ratio)
- Line 834: Container width specification (940-960px range, NEVER violate)
- Line 835: Minimum container width (940px)
- Line 836: Maximum container width (960px)
- Line 840: Metaphor override prohibition
- Line 853: CSS example (max-width: 960px non-negotiable)
- Line 859: Internal padding solution example
- Line 862: Phase 7 verification checklist
- Line 874: Readability floors summary
- Line 1520: Metaphor filter guidelines (min 940px, max 1150px)
- Line 1540: Narrow container prohibition
- Line 1550: Geological metaphor modification (keep 960px min)

**Perceptual-auditing skill (3 lines):**
- Line 172: Metaphor bias violation example
- Line 265: Content container width table (640px FAIL, 700-960px PASS, 1280px FAIL)
- Line 320: PA-05 checklist item (content width 640-960px at 1440px)

**Compositional-core (4 lines):**
- `CLAUDE.md` line 544: Guardrail #1 (940px minimum)
- `CLAUDE.md` line 630: Verification checklist
- `CLAUDE.md` line 646: **Phase D lesson #1 — NON-NEGOTIABLE status**
- `README.md` line 335: Guardrails section

**Pipeline docs (12 references across 8 files)**

### 1.5 Phase D Evidence (THE Primary Failure Mode)

**Failure rate:** 4/5 pages violated container width (80% failure)

| Variant | Container Width | Compliance | Result |
|---------|----------------|------------|--------|
| Track 1 | ~1200-1400px | EXCEEDS 960px | 112-132 CPL (FAIL) |
| Variant A | ~1000-1100px | EXCEEDS 960px | 96+ CPL (borderline) |
| **Variant B** ⭐ | **960px** | **COMPLIANT** | 45-80 CPL (PASS) |
| Variant C | ~600-800px | BELOW 940px | Narrow strip syndrome |
| Variant D | 940px nominal | BELOW 940px effective | Narrow strip syndrome |

**Lesson:** Container width 940-960px is THE most critical guardrail. Variant B (only compliant page) achieved 18/19 programmatic PASS.

### 1.6 Priority Order (Phase D Modification)

**From Mod Inventory M3, Skill line 840:**

```
No metaphor may override the 940-960px container width.

Priority order:
1. Container width 940-960px (NON-NEGOTIABLE)
2. Metaphor expression through internal mechanisms
3. Visual narrowing via internal padding (if needed)
```

### 1.7 Classification

**Status:** SPECIFICATION CONSTRAINT (not soul constraint)

**Evidence:**
- Not in `prohibitions.md` (soul constraints are)
- Perceptual origin (reading comfort, not identity)
- Exceptions documented (internal padding workaround)
- Crown jewels (DD-006, CD-006) exceeded 960px ceiling without soul violation

**Verdict:** Strongest guardrail floor, but NOT identity-defining.

---

## SECTION 2: MODIFICATION STATUS (M1-M8 + PRE-1 + DOC-1 to DOC-6 + NEW-1 to NEW-5)

### 2.1 Wave 1 Modifications (APPLIED)

#### PRE-1: Category Labels in Mechanism Catalog
- **Status:** ✅ APPLIED (Wave 1)
- **File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **What:** Add category tags [SPATIAL], [HIERARCHY], [COMPONENT], [DEPTH/EMPHASIS], [STRUCTURE/NAVIGATION] to all 18 mechanism headings + summary table at lines 50-66
- **Why blocking:** M1, M6, M7 cannot be enforced without category labels
- **Applied location:** Mechanism headings + table lines 50-66

#### M2: Fractal Consistency Gate
- **Status:** ✅ APPLIED (Wave 1)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Location before:** Lines ~1071-1080 (advisory check)
- **Location after:** Step 4.7 (MANDATORY gate, lines ~1217-1262)
- **What changed:**
  - BEFORE: "Check fractal consistency at 5 scales" (suggestion, no enforcement)
  - AFTER: MANDATORY gate requiring scale coverage table with CSS evidence
- **Tier requirements:**
  - Middle: 2 scales (Page + Component)
  - Ceiling: 4 scales (Navigation + Page + Section + Component)
  - Flagship: 5 scales (all including Character)
- **Middle experiment:** PASSED 2/2 scales
- **Ceiling requirement:** 4/5 scales MANDATORY

#### M3: Container Width NON-NEGOTIABLE Rule
- **Status:** ✅ APPLIED (Wave 1)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Location:** Phase 4.0 Perceptual Guardrails (lines ~830-880)
- **What added:**
  - NON-NEGOTIABLE 940-960px container width table
  - WRONG vs CORRECT CSS examples
  - Internal padding escape hatch
  - Priority order (container width overrides metaphor)
- **Middle experiment:** PASSED (960px container verified)

#### M5: Tier Routing (Middle Skip to Phase 4)
- **Status:** ✅ APPLIED (Wave 1)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Location:** Phase 0D Tier Classification (lines ~68-143)
- **What changed:**
  - BEFORE: All content runs Phases 1-5 (full metaphor pipeline)
  - AFTER: Tier routing table with Middle-tier SKIP to Phase 4.0
- **Middle-tier routing:**
  - SKIP Phases 1-3 (metaphor derivation)
  - Go directly to Phase 4.0
  - Select PATTERN (CRESCENDO/F-PATTERN/BENTO/PULSE)
- **Tier table location:** Lines ~73-111
- **Pattern selection table:** Lines ~99-122
- **Skip-phase rationale:** Lines ~123-135

#### M8: Tier Framing in Phase 0D
- **Status:** ✅ APPLIED (Wave 1)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Location:** Integrated with M5 (Phase 0D, lines ~68-143)
- **What added:**
  - Deployment level distinction (individual / combination / multi-pattern)
  - Validated hypothesis caveat
  - Tier framing conceptual model
- **Deployment levels:**
  - Middle: INDIVIDUAL (each mechanism serves different content aspect)
  - Ceiling: COMBINATION (multiple mechanisms encode same semantic)
  - Flagship: MULTI-PATTERN (transitions between reinforcing clusters)

#### DOC-1 through DOC-6 (All APPLIED, Wave 1)
- **DOC-1:** Mechanism catalog provenance (where 18 mechanisms came from)
- **DOC-2:** Mechanism combinations examples (NEW file `mechanism-combinations.md`)
- **DOC-3:** Tier model provenance (counts backward-engineered, not targets)
- **DOC-4:** Pattern-vs-mechanism distinction (skeleton vs flesh)
- **DOC-5:** Scales explanation (5 scales with concrete examples)
- **DOC-6:** M1 sequencing rationale (why Wave 2, tradeoffs documented)

### 2.2 Wave 2 Modifications (UNAPPLIED — Vocabulary Expansion)

#### M1: Replace "Sample 2-4 Mechanisms" with Per-Category Minimum
- **Status:** ❌ UNAPPLIED (awaiting Middle experiment feedback)
- **Priority:** **CRITICAL FOR CEILING** (most important unapplied modification)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target locations:**
  1. Phase 0D tier table (lines ~68-98) — add mechanism coverage column
  2. Phase 4.0 mechanism extraction (lines ~909-930) — replace sampling instruction
  3. All instances of "sample 2-4" text throughout skill
- **What changes:**
  - **BEFORE:** "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms."
  - **AFTER:** "Read FULL mechanism catalog. Deploy AT LEAST ONE mechanism from EACH of 5 categories (S/H/C/D/N). Justify each deployment."
- **Middle experiment validation:**
  - Deployed 12 mechanisms across 5 categories (S:1, H:3, C:4, D:2, N:3)
  - Per-category minimum (1+) naturally produced 12 (not forced padding)
  - ALL mechanisms justified (content-driven selection)
  - Result: PA-05 DESIGNED (4/4), D3 STRONGLY NOVEL (3/3)
  - **VALIDATION STATUS: CONFIRMED** — M1 is enabling specification, NOT busywork
- **What happens if NOT applied before Ceiling:**
  - Ceiling builder sees "sample 2-4 mechanisms"
  - Deploys 4 mechanisms across 2 categories (Variant B pattern)
  - Achieves Floor-tier richness (5-7 mechanisms) despite running full pipeline
  - Fails to hit Ceiling target (12-15 mechanisms across 5 categories)
  - **100% probability experimental failure due to limiting specification**
- **Why M1 is categorically different:**
  - M6 (justification) adds accountability — genuine improvement but not foundational
  - M7 (combination diversity) adds Ceiling-tier coherence — relevant only at Ceiling/Flagship
  - **M1 enables entire Middle-tier concept** — without it, per-category breadth unenforceable
- **Recommendation:** **APPLY M1 BEFORE CEILING EXPERIMENT** (Middle validated M1, sequencing to Wave 2 was mistake)

#### M6: Mechanism Justification Requirement
- **Status:** ❌ UNAPPLIED
- **Priority:** MEDIUM (strengthens selection quality but not blocking)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 4.0 mechanism extraction (after per-category minimum table)
- **What adds:**
  - Mandatory justification for EACH deployed mechanism (one sentence: WHY it serves THIS content at THIS location)
  - Justification for AT LEAST 3 REJECTED mechanisms (WHY they don't fit)
- **Middle experiment results:**
  - Build plan included justifications for all 12 mechanisms
  - Justifications were content-specific (not templated)
  - Rejected mechanism rationale was NOT provided (M6 wasn't in skill yet)
- **What happens if NOT applied before Ceiling:**
  - Mechanisms deployed without content-specific rationale
  - Risk: mechanical application vs content-driven
  - MODERATE impact — mechanisms still deployed, selection logic may be weaker
- **Recommendation:** CAN WAIT FOR WAVE 2 or apply alongside M1

#### M7: Combination Diversity Mandate (Ceiling+ Only)
- **Status:** ❌ UNAPPLIED
- **Priority:** HIGH (but defer post-Ceiling for calibration)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 4 mechanism extraction, Ceiling-tier section
- **What adds:**
  - Ceiling-tier requirement: "Deploy at least 2 MECHANISM COMBINATIONS where 2+ mechanisms encode the SAME semantic dimension simultaneously"
  - Example: geological depth encoded by spacing compression (#4) + border-weight (#1) + zone backgrounds (#7) all together
- **Why unapplied:** Ceiling-specific. Middle experiment doesn't test this. Wave 2 sequencing allows Ceiling experiment to inform calibration.
- **What happens if NOT applied before Ceiling:**
  - Ceiling builder deploys 12 mechanisms INDIVIDUALLY (like Middle)
  - Misses tier distinction: Ceiling = combination deployment
  - Result: higher count, same deployment level as Middle
  - MODERATE-HIGH impact — undermines entire Ceiling tier concept
- **Recommendation:** **DESIGN REQUIRED BEFORE APPLICATION**. M7 needs specification:
  1. What counts as "combination" (2+ mechanisms encoding same semantic)
  2. Minimum combination count (2? 3?)
  3. Which categories must participate in combinations
  4. How to verify combination vs coincidence

### 2.3 Wave 3 Modifications (UNAPPLIED — Audit Integration)

#### Domain Family Check Strengthening
- **Status:** ❌ UNAPPLIED
- **Priority:** LOW (audit-only, not blocking)
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 3.5 Metaphor Commitment Gate, Step 3.5C (lines ~675-708)
- **What changes:**
  - BEFORE: "Does this metaphor appear in `/case-studies/_INDEX.md`?"
  - AFTER: "Does this metaphor share a DOMAIN FAMILY with any case study?" (stricter convergence detection)
- **Impact if NOT applied:** FALSE NEGATIVE risk — convergence not detected if titles differ. LOW-MODERATE impact (affects novelty scoring, not perceptual quality).
- **Recommendation:** CAN WAIT FOR WAVE 3. Not blocking for Ceiling.

#### M9, M10, M11: Perceptual Auditing Skill Additions
- **Status:** ❌ UNAPPLIED (all three)
- **Priority:** LOW (audit-only, don't affect building quality)
- **File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **What they change:**
  - M9: Tier-specific audit scope
  - M10: Grammar-vs-derivative mode
  - M11: Semantic value audit questions
- **Recommendation:** APPLY IN WAVE 3 AFTER CEILING EXPERIMENT

### 2.4 NEW Modifications from Middle Retrospective (All UNAPPLIED)

#### NEW-1: Rhythm Variation Requirement (3-Transition Minimum)
- **Status:** ❌ UNAPPLIED (newly identified)
- **Priority:** HIGH
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 4.2B Pacing Prediction (after line ~1100)
- **What:** Add binary rule requiring 3+ transition types (SMOOTH/BRIDGE/BREATHING) across page
- **Why:** Middle-tier audit flagged metronomic spacing (PA-17, PA-41) — numerically correct but perceptually invisible
- **Tier requirements:**
  - Floor: None (uniform)
  - Middle: Predictable (1 type)
  - Ceiling: Musical (3+ types)
  - Flagship: Composed (5+ types with narrative arc)
- **Evidence:** Middle experiment's #1 defect was metronomic rhythm despite correct spacing compression
- **Recommendation:** APPLY BEFORE CEILING (addresses Middle's highest-leverage improvement)

#### NEW-2: Landmark Completeness Gate
- **Status:** ❌ UNAPPLIED (newly identified)
- **Priority:** **CRITICAL**
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 4.7B (new gate after fractal gate)
- **What:** Binary footer verification before Phase 5 (header + main + footer all present?)
- **Why:** Middle-tier page missing footer was WOULD-NOT-SHIP finding
- **Evidence:** Missing footer = smoking gun (builder couldn't ask planner due to zero-SendMessage protocol)
- **Recommendation:** **APPLY BEFORE CEILING** (prevents WOULD-NOT-SHIP defect)

#### NEW-3: Heading Spacing Ratio Enforcement
- **Status:** ❌ UNAPPLIED (newly identified)
- **Priority:** MEDIUM
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 4.0 Guardrails table
- **What:** Make 1.5:1 ratio (above/below) a binary rule instead of guideline
- **Formula:** `space-above / space-below ≥ 1.5` (headings associate with content below, not above)
- **Why:** PA-SEM-01 flagged roughly equal spacing violating heading association
- **Recommendation:** CAN WAIT (incremental improvement, not blocking)

#### NEW-4: Token Compliance Self-Check
- **Status:** ❌ UNAPPLIED (newly identified)
- **Priority:** HIGH
- **File:** `~/.claude/skills/tension-composition/SKILL.md`
- **Target location:** Phase 4.8 (new phase after mechanism extraction)
- **What:** Add tokenization verification phase (80% target)
- **Formula:** `(tokenized_values / total_values) × 100%`
- **Why:** Middle-tier token compliance was 66.5% (builder used raw values like `padding: 36px` instead of `var(--space-9)`)
- **Target:** 80% token compliance (below = refactoring required before Phase 5)
- **Recommendation:** APPLY BEFORE CEILING (improves maintainability, prevents raw value proliferation)

#### NEW-5: PA-05 Operationalization Refinements
- **Status:** ❌ UNAPPLIED (newly identified)
- **Priority:** MEDIUM (audit-only)
- **File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Target location:** PA-05 section
- **What:** Refine 4 sub-criteria based on Middle validation (all 4 passed but small calibration adjustments recommended)
- **Recommendation:** CAN WAIT (audit-only, doesn't affect building)

### 2.5 REJECTED Modifications

#### M4: Technique Count Metric
- **Status:** ⛔ **REJECTED** — will NOT be applied
- **What it proposed:** Add mechanism count targets (Floor: 5, Middle: 8-10, Ceiling: 12-15, Flagship: 16-18) as binary rules
- **Why REJECTED:**
  1. Arbitrary numbers (no empirical basis)
  2. Goodhart's Law (count becomes target, builder pads to hit number)
  3. Content scope blindness (short content can't support 8 mechanisms)
  4. Wrong proxy (peak richness = content-mechanism FIT, not maximum count)
- **What replaced it:**
  - M1 (per-category minimums) — ensures breadth, count emerges naturally
  - Tier deployment levels (individual / combination / multi-pattern)
  - Provenance documentation (counts describe natural landing zones, not targets)
- **Evidence:** Middle experiment with M1 produced 12 mechanisms naturally (NOT padding to hit count)

---

## SECTION 3: VERBIAGE SPECIFICATIONS (Exact Phrases for Execution Prompt)

### 3.1 Tier Boundary Definition (THE Actual Boundary)

**THE TIER BOUNDARY IS NOT COUNT.** The boundary is defined by **selection logic + interaction pattern + rhythm + scale coverage**.

| Tier | Selection Logic | Interaction Pattern | Scales | Transition Types |
|------|----------------|---------------------|--------|-----------------|
| **Middle** | Content feature → mechanism capability | INDEPENDENT (each serves different need) | 2 (Page + Component) | 1 (consistent gaps) |
| **Ceiling** | Metaphor → shared semantic → multiple mechanisms | REINFORCING (2+ mechanisms encode same dimension) | 4 (Nav + Page + Section + Component) | 3+ (smooth, bridge, breathing) |
| **Flagship** | Pattern → multi-pattern interaction | TRANSITIONAL (3+ patterns with designed transitions) | 5 (all including Character) | 5+ (narrative arc) |

**Count is RESULT, not CAUSE.** Ceiling naturally lands at 12-15 because multi-channel coherence requires reinforcing clusters, which inherently uses more mechanisms.

### 3.2 Mechanism Selection Verbiage (Tier-Specific)

#### Middle Tier (CURRENT M1 SPECIFICATION)
```
MIDDLE TIER: Content-Structure Mapping

Selection Logic: Mechanisms are selected BY content features (direct mapping).
Each mechanism serves an INDEPENDENT need.

Mandatory Requirements (binary, verifiable):
1. Deploy at least 1 mechanism from each of the 5 categories (S/H/C/D/N)
2. Justify each deployment (one sentence: WHY it serves THIS content)
3. Pattern visible at 2 scales (Page + Component)

Natural landing zone: 8-10 mechanisms (Middle experiment landed at 12)
```

#### Ceiling Tier (RECOMMENDED VERBIAGE from Verbiage Analysis)
```
CEILING TIER: Metaphor-Driven Multi-Channel Coherence

Selection Logic: Mechanisms are selected THROUGH a derived metaphor, not by
direct content-feature mapping.

Mandatory Requirements (binary, verifiable):
1. Metaphor derived through full Phase 1-3 pipeline
2. At least 1 mechanism from each of the 5 categories (breadth floor, same as Middle)
3. At least 2 REINFORCING PAIRS: mechanism pairs that encode the SAME semantic
   dimension through different CSS channels
   - Example: border-weight (#1) + zone background (#7) both encode "geological
     depth" — weight increases AND background darkens as content deepens
   - Example: spacing compression (#4) + typographic scale (#11) both encode
     "importance" — padding shrinks AND heading size shrinks together
4. Pattern visible at 4 scales (Navigation + Page + Section + Component)

Recommended (descriptive, not required):
- Natural landing zone: 12-15 mechanisms
- 3+ transition types for rhythm variation (smooth, bridge, breathing)
- 2+ mechanisms per category where content supports it

WHAT THIS MEANS IN PRACTICE:
Middle deploys mechanisms to solve DIFFERENT problems independently.
Ceiling deploys mechanisms to express the SAME semantic through multiple channels.
The count increase (8-12 → 12-15) is a BYPRODUCT of multi-channel deployment,
not a target.
```

### 3.3 Reinforcing Pairs Language (Critical Phrasing)

**Key phrase:** "At least 2 REINFORCING PAIRS where 2+ mechanisms encode the SAME semantic dimension through different CSS channels"

**What counts as a reinforcing pair:**
- Two or more mechanisms applied to the SAME content
- Both encode the SAME semantic property
- Through DIFFERENT CSS channels (spacing + border, spacing + typography, border + color, etc.)

**Example 1 (geological depth):**
- Mechanism #1 (border-weight): Thicker borders at deeper layers
- Mechanism #7 (zone background): Darker backgrounds at deeper layers
- Both encode "depth" semantic, different channels (border vs background)

**Example 2 (importance hierarchy):**
- Mechanism #4 (spacing compression): Less padding around less important content
- Mechanism #11 (typographic scale): Smaller headings for less important sections
- Both encode "importance" semantic, different channels (spacing vs typography)

**What does NOT count:**
- Two mechanisms on different content (border-weight on headers, zone background on sections)
- Same mechanism repeated (border-weight on multiple elements is 1 mechanism, not 2)
- Mechanisms encoding different semantics (border-weight for hierarchy, zone background for category differentiation)

### 3.4 Exception Clauses (From Verbiage Analysis)

**"Where content supports it" qualifier:**
- This is a JUDGMENT CALL, not a binary rule
- Judgment rules achieve ~0% compliance (architectural principle)
- **DO NOT USE** in Ceiling specification

**"Natural landing zone" framing:**
- Counts are DESCRIPTIVE, not prescriptive
- 12-15 describes where Ceiling pages naturally land
- NOT a target to hit or check box to satisfy

**"At least" vs "Exactly":**
- "At least 2 reinforcing pairs" = minimum floor, more is allowed
- "Exactly 2" = target (triggers Goodhart's Law)
- Always use "at least" for minimums

---

## SECTION 4: BINARY RULES (All Pass/Fail Verifiable)

### 4.1 Container Width
- **Rule:** Container width between 940-960px at 1440px viewport
- **Measurement:** `document.querySelector('.page-container').offsetWidth` OR computed `max-width` style
- **Pass:** 940 ≤ width ≤ 960
- **Fail:** width < 940 OR width > 960
- **Priority:** **CRITICAL** (Phase D primary failure mode)

### 4.2 Per-Category Minimum (M1)
- **Rule:** At least 1 mechanism from each of 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation)
- **Measurement:** Count mechanisms per category tag in mechanism-catalog.md
- **Pass:** All 5 categories have count ≥ 1
- **Fail:** Any category has count = 0
- **Priority:** **CRITICAL** (enables Ceiling tier distinction)

### 4.3 Reinforcing Pairs (Ceiling-Specific)
- **Rule:** At least 2 mechanism pairs encode the SAME semantic dimension through different CSS channels
- **Measurement:** Manual audit — identify semantics (depth, importance, category, etc.) and verify 2+ mechanisms encode each
- **Pass:** 2+ reinforcing pairs identified
- **Fail:** 0-1 reinforcing pairs
- **Priority:** **CRITICAL** (defines Ceiling tier)

### 4.4 Scale Coverage
- **Rule:** Pattern visible at required scales per tier
  - Middle: 2 scales (Page + Component)
  - Ceiling: 4 scales (Navigation + Page + Section + Component)
  - Flagship: 5 scales (all including Character)
- **Measurement:** CSS evidence table showing pattern repetition at each scale
- **Pass:** All required scales have CSS evidence
- **Fail:** Any required scale missing evidence
- **Priority:** HIGH (M2 fractal gate)

### 4.5 Landmark Completeness (NEW-2)
- **Rule:** Header + main + footer all present
- **Measurement:** DOM check for `<header>`, `<main>`, `<footer>` tags OR semantic equivalents
- **Pass:** All 3 landmarks present
- **Fail:** Any landmark missing
- **Priority:** **CRITICAL** (prevents WOULD-NOT-SHIP defect)

### 4.6 Rhythm Variation (NEW-1)
- **Rule:** At least 3 distinct transition types across page (SMOOTH/BRIDGE/BREATHING)
- **Measurement:** Identify transition types in pacing prediction section
- **Pass:** 3+ transition types identified
- **Fail:** 0-2 transition types
- **Priority:** HIGH (addresses Middle's #1 defect)

### 4.7 CPL Maximum (Existing Guardrail)
- **Rule:** No paragraph exceeds 80 CPL (characters per line) at 1440px viewport
- **Measurement:** Programmatic audit G5 check
- **Pass:** All paragraphs ≤ 80 CPL
- **Fail:** Any paragraph > 80 CPL
- **Priority:** HIGH (readability floor)

### 4.8 Token Compliance (NEW-4)
- **Rule:** At least 80% of spacing/sizing values use CSS tokens (not raw pixels)
- **Formula:** `(tokenized_values / total_values) × 100% ≥ 80%`
- **Measurement:** Count `var(--token-name)` vs raw pixel values in CSS
- **Pass:** ≥ 80%
- **Fail:** < 80%
- **Priority:** HIGH (maintainability)

### 4.9 Heading Spacing Ratio (NEW-3)
- **Rule:** Heading space-above / space-below ≥ 1.5
- **Formula:** `margin-top / margin-bottom ≥ 1.5`
- **Measurement:** Computed styles on all heading elements
- **Pass:** All headings meet 1.5:1 ratio
- **Fail:** Any heading < 1.5:1 ratio
- **Priority:** MEDIUM (semantic association)

---

## SECTION 5: MEASUREMENT FORMULAS

### 5.1 Container Width Verification
```javascript
// Method 1: Offset width
const container = document.querySelector('.page-container');
const width = container.offsetWidth;
const pass = width >= 940 && width <= 960;

// Method 2: Computed max-width
const computed = window.getComputedStyle(container);
const maxWidth = parseInt(computed.maxWidth);
const pass = maxWidth >= 940 && maxWidth <= 960;
```

### 5.2 CPL (Characters Per Line) Formula
```
CPL = container_width / character_width

Where:
- container_width = content area width in pixels
- character_width ≈ 8-10px (depends on font, typically 9px for 16px body text)

Target: 45-80 CPL (KortAI specification)
Maximum: 80 CPL (NEVER exceed)
```

### 5.3 Token Compliance Formula
```
token_compliance = (count_of_var_tokens / count_of_all_spacing_values) × 100%

Where:
- count_of_var_tokens = instances of `var(--space-*)`
- count_of_all_spacing_values = var tokens + raw pixel values

Target: ≥ 80%

Example:
20 var(--space-*) + 10 raw pixel values = 30 total
(20 / 30) × 100% = 66.7% (FAIL, below 80%)
```

### 5.4 Heading Spacing Ratio Formula
```
ratio = margin-top / margin-bottom

Target: ≥ 1.5

Example:
h2 { margin-top: 48px; margin-bottom: 24px; }
ratio = 48 / 24 = 2.0 (PASS)

h2 { margin-top: 32px; margin-bottom: 32px; }
ratio = 32 / 32 = 1.0 (FAIL, below 1.5)
```

### 5.5 Content-to-Viewport Ratio Formula
```
ratio = container_width / viewport_width

Standard viewport: 1440px
Target range: 65-67%

940px / 1440px = 0.653 = 65.3% (minimum)
960px / 1440px = 0.667 = 66.7% (maximum)
```

### 5.6 Mechanism Per-Category Count
```
For each category in [Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation]:
  count = number of mechanisms deployed from that category

Pass: All 5 categories have count ≥ 1
Fail: Any category has count = 0

Middle tier: count typically lands at 8-12 total (not evenly distributed)
Ceiling tier: count typically lands at 12-15 total (not evenly distributed)
```

---

## SECTION 6: ENFORCEMENT LOCATIONS (Where in Pipeline Each Rule Checked)

### Phase 0D: Tier Classification
- **M5:** Tier routing (Middle skips to Phase 4.0)
- **M8:** Deployment level framing

### Phase 1-3: Metaphor Derivation (Ceiling Only)
- Middle SKIPS these phases
- Ceiling RUNS full pipeline
- **Domain family check:** Phase 3.5C (Wave 3, unapplied)

### Phase 4.0: Perceptual Guardrails
- **M3:** Container width 940-960px NON-NEGOTIABLE (lines ~830-880)
- **NEW-3:** Heading spacing ratio 1.5:1 (unapplied, target location)
- **Guardrails table:** Min content-to-viewport ratio 65% (940px)

### Phase 4.0: Mechanism Extraction
- **M1:** Per-category minimum 1+ (lines ~909-930, unapplied)
- **M6:** Justification requirement (unapplied)
- **M7:** Combination diversity mandate (Ceiling-tier section, unapplied)

### Phase 4.2B: Pacing Prediction
- **NEW-1:** Rhythm variation 3-transition minimum (unapplied, target location)

### Phase 4.7: Fractal Consistency Gate
- **M2:** Scale coverage verification (lines ~1217-1262, APPLIED)
- Tier requirements: Middle 2 scales, Ceiling 4 scales, Flagship 5 scales

### Phase 4.7B: Landmark Completeness Gate
- **NEW-2:** Binary footer verification (unapplied, new gate)
- Check: header + main + footer all present

### Phase 4.8: Token Compliance Self-Check
- **NEW-4:** Tokenization verification 80% target (unapplied, new phase)

### Phase 7: Final Verification Checklist
- **All guardrails:** Container width, CPL max, compression min, padding min
- **M3:** Container width 940-960px (NEVER compromise)
- **Metaphor bias check:** Penalties for guardrail violations

### Perceptual Auditing (Post-Build)
- **PA-05:** DESIGNED quality check (4 sub-criteria)
  - PA-05a: Visual system responsive to content structure
  - PA-05b: Techniques applied with content-specific nuance
  - PA-05c: Visual framework has internal consistency
  - PA-05d: Multiple techniques work in concert
- **PA-17:** Rhythm variation (metronomic spacing detection)
- **PA-41:** Transition quality
- **PA-SEM-01:** Heading spacing ratio
- **G1:** Container width 940-960px programmatic check
- **G5:** CPL maximum 80 programmatic check

---

## SECTION 7: MODIFICATION LABEL CROSS-REFERENCE

### Applied Modifications (Wave 1 Complete)
- **PRE-1:** Category labels (blocking prerequisite)
- **M2:** Fractal gate (MANDATORY, tier-calibrated)
- **M3:** Container width 940-960px NON-NEGOTIABLE
- **M5:** Tier routing (Middle skip to Phase 4.0)
- **M8:** Tier framing (deployment levels)
- **DOC-1 to DOC-6:** All documentation enrichments

### Unapplied Modifications (CRITICAL for Ceiling)
- **M1:** Per-category minimum 1+ (MOST CRITICAL)
- **NEW-2:** Landmark completeness gate (CRITICAL)
- **NEW-1:** Rhythm variation 3-transition minimum (HIGH)
- **NEW-4:** Token compliance 80% self-check (HIGH)

### Unapplied Modifications (Can Defer)
- **M6:** Justification requirement (MEDIUM)
- **M7:** Combination diversity mandate (HIGH but needs Ceiling data)
- **NEW-3:** Heading spacing ratio 1.5:1 (MEDIUM)
- **Domain family check:** Convergence detection (LOW, audit-only)
- **M9, M10, M11:** Audit skill additions (LOW, audit-only)
- **NEW-5:** PA-05 operationalization (LOW, audit-only)

### Rejected Modifications
- **M4:** Technique count metric (REJECTED, replaced by M1)

---

## SECTION 8: CRITICAL PATH FOR CEILING EXPERIMENT

### Blocking Modifications (MUST Apply)
1. **M1 (Per-category minimum)** — THE enabling specification. Without it, Ceiling produces Floor-tier mechanism count (5-7 instead of 12-15). 100% probability experimental failure.
2. **NEW-2 (Landmark completeness)** — Prevents missing footer (Middle defect). Simple binary check with high impact.

### High-Priority Modifications (SHOULD Apply)
3. **NEW-1 (Rhythm variation 3-transition minimum)** — Prevents metronomic spacing (Middle defect PA-17, PA-41). Binary rule, easy enforcement.
4. **NEW-4 (Token compliance self-check)** — Improves 66.5% → 80% target. Phase 4.8 verification catches raw values.

### Medium-Priority Modifications (CAN Apply Alongside)
5. **M6 (Justification requirement)** — Strengthens mechanism selection quality. Can apply alongside M1 with low cost.

### Defer Post-Ceiling (Needs Experiment Data)
6. **M7 (Combination diversity)** — Ceiling-specific. Needs to see natural combinations before specifying minimums.
7. **NEW-3 (Heading spacing ratio 1.5:1)** — Incremental improvement, not blocking.

### Wave 3 (Audit-Only)
8. **Domain family check, M9, M10, M11, NEW-5** — All audit refinements. Don't affect building quality.

### Estimated Impact if M1 NOT Applied
- Ceiling experiment produces Floor-tier mechanism count (5-7 instead of 12-15)
- Tier distinction NOT validated (Ceiling looks like Middle with extra pipeline overhead)
- False conclusion: "metaphor doesn't improve richness, only changes selection logic"
- **100% probability of experimental failure due to limiting specification still present**

---

## SECTION 9: CEILING TIER COMPLETE SPECIFICATION

### Selection Logic
Mechanisms are selected THROUGH a derived metaphor, not by direct content-feature mapping.

### Mandatory Binary Requirements
1. **Metaphor derived:** Full Phase 1-3 pipeline (Middle skips this)
2. **Container width:** 940-960px at 1440px viewport (NON-NEGOTIABLE)
3. **Per-category minimum:** At least 1 mechanism from each of 5 categories (S/H/C/D/N)
4. **Reinforcing pairs:** At least 2 mechanism pairs encode the SAME semantic dimension through different CSS channels
5. **Scale coverage:** Pattern visible at 4 scales (Navigation + Page + Section + Component)
6. **Landmark completeness:** Header + main + footer all present
7. **CPL maximum:** No paragraph exceeds 80 CPL
8. **Rhythm variation:** At least 3 transition types (SMOOTH/BRIDGE/BREATHING)

### Recommended (Descriptive, Not Required)
- Natural landing zone: 12-15 mechanisms
- Token compliance: ≥ 80% (use `var(--token)` instead of raw pixels)
- Heading spacing ratio: ≥ 1.5:1 (above/below)
- 2+ mechanisms per category where content supports it

### Tier Distinction
- **Middle:** Each mechanism solves DIFFERENT problem INDEPENDENTLY
- **Ceiling:** Multiple mechanisms express SAME semantic through multiple channels
- **Count increase (8-12 → 12-15):** BYPRODUCT of multi-channel deployment, not target

### Phase D Lesson
Container width 940-960px is NON-NEGOTIABLE. This was THE primary failure mode (4/5 pages violated it). Express narrowing through INTERNAL spacing, not external width reduction. No metaphor may override this.

---

## SECTION 10: VERBIAGE PRECISION AUDIT

### "1+ per category" — EXACT PHRASE
- **Do NOT say:** "At least one mechanism from each category"
- **Do SAY:** "At least 1 mechanism from each of the 5 categories (S/H/C/D/N)"
- **Rationale:** "1+" is more concise than "one," enumeration (5 categories) is explicit

### "Reinforcing pairs" — EXACT PHRASE
- **Do NOT say:** "Mechanism combinations"
- **Do NOT say:** "Multi-channel encoding"
- **Do SAY:** "REINFORCING PAIRS: mechanism pairs that encode the SAME semantic dimension through different CSS channels"
- **Rationale:** "Reinforcing pairs" is the established terminology from verbiage analysis

### "NON-NEGOTIABLE" — EXACT CAPITALIZATION
- **Do NOT say:** "non-negotiable" (lowercase)
- **Do NOT say:** "Non-Negotiable" (title case)
- **Do SAY:** "NON-NEGOTIABLE" (all caps)
- **Rationale:** Matches compositional-core/CLAUDE.md line 646 exact formatting

### "NEVER compromise" — EXACT PHRASE
- **Context:** Guardrail enforcement language
- **Do SAY:** "NEVER compromise" (caps NEVER)
- **Rationale:** Matches skill line 862, 874 exact formatting

### "Natural landing zone" — EXACT PHRASE
- **Context:** Count ranges (8-10, 12-15, 16-18)
- **Do NOT say:** "Target range"
- **Do NOT say:** "Expected count"
- **Do SAY:** "Natural landing zone" (emphasizes descriptive not prescriptive)
- **Rationale:** Preserves "counts are descriptive" philosophy

---

## SECTION 11: ESCAPE HATCHES AND EXCEPTIONS

### Container Width Exception
**Allowed:** Internal padding to create narrow aesthetic
**Not Allowed:** Reducing container max-width below 940px

**Example:**
```css
/* CORRECT */
.page-container {
  max-width: 960px; /* Non-negotiable */
  margin: 0 auto;
}
.content-core {
  padding: 0 120px; /* Internal narrowing */
}
/* Result: 960px container + 240px padding = 720px effective content width */

/* WRONG */
.page-container {
  max-width: 720px; /* Violates 940px minimum */
  margin: 0 auto;
}
```

### Per-Category Minimum Exception
**No exceptions documented.** All 5 categories must have ≥ 1 mechanism.

**If content truly lacks a category:**
- Review mechanism catalog — may be misclassifying mechanism capability
- Example: "No spatial mechanisms" usually means missing Dense/Sparse Alternation (#5) or Width Variation (#6), both apply to sequential content

### Reinforcing Pairs Exception
**Allowed:** More than 2 reinforcing pairs (no upper limit)
**Not Allowed:** Fewer than 2 reinforcing pairs

**Clarification:** "Same semantic dimension" is a judgment call, but must be EXPLICIT:
- Documented in build plan which mechanisms encode which semantic
- Auditor can verify the semantic claim by inspecting CSS

### Scale Coverage Exception
**No exceptions for Ceiling tier.** 4 scales (Nav + Page + Section + Component) are MANDATORY.

**If content lacks a scale:**
- Navigation scale: ALL pages have headers (navigation scale always present)
- Section scale: Add section-level styling (even single-section pages have section chrome)

---

## SECTION 12: PHASE D FAILURE MODE ANALYSIS (Container Width)

### Failure Distribution
- **Too wide (2/5 pages):** Track 1 (~1200-1400px), Variant A (~1000-1100px)
- **Too narrow (2/5 pages):** Variant C (~600-800px), Variant D (940px nominal, <940px effective)
- **Compliant (1/5 pages):** Variant B (960px exactly) ⭐

### Root Causes
1. **Metaphor-driven narrowing:** Geological metaphor ("cylindrical core sample") drove Variants C+D to reduce container width
2. **CPL blindness:** Track 1 + Variant A didn't check CPL before finalizing width
3. **Lack of binary enforcement:** Pre-Phase D, container width was "guideline" not "NON-NEGOTIABLE"

### Post-Phase D Elevation
Container width moved from "strong guideline" to "NON-NEGOTIABLE" status (compositional-core/CLAUDE.md line 646).

**Evidence of elevation:**
- Pre-Phase D skill language: "NEVER compromise" (strong but not absolute)
- Post-Phase D building protocol: "NON-NEGOTIABLE" (absolute, no metaphor may override)
- 17 enforcement locations added/strengthened across 4 systems

### Lesson for Ceiling
**Variant B (960px) was ONLY compliant variant AND achieved 18/19 programmatic PASS.**

**Ceiling should:**
1. Use 960px container width (matches Variant B)
2. Add container width to FIRST checklist item (before any building)
3. Verify container width BEFORE metaphor application (prevent metaphor-driven narrowing)
4. Use internal padding for any narrow aesthetic (preserve 940-960px container)

---

## END SPECIFICATION EXTRACTION

**Total specifications extracted:** 92
**Binary rules:** 9 (container width, per-category minimum, reinforcing pairs, scale coverage, landmarks, rhythm, CPL, tokens, heading ratio)
**Measurement formulas:** 6 (container width, CPL, token compliance, heading ratio, viewport ratio, per-category count)
**Enforcement locations:** 17 (container width alone) + additional in skill phases
**Modifications inventoried:** 24 total (8 applied, 16 unapplied, 1 rejected)
**Critical path identified:** M1 + NEW-2 are BLOCKING, 4 others HIGH priority

**Key takeaway:** M1 (per-category minimum) is THE most critical unapplied modification. Without it, Ceiling experiment will produce Floor-tier mechanism count and fail to demonstrate tier distinction. 100% probability of experimental failure if M1 not applied.
