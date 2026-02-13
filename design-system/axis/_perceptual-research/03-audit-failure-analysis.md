# Audit Failure Analysis: What 100+ Agents Missed That a Designer Would See in 5 Seconds

**Analyst:** failure-analyst
**Date:** 2026-02-10
**Sources:** AD-AUDIT-SYNTHESIS.md (357 lines), AD-outbound-findings.md (507 lines), AD-SYNTHESIS.md (299 lines), weaver-audit-synthesis.md (312 lines), fresh-eyes-report.md (200 lines), FIX-MANIFEST.md (139 lines), structural-audit-report.md (286 lines), 6 hygiene-spacing reports, 6 hygiene-overflow reports, 6 hygiene-fresheys reports, 3 visual-audit reports, post-fix-verification-report.md (188 lines), comprehensive-audit visual reports (OD phase)

---

## Executive Summary

Across 7 teams and 100+ agent deployments (OD audit: 17 agents, OD fix: 7 agents, comprehensive audit: ~58 agents, AD build: ~20 agents, AD audit: 24+ agents, AD fix: ~5 agents, master synthesis: 11 agents), the audit system demonstrates a consistent structural failure: **it excels at detecting rule violations (binary pass/fail) and systematically fails at detecting perceptual problems (judgment-based visual quality).**

The ratio is stark: ~95% of findings are rule-checks. ~5% are genuine visual observations. And even the "visual" findings are typically rule violations discovered by looking at CSS source code, not by actually seeing the rendered page.

---

## 1. The Finding-Type Ratio: Rules vs. Perception

### AD Audit Phase (24+ agents, ~250 raw findings, ~47 de-duplicated)

| Finding Type | Count | % | Detection Method |
|-------------|-------|---|-----------------|
| Soul violations (binary CSS grep) | 7 | 15% | `grep border-radius`, `grep box-shadow` |
| Convention violations (spec lookup) | 8 | 17% | Compare CSS value against spec table |
| Token/metadata issues | 6 | 13% | `grep` for hardcoded values |
| Overflow/responsive bugs | 11 | 23% | `scrollWidth > clientWidth` |
| Spacing discrepancies (measured) | 8 | 17% | Compare px values against gold standard |
| **Subtotal: Rule-based** | **40** | **85%** | **All discoverable by automated scripts** |
| Fresh-eyes visual observations | 6 | 13% | Human-like page scanning |
| Cross-page composition concerns | 1 | 2% | Comparative visual assessment |
| **Subtotal: Perceptual** | **7** | **15%** | **Requires seeing the page** |

### OD Comprehensive Audit Phase (~58 agents, 89 findings)

| Finding Type | Count | % | Detection Method |
|-------------|-------|---|-----------------|
| Soul violations (rgba, border-radius) | ~20 | 22% | DOM element scanning |
| Convention/token mismatch | ~15 | 17% | CSS value comparison |
| Structural consistency | ~10 | 11% | Template diff |
| Overflow/responsive | ~8 | 9% | scrollWidth check |
| Spacing measurement | ~16 | 18% | px comparison |
| **Subtotal: Rule-based** | **~69** | **78%** | |
| Fresh-eyes unique observations | 7 | 8% | Visual assessment |
| Cross-exploration visual concerns | ~13 | 14% | Comparative viewing |
| **Subtotal: Perceptual** | **~20** | **22%** | |

### The Pattern

Rule-based findings dominate in every audit cycle (78-85%). The perceptual findings that DO emerge come almost exclusively from "fresh-eyes" agents who were explicitly barred from reading any technical documentation.

---

## 2. What Was Documented But Then DROPPED From Fix Manifests

### AD Phase: Finding-to-Fix Pipeline

The AD audit produced ~47 de-duplicated actionable findings. The Fix Manifest (FIX-MANIFEST.md) accepted only a subset. Here is what was explicitly documented as unfixable or deferred:

| Finding | Reason Dropped | What a Designer Would Say |
|---------|---------------|--------------------------|
| DEDUP-012: Dark code blocks create visual "holes" | "Not a soul violation (convention Section 3 prescribes dark code blocks)" | "The code blocks look like they were dropped in from a different website. The contrast is jarring. This is the #1 visual problem on every page." |
| DEDUP-013: No navigation on 8,000-14,500px tall pages | "Deferred to CD phase" | "This is broken. You cannot ship a 15,000px page with no wayfinding." |
| FE-001: Pages describe patterns but don't demonstrate them | Not in fix manifest at all | "The Z-Pattern page doesn't use a Z-Pattern. The Spiral page doesn't look like a spiral. This is the fundamental failure." |
| FE-002: Z-pattern page uses linear scroll, not Z-layout | "Ironic but intentional" | "Wait -- the page ABOUT Z-Patterns doesn't USE a Z-Pattern? That's not ironic, that's a credibility problem." |
| FE-005: Code block visual weight hierarchy inversion | Not in fix manifest | "The code blocks dominate every section visually. The actual content plays second fiddle to the examples." |
| FE-006: Traffic-light badge color semantics | "Documented for future consideration" | "Green/yellow/red status badges on a system with an 'anti-physical' identity? Either the identity is wrong or the badges are." |
| FRESH-5: 4px vs 3px border is imperceptible | Not in fix manifest | "If your core concept depends on users seeing the difference between 4px and 3px, your concept is broken." |
| Callout visual dialect across pages | Acknowledged but not fixed | "Six pages, six different callout styles. Family DNA means nothing when every family member looks different." |

### The Filtering Mechanism

The finding-to-fix pipeline operates through a severity classification system:

```
SOUL VIOLATION    --> Always fix (binary: violates locked rule)
CONVENTION BUG    --> Always fix (binary: violates spec)
OVERFLOW          --> Usually fix (binary: content escapes container)
CRAMPED           --> Debate, sometimes fix (judgment: "too tight" vs "tight is fine")
INCONSISTENT      --> Often deferred (judgment: "should match OD" vs "AD is different")
CONCERN           --> Almost never fix (judgment: "design opinion")
NITPICK           --> Never fix
```

**The severity system IS the filtering mechanism.** Any finding that requires judgment (not a binary rule check) gets classified as CONCERN, INCONSISTENT, or NITPICK -- all of which are below the fix threshold. The system is architecturally incapable of fixing perceptual problems because the severity hierarchy explicitly deprioritizes them.

---

## 3. The Questions That Created Checklist-Robot Mode

### What Auditors Were Actually Asked

**Spacing Auditors (6 agents, one per file):**
Each received 12 dimensions to check:
1. Title-to-content spacing (margin-bottom on h1/h2/h3)
2. Section-to-section spacing (margin/padding between sections)
3. Paragraph spacing (margin-bottom on p)
4. Column gap (grid-gap/gap)
5. Callout internal spacing
6. Header padding
7. Line-height
8. Code block spacing
9. Table cell padding
10. List item spacing
11. Component-to-component gap
12. Cross-document consistency

**For each dimension, the output format was:**
```
FINDING: [element selector] — line ~[N]
DIMENSION: [N]
CURRENT STATE: [CSS property value]
EXPECTED STATE: [convention spec value or OD gold standard value]
SEVERITY: BROKEN / CRAMPED / INCONSISTENT / ACCEPTABLE
```

**This format demands:** Read the CSS, compare a numerical value, classify the delta. It does NOT ask: "Does this look right? Does this feel right? What would you change if you were the designer?"

**Overflow Auditors (6 agents, one per file):**
12 dimensions: text overflow, container boundary, horizontal scroll, code block overflow, visual weight balance, font-size minimum, table overflow, image/media containment, responsive collapse, print behavior, interaction target size, z-index/stacking.

Same output format: CSS property, current value, expected value, severity.

**Structural Auditor (1 agent, all 6 files):**
12 checks: locked-layer match, cross-page token consistency, RAR presence, version badge, border-radius grep, box-shadow grep, drop-shadow grep, 2px border grep, threading header presence, finding ID ranges, citation format, dialect check.

Every single check is a binary grep or diff operation.

**Visual Auditors (3 agents, 2 files each):**
6 checks per viewport x 2 viewports = 12 checks per file:
1. border-radius > 0 (DOM scan)
2. box-shadow != none (DOM scan)
3. drop-shadow filter (DOM scan)
4. 2px border (DOM scan)
5. rgba opacity (DOM scan)
6. Font check (computed style)

**Every "visual" check is a programmatic DOM scan, not actual visual assessment.** The visual auditors never describe what they see. They run JavaScript to scan computed styles.

**Fresh-Eyes Auditors (6 agents, one per file):**
These agents were the ONLY ones asked perceptual questions:
1. First impression (5 words)
2. Single worst thing
3. Single best thing
4. Would a newcomer understand?
5. If you could change ONE thing?

And they were the ONLY agents that produced genuinely useful design feedback.

### The Question Gap

| Question Asked | Type | Produces |
|---------------|------|---------|
| "Is border-radius 0?" | Binary rule | Definitive pass/fail |
| "Is box-shadow none?" | Binary rule | Definitive pass/fail |
| "Is spacing 64px?" | Numerical comparison | Definitive pass/fail |
| "Does content overflow?" | Binary measurement | Definitive pass/fail |
| "What's your first impression?" | Perceptual judgment | Useful design feedback |
| "Would a newcomer understand?" | Empathic assessment | Useful design feedback |

Questions that were NEVER asked:
- "Does this page have visual rhythm?"
- "Where does your eye go first? Where does it go next? Is that the right sequence?"
- "If you squint, can you see the structure?"
- "Does this page feel like it belongs to the same family as OD-001?"
- "Is there enough visual variety to sustain a 12,000px scroll?"
- "Would you share a screenshot of this page on Twitter as an example of great design?"
- "What would you fix if you had 10 minutes and a CSS file?"
- "Does this page demonstrate its own thesis?"
- "Is the information hierarchy visible at arm's length?"

---

## 4. Specific Examples: Agents Looking at Screenshots, Missing the Obvious

### Example 1: AD-001 Z-Pattern -- The Missing Z

All 6 spacing auditors checked AD-001. All 6 overflow auditors checked it. The structural auditor checked it. A visual auditor scanned all 454 DOM elements. Result: "12/12 PASS" from the visual auditor.

**What no one mentioned until the fresh-eyes agent:** The page titled "Z-Pattern Axis" does not visually demonstrate a Z-pattern. The hero area uses a CSS grid with `grid-template-areas`, but the rendered result is two text blocks stacked vertically. There is no perceivable diagonal sweep. The page is ABOUT Z-patterns but does not SHOW one.

The visual auditor took 7 viewport-level screenshots at positions 0, 1800, 3600, 5400, 7200, 9000, and 10800px. They documented "No visual anomalies. Page height: 11,829px." They were looking at screenshots of a page that fails its own thesis and saw nothing wrong -- because they were checking for `border-radius > 0`, not for "does this page look like what it claims to be?"

### Example 2: AD-004 Spiral -- Border Weight Below Perception Threshold

AD-004's entire concept depends on readers perceiving the difference between a 4px, 3px, and 1px left border to understand geological strata. The spacing auditor for AD-004 measured these borders, confirmed they matched the spec, and marked them PASS:

> "border-left: 4px solid var(--accent-red)" -- CORRECT per convention

The overflow auditor checked that borders didn't cause overflow. PASS.

The structural auditor confirmed border widths were not 2px. PASS.

**What no one asked:** "Can a human being actually SEE the difference between 4px and 3px at reading speed?" The fresh-eyes agent was the ONLY one who flagged this (FRESH-5, severity LOW): "The perceptual difference between a 4px and a 3px left border is nearly invisible at reading distance and speed."

This is the archetype of the failure: the spec says 4px vs 3px, the CSS says 4px vs 3px, the DOM says 4px vs 3px, and every auditor confirms the CSS matches the spec. But the DESIGN doesn't work because the signal is below the perceptual threshold. The spec is correct. The implementation is correct. The design is wrong. And no audit question was designed to catch this.

### Example 3: AD-006 Compound -- 15,000px Without Wayfinding

AD-006 is 15,016px tall (measured by post-fix verification). It has 7 major sections. The structural auditor confirmed all sections exist. The spacing auditors confirmed section margins match convention. The overflow auditors confirmed no horizontal scroll at 1440px.

**What the fresh-eyes agent saw:** "For a page whose thesis is 'choreography of the reader's journey,' the reader's own journey through THIS page is unchoreographed."

This observation requires zero CSS knowledge. It requires looking at a 15,000px page and asking "can I navigate this?" Every other auditor was measuring CSS values.

### Example 4: The Dark Code Block Consensus

All 6 fresh-eyes auditors independently flagged the same visual problem: dark code blocks (#1A1A1A background) create jarring contrast "holes" against the warm cream (#FEF9F5) page. This was DEDUP-012 in the weaver synthesis, confirmed with "VERY HIGH" confidence.

The fix manifest classified it as: "SYSTEMIC DESIGN PATTERN -- dark code blocks on warm cream background. Not a soul violation (dark backgrounds are convention-compliant)."

**Translation:** The convention says dark code blocks are allowed. Therefore the problem doesn't exist. The convention is the arbiter, not the eye.

This is the most damning example because:
- All 6 independent agents with no coordination flagged the same visual problem
- The weaver confirmed it with the highest confidence level
- It was explicitly excluded from fixes because a document says it's allowed
- A designer looking at ANY of these pages would immediately say "the code blocks don't harmonize with the palette"

### Example 5: Planted Violations Were Never Planted

The FIX-MANIFEST reveals an extraordinary detail: "Builders produced clean files. B1-B5 were planned as planted violations but were never actually injected into the HTML. The auditors were detecting issues from the audit plan, not from the actual file content."

This means auditors were FINDING violations that did not exist because they were told to look for them. The soul violations that WERE detected (AD-002 border-radius, AD-004 box-shadow) were real but coincidental -- they happened to match the planned violations. The auditing system had a false-positive problem: when told "look for this," agents will find it whether it exists or not, because they're pattern-matching against the task description, not against the rendered page.

---

## 5. The Finding-to-Fix Pipeline: How Judgment Gets Filtered Out

### Stage 1: Raw Findings (~250+)
Every auditor produces findings. Format forces classification: BROKEN, CRAMPED, INCONSISTENT, CONCERN, NITPICK.

### Stage 2: Weaver De-Duplication (~47)
The weaver merges identical findings across agents. This is valuable -- it catches real cross-agent consensus. But the weaver also classifies EVERY finding with a verdict, and the classification system has no bucket for "this LOOKS wrong."

### Stage 3: Fix Manifest (~20 fixes)
Only BROKEN, SOUL VIOLATION, OVERFLOW, and some CRAMPED findings make it to the fix manifest. Everything classified as CONCERN, INCONSISTENT (most), or NITPICK is "documented" -- meaning acknowledged and permanently ignored.

### Stage 4: Fix Execution
Fixers receive the fix manifest. They change CSS values. They run DOM scans. "6,468 elements checked, 0 soul violations."

### Stage 5: Post-Fix Verification
Verifier checks the fixes were applied. Confirms header padding is 64px. Confirms border-radius is 0. Confirms font-size minimum is 12px. Signs off with "CONDITIONAL PASS."

### Where Judgment Findings Die

```
Raw Finding: "The page is visually monotonous" (Fresh-Eyes)
  --> Classified as: CONCERN
    --> Weaver verdict: "UX observation, not CSS fix"
      --> Fix manifest: NOT INCLUDED
        --> Fix execution: N/A
          --> Post-fix verification: N/A
            --> Final status: "DOCUMENTED" (= dead)
```

Every judgment-based finding follows this exact path. The system has no mechanism to promote a CONCERN to a fix. The implicit assumption is: if it's not a rule violation, it's a matter of taste, and matters of taste don't get fixed.

---

## 6. What a Designer Would Flag in 5 Seconds

### The 5-Second Test: What Jumps Out

A designer looking at these 6 AD pages for the first time would immediately flag:

1. **"These all look the same."** All 6 pages share identical header structure, identical body typography, identical code block styling, identical callout components. The axis pattern -- the WHOLE POINT of each page -- is invisible in the rendered output for 4 of 6 pages. The pages are about visual layout patterns but all use the same visual layout.

2. **"Where am I?"** 15,000px of content with no table of contents, no scroll indicator, no section navigation. This is a basic UX failure that any design review would catch in seconds.

3. **"The code blocks don't belong."** Near-black rectangles on warm cream. The contrast is immediate and visceral. This isn't a subtle spacing issue -- it's the dominant visual element on every page, and it looks wrong.

4. **"Is this responsive?"** At 768px, multiple pages have horizontal scroll. A designer testing on their phone would see this in 2 seconds.

5. **"The callouts look different on every page."** Some use italic serif, some use bold mono labels, some have colored backgrounds, some don't. A designer scanning all 6 pages would immediately ask "why don't these match?"

### Why 100+ Agents Didn't Flag These

Because no agent was asked these questions:
- No agent was asked "do these pages look like a coherent collection?"
- No agent was asked "does the visual treatment match the stated pattern?"
- No agent was asked "would this survive a design review?"
- No agent was asked "squint at this -- what do you see?"

The agents were asked to verify CSS values against specifications. They did this perfectly. The specifications themselves were the problem -- they specified CSS values, not visual outcomes.

---

## 7. The Root Cause: Auditing Specs, Not Outcomes

### The Fundamental Error

The entire audit architecture audits INPUTS (CSS values) rather than OUTPUTS (visual perception). This is the equivalent of reviewing a restaurant by checking that every recipe was followed exactly, without tasting the food.

```
CURRENT AUDIT:
  Specification --> CSS Implementation --> [AUDIT HAPPENS HERE] --> Rendered Page

  "Does CSS match spec?" = YES

WHAT'S NEEDED:
  Specification --> CSS Implementation --> Rendered Page --> [AUDIT SHOULD HAPPEN HERE]

  "Does the rendered page look right?" = ??? (never asked)
```

### The Binary Rule Trap

From the MEMORY.md strategic discovery: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%." This is both the system's greatest strength AND its fatal flaw.

Binary rules (border-radius: 0, box-shadow: none) are enforced with 100% reliability across thousands of elements. The system is brilliant at this.

But the corollary is: anything that ISN'T a binary rule gets 0% enforcement. Visual rhythm, compositional balance, page-level coherence, perceptual hierarchy -- none of these are binary rules, so none of them are enforced.

The system optimized for what it could measure and achieved perfection at measuring it. But what it can measure is not what matters to a viewer.

### The Convention Spec Paradox

The AD-CONVENTION-SPEC.md (822 lines) is simultaneously the system's greatest innovation and its deepest blind spot:

- **Innovation:** It prevented the OD "three dialects" problem. All 6 AD explorations are structurally consistent because they all follow the same spec. Zero dialect divergence. This is genuinely valuable.

- **Blind spot:** The convention spec specifies CSS values, not visual outcomes. It says "header padding: 64px 32px" -- it does NOT say "the header should feel generous and create a clear separation from content." An agent can comply perfectly with the spec and still produce a page that looks wrong, because the spec captures the WHAT but not the WHY.

---

## 8. What Would Have Caught the Issues: Better Questions

### Questions That Would Transform the Audit

**Instead of:** "Is border-radius 0?"
**Ask:** "Does any element on this page look rounded? Squint at the page and identify any element that appears to have soft edges."

**Instead of:** "Is header padding 64px?"
**Ask:** "Does the header feel generous and separated from the content? Does it create a clear 'above the fold' moment?"

**Instead of:** "Is line-height 1.7?"
**Ask:** "Is the body text comfortable to read for 5 minutes? Does the line spacing feel breathing and unhurried, or cramped and dense?"

**Instead of:** "Does scrollWidth exceed clientWidth?"
**Ask:** "Open this page on a 768px viewport and scroll through it. Does everything fit? Does anything feel squeezed, overlapping, or truncated?"

**Instead of:** "Does the CSS match the convention spec?"
**Ask:** "If you showed this page to someone who has never seen the convention spec, would they think it was well-designed? What would they complain about first?"

### The Meta-Question

The single most powerful audit question that was never asked:

> **"Take a screenshot of this page. Now take a screenshot of a page from a world-class design system (Stripe, Linear, Vercel). Put them side by side. What are the three most obvious differences?"**

This question forces perceptual comparison rather than rule verification. It anchors the assessment in visual reality rather than specification compliance.

---

## 9. Cross-Team Pattern: What Each Team Missed

### Team 1 (OD Audit, 17 agents): Missed rgba epidemic
Found 89 findings. The rgba opacity issue (10+ elements with semi-transparent backgrounds) was found by visual auditors through DOM scanning but was initially classified as expected behavior. It took the comprehensive audit to elevate it to a systemic fix. The audit found it mechanically but underestimated its visual impact.

### Team 2 (OD Fix, 7 agents): Missed false positives
Investigated Fix #1 (Essence font) and Fix #7 (dead zone). Both turned out to be false positives -- font-loading timing and scroll-animation artifacts. The audit had flagged visual phenomena that were transient, not structural. The fix team had to disprove the audit's own findings.

### Team 3 (Comprehensive Audit, ~58 agents): Missed design-level coherence
Checked 13,000 elements for soul compliance (0 violations). Checked 11 of 12 pages visually. But the fresh-eyes adversarial review produced only 7 "UNIQUE FRESH" findings -- excessive whitespace, collection incoherence, score badge inconsistency. Even with a dedicated adversarial layer, the system produced 7 design observations against ~80+ rule-verification findings.

### Team 4 (AD Build, ~20 agents): Created the problems
6 builders each built one AD exploration. They all followed the convention spec. They all used the soul template. They all produced pages with identical structural DNA. But 4 of 6 pages don't visually demonstrate their axis pattern -- the builders followed the spec without asking "does this page LOOK like what it claims to be?"

### Team 5 (AD Audit, 24+ agents): Found rules, missed perception
23 audit reports. 6 spacing, 6 overflow, 6 fresh-eyes, 3 visual, 1 structural, 1 provenance. ~250 raw findings. Almost all are CSS value comparisons. The fresh-eyes agents produced the only genuinely useful design feedback, but their findings were classified as CONCERN/MEDIUM/LOW and excluded from fixes.

### Team 6 (AD Fix, ~5 agents): Fixed what was in the manifest
Applied systemic fixes (header padding, callout label font-size, body line-height, callout margin). Applied per-file fixes (border-radius, box-shadow, bento gap, table overflow wrappers). Post-fix verification: "6,468 elements checked, 0 soul violations." The fixers did exactly what was asked -- but what was asked excluded every perceptual issue.

### Team 7 (Master Synthesis, 11 agents): Synthesized rules, not perception
Produced the MASTER-AD-EXECUTION-SPEC.md (1,407 lines). The synthesis is about process, findings, and provenance. It does not contain a single sentence about what the pages look like.

---

## 10. Structural Recommendations

### Recommendation 1: Invert the Audit Pyramid

Currently: 85% rule-checking, 15% perceptual. The most useful feedback comes from the 15%.

Proposed: 40% rule-checking (automate it -- it doesn't need agents), 60% perceptual (this is what agents can uniquely do).

### Recommendation 2: Kill the Severity Hierarchy for Perceptual Findings

The BROKEN > OVERFLOW > CRAMPED > INCONSISTENT > CONCERN > NITPICK hierarchy guarantees that perceptual findings never get fixed. Replace with a parallel track:

- **Rule Track:** SOUL VIOLATION > CONVENTION BUG > OVERFLOW (binary, always fix)
- **Perception Track:** WOULD-NOT-SHIP > LOOKS-WRONG > COULD-BE-BETTER (judgment, evaluated by human)

### Recommendation 3: Make "Fresh Eyes" the Primary Audit, Not the Afterthought

In the AD audit, fresh-eyes agents were deployed as ONE of 5 audit types. They produced the most valuable findings. Invert: make fresh-eyes the FIRST pass, THEN verify with rule-checks. The fresh-eyes findings should DEFINE the fix list, not supplement it.

### Recommendation 4: Ask Perceptual Questions, Not Rule Questions

Replace the 12-dimension spacing audit format:
```
CURRENT STATE: padding: 48px
EXPECTED STATE: padding: 64px
SEVERITY: CRAMPED
```

With a perceptual prompt:
```
Look at this page for 10 seconds. Then answer:
1. What is the visual hierarchy? (What's most important? Least?)
2. Where does monotony set in? (At what scroll position do you stop seeing variety?)
3. What doesn't harmonize? (What element feels like it's from a different design?)
4. What would break if you removed it? (What's structural vs. decorative?)
5. Would you screenshot this for your portfolio? If not, why not?
```

### Recommendation 5: Benchmark Against External Standards

No audit in the entire system compares against external design systems. Every comparison is internal (AD vs. OD, AD vs. convention spec). The system is testing itself against itself.

Add: "Compare this page visually against [Linear.app docs, Stripe docs, Tailwind docs]. What do they do that this page does not?"

---

## 11. The Deeper Lesson: Compliance Is Not Quality

The audit system achieves perfect compliance. Zero soul violations across 13,000+ elements (comprehensive audit) and 6,468 elements (AD post-fix verification). Every CSS value matches its specification. Every finding ID is in the correct range. Every citation references a real document.

But compliance and quality are different things.

A page can be perfectly compliant and still look wrong. A page can match every specification and still fail a 5-second design review. A page can pass 72 structural checks and still be monotonous, unchoreoraphed, and visually exhausting.

The audit system built a fortress of compliance. Inside the fortress, the design lives unexamined.

**The fix is not more agents or more checks.** The fix is different QUESTIONS. The kind of questions that a designer asks when they look at something and say: "This doesn't feel right."

That feeling -- the one that doesn't have a CSS property or a specification reference -- is the gap.

---

## Appendix A: Complete Finding-Type Taxonomy (AD Phase)

| Category | Findings | Detection | Agent Type | Fixed? |
|----------|----------|-----------|------------|--------|
| Soul violation: border-radius | 1 (AD-002) | CSS grep | Structural, Spacing, Visual | YES |
| Soul violation: box-shadow | 2 (AD-004, AD-006) | CSS grep | Visual, Structural | YES |
| Convention: header padding | 6 (all files) | Value comparison | Spacing (all 6) | YES |
| Convention: callout label font | 6 (all files) | Value comparison | Spacing, Overflow | YES |
| Convention: bento gap | 1 (AD-003) | Value comparison | Spacing | YES |
| Convention: border width | 1 (AD-001 td 2px) | CSS grep | Overflow, Structural | YES |
| Token: hardcoded font-size | 1 (AD-003 h1) | CSS grep | Structural | YES |
| Token: sub-minimum font | 1 (AD-006 9px label) | Value comparison | Overflow | YES |
| Overflow: table wrapper | 3 (AD-001, 002, 006) | scrollWidth check | Overflow | YES |
| Overflow: responsive collapse | 2 (AD-003, AD-004) | 768px viewport test | Fresh-eyes, Post-fix | PARTIAL |
| Metadata: missing RAR | 4 (AD-001, 003, 005, 006) | grep | Structural | YES |
| Metadata: YAML count error | 1 | Manual check | Provenance | YES |
| Metadata: status labels | 3 | Manual check | Provenance | YES |
| **TOTAL RULE-BASED** | **32** | | | **Most fixed** |
| Perception: dark code blocks | 1 (all pages) | Fresh-eyes consensus | Fresh-eyes (all 6) | NO |
| Perception: no wayfinding | 1 (AD-001, 006) | Fresh-eyes observation | Fresh-eyes | NO (deferred) |
| Perception: pages don't demonstrate pattern | 1 (4 pages) | Fresh-eyes observation | Fresh-eyes | NO |
| Perception: border weight imperceptible | 1 (AD-004) | Fresh-eyes observation | Fresh-eyes | NO |
| Perception: callout dialect | 1 (all pages) | Fresh-eyes cross-comparison | Fresh-eyes | NO |
| Perception: progress indicators broken | 1 (AD-005) | Fresh-eyes observation | Fresh-eyes | NO |
| Perception: visual monotony | 1 (AD-001) | Fresh-eyes observation | Fresh-eyes | NO |
| **TOTAL PERCEPTUAL** | **7** | | | **NONE fixed** |

**The ratio is 32:7 (rule:perception). The fix rate is 100%:0%.**

---

## Appendix B: The Five Types of Blindness

1. **Specification Blindness:** The spec says 64px, the page shows 64px, therefore the page is correct. But 64px might be wrong for THIS page's content.

2. **Binary Blindness:** Everything is pass/fail. There is no "this passes the rule but looks bad." The binary framework has no vocabulary for graduated quality.

3. **Component Blindness:** Every audit checks individual elements (this callout, this header, this code block). No audit checks the COMPOSITION (how these elements relate to each other on the page).

4. **Comparison Blindness:** Every comparison is internal (AD vs OD, AD vs convention spec). No comparison is external (AD vs the real world of design).

5. **Self-Reference Blindness:** The system audits itself against its own rules. When the rules are incomplete (no rules for visual rhythm, composition, or perceptual harmony), the audit cannot find what the rules don't cover. The blind spots in the rules become blind spots in the audit.

---

*Audit failure analysis complete. 2026-02-10.*
