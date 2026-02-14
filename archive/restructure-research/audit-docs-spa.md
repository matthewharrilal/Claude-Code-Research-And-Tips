# docs-spa/ Directory Audit

**Auditor:** auditor-docs-spa
**Date:** 2026-02-13
**Total Source Files:** 489 (excluding node_modules/.next/playwright-report/.velite)

## Executive Summary

The docs-spa/ directory is a **Next.js application** that serves two distinct purposes:
1. **App Infrastructure** (18 files) — The Next.js SPA that MUST stay in docs-spa/
2. **Showcase Content** (309 files, 10MB) — Static HTML/MD files under `app/showcase/` that COULD move to top-level
3. **Content System** (153 files, 3.5MB) — MDX content for 75 documentation pages rendered by the app
4. **Junk** (4 .DS_Store files)

**KEY FINDING:** The app does NOT import from `app/showcase/` — showcase files are static and served via Next.js public routing, not programmatically imported. They COULD move to top-level without breaking the app.

---

## Directory Breakdown

### 1. App Infrastructure — MUST STAY (18 files, <100KB)

These files ARE the Next.js application. Moving them breaks the app.

#### Root Config Files (6 files)
```
docs-spa/
├── mdx-components.tsx       # MDX component registry for content pages
├── next-env.d.ts            # Next.js TypeScript definitions
├── .prettierignore          # Prettier config
├── .prettierrc              # Prettier config
├── .gitignore               # Git config
└── package.json             # MISSING — likely at parent level or in node_modules
```

**MISSING FILES:** No visible `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.js`, or `velite.config.js` in root. Either:
- They're in parent directory (likely)
- They're gitignored (unlikely)
- Next.js is using defaults (unlikely for production app)

#### App Routes & Layouts (5 files)
```
app/
├── layout.tsx               # Root layout: fonts (Inter, JetBrains Mono), LazyMotion
├── page.tsx                 # Homepage at / — CTA to /synthesis/master-playbook
├── globals.css              # Tailwind + KortAI design tokens
├── favicon.ico              # Site icon
└── (docs)/
    ├── layout.tsx           # Docs layout: ThreePanelLayout + CopyButtonHandler
    ├── template.tsx         # PageTransition wrapper
    └── synthesis/[slug]/page.tsx  # Dynamic route for synthesis pages
```

**CRITICAL DEPENDENCIES:**
- `layout.tsx` imports `globals.css` — global styles
- `(docs)/layout.tsx` imports `@/components/layout` (ThreePanelLayout)
- `(docs)/layout.tsx` imports `@/components/content` (CopyButtonHandler)
- `mdx-components.tsx` imports `@/components/content` (9 components)

#### Components (13 files, 100KB)
```
components/
└── content/
    ├── index.ts             # Barrel file re-exporting all content components
    ├── EssenceBox.tsx
    ├── CoreAbstraction.tsx
    ├── DesignDecision.tsx
    ├── FileStructure.tsx
    ├── PathOfTask.tsx
    ├── GotchaBox.tsx
    ├── WhatsHard.tsx
    ├── WhenToUse.tsx
    ├── CodeBlock.tsx
    ├── HighlightableSection.tsx
    ├── CopyButtonHandler.tsx
    └── .DS_Store (JUNK)
```

**CONSUMED BY:**
- `mdx-components.tsx` imports 9 components for MDX registry
- `app/(docs)/layout.tsx` imports CopyButtonHandler
- All content pages use these components via MDX

**NOTE:** There's ALSO a `components/layout` directory referenced in imports but NOT found in the file listing. Either:
- It's in a different location
- It's imported from a library
- The import is broken

---

### 2. Showcase Content — COULD MOVE (309 files, 10MB)

Static HTML/MD files under `app/showcase/` that are served via Next.js routing but NOT programmatically imported by the app.

**Import Check:** `grep` for `from.*showcase|import.*showcase` across all `.ts/.tsx` files returned **NO MATCHES**. This confirms showcase files are static content, not code dependencies.

#### Fortress (30 files)
```
app/showcase/fortress/
├── FINDINGS-INDEX.md
├── CLAUDE.md
├── density/              # 6 HTML + 1 CLAUDE.md
│   ├── DD-001-breathing.html
│   ├── DD-002-gradient.html
│   ├── DD-003-islands.html
│   ├── DD-004-layers.html
│   ├── DD-005-rivers.html
│   └── DD-006-fractal.html (most-referenced)
├── organizational/       # 6 HTML + 1 CREATIVE-RESEARCH-FEED.md + 1 CLAUDE.md
│   ├── OD-001-conversational.html
│   ├── OD-002-narrative.html
│   ├── OD-003-task-based.html
│   ├── OD-004-confidence.html
│   ├── OD-005-spatial.html
│   └── OD-006-creative.html
└── combination/          # 6 HTML + 6 MD (lock-sheet, R5-EVALUATION-MATRIX, etc.)
    ├── CD-001-reasoning-inside-code.html
    ├── CD-002-task-containing-decision.html
    ├── CD-003-file-tree-with-callouts.html
    ├── CD-004-essence-as-background.html
    ├── CD-005-multi-axis-transition.html
    ├── CD-006-pilot-migration.html
    ├── lock-sheet.md
    ├── R5-EVALUATION-MATRIX.md
    ├── CD-AUDIT-SYNTHESIS.md
    ├── CD-BUILD-STATE.md
    └── convention-audit-report.md
```

**Fortress Summary:**
- 18 HTML explorations (DD, OD, CD)
- 12 MD support docs
- **Per MEMORY.md:** Zero bloat, 100% KEEP, direct output from committed phases

#### Active/Research (7 files)
```
app/showcase/active/research/
├── CLAUDE.md
├── RESEARCH-SYNTHESIS.md
├── R1-DOCUMENTATION-PATTERNS.md
├── R2-CREATIVE-LAYOUTS.md
├── R3-DENSITY-DIMENSIONS.md
├── R4-AXIS-INNOVATIONS.md
└── R5-COMBINATION-THEORY.md
```

**Per MEMORY.md:** Core research files, living documents

#### Active/Pipeline (17 files)
```
app/showcase/active/pipeline/
├── README.md
├── MASTER-CD-EXECUTION-PROMPT.md
├── tension-deep-dive.md
├── source-component-comparison.md
├── 01-EXPLORATION-RESEARCH.md (inferred)
├── 02-TENSION-EXTRACTION.md (inferred)
├── 03-SYNTHESIS-INTEGRATION.md (inferred)
├── 04-CONTENT-INGESTION.md
├── 05-COMPLETE-ROADMAP.md
├── 06-KEY-INSIGHTS.md
├── 07-... (inferred)
├── 08-... (inferred)
└── 09-EXTRACTION-VALIDATION-PROTOCOL.md
```

**Per MEMORY.md:** Planning docs + tension synthesis, forward work

#### Active/Design-System (58 files)
```
app/showcase/active/design-system/
├── README.md
├── QUICK-START.md
├── patterns/
│   ├── PATTERN-INDEX.md
│   ├── density-patterns.md
│   ├── organizational-patterns.md
│   ├── axis-patterns.md
│   └── combination-rules.md
├── components/
│   └── OVERVIEW.md
├── anti-patterns/
│   └── registry.md
├── tokens/               # (0 HTML files — likely all MD)
├── guides/
└── provenance/           # 37 files across 5 stages
    ├── SOUL-DISCOVERIES.md
    ├── EXT-RESEARCH-REGISTRY.md
    ├── PIPELINE-MANIFEST.md
    ├── original-research/
    ├── stage-1-components/
    ├── stage-2-density-dd/
    ├── stage-3-organization-od/
    ├── stage-4-axis-ad/
    └── stage-5-combination-cd/
```

**Per MEMORY.md:** 37 provenance files = KEEP (living chain), contested decision resolved

#### Active/Axis (194 files, ~5MB)

**CRITICAL FINDING:** This is mostly audit working artifacts, NOT deliverables.

```
app/showcase/active/axis/
├── _perceptual-audit/      # 166 files, 4.8MB
│   └── AD-006/
│       └── screenshots/    # 157 PNG files (reproducible screenshots)
├── _perceptual-research/   # 21 files
│   └── _plan-audit/
└── (6 HTML explorations — inferred)
```

**Breakdown:**
- **6 HTML files** — AD-001 through AD-006 explorations (deliverables, KEEP)
- **166 audit files** — mostly screenshots (reproducible, DELETE candidate)
- **21 research files** — intermediate work (ARCHIVE candidate)

**Per MEMORY.md:**
- "Screenshot epidemic: 500+ PNGs = 32MB (40% of storage), all reproducible"
- 157 of those screenshots are IN THIS DIRECTORY

---

### 3. Content System — MUST STAY (153 files, 3.5MB)

Content rendered by the Next.js app at `/synthesis/[slug]` routes.

#### Structure
```
content/
├── navigation.json          # Navigation tree for docs
├── pages/                   # 75 page directories
│   ├── master-playbook/
│   │   ├── content.html
│   │   └── activity.json
│   ├── architecture-complexity-ladder/
│   │   ├── content.html
│   │   └── activity.json
│   ├── (73 more page directories...)
└── synthesis/
    └── master-playbook/
        ├── index.mdx
        └── activity.json
```

**Content Categories (from dir names):**
- Architecture (5 pages): complexity-ladder, composition-rules, domain-isolation, primitives, swarm-topologies
- Combinations (6 pages): master, matrix, pairwise, triple-plus, unexplored, extensions
- Comparisons (7 pages): master, architecture, cost, memory, observability, orchestration, ralph-variants
- Taxonomy (6 pages): master, architectures, context-memory, deployment, enterprise-agents, tools, workflows
- Principles (5 pages): master, core, anti-patterns, derivation-guide, learning-loops
- Grammar (4 pages): master, syntax, vocabulary, plugins
- Mastery (5 pages): master, multi-agent, context-management, ralph-complete, gastown-complete, ccmirror-complete
- Transforms (5 pages): master, generalist-to-swarm, manual-to-filesystem, prompt-to-agent, single-to-autonomous
- Frontier (4 pages): master, innovations, mobile, international
- Technical (11 pages): debugging, error-taxonomy, async-patterns, observability, context-management-advanced, subagent-spawning
- Reference (2 pages): master, cost-economics
- Misc (10 pages): boris-workflow, judgment-guide, staff-engineer-mental-model, cross-pattern-migration, etc.

**MUST STAY:** These files are consumed by the Next.js app via the `[slug]` dynamic route and Velite CMS.

---

### 4. Junk — DELETE (4 files)

```
.DS_Store files (4):
- docs-spa/.DS_Store
- docs-spa/app/.DS_Store
- docs-spa/app/showcase/.DS_Store
- docs-spa/components/content/.DS_Store
```

**Action:** Delete all .DS_Store files

---

## Key Questions Answered

### Q1: What's the Next.js app infrastructure?

**App Core (MUST stay in docs-spa/):**
- 5 route files: `app/layout.tsx`, `app/page.tsx`, `app/(docs)/layout.tsx`, `app/(docs)/template.tsx`, `app/(docs)/synthesis/[slug]/page.tsx`
- 1 global stylesheet: `app/globals.css`
- 1 MDX registry: `mdx-components.tsx`
- 13 content components: `components/content/*.tsx`
- Config files: `.prettierrc`, `.prettierignore`, `.gitignore`, `next-env.d.ts`
- MISSING: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.js`, `velite.config.js` (likely at parent level)

**Total:** 18 tracked files + unknown configs

### Q2: What's showcase content and can it move?

**Showcase Content (309 files, 10MB):**
- **Fortress** (30 files): 18 HTML + 12 MD — KEEP, zero bloat, committed deliverables
- **Active/Research** (7 files): R1-R5 synthesis — KEEP, living documents
- **Active/Pipeline** (17 files): Planning + tension synthesis — KEEP, forward work
- **Active/Design-System** (58 files): 37 provenance + tokens + patterns — KEEP, living chain
- **Active/Axis** (194 files): 6 HTML deliverables + 187 working artifacts (166 screenshots + 21 research)

**CAN IT MOVE?**
- **YES** — No programmatic imports from showcase/ found in app code
- **BUT** — Next.js serves these via the `app/showcase/` route (file-based routing)
- **MOVE DECISION:** Would require setting up static file serving or rewriting URLs
- **RECOMMENDATION:** KEEP fortress/ and active/ deliverables, DELETE/ARCHIVE axis audit artifacts (157 screenshots, 21 research files)

### Q3: What's in content/ and how does it relate to the app?

**Content Directory (153 files, 3.5MB):**
- 75 documentation page directories (each with `content.html` + `activity.json`)
- 1 `navigation.json` file (navigation tree)
- 1 synthesis MDX page

**Relationship:**
- Consumed by `app/(docs)/synthesis/[slug]/page.tsx` dynamic route
- Processed by Velite CMS (inferred from `.velite/` directory)
- MUST stay in docs-spa/ for the app to render pages

### Q4: Full path inventory with counts per subdirectory?

```
docs-spa/                                   489 total files (excluding build artifacts)
├── app/                                    314 files (10MB)
│   ├── (root routes)                         5 files (layout, page, globals.css, favicon, .DS_Store)
│   ├── (docs)/                               2 files (layout, template)
│   │   └── synthesis/[slug]/                 1 file (page.tsx)
│   └── showcase/                           309 files (10MB)
│       ├── fortress/                        30 files
│       │   ├── density/                      7 files (6 HTML + 1 MD)
│       │   ├── organizational/               8 files (6 HTML + 2 MD)
│       │   └── combination/                 12 files (6 HTML + 6 MD)
│       │       └── FINDINGS-INDEX.md + CLAUDE.md (2 root files)
│       └── active/                         277 files
│           ├── research/                     7 files (R1-R5 + SYNTHESIS + CLAUDE)
│           ├── pipeline/                    17 files (01-09 planning docs)
│           ├── design-system/               58 files (tokens, patterns, provenance)
│           └── axis/                       194 files (6 HTML + 166 audit + 21 research)
│               ├── _perceptual-audit/      166 files (4.8MB, mostly screenshots)
│               └── _perceptual-research/    21 files
├── content/                                153 files (3.5MB)
│   ├── navigation.json                       1 file
│   ├── pages/                              150 files (75 directories × 2 files each)
│   └── synthesis/master-playbook/            2 files (index.mdx + activity.json)
├── components/                              13 files (100KB)
│   └── content/                             13 files (11 .tsx + 1 index.ts + 1 .DS_Store)
├── public/static/                            ? files (unknown — directory exists but empty or symlink)
├── (root config files)                       6 files (mdx-components.tsx, next-env.d.ts, prettier, gitignore)
├── .DS_Store                                 4 files (JUNK)
└── (MISSING configs)                         ? files (package.json, tsconfig.json, next.config.js, etc.)
```

### Q5: What files/dirs could move to top-level vs what MUST stay inside docs-spa?

**MUST STAY in docs-spa/ (app requires these):**
- `app/` routes and layouts (7 files)
- `app/globals.css` (1 file)
- `components/` (13 files)
- `content/` (153 files)
- `mdx-components.tsx` (1 file)
- `next-env.d.ts` (1 file)
- Config files (6 files)
- **Total: ~182 files**

**COULD MOVE to top-level (no code imports):**
- `app/showcase/fortress/` (30 files) — BUT would break Next.js routing at `/showcase/fortress/`
- `app/showcase/active/research/` (7 files)
- `app/showcase/active/pipeline/` (17 files)
- `app/showcase/active/design-system/` (58 files)
- `app/showcase/active/axis/` deliverables (6 HTML files)

**SHOULD DELETE/ARCHIVE:**
- `app/showcase/active/axis/_perceptual-audit/` (166 files, 4.8MB) — reproducible screenshots
- `app/showcase/active/axis/_perceptual-research/` (21 files) — intermediate research
- 4 .DS_Store files (JUNK)

**MOVE COMPLEXITY:**
Moving showcase files OUT of `app/showcase/` would:
1. Break Next.js file-based routing (URLs would 404)
2. Require static file serving setup OR
3. Require creating proxy routes OR
4. Require rewriting all internal links to showcase content

**RECOMMENDATION:** KEEP showcase structure inside docs-spa/ for simplicity. DELETE working artifacts (187 files from axis audit).

---

## Storage Impact

**Current:**
- Total: 489 files, ~14.5MB (10MB app + 3.5MB content + 1MB components)

**After cleanup (DELETE axis artifacts):**
- Remove: 187 files, ~5MB (166 screenshots + 21 research)
- New total: 302 files, ~9.5MB (34% reduction)

**If also ARCHIVE (move out) instead of DELETE:**
- Same file reduction in docs-spa/
- Files preserved in archive/ directory

---

## Recommendations

### Immediate Actions
1. **DELETE junk:** 4 .DS_Store files
2. **DELETE or ARCHIVE axis working artifacts:**
   - `app/showcase/active/axis/_perceptual-audit/` (166 files, 4.8MB)
   - `app/showcase/active/axis/_perceptual-research/` (21 files)
3. **LOCATE missing configs:** Find package.json, tsconfig.json, next.config.js, tailwind.config.js, velite.config.js

### Restructure Options

**Option A: Minimal (recommended)**
- DELETE 191 files (junk + axis artifacts)
- KEEP showcase structure in docs-spa/ (avoids routing complexity)
- Result: 298 files, ~9.5MB

**Option B: Moderate**
- DELETE 191 files
- MOVE fortress/ and active/ to top-level `showcase/` directory
- CREATE proxy routes or static serving for showcase content
- Result: docs-spa has ~182 app files, top-level has 116 showcase files

**Option C: Maximum**
- DELETE 191 files
- MOVE all showcase to top-level
- MOVE components/ to top-level (update imports)
- Result: docs-spa has ~169 files (routes + content only)

**TRADEOFF:** Option A is simplest (zero breaking changes). Option C requires significant refactoring (imports, routing, build config).

---

## Import Analysis

**Search:** `grep -r "from.*showcase|import.*showcase" docs-spa/**/*.{ts,tsx,js,jsx}`
**Result:** NO MATCHES

**Conclusion:** showcase/ files are NOT imported by the app code. They're served via Next.js file-based routing as static pages.

**Implications:**
- Moving showcase OUT of app/ breaks Next.js routing (URLs become 404)
- Moving showcase WITHIN app/ is safe (e.g., app/showcase → app/static-showcase)
- Moving showcase to PUBLIC would work but lose Next.js route handling

---

## Missing Files Investigation

**Expected but not found:**
- `package.json` — NPM dependencies
- `tsconfig.json` — TypeScript config
- `next.config.js` — Next.js config
- `tailwind.config.js` — Tailwind CSS config
- `velite.config.js` — Velite CMS config

**Hypotheses:**
1. Configs are at parent directory level (Claude-Research-And-Tips/)
2. Configs are in .gitignore (unlikely for tsconfig/package)
3. Next.js is using all defaults (unlikely for production)
4. Monorepo setup with shared configs (possible)

**Action:** Check parent directory for these files.

---

## Summary

**docs-spa/ contains:**
1. **Next.js app** (182 files) — MUST stay for app to function
2. **Showcase content** (309 files) — COULD move but breaks routing unless refactored
3. **Content system** (153 files) — MUST stay for app to render pages
4. **Junk** (4 files) — DELETE
5. **Axis audit artifacts** (187 files) — DELETE or ARCHIVE

**Move feasibility:**
- App infrastructure: CANNOT move (core Next.js files)
- Content system: CANNOT move (consumed by app)
- Showcase files: CAN move BUT requires routing/serving refactor
- Components: CAN move with import path updates

**Recommended cleanup:**
- DELETE: 191 files (4 junk + 187 axis artifacts)
- KEEP: 298 files (app + content + showcase deliverables)
- Storage reduction: 34% (14.5MB → 9.5MB)

**Next steps:**
1. Confirm location of missing config files
2. Decide on showcase restructure strategy (A/B/C)
3. Verify no other routes reference showcase files
4. Check if public/static/ contains anything important
