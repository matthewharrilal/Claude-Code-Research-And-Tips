# Reproducibility Analysis: Pipeline Codification, Quality Consistency, and Skill Modification

**Agent:** reproducibility-investigator
**Date:** 2026-02-15
**Task:** For each richness tier, investigate what REPRODUCIBILITY concretely looks like across 3 dimensions: pipeline codification, quality consistency, and skill modification.

**Sources Read:**
- tension-composition/SKILL.md (all 888 lines, Phases 0-4.2)
- perceptual-auditing/SKILL.md (all 736 lines, 48 PA questions + guardrails + modes)
- design-system/compositional-core/CLAUDE.md (494 lines, phase-gated protocol)
- Phase D FINAL-REPORT.md (1217 lines, all 5 variants + anti-gravity analysis)
- Phase D FINAL-DIGEST.md (286 lines, plain-English results)
- Phase D cross-variant-comparison.md (200+ lines, novelty scoring + perceptual)
- Phase D logs: variant-b-log.md (150+ lines), track-1-log.md (100+ lines)
- Phase D evaluation: all files listed
- richness-research/03-implications-landscape.md (408 lines)
- richness-research/04-metacognitive-analysis.md (359 lines)

---

## 0. TIER DEFINITIONS (Working Framework)

Before analyzing reproducibility, I need working tier definitions. These emerge from the evidence:

| Tier | Working Name | Mechanism Count | Metaphor Depth | Approximate Target |
|------|-------------|-----------------|----------------|-------------------|
| **Floor** | Track 1 Assembly | 3-5 (implicit) | None | API refs, changelogs, configs, short tutorials |
| **Middle** | Track 1 Enhanced | 5-7 (explicit) | Light (content-type pattern, not unique metaphor) | Medium tutorials, comparison guides, architecture overviews |
| **Ceiling** | Track 2 Standard | 6-10 (full pipeline) | Moderate (unique metaphor, 3-5 isomorphisms) | Decision guides, medium essays, onboarding flows |
| **Flagship** | Track 2 Showcase | 10-15+ (full pipeline + audit/fix cycles) | Deep (6+ isomorphisms, CSS-level penetration) | Long-form philosophical pieces, crown jewel content |

---

## 1. PER-TIER REPRODUCIBILITY MATRIX

### 1.1 FLOOR TIER (Track 1 Assembly)

#### Dimension 1: Pipeline Codification

**What is CODIFIABLE:**
- Everything. The Floor tier is almost entirely procedural.
- Read prohibitions.md and tokens.css (always-load protocol)
- Read components.css (component library)
- Read semantic-rules.md (when to use what component)
- Read responsive-strategy.md (768px breakpoint)
- Map content sections to component types (callout, code-block, table, file-tree, etc.)
- Apply components with token values (no custom CSS)
- Run soul check (border-radius: 0, box-shadow: none, palette correctness)
- Run guardrail check (940px container, 32px padding, CPL 45-80)

**What requires JUDGMENT:**
- Section-to-component mapping when content is ambiguous (is this a callout or a blockquote?)
- Density calibration: how much spacing between sections (within the 48-160px range)
- Typography sizing: choosing appropriate heading levels for nested content
- Color accent selection from the palette for different callout types

**Evidence from Phase D:**
Track 1 builder followed a fully procedural process (log shows Phase 0 setup, skip Phases 1-5, proceed directly to Phase 6 implementation). The FAILURE was not judgment-related -- it was protocol violation (didn't read prohibitions.md first, resulting in 5 critical violations). When protocol is followed, Track 1 assembly is fully reproducible.

**EXPECTED VARIANCE:** LOW. Two agents following the same Track 1 protocol on the same content should produce pages that differ only in minor spacing decisions and component ordering. The component library constrains choices to a finite set. Variance = which callout type they choose for ambiguous sections, exact spacing values within the allowed range.

**FAILURE MODES:**
1. **Protocol skip** (Phase D Track 1): Builder doesn't read always-load files first. Result: soul violations, off-palette colors, wrong spacing. FREQUENCY: 1/1 in Phase D (100%). FIX: Make always-load a BLOCKING gate (agent must output confirmation before proceeding).
2. **Container width miss**: Builder sets container too wide or too narrow. FREQUENCY: 1/1 in Phase D (Track 1 at 1052px, CPL 112-132). FIX: Add explicit container width rule to Track 1 workflow: `max-width: 960px; margin: 0 auto;`
3. **Component misselection**: Choosing wrong component type for content section. FREQUENCY: Low (Track 1 builder used 10 families correctly). FIX: Strengthen semantic-rules.md decision tree.

**PIPELINE BLUEPRINT (Floor):**
```
STEP 1: READ prohibitions.md → OUTPUT: "I confirm 8 absolute + 12 conditional prohibitions loaded"
STEP 2: READ tokens.css → OUTPUT: "I confirm 65 tokens loaded"
STEP 3: READ components.css + semantic-rules.md
STEP 4: READ content → CLASSIFY each section (NARRATIVE/REFERENCE/CODE/DATA/MIXED)
STEP 5: MAP sections to components (using semantic-rules.md decision tree)
STEP 6: BUILD HTML with:
  - max-width: 960px container
  - All token values from :root
  - Components from library
  - Responsive at 768px
STEP 7: VERIFY:
  - Soul: border-radius: 0, box-shadow: none, palette?
  - Guardrails: CPL 45-80, padding >=32px, section spacing >=48px
  - Ship verdict: Would I put my name on this?
```

**Total steps: 7. Total judgment decisions: ~3-5 minor ones. Total time: 15-25 min.**

---

#### Dimension 2: Quality Consistency

**Will every Floor page achieve roughly the same quality?**

YES, with high confidence. The component library constrains the solution space so tightly that variance is bounded. The only significant variable is the CONTENT itself -- a page with 12 code blocks and 3 tables will look different from a page with 2 callouts and a file tree, but both will be "correctly assembled."

**Quality floor evidence from Phase D:**
Track 1 builder achieved 79% library utilization with 10 component families. When the protocol is followed (which it was NOT in Phase D -- hence the failures), the assembly produces clean, structured, scannable output. Judge B rated it "Practical, structured, thorough."

**Predicted quality band:** 14-17/20 (decent to good). The ceiling is limited because assembly produces no metaphor, no unique spatial vocabulary, no atmospheric depth. The floor is high because the component library prevents most failure modes.

**Risk factor:** Content that doesn't map cleanly to existing components. Phase D showed 56% of components were UNTESTED. If content requires a component type that doesn't exist in the library, the builder must improvise -- breaking reproducibility.

---

#### Dimension 3: Skill Modification

**What changes in the tension-composition skill for Floor tier?**

NOTHING. Floor tier does NOT use the tension-composition skill. It uses ONLY the component library + semantic rules.

**What changes in the perceptual-auditing skill for Floor tier?**

MINOR. Floor tier uses Mode 1 (Embedded, 90 seconds):
- PA-01 through PA-05 only
- No metaphor-awareness questions (PA-42, PA-43, PA-44 irrelevant)
- No scroll-through protocol (quick visual check sufficient)

**Specific change proposal:**
Add to perceptual-auditing skill, Mode 1 section:

> **For Track 1 (Assembly) pages:** Skip PA-42 through PA-44 (metaphor questions). Add: "Does every component feel like it belongs to the same family?" (component consistency check).

---

### 1.2 MIDDLE TIER (Track 1 Enhanced)

#### Dimension 1: Pipeline Codification

**What is CODIFIABLE:**
- Everything from Floor tier PLUS:
- Content-type-to-pattern mapping (tutorial = CRESCENDO, reference = F-PATTERN, overview = bento grid)
- Density rhythm application: sparse opening, dense middle, recovery breaths
- Typography trinity deployment: Instrument Serif for H1/H2, Inter for body, JetBrains Mono for code
- Section spacing calibration: larger gaps between major sections, smaller within

**What requires JUDGMENT:**
- Which density pattern fits THIS content? (CRESCENDO vs PULSE vs SPIRAL)
- Where do recovery breaths go? (After every 3 sections? After the densest section? Content-dependent)
- How much heading scale variation? (1.3x to 3.5x range is wide)
- Background zone alternation: which sections get which background shade?

**Evidence from Phase D:**
No pure Middle-tier page was built in Phase D. But Track 1 builder's log shows it attempted basic rhythm (component ordering) without explicit density pattern application. The MISSED OPPORTUNITY was: Track 1 content had natural CRESCENDO structure (overview -> comparison -> details -> decision) but the builder laid it out linearly without amplifying the rhythm.

**EXPECTED VARIANCE:** MODERATE. Two agents will likely choose different density patterns and different recovery breath placement. The page will feel "designed" in both cases, but the specific rhythm will differ. This is acceptable variance -- both pages will be above the engagement threshold.

**FAILURE MODES:**
1. **Pattern selection paralysis**: Agent can't decide which density pattern fits. FREQUENCY: Unknown (not tested in Phase D). FIX: Add decision tree to CLAUDE.md:
   ```
   Tutorial (sequential steps) → CRESCENDO (build to climax at 60%)
   Reference (lookup-oriented) → F-PATTERN (scannable hierarchy)
   Overview (many equal items) → BENTO GRID (spatial isolation)
   Narrative (story arc) → PULSE (tension/release alternation)
   ```
2. **Rhythm too subtle**: Agent applies density patterns but with insufficient contrast (40px vs 48px instead of 32px vs 80px). FREQUENCY: High (agents tend toward uniformity). FIX: Add minimum contrast rule: "Sparse zones must be >=2x padding of dense zones."
3. **Background zone confusion**: Too many background shades create patchwork. FREQUENCY: Medium. FIX: Limit to 3 background values maximum (cream, white, near-black for headers only).

**PIPELINE BLUEPRINT (Middle):**
```
STEPS 1-5: Same as Floor
STEP 5.5: CLASSIFY content rhythm:
  - Sequential? → CRESCENDO
  - Lookup? → F-PATTERN
  - Multi-item? → BENTO GRID
  - Story? → PULSE
STEP 6: BUILD with Floor components PLUS:
  - Apply density pattern (sparse opening, dense climax, recovery endings)
  - Alternate backgrounds (3 values max: cream/white/header-dark)
  - Section spacing variation (48px-80px range, NOT uniform)
  - Typography hierarchy (H1 at 2.5x body, H2 at 1.8x, H3 at 1.4x)
STEP 7: VERIFY (Floor checks PLUS):
  - Density contrast: sparse padding >= 2x dense padding?
  - Background zones: <= 3 values?
  - Visual rhythm: does squint test show purposeful variation?
```

**Total steps: 8. Total judgment decisions: ~5-8. Total time: 25-40 min.**

---

#### Dimension 2: Quality Consistency

**Will every Middle page achieve roughly the same quality?**

MOSTLY YES, but with wider variance than Floor. The density pattern selection introduces a branching point: a CRESCENDO page and a BENTO GRID page look very different from each other. Within a given pattern, consistency should be high.

**Predicted quality band:** 16-18/20. The rhythmic variation and typography deployment lift quality above Floor. The lack of unique metaphor keeps the ceiling below Ceiling/Flagship.

**Risk factor:** Content that doesn't clearly map to any standard pattern. The "contested middle ground" from the implications landscape (medium-length tutorials, comparison guides, architecture overviews) may not have obvious CRESCENDO or F-PATTERN fit.

---

#### Dimension 3: Skill Modification

**What changes in the tension-composition skill for Middle tier?**

Middle tier does NOT run the full tension-composition pipeline. It uses a SHORTENED version:

**Specific change proposal for tension-composition SKILL.md:**

At the beginning of the skill (after the Critical Principle block, before Phase 0), add a new section:

```markdown
## Tier-Based Pipeline Selection

Before running the full pipeline, classify the target tier:

### MIDDLE TIER (Track 1 Enhanced)
If content has been classified as Middle tier:
- SKIP Phases 1-3 entirely (no multi-axis questioning, no tension derivation, no metaphor collapse)
- SKIP Phase 3.5 (no divergence gate -- no metaphor to check)
- GO DIRECTLY to Phase 4.0 (Perceptual Guardrails) with this modification:
  - Apply content-type pattern (CRESCENDO/F-PATTERN/BENTO/PULSE) instead of metaphor
  - Use standard density rhythm, not metaphor-derived rhythm
  - Deploy 5-7 mechanisms from mechanism-catalog.md (no restriction on reading order)
- Proceed to Phase 5: Implementation with standard vocabulary (no metaphor vocabulary)

### Why this is valid:
Middle tier pages have genuine spatial richness (density variation, typography deployment,
background alternation) WITHOUT requiring the irreducible creative step of metaphor selection.
The pipeline's Phases 1-3 exist to derive a metaphor -- if no metaphor is needed, they are waste.
```

**What changes in the perceptual-auditing skill for Middle tier?**

Use Mode 2 (Quick, 3 minutes):
- PA-01 through PA-05 at 1440px and 768px
- Cold Look protocol
- Skip metaphor questions (PA-42-44)
- Add: "Does the density rhythm have purposeful variation?" (PA-17 rhythm question)

**Specific change proposal for perceptual-auditing SKILL.md:**

In Mode 2 section, add:

```markdown
### Mode 2 Enhancement for Middle Tier
When auditing Middle-tier (Track 1 Enhanced) pages:
- Run PA-01 through PA-05 at BOTH 1440px AND 768px
- ADD PA-17 (visual rhythm check): "Is there a visual rhythm, or random?"
- ADD PA-30 (desktop utilization): "Does the layout feel DESIGNED for this width?"
- SKIP PA-42 through PA-44 (metaphor questions -- no metaphor present)
- Total questions: 7 at each viewport = 14 questions total
```

---

### 1.3 CEILING TIER (Track 2 Standard)

#### Dimension 1: Pipeline Codification

**What is CODIFIABLE:**
- Full tension-composition pipeline (Phases 0-7)
- Always-load protocol (prohibitions + tokens)
- Content assessment (Phase 0: type classification, scope assessment, section identification)
- Library prohibition (Phase 0D: case-studies forbidden during Phases 0-3)
- Multi-axis questioning structure (Phase 1: Core Four always, Extended Five always, Structural Triggers conditional)
- Tension derivation framework (Phase 2: Side A/Side B, Addition Test, BECAUSE test, Richness Formula)
- Search query generation (Phase 3: structural overlap extraction, domain search menu)
- Composite scoring (Phase 3.5: Resolution + Isomorphism + Resonance + Feasibility + Risk + Cost)
- Guardrail floors (Phase 4.0: 940px container, 32px padding, 40% compression, CPL 45-80)
- Mechanism extraction protocol (Phase 4: 3-5 techniques from catalog, not implementations)
- Phase 3.5 gate (divergence check: 5 dimensions, 3/5 threshold)

**What requires JUDGMENT (THE CRITICAL GAP):**
1. **Axis richness assessment** (Phase 1): Is FEEL HIGH or MEDIUM for this content? Two agents will score differently. This propagates through the entire pipeline -- different axis scores lead to different tension selections, different metaphor candidates, different compositions.
2. **The irreducible creative step** (Phase 3.4): "What real-world domain naturally exhibits [OVERLAP PROPERTIES]?" This is explicitly acknowledged as non-procedural in the skill: "The protocol cannot provide the metaphor. It CAN constrain the search space."
3. **Structural isomorphism assessment** (Phase 3.5B): How many independent property mappings? Two agents may count differently (is "layered backgrounds" + "darkening depth" one mapping or two?).
4. **Perceptual risk scoring** (Phase 3.5E): Risk questions are scored LOW/MEDIUM/HIGH. Two agents will score differently.
5. **Metaphor-to-CSS translation** (Phase 4.1-4.2): The 5-category taxonomy (Spatial, Temporal, Material, Behavioral, Relational) is structured, but extracting properties from a metaphor is creative, not procedural.

**Evidence from Phase D:**
Variants A and B both ran the full pipeline on identical content. Results:
- Variant A chose Architectural Blueprint (3/5 novelty)
- Variant B chose Scientific Calibration Laboratory (4/5 novelty)
- Both used 6 mechanisms (same count, different selections)
- Variant A scored 20/20 PA, Variant B scored 19/20 PA
- Variant A took 117 min, Variant B took 86 min

This is the KEY reproducibility evidence: SAME content + SAME pipeline = DIFFERENT metaphors but COMPARABLE quality. The pipeline produces CONSISTENT QUALITY despite VARIABLE OUTPUTS. This is the correct behavior for a creative pipeline.

**EXPECTED VARIANCE:** HIGH for specific outputs (metaphor, vocabulary, spatial topology). MODERATE for quality (both within 18-20/20 range). This is acceptable because the variance is in the CREATIVE dimension, not the QUALITY dimension.

**FAILURE MODES:**
1. **Metaphor forcing** (Phase 3): Agent can't find a natural metaphor and forces one. Result: thin isomorphism (2-3 instead of 4+), decorative rather than structural metaphor. FREQUENCY: Predicted HIGH for content without obvious structural tension. FIX: Add explicit exit ramp -- if no candidate scores Isomorphism >= 4, DOWNGRADE to Middle tier.
2. **Container width violation** (Phase 4): Metaphor-driven narrow containers (geological core sample = cylindrical = narrow). FREQUENCY: 2/4 Track 2 variants in Phase D. FIX: Already in skill Phase 4.0 guardrails, but needs STRONGER enforcement: "Container width 940-960px is NON-NEGOTIABLE. Metaphor must adapt to this width, not the reverse."
3. **Library convergence** despite prohibition (R6 failure): Agent independently arrives at same metaphor family as library. FREQUENCY: 1/4 Track 2 variants (Variant C converged to geological despite anti-gravity). FIX: Strengthen Phase 3.5 gate (see skill modification section below).
4. **Perceptual weight imbalance**: Agent deploys heavy visual elements (pure black callouts, dark headers) that break warm palette. FREQUENCY: 2/4 Track 2 variants (A and D). FIX: Add to Phase 4.0 guardrails: "No background-color: #000000 or #1A1A1A zones larger than 120px vertical height."
5. **CPL violation from wide containers**: Container too wide for prose content. FREQUENCY: 1/4 (Variant A at ~96 CPL). FIX: Already in guardrails but needs prominence.

**PIPELINE BLUEPRINT (Ceiling):**
```
STEP 1-2: Always-load (prohibitions + tokens) with confirmation gate
STEP 3: Content assessment (Phase 0A-0C) + Library prohibition acknowledgment (0D)
STEP 4: Multi-axis questioning (Phase 1):
  - Core Four (FEEL/UNDERSTAND/DO/BECOME) with richness scoring
  - Extended Five (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE) mark LOW YIELD or score
  - Structural Triggers (0-5 conditional axes)
STEP 5: Tension derivation (Phase 2):
  - For each HIGH-yield axis: Side A needs vs Side B constraints
  - Addition Test (genuine vs cosmetic)
  - BECAUSE test (content-driven need)
  - Richness Formula (Opposition x Overlap x Width)
  - Select highest-scoring tension
STEP 6: Metaphor collapse (Phase 3):
  - Extract structural properties from both sides
  - Calculate structural overlap
  - Generate search query
  - Apply 3 search heuristics (constraint scan, content resonance, emotional valence)
  - Score 2-4 candidates on 6 dimensions (Resolution, Isomorphism, Resonance, Feasibility, Risk, Cost)
STEP 7: Metaphor commitment (Phase 3.5):
  - State committed metaphor
  - Document justification
  - Verify independence
  - If library overlap >40%: divergence table (5 dimensions, >=3/5 different)
  - If divergence fails: REGENERATE with constraint
STEP 8: Mechanism extraction (Phase 4):
  - Read mechanism-catalog.md
  - Extract 3-5 relevant techniques
  - Map metaphor properties across 5 categories (Spatial/Temporal/Material/Behavioral/Relational)
  - Apply guardrail floors (940px, 32px, 40%, CPL 45-80)
STEP 9: Implementation (Phase 5/6):
  - Token values from :root
  - Mechanisms adapted to metaphor
  - Metaphor vocabulary in class names
  - Responsive at 768px
STEP 10: Verification (Phase 7):
  - Soul check
  - Guardrail check
  - PA-01 through PA-05 minimum (Mode 1)
  - Ship verdict
```

**Total steps: 10. Total judgment decisions: ~15-25 significant ones. Total time: 45-90 min.**

---

#### Dimension 2: Quality Consistency

**Will every Ceiling page achieve roughly the same quality?**

MOSTLY YES for QUALITY, NO for SPECIFIC DESIGN. Phase D showed that Variants A and B both achieved 19-20/20 PA scores despite completely different metaphors. The pipeline produces quality consistency through its gates and guardrails, while allowing creative variance in the specific metaphor and spatial vocabulary.

**Predicted quality band:** 17-19/20. The metaphor deployment and mechanism density lift quality above Middle. Occasional perceptual weight issues or CPL violations may drop individual pages to 16.

**Risk factor:** Content with ambiguous or weak structural tension. When tension is genuinely present, the pipeline works well (Variants A, B). When tension is marginal, the metaphor may be forced (predicted for some production content). Forced metaphors produce quality around 14-16 rather than 17-19.

**The key insight from Phase D:** Variant B (best performer) achieved quality through a NOVEL metaphor (scientific lab, 4/5 novelty) that was NATURALLY DERIVED from the content's trust-tier structure. Variant D (library copy, 0/5 novelty) achieved high perceptual quality but FAILED on container width -- suggesting that library patterns have embedded biases (geological = narrow cylinder) that the agent doesn't override.

**Quality consistency prediction:** 70-80% of Ceiling pages will fall in the 17-19 band. 15-20% will fall to 15-16 (forced metaphor or missed guardrail). 5-10% may require downgrade to Middle tier.

---

#### Dimension 3: Skill Modification

**Tension-composition skill changes for Ceiling tier:**

The current skill is already designed for Ceiling tier. The following modifications address Phase D failure modes:

**MODIFICATION 1: Strengthen Phase 3.5 gate (address R6 failure)**

Current Phase 3.5C (line 665-677):
```
3. **Does this metaphor appear in `/case-studies/_INDEX.md`?** (DO NOT READ full case studies, only titles)
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4
```

**Proposed replacement:**

```markdown
3. **Does this metaphor share a DOMAIN FAMILY with any entry in `/case-studies/_INDEX.md`?**
   - Read _INDEX.md titles ONLY
   - Check: Does my metaphor belong to the same DOMAIN FAMILY as any listed?
     (e.g., geological + geological = SAME FAMILY, even if sedimentary vs metamorphic)
   - If NO: Proceed to Phase 4
   - If YES (same family): MANDATORY divergence justification (Step 3.5D)
   - **CRITICAL:** "Same family" includes:
     - Same scientific discipline (geological, botanical, astronomical)
     - Same professional domain (architectural, laboratory, military)
     - Same cultural domain (culinary, musical, theatrical)
   - **The test:** Would a layperson describe both metaphors using the same one-word category?
     (OD-004 "geology" + Variant C "geology" = YES = same family)
```

**MODIFICATION 2: Strengthen divergence table consequence (make it BLOCKING, not advisory)**

Current Phase 3.5D passing criteria (line 694-697):
```
**Passing criteria:** ALL answers must favor independent convergence.
**If justification fails:** Regenerate metaphor with explicit constraint
```

**Proposed replacement:**

```markdown
**Passing criteria for same-family convergence:**
- MUST score DIFFERENT on >= 3/5 dimensions
- MUST have at least 2 STRUCTURAL differences (not just vocabulary/naming)
- If scoring <3/5 different: REGENERATION IS MANDATORY (no justification option)
- Regeneration constraint: "My metaphor MUST NOT be from the [family] domain."

**Why no justification option for <3/5:**
Phase D Variant C demonstrated that agents can produce compelling-sounding justifications
for convergence while the visual output shows 85% overlap. Justification is a reasoning
task that agents excel at; divergence is a creative task that requires actual novelty.
Removing the justification escape route forces genuine creative work.
```

**MODIFICATION 3: Add explicit container width enforcement in Phase 4.0**

Current Phase 4.0 (line 720-724) lists container width as a guardrail but without a specific enforcement mechanism.

**Add after Phase 4.0 guardrail table:**

```markdown
### Container Width Implementation Rule (NON-NEGOTIABLE)

Your HTML MUST include:
```css
.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px; /* minimum horizontal padding */
}
```

**No metaphor may override this.** A geological "core sample" uses 960px width with
padding variation to suggest narrowing, NOT a narrower container. A "manuscript page"
uses 960px width with asymmetric margins, NOT a narrower container.

**Phase D evidence:** 2/4 Track 2 variants violated container width because their metaphors
suggested narrow forms (cylindrical core sample, bound page). The metaphor was correct;
the CSS implementation was wrong. The fix is to express narrowing through INTERNAL spacing,
not external width reduction.
```

**MODIFICATION 4: Add pure-black zone size limit**

**Add to Phase 4.0 guardrail table:**

```markdown
| Max dark zone height | 120px | — | — | Dark headers that dominate viewport; "oppressive" first impression |
```

```markdown
### Dark Zone Implementation Rule

Background colors of #1A1A1A or darker may span at most 120px of vertical height at 1440px.
This prevents the "crushing black header" effect observed in Phase D Variants A and D, where
judges described large dark zones as "oppressive," "alien," and "like a system error dialog."

If your metaphor requires a dark header, use a SUBTLE dark (#2A2A2A or lighter) with limited
height, or use the warm dark palette: background: #1A1A1A with --color-background: #FEF9F5 text.
```

**MODIFICATION 5: Add per-phase time budget to prevent over-engineering**

**Add to the Phase 0 Content Assessment section (after Step 0C, around line 60):**

```markdown
### Step 0E: Time Budget (CEILING TIER)

Phase-by-phase time allocation (total: 60-90 min):
- Phase 0 (Setup): 5 min max
- Phase 1 (Multi-Axis): 10 min max
- Phase 2 (Tension): 8 min max
- Phase 3 (Metaphor): 12 min max (including candidate scoring)
- Phase 3.5 (Gate): 5 min max
- Phase 4 (Mechanisms): 8 min max
- Phase 5/6 (Implementation): 15-25 min
- Phase 7 (Verification): 5-10 min

If ANY phase exceeds its budget by 50%, STOP and evaluate:
- Am I overthinking? (Reduce axis count, fewer candidates)
- Is this content actually Ceiling tier? (Maybe Middle is appropriate)
- Am I forcing a metaphor? (Consider the exit ramp to Middle)
```

**Perceptual-auditing skill changes for Ceiling tier:**

Use Mode 2 (Quick) or Mode 3 (Standard) depending on stakes:
- Low-stakes Ceiling pages: Mode 2 (PA-01-05 at 2 viewports + PA-17 + PA-30 + PA-42-44)
- High-stakes Ceiling pages: Mode 3 (full PA-01-PA-45)

**Add to Mode 2:**

```markdown
### Mode 2 Enhancement for Ceiling Tier
When auditing Ceiling-tier (Track 2 Standard) pages:
- Run PA-01 through PA-05 at BOTH 1440px AND 768px
- ADD PA-17 (rhythm), PA-30 (desktop utilization), PA-44 (implicit metaphor check)
- ADD container width measurement: computed style of main container >= 940px?
- SKIP full scroll-through (Mode 2 is quick check)
- Total: 8 questions at each viewport = 16 questions
```

---

### 1.4 FLAGSHIP TIER (Track 2 Showcase)

#### Dimension 1: Pipeline Codification

**What is CODIFIABLE:**
Everything from Ceiling tier PLUS:
- Multi-pass audit/fix cycles (build -> audit -> fix -> re-audit)
- Full Mode 3 or Mode 4 perceptual audit (48 PA questions at 2-3 viewports)
- Cross-page consistency verification (against sibling pages)
- Discovery documentation (metaphor record for future reference)
- Case study comparison (Phase 5 divergence verification)

**What requires JUDGMENT (THE EXPANDED GAP):**
All Ceiling judgment calls PLUS:
1. **Metaphor depth calibration**: How deeply should CSS encode the metaphor? At what point does CSS-level encoding become maintenance burden? Flagship pages should push this boundary, but the boundary is fuzzy.
2. **Component invention**: Flagship pages may require components NOT in the library (confidence switcher in OD-004, geological column minimap). The decision to invent vs adapt is judgment-heavy.
3. **Scroll-through narrative**: Does the page tell a STORY when scrolled? This is architectural, not component-level. Two agents will compose different scroll narratives.
4. **Fix prioritization**: After audit, which findings to fix first? Especially when metaphor bias conflicts with perceptual preference (acceptable compromise vs unacceptable cost).
5. **When to stop**: Flagship pages could iterate indefinitely. The stopping criterion (Mode 3: "Would you ship?" or Mode 4: full 48 PA + adversarial) is clear, but the FIX cycle is open-ended.

**Evidence from Phase D:**
No true Flagship page was built in Phase D (single-pass builds, 30-40 min). The closest comparison is to the original showcase explorations (DD/OD/CD), which were multi-hour, multi-pass builds with dedicated audit teams. These are NOT reproducible by a single agent in a single pass -- they require the orchestration infrastructure (multiple agents, sequential waves, dedicated auditors).

**EXPECTED VARIANCE:** VERY HIGH for specific outputs. Two Flagship pages on the same content will look dramatically different (different metaphor, different CSS vocabulary, different spatial topology, different scroll narrative). Quality variance should still be moderate (both within 18-20/20 range) because the multi-pass audit/fix cycle catches failures.

**FAILURE MODES:**
1. **Over-engineering**: Agent spends 3+ hours on a page that doesn't benefit from Flagship treatment. FREQUENCY: High (agent can always add more detail). FIX: Hard time budget of 3 hours max including audit/fix.
2. **Audit/fix loop divergence**: Each fix introduces new perceptual issues. Fixes oscillate instead of converging. FREQUENCY: Low but possible (not observed in Phase D). FIX: Maximum 2 fix cycles. If still failing after 2 cycles, accept or downgrade.
3. **Metaphor-content mismatch**: Deep metaphor encoding for content that doesn't reward depth. Result: impressive CSS, confusing reader experience. FREQUENCY: Predicted for some production content. FIX: The metacognitive question from 04-metacognitive-analysis.md: "Did any reader comprehend the content BETTER because of the metaphor? Or did they comprehend the metaphor WHILE the content was secondary?"
4. **Accessibility debt**: Complex metaphor-derived CSS creates 2000+ lines of unique, non-reusable code. Screen reader cognitive load increases. FREQUENCY: High at scale. FIX: Accessibility audit as mandatory Flagship gate (not currently in either skill).
5. **Maintenance coupling**: Content changes require CSS changes because CSS ENCODES content structure. FREQUENCY: Guaranteed for content that evolves. FIX: Accept as inherent trade-off of Flagship tier. Document the metaphor encoding so future agents can understand the coupling.

**PIPELINE BLUEPRINT (Flagship):**
```
PHASE A: CEILING PIPELINE (Steps 1-10 from Ceiling blueprint)
PHASE B: FULL PERCEPTUAL AUDIT
  - Mode 3 (Standard, 30 min, 4 agents) or Mode 4 (Standalone, 60 min, 7 agents)
  - 48 PA questions at 1440px + 768px
  - Cold Look + Scroll-Through protocols
  - Lock Sheet (LOCKED vs CHALLENGEABLE findings)
PHASE C: FIX CYCLE (max 2 iterations)
  - Fix top 3-5 findings from audit
  - Re-verify each fix with targeted PA questions
  - If new issues: assess whether trade-off is acceptable
PHASE D: VERIFICATION
  - Programmatic audit (19 binary checks)
  - Final Cold Look at 1440px
  - Ship verdict from fresh-eyes judge
PHASE E: DOCUMENTATION
  - Metaphor record (tension, search query, domain, isomorphisms)
  - Perceptual cost log (what trade-offs were accepted)
  - Maintenance notes (which CSS classes encode which content properties)
```

**Total phases: 5. Total judgment decisions: 30-50. Total time: 3-5 hours.**

---

#### Dimension 2: Quality Consistency

**Will every Flagship page achieve roughly the same quality?**

QUALITY yes, EXPERIENCE no. The multi-pass audit/fix cycle enforces a quality floor. But the specific experience of each Flagship page will be unique (different metaphor, different spatial vocabulary, different scroll narrative). This is the INTENDED outcome -- Flagship pages are "places you want to spend time in," and each place is unique.

**Predicted quality band:** 18-20/20. The audit/fix cycle catches most issues. The remaining variance is between "very good" and "exceptional."

**Risk factor:** The greatest risk is NOT quality failure but UNNECESSARY richness -- spending 3-5 hours on a page that would serve readers equally well at Ceiling tier in 60-90 minutes. The tier classification decision (Ceiling vs Flagship) is the highest-leverage judgment call in the entire system.

---

#### Dimension 3: Skill Modification

**Tension-composition skill changes for Flagship tier:**

The current skill is designed for Ceiling/Flagship. For Flagship specifically:

**MODIFICATION 6: Add Flagship-only Phase 5 (case study comparison)**

Current Phase 5 in CLAUDE.md (line 185-194) makes case study comparison optional. For Flagship, make it MANDATORY:

```markdown
### Phase 5: Case Study Comparison (MANDATORY for Flagship)

After Phase 4 (mechanism extraction), before implementation:
1. Read case-studies/_INDEX.md (titles + tensions)
2. Select 2-3 case studies MOST similar to your metaphor
3. Read selected case studies IN FULL (not just titles)
4. For EACH similar case study, document:
   - What they did well (adapt for your page)
   - What they did poorly (avoid for your page)
   - Which mechanisms overlap with yours (verify you're not copying)
5. Complete divergence table if ANY overlap exceeds 40%

**Why mandatory for Flagship:**
Flagship pages represent the design system's best work. They should demonstrate awareness
of prior art and conscious divergence. Ceiling pages can skip this step because speed matters
more than exhaustive comparison.
```

**MODIFICATION 7: Add Flagship audit budget to skill**

**Add to perceptual-auditing skill, after Mode 4 definition:**

```markdown
### Flagship Audit Protocol
For pages classified as Flagship tier:
- MINIMUM: Mode 3 (Standard, 30 min, PA-01 through PA-45)
- RECOMMENDED: Mode 4 (Standalone, 60 min, all 48 PA questions at 3 viewports)
- MANDATORY additions:
  - PA-42 (metaphor-driven compromise)
  - PA-43 (metaphor perceptual cost)
  - PA-44 (implicit vs explicit metaphor)
  - PA-47 (visual novelty decay in second half)
  - PA-48 (comparative quality assessment)
- Accessibility spot-check: WCAG 2.1 SC 1.4.12 line-height, SC 1.4.3 contrast
- Performance note: total CSS lines, estimated first-load size
```

---

## 2. QUALITY VARIANCE PREDICTIONS BASED ON PHASE D EVIDENCE

### 2.1 The Phase D Variance Spectrum

Phase D gave us 5 data points on the same content:

| Page | Quality | Novelty | Time | Verdict |
|------|---------|---------|------|---------|
| Track 1 | 11/19 programmatic | N/A | 8 min | FAIL (protocol skip) |
| Variant A | 15/19 | 3/5 | 117 min | CONDITIONAL FAIL |
| Variant B | 18/19 | 4/5 | 86 min | CONDITIONAL PASS |
| Variant C | 17/19 | 1/5 | 78 min | FAIL (convergence) |
| Variant D | 18/19 | 0/5 | 37 min | FAIL (intentional copy) |

**Key insight:** Quality (programmatic pass rate) clusters tightly (15-18/19) across all Track 2 variants. The guardrails work. Novelty varies wildly (0-4/5). The creative step is where variance lives.

### 2.2 Predicted Variance by Tier at Scale

**Floor (Track 1 Assembly):**
- Quality variance: TIGHT (14-17/20, sigma ~1)
- Creative variance: NONE (no metaphor)
- Failure rate: ~10% (protocol skips, component misselection)
- Fix cost: LOW (2-5 min per fix)

**Middle (Track 1 Enhanced):**
- Quality variance: MODERATE (15-18/20, sigma ~1.5)
- Creative variance: LOW (pattern selection varies, but within known patterns)
- Failure rate: ~15% (pattern mismatch, rhythm too subtle)
- Fix cost: LOW-MODERATE (5-10 min per fix)

**Ceiling (Track 2 Standard):**
- Quality variance: MODERATE (16-19/20, sigma ~1.5)
- Creative variance: HIGH (different metaphors, same quality band)
- Failure rate: ~25% (forced metaphor, container width, CPL)
- Fix cost: MODERATE (10-20 min per fix, may require metaphor adjustment)

**Flagship (Track 2 Showcase):**
- Quality variance: TIGHT-HIGH (18-20/20, sigma ~1, due to multi-pass audit)
- Creative variance: VERY HIGH (unique pages)
- Failure rate: ~10% (caught by audit, but 2-3 fix cycles needed for ~30%)
- Fix cost: HIGH (30-60 min per fix cycle)

### 2.3 The Variance Paradox

The highest-quality tier (Flagship) has the TIGHTEST quality variance because multi-pass auditing catches failures. But it also has the HIGHEST creative variance because the full pipeline encourages unique metaphor derivation.

The lowest-quality tier (Floor) also has TIGHT quality variance because the component library constrains choices. But it has ZERO creative variance.

The problematic zone is CEILING -- moderate quality variance AND high creative variance AND no mandatory audit/fix cycle. This is where the most failures will occur at scale.

**Recommendation:** Either add mandatory Mode 2 audit to all Ceiling pages (adding ~5 min per page) or accept that ~25% of Ceiling pages will need post-build fixes.

---

## 3. FAILURE MODE CATALOG

### 3.1 Cross-Tier Failure Modes

| ID | Failure Mode | Tier(s) | Frequency | Root Cause | Fix |
|----|-------------|---------|-----------|------------|-----|
| F-01 | Protocol skip (always-load not read) | ALL | Phase D: 1/5 (20%) | No blocking gate | Make always-load confirmation a GATE |
| F-02 | Container width violation | Ceiling, Flagship | Phase D: 3/5 (60%) | Metaphor suggests narrow form | NON-NEGOTIABLE 940-960px rule |
| F-03 | CPL exceeds 80 | Floor, Middle, Ceiling | Phase D: 2/5 (40%) | Container too wide or font too small | CPL check in verification step |
| F-04 | Pure black zone dominance | Ceiling, Flagship | Phase D: 2/5 (40%) | Dark header metaphor bias | 120px max dark zone height |
| F-05 | Library convergence | Ceiling, Flagship | Phase D: 1/4 (25%) | Indirect library exposure | Strengthen Phase 3.5 family check |

### 3.2 Tier-Specific Failure Modes

| ID | Failure Mode | Tier | Frequency | Root Cause | Fix |
|----|-------------|------|-----------|------------|-----|
| F-06 | Component type not in library | Floor | Predicted: 10-15% | Library covers ~44% of inventory | Expand library OR accept Track 1 limitations |
| F-07 | Pattern selection paralysis | Middle | Predicted: 15-20% | Content doesn't clearly map to CRESCENDO/F-PATTERN/BENTO/PULSE | Add decision tree with fallback: "When unclear, use CRESCENDO" |
| F-08 | Forced metaphor (thin isomorphism) | Ceiling | Predicted: 20-30% | Content lacks genuine tension | Exit ramp: downgrade to Middle if Isomorphism < 4 |
| F-09 | Over-engineering | Flagship | Predicted: 30-40% | No time budget, agent can always add more | Hard 3-hour time cap |
| F-10 | Metaphor exhaustion at scale | Ceiling, Flagship | Predicted: after page 40-50 | Finite domain space for angular/flat system | Relax R6 to allow family reuse with different expression |

---

## 4. THE JUDGMENT GAP: WHAT CANNOT BE CODIFIED

### 4.1 The Irreducible Creative Decisions

Three decisions in the pipeline cannot be reduced to rules:

**Decision 1: Axis Richness Scoring (Phase 1)**
- "Is the FEEL axis HIGH, MEDIUM, or LOW richness for THIS content?"
- This requires reading the content deeply and assessing whether emotional needs create genuine tension against the system's personality
- Two skilled agents will score differently ~40% of the time
- Impact: Different axis scores lead to different tension priorities, cascading through the entire pipeline

**Decision 2: Metaphor Selection (Phase 3.4)**
- "What real-world domain naturally exhibits these structural properties?"
- This is the creative step the skill explicitly cannot proceduralize
- Two skilled agents will select different metaphors ~80% of the time
- Impact: Different metaphors produce completely different pages (but similar quality -- Phase D evidence)

**Decision 3: Metaphor-to-CSS Translation (Phase 4.1)**
- "How does this metaphor's 'depth' translate to CSS background colors?"
- The 5-category taxonomy structures this, but the specific mappings are creative
- Two skilled agents will create different CSS implementations ~90% of the time
- Impact: Different visual implementations of the same metaphor concept

### 4.2 How to Handle the Judgment Gap

**Strategy 1: CONSTRAIN the input space (reduces judgment by narrowing options)**
- For Ceiling tier: Limit to 4 metaphor candidates max (currently unlimited)
- For Ceiling tier: Limit mechanism selection to 3-5 (currently "sample 2-4 most relevant")
- For Middle tier: Fix pattern selection to decision tree (no open-ended choice)

**Strategy 2: VALIDATE the output (catches judgment errors post-hoc)**
- Mandatory Mode 2 audit for all Ceiling pages (currently optional)
- Mandatory container width measurement (automated, not judgment-based)
- Mandatory CPL measurement (automated)

**Strategy 3: DOCUMENT the judgment (enables learning from decisions)**
- Metaphor record library grows with each page (currently planned for Flagship only)
- Extend to Ceiling: brief metaphor record (tension, domain, 3 isomorphisms, quality score)
- After 20+ records: patterns emerge that REDUCE future judgment (same tension profile -> proven domain)

**Strategy 4: TIER DOWN when judgment fails (graceful degradation)**
- If Ceiling metaphor forcing detected: downgrade to Middle
- If Middle pattern mismatch: downgrade to Floor
- If Floor component gap: flag for library expansion

The goal is NOT to eliminate judgment. The goal is to ensure that judgment failures degrade GRACEFULLY (to a lower tier) rather than CATASTROPHICALLY (to soul violations or unreadable pages).

---

## 5. SYNTHESIS: THE REPRODUCIBILITY GRADIENT

### 5.1 Overall Assessment

| Tier | Pipeline Codifiable | Quality Consistent | Skill Changes Needed |
|------|--------------------|--------------------|---------------------|
| **Floor** | 95% codifiable | HIGH consistency (sigma ~1) | NONE (tension skill), MINOR (PA skill) |
| **Middle** | 85% codifiable | MODERATE consistency (sigma ~1.5) | ADD tier-based pipeline selection, pattern decision tree |
| **Ceiling** | 70% codifiable | MODERATE consistency (sigma ~1.5) | STRENGTHEN Phase 3.5, ADD container enforcement, ADD time budget |
| **Flagship** | 55% codifiable | HIGH consistency (sigma ~1, via audit) | MANDATE Phase 5, ADD audit protocol, ADD accessibility check |

### 5.2 The Most Promising Tier for Immediate Deployment

**MIDDLE tier** is the highest-leverage investment:
- 85% codifiable (vs 70% for Ceiling) = fewer failures
- Dramatically above pre-design-system baseline (rhythmic variation, typography deployment, background zones)
- No irreducible creative step required (pattern selection from finite list, not metaphor invention)
- 25-40 min per page (vs 60-90 for Ceiling)
- Covers the "contested middle ground" (tutorials, comparison guides, architecture overviews)
- The engagement threshold question from 03-implications-landscape.md ("is Track 1 Enhanced ENOUGH?") can only be answered by building Middle-tier pages and testing reader response

**Ceiling tier** is the right target for content with genuine structural tension, but should be reserved for content that PASSES the Addition Test as "NO" (genuine tension exists, metaphor required).

**Flagship tier** should be reserved for 10-15 crown jewel pages where the design system's full capability is demonstrated.

### 5.3 The Key Skill Changes (Priority Order)

1. **ADD tier-based pipeline selection** at the top of tension-composition SKILL.md (enables Middle tier shortcut)
2. **STRENGTHEN Phase 3.5 gate** to check domain FAMILY, not just exact match (prevents Variant C convergence)
3. **ADD NON-NEGOTIABLE container width rule** to Phase 4.0 (prevents 60% of Phase D failures)
4. **ADD dark zone height limit** to Phase 4.0 (prevents 40% of Phase D perceptual failures)
5. **ADD time budget per phase** (prevents Flagship over-engineering, enables Ceiling time management)
6. **ADD Mode 2 enhancement** to perceptual-auditing skill for Middle and Ceiling tiers
7. **ADD exit ramp** from Ceiling to Middle when metaphor forcing detected (Isomorphism < 4)
8. **MANDATE Phase 5 comparison** for Flagship tier (currently optional)

### 5.4 What This Means for the Rigidity-Richness Trade-off

The tier system IS the rigidity-richness trade-off made concrete:

- **Floor** = Maximum rigidity, minimum richness (fully codified, component library only)
- **Middle** = High rigidity, moderate richness (mostly codified, pattern-based rhythm)
- **Ceiling** = Moderate rigidity, high richness (pipeline-guided, judgment-dependent metaphor)
- **Flagship** = Minimum rigidity, maximum richness (creative pipeline, multi-pass audit)

The pipeline doesn't CHOOSE a single point on the rigidity-richness spectrum. It offers FOUR points, matched to content needs. The skill modifications above make each point MORE REPRODUCIBLE within its tier, not more rigid across tiers.

The fundamental insight: **reproducibility and richness are not opposites.** They trade off at the TIER level (more rigid = less rich), but within a tier, MORE reproducibility means MORE CONSISTENT quality (not less richness). The Phase D evidence shows this: Variant B (best compliance, most reproducible process) also scored highest novelty (4/5).

Reproducibility IS the path to quality. Not in spite of creative freedom, but because structure frees the creative step to focus on the ONE thing that matters: the metaphor.

---

*This analysis maps the reproducibility landscape across all four tiers. It proposes 8 specific skill modifications with exact wording. It documents 10 failure modes with frequencies and fixes. And it identifies the judgment gap -- the irreducible creative decisions that no amount of codification can eliminate, only contain.*
