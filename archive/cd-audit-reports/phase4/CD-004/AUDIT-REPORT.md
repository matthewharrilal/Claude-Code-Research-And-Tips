# CD-004 AUDIT REPORT — Essence as Background
## Phase 4 Standalone Perceptual Audit — Weaver Synthesis

**Page:** CD-004-essence-as-background.html
**Date:** 2026-02-11
**Inputs:** Lock Sheet, Cold Look Auditor, Findings (6 items)
**Viewports:** 1440x900, 1024x768, 768x1024

---

## 1. CONTAMINATION CHECK

The findings file contains CSS/implementation terminology that must be translated to perceptual language.

| Raw Term | Perceptual Translation | Instances |
|----------|----------------------|-----------|
| "scroll animations" | content-reveal behavior | 4 |
| "scroll observers" | progressive visibility system | 1 |
| "JS-driven scroll observers" | scripted content appearance | 1 |
| "scroll-animation system" | staged content reveal | 1 |
| "parallax" | depth-simulating movement | 1 |
| "reveal timing" | appearance sequencing | 1 |
| "CSS override" | forced style change | 1 |
| "JavaScript-driven" | script-dependent | 1 |
| "DOM elements" | page elements | 1 |
| "scrollHeight" | total page length | 1 |

**Contamination level:** MODERATE (12 instances). The underlying visual observations are valid — the auditor correctly identifies that below-fold content becomes invisible under certain conditions. The mechanism description is contaminated but the perceptual impact is accurately reported.

All translations applied in analysis below.

---

## 2. LOCK SHEET CROSS-REFERENCE

### F-001: Content Invisibility Below Fold — LOCKED RULE VIOLATION

**Finding:** Entire page below the initial viewport renders as blank cream when content-reveal behavior is suppressed. Total page length is 12,264 pixels but only the header and first section are visible without scripted appearance.

**Lock Sheet Match:** LOCKED — "Scroll-reveal: initial CSS = VISIBLE, JS MAY add hidden" (ESC-002, CD-CONV S15.3). The rule explicitly states: "AD-006 hid 40-60% of content when animations failed. Progressive enhancement."

**Classification:** This is a LOCKED rule whose EXECUTION can be audited. The decision (content must be visible without scripts) is protected. The finding reports a direct violation of this decision — content is NOT visible when scripts fail.

**HOWEVER — IMPORTANT CAVEAT:** The auditor notes that Playwright contention caused browser hijacking during scrolled screenshots. The "blank cream" observation may be an artifact of Playwright contention (another auditor agent stealing the browser tab) rather than an actual content-visibility failure. The cold-look screenshots (taken before contention) were successful at all three viewports. The Phase 2 audit scored CD-004 at 38/40, and the Phase 3 fixes addressed the ESC-002 rule across all files (commit 027ca84). This finding requires **re-verification** before classification as a true violation.

**Verdict:** NEEDS VERIFICATION. If confirmed, this is WOULD-NOT-SHIP severity. If caused by Playwright contention (likely), downgrade to NOTE.

---

### F-002: Header-to-Content Breathing Gap — CHALLENGEABLE

**Finding:** The vertical space between the header's red bottom border and the first "ESTABLISHED" badge feels like a missing element at 1440px. Proportionally more visible at 768px.

**Lock Sheet Match:** CHALLENGEABLE — "Spacing token values (--space-1 through --space-20)" and partially LOCKED — "Breathing zone budget: 15% minimum, 25% ceiling of page height" (AD-PA DM-005).

**Classification:** The gap is a spacing decision within the CHALLENGEABLE zone. The auditor does not report that it exceeds 25% of page height (which would be a LOCKED violation). The gap is described as "one beat too long" — a perceptual judgment, not a rule violation.

**Cold Look Corroboration:** Both the independent cold-look auditor and the findings auditor flag this as their primary concern at 1440px. The cold-look auditor calls it "slightly too long" and "the one thing that bothers me." At 1024px, both agree the gap feels intentional rather than excessive.

**Verdict:** COULD-BE-BETTER. The gap is within convention bounds but could benefit from tightening at wider viewports. This is a viewport-specific refinement, not a structural issue.

---

### F-003: Essence Callout Readability — SOVEREIGNTY RESPECTED

**Finding:** Italic serif text in Essence callouts against warm cream creates a "slightly ghostly effect" requiring marginally more reading effort than body text.

**Lock Sheet Match:** ALWAYS-LOCKED — "Essence + Core Abstraction body = serif italic ONLY" (Soul Piece #2). The font choice is locked and correct. The readability concern is about the combination of italic + serif + warm-on-warm contrast, not the font choice itself.

**Classification:** The font styling is ALWAYS-LOCKED and correctly applied. The perceptual effect (slight recession) is acknowledged by the auditor as potentially intentional: "The readability reduction is actually somewhat intentional — Essence is meant to be 'background.'" The page title is literally "Essence as Background."

**Cold Look Corroboration:** The cold-look auditor describes this identically: "It reads as a philosophical whisper set against the louder instructional voice below. That tonal contrast IS the page's identity." Both auditors agree the effect exists and may be a feature rather than a bug.

**Verdict:** SOVEREIGNTY — NOT A FINDING. The slight recession IS the design intent of "Essence as Background." The italic serif recedes while remaining present, which is exactly what this exploration demonstrates. No action needed.

---

### F-004: Research Application Record Placement — CHALLENGEABLE

**Finding:** The Research Application Record at page bottom is dense metadata rendered as standard paragraphs, creating a jarring shift from the philosophical ending ("The architecture is never finished...") to technical provenance.

**Lock Sheet Match:** No direct lock. The Research Application Record is mandated by CLAUDE.md process rules but its visual treatment is not locked. The footer/capstone rule (LOCKED) requires a footer element, which is present separately.

**Classification:** CHALLENGEABLE — the record's existence is required but its visual presentation and position relative to the emotional ending are builder decisions.

**Verdict:** COULD-BE-BETTER. The emotional ending (final Essence callout) should feel like the page's conclusion to readers, with the Research Application Record visually distinguished as metadata/appendix rather than inline content. This is a polish item, not a structural issue.

---

### F-005: Two-Column Reasoning at 768px — LOCKED EXECUTION CHECK

**Finding:** Two side-by-side argument columns ("Arguments For Documents" vs "Arguments For Relations") may be cramped at 768px.

**Lock Sheet Match:** LOCKED — "Responsive: 768px collapse (2-3 col)" (ESC-001, CD-CONV S12.5). Two-column layouts should collapse at 768px.

**Classification:** The auditor could not visually verify due to the content-visibility issue (F-001). The accessibility tree shows two side-by-side containers. If these remain side-by-side at 768px without stacking, this would be a LOCKED execution violation.

**Verdict:** NEEDS VERIFICATION. If the columns fail to stack at 768px, this is LOOKS-WRONG severity. Cannot classify without visual confirmation.

---

### F-006: Page Height — CHALLENGEABLE

**Finding:** Total page length of 12,264 pixels may include substantial staging space from the content-reveal system, with actual content potentially being 6,000-8,000 pixels.

**Lock Sheet Match:** CHALLENGEABLE — "Page length target: 10,000-14,000px" (CD-CONV S8). At 12,264px the page is within the target range.

**Classification:** The reported height is within convention bounds. The speculation about "animation staging space" is contaminated (implementation reasoning), and the concern about "long stretches of blank space while animations load" is contingent on F-001's verification.

**Verdict:** NOT A FINDING. Page height 12,264px falls within the 10,000-14,000px target. If F-001 is confirmed, the blank space is subsumed under that finding.

---

## 3. DEDUPLICATION

| Finding | Duplicate Of | Resolution |
|---------|-------------|------------|
| F-006 (page height) | F-001 (content visibility) | F-006 is contingent on F-001. If content IS visible, 12,264px is within range. If NOT visible, the blank space is F-001's symptom. **MERGED into F-001.** |

**Unique findings after deduplication: 5** (F-001 through F-005)

---

## 4. RANKING

### Tier 1: WOULD-NOT-SHIP (if confirmed)

**F-001: Below-Fold Content Invisibility**
- Severity: CRITICAL (contingent on verification)
- Likelihood of being a true finding: LOW — Phase 3 fixes specifically addressed ESC-002 across all files, and Playwright contention is the likely cause of blank screenshots
- If confirmed: the page is fundamentally broken for accessibility users
- If Playwright artifact: downgrade to NOTE

### Tier 2: LOOKS-WRONG (if confirmed)

**F-005: Two-Column Stacking at 768px**
- Severity: MEDIUM (contingent on verification)
- Cannot be assessed without visual confirmation
- If columns fail to stack: LOCKED rule violation (ESC-001)
- If columns do stack: NOT A FINDING

### Tier 3: COULD-BE-BETTER

**F-002: Header-to-Content Breathing Gap**
- Severity: LOW-MEDIUM
- Both auditors flag this as their #1 concern
- Viewport-specific: most noticeable at 1440px, least at 1024px
- Within convention bounds but could be refined

**F-004: Research Application Record Placement**
- Severity: LOW
- The record is required but could be visually distinguished
- Breaks the emotional ending flow
- Polish item, not structural

### Not Ranked (Sovereignty)

**F-003: Essence Callout Readability**
- NOT A FINDING — the recession effect IS the design intent
- Both auditors independently confirm this matches "Essence as Background"

---

## 5. COLD LOOK ANALYSIS

The independent cold-look auditor provides strong corroboration:

**Personality alignment:** "Confident, editorial, academic" (cold look) vs "Confident. Editorial. Layered" (findings). The page identity is unambiguous and consistent across both auditors.

**One-designer test:** PASS at all three viewports from both auditors. No disagreement.

**Primary concern alignment:** Both auditors independently identify the header-to-content gap as their #1 visual concern. This cross-corroboration elevates F-002's credibility.

**Key cold-look insight:** "The Essence callout with its left border and italic serif text is distinct from the body prose. It reads as a philosophical whisper set against the louder instructional voice below. That tonal contrast IS the page's identity." This directly supports classifying F-003 as sovereignty rather than a finding.

**Cold-look gap:** The cold-look auditor did not observe the below-fold content visibility issue (F-001) because cold looks are locked to the initial viewport. This is expected behavior — cold looks capture first impression, not full-page audit.

---

## 6. SOVEREIGNTY CLASSIFICATION

| Finding | Classification | Rationale |
|---------|---------------|-----------|
| F-001 | LOCKED EXECUTION (if confirmed) | ESC-002 mandates visible content without scripts |
| F-002 | CHALLENGEABLE spacing | Within breathing budget, perceptual preference |
| F-003 | SOVEREIGNTY — design intent | Essence recession IS the exploration's thesis |
| F-004 | CHALLENGEABLE layout | Record required, presentation is builder choice |
| F-005 | LOCKED EXECUTION (if confirmed) | ESC-001 mandates 768px column collapse |
| F-006 | MERGED into F-001 | Not independent |

**Sovereignty respected:** 1 finding (F-003) correctly classified as intentional design expression. The auditor's observation is accurate (the text does recede) but the interpretation (this is a problem) is overridden by the page's stated intent and both auditors' acknowledgment that it IS the point.

---

## 7. MULTI-VIEWPORT COMPARISON

| Aspect | 1440px | 1024px | 768px |
|--------|--------|--------|-------|
| Header presence | Commanding | Best proportioned | Slightly heavy |
| Content column | Editorial width | Optimal reading | Dense, functional |
| Header gap (F-002) | Most noticeable | Least noticeable | Proportionally largest |
| Essence readability (F-003) | Slightly ghostly | Good | Good (shorter lines help) |
| Personality | Confident, editorial | Balanced, scholarly | Focused, functional |
| One-designer test | PASS | PASS | PASS |

**Best viewport:** 1024px — both auditors agree this shows the most balanced proportions.

**Weakest viewport:** 768px for F-002 (gap is proportionally most visible) but strongest for readability (shorter lines). No viewport fails outright.

**Cross-viewport consistency:** STRONG. The page maintains its identity ("confident, editorial") across all three viewports while appropriately adapting density. The personality shift from "editorial" (1440) to "functional" (768) is appropriate responsive behavior.

---

## 8. FINAL VERDICT

### Overall Assessment: CONDITIONAL PASS

**Score: 8/10** (pending verification of F-001 and F-005)

CD-004 is a polished, editorially confident page that successfully demonstrates its thesis — "Essence as Background." The italic serif callouts genuinely recede while remaining present, creating the ambient philosophical voice the exploration intends. The confidence tier structure provides clear wayfinding. The Decision Choreography section effectively shifts the page mode.

### Confirmed Findings (actionable now)

| # | Finding | Severity | Action |
|---|---------|----------|--------|
| F-002 | Header-to-content gap slightly excessive at 1440px | COULD-BE-BETTER | Consider tightening by 16-24px at wider viewports. Low priority. |
| F-004 | Research Application Record breaks emotional ending | COULD-BE-BETTER | Visually distinguish as metadata/appendix. Low priority. |

### Findings Requiring Verification

| # | Finding | Contingent Severity | Verification Needed |
|---|---------|-------------------|-------------------|
| F-001 | Below-fold content invisible | WOULD-NOT-SHIP if real; NOTE if Playwright artifact | Test with animations disabled in clean browser session (no concurrent agents). Phase 3 commit 027ca84 should have fixed ESC-002. |
| F-005 | Two-column reasoning may not stack at 768px | LOOKS-WRONG if columns don't stack | Visual check of "Arguments For/Against" section at 768px viewport |

### Findings Dismissed

| # | Finding | Reason |
|---|---------|--------|
| F-003 | Essence callout readability | SOVEREIGNTY: recession IS the design intent. Both auditors confirm. |
| F-006 | Page height anomaly | MERGED into F-001. Height 12,264px is within 10,000-14,000px target. |

### Lock Sheet Compliance

| Lock Category | Status |
|---------------|--------|
| ALWAYS-LOCKED (Soul) | PASS — Font trio correct, Essence = serif italic, palette referenced correctly |
| LOCKED (Research-Backed) | CONDITIONAL — F-001 (ESC-002) and F-005 (ESC-001) need verification |
| CHALLENGEABLE | F-002 and F-004 are within challengeable bounds; no violations |

### Ship Readiness

- **If F-001 is Playwright artifact (likely):** 8.5/10 — ship with minor polish on F-002 gap
- **If F-001 is confirmed real:** 5/10 — blocked until progressive enhancement restored
- **Recommendation:** Verify F-001 in a clean browser session before any further action. The Phase 3 fixes (commit 027ca84) specifically addressed ESC-002, making a true violation unlikely.

---

## APPENDIX: Auditor Agreement Matrix

| Question | Cold Look | Findings | Agreement |
|----------|-----------|----------|-----------|
| Personality | Confident, editorial, academic | Confident, editorial, layered | STRONG (2/3 identical) |
| One-designer test | PASS | PASS all viewports | FULL |
| Primary concern | Header-to-content gap | Header-to-content gap | FULL |
| Essence assessment | "philosophical whisper" = identity | "slightly ghostly" but intentional | STRONG |
| Ship readiness | Not rated (cold look) | 7.5/10 (blocked by F-001) | N/A |

**Inter-auditor reliability:** HIGH. Both auditors independently converge on the same personality, same primary concern, and same interpretation of the Essence callout effect.

---

*Synthesized by Weaver agent. No source files read. No fixes applied. No Playwright used.*
