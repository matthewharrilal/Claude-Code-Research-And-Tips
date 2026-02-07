<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md
     Tier: A | Batch: 1 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════ -->

## 1. Why This Exists

This file defines the complete anti-pattern registry for the KortAI design system — the inverse of the soul. Where MASTER-SOUL-SYNTHESIS.md declares what KortAI IS, this file declares what KortAI must NEVER be. Created during Phase 4A-E synthesis by consolidating the 56KB component-system/ANTI-PATTERNS.md (which itself aggregated tracking/ANTI-PATTERNS.md per-component data from 11 audit sub-agents) into a 19KB authoritative reference. It establishes "The Soul Test" — a single yes/no question that determines whether any component has lost its editorial identity — and provides the universal banned CSS properties list, component-specific enemy patterns, coexistence anti-patterns, and page composition violations. This is T1-locked authority; any implementation that passes the banned properties grep is not necessarily compliant, but any implementation that FAILS it is definitively non-compliant.

## 2. The Question This Answers

"What CSS properties, visual patterns, and compositional structures are explicitly banned in KortAI — and what does their presence in an implementation prove?"

## 3. Status

**ACTIVE / LOCKED** — T1 Synthesis (Phase 4A-E, 2026-02-04). Highest authority for anti-pattern enforcement. Modification requires Phase-level approval. Supersedes component-system/ANTI-PATTERNS.md (56KB root file, which now carries a SUPERSEDED header pointing here).

**Verify:** `[ -f "design-extraction/component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md" ] && wc -l < "design-extraction/component-system/perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md"` — expect ~414 lines.

## 4. Soul Alignment

This file is the INVERSE expression of every soul piece. Each banned property maps directly to a soul piece violation:

| Soul Piece (from MASTER-SOUL-SYNTHESIS.md) | Anti-Pattern This File Bans | Specific CSS |
|--------------------------------------------|-----------------------------|--------------|
| Rule 1: Sharp Edges | `border-radius > 0` | `border-radius: 4px/6px/8px/12px/50%` — ALL banned |
| Rule 2: Flat Design | `box-shadow`, `transform: translateY()`, `gradients` | `box-shadow: 0 2px 4px ...` — ALL banned |
| Rule 3: Limited Palette | Traffic light colors | `#28a745, #dc3545, #ffc107, #17a2b8` — ALL banned |
| Rule 4: Typography Hierarchy | Icon/emoji usage, sans-serif in Essence body | `content: "warning-triangle"`, `content: "lightbulb"` — ALL banned |
| Rule 5: Heavy Borders When Bordered | Thin borders, all-around borders | `border: 1px solid` on all sides — banned for callouts |

This file does not implement soul — it defines the BOUNDARY of soul by enumerating everything outside it.

## 5. Built On

| Source | Role | Path |
|--------|------|------|
| tracking/ANTI-PATTERNS.md | Per-component anti-pattern raw data from 11 audit sub-agents (7 full ANTI-PATTERN-ANALYSIS.md files + 4 minimal) | `design-extraction/component-system/perceptual-audit-v2/tracking/ANTI-PATTERNS.md` |
| component-system/ANTI-PATTERNS.md (root, 55,870 bytes) | Comprehensive 56KB consolidated anti-pattern document with CSS examples and enemy code; SUPERSEDED by this file | `design-extraction/component-system/ANTI-PATTERNS.md` |
| Component-specific audit findings | Soul extractions and anti-pattern analyses from code-snippet, callout family, file-tree, decision-matrix, core-abstraction, task, reasoning components | `design-extraction/component-system/perceptual-audit-v2/components/*/sub-agent-analyses/ANTI-PATTERN-ANALYSIS.md` |
| Phase 4 re-audit findings | Cross-component consistency verification and re-audit results | `design-extraction/component-system/perceptual-audit-v2/re-audit/` |

**Key values extracted from sources:**
- `border-radius: 0` (ALWAYS, no exceptions) — from Rule 1
- `box-shadow: none` (ALWAYS, no exceptions) — from Rule 2
- 8 banned CSS color values (Bootstrap traffic lights)
- 12 component "enemy patterns" with CSS code blocks
- 8 coexistence pair violations
- 7 page composition violations

## 6. Must Honor

**ESTABLISHES** (this file is a constraint ORIGIN):

| Constraint | Value | Why | Consequence of Violation |
|------------|-------|-----|--------------------------|
| Universal banned: `border-radius` | Must be `0` for ALL components | Sharp = editorial precision; rounded = generic "friendly" web app | Soul Piece 1 violation; fails Soul Test |
| Universal banned: `box-shadow` | Must be `none` for ALL components | Flat = honest print heritage; shadows = fake 3D depth | Soul Piece 2 violation; fails Soul Test |
| Universal banned: traffic light colors | Never `#28a745`, `#dc3545`, `#ffc107`, `#17a2b8` or pastel variants | Kindergarten-level visual coding; zero brand identity | Soul Piece 3 violation; fails Soul Test |
| Universal banned: hover lift | Never `transform: translateY(-2px)` or `scale()` on hover | Treats content like buttons; fake 3D | Soul Piece 2 violation |
| Universal banned: icons/emojis in callouts | Never warning triangles, info circles, checkmarks, lightbulbs | Typography creates hierarchy, not decoration | Soul Piece 4 violation |
| Universal banned: zebra striping | Never `:nth-child(even) { background }` | Patronizes reader; assumes they cannot track rows | Spreadsheet feel vs editorial |
| The Soul Test | "Could this exist in a Bootstrap/Tailwind/Material project?" — if yes, FAIL | Components must be unmistakably editorial | Entire design system loses identity |
| Coexistence: 24px gap rule | 24px between ALL component pairs | Structural orthogonality between zones | Visual chaos if violated |
| Coexistence: prose between same-type | Same-type components (callout+callout, matrix+matrix) need prose break | Monotony without rhythmic break | Reader fatigue |
| Page density rhythm | Every page needs LOW-HIGH-LOW breathing pattern | No density valleys = exhausting experience | Monotonous reading |

Also establishes: 7 component-specific enemy patterns (VS Code clone, Bootstrap alert, terminal dump, spreadsheet table, disconnected boxes, gamified todo, green/red pro-con).

## 7. What Breaks If This Changes

**BLAST RADIUS: CATASTROPHIC**

This file is referenced by 27 files across the repository (63 total occurrences). Modifying banned properties would invalidate:

| Consumer Category | Files Affected | Impact |
|-------------------|----------------|--------|
| T1 sibling files | PRODUCTION-RULES.md, CONSISTENCY-VERIFICATION.md | Rules and verification checklists become inconsistent with anti-pattern definitions |
| Downstream derivative | `showcase/DESIGN-SYSTEM/anti-patterns/registry.md` | Condensed public-facing registry becomes stale; it was reorganized FROM this file |
| Source of Truth Registry | `showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` | Authority declarations broken |
| FINDINGS-INDEX | `showcase/FINDINGS-INDEX.md` (line 351) | Explicit source citation becomes invalid |
| Component CSS implementations | `component-system/css/` (9 files) | All CSS files were written to comply with these bans; relaxing bans does not retroactively fix implementations |
| Playwright tests | `component-system/tests/anti-pattern.spec.ts` | Tests verify absence of banned properties; changing bans breaks assertions |
| KA Decisions | `showcase/knowledge-architecture/KA-DECISIONS.md` | Supersession chain (3B-anti-patterns.md -> ANTI-PATTERNS.md -> ANTI-PATTERNS-REGISTRY.md) becomes incorrect |
| Dependency trace | 11+ files in `showcase/dependency-trace/` | Relationship maps, reachability reports, integrity reports all cite this file |

**Specific risk:** If `border-radius: 0` is relaxed here but not in DESIGN-TOKEN-SUMMARY.md and PRODUCTION-RULES.md, the T1 files become internally contradictory — a state with no recovery path short of full re-audit.

## 8. Consumed By

| Consumer | How It Uses This File |
|----------|----------------------|
| `showcase/DESIGN-SYSTEM/anti-patterns/registry.md` | Condensed + reorganized derivative for public-facing design system docs. Reorganizes by category (Geometry, Color, Layout, Typography, Interaction, Component) rather than by source structure. |
| `showcase/FINDINGS-INDEX.md` (line 351) | Explicitly cites as source for Section 5 "Anti-Patterns — What NOT to Do" |
| `showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` | Declares this file as T1 authority for "Complete what NOT to do" |
| `component-system/tests/anti-pattern.spec.ts` | Playwright tests enforce banned properties programmatically via grep-like assertions |
| `component-system/css/*.css` (9 files) | All production CSS was written to comply with the bans defined here |
| `showcase/DESIGN-SYSTEM/guides/migration-guide.md` | Migration checklist references anti-patterns registry as mandatory pre-read |
| PRODUCTION-RULES.md (sibling T1) | References banned properties in enforcement rules and new component checklist |
| CONSISTENCY-VERIFICATION.md (sibling T1) | Verification protocol includes checks derived from banned property list |
| All future OD/AD/CD explorations | "The Soul Test" must be applied to every exploration; pre-implementation checklist references this file |

## 9. Research Debt

| Gap | Description | Impact | Suggested Resolution |
|-----|-------------|--------|----------------------|
| No OD/AD/CD stage anti-patterns | File was created during T1 synthesis (pre-DD completion). Anti-patterns specific to Organization Dimension, Axis Dimension, and Combination Dimension explorations are not documented. DD explorations revealed new anti-patterns (e.g., traffic-light adjacency DD-F-015) that are captured in DESIGN-SYSTEM but not traced back here. | Future stages may produce violations that don't appear in this registry | After OD/AD/CD completion, a Phase 5 update pass should extend this registry with stage-specific anti-patterns |
| No density pattern anti-patterns | R3 research identified 51 density findings; DESIGN-SYSTEM/anti-patterns/registry.md adds "Same Density Throughout" and "Same-Velocity Stacking" that don't exist in this T1 source | Derivative is MORE comprehensive than source (inversion of authority) | Either: (a) backport DD/research anti-patterns here, or (b) declare DESIGN-SYSTEM registry as the forward-authority for stage-level anti-patterns |
| No accessibility anti-patterns | All banned properties are visual CSS. No mention of ARIA anti-patterns, keyboard interaction anti-patterns, or screen reader anti-patterns | Accessibility violations could pass the Soul Test while still being fundamentally wrong | Future audit: define accessibility anti-patterns for editorial components |
| Responsive/mobile anti-patterns absent | All anti-patterns assume desktop viewport. No mention of touch-target sizes, mobile density adjustments, or responsive breakpoint violations | Mobile implementations have no anti-pattern guardrails | Define responsive anti-patterns when mobile exploration begins |
| "Enemy Pattern" coverage gap | 12 enemy patterns documented but only for 7 components. ASCII Art enemy is listed in the summary table but has no detailed CSS block in the component section | Inconsistent coverage depth across components | Add detailed enemy pattern for ASCII Art, Info Callout, Tip Callout, and Challenge Box |

## 10. Diagnostic Questions

1. Does `grep -E "border-radius|box-shadow|#28a745|#dc3545|#007bff" component.css` return 0 matches for every CSS file in `component-system/css/`?
2. Does the "Enemy Code Summary" table (12 entries) match the component-specific anti-pattern sections (currently 7 detailed sections) — and if not, which components lack detailed enemy patterns?
3. Does `showcase/DESIGN-SYSTEM/anti-patterns/registry.md` contain any anti-patterns NOT present in this T1 source — and if so, is the authority relationship inverted?
4. Are the 8 coexistence anti-patterns (Code+Callout, Code+Code, Callout+Callout, FileTree+Code, Matrix+Matrix, Task+Task, Reasoning+Reasoning, Heavy+Heavy) enforced in any automated test?
5. Has any DD/OD/AD/CD exploration ever failed "The Soul Test" — and if so, was the failure traceable to a specific banned property listed in this file?

<!-- ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->

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
