# Content Agnosticism vs Content Specificity Analysis

**Analyst:** master-foundations (Opus 4.6)
**Date:** 2026-02-18
**Task:** Determine what percentage of the remediation spec's improvements are content-agnostic (reusable for ANY content) vs content-specific (tailored to RESEARCH-SYNTHESIS content). This determines whether we have a reusable pipeline or a one-off fix.

**Sources:**
- Master prompt: `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines)
- Remediation spec: `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines)
- Content inventory: `ephemeral/flagship-experiment/00-content-inventory.md` (229 lines)
- Adapted content: `ephemeral/flagship-experiment/01-adapted-content.md` (311 lines)
- Structural HTML audit: `ephemeral/remediation-audit/07-structural-html-audit.md` (961 lines)
- Builder changelog: `ephemeral/flagship-remediation/builder-changelog.md` (236 lines)

---

## CLASSIFICATION FRAMEWORK

Each remediation element is classified as:

- **AGNOSTIC (A):** Would work identically for any content type (tutorial, reference, conceptual guide, API docs, etc.) within the design system. No knowledge of RESEARCH-SYNTHESIS required.
- **SEMI-AGNOSTIC (SA):** The PRINCIPLE is content-agnostic but the SPECIFIC VALUES were tuned to this content. A different page would use the same approach with different parameters.
- **CONTENT-SPECIFIC (CS):** Assumes knowledge of THIS specific content structure (e.g., "S7 has tension pairs," "S8 has 4 sequence blocks," "12 sections with zone-based progression").

---

## PHASE-BY-PHASE ANALYSIS

### PHASE 0: DEALLOCATION (~216 lines deleted)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| 0.1 | Delete typographic convergence gradient (~99 lines) | **CS** | The gradient was built FOR this content's 12-zone convergence metaphor. A different page with different zone count/structure would have different sub-perceptual CSS to delete. |
| 0.2 | Delete spatial compression micro-modulations (~44 lines) | **CS** | Per-zone spacing overrides specific to 12 sections. |
| 0.3 | Delete per-zone border color shifts (~35 lines) | **CS** | 12 zone-specific border colors. |
| 0.4 | Delete per-zone heading color shifts (~27 lines) | **CS** | 12 zone-specific heading colors. |
| 0.5 | Consolidate zone background tokens | **CS** | 12 specific tokens. |
| 0.6 | Delete extra paragraph breathing rule | **CS** | Rule specific to zone-s1 and zone-s3. |

**Phase 0 classification:** But the PRINCIPLE behind Phase 0 is AGNOSTIC: "identify and delete sub-perceptual CSS." The execution is content-specific because it names specific zones, selectors, and line ranges. Any future page would need its own Phase 0, but the METHODOLOGY (identify CSS below perception thresholds, delete it) transfers.

**Breakdown: 0% agnostic (execution), 100% agnostic (methodology)**

---

### PHASE 1: HTML RESTRUCTURING (~57 modifications)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| 1.1 | Add skip link + `<main>` wrapper | **A** | Every page needs these. Zero content dependency. |
| 1.2 | Add ARIA labels to all sections | **SA** | The PRACTICE is agnostic (all pages need aria-labels). The specific label TEXT ("Section 1: What the Research Set Out to Find") is content-specific. |
| 1.3 | Add `role="note"` to component blocks | **A** | Any callout on any page should have role="note". |
| 1.4 | Add `role="separator"` to dividers | **A** | Any divider on any page should have role="separator". |
| 1.5 | Convert `.component-block` to `.callout` family | **SA** | The CONVERSION PATTERN is agnostic (adopt component library). The VARIANT ASSIGNMENT (which blocks become --info vs --gotcha vs --tip) is content-specific: "S7 tension blocks are gotcha, S7 resolution blocks are tip, S12 discovery is essence." A different page would use the same callout family but assign variants based on ITS content semantics. |
| 1.6 | Convert `.section-meta` to `.section-indicator` | **A** | Pure class rename. Applies to any page using section metadata. |
| 1.7 | Add grid wrapper for S7 tension pairs | **CS** | Entirely content-specific. Only applicable because S7 has 3 tension/resolution pairs. A tutorial page would have no tension pairs. |
| 1.8 | Add grid wrapper for S8 sequence blocks | **CS** | Entirely content-specific. Only applicable because S8 has 4 sequence blocks. |
| 1.9 | Add grid wrapper for S11 hypothesis tables | **CS** | Entirely content-specific. Only applicable because S11 has 3 hypothesis tables. |

**Phase 1 breakdown:**

| Classification | Steps | Percentage |
|---------------|-------|-----------|
| AGNOSTIC | 1.1, 1.3, 1.4, 1.6 | 44% (4/9) |
| SEMI-AGNOSTIC | 1.2, 1.5 | 22% (2/9) |
| CONTENT-SPECIFIC | 1.7, 1.8, 1.9 | 33% (3/9) |

---

### PHASE 2: ZONE BACKGROUNDS (Ch1)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| Zone color variables | Replace 12 zone color tokens in :root | **CS** | The 12 specific hex values (#FEF5EB, #F5EDE2, #FBF3E8, etc.) were chosen for THIS content's 3-zone warm-cool-warm arc. A tutorial might need 5 zones with a different chromatic trajectory. |

**Phase 2 breakdown:** The PRINCIPLE (zone backgrounds should have perceptible deltas >= 10 RGB) is AGNOSTIC. The EXECUTION (12 specific values mapping to a convergence metaphor) is CONTENT-SPECIFIC.

**Classification: 0% agnostic (execution), 100% agnostic (principle)**

---

### PHASE 3: STRUCTURAL BORDERS (Ch4)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| 3.1 | Section-level left borders (6 zones) | **CS** | Specific zones chosen (S2, S5, S7, S9, S10, S12) based on THIS content's zone structure. A different page would have different zones needing borders. |
| 3.2 | Divider margin reductions | **A** | The reduced margins (16px/24px/24px) apply to any page using the 3-type transition grammar. Zero content dependency. |
| 3.3 | Bridge-prose margin fix | **A** | Any page with bridge transitions needs this void fix. |
| 3.4 | Callout family CSS | **A** | The callout component CSS (base + 4 variants) is a component library enhancement. Any page using callouts benefits. |
| 3.5 | Grid layout CSS | **SA** | The CSS properties (2-column grid with responsive collapse) are agnostic. The CLASS NAMES (.tension-pair, .sequence-grid, .hypothesis-grid) are content-specific. A generic ".two-column-grid" class would be fully agnostic. |
| 3.6 | Table header backgrounds | **A** | Any page with tables benefits from header tinting. |

**Phase 3 breakdown:**

| Classification | Steps | Percentage |
|---------------|-------|-----------|
| AGNOSTIC | 3.2, 3.3, 3.4, 3.6 | 67% (4/6) |
| SEMI-AGNOSTIC | 3.5 | 17% (1/6) |
| CONTENT-SPECIFIC | 3.1 | 17% (1/6) |

---

### PHASE 4: TYPOGRAPHY (Ch2)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| 4.1 | Zone-group paragraph styles | **CS** | The zone-to-group mapping (S1-S3 = generous, S5/S7/S8 = analytical, S4/S6 = transitional, S9-S12 = settled) is specific to this content's 12-section 3-zone structure. A 6-section tutorial would need different groupings. |
| 4.2 | Zone-group heading styles | **CS** | Same content dependency as 4.1. |
| 4.3 | T9 coherence fix (S10 heading weight) | **CS** | Fix for a specific transition between specific sections. |

**Phase 4 breakdown:** The PRINCIPLE (typography should vary perceptibly across zones, with values exceeding perception thresholds) is AGNOSTIC. The EXECUTION (12 specific selectors with specific font-size/line-height/letter-spacing values) is CONTENT-SPECIFIC.

**Classification: 0% agnostic (execution), 100% agnostic (principle)**

---

### PHASE 5: SPATIAL RHYTHM (Ch3)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| 5.1 | Zone-group paragraph margins | **CS** | Same zone-group dependency as Phase 4. |
| 5.2 | Override excessive inline padding (S2) | **CS** | Specific to S2's inline style attribute. |
| 5.3 | Zone-based section padding | **CS** | 12 specific zone selectors with `!important` overrides. |

**Phase 5 breakdown: 0% agnostic (execution), 100% agnostic (principle)**

The principle ("paragraph margins should vary by zone, with perceptible deltas of >= 8px") transfers to any page.

---

### PHASE 6: ELEMENT-LEVEL RICHNESS (Scale 5)

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| Inline code styling | `code:not(pre code)` background + border | **A** | Any page with inline code benefits. |
| Link hover transitions | `a` color transition on hover | **A** | Universal. |
| Table row hover | `tbody tr:hover` background | **A** | Any page with tables benefits. |
| Callout hover | Border-left-width transition | **A** | Any page with callouts benefits. |
| Smooth scrolling | `html { scroll-behavior: smooth }` | **A** | Universal. |
| Section indicator | `.section-indicator` styling | **A** | Any page using section indicators benefits. |

**Phase 6 breakdown: 100% agnostic**

---

### PHASE 7: ACCESSIBILITY + RESPONSIVE

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| ::selection styling | Background + color on text selection | **A** | Universal. |
| :focus-visible | Focus ring on keyboard navigation | **A** | Universal. |
| .skip-link | Hidden skip link, visible on focus | **A** | Universal. |
| prefers-reduced-motion | Disable animations for motion sensitivity | **A** | Universal. |
| Print styles | White backgrounds, black text for printing | **SA** | The print rules reference specific classes (.zone-s1 through .zone-s12, .sequence-block, etc.) that are content-specific. The PRINCIPLE (print stylesheet) is agnostic. |
| Responsive 768px | Grid collapse, font reduction, padding reduction | **SA** | The responsive rules reference content-specific classes (.tension-pair, .sequence-grid, .hypothesis-grid). The PRINCIPLES (grids collapse, padding reduces) are agnostic. |
| Responsive 480px | Further mobile reductions | **SA** | Same as above. |

**Phase 7 breakdown:**

| Classification | Steps | Percentage |
|---------------|-------|-----------|
| AGNOSTIC | 4 (selection, focus, skip-link, reduced-motion) | 57% (4/7) |
| SEMI-AGNOSTIC | 3 (print, responsive 768, responsive 480) | 43% (3/7) |
| CONTENT-SPECIFIC | 0 | 0% |

---

### PHASE 8: VERIFICATION

| Step | Description | Classification | Rationale |
|------|-------------|---------------|-----------|
| 8A | Multi-coherence cascade table | **CS** | Verifies specific transitions (T4: S4->S5, T8: S8->S9). Different content = different transitions. |
| 8B | Total gap verification | **A** | "No gap > 120px" applies to any page. |
| 8C | Scale 5 level verification | **A** | "5 levels present" applies to any page. |
| 8D | Soul constraint check | **A** | Soul rules are content-agnostic. |
| 8E | Binary richness checklist | **CS** | References specific sections (S1 vs S5 comparisons, specific pixel values for THIS page's zones). |
| 8F | Accessibility verification | **A** | Universal checks. |
| 8G | Overall perception self-check | **SA** | The 4 questions are principle-level (any page should feel DESIGNED not PATCHED). But the specific spatial reference ("compresses in S5-S8, releases in S9-S12") is content-specific. |

**Phase 8 breakdown:**

| Classification | Steps | Percentage |
|---------------|-------|-----------|
| AGNOSTIC | 8B, 8C, 8D, 8F | 57% (4/7) |
| SEMI-AGNOSTIC | 8G | 14% (1/7) |
| CONTENT-SPECIFIC | 8A, 8E | 29% (2/7) |

---

## APPENDICES AND CONSTRAINTS

| Element | Classification | Rationale |
|---------|---------------|-----------|
| Perception Thresholds Reference | **A** | Universal minimum deltas. Any page benefits. |
| CONSTRAINTS: Do NOT change | **CS** | Lists content-specific items (container 960px is agnostic, but "text content, section headings" is content-specific). |
| CONSTRAINTS: Do NOT add | **A** | Soul violations are universal. |
| CONSTRAINTS: Do NOT remove | **SA** | "Mechanism CSS comments" is content-specific; "visible effects" is agnostic. |
| Execution Notes (Opus, single-pass, mid-process checks) | **A** | Process guidance, universal. |

---

## AGGREGATE ANALYSIS

### By Phase (Execution Level)

| Phase | Agnostic | Semi-Agnostic | Content-Specific | Total Steps |
|-------|----------|---------------|-----------------|-------------|
| Phase 0: Deallocation | 0 (0%) | 0 (0%) | 6 (100%) | 6 |
| Phase 1: HTML Restructuring | 4 (44%) | 2 (22%) | 3 (33%) | 9 |
| Phase 2: Zone Backgrounds | 0 (0%) | 0 (0%) | 1 (100%) | 1 |
| Phase 3: Structural Borders | 4 (67%) | 1 (17%) | 1 (17%) | 6 |
| Phase 4: Typography | 0 (0%) | 0 (0%) | 3 (100%) | 3 |
| Phase 5: Spatial Rhythm | 0 (0%) | 0 (0%) | 3 (100%) | 3 |
| Phase 6: Element-Level | 6 (100%) | 0 (0%) | 0 (0%) | 6 |
| Phase 7: Accessibility | 4 (57%) | 3 (43%) | 0 (0%) | 7 |
| Phase 8: Verification | 4 (57%) | 1 (14%) | 2 (29%) | 7 |
| **TOTAL** | **22 (46%)** | **7 (15%)** | **19 (40%)** | **48** |

### By CSS Line Count (Approximate)

| Classification | CSS Lines Added | Percentage |
|---------------|----------------|-----------|
| AGNOSTIC | ~165 (callout family, divider margins, element-level, accessibility core, gap verification) | 53% |
| SEMI-AGNOSTIC | ~45 (grid layouts, responsive, print) | 15% |
| CONTENT-SPECIFIC | ~100 (zone backgrounds, section borders, typography zones, spatial zones) | 32% |
| **TOTAL** | **~310** | **100%** |

### By Principle Level

Every phase has a content-agnostic PRINCIPLE underneath it:

| Phase | Agnostic Principle | Content-Specific Execution |
|-------|-------------------|---------------------------|
| 0 | Delete CSS below perception thresholds | WHICH CSS to delete |
| 1 | Adopt accessibility landmarks + component library | WHICH components, WHICH grid layouts |
| 2 | Zone backgrounds must differ by >= 10 RGB | WHICH zones get WHICH colors |
| 3 | Section-level borders create Ch4 structural channel | WHICH sections get borders |
| 4 | Typography must vary perceptibly by zone | WHICH zones get WHICH font sizes |
| 5 | Spatial rhythm must vary perceptibly by zone | WHICH zones get WHICH margins |
| 6 | Element-level CSS enriches Scale 5 | (fully agnostic) |
| 7 | Accessibility + responsive are mandatory | (mostly agnostic, class names vary) |
| 8 | Verify perception, not just compliance | WHICH comparisons to make |

**At the principle level: 100% agnostic. Every principle transfers to any page.**

---

## THE CRITICAL DISTINCTION

### What We Have: A Reusable METHODOLOGY, Not a Reusable RECIPE

The remediation spec is structured as a RECIPE for one specific page. But the recipe is built from PRINCIPLES that are universal. The reusable pipeline would be:

**Layer 1: Universal Template (~165 lines CSS, fully reusable)**
- Callout family CSS (base + 4 variants)
- Divider margin caps (16px/24px/24px for SMOOTH/BRIDGE/BREATHING)
- Element-level richness (inline code, link hover, table hover, section indicator)
- Accessibility core (selection, focus-visible, skip-link, reduced-motion)
- Perception thresholds reference
- Soul constraint checklist

**Layer 2: Zone Configuration (~100 lines CSS, per-page parameter)**
- Zone count and color palette (determined by content inventory)
- Per-zone typography values (determined by zone-group mapping)
- Per-zone spacing values (determined by density arc)
- Per-section border assignments (determined by visual rhythm)
- Grid layout class names and assignments (determined by content structure)

**Layer 3: Content-Specific Decisions (~45 lines CSS, unique per page)**
- Which sections get which grid layouts
- Which callout variants map to which content
- Responsive class references
- Verification comparisons

### Reusability Score

| Question | Answer |
|----------|--------|
| Could Layer 1 be applied to any new page without modification? | YES |
| Could Layer 2 be generated from a content inventory + zone mapping? | YES (with a content architect agent) |
| Would a new page need a new Phase 0? | YES (different CSS = different deallocation targets) |
| Would a new page need different grid wrappers? | YES (different content structure = different grids) |
| Would the perception thresholds transfer? | YES (human perception is constant) |
| Would the accessibility requirements transfer? | YES (WCAG is constant) |
| Would the soul constraints transfer? | YES (identity is constant) |
| Would the zone color palette transfer? | PARTIALLY (warm palette constraint transfers; specific hex values are page-specific) |

### Final Ratio

**At the execution level (specific CSS selectors and values):**
- 46% fully agnostic
- 15% semi-agnostic (agnostic principle, content-tuned values)
- 40% content-specific

**At the principle level:**
- 100% agnostic

**At the CSS line count level:**
- 53% fully agnostic
- 15% semi-agnostic
- 32% content-specific

---

## COMPARISON: MASTER PROMPT VS REMEDIATION SPEC

### Master Prompt Content Agnosticism

The master prompt is ALMOST ENTIRELY CONTENT-AGNOSTIC at the execution level:

| Section | Classification | Evidence |
|---------|---------------|----------|
| A1-A8 Conviction | A | Discusses principles, not specific sections |
| B1 Spatial | A | Rules about container width, CPL, void thresholds -- universal |
| B2 Soul | A | CSS prohibitions -- universal |
| B3 Compositional | A | Mechanism counts, transition types -- universal |
| B4 Multi-coherence | A | CCS, reinforcing pairs -- universal |
| B5 Scale-channel | A | Channel counts, scale limits -- universal |
| B6 Metaphor gates | A | Quality criteria -- universal |
| B7 Process | SA | P-01 mentions "content inventory BEFORE metaphor" (agnostic method); estimation formulas use generic variables |
| B8 TC routing | A | Pipeline phases -- universal |
| B9 PA routing | A | Auditor assignments -- universal |
| B10 Self-check | A | Checklist items -- universal |
| B11 Content Transform | SA | CT-01 mentions "RESEARCH-SYNTHESIS.md" (content-specific reference); CT-02 through CT-08 are universal tone/quality rules |
| B12 Recovery | A | Process protocols -- universal |
| C1-C7 Coordination | A | Team topology, gates, PA deployment -- universal |
| D Closing | A | Philosophy -- universal |
| E Reference Library | SA | File paths reference specific project files, but routing pattern is universal |
| Appendix Parameters | A | Threshold values -- universal |

**Master prompt agnosticism: ~90% agnostic at execution level.** Only B11 CT-01 (naming RESEARCH-SYNTHESIS.md), Section E file paths, and occasional content references (like "RESEARCH-SYNTHESIS" in B8/C1) are content-specific.

### The Inversion

| Dimension | Master Prompt | Remediation Spec |
|-----------|--------------|-----------------|
| Content agnosticism (execution) | ~90% | ~46% |
| Content agnosticism (principle) | ~100% | ~100% |
| Operational effectiveness | LOW (sub-perceptual output) | HIGH (perceptible output) |

**This is the fundamental trade-off:** The master prompt's high agnosticism produced LOW effectiveness because agnostic rules cannot specify perceptible values. The remediation spec's lower agnosticism produced HIGH effectiveness because content-specific recipes generate perceptible CSS.

The master prompt says "backgrounds must vary" (agnostic, but what values?). The remediation spec says "S1 = #FEF5EB, S5 = #FAF8F5" (content-specific, but perceptible).

---

## IMPLICATIONS FOR PIPELINE REUSE

### What Transfers Directly (Copy-Paste Reusable)

1. **Phase 6 entirely** (element-level richness): inline code, link hover, table hover, section indicator -- 6 CSS rules, any page.
2. **Phase 7 core** (accessibility): selection, focus, skip-link, reduced-motion -- 4 CSS blocks, any page.
3. **Phase 3.2-3.4** (divider margins, callout family, table headers): component library CSS, any page.
4. **Perception Thresholds Reference**: 8 property minimums, any page.
5. **Phase 8 checklist items**: 8B (gap verification), 8C (scale verification), 8D (soul check), 8F (accessibility check) -- any page.

### What Transfers as a Template (Parameter-Driven)

1. **Phase 0 methodology**: "Identify CSS below perception thresholds and delete." Requires per-page analysis.
2. **Phase 2 approach**: "Zone backgrounds with >= 10 RGB delta." Values determined by content.
3. **Phase 4 approach**: "Typography varies with >= 2px font-size delta." Values determined by zone mapping.
4. **Phase 5 approach**: "Spatial rhythm varies with >= 8px margin delta." Values determined by density arc.
5. **Phase 3.1 approach**: "Section-level borders on alternating sections." Sections chosen per page.

### What Does NOT Transfer

1. **Specific zone-to-selector mappings** (`.zone-s1 p`, `.zone-s5 h2`, etc.): each page has its own sections.
2. **Grid wrapper HTML** (`.tension-pair`, `.sequence-grid`, `.hypothesis-grid`): each page has its own content structure.
3. **Phase 8A cascade table**: each page has its own transition points.
4. **Phase 8E binary richness checks**: each page has its own section comparisons.

---

## VERDICT

**The remediation spec is a ONE-OFF FIX built from REUSABLE PRINCIPLES.**

To transform it into a reusable pipeline, split it into three layers:

| Layer | Lines | Reuse | Content |
|-------|-------|-------|---------|
| **Universal Base** | ~165 CSS | 100% copy-paste | Callout family, element-level, accessibility, divider margins, perception thresholds |
| **Zone Template** | ~100 CSS (template) | Parameterizable | Zone colors, typography, spacing, borders -- driven by content inventory |
| **Content-Specific** | ~45 CSS + HTML | 0% reuse | Grid wrappers, callout variant assignments, verification comparisons |

**Reusability by layer: 53% fully reusable, 32% template-reusable, 15% one-off.**

**The key insight:** The master prompt tried to be 90% agnostic and produced flat output. The remediation spec is 46% agnostic and produced rich output. The OPTIMAL pipeline is ~53% agnostic base + ~32% parameterized template + ~15% per-page custom -- which is exactly what the remediation spec achieves, but not intentionally. Making this 3-layer split DELIBERATE would create a reusable enrichment pipeline.

---

## SPECIFIC DECISIONS THAT ASSUMED CONTENT KNOWLEDGE

For completeness, every decision in the remediation that could ONLY have been made with knowledge of RESEARCH-SYNTHESIS content:

1. **"S7 has tension pairs"** -- only because the content has 3 tensions with resolutions.
2. **"S8 has 4 sequence blocks"** -- only because the content describes 4 component sequences.
3. **"S11 has 3 hypothesis tables"** -- only because the content has density/axis/combination hypotheses.
4. **"S5 border is RED (--color-primary)"** -- because S5 is the visual anchor (components table).
5. **"S12 border is heavier (4px)"** -- because S12 is the closing bookend.
6. **"Zone 1 = warm, Zone 2 = cool, Zone 3 = warm"** -- because the content arc is "explore -> analyze -> resolve."
7. **"Typography compresses in S5-S8"** -- because the content gets analytically dense in the middle.
8. **"S3 callout is info, S7 tension callouts are gotcha, S7 resolution callouts are tip"** -- semantic variant assignment based on content meaning.
9. **"12 zone color tokens"** -- because there are 12 sections with a convergence metaphor.
10. **"T9 coherence fix"** -- specific to the S9->S10 transition being too similar.
11. **"Bridge-prose at 3 specific locations"** -- cognitive reframe prose written for this content's argument arc.
12. **"Section padding 64px->48px->40px"** -- warm (generous) -> cool (compressed) -> resolved (tight) mapping to THIS content's density arc.

**Total content-specific decisions: 12 major decisions.** All others derive from agnostic principles or component library patterns.

---

**END OF CONTENT AGNOSTICISM ANALYSIS**

**Final ratios:**
- Execution level: 46% agnostic / 15% semi-agnostic / 40% content-specific
- Principle level: 100% agnostic
- CSS line level: 53% agnostic / 15% semi-agnostic / 32% content-specific
- Decision level: 12 content-specific decisions out of ~48 total steps = 25% content-specific
