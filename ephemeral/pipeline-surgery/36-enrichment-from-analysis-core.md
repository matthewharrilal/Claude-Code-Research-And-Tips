# 36: Enrichment Audit -- Pipeline Analysis Core -> TC + PA Skills

**Agent:** enrichment-auditor (Opus 4.6)
**Date:** 2026-02-20
**Scope:** Read all 41 numbered files + CLAUDE.md + README.md in `ephemeral/pipeline-analysis/`. Cross-referenced against both skills in their current state. Identified findings that SHOULD become permanent guidance.

**Skills audited:**
- `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (1,207 lines)

**Sources read (all in `ephemeral/pipeline-analysis/`):**
- CLAUDE.md (712 lines -- navigation layer with perception threshold quick reference)
- Files 00-13 (context + core analysis layer)
- Files 17-24 (dimensional analysis layer)
- Files 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 38 (meta-analysis + validation layer)
- Files 40, 41, 42 (synthesis layer: navigation, knowledge base, operational recipe)

---

## EXECUTIVE SUMMARY

The pipeline analysis corpus contains **23 enrichment candidates** for TC and **17 enrichment candidates** for PA. Of these, **8 TC items and 5 PA items are already partially codified** in the current skills. The remaining **15 TC items and 12 PA items represent net-new guidance** that the corpus demonstrates is operationally critical but has not yet been absorbed into either skill.

The single highest-impact gap: **the TC skill has no recipe-format output mode.** Phase 4.5 produces a "TC Brief" that is structured as a specification (what to achieve), not a recipe (what to do step by step). The corpus's dominant finding (Files 03, 04, 18, 21, 24, 42 -- Tier 1 confidence, 8/25 concordance, 0 dissent) is that recipe format produces PA-05 3-4/4 while checklist/specification format produces 1.5/4. This is the highest-leverage single change available.

---

## PART 1: TC SKILL ENRICHMENT CANDIDATES

### TC-E01: Recipe-Format Output Mode for Phase 4.5 [CRITICAL -- NOT CODIFIED]

**Source:** Files 03 (A1 reversal), 04 (Extension 1-7), 18 (language register), 21 (verb taxonomy), 24 (paradigm analysis), 42 (operational recipe)
**Concordance:** 8/25 files. 0 dissent. Tier 1.

**What:** The TC skill's Phase 4.5 outputs a "TC Brief" structured as constraints and specifications ("container 960px, warm palette, mechanism count 16-18, zone architecture..."). The pipeline analysis corpus proves that builders following specification-format prompts produce PA-05 1.5/4, while builders following recipe-format prompts produce PA-05 2.5-4/4. The remediation's 0.32:1 constraint-to-action ratio (vs master prompt's 3.0:1) is the operational signature of this shift.

**Where in TC:** Phase 4.5 (Sub-Skill Output Mode). The current output template includes "Section 1: Content Brief," "Section 2: Zone Architecture," "Section 3: Mechanism Deployment," "Section 4: Composition Rules." This needs a parallel or replacement mode: "Section 5: Build Recipe" -- a sequenced 9-phase recipe with exact CSS values derived from the metaphor + zone architecture.

**Specific change:** After the TC pipeline derives metaphor, zones, and mechanism deployment, Phase 4.5 should ALSO produce a build recipe that:
- Uses action verbs (Find/Delete/Replace/Add/Set), not constraint verbs (Must/Verify/Ensure)
- Provides exact CSS values for each zone (background hex, font-size px, line-height, letter-spacing em)
- Sequences phases (Deallocation -> HTML skeleton -> Soul enforcement -> Zone backgrounds -> Borders -> Typography -> Components -> Accessibility -> Verification)
- Embeds perception checks after each phase ("Can you SEE the background difference between adjacent zones?")

**Priority:** CRITICAL. This is the corpus's most validated finding and the TC skill's largest gap.

---

### TC-E02: Deallocation Principle (Phase 0 Concept) [HIGH -- NOT CODIFIED]

**Source:** Files 05 (CSS philosophy shift), 08 (perception model), 11 (P1 mapping), 12 (reversal 2), 42 (Phase 0)
**Concordance:** 9/25 files. 0 dissent. Tier 1.

**What:** Before adding mechanisms, the builder should DELETE any sub-perceptual CSS already present. The flagship spent 233 lines (23.7%) of CSS on invisible changes. The deallocation principle: "If commenting out a CSS rule causes no visible change at 100% zoom, DELETE it permanently."

**Where in TC:** Phase 4.0A (Anti-Scale Model) already contains the sentence "If commenting out a CSS rule causes no visible change, DELETE IT." This is partially codified but needs elevation to a PHASE rather than a sentence. Currently it's a parenthetical in the density definition. It should be a mandatory pre-build step.

**Specific change:** Add "Phase 4.0-PRE: Deallocation Audit" before Phase 4.0A. For remediation/enhancement builds (where CSS already exists), the builder must:
1. Open the page at 1440px
2. Comment out CSS rules one block at a time
3. If removing a block causes no visible change, DELETE it
4. Log deletions with line count ("Deallocated: 47 lines of sub-perceptual typography")
5. CHECKPOINT: "Page should look IDENTICAL to before deallocation"

**Priority:** HIGH. Already partially present as one sentence; needs structural promotion.

---

### TC-E03: Perception Threshold Table Embedding [HIGH -- PARTIALLY CODIFIED]

**Source:** Files 08 (the dominant finding), 42 (Appendix A), CLAUDE.md (quick reference)
**Concordance:** 11/25 files. 0 dissent on principle; values are Tier 2 (N=1).

**What:** The TC skill contains perception thresholds at R-MC-03 (line 1359) with specific values per channel. However, these values differ from the corpus's updated consensus values AND are only referenced in the multi-coherence section, not in the main Phase 4.0 guardrails.

**Current TC values (R-MC-03):**
- Chromatic: >=15 RGB points
- Typographic: >=1px font-size OR >=0.1 line-height OR >=0.01em letter-spacing
- Spatial: >=8px padding/margin delta
- Structural: >=1px border-width delta
- Density: >=1 component count delta
- Rhythmic: Different transition type

**Corpus consensus values (CLAUDE.md + File 42):**
- Background color: >=15 RGB points on at least ONE channel
- Font-size: >=2px between adjacent sections (not 1px)
- Letter-spacing: >=0.5px at base size (= 0.03em at 16px, not 0.01em)
- Line-height: >=0.15 (not 0.1)
- Padding/margins: >=24px between zones (not 8px)
- Border-width: >=1px (same)
- Font-weight: >=100 units (new)
- Total boundary gap: <=120px stacked (new)

**Where in TC:** R-MC-03 (line 1359) AND Phase 4.0 guardrails (line 844). Both need updating.

**Specific change:**
1. Update R-MC-03 values to match corpus consensus: font-size >=2px, letter-spacing >=0.03em, line-height >=0.15, spatial >=24px
2. Add font-weight >=100 as a new channel threshold
3. Add total boundary gap <=120px as a new spatial threshold
4. Duplicate the threshold table into Phase 4.0 guardrails with the heading "PERCEPTION FLOOR TABLE -- Reference before writing ANY CSS"
5. Add caveat: "Specific values are Tier 2 confidence (N=1 derivation). The PRINCIPLE of having floors is Tier 1 (11/25 concordance, 0 dissent)."

**Priority:** HIGH. Partially codified with outdated values; needs update + promotion.

---

### TC-E04: S-09 Total Gap Stacking Fix [HIGH -- NOT CODIFIED]

**Source:** Files 02 (F-03), 08 (all 11 transitions measured), 10 (cascade verification), 42 (Phase 3 stacking arithmetic)
**Concordance:** 8/25 files. 0 dissent. Tier 1.

**What:** The TC skill's spatial guardrails check per-property spacing values (section breathing zone min 48px, max individual margin/padding constrained). But the flagship demonstrated that per-property compliance produces total boundary gaps of 210-276px. ALL 11 section transitions exceeded the 120px threshold. The fix: measure TOTAL accumulated whitespace at every section boundary, not individual properties.

**Where in TC:** Phase 4.0 guardrails (spatial section, around line 858). The current guardrails include "Section Breathing Zone" minimum 48px and "Zone-to-zone transition minimum" 64px. These per-property rules need a STACKING CHECK added.

**Specific change:** Add to Phase 4.0 spatial guardrails:

```
STACKING CHECK (NON-NEGOTIABLE):
At every section boundary, calculate TOTAL gap:
  section-padding-bottom + divider-margin-top + divider-height +
  divider-margin-bottom + next-section-padding-top = TOTAL

TOTAL must be <= 120px.

Example PASS: 32px + 16px + 4px + 16px + 32px = 100px < 120px
Example FAIL: 48px + 32px + 4px + 32px + 48px = 164px > 120px

If FAIL: reduce divider margins first (target 16-24px), then
reduce section padding as needed.
```

**Priority:** HIGH. This is a non-negotiable fix that eliminates the single most damaging spatial failure mode.

---

### TC-E05: Layout Diversity Mandate [HIGH -- NOT CODIFIED]

**Source:** Files 02 (F-12: zero multi-column), 04 (Extension 4), 06 (HTML restructuring), 13 (fresh-eyes: single-column blindspot), 42 (grid layouts)
**Concordance:** 5/25 files. 0 dissent. Tier 2.

**What:** The TC skill has no rule requiring layout diversity. The word "grid" does not appear in the spatial guardrails. The flagship produced 2,034 lines of uniform single-column prose. CSS alone cannot fix this -- grid layouts require HTML wrapper elements. The remediation added 3 grid layouts (tension-pairs, sequence-grid, hypothesis-grid) and this was identified as a key contributor to the PA-05 improvement.

**Where in TC:** Phase 4.0 spatial guardrails, and Phase 4.7 (Fractal Consistency Gate). The fractal gate checks per-category mechanism minimums but does not check layout shape diversity.

**Specific change:** Add to Phase 4.0 guardrails:

```
LAYOUT DIVERSITY (required for pages with 8+ sections):
>= 2 sections MUST use non-single-column layouts.
Non-single-column = grid, flex with wrap, side-by-side, multi-column.
Candidate patterns: tension-pair grid, sequence grid, comparison grid,
pull-quote with aside, data table with annotation sidebar.
```

Also add to Phase 4.5 TC Brief output: "Section X: Layout Patterns" listing which sections use which layout and why.

**Priority:** HIGH. Fresh-eyes agents independently flagged this (File 13, section 2D).

---

### TC-E06: Zone Count Ceiling (Alexander/Salingaros) [MEDIUM -- PARTIALLY CODIFIED]

**Source:** Files 42 (zone architecture), 41 (Q17), memory/scale-research.md
**Concordance:** 7/25 files. 0 dissent on principle. Tier 2.

**What:** The TC skill at R-MC-06 (line 1374) says "2-4 major zones" for pages with 8-12 sections. The corpus provides stronger theoretical grounding: the Alexander/Salingaros formula ln(120)/ln(2.7) ~ 4.8 establishes 5 as the mathematical ceiling. Beyond 5 zones, add CHANNELS not LEVELS.

**Where in TC:** R-MC-06 (line 1374-1375). Currently says "2-4 major zones, producing 2-4 zone boundaries. 3 zones with 2 boundaries is the sweet spot."

**Specific change:** Update R-MC-06:

```
R-MC-06: Zone Count
NEVER exceed 5 zones (Alexander/Salingaros ceiling: ln(pages)/ln(e-factor)).
For pages with 8-12 sections: 2-4 major zones (3 is the sweet spot).
For pages with 13+ sections: 3-5 zones.
Beyond 5: add CHANNELS (more properties vary at existing boundaries),
not LEVELS (more boundaries). This is a mathematical ceiling, not a
style preference.
```

**Priority:** MEDIUM. Current value (2-4) is already close; this adds theoretical grounding and the hard ceiling.

---

### TC-E07: Component Library Reference in Phase 4 [MEDIUM -- NOT CODIFIED]

**Source:** Files 02 (F-11: zero component library reference), 04 (Extension 3), 06 (section 1: library as execution target)
**Concordance:** 3/25 files. 0 dissent. Tier 2.

**What:** The TC skill references Tier 2 vs Tier 3 components (Phase 4.4) but never directs the builder to READ the component library CSS file before building. The flagship builder created 54 custom classes because the library was "ambient" -- present in the ecosystem but absent from the execution path. The remediation mapped every eligible element to its library equivalent (9 callouts, 12 section indicators, 1 pullquote).

**Where in TC:** Phase 4.4 (Component Inventory) and Phase 4.5 (Adapt-vs-Invent). Currently the decision tree says "Can an existing Tier 2 component be ADAPTED?" but the builder may not know what Tier 2 components EXIST.

**Specific change:** Add to Phase 4.4 header:

```
MANDATORY FIRST STEP: Read design-system/compositional-core/components/components.css
in full BEFORE inventorying components. Know what vocabulary exists.

Component library families available: callout (4 variants), section-indicator,
essence-pullquote, code-snippet, data-table, file-tree, decision-matrix,
task-component, skip-link, focus-visible.

TARGET: >= 8/26 library families used (the flagship used 3/26; the remediation
moved to 10/26). Custom classes should be EXCEPTIONS, not the norm.
```

**Priority:** MEDIUM. Addresses a documented failure mode with a simple process fix.

---

### TC-E08: Warm Palette Enforcement Rule [MEDIUM -- PARTIALLY CODIFIED]

**Source:** Files 42 (Phase 2 color system), 41 (Q9), 11 (P3: Warm Identity), CLAUDE.md (quick reference)
**Concordance:** 5/25 files. 0 dissent within this design system. Tier 1.

**What:** The TC skill references warm palette throughout (soul compliance, identity prohibitions) but does not include the binary enforcement formula: R >= G >= B for ALL background colors. The corpus documents that even the remediation spec included cool callout backgrounds (#F5F8FA, #F5FAF5) that the Opus builder had to override.

**Where in TC:** Phase 4.0 guardrails (soul compliance section) or as a new Phase 4.0B soul enforcement check.

**Specific change:** Add to Phase 4.0 guardrails:

```
WARM PALETTE TEST (programmatic, binary):
For EVERY background-color value in your CSS:
  Extract RGB channels.
  PASS: R >= G >= B (examples: #FEF5EB, #F5F0E8, #FAF8F5)
  FAIL: R < G or R < B (examples: #F5F8FA, #FAFAFA, #E8EEF0)

If any background FAILS the warm test, warm-shift it:
  Replace the highest non-R channel with R-2.
  Example: #F5F8FA (R=245, G=248, B=250) -> #FAF8F5 (R=250, G=248, B=245)
```

**Priority:** MEDIUM. The TC skill already references warmth; this adds the programmatic binary test.

---

### TC-E09: Verb Taxonomy for Phase 4.5 Output [MEDIUM -- NOT CODIFIED]

**Source:** Files 18 (prompt craftsmanship), 21 (verbiage analysis, 10-tier propagation ranking)
**Concordance:** 5/25 files. 0 dissent. Tier 2.

**What:** File 21 provides the most operationally useful artifact in the corpus: a 10-tier propagation reliability ranking. Concrete delete instructions achieve ~98% reliability; exact CSS value assignments ~95%; judgment/aesthetic calls ~40-60%. The TC skill's Phase 4.5 output currently uses mixed verb forms. The corpus proves that action verbs ("set font-size to 17px") achieve compliance while verification verbs ("ensure font-size varies") achieve nothing.

**Where in TC:** Phase 4.5 output template. Add a "Verb Rule" constraint.

**Specific change:** Add to Phase 4.5:

```
VERB RULE FOR TC BRIEF OUTPUT:
Every instruction in the TC Brief must use Tier 1-4 verbs:
  Tier 1 (~98%): "Delete [specific block]"
  Tier 2 (~95%): "Set [property] to [exact value]"
  Tier 3 (~90%): "Convert [element] to [library component]"
  Tier 4 (~85%): "Apply [template] to [sections list]"

PROHIBITED verbs (Tier 7-10, ~5-40% reliability):
  "Ensure", "Verify", "Consider", "Explore", "Strive for",
  "Make it feel", "Create the sense of", "Express the metaphor through"

If you cannot express an instruction using Tier 1-4 verbs,
the instruction is too abstract. Decompose it into concrete steps.
```

**Priority:** MEDIUM. High impact but requires rethinking the output template format.

---

### TC-E10: Accessibility as Mandatory Phase [LOW -- NOT CODIFIED]

**Source:** Files 04 (Extension 7), 06 (section 3), 13 (section 7C/7D)
**Concordance:** 3/25 files. 0 dissent. Tier 2.

**What:** The TC skill has zero references to accessibility, WCAG, ARIA, skip links, or focus management. The corpus documents that CD-006 (39/40) included 8/8 accessibility features while the master prompt included 0/8. The remediation added 38 HTML modifications and ~180 CSS lines for accessibility. File 13 (fresh-eyes) independently flagged this as missing from both prompts.

**Where in TC:** After Phase 4.8 (Section-Aware Composition), before Phase 4.9 (Tokenization Self-Check).

**Specific change:** Add "Phase 4.8B: Accessibility Baseline" with:
- Skip link mandatory
- `<main>` wrapper mandatory
- `aria-label` on all `<section>` elements
- `role="note"` on callouts, `role="separator"` on dividers
- `::selection`, `*:focus-visible`, `@media (prefers-reduced-motion)`
- Responsive breakpoints at 768px and 480px

**Priority:** LOW for TC skill specifically (more appropriate for the building protocol). But should be noted as a gap.

---

### TC-E11: Content-Form Coupling Awareness [LOW -- NOT CODIFIED]

**Source:** File 09 (content-agnosticism split), File 24 (fundamental differences)
**Concordance:** 3-5 files. Significant dissent on ratio. Tier 3.

**What:** The corpus classifies the remediation as 46% content-agnostic / 15% semi-agnostic / 40% content-specific. The TC skill should distinguish between its content-agnostic phases (container, color system, spacing system, typography hierarchy, component patterns) and content-dependent phases (metaphor, mechanism selection, zone architecture specifics, density decisions). This helps builders know which parts of TC output can be templated vs which require fresh derivation per page.

**Where in TC:** Phase 0 (content assessment) or as a new preamble to Phase 4.

**Specific change:** Add a classification note:

```
CONTENT-AGNOSTIC OUTPUTS (reusable across pages):
- Container width (940-960px)
- Soul enforcement (warm palette, no border-radius, typography trinity)
- Perception threshold table
- Spacing system (mathematical scale)
- Accessibility baseline

CONTENT-DEPENDENT OUTPUTS (must be derived per page):
- Metaphor choice
- Zone boundaries and density assignments
- Mechanism selection and deployment
- Callout variant assignments
- Grid layout placement decisions
- Typographic zone arc (which zones are generous vs compressed)
```

**Priority:** LOW. Useful orientation but not blocking.

---

### TC-E12: Phase-Sequential Architecture (Not Domain-Scattered) [MEDIUM -- NOT CODIFIED]

**Source:** Files 07 (process topology), 22 (structural architecture), 18 (information architecture)
**Concordance:** 5/25 files. 0 dissent. Tier 2.

**What:** The corpus documents that the master prompt organized rules by DOMAIN (spatial, soul, compositional, multi-coherence), requiring 10+ cross-references per build step spanning 625+ lines. The remediation organized by PHASE (sequential execution), requiring 0-1 cross-references within 30-80 contiguous lines. The TC skill's Phase 4 is organized by domain (guardrails -> anti-scale -> coherence -> multi-coherence -> components -> fractal). A builder working on borders must pull information from guardrails (spatial section), multi-coherence (border channel), and fractal gate.

**Where in TC:** Phase 4 overall architecture.

**Specific change:** This is a structural reorganization of Phase 4, not a simple addition. The proposed alternative: organize Phase 4 by BUILD SEQUENCE rather than DOMAIN:
1. Phase 4.1: HTML Skeleton (landmarks, semantic markup, grid wrappers)
2. Phase 4.2: Soul Enforcement (container, warm palette, typography trinity)
3. Phase 4.3: Zone Backgrounds (chromatic channel, warm test)
4. Phase 4.4: Structural Elements (borders, dividers, transition types)
5. Phase 4.5: Typography Cascade (zone-grouped type sizes, weights, spacing)
6. Phase 4.6: Component Styling (callout family, section indicators, grids)
7. Phase 4.7: Coherence Verification (transition table, multi-coherence cascade)
8. Phase 4.8: Accessibility + Responsive
9. Phase 4.9: Perception Audit (self-check using PA-01 through PA-05)

**Priority:** MEDIUM. High impact but requires major restructuring. Consider as Pipeline v2 change.

---

### TC-E13: Conviction/Execution Separation [LOW -- PARTIALLY CODIFIED]

**Source:** Files 03 (A4 reversal), 22 (section 1), 41 (Q10, Q19)
**Concordance:** 5/25 files. 1 dissent (File 14: conviction may have value). Tier 2.

**What:** The master prompt mixed conviction content ("beauty = confident intention at every scale") with execution spec ("container 940-1100px"). The remediation separated them entirely. The TC skill has some mixing: the anti-scale model (Phase 4.0A) contains both philosophical rationale AND binary checks. File 41 Q10 recommends: "Conviction is read-once context, not referenced during building."

**Where in TC:** Phase 4.0A and throughout Phase 4.

**Specific change:** Mark conviction passages with a "[CONTEXT -- read once, not during build]" tag. Keep them for human comprehension but signal to agent execution that these are not action items.

**Priority:** LOW. The TC skill handles this better than the master prompt already.

---

### TC-E14: Single-Builder Pattern Documentation [LOW -- NOT CODIFIED]

**Source:** Files 07 (process topology shift), 41 (Q4), 42 (Part 2: Team Architecture)
**Concordance:** 3/25 files. 1 dissent (multi-agent for metaphor discovery). Tier 2.

**What:** The corpus consensus is: ONE builder agent (Opus) for middle-tier. For ceiling/flagship: multi-agent planning -> single builder -> Mode 4 PA verification. The TC skill doesn't specify team architecture for its Phase 4.5 output consumers.

**Where in TC:** Phase 4.5 preamble or a new "Execution Architecture" section.

**Specific change:** Add a brief note in Phase 4.5:

```
RECOMMENDED EXECUTION ARCHITECTURE:
- Middle tier: 1 Opus builder reads TC Brief + recipe, builds page
- Ceiling tier: TC pipeline (multi-agent) -> single Opus builder -> Mode 4 PA
- Builder gets 100% of TC Brief (no information hiding)
- Zero coordination overhead (recipe eliminates need for inter-agent messages)
```

**Priority:** LOW. Useful context but the TC skill is about composition, not orchestration.

---

### TC-E15: Propagation Reliability Awareness [MEDIUM -- NOT CODIFIED]

**Source:** File 21 (the 10-tier ranking), File 23 (30 rules traced)
**Concordance:** 3/25 files. 0 dissent. Tier 2.

**What:** File 21 provides the most actionable artifact for prompt engineering: a 10-tier reliability ranking from "concrete delete" (~98%) to "counterfactual thought experiment" (~5%). The TC skill produces instructions at various reliability tiers but doesn't help the user understand which instructions will actually propagate to the builder's CSS. File 23 traced 30 rules and found the master prompt's full conversion rate was only 47%.

**Where in TC:** Phase 4.5 output template, as a quality check.

**Specific change:** Add a self-test after Phase 4.5 output:

```
PROPAGATION SELF-TEST:
For each instruction in your TC Brief, classify by tier:
  Tier 1-4 (>=85% reliable): Concrete actions with exact values
  Tier 5-6 (60-85% reliable): Template applications and format conversions
  Tier 7-10 (<60% reliable): Judgment calls, aesthetic evaluation, abstractions

If >30% of instructions are Tier 7-10, the brief will produce
sub-perceptual output. Decompose abstract instructions into concrete ones.
```

**Priority:** MEDIUM. Directly prevents the compression-to-sub-perceptual failure mode.

---

## PART 2: PA SKILL ENRICHMENT CANDIDATES

### PA-E01: Updated Perception Threshold Values [HIGH -- PARTIALLY CODIFIED]

**Source:** Files 08, 42, CLAUDE.md (quick reference table)
**Concordance:** 11/25 files. 0 dissent on principle. Tier 2 on values.

**What:** The PA skill references perception thresholds in the Weaver calibration section and the quantitative guardrails, but with a reference failure case mention of "1-8 RGB points" (line 920) rather than a systematic threshold table. The corpus provides an 8-property table that should be the PA skill's primary quantitative reference.

**Current PA state:** One sentence in the Weaver section mentioning "1-8 RGB points" as a failure case. No systematic threshold table.

**Where in PA:** Quantitative guardrails section (currently after the audit modes). Should be elevated to a primary reference table visible to all auditors, not just the weaver.

**Specific change:** Add a "PERCEPTION THRESHOLD REFERENCE TABLE" section:

```
| CSS Property | Minimum Perceptible Delta | What to Look For |
|-------------|--------------------------|------------------|
| Background color | >= 15 RGB on at least one channel | Adjacent section backgrounds should look DIFFERENT |
| Font-size | >= 2px between zones | Zone 1 text should look LARGER than Zone 2 text |
| Letter-spacing | >= 0.5px (0.03em at 16px) | Heading tracking should feel OPEN vs TIGHT |
| Line-height | >= 0.15 difference | Generous vs compact line spacing should be VISIBLE |
| Padding/margins | >= 24px between zones | Spatial density should SHIFT at zone boundaries |
| Border-width | >= 1px (present or absent) | Borders either exist or don't |
| Font-weight | >= 100 units (400 vs 500) | Weight changes should be FELT, not measured |
| Total boundary gap | <= 120px stacked | No void between sections exceeding ~8% of viewport |

CONFIDENCE: Principle is Tier 1 (unanimous). Specific values are Tier 2 (N=1).
```

**Priority:** HIGH. This is the most actionable artifact in the entire corpus.

---

### PA-E02: Total Boundary Gap Measurement (S-09 Stacking) [HIGH -- NOT CODIFIED]

**Source:** Files 02, 08, 10, 42
**Concordance:** 8/25 files. 0 dissent. Tier 1.

**What:** The PA skill's void prevention section (Tier 4, PA-50 through PA-53) checks for void patterns but does not specify HOW to measure total boundary gaps. The S-09 stacking loophole -- where individual spacing values pass but stacked values create 210-276px voids -- is the single most damaging spatial failure mode in the corpus. The PA skill should teach auditors to measure TOTAL gap at section boundaries, not just look for "large spaces."

**Where in PA:** Tier 4 (Void Prevention), after PA-53.

**Specific change:** Add a new PA question or an auditor instruction:

```
PA-54: STACKING CHECK
At each section boundary, estimate the TOTAL accumulated whitespace:
  Look at the gap between the last content in section N and the first
  content in section N+1. Is this gap larger than roughly 120px
  (about 8% of a 1440px viewport)?

If YES: Flag as VOID-RISK. Identify contributing factors:
  - Section bottom padding too large?
  - Divider margins too generous?
  - Bridge prose whitespace excessive?

NOTE: Individual padding/margin values may each look reasonable
(40-60px each). The failure mode is their SUM exceeding 120px.
Auditors must estimate TOTAL, not evaluate each property alone.
```

**Priority:** HIGH. Eliminates the documented blindspot that caused 9/9 auditors to flag the flagship's whitespace void.

---

### PA-E03: Channel Activation vs Deployment Distinction [HIGH -- NOT CODIFIED]

**Source:** Files 08, 10, 41 (Q16), 11 (P1 mapping)
**Concordance:** 5/25 files. 0 dissent. Tier 2.

**What:** The flagship was measured as having "5/7 channels active" by binary presence counting. But only "3/7 channels perceptibly active" when measured against perception thresholds. The PA skill's multi-coherence evaluation should distinguish between channels that EXIST in CSS and channels that are PERCEPTIBLE to a reader.

**Where in PA:** The Weaver calibration section (Multi-Coherence Scale, line 745-752) and the quantitative guardrails.

**Specific change:** Update the Multi-Coherence Scale:

```
CHANNEL ACTIVATION TEST:
A channel is DEPLOYED if CSS properties exist for it.
A channel is ACTIVE only if its CSS values EXCEED perception thresholds.

When counting "simultaneous shifts at boundary," count only ACTIVE channels.
Example: A boundary where background shifts by 3 RGB, font-size shifts by 0.5px,
and border appears = 1 active channel (border), NOT 3.

| Simultaneous ACTIVE Shifts | Quality Level |
|---------------------------|---------------|
| 0-1 active | FLAT |
| 2 active | FUNCTIONAL |
| 3 active | DESIGNED |
| 4-5 active | COMPOSED |
| 6 active | FLAGSHIP |
```

**Priority:** HIGH. Without this distinction, auditors will over-count channels and miss the core quality signal.

---

### PA-E04: Cascade Value Table for Multi-Coherence [MEDIUM -- NOT CODIFIED]

**Source:** File 10 (coherence model shift), File 42 (Phase 6/8 verification)
**Concordance:** 3/25 files. 0 dissent. Tier 2.

**What:** The shift from abstract "CCS >= 0.30" to concrete cascade value tables. Instead of asking auditors to estimate coupling scores, provide a template for measuring exact values at each zone boundary. File 10 documents that the CCS was mandated but NEVER computed across any experiment because it requires judgment to evaluate "coupling."

**Where in PA:** Weaver protocol (Section 4: Full Per-Question Matrix) or as a new verification tool.

**Specific change:** Add to the Weaver protocol a "Cascade Verification Template":

```
MULTI-COHERENCE CASCADE TABLE (Weaver fills this):
For each zone boundary, record whether each channel SHIFTS perceptibly:

| Boundary | Chromatic | Typographic | Spatial | Structural | Density | Rhythmic | Active Count |
|----------|-----------|-------------|---------|------------|---------|----------|-------------|
| Z1->Z2   | [Y/N + delta] | [Y/N + delta] | [Y/N + delta] | [Y/N + delta] | [Y/N] | [Y/N] | [count] |
| Z2->Z3   | ... | ... | ... | ... | ... | ... | ... |

Y = exceeds perception threshold. N = below threshold or absent.
Minimum: 3 active shifts per zone boundary.
```

**Priority:** MEDIUM. Replaces the unmeasurable CCS with something binary and verifiable.

---

### PA-E05: Sub-Perceptual CSS Detection Questions [HIGH -- NOT CODIFIED]

**Source:** Files 05 (CSS philosophy shift), 08, 12 (reversal 2), 35 (compression layer 4)
**Concordance:** 9/25 files. 0 dissent. Tier 1.

**What:** The PA skill has no questions that specifically detect sub-perceptual CSS. The flagship's dominant failure was 23.7% invisible CSS. An auditor looking at the page sees "flat" but cannot articulate WHY it's flat without understanding that CSS exists but is invisible. The PA skill should teach auditors to LOOK FOR the signature of sub-perceptual CSS.

**Where in PA:** Tier 3 (Deep Dive) or as a new addition to Tier 2 (Core Questions).

**Specific change:** Add 2-3 new PA questions:

```
PA-55: SUB-PERCEPTUAL DETECTION
Look at 3 adjacent sections. Can you describe how they DIFFER visually
without inspecting CSS? If all sections look "the same" but the page
claims to have zone-based variation, the variation is likely sub-perceptual.

PA-56: CSS BUDGET ALLOCATION
(For auditors with CSS access) Estimate what percentage of CSS rules
produce VISIBLE changes. If >20% of CSS rules could be deleted with no
visual impact, flag as CSS BUDGET MISALLOCATION.

PA-57: MICRO-TYPOGRAPHY DETECTION
Check letter-spacing and line-height differences between zones.
If differences are present in CSS but invisible to the eye (you cannot
FEEL the tracking difference between sections), flag as sub-perceptual
typography.
```

**Priority:** HIGH. These questions fill the skill's largest diagnostic gap.

---

### PA-E06: Warm Palette Verification [MEDIUM -- NOT CODIFIED]

**Source:** Files 42, 41 (Q9), 11 (P3)
**Concordance:** 5/25 files. 0 dissent. Tier 1.

**What:** The PA skill has no specific warm palette verification question. The corpus documents that even the remediation spec included cool backgrounds that the builder had to override. Auditors should check: do ALL backgrounds feel warm, or do some sections feel cool/clinical?

**Where in PA:** Tier 2 (Core Questions), near PA-03/PA-04 (emotional impression).

**Specific change:** Add:

```
PA-58: WARM PALETTE CONSISTENCY
Do ALL section backgrounds feel warm (cream, peach, tan, honey) or do
some feel cool (gray, blue-gray, clinical white)? Cool sections break
the design system's identity. If any section feels "colder" than its
neighbors, flag with the section number and describe the temperature shift.

Programmatic test (for auditors with CSS access): R >= G >= B for every
background-color. Any value where G > R or B > R is a soul violation.
```

**Priority:** MEDIUM. Important for identity compliance but the PA skill already captures emotional impression at PA-03/PA-04.

---

### PA-E07: Recipe vs Specification Awareness [LOW -- NOT CODIFIED]

**Source:** Files 18, 24, 35
**Concordance:** 3/25 files. 0 dissent. Tier 2.

**What:** The PA skill should understand that pages built from recipe-format prompts have LOWER variance (consistently 2.5-3/4) while pages built from specification-format prompts have HIGHER variance (1.5/4 to 39/40). This affects how auditors interpret their findings: a page from a recipe that scores 2.5/4 may be at the recipe's ceiling, while a page from a specification that scores 2.5/4 may have significant upside potential.

**Where in PA:** Weaver protocol (contextual calibration) or Mode 4 preamble.

**Specific change:** Add a note to the Weaver protocol:

```
PROMPT FORMAT CONTEXT (if known):
- Recipe-format builds: Expect reliable 2.5-3/4. Ceiling may be 3/4.
- Specification-format builds: Higher variance (1.5-4/4). Ceiling is 4/4.
- This context should INFORM verdict but not OVERRIDE perception.
  A 2.5/4 from a recipe is a success; a 2.5/4 from a specification is
  a disappointment.
```

**Priority:** LOW. Context enrichment, not a diagnostic tool.

---

### PA-E08: Structural Border Rhythm Question [MEDIUM -- NOT CODIFIED]

**Source:** Files 04 (Extension 2), 11 (P4), 42 (Phase 4)
**Concordance:** 3/25 files. 0 dissent. Tier 2.

**What:** The PA skill checks for borders as a structural channel but doesn't specifically ask about border RHYTHM -- the alternating presence/absence pattern that creates ON/OFF structural rhythm across sections. The remediation applied left borders to 6/12 sections, creating a recognizable rhythm. This is a compositional quality signal.

**Where in PA:** Tier 3 (Deep Dive), near the consistency/rhythm questions.

**Specific change:** Add:

```
PA-59: BORDER RHYTHM
Do structural borders (left borders, section dividers) follow a
recognizable PATTERN across sections? Patterns include:
- Alternating presence (border / no border / border / no border)
- Progressive weight (thin -> medium -> thick)
- Color variation tracking zone identity

If borders appear RANDOMLY or UNIFORMLY on every section, the structural
channel is not composed -- it is either arbitrary or monotonous.
```

**Priority:** MEDIUM. Fills a gap in compositional depth assessment.

---

### PA-E09: Layout Shape Diversity Question [MEDIUM -- PARTIALLY CODIFIED]

**Source:** Files 02, 04, 06, 13
**Concordance:** 5/25 files. 0 dissent. Tier 2.

**What:** The PA skill has PA-14 (Grid Structure) and PA-37 (Grid Regularity) but these focus on grid QUALITY, not layout DIVERSITY. The corpus's finding is that 2,034 lines of uniform single-column is a structural failure that no CSS can fix. Auditors should explicitly check: are there at least 2 distinct layout shapes?

**Where in PA:** Tier 2 (Core Questions), after PA-14/PA-15.

**Specific change:** Strengthen PA-14 or add:

```
PA-14B: LAYOUT DIVERSITY
Beyond single-column prose, does the page include at least 2 different
spatial arrangements? Examples:
- Side-by-side panels or grids
- Pull-quotes with aside content
- Data tables alongside narrative
- Multi-column comparison layouts

If the ENTIRE page is single-column top-to-bottom, flag as
STRUCTURAL MONOTONY regardless of how rich the typography or
color treatment is.
```

**Priority:** MEDIUM. Partially covered by existing questions but needs explicit diversity check.

---

### PA-E10: Deallocation Detection [LOW -- NOT CODIFIED]

**Source:** Files 05, 08, 42
**Concordance:** 9/25 files. 0 dissent. Tier 1.

**What:** Auditors should be able to detect when a page has NOT been deallocated -- i.e., when CSS exists that produces no visible effect. The signature: sections that "look the same" despite having different CSS. The PA skill should include a question about this.

**Where in PA:** Tier 3 (Deep Dive) or Tier 4 (Void Prevention).

**Specific change:** This is largely covered by PA-E05 (Sub-Perceptual Detection Questions). Could be merged.

**Priority:** LOW. Covered by PA-E05 enrichment.

---

### PA-E11: Metaphor Structural vs Announced Calibration [MEDIUM -- PARTIALLY CODIFIED]

**Source:** Files 03 (A8 reversal), 13 (section 5B), 41 (Q12)
**Concordance:** 5/25 files. 1 dissent (ceiling experiment scored 9/9 novelty with announced metaphor). Tier 2.

**What:** The PA skill already has a Metaphor Expression Spectrum (line 762-767: STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED). The corpus adds quantitative calibration: the flagship's metaphor was "40% without labels" -- meaning 60% of metaphor communication depended on explicit text labels. The PA skill should provide a percentage threshold for STRUCTURAL vs ANNOUNCED.

**Where in PA:** Metaphor Expression Spectrum section (line 762-767).

**Specific change:** Add quantitative calibration:

```
METAPHOR STRUCTURAL TEST:
Mentally remove ALL text labels, section titles, and explicit metaphor
references. What percentage of the metaphor is still communicated
through CSS (colors, spacing, borders, typography)?

>= 70%: STRUCTURAL (metaphor lives in the CSS)
50-69%: ATMOSPHERIC (metaphor is felt but partially verbal)
30-49%: LABELED (metaphor depends on labels for meaning)
< 30%: ANNOUNCED (metaphor is only in the text, not the design)

The flagship scored ~40% (downgraded from STRUCTURAL to ANNOUNCED).
CD-006 scored estimated 80%+ (STRUCTURAL).
```

**Priority:** MEDIUM. Strengthens existing guidance with quantitative calibration.

---

### PA-E12: WCAG Color Contrast Gap [LOW -- NOT CODIFIED]

**Source:** File 13 (section 7C), File 04 (Extension 7)
**Concordance:** 2/25 files. 0 dissent. Tier 3.

**What:** Neither the master prompt nor the PA skill mentions WCAG color contrast ratios. File 13 independently flagged that several text colors in the flagship HTML likely fail WCAG AA 4.5:1 (e.g., #6B6B6B on warm cream, #C8BFB5 subtitle in header, #A89E94 footer meta). The warm palette constraint + prohibition on pure black creates a tension with contrast requirements.

**Where in PA:** Accessibility section or Tier 3 Deep Dive.

**Specific change:** Add a note:

```
PA-CONTRAST: COLOR CONTRAST AWARENESS
The warm palette constraint (no pure black, no pure white) creates
tension with WCAG AA 4.5:1 contrast requirements. Check:
- Body text color against section backgrounds
- Subtle text (dates, captions, metadata) against backgrounds
- Header/footer text against dark backgrounds

Warm-shifted near-black (#3D3D3D) on warm cream (#FEF5EB) typically
passes (contrast ratio ~8.5:1). But lighter text variants (#6B6B6B)
on cream backgrounds may fail (~4.0:1).

Flag any text that feels hard to read as a CONTRAST-RISK.
```

**Priority:** LOW. Valid gap but at the edge of the PA skill's scope.

---

## PART 3: ALREADY-APPLIED ITEMS

These findings from the corpus are ALREADY present in the current skills:

| Finding | TC Skill Location | PA Skill Location | Status |
|---------|------------------|-------------------|--------|
| Anti-scale model (Richness = density x restraint x confidence) | Phase 4.0A (line 824) | N/A | FULLY APPLIED |
| Perception risk assessment | Phase 3.5E | N/A | FULLY APPLIED |
| Perceptual cost assessment | Phase 3.5F | N/A | FULLY APPLIED |
| 6-criterion metaphor quality rubric | Phase 3.5G | N/A | FULLY APPLIED |
| Per-category mechanism minimums (S:1+, H:1+, C:1+, D:1+, N:1+) | Phase 4.7 fractal gate | N/A | FULLY APPLIED |
| Perception thresholds for channel counting | R-MC-03 (line 1359) | N/A | APPLIED but values outdated (see TC-E03) |
| Zone count guidance | R-MC-06 (line 1374) | N/A | APPLIED but ceiling not stated (see TC-E06) |
| Metaphor expression spectrum | N/A | Lines 762-767 | APPLIED but no quantitative calibration (see PA-E11) |
| Multi-coherence scale | N/A | Lines 745-752 | APPLIED but no activation/deployment distinction (see PA-E03) |
| Void prevention tier (PA-50 through PA-53) | N/A | Tier 4 | APPLIED but no stacking check (see PA-E02) |
| Screenshot-reading protocol | N/A | Lines 671-688 | FULLY APPLIED |
| Weaver dual-verdict protocol | N/A | Lines 690-739 | FULLY APPLIED |
| Builder warnings appendix | TC appendix | N/A | FULLY APPLIED |
| Compositional criteria for SHIP verdict | N/A | Lines 722-728 | FULLY APPLIED |

---

## PART 4: KEY INSIGHT -- MOST IMPACTFUL ITEMS NOT YET CODIFIED

Ranked by estimated impact on PA-05 scores in future pipeline runs:

### Rank 1: TC-E01 (Recipe-Format Output Mode)
**Impact:** Addresses THE dominant finding across the corpus. Recipe format is the single highest-concordance, zero-dissent recommendation. Every other enrichment is second-order compared to this structural change.

### Rank 2: TC-E04 + PA-E02 (S-09 Stacking Fix -- both skills)
**Impact:** Eliminates the spatial failure mode that caused 9/9 auditors to flag the flagship. The TC skill prevents it by construction; the PA skill detects it if prevention fails.

### Rank 3: PA-E01 + TC-E03 (Perception Threshold Updates -- both skills)
**Impact:** Updates the most actionable artifact in the corpus to consensus values. Without correct thresholds, both skills operate with outdated calibration.

### Rank 4: PA-E03 + PA-E05 (Channel Activation + Sub-Perceptual Detection)
**Impact:** Gives PA auditors the diagnostic vocabulary to identify the flagship's core failure mode. Without these, auditors see "flat" but cannot articulate why.

### Rank 5: TC-E05 (Layout Diversity Mandate)
**Impact:** Eliminates the single-column blindspot that no amount of CSS can fix. Requires HTML-level thinking, which the TC skill currently does not mandate.

---

## PART 5: IMPLEMENTATION NOTES

### Dependency Order

Some enrichments depend on others:
- TC-E01 (recipe mode) should be implemented AFTER TC-E03 (perception thresholds) and TC-E09 (verb taxonomy), because the recipe needs correct thresholds and action verbs to be effective.
- PA-E02 (stacking check) and PA-E03 (channel activation) should be implemented TOGETHER, as both change how auditors measure multi-coherence.
- TC-E04 (stacking fix in TC) and PA-E02 (stacking detection in PA) are complementary -- prevention + detection.

### Risk Assessment

| Enrichment | Risk if ADOPTED | Risk if NOT adopted |
|-----------|----------------|---------------------|
| TC-E01 (recipe mode) | May cap quality ceiling at 3/4 (File 05 warning) | Continued 1.5/4 specification-format failures |
| TC-E03 (threshold update) | Values are N=1, may be wrong | Outdated thresholds permit sub-perceptual CSS |
| TC-E05 (layout diversity) | May over-constrain simple pages | Continued single-column monotony |
| PA-E01 (threshold table) | Values are N=1, may cause over-correction | Auditors cannot quantify "flat" |
| PA-E05 (sub-perceptual detection) | May cause false positives on intentionally subtle design | Cannot detect the dominant failure mode |

### Caveat: N=2 Limitation

ALL of these enrichments derive from comparing exactly 2 artifacts (flagship 1.5/4 vs remediation 2.5/4) plus 1 reference (CD-006 39/40). The cheapest experiment to resolve the 3-variable confound (add ONLY perception thresholds to the unchanged master prompt, re-run) has NOT been conducted. Treat all enrichments as strong hypotheses supported by evidence, not as proven causal interventions.

---

**END OF ENRICHMENT AUDIT**

**Files produced:** 1 (`ephemeral/pipeline-surgery/36-enrichment-from-analysis-core.md`)
**TC enrichment candidates:** 15 (6 CRITICAL/HIGH, 5 MEDIUM, 4 LOW)
**PA enrichment candidates:** 12 (4 HIGH, 5 MEDIUM, 3 LOW)
**Already applied:** 14 items across both skills
**Highest-leverage single change:** TC-E01 (Recipe-Format Output Mode)
