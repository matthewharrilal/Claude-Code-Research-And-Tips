# Anti-Pattern Analysis: File Tree Component

**Component Soul:** "The Cartographer" - Maps territory with precision and clarity, using whitespace and ASCII structure for hierarchy, not decorative chrome.

**One-Sentence Summary:**
> File Tree soul is violated when it becomes a file manager application interface rather than a documentation cartography tool.

---

## Soul Violation Score: 4/5

The File Tree has strong soul identity. Violations are easy to detect because they transform documentation into application UI.

---

## 1. Typography Anti-Patterns

**What would make it feel like a file manager app?**

| Anti-Pattern | Why It Destroys Soul | Soul Impact |
|--------------|---------------------|-------------|
| **System UI font (San Francisco, Segoe)** | Signals "interactive application" not "documentation reference" | Transforms reader into user |
| **Variable-width fonts** | Destroys ASCII alignment; connectors misalign | Hierarchy becomes chaos |
| **Bold filenames** | Every file screams for attention | No visual rest, application-feel |
| **Larger font sizes (16px+)** | File trees become primary content, not supporting context | Proportion violation |
| **Syntax highlighting colors** | IDE aesthetic creeps in; red/green/purple on filenames | Documentation becomes code editor |
| **Underlined links on files** | Implies clickability, navigation affordance | Breaks static documentation contract |
| **Different fonts for folders vs files** | Creates visual noise, over-differentiation | Fights monospace alignment soul |

**Soul-Preserving Choices:**
- JetBrains Mono at 13px (small, precise, unobtrusive)
- Single weight for files (400), medium for folders (500)
- Comments in italic for visual separation without font change

---

## 2. Spacing Anti-Patterns

**What would make it cramped or sparse?**

| Anti-Pattern | Why It Destroys Soul | Soul Impact |
|--------------|---------------------|-------------|
| **line-height < 1.5** | Cramped vertical rhythm; ASCII connectors touch | Feels like terminal output dump |
| **line-height > 2.0** | Too airy; loses the "map" density | Becomes a list, not a tree |
| **Uneven indentation** | Breaks the 20px rhythm; hierarchy unclear | Cartographer loses precision |
| **No padding on container** | Content touches edges; feels trapped | Claustrophobic documentation |
| **Excessive padding (40px+)** | Tree floats in void; loses editorial confidence | Uncertain, amateur feel |
| **Margin between every item** | Creates gaps in continuous structure | Tree becomes disconnected fragments |
| **Horizontal scrolling** | Tree overflows container; forces panning | Reader loses overview |

**Soul-Preserving Choices:**
- line-height: 1.7 (readable without being airy)
- Consistent 20px indent per level
- 20px/24px padding (content breathes, not drowns)
- Pre-formatted to maintain whitespace integrity

---

## 3. Color Anti-Patterns

**What would create visual noise?**

| Anti-Pattern | Why It Destroys Soul | Soul Impact |
|--------------|---------------------|-------------|
| **Multi-color file types** (.js=yellow, .ts=blue, .md=gray) | IDE syntax theme infection | Documentation becomes code editor |
| **Green folders** | macOS Finder aesthetic | Application UI contamination |
| **Yellow/gold folders** | Windows Explorer heritage | Operating system, not documentation |
| **Background colors per item** | Selection states, hover highlights | Interactive application behavior |
| **Red for deleted/changed files** | Git diff status coloring | Version control UI, not structure map |
| **Gray connectors darker than files** | Connectors compete with content | Hierarchy inversion |
| **High-contrast black text** | Harsh against warm background | Editorial warmth destroyed |

**Soul-Preserving Choices:**
- Blue folders (#2563EB) - calm authority, not OS-specific
- Dark gray files (#3d3d3d) - soft, readable
- Light gray connectors (#D1D5DB) - visible but subordinate
- Tertiary gray comments (#666666) - metadata recedes

---

## 4. Icon Anti-Patterns

**Should folders/files have icons? What kind would violate soul?**

| Anti-Pattern | Why It Destroys Soul | Soul Impact |
|--------------|---------------------|-------------|
| **File type icons** (JS icon, TS icon, MD icon) | IDE file browser aesthetic | Application interface creep |
| **Folder icons (open/closed)** | macOS/Windows folder metaphor | Operating system contamination |
| **Chevron/arrow expand indicators** | Interactive tree affordance | Documentation becomes navigation |
| **Emoji icons** | Playful/casual tone violation | Editorial precision lost |
| **Color-coded dots/badges** | Status indicators | File management application |
| **Any icon before filename** | Competes with ASCII connectors | Visual noise, alignment broken |

**Soul-Preserving Choice:**
- **NO ICONS.** The ASCII box-drawing characters (├── └── │) ARE the visual system. They provide hierarchy without decoration. Adding icons creates redundant signaling and application UI aesthetic.

**The ASCII connectors are sacred.** They are:
- Culturally universal (every developer knows tree output)
- Perfectly aligned (monospace guarantee)
- Semantically meaningful (├── = sibling, └── = last, │ = continuation)
- Visually restrained (thin lines, not chunky icons)

---

## 5. Interactive Affordance Anti-Patterns

**Hover states, expandable sections?**

| Anti-Pattern | Why It Destroys Soul | Soul Impact |
|--------------|---------------------|-------------|
| **Clickable filenames** | Implies navigation; breaks static contract | Documentation becomes file browser |
| **Hover highlight rows** | Selection state; application behavior | Reader expects interaction |
| **Expandable/collapsible folders** | Dynamic content; requires JavaScript | Complexity; maintenance burden |
| **Cursor: pointer on items** | Indicates clickability | False affordance in documentation |
| **Focus outlines on tree items** | Keyboard navigation support | Application accessibility, not doc |
| **Right-click context menus** | File operations expected | Full application behavior creep |
| **Drag-and-drop zones** | File management operations | Documentation becomes tool |
| **Checkbox selection** | Multi-select for operations | Bulk action UI pattern |

**Soul-Preserving Choices:**
- **Static presentation only** - no hover states, no focus states
- **role="tree"** for accessibility, but **not interactive**
- **user-select: none** on connectors (prevent awkward copy)
- If interaction needed, use **copy button on entire block**, not individual items

---

## Summary: The Five Contamination Sources

1. **IDE Contamination** - Syntax highlighting, file type icons, status colors
2. **OS File Manager Contamination** - Folder icons, system fonts, selection states
3. **Interactive App Contamination** - Hover states, expandable sections, click affordances
4. **Over-Design Contamination** - Multiple colors, decorative icons, excessive spacing
5. **Under-Design Contamination** - Terminal dump, cramped spacing, harsh contrast

---

## The Cartographer's Code

The File Tree succeeds when it:

1. **Uses ASCII as its visual language** - Box-drawing characters are the design system
2. **Maintains monospace discipline** - Every character aligns, every indent is consistent
3. **Respects the documentation contract** - Static reference, not interactive tool
4. **Employs minimal color** - Blue folders, gray files, that's it
5. **Stays subordinate to prose** - File trees support content, they don't dominate

---

## Quick Reference: Soul vs. Anti-Soul

| Dimension | Soul | Anti-Soul |
|-----------|------|-----------|
| Font | JetBrains Mono 13px | System UI / Variable-width |
| Icons | None (ASCII only) | File type icons, folder icons |
| Colors | Blue folders, gray files | Rainbow syntax highlighting |
| Hover | None | Row highlight, cursor pointer |
| Interaction | Static | Expandable, clickable |
| Feel | Documentation map | File manager application |

---

*Analysis complete. Score: 4/5 - Strong soul identity, clear contamination vectors.*
