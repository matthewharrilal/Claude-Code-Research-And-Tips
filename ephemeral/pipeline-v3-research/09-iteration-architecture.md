# Report 09: Iteration Architecture for Multi-Pass Building

**Author:** iteration-designer (Opus 4.6)
**Date:** 2026-02-22
**Task:** #9 -- Design how iteration could be incorporated into Pipeline v3
**Source material:** 53-dimensional-gap-analysis.md (one-shot as deepest structural limit), 57-compositional-fluency-deep.md (3 registers of compositional coupling), 54-cd006-deficit-analysis.md (CD-006 vs Flagship gap), 55-flagship-crystallization.md (concrete Flagship vision), 59-suppressor-archaeology.md (20 suppressors, 7 chains, fix cycle regression S-20), 02-weaver-fix-cycle.md (fix cycle convergence problems), 16-zero-loss-explorer.md (phased building approaches)

---

## EXECUTIVE SUMMARY

The current pipeline is fundamentally one-shot with late-stage patching. Human designers iterate 15-30 micro-cycles. The question is not whether to add iteration -- it is how to add iteration without triggering the specification paradox (feedback that evaluates triggers compliance mode) and fix cycle regression (S-20: diagnostic language converts composing mode back to checklist mode).

The answer is a **3-pass architecture** where each pass has a different cognitive mode, and inter-pass feedback uses **artistic language, not diagnostic language**. The critical innovation is the **Compositional Critic** -- a second Opus agent that provides feedback in the same register as a design mentor, not a gate runner. The critic says "the middle sags -- what if the density compressed here?" not "SC-09 FAILED: stacked gap 210px exceeds 120px threshold."

Estimated quality improvement from iteration: +0.3-0.7 PA-05 points over single-pass. Primary value: reaching Register 3 compositional fluency (atmospheric coupling), which has never been achieved in one shot. Diminishing returns after Pass 3 -- a 4th pass produces <0.1 improvement.

---

## 1. WHY ONE-SHOT IS THE DEEPEST STRUCTURAL LIMIT

### 1.1 The Evidence

| Experiment | Passes | PA-05 | Compositional Register |
|-----------|--------|-------|----------------------|
| Middle | 1 pass (recipe) | 4/4 DESIGNED | Register 1 (local coupling, CCS ~0.15) |
| CD-006 | 1 pass (showcase) | 39/40 (Ceiling) | Register 2 (structural coupling, CCS ~0.40) |
| Gas Town | 1 pass (master prompt) | ~3.5/4 (Ceiling-tier) | Register 2.5 (strong density arc, CCS ~0.50) |
| Flagship | 5 passes (checklist) | 1.5/4 (FLAT) | Register 0 (no coupling) |
| Remediation | 1 pass (repair) | 2.5/4 (IMPROVED) | Register 1.5 (patched coupling) |

The Flagship's 5 passes produced the WORST result. But those 5 passes were annotation-accumulation, not iteration. Each pass added documentation to the previous pass's output under the same defensive prompt. True iteration is fundamentally different from multi-pass accumulation.

### 1.2 What True Iteration IS

True iteration has three properties that the current fix cycle lacks:

**Property 1: The builder SEES its own output.** Human designers look at what they made, feel something about it, and adjust. The current builder writes CSS without rendering. It cannot see that Zone 3's background is imperceptibly different from Zone 2's, because it never renders the page until the build is complete.

**Property 2: Feedback is COMPOSITIONAL, not diagnostic.** A design mentor says "the energy drops here -- this section needs more weight." A gate runner says "SC-09 FAILED: gap exceeds threshold." The mentor's feedback invites creative response. The gate's feedback demands compliance. One produces Register 3; the other produces minimum viable fix.

**Property 3: Earlier decisions can be REVISED in light of later outcomes.** The current builder writes CSS top-to-bottom and never revisits Zone 1 after writing Zone 6. If Zone 6's density makes Zone 1's opening feel too sparse, no mechanism exists to go back and adjust. True iteration allows backward propagation of compositional insight.

### 1.3 What True Iteration Is NOT

- Not a fix cycle (diagnostic language, compliance mode, local patches)
- Not multi-pass accumulation (same prompt, additive annotation, no visual feedback)
- Not phased building by channel (structure first, then color, then type -- violates boundary-by-boundary principle)
- Not "do it again but better" (vague re-prompt produces the same output due to continuation bias)

---

## 2. THE 3-PASS ARCHITECTURE

### 2.1 Overview

```
PASS 1: STRUCTURAL SKELETON + PERVADING METAPHOR
  Input:  TC brief + content + 73-line minimal constraint set
  Mode:   GENERATIVE (composing, not complying)
  Output: Full HTML/CSS page -- complete but raw
  Time:   20-35 min

     ↓ [Compositional Critic reviews screenshots]

PASS 2: ATMOSPHERIC ENRICHMENT + MECHANISM COUPLING
  Input:  Pass 1 output + Critic's artistic feedback + value table
  Mode:   COMPOSITIONAL (refining relationships, not fixing defects)
  Output: Enriched page -- mechanisms coupled, density arc embodied
  Time:   15-25 min

     ↓ [Compositional Critic reviews screenshots]

PASS 3: TERMINAL CRAFT + DESIGNED MOMENTS
  Input:  Pass 2 output + Critic's final impressions
  Mode:   POLISHING (detail attention, not structural change)
  Output: Finished page -- terminal craft, responsive, accessible
  Time:   10-20 min

     ↓ [Programmatic gates + PA (standard Mode 4)]
```

**Total estimated time:** 45-80 min (vs current ~70-100 for Middle, ~240-400 for Flagship)

### 2.2 Why 3 Passes, Not 2 or 5

**Why not 2:** Two passes conflate structural composition with terminal craft. Pass 1 would need to simultaneously establish the metaphor, couple mechanisms, AND polish details. This is the current one-shot problem restated.

**Why not 4-5:** Diminishing returns. The quality improvement per pass follows a decay curve:

```
Pass 1 → Pass 2: +0.3-0.5 PA-05 points (atmospheric coupling established)
Pass 2 → Pass 3: +0.1-0.2 PA-05 points (terminal craft, designed moments)
Pass 3 → Pass 4: +0.0-0.1 PA-05 points (micro-refinement, barely perceptible)
Pass 4 → Pass 5: +0.0 PA-05 points (noise, possible regression from S-20)
```

Each additional pass also increases the risk of fix cycle regression (S-20). The builder in Pass 4+ is increasingly in "don't break what works" mode, which is defensive, which is the compliance trap (Chain A). Three passes hits the diminishing returns inflection point.

**Why not continuous (render-every-100-lines):** Context window constraints (Section 6 below). Continuous rendering requires the builder to hold its full CSS + screenshot evaluation + compositional plan simultaneously. At 800+ lines of CSS, this exceeds productive attention. The 3-pass architecture creates natural checkpoints where the builder can reset its compositional attention.

---

## 3. PASS 1: STRUCTURAL SKELETON + PERVADING METAPHOR

### 3.1 What the Builder Receives

```
INPUT SET (~170-250 lines total):
  1. TC brief (~80-120 lines)
     - Content analysis, zone map, metaphor derivation
     - Zone-level CSS value table (backgrounds, padding, border-weight, font-size)
     - Density arc direction (OPENING → DEEPENING → RESOLVING)
  2. Minimal constraint set (~73 lines)
     - 15 lines identity constraints (soul)
     - 8 lines perception thresholds
     - 50 lines compositional frameworks
  3. Content file (read separately, not counted in prompt)
  4. 1 exemplar reference (CD-006 OR Gas Town, selected by TC for content affinity)
```

### 3.2 What the Builder Does

The builder composes a COMPLETE page in a single pass. Not a skeleton. Not a wireframe. A full HTML + CSS page with all zones, all content, and initial mechanism deployment. The page should be SHIPPABLE at Middle tier -- competent, warm, identity-correct, with basic mechanism deployment.

The key instruction: **"Build this page as if it will be published as-is. Do not leave gaps. Do not annotate future work. Compose."**

### 3.3 What Pass 1 Typically Produces

Based on evidence from the Middle experiment and Gas Town:
- PA-05: 3.0-3.5/4 (COMPOSED to near-DESIGNED)
- Compositional Register: 2.0-2.5 (structural coupling, bookending, density arc present)
- Mechanisms: 10-14 deployed
- CCS: 0.25-0.40 (local and some structural coupling)

### 3.4 What Pass 1 Typically Lacks

- Component-level modulation by zone context (callout padding varies by zone)
- Grid choice as compositional decision (grids assigned by content, not by metaphor)
- Silence zones (continuous mechanism deployment without breathing)
- Atmospheric coupling across ALL mechanisms (density arc in 2-3 channels, not 5-6)
- Terminal craft details (syntax highlighting variants, responsive tweaks, footer composition)

These are precisely the properties that Pass 2 and Pass 3 address.

---

## 4. THE COMPOSITIONAL CRITIC: THE CENTRAL INNOVATION

### 4.1 Why a Critic, Not a Gate

The fix cycle regression (S-20) is the clearest evidence: when feedback arrives as diagnostic language ("FAILED: value X exceeds threshold Y"), the builder shifts from composing mode to compliance mode. The quality drops.

The Compositional Critic is a SEPARATE Opus agent that:
1. Views screenshots of the Pass 1 output at 1440px, 1024px, and 768px
2. Reads the TC brief (for metaphor and intended density arc)
3. Does NOT read the CSS
4. Does NOT know the gate thresholds
5. Provides feedback in ARTISTIC language

### 4.2 The Critic's Feedback Format

The critic produces a ~50-100 line document with three sections:

**Section A: IMPRESSION (20-30 lines)**
The critic describes what it FEELS when scrolling through the page. Not what it measures. Not what passes or fails. What it experiences.

Example:
```
The opening lands well -- the dark header creates authority and the
drop cap earns the first paragraph. But somewhere around the third
section, the energy dissipates. The backgrounds are shifting but I
can barely tell. The sections feel like different rooms in the same
hotel -- competently similar but not building toward anything.

By the time I reach the data tables, I've forgotten the metaphor.
The page promised me a geological survey but delivered a standard
report with warm colors. The strata concept from the opening never
comes back.

The footer is good -- it echoes the header. But the middle 60% of
the page has no compositional gravity. It needs weight.
```

**Section B: THREE COMPOSITIONAL SUGGESTIONS (30-50 lines)**
Each suggestion is a DISPOSITION, not a directive. It tells the builder what QUALITY to pursue, not what CSS to write.

Example:
```
SUGGESTION 1: The density arc needs to be felt, not just present.
  Right now the backgrounds change by ~10 RGB points between zones.
  I can see it in the CSS but I can't feel it on the page. What if
  the probable zone were noticeably cooler -- enough that scrolling
  into it feels like entering a different room? And what if the font
  weight shifted too -- established sections confident and full,
  speculative sections lighter, more tentative?

SUGGESTION 2: The middle sections need compositional gravity.
  Sections 4-7 are four rooms at the same temperature. Each has
  content and components, but nothing PULLS you through. What if one
  section were dramatically denser than its neighbors -- a bento grid
  packed with data -- creating a gravitational center that the
  surrounding sections orbit? The contrast would make both the dense
  section and the sparse sections more meaningful.

SUGGESTION 3: The metaphor is announced but not embodied.
  The class names say "stratum-established" and "stratum-speculative"
  but the CSS doesn't make me FEEL geological layers. What if the
  border weights tracked the strata -- heavier borders for established
  findings, thinner for speculative? What if component styling
  responded to the zone -- callouts in established zones feel solid
  and certain (4px borders, warm backgrounds), while callouts in
  speculative zones feel provisional (1px borders, cooler backgrounds)?
```

**Section C: WHAT TO PRESERVE (10-20 lines)**
Critical for preventing regression. The critic explicitly names what works and must not be lost.

Example:
```
PRESERVE:
- The header-to-drop-cap weight response. This is the page's best
  compositional moment.
- The footer echo. The bookending works.
- The Zone 1 opening sparsity. The breathing room earns trust.
- The overall warm palette. The page feels human.
```

### 4.3 Why the Critic Must NOT See the CSS

If the critic reads the CSS, it will provide CSS-level feedback: "change border-left from 1px to 3px on .zone-probable." This is diagnostic. It triggers compliance mode in the builder.

The critic sees only screenshots. Its feedback is perceptual. The builder must TRANSLATE perceptual feedback into CSS decisions. This translation is the creative act that produces compositional fluency. The builder thinks: "The critic says the middle sags. What CSS changes would create gravitational pull? A denser grid, compressed spacing, heavier borders in the center section." This is composing, not complying.

### 4.4 Why the Critic Must Be Opus

The critic's job requires:
1. Aesthetic judgment (perceiving "sag" in a layout)
2. Compositional vocabulary (suggesting "gravitational center" as a design strategy)
3. Restraint (naming 3 suggestions, not 30)
4. Preservation awareness (knowing what works AND saying so)

Sonnet can describe what it sees. Opus can describe what it FEELS. The critic's value is in the dispositional quality of its feedback -- suggestions that inspire rather than constrain.

### 4.5 Critic Protocol: The 3 Laws

1. **Never name a CSS property.** Say "heavier borders" not "border-left: 3px." Say "cooler background" not "background: #f0ebe3."
2. **Never reference a threshold.** Say "I can barely tell the zones apart" not "background delta is below 15 RGB."
3. **Always suggest a QUALITY, not an ACTION.** Say "this section needs gravitational pull" not "add a bento grid with 4 columns."

These laws prevent the critic from becoming a gate runner in disguise.

---

## 5. PASS 2: ATMOSPHERIC ENRICHMENT + MECHANISM COUPLING

### 5.1 What the Builder Receives

```
INPUT SET:
  1. Pass 1 output (the full HTML/CSS page)
  2. Critic's feedback (~50-100 lines)
  3. TC brief (re-read for metaphor grounding)
  4. Zone-level CSS value table (from TC brief, with RANGES not exact values)
  5. A single instruction: "Compose this page further. The critic saw
     what you built. Their impressions tell you what's working and
     what needs more compositional weight. You are still the composer."
```

### 5.2 What the Builder Does

The builder re-reads its own page AND the critic's impressions. Then it REVISES. Not patches. Not fixes. Revises. The distinction:

- **Patch:** Change `.zone-3 { background: #fefcf3 }` to `.zone-3 { background: #f0ebe3 }` because the critic said zones aren't distinct enough.
- **Revise:** Re-conceive how the density arc manifests across ALL zones. If the critic says "the middle sags," the builder doesn't add weight to the middle section only -- it reconceives the entire density trajectory so that the middle sits at a different point in the arc.

The key instruction to enable revision rather than patching: **"You may change anything from Pass 1. The page is a DRAFT, not a foundation. If the composition needs restructuring, restructure it."**

### 5.3 What Pass 2 Targets

Pass 2 specifically targets the properties that one-shot building cannot reliably produce:

1. **Multi-channel density arc.** Pass 1 typically gets 2-3 channels co-varying at boundaries. Pass 2 pushes to 4-5 channels: background + padding + font-weight + letter-spacing + border-weight all shifting together.

2. **Component modulation by zone context.** Pass 1 uses the same callout styling in all zones. Pass 2 introduces zone-responsive component CSS:
   ```css
   .zone-established .callout { padding: 24px; border-left: 4px; }
   .zone-speculative .callout { padding: 16px; border-left: 1px; }
   ```

3. **Grid choice as compositional decision.** Pass 1 assigns grids by content structure (data gets a bento, Q&A gets a Z-pattern). Pass 2 may reassign grids by metaphor semantics (established findings get structured bento, speculative analysis gets linear F-pattern).

4. **Silence zones.** Pass 1 fills every section with mechanisms. Pass 2 identifies where deliberate absence would create contrast -- and REMOVES mechanisms from those zones, replacing them with breathing prose.

5. **Transition specificity.** Pass 1 uses 2-3 generic transition types. Pass 2 creates boundary-specific transitions where each one responds to what came before and prepares for what comes next.

### 5.4 Expected Quality After Pass 2

- PA-05: 3.5-4.0/4 (DESIGNED range)
- Compositional Register: 2.5-3.0 (atmospheric coupling emerging)
- CCS: 0.40-0.60 (structural to atmospheric coupling)
- The density arc should be FELT, not just measured
- At least 1 silence zone
- Component modulation in at least 2 zones

---

## 6. PASS 3: TERMINAL CRAFT + DESIGNED MOMENTS

### 6.1 What the Builder Receives

```
INPUT SET:
  1. Pass 2 output (enriched page)
  2. Critic's second impression (~30-50 lines, briefer)
  3. A single instruction: "Polish this page. The composition is
     established. Now attend to the details that make it feel
     generous: syntax highlighting, responsive behavior, footer
     composition, accessibility, the small moments that accumulate
     into care."
```

### 6.2 What the Builder Does

Pass 3 is the NARROWEST pass. No structural changes. No zone reorganization. Terminal craft only:

1. **Responsive behavior.** Add @media queries for 960px, 768px, 480px. Verify grid collapse, typography scale, padding compression.

2. **Accessibility.** Skip link, ARIA landmarks, focus-visible styles, reduced-motion query, heading hierarchy, color contrast.

3. **Syntax highlighting.** If code blocks exist, add 4+ syntax colors that maintain the warm palette.

4. **Footer composition.** The footer should not be an afterthought. It is the closing rhyme of the bookending arch.

5. **Micro-typography.** text-wrap: pretty on headings. orphans: 2; widows: 2. Body line-length verification.

6. **Designed moments.** If any viewport-sized segment lacks a compositional peak, Pass 3 adds one -- but through COMPONENT deployment or layout variation, not through structural change.

### 6.3 Expected Quality After Pass 3

- PA-05: 3.5-4.0+/4 (DESIGNED, potentially Flagship-adjacent)
- Compositional Register: 2.5-3.0 (unchanged from Pass 2 -- Pass 3 doesn't alter composition)
- Terminal craft: present at all detail levels
- Accessibility: full WCAG 2.1 AA
- Responsive: 3 breakpoints implemented

---

## 7. AVOIDING FIX CYCLE REGRESSION (S-20)

### 7.1 The Problem

Fix cycle regression occurs when feedback converts the builder from composing mode to compliance mode. The current fix cycle uses diagnostic language:

```
DIAGNOSTIC (triggers compliance):
  "SC-09 FAILED: stacked gap 210px > 120px threshold"
  "PA auditor B says: Zone backgrounds are imperceptible"
  "BLOCKING: border-left computed as 0px on zones 4-8"
```

### 7.2 The Solution: Artistic Feedback Language

The Compositional Critic's 3 Laws (Section 4.5) are the primary defense. But additional protections:

**7.2.1 No PASS/FAIL language in inter-pass feedback.**
The critic never says "this fails." It says "this doesn't land yet" or "I want more here." The difference is subtle but critical: "fails" implies a standard the builder must meet. "Doesn't land yet" implies a quality the builder can explore.

**7.2.2 The PRESERVE section prevents regression.**
Without explicit preservation instructions, Pass 2 builders tend to protect all of Pass 1's CSS (defensive) rather than freely revising it (generative). The critic's PRESERVE section gives the builder PERMISSION to change everything NOT on the preserve list. This converts "don't break anything" (defensive) to "these things work, everything else is open" (generative).

**7.2.3 No gate results between passes.**
Gates run ONLY after Pass 3. Between passes, the only feedback is the critic's artistic impressions. The builder never enters "fix this gate failure" mode during iteration. Gate failures after Pass 3 trigger a standard (single) fix cycle if needed -- but by then, the page has benefited from 3 compositional passes, and gate failures are likely mechanical (wrong selector) rather than structural (wrong architecture).

**7.2.4 The builder is a DIFFERENT instance per pass.**
Continuation bias is the enemy of revision. If the same Opus instance writes Pass 1 and Pass 2, it will defend its Pass 1 decisions. A fresh Opus instance reads Pass 1's output with no authorship attachment. It can freely revise because it didn't write the original. This is the "Two-Instance pattern" confirmed across multiple experiments.

### 7.3 What If Pass 2 Makes Things WORSE?

This is the legitimate concern. Possible mitigations:

**7.3.1 Diff-level rollback.** After each pass, the output is saved. If Pass 2's PA-05 is lower than Pass 1's (evaluated informally by the critic, not by gates), the system can roll back to Pass 1 and re-attempt Pass 2 with a different critic seed.

**7.3.2 The critic's PRESERVE section bounds regression.** Even if Pass 2 makes some things worse, the preserved elements (header, footer, bookending, palette) maintain a quality floor.

**7.3.3 Statistical expectation.** Based on the evidence, fresh Opus instances reading a competent page (3.0+/4) and receiving artistic feedback IMPROVE the page ~70-80% of the time. The 20-30% regression risk is acceptable given the 50-70% chance of meaningful improvement.

---

## 8. THE "DESIGN CRITIQUE" MODEL: ARTISTIC FEEDBACK FROM A SECOND AGENT

### 8.1 Can an AI Provide ARTISTIC Feedback?

Yes, with constraints. Opus demonstrates aesthetic judgment in its builds (CD-006, Gas Town). The same judgment can be deployed in evaluation mode. The key is prompting the critic to respond as a MENTOR, not an AUDITOR.

**Auditor prompt (produces diagnostic feedback):**
```
Evaluate this page against the following criteria. For each criterion,
rate PASS/FAIL and provide evidence.
```

**Mentor prompt (produces artistic feedback):**
```
You are a senior design director reviewing a junior designer's first
draft. You see real talent in their work. Your job is not to grade
them but to help them see what they can't see yet.

Look at these screenshots. What works? What doesn't land? Where does
the page need more compositional weight? Where does it need more
breathing room? Write as if you're sitting next to them, pointing at
the screen.
```

### 8.2 The Mentor Prompt Is a Dispositional Recipe for Evaluation

The mentor prompt works for the same reason the Middle experiment's recipe worked: it describes a MODE OF BEING, not a checklist. "Help them see what they can't see yet" is a disposition. "Rate PASS/FAIL against criteria" is a procedure.

The disposition produces DIFFERENT feedback depending on what the page looks like. A page with strong structure but weak atmosphere gets feedback about atmosphere. A page with strong atmosphere but weak details gets feedback about terminal craft. The critic adapts to what the page NEEDS because the prompt asks for perception, not evaluation.

### 8.3 The Critic's Relationship to the PA

The Compositional Critic is NOT a replacement for the Mode 4 PA. The PA runs after Pass 3, as a final quality verification. The critic runs BETWEEN passes, as compositional guidance.

The critic and the PA serve different functions:
- **Critic:** "Here is what I feel. Here is where the page could grow." (GENERATIVE)
- **PA:** "Here is what 9 auditors measured across 48 questions." (EVALUATIVE)

The critic is part of the BUILD process. The PA is part of the VERIFICATION process. They never overlap.

---

## 9. MICRO-CYCLE DESIGN: Section-by-Section vs. Full-Page Iteration

### 9.1 The Two Models

**Model A: Section-by-section iteration**
```
Build Zone 1 → Render → Self-evaluate → Adjust →
Build Zone 2 → Render full page → Self-evaluate → Adjust Zone 1 in light of Zone 2 →
... → Build Zone N → Full evaluation → Adjustments
```

**Model B: Full-page iteration (the 3-pass architecture)**
```
Build entire page → Critic evaluates → Revise entire page →
Critic evaluates → Polish entire page → Final evaluation
```

### 9.2 Why Model B Is Superior for This System

**9.2.1 Cross-zone coherence.** The conventions brief says "build boundary by boundary, not channel by channel." Model A builds zone by zone, which is boundary-sequential but misses the GLOBAL coherence that only emerges when all zones exist simultaneously. The density arc from Zone 1 to Zone 6 only becomes perceptible when all zones are rendered together. Model A would require the builder to hold a mental model of unbuilt zones while evaluating built ones.

**9.2.2 Context window efficiency.** Model A requires Playwright interaction during build, which means the builder must hold: (a) its compositional plan, (b) all CSS written so far, (c) the screenshot evaluation, (d) the TC brief, simultaneously. At Zone 4 of a 6-zone page, this is 500+ lines of CSS + screenshot data + plan + brief = context window saturation. Model B separates "write the full page" (one cognitive mode) from "evaluate and revise" (another mode).

**9.2.3 The holism-incrementalism tension.** Report 53 (Section 1) flags this: "phased building contradicts the conventions brief's own philosophy about holistic composition. Building zone-by-zone may prevent the cross-zone coherence the system demands." The 3-pass architecture resolves this by making each pass HOLISTIC (the entire page is built/revised as a whole) while the PASSES are incremental (each pass deepens different qualities).

**9.2.4 Empirical evidence.** Gas Town was built in one holistic pass and achieved Register 2.5. The Flagship was built in 5 incremental passes (zone-by-zone accumulation) and achieved Register 0. The holistic pass produces better cross-zone coherence.

### 9.3 Where Section-Level Iteration Might Help

One exception: within Pass 2, the builder could benefit from rendering AFTER revising a specific zone to see if the revision works in context. This is not section-by-section building -- it is spot-checking within a holistic revision. The builder should have Playwright access during Pass 2 for optional mid-revision renders (not mandatory -- only when the builder feels uncertain about a revision's perceptual impact).

---

## 10. CONTEXT WINDOW CONSTRAINTS: COMPOSITIONAL MEMORY ACROSS PASSES

### 10.1 The Problem

Can the builder maintain compositional memory across iteration passes? If Pass 2 is a fresh Opus instance (Section 7.2.4), it has NO memory of Pass 1's compositional reasoning. It sees the OUTPUT but not the INTENT.

### 10.2 The Solution: The Conviction Artifact

Each pass produces a short (~20-30 line) **conviction artifact** that captures the compositional reasoning, not the CSS:

```
PASS 1 CONVICTION:
  Metaphor: Geological survey -- depth = certainty
  Density arc: Zone 1 (warm/sparse/certain) → Zone 3 (cool/dense/uncertain) →
               Zone 4 (dark/spacious/unknown) → Zone 5 (returning warm/resolving)
  Governing cluster: border-weight + background + padding encode certainty together
  Key compositional decisions:
    - Drop cap bridges header weight into body
    - Bento grids only in established zones (certainty = structured data)
    - F-pattern in speculative zones (uncertainty = linear exploration)
    - Zone 4 inverts (dark background) for the climax
  What I'm least satisfied with:
    - Zone 2-3 boundary feels weak
    - Components don't vary by zone context yet
    - The footer is functional but not composed
```

Pass 2's builder reads: (a) Pass 1's output, (b) Pass 1's conviction artifact, (c) the critic's feedback. The conviction artifact transfers the compositional logic that is invisible in the CSS. The "least satisfied with" section is critical -- it is the builder's own self-assessment, which the Pass 2 builder can act on.

### 10.3 Context Budget Per Pass

| Pass | Input Lines | Cognitive Mode | Peak Context |
|------|-------------|---------------|-------------|
| Pass 1 | TC brief (~100) + constraints (~73) + content (variable) | Generative | ~400-600 lines + content |
| Pass 2 | Pass 1 HTML/CSS (~1000-1500) + conviction (~25) + critic (~80) + TC brief (~100) | Compositional | ~1200-1700 lines |
| Pass 3 | Pass 2 HTML/CSS (~1200-1800) + critic (~50) + polish instruction (~20) | Detail | ~1300-1900 lines |

Pass 2 has the highest context load. This is acceptable -- the builder is reading, not generating from scratch. Reading a 1500-line page is less cognitive load than generating one. The critic's 80-line feedback is the actionable portion; the page is reference.

### 10.4 What Gets Lost Across Passes

Even with the conviction artifact, some compositional reasoning is lost:
- WHY specific CSS values were chosen (the builder's internal value-exploration process)
- ALTERNATIVES that were considered and rejected
- The builder's felt sense of "this section is right but I can't explain why"

This loss is acceptable. The Pass 2 builder brings FRESH perception, which is more valuable than historical reasoning. The conviction artifact preserves WHAT was intended; the fresh instance provides WHY it doesn't fully land yet.

---

## 11. THE SPECIFICATION PARADOX: FEEDBACK THAT INSPIRES RATHER THAN CONSTRAINS

### 11.1 The Paradox Stated

If evaluating contextual quality triggers compliance mode, then iterative feedback could REDUCE quality. The more feedback you give, the more constrained the builder feels, and the less creative surplus it produces. This is the S-01/S-02 chain activated through the iteration channel.

### 11.2 Resolution: The Feedback Is Not Specification

The paradox applies to DIAGNOSTIC feedback (specification of what to fix). It does not apply to DISPOSITIONAL feedback (suggestion of what quality to pursue). Evidence:

- The Middle recipe (~100 lines) was specification -- it told the builder WHAT to do step by step. It produced 4/4 because the recipe was a RECIPE (sequenced actions) not a CHECKLIST (constraints to verify).
- The conventions brief (~610 lines) is specification that CONSTRAINS. It produced compliance.
- The critic's feedback (~80 lines) is IMPRESSION that INSPIRES. "The middle sags" is not a constraint. It is a perception. The builder chooses HOW to address it.

The resolution: feedback that describes WHAT IS PERCEIVED (impression) rather than WHAT MUST CHANGE (directive) does not trigger compliance mode. The critic is an observer, not a supervisor.

### 11.3 The Language Rules for Inter-Pass Feedback

| Instead of... | Say... |
|--------------|--------|
| "FAIL: background delta < 15 RGB" | "I can barely tell zones apart" |
| "Add 3 border-left rules to zones 3-5" | "The structural channel needs more voice" |
| "SC-09 violation: stacked gap 210px" | "There's a void where the page loses momentum" |
| "Deploy 3 additional mechanisms in zone 4" | "Zone 4 feels thin -- what could create weight here?" |
| "Your CCS is 0.20, target is 0.40" | "The mechanisms feel independent -- what connects them?" |

Every diagnostic statement has an artistic equivalent. The artistic version preserves the INFORMATION (zones aren't distinct, voids exist, mechanisms are independent) while removing the COMPLIANCE TRIGGER (explicit thresholds, required actions, numeric targets).

---

## 12. WHAT DOES ITERATION LOOK LIKE FOR OPUS VS SONNET?

### 12.1 Opus as Builder (Recommended for Pass 1 and Pass 2)

Opus treats the critic's feedback as CREATIVE INPUT. It reads "the middle sags" and generates multiple possible responses: denser grid, heavier borders, darker background, silence zone before and after. It selects based on compositional judgment. It may REJECT the critic's suggestion if it has a better idea (Opus maintains creative sovereignty).

Opus's revision process:
1. Re-read the page with the critic's feedback as a lens
2. Identify the compositional opportunities the feedback reveals
3. Design a coherent revision strategy (not per-suggestion fixes)
4. Implement the strategy, touching multiple zones simultaneously
5. Produce a new conviction artifact explaining the revision logic

### 12.2 Sonnet as Builder (Acceptable for Pass 3 Only)

Sonnet treats the critic's feedback as INSTRUCTIONS. "The structural channel needs more voice" becomes "add borders." Sonnet will execute faithfully but won't generate creative surplus. For Pass 3 (terminal craft), this is acceptable -- terminal craft IS execution (add responsive queries, add syntax highlighting, add accessibility features). Creative judgment is not required.

Sonnet's revision process:
1. Read the page
2. Read the critic's feedback
3. Implement each suggestion literally
4. Apply the polish checklist

### 12.3 Model Assignment

| Pass | Builder Model | Critic Model | Rationale |
|------|--------------|-------------|-----------|
| Pass 1 | Opus | -- | Generative composition requires Opus judgment |
| Between 1→2 | -- | Opus | Artistic perception requires Opus aesthetic sense |
| Pass 2 | Opus | -- | Compositional revision requires Opus creative surplus |
| Between 2→3 | -- | Opus | Final impression requires Opus |
| Pass 3 | Opus or Sonnet | -- | Terminal craft can be Sonnet; polish doesn't need creative surplus |
| Final PA | 9 Opus auditors | -- | Standard Mode 4 PA |

**Cost comparison to current pipeline:**
- Current (Middle): 1 Sonnet builder + 9 Opus auditors = ~1 Sonnet + 9 Opus
- 3-Pass: 2-3 Opus builders + 2 Opus critics + 9 Opus auditors = 4-5 Opus + 9 Opus
- Increased cost: ~3-4 additional Opus agent spawns

This is a meaningful cost increase. Justification: the iteration architecture targets Register 3 compositional fluency, which has never been achieved. If Register 3 is worth achieving, 3-4 additional Opus spawns is the minimum investment.

---

## 13. COST-BENEFIT ANALYSIS

### 13.1 Quality Improvement Per Pass

```
                    Single-pass     After Pass 1    After Pass 2    After Pass 3
PA-05 (estimated):  3.0-3.5         3.0-3.5         3.5-4.0         3.5-4.0+
CCS:                0.25-0.40       0.25-0.40       0.40-0.60       0.40-0.60
Register:           2.0-2.5         2.0-2.5         2.5-3.0         2.5-3.0
Mechanisms:         10-14           10-14            12-16           12-16
Terminal craft:     Basic           Basic            Good            Excellent
Accessibility:      Partial         Partial          Partial         Full
```

### 13.2 Where Diminishing Returns Occur

The critical transition is Pass 1 → Pass 2. This is where:
- Atmospheric coupling forms (isolated mechanisms become a density arc)
- Component modulation begins (zone-responsive styling)
- Silence zones appear (mechanism deployment becomes rhythmic)
- The pervading metaphor deepens (from announced to structural)

After Pass 2, the composition is ESTABLISHED. Pass 3 polishes but does not deepen. A hypothetical Pass 4 would risk regression (S-20) more than it would improve quality.

### 13.3 When to Skip Iteration

Not every page needs 3 passes. The iteration architecture should be ADAPTIVE:

**Middle tier (8-10 mechanisms, CCS 0.15-0.35): 1 pass is sufficient.**
The Middle experiment proved this. A 100-line recipe + one pass = 4/4. Iteration adds cost without proportional benefit because Middle tier does not require atmospheric coupling.

**Ceiling tier (12-15 mechanisms, CCS 0.35-0.55): 2 passes recommended.**
Pass 1 (full build) + Pass 2 (atmospheric enrichment). Skip Pass 3 if terminal craft is acceptable from Pass 2.

**Flagship tier (14-18 mechanisms, CCS 0.55-0.80): 3 passes required.**
The full architecture. Flagship quality requires atmospheric coupling (Pass 2) AND terminal craft (Pass 3) AND compositional revision (Pass 2's revision of Pass 1's structural decisions).

### 13.4 Decision Heuristic

```
After Pass 1:
  IF PA-05 >= 3.5 (estimated by critic) AND critic has 0-1 suggestions:
    → Skip to Pass 3 (polish only)
  IF PA-05 >= 3.0 AND critic has 2-3 suggestions:
    → Proceed to Pass 2 (atmospheric enrichment)
  IF PA-05 < 3.0:
    → Something went wrong in Pass 1. Do NOT iterate.
      Instead: diagnose the TC brief or constraint set.
      Iteration cannot rescue a fundamentally flawed first pass.
```

---

## 14. THE FULL 3-PASS PIPELINE SPECIFICATION

### 14.1 Phase 0: Pre-Build (TC + Content Analysis)

Standard TC pipeline: content classification, zone mapping, metaphor derivation, density arc direction, CSS value table, mechanism selection. Produces TC brief (~100-120 lines).

### 14.2 Phase 1: Pass 1 (Opus Builder)

```
SPAWN: Opus builder agent
INPUT: TC brief + minimal constraints (73 lines) + content + 1 exemplar
INSTRUCTION: "Compose a complete, shippable page. Build as if it
  will be published as-is. Attend to the metaphor. Let the density
  arc guide your zone boundaries. You are the composer."
OUTPUT: output-pass1.html + conviction-pass1.md (20-30 lines)
TIME: 20-35 min
```

### 14.3 Phase 2: Critic Review 1

```
SPAWN: Opus critic agent
INPUT: Screenshots of output-pass1.html at 1440px, 1024px, 768px + TC brief (metaphor only)
INSTRUCTION: [The mentor prompt from Section 8.1]
LAWS: Never name a CSS property. Never reference a threshold.
  Always suggest a quality, not an action.
OUTPUT: critique-1.md (50-100 lines: impression + 3 suggestions + preserve list)
TIME: 5-10 min
```

### 14.4 Phase 3: Pass 2 (Fresh Opus Builder)

```
SPAWN: NEW Opus builder agent (fresh instance)
INPUT: output-pass1.html + conviction-pass1.md + critique-1.md + TC brief +
       value table from TC brief
INSTRUCTION: "You are receiving a competent page and a design director's
  impressions. The composition has potential that hasn't been realized yet.
  Revise freely. The page is a draft, not a monument. Deepen the density
  arc, couple the mechanisms, let the metaphor speak through CSS structure.
  You may change anything except what the director explicitly preserved."
OUTPUT: output-pass2.html + conviction-pass2.md
TIME: 15-25 min
```

### 14.5 Phase 4: Critic Review 2

```
SPAWN: Opus critic agent (can be same or new instance)
INPUT: Screenshots of output-pass2.html at 1440px, 1024px, 768px + TC brief
INSTRUCTION: Same mentor prompt, but add: "This is the second draft.
  The composition should be solidifying. Focus on what still doesn't
  land and what detail-level craft is missing."
OUTPUT: critique-2.md (30-50 lines: impression + 1-2 suggestions + preserve list)
TIME: 5-10 min
```

### 14.6 Phase 5: Pass 3 (Opus or Sonnet Builder)

```
SPAWN: Opus or Sonnet builder agent
INPUT: output-pass2.html + critique-2.md
INSTRUCTION: "Polish this page. The composition is established.
  Attend to: responsive behavior (3 breakpoints), accessibility
  (skip link, ARIA, focus-visible, reduced-motion), syntax
  highlighting, footer composition, micro-typography (text-wrap,
  orphans/widows), and any remaining suggestions from the director."
OUTPUT: output-final.html
TIME: 10-20 min
```

### 14.7 Phase 6: Programmatic Gates + Mode 4 PA (Standard)

Standard gate runner + 9-auditor PA. If gates pass and PA-05 >= 3.5, ship. If not, standard single fix cycle (not iteration -- at this point, the composition is final and any remaining issues are mechanical).

### 14.8 Total Pipeline

```
Phase 0: TC analysis           10-20 min
Phase 1: Pass 1 build          20-35 min
Phase 2: Critic review 1        5-10 min
Phase 3: Pass 2 revision       15-25 min
Phase 4: Critic review 2        5-10 min
Phase 5: Pass 3 polish          10-20 min
Phase 6: Gates + PA             15-25 min
-----------------------------------------
TOTAL:                          80-145 min

Cost: 3 Opus builder spawns + 2 Opus critic spawns + 9 Opus auditor spawns
    = 14 Opus agents total
```

Compare to current:
- Middle: ~70-100 min, ~10 agents (1 TC + 1 builder + 1 lead + 9 PA = ~12)
- Flagship (actual): ~240-400 min, ~19 agents
- 3-Pass: ~80-145 min, ~14 agents -- more than Middle, far less than Flagship

---

## 15. ADDRESSING THE DEEPEST CONCERN: CAN REGISTER 3 BE ACHIEVED?

### 15.1 Register 3 Definition (from Report 57)

**Atmospheric coupling:** ALL mechanisms governed by a single directional logic. Zone-by-zone density arc modulates everything (backgrounds, padding, font-weight, letter-spacing, border-weight, component internal spacing, grid density). Component-level modulation. Grid choice as compositional decision. Restraint as active composition. CCS 0.55-0.80.

### 15.2 Why One-Shot Cannot Reach Register 3

Register 3 requires the builder to:
1. Deploy mechanisms in the first pass (generative)
2. See that they are deployed independently (evaluative -- requires seeing the output)
3. Revise them into coordinated coupling (compositional -- requires creative response to the evaluation)

Step 2 cannot happen without rendering. Step 3 cannot happen without a second pass. One-shot conflates steps 1, 2, and 3 into a single generative act, which produces Register 2 at best -- mechanisms deployed with structural coupling (bookending, weight-response) but without atmospheric coupling (all mechanisms governed by one logic).

### 15.3 How the 3-Pass Architecture Reaches Register 3

**Pass 1 produces Register 2.0-2.5:** Mechanisms deployed, bookending, basic density arc. This is the reliable output of a competent one-shot build.

**The critic identifies the atmospheric gap:** "The mechanisms feel independent -- what connects them?" This is the key insight that a builder INSIDE the build cannot perceive.

**Pass 2 produces Register 2.5-3.0:** The builder now KNOWS that mechanisms need coupling (from the critic's feedback) and CAN SEE where coupling is weak (from reading its own output). It revises with coupling as the explicit compositional goal. This is the step that one-shot building cannot take.

### 15.4 Probability Estimates

| Target | Probability with 1 Pass | Probability with 3 Passes |
|--------|----------------------|------------------------|
| PA-05 >= 3.0 | 70-80% | 90-95% |
| PA-05 >= 3.5 | 30-50% | 60-75% |
| PA-05 >= 4.0 | 10-20% | 30-45% |
| Register 3 | 5-10% | 25-40% |
| 14/14 Flagship dims | 0-5% | 15-25% |

The 3-pass architecture roughly DOUBLES the probability of high-quality outcomes. It does not guarantee Flagship. But it moves Flagship from "theoretically possible, never achieved" to "achievable in 1 of 4 attempts."

---

## 16. OPEN QUESTIONS AND RISKS

### 16.1 Can the Critic Maintain Consistency Across Reviews?

The critic sees Pass 1 and Pass 2 screenshots. If it is a fresh instance, it has no memory of what it suggested for Pass 1. The Pass 2 critic might contradict the Pass 1 critic. Mitigation: the Pass 2 critic reads critique-1.md as context.

### 16.2 Will Pass 2 Builders Actually REVISE vs PATCH?

The instruction says "you may change anything" but LLM builders have a documented tendency toward conservative edits (add rather than replace). Mitigation: the conviction artifact's "least satisfied with" section gives the Pass 2 builder explicit license to revise those areas. The fresh-instance approach (Section 7.2.4) also helps -- no authorship attachment.

### 16.3 Does the Additional Cost Justify the Quality Gain?

For Middle tier: no. One pass is sufficient. For Flagship tier: yes, if Flagship quality is the goal. The question is whether the user values the +0.3-0.7 PA-05 improvement enough to accept 14 Opus agents instead of 12. This is a user decision, not an architectural one.

### 16.4 What If the TC Brief Is Wrong?

Iteration cannot rescue a bad TC brief. If the metaphor doesn't fit the content, or the zone map is wrong, or the density arc doesn't serve the content's narrative, 3 passes of building on that foundation will produce 3 passes of compositional mismatch. The pre-build phase (TC analysis) remains the HIGHEST LEVERAGE point. Iteration amplifies good foundations; it cannot create them.

### 16.5 Interaction with Other Pipeline v3 Components

The iteration architecture depends on:
- **Minimal constraint set (Task #2):** Pass 1's prompt must be ~73 lines, not 963
- **Dispositional recipe (Task #3):** Pass 1 must be in composing mode, not complying mode
- **Suppressor-free format (Task #4):** The critic's feedback must follow the 3 Laws to avoid S-20
- **Content-form routing (Task #5):** The TC brief must produce a metaphor and density arc that the builder can embody
- **Activation architecture (Task #8):** The builder must be in composing mode, and the critic must activate perceptual mode

---

## SUMMARY

| Dimension | Design Decision | Rationale |
|-----------|----------------|-----------|
| Number of passes | 3 (build → revise → polish) | Diminishing returns after 3; S-20 risk after 4 |
| What gets evaluated | Compositional qualities: atmosphere, coupling, density arc, designed moments | Not line-by-line. Not gate criteria. Perceptual impressions. |
| How to avoid S-20 | Artistic language, not diagnostic. Critic's 3 Laws. No gates between passes. | Fix cycle regression converts composing to compliance |
| Design critique model | Opus Compositional Critic provides mentor-style feedback | Mentor disposition produces inspiration, not constraint |
| Micro-cycle design | Full-page per pass (not section-by-section) | Holism > incrementalism for cross-zone coherence |
| Context window | Conviction artifacts transfer compositional logic between fresh instances | Fresh instances avoid continuation bias |
| Specification paradox | Feedback describes IMPRESSIONS, not DIRECTIVES | Impressions inspire; directives constrain |
| 3-pass pipeline | Skeleton+metaphor → Atmospheric enrichment → Terminal craft | Maps to Register 2 → Register 2.5-3.0 → polished Register 3 |
| Cost-benefit | +0.3-0.7 PA-05 for ~3-4 extra Opus agents | Highest leverage for Flagship-adjacent quality |
| Opus vs Sonnet | Opus for Passes 1-2 + Critic. Sonnet acceptable for Pass 3. | Creative surplus requires Opus; execution can be Sonnet |
| When to skip | Middle tier: 1 pass. Ceiling: 2 passes. Flagship: 3 passes. | Adaptive cost based on quality target |

**The single most important insight:** True iteration is not "build → evaluate → fix." It is "compose → perceive → deepen." The difference is the cognitive mode of the feedback loop. Fix cycles produce convergence toward compliance. Compositional iteration produces emergence toward atmosphere. The Compositional Critic is the mechanism that makes this distinction concrete.

---

**END OF REPORT 09**

*Iteration architecture: 3-pass pipeline (compose → critique → deepen → critique → polish → verify). Compositional Critic provides artistic feedback using 3 Laws (no CSS properties, no thresholds, no actions -- only qualities). Fresh Opus instances per pass prevent continuation bias. Conviction artifacts preserve compositional logic across passes. Estimated PA-05 improvement: +0.3-0.7 over single-pass. Register 3 (atmospheric coupling, CCS 0.55+) achievable in ~25-40% of attempts, vs 5-10% with one-shot. Total cost: 14 Opus agents, 80-145 min. Adaptive: skip iteration for Middle tier, use 2 passes for Ceiling, full 3 passes for Flagship.*
