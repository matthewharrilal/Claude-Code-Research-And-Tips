# Naming Research: docs-spa/

## Current State Analysis

**Directory:** `docs-spa/`

**Purpose:** Next.js web application serving as the interactive documentation site for the Claude Code Knowledge Base.

**Key Evidence:**

1. **From layout.tsx metadata:**
   - Title: "Claude Code Knowledge Base"
   - Description: "144 pages of AI-assisted development patterns and workflows"

2. **From README.md:**
   - Phase 4: Next.js SPA — Complete (docs-spa/)
   - "docs-spa/ - **NEW** Next.js documentation SPA with 75 pages, three-panel layout"
   - This is the browsable, interactive version of the knowledge base

3. **Content Structure:**
   - 75 documentation pages organized into 13 categories (Core Guides, Architecture, Mastery, Principles, Taxonomies, Comparisons, etc.)
   - Each page lives in `/content/pages/{slug}/` with `content.html` and `activity.json`
   - Navigation structure in `/content/navigation.json`

4. **Dual Purpose:**
   - **Primary:** Documentation site — renders markdown/MDX pages at routes like `/synthesis/master-playbook`
   - **Secondary:** Design showcase — serves HTML explorations at `/showcase/*` routes (fortress/, active/ subdirectories)

5. **Architecture:**
   - Next.js App Router (`app/` directory)
   - Route groups: `app/(docs)/` for documentation, `app/showcase/` for design explorations
   - MDX components in `components/content/` (13 components: CodeBlock, EssenceBox, DesignDecision, etc.)
   - Custom fonts (Inter, JetBrains Mono), Framer Motion animations
   - Three-panel layout for documentation browsing

6. **Audience:**
   - Users learning Claude Code (from beginner to advanced)
   - Developers seeking AI-assisted development patterns
   - Practitioners exploring multi-agent orchestration

---

## Naming Proposals

### Option 1: `knowledge-base` ⭐ RECOMMENDED

**Rationale:**
- Aligns with metadata title: "Claude Code Knowledge Base"
- Accurately describes the primary purpose: a browsable knowledge repository
- Domain-agnostic: works whether it's Next.js, static, or something else
- Clear to newcomers: "this is where the knowledge lives"
- Distinguishes from raw research (`active/research/`) and explorations (`fortress/`, `archive/`)

**Strengths:**
- Matches existing branding and README references
- Describes WHAT it is, not HOW it's built
- Won't become outdated if implementation changes

**Weaknesses:**
- Doesn't convey the interactive/web nature
- Could be confused with documentation source content (but that's in `content/pages/`)

---

### Option 2: `docs-site`

**Rationale:**
- Clearly indicates this is the documentation website
- Familiar naming pattern in web projects
- Distinguishes from `design-extraction/`, `html-site/`, and other directories

**Strengths:**
- Self-documenting: "this directory contains the docs site"
- Common pattern (docs/, docs-site/, documentation/)
- Clearly separates presentation layer from content

**Weaknesses:**
- Undersells the showcase functionality (has `/showcase/` routes)
- Generic — doesn't capture the "knowledge base" essence
- "site" implies static, but this is a SPA

---

### Option 3: `presentation-layer`

**Rationale:**
- Captures both documentation rendering AND showcase serving
- Architecturally accurate: this is the presentation of research/explorations
- Clear separation from content sources and research artifacts

**Strengths:**
- Encompasses dual purpose (docs + showcase)
- Technical clarity for developers
- Future-proof if more presentation modes are added

**Weaknesses:**
- Abstract/technical — less intuitive for newcomers
- Doesn't convey the specific domain (Claude Code knowledge)
- Sounds like infrastructure, not a product

---

### Option 4: `web-app`

**Rationale:**
- Accurately describes the technical artifact (Next.js web application)
- Distinguishes from `html-site/` (static HTML)
- Clear that this runs as an application

**Strengths:**
- Technically accurate
- Clear technology distinction
- Covers both docs and showcase functionality

**Weaknesses:**
- Too generic — "what kind of web app?"
- Doesn't communicate purpose
- Focus on implementation rather than intent

---

### Option 5: `showcase-gallery`

**Rationale:**
- Emphasizes the `/showcase/` routes (fortress, active design explorations)
- Acknowledges the design system presentation aspect
- "Gallery" implies visual browsing experience

**Strengths:**
- Captures the design exploration aspect
- Evokes visual, interactive experience
- Differentiates from pure documentation

**Weaknesses:**
- Undersells the documentation content (75 pages)
- Misleads about primary purpose (docs > showcase)
- Doesn't reflect the "knowledge base" branding

---

## Cross-Directory Context

**Existing directory names for reference:**
- `fortress/` — DD/OD/CD design explorations (zero bloat, 100% KEEP)
- `active/` — Forward-work content (axis, pipeline, design-system, research)
- `archive/` — Historical content (KA core, scratchpads, audit reports)
- `design-extraction/` — Typography/card/component systems
- `html-site/` — Static HTML version (237 pages)

**Key Distinctions:**
- `html-site/` = static HTML version (predecessor)
- `docs-spa/` = Next.js interactive version (current)
- `content/pages/` (inside docs-spa) = source content
- `/showcase/` routes = design explorations presentation

---

## Final Recommendation

**Rename to: `knowledge-base`**

**Reasoning:**

1. **Semantic Accuracy:** This IS the Claude Code Knowledge Base — the name matches the product
2. **Implementation-Agnostic:** Won't become stale if we migrate from Next.js
3. **Clear Purpose:** New contributors instantly know "this is where the knowledge lives"
4. **Aligned with Branding:** Matches metadata, README references, and user-facing language
5. **Covers Dual Purpose:** Knowledge encompasses both documentation AND design explorations

**Alternative Acceptable:** `docs-site` (if web presence needs emphasis)

**Reject:** `web-app` (too generic), `showcase-gallery` (wrong emphasis), `presentation-layer` (too abstract)

---

## Directory Structure After Rename

```
knowledge-base/
├── app/                    # Next.js App Router
│   ├── (docs)/            # Documentation routes
│   ├── showcase/          # Design exploration routes
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── content/           # MDX components
├── content/
│   ├── pages/             # 75 documentation pages
│   ├── synthesis/
│   └── navigation.json
├── public/
│   └── static/
└── node_modules/
```

**README.md update:**
- Change "docs-spa/" to "knowledge-base/"
- Update Phase 4 description to emphasize knowledge base over implementation

**Impact:**
- Git history preserved via `git mv`
- Import paths unchanged (relative within directory)
- User-facing routes unchanged (Next.js routing is file-based inside app/)
