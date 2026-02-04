# ANTI-PATTERNS REGISTRY
## Complete KortAI Anti-Pattern Documentation

**Version:** 1.0
**Date:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:** tracking/ANTI-PATTERNS.md + ANTI-PATTERNS.md (root)

═══════════════════════════════════════════════════════════════════════════════
## THE CORE ANTI-PATTERN PHILOSOPHY
═══════════════════════════════════════════════════════════════════════════════

### The Soul Test

> "Could this component exist in a Bootstrap/Tailwind/Material project without modification?"

**If yes → FAIL.** Our components must be unmistakably editorial.

### Why Document Anti-Patterns?

Every CSS framework has converged on identical patterns. Bootstrap alerts look like Tailwind alerts look like Chakra alerts. This creates:

1. **Visual Homogeneity** — Every website looks the same
2. **Zero Brand Identity** — Components could belong to any project
3. **Unconscious Defaults** — Developers accept framework defaults
4. **Lost Editorial Soul** — Documentation feels like SaaS dashboards

═══════════════════════════════════════════════════════════════════════════════
## UNIVERSAL BANNED PROPERTIES
═══════════════════════════════════════════════════════════════════════════════

### Banned CSS Properties — NO EXCEPTIONS

```css
/* ═══════════════════════════════════════════════════════════════════
   UNIVERSAL BANNED PROPERTIES
   These must NEVER appear in any component implementation
   ═══════════════════════════════════════════════════════════════════ */

/* BANNED: Border Radius > 0 */
border-radius: 4px;      /* Generic "friendly" web app */
border-radius: 6px;      /* Bootstrap default */
border-radius: 8px;      /* Tailwind rounded-lg */
border-radius: 12px;     /* Material Design */
border-radius: 50%;      /* Pill shapes, circles */

/* BANNED: Box Shadows */
box-shadow: 0 1px 2px rgba(0,0,0,0.05);   /* Subtle elevation */
box-shadow: 0 2px 4px rgba(0,0,0,0.1);    /* Bootstrap default */
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); /* Tailwind shadow-md */

/* BANNED: Traffic Light Colors */
color: #28a745;          /* Bootstrap success green */
color: #dc3545;          /* Bootstrap danger red */
color: #ffc107;          /* Bootstrap warning yellow */
color: #17a2b8;          /* Bootstrap info blue */
background: #d4edda;     /* Success green background */
background: #f8d7da;     /* Danger red background */
background: #fff3cd;     /* Warning yellow background */
background: #d1ecf1;     /* Info blue background */

/* BANNED: Hover Lift Effects */
transform: translateY(-2px);    /* Hover lift */
transform: scale(1.02);         /* Hover grow */

/* BANNED: Zebra Striping */
:nth-child(even) { background: #f8f9fa; }

/* BANNED: Gradient Backgrounds */
background: linear-gradient(to bottom, #fff, #f8f9fa);
```

### Complete Banned Properties Reference

| Property | Banned Values | Correct Value | Reason |
|----------|---------------|---------------|--------|
| `border-radius` | Any > 0 | `0` | Sharp = editorial precision |
| `box-shadow` | Any value | `none` | Flat = honest design |
| `background` | Pastels (#fff3cd, etc.) | `transparent` or solid | No color coding |
| `background` | Gradients | Solid colors only | Print heritage |
| `transform` | `translateY(-2px)`, `scale()` | None | No hover lift |
| `color` (semantic) | #28a745, #dc3545, #ffc107 | Brand primary only | No traffic lights |
| `nth-child` styling | Alternating backgrounds | None | No zebra striping |
| `content` (icons) | Emojis, icon fonts | Typography only | Words > symbols |

### Banned Icon Usage

```css
/* BANNED: Warning Triangle Icons */
.warning::before { content: "⚠️"; }

/* BANNED: Info Circle Icons */
.info::before { content: "ℹ️"; }

/* BANNED: Checkmark Icons */
.success::before { content: "✓"; color: green; }

/* BANNED: X/Cross Icons */
.error::before { content: "✗"; color: red; }

/* BANNED: Lightbulb Icons */
.tip::before { content: "💡"; }
```

**Editorial Alternative:** Use typography (italic labels, uppercase text) to convey meaning.

═══════════════════════════════════════════════════════════════════════════════
## MASTER STRUCTURAL ANTI-PATTERNS
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
| Rounded corners >0px | Loses editorial edge | Sharp 0px always |
| Heavy drop shadows | Feels floating, ungrounded | Flat design |
| Borders on everything | "Digital bento box" | Whitespace + bg change |
| Different radius per component | Inconsistent | System radius only (0) |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT-SPECIFIC ANTI-PATTERNS
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| Traffic light dots (MacOS chrome) | IDE decoration | No window chrome |
| VS Code dark theme (#1e1e1e) verbatim | IDE, not editorial | Warm slate (#1E1E1E) |
| 7+ syntax highlighting colors | Rainbow overload | 2-3 colors max |
| Always-visible copy button | Utility dominates | Hover-reveal |
| No max-height with scroll | Page domination | Consider constraints |
| Rounded corners on code block | Loses precision | Sharp edges |

**Enemy Pattern:**
```css
/* ENEMY: VS Code Clone */
.generic-code-block {
  background: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.generic-code-block__dots { /* Red/yellow/green circles */ }
```

---

### Callout Family (Info, Tip, Gotcha, Essence, Challenge)

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| Pastel backgrounds (#fff3cd, #d4edda) | Traffic light coding | Subtle tints or transparent |
| Warning triangle / info circle icons | Decoration over content | Typography only |
| All-around borders | Box, not margin note | Left border flag only |
| Sans-serif for Essence body | Loses pull-quote feel | Serif italic (unique) |
| No collapse for long callouts | Page domination | Consider expandable |
| Icons in callouts | Decoration competes | No icons (KortAI = typography) |

**Enemy Pattern:**
```css
/* ENEMY: Bootstrap Alert */
.alert-warning {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 4px;
}
.alert-warning::before { content: "⚠️"; }
```

---

### File Tree — The Methodical Surveyor

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| Terminal dark background | IDE aesthetic | Warm cream |
| No label/heading | Just dumped content | Editorial label |
| Proportional font | Destroys alignment | Monospace only |
| No annotations | Structure without context | Inline comments |
| Interactive expand/collapse as default | IDE widget | Reference first |

**Enemy Pattern:**
```css
/* ENEMY: Terminal Dump */
.terminal-tree {
  background: #1e1e1e;
  font-family: 'Courier New', monospace;
  /* No structure, just pasted output */
}
```

---

### Decision Matrix — The Impartial Cartographer

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| **Vertical cell borders** | Creates "spreadsheet" feel | Whitespace columns |
| Gray header background | Spreadsheet convention | Typography hierarchy |
| Zebra striping | Assumes reader can't track | Trust reader |
| Color coding (green good, red bad) | Kindergarten logic | Typography only |
| ✓/✗ icons | Patronizing indicators | No icons |
| Hover row highlighting | App, not content | No hover effects |
| Alternating row colors | Generic web table | Uniform background |

**Enemy Pattern:**
```css
/* ENEMY: Spreadsheet Table */
.generic-table th { background: #f8f9fa; }
.generic-table tr:nth-child(even) { background: #f8f9fa; }
.generic-table td { border: 1px solid #dee2e6; } /* All sides */
```

---

### Core Abstraction — The Sagacious Mentor

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| Disconnected boxes (quote + code separate) | No visual relationship | Unified frame |
| Tab interface (click to switch) | Hides one element | Both visible |
| Sans-serif for wisdom quote | Loses editorial feel | Serif italic |
| Different border treatments | Inconsistent | Single frame |

**Enemy Pattern:**
```css
/* ENEMY: Two Separate Boxes */
.philosophy-box { border-radius: 8px; background: #f0f4f8; }
.code-box { border-radius: 8px; background: #1e1e1e; }
/* No visual connection */
```

---

### Task Component — The Diligent Scribe

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| Removing completed tasks | Loses visibility | Strikethrough only |
| Gamification (confetti, colors) | Violates restraint | No celebration |
| Gaps between tasks in list | Breaks continuity | Tasks touch (0px) |
| Rounded checkbox | Friendly, not editorial | Sharp square |
| Green checkmarks | Traffic light coding | Red fill only |

**Enemy Pattern:**
```css
/* ENEMY: Gamified Todo */
.task--complete { animation: confetti 1s; }
.task--complete::before { content: "✓"; color: #28a745; }
.task + .task { margin-top: 8px; } /* Gap breaks continuity */
```

---

### Reasoning Component — The Deliberative Counselor

| Anti-Pattern | Why It Violates | Correct Approach |
|--------------|-----------------|------------------|
| 3+ column comparisons | Binary comparison only | 2 columns |
| Unequal column heights | Visual bias | Equal weight |
| Color-coding columns | Suggests preference | Equal treatment |
| Bold "winner" column | Destroys neutrality | Equal weight until summary |
| Green/red backgrounds | Pro/con coloring | Neutral |

**Enemy Pattern:**
```css
/* ENEMY: Green/Red Pro-Con */
.pros-column { background: #d4edda; }
.cons-column { background: #f8d7da; }
.pros-item::before { content: "✓"; color: green; }
.cons-item::before { content: "✗"; color: red; }
```

═══════════════════════════════════════════════════════════════════════════════
## COEXISTENCE ANTI-PATTERNS
═══════════════════════════════════════════════════════════════════════════════

| Pair | Anti-Pattern | Why It Violates |
|------|--------------|-----------------|
| Code + Callout | No gap between them | Loses zone boundary |
| Code + Code | Different syntax themes | Visual inconsistency |
| Callout + Callout | Touching callouts | Unlike tasks, callouts need gap |
| FileTree + Code | Same visual treatment | Can't distinguish structure vs content |
| Matrix + Matrix | Adjacent tables | Data overload, needs prose break |
| Task + Task (different lists) | No section break | Lists blur together |
| Reasoning + Reasoning | Back-to-back comparisons | Decision fatigue |
| Heavy + Heavy | Dense component sequence | No breathing point |

### Universal Coexistence Anti-Patterns

| Anti-Pattern | Why It Violates |
|--------------|-----------------|
| No gap between adjacent components | Violates structural orthogonality |
| Inconsistent gap values | Creates visual chaos |
| Same-type components without prose break | Monotonous, no rhythm |
| HIGH density followed by HIGH density | No breathing room |

**Golden Rule:** 24px gap between ALL component pairs. Prose between same-type components.

═══════════════════════════════════════════════════════════════════════════════
## PAGE COMPOSITION ANTI-PATTERNS
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
## ENEMY CODE SUMMARY
═══════════════════════════════════════════════════════════════════════════════

| Component | Primary Enemy Pattern | Our Alternative |
|-----------|----------------------|-----------------|
| ASCII Art | Gray placeholder box | Character texture art |
| Code Block | VS Code clone | Magazine typography |
| Gotcha Box | Yellow warning box | Left border + italic label |
| Essence Box | Gray blockquote | Full border frame + serif |
| Decision Matrix | Spreadsheet table | Bottom borders only |
| Core Abstraction | Disconnected boxes | Unified container |
| Reasoning Box | Green/red pro/con | Neutral comparison |
| File Tree | Terminal dump | Labeled editorial block |
| Challenge Box | Red danger box | Square badge + text |
| Task Progression | Checkout wizard | Vertical typography list |
| Info Callout | Blue info box | Muted margin note |
| Tip Callout | Green tooltip | Top border + editorial voice |

═══════════════════════════════════════════════════════════════════════════════
## VERIFICATION PROTOCOL
═══════════════════════════════════════════════════════════════════════════════

### Pre-Implementation Check

- [ ] Reviewed ENEMY CODE for this component type
- [ ] Identified all banned properties
- [ ] Confirmed editorial alternative approach
- [ ] Zero rounded corners in design
- [ ] Zero shadows in design
- [ ] Zero traffic light colors
- [ ] Typography creates hierarchy (not decoration)

### CSS Audit Command

```bash
# Search for banned properties
grep -E "border-radius|box-shadow|#28a745|#dc3545|#007bff" component.css
# Should return 0 matches
```

### Soul Test Questions

1. Would this feel at home in a magazine?
2. Does the component have editorial confidence?
3. Is meaning conveyed through typography, not color?
4. Is the design decisive, not "safe"?

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:**
- tracking/ANTI-PATTERNS.md (structural focus)
- ANTI-PATTERNS.md (root, with CSS examples)
- Phase 4 re-audit findings

**Purpose:** Complete anti-pattern reference for KortAI implementation
