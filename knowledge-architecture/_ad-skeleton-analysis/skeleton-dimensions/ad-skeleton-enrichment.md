# AD Skeleton: Enrichment Lifecycle Architecture

**Author:** enrichment-analyst (Task #3)
**Date:** 2026-02-09
**Source Analysis:** 11 OD re-enrichment files + execution plan (synthetic-orbiting-firefly.md)

---

## EXECUTIVE SUMMARY

OD enrichment was a 3-phase, 67+ agent remediation: build (6 agents) -> audit (17 agents) -> re-enrich (43 agents). This was necessary because OD built first and enriched later. AD eliminates the re-enrichment phase entirely by embedding enrichment DURING build. The key architectural shift: research packages become BUILD INPUTS, not post-hoc remediation feeds.

### Key Numbers from OD Re-Enrichment (What AD Avoids)
- 43 agents across 7 waves for re-enrichment alone
- 92 new files, 15,000 insertions
- 42 new EXT-* findings registered after build
- 3 quality dialects unified (should have been 1 from the start)
- 0% R-2 consumption at build time (27 findings entirely untouched)
- ~5-7 hours wall time for re-enrichment

---

## 1. AD CONVENTION-FIRST ARCHITECTURE

### 1.1 What AD-CONVENTION-SPEC.md Contains

AD-CONVENTION-SPEC.md inherits the FULL OD-CONVENTION-SPEC.md (468 lines, 12 sections) and extends it with axis-specific conventions. It is written in Wave 0 before any builder starts.

**Inherited from OD (unchanged):**
- 10-line Soul Compliance Checklist (border-radius: 0, box-shadow: none, locked palette, font trio, border weights, spacing model, callout limit, fractal self-similarity)
- 3-Category Border System (Cat 1: 3px+ structural, Cat 2: 1px data, Cat 3: 1px micro; 2px BANNED)
- Dark Code Block Theme (#1A1A1A bg, syntax highlighting from locked palette)
- Full-bleed Dark Header Layout (Instrument Serif title, meta line, subtitle, inner wrapper 860px)
- 5-Level Type Scale (~1.5x ratio: 2.5rem -> 1.625rem -> 1.375rem -> 1rem -> 0.875rem + 0.75rem meta)
- Dual Spacing System (numbered --space-1 through --space-20 + Gestalt aliases within/between/chapter)
- Color Application Table (locked palette + 5 callout accent colors + 3 zone backgrounds)
- Page Length Target (10,000-14,000px body height, 15% whitespace minimum)
- Unified :root Block (copy-paste ready CSS custom properties)
- Required Base Styles (selection, focus-visible, skip-link, reduced-motion, print)
- Per-Standard Soul Test Results (all 7 PASS all 3 gates)

**AD-specific additions:**
- CSS Grid patterns for axis layouts (named grid areas for axis zones, fr unit conventions, responsive breakpoints for axis transitions)
- Flexbox configurations for axis-internal content flow (when to use flex vs grid, alignment defaults for axis components)
- Axis transition signals (how density shifts when crossing axis boundaries; inherits OD-F-FL-001 transitive chain: org -> density -> axis)
- Zone tokens for axis layouts (extending --color-zone-sparse/dense/breathing to axis-specific zones like --axis-primary-zone, --axis-secondary-zone)
- AD-specific intentional divergences (analogous to OD-006's sanctioned overrides, but for crown-jewel AD explorations)
- Per-standard Soul Test for each AD addition (same 3-gate protocol: Soul Pieces, Locked Tokens, Anti-Patterns)

**Format:** Same as OD-CONVENTION-SPEC.md -- numbered sections, each with a unified standard definition, usage examples, exceptions, and Soul Test result table. Target: 300-500 lines.

### 1.2 AD-SOUL-TEMPLATE.html Structure

A skeleton HTML file that every AD builder copies as starting point. Ensures convention compliance from line 1 rather than requiring post-hoc unification.

```
AD-SOUL-TEMPLATE.html
├── <!DOCTYPE html> + <html lang="en">
├── <head>
│   ├── Font loading (Instrument Serif, Inter, JetBrains Mono via Google Fonts)
│   ├── <style>
│   │   ├── :root { ... } (EXACT copy from AD-CONVENTION-SPEC.md Section 10)
│   │   ├── Base styles (selection, focus-visible, skip-link, reduced-motion, print)
│   │   ├── Header styles (full-bleed dark, inner wrapper 860px)
│   │   ├── Code block styles (dark theme, syntax palette)
│   │   ├── Callout styles (5 accent variants, 4px left border)
│   │   └── /* AD-SPECIFIC: Axis layout grid/flex skeleton */
│   └── </style>
├── <body>
│   ├── <a class="skip-link"> (accessibility)
│   ├── <header> (full-bleed dark, meta line + title + subtitle)
│   ├── <main id="main-content">
│   │   └── <!-- Builder: add content sections here -->
│   └── </main>
│   └── <!-- Version badge, provenance comment -->
└── </html>
```

**Key principle:** The template embeds ALL convention decisions in CSS. Builders only add CONTENT -- they cannot accidentally create dialect divergence because the styling is pre-baked.

**OD lesson applied:** OD's 3-dialect quality gap (Polished/Functional/Editorial) arose because builders each made independent styling decisions. The template eliminates this by providing a single starting point with zero styling freedom.

### 1.3 AD-BINARY-GATES.md (10-Item Self-Check)

Every AD builder runs this checklist before reporting completion. Binary yes/no -- no judgment calls.

```
AD BINARY GATES (Builder Self-Check)
[ ] 1. Started from AD-SOUL-TEMPLATE.html (not blank file)
[ ] 2. border-radius: 0 on ALL elements (grep: no border-radius > 0 in source)
[ ] 3. box-shadow: none on ALL elements (grep: no box-shadow in source except "none")
[ ] 4. ALL colors from locked palette (grep: no hex values outside palette)
[ ] 5. Font trio only (Instrument Serif, Inter, JetBrains Mono)
[ ] 6. ALL research package findings applied (cross-check research-package-ad-{N}.md SOUL PASS list)
[ ] 7. Inline threading header present with BUILT ON / CONSUMED BY tables
[ ] 8. Version badge "v1 enriched" in header (not "v1" alone)
[ ] 9. EXT-AXIS-* finding IDs cited in HTML comments where applied
[ ] 10. No 2px structural borders (Cat 1 = 3px+, Cat 2/3 = 1px only)
```

**Gate:** ALL 10 = YES. Any NO = builder must fix before reporting completion.

### 1.4 WHEN These Are Created

| Artifact | Created In | Created By | Gate |
|----------|-----------|------------|------|
| AD-CONVENTION-SPEC.md | Wave 0 | Convention Agent | Exists + all standards PASS Soul Test Gates 1-3 |
| AD-SOUL-TEMPLATE.html | Wave 0 | Convention Agent | Exists + renders at localhost:8080 with correct :root values |
| AD-BINARY-GATES.md | Wave 0 (or Phase A) | Lead / Convention Agent | Exists + 10 items defined |

**HARD BLOCK:** No Wave 1 builder spawns until all three convention artifacts exist and pass validation. This is the single most important gate -- a convention failure amplifies across ALL explorations.

---

## 2. AD DARK MATTER INDEXING

### 2.1 What Working Artifact Directories AD Creates

AD creates a single working artifact directory with structured subdirectories:

```
knowledge-architecture/_ad-enrichment/
├── CLAUDE.md                       (orientation + file manifest, updated by Weaver)
├── AD-ENRICHMENT-STATE.md          (wave status + Finding ID Tracker)
├── research/
│   ├── research-package-ad-001.md  (per-exploration research)
│   ├── research-package-ad-002.md
│   └── ... (one per AD exploration)
├── verification-wave{N}.md         (per-wave gate verification)
├── identity-delta-wave{N}.md       (identity evolution between waves)
├── screenshots/
│   ├── before/                     (12+ PNGs at 1440px + 768px)
│   └── after/                      (12+ PNGs post-enrichment)
└── audit/                          (audit reports if adversarial audit runs)
```

**OD lesson applied:** OD's `_od-reenrichment/` grew to 40+ files. AD consolidates by structuring from the start (subdirectories for research, screenshots, audit) rather than flat dumping.

### 2.2 How Dark Matter Is Captured

Dark matter = undocumented knowledge living in working files that the formal provenance chain does not reference.

**OD approach (post-hoc):** 4 dark matter indexers (dm-a through dm-d) cataloged ~100 files across 4 underscore directories AFTER they already existed. This was remediation.

**AD approach (inline):** Dark matter is prevented, not remediated.

1. **Every new .md file born WITH inline threading header** -- this is a binary rule in every agent prompt, not a post-hoc insertion. The header declares BUILT ON and CONSUMED BY at creation time.
2. **CLAUDE.md file manifest updated by Weaver after each wave completion** -- every file is registered with owner, purpose, line count, and status.
3. **Finding ID Tracker in AD-ENRICHMENT-STATE.md** -- Weaver logs specific finding IDs added by each Scribe so subsequent agents know the current ID sequence. This prevents finding-ID collisions (the most damaging failure mode in OD's history).
4. **No separate dark matter indexing phase needed** -- if every file has a header and is tracked in the manifest, dark matter cannot accumulate.

**Gate:** At the end of each wave, Weaver verifies: every new file in `_ad-enrichment/` has an inline threading header. Any file without one is flagged as dark matter for immediate remediation.

### 2.3 Index Format

If dark matter indexing IS needed (recovery from missed headers), the format follows OD's proven dm-index structure:

```markdown
# Dark Matter Index: [directory name]
**Scope:** [directory path]
**Total files:** N
**Total lines:** N

## Directory Purpose
[1-2 sentences]

## Formal Chain Cross-References
| Formal Chain Document | References These Files |
|-----------------------|----------------------|

## File Catalog
### [Category] (N files, N lines)
| File | Lines | Agent | Purpose | Key Data |
|------|-------|-------|---------|----------|
```

---

## 3. AD RESEARCH PACKAGE FORMAT

### 3.1 Per-AD-Exploration Research Package Structure

Every AD exploration gets a dedicated research package written by a Researcher agent BEFORE the Builder starts. The package is the Builder's primary input alongside the soul template and convention spec.

**Template:**

```markdown
# Research Package: AD-{NNN} {Name} {Enrichment Type}

**Generated:** {date}
**Agent:** researcher-{id}
**Purpose:** Bespoke external research for AD-{NNN} {enrichment type}
**Target:** AD-{NNN} ({Pattern Name}) -- {density pairing} via {primary axis}
**Quality Rank:** {N}th of {total} (per prior synthesis or initial assessment)
**Density Pairing:** {pairing name} -- {brief description}

---

## CHAIN TRAVERSAL

### Path Followed:
1. {file1} (YAML frontmatter: predecessor = {file2})
2. {file2} -> {file3} -> ...
[Minimum 3 links deep]

### Emergent Insight:
[What I learned that is NOT in the compiled identity — 1-3 paragraphs]

### Queries Generated From Traversal:
| # | Query | Context Finding IDs | Traversal Path |
|---|-------|---------------------|----------------|

---

## SOUL PASS FINDINGS (for Builder)

### EXT-AXIS-{NNN}: {Finding Title}

| Field | Value |
|-------|-------|
| **Finding ID** | EXT-AXIS-{NNN} |
| **Summary** | {1-3 sentences} |
| **Application Guidance** | {Specific instructions for builder: what to add, where, how} |
| **Source URL** | {URL} |
| **Soul Test Result** | {Gate 1-3 PASS/FAIL with rationale} |
| **Gate 4 (Density Pairing)** | SUPPORTS/CONTRADICTS/NEUTRAL: {rationale} |
| **Gate 5 (Identity Tension)** | TENSION/NO TENSION: {description} |

[Repeat for each finding]

---

## UNAPPLIED R-{N} FINDINGS EVALUATION FOR AD-{NNN}

### R{N}-{ID}: {Finding Name}
**Description:** {what it proposes}
**Applicability to AD-{NNN}:** APPLICABLE / NOT APPLICABLE / CONDITIONALLY APPLICABLE
**Application Guidance for Builder:** {if applicable}
**Soul Test:** {PASS/FAIL with rationale}
**Verdict:** {recommendation}

### Unapplied R-{N} Summary for AD-{NNN}
| Finding | Verdict | Priority for Builder |
|---------|---------|---------------------|

---

## SOUL FAIL FINDINGS (documentation only, DO NOT APPLY)

### SOUL FAIL {N}: {Finding Name}
| Field | Value |
|-------|-------|
| **Source** | {source} |
| **What it proposes** | {description} |
| **Gate Failure** | {which gate(s) failed and why} |
| **Exclusion Rationale** | {why it contradicts soul} |

## SOUL FAIL SUMMARY
Count: N rejected. Pattern: {what keeps failing and why}

---

## GATE 4/5 CROSS-POLLINATION RE-EVALUATION
[Only in Wave 2+ packages: prior wave Gate 4/5 FAILs re-evaluated against THIS AD's density pairing]

---

## DISCOVERIES
[Surprising findings that extend or contradict identity -- feeds generative loop]
```

### 3.2 How R-4 Findings Are Mapped to Specific Explorations

R-4 (Axis Innovations) has 192 findings -- the largest research stream. AD must evaluate all 192 against each AD exploration, not leave them at 0% consumption like OD did with R-2.

**Mapping protocol:**
1. **Wave 0 researcher** produces an `r4-evaluation.md` (analogous to OD's `r2-evaluation.md` which was 485 lines evaluating 27 R-2 findings against 6 ODs)
2. For each R-4 finding: Soul Test (Gates 1-3), then per-AD applicability assessment
3. Result: master table showing which R-4 findings apply to which AD explorations
4. Each per-exploration research package references the r4-evaluation.md findings relevant to ITS exploration
5. **Binary gate:** r4-evaluation.md must exist before Wave 1 researchers start (prevents the OD failure where R-2 was entirely unconsumed)

### 3.3 How EXT-AXIS-* Bespoke Research Integrates

EXT-AXIS-* findings are external research commissioned specifically for AD explorations, analogous to OD's EXT-CONV-*, EXT-NARR-*, EXT-TASK-*, EXT-CONF-*, EXT-SPAT-*, EXT-CREATIVE-* series.

**Integration chain:**
1. Researcher traverses provenance chain (ACCUMULATED-IDENTITY -> OD-outbound-findings -> DD-outbound-findings)
2. Researcher generates queries FROM the traversal (not generic topics -- each query cites specific finding IDs)
3. Researcher conducts external web search targeting the queries
4. Each result is screened through 5-Gate Soul Test Protocol
5. SOUL PASS findings are assigned EXT-AXIS-{NNN} IDs and packaged for the Builder
6. SOUL FAIL findings are documented with exclusion rationale (negative knowledge)
7. Scribe registers all EXT-AXIS-* findings in EXT-RESEARCH-REGISTRY.md after Builder completes
8. Gate 4/5 cross-pollination: findings that FAIL for one AD's density pairing are re-evaluated by later wave researchers against THEIR AD's pairing

**OD numbers for reference:**
- OD produced 94 EXT-* findings across 6 categories (EXT-CONV: 11, EXT-NARR: 11, EXT-TASK: 12+7, EXT-CONF: 12+6, EXT-SPAT: 12+6, EXT-CREATIVE: 9+6)
- 42 new EXT-* findings came from re-enrichment alone
- AD should target comparable depth per exploration (6-12 EXT-AXIS-* per exploration)

---

## 4. AD ENRICHMENT-DURING-BUILD PROTOCOL

### 4.1 The Fundamental Shift

**OD lifecycle (what to avoid):**
```
Phase 1: Build (6 agents, ~3 hours)
  → 6 OD explorations created with minimal research integration
  → 3 quality dialects emerged (Polished/Functional/Editorial)
  → R-2 at 0% consumption, OD-002 at 0 external research

Phase 2: Audit (17 agents, ~45 min)
  → 89 findings discovered, 8 Critical
  → 16 fixes required

Phase 2.5: Fix (7 agents, ~25 min)
  → 16/16 fixes applied
  → 2 false positives discovered

Phase 3: Re-Enrich (43 agents, ~5-7 hours)
  → Convention spec created AFTER 3 dialects existed
  → 42 new EXT-* findings commissioned and applied
  → All 6 ODs re-enriched to unified standard
  → Dark matter indexed
  → Adversarial audit + 205-item verification

Total: 73+ agents, 3 separate phases, ~10+ hours
```

**AD lifecycle (the target):**
```
Wave 0: Convention + Research Foundation (~30 min)
  → AD-CONVENTION-SPEC.md (inherits OD + axis additions)
  → AD-SOUL-TEMPLATE.html (skeleton every builder copies)
  → AD-BINARY-GATES.md (10-item self-check)
  → r4-evaluation.md (192 R-4 findings mapped to AD explorations)
  → Dark matter prevention protocol active from minute 1

Wave 1-N: Research -> Build-With-Enrichment -> Verify (per batch, ~45-60 min each)
  → Researcher produces research package FIRST (chain traversal + EXT-AXIS-* + R-4 mapping)
  → Builder receives: soul template + convention spec + research package AS BUILD INPUT
  → Builder applies research findings DURING construction, citing finding IDs inline
  → Builder runs AD-BINARY-GATES self-check before reporting completion
  → Scribe updates provenance chain incrementally
  → Verifier runs binary gate checks
  → Lead writes identity-delta for next wave

Wave N+1: Synthesis + Infrastructure (~20-30 min)
  → Update formal chain documents
  → Produce ACCUMULATED-IDENTITY v2

Wave N+2: Adversarial Audit (~45-60 min)
  → Same protocol as OD (visual + programmatic + fresh-eyes)
  → But FEWER findings expected because convention was enforced from start

Total: ~same agent count for build+audit, but ZERO re-enrichment phase
```

### 4.2 How Builders Receive Research Packages AS BUILD INPUT

The critical mechanism: research packages are PREREQUISITES for builder spawning, not post-hoc enrichment feeds.

**Sequencing within each wave:**
```
Sub-Phase A: Researchers (parallel)
  researcher-Na → research-package-ad-{X}.md
  researcher-Nb → research-package-ad-{Y}.md
  [Gate: research packages exist + SOUL PASS findings identified]

Sub-Phase B: Builders (parallel, GATED on Sub-Phase A completion)
  builder-Na reads: AD-SOUL-TEMPLATE.html + AD-CONVENTION-SPEC.md + research-package-ad-{X}.md
  builder-Nb reads: AD-SOUL-TEMPLATE.html + AD-CONVENTION-SPEC.md + research-package-ad-{Y}.md
  [Builder prompt includes: "You MUST apply every SOUL PASS finding from your research package"]
  [Gate: builder self-check (10-item AD-BINARY-GATES) PASS + score >= target]

Sub-Phase C: Scribe (sequential, GATED on Sub-Phase B completion)
  → Registers EXT-AXIS-* findings in EXT-RESEARCH-REGISTRY.md
  → Updates OD-outbound-findings.md successor (AD-outbound-findings.md)
  → Updates RESEARCH-ACTIVE.md
  [Gate: all finding IDs registered, no duplicates]

Sub-Phase D: Verifier (sequential, GATED on Sub-Phase C completion)
  → Playwright DOM checks (0 soul violations)
  → Research application rate >= 80%
  → Convention compliance (fonts, colors, borders, spacing)
  → Provenance checks (chain files updated)
  [Gate: all checks PASS]
```

**Binary rule for ALL builders:** "DO read your research-package-ad-{N}.md BEFORE writing any HTML. DO apply every SOUL PASS finding from the package, citing the EXT-AXIS-* ID in an HTML comment at the point of application. DO run the 10-item AD-BINARY-GATES self-check before reporting completion. DO include a DISCOVERIES section in your completion report."

### 4.3 How the Weaver Checks Convention Compliance DURING Build

The Weaver does not wait until all builders finish. It checks incrementally:

1. **After each builder completes:** Weaver reads the builder's output file header to verify it started from AD-SOUL-TEMPLATE.html (checking for the :root block signature)
2. **Weaver tracks the Finding ID Tracker** in AD-ENRICHMENT-STATE.md -- logs specific finding IDs added by each Scribe so subsequent Scribes know the current ID sequence
3. **Weaver verifies file manifest completeness** -- every new file in `_ad-enrichment/` must have an inline threading header
4. **Weaver alerts Lead of drift** -- if a builder's output diverges from convention (detected via header structure or :root block diff), Weaver flags immediately rather than waiting for audit

**OD lesson applied:** OD's Weaver tracked progress but did not check convention compliance during build. The 3-dialect problem was only discovered during the audit phase. AD's Weaver is a continuous compliance monitor.

---

## 5. AD CALIBRATION PROTOCOL

### 5.1 How to Detect Calibration Violations

Calibration violations = agent-authored rules treated as if they were research-backed. This is the most subtle form of dark matter.

**OD example:** OD-003 had 3 intentional calibration violations planted to test audit thoroughness (border-radius: 4px, off-palette #B8A080, 2px structural border). Detection rate was 89% overall (8/9 across 3 auditors). Both targeted auditors achieved 100%.

**AD detection protocol:**

1. **Distinguish T1 from T2 assertions:**
   - T1 (Research-backed): cites a specific finding ID (R-{N}-{ID}, DD-F-{NNN}, OD-F-{NNN}, EXT-AXIS-{NNN})
   - T2 (Convention/agent-authored): does not cite a finding ID; is a decision made by the convention agent or builder
   - Every value in AD-CONVENTION-SPEC.md must be labeled T1 or T2

2. **Binary gate for convention spec:**
   Every convention value must cite its source using one of:
   - `(T1: {finding ID})` -- research-backed, traceable to provenance chain
   - `(T2: CONVENTION -- agent-authored, rationale: {1 sentence})` -- explicit acknowledgment that this is an agent decision, not research

3. **Example from OD-CONVENTION-SPEC.md (what this looks like):**
   - Border 3-cat system: `(T1: OD-F-AP-001, audit finding #1 systemic)` -- research-backed
   - Page length 10,000-14,000px: `(T2: CONVENTION -- agent-authored, rationale: splits difference between Dialect A avg 8,114px and Dialect B avg 17,613px)` -- agent decision
   - Dark code blocks: `(T1: OD-AUDIT-SYNTHESIS Section 3 + Soul Piece 1/4)` -- research-backed
   - Zone token names (--color-zone-sparse etc.): `(T2: CONVENTION -- agent-authored, rationale: semantic naming for density concepts from OD-F-003/005)` -- agent decision using research concepts but agent-chose names

### 5.2 How to Distinguish T1 from T2 Assertions

| Signal | T1 (Research) | T2 (Convention) |
|--------|--------------|-----------------|
| Has a finding ID | YES (e.g., DD-F-006, R3-023, EXT-CONV-006) | NO |
| Source is a URL or research file | YES | NO |
| Could be traced through provenance chain | YES (Research -> T1 -> DD -> OD -> AD) | NO (originates at THIS stage) |
| Agent could have decided differently | NO (research constrains the value) | YES (agent chose among valid options) |
| Removal would break chain | YES | NO |

### 5.3 Binary Gate: Source Citation Requirement

```
AD CALIBRATION GATE
For every assertion in AD-CONVENTION-SPEC.md:
[ ] 1. Is the value labeled T1 or T2?
[ ] 2. If T1: does the cited finding ID exist in the provenance chain?
[ ] 3. If T2: is the rationale documented?
[ ] 4. If T2: is it clearly marked "CONVENTION: agent-authored"?
[ ] 5. Are there any UNLABELED values? (FAIL if yes -- all values must be T1 or T2)
```

**OD lesson applied:** OD's convention spec implicitly mixed T1 and T2 assertions. For example, the "zone token" naming convention (--color-zone-sparse) was an agent decision inspired by research (OD-F-003, OD-F-005) but was not explicitly labeled as T2. AD makes this distinction explicit from creation.

### 5.4 Audit Calibration Testing

Following OD's proven calibration test pattern:

1. **Before the adversarial audit wave, Lead plants 3 intentional violations** in one AD exploration:
   - 1 soul violation (e.g., border-radius > 0 on a small element)
   - 1 off-palette color (subtle, e.g., warm brown instead of locked palette value)
   - 1 convention violation (e.g., 2px structural border)
2. **Detection threshold: >= 80%** (at least 2 of 3 detected across all auditors)
3. **Post-audit: reveal violations, compare detection rates, remove planted violations**
4. **Document in calibration-violations.md** with per-auditor detection rates

**OD calibration result for reference:** 89% overall (8/9 detections). Fresh-eyes missed the subtle off-palette color but both targeted auditors achieved 100%. This validates that systematic source-level analysis catches what visual inspection misses.

---

## 6. GENERATIVE LOOP ARCHITECTURE (Identity Evolution)

### 6.1 The Loop

OD's generative loop produced 3 identity deltas across 3 waves, feeding accumulated discoveries forward:

```
Identity v1 (ACCUMULATED-IDENTITY-v1.md, 539 lines)
  → Wave 1 researchers use identity to generate queries
  → Wave 1 discoveries surprise: zone tokens embody OD-F-005 at token level
  → Lead writes identity-delta-wave1.md (10-15 lines)
  → Identity v1 + delta1 → Wave 2 researchers ask DIFFERENT questions
  → Wave 2 discoveries: collapsible islands make density VISIBLE
  → Lead writes identity-delta-wave2.md with forward question for Wave 3
  → Identity v1 + delta1 + delta2 → Wave 3 asks the forward question
  → Wave 3 resolves: fractal annotation layer makes FRACTAL visible
  → Wave 4 synthesizes ALL into ACCUMULATED-IDENTITY v1.1
```

**AD applies the same loop:**
```
Identity v1.1 (ACCUMULATED-IDENTITY post-OD-reenrichment)
  → AD Wave 1 researchers use identity + OD deltas to generate axis-specific queries
  → Discoveries feed identity-delta-ad-wave1.md
  → Each delta carries forward questions targeting next wave's explorations
  → Final wave synthesizes into ACCUMULATED-IDENTITY v2
```

### 6.2 Binary Rules for Identity Evolution

**Lead:** "DO write identity-delta-ad-wave{N}.md after each batch verifier PASSES. DO include: surprises, identity refinements, new questions, SOUL FAIL summary. Each delta MUST contain at least 1 specific new question that references findings from THIS wave and targets a SPECIFIC aspect of the next wave's AD(s). Generic questions are NOT acceptable."

**Researchers:** "DO read ALL prior identity deltas in addition to ACCUMULATED-IDENTITY. DO re-evaluate prior wave SOUL FAIL Gate 4/5 findings against YOUR AD's density-axis pairing."

**Builders:** "DO include a DISCOVERIES section in completion report: findings that surprised, contradicted, or extended the current identity. DO ALSO append discoveries to the research-package-ad-{N}.md file (persists to file, survives context compaction)."

---

## 7. VERIFICATION AND BEFORE/AFTER COMPARISON

### 7.1 Per-Wave Verification Format

Each wave gets a verification report following OD's proven format:

```markdown
# Wave {N} Gate Verification Results
**Verifier:** verifier-{N}
**Scope:** AD-{X} + AD-{Y} post-enrichment gate check
**Method:** Playwright MCP + grep on source HTML + direct file reads of chain files

## AD-{X}: {Pattern Name} ({score}/40)
| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | Exploration exists? | YES/NO | {evidence} |
| 2 | Builder score >= {target}/40? | YES/NO | {evidence} |
| 3 | 0 soul violations? | YES/NO | Playwright DOM check: {count} |
| 4 | Research application rate >= 80%? | YES/NO | grep confirms {N}/{M} findings |
| 5 | Convention applied? | YES/NO | Playwright-verified fonts, colors, borders |
| 6 | OD-F findings applied? | YES/NO | grep confirms OD-F-005, OD-F-AP-001, etc. |
| 7 | No new 2px structural borders? | YES/NO | Playwright DOM check |
| 8 | Spirit violations addressed? | YES/NO | {evidence} |
| 9 | Score >= previous? | YES/NO | {comparison} |

## Provenance Checks (Shared)
| # | Check | Result | Evidence |
| 10 | AD-outbound-findings.md updated? | YES/NO | |
| 11 | New EXT entries in EXT-RESEARCH-REGISTRY? | YES/NO | |
| 12 | RESEARCH-ACTIVE.md updated? | YES/NO | |
| 13 | AD-RESEARCH-GATE.md updated? | YES/NO | |
| 14 | No new dark matter? | YES/NO | |

## GATE VERDICT: PASS/FAIL
```

### 7.2 Before/After Comparison Format

Final verification produces a comparison following OD's before-after-comparison.md format:

| Comparison Dimension | Metrics |
|---------------------|---------|
| Score Comparison | Per-AD scores, deltas, target met? |
| Dialect Consistency | Convention dimensions unified? (should be 100% from start) |
| Research Consumption | EXT-* count, application rate, R-4 consumption rate |
| Thin-Border Count | Per-AD <3px borders, reduction from OD baseline |
| Page Height | Per-AD height vs target range |
| Soul Violations | Must be 0 across all explorations |

**OD benchmark numbers (AD should exceed):**
- Average score improvement: +1.7 points (33.8 -> 35.5)
- Thin-border reduction: -71% (1,058 -> 303)
- EXT-* application rate: 100% (up from mixed 67-100%)
- R-2 consumption: 100% evaluated (up from 0%)
- Dialect unification: 7/7 convention dimensions unified (up from 0/7)

---

## 8. FAILURE MODES AND MITIGATIONS

### From OD Experience

| Failure Mode | OD Occurrence | AD Mitigation |
|-------------|--------------|---------------|
| 3-dialect quality gap | Builders made independent styling decisions | AD-SOUL-TEMPLATE.html eliminates styling freedom |
| 0% R-2 consumption | R-2 never evaluated during OD build | r4-evaluation.md required in Wave 0 before builders start |
| Post-hoc convention | Convention spec created AFTER 3 dialects existed | Convention spec + template created in Wave 0 BEFORE any builder |
| Dark matter accumulation | 100+ working files without formal chain reference | Every file born WITH inline threading header |
| Finding ID collisions | Scribes didn't know current ID sequence | Weaver logs finding IDs in AD-ENRICHMENT-STATE.md Finding ID Tracker |
| Builder doesn't write files | Workers spawned by captains frequently complete without writing files | Binary rule: "CRITICAL: You MUST write your output file using the Write tool" |
| Playwright contention | Only 2/13 visual workers got Playwright access | Sequential visual auditing; only 1-2 agents use Playwright at a time |
| Calibration violations undetected | Agents treat convention as research | T1/T2 labeling required for every assertion |
| Agent compaction mid-task | Context lost, agent restarts from scratch | Compaction survival protocol: re-read output file as checkpoint |

### AD-Specific Risks

| Risk | Mitigation |
|------|-----------|
| R-4 is 192 findings (7x larger than R-2's 27) | Dedicated Wave 0 researcher for r4-evaluation.md; per-exploration packages cite only applicable R-4 subset |
| Axis layouts are more complex than organizational patterns | Template includes grid/flex skeleton; convention spec defines axis-specific zone tokens |
| OD-F-FL-001 transitive chain (org->density->axis) means axis decisions are triple-constrained | Researchers must traverse full chain through OD-outbound-findings before generating queries |
| ACCUMULATED-IDENTITY v1.1 may be too large for single-context-window absorption | Identity evolution via deltas: base identity (539 lines) + deltas (10-15 lines each) = incremental understanding |

---

## COMPACTION-SAFE SUMMARY

- **Convention-first:** AD-CONVENTION-SPEC.md + AD-SOUL-TEMPLATE.html + AD-BINARY-GATES.md created in Wave 0 before any builder starts
- **Research-as-input:** Research packages are PREREQUISITES for builder spawning, not post-hoc feeds
- **Dark matter prevention:** Every file born WITH inline threading header; Weaver tracks manifest continuously
- **Calibration transparency:** Every convention value labeled T1 (research-backed) or T2 (agent-authored)
- **Generative loop:** Identity evolves between waves via deltas with forward questions
- **Gate-based:** Binary yes/no checks at every phase boundary; no judgment calls
- **OD's 43-agent re-enrichment eliminated:** Convention + research-as-input = enrichment embedded in build
