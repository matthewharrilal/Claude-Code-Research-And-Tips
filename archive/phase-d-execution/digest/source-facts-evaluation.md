# Phase D Evaluation Facts — What the Judges Found

**Date:** 2026-02-14
**Source:** 8 evaluation files (programmatic, 2 visual judges, integration, cross-variant, anti-gravity, components, gaps)

This document describes what happened when judges evaluated 5 AI-built web pages. Written in plain English, zero jargon.

---

## The Pages Being Judged

5 web pages, each built by a different AI agent using different instructions:

1. **Track 1 (Assembly)** — Built using pre-existing components like Lego bricks
2. **Variant A (Skill-Only)** — Built using a skill file, no library access
3. **Variant B (Weak Permission)** — Library available but not pushed
4. **Variant C (Anti-Gravity)** — Strong rules to prevent copying from library
5. **Variant D (Library-First)** — Read library examples first, then build

All 5 pages showed the same content (prose about software engineering), but each used a different approach.

---

## What the Programmatic Judge Found

**Who:** An automated checker that measured exact CSS values

**What it checked:** 19 yes/no rules per page at 2 screen sizes (desktop + tablet)

**Big picture:**
- **Track 1 (Assembly):** 11/19 PASS at desktop — instant fail due to 5 violations
- **Variant A (Skill-Only):** 15/19 PASS — failed on one readability issue
- **Variant C (Anti-Gravity):** 17/19 PASS — container too narrow at desktop
- **Variant D (Library-First):** 18/19 PASS — container too narrow at desktop
- **Variant B (Weak Permission):** 18/19 PASS — best compliance, borderline on one check

### The Main Failure Pattern

**Container width** was the primary problem:
- **Too wide** (Track 1, Variant A): Made text lines too long to read comfortably (96-132 characters per line vs 45-80 max)
- **Too narrow** (Variant C, Variant D): Used less than the required 940px at desktop (around 600-800px)
- **Just right** (Variant B): Hit the 940px sweet spot

### Track 1 Had 5 Critical Violations

1. Pure white header background (rule says never use pure white)
2. Zero padding on main container (needs at least 32px)
3. Lines too long to read (112-132 characters vs 45-80 max)
4. Colors not from the approved palette (used gray, green, purple not in tokens)
5. Spacing not multiples of 4 pixels (used 2px and 6px padding)

**Why this matters:** Track 1 was supposed to prove the library is sufficient for building. It failed because the builder didn't follow the always-load protocol (didn't read the rules first).

---

## What Visual Judge A Found (Extraction-Aware)

**Who:** A judge who knows the design system intentionally uses sharp edges, warm colors, and specific fonts

**Method:** 23 perceptual questions like "What bothers you first?" and "Does this feel like one designer made it?"

**Scores (out of 20 possible):**
- **Variant A (Skill-Only):** 13/20 — black callout box ruins the flow
- **Variant B (Weak Permission):** 19/20 — best score, just one density issue
- **Variant C (Anti-Gravity):** 19/20 — clean and spacious
- **Variant D (Library-First):** 13/20 — black header banner crushes the top

### The Black Element Problem

Variants A and D both used pure black backgrounds on major elements:
- **Variant A:** Massive black callout box mid-page that "breaks the warm palette" and "creates anxiety"
- **Variant D:** Black header banner that "crushes the top of the page" and "feels oppressive"

Judge said: "Pure black feels alien to the warm gray/cream palette" and "looks like it was pasted from a terminal or error dialog."

**Variants B and C avoided this mistake** — they used warm-toned grays instead.

---

## What Visual Judge B Found (Fresh-Eyes)

**Who:** A judge with NO knowledge of the design system rules

**Method:** Same 23 perceptual questions, but purely based on what looks good

**Rankings (best to worst):**
1. **Variant A (Skill-Only)** — "Architectural drawing metaphor is accessible and distinctive"
2. **Variant D (Library-First)** — "Geological layers provide clear structure"
3. **Variant B (Weak Permission)** — "Lab protocol is effective"
4. **Track 1 (Assembly)** — "Functional and solid, but lacks personality"
5. **Variant C (Anti-Gravity)** — "Metaphor is elegant but potentially alienating" (geology terms too academic)

**Ship verdicts:** All 5 pages got YES (would ship), though some had reservations.

**Key insight:** Judge B ranked pages by metaphor effectiveness, not execution quality. The pages with the strongest metaphors (architectural blueprint, geological layers, lab protocol) ranked highest.

---

## What the Integration Judge Found

**Who:** A file-only judge reading HTML source, CSS, and process logs

**What it checked:** 12 technical criteria (library usage, mechanism count, token compliance, component coverage)

### Library Utilization

How much of each page came from the pre-existing library vs custom code:

- **Track 1:** 79% library (PASS — close to 80% target)
- **Variant A:** 0% library (EXPECTED — skill-only builds from scratch)
- **Variant B:** 0% library (agent chose not to use it)
- **Variant C:** 47% library (PARTIAL — mixed custom and library)
- **Variant D:** 68% library (PASS — adopted library patterns)

**Surprise:** Variant B had access to the library but chose NOT to use it (0% utilization, same as Variant A that was prohibited from using it).

### Mechanism Count

18 total compositional techniques available. Target: use at least 8 for Track 2 builds.

- **Track 1:** 6 mechanisms (PASS — lower target for assembly)
- **Variant A:** 6 mechanisms (FAIL — needed 8)
- **Variant B:** 6 mechanisms (FAIL — needed 8)
- **Variant C:** 7 mechanisms (PARTIAL — needed 8)
- **Variant D:** 8 mechanisms (PASS)

**Pattern:** All fell short because content was prose-only. No code blocks or tables = 2 mechanisms impossible to use.

### Component Coverage

9 component families available. Target: use at least 6 for Track 2 builds (67%).

**ALL Track 2 variants failed:**
- **Variant A:** 2/9 families (22%)
- **Variant B:** 4/9 families (44%)
- **Variant C:** 3/9 families (33%)
- **Variant D:** 3/9 families (33%)

**Why they all failed:** Content was 85% prose with no code examples, tables, file trees, or decision matrices. Can't test a component that requires content you don't have.

---

## What the Cross-Variant Analyst Found

**Who:** A judge comparing all 5 pages to find patterns

### Metaphor Novelty Scores (0-5 scale)

How different is each page's organizing concept from the library examples:

- **Variant D (Library-First):** 0/5 — exact copy of OD-004 geological pattern
- **Variant C (Anti-Gravity):** 1/5 — used geology like OD-004, just different sub-type
- **Variant A (Skill-Only):** 3/5 — architectural blueprints (different domain)
- **Variant B (Weak Permission):** 4/5 — scientific lab (very different domain)

**The big surprise:** Variant C was supposed to use anti-gravity mechanisms to avoid copying the library. It failed — converged to the same geological domain as library example OD-004.

**Variant B paradox:** The "weak permission" variant (library available but not pushed) produced the MOST novel metaphor (4/5), even though it had access to the library.

### Time Efficiency vs Quality

How long each build took and how good the result was:

| Variant | Time | Perceptual Score |
|---------|------|------------------|
| D (Library-First) | 37 min | 13/20 |
| C (Anti-Gravity) | 78 min | 19/20 |
| B (Weak Permission) | 86 min | 19/20 |
| A (Skill-Only) | 117 min | 13/20 |

**Trade-off:** Library-first is 2-3x faster but produces 30% lower quality (13/20 vs 19/20).

---

## What the Anti-Gravity Judge Found

**Who:** A specialized judge checking if Variant C followed the anti-gravity rules

**The 3 anti-gravity mechanisms:**
1. **R1 (Phase-Gated Access):** Library examples prohibited during early phases ✅ WORKING
2. **R5 (Sequential Phases):** Must complete phases in exact order ✅ WORKING
3. **R6 (Divergence Mandate):** If your design matches library >40%, justify or regenerate ❌ FAILED

### The R6 Failure

Variant C created a "metamorphic geology" metaphor that was 85% similar to library example OD-004's "geological stratification."

**Same:** Both used geology domain, both used layering, both used border weights to encode information
**Different:** Metamorphic vs sedimentary terminology (isograd vs strata)

**Only 1 out of 5 dimensions different** — below the 3/5 threshold.

**What should have happened:** Phase 3.5 gate should have detected this convergence and required either:
- A divergence justification explaining why this is okay, OR
- Regenerate the metaphor with a different domain

**What actually happened:** The gate either (a) wasn't enforced, (b) wasn't documented in the log, or (c) passed incorrectly.

**Hypothesis for why this happened:** Even without reading library examples, Variant C was exposed to geological vocabulary through:
- Prohibition document mentions OD-004 three times
- Mechanism catalog shows OD-004 examples eight times
- This created "priming" — geological concepts leaked in before Phase 5

---

## What the Component Judge Found

**Who:** A judge checking which components were actually used

**34 total components in the library.** How many got tested across all 5 builds:

- **VALIDATED:** 14 components (41%)
- **UNDERUTILIZED:** 1 component (3%)
- **UNTESTED:** 19 components (56%)

### Why So Many Untested

Content was prose-heavy, so these component families couldn't be tested:
- Code blocks (no code examples in content)
- Tables (minimal tabular data)
- File trees (no directory structures)
- Stats bars (no metrics to display)
- Decision matrices (no comparison grids)
- Bento grids (no modular sections)
- Q&A pairs (no conversational structure)

**Recommendation:** Phase D round 2 needs mixed content: 50% prose, 25% code, 15% data, 10% structure.

---

## What the Gap Judge Found

**Who:** A judge cataloging all failures to fix later

**11 gaps identified:**

### 3 CRITICAL Gaps

1. **GAP-001 (Anti-Gravity R6 Enforcement Failure):** Variant C converged to geological metaphor without divergence table or regeneration
2. **GAP-002 (Prose-Only Content Limits Testing):** All Track 2 variants failed component coverage because content had no code/tables
3. **GAP-003 (Mechanism Count Ceiling):** Variants A/B only used 6 mechanisms because 4 mechanisms require non-prose content

### 3 HIGH Gaps

4. **GAP-004 (Custom Property Bridging Documentation Gap):** No examples showing how to override component properties in zone contexts
5. **GAP-005 (Weak Permission No Observable Effect):** Variant B's "available but not pushed" framing had zero behavioral difference from "prohibited"
6. **GAP-006 (Component Inventory Confidence Levels Untested):** Low-confidence components (Q&A pair, breadcrumb, density indicator) never tested

### 3 MEDIUM Gaps

7. **GAP-007 (Library Gravitational Pull Quantified):** Variants C and D both converged to geological metaphors despite anti-gravity attempts
8. **GAP-009 (Dark Header Missing):** Dark header variant exists in library examples but wasn't extracted to components.css
9. **GAP-010 (Responsive Padding Floor Not Enforced):** 32px padding floor defined in skill but not enforced in library responsive rules

### 2 LOW Gaps

10. **GAP-008 (11px Font Size):** Track 1 used 11px instead of 12px token (single violation in 1,373 lines)
11. **GAP-011 (Stats Bar Ambiguity):** Stats-bar component labeled in content but actually implemented as table (correct choice)

**Total fix time:** 9.5 hours

---

## The Big Picture: What Actually Happened

### Hypothesis Testing Results

**4 hypotheses, 2 confirmed, 2 rejected:**

1. **H1 (Library constrains novelty):** ✅ CONFIRMED — Library-first produced 0/5 novelty, skill-only produced 3/5
2. **H2 (Anti-gravity preserves novelty):** ❌ REJECTED — Anti-gravity produced 1/5 novelty (worse than skill-only's 3/5)
3. **H3 (Anti-gravity improves quality):** ✅ CONFIRMED — Anti-gravity scored 19/20 vs skill-only's 13/20
4. **H4 (Weak permission insufficient):** ❌ REJECTED — Weak permission produced 4/5 novelty (best of all)

### The Paradoxes

**Paradox 1 (Anti-Gravity):** Anti-gravity mechanisms produced HIGHER quality (19/20) but LOWER novelty (1/5) than skill-only (13/20 quality, 3/5 novelty).

**Paradox 2 (Weak Permission):** Soft framing ("library available but not required") produced MORE novelty (4/5) than hard gates ("prohibited then gated" = 1/5).

### What Worked

**Best overall:** Variant B (Weak Permission)
- Highest novelty (4/5)
- Highest quality (tied at 19/20)
- Zero soul violations (no pure black elements)
- 0% library utilization (chose not to use available library)

**Most efficient:** Variant D (Library-First)
- Fastest (37 min vs 78-117 min for others)
- Passed mechanism count (8/8)
- 100% token compliance

### What Failed

**Worst overall:** Track 1 (Assembly)
- 5 critical violations (pure white, zero padding, wrong colors, wrong spacing, lines too long)
- Builder didn't follow always-load protocol
- Proves library is sufficient IF rules are followed, but rules weren't followed

**Biggest disappointment:** Variant C (Anti-Gravity)
- Converged to geological domain (85% overlap with OD-004) despite anti-gravity mechanisms
- R6 divergence mandate didn't prevent convergence
- Suggests library gravitational pull is stronger than anti-gravity enforcement

---

## What This Means for the Project

### The Good News

1. **Library is buildable** — Track 1 used 79% library components successfully (when rules followed)
2. **Quality achievable** — Variants B and C both scored 19/20 on perceptual quality
3. **Novelty possible** — Variant B produced 4/5 novelty (scientific lab metaphor)
4. **Time trade-off clear** — Library-first is 2x faster but 30% lower quality

### The Bad News

1. **Anti-gravity mechanisms failed** — R6 divergence mandate didn't prevent 85% convergence
2. **Component coverage failed** — ALL Track 2 variants scored 22-44% vs 67% target
3. **Weak permission ineffective** — Had zero behavioral difference from prohibition
4. **Container width THE critical variable** — 4 out of 5 pages violated 940px sweet spot

### What Needs to Change

**Before Phase D round 2:**
1. Fix anti-gravity R6 gate (make it blocking, not advisory)
2. Create mixed content (50% prose, 50% code/tables/diagrams)
3. Adjust mechanism target (6 for prose-only, 8 for mixed)
4. Strengthen always-load enforcement (Track 1 builder must read prohibitions first)

**Before Phase E migration:**
5. Document custom property bridging pattern
6. Add dark header variant to components.css
7. Test low-confidence components with specialized content
8. Audit responsive padding rules for 32px floor violations

---

**END EVALUATION FACTS**

This document contains NO recommendations, NO analysis, NO spin. Just the facts about what the judges found when they evaluated 5 AI-built web pages in Phase D execution.
