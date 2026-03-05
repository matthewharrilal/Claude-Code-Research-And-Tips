# Fix Cycle 2: Three-Tier Code Blocks + Table of Contents

**Problem:** All 25-30 code blocks had identical dark (#1A1A1A) treatment regardless of content type, creating a hammering dark/light alternation that fatigued the reader. The micro-rhythm within zones was a single repeating note.

**Solution:** Differentiated code blocks into three visual tiers based on content purpose, and added a table of contents for navigation.

---

## The Three Tiers

### LIGHT tier (24 blocks)
**Treatment:** Warm background (#F5F0E8), dark text, 3px colored left-border accent, monospace.
**Rationale:** Short CLI command examples (1-6 lines) are quick references, not deep dives. They do not warrant the full weight of a dark console. The warm background lets them sit in the page flow without creating a jarring dark interruption.

**Zone-specific accents:**
- Z3 (Tactical Map): Red left border -- matches the section's accent
- Z4 (Command Console): Amber left border -- matches the operational tone
- Z5 (Dispatch Log): Green left border -- signals reference/resolution

**Blocks converted to LIGHT:**
1. Mayor commands (3 lines) -- `gt mayor up/status/down`
2. Deacon commands (2 lines) -- `gt deacon up/status`
3. Dogs commands (2 lines) -- `gt dogs up/bark`
4. Refinery commands (2 lines) -- `gt refinery up/decompose`
5. Polecat commands (3 lines) -- `gt polecat up/list/assign`
6. Witness commands (2 lines) -- `gt witness up/report`
7. Crew commands (3 lines) -- `gt crew spawn/count/purge`
8. Key Beads Commands (4 lines) -- `bd ready/create/dep/show`
9. Installation (6 lines) -- `go install/gt version/gt init`
10. Adding First Rig (4 lines) -- `gt rig add/list`
11. Health Checks (6 lines) -- `gt status/rig status/deacon report`
12. Quality Verification (4 lines) -- `gt dogs bark/report`
13. Context Collapse recovery (2 lines)
14. Race Conditions recovery (2 lines)
15. Runaway Crew recovery (3 lines)
16. Mayor Deadlock recovery (3 lines)
17. Beads Desync recovery (2 lines)
18. Agent Won't Start recovery (3 lines)
19. Community Installation (6 lines)
20. Quick Ref: Installation Commands (3 lines)
21. Quick Ref: Role Management (9 lines)
22. Quick Ref: Inbox (3 lines)
23. Quick Ref: Town Management (4 lines)
24. Quick Ref: Beads (5 lines)

### MEDIUM tier (8 blocks)
**Treatment:** Warm parchment background (#EDE6D8), dark brown text (#2A2520), 3px colored top-border accent, muted label color (#8B7D6B).
**Rationale:** ASCII conceptual diagrams are VISUAL content -- they depict relationships, hierarchies, flows, and spectrums. They are meant to be studied, not executed. The warm parchment background signals "this is a map to examine" rather than "this is code to run." The top-border (instead of left-border) further distinguishes them from both LIGHT (left-border) and DARK (no accent border) tiers.

**Blocks converted to MEDIUM:**
1. Paradigm Shift diagram (Traditional vs Gas Town)
2. Gas Town Role Hierarchy (3-tier ASCII box diagram)
3. Communication Flow (vertical flow diagram)
4. Beads Data Plane (architecture diagram)
5. tmux Session Layout (window arrangement)
6. Decision Matrix ("Which Orchestrator?" flow)
7. Orchestrator Spectrum (horizontal comparison)
8. Role-Based Cost Per Hour (cost breakdown)

### DARK tier (4 blocks -- unchanged)
**Treatment:** Original dark background (#1A1A1A), cream text, 3px border. In Z4, amber left-border accent (from Fix 1).
**Rationale:** These are substantial executable content -- multi-line scripts and workflows that represent the command console experience. They deserve the full dark treatment that signals "this is your terminal."

**Blocks kept as DARK:**
1. Starting Core Roles (13 lines) -- Full startup sequence with 3 stages
2. Startup Script (40+ lines) -- Complete gastown-start.sh shell script
3. Typical Daily Workflow (23 lines) -- Full day workflow with comments
4. Recovery Command Reference (20 lines) -- Comprehensive recovery commands

---

## Table of Contents

**Added:** A `<nav>` element with "Document Map" title after the page subtitle in Z1.
- Two-column layout with zone indicators (Z1-Z5) in mono type
- 14 entries covering all major sections
- White background with subtle border, matching the page's card treatment
- Links use IDs added to all `<h2>` section headings
- Responsive: collapses to single column at 768px

**Rationale:** One auditor flagged page length without navigation. The TOC provides orientation without being heavy -- it uses the dispatch center's own language ("Document Map") and the zone indicators reinforce the spatial metaphor.

---

## CSS Changes Summary

**New tokens added to :root:**
- `--code-light-bg: #F5F0E8` -- warm sandy tone for LIGHT tier
- `--code-diagram-bg: #EDE6D8` -- deeper parchment for MEDIUM tier
- `--code-diagram-text: #2A2520` -- warm dark brown for diagram text

**New CSS classes:**
- `.code-light` -- LIGHT tier styling with zone-specific accent borders
- `.diagram-block` -- MEDIUM tier styling with zone-specific top borders
- `.diagram-label` -- Muted label for diagram blocks
- `.toc`, `.toc__title`, `.toc__list`, `.toc__zone` -- Table of contents

**Syntax highlighting adapted for light backgrounds:**
- `.code-light .cmt` -- earthy brown (#8B7D6B) for comments
- `.code-light .str` -- muted green (#6B7D4A) for strings
- `.code-light .kw` -- warm red (#B8462E) for keywords

---

## What Was Preserved

- **Interludes** -- All 3 interludes untouched (praised by all auditors)
- **Quote gallery in Z5** -- Untouched (called out as genuine second wind)
- **Zone labels** -- Untouched (working well after Fix 1)
- **Breathing zone** -- Untouched
- **Callout variants** -- Dense-context callouts from Fix 1 untouched
- **Ladder diagram** -- Already had special light treatment, untouched
- **Memory layers** -- Hot/warm/cold visual layers untouched
- **Signal flare** -- Core insight quote untouched
- **All zone backgrounds and transitions** -- Untouched

---

## Perceptual Impact

**Before Fix 2:** ~30 dark blocks creating monotonous dark/light alternation.
**After Fix 2:**
- 24 LIGHT blocks (warm, low-contrast, flowing with page)
- 8 MEDIUM blocks (parchment, studied, distinct from both extremes)
- 4 DARK blocks (reserved for substantial executable content)

The dark blocks now function as genuine weight anchors rather than repeated notes. When a dark block appears, it signals "this is substantial -- pay attention." The LIGHT blocks breathe with the page. The MEDIUM blocks create a third register for visual/conceptual content.

---

## Soul Constraint Compliance

- border-radius: 0 on all new elements -- VERIFIED
- box-shadow: none on all new elements -- VERIFIED
- No gradients -- VERIFIED
- No semi-transparent backgrounds -- VERIFIED (all backgrounds are opaque hex values)
- No cool grays -- VERIFIED (all new colors are warm earth tones)
- Typography trinity maintained -- VERIFIED (JetBrains Mono for all code tiers)
