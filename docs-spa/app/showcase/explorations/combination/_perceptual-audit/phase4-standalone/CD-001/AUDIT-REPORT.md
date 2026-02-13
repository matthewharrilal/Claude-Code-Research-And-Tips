# AUDIT REPORT: CD-001 -- Reasoning Inside Code

## Verdict: SHIP WITH CONCERNS

**Page:** CD-001-reasoning-inside-code.html
**Date:** 2026-02-11
**Synthesizer:** Weaver (Phase 4 Standalone)
**Inputs:** Lock Sheet, Cold Look (3 viewports), Findings (5 dimensions + 20 PA questions x 3 viewports)

---

## Cold Look Summary

The cold look auditor assessed CD-001 at three viewports (1440, 768, 1024) with consistent results:

- **1440px:** "Serious, well-structured teaching document." Ship verdict: YES WITH RESERVATIONS. The empty right third is the dominant complaint -- content channel feels narrow relative to generous viewport.
- **768px:** "Much denser and more engaging." Ship verdict: YES WITH RESERVATIONS. Section transition seams visible; code blocks slightly tight.
- **1024px:** "Goldilocks viewport." Ship verdict: YES (no reservations). Content channel feels intentional, proportions right.

**Gut personality:** "Methodical, warm, scholarly" -- consistent across all three viewports (a strength: identity survives viewport changes).

**Cold look concordance:** Both the cold look auditor and the findings auditor independently identified the same top two issues: (1) empty right side at 1440px, (2) section transition seams. This concordance increases confidence in the findings.

---

## Top 5 Findings (ranked by visual impact)

| Rank | Finding | Severity | Concordance | Track |
|------|---------|----------|-------------|-------|
| 1 | Scroll-reveal rendering blanks 70%+ of page when JS/intersection observers fail | CRITICAL | Findings only (cold look did not test JS failure) | Perception |
| 2 | Content channel too narrow at 1440px -- right third is empty cream | HIGH | Cold look + Findings (both flagged independently) | Perception |
| 3 | Section transition gaps oversized (Building/Peak, Peak/Resolution) | MEDIUM | Cold look (partial) + Findings | Perception |
| 4 | Section transition seam visible at narrow viewports | LOW | Cold look + Findings (both flagged) | Perception |
| 5 | Reasoning box text density peak in Building section | NOTE | Findings only | Perception |

---

## All Findings by Track

### Perception Track

#### WOULD-NOT-SHIP

**P-001: Scroll-reveal rendering failure**
- **Description:** When scroll-triggered intersection observers fail (slow connection, disabled JS, reader mode, programmatic scrolling), sections below ~3000px render as blank cream. Seven of fifteen viewport screens at 1440px showed empty space. DOM reports content present and visible, but visual render shows nothing.
- **Impact:** Content inaccessible without JS-triggered reveals.
- **Concordance:** Findings auditor only. Cold look did not test failure modes.
- **Sovereignty:** VALID AND ACTIONABLE -- targets execution of scroll-reveal, not the decision to have it. Lock Sheet ESC-002 explicitly requires "initial CSS = VISIBLE, JS MAY add hidden" (progressive enhancement). If the page hides content by default and relies on JS to reveal, this VIOLATES ESC-002.

#### LOOKS-WRONG

**P-002: Content channel width at 1440px**
- **Description:** Content column occupies roughly half viewport width, leaving right third as empty cream. Reads as design built for narrower screen scaled up without adaptation.
- **Impact:** Page feels incomplete at most common desktop viewport.
- **Concordance:** Both auditors flagged independently. Cold look: "Body text stops about two-thirds across... large empty right third." Findings: "not confident white space -- reads as unused real estate."
- **Sovereignty:** VALID -- Lock Sheet specifies container max-width of 1100px (C-01). At 1440px viewport, 1100px container leaves 340px unused. This is a LOCKED DECISION (1100px max-width). The finding targets the PERCEPTION of that decision. The content channel may be narrower than the container -- that would be execution-auditable. But if the container itself is 1100px and the viewport is 1440px, the empty space is an inherent consequence of the locked decision. **Classification: ESCALATE** -- the locked 1100px container creates perceptually empty space at 1440px. The lock is valid but the perceptual consequence is real.

**P-003: Section transition gaps oversized**
- **Description:** Large cream gaps between sections (particularly after Reasoning box in Building section) span significant viewport portions and feel like content loss rather than breathing room.
- **Impact:** Reader momentum stalls scrolling through emptiness.
- **Concordance:** Findings auditor primary. Cold look noted gap between Context callout and pullquote band.
- **Sovereignty:** VALID AND ACTIONABLE -- targets spacing execution. Lock Sheet specifies breathing zone budget of 15-25% of page height (DM-005). If individual gaps exceed this proportionally, they are execution-auditable.

#### COULD-BE-BETTER

**P-004: Section transition seam at narrow viewports**
- **Description:** Boundary between cream content zones and pullquote bands shows as visible structural line that feels mechanical rather than designed. More noticeable at 768px.
- **Impact:** Minor polish issue breaking otherwise smooth reading flow.
- **Concordance:** Both auditors flagged. Cold look: "structural seam rather than designed transition."
- **Sovereignty:** VALID AND ACTIONABLE -- purely execution concern about transition treatment.

**P-005: Reasoning box text density peak**
- **Description:** Three dense paragraphs with bold terms and no visual breaks create the densest text cluster on the page. Hardest spot to sustain attention.
- **Impact:** Minor attention challenge in otherwise well-paced page.
- **Concordance:** Findings auditor only.
- **Sovereignty:** VALID AND ACTIONABLE -- density within a component is execution-auditable. Lock Sheet mentions max 2 callouts per viewport (DD-F-014) but does not lock internal density of reasoning boxes.

### Rule Track

**R-001: Potential ESC-002 violation (scroll-reveal progressive enhancement)**
- **Description:** If content is hidden by default with CSS and JS reveals it, this violates ESC-002 which requires "initial CSS = VISIBLE, JS MAY add hidden." This is derived from P-001.
- **Lock Sheet Reference:** ESC-002 resolution, CD-CONV S15.3 -- "AD-006 hid 40-60% of content when animations failed. Progressive enhancement."
- **Severity:** SOUL VIOLATION equivalent (convention violation of locked rule).
- **Note:** This finding requires VERIFICATION. The findings auditor observed blank rendering but also noted "DOM reports all content is present and visible." It is possible the content IS CSS-visible (opacity: 1, display: block) but was not visually rendering due to a Playwright screenshot artifact or animation timing. The finding is flagged for verification, not confirmed as violation.

---

## Contamination Report

### CSS Terms Found in Findings

The findings file is **remarkably clean** of CSS contamination. The auditor used perceptual language throughout:

| Location | Term Used | Assessment |
|----------|-----------|------------|
| PA-15 answer | "Two primary positions" / "two-rail system" | CLEAN -- perceptual language for alignment |
| Finding 1 | "intersection observers" | BORDERLINE -- technical JS term, not CSS, but names a mechanism rather than a perception |
| Finding 2 | "content column" / "viewport width" | CLEAN -- standard perceptual vocabulary |
| Finding 3 | "cream gaps" / "viewport" | CLEAN |
| Finding 4 | "thin line" | CLEAN -- perceptual description |

**Contamination count: 0 CSS property names detected.** One JavaScript mechanism name ("intersection observers") used in Finding 1, which is acceptable because it describes the failure mechanism, not a visual property.

**Gate 4 assessment: PASS** -- this auditor maintained perceptual language discipline.

---

## Sovereignty Classifications

| Finding | Targets | Classification | Rationale |
|---------|---------|---------------|-----------|
| P-001 (scroll-reveal blank) | Locked EXECUTION (ESC-002) | VALID -- verify if violation | ESC-002 locks progressive enhancement; if CSS hides content, execution fails the lock |
| P-002 (narrow channel at 1440) | Locked DECISION (1100px container) | ESCALATE | 1100px max-width is locked; the perceptual consequence at 1440px is inherent |
| P-003 (transition gaps) | CHALLENGEABLE spacing | VALID AND ACTIONABLE | Spacing tokens are challengeable; breathing zone budget is auditable |
| P-004 (transition seam) | Builder execution | VALID AND ACTIONABLE | Transition treatment is not locked |
| P-005 (reasoning box density) | Builder execution | VALID AND ACTIONABLE | Internal component density is not locked |

---

## Multi-Viewport Comparison

### Squeeze Test: 1440 -> 1024 -> 768

| Dimension | 1440px | 1024px | 768px |
|-----------|--------|--------|-------|
| Content fill | ~50% of viewport | ~70% of viewport | ~90% of viewport |
| Spatial balance | LEFT-HEAVY (empty right) | BALANCED | BALANCED (edge-to-edge) |
| Ship verdict | WITH RESERVATIONS | YES | WITH RESERVATIONS |
| Personality | Methodical, warm, scholarly | Methodical, warm, scholarly | Focused, warm, rigorous |
| Code blocks | Comfortable | Comfortable | Slightly tight |
| Section transitions | Gaps visible | Proportional | Seams visible |

**Graceful degradation or collapse?** GRACEFUL DEGRADATION. The page narrows smoothly without breaking. No collapse, no overflow, no broken layouts. Content adapts well at all three widths.

**Content survival:** All desktop content visible at tablet (768px). No content is hidden or truncated by viewport narrowing.

**Identity survival:** The page was DESIGNED FOR 1024px. At 1440px it feels under-filled; at 768px it feels slightly constrained but functional. The 1024px viewport is where the design achieves its intended identity. This is not "squeezed" -- it is a page with a clear optimal viewport that degrades gracefully in both directions.

**Two-rail alignment system:** Consistent across all viewports. Rails move closer at narrow widths but maintain the same structural logic.

**CRESCENDO pattern:** Perceptible at all viewports. The density meter progression (1/5 through 5/5) reads clearly regardless of width.

---

## Positive Findings (What to Protect -- DO NOT CHANGE)

These elements received consistent praise across both auditors and all three viewports:

1. **Density meter progression (1/5 through 5/5):** Called "genuinely innovative" and "genuinely clever." Sets reader expectations about upcoming content weight. PROTECT.

2. **Section labeling system ("Opening -- Context", "Rising -- First Contact"):** Called "museum wayfinding." Creates clear navigation landmarks. PROTECT.

3. **Pullquote section dividers:** Italic serif with blue accent bars, acting as chapter breaks between sections. Called "elegant and distinctive." PROTECT.

4. **CRESCENDO density pattern:** The page genuinely builds in complexity. Perceptible through the section structure. PROTECT.

5. **Warm cream palette with dark accents:** "Consistently warm" neutral family. No cold grays intrude. Cohesive. PROTECT.

6. **One-designer coherence:** Both auditors independently confirmed this feels like one designer's work. Consistent component vocabulary. PROTECT.

7. **Viewport-independent personality:** "Methodical, warm, scholarly" at 1440 and 1024; "Focused, warm, rigorous" at 768. Identity survives viewport changes. PROTECT.

8. **Hero entry point:** Eye goes to "Reasoning Inside Code" heading at all viewports. Correct hierarchy. PROTECT.

---

## Final Verdict Rationale

**Verdict: SHIP WITH CONCERNS**

**Why not SHIP:** P-002 (narrow content channel at 1440px) is a real perceptual issue flagged independently by both auditors. However, it may be an inherent consequence of the locked 1100px container decision, requiring escalation rather than a local fix.

**Why not DO NOT SHIP:** P-001 (scroll-reveal blanking) is the only WOULD-NOT-SHIP candidate, but it requires verification. The findings auditor noted that "DOM reports all content is present and visible" -- which means CSS may already comply with ESC-002 and the blank rendering may be a Playwright/screenshot artifact. If verified as a real failure mode, this would escalate to DO NOT SHIP. If it is an artifact, it downgrades to NOTE.

**Action items:**
1. **VERIFY P-001:** Test scroll-reveal rendering with JavaScript disabled. If content is CSS-visible (opacity: 1, display: block) without JS, this is an artifact. If content is CSS-hidden and JS reveals it, this is an ESC-002 violation and must be fixed.
2. **ESCALATE P-002:** The 1100px container width is locked. The perceptual consequence at 1440px is real. This needs a design-level decision: is 1440px an "acceptable sacrifice" viewport, or should the container widen?
3. **FIX P-003:** Reduce oversized section transition gaps to maintain reading momentum. Breathing zone budget (15-25%) is the guardrail.
4. **CONSIDER P-004:** Soften transition seams at narrow viewports. Low priority but would elevate polish.
5. **ACCEPT P-005:** Reasoning box density is intentional (this IS the peak of the CRESCENDO). Document as accepted.

**Bottom line:** CD-001 is a well-crafted page with a clear identity, consistent design language, and innovative devices (density meter, CRESCENDO pattern). Its primary weakness is spatial efficiency at wide viewports -- a consequence that may be architectural rather than fixable locally. Pending P-001 verification, this page ships.
