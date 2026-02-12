# GAP ANALYSIS: CD Completion to Full Design System Adoption
## What Steps Might Be Missing Between CD and Migration?

**Agent:** gap-analyst
**Date:** 2026-02-11
**Sources:** BACKBONE.md, README.md (Parts VI-VIII), STAGE-HEADER (CD), HANDOFF-AD-TO-CD.md, CD-SYNTHESIS-BRIEFING.md, migration-guide.md, MASTER-STATE.md, combination-rules.md

---

## 1. EXECUTIVE SUMMARY

The pipeline currently reads: DD -> OD -> AD -> CD -> Migration. But "Migration" is treated as a monolithic successor to CD, when in reality it requires at least 3-4 intermediate steps that are currently undefined. The existing migration-guide.md is a page-level CSS conversion checklist -- it covers Step 1 of what is actually a 5+ step process. The biggest risk is attempting Migration as a single phase and discovering mid-execution that the design system's 84+ findings, 20 patterns, 5 soul pieces, and 4 combination rules don't translate into actionable per-page decisions without significant intermediate work.

---

## 2. GAP-BY-GAP ASSESSMENT

### Gap 1: Pilot Migration
**Verdict: DEFINITELY NEEDED**

**What exists:** Nothing. The pipeline goes CD -> "Migration" with no pilot concept.

**What's missing:** A controlled test of applying the complete design system (all 4 dimensions + combination rules) to 1-2 real pages before attempting full migration. This is distinct from CD explorations because CD builds hypothetical content scenarios; pilot migration applies the system to EXISTING content with all its messiness (legacy CSS, varying content types, non-ideal structures).

**Evidence from prior phases:**
- Every stage revealed surprises that invalidated assumptions (OD found 2px border epidemic, AD found font-loading false positives, DD found traffic-light issues). Migration will have its own class of surprises that can only be found by doing it once.
- The CD-SYNTHESIS-BRIEFING explicitly warns: "Without CD, Migration would have to guess at combination rules." Even WITH CD, Migration will have to translate abstract combination grammar into concrete page decisions. A pilot tests whether that translation works.
- README.md Part VI Principle 4: "Build explorations that formally CONSUME prior findings." Migration needs its own consumption test, not just inheritance.

**What a pilot answers:**
- How long does a single page migration actually take?
- Which findings are easy to apply vs. which require interpretation?
- What content structures exist in the real pages that the exploration scenarios never tested?
- What's the gap between the soul compliance checklist (migration-guide.md Step 5) and actual implementation?

**Risk if skipped:** The first full migration attempt becomes the pilot, but with the pressure and expectations of a production effort. Mistakes get baked in rather than learned from.

---

### Gap 2: Component Extraction
**Verdict: DEFINITELY NEEDED**

**What exists:** 24 HTML explorations (6 DD + 6 OD + 6 AD + 6 CD forthcoming) with inline styles. 11 component specifications in DESIGN-SYSTEM/components/OVERVIEW.md. React component implementations in docs-spa/components/ at 92% soul compliance.

**What's missing:** The explorations are standalone HTML files with hand-crafted CSS. The React components exist but were built BEFORE the density/organization/axis/combination research. There is no bridge between "validated exploration patterns" and "reusable React components that implement those patterns."

**Evidence:**
- BACKBONE.md Section 12: "Using goes backward: Pattern -> Provenance -> Research." But the actual implementation goes: Pattern -> ... -> what React component? The migration-guide.md converts callouts to `<aside class="callout callout--info">` HTML, but the real docs-spa uses React components like `<Callout type="info">`.
- The explorations use CSS classes like `.dense-section`, `.geological-layer`, `.crescendo-phase` that don't exist in the React component library.
- Combination-rules.md defines 4 rules for component sequencing, but there's no React component or utility that enforces these rules.

**What extraction produces:**
- Layout components that encode density patterns (PulseLayout, CrescendoLayout, etc.)
- Wrapper components that enforce combination rules (TemperatureFlow, WeightBalance)
- Pattern-aware section containers that handle transition grammar
- CSS utility classes or variables that map to validated token values

**Risk if skipped:** Migration becomes a manual CSS-by-CSS translation exercise. Each migrated page reinvents the pattern implementation from scratch, with no guarantee of consistency. The 20 validated patterns exist only as HTML artifacts, not as reusable building blocks.

---

### Gap 3: Pattern Library
**Verdict: DEFINITELY NEEDED (subsumes and extends Gap 2)**

**What exists:** DESIGN-SYSTEM/patterns/ has density-patterns.md, organizational-patterns.md, and combination-rules.md. These are DOCUMENTATION files -- they describe patterns in prose, not implementable code.

**What's missing:** A formalized, implementable pattern library that translates 20 validated patterns + combination rules + transition grammar into composable building blocks. This is where the design system stops being "research documentation" and starts being "usable infrastructure."

**Evidence:**
- PATTERN-INDEX.md maps content types to patterns (Tutorial -> PULSE, Reference -> Islands). But it doesn't show HOW to implement PULSE in a React page.
- The CD-SYNTHESIS-BRIEFING Section 4.3 explicitly states: "Component chemistry is the bridge between abstract patterns and real documentation pages. DD/OD/AD validated patterns in isolation. Migration will apply patterns to real content. CD validates the TRANSLATION LAYER."
- But even after CD validates the translation layer, the translation is documented as FINDINGS (CD-F-### entries), not as CODE. Someone still needs to turn CD-F-### findings into implementable patterns.
- README.md Part VII shows the "Output Layer" (tokens, components, patterns, guides, anti-patterns) but NONE of these folders contain implementable code -- they're all markdown.

**What a pattern library produces:**
- Composable section components implementing each density pattern
- Layout templates combining DD + OD + AD patterns per CD combination rules
- Transition components implementing the 5x5 transition grammar (smooth/bridge/breathing)
- A "pattern picker" API or utility: given content type + content structure -> recommended pattern combination

**Risk if skipped:** The 84+ findings and 20 patterns remain documentation artifacts. Migration engineers must read thousands of lines of provenance documentation to understand what pattern to apply to each page, then manually implement that pattern from scratch. The "design mind" stays in the documentation, not in the code.

---

### Gap 4: Content Analysis
**Verdict: DEFINITELY NEEDED**

**What exists:** No systematic inventory of existing pages, their content types, structures, or migration readiness.

**What's missing:** A content audit that maps every existing page in docs-spa to:
- Content type (tutorial, reference, getting started, etc.)
- Current structure (headings, sections, component usage)
- Applicable pattern combination (from PATTERN-INDEX.md)
- Migration complexity estimate (simple token swap vs. full restructure)
- Content quality assessment (is the content itself ready, or does it need rewriting?)

**Evidence:**
- MASTER-STATE.md shows the pipeline is at "Phase 2.2 (Organizational Explorations) -- OD-001 next" which is STALE (the actual state is much further along). This staleness itself demonstrates that operational tracking drifts from reality.
- Migration-guide.md Step 4 says "Identify Content Type" but provides only 4 mappings (Tutorial->PULSE, Getting Started->CRESCENDO, Reference->Islands, Long-form->WAVE). After OD and AD, there are 20 patterns. After CD, there will be combination recipes. The content analysis needs to be much more granular.
- No file in the system catalogs what pages actually exist in docs-spa and what state they're in.

**What content analysis produces:**
- Inventory of all pages with content type classification
- Per-page pattern recommendation (density + org + axis + combination)
- Migration priority ranking (easiest first? Most visible first? Most broken first?)
- Content gaps (pages that need new content, not just restyling)

**Risk if skipped:** Migration starts without knowing what it's migrating. Teams pick pages randomly, discover mid-migration that some pages need content restructuring (not just style changes), and the effort balloons unpredictably.

---

### Gap 5: Migration Playbook
**Verdict: DEFINITELY NEEDED**

**What exists:** migration-guide.md -- a 265-line document covering CSS reset, callout conversion, code block conversion, density pattern selection (4 mappings), verification checklist, and common pitfalls. This was written BEFORE OD, AD, and CD.

**What's missing:** The existing guide covers "how to make CSS soul-compliant" but NOT "how to redesign a page's information architecture using validated patterns." After 4 stages of exploration, migration is not just a CSS conversion -- it's a content architecture redesign informed by 84+ research findings.

**Evidence:**
- Migration-guide.md Step 4 (Apply Density Patterns) is 8 lines. It says "Identify Content Type" and gives 4 mappings. But after AD-F-023 (ATTENTION TOPOLOGY), applying density patterns means simultaneously applying density + organization + axis + combination. This is a fundamentally different task than what the guide describes.
- The HANDOFF-AD-TO-CD.md Section 10.7 explicitly recommends HANDOFF-CD-TO-MIGRATION.md include a "PATTERN SELECTION GUIDE for Migration ('given content type X, use combination Y')." This is planned but doesn't exist yet.
- README.md Part IV describes 4 engagement levels. A migration playbook needs to target Level 3 (Extension) -- engineers absorbing the chain enough to make new decisions for uncovered content types.

**What a playbook produces:**
- Complete step-by-step migration process (not just CSS, but content architecture)
- Decision tree: Content Type -> Pattern Combination -> Layout Template -> Implementation Steps
- Page-by-page migration template with all checkpoints
- Pattern selection guide WITH worked examples
- Escalation protocol: what to do when content doesn't fit any validated pattern
- Post-migration verification beyond the current 20-item checklist

**Risk if skipped:** Migration engineers follow the existing 265-line guide, produce soul-compliant CSS, but miss the entire organizational/spatial/combination dimension. Pages look "correct" (sharp edges, no shadows, right colors) but feel wrong because information architecture wasn't redesigned.

---

### Gap 6: Tooling
**Verdict: NICE TO HAVE**

**What exists:** Migration-guide.md includes pseudo-code for CSS variable injection and anti-pattern detection lint rules (~20 lines). AD produced an AD-SOUL-TEMPLATE.html that could serve as a starting template.

**What's missing:** Actual automated tools -- linters, scaffolding generators, migration scripts, visual regression testing.

**Evidence:**
- The migration-guide.md "Migration Automation" section (lines 227-249) has placeholder pseudo-code, not real tools.
- AD's convention spec is 822 lines -- manually verifying compliance against it is expensive. An automated checker would be high-value.
- Soul compliance is binary (border-radius: 0, box-shadow: none). Binary rules are perfectly suited for automated checking. The meta-analysis found "Binary rules achieve 100% agent compliance" -- automated tools extend this to human compliance.

**Why NICE TO HAVE, not DEFINITELY NEEDED:**
- The design system has been maintained by Claude agents for the entire pipeline. If migration is also Claude-driven, the agents can check compliance programmatically without separate tooling.
- Manual migration with the playbook is viable for the current page count. Tooling ROI depends on page volume.
- Building tooling before the first pilot migration means building tools for hypothetical workflows. Better to do 2-3 manual migrations, identify the repetitive pain points, THEN automate.

**What tooling produces (if built):**
- CSS linter enforcing soul rules + token values
- Scaffolding generator: `create-kortai-page --pattern CRESCENDO --axis F-PATTERN --org NARRATIVE`
- Visual regression tests comparing migrated pages to validated explorations
- Migration progress dashboard

---

### Gap 7: Training / Knowledge Transfer
**Verdict: NICE TO HAVE (with caveat)**

**What exists:** README.md (THE KORTAI DESIGN MIND) at 109KB is itself a training document. It explicitly describes 3 reading modes and 4 engagement levels. The CLAUDE.md files provide per-directory orientation.

**What's missing:** Nothing critical IF the migration is Claude-driven. If HUMANS need to do migration, then training is DEFINITELY NEEDED because:
- README.md is 2,053 lines. No human will read all of it before migrating a page.
- The provenance chain is designed to be absorbed by AI agents with large context windows, not humans scanning documentation.
- The "4 engagement levels" framework (Application -> Understanding -> Extension -> Validation) is elegant but optimized for agents that can read all referenced files.

**The caveat:**
- If the team remains Claude-agent-driven: NICE TO HAVE. The CLAUDE.md files + README.md are already the training material, and agents read them automatically.
- If humans join the migration effort: DEFINITELY NEEDED. Humans need condensed training, worked examples, video walkthroughs, and interactive pattern explorers -- not 2,053-line philosophical documents.

**Why this is an important strategic question:**
- The meta-analysis found: "The 'orchestrator trap' -- user is single point of failure with zero bus factor." If migration depends on one user directing Claude agents, the same trap applies. Training is the path to expanding the bus factor.

---

### Gap 8: Design Token Implementation
**Verdict: ALREADY COVERED (mostly)**

**What exists:**
- DESIGN-SYSTEM/tokens/ contains locked token values (colors, geometry, spacing, typography)
- MASTER-STATE.md includes a quick reference CSS block with :root variables
- Migration-guide.md Step 1 covers CSS variable injection
- QUICK-START.md covers loading CSS variables and fonts
- The actual React components in docs-spa/ already use many of these tokens

**What's partially missing:**
- The token files are markdown documentation. The actual CSS :root block exists in globals.css but may have drift from the documented tokens (the comprehensive audit found rgba opacity violations).
- There's no formal "token package" (npm package, CSS-in-JS theme, design token JSON) that could be imported by any consumer.
- Some tokens are defined differently in different places (the comprehensive audit corrected several stale values).

**Why ALREADY COVERED:**
- Token implementation is a solved problem for this codebase -- the values are defined, documented, and mostly implemented.
- Any remaining drift was caught by the comprehensive audit (71dc02c commit).
- Creating a formal token package (JSON, CSS custom properties file, etc.) would be a Gap 6 tooling exercise, not a separate prerequisite.

---

## 3. THE MISSING PHASE: "PRE-MIGRATION" (Between CD and Migration)

Based on the analysis above, there is a distinct phase missing from the pipeline:

```
DD -> OD -> AD -> CD -> [ PRE-MIGRATION ] -> Migration
```

### Pre-Migration Phase Contents

| Step | Name | Duration Est. | Dependency |
|------|------|---------------|------------|
| PM-1 | Content Analysis | ~2-3 hours | CD complete (needs pattern vocabulary) |
| PM-2 | Component Extraction | ~4-6 hours | CD complete (needs combination rules) |
| PM-3 | Pattern Library Assembly | ~3-4 hours | PM-2 complete |
| PM-4 | Migration Playbook v2 | ~2-3 hours | PM-1, PM-3 complete |
| PM-5 | Pilot Migration (2 pages) | ~3-4 hours | PM-4 complete |
| PM-6 | Playbook Refinement | ~1-2 hours | PM-5 complete |

**Estimated total: ~15-22 hours of agent work (~3-4 sessions)**

### What HANDOFF-CD-TO-MIGRATION.md Should Request

The CD-SYNTHESIS-BRIEFING (Section 8.1) plans for HANDOFF-CD-TO-MIGRATION.md as a "terminal gate file." That handoff should explicitly request:
1. Content analysis of all docs-spa pages
2. Pattern selection per page (density + org + axis + combination)
3. Component extraction from validated explorations
4. Migration playbook incorporating all 4 dimensions
5. Pilot migration before full rollout

---

## 4. BIGGEST RISK ASSESSMENT

### "What's the biggest risk if we go straight from CD to Migration without intermediate steps?"

**The Abstraction Cliff.**

The pipeline has produced ~84 research findings, 20 validated patterns, 5 soul pieces, 4 combination rules, a 5x5 transition grammar, and a 3-way equivalence meta-discovery. This is an extraordinary body of design intelligence. But it exists as:
- Prose findings in markdown files (~15,000+ lines)
- HTML exploration artifacts (~30 files, ~600-800KB)
- Provenance chain documents (~50+ formal chain files)
- Convention specs (~2,000+ lines across DD/OD/AD/CD)

Between this body of knowledge and "a migrated documentation page," there is a chasm. The findings describe WHAT patterns look like and WHY they work. They do not describe HOW to implement them in a React/Next.js application against real content.

**The risk scenario:**
1. CD completes. HANDOFF-CD-TO-MIGRATION says "apply patterns to real pages."
2. Migration agent reads the handoff, the 20 patterns, the combination rules, the transition grammar.
3. Migration agent opens a real page (e.g., a Getting Started guide).
4. Agent knows it should use CRESCENDO + NARRATIVE + F-PATTERN + combination recipe 2.
5. Agent knows border-radius: 0 and box-shadow: none.
6. Agent does NOT know how to translate "F-PATTERN vertical descent" into React JSX for a page that currently has 4 h2s, 6 code blocks, 3 callouts, and a file tree.
7. Agent falls back to "apply soul tokens, keep existing structure" -- producing a soul-compliant page with no organizational/spatial/combination redesign.
8. Result: The page "passes" the migration-guide.md checklist but uses 0% of the OD/AD/CD research.

**This is the abstraction cliff: the gap between design intelligence and implementation.**

The intermediate steps (content analysis, component extraction, pattern library, migration playbook, pilot) exist specifically to build the bridge across this cliff. Without them, Migration becomes an expensive CSS reskinning exercise that wastes 4 stages of design research.

---

## 5. SUMMARY TABLE

| Gap | Verdict | Priority | Hours Est. |
|-----|---------|----------|-----------|
| Pilot Migration | DEFINITELY NEEDED | P1 -- must happen before full migration | 3-4 |
| Component Extraction | DEFINITELY NEEDED | P1 -- enables pattern library | 4-6 |
| Pattern Library | DEFINITELY NEEDED | P1 -- makes patterns implementable | 3-4 |
| Content Analysis | DEFINITELY NEEDED | P1 -- tells us what we're migrating | 2-3 |
| Migration Playbook v2 | DEFINITELY NEEDED | P1 -- replaces the 265-line guide | 2-3 |
| Tooling | NICE TO HAVE | P2 -- build after pilot reveals pain points | 4-8 |
| Training | NICE TO HAVE* | P2 (P1 if humans involved) | 2-4 |
| Design Token Implementation | ALREADY COVERED | -- | -- |

*Training is DEFINITELY NEEDED if humans will do migration work. NICE TO HAVE if Claude-only.

**Bottom line:** There are 5 DEFINITELY NEEDED intermediate steps between CD and full Migration. These form a coherent "Pre-Migration" phase that should be planned as part of the pipeline, not discovered ad hoc during Migration execution. The existing migration-guide.md covers approximately 10% of what Migration actually requires.

---

*Analysis complete. 2026-02-11.*
*Sources: BACKBONE.md (491 lines), README.md Parts VI-VIII (~500 lines), STAGE-HEADER CD (197 lines), HANDOFF-AD-TO-CD (234 lines), CD-SYNTHESIS-BRIEFING (647 lines), migration-guide.md (265 lines), MASTER-STATE.md (419 lines), combination-rules.md (177 lines).*
