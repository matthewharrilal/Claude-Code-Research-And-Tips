# Weaver Draft — AD-005 Choreography
## Working Notes

### Files Read
1. lock-sheet.md (150 lines, 70 decisions classified)
2. findings-impression-emotion.md (Auditor A — 111 lines, 9 findings)
3. findings-spatial-grid.md (Auditor C — 232 lines, 6 PA questions)
4. findings-hierarchy-coherence.md (Auditor D — 220 lines, 6 PA questions + cross-cutting)
5. findings-adversarial.md (Adversarial — 124 lines, 4 challenges + 5 fragilities)
6. cold-look-auditor-a.md (Auditor A — 11 lines)
7. cold-look-auditor-b.md (Auditor B — 18 lines, PARTIAL — 1440px only, 768/1024 empty)
8. cold-look-auditor-c.md (Auditor C — 22 lines)
9. cold-look-auditor-d.md (Auditor D — 28 lines)

### Coverage Gap
Auditor B (Readability+Responsiveness) failed to produce full findings.
- Cold look exists: 1440px only (768/1024 marked "to be filled")
- Missing PA questions: PA-02 (readability), PA-06 (font sizes), PA-07 (line lengths), PA-08 (click targets), PA-21 (responsive), PA-22 (responsive transitions), PA-23 (mobile-first)
- Partial coverage from other auditors: Auditor A covers some readability observations, Auditor C covers spatial aspects at multiple viewports, Auditor D covers cross-viewport coherence
- NET IMPACT: Readability micro-details (font size correctness, line length measurements, touch target sizes) have ZERO direct coverage. Responsive behavior is covered by D (non-implementation observed) and Adversarial (768px grid challenge).

---

## 1. CONTAMINATION CHECK

Scanning all findings for CSS property contamination (auditors inserting their own CSS opinions rather than evaluating what exists):

- **Auditor A:** No contamination. Reports what is observed. Does not suggest CSS values.
- **Auditor C:** No contamination. Reports spatial observations. Does not suggest CSS changes.
- **Auditor D:** No contamination. Reports hierarchy/coherence observations. Cross-page comparison is observational.
- **Adversarial:** CHALLENGE-04 references "Grid collapse at 768px" from lock sheet — this is QUOTING the convention, not injecting CSS. No contamination.
- **All cold looks:** Pure impression, no CSS mentions.

**VERDICT: ZERO contamination detected across all 4 auditors.**

---

## 2. CROSS-REFERENCE AGAINST LOCK SHEET

### Always-Locked Rules
| Rule | Auditor Mentions | Status |
|------|-----------------|--------|
| border-radius: 0 | D: "flat editorial aesthetic... zero rounded corners anywhere" (PA-25) | NO VIOLATIONS REPORTED |
| box-shadow: none | D: "zero shadows" (PA-25) | NO VIOLATIONS REPORTED |
| No filter: drop-shadow() | Not mentioned (no violations to report) | NO VIOLATIONS REPORTED |
| No CSS animations implying movement | Adversarial: FRAGILITY-04 notes scroll-triggered reveals unverifiable; no animations observed | NO VIOLATIONS REPORTED |
| No hover transforms | Not mentioned (no violations to report) | NO VIOLATIONS REPORTED |
| opacity === 1.0 | Not mentioned (no violations to report) | NO VIOLATIONS REPORTED |
| Font trio | A: mentions "warm serif" and "clean sans-serif"; D: "Instrument Serif for headings, same body font" | NO VIOLATIONS REPORTED |
| Primary color #E83025 | A: mentions "red" accents; D: mentions "red bottom border" | NO VIOLATIONS REPORTED |
| Background #FEF9F5 | C: "warm cream"; A: "warm cream background" | NO VIOLATIONS REPORTED |
| Text #1A1A1A | D: "dark nearly-black" | NO VIOLATIONS REPORTED |
| No 2px structural borders | Not mentioned (no violations to report) | NO VIOLATIONS REPORTED |

**SOUL COMPLIANCE: 11/11 always-locked rules — ZERO VIOLATIONS across 4 auditors.**

### Locked Token Values
| Token | Auditor Observation | Status |
|-------|-------------------|--------|
| Type scale | Not directly measured (Auditor B gap) | UNCHECKED — coverage gap |
| Spacing scale | C: observes "generous spacing" but does not measure tokens | UNCHECKED — perceptual only |
| Callout accents | A: "blue/teal" vs "red" competing; D: "blue for context, amber for caution, green for tips, purple for essence" | OBSERVED CORRECT per D |
| Zone backgrounds | Adversarial FRAGILITY-05: white/cream/breathing nearly invisible distinction | OBSERVED — near-invisibility risk noted |
| Border left-width 4px | D: mentions "thick colored left border" on callouts | NOT MEASURED precisely |
| Solid offset 4px | Not mentioned | UNCHECKED |

### Locked Structural Patterns
| Pattern | Auditor Observation | Status |
|---------|-------------------|--------|
| DD-F-006 fractal 5 scales | D: final element is "Fractal Self-Similarity table (DD-F-006) showing five scales" | OBSERVED PRESENT |
| Axis IS Organization IS Density | C: WAVE density oscillation visible; A: density shift noted | OBSERVED |
| Compound = sequential | N/A for AD-005 (single-axis page) | N/A |
| Transition grammar | D: 2 interstitials present; Adversarial: CHALLENGE-03 questions value | PARTIAL — inconsistent application |
| Callout family DNA | A: "same left-accent-bar pattern"; D: "Both Essence callouts use same structure" | CONSISTENT |
| Essence uses serif italic | A: mentions italic; D: "italic serif body text" | CONFIRMED |
| Dark code blocks | A: "dark background that contrasts sharply"; C: "dark rectangles" | CONFIRMED |
| Dark header | All 4 auditors + all cold looks confirm | CONFIRMED |
| Max 2 callouts per viewport | Adversarial FRAGILITY-03: "approaching but not clearly violating" | COMPLIANT (barely) |
| No traffic-light adjacency | Not mentioned (no violations observed) | NO VIOLATIONS REPORTED |

### AD-005 Specific Locked Patterns
| Pattern | Auditor Observation | Status |
|---------|-------------------|--------|
| "Choreography" = reader attention, not CSS animation | Adversarial: no animations observed | CONFIRMED |
| Diagonal clip-path as dual signal | C: "dark angled band (diagonal transition)"; D: "axis direction change interstitials" | OBSERVED |
| Clip-path degrades to border-top: 3px at mobile | D: "The diagonal sections do not become horizontal borders" at 768px; C at 768px: "diagonal transitions becoming horizontal borders weakens the visual bar line" | CONTRADICTORY — D says NO degradation, C says degradation DOES happen. Need resolution. |

**CONTRADICTION IDENTIFIED:** Auditor C (PA-17, 768px) says "The diagonal transitions becoming horizontal borders weakens the visual bar line" — implying the diagonals DO become borders at 768px. Auditor D (Cross-Cutting) says "The diagonal sections do not become horizontal borders" and "The axis direction change interstitials do not simplify" at 768px. These are directly contradictory.

Resolution: Auditor D explicitly tested at 768px with screenshots and reports "the layout is IDENTICAL to 1440px. No responsive collapse occurs." Auditor C's phrasing ("becoming horizontal borders") may be describing what SHOULD happen rather than what WAS observed. Weight of evidence: D's explicit statement wins. The diagonals likely remain as diagonals at 768px (responsive non-implementation).

---

## 3. DEDUPLICATION

### Finding Clusters

**CLUSTER 1: Dead Zones / Excessive Breathing Space**
- A-Finding-1 (HIGH): "MASSIVE dead zones (~2 viewport heights) between spoke sections"
- A-PA-01: "After Essence callout at end of Spoke 1... approximately 2 full viewport heights of completely empty warm cream"
- C-PA-09 (1440px): "very large gap" between Essence callout and Density Wave — "exceeds what feels purposeful"
- C-PA-09 (768px): "Essence-to-Density-Wave gap remains disproportionately large"
- D-PA-12-sticking-2: "large empty gap" between Spoke 2 end and "Ascending to Synthesis" interstitial
- Adversarial-CHALLENGE-03 (LOW): Interstitials themselves are dead space

→ DEDUPLICATED: One finding with two instances (post-Spoke-1 gap = primary, post-Spoke-2 gap = secondary). Adversarial's interstitial challenge is distinct (structural, not accidental).

**CLUSTER 2: Progress Bar Feels Foreign**
- A-Finding-2 (MEDIUM): "Progress bar segments feel foreign/app-like in editorial context"
- A-PA-19: "the segmented horizontal bars with a red active segment... feel like they were imported from a dashboard"
- A-Cold-Look: "progress bar... feels like a foreign UI element"
- B-Cold-Look: (not mentioned)
- C-Cold-Look: (not mentioned — spatial focus)
- D-Cold-Look: "segmented progress bar (four segments, the first one red, the rest faded)" — neutral observation

→ DEDUPLICATED: One finding. Only Auditor A flags this as problematic; D observes it neutrally. Single-auditor concern but consistently raised across A's cold look and full analysis.

**CLUSTER 3: Red Accent Color Competition**
- A-Finding-3 (MEDIUM): "Red accent color in progress bars and Featured Territory card competes with blue/teal accent in callout boxes"
- A-PA-04: "the segmented progress bar... catches my eye because of its red segment"

→ DEDUPLICATED: One finding. Single-auditor concern.

**CLUSTER 4: Hub Over-Promises / Scope Mismatch**
- Adversarial-CHALLENGE-01 (MEDIUM): Hub shows 7 territories, only 3 become spokes
- D-PA-12-sticking-3: Synthesis section lacks ceremonial framing that spokes received

→ DEDUPLICATED: Related but distinct. CHALLENGE-01 is about hub scope, D's finding is about synthesis entry ceremony. Keep separate.

**CLUSTER 5: Inconsistent Transition Ceremony**
- D-Cross-Cutting-2: "2 interstitials where the choreographic logic suggests 4-5"
- D-PA-12-sticking-1: No interstitial between Spoke 1 and Density Wave
- D-PA-12-sticking-2: Large gap before "Ascending to Synthesis" interstitial
- Adversarial-CHALLENGE-03: Interstitials are dead space (opposite take — too much, not too few)

→ DEDUPLICATED: One meta-finding about inconsistent choreographic transitions. D's sticking points are instances; Adversarial's challenge is a counterpoint (questioning the convention itself).

**CLUSTER 6: Abrupt Page Ending**
- D-PA-13 (FAIL): "The page STOPS rather than ENDS"
- D-Cross-Cutting-3: "opens with elaborate ceremony... closes without any ceremony"

→ DEDUPLICATED: One finding.

**CLUSTER 7: Responsive Non-Implementation**
- D-Cross-Cutting-1: "renders identically at 1440px, 1024px, and 768px"
- D-Cold-Look: "layout is IDENTICAL to 1440px. No responsive collapse occurs"
- Adversarial-CHALLENGE-04 (HIGH): "4-column grid at 768px is unreadable"
- C-PA-09 (768px): gap "disproportionately large" at mobile

→ DEDUPLICATED: One meta-finding about responsive non-implementation with specific sub-finding about 768px grid crampedness.

**CLUSTER 8: Table Fragility at Narrow Viewports**
- Adversarial-FRAGILITY-01 (HIGH): "Tables truncate at narrow viewports"

→ Standalone finding from adversarial only.

**CLUSTER 9: Content is Reference-Manual, Not Choreographic**
- Adversarial-CHALLENGE-02 (MEDIUM): Spoke content is "flat reference material"

→ Standalone finding from adversarial only.

**CLUSTER 10: Code Block Density Shift**
- A-Finding-4 (LOW): "Prohibited code block is very tall and dense, creating jarring density shift"
- C-PA-10: "code blocks in Spoke 1 create a very heavy visual weight concentrated in the middle"

→ DEDUPLICATED: One finding, two auditors observe independently.

**CLUSTER 11: Zone Background Near-Invisibility**
- Adversarial-FRAGILITY-05 (LOW): White/cream/breathing backgrounds nearly identical

→ Standalone finding from adversarial.

**CLUSTER 12: Callout Stacking Proximity**
- Adversarial-FRAGILITY-03 (MEDIUM): Approaching max 2 per viewport limit

→ Standalone finding from adversarial.

---

## 4. RANKING

### WOULD-NOT-SHIP
(None — no finding is severe enough to block shipping entirely)

### LOOKS-WRONG
1. **Dead zones between spoke sections** (Cluster 1) — 3 auditors (A, C, D) independently flag
2. **Responsive non-implementation at 768px** (Cluster 7) — 2 auditors (D, Adversarial) + cold look
3. **Abrupt page ending** (Cluster 6) — 1 auditor (D) but FAIL verdict
4. **Inconsistent transition ceremony** (Cluster 5) — 1 auditor (D) but structurally significant for a choreography page

### COULD-BE-BETTER
5. **Progress bar feels foreign** (Cluster 2) — 1 auditor (A) consistently
6. **Red accent color competition** (Cluster 3) — 1 auditor (A)
7. **Hub over-promises scope** (Cluster 4) — adversarial only
8. **Content is reference-manual** (Cluster 9) — adversarial only
9. **Code block density shift** (Cluster 10) — 2 auditors (A, C)
10. **Table fragility at narrow viewports** (Cluster 8) — adversarial only
11. **Zone background near-invisibility** (Cluster 11) — adversarial only
12. **Callout stacking proximity** (Cluster 12) — adversarial only

---

## 5. COLD LOOK CONCORDANCE

| Auditor | Cold Look Verdict | Worst Thing | Best Thing | Concordance with Full Analysis |
|---------|------------------|-------------|------------|-------------------------------|
| A | SHIP WITH NOTES | Progress bar foreign | Territory card grid | HIGH — cold look "worst thing" became Finding #2; cold look "best thing" confirmed in full analysis |
| B | CONDITIONAL SHIP (1440px only) | Territory cards A/B narrower than Featured | Header commanding, Establishing Shot callout | PARTIAL — only cold look exists; narrow cards observation not raised by others (may be acceptable hierarchy) |
| C | N/A (spatial observation, no verdict) | "LOT of whitespace between sections — some excessive" | "distinct pulse: open space, then tiles, then dense reading" | HIGH — excessive whitespace became PA-09 dead space finding; pulse observation became PA-17 rhythm finding |
| D | N/A (hierarchy observation, no verdict) | "No responsive collapse occurs" at 768px | "hierarchy is clear: header > hub > tiles > spokes > synthesis" | HIGH — responsive non-implementation became Cross-Cutting finding #1 |

**Cold look alignment: 3/4 auditors show high concordance between cold look impressions and full analysis. Auditor B's cold look identified narrow territory cards — a minor concern not corroborated by other auditors but not contradicted either.**

---

## 6. SOVEREIGNTY CLASSIFICATION

| Finding | Sovereignty | Explanation |
|---------|------------|-------------|
| Dead zones between sections | AD-005 SOVEREIGN | Specific to this page's breathing space execution |
| Responsive non-implementation | SYSTEMIC (if same in other ADs) or AD-005 SOVEREIGN | D reports identical layout at all viewports; needs cross-page check |
| Abrupt page ending | POTENTIALLY SYSTEMIC | D visited AD-006 and AD-003 but did not report ending quality for those pages |
| Inconsistent transitions | AD-005 SOVEREIGN | Specific to this page's hub-spoke choreography |
| Progress bar foreign | AD-005 SOVEREIGN (unless progress bars appear in other ADs) | Only audited on this page |
| Red accent competition | AD-005 SOVEREIGN | Specific to hub grid's red accent vs callout accents |
| Hub over-promises | AD-005 SOVEREIGN | Specific to 7-tile hub with 3 spokes |
| Code block density | POTENTIALLY SYSTEMIC | Code blocks are common across all ADs |
| Table fragility | POTENTIALLY SYSTEMIC | Tables are common across all ADs |

---

## 7. MULTI-VIEWPORT COMPARISON

| Finding | 1440px | 1024px | 768px | Trend |
|---------|--------|--------|-------|-------|
| Dead zones | Present (HIGH) | Same (proportionally larger per C) | Same (most noticeable per C) | WORSENS at narrow |
| Responsive collapse | N/A (desktop) | NO COLLAPSE (D) | NO COLLAPSE (D) — grid cramped (Adversarial HIGH) | CRITICAL at 768px |
| Transition inconsistency | 2 of 4-5 present | Same | Same | STATIC — no responsive change |
| Progress bar foreign | Visible, app-like | Same | Same | STATIC |
| Code block density | Front-loaded weight (C) | Same | Same | STATIC |
| Table readability | Good (Adversarial) | Good | Truncation begins (Adversarial) | WORSENS at narrow |
| Abrupt ending | Present | Present | Present | STATIC |

---

## 8. CONVENTION CHALLENGE FROM ADVERSARIAL

4 conventions challenged:

| Challenge | Convention | Severity | Lock Status | Weaver Assessment |
|-----------|-----------|----------|-------------|-------------------|
| CHALLENGE-01 | Hub grid shows 7 tiles for 3 spokes | MEDIUM | CHALLENGEABLE | VALID — perceptual mismatch between promise and delivery |
| CHALLENGE-02 | Content is reference-manual | MEDIUM | CHALLENGEABLE | VALID but subjective — content format is a design-intent question |
| CHALLENGE-03 | Interstitials are dead space | LOW | CHALLENGEABLE | PARTIALLY VALID — interstitials serve wayfinding; the issue is more that the page has TOO FEW of them (per D) than too many |
| CHALLENGE-04 | 768px grid doesn't collapse | HIGH | CHALLENGEABLE | MOST ACTIONABLE — corroborated by D's responsive non-implementation finding |

---

## 9. FRAGILITY ASSESSMENT FROM ADVERSARIAL

| Fragility | Severity | Current Impact | Future Risk |
|-----------|----------|---------------|-------------|
| FRAGILITY-01: Table truncation | HIGH | REAL at 320px, beginning at 500px | HIGH — more tables = worse |
| FRAGILITY-02: No 3-col intermediate grid | MEDIUM | Theoretical (current tile count works) | MEDIUM — adding tiles breaks it |
| FRAGILITY-03: Callout stacking | MEDIUM | Currently compliant | LOW — 7 callouts across full page is well within limits |
| FRAGILITY-04: Scroll reveals unverifiable | LOW | Cannot be tested in current audit environment | N/A — audit methodology gap |
| FRAGILITY-05: White/cream near-invisible zones | LOW | Perceptible at desktop, less so on miscalibrated monitors | LOW — token-compliant |

---

## 10. COVERAGE GAP NOTE

Auditor B (Readability+Responsiveness) failed to produce findings after 2 attempts. Only a partial cold look (1440px) exists.

**PA questions with ZERO direct coverage:**
- PA-02: Is the body text comfortable to read for 5+ minutes?
- PA-06: Do the font sizes feel correct at every level?
- PA-07: Are line lengths comfortable or does your eye get lost?
- PA-08: Are touch/click targets appropriately sized?
- PA-21: Does the responsive layout feel natural or forced?
- PA-22: Do responsive transitions maintain reading flow?
- PA-23: Does the mobile experience feel intentional or like a desktop squeeze?

**Partial mitigation from other auditors:**
- Auditor A (PA-01 readability observations): "body text reads well — warm serif at comfortable size with generous line spacing"
- Auditor C (PA-14): "comfortable line lengths of approximately 70-80 characters"
- Auditor D (cross-viewport): confirms responsive NON-implementation (same layout at all widths)
- Adversarial (CHALLENGE-04): 768px grid is cramped, confirming PA-21/23 concerns indirectly

**NET: Readability at 1440px appears adequate based on indirect observations. Responsive experience is KNOWN to be non-implemented. Touch targets, font size token compliance, and mobile intentionality are genuinely unchecked.**

---

## FINAL VERDICT REASONING

**Strengths (confirmed across 3+ auditors):**
- Strong editorial identity — confident, warm, architectural
- Soul compliance: ZERO violations across 11 always-locked rules
- Callout vocabulary consistent and distinctive
- Typography trio applied correctly
- Hub-spoke structure IS the choreography concept embodied
- WAVE density oscillation is palpable (sparse-dense-breathe rhythm)
- Design system identity immediately recognizable (PA-25 PASS)
- Cross-page family resemblance strong (PA-24 PASS)

**Weaknesses (ranked by multi-auditor concordance):**
1. Dead zones — 3 auditors (A, C, D) — LOOKS-WRONG
2. Responsive non-implementation — 2 auditors + adversarial — LOOKS-WRONG
3. Abrupt ending — 1 auditor (D) FAIL — LOOKS-WRONG
4. Inconsistent transitions — 1 auditor (D) — LOOKS-WRONG (structural irony for a choreography page)
5. Progress bar foreign — 1 auditor (A) — COULD-BE-BETTER
6. Hub scope mismatch — adversarial — COULD-BE-BETTER
7. Table fragility at narrow — adversarial — COULD-BE-BETTER (real at 320px)

**VERDICT: SHIP WITH CONCERNS**

Rationale: The page's editorial identity, soul compliance, and structural concept are strong. No WOULD-NOT-SHIP findings. But 4 LOOKS-WRONG findings (dead zones, responsive non-implementation, abrupt ending, inconsistent transitions) collectively create a page that does not fully practice what it preaches. A choreography page with dead zones, missing transitions, and no responsive behavior is ironic rather than broken. The page is shippable at 1440px desktop; at 768px it has a genuine readability problem (CHALLENGE-04).
