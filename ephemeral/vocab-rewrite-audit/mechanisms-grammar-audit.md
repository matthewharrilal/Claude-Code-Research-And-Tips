# Fresh-Eyes Audit: mechanisms.md & grammar.md (Agent #2)

**Auditor:** mechanisms-grammar-audit-2 agent (Task #43)
**Date:** 2026-03-01
**Method:** Zero prior context. Read all 5 source files independently. Evaluated new files against old files and master synthesis for completeness, accuracy, and internal consistency.

**Note:** This is a second independent audit. A prior agent (Task #37) already wrote an audit to this path. This report supersedes that one with a fresh perspective.

---

## EXECUTIVE SUMMARY

**mechanisms.md:** GOOD -- 89 lines, well-structured. 2 SIGNIFICANT issues, 3 MINOR.
**grammar.md:** GOOD -- 78 lines, clean distillation. 1 SIGNIFICANT issue, 3 MINOR.
**Cross-file consistency:** GOOD -- 1 density-units contradiction.

The rewrite achieves an 87% line reduction (1,280 lines to 167 lines) while preserving all critical content. Both files are dramatically more readable and builder-friendly than their predecessors.

---

## PART 1: mechanisms.md AUDIT

### 1.1 Mechanism Coverage -- What Was Kept, Removed, and Added

**Original 18 mechanisms disposition:**

| Old # | Mechanism | In New File? | Action | Synthesis Backed? |
|-------|-----------|-------------|--------|-------------------|
| 1 | Border-Weight Gradient | YES (#1, Hierarchy) | KEPT | YES (Section 1.10) |
| 2 | 2-Zone Component DNA | YES (Component Patterns) | RECLASSIFIED | YES (Section 7: "reclassify as component pattern") |
| 3 | Solid Offset Depth | YES (#3, Depth/Emphasis) | KEPT | YES |
| 4 | Spacing Compression | YES (#4, Spatial) | KEPT | YES |
| 5 | Dense/Sparse Alternation | YES (#5, Spatial) | KEPT | YES |
| 6 | Width Variation | YES (#6, Spatial) | KEPT | YES |
| 7 | Zone Background Differentiation | YES (#7, Depth/Emphasis) | KEPT | YES |
| 8 | Scroll Witness / Sticky TOC | **NO** | **REMOVED** | **AMBIGUOUS -- see Issue #1** |
| 9 | Color Encoding | YES (#9, Component) | KEPT | YES |
| 10 | Border-Left Semantic Signaling | NO | REMOVED | YES (Section 2.5: "redundant with #1 + #9") |
| 11 | Typographic Scale Jumping | YES (#11, Hierarchy) | KEPT | YES |
| 12 | Progressive Disclosure | NO | REMOVED | YES (Section 2.5: "MISNAMED duplicate of #4") |
| 13 | Dark Header + 3px Border | YES (#13, Structure) | KEPT | YES |
| 14 | Footer Mirror | YES (#14, Structure) | KEPT | YES |
| 15 | Bento Grid | YES (#15, Spatial) | KEPT | YES |
| 16 | Drop Cap | YES (#16, Depth/Emphasis) | KEPT | YES |
| 17 | Code Block | YES (#17, Structure) | KEPT | YES |
| 18 | Data Table | YES (#18, Structure) | KEPT | YES |

**Score:** 15 kept, 2 correctly removed (#10, #12), 1 removed without clear backing (#8).

**New mechanisms added (from synthesis Section 3.1):**

| Technique | Present? | Category | Synthesis Required? |
|-----------|---------|----------|-------------------|
| Inline Code Styling | YES | Component | YES |
| Task Checklist | YES | Component | YES |
| Version Badge | YES | Component | YES |
| Decision Matrix | YES | Component | YES |
| Section Divider | YES | Structure | YES |
| Reasoning Columns | YES | Structure | YES |
| File Tree Indentation | YES | Structure | YES |
| Stratum Boundary Markers | YES (Component Patterns) | Pattern | YES |

**Score:** 8/8 uncataloged techniques added per synthesis recommendation.

---

### 1.2 Usage Frequencies -- Accuracy Check

Every frequency in mechanisms.md was cross-checked against the old mechanism-catalog.md and the master synthesis Section 1.10.

| # | Mechanism | New Count | Synthesis Count | Old Catalog Label | Match? |
|---|-----------|-----------|----------------|-------------------|--------|
| 1 | Border-Weight Gradient | 15/18 | 15/18 | HIGH | YES |
| 3 | Solid Offset Depth | 4-5/18 | 4-5/18 | HIGH | YES |
| 4 | Spacing Compression | 12+/18 | 12+/18 | HIGH | YES |
| 5 | Dense/Sparse Alternation | 18/18 | 18/18 | VERY HIGH | YES |
| 6 | Width Variation | 3-4/18 | -- | HIGH | YES |
| 7 | Zone Background Diff | 12/18 | 12/18 | MEDIUM | YES |
| 9 | Color Encoding | 16+/18 | 16+/18 | MEDIUM | YES |
| 11 | Typographic Scale | 18/18 | 18/18 | VERY HIGH | YES |
| 13 | Dark Header | 12-14/18 | 12-14/18 | HIGH | YES |
| 14 | Footer Mirror | 6-8/18 | 6-8/18 | MEDIUM | YES |
| 15 | Bento Grid | 10+/18 | 10+/18 | MEDIUM | YES |
| 16 | Drop Cap | 3/18 | 3/18 | MEDIUM | YES |
| 17 | Code Block | 12+/18 | 12+/18 | HIGH | YES |
| 18 | Data Table | 10/18 | 10/18 | LOW | YES |

**Score:** 14/14 exact matches. Zero inflation, zero deflation. No fabricated counts.

---

### 1.3 Origin Accuracy

| # | Mechanism | New Origin | Synthesis/Old Evidence | Correct? |
|---|-----------|-----------|----------------------|----------|
| 1 | Border-Weight Gradient | OD-004 | Old catalog: OD-004 confidence.html | YES |
| 3 | Solid Offset Depth | OD-001 | Synthesis Section 1.10 | YES |
| 4 | Spacing Compression | DD | Old catalog evidence from OD-004 but concept predates | DEBATABLE |
| 5 | Dense/Sparse Alternation | DD | DD-003 islands first demo | YES |
| 6 | Width Variation | DD | DD-006 fractal.html | YES |
| 7 | Zone Background | OD/CD | OD named concept, CD implemented tokens | YES |
| 9 | Color Encoding | Universal | All explorations | YES |
| 11 | Typographic Scale | Universal | All explorations | YES |
| 13 | Dark Header | Universal | All explorations | YES |
| 14 | Footer Mirror | Universal | All explorations | YES |
| 15 | Bento Grid | DD-003 | DD-003 archipelago | YES |
| 16 | Drop Cap | OD-001 | OD-001 first demo | YES |
| 17 | Code Block | Universal | All technical docs | YES |
| 18 | Data Table | Universal | All tabular data | YES |

**Note on #4:** The old catalog's primary CSS example (lines 168-194) uses OD-004 evidence. Labeling it "DD" is defensible since spacing variation existed in DD explorations, but "DD/OD" would be more precise. MINOR concern only.

**Score:** 13/14 confirmed correct, 1 debatable but defensible.

---

### 1.4 Identity-Locked Tags

Synthesis Section 7 required marking #13, #14, #17 as identity-locked.

| # | Mechanism | Tag in mechanisms.md | Correct? |
|---|-----------|---------------------|----------|
| 13 | Dark Header + 3px Border | "**Identity-locked** -- colors are fixed." | YES |
| 14 | Footer Mirror | "**Identity-locked.**" | YES |
| 17 | Code Block | "**Palette identity-locked.**" | YES |

**Score:** 3/3 correctly tagged.

---

### 1.5 Transition Grammar

**Naming convention:**
- Old mechanism-catalog.md: HARD CUT / SPACING SHIFT / CHECKPOINT
- Old compositional-rules.md: SMOOTH / BRIDGE / BREATHING
- Synthesis recommendation (Section 9.5): Use SMOOTH / BRIDGE / BREATHING
- New mechanisms.md: SMOOTH / BRIDGE / BREATHING

**Naming: CORRECT** per synthesis.

**Content accuracy:**

| New Type | Maps To (Old Catalog) | Description Match? |
|----------|----------------------|-------------------|
| SMOOTH ("Padding shift only, no border or background change, 32-48px") | SPACING SHIFT ("No border, no background change, spacing alone carries signal") | YES |
| BRIDGE ("3px primary border at boundary + optional background shift, 32px + border") | HARD CUT ("3px solid primary border, zone background change at boundary") | YES |
| BREATHING ("Full background shift + optional horizontal rule or label, 48-96px max") | CHECKPOINT ("borders + background + label, visible content") | MOSTLY -- new version is slightly less prescriptive about the label component |

**Selection rule (line 78):** "Same domain, different intensity = SMOOTH. Different domain = BRIDGE. Different phase = BREATHING." This is a clean distillation of the old catalog's Q&A decision tree (lines 694-700).

**Score:** Transition grammar is complete, correctly named, and accurately mapped.

---

### 1.6 Restraint Protocol

**Old version (lines 710-748, ~38 lines):** Density cap (4 per viewport), distribution (every third), restraint ratio (tier-specific deployment targets + rejection documentation).

**New version (lines 82-89, ~8 lines):** Density cap (4 per viewport), distribution (every third), quality qualifier ("imperceptible doesn't count"), philosophical framing ("natural landing zone, not a target").

**What was lost:**
1. Tier-specific deployment targets (Middle: 8-10, Ceiling: 12-15, Flagship: 16-18) -- ACCEPTABLE loss given the system is now "ALWAYS FLAGSHIP" per CLAUDE.md
2. Rejection documentation requirement ("document which mechanisms you CONSIDERED AND REJECTED") -- ACCEPTABLE but potentially valuable for flagship builds
3. Evidence for why 4 is the cap (ceiling experiment had 14 mechanisms concentrated in 20%, ~7 per viewport, none perceivable) -- ACCEPTABLE for understanding layer

**Score:** Restraint protocol adequately preserved. Lost content is either obsolete (tier targets) or appropriate for a different layer (evidence).

---

### 1.7 Framing Language

Synthesis Section 7 recommendation #4: "Add framing language: 'These mechanisms are illustrative, not exhaustive. Additional techniques that pass the Name Test and Transfer Test may be used.'"

mechanisms.md line 7: "These mechanisms are **illustrative, not exhaustive.** Additional techniques that pass both tests may be used."

**Score:** Exact match. Correctly implemented.

---

## PART 1 ISSUES

### ISSUE #1 (SIGNIFICANT): Mechanism #8 (Scroll Witness / Sticky TOC) silently removed

**Facts:**
- #8 exists in old mechanism-catalog.md (lines 284-314) with full CSS, transfer test, and usage notes
- #8 is NOT in the synthesis "What to Keep" list (Section 1.10)
- #8 is NOT in the synthesis "What to Delete" list (Section 2.5)
- #8 is NOT in the new mechanisms.md
- #8 was the ONLY mechanism requiring JavaScript (all others are pure CSS)

**Assessment:** The synthesis has a gap -- #8 fell through. It's neither recommended for keeping nor recommended for deletion. The rewriter appears to have interpreted absence from the "keep" list as implicit deletion. This is a reasonable interpretation but should be documented.

**Recommendation:** Either (a) add #8 back to Structure section with a "requires JS" note and usage "LOW" marking, or (b) add a one-line note explaining its removal (e.g., "Original #8 (Scroll Witness) omitted as it requires JavaScript rather than pure CSS").

### ISSUE #2 (SIGNIFICANT): Category reassignment of #4 and #17 without documentation

**#4 (Spacing Compression):**
- Old category: HIERARCHY (H) -- "Because it encodes confidence/importance"
- New category: Spatial -- moved without explanation
- The old catalog explicitly says "#4 Spacing Compression (Inverse Density-Confidence) [HIERARCHY]"
- The synthesis Section 7 proposed catalog lists #4 under SPATIAL

**Assessment:** The reassignment follows the synthesis recommendation, which is correct. However, the old catalog's Hierarchy classification was deliberate (spacing encodes semantic hierarchy, not just spatial position). The synthesis moved it to Spatial because the CSS property IS spatial (padding). Both interpretations are valid.

**#17 (Code Block):**
- Old category: COMPONENT (C) -- "Internal component patterns, semantic signals"
- New category: Structure
- The synthesis Section 7 proposed catalog lists #17 under STRUCTURE

**Assessment:** Also follows synthesis. Code blocks are structural landmarks in a page, so Structure makes sense.

**Impact:** The old file had a per-category selection protocol ("deploy AT LEAST ONE mechanism from each category"). Category reassignment changes which mechanisms satisfy that requirement. With #4 in Spatial instead of Hierarchy, the Hierarchy category has only 2 mechanisms (#1, #11) instead of 3.

**Recommendation:** Document the reassignments briefly, or note that category assignments follow the synthesis Section 7 proposed catalog.

### ISSUE #3 (MINOR): Numbering gaps unexplained

Numbers #2, #8, #10, #12 are missing from the sequence. New mechanisms use "--" instead of numbers. Builders encountering "mechanism #10" in older documents will be confused.

**Recommendation:** Add one line: "Numbers preserve original catalog IDs. Gaps reflect reclassified (#2) or removed (#8, #10, #12) mechanisms."

### ISSUE #4 (MINOR): New mechanism usage counts lack precision

New mechanisms use labels like "Common" (Inline Code), "CD-002+" (Task Checklist), "CD-006" (Version Badge). These are less precise than the #/18 format used for established mechanisms.

**Recommendation:** Standardize where possible. "Common" could become "12+/18" or "Frequent."

### ISSUE #5 (MINOR): CSS code blocks fully removed

The old catalog had ~370 lines of CSS examples across 18 mechanisms. The new file has zero CSS, referencing "components.css and tokens.css" instead. This follows the synthesis directive and is correct for the understanding layer. However, some mechanisms' CSS patterns (especially #3 Solid Offset Depth's `::after` technique) are hard to understand without seeing the CSS.

**Assessment:** Acceptable. The reference approach is sound. Builders will read components.css for implementation details.

---

## PART 2: grammar.md AUDIT

### 2.1 Rule Coverage -- What Was Kept, Condensed, and Removed

**Original 41 rules + 5 open questions mapped to new file:**

| Old Category | Old Count | New Coverage | Status |
|-------------|-----------|-------------|--------|
| Zone Nesting (N1-N4) | 4 rules | 4 bullets in Nesting section | COMPLETE |
| Spacing Rhythm (R1-R4) | 4 rules | 4 bullets in Rhythm section | COMPLETE |
| Background Zones (Z1-Z3) | 3 rules | 3 bullets in Zones section | COMPLETE |
| Component Density (D1-D3) | 3 rules | 4 bullets in Density section | COMPLETE (expanded) |
| 2-Zone DNA (DNA1-DNA3) | 3 rules | MOVED to mechanisms.md Component Patterns | RECLASSIFIED |
| Compound Grammar (C1-C3) | 3 rules | 4 bullets in Compound Pages section | COMPLETE |
| Fractal Application (F1-F3) | 3 rules | 5 bullets in Fractal Self-Similarity section | COMPLETE |
| Grid Grammar (G1-G3) | 3 rules | G1 in mechanisms.md (#15); G2, G3 ABSENT | **PARTIAL -- see Issue #6** |
| Responsive Collapse (RC1-RC2) | 2 rules | 4 bullets in Responsive section | COMPLETE (expanded) |
| Anti-Patterns (AP1-AP4) | 4 rules | 4 items in Anti-Patterns section | COMPLETE |
| Open Questions (Q1-Q5) | 5 questions | REMOVED | ACCEPTABLE |

**Score:** 36/41 rules accounted for. 3 moved to mechanisms.md (DNA1-3, appropriate). 2 grid rules absent (G2, G3). 5 open questions intentionally removed.

### 2.2 Anti-Pattern Completeness

| Old | New | Match? |
|-----|-----|--------|
| AP1: Callout stacking (3+ visible) | "Callout stacking -- 3+ callouts visible simultaneously" | EXACT |
| AP2: Uniform density (same padding throughout) | "Uniform density -- same padding/spacing top to bottom" | EXACT |
| AP3: Fighting the pattern (forced rhythm) | "Fighting the pattern -- overriding natural density with forced rhythm" | EXACT |
| AP4: Simultaneous axis patterns (Z+F in one section) | "Simultaneous axis patterns -- mixing Z-Pattern + F-Pattern in one section" | EXACT |

**Score:** 4/4 anti-patterns preserved with identical descriptions.

### 2.3 Transition Naming Consistency

grammar.md line 46 uses SMOOTH / BRIDGE / BREATHING. mechanisms.md lines 73-76 use the same names. Old naming (HARD CUT / SPACING SHIFT / CHECKPOINT) is completely eliminated from both files.

**Score:** CONSISTENT across both files.

### 2.4 Fractal Self-Similarity

Old rules F1-F3 required 4 scales, same rhythm at each, and warned that breaks cause coherence loss.

New file covers all three:
- 4 scales listed (page, section, component, character) -- F1 covered
- "Dense/sparse rhythm should repeat at multiple scales" -- F2 covered
- "If rhythm breaks at any scale, the page loses coherent navigability" -- F3 covered

**Note:** The framing shifts from REQUIRED ("ANY exploration missing fractal at even 1 scale is INVALID") to guideline ("should repeat"). This aligns with grammar.md's header: "guidelines for composition, not compliance rules."

**Score:** COMPLETE coverage with intentional softening of prescriptive language.

### 2.5 Responsive Guidance

Old RC1-RC2 (2 rules) expanded to 4 bullets:
1. 768px breakpoint: grids collapse -- RC1 covered
2. Padding compression with exact values -- RC2 covered
3. Bento grid collapse -- NEW (was implicit in old G1)
4. Decision matrix collapse -- NEW (was implicit in old N3)

**Score:** IMPROVED over original. More specific component-level collapse guidance.

### 2.6 Zone Background Rules

Old Z1-Z3 (3 rules about background color signals, max zone changes, border/spacing balance):

New Zones section:
- "Background color changes signal content type" with specific mappings -- Z1 covered
- "Maximum zone changes per viewport: 2-3" -- Z2 covered
- "Zone transitions use border OR spacing, not both heavily" with specific values -- Z3 covered

**Score:** COMPLETE. All 3 zone rules preserved with specific values.

---

## PART 2 ISSUES

### ISSUE #6 (SIGNIFICANT): 2-Zone DNA grammar rules mostly absent

**What was lost:** The old compositional-rules.md Section 5 had 3 rules:
- DNA1: Callout structure is ALWAYS 2-zone (specific type sizes: 12px label, 16px body, 0.1em letter-spacing)
- DNA2: Separator between zones is spacing (8-12px margin), NOT border
- DNA3: 2-Zone DNA applies to NON-callout components (density islands, scale demos, stratum headers)

**Where did it go?** mechanisms.md Component Patterns section has: "Sparse uppercase label (12px, letter-spaced) + dense body content (16px). Universal component internal structure."

**What's missing from grammar.md?**
- The separator rule (spacing, not border) -- this is a GRAMMAR rule (how zones combine), not a mechanism description
- The non-callout application rule (DNA3) -- this is a compositional guideline

grammar.md mentions 2-Zone DNA only once, in passing: "Component scale: Sparse label + dense body (2-Zone DNA)" in the Fractal section.

**Impact:** A builder reading grammar.md would not learn that the 2-Zone pattern applies beyond callouts, or that the internal separator must be spacing rather than a border. They would need to also read mechanisms.md Component Patterns to get the full picture.

**Recommendation:** Add to grammar.md Nesting section: "Components follow 2-Zone DNA internally (sparse label + dense body). Zone separator is spacing (8-12px), not borders. This pattern applies to callouts AND non-callout components (see mechanisms.md Component Patterns)."

### ISSUE #7 (MINOR): Grid grammar rules G2 and G3 absent

**G2 (grid gaps = ocean whitespace, 24-32px):** Not in grammar.md. This is implementation-level detail that could live in components.css.

**G3 (max 12 cells without breathing):** Not in grammar.md. This IS a composition rule. The original said: "If grid exceeds 12 cells, MUST introduce breathing zones." This is analogous to the density cap (3-4 components per viewport) but specific to grids.

**Recommendation:** Add one line to Density section: "Bento grids: max 12 cells before requiring breathing zones."

### ISSUE #8 (MINOR): Open questions dropped without resolution

5 open questions from old file removed. Q1 (geological inversion) is partially addressed in grammar.md Density section: "Geological/confidence content may INVERT this." Q2-Q5 remain unaddressed. Acceptable -- these were research artifacts.

### ISSUE #9 (MINOR): Evidence citations fully removed

All "Evidence: DD-003, lines 642-647" citations stripped. This is intentional per synthesis ("remove evidence citations"). The new file uses assertion format rather than evidence format. Correct for understanding layer, research provenance lives in the old files.

---

## PART 3: CROSS-FILE CONSISTENCY

### 3.1 Transition Grammar -- Consistent Across Files

mechanisms.md (lines 68-79): Full table with SMOOTH/BRIDGE/BREATHING types, signals, spacing values, and selection rule.

grammar.md (line 46): Brief reference: "Transition types between sections: SMOOTH (same domain, intensity shift), BRIDGE (different domain, 3px border), BREATHING (phase change, full background shift). See mechanisms.md for details."

**Assessment:** Well-structured. grammar.md provides summary + cross-reference. mechanisms.md has authoritative definition. No contradictions.

### 3.2 Zone Vocabulary -- Consistent

Both files reference the same 4-zone system:
- mechanisms.md #7: "4-color background token system"
- grammar.md Zones section: "Sparse (warm cream)... Dense (near-white)... Breathing (earthy tan)... Bedrock (dark)"

No contradictions.

### 3.3 Density Limits -- INCONSISTENT

**This is the one real cross-file contradiction.**

- grammar.md line 35: "Maximum 3-4 **components** per viewport-height"
- mechanisms.md line 86: "No more than 4 **mechanisms** visibly operating per viewport-height section"

These are different units of measure. The master synthesis (Section 9.6) identified this exact contradiction in the OLD files and recommended: "Pick ONE measure. Components are the visible unit; measure by components."

The new files PARTIALLY resolve this (mechanisms.md adds the qualifier "visibly operating" and "imperceptible to readers does not count") but still use different units (components vs mechanisms) with different numbers (3-4 vs 4).

**A viewport with 3 components each using 2 mechanisms = 3 components (PASS grammar.md) but 6 mechanisms (ambiguous under mechanisms.md).** The "visibly operating" qualifier helps (not all 6 are separately perceptible) but doesn't eliminate the confusion.

**Recommendation:** Either (a) mechanisms.md should defer to grammar.md's component-based measure and remove its own density cap, or (b) mechanisms.md should explicitly state its measure complements (not overrides) grammar.md's primary measure.

### 3.4 Category Names

mechanisms.md categories: Spatial (4), Hierarchy (2), Component (5), Depth/Emphasis (3), Structure (7)
grammar.md categories: Nesting, Rhythm, Zones, Density, Compound Pages, Fractal, Responsive, Anti-Patterns

These are orthogonal (CSS property families vs composition concerns). No conflict.

---

## PART 4: SYNTHESIS COMPLIANCE

| Synthesis Recommendation | Status | Notes |
|-------------------------|--------|-------|
| Remove #10 (redundant) | DONE | |
| Remove #12 (duplicate of #4) | DONE | |
| Reclassify #2 as component pattern | DONE | |
| Add 5-8 uncataloged techniques | DONE (8/8) | |
| Add "illustrative, not exhaustive" framing | DONE | Exact match |
| Document usage frequency (#/18) | DONE for old mechanisms | New mechanisms use labels |
| Mark stage of origin | DONE | |
| Tag identity-locked (#13, #14, #17) | DONE | |
| Consolidate to SMOOTH/BRIDGE/BREATHING | DONE | Old naming eliminated |
| Remove CSS code blocks | DONE | Reference to CSS files |
| Distill 41 rules to ~25 | DONE (~27) | Close to target |
| Remove evidence citations | DONE | |
| Present as guidelines, not compliance | DONE | Header statement |
| Move anti-patterns to identity.md | NOT DONE | Anti-patterns remain in grammar.md |

**Compliance rate:** 13/14 (93%). The one deviation (anti-patterns staying in grammar.md) is a reasonable editorial choice -- anti-patterns ARE grammar, not identity.

---

## SUMMARY TABLE

| # | Finding | File | Severity | Verdict |
|---|---------|------|----------|---------|
| 1 | #8 Scroll Witness silently removed | mechanisms.md | SIGNIFICANT | Add back or document removal |
| 2 | #4 and #17 category reassignment undocumented | mechanisms.md | SIGNIFICANT | Document rationale |
| 3 | Numbering gaps (#2, #8, #10, #12) unexplained | mechanisms.md | MINOR | Add one-line explanation |
| 4 | New mechanism usage counts lack #/18 precision | mechanisms.md | MINOR | Standardize format |
| 5 | CSS code blocks removed (intentional) | mechanisms.md | MINOR | Acceptable |
| 6 | 2-Zone DNA grammar rules (DNA2, DNA3) mostly absent | grammar.md | SIGNIFICANT | Add to Nesting section |
| 7 | Grid grammar G2/G3 absent | grammar.md | MINOR | Add G3 to Density section |
| 8 | Open questions dropped | grammar.md | MINOR | Acceptable |
| 9 | Evidence citations removed (intentional) | grammar.md | MINOR | Correct for layer |
| 10 | Density limit units inconsistent across files | BOTH | SIGNIFICANT (cross-file) | Align units |

**4 SIGNIFICANT, 6 MINOR, 0 BLOCKING.**

---

## RECOMMENDED FIXES (Priority Order)

### MUST FIX

1. **Resolve #8 Scroll Witness** -- Add it to Structure with "Requires JS" note, or add a removal note. It's in neither the synthesis keep NOR delete list, so the omission needs documentation.

2. **Resolve density units** -- mechanisms.md and grammar.md use different measures. Either mechanisms.md defers to grammar.md's component-based measure, or both files acknowledge the dual measure with an explicit relationship note.

3. **Add 2-Zone DNA grammar to grammar.md** -- The separator rule (spacing, not borders) and non-callout application rule (DNA3) are composition guidelines that belong in grammar.md, not just mechanisms.md.

### SHOULD FIX

4. **Document category reassignments** -- #4 (Hierarchy -> Spatial) and #17 (Component -> Structure). One line each explaining the rationale.

5. **Add grid G3 rule** -- "Max 12 bento cells before breathing zones" in grammar.md Density section.

6. **Add numbering gap explanation** -- One line at the top of mechanisms.md.

### NICE TO HAVE

7. **Standardize new mechanism usage counts** to #/18 format.

8. **Consider expanding to ~120-150 lines** (current 89 is well under the synthesis target of ~150). Room for zone semantic mappings, brief application mode notes for #1.

---

## OVERALL VERDICT

**mechanisms.md: B+**
Faithful execution of synthesis directives. All genuine mechanisms preserved with accurate counts, origins, and identity-lock tags. All 8 uncataloged techniques added. Correct framing language. Clean transition grammar. The #8 gap and undocumented category changes are the main weaknesses.

**grammar.md: B+**
Excellent distillation from 528 lines to 78 lines. All essential composition rules preserved. Anti-patterns complete. Responsive guidance improved. Transition naming consistent. The 2-Zone DNA grammar gap is the main weakness.

**Together: B+**
The two files work well as a pair. grammar.md correctly references mechanisms.md for transition details. Zone vocabulary is consistent. The density-units contradiction is the one cross-file issue. Combined, they deliver the synthesis's vision of a concise understanding layer at 87% compression from the originals.

---

**END AUDIT**
