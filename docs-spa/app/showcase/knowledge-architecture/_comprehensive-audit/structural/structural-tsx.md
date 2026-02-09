# Structural Audit: 11 React .tsx Content Components
## structural-tsx — Captain-Structural v2 Worker Output
**Date:** 2026-02-09 | **Method:** Source code review (all files at docs-spa/components/content/)

---

## Summary

| Component | Lines | Soul Compliant | Props Typed | 'use client' | Accessibility |
|-----------|-------|---------------|-------------|---------------|---------------|
| CodeBlock.tsx | 117 | YES | YES | YES | Partial |
| CopyButtonHandler.tsx | 139 | N/A (no visual) | N/A | YES | N/A |
| CoreAbstraction.tsx | 136 | YES | YES | NO (server) | YES |
| DesignDecision.tsx | 148 | YES | YES | NO (server) | Partial |
| EssenceBox.tsx | 92 | YES | YES | NO (server) | Partial |
| FileStructure.tsx | 259 | YES | YES | YES | Partial |
| GotchaBox.tsx | 129 | YES | YES | NO (server) | Partial |
| HighlightableSection.tsx | 74 | YES | YES | YES | YES |
| PathOfTask.tsx | 218 | YES | YES | NO (server) | YES |
| WhatsHard.tsx | 137 | YES | YES | NO (server) | Partial |
| WhenToUse.tsx | 168 | YES | YES | NO (server) | Partial |

---

## 1. Soul Compliance in Styles: PASS

Every component that renders visual elements explicitly sets `borderRadius: 0` on containers. No component uses `boxShadow` (except DesignDecision which explicitly sets `boxShadow: 'none'`). No `filter` properties used. No `border-radius` > 0 in any inline style.

**Verified per component:**
- CodeBlock: `borderRadius: 0` on wrapper, pre, and button (3 locations)
- CoreAbstraction: `borderRadius: 0` on blockquote and code wrapper
- DesignDecision: `borderRadius: 0` and `boxShadow: 'none'` on container, `borderRadius: 0` on alternative tags
- EssenceBox: `borderRadius: 0` on container
- FileStructure: `borderRadius: 0` on all containers and tree nodes (6 locations)
- GotchaBox: `borderRadius: 0` on both GotchaBox and GotchaBoxLegacy
- HighlightableSection: `borderRadius: 0` on section
- PathOfTask: `borderRadius: 0` on step number, step container, code block, decision branches (6 locations)
- WhatsHard: `borderRadius: 0` on container and mitigation box
- WhenToUse: `borderRadius: 0` on container

---

## 2. Type Safety: PASS

All components have proper TypeScript interfaces:
- `CodeBlockProps`, `CoreAbstractionProps`, `DesignDecisionProps`, `EssenceBoxProps`
- `FileNode`, `FileStructureProps`, `GotchaBoxProps`, `GotchaBoxLegacyProps`
- `HighlightableSectionProps`, `TaskStep`, `DecisionBranch`, `PathOfTaskProps`
- `WhatsHardProps`, `WhenToUseProps`

No `any` types in component props. Only `any` usage: CopyButtonHandler.tsx lines 93-94 uses `(window as any)` for global function exposure — acceptable for interop with HTML onclick handlers.

---

## 3. Font References: PASS

| Component | Font Used | Correct? |
|-----------|-----------|----------|
| CodeBlock | 'JetBrains Mono', 'SF Mono', monospace | YES |
| CoreAbstraction | 'Instrument Serif', Georgia, serif (philosophy) | YES |
| EssenceBox | 'Instrument Serif', Georgia, serif (italic) | YES |
| FileStructure | 'JetBrains Mono', 'SF Mono', monospace | YES |
| PathOfTask | 'JetBrains Mono', 'SF Mono', monospace (code) | YES |
| WhenToUse | 'JetBrains Mono', 'SF Mono', monospace (alternatives) | YES |

All font references use the locked font trio. No off-font references.

---

## 4. Color References: PASS

All hardcoded colors found in components match the locked palette:
- `#1A1A1A` (--color-text): Used in headings, code block bg
- `#F0EBE3` (--color-border-subtle): Used in code text, alternative tags
- `#FEF9F5` (--color-background): Used in callout bgs
- `#666666` (--color-text-secondary): Used in secondary text, descriptions
- `#E0D5C5` (--color-border): Used in borders, connecting lines
- `#E83025` (--color-primary): Used in accents (GotchaBox, PathOfTask, DesignDecision)
- `#D97706` (--accent-amber): Used in EssenceBox, CoreAbstraction
- `#4A90D9` (--accent-blue): Used in FileStructure folder icons
- `#6b9b7a` (sage green): Used in PathOfTask decision yes, WhenToUse

**One non-palette color:**
- STR-TSX-001: Low, CodeBlock.tsx:83, `backgroundColor: '#27272A'` — filename header bar. This is a dark zinc gray not in the locked palette. Convention spec code block header should use `rgba(255, 255, 255, 0.05)` on dark background or simply #1A1A1A.

---

## 5. Border References: PASS (no 2px)

All borders in TSX components:
- `border-l-4` (Tailwind 4px left): EssenceBox, GotchaBox, GotchaBoxLegacy, CoreAbstraction, WhatsHard, DesignDecision
- `border: '1px solid #E0D5C5'`: DesignDecision, FileStructure, PathOfTask, WhatsHard, WhenToUse
- `borderBottom: '1px solid #E0D5C5'`: Various separator lines
- `borderTop: '1px solid #F0EBE3'`: DesignDecision alternatives

No 2px borders in any component. All borders are Cat 1 (4px accent) or Cat 2/3 (1px separator/micro).

---

## 6. EssenceBox Font: PASS

EssenceBox.tsx:82-83 correctly uses:
```
fontFamily: "'Instrument Serif', Georgia, serif",
fontStyle: 'italic'
```
This matches Soul Piece #2 (Typography-First Identity) requirement.

---

## 7. Callout Family DNA

GotchaBox and EssenceBox share identical DNA structure:
- 4px left border (`className="border-l-4"`)
- 2-zone: uppercase label + body content
- `p-6 mb-6` or `p-6 mb-8` padding
- `borderRadius: 0` enforced
- Label: `text-xs font-semibold uppercase tracking-wider`

**Consistent across family.** GotchaBox accent: #E83025 red. EssenceBox accent: #D97706 amber. DesignDecision: 4px left #E83025 with additional 1px border surround.

---

## 8. Pattern Consistency

Components follow consistent patterns:
- All callout-type components (EssenceBox, GotchaBox, WhatsHard) use border-l-4 + label + body
- All code-rendering components (CodeBlock, CoreAbstraction, PathOfTask, FileStructure) use #1A1A1A bg + JetBrains Mono
- All use inline styles for soul-critical properties (borderRadius, colors) — not Tailwind utilities

---

## 9. Accessibility Findings

- STR-TSX-002: Medium, CodeBlock.tsx:103-113, Copy button lacks `aria-label`. Screen readers see no description. Expected: `aria-label="Copy code"` or `aria-label={copied ? 'Copied' : 'Copy code'}`.
- STR-TSX-003: Low, EssenceBox.tsx, No `role="complementary"` or `aria-label` on the aside-like container. EssenceBox functions as supplementary content.
- STR-TSX-004: Low, GotchaBox.tsx, No `role="alert"` or `aria-live` attribute. Gotcha warnings are critical content that should be announced to screen readers.
- STR-TSX-005: Low, FileStructure.tsx:88-91, Tree items use `onClick` but no `role="button"` or `tabIndex={0}` for keyboard navigation. Keyboard users cannot interact with the tree.
- STR-TSX-006: Note, PathOfTask.tsx:96, Uses `<ol>` with list items — good semantic structure for ordered steps.

---

## 10. Error Handling

- STR-TSX-007: Low, CopyButtonHandler.tsx:53-57, `navigator.clipboard.writeText` catch only logs to console. No user-facing feedback on copy failure. Graceful degradation for HTTP (non-HTTPS) environments not handled.
- CodeBlock.tsx:67-71: Same issue — `navigator.clipboard.writeText` without fallback.

---

## Per-File Finding Summary

| ID | Severity | File | Line | Issue |
|----|----------|------|------|-------|
| STR-TSX-001 | Low | CodeBlock.tsx | 83 | Off-palette color #27272A for filename header |
| STR-TSX-002 | Medium | CodeBlock.tsx | 103-113 | Copy button missing aria-label |
| STR-TSX-003 | Low | EssenceBox.tsx | 63-90 | No semantic role for aside-like container |
| STR-TSX-004 | Low | GotchaBox.tsx | 67-91 | No role="alert" for warning content |
| STR-TSX-005 | Low | FileStructure.tsx | 88-91 | Tree items not keyboard-accessible |
| STR-TSX-006 | Note | PathOfTask.tsx | 96 | Good: uses semantic `<ol>` for steps |
| STR-TSX-007 | Low | CopyButtonHandler.tsx | 53-57 | Clipboard API failure not surfaced to user |

**Total: 7 findings (0 Critical, 0 High, 1 Medium, 5 Low, 1 Note)**
