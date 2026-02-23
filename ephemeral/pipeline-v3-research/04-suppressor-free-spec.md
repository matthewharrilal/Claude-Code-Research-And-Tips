# 04: Suppressor-Free Specification Design

**Agent:** suppressor-free-designer (Opus 4.6)
**Date:** 2026-02-22
**Task:** #4 -- Design the specification format with ALL 20 quality suppressors removed

**Sources Read (5 files, ~3,700 lines):**
- `59-suppressor-archaeology.md` (867 lines) -- PRIMARY: 20 suppressors, 7 chains, 3 feedback loops, minimal constraint set
- `52-adversarial-quality-gaps.md` (399 lines) -- 10 quality dimensions, 4 root causes, Flagship gap analysis
- `44-lost-knowledge.md` (365 lines) -- 5 categories of lost knowledge, 83:1 compression, judgment calibration
- `design-system/pipeline/conventions-brief.md` (609 lines) -- Current spec (the thing being redesigned)
- `ephemeral/build-page-prompt/MASTER-EXECUTION-PROMPT.md` (579 lines) -- Current orchestration prompt

---

## EXECUTIVE SUMMARY

The current pipeline specification is 609 lines (conventions brief) + 579 lines (master execution prompt) = 1,188 lines of specification that produces PA-05 3.5/4 (Gas Town). The pipeline's NET EFFECT below PA-05 3.2 is NEGATIVE -- builders produce better output with fewer instructions. This report designs the specification format after removing all 20 identified suppressors.

**The suppressor-free specification is 73 lines of builder-facing content, organized as 3 layers:**

1. **IDENTITY** (15 lines) -- 10 soul constraints that define KortAI
2. **CALIBRATION** (8 lines) -- 4 perception thresholds preventing measured failures
3. **FRAMEWORK** (50 lines) -- 5 positive capabilities Opus doesn't natively possess

Everything else in the current 1,188 lines is either: (a) actively suppressive (-890 lines), (b) measurement infrastructure for humans (+0 builder value), or (c) already in Opus's training data (redundant).

The specification format shifts from WORLD-DESCRIPTION-WITH-EMBEDDED-CONSTRAINTS to RECIPE-WITH-EMBEDDED-PHYSICS. The format is not a brief, not a checklist, not a rulebook. It is a sequenced creative workflow with physics embedded as natural laws, not as rules to follow.

---

## PART 1: SUPPRESSOR-BY-SUPPRESSOR REMOVAL PLAN

For each of the 20 suppressors: what specific lines/structures cause it, and what is the removal action.

### TIER 1: REMOVE ENTIRELY (Net-negative -- every line is suppressive)

| ID | Suppressor | Lines in Current Spec | Specific Cause | Removal Action |
|----|-----------|----------------------|----------------|----------------|
| S-01 | Checklist format | ~120 lines of verification language across Sections 0, 2, 9B, 11, Process | Verbs: "verify," "fail if," "must be," "ensure." Builder enters defensive mode. | REWRITE all constraint language as physics descriptions. "Background delta >= 15 RGB" becomes "Below 15 RGB on every channel, adjacent backgrounds merge to the human eye." No verification verbs. |
| S-02 | Prohibition overload | 55 prohibition-type rules across brief + restraint list + quality floor | 55 is 7x cognitive overload threshold (7+/-2). Working memory fills with threats. | REDUCE to 10 identity constraints + 4 calibration thresholds = 14 total. Cut 41 prohibitions. The 41 are either: (a) already in training data, (b) measurement artifacts, or (c) derivatives of the 14 kept. |
| S-04 | Sub-perceptual emphasis | Section 2 language: "refinement gradients," "micro-modulation," "character-level detail" | Directs CSS effort toward invisible properties. 22% CSS budget wasted. | DELETE all vocabulary about refinement, gradients, micro-typography. Replace with: "CSS below perception thresholds is wasted CSS. When in doubt, make it bigger." |
| S-05 | Absence coherence rationalization | Line in current brief: "Consistent absence reads as restraint. Inconsistent absence reads as failure." | Provides philosophical justification for omission when builder is in defensive mode. | DELETE entirely. This rule is CONTEXTUAL -- only suppressive when S-01/S-02 are active. But since we're removing S-01/S-02, the SAFEST action is to delete it. A confident builder doesn't need permission to omit. |
| S-07 | Multi-pass fragmentation | Master execution prompt: 5-pass build architecture | Each pass annotates rather than amplifies. Skeleton uniformity locked at Pass 1. | COLLAPSE to single-pass build. One Opus builder, one pass, full creative authority. Multi-pass is measurement infrastructure for humans, not quality infrastructure for builders. |
| S-11 | Repair mode | Master execution prompt: fix cycle architecture, remediation framing | "Fix this artifact" framing converts generative mode to corrective mode. | REPLACE fix cycles with REBUILD cycles. If PA-05 < 3.5, do not patch -- rebuild from scratch with auditor feedback as new input. The rebuild prompt says "Build a page that addresses these observations" not "Fix these issues." |
| S-14 | Analytical process drift | Pipeline's rule-extraction output format across all phases | Pipeline produces constraints, not instructions. 7.9:1 guardrail-to-playbook ratio. | The suppressor-free spec IS the fix. By designing from scratch rather than extracting from the analytical pipeline, we bypass S-14 entirely. |
| S-15 | Context window position effect | Lines 400+ receive ~5% attention in a 963-line prompt | Critical compositional intelligence positioned in the low-attention zone. | REDUCE to 73 lines. No position effect at 73 lines -- the entire spec fits in the high-attention zone. |
| S-16 | Token budget anxiety | No explicit instruction says "your CSS should be 1000+ lines" | Builder self-limits output when uncertain about scope. | ADD explicit permission: "This page will need 800-1200 lines of CSS. That is normal. Do not self-limit." |
| S-18 | Gate optimization (Goodhart) | 21-gate programmatic verification in gate-runner.md | Builder optimizes for measurable gate criteria rather than perceived quality. | REMOVE all gates from builder awareness. Gates exist for human verification AFTER the build. Builder never sees them. Builder builds for quality, humans verify with gates. |
| S-19 | Self-censorship | Prompt tone: "FAIL," "kill criterion," "ABORT," 55 prohibitions | Ambient threat suppresses creative exploration even in unconstrained areas. | REWRITE tone. Zero threat language. No FAIL, ABORT, or kill. Physics language only: "In this world, X is true" not "If you violate X, the build fails." |

### TIER 2: TRANSFORM (Currently suppressive, but contains a kernel of necessary function)

| ID | Suppressor | Current Form | Kernel to Keep | Transformed Form |
|----|-----------|-------------|----------------|-----------------|
| S-03 | Inverted quality routing | CSS-richest files routed to planner, not builder | Builder needs reference material | Route mechanism catalog, component library, AND one crown jewel reference DIRECTLY to builder. Builder reads CD-006 before building. |
| S-06 | Zero inter-agent communication | 19 agents, zero SendMessage despite mandate | Communication catches distributed coherence failures | In single-pass architecture, this is N/A. One builder, no agents to communicate with. If multi-agent: mandate midpoint articulation checkpoint. |
| S-08 | Perceptual threshold blindness | No minimum magnitudes in any gate | Floors prevent invisible CSS | KEEP as physics, not gates. "Human eyes merge backgrounds below 15 RGB delta. Letter-spacing below 0.025em is sub-pixel. Stacked gaps above 120px lose the reader." Embedded in the world description, not as checkpoints. |
| S-09 | Component library deprivation | Builder prompt has no components.css reference | Builder needs pre-built vocabulary | ROUTE components.css directly to builder. Builder reads it. One line in the spec: "Read components.css. Use these 34 components as your vocabulary." |
| S-10 | Content-form decoupling | Zone-uniform CSS specifications | Per-section decisions are required for DESIGNED quality | REPLACE zone-uniform specs with per-section creative prompts derived from content semantics. The TC brief says "Section 3 is about density -- the form should feel compressed" not "Zone 2 padding: 40px." |
| S-12 | Agent model mismatch | Sonnet for creative building roles | Opus for creative work, Sonnet for mechanical | MANDATE Opus for builder role. Non-negotiable. Sonnet for gate running, skill editing, mechanical tasks only. |
| S-13 | Exemplar deprivation | Builder has zero HTML reference files | Builder needs a quality target | ROUTE one crown jewel (CD-006) as reference. Builder reads it, sees what "rich" looks like in this system. Not a template -- a quality calibration reference. |
| S-17 | Training data gravity | Builder defaults to modal web design patterns | Identity constraints override the mode | KEEP identity constraints (they force departure from training data mode). ADD explicit instruction: "This is not a standard editorial page. It is a KortAI page. The identity section describes how KortAI pages differ from everything in your training data." |
| S-20 | Fix cycle regression | Fix cycle converts recipe mode back to checklist mode | Feedback needs to reach the builder | REPLACE fix feedback format. Instead of "Gate 3 FAILED: CCS < 0.30. PA auditor says: 'Zone backgrounds are imperceptible'" send "The auditors noticed the zone backgrounds feel like one color. Consider whether your background deltas are large enough to see." Generative language, not diagnostic language. |

---

## PART 2: THE CROSSOVER CURVE -- Quality vs. Suppressor Count

```
Quality (PA-05)
4.0 |                                          *  73 lines (identity + calibration + framework)
    |                                     *       + structural metaphor instruction
    |                                *            + multi-coherence framework
3.5 |                           *                 + perception thresholds as physics
    |                      *                      All suppressors removed + soul only
    |                 *                           S-01/S-02/S-08/S-10/S-11 removed
3.0 |            *                                S-01/S-08 removed (recipe + thresholds)
    |       *                                     S-01 removed (recipe format only)
2.5 |  *                                          S-08 removed (thresholds only)
    | *                                           Current spec baseline (20 suppressors active)
2.0 |*                                            Heavy checklist format
    |
1.5 |*---- Flagship experiment (all 14 original suppressors active)
    |
    +--+----+----+----+----+----+----+----+----+----+----
    20  18   16   14   12   10   8    6    4    2    0
         Suppressors remaining (decreasing →)
```

### Inflection Points

**INFLECTION 1 (18 → 14 suppressors): The Recipe Switch**
Removing S-01 (checklist → recipe) produces the LARGEST single quality jump: +0.5-1.0 points. This cascades through Chain A (compliance trap) and Chain D (Sonnet ceiling). The Middle experiment PROVED this: same design system, recipe format, 4/4. Checklist format, 1.5/4.

**INFLECTION 2 (14 → 8 suppressors): The Perception Floor**
Adding perception thresholds (removing S-08) and fixing routing (S-03, S-09, S-13) produces the second-largest jump: +0.5 collectively. Builders now produce VISIBLE CSS because invisible CSS is described as physically impossible, not rule-violating.

**INFLECTION 3 (8 → 0 suppressors): Diminishing Returns**
Removing the remaining 8 suppressors (S-06, S-10, S-15, S-16, S-17, S-19, S-20, and residual S-04) adds ~0.3-0.5 collectively. Each has smaller individual impact because the chain dependencies are already broken.

**THE CROSSOVER: ~3.2/4 (at ~6 suppressors remaining)**
Below 3.2: primary intervention is REMOVING suppressors. Each removal has outsized impact due to chain-breaking.
Above 3.2: primary intervention is ADDING capabilities. The remaining quality gap requires multi-coherence, structural metaphor, and density arc frameworks that Opus doesn't natively possess.

---

## PART 3: IRREDUCIBLE SAFETY FLOOR -- What MUST Remain

### Category A: IDENTITY (Cannot Remove -- Defines System)

These 10 constraints prevent Opus from producing generic editorial web design. Without them, output is competent but not KortAI. Removing ANY of these destroys system identity.

```
1. border-radius: 0                    -- THE identity anchor
2. box-shadow: none                     -- Flat surfaces, honest depth
3. filter: drop-shadow(): NEVER         -- No shadow effects
4. background: solid only               -- No gradients
5. color: no #000 or #FFF               -- Warm tonal range
6. R >= G >= B on backgrounds           -- Warm palette
7. Container: 940-960px                 -- Intimate editorial width
8. Typography: Instrument Serif / Inter / JetBrains Mono  -- Identity trinity
9. Italic headings (h3)                 -- Literary documentation feel
10. Border weights: 4px / 3px / 1px only -- No 2px (ambiguous weight)
```

**Format in spec:** Not as prohibitions. As physics: "In this world, every edge is sharp. Surfaces are flat and honest. Colors are warm. The container is 960px wide. Three typefaces exist."

### Category B: CALIBRATION (Cannot Remove -- Prevents Measured Failures)

These 4 thresholds prevent specific failure modes proven by empirical evidence (N >= 1 experiments each).

```
1. Background delta >= 15 RGB between adjacent zones
   (Below 15: 9/9 auditors saw identical color in Flagship)

2. Letter-spacing >= 0.025em when used (or 0)
   (Below 0.025em: sub-pixel, invisible on all displays)

3. Stacked gap <= 120px total
   (Above 120px: reader loses page thread; 6/11 Flagship gaps exceeded this)

4. Container width verification (940-960px)
   (THE #1 historically violated constraint across all experiments)
```

**Format in spec:** Not as rules to check. As perceptual physics: "Human eyes cannot distinguish backgrounds that differ by less than 15 RGB points. Letter-spacing below 0.025em is sub-pixel and invisible. Gaps above 120px are where readers leave."

### Category C: NOTHING ELSE

Everything not in Category A or Category B is either:
- **Suppressive:** Actively reduces builder quality (41 removed prohibitions, all gate specifications, all verification checklists, all count minimums)
- **Redundant:** Already in Opus training data (section count, CPL, footer existence, basic accessibility, responsive behavior)
- **Measurement infrastructure:** Valuable for humans evaluating output, not for builders producing it (21 gates, PA question assignments, auditor deployment protocol, run manifest)

---

## PART 4: THE SUPPRESSOR-FREE SPECIFICATION

### Design Principles

1. **RECIPE, not checklist.** Sequenced creative steps, not constraints to verify.
2. **PHYSICS, not rules.** Perceptual thresholds described as natural laws, not as gates.
3. **EXEMPLAR, not description.** Builder reads CD-006 and sees what quality looks like.
4. **SINGLE-PASS, not multi-pass.** One builder, one build, full authority.
5. **GENERATIVE, not defensive.** Every sentence asks "what will you create?" not "what must you avoid?"
6. **73 lines, not 1,188.** Entire spec fits in high-attention zone.

### The Specification (73 lines)

```markdown
# Build Brief

You are building a KortAI page. You are both architect and builder. Read this
brief once, then build.

## THE WORLD (Identity)

KortAI pages are warm, sharp, flat, and editorial.

Every edge is sharp (border-radius: 0). Surfaces are flat and honest (no
shadows, no gradients). Colors are warm (no pure black #000 or white #FFF;
backgrounds follow R >= G >= B). The container is 960px wide, centered.

Three typefaces exist: Instrument Serif for display headings, Inter for body
text, JetBrains Mono for code. No others.

Three border weights exist: 4px (accent), 3px (structural), 1px (separator).
No 2px.

## THE PHYSICS (Perception)

Human perception has hard floors. CSS below these floors is invisible -- wasted
effort that produces zero effect.

Adjacent backgrounds merge when all RGB channels differ by less than 15 points.
Letter-spacing below 0.025em is sub-pixel and invisible on all displays.
Stacked vertical gaps above 120px are where readers lose the page's thread.
These are not rules. They are how human eyes work in this world.

When in doubt about whether a CSS value is perceptible: make it bigger.

## THE INSTRUMENT (Composition)

Read `components.css` before building. These 34 components are your vocabulary.
Read `mechanism-catalog.md` for 18 proven techniques. Read CD-006 to see what
a rich KortAI page looks like. CD-006 is not a template -- it is a quality
reference showing this system's ceiling.

### Multi-coherence

At every zone boundary, shift 3 or more CSS channels in the same semantic
direction. The 6 channels: chromatic (background), typographic (size/weight/
spacing), spatial (padding/margin), structural (borders), behavioral (hover/
transitions), material (surface/texture).

Before writing CSS for a boundary, name the direction: DEEPENING (darker +
tighter + heavier), OPENING (warmer + spacious + lighter), FOCUSING (narrower
+ larger + bolder), RESOLVING (settled + standard + clean). Then write CSS
values that ALL encode that direction.

### Structural metaphor

Derive one metaphor from your content's structure. The metaphor must drive CSS
parameters -- if you removed all text labels, a reader should still feel the
metaphor's organizing principle through borders, spacing, and backgrounds alone.

If no metaphor emerges naturally, build without one. A well-composed page
without a metaphor beats a forced metaphor.

### Density arc

Your page has a shape: OPENING (sparse, generous) -> DEEPENING (moderate,
structured) -> CLIMAX (compressed, dense) -> RESOLVING (settled, clean). CSS
parameters follow this arc: spacing compresses toward the climax, backgrounds
darken, typography densifies. The climax is NOT the end -- resolution follows.

### Content-form coupling

Each section's form should resonate with its meaning. A section about
compression should feel compressed. A section about openness should breathe.
Zone-uniform CSS (all Zone 2 sections identical) produces flat pages. Per-
section decisions produce designed pages.

## THE WORK

Read the content. Notice where it shifts topic, mode, or intensity -- those
are your zone boundaries. Write your conviction: organizing principle, metaphor,
coherence direction, zone plan. Build HTML (landmarks, ARIA, skip link) then
CSS, working BOUNDARY BY BOUNDARY. At each boundary, set all shifting channels
together. At the midpoint, render and scroll -- strengthen the weakest section.

This page needs 800-1200 lines of CSS. That is normal for this system.

Deliver: output.html, _build-log.md (conviction + decisions + reflections).
```

### Specification Statistics

| Property | Current Spec | Suppressor-Free Spec |
|----------|-------------|---------------------|
| Builder-facing lines | 609 (brief) + ~200 (builder prompt) = ~809 | 73 |
| Verification language | ~120 lines ("must," "verify," "ensure," "fail") | 0 |
| Prohibitions | 55 | 0 (10 identity items described as physics) |
| Perception thresholds | 4 (as rules to check) | 4 (as physics of vision) |
| Positive frameworks | ~50 lines (multi-coherence, fractal, metaphor) | 50 lines (same content, recipe format) |
| Reference file routing | Builder reads 0 reference files | Builder reads 3: components.css, mechanism-catalog.md, CD-006 |
| Creative authority | "80%" (stated but contradicted by 55 prohibitions) | 100% within identity physics |
| Tone | Mixed (world-description + checklist + recipe) | Pure recipe + physics |
| Compression ratio (research → spec) | 83:1 | ~600:1 -- but the compression preserves ENABLING knowledge and discards CONSTRAINING knowledge |

---

## PART 5: RISK PROFILE -- What Could Go Catastrophically Wrong

### RISK 1: Container Width Violation (P: HIGH, 40-50%)

**The history:** 4 of 5 Phase D pages violated the 940-960px container. It is THE #1 historically violated constraint.

**Why suppressor-free is vulnerable:** The spec mentions 960px once, in the physics section. Without a gate checking it, the builder may default to training-data-modal widths (max-width: 1200px or 100%).

**Mitigation:** The spec states "960px" prominently. Additionally, this is the ONE programmatic check that should survive as a post-build verification: a simple `getComputedStyle(container).width` check. This is not a gate -- it is a physical constant of the world being verified.

**Residual risk:** MEDIUM. The spec's physics framing ("the container IS 960px") is stronger than "the container MUST BE 960px" for Opus, which treats specifications as creative constraints.

### RISK 2: Training Data Regression (P: MEDIUM, 25-35%)

**The threat:** Without 55 prohibitions, Opus may deploy training-data-modal patterns: rounded corners on cards, subtle box-shadows, cool gray text, generic sans-serif font stacks.

**Why it matters:** The soul constraints are the entire reason KortAI pages look like KortAI pages. Training data gravity (S-17) is the strongest ambient force.

**Mitigation:** The identity section uses physics language ("in this world, every edge is sharp") which is STRONGER than prohibition language ("border-radius: 0") for Opus processing. The identity section is positioned FIRST (primacy effect). And Opus treats "the world IS" statements as creative constraints more naturally than "you must NOT."

**Residual risk:** LOW-MEDIUM. Opus has demonstrated strong identity compliance even with minimal constraints (Gas Town: 0 soul violations with a 578-line prompt).

### RISK 3: Invisible CSS Production (P: MEDIUM, 20-30%)

**The threat:** Without explicit thresholds as gates, the builder may produce sub-perceptual values (1-8 RGB background deltas, 0.001em letter-spacing).

**Why it matters:** The Flagship spent 22% of CSS budget (227 lines) on imperceptible properties.

**Mitigation:** Physics framing is the strongest available defense. "Human eyes cannot distinguish backgrounds below 15 RGB delta" is more cognitively available than "SC-09: >= 15 RGB" because it explains WHY, creating an internal model rather than an external checkpoint. Gas Town's builder explicitly overrode conventions-brief values BECAUSE of the perception physics section.

**Residual risk:** LOW-MEDIUM. The physics framing has proven effective in one experiment (Gas Town). But N=1.

### RISK 4: Vocabulary-Only Output (P: LOW-MEDIUM, 15-25%)

**The threat:** Builder deploys mechanisms independently without compositional fluency. Page has the right number of techniques but they don't talk to each other.

**Why it matters:** This is the dominant finding from Report 52 -- Gas Town deployed 15 mechanisms but they operated independently. Vocabulary fluency without compositional fluency produces CEILING (3.5/4) not FLAGSHIP (4/4).

**Mitigation:** The multi-coherence and content-form coupling sections provide the compositional framework. But compositional fluency may require more instruction than 73 lines can carry. This is the PRIMARY GAP in the suppressor-free spec.

**Residual risk:** MEDIUM. This risk is real and represents the ~30-40% of the quality gap that requires ADDITIVE capability beyond suppressor removal. The spec provides the framework in 50 lines. Whether 50 lines is sufficient for compositional fluency is untested.

### RISK 5: Missing Basic Structure (P: LOW, 5-15%)

**The threat:** Without explicit requirements for footer, section count, responsive breakpoints, or accessibility, the builder may omit them.

**Why it matters:** The Middle experiment's known defect was a missing footer -- the builder couldn't ask the planner.

**Mitigation:** Opus natively produces header, main, footer, skip link, ARIA roles, responsive breakpoints, and sensible section counts. These are all in training data. The HTML skeleton mention ("landmarks, ARIA, skip link") is sufficient. The risk is LOW because Opus does these without instruction.

**Residual risk:** LOW. Confirmed by Gas Town (comprehensive accessibility without explicit mandate in the builder prompt).

### RISK 6: Specification Too Thin for Content Variety (P: MEDIUM, 20-30%)

**The threat:** 73 lines works for Gas Town (structurally heterogeneous content) but may fail for uniform prose (RESEARCH-SYNTHESIS, which scored 1.5/4 historically).

**Why it matters:** Uniform prose has no natural zone boundaries, no structural variety to force visual variety.

**Mitigation:** The content-form coupling section addresses this: "Each section's form should resonate with its meaning." But for uniform prose, all sections have similar meaning. The spec may need a supplementary note for prose-heavy content: "When content lacks structural variety, CREATE it through layout topology changes every 3-4 sections."

**Residual risk:** MEDIUM. The suppressor-free spec assumes structurally heterogeneous content. Prose-only content needs additional guidance (~5 lines).

### Aggregate Risk Assessment

| Scenario | Probability | Impact | PA-05 Estimate |
|----------|------------|--------|----------------|
| Best case: All risks mitigated | 15-25% | N/A | 3.5-4.0 |
| Expected case: 1-2 risks materialize at moderate severity | 40-50% | Moderate | 3.0-3.5 |
| Degraded case: Training regression + vocabulary-only | 20-30% | Significant | 2.5-3.0 |
| Worst case: Container violation + invisible CSS + vocabulary-only | 5-10% | Severe | 2.0-2.5 |

**Expected PA-05 with suppressor-free spec: 3.0-3.5 (COMPOSED to near-DESIGNED)**

This is BETTER than the Flagship (1.5/4) and competitive with Gas Town (3.5/4) at 6% of the specification length. The risk-adjusted expectation exceeds the full 1,188-line spec's worst-case performance.

---

## PART 6: THE PARADOX -- Suppressors That Also Prevent Failures

### The Dual-Function Problem

Some "suppressors" also prevent real failures. Removing them gains quality but risks failure modes they guarded against.

| Suppressor | Suppressive Effect | Protective Effect | Resolution |
|-----------|-------------------|-------------------|------------|
| S-02 (55 prohibitions) | Working memory overload, defensive processing | Prevents 55 specific failure modes (rounded corners, shadows, gradients, etc.) | REDUCE to 10 identity items. The 10 most critical prohibitions prevent 95% of observed identity violations. The other 45 are either in training data or derivative. |
| S-05 (absence coherence) | Rationalizes omission | Prevents inconsistent deployment (borders on some sections, not others) | DELETE. Inconsistent deployment is a LOWER risk than total omission. A builder who deploys borders on 7 of 12 sections produces more richness than one who deploys borders on 0 of 12 and calls it "consistent absence." |
| S-08 (perception threshold blindness) | Allows invisible CSS to satisfy checks | Without thresholds, the builder has no floor | KEEP as physics. The thresholds are protective, not suppressive, WHEN presented as physics rather than as gates. The distinction is format: "human eyes merge below 15 RGB" (physics) vs "SC-09: >= 15 RGB, FAIL if below" (gate). |
| S-18 (gate optimization) | Builders optimize for gates, not quality | Gates catch real structural failures (missing sections, no container, width violations) | SPLIT. Remove gates from builder awareness (suppressive). Keep gates as post-build human verification (protective). Builder optimizes for quality. Humans verify with gates. |
| S-19 (self-censorship) | Suppresses creative exploration in unconstrained areas | Prevents "bold" CSS that violates soul constraints | REPLACE tone. Creative exploration WITHIN identity is explicitly encouraged. The identity constraints are presented as physics (creative space within a world) not as threats (failure modes to avoid). |
| S-07 (multi-pass fragmentation) | Each pass annotates rather than amplifies | Multiple passes catch errors earlier passes missed | REPLACE with REBUILD not PATCH. One pass produces the build. If quality is insufficient, rebuild from scratch (different builder, same spec + feedback). Not multi-pass; multi-attempt. |

### The Resolution Principle

**Separate PREVENTION from DETECTION.**

- Prevention lives in the spec (identity physics, perception thresholds, compositional frameworks). The builder internalizes it before building.
- Detection lives outside the spec (gates, PA audit, auditor deployment). Humans apply it after building.

The current spec conflates prevention and detection, putting both in front of the builder. The builder then optimizes for detection criteria (gates) rather than prevention principles (quality). Separation resolves the dual-function paradox: the protective function survives as detection infrastructure; the suppressive function is removed from builder awareness.

---

## PART 7: REMOVAL PROTOCOL -- Sequenced Implementation

### Phase 1: THE RECIPE SWITCH (Highest leverage, lowest risk)

**Remove:** S-01 (checklist format)
**Action:** Rewrite the conventions brief from verification language to recipe language. Same content, different framing. Every "must be" becomes "is." Every "verify" becomes "notice." Every "fail if" becomes a physics description.
**Verification:** Count verification verbs. Target: zero. Count physics descriptions. Target: all thresholds.
**Expected impact:** +0.5-1.0 PA-05 points.
**Risk:** LOW. The Middle experiment proved recipe format produces 4/4.

### Phase 2: THE PROHIBITION DIET (Second-highest leverage)

**Remove:** S-02 (prohibition overload) + S-19 (self-censorship)
**Action:** Reduce 55 prohibitions to 10 identity constraints + 4 perception thresholds. Rewrite prompt tone to zero-threat language.
**Verification:** Count prohibitions. Target: 14. Count threat words (FAIL, ABORT, kill). Target: zero.
**Expected impact:** +0.3-0.5 PA-05 points.
**Risk:** MEDIUM. Some prohibitions may be needed. A/B test against current spec.

### Phase 3: THE ROUTING FIX (Third-highest leverage)

**Remove:** S-03 (inverted routing) + S-09 (component deprivation) + S-13 (exemplar deprivation)
**Action:** Route mechanism-catalog.md, components.css, and CD-006 directly to builder.
**Verification:** Confirm builder reads all 3 reference files before building.
**Expected impact:** +0.3-0.5 PA-05 points.
**Risk:** LOW. Reference routing has no downside. More information is better when presented as vocabulary, not as constraints.

### Phase 4: THE ARCHITECTURE COLLAPSE (Structural change)

**Remove:** S-07 (multi-pass) + S-06 (zero communication) + S-11 (repair mode) + S-20 (fix cycle regression)
**Action:** Collapse to single-pass build. Replace fix cycles with rebuild cycles. Replace diagnostic feedback with generative feedback.
**Verification:** Confirm single builder, single pass. Confirm feedback format is generative.
**Expected impact:** +0.3-0.5 PA-05 points.
**Risk:** MEDIUM. Single-pass may miss errors that multi-pass catches. Rebuild cycles are more expensive than fix cycles. Cost-quality trade-off.

### Phase 5: THE CAPABILITY ADDITION (Positive scaffolding)

**Add:** Multi-coherence framework, structural metaphor instruction, density arc concept, content-form coupling, creative authority explicit statement.
**Action:** Write 50 lines of positive framework instructions.
**Verification:** Confirm all 5 frameworks present. Confirm recipe format (action verbs, sequenced steps).
**Expected impact:** +0.5-1.0 PA-05 points (this is the 30-40% of quality that requires ADDITIVE capability).
**Risk:** LOW. Adding positive capability has no suppressive downside.

### Phase 6: THE MEASUREMENT SEPARATION (Infrastructure change)

**Remove from builder:** S-18 (gate optimization), S-15 (position effect, already resolved by length reduction), S-16 (token budget anxiety), S-04 (sub-perceptual emphasis)
**Action:** Move all gates, PA deployment, auditor assignments, and verification checklists to a SEPARATE orchestrator-only document. Builder never sees them.
**Verification:** Confirm builder prompt contains zero gate references. Confirm orchestrator prompt contains all 21 gates.
**Expected impact:** +0.1-0.2 PA-05 points (minor, as most suppressive effect is already removed by Phases 1-4).
**Risk:** LOW. Measurement infrastructure is unchanged; it is merely not shown to the builder.

### Recommended Implementation Sequence

```
Phase 1 (Recipe Switch)    → TEST → measure PA-05
Phase 2 (Prohibition Diet) → TEST → measure PA-05
Phase 3 (Routing Fix)      → TEST → measure PA-05
Phase 4 (Arch Collapse)    → TEST → measure PA-05
Phase 5 (Capability Add)   → TEST → measure PA-05
Phase 6 (Measurement Sep)  → TEST → measure PA-05
```

Each phase is independently testable. Run Gas Town content through each phase's spec and measure PA-05. If any phase DEGRADES quality, investigate before proceeding to the next.

**The Q20 experiment** (described in handoff research) is exactly Phase 1 + Phase 2: add ONLY perception thresholds and recipe format to the original 963-line master prompt. If Q20 produces >= 3.0/4, the suppressor removal thesis is validated.

---

## PART 8: THE TWO-DOCUMENT ARCHITECTURE

The suppressor-free design produces not one document but two:

### Document 1: BUILDER SPEC (73 lines -- what the builder reads)

Contains: Identity physics + perception physics + composition framework + creative workflow. Zero verification language. Zero gates. Zero threat words. Pure recipe + physics.

**The builder reads:** This spec + components.css + mechanism-catalog.md + CD-006 + content.md.

### Document 2: ORCHESTRATOR SPEC (~200 lines -- what humans/orchestrator read)

Contains: All 21 programmatic gates (moved from builder to orchestrator). PA deployment protocol (9 auditors, question assignments). Rebuild cycle protocol (generative feedback format). Run manifest template. Success bar (PA-05 >= 3.5 AND Tier 5 >= 6/8). Team architecture (Opus builder, Sonnet gate runner).

**The orchestrator reads:** This spec. The orchestrator NEVER shows the builder any of this content.

### The Separation Principle

```
BUILDER sees:   73 lines of physics + recipe + framework
                + 3 reference files (components, mechanisms, crown jewel)
                + content markdown

ORCHESTRATOR sees: 200 lines of verification + deployment + feedback protocols

GATES run:      AFTER the build, by the orchestrator, invisible to builder

PA runs:        AFTER gates, by 9 independent auditors, invisible to builder

FEEDBACK:       Generative language only. "Auditors noticed X" not "Gate Y FAILED"
```

This architecture makes suppressor reintroduction structurally impossible. The builder CANNOT be put back into defensive mode because the builder never sees any defensive content. The measurement infrastructure CANNOT leak into the builder prompt because it lives in a separate document.

---

## PART 9: VALIDATION CRITERIA

### How to know the suppressor-free spec works

1. **PA-05 >= 3.5/4 on Gas Town content** (first run, no fix cycles)
   - Current spec achieves 3.5 with 1,188 lines. Suppressor-free should match or exceed with 73 lines.

2. **PA-05 >= 3.0/4 on RESEARCH-SYNTHESIS content** (first run)
   - Current spec achieved 2.5/4 with remediation. Suppressor-free should exceed.

3. **Zero soul violations** (both builds)
   - Identity physics must be as effective as identity prohibitions.

4. **CSS lines >= 800** (both builds)
   - Without token budget anxiety, the builder should produce adequate CSS volume.

5. **Builder _build-log.md shows generative reasoning, not defensive reasoning**
   - The log should contain phrases like "I chose X because..." not "I verified X against..."

6. **Build time <= 90 minutes** (single-pass)
   - Without multi-pass and fix cycles, build should be faster.

### How to know suppressor-free spec FAILS

1. **PA-05 < 2.5/4** -- suppressor removal caused regression. Investigate which removed suppressor was actually protective.
2. **Soul violations > 0** -- identity physics is weaker than identity prohibitions. Add back specific prohibitions that failed.
3. **CSS < 500 lines** -- builder self-limited without explicit volume permission. Strengthen the CSS volume statement.
4. **Container width != 940-960px** -- physics framing insufficient for this constraint. Add a post-build verification step (the ONE gate that should be visible to the builder).

---

## SUMMARY

| Dimension | Current Spec | Suppressor-Free Spec |
|-----------|-------------|---------------------|
| Total lines (builder-facing) | ~809 | 73 |
| Total lines (system) | 1,188 | 273 (73 builder + 200 orchestrator) |
| Suppressors active | 20 | 0 |
| Identity constraints | 55 prohibitions | 10 physics descriptions |
| Perception thresholds | 4 (as gates) | 4 (as physics) |
| Positive frameworks | ~50 lines | 50 lines |
| Builder reference files | 0 | 3 (components, mechanisms, CD-006) |
| Build architecture | 5-pass + fix cycles | Single-pass + rebuild cycles |
| Verification language | ~120 lines | 0 lines |
| Threat language | Throughout | 0 instances |
| Gate awareness (builder) | 21 gates visible | 0 gates visible |
| Expected PA-05 (Gas Town) | 3.5/4 | 3.0-3.5/4 (conservative), 3.5-4.0/4 (optimistic) |
| Risk-adjusted expectation | 3.5 (proven) | 3.2 (estimated, untested) |

**The central bet:** 73 lines of enabling physics + recipe + framework will produce equal or better quality than 1,188 lines of constraining rules + checklists + gates, because 70% of the quality gap between 1.5/4 and 4.0/4 is caused by suppression, not by missing capability.

**The testable prediction:** The Q20 experiment (add thresholds + recipe format to original prompt) will produce >= 3.0/4, validating Phases 1-2 of the removal protocol. If validated, Phases 3-6 complete the removal.

**The irreducible 73 lines are:**
- 15 lines of identity (what this world IS)
- 8 lines of calibration (how human eyes work)
- 50 lines of framework (multi-coherence, metaphor, density arc, content-form coupling, creative workflow)

Everything else the current pipeline produces is measurement infrastructure (valuable for humans, invisible to builder), redundant knowledge (already in Opus training data), or active suppression (reducing builder quality below native capability).

---

**END OF REPORT 04**

*The deepest insight: the suppressor-free specification is not a simplified version of the current specification. It is a fundamentally different GENRE. The current spec is an analytical document -- it describes what to verify. The suppressor-free spec is a creative document -- it describes what to build inside. The genre shift is the intervention. The content is the vehicle. Changing what the spec SAYS matters less than changing what the spec IS.*
