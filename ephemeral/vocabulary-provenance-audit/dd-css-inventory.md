# DD Explorations CSS Inventory

Comprehensive extraction from all 6 DD HTML files (DD-001 through DD-006).
Every CSS technique, class, color, border, spacing, and layout pattern cataloged.

---

## 1. SHARED :root TOKEN BLOCK (All 6 Files)

All DD files share a locked `:root` block from DESIGN-TOKEN-SUMMARY.md. Differences noted.

### Colors (Universal)
| Token | Value | Present In |
|-------|-------|------------|
| `--color-primary` | `#E83025` | All 6 |
| `--color-background` | `#FEF9F5` | All 6 |
| `--color-text` | `#1A1A1A` | All 6 |
| `--color-text-secondary` | `#666666` | All 6 |
| `--color-border` | `#E0D5C5` | All 6 |
| `--color-border-subtle` | `#F0EBE3` | All 6 |

### Accent Colors (Universal)
| Token | Value | Present In |
|-------|-------|------------|
| `--accent-blue` | `#4A90D9` | All 6 |
| `--accent-green` | `#4A9D6B` | All 6 |
| `--accent-amber` | `#D97706` | All 6 |
| `--accent-purple` | `#7C3AED` | DD-002, DD-003, DD-004, DD-005, DD-006 |
| `--accent-coral` | `#C97065` | DD-001 (as callout), DD-004, DD-005 |

### Typography (Universal)
| Token | Value | Present In |
|-------|-------|------------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | All 6 |
| `--font-body` | `'Inter', system-ui, sans-serif` | All 6 |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | All 6 |

### Geometry (Universal -- LOCKED)
| Token | Value | Present In |
|-------|-------|------------|
| `--border-radius` | `0` | All 6 |
| `--box-shadow` | `none` | All 6 |

### Spacing Scale (Universal)
| Token | Value | Present In |
|-------|-------|------------|
| `--space-1` | `4px` | All 6 |
| `--space-2` | `8px` | All 6 |
| `--space-3` | `12px` | All 6 |
| `--space-4` | `16px` | All 6 |
| `--space-5` | `20px` | All 6 |
| `--space-6` | `24px` | All 6 |
| `--space-8` | `32px` | All 6 |
| `--space-10` | `40px` | All 6 |
| `--space-12` | `48px` | All 6 |
| `--space-16` | `64px` | All 6 |
| `--space-20` | `80px` | DD-002, DD-003, DD-004, DD-005, DD-006 |
| `--space-24` | `96px` | DD-003, DD-004, DD-005 |

### Per-File Custom Tokens
| Token | Value | File | Purpose |
|-------|-------|------|---------|
| `--border-left-width` | `4px` | DD-002 through DD-006 | Standardized left border (DD-001 lesson) |
| `--layer-atmosphere` | `#FEF9F5` | DD-004 | Geological model -- same as background |
| `--layer-surface` | `#FFFFFF` | DD-004 | Geological model -- clean white |
| `--layer-topsoil` | `#F7F4F0` | DD-004 | Geological model -- warm light |
| `--layer-subsoil` | `#F0EBE3` | DD-004 | Geological model -- tan tint |
| `--layer-bedrock` | `#1A1A1A` | DD-004 | Geological model -- deep dark |
| `--river-narrow` | `280px` | DD-005 | River width constraint |
| `--river-medium` | `450px` | DD-005 | River width constraint |
| `--river-wide` | `700px` | DD-005 | River width constraint |
| `--river-full` | `100%` | DD-005 | River width constraint |

---

## 2. BORDER WEIGHTS

| Weight | Usage | Files |
|--------|-------|-------|
| `4px solid` (left border) | Callouts, islands, rivers, layer indicators, cards | DD-001 (hardcoded), DD-002--006 (via `--border-left-width`) |
| `3px solid` | Exploration header bottom border, layer composite label, fractal nested boxes, stacked layers, scale comparison items | All 6 (header), DD-004 (layers), DD-006 (fractal) |
| `2px solid` | Topsoil keypoint border-top, section-scale dense paragraph left border, scale-demo header bottom border | DD-004, DD-006 |
| `1px solid` | Code snippet header border-bottom, decision matrix row borders, dense cards, file-tree outer border, task list items, comparison cards, copy button border, component-scale header bottom | All 6 |

### Border Placement Patterns
- **Left border accent** (4px): Primary structural technique across all DD files. Used on callouts, code blocks (DD-004 bedrock), density islands, rivers, layer sections.
- **Bottom border** (3px): Header decoration only -- exploration-header.
- **Bottom border** (1px): Row separators in decision matrices, task lists, detail lists.
- **Top border** (2px): DD-004 topsoil keypoints.
- **Outer border** (1px full): Dense cards, file trees, comparison cards, fractal-complete, density islands.

---

## 3. ALL COLOR VALUES (Including Non-Token Hardcoded)

### From :root tokens
See section 1 above.

### Hardcoded Colors
| Value | Context | Files |
|-------|---------|-------|
| `white` / `#FFFFFF` | Exploration header bg, surface layer bg, river bg, fractal box bg | All 6 (header), DD-003 (islands), DD-004 (layer-surface), DD-005 (rivers), DD-006 (fractal) |
| `#1A1A1A` | Code snippet bg (dark theme), bedrock layer bg | All 6 (code blocks), DD-004 (bedrock) |
| `#FAFAF5` | Code text color (light on dark) | All 6 |
| `#F5F0EB` | Bedrock stacked-layer text | DD-004 |
| `#888` / `#888888` | File tree inline comments, bedrock filename, bedrock density label | DD-003, DD-004 |
| `#666666` | Code comments (within dark code blocks) | All 6 |
| `#E83025` | Code keywords (syntax highlighting) | All 6 |
| `#6B9B7A` | Code strings (syntax highlighting) | All 6 |
| `#4A7C9B` | Code functions (syntax highlighting) | All 6 |
| `#C97065` | Code variables (syntax highlighting) | All 6 |
| `rgba(232, 48, 37, 0.05)` | Decision matrix header bg, fractal-complete header bg | DD-001 through DD-006 |
| `rgba(232, 48, 37, 0.03)` | Fractal nested bg (level 1) | DD-006 |
| `rgba(232, 48, 37, 0.06)` | Fractal nested bg (level 2) | DD-006 |
| `rgba(232, 48, 37, 0.09)` | Fractal nested bg (level 3) | DD-006 |
| `rgba(232, 48, 37, 0.1)` | Scale demo level badge bg | DD-006 |
| `rgba(217, 119, 6, 0.05)` | Essence callout bg | DD-001, DD-002, DD-003, DD-006 |
| `rgba(217, 119, 6, 0.08)` | Essence callout bg (variant) | DD-004, DD-006 |
| `rgba(74, 157, 107, 0.05)` | Tip callout bg | DD-001, DD-002 |
| `rgba(74, 157, 107, 0.08)` | Tip callout bg (variant) | DD-004, DD-005 |
| `rgba(74, 144, 217, 0.05)` | Info callout bg | DD-001, DD-002, DD-003 |
| `rgba(74, 144, 217, 0.08)` | Info callout bg (variant) | DD-004, DD-005, DD-006 |
| `rgba(232, 48, 37, 0.05)` | Gotcha callout bg | DD-001 |
| `rgba(201, 112, 101, 0.08)` | Gotcha callout bg (coral variant) | DD-004 |
| `rgba(124, 58, 237, 0.05)` | Challenge callout bg | DD-002 |
| `rgba(255,255,255,0.05)` | Bedrock header bg overlay | DD-004 |
| `rgba(255,255,255,0.1)` | Bedrock header border-bottom | DD-004 |
| `rgba(217, 119, 6, 0.05)` to `rgba(254, 249, 245, 1)` | Confluence gradient | DD-005 |

---

## 4. SPACING VALUES ACTUALLY USED

All spacing uses the `--space-N` token system. Additional hardcoded spacing:

| Value | Context | File |
|-------|---------|------|
| `92px` | Section-exhale padding-top/bottom | DD-001 |
| `2px` | Layer depth bar gap, topsoil keypoint checkbox margin-top | DD-004 |

### Spacing Patterns by Density Level
- **Sparse/exhale zones**: 80-96px padding (space-20 to space-24)
- **Medium zones**: 32-48px padding (space-8 to space-12)
- **Dense/inhale zones**: 16-24px padding (space-4 to space-6)
- **Inter-section gap**: 32-64px margin-bottom (space-8 to space-16)
- **Intra-component gap**: 8-16px (space-2 to space-4)

---

## 5. LAYOUT TECHNIQUES

### Flexbox
| Pattern | Class | File |
|---------|-------|------|
| Row with space-between | `.code-snippet__header` | All 6 |
| Column (vertical stack) | `.dense-grid` (DD-001), `.stacked-layers` (DD-004), `.river-diagram` (DD-005) | DD-001, DD-004, DD-005 |
| Row with center alignment | `.density-indicator` (DD-002), `.layer-indicator` (DD-004), `.sparse-separator` (DD-003), `.flow-transition` (DD-005) | DD-002, DD-003, DD-004, DD-005 |
| Row with gap | `.fractal-diagram` (DD-006), `.layer-depth` (DD-004), `.scale-demo__header` (DD-006) | DD-004, DD-006 |
| Row items start-aligned | `.task-list__item` (DD-002), `.stacked-layer` (DD-004) | DD-002, DD-004 |
| Row centered justify | `.section-separator` (DD-005), `.section-divider` (DD-006) | DD-005, DD-006 |

### CSS Grid
| Pattern | Class | Columns | File |
|---------|-------|---------|------|
| 4-column data table | `.decision-matrix__header/row` | `2fr 1fr 1fr 1fr` | DD-001, DD-002 |
| 3-column data table | `.decision-matrix__header/row` | `2fr 1fr 1fr` | DD-003 |
| 2-column comparison | `.comparison-grid` | `1fr 1fr` | DD-002 |
| 2-column archipelago | `.archipelago` | `1fr 1fr` | DD-003 |
| 2-column parallel rivers | `.parallel-rivers` | `1fr 1fr` | DD-005 |
| 2-column decision options | `.decision-point__options` | `1fr 1fr` | DD-005 |
| 2-column detail list | `.subsoil-detail` | `140px 1fr` | DD-004 |
| 3-column keypoints | `.topsoil-keypoints` | `repeat(3, 1fr)` | DD-004 |
| 3-column page scale | `.page-scale` | `1fr 1fr 1fr` | DD-006 |
| 3-column river delta | `.river-delta` | `repeat(3, 1fr)` | DD-005 |
| 4-column scale comparison | `.scale-comparison` | `repeat(4, 1fr)` | DD-006 |

### Width Constraints (max-width)
| Value | Context | File |
|-------|---------|------|
| `900px` | `.page-container` | DD-001, DD-002 |
| `1000px` | `.page-container` | DD-003, DD-004, DD-006 |
| `1100px` | `.page-container` | DD-005 |
| `700px` | `.density-island`, `.intro` | DD-003, DD-006 |
| `600px` | `.exploration-hypothesis`, `.callout-essence`, `.sparse-ocean__intro`, `.layer-atmosphere__context` | DD-001--006, DD-003, DD-004 |
| `550px` | `.layer-atmosphere__context` | DD-004 |
| `500px` | `.layer-surface__subtitle` | DD-004 |
| `65ch` | `p` (general), `.topsoil__content`, `.river--wide p` | All 6, DD-004, DD-005 |
| `60ch` | `.section-scale__para--sparse` | DD-006 |
| `280px` | `.river--narrow` (via `--river-narrow`) | DD-005 |
| `450px` | `.river--medium` (via `--river-medium`) | DD-005 |
| `700px` | `.river--wide` (via `--river-wide`) | DD-005 |
| `100%` | `.river--full`, `.river--confluence` | DD-005 |

### Responsive Breakpoints
| Breakpoint | Behavior | Files |
|------------|----------|-------|
| `768px` | Grids collapse to 1 column | DD-001, DD-002, DD-003, DD-004, DD-005, DD-006 |
| `900px` | Scale-comparison 4-col -> 2-col | DD-006 |
| `500px` | Scale-comparison 2-col -> 1-col | DD-006 |

### Position Techniques
| Pattern | Class | File |
|---------|-------|------|
| `position: absolute; top: -100%` | `.skip-link` (hidden off-screen) | All 6 |
| `position: relative` | `.layer-atmosphere`, `.river`, `.scale-demo`, `.section-divider`, `.section-separator__label` | DD-004, DD-005, DD-006 |
| `position: absolute` with `::before` | `.section-divider::before`, `.section-separator::before` | DD-005, DD-006 |

### Offset/Float Patterns (No actual `float`)
| Pattern | Class | File |
|---------|-------|------|
| `margin-left: auto` | `.density-island--offset-right`, `.river--narrow.river--right`, `.river--medium.river--right` | DD-003, DD-005 |
| `margin: 0 auto` | `.density-island--offset-center`, `.river--narrow.river--center`, `.river--medium.river--center`, `.river--wide.river--center`, `.intro` | DD-003, DD-005, DD-006 |

---

## 6. PSEUDO-ELEMENT TECHNIQUES

| Technique | Selector | CSS | File |
|-----------|----------|-----|------|
| Decorative divider line | `.section-separator::before` | `content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: var(--color-border-subtle); z-index: -1;` | DD-005 |
| Decorative divider line | `.section-divider::before` | `content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: var(--color-border-subtle);` | DD-006 |
| Depth transition line | `.depth-transition__line` | `flex: 1; height: 1px; background: linear-gradient(to right, var(--color-border), transparent);` | DD-004 (not pseudo but similar) |
| Sparse separator mark | `.sparse-separator__mark` | `width: 48px; height: 2px; background: var(--color-border);` | DD-003 |
| Selection highlight | `::selection` | `background: var(--color-primary); color: var(--color-background);` | All 6 |

---

## 7. TYPOGRAPHY PATTERNS

### Font Sizes Used
| Size | Context | Files |
|------|---------|-------|
| `36px` | `.layer-surface__title` | DD-004 |
| `32px` | `.exploration-title`, `.river--wide h2`, `.river--full h2` | All 6, DD-005 |
| `28px` | `h2` | All 6 |
| `22px` | `.density-island__title`, `.layer-topsoil__section-title` | DD-003, DD-004 |
| `20px` | `h3`, `.decision-point__question`, `.scale-demo__title` | All 6, DD-005, DD-006 |
| `18px` | `.callout-essence__content`, `.topsoil-keypoint__value`, `.section-scale__title` | DD-001, DD-002, DD-003, DD-004, DD-006 |
| `17px` | `.callout-essence__content` (variant) | DD-004, DD-006 |
| `16px` | `.layer-surface__subtitle`, `.dense-card__title`, `.comparison-card__title`, `.task-list__title`, `.intro p`, `.callout-essence__content` (DD-005), `.river--wide p` | DD-001, DD-002, DD-004, DD-005, DD-006 |
| `15px` | `.layer-atmosphere__context`, `.layer-topsoil__content`, `.section-scale__para--sparse` | DD-004, DD-006 |
| `14px` | Body text for callout contents, decision matrix rows, task list items, `.exploration-hypothesis`, `h4` (DD-002, DD-005), `.callout-info__content`, `.callout-tip__content`, `.component-scale__sparse-zone`, `.decision-point__option-title` | All 6 |
| `13px` | `.file-tree__content`, `.dense-card__content`, `.comparison-card__content`, `.subsoil-detail`, `.page-scale__content`, `.river--narrow p`, `.decision-point__option-desc`, `.section-scale__para--dense`, `.stacked-layer`, `.callout-tip__content` (DD-005), `.decision-matrix` (DD-003), `.river--narrow h4` | DD-001--006 |
| `12px` | `.file-tree` (DD-003, DD-004), `.quick-ref`, `.fractal-nested__content`, `.component-scale__dense-zone`, `.scale-comparison__pattern` | DD-003, DD-004, DD-005, DD-006 |
| `11px` | `.exploration-id`, `.code-snippet__copy`, `.decision-matrix__header`, `.layer-atmosphere__breadcrumb`, `.stacked-layer__name`, `.fractal-scale__description`, `.scale-comparison__example` | All 6, DD-004, DD-005, DD-006 |
| `10px` | All `__label` classes (callout labels, density/layer/river indicators, file-tree labels), `.quick-ref__item`, `.scale-demo__level`, `.fractal-visualization__title`, `.section-separator__label`, `.section-divider__label`, `.delta-label`, `.code-snippet__copy` (DD-005) | All 6 |
| `9px` | `.layer-indicator`, `.river__label`, `.page-scale__label`, `.fractal-nested__label`, `.callout-tip__label` (DD-005), `.scale-comparison__level`, `.section-scale__para-label` | DD-004, DD-005, DD-006 |
| `8px` | `.section-scale__para-label` | DD-006 |

### Font Weights
| Weight | Context | Files |
|--------|---------|-------|
| `400` (default) | All body text | All 6 |
| `500` | `.subsoil-detail__key`, `.quick-ref__value` | DD-004, DD-005 |
| `600` | All `__label` classes (callout labels, indicator labels), `h4`, `.decision-matrix__header`, `.task-list__title` (via display italic), `.layer-subsoil__title`, `.decision-point__option-title` | All 6 |

### Font Style
| Style | Context | Files |
|-------|---------|-------|
| `italic` | `.exploration-title`, all `h2`, all `h3`, `.callout-essence__content`, `.dense-card__title`, `.comparison-card__title`, `.density-island__title`, `.layer-surface__title`, `.topsoil-keypoint__value`, `.layer-topsoil__section-title`, `.task-list__title`, `.callout-essence__content`, `.decision-point__question`, `.scale-demo__title`, `.section-scale__title`, `.layer-atmosphere__context` | All 6 |

### Text Transform
| Transform | Context | Files |
|-----------|---------|-------|
| `uppercase` | `.exploration-id`, all `__label` classes, all indicator classes, `h4` (DD-002, DD-005), `.layer-subsoil__title` | All 6 |

### Letter Spacing
| Value | Context | Files |
|-------|---------|-------|
| `0.2em` | `.breath-indicator`, `.density-indicator` | DD-001, DD-002 |
| `0.15em` | `.layer-indicator`, `.river-visualization__title`, `.river__label`, `.fractal-visualization__title`, `.section-separator__label`, `.section-divider__label`, `.depth-transition__label`, `.delta-label`, `.layer-composite__label` | DD-004, DD-005, DD-006 |
| `0.1em` | `.exploration-id`, all `__label` classes (callout, file-tree, island, component-scale, density bar, fractal scale/nested, page-scale, section-scale, topsoil keypoint, stacked layer, scale comparison, scale-demo level) | All 6 |
| `0.05em` | `.decision-matrix__header`, `h4` letter-spacing | DD-001--006, DD-002, DD-004, DD-005 |
| `0.01em` | (not used in DD) | -- |

### Line Heights
| Value | Context | Files |
|-------|---------|-------|
| `1.8` | `.layer-atmosphere__context`, `.river--wide p`, `.section-scale__para--sparse` | DD-004, DD-005, DD-006 |
| `1.7` | `body`, `.callout-essence__content` | All 6 |
| `1.6` | `.file-tree__content`, `.file-tree` (DD-003/004), `.river--narrow p` | All 6 |
| `1.5` | Code blocks (`.code-snippet__content`, `.layer-bedrock__content`, `.character-scale`), `.section-scale__para--dense` | All 6 |
| `1.2` | `.layer-surface__title` | DD-004 |

---

## 8. COMPLETE CLASS INVENTORY

### Shared Components (Present in 3+ Files)

| Class | Purpose | Files |
|-------|---------|-------|
| `.exploration-header` | Page header with primary bottom border | All 6 |
| `.exploration-id` | Mono ID label, uppercase, primary color | All 6 |
| `.exploration-title` | Display serif, italic, 32px title | All 6 |
| `.exploration-hypothesis` | 14px secondary text, max-width 600px | All 6 |
| `.page-container` | Centered max-width content area | All 6 |
| `.skip-link` | Accessibility skip link, hidden until focused | All 6 |
| `.code-snippet` | Dark (#1A1A1A) code block container | All 6 |
| `.code-snippet__header` | Flex row: filename + copy button | All 6 |
| `.code-snippet__filename` | Mono font, secondary color filename | All 6 |
| `.code-snippet__copy` | Primary color outline copy button | All 6 |
| `.code-snippet__content` | Mono code text, light on dark | All 6 |
| `.code-snippet__content .comment` | `#666666` syntax color | All 6 |
| `.code-snippet__content .keyword` | `#E83025` syntax color | All 6 |
| `.code-snippet__content .string` | `#6B9B7A` syntax color | All 6 |
| `.code-snippet__content .function` | `#4A7C9B` syntax color | All 6 |
| `.code-snippet__content .variable` | `#C97065` syntax color | All 6 |
| `.callout-essence` | Amber left border, light amber bg | All 6 |
| `.callout-essence__label` | 10px uppercase amber label | All 6 |
| `.callout-essence__content` | Display serif, italic, 17-18px | All 6 |
| `.callout-tip` | Green left border, light green bg | DD-001, DD-002, DD-003, DD-004, DD-005 |
| `.callout-tip__label` | 10px uppercase green label | DD-001, DD-002, DD-003, DD-004, DD-005 |
| `.callout-tip__content` | 13-14px body text | DD-001, DD-002, DD-003, DD-004, DD-005 |
| `.callout-info` | Blue left border, light blue bg | DD-001, DD-002, DD-003, DD-004, DD-005, DD-006 |
| `.callout-info__label` | 10px uppercase blue label | DD-001, DD-002, DD-003, DD-004, DD-005, DD-006 |
| `.callout-info__content` | 14px body text | DD-001, DD-002, DD-003, DD-004, DD-005, DD-006 |
| `.file-tree` | Mono, pre-formatted directory listing | DD-001, DD-002, DD-003, DD-004 |
| `.file-tree__label` | 10px uppercase blue label | DD-001, DD-002, DD-004 |
| `.file-tree__content` | 13px mono, pre-wrap | DD-001, DD-002 |
| `.file-tree .folder` | Blue colored folder names | DD-001, DD-002, DD-003, DD-004 |
| `.file-tree .file` | Text color file names | DD-001, DD-002, DD-003, DD-004 |
| `.decision-matrix` | Primary left border, grid table | DD-001, DD-002, DD-003 |
| `.decision-matrix__header` | Grid row, primary bg tint, uppercase | DD-001, DD-002, DD-003 |
| `.decision-matrix__row` | Grid row, subtle bottom border | DD-001, DD-002, DD-003 |

### DD-001 Unique Classes
| Class | Purpose |
|-------|---------|
| `.section-exhale` | 92px padding, sparse breathing sections |
| `.section-inhale` | 24px padding, dense information sections |
| `.breath-indicator` | 10px mono label showing EXHALE/INHALE state |
| `.callout-gotcha` | Red/primary left border warning callout |
| `.callout-gotcha__label` | 10px uppercase primary color label |
| `.callout-gotcha__content` | 14px body text |
| `.dense-grid` | Flex column with 32px gap (vertical stack) |
| `.dense-card` | 1px subtle border card, 16px padding |
| `.dense-card__title` | 16px display italic title |
| `.dense-card__content` | 13px secondary text |

### DD-002 Unique Classes
| Class | Purpose |
|-------|---------|
| `.section-sparse` | 80px top/bottom padding (max breathing) |
| `.section-medium` | 48px top/bottom padding (moderate) |
| `.section-dense` | 24px padding (information-rich) |
| `.density-indicator` | Flex row with density bar + text |
| `.density-bar` | 4px high colored bar |
| `.density-bar--sparse` | 20px wide |
| `.density-bar--medium` | 40px wide |
| `.density-bar--dense` | 80px wide |
| `.comparison-grid` | 2-column CSS grid, 16px gap |
| `.comparison-card` | 1px border, 4px left border, 16px padding |
| `.comparison-card__title` | 16px display italic |
| `.comparison-card__content` | 13px secondary text |
| `.callout-challenge` | Purple left border callout |
| `.callout-challenge__label` | 10px uppercase purple label |
| `.callout-challenge__content` | 14px body text |
| `.task-list` | Border box with primary left accent |
| `.task-list__title` | 16px display italic |
| `.task-list__item` | Flex row, bottom-bordered list item |
| `.task-list__checkbox` | 16x16px box, 2px primary border |

### DD-003 Unique Classes
| Class | Purpose |
|-------|---------|
| `.sparse-ocean` | 80px vertical padding, low-density container |
| `.sparse-ocean__intro` | Max-width 600px intro text |
| `.density-island` | White bg, subtle+primary border, 24px pad, max-w 700px |
| `.density-island--offset-right` | `margin-left: auto` (right-aligned) |
| `.density-island--offset-center` | `margin: auto` (centered) |
| `.density-island__label` | 10px mono uppercase primary label |
| `.density-island__title` | 22px display italic |
| `.density-island__content` | 14px wrapper |
| `.archipelago` | 2-column grid, 24px gap |
| `.sparse-separator` | 96px height flex centered separator |
| `.sparse-separator__mark` | 48px wide, 2px high border-color bar |

### DD-004 Unique Classes
| Class | Purpose |
|-------|---------|
| `.layer-indicator` | 9px mono flex row with depth bars |
| `.layer-depth` | Flex row, 2px gap (depth visualization) |
| `.layer-depth__bar` | 6x12px border-color bars |
| `.layer-depth__bar--active` | Primary color active state |
| `.layer-atmosphere` | Background layer, 80px padding, relative |
| `.layer-atmosphere__context` | 15px display italic, secondary, max-w 550px |
| `.layer-atmosphere__breadcrumb` | 11px mono, border-color |
| `.layer-surface` | White bg, primary left border, 40px padding |
| `.layer-surface__title` | 36px display italic, line-height 1.2 |
| `.layer-surface__subtitle` | 16px secondary, max-w 500px |
| `.layer-topsoil` | #F7F4F0 bg, border left border, 24px padding |
| `.layer-topsoil__section-title` | 22px display italic |
| `.layer-topsoil__content` | 15px, max-w 65ch |
| `.topsoil-keypoints` | 3-column grid, 16px gap |
| `.topsoil-keypoint` | 2px top border, 12px top padding |
| `.topsoil-keypoint__label` | 10px mono uppercase secondary |
| `.topsoil-keypoint__value` | 18px display italic |
| `.layer-subsoil` | #F0EBE3 bg, secondary left border, 20px padding |
| `.layer-subsoil__title` | 14px body bold uppercase |
| `.layer-subsoil__content` | 14px, line-height 1.7 |
| `.subsoil-details` | Detail list container |
| `.subsoil-detail` | Grid 140px/1fr, 8px vertical padding, bottom border |
| `.subsoil-detail__key` | 500 weight, secondary color |
| `.subsoil-detail__value` | Text color |
| `.layer-bedrock` | #1A1A1A bg, primary left border |
| `.layer-bedrock__header` | Flex row, translucent white bg overlay |
| `.layer-bedrock__filename` | 12px mono, #888 |
| `.layer-bedrock__copy` | Primary outline button |
| `.layer-bedrock__content` | Mono code, #FAFAF5 text |
| `.layer-composite` | Grouping wrapper, 48px bottom margin |
| `.layer-composite__label` | 10px mono, 3px primary left border |
| `.depth-transition` | 24px height flex centered |
| `.depth-transition__line` | 1px gradient line (border -> transparent) |
| `.depth-transition__label` | 9px mono uppercase border-color |
| `.callout-gotcha` (DD-004 variant) | Coral left border, coral bg tint |
| `.callout-gotcha__label` | Coral colored |
| `.stacked-layers` | Flex column, 32px margin |
| `.stacked-layer` | 12px/16px padding, flex row |
| `.stacked-layer__name` | 11px mono uppercase, 100px wide |
| `.stacked-layer__density` | 10px mono secondary |
| `.stacked-layer--atmosphere` | Background color, 2px subtle left border |
| `.stacked-layer--surface` | White bg, 3px primary left border |
| `.stacked-layer--topsoil` | Topsoil bg, 3px border left border |
| `.stacked-layer--subsoil` | Subsoil bg, 3px secondary left border |
| `.stacked-layer--bedrock` | Bedrock dark bg, 3px primary left, #F5F0EB text |

### DD-005 Unique Classes
| Class | Purpose |
|-------|---------|
| `.river-visualization` | White bg, primary left border, 24px padding |
| `.river-visualization__title` | 10px mono uppercase secondary |
| `.river-diagram` | Flex column, 8px gap |
| `.river-channel` | 24px height, subtle bg, 3px primary left |
| `.river-channel--narrow` | 25% width |
| `.river-channel--medium` | 50% width |
| `.river-channel--wide` | 75% width |
| `.river-channel--full` | 100% width |
| `.river-channel--confluence` | 100%, gradient bg, amber left border |
| `.river` | Base river container, relative, 24px bottom margin |
| `.river__label` | 9px mono absolute positioned label |
| `.river--narrow` | max-w 280px, primary left border, background bg |
| `.river--medium` | max-w 450px, border left border, white bg |
| `.river--wide` | max-w 700px, subtle left border, white bg |
| `.river--full` | 100%, subtle left border, white bg, 32px padding |
| `.river--confluence` | 100%, gradient bg, amber left border |
| `.river--right` | `margin-left: auto` modifier |
| `.river--center` | `margin: 0 auto` modifier |
| `.parallel-rivers` | 2-column grid, 24px gap |
| `.river-delta` | 3-column grid, 16px gap |
| `.delta-label` | Grid column span, 10px mono, bottom border |
| `.quick-ref` | 12px compact reference list |
| `.quick-ref__item` | Flex space-between, 4px padding, bottom border |
| `.quick-ref__key` | Mono, secondary |
| `.quick-ref__value` | 500 weight |
| `.decision-point` | Decision container, 16px margin |
| `.decision-point__question` | 20px display italic |
| `.decision-point__options` | 2-column grid, 16px gap |
| `.decision-point__option` | 1px border + 4px primary left |
| `.decision-point__option-title` | 14px 600 weight |
| `.decision-point__option-desc` | 13px secondary |
| `.flow-transition` | 32px height flex centered |
| `.flow-transition__arrow` | 20px mono, border color |
| `.section-separator` | 48px margin, centered text, relative |
| `.section-separator__label` | 10px mono uppercase, bg-colored, relative z |
| `.section-separator::before` | 1px horizontal line pseudo-element |

### DD-006 Unique Classes
| Class | Purpose |
|-------|---------|
| `.fractal-visualization` | White bg, primary left border, 24px padding |
| `.fractal-visualization__title` | 10px mono uppercase secondary |
| `.fractal-diagram` | Flex row, 24px gap |
| `.fractal-scale` | Flex 1, centered |
| `.fractal-scale__label` | 10px mono uppercase secondary |
| `.fractal-scale__box` | Subtle bg, 3px primary left, 12px padding |
| `.fractal-scale__description` | 11px secondary |
| `.fractal-connector` | Flex centered, 16px mono, border color |
| `.fractal-nested` | 16px padding, 3px primary left, 3% red tint |
| `.fractal-nested .fractal-nested` | 6% red tint (nested) |
| `.fractal-nested .fractal-nested .fractal-nested` | 9% red tint (double nested) |
| `.fractal-nested__label` | 9px mono uppercase primary |
| `.fractal-nested__content` | 12px body text |
| `.scale-demo` | Section container, 48px bottom margin, relative |
| `.scale-demo__header` | Flex row, gap, 2px primary bottom border |
| `.scale-demo__level` | 10px mono uppercase, 10% red bg badge |
| `.scale-demo__title` | 20px display italic |
| `.page-scale` | 3-column grid, 16px gap |
| `.page-scale__section` | 4px border-left, 16px padding |
| `.page-scale__section--dense` | Subtle bg, primary left border |
| `.page-scale__section--sparse` | White bg |
| `.page-scale__label` | 9px mono uppercase secondary |
| `.page-scale__content` | 13px |
| `.section-scale` | White bg, 4px border left, 20px padding |
| `.section-scale__title` | 18px display italic |
| `.section-scale__para` | 16px bottom margin |
| `.section-scale__para--dense` | Subtle bg, 2px primary left, 13px, 1.5 lh |
| `.section-scale__para--sparse` | 15px, 1.8 lh, 60ch max |
| `.section-scale__para-label` | 8px mono uppercase secondary |
| `.component-scale` | White bg, 4px blue left, 16px padding |
| `.component-scale__header` | Flex between, 1px bottom border |
| `.component-scale__label` | 10px mono uppercase blue |
| `.component-scale__dense-zone` | Subtle bg, 8px padding, 12px text |
| `.component-scale__sparse-zone` | 8px padding, 14px, secondary |
| `.character-scale` | #1A1A1A bg, mono, code-sized, #FAFAF5 |
| `.character-scale__line` | Flex row, 12px gap |
| `.character-scale__num` | Secondary, no-select, 24px min-width |
| `.character-scale__code` | #FAFAF5 |
| `.character-scale__comment` | #666666 |
| `.fractal-complete` | 1px subtle border + 4px primary left |
| `.fractal-complete__header` | 5% red bg, 12px/16px pad, bottom border |
| `.fractal-complete__title` | 10px mono uppercase primary |
| `.fractal-complete__body` | 20px padding |
| `.scale-comparison` | 4-column grid, 16px gap |
| `.scale-comparison__item` | 3px primary left, 12px pad, white bg |
| `.scale-comparison__level` | 9px mono uppercase primary |
| `.scale-comparison__pattern` | 12px mono secondary |
| `.scale-comparison__example` | 11px secondary |
| `.section-divider` | 48px margin, centered, relative |
| `.section-divider::before` | 1px pseudo line |
| `.section-divider__label` | 10px mono, bg background, relative |
| `.intro` | 700px max, centered, center-aligned text |

---

## 9. ACCESSIBILITY PATTERNS (Universal Across All 6)

| Feature | Implementation |
|---------|---------------|
| Skip link | `.skip-link` -- absolute positioned off-screen, visible on focus |
| Focus indicator | `*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }` |
| Selection styling | `::selection { background: var(--color-primary); color: var(--color-background); }` |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` -- kills animations, transitions, scroll-behavior |
| Semantic HTML | `<header>`, `<main>`, `<section>`, `<article>` (DD-003) |
| Lang attribute | `<html lang="en">` |

---

## 10. GRADIENT USAGE

Only 2 files use gradients, and both are constrained:

| File | Property | Value | Context |
|------|----------|-------|---------|
| DD-004 | `background` | `linear-gradient(to right, var(--color-border), transparent)` | `.depth-transition__line` -- 1px decorative line fade |
| DD-005 | `background` | `linear-gradient(to right, var(--color-border-subtle) 0%, var(--color-border) 100%)` | `.river-channel--confluence` -- subtle horizontal flow indicator |
| DD-005 | `background` | `linear-gradient(135deg, rgba(217, 119, 6, 0.05) 0%, rgba(254, 249, 245, 1) 100%)` | `.river--confluence` -- subtle amber-to-background fade |

NOTE: These are subtle, structural gradients on 1px lines or background washes -- not decorative background gradients (which are prohibited by soul constraints).

---

## 11. CROSS-FILE EVOLUTION SUMMARY

### DD-001 -> DD-002
- Added `--border-left-width: 4px` token (standardization)
- Added `--space-20: 80px` to spacing scale
- Changed body line-height from `1.6` to `1.7`
- Replaced `.dense-grid` flex with `.comparison-grid` CSS grid
- Added `.density-bar` visual density indicators
- Added `.task-list` component
- Added `.callout-challenge` (purple -- replacing red gotcha to avoid traffic-light)

### DD-002 -> DD-003
- Added `--space-24: 96px`
- Created island offset system (left/right/center margin shifting)
- Created `.archipelago` 2-column grid
- Created `.sparse-separator` visual breathing marks
- Page container widened: 900px -> 1000px

### DD-003 -> DD-004
- Added layer-specific color tokens (5 geological layers)
- Added `--accent-coral: #C97065`
- Created 5-layer geological system (atmosphere/surface/topsoil/subsoil/bedrock)
- Created `.depth-transition` inter-layer divider
- Created `.stacked-layers` visualization
- Created `.layer-composite` grouping wrapper
- Most complex CSS of all DD files

### DD-004 -> DD-005
- Added river-width custom properties (4 widths)
- Page container widened: 1000px -> 1100px
- Created variable-width river system (narrow/medium/wide/full/confluence)
- Created `.parallel-rivers` and `.river-delta` multi-column patterns
- Created `.decision-point` with options grid
- Created `.quick-ref` compact list
- Introduced directional modifiers (`.river--right`, `.river--center`)
- Added `.flow-transition` and `.section-separator` divider patterns

### DD-005 -> DD-006
- Page container back to 1000px
- Created 4-level fractal scale system (page/section/component/character)
- Created nested box visualization with progressive opacity
- Created `.scale-comparison` 4-column grid
- Created `.fractal-complete` composite component
- Most conceptually sophisticated CSS -- meta-pattern demonstration
- Added 3 responsive breakpoints (768, 900, 500)

---

## 12. KEY FINDINGS

1. **BEM-like naming convention** is universal: `.block__element--modifier` pattern throughout all 6 files.

2. **Zero border-radius, zero box-shadow** enforced in all 6 files via `:root` tokens.

3. **Left-border-accent is THE primary structural device**: 4px colored left borders are the dominant visual grouping technique across every DD file. Used on callouts, code blocks, islands, rivers, layers, and section containers.

4. **Color palette is deeply constrained**: Only 6 core colors + 5 accent colors + syntax highlighting colors. All callout backgrounds are low-opacity rgba tints of their accent color.

5. **Code blocks have their own dark theme**: Inverted palette (`#1A1A1A` bg, `#FAFAF5` text) with 5 syntax highlighting colors that are the SAME across all 6 files.

6. **Typography trinity is strict**: Instrument Serif (display/headings), Inter (body), JetBrains Mono (code/labels). Never crossed.

7. **Grid vs Flex split**: Grids for multi-column data layouts. Flex for single-axis alignment (headers, indicators, vertical stacks).

8. **Progressive complexity**: DD-001 (simplest, 7 component types) -> DD-006 (most complex, 15+ component types). Each file introduces new layout concepts while keeping shared patterns stable.

9. **No animations, no transitions, no transforms**: Zero use of CSS animation, transition, or transform properties in any DD file (only in the reduced-motion media query reset).

10. **Callout backgrounds use 0.05-0.08 opacity**: Extremely subtle tinting, just enough to differentiate from white/background.
