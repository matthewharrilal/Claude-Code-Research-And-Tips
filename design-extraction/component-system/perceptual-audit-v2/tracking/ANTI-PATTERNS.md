# ANTI-PATTERNS REGISTRY — Structural Focus
## Phase 4 Re-Audit Tracking Sheet

═══════════════════════════════════════════════════════════════════════════════
## PURPOSE
═══════════════════════════════════════════════════════════════════════════════

Catalog what NOT to do with STRUCTURAL focus:
- Layout anti-patterns that violate zone structure
- Density anti-patterns that violate organization
- Axis anti-patterns that violate flow

═══════════════════════════════════════════════════════════════════════════════
## MASTER ANTI-PATTERNS (KortAI Soul)
═══════════════════════════════════════════════════════════════════════════════

### Zone Structure Anti-Patterns
| Anti-Pattern | Why It Violates | Alternative |
|--------------|-----------------|-------------|
| Zones not separated by whitespace | Creates visual chaos | Use 12-24px gaps |
| Multiple competing title zones | Hierarchy confusion | One title zone per component |
| Dense zones without breathing points | Overwhelms reader | Intentional LOW density areas |
| Hard borders between all zones | "Bento box" feel | Whitespace separation |

### Density Anti-Patterns
| Anti-Pattern | Why It Violates | Alternative |
|--------------|-----------------|-------------|
| Uniform density throughout | No rhythm, monotonous | HIGH/MED/LOW variation |
| All HIGH density | Exhausting to read | Breathing points |
| All LOW density | Feels empty, wasteful | Appropriate content density |
| No density gradient in vertical flow | Lacks progression | Sparse→Dense→Sparse |

### Axis Anti-Patterns
| Anti-Pattern | Why It Violates | Alternative |
|--------------|-----------------|-------------|
| Mixing H and V axes randomly | Disorienting | Clear H or V sections |
| No axis transitions | Feels flat | Intentional H→V moments |
| Cards in V-only layout | Misses magazine feel | H cards, V page |

### Container Anti-Patterns
| Anti-Pattern | Why It Violates | Alternative |
|--------------|-----------------|-------------|
| Rounded corners >6px | Loses editorial edge | Sharp or 4px max |
| Heavy drop shadows | Feels floating, ungrounded | Subtle 0.08 opacity |
| Borders on everything | "Digital bento box" | Whitespace + bg change |
| Different radius per component | Inconsistent | System radius only |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT-SPECIFIC ANTI-PATTERNS (Re-Audit Phase)
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| No max-height with scroll | Very long code dominates page, breaks density rhythm | Phase 4 |
| Mobile horizontal scroll UX | Small screens struggle with wide code | Phase 4 |
| No line wrapping option | Long lines force horizontal scroll | Phase 4 |
| No collapsed/expanded state | Can't minimize large blocks | Phase 4 |
| Rounded corners on code block | Loses editorial precision | Phase 4 |

---

### Callout Family (Info, Tip, Gotcha, Essence, Challenge)
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| No collapse for long callouts | Long callouts dominate page flow | Phase 4 |
| RTL support incomplete | Breaks in RTL languages (border on wrong side) | Phase 4 |
| Multi-callout gap undefined | Inconsistent stacking when callouts adjacent | Phase 4 |
| Inline code overflow | Long code in callout breaks mobile layout | Phase 4 |
| Icons in callouts | Decoration competes with content (KortAI = no icons) | Phase 4 |
| Using sans for Essence body | Essence MUST be serif italic (unique in family) | Phase 4 |

---

### File Tree — The Methodical Surveyor
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| ASCII tree not screen-reader friendly | Accessibility failure | Phase 4 |
| Long filenames + deep nesting overflow | Mobile layout breaks | Phase 4 |
| No max-height with scroll | Tall trees dominate page | Phase 4 |
| No interactive expand/collapse | Can't hide complexity | Phase 4 |
| Monospace font rendering varies | Alignment may break across systems | Phase 4 |
| Using proportional font | Destroys alignment hierarchy | Phase 4 |

---

### Decision Matrix — The Impartial Cartographer
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| Mobile responsive undefined | Tables break on small screens | Phase 4 |
| No table caption semantics | Screen reader accessibility gap | Phase 4 |
| Missing scope attributes | Header-cell association unclear | Phase 4 |
| Wide content overflow | Horizontal scroll needed | Phase 4 |
| No sticky headers for tall tables | Context lost when scrolling | Phase 4 |
| **Vertical cell borders** | Creates "spreadsheet" feel vs open columns | Phase 4 |
| Alternating row colors | Generic web table, not editorial | Phase 4 |

---

### Core Abstraction — The Sagacious Mentor
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| Mobile responsive undefined | Long code may overflow frame | Phase 4 |
| No collapse for long components | Page domination | Phase 4 |
| Accessibility semantics unclear | Screen reader experience | Phase 4 |
| Focus states missing | Keyboard navigation | Phase 4 |
| Sans-serif for wisdom quote | Loses editorial pull-quote feel | Phase 4 |

---

### Task Component — The Diligent Scribe
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| Keyboard navigation untested | Accessibility gap | Phase 4 |
| Focus states missing | Tab navigation unclear | Phase 4 |
| Mobile touch targets (18px) | May be too small (44px recommended) | Phase 4 |
| Drag-to-reorder undefined | Can't prioritize tasks | Phase 4 |
| Removing completed tasks | Loses visibility (strikethrough is KortAI way) | Phase 4 |
| Gamification colors/confetti | Violates editorial restraint | Phase 4 |
| Gaps between tasks in list | Breaks workflow continuity stream | Phase 4 |

---

### Reasoning Component — The Deliberative Counselor
| Anti-Pattern | Why It Violates | Discovered |
|--------------|-----------------|------------|
| 3+ column comparisons | Binary comparison only (2 columns) | Phase 4 |
| Unequal column heights | Visual imbalance suggests preference | Phase 4 |
| Tablet breakpoint (640-900px) | Missing responsive design | Phase 4 |
| Mobile column stacking | Undefined responsive behavior | Phase 4 |
| Color-coding columns | Suggests preference before summary | Phase 4 |
| Bold "winner" column | Destroys equal-weight neutrality | Phase 4 |

═══════════════════════════════════════════════════════════════════════════════
## COEXISTENCE ANTI-PATTERNS (Phase 4-Beta)
═══════════════════════════════════════════════════════════════════════════════

| Pair | Anti-Pattern | Why It Violates |
|------|--------------|-----------------|
| Code + Callout | No gap between them | Loses zone boundary, runs together |
| Code + Code | Different syntax themes | Visual inconsistency |
| Callout + Callout | Touching callouts | Unlike tasks, callouts need gap |
| FileTree + Code | Same visual treatment | Can't distinguish structure vs content |
| Matrix + Matrix | Adjacent tables | Data overload, needs prose break |
| Task + Task (different lists) | No section break | Lists blur together |
| Reasoning + Reasoning | Back-to-back comparisons | Decision fatigue |
| Heavy + Heavy | Dense component sequence | No breathing point, exhausting |

### Universal Coexistence Anti-Pattern
| Anti-Pattern | Why It Violates |
|--------------|-----------------|
| No gap between adjacent components | Violates structural orthogonality |
| Inconsistent gap values | Creates visual chaos |
| Same-type components without prose break | Monotonous, no rhythm |
| HIGH density followed by HIGH density | No breathing room |

**Golden Rule:** 24px gap between ALL component pairs. Prose between same-type components.

---

═══════════════════════════════════════════════════════════════════════════════
## PAGE COMPOSITION ANTI-PATTERNS (Phase 4-Gamma)
═══════════════════════════════════════════════════════════════════════════════

| Page Type | Anti-Pattern | Why It Violates |
|-----------|--------------|-----------------|
| Documentation | All HIGH density | Exhausting reference experience |
| Documentation | No density valleys | Misses breathing points |
| Tutorial | No checkpoints | Reader can't verify progress |
| Tutorial | All prose, no components | Misses "show don't tell" |
| Portfolio | Dense component stack | Misses editorial restraint |
| Portfolio | No visual anchors | Reader lost in monotony |
| Kitchen Sink | No organization | Chaos instead of showcase |
| Kitchen Sink | Missing coexistence examples | Incomplete coverage |

### Universal Page Anti-Patterns
| Anti-Pattern | Why It Violates |
|--------------|-----------------|
| Uniform density throughout | No rhythm, monotonous |
| No LOW density zones | Reader fatigue |
| H-axis elements in V-only flow | Misses magazine layout DNA |
| V-only page structure | Web-generic, not editorial |
| No density gradient (sparse→dense→sparse) | Flat reading experience |
| Components with no prose context | Floating artifacts |
| Prose with no component demonstration | Abstract, not grounded |

**Golden Rule:** Every page needs density rhythm: LOW → HIGH → LOW breathing pattern.

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Status:** Master patterns documented, component-specific pending
**Update Frequency:** After each component re-audit
