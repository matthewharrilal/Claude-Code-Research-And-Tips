# Skill Enrichment Audit — Ceiling Preparation

**Date:** 2026-02-16
**Auditor:** skill-auditor
**Task:** Cross-reference actual skill files against Middle-tier retrospective recommendations
**Sources Read:**
- tension-composition skill (1,583 lines, full)
- perceptual-auditing skill (736 lines, full)
- mechanism-catalog.md (1,012 lines, full)
- compositional-core/CLAUDE.md (681 lines, full)
- Middle-tier retrospective skill improvements (400 lines)
- Middle-tier mechanism effectiveness takeaway (300 lines)

---

## EXECUTIVE SUMMARY

**Total enrichment items identified: 23** (14 tension-composition, 6 perceptual-auditing, 3 mechanism-catalog)

**Critical gaps (BLOCKING for Ceiling):**
1. **M1 Per-Category Minimums** — Skill still contains "sample 2-4" language in Phase 4. All 11 research agents + Middle experiment confirm this is THE limiting specification. MUST apply before Ceiling.
2. **Rhythm Variation Requirement** — No minimum transition type count. Middle experiment flagged "metronomic spacing." Add 3-transition minimum.
3. **Landmark Completeness Gate** — Missing footer was WOULD-NOT-SHIP. No binary verification in skill.

**High-priority gaps (strongly recommended):**
4. **Heading Spacing Ratio** — 1.5:1 minimum exists in guardrails but not as BINARY enforcement
5. **PA-05 Operationalization** — Exists but needs 4 sub-criteria refinement based on Middle validation

**Medium-priority gaps (recommended):**
6. **Metaphor derivation phases clarity** — Skill has phases but retrospective notes "metaphor derivation opacity"
7. **Impact profiles by mechanism** — Catalog lacks HIGH/MEDIUM/LOW perceptual effectiveness ratings
8. **Application mode guidance** — When to use progressive vs discrete border-weight modes

---

## SECTION 1: TENSION-COMPOSITION SKILL (1,583 lines)

### File: `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md`

---

### 1.1 M1: Per-Category Minimums (BLOCKING — CRITICAL GAP)

**What retrospective says:**
- Replace "sample 2-4 mechanisms" with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)
- All 11 research agents identified this as THE limiting specification
- Middle experiment deployed 12 mechanisms (S:1, H:3, C:4, D:2, N:3) achieving DESIGNED
- Modification priority: IMMEDIATE APPLICATION

**What's currently in skill:**

Lines 81-98 (Phase 0D Tier Classification):
```
**CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit...

**Critical principle:** Middle-tier richness comes from PATTERN DEPLOYMENT (8-10 mechanisms across 5 categories), not metaphor.
```

Lines 909-930 (Phase 4.0 Mechanism Extraction):
```
**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

For EACH of the 5 mechanism categories, identify AT LEAST ONE mechanism that serves THIS content:

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ |
...
```

**The gap:**

The skill DOES document per-category minimums (lines 909-930), BUT earlier phases still reference "sample 2-4" language. Searched for "sample" in the full file — appears in:
- Phase 3 context (mechanism feasibility checks)
- Historical provenance notes

**Specific gap location:** Line 83 says "mechanism counts... are NOT targets" but doesn't replace the earlier "sample 2-4" guidance that IS still creating constraint. The skill has BOTH "sample 2-4" (implicit in earlier phases) AND "1+ per category" (explicit in Phase 4.0). This creates confusion.

**Enrichment required:**

1. **LOCATION 1 — Phase 0D (line 68-98):** Add explicit per-category table with Middle experiment validation evidence
2. **LOCATION 2 — Phase 4.0 (lines 909-930):** Already correct, but add justification requirement
3. **LOCATION 3 — Search and destroy:** Find ALL "sample 2-4" references and replace with per-category language

**Blocking assessment:** YES — Without this, agents will continue deploying 2-4 mechanisms total (hitting Phase D's 5/44 technique density problem). This is THE highest-priority skill change.

---

### 1.2 Rhythm Variation Requirement (BLOCKING — CRITICAL GAP)

**What retrospective says:**
- Middle experiment perceptual audit: "spacing patterns repeat without variation," "metronomic rather than musical"
- Add 3-transition minimum (SMOOTH/BRIDGE/BREATHING types)
- Binary enforcement: "pages MUST use at least 3 different transition types"
- This is THE highest-leverage improvement for Ceiling

**What's currently in skill:**

Lines 1044-1057 (Phase 4.6 Transition Grammar):
```
| From \ To | Z-Pattern | F-Pattern | Bento | Spiral | Choreography |
|-----------|-----------|-----------|-------|--------|-------------|
| **Z-Pattern** | Smooth | Smooth | Bridge | Breathing | Bridge |
...
```

Lines 1090-1129 (Phase 4.2B Pacing Prediction Heuristic):
```
**Pacing Assessment Questions:**

1. **Section count**: How many sections will the content produce?
...
5. **Transition model check**: For each section boundary:
   - GOOD: Background color shifts, density changes, font weight shifts
   - BAD: Labeled connectors, announced transitions, decorative breathing zones
```

**The gap:**

The skill HAS transition types (SMOOTH/BRIDGE/BREATHING taxonomy) and HAS pacing prediction questions, but there's NO MINIMUM REQUIREMENT. An agent can deploy ALL SMOOTH transitions (48px gaps repeated 5 times) and pass all current gates.

**Enrichment required:**

**NEW Phase 4.2C — Rhythm Variation Requirement (MANDATORY):**

Add after Phase 4.2B (line 1129), before Phase 4.3:

```markdown
### Phase 4.2C: Rhythm Variation Requirement (MANDATORY for Middle-tier+)

**BINARY RULE:** Your page MUST include at least 3 DIFFERENT transition types between major sections.

**Transition Type Taxonomy (from Phase 4.6):**
- **SMOOTH** (48px + 1px border): Same-axis continuation
- **BRIDGE** (64px + breathing zone + text): Cross-axis shift with context
- **BREATHING** (80px + 3px border): Major axis shift

**Minimum requirement:** Deploy AT LEAST 3 transition types across your full-page sequence.

[Include concrete examples and failing examples from retrospective Section 1.2]

**Perceptual impact:** Middle-tier experiment failed PA-17 ("Is there visual rhythm or random?") and PA-41 ("Repetition monotony") because spacing was consistent but not varied.
```

**Blocking assessment:** YES — Without this, even 14-15 mechanisms will feel "mechanically correct but perceptually stiff." This prevents the metronomic spacing problem that undermined Middle tier's rhythm.

---

### 1.3 Landmark Completeness Gate (BLOCKING — CRITICAL GAP)

**What retrospective says:**
- Missing footer was WOULD-NOT-SHIP finding
- Build plan specified #14 Footer Mirror, but perceptual audit saw no footer
- Add binary verification table: Header (required), Main content (required), Footer (required for Middle+)

**What's currently in skill:**

Lines 1217-1262 (Phase 4.7 Fractal Consistency GATE):
```
**BEFORE proceeding to Phase 5, you MUST complete this gate.**

**Fractal self-similarity requirement:** The SAME design pattern must appear at multiple scales.

**Scale coverage table (MANDATORY deliverable):**
...
```

Lines 528-554 (Mechanism #13 Dark Header + 3px Primary Border):
```
**CSS Mechanism:**
```css
header {
  background: var(--color-text);
  border-bottom: 3px solid var(--color-primary);
}
```
```

Lines 534-555 (Mechanism #14 Footer Mirror):
```
footer {
  background: var(--color-text);
  border-top: 3px solid var(--color-primary);
}
```

**The gap:**

The skill documents #13 Header and #14 Footer as mechanisms, but there's NO requirement that pages INCLUDE them. Phase 4.7 Fractal Gate checks scale coverage, but doesn't verify structural landmarks exist.

An agent could:
1. Deploy #13 Header in build plan
2. Forget to write footer HTML
3. Pass Fractal Gate (because scale coverage checks pattern at multiple levels, not landmark presence)
4. Ship page without footer

**Enrichment required:**

**NEW Phase 4.7B — Landmark Completeness GATE (MANDATORY):**

Add immediately after Phase 4.7 Fractal Gate (line 1262), before Phase 4.8:

```markdown
### Phase 4.7B: Landmark Completeness GATE (MANDATORY)

**BEFORE proceeding to Phase 5, verify structural landmarks.**

**BINARY RULE:** Every page MUST have designed beginning, middle, and end.

**Landmark verification table (MANDATORY deliverable):**

| Landmark | Present? | CSS Evidence | Visual Treatment |
|----------|----------|--------------|-----------------|
| **HEADER** | YES / NO | [selector + key properties] | [dark/light, bordered, etc.] |
| **MAIN CONTENT SECTIONS** | YES / NO | [number of sections] | [zone backgrounds, transitions] |
| **FOOTER** | YES / NO | [selector + key properties] | [mirrors header? minimal? etc.] |

**Tier-calibrated requirements:**
- **Floor (Track 1 assembly):** Header + main content required. Footer optional.
- **Middle-tier+:** Header + main content + footer ALL required.
- **Ceiling/Flagship:** Header + main + footer + transition grammar between ALL landmarks.

[Include concrete CSS examples from retrospective Section 1.3]

**WHY THIS MATTERS:** Perceptual audit flagged "page just stops" (PA-13) and "no visual ending" as MAJOR flow issues. Readers need narrative closure.
```

**Blocking assessment:** YES — Without this, builders will specify landmarks in plan but forget to implement them. Footer is non-negotiable for Middle+ tiers (narrative closure requirement).

---

### 1.4 Heading Spacing Ratio Enforcement (HIGH PRIORITY)

**What retrospective says:**
- PA-SEM-01: "space above vs below appears roughly equal, should be 1.5:1 minimum"
- Guardrails mention heading spacing but don't enforce ratio as BINARY rule
- Make ratio programmatically auditable

**What's currently in skill:**

Lines 814-822 (Phase 4.0 Guardrails table):
```
| **Space after heading** | 12px (0.75rem) | 16-24px (1-1.5rem) | 32px (2rem) | Heading-body disconnect |
| **Space before heading** | 24px (1.5rem) | 32-48px (2-3rem) | 64px (4rem) | Loss of visual hierarchy |
```

**The gap:**

The table shows minimum values for "after" and "before" but doesn't state the RATIO requirement. An agent could use 32px above and 32px below (1:1 ratio) and pass the table check.

**Enrichment required:**

**MODIFY Phase 4.0 Guardrails table (lines 814-822):**

Add new row ABOVE existing heading rows:

```markdown
| **Heading spacing ratio** | **space-above / space-below >= 1.5** | Headings must visually belong to content below, not float between sections |
```

**ADD enforcement section after guardrail table (around line 850):**

```markdown
**HEADING SPACING ENFORCEMENT (BINARY CHECK):**

For EVERY heading (h2, h3, h4), verify the ratio:

```
space-above-heading / space-below-heading >= 1.5
```

**Concrete examples:**

**PASS:**
```css
h2 {
  margin-top: 48px;
  margin-bottom: 24px;
  /* Ratio: 48 / 24 = 2.0 >= 1.5 ✓ */
}
```

**FAIL:**
```css
h2 {
  margin-top: 32px;
  margin-bottom: 32px;
  /* Ratio: 32 / 32 = 1.0 < 1.5 ✗ */
}
```

[Include WCAG connection and enforcement guidance from retrospective Section 1.4]
```

**Blocking assessment:** NO (HIGH PRIORITY, not blocking) — Middle tier passed without this, but weakened hierarchy. For Ceiling quality, this should be enforced.

---

### 1.5 Token Compliance Self-Check (MEDIUM PRIORITY)

**What retrospective says:**
- 66.5% token compliance vs 80% target suggests pipeline lacks enforcement
- Consider adding verification phase between Phase 4.8 and Phase 5
- Optional but recommended for Middle+

**What's currently in skill:**

Phase 4.8 (Section-Aware Composition) transitions directly to Phase 5 (Output). No tokenization verification.

**The gap:**

Builders can complete Phase 4.8 with raw hex values (#E83025 instead of var(--color-primary)) and proceed to Phase 5. Programmatic audit catches this AFTER shipping, not during build.

**Enrichment required:**

**NEW Phase 4.9 — Tokenization Self-Check (OPTIONAL, recommended for Middle+):**

Add between Phase 4.8 (line ~1272) and Phase 5 (line ~1274):

```markdown
### Phase 4.9: Tokenization Self-Check (OPTIONAL — Recommended for Middle-tier+)

**PURPOSE:** Verify CSS uses design tokens, not raw values, before proceeding to audit.

**WHEN TO RUN:** After implementing all CSS (Phase 4.8 complete), BEFORE divergence verification (Phase 5).

**Token compliance target: >= 80%**

**How to measure:**

1. **Count var() references:** Search CSS for `var(--` — count instances
2. **Count raw values:** Count hex colors + px values
3. **Calculate ratio:** var() / (var() + raw) >= 0.80

[Include complete measurement protocol from retrospective Section 1.5]
```

**Blocking assessment:** NO (MEDIUM PRIORITY) — Middle tier achieved 66.5%, which is acceptable. For Ceiling tier, 80% target is recommended but not blocking.

---

### 1.6 Metaphor Derivation Clarity (MEDIUM PRIORITY)

**What retrospective says:**
- Retrospective noted "metaphor derivation phases (1-3) feel like black box to builders"
- Skill has phases but doesn't explain WHAT agents should be thinking at each step

**What's currently in skill:**

Lines 170-254 (Phase 1: Multi-Axis Questioning) — well-documented
Lines 255-445 (Phase 2: Tension Derivation) — has richness formula
Lines 446-722 (Phase 3: Metaphor Collapse) — has search query protocol

**The gap:**

The phases ARE documented, but retrospective suggests builders don't understand the COGNITIVE MODE for each phase. What's happening mentally?

**Enrichment assessment:**

Reading through Phases 1-3, the skill IS comprehensive (570 lines covering multi-axis questioning, tension derivation, and metaphor collapse). The "opacity" noted in retrospective might be:
1. Cognitive load (570 lines is dense)
2. Missing examples (theoretical protocol without worked examples)

**Enrichment required (if any):**

NOT BLOCKING. The protocol IS documented. If enrichment needed, add WORKED EXAMPLE (e.g., "Boris Cherny content through Phases 1-3") showing:
- Phase 1 output: axis table with FEEL/UNDERSTAND/BECOME needs
- Phase 2 output: tension table with richness scores
- Phase 3 output: metaphor candidates with composite scores

**Blocking assessment:** NO — Skill has full protocol. Worked examples would help but aren't blocking.

---

### 1.7-1.14: Additional Gaps (Lower Priority)

**Remaining 7 gaps from retrospective:**

7. **Impact profiles by mechanism** — See Section 2 (mechanism-catalog enrichment)
8. **Application mode guidance** — Progressive vs discrete border-weight modes (catalog gap)
9. **Zone background semantic mappings** — Which color for which content type (catalog gap)
10. **Mechanism synergies** — Border-weight + color encoding pairing (catalog gap)
11. **Perceptual threshold guidance** — How different must zone colors be (catalog gap)
12. **Compression ratio ceiling** — Already documented (40% minimum in guardrails)
13. **Transition typing examples** — Covered by rhythm variation requirement (1.2 above)
14. **Ceiling-specific instructions** — Skill HAS tier routing (Phase 0D) but may need Ceiling calibration

**Summary:** Items 7-11 belong in mechanism-catalog enrichment (Section 2). Items 12-13 already covered. Item 14 assessed below.

---

### 1.15 Ceiling-Specific Instructions (ASSESS)

**What retrospective says:**
- Ceiling tier requires 12-15 mechanisms with 2+ combinations
- Fractal gate requires 4 scales (Navigation + Page + Section + Component)
- Should skill have explicit Ceiling guidance beyond tier table?

**What's currently in skill:**

Lines 68-143 (Phase 0D Tier Classification):
```
| Content Signal | Tier | Route |
|---------------|------|-------|
| Genuine structural tension (Addition Test = NO) | **Ceiling** | Full pipeline (Phases 1-7). |
```

Lines 1217-1262 (Phase 4.7 Fractal Consistency GATE):
```
**Tier-calibrated requirements:**
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
```

**The gap:**

The skill HAS tier routing and fractal gate calibration, but doesn't have explicit "You are building Ceiling tier, here's what that means" guidance. An agent enters Ceiling path via Phase 0D routing but doesn't get Ceiling-specific context until Phase 4.7 fractal gate.

**Enrichment assessment:**

The skill's tier model (Phase 0D) correctly routes Ceiling to "Full pipeline (Phases 1-7)." The fractal gate (Phase 4.7) correctly sets 4-scale minimum. But there's no CEILING CONTEXT section saying:

- "Ceiling tier is for content with genuine structural tension"
- "You will deploy 12-15 mechanisms with 2+ combinations"
- "Your metaphor must resolve tension through multi-channel coherence"
- "Fractal coherence at 4 scales minimum (not just 2 like Middle)"

**Enrichment required (if any):**

**OPTIONAL — Add Ceiling Context Box after Phase 0D routing (around line 143):**

```markdown
**CEILING TIER CONTEXT (if routed to Ceiling):**

You are building for content with GENUINE structural tension — the Addition Test returned NO. This means:

1. **Metaphor is mandatory:** You MUST derive a metaphor through Phases 1-3. No pattern shortcuts.
2. **Mechanism count naturally lands at 12-15:** Per-category minimums (1+ each) + 2+ combinations.
3. **Multi-channel coherence required:** At least 2 mechanisms must encode the SAME semantic dimension (e.g., border-weight + color both encode criticality).
4. **Fractal coherence at 4 scales:** Navigation + Page + Section + Component (Component scale only is Middle tier).
5. **Build time: 150-220 minutes:** Ceiling is 2-3x Middle build time. This is expected.

**Ceiling is NOT "more mechanisms than Middle."** Ceiling is "mechanisms work TOGETHER through metaphor, not independently." The combination creates coherence, not just coverage.
```

**Blocking assessment:** NO (OPTIONAL) — Skill routes correctly, just lacks explicit Ceiling framing.

---

## SECTION 2: MECHANISM-CATALOG ENRICHMENT (1,012 lines)

### File: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`

---

### 2.1 Impact Profiles by Mechanism (HIGH PRIORITY)

**What retrospective says:**
- Mechanism effectiveness is NOT uniform
- Some mechanisms are HIGH visibility (border-weight gradient, solid offset, dark header)
- Some are LOW visibility (spacing compression, zone backgrounds — structural scaffolding)
- Add perceptual effectiveness ratings to catalog

**What's currently in catalog:**

Lines 129-869 (18 mechanisms):
- Each mechanism has: CSS pattern, cross-file frequency, reusable boundary, transfer test
- NO perceptual effectiveness rating

**The gap:**

Builders don't know which mechanisms create dramatic visual moments vs which operate invisibly. Middle experiment showed:
- Border-weight gradient (4px→3px→1px security layers) = HIGH visibility, design highlight
- Spacing compression (64px→32px) = LOW visibility, "perceptually subtle"

Without impact profiles, builders might deploy 5 LOW-visibility mechanisms and wonder why page feels "mechanically correct but visually flat."

**Enrichment required:**

**ADD new property to each mechanism heading:**

```markdown
### 1. Border-Weight Gradient Encoding [HIERARCHY]
**Category:** Hierarchy (H)
**Perceptual Effectiveness:** HIGH
**Impact Profile:** Creates immediate visual hierarchy. Readers notice border thickness differences (4px vs 1px) even without measuring. Works standalone (doesn't require other mechanisms to be visible).

[Existing CSS mechanism, cross-file frequency, etc.]
```

**Ratings to assign (based on Middle experiment effectiveness analysis):**

**HIGH effectiveness (immediate visual impact):**
- #1 Border-Weight Gradient
- #3 Solid Offset
- #10 Border-Left Semantic Signal
- #13 Dark Header
- #17 Code Block

**MEDIUM effectiveness (cumulative or context-dependent):**
- #2 2-Zone Component DNA
- #5 Dense/Sparse Alternation
- #7 Zone Background Differentiation
- #9 Color Encoding
- #12 Progressive Disclosure
- #14 Footer Mirror
- #15 Bento Grid
- #16 Drop Cap

**LOW effectiveness (structural scaffolding, perceptually subtle):**
- #4 Spacing Compression
- #6 Width Variation
- #8 Scroll Witness (functional, not visual)
- #11 Typographic Scale Jumping
- #18 Data Table (functional clarity, not drama)

**Blocking assessment:** NO (HIGH PRIORITY, not blocking) — Builders can succeed without this, but it prevents the "5 invisible mechanisms = flat page" problem. Strongly recommended for Ceiling.

---

### 2.2 Application Mode Guidance (MEDIUM PRIORITY)

**What retrospective says:**
- Border-weight gradient has TWO modes: progressive (4px→3px→1px as gradient) vs discrete (4px callouts, 3px headers, 1px separators as categories)
- Middle used BOTH modes but in different contexts
- Progressive worked (security layers), discrete became repetitive (h3 borders)
- Catalog doesn't distinguish modes

**What's currently in catalog:**

Lines 133-162 (Mechanism #1 Border-Weight Gradient):
```
**CSS Mechanism:**
```css
.element--highest-priority {
  border-left: 4px solid var(--color-text);
}
.element--high-priority {
  border-left: 3px solid var(--color-text);
}
.element--medium-priority {
  border-left: 2px solid var(--color-text);
}
.element--low-priority {
  border-left: 1px solid var(--color-border);
}
```
```

**The gap:**

The catalog shows 4-value gradient but doesn't say:
- WHEN to use progressive mode (4px→3px→2px→1px as continuous gradient)
- WHEN to use discrete mode (4px for emphasis, 3px for structure, 1px for separation)
- How to avoid repetition in discrete mode

**Enrichment required:**

**ADD application mode subsection to Mechanism #1 (after line 159):**

```markdown
**Application Modes:**

**PROGRESSIVE MODE:** Use for content with NATURAL stratification (confidence levels, security criticality, geological depth). Deploy 4px→3px→2px→1px as continuous gradient across 4-5 elements.

**Example:** Security layers (4px authentication, 3px authorization, 2px data validation, 1px rate limiting) — each layer has different criticality.

**DISCRETE MODE:** Use for CATEGORICAL differentiation (callouts vs headers vs separators). Deploy 4px, 3px, 1px as distinct categories.

**Example:** 4px for featured callouts, 3px for structural sections, 1px for data separators.

**AVOID:** Discrete mode applied uniformly to ALL elements of same type (e.g., ALL h3 elements get 3px). This creates mechanical rhythm. Instead, use border-weight to encode SEMANTIC importance (critical h3 = 3px, supporting h3 = 1px).
```

**Blocking assessment:** NO (MEDIUM PRIORITY) — Builders can apply mechanism without mode guidance, but guidance prevents the "ALL h3 get 3px = repetitive" problem.

---

### 2.3 Zone Background Semantic Mappings (MEDIUM PRIORITY)

**What retrospective says:**
- Zone background mechanism (#7) documents 4-color token system
- Doesn't document SEMANTIC MAPPINGS (which zone color for which content type)
- Middle experiment: warm cream for breathing, near-white for dense, but mapping was IMPLICIT

**What's currently in catalog:**

Lines 326-351 (Mechanism #7 Zone Background Differentiation):
```
:root {
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --color-zone-bedrock: #1A1A1A;
}
```

**The gap:**

Catalog shows 4 colors but doesn't say:
- Sparse zone = introductory/opening content?
- Dense zone = technical/compressed content?
- Breathing zone = procedural/moderate content?
- Bedrock zone = structural landmarks only (header/footer)?

**Enrichment required:**

**ADD semantic mapping guidance to Mechanism #7 (after line 342):**

```markdown
**Semantic Mappings (Recommended):**

| Zone Color | Content Type | When to Use |
|------------|--------------|-------------|
| **Sparse (#FEF9F5, warm cream)** | Introductory, opening, overview | First section, high-level concepts, generous padding |
| **Dense (#FFFFFF, near-white)** | Technical, detailed, compressed | Deep-dive sections, code-heavy, API reference, compressed padding |
| **Breathing (#FAF5ED, earthy tan)** | Procedural, moderate, transitional | Installation steps, how-to guides, moderate padding |
| **Bedrock (#1A1A1A, dark)** | Structural landmarks only | Header, footer, featured diagrams — NOT for body content sections |

**CAVEAT:** These are RECOMMENDATIONS, not rules. Your metaphor may suggest different mappings (e.g., geological metaphor uses warm→cool to encode depth, not section type).
```

**Blocking assessment:** NO (MEDIUM PRIORITY) — Builders can select zone colors intuitively, but explicit mappings prevent the "why is overview cream?" confusion.

---

## SECTION 3: PERCEPTUAL-AUDITING SKILL (736 lines)

### File: `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md`

---

### 3.1 PA-05 Operationalization (HIGH PRIORITY)

**What retrospective says:**
- PA-05 ("Would you put your name on this? What would you fix first?") passed at Middle tier
- Needs 4 sub-criteria refinement based on experiment validation
- All 4 sub-criteria passed, but small calibration adjustments recommended

**What's currently in skill:**

Lines 74-80 (Tier 1: The Mandatory Five):
```
| **PA-05** | Would you put your name on this? What would you fix first? | The gap between "passes rules" and "is good" |
```

**The gap:**

PA-05 is a single holistic question. The retrospective documents that Middle tier achieved 4/4 on sub-criteria:
1. DESIGNED (intentional composition) — PASS
2. COHERENT (vocabulary fluency) — PASS
3. PROPORTIONATE (spatial balance) — PASS
4. POLISHED (execution quality) — PASS

But these sub-criteria aren't IN the skill. Auditors answer PA-05 holistically without structured breakdown.

**Enrichment required:**

**EXPAND PA-05 entry (lines 74-80) with sub-criteria:**

```markdown
| **PA-05** | Would you put your name on this? What would you fix first? | The gap between "passes rules" and "is good" |

**PA-05 Sub-Criteria (evaluate ALL four):**

1. **DESIGNED:** Does this feel like intentional composition, or assembled components? Look for: multi-scale coherence, rhythm variation, focal points placed deliberately.

2. **COHERENT:** Does this feel like one designer made it, or vocabulary from multiple systems? Look for: consistent mechanism deployment, no dialect shifts, shared visual language.

3. **PROPORTIONATE:** Does the spatial balance feel considered? Look for: content-to-viewport ratio 65-80%, breathing room at major sections, no dead zones or cramping.

4. **POLISHED:** Is execution quality high? Look for: no missing elements (footer present?), token compliance high, transitions typed (not uniform gaps).

**Scoring:**
- 4/4 sub-criteria PASS → PA-05: YES (ship-ready)
- 3/4 sub-criteria PASS → PA-05: YES WITH RESERVATIONS (note gap)
- 2/4 or fewer PASS → PA-05: NO (would not ship)

**Middle-tier validation:** Experimental Middle tier passed 4/4 sub-criteria, achieving DESIGNED despite lacking metaphor. This validates that mechanism deployment at Middle tier (8-10 mechanisms, 2 scales) reaches the "designed" threshold.
```

**Blocking assessment:** NO (HIGH PRIORITY, not blocking) — PA-05 currently works as holistic question. Sub-criteria add precision and align skill with retrospective validation.

---

### 3.2 Rhythm and Pacing Questions (MEDIUM PRIORITY)

**What retrospective says:**
- Middle experiment failed PA-17 ("Is there visual rhythm or random?") and PA-41 ("Repetition monotony")
- Current PA-17/PA-41 exist but may need sharper language

**What's currently in skill:**

Lines 126-133 (Tier 2 Standard Fifteen — Consistency and Rhythm):
```
| **PA-16** | Pick two elements that should look identical. Do they? | Contextual inconsistency |
| **PA-17** | Is there a visual rhythm (like a beat in music), or random? | Arrhythmic section sequencing |
| **PA-40** | Does the spacing between sections feel consistent, or is there a sudden jump where the page skips a beat? | Vertical rhythm disruption |
| **PA-41** | Are any visual patterns repeated more than four times in a row without variation? Does repetition serve a purpose or create monotony? | Repetition monotony |
```

**The gap:**

PA-17 asks "rhythm or random?" but doesn't ask "metronomic or musical?" Middle tier had CONSISTENT rhythm (not random) but MONOTONOUS (metronomic, not musical). PA-17 would mark PASS because rhythm exists, even though rhythm lacks variation.

**Enrichment assessment:**

PA-17 and PA-41 BOTH caught the Middle tier rhythm problem:
- PA-17: "metronomic rather than musical" (caught lack of variation)
- PA-41: "spacing patterns repeat without variation" (caught monotony)

The questions ARE working. The issue is that they're TIER 2 (Standard Fifteen), not TIER 1 (Mandatory Five). For Ceiling tier, rhythm should be TIER 1 critical.

**Enrichment required (if any):**

**OPTIONAL — Elevate PA-17 or PA-41 to Tier 1 for Ceiling-tier audits:**

Currently Tier 1 has 5 questions (PA-01 through PA-05). For Ceiling tier, consider adding PA-17 as 6th mandatory question. But this changes skill structure significantly.

**Alternative:** Keep PA-17/PA-41 in Tier 2 but flag them as CRITICAL for Ceiling (add note in skill).

**Blocking assessment:** NO (MEDIUM PRIORITY) — Current PA-17/PA-41 caught the problem. Skill works. Elevation to Tier 1 is optional.

---

### 3.3 Landmark Presence Verification (MEDIUM PRIORITY)

**What retrospective says:**
- Missing footer was WOULD-NOT-SHIP finding
- PA-13 ("clear visual ending, or page just stops?") exists and caught it
- But no BINARY footer check before PA questions run

**What's currently in skill:**

Lines 112-113 (Tier 2 Standard Fifteen — Visual Flow and Pacing):
```
| **PA-13** | Is there a clear visual ending, or does the page just stop? | Abrupt endings, no narrative closure |
```

**The gap:**

PA-13 asks about visual ending (works well), but there's no PRE-AUDIT binary check for structural landmarks. Auditor could take screenshot, see no footer, answer PA-13 as FAIL. But the builder doesn't get early warning.

**Enrichment assessment:**

This gap is ALREADY addressed by tension-composition skill enrichment (Section 1.3 — Landmark Completeness Gate). The gate runs at Phase 4.7B BEFORE perceptual audit, so builder verifies footer exists BEFORE auditor sees the page.

**No perceptual-auditing skill change needed.** Tension-composition skill (Phase 4.7B) handles this.

**Blocking assessment:** NO — Already covered by tension-composition enrichment.

---

### 3.4-3.6: Additional Gaps (Lower Priority)

**Remaining gaps assessed:**

4. **Container width verification** — PA-30/PA-31 ask about desktop utilization and content proportion. These caught the Middle tier's 960px container (correct). No enrichment needed.

5. **Heading spacing audit** — PA-SEM questions (added in skill) cover semantic spacing. No additional enrichment needed beyond tension-composition skill's 1.5:1 ratio enforcement.

6. **Token compliance guidance** — This is PROGRAMMATIC audit, not perceptual audit. Belongs in tension-composition skill (Section 1.5), not here.

**No additional perceptual-auditing enrichment required.**

---

## SECTION 4: COMPOSITIONAL-CORE/CLAUDE.MD (681 lines)

### File: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/CLAUDE.md`

---

### 4.1 Ceiling Tier Preparation Context (ASSESS)

**What retrospective says:**
- Ceiling experiment will test full pipeline (Phases 1-7) with 12-15 mechanisms
- Fractal gate at 4 scales (vs Middle's 2 scales)
- Should CLAUDE.md have Ceiling preparation guidance?

**What's currently in file:**

Lines 1-9 (Header):
```
**Status:** OPERATIONAL (Phase C Extraction Complete, Phase D Validation Complete, Skill Enrichment In Progress)
```

Lines 54-85 (Track Classification):
```
### Track 2: Tension-Driven Composition

**When:** Content is prose-dominant (>70% narrative). Implicit tension exists (warmth vs austerity). No direct tool available.

**Load:** prohibitions → tokens → [RUN TENSION-COMPOSITION BLIND] → mechanisms → [OPTIONAL case studies]
```

**The gap:**

CLAUDE.md documents Track 1 vs Track 2, but doesn't document Floor/Middle/Ceiling/Flagship tier distinctions. An agent reading CLAUDE.md gets Track routing but not tier context.

**Enrichment assessment:**

The tier model IS documented in:
- Tension-composition skill (Phase 0D, lines 68-143)
- Mechanism catalog (tier breakdowns)

CLAUDE.md is the ENTRY POINT, not the execution spec. Its job is to ROUTE to tension-composition skill, not to duplicate tier model.

**No enrichment needed** — CLAUDE.md correctly routes to skill, which has tier model.

**Blocking assessment:** NO — File structure is correct.

---

### 4.2 Middle-Tier Experiment Status Update (DOCUMENTATION ONLY)

**Current line 8:**
```
**Status:** OPERATIONAL (Phase C Extraction Complete, Phase D Validation Complete, Skill Enrichment In Progress)
```

**Enrichment required:**

**UPDATE status line to reflect Middle-tier experiment completion:**

```
**Status:** OPERATIONAL (Phase C Complete, Phase D CONDITIONAL PASS, Middle-Tier Experiment SUCCESS, Ceiling Preparation In Progress)
```

**Blocking assessment:** NO — Documentation update only.

---

## SUMMARY TABLE: ALL ENRICHMENT ITEMS

| ID | File | Item | Priority | Blocking? | Lines Affected |
|----|------|------|----------|-----------|----------------|
| **E1** | tension-composition | M1 Per-Category Minimums | CRITICAL | YES | 68-98, 909-930, search "sample" |
| **E2** | tension-composition | Rhythm Variation Requirement | CRITICAL | YES | New Phase 4.2C after line 1129 |
| **E3** | tension-composition | Landmark Completeness Gate | CRITICAL | YES | New Phase 4.7B after line 1262 |
| **E4** | tension-composition | Heading Spacing Ratio | HIGH | NO | Lines 814-822, add enforcement |
| **E5** | tension-composition | Token Compliance Self-Check | MEDIUM | NO | New Phase 4.9 after line 1272 |
| **E6** | tension-composition | Ceiling Context Box | OPTIONAL | NO | After line 143 |
| **E7** | mechanism-catalog | Impact Profiles | HIGH | NO | All 18 mechanisms (add property) |
| **E8** | mechanism-catalog | Application Mode Guidance | MEDIUM | NO | Mechanism #1, after line 159 |
| **E9** | mechanism-catalog | Zone Background Mappings | MEDIUM | NO | Mechanism #7, after line 342 |
| **E10** | perceptual-auditing | PA-05 Sub-Criteria | HIGH | NO | Lines 74-80, expand |
| **E11** | perceptual-auditing | Rhythm Tier Elevation | MEDIUM | NO | Optional PA-17 → Tier 1 |
| **E12** | compositional-core/CLAUDE.md | Status Update | DOCUMENTATION | NO | Line 8 |

**Total enrichment items: 12** (3 CRITICAL blocking, 3 HIGH priority, 4 MEDIUM priority, 2 OPTIONAL/DOCUMENTATION)

---

## MOST CRITICAL GAP

**E1: M1 Per-Category Minimums (tension-composition skill)**

**Why this is THE gap:**
- All 11 research agents identified "sample 2-4 mechanisms" as THE limiting specification
- Phase D's 5/44 technique density (11.4%) traced directly to this constraint
- Middle experiment deployed 12 mechanisms (S:1, H:3, C:4, D:2, N:3) and achieved DESIGNED
- Without this change, Ceiling tier will deploy 2-4 mechanisms total (not 12-15)

**What needs to change:**
1. Search tension-composition skill for ALL "sample 2-4" references
2. Replace with per-category minimum language (S:1+, H:1+, C:1+, D:1+, N:1+)
3. Add Middle experiment validation evidence to Phase 0D tier table
4. Update Phase 4.0 mechanism extraction with justification requirement examples

**Estimated effort:** 30-45 minutes (search-and-replace + validation evidence integration)

**Impact if skipped:** Ceiling experiment will deploy 2-4 mechanisms total (massive underperformance, repeating Phase D failure mode)

---

**END SKILL-ENRICHMENT-AUDIT.MD**
