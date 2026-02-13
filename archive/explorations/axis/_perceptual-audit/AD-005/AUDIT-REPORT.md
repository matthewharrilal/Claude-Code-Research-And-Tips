# PERCEPTUAL AUDIT REPORT: AD-005 Choreography

**Generated:** 2026-02-10
**Weaver-Synthesizer:** Final consolidated report
**Input files:** 4 findings files, 4 cold looks (1 partial), 1 lock sheet
**Coverage:** 4 of 5 auditors produced findings. Auditor B (Readability+Responsiveness) failed — see Section 11.

---

## VERDICT: SHIP WITH CONCERNS

**Rationale:** AD-005's editorial identity, soul compliance, and hub-spoke structural concept are strong and well-executed at desktop. Zero soul violations across 11 always-locked rules. The callout vocabulary, typography trio, and WAVE density oscillation are all confirmed working. However, 4 LOOKS-WRONG findings — dead zones, responsive non-implementation, abrupt ending, and inconsistent transition ceremony — collectively create a page that does not fully practice its own choreographic philosophy. The page is shippable at 1440px; at 768px it has a genuine readability problem from non-collapsed grids.

---

## 1. CONTAMINATION CHECK

**ZERO contamination detected.** No auditor inserted CSS property opinions or suggested specific CSS values. All observations are perceptual evaluations of existing rendered output. Adversarial references to lock sheet conventions are quotations, not injections.

---

## 2. SOUL COMPLIANCE

| Always-Locked Rule | Status | Evidence |
|--------------------|--------|----------|
| border-radius: 0 | PASS | Auditor D PA-25: "zero rounded corners anywhere" |
| box-shadow: none | PASS | Auditor D PA-25: "zero shadows" |
| No filter: drop-shadow() | PASS | No violations reported by any auditor |
| No CSS animations implying movement | PASS | Adversarial: no animations observed during scroll-throughs |
| No hover transforms | PASS | No violations reported |
| opacity === 1.0 | PASS | No violations reported |
| Font trio (Instrument Serif / Inter / JetBrains Mono) | PASS | Auditors A + D confirm serif headings, sans body, mono code |
| Primary color #E83025 | PASS | Red accents observed by all auditors |
| Background #FEF9F5 | PASS | "Warm cream" confirmed by all auditors |
| Text #1A1A1A | PASS | Auditor D: "dark nearly-black" |
| No 2px structural borders | PASS | No violations reported |

**SOUL COMPLIANCE: 11/11 — ZERO VIOLATIONS**

---

## 3. LOCK SHEET CROSS-REFERENCE

### Locked Token Values

| Token | Audit Status | Notes |
|-------|-------------|-------|
| Type scale (2.5/1.625/1.375/1/0.875/0.75 rem) | UNCHECKED | Auditor B gap — no pixel measurements taken |
| Spacing scale | UNCHECKED (perceptual only) | Auditor C observes "generous spacing" without measuring tokens |
| Callout accent colors | OBSERVED CORRECT | Auditor D: "blue for context, amber for caution, green for tips, purple for essence" |
| Zone backgrounds | RISK NOTED | Adversarial FRAGILITY-05: white/cream/breathing nearly indistinguishable |
| Border left-width 4px | OBSERVED (not measured) | Auditor D: "thick colored left border" |
| Solid offset 4px | UNCHECKED | Not observed by any auditor |

### Locked Structural Patterns

| Pattern | Status | Evidence |
|---------|--------|---------|
| DD-F-006 fractal at 5 scales | PRESENT | Auditor D: final element is Fractal Self-Similarity table showing 5 scales |
| Axis = Organization = Density | OBSERVED | Auditors A + C confirm WAVE density oscillation visible |
| Transition grammar (Smooth/Bridge/Breathing) | PARTIAL | 2 interstitials present; Auditor D identifies 2-3 missing transition points |
| Callout family DNA (2-zone, 4px left border) | CONSISTENT | Auditors A + D confirm identical structure across all callout types |
| Essence uses serif italic | CONFIRMED | Auditors A + D both observe italic serif in Essence callouts |
| Dark code blocks | CONFIRMED | All auditors observe dark code blocks with contrast |
| Dark header (full-bleed, 3px red border) | CONFIRMED | All 4 auditors + all cold looks confirm |
| Max 2 callouts per viewport | COMPLIANT | Adversarial: "approaching but not clearly violating" — 7 callouts total across full page |
| No traffic-light adjacency | NO VIOLATIONS | Not reported by any auditor |

### AD-005 Specific Locked Patterns

| Pattern | Status | Evidence |
|---------|--------|---------|
| "Choreography" = reader attention, not CSS animation | CONFIRMED | Adversarial: no animations observed; all "movement" is static structural |
| Diagonal clip-path as dual signal | OBSERVED | Auditors C + D both observe diagonal transition zones |
| Clip-path degrades to border-top: 3px at mobile | NOT IMPLEMENTED | Auditor D: layout identical at all viewports; see Responsive finding |

---

## 4. DEDUPLICATED FINDINGS

### 4.1 LOOKS-WRONG (Fix Before Ship or Justify)

#### LW-1: Dead Zones Between Spoke Sections
**Concordance:** 3 auditors (A, C, D)
**Severity:** HIGH
**Lock status:** CHALLENGEABLE (breathing zone budget)

Auditor A identifies "MASSIVE dead zones (~2 viewport heights)" between the Essence callout at end of Spoke 1 and the Density Wave section. Auditor C independently confirms "very large gap... exceeds what feels purposeful" and notes it "reads as empty rather than as breathing space." Auditor D identifies a second instance: "large empty gap" between Spoke 2 end and the "Ascending to Synthesis" interstitial. All three auditors note the gap lacks any wayfinding signal (unlike the labeled interstitials).

**Multi-viewport:** Worsens at narrower viewports. Auditor C: at 768px the gap is "most noticeable" and "disproportionately large."

**Recommendation from auditors:** Auditor A suggests reducing dead zones by 60-70%, bringing page height from ~11,800px to ~9,000px. Transition zones already signal breaks; additional hundred-pixel padding is unnecessary.

---

#### LW-2: Responsive Non-Implementation
**Concordance:** 2 auditors + adversarial (D, Adversarial, with C indirect)
**Severity:** HIGH
**Lock status:** CHALLENGEABLE (grid collapse at 768px)

Auditor D explicitly states: "the page renders identically at 1440px, 1024px, and 768px. The territory grid does not collapse. The axis direction change interstitials do not simplify." Adversarial CHALLENGE-04 confirms: at 768px the hub grid remains 4-column with tiles squeezed to ~160px wide, making serif headings wrap to 3-4 lines. The page describes a "4-2-1 Column Cascade" responsive strategy but does not implement it.

**Multi-viewport:** CRITICAL at 768px. Grid is cramped and unreadable.

**Note:** This is also a content-truthfulness issue — the page teaches responsive collapse while not performing it.

---

#### LW-3: Abrupt Page Ending
**Concordance:** 1 auditor (D) — PA-13 verdict: FAIL
**Severity:** MEDIUM
**Lock status:** CHALLENGEABLE (builder choice)

Auditor D: "The page STOPS rather than ENDS. There is no visual closure signal. No final Essence callout wrapping up the fractal table. No return-to-hub link. No 'end of exploration' marker. No footer." The Fractal Self-Similarity table is the final element and "reads as an appendix rather than a conclusion." The contrast with the ceremonial openings (establishing shot, axis direction change interstitials) makes the abrupt ending more jarring.

**Multi-viewport:** Static — identical at all viewports.

---

#### LW-4: Inconsistent Transition Ceremony
**Concordance:** 1 auditor (D) with adversarial counterpoint
**Severity:** MEDIUM
**Lock status:** LOCKED (transition grammar) — execution is auditable

Auditor D maps the transition ceremony:
- Hub to Spoke 1: Full interstitial ("Descending into Detail") — PRESENT
- Spoke 1 to Density Wave: No interstitial — MISSING
- Density Wave to Spoke 2: No interstitial — MISSING
- Spoke 2 to Spoke 3: Full interstitial ("Ascending to Synthesis") — PRESENT
- Spoke 3 to Synthesis: No interstitial — MISSING

The page has 2 interstitials where the choreographic logic suggests 4-5. For a page about choreography, inconsistently applied transitions are a structural irony.

**Adversarial counterpoint:** CHALLENGE-03 argues the interstitials themselves are "dead space" — "more gap than breath." The tension between "too few transitions" (D) and "transitions are dead space" (Adversarial) suggests the issue is transition QUALITY, not quantity. The existing interstitials provide wayfinding; the missing ones leave gaps unlabeled.

---

### 4.2 COULD-BE-BETTER (Non-Blocking Improvements)

#### CB-1: Progress Bar Feels Foreign
**Concordance:** 1 auditor (A) — consistent across cold look and full analysis
**Severity:** MEDIUM
**Lock status:** CHALLENGEABLE (builder choice)

Auditor A: "The segmented horizontal bars with a red active segment and gray inactive segments feel like they were imported from a dashboard or project management tool." Every other element speaks editorial language; the progress bars are "functional but foreign." Auditor D observes the progress bar neutrally without flagging it. Auditor B's cold look does not mention it.

---

#### CB-2: Red Accent Color Competition
**Concordance:** 1 auditor (A)
**Severity:** LOW-MEDIUM
**Lock status:** CHALLENGEABLE (builder choice)

Auditor A: "Two competing accent color systems create subtle visual noise" — red in progress bars / Featured Territory card versus blue/teal in callout boxes. The red pulls attention before the reader finishes reading callout text.

---

#### CB-3: Hub Grid Over-Promises Scope
**Concordance:** Adversarial only
**Severity:** MEDIUM
**Lock status:** CHALLENGEABLE (tile count is builder choice)

Hub grid shows 7 territory tiles but only 3 become spokes. Territories C (WAVE Oscillation), D (Progress Indicators), and F (Scroll-Triggered Reveals) are promised but never delivered. The establishing shot convention "is actively harmful when most territories are dead ends."

---

#### CB-4: Content is Reference-Manual, Not Choreographic
**Concordance:** Adversarial only
**Severity:** MEDIUM
**Lock status:** CHALLENGEABLE (internal cell layout)

Spoke content is flat reference material — tables of allowed/prohibited properties, code blocks, constraint lists. The page "describes choreographic concepts... through the least choreographic possible format." Essence callouts are the exception — they demonstrate the tonal variation the page advocates.

---

#### CB-5: Code Block Density Shift in Spoke 1
**Concordance:** 2 auditors (A, C)
**Severity:** LOW
**Lock status:** N/A (content density)

Auditor A: "Prohibited code block is very tall and dense, creating jarring density shift" from "unhurried editor" to "technical reference manual." Auditor C (squint test): "code blocks in Spoke 1 create a very heavy visual weight concentrated in the middle of the page."

---

#### CB-6: Table Fragility at Narrow Viewports
**Concordance:** Adversarial only
**Severity:** HIGH (at 320px) / LOW (at 1440px)
**Lock status:** N/A (fragility)

Tables truncate at narrow viewports. At 320px, the "Allowed Transition Properties" table loses 40%+ of Constraint column text. At 500px, clipping begins. All rules (font, color, border) pass while content is unreadable. No responsive table strategy exists.

---

#### CB-7: Zone Background Near-Invisibility
**Concordance:** Adversarial only
**Severity:** LOW
**Lock status:** LOCKED (token-compliant)

Zone backgrounds (sparse #FEF9F5, dense #FFFFFF, breathing #FAF5ED) differ by only 4-10 RGB units. Section boundaries are nearly invisible on miscalibrated monitors. Token-compliant but perceptually fragile.

---

## 5. COLD LOOK CONCORDANCE

| Auditor | Cold Look Verdict | Worst Thing | Full Analysis Concordance |
|---------|------------------|-------------|--------------------------|
| A (Impression) | SHIP WITH NOTES | Progress bar foreign | HIGH — cold look "worst" became CB-1; "best" (territory grid) confirmed |
| B (Readability) | CONDITIONAL SHIP (1440px only) | Territory cards A/B narrow | N/A — no full analysis produced |
| C (Spatial) | No verdict (observation) | Excessive whitespace between sections | HIGH — became LW-1 dead zones finding |
| D (Hierarchy) | No verdict (observation) | No responsive collapse at 768px | HIGH — became LW-2 responsive finding |

**Alignment:** 3 of 3 auditors who produced full analyses show high concordance between initial cold look impressions and detailed findings. Cold look instincts proved reliable.

**Auditor B note:** Cold look at 1440px identified narrow Territory A/B cards compared to Featured Territory. This observation was not corroborated by other auditors but is consistent with the intentional hierarchy (Featured is wider by design). Not flagged as a finding.

---

## 6. SOVEREIGNTY CLASSIFICATION

| Finding | Scope | Rationale |
|---------|-------|-----------|
| LW-1: Dead zones | AD-005 SOVEREIGN | Specific to this page's breathing space execution between spokes |
| LW-2: Responsive non-implementation | POTENTIALLY SYSTEMIC | Auditor D observed it on AD-005; unknown if other ADs share the issue |
| LW-3: Abrupt ending | POTENTIALLY SYSTEMIC | No auditor checked AD-006/AD-003 endings for comparison |
| LW-4: Inconsistent transitions | AD-005 SOVEREIGN | Specific to hub-spoke choreographic transition logic |
| CB-1: Progress bar foreign | AD-005 SOVEREIGN | Hub-spoke navigation element unique to this page's structure |
| CB-3: Hub over-promises | AD-005 SOVEREIGN | Specific to 7-tile hub with 3 spokes |
| CB-5: Code block density | POTENTIALLY SYSTEMIC | Code blocks appear in all ADs |
| CB-6: Table fragility | POTENTIALLY SYSTEMIC | Tables appear in all ADs |
| CB-7: Zone backgrounds | POTENTIALLY SYSTEMIC | Zone tokens shared across all ADs |

---

## 7. MULTI-VIEWPORT COMPARISON

| Finding | 1440px | 1024px | 768px | Trend |
|---------|--------|--------|-------|-------|
| LW-1: Dead zones | Present | Same, proportionally larger | Most noticeable | WORSENS |
| LW-2: Responsive | N/A | No collapse | Grid cramped (HIGH) | CRITICAL at 768px |
| LW-3: Abrupt ending | Present | Present | Present | STATIC |
| LW-4: Transitions | 2 of 4-5 present | Same | Same | STATIC |
| CB-1: Progress bar | Visible, app-like | Same | Same | STATIC |
| CB-5: Code density | Front-loaded weight | Same | Same | STATIC |
| CB-6: Table fragility | Good | Good | Truncation begins | WORSENS |

---

## 8. CONVENTION CHALLENGES (from Adversarial)

| # | Convention Challenged | Severity | Lock Status | Weaver Assessment |
|---|----------------------|----------|-------------|-------------------|
| CHALLENGE-01 | Hub shows 7 tiles, only 3 become spokes | MEDIUM | CHALLENGEABLE | VALID — perceptual mismatch between promise and delivery |
| CHALLENGE-02 | Spoke content is reference-manual format | MEDIUM | CHALLENGEABLE | VALID but subjective — content format is a design-intent question |
| CHALLENGE-03 | Axis direction interstitials are dead space | LOW | CHALLENGEABLE | PARTIALLY VALID — issue is inconsistent application (Auditor D) more than existence |
| CHALLENGE-04 | 768px grid doesn't collapse per convention | HIGH | CHALLENGEABLE | MOST ACTIONABLE — corroborated by Auditor D; genuine implementation gap |

---

## 9. FRAGILITY ASSESSMENT (from Adversarial)

| # | Fragility | Severity | Current Impact | Future Risk |
|---|-----------|----------|---------------|-------------|
| FRAGILITY-01 | Table truncation at narrow viewports | HIGH | REAL at 320px, beginning at 500px | HIGH — more tables worsen it |
| FRAGILITY-02 | No 3-column intermediate grid state | MEDIUM | Theoretical (current tiles work) | MEDIUM — adding tiles breaks it |
| FRAGILITY-03 | Callout stacking approaches limit | MEDIUM | Currently compliant (7 across full page) | LOW — well within limits |
| FRAGILITY-04 | Scroll-triggered reveals unverifiable | LOW | Cannot test without JS runtime | N/A — audit methodology gap |
| FRAGILITY-05 | White/cream zone boundaries nearly invisible | LOW | Perceptible at desktop | LOW — token-compliant |

---

## 10. CONTRADICTION LOG

**One contradiction identified:**

| Auditor C (PA-17, 768px) | Auditor D (Cross-Cutting) |
|--------------------------|--------------------------|
| "The diagonal transitions becoming horizontal borders weakens the visual bar line" | "The diagonal sections do not become horizontal borders" / "layout is IDENTICAL to 1440px" |

**Resolution:** Auditor D explicitly tested at 768px with screenshots and reports identical layout. Auditor C's phrasing appears to describe what SHOULD happen (based on the page's own documentation of responsive degradation) rather than what WAS observed. **Weight of evidence favors Auditor D:** diagonals remain as diagonals at 768px (responsive non-implementation confirmed).

---

## 11. COVERAGE GAP: Auditor B (Readability + Responsiveness)

Auditor B failed to produce findings after 2 attempts. Only a partial cold look at 1440px exists.

### PA Questions With Zero Direct Coverage

| PA Question | Topic | Mitigation from Other Auditors |
|-------------|-------|-------------------------------|
| PA-02 | Body text comfortable for 5+ minutes? | Partial: Auditor A observes "body text reads well — warm serif at comfortable size" |
| PA-06 | Font sizes correct at every level? | NONE — no pixel measurements taken by any auditor |
| PA-07 | Line lengths comfortable? | Partial: Auditor C measures "approximately 70-80 characters" — within comfortable range |
| PA-08 | Touch/click targets appropriately sized? | NONE — zero touch target assessment |
| PA-21 | Responsive layout natural or forced? | Covered: Auditor D + Adversarial confirm NO responsive layout exists |
| PA-22 | Responsive transitions maintain flow? | Covered: N/A — no responsive transitions to evaluate |
| PA-23 | Mobile experience intentional? | Covered: Auditor D confirms desktop layout at all widths — NOT intentional mobile |

### Net Impact Assessment

- **Readability at 1440px:** ADEQUATELY covered indirectly (A confirms readable, C confirms line lengths)
- **Font size token compliance:** GENUINELY UNCHECKED — no auditor measured rem values against the type scale
- **Touch targets:** GENUINELY UNCHECKED — no auditor assessed interactive element sizing
- **Responsive experience:** COVERED by D + Adversarial (non-implementation confirmed)

---

## 12. POSITIVE FINDINGS (What Works Well)

These strengths were confirmed across multiple auditors and should be preserved:

| Strength | Auditors | Evidence |
|----------|----------|---------|
| Editorial confidence and personality | A, C, D, all cold looks | A: "unhurried, architectural, confident"; D: "one designer, strong coherence" |
| Hub-spoke structure embodies choreography concept | A, C, D | A: "structure IS the content"; C: "WAVE density oscillation is palpable" |
| Callout vocabulary consistent and distinctive | A, D | A: "same left-accent-bar pattern"; D: all types visually consistent |
| Typography trio correctly applied | A, D | Serif headings, sans body, mono code confirmed |
| Territory card grid hierarchy clear | A, D | Featured tile wider with proper dominance; 6 regular tiles uniform |
| Axis direction change interstitials effective | A, C, D | A: "elegant wayfinding markers"; C: "deliberate punctuation" |
| Design system immediately identifiable | D (PA-25) | "Even without the header... highly distinctive" — callouts, flat aesthetic, warm cream |
| Cross-page family resemblance strong | D (PA-24) | AD-005, AD-006, AD-003 share core visual DNA; differences are content-appropriate |
| Warm neutral color family cohesive | A (PA-18) | "entire page lives in a warm cream-to-tan-to-charcoal palette" |
| Visual rhythm (WAVE oscillation) palpable | C (PA-17) | "SPARSE - DENSE - BREATHE" beat pattern; "one of the strongest visual rhythms I have seen" |
| Squint test passes at all viewports | C (PA-10) | Layout balanced, dark elements anchor at regular intervals |
| Margins confident, not anxious | C (PA-11) | "spacing of a well-set book page" at all viewports |

---

## 13. FINAL SUMMARY

### Verdict: SHIP WITH CONCERNS

### LOOKS-WRONG (4 findings)
1. **LW-1: Dead zones** — 3-auditor concordance, HIGH severity, worsens at narrow viewports
2. **LW-2: Responsive non-implementation** — 2 auditors + adversarial, HIGH severity, CRITICAL at 768px
3. **LW-3: Abrupt page ending** — 1 auditor FAIL verdict, MEDIUM severity
4. **LW-4: Inconsistent transition ceremony** — 1 auditor, MEDIUM severity, structurally ironic

### COULD-BE-BETTER (7 findings)
5. **CB-1: Progress bar foreign** — 1 auditor consistent, MEDIUM
6. **CB-2: Red accent competition** — 1 auditor, LOW-MEDIUM
7. **CB-3: Hub over-promises scope** — adversarial, MEDIUM
8. **CB-4: Reference-manual content format** — adversarial, MEDIUM
9. **CB-5: Code block density shift** — 2 auditors, LOW
10. **CB-6: Table fragility at narrow** — adversarial, HIGH at 320px
11. **CB-7: Zone background near-invisibility** — adversarial, LOW

### Coverage Gaps
- Font size token compliance: UNCHECKED (Auditor B failure)
- Touch/click target sizing: UNCHECKED (Auditor B failure)

### Soul Compliance
**11/11 always-locked rules: ZERO VIOLATIONS**

### Strongest Quality
The WAVE density oscillation — the alternation between sparse hub zones and dense spoke zones — creates a palpable reading rhythm that embodies the page's own choreographic philosophy. Auditor C: "one of the strongest visual rhythms I have seen."

### Weakest Quality
The page does not practice what it preaches. Dead zones break the rhythm. Missing transitions break the ceremony. Responsive non-implementation contradicts the responsive collapse documentation. A choreography page should choreograph flawlessly.

---

*Weaver-Synthesizer report complete. 4 findings files, 4 cold looks (1 partial), 1 lock sheet synthesized. 1 contradiction resolved. 11 findings deduplicated from ~30 raw observations. 12 positive findings preserved.*
