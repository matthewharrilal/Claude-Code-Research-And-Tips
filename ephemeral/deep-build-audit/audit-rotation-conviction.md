# Audit: Rotation + Conviction Manager

**Auditor:** deep-build-e2e-audit agent
**Date:** 2026-02-28
**Plan reference:** `sorted-finding-honey.md` lines 228-271 (Carousel Rotation + Creative Tissue)
**Checklist items:** C.4 (`orchestrator/rotation.ts`), C.20 (`orchestrator/conviction-manager.ts`)

---

## 1. SHIFT_TABLE: Lookup Table (not formula)

**Verdict: IMPLEMENTED**

Plan specifies:
```
SHIFT_TABLE: Record<number, number[]> = {
  4: [0, 2, 3],
  5: [0, 2, 4],
  6: [0, 2, 4],
};
shift = SHIFT_TABLE[files.length][rotationIndex];
```

Implementation in `src/config/constants.ts:115-119`:
```typescript
export const SHIFT_TABLE: Record<number, number[]> = {
  4: [0, 2, 3],
  5: [0, 2, 4],
  6: [0, 2, 4],
};
```

Exact match. No formula -- pure lookup table. The plan explicitly warns against the formula `Math.floor(files.length * rotationIndex / 3)` which produces wrong values `[0,1,3]` for 5 files. The implementation correctly avoids this.

`rotation.ts:33` uses `SHIFT_TABLE[fileCount] ?? SHIFT_TABLE[5]` (fallback to 5-file shifts for unexpected counts). This is a reasonable defensive default not in the plan but harmless.

---

## 2. Shifts [0,2,4] for 5-file subsets

**Verdict: IMPLEMENTED**

`constants.ts:117`: `5: [0, 2, 4]` -- exact match.

---

## 3. Correct shifts for 4-file and 6-file subsets

**Verdict: IMPLEMENTED**

- `constants.ts:116`: `4: [0, 2, 3]` -- matches plan
- `constants.ts:118`: `6: [0, 2, 4]` -- matches plan

---

## 4. Rotation index maps to passes correctly (A=1-3, B=4-6, C=7-8)

**Verdict: IMPLEMENTED**

`types/pass.ts:100-110`:
```typescript
/**
 * Rotation assignment: which rotation index for each pass within subset.
 * Passes 1-3 = Rotation A (index 0)
 * Passes 4-6 = Rotation B (index 1)
 * Passes 7-8 = Rotation C (index 2)
 */
export function getRotationIndex(passWithinSubset: number): number {
  if (passWithinSubset <= 3) return 0;
  if (passWithinSubset <= 6) return 1;
  return 2;
}
```

Exact match with plan:
- Passes 1-3 -> Rotation A (index 0) -> shift 0 -> original order
- Passes 4-6 -> Rotation B (index 1) -> shift 2 -> mid files get primacy
- Passes 7-8 -> Rotation C (index 2) -> shift 4 -> last files get primacy

Pipeline.ts correctly calls `getRotationIndex(passWithin)` at line 253 and passes the result to `computeRotation()` at line 265. Also used in dry-run schedule display at line 716.

---

## 5. Conviction manager caps at 10 entries

**Verdict: IMPLEMENTED**

`constants.ts:35`: `export const MAX_CONVICTION_ENTRIES = 10;`

`conviction-manager.ts:44`: `if (layer.length > MAX_CONVICTION_ENTRIES)`

Exact match.

---

## 6. FIFO merge (drop oldest)

**Verdict: IMPLEMENTED**

Plan says: "FIFO merge when cap exceeded -- oldest entries dropped. Pure FIFO, deterministic. No relevance weighting. When count > 10: drop entries with lowest passNumber (oldest first)."

`conviction-manager.ts:43-49`:
```typescript
// FIFO: if over cap, drop oldest (lowest passNumber first, then earliest addedAt)
if (layer.length > MAX_CONVICTION_ENTRIES) {
  layer.sort((a, b) => {
    if (a.passNumber !== b.passNumber) return a.passNumber - b.passNumber;
    return a.addedAt.localeCompare(b.addedAt);
  });
  layer = layer.slice(layer.length - MAX_CONVICTION_ENTRIES);
}
```

Sort ascending by passNumber (then addedAt as tiebreaker), keep last N entries = drop oldest. Deterministic. No LLM involvement. Exact match.

---

## 7. Extracts 6 dimensions from markers (BUILT/TRYING/REJECTED/SURPRISED/WANTED/UNRESOLVED)

**Verdict: IMPLEMENTED**

`conviction-manager.ts:15-22`:
```typescript
const CONVICTION_DIMENSIONS = [
  'built',
  'trying',
  'rejected',
  'surprised',
  'wanted',
  'unresolved',
] as const;
```

All 6 dimensions present. Extraction uses regex per dimension (`conviction-manager.ts:86-103`):
```typescript
for (const dim of CONVICTION_DIMENSIONS) {
  const label = dim.toUpperCase();
  const pattern = new RegExp(
    `^${label}:\\s*(.+?)(?=^(?:BUILT|TRYING|REJECTED|SURPRISED|WANTED|UNRESOLVED):|$)`,
    'ms',
  );
```

The regex matches `LABEL: content` patterns and captures until the next label or end of string. Uses multiline (`m`) and dotall (`s`) flags. This correctly handles multi-line content within a dimension.

The `ConvictionEntry` type in `state.ts:104` enforces the dimension enum:
```typescript
dimension: 'built' | 'trying' | 'rejected' | 'surprised' | 'wanted' | 'unresolved';
```

Exact match with plan's 6 dimensions.

---

## 8. Marker format: `<!-- CONVICTION_ADDITION_START -->` ... `<!-- CONVICTION_ADDITION_END -->`

**Verdict: IMPLEMENTED**

`conviction-manager.ts:24-25`:
```typescript
const CONVICTION_START_MARKER = '<!-- CONVICTION_ADDITION_START -->';
const CONVICTION_END_MARKER = '<!-- CONVICTION_ADDITION_END -->';
```

Extraction at lines 71-81 uses `indexOf` to find markers, then slices between them. Correctly handles missing/malformed markers (returns empty array if not found or end <= start).

Exact match.

---

## Summary Table

| Check | Verdict |
|-------|---------|
| C.4: SHIFT_TABLE is lookup (not formula) | IMPLEMENTED |
| C.4: Shifts [0,2,4] for 5-file subsets | IMPLEMENTED |
| C.4: Correct shifts for 4-file and 6-file | IMPLEMENTED |
| C.4: Rotation index A=1-3, B=4-6, C=7-8 | IMPLEMENTED |
| C.20: Conviction cap at 10 entries | IMPLEMENTED |
| C.20: FIFO merge (drop oldest) | IMPLEMENTED |
| C.20: 6 dimensions extracted | IMPLEMENTED |
| C.20: Correct marker format | IMPLEMENTED |

**Overall: 8/8 IMPLEMENTED. Zero PARTIAL, MISSING, or WRONG.**

---

## Additional Observations

### Defensive behaviors (not in plan, but reasonable)

1. **Fallback SHIFT_TABLE:** `rotation.ts:33` falls back to 5-file shifts if `fileCount` not in table. Handles edge cases like 3-file or 7-file subsets gracefully, though these should never occur per corpus config.

2. **Rotation index clamping:** `rotation.ts:30` clamps to 0-2 range. Prevents out-of-bounds if somehow called with invalid index.

3. **Shift modulo:** `rotation.ts:40` applies `shift % fileCount`. Extra safety layer. The plan's fresh-eyes audit (MEMORY.md) flagged this as a "potential bug" (silent modulo might hide misconfig) but it's actually protective -- if a 4-file subset somehow got shift 4, it would wrap to 0 rather than throw.

4. **parseConvictionBlock:** `conviction-manager.ts:112-128` provides a second parsing path (returns `ConvictionAdditionRaw` instead of `ConvictionEntry[]`). Used by response-handler as intermediate format. Not in the plan but consistent with the architecture.

5. **Immutable state pattern:** `addConviction` returns a new `PipelineState` object (spread operator). Matches the plan's state management principles.

### No issues found

Both files are clean, focused, and match the plan specification exactly. The rotation module is a pure function with no I/O (as documented). The conviction manager is deterministic with no LLM involvement (as the plan requires). Code is well-documented with JSDoc comments that reference the plan's rationale (transformer attention bias, FIFO determinism).
