<!--
═══════════════════════════════════════════════════════════════
⚠️  SUPERSEDED — DO NOT USE FOR NEW WORK
═══════════════════════════════════════════════════════════════

STATUS: This file has been superseded and contains OUTDATED values.

SUPERSEDED BY: design-extraction/component-system/css/file-tree.css

WHY THIS EXISTS: Research-phase-3 design explorations consumed into
production CSS implementations.

DANGER: Values in this file may CONFLICT with soul-locked tokens.
Using these values will break the design system's soul alignment.

DO NOT:
- Copy values from this file
- Reference this file in new work
- Update this file (it's frozen as historical record)

INSTEAD: Use the superseding document linked above.

Last verified: 2026-02-06
═══════════════════════════════════════════════════════════════
-->

<!-- LIGHT SECTION
Full Context For ALL Files: perceptual-audit-v2/synthesis/

File: component-system/archive/research-phase-3/4F-file-tree-designs.md
Scope: LIGHT — Minimal context for quick lookup
Part Of: component-system/archive — Phase 3 research (superseded)
Contributed To: Component research methodology; superseded by perceptual-audit-v2/

What this file does:
Research on visual design of file tree components, focusing on making them
feel editorial rather than like terminal output.

Who uses this:
- Agents researching component design evolution (historical context)
- Designers understanding file tree design methodology
- Archival/historical reference for Phase 3 file tree research

Status: SUPERSEDED — Phase 3 research consumed into production CSS
Superseded By: component-system/css/file-tree.css (implementation)
Links to: perceptual-audit-v2/synthesis/ for current component definitions
-->

# File Tree Visual Design Research

**Sub-Agent 4F Research Output**
**Focus:** Making file trees feel editorial, not like terminal output
**Minimum Target:** 250+ lines

---

## Executive Summary

File trees in documentation are almost universally rendered as terminal output dumps - ASCII box-drawing characters in monospace font, mimicking the Linux `tree` command. While functional, this approach completely ignores the design opportunity that file structure visualization presents.

This research explores how to transform file trees from **terminal artifacts** into **editorial design elements** - components that feel considered, branded, and intentional rather than pasted from a console window.

---

## 1. The Enemy: Generic Terminal File Trees

### What We're Avoiding

```
src/
├── components/
│   ├── Button.tsx
│   └── Card.tsx
├── styles/
│   └── globals.css
└── package.json
```

**Why this is the "generic enemy":**

| Characteristic | Problem |
|----------------|---------|
| Pure ASCII box-drawing | Feels like a tool, not a design element |
| Monospace only | No typographic hierarchy |
| Single color | No visual information density |
| No annotations | Structure without context |
| No visual weight | Everything equally important |
| No whitespace strategy | Functional, not considered |

### The Terminal Mindset

The ubiquity of terminal-style file trees comes from:

1. **Linux `tree` command** - The de facto standard for generating directory visualizations
2. **Markdown code blocks** - Documentation platforms render these as preformatted text
3. **Copy-paste convenience** - Can be generated programmatically and pasted anywhere
4. **Developer familiarity** - Matches what developers see in their IDEs

> "│ is used to show we're nested multiple levels deep. ├── points to a file or directory as a direct descendant of the current directory. └── points to the last file or directory within the current directory."
> — [Sean C Davis](https://www.seancdavis.com/posts/three-ways-to-visualize-file-structure/)

The problem: **familiarity ≠ designed**.

---

## 2. The Goal: Editorial File Trees

### What We're Building Toward

```
┌─────────────────────────────────────────┐
│ FILE STRUCTURE                          │
│ ═══════════════════                     │
│                                         │
│  project/                               │
│  │                                      │
│  ├── src/           ← Source code      │
│  │   ├── components/                    │
│  │   │   ├── Button.tsx                 │
│  │   │   └── Card.tsx                   │
│  │   └── index.ts   ← Entry point      │
│  │                                      │
│  └── package.json                       │
└─────────────────────────────────────────┘
```

**What makes this feel designed:**

| Element | Editorial Treatment |
|---------|---------------------|
| Title/Label | Uppercase, tracked, typographically distinct |
| Divider | Creates section identity |
| Annotations | Inline context (← arrows) |
| Breathing room | Generous line-height |
| Container | Optional but intentional border treatment |
| Hierarchy emphasis | Visual weight on important items |

### The Editorial Mindset

Editorial file trees should:

1. **Have identity** - A labeled section, not just dumped content
2. **Carry annotations** - Explain WHY, not just WHAT
3. **Show hierarchy visually** - Beyond just indentation
4. **Breathe** - Generous spacing signals consideration
5. **Match the design system** - Colors, typography from the same family

---

## 3. Three Visualization Methods Compared

Based on [Sean C Davis's analysis](https://www.seancdavis.com/posts/three-ways-to-visualize-file-structure/), there are three primary methods:

### Method 1: Bullet Points

```markdown
- package.json
- README.md
- src/
  - images/
    - image-01.jpg
```

**Pros:**
- Quick to write
- Works in any Markdown renderer

**Cons:**
- Gets lost when nested deep
- No visual distinction between files and folders
- No personality or design intention

**Soul Impact:** Zero. This is documentation utility, not design.

### Method 2: Screenshots

Visual capture of file explorer or IDE sidebar.

**Pros:**
- Immediately clear
- Shows actual icons
- Can include selection/hover states

**Cons:**
- Requires re-screenshot for updates
- Users can't copy content
- Doesn't match documentation styling
- Brittle to IDE theme changes

**Soul Impact:** Varies by screenshot quality, but still feels borrowed rather than designed.

### Method 3: Box-Drawing Characters (Tree Format)

```
my-project/
├── src/
│   ├── images/
│   │   └── image-01.jpg
├── package.json
└── README.md
```

**Pros:**
- Easy to read structure
- Text-based (copyable)
- Can be generated with `tree` command

**Cons:**
- Feels terminal-ish without styling
- No typographic variation possible
- Single color/weight

**Soul Impact:** Has potential - the structure is sound, but needs editorial treatment.

---

## 4. CSS Specification for Editorial File Trees

### Base Container

```css
.file-tree {
  font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.8; /* Generous for readability */
  background: var(--color-background-subtle, #f9f6f0);
  padding: 24px 28px;
  border-left: 4px solid var(--color-primary, #E83025);
  border-radius: 0; /* Editorial sharp edges */
  position: relative;
}
```

### Section Label

```css
.file-tree__label {
  font-family: var(--font-display, 'Instrument Serif'), serif;
  font-style: italic;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  color: var(--color-primary, #E83025);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border, #e0d5c5);
  display: block;
}
```

### Tree Content Area

```css
.file-tree__content {
  white-space: pre;
  margin: 0;
  color: var(--color-text, #3d3d3d);
}

/* Directory names - slightly bolder */
.file-tree__directory {
  color: var(--color-text-strong, #2a2a2a);
  font-weight: 500;
}

/* File names - regular weight */
.file-tree__file {
  color: var(--color-text, #3d3d3d);
  font-weight: 400;
}

/* Annotations - muted and italic */
.file-tree__annotation {
  color: var(--color-text-muted, #6b6b6b);
  font-style: italic;
  margin-left: 12px;
}
```

### Highlight States

```css
/* Emphasized/important items */
.file-tree__item--emphasized {
  color: var(--color-primary, #E83025);
  font-weight: 600;
}

/* Optional hover enhancement */
.file-tree__content:hover .file-tree__line {
  background: rgba(232, 48, 37, 0.05);
}
```

### Box-Drawing Character Styling

```css
/* The tree structure characters */
.file-tree__branch {
  color: var(--color-border, #c9bfaf);
  user-select: none; /* Don't copy tree characters */
}
```

---

## 5. HTML Structure Options

### Option A: Using `<pre>` (Simple)

Best for static, read-only file trees where copy-paste of the structure matters.

```html
<div class="file-tree">
  <span class="file-tree__label">File Structure</span>
  <pre class="file-tree__content"><code>project/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── index.ts <span class="file-tree__annotation">← Entry point</span>
└── package.json</code></pre>
</div>
```

**Pros:**
- Simple implementation
- Preserves whitespace perfectly
- Easy to generate from `tree` command output

**Cons:**
- Limited styling flexibility per-item
- Can't easily add icons or interactive features

### Option B: Using `<ul>` with CSS (Interactive)

Best for file trees that need icons, expand/collapse, or per-item styling.

```html
<div class="file-tree">
  <span class="file-tree__label">File Structure</span>
  <ul class="file-tree__content">
    <li class="file-tree__item file-tree__directory">
      <span class="file-tree__branch">├──</span>
      <span class="file-tree__name">src/</span>
      <ul class="file-tree__children">
        <li class="file-tree__item file-tree__directory">
          <span class="file-tree__branch">│   ├──</span>
          <span class="file-tree__name">components/</span>
          <ul class="file-tree__children">
            <li class="file-tree__item file-tree__file">
              <span class="file-tree__branch">│   │   ├──</span>
              <span class="file-tree__name">Button.tsx</span>
            </li>
            <li class="file-tree__item file-tree__file file-tree__item--emphasized">
              <span class="file-tree__branch">│   │   └──</span>
              <span class="file-tree__name">Card.tsx</span>
              <span class="file-tree__annotation">← Core component</span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

**CSS for list-based approach:**

```css
.file-tree ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.file-tree__item {
  display: flex;
  align-items: baseline;
  line-height: 1.8;
}

.file-tree__branch {
  color: var(--color-border);
  white-space: pre; /* Preserve spacing */
  user-select: none;
}

.file-tree__children {
  margin-left: 0; /* Indentation handled by branch characters */
}
```

**Pros:**
- Full styling control per item
- Can add icons, interactivity
- Better for React/Vue components

**Cons:**
- More complex HTML structure
- Harder to generate programmatically

### Option C: Astro Starlight Pattern (Interactive + Markdown)

The [Starlight File Tree component](https://starlight.astro.build/components/file-tree/) demonstrates a hybrid approach where Markdown lists transform into styled components.

```markdown
<FileTree>
- src
  - components
    - **Header.astro** important entry point
    - Footer.astro
    - ...
</FileTree>
```

**Features:**
- Collapsible directories (renders as `<details>` elements)
- Annotations via text after file names
- Highlighting via Markdown bold (`**filename**`)
- Placeholder support (`...` or `…`)

**Key styling insights from Starlight:**

```css
/* Starlight's approach */
.sl-file-tree {
  font-family: var(--__sl-font-mono);
  border: 1px solid var(--sl-color-gray-5);
}

/* Hover states */
.sl-file-tree summary:hover {
  color: var(--sl-color-accent);
  cursor: pointer;
}

/* Icons via SVG */
.sl-file-tree-icon {
  width: 0.875rem;
  height: 0.875rem;
}
```

---

## 6. Annotations Support

Annotations transform file trees from "here's what exists" to "here's what matters."

### Annotation Patterns

| Pattern | Example | Use Case |
|---------|---------|----------|
| Arrow notation | `← Entry point` | Explain significance |
| Parenthetical | `(required)` | Mark necessity |
| Status markers | `[NEW]` `[DEPRECATED]` | Show lifecycle |
| Type hints | `// config` | Categorize purpose |
| Question prompts | `?? Add your API key here` | Guide action |

### CSS for Annotations

```css
/* Base annotation style */
.file-tree__annotation {
  color: var(--color-text-muted, #6b6b6b);
  font-style: italic;
  font-size: 0.9em;
  margin-left: 12px;
}

/* Status badge annotations */
.file-tree__annotation--new {
  color: var(--color-success, #6b9b7a);
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 0.05em;
}

.file-tree__annotation--deprecated {
  color: var(--color-warning, #c49052);
  font-style: normal;
  text-decoration: line-through;
}

/* Action-oriented annotations */
.file-tree__annotation--action {
  color: var(--color-primary, #E83025);
  font-weight: 500;
}
```

### Annotation HTML Examples

```html
<!-- Explanatory -->
<span class="file-tree__name">index.ts</span>
<span class="file-tree__annotation">← Application entry point</span>

<!-- Status badge -->
<span class="file-tree__name">legacy-utils.ts</span>
<span class="file-tree__annotation file-tree__annotation--deprecated">[DEPRECATED]</span>

<!-- Action guidance -->
<span class="file-tree__name">.env</span>
<span class="file-tree__annotation file-tree__annotation--action">Add your API keys here</span>
```

---

## 7. Design System Integration

### Color Token Mapping

```css
:root {
  /* File tree specific tokens */
  --file-tree-bg: var(--color-background-subtle);
  --file-tree-border: var(--color-primary);
  --file-tree-text: var(--color-text);
  --file-tree-directory: var(--color-text-strong);
  --file-tree-branch: var(--color-border);
  --file-tree-annotation: var(--color-text-muted);
  --file-tree-emphasis: var(--color-primary);

  /* Spacing tokens */
  --file-tree-padding-x: 28px;
  --file-tree-padding-y: 24px;
  --file-tree-label-gap: 16px;
  --file-tree-line-height: 1.8;
}
```

### Typography Integration

```css
.file-tree {
  /* Monospace for structure */
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.file-tree__label {
  /* Display font for label */
  font-family: var(--font-display);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.file-tree__annotation {
  /* Matches body text style */
  font-family: var(--font-body);
  font-style: italic;
}
```

---

## 8. VS Code vs Editorial: A Comparison

VS Code's file explorer is optimized for **functionality**. Editorial file trees are optimized for **comprehension and communication**.

| Aspect | VS Code Explorer | Editorial File Tree |
|--------|------------------|---------------------|
| **Purpose** | Navigate files | Communicate structure |
| **Interactivity** | Full (expand, select, rename) | Minimal (maybe expand) |
| **Density** | High (many files visible) | Low (key files only) |
| **Context** | Icon-based type hints | Text annotations |
| **Customization** | Theme colors | Brand integration |
| **Typography** | System mono, tight | Designed, generous spacing |

### VS Code Customization (for reference)

```json
{
  "workbench.tree.indent": 15,
  "workbench.tree.renderIndentGuides": "always",
  "workbench.colorCustomizations": {
    "tree.indentGuidesStroke": "#E83025"
  }
}
```

Source: [Catalin Pit on X](https://x.com/catalinmpit/status/1699788979409981819)

---

## 9. React Component Approaches

### react-folder-tree

```jsx
import FolderTree from 'react-folder-tree';

const structure = {
  name: 'project',
  isOpen: true,
  children: [
    {
      name: 'src',
      children: [
        { name: 'Button.tsx' },
        { name: 'Card.tsx' }
      ]
    }
  ]
};

<FolderTree
  data={structure}
  showCheckbox={false}
  readOnly
/>
```

Source: [react-folder-tree on GitHub](https://github.com/shunjizhan/react-folder-tree)

### MUI X Tree View

```jsx
import { TreeView, TreeItem } from '@mui/x-tree-view';

<TreeView defaultCollapseIcon={<ExpandMoreIcon />}>
  <TreeItem nodeId="1" label="src">
    <TreeItem nodeId="2" label="components">
      <TreeItem nodeId="3" label="Button.tsx" />
    </TreeItem>
  </TreeItem>
</TreeView>
```

Source: [MUI X Tree View](https://mui.com/x/react-tree-view/)

### Custom Editorial Component

```tsx
interface FileTreeItem {
  name: string;
  type: 'file' | 'directory';
  annotation?: string;
  emphasized?: boolean;
  children?: FileTreeItem[];
}

function FileTree({
  items,
  label = 'File Structure'
}: {
  items: FileTreeItem[];
  label?: string;
}) {
  return (
    <div className="file-tree">
      <span className="file-tree__label">{label}</span>
      <div className="file-tree__content">
        {renderItems(items, 0)}
      </div>
    </div>
  );
}
```

---

## 10. Verification Checklist

Use this checklist to verify an editorial file tree implementation:

### Structure
- [ ] Has a visible label/title (not just dumped content)
- [ ] Uses consistent box-drawing characters
- [ ] Line-height is generous (1.6+)
- [ ] Padding creates breathing room

### Typography
- [ ] Label uses display/heading font treatment
- [ ] Tree content uses monospace
- [ ] Annotations are visually distinct (italic, muted)
- [ ] Directory names are slightly bolder than files

### Color
- [ ] Integrates with design system tokens
- [ ] Branch characters are muted (not competing with content)
- [ ] Emphasis states use brand primary color
- [ ] Background is subtle, not stark white

### Soul Test
- [ ] Feels like a designed component, not terminal output
- [ ] Could appear in a print magazine without looking out of place
- [ ] Annotations add meaning beyond just structure
- [ ] Visual hierarchy guides the eye to important items

### Anti-Pattern Check
- [ ] NOT using default code block styling
- [ ] NOT pure black text on white background
- [ ] NOT missing a section label
- [ ] NOT using the same visual weight for all items

---

## 11. Implementation Examples

### Minimal Editorial File Tree

```html
<div class="file-tree">
  <span class="file-tree__label">Project Structure</span>
  <pre class="file-tree__content">project/
├── src/
│   ├── <strong>index.ts</strong> <em>← Start here</em>
│   └── utils/
├── tests/
└── package.json</pre>
</div>

<style>
.file-tree {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
  background: #f9f6f0;
  padding: 24px 28px;
  border-left: 4px solid #E83025;
}

.file-tree__label {
  display: block;
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  color: #E83025;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0d5c5;
}

.file-tree__content {
  margin: 0;
  color: #3d3d3d;
}

.file-tree__content strong {
  color: #2a2a2a;
  font-weight: 600;
}

.file-tree__content em {
  color: #6b6b6b;
  font-style: italic;
}
</style>
```

---

## 12. Sources

### File Tree Components & Libraries
- [Magic UI File Tree](https://magicui.design/docs/components/file-tree) - React component with folder/file structure
- [Beautiful Interactive File Tree](https://github.com/remcostoeten/Beautiful-interactive-file-tree) - React/Next.js component
- [react-folder-tree](https://github.com/shunjizhan/react-folder-tree) - Versatile React treeview
- [MUI X Tree View](https://mui.com/x/react-tree-view/) - Material UI tree component

### Documentation Platform Implementations
- [Starlight File Tree](https://starlight.astro.build/components/file-tree/) - Astro component with annotations
- [Docusaurus FileTree Request](https://github.com/facebook/docusaurus/issues/10780) - Community discussion
- [Mintlify Components](https://www.mintlify.com/docs/components) - Tree component in component library

### Visualization Methods
- [Three Ways to Visualize File Structure](https://www.seancdavis.com/posts/three-ways-to-visualize-file-structure/) - Sean C Davis comparison

### CSS Implementations
- [File Tree Structure using CSS](https://dev.to/ambujsahu81/file-tree-structure-using-css-2h64) - Pure CSS approach
- [10 CSS Tree View Examples](https://www.subframe.com/tips/css-tree-view-examples) - Modern implementations
- [9 CSS Tree View](https://freefrontend.com/css-tree-view/) - Collection of examples

### IDE/Editor Approaches
- [VS Code Tree View API](https://code.visualstudio.com/api/extension-guides/tree-view) - Extension development
- [VS Code File Tree Indent Guides](https://github.com/microsoft/vscode/issues/17777) - GitHub discussion

### Design Foundations
- [Framer File Tree Component](https://www.framer.com/marketplace/components/file-tree/) - Row highlighting, guide lines
- [tree.nathanfriend.com](https://tree.nathanfriend.com/) - ASCII tree generator

---

## Summary: From Terminal to Editorial

The transformation from generic file trees to editorial file trees requires:

1. **Add identity** - Labels, containers, visual framing
2. **Create hierarchy** - Weight differences, emphasis states
3. **Include context** - Annotations explaining significance
4. **Apply design tokens** - Colors, typography from the system
5. **Provide breathing room** - Generous spacing signals intention

The result: file trees that feel like a designed documentation element rather than pasted terminal output. They communicate not just "what files exist" but "why these files matter."

---

*Research completed: 2026-02-03*
*Lines: 540+*
*Mission: Editorial file tree visual design research*
