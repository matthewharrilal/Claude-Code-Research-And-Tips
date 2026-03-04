# Wave 1 OD -- Fresh-Eyes Audit

**Auditor:** Independent, zero prior context
**Source:** `wave-1-retro.md` (242 lines), spot-checked against 4 underlying worker/buddy files

---

## 1. Taxonomy Coherence

The 3 base categories (Instrument / Gesture / Component) are reasonably well-defined but NOT unambiguously assignable. The retro itself documents 30+ boundary cases, which is roughly 19% of the 159-element corrected total. That is a high ambiguity rate for a classification system.

**Core problem:** The categories are defined by *primary function*, but most elements serve multiple functions. The retro resolves this by "assign primary, note secondary" -- which works as a convention, but it means the taxonomy is not a partition; it is a judgment-weighted ranking. Two competent analysts could disagree on 15-20% of assignments and both be correct. The retro acknowledges this implicitly but does not state it as a limitation.

**The 3 supplementary categories (Phantom / Modifier / Infrastructure) are exclusion buckets, not classification categories.** They define what does NOT count, not new positive types. This is fine taxonomically -- exclusion criteria sharpen the core categories -- but calling them "categories" overstates their role. They are filters.

**Sub-Element is genuinely problematic.** It creates a granularity axis orthogonal to the I/G/C axis. A Sub-Element can be a sub-Instrument or a sub-Component, which means it is not a category at the same level as I/G/C. The retro correctly proposes it as a "meta-category," but the practical effect is that the catalog has inconsistent granularity: OD-004 catalogs sub-instruments independently (Stratum Depth Label, Survey Meta Row), while OD-005 merges equivalent sub-instruments (Meta Chips into Header). The "Evidence DNA precedent" is invoked to justify OD-004's approach, but that precedent came from a calibration document, not from a principled granularity rule.

**Verdict:** Functional but soft. The taxonomy works as a shared vocabulary for discussion, not as a rigorous classification scheme. Acknowledge this in the final catalog rather than treating category assignments as definitive.

---

## 2. Cross-File Pattern Validity

The cross-file patterns are the strongest part of the retro. Most pass the "independent designer" test:

- **Exploration Header (6/6 files):** Genuine shared vocabulary. Every OD file opens with the same dark-header + monospace-ID + serif-title + hypothesis structure. Two independent designers given the same design system would produce this.
- **Callout System (6/6 files):** Genuine. The 4px-left-border + label + body pattern is a design-system primitive. Clearly shared DNA.
- **Scroll Witness (3/6 files):** Genuine but the retro overstates similarity. OD-001 (chapter fill bars), OD-005 (zone markers), and OD-006 (CSS Houdini fractal TOC) are architecturally different. They share *purpose* (scroll-position awareness) but not *implementation*. A pattern catalog should distinguish shared-purpose from shared-implementation.
- **Typography Compression Gradient (3/6 files):** Borderline. Font-size decreasing across sections is a general typographic practice, not necessarily shared vocabulary. The specific implementations (OD-002 act headers, OD-004 strata body, OD-006 line-height) differ significantly. This is more "common typographic technique" than "shared design-system pattern."
- **Code Block Dark Inversion (5/6 files):** This is just dark-mode code blocks -- a near-universal web pattern. Calling it a cross-file pattern of this design system specifically is like calling "paragraphs use `<p>` tags" a pattern. Technically true but not analytically useful.

**Verdict:** 4 of 6 instrument patterns and 3 of 7 component patterns are genuinely shared vocabulary. The rest are common web practices elevated to pattern status by the workers' thoroughness. The retro should distinguish between design-system-specific patterns and industry-standard techniques.

---

## 3. Corrected Counts Defensibility

The correction logic is internally consistent with one notable exception:

- **Removals follow a single principle:** No DOM instantiation = no catalog entry. Applied consistently across OD-001 (Research Badges), OD-002 (Act Divider), OD-006 (Focus Visible, Print, Reduced Motion). Defensible.
- **Additions follow a single principle:** Buddy found a real element with its own CSS class and reader function. Applied consistently across OD-001 (::selection), OD-002 (Callout Essence Font Shift), OD-003 (.task-island--featured), OD-004 (Exploration Header). Defensible.
- **Merges follow a single principle:** Element is a sub-mechanism of a parent, not independent. Applied to OD-005 (Meta Chips, Spoke Divider) and OD-006 (TOC Marker). Defensible.

**The exception:** OD-005 Return-to-Map Link is reclassified from Component to Instrument, while OD-005 Meta Chips are merged into a parent. These are different correction types applied in the same file. The reclassification is justified (consistency with Breadcrumb), but the retro counts it as a "removal" in the table header when it is actually a reclassification. The corrected count table conflates removals-from-a-category with removals-from-the-catalog. OD-005 shows -3 in "Buddy Removes" but only the Meta Chips merge and Spoke Divider merge actually reduce the total; the Return Link reclassification moves it between categories without changing the total. The corrected total of 23 should be 24 if the Return Link is merely reclassified rather than removed.

**Wait -- re-reading:** The table says OD-005 raw = 26, corrected = 23, with -3 removals. If Meta Chips merges into Header (-1), Spoke Divider merges into Gesture (-1), and Return Link reclassifies (net 0), the corrected total should be 24, not 23. Either there is an arithmetic error, or the Return Link reclassification is being double-counted as both a Component removal and an Instrument addition (but the +0 in the Buddy Adds column suggests no addition was counted). This is a real discrepancy.

**Verdict:** Largely defensible. One arithmetic inconsistency in OD-005 corrected count (should be 24, not 23).

---

## 4. Boundary Case Consistency

The retro resolves most boundary cases consistently, but two inconsistencies stand out:

**Inconsistency A: Sub-element treatment.** OD-004's Stratum Depth Label and Survey Meta Row are RETAINED as independent instruments (justified by "Evidence DNA precedent"). OD-005's Meta Chips are MERGED into parent (justified by "not independent"). Both are sub-elements of parent components with their own CSS classes. The distinguishing criterion is supposed to be "could it appear in a different context and still function?" -- but the retro never actually applies this test to either case. It defers to precedent for OD-004 and to the buddy's argument for OD-005. This is outcome-driven reasoning, not principle-driven.

**Inconsistency B: Infrastructure exclusion scope.** OD-006's `:focus-visible`, print stylesheet, and reduced motion are removed as "infrastructure." But OD-006's Skip Link (#42) is RETAINED as a Component despite being equally standard accessibility infrastructure. The retro says "it has defined structure and consistent treatment" -- but so does `:focus-visible`. The real distinction seems to be that Skip Link has HTML structure (DOM element) while the others are CSS-only patterns. But this criterion is never stated explicitly.

**Verdict:** Most boundary cases are handled well. The sub-element granularity problem is the most significant unresolved inconsistency and will compound as the catalog grows across waves.

---

## 5. Missing Perspectives

The retro does not ask:

1. **"Are we cataloging what was DESIGNED or what was BUILT?"** The phantom discussion touches this but does not resolve it. The OD-006 Semantic Bridge is "partially implemented" -- concept-link exists but target does not. Is the catalog documenting design intent or functioning artifacts? The retro answers inconsistently: phantoms are excluded (favoring "built"), but the Semantic Bridge is retained with a flag (favoring "designed"). A principled stance is needed.

2. **"What is the floor of perceptual significance?"** The retro flags OD-004's zone backgrounds as 3-4 RGB points apart and calls it "borderline." But it never establishes whether that zone background gesture SHOULD be in the catalog. The 5-RGB-point threshold in the Wave 2 recommendations is arbitrary and untested. More importantly: if a gesture is imperceptible to readers, does it belong in a vocabulary catalog? A catalog of *intent* says yes; a catalog of *reader experience* says no.

3. **"Does element count per file correlate with file complexity, or with worker thoroughness?"** OD-006 has 41 corrected elements; OD-002 has 18. Is OD-006 genuinely 2.3x richer, or was the OD-006 worker 2.3x more granular? The retro ranks workers by "thoroughness" but never asks whether different workers applied different granularity thresholds. The OD-006 worker's inclusion of infrastructure-as-gestures suggests a systematically lower bar for inclusion.

4. **"Is the I/G/C taxonomy the RIGHT taxonomy?"** All 12 agents accepted the framework as given. Nobody asked whether a different decomposition (e.g., by function: wayfinding / rhythm / content-delivery / emphasis) might produce cleaner categories with fewer boundary cases. The 30+ boundary cases suggest the I/G/C distinction may not carve the design space at its natural joints.

---

## 6. Taxonomy Evolution: Are New Categories Needed?

**Phantom:** YES, clearly needed -- as an exclusion filter, not a category. The retro already treats it this way. Just rename it from "category" to "exclusion criterion."

**Modifier:** MARGINAL. Only 2 examples across 159 elements (Solid Offset in OD-006, arguably .task-island--featured in OD-003). Creating a category for 1.3% of elements adds taxonomic overhead without proportional clarity. Better to handle modifiers as a note on the parent element: "this element has modifier variants: [list]."

**Infrastructure:** YES, needed as an exclusion filter. The OD-006 worker's overcounting demonstrates the failure mode when infrastructure is not explicitly excluded. Important for Wave 2+ worker instructions.

**Sub-Element:** NEEDED but should not be a category. It should be a GRANULARITY RULE: "Catalog at the level of independent reader function. Sub-elements with dependent reader function are listed as named slots within the parent entry." This converts an ambiguous meta-category into a clear decision procedure.

**Net recommendation:** Keep the 3-category model (I/G/C). Add 2 exclusion filters (Phantom, Infrastructure). Replace the Modifier and Sub-Element proposals with annotation conventions on existing entries. The catalog is better with 3 clean categories plus conventions than with 7 categories where 4 are edge cases.

---

## Summary Verdict

| Dimension | Rating | Key Issue |
|-----------|--------|-----------|
| Taxonomy coherence | **Functional, not rigorous** | 19% boundary-case rate; judgment-dependent |
| Cross-file patterns | **Mostly genuine** | 3-4 patterns are industry-standard, not system-specific |
| Corrected counts | **Defensible with 1 error** | OD-005 total should be 24, not 23 |
| Boundary consistency | **Good with 2 gaps** | Sub-element granularity inconsistent; infrastructure scope unclear |
| Missing perspectives | **4 unasked questions** | Design-vs-built, perceptual floor, granularity calibration, alternative taxonomies |
| New categories | **2 of 4 warranted** | Phantom and Infrastructure as exclusion filters only |

The retro is well-constructed and honest about its limitations. Its primary weakness is treating a judgment-dependent classification system as though it produces definitive assignments. The catalog will be more useful if it embraces the fuzziness: present I/G/C as primary-function labels with acknowledged overlap, not as mutually exclusive bins.
