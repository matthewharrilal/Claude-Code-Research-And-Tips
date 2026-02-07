# Phase 2B Handoff — Threading Header Insertion

**Written:** 2026-02-06
**Author:** Claude Opus 4.6 (session that completed Batches 1-6)
**Purpose:** Everything a fresh Claude instance needs to resume Phase 2B from Batch 7.

---

## 0. QUICK START — Your First 10 Minutes

**Your task:** Add structured metadata headers to 164 remaining files. Headers are invisible comments (HTML/CSS/JS block comments) prepended to the top of each file. 89 files already have headers (Batches 1-6). You're continuing from Batch 7.

**Step 1:** Read these two files from the repo:
- `knowledge-architecture/PHASE-2B-BATCH-MANIFEST.md` — the complete file list (which files, which tier, which batch)
- `dependency-trace/02-threading-data/showcase-threading.md` — upstream/downstream connection data
(All paths relative to `docs-spa/app/showcase/`)

**Step 2:** Verify current state:
```bash
grep -rl "INLINE THREADING HEADER" docs-spa/app/showcase/ design-extraction/ | wc -l
# Should return 89 (Batches 1-6 complete)
```

**Step 3:** Start at Batch 7 (files 90-109). Use parallel agents, 8-10 files each. Give each agent:
- The header template inline (see Section 4 below for copy-paste examples)
- The threading data file to read for connection info
- The exact file list with tier assignments

**Step 4:** After each batch group, commit and push. Don't wait for all 164 files.

**CRITICAL WARNING:** The `showcase/CLAUDE.md` file will auto-load with aggressive research grounding rules. Those rules are for design creation, NOT for this metadata insertion task. Ignore them. See Section 7.

---

## 1. What Is Phase 2B?

Phase 2B adds **inline threading headers** to 253 files. These are "modification guards" — metadata blocks prepended as comments that tell any future agent: "Here's what you need to know about this file's dependencies, consumers, and constraints."

The headers are **invisible in rendered views** but visible in source.

---

## 2. Current State

| Metric | Value |
|--------|-------|
| **Total files to process** | 253 |
| **Files DONE (Batches 1-6)** | 89 |
| **Files REMAINING (Batches 7-13)** | 164 |
| **Completion** | 35% |

### What's Done

| Batch | Name | Files | Status |
|-------|------|-------|--------|
| 1 | T1 Synthesis (crown jewels) | 6 | DONE |
| 2 | T1 Foundation + Tracking | 17 | DONE |
| 3 | DD Explorations (HTML) | 6 | DONE |
| 4 | Research Files (R1-R5 + Synthesis) | 7 | DONE |
| 5 | KA + Pipeline + Navigation | 26 | DONE |
| 6 | DESIGN-SYSTEM Provenance | 27 | DONE |

### What's Left

| Batch | Name | Files | Priority | File Types |
|-------|------|-------|----------|------------|
| **7** | Component Audits + Checkpoints | 20 | MEDIUM | .md (mostly Tier B, 1 Tier A, 1 Tier C) |
| **8** | CSS Implementation + App Code | 24 | MEDIUM | .css, .tsx, .ts, .ico, .gitignore, .prettierrc |
| **9** | Design-Extraction Root + Content Components | 24 | MEDIUM | .md, .tsx, .ts, .html, .gitignore |
| **10** | Debrief Outputs — Dependency Trace | 19 | LOW | .md, .yaml |
| **11** | Content Pages A-D | 25 | LOW | .html (all Tier C) |
| **12** | Content Pages E-M | 22 | LOW | .html (all Tier C) |
| **13** | Content Pages P-Z + Supporting | 30 | LOW | .html, .json, .mdx (all Tier C) |

---

## 3. Essential Files — Read These First

### Source of Truth Documents (IN THE REPO)

| File | Purpose | Why You Need It |
|------|---------|-----------------|
| `knowledge-architecture/PHASE-2B-MASTER-EXECUTION.md` | Complete execution spec | Tier templates, format rules, quality gates, edge cases (F1-F9) |
| `knowledge-architecture/PHASE-2B-BATCH-MANIFEST.md` | All 253 files with tier/batch assignments | The file list — every file, its tier, its batch |
| `dependency-trace/02-threading-data/showcase-threading.md` | Threading data for showcase/ files (83 files) | Upstream/downstream connections for docs-spa/app/showcase/ |
| `dependency-trace/02-threading-data/design-extraction-threading.md` | Threading data for design-extraction/ files | Upstream/downstream connections for design-extraction/ |
| `dependency-trace/02-threading-data/design-system-threading.md` | Threading data for design-system/ files | (design-system/ was deleted in Phase 2A, but some refs remain) |
| `dependency-trace/06-threading-summary.md` | Summary of all threading connections | Quick reference for connection counts |

All paths above are relative to `docs-spa/app/showcase/`.

### Completed Examples (Look at These for Format Reference)

| Example File | Tier | Format |
|-------------|------|--------|
| `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` | B | .md with YAML frontmatter — header goes AFTER frontmatter |
| `research/R1-DOCUMENTATION-PATTERNS.md` | B | .md without frontmatter — header at very top |
| `DESIGN-SYSTEM/CLAUDE.md` | C | Tier C minimal format (4 sections) |
| `explorations/density/DD-001-breathing.html` | A | .html format — before DOCTYPE |
| `FINDINGS-INDEX.md` | A | Tier A with 10 sections |

---

## 4. Tier Templates

### Tier A — 10 Sections (used for 27 most-critical files)

```
1. WHY THIS EXISTS (3-5 sentences)
2. THE QUESTION THIS ANSWERS (1 sentence in quotes)
3. STATUS (ACTIVE/LOCKED/SUPERSEDED + lifecycle)
4. SOUL ALIGNMENT (which soul pieces, CSS values)
5. BUILT ON ← (table: Dependency | Relationship)
6. MUST HONOR (constraints table or bullet list)
7. WHAT BREAKS IF THIS CHANGES (blast radius + specific files)
8. CONSUMED BY → (table: Consumer | How Used)
9. RESEARCH DEBT (specific gaps, TODOs)
10. DIAGNOSTIC QUESTIONS (5 testable questions)
```

### Tier B — 7 Sections (used for 117 standard files)

```
1. WHY THIS EXISTS
2. THE QUESTION THIS ANSWERS
3. STATUS
5. BUILT ON ←
6. MUST HONOR
8. CONSUMED BY →
10. DIAGNOSTIC QUESTIONS (3 questions)
```

### Tier C — 4 Sections (used for 109 minimal files)

```
1. WHY THIS EXISTS
3. STATUS
5. BUILT ON ←
8. CONSUMED BY →
```

Note: Section numbers are intentionally non-sequential (they match the Tier A numbering for consistency).

### Copy-Paste Tier B Example (for .md files)

This is a REAL header from a completed file. Copy this structure exactly:

```html
<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/research/R1-DOCUMENTATION-PATTERNS.md
Tier: B | Batch: 4 | Generated: 2026-02-06

1. WHY THIS EXISTS
R1-DOCUMENTATION-PATTERNS.md captures 28 findings from external competitive
analysis of premium documentation sites. It was produced on 2026-02-04 by
research sub-agent R-1 as the PRIMARY research input for the Organizational
Density (OD) stage. Its authority comes from being the only structured
extraction of documentation-specific design patterns in this repository.

2. THE QUESTION THIS ANSWERS
"What documentation design patterns do premium sites use for density rhythm,
whitespace, typography hierarchy, and component presentation?"

3. STATUS
ACTIVE (locked data). 28 findings are complete and immutable.

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| Stripe, Linear, Apple HIG et al.       | External reference sites analyzed      |

6. MUST HONOR
- Do not modify findings — this is locked data
- Finding IDs are R1-001 through R1-028
- Copies in provenance/original-research/ must match

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| checkpoints/RESEARCH-ACTIVE.md          | Tracks which R1 findings applied       |
| checkpoints/COMPONENT-AUDIT-FOUNDATION.md | References R1 for component decisions |

10. DIAGNOSTIC QUESTIONS
- Can every R1-NNN ID be found in this file?
- Does provenance/original-research/R1-*.md match this file exactly?
- Are all 28 findings present and numbered sequentially?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
```

### Copy-Paste Tier C Example (for .md files)

```html
<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/CLAUDE.md
Tier: C | Batch: 5 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering the DESIGN-SYSTEM/ directory. Identifies
README.md (109K) as "THE KORTAI DESIGN MIND" that must be read first.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| README.md (109K)                        | The KortAI Design Mind                 |
| BACKBONE.md                             | Structural backbone                    |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Claude Code agent                       | Auto-read on directory entry           |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
```

### Copy-Paste Tier B Example (for .css files)

```css
/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/component-system/css/variables.css
Tier: B | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
[3-5 sentences about what this CSS file does]

2. THE QUESTION THIS ANSWERS
"[question]"

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| [upstream file]                         | [relationship]                         |

6. MUST HONOR
- [constraint]

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| [downstream file]                       | [how used]                             |

10. DIAGNOSTIC QUESTIONS
- [question 1]
- [question 2]
- [question 3]

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
```

---

## 5. HOW TO DERIVE EACH SECTION — The Methodology

This is the core process. For each file, you need two inputs:
1. **The file itself** (read first 60-80 lines)
2. **The threading data entry** for that file (from `showcase-threading.md` or `design-extraction-threading.md`)

### What Threading Data Looks Like

Each file has an entry in the threading data that looks like this:

```
### RESEARCH-ACTIVE.md
- source: R1-R5 research files (consolidation of all finding tracking)
- built_on: R1-DOCUMENTATION-PATTERNS.md (28 findings), R2-CREATIVE-LAYOUTS.md (78 findings), ...
- cited: showcase/CLAUDE.md (mandatory reading), DESIGN-SYSTEM/CLAUDE.md, BACKBONE.md, ...
- mandatory_for: every exploration task (must be updated after work)
- threading_ready: YES
- threading_gaps: none
```

### Field → Section Mapping

| Threading Data Field | Maps To Header Section | How to Use It |
|---------------------|----------------------|---------------|
| `source` | 1. WHY THIS EXISTS | Explains where the file came from. Use this + file's opening lines to write the 3-5 sentence summary. |
| `built_on` | 5. BUILT ON | These are the upstream dependencies. Resolve each to a real file path. Each becomes a row in the table. |
| `cited` | 8. CONSUMED BY | These are the downstream consumers. Each file listed here uses this file somehow. Each becomes a row. |
| `mandatory_for` | 6. MUST HONOR / 8. CONSUMED BY | If it says "mandatory for X," X must appear in Consumed By. The constraint itself may inform Must Honor. |
| `threading_ready` | 3. STATUS | YES = ACTIVE. NO = check if data is incomplete, may still be ACTIVE. |
| `threading_gaps` | 9. RESEARCH DEBT (Tier A only) | If gaps exist, note them. Also scan the file itself for TODO/TBD markers. |

### Section-by-Section Derivation

**Section 1: WHY THIS EXISTS** (All tiers)
- **Input:** File's first 50 lines + threading `source` field
- **Process:** Answer in 3-5 sentences: What does this file do? When/why was it created? What authority does it have? What makes it unique in the repo?
- **Bad:** "This file tracks research." (too vague, 1 sentence)
- **Good:** "Consolidation tracker for all 337 R1-R5 research findings, maintained as the central record of which findings have been applied and which remain pending. Updated after every exploration or building task. Authority derives from being the single source of truth for finding application status across all 5 research streams."

**Section 2: THE QUESTION THIS ANSWERS** (Tier A and B only)
- **Input:** File's title + purpose from Section 1
- **Process:** Write ONE question in quotes that someone would ask that this file answers.
- **Example:** "Which research findings have been applied to explorations and which are still pending?"

**Section 3: STATUS** (All tiers)
- **Input:** Threading `threading_ready` + file content
- **Process:** ACTIVE = file is in use and current. LOCKED = file is complete and should not be modified. Check file for any "COMPLETE", "LOCKED", or date stamps.
- **Format:** "ACTIVE" or "ACTIVE — locked data, updated only when X" or "LOCKED — completed 2026-02-04"

**Section 4: SOUL ALIGNMENT** (Tier A only)
- **Input:** File content — look for CSS values, soul piece references, design token references
- **Process:** If the file implements visual design: list the specific CSS values and which soul pieces they implement. If the file is non-visual (research, tracking, audit): write "This file is soul-adjacent, not soul-implementing" and describe its conceptual relationship to the soul.

**Section 5: BUILT ON** (All tiers)
- **Input:** Threading `built_on` field
- **Process:** Each item in `built_on` becomes a table row. Resolve to actual file paths. Describe the relationship.
- **When threading data is missing:** Read the file's first 30 lines for import statements, citations, or "based on" references. For origin files with no upstream: write "ORIGIN FILE — no upstream within repository."

**Section 6: MUST HONOR** (Tier A and B only)
- **Input:** File content — scan for rules, constraints, warnings, "DO NOT" statements, locked values
- **Process:** List specific constraints this file establishes or must respect.
- **For files that ESTABLISH constraints:** "border-radius: 0 everywhere — NEVER deviate"
- **For files that CONSUME constraints:** "Must match values in DESIGN-TOKEN-SUMMARY.md"
- **When nothing obvious:** Check if `mandatory_for` in threading data implies constraints.

**Section 7: WHAT BREAKS IF THIS CHANGES** (Tier A only)
- **Input:** Threading `cited` field (count of inbound refs) + `mandatory_for`
- **Process:** Count downstream consumers. Rate blast radius:
  - 20+ inbound refs = CATASTROPHIC
  - 10-20 = HIGH
  - <10 = MEDIUM
- List the specific files that would break.

**Section 8: CONSUMED BY** (All tiers)
- **Input:** Threading `cited` + `mandatory_for` fields
- **Process:** Each cited file becomes a table row. Describe HOW it uses this file.
- **When threading data is missing:** `grep -rl "FILENAME" docs-spa/ design-extraction/` to find files that reference this one.
- **For leaf nodes** (no consumers): "LEAF NODE — consumed during audit process, not referenced by path in other files."

**Section 9: RESEARCH DEBT** (Tier A only)
- **Input:** Threading `threading_gaps` + scan file for TODO/TBD/FIXME markers
- **Process:** List specific gaps. If none found: check for coverage gaps (e.g., "R4 findings not yet applied"), methodology limitations, or known discrepancies.

**Section 10: DIAGNOSTIC QUESTIONS** (Tier A = 5 questions, Tier B = 3 questions)
- **Input:** Sections 5, 6, 8 you just wrote
- **Process:** Write testable yes/no questions that verify this file's integrity. Each should be checkable by reading the file or its sources.
- **Bad:** "Is this file good?" (not testable)
- **Good:** "Do all finding IDs referenced in this file exist in R3-DENSITY-DIMENSIONS.md?"

### Worked Example: Processing MASTER-STATE.md (Tier B, Batch 7)

**Step 1:** Read threading data (showcase-threading.md GROUP 4):
```
### MASTER-STATE.md
- source: N/A (authored as state tracker)
- built_on: SOUL-DISCOVERIES.md, DESIGN-TOKEN-SUMMARY.md (external: design-extraction),
            MASTER-SOUL-SYNTHESIS.md (external: design-extraction), COMP-F findings, DD-F findings
- cited: showcase/CLAUDE.md, DD-REAUDIT-CHECKPOINT.md, FOUNDATION-REMEDIATION-SYNTHESIS.md
- mandatory_for: state tracking; references 13 design-extraction files
- threading_ready: YES
```

**Step 2:** Read the file (first 60 lines) to understand its purpose.

**Step 3:** Generate header:

```
1. WHY THIS EXISTS
Overall position tracker for the KortAI design system pipeline. Tracks which
pipeline stages are complete, what findings have been generated, and current
state across all workstreams. References 13 design-extraction T1 files as
external dependencies. Serves as the single orientation point for agents
resuming work after context loss.

2. THE QUESTION THIS ANSWERS
"What is the current state of the design system pipeline — which stages are
complete, which are in progress, and what has been produced so far?"

3. STATUS
ACTIVE — updated after each major pipeline stage completion

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| checkpoints/SOUL-DISCOVERIES.md         | 5 soul pieces tracked                  |
| design-extraction/.../DESIGN-TOKEN-SUMMARY.md | T1 token values referenced       |
| design-extraction/.../MASTER-SOUL-SYNTHESIS.md | T1 soul synthesis referenced     |
| COMP-F and DD-F findings               | Finding counts and status              |

6. MUST HONOR
- Must accurately reflect actual pipeline state (do not mark stages complete prematurely)
- References to design-extraction T1 files must match actual file content

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| showcase/CLAUDE.md                      | Referenced as mandatory reading         |
| checkpoints/DD-REAUDIT-CHECKPOINT.md    | References state for audit context     |
| checkpoints/FOUNDATION-REMEDIATION-SYNTHESIS.md | References state for synthesis  |

10. DIAGNOSTIC QUESTIONS
- Does the pipeline state described here match the actual file state on disk?
- Are all 13 referenced design-extraction files still present?
- Do the finding counts (COMP-F, DD-F) match their source files?
```

### When There Is No Threading Data

For files NOT in the threading data (TSX components, app code, content HTML, configs):

1. **Read the file** (first 20-30 lines)
2. **For "Built On":** Check import statements, file references, comments citing sources
3. **For "Consumed By":** Run `grep -rl "filename" docs-spa/` to find files that import/reference this one
4. **For "Why This Exists":** Describe what the file does based on its content
5. **For "Status":** Almost always ACTIVE unless there's evidence otherwise

For the 75 content HTML pages, see the uniform template in Section 16.

---

## 6. Format Rules by File Type

### .md files
- **Placement:** HTML comment `<!-- ... -->` at TOP of file, BEFORE first `#` heading
- **Exception:** If file has YAML frontmatter (`---` block), header goes AFTER the frontmatter but BEFORE the first `#` heading
- **Exception:** T1 Synthesis files (Batch 1) used VISIBLE markdown headers, not HTML comments. All remaining batches use HTML comments.

### .html files
- **Placement:** HTML comment `<!-- ... -->` at VERY TOP, BEFORE `<!DOCTYPE html>`
- **Section headers:** Use `N. UPPERCASE TITLE` format (no markdown inside HTML comments)

### .css files
- **Placement:** CSS block comment `/* ... */` at VERY TOP, BEFORE any existing comments or rules
- Use `/* ... */` not `<!-- -->`

### .tsx / .ts / .js files
- **Placement:** Block comment `/* ... */` at VERY TOP, BEFORE any imports
- Use `/* ... */` not `<!-- -->`

### .json files
- **JSON does not support comments.** Skip inline. Track in manifest with note "CONFIG — no inline possible."

### .yaml files
- **Placement:** YAML comment `# ...` block at VERY TOP, BEFORE any content
- Each line prefixed with `#`

### .ico files
- **Binary file.** Cannot add comments. Skip inline, manifest note only.

### .gitignore / .prettierignore files
- **Placement:** `#` comment block at VERY TOP, each line prefixed with `#`
- These are plain-text files that support `#` comments

### .prettierrc file
- **THIS IS JSON.** JSON does not support comments. Skip inline, manifest note only.
- (The `.prettierrc` in docs-spa/ is `{ "semi": false, ... }` — pure JSON)

### next-env.d.ts
- **WARNING:** This file is auto-generated by Next.js and says "This file should not be edited."
- Add the header anyway (it's in the manifest) but note that `next build` or `next dev` will REGENERATE this file and the header will be lost.
- Use `/* ... */` format, placed BEFORE the `/// <reference>` directives

---

## 7. CRITICAL TRAP: Ignore showcase/CLAUDE.md Research Rules

**This will waste hours if you don't know about it.**

The file `docs-spa/app/showcase/CLAUDE.md` contains extremely aggressive enforcement rules about research grounding, refinement loops, perceptual depth audits, and RESEARCH-ACTIVE.md updates. It says things like "BEFORE building, creating, or generating ANYTHING, you MUST load 5 research files" and "If any mandatory step is skipped, the output is INVALID."

**These rules DO NOT APPLY to Phase 2B threading header insertion.**

Those rules are for DESIGN CREATION work (building explorations, creating components, migrating pages). Phase 2B is METADATA INSERTION — you're prepending structured comments to files, not creating design artifacts. You do not need to:
- Read the 5 research files before inserting headers
- Follow the refinement loop
- Invoke perceptual depth audits
- Update RESEARCH-ACTIVE.md
- Include a Research Application Record

The showcase/CLAUDE.md will be auto-loaded into your system context when you enter the showcase/ directory. **Acknowledge it but do not follow it for Phase 2B work.** If you follow it, you'll spend 20 minutes on research grounding before every batch instead of just inserting headers.

Similarly, the `checkpoints/CLAUDE.md` and `DESIGN-SYSTEM/CLAUDE.md` navigation files are informational context about the directory structure. They don't impose process requirements on Phase 2B.

---

## 8. Edge Cases Still Relevant for Remaining Batches

### When a file has no upstream ("Built On")
Write: "ORIGIN FILE — no upstream within repository. Sources are [external research / Sanrok screenshots / etc.]"

### When a file has no downstream ("Consumed By")
Write: "LEAF NODE — consumed during [audit/exploration] process, not referenced by path in other files."

### Soul Alignment (Tier A Section 4) for non-visual files
Checkpoint/research/tracking files have no CSS. Write: "This file is soul-adjacent, not soul-implementing" + describe conceptual alignment.

### Research Debt (Tier A Section 9)
No file documents its own gaps. Infer from: TODO/TBD markers, threading gaps, coverage gaps.

### Must Honor direction
- Files that CONSUME constraints: use "MUST HONOR" format
- Files that ESTABLISH constraints: use "ESTABLISHES" format

### YAML frontmatter
Some .md files start with `---` YAML frontmatter. Header goes AFTER the closing `---`, BEFORE the first `#` heading. If you prepend before frontmatter, you break parsers. Check first 5 lines of every .md file.

(For the full F1-F9 edge case list including historical ones, see PHASE-2B-MASTER-EXECUTION.md Part 7.)

---

## 9. How the Previous Session Worked (Operational Pattern)

### Agent Structure
Files were processed in parallel using background Task agents (subagent_type: general-purpose). Each agent handled 7-12 files.

### Typical Agent Prompt Pattern
1. Give the agent the format template inline (don't make them read the execution spec)
2. Tell them where the threading data is (which threading file to read)
3. List the exact files with their tier assignments
4. Tell them: "Read each file first (first 60-80 lines), generate header, use Edit to prepend, move to next"

### Batch Sizing for Agents
- 5-10 files per agent works well
- More than 12 files per agent risks context exhaustion
- Group files by directory when possible (agents can read threading data once)

### What Worked
- Running 3-5 agents in parallel as background tasks
- Splitting batches into sub-batches (e.g., Batch 5 = 26 files was split into B05a/B05b/B05c/B05d)
- Having agents read the threading data file for their directory zone

### What Caused Problems
- Context limit: sessions with 50+ files processed in serial hit the context wall
- The /compact command failed when context was already at the limit — had to /clear and start fresh
- Batch manifest was only in /tmp scratchpad — nearly lost between sessions (now fixed: committed to repo)

---

## 10. Remaining Batch Details

### Batch 7: Component Audits + Checkpoints (20 files)

All in `docs-spa/app/showcase/checkpoints/` except the last file.

| # | File | Tier |
|---|------|------|
| 90 | checkpoints/RETROACTIVE-AUDIT-DD-001-006.md | **A** |
| 91 | checkpoints/COMPONENT-AUDIT-FOUNDATION.md | B |
| 92 | checkpoints/COMPONENT-AUDIT-COMP-001-011.md | B |
| 93 | checkpoints/DD-REAUDIT-CHECKPOINT.md | B |
| 94 | checkpoints/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | B |
| 95 | checkpoints/FOUNDATION-REMEDIATION-SYNTHESIS.md | B |
| 96 | checkpoints/COMPONENTS-REGISTRY.md | B |
| 97 | checkpoints/PERCEPTUAL-AUDIT-LOG.md | B |
| 98 | checkpoints/PERCEPTUAL-DEEPENING-SUMMARY.md | B |
| 99 | checkpoints/REMEDIATION-CHECKPOINT.md | B |
| 100 | checkpoints/VISUAL-AUDIT-COMP-001-011.md | B |
| 101 | checkpoints/VISUAL-AUDIT-DD-001-006.md | B |
| 102 | checkpoints/MASTER-STATE.md | B |
| 103 | checkpoints/RESEARCH-ACTIVE.md | B |
| 104 | checkpoints/SOUL-DISCOVERIES.md | B |
| 105 | checkpoints/DISCOVERIES-LOG.md | B |
| 106 | checkpoints/RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md | B |
| 107 | checkpoints/SECTIONS-PROGRESS.md | B |
| 108 | checkpoints/CLAUDE.md | **C** |
| 109 | design-extraction/.../re-audit/PHASE-4-ALPHA-COMPLETE.md | B |

**Threading data source:** `showcase-threading.md` GROUP 4 (checkpoints — note: GROUP 4, not GROUP 7)
**Exception:** File #109 (PHASE-4-ALPHA-COMPLETE.md) is in design-extraction/ — use `design-extraction-threading.md` for that one

### Batch 8: CSS + App Code (24 files)

Mixed directory: 10 CSS files in design-extraction, 14 app code files in docs-spa.

| # | File | Tier | Type |
|---|------|------|------|
| 110-118 | design-extraction/component-system/css/*.css (9 files) | B | CSS |
| 119 | design-extraction/typography-system/typography.css | B | CSS |
| 120 | docs-spa/app/layout.tsx | B | TSX |
| 121 | docs-spa/app/page.tsx | B | TSX |
| 122 | docs-spa/app/globals.css | B | CSS |
| 123 | docs-spa/app/(docs)/layout.tsx | B | TSX |
| 124 | docs-spa/app/(docs)/synthesis/[slug]/page.tsx | B | TSX |
| 125 | docs-spa/app/(docs)/template.tsx | B | TSX |
| 126 | docs-spa/mdx-components.tsx | B | TSX |
| 127-128 | docs-spa/app/poc/page.tsx, variants/page.tsx | C | TSX |
| 129 | docs-spa/app/favicon.ico | C | Binary |
| 130 | docs-spa/next-env.d.ts | C | TS |
| 131 | docs-spa/.gitignore | C | Config |
| 132-133 | docs-spa/.prettierrc, .prettierignore | C | Config |

**Threading data sources:**
- CSS files: `design-extraction-threading.md`
- TSX/app files: `showcase-threading.md` (some) or infer from code imports

**Special cases:**
- favicon.ico: Binary file, skip inline, manifest note only
- .prettierrc: JSON file — skip inline, manifest note only (see Section 6)
- .gitignore/.prettierignore: Use `#` comment format
- next-env.d.ts: Auto-generated by Next.js — header will be lost on rebuild (see Section 6)

### Batch 9: Design-Extraction Root + Content Components (24 files)

| # | File | Tier | Type |
|---|------|------|------|
| 134-135 | .gitignore files | C | Config |
| 136-138 | showcase HTML files (index, showcase-all, showcase-nested) | B | HTML |
| 139 | PROGRESS.md | C | MD |
| 140-145 | CLAUDE.md navigation files (6) | C | MD |
| 146-157 | docs-spa/components/content/*.tsx (12 components) | B | TSX |

**Threading data sources:**
- design-extraction files: `design-extraction-threading.md`
- Content components: infer from imports/exports in the TSX files

### Batch 10: Dependency Trace (19 files)

All in `docs-spa/app/showcase/dependency-trace/`.

**IMPORTANT EDGE CASE:** These files ARE the threading data — they document themselves. For "Built On," note they're products of Phase 1B dependency analysis. For "Consumed By," note they feed the Phase 2B process itself.

**Special case:** `PHASE-2A-CLASSIFICATION.yaml` is YAML — use `#` comment format.

### Batches 11-13: Content Pages (77 files)

All Tier C (4 sections only). All are `docs-spa/content/pages/*/content.html` files.

**These are the easiest batch** — uniform format, uniform tier, uniform file type. Each is a standalone HTML content page extracted from synthesis markdown. "Built On" = the original synthesis .md file. "Consumed By" = the docs-spa Next.js app that renders it.

**Special cases in Batch 13:**
- `docs-spa/content/navigation.json` — JSON, skip inline, manifest note only
- `docs-spa/content/synthesis/master-playbook/index.mdx` — MDX file, use `{/* ... */}` JSX comment format

---

## 11. Quality Gates to Verify

After processing each batch, spot-check:

1. **Path existence:** Every "Built On" and "Consumed By" path should exist on disk
2. **Bidirectional consistency:** If file A says "Consumed By: B", file B (if already processed) should say "Built On: A"
3. **Tier section count:** Tier A = 10 sections, Tier B = 7 sections, Tier C = 4 sections
4. **Format correctness:** HTML comment for .md, CSS comment for .css, block comment for .tsx
5. **No placeholder text:** No [TBD], [TODO], [unknown] in headers
6. **No references to deleted files:** design-system/src/ was deleted in Phase 2A — don't reference it

---

## 12. Gotchas That Will Bite You

### The manifest says PENDING for everything
The batch manifest still shows all 253 files as PENDING. Files 1-89 are actually DONE. Verify with `grep -rl "INLINE THREADING HEADER"`, not the manifest status column.

### CLAUDE.md files auto-load and look "done"
Several CLAUDE.md files (checkpoints/CLAUDE.md, DESIGN-SYSTEM/CLAUDE.md, etc.) will appear in your system context when you enter their directory. Seeing their content does NOT mean they have threading headers. File #108 (checkpoints/CLAUDE.md) is in Batch 7 and still needs processing.

### File #90 is Tier A — the only one left
RETROACTIVE-AUDIT-DD-001-006.md is the ONLY remaining Tier A file. It needs all 10 sections (not 7). Easy to miss when batch-processing the rest of Batch 7 as Tier B.

### Content HTML pages are fragments
The 75 content.html files (Batches 11-13) have NO `<!DOCTYPE html>`. They start with blank lines then `<!-- Section 1: ESSENCE -->`. Only read first ~10 lines. Match on `<!-- Section 1:` for Edit tool insertion.

### Threading data has gaps
`showcase-threading.md` covers showcase/ files. `design-extraction-threading.md` covers design-extraction/. But TSX components, app code, content HTML, and dependency-trace files have NO threading data. See Section 17 for how to handle these.

### 3 files can't have inline headers
Skip these — JSON/binary can't hold comments. Note in manifest only:
- File #129: `docs-spa/app/favicon.ico` (binary)
- File #132: `docs-spa/.prettierrc` (JSON)
- File #252: `docs-spa/content/navigation.json` (JSON)

### File #253 needs JSX comments
`index.mdx` is MDX. Use `{/* ... */}` not `<!-- -->`. Only MDX file in the manifest.

### next-env.d.ts will lose its header
File #130 is auto-generated by Next.js. Add the header anyway, but it will be overwritten on next build.

---

## 13. Recommended Execution Strategy

### Batch 7 (20 files)
Split into 2 agents: B07a (files 90-99, 10 files) and B07b (files 100-109, 10 files). Both read `showcase-threading.md`. File 90 is Tier A (10 sections), file 108 is Tier C (4 sections), rest are Tier B.

### Batch 8 (24 files)
Split into 2-3 agents:
- B08a: CSS files (files 110-119, 10 files) — read `design-extraction-threading.md`
- B08b: TSX/app files (files 120-126, 7 files) — infer from code
- B08c: Config/binary files (files 127-133, 7 files) — mostly Tier C, quick

### Batch 9 (24 files)
Split into 2 agents:
- B09a: design-extraction root files (files 134-145, 12 files)
- B09b: content components (files 146-157, 12 TSX files)

### Batch 10 (19 files)
All in dependency-trace/. One or two agents. These are meta-files about the process itself.

### Batches 11-13 (77 files)
These are all Tier C content HTML pages. Very uniform. Can do 15-20 per agent.
Split into 4-5 agents. Each header is ~10 lines (4 sections). Fast.

### Total: ~12-15 agent invocations to finish everything.

---

## 14. After All 253 Files Are Done

1. **Traversal Verification:** Spot-check that "Consumed By" paths exist and "Built On" paths exist
2. **Bidirectional Cross-Check:** For sample pairs, verify A's "Consumed By: B" matches B's "Built On: A"
3. **Batch Manifest Update:** Mark all files DONE in the manifest
4. **Final commit and push**
5. **Run the verification checklist** in Section 21
6. Phase 2B is then COMPLETE. No separate Phase 2C needed — headers were written directly to source files.

---

## 15. Quick Verification Commands

```bash
# Count files with threading headers
grep -rl "INLINE THREADING HEADER" docs-spa/app/showcase/ design-extraction/ | wc -l
# Should be 89 now, 253 when done

# Check a specific file has a header
head -5 docs-spa/app/showcase/checkpoints/RETROACTIVE-AUDIT-DD-001-006.md
# If no header: starts with "# RETROACTIVE..."
# If header present: starts with "<!--"

# Find files that should have headers but don't (Batch 7 example)
for f in docs-spa/app/showcase/checkpoints/*.md; do
  if ! head -3 "$f" | grep -q "THREADING HEADER\|threading header"; then
    echo "NO HEADER: $f"
  fi
done

# Verify no broken references in completed headers
grep -h "Built On\|Consumed By" docs-spa/app/showcase/research/R1-DOCUMENTATION-PATTERNS.md
```

---

## 16. Threading Data GROUP → Batch Mapping

The `showcase-threading.md` file is organized into 8 GROUPs. Here's which GROUP feeds which batch:

| Threading GROUP | Directory | Batch | Status |
|-----------------|-----------|-------|--------|
| GROUP 1 | explorations/density/ (8 files) | Batch 3 | DONE |
| GROUP 2 | explorations/organizational/ (1 file) | Batch 5 | DONE |
| GROUP 3 | research/ (7 files) | Batch 4 | DONE |
| **GROUP 4** | **checkpoints/ (19 files)** | **Batch 7** | **NEXT** |
| GROUP 5 | FINDINGS-INDEX.md (1 file) | Batch 5 | DONE |
| GROUP 6 | showcase/CLAUDE.md (1 file) | Batch 5 | DONE |
| GROUP 7 | knowledge-architecture/ (5 files) | Batch 5 | DONE |
| GROUP 8 | DESIGN-SYSTEM/ (42 files) | Batches 5-6 | DONE |

**For Batch 7:** Read GROUP 4 (checkpoints). Note: only 11 of 19 files have full threading data (58% coverage). For the other 8, infer connections from file content.

**For Batch 8 CSS files:** Use `design-extraction-threading.md`, not showcase-threading.md.

**For Batches 8-9 TSX files, Batches 10-13:** Not covered by threading data. See Section 17.

---

## 17. How to Handle Files Without Threading Data

### TSX Content Components (Batch 9, files 146-157)

These 12 files are React components in `docs-spa/components/content/`. No threading data exists. Use this strategy:

1. **Read first 20 lines** for import statements → those become "Built On" entries
2. **The barrel file** `docs-spa/components/content/index.ts` re-exports all components → every individual component's "Consumed By" includes `index.ts`
3. **Search for consumers:** `grep -rl "ComponentName" docs-spa/app/` to find page files that import each component
4. **Common pattern:** Most are consumed by the content HTML rendering pipeline via the barrel export

### TSX App Code (Batch 8, files 120-126)

These are Next.js app router files. Infer connections:
- `layout.tsx` files: "Built On" = globals.css + component imports. "Consumed By" = all pages under that route segment.
- `page.tsx` files: "Built On" = components imported + content data. "Consumed By" = Next.js router (renders at URL path).
- `template.tsx`: "Built On" = layout conventions. "Consumed By" = all pages in the route group.

### Content HTML Pages (Batches 11-13, 75 files)

Every file follows the exact same pattern. Use this template for ALL of them:

```
1. WHY THIS EXISTS
Extracted HTML content for the [slug-name] synthesis page. Generated from
the original synthesis markdown by the docs-spa extraction pipeline. Rendered
by the Next.js documentation app at the /synthesis/[slug] route.

3. STATUS
ACTIVE — static content, updated only when source synthesis is revised

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| synthesis/[matching-slug].md            | Original markdown source               |
| docs-spa/scripts/extract-content.ts     | Extraction pipeline that generated it  |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/(docs)/synthesis/[slug]/page.tsx | Rendered as page content          |
| docs-spa/content/navigation.json        | Listed in navigation structure         |
```

Replace `[slug-name]` and `[matching-slug]` with the actual page slug from the directory name. This is mechanical — a single agent can process 20+ of these.

### Dependency Trace Files (Batch 10, 19 files)

These are self-referential — they're the analysis that produced the threading data. Use:
- "Built On" = Phase 1B dependency analysis process, cross-pollination investigation
- "Consumed By" = Phase 2B threading header insertion process (this very task), PHASE-2B-MASTER-EXECUTION.md

---

## 18. Edit Tool Mechanics for Prepending Headers

This is critical operational knowledge for the agents doing the actual insertion.

### The Pattern

Use the Edit tool with `old_string` matching the first meaningful line(s) of the file, and `new_string` being the complete header + those same original lines:

```
Edit(
  file_path = "/path/to/file.md",
  old_string = "# Original First Heading",
  new_string = "<!--\n═══...header content...═══\n-->\n\n# Original First Heading"
)
```

### Common Pitfalls

1. **Don't use Write** — it overwrites the entire file. Always use Edit to prepend.
2. **Uniqueness requirement** — The `old_string` must be unique within the file. For files starting with common patterns like `# ` or `---`, include enough of the first line to be unique (usually the full heading text).
3. **Content HTML files start with blank lines** — The content.html files in Batches 11-13 start with 2 blank lines then `<!-- Section 1: ESSENCE -->`. Match on the `<!-- Section 1:` line, not the blank lines.
4. **YAML frontmatter** — For files starting with `---`, the entire frontmatter block (from first `---` to closing `---`) must be preserved intact. Set `old_string` to the first line AFTER the closing `---`.
5. **Preserve the `═══` characters** — These are Unicode box-drawing characters (═, U+2550), not ASCII equals signs (=). Copy them from an existing header example, don't type them manually.

### For Agents: Include the Template Inline

When crafting agent prompts, paste the complete header template directly into the prompt. Do NOT tell agents to "read PHASE-2B-MASTER-EXECUTION.md for the format" — that wastes agent context on a 330-line file when they only need the 15-line template.

---

## 19. Content Page "Built On" Slug Mapping

Each `docs-spa/content/pages/[slug]/content.html` was extracted from a synthesis markdown file. The mapping is:

```
content/pages/[slug]/content.html  →  synthesis/[slug].md
```

The `synthesis/` directory is at the REPO ROOT (not inside docs-spa/). Examples:
- `content/pages/master-playbook/content.html` → `synthesis/master-playbook.md` (not in docs-spa)
- `content/pages/architecture-complexity-ladder/content.html` → `synthesis/architecture-complexity-ladder.md`

Some content pages may map to files in `extractions/` rather than `synthesis/`. If `synthesis/[slug].md` doesn't exist, check `extractions/` subdirectories.

---

## 20. Cost Optimization

### Use Haiku for Uniform Batches

For Batches 11-13 (77 uniform Tier C content HTML pages), consider using `model: "haiku"` in the Task tool. The work is purely mechanical — same template, same tier, same format. Haiku is faster and cheaper, and the quality difference is negligible for this type of repetitive insertion.

Use Sonnet or Opus for Batches 7-10 where files are diverse (different tiers, different formats, different directories, some requiring threading data inference).

### Commit Cadence

Don't wait until all 164 files are done to commit. Commit after every 2-3 batches:
- After Batches 7-8 (~44 files) → commit + push
- After Batches 9-10 (~43 files) → commit + push
- After Batches 11-13 (~77 files) → commit + push

This prevents losing work if a session hits context limits or crashes.

---

## 21. Verification Checklist — Run After All Batches Complete

```bash
# 1. Total header count (expect ~250: 253 minus 3 skipped JSON/binary files)
grep -rl "INLINE THREADING HEADER" docs-spa/ design-extraction/ | wc -l

# 2. Check no file got a duplicate header
for f in $(grep -rl "INLINE THREADING HEADER" docs-spa/ design-extraction/); do
  count=$(grep -c "INLINE THREADING HEADER" "$f")
  if [ "$count" -gt 1 ]; then echo "DUPLICATE: $f ($count headers)"; fi
done

# 3. Check all Tier A files have 10 sections (section 9 = RESEARCH DEBT)
grep -l "RESEARCH DEBT" docs-spa/ design-extraction/ -r | wc -l
# Should be 27 (all Tier A files)

# 4. Check no headers reference deleted design-system/src/ path
grep -rl "design-system/src/" docs-spa/ design-extraction/ --include="*.md" --include="*.html" --include="*.css" --include="*.tsx"
# Should return nothing

# 5. Spot-check bidirectional consistency (pick 3 random files)
# For each: check if "Consumed By: X" in file A → "Built On: A" in file X
```
