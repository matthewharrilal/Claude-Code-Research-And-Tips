# 03 — Complete Pipeline Execution Manifest

## Overview

**Total passes:** 56 corpus (Phase A) + 12-24 PA hardening (Phase B) = 68-80 passes
**Total corpus files:** 95 files, 85,525 lines
**Subsets:** 7
**Passes per subset:** 8 (3 rotations: A=3, B=3, C=2)
**Agent types:** Builder (writes/modifies output), Verifier (audits, produces findings only)

---

## File Path Registry

All paths verified against filesystem on 2026-02-28. Shown as both relative (to project root) and absolute.

**Project root:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`

### Research Files (R-series)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| R1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R1-DOCUMENTATION-PATTERNS.md` | 584 |
| R2 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R2-CREATIVE-LAYOUTS.md` | 810 |
| R3 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R3-DENSITY-DIMENSIONS.md` | 553 |
| R4 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R4-AXIS-INNOVATIONS.md` | 990 |
| R5 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R5-COMBINATION-THEORY.md` | 784 |
| RS | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/RESEARCH-SYNTHESIS.md` | 383 |

### Density Explorations (DD-series)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| DD1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-001-breathing.html` | 770 |
| DD2 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-002-gradient.html` | 962 |
| DD3 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-003-islands.html` | 881 |
| DD4 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-004-layers.html` | 1,275 |
| DD5 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-005-rivers.html` | 1,251 |
| DD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-006-fractal.html` | 1,120 |

### Organizational Explorations (OD-series)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| OD1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-001-conversational.html` | 2,293 |
| OD2 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-002-narrative.html` | 1,659 |
| OD3 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-003-task-based.html` | 1,163 |
| OD4 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-004-confidence.html` | 1,978 |
| OD5 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-005-spatial.html` | 2,284 |
| OD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-006-creative.html` | 2,635 |

### Axis Explorations (AD-series)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| AD1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-001-z-pattern.html` | 1,737 |
| AD2 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-002-f-pattern.html` | 1,682 |
| AD3 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-003-bento-grid.html` | 1,896 |
| AD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/axis/AD-006-compound.html` | 2,276 |

### Combination Explorations (CD-series)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| CD1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/combination/CD-001-reasoning-inside-code.html` | 1,654 |
| CD5 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/combination/CD-005-multi-axis-transition.html` | 2,003 |
| CD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/combination/CD-006-pilot-migration.html` | 2,085 |

### Case Studies (Primary — in subset rotations)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| CS-DD3 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-003-islands.md` | 405 |
| CS-DD4 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-004-layers.md` | 428 |
| CS-DD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-006-fractal.md` | 377 |
| CS-OD1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/OD-001-conversational.md` | 297 |
| CS-OD4 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/OD-004-confidence.md` | 309 |
| CS-OD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/OD-006-creative.md` | 333 |
| CS-CD1 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md` | 415 |
| CS-CD5 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md` | 386 |
| CS-CD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/CD-006-pilot-migration.md` | 387 |

### Case Studies (Visual — supplementary, loaded as bonus context)
| ID | Absolute Path | Lines |
|----|---------------|-------|
| CSV-DD3 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/dd-003-islands-visual.md` | 462 |
| CSV-DD4 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/dd-004-layers-visual.md` | 144 |
| CSV-DD6 | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/dd-006-fractal-visual.md` | 165 |

### Grammar + Guidelines
| ID | Absolute Path | Lines |
|----|---------------|-------|
| CSL | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` | 1,747 |
| MC | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-combinations.md` | 447 |
| CR | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/compositional-rules.md` | 527 |
| SR | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/guidelines/semantic-rules.md` | 529 |

### Infrastructure Files (NOT rotated — loaded as constant context)
| ID | Absolute Path | Purpose |
|----|---------------|---------|
| MCAT | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md` | Master mechanism reference |
| COMP | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/components/components.css` | Component library |
| TOK | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/vocabulary/tokens.css` | Design tokens |
| PROH | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/identity/prohibitions.md` | Identity constraints |

---

## Subset Definitions with Verified Line Counts

### Subset 1: DENSITY CORE (3,336 lines, 5 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | R3 | 553 | Research anchor |
| 2 | DD3 | 881 | Primary exemplar |
| 3 | DD6 | 1,120 | Secondary exemplar |
| 4 | CS-DD3 | 405 | Case study |
| 5 | CS-DD6 | 377 | Case study |

### Subset 2: ORGANIZATION CORE (6,451 lines, 6 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | R1 | 584 | Research anchor |
| 2 | OD1 | 2,293 | Primary exemplar |
| 3 | OD6 | 2,635 | Secondary exemplar |
| 4 | CS-OD1 | 297 | Case study |
| 5 | CS-OD4 | 309 | Case study (cross-ref) |
| 6 | CS-OD6 | 333 | Case study |

### Subset 3: AXIS+COMBINATION CORE (6,522 lines, 5 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | R4 | 990 | Research anchor (axis) |
| 2 | R5 | 784 | Research anchor (combination) |
| 3 | AD6 | 2,276 | Primary exemplar |
| 4 | CD6 | 2,085 | Secondary exemplar |
| 5 | CS-CD6 | 387 | Case study |

### Subset 4: DENSITY+ORG EXTENDED (4,686 lines, 5 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | DD1 | 770 | Extended density |
| 2 | DD2 | 962 | Extended density |
| 3 | DD4 | 1,275 | Extended density |
| 4 | DD5 | 1,251 | Extended density |
| 5 | CS-DD4 | 428 | Case study |

### Subset 5: ORG+AXIS EXTENDED (6,537 lines, 4 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | OD2 | 1,659 | Extended org |
| 2 | OD3 | 1,163 | Extended org |
| 3 | OD4 | 1,978 | Extended org |
| 4 | AD1 | 1,737 | Extended axis |

### Subset 6: REMAINING AXIS+CD (8,036 lines, 6 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | AD2 | 1,682 | Extended axis |
| 2 | AD3 | 1,896 | Extended axis |
| 3 | CD1 | 1,654 | Extended combination |
| 4 | CD5 | 2,003 | Extended combination |
| 5 | CS-CD1 | 415 | Case study |
| 6 | CS-CD5 | 386 | Case study |

### Subset 7: SYNTHESIS+CONNECTIVE (6,727 lines, 7 files)
| Position | ID | Lines | Role |
|----------|----|-------|------|
| 1 | RS | 383 | Synthesis research |
| 2 | R2 | 810 | Creative layouts research |
| 3 | CSL | 1,747 | Strategy library |
| 4 | MC | 447 | Mechanism combinations |
| 5 | CR | 527 | Compositional rules |
| 6 | SR | 529 | Semantic rules |
| 7 | OD5 | 2,284 | Exemplar (spatial) |

**Verified total: 43,066 lines across 38 unique files** (35 primary + 3 visual case studies).

**Filesystem verification date:** 2026-02-28. All paths confirmed via `wc -l` against actual files.

Note: The 85,525-line total from the task description includes infrastructure files (mechanism-catalog.md, components.css, tokens.css, prohibitions.md, SKILL files) which are loaded as CONSTANT CONTEXT for every pass but do not rotate. The 38 files above represent the PRIMARY corpus that rotates through the 56 passes. Visual case studies (CSV-DD3, CSV-DD4, CSV-DD6) are loaded as supplementary context when their parent exploration is in the rotation, adding 771 lines of perceptual analysis.

---

## Rotation Pattern Specification

Each subset undergoes 8 passes across 3 rotations. The rotation changes which files appear FIRST in the context window (primacy position = highest attention weight).

### File Ordering per Rotation

For a subset with files at positions [1, 2, 3, 4, 5]:

| Rotation | Pass | Order | Agent | Purpose |
|----------|------|-------|-------|---------|
| A | 1 | [1, 2, 3, 4, 5] | Builder | Initial integration from original order |
| A | 2 | [1, 2, 3, 4, 5] | Verifier | Validate initial integration |
| A | 3 | [1, 2, 3, 4, 5] | Builder | Address verifier findings |
| B | 4 | [3, 4, 5, 1, 2] | Builder | Middle files gain primacy |
| B | 5 | [3, 4, 5, 1, 2] | Verifier | Validate rotation B work |
| B | 6 | [3, 4, 5, 1, 2] | Builder | Address verifier findings |
| C | 7 | [4, 5, 1, 2, 3] | Builder | Last files gain primacy |
| C | 8 | [4, 5, 1, 2, 3] | Verifier | Final validation |

**Rationale:** LLMs exhibit attention decay — content at the start of context receives disproportionate processing. By rotating which files appear first, every file gets at least one pass in the primacy position, preventing systematic under-integration of later files.

---

## Infrastructure Context (Loaded Every Pass)

These files are loaded as READ-ONLY context for every builder and verifier agent. They do NOT rotate — they provide the stable reference frame.

| File | Path | Lines | Purpose |
|------|------|-------|---------|
| Mechanism Catalog | `compositional-core/grammar/mechanism-catalog.md` | ~1,878 | Master mechanism reference |
| Tokens | `compositional-core/vocabulary/tokens.css` | varies | Design token definitions |
| Components | `compositional-core/components/components.css` | varies | Component library |
| Prohibitions | `compositional-core/identity/prohibitions.md` | varies | Identity constraints |
| Build Skill | `~/.claude/skills/build-page/SKILL.md` | varies | Pipeline protocol |
| TC Skill | `~/.claude/skills/tension-composition/SKILL.md` | ~1,878 | Tension-composition |
| PA Skill | `~/.claude/skills/perceptual-auditing/SKILL.md` | ~774 | Perceptual auditing |

**Total infrastructure context:** ~5,000-6,000 lines (loaded once per agent, not per pass)

---

## Phase A: Complete Pass-by-Pass Manifest (56 Passes)

### Output Artifacts

Each subset produces ONE cumulative output file that grows across passes:
- `corpus-integration-S{N}.md` — the integrated knowledge for subset N

Each verifier pass produces a findings file:
- `verification-S{N}-P{pass}.md` — issues found in that pass

---

### SUBSET 1: DENSITY CORE

**Files:** R3(553), DD3(881), DD6(1,120), CS-DD3(405), CS-DD6(377) = 3,336 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 1 | A-S1 | A | Builder | R3 -> DD3 -> DD6 -> CS-DD3 -> CS-DD6 | Initial `corpus-integration-S1.md`: density patterns, island/fractal technique extraction, mechanism mappings |
| 2 | A-S1 | A | Verifier | R3 -> DD3 -> DD6 -> CS-DD3 -> CS-DD6 + `corpus-integration-S1.md` | `verification-S1-P2.md`: coverage gaps, missed patterns, factual errors |
| 3 | A-S1 | A | Builder | R3 -> DD3 -> DD6 -> CS-DD3 -> CS-DD6 + `verification-S1-P2.md` | Updated `corpus-integration-S1.md`: gaps addressed |
| 4 | A-S1 | B | Builder | DD6 -> CS-DD3 -> CS-DD6 -> R3 -> DD3 | Updated `corpus-integration-S1.md`: fractal/case-study patterns now primary |
| 5 | A-S1 | B | Verifier | DD6 -> CS-DD3 -> CS-DD6 -> R3 -> DD3 + `corpus-integration-S1.md` | `verification-S1-P5.md`: rotation B coverage check |
| 6 | A-S1 | B | Builder | DD6 -> CS-DD3 -> CS-DD6 -> R3 -> DD3 + `verification-S1-P5.md` | Updated `corpus-integration-S1.md`: rotation B gaps addressed |
| 7 | A-S1 | C | Builder | CS-DD3 -> CS-DD6 -> R3 -> DD3 -> DD6 | Updated `corpus-integration-S1.md`: case studies now primary |
| 8 | A-S1 | C | Verifier | CS-DD3 -> CS-DD6 -> R3 -> DD3 -> DD6 + `corpus-integration-S1.md` | `verification-S1-P8.md`: FINAL subset 1 validation |

**Validation gate after pass 8:** Verifier P8 report must show zero CRITICAL findings. If CRITICAL findings exist, one remediation pass (Builder) is injected before proceeding.

---

### SUBSET 2: ORGANIZATION CORE

**Files:** R1(584), OD1(2,293), OD6(2,635), CS-OD1(297), CS-OD4(309), CS-OD6(333) = 6,451 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 9 | A-S2 | A | Builder | R1 -> OD1 -> OD6 -> CS-OD1 -> CS-OD4 -> CS-OD6 + `corpus-integration-S1.md` | Initial `corpus-integration-S2.md`: org patterns, conversational/creative technique extraction |
| 10 | A-S2 | A | Verifier | R1 -> OD1 -> OD6 -> CS-OD1 -> CS-OD4 -> CS-OD6 + `corpus-integration-S2.md` | `verification-S2-P10.md` |
| 11 | A-S2 | A | Builder | R1 -> OD1 -> OD6 -> CS-OD1 -> CS-OD4 -> CS-OD6 + `verification-S2-P10.md` | Updated `corpus-integration-S2.md` |
| 12 | A-S2 | B | Builder | OD6 -> CS-OD1 -> CS-OD4 -> CS-OD6 -> R1 -> OD1 | Updated `corpus-integration-S2.md`: creative/case-study primacy |
| 13 | A-S2 | B | Verifier | OD6 -> CS-OD1 -> CS-OD4 -> CS-OD6 -> R1 -> OD1 + `corpus-integration-S2.md` | `verification-S2-P13.md` |
| 14 | A-S2 | B | Builder | OD6 -> CS-OD1 -> CS-OD4 -> CS-OD6 -> R1 -> OD1 + `verification-S2-P13.md` | Updated `corpus-integration-S2.md` |
| 15 | A-S2 | C | Builder | CS-OD6 -> CS-OD4 -> CS-OD1 -> OD6 -> OD1 -> R1 | Updated `corpus-integration-S2.md`: case studies primary |
| 16 | A-S2 | C | Verifier | CS-OD6 -> CS-OD4 -> CS-OD1 -> OD6 -> OD1 -> R1 + `corpus-integration-S2.md` | `verification-S2-P16.md`: FINAL subset 2 validation |

**Cross-reference input:** Subset 2 builder receives `corpus-integration-S1.md` as read-only context starting at pass 9 to enable cross-subset pattern linking.

---

### SUBSET 3: AXIS+COMBINATION CORE

**Files:** R4(990), R5(784), AD6(2,276), CD6(2,085), CS-CD6(387) = 6,522 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 17 | A-S3 | A | Builder | R4 -> R5 -> AD6 -> CD6 -> CS-CD6 + S1+S2 integrations | Initial `corpus-integration-S3.md`: axis innovation + combination theory extraction |
| 18 | A-S3 | A | Verifier | R4 -> R5 -> AD6 -> CD6 -> CS-CD6 + `corpus-integration-S3.md` | `verification-S3-P18.md` |
| 19 | A-S3 | A | Builder | R4 -> R5 -> AD6 -> CD6 -> CS-CD6 + `verification-S3-P18.md` | Updated `corpus-integration-S3.md` |
| 20 | A-S3 | B | Builder | AD6 -> CD6 -> CS-CD6 -> R4 -> R5 | Updated `corpus-integration-S3.md`: exemplars gain primacy |
| 21 | A-S3 | B | Verifier | AD6 -> CD6 -> CS-CD6 -> R4 -> R5 + `corpus-integration-S3.md` | `verification-S3-P21.md` |
| 22 | A-S3 | B | Builder | AD6 -> CD6 -> CS-CD6 -> R4 -> R5 + `verification-S3-P21.md` | Updated `corpus-integration-S3.md` |
| 23 | A-S3 | C | Builder | CD6 -> CS-CD6 -> R4 -> R5 -> AD6 | Updated `corpus-integration-S3.md`: combination + case study primary |
| 24 | A-S3 | C | Verifier | CD6 -> CS-CD6 -> R4 -> R5 -> AD6 + `corpus-integration-S3.md` | `verification-S3-P24.md`: FINAL subset 3 validation |

---

### SUBSET 4: DENSITY+ORG EXTENDED

**Files:** DD1(770), DD2(962), DD4(1,275), DD5(1,251), CS-DD4(428) = 4,686 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 25 | A-S4 | A | Builder | DD1 -> DD2 -> DD4 -> DD5 -> CS-DD4 + S1-S3 integrations | Initial `corpus-integration-S4.md`: breathing/gradient/layers/rivers patterns |
| 26 | A-S4 | A | Verifier | DD1 -> DD2 -> DD4 -> DD5 -> CS-DD4 + `corpus-integration-S4.md` | `verification-S4-P26.md` |
| 27 | A-S4 | A | Builder | DD1 -> DD2 -> DD4 -> DD5 -> CS-DD4 + `verification-S4-P26.md` | Updated `corpus-integration-S4.md` |
| 28 | A-S4 | B | Builder | DD4 -> DD5 -> CS-DD4 -> DD1 -> DD2 | Updated `corpus-integration-S4.md`: layers/rivers primacy |
| 29 | A-S4 | B | Verifier | DD4 -> DD5 -> CS-DD4 -> DD1 -> DD2 + `corpus-integration-S4.md` | `verification-S4-P29.md` |
| 30 | A-S4 | B | Builder | DD4 -> DD5 -> CS-DD4 -> DD1 -> DD2 + `verification-S4-P29.md` | Updated `corpus-integration-S4.md` |
| 31 | A-S4 | C | Builder | DD5 -> CS-DD4 -> DD1 -> DD2 -> DD4 | Updated `corpus-integration-S4.md`: rivers/case-study primary |
| 32 | A-S4 | C | Verifier | DD5 -> CS-DD4 -> DD1 -> DD2 -> DD4 + `corpus-integration-S4.md` | `verification-S4-P32.md`: FINAL subset 4 validation |

---

### SUBSET 5: ORG+AXIS EXTENDED

**Files:** OD2(1,659), OD3(1,163), OD4(1,978), AD1(1,737) = 6,537 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 33 | A-S5 | A | Builder | OD2 -> OD3 -> OD4 -> AD1 + S1-S4 integrations | Initial `corpus-integration-S5.md`: narrative/task/confidence/z-pattern extraction |
| 34 | A-S5 | A | Verifier | OD2 -> OD3 -> OD4 -> AD1 + `corpus-integration-S5.md` | `verification-S5-P34.md` |
| 35 | A-S5 | A | Builder | OD2 -> OD3 -> OD4 -> AD1 + `verification-S5-P34.md` | Updated `corpus-integration-S5.md` |
| 36 | A-S5 | B | Builder | OD4 -> AD1 -> OD2 -> OD3 | Updated `corpus-integration-S5.md`: confidence/z-pattern primacy |
| 37 | A-S5 | B | Verifier | OD4 -> AD1 -> OD2 -> OD3 + `corpus-integration-S5.md` | `verification-S5-P37.md` |
| 38 | A-S5 | B | Builder | OD4 -> AD1 -> OD2 -> OD3 + `verification-S5-P37.md` | Updated `corpus-integration-S5.md` |
| 39 | A-S5 | C | Builder | AD1 -> OD2 -> OD3 -> OD4 | Updated `corpus-integration-S5.md`: z-pattern primary |
| 40 | A-S5 | C | Verifier | AD1 -> OD2 -> OD3 -> OD4 + `corpus-integration-S5.md` | `verification-S5-P40.md`: FINAL subset 5 validation |

---

### SUBSET 6: REMAINING AXIS+CD

**Files:** AD2(1,682), AD3(1,896), CD1(1,654), CD5(2,003), CS-CD1(415), CS-CD5(386) = 8,036 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 41 | A-S6 | A | Builder | AD2 -> AD3 -> CD1 -> CD5 -> CS-CD1 -> CS-CD5 + S1-S5 integrations | Initial `corpus-integration-S6.md`: f-pattern/bento/reasoning/multi-axis extraction |
| 42 | A-S6 | A | Verifier | AD2 -> AD3 -> CD1 -> CD5 -> CS-CD1 -> CS-CD5 + `corpus-integration-S6.md` | `verification-S6-P42.md` |
| 43 | A-S6 | A | Builder | AD2 -> AD3 -> CD1 -> CD5 -> CS-CD1 -> CS-CD5 + `verification-S6-P42.md` | Updated `corpus-integration-S6.md` |
| 44 | A-S6 | B | Builder | CD1 -> CD5 -> CS-CD1 -> CS-CD5 -> AD2 -> AD3 | Updated `corpus-integration-S6.md`: combination files primacy |
| 45 | A-S6 | B | Verifier | CD1 -> CD5 -> CS-CD1 -> CS-CD5 -> AD2 -> AD3 + `corpus-integration-S6.md` | `verification-S6-P45.md` |
| 46 | A-S6 | B | Builder | CD1 -> CD5 -> CS-CD1 -> CS-CD5 -> AD2 -> AD3 + `verification-S6-P45.md` | Updated `corpus-integration-S6.md` |
| 47 | A-S6 | C | Builder | CS-CD5 -> CS-CD1 -> CD5 -> CD1 -> AD3 -> AD2 | Updated `corpus-integration-S6.md`: case studies + multi-axis primary |
| 48 | A-S6 | C | Verifier | CS-CD5 -> CS-CD1 -> CD5 -> CD1 -> AD3 -> AD2 + `corpus-integration-S6.md` | `verification-S6-P48.md`: FINAL subset 6 validation |

---

### SUBSET 7: SYNTHESIS+CONNECTIVE

**Files:** RS(383), R2(810), CSL(1,747), MC(447), CR(527), SR(529), OD5(2,284) = 6,727 lines

| Pass | Phase | Rot | Agent | File Load Order | Expected Output |
|------|-------|-----|-------|-----------------|-----------------|
| 49 | A-S7 | A | Builder | RS -> R2 -> CSL -> MC -> CR -> SR -> OD5 + S1-S6 integrations | Initial `corpus-integration-S7.md`: synthesis/strategy/rules integration |
| 50 | A-S7 | A | Verifier | RS -> R2 -> CSL -> MC -> CR -> SR -> OD5 + `corpus-integration-S7.md` | `verification-S7-P50.md` |
| 51 | A-S7 | A | Builder | RS -> R2 -> CSL -> MC -> CR -> SR -> OD5 + `verification-S7-P50.md` | Updated `corpus-integration-S7.md` |
| 52 | A-S7 | B | Builder | MC -> CR -> SR -> OD5 -> RS -> R2 -> CSL | Updated `corpus-integration-S7.md`: grammar/guidelines primacy |
| 53 | A-S7 | B | Verifier | MC -> CR -> SR -> OD5 -> RS -> R2 -> CSL + `corpus-integration-S7.md` | `verification-S7-P53.md` |
| 54 | A-S7 | B | Builder | MC -> CR -> SR -> OD5 -> RS -> R2 -> CSL + `verification-S7-P53.md` | Updated `corpus-integration-S7.md` |
| 55 | A-S7 | C | Builder | SR -> OD5 -> RS -> R2 -> CSL -> MC -> CR | Updated `corpus-integration-S7.md`: semantic rules + spatial primary |
| 56 | A-S7 | C | Verifier | SR -> OD5 -> RS -> R2 -> CSL -> MC -> CR + `corpus-integration-S7.md` | `verification-S7-P56.md`: FINAL subset 7 validation |

---

## Phase A Checkpoint: Cross-Subset Merge (Passes 57-60)

After all 56 subset passes complete, 4 merge passes unify the 7 subset integrations into one master document.

| Pass | Agent | Input | Output |
|------|-------|-------|--------|
| 57 | Builder | S1 + S2 + S3 integrations | `corpus-master-merge-A.md` (density + org + axis/combo core) |
| 58 | Builder | S4 + S5 + S6 integrations + merge-A | `corpus-master-merge-B.md` (extended explorations added) |
| 59 | Builder | S7 integration + merge-B | `corpus-master-merge-FINAL.md` (synthesis + connective tissue added) |
| 60 | Verifier | All 7 subset integrations + merge-FINAL | `merge-verification.md`: cross-subset gap analysis, duplication check, coverage matrix |

**Validation gate:** Verifier pass 60 produces a coverage matrix. Every source file must appear with at least 3 extracted patterns. Files with <3 patterns trigger targeted remediation passes.

---

## Phase B: PA Hardening (Passes 61-80)

Phase B applies perceptual audit methodology to the integrated corpus to ensure the extracted knowledge is USABLE by builders, not just PRESENT.

### PA Hardening Structure

| Pass | Agent | Focus | Input | Output |
|------|-------|-------|-------|--------|
| 61 | PA-Auditor-A | Soul alignment | `corpus-master-merge-FINAL.md` | `pa-hardening-soul.md`: Does integration preserve identity without prescribing? |
| 62 | PA-Auditor-B | Perceptual grounding | `corpus-master-merge-FINAL.md` | `pa-hardening-perception.md`: Are extracted patterns perceptually testable? |
| 63 | PA-Auditor-C | Coherence | `corpus-master-merge-FINAL.md` | `pa-hardening-coherence.md`: Do patterns form coherent system? |
| 64 | PA-Auditor-D | Metaphor fidelity | `corpus-master-merge-FINAL.md` | `pa-hardening-metaphor.md`: Are metaphor-mechanism links preserved? |
| 65 | PA-Auditor-E | Content coverage | `corpus-master-merge-FINAL.md` | `pa-hardening-coverage.md`: Information loss audit vs source files |
| 66 | PA-Auditor-F | Responsive integrity | `corpus-master-merge-FINAL.md` | `pa-hardening-responsive.md`: Cross-viewport pattern preservation |
| 67 | PA-Auditor-G | Typography | `corpus-master-merge-FINAL.md` | `pa-hardening-typography.md`: Type hierarchy patterns complete? |
| 68 | PA-Auditor-H | Spatial | `corpus-master-merge-FINAL.md` | `pa-hardening-spatial.md`: Spacing/proportion patterns extractable? |
| 69 | PA-Auditor-I | Integrative | All PA reports + merge-FINAL | `pa-hardening-integrative.md`: Cross-auditor synthesis |
| 70 | Builder | Fix cycle 1 | PA findings (61-69) | Updated `corpus-master-merge-FINAL.md` |
| 71 | Verifier | Validate fix 1 | Updated merge + PA findings | `pa-fix-validation-1.md` |
| 72 | Builder | Fix cycle 2 | Validation findings | Updated `corpus-master-merge-FINAL.md` |
| 73 | Verifier | Validate fix 2 | Updated merge + validation | `pa-fix-validation-2.md` |
| 74-80 | Conditional | Additional PA cycles if needed | Based on validation results | Stop when zero CRITICAL findings |

### PA Hardening Exit Criteria

The PA hardening loop terminates when ALL of:
1. Zero CRITICAL findings in latest verifier report
2. Coverage matrix shows every source file has >=3 extracted patterns
3. PA-Auditor-I integrative report rates overall coherence >= 3/4
4. No auditor flags information loss > 10% for any source file

---

## Orchestrator Execution Rules

### Sequential Dependencies

```
S1 (passes 1-8) -> S2 (9-16) -> S3 (17-24) -> S4 (25-32) -> S5 (33-40) -> S6 (41-48) -> S7 (49-56)
```

Subsets MUST run sequentially because each subset's builder receives prior subset integrations as cross-reference context.

### Within-Subset Dependencies

```
Pass N (Builder) -> Pass N+1 (Verifier) -> Pass N+2 (Builder) ...
```

Strictly sequential within each subset. The verifier needs the builder output; the next builder needs the verifier findings.

### Phase B Dependencies

```
Passes 57-60 (merge) -> Passes 61-68 (PA auditors, PARALLEL) -> Pass 69 (integrative) -> Pass 70+ (fix cycles)
```

PA auditors A-H (passes 61-68) CAN run in parallel since they each read the same input and produce independent reports. Auditor I (pass 69) requires all A-H outputs.

### Parallelization Opportunities

| Opportunity | Passes | Constraint |
|-------------|--------|------------|
| PA Auditors A-H | 61-68 | All read same input, independent output |
| None within subsets | 1-56 | Strictly sequential (builder->verifier->builder chain) |
| None across subsets | 1-56 | Each subset needs prior subset outputs |

**Maximum parallelism: 8 concurrent agents during PA hardening (passes 61-68).**

---

## Agent Prompt Templates (Skeleton)

### Builder Agent Prompt Structure
```
You are a CORPUS INTEGRATION BUILDER.

ROLE: Extract, synthesize, and integrate patterns from the source files into the corpus integration document.

INFRASTRUCTURE CONTEXT (read-only):
[mechanism-catalog.md, tokens.css, components.css, prohibitions.md]

SOURCE FILES FOR THIS PASS (in primacy order):
[File 1 - HIGHEST ATTENTION]
[File 2]
[...]
[File N - lowest attention, compensate by explicit search]

PRIOR INTEGRATION (if exists):
[corpus-integration-S{N}.md from previous pass]

VERIFIER FINDINGS (if exists):
[verification-S{N}-P{prev}.md]

CROSS-SUBSET CONTEXT (read-only):
[corpus-integration-S{1..N-1}.md from completed subsets]

INSTRUCTIONS:
1. Read ALL source files completely before writing
2. Extract: mechanisms, patterns, CSS techniques, spatial relationships, metaphor mappings
3. For files at END of load order: explicitly search for patterns you might miss due to attention decay
4. Address ALL findings from verifier report if provided
5. Output format: structured markdown with [SOURCE: filename:line] provenance tags

OUTPUT: Write to corpus-integration-S{N}.md
```

### Verifier Agent Prompt Structure
```
You are a CORPUS INTEGRATION VERIFIER.

ROLE: Audit the integration document for completeness, accuracy, and information loss.

SOURCE FILES (in rotation order):
[same files as builder saw]

INTEGRATION TO VERIFY:
[corpus-integration-S{N}.md]

CHECKS:
1. COVERAGE: For each source file, count extracted patterns. Flag if < 3.
2. ACCURACY: Spot-check 5 random provenance tags against source. Flag errors.
3. INFORMATION LOSS: Identify patterns in source files NOT in integration.
4. CROSS-SUBSET: Check for contradictions with prior subset integrations.
5. PRIMACY BIAS: Check if files at END of builder's load order are under-represented.

SEVERITY LEVELS:
- CRITICAL: Missing entire source file, factual error, >20% info loss
- SIGNIFICANT: Missing major pattern, weak provenance, primacy bias detected
- MINOR: Missing edge case, formatting issue, redundant extraction

OUTPUT: Write to verification-S{N}-P{pass}.md
```

---

## State Machine

```
STATES:
  IDLE -> RUNNING_SUBSET -> SUBSET_COMPLETE -> RUNNING_MERGE -> MERGE_COMPLETE ->
  RUNNING_PA -> PA_COMPLETE -> RUNNING_FIX -> FIX_COMPLETE ->
  [loop back to RUNNING_PA if needed] -> DONE

TRANSITIONS:
  IDLE + start -> RUNNING_SUBSET(1)
  RUNNING_SUBSET(N) + pass_complete -> check(is_pass_8_of_subset?)
    yes -> SUBSET_COMPLETE(N)
    no -> RUNNING_SUBSET(N) [next pass]
  SUBSET_COMPLETE(N) + next -> check(N < 7?)
    yes -> RUNNING_SUBSET(N+1)
    no -> RUNNING_MERGE
  RUNNING_MERGE + 4_passes_complete -> MERGE_COMPLETE
  MERGE_COMPLETE -> RUNNING_PA
  RUNNING_PA + 9_auditors_complete -> PA_COMPLETE
  PA_COMPLETE + has_critical_findings -> RUNNING_FIX
  PA_COMPLETE + no_critical_findings -> DONE
  RUNNING_FIX + fix_validated -> check(still_critical?)
    yes -> RUNNING_PA [re-audit]
    no -> DONE
```

---

## Resource Estimates

| Phase | Passes | Agents | Est. Tokens/Pass | Total Tokens |
|-------|--------|--------|-------------------|--------------|
| A: Subsets 1-7 | 56 | 56 | ~15,000 in + ~5,000 out | ~1.12M |
| A: Merge | 4 | 4 | ~25,000 in + ~8,000 out | ~132K |
| B: PA Auditors | 9 | 9 | ~20,000 in + ~5,000 out | ~225K |
| B: Fix cycles | 5-11 | 5-11 | ~20,000 in + ~5,000 out | ~125-275K |
| **Total** | **74-80** | **74-80** | | **~1.6-1.75M** |

**Estimated wall-clock time at 2 min/pass:** 2.5-2.7 hours (sequential) or ~2 hours with PA parallelism.

---

## Validation Checkpoints

| Checkpoint | After Pass | Gate Condition | Failure Action |
|------------|-----------|----------------|----------------|
| CP-1 | 8 | S1 verifier: 0 CRITICAL | Remediation pass before S2 |
| CP-2 | 16 | S2 verifier: 0 CRITICAL | Remediation pass before S3 |
| CP-3 | 24 | S3 verifier: 0 CRITICAL | Remediation pass before S4 |
| CP-4 | 32 | S4 verifier: 0 CRITICAL | Remediation pass before S5 |
| CP-5 | 40 | S5 verifier: 0 CRITICAL | Remediation pass before S6 |
| CP-6 | 48 | S6 verifier: 0 CRITICAL | Remediation pass before S7 |
| CP-7 | 56 | S7 verifier: 0 CRITICAL | Remediation pass before merge |
| CP-8 | 60 | Merge verifier: coverage >= 3/file | Targeted file passes |
| CP-9 | 69 | PA integrative: coherence >= 3/4 | Fix cycle |
| CP-10 | 73+ | Fix verifier: 0 CRITICAL | Additional fix cycle or DONE |

---

## Resume Protocol

If the orchestrator crashes or is interrupted:

1. **Read state file** (`pipeline-state.json`) to determine last completed pass
2. **Identify current subset and rotation** from pass number
3. **Check for partial output** — if builder wrote partial file, discard and re-run that pass
4. **Resume from last completed pass + 1**
5. **All prior outputs are immutable** — never re-run a completed pass

State file format:
```json
{
  "current_pass": 23,
  "current_subset": 3,
  "current_rotation": "C",
  "completed_passes": [1, 2, ..., 22],
  "failed_passes": [],
  "remediation_passes_injected": 0,
  "outputs": {
    "corpus-integration-S1.md": "sha256:abc...",
    "corpus-integration-S2.md": "sha256:def...",
    "verification-S3-P18.md": "sha256:ghi..."
  }
}
```

---

## Appendix: Complete File Loading Matrix

This matrix shows EXACTLY which files each pass loads, using the IDs from the File Path Registry.

### Infrastructure (every pass)
`INFRA = [mechanism-catalog, tokens.css, components.css, prohibitions.md, build-skill, tc-skill, pa-skill]`

### Subset 1 Rotations
- Rot-A: `[R3, DD3, DD6, CS-DD3, CS-DD6]`
- Rot-B: `[DD6, CS-DD3, CS-DD6, R3, DD3]`
- Rot-C: `[CS-DD3, CS-DD6, R3, DD3, DD6]`

### Subset 2 Rotations
- Rot-A: `[R1, OD1, OD6, CS-OD1, CS-OD4, CS-OD6]`
- Rot-B: `[OD6, CS-OD1, CS-OD4, CS-OD6, R1, OD1]`
- Rot-C: `[CS-OD6, CS-OD4, CS-OD1, OD6, OD1, R1]`

### Subset 3 Rotations
- Rot-A: `[R4, R5, AD6, CD6, CS-CD6]`
- Rot-B: `[AD6, CD6, CS-CD6, R4, R5]`
- Rot-C: `[CD6, CS-CD6, R4, R5, AD6]`

### Subset 4 Rotations
- Rot-A: `[DD1, DD2, DD4, DD5, CS-DD4]`
- Rot-B: `[DD4, DD5, CS-DD4, DD1, DD2]`
- Rot-C: `[DD5, CS-DD4, DD1, DD2, DD4]`

### Subset 5 Rotations
- Rot-A: `[OD2, OD3, OD4, AD1]`
- Rot-B: `[OD4, AD1, OD2, OD3]`
- Rot-C: `[AD1, OD2, OD3, OD4]`

### Subset 6 Rotations
- Rot-A: `[AD2, AD3, CD1, CD5, CS-CD1, CS-CD5]`
- Rot-B: `[CD1, CD5, CS-CD1, CS-CD5, AD2, AD3]`
- Rot-C: `[CS-CD5, CS-CD1, CD5, CD1, AD3, AD2]`

### Subset 7 Rotations
- Rot-A: `[RS, R2, CSL, MC, CR, SR, OD5]`
- Rot-B: `[MC, CR, SR, OD5, RS, R2, CSL]`
- Rot-C: `[SR, OD5, RS, R2, CSL, MC, CR]`

---

## Appendix B: Exact `claude -p` Invocation Examples

These show the EXACT shell commands the orchestrator generates. All paths are absolute.

### Example: Pass 1 (S1/RotA/Builder)

```bash
claude -p \
  --system-prompt "$(cat /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/multi-window-handoff-design/_deterministic-orchestration/prompts/corpus-builder-system.md)" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R3-DENSITY-DIMENSIONS.md" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-003-islands.html" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-006-fractal.html" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-003-islands.md" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-006-fractal.md" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/components/components.css" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/vocabulary/tokens.css" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/identity/prohibitions.md" \
  --model claude-sonnet-4-6 \
  --max-turns 15 \
  --allowedTools "Read,Write,Edit,Glob,Grep" \
  "You are a CORPUS INTEGRATION BUILDER. Integrate density dimension patterns from the source files into corpus-integration-S1.md. Files are loaded in theory-first order (R3 has primacy). Extract: mechanisms, CSS patterns, compositional rules, proven combinations. Tag every extraction with [SOURCE: filename:line]."
```

### Example: Pass 2 (S1/RotA/Verifier)

```bash
claude -p \
  --system-prompt "$(cat /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/multi-window-handoff-design/_deterministic-orchestration/prompts/corpus-verifier-system.md)" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R3-DENSITY-DIMENSIONS.md" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-003-islands.html" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-006-fractal.html" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-003-islands.md" \
  --add-file "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-006-fractal.md" \
  --add-file "state/corpus-integration-S1.md" \
  --model claude-sonnet-4-6 \
  --max-turns 10 \
  --allowedTools "Read,Write" \
  "You are a CORPUS INTEGRATION VERIFIER. Audit corpus-integration-S1.md for completeness against the 5 source files. Check: coverage (>=3 patterns per file), accuracy (spot-check provenance tags), information loss, primacy bias (are files DD-003-islands.md and DD-006-fractal.md case studies under-represented?). Write findings to verification-S1-P2.md with severity levels CRITICAL/SIGNIFICANT/MINOR."
```

### Example: Pass 58 (PA Auditor A — Soul)

```bash
claude -p \
  --system-prompt "$(cat /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/multi-window-handoff-design/_deterministic-orchestration/prompts/pa-auditor-system.md)" \
  --add-file "state/screenshots/cycle-1/desktop-full.png" \
  --add-file "state/screenshots/cycle-1/desktop-viewport.png" \
  --add-file "state/screenshots/cycle-1/tablet-full.png" \
  --add-file "state/screenshots/cycle-1/mobile-full.png" \
  --add-file "state/pa-test-page-cycle-1.html" \
  --model claude-opus-4-6 \
  --max-turns 10 \
  --allowedTools "Read,Write" \
  "You are PA Auditor A (Soul). Evaluate this page against PA questions 01-05 from the perceptual auditing protocol. Focus on identity alignment, soul properties, and overall design fidelity. Score each question 0-4. Write your complete report to state/pa-cycle-1/auditor-A.md."
```

---

## Appendix C: File ID to Absolute Path Lookup Table

For use by the orchestrator's `getFilePath(id)` function:

```javascript
const FILE_PATHS = {
  // Research
  'R1': 'design-system/research/R1-DOCUMENTATION-PATTERNS.md',
  'R2': 'design-system/research/R2-CREATIVE-LAYOUTS.md',
  'R3': 'design-system/research/R3-DENSITY-DIMENSIONS.md',
  'R4': 'design-system/research/R4-AXIS-INNOVATIONS.md',
  'R5': 'design-system/research/R5-COMBINATION-THEORY.md',
  'RS': 'design-system/research/RESEARCH-SYNTHESIS.md',

  // Density explorations
  'DD1': 'design-system/validated-explorations/density/DD-001-breathing.html',
  'DD2': 'design-system/validated-explorations/density/DD-002-gradient.html',
  'DD3': 'design-system/validated-explorations/density/DD-003-islands.html',
  'DD4': 'design-system/validated-explorations/density/DD-004-layers.html',
  'DD5': 'design-system/validated-explorations/density/DD-005-rivers.html',
  'DD6': 'design-system/validated-explorations/density/DD-006-fractal.html',

  // Organizational explorations
  'OD1': 'design-system/validated-explorations/organizational/OD-001-conversational.html',
  'OD2': 'design-system/validated-explorations/organizational/OD-002-narrative.html',
  'OD3': 'design-system/validated-explorations/organizational/OD-003-task-based.html',
  'OD4': 'design-system/validated-explorations/organizational/OD-004-confidence.html',
  'OD5': 'design-system/validated-explorations/organizational/OD-005-spatial.html',
  'OD6': 'design-system/validated-explorations/organizational/OD-006-creative.html',

  // Axis explorations
  'AD1': 'design-system/axis/AD-001-z-pattern.html',
  'AD2': 'design-system/axis/AD-002-f-pattern.html',
  'AD3': 'design-system/axis/AD-003-bento-grid.html',
  'AD6': 'design-system/axis/AD-006-compound.html',

  // Combination explorations
  'CD1': 'design-system/validated-explorations/combination/CD-001-reasoning-inside-code.html',
  'CD5': 'design-system/validated-explorations/combination/CD-005-multi-axis-transition.html',
  'CD6': 'design-system/validated-explorations/combination/CD-006-pilot-migration.html',

  // Case studies (primary)
  'CS-DD3': 'design-system/compositional-core/case-studies/DD-003-islands.md',
  'CS-DD4': 'design-system/compositional-core/case-studies/DD-004-layers.md',
  'CS-DD6': 'design-system/compositional-core/case-studies/DD-006-fractal.md',
  'CS-OD1': 'design-system/compositional-core/case-studies/OD-001-conversational.md',
  'CS-OD4': 'design-system/compositional-core/case-studies/OD-004-confidence.md',
  'CS-OD6': 'design-system/compositional-core/case-studies/OD-006-creative.md',
  'CS-CD1': 'design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md',
  'CS-CD5': 'design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md',
  'CS-CD6': 'design-system/compositional-core/case-studies/CD-006-pilot-migration.md',

  // Case studies (visual — supplementary)
  'CSV-DD3': 'design-system/compositional-core/case-studies/dd-003-islands-visual.md',
  'CSV-DD4': 'design-system/compositional-core/case-studies/dd-004-layers-visual.md',
  'CSV-DD6': 'design-system/compositional-core/case-studies/dd-006-fractal-visual.md',

  // Grammar + Guidelines (in subset 7 rotation)
  'CSL': 'design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md',
  'MC':  'design-system/compositional-core/grammar/mechanism-combinations.md',
  'CR':  'design-system/compositional-core/grammar/compositional-rules.md',
  'SR':  'design-system/compositional-core/guidelines/semantic-rules.md',

  // Infrastructure (constant context, not rotated)
  'MCAT': 'design-system/compositional-core/grammar/mechanism-catalog.md',
  'COMP': 'design-system/compositional-core/components/components.css',
  'TOK':  'design-system/compositional-core/vocabulary/tokens.css',
  'PROH': 'design-system/compositional-core/identity/prohibitions.md',
};

// Subset definitions using file IDs
const SUBSETS = [
  { id: 1, name: 'DENSITY_CORE', files: ['R3', 'DD3', 'DD6', 'CS-DD3', 'CS-DD6'] },
  { id: 2, name: 'ORG_CORE', files: ['R1', 'OD1', 'OD6', 'CS-OD1', 'CS-OD4', 'CS-OD6'] },
  { id: 3, name: 'AXIS_COMBO_CORE', files: ['R4', 'R5', 'AD6', 'CD6', 'CS-CD6'] },
  { id: 4, name: 'DENSITY_ORG_EXT', files: ['DD1', 'DD2', 'DD4', 'DD5', 'CS-DD4'] },
  { id: 5, name: 'ORG_AXIS_EXT', files: ['OD2', 'OD3', 'OD4', 'AD1'] },
  { id: 6, name: 'REMAINING_AXIS_CD', files: ['AD2', 'AD3', 'CD1', 'CD5', 'CS-CD1', 'CS-CD5'] },
  { id: 7, name: 'SYNTHESIS_CONNECTIVE', files: ['RS', 'R2', 'CSL', 'MC', 'CR', 'SR', 'OD5'] },
];

const INFRASTRUCTURE = ['MCAT', 'COMP', 'TOK', 'PROH'];

// Rotation function
function rotateFiles(files, rotation) {
  const n = files.length;
  if (rotation === 'A') return [...files];
  if (rotation === 'B') {
    const mid = Math.ceil(n / 2);
    return [...files.slice(mid), ...files.slice(0, mid)];
  }
  if (rotation === 'C') {
    return [...files].reverse();
  }
}

// Agent type per pass-within-subset (1-indexed)
function getAgentType(passInSubset) {
  return [null, 'builder', 'verifier', 'builder', 'builder', 'verifier', 'builder', 'builder', 'verifier'][passInSubset];
}

// Rotation per pass-within-subset
function getRotation(passInSubset) {
  if (passInSubset <= 3) return 'A';
  if (passInSubset <= 6) return 'B';
  return 'C';
}
```
