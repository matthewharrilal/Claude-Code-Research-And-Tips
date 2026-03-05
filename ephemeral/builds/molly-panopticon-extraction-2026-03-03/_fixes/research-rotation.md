# Research: 3-Pass Rotation System

## Summary Verdict

The rotation system works mechanically -- each pass adds measurable value -- but the design creates a **conservative convergence pattern** rather than a true creative ratchet. The three passes don't produce three meaningfully different creative perspectives. They produce one perspective that gets progressively more cautious. The decisions.md handoff works for factual continuity but fails to transmit creative intent.

---

## 1. What Each Pass Actually Did (Measured)

### Pass 1: STRUCTURE (2153 lines)
- Built the entire zone skeleton: 5 zones, all content placed, all 8 mechanisms deployed
- Explored 4 of 7 compositional questions (Q1, Q3, Q6, Q7)
- Adopted 1 structural proposition (bento grid), rejected 1 (bilateral gaze)
- Created all custom properties, transition table, responsive breakpoints
- **This pass made 100% of the structural decisions.** Everything after is refinement.

### Pass 2: ENRICHMENT (2610 lines, +457 lines, +21%)
- Added 528 lines, removed 71 lines (net +457)
- Deployed 24 research findings zone-by-zone (new CSS classes, components)
- Explored 3 remaining questions (Q2, Q4, Q5) -- achieved 7/7 coverage
- Added running headers (Finding 12), pull quotes (Finding 8), file tree component (Finding 16), code block labeling (Finding 15), epistemic confidence marks (Q4/OD-004), provocation class (Finding 9)
- Integrated 3 case study techniques (DD-004 spacing, OD-004 confidence, DD-003 grid)
- Zero structural evolution -- kept all zone boundaries exactly as Pass 1 set them
- **This pass added genuine enrichment.** New components, new CSS classes, new semantic layers.

### Pass 3: HARDENING (2663 lines, +53 lines, +2%)
- Added 80 lines, removed 27 lines (net +53)
- 5 categories of change:
  1. **Zone boundary color fix:** #FFFFFF to #EBE7E3 for 15-point delta compliance (the single most impactful change)
  2. **Sub-perceptual letter-spacing widened:** -0.003em to 0, -0.005em to -0.01em, -0.008em to -0.02em (mechanical compliance)
  3. **13 inline styles promoted to CSS classes** (code quality, not visual change)
  4. **Prose max-width 70ch** added (new pattern)
  5. **Code wall / callout adjacency safety margins** (defensive rules)
- **No new creative decisions.** Every change was either a measurement fix or code cleanup.

---

## 2. Does Rotation Give Primacy Position or Just Different Text Ordering?

**Different text ordering that creates functional primacy.** The design intends this:

| Pass | Sees First | Intent |
|------|-----------|--------|
| Pass 1 | Soul + Mechanisms + Questions + Structural Propositions (Package S0/S1/S2/S10/S11) | Build from conviction |
| Pass 2 | Findings + Zone Architecture + Case Studies (Package S3/S4/S5) | Enrich from research |
| Pass 3 | Anti-patterns + Validated CSS + Structural Props (Package S6/S7/S8) | Harden from defense |

**The material is genuinely different.** Pass 1 gets ~24K of mechanism descriptions and compositional questions. Pass 2 gets ~25K of zone-mapped findings and case study CSS. Pass 3 gets ~16K of anti-patterns and validated CSS patterns. The synthesizer splits the research into three non-overlapping packages.

**But the primacy effect is real.** Pass 1's reading order (conviction brief -> content -> tokens) meant the builder internalized the metaphor *before* touching CSS. Pass 3's reading order (anti-patterns -> decisions -> HTML) meant the builder read the page *looking for problems*, not creative opportunities. This is by design and it works: Pass 1 created the creative structure, Pass 3 found measurement failures. The system does what it claims.

**The question is whether 3 separate agents are needed for this.** A single agent reading the combined material in a structured order -- mechanisms first, then findings, then anti-patterns -- might produce the same output trajectory. The rotation adds cost (3 agent invocations, 3 reading phases) but the creative contribution is heavily front-loaded to Pass 1.

---

## 3. Did Pass 2 Enrich or Add More of the Same?

**Pass 2 genuinely enriched.** The 528 added lines include:

- **New components:** `.provocation`, `.pull-quote`, `.code-block--labeled`, `.code-header`, `.file-tree`, `.zone-label::before`, `.survey-mark--{triangulated,measured,contour}`, `.contour-warning`, `.breathing-transition`, `.resolution-footer`, `.serif-to-mono-bridge`, `.code-bridge`
- **New semantic layers:** Epistemic confidence encoding (Q4), fractal CRESCENDO at 3 scales (Q5), temperature mapping (Finding 20)
- **Structural HTML changes:** `<pre>` blocks replaced with `.file-tree` components, prose bridges inserted between code blocks

This is NOT "more of the same." Pass 2 added components and semantic layers that Pass 1 didn't conceive. The 24 findings provided specific CSS actions that generated real visual differentiation.

**However:** Pass 2 made zero changes to the zone skeleton. It added density *within* zones but didn't challenge any structural decision Pass 1 made. The prompt explicitly says "do not create new zones" and "preserve the zone skeleton." Pass 2 was told to work within Pass 1's frame. It did.

---

## 4. Did Pass 3 Harden or Just Check?

**Pass 3 mostly checked.** The 151-line diff between Pass 2 and Pass 3 is dominated by:

- A color value change (#FFFFFF -> #EBE7E3) replicated across 3 variables
- Letter-spacing values widened (5 instances)
- 13 inline styles promoted to CSS classes (no visual change)
- 34 lines of new defensive CSS rules

The single most creative decision Pass 3 made was changing the Survey Grid background from white to warm gray. Everything else was measurement compliance or code cleanup.

**Pass 3's prompt explicitly says:** "This is a HARDENING pass, not a creative pass. Do not add new features." And: "The best Pass 3 outcome is a page that looks identical to Pass 2 but has zero audit-catchable issues." Pass 3 did exactly what it was told. But "exactly what it was told" means a near-zero creative contribution.

**The conservative ratchet manifests here.** Pass 3 could only subtract or fix. The prompt's "impulses resisted" section is revealing:
1. Wanted to add background pattern to Survey Grid -- resisted (creative, not defensive)
2. Wanted to restructure quote collection -- resisted (structural, not defensive)
3. Wanted to extend Q1 with font-size variation -- resisted (enrichment, not hardening)

All three resisted impulses were things the builder thought would improve the page. The prompt forbade them. These unexecuted improvements are the conservative ratchet in action: the builder identified problems it was not permitted to fix.

---

## 5. The Conservative Ratchet Analysis

### Where the Ratchet Operates

The ratchet doesn't operate between Pass 1 and Pass 2. Pass 2 genuinely adds. It operates between Pass 2 and Pass 3, and then between Pass 3 and the auditors:

1. **Pass 3 can only subtract or fix.** "Do not add new features. Fix, polish, and verify." This means any creative energy the Pass 3 builder has is explicitly suppressed.

2. **Pass 3 inherits ALL of Pass 1 and Pass 2's decisions as constraints.** "Preserve all custom property names. Do not restructure zone architecture." The design space shrinks with each pass.

3. **Anti-pattern checks are mechanically conservative.** "Letter-spacing must be >= 0.025em." "Background deltas must be >= 15 RGB points." These are floors, not ceilings. Meeting them produces adequate output, not rich output. Pass 3 widened letter-spacing to exactly 0.025em (the minimum) -- not to a value that would produce stronger visual effect.

4. **The 3 resisted impulses are lost.** No mechanism exists to carry Pass 3's creative suggestions forward. The reflection documents them, but the refine builder in Phase 5 only reads the reflection to understand "unresolved tensions," not to execute creative improvements. The impulses die.

### Where the Ratchet Does NOT Operate

The ratchet is NOT a pure creativity drain:
- Pass 1 -> Pass 2 is genuinely additive (+21% code, new components, new semantic layers)
- The transition table grew from sparse zone descriptions to 7-channel-per-boundary documentation
- 7 of 7 compositional questions were explored across the passes (4 in Pass 1, 3 in Pass 2)

### Net Assessment

**The conservative ratchet is mild but real.** The rotation system produces adequate-to-good output on the first pass, genuinely enriches on the second, and then locks in on the third. The third pass's defensive posture prevents it from addressing issues it can clearly see (quote monotony, background pattern opportunity, Q1 channel extension). A 2-pass system (build + enrich/harden combined) might produce a similar quality outcome at 67% of the agent cost.

---

## 6. The Decisions.md Handoff: Does It Work?

### What Works

- **Factual continuity is maintained.** Pass 2 read Pass 1's decisions and used the same zone names, custom property names, and CSS vocabulary. No naming conflicts, no contradictions.
- **Zone architecture survived.** All 5 zones from Pass 1 persisted through all 3 passes. The bento grid remained the only structural break.
- **Mechanism tracking works.** The "Mechanisms Deployed" section in Pass 1 decisions let Pass 2 know not to re-deploy M01-M08.
- **Question handoff works.** Pass 1's "Questions NOT Explored" section directly fed Pass 2's question exploration. All 7 were covered.

### What Fails

- **Creative intent is flattened.** Pass 1's decisions say "bento grid as `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`." This transmits the WHAT but not the WHY -- the cartographic metaphor, the surveyor mapping domains, the feeling of taxonomic structure. Pass 2 reads a CSS spec, not a creative vision.
- **The "Why" lives in the TC brief, not in decisions.** But Pass 2's reading order is: package -> decisions -> HTML. The TC brief is not in Pass 2's reading list at all. Pass 2 inherits Pass 1's interpretation of the brief, compressed into 70 lines of factual notes.
- **Pass 1 decisions were extracted after agent expiry.** The pipeline log notes: "Pass 1 agent expired mid-run but HTML completed, decisions extracted manually." This means the decisions file wasn't written by the builder -- it was reverse-engineered from the HTML. The builder's actual creative reasoning was lost with the agent session.
- **Structural decisions are inherited without questioning.** Pass 2's prompt says "do not create new zones." This means if Pass 1 made a bad structural call, Pass 2 cannot fix it. And Pass 3 definitely cannot. The first builder's structural decisions are permanent.

### The Compression Problem

Pass 1's 2153-line HTML contains the full creative expression. Pass 1's 70-line decisions file compresses that at a 30:1 ratio. Crucially, the decisions file transmits:
- **Zone names and backgrounds** (well-transmitted)
- **Mechanism deployment status** (well-transmitted)
- **Question exploration channels** (well-transmitted)
- **Responsive strategy** (mentioned but not detailed)
- **Creative reasoning** (almost entirely absent)
- **Transition logic** (mentioned as "exists in HTML comment" -- delegation, not transmission)
- **Trade-offs considered** (absent until Pass 3 reflection)

The handoff is adequate for factual continuity but insufficient for creative continuity. Each successive builder works with increasingly compressed creative context.

---

## 7. What About a Single Pass With All Info?

### Arguments For Single Pass

1. **Pass 1 already makes all structural decisions.** Pass 2 and 3 operate within Pass 1's frame. A single agent with all material could make those structural decisions AND deploy findings AND harden, in one pass.

2. **No compression loss.** A single agent has full creative context throughout. No 30:1 compression through decisions files. No lost impulses.

3. **The material is not that large.** Packages total 725 lines. Plus prompts (~400 lines each x 3 = 1200 lines, but only one prompt needed for single pass). The TC brief is 396 lines. Content is ~2000 lines. Total input: ~3000-4000 lines. This fits comfortably in an Opus context window.

4. **Cost savings.** 1 agent invocation instead of 3. No decisions files needed.

### Arguments Against Single Pass

1. **Reading order genuinely matters.** The conviction-first -> mechanisms -> findings -> anti-patterns sequence produces different cognitive framing than receiving everything at once. The single-pass agent would need explicit sequencing instructions ("read sections in this order, build in this order").

2. **Context window pressure at build time.** A single agent writing 2663 lines of HTML while holding 4000 lines of input AND anti-pattern checklists AND case study CSS may hit practical output limits or produce less detailed output due to attention splitting.

3. **The enrichment phase IS demonstrably additive.** Pass 2's 528 added lines aren't redundant. A single agent might stop at Pass 1's level of detail (2153 lines) if not prompted to continue enriching.

4. **Fresh eyes catch different things.** Pass 3's zone boundary color fix (#FFFFFF -> #EBE7E3) is the kind of measurement problem that benefits from a separate audit pass. The builder who chose #FFFFFF wouldn't catch their own sub-threshold delta.

### Net Assessment

A **2-pass system** (build/enrich combined + harden) is likely the optimal middle ground. The build and enrichment phases share creative intent and benefit from continuous context. The hardening phase benefits from fresh defensive eyes. This would:
- Eliminate one agent invocation
- Eliminate one decisions file compression step
- Preserve the "fresh eyes" anti-pattern detection
- Give the build/enrich agent full creative latitude without the "do not restructure" constraint that currently limits Pass 2

---

## 8. The "Impulses Resisted" -- What They Reveal

The builder reflection's "Impulses Resisted" section is the most revealing artifact for understanding the conservative ratchet:

1. **"Wanted to add a subtle background pattern to the Survey Grid"** -- after changing from white to warm gray, the builder felt the drafting table metaphor had weakened and wanted to reinforce it. This is a legitimate creative response to a measurement-driven change. The system forced a metaphor sacrifice (white -> gray for delta compliance) and then prevented creative compensation (no patterns in Pass 3).

2. **"Wanted to restructure the Projection zone's quote collection"** -- 9 blockquotes stacked vertically is monotonous. The builder saw this. Both the builder and later the PA auditors flagged it (Issue 2 in Phase 4: "Key quotes collection monotony"). The system made the builder SEE the problem and REFUSE to fix it, then made the auditors FIND the same problem and route it to Phase 5 for fixing. Two agents independently identified the same issue; one was blocked from acting.

3. **"Wanted to extend Q1 with font-size variation"** -- creative deepening of an existing compositional question. The system identified this as "enrichment, not hardening" and blocked it. This is the most clear-cut conservative ratchet: the system found a creative improvement and explicitly prohibited it.

All three impulses were eventually either addressed in Phase 5 (quote monotony was fixed) or left unresolved (background pattern, Q1 extension). The ratchet delayed resolution by one full phase for one issue and permanently blocked two others.

---

## 9. Key Findings

### Finding 1: The Rotation Is Front-Loaded
Pass 1 contains 100% of structural decisions, ~80% of creative expression, and ~60% of total CSS. Passes 2-3 are iterative refinement within Pass 1's frame. The system's three passes are not equal creative contributions -- they're a main build plus two refinement layers.

### Finding 2: Pass 2 Enrichment IS Valuable
The 24-finding deployment and 3 new compositional questions represent genuine creative addition. This is not rubber-stamping. The enrichment pass produces components and semantic layers that Pass 1 didn't conceive. The value comes from the research package's zone-by-zone CSS actions, not from "fresh perspective."

### Finding 3: Pass 3 Is an Expensive Linter
53 net lines added. Zero creative decisions. A mechanical anti-pattern checker could do 80% of Pass 3's work (grep for sub-perceptual values, compute RGB deltas, promote inline styles). The 20% requiring judgment (zone boundary color choice) could be handled as a verification step in a combined enrichment pass.

### Finding 4: The Decisions Handoff Transmits Facts, Not Intent
Creative reasoning is lost at each compression step. The 30:1 ratio from HTML to decisions file preserves what was built but not why. The TC brief (the richest creative document) is only read by Pass 1 -- Passes 2-3 inherit a compressed shadow of it.

### Finding 5: The Conservative Ratchet Is Mild But Real
Each pass can do less than the previous one. Pass 1 can do anything. Pass 2 can enrich within zones but not restructure. Pass 3 can fix measurements but not enrich or restructure. Creative latitude decreases monotonically. The "impulses resisted" are the visible symptoms.

### Finding 6: The System Catches Its Own Mistakes (Slowly)
Quote monotony was independently flagged by Pass 3 builder (impulse resisted) and by 5/5 PA auditors. It was fixed in Phase 5. This roundabout path -- builder sees problem, can't fix it, auditors rediscover problem, fix cycle resolves it -- works but adds a full agent cycle of latency and cost.

### Recommendation
Consider a **2-pass architecture**: (1) Build+Enrich with full creative latitude and all material available, reading conviction brief first and anti-patterns last; (2) Harden+Verify as a defensive-only pass with fresh eyes. This eliminates the decisions compression step between Passes 1-2, preserves fresh-eyes hardening value, and removes the most constrained agent (Pass 3 at +2% contribution).
