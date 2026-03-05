# Components — Inventory

All components follow the 2-Zone DNA pattern (sparse label + dense body) where applicable. For CSS implementations, see `components.css`.

---

## Universal (present across all exploration stages)

| Component | Purpose | Key Signal | Velocity | Weight |
|-----------|---------|------------|----------|--------|
| **Callout family** | Semantic emphasis (info, tip, gotcha, essence, challenge) | 4px left border + accent color + 2-zone DNA | MEDIUM | Light |
| **Code block** | Technical content display | Dark background (`#1A1A1A`) + syntax highlighting (7 colors) + 3px border | SLOW | Heavy |
| **Code snippet** | Code with filename header | Dark background + header bar with filename + copy button | SLOW | Heavy |
| **Inline code** | Code within prose | Subtle background (`#F0EBE3`) + 1px border | FAST | Light |
| **Data table** | Structured comparison | Mono uppercase headers + 3px header border + no vertical borders | SLOW | Heavy |
| **Page header** | Document opening with ID, title, subtitle | 3px red bottom border | FAST | Medium |
| **Page footer** | Document closing with metadata | 3px red top border | FAST | Medium |
| **Stats bar** | Horizontal key-value metrics | Flex layout + 1px bordered segments | FAST | Light |
| **Section indicator** | Section label/metadata line | Mono uppercase + 1px bottom border | FAST | Light |
| **File tree** | Directory structure display | 4px blue left border + monospace content | MEDIUM | Medium |
| **Decision matrix** | Comparison grid with highlighting | 4px red left border + grid rows | SLOW | Heavy |
| **Q&A pair** | Question-answer with offset positioning | Serif italic question + dense answer block | MEDIUM | Medium |
| **Skip link** | Keyboard navigation (accessibility) | Hidden until focused | — | — |

## CD-Era (introduced in combination explorations)

| Component | Purpose | Key Signal | Velocity | Weight |
|-----------|---------|------------|----------|--------|
| **Reasoning container** | Framed deliberation display | 3px full border + amber accent badge | SLOW | Heavy |
| **Core abstraction** | Essence quote above, code proof below | 3px red border + split layout | MEDIUM | Heavy |
| **Bento grid** | High-density containment layout | 2-column grid + 3px bordered cells | MEDIUM | Heavy |
| **Essence pullquote** | Bridge transition element | 4px purple left border + serif italic | MEDIUM | Medium |
| **Section zone** | Density progression container | Background + padding variants | — | Light |
| **Breathing zone** | Between-section decompression | Breathing background + 3px top/bottom borders | — | Light |
| **Version badge** | Header metadata display | Mono text + 1px bordered pill | FAST | Light |

**Velocity:** SLOW = reader pauses to process, MEDIUM = reader scans, FAST = reader glances. See `grammar.md` Component Sequencing for combination rules.
