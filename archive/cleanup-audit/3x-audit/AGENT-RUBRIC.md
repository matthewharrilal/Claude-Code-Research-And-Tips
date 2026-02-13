# CONDENSED SCORING RUBRIC — Agent Instructions

## Default: DELETE. File must score 40+ to KEEP.

## QUICK TRIAGE (do first, eliminates ~70% of files)
1. File in POST-CD-PIPELINE/CLAUDE.md BUILT ON section? → KEEP (30pts pipeline)
2. File has SUPERSEDED BY marker + 0 forward refs? → DELETE
3. File is T1 synthesis OR design-system/soul/tokens? → KEEP (critical)
4. File has 18+ inbound refs AND is soul-dangerous (archive/tokens/, wrong values)? → DELETE IMMEDIATE
5. File has 0 inbound refs AND is NOT CLAUDE.md/package.json/.gitignore? → DELETE (isolated)
6. Everything else → DEEP SCORE below

## DEEP SCORE (8 dimensions + 4 validators)

### PRIMARY (85pts max)
**Provenance (0-35pts):** Count inbound refs from Tier A/B files
- 18+ refs w/ header = 35 (MEGA-HUB)
- 8-17 refs w/ header = 25 (HUB)
- 3-7 refs w/ header = 15 (REFERENCED)
- 1-2 refs w/ header = 10 (WEAK)
- 0 refs w/ header = 5 (THREADED ISOLATED)
- No header = 0
- CLAUDE.md override = 35 (auto-loaded)

**Pipeline (0-30pts):** Is file consumed by POST-CD-PIPELINE?
- Forward-consumed (in BUILT ON) = 30
- Synthesis gateway (POST-CD reads synthesis not this) = 30
- Bibliographic citation only = 5
- Dead (no mentions) = 0

**Soul (−20 to 20pts):**
- Source of truth (T1 synthesis, token locks) = 20
- Enforcement (CLAUDE.md soul rules, skills) = 15
- Neutral = 0
- DANGEROUS (archive/tokens/, wrong values) = −20

### SECONDARY (40pts max)
**Supersession (0-15pts):** Is content absorbed by synthesis?
- Not superseded (0-1 conditions met) = 15
- Partially superseded (2-3 conditions) = 7
- Fully superseded (4-5 conditions) = 0

**Reference Density (0-10pts):** Weighted inbound refs
- 15+ weighted = 10, 8-14 = 7, 3-7 = 5, 1-2 = 2, 0 = 0
- Weight: T1 ref = 1.0×, Hub = 0.7×, Referenced = 0.4×, SUPERSEDED = 0.1×

**Reproducibility (0-10pts):**
- Process + Outcome irreplaceable = 10 (research packages, explorations)
- Process OR Outcome irreplaceable = 5 (audit reports, validated HTML)
- Redundant (alternatives exist) = 0

**Temporal (0-5pts):**
- Active phase / pre-synthesis recent = 5
- Post-synthesis / phase complete = 0

### STRUCTURAL MODIFIER (multiply final)
- Depth 0-2 = 1.0×, 3-4 = 0.9×, 5-7 = 0.7×, 8+ = 0.5×

### VALIDATORS (veto gates — can force KEEP, cannot add points)
- **Regression**: >100 broken refs if deleted → VETO (force KEEP)
- **Cognitive Load**: CLAUDE.md, README, T1 synthesis → VETO (force KEEP)
- **Compression**: If supersession=0 but compression ratio <5:1 or >30:1 → upgrade to partial (7pts)
- **Emergence**: File in collection with emergent properties → VETO individual deletion

## FORMULA
```
raw = provenance + pipeline + soul + supersession + ref_density + reproducibility + temporal
modified = raw × structural_multiplier
IF validator_veto → KEEP regardless
ELSE: 80+ = CRITICAL, 60-79 = HUB, 40-59 = REFERENCED, 20-39 = ARCHIVE, 1-19 = DELETE, ≤0 = DANGEROUS
```

## GREY ZONE (35-50pts): Flag as HUMAN_REVIEW with reasoning

## OUTPUT FORMAT (per file)
```
| File | Score | Verdict | Provenance | Pipeline | Soul | Supersession | RefDensity | Repro | Temporal | Structural | Validators | Notes |
```
