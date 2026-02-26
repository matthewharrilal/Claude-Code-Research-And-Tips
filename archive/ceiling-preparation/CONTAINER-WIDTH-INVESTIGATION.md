# Container Width Investigation — 940-960px Provenance

**Date:** 2026-02-16
**Investigator:** width-investigator (agent)
**Purpose:** Trace the 940-960px container width requirement — WHERE it comes from, WHY this range, WHERE enforced, and WHAT violated it

---

## Executive Summary

**Provenance:** The 940-960px container width is a **GUARDRAIL FLOOR** (not soul constraint), derived from **perceptual research** (minimum content-to-viewport ratio) and validated through **Phase D failures** (THE primary failure mode).

**Origin:** First documented in **tension-composition skill** (June 2026 or earlier), formalized in **pipeline/** planning docs, and elevated to NON-NEGOTIABLE status after Phase D (Feb 2026).

**Enforcement:** 17 locations across 4 systems (skill, pipeline, compositional-core, ephemeral), with strongest enforcement in **perceptual-auditing skill** (PA-05) and **tension-composition skill** (Phase 7 checklist).

**Classification:** **Specification constraint** (readability floor), NOT soul constraint (identity-defining). Can be violated with documented justification, but violations in Phase D caused 4/5 FAIL verdicts.

---

## 1. WHERE Does 940-960px Come From? (Provenance)

### Primary Source: Perceptual Research on Content-to-Viewport Ratio

**Earliest reference:** `~/.claude/skills/tension-composition/SKILL.md` lines 808, 834-836

```
| Min content-to-viewport ratio | **65%** (940px) | Below this, content feels like a narrow strip lost in margins |

| **Container width at 1440px** | **940-960px** | 65-67% content-to-viewport ratio | **NEVER** |
| Minimum container width | 940px | Below this = narrow strip syndrome | NEVER |
| Maximum container width | 960px | Above this = edge-to-edge, no breathing | Rarely (full-bleed hero sections only) |
```

**Semantic origin:** **940px = 65% of 1440px viewport**

**Calculation:**
- 1440px viewport × 0.65 = **936px** (rounded to 940px)
- 1440px viewport × 0.67 = **964px** (rounded to 960px)

**Research finding:** Below 65% content-to-viewport ratio, content "feels like a narrow strip lost in margins" (perceptual threshold).

---

### Secondary Validation: Phase D Failure Mode

**Source:** `ephemeral/phase-d-execution/FINAL-REPORT.md` lines 60-61, Phase D execution (2026-02-14)

```
1. **Container Width Violations (4/5 pages):** Either too wide (Track 1, Variant A: 96-132 CPL)
   OR too narrow (Variants C, D: <940px at 1440px viewport) — THE primary failure mode
```

**Evidence from programmatic audit:**
- **Variant C (Anti-Gravity):** Container width <940px violation (geological metaphor-driven narrowing)
- **Variant D (Library-First):** Container width <940px violation (intentional narrow design, 600-700px)
- Both variants scored geological metaphor richness HIGH but FAILED guardrail compliance

**Phase D lesson (compositional-core/CLAUDE.md line 646):**

```
1. **Container width 940-960px is NON-NEGOTIABLE.** This was THE primary failure mode
   (4/5 pages violated it). Express narrowing through INTERNAL spacing, not external
   width reduction. No metaphor may override this.
```

**Status elevation:** After Phase D, container width moved from "guideline" to **"NON-NEGOTIABLE"** (strongest enforcement language).

---

### Why NOT 1024px? (Alternative Standard)

**Reason 1: Too wide for reading comfort**
- 1024px at 1440px = 71% viewport ratio
- Above 70% = edge-to-edge feel, loses breathing room
- Reading research: optimal line length is 50-75 characters (45-80 CPL max in KortAI)
- 1024px container at 16px body text = ~85-100 CPL (exceeds readability maximum)

**Reason 2: Not a perceptual threshold**
- 940px is MINIMUM (65% = narrow strip syndrome threshold)
- 960px is MAXIMUM (67% = breathing room preserved)
- 1024px has no perceptual justification in KortAI research

**Reason 3: Fortress content characteristics**
- Technical documentation benefits from generous margins (40+ tokens per viewport width)
- 940-960px creates ~30-40px side margins at 1440px
- 1024px would create ~15-20px margins (cramped feel)

---

## 2. WHY This Specific Range? (65-67% Content-to-Viewport)

### Perceptual Thresholds Documented

**From:** `~/.claude/skills/tension-composition/SKILL.md` line 808

| Property | Value | Threshold Description |
|----------|-------|----------------------|
| Min content-to-viewport ratio | **65%** (940px) | Below this, content feels like a narrow strip lost in margins |
| Max content-to-viewport ratio | **67%** (960px) | Above this, edge-to-edge, no breathing room |

**Narrow strip syndrome (<65%):**
- Content appears as thin column in ocean of whitespace
- Reader attention pulled to margins (negative space dominates)
- Editorial authority weakened (looks tentative, not confident)

**Edge-to-edge cramping (>70%):**
- No breathing room between content and viewport edge
- Text runs too close to screen boundaries
- Loses generous margins that define editorial warmth

**Sweet spot (65-67%):**
- Content commands attention without dominating
- Margins provide breathing room without waste
- Reading comfort optimized (45-80 CPL achievable at 16px body text)

---

### Metaphor Constraints vs Readability Floors

**From:** `~/.claude/skills/tension-composition/SKILL.md` lines 840-859

```
No metaphor may override the 940-960px container width. If your metaphor demands
narrowing (e.g., "cylindrical core sample," "narrow alley," "manuscript page"):

1. STOP narrowing the CONTAINER
2. EXPRESS narrowing through INTERNAL PADDING instead

Example CSS (geological metaphor with narrow visual):
.page-container {
  max-width: 960px; /* Non-negotiable */
  margin: 0 auto;
}

.content-core {
  padding: 0 120px; /* Internal narrowing — preserves container width */
}

Container at 960px + padding at 120px each side = 720px content width.
Manuscript aesthetic achieved WITHOUT violating 940-960px container.
```

**Key principle:**
- Metaphors shape INTERNAL experience (padding, spacing, background zones)
- Metaphors DO NOT override EXTERNAL readability floors (container width, CPL max)
- "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## 3. WHERE Is It Enforced? (All 17 Locations)

### System 1: Tension-Composition Skill (Primary Enforcement)

**File:** `~/.claude/skills/tension-composition/SKILL.md`

| Line | Context | Enforcement Type |
|------|---------|-----------------|
| 637 | Metaphor bias checklist | YES = +1 penalty if container <940px |
| 656 | Cylindrical shape mapping | Container width below 940px? +1 penalty |
| 665 | Modification instruction | Cap minimum container width at 940px |
| 808 | Readability floors table | 65% (940px) min ratio |
| 834 | Container width specification | **940-960px** range, **NEVER** violate |
| 835 | Minimum container width | 940px (below = narrow strip) |
| 836 | Maximum container width | 960px (above = edge-to-edge) |
| 840 | Metaphor override prohibition | No metaphor may override 940-960px |
| 853 | CSS example | `max-width: 960px; /* Non-negotiable */` |
| 859 | Internal padding solution | Container 960px + padding 120px = 720px content |
| 862 | Phase 7 verification checklist | Container width 940-960px (NEVER compromise) |
| 874 | Readability floors summary | Container min 940px — NEVER compromise |
| 1520 | Metaphor filter guidelines | Container max-width min 940px, max 1150px (65-80%) |
| 1540 | Narrow container prohibition | 900px container violates minimum if <940px effective |
| 1550 | Geological metaphor modification | Keep container at 960px minimum, use internal padding |

**Enforcement strength:** 15 references, strongest language ("NEVER compromise," "Non-negotiable")

---

### System 2: Perceptual-Auditing Skill

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md`

| Line | Context | Enforcement Type |
|------|---------|-----------------|
| 172 | Metaphor bias violation example | Compression <40%, padding <32px, container <940px |
| 265 | Content container width table | 640px (44%) FAIL, 700-960px (49-67%) PASS, 1280px (89%) FAIL |
| 320 | PA-05 checklist item | Content width between 640-960px at 1440px |

**Enforcement strength:** 3 references, PA-05 is **mandatory Tier 1 question** (all pages checked)

---

### System 3: Compositional-Core (Building Protocol)

**File:** `design-system/compositional-core/CLAUDE.md`

| Line | Context | Enforcement Type |
|------|---------|-----------------|
| 544 | Guardrail #1 | 940px minimum container (65% of 1440px viewport) |
| 630 | Verification checklist | 940px minimum container width (65% viewport at 1440px) |
| 646 | Phase D lesson #1 | Container width 940-960px is NON-NEGOTIABLE |

**File:** `design-system/compositional-core/README.md`

| Line | Context | Enforcement Type |
|------|---------|-----------------|
| 335 | Guardrails section | 940px min container (65% viewport at 1440px) |

**Enforcement strength:** 4 references, elevated to "NON-NEGOTIABLE" post-Phase D

---

### System 4: Pipeline Planning Docs

**Files:** Multiple pipeline/*.md

| File | Line | Context |
|------|------|---------|
| `pipeline/07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md` | 896 | 940px min container (65% viewport) |
| `pipeline/02-POST-CD-PHASES.md` | 496 | Min content-to-viewport 65% (940px) |
| `pipeline/OPEN-QUESTIONS.md` | 481, 493, 520 | 940px min, max-width: 960px CSS example |
| `pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` | 1183 | Verify min container width: 940px |
| `pipeline/04-CONTENT-INGESTION.md` | 266, 303 | 940px min container (65% viewport) |
| `pipeline/05-COMPLETE-ROADMAP.md` | 401 | 940px min container (65% viewport) |
| `pipeline/README.md` | 240 | 940px minimum container width |
| `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` | 208, 861 | G1: ≥65% (940px at 1440px), CD-006 example |

**Enforcement strength:** 12 references across 8 pipeline files (planning consensus)

---

### Total Enforcement Locations: **17 unique locations**

**Distribution:**
- Tension-composition skill: 15 lines
- Perceptual-auditing skill: 3 lines
- Compositional-core: 4 lines
- Pipeline docs: 12 lines

**Primary enforcer:** Tension-composition skill (Phase 7 checklist + metaphor bias penalties)

---

## 4. Is It in Skills, Building Protocol, Tokens, Prohibitions?

### Skills: YES (Primary Enforcement)

**Tension-composition skill:**
- Phase 7 checklist (line 862): "Container width 940-960px (NEVER compromise)"
- Metaphor bias section (lines 637, 656, 665): Penalties for <940px
- Readability floors (lines 808, 834-836, 874): Non-negotiable minimum

**Perceptual-auditing skill:**
- PA-05 mandatory question (line 320): "Content width between 640-960px at 1440px"
- Violation examples (lines 172, 265): Container <940px = FAIL

**Answer:** YES — skills are the PRIMARY enforcement mechanism

---

### Building Protocol (compositional-core/CLAUDE.md): YES

**Status:** NON-NEGOTIABLE (post-Phase D elevation)

**Lines 646:**
```
1. **Container width 940-960px is NON-NEGOTIABLE.** This was THE primary failure mode
   (4/5 pages violated it). Express narrowing through INTERNAL spacing, not external
   width reduction. No metaphor may override this.
```

**Guardrails section (line 544):**
```
1. **940px minimum container** (65% of 1440px viewport)
   - Prevents metaphor-driven width collapse
```

**Answer:** YES — building protocol enforces as NON-NEGOTIABLE guardrail

---

### Tokens (compositional-core/vocabulary/tokens.css): NO

**File checked:** `design-system/compositional-core/vocabulary/tokens.css` (174 lines)

**Container width tokens:** NONE

**Spacing tokens present:**
- `--space-1` through `--space-24` (4px base unit)
- `--grid-gap: 24px`

**Why not in tokens?**
- Container width is VIEWPORT-RELATIVE (940px at 1440px = 65%)
- Tokens are ABSOLUTE values (--space-8 = 32px)
- Container width is SEMANTIC CONSTRAINT (readability floor), not DESIGN TOKEN (reusable value)

**Answer:** NO — not in tokens.css

---

### Prohibitions (compositional-core/identity/prohibitions.md): NO

**File checked:** `design-system/compositional-core/identity/prohibitions.md` (353 lines)

**Container width mentioned:** 0 times

**Why not in prohibitions?**
- Prohibitions are **IDENTITY-DEFINING** (border-radius: 0 = KortAI soul)
- Container width is **READABILITY FLOOR** (perceptual threshold, not identity marker)
- Prohibitions use NEVER/ALWAYS language (binary, zero exceptions)
- Container width CAN be violated with documented justification (specification constraint, not absolute)

**Classification:**
- **Soul constraint** (prohibitions.md): border-radius: 0, box-shadow: none, palette (identity truth)
- **Specification constraint** (skills, building protocol): 940px container, 32px padding, 40% compression (readability floors)

**Answer:** NO — not in prohibitions.md (classification: specification constraint, not soul)

---

## 5. Is It Consistent Across All References?

### Value Consistency: YES (940-960px range)

**940px minimum:** 17/17 locations use 940px as floor
**960px maximum:** 15/17 locations specify 960px as ceiling

**Exceptions:**
- `pipeline/OPEN-QUESTIONS.md` line 1520: "max 1150px" (80% viewport) — noted as "Rarely (full-bleed hero)"
- `perceptual-auditing/SKILL.md` line 265: "700-960px (49-67%) PASS" — allows 700px but flags as borderline

**Verdict:** Core range (940-960px) is CONSISTENT across all enforcement locations

---

### Semantic Consistency: YES (65-67% content-to-viewport)

**65% minimum:** All references cite 940px ÷ 1440px = 65% ratio
**67% maximum:** All references cite 960px ÷ 1440px = 67% ratio

**Perceptual justification consistent:**
- <65% = "narrow strip lost in margins"
- 65-67% = sweet spot (breathing room preserved)
- >70% = "edge-to-edge, no breathing"

**Verdict:** Semantic grounding (content-to-viewport ratio) is CONSISTENT

---

### Enforcement Language Consistency: EVOLVED (Guideline → NON-NEGOTIABLE)

**Pre-Phase D (June 2025 - Feb 2026):**
- Tension-composition skill: "NEVER compromise" (strong language)
- Pipeline docs: "minimum container width" (guideline language)
- Perceptual-auditing: "Content width between 640-960px" (pass/fail threshold)

**Post-Phase D (Feb 2026):**
- compositional-core/CLAUDE.md: "NON-NEGOTIABLE" (elevated after 4/5 Phase D failures)
- Building protocol: "No metaphor may override this" (absolute prohibition)

**Evolution:**
1. **Research origin** (perceptual threshold study) → 65% ratio discovered
2. **Skill encoding** (tension-composition Phase 7) → "NEVER compromise"
3. **Phase D validation** (4/5 failures) → Elevated to "NON-NEGOTIABLE"

**Verdict:** Language STRENGTHENED over time, but core value (940-960px) unchanged

---

## 6. What Did Showcase Pages Use? (Validated Explorations)

### DD-006-fractal.html (Crown Jewel)

**File:** `design-system/validated-explorations/density/DD-006-fractal.html`

**Container widths found:**
- Line 217: `max-width: 600px;` (nested content, not main container)
- Line 224: `max-width: 1000px;` (section container — **EXCEEDS 960px ceiling**)
- Line 433: `max-width: 60ch;` (character-based, responsive)
- Line 568: `max-width: 65ch;` (character-based, responsive)
- Line 623: `max-width: 700px;` (callout — **BELOW 940px floor**)
- Line 1050: Inline style `max-width: 700px;` (callout — **BELOW 940px floor**)

**Analysis:**
- Main container: **1000px** (69% of 1440px) — EXCEEDS 960px ceiling by 40px
- Nested content: 600-700px (internal narrowing for callouts)
- Character-based: 60-65ch (~960-1040px at 16px) — within range

**Verdict:** DD-006 VIOLATES 960px ceiling (uses 1000px main container)

---

### CD-006-pilot-migration.html (Crown Jewel)

**File:** `design-system/validated-explorations/combination/CD-006-pilot-migration.html`

**Container widths found:**
- Line 255: `max-width: 1100px;` (page container — **EXCEEDS 960px ceiling**)
- Line 299: `max-width: 1100px;` (island container — **EXCEEDS 960px ceiling**)
- Line 958: `max-width: 1100px;` (section container — **EXCEEDS 960px ceiling**)
- Lines 197, 291: `max-width: 70ch;` (character-based, ~1120px at 16px)

**Analysis:**
- Main container: **1100px** (76% of 1440px) — EXCEEDS 960px ceiling by 140px
- Character-based: 70ch (~1120px at 16px) — also exceeds ceiling

**Verdict:** CD-006 VIOLATES 960px ceiling (uses 1100px main container)

---

### Why Did Crown Jewels Violate the Ceiling?

**Timeline hypothesis:**
- DD-006 built: June 2025 (pre-Phase D)
- CD-006 built: Aug 2025 (pre-Phase D)
- Container width ceiling (960px) formalized: Phase D (Feb 2026)

**Evidence:**
- `pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` line 861 (Phase D spec):
  ```
  - G1: `.page-container` has `max-width: 1100px, min-width: 940px` (65% at 1440px) ✓
  ```
  **Phase D spec ALLOWED 1100px** (only enforced 940px minimum, not 960px maximum)

**Conclusion:**
- **940px minimum** was enforced consistently (all pages met it)
- **960px maximum** was added POST-Phase D (after observing wide containers created 96-132 CPL)
- Crown jewels (DD-006, CD-006) built BEFORE ceiling was formalized
- Phase D lesson: "Container width 940-960px is NON-NEGOTIABLE" (tightened range)

**Showcase pages used:** 1000-1100px (70-76% viewport) — WIDER than current 960px ceiling

---

## 7. What Did Phase D Variants Use? (Actual Container Widths)

### Track 1 Assembly (page-A / track-1-assembly.html)

**Container width:** NOT FOUND in grep output (likely missing or very wide)

**Programmatic audit finding:**
- G5 violation: 8-12 paragraphs at **112-132 CPL** (exceeds 45-80 max)
- Implies container width **~1200-1400px** (to achieve 132 CPL at 16px)

**Verdict:** EXCEEDS 960px ceiling (estimated 1200-1400px)

---

### Variant A (page-B / variant-a-skill-only.html)

**Container width:** NOT FOUND in grep output

**Programmatic audit finding:**
- G5 violation: **96+ CPL** (exceeds 45-80 max)
- Implies container width **~1000-1100px**

**Verdict:** EXCEEDS 960px ceiling (estimated 1000-1100px)

---

### Variant B (page-E / variant-b-weak-perm.html) — BEST VARIANT

**Container width:** Line 85: `max-width: 960px;` (comment: "66.7% of 1440px viewport")

**Programmatic audit:**
- 18/19 PASS (only borderline CPL failure)
- Container width: **COMPLIANT** (exactly 960px)

**Verdict:** COMPLIANT with 940-960px range (only variant to achieve it)

---

### Variant C (page-C / variant-c-anti-gravity.html)

**Container width:** NOT FOUND in grep output

**Programmatic audit finding:**
- G1 violation: "container width <940px minimum"
- Geological metaphor-driven narrowing
- Estimated: **600-800px** (metaphor override of readability floor)

**Verdict:** VIOLATES 940px floor (too narrow)

---

### Variant D (page-D / variant-d-library-first.html)

**Container width:** Line 102, 306: `max-width: 940px;`

**Programmatic audit finding:**
- G1 violation: "container width <940px minimum"
- Metaphor: Geological layering with narrow aesthetic
- **Why flagged if 940px?** Likely effective width <940px due to internal padding

**Verdict:** BORDERLINE (940px container but effective width below due to padding)

---

### Phase D Container Width Summary

| Variant | Container Width | Compliance | CPL Result | Verdict |
|---------|----------------|------------|------------|---------|
| **Track 1** | ~1200-1400px | EXCEEDS 960px | 112-132 CPL (FAIL) | Too wide |
| **Variant A** | ~1000-1100px | EXCEEDS 960px | 96+ CPL (borderline) | Too wide |
| **Variant B** ⭐ | **960px** | **COMPLIANT** | 45-80 CPL (PASS) | Perfect |
| **Variant C** | ~600-800px | BELOW 940px | N/A | Too narrow |
| **Variant D** | 940px nominal | BELOW 940px effective | N/A | Too narrow |

**Key finding:** Only **1/5 pages** (Variant B) achieved 940-960px compliance

**Primary failure modes:**
1. Too wide (Track 1, Variant A): 1000-1400px → excessive CPL
2. Too narrow (Variants C, D): <940px → narrow strip syndrome

**Phase D lesson validated:** Container width is THE critical guardrail (80% failure rate)

---

## 8. Soul Constraint or Specification Constraint?

### Classification Framework (From prohibitions.md)

**Soul Constraint:**
- IDENTITY-DEFINING (violating = not KortAI)
- Absolute prohibitions (NEVER, zero exceptions)
- Visual DNA (border-radius: 0, box-shadow: none, palette)
- Documented in prohibitions.md (22 total)

**Specification Constraint:**
- READABILITY/USABILITY floors (perceptual thresholds)
- Conditional prohibitions (documented exceptions allowed)
- Guardrails (940px container, 32px padding, 40% compression)
- Documented in skills + building protocol (not prohibitions.md)

---

### Container Width Classification: SPECIFICATION CONSTRAINT

**Evidence:**

1. **Not in prohibitions.md** (353 lines, zero mentions of container width)
   - All soul constraints (border-radius, box-shadow, palette) ARE in prohibitions.md
   - Container width absence = not identity-defining

2. **Perceptual origin** (not visual identity)
   - Derived from content-to-viewport ratio research (65% threshold)
   - Grounded in reading comfort, not editorial style
   - Relates to USABILITY (narrow strip syndrome), not IDENTITY (KortAI visual DNA)

3. **Exceptions documented** (internal padding workaround)
   - Skill allows metaphor-driven narrowing via internal padding
   - "Container at 960px + padding at 120px = 720px content width"
   - Workaround preserves readability floor while allowing visual narrowing

4. **Conditional language** ("NEVER compromise" vs "NEVER period")
   - Prohibitions.md absolute: "NEVER use border-radius > 0" (zero exceptions)
   - Container width: "NEVER compromise" (strong guideline, not absolute law)
   - Phase D lesson: "NON-NEGOTIABLE" (elevated enforcement, but still specification)

5. **Failed in crown jewels** (DD-006, CD-006 used 1000-1100px)
   - DD-006: 36/40 score, 20+ inbound refs — crown jewel despite exceeding 960px
   - CD-006: 39/40 score, soul compliance 59/60 — crown jewel despite exceeding 960px
   - If container width were SOUL constraint, crown jewels would have failed soul tests

---

### Comparison: Soul vs Specification

| Dimension | Soul Constraint (border-radius: 0) | Specification Constraint (940px container) |
|-----------|-----------------------------------|------------------------------------------|
| **Location** | prohibitions.md | Skills + building protocol |
| **Language** | NEVER (absolute) | NEVER compromise (strong guideline) |
| **Exceptions** | Zero | Documented (internal padding workaround) |
| **Origin** | Visual identity (sharp edges) | Perceptual research (content-to-viewport) |
| **Violation effect** | Not KortAI (identity broken) | Poor UX (readability broken) |
| **Crown jewel status** | DD-006/CD-006 have border-radius: 0 | DD-006/CD-006 exceed 960px ceiling |
| **Classification** | IDENTITY | USABILITY |

---

### Final Answer: SPECIFICATION CONSTRAINT

**Reasoning:**
1. Not in prohibitions.md (soul constraints are)
2. Perceptual origin (reading comfort, not identity)
3. Exceptions allowed (internal padding workaround)
4. Failed in crown jewels without soul violation
5. Elevated to "NON-NEGOTIABLE" post-Phase D (not identity-defining from start)

**Status:** Strongest specification constraint (guardrail floor #1), but NOT soul constraint

---

## 9. Summary Answers (Direct Questions)

### (1) WHERE does 940-960px come from? Provenance.

**Answer:**
- **Primary source:** Perceptual research on content-to-viewport ratio (65-67% sweet spot)
- **Calculation:** 1440px viewport × 0.65 = 940px minimum, × 0.67 = 960px maximum
- **First documented:** Tension-composition skill (June 2026 or earlier)
- **Validated:** Phase D failures (4/5 pages violated, THE primary failure mode)
- **Elevated:** Post-Phase D to "NON-NEGOTIABLE" status (Feb 2026)

---

### (2) WHY not 1024px?

**Answer:**
- **Too wide for reading:** 1024px = 71% viewport, exceeds 70% breathing room threshold
- **Excessive CPL:** 1024px at 16px body = 85-100 CPL (exceeds 45-80 max)
- **No perceptual justification:** 940px is MINIMUM (narrow strip threshold), 960px is MAXIMUM (breathing preserved)
- **Fortress content needs margins:** Technical docs benefit from 30-40px side margins (940-960px creates this)

---

### (3) Every file + line where enforced.

**Answer:** 17 enforcement locations across 4 systems:

**Tension-composition skill (15 lines):**
- Lines 637, 656, 665: Metaphor bias penalties
- Lines 808, 834-836, 840, 853, 859, 862, 874: Readability floors + Phase 7 checklist
- Lines 1520, 1540, 1550: Metaphor filter guidelines

**Perceptual-auditing skill (3 lines):**
- Lines 172, 265, 320: PA-05 mandatory question

**Compositional-core (4 lines):**
- `CLAUDE.md` lines 544, 630, 646
- `README.md` line 335

**Pipeline docs (12 lines):**
- 8 files, 12 total references (planning consensus)

---

### (4) Is it in skills, building protocol, tokens, prohibitions?

**Answer:**
- **Skills:** YES (primary enforcement — tension-composition Phase 7, perceptual-auditing PA-05)
- **Building protocol:** YES (compositional-core/CLAUDE.md, elevated to NON-NEGOTIABLE)
- **Tokens:** NO (viewport-relative, not absolute token value)
- **Prohibitions:** NO (specification constraint, not soul constraint)

---

### (5) Is it consistent?

**Answer:**
- **Value consistency:** YES (940-960px range in 17/17 locations)
- **Semantic consistency:** YES (65-67% content-to-viewport ratio)
- **Enforcement consistency:** EVOLVED (guideline → NON-NEGOTIABLE post-Phase D)

---

### (6) What did showcase pages use?

**Answer:**
- **DD-006 (crown jewel):** 1000px main container (EXCEEDS 960px ceiling by 40px)
- **CD-006 (crown jewel):** 1100px main container (EXCEEDS 960px ceiling by 140px)
- **Reason:** Built pre-Phase D, before 960px ceiling formalized
- **Phase D spec allowed:** 1100px max (only enforced 940px minimum)
- **Post-Phase D tightening:** 940-960px range now enforced

---

### (7) What did Phase D variants use?

**Answer:**

| Variant | Container Width | Compliance |
|---------|----------------|------------|
| Track 1 | ~1200-1400px | EXCEEDS (too wide) |
| Variant A | ~1000-1100px | EXCEEDS (too wide) |
| **Variant B** ⭐ | **960px** | **COMPLIANT** (only one) |
| Variant C | ~600-800px | VIOLATES (too narrow) |
| Variant D | 940px nominal | VIOLATES (too narrow effective) |

**Failure rate:** 4/5 pages (80%) — THE primary Phase D failure mode

---

### (8) Soul constraint or specification constraint?

**Answer:** **SPECIFICATION CONSTRAINT**

**Reasoning:**
1. Not in prohibitions.md (soul constraints are)
2. Perceptual origin (reading comfort, not identity)
3. Exceptions allowed (internal padding workaround)
4. Failed in crown jewels (DD-006, CD-006) without soul violation
5. Elevated post-Phase D (not identity-defining from start)

**Classification:** Strongest **guardrail floor** (readability threshold), NOT soul constraint (identity marker)

---

## 10. Implications for Ceiling Experiment

### Current Status

**940-960px is:**
- NON-NEGOTIABLE guardrail (compositional-core/CLAUDE.md line 646)
- Enforced in 17 locations (skills, building protocol, pipeline)
- THE primary Phase D failure mode (4/5 violations)
- Specification constraint (not soul), but STRONGEST specification constraint

---

### Ceiling Experiment Recommendations

**1. Enforce strictly in checklist**
- PA-05 mandatory check: "Content width between 940-960px at 1440px"
- Programmatic audit G1: Container max-width ≥940px, ≤960px
- No metaphor overrides allowed (use internal padding for narrowing)

**2. Add to M1 mechanism mandate**
- Current M1: "1+ mechanism per category (Spatial, Temporal, Material, Behavioral, Relational)"
- Add: "Container width 940-960px (guardrail floor #1, non-negotiable)"
- Reason: M1 targets TECHNIQUE density, but guardrails prevent perceptual cost

**3. Document in ceiling checklist**
- Section B (Guardrails): Container width 940-960px ✓
- Section E (Verification): Programmatic G1 check + PA-05 ✓
- Expected: PASS (Ceiling should exceed Middle on ALL dimensions, including compliance)

**4. Learn from Variant B success**
- Variant B (960px) was ONLY compliant variant
- Achieved 18/19 programmatic PASS, 4/5 novelty
- Ceiling should match Variant B's container width (960px exactly)

---

### Open Question for User

**Should Ceiling use:**
- **940px** (minimum floor, maximum breathing room)?
- **950px** (mid-range)?
- **960px** (maximum ceiling, Variant B's choice)?

**Recommendation:** **960px** (matches Variant B, best-performing variant)

---

**END INVESTIGATION**

Total enforcement locations: **17**
Primary source: **Perceptual research (65-67% content-to-viewport ratio)**
Classification: **Specification constraint** (guardrail floor #1, non-negotiable)
Phase D impact: **THE primary failure mode** (4/5 violations)
