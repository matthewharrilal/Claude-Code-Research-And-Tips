# Requirements Extraction: Ceiling Master Execution Prompt

**Date:** 2026-02-16
**Author:** brief-checklist-extractor (ceiling-prompt-team)
**Sources:** CEILING-PREPARATION-BRIEF.md (505 lines), CEILING-MASTER-CHECKLIST.md (1,071 lines), AUXILIARY-PRE-CEILING-AUDIT.md (745 lines), ENRICHMENT-VALIDATION-REPORT.md (377 lines)
**Total Source Material:** 2,698 lines
**Purpose:** Extract EVERY requirement for building the Ceiling master execution prompt

---

## 1. NON-NEGOTIABLE CONSTRAINTS

### Container Width: 940-960px (THE Primary Failure Mode)

**Classification:** SPECIFICATION CONSTRAINT (readability floor), not soul constraint
**Priority:** NON-NEGOTIABLE. Metaphor NEVER overrides this.
**Phase D Evidence:** 4/5 pages violated container width = THE primary failure mode

**Rule Statement:**
- Set `max-width: 960px` on page container at 1440px viewport
- Express metaphor-driven narrowing through INTERNAL padding (e.g., `padding: 0 120px` for 720px effective content width)
- NEVER reduce container width below 940px to express metaphor

**Provenance:** (BRIEF lines 184-202)
- 940px = 65% of 1440px viewport (perceptual threshold: below this = "narrow strip lost in margins")
- 960px = 67% (breathing room preserved)
- Enforced at 17 locations across 4 systems (tension-composition: 15 lines, PA: 3 lines, compositional-core: 4 lines, pipeline: 12 lines)

**Ceiling-Specific Risk:** (BRIEF lines 219-225, AUDIT lines 217-231)
- Metaphor derivation creates STRONG pressure to express metaphor through container width
- Examples: "geological compression" = 720px, "ocean expanse" = 1200px
- Rule must appear at 3+ locations in execution prompt with explicit "metaphor shapes INTERNAL experience, never EXTERNAL width"

**Enforcement Locations Required:**
1. Phase 0D Ceiling warning
2. Builder prompt guardrails section
3. Builder self-check phase

---

### Soul Constraints: 7/7 (Identity-Defining)

**Classification:** IDENTITY CONSTRAINTS (absolute requirements)
**Priority:** NON-NEGOTIABLE. Zero violations permitted.

**The Seven:**
1. `border-radius: 0` (no rounded corners)
2. `box-shadow: none` (no shadows)
3. No pure black (`#000000`)
4. No pure white (`#FFFFFF`)
5. Typography trinity (font-family, font-size, line-height all declared on body)
6. All h3 italic (`font-style: italic`)
7. No gradients (`linear-gradient`, `radial-gradient`)

**Verification:** Programmatic audit must verify all 7 via automated CSS scan

**Source:** CHECKLIST B-09 (lines 477-493)

---

### Per-Category Mechanism Minimums: 1+ Each (M1 Validated)

**Classification:** MANDATORY FLOOR
**Priority:** CRITICAL — identified by ALL 11 research agents + Middle experiment as THE limiting specification

**Minimum Table:**
| Category | Mechanisms Available | Minimum Required |
|----------|---------------------|------------------|
| Spatial (S) | #5, #6, #15 | 1+ |
| Hierarchy (H) | #1, #4, #11 | 1+ |
| Component (C) | #2, #9, #10 | 1+ |
| Depth/Emphasis (D) | #3, #7 | 1+ |
| Structure/Nav (N) | #12, #13, #17 | 1+ |

**Exception Clause:** (BRIEF lines 305-306)
"Per-category minimum is the DEFAULT. If content genuinely cannot support a category (e.g., narrative with no hierarchical structure), document the exception with rationale."

**Ceiling vs Middle:** (BRIEF lines 309-315, AUDIT lines 86-99)
- Keep "1+ per category" as mandatory floor for BOTH Middle and Ceiling
- Ceiling differentiator is REINFORCING PAIRS requirement, not higher per-category minimums
- "2+ per category" was REJECTED because it only binds on Spatial category for SYSTEM content (marginally justified)

**Natural Landing Zones:** (BRIEF lines 124-126)
- Middle: 8-10 mechanisms
- Ceiling: 12-15 mechanisms
- Counts are DESCRIPTIVE (what emerges), not PRESCRIPTIVE (what to target)

**Validation Evidence:** (ENRICHMENT lines 15-18)
- Middle experiment: S:1, H:3, C:4, D:2, N:3 = 13 total
- Content-driven distribution (not uniform 2-2-2-2-2)
- All 5 categories covered = 100% breadth

**Source:** BRIEF lines 35-40, CHECKLIST A-01 (lines 26-38), AUDIT lines 198-213, ENRICHMENT lines 13-19

---

### CPL: 45-80 Characters Per Line

**Classification:** GUARDRAIL (readability floor), not Critical-10
**Priority:** BINARY RULE with formula

**Formula:** (AUDIT lines 308-322)
```
CPL = (container-content-width-px) / (font-size-px) / 0.6

Example:
960px container - 64px padding = 896px content width
At 16px font: 896 / 16 / 0.6 = 93.3 CPL (FAIL, too wide)
At 18px font: 896 / 18 / 0.6 = 82.96 CPL (FAIL, over 80)
At 20px font: 896 / 20 / 0.6 = 74.67 CPL (PASS)
```

**Middle-Tier Baseline:** 82 CPL (+2 over spec)
**Ceiling Target:** 45-80 (STRICT)

**Builder Self-Check Required:** (CHECKLIST B-14, lines 557-569)
- Builder must calculate CPL using formula BEFORE file write
- Gate: cannot proceed if CPL < 45 or > 80

**Fix Options if Out of Range:**
1. Increase padding (reduces content width)
2. Increase font size (reduces chars per line)
3. Both

**Source:** AUDIT lines 289-322, ENRICHMENT lines 62-66

---

### Token Compliance: >= 80%

**Classification:** BINARY RULE with formula
**Priority:** HIGH — Middle failed this (66.5%)

**Formula:** (ENRICHMENT line 37)
```
Token Compliance = var() / (var() + raw values) >= 0.80
```

**Approved Raw Value Exceptions:**
- `border-width: 1px|3px|4px` (discrete values, no tokens)
- `line-height` unitless values (1.5, 1.7, etc.)
- `z-index` (layering, not spacing)
- `animation-timing-function` timing values

**Builder Self-Check Required:** (CHECKLIST B-15, lines 570-583, AUDIT lines 180-195)
- Builder scans CSS for raw hex/px values before file write
- Count var() references vs raw values
- Target: >= 80%
- Phase 4.9 Token Compliance Self-Check

**Root Cause from Middle:** (AUDIT lines 586-606)
- Issue is DISCIPLINE (builder didn't look up tokens), not token gaps
- 73 raw values used in Middle
- ~65-70 had existing token equivalents
- Only 5-8 values were genuine gaps

**Source:** BRIEF lines 99-102, CHECKLIST A-04 (lines 70-83), B-15 (lines 570-583), AUDIT lines 180-195

---

### Heading Spacing Ratio: >= 1.5:1

**Classification:** BINARY RULE (converted from judgment)
**Priority:** HIGH — Middle violated this as judgment call

**Rule:** (ENRICHMENT lines 33-35)
For all h2 and h3 elements:
```
margin-top / margin-bottom >= 1.5
```

**Why:** WCAG association principle — headings must visually "belong" to content below, not float ambiguously

**Verification Method:**
1. Measure COMPUTED margin-top (via browser devtools)
2. Measure COMPUTED margin-bottom
3. Calculate ratio
4. Account for margin collapse (may create different EFFECTIVE spacing than DECLARED)

**Examples:** (ENRICHMENT line 34)
- PASS: 48px / 24px = 2.0 ✓
- PASS: 32px / 16px = 2.0 ✓
- FAIL: 32px / 32px = 1.0 ✗
- FAIL: 24px / 20px = 1.2 ✗

**Programmatic Audit Check:** (AUDIT lines 325-340)
For each h3, measure computed margin-top / margin-bottom. PASS: >= 1.5:1 for ALL headings. FAIL: < 1.5:1 for any.

**Source:** BRIEF lines 80-84, CHECKLIST A-13 (lines 206-218), B-12 (lines 526-538), ENRICHMENT lines 33-35

---

### Landmark Completeness: Header + Footer + All Named Sections

**Classification:** BLOCKING GATE (Phase 5.5)
**Priority:** CRITICAL — prevents WOULD-NOT-SHIP defects

**The Gate:** (BRIEF lines 49-54, CHECKLIST A-03)
Between build completion (Phase 5) and audit start (Phase 6):
1. Team-lead verifies header exists (if plan specifies)
2. Team-lead verifies footer exists (if plan specifies)
3. Team-lead verifies section count matches plan
4. Gate is BLOCKING — cannot proceed until verification passes
5. If gate fails, team-lead messages builder to add missing landmarks

**Why Critical:** (AUDIT lines 145-159)
- Middle-tier missing footer despite plan specification
- Footer was WOULD-NOT-SHIP finding (severity-1)
- Builder implemented Sections A-E, stopped, never added Section F (footer)
- Costs 2 minutes to verify, prevents critical defects

**Verification Table:** (ENRICHMENT line 28)
```
| Landmark | Required? | Present? |
|----------|-----------|----------|
| Header   | YES/NO    | YES/NO   |
| Footer   | YES/NO    | YES/NO   |
| Section count | N | matches plan? |
```

**Source:** BRIEF lines 49-54, CHECKLIST A-03 (lines 56-69), B-02 (lines 367-381), AUDIT lines 145-159, ENRICHMENT line 28

---

## 2. CEILING-SPECIFIC REQUIREMENTS

### What Makes Ceiling Different from Middle

**Core Distinction:** (BRIEF lines 12-24)
- Ceiling is NOT "Middle with more mechanisms"
- Ceiling and Middle use the SAME 18-mechanism catalog
- The difference is WHY mechanisms are selected

**Four Dimensions That Separate Tiers:**

1. **Selection Logic:**
   - Middle: Content feature → mechanism (1:1 lookup)
   - Ceiling: Metaphor → shared semantic dimension → multiple mechanisms (1:many derivation)

2. **Reinforcing Pairs:**
   - Middle: Mechanisms solve different problems independently
   - Ceiling: 2+ mechanism pairs encode SAME semantic dimension through different CSS channels

3. **Scale Depth:**
   - Middle: 2 scales (Page + Component)
   - Ceiling: 4 scales (Navigation + Page + Section + Component)
   - Missing section-scale coherence accounts for 15-20% of perceived richness gap

4. **Metaphor Derivation:**
   - Middle: Pattern lookup table (tutorial → CRESCENDO)
   - Ceiling: Metaphor derived through full Phase 1-3 pipeline (multi-axis questioning, tension derivation, metaphor collapse)

**Mechanism Count:** (BRIEF lines 14, 164-165)
The count increase (8-10 → 12-15) is a BYPRODUCT of multi-channel encoding, not a target.

**Source:** BRIEF lines 12-24, 257-283, ENRICHMENT line 49

---

### Reinforcing Pairs Requirement (THE Ceiling Differentiator)

**Definition:** (BRIEF lines 145-151)
At least 2 mechanism pairs where both mechanisms encode the SAME semantic dimension through different CSS channels (multi-channel coherence).

**Examples:**
- Border-weight gradient (#1) + zone background (#7) both encode "geological depth"
  - Weight increases AND background darkens as content deepens
- Spacing compression (#4) + typographic scale (#11) both encode "importance"
  - Padding shrinks AND heading size shrinks together

**Requirement:** (BRIEF lines 147-149, CHECKLIST A-06)
"For at least 3 mechanism pairs, document how they REINFORCE each other (multi-channel encoding of same dimension)"

**Build Plan Template Addition:**
- Section required: MECHANISM INTERACTIONS
- For each pair: explain HOW they reinforce (not just that they coexist)
- Example quality bar: "Border-weight 4px + Color red both express criticality"
- Interaction must be IMPLEMENTED in HTML, not just planned

**Why It Matters:** (BRIEF lines 258-263, CHECKLIST lines 505-508)
- Closes gap between "applied correctly" and "felt through"
- Middle had mechanisms coexisting independently
- Ceiling needs them interacting
- Tests mechanism-mechanism coherence

**Source:** BRIEF lines 145-151, CHECKLIST A-06 (lines 101-114), B-10 (lines 497-508)

---

### 4-Scale Fractal Coherence

**Requirement:** (BRIEF lines 152-154, 318-321)
Pattern visible at 4 scales: Navigation + Page + Section + Component

**Middle vs Ceiling:** (BRIEF lines 276-283)
- Middle deployed 12 mechanisms but only 2-scale coherence (Page + Component)
- DD-006 achieved 4-scale coherence
- Missing section-scale coherence accounts for 15-20% of perceived richness gap

**Why Section-Scale Matters:** (BRIEF lines 278-283)
"The missing section-scale coherence — each section INTERNALLY echoing the page-level pattern (sparse intro to dense detail to sparse resolution) — accounts for 15-20% of perceived richness. This is more impactful than adding 3-4 more mechanisms."

**Fractal Table Structure:** (CHECKLIST B-22, lines 680-693)
- Navigation scale pattern documented
- Page scale pattern documented
- Section scale pattern documented
- Component scale pattern documented
- Consistency pairs: Nav→Page, Page→Section, Section→Component (3 pairs minimum)
- CSS evidence provided for each scale

**Build Plan Requirement:**
Must document pattern expression at all 4 scales with CSS evidence.

**Source:** BRIEF lines 152-154, 276-283, CHECKLIST A-20 (lines 313-325), B-22 (lines 680-693)

---

### Metaphor Derivation (Phases 1-3)

**Requirement:** (BRIEF lines 374-382, CHECKLIST A-18)
Metaphor derived through full Phase 1-3 pipeline, NOT pattern lookup.

**Three Phases:**

**Phase 1: Tension Extraction** (BRIEF line 377)
- Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
- Identify irreducible tensions from content
- Score richness potential
- Deliverable: >= 3 tensions documented

**Phase 2: Metaphor Derivation** (BRIEF line 378)
- Tension → metaphor collapse
- Structural isomorphism search
- Domain search for cross-domain metaphor
- Deliverable: 1 primary metaphor selected

**Phase 3: Semantic Dimension Mapping** (BRIEF line 379)
- Metaphor → 3-5 semantic dimensions
- Each dimension maps to mechanisms
- Deliverable: dimension-mechanism mapping table

**Metaphor Resonance Gate:** (BRIEF line 381, CHECKLIST lines 288-290)
All 3 must PASS:
- Authenticity: YES (metaphor genuinely fits content, not forced)
- Cross-domain: YES (metaphor from different domain than content)
- Multi-dimensional: YES (metaphor encodes 3+ dimensions)

**Deliverable:** `01-metaphor-derivation.md`

**Agent:** metaphor-agent (Opus 4.6)

**Source:** BRIEF lines 374-382, CHECKLIST A-18 (lines 282-295), B-17 (lines 602-614)

---

### Mechanism Selection Through Metaphor Lens

**Requirement:** (BRIEF lines 383-390, CHECKLIST A-19)
Selection process: metaphor dimension → multiple mechanisms encoding same dimension (1:many derivation)

**Different from Middle's Lookup:** (BRIEF lines 20-22, 305-309)
- Middle: Content feature → mechanism (1:1)
- Ceiling: Metaphor dimension → 2-4 mechanisms in different CSS channels

**Process:**
1. Start with metaphor from Phase 3
2. Identify semantic dimensions from metaphor
3. For each dimension, select 2-4 mechanisms that can encode it
4. Document HOW metaphor informs mechanism choice

**Build Plan Section Required:**
- Mechanism selection rationale
- Dimension-to-mechanism mapping
- Example: "Geological depth" → border-weight + zone backgrounds + spacing compression

**Agent:** planner (Opus 4.6)

**Deliverable:** `02-build-plan.md` with metaphor-driven mechanism table

**Source:** BRIEF lines 383-390, CHECKLIST A-19 (lines 297-310), ENRICHMENT line 49

---

### Rhythm Variation: 3-Transition Minimum

**Requirement:** (BRIEF lines 75-79, CHECKLIST A-12)
Page must include >= 3 DIFFERENT transition types between major sections.

**Three Transition Types:**
- SMOOTH: Gradual spacing change
- BRIDGE: Visual break element (divider, breathing zone)
- BREATHING: Generous whitespace pause

**Binary Rule:** (ENRICHMENT line 22)
"Your page MUST include at least 3 DIFFERENT transition types between major sections."

**Why Critical:** (BRIEF lines 75-79, 133-136)
- THE highest-leverage perceptual improvement from Middle
- Middle had metronomic rhythm (every section→section gap felt identical)
- Without variation, 14-15 mechanisms still feel "metronomic rather than musical"

**Verification:** (CHECKLIST B-11, lines 511-523)
- PA identifies >= 3 distinct transition types across full-page sequence
- Transitions identified by PA (not just claimed by builder)
- Examples: spacing change + zone background change + visual break element
- No metronomic rhythm (Middle's failure mode avoided)

**Source:** BRIEF lines 75-79, CHECKLIST A-12 (lines 191-205), B-11 (lines 511-523), ENRICHMENT line 22

---

### Weight Distribution: >= 2 Focal Points in Bottom 50%

**Requirement:** (CHECKLIST A-15, B-13)
At least 2 visual focal points located in bottom half of page.

**Why:** (AUDIT lines 680-693)
- Middle had ONE strong focal point (architecture diagram) but no visual anchors in later sections
- Creates top-heavy weight distribution
- Page "peaks early then fades steadily"

**Focal Point Definition:**
- Dark header
- Diagram with solid offset
- Callout with strong border
- Code block
- Data table
- Any high-impact visual element

**Verification:** (CHECKLIST B-13, lines 542-554)
- PA identifies focal points
- At least 2 focal points in bottom half
- Not top-heavy (Middle's failure mode avoided)
- PA explicitly confirms balanced weight distribution

**Source:** CHECKLIST A-15 (lines 237-249), B-13 (lines 542-554), AUDIT lines 680-693

---

## 3. GATE/CHECKPOINT ITEMS

### Gate 1 (Entry): Content Selection

**Criteria:** (BRIEF line 213)
- 800-1,200 words
- 4+ structural types
- Binary soul rules (7/7)

**Phase:** Phase 0
**Agent:** content-selector (if needed) OR reuse Middle's SYSTEM content
**Decision:** BRIEF resolves to reuse SYSTEM content (line 347)

---

### Gate 2 (Addition Test): Track Classification

**Purpose:** (BRIEF lines 214-216)
Determine if content goes to Track 1 (Middle, pattern lookup) or Track 2 (Ceiling, metaphor derivation)

**Test:** Addition Test
- PASSES → Track 1 (Middle tier, skip Phases 1-3)
- FAILS → Track 2 (Ceiling tier, full pipeline Phases 1-3)

**For Ceiling experiment:** Force Track 2 (metaphor derivation)

---

### Gate 3 (Middle Floor): All 5 Categories Present

**Criteria:** (BRIEF line 221)
All 5 mechanism categories present (S, H, C, D, N minimum 1+ each)

**When:** After Phase 4 (Planning)
**Verification:** Planner outputs per-category table showing >= 1 mechanism per category
**BLOCKING:** Cannot proceed to build if any category has zero mechanisms

---

### Gate 4 (Builder Self-Check): CPL + Tokens + Landmarks

**Criteria:** (BRIEF lines 56-61, CHECKLIST A-04, AUDIT lines 236-250)
Builder verifies BEFORE writing file:
1. CPL 45-80 (using formula)
2. Token compliance >= 80% (var() scan)
3. Landmark presence (header, footer, all named sections)
4. Heading spacing ratio >= 1.5:1 (all h2/h3)
5. Container width 940-960px
6. Soul constraints 7/7

**Phase:** Phase 5 (Build) — after implementation, before file write
**BLOCKING:** Builder cannot write file if any check fails
**Agent:** builder (self-verification)

**Source:** BRIEF lines 56-61, CHECKLIST A-04 (lines 70-83), B-03 (lines 383-397), AUDIT lines 236-250

---

### Gate 5 (Landmark Completeness): Header + Footer + Sections

**Criteria:** (BRIEF lines 49-54, CHECKLIST A-03, B-02)
Team-lead verifies:
1. Header exists (if plan specified)
2. Footer exists (if plan specified)
3. Section count matches plan

**Phase:** Phase 5.5 (between build and audit)
**BLOCKING:** Team-lead cannot proceed to Phase 6 until verification passes
**If Fails:** Team-lead messages builder to add missing landmarks
**Agent:** team-lead (verification)

**Source:** BRIEF lines 49-54, CHECKLIST A-03 (lines 56-69), B-02 (lines 367-381)

---

### Gate 6 (Quality): PA-05 + Soul + Container

**Criteria:** (BRIEF line 408)
- PA-05 (Designed): 4/4 sub-criteria
- Soul compliance: 7/7
- Container width: 940-960px

**Phase:** Phase 6 (Audit)
**Agents:** programmatic-auditor + perceptual-auditor-1 + perceptual-auditor-2

---

### Metaphor Resonance Gate (Ceiling-Only)

**Criteria:** (BRIEF line 381, CHECKLIST A-18)
All 3 must PASS:
- Authenticity: YES
- Cross-domain: YES
- Multi-dimensional: YES

**Phase:** Between Phase 2 (metaphor derivation) and Phase 3 (semantic mapping)
**BLOCKING:** Cannot proceed if metaphor fails any criterion
**Agent:** metaphor-agent (self-assessment)

**Source:** BRIEF line 381, CHECKLIST lines 288-290

---

## 4. SUCCESS CRITERIA

### The 11 Success Criteria (with Thresholds)

| Criterion | Threshold | Verification | Source |
|-----------|-----------|-------------|--------|
| **PA-05 (Designed)** | 4/4 sub-criteria PASS | Dual PA | CHECKLIST B-04 (lines 399-412) |
| **D3 (Novelty)** | >= 2/3 signals NOVEL | Blind novelty evaluator | CHECKLIST B-05 (lines 415-427) |
| **Better than Middle** | >= 3 specific perceptual improvements | Comparative auditor | CHECKLIST B-06 (lines 430-443) |
| **5-Category Coverage** | All 5 categories, total 11-15 | Programmatic audit | CHECKLIST B-07 (lines 446-461) |
| **Container Width** | 940-960px | Programmatic audit | CHECKLIST B-08 (lines 463-474) |
| **Soul Compliance** | 7/7 | Programmatic audit | CHECKLIST B-09 (lines 476-493) |
| **No WOULD-NOT-SHIP** | Zero severity-1 findings | Dual PA | CHECKLIST B-24 (lines 712-724) |
| **Metaphor Expression** | PA observes "felt through" not "stiff" | Dual PA | CHECKLIST B-25 (lines 726-740) |
| **Reinforcing Pairs** | >= 2 documented and implemented | Build plan + programmatic | BRIEF line 435 |
| **4-Scale Coherence** | Nav + Page + Section + Component with CSS | Build plan + programmatic | BRIEF line 436 |
| **Inter-Agent Messaging** | >= 5 substantive messages | Message log | BRIEF line 437 |

---

### PA-05 Sub-Criteria (The "Designed" Threshold)

**Requirement:** All 4 sub-criteria must PASS

**PA-05a: Layout Sophistication** (ENRICHMENT lines 118-120)
- PASS: >= 2 non-default layout elements at 1440px
- Examples: asymmetric grid, width variation, positioned elements
- FAIL: All elements stacked vertically with uniform width

**PA-05b: Spatial Range** (ENRICHMENT lines 118, 120)
- PASS: >= 2.0x padding range ratio at 1440px
- Formula: max padding / min padding >= 2.0
- Middle baseline: 2.0x (exactly at threshold, zero margin)
- Ceiling target: > 2.0x (with margin)

**PA-05c: Hierarchy Clarity** (ENRICHMENT lines 118, 120)
- PASS: Visual hierarchy visible under 20px blur test
- Hierarchy must survive perceptual degradation
- FAIL: All elements same visual weight

**PA-05d: Compositional CSS** (ENRICHMENT lines 118, 120)
- PASS: >= 15% non-framework CSS (measured programmatically, not estimated)
- Formula: (lines of CSS that aren't framework defaults) / (total CSS lines) >= 0.15
- Middle baseline: passed (exact % not recorded)
- Must MEASURE, not ESTIMATE

**Scoring Rubric:** (ENRICHMENT lines 124-125)
- 4/4 = YES (designed threshold met)
- 3/4 = YES WITH RESERVATIONS (marginal, would ship but not proudly)
- 2/4 = NO (formatted, not designed)

**Source:** ENRICHMENT lines 117-126, CHECKLIST B-04 (lines 399-412)

---

### PA-05 Four Additional Sub-Criteria (Enrichment E10)

**Added to perceptual-auditing skill:** (ENRICHMENT lines 117-126)

1. **DESIGNED** (lines 120-122)
   - PASS: Intentional composition visible (choices made FOR this content)
   - FAIL: Assembled components (generic template applied)

2. **COHERENT** (lines 120, 122)
   - PASS: Feels like one designer made all choices
   - FAIL: Feels like multiple systems bolted together

3. **PROPORTIONATE** (lines 120, 122)
   - PASS: Spatial balance across page
   - FAIL: Top-heavy, unbalanced, or monotonous

4. **POLISHED** (lines 120, 122)
   - PASS: Execution quality high, no missing elements (footer present?)
   - FAIL: Rough edges, missing elements, incomplete structure

**Note:** These are perceptual judgments to complement the original 4 quantitative PA-05 criteria (a/b/c/d). Total PA-05 assessment now has 4 quantitative + 4 qualitative dimensions.

---

### D3 Novelty Signals (>= 2/3 Required)

**D3.1: Structural Fingerprint** (CHECKLIST lines 419-420)
- NOVEL: Page structure not seen in any reference pages
- DERIVATIVE: Structure recognizable from references

**D3.2: CSS Value Overlap** (CHECKLIST line 420)
- NOVEL: < 30% CSS value overlap with reference pages
- DERIVATIVE: >= 30% overlap

**D3.3: Mechanism Combination** (CHECKLIST line 421)
- NOVEL: >= 1 unique mechanism combination not in references
- DERIVATIVE: All combinations seen before

**Scoring:** (CHECKLIST line 422)
At least 2 of 3 signals must indicate NOVEL.

**Blind Protocol Required:** (CHECKLIST B-18, lines 617-630)
- Evaluator receives 3 unlabeled pages (A, B, C) in randomized order
- Zero context on experiment goals before evaluation
- Only AFTER blind assessment, labels revealed
- Evaluator must confirm: "I did not know which page was newest"

**Source:** CHECKLIST B-05 (lines 415-427), B-18 (lines 617-630)

---

### Better Than Middle: >= 3 Perceptual Improvements

**Requirement:** (CHECKLIST B-06, lines 430-443)
Comparison uses SAME content (SYSTEM documentation) for clean tier comparison. >= 3 observations where Ceiling shows perceptual improvement over Middle.

**Improvements Must Be:**
- Specific (not "generally better")
- Perceptual (visible in screenshots)
- Documented with CSS evidence

**Examples of Valid Improvements:**
- "Ceiling has 3 transition types (smooth, bridge, breathing) vs Middle's uniform 64px gaps"
- "Ceiling border-weight gradient shows progressive depth (4→3→2→1) vs Middle's discrete categories"
- "Ceiling has 2 focal points in bottom half vs Middle's top-heavy single focal point"

**Agent:** comparative-auditor (Sonnet 4.5, fresh-eyes)
**Deliverable:** `05-comparison-report.md`

**Source:** CHECKLIST B-06 (lines 430-443), BRIEF line 429

---

### Timing Target: 60-100 Minutes

**Estimate:** (BRIEF lines 147-153, 489-490, CHECKLIST A-09)
- Middle took ~35 min (actual) vs 70-100 min (predicted) = 2-3x faster
- Ceiling estimate: 60-100 min (recalibrated for parallel agent model)
- Includes all phases: metaphor derivation + planning + building + audits + verdict

**Timing Breakdown:** (CHECKLIST lines 149-153)
- ~4-5 min/agent × 10-12 agents × 3-4 waves = 45-100 min total
- Metaphor derivation overhead (Phases 1-3 may not parallelize cleanly)
- Inter-agent communication overhead (+10-20 min)

**Verification:** (CHECKLIST B-21, lines 664-677)
- Time measured from team-lead launch to verdict complete
- Result: 45-100 min validates parallel agent model
- NOT 150-220 min (old sequential model from tier methodology)

**Source:** BRIEF lines 147-153, CHECKLIST A-09 (lines 146-159), B-21 (lines 664-677)

---

## 5. CHECKLIST ITEMS (All 62 from CEILING-MASTER-CHECKLIST.md)

### SECTION A: PLAN VERIFICATION (21 items)

**A-01: M1 Applied to Skill Permanently** (lines 26-38)
- [ ] Phase 0D includes per-category minimum table (S:1+, H:1+, C:1+, D:1+, N:1+)
- [ ] Phase 4.0 includes per-category deployment mandate
- [ ] Search result for "sample 2-4" returns zero directive instances
- [ ] Skill version incremented to indicate M1 integration

**A-02: Inter-Agent Communication Protocol Defined** (lines 40-52)
- [ ] Builder prompt: "Ask planner clarifying questions if plan specifications ambiguous"
- [ ] Auditor prompt: "Flag issues mid-process to team-lead before proceeding"
- [ ] Team-lead prompt: "Request targeted fixes from builder if gaps detected"
- [ ] Communication protocol distinguishes clarification / issue flagging / iteration

**A-03: Landmark Completeness Gate Exists** (lines 56-69)
- [ ] Gate is BLOCKING (team-lead cannot proceed until verification passes)
- [ ] Verification checks: header exists, footer exists, section count matches plan
- [ ] If gate fails, team-lead requests builder to add missing landmarks
- [ ] Gate runs BEFORE launching any auditors

**A-04: Builder Self-Check Requirements Documented** (lines 70-83)
- [ ] CPL verification formula included: `(container-content-width) / (font-size-px) / 0.6 = CPL`
- [ ] Token compliance scan method: count var() refs, count raw hex/px, calculate ratio
- [ ] Approved raw value contexts listed (border-width: 1px|3px|4px, line-height unitless)
- [ ] Self-check is BEFORE file write (builder cannot proceed if checks fail)

**A-05: Ceiling Per-Category Minimums Established** (lines 86-99)
- [ ] Minimums defined: S:1+, H:1+, C:1+, D:1+, N:1+ (same as Middle, per BRIEF resolution)
- [ ] Expected natural landing documented: 12-15 mechanisms total
- [ ] Rationale: Ceiling uses reinforcing pairs, not higher per-category minimums
- [ ] Planner prompt includes these minimums in mechanism selection criteria

**A-06: Mechanism Interaction Requirement Defined** (lines 101-114)
- [ ] Requirement: "For at least 3 mechanism pairs, document how they REINFORCE each other"
- [ ] Build plan template includes MECHANISM INTERACTIONS section
- [ ] Example: border-weight gradient + color encoding both express security criticality
- [ ] Interaction requirement separate from deployment count

**A-07: Blind Novelty Evaluation Protocol Designed** (lines 116-128)
- [ ] Protocol: "You will receive 3 unlabeled pages (A, B, C). Identify which is newest."
- [ ] Pages presented in randomized order
- [ ] Evaluator receives zero context on experiment goals before evaluation
- [ ] Only AFTER blind assessment complete, evaluator receives labels

**A-08: Dual Perceptual Auditor Protocol Defined** (lines 130-143)
- [ ] Both auditors receive identical zero-context prompts
- [ ] Both audit in parallel (no communication until both complete)
- [ ] Reconciliation protocol: agreement = high confidence, disagreement = flag
- [ ] Team-lead reconciles findings from both audits

**A-09: Timing Re-Estimated Using Parallel Agent Model** (lines 146-159)
- [ ] Estimate: ~4-5 min/agent × 10-12 agents × 3-4 waves = 45-100 min total
- [ ] Includes metaphor derivation overhead
- [ ] Includes inter-agent communication overhead (+10-20 min)
- [ ] Cost-benefit documented: Ceiling ~60-90 min vs Middle ~35 min

**A-10: Programmatic Audit Generated FROM Build Plan** (lines 161-173)
- [ ] Auditor extracts all mechanism names from build plan Section 3
- [ ] Auditor generates verification checklist for each mechanism
- [ ] Auditor verifies all planned landmarks exist (header, footer, sections)
- [ ] Auditor reports: PLANNED vs DEPLOYED vs MISSING

**A-11: Builder Context Decision Documented** (lines 175-189)
- [ ] Decision documented with rationale
- [ ] If (A) names only: builder prompt includes SendMessage fallback
- [ ] If (B) full entries: mechanism catalog excerpts in builder prompt
- [ ] Decision addresses footer bug root cause

**A-12: Rhythm Variation Requirement Added** (lines 191-205)
- [ ] Binary rule in skill: ">= 3 DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING)"
- [ ] Planner must document transition types in build plan
- [ ] Build plan template includes TRANSITION TABLE section
- [ ] Minimum 3 distinct types across full-page sequence

**A-13: Heading Spacing Ratio Is Binary Rule** (lines 206-218)
- [ ] Guardrails table: "Heading spacing ratio: >= 1.5:1 above/below for h2/h3"
- [ ] Programmatic audit measures COMPUTED margin-top and margin-bottom
- [ ] Formula: margin-top / margin-bottom >= 1.5 for ALL h2/h3
- [ ] Builder prompt includes margin-collapse awareness

**A-14: Measurement Precision Standards Defined** (lines 220-233)
- [ ] Format: "PA-05b: PASS at 2.3x (threshold 2.0x, margin +0.3x)"
- [ ] Programmatic audit reports exact measured values, not approximate
- [ ] PA distinguishes "clearly passes" from "technically passes" from "barely passes"
- [ ] All threshold comparisons report actual values + margins

**A-15: Weight Distribution Requirement Defined** (lines 237-249)
- [ ] PA question: "Are there >= 2 visual focal points in bottom 50% of page?"
- [ ] Planner must document focal point distribution in build plan
- [ ] Requirement: >= 2 focal points in bottom half
- [ ] Acceptance criteria defined for "focal point"

**A-16: Two-Dimension Designed Model Documented** (lines 251-264)
- [ ] Two-dimension table in tier methodology
- [ ] Middle tier = vocabulary fluency (lookup: content → mechanism)
- [ ] Ceiling tier = compositional fluency (derivation: metaphor → mechanism)
- [ ] Flagship tier = multi-pattern composition
- [ ] "Designed" reframed as vocabulary threshold, not quality spectrum

**A-17: Fresh-Eyes Zero-Context Protocol Maintained** (lines 266-279)
- [ ] Auditor receives: screenshots only (1440px + 768px), PA questions, rating scale
- [ ] Auditor does NOT receive: mechanism names, pattern names, tier model, build plan
- [ ] Prompt slice < 300 lines, mostly PA question definitions
- [ ] Zero design context confirmed by prompt review

**A-18: Metaphor Derivation Phases Defined** (lines 282-295)
- [ ] Phase 1: Tension extraction from content
- [ ] Phase 2: Metaphor derivation from tensions
- [ ] Phase 3: Semantic dimension mapping (metaphor → dimensions)
- [ ] Metaphor resonance gate: authenticity, cross-domain, multi-dimensional (all 3 PASS)
- [ ] Deliverable: 01-metaphor-derivation.md

**A-19: Mechanism Selection Through Metaphor Lens Defined** (lines 297-310)
- [ ] Selection process: metaphor dimension → multiple mechanisms (1:many derivation)
- [ ] Different from Middle's lookup: content feature → mechanism (1:1)
- [ ] Each semantic dimension maps to 2-4 mechanisms in different CSS channels
- [ ] Planner documents HOW metaphor informs mechanism choice

**A-20: 4-Scale Fractal Coherence Defined** (lines 313-325)
- [ ] Scales: Navigation + Page + Section + Component (4 scales, 6 consistency pairs)
- [ ] Hierarchical coherence check: Nav → Page → Section → Component consistent chain
- [ ] Build plan must document pattern expression at all 4 scales
- [ ] Fractal table structure includes all 4 scales with evidence

**A-21: File Architecture Matches Expected Output** (lines 327-345)
- [ ] 01-metaphor-derivation.md (metaphor-agent, Phase 1-3)
- [ ] 02-build-plan.md (planner, Phase 4)
- [ ] ceiling-page.html (builder, Phase 5)
- [ ] 03-programmatic-audit.md (programmatic-auditor, Phase 6a)
- [ ] 04a-perceptual-audit.md (perceptual-auditor-1, Phase 6b)
- [ ] 04b-perceptual-audit.md (perceptual-auditor-2, Phase 6b)
- [ ] 05-comparison-report.md (comparative-auditor, Phase 7a)
- [ ] 06-novelty-assessment.md (novelty-evaluator, Phase 7b)
- [ ] 07-VERDICT.md (verdict-synthesizer, Phase 8)

---

### SECTION B: EXECUTION SUCCESS (25 items)

**B-01: Inter-Agent Communication Actually Happened** (lines 352-364)
- [ ] Builder sent >= 1 message to planner (clarifying question)
- [ ] Auditor sent >= 1 message to team-lead (issue flagging)
- [ ] Team-lead sent >= 1 message to builder (iteration request)
- [ ] Total messages >= 5 (demonstrates actual communication)
- [ ] Messages are substantive (clarification/issues/iteration), not status updates

**B-02: Landmark Completeness Gate Triggered and Passed** (lines 367-381)
- [ ] Team-lead verified header exists (if plan specified)
- [ ] Team-lead verified footer exists (if plan specified)
- [ ] Team-lead verified section count matches plan
- [ ] Verification happened BEFORE launching auditors
- [ ] If verification failed, team-lead requested builder fix

**B-03: Builder Self-Check Executed Before File Write** (lines 383-397)
- [ ] Builder calculated CPL using formula (45-80 verified)
- [ ] Builder scanned CSS for token compliance (>= 80% verified)
- [ ] Builder verified all landmarks present before writing file
- [ ] Builder verified heading spacing ratio >= 1.5:1
- [ ] Self-check results documented in builder output or messages

**B-04: PA-05 = 4/4 (Designed Threshold Met)** (lines 399-412)
- [ ] PA-05a: >= 2 non-default layout elements at 1440px
- [ ] PA-05b: >= 2.0x padding range ratio at 1440px
- [ ] PA-05c: Visual hierarchy visible under blur test
- [ ] PA-05d: >= 15% compositional CSS (measured programmatically)
- [ ] All 4 criteria verified at BOTH 1440px and 768px viewports

**B-05: D3 >= 2/3 (Novelty Signals Present)** (lines 415-427)
- [ ] D3.1 (Structural Fingerprint): NOVEL or DERIVATIVE
- [ ] D3.2 (CSS Value Overlap): < 30% overlap with reference pages
- [ ] D3.3 (Mechanism Combination): >= 1 unique combination
- [ ] At least 2 of 3 signals indicate NOVEL
- [ ] Blind evaluation protocol confirmed

**B-06: Better Than Middle-Tier** (lines 430-443)
- [ ] Comparison uses SAME content (SYSTEM documentation)
- [ ] >= 3 observations where Ceiling shows perceptual improvement
- [ ] Improvements documented with screenshots and CSS evidence
- [ ] Comparative auditor is fresh-eyes (didn't build either page)

**B-07: 5-Category Coverage Achieved** (lines 446-461)
- [ ] Spatial: >= 1 mechanisms deployed (1+ floor)
- [ ] Hierarchy: >= 1 mechanisms deployed
- [ ] Component: >= 1 mechanisms deployed
- [ ] Depth/Emphasis: >= 1 mechanisms deployed
- [ ] Structure/Nav: >= 1 mechanisms deployed
- [ ] Total: 11-15 mechanisms (natural landing zone for Ceiling)

**B-08: Container Width = 940-960px** (lines 463-474)
- [ ] Computed max-width: 940px <= value <= 960px
- [ ] Programmatic audit reports exact value
- [ ] Container discipline maintained (no violations)

**B-09: Soul Compliance = 7/7** (lines 476-493)
- [ ] border-radius: 0
- [ ] box-shadow: none
- [ ] No pure black (#000000)
- [ ] No pure white (#FFFFFF)
- [ ] Typography trinity (all declared on body)
- [ ] All h3 italic
- [ ] No gradients
- [ ] 7/7 verified by programmatic check

**B-10: Mechanism Interaction Documented** (lines 497-508)
- [ ] At least 3 mechanism pairs documented in build plan
- [ ] For each pair: explains HOW they reinforce (multi-channel encoding)
- [ ] Example quality: "Border-weight 4px + Color red both express criticality"
- [ ] Interaction is IMPLEMENTED in HTML (not just planned)

**B-11: Rhythm Variation Achieved** (lines 511-523)
- [ ] >= 3 different transition treatments across full-page sequence
- [ ] Transitions identified by PA (not just claimed by builder)
- [ ] Examples: spacing change + zone background change + visual break
- [ ] No metronomic rhythm (Middle's failure mode avoided)

**B-12: Heading Spacing Ratio >= 1.5:1** (lines 526-538)
- [ ] For all h2 elements: margin-top / margin-bottom >= 1.5
- [ ] For all h3 elements: margin-top / margin-bottom >= 1.5
- [ ] Programmatic measurement (not perceptual judgment)
- [ ] Accounts for margin collapse

**B-13: Weight Distribution Balanced** (lines 542-554)
- [ ] PA identifies focal points (dark header, diagram, callout, etc.)
- [ ] At least 2 focal points located in bottom half of page
- [ ] Not top-heavy (Middle's failure mode avoided)
- [ ] PA explicitly confirms balanced weight distribution

**B-14: CPL Within 45-80 Range** (lines 557-569)
- [ ] CPL measurement: 45 <= value <= 80
- [ ] Builder self-checked using formula before file write
- [ ] Not marginal pass (Middle was 82 chars, +2 over spec)
- [ ] Measured at 1440px viewport

**B-15: Token Compliance >= 80%** (lines 570-583)
- [ ] Token usage: var() / (var() + raw values) >= 80%
- [ ] Builder self-checked before file write
- [ ] Not marginal pass (Middle was 66.5%, -13.5 points below)
- [ ] Approved raw value contexts excluded from count

**B-16: No Missing Landmarks (Footer Exists)** (lines 586-599)
- [ ] If plan specifies footer, HTML includes <footer> element
- [ ] PA sees designed conclusion (not "page just ends")
- [ ] Landmark gate caught any missing elements before audit
- [ ] No "screens of emptiness"

**B-17: Metaphor Derivation Completed** (lines 602-614)
- [ ] Phase 1: Tensions extracted (>= 3 tensions documented)
- [ ] Phase 2: Metaphor derived (1 primary metaphor selected)
- [ ] Phase 3: Semantic dimensions mapped (metaphor → 3-5 dimensions)
- [ ] Metaphor resonance gate passed (authenticity YES, cross-domain YES, multi-dimensional YES)
- [ ] Deliverable complete and coherent

**B-18: Novelty Evaluation Was Blind** (lines 617-630)
- [ ] Evaluator received 3 unlabeled pages (A, B, C) in randomized order
- [ ] Evaluator had zero context on experiment goals before evaluation
- [ ] Evaluator didn't know which page was "the experiment"
- [ ] Only AFTER blind assessment, labels and context revealed
- [ ] Evaluator confirms: "I did not know which page was newest"

**B-19: Dual Perceptual Audit Reconciled** (lines 633-645)
- [ ] 04a-perceptual-audit.md exists (auditor 1)
- [ ] 04b-perceptual-audit.md exists (auditor 2)
- [ ] Team-lead reconciled: agreement = high confidence, disagreement = flagged
- [ ] Both auditors were fresh-eyes (zero design context)
- [ ] Reconciliation results documented in verdict

**B-20: Programmatic Audit Checked ALL Planned Mechanisms** (lines 648-663)
- [ ] Auditor extracted mechanism names from build plan Section 3
- [ ] Auditor verified EACH planned mechanism is deployed
- [ ] Auditor checked ALL planned landmarks (header, footer, sections)
- [ ] Report format: "Mechanism #1 Border-Weight: DEPLOYED ✓" or "MISSING ✗"
- [ ] Zero planned elements missing (100% deployment)

**B-21: Execution Time Matches Re-Estimate** (lines 664-677)
- [ ] Time measured from team-lead launch to verdict complete
- [ ] Result: 45-100 min (Ceiling tier estimate)
- [ ] NOT 150-220 min (old sequential model)
- [ ] Timing includes all phases: metaphor + planning + building + audits + verdict

**B-22: 4-Scale Fractal Coherence Demonstrated** (lines 680-693)
- [ ] Navigation scale pattern documented
- [ ] Page scale pattern documented
- [ ] Section scale pattern documented
- [ ] Component scale pattern documented
- [ ] Consistency pairs: Nav→Page, Page→Section, Section→Component (3 pairs minimum)
- [ ] CSS evidence provided for each scale

**B-23: PA-05 Margins Reported** (lines 696-711)
- [ ] PA-05a: exact count (not ">= 2" — e.g., "4 elements")
- [ ] PA-05b: exact ratio + margin (e.g., "2.3x, threshold 2.0x, margin +0.3x")
- [ ] PA-05c: qualitative judgment with confidence level
- [ ] PA-05d: measured percentage (not estimated — e.g., "18.5%")
- [ ] All margins documented (no bare pass/fail)

**B-24: No WOULD-NOT-SHIP Findings** (lines 712-724)
- [ ] Zero CRITICAL severity findings
- [ ] Zero "major flow issues" (no missing footer, header, structural incompleteness)
- [ ] Zero "this feels unfinished" observations
- [ ] PA ship verdict: "YES" or "YES WITH MINOR RESERVATIONS" (not "YES WITH RESERVATIONS")

**B-25: Metaphor Expression Felt Through** (lines 726-740)
- [ ] PA includes question about compositional confidence
- [ ] PA observes metaphor influence (perceptual evidence)
- [ ] Not "professionally stiff" (Middle's quality descriptor)
- [ ] PA notes whether page feels "designed with intent" vs "specifications applied correctly"

---

### SECTION C: RETROSPECTIVE INTEGRATION (16 items)

**C-01: Binary Rules Achieved 100% Compliance** (lines 746-760)
- [ ] Container width: PASS (binary rule)
- [ ] Soul constraints 7/7: PASS (binary rules)
- [ ] Heading spacing ratio >= 1.5:1: PASS (converted from judgment to binary)
- [ ] Token compliance >= 80%: PASS (converted via self-check)
- [ ] CPL 45-80: PASS (converted via formula)
- [ ] Zero judgment rules failed

**C-02: Information Loss Between Instances Mitigated** (lines 762-775)
- [ ] Builder used SendMessage >= 1 time to ask planner clarifying question
- [ ] Builder did not guess or interpret — asked when uncertain
- [ ] Example: If plan says "Footer Mirror," builder asked what mirroring means
- [ ] No structural elements missing due to builder not understanding plan

**C-03: Fresh-Eyes Auditing Found Issues Loaded Agents Miss** (lines 777-791)
- [ ] Zero overlap between PA findings and programmatic audit findings
- [ ] PA found perceptual issues (rhythm, weight, flow, atmosphere)
- [ ] Programmatic audit found technical issues (CPL, tokens, container, soul)
- [ ] Complete separation confirms fresh-eyes value

**C-04: Flat Topology Scaled to 10-12 Agents** (lines 793-807)
- [ ] Team structure: 1 team-lead + 10-12 workers (no intermediate captains)
- [ ] Communication: file-based + SendMessage (NOT file-only)
- [ ] Per-file ownership: 1 agent = 1 output file (zero contention)
- [ ] Zero file conflicts during execution
- [ ] Team-lead context stayed manageable (< 30K tokens)

**C-05: Per-Category Minimums Produced Natural Distribution** (lines 809-823)
- [ ] All 5 categories covered (100% coverage)
- [ ] Distribution varies per category based on content (not uniform)
- [ ] Total count 11-15 (natural landing zone)
- [ ] Build plan justifies each mechanism based on content structure
- [ ] No forced mechanisms (all feel appropriate)

**C-06: Opus Planner + Sonnet Workers Cost-Effective** (lines 825-837)
- [ ] Planner: Opus 4.6 (creative composition for metaphor)
- [ ] All other agents: Sonnet 4.5 (execution fidelity)
- [ ] Cost: 1-2 Opus + 9-11 Sonnet
- [ ] Quality maintained (no degradation from Sonnet workers)

**C-07: Pre-Baked CSS Blocks Reduced Context** (lines 839-853)
- [ ] :root block (custom properties)
- [ ] Base typography block
- [ ] Accessibility patterns block
- [ ] Responsive strategy block
- [ ] Builder context reduced by 70-85% vs reading all source files
- [ ] Zero interpretation errors on pre-baked elements

**C-08: Content-Mechanism Fit Drove Selection** (lines 855-869)
- [ ] Mechanism justification section exists
- [ ] Each mechanism: "I deploy this BECAUSE..." with content reasoning
- [ ] No "to hit category minimum" justifications (content-driven, not quota-driven)
- [ ] Metaphor influences selection but content validates appropriateness

**C-09: Timing Discrepancy Explained** (lines 871-882)
- [ ] Estimated time documented
- [ ] Actual time measured
- [ ] Discrepancy analyzed (if 8-11x gap like Middle, explain)
- [ ] Parallel agent model validated or invalidated
- [ ] Future timing estimates updated based on Ceiling result

**C-10: Vocabulary Fluency vs Compositional Fluency Tested** (lines 884-900)
- [ ] PA includes explicit question about compositional confidence
- [ ] PA compares Ceiling to Middle on this dimension
- [ ] Result determines whether metaphor enables "felt through" quality
- [ ] Middle was "applied correctly" — is Ceiling "felt through"?

**C-11: Prompt Slicing Blind Spots Addressed** (lines 902-916)
- [ ] Landmark gate verified all structural elements before audit
- [ ] Builder used SendMessage to clarify ambiguous plan elements
- [ ] Zero structural elements missing (footer, header, planned sections)
- [ ] Prompt slicing documented: what builder saw, what excluded, why

**C-12: Evaluation Methodology Improved** (lines 918-931)
- [ ] Blind novelty evaluation (B-18 confirms)
- [ ] Dual perceptual auditors (B-19 confirms)
- [ ] PA-05d measured programmatically, not estimated (B-04 confirms)
- [ ] Pass margins reported for all criteria (B-23 confirms)
- [ ] Reproducibility improved over Middle

**C-13: Mechanism Interaction Explored** (lines 933-946)
- [ ] Build plan documents mechanism pairs that REINFORCE (B-10 confirms)
- [ ] PA observes whether interactions are FELT (not just claimed)
- [ ] Analysis: Do interacting mechanisms create perceptual coherence vs independent coexistence?
- [ ] Ceiling tests interaction hypothesis (Middle had coexistence)

**C-14: Top 3 Middle Defects Prevented** (lines 948-962)
- [ ] Footer exists (B-16 confirms) — Middle WOULD-NOT-SHIP avoided
- [ ] Token compliance >= 80% (B-15 confirms) — Middle 66.5% failure avoided
- [ ] CPL 45-80 (B-14 confirms) — Middle 82 chars violation avoided
- [ ] All 3 defects resolved via gates + self-checks (not luck)

**C-15: Perceptual Improvements Over Middle Documented** (lines 964-976)
- [ ] Comparison includes Middle-tier page as baseline
- [ ] >= 3 specific observations where Ceiling improves over Middle
- [ ] Improvements documented with screenshots + CSS evidence
- [ ] Tests whether Ceiling's metaphor creates perceptual divergence from Middle's lookup

**C-16: All Open Questions from Middle Addressed** (lines 978-992)
- [ ] Q1 (per-category vs count): Ceiling uses per-category
- [ ] Q2 (builder needs catalog entries): Decision made (A-11 confirms)
- [ ] Q3 (PA-05d actual percentage): Measured programmatically (B-04 confirms)
- [ ] Q4 (Middle natural landing zone): Ceiling provides n=2 data point
- [ ] All 4 questions from Master Retro XII addressed

---

### Top 3 Items Most Likely to Be Missed (CHECKLIST lines 1020-1048)

**#1: B-01 — Inter-Agent Communication Actually Happened**
- Why likely missed: Agents may have SendMessage capability but still work in isolation
- Prevention: Team-lead checks message count at Phase 5 completion; if zero, prompts agents
- Detection: Message log empty or < 5 messages total

**#2: B-16 — No Missing Landmarks (Footer Exists)**
- Why likely missed: Landmark gate exists in plan, but team-lead might skip verification
- Prevention: Team-lead MUST check HTML before launching auditors
- Detection: PA says "page just ends" or "no visual ending"

**#3: B-18 — Novelty Evaluation Was Blind**
- Why likely missed: Novelty evaluator might receive labeled pages by accident
- Prevention: Team-lead creates 3 files (page-A/B/C.html) with randomized assignment
- Detection: Novelty evaluator references "the Ceiling experiment" before completing blind assessment

---

## 6. AUDIT ITEMS (34 from AUXILIARY-PRE-CEILING-AUDIT.md)

### CRITICAL (12 items requiring 4-6 hours)

**1. M1 Per-Category Minimums (AUDIT lines 198-213)**
- Replace "sample 2-4" at 3 locations in skill
- Add exception clause
- Priority: CRITICAL — identified by ALL research as THE limiting spec
- **Status:** APPLIED per ENRICHMENT lines 13-19

**2. Border-Weight Application Modes (AUDIT lines 26-43)**
- Add to mechanism-catalog.md: PROGRESSIVE vs DISCRETE modes
- Examples: Security layers (progressive) vs callout types (discrete)
- Priority: CRITICAL — affects all pages using #1 mechanism
- **Status:** APPLIED per ENRICHMENT lines 93-100

**3. Landmark Completeness Gate (AUDIT lines 145-159)**
- Add Phase 4.7B to skill
- Binary verification table (header/main/footer)
- Priority: CRITICAL — prevents WOULD-NOT-SHIP defects
- **Status:** APPLIED per ENRICHMENT line 28

**4. Container Width Non-Negotiable (AUDIT lines 217-231)**
- Add at 3+ locations in skill: "metaphor NEVER overrides container width"
- Priority: CRITICAL — THE Phase D failure mode
- **Status:** APPLIED per ENRICHMENT lines 55-60

**5. Builder Self-Check Phase (AUDIT lines 236-250)**
- Add Phase 2→3 boundary gate
- 8-item checklist: container, CPL, tokens, landmarks, soul, heading ratios, rhythm, mechanisms
- Priority: CRITICAL — shifts quality leftward
- **Status:** PARTIALLY APPLIED per ENRICHMENT lines 193-195

**6. Rhythm Variation Requirement (AUDIT lines 126-142)**
- Add Phase 4.2B: 3-transition minimum
- Priority: HIGH — prevents mechanical spacing
- **Status:** APPLIED per ENRICHMENT line 22

**7. Token Compliance Self-Check (AUDIT lines 180-195)**
- Add Phase 4.9: >= 80% formula
- Priority: HIGH — Middle failed this
- **Status:** APPLIED per ENRICHMENT line 37

**8. Programmatic Checklist from Plan (AUDIT lines 271-286)**
- Generate checklist FROM build plan at Phase 1, apply at Phase 3
- PLANNED vs DEPLOYED vs MISSING
- Priority: HIGH — ensures plan fidelity
- **Status:** NOT YET APPLIED (execution prompt item)

**9. CPL Formula for Builder (AUDIT lines 308-322)**
- Add to builder prompt Appendix B
- Formula with examples
- Priority: HIGH — enables self-verification
- **Status:** APPLIED per ENRICHMENT lines 62-66

**10. Prompt Slicing Strategy (AUDIT lines 429-446)**
- Document Middle-tier slicing decisions
- What each agent MUST see vs MUST NOT see
- Priority: HIGH — prevents information contamination
- **Status:** APPLIED per ENRICHMENT lines 145-154

**11. Information Isolation Matrix (AUDIT lines 484-502)**
- Table: agents (rows) × MUST/MAY/MUST-NOT see (columns)
- Priority: HIGH — prevents context contamination
- **Status:** APPLIED per ENRICHMENT lines 155-166

**12. Token Gap = Discipline Not Availability (AUDIT lines 586-606)**
- Builder prompt: "Read tokens.css BEFORE writing CSS"
- Priority: HIGH — fixes root cause
- **Status:** PARTIALLY APPLIED in Phase 4.9

---

### HIGH PRIORITY (15 items requiring 3-4 hours)

Remaining HIGH items from AUDIT that are NOT skill enrichments (require execution prompt integration):
- Heading spacing ratio programmatic verification (AUDIT lines 325-340)
- Rhythm variation measurement (AUDIT lines 342-359)
- PA-05 sub-criteria calibration (AUDIT lines 362-385)
- PA margin collapse warning (AUDIT lines 388-403)
- PA never sees plan diff (AUDIT lines 405-421)
- Two-instance pattern rationale (AUDIT lines 448-464)
- Fresh-eyes protocol rationale (AUDIT lines 466-482)
- Timing discrepancy explanation (AUDIT lines 503-520)
- Designed vs Formatted distinction (AUDIT lines 524-544)
- Richness = vocabulary fluency insight (AUDIT lines 546-563)
- Middle-tier "professional but stiff" context (AUDIT lines 565-583)
- Token usage hints (AUDIT lines 608-623)

---

### MEDIUM (7 items) and LOW (13 items)

MEDIUM and LOW priority items from AUDIT lines 44-71, 625-693 are catalog enrichments, anti-pattern documentation, and tier calibration improvements. These improve quality but are NOT blocking for Ceiling execution.

**Status per ENRICHMENT:**
- Mechanism impact profiles: APPLIED (E7, lines 70-91)
- Zone background semantic mappings: APPLIED (E9, lines 102-113)
- Fresh-eyes principle note: APPLIED (lines 133-136)
- Margin collapse warning: APPLIED (lines 138-141)

Remaining MEDIUM/LOW items are documentation improvements, not execution blockers.

---

## 7. ENRICHMENT STATUS (20 from ENRICHMENT-VALIDATION-REPORT.md)

### APPLIED AND VERIFIED (20 items)

All 20 enrichments from ENRICHMENT-VALIDATION-REPORT Section 1 have been APPLIED and cross-validated:

1. **E1: M1 Per-Category Minimums** — APPLIED (3 locations, zero "sample 2-4" directives)
2. **E2: Rhythm Variation 3-Transition** — APPLIED (Phase 4.2C, binary rule)
3. **E3: Landmark Completeness Gate** — APPLIED (Phase 4.7B, blocking)
4. **E4: Heading Spacing Ratio 1.5:1** — APPLIED (guardrails table + enforcement)
5. **E5: Token Compliance Self-Check** — APPLIED (Phase 4.9, formula)
6. **E6: Ceiling Context Box** — APPLIED (7 bullet points, NON-NEGOTIABLE width)
7. **Container Width NON-NEGOTIABLE** — APPLIED (3+ locations)
8. **CPL Formula** — APPLIED (lines 853-888, formula with examples)
9. **E7: Impact Profiles ALL 18 Mechanisms** — APPLIED (5 HIGH, 8 MEDIUM, 5 LOW)
10. **E8: Application Mode Guidance #1** — APPLIED (PROGRESSIVE vs DISCRETE)
11. **E9: Zone Background Semantic Mappings #7** — APPLIED (4-zone table)
12. **E10: PA-05 Sub-Criteria** — APPLIED (4 qualitative criteria)
13. **E11: Rhythm Questions Ceiling Elevation** — APPLIED (PA-17/PA-41 note)
14. **Fresh-Eyes Principle Note** — APPLIED (lines 46-48, NON-NEGOTIABLE)
15. **Margin Collapse Warning** — APPLIED (PA skill lines 316-317)
16. **PROMPT-SLICING-STRATEGY.md** — APPLIED (504 lines, 10 agents)
17. **INFORMATION-ISOLATION-MATRIX.md** — APPLIED (514 lines, 10x15 matrix)
18. **compositional-core/CLAUDE.md status** — APPLIED (line 8)
19. **design-system/CLAUDE.md status** — APPLIED (lines 9, 232-266, 287)

**One Minor Inconsistency:** (ENRICHMENT lines 289-303)
Phase 4.0 natural landing table (lines 1044-1048) shows Ceiling: 8-12 mechanisms, but Phase 0D and BRIEF say Ceiling: 12-15 mechanisms. This is a cosmetic documentation inconsistency, not a functional conflict. The mandatory requirements (1+ per category, 2+ reinforcing pairs, 4 scales) are consistent.

**Recommendation:** Update Phase 4.0 lines 1044-1048 to align with Phase 0D and BRIEF:
- Middle: 8-10 mechanisms
- Ceiling: 12-15 mechanisms
- Flagship: 16-18 mechanisms

---

### REMAINING GAPS (10 items requiring execution prompt)

**From ENRICHMENT Section 4 (lines 245-276):**

1. **CP-02 / A-02: Agent communication protocol** — Builder→planner, auditor→team-lead, team-lead→builder
2. **CP-05: Ceiling master execution prompt** — 2-3 hours, largest work item
3. **CP-08 / A-07: Blind novelty evaluation protocol** — 3 unlabeled pages randomized
4. **CP-09 / A-08: Dual PA protocol** — 2 independent fresh-eyes, reconciliation
5. **A-09: Timing estimates** — ~60-100 min for parallel agents
6. **A-10: Programmatic audit FROM build plan** — PLANNED vs DEPLOYED vs MISSING
7. **A-11: Builder context decision** — Names + 1-line + SendMessage fallback (decision documented in PROMPT-SLICING-STRATEGY.md)
8. **A-14: Measurement precision standards** — Verdict template with MARGIN column
9. **A-15: Weight distribution requirement** — >= 2 focal points in bottom 50%
10. **A-21: File architecture** — 9 expected output files

---

## 8. GAPS AND OPEN QUESTIONS

### Must Answer Before Ceiling (2 questions)

**Q1: Builder Context — Full Catalog or Names Only?** (BRIEF lines 456-461)

**Option A (names only):**
- Builder sees mechanism name + 1-line description from plan
- Uses SendMessage to ask planner for clarification if unclear
- Reduces builder context by ~400 lines

**Option B (full catalog entries):**
- Builder sees full mechanism catalog excerpts in prompt
- No SendMessage needed for mechanism understanding
- Increases builder context by ~400 lines

**Recommendation:** (AUDIT lines 175-189, ENRICHMENT line 257)
Option A with SendMessage fallback. The PROMPT-SLICING-STRATEGY.md documents this decision (lines 68-73, builder MAY see "Mechanism names + 1-line descriptions from build plan").

**Rationale:**
- Footer bug suggests builder didn't understand "Footer Mirror" without catalog entry
- But full catalog bloats builder context from ~400 lines to ~800 lines
- SendMessage provides escape hatch: if builder doesn't understand mechanism name, ask planner

**Decision Required:** Human must confirm Option A vs Option B before writing builder prompt slice.

---

**Q2: Planner and Metaphor-Agent — Same or Separate Instance?** (BRIEF lines 462-463)

**Option A (separate instances):**
- Metaphor-agent (Opus) does Phases 1-3, outputs metaphor derivation
- Planner (Opus) reads metaphor derivation, does Phase 4 mechanism selection
- Exploits two-instance pattern: planner has no continuation bias from metaphor derivation
- Total: 2 Opus instances

**Option B (same instance):**
- Planner (Opus) does Phases 1-3 AND Phase 4 in one session
- Saves 1 agent, reduces orchestration complexity
- Risk: continuation bias (planner anchors to its own metaphor framing)
- Total: 1 Opus instance

**Recommendation:** (AUDIT lines 448-464)
Option A (separate instances). The two-instance pattern exploits LLM continuation bias: instance that writes "this will be X" has strong bias toward implementing X. Separate instances = planner has NO continuation bias from metaphor derivation.

**Decision Required:** Human must confirm before finalizing agent topology.

---

### Should Answer Eventually (5 questions)

**Q3: Is Per-Category the Driver or Just Higher Count?** (BRIEF line 465)
Middle experiment can't isolate which factor drove improvement. Ablation study (count-only vs per-category on same content) would resolve. Deferred to post-Ceiling (action item D-10).

**Q4: What's the Natural Middle-Tier Landing Zone?** (BRIEF line 467)
One experiment produced 12. Need 5+ experiments to establish distribution. Ceiling provides n=2 data point.

**Q5: Can "Felt Through" Be Operationalized?** (BRIEF line 469)
PA distinguishes "applied correctly" from "felt through" but no metric. Is this Ceiling/Flagship differentiator? Ceiling experiment provides data.

**Q6: Does Content-Selector Firewall Matter?** (BRIEF line 471)
Adversarial review predicts 80%+ output similarity between firewalled and non-firewalled. Deferred test (action item D-02).

**Q7: Timing Model Accuracy** (BRIEF line 477)
Middle took 35 min vs 70-100 predicted. Ceiling estimated at 60-100 min (recalibrated from 150-220). If Ceiling takes 40 min, it changes cost-benefit calculation. If 150 min, overhead question matters more.

---

### Flagged But Not Blocking (2 observations)

**External Validity:** (BRIEF line 475)
All evaluation is internal. PA-05 was designed, measured, and applied by this project. External validity (professional designer review, user testing) unaddressed. Should be done before declaring tier model "production-ready," but doesn't block experiment.

**Same Content Risk:** (BRIEF lines 326-332)
SYSTEM content is concrete and procedural. Metaphor works best with abstract/conceptual content. Forcing metaphor on functional content may produce strained result.

**Resolution:** Run Ceiling with SAME content first (comparison rigor wins). If metaphor feels forced/strained and Ceiling doesn't clearly exceed Middle, THEN run Ceiling-B with abstract content before concluding "metaphor doesn't work."

---

## 9. EXECUTION PROMPT STRUCTURE (from BRIEF Section 8)

### Phases

**Phase 0: Content Selection** (BRIEF line 375)
REUSE Middle's content selection output (SYSTEM documentation).

**Phase 1-3: Metaphor Derivation** (BRIEF lines 377-382)
- Agent: metaphor-agent (Opus 4.6)
- Round 1: Multi-axis questioning
- Round 2: Tension derivation
- Round 3: Metaphor collapse
- Gate: Metaphor resonance (authenticity/cross-domain/multi-dimensional all YES)
- Deliverable: 01-metaphor-derivation.md

**Phase 4: Planning** (BRIEF lines 384-391)
- Agent: planner (Opus 4.6)
- Input: Metaphor + catalog + pattern table
- Selection THROUGH metaphor lens (1:many derivation)
- Per-category minimums: S:1+, H:1+, C:1+, D:1+, N:1+
- 2+ reinforcing pairs documented
- 4-scale fractal table
- Gate: All 5 categories, interaction table complete, 4 scales documented
- Deliverable: 02-build-plan.md

**Phase 5: Build** (BRIEF lines 393-398)
- Agent: builder (Sonnet 4.5)
- Input: Build plan + pre-baked CSS + metaphor summary
- Self-check BEFORE file write: CPL, tokens, landmarks
- Communication: SendMessage to planner for clarifications
- Gate: All self-checks PASS
- Deliverable: ceiling-page.html

**Phase 5.5: Landmark Completeness Gate** (BRIEF lines 400-403)
- Agent: team-lead
- Verify: header, footer, section count matches plan
- BLOCKING — do not proceed until verified
- If fails: team-lead messages builder to add missing elements

**Phase 6: Audit (parallel)** (BRIEF lines 405-409)
- 6a: Programmatic audit (generated FROM build plan, PLANNED vs DEPLOYED vs MISSING)
- 6b: Dual perceptual audit (both zero-context, identical inputs)
- Gate: 7/7 soul, container 940-960px, PA-05 4/4
- Deliverables: 03-programmatic-audit.md, 04a-perceptual-audit.md, 04b-perceptual-audit.md

**Phase 7: Evaluation (parallel)** (BRIEF lines 411-414)
- 7a: Comparative audit (Ceiling vs Middle, >= 3 perceptual improvements)
- 7b: Blind novelty evaluation (3 unlabeled pages randomized)
- Deliverables: 05-comparison-report.md, 06-novelty-assessment.md

**Phase 8: Verdict Synthesis** (BRIEF lines 416-420)
- Agent: verdict-synthesizer (Sonnet 4.5)
- Input: All audit + evaluation outputs + PA reconciliation
- Report pass MARGINS for all criteria
- Include adversarial self-check (3 strongest challenges to verdict)
- Deliverable: 07-VERDICT.md

---

### Team Topology

**Structure:** (BRIEF lines 350-352)
Flat file-bus with messaging enabled. 1 team-lead + 10-12 workers (no intermediate captains). Per-file ownership (1 agent = 1 output file, zero contention).

**Agent Count and Roles:** (BRIEF lines 354-369)

| Agent | Model | Role | Output File |
|-------|-------|------|-------------|
| team-lead | Opus 4.6 | Orchestration, gates, messaging hub | (coordination only) |
| metaphor-agent | Opus 4.6 | Phases 1-3: metaphor derivation | 01-metaphor-derivation.md |
| planner | Opus 4.6 | Phase 4: mechanism selection through metaphor | 02-build-plan.md |
| builder | Sonnet 4.5 | Phase 5: HTML/CSS implementation | ceiling-page.html |
| programmatic-auditor | Sonnet 4.5 | Phase 6a: binary compliance FROM build plan | 03-programmatic-audit.md |
| perceptual-auditor-1 | Sonnet 4.5 | Phase 6b: fresh-eyes PA (zero context) | 04a-perceptual-audit.md |
| perceptual-auditor-2 | Sonnet 4.5 | Phase 6b: independent fresh-eyes PA | 04b-perceptual-audit.md |
| comparative-auditor | Sonnet 4.5 | Phase 7a: Ceiling vs Middle comparison | 05-comparison-report.md |
| novelty-evaluator | Sonnet 4.5 | Phase 7b: blind 3-page evaluation | 06-novelty-assessment.md |
| verdict-synthesizer | Sonnet 4.5 | Phase 8: final synthesis | 07-VERDICT.md |

**Total:** 10 agents (1 team-lead + 9 workers)
**Model split:** 3 Opus (team-lead, metaphor-agent, planner — creative roles) + 7 Sonnet (execution roles)

---

### Risk Mitigations (BRIEF lines 441-451)

| Risk | Mitigation | Source |
|------|------------|--------|
| Metaphor feels forced on technical content | Same content first; if strained, run Ceiling-B with abstract content | pipeline-analyst |
| Builder misses structural elements | Landmark completeness gate (Phase 5.5) | meta-auditor |
| Metronomic rhythm despite metaphor | 3-transition minimum in skill (Phase 4.2C) | skill-auditor |
| Metaphor overrides container width | 940-960px NON-NEGOTIABLE at 3+ locations | width-investigator |
| Single-evaluator bias | Dual PA + blind novelty protocol | checklist-architect |
| Agents don't actually message | Team-lead checks message count at Phase 5; if zero, prompts agents | checklist-architect |
| Builder doesn't understand mechanism names | Decision: name + 1-line + SendMessage fallback | meta-auditor |
| Token compliance failure repeats | Builder self-check with var() scan before file write | meta-auditor |

---

## 10. VERBIAGE SPECIFICATION (from BRIEF Section 3)

### Middle Tier (Unchanged)

**Wording:** (BRIEF lines 121-133)
"Deploy at least 1 mechanism from each of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). Allow content-mechanism fit to determine how many beyond the minimum."

**Per-Category Table:**
| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| Spatial (S) | #5, #6, #15 | 1+ |
| Hierarchy (H) | #1, #4, #11 | 1+ |
| Component (C) | #2, #9, #10 | 1+ |
| Depth/Emphasis (D) | #3, #7 | 1+ |
| Structure/Nav (N) | #12, #13, #17 | 1+ |

**Natural landing zone:** 8-12 mechanisms. Counts are DESCRIPTIVE (what emerges), not PRESCRIPTIVE (what to target).

---

### Ceiling Tier (New)

**Full Wording:** (BRIEF lines 139-166)

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
The count increase (8-12 -> 12-15) is a BYPRODUCT of multi-channel deployment,
not a target.
```

---

### Design Decisions (BRIEF lines 170-177)

**Key points:**
- "1+ per category" stays the same for both tiers
- "2+ per category" was rejected (only forces 1 additional mechanism in Spatial; marginally justified)
- Counts remain descriptive (12-15 range in "Recommended," not required)
- Reinforcing pairs + 4 scales inherently produce higher counts without forcing
- No Flagship creep (3-transition minimum in mandatory, but that's process rule not composition rule)

---

## 11. CONTAINER WIDTH RULE (from BRIEF Section 4)

### The Rule

**Statement:** (BRIEF line 184)
Container width must be 940-960px at 1440px viewport. This is NON-NEGOTIABLE. No metaphor may override this.

**One-Sentence Version:** (BRIEF lines 186-188)
"Set `max-width: 960px` on the page container; express any metaphor-driven narrowing through INTERNAL padding (e.g., `padding: 0 120px` for 720px effective content width), never by reducing container width below 940px."

---

### Classification

**Type:** SPECIFICATION CONSTRAINT (readability floor), NOT soul constraint
**Strength:** NON-NEGOTIABLE (elevated after Phase D)
**Provenance:** (BRIEF lines 195-198)
- 940px = 65% of 1440px (perceptual threshold: below this = "narrow strip lost in margins")
- 960px = 67% (breathing room preserved)

---

### Enforcement (BRIEF lines 198-225)

**17 Locations Across 4 Systems:**
- tension-composition skill: 15 lines
- perceptual-auditing: 3 lines
- compositional-core: 4 lines
- pipeline docs: 12 lines

**Crown Jewels Violated It:** (BRIEF lines 199-200)
DD-006 used 1000px, CD-006 used 1100px — both built BEFORE 960px ceiling was formalized. The rule tightened post-Phase D.

**Phase D Results:** (BRIEF line 201)
Only Variant B (960px) was compliant. 4/5 pages violated (too wide OR too narrow).

**Not in prohibitions.md:** (BRIEF lines 202-203)
Not identity-defining. Can be violated with documented justification (internal padding workaround), but violations in Phase D caused automatic FAIL verdicts.

---

### Ceiling Risk (BRIEF lines 205-225)

**Risk:** Metaphor derivation creates STRONG pressure to express metaphor through container width.
**Examples:** "geological compression" = 720px, "ocean expanse" = 1200px

**Mitigation:** Rule at 3+ locations in execution prompt must explicitly say: "Metaphor shapes INTERNAL experience, never EXTERNAL width."

**Required Locations:**
1. Phase 0D Ceiling warning
2. Phase 4.0 Guardrails table
3. Phase 4.7 gates

---

## END REQUIREMENTS EXTRACTION

**Total Requirements Extracted:** 2,698 source lines compressed into 11 comprehensive sections

**Next Step:** Use this extraction as the foundation for creating the Ceiling master execution prompt.
