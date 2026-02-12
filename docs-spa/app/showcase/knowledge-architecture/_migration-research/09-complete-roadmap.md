# COMPLETE POST-CD ROADMAP
## Every Step from CD Completion to Full Design System Adoption

**Agent:** roadmap-designer
**Date:** 2026-02-11
**Sources:** CD-SYNTHESIS-BRIEFING (647 lines), BACKBONE.md (491 lines), README.md Parts VI-VIII (~280 lines), PATTERN-INDEX.md (460 lines), migration-guide.md (265 lines), gap-analysis (284 lines), accumulated-intelligence (311 lines), migration-plans (229 lines), DESIGN-SYSTEM/CLAUDE.md, HANDOFF-AD-TO-CD.md

---

## 0. THE USER'S NON-NEGOTIABLE

> "Once we start migrating, I don't want to update the design system."

This constraint is the **architectural spine** of the entire roadmap. It means:

1. **The design system must be COMPLETE before migration starts.** Not "mostly done" -- COMPLETE. Every token locked, every pattern validated, every combination rule tested, every edge case resolved.
2. **Migration is a one-way waterfall.** There is no "discover a gap during migration, go back and fix the design system" loop. Any gap discovered during migration must be solvable WITH the existing system, not BY CHANGING the system.
3. **The Pre-Migration phase is not optional.** It is the buffer zone where all remaining ambiguity is resolved so migration can be a pure application exercise.
4. **CD's deliverables must be exhaustive.** CD cannot leave open questions for "migration to figure out."

This changes the entire calculus. Without this constraint, you could do a lean CD, minimal pre-migration, learn-as-you-go migration with design system patches. WITH this constraint, every phase before migration becomes load-bearing infrastructure.

---

## 1. PHASE ASSESSMENT: EVERY POSSIBLE STEP EVALUATED

### Phase A: CD (Combination Dimension) -- NEEDED (already planned)

**Status:** PENDING. Fully planned in CD-SYNTHESIS-BRIEFING. HANDOFF-AD-TO-CD exists.

**What it produces:**
- 6 HTML explorations (CD-001 through CD-006) testing pattern combinations
- 15-25 CD-F-### findings (combination rules validated empirically)
- CD-CONVENTION-SPEC.md (extends AD-CONVENTION-SPEC sections 1-16, adds 17-20)
- CD-RESEARCH-GATE.md (R-5 evaluation -- 39 findings, ~75-80% unapplied)
- CD-SYNTHESIS.md (cross-exploration synthesis)
- CD-AUDIT-SYNTHESIS.md (quality gate results)
- ACCUMULATED-IDENTITY-v3 (final identity document -- the TERMINAL identity)
- HANDOFF-CD-TO-MIGRATION.md (terminal gate file)
- PATTERN SELECTION GUIDE embedded in handoff (content type X -> combination Y)

**Estimated effort:** ~18-20 agents, ~4-5 hours wall time (per CD-SYNTHESIS-BRIEFING Section 11.2)

**Dependencies:** HANDOFF-AD-TO-CD.md (exists), R-5 (39 findings, exists)

**Verdict: NEEDED -- foundation for everything that follows.**

**What changes given the non-negotiable:** CD must produce more than originally planned. Specifically:
- The PATTERN SELECTION GUIDE in HANDOFF-CD-TO-MIGRATION.md must cover EVERY content type the team expects to encounter during migration, not just the 6 exploration scenarios. If a content type isn't covered, migration agents will have to improvise, which risks discovering gaps that require design system updates.
- CD-CONVENTION-SPEC must be the FINAL convention spec. Migration must not need to add sections 21+.
- ACCUMULATED-IDENTITY-v3 must be the TERMINAL identity. There is no v4.

---

### Phase B: Component Extraction (HTML Explorations -> Reusable Patterns) -- NEEDED

**Status:** NOT STARTED. Not planned in any existing document.

**What it produces:**
- CSS utility classes or layout primitives encoding the 6 density patterns (PulseSection, CrescendoSection, IslandsSection, GeologicalSection, TidalSection, FractalContainer)
- Transition components implementing AD-F-025 (SmoothTransition, BridgeTransition, BreathingTransition)
- Combination recipe templates (the 6-8 recipes from R-5, validated by CD)
- A reusable "KortAI page template" with soul-compliant defaults (border-radius: 0, box-shadow: none, correct fonts, warm cream background)
- Pattern demonstration pages showing each layout in isolation

**What it does NOT produce:**
- Full React components (that's the existing docs-spa component library's job)
- New design decisions (all patterns come from validated explorations)

**Why it matters given the non-negotiable:** Without extraction, each migrated page reinvents layout patterns from scratch by reading exploration HTML source. This is error-prone and slow. With extraction, migration agents apply pre-built layout primitives. The design system does not need updating because the primitives ARE the design system, just expressed as code rather than prose.

**Estimated effort:** 2-3 sessions (~6-10 hours). Read 24 explorations (DD+OD+AD) + 6 CD explorations, extract recurring CSS/HTML patterns, formalize as reusable snippets.

**Dependencies:** CD complete (needs combination rules for recipe templates)

**Verdict: NEEDED. The bridge between "design research" and "implementable code."**

---

### Phase C: Token Implementation (Design Tokens in Actual Codebase) -- ALREADY COVERED (with one caveat)

**Status:** MOSTLY DONE.

**What exists:**
- DESIGN-SYSTEM/tokens/ has locked token values (colors, geometry, spacing, typography)
- QUICK-START.md has the :root CSS block
- globals.css has most tokens implemented
- The comprehensive audit (commit 71dc02c) corrected stale values and verified soul compliance

**The caveat:** `design-system/src/styles/tokens.css` has 3-4 known contradictions with T1 authority (primary red color, border-radius values, box-shadow values, type scale -- documented in KA-DECISIONS). These MUST be corrected before migration. This is a 30-minute fix, not a phase.

**What it produces:** A single source-of-truth CSS file with correct token values.

**Estimated effort:** ~30 minutes (fix known contradictions, verify against T1)

**Dependencies:** None (can be done now)

**Verdict: ALREADY COVERED. The 30-minute fix is a pre-migration cleanup task, not a separate phase.**

---

### Phase D: Pattern Library (Formalized Pattern System) -- NEEDED (subsumes Phase B)

**Status:** NOT STARTED. PATTERN-INDEX.md and density-patterns.md exist as DOCUMENTATION but not as implementable code.

**What it produces:**
- A formal pattern library that maps content type -> complete implementation recipe
- Per-pattern documentation with "copy this HTML/CSS structure" blocks
- Pattern composition rules: "if your page has BOTH a tutorial section and a reference section, use COMPOUND axis with [these transition types]"
- A pattern picker decision tree: "What is the reader doing?" -> "What is the content structure?" -> "Use this pattern set" -> "Here is the implementation template"
- Edge case documentation: "What if my content doesn't fit any pattern?" with resolution approaches

**Why it matters given the non-negotiable:** The pattern library is where abstract research becomes concrete implementation guidance. Without it, migration agents must read ~15,000 lines of provenance documentation to understand what to build. With it, they read a pattern recipe and implement it. If the pattern library is comprehensive, migration agents NEVER need to go back to the design system for clarification -- which satisfies the non-negotiable.

**Key design principle:** The pattern library must be EXHAUSTIVE. Every content type the docs-spa contains must map to a validated pattern. If a content type exists that no pattern covers, it must be resolved in Phase D (not during migration).

**Estimated effort:** 1-2 sessions (~4-8 hours). Depends heavily on how many content types exist in docs-spa.

**Dependencies:** Phase B (component extraction provides the building blocks)

**Verdict: NEEDED. This is the "instruction manual" that migration agents follow.**

---

### Phase E: Migration Playbook v2 (Complete Migration Instructions) -- NEEDED

**Status:** PARTIAL. migration-guide.md (265 lines) exists but covers only CSS conversion (Step 1 of what is actually a 5+ step process). PATTERN-INDEX.md has an 8-step workflow that is more complete but still abstract.

**What it produces:**
- Complete step-by-step migration process covering ALL 4 dimensions (density + organization + axis + combination)
- Decision tree with worked examples: "I have a Getting Started page with 4 h2s, 6 code blocks, 3 callouts, and a file tree -> Use CRESCENDO + NARRATIVE + F-PATTERN -> Here is exactly what that looks like"
- Page-by-page migration template with all checkpoints
- Escalation protocol: "What to do when content doesn't fit any validated pattern" -- this MUST be answered WITHOUT requiring design system updates (per non-negotiable)
- Post-migration verification checklist covering all 4 dimensions (not just the current 20-item CSS checklist)
- Migration provenance template: how to document what findings were applied to each page

**Critical for the non-negotiable:** The escalation protocol is the key safety valve. When (not if) migration encounters content that doesn't perfectly match a validated pattern, the playbook must provide guidance for resolving this using EXISTING patterns and rules. Options include:
1. Content restructuring (change the content to fit the pattern)
2. Pattern composition (combine two patterns using combination rules)
3. Creative interpretation (use Level 3 reasoning from the accumulated identity to derive a new application of existing patterns)
4. Explicit exception documentation (acknowledge the gap, document why no existing pattern fits, apply closest match)

Option 4 is the "pressure release valve" -- it prevents the need to update the design system by accepting documented imperfection.

**Estimated effort:** 1 session (~3-4 hours)

**Dependencies:** Phase D (pattern library provides the implementation recipes the playbook references)

**Verdict: NEEDED. This replaces the existing 265-line guide with a comprehensive migration manual.**

---

### Phase F: Content Analysis (Classify All Existing Pages) -- NEEDED

**Status:** NOT STARTED. No inventory of docs-spa pages exists.

**What it produces:**
- Complete inventory of all pages in docs-spa
- Per-page content type classification (tutorial, reference, getting started, etc.)
- Per-page pattern recommendation (density + org + axis + combination)
- Per-page migration complexity estimate (1=simple token swap, 2=moderate restructuring, 3=major rewrite)
- Migration priority ranking (suggested order)
- Content gaps identified (pages needing NEW content, not just restyling)
- Content types that don't fit ANY validated pattern (escalation candidates -- must be resolved in Phase F, not deferred to migration)

**Critical for the non-negotiable:** If content analysis discovers a content type that no validated pattern covers, this is the LAST chance to resolve it. Options:
1. Map it to the closest existing pattern (most likely)
2. Identify it as a creative/compound scenario covered by CD-006's compound approach
3. Flag it for content restructuring (change the content, not the system)

All three options satisfy the non-negotiable because none require updating the design system.

**Estimated effort:** 1 session (~2-4 hours). Depends on number of pages.

**Dependencies:** Phase D (needs the pattern library to map content types to patterns)

**Verdict: NEEDED. You cannot migrate what you haven't inventoried.**

---

### Phase G: Pilot Migration (2-3 Pages to Validate) -- NEEDED

**Status:** NOT STARTED. No pilot concept exists in any document.

**What it produces:**
- 2-3 fully migrated pages spanning different content types (ideally: one tutorial/narrative, one reference/task-based, one creative/compound)
- Validated migration process (does the playbook actually work?)
- Timing data (how long does a single page migration take?)
- Discovered edge cases (what the playbook didn't cover)
- Playbook v2.1 refinements based on pilot findings

**Why specifically 2-3 pages:**
- 1 page is too few -- can't distinguish page-specific issues from systemic ones
- 5+ pages starts to feel like "just do the migration" without the benefit of a controlled test
- 2-3 pages covering different content types provides enough signal to validate the process

**Critical for the non-negotiable:** The pilot is the FINAL quality gate before committing to full migration. If the pilot reveals that the design system has a gap, this is the last moment to decide whether to:
1. Resolve it within the existing system (preferred)
2. Make a minimal, targeted design system update (acceptable -- the user said "once we start migrating," not "once we start piloting")

If the pilot is clean (all 2-3 pages migrate without design system changes), the team can proceed to full migration with confidence that the non-negotiable holds.

**Estimated effort:** 1 session (~3-5 hours for 2-3 pages)

**Dependencies:** Phase E (playbook) + Phase F (content analysis tells us which pages to pilot)

**Verdict: NEEDED. The controlled experiment before full commitment.**

---

### Phase H: Playbook Refinement (Post-Pilot Update) -- NEEDED (but lightweight)

**Status:** NOT STARTED.

**What it produces:**
- Playbook v2.1 incorporating pilot learnings
- Updated time estimates based on actual migration effort
- Refined escalation protocol based on actual edge cases encountered
- Updated verification checklist if pilot revealed gaps

**Estimated effort:** ~1-2 hours

**Dependencies:** Phase G (pilot)

**Verdict: NEEDED but lightweight. A 1-2 hour refinement pass.**

---

### Phase I: Full Migration (All Pages) -- NEEDED (the end goal)

**Status:** NOT STARTED.

**What it produces:**
- All docs-spa pages migrated to KortAI design system compliance
- Per-page provenance documentation (what findings were applied, what pattern was used)
- Updated RESEARCH-ACTIVE.md showing pattern usage counts
- Soul compliance verified across all pages (0 violations)
- Migration completion certificate / final state document

**Estimated effort:** Highly dependent on page count and complexity. Based on pilot data. Likely 3-8 sessions (~15-40 hours) for a typical docs site.

**Dependencies:** Phase H (refined playbook)

**Verdict: NEEDED. This is the destination.**

---

### Phase J: Verification (Quality Assurance) -- NEEDED (integrated into Phase I, not separate)

**Status:** NOT STARTED.

**What it produces:**
- Soul compliance audit across all migrated pages (binary: 0 violations)
- Pattern fidelity check (does each page actually implement its assigned pattern?)
- Fractal self-similarity verification at all 5 scales
- Transition grammar compliance for multi-section pages
- Visual regression comparison against validated explorations
- Anti-pattern sweep (traffic-light adjacency, 2px borders, semi-transparent backgrounds, etc.)

**Why integrated, not separate:** The existing pipeline audits DURING each stage (Phase 2 in every stage is audit). Migration should follow the same model: build a page, audit it, fix it, move on. A separate "audit all pages at the end" phase introduces risk because fixes cascade (fixing one page might affect shared CSS that affects other pages).

**Estimated effort:** Included in Phase I estimates (audit is part of per-page migration)

**Dependencies:** Phase I (pages exist to audit)

**Verdict: NEEDED but as part of Phase I, not as a separate phase.**

---

### Phase K: Tooling -- NICE TO HAVE

**Status:** NOT STARTED. Migration-guide.md has ~20 lines of pseudo-code for CSS linting.

**What it would produce:**
- CSS linter enforcing soul rules + token values
- Scaffolding generator: `create-kortai-page --pattern CRESCENDO --axis F-PATTERN --org NARRATIVE`
- Visual regression tests comparing migrated pages to validated explorations

**Why NICE TO HAVE:** If migration is Claude-agent-driven, agents can check compliance programmatically without separate tooling. Building tooling before the pilot means building tools for hypothetical workflows. Better to do manual migration first, identify repetitive pain points, THEN automate.

**Estimated effort:** 1-2 sessions (~4-8 hours) IF needed

**Dependencies:** Phase G (pilot reveals whether tooling is worth building)

**Verdict: NICE TO HAVE. Build only if pilot reveals that manual compliance checking is a bottleneck.**

---

### Phase L: Training / Knowledge Transfer -- NICE TO HAVE (with caveat)

**Status:** PARTIAL. README.md (2,053 lines) IS the training document for AI agents.

**What it would produce (if needed):**
- Condensed training for human contributors
- Worked examples beyond what the pattern library provides
- Video walkthroughs or interactive pattern explorers

**The caveat:** If migration remains Claude-agent-only, training is unnecessary. The CLAUDE.md files + README.md + ACCUMULATED-IDENTITY-v3 are the training material, and agents read them automatically. If humans join, training is CRITICAL because README.md is 2,053 lines and the provenance chain is optimized for AI context windows, not human reading.

**Estimated effort:** 1-2 sessions (~4-8 hours) IF needed

**Dependencies:** Phase D (pattern library provides the foundation for training materials)

**Verdict: NICE TO HAVE for Claude-only migration. DEFINITELY NEEDED if humans will do migration work.**

---

## 2. THE COMPLETE ROADMAP (ORDERED)

```
PHASE A: CD (Combination Dimension)
  |  ~18-20 agents, ~4-5 hours
  |  Produces: 6 explorations, 15-25 CD-F findings, ACCUMULATED-IDENTITY-v3,
  |            HANDOFF-CD-TO-MIGRATION, combination rules, EXHAUSTIVE pattern guide
  |
  v
PHASE B+D: Component Extraction + Pattern Library
  |  ~6-10 agents, ~6-10 hours (combined -- extraction feeds directly into library)
  |  Produces: Reusable layout primitives, transition components,
  |            pattern picker decision tree, implementation recipes
  |
  |  Token fix (30 min) can happen in parallel
  |
  v
PHASE F: Content Analysis
  |  ~3-5 agents, ~2-4 hours
  |  Produces: Page inventory, per-page pattern assignment,
  |            complexity estimates, priority ranking
  |
  |  (Can overlap partially with Phase B+D -- analysis can start
  |   while library is being assembled)
  |
  v
PHASE E: Migration Playbook v2
  |  ~2-3 agents, ~3-4 hours
  |  Produces: Complete migration manual with worked examples,
  |            decision tree, escalation protocol, verification checklist
  |
  v
PHASE G: Pilot Migration (2-3 pages)
  |  ~3-5 agents, ~3-5 hours
  |  Produces: 2-3 migrated pages, process validation, timing data
  |
  v
PHASE H: Playbook Refinement
  |  ~1 agent, ~1-2 hours
  |  Produces: Playbook v2.1 with pilot learnings
  |
  v
======= NON-NEGOTIABLE BOUNDARY =======
  |  After this point, the design system is FROZEN.
  |  No updates, no new sections, no patches.
  |  Everything below uses ONLY what exists above.
  v
PHASE I+J: Full Migration + Integrated Verification
  |  ~5-15 agents, ~15-40 hours (depends on page count)
  |  Produces: All pages migrated, provenance documented,
  |            soul compliance verified, pattern fidelity checked
  |
  v
DONE
```

---

## 3. CRITICAL PATH ANALYSIS

### What is on the critical path (cannot be parallelized)

```
CD --> Component Extraction + Pattern Library --> Playbook v2 --> Pilot --> Playbook Refinement --> Full Migration
```

Each of these depends on the prior phase's outputs. The total critical path is approximately:

| Phase | Hours (est.) | Cumulative |
|-------|-------------|-----------|
| CD | 4-5 | 4-5 |
| Extraction + Pattern Library | 6-10 | 10-15 |
| Content Analysis | 2-4 (partially parallel with above) | 12-17 |
| Playbook v2 | 3-4 | 15-21 |
| Pilot | 3-5 | 18-26 |
| Refinement | 1-2 | 19-28 |
| Full Migration | 15-40 | 34-68 |
| **Total** | **34-68 hours** | -- |

### What can be parallelized

1. **Token fix** (30 min) can happen ANY time before migration
2. **Content Analysis** can start as soon as CD is done -- it doesn't need the pattern library to CLASSIFY pages, only to ASSIGN patterns. Classification can begin while extraction/library is being built.
3. **Tooling** (if built) can happen in parallel with anything after the pilot
4. **Training** (if needed) can happen in parallel with anything after the pattern library

### Realistic session count

Assuming ~4-6 hours per session with context management:

| Session | Phases | Wall Time |
|---------|--------|-----------|
| Session 1 | CD Phase 0-1 (conventions + first 3 explorations) | ~4 hours |
| Session 2 | CD Phase 1-4 (remaining explorations + audit + synthesis) | ~4-5 hours |
| Session 3 | Component Extraction + Pattern Library | ~5-6 hours |
| Session 4 | Content Analysis + Playbook v2 | ~5-6 hours |
| Session 5 | Pilot Migration (2-3 pages) + Playbook Refinement | ~4-5 hours |
| Session 6+ | Full Migration (batched) | ~15-40 hours (3-8 sessions) |
| **Total** | **8-13 sessions** | **~34-68 hours** |

---

## 4. THE NON-NEGOTIABLE BOUNDARY IN DETAIL

### Where exactly does the "frozen" line sit?

After Phase H (Playbook Refinement), the design system is FROZEN. This means:

**FROZEN (cannot change after Phase H):**
- Token values (colors, spacing, typography, geometry)
- Soul pieces (5, bounded)
- Pattern definitions (density, organizational, axis, combination)
- Finding IDs and their meanings
- Convention spec (all sections)
- Anti-pattern registry
- Transition grammar (5x5 matrix)
- Fractal scale model (5 scales, bounded)
- ACCUMULATED-IDENTITY-v3

**NOT FROZEN (can evolve during migration):**
- Pattern library implementation details (CSS class names, HTML structures)
- Playbook wording and examples
- Content analysis assignments (a page can be re-classified)
- Migration priority order
- Verification checklists (can add items, not remove)
- Provenance documentation format

The distinction: **WHAT the system says** is frozen. **HOW we implement and document what the system says** can evolve.

### What if migration discovers a genuine gap?

Three scenarios, in order of likelihood:

**Scenario 1 (Most Likely): Content doesn't perfectly fit a pattern.**
Resolution: Use the escalation protocol from the playbook. Apply closest match + document the imperfection. This is acceptable -- the design system is a framework for reasoning, not a template for every possible page.

**Scenario 2 (Possible): A combination was never tested.**
Resolution: Use CD's combination rules + the accumulated identity's reasoning framework to derive the answer. The accumulated identity (v3) is designed so agents can make new decisions consistent with prior ones. This IS the system working as intended.

**Scenario 3 (Unlikely): A genuine contradiction in the system.**
Resolution: Document the contradiction. Apply the rule from the highest-authority source (soul > findings > patterns > convention spec). File the contradiction as KNOWN-ISSUE in provenance, not as a design system change. This preserves the non-negotiable while acknowledging reality.

None of these scenarios require updating the design system. They all work WITHIN the existing system.

---

## 5. PHASE-BY-PHASE DELIVERABLES MATRIX

| Phase | Key Deliverables | Needed/Nice/Covered | Effort | Dependency |
|-------|-----------------|---------------------|--------|------------|
| **A: CD** | 6 explorations, 15-25 CD-F findings, ACCUM-ID-v3, HANDOFF-CD-TO-MIGRATION, exhaustive pattern guide | **NEEDED** | 4-5h | HANDOFF-AD-TO-CD |
| **B+D: Extract + Library** | Layout primitives, transition components, pattern picker decision tree, implementation recipes | **NEEDED** | 6-10h | Phase A |
| **C: Token Fix** | Corrected tokens.css (3-4 contradictions) | **ALREADY COVERED** (30 min fix) | 0.5h | None |
| **E: Playbook v2** | Complete migration manual, decision tree, escalation protocol, verification checklist | **NEEDED** | 3-4h | Phase B+D, Phase F |
| **F: Content Analysis** | Page inventory, pattern assignments, complexity estimates, priority ranking | **NEEDED** | 2-4h | Phase A (partial: Phase B+D) |
| **G: Pilot** | 2-3 migrated pages, process validation, timing data | **NEEDED** | 3-5h | Phase E, Phase F |
| **H: Refinement** | Playbook v2.1 with pilot learnings | **NEEDED** (lightweight) | 1-2h | Phase G |
| **I+J: Migration + Verify** | All pages migrated with provenance, soul compliance verified | **NEEDED** | 15-40h | Phase H |
| **K: Tooling** | CSS linter, scaffolding generator | **NICE TO HAVE** | 4-8h | Phase G |
| **L: Training** | Condensed guides, worked examples | **NICE TO HAVE** (NEEDED if humans) | 4-8h | Phase D |

---

## 6. WHAT IS HONESTLY MISSING (THE HARD TRUTHS)

### 6.1 The Abstraction Cliff is Real

The gap between "~15,000 lines of design research documentation" and "a migrated React page" is massive. Phases B+D (extraction + pattern library) are the bridge. Without them, migration agents read prose findings and try to translate them into JSX. This is like reading a music theory textbook and trying to play a symphony -- possible for a prodigy, impractical at scale.

### 6.2 The Migration Guide is 10% of What's Needed

The existing migration-guide.md covers CSS reset and callout conversion. It predates OD, AD, and CD. After the 3-way unification discovery (axis = organization = density), migration is fundamentally a content architecture redesign informed by 84+ findings, not a CSS reskinning exercise. The playbook v2 is not a "nice update" -- it's a replacement.

### 6.3 No Per-Page Plan Exists

Nobody has inventoried the docs-spa pages. No document says "there are N pages, they are classified as X, Y, Z content types, they should use these patterns." Phase F (content analysis) creates this for the first time.

### 6.4 React/TSX Migration is Unaddressed

Every exploration is raw HTML with inline styles. The docs-spa uses React + Next.js + MDX + (likely) Tailwind or CSS modules. No document addresses how to bridge validated HTML patterns to the React component architecture. Phase B (component extraction) begins to address this, but the full React integration story depends on understanding the docs-spa's actual architecture.

### 6.5 The "Design Mind" Transfer is Optimistic

README.md Part VIII envisions the design system as a "transferable reasoning model" -- agents absorb the chain and can make new decisions. This works for agents with unlimited context windows who can read all 15,000+ lines. In practice, migration agents will have limited context and will need pre-digested guidance (which is what the pattern library and playbook provide).

### 6.6 CD-005 Might Need Replacement

Cross-stage analysis flagged CD-005 (All Callouts as Conversation) as potentially redundant with OD-001. If CD-005 is replaced with a Multi-Axis Transition exploration, the combination rules it produces will differ from the current plan. This doesn't affect the roadmap structure, but it affects CD's outputs.

---

## 7. OPTIMISTIC vs REALISTIC vs PESSIMISTIC TIMELINES

| Scenario | Total Hours | Sessions | Calendar Time |
|----------|-----------|----------|---------------|
| **Optimistic** | ~34 hours | 8 sessions | 2-3 weeks |
| **Realistic** | ~50 hours | 11 sessions | 3-4 weeks |
| **Pessimistic** | ~68 hours | 15 sessions | 4-6 weeks |

**What drives variance:**
- Page count in docs-spa (unknown -- Phase F reveals this)
- CD discoveries (surprising findings could require additional exploration)
- Pilot results (clean pilot = fast progression; problematic pilot = more prep needed)
- Migration parallelism (can multiple pages be migrated simultaneously?)

---

## 8. THE ROADMAP AS A DECISION TREE

For the user considering "where should I invest time?":

```
Q: Is CD complete?
|-- NO --> Do CD first. Everything depends on it.
|-- YES --> Continue

Q: Can I explain how to implement any KortAI pattern in code?
|-- NO --> Do Component Extraction + Pattern Library (B+D)
|-- YES --> Continue

Q: Do I know how many pages I'm migrating and what types they are?
|-- NO --> Do Content Analysis (F)
|-- YES --> Continue

Q: Do I have a complete, multi-dimensional migration process documented?
|-- NO --> Do Playbook v2 (E)
|-- YES --> Continue

Q: Have I successfully migrated 2-3 test pages without needing design system changes?
|-- NO --> Do Pilot Migration (G)
|-- YES --> Proceed to Full Migration (I)
```

---

## 9. SUMMARY

**The complete roadmap has 8 essential phases (A through H) before migration begins, plus migration itself (I+J).**

Five phases are DEFINITELY NEEDED:
1. **CD** (already planned, ~4-5h)
2. **Component Extraction + Pattern Library** (not planned, ~6-10h)
3. **Content Analysis** (not planned, ~2-4h)
4. **Migration Playbook v2** (partially exists, ~3-4h)
5. **Pilot Migration** (not planned, ~3-5h + 1-2h refinement)

One phase is ALREADY COVERED with a minor fix:
- **Token Implementation** (~30 min)

Two phases are NICE TO HAVE:
- **Tooling** (build only if pilot reveals need)
- **Training** (needed only if humans join)

The user's non-negotiable ("don't update the design system during migration") makes phases 2-5 load-bearing. Without them, migration would inevitably discover gaps that force design system updates. With them, the system is exhaustively prepared before migration begins, and the escalation protocol provides a pressure release for edge cases.

**The honest bottom line:** Between CD completion and full migration, there are ~18-25 hours of preparation work (phases B through H). This is not bureaucratic overhead -- it is the infrastructure that makes the non-negotiable achievable. Skipping it means either breaking the non-negotiable or producing a shallow CSS-only migration that wastes the 4 stages of design research.

---

*Analysis complete. 2026-02-11.*
*Sources: CD-SYNTHESIS-BRIEFING (647 lines), BACKBONE.md (491 lines), README.md Parts VI-VIII (~280 lines), PATTERN-INDEX.md (460 lines), migration-guide.md (265 lines), gap-analysis (284 lines), accumulated-intelligence (311 lines), migration-plans (229 lines).*
