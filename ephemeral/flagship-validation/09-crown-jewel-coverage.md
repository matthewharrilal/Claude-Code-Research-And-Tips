# Crown Jewel Forensic Validation

**Validator:** crown-jewel-validator (Opus 4.6, Task #9)
**Date:** 2026-02-17
**Sources verified:**
- CD-006-pilot-migration.html (2,085 lines, 39/40)
- DD-006-fractal.html (1,120 lines, 36/40)
- 10-ENRICHED-MASTER-EXECUTION-PROMPT.md (530 lines)
- AUXILIARY-EXECUTION-WRAPPER.md (398 lines)
- 07-crown-jewel-design-system-audit.md (617 lines)
- 11-crown-jewel-forensics.md (565 lines, flagship-preparation)

---

## 1. CD-006 CONTAINER WIDTH VALIDATION

### What CD-006 Actually Uses

Verified from source code (line 299):
```css
.page-container { max-width: 1100px; margin: 0 auto; padding: var(--space-16) var(--space-8); }
```

Also confirmed at lines 255 and 958:
```css
.header-inner { max-width: 1100px; ... }
.page-footer__inner { max-width: 1100px; ... }
```

**CD-006 container: 1100px.** All three containers (page, header, footer) use 1100px consistently.

### What the Enriched Prompt Says

The prompt parameter table (line 453) states:
```
Container width | 940-1100px (960px default, 1100px proven upper bound from CD-006)
```

Rule S-01 (line 115) states:
```
S-01. Container width outside 940-1100px
```

### What the Audit (07) Found

The audit (Section 4, line 387) found:
```
CD-006 container: max-width: 1100px (line 299)
```

The audit correctly states: "The 940-960px rule is a MINIMUM FLOOR, not a target width."

### VERDICT: ACCURATE

The enriched prompt correctly captures CD-006's container width as 1100px and uses it as the proven upper bound. The range 940-1100px is correct. The 07-audit finding matches. No discrepancy.

---

## 2. CD-006 TRANSITION TYPE VALIDATION

### Actual Transitions in CD-006 Source

CSS definitions (lines 772-791):
```css
/* SMOOTH: 48px gap + 1px separator */
.transition--smooth { margin: var(--space-12) 0; border-top: 1px solid var(--color-border); padding-top: var(--space-12); }

/* BRIDGE: 64px gap + breathing zone */
.transition--bridge { margin: var(--space-16) 0; background: var(--color-zone-breathing); padding: var(--space-8); }

/* BREATHING: 80px gap + 3px structural border */
.transition--breathing { margin: var(--space-20) 0; border-top: 3px solid var(--color-border); padding-top: var(--space-20); }
```

HTML usage (7 transitions between 8 sections):
| Position | Type | Line |
|----------|------|------|
| S1 -> S2 | BREATHING | 1214 |
| S2 -> S3 | BRIDGE | 1315 |
| S3 -> S4 | BRIDGE | 1451 |
| S4 -> S5 | SMOOTH | 1594 |
| S5 -> S6 | BRIDGE | 1748 |
| S6 -> S7 | SMOOTH | 1843 |
| S7 -> S8 | BREATHING | 1940 |

Count: 2 Smooth, 3 Bridge, 2 Breathing = all 3 types present.

### What the Enriched Prompt Says

Rule C-05 (line 169):
```
C-05. >= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px).
```

Quality exemplar A7 (lines 80-92):
```css
.transition--breathing {
  margin: var(--space-20) 0;       /* 80px above and below */
  border-top: 3px solid var(--color-border);
  padding-top: var(--space-20);    /* 80px breathing below border */
}
```

### VERDICT: ACCURATE

The prompt's C-05 rule correctly matches CD-006's three transition types with correct CSS specifications:
- SMOOTH: `var(--space-12)` = 48px + 1px border -- MATCHES line 773-777
- BRIDGE: `var(--space-16)` = 64px + background zone -- MATCHES lines 780-784
- BREATHING: `var(--space-20)` = 80px + 3px border -- MATCHES lines 787-791

The A7 exemplar CSS is a verbatim excerpt from CD-006. ACCURATE.

---

## 3. CD-006 var() COUNT AND TOKEN COMPLIANCE VALIDATION

### Actual var() Usage in CD-006

Grep count of `var(--` in CD-006: **270 occurrences** in the full file (CSS + HTML inline styles).

The :root block (lines 73-155) defines **54 custom properties** -- confirmed in the forensics report (Section 1.2: "Custom properties (tokens): 54 in :root").

### What the Enriched Prompt Says

A7 exemplar (line 92): "Token compliance: 54 `var()` references, near-zero hardcoded values."
Parameter table (line 472): "Token compliance: >= 80% var() usage"

### ANALYSIS

The prompt says "54 var() references" in A7, but this is the number of :root token DEFINITIONS, not var() USAGES. Actual var() usage is 270. The prompt conflates definitions and references.

However, the functional intent is correct: CD-006 achieves near-zero hardcoded values. The forensics report (Section 8) states "Hardcoded values: ~5" for CD-006. So token compliance is approximately 270/(270+5) = 98.2%, far exceeding the 80% target.

### VERDICT: MINOR INACCURACY, FUNCTIONALLY CORRECT

The A7 statement "54 var() references" should read "54 token definitions in :root; ~270 var() usages throughout." The compliance target (>= 80%) is well-supported by the actual 98%+ compliance rate. This inaccuracy does not affect builder behavior since the >= 80% rule in B10 self-check is what builders actually test against.

---

## 4. DD-006 FRACTAL COHERENCE vs SCALE RESEARCH FINDINGS

### DD-006 Actual Fractal Structure

DD-006 demonstrates 4-scale fractal density:
1. **Page scale** (lines 363-400): Dense-sparse-dense section alternation via 3-column grid
2. **Section scale** (lines 405-444): Dense/sparse paragraph alternation via background tinting
3. **Component scale** (lines 449-483): Dense header zone + sparse body zone within components
4. **Character scale** (lines 488-521): Dense code lines + sparse comment lines

DD-006 container: `max-width: 1000px` (line 224).

The progressive rgba opacity nesting (lines 296-309):
```css
.fractal-nested { background: rgba(232, 48, 37, 0.03); }         /* Level 1 */
.fractal-nested .fractal-nested { background: rgba(232, 48, 37, 0.06); }  /* Level 2 */
.fractal-nested .fractal-nested .fractal-nested { background: rgba(232, 48, 37, 0.09); } /* Level 3 */
```

### What the Scale Research Says (from MEMORY.md)

- 5 scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(e) = 4.8)
- Beyond 5, add CHANNELS not LEVELS
- Anti-scale model: `Richness = semantic density x restraint x spatial confidence`
- DD-006 scored 36/40 with ~6 mechanisms and 4 fractal scales

### What the Enriched Prompt Says

A3 (lines 37-46): "Five scales is the mathematical ceiling... NEVER target 6+ scales."
A5 (line 66): "DD-006 scored 36/40 with 6 mechanisms."
SC-01 (line 208): "Maximum 5 scales. Preferred 2-3 for flagship."

### VERDICT: ACCURATE

The prompt correctly captures DD-006's fractal principle and aligns with scale research. DD-006 demonstrates 4 scales (page/section/component/character), consistent with the ceiling of 5. The prompt's "preferred 2-3" recommendation is grounded in the Middle experiment's success at 2 scales vs Ceiling's failure at 4. The warning "PA-05 > scale count" (line 43) correctly prioritizes design quality over scale ambition.

---

## 5. 15 MUST-REPLICATE TECHNIQUES ROUTING

### The 15 Techniques (from 11-crown-jewel-forensics.md Section 6.1)

1. Token-referenced sizing throughout
2. Semantic HTML with full ARIA
3. Header-footer bookend
4. 3-category border system
5. Soul enforcement selector
6. TOC with axis/pattern annotations
7. Transition grammar (3 types)
8. Bridge transitions with semantic prose
9. Callout 2-zone structure
10. Code blocks with syntax highlighting tokens
11. Print media query
12. prefers-reduced-motion
13. Drop cap (sparse deployment)
14. Section meta descriptor
15. Progressive responsive degradation

### Routing in the Enriched Prompt

The prompt routes the intentionality builder (Section E, lines 429-432):
```
INTENTIONALITY BUILDER reads:
  - Crown jewel forensics (11-crown-jewel-forensics.md)  -- 15 must-replicate techniques
  - Compositional fluency (13-compositional-fluency.md)  -- 5 interaction types
  - Content-form alignment analysis
```

The wrapper (AUXILIARY-EXECUTION-WRAPPER.md) reconfirms (lines 121-122):
```
INTENTIONALITY BUILDER reads (for composition quality):
  ephemeral/prompt-enrichment-audit/07-crown-jewel-design-system-audit.md -- 15 must-replicate techniques from CD-006/DD-006
```

### Technique-to-Rule Mapping

| # | Technique | Prompt Rule(s) | Builder Who Handles | Routed? |
|---|-----------|----------------|---------------------|---------|
| 1 | Token-referenced sizing | Token compliance >= 80% (B10 checklist) | ALL builders (self-check) | YES |
| 2 | Semantic HTML + ARIA | Not an explicit binary rule | Intentionality builder | PARTIAL -- no "every section needs aria-label" rule |
| 3 | Header-footer bookend | S-03, S-04 | Skeleton builders + intentionality | YES |
| 4 | 3-category border system | U-01 through U-10 (soul rules) | ALL builders | YES (implicit in soul) |
| 5 | Soul enforcement selector | U-10 | ALL builders | YES |
| 6 | TOC with annotations | Not a binary rule | Intentionality builder | PARTIAL -- depends on content |
| 7 | Transition grammar (3 types) | C-05, C-06, C-07 | Mechanism builder + intentionality | YES |
| 8 | Bridge prose | C-07, C-17 | Intentionality builder | YES |
| 9 | Callout 2-zone structure | Part of component vocabulary | Mechanism builder | YES (implicit) |
| 10 | Code blocks + syntax tokens | Part of component vocabulary | Mechanism builder | YES (implicit) |
| 11 | Print media query | No explicit rule | NOT assigned | GAP |
| 12 | prefers-reduced-motion | No explicit rule | NOT assigned | GAP |
| 13 | Drop cap (sparse) | No explicit rule; part of mechanism catalog | Mechanism builder | PARTIAL |
| 14 | Section meta descriptor | No explicit rule | Intentionality builder | PARTIAL -- depends on content |
| 15 | Progressive responsive | No explicit rule | Skeleton/mechanism builders | GAP |

### VERDICT: MOSTLY ROUTED, 3 GAPS

**Techniques 1-10:** All reachable through either explicit rules (C-05, C-06, C-07, C-17, S-03, S-04, U-10) or through the intentionality builder's assigned reading (crown jewel forensics).

**Technique 11 (Print media query):** No rule requires it. No builder is assigned it. GAP.

**Technique 12 (prefers-reduced-motion):** No rule requires it. However, it is present in both crown jewels and would likely be replicated by a builder reading CD-006. SOFT GAP.

**Technique 15 (Progressive responsive):** No explicit "must have 3 breakpoints" rule. The skeleton builder handles responsive via implicit competence, but no binary gate ensures 3-tier progressive degradation. GAP.

**Techniques 2, 6, 13, 14:** Partially routed. The intentionality builder reads the forensics report which lists these, but they lack binary rules. Whether they appear depends on the builder's judgment after reading, not on gate verification.

---

## 6. QUALITY EXEMPLAR A7 ACCURACY

### What A7 Shows (Enriched Prompt lines 80-92)

```css
/* DESIGNED transition: Breathing type between isolated axes */
.transition--breathing {
  margin: var(--space-20) 0;       /* 80px above and below */
  border-top: 3px solid var(--color-border); /* structural weight */
  padding-top: var(--space-20);    /* 80px breathing below border */
}
/* Bridge prose JUSTIFIES the pattern change: */
/* "Now that you understand the why, let us set up the how." */
/* Without it, the axis shift feels random. With it, cognitive task changes. */
```

### Does A7 Match CD-006 CSS?

CD-006 line 787-791:
```css
.transition--breathing {
  margin: var(--space-20) 0;
  border-top: 3px solid var(--color-border);
  padding-top: var(--space-20);
}
```

The CSS properties are IDENTICAL. The comments in A7 are editorial annotations, not from CD-006 source.

The bridge prose quote ("Now that you understand the why, let us set up the how.") exists at CD-006 line 1316-1317 (within a `.transition--bridge` element, not `.transition--breathing`).

### VERDICT: CSS ACCURATE, CONTEXT SLIGHTLY MISLEADING

The CSS in A7 is an exact match to CD-006's `.transition--breathing` class. The bridge prose quote is real (from CD-006 line 1316), but it belongs to a `.transition--bridge` element, not the `.transition--breathing` shown in the CSS. The exemplar conflates two transition types in its narrative (shows breathing CSS, quotes bridge prose). A careful builder would understand these are separate types, but the juxtaposition could cause confusion.

**Impact:** LOW. The builder self-check (B10) and rules C-05 through C-07 are unambiguous about the three separate types. The A7 exemplar is a conviction-layer illustration, not a build specification.

---

## 7. 07-AUDIT ENRICHMENT COVERAGE

### Enrichment Verification Results (from 07-audit Section 3)

| Enrichment | Status per 07-audit | Verified Against Source |
|------------|---------------------|------------------------|
| B1 (Max whitespace) | PRESENT in prohibitions.md | Confirmed: no viewport < 30% content |
| B3 (Front-loaded weight) | PRESENT in prohibitions.md | Confirmed: >= 1 designed moment past 50% |
| C3 (Max spacing 96px) | PRESENT in tokens.css | Confirmed: --space-max-zone: 96px |
| A1 (Transition grammar) | PARTIAL GAP in mechanism-catalog | 07-audit correctly identified gap |
| A2 (Restraint principle) | IMPLICIT, scattered | 07-audit correctly identified no anchor |
| A3 (Content density) | PRESENT in semantic-rules.md | Confirmed: zone count ceilings |
| D3 (Content-form fit) | PRESENT in semantic-rules.md | Confirmed: binary gates |

### Enrichment Traceability in Prompt

The prompt's Enrichment Traceability table (lines 486-501) maps all 11 enrichments to design system files and prompt rules. Cross-checking:

| Enrichment | Prompt Claims Location | 07-Audit Confirms? |
|------------|----------------------|---------------------|
| B1 | prohibitions.md #21 -> S-12 | YES |
| B3 | prohibitions.md #22 -> S-13, C-09 | YES |
| C3 | tokens.css 114-122 -> S-09, S-11 | YES |
| A1 | mechanism-catalog.md -> C-05, C-06, C-07 | PARTIAL (gap in catalog, present in prompt) |
| A2 | mechanism-catalog.md -> C-12, C-13, C-14 | PARTIAL (implicit in catalog, explicit in prompt) |
| A3 | semantic-rules.md Gap 6 -> S-15, S-05 | YES |
| D3 | semantic-rules.md Gap 7 -> P-05, P-06 | YES |

### VERDICT: ENRICHMENTS LARGELY PRESENT

The prompt correctly traces all 11 enrichments. The 07-audit's gap findings (A1 transition grammar missing from mechanism-catalog, A2 restraint principle implicit) are real but compensated by the prompt itself encoding these as explicit rules (C-05, C-06, C-07 for transitions; C-12, C-13, C-14 for restraint).

---

## 8. SUMMARY FINDING TABLE

| Validation Item | Verdict | Severity | Notes |
|----------------|---------|----------|-------|
| CD-006 container width | ACCURATE | -- | 1100px confirmed. Prompt says 940-1100px. |
| CD-006 transition types | ACCURATE | -- | 3 types confirmed. CSS matches C-05 exactly. |
| CD-006 var() count | MINOR INACCURACY | LOW | 54 is :root definitions, not usage count (270). Functionally correct. |
| DD-006 fractal coherence | ACCURATE | -- | 4-scale fractal aligns with scale research findings. |
| 15 must-replicate routing | MOSTLY ROUTED, 3 GAPS | MODERATE | Print query, prefers-reduced-motion, and responsive degradation lack rules. |
| A7 exemplar accuracy | CSS ACCURATE, CONTEXT MIXED | LOW | CSS is verbatim from CD-006. Bridge prose quote belongs to different transition type. |
| Enrichment traceability | LARGELY PRESENT | LOW | 2 partial gaps compensated by prompt rules. |

### OVERALL VERDICT: PASS WITH MINOR GAPS

The enriched prompt accurately represents both crown jewels. The container width, transition grammar, soul enforcement, and compositional patterns are all correctly extracted from CD-006 and DD-006 source code.

**3 gaps that warrant attention:**
1. **Print media query and prefers-reduced-motion** are crown jewel techniques (#11, #12) with no corresponding rules or builder assignments. These are accessibility/production techniques that should "just happen" but lack enforcement.
2. **Progressive responsive degradation** (technique #15) has no binary gate. A builder could ship a page with no responsive breakpoints.
3. **A7 var() count wording** conflates token definitions (54) with var() usages (270). Minor, does not affect builder behavior.

**No blocking issues found.** The prompt's representation of crown jewel quality is faithful to the source material.

---

*End of crown jewel forensic validation. 3,205 lines of crown jewel source code verified against enriched prompt, wrapper, and audit documents.*
