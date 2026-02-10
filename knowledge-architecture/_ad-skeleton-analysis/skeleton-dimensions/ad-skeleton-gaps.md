# AD Skeleton Gap Analysis
## What's MISSING from all prior documentation that AD must address

**Analyst:** gap-hunter
**Date:** 2026-02-09
**Sources consumed:** 12 documents (WORKFLOW-METACOGNITION-ANALYSIS.md full, OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md 300 lines, WEAVER-SYNTHESIS.md 200 lines, MASTER-AUDIT-REPORT.md 200 lines, CAPTAIN-TRIAGE-REPORT.md 200 lines, DISCOVERIES-LOG.md 200 lines, MASTER-STATE.md 150 lines, plus all 5 /tmp analysis files)

---

## 1. STRUCTURAL GAPS

### GAP-S01: CSS Architecture Decision Framework for Axis Layouts
**Status: COMPLETELY ABSENT**

No document anywhere specifies HOW axis patterns map to CSS implementation primitives. The ad-analysis-what-ad-is.md describes WHAT each axis is conceptually but never addresses:

- **CSS Grid vs Flexbox**: Z-pattern could use either. F-pattern is naturally flexbox. Bento REQUIRES CSS Grid. Spiral could use Grid or `position: absolute`. Choreography may need `scroll-snap`. No decision framework exists.
- **The grid-template-areas question**: Should AD-003 (Bento Grid) use `grid-template-areas` with named regions or `grid-column`/`grid-row` spanning? Named areas are more readable but less flexible.
- **The `fr` unit question**: R2-4.3 mentions CSS Grid `fr` units. When to use `fr` vs `%` vs `px` for axis layouts? No guidance.
- **Container queries vs media queries**: Axis layouts respond differently to viewport changes. Should AD use container queries for component-level responsiveness? No mention.

**Why this matters:** Without a CSS decision framework, 6 builders will make 6 different implementation choices, creating the same "3 dialects" problem OD experienced.

### GAP-S02: Responsive Behavior of Axis Layouts (1440 vs 768)
**Status: MENTIONED IN HANDOFF BUT NEVER SPECIFIED**

The UI Audit Protocol (MEMORY.md) says "Always audit at 1440px AND 768px." But no document addresses HOW axis patterns should collapse at narrow viewports:

- **Z-pattern at 768px**: The diagonal sweep collapses. Does it become vertical linear? Does Q width change from 60% to 100%?
- **Bento Grid at 768px**: Grid cells can't maintain hierarchy at narrow widths. Do they stack? Collapse into accordion? Which cells get priority?
- **Spiral at 768px**: Spiral geometry is inherently wide. A narrow viewport destroys it. Alternative layout needed.
- **Axis Choreography at 768px**: Hub-spoke radiating outward is impossible on narrow screens. What replaces it?

**The responsive gap is critical because the audit will check at both widths.** Without responsive specifications, builders will either skip 768px or improvise.

### GAP-S03: Accessibility for Axis Navigation
**Status: NEVER ADDRESSED**

No document discusses how screen readers should traverse axis-patterned content:

- **Source order vs visual order**: Z-pattern places elements visually in a zigzag, but source order must be linear. What is the correct source order?
- **CSS `order` property risks**: Using `order` in CSS Grid breaks screen reader navigation. Should AD ban `order` or require `aria-flowto`?
- **Landmark regions in axis layouts**: Does each axis zone need a `<section>` with `aria-label`?
- **Focus order for keyboard navigation**: Tab order follows source order, not visual order. For Bento Grid, what is the expected tab path?

The comprehensive audit found "missing skip-link navigation and focus-visible CSS rules" (STR-DD-004/005) in DD files. AD's more complex spatial layouts make accessibility MORE important, not less.

### GAP-S04: Semantic HTML for Axis Geometry
**Status: NEVER ADDRESSED**

What HTML elements model axis patterns?

- **Bento Grid**: `<div class="bento-grid">` with CSS Grid? Or `<table>` semantics? Or `role="grid"`?
- **Spiral**: Nested sections? `<div>`s with absolute positioning? `<figure>` elements?
- **Choreography transitions**: `<hr>` between axis modes? `<section>` boundaries? CSS-only visual breaks?
- **Z-pattern diagonal**: Visual-only (background element) or semantic (content is actually zigzagged)?

Without semantic guidance, builders will default to `<div>` soup. The structural audit will flag this.

### GAP-S05: Animation/Transition Within Soul Constraints
**Status: PARTIALLY ADDRESSED (anti-physical constraints exist, but axis-specific solutions don't)**

The soul constraints prohibit parallax, shadows, z-depth, and rounded shapes. But axis transitions NEED visual signals. What signals are soul-compliant?

- **Axis transition markers**: When layout changes from Z-pattern to F-pattern mid-page, what marks the transition? Border changes? Typography shifts? Color zone changes?
- **Scroll-triggered state changes**: OD-001 has a scroll-witness sidebar. Is `scroll-snap` soul-compliant? What about `IntersectionObserver` for lazy-loading axis zones?
- **The "flat transition" problem**: How do you signal "the reading direction changes here" without depth, shadow, or animation? OD never solved this because OD pages don't change reading direction.

This is the single hardest DESIGN problem AD faces. No prior exploration has tested axis transitions within soul constraints.

### GAP-S06: Component Reuse Across ADs
**Status: NEVER CONSIDERED**

Can AD explorations share components? The 11 TSX components in the design system (CodeBlock, Table, Callout, etc.) were designed for DD and OD. Do they work inside axis layouts?

- **Callout inside Bento Grid cell**: Does the callout resize correctly? Does it maintain its 2-zone structure?
- **Code block inside spiral zone**: Code blocks are inherently horizontal/wide. How do they fit in spiral's radial geometry?
- **Table inside Z-pattern**: Tables have natural F-pattern internal reading flow. Z-pattern around a table creates conflicting axis signals.

### GAP-S07: Performance Considerations
**Status: NEVER MENTIONED**

Complex CSS Grid layouts (especially Bento and Spiral) can cause layout thrashing and reflow:

- **Grid layout performance**: Bento with many cells and auto-sizing can be computationally expensive.
- **Spiral with transforms**: CSS transforms for spiral positioning trigger GPU compositing. Combined with opacity (the rgba epidemic just cleaned up), this matters.
- **Print/PDF rendering**: Complex Grid layouts often break in print. Should AD include `@media print` rules?

---

## 2. PROCESS GAPS

### GAP-P01: Authority Laundering Prevention
**Status: IDENTIFIED AS A PROBLEM BUT NO SOLUTION PROPOSED**

The iteration-patterns analysis (ad-analysis-iteration-patterns.md, Section "Authority Laundering Concern") documents this clearly: "agent-authored convention specs are treated as research-backed design decisions." The OD-CONVENTION-SPEC.md was agent-authored but is now treated as canonical truth.

**For AD specifically:**
- AD-CONVENTION-SPEC.md will be authored by agents in Wave 0. It will inherit from OD-CONVENTION-SPEC.md. Future agents will treat it as gospel.
- If Wave 0 agents introduce an error in the convention spec, ALL 6 builders will replicate it. The error becomes canon.
- **Missing solution**: Who validates AD-CONVENTION-SPEC.md before builders consume it? The HANDOFF says "convention-first" but not "human-validated convention-first."

**Proposed binary rule to fill this gap:** "AD-CONVENTION-SPEC.md must be committed and human-reviewed BEFORE Wave 1 builders spawn."

### GAP-P02: Citation Theater Detection
**Status: IDENTIFIED BUT NO DETECTION MECHANISM**

The research-landscape analysis warns: "agents will cite findings they didn't meaningfully apply to meet the 80% target." The metacognition analysis confirms: "Apply research rigorously" achieves 6.53% compliance as a judgment rule.

**Missing mechanism:** How does AD's audit detect citation theater? Binary rule: "Can you show me exactly which CSS/HTML element this finding influenced?" is proposed but never operationalized. Who asks this question? How? When?

**Proposed addition:** In the audit phase, structural auditors should run a programmatic check: for each `<!-- R4-NNN -->` comment in the HTML, verify that the NEXT 50 lines of code contain elements that plausibly implement the cited finding. If the comment says `<!-- R4-012: Z-pattern entry point top-left -->` and the next element is a centered header, flag as potential citation theater.

### GAP-P03: The 6.53% Research Application Rate
**Status: DOCUMENTED BUT STRUCTURAL FIX UNKNOWN**

The meta-process analysis proposes converting the top 10-20 research findings to binary rules. But 192 R-4 findings can't ALL be binary. What about the 170+ judgment-based findings?

**The uncomfortable truth**: If binary rules achieve 100% and judgment rules achieve ~0%, then the 170+ judgment R-4 findings will effectively be ignored. The 80% R-4 application target is aspirational unless those findings are converted to binaries.

**Missing framework:** A "research-to-binary conversion protocol" that takes each R-4 finding and asks: "Can this be expressed as a PASS/FAIL check?" If yes, convert it. If no, accept it will not propagate reliably. Track the converted count vs the unconverted count. AD's effective research corpus is ONLY the converted findings plus the inherently-binary soul rules.

### GAP-P04: Artifact Bloat Prevention
**Status: IDENTIFIED BUT NO ENFORCEMENT MECHANISM**

OD produced 218 working artifact files. The triage report recommends 128 ARCHIVE and 7 DELETE. But: the archive was never executed, the deletes were never done.

**For AD:** What prevents AD from generating another 200+ working artifacts? The meta-process analysis proposes "6 meta-artifacts" for AD vs OD's 88. But nothing ENFORCES this limit. Agent teams will create files as needed.

**Missing enforcement:** A binary rule: "The `_ad-working/` directory may contain a MAXIMUM of 30 files. If file count exceeds 30, the oldest non-essential file must be archived or deleted before creating a new one." This creates active artifact pressure.

### GAP-P05: The Orchestrator Trap
**Status: IDENTIFIED, NO MITIGATION**

The metacognition analysis (Part 4, Blindspot I) identifies: "The user is the sole integrating function. The system has zero bus factor." No document proposes how AD reduces this.

**For AD specifically:**
- If the user goes to sleep during AD build (as they did during OD audit), can the system continue? The OD audit ran unattended, but it was read-only (audit). AD BUILD requires judgment: "Is this axis layout good enough?"
- AD's gate-based execution requires someone to check gates between waves. If the user is absent, Wave 2 can't begin after Wave 1 completes.

**Proposed mitigation:** AD gates should be FULLY binary with automated checking. If all gate checks are PASS/FAIL with no judgment, the Lead agent can check gates without human intervention. This means eliminating quality-judgment gates ("Is this good?") and replacing them with mechanical gates ("Does this file exist? Does it pass the soul checklist?").

### GAP-P06: Context Management After Lead Compaction
**Status: DOCUMENTED BUT NOT APPLIED TO AD**

MEMORY.md documents recovery protocols. The metacognition analysis describes the 5-layer memory hierarchy. But for AD specifically:

- **What state files does AD need?** The meta-process analysis suggests eliminating AUDIT-STATE.md and execution journal. Is that safe?
- **What if Lead compacts mid-build?** AD's flat build topology has 8 direct reports. OD's flat 43-agent topology caused compaction. 8 is safer but not guaranteed.
- **What minimal recovery context does AD need?** The tiered document approach says 50-line exec spec. But does the Lead need to re-read all 6 in-progress HTML files after recovery?

**Missing: An explicit AD recovery protocol specifying exactly which files to read in what order after compaction.**

---

## 3. KNOWLEDGE GAPS

### GAP-K01: Zero Prior Testing of Axis Geometry Within KortAI Soul
**Status: UNADDRESSED**

DD tested density within soul. OD tested organization within soul. NEITHER tested axis patterns. We literally do not know:

- Does a Z-pattern work with border-radius: 0? (Probably yes -- Z-pattern is about eye movement, not shape.)
- Does a Bento Grid work without shadows? (Bento relies on cell differentiation -- without shadows, how are cells distinguished? Border-only?)
- Does Spiral Reveal work without depth cues? (This is the highest-risk question. Spirals inherently imply inward movement, which implies z-depth.)
- Does Axis Choreography work without animation? (Choreography implies motion. Soul prohibits parallax and animation-as-effect. How does static choreography work?)

**This is the single largest knowledge gap.** AD is entering completely untested territory. OD at least had DD's density work as foundation. AD has no axis precedent within KortAI soul.

### GAP-K02: The Anti-Physical Constraint on Axis Transitions
**Status: IDENTIFIED AS A RISK BUT NO SOLUTION PROPOSED**

The what-ad-is analysis notes: "AD-004 (Spiral) and AD-005 (Axis Choreography) risk ANTI-PHYSICAL violations through implied depth/movement." It then says "the flat 2D border-weight gradient solution from OD-004 must inform how spiral is implemented."

But border-weight gradients are a DENSITY technique. They don't solve the AXIS problem of "where does the eye go next?" The anti-physical constraint means:
- No parallax scrolling (rules out scroll-driven axis transitions)
- No 3D transforms (rules out spiral z-depth)
- No drop shadows (rules out depth-layered bento cells)
- No gradient-as-light (rules out radial gradient suggesting spiral center illumination)

**What's left?** Typography scale changes, border thickness changes, background color zones, spacing changes, and content width changes. These are ALL density/organization tools, not axis tools. AD needs to discover AXIS-SPECIFIC soul-compliant techniques, and no prior work has explored this.

### GAP-K03: Width-as-Axis — Is Width Variation an Axis Property?
**Status: EXPLICITLY RAISED BUT UNANSWERED**

The what-ad-is analysis (Section 7d) asks: "AD might discover that WIDTH itself is an axis property, not just a density property -- that changing content width IS an axis change."

OD-F-001 established that Q&A width variation (60%/100%) creates TIDAL rhythm. If width IS an axis property, then:
- OD already explored axis geometry without knowing it
- AD-001 (Z-pattern) doesn't need to ADD eye-movement patterns -- the width variation IS the pattern
- The density-organization-axis unification becomes three perspectives on ONE phenomenon

**This is testable.** AD-001 could explicitly test: "Does the 60%/100% width variation create a natural Z-pattern without any additional layout changes?" If yes, width-as-axis is confirmed and the three-way unification holds.

### GAP-K04: The Three-Way Unification Hypothesis
**Status: RAISED BUT NO TEST DESIGN**

OD-F-005 proved "Organization IS Density." The what-ad-is analysis asks whether "compound axis IS compound org-density." No document designs an experiment to test this.

**Proposed test for AD-006:** Build AD-006 by starting with OD-006 (compound organization) and ONLY adding axis-specific CSS (reading direction signals). If the result is perceptually identical to a purpose-built compound axis layout, then axis IS org-density and the unification holds. If the result is perceptually inferior, then axis adds a genuinely independent dimension.

---

## 4. TOOL GAPS

### GAP-T01: CSS Grid Decision Framework
**Status: ABSENT**

| AD Exploration | Likely CSS Approach | Rationale | Open Question |
|---|---|---|---|
| AD-001 Z-Pattern | Flexbox with alternating align-items | Z-movement via alternating element alignment | `justify-content: space-between` for diagonal? |
| AD-002 F-Pattern | Flexbox column, natural document flow | F-pattern is default web reading; may need NO special CSS | Is explicit layout needed, or is default enough? |
| AD-003 Bento Grid | CSS Grid with `grid-template-areas` | Modular cells with named regions | Responsive fallback for narrow viewports? |
| AD-004 Spiral | CSS Grid with absolute positioning overlay OR `clip-path` | Spiral geometry needs explicit coordinates | Performance impact of complex `clip-path`? |
| AD-005 Choreography | CSS Grid + `scroll-snap` + `IntersectionObserver` | Axis transitions triggered by scroll position | Is `scroll-snap` soul-compliant? |
| AD-006 Compound | All of the above, composed | Must demonstrate fractal pattern application | How to compose Grid + Flexbox without conflicts? |

### GAP-T02: scroll-snap Soul Compliance
**Status: NEVER TESTED**

`scroll-snap-type: y mandatory` locks viewport to specific scroll positions. Is this:
- Soul-compliant? (It changes scroll behavior but doesn't add visual effects)
- Anti-physical? (It creates a "locking" sensation that could feel depth-oriented)
- Useful for axis transitions? (It can mark transition points between axis modes)

**This needs a binary ruling:** scroll-snap is ALLOWED or BANNED for AD.

### GAP-T03: CSS Reading Order and `order` Property
**Status: NEVER ADDRESSED**

CSS Grid and Flexbox both support the `order` property, which changes visual order without changing source order. This is:
- An accessibility risk (screen readers follow source order, not visual order)
- Potentially useful for axis patterns (visual Z-pattern with linear source order)
- A maintenance burden (content and presentation diverge)

**Binary ruling needed:** `order` property is ALLOWED with `aria-flowto` or BANNED entirely.

### GAP-T04: Print/PDF Considerations
**Status: COMPLETELY ABSENT**

No document mentions print or PDF output for ANY exploration (DD, OD, or AD). If these explorations will ever be printed or exported to PDF:
- CSS Grid layouts collapse unpredictably in print
- `scroll-snap` is meaningless in print
- Spiral layouts need a completely different print rendering
- Multi-column bento needs single-column print fallback

**This may be out of scope for AD, but should be explicitly declared as such.**

---

## 5. SCALE GAPS

### GAP-SC01: Is 6 the Right Number of AD Explorations?
**Status: ASSUMED, NEVER JUSTIFIED**

DD had 6 explorations. OD had 6 explorations. AD inherits 6. But:

- **Why 6?** DD had 6 because the research identified 6 density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, WAVE, FRACTAL). OD had 6 because there were 6 organizational modes. AD has... 5 axis patterns (Z, F, Bento Grid, Spiral, Choreography) + 1 compound. Is the compound (AD-006) genuinely an axis exploration, or is it a combination exploration that belongs in CD?
- **Could AD drop to 4?** If AD-002 (F-Pattern) is essentially "default web layout" (which it is -- F-pattern is how people read regular web pages), does it need an exploration? AD-004 (Spiral) is flagged as highest soul-compliance risk. If dropped, the risk profile decreases significantly.
- **Should AD expand to 8?** The research landscape analysis identifies 25 distinct axis concepts in R-4. Only 5 are being explored. What about: Gutenberg Diagram, Masonry Grid, Broken Grid, Diagonal Line? Each is a distinct axis technique.

**Missing: A justification document for "6 AD explorations" that addresses alternatives (4, 5, 7, 8).**

### GAP-SC02: AD-004 Spiral Reveal Risk Assessment
**Status: FLAGGED AS RISKY BUT NOT FORMALLY ASSESSED**

Multiple documents flag AD-004 as highest risk:
- what-ad-is.md: "This is the highest-risk AD exploration"
- OD-004 "scored lowest at 34/40 partly for [geological metaphor] reasons"
- Anti-physical constraint directly threatens spiral's implied depth

**Missing: A formal risk-reward analysis for AD-004.** Should it be:
- Kept as-is (accept the risk, learn from it)
- Modified (e.g., "progressive disclosure" without spatial spiral)
- Replaced (e.g., with Gutenberg Diagram or Masonry Grid, which are lower risk)
- Given extra research investment to find soul-compliant spiral techniques

### GAP-SC03: AD-006 Crown Jewel Investment Level
**Status: FLAGGED BUT NOT QUANTIFIED**

The research-landscape analysis recommends "30-40% of bespoke research investment" for AD-006. But:
- Should AD-006 get 2x build time? (OD-006 did, and it scored highest at 36/40)
- Should AD-006 be built LAST to benefit from all prior AD learnings? (OD-006 was)
- Should AD-006 get a dedicated iteration wave after the initial build?

**The HANDOFF explicitly says AD-006 is "Planned as crown jewel from day one" but never specifies what "crown jewel" means in resource allocation terms.**

---

## 6. TRIAGE BACKLOG

### GAP-TR01: 128 ARCHIVE-Flagged Files Never Moved
**Status: COMPLETE TRIAGE REPORT EXISTS, ZERO EXECUTION**

The CAPTAIN-TRIAGE-REPORT.md documents:
- 14 KEEP
- 128 ARCHIVE (22.3MB, 97.6% of assessed storage)
- 6 DELETE (30KB)

**Zero of these actions have been executed.** The triage report was committed as part of the comprehensive audit (commit 71dc02c) but the actual file moves/deletes never happened.

**For AD, three options:**
1. **Execute triage before AD build** -- Removes 22.3MB of clutter, reduces directory confusion for agents navigating the filesystem. Cost: ~15 min + 1 commit.
2. **Execute triage after AD build** -- Bundle with AD's own artifact cleanup. Risk: agents may read stale files during AD build.
3. **Defer indefinitely** -- Accept the clutter. The files are in underscore directories which agents can be told to ignore.

**Recommendation:** Option 1. Quick win. Reduces cognitive load for AD agents. The 20MB `_od-reenrichment/screenshots/` directory is 87% of the archivable storage.

### GAP-TR02: Delete Actions Never Executed
**Status: 6 FILES IDENTIFIED, ZERO DELETED**

The 6 DELETE files are all stale state-tracking documents for completed phases:
- AUDIT-STATE.md
- INDEX.md
- REMEDIATION-STATE.md
- CLAUDE.md (in _od-reenrichment/)
- RE-ENRICHMENT-STATE.md
- CURRENT-STATE.md (in _execution-journal/)

**Total: 30KB.** Zero risk to delete. No inbound references.

---

## 7. META-PROCESS GAPS

### GAP-M01: Two-Session vs Three-Session Debate
**Status: DEBATED, NOT RESOLVED**

The meta-process analysis argues for 2 sessions (Think+Compile, Execute), eliminating the formal revision instance. The metacognition analysis identifies continuation bias as a fundamental LLM limitation (Paradox 5) that makes self-revision unreliable.

**Unresolved tension:**
- The revision instance caught 56 factual errors in one documented case. That's significant.
- BUT: If AD prompts are all binary rules (<200 lines each), there's much less to revise.
- BUT: AD-CONVENTION-SPEC.md is the highest-value artifact. A factual error there propagates to all 6 builders. This ONE document arguably needs revision.

**Proposed resolution:** 2-session for AD overall. But AD-CONVENTION-SPEC.md gets a focused revision pass (self-revision checklist + human review) before Wave 1 spawns. This is a hybrid: skip the full revision instance, but verify the single highest-risk artifact.

### GAP-M02: Judgment Requirements in AD That Can't Be Binarized
**Status: UNADDRESSED**

The meta-process analysis says "Every AD agent prompt should contain ONLY binary rules." But some AD decisions inherently require judgment:

- **"Does this spiral layout imply physical depth?"** -- This is perceptual, not binary. What looks flat to one viewer may look deep to another.
- **"Does this axis transition feel abrupt or smooth?"** -- Transition quality is a judgment call.
- **"Is this bento cell hierarchy clear?"** -- Hierarchy legibility is subjective.
- **"Does this Z-pattern diagonal feel natural?"** -- Eye movement naturalness is perceptual.

**The honest answer:** Some AD-specific decisions REQUIRE judgment. The binary-only principle is correct for CONSTRAINTS (soul, convention, structure) but insufficient for DESIGN QUALITY.

**Proposed hybrid:** Binary rules for compliance. Fresh-eyes agent for design quality assessment (judgment). The fresh-eyes agent is the ONLY agent allowed to make judgment calls. All other agents follow binary rules only.

### GAP-M03: Agent Team Size Uncertainty
**Status: RANGE GIVEN, NO DECISION**

Various analyses propose different team sizes:
- meta-process analysis: "14 total across 4 phases" (minimum viable)
- iteration-patterns analysis: "25-30 agents total" (lean)
- OD precedent: 153+ agents (actual)

**The range is 14-30 for AD, but no document makes the final call.** This is because team size depends on:
- Number of explorations (assumed 6)
- Whether captains are used for build (recommended: no)
- Whether separate research agents are needed (recommended: yes, 2-3)
- Whether audit uses hierarchy (recommended: yes, for audit phase only)

**Proposed team allocation:**

| Phase | Agents | Roles |
|---|---|---|
| Phase 0 (Convention) | 3 | Lead + 2 researchers |
| Phase 1 (Build) | 9 | Lead + 6 builders + Weaver + Scribe |
| Phase 2 (Audit) | 8 | Lead + 3 visual + 1 fresh-eyes + 1 structural + 1 secondary-concerns + Weaver |
| Phase 3 (Fix) | 5 | Lead + 3 fixers + 1 verifier |
| **Total** | **~21** | **(Lead counts once)** |

### GAP-M04: The "Thin Lead" Paradox for Axis Quality
**Status: UNADDRESSED**

The "thin lead" principle says Lead should NEVER build, NEVER run Playwright, only orchestrate. But for AD, Lead needs to evaluate axis quality: "Does this Z-pattern actually guide the eye?" This requires LOOKING at the HTML.

**Options:**
1. Lead looks at screenshots taken by audit agents (indirect visual assessment)
2. Lead trusts fresh-eyes agent's quality judgment (delegation of judgment)
3. Lead briefly uses Playwright for spot-checks (breaks thin-lead rule)
4. Quality assessment is deferred to the human after commit (breaks the in-session feedback loop)

**The OD precedent suggests Option 1** (Lead looked at verification screenshots but never ran Playwright directly). But axis layouts may require more nuanced visual assessment than density/organization patterns.

**Missing: An explicit ruling on whether Lead may view Playwright screenshots (not run Playwright) during build phase.**

---

## 8. CROSS-CUTTING GAPS

### GAP-X01: MASTER-STATE.md Is Stale
**Status: CRITICAL**

MASTER-STATE.md shows "Last Updated: 2026-02-04" and "Step: 2.2 (Organizational Explorations) -- OD-001 next." But OD is DONE (6 explorations built, audited, re-enriched, comprehensively audited, and committed). MASTER-STATE.md was never updated past the DD re-audit phase.

**For AD:** MASTER-STATE.md must be updated to reflect:
- All 6 OD explorations complete
- All OD audits complete
- Current position: AD phase (Step 2.3)
- OD scores and curation status

### GAP-X02: DISCOVERIES-LOG.md Has Zero OD Entries
**Status: CRITICAL**

DISCOVERIES-LOG.md tracks explorations with scoring and curation decisions. It has detailed entries for DD-001 through DD-006 but ZERO entries for OD-001 through OD-006. OD explorations were built, scored (34.1 avg per meta-process analysis), and all 6 INCLUDE, but this was never recorded in DISCOVERIES-LOG.md.

**For AD:** Before building, DISCOVERIES-LOG.md should be updated with:
- All 6 OD entries (scores, decisions, key findings)
- AD section header (even if empty initially)
- Updated "Explorations Completed" count: 12/24 minimum (6 DD + 6 OD)

### GAP-X03: Research Application Tracking Gap
**Status: SYSTEMIC**

The showcase CLAUDE.md mandates updating RESEARCH-ACTIVE.md after every piece of work. But the 43-agent re-enrichment and 58-agent comprehensive audit both modified the system without updating RESEARCH-ACTIVE.md comprehensively. The tracking document itself is now stale.

**For AD:** Either:
1. Enforce RESEARCH-ACTIVE.md updates by making it a binary gate check ("Does RESEARCH-ACTIVE.md have an entry dated today? YES/NO")
2. Accept that RESEARCH-ACTIVE.md is aspirational and use a simpler tracking mechanism (e.g., "R-4 findings cited in HTML comments" -- programmatically countable)

### GAP-X04: The rgba() Fix Verification Gap
**Status: FIX ASSIGNED BUT VERIFICATION UNKNOWN**

The comprehensive audit found 102 rgba() opacity instances across 10/12 pages (CRITICAL). Fixes were assigned in MASTER-AUDIT-REPORT.md. But were the fixes actually applied and committed? The comprehensive audit committed 10 Critical/High fixes (commit 71dc02c) but the fix allocation lists 7 fixers. Were all rgba() instances addressed?

**For AD:** If rgba() opacity was only partially fixed in OD/DD files, AD builders must know the current ground truth. Otherwise they may copy patterns from partially-fixed OD files and reintroduce rgba() opacity.

### GAP-X05: The Convention Spec Inherits OD But Must Extend for AD
**Status: DISCUSSED BUT EXTENSION PROTOCOL ABSENT**

OD-CONVENTION-SPEC.md (468 lines) defines conventions for OD. AD inherits these. But AD needs ADDITIONAL conventions for:
- Axis-specific CSS custom properties (e.g., `--axis-direction`, `--grid-template`)
- Axis zone naming (OD has 3-zone system: header, content, footer. Does AD add sub-zones?)
- Axis transition markers (what HTML/CSS pattern signals "the axis changes here"?)
- Responsive breakpoints for axis collapse

**Missing: A list of specific convention items that AD-CONVENTION-SPEC.md must add beyond OD's spec.**

---

## 9. SUMMARY: TOP 10 GAPS BY IMPACT

| Rank | Gap ID | Gap | Impact | Difficulty to Fill |
|---|---|---|---|---|
| 1 | GAP-K01 | Zero prior testing of axis geometry within KortAI soul | CRITICAL -- entering untested territory | HIGH -- requires experimentation |
| 2 | GAP-S05 | Animation/transition within soul constraints | CRITICAL -- axis transitions need visual signals | HIGH -- genuinely novel problem |
| 3 | GAP-S01 | CSS architecture decision framework for axis layouts | HIGH -- prevents "3 dialects" repeat | MEDIUM -- can be specified in convention |
| 4 | GAP-S02 | Responsive behavior (1440 vs 768) | HIGH -- audit will check both widths | MEDIUM -- per-pattern specification |
| 5 | GAP-P01 | Authority laundering in AD-CONVENTION-SPEC.md | HIGH -- error propagates to all builders | LOW -- human review gate |
| 6 | GAP-X01 | MASTER-STATE.md stale | HIGH -- agents reading it get wrong position | LOW -- update before AD |
| 7 | GAP-X02 | DISCOVERIES-LOG.md missing OD entries | HIGH -- tracking gap | LOW -- add entries |
| 8 | GAP-S03 | Accessibility for axis navigation | MEDIUM -- real users affected | MEDIUM -- research needed |
| 9 | GAP-M02 | Judgment requirements that can't be binarized | MEDIUM -- limits binary-only approach | MEDIUM -- hybrid design |
| 10 | GAP-SC02 | AD-004 Spiral risk assessment | MEDIUM -- may waste resources on impossible task | LOW -- formal decision |

---

## 10. RECOMMENDATIONS FOR AD SKELETON

1. **Address GAP-K01 and GAP-S05 FIRST.** Before building AD, the skeleton should include a "soul-compatibility assessment" for each axis pattern. For AD-004 Spiral and AD-005 Choreography, this assessment may determine that the pattern needs modification or replacement.

2. **Include CSS architecture decisions in AD-CONVENTION-SPEC.md (GAP-S01, GAP-S04).** Every AD exploration should have a specified CSS approach (Grid vs Flexbox) and semantic HTML structure.

3. **Specify responsive behavior per pattern (GAP-S02).** Each AD exploration needs explicit 768px collapse rules.

4. **Human-review gate for AD-CONVENTION-SPEC.md (GAP-P01).** This is a low-cost, high-impact gate that prevents the authority laundering problem.

5. **Update MASTER-STATE.md and DISCOVERIES-LOG.md BEFORE AD begins (GAP-X01, GAP-X02).** 15-minute housekeeping that prevents downstream confusion.

6. **Execute triage backlog (GAP-TR01, GAP-TR02).** Move 128 files to archive, delete 6 stale files. Reduces noise for AD agents.

7. **Make a formal decision on AD-004 Spiral (GAP-SC02).** Keep, modify, or replace. Don't defer.

8. **Design the fresh-eyes agent as the judgment proxy (GAP-M02).** Binary rules for all agents except fresh-eyes, which is allowed judgment calls on design quality.

---

## End of Gap Analysis
