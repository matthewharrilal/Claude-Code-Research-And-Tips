# Context Extraction: Complete Knowledge Base for Middle-Tier Build

**Date:** 2026-02-16
**Researcher:** context-researcher
**Purpose:** Exhaustive extraction of every contextual detail a builder needs to understand before executing the Middle-tier experiment
**Sources:** 19 files read across Tiers 2-4

---

## 1. MIDDLE-TIER DEFINITION: What "8-10 Mechanisms, 350-500 CSS Lines, 70-100 Min" Actually Means

### 1.1 The Numbers and Where They Come From

These numbers are NOT invented targets. They are BACKWARD-ENGINEERED from existing pages:

| Source Page | Mechanisms | CSS Lines | Build Time | Category Coverage |
|------------|-----------|-----------|------------|-------------------|
| Variant B (Phase D best) | 7 | ~694 HTML (CSS inline) | 30-45 min | 5/5 (100%) |
| OD-004 (showcase) | ~12-15 | ~700-1000 | 150-220 min | 5/5 |
| CD-006 (crown jewel, 39/40) | ~16-18 | ~1000-1500 | 240-400 min | 5/5 |

Middle tier (8-10 mechanisms) represents a NATURAL LANDING ZONE: when a builder spends 70-100 minutes individually selecting mechanisms from all 5 categories, they naturally deploy 8-10. The count is a consequence of BREADTH, not a target to hit.

**Peak richness occurs at maximum content-mechanism fit, not maximum technique count.** A page with 6 perfectly-deployed mechanisms is richer than a page with 10 where 3 feel forced.

### 1.2 What Middle Adds Over Floor

Five specific additions transform a page from "formatted" to "designed":

1. **Layout techniques (grid + flex)** -- breaks block-stacking monotony
2. **Zone backgrounds (3-color system)** -- cream (#FEF9F5) / white (#FFFFFF) / breathing (#FAF5ED) creates visual sections
3. **Dense/sparse alternation** -- section padding varies (64px/48px/32px), creating intentional rhythm
4. **Dark header + 3px primary border** -- single most impactful visual upgrade, immediately signals "designed"
5. **Accessibility baseline** -- skip-link, focus-visible, prefers-reduced-motion

ALL of these are LOOKUP-BASED decisions, not creative ones. The builder matches content type to pattern, then deploys mechanisms.

### 1.3 What Middle Does NOT Include

- NO metaphor derivation (Phases 1-3 skipped entirely)
- NO metaphor-to-CSS value generation (values come from token scale, not metaphor logic)
- NO mechanism combinations (mechanisms serve different content needs independently)
- NO multi-pattern composition (single density pattern per page)
- NO creative judgment on which metaphor domain to use

### 1.4 Concrete CSS Profile

- 350-500 CSS lines
- 600-900 HTML lines
- 2-3 responsive breakpoints
- At least 1 grid and 1 flex layout
- 1-3 pseudo-elements
- 3-color zone system (sparse cream, dense white, breathing tan)
- Semantic spacing aliases (within/between/chapter)
- Accessibility triple (skip-link, focus-visible, prefers-reduced-motion)

### 1.5 Reproducibility

- 80-90% reproducibility (two agents given same content produce similar pages)
- What converges: structure, zone backgrounds, header/footer
- What diverges: pattern selection, rhythm intensity
- Quality band: 16-18/20

---

## 2. PHASE D LESSONS: What Worked, What Failed, What to Avoid

### 2.1 What Worked (Variant B: 18/19 Compliance, 4/5 Novelty)

- **Genuine metaphor derivation:** "Scientific calibration laboratory" was independently derived, not copied from case studies
- **Custom component vocabulary:** Instrument cards, cost meters, error analysis panels -- new types not in the library
- **Lab zone system:** 5 variants with progressive padding (64px/48px/32px) creating breathing rhythm
- **4-color zone system:** --bg-safety (#FEF9F5), --bg-clean-room (#FFFFFF), --bg-transition (#FAF5ED), --bg-data (#1A1A1A)
- **Border-weight gradient:** 4px/3px/1px encoding trust hierarchy (critical/verify/monitor)
- **100% token compliance:** All CSS values from the token scale
- **100% soul compliance:** border-radius: 0, box-shadow: none, correct palette

### 2.2 What Failed

1. **Container width violation (THE #1 failure mode):** 4/5 Phase D pages violated the 940-960px sweet spot. Variant B had 880px container (too narrow). Other variants went wider (1052px). This was the MOST COMMON failure across all 5 variants.

2. **"Always-load" protocol skip:** Track 1 builder skipped prohibitions.md and tokens.css, causing 5 critical identity violations (wrong fonts, wrong colors, rounded corners). This was an INSTANT FAIL.

3. **Prose-only content limited component testing:** Only 22-44% component coverage (vs 67% target) because the test content was pure prose with no code blocks, tables, or mixed elements.

4. **Mechanism ceiling for prose content:** Variant B hit a ceiling at 7 mechanisms because prose-only content doesn't naturally demand code blocks (#17), data tables (#18), or bento grids (#15).

5. **"Sample 2-4 mechanisms" instruction:** The skill told builders to sample 2-4, so they did. Variant B deployed 7 but under the "sample 2-4" framing, only actively selected ~5. All 11 research agents identified this as the single most limiting specification.

### 2.3 What to Avoid

- **Do NOT reduce container width below 940px for any reason.** Express narrowing through INTERNAL padding, not external width reduction.
- **Do NOT skip the always-load protocol.** Read prohibitions.md (353 lines) + tokens.css (174 lines) BEFORE any design work. 527 lines mandatory.
- **Do NOT use "sample 2-4 mechanisms."** Read the FULL catalog (18 mechanisms). Deploy 1+ per category.
- **Do NOT use prose-only content for the experiment.** Mixed content (prose + code + callouts + tables) exercises more mechanism categories.
- **Do NOT treat case studies as templates.** They are LITERATURE showing the language in use.

### 2.4 Variant B Mechanism Recount (Authoritative)

Variant B deployed **7 mechanisms across ALL 5 categories (100% category coverage)**:

| Category | Mechanisms Deployed | Count |
|----------|-------------------|-------|
| Spatial (S) | #5 Dense/Sparse Alternation | 1 |
| Hierarchy (H) | #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale | 3 |
| Component (C) | #2 2-Zone DNA, #10 Border-Left Signal | 2 |
| Depth/Emphasis (D) | #7 Zone Background Differentiation | 1 |
| Structure/Nav (N) | #18 Data Table | 1 |

**11 mechanisms NOT deployed:** #3 Solid Offset, #6 Width Variation, #8 Scroll Witness, #9 Color Encoding, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #15 Bento Grid, #16 Drop Cap, #17 Code Block

**Key insight:** HIGH compliance (18/19) does NOT equal HIGH technique saturation (7/18). The gap is technique DENSITY, not technique ABSENCE.

---

## 3. MODIFICATION RECOMMENDATIONS: What Was Adopted, Modified, or Rejected

### 3.1 Wave 1 (COMPLETE -- Applied 2026-02-15)

| Mod | Name | Verdict | What It Does |
|-----|------|---------|-------------|
| **M2** | Fractal Gate | ADOPT | Promoted 10-line check to 60-line GATE with scale coverage table. Floor=exempt, Middle=2 scales, Ceiling=4, Flagship=5 |
| **M3** | Container Width | ADOPT | Added NON-NEGOTIABLE 940-960px rule. Express narrowing through internal padding, not external width reduction |
| **M5** | Tier Routing | ADOPT | Added Step 0D: content classification + pipeline routing. Middle skips Phases 1-3, goes to Phase 4 with pattern selection |
| **M8** | Tier Framing | ADOPT | Added "individual/combination/multi-pattern" distinction to Phase 0 and Phase 4 |

Also applied: PRE-1 (category labels on mechanism catalog), DOC-1 through DOC-6 (documentation enrichments)

### 3.2 Wave 2 (PENDING -- After Middle Experiment)

| Mod | Name | Verdict | Status |
|-----|------|---------|--------|
| **M1** | Per-Category Minimum | MODIFY (from raw count) | NOT YET APPLIED. Skill still says "sample 2-4." Override at builder-prompt level for experiment. |
| **M6** | Semantic Value Justification | MODIFY (conditional) | Apply ONLY IF experiment shows arbitrary value selection |
| **M7** | Mechanism Combinations | MODIFY (Ceiling+ only) | Apply ONLY IF experiment shows mechanisms deployed without reinforcement |

### 3.3 Wave 3 (DEFERRED -- After 10+ Builds)

| Mod | Name | Verdict |
|-----|------|---------|
| **M4** | Domain Family Check | ADOPT (strengthens Phase 3.5) |
| **M9** | 8 Semantic Audit Questions | ADOPT (adds to PA skill) |
| **M10** | Grammar-vs-Derivative Mode | ADOPT (Mode 5 for PA) |
| **M11** | Per-Tier Audit Scope | ADOPT (matches audit to tier) |

### 3.4 Rejected

| Mod | Name | Why Rejected |
|-----|------|-------------|
| **Mod 4 (original)** | Technique Count Metric (X/18) | Goodhart's Law trap. Count becomes target. Replace with narrative + quality markers. |

### 3.5 Critical Warning

**Adopting all 4 original modifications AS STATED would create a "checklist factory."** Mods 2+3 together are safe (enabling). Mods 1+4 together are dangerous (metric-driven assembly line). The interaction effects between modifications matter more than any individual modification.

### 3.6 The M1 Sequencing Issue

M1 (per-category minimum) was assigned to Wave 2 but this was "arguably a sequencing mistake." M1 is the FOUNDATIONAL ENABLER, categorically different from M6/M7 which genuinely need experiment feedback. Without M1, the skill still says "sample 2-4" -- the experiment would test what 11 agents already concluded.

**Resolution for the Middle experiment:** Override "sample 2-4" at the builder-prompt level. Tell the builder: "Deploy 8-10 mechanisms across all 5 categories. Read full catalog. Justify each selection." This tests the CONCEPT (per-category breadth) without permanently encoding M1 in the skill.

---

## 4. RESEARCH FINDINGS MOST RELEVANT TO MIDDLE-TIER

### 4.1 Density Rhythms (R3 -- 51 Findings)

The 4 density patterns are SPATIAL ORGANIZATION STRATEGIES (the skeleton), not mechanisms (the flesh):

| Pattern | Flow | Best For | Content Signal |
|---------|------|----------|----------------|
| **CRESCENDO** | Sparse intro -> dense peak -> sparse resolution | Tutorials, progressive explanations | Sequential steps, building complexity |
| **F-PATTERN** | Dense left (nav), sparse right (content) | Reference, documentation | Lookup-oriented, scannable |
| **BENTO** | Grid-based modular sections at varying density | Overviews, dashboards | Many equal-weight items |
| **PULSE** | Rhythmic dense-sparse-dense alternation | Narrative content, case studies | Story arc, periodic emphasis |

**Key density findings for Middle tier:**
- **R3 Insight 3:** PULSE pattern (HIGH-LOW-HIGH cycles) creates sustained engagement for tutorials
- **R3 Insight 23 (Fractal):** Good density is FRACTAL -- same rhythm at page, section, component, character scales
- **R3 Insight 29 (Contrast):** Density is RELATIVE -- medium feels dense after sparse, sparse after dense. Use for emphasis.
- **R3 Insight 30 (Debt):** Dense elements create "density debt" -- recovery whitespace required (64-80px after dense sections)
- **R3 Breathing Framework:** Pages should BREATHE -- alternating inhalation (gathering attention) and exhalation (releasing attention)

### 4.2 Combination Rules (R5 -- 39 Findings)

Even though Middle uses INDIVIDUAL mechanism deployment (not combinations), these R5 rules still apply to component sequencing:

- **R5 T2 (Velocity):** Avoid placing two SLOW components (Code, Reasoning, Core Abstraction) consecutively without a FAST component between
- **R5 T3 (Temperature):** Don't oscillate rapidly between warm (Tip, Challenge) and cold (Gotcha). Use neutral components as buffers.
- **R5 T4 (2-Callout Limit):** Never more than 2 consecutive callouts
- **R5 S1 (Setup-Payoff):** Context -> Map -> Principle -> Demonstration -> Action -> Hazards
- **R5 S2 (Density Wave):** Start LOW, build to HIGH, release to LOW-MED, build again
- **R5 G1 (Semantic Proximity):** Related components 8-16px gap. Different topics 24-32px. Section breaks 48-64px.
- **R5 G3 (Weight Balance):** For every heavy component (Code, Reasoning), include 1-2 light components (Callouts)

### 4.3 Cross-Research Synthesis (RESEARCH-SYNTHESIS.md)

The 5 unified principles:
1. **Density as Rhythm** (R1+R3): HIGH->LOW->HIGH cycles across 6 dimensions
2. **Layout as Choreography** (R2+R4): Match axis pattern to section purpose
3. **Components as Characters** (R5): Components have velocity, temperature, weight -- never stack same-velocity consecutively
4. **Whitespace as Design** (R1+R2): 24px between related, 48px between sections, 92px+ hero margins
5. **Editorial Confidence Through Typography** (R1+R2): Size hierarchy + weight + color + space = hierarchy without decoration

### 4.4 The Vocabulary-vs-Library Distinction

**grammar/ = vocabulary to USE.** The 18 mechanisms are transferable techniques extracted from showcase pages. Using them is FLUENCY.

**case-studies/ = library to NOT COPY.** The 9 case studies show how vocabulary was used in specific metaphors. They are LITERATURE, not templates.

**The Name Test:** Remove the metaphor name. Does the description still make sense?
- "Border-weight encodes hierarchy" -- YES (mechanism)
- "4px bedrock border" -- NO (metaphor-specific implementation)

**The Transfer Test:** Does the technique produce DIFFERENT CSS values with a different metaphor?
- Spacing compression + geological = 80px/16px
- Spacing compression + lab = 64px/24px
- SAME mechanism, DIFFERENT values = vocabulary

**UNTESTED PRACTICAL QUESTION:** When a builder deploys 8-10 mechanisms with a COMPLETELY NEW metaphor (or no metaphor at Middle tier), does the result feel NOVEL (grammar fluency) or DERIVATIVE (looks like showcase pages because same CSS techniques)? The Middle experiment is the FIRST practical test of this.

---

## 5. TOKEN RATIONALE: WHY These Specific Colors/Fonts/Spacing

### 5.1 Colors

| Token | Value | WHY This Specific Value |
|-------|-------|------------------------|
| --color-primary | #E83025 | "Sanrok red" -- editorial confidence. NOT pure red (#FF0000). Warmer, more authoritative. |
| --color-background | #FEF9F5 | Warm cream -- NOT sterile white (#FFFFFF). Creates warmth, reduces eye strain. "Not a hospital." |
| --color-text | #1A1A1A | Near-black -- NOT pure black (#000000). Softer, less harsh contrast against cream. |
| --color-text-secondary | #666666 | Muted gray for supporting text |
| --color-border | #E0D5C5 | Warm border tone that echoes the cream background family |
| --color-border-subtle | #F0EBE3 | Very subtle dividers, barely visible |

**Semantic accent colors:**
- Blue (#4A90D9): Info Callout, File Tree
- Green (#4A9D6B): Tip Callout
- Coral (#C97065): Gotcha Callout
- Amber (#D97706): Essence Callout, Reasoning
- Purple (#7C3AED): Challenge Callout

**Rules:** No traffic light (never green adjacent to red). Warm over cool (prefer cream over pure white). Limited palette (red + cream + black, no extra grays beyond hierarchy).

**CRITICAL:** design-system/ directory has WRONG values (#FF0000, #FBF5EF, #171717). NEVER use those. Always use the T1 locked values above.

### 5.2 Typography (The Font Trinity)

| Font | Role | WHY This Font |
|------|------|--------------|
| **Instrument Serif** (Georgia fallback) | Display/headings ONLY | Editorial identity. Sharp, confident. Signals "this is a title zone." |
| **Inter** (system-ui fallback) | Body/content text | Functional clarity. Signals "this is a content zone." |
| **JetBrains Mono** (SF Mono fallback) | Code/technical ONLY | Technical precision. Signals "this is a technical zone." |

**Type scale (LOCKED):**
- 12px (--text-xs): labels, captions
- 14px (--text-sm): small body, metadata
- 16px (--text-base): body text (the baseline)
- 18px (--text-lg): large body
- 20px (--text-h4): small headlines
- 24px (--text-h3): section headlines
- 32px (--text-h2): major headlines
- 40px (--text-h1): page titles
- 48px (--text-display): hero text

**Critical rules:**
- h3 MUST be italic (Instrument Serif italic)
- Essence Callout body uses serif italic
- Callout labels are 10-11px uppercase with 0.1em letter-spacing
- Size jump of 4px+ = zone boundary; jump of 2px = within-zone variation
- Font IS the zone signal. Wrong font = wrong zone = broken semantics.

### 5.3 Spacing

| Token | Value | Meaning |
|-------|-------|---------|
| --space-1 | 4px | Within element |
| --space-2 | 8px | Related items (within zone) |
| --space-3 | 12px | Zone gaps |
| --space-4 | 16px | Standard separation |
| --space-5 | 20px | Generous padding |
| --space-6 | 24px | Component padding, grid-gap |
| --space-8 | 32px | Section breaks |
| --space-10 | 40px | Large section breaks |
| --space-12 | 48px | Page margins |
| --space-16 | 64px | Major sections (EXHALE) |
| --space-20 | 80px | Recovery breathing |
| --space-24 | 96px | Sparse ocean |

**Semantic meanings:**
- 4-8px = "These are ONE thing"
- 12-16px = "Related but separate"
- 24-32px = "Different sections"
- 48px+ = "Different regions"

**INHALE/EXHALE rhythm:** Dense sections use 24px padding. Sparse recovery zones use 64-80px. After any dense section, add 64-80px whitespace.

**Callout padding is ASYMMETRIC:** 24px top, 20px sides, 28px bottom. The asymmetry creates a "settling" effect.

### 5.4 Geometry

- **border-radius: 0 on EVERYTHING** -- NO exceptions. Sharp edges = decisive, confident. This is Soul Piece #1.
- **box-shadow: none on EVERYTHING** -- NO exceptions. Flat = print heritage, honest. Shadows = fake 3D.
- **Left accent borders: 4px minimum** -- never 1-2px (too subtle to register as intentional). The 2px width is deliberately skipped (OD-F-AP-001: "2px epidemic" anti-pattern).
- **No vertical borders in tables** -- "prison bars." Use horizontal-only with open grid.

**Zone separation methods (in order of preference):**
1. Whitespace only (PRIMARY)
2. Background color change (semantic zones)
3. Left border accent (callouts)
4. Full 1px border (tables, frames)
5. Horizontal rule (RARELY)
6. Drop shadow (NEVER)
7. Rounded corners (NEVER)

---

## 6. CLARIFICATIONS C1-C8: Gaps in Documentation Reasoning

### C1: Mechanism Counts Are Descriptive, Not Prescriptive
Numbers were backward-engineered from existing pages. They describe NATURAL LANDING ZONES for each effort level. Do NOT treat "8-10" as a target. The per-category minimum ensures BREADTH; count emerges naturally.

### C2: "Sample 2-4" Is the PROBLEM, Not the Design
This instruction is the BROKEN state the skill enrichment exists to fix. Identified by ALL 11 research agents as the single most limiting specification. M1 exists to replace it. Still in the skill as of post-Wave 1 (M1 deferred to Wave 2).

### C3: Same Catalog, Different Selection Logic
Both Middle and Ceiling use the exact same 18 mechanisms from the exact same catalog. What differs:
- **Middle:** content feature -> mechanism capability (direct mapping, each independent)
- **Ceiling:** metaphor -> shared semantic dimension -> multiple mechanisms encoding that dimension simultaneously

### C4: Patterns Are the Skeleton, Mechanisms Are the Flesh
CRESCENDO/F-PATTERN/BENTO/PULSE are SPATIAL ORGANIZATION STRATEGIES (how density flows). The 18 mechanisms are CSS TECHNIQUES deployed WITHIN whatever pattern is selected. Pattern is NOT hardcoded -- selected via content-type lookup.

### C5: Scales and Mechanisms Are Different Dimensions
- **Mechanisms** = breadth of vocabulary (how many CSS techniques)
- **Scales** = depth of coherence (how many zoom levels the pattern appears at)
- 5 scales: Navigation / Page / Section / Component / Character
- Middle requires 2 scales (Page + Component)

### C6: M1 Sequencing Was Arguably a Mistake
M1 is categorically different from M6/M7. M6/M7 genuinely need experiment feedback. M1 is the foundational enabler. Running the experiment without M1 means the skill says "2-4" while the builder prompt says "8-10" -- testing the concept, not the skill.

### C7: Content Selection for Middle Experiment
Must be mixed content (800-1200 words): prose + code blocks + callouts + tables. Pure prose hits mechanism ceiling at 6. Tutorial format recommended (maps to CRESCENDO). Different domain than Variant B's scientific calibration.

### C8: What the Middle Experiment Tests
Core hypothesis: Does Middle tier (8-10 mechanisms, no metaphor, lookup-based) reach the "engagement threshold" (feels "designed" not "formatted")?
- SUCCESS: Middle sufficient for 40-50% of pages; Ceiling scope narrows
- PARTIAL: "Designed" but lacks atmosphere; some content needs Ceiling
- FAILURE: Lookup can't produce engagement; tier model needs revision

---

## 7. RICHNESS FINDINGS: Vocabulary Fluency, Not Creative Freedom

### 7.1 The Core Finding

**Richness comes FROM constraint, not despite it.** Showcase pages (DD-006, OD-004, CD-006) were MORE rigid than the pipeline, not less. CD-006 (richest page, 39/40) operated under 78 simultaneous constraints. Variant B operated under ~20. More constraints produced more richness because constraints were overwhelmingly VOCABULARY (new tools) rather than PROHIBITIONS (things you cannot do).

**"Richness is not the opposite of rigidity. Richness is the fluency that comes from having many rigid words to compose with."**

### 7.2 The Gap is Quantitative, Not Qualitative

Variant B derives GENUINE identity through the pipeline. The gap is technique SATURATION (density of mechanism deployment), not technique ABSENCE. The pipeline HAS all 18 mechanisms. Variant B only reads 2-4 because the skill says "sample 2-4."

### 7.3 Richness Accumulates Through Iteration

Showcase richness accumulated through 4-6 pipeline stages (DD -> OD -> AD -> CD), each adding 13-16 new techniques. The skill compresses this 337-finding, 94-external-research chain into "sample 2-4 mechanisms" -- a 50:1 information loss.

### 7.4 Operational Definition of Richness

> Richness is the degree to which a page's CSS structure, spatial topology, and rhythmic variation work in multi-channel coordination to reinforce a content-derived metaphor, creating an experience where spatial organization MEANS something rather than merely CONTAINING something. Peak richness occurs not at maximum technique count but at maximum content-mechanism fit.

### 7.5 Five Measurable Dimensions
1. **Layout Complexity:** block-only -> flex -> grid -> named grid -> multi-pattern
2. **Visual Depth:** flat -> pseudo-elements -> offset shadows -> clip-path -> drop caps + composite
3. **Token Semantic Density:** raw values -> tokens -> semantic aliases -> zone tokens -> composite tokens
4. **Responsive Sophistication:** 0 breakpoints -> 1 -> 3 -> progressive cascade -> pattern-aware
5. **Metaphor-to-CSS Encoding:** labels only -> background differentiation -> value generation -> technique generation -> full unification

### 7.6 The Engagement Threshold

Below threshold = generic ("formatted"). At threshold = designed. Above threshold = place ("I want to spend time here").

The most impactful action is ensuring NOTHING falls below threshold. Middle tier crosses this threshold. The Floor-to-Middle transition has the HIGHEST ROI (3-4x richness for ~45 extra minutes).

---

## 8. RIGIDITY FINDINGS: 4-Type Taxonomy and Binary Rules

### 8.1 The 4-Type Constraint Taxonomy

| Type | Name | Effect | Action |
|------|------|--------|--------|
| 1 | Identity Rigidity | ALWAYS enabling | KEEP ALL (border-radius: 0, font trinity, palette) |
| 2 | Procedural Rigidity | Sequences creativity | KEEP ALL (phase gates, library sequencing, anti-gravity) |
| 3 | Specification Rigidity | Mixed: some protects, some limits | EVALUATE EACH (940px=keep, "sample 2-4"=remove) |
| 4 | Ambient Rigidity | Emergent overload from volume | MANAGE (tiered presentation, sunset protocol) |

### 8.2 The "Paradox" Dissolved

The rigidity-richness "paradox" was a CATEGORY ERROR. It collapses the moment you distinguish types. Identity and procedural rigidity are GENERATIVE. The only legitimately limiting rigidity is a small number of specification caps (primarily "sample 2-4") and emergent ambient overload.

### 8.3 Vocabulary-to-Prohibition Ratio

At CD stage: vocabulary-type rigidity outnumbered constraint-type rigidity 62:16 (4:1 ratio). The system became MORE expressive by becoming MORE rigid -- because new constraints were WORDS TO COMPOSE WITH, not fences.

### 8.4 The Enabling-to-Limiting Ratio

Out of ~168 constraints in the design system, only 4-5 are genuinely limiting. The vast majority are enabling (creating possibilities) or protective (preventing failures). The system is ALREADY well-designed. The problem is MICROSCOPIC, not systemic.

### 8.5 Binary Rules vs Judgment Rules

**THE most important architectural principle for agent-facing instructions:**
- **Binary rules achieve 100% agent compliance** (e.g., "container width MUST be 940-960px")
- **Judgment rules achieve ~0%** (e.g., "container width should be reasonable")

Every new instruction should be BINARY, TIER-GATED, and MEASURABLE.

### 8.6 Protective vs Limiting Specifications

**Protective (KEEP):**
- 940px container width (prevents metaphor-driven collapse -- 4/5 Phase D violations)
- 32px padding floor (prevents dead zones)
- 40% compression ratio (prevents cognitive fatigue)
- CPL 45-80 (prevents readability failure)
- Max 2 callouts per viewport (prevents callout cacophony)

**Limiting (CHANGE):**
- "Sample 2-4 mechanisms" (sets ceiling, not floor)
- Single 768px breakpoint (prevents responsive sophistication)
- Specific pattern mandates without alternatives (forces one density arc)

---

## 9. PREVIOUS EXECUTION PROMPT ANALYSIS: What It Got Right vs Missing

### 9.1 What 14-master-execution-prompt.md Got Right

- Comprehensive Wave 1/2/3 structure with dependencies
- Exact before/after text for every modification
- Interaction rigidity checks (Type 5A/5B/5C)
- Builder confidence test at the end
- Anti-patterns section (don't overwrite, don't remove, don't add judgment rules)
- File manifest with priorities
- Validation criteria per-modification and cross-wave

### 9.2 What 14-master-execution-prompt.md Is Missing

- **No explicit content to build** -- it tells HOW to modify the skill but doesn't include the actual Middle-tier experiment content
- **No builder-prompt template** -- the builder needs a self-contained prompt; the execution prompt only modifies the skill
- **No density pattern walkthrough** -- says "select CRESCENDO" but doesn't show what CRESCENDO deployment looks like step-by-step
- **No concrete mechanism deployment example** -- lists per-category protocol but doesn't walk through "I have a tutorial, here's how I select mechanisms"
- **No live CSS examples of Middle tier** -- shows Variant B CSS and OD-004 CSS but no Middle-tier CSS (because no Middle page exists yet)
- **M1 override language not explicitly drafted** -- says "override at builder-prompt level" but the exact override wording needs to be in the builder prompt

### 9.3 What 13-master-agenda.md Adds

- Phase 2 experiment design with 4 success criteria
- Content selection criteria (800-1200 words, mixed types, different domain)
- Measurement framework (programmatic + perceptual + structural)
- Decision matrix after experiment (4 quadrants: designed/under-designed x novel/derivative)
- Timeline estimates (70-100 min build, 2-3 hours total with audit)

---

## 10. KEY STRATEGIC CONTEXT

### 10.1 The Meta-Awareness

- **Meta-to-output ratio:** 2.6:1 (47,944 lines infrastructure vs 18,428 lines product)
- **Only 2.5% of planning content** is on the critical execution path
- **One experiment resolves more questions than another research team**
- The user watches for over-researching and under-building

### 10.2 The Two-Instance Pattern

Continuation bias prevents self-revision. A builder instance that commits to a direction cannot objectively evaluate whether that direction works. Use a SEPARATE auditor instance for evaluation.

### 10.3 The Prophylactic Paradox

Designing for failure prevents failure. The fractal gate (M2) was designed because ~0% of builders achieved fractal coherence without it. Now that it exists as a gate, it will achieve ~100% compliance -- making the problem invisible. The gate is still necessary.

### 10.4 Container Width is NON-NEGOTIABLE

940-960px at 1440px viewport. Priority order:
1. Container width (NEVER compromise)
2. Metaphor fidelity (ADJUST expression)
3. Aesthetic preference (LAST priority)

Express narrowing through INTERNAL spacing, not external width reduction:
```css
/* WRONG */
.container { max-width: 700px; }

/* CORRECT */
.container {
  max-width: 960px;
  padding: 0 120px; /* Internal padding creates "narrow" visual */
}
```

### 10.5 The Experiment Success Criteria

1. **Container width 940-960px (BINARY):** 100% compliance expected
2. **Fractal coherence at 2 scales (BINARY):** Page + Component demonstrate same pattern
3. **Engagement threshold (SUBJECTIVE):** Does it feel "designed" not "formatted"?
4. **Novelty check (CRITICAL):** Does it feel like NEW composition or DERIVATIVE of showcase pages?

---

## END CONTEXT EXTRACTION

**Total files read:** 19
**Total lines processed:** ~15,000+
**Key finding for builder:** The Middle experiment is not about hitting a mechanism count. It is about deploying vocabulary BREADTH (all 5 categories) with content-mechanism FIT (each mechanism serves the content), within a density PATTERN (CRESCENDO/F-PATTERN/BENTO/PULSE), under NON-NEGOTIABLE guardrails (940px container, soul constraints, always-load protocol). The count emerges from the breadth.

**The single most important instruction for the builder:** Read the FULL mechanism catalog. Deploy at least 1 mechanism from each of the 5 categories. Justify each selection. The "8-10" count is where you'll land naturally when you do this correctly.
