# Structural Audit: 11 React .tsx Content Components

**Worker:** structural-tsx
**Captain:** Captain-Structural
**Method:** Static code review
**Date:** 2026-02-09

---

## Component Inventory

| # | Component | File | Lines | Client? | Props Typed? |
|---|-----------|------|-------|---------|-------------|
| 1 | CodeBlock | CodeBlock.tsx | 117 | Yes | Yes (interface) |
| 2 | CopyButtonHandler | CopyButtonHandler.tsx | 139 | Yes | N/A (no props) |
| 3 | CoreAbstraction | CoreAbstraction.tsx | 136 | No | Yes (interface) |
| 4 | DesignDecision | DesignDecision.tsx | 148 | No | Yes (interface) |
| 5 | EssenceBox | EssenceBox.tsx | 92 | No | Yes (interface) |
| 6 | FileStructure | FileStructure.tsx | 259 | Yes | Yes (interface) |
| 7 | GotchaBox | GotchaBox.tsx | 129 | No | Yes (interface) |
| 8 | HighlightableSection | HighlightableSection.tsx | 74 | Yes | Yes (interface) |
| 9 | PathOfTask | PathOfTask.tsx | 218 | No | Yes (interface) |
| 10 | WhatsHard | WhatsHard.tsx | 137 | No | Yes (interface) |
| 11 | WhenToUse | WhenToUse.tsx | 168 | No | Yes (interface) |

---

## Findings

### Soul Compliance in Code

**STR-TSX-001** | PASS | All 11 files | borderRadius | All inline styles specify `borderRadius: 0`
- Every component that sets inline styles explicitly sets `borderRadius: 0`. Verified in: CodeBlock (lines 76,84,95,109), CoreAbstraction (86,117), DesignDecision (76), EssenceBox (70), FileStructure (86,156,186,229), GotchaBox (74,112), HighlightableSection (65), PathOfTask (105,116,142,168,188), WhatsHard (68,120), WhenToUse (77).

**STR-TSX-002** | PASS | DesignDecision.tsx | boxShadow | Line 77: `boxShadow: 'none'` explicitly set.

**STR-TSX-003** | PASS | EssenceBox.tsx | fontFamily | Line 82: `fontFamily: "'Instrument Serif', Georgia, serif"` + `fontStyle: 'italic'` — correctly uses Instrument Serif italic per Soul Piece #2.

**STR-TSX-004** | PASS | CoreAbstraction.tsx | fontFamily | Line 92: Philosophy zone correctly uses Instrument Serif italic.

### Type Safety

**STR-TSX-005** | Medium | CopyButtonHandler.tsx | Lines 93-94 | Type Safety | `(window as any).copyCode` and `(window as any).copyCodeBlock`
- Uses `any` type cast for window globals. This is a pragmatic choice for HTML onclick handler interop but bypasses TypeScript safety. Consider declaring a proper WindowWithCopy interface.

**STR-TSX-006** | Low | GotchaBox.tsx | Line 124 | Redundant Logic | `typeof fix === 'string' ? fix : fix`
- The GotchaBoxLegacy ternary for `fix` renders the same value in both branches. The `string` branch should wrap in `<span>` or `<p>`, and the ReactNode branch should render directly. Current code works but the ternary is pointless.

### Accessibility

**STR-TSX-007** | Medium | CodeBlock.tsx | Line 103 | Accessibility | Copy button has no aria-label
- The copy button uses an icon-only display (Check/Copy icons) with no text label or aria-label attribute. Screen readers would announce it as an unlabeled button.

**STR-TSX-008** | Low | FileStructure.tsx | Line 88 | Accessibility | onClick on div without keyboard support
- FileTreeNode uses onClick on a div element without onKeyDown handler or tabIndex/role="button". This makes the tree nodes inaccessible to keyboard users.

**STR-TSX-009** | Low | PathOfTask.tsx | N/A | Accessibility | Step numbers lack aria-label
- Step number squares contain only the number without semantic context. Consider `aria-label="Step {n}: {title}"`.

### Pattern Consistency (Callout Family DNA)

**STR-TSX-010** | PASS | GotchaBox + EssenceBox | Callout Family DNA
- Both follow the 2-zone pattern: label (uppercase, accent color) + body (content).
- Both use 4px left accent border.
- Both use `borderRadius: 0`.
- GotchaBox accent: #E83025 (red), EssenceBox accent: #D97706 (amber) — correctly differentiated.

**STR-TSX-011** | Note | CoreAbstraction.tsx | Callout Family DNA
- CoreAbstraction combines EssenceBox DNA with CodeBlock DNA. The philosophy zone uses amber (#D97706) left border, matching EssenceBox accent. Pattern is consistent.

**STR-TSX-012** | Note | WhatsHard.tsx | Multi-zone pattern
- WhatsHard uses a 3-zone structure (tension + symptoms + mitigation) instead of the 2-zone callout family DNA. This is intentional — WhatsHard is a more complex callout with distinct information zones.

### Color & Font References

**STR-TSX-013** | PASS | All files | Color References
- All color values are from the locked palette:
  - #1A1A1A (text), #666666 (secondary), #E83025 (primary/red), #D97706 (amber)
  - #FEF9F5 (background), #F0EBE3 (subtle), #E0D5C5 (border), #FFFFFF (white)
  - #6b9b7a (sage green in PathOfTask, WhenToUse), #4A90D9 (blue in FileStructure)
- One off-palette color: CodeBlock.tsx line 82 uses `#27272A` for filename header background. This is close to but not exactly #1A1A1A.

**STR-TSX-014** | Low | CodeBlock.tsx | Line 82 | Color | Expected: #1A1A1A | Actual: #27272A
- Filename header uses `#27272A` instead of the locked `#1A1A1A` for dark backgrounds. The visual difference is negligible (both are near-black) but technically off-palette.

**STR-TSX-015** | PASS | All files | Font References
- Font stacks used:
  - `'Instrument Serif', Georgia, serif` — display/essence (correct)
  - `'JetBrains Mono', 'SF Mono', monospace` — code (correct)
  - Body text relies on className or inherited styles (correct)

### Border References

**STR-TSX-016** | PASS | All files | Border Width
- No 2px border widths found in any component.
- 4px left borders on callouts: EssenceBox, GotchaBox, CoreAbstraction, DesignDecision, WhatsHard (className `border-l-4`).
- 1px borders: DesignDecision (container border), FileStructure, PathOfTask, WhenToUse — all correctly Cat 2/3.

### Error Handling

**STR-TSX-017** | Low | CopyButtonHandler.tsx | Lines 55-57, 68-69 | Error Handling
- clipboard.writeText uses .catch() for error logging, but the fallback path only logs to console — no user-visible feedback. If clipboard access fails (e.g., on non-HTTPS), the button appears to do nothing.

### Memo Usage

**STR-TSX-018** | Note | All files | React.memo
- No components use React.memo. For the current usage (MDX content rendering), this is acceptable — these components render once per page load and don't receive frequently changing props.

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total findings | 18 |
| PASS | 8 |
| Medium severity | 2 (STR-TSX-005, STR-TSX-007) |
| Low severity | 5 (STR-TSX-006, STR-TSX-008, STR-TSX-009, STR-TSX-014, STR-TSX-017) |
| Note | 3 (STR-TSX-011, STR-TSX-012, STR-TSX-018) |
| Soul violations in code | 0 |
| Off-palette colors | 1 (#27272A in CodeBlock) |
| 2px borders in code | 0 |
