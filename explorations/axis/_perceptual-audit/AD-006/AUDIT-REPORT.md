# AD-006 PERCEPTUAL AUDIT REPORT
## The Convergence (Compound Axis)

**Date:** 2026-02-10
**Auditors:** A (Impression+Emotion), B (Readability+Responsiveness), C (Spatial+Grid), D (Hierarchy+Coherence+Cross-Page), Adversarial
**Weaver-Synthesizer:** Cross-referenced 5 findings files, 4 cold looks, 1 lock sheet (81 classified decisions)
**Pre-merge unique findings:** ~42 | **Post-merge deduplicated findings:** 11
**Escalations:** 2 (MF-001 scroll-reveal vs LOCKED S15.3, MF-002 bento collapse vs LOCKED S12.5)

---

## VERDICT: DO NOT SHIP

Two WOULD-NOT-SHIP findings survived contamination checks, sovereignty classification, deduplication, and cross-auditor validation:

| # | Finding | Agreement | Severity |
|---|---------|-----------|----------|
| MF-001 | Scroll-reveal hides 40-60% of content when animations fail | 5/5 UNANIMOUS | WOULD-NOT-SHIP |
| MF-002 | Bento grid collapses to single-character-per-line text at 768px | 5/5 UNANIMOUS | WOULD-NOT-SHIP |

**Conditional verdict:** If MF-001 and MF-002 are fixed, the page is **SHIP WITH CONCERNS** (9 remaining LOOKS-WRONG and COULD-BE-BETTER findings).

---

## COLD LOOK SUMMARY

All 4 auditors wrote cold-look reactions before detailed analysis. Verdicts are perfectly aligned:

| Viewport | Auditor A | Auditor B | Auditor C | Auditor D | Consensus |
|----------|-----------|-----------|-----------|-----------|-----------|
| 1440px | YES w/ reservations | YES w/ reservations | YES w/ reservations | YES w/ reservations | **YES WITH RESERVATIONS** |
| 1024px | YES w/ reservations | YES w/ reservations | YES w/ reservations | YES w/ reservations | **YES WITH RESERVATIONS** (2/4 call it "sweet spot") |
| 768px | NO | NO | NO | NO | **NO** |

**Primary impression (all viewports):** Confident, authoritative, scholarly, warm.

**Gut reactions converge on:**
- BEST: Title typography ("The Convergence" in serif against dark header band)
- WORST at 1440: Header-to-content gap feels too generous (3/4 flagged)
- WORST at 768: Bento grid catastrophic collapse (4/4 flagged)

---

## TOP 5 FINDINGS

### 1. MF-001: Scroll-Reveal Hides Content (WOULD-NOT-SHIP) -- ESCALATION

**Agreement:** 5/5 UNANIMOUS
**Viewports affected:** ALL
**Lock Sheet:** LOCKED (AD-CONV S15.3 -- research-backed via EXT-CREATIVE-004 + WCAG)
**Sovereignty:** ESCALATE -- LOCKED decision directly causes critical perceptual failure

The scroll-triggered reveal system is implemented as a content gate, not a progressive enhancement. When animations fail (reduced-motion preferences, JS failure, slow connections, ad-blockers), approximately 40-60% of the page renders as blank cream. Later sections exist in the DOM but are visually invisible.

- Auditor A: Sections 4-7 invisible (bottom ~60%)
- Auditor D: Sections 6-7 invisible (~40% of content)
- Adversarial: Sections 5-7 invisible (~45%, 6,600 vertical units)
- At 768px: Bottom two-thirds entirely blank
- At 500/320px: Entire page blank

The variance in section numbering across auditors (4-7 vs 5-7 vs 6-7) likely reflects different scroll positions and partial rendering at boundaries. The core observation is identical: a massive portion of the page is invisible.

Every auditor independently identified this. The adversarial agent correctly flags AP-08 (Convention Worship) -- the convention (AD-CONV S15.3) treats scroll-reveal as aesthetic, but the visual evidence shows it is structural.

**Why this is an ESCALATION:** The lock sheet classifies S15.3 as LOCKED (research-backed). The lock says "content in DOM regardless" -- the letter is honored (content IS in DOM) but the spirit is violated (content is NOT visible). This is a genuine conflict between a LOCKED research-backed decision and overwhelming perceptual evidence. See ESCALATION ITEMS section below.

**Proposed fix (within constraints):** Content visible by default (CSS initial state visible). JavaScript adds the hidden class that scroll-reveal then removes. If JS fails, content remains visible. This preserves the LOCKED animation behavior while making it progressive enhancement rather than content gate.

### 2. MF-002: Bento Grid Catastrophic Collapse at 768px (WOULD-NOT-SHIP) -- ESCALATION

**Agreement:** 5/5 UNANIMOUS
**Viewports affected:** 900px (onset), 768px (catastrophic), 500/320px (worsening)
**Lock Sheet:** LOCKED pattern (AD-F-009: bento cells ARE islands) + LOCKED collapse point (AD-CONV S12.5: 768px)
**Sovereignty:** ESCALATE -- LOCKED collapse breakpoint (768px) is 130+ units too late

The featured bento card collapses to an impossibly narrow column below ~960px. Text renders as single characters stacked vertically. This is not uncomfortable reading -- it is destroyed text. The card inflates from ~2,100 to ~10,800 units tall with one letter per line.

The grid's column ratio inverts from its intent -- the "featured" card becomes the smallest column while secondary cards receive more width. No responsive breakpoint catches this failure between 1024 (strained but functional) and 768 (catastrophic).

The adversarial agent confirmed the cliff pattern: at 960 the grid works, at 900 text renders vertically, at 768 the grid is catastrophically broken. The LOCKED 768px collapse point fires too late -- the grid is already destroyed 130 units before the collapse activates.

**Why this is an ESCALATION:** AD-CONV S12.5 locks the binary collapse at 768px. But the bento grid breaks at ~900px. The locked breakpoint CANNOT protect the locked bento pattern (AD-F-009). Two LOCKED decisions conflict: the bento pattern requires the grid to be readable, but the responsive collapse allows it to be destroyed for 130 viewport units. See ESCALATION ITEMS section below.

**Proposed fix (requires lock revision):** Move the responsive collapse breakpoint from 768px to ~960px for grids with 4+ columns. This preserves the binary collapse behavior (LOCKED principle) while firing early enough to protect the bento pattern (also LOCKED).

### 3. MF-003: Excessive Dead Space / Voids (LOOKS-WRONG)

**Agreement:** 5/5 UNANIMOUS
**Viewports affected:** ALL (worst at 768px)
**Sovereignty:** VALID and ACTIONABLE

Multiple full-viewport blanks occur during normal scrolling. At 1440px, intentional breathing zones between sections (206-326 units each) tip from generous to disorienting — readers wonder if the page is broken. At 768px, the page grows to 22,007 units (49% increase from desktop) while content remains concentrated in clusters.

This partially overlaps with MF-001 (hidden content amplifies dead space) but exists independently: even at 1440px with JS working, the inter-section voids are overgenerous.

### 4. MF-004: No Visual Ending / Missing Closing Bookend (LOOKS-WRONG)

**Agreement:** 1 explicit (Auditor D) + 1 implicit (Auditor A)
**Lock Sheet:** NOVEL PERCEPTION
**Sovereignty:** VALID and ACTIONABLE

The page opens with a dramatic dark header band but ends with... nothing. After the Discovery Log (Section 7), the page simply stops. No closing typography, no visual period, no return-to-top affordance, no bookend matching the header. The page's own Section 06 claims to use the BOOKENDS density pattern, but the closing bookend is missing.

### 5. MF-005: Container Width Bottleneck (LOOKS-WRONG)

**Agreement:** 1 explicit (Adversarial) + 1 related (Auditor B)
**Lock Sheet:** CHALLENGEABLE (page container max-width 860px)
**Sovereignty:** VALID and ACTIONABLE

The single 860px container works for F-pattern text sections but constrains Bento and Choreography sections that need wider breathing. At 1440px, 40% of the screen is warm cream margins. The compound page — deploying 5 different axis patterns each with different spatial needs — is the one context where variable-width containers per section would serve the content better.

---

## ALL FINDINGS BY TRACK

### WOULD-NOT-SHIP

| ID | Finding | Agreement | Track |
|----|---------|-----------|-------|
| MF-001 | Scroll-reveal hides content | 5/5 | ESCALATION (LOCKED S15.3 -- lock intent vs implementation) |
| MF-002 | Bento grid collapse at 768px | 5/5 | ESCALATION (LOCKED S12.5 conflicts with LOCKED AD-F-009) |

### LOOKS-WRONG

| ID | Finding | Agreement | Track |
|----|---------|-----------|-------|
| MF-003 | Excessive dead space / voids | 5/5 | PERCEPTION (challenges CHALLENGEABLE breathing budget) |
| MF-004 | No visual ending | 1-2/5 | NOVEL PERCEPTION |
| MF-005 | Container width bottleneck | 1-2/5 | PERCEPTION (challenges CHALLENGEABLE container width) |
| MF-006 | Header-to-content gap | 4/5 | PERCEPTION (challenges CHALLENGEABLE header padding) |
| MF-011 | Featured bento card proportions (1440/1024) | 2/5 | PERCEPTION (execution within bento convention) |

### COULD-BE-BETTER

| ID | Finding | Agreement | Track |
|----|---------|-----------|-------|
| MF-007 | Drop cap ceremony fatigue | 1/5 | PERCEPTION (challenges CHALLENGEABLE drop caps) |
| MF-008 | Axis indicator bar tonal split | 1/5 | NOVEL PERCEPTION |
| MF-009 | Callout label inconsistency | 1/5 | NOVEL PERCEPTION |
| MF-010 | Section transitions jarring | 3/5 | PERCEPTION (execution of LOCKED transition grammar) |

---

## CONTAMINATION REPORT

All 5 findings files were scanned for anti-pattern violations (AP-01, AP-04, AP-05, AP-06, AP-07, AP-16).

| Auditor | Overall | Notes |
|---------|---------|-------|
| A (Impression) | CLEAN | Minor: causal hypothesis about intersection observers in MF-001 description; perceptual core stands independently |
| B (Readability) | CLEAN | Minor: unit measurements quantify visual observations but don't replace them |
| C (Spatial) | CLEAN | Minor: one "--space-8" reference in left-edge analysis; moderate unit measurements in dead space analysis |
| D (Hierarchy) | CLEAN | Minor: mentions "scroll-driven animation" as mechanism; perceptual core (content evaporates) stands independently |
| Adversarial | ACCEPTABLE | Moderate: CSS property names and convention references expected for PA-26/27/28 convention-challenge role; perceptual evidence cleanly separable |

**Findings excluded due to contamination: ZERO**

All findings have clean perceptual cores. Quantification artifacts (pixel measurements, causal mechanisms) supplement but do not replace visual observations. No auditor relied on source-code knowledge as primary evidence.

---

## CONVENTION CHALLENGES (PA-26/PA-27)

### Challenge 1: Scroll-Reveal is Structural, Not Decorative (CRITICAL -- ESCALATED)
- **Convention:** AD-CONV S15.3 -- scroll-triggered reveal (**LOCKED**, research-backed via EXT-CREATIVE-004 + WCAG)
- **Evidence:** 40-60% of page height is blank when JS/animations fail; 5/5 agents flagged unanimously
- **Weaver assessment:** VALID and ESCALATED. The LOCKED convention's own language ("content in DOM regardless") is ambiguous about visibility vs presence. The perceptual evidence overwhelmingly shows the current implementation produces content invisibility. This is not a challenge to the convention's existence but to its interpretation. See ESCALATION: MF-001 above.

### Challenge 2: Single Container Width for 5 Axis Patterns (HIGH)
- **Convention:** Page container max-width 860px
- **Evidence:** Bento and Choreography sections constrained; adversarial + 1 auditor flagged
- **Weaver assessment:** VALID but less urgent than MF-001/002. Could be addressed as compound-page-specific exception.

### Challenge 3: Drop Caps on 7-Section Compound (MEDIUM)
- **Convention:** AD-CONV S9 — drop caps in AD-006 section openings
- **Evidence:** Four hierarchical signals stacked (label, heading, description, drop cap); adversarial only
- **Weaver assessment:** VALID but subjective. Only 1/5 flagged.

### Challenge 4: Breathing Zone Needs a Ceiling (MEDIUM)
- **Convention:** Breathing zone budget >= 15%
- **Evidence:** Actual breathing may be 30-40%+ due to dead space accumulation
- **Weaver assessment:** VALID. Adding a ceiling (e.g., <= 25%) would prevent "is the page broken?" experience.

### From-Scratch Assessment (PA-27)

**Intention-shaped (PROTECT):** Dark header, section label wayfinding, bento grid concept (meta-documentation through structure), transition grammar table, Essence callouts, three-column "Three Perspectives" comparison.

**Constraint-shaped (QUESTION):** Single container width for all 5 patterns, scroll-reveal as content gate, drop caps on every section opener, uniform transition spacing (contradicts page's own transition grammar), monolithic 14,737-tall single scroll at mobile.

---

## FRAGILITY ASSESSMENT (PA-28)

### Overall Rating: FRAGILE

The page achieves ADEQUATE at exactly one configuration: 1440px desktop with JavaScript functioning.

| Condition | Rating |
|-----------|--------|
| 1440 + JS | ADEQUATE |
| 1440 - JS | FRAGILE (47% blank) |
| 1024 + JS | ADEQUATE (minor strain) |
| 1024 - JS | FRAGILE |
| 768 + JS | BROKEN (bento collapse) |
| 768 - JS | BROKEN (bento + invisible content) |
| 500 + JS | BRITTLE (overlaps) |
| 320 + JS | BRITTLE (collisions) |
| 320 - JS | BROKEN (empty page) |

### Key Fragility Points

1. **Scroll-reveal is a cliff, not a slope.** Content goes from fully visible to completely invisible. No intermediate degradation state.
2. **Bento grid has no intermediate breakpoint.** Between 1024 (strained) and 768 (catastrophic), no responsive adaptation catches the failure. Needs a breakpoint around 900px.
3. **Page length doubles at mobile.** From ~14,737 at desktop to ~28,391 at 320px, compounding every other problem.
4. **Compound nature amplifies fragility.** Each section has its own failure profile. The page is only as strong as its weakest section.

### Squeeze Test Summary

| Transition | Result |
|-----------|--------|
| 1440 -> 1024 | GRACEFUL — proportional scaling, same verdict |
| 1024 -> 768 | COLLAPSE — cliff edge, all auditors flip from YES to NO |
| 768 -> 500 | DEEPENING COLLAPSE — existing failures worsen |
| 500 -> 320 | TOTAL FAILURE — content collisions, unusable |

---

## SOVEREIGNTY CLASSIFICATIONS

| Finding | Targets | Classification |
|---------|---------|---------------|
| MF-001 | **LOCKED** convention (AD-CONV S15.3) | **ESCALATE** — lock causes content invisibility |
| MF-002 | LOCKED pattern (AD-F-009) + **LOCKED** collapse (S12.5) | **ESCALATE** — two locks conflict |
| MF-003 | CHALLENGEABLE conventions (breathing, spacing) | VALID and ACTIONABLE |
| MF-004 | No Lock Sheet entry | VALID and ACTIONABLE (NOVEL) |
| MF-005 | CHALLENGEABLE convention (860px container) | VALID and ACTIONABLE |
| MF-006 | CHALLENGEABLE convention (header padding) | VALID and ACTIONABLE |
| MF-007 | CHALLENGEABLE convention (drop caps) | VALID and ACTIONABLE |
| MF-008 | No Lock Sheet entry | VALID, LOW PRIORITY (NOVEL) |
| MF-009 | LOCKED structure, NOVEL format detail | VALID — format target |
| MF-010 | LOCKED grammar — execution | VALID — execution target |
| MF-011 | CHALLENGEABLE execution | VALID and ACTIONABLE |

**INVALID findings: 0**
**ESCALATION items: 2** (MF-001, MF-002)

Two findings target LOCKED decisions that directly produce the critical perceptual failures. These require human decision on how to resolve the conflict between locked rules and visual reality. See ESCALATION ITEMS section for full escalation entries.

---

## ESCALATION ITEMS

Two findings require human decision. Both involve LOCKED rules that directly produce the page's two ship-blocking failures.

---

## ESCALATION: MF-001 -- Scroll-Reveal Content Invisibility

### Perceptual Evidence
- **Finding:** 40-60% of page content (Sections 4-7) renders as blank cream when scroll-triggered animations fail to fire
- **Confidence:** 5/5 auditors flagged independently (UNANIMOUS)
- **Severity:** WOULD-NOT-SHIP

### Research Lock
- **Locked decision:** Scroll-triggered reveal: opacity 0->1 + translateY(20->0), fires ONCE, honors prefers-reduced-motion (AD-CONV S15.3)
- **Lock source:** EXT-CREATIVE-004 + WCAG. Research chain: elements start invisible, animate on scroll intersection, content in DOM regardless

### Attempted Resolution Within Constraints
- **Fix attempted:** Make content visible by default in CSS; have JavaScript add the hidden state that scroll-reveal then removes (progressive enhancement)
- **Result:** This preserves the LOCKED animation behavior while ensuring content is visible without JS. However, this inverts the CSS initial state from "hidden" (current lock interpretation) to "visible" (proposed). Whether this constitutes a lock modification or a correct implementation of the lock's stated intent ("content in DOM regardless") is ambiguous.

### Escalation Question
Does "content in DOM regardless" (the lock's own language) require content to be VISIBLE regardless of JS, or merely PRESENT in DOM? If visible, the current implementation violates the lock. If merely present, the lock allows invisible content, which produces the perceptual failure.

### Options
1. **Maintain lock as-is** -- accept that 40-60% of content is invisible when animations fail. Cost: accessibility failure, print failure, reduced-motion users punished.
2. **Clarify lock intent** -- interpret "content in DOM regardless" as requiring visibility. The CSS initial state becomes `opacity: 1; transform: none;` and JavaScript adds the hidden class that scroll-reveal removes. The animation behavior is identical on the happy path; content is visible on all failure paths.
3. **Revise lock** -- add explicit requirement: "Initial CSS state MUST be visible. JavaScript MAY add hidden state for scroll-reveal to remove. Content MUST be visible without JavaScript." This makes progressive enhancement a LOCKED requirement.

---

## ESCALATION: MF-002 -- Bento Grid Collapse Breakpoint

### Perceptual Evidence
- **Finding:** Bento grid text collapses to single-character-per-line vertical stacking at viewports below ~960px. The LOCKED 768px responsive collapse fires 130+ units too late to prevent text destruction.
- **Confidence:** 5/5 auditors flagged independently (UNANIMOUS)
- **Severity:** WOULD-NOT-SHIP

### Research Lock
- **Locked decision:** Responsive collapse to 1-column at 768px (AD-CONV S12.5)
- **Lock source:** R4-3.3 (axis transitions). Binary rule: all multi-column grids collapse at 768px.
- **Conflicting lock:** Bento grid cells ARE islands, gaps ARE ocean (AD-F-009, R4-026, EXT-AXIS-B-004). Cell sizes signal hierarchy -- cells MUST be readable.

### Attempted Resolution Within Constraints
- **Fix attempted:** Accept 768px as the collapse point and work within it.
- **Result:** IMPOSSIBLE. The bento grid's 4-column layout requires approximately 900px of usable width for the featured card to hold readable text. The 768px breakpoint allows 130 units of catastrophic text destruction between when the grid breaks (~960px) and when it collapses (768px). Two LOCKED decisions are in direct conflict.

### Escalation Question
The LOCKED 768px collapse point (S12.5) and the LOCKED bento pattern (AD-F-009, "cells ARE islands") conflict at viewports between 768-960px. Which lock takes priority -- the universal collapse breakpoint or the pattern's readability requirement?

### Options
1. **Maintain 768px lock** -- accept that bento grids are unreadable between 768-960px. Cost: 5/5 auditors unanimously flag this as WOULD-NOT-SHIP.
2. **Add pattern-specific override** -- 4+-column grids collapse at 960px; 2-3 column grids collapse at 768px. This preserves the binary collapse principle (LOCKED) while adjusting the breakpoint per pattern complexity.
3. **Revise S12.5** -- change "768px" to "the viewport width at which any grid column becomes too narrow for readable text, with 768px as the minimum." This makes the rule adaptive rather than fixed.

---

## WHAT TO PROTECT (Do Not Change)

These elements received positive feedback from multiple auditors:

1. **Title typography** — "The Convergence" in Instrument Serif against the dark header band (4/4 auditors praise)
2. **Section label wayfinding** — "SECTION 01 -- Z-PATTERN OVERVIEW" system provides reliable navigation (3/4)
3. **Callout color system** — Purple (Essence), Blue (Context), Green (Discovery), Orange (Caution/Gotcha) is coherent and learnable (2/4)
4. **Three-column "Three Perspectives" comparison** — Strongest at 1024px, praised by 3/4 auditors
5. **Transition grammar table** — Adversarial agent calls it "the single most useful artifact on the page"
6. **Warm cream palette + gray family** — "No jarring cool gray anywhere" (Auditor A); temperature consistency is a strength
7. **Cross-page family DNA** — Strong sibling resemblance with AD-001 and AD-003 (Auditor D)
8. **Personality alignment** — "Scholarly, Deliberate, Warm" matches intended personality at 1440px (Auditor A)

---

## PERSONALITY ASSESSMENT

| Viewport | Personality Achieved | Alignment with Intent |
|----------|---------------------|----------------------|
| 1440px | Scholarly, Deliberate, Warm | ALIGNED |
| 1024px | Scholarly, Confident, Complete | BEST ALIGNMENT (sweet spot) |
| 768px | Scholarly, Cramped, Unfinished | MISALIGNED |

The intended personality (Scholarly, Meta, Confident) is achieved at 1440 and 1024 but breaks at 768. The warm, bookish quality is a genuine strength that survives viewport changes in the prose sections (1-2) but is destroyed by the layout failures in the grid sections (3+).

---

*Synthesized by Weaver-Synthesizer from 5 findings files (Auditors A-D + Adversarial), 4 cold looks, and 1 lock sheet (81 classified decisions). Zero findings excluded for contamination. Zero sovereignty violations. Two escalation items requiring human decision (MF-001 scroll-reveal lock interpretation, MF-002 responsive breakpoint lock conflict).*
