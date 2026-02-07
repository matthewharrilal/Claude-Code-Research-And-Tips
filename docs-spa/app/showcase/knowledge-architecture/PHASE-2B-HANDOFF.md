# Phase 2B Handoff — Threading Header Insertion

**Written:** 2026-02-06
**Author:** Claude Opus 4.6 (session that completed Batches 1-6)
**Purpose:** Everything a fresh Claude instance needs to resume Phase 2B from Batch 7.

---

## 1. What Is Phase 2B?

Phase 2B adds **inline threading headers** to all 253 KEEP+FULL files in the repository. These headers are "modification guards" — metadata blocks that tell any future agent: "You're about to touch this file. Here's what you need to know about its dependencies, consumers, and constraints."

The headers are **invisible in rendered views** (HTML comments for .md files, CSS/JS block comments for code files) but visible in source. They contain structured metadata about each file's role in the knowledge graph.

---

## 2. Current State (as of commit 1795004)

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

---

## 5. Format Rules by File Type

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

### .ico, .gitignore, .prettierrc, .prettierignore files
- **Tier C only.** For binary files (.ico): skip inline, manifest note only.
- For .gitignore: Use `#` comments at top
- For .prettierrc/.prettierignore: Use `#` comments at top

---

## 6. Edge Cases (F1-F9) — The Gotchas

These are documented in PHASE-2B-MASTER-EXECUTION.md Part 7 but here's the practical summary:

### F1: Soul Alignment for Non-Visual Files
Research/tracking/checkpoint files have no CSS. For section 4, write: "This file is soul-adjacent, not soul-implementing" + describe conceptual alignment.

### F2: Origin Files (no upstream)
For "Built On" in files with no upstream: "ORIGIN FILE — no upstream within repository. Sources are [external research / Sanrok screenshots / etc.]"

### F3: Leaf Nodes (no downstream)
For "Consumed By" in files nothing references: "LEAF NODE — consumed during [audit/exploration] process, not referenced by path in other files."

### F4-F5: Must Honor Direction
- Files that CONSUME constraints: "MUST HONOR" format with inherited constraints
- Files that ESTABLISH constraints: "ESTABLISHES" format listing what this file defines

### F6: Research Debt
No file documents its own gaps. Infer from: TODO/TBD markers in the file, threading gaps, coverage gaps.

### F7: DO NOT TOUCH Files
Files >50KB: prepend-only minimal header. Do not modify existing content. (This was relevant for SOUL-DEFINITION.md 58KB, 55-PAIR-CONSISTENCY-MATRIX.md 63KB, README.md 109KB — all already done in Batches 1-2.)

### F8: Synced Duplicates
Provenance copies (e.g., provenance/original-research/R1-*.md is a copy of research/R1-*.md): Note "SYNCED DUPLICATE of [original path]" in Status section. Most of these are done (Batch 6).

### F9: SUPERSEDED Files
Files with existing SUPERSEDED headers (from Phase 2A): Threading header goes ABOVE the SUPERSEDED header. (46 SUPERSEDED files exist but they are NOT in the 253 KEEP+FULL list — they were handled separately in Phase 2A.)

---

## 7. How the Previous Session Worked (Operational Pattern)

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

## 8. Remaining Batch Details

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

**Threading data source:** `showcase-threading.md` GROUP 7 (checkpoints)

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
- .gitignore/.prettierrc/.prettierignore: Use `#` comment format
- next-env.d.ts: Auto-generated by Next.js, use `/* ... */` format

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

## 9. Quality Gates to Verify

After processing each batch, spot-check:

1. **Path existence:** Every "Built On" and "Consumed By" path should exist on disk
2. **Bidirectional consistency:** If file A says "Consumed By: B", file B (if already processed) should say "Built On: A"
3. **Tier section count:** Tier A = 10 sections, Tier B = 7 sections, Tier C = 4 sections
4. **Format correctness:** HTML comment for .md, CSS comment for .css, block comment for .tsx
5. **No placeholder text:** No [TBD], [TODO], [unknown] in headers
6. **No references to deleted files:** design-system/src/ was deleted in Phase 2A — don't reference it

---

## 10. Things a Fresh Instance Might Miss

### The Batch Manifest Status Column
The manifest (`PHASE-2B-BATCH-MANIFEST.md`) still shows all files as PENDING. Batches 1-6 are actually DONE (committed in git). The manifest was never updated. You can either:
- Update status to DONE for files 1-89
- Or just ignore the status column and use git to verify (files with headers = done)

### The Scratchpad Files
There are 4 discovery/spec files in the old session's scratchpad at `/private/tmp/claude-501/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/df16c5ef-*/scratchpad/`:
- `PHASE-2B-BATCH-MANIFEST.md` — NOW COPIED TO REPO (knowledge-architecture/)
- `PHASE-2B-DEEP-DISCOVERY-PART2.md` — Contains 3 verbatim sample headers (734 lines). Useful reference but not critical.
- `PHASE-2B-DISCOVERY-REPORT.md` — Initial discovery notes. Historical only.
- `PHASE-2B-EXECUTION-SPEC.md` — Early version of what became PHASE-2B-MASTER-EXECUTION.md. Superseded.

These scratchpad files may or may not exist on a fresh machine. The repo now has everything critical.

### Threading Data Coverage Gaps
The threading data files don't cover every file. Specifically:
- `showcase-threading.md` covers 83 files in docs-spa/app/showcase/
- `design-extraction-threading.md` covers design-extraction/ files
- Content components (docs-spa/components/content/*.tsx) are NOT in any threading file — you'll need to infer connections from import statements
- Content HTML pages (Batches 11-13) are NOT individually threaded — their upstream is the matching synthesis .md file

### The checkpoints/ Directory Has a CLAUDE.md
`docs-spa/app/showcase/checkpoints/CLAUDE.md` is file #108 in the manifest (Tier C, Batch 7). It already exists and has content but does NOT have a threading header yet. It's automatically loaded when Claude enters that directory, so it will appear in your system context. Don't confuse "I can see this file's content" with "this file has been processed."

### Tier A File in Batch 7
File #90 (RETROACTIVE-AUDIT-DD-001-006.md) is the ONLY Tier A file in the remaining batches. It needs all 10 sections including Soul Alignment, What Breaks, and Research Debt. Don't miss this — it's easy to process all of Batch 7 as Tier B.

### HTML Content Pages Are Large
The content.html files in Batches 11-13 can be 500-2000+ lines. You only need to read the first ~30 lines to understand what they are. The header goes BEFORE `<!DOCTYPE html>` (or before the first HTML tag if no DOCTYPE). Don't read the entire file — it will waste context.

### YAML Frontmatter Trap
Some .md files have YAML frontmatter (delimited by `---`). The threading header goes AFTER the frontmatter close `---` but BEFORE the first `#` heading. If you prepend before the frontmatter, you'll break any tool that parses it. Check the first 5 lines of each .md file for `---`.

Files known to have frontmatter: PIPELINE-MANIFEST.md (already done), some STAGE-HEADER.md files (already done). In remaining batches, watch for this in Batch 10 dependency-trace files.

### The MDX File
`docs-spa/content/synthesis/master-playbook/index.mdx` (file #253, last file) uses MDX format. Comments must use JSX syntax: `{/* ... */}` not HTML `<!-- -->`. This is the ONLY .mdx file in the manifest.

### Binary File
`docs-spa/app/favicon.ico` (file #129) is binary. Cannot add comments. Skip inline, add manifest note.

---

## 11. Recommended Execution Strategy

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

## 12. After All 253 Files Are Done

Per PHASE-2B-MASTER-EXECUTION.md Part 10:

1. **Traversal Verification:** Spot-check that "Consumed By" paths exist and "Built On" paths exist
2. **Bidirectional Cross-Check:** For sample pairs, verify A's "Consumed By: B" matches B's "Built On: A"
3. **Batch Manifest Update:** Mark all files DONE
4. **Commit and push**
5. **Phase 2C** is the insertion of headers into source files... but wait, we already did that directly. The original plan had a staging step (PHASE-2B-OUTPUTS/) but we skipped it and wrote headers directly to source files. So Phase 2C is effectively already done as part of Phase 2B.

---

## 13. Quick Verification Commands

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
