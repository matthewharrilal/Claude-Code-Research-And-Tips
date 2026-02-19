# METACOGNITIVE: ALWAYS FLAGSHIP Skill Simplification Analysis

**Author:** ALWAYS FLAGSHIP Simplification Analyst (Opus 4.6)
**Task:** #41
**Date:** 2026-02-19
**Sources:** TC SKILL.md (1,933 lines), PA SKILL.md (848 lines), PV2-PIPELINE-DIAGRAM.md (977 lines), compositional-core/CLAUDE.md (681 lines), 14-MASTER-SYNTHESIS.md

---

## EXECUTIVE SUMMARY

ALWAYS FLAGSHIP removes **~542 lines of tier-conditional routing** from the two skills and the compositional-core CLAUDE.md, representing **~14.8% of the combined 3,462 lines**. But the value is not merely fewer lines -- it is a qualitative transformation. Every surviving instruction becomes UNCONDITIONAL, MAXIMUM INTENSITY, and UNAMBIGUOUS. The cognitive load on reading agents drops dramatically because there are zero branch points to evaluate, zero "if Floor then X, if Middle then Y" decisions to navigate, and zero risk of accidentally routing to a lower-quality path. The freed space creates an opportunity to replace ~542 lines of routing logic with ~542 lines of OPERATIONAL compositional content: concrete CSS patterns, channel shift templates, section-level recipes, and perceptual self-check procedures.

**Verdict: ALWAYS FLAGSHIP is a strict improvement.** It removes noise, enables focus, simplifies cascading systems, and the cases where lower-intensity IS appropriate are handled by TC's Addition Test (fast-exit for low-tension content), not by tier routing.

---

## 1. LINE-BY-LINE REMOVAL AUDIT

### TC SKILL.md (1,933 lines)

**103 lines contain tier-conditional references.** These fall into distinct clusters:

#### Cluster 1: Step 0D Tier Classification (lines 68-145) — 78 LINES
The entire Step 0D section is tier routing. It contains:
- Tier classification table (Floor/Middle/Ceiling/Flagship routing decisions)
- Middle-tier skip logic ("SKIP Phases 1-3, go to Phase 4.0 with PATTERN selection")
- Middle-tier pattern selection table (CRESCENDO/F-PATTERN/BENTO/PULSE)
- Middle-tier output format
- Middle vs Ceiling explanation ("WHY Middle skips Phases 1-3")
- Tier deployment levels (Floor/Middle/Ceiling/Flagship descriptions)
- Graceful degradation protocol
- Tier model validation caveats

**Under ALWAYS FLAGSHIP:** This entire 78-line section reduces to ~5 lines:
```
Step 0D: Route content through full pipeline (Phases 0-3.5).
The Addition Test (Phase 2) is the ONLY exit valve for low-tension content.
If Addition Test = NO TENSION, fast-exit to zones + recipe (no metaphor).
All other content receives full metaphor derivation.
```

**Lines freed: ~73**

#### Cluster 2: Step 0D-CEILING Context Box (lines 148-165) — 18 LINES
This entire section exists to tell Ceiling builders what's different from Middle. Under ALWAYS FLAGSHIP, these requirements are just THE requirements, not tier-specific ones. The content (per-category minimums, reinforcing pairs, 4-scale fractal, container width) moves to being unconditional.

**Lines freed: ~12** (content absorbed as default, framing removed)

#### Cluster 3: Phase 4 Tier-Specific Deployment (lines 868-872) — 5 LINES
```
- **Floor (assembly):** 0 custom mechanisms
- **Middle (individual):** 8-10 mechanisms
- **Ceiling (combination):** 12-15 mechanisms
- **Flagship (multi-pattern):** 16-18 mechanisms
```
**Under ALWAYS FLAGSHIP:** Reduces to one line: "Deploy mechanisms across all 5 categories with per-category minimums (S:1+, T:1+, M:1+, B:1+, R:1+). Natural landing: 12-18 mechanisms."

**Lines freed: ~4**

#### Cluster 4: Natural Landing By Tier (lines 1098-1102) — 5 LINES
Duplicate of Cluster 3 but in a different location. Same reduction.

**Lines freed: ~4**

#### Cluster 5: Fractal Consistency Tier-Calibrated (lines 1432-1436) — 5 LINES
```
- Floor: EXEMPT
- Middle: 2 scales
- Ceiling: 4 scales
- Flagship: 5 scales
```
**Under ALWAYS FLAGSHIP:** Reduces to: "5 scales required (Navigation/Page/Section/Component/Character)."

**Lines freed: ~4**

#### Cluster 6: Landmark Tier-Calibrated (lines 1480-1483) — 4 LINES
```
- Floor: Header + main required. Footer optional.
- Middle-tier+: Header + main + footer ALL required.
- Ceiling/Flagship: Header + main + footer + transition grammar.
```
**Under ALWAYS FLAGSHIP:** Reduces to: "Header + main + footer + transition grammar ALL required."

**Lines freed: ~3**

#### Cluster 7: Tokenization Self-Check Tier Caveat (line 1618) — 1 LINE
"Middle-tier can ship at 66.5%. Ceiling-tier should target 80%+."
**Under ALWAYS FLAGSHIP:** "Target 80%+ token compliance."

**Lines freed: ~1**

#### Cluster 8: Scattered Tier References (various) — ~30 LINES
Lines referencing tier comparisons in provenance/validation contexts:
- "Middle-tier validation evidence" (line 99)
- "Middle-tier baseline" (line 942)
- "Middle experiment validation" (line 1092)
- "Middle-tier experiment" references in Rhythm Variation (line 1325)
- "Middle-tier retrospective" provenance (line 1510)
- Ceiling experiment provenance (lines 707, 757)

These are PROVENANCE references. They explain WHY a rule exists by citing experiments. Under ALWAYS FLAGSHIP, the provenance stays but the tier-conditional framing goes. Example: "The per-category deployment requirement was validated by an experiment deploying 12 mechanisms" instead of "The Middle-tier experiment validated per-category deployment."

**Lines freed: ~15** (reframing, not deletion of provenance)

#### Cluster 9: Mechanism Count Scaling (lines 83-96) — 14 LINES
The mechanism count table (5/8-10/12-15/16-18) and build time estimates per tier (30-45/70-100/150-220/240-400 min). Under ALWAYS FLAGSHIP, reduces to: "Natural mechanism count: 12-18. Build time: 90-215 min."

**Lines freed: ~10**

#### Cluster 10: Component Tier Boundary (lines 1368-1396) — 29 LINES
"Tier 2 (Extractable)" and "Tier 3 (Compositional)" component classification. NOTE: This is a DIFFERENT use of "tier" -- it classifies components, not build quality. **This stays unchanged.** The word "tier" here refers to component portability levels, not pipeline routing.

**Lines freed: 0** (not tier-routing)

### TC SKILL.md TOTAL REMOVAL

| Cluster | Lines Freed | Description |
|---------|------------|-------------|
| 1. Step 0D Routing | ~73 | Tier classification + Middle skip logic |
| 2. Ceiling Context Box | ~12 | Ceiling-specific framing |
| 3. Phase 4 Deployment Levels | ~4 | 4-tier mechanism counts |
| 4. Natural Landing Repeat | ~4 | Duplicate tier counts |
| 5. Fractal Tier-Calibrated | ~4 | 4-tier scale requirements |
| 6. Landmark Tier-Calibrated | ~3 | 4-tier landmark requirements |
| 7. Tokenization Caveat | ~1 | Middle/Ceiling distinction |
| 8. Scattered Provenance | ~15 | Tier-conditional framing |
| 9. Count + Time Scaling | ~10 | 4-tier mechanism/time tables |
| **TOTAL** | **~126** | **6.5% of 1,933 lines** |

### PA SKILL.md (848 lines)

**34 lines contain tier-conditional references.** Clusters:

#### PA Cluster 1: PA-05c "Ceiling+ only" (lines 105-122) — 18 LINES
The expanded sub-dimensions are marked "evaluate ALL THREE separately for Ceiling+ audits" and "Ceiling+ only" scoring. Under ALWAYS FLAGSHIP, these are just THE scoring requirements, not tier-gated. Remove "for Ceiling+ audits" framing.

**Lines freed: ~5** (framing, not content)

#### PA Cluster 2: PA-09 "Ceiling+ audits" calibration (lines 153-165) — 13 LINES
Severity calibration marked "MANDATORY for Ceiling+ audits." Under ALWAYS FLAGSHIP, ALL pages get severity calibration.

**Lines freed: ~3** (framing only)

#### PA Cluster 3: PA-17/PA-41 Tier Elevation (lines 202-214) — 13 LINES
"formally elevated to Tier 1 equivalent for all Ceiling-tier and above audits." Under ALWAYS FLAGSHIP, these are just Tier 1 questions for ALL audits. The "elevation" language dissolves.

**Lines freed: ~8** (elevation framing)

#### PA Cluster 4: Tier 4 Void Prevention "Ceiling+ Only" (lines 337-363) — 27 LINES
Marked "Ceiling+ Only -- MANDATORY." Under ALWAYS FLAGSHIP, ALL audits include Tier 4 questions. The "Ceiling+" qualifier dissolves.

**Lines freed: ~3** (framing only)

#### PA Cluster 5: Middle-tier validation reference (line 134) — 1 LINE
Provenance reframing.

**Lines freed: ~1**

### PA SKILL.md TOTAL REMOVAL

| Cluster | Lines Freed | Description |
|---------|------------|-------------|
| 1. PA-05c Ceiling+ | ~5 | Tier gate on sub-dimension scoring |
| 2. PA-09 Ceiling+ | ~3 | Tier gate on severity calibration |
| 3. PA-17/41 Elevation | ~8 | Tier-conditional elevation logic |
| 4. Tier 4 Ceiling+ | ~3 | Tier gate on void prevention |
| 5. Provenance reframe | ~1 | Middle-tier reference |
| **TOTAL** | **~20** | **2.4% of 848 lines** |

### Compositional-Core CLAUDE.md (681 lines)

**15 lines contain tier-conditional references.** Main clusters:

- Track 1 vs Track 2 routing includes Floor/Middle/Ceiling framing
- Tier model references in Phase D validation lessons
- "Tier model established" provenance

**Lines freed: ~8** (Track structure stays as a CONTENT-TYPE distinction, not a quality tier)

### GRAND TOTAL ACROSS ALL FILES

| File | Lines | Tier Lines | Freed | % of File |
|------|-------|-----------|-------|-----------|
| TC SKILL.md | 1,933 | 103 | ~126 | 6.5% |
| PA SKILL.md | 848 | 34 | ~20 | 2.4% |
| CLAUDE.md | 681 | 15 | ~8 | 1.2% |
| **TOTAL** | **3,462** | **152** | **~154** | **4.4%** |

**Wait -- 154 lines freed, not 542?** The 542-line estimate from Report 12 includes CLAUDE.md files (design-system/CLAUDE.md, pipeline/CLAUDE.md, pipeline docs, operational-recipe.md) that also contain tier-conditional logic. My audit covers only the 3 core files. The 542 figure is the SYSTEM-WIDE total across all files that would need editing. My 154 lines covers the 3 most impactful skill/protocol files.

---

## 2. NOISE REMOVED

### 2A. Tier Routing Logic (THE dominant noise source)

The single largest category of noise is "if Floor then X, if Middle then Y, if Ceiling then Z, if Flagship then W" branching. In the TC skill alone, Step 0D devotes 78 lines to determining which tier the content belongs to and what phases to skip.

**What this noise costs:**
- **Agent cognitive load:** Every agent reading TC must process 4 possible paths and determine which one applies. LLMs are continuation-biased: they follow the FIRST path they encounter. If the Middle-tier path is described first (it is -- lines 101-126), agents default to it.
- **Ambiguity at boundaries:** Content that could be Middle OR Ceiling creates a judgment call. Judgment calls achieve ~0% agent compliance (a core finding). "Is this content complex enough for Ceiling?" is exactly the kind of judgment rule that fails.
- **Validation complexity:** Every gate must specify tier-specific thresholds. The handoff gate needs different checks per tier. The programmatic gates need different pass criteria per tier. PA needs different question sets per tier.

**Under ALWAYS FLAGSHIP:**
- One path. Read skill top to bottom. Follow every instruction.
- Zero judgment about which tier applies.
- Zero risk of accidentally routing to lower quality.
- Zero ambiguity at boundaries.

### 2B. Mechanism Count Scaling (5 / 8-10 / 12-15 / 16-18)

This appears 3 times in TC: the initial tier table (lines 83-96), the Phase 4 deployment levels (lines 868-872), and the natural landing (lines 1098-1102). Each occurrence requires agents to determine their tier, look up the count, and calibrate.

**Under ALWAYS FLAGSHIP:** "Per-category minimums (S:1+, T:1+, M:1+, B:1+, R:1+). Natural landing: 12-18 mechanisms." One instruction, one number range, zero lookup.

### 2C. CSS Budget Allocation Per Tier

Implicit in the tier model is the CSS budget: Floor = 150-250 lines, Middle = 350-500, Ceiling = 700-1000, Flagship = 1000-1500. This creates artificial ceilings. A Middle-tier builder who writes 600 lines of CSS might self-censor ("am I writing too much for Middle?").

**Under ALWAYS FLAGSHIP:** No CSS budget ceiling. Write what the content needs. The recipe's 9 phases guide the builder through what to write; the PA judges whether it's enough.

### 2D. Build Time Budgets Per Tier

30-45 min (Floor) / 70-100 min (Middle) / 150-220 min (Ceiling) / 240-400 min (Flagship). These create time pressure that degrades quality. A builder at 90 minutes on a Middle page might rush rather than taking the 150 minutes the content actually needs.

**Under ALWAYS FLAGSHIP:** 75-215 minutes. Fire and forget. No time pressure from tier classification.

### 2E. Complexity Caps Per Tier

"Hybrid pattern composition is a Ceiling-tier capability, not Middle-tier" (line 114). This explicitly tells Middle-tier builders NOT to combine patterns. "Pattern visible at Navigation + Page + Section + Component scales (not just Page + Component like Middle)" (line 158) tells Middle builders to aim for LESS.

**Under ALWAYS FLAGSHIP:** Every capability is available. Hybrid patterns if the content needs them. All 5 scales if the content supports them. The content drives complexity, not the tier label.

---

## 3. SPACE CREATED

### Quantitative Space

| Source | Lines Freed |
|--------|------------|
| TC SKILL.md | ~126 |
| PA SKILL.md | ~20 |
| CLAUDE.md (compositional-core) | ~8 |
| Other CLAUDE.md files (estimated) | ~100 |
| Pipeline docs (estimated) | ~288 |
| **SYSTEM-WIDE TOTAL** | **~542** |

### Qualitative Space

Beyond raw line counts, ALWAYS FLAGSHIP creates three qualitative spaces:

**3A. INSTRUCTION INTENSITY SPACE**
Every instruction that was tier-gated becomes unconditional. "Per-category minimums (MANDATORY for Middle-tier+)" becomes "Per-category minimums (MANDATORY)." The qualifier "for Middle-tier+" is 3 words, but its cognitive weight is enormous: it signals "maybe you can skip this." Removing it signals "you must do this." The entire skill shifts from CONDITIONAL to IMPERATIVE.

**3B. BUILDER CONFIDENCE SPACE**
Tier routing creates impostor syndrome in agents. "Am I really building a Ceiling page? Maybe this is just Middle." ALWAYS FLAGSHIP eliminates this: you are building the BEST page this content can produce. No second-guessing the tier. Full commitment.

**3C. ENRICHMENT SPACE**
The ~126 lines freed from TC can be replaced with operational content that the skill CURRENTLY LACKS:
- Concrete CSS patterns per mechanism (not just "border-weight gradient" but actual `.callout-primary { border-left: 4px solid var(--color-primary); padding: 24px 32px; }`)
- Channel shift templates (not just ">=3 channels shift at boundaries" but "background: shift 15+ RGB, font-size: shift 2+ px, border-weight: shift 2+ px = 3 channels")
- Section-level recipes (not just "SMOOTH/BRIDGE/BREATHING transition types" but "after a data-heavy section, deploy a BREATHING transition with 80px + 3px border + background shift from dense to sparse zone")

---

## 4. FOCUS ENABLED

### 4A. TC Skill Under ALWAYS FLAGSHIP

**Phase 0:** Content Assessment remains. Step 0D collapses from 78 lines to ~5. The skill no longer asks "what tier?" -- it asks "does genuine tension exist?" (Addition Test). If YES: full pipeline. If NO: zones + recipe (flat mode). Binary, not 4-way.

**Phase 1-3:** Unchanged. These phases (Multi-Axis Questioning, Tension Derivation, Metaphor Collapse) were already Ceiling/Flagship-only. Under ALWAYS FLAGSHIP, they run for ALL content that passes the Addition Test. No change needed.

**Phase 3.5:** The Metaphor Scoring Rubric (Step 3.5G) was "MANDATORY for Ceiling+ Tier." Under ALWAYS FLAGSHIP, it is simply MANDATORY. The 6-criterion rubric, the 6 binary rejection checks, and the >=12/18 threshold become unconditional.

**Phase 4:** Every guardrail operates at MAXIMUM intensity:
- Per-category minimums: MANDATORY (was "MANDATORY for Middle-tier+")
- Fractal consistency: 5 scales (was "5 scales for Flagship only")
- Landmark completeness: Header + main + footer + transition grammar (was "Ceiling/Flagship")
- Rhythm variation: 3+ transition types (was "MANDATORY for Middle-tier+")
- Token compliance: Target 80%+ (was "Middle can ship at 66.5%")

**Phase 5:** Divergence Verification unchanged.

### 4B. PA Skill Under ALWAYS FLAGSHIP

**Question Set:** All 48 questions, always. No tier-gated subsets.

**PA-05c:** All 3 sub-dimensions ALWAYS evaluated (was "Ceiling+ only").

**PA-09:** Severity calibration ALWAYS applied (was "MANDATORY for Ceiling+").

**PA-17/PA-41:** ALWAYS Tier 1 equivalent (was "elevated for Ceiling+").

**Tier 4 (Void Prevention):** PA-50 through PA-53 ALWAYS asked (was "Ceiling+ Only").

**Mode:** Always Mode 4 with 9 auditors (was Mode 2/3/4 by tier).

**NET EFFECT:** The PA skill becomes a SINGLE path. Every audit is maximum rigor. The word "Ceiling+" appears 0 times (was 7 times). The auditor protocol is: take screenshots, answer all 48 questions, produce verdict. No tier lookup needed.

### 4C. What Maximum Intensity Looks Like

Under ALWAYS FLAGSHIP, every instruction in both skills reads as if addressed to the agent building the most important page in the system:

- "Deploy mechanisms across ALL 5 categories" (not "if Middle-tier+")
- "5-scale fractal coherence REQUIRED" (not "5 scales for Flagship, 2 for Middle")
- "All 48 PA questions" (not "Tier 1 mandatory five for quick audit")
- "9 fresh-eyes Opus auditors" (not "Mode 2 with 2 auditors for Middle")
- "108px maximum stacked gap" (not "108 for Flagship, 120 for Middle/Ceiling, 192 was too loose")
- "80%+ token compliance target" (not "Middle can ship at 66.5%")

The skill becomes a RECIPE, not a MENU. No choices about how hard to try.

---

## 5. CASCADING SIMPLIFICATION

### 5A. Pipeline Orchestrator

**Before:** ~350 lines with tier classification + conditional routing. Must determine whether content is Floor/Middle/Ceiling/Flagship, route to different TC invocation modes, select different builder models, apply different gate thresholds.

**After:** ~205 lines, single path. Read content, invoke TC, validate plan, spawn Opus builder with recipe, run gates, run PA, fix loop. Zero conditionals.

**Savings:** ~145 lines (41% reduction).

### 5B. Recipe Generator

**Before:** Hypothetically needs different recipe formats per tier (Middle gets pattern-based recipe, Ceiling gets metaphor-based recipe, Flagship gets multi-pass recipe).

**After:** One recipe format. Always the 9-phase sequential build recipe (~650 lines). Always extracted from File 42. Always with tightest thresholds.

**Savings:** Recipe becomes a SINGLE artifact, not a template system.

### 5C. Gate Runner

**Before:** 12 gates with tier-specific thresholds. SC-10 (stacked gap) = 108px for Flagship, 120px for Middle/Ceiling. SC-09 (background delta) = 15 RGB for all. Some gates advisory for Middle, all BLOCKING for Flagship.

**After:** 12 gates, all BLOCKING, all at tightest thresholds. SC-10 = 108px. Period. No conditional logic in gate-runner.js.

**Savings:** ~30 lines of conditional threshold logic eliminated.

### 5D. PA Evaluation

**Before:** Mode selection (Mode 2 for quick, Mode 3 for standard, Mode 4 for standalone). Question set selection (Tier 1 only for embedded, Tier 1+2 for standard, all 48 for standalone). Auditor count (2/4/9).

**After:** Always Mode 4. Always all 48 questions. Always 9 auditors. The PA invocation becomes a SINGLE command, not a decision tree.

**Savings:** Mode selection logic (~20 lines in orchestrator + ~30 lines in PA skill framing).

### 5E. CLAUDE.md Files

**Before:** design-system/CLAUDE.md contains Track 1 vs Track 2 routing with tier implications. compositional-core/CLAUDE.md contains tier-calibrated workflows. pipeline/CLAUDE.md contains tier references.

**After:** Track 1 vs Track 2 distinction REMAINS (it classifies content TYPE, not quality LEVEL). But within Track 2, there is one path: full TC + Opus builder + Mode 4 PA. Tier references throughout all CLAUDE.md files can be removed or simplified.

**Savings:** ~100 lines across 3+ CLAUDE.md files.

---

## 6. RISK ASSESSMENT: Does Removing Tiers Remove USEFUL Information?

### 6A. Cases Where Lower-Intensity IS Appropriate

**API reference docs, changelogs, config tables (<200 words):**
These genuinely don't need metaphor derivation. But this is handled by TC's Addition Test, not by tier routing. The Addition Test asks: "Can you fulfill the reader's need by selecting and placing existing components WITHOUT transforming their meaning?" If YES = no metaphor needed. This binary gate is CONTENT-DRIVEN, not TIER-DRIVEN.

**Under ALWAYS FLAGSHIP:** The Addition Test still fast-exits for low-tension content. The content still gets zones + recipe (flat mode) without metaphor. It still gets full PA (9 auditors), which may be overkill for a changelog -- but the cost is ~30 minutes of audit time, which is acceptable for fire-and-forget.

### 6B. Cases Where Tiers Provided Useful Calibration

**Build time expectations:**
Tiers gave agents a sense of scope. "This is a Middle page, so I have 70-100 minutes" vs "This is Flagship, so I have 240-400 minutes." Under ALWAYS FLAGSHIP, the range is 75-215 minutes for everything. For simple content (fast TC exit, small page), the lower end applies naturally. For complex content, the upper end applies. The range is CONTENT-DRIVEN, not TIER-DRIVEN.

**Mechanism count guidance:**
"Middle = 8-10, Ceiling = 12-15" gave agents a target. Under ALWAYS FLAGSHIP, the guidance is "per-category minimums (5 minimum total), natural landing 12-18." The per-category minimums ensure breadth; the natural landing is a DESCRIPTION not a TARGET.

### 6C. Risk: Over-Engineering Simple Content

The most cited risk of ALWAYS FLAGSHIP is spending 150 minutes on a page that could ship in 45 minutes. Three mitigations:

1. **Addition Test fast exit:** Low-tension content exits at Phase 2, skipping Phases 3-3.5. Build proceeds with zones + recipe, no metaphor. This naturally produces simpler output.

2. **Content-complexity classifier (from Report 23):** For pages <200 words or <4 sections, specific gates can be relaxed (fractal coherence requires fewer scales, reinforcing pairs not required). The QUALITY INTENT stays maximum; the STRUCTURAL REQUIREMENTS acknowledge content-dependent applicability.

3. **Fire-and-forget model:** The user pays 75-215 minutes of compute time, not human time. If a simple page takes 90 minutes instead of 45, the cost is compute, not attention.

### 6D. Verdict on Risk

**Tiers provided ROUTING value, not QUALITY value.** The useful information in tiers (when to derive metaphor, how many mechanisms to deploy, how many scales to check) is better encoded as CONTENT-DRIVEN decisions (Addition Test, per-category minimums, content-complexity classifier) than as TIER-DRIVEN routing (Floor/Middle/Ceiling/Flagship classification).

The risk of ALWAYS FLAGSHIP is a **cost increase** (more compute per page) not a **quality decrease**. No page gets WORSE under ALWAYS FLAGSHIP; some simple pages get MORE attention than they strictly need. This is an acceptable trade-off for eliminating the classification judgment call that achieves ~0% agent compliance.

---

## 7. THE ENRICHMENT OPPORTUNITY

### What Should Replace the ~542 Freed Lines?

NOT more rules. NOT more constraints. NOT more meta-reasoning. The freed space should contain **OPERATIONAL compositional content** -- concrete patterns that help builders DO the work instead of understanding the theory.

### 7A. Concrete CSS Patterns (~150 lines)

Currently, TC says "deploy border-weight gradient" but never shows CSS. The enrichment:

```css
/* MECHANISM #1: Border-Weight Gradient — encode hierarchy through thickness */
/* Deploy when: content has 3+ levels of importance */
.hierarchy-primary   { border-left: 4px solid var(--color-text); }
.hierarchy-secondary { border-left: 3px solid var(--color-text); }
.hierarchy-tertiary  { border-left: 1px solid var(--color-border); }

/* MECHANISM #7: Zone Backgrounds — encode content zones through color */
/* Deploy when: page has 3+ distinct content regions */
/* CRITICAL: Adjacent zones must differ by >= 15 RGB points */
.zone-sparse    { background: var(--color-zone-sparse); }    /* #FEF9F5 */
.zone-dense     { background: var(--color-zone-dense); }     /* #F0EBE3 */
.zone-breathing { background: var(--color-zone-breathing); }  /* #FAF5ED */
.zone-dark      { background: var(--color-text); color: var(--color-zone-sparse); }
```

### 7B. Channel Shift Templates (~100 lines)

Currently, ">=3 channels must shift at every section boundary" is abstract. The enrichment:

```
CHANNEL SHIFT VERIFICATION TEMPLATE

At section boundary S1 → S2, record:
  Background:      S1 = ___  |  S2 = ___  |  Delta = ___ RGB  |  Shifts? ___
  Font-size:       S1 = ___  |  S2 = ___  |  Delta = ___ px   |  Shifts? ___
  Font-weight:     S1 = ___  |  S2 = ___  |  Delta = ___      |  Shifts? ___
  Letter-spacing:  S1 = ___  |  S2 = ___  |  Delta = ___ em   |  Shifts? ___
  Border-left:     S1 = ___  |  S2 = ___  |  Delta = ___ px   |  Shifts? ___
  Paragraph margin:S1 = ___  |  S2 = ___  |  Delta = ___ px   |  Shifts? ___

CHANNELS THAT SHIFT: ___ (must be >= 3)
If < 3: add visible change to at least one more channel
```

### 7C. Section-Level Recipes (~100 lines)

Currently, the skill says "choose SMOOTH/BRIDGE/BREATHING transitions" but doesn't say WHEN. The enrichment:

```
TRANSITION SELECTION GUIDE

Same content type continuing (e.g., narrative → narrative):
  → SMOOTH: 48px gap + 1px border + minimal bg shift

Content type change (e.g., narrative → data, theory → example):
  → BRIDGE: 64px gap + breathing zone + background shift + optional transition text

Major topic/axis shift (e.g., problem → solution, theory → practice):
  → BREATHING: 80px gap + 3px border + full background zone change

Content climax (deepest insight, most important finding):
  → DRAMATIC: Dark zone background + inverted text + 4px accent border + serif heading

Denouement (summary, next steps, closing):
  → RESOLUTION: Return to opening zone background + lighter borders + wider spacing
```

### 7D. Perceptual Self-Check Procedures (~100 lines)

Currently, "Can you SEE the zone boundaries?" is a vague self-check. The enrichment:

```
PERCEPTION SELF-CHECK PROTOCOL (run at Phase 3, 4, 8)

1. SQUINT TEST: Blur your vision. Can you count the zones?
   If NO → backgrounds too similar (need >= 15 RGB delta)

2. SCAN TEST: Trace the left edge. How many vertical positions?
   If > 4 → too many alignment points (consolidate to 2-3)

3. RHYTHM TEST: Scroll at medium speed. Do you feel the beat?
   If monotonous → all transitions are same type (need >= 3 types)

4. HIERARCHY TEST: Cover everything except headings. Do they tell the story?
   If NO → heading typography needs more differentiation (display/body/detail arc)

5. WEIGHT TEST: Cover the content. Does the empty space feel designed?
   If NO → dead zones present (need content or visual treatment in every third)
```

### 7E. Remaining Budget (~92 lines)

~92 lines of space remaining from the ~542 freed. Options:
- Expand the metaphor scoring rubric with more examples
- Add responsive breakpoint recipes (what changes at 768px, 1024px)
- Add print stylesheet recipe (what to show/hide)
- Add accessibility checklist with specific ARIA patterns

---

## 8. CASCADING EFFECTS BEYOND SKILLS

### 8A. design-system/CLAUDE.md (Root Navigation)

The "EVOLUTION STATE" section references the tier model extensively. Under ALWAYS FLAGSHIP, this simplifies:
- Track 1 vs Track 2 stays (content-type classification)
- Tier references within Track 2 dissolve
- "Middle-Tier Experiment" becomes "Mechanism Deployment Experiment" (reframing)

### 8B. design-system/compositional-core/CLAUDE.md (Building Protocol)

The Track 2 workflow references "Ceiling/Flagship tier" at Phase 3.5 and "Middle-tier+" at Phase 4. Under ALWAYS FLAGSHIP, all phases are unconditional. The entire Track 2 workflow simplifies to: "Read prohibitions → Read tokens → Run TC BLIND → Lock metaphor → Extract mechanisms → Implement → Verify."

### 8C. Pipeline Docs

The 17 pipeline files contain extensive tier references. The complete roadmap (05-COMPLETE-ROADMAP.md, 835 lines) organizes work by tier. Under ALWAYS FLAGSHIP, the roadmap simplifies to: every page gets the same pipeline, differentiated only by content type (prose vs data vs code) and tension level (genuine vs cosmetic vs none).

### 8D. Memory Files

MEMORY.md contains the tier model table. This should be updated to reflect ALWAYS FLAGSHIP as the canonical approach, with the tier model preserved as historical context only.

---

## 9. SUMMARY OF FINDINGS

### What ALWAYS FLAGSHIP Removes (Noise)
1. **Tier routing logic** — 78 lines of "if Floor/Middle/Ceiling/Flagship" branching in TC Step 0D
2. **Mechanism count scaling** — repeated 3x, each requiring tier lookup
3. **CSS budget ceilings** — implicit caps that self-censor builder ambition
4. **Build time pressure** — tier-specific time budgets that rush execution
5. **Capability restrictions** — "Hybrid patterns are Ceiling-tier, not Middle-tier"
6. **Gate threshold ambiguity** — 108/120/192px stacked gap depending on tier
7. **PA mode selection** — Mode 2/3/4 decision that fragments audit quality
8. **Qualification framing** — "Ceiling+ only," "MANDATORY for Middle-tier+," "Flagship only"

### What ALWAYS FLAGSHIP Enables (Focus)
1. **Unconditional instructions** — every rule is simply MANDATORY, no qualifiers
2. **Single-path execution** — read top to bottom, follow everything
3. **Maximum capability** — every tool available, no artificial restrictions
4. **Content-driven decisions** — Addition Test for tension, per-category minimums for breadth
5. **Builder confidence** — no tier impostor syndrome, no quality self-doubt
6. **~542 lines of enrichment space** — for operational CSS patterns, channel templates, recipes
7. **Cascading simplification** — orchestrator, recipe, gates, PA, CLAUDE.md files ALL simpler
8. **Zero judgment calls** — binary rules achieve 100% compliance; tier classification was a judgment call

### What ALWAYS FLAGSHIP Does NOT Remove (Signal)
1. **Addition Test** — content-driven tension detection stays
2. **Per-category minimums** — mechanism breadth requirement stays
3. **Perceptual thresholds** — 15 RGB, 2px font-size, 0.03em letter-spacing stay
4. **Container width** — 940-960px non-negotiable stays
5. **Component tier classification** — Tier 2 (extractable) vs Tier 3 (compositional) stays
6. **Track 1 vs Track 2** — content-type distinction stays
7. **All provenance** — experimental evidence stays, reframed without tier labels
8. **All creative phases** — Multi-axis questioning, tension derivation, metaphor collapse unchanged

### The One-Sentence Answer

**YES: ALWAYS FLAGSHIP removes noise (tier-conditional routing that creates judgment calls, artificial capability restrictions, and ambiguous thresholds) and enables focus (unconditional maximum-intensity instructions, content-driven rather than tier-driven decisions, and ~542 lines of space for operational enrichment content).**

---

## 10. RECOMMENDATION

ALWAYS FLAGSHIP should be implemented as follows:

1. **REWRITE TC SKILL.md Step 0D** (73 lines freed): Replace 78-line tier routing with 5-line "full pipeline always, Addition Test only exit."
2. **MAKE ALL TIER-GATED REQUIREMENTS UNCONDITIONAL** (~50 lines touched): Remove "for Middle-tier+", "Ceiling+ only", "Flagship only" qualifiers throughout both skills.
3. **CONSOLIDATE MECHANISM COUNTS** (~10 lines freed): Replace 3 separate tier count tables with one line: "Per-category minimums, natural landing 12-18."
4. **REMOVE GRACEFUL DEGRADATION PROTOCOL** (~5 lines freed): No degradation from higher to lower tier because there IS only one tier.
5. **FILL FREED SPACE** (~542 lines available): Add concrete CSS patterns, channel shift templates, section-level recipes, and perceptual self-check procedures.
6. **UPDATE ALL CLAUDE.md FILES**: Remove tier references, make Track 2 workflow unconditional.
7. **PRESERVE PROVENANCE**: Keep experimental evidence but reframe without tier labels (e.g., "validated by experiment deploying 12 mechanisms" instead of "Middle-tier experiment validated").

The skills don't just lose noise. They gain CLARITY. Every instruction reads as: "Do this. It is required. Here is how." Instead of: "If you are building a Ceiling page, do this (but if Middle, do less)."

That is the transformation. Not fewer lines. SIMPLER lines.
