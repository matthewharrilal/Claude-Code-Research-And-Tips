# COMPREHENSIVE AUDIT SPECIFICATION
## Visual-First, Hierarchical-Team, Maximum-Resource UI/UX + Provenance Audit

**Phase:** Post-OD Re-Enrichment Comprehensive Audit
**Supersedes:** HANDOFF-OD-TO-AD.md (read for context, do not follow as execution guide)
**Date:** 2026-02-09
**Status:** SPECIFICATION — awaiting audit and plan creation

---

===============================================================================
## 1. PURPOSE AND MANDATE
===============================================================================

### 1.1 What This Phase Does

Conduct the most comprehensive visual, structural, and provenance audit of the
entire KortAI showcase ecosystem. Every rendered page gets visually inspected
via Playwright BEFORE any code-level analysis. Every research artifact gets
triaged for usefulness. Every provenance link gets verified. Every finding gets
fixed. No resource constraints.

### 1.2 Why This Phase Exists

The OD re-enrichment (43 agents, 7 waves, 92 files committed) produced
high-quality output but revealed a critical execution problem: **the Lead
orchestrator hit context compaction repeatedly** due to managing 43 agents
directly in a flat team structure. This specification introduces a
**hierarchical team architecture** that eliminates Lead compaction entirely.

Additionally, the ecosystem has accumulated significant working artifacts
(_od-audit-scratchpad/, _workflow-metacognition/, _provenance-gap-analysis/,
_provenance-deep-dive/, _remediation/, _od-reenrichment/, _execution-journal/)
that need triage: either they're actively useful and properly indexed, or they
get moved to archival.

### 1.3 The Mandate

> "I don't care how many resources we expend. Maximum resources. As long as it
> gets rid of context compaction issues, clear communication, and delegation."

This means:
- **Unlimited agents.** If a Captain needs 15 sub-agents, they get 15.
- **No shortcuts.** Every page gets visual Playwright inspection. Every file
  gets provenance verification. Every research artifact gets triage.
- **Comprehensiveness over speed.** Wall time is irrelevant. Quality of audit
  and fix coverage is the only metric.

### 1.4 Dual Purpose

1. **Primary:** Audit and fix the entire showcase ecosystem.
2. **Secondary:** Validate that hierarchical team topology eliminates context
   compaction where flat topology failed.

### 1.5 NON-NEGOTIABLE: Actual Visual Auditing

This must be stated explicitly because it has been violated before:

**Every visual audit agent MUST actually render and visually inspect the page
via Playwright.** Reading HTML source code and inferring what it looks like is
NOT visual auditing. Taking a screenshot of an empty tab is NOT visual auditing.

The protocol:
1. HTTP server MUST be running and verified BEFORE any visual agent spawns.
2. Every visual agent MUST navigate to the page via HTTP URL (not file://).
3. Every visual agent MUST take a screenshot AFTER the page loads.
4. Every visual agent MUST verify the screenshot is NOT empty/blank.
5. If a screenshot is blank: the agent MUST retry, try a different URL format,
   or report GATE FAIL — it does NOT proceed with an empty screenshot.

**GATE 0.5 (Playwright Verification):** Before any visual agent spawns, Lead
spawns a single verification agent that:
- Navigates to the first OD page via HTTP
- Takes a screenshot
- Verifies the screenshot shows actual content (not blank)
- Reports PASS or FAIL
If FAIL: Lead troubleshoots the server. NO visual agents spawn until PASS.

### 1.6 NON-NEGOTIABLE: Research-Grounded Granular Auditing

Visual auditing is not just "does it look right?" — it's "does it match what
our research says it should look like?" Every visual finding must be cross-
referenced against the 337 research findings (R1-R5) and the applicable
EXT-*, DD-F-*, and OD-F-* findings.

**Component-level granularity means:**
- Not just "the page looks fine" but "this specific border on this specific
  Q/A container is 2px when OD-CONVENTION-SPEC.md says it should be 1px or 3px"
- Not just "typography seems consistent" but "this heading is 24px Inter when
  the convention spec says h2 should be 28px at this breakpoint"
- Not just "colors are dark" but "this code block background is #1a1a2e when
  convention spec says it should be #1e1e2e"
- Not just "borders look fine" but "DD-F-016 (border consistency) is violated
  because this section uses a 2px border while the adjacent section uses 1px"

Every finding MUST cite:
- The specific research finding ID that applies (or "NO RESEARCH — novel finding")
- The specific CSS property and its actual vs expected value
- The specific element (selector path or description)
- A screenshot showing the issue

### 1.7 NON-NEGOTIABLE: TeamCreate for Maximum Team Infrastructure

The team MUST use TeamCreate (not just Task-spawned agents). This provides:
- Full team infrastructure: SendMessage, TaskCreate, TaskUpdate, TaskList
- Shared task list for coordination
- Named agents discoverable via team config
- Structured communication channels

Every Captain uses TeamCreate awareness. Every worker is spawned with
team_name: "comprehensive-audit". The full team coordination infrastructure
is used — not just fire-and-forget Task agents.

### 1.8 NON-NEGOTIABLE: Gates Not Guidelines

Every quality check in this specification is a BINARY GATE — PASS or FAIL.
There are NO guidelines, recommendations, or suggestions. If a gate check
is NO, execution STOPS and routes back to the responsible agent.

**If a section reads like a guideline, interpret it as a gate.**

---

===============================================================================
## 2. THE CONTEXT COMPACTION PROBLEM
===============================================================================

### 2.1 What Happened in OD Re-Enrichment

The OD re-enrichment used a flat team structure:
```
Lead
├── agent-1 (worker)
├── agent-2 (worker)
├── ...
└── agent-43 (worker)
```

The Lead directly:
- Composed 43 detailed agent prompts (~500-1000 tokens each = ~30K tokens)
- Received 43 idle notifications (~100 tokens each = ~4K tokens)
- Read 43 agent output files for gate checking (~2K tokens each = ~86K tokens)
- Composed identity deltas between waves
- Maintained wave state across 7 waves

**Result:** Lead compacted context 3+ times. After each compaction, the Lead
had to re-read RE-ENRICHMENT-STATE.md and 5+ files to recover orientation.
Information was lost. Decisions had to be re-derived.

### 2.2 The Solution: Hierarchical Team

```
Lead (this instance)
│   Context budget: ~30K tokens
│   Direct conversations: 6 (5 Captains + Weaver)
│
├── Captain-Visual (owns ALL Playwright work)
│   │   Context budget: ~80K tokens (worker-heavy)
│   ├── visual-od-001, visual-od-002, ..., visual-od-006
│   ├── visual-dd-001, ..., visual-dd-006
│   ├── visual-showcase-pages (multiple)
│   └── visual-components
│
├── Captain-Structural (owns ALL code/CSS audit)
│   │   Context budget: ~80K tokens
│   ├── structural-od (HTML structure auditor)
│   ├── structural-dd (HTML structure auditor)
│   ├── structural-css (CSS property auditor)
│   ├── structural-tsx (React component auditor)
│   └── structural-tokens (design token compliance)
│
├── Captain-Provenance (owns ALL provenance verification)
│   │   Context budget: ~60K tokens
│   ├── prov-inline-headers (verify all inline threading headers)
│   ├── prov-research-refs (verify finding IDs in rendered HTML)
│   ├── prov-formal-chain (verify formal chain documents)
│   └── prov-cross-refs (verify BUILT ON links point to real files)
│
├── Captain-Triage (owns ALL usefulness triage)
│   │   Context budget: ~60K tokens
│   ├── triage-od-audit-scratchpad
│   ├── triage-workflow-metacognition
│   ├── triage-provenance-gap + deep-dive + remediation
│   ├── triage-od-reenrichment
│   └── triage-execution-journal
│
├── Captain-Fix (owns ALL fix execution, spawned AFTER audit)
│   │   Context budget: ~80K tokens
│   ├── fixer-visual (fix visual findings)
│   ├── fixer-structural (fix code findings)
│   ├── fixer-provenance (fix provenance gaps)
│   ├── fixer-archival (execute triage recommendations)
│   └── verifier-team (Playwright + programmatic verification)
│
└── Weaver (cross-references ALL captain outputs)
        Context budget: ~40K tokens
        Reads captain reports, identifies cross-references
        Maintains AUDIT-STATE.md
```

### 2.3 Why This Eliminates Lead Compaction

| Metric | Flat (43 agents) | Hierarchical (6 direct) |
|--------|-------------------|------------------------|
| Lead prompt composition | 43 × ~700 = ~30K tokens | 6 × ~500 = ~3K tokens |
| Lead idle notifications | 43 × ~100 = ~4K tokens | 6 × ~100 = ~600 tokens |
| Lead gate checks | 43 × ~200 = ~9K tokens | 6 × ~500 = ~3K tokens |
| Lead file reads for gates | ~86K tokens | ~12K tokens (6 reports) |
| **Total Lead context growth** | **~129K tokens** | **~19K tokens** |

The Lead's context stays under 30K tokens for the entire session. No compaction.

### 2.4 What If a Captain Compacts?

Captains handle their own recovery:
1. Re-read their mission brief (written to file at spawn)
2. Re-read AUDIT-STATE.md for current progress
3. Re-read their workers' output files
4. Continue from where they left off
5. Message Lead: "Recovered from compaction. Continuing."

The Lead does NOT need to manage Captain compaction. It's internal to the Captain.

### 2.5 Communication Protocol

```
Workers → Captain: WRITE findings to designated output file. NO messages to Lead.
Captain → Lead:    3-line summary message + file path to full report.
Lead → Captain:    Mission brief at spawn. Gate results after.
Lead → Weaver:     "Captain-X report ready at [path]."
Weaver → Lead:     Cross-reference synthesis report.
```

**Binary rules:**
- Workers NEVER message the Lead directly.
- Captains NEVER relay individual worker findings in messages (write to files).
- Lead NEVER reads worker output files directly (reads Captain summary reports).
- NO broadcast messages (kills context across all recipients).

---

===============================================================================
## 3. SCOPE
===============================================================================

### 3.1 What Gets Audited

#### Pillar A: Visual Audit (Captain-Visual)

| Target | Files | Viewports | Method |
|--------|-------|-----------|--------|
| OD Explorations | 6 HTML files | 1440px + 768px | Playwright screenshot + visual inspection |
| DD Explorations | 6 HTML files | 1440px + 768px | Playwright screenshot + visual inspection |
| Showcase components | ~30 .tsx files rendered | 1440px | Playwright component rendering |
| Research pages | 5 R-*.md rendered | 1440px | Playwright if renderable |

**Visual audit criteria (per page) — ALL are BINARY GATES:**

GATE VA-01: Page renders (not blank) — PASS/FAIL
GATE VA-02: No visual overflow (content bleeding outside containers) — PASS/FAIL
GATE VA-03: No element misalignment (elements that should align, don't) — PASS/FAIL
GATE VA-04: Typography matches convention spec (font-family, font-size, font-weight, line-height per element type) — PASS/FAIL
GATE VA-05: Colors match convention spec (header bg, code block bg, text color, accent color) — PASS/FAIL
GATE VA-06: Spacing matches convention spec (section margins, element padding, gaps) — PASS/FAIL
GATE VA-07: Border system compliant (ZERO 2px, correct category per border) — PASS/FAIL
GATE VA-08: Soul compliance visual (NO border-radius, NO box-shadow, NO drop-shadow, NO semi-transparent bg) — PASS/FAIL
GATE VA-09: Responsive layout functional at 768px (no cut-off, no overlap) — PASS/FAIL
GATE VA-10: Code blocks consistent (dark bg per convention, monospace font, readable) — PASS/FAIL
GATE VA-11: Headers consistent (dark bg per convention, content aligned) — PASS/FAIL
GATE VA-12: No dead zones (unexplained large empty gaps in page flow) — PASS/FAIL
GATE VA-13: Research compliance — at least 5 applicable research findings cited per OD page with evidence — PASS/FAIL

**Research-Grounded Component Audit (embedded in each visual worker prompt):**

For each page, the visual worker MUST:
1. Read OD-CONVENTION-SPEC.md (468 lines) BEFORE taking screenshots
2. Read the page's inline threading header BUILT ON list
3. For each component/section visible in screenshots:
   a. Identify the component type (header, code-block, Q/A pair, section divider, etc.)
   b. Check COMPUTED visual properties against convention spec values
   c. Cross-reference against applicable research: which R-*, EXT-*, DD-F-*, OD-F-* findings govern this component?
   d. Record: property, expected value (from spec), actual value (from visual), finding ID
4. For OD pages specifically: verify EXT-* findings cited in the HTML are visually reflected
   (e.g., if EXT-CONV-003 adds a specific enrichment, is it visually present?)

**Research files every visual worker reads (MANDATORY — before ANY screenshot):**
- OD-CONVENTION-SPEC.md (468 lines — convention values for every component)
- SOUL-DISCOVERIES.md (5 soul pieces — binary compliance)
- anti-patterns/registry.md (what to reject on sight)
- The specific OD page's inline header (BUILT ON list = what research informed it)
- OD-outbound-findings.md (17 OD-F findings — what this page should demonstrate)
- EXT-RESEARCH-REGISTRY.md (EXT-* finding definitions — verify visual presence)
- The applicable R-* research file (R1 for OD-001/002, varies by page)

**Research Validation Protocol (per component, per page):**

For each visible component (header, code block, Q/A pair, section divider,
callout box, zone token, border structure, etc.) the visual agent MUST:

1. **Convention Check:** Compare computed visual appearance against
   OD-CONVENTION-SPEC.md values. Record: property, expected, actual.
2. **EXT-* Visual Presence:** For each EXT-* finding ID cited in the page's
   HTML, verify via Playwright that the enrichment is VISUALLY PRESENT
   (not just in the code — actually visible when rendered).
   Example: EXT-CONV-003 adds a specific callout → is the callout visible?
3. **R-* Research Chain:** Trace back from the component to original research.
   Which R-1/R-3/R-4/R-5 finding does this component implement? Is the
   RESEARCH INTENT satisfied (not just the letter of the convention spec)?
   Example: R3-012 says "density should be fractal" → does the page show
   fractal density at page, section, and component levels?
4. **DD-F and OD-F Compliance:** For each applicable DD-F-* and OD-F-* finding,
   verify the component respects it.
   Example: OD-F-AP-001 (no 2px borders) → verify visually no 2px borders.
5. **Soul Piece Visual Check:** For each component, verify the 5 soul pieces
   are visually intact (sharp edges, correct font, 4px left border where
   applicable, no shadows, rectilinear shapes).

**Cross-OD Consistency Audit (Captain-Visual spawns a dedicated worker):**

After all per-page agents complete, Captain-Visual spawns `visual-cross-od`:
- Reads all 6 per-page visual reports
- Opens all 6 OD pages side-by-side (or in sequence) via Playwright
- For each component TYPE (header, code block, Q/A pair, etc.):
  - Compares visual appearance across all 6 ODs
  - Notes ANY inconsistency not documented as intentional variation
  - Cites OD-CONVENTION-SPEC.md for what should be uniform
  - Cites the specific OD's intentional variations (e.g., OD-006's 3rem title)
- Reports: CONSISTENT / INCONSISTENT per component type with evidence

**Visual Viewport Slicing Protocol:**

Each page gets 8-12 viewport screenshots scrolling from top to bottom:
1. Set viewport height to 900px
2. Navigate to page, wait for fonts.ready, disable animations
3. Screenshot viewport 0 (top of page) → save as {name}-vp00.png
4. Scroll down one viewport height → screenshot vp01
5. Repeat until bottom of page reached
6. Take one full-page screenshot for reference → {name}-full.png
7. For each viewport screenshot: audit every visible component using the
   Research Validation Protocol above

**Total visual targets: ~18 HTML pages × 2 viewports × ~10 viewport slices
= ~360+ screenshots + ~36 full-page screenshots ≈ 400 screenshots total.**

#### Pillar B: Structural Audit (Captain-Structural)

| Target | Files | Method |
|--------|-------|--------|
| OD HTML structure | 6 files (~80-120K each) | DOM analysis, CSS property verification |
| DD HTML structure | 6 files | DOM analysis, CSS property verification |
| React components | ~30 .tsx files | Code review for patterns, types, accessibility |
| CSS tokens | tokens/*.md | Verify computed styles match token declarations |
| Convention compliance | OD-CONVENTION-SPEC.md (468L) | Check all 6 ODs against spec |

**Structural audit criteria:**
- Soul compliance: border-radius: 0, box-shadow: none, filter: none, opacity: 1
- Border system: zero 2px borders, correct categorization
- Type scale: correct font sizes, weights, line-heights per convention
- Color compliance: correct hex/rgb values, no traffic-light
- Code block consistency: dark background across all pages
- Header consistency: dark headers, proper containment
- Semantic HTML: proper heading hierarchy, landmark elements
- Accessibility: alt text, ARIA labels, keyboard navigation
- Component patterns: proper prop types, error boundaries, memo usage

#### Pillar C: Provenance Audit (Captain-Provenance)

| Target | Scope | Method |
|--------|-------|--------|
| Inline threading headers | 156 files with headers (showcase) | Verify BUILT ON links, CONSUMED BY accuracy |
| Light sections | 9 files (showcase) | Verify parent phase references |
| Files WITHOUT headers | All .md/.html/.tsx in showcase | Identify gaps |
| Formal chain documents | stage-1 through stage-3 | Verify completeness |
| Finding ID references | EXT-*, R1-R5, DD-F-*, OD-F-* in OD HTML | Verify all cited findings exist |
| Research application | R-1 through R-5 findings | Verify claimed applications are real |
| ACCUMULATED-IDENTITY | v1 and v1.1 | Verify accuracy against current state |

**Current Provenance State (from inventory):**
- 156 of ~243 showcase files (64%) have INLINE THREADING HEADER
- Non-underscore directories: 100% coverage
- _od-reenrichment/: 95% coverage
- Older underscore dirs (_execution-journal, _od-audit-scratchpad, etc.): 0-4% coverage
- Only 9 files have LIGHT SECTION markers (vs 244 across full repo)
- 323 EXT-* references across 6 OD HTML files
- 461 research finding references across 30 knowledge-architecture files

**Provenance audit gates (ALL binary PASS/FAIL):**
GATE PV-01: Every BUILT ON reference points to an existing file — PASS/FAIL
GATE PV-02: Every CONSUMED BY claim is verifiable (consumer exists AND references this file) — PASS/FAIL
GATE PV-03: Every finding ID cited in OD HTML exists in the registry — PASS/FAIL
GATE PV-04: Every research finding marked "APPLIED" has evidence in rendered output — PASS/FAIL
GATE PV-05: Formal chain documents (stage-1 through stage-3) are internally consistent — PASS/FAIL
GATE PV-06: No broken links in the provenance graph — PASS/FAIL
GATE PV-07: PIPELINE-MANIFEST.md is current and accurate — PASS/FAIL
GATE PV-08: ACCUMULATED-IDENTITY v1.1 reflects current state (not stale) — PASS/FAIL

#### Pillar D: Research Triage (Captain-Triage)

| Directory | Files | Size | Task |
|-----------|-------|------|------|
| _od-audit-scratchpad/ | 29 | ~528KB | Triage: audit reports, screenshots |
| _workflow-metacognition/ | 10 | ~120KB | Triage: analysis artifacts |
| _provenance-gap-analysis/ | 15 | ~724KB | Triage: gap analysis + remediation |
| _provenance-deep-dive/ | 10 | ~340KB | Triage: deep analysis artifacts |
| _remediation/ | 11 | ~224KB | Triage: remediation execution artifacts |
| _od-reenrichment/ | ~65 | ~20MB | Triage: enrichment working artifacts |
| _execution-journal/ | 5 | ~60KB | Triage: execution records |
| Top-level KA .md files | ~20 | varies | Triage: prompts, protocols, specs |

**Known State (from research usage audit):**
- **62% of research files are formally orphaned** — 90/145 files in underscore
  directories are not referenced by any top-level knowledge-architecture file.
- **_od-reenrichment/ is the biggest (20MB, 65 files) but most disconnected** —
  zero top-level references despite generating 323 EXT-* IDs in OD HTML.
  The connection is real but entirely implicit.
- **Provenance headers dropped off after Phase 2B** — only 30% of KA files
  (52/172) have inline threading or light section headers. Files created after
  2026-02-06 tend to lack headers.
- **Three directories ARE well-connected** — _execution-journal/ (0% orphaned),
  _od-audit-scratchpad/ (0% orphaned), _provenance-gap-analysis/ (0% orphaned).
- **Research IS being used but the chain is implicit, not formal** — EXT finding
  IDs flow from research packages through to OD HTML, but no formal chain
  document connects _od-reenrichment/ to the provenance graph.

**Triage criteria (per file) — ALL binary PASS/FAIL:**
GATE TR-01: Is this file referenced by any rendered content? (inline header, import, link) — YES/NO
GATE TR-02: Does this file contain unique information not duplicated elsewhere? — YES/NO
GATE TR-03: Would a fresh agent need this file to answer J-03 questions? — YES/NO
GATE TR-04: Is this file a stale working scratchpad vs. a meaningful record? — MEANINGFUL/STALE

**Triage outcomes:**
- **KEEP:** File is actively useful, properly indexed, and referenced.
- **ARCHIVE:** File has historical value but is not actively useful. Move to
  `_archive/` with a manifest entry.
- **DELETE:** File is a duplicate, scratchpad fragment, or stale working artifact
  with no unique information. Remove entirely.

#### Pillar E: Fix Execution (Captain-Fix)

Spawned AFTER Pillars A-D complete. Receives the master audit report.

| Fix Category | Priority | Method |
|--------------|----------|--------|
| Visual findings (Critical/High) | P0 | Edit HTML/CSS, verify via Playwright |
| Structural findings (Critical/High) | P0 | Edit HTML/CSS/TSX |
| Provenance gaps (High) | P1 | Add/fix inline headers, chain documents |
| Soul violations | P0 | Binary fix (border-radius:0, box-shadow:none, etc.) |
| Research triage execution | P2 | Move files, update manifests |
| Medium/Low findings | P3 | Fix as time allows |

---

===============================================================================
## 4. PHASE EXECUTION SEQUENCE
===============================================================================

### Phase 0: Setup (Lead only)

**Actions:**
1. TeamCreate with team_name "comprehensive-audit"
2. Start HTTP server: `npx serve docs-spa/out -p 3000` (or dev server)
3. Create directories:
   - `knowledge-architecture/_comprehensive-audit/`
   - `knowledge-architecture/_comprehensive-audit/visual/`
   - `knowledge-architecture/_comprehensive-audit/structural/`
   - `knowledge-architecture/_comprehensive-audit/provenance/`
   - `knowledge-architecture/_comprehensive-audit/triage/`
   - `knowledge-architecture/_comprehensive-audit/fixes/`
   - `knowledge-architecture/_comprehensive-audit/screenshots/`
4. Create AUDIT-STATE.md (master state file — see Section 7 for format)
5. Create TaskCreate entries for all 6 agents (5 Captains + Weaver)

**Gate 0 (7 binary checks — ALL must PASS):**
```
GATE 0-1: TeamCreate executed with team_name "comprehensive-audit" — PASS/FAIL
GATE 0-2: HTTP server running — PASS/FAIL
GATE 0-3: _comprehensive-audit/ directory structure exists — PASS/FAIL
GATE 0-4: AUDIT-STATE.md created with correct format — PASS/FAIL
GATE 0-5: Playwright verification agent navigated to first OD page — PASS/FAIL
GATE 0-6: Playwright screenshot is NOT blank (actual content visible) — PASS/FAIL
GATE 0-7: All 6 TaskCreate entries created — PASS/FAIL
```
**FAIL ROUTE:** If GATE 0-5 or 0-6 FAIL, troubleshoot HTTP server. Try:
- Different port
- Different serve command (npx serve vs npm run dev vs npx http-server)
- Verify the URL path matches actual file location
- NEVER skip this gate. Empty Playwright tabs = wasted visual agents.

### Phase 1: Parallel Audit (ALL Captains + Weaver, run simultaneously)

**This is the key phase.** All 4 audit captains run IN PARALLEL, each managing
their own sub-agents internally. The Weaver monitors output files for
cross-reference opportunities.

```
┌─────────────────────────────────────────────────────────┐
│                    PHASE 1: PARALLEL AUDIT               │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │Captain-Visual │  │Captain-Struct│  │Captain-Prov  │  │
│  │  (Playwright) │  │  (Code/CSS)  │  │  (Chain)     │  │
│  │  12-15 workers│  │  5-8 workers │  │  4-6 workers │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  │
│         │                  │                  │          │
│  ┌──────┴───────┐                                       │
│  │Captain-Triage│                                       │
│  │  (Research)  │     ┌──────────────┐                  │
│  │  5-7 workers │     │   Weaver     │                  │
│  └──────────────┘     │ (cross-refs) │                  │
│                       └──────────────┘                  │
└─────────────────────────────────────────────────────────┘
```

**Lead's role in Phase 1:**
- Spawn 5 Captains + Weaver
- Wait for captain reports (check via file existence, NOT messages)
- Route Weaver: "Captain-X finished. Read their report at [path]."
- Do NOT read worker output files
- Do NOT compose worker prompts
- Do NOT run Playwright
- Do NOT read source code

**Gate 1 (per captain):**
- Captain report file exists at designated path
- Report contains: finding count, severity breakdown, recommended fixes
- No internal gate failures reported by Captain

**Gate 1 (aggregate):**
- All 4 captain reports exist
- Weaver cross-reference report exists
- Master audit report compiled (by Lead or Weaver)

### Phase 2: Cross-Reference and Prioritization (Lead + Weaver)

**Actions:**
1. Read all 4 captain reports (Lead reads file, not messages)
2. Read Weaver cross-reference report
3. Compile MASTER-AUDIT-REPORT.md with:
   - All findings by severity (Critical > High > Medium > Low > Note)
   - Cross-references identified by Weaver
   - Fix priority assignments
   - Per-Captain fix allocation
4. Write MASTER-AUDIT-REPORT.md to disk

**Gate 2:**
- MASTER-AUDIT-REPORT.md exists
- All Critical/High findings have fix assignments
- No contradictions between captain reports unresolved

### Phase 3: Fix Execution (Captain-Fix)

**Actions:**
1. Spawn Captain-Fix with MASTER-AUDIT-REPORT.md as input
2. Captain-Fix spawns fix sub-agents by domain:
   - fixer-visual (HTML/CSS for visual findings)
   - fixer-structural (HTML/CSS/TSX for structural findings)
   - fixer-provenance (headers, chain documents)
   - fixer-archival (file moves per triage recommendations)
3. Captain-Fix runs internal verification gates
4. Captain-Fix produces FIX-REPORT.md

**Gate 3:**
- FIX-REPORT.md exists
- All Critical findings fixed (or justified exception documented)
- All High findings fixed (or justified exception documented)
- Playwright verification screenshots confirm visual fixes

### Phase 4: Verification and Commit (Lead)

**Actions:**
1. Read FIX-REPORT.md
2. Spawn verification agent to Playwright-verify all fixed pages
3. Read verification results
4. If PASS: Commit all changes
5. Update AUDIT-STATE.md to COMPLETE
6. Shutdown all agents
7. Delete team

**Gate 4:**
- Verification PASS on all fixed pages
- Git status shows only intended changes
- AUDIT-STATE.md status: COMPLETE

---

===============================================================================
## 5. CAPTAIN SPECIFICATIONS
===============================================================================

### 5.1 Captain-Visual

**Mission:** Conduct visual-first Playwright audit of all rendered HTML pages.
Pure user-perspective. No code reading until visual findings are documented.

**Sub-Agents to Spawn:**

| Agent | Target | Viewport | Method |
|-------|--------|----------|--------|
| visual-od-001 | OD-001-conversational.html | 1440 + 768 | Viewport scroll + research validation |
| visual-od-002 | OD-002-narrative.html | 1440 + 768 | Viewport scroll + research validation |
| visual-od-003 | OD-003-task-based.html | 1440 + 768 | Viewport scroll + research validation |
| visual-od-004 | OD-004-confidence.html | 1440 + 768 | Viewport scroll + research validation |
| visual-od-005 | OD-005-spatial.html | 1440 + 768 | Viewport scroll + research validation |
| visual-od-006 | OD-006-creative.html | 1440 + 768 | Viewport scroll + research validation |
| visual-dd-001 | DD-001-breathing.html | 1440 + 768 | Viewport scroll + visual inspection |
| visual-dd-002 | DD-002-gradient.html | 1440 + 768 | Viewport scroll + visual inspection |
| visual-dd-003 | DD-003-islands.html | 1440 + 768 | Viewport scroll + visual inspection |
| visual-dd-004 | DD-004-layers.html | 1440 + 768 | Viewport scroll + visual inspection |
| visual-dd-005 | DD-005-rivers.html | 1440 + 768 | Viewport scroll + visual inspection |
| visual-dd-006 | DD-006-fractal.html | 1440 + 768 | Viewport scroll + visual inspection |
| visual-cross-od | All 6 ODs (comparative) | 1440 | Cross-OD consistency comparison |
| visual-cross-dd | All 6 DDs (comparative) | 1440 | Cross-DD consistency comparison |
| visual-components | Rendered React components | 1440 | Component rendering check |

**Total: 15 sub-agents. Each OD/DD page gets its own dedicated agent.
Each agent takes 8-12 viewport screenshots per viewport size (1440 + 768)
= ~20-24 screenshots per agent. Cross-OD/DD agents compare after individual
agents complete.**

**Sub-Agent Prompt Template:**
```
You are visual-od-{N} in the comprehensive-audit team. Your Captain is
Captain-Visual.

JOB: Take Playwright screenshots of {OD-file} at 1440px and 768px, then
visually inspect every screenshot for issues.

STEPS:
1. Navigate to http://localhost:3000/showcase/explorations/organizational/{file}
2. Wait for document.fonts.ready (CRITICAL: prevents false font findings)
3. Disable scroll animations: inject style "* { animation: none !important; opacity: 1 !important; transition: none !important; }"
4. Take full-page screenshot at 1440px → save to _comprehensive-audit/screenshots/{name}-1440.png
5. Resize to 768px → take full-page screenshot → save {name}-768.png
6. Take viewport-by-viewport screenshots scrolling down the page
7. For each screenshot: describe what you see. Note any:
   - Misalignment (elements not lined up)
   - Overflow (content bleeding outside containers)
   - Color inconsistency (unexpected colors, traffic-light violations)
   - Typography issues (wrong font, size, weight, line-height)
   - Spacing issues (inconsistent margins, cramped areas, empty gaps)
   - Border issues (visible 2px borders, unexpected rounded corners)
   - Perceived depth (shadows, gradients-as-light, 3D effects)
   - Code block issues (wrong background, unreadable text)
   - Header issues (wrong background, misaligned content)
   - Responsive failures (768px: content cut off, overlapping)

WRITE findings to: _comprehensive-audit/visual/visual-{name}.md

FORMAT per finding:
- Finding ID: VIS-{NNN}
- Severity: CRITICAL / HIGH / MEDIUM / LOW / NOTE
- Screenshot: {which screenshot shows it}
- Location: {what section of the page}
- Description: {what you see wrong}
- Expected: {what it should look like}

RULES:
1. You MUST use Playwright to actually view the page. Reading HTML is NOT visual auditing.
2. Wait for document.fonts.ready before any screenshot.
3. Disable animations before screenshot.
4. WRITE your report to file BEFORE sending any messages.
5. You do NOT message the Lead directly. Your Captain reads your file.
6. Severity guide: CRITICAL = unreadable/broken, HIGH = clearly wrong,
   MEDIUM = noticeable issue, LOW = minor polish, NOTE = observation.
```

**Captain-Visual Internal Gate:**
- All sub-agent report files exist
- At least 24 screenshots taken (12 pages × 2 viewports)
- Captain compiles CAPTAIN-VISUAL-REPORT.md from all sub-agent reports
- Severity breakdown included

**Captain-Visual Output:** `_comprehensive-audit/visual/CAPTAIN-VISUAL-REPORT.md`

---

### 5.2 Captain-Structural

**Mission:** Audit HTML structure, CSS compliance, React component code quality,
and design token adherence across all source files.

**Sub-Agents to Spawn:**

| Agent | Target | Method |
|-------|--------|--------|
| structural-od | All 6 OD HTML files | DOM structure, CSS property audit |
| structural-dd | All 6 DD HTML files | DOM structure, CSS property audit |
| structural-css | All CSS in HTML files | Property-level compliance check |
| structural-tsx | All React .tsx components | Code review, patterns, types |
| structural-tokens | tokens/*.md vs computed | Token value verification |
| structural-convention | OD-CONVENTION-SPEC.md | All 6 ODs against convention |

**Total: 6 sub-agents.**

**Sub-Agent Binary Checks (embedded in each prompt):**

Soul Compliance Checklist (10 items):
```
□ border-radius: 0 on every element
□ box-shadow: none on every element
□ filter: none on every element (no blur, drop-shadow)
□ opacity: 1 on every visual element (no semi-transparent backgrounds)
□ No rgba() with alpha < 1 on backgrounds
□ No gradients used as light source / depth cue
□ No traffic-light colors (red/yellow/green as semantic signals)
□ No parallax or z-axis movement
□ No rounded shapes (circles, pills, rounded rectangles)
□ Font family: correct per convention (Inter, monospace for code)
```

Border System Checklist (5 items):
```
□ Zero 2px borders anywhere
□ Category 1 (structural): 3px+ only where appropriate
□ Category 2 (separator): 1px only
□ Category 3 (micro): 1px only
□ border-left-width on Q/A containers: correct per convention
```

**Captain-Structural Output:** `_comprehensive-audit/structural/CAPTAIN-STRUCTURAL-REPORT.md`

---

### 5.3 Captain-Provenance

**Mission:** Verify every provenance link in the ecosystem. Ensure the chain is
structurally sound and that research is actually being used (not just cited).

**Sub-Agents to Spawn:**

| Agent | Target | Method |
|-------|--------|--------|
| prov-headers | All 156 files with inline headers | Verify BUILT ON files exist |
| prov-finding-ids | EXT-*, DD-F-*, OD-F-* in OD HTML | Verify each ID exists in registry |
| prov-formal | stage-1 through stage-3 chain docs | Verify completeness per checklist |
| prov-research | R-1 through R-5 application claims | Verify claimed applications are real |
| prov-accumulated | ACCUMULATED-IDENTITY v1 + v1.1 | Verify accuracy, no stale data |

**Total: 5 sub-agents.**

**Sub-Agent prov-headers specific rules:**
```
For each file with INLINE THREADING HEADER:
1. Extract all BUILT ON file paths
2. Verify each path points to an existing file (Glob or Read)
3. Extract all CONSUMED BY claims
4. For each CONSUMED BY: verify the consumer file exists AND references this file
5. Report: VALID (all links verified) or BROKEN (list broken links)

Finding format:
- PROV-H-{NNN}: {file} BUILT ON link to {target} — EXISTS / MISSING
- PROV-H-{NNN}: {file} CONSUMED BY {consumer} — VERIFIED / UNVERIFIABLE
```

**Sub-Agent prov-finding-ids specific rules:**
```
For each OD HTML file:
1. Grep for all finding IDs: EXT-\w+-\d+, DD-F-\d+, OD-F-\d+, OD-F-\w+-\d+
2. For each found ID:
   a. Search OD-outbound-findings.md for OD-F-* IDs
   b. Search DD-outbound-findings.md for DD-F-* IDs
   c. Search EXT-RESEARCH-REGISTRY.md for EXT-* IDs
   d. Search R1-R5 files for R-series findings
3. Report: ID EXISTS IN REGISTRY / ID NOT FOUND

Finding format:
- PROV-F-{NNN}: {id} in {file} — REGISTERED / ORPHAN
```

**Captain-Provenance Output:** `_comprehensive-audit/provenance/CAPTAIN-PROVENANCE-REPORT.md`

---

### 5.4 Captain-Triage

**Mission:** Assess every working artifact directory and orphaned file for
usefulness. Recommend KEEP, ARCHIVE, or DELETE for every item.

**Sub-Agents to Spawn:**

| Agent | Target | Files | Size |
|-------|--------|-------|------|
| triage-od-scratchpad | _od-audit-scratchpad/ | 29 | ~528KB |
| triage-metacognition | _workflow-metacognition/ | 10 | ~120KB |
| triage-provenance-dirs | _provenance-gap-analysis/ + _provenance-deep-dive/ + _remediation/ | 36 | ~1.3MB |
| triage-reenrichment | _od-reenrichment/ | ~65 | ~20MB |
| triage-journal-toplevel | _execution-journal/ + top-level KA .md files | ~25 | varies |

**Total: 5 sub-agents.**

**Triage Decision Matrix (embedded in each prompt):**

```
KEEP if ALL of:
  □ File is referenced by rendered content (inline header, import, link)
  □ OR file contains unique information not duplicated elsewhere
  □ OR file is needed for J-03 test (fresh agent can answer 5 questions)
  □ AND file is not a stale working scratchpad

ARCHIVE if:
  □ File has historical value (audit results, execution records, analysis)
  □ BUT is not actively referenced by rendered content
  □ AND unique information could be useful for future reference
  → Move to _archive/ with manifest entry

DELETE if:
  □ File is a duplicate of information in a formal chain document
  □ OR file is a temporary scratchpad with no unique insights
  □ OR file's content has been fully consumed by a downstream document
  □ AND no inline threading header points to it
```

**Captain-Triage Output:** `_comprehensive-audit/triage/CAPTAIN-TRIAGE-REPORT.md`

---

### 5.5 Captain-Fix

**Mission:** Execute all Critical/High fixes from the master audit report.
Verify fixes via Playwright. Spawned ONLY after Phase 2 gate passes.

**Sub-Agents to Spawn (dynamic based on findings):**

Expected allocation:
| Agent | Domain | Likely Fixes |
|-------|--------|-------------|
| fixer-visual-od | OD HTML visual fixes | Alignment, spacing, color |
| fixer-visual-dd | DD HTML visual fixes | Same |
| fixer-structural-od | OD HTML structural fixes | Soul violations, borders |
| fixer-structural-dd | DD HTML structural fixes | Same |
| fixer-tsx | React component fixes | Types, accessibility, patterns |
| fixer-provenance | Provenance gap fixes | Add/fix headers, chain docs |
| fixer-archival | File triage execution | Move/delete per triage report |
| verifier-visual | Playwright verification | Screenshot all fixed pages |
| verifier-structural | Programmatic verification | DOM/CSS property checks |

**Total: 9 sub-agents expected.**

**Captain-Fix Internal Gate:**
```
Before reporting to Lead:
□ All Critical findings fixed (or justified exception)
□ All High findings fixed (or justified exception)
□ Playwright verification screenshots taken for all fixed pages
□ Programmatic DOM checks pass for soul compliance
□ No NEW soul violations introduced (border-radius:0, box-shadow:none)
□ Fix count documented with before/after evidence
```

**Captain-Fix Output:** `_comprehensive-audit/fixes/CAPTAIN-FIX-REPORT.md`

---

### 5.6 Weaver

**Mission:** Cross-reference findings across all Captain reports. Identify
overlapping findings, contradictions, and emergent patterns.

**The Weaver does NOT spawn sub-agents.** It reads Captain output files and
produces cross-reference analysis.

**Weaver Responsibilities:**
1. Monitor `_comprehensive-audit/*/CAPTAIN-*-REPORT.md` for new files
2. When a Captain report appears:
   a. Read the full report
   b. Extract finding IDs and categories
   c. Cross-reference against other Captain reports
   d. Identify: same finding reported by multiple Captains
   e. Identify: contradictions between Captains
   f. Identify: emergent patterns (e.g., same issue across all ODs)
3. Maintain AUDIT-STATE.md with:
   - Captain completion status
   - Total finding count per Captain
   - Cross-reference log
4. Produce WEAVER-SYNTHESIS.md when all Captains complete

**Weaver Output:** `_comprehensive-audit/WEAVER-SYNTHESIS.md`

---

===============================================================================
## 6. AGENT TEAM TAXONOMY
===============================================================================

### 6.1 Complete Agent Roster

| # | Agent | Type | Parent | Phase | Playwright? |
|---|-------|------|--------|-------|------------|
| 1 | Lead | orchestrator | — | 0-4 | NO |
| 2 | Captain-Visual | captain | Lead | 1 | NO (workers do) |
| 3 | Captain-Structural | captain | Lead | 1 | NO |
| 4 | Captain-Provenance | captain | Lead | 1 | NO |
| 5 | Captain-Triage | captain | Lead | 1 | NO |
| 6 | Weaver | weaver | Lead | 1-2 | NO |
| 7-21 | visual-* (15 agents) | worker | Captain-Visual | 1 | YES |
| 22-27 | structural-* (6 agents) | worker | Captain-Structural | 1 | NO |
| 28-32 | prov-* (5 agents) | worker | Captain-Provenance | 1 | NO |
| 33-37 | triage-* (5 agents) | worker | Captain-Triage | 1 | NO |
| 38 | Captain-Fix | captain | Lead | 3 | NO (workers do) |
| 39-47 | fixer-* + verifier-* (9 agents) | worker | Captain-Fix | 3 | SOME |

**Total: ~47 agents. Lead directly manages 6. Captain-Visual manages 15.
Other Captains manage 5-9 each.**

### 6.2 Agent Type Definitions

**Lead (1 agent):**
- Creates team, spawns Captains and Weaver
- Reads Captain reports (file-based, not message-based)
- Runs inter-Captain gates
- Commits changes
- BUILDS NOTHING. AUDITS NOTHING. READS NO SOURCE CODE.

**Captain (5 agents):**
- Receives mission brief from Lead
- Spawns and manages their own sub-agents
- Runs internal gates within their domain
- Writes comprehensive report to designated file
- Messages Lead with 3-line summary when complete
- Shuts down their sub-agents before reporting

**Worker (24-34 agents):**
- Receives self-contained prompt from Captain
- Executes single-domain task
- Writes findings to designated output file
- NEVER messages the Lead directly
- Shuts down when complete or when Captain sends shutdown

**Weaver (1 agent):**
- Cross-references Captain outputs
- Maintains AUDIT-STATE.md
- Produces synthesis report
- Does NOT spawn sub-agents
- Does NOT use Playwright

### 6.3 Playwright Contention Prevention

Only visual workers and visual verifiers use Playwright. The protocol:

1. Visual workers for OD-001 through OD-006 run in parallel — they access
   different pages, so no contention.
2. DD batch worker handles all 6 DD pages sequentially (one Playwright
   instance).
3. Component visual worker runs after all exploration workers (separate
   rendering context).
4. Verification workers run AFTER all fixers complete (sequential phase).

**Binary rule:** Only ONE agent per HTML page at any time. Multiple agents can
inspect DIFFERENT pages simultaneously.

---

===============================================================================
## 7. STATE MANAGEMENT
===============================================================================

### 7.1 AUDIT-STATE.md Format

```markdown
# COMPREHENSIVE AUDIT STATE

## Phase Status
| Phase | Status | Started | Completed |
|-------|--------|---------|-----------|
| Phase 0: Setup | COMPLETE | {time} | {time} |
| Phase 1: Parallel Audit | IN PROGRESS | {time} | — |
| Phase 2: Cross-Reference | PENDING | — | — |
| Phase 3: Fix Execution | PENDING | — | — |
| Phase 4: Verification | PENDING | — | — |

## Captain Status
| Captain | Status | Workers Spawned | Workers Complete | Report Path |
|---------|--------|----------------|-----------------|-------------|
| Captain-Visual | IN PROGRESS | 8 | 3 | — |
| Captain-Structural | IN PROGRESS | 6 | 0 | — |
| Captain-Provenance | IN PROGRESS | 5 | 2 | — |
| Captain-Triage | IN PROGRESS | 5 | 1 | — |
| Captain-Fix | NOT SPAWNED | — | — | — |
| Weaver | MONITORING | — | — | — |

## Finding Summary
| Pillar | Critical | High | Medium | Low | Note | Total |
|--------|----------|------|--------|-----|------|-------|
| Visual | — | — | — | — | — | — |
| Structural | — | — | — | — | — | — |
| Provenance | — | — | — | — | — | — |
| Triage | — | — | — | — | — | — |
| Cross-Ref | — | — | — | — | — | — |
| **Total** | — | — | — | — | — | — |

## Cross-Reference Log
{Weaver updates this section}
```

### 7.2 File Layout

```
knowledge-architecture/_comprehensive-audit/
├── AUDIT-STATE.md                    (Weaver maintains)
├── MASTER-AUDIT-REPORT.md            (Lead compiles, Phase 2)
├── WEAVER-SYNTHESIS.md               (Weaver produces)
├── visual/
│   ├── CAPTAIN-VISUAL-REPORT.md      (Captain summary)
│   ├── visual-od-001.md              (Worker report)
│   ├── visual-od-002.md
│   ├── visual-od-003.md
│   ├── visual-od-004.md
│   ├── visual-od-005.md
│   ├── visual-od-006.md
│   ├── visual-dd-batch.md
│   └── visual-components.md
├── structural/
│   ├── CAPTAIN-STRUCTURAL-REPORT.md
│   ├── structural-od.md
│   ├── structural-dd.md
│   ├── structural-css.md
│   ├── structural-tsx.md
│   ├── structural-tokens.md
│   └── structural-convention.md
├── provenance/
│   ├── CAPTAIN-PROVENANCE-REPORT.md
│   ├── prov-headers.md
│   ├── prov-finding-ids.md
│   ├── prov-formal.md
│   ├── prov-research.md
│   └── prov-accumulated.md
├── triage/
│   ├── CAPTAIN-TRIAGE-REPORT.md
│   ├── triage-od-scratchpad.md
│   ├── triage-metacognition.md
│   ├── triage-provenance-dirs.md
│   ├── triage-reenrichment.md
│   └── triage-journal-toplevel.md
├── fixes/
│   ├── CAPTAIN-FIX-REPORT.md
│   ├── fixer-visual-od.md
│   ├── fixer-structural-od.md
│   ├── fixer-provenance.md
│   ├── fixer-archival.md
│   ├── verifier-visual.md
│   └── verifier-structural.md
└── screenshots/
    ├── od-001-1440.png
    ├── od-001-768.png
    ├── od-002-1440.png
    ├── ... (all screenshot files)
    └── verify-*.png
```

---

===============================================================================
## 8. BINARY RULES
===============================================================================

### 8.1 Lead Rules (ABSOLUTE)

```
RULE L-01: TeamCreate is your FIRST action.
RULE L-02: You spawn ONLY Captains and Weaver. NEVER workers directly.
RULE L-03: You read ONLY Captain reports and Weaver synthesis. NEVER worker files.
RULE L-04: You compose ONLY Captain prompts. NEVER worker prompts.
RULE L-05: You run ZERO Playwright commands.
RULE L-06: You read ZERO source code files (HTML, CSS, TSX).
RULE L-07: You do NOT send broadcast messages. EVER.
RULE L-08: You commit all changes. Agents commit NOTHING.
RULE L-09: Captain-Fix spawns ONLY after Phase 2 gate passes.
RULE L-10: If a Captain messages "Recovered from compaction" — acknowledge, no action needed.
```

### 8.2 Captain Rules (ALL Captains)

```
RULE C-01: You receive a mission brief at spawn. WRITE it to file immediately as backup.
RULE C-02: You spawn workers via Task tool with subagent_type: "general-purpose".
RULE C-03: Workers NEVER message the Lead. You enforce this in their prompts.
RULE C-04: You read worker output FILES. You do not rely on worker messages.
RULE C-05: You run your own internal gates before reporting to Lead.
RULE C-06: You compile a single CAPTAIN-*-REPORT.md from all worker outputs.
RULE C-07: You message Lead with 3-line summary: {status, finding count, report path}.
RULE C-08: You shutdown all your workers before reporting complete.
RULE C-09: If you compact: re-read mission brief file, AUDIT-STATE.md, worker outputs.
RULE C-10: You do NOT modify AUDIT-STATE.md. Only Weaver does.
```

### 8.3 Worker Rules (ALL Workers)

```
RULE W-01: You WRITE findings to your designated output file BEFORE any messages.
RULE W-02: You NEVER message the Lead directly. Only your Captain.
RULE W-03: You complete your task and report. You do not iterate unless Captain asks.
RULE W-04: Your output file is your ONLY deliverable. If the file doesn't exist, you didn't finish.
RULE W-05: Visual workers: wait for document.fonts.ready before ANY screenshot.
RULE W-06: Visual workers: inject animation-disable CSS before ANY screenshot.
RULE W-07: Structural workers: check COMPUTED styles, not declared styles.
RULE W-08: Provenance workers: verify file EXISTS (Glob), not just that it's mentioned.
RULE W-09: Triage workers: check BOTH directions — is this file referenced AND does it reference others.
RULE W-10: You do NOT edit any source files. Audit ONLY.
```

### 8.4 Weaver Rules

```
RULE WV-01: You maintain AUDIT-STATE.md. You are the ONLY agent that writes to it.
RULE WV-02: You read Captain reports as they appear (Glob for CAPTAIN-*-REPORT.md).
RULE WV-03: You identify cross-references between Captain findings.
RULE WV-04: You identify contradictions between Captain findings.
RULE WV-05: You do NOT spawn sub-agents.
RULE WV-06: You do NOT use Playwright.
RULE WV-07: You produce WEAVER-SYNTHESIS.md when all Captains complete.
RULE WV-08: You message Lead with status updates when each Captain completes.
```

---

===============================================================================
## 9. SOUL COMPLIANCE CONSTANTS
===============================================================================

These constants are embedded in EVERY agent prompt that touches visual output.

### 9.1 The 5 Visual Soul Pieces

```
SOUL-1: Sharp Edges        — border-radius: 0 everywhere, no exceptions
SOUL-2: Archivist Serif     — font-family per convention (Inter for body, monospace for code)
SOUL-3: Family DNA         — 4px left border + 2-zone structure
SOUL-4: No Shadows         — box-shadow: none everywhere, no exceptions
SOUL-5: Squares Signal     — visual elements are rectilinear
```

### 9.2 The ANTI-PHYSICAL Diagnostic (20/20 SOUL FAILs)

```
REJECT anything creating perceived depth/movement/3D:
- Shadows (box-shadow, drop-shadow, text-shadow)
- Z-axis animation or parallax
- Rounded shapes (border-radius > 0)
- Gradients used as light sources
- Traffic-light colors as semantic signals
- Semi-transparent backgrounds (rgba alpha < 1)
- Filter effects (blur, brightness, contrast)
```

### 9.3 The 3-Category Border System

```
Category 1 (STRUCTURAL): 3px+ solid — marks structural boundaries
Category 2 (SEPARATOR):  1px solid  — separates content sections
Category 3 (MICRO):      1px solid  — fine detail boundaries
PROHIBITED:              2px — always wrong, always replace with 1px or 3px
```

---

===============================================================================
## 10. RECOVERY PROTOCOLS
===============================================================================

### 10.1 Lead Recovery (If Lead somehow compacts)

```
1. Read AUDIT-STATE.md — shows current phase and captain status
2. Read this specification — Sections 4 (phases) and 8 (rules)
3. Check for Captain report files:
   Glob: _comprehensive-audit/*/CAPTAIN-*-REPORT.md
4. If reports exist → you're in Phase 2 or later
5. If no reports → you're in Phase 1, Captains still working
6. Re-read WEAVER-SYNTHESIS.md if it exists
7. Continue from current phase
```

### 10.2 Captain Recovery

```
1. Re-read mission brief (written to _comprehensive-audit/{domain}/mission-brief.md)
2. Re-read AUDIT-STATE.md
3. Glob for worker output files in your domain directory
4. Workers who have output files → COMPLETE
5. Workers without output files → still running or failed
6. Check for partial output (worker wrote some but not all)
7. Continue from where outputs indicate
8. Message Lead: "Recovered from compaction. {N}/{M} workers complete."
```

### 10.3 Worker Recovery (rare — workers are single-task)

```
1. Re-read your output file to see what you already wrote
2. If output file has findings → continue from last finding number
3. If no output file → start from scratch
4. Re-read your input files (from prompt)
5. Continue
```

---

===============================================================================
## 11. SUCCESS CRITERIA
===============================================================================

### 11.1 Audit Quality

- Every rendered HTML page has visual Playwright inspection at 1440px AND 768px
- Every source file's provenance headers verified (links exist, claims true)
- Every underscore directory triaged with KEEP/ARCHIVE/DELETE recommendation
- Every finding ID in rendered HTML verified against registry
- Cross-references identified between at least 3 Captain reports
- Zero soul violations in final state

### 11.2 Fix Completeness

- All CRITICAL findings fixed
- All HIGH findings fixed (or justified exception with Lead approval)
- Playwright verification confirms all visual fixes
- Programmatic DOM checks confirm soul compliance
- No new soul violations introduced

### 11.3 Provenance Health

- All inline threading headers have valid BUILT ON links
- All finding IDs in HTML exist in the registry
- Formal chain documents are internally consistent
- Research application claims are verifiable

### 11.4 Triage Completeness

- Every underscore directory has triage recommendation
- ARCHIVE files moved with manifest entries
- DELETE files removed with justification documented
- KEEP files verified as properly indexed

### 11.5 Context Compaction

- Lead context NEVER compacts during execution
- If any Captain compacts, they recover within 2 tool calls
- Total session wall time is bounded (Captains work in parallel)

---

===============================================================================
## 12. KNOWN CONSTRAINTS AND NOTES
===============================================================================

### 12.1 HTTP Server — CRITICAL: Not a Next.js App

**The showcase area has NO page.tsx or route files.** It is NOT part of the
Next.js routing system. The OD/DD explorations are self-contained HTML files.
The markdown files are documentation. React components live in
`docs-spa/components/content/` (11 .tsx files) but render in the docs-spa
app, not in the showcase directory.

**REQUIRED server command:**
```
npx http-server docs-spa/app/showcase -p 3000 --cors
```

**URL pattern for OD explorations:**
```
http://localhost:3000/explorations/organizational/OD-001-conversational.html
http://localhost:3000/explorations/organizational/OD-002-narrative.html
... etc
```

**URL pattern for DD explorations:**
```
http://localhost:3000/explorations/density/DD-001-breathing.html
... etc
```

**DO NOT use:**
- `npm run dev` — this serves the Next.js app, not raw showcase HTML
- `npx serve docs-spa/out` — static export may not include showcase HTML files
- `file://` protocol — Playwright MCP blocks file:// URLs

**GATE 0 verification URL:** `http://localhost:3000/explorations/organizational/OD-001-conversational.html`

**For React components:** These need the Next.js dev server to render. If
Captain-Visual needs to audit rendered components, use `cd docs-spa && npm run dev`
on a DIFFERENT port (3001) as a second server. But OD/DD explorations are the
priority — components are secondary.

### 12.2 Playwright MCP Contention

Multiple Playwright agents CAN access the same server simultaneously if they
access DIFFERENT pages. They CANNOT reliably access the SAME page simultaneously.

The Captain-Visual architecture handles this: each visual worker gets a unique
page assignment.

### 12.3 File Sizes

OD HTML files are 80-120KB each. Workers reading these files will consume
significant context. Captains should instruct workers to read ONLY the portions
relevant to their audit domain (e.g., search for specific CSS properties rather
than reading the entire file).

### 12.4 Screenshot Storage

Screenshots will accumulate in _comprehensive-audit/screenshots/. Expect:
- ~24 page screenshots (12 pages × 2 viewports)
- ~50+ viewport screenshots (scrolled sections)
- ~20 verification screenshots
- Total: ~100 screenshots, ~50-100MB

These are working artifacts and should be .gitignored or removed before commit.

### 12.5 Research Triage Sensitivity

Some files in underscore directories may contain unique insights not captured
elsewhere. Triage agents should err on the side of ARCHIVE over DELETE. When in
doubt, ARCHIVE.

### 12.6 Convention Spec as Source of Truth

OD-CONVENTION-SPEC.md (468 lines) is the authoritative source for all visual
convention rules. When Captain-Structural's sub-agents find discrepancies between
the convention spec and rendered output, the SPEC is correct and the output needs
fixing.

---

===============================================================================
## 13. PROMPT COMPOSITION GUIDANCE
===============================================================================

### 13.1 Captain Prompt Template

```
You are Captain-{Domain} in the comprehensive-audit team. You report to the Lead.

MISSION: {1-2 sentence mission from Section 5}

YOUR DOMAIN DIRECTORY: _comprehensive-audit/{domain}/

YOUR SUB-AGENTS: You will spawn these workers:
{table of workers from Section 5}

HOW TO SPAWN WORKERS:
- Use Task tool with subagent_type: "general-purpose", mode: "bypassPermissions"
- Set run_in_background: true for non-Playwright agents
- Set team_name: "comprehensive-audit"
- Each worker gets a self-contained prompt (see template below)

WORKER PROMPT TEMPLATE:
{worker prompt from Section 5, customized per agent}

YOUR INTERNAL GATES:
{gate checks from Section 5}

WHEN ALL WORKERS COMPLETE:
1. Read all worker output files
2. Compile CAPTAIN-{DOMAIN}-REPORT.md with:
   - Finding count by severity
   - Top 10 most critical findings (full detail)
   - Complete finding list (summary per finding)
   - Recommended fixes
3. Write report to _comprehensive-audit/{domain}/CAPTAIN-{DOMAIN}-REPORT.md
4. Message Lead with 3-line summary
5. Shutdown all your workers

BINARY RULES:
{rules from Section 8.2}

SOUL CONSTANTS (embed in all visual/structural worker prompts):
{constants from Section 9}

COMPACTION SURVIVAL:
If your context compacts:
1. Re-read _comprehensive-audit/{domain}/mission-brief.md
2. Glob for worker output files
3. Workers with output files are COMPLETE
4. Continue from current state
5. Message Lead: "Recovered from compaction."
```

### 13.2 Worker Prompt Template (embedded in Captain prompt)

```
You are {worker-name} in the comprehensive-audit team.
Your Captain is Captain-{Domain}. You do NOT message the Lead.

JOB: {1 sentence}

INPUT FILES:
{list of files to read}

OUTPUT FILE:
{exact path to write findings}

STEPS:
{numbered steps specific to this worker}

FINDING FORMAT:
{finding ID pattern, severity guide, required fields}

BINARY RULES:
{rules from Section 8.3}
{soul constants if visual/structural worker}
{border system if structural worker}

WRITE your output file. That is your ONLY deliverable.
```

---

===============================================================================
## 14. EXECUTION CHECKLIST
===============================================================================

### Pre-Execution (Human)

```
□ Verify docs-spa/out exists OR dev server can be started
□ Verify Playwright MCP is connected
□ Verify no uncommitted changes in git
□ Verify disk space for ~100 screenshots (~100MB)
```

### Phase 0 Checklist (Lead)

```
□ TeamCreate executed with team_name "comprehensive-audit"
□ HTTP server started and serving pages
□ _comprehensive-audit/ directory structure created
□ AUDIT-STATE.md created with initial content
□ All 6 agents (5 Captains + Weaver) spawned
```

### Phase 1 Checklist (Lead monitors)

```
□ Captain-Visual report exists
□ Captain-Structural report exists
□ Captain-Provenance report exists
□ Captain-Triage report exists
□ Weaver synthesis exists
□ All captain reports have severity breakdowns
□ No internal gate failures reported
```

### Phase 2 Checklist (Lead compiles)

```
□ MASTER-AUDIT-REPORT.md compiled from all reports
□ All Critical/High findings have fix assignments
□ No contradictions unresolved
□ Captain-Fix spawned with master report
```

### Phase 3 Checklist (Lead monitors)

```
□ Captain-Fix report exists
□ All Critical findings fixed
□ All High findings fixed
□ Playwright verification screenshots exist
□ No new soul violations introduced
```

### Phase 4 Checklist (Lead commits)

```
□ Final verification PASS
□ Git add only intended files (not screenshots)
□ Commit with descriptive message
□ AUDIT-STATE.md updated to COMPLETE
□ All agents shut down
□ Team deleted
```

---

===============================================================================
## 15. COMPARISON: FLAT vs HIERARCHICAL
===============================================================================

This section documents why the hierarchical approach is chosen.

### 15.1 OD Re-Enrichment (Flat, 43 agents)

| Metric | Value |
|--------|-------|
| Lead direct reports | 43 |
| Lead prompt composition | ~43 detailed prompts |
| Lead context growth | ~129K tokens |
| Lead compaction events | 3+ |
| Recovery time per compaction | ~5 min (read 5+ files) |
| Total recovery overhead | ~15-20 min |
| Information lost per compaction | Identity deltas, wave state, agent names |

### 15.2 Comprehensive Audit (Hierarchical, ~40 agents)

| Metric | Value (projected) |
|--------|-------------------|
| Lead direct reports | 6 |
| Lead prompt composition | 6 Captain prompts |
| Lead context growth | ~19K tokens |
| Lead compaction events | 0 (projected) |
| Recovery time per compaction | N/A |
| Total recovery overhead | 0 |
| Information lost per compaction | None |

### 15.3 Trade-Offs

| Hierarchical Advantage | Hierarchical Cost |
|------------------------|-------------------|
| Lead never compacts | Captains may compact (self-recovering) |
| Clear delegation | One extra layer of communication |
| Parallel execution by domain | Captain as single point of failure per domain |
| Workers isolated from Lead context | Workers can't escalate directly to Lead |

The trade-off is strongly favorable: Captain compaction is self-recoverable
(they have fewer files to re-read), and the Lead never losing context means
the overall orchestration is never disrupted.

---

===============================================================================
## END OF SPECIFICATION
===============================================================================

**Total agents:** ~47 (5 Captains + 1 Weaver + ~41 Workers)
**Phases:** 5 (Setup → Parallel Audit → Cross-Reference → Fix → Verify)
**Key innovation:** Hierarchical team prevents Lead context compaction.
**Key emphasis:** Visual-first (Playwright before code), research triage,
provenance verification, maximum resources.

**Next steps:**
1. This specification gets audited by agent team
2. Audit findings get incorporated
3. Execution plan created from audited spec
4. Execution plan gets audited
5. Execution begins

---
