<!--
===============================================================================
INLINE THREADING HEADER
File: docs-spa/app/showcase/POST-CD-PIPELINE/02-POST-CD-PHASES.md
Tier: B | Generated: 2026-02-11 | Updated: 2026-02-13

1. WHY THIS EXISTS
Documents the complete updated post-CD phase sequence from CD completion through
full migration, incorporating the two-track reality (assembly vs composition),
component taxonomy discoveries, and tension-composition/perceptual-auditing skill
integration. Describes phase reordering, extraction scope reconception, and the
new validation pass.

3. STATUS
ACTIVE -- updated to reflect pipeline evolution research

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| _SOURCE-BRIEF.md                        | Research foundation references         |
| _pipeline-evolution-research/           | New two-track model research           |
| _component-taxonomy-research/           | Component extraction scope research    |
| tension-composition skill               | Track 2 compositional process          |
| perceptual-auditing skill               | Quality assurance + guardrails         |

===============================================================================
END INLINE THREADING HEADER
===============================================================================
-->

# 02 — The Post-CD Pipeline: From Completion Through Migration

## How Pipeline Evolution Research Revealed the Two-Track Reality

===

## Why This Document Exists

The original pipeline reads: DD -> OD -> AD -> CD -> Migration. Five stages. Clean. Linear. And dangerously incomplete.

Between "CD is done" and "start migrating pages," there is infrastructure that no existing document acknowledged until systematic gap analysis exposed it, followed by component taxonomy research and pipeline evolution analysis. That research — conducted across 15+ source files, validated through 15 tension-test HTML layouts, and verified through two specialized skills (tension-composition and perceptual-auditing) — revealed the architecture that makes migration achievable while honoring the user's non-negotiable: "Once we start migrating actual documentation pages, I don't want to have to update the design system."

This document describes the complete updated post-CD pipeline: what it produces, what it consumes, why it exists in this specific order, and what happens if phases are skipped or reordered. It also describes the FREEZE LINE — the non-negotiable boundary after which the design system cannot change — and the two fundamentally different execution tracks that migration follows.

===

## The Fundamental Discovery: Two Tracks, Not One

Pipeline evolution research uncovered a reality that changes everything: **migration is not a uniform process**. There are two categorically different execution tracks:

### Track 1 (Assembly) — 40-50% of pages
- **What it is:** Deterministic pattern selection + mechanical component assembly
- **Cognitive demand:** Lookup table application ("Tutorial → CRESCENDO + F-Pattern")
- **Process:** Read content → classify type → select pattern triple → assemble from library
- **Timeline:** 45-90 minutes per page
- **Parallelizable:** Yes (6 agents, 6 pages simultaneously)
- **Quality ceiling:** Consistently good, narrow variance
- **Examples:** Tutorials, reference docs, Q&A pages, task-based guides

### Track 2 (Composition) — 50-60% of pages
- **What it is:** Tension-driven metaphor selection + compositional layout generation
- **Cognitive demand:** Creative synthesis ("Reader needs safety navigating uncertainty")
- **Process:** Read content → identify tension → find metaphor → generate composition → build
- **Timeline:** 3-5 hours per page
- **Parallelizable:** No (creative bottleneck, 2-3 concurrent max)
- **Quality ceiling:** Higher peaks, higher variance (mitigated by guardrails)
- **Examples:** Onboarding, conceptual overviews, philosophy docs, troubleshooting guides

**Why this matters:** Track 1 uses the design system as a **printing press** (apply pre-built templates). Track 2 uses the design system as an **alphabet and vocabulary** (compose fresh prose from reusable primitives). Both are valid. Both are necessary. Both need distinct specifications.

The tension-composition pipeline test proved this empirically: 15 layouts across 3 content sets showed that pipeline-generated compositions (Track 2) achieved the highest quality peaks (top 3 layouts: Playbook Elevation Map, Gas Town Floor Plan, Boris Geological Core — all Track 2), but also required guardrails to prevent visual compromise.

===

## The Component Taxonomy Discovery: What's Extractable vs What's Compositional

Component taxonomy research analyzing all 24 validated explorations (6 DD + 6 OD + 6 AD + 6 CD) found:

### The Four Tiers

| Tier | What It Is | Extractable? | Coverage |
|------|-----------|-------------|----------|
| **Tier 1 (Atoms)** | Design tokens, soul constraints | 100% (~80 lines CSS) | Universal foundation |
| **Tier 2 (Molecules)** | Styled elements with locked structure | 90%+ (~175 lines CSS) | Core vocabulary |
| **Tier 2.5 (Patterns)** | Reusable layout systems requiring judgment | 70% (~145 lines CSS) | Sophisticated primitives |
| **Tier 3 (Organisms)** | Metaphor-driven spatial arrangements | 0-30% (prose only) | Compositional variety |

**Total extractable CSS: ~400 lines, covering 60-70% of any file.**

**The remaining 30-40% (Tier 3) cannot be extracted — it must be composed fresh per page from the page's unique tension.**

### What This Means for Extraction

The original vision of component extraction as a "printing press" that produces "layout primitives for every pattern combination" was aspirational but incorrect. The printing press metaphor still applies, but differently:

- **What gets extracted:** Tier 1 tokens + Tier 2 components + Tier 2.5 patterns (~400 lines CSS)
- **What cannot be extracted:** Tier 3 compositional layouts (documented as prose strategies, not CSS)
- **Why:** Tier 3 is metaphor-dependent. OD-004's geological strata only works when content has layered confidence levels. You can't extract "the geological layout template" because it's not a template — it's a strategy for resolving a specific tension type.

The language analogy is precise:
- **Tier 1 = Alphabet** (26 letters, fixed)
- **Tier 2 = Vocabulary** (~50 words, slowly growing)
- **Tier 2.5 = Grammar** (sentence structures, reusable patterns)
- **Tier 3 = Prose** (infinite variety from finite vocabulary)

You can extract the alphabet and vocabulary. You cannot extract the prose — you must write it fresh each time. But you write it using the same letters and words, ensuring family resemblance across infinite variety.

===

## The Complete Phase Sequence (Updated)

```
Phase A: CD Completion (4-5h)
  Validate both Track 1 + Track 2 via CD-006 pilot
  Produce: ACCUMULATED-IDENTITY-v3, combination rules, transition grammar
  ↓
Phase B: Content Analysis + Track Classification (4-6h) [REORDERED FROM F]
  Inventory all 75+ pages
  Classify: Track 1 (assembly) vs Track 2 (composition)
  Pre-screen tension via Addition Test + BECAUSE test
  Produce: Track assignments, tentative metaphor candidates, extraction priorities
  ↓
Phase C: Component + Pattern Base Extraction (6-10h) [SCOPE REDUCED]
  Extract ~400 lines Tier 1+2+2.5 CSS
  Document Tier 3 compositional strategies as prose patterns
  Produce: Component library (~400 lines CSS) + Pattern strategy docs (~1,200 lines prose)
  ↓
Phase D: Extraction Validation Pass (1-2h) [NEW]
  Build 1 Track 1 page using library alone
  Build 1 Track 2 page using library + tension-composition pipeline
  Verify sufficiency, document gaps
  Produce: Validation report, gap documentation, confidence assessment
  ↓
Phase E: Migration Playbook v2 (4-5h) [EXPANDED]
  Track 1 execution path (mechanical assembly)
  Track 2 execution path (tension-composition skill invocation)
  Perceptual guardrail integration (8 quantitative rules)
  Builder warnings reference (W-DEADZONE, W-OVERLABEL, W-MONOTONY, etc.)
  Produce: Migration Execution Spec (~1,400 lines) + Ingestion Operational Spec (~100 lines)
  ↓
Phase F: Pilot Migration (3-5h) [MUST INCLUDE TRACK 2]
  2-3 pages minimum: 1+ Track 1, 1+ Track 2
  Test skill invocation, guardrail enforcement, audit flow
  Produce: Pilot pages, timing data, process validation, discovered edge cases
  ↓
Phase G: Playbook Refinement (1-2h) [NO CHANGE]
  Incorporate pilot learnings into playbook
  Update time estimates with actual measurements
  Refine escalation protocol based on pilot results
  Produce: Playbook v2.1
  ↓
═══════════════════════ FREEZE LINE ═══════════════════════
  After this point, the design system is FROZEN.
  No new tokens. No new patterns. No soul changes.
  Everything below uses ONLY what exists above.
═══════════════════════════════════════════════════════════
  ↓
Phase H+I: Full Migration (80-160h) [TIMELINE EXPANDED]
  Track 1: 30-40 pages @ 45-90 min = 22-60h (parallelizable)
  Track 2: 35-45 pages @ 3-5h = 105-225h (creative bottleneck)
  Produce: All pages migrated with full provenance
```

### Critical Path Changes from Original Plan

**BEFORE (incorrect):**
```
CD → Component Extraction → Content Analysis → Playbook → Pilot → Freeze → Migrate
```

**AFTER (corrected):**
```
CD → Content Analysis → Component Extraction → Validation → Playbook → Pilot → Freeze → Migrate (2 tracks)
```

**Why Content Analysis must come FIRST:**
1. Classification drives what gets built (Track 1 needs vs Track 2 needs)
2. Tension pre-screening identifies which compositional strategies to document
3. Extraction can be informed by what content actually needs (prioritize tutorial mechanisms over rare geological strata if 60 pages are tutorials and 3 need geological layering)
4. Validation Pass can test the right things (1 Track 1 page + 1 Track 2 page, not random selection)

===

## Phase A: CD Completion (4-5 hours)

### What CD Must Validate

**Current specification (from HANDOFF-AD-TO-CD.md):**
- 6 explorations testing pattern combinations
- 15-25 CD-F findings
- ACCUMULATED-IDENTITY-v3 (terminal identity document)
- HANDOFF-CD-TO-MIGRATION

**What changes after pipeline evolution research:**

1. **CD-006 as pilot migration** — CD's 6th exploration should be a pilot migration using real content, not synthetic content. The tension-composition pipeline test proved that real content creates genuine tension; synthetic content does not. CD-006 at 39/40 audit score was the ONLY exploration where the reader-facing question ("Can someone actually build a page?") created genuine design tension that elevated the output.

2. **Completeness Gate must validate both tracks** — CD must prove the system handles both Track 1 (clean pattern mappings, deterministic) and Track 2 (genuine tension requiring metaphor). Without this validation, Track 2 pages discovered during migration force design system updates, violating the freeze.

3. **Track Classification decision tree in HANDOFF** — Migration needs: "Given content type X and presence/absence of genuine tension, is this Track 1 or Track 2?" This decision tree must be produced by CD and handed off.

### New deliverables

- Track classification decision tree (content type + tension presence → track assignment)
- Track 2 pattern validation (at least 1 exploration tests tension-composition invocation)
- CD-006 as real-content pilot (validates completeness before freeze)

### Dependencies

None (entry phase)

===

## Phase B: Content Analysis + Track Classification (4-6 hours)

**Status:** REORDERED from Phase F (was after extraction, now before)

### Why This Moved to Phase B

**Current plan (incorrect):** Extract components → classify content → write playbook
**Problem:** You build the library before knowing what content needs. Extraction is blind.

**Corrected plan:** Classify content → extract components → validate → write playbook
**Why:** Classification reveals what to prioritize. If 60 pages are tutorials and 3 pages need geological layering, extraction prioritizes tutorial mechanisms.

### What This Phase Produces

For every page in docs-spa (all 75+), create:

| Field | What It Captures |
|-------|-----------------|
| **Content type** | Primary classification (tutorial, reference, getting started, conceptual overview, decision guide, troubleshooting, etc.) |
| **Track assignment** | Track 1 (assembly) or Track 2 (composition) |
| **Tension pre-screening** | FEEL tension (warmth vs austerity), RECONCILE tension (challenge vs verdict), NAVIGATE tension (free choice vs decisive ranking) |
| **Tentative metaphor candidates** | For Track 2 pages: which metaphor families might resolve the identified tensions |
| **Pattern triple** | Organization + Density + Axis recommendation (e.g., Narrative + CRESCENDO + F-Pattern) |
| **Complexity estimate** | 1 = simple assembly, 2 = moderate composition, 3 = major tension resolution |
| **Migration priority** | Suggested order (Track 1 first for speed, or Track 2 first to validate creative pipeline?) |
| **Extraction guidance** | "60 pages need F-Pattern + CRESCENDO → prioritize extracting these mechanisms" |

### Track 1 vs Track 2 Classification Heuristic

```
TRACK 1 (Assembly) if:
- Content type has clean pattern mapping (tutorial → CRESCENDO + F-Pattern)
- Addition Test = YES (existing components fulfill reader need without transformation)
- All axis tensions are COSMETIC (different arrangement of same components)

TRACK 2 (Composition) if:
- Content type resists clean mapping (conceptual overview with safety-through-uncertainty tension)
- Addition Test = NO (reader need cannot be met by selecting/placing existing components)
- At least 1 axis produces GENUINE tension (richness score ≥ 8)
- BECAUSE test passes (tension is content-driven, not designer preference)
```

**Gray zone:** Hybrid pages (tutorial with conceptual tail). Default to Track 1 with Track 2 spot-treatment for tension sections.

### The Critical Safety Function

Content analysis serves a safety function that relates directly to the user's non-negotiable. If this phase discovers a content type that no validated pattern covers, this is the **last chance** to resolve it without violating the freeze. Resolution options:

1. **Map to closest pattern** — Accept approximate fit (most common outcome)
2. **Creative/compound approach** — Use CD-006's compound sequencing (validated by CD)
3. **Content restructuring** — Change the content to fit an existing pattern, rather than creating a new pattern
4. **Documented exception** — Accept imperfect coverage, document why, apply closest match

All four options satisfy the non-negotiable because none require updating the design system.

### Dependencies

- CD complete (needs full pattern vocabulary for classification)
- Can partially overlap with CD (classification doesn't need implementation templates, only pattern definitions)

### Risk If Skipped

Migration starts without knowing what it is migrating. Track 2 pages are discovered mid-migration when the design system is frozen and cannot be updated. Extraction builds Track 1 mechanisms without knowing Track 2 compositional strategies are needed. The timeline estimate is wrong by 2-3x.

===

## Phase C: Component + Pattern Base Extraction (6-10 hours)

**Status:** RENAMED from "Component Extraction + Pattern Library" + SCOPE HEAVILY REDUCED

### The Honest Extraction Scope

**Original assumption (incorrect):**
> "Extract reusable layout primitives from 30 explorations. Produces: Layout components (CrescendoSection, PulseSection, IslandsSection), Transition components, Combination recipe templates, Pattern picker decision tree — the PRINTING PRESS that makes migration mechanical."

**Component taxonomy research proves (correct):**

Component extraction produces ~400 lines of CSS covering Tier 1 (tokens), Tier 2 (components), and Tier 2.5 (patterns). This is 60-70% of any file. The remaining 30-40% (Tier 3 compositional layouts) **cannot be extracted** because they are metaphor-dependent. OD-004's geological strata only works when content has layered confidence levels. You cannot extract "the geological layout template" — it's a strategy for resolving a specific tension, not a reusable component.

### What Gets Extracted (Concrete Output)

```
extraction-output/
  tier-1-tokens.css                    (~80 lines)
    - Colors, typography, spacing, geometry
    - Soul constraints (border-radius: 0, box-shadow: none)

  tier-2-callouts.css                  (~50 lines)
    - 4-6 callout variants with locked structure
    - CSS custom properties for context adaptation

  tier-2-code-block.css                (~40 lines)
  tier-2-header.css                    (~30 lines)
  tier-2-table.css                     (~20 lines)
  tier-2-footer.css                    (~20 lines)
  tier-2-container.css                 (~15 lines)

  tier-2.5-solid-offset.css + .md      (~15 CSS + 80 guidance)
  tier-2.5-scroll-witness.css + .md    (~35 CSS + 70 guidance)
  tier-2.5-drop-cap.css + .md          (~10 CSS + 60 guidance)
  tier-2.5-confidence.css + .md        (~20 CSS + 120 guidance)
  tier-2.5-bento-grid.css + .md        (~25 CSS + 110 guidance)

  tier-3-strategies/
    geological-stratification.md       (~150 lines each)
    narrative-crescendo.md
    hub-spoke-spatial.md
    bento-task-islands.md
    editorial-synthesis.md
    compound-sequential.md

    Format per strategy:
    - Tension resolved: [description]
    - Metaphor: [name + explanation]
    - Mechanisms used: [border gradients, spatial compression, etc.]
    - When to use: [content characteristics]
    - Isomorphism count: [structural mappings]
    - Perceptual risk: [LOW/MEDIUM/HIGH]
    - Responsive story: [how metaphor degrades gracefully]
```

**Total: ~400 lines CSS + ~1,340 lines documentation**

### How Track 2 Consumes This Library

```css
/* TIER 2 (from library — frozen, never changes) */
.quote-callout {
  border-left: 4px solid var(--accent-purple);
  padding: var(--quote-padding, 20px 24px);
  background: var(--quote-bg, transparent);
  font-family: var(--font-display);
  font-style: italic;
}

/* TIER 3 (pipeline-generated — fresh per metaphor) */
.stratum--compressed .quote-callout {
  --quote-padding: 16px 24px;
  --quote-bg: var(--strata-sediment-1);
}
```

The tension-composition pipeline generates Tier 3 zone wrappers (`.stratum--compressed`) and sets CSS custom property overrides. The Tier 2 library provides locked component structure. CSS custom properties bridge the two layers.

**This is the "alphabet and vocabulary" model:** Tier 2 is frozen vocabulary. Tier 3 is fresh prose composed from that vocabulary.

### What Extraction Does NOT Produce

- Full layout templates for every pattern combination (these are Tier 3, non-extractable)
- Assumption that migration is mechanical (it's compositional for Track 2)
- "CrescendoSection" or "PulseSection" as copy-paste components (these are compositional strategies documented in prose)

### Dependencies

- CD complete (needs combination rules for Tier 2.5 patterns)
- Content Analysis complete (needs Track 1 vs Track 2 split to prioritize extraction)

### Risk If Skipped

Migration reinvents Tier 2 components from scratch on every page. CSS duplication epidemic (95% overlap across files). Component drift risk (font-size 1.0625rem on one page, 1.125rem on another). Track 2 pages lack documented compositional strategies and must derive them from raw exploration HTML.

===

## Phase D: Extraction Validation Pass (1-2 hours)

**Status:** NEW PHASE (did not exist in original plan)

### Why This Phase Was Added

**Current plan (incorrect):** Extract components → write playbook assuming components work → pilot migration discovers gaps
**Problem:** No validation that extracted library actually composes correctly. Playbook assumes extraction is complete when it's only 60-70%.

**Corrected plan:** Extract components → validate with 2-3 test pages → write playbook knowing what works and what doesn't
**Why:** Better to discover gaps on 2 test pages than on 75 real pages during migration.

### What This Phase Does

Build 2-3 test pages using **ONLY** extracted Tier 1+2 CSS:

1. **One Track 1 page** (tutorial) — should work perfectly with extracted base alone
2. **One Track 2 page** (conceptual) — will expose Tier 3 gaps, test tension-composition pipeline invocation
3. **One hybrid page** — tests transition grammar between Track 1 sections and Track 2 sections

### What Gets Documented

**Extraction Validation Report:**
- What Tier 1+2 CSS handles successfully (component rendering, spacing, soul compliance)
- What Tier 3 gaps exist (which compositional strategies need prose documentation)
- Which metaphor families work with extracted base (geological strata, narrative crescendo, hub-spoke)
- Which require fresh composition (compound sequential, bento task islands)
- Confidence level: "Track 1 works, Track 2 needs X, Y, Z documented in prose"

### The Gate Function

If validation reveals that the Tier 1+2 library is insufficient for Track 1 pages, extraction must be refined before proceeding. If validation reveals Tier 3 strategies are poorly documented, the prose pattern library is expanded before playbook writing.

**This is the last quality gate before the playbook assumes a working foundation.**

### Dependencies

- Component Extraction complete (needs extracted library to test)

### Risk If Skipped

Playbook assumes extraction is complete. Pilot migration discovers that Track 1 pages need additional Tier 2 components. Migration timeline balloons as agents discover Tier 3 gaps during production work rather than controlled testing.

===

## Phase E: Migration Playbook v2 (4-5 hours)

**Status:** KEEP but EXPAND for Track 2 specification

### The Two-Track Execution Specification

The existing 265-line migration-guide.md covers Track 1 perfectly (CSS conversion, callout mapping, density pattern selection). Track 2 is unspecified. After the two-track discovery, the playbook must split into two execution paths.

### Track 1 (Assembly) — Mechanical Process

**6-Phase Per-Page Process:**

1. **Page Analysis** (12 min) — 5-dimensional classification (type, density, components, flow, character)
2. **Pattern Selection** (8 min) — Deterministic lookup: content type → pattern triple
3. **Composition Design** (18 min) — Mechanical component selection from library, apply velocity/temperature/weight rules, verify transition grammar
4. **Build** (28 min) — Load Tier 1+2 CSS from library, construct HTML using Tier 2 components
5. **Perceptual Audit** (12 min) — Invoke perceptual-auditing skill (PA-01 through PA-28, Tier 1+2 questions)
6. **Discovery Documentation** (7 min) — Write Consumption Receipt, log MIG-F findings

**Total: 45-90 minutes per page**

### Track 2 (Composition) — Creative Process

**6-Phase Per-Page Process:**

1. **Page Analysis + Tension Pre-Screen** (18 min) — Same 5D classification, Addition Test = NO, BECAUSE test passes, richness score ≥ 8
2. **Partial Pattern Selection** (12 min) — Density pattern identified, axis pattern DEFERRED to metaphor selection
3. **Tension-Composition Pipeline** (150 min) — **THE BOTTLENECK**
   - Phase 0: Content assessment (5 min)
   - Phase 1: Multi-axis questioning, 4-14 axes (25 min)
   - Phase 2: Tension derivation, Addition+BECAUSE tests (30 min)
   - Phase 3: Metaphor collapse, 3-5 candidates scored (45 min)
     - Tension resolution score
     - Structural isomorphism count (must be ≥ 4)
     - Perceptual risk assessment (must be ≤ 2)
     - Perceptual cost assessment
     - Composite selection
   - Phase 4: Compositional layout generation (35 min)
     - Extract 5-category physical properties from metaphor
     - Translation grammar (property → CSS)
     - Coherence check (5 rules)
     - Pacing prediction
     - Guardrail enforcement (8 quantitative rules)
   - Phase 5: Output (10 min)
4. **Build** (35 min) — Load Tier 1+2 CSS + apply Tier 3 generated CSS + set CSS custom properties + verify guardrails
5. **Perceptual Audit** (18 min) — Invoke perceptual-auditing skill (PA-01 through PA-48, including metaphor-awareness questions PA-42, PA-43, PA-44)
6. **Discovery Documentation** (12 min) — Enhanced Consumption Receipt + Metaphor Record (tension, metaphor, isomorphism table)

**Total: 3-5 hours per page**

### The 8 Quantitative Guardrails (Both Tracks)

| Guardrail | Value | Enforced In |
|-----------|-------|-------------|
| **Min content-to-viewport** | 65% (940px min container) | Phase 4 build + Phase 5 audit |
| **Min horizontal padding** | 32px per side | Phase 4 build + Phase 5 audit |
| **Min label-to-heading gap** | 16px | Phase 4 build + Phase 5 audit |
| **Compression ratio ceiling** | Deepest ≥ 40% of shallowest | Phase 4 build + Phase 5 audit |
| **Characters per line** | 45-80 | Phase 4 build + Phase 5 audit |
| **Min body line-height** | 1.5 | Phase 4 build + Phase 5 audit |
| **Min section breathing zone** | 48px | Phase 4 build + Phase 5 audit |
| **Border-radius** | 0 (always) | Soul compliance (all phases) |

These guardrails emerged from the tension-composition pipeline fixes (30 visual issues resolved across 15 layouts, 27 RESOLVED, 3 PARTIAL, 0 regressions). They prevent metaphor-driven visual compromise — the root cause where metaphors encode spatial biases as CSS values.

### The Two Playbook Outputs

**1. Migration Execution Spec** (~1,400 lines)
- Comprehensive specification for the one-time migration project
- Complete 6-phase per-page process for both tracks
- Decision tree with worked examples for every content type
- Team structure for parallel migration (Lead + Page Teams + Weaver)
- Quality gates at each phase transition
- Escalation protocol for edge cases
- Post-migration verification checklist covering all four dimensions

**2. Ingestion Operational Spec** (~100 lines)
- Lightweight, single-agent specification for ongoing new documentation pages
- Derivative of execution spec, stripped to what one agent needs
- "Load these 4 files → classify → select patterns → compose → build → audit → document → output"

The distinction matters: Migration is a PROJECT (one-time, team, heavy oversight). Ingestion is an OPERATION (ongoing, single agent, lightweight). Same pipeline, different execution model.

### Dependencies

- Component Extraction complete (provides Tier 1+2 base)
- Validation Pass complete (confirms what works, what needs fresh composition)
- Content Analysis complete (provides Track 1 vs Track 2 classification)

### Risk If Skipped

Migration agents follow the existing 265-line guide, produce soul-compliant CSS, but miss the entire organizational/spatial/combination dimension. Track 2 pages are processed as Track 1, producing mediocre layouts that lack compositional depth. The tension-composition pipeline is never invoked. Guardrails are not enforced. Visual compromise occurs.

===

## Phase F: Pilot Migration (3-5 hours)

**Status:** KEEP + validate both tracks

### Why the Pilot Must Include Track 2

**Current plan (incomplete):** 2-3 pages spanning different content types
**Problem:** If the pilot is all Track 1 pages, it proves assembly works but says nothing about composition. Track 2 is the bottleneck and the risk.

**Corrected plan:** 2-3 pages minimum: 1+ Track 1, 1+ Track 2, 1 hybrid
**Why:** Better to discover Track 2 issues on 1 pilot page than 35-45 production pages.

### The Ideal Pilot Set

| Pilot Page | Content Type | Track | Pattern Expected | Why This One |
|------------|--------------|-------|------------------|--------------|
| **Page 1** | Tutorial / Narrative | Track 1 | CRESCENDO + F-Pattern | Most common type; tests deterministic pipeline path |
| **Page 2** | Conceptual Overview | Track 2 | Geological metaphor or similar | Tests tension-composition invocation, metaphor selection, guardrail enforcement |
| **Page 3** | Hybrid (tutorial with conceptual intro) | Track 1 + Track 2 | Compound sequential | Tests transition grammar between tracks |

### What the Pilot Validates

- **Does Track 1 assembly work?** Can an agent follow the 6-phase process from analysis to documentation without getting stuck?
- **Does Track 2 composition work?** Does tension-composition skill invocation produce viable metaphors? Do guardrails prevent visual compromise?
- **How long does each track take?** Estimates (45-90 min Track 1, 3-5h Track 2) based on research — pilot provides real measurements
- **Do the extracted components compose correctly?** Does the Tier 1+2 library work against real content?
- **What breaks that theory didn't predict?** Real pages have legacy CSS, varying structures, non-ideal component constellations

### The Final Quality Gate

The pilot serves as the **final quality gate** before committing to full migration. If the pilot reveals a genuine gap in the design system:

- This is the last moment to decide whether to resolve it within the existing system (preferred) or make a minimal, targeted design system update (acceptable — the user said "once we start migrating," not "once we start piloting")
- If the pilot is clean — all 2-3 pages migrate without requiring design system changes — the team can proceed to full migration with confidence that the non-negotiable holds

### Dependencies

- Playbook v2 complete (provides Track 2 execution path)
- Content Analysis complete (identifies which pages to pilot)

### Risk If Skipped

The first full migration attempt becomes the de facto pilot, but under production pressure and expectations. Track 2 timing data is missing (causing timeline estimates to be wrong by 2-3x). Guardrail enforcement is untested. The playbook's Track 2 assumptions persist across all 35-45 Track 2 pages.

===

## Phase G: Playbook Refinement (1-2 hours)

**Status:** KEEP (no structural changes)

### What Changes After Pilot

This is the lightest phase, but it closes a critical feedback loop. Every discovery from the pilot migration feeds back into the playbook before that playbook is used at scale.

| Refinement Area | What Changes |
|-----------------|-------------|
| **Time estimates** | Replace theoretical estimates with actual measurements from pilot pages |
| **Track 2 guardrails** | Refine if pilot revealed edge cases (e.g., 940px min container works perfectly vs needs adjustment at 768px) |
| **Metaphor selection** | Note if pilot metaphor worked well or poorly (informs future metaphor candidates) |
| **Escalation protocol** | Refine based on whether pilot actually triggered escalation, and whether resolution paths worked |
| **Worked examples** | Replace hypothetical examples with real examples from pilot pages |

### Why It Is a Separate Phase

The refinement could theoretically be folded into the pilot phase itself. It exists as a separate phase for a structural reason: it marks the **transition boundary**. Before Phase G, the design system (including the playbook and pattern library) can still evolve. After Phase G, everything freezes. Giving refinement its own phase ensures the pilot learnings are fully processed before the freeze takes effect.

===

## The Freeze Line

### Where the Design System Stops Changing

```
Phase A:  CD (Combination Dimension)
Phase B:  Content Analysis + Track Classification
Phase C:  Component + Pattern Base Extraction
Phase D:  Extraction Validation Pass
Phase E:  Migration Playbook v2
Phase F:  Pilot Migration
Phase G:  Playbook Refinement

═══════════════════════ FREEZE LINE ═══════════════════════
   After this point, the design system is FROZEN.
   No new tokens. No new patterns. No soul changes.
   Everything below uses ONLY what exists above.
═══════════════════════════════════════════════════════════

Phase H+I: Full Migration + Verification
```

The freeze line is not a suggestion. It is the user's non-negotiable requirement: "Once we start migrating actual documentation pages, I don't want to have to update the design system or anything like it."

### What Is Frozen

After Phase G, the following cannot change:

- Token values (colors, spacing, typography, geometry)
- Soul pieces (5, bounded: sharp edges, serif accents, warm palette, no shadows, square signals)
- Pattern definitions (all 20+ across density, organizational, axis, combination)
- Finding IDs and their meanings (all DD-F, OD-F, AD-F, CD-F entries)
- Convention specs (all sections across all stages)
- Anti-pattern registry
- Transition grammar (5x5 matrix, AD-F-025)
- Tier 1+2+2.5 component library (the ~400 lines CSS)
- Tier 3 compositional strategies (the prose pattern documentation)
- ACCUMULATED-IDENTITY-v3 (the terminal identity document)

### What Is NOT Frozen

The following can evolve during migration:

- Implementation details (CSS class names, HTML structures, component internals)
- Playbook wording and examples (refinements to HOW instructions are expressed)
- Content analysis assignments (a page can be re-classified if initial classification was wrong)
- Migration priority order
- Verification checklists (items can be added, not removed)
- Provenance documentation format
- Application notes and MIG-F findings (documenting how existing patterns apply to real content)

**The distinction is precise: WHAT the system says is frozen. HOW we implement and document what the system says can evolve.**

### Why the Intermediate Phases Make the Freeze Possible

Without Phases B through G, migration would inevitably encounter situations where the design system has gaps. The only options would be to update the system (violating the freeze) or produce shallow output (wasting the research). The intermediate phases prevent this by:

1. **Content Analysis (B)** ensures every content type maps to Track 1 or Track 2 before migration begins
2. **Component Extraction (C)** ensures Tier 1+2 vocabulary is extractable and frozen, Tier 3 strategies are documented
3. **Extraction Validation (D)** ensures extracted library actually works against real content
4. **Migration Playbook (E)** ensures both tracks have comprehensive execution paths with guardrails
5. **Pilot Migration (F)** proves the system is complete on real pages
6. **Playbook Refinement (G)** incorporates real-world learnings before the freeze

Each phase systematically eliminates a class of gap that would otherwise surface during migration. By the time the freeze line is crossed, the system has been tested, translated into code, mapped to all content, validated on real pages, and refined from pilot learnings. The freeze is achievable because the preparation is exhaustive.

===

## Phase H+I: Full Migration + Verification (80-160 hours)

**Status:** RECOGNIZE TWO-TRACK REALITY

### The Timeline Reality

**OLD (incorrect assumption):** 15-40 hours for uniform migration (12-32 min per page)

**NEW (after pipeline evolution research):**

```
Track 1 (Assembly): 30-40 pages @ 45-90 min = 22-60 hours
  - Parallelizable (6 agents, 6 pages simultaneously)
  - Mechanical, deterministic

Track 2 (Composition): 35-45 pages @ 3-5 hours = 105-225 hours
  - Sequential (creative bottleneck, 2-3 concurrent max)
  - Creative, tension-driven

TOTAL: 127-285 hours (migration only, not pre-freeze phases)
```

**Why the range is so wide:** If Track 2 is 50% of pages (35 pages) at 3 hours each = 105 hours. If Track 2 is 60% of pages (45 pages) at 5 hours each = 225 hours. Content Analysis (Phase B) will settle this empirically.

**Track 2 is THE bottleneck.** The entire migration timeline is dominated by Track 2 creative capacity. You cannot speed up creative tension resolution by adding agents the way you can with assembly tasks.

### Team Topology at Scale

| Track | Topology |
|-------|----------|
| **Track 1** | 6 agents, 6 pages in parallel. Lead assigns pages, agents execute 6-phase pipeline independently, Weaver synthesizes cross-page findings (optional for Track 1) |
| **Track 2** | 2-3 agents maximum (creative capacity limit). Lead assigns pages sequentially, Weaver is CRITICAL (metaphor reuse, cross-page consistency) |

**Weaver role for Track 2:**
- Cross-page metaphor reuse detection ("Page 12 has similar tension to Page 8 → reuse metaphor strategy")
- Tension pattern recognition ("3 pages have FEEL tension → document this pattern")
- Prevents reinventing metaphors for similar tensions

### The Compounding Effect

Migration is not 75 independent page conversions. It is a compounding process:

- **Page 1:** Pure vocabulary application. No prior migration data.
- **Page 5:** Vocabulary + 3 refinements from pages 1-4.
- **Page 15:** Vocabulary + 8 refinements + 1 extension (e.g., a new combination recipe discovered on page 12).
- **Page 50:** Vocabulary + 20 refinements + 3 extensions + 2 new recipes.

The design system's effective vocabulary GROWS with every page — not because the system is updated (the freeze holds), but because each Consumption Receipt documents how existing patterns apply to real content, building a reference library for subsequent pages.

### What Full Migration Produces

| Deliverable | Description |
|-------------|-------------|
| **75+ migrated pages** | Each implementing its assigned pattern (Track 1) or composed metaphor (Track 2) |
| **Per-page Consumption Receipts** | Provenance documentation citing which findings were applied |
| **MIG-F findings** | Per-page discoveries (new applications of existing patterns) |
| **Track 2 metaphor library** | Every Track 2 page documents its metaphor selection, tension resolution, isomorphism table |
| **Soul compliance verification** | 0 violations across all pages (binary: pass/fail) |
| **Pattern fidelity verification** | Each page implements its assigned pattern correctly |
| **Fractal self-similarity confirmation** | 5-scale verification per page |
| **Migration completion certificate** | Formal statement of completion |

===

## Complete Timeline Summary

| Phase | Hours (Estimated) | Sessions | Type |
|-------|------------------|----------|------|
| **A: CD Completion** | 4-5 | 1 | Design exploration |
| **B: Content Analysis** | 4-6 | 1-2 | Classification + tension screening |
| **C: Component Extraction** | 6-10 | 2 | Library building |
| **D: Extraction Validation** | 1-2 | (overlap C) | Testing |
| **E: Migration Playbook v2** | 4-5 | 1 | Spec writing |
| **F: Pilot Migration** | 3-5 | 1 | Validation |
| **G: Playbook Refinement** | 1-2 | (overlap F) | Refinement |
| **Subtotal (pre-freeze)** | **23-35** | **~6-8** | |
| **FREEZE LINE** | | | |
| **H: Migration Track 1** | 22-60 | 4-12 | Parallelizable assembly |
| **I: Migration Track 2** | 105-225 | 21-45 | Sequential composition |
| **Subtotal (post-freeze)** | **127-285** | **25-57** | |
| **TOTAL (post-CD)** | **150-320** | **31-65** | |

**Critical finding:** The original estimate (34-70 hours) was off by 4-5x. The two-track reality, especially Track 2's creative bottleneck, dominates the timeline.

===

## Open Questions

### Q1: Should everything go through the tension-composition pipeline's gate?

Rather than Content Analysis (Phase B) deciding Track 1 vs Track 2 upfront, should ALL pages go through Phases 0-2 of the tension-composition pipeline (Content Assessment → Multi-Axis Questioning → Tension Derivation), letting the pipeline's own gate (genuine tension vs cosmetic tension) decide Track 1/2?

**Pro:** Single unified process, no classification error risk
**Con:** Adds 30-60 minutes to every Track 1 page for questioning that yields "cosmetic tension, use Track 1"

### Q2: Is Track 2 really 50-60% of pages?

The pipeline evolution research estimated 50-60% based on content type analysis. The original plan assumed 15-20%. The ACTUAL split determines timeline. Phase B Content Analysis will settle this empirically.

**If 15-20% (10-15 pages):** Total migration = 40-90 hours (manageable)
**If 50-60% (35-45 pages):** Total migration = 127-285 hours (significant commitment)

### Q3: Where exactly does the "abstraction cliff" fall?

The original concept of an abstraction cliff (gap between design intelligence and implementation) still applies but differently. The cliff now separates Tier 2 (extractable components) from Tier 3 (compositional layouts). But where exactly is the line?

- Bento grid: Tier 2.5 (70% extractable) or Tier 3 (metaphor-dependent)?
- Confidence encoding: Tier 2.5 (border-weight gradients are reusable) or Tier 3 (only works with layered content)?

Phase C (Extraction) will draw this line empirically. The Rename Test helps: if you can rename the CSS class to something generic without losing distinctiveness, it's Tier 2. If the name carries semantic load (`.stratum--established`), it's Tier 3.

### Q4: Does a richer Tier 2.5 library reduce Track 2 percentage?

If extraction (Phase C) produces 10-15 sophisticated Tier 2.5 patterns (beyond the current 5 documented), do borderline pages shift from Track 2 to Track 1? Does Tier 2.5 richness act as a lever that controls the Track 1/Track 2 split?

**Hypothesis:** Yes. More reusable patterns → more content can be assembled → fewer pages need fresh composition.
**Counterpoint:** Track 2 is driven by content tension, not pattern availability. If content has genuine tension, no amount of Tier 2.5 patterns resolves it.

Phase D (Validation) will provide evidence.

===

## The Honest Bottom Line

Between CD completion and full migration, there are 23-35 hours of preparation work across 7 phases (A through G). This is not bureaucratic overhead. It is the **infrastructure that makes the non-negotiable achievable**.

The two-track reality means migration is not a uniform process but a split execution model:
- **Track 1 (Assembly):** Deterministic, parallelizable, 45-90 minutes per page, uses design system as printing press
- **Track 2 (Composition):** Creative, sequential bottleneck, 3-5 hours per page, uses design system as alphabet and vocabulary

Both tracks consume the same frozen Tier 1+2 library. Both tracks enforce the same 8 quantitative guardrails. Both tracks produce soul-compliant, perceptually audited output. But they are categorically different operations.

The metaphor is precise: you cannot translate a library from one language to another by handing translators a grammar textbook and a dictionary and saying "begin." You need:

1. A catalogue of every book in the library (Content Analysis, Phase B)
2. An alphabet and vocabulary extracted from the original language (Component Extraction, Phase C)
3. A test translation of a few chapters to validate the alphabet works (Extraction Validation, Phase D)
4. A translation guide with worked examples for both simple texts and complex poetry (Migration Playbook, Phase E)
5. A pilot translation that proves the process end-to-end (Pilot Migration, Phase F)
6. A refined guide incorporating what the pilot revealed (Playbook Refinement, Phase G)

Only then can you translate at scale with confidence that you will not need to revise the alphabet mid-project.

That is what these phases build. Skip them, and migration degrades to CSS reskinning — soul-compliant aesthetics applied over untouched information architecture, using zero percent of the design research accumulated across four stages, 84+ findings, and thousands of hours of agent work.

Build them, and migration becomes what it was always meant to be: the moment when the KortAI design mind expresses itself through every page of real documentation, producing 75 siblings who share DNA but have distinct faces — some assembled from vocabulary (Track 1), some composed fresh from tension (Track 2), all perceptually audited, all soul-compliant, all part of the same family.

===

*Sources: _SOURCE-BRIEF.md, _pipeline-evolution-research/06-synthesis.md (354 lines), _component-taxonomy-research/05-synthesis.md (254 lines), tension-composition skill (839 lines), perceptual-auditing skill (2,089 lines). All phase definitions, timeline recalculations, and two-track specifications derived from systematic pipeline evolution research.*
