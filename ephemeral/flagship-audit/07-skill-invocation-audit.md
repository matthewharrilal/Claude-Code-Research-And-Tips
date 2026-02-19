# Skill Invocation Audit — Flagship Experiment

**Auditor:** skill-auditor (Opus 4.6)
**Date:** 2026-02-17
**Scope:** Gap between REFERENCING tension-composition and perceptual-auditing skills versus INVOKING them

---

## EXECUTIVE SUMMARY

The master execution prompt REFERENCES both skills extensively — TC has a full 6-phase routing table (B8), PA has a comprehensive invocation section (C7, 63 lines). But the HTML output reveals that reference ≠ invocation. The skills were NAME-DROPPED in the prompt but their OPERATIONAL PROTOCOLS were never executed by the building agents. The result: a page that has correct CSS tokens and soul compliance but ZERO compositional intelligence — the exact failure mode both skills were designed to prevent.

**Verdict: BOTH SKILLS WERE REFERENCED BUT NOT INVOKED.**

The prompt tells agents "read SKILL.md" but never extracts the skill's operational steps into agent-executable instructions. The skills sit in a "reading list" (Section E) — agents are told to read 1,878 lines of TC and 774 lines of PA, but no agent was given the TIME, STRUCTURE, or DELIVERABLE REQUIREMENTS to actually execute the pipelines.

---

## PART 1: TENSION-COMPOSITION SKILL AUDIT

### 1.1 Complete TC Pipeline Step Inventory

The TC skill defines a 6-phase pipeline with 27 discrete steps. For each, I assess whether the master execution prompt references it and whether the HTML output shows evidence of execution.

| # | TC Step | In Prompt? | In HTML? | Gap |
|---|---------|-----------|----------|-----|
| 0A | Content Type Classification (prose/mixed/visual/self-ref) | YES (P-01 content inventory) | PARTIAL — content inventory done but classification not explicit | MINOR |
| 0B | Scope Assessment (micro/short/standard/long/massive) | YES (P-01 word count) | UNKNOWN — no deliverable shows scope classification | MODERATE |
| 0C | Section Identification (narrative/reference/code/data/mixed) | YES (P-01 section count) | PARTIAL — 12 sections exist but per-section type classification absent | MODERATE |
| 0D | Tier Classification and Pipeline Routing | YES (B8 routes Flagship → full pipeline) | YES — Flagship tier selected | OK |
| 0D-CEILING | Ceiling Context Box (per-category mins, reinforcing pairs, 4-scale) | YES (C-01, C-08, SC-01) | PARTIAL — per-category claimed in CSS comments, not verified | MODERATE |
| 0E | Library Access Prohibition (no mechanism catalog before metaphor) | YES (P-02) | UNKNOWN — no deliverable proves compliance | MODERATE |
| **1** | **Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + 5 extended + 5 structural)** | **NO** — prompt says "14-axis questioning" in one line (B8) but provides ZERO operational detail | **ABSENT** — no axis questioning deliverable exists | **CRITICAL** |
| 1-ext | Extended Core Axes (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE) | NO | ABSENT | CRITICAL |
| 1-struct | Structural Trigger Axes (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER) | NO | ABSENT | CRITICAL |
| **2** | **Tension Derivation (Side A needs vs Side B constraints)** | **PARTIAL** — prompt mentions Addition Test + BECAUSE Test in one line | **ABSENT** — no tension derivation deliverable | **CRITICAL** |
| 2-rich | Richness Formula (Opposition × Overlap × Width) | NO — not in prompt | ABSENT | CRITICAL |
| 2-gate | Tension Threshold Gate (genuine count = 0/cosmetic/genuine) | NO | ABSENT | CRITICAL |
| **3** | **Metaphor Collapse (structural bridge between sides)** | **PARTIAL** — prompt has MG-01 through MG-05 gates but ZERO collapse procedure | **CLAIMED** — "Assay Laboratory" metaphor exists in HTML header but no derivation trail | **CRITICAL** |
| 3.1 | Extract Structural Properties from Side A | NO | ABSENT | CRITICAL |
| 3.2 | Extract Structural Properties from Side B | NO | ABSENT | CRITICAL |
| 3.3 | Find Structural Overlap | NO | ABSENT | CRITICAL |
| 3.4 | Generate Search Query | NO | ABSENT | CRITICAL |
| 3.5 | Test Candidates (7-dimension composite scoring) | PARTIAL — MG-01 rubric referenced | ABSENT — no candidate comparison | CRITICAL |
| 3.5G | 6-Criterion Metaphor Quality Rubric (18 points) | YES (MG-01) | ABSENT — no rubric scoring deliverable | HIGH |
| 3.5-lock | Metaphor Commitment Lock-In | YES (Gate 0.5 implied) | CLAIMED — metaphor stated in HTML header | MODERATE |
| **4** | **Compositional Layout Generation** | **YES** — extensively specified in B3 | **PARTIAL** — mechanisms deployed but without compositional clusters | **HIGH** |
| 4.0 | Perceptual Guardrails (container, CPL, spacing) | YES (B1) | YES — container 960px, CPL 68ch | OK |
| 4.1 | Extract Metaphor Physical Properties (5-category taxonomy) | NO — not in prompt at operational level | ABSENT — no property extraction deliverable | CRITICAL |
| 4.2 | Translation Grammar (property → CSS lookup) | NO — skill has full lookup tables, prompt has none | ABSENT | CRITICAL |
| 4.2B | Pacing Prediction Heuristic | NO — not in prompt | ABSENT | HIGH |
| 4.2C | Rhythm Variation Requirement | YES (C-05, C-06, C-11) | YES — 3 transition types deployed (SMOOTH/BRIDGE/BREATHING) | OK |
| 4.3 | Coherence Checking (5 rules: C-1 through C-5) | PARTIAL — referenced as MC rules | PARTIAL — chromatic gradient exists, other channels do not co-vary | HIGH |
| 4.4 | Component Inventory (Tier 2 vs Tier 3) | NO | ABSENT | MODERATE |
| 4.5 | Adapt-vs-Invent Decision | NO | ABSENT | MODERATE |
| 4.6 | Transition Grammar (axis-to-transition lookup) | YES (C-05) | YES — transition types present | OK |
| 4.7 | Fractal Consistency Gate (scale coverage table) | YES (C-20) | CLAIMED — CSS comments reference fractal coherence, no scale table delivered | HIGH |
| 4.7B | Landmark Completeness Gate (header/main/footer) | YES (S-03, S-04, S-05) | YES — all landmarks present | OK |
| 4.8 | Section-Aware Composition | PARTIAL | PARTIAL — 12 sections exist with zone classes | MODERATE |
| 4.9 | Tokenization Self-Check | YES (B10 token compliance) | YES — high token compliance (var() extensively used) | OK |
| **5** | **Divergence Verification** | YES (P-02 library prohibition) | ABSENT — no divergence table | HIGH |

### 1.2 Critical Gap Analysis

**TC Phases 1-3 (the CREATIVE CORE) are completely absent from the HTML deliverables.**

The TC skill's entire value proposition is in Phases 1-3: multi-axis questioning → tension derivation → metaphor collapse. These phases take raw content and DERIVE a structural metaphor through systematic creative process. The master execution prompt routes these to "Metaphor Agent (Opus)" in B8, but:

1. **No Phase 1 deliverable exists.** No multi-axis questioning table. No FEEL/UNDERSTAND/DO/BECOME analysis. No axis yield ratings. The prompt says "14-axis questioning" in one line but provides ZERO operational detail about HOW to question.

2. **No Phase 2 deliverable exists.** No Side A / Side B tension table. No Addition Test application. No BECAUSE test. No richness formula scoring. The prompt mentions these tests in passing but never requires them as DELIVERABLES.

3. **No Phase 3 deliverable exists.** No structural property extraction. No search query. No candidate comparison. No composite scoring. The "Assay Laboratory" metaphor appears in the HTML header comment as a CLAIM but with no derivation trail.

**The metaphor may have been derived OR it may have been pattern-matched.** Without the derivation deliverables, there is no way to distinguish genuine tension-derivation from "I read some research content and thought 'laboratory' would be cool."

### 1.3 What FULL TC Invocation Would Look Like

For the Metaphor Agent (Opus), the prompt should have included:

```
DELIVERABLES (ALL MANDATORY — write to files before proceeding):

01-axis-questioning.md:
  - Table for each of 14 axes (4 core + 5 extended + up to 5 structural)
  - Each entry: Axis | Needs | Structural Properties | Richness (H/M/L)
  - Mark LOW YIELD axes explicitly

02-tension-derivation.md:
  - For each HIGH-yield axis: Side A demands | Side B constraints | Opposition
  - Addition Test result (YES/NO) for each
  - BECAUSE test sentence for each
  - Richness formula: Opposition(1-3) × Overlap(1-3) × Width(1-3) = Score
  - Selected tension with full justification

03-metaphor-candidates.md:
  - Search query (from TC Step 3.4)
  - 3-5 candidate metaphors
  - Each scored on 7 dimensions: Resolution, Isomorphism, Nominal Resonance,
    Structural Resonance, Mechanism Feasibility, Perceptual Risk, Perceptual Cost
  - 6-Criterion Rubric (18 points) for top 2 candidates
  - Winner with justification

04-property-extraction.md:
  - 5-category extraction (Spatial/Temporal/Material/Behavioral/Relational)
  - Property-to-CSS translation table
  - Pacing prediction heuristic output
```

**None of these deliverables exist.** The prompt's B8 section says "Metaphor Agent (Opus): TC Phases 1-3" but never specifies WHAT the agent should WRITE.

### 1.4 Which TC Techniques Would Have Prevented the Uniformity Problem

The flagship's dominant failure is uniformity — every section looks nearly identical (same font size, same weight, same color, same margins). The TC skill has specific mechanisms designed to prevent this:

**TC Step 4.1 (5-Category Property Extraction):** Forces the builder to systematically extract SPATIAL, TEMPORAL, MATERIAL, BEHAVIORAL, and RELATIONAL properties from the metaphor and map each to CSS. The flagship HTML only deployed MATERIAL (background tints) and partially TEMPORAL (spacing compression). SPATIAL (layout variation), BEHAVIORAL (density flow), and RELATIONAL (containment/hierarchy) properties were not extracted, resulting in 3 of 5 categories being absent from the composition.

**TC Step 4.2B (Pacing Prediction Heuristic):** Would have flagged:
- Section count: 12 sections = HIGH RISK of monotony (threshold is 11+)
- Breathing zone model: dividers between sections ARE empty space, not changing state
- Element uniformity: UNIFORM (all sections have identical treatment)
- Dramatic moment: NO clear climax placement

**TC Step 4.3 (Coherence Checking) Rule C-1:** "Density direction must be consistent across ALL channels." The flagship has:
- Background: subtle gradient (barely perceptible, 1-8 RGB difference)
- Border weight: ABSENT from sections (borders only on tables and components)
- Typography: UNIFORM (no compression, no size variation between sections)
- Spacing: slightly varied padding but not co-varying with backgrounds
- Layout: UNIFORM (single column throughout, no grid variation)

Rule C-1 would have caught that only 1 of 5 channels (background) tracks the metaphor direction. The other 4 channels are either absent or uniform.

**TC Step 4.2C (Rhythm Variation):** While 3 transition types exist in CSS, the AUDIT DATA shows gaps of 210-276px between sections — these are the dividers plus their margins. The TC skill specifies MAXIMUM breathing zone of 48px. The flagship's divider margins (48px smooth, 64px bridge, 80px breathing) are within spec, but the TOTAL visual gap (margin + padding of adjacent sections) exceeds 200px in 6 places. TC Step 4.2B explicitly warns: "Breathing zones conceptualized as EMPTY SPACE create dead zones."

**TC Appendix W-DEADZONE:** "Enforce MAXIMUM breathing zone of 48px between sections. Section transitions must be CHANGING STATE (background color shift, border weight change, density gradient), NOT EMPTY SPACE." The flagship's transitions ARE empty space — the dividers are thin colored lines (1px or 3px) sitting in 48-80px of margin. The background color changes are so subtle (1-8 RGB points) that they are not perceptible as state changes.

**TC Appendix W-MONOTONY:** "Vary element sizes by CONTENT IMPORTANCE, not by template uniformity." Every section in the flagship uses the same H2 size (28px), same paragraph size (16px), same paragraph weight (400), same paragraph color (rgb(26,26,26)), same paragraph margins (16px). There is ZERO variation in element sizing based on content importance.

---

## PART 2: PERCEPTUAL-AUDITING SKILL AUDIT

### 2.1 PA Skill Invocation Status

The master execution prompt has a comprehensive PA invocation section (C7, 63 lines) and deployment plan (C4, 42 lines). This is the MOST thoroughly referenced skill. However:

**Was Mode 4 PA actually executed?** The audit data file (00-AUDIT-DATA.md) contains programmatic measurements but NO perceptual audit findings. There are no auditor reports. There is no Cold Look. There is no gate-then-ranking verdict. The PA was PLANNED but appears to NOT HAVE BEEN EXECUTED.

### 2.2 Which PA Questions Would Have Caught the Deficiencies

I will now systematically evaluate what each relevant PA question would have found:

#### Tier 1: The Mandatory Five

**PA-01: What's the first thing that bothers you?**
EXPECTED FINDING: "After the header and first section, the page becomes a monotonous scroll of cream-colored sections with identical text formatting. There is nothing to grab attention or create visual landmarks."
SEVERITY: WOULD-NOT-SHIP

**PA-02: Is any text uncomfortable to read?**
EXPECTED FINDING: "No — text is well-sized and has good line-height. The readability is actually the strongest dimension."
SEVERITY: NO FINDING

**PA-03: Does this feel like one designer made it, or three?**
EXPECTED FINDING: "One designer — but a timid one. Every section looks identical. The consistency is a symptom of lack of variation, not intentional coherence."
SEVERITY: LOOKS-WRONG

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
EXPECTED FINDING: "Eye goes to the dark header and red accent line. After that, there is no secondary focal point to draw the eye down the page. The pullquote in S2 is the only other designed moment."
SEVERITY: WOULD-NOT-SHIP

**PA-05: Would you put your name on this?**
EXPECTED SCORING:
- PA-05a DESIGNED: 1.5/4 — The header and pullquote feel designed. Everything else feels generated from a template. The per-section zone backgrounds are so subtle they are invisible. There is no evidence of compositional intelligence below the first 15% of scroll.
- PA-05b COHERENT: 3/4 — Consistent design language throughout (all sections use same vocabulary). But consistency through uniformity is not true coherence.
- PA-05c PROPORTIONATE: 2/4 — Container width is correct. But vertical proportion fails:
  - PA-05c-H: PASS (960px container)
  - PA-05c-V: FAIL (all visual weight in first 15%, remainder is monotone)
  - PA-05c-B: FAIL (negative space between sections feels abandoned, not designed)
- PA-05d POLISHED: 3/4 — Token compliance is high. Footer present. No visual artifacts. But the 210-276px gaps between sections are unpolished.
- **COMPOSITE: 2.4/4 — DO NOT SHIP**

#### Tier 2: Standard Fifteen (Selected Key Questions)

**PA-09: Is there dead space that serves no purpose?**
EXPECTED FINDING: "YES — 6 gaps of 210-276px between sections serve no purpose. They are empty cream space with a thin divider line. At scroll positions 4000px, 5000px, 6000px, the viewport shows nothing but cream background."
SEVERITY CALIBRATION: 6 gaps × ~250px = ~1500px of dead space, spread across the page. Not catastrophic (not 6+ viewport-heights consecutive) but definitely WOULD-NOT-SHIP level.

**PA-12: Do your eyes flow smoothly from section to section?**
EXPECTED FINDING: "Flow is monotonous. Every transition feels identical despite 3 divider types. The cream gap overwhelms the thin line distinction. There is no visual momentum — the page does not PULL you forward."
SEVERITY: WOULD-NOT-SHIP

**PA-13: Is there a clear visual ending?**
EXPECTED FINDING: "YES — the dark footer mirrors the header. This is one of the few well-executed design moments."
SEVERITY: NO FINDING

**PA-17: Is there a visual rhythm (like a beat in music), or random?** (ELEVATED TO TIER 1 FOR CEILING+)
EXPECTED FINDING: "There is a rhythm but it is METRONOMIC — every beat is the same weight, the same speed. Section follows section with identical text treatment. The 3 divider types create minor variation but the dominant impression is 'section, gap, section, gap, section, gap' with no crescendo, diminuendo, or syncopation."
SEVERITY: FAIL (binary for Ceiling+) → page verdict CANNOT exceed "YES WITH RESERVATIONS"

**PA-30: At 1440px, does the layout feel DESIGNED for this width?**
EXPECTED FINDING: "The content container at 960px is appropriate. But the content WITHIN the container does not utilize the width. Every element is a single column. No grids, no side-by-side layouts, no inset components, no width variation. The 960px container contains 660px of text (68ch max-width). The remaining 300px on either side is padding. This feels like a NARROW design centered in extra space."
SEVERITY: WOULD-NOT-SHIP

**PA-35: Scroll through the entire page at reading speed. Does your interest stay level, peak and valley, or fade?**
EXPECTED FINDING: "Interest FADES. The header and pullquote (0-15%) create initial engagement. Then interest drops to a baseline and stays flat for the remaining 85% of scroll. There is no visual surprise, no pacing variation, no second peak. I start skimming by 30% scroll depth."
SEVERITY: WOULD-NOT-SHIP

**PA-41: Are any visual patterns repeated more than four times in a row without variation?** (ELEVATED TO TIER 1 FOR CEILING+)
EXPECTED FINDING: "YES — the section pattern (meta label → H2 → paragraphs → optional table → gap) repeats 12 times with essentially zero variation. The same heading size, same paragraph size, same paragraph color, same paragraph margins. This is extreme repetition monotony."
SEVERITY: FAIL (binary for Ceiling+) → reinforces PA-17 FAIL

#### Tier 4: Void Prevention (Ceiling+ MANDATORY)

**PA-50: Count blank viewport positions.**
EXPECTED FINDING: "At 1440×900px viewport: scroll positions around 4000px, 5000px, 6000px show < 30% content coverage. However, these are NOT consecutive 2+ viewport-heights — the gaps are 210-276px each, less than one viewport-height. Individual gaps: PASS. But the CUMULATIVE effect of 6 gaps totaling ~1500px creates a void perception despite no single gap exceeding spec."
NOTE: This reveals a SKILL GAP — PA-50 checks consecutive blank viewports but the flagship's void is DISTRIBUTED (6 small voids vs 1 catastrophic void). The skill catches catastrophic voids but not distributed void syndrome.

**PA-51: What percentage of scroll height contains meaningful content?**
EXPECTED FINDING: "83% content-to-void ratio (from audit data). This is in the 'dense' category (80%+). Numerically passes."
NOTE: The 83% figure masks the PERCEPTUAL problem — the content IS there but it is so uniform that it FEELS empty. Content-to-void ratio measures physical content presence, not visual richness.

**PA-52: Divide into thirds — designed moment in each?**
EXPECTED FINDING:
- Top third (0-5237px): YES — dark header + drop cap + pullquote = 2 designed moments
- Middle third (5237-10474px): MARGINAL — featured table (table-featured with 4px red border-left) is the only designed moment, and it may be in the first third boundary
- Bottom third (10474-15711px): MARGINAL — dark footer is a designed moment, but it is at the very end (>95%)
VERDICT: BORDERLINE FAIL — designed moments are concentrated in the first 15% and last 3%

**PA-53: Container width utilization at 1440px.**
EXPECTED FINDING: "Container is 960px at 1440px viewport = 67% utilization. PASS (within 65-80% range)."

### 2.3 Void Detection Pipeline (PA-50 through PA-53) Assessment

The void detection pipeline was DESIGNED to catch the ceiling experiment's catastrophic void (70-80% blank, 9/9 auditors flagged). The flagship's void pattern is DIFFERENT:

| Dimension | Ceiling Experiment | Flagship Experiment | PA Pipeline Catches It? |
|-----------|-------------------|---------------------|------------------------|
| Void type | Catastrophic (continuous) | Distributed (6 small gaps) | NO — PA-50 checks consecutive, not cumulative |
| Content-to-void | ~20-30% | 83% | NO — PA-51 says "dense" (80%+) |
| Visual weight distribution | All in first 30% | All in first 15% + last 3% | MARGINAL — PA-52 might catch the middle third |
| Width utilization | Debated (possibly narrow) | 67% (within spec) | YES — PA-53 passes |

**CRITICAL SKILL GAP:** The void pipeline was designed for ONE failure pattern (continuous blank void) but the flagship has a DIFFERENT failure pattern (distributed monotony). PA-50 through PA-53 would PASS the flagship while the page is still DO NOT SHIP. The deeper problem — VISUAL UNIFORMITY — is caught by PA-17 (rhythm), PA-41 (monotony), PA-35 (engagement decay), and PA-05a (designed), NOT by the void pipeline.

### 2.4 What FULL PA Invocation Would Have Flagged

If Mode 4 PA had been fully executed with 9 independent auditors:

**PREDICTED GATE RESULT: DO NOT SHIP**

Gate questions that would FAIL:
- PA-05 composite < 3/4 (predicted 2.4/4)
- PA-17 FAIL (metronomic rhythm, Ceiling+ mandatory)
- PA-41 FAIL (12 repetitions without variation, Ceiling+ mandatory)

**PREDICTED RANKING (if gate had somehow passed): LOW**
- PA-05 = 2.4/4 (below 3/4 gate)
- PA-20 personality = "restrained and warm" (partially matches intent)
- PA-35 engagement = FADES after 15%
- PA-44 metaphor expression = ANNOUNCED (zone labels in CSS comments, not perceptible visually)
- PA-45 design highlight = pullquote only (1 moment in 15,711px)

---

## PART 3: THE GAP BETWEEN REFERENCE AND INVOCATION

### 3.1 How the Prompt References Skills

The master execution prompt references the skills in THREE ways:

**Way 1: Reading Lists (Section E)**
```
METAPHOR AGENT reads:
  - ~/.claude/skills/tension-composition/SKILL.md
PA AUDITORS read:
  - ~/.claude/skills/perceptual-auditing/SKILL.md
```
This tells agents to READ the skill files. But reading 1,878 lines of TC skill does NOT mean executing its 27-step pipeline. An agent can "read" the file and then proceed to do something completely different.

**Way 2: Routing Tables (B8, B9)**
```
TC Phase 0: -> Content Architect (Opus)
TC Phase 1: -> Metaphor Agent (Opus)
...
PA-01 through PA-48: -> 9 Mode 4 auditors
```
This ROUTES skill phases to agents. But routing alone does not specify deliverables, time budgets, or completion criteria.

**Way 3: Gate Checks (C3)**
```
Gate 0.5: Content Quality (CT-01 through CT-08)
Gate 4: Metaphor Coherence (>= 70% structural)
Gate 5: Mode 4 PA
```
This creates VERIFICATION points. But gates only work if agents produce the deliverables that gates check.

### 3.2 What's Missing: Operational Invocation

**The prompt never provides:**

1. **Deliverable specifications for TC phases.** The skill defines what each phase PRODUCES (axis questioning table, tension derivation table, candidate scoring, etc.) but the prompt never requires agents to WRITE these deliverables. "Run TC Phases 1-3" is meaningless without "PRODUCE these 4 files."

2. **Time budgets for skill execution.** TC Phases 1-3 take 30-60 minutes for a thorough metaphor derivation. The prompt provides no time allocation. In practice, the Metaphor Agent likely spent 5-10 minutes claiming a metaphor rather than 45 minutes deriving one.

3. **Agent-specific extractions from skill files.** The TC skill is 1,878 lines. The Metaphor Agent does not need all 1,878 lines — it needs Phase 1-3 operational steps (~400 lines). The Builder does not need Phases 1-3 — it needs Phase 4 translation tables (~300 lines). The prompt says "read the whole file" instead of "read these specific sections."

4. **Completion criteria for skill execution.** How does the team-lead verify that TC Phases 1-3 were actually executed? The answer: check for the deliverable files. But the prompt never specifies what files should exist after each TC phase.

### 3.3 Root Cause: Skills as Reading Material vs Operating Procedures

The fundamental error is treating skills as REFERENCE DOCUMENTS rather than OPERATING PROCEDURES.

**Reference document approach (what the prompt does):**
- "Read SKILL.md"
- "Follow the pipeline"
- "Apply the skill"

**Operating procedure approach (what would work):**
- "Phase 1: Write 01-axis-questioning.md with the following structure: [template]"
- "Phase 2: Write 02-tension-derivation.md. Must include: Addition Test (YES/NO), BECAUSE sentence, Richness score"
- "Phase 3: Write 03-metaphor-candidates.md. Score 3+ candidates on 7 dimensions. Winner requires 12/18 on rubric."
- "Gate: 01, 02, 03 files must all exist. If any missing, PAUSE."

The skill files themselves are well-designed as THINKING documents. But they need to be COMPILED into agent-executable instructions — short, specific, deliverable-oriented.

---

## PART 4: SPECIFIC TC TECHNIQUES THAT WOULD HAVE PREVENTED UNIFORMITY

### 4.1 The 5-Category Property Extraction (TC Step 4.1)

The TC skill requires extracting metaphor properties across 5 categories. For the "Assay Laboratory" metaphor:

| Category | Properties the Metaphor Should Express | CSS Mechanism | Present in HTML? |
|----------|---------------------------------------|---------------|-----------------|
| **Spatial** | Intake area (wide) → Processing zone (compressed) → Output (clean, measured) | Layout variation: grid for intake, narrow for processing, measured columns for output | NO — single column throughout |
| **Temporal** | Raw → Refined (temporal progression visible in scroll) | DOM ordering + progressive density | PARTIAL — spacing compression exists but is subtle |
| **Material** | Heavy raw samples → Light refined output | Border weight + font weight variation | NO — zero borders on sections, uniform font weight |
| **Behavioral** | Filtering, distilling, concentrating | Visual density compression, content condensation | NO — all sections have same visual density |
| **Relational** | Containment (samples in containers), hierarchy (raw < processed < pure) | Bordered containers for "raw" content, open flow for "refined" | NO — zero containment elements outside tables/components |

**3 of 5 categories are ABSENT from the HTML.** Only Temporal (partial, via subtle spacing compression) and partially Material (via barely-perceptible background tint changes) are present.

### 4.2 The Translation Grammar (TC Step 4.2)

The TC skill provides a comprehensive lookup table for translating metaphor properties into CSS. The "Assay Laboratory" metaphor should map to:

| Metaphor Property | TC Translation | Applied in HTML? |
|-------------------|---------------|-----------------|
| Heavy samples → Light output | Border-weight: 4px (intake) → 1px (output) | NO — sections have zero borders |
| Dense raw material → Clean refined product | Spacing compression: 16px (dense) → 64px (sparse) | PARTIAL — padding varies 32-80px but not dramatically |
| Multiple raw inputs → Single refined output | Layout: grid/parallel (intake) → single column (output) | NO — single column throughout |
| Containment of samples | Bordered containers for content blocks | NO — zero bordered sections |
| Temperature change (heating/cooling) | Background: warm cream (intake) → neutral white (processing) → clean cream (output) | YES — but RGB differences are 1-8 points (invisible) |
| Equipment precision | Typography: mono for precision elements | PARTIAL — mono used for labels only |

### 4.3 The Pacing Prediction Heuristic (TC Step 4.2B)

For 12 sections, this heuristic would have flagged:

```
PACING RISK: HIGH
Section count: 12 (>= 11 threshold)
Breathing model: EMPTY SPACE (dividers sit in margin, not state change)
Element uniformity: UNIFORM (all sections identical treatment)
Dramatic moment: MARGINAL (pullquote at ~8% scroll, featured table at ~25%)
Risky transitions: ALL — thin line dividers in 48-80px margin create dead zones
MITIGATION:
  - Group sections into 3-4 visual arcs (3+4+3+2)
  - Alternate full-width and inset presentations
  - Place dramatic moment at 60-80% (not 8%)
  - Use background color SHIFTS (not subtle tints) at zone boundaries
```

---

## PART 5: QUANTIFIED SKILL UTILIZATION

### 5.1 TC Skill Utilization Score

| TC Component | Lines in Skill | Lines Referenced in Prompt | Lines Operationally Used | Utilization |
|-------------|----------------|---------------------------|--------------------------|-------------|
| Phase 0 (Assessment) | ~130 | ~20 (P-01, B8) | ~10 (tier routing only) | 8% |
| Phase 1 (Questioning) | ~140 | 1 line (B8: "14-axis questioning") | 0 | 0% |
| Phase 2 (Tension) | ~230 | ~5 (Addition Test, BECAUSE Test mentioned) | 0 | 0% |
| Phase 3 (Metaphor) | ~450 | ~30 (MG-01 through MG-05) | ~10 (metaphor stated, no derivation) | 2% |
| Phase 4 (Layout) | ~500 | ~80 (B3, B4, B5 rules) | ~50 (mechanism count, transitions, guardrails) | 10% |
| Phase 5 (Output) | ~100 | ~5 (P-02 library prohibition) | 0 | 0% |
| Appendix (Warnings) | ~130 | 0 | 0 | 0% |
| **TOTAL** | **~1,680** | **~141** | **~70** | **4.2%** |

**The TC skill was 4.2% utilized.** The prompt references 8.4% of it. The actual HTML shows evidence of only 4.2% operational use.

### 5.2 PA Skill Utilization Score

| PA Component | Lines in Skill | Lines Referenced in Prompt | Lines Operationally Used | Utilization |
|-------------|----------------|---------------------------|--------------------------|-------------|
| Warning/Principles | ~50 | ~10 (fresh-eyes, sovereignty) | 0 (no audit executed) | 0% |
| 28 Core Questions | ~120 | ~40 (C4 assignments, C7 detail) | 0 | 0% |
| Metaphor-Awareness | ~80 | ~15 (C7) | 0 | 0% |
| Quantitative Guardrails | ~80 | ~30 (B1 spatial rules) | ~30 (container, CPL, spacing enforced at BUILD time) | 38% |
| 4 Modes | ~50 | ~20 (C4 Mode 4 specified) | 0 (Mode 4 never executed) | 0% |
| Protocols (Cold Look, Scroll) | ~70 | ~20 (C4 protocol detail) | 0 | 0% |
| Void Pipeline (PA-50-53) | ~40 | ~20 (C4 + C7) | 0 | 0% |
| Information Isolation | ~40 | ~15 (C4 isolation rules) | 0 | 0% |
| Team Roles/Gates | ~80 | ~15 | 0 | 0% |
| **TOTAL** | **~610** | **~185** | **~30** | **4.9%** |

**The PA skill was 4.9% utilized** — and ONLY through its guardrails being enforced at build time (container width, CPL, spacing rules absorbed into B1). The actual PERCEPTUAL AUDIT was never executed.

### 5.3 Combined Skill Utilization

| Skill | Total Lines | Operationally Used | Utilization |
|-------|------------|-------------------|-------------|
| Tension-Composition | 1,878 | ~70 lines | 3.7% |
| Perceptual-Auditing | 774 | ~30 lines | 3.9% |
| **Combined** | **2,652** | **~100** | **3.8%** |

**2,652 lines of skill specification. 100 lines operationally used. 3.8% utilization.**

---

## PART 6: RECOMMENDATIONS

### 6.1 For TC Skill Invocation

1. **Extract deliverable templates from TC into the execution prompt.** Not "read SKILL.md" but "produce these 4 files using these templates."
2. **Gate on deliverable existence, not skill reference.** Gate 0 should check "01-axis-questioning.md exists AND has >= 4 axis entries" — not "Metaphor Agent was told to read SKILL.md."
3. **Compile TC Phase 4 translation tables into builder instructions.** The 5-category property extraction and translation grammar should be directly in the builder's 75-line prompt slice, not buried in a 1,878-line file the builder may not read.

### 6.2 For PA Skill Invocation

1. **Mode 4 PA must be SCHEDULED, not just SPECIFIED.** The prompt specifies Mode 4 at Gate 5 but if the experiment runs long (which it always does), Gate 5 gets cut. PA must be time-boxed and non-optional.
2. **Embed Mode 1 (90-second) PA in EVERY builder pass.** The 5-question embedded PA after each pass would catch uniformity before it compounds across 4 passes.
3. **The void pipeline needs a UNIFORMITY dimension.** PA-50-53 catch continuous voids but not distributed monotony. Add PA-54: "Count distinct visual treatments across all sections. If < 3 distinct treatments exist, the page has uniformity monotony."

### 6.3 Structural Fix

**The skills need a COMPILATION step.** Before each experiment, a "Skill Compiler" agent should:
1. Read the full skill files
2. Extract the operationally relevant sections for each agent role
3. Compile them into per-agent instruction packets (30-50 lines each)
4. Include deliverable templates with fill-in-the-blank structure
5. Include gate conditions that check deliverable existence

This transforms skills from "1,878 lines an agent might skim" into "40 lines an agent WILL execute."

---

## APPENDIX: EVERY TC MECHANISM — PROMPT REFERENCE + HTML EVIDENCE

| # | Mechanism | In TC Skill? | In Prompt? | In HTML? | Notes |
|---|-----------|-------------|-----------|----------|-------|
| 1 | Border-Weight Gradient | YES | YES (C-01) | TABLE ONLY — no section-level borders | Only deployed within table classes, not as section-level hierarchy |
| 2 | 2-Zone Component DNA | YES | YES (C-01) | YES — component-block has label/body zones | Well-executed within components |
| 3 | Solid Offset Depth | YES | YES (C-01) | PARTIAL — pullquote has outline-offset | Only 1 instance, effective |
| 4 | Spacing Compression | YES | YES (C-01) | PARTIAL — section padding varies 32-80px | Range is narrow; not a dramatic arc |
| 5 | Dense/Sparse Alternation | YES | YES (C-01) | CLAIMED — zone backgrounds are supposed to alternate | RGB differences of 1-8 points make this invisible |
| 6 | Width Variation | YES | YES (C-01) | PARTIAL — tension-group at 90%, pullquote at 80% | Only 2 elements use non-100% width |
| 7 | Zone Backgrounds | YES | YES (C-01) | YES — 12 zone-specific backgrounds | But RGB differences too subtle to perceive |
| 8 | Scroll Witness | YES | YES (C-01) | NO | Absent — no scroll position indicator |
| 9 | Confidence Color (Accent) | YES | YES (C-01) | YES — amber, green, coral accents on components and tables | Well-deployed |
| 10 | Border-Left Signal | YES | YES (C-01) | YES — component-block + tables use left-border accent | Well-deployed |
| 11 | Typography Scale | YES | YES (C-01) | PARTIAL — H1/H2/H3/body/meta sizes exist but uniform across sections | No section-level typographic variation |
| 12 | Progressive Disclosure | YES | YES (C-01) | NO | Absent — no collapsible/expandable elements |
| 13 | Dark Header | YES | YES (C-01) | YES — dark header with red border-bottom | Well-executed |
| 14 | Footer Mirror | YES | YES (C-01) | YES — dark footer mirrors header | Well-executed |
| 15 | Bento Grid | YES | YES (C-01) | NO | Absent — no grid layouts |
| 16 | Drop Cap | YES | YES (C-01) | YES — S1 first letter | Well-executed, 1 instance |
| 17 | Code Block | YES | YES (C-01) | YES — sequence-block dark code blocks | Well-executed in S8 |
| 18 | Data Table | YES | YES (C-01) | YES — 7 tables with varied treatment | Best-deployed mechanism family |

**Mechanism deployment summary:**
- WELL-EXECUTED (4): #9, #10, #13, #14
- PARTIAL (5): #3, #4, #6, #11, #17
- PRESENT BUT INEFFECTIVE (2): #5, #7 (zone backgrounds too subtle)
- ABSENT (4): #8, #12, #15, #18 (tables present but not in categories above)
- CLAIMED but not effective: #1 (borders only on tables, not section hierarchy)

**Table treatment is the ONLY mechanism family with genuine compositional variety** — 6 table classes (compact, dense, featured, moderate, warning, light, findings) with varied border-weight, accent color, and density. This is where the builder invested compositional intelligence. The rest of the page is template-uniform.

---

**END OF SKILL INVOCATION AUDIT**

Key finding: **3.8% skill utilization across 2,652 lines of specification.** The skills were designed to prevent exactly the failure modes that occurred (uniformity, monotony, void, absent containment). The prompt REFERENCES them but never creates the operational conditions for their execution. Skills need COMPILATION into agent-executable instructions, not CITATION as reading assignments.
