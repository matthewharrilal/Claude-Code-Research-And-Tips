# Comprehensive Skill Enrichment Plan: Synthesis of Research + Session Insights

**Date:** 2026-02-15
**Agent:** skill-enrichment-analyst
**Team:** session-enrichment
**Status:** COMPLETE

---

## EXECUTIVE SUMMARY

This document provides a **comprehensive modification plan** for both skills (`tension-composition/SKILL.md` and `perceptual-auditing/SKILL.md`) incorporating:
1. **4 research modifications** (richness/rigidity teams)
2. **10 session insights** (deep Q&A discoveries)
3. **Interaction effects analysis** (compound rigidity risks)

**Critical Principle:** Changes are sequenced to AVOID checklist factory. Enabling constraints (fractal, semantic justification) are adopted FIRST. Limiting constraints (raw mechanism count) are rejected.

**Highest-Leverage Change:** Replace "sample 2-4 mechanisms" with per-category minimum + semantic justification. This single change addresses 50%+ of the richness gap.

---

## TABLE OF CONTENTS

1. [Modification Summary Table](#modification-summary-table)
2. [SKILL 1: tension-composition (8 Modifications)](#skill-1-tension-composition-8-modifications)
3. [SKILL 2: perceptual-auditing (3 Modifications)](#skill-2-perceptual-auditing-3-modifications)
4. [Interaction Effects Analysis](#interaction-effects-analysis)
5. [Implementation Sequence](#implementation-sequence)
6. [Risk Assessment](#risk-assessment)

---

## MODIFICATION SUMMARY TABLE

| ID | Modification | Skill | Lines | Type | Research | Session | Verdict |
|----|-------------|-------|-------|------|----------|---------|---------|
| **M1** | Replace "sample 2-4" with per-category minimum | TC | 787 | MODIFY | Mod 1 | I-04 | **ADOPT** |
| **M2** | Promote fractal to GATE | TC | 1071-1080 | ADOPT | Mod 2 | I-04 | **ADOPT** |
| **M3** | Add container width NON-NEGOTIABLE | TC | Phase 4.0 | NEW | Phase D | — | **ADOPT** |
| **M4** | Strengthen Phase 3.5 domain check | TC | 665-708 | MODIFY | Mod 2 | I-05 | **ADOPT** |
| **M5** | Add tier-based pipeline selection | TC | Phase 0 | NEW | — | I-04, I-07 | **ADOPT** |
| **M6** | Add semantic value justification | TC | Phase 4 | NEW | — | I-03 | **ADOPT** |
| **M7** | Add mechanism combination guidance | TC | Phase 4 | NEW | — | I-04 | **ADOPT** |
| **M8** | Add individual→combination→multi framing | TC | All phases | NEW | — | I-04 | **ADOPT** |
| **M9** | Add semantic value audit question | PA | Tier 2 | NEW | — | I-03 | **ADOPT** |
| **M10** | Add grammar-vs-derivative audit mode | PA | Tier 3 | NEW | — | I-09 | **ADOPT** |
| **M11** | Add per-tier audit scope | PA | All modes | NEW | — | I-04 | **ADOPT** |

**REJECTED:**
- **Mod 4 (technique count metric):** Goodhart's Law trap (rigidity-research/02-modification-analysis.md)
- **Mod 3 (full coherence table):** Too heavy; replaced with 3-transition minimum

---

## SKILL 1: tension-composition (8 Modifications)

**File:** `~/.claude/skills/tension-composition/SKILL.md` (1,402 lines)

---

### M1: Replace "Sample 2-4 Mechanisms" with Per-Category Minimum

**WHY NEEDED:**
- **Research:** ALL 11 research agents identified "sample 2-4 mechanisms" as the single most limiting specification
- **Session:** I-04 (tier distinction framing) reveals mechanism count is NOT the issue; mechanism BREADTH is
- **Evidence:** Variant B deployed 7 mechanisms but only 2 categories (Spatial, Material). Showcase pages deploy across ALL 5 categories.

**CURRENT TEXT (Lines 783-787):**
```markdown
**Scan mechanism catalog** — identify 3-5 techniques relevant to YOUR metaphor

**Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.**
```

**EXACT REPLACEMENT:**
```markdown
**Scan mechanism catalog** — You MUST engage with mechanisms across ALL 5 property categories.

**For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational), identify AT LEAST ONE mechanism that serves THIS content.**

**Mechanism selection protocol:**
1. **Read the full catalog** (18 mechanisms, ~869 lines) — DO NOT sample randomly
2. **Per-category deployment:**
   - Spatial (1+): Border-weight gradient, spacing compression, width variation, zone backgrounds, bento grid
   - Temporal (1+): Dense/sparse alternation, progressive disclosure
   - Material (1+): Typographic scale jumping, zone backgrounds, confidence encoding via color
   - Behavioral (1+): Scroll witness, drop cap, solid offset depth
   - Relational (1+): 2-zone DNA, border-left signaling

3. **Justification requirement (MANDATORY):**
   - For EACH mechanism you deploy: Document WHY it serves THIS metaphor at THIS location
   - For AT LEAST 3 mechanisms you considered but REJECTED: Document WHY they don't fit

**Natural landing:** 5-10 mechanisms for Middle tier, 8-12 for Ceiling, 12-15 for Flagship.

**CRITICAL:** You are deploying VOCABULARY (mechanisms), not counting techniques. The goal is breadth across categories, not hitting a number.
```

**RISK:** Low. Per-category minimum is ENABLING (ensures breadth) without prescribing count. Justification requirement prevents padding.

---

### M2: Promote Fractal Consistency to GATE

**WHY NEEDED:**
- **Research:** Mod 2 (fractal gate) was STRONGEST enabling modification (LOW rigidity cost, HIGH richness gain)
- **Session:** I-04 confirms fractal is content-agnostic and applies at all tiers
- **Evidence:** Current 10-line "check" has ~0% compliance. Gates achieve 100% compliance.

**CURRENT TEXT (Lines 1071-1080):**
```markdown
### Step 4.7 -- Fractal Consistency Check

The metaphor's pattern must appear at multiple scales:
- **Navigation scale** (TOC)
- **Page scale** (section sequence)
- **Section scale** (component sequence within section)
- **Component scale** (content within component)
- **Character scale** (code comments vs code logic)

Verify the SAME metaphor direction applies consistently at every zoom level.
```

**EXACT REPLACEMENT:**
```markdown
### Step 4.7 -- Fractal Consistency GATE (MANDATORY)

**BEFORE proceeding to Phase 5, you MUST complete this gate.**

**Fractal self-similarity requirement:** The SAME design pattern must appear at multiple scales. This is NOT optional.

**Scale coverage table (MANDATORY deliverable):**

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | [How TOC/header reflects pattern] | [Specific CSS] |
| Page | [How section sequence reflects pattern] | [Specific CSS] |
| Section | [How components within section reflect pattern] | [Specific CSS] |
| Component | [How content within component reflects pattern] | [Specific CSS] |
| Character | [How inline/text-level reflects pattern] | [Specific CSS] |

**Tier-calibrated requirements:**
- **Floor:** EXEMPT (component assembly, no custom pattern)
- **Middle:** 2 scales minimum (Page + Component)
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
- **Flagship:** 5 scales required (all scales)

**Passing criteria:**
- [ ] Table complete with ALL required scales for tier
- [ ] SAME pattern direction at each scale (e.g., if page-level uses sparse→dense, section-level MUST also use sparse→dense)
- [ ] CSS evidence provided for each scale
- [ ] Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative

**Failing criteria (any of):**
- Pattern reverses direction between scales (page sparse→dense, section dense→sparse)
- Pattern exists at fewer than tier minimum scales
- No CSS evidence provided
- "Pattern" is decorative (color theme) not structural (density/hierarchy)

**Phase 4.7 is complete when:**
- ✅ Scale coverage table written
- ✅ Tier minimum scales demonstrated
- ✅ Self-similarity verified (same direction at all scales)

**You are now LOCKED IN. Proceed to Phase 4.8.**
```

**NEW LOCATION:** Between Phase 4.6 (Transition Grammar) and Phase 4.8 (Section-Aware Composition)

**RISK:** Low. Fractal consistency is enabling (structural coherence) and content-agnostic. Scope-calibration prevents Floor/Middle overload.

---

### M3: Add Container Width NON-NEGOTIABLE Rule

**WHY NEEDED:**
- **Research:** Phase D identified container width as THE primary failure mode (4/5 pages violated 940px)
- **Session:** NOT in session insights but CRITICAL from Phase D validation
- **Evidence:** 940-960px is the "sweet spot" (65-67% of 1440px viewport). Below this = narrow strip. Above this = edge-to-edge.

**CURRENT TEXT:** No explicit container width rule in Phase 4.0 guardrails

**EXACT LOCATION:** Phase 4.0 guardrails section (lines 716-756)

**INSERT AFTER** existing guardrails table:

```markdown
**CONTAINER WIDTH (NON-NEGOTIABLE — HIGHEST PRIORITY):**

| Guardrail | Value | Rationale | Override |
|---|---|---|---|
| **Container width at 1440px** | **940-960px** | 65-67% content-to-viewport ratio. Sweet spot. | **NEVER** |
| Minimum container width | 940px | Below this = narrow strip syndrome (content lost in margins) | NEVER |
| Maximum container width | 960px | Above this = edge-to-edge, no breathing room | Rarely (full-bleed sections only) |

**CRITICAL PRINCIPLE:**

No metaphor may override the 940-960px container width. If your metaphor demands narrowing (e.g., "cylindrical core sample," "narrow alley," "manuscript page"):

**CORRECT:** Express narrowing through INTERNAL spacing (padding variation, asymmetric margins), NOT external width reduction.

**WRONG:** Narrow the container to 650px to "match the metaphor."

**Example (geological core):**
```css
/* WRONG */
.container { max-width: 700px; } /* Cylindrical metaphor forces narrow width */

/* CORRECT */
.container {
  max-width: 960px; /* Non-negotiable */
  padding: 0 120px; /* Internal padding creates "narrow" effect visually */
}
```

**Priority order when metaphor conflicts with container width:**
1. Container width 940-960px (NEVER compromise)
2. Metaphor fidelity (ADJUST expression to meet width floor)
3. Aesthetic preference (LAST priority)

**This is the #1 Phase D failure mode. If you violate this, the entire composition FAILS.**
```

**RISK:** None. This is a BINARY rule preventing known failure. Zero ambiguity.

---

### M4: Strengthen Phase 3.5 to Check Domain FAMILY

**WHY NEEDED:**
- **Research:** Mod 2 (fractal gate) recommended strengthening divergence check
- **Session:** I-05 (showcase DNA) reveals case studies carry family resemblance even with different metaphors
- **Evidence:** "Geological" and "Architectural" are SAME FAMILY (structural domains). Convergence risk is real.

**CURRENT TEXT (Lines 665-708 — Phase 3.5 Divergence Justification):**
```markdown
3. **Does this metaphor appear in `/case-studies/_INDEX.md`?** (DO NOT READ full case studies, only titles)
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4
```

**EXACT REPLACEMENT:**
```markdown
3. **Does this metaphor share a DOMAIN FAMILY with any case study in `/case-studies/_INDEX.md`?**
   (Read _INDEX.md titles + tension summaries ONLY)

   **Domain family categories:**
   - Structural: geological, architectural, mechanical, industrial, construction
   - Natural: botanical, biological, atmospheric, seasonal, ecological
   - Cultural: manuscript, theatrical, musical, culinary, ceremonial
   - Spatial: cartographic, navigational, territorial, astronomical
   - Temporal: historical, archaeological, evolutionary, developmental

   **Same-family test:** "Would a layperson describe both metaphors using the same one-word category?"
   - Geological + Architectural → BOTH "structural" → SAME FAMILY
   - Geological + Botanical → "structural" vs "natural" → DIFFERENT FAMILIES

   - If DIFFERENT FAMILY → Proceed to Phase 4
   - If SAME FAMILY → Proceed to divergence justification (Step 3.5D — STRICTER criteria)

**Step 3.5D (modified for same-family convergence):**

If your metaphor is in the SAME FAMILY as a library pattern:

| Question | Your Answer |
|----------|-------------|
| Did I complete Phase 1-2 WITHOUT reading library? | YES / NO |
| Did content analysis INDEPENDENTLY lead to this domain? | YES / NO |
| Can I trace derivation path (tension → search query → domain)? | YES / NO |
| Do I have DIFFERENT structural isomorphisms than the case study? | YES / NO |
| Do I have a DIFFERENT section architecture? | YES / NO |
| Do I use DIFFERENT vocabulary (class names, labels)? | YES / NO |

**Passing criteria (STRICTER for same-family):**
- ALL 6 questions favor independent convergence
- DIFFERENT on 3+ dimensions (isomorphisms, architecture, vocabulary)

**If < 3 dimensions differ → REGENERATION IS MANDATORY.** No justification escape route for same-family convergence.

**Constraint for regeneration:** "My metaphor MUST NOT be in the [structural/natural/cultural/spatial/temporal] family. What OTHER domain family resolves [tension] while satisfying [constraints]?"
```

**RISK:** Low-moderate. Stricter than current check, but same-family convergence is a real risk (geological + architectural look similar even with different vocabulary).

---

### M5: Add Tier-Based Pipeline Selection

**WHY NEEDED:**
- **Session:** I-04 (tier distinction), I-07 (experimental design logic) reveal Middle tier should SKIP metaphor derivation
- **Research:** Richness investigation confirms Middle achieves richness through PATTERN DEPLOYMENT, not metaphor
- **Evidence:** Track 1 (assembly) vs Track 2 (composition) split exists, but NO tier split within Track 2

**CURRENT TEXT:** No tier routing in Phase 0

**EXACT LOCATION:** Phase 0 (Content Assessment), after Step 0C (Section Identification)

**INSERT NEW STEP 0D:**

```markdown
### Step 0D: Tier Classification and Pipeline Routing

**BEFORE entering Phase 1, classify the target tier for this content.**

**Tier classification decision tree:**

```
CONTENT TYPE:
├─ <200 words, API reference, config table, changelog?
│  └─ FLOOR (5 mechanisms, no metaphor, 30-45 min)
│     → ROUTE: Skip Phases 1-4. Use Track 1 (component assembly).
│
├─ Tutorial, guide, overview, comparison, narrative (prose-dominant)?
│  └─ MIDDLE (8-10 mechanisms, no metaphor, 70-100 min)
│     → ROUTE: Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection.
│
├─ Genuine structural tension (Addition Test = NO)?
│  └─ CEILING (12-15 mechanisms, metaphor, 150-220 min)
│     → ROUTE: Full pipeline (Phases 1-7).
│
└─ Anchor content, design system demonstration, philosophical deep-dive?
   └─ FLAGSHIP (16-18 mechanisms, multi-pattern, 240-400 min)
      → ROUTE: Full pipeline + multi-pass audit.
```

**Middle tier PATTERN selection (replaces Phases 1-3):**

For Middle tier, you do NOT derive a metaphor. Instead, select a DENSITY PATTERN via content-type mapping:

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Information density builds progressively (sparse intro → dense peak → sparse resolution) |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column (navigation/labels), sparse right (content/examples) |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections, independent blocks at varying densities |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation (heartbeat pattern) |

**Pattern selection output:**
```
TIER: Middle
PATTERN: CRESCENDO
JUSTIFICATION: Tutorial content with 5 progressive steps. Complexity increases intro→build→peak.
SKIP: Phases 1-3 (no metaphor derivation)
NEXT: Phase 4.0 (mechanism extraction with CRESCENDO pattern)
```

**Ceiling/Flagship tier:** Proceed to Phase 1 (full pipeline).

**Critical principle:** Middle tier richness comes from PATTERN DEPLOYMENT (8-10 mechanisms across 5 categories), not metaphor. This is the tested hypothesis from richness research.
```

**RISK:** Moderate. This is a MAJOR structural change (skipping phases for Middle tier). Requires careful testing. BUT: it's grounded in I-04 (tier distinction) and I-06 (lookup ideology).

---

### M6: Add Semantic Value Justification Requirement

**WHY NEEDED:**
- **Session:** I-03 (semantic vs arbitrary value test) provides complete framework
- **Research:** No direct research source, but implied by "richness = content-mechanism fit"
- **Evidence:** Variant B used mechanisms at NAMING level (class names) but not CSS-generation level (arbitrary values)

**CURRENT TEXT:** No semantic justification requirement at Phase 4

**EXACT LOCATION:** Phase 4.2 (Translation Grammar), after lookup tables

**INSERT NEW SECTION:**

```markdown
### Step 4.2B -- Semantic Value Justification (MANDATORY)

**For EVERY varying CSS value (padding, margin, font-size, border-width), answer these 3 questions:**

**Q1: WHAT varies?**
- Identify the property and its range (e.g., "padding varies from 16px to 80px across sections")

**Q2: WHY does it vary?**
- Content structure (hierarchical depth, section importance, reader journey phase)?
- Metaphor logic (geological depth, confidence certainty, fractal rhythm)?
- Pattern logic (CRESCENDO peaks here, dense stratum, EXHALE section)?
- OR: Token availability ("because it's on the scale") / visual aesthetics ("looked good")?

**Q3: WHY THESE SPECIFIC VALUES and not adjacent ones on the token scale?**
- Example: "Why 40px not 48px or 32px for this element?"
- If answer = "content structure" or "metaphor logic" → SEMANTIC ✓
- If answer = "token availability" or "looked good" → ARBITRARY ✗

**Tier-specific semantic depth:**

| Tier | Expected Depth | Example Justification |
|------|---------------|----------------------|
| **Floor** | None (lookup only) | "Callouts use --space-6 per component inventory" |
| **Middle** | Pattern logic | "CRESCENDO peak section uses 16px (densest) because complexity peaks here" |
| **Ceiling** | Metaphor logic | "Bedrock stratum uses 40px because geological consolidation creates space (sparse)" |
| **Flagship** | Multi-dimensional | "20px padding = confidence (compression) × journey (unfamiliarity) × attention (recovery breathing)" |

**Deliverable (at Phase 5 Output A):**

```markdown
### Value Justification Record

**Property:** padding (section-level)
**Range:** 80px (intro) → 32px (build) → 16px (peak)
**Semantic driver:** CRESCENDO pattern (progressive density)
**Specific justifications:**
  - Intro (80px): First contact, unfamiliar. Reader needs orientation space.
  - Build (32px): 60% compression from intro. Reader is oriented, absorbing info.
  - Peak (16px): 80% compression from intro. Maximum density, reader has full context.
  - Why 80px not 64px for intro? Content is FOUNDATIONAL (tokens/soul). Needs maximum breathing.
  - Why 16px not 12px for peak? 16px is the floor (accessibility minimum). Cannot compress further.
```

**Passing criteria:**
- Middle: 80%+ varying values justify via pattern logic
- Ceiling: 90%+ varying values justify via metaphor logic
- Flagship: 95%+ varying values justify via multi-dimensional logic

**Failing criteria:**
- 3+ values justified only by "token availability" or "looked good"
- Ratios arbitrary (64→56→48 instead of 64→32→16)
- No STRUCTURAL reason for value selection
```

**RISK:** Moderate. This adds documentation overhead (~10-15 min per build). BUT: it's the difference between mechanism deployment at naming level vs CSS-generation level (I-03). Worth the cost.

---

### M7: Add Mechanism Combination Guidance (Ceiling+ Only)

**WHY NEEDED:**
- **Session:** I-04 (tier distinction) reveals Ceiling = COMBINATION deployment, not just individual
- **Research:** No direct research source, but tier architecture (04-tier-architecture.md) provides full framework
- **Evidence:** OD-004 uses 3 mechanisms (border-weight + spacing + backgrounds) to encode SAME semantic (confidence)

**CURRENT TEXT:** No combination guidance

**EXACT LOCATION:** Phase 4 (Compositional Layout Generation), after Step 4.2B

**INSERT NEW STEP 4.2C (CEILING/FLAGSHIP ONLY):**

```markdown
### Step 4.2C -- Mechanism COMBINATION Deployment (CEILING/FLAGSHIP ONLY)

**MIDDLE TIER: SKIP THIS STEP** (individual deployment only)

**CEILING/FLAGSHIP: MANDATORY**

**What is a mechanism combination?**

Multiple mechanisms encoding the SAME semantic dimension. When the semantic value changes, MULTIPLE mechanisms shift TOGETHER = multi-channel coherence.

**Example (OD-004 geological confidence):**
- Semantic dimension: CONFIDENCE (established → probable → speculative → open)
- Mechanism 1 (Border-Weight): 4px → 3px → 2px → 1px
- Mechanism 2 (Spacing): 40px → 32px → 20px → 16px
- Mechanism 3 (Backgrounds): light → moderate → dense → breathing

All THREE vary together as confidence decreases. This is a TRIPLE combination.

**Ceiling tier requirement:** AT LEAST 2 mechanism combinations (2-3 mechanisms each)
**Flagship tier requirement:** AT LEAST 3 mechanism combinations across different patterns

**Proven combination catalog (sample from these):**

| Combination Name | Mechanisms | Shared Semantic | Proven In |
|------------------|-----------|----------------|-----------|
| **Hierarchy Triad** | Border-Weight (#1) + Spacing (#4) + Typography (#11) | Importance/certainty | OD-004, DD-006 |
| **Depth Triple** | Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) | Layering/depth | OD-004, DD-004 |
| **Density Triple** | Dense/Sparse Alt. (#5) + Spacing (#4) + Backgrounds (#7) | Rhythm/pacing | DD-006, DD-001 |
| **Zone Pair** | Backgrounds (#7) + Border-Color (#9) | Category/section | DD-001, OD-004 |
| **Component Pair** | 2-Zone DNA (#2) + Typography (#11) | Structure (label/body) | ALL case studies |

**How to deploy combinations:**

1. **Identify 2+ shared semantics** in your content (e.g., "confidence," "importance," "depth")
2. **For EACH shared semantic,** select a proven combination OR create your own (2-3 mechanisms)
3. **Document the combination** with CSS evidence

**Deliverable (MANDATORY for Ceiling+):**

| Shared Semantic | Mechanism 1 | Mechanism 2 | Mechanism 3 | Where Applied |
|----------------|------------|------------|------------|---------------|
| Confidence | Border-weight (4px→1px) | Spacing (40px→16px) | Backgrounds (light→dark) | All strata |
| Component structure | 2-zone DNA | Typography (0.75rem→1rem) | — | All callouts |

**Verification question:** When the semantic value changes (e.g., confidence decreases), do MULTIPLE mechanisms shift together?
- If YES → combination exists (Ceiling) ✓
- If NO → mechanisms are independent (Middle) ✗

**Anti-combination warning (DO NOT combine these):**

- Semantic overload: Border-weight encodes TYPE and PRIORITY on same element (conflict)
- Perceptual contradiction: Sparse padding + dense background (contradiction)
- Redundant encoding: Border-weight + border-color BOTH encode priority (redundant)
```

**RISK:** Moderate-high. This is prescriptive (proven combinations list). MITIGATION: Frame as "sample from these" (vocabulary) not "use these exactly" (template). Add customization note.

---

### M8: Add Individual→Combination→Multi-Pattern Framing

**WHY NEEDED:**
- **Session:** I-04 (tier distinction framing) — the CORE insight
- **Research:** Not explicitly stated in research but implied
- **Evidence:** This framing is missing from ALL current documentation

**CURRENT TEXT:** Tier distinction exists only as mechanism count (5 vs 8-10 vs 12-15 vs 16-18)

**LOCATIONS TO UPDATE:** Multiple sections throughout skill

**CHANGES:**

**1. Update Phase 0D (tier classification) to include framing:**

```markdown
**Tier distinction (analysis level, not just count):**
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (2-3 mechanisms encode same semantic)
- **Flagship:** Multi-pattern COMPOSITION (3-5 patterns with typed transitions)
```

**2. Update Phase 4.0 section headers:**

**Before:**
```
## Phase 4: Compositional Layout Generation
```

**After:**
```
## Phase 4: Compositional Layout Generation

**Tier-specific deployment levels:**
- **Middle (Phase 4.0M):** Individual mechanism deployment (8-10 mechanisms, each independent)
- **Ceiling (Phase 4.0C):** Mechanism combination deployment (12-15 mechanisms, 2+ combinations)
- **Flagship (Phase 4.0F):** Multi-pattern composition (16-18 mechanisms, 3+ patterns, typed transitions)
```

**3. Add deployment level examples in mechanism extraction section:**

```markdown
**Middle tier example (individual):**
- Mechanism #1: Border-left → encodes component TYPE
- Mechanism #2: Backgrounds → encodes section ZONE
- Mechanism #3: Typography → encodes HIERARCHY
- All THREE serve DIFFERENT semantics (independent)

**Ceiling tier example (combination):**
- Mechanisms #1+#4+#7: Border-weight + Spacing + Backgrounds → ALL encode CONFIDENCE
- When confidence changes, all three shift together (combination)

**Flagship tier example (multi-pattern):**
- Pattern 1 (Spiral): Uses Hierarchy Triple
- Pattern 2 (Bento): Uses Zone Pair
- Pattern 3 (F-Pattern): Uses Density Triple
- Typed transitions between patterns (BREATHING/SMOOTH/BRIDGE)
```

**RISK:** Low. This is clarification, not prescription. Makes existing tier model UNDERSTANDABLE.

---

## SKILL 2: perceptual-auditing (3 Modifications)

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines)

---

### M9: Add Semantic Value Audit Question

**WHY NEEDED:**
- **Session:** I-03 (semantic value test) provides framework
- **Research:** No direct research, but critical gap in current audit
- **Evidence:** Current audit checks WHAT CSS exists, not WHY values were chosen

**CURRENT TEXT:** 48 PA questions exist, none check semantic value justification

**EXACT LOCATION:** Tier 2 (Standard Fifteen), after PA-20

**INSERT NEW QUESTIONS:**

```markdown
### Semantic Value Audit (NEW — Per-Tier)

**For Middle tier pages (pattern logic required):**

**PA-SEMANTIC-01:** "For the 3 most prominent spacing variations (padding/margin), can you justify each value against adjacent token values using pattern logic?"

**Passing answer example:**
"Section 1 uses 64px (intro phase of CRESCENDO, sparse). Section 2 uses 32px (build phase, 50% compression). Section 3 uses 16px (peak phase, 75% compression). 64→32→16 = 4:2:1 ratio encodes progressive density."

**Failing answer example:**
"Section 1 uses 64px because it looked good. Section 2 uses 32px because it's on the token scale."

**PA-SEMANTIC-02:** "Do spacing progressions use clear ratios (2:1, 3:1, 4:2:1) or are they arbitrary gradations?"

**Pass:** 64→32→16 (clear 2:1 ratios)
**Fail:** 64→56→48 (arbitrary 8px decrements)

**For Ceiling tier pages (metaphor logic required):**

**PA-SEMANTIC-03:** "For the primary metaphor, can you map 3 content structures to 3 metaphor structures with value justifications?"

**Passing answer example:**
"Geological metaphor. Established knowledge = bedrock stratum = 40px (consolidated under pressure, sparse). Speculative knowledge = topsoil = 16px (unconsolidated, dense). 40px→16px = 2.5:1 ratio encodes confidence-density inversion."

**Failing answer example:**
"Geological metaphor. Strata have different padding. It varies."

**PA-SEMANTIC-04:** "Do metaphor-driven values encode metaphor SEMANTICS or just use metaphor VOCABULARY?"

**Pass:** Values vary based on metaphor logic (bedrock sparse because consolidated)
**Fail:** Metaphor vocabulary (.bedrock class) but arbitrary values

**Verdict integration:**
- Middle tier: MUST pass PA-SEMANTIC-01, 02 (pattern justification)
- Ceiling tier: MUST pass PA-SEMANTIC-03, 04 (metaphor justification)
- Floor tier: EXEMPT (lookup-only)
- Flagship tier: MUST pass all 4 + multi-dimensional overlap check
```

**RISK:** Low. These are VERIFICATION questions, not prescription. They check semantic depth matches tier expectations.

---

### M10: Add Grammar-vs-Derivative Audit Mode

**WHY NEEDED:**
- **Session:** I-09 (validation framework) provides 5-test protocol
- **Research:** No direct research, but critical for Middle-tier experiment
- **Evidence:** The Middle-tier experiment tests whether 8-10 mechanisms = novel or derivative. Audit must detect this.

**CURRENT TEXT:** No grammar-vs-derivative mode

**EXACT LOCATION:** After Mode 4 (Standalone), add Mode 5

**INSERT NEW MODE:**

```markdown
### Mode 5: Grammar-vs-Derivative (Middle-Tier Experiment Validation)

**When:** AFTER building a Middle-tier page (8-10 mechanisms, no metaphor)
**What:** 5-test protocol to determine if output is NOVEL (grammar fluency) or DERIVATIVE (showcase resemblance)
**Duration:** 45-60 minutes
**Team:** 5 agents (1 per test) + synthesis

**Purpose:** The Middle-tier hypothesis is: "8-10 mechanisms deployed via lookup produce novel output, not derivative copies of showcase pages." This mode tests that hypothesis.

**The 5 Tests:**

**Test 1: Blur Test (Structural Fingerprint)**
- Screenshot Middle-tier page at 1440px
- Gaussian blur (20px radius) — text unreadable, only shapes/weights visible
- Screenshot OD-004 and DD-006 (showcase pages) with same blur
- Side-by-side comparison: Does Middle page have DISTINCT structural fingerprint or SAME fingerprint?
- **Novel:** Different shape distribution, different visual weight placement
- **Derivative:** Same sectioning pattern, same header/footer/sidebar structure

**Test 2: Fresh-Eyes Agent Test (Zero-Context Evaluation)**
- Spawn agent with ZERO context (no research, no compositional-core, no case studies)
- Show Middle-tier page + 3 showcase pages (OD-004, DD-006, CD-006)
- Ask: "Which of these 4 pages looks most similar to each other?"
- **Novel:** Fresh-eyes agent does NOT group Middle with showcases
- **Derivative:** Fresh-eyes agent groups Middle with OD-004 or DD-006

**Test 3: Mechanism Expression Audit (Per-Mechanism CSS Comparison)**
- For EACH of 8-10 mechanisms deployed in Middle page:
  - Extract CSS values (border-widths, padding amounts, font-sizes)
  - Compare to OD-004 and DD-006 CSS for same mechanism
  - Count IDENTICAL values vs DIFFERENT values
- **Novel:** <30% value overlap (most values different)
- **Derivative:** >60% value overlap (copying showcase values)

**Test 4: Side-by-Side Perception Test**
- Show Middle-tier page next to Variant B (Phase D) and next to OD-004
- Ask: "Does Middle feel closer to Variant B (pipeline output) or OD-004 (showcase)?"
- **Novel:** Middle feels like EVOLVED Variant B (richer but same family)
- **Derivative:** Middle feels like COPY of OD-004 (different metaphor, same structure)

**Test 5: Structural Similarity Score (8-Point Quantitative)**
- Score Middle vs OD-004 on 8 dimensions (0-2 points each, 0=different, 1=similar, 2=identical):
  1. Header structure (dark bg + 3px rule?)
  2. Section count (4-6 sections?)
  3. Section padding progression (sparse→dense?)
  4. Background zone usage (3-4 color zones?)
  5. Border-weight gradient (4px→3px→2px→1px?)
  6. Callout density (2-4 callouts per section?)
  7. Grid/flex layout count (2-4 layouts?)
  8. Footer presence/structure (dark bg + 3px rule?)
- **Novel:** Score 0-6 (mostly different, some family resemblance)
- **Derivative:** Score 10-16 (mostly identical)

**Synthesis Framework:**

| Test | Novel Signal | Derivative Signal | Middle-Tier Page Score |
|------|-------------|-------------------|----------------------|
| Blur Test | Distinct fingerprint | Same fingerprint | [Novel / Derivative] |
| Fresh-Eyes | Not grouped with showcases | Grouped with showcases | [Novel / Derivative] |
| Mechanism CSS | <30% value overlap | >60% value overlap | [X% overlap] |
| Side-by-Side | Closer to Variant B | Closer to OD-004 | [Which closer] |
| Structural Score | 0-6 points | 10-16 points | [X/16 points] |

**Verdict:**
- **4-5 novel signals → PASS (grammar fluency confirmed)**
- **4-5 derivative signals → FAIL (convergence, revise pipeline)**
- **Mixed (2-3 each) → BUILD SECOND PAGE on different content, retest**

**Deliverable:** `grammar-vs-derivative-report.md` with all 5 test results + synthesis verdict.
```

**RISK:** High (new mode, untested). MITIGATION: This is for RESEARCH/VALIDATION only, not production builds. Used ONLY for Middle-tier experiment.

---

### M11: Add Per-Tier Audit Scope

**WHY NEEDED:**
- **Session:** I-04 (tier distinction) reveals audit depth should match tier depth
- **Research:** No direct research, but logical extension
- **Evidence:** Auditing Floor page for metaphor logic = wasted effort. Auditing Flagship without multi-pattern check = gap.

**CURRENT TEXT:** Same 48 questions for all pages regardless of tier

**EXACT LOCATION:** Mode selection (lines 331-401)

**MODIFY MODE DESCRIPTIONS:**

**Before:**
```markdown
### Mode 3: Standard (30 minutes, TeamCreate, 4 agents)
**When:** Regular page review. Pre-ship quality gate.
**What:** PA-01–PA-45 at 1440px and 768px.
```

**After:**
```markdown
### Mode 3: Standard (30 minutes, TeamCreate, 4 agents)
**When:** Regular page review. Pre-ship quality gate.
**What:** PA-01–PA-45 at 1440px and 768px + **TIER-SPECIFIC questions**

**Tier-specific scope:**
- **Floor:** PA-01-05 only (soul check). Skip PA-06+ (no pattern/metaphor to audit).
- **Middle:** PA-01-20 + PA-SEMANTIC-01, 02 (pattern logic check)
- **Ceiling:** PA-01-45 + PA-SEMANTIC-03, 04 (metaphor logic check)
- **Flagship:** PA-01-48 + PA-SEMANTIC-01 through 08 + multi-pattern composition check

**Multi-pattern composition check (Flagship only):**
- [ ] 3+ distinct patterns identified (not just 3 sections with same pattern)
- [ ] Typed transitions present (BREATHING/SMOOTH/BRIDGE/ABRUPT)
- [ ] Transition CSS implemented (not just spacing)
- [ ] Each pattern serves different content needs (not decorative)
```

**RISK:** Low. This is efficiency (don't audit what doesn't exist) + accuracy (check what should exist).

---

## INTERACTION EFFECTS ANALYSIS

**Critical question:** Do these 11 modifications create compound rigidity when applied together?

### Safe Combinations (Enabling + Enabling)

**M2 (Fractal Gate) + M6 (Semantic Justification):**
- Fractal ensures multi-scale coherence (VERTICAL consistency)
- Semantic justification ensures value grounding (HORIZONTAL consistency)
- Together: 2D quality assurance grid (scale × value)
- **Verdict:** SAFE — both enabling, orthogonal dimensions

**M1 (Per-Category Minimum) + M7 (Mechanism Combinations):**
- Per-category ensures breadth (5 categories covered)
- Combinations ensure depth (2-3 mechanisms per semantic)
- Together: Breadth × depth = full vocabulary engagement
- **Verdict:** SAFE — complementary, not compounding

**M5 (Tier Routing) + M8 (Individual→Combination Framing):**
- Tier routing prevents wrong pipeline (Middle skips metaphor)
- Framing explains WHY different tiers use different approaches
- Together: Structural clarity + conceptual clarity
- **Verdict:** SAFE — explanatory, not prescriptive

---

### Moderate-Risk Combinations

**M1 (Per-Category) + M2 (Fractal) + M6 (Semantic):**
- Per-category: Deploy 1+ mechanism per 5 categories
- Fractal: Show pattern at 2-4 scales (tier-dependent)
- Semantic: Justify every varying value
- Together: ~15-20 minutes of documentation overhead per build
- **Risk:** Builder experience becomes "fill out tables" instead of "build composition"
- **Mitigation:** M1 and M6 are TIER-GATED (Floor exempt, Middle lighter, Ceiling heavier). Fractal is scope-calibrated.
- **Verdict:** MODERATE — acceptable overhead for Ceiling+, but watch for checklist factory signs

**M7 (Combinations) + M8 (Framing):**
- M7 prescribes proven combinations (Hierarchy Triad, Depth Triple, etc.)
- M8 explains when to use combinations (Ceiling tier)
- Together: Risk of "all Ceiling pages use same 6 combinations"
- **Risk:** Combination-level template convergence (session-insights/04-tier-architecture.md Section 5)
- **Mitigation:** Add customization requirement (M19 proposed but NOT included in this plan — recommend for NEXT iteration after Middle-tier experiment)
- **Verdict:** MODERATE — convergence risk is REAL but DEFERRED until Middle experiment validates the approach

---

### Dangerous Combinations (REJECTED)

**M1 (Mechanism Count) + Mod 4 (Technique Count Metric):**
- M1: "Deploy 1+ per category" (natural landing 5-10)
- Mod 4 (REJECTED): "Report X/18 mechanisms deployed"
- Together: Builder optimizes for NUMBER (8 mechanisms better than 6) instead of FIT
- **Risk:** Goodhart's Law — metric becomes target
- **Verdict:** DANGEROUS — this is why Mod 4 was REJECTED

**M2 (Fractal) + M3 (Container Width) + M6 (Semantic) + Mod 3 (Full Coherence Table):**
- 4 mandatory deliverables (scale table + width check + value justification + coherence table)
- Together: ~25-30 minutes documentation overhead
- **Risk:** Builders spend more time documenting than building
- **Verdict:** DANGEROUS — this is why Mod 3 was MODIFIED to 3-transition minimum instead of full table

---

### Overall Interaction Assessment

**Adopted modifications (11 total):**
- **7 are enabling** (M2, M3, M4, M5, M6, M8, M9)
- **3 are transparency** (M1, M7, M11)
- **1 is research-only** (M10)

**Compound effect:**
- **Enabling + enabling = strongly enabling** (M2+M6, M5+M8)
- **Transparency + enabling = moderate overhead** (M1+M2+M6)
- **Prescriptive combinations deferred** (M7 convergence risk acknowledged, M19 recommended for next iteration)

**Checklist factory risk:** MODERATE at Ceiling tier (3 mandatory deliverables), LOW at Middle tier (2 deliverables), NONE at Floor tier (exempt).

**SAFE to proceed with all 11 modifications.** Monitor for checklist factory signs after first 5-10 Ceiling builds.

---

## IMPLEMENTATION SEQUENCE

**Critical principle:** Implement in 3 waves to AVOID overwhelming builders and to TEST each wave before proceeding.

### Wave 1: Core Enabling Changes (Implement FIRST)

**Modifications:** M2 (Fractal), M3 (Container Width), M5 (Tier Routing), M8 (Framing)

**Why first:**
- M2: Enabling, proven LOW rigidity cost
- M3: Binary rule, prevents #1 Phase D failure mode
- M5: Structural (routes Middle away from metaphor)
- M8: Clarification (makes existing tier model understandable)

**Risk:** Low. All enabling or clarifying.

**Test after Wave 1:** Build 2-3 Middle-tier pages, verify:
- [ ] Tier routing works (Middle skips Phases 1-3)
- [ ] Fractal gate achieves 100% compliance (binary rule)
- [ ] Container width violations = 0 (binary rule)
- [ ] Framing helps builders understand tier distinction

**If Wave 1 fails:** Roll back M5 (tier routing) as highest-risk change. Keep M2, M3, M8.

---

### Wave 2: Vocabulary Expansion (Implement SECOND)

**Modifications:** M1 (Per-Category), M6 (Semantic Justification), M7 (Combinations)

**Why second:**
- M1: Replaces "sample 2-4" (highest-leverage change)
- M6: Adds semantic depth requirement
- M7: Adds combination guidance (Ceiling+)

**Risk:** Moderate. M1+M6 together add ~10-15 min documentation overhead.

**Test after Wave 2:** Build 3-5 Ceiling-tier pages, verify:
- [ ] Per-category minimum naturally produces 8-12 mechanisms (not padding to hit number)
- [ ] Semantic justification reveals arbitrary values (builders revise)
- [ ] Combination guidance helps (not prescribes)
- [ ] Documentation overhead acceptable (<20 min per build)

**If Wave 2 fails:**
- Roll back M7 (combinations) if convergence detected
- Simplify M6 (semantic justification) to spot-check 5 values instead of all
- Keep M1 (per-category minimum is the highest-leverage change)

---

### Wave 3: Audit Integration (Implement LAST)

**Modifications:** M4 (Domain Family Check), M9 (Semantic Audit), M10 (Grammar-vs-Derivative), M11 (Tier Scope)

**Why last:**
- M4: Strengthens existing gate (low risk)
- M9-M11: Audit-only (don't affect building)
- M10: Research mode (Middle-tier experiment validation)

**Risk:** Low. Audit changes don't affect builder workflow.

**Test after Wave 3:** Run Mode 5 (Grammar-vs-Derivative) on first Middle-tier experimental page, verify:
- [ ] 5-test protocol executable (agents can complete all tests)
- [ ] Synthesis framework produces clear verdict
- [ ] Results inform pipeline modifications

**If Wave 3 fails:**
- M10 is research-only (failure acceptable, revise protocol)
- M9, M11 are audit enhancements (failure means audit gaps remain, but builds still work)
- M4 is gate strengthening (failure means looser divergence check, acceptable)

---

## RISK ASSESSMENT

### Per-Modification Risk Levels

| ID | Modification | Risk | Why | Mitigation |
|----|-------------|------|-----|------------|
| M1 | Per-category minimum | **LOW** | Enabling, not prescriptive | Justification requirement prevents padding |
| M2 | Fractal gate | **LOW** | Proven enabling, scope-calibrated | Tier exemptions (Floor exempt, Middle 2 scales) |
| M3 | Container width | **NONE** | Binary rule, prevents known failure | Zero ambiguity, clear examples |
| M4 | Domain family check | **LOW** | Strengthens existing gate | Stricter but grounded (same-family convergence is real) |
| M5 | Tier routing | **MODERATE** | Major structural change (skips phases) | Test with 2-3 Middle builds, rollback if fails |
| M6 | Semantic justification | **MODERATE** | Adds documentation overhead (~10 min) | Tier-gated (Floor exempt, Middle lighter) |
| M7 | Combination guidance | **MODERATE-HIGH** | Prescriptive (proven combinations list) | Frame as vocabulary, not templates. Defer M19 (customization) to next iteration. |
| M8 | Individual→combination framing | **LOW** | Clarification, not prescription | Explanatory only |
| M9 | Semantic audit | **LOW** | Audit-only, doesn't affect building | Tier-gated audit scope |
| M10 | Grammar-vs-derivative mode | **MODERATE** | New untested mode | Research-only, not production |
| M11 | Tier audit scope | **LOW** | Efficiency + accuracy | Matches audit depth to tier depth |

---

### Compound Risk Assessment

**Highest-risk compound:** M1 + M2 + M6 (per-category + fractal + semantic justification)
- **Risk:** Checklist factory at Ceiling tier (3 mandatory deliverables)
- **Likelihood:** MODERATE (30-40% chance builders feel "filling tables" instead of "building")
- **Impact:** HIGH (reduces creative engagement, increases build time)
- **Mitigation:** Monitor first 5 Ceiling builds. If overhead >25 min, simplify M6 to spot-check.

**Second-highest compound:** M7 + M8 (combinations + framing)
- **Risk:** Combination-level convergence (all Ceiling pages use same 6 combinations)
- **Likelihood:** MODERATE-HIGH (60% chance if customization not required)
- **Impact:** MODERATE (family resemblance vs template convergence — needs validation)
- **Mitigation:** Defer M19 (customization mandate) to NEXT iteration, after Middle experiment validates approach.

**Acceptable risk:** M5 (tier routing) standalone
- **Risk:** Middle tier skips metaphor, produces derivative output
- **Likelihood:** UNKNOWN (untested hypothesis)
- **Impact:** HIGH (if Middle = derivative, entire tier model collapses)
- **Mitigation:** M10 (grammar-vs-derivative mode) TESTS this. Build Middle experiment, run Mode 5, revise if derivative.

---

### Rollback Plan

**If checklist factory detected (Wave 2 fails):**
1. Keep M1 (per-category minimum) — highest leverage
2. Simplify M6 (semantic justification) — spot-check 5 values instead of all
3. Remove M7 (combination guidance) — builders select independently
4. Keep M2 (fractal gate) — enabling, not prescriptive

**If Middle-tier convergence detected (M10 reveals derivative output):**
1. Keep M5 (tier routing) — structural separation is still valuable
2. Revise M1 (per-category minimum) — add divergence requirement at Middle tier
3. Add M19 (customization mandate) — require value/ratio customization
4. Keep M8 (framing) — explains individual vs combination

**If Ceiling combination convergence detected:**
1. Add M19 (customization mandate) immediately
2. Keep M7 (combination guidance) but strengthen anti-prescription warnings
3. Strengthen M4 (domain family check) to also check combination families

---

## CONCLUSION

**Summary:**
- **11 modifications proposed** (8 for tension-composition, 3 for perceptual-auditing)
- **7 enabling, 3 transparency, 1 research-only**
- **3-wave implementation** (enabling first, vocabulary second, audit last)
- **Moderate compound risk** (checklist factory at Ceiling tier, convergence risk at combination level)
- **Safe to proceed** with monitoring and rollback plan

**Highest-leverage changes:**
1. **M1 (per-category minimum)** — replaces "sample 2-4" (50%+ of richness gap)
2. **M3 (container width)** — prevents #1 Phase D failure mode
3. **M5 (tier routing)** — enables Middle tier (untested but high-potential)
4. **M2 (fractal gate)** — proven enabling, LOW rigidity cost

**Next steps:**
1. Apply Wave 1 modifications (M2, M3, M5, M8)
2. Build 2-3 Middle-tier experimental pages
3. Run M10 (grammar-vs-derivative mode) on first Middle page
4. If NOVEL → proceed to Wave 2
5. If DERIVATIVE → revise M1/M5, add M19

**Deferred to next iteration:**
- M19 (Combination Customization Mandate) — AFTER Middle experiment validates approach
- Full coherence table (Mod 3) — REJECTED in favor of 3-transition minimum
- Technique count metric (Mod 4) — REJECTED (Goodhart's Law)

---

**END COMPREHENSIVE SKILL ENRICHMENT PLAN**

**Status:** COMPLETE — ready for Wave 1 implementation + Middle-tier experimental build.
