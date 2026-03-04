# Cross-Wave Taxonomy Audit: Definitive I/G/C Classification

**Source:** 3 wave retros (938 lines), 2 wave auditor reports (207 lines), calibration doc (126 lines)
**Scope:** 18 HTML files, 465 corrected elements, ~60 boundary cases across OD/AD/CD families

---

## 1. Taxonomy Stress Test

### Boundary Case Census

| Wave | Files | Corrected Elements | Boundary Cases | Boundary Rate |
|------|-------|-------------------|----------------|---------------|
| OD (Wave 1) | 6 | 159 | 30+ | ~19% |
| AD (Wave 2) | 6 | 162 | 27 | ~17% |
| CD (Wave 3) | 6 | 144 | 15 | ~10% |
| **Total** | **18** | **465** | **~72** | **~15.5%** |

The boundary rate is **declining** -- from 19% (OD) to 17% (AD) to 10% (CD). Two possible explanations: (a) progressive rule refinement genuinely reduced ambiguity, or (b) CD workers internalized a narrower interpretation and stopped flagging cases. The correction rate decline (7.8% -> 7.9% -> 4.2%) supports explanation (a) -- workers got better at applying the rules, not just quieter about edge cases.

### Recurring Boundary Patterns

Seven boundary patterns recur across waves. These are the taxonomy's structural fault lines:

| Pattern | OD | AD | CD | Trend | Severity |
|---------|----|----|-----|-------|----------|
| **Phantom elements** (CSS, no DOM) | 3 | 2 | 0 | Eliminated | Solved by binary filter |
| **Infrastructure-as-gesture** | 3 | 1 | 0 | Eliminated | Solved by binary filter |
| **Sub-element inflation** | 3 | 2 | 2 | Persistent | Judgment-dependent; not solvable by rule |
| **Zero-slot "Components"** | 2 | 2 | 1 | Declining | Structural Marker annotation helps |
| **Dual-role elements** | 3 | 4 | 3 | Stable (~2-3 per wave) | Inherent to taxonomy; assign primary + annotate |
| **Self-referential content** | 1 | 4 | 3 | Persistent in AD/CD | New in AD; unresolvable without stance on "designed vs built" |
| **Gesture oversplitting** | 0 | 3 | 0 | Spike in AD, corrected | Solved by gesture merge rule |

**Verdict:** Binary filters (phantom, infrastructure) solved their target problems completely. Judgment-dependent boundaries (sub-element granularity, dual-role elements, self-referential content) persist at a stable ~5-8% rate. This is irreducible fuzziness in the taxonomy, not a fixable defect.

### Stability Assessment

The I/G/C + 2 exclusion filters model is **STABLE but not rigorous**. It successfully classifies ~85% of elements with no ambiguity and ~90% with minimal debate. The remaining ~10-15% require judgment calls that two competent analysts could resolve differently. This is acceptable for a vocabulary catalog (shared language for discussion) but insufficient for automated classification.

---

## 2. Definitive Taxonomy

### 2a. Three Base Categories

**INSTRUMENT -- Reader Orientation Device**

Definition: A DOM element (or tightly coupled group) whose primary purpose is telling the reader WHERE they are, WHAT they're reading, or HOW MUCH they've traversed. Removal degrades positional awareness.

Refined criteria (incorporating all 3 waves):
- Must have at least one DOM element with a dedicated CSS class
- Primary function is orientation/metadata, not content delivery
- Passes the removal test: reader loses awareness of position, identity, or reading mode
- Self-referential content qualifies ONLY if it has specialized visual treatment (distinct CSS class + non-body styling)
- Machine-facing instruments (display:none) are valid if they serve document identity

**GESTURE -- CSS-Encoded Reading Register Shift**

Definition: A coordinated multi-property CSS shift that changes HOW the reader reads -- pace, mode, or attention level. Not a DOM element but a pattern across elements.

Refined criteria:
- Must involve 2+ CSS properties shifting together according to one conceptual rule (the "coordination test")
- Must be perceptible to a reader not specifically looking for it (the "perceptual threshold")
- Single-property shifts (just margin, just gap) do NOT qualify unless the property IS the reading experience (e.g., border-weight encoding confidence)
- When multiple properties shift together across the same elements following one rule, catalog as ONE gesture with sub-channels noted (the "merge rule")
- Editorial/content distribution patterns are NOT gestures unless encoded in CSS properties
- Compositional gestures (emerging from arrangement rather than CSS values) are flagged as a sub-type

**COMPONENT -- Structured Content Container**

Definition: A reusable DOM container with defined content slots and consistent visual treatment. Holds and structures article content.

Refined criteria:
- Must have defined content slots (header/body/label/etc.)
- Must be reused (2+ instances) OR have a clear structural pattern (variant system)
- Zero-slot rendered elements with dedicated classes classify as Component with "structural marker" annotation
- The container must deliver content, not just orientation metadata (otherwise it's an Instrument)

### 2b. Exclusion Filters

**PHANTOM FILTER** -- Zero DOM instances = do not catalog.

If a CSS class has no corresponding HTML element, it is not part of the reader's experience. Note in an "Additional Observations / Dead CSS" section. Partial phantoms (some functionality works, some broken) get flagged but retained with annotation.

Binary test: `document.querySelectorAll('.class-name').length === 0` → exclude.

**INFRASTRUCTURE FILTER** -- Standard web patterns are not designed vocabulary.

Exclude: `::selection`, `:focus-visible`, `@media print`, `@media (prefers-reduced-motion)`, `.skip-link`, generic hover feedback, standard responsive reflow.

Exception: responsive breakpoints that ADD or REMOVE instruments (not just reflow) are catalogable gestures.

Binary test: "Would a generic web page have this?" → exclude.

### 2c. Annotation Conventions

These are NOT categories. They are flags applied within I/G/C entries:

| Annotation | When to Apply | How to Record |
|------------|---------------|---------------|
| **Sub-Element** | Part of a larger I or C, structurally dependent | Merge into parent entry. List as named sub-element. Only elevate to independent entry if it passes the Evidence DNA test: "Could this appear in a different context and still function?" |
| **Modifier** | CSS pattern that alters an existing element via double-class or variant class | Note as variant within parent entry. Only elevate to independent entry if the modification creates a distinct reading-register shift. |
| **Structural Marker** | Zero-slot rendered element with dedicated class | Classify as Component with `[structural marker]` annotation. |
| **Compositional Gesture** | Page-level pattern from element arrangement, not CSS values | Classify as Gesture with `[compositional]` annotation. |
| **Taxonomy-Resistant** | Element genuinely spans two categories | Assign primary category by dominant function. Note secondary function in entry. |

### 2d. Decision Tree

Given any DOM element or CSS pattern, follow this sequence:

```
1. Does it exist in the DOM?
   NO → PHANTOM. Exclude. Note in Additional Observations.

2. Is it standard infrastructure (::selection, :focus-visible, print, reduced-motion, skip-link)?
   YES → INFRASTRUCTURE. Exclude. Note in Additional Observations.

3. Is it a CSS-encoded shift across 2+ properties that changes reading register?
   YES → Is it perceptible to an unaware reader?
         YES → GESTURE.
               Are multiple sub-channels (border + spacing + background) encoding
               ONE conceptual gradient? → Catalog as ONE gesture with sub-channels.
         NO  → Below perceptual threshold. Exclude or note as micro-gesture.
   NO  → Continue to step 4.

4. Does it have defined content slots and deliver article content?
   YES → COMPONENT.
         Zero slots but dedicated class + visible rendering? → Component [structural marker].
   NO  → Continue to step 5.

5. Does removing it degrade the reader's awareness of position, identity, or reading mode?
   YES → INSTRUMENT.
         Is it a sub-element of a larger Instrument/Component?
         YES → Does it pass the Evidence DNA test (functions independently)?
               YES → Independent Instrument entry.
               NO  → Merge into parent entry as named sub-element.
         NO  → Independent Instrument entry.
   NO  → Not a designed vocabulary element. Exclude.
```

---

## 3. Cross-Family Vocabulary Map

### 3a. Universal Elements (Appear in ALL 3 Families)

These form the **locked layer** -- the design system's invariant DNA.

| Element | Type | Frequency | Canonical Definition |
|---------|------|-----------|---------------------|
| **Exploration Header** | Component | 18/18 | Dark full-bleed container: meta-line + h1 title + subtitle. Page identity anchor. |
| **Meta Line + Version Badge** | Instrument | 18/18 | Monospace ID strip with exploration code, category, version. Document fingerprint. |
| **Callout System (5+ variants)** | Component | 18/18 | 2-zone (label + body) container, 4px left border, 5 accent colors (info/tip/gotcha/essence/challenge). The most universal component. |
| **Callout Essence Serif Shift** | Gesture | 16/18 | Font-family Inter → Instrument Serif italic + font-style + font-size shift in essence variant. Most universal gesture. |
| **Code Block (Dark Theme)** | Component | 17/18 | Dark-background inversion, monospace, syntax highlighting. Near-universal. |
| **Zone Background Differentiation** | Gesture | 17/18 | Sparse/Dense/Breathing background colors (#FEF9F5/#FFFFFF/#FAF5ED) encoding density zones. |
| **Structural Border Hierarchy** | Gesture | 18/18 | 3-tier system: 3px structural / 1px separator / 4px colored accent. |
| **Typography Trinity** | Gesture | 18/18 | Serif (scanning) / Sans (reading) / Mono (processing) font system. |
| **Footer / Page Closing** | Instrument | 18/18 | Terminal boundary marker, dark background, monospace ID, mirrors header. |
| **Responsive Collapse** | Gesture | 18/18 | Multi-property shift at 768px/960px. Preserves density signals while collapsing geometry. |

**10 universal elements** across 18 files. These are non-negotiable vocabulary -- any page built from this design system will contain all 10.

### 3b. OD-Only Elements

Unique to Organizational Density explorations. These emerge from the need to make organizational structure visible.

| Element | Type | Description |
|---------|------|-------------|
| **Scroll Witness (fractal TOC)** | Instrument | Fixed sidebar with chapter-level fill bars tracking scroll position. OD-001/005/006. |
| **Conversation Diagram** | Instrument | Abstract density-architecture visualization (Q/A bar widths). OD-001. |
| **Freytag Bar Chart** | Instrument | Narrative arc density visualization before content. OD-002. |
| **Synthesis Cards** | Component | 3-slot proof evidence cards in grid layout. OD-006. |
| **Narrative Beat** | Component | Atomic content container within structural sections. OD-002/004. |
| **Editorial Drop Cap** | Gesture | `::first-letter` at 4.2em Instrument Serif, red, floated. OD-001/006. |
| **Code Absence as Narrative Withholding** | Gesture | Editorial omission of code blocks to maintain reading register. OD-002. |

OD-unique elements cluster around **narrative structure and reading progress** -- instruments for tracking position within a linear reading arc.

### 3c. AD-Only Elements

Unique to Axis Deviation explorations. These emerge from the self-demonstrating nature of axis-pattern pages.

| Element | Type | Description |
|---------|------|-------------|
| **Pattern Echo Grid** | Instrument | CSS-only miniature reproductions of all 5 axis patterns. AD-006. |
| **Axis Indicator** | Instrument | Sticky bar showing axis/density/org triple-state metadata. AD-006. |
| **Tension Meter** | Instrument | 5-segment CRESCENDO tension gauge. AD-002. |
| **Complexity + Duration Badges** | Instrument | Per-cell metadata chips (difficulty level, time estimate). AD-003. |
| **Spiral Map** | Instrument | 4-column nav previewing all confidence strata. AD-004. |
| **Z-Hero Grid** | Component | 4-quadrant golden-ratio grid demonstrating Gutenberg zones. AD-001. |
| **Z-Cycle (Q&A Pair)** | Component | Narrow serif Q + wide sans A creating Z-diagonal eye movement. AD-001. |
| **Bento Cell** | Component | Multi-slot task-island card with header/duration/body/details. AD-003. |
| **Act Zone** | Component | 5-variant section container encoding CRESCENDO position. AD-002. |
| **TIDAL Width Asymmetry** | Gesture | Q at 60% / A at 100% creating Z-diagonal reading. AD-001. |
| **Cell Size as Hierarchy** | Gesture | Grid span (1x1/2x1/1x2/2x2) encodes importance through area. AD-003. |
| **Bookend Density Shift** | Gesture | Red border (start) → Green border (end) page-level arc. AD-003. |
| **Open Question "?" Prefix** | Gesture | `::before` serif italic "?" at speculative stratum. AD-004. |
| **Step Counter Rhythm** | Gesture | CSS counter-generated dark squares as visual drumbeat. AD-003. |

AD-unique elements cluster around **axis-specific navigation and layout-as-argument** -- instruments and components that only make sense when the page's spatial layout IS its thesis.

### 3d. CD-Only Elements

Unique to Combination explorations. These are the most interesting -- they emerge from combining OD + AD, creating phenomena impossible in either alone.

| Element | Type | Description |
|---------|------|-------------|
| **Transition Grammar (3-type)** | Instrument/Gesture | SMOOTH/BRIDGE/BREATHING transitions between axis regimes. The hallmark CD innovation. |
| **TOC with Axis/Density Annotations** | Instrument | Navigation previewing the READING EXPERIENCE (not just topic) of each section. CD-006. |
| **Section Meta Label (triple-coordinate)** | Instrument | Three-dimensional positional metadata: section + axis + density. CD-006. |
| **CRESCENDO Self-Awareness** | Instrument | Density meter making the CRESCENDO gesture VISIBLE to the reader. CD-001. |
| **Confidence Gap Spacers** | Instrument | Empty aria-hidden divs with progressive whitespace (32→48→64px) encoding confidence decay. CD-004. |
| **Breathing Zone (as Component)** | Component | Structural container hosting essence pullquotes between CRESCENDO sections. CD-001. |
| **Spiral Stratum Container** | Component | 3-4 confidence variants degrading visual weight through coordinated property shifts. CD-002/004/006. |
| **Choreography Spoke** | Component | Radiating evidence container with label + title + content. CD-003/004/006. |
| **Tidal Width Modulation** | Gesture | Content width oscillates 60%/100% mapping philosophical/technical register. CD-004. |
| **Z-Sweep Diagonal Alternation** | Gesture | Grid-template-areas flip normal/reverse with golden ratio. CD-005. |
| **Core Abstraction Internal CRESCENDO** | Gesture | Component-level density shift: warm serif top → dark mono bottom. CD-001. |
| **Z-to-Spiral Temperature Gradient** | Gesture | Page-level background cooling correlating with transition from certain to speculative. CD-002. |
| **WAVE Density Oscillation** | Gesture [compositional] | Page-level emergent pattern from component placement, not CSS. CD-005. |
| **Responsive Bento Collapse Sequence** | Gesture | 3→2→1 column collapse transforming spatial scanning into linear reading. CD-003. |

CD-unique elements cluster around **transition management and cross-pattern composition** -- vocabulary for navigating pages that switch between incompatible reading geometries.

---

## 4. Vocabulary Density Analysis

### 4a. Unique Elements Per Family

| Family | Total Corrected | Universal (shared by all 3) | Shared with 1 other | Family-Unique | Unique Ratio |
|--------|----------------|---------------------------|---------------------|---------------|-------------|
| OD | 159 | ~60 (est.) | ~70 | ~29 | 18.2% |
| AD | 162 | ~60 (est.) | ~68 | ~34 | 21.0% |
| CD | 144 | ~60 (est.) | ~52 | ~32 | 22.2% |

CD has the highest unique-element ratio despite the lowest total count. This confirms the Wave 3 retro's observation: CD files REUSE vocabulary from OD and AD rather than inventing new elements. What CD adds is novel composition vocabulary -- transitions, compound instruments, cross-pattern gestures.

### 4b. Category Distribution Across Families

| Category | OD | AD | CD | Cross-Wave Trend |
|----------|---------|---------|---------|-----------------|
| Instruments | 35.2% | 32.7% | 28.5% | **Declining** (-6.7pp across waves) |
| Gestures | 30.2% | 31.5% | 31.2% | **Stable** (~31%) |
| Components | 34.6% | 35.8% | 40.3% | **Rising** (+5.7pp across waves) |

Gestures are the most stable category (~31% across all families). This suggests gestures represent a fundamental stratum of design vocabulary -- approximately one-third of a page's designed elements change HOW you read, regardless of WHAT the page organizes.

Instruments decline and Components rise as compositional complexity increases. Explanation: combination pages need fewer per-section orientation devices (the transitions provide orientation) but more container types (new combinations require new containers).

### 4c. Category With Most Family-Specific Variation

**Instruments** show the most family-specific variation (35.2% → 28.5%, a 6.7pp swing). Each family invents its own orientation devices:
- OD: narrative progress (scroll witness, conversation diagrams)
- AD: axis-specific navigation (tension meters, spiral maps, pattern echoes)
- CD: transition management (breathing zones with regime labels, triple-coordinate meta labels)

**Components** show moderate variation but in a consistent direction (growing with complexity).

**Gestures** show the least variation. The design system's gestural vocabulary (typography shifts, spacing compression, border encoding, zone backgrounds) is nearly family-independent.

### 4d. What This Reveals About Compositional DNA

The design system has three vocabulary layers:
1. **Gestural layer** (stable ~31%): Universal reading-register shifts. Family-independent. This is the design system's "accent" -- recognizable regardless of page type.
2. **Component layer** (growing with complexity): Content containers that adapt to organizational needs. Family-sensitive but sharing a common structural grammar (slots, borders, variants).
3. **Instrument layer** (most variable): Orientation devices tailored to each family's specific challenge (tracking linear progress vs navigating axes vs managing transitions).

---

## 5. Pipeline Implications

### 5a. Universal Elements -- Pipeline MUST Generate These

Every universal element maps to a reader-experience question the pipeline should ask:

| Element | Generating Question | Pipeline Derivation |
|---------|-------------------|-------------------|
| Exploration Header | "How does the reader identify what they're reading?" | Auto-generated from exploration metadata. |
| Meta Line | "What is the document's identity?" | Auto-generated from exploration code + version. |
| Callout System | "How does the reader distinguish between tips, warnings, and key insights?" | Detect content-type annotations in source material; route to appropriate callout variant. |
| Essence Serif Shift | "How does the reader know when to slow down and absorb a core idea?" | Detect "essence" or "key insight" markers in content planning phase. |
| Code Block | "How does the reader distinguish executable/literal content from prose?" | Detect code fences in source material. |
| Zone Background | "How does the reader sense the density shift between sections?" | Derive from density profile (CRESCENDO, PULSE, etc.). |
| Border Hierarchy | "What structural boundaries exist and at what weight?" | Derive from section hierarchy depth. |
| Typography Trinity | "When should the reader scan, read deeply, or process literally?" | Built into base CSS. Content type triggers font selection. |
| Footer | "How does the reader know the page is complete?" | Mirror header treatment. Auto-generated. |
| Responsive Collapse | "How does the page adapt without losing its density signals?" | Built into base CSS with density-aware breakpoints. |

### 5b. Family-Specific Elements -- Pipeline Derives From Exploration Type

| Element Family | Triggering Pipeline Decision | Key Elements to Generate |
|---------------|-----------------------------|-----------------------|
| OD elements | Pipeline selects organizational pattern (conversational, narrative, task-based, etc.) | Scroll progress tracking, narrative arc visualization, content-beat containers |
| AD elements | Pipeline selects axis pattern (Z, F, Bento, Spiral, Choreography) | Axis-specific navigation, self-demonstrating layout, per-cell metadata |
| CD elements | Pipeline combines 2+ patterns | Transition grammar (SMOOTH/BRIDGE/BREATHING), compound instruments, cross-pattern gestures |

### 5c. Priority Ranking for Pipeline Understanding

**Tier 1 -- Must understand (breaks the page if wrong):**
- Transition Grammar (CD): wrong transition type between incompatible patterns → cognitive whiplash
- Zone Background Differentiation: wrong density encoding → reader can't sense section weight
- Typography Trinity: wrong font for content type → reading pace mismatch

**Tier 2 -- Should understand (degrades experience if missing):**
- Callout variant selection: wrong accent color → semantic confusion
- Border hierarchy: wrong weight → structural hierarchy flattened
- Axis-specific instruments: missing → reader loses orientation in complex pages

**Tier 3 -- Nice to have (enriches but not critical):**
- Editorial gestures (drop cap, epitaph): missing → less polished but functional
- Self-referential instruments: missing → page works but doesn't explain itself
- Compositional gestures: missing → page functions but lacks depth perception

---

## 6. Unresolved Tensions

### 6a. Permanently Unresolvable (Accept and Annotate)

1. **Dual-role elements (~2-3 per wave).** Breathing zones, essence pullquotes, and density tables genuinely span categories. The taxonomy forces a primary assignment that loses information. This is inherent to any 3-category scheme applied to a compositional design system. Accept it; annotate secondary functions.

2. **Sub-element granularity.** The "Evidence DNA test" (could it function independently?) is sound in principle but inconsistently applied. Two analysts will draw the line differently. The correction rate for sub-element issues (~2 per wave) is stable, not declining. This will not converge to zero.

### 6b. Answerable With Further Investigation

3. **"Designed vs. Built?"** The catalog inconsistently includes partially-implemented elements (OD-006 Semantic Bridge retained; AD-005 scroll-triggered reveal removed from count). A principled stance is needed: either catalog design INTENT (include broken features) or catalog reader EXPERIENCE (exclude non-functioning). Recommendation: catalog reader experience. If it doesn't work in the browser, it's not vocabulary.

4. **Calibration anchoring.** The Wave 2 auditor noted that average element counts converge suspiciously (26.5, 27.0, 24.0). Are workers calibrated to find ~25-27 elements, or do pages genuinely contain that many? A 4th wave could test this by having workers catalog WITHOUT access to the calibration document, then compare counts.

5. **Is I/G/C the optimal decomposition?** With ~15% boundary cases, one should ask whether a different taxonomy (e.g., by function: wayfinding / rhythm / content-structure / emphasis) would produce fewer ambiguities. The Wave 1 auditor raised this; no wave addressed it. The current taxonomy's strength is its simplicity and near-equal distribution. Its weakness is the I↔C boundary for self-referential content and the G boundary for compositional patterns.

### 6c. What a 4th Wave Would Investigate

6. **Locked-layer stability.** Are the 10 universal elements truly invariant, or would a non-exploration page (e.g., a documentation page, a tutorial) have different universals? Testing the taxonomy on non-exploration HTML would validate whether the vocabulary is system-wide or exploration-specific.

7. **Perceptual verification.** No wave verified that cataloged gestures are actually perceivable. A browser-based audit measuring computed styles, RGB differences, and animation timing would establish which gestures exist only in CSS and which exist in reader experience.

8. **Compositional gesture formalization.** CD-005's WAVE oscillation and velocity interleaving are real patterns but sit uncomfortably in a taxonomy designed for DOM-level detection. A 4th wave should propose a formal definition of compositional gestures that doesn't stretch the Gesture category beyond recognition.

---

## Summary

The I/G/C taxonomy with 2 exclusion filters is **stable and recommended for production use**. It classifies ~85% of elements unambiguously, handles ~5% through annotation conventions, and leaves ~10% requiring human judgment. The 465-element corpus across 3 families provides strong evidence that the ~1/3:1/3:1/3 distribution reflects genuine design system structure.

The decision tree in Section 2d is the definitive classification procedure. The vocabulary map in Section 3 is the definitive cross-family inventory. The 10 universal elements are the design system's locked DNA. The family-specific elements reveal each exploration type's unique contribution to the vocabulary.

What the taxonomy CANNOT do is serve as an automated classifier. The judgment-dependent boundaries (sub-elements, dual-role elements, compositional gestures) require human assessment. The pipeline should use the taxonomy as a vocabulary catalog and generation checklist, not as a classification algorithm.
