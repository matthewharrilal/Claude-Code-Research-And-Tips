# File Tree Component: Hierarchy Analysis

## Step 1: Eye Tracking Simulation

1. **FIRST: Root folder names (blue, bold)**
   - Why: Saturated blue (#2563eb approximation) is highest chromatic weight; positioned at top-left of each tree section

2. **SECOND: Folder names at all levels (blue)**
   - Why: Consistent blue treatment creates visual "landmarks" throughout the tree; eye follows the blue breadcrumbs

3. **THIRD: ASCII connectors (gray vertical/horizontal lines)**
   - Why: Repetitive structural pattern creates a visual scaffold; low contrast deliberately recedes but guides the eye along hierarchy

4. **FOURTH: File names (dark gray/black text)**
   - Why: Neutral color without chromatic pop; positioned subordinate to folder names in the same visual row

5. **FIFTH: Inline comments (gray, right-aligned)**
   - Why: Lowest contrast; positioned furthest right; deliberately suppressed to avoid competing with structure

## Step 2: Hierarchy Ranking

| Rank | Element | Prominence Method |
|------|---------|-------------------|
| 1 | Root folder | **Color** (saturated blue), **Position** (top-left), **Weight** (implied boldness) |
| 2 | Nested folders | **Color** (blue), **Repetition** (color consistency signals folder-ness) |
| 3 | ASCII connectors | **Position** (left rail), **Repetition** (vertical alignment) — suppressed by gray |
| 4 | File names | **Position** (inline) — suppressed by neutral color (no chromatic weight) |
| 5 | Comments | **Position** (right) — suppressed by muted gray, smaller visual mass |

## Step 3: Hierarchy Methods Audit

- [ ] **Size variation** — All text appears to be the same monospace size (no typographic scale)
- [ ] **Weight variation** — No visible bold/regular distinction in the text itself
- [x] **Color variation** — PRIMARY: Blue folders vs gray/black files creates clear categorical distinction
- [x] **Position** — Indentation is the DOMINANT hierarchy signal; deeper = subordinate
- [x] **Whitespace** — Consistent line spacing maintains readability; padding around tree container
- [x] **Containment** — Warm cream background container isolates each tree example

**Primary Method:** POSITION (indentation/spatial hierarchy)
**Secondary Method:** COLOR VARIATION (blue = folder, black = file)

## Step 4: Categorical vs Depth Hierarchy

### Categorical Hierarchy (Type Distinction)

The file tree uses **color as categorical marker**:
- **Blue** = navigable container (folder/directory)
- **Black/Gray** = terminal item (file)
- **Light gray** = metadata/annotation (comments)

This is **functional color hierarchy** — the color encodes meaning (folder vs file), not decoration.

### Depth Hierarchy (Nesting Levels)

Indentation creates **spatial hierarchy** communicating containment:
- Level 0: Root folder (no indent)
- Level 1: ~16px indent + connector
- Level 2: ~32px indent + connector
- Level 3: ~48px indent + connector

The ASCII connectors (├── └──) **reinforce indentation visually**:
- Vertical bars (│) create continuous "rails" showing parent-child relationships
- Branch characters (├ └) mark where items connect to their parent
- Terminal character (└) signals "last item" in a group

### Connector Pattern Analysis

```
├── (continuing) = "I have siblings below me"
└── (terminal)   = "I am the last child at this level"
│   (vertical)   = "My parent continues above; I share vertical alignment with siblings"
```

The connectors solve the **indentation ambiguity problem**: without them, you couldn't easily see which items share the same parent at deep nesting levels.

## Step 5: KortAI Comparison

### Does hierarchy avoid decoration?

**YES — FULL COMPLIANCE**

The hierarchy system is entirely structural:
- Color distinguishes category (folder vs file) — functional, not decorative
- Indentation indicates depth — spatial relationship
- ASCII connectors clarify structure — assistive, not decorative
- No shadows, gradients, or icons competing for attention

### Is the reading path clear?

**YES**

1. Eye enters at root folder (blue, top-left)
2. Scans down following the blue folder landmarks
3. ASCII connectors guide vertical tracking
4. File names discovered in context of their parent folder
5. Comments readable but don't interrupt the structure scan

### Do files compete with folders?

**NO** — Clear categorical separation:
- Folders "pop" with blue; files recede with neutral gray/black
- Users can quickly scan "just folders" by following blue
- Files are discoverable but don't create noise when scanning structure

### Does deep nesting remain parseable?

**YES — UP TO ~4 LEVELS**

The "Deep Nesting" example (design-system/) shows 4 levels clearly:
- Level 1: tokens/, components/
- Level 2: callouts/, code/, navigation/
- Level 3: individual HTML files

At level 4+, the connector pattern and indentation continue to work, though very deep nesting would eventually cause horizontal overflow concerns.

## Step 6: Perceptual Truth

**"File Tree hierarchy feels like a family tree diagram where blue-colored 'patriarch' folders stand out as landmarks, and the ASCII line-work is like drawing connection lines with a ruler — structural scaffolding that tells you 'this belongs to that' without shouting. The files are the youngest generation: visible, named, but subordinate to the lineage structure above them."**

## Hierarchy Alignment Score: 4.2/5

| Criterion | Score | Notes |
|-----------|-------|-------|
| Size creates hierarchy | 2/5 | Monospace font = no size variation possible |
| Position creates hierarchy | 5/5 | Indentation is masterfully deployed |
| Color creates categorical hierarchy | 5/5 | Blue/black distinction is immediate |
| ASCII connectors support structure | 5/5 | Solve the deep-nesting ambiguity problem |
| Avoids decorative hierarchy | 5/5 | Every visual element serves function |
| Reading path clarity | 4/5 | Clear, though dense trees require slower parsing |

**Key Insight:** File trees are a special case where POSITION (indentation) must be the primary hierarchy method because the structure IS the content. The blue/black color system adds a crucial categorical layer without competing with the spatial hierarchy. The ASCII connectors are "structural assistants" — nearly invisible until you need them, then invaluable.

## Design Recommendations

1. **Consider subtle weight variation** for root folders (bold) vs nested (regular) — though monospace fonts limit this
2. **At 5+ levels**, consider truncation or alternate visualization (collapsible sections)
3. **The comment pattern** (inline, gray, right-aligned) works well — extend to other metadata if needed
4. **Section labels** ("PROJECT STRUCTURE", "DESIGN SYSTEM") add helpful context without breaking hierarchy
