# Terminology Migration Analysis — BLOCK-01, BLOCK-05, BLOCK-06
Date: 2026-02-26
Analyst: Opus terminology-analyst
Scope: 12 files, 4 verdict terms, 1 format inconsistency, 1 numbering collision

---

## 1. Per-File Inventory

### Legend
- **VC** = VERDICT-CONTEXT (term used as a pipeline verdict)
- **BC** = BUILDER-CONTEXT (term used to describe a builder pass or builder action)
- **AC** = AMBIGUOUS (could be either; needs disambiguation)
- **DC** = DESCRIPTIVE-CONTEXT (term used as an English verb/adjective, not a pipeline concept)

---

### 1.1 MANIFEST.md (Lines 1-898)

| Line | Term | Context (5 chars before/after) | Classification |
|------|------|-------------------------------|----------------|
| 10 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "verdict: **SH" / "REBU" | VC — Quickstart step 10, old verdict terms |
| 11 | `SHIP WITH FIXES` | "If SH...IXES:" | VC — step 11 decision logic |
| 11 | `REFINE/IMPROVE` | "If RE...PROVE" | **AC** — `REFINE` is old, `IMPROVE` is new; BOTH appear in same sentence |
| 11 | `IMPROVE protocol` | "IMPR...tocol" | VC — references the new term correctly |
| 11 | `REBUILD` | "If RE...UILD:" | VC — old term |
| 11 | `SHIP or SHIP WITH FIXES` | "is SH...IXES" | VC — old terms in decision |
| 36 | `Pass A` | "Spawn **Pa" | BC — builder pass designation |
| 38 | `Pass B` | "Spawn **Pa" | BC — builder pass designation |
| 44 | `REFINE` (x3) | "Convergence / REFINE passes" | **AC** — could be old verdict or conceptual "improvement cycle" |
| 47 | `REBUILD` | "1 REBUILD +" | VC — iteration budget |
| 47 | `REFINE` | "2 REFINE passes" | **AC** — iteration budget uses old term |
| 71 | `RELEASE` | "Single-pass RELEASE" | VC — **NEW term already in use** |
| 104 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "Verdict: ___" | VC — execution tracker template reference |
| 142 | `Pass B (Refinement)` | "Phase 2B" | BC — builder pass description |
| 199 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "verdict: **SH" | VC — Weaver output description |
| 203 | `IMPROVE` | "IMPROVE validation" | VC — **NEW term used** |
| 304 | `SHIP/REFINE/REBUILD` | "Identity FAIL = REBUILD" | VC — verdict logic summary |
| 332 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "pa-weaver.md" — verdict categories in routing table | VC |
| 580 | `SHIP WITH FIXES` | verdict logic step 3C | VC |
| 581 | `REFINE` | "PA-05 2.5-3.5 → **REFINE**" | VC — old term |
| 582 | `REBUILD` | "PA-05 < 2.5 → **REBUILD**" | VC — old term |
| 584-586 | `SHIP/SHIP WITH FIXES/REFINE/REBUILD` | Weaver diagnostic output | VC |
| 588 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "Output:" | VC |
| 592 | `REFINE` | "REFINE is the pipeline's highest-ROI" | **AC** — is this the verdict REFINE or the concept? |
| 594 | `REFINE` / `REBUILD` | "Weaver issues REFINE" / "REBUILD" | VC |

**Special note — Line 11:** This line contains BOTH old and new terms: `"If REFINE/IMPROVE (the standard path): execute IMPROVE protocol"`. This is a transitional hybrid — `REFINE` is the old verdict name, `IMPROVE` is the new name. The parenthetical suggests they are being treated as synonymous.

**Special note — Lines 44, 47:** `REFINE` in iteration budget context. These say "1 REBUILD + 2 REFINE passes maximum." The term `REFINE` here means "improvement iteration" not specifically the old verdict. HOWEVER, the budget terminology should match the verdict terminology.

**MANIFEST.md uses BOTH old and new terminology simultaneously.** Lines 71, 203 use `RELEASE` and `IMPROVE`. Lines 10, 104, 199, 332, 580-594 use `SHIP`, `SHIP WITH FIXES`, `REFINE`, `REBUILD`.

---

### 1.2 artifact-orchestrator.md (747 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 13 | `REFINE` | "REFINE loop until SHIP" | **AC** — old verdict in conceptual description |
| 43 | `REFINE` | "IMPROVE pass is the pipeline's" | MIXED — sentence uses IMPROVE for the pass concept |
| 44 | `RELEASE` | "Single-pass RELEASE" | VC — **NEW term** |
| 46 | `REBUILD` | "1 REBUILD + 2 IMPROVE" | VC — old REBUILD, new IMPROVE |
| 71 | `RELEASE` | "Single-pass RELEASE" | VC — **NEW** |
| 74 | `IMPROVE` | "Two-pass convergence (BUILD + IMPROVE + RE-AUDIT)" | VC — **NEW** |
| 75 | `Pass 0` | "Pass 0: Initial build" | BC — builder pass numbering |
| 76 | `Pass 1` | "Pass 1 (standard): IMPROVE build" | BC — builder pass numbering |
| 77 | `Pass 2` | "Pass 2 (optional)" | BC — builder pass numbering |
| 78 | `Pass 0 → Pass 1` | "2.0 → 3.5" | BC — historical data |
| 79 | `RELEASE` | "Single-pass RELEASE" | VC — **NEW** |
| 90 | `Iteration Policy: COMPOSE, Don't Fix` | section header | DC — descriptive |
| 92 | `IMPROVE pass` | "IMPROVE pass is" | VC — **NEW** |
| 93 | `IMPROVE` | "IMPROVE pass is the pipeline's most valuable phase" | VC — **NEW** |
| 134 | `REFINE` | "OBS-05: REFINE checklist" | **AC** — observer checks for "REFINE" protocol |
| 151 | `REFINE` | "Pass R after REFINE" | **AC** — observer pass |
| 379 | `REFINE` | "execute REFINE before PA" | **AC** — action trigger |
| 455 | `REFINE` | "On REFINE, returns to Phase 2" | VC — old term |
| 463 | `SHIP or REFINE` | "Verdict CANNOT be SHIP or REFINE" | VC — old terms |
| 472-573 | **Ship / Refine / Rebuild Thresholds section** | Multiple instances | VC — MIXED old/new |
| 474-476 | `SHIP: PA-05>=3.5` | "SHIP (PA-05 >= 3.5)" | VC — old term |
| 477-484 | `SHIP` section | "REFINE override" | VC — old terms |
| 486-491 | `SHIP WITH POTENTIAL` / `SHIP WITH FIXES` | "PA-05 >= 3.0" | VC — old terms |
| 493 | `REFINE (PA-05 2.5-3.5)` | section header | VC — old term |
| 497-522 | `REFINE Targeting` section | "REFINE Pass B only" | **AC** — `REFINE` as both verdict and builder-pass type |
| 523-566 | `REFINE Protocol (BEFORE / DURING / AFTER)` | Multiple instances | **AC** — refers to the iteration protocol |
| 568-573 | `REBUILD (PA-05 < 2.5)` | section header + content | VC — old term |
| 582-584 | Core Principle | "COMPOSING through successive REFINE passes" | **AC** — conceptual use of REFINE |
| 589-603 | `Iteration Decision Function` | "IF verdict is REFINE:" / "IF verdict is REBUILD:" | VC — old terms |
| 605-640 | `Low-Friction Iteration Protocol` | "REFINE protocol" / "REFINE builder" | **AC** — process name |
| 651-675 | Gate Logic Relocated | "GR-29: SHIP" / "GR-30: REFINE" / "GR-31: REBUILD" | VC — gate definitions with old terms |
| 735 | `REBUILD` / `REFINE` | "COSTS" | VC — cost estimates |

**Orchestrator is heavily MIXED.** New terms (`RELEASE`, `IMPROVE`) appear in Sections 0-1 (architecture overview). Old terms (`SHIP`, `REFINE`, `REBUILD`) dominate Section 7 (verdict decision tree). The verdict thresholds section (472-603) is ENTIRELY old terminology.

**CRITICAL: `REFINE` as process name.** The orchestrator has a `REFINE Protocol (BEFORE / DURING / AFTER)` section and `REFINE Targeting (Two-Pass)` section. These are PROCESS NAMES, not just verdict references. Renaming these requires renaming section headers.

---

### 1.3 d10-observer-protocol.md (594 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 69 | `BEFORE Checklist Verification (REFINE Protocol)` | Category heading | **AC** — process name |
| 73 | `REFINE` (x4 in OBS-05–09) | "REFINE section" / "REFINE builder" / "REFINE occurs" | **AC** — observer checks reference REFINE as process |
| 77 | `REFINE` | "REFINE builder's input files" | BC — the builder within REFINE process |
| 78 | `REFINE` | "Post-REFINE re-audit" | **AC** — process |
| 134 | `REFINE` | "OBS-05: REFINE checklist" | **AC** — observer OBS-05 field |
| 142 | `REFINE` | "Pass R after REFINE" | **AC** — observer pass |
| 345 | `REFINE` | "OBS-21: pipeline vocabulary... 'REFINE'" | **SPECIAL** — `REFINE` is listed as PIPELINE VOCABULARY that should NOT appear in PA auditor reports |
| 363-381 | `REFINE` (x8) | Pass R checks | **AC** — all process-context |
| 405 | `SHIP, SHIP WITH FIXES` | "After pipeline completes (SHIP, SHIP WITH FIXES, or HALT)" | VC — old terms |

**Observer protocol has 15+ instances of `REFINE`, ALL in process-context.** The observer checks reference `REFINE` as the name of the iteration protocol, not as a verdict. These would ALL need to change.

**Line 345 is SPECIAL:** OBS-21 lists `"REFINE"` as a pipeline vocabulary term that PA auditors should NOT see. If we rename to IMPROVE, this line must also change.

---

### 1.4 EXECUTION-TRACKER-TEMPLATE.md (200 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 56 | `REBUILD` | "Pass A structural verdict: PROCEED-TO-PASS-B / RE-SPAWN / REBUILD" | VC — old term |
| 104 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "Verdict: ___" | VC — all old terms |
| 110-123 | `REFINE` (x10) | "REFINE Phase" section | **AC** — section name + process fields |
| 129 | `REFINE-1 / REFINE-2` | "Iteration State" | **AC** — state labels |
| 139 | `REFINE` | "no `-refine` PA reports" | **AC** — file suffix convention |

**The execution tracker template uses ALL old terms.** REFINE appears as: section header, field labels, iteration states, and file suffix conventions.

**File suffix convention (`-refine`):** If we rename the verdict, do we also rename the file suffix? Current convention: `p3b-pa-auditor-A-refine.md`. Changing to `-improve` affects file naming throughout.

---

### 1.5 gate-runner-spec.md (300 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 48 | `REFINE` | "GR-48 FAIL = verdict INCOMPLETE" context | VC — verdict reference |
| 66-71 | `REBUILD` / `REFINE` | Verdict logic summary | VC — old terms |
| 121 | `REBUILD` / `REFINE` / `SHIP WITH FIXES` | verdictLogic in gate-manifest | VC — old terms |
| 167 | `SHIP/SHIP WITH FIXES` | "GR-64 FAIL + SHIP verdict = downgrade to REFINE" | VC — old terms |

**Gate-runner-spec uses old terms exclusively in verdict logic descriptions.** 8 instances, all VC.

---

### 1.6 artifact-builder-recipe-compose.md (~650 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 1 | `COMPOSE PASS (Pass A of 2)` | Title | BC — pass naming |
| 4 | `Pass: A (COMPOSE — structural/compositional dispositions)` | Header metadata | BC |
| 15 | `Pass A of a two-pass build` / `Pass B` | How-to section | BC |
| 260 | `RELEASE` | "Gas Town (CRESCENDO + RELEASE):" | DC — musical/emotional arc term, NOT a verdict |
| 280 | `Pass 1 output target` | Build target | BC — uses `Pass 1` numbering |
| 358-360 | `REFINE` (x3) | "REFINE narration" / "REFINE pass" | **AC** — builder instructions for REFINE iteration |
| 468 | `PASS B` | "D-07 and D-08 are handled in PASS B" | BC |
| 490 | `Pass A` | "Assess Disposition Deployment (Pass A)" | BC |
| 494-498 | `Pass A` / `Pass B` | Emotional register ownership | BC |
| 513-515 | `Pass A — Partial` / `Pass B` | Self-evaluation scope | BC |
| 559-566 | `IMPROVEMENTS` (x2) | "IMPROVEMENTS comment" / `<!-- IMPROVEMENTS:` | **BLOCK-05** — format variant 1 |
| 566 | `IMPROVE pass` | "different Opus builder will read these ideas during the IMPROVE pass" | VC — **NEW term** |
| 568 | `RELEASE` | "Zero ideas triggers single-pass RELEASE evaluation" | VC — **NEW term** |
| 568 | `IMPROVE` | "four or more ideas confirms the standard IMPROVE path" | VC — **NEW term** |
| 622 | `Pass A (Compose: D-01..D-06, D-09) + Pass B (Polish: D-07, D-08)` | Summary | BC — pass naming |

**Compose recipe uses NEW terms (`RELEASE`, `IMPROVE`)** in builder-facing text (lines 566, 568) but uses `REFINE` in the INTENT narration protocol (lines 358-360).

**BLOCK-05 instance:** Line 559-566 uses `<!-- IMPROVEMENTS:` format with numbered list and `Confidence (LOW/MED/HIGH)`.

**"RELEASE" on line 260:** This is "CRESCENDO + RELEASE" as a musical arc term (content-form tension pattern), NOT the RELEASE verdict. Must NOT be changed.

---

### 1.7 artifact-builder-recipe-polish.md (301 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 1 | `POLISH PASS (Pass B of 2)` | Title | BC — pass naming uses "POLISH" |
| 4 | `Pass: B (POLISH — adds behavioral CSS, accessibility, self-evaluation)` | Metadata | BC — **COLLISION with new verdict** |
| 12 | `POLISH it` | "Your job is to POLISH it" | DC — English verb |
| 276 | `REFINE protocol` | "PA audit will catch it and the REFINE protocol will address it" | **AC** — old process reference |
| 282-291 | `IMPROVEMENTS` | "IMPROVEMENTS Comment" section | **BLOCK-05** — format variant 2 |
| 296 | `SHIP to REFINE` | "orchestrator MUST override SHIP to REFINE" | VC — old terms |
| 300 | `Pass B (Polish)` | "End of Pass B (Polish) recipe" | BC |

**CRITICAL COLLISION:** The polish recipe is titled "POLISH PASS" and uses "POLISH" throughout as a builder-pass concept. The NEW verdict term is also "POLISH" (replacing "SHIP WITH FIXES"). This creates a severe collision:

- **Old meaning:** "Pass B (POLISH)" = the refinement/polishing builder pass
- **New meaning:** "POLISH" = verdict meaning "ship with mechanical fixes"

A reader encountering "POLISH" would not know which is intended without additional context.

**BLOCK-05 instance:** Line 282-291 uses the same `<!-- IMPROVEMENTS:` format as compose recipe.

---

### 1.8 pa-weaver.md (468 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 91 | `SHIP WITH FIXES` | "If SHIP WITH FIXES verdict" | VC — old term (ONCE) |
| 248-264 | `IMPROVE` / `RETHINK` | Section 5.0 rendering vs composition | VC — **NEW terms** |
| 271-276 | `RELEASE` / `POLISH` / `IMPROVE` / `RETHINK` | Section 5.1 ship thresholds | VC — **NEW terms** |
| 273 | `pass >= 1` | "PA-05 >= 3.5/4 AND... (pass >= 1 OR builder_ideas == 0)" | **BLOCK-06** — Pass numbering |
| 280-286 | `POLISH Protocol` | Section 5.1.1 | VC — **NEW term** |
| 288-294 | `IMPROVE Protocol` | Section 5.2 | VC — **NEW term** |
| 297-304 | `RETHINK Protocol` | Section 5.3 | VC — **NEW term** |
| 315-324 | Finding Status Map | "FIXED / IMPROVED / UNCHANGED / REGRESSION" | DC — not verdict terms |
| 329 | "Forward Assessment" | no verdict terms | — |
| 353-365 | "Improvement Pass Awareness" | section header | DC — uses "improvement" as English word |
| 357 | `IMPROVE passes` | "IMPROVE passes deepen composition" | VC — **NEW term** |

**The Weaver file is ALREADY MIGRATED to new terms** (RELEASE, POLISH, IMPROVE, RETHINK) EXCEPT for one residual `SHIP WITH FIXES` on line 91.

**Line 273 (BLOCK-06):** `(pass >= 1 OR builder_ideas == 0)` — this uses pass NUMBERING (0-based) alongside the A/B NAMING convention used elsewhere. The same page talks about "Pass A" and "Pass B" but the threshold says `pass >= 1`.

---

### 1.9 gate-manifest.json (343 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 48 | `REBUILD` / `REFINE` | verdictImpact for required tier | VC — old terms |
| 121-126 | `REBUILD` / `REFINE` / `SHIP WITH FIXES` / `SHIP` | verdictLogic object | VC — ALL old terms |
| 306 | `REFINE` / `REBUILD` / `INCOMPLETE` | verdict enum values | VC — old terms |

**gate-manifest.json uses ALL old terms in the verdict logic section.** 3 locations, ~12 instances.

---

### 1.10 pa-manifest.md (89 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 71 | `SHIP / SHIP WITH FIXES / REFINE / REBUILD` | "Ship Decision" field | VC — all old terms |

**1 instance, all old terms.**

---

### 1.11 pa-questions.md (431 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| — | (none) | No verdict terms appear | — |

**Clean. No instances to change.**

---

### 1.12 experiment-protocol.md (52 lines)

| Line | Term | Context | Classification |
|------|------|---------|----------------|
| 10 | `SHIP, REFINE, or REBUILD` | "Verdict is SHIP, REFINE, or REBUILD" | VC — old terms |

**1 instance, old terms.**

---

## 2. Disambiguation Decisions

### 2.1 REFINE as Verdict vs REFINE as Process

**The problem:** `REFINE` appears in 3 distinct contexts:

1. **Verdict REFINE** — Weaver says "page needs improvement" → should become **IMPROVE**
2. **REFINE Protocol** — The orchestrator section describing the iteration procedure → section name should also change to **IMPROVE Protocol**
3. **REFINE builder** — The different Opus agent spawned during the iteration → should become **IMPROVE builder**
4. **`-refine` file suffix** — File naming convention for iteration artifacts → should become **`-improve`**

**Decision:** Change ALL instances. The verdict, the protocol, the builder, and the file suffix should all use `IMPROVE`. Rationale:

- The protocol IS the execution of the verdict. If the verdict is IMPROVE, the protocol that executes it should also be called IMPROVE.
- The builder spawned by the IMPROVE verdict should be the IMPROVE builder.
- File suffixes should match the verdict name for searchability.
- Partial renaming (verdict yes, protocol no) creates confusion where `IMPROVE` verdict triggers `REFINE` protocol.

**One exception:** Line 345 of d10-observer-protocol.md lists `"REFINE"` as pipeline vocabulary that should NOT appear in PA auditor reports. After migration, this should list `"IMPROVE"` instead (or both, to catch legacy leaks).

### 2.2 REBUILD → RETHINK

**The problem:** `REBUILD` appears only in verdict context. No collision. The Weaver already uses `RETHINK`.

**Decision:** Change all instances of `REBUILD` (verdict) to `RETHINK`. Exception: `REBUILD` in the orchestrator's Phase 2A-gate structural check ("IF identity gate FAILS → REBUILD") should also change because it IS a verdict trigger.

### 2.3 SHIP → RELEASE

**The problem:** `SHIP` appears in verdict context throughout. No collision with other concepts.

**Decision:** Change all instances of verdict `SHIP` to `RELEASE`. Exception: compound terms like "SHIP WITH FIXES" become `POLISH` (see Section 3 for collision analysis). The English verb "ship" in descriptive context (e.g., "ready to ship as-is" in PA questions) is NOT changed — it is not a verdict term.

**PA-questions.md line 48:** `"Ready to ship as-is"` — this is descriptive English, NOT the verdict. Leave unchanged.

### 2.4 Orchestrator's `SHIP WITH POTENTIAL`

MANIFEST.md line 486-491 defines `SHIP WITH POTENTIAL` as an intermediate verdict between SHIP and SHIP WITH FIXES. Under the new scheme, this would become a sub-case of POLISH or a separate orchestrator override. Since the Weaver already defines POLISH (Section 5.1.1), `SHIP WITH POTENTIAL` should be renamed to **POLISH WITH OVERRIDE** or simply absorbed into the POLISH protocol with an orchestrator-may-elect-IMPROVE clause. Recommend: keep as **POLISH (POTENTIAL OVERRIDE)** to preserve the existing semantics.

### 2.5 `IMPROVEMENTS` Comment in Builder HTML

Both compose and polish recipes instruct builders to write `<!-- IMPROVEMENTS: ... -->`. This is a builder self-assessment comment, NOT a verdict. The word "IMPROVEMENTS" here is an English noun describing "things I would improve." It should NOT be renamed to match any verdict term.

**Recommendation:** Keep `<!-- IMPROVEMENTS: ... -->` as-is across all files. This is builder vocabulary, not pipeline verdict vocabulary.

---

## 3. POLISH Collision Analysis

### 3.1 The Collision

| Usage | File | Meaning |
|-------|------|---------|
| **Pass B (POLISH)** | artifact-builder-recipe-polish.md (title, line 1, 4, 12, 300) | The second builder pass that adds behavioral CSS, accessibility, and self-evaluation |
| **POLISH verdict** | pa-weaver.md (lines 274, 280-286) | Verdict meaning "page is compositionally sound, has <= 3 mechanical fixes, same builder can fix" |

These are DISTINCT concepts:
- Pass B POLISH is a CONSTRUCTION phase (builder adds hover states, a11y)
- POLISH verdict is a JUDGMENT outcome (page needs minor mechanical fixes)

### 3.2 Severity

**HIGH.** A sentence like "After POLISH, run gates" is ambiguous: does it mean "after the POLISH verdict is issued" or "after the POLISH builder pass completes"? The orchestrator would encounter both in the same pipeline run.

### 3.3 Resolution Options

**Option A: Rename the builder pass (keep POLISH verdict)**
- Rename "Pass B (POLISH)" → "Pass B (REFINE)" or "Pass B (FINISH)" or "Pass B (ENRICH)"
- Pros: Verdict terminology is cleaner (Weaver already uses POLISH)
- Cons: "REFINE" is the OLD verdict term — reusing it for the builder pass is confusing. "FINISH" or "ENRICH" are possible.

**Option B: Rename the verdict (keep POLISH builder pass)**
- Rename verdict "POLISH" → "TOUCH-UP" or "PATCH" or "FIX-AND-RELEASE"
- Pros: Builder pass naming is already established
- Cons: Breaks the Weaver's already-migrated terminology

**Option C: Qualify both uses with context markers**
- Always write "Pass B (POLISH pass)" and "POLISH verdict"
- Pros: No renaming needed
- Cons: Verbose, error-prone, relies on humans always including the qualifier

**Recommendation: Option A — Rename the builder pass.**

Rename `Pass B (POLISH)` → `Pass B (ENRICH)` across:
- `artifact-builder-recipe-polish.md` title, metadata, and 3 descriptive instances
- `MANIFEST.md` references to Pass B
- `artifact-orchestrator.md` references to Pass B
- `artifact-builder-recipe-compose.md` references to Pass B

Rationale: "ENRICH" accurately describes what Pass B does (adds hover states, accessibility, micro-refinements — it enriches the composition). It does not collide with any existing verdict, process, or concept.

The file NAME `artifact-builder-recipe-polish.md` should be renamed to `artifact-builder-recipe-enrich.md`.

---

## 4. IMPROVEMENTS Format Analysis (BLOCK-05)

### 4.1 Three Variants

**Variant 1: artifact-builder-recipe-compose.md (lines 559-565)**
```html
<!-- IMPROVEMENTS:
1. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
2. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
... (5-10 items)
-->
```

**Variant 2: artifact-builder-recipe-polish.md (lines 287-291)**
```html
<!-- IMPROVEMENTS:
1. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
2. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
... (5-10 items)
-->
```

**Variant 3: MANIFEST.md (line 303)**
```
`<!-- IMPROVEMENTS: ... -->` (5-10 improvement ideas with confidence ratings)
```

**Variant 4: artifact-orchestrator.md (lines 529-536)**
```
Read each HIGH and MEDIUM confidence item from `<!-- IMPROVEMENTS: ... -->`.
```

### 4.2 Comparison

| Aspect | Compose Recipe | Polish Recipe | MANIFEST/Orchestrator |
|--------|---------------|---------------|----------------------|
| Format | `Category \| Zone \| What \| Confidence` | `Category \| Zone \| What \| Confidence` | Unspecified ("improvement ideas with confidence ratings") |
| Count | 5-10 items | 5-10 items | 5-10 items |
| Categories | `Typography, Spacing, Color, Component, Layout, Interaction, Metaphor, Accessibility` | Same list | Not specified |
| Confidence | `LOW/MED/HIGH` | `LOW/MED/HIGH` | "confidence ratings" |
| HTML tag | `<!-- IMPROVEMENTS: ... -->` | `<!-- IMPROVEMENTS: ... -->` | `<!-- IMPROVEMENTS: ... -->` |

### 4.3 Assessment

The compose and polish recipes are **ALIGNED** — they use the same format. The MANIFEST and orchestrator references are **UNDERSPECIFIED** but not contradictory.

**The issue is not 3 conflicting variants but 2 specific vs 1 vague reference.** The vague reference in MANIFEST (line 303) and orchestrator (lines 477, 529) should be made more explicit to match the recipe format.

**Additionally:** The orchestrator (line 303) mentions a separate `<!-- IMPROVEMENT-IDEAS -->` comment tag alongside `<!-- IMPROVEMENTS: ... -->`:

> "Read the builder's `<!-- IMPROVEMENT-IDEAS -->` and `<!-- IMPROVEMENTS: ... -->` HTML comments."

This is a SECOND tag name (`IMPROVEMENT-IDEAS` vs `IMPROVEMENTS`). The recipes only define `<!-- IMPROVEMENTS: ... -->`. `<!-- IMPROVEMENT-IDEAS -->` appears to be a phantom reference — it is not defined in either recipe.

**Recommendation:**
1. Standardize on `<!-- IMPROVEMENTS: ... -->` as the ONLY tag name
2. Remove `<!-- IMPROVEMENT-IDEAS -->` from MANIFEST.md line 45 and orchestrator references
3. Add the pipe-delimited format specification to MANIFEST.md line 303

---

## 5. Pass A/B vs Pass 0/1 Analysis (BLOCK-06)

### 5.1 Two Numbering Systems

The pipeline uses TWO overlapping naming conventions for builder passes:

**Convention 1: Letter-based (A/B)**
- Pass A = structural composition (D-01–D-06, D-09)
- Pass B = behavioral polish (D-07, D-08, a11y, self-eval)

**Convention 2: Number-based (0/1/2)**
- Pass 0 = initial build (before any PA audit)
- Pass 1 = first IMPROVE iteration
- Pass 2 = second IMPROVE iteration (optional)

These are ORTHOGONAL dimensions:
- Pass A/B describes WHAT the builder does (structure vs polish)
- Pass 0/1/2 describes WHEN in the iteration cycle (initial vs improvement)

### 5.2 Every Instance

| File | Line | Term | Context | System |
|------|------|------|---------|--------|
| MANIFEST.md | 36 | `Pass A Builder` | Phase 2A agent description | A/B |
| MANIFEST.md | 38 | `Pass B Builder` | Phase 2B agent description | A/B |
| MANIFEST.md | 47 | `REFINE passes` | Convergence budget | 0/1/2 (implicit) |
| orchestrator.md | 75 | `Pass 0: Initial build` | Architecture | 0/1/2 |
| orchestrator.md | 76 | `Pass 1 (standard): IMPROVE` | Architecture | 0/1/2 |
| orchestrator.md | 77 | `Pass 2 (optional)` | Architecture | 0/1/2 |
| orchestrator.md | 78 | `Pass 0 → Pass 1: 2.0 → 3.5` | Historical data | 0/1/2 |
| orchestrator.md | 79 | `Single-pass RELEASE` | Architecture | 0/1/2 (implicit) |
| orchestrator.md | 280-540 | `Pass A` / `Pass B` (many) | Phase 2 sections | A/B |
| orchestrator.md | 497-522 | `REFINE Pass B only` / `REFINE Pass A` | REFINE targeting | BOTH — A/B within 0/1/2 |
| pa-weaver.md | 273 | `pass >= 1` | RELEASE threshold | 0/1/2 |
| pa-weaver.md | 278 | `Pass 0 complete` | IMPROVE default condition | 0/1/2 |
| compose recipe | 280 | `Pass 1 output target` | Build target | 0/1/2 |
| compose recipe | 650 | `Pass 1 output` / `Pass 2 output` | Appendix items | 0/1/2 |

### 5.3 Collision Points

**Collision 1:** `Pass 0` vs `Pass A`
- Pass A is ALWAYS Pass 0's first half (Phase 2A)
- Pass B is ALWAYS Pass 0's second half (Phase 2B)
- Pass A + Pass B = Pass 0

**Collision 2:** `Pass 1` vs `IMPROVE Pass A/B`
- An IMPROVE cycle runs Pass A again (or just Pass B, depending on R-A vs R-C targeting)
- So "Pass 1 Pass A" and "Pass 1 Pass B" are valid combinations
- But the text often says just "Pass 1" meaning "the first IMPROVE cycle"

**Collision 3:** `pass >= 1` in pa-weaver.md
- This means "at least one improvement cycle has completed"
- But it looks like it might mean "at least Pass A" to a reader unfamiliar with the convention

### 5.4 Recommendation

**Rename the 0/1/2 system to avoid confusion with A/B.**

Replace numeric pass naming with CYCLE naming:
- `Pass 0` → `Cycle 0` or `Initial Cycle`
- `Pass 1` → `Cycle 1` or `First IMPROVE Cycle`
- `Pass 2` → `Cycle 2` or `Second IMPROVE Cycle`
- `pass >= 1` → `cycle >= 1`

This makes the two systems unambiguously distinct:
- **Pass A/B** = builder phase within a cycle (structure/polish)
- **Cycle 0/1/2** = iteration position (initial/first improve/second improve)

**Scope of change:** ~15 instances across orchestrator, weaver, and compose recipe.

---

## 6. Regression Risks

### 6.1 Future Reader Confusion: IMPROVE as Verb vs Verdict

**Risk:** A reader sees "The page needs to IMPROVE" and cannot tell if this is:
- The English verb (descriptive statement)
- The pipeline verdict (triggering the IMPROVE protocol)

**Mitigation:** Always capitalize the verdict: `IMPROVE`. Use lowercase for the verb: "improve." This convention already exists for `SHIP` (verdict) vs "ship" (verb). Apply consistently.

**Residual risk:** In prose passages like orchestrator Section 7, sentences like "IMPROVE is the standard path" could be misread as "to improve is the standard path." Recommend adding "verdict:" qualifier in ambiguous contexts: "An IMPROVE verdict is the standard path."

### 6.2 RETHINK Confusion

**Risk:** `RETHINK` could be read as an instruction ("rethink your approach") rather than a verdict.

**Mitigation:** Same as IMPROVE — always capitalize. In context, `RETHINK` follows the same pattern as `REBUILD`, so readers familiar with the old system will understand. Less risky than IMPROVE because RETHINK is always dramatic (PA-05 < 2.5) and clearly a pipeline event.

### 6.3 File Suffix Regression

**Risk:** Changing `-refine` to `-improve` in file naming breaks any existing scripts, grep patterns, or observer checks that look for `-refine`.

**Affected checks:**
- OBS-09: "Verify `-refine` suffixed PA reports exist"
- OBS-21: Searches for `"REFINE"` as pipeline vocabulary
- Execution tracker: "Iteration State: REFINE-1 / REFINE-2"
- Orchestrator Section 7: "All Phase 3 artifacts get `-refine` suffix"

**Mitigation:** This is a sweeping change. All file suffix references must change simultaneously. Create a verification step post-migration: grep all files for `-refine` to catch stragglers.

### 6.4 gate-manifest.json Structural Risk

**Risk:** The verdictLogic object in gate-manifest.json uses verdict names as JSON keys and values. Changing these changes the structure.

**Mitigation:** The verdictLogic values are human-readable strings, not parsed by code. The `verdict` field in gateExecutionManifestTemplate uses an enum: `"PROCEED_TO_PA|REFINE|REBUILD|INCOMPLETE|BLOCK_SCREENSHOTS|BLOCK_PA_DEPLOYMENT"`. This enum MUST be updated.

### 6.5 POLISH Pass B + POLISH Verdict (if unresolved)

**Risk:** If the collision in Section 3 is NOT resolved, future readers and agents will conflate the two meanings. An orchestrator might interpret "POLISH verdict" as "run Pass B again" rather than "apply mechanical fixes."

**Mitigation:** Resolve per Section 3 recommendation (rename Pass B to ENRICH).

### 6.6 Backward Compatibility with Existing Builds

**Risk:** Existing build artifacts (yegge-gas-town-2026-02-25) use old terminology in their execution trackers, observer reports, and weaver verdicts. These are ARCHIVAL and should NOT be modified. But future readers comparing old and new builds may be confused.

**Mitigation:** Add a terminology changelog to MANIFEST.md noting the migration date and mapping. No modification to archived builds.

---

## 7. Implementation Recommendation

### 7.1 Migration Map

| Old Term | New Term | Scope |
|----------|----------|-------|
| `SHIP` (verdict) | `RELEASE` | All files except pa-questions.md ("ship" as English verb) |
| `SHIP WITH FIXES` (verdict) | `POLISH` | All files |
| `SHIP WITH POTENTIAL` (verdict) | `POLISH (POTENTIAL OVERRIDE)` | MANIFEST.md only |
| `REFINE` (verdict) | `IMPROVE` | All files |
| `REFINE` (protocol name) | `IMPROVE` | orchestrator, observer, tracker, MANIFEST |
| `REFINE` (builder descriptor) | `IMPROVE` | orchestrator, observer, compose recipe |
| `REFINE` (file suffix) | `-improve` | orchestrator, observer, tracker |
| `REFINE-1` / `REFINE-2` | `IMPROVE-1` / `IMPROVE-2` | tracker |
| `REBUILD` (verdict) | `RETHINK` | All files |
| `Pass B (POLISH)` | `Pass B (ENRICH)` | compose recipe, polish recipe (rename file), MANIFEST, orchestrator |
| `Pass 0/1/2` | `Cycle 0/1/2` | orchestrator, weaver, compose recipe |
| `pass >= 1` | `cycle >= 1` | weaver |
| `IMPROVEMENT-IDEAS` | REMOVE (standardize on `IMPROVEMENTS`) | MANIFEST, orchestrator |
| `"REFINE"` in OBS-21 vocabulary | `"IMPROVE"` | observer protocol |

### 7.2 Order of Operations

**Phase 1: Resolve collisions FIRST (before any search-and-replace)**
1. Rename `artifact-builder-recipe-polish.md` → `artifact-builder-recipe-enrich.md`
2. In the renamed file: change title "POLISH PASS" → "ENRICH PASS", "Pass: B (POLISH" → "Pass: B (ENRICH", "to POLISH it" → "to ENRICH it" (3 instances)
3. Update all references to `artifact-builder-recipe-polish.md` in other files → `artifact-builder-recipe-enrich.md`
4. In MANIFEST.md: change "Pass B (Refinement)" → "Pass B (Enrichment)"
5. In compose recipe: change "Pass B agent will add polish" → "Pass B agent will add enrichment"

**Phase 2: Verdict migration (file by file, largest first)**
6. `artifact-orchestrator.md` — Largest file, most instances (~50+). Replace:
   - `SHIP` → `RELEASE` (in verdict context ONLY — careful with "SHIP WITH")
   - `SHIP WITH FIXES` → `POLISH` (exact string match)
   - `SHIP WITH POTENTIAL` → `POLISH (POTENTIAL OVERRIDE)`
   - `REFINE` → `IMPROVE` (ALL instances — verdict + protocol + builder + suffix)
   - `REBUILD` → `RETHINK` (ALL instances)
   - `-refine` → `-improve` (file suffix)
   - `REFINE-` → `IMPROVE-` (iteration states)
   - Section headers: "Ship / Refine / Rebuild Thresholds" → "Release / Improve / Rethink Thresholds"
   - Section headers: "REFINE Protocol" → "IMPROVE Protocol"
   - Section headers: "REFINE Targeting" → "IMPROVE Targeting"
7. `MANIFEST.md` — Second largest. Same replacements as orchestrator plus:
   - Remove `<!-- IMPROVEMENT-IDEAS -->` references (standardize on `<!-- IMPROVEMENTS: ... -->`)
8. `d10-observer-protocol.md` — 15+ instances, all process-context REFINE:
   - `REFINE` → `IMPROVE` (ALL)
   - `-refine` → `-improve`
   - OBS-21 vocabulary list: add `"IMPROVE"` alongside or replacing `"REFINE"`
   - Line 405: `SHIP, SHIP WITH FIXES` → `RELEASE, POLISH`
9. `EXECUTION-TRACKER-TEMPLATE.md`:
   - Line 56: `REBUILD` → `RETHINK`
   - Line 104: full verdict string → `RELEASE / POLISH / IMPROVE / RETHINK`
   - Section header: `REFINE Phase` → `IMPROVE Phase`
   - All field labels: `REFINE` → `IMPROVE`
   - Iteration states: `REFINE-1` → `IMPROVE-1`, etc.
   - File suffix: `-refine` → `-improve`
10. `gate-manifest.json`:
    - verdictLogic keys/values: all old → new
    - verdictImpact strings: all old → new
    - gateExecutionManifestTemplate verdict enum: `REFINE|REBUILD` → `IMPROVE|RETHINK`
11. `gate-runner-spec.md`:
    - Verdict logic summary: old → new
    - GR-64 description: old → new
12. `pa-manifest.md`:
    - Line 71: old → new
13. `experiment-protocol.md`:
    - Line 10: old → new
14. `artifact-builder-recipe-compose.md`:
    - Lines 358-360: `REFINE` → `IMPROVE` (builder INTENT narration)
    - `Pass 1` → `Cycle 1` (line 280)
15. `artifact-builder-recipe-enrich.md` (formerly polish):
    - Line 276: `REFINE protocol` → `IMPROVE protocol`
    - Line 296: `SHIP to REFINE` → `RELEASE to IMPROVE`

**Phase 3: Pass numbering migration**
16. In orchestrator: `Pass 0` → `Cycle 0`, `Pass 1` → `Cycle 1`, `Pass 2` → `Cycle 2` (~8 instances)
17. In weaver: `pass >= 1` → `cycle >= 1`, `Pass 0 complete` → `Cycle 0 complete` (~3 instances)
18. In compose recipe: `Pass 1 output` → `Cycle 1 output` (~3 instances)

**Phase 4: Verification**
19. Grep ALL files for: `\bSHIP\b`, `SHIP WITH FIXES`, `\bREFINE\b`, `\bREBUILD\b`, `-refine`, `Pass [0-2]\b`
20. Verify zero remaining old-term instances (except "ship" as English verb in pa-questions.md, "RELEASE" as musical arc in compose recipe)
21. Verify POLISH only appears in verdict context (not builder pass context)

### 7.3 Files NOT Modified

- `pa-questions.md` — No verdict terms present. Clean.
- Archived build artifacts — Historical records, not modified.

### 7.4 Estimated Change Count

| File | Approx Instances | Difficulty |
|------|-----------------|------------|
| artifact-orchestrator.md | ~55 | HIGH (verdict logic section, many contextual decisions) |
| MANIFEST.md | ~35 | HIGH (routing table, quickstart, coverage) |
| d10-observer-protocol.md | ~20 | MEDIUM (all process-context, straightforward) |
| EXECUTION-TRACKER-TEMPLATE.md | ~15 | LOW (template fields) |
| gate-manifest.json | ~12 | MEDIUM (JSON structure, must preserve valid JSON) |
| artifact-builder-recipe-compose.md | ~8 | LOW (few verdict refs, mostly builder pass) |
| artifact-builder-recipe-enrich.md | ~6 | LOW (rename file + 5 content changes) |
| gate-runner-spec.md | ~8 | LOW (verdict logic only) |
| pa-weaver.md | ~1 | TRIVIAL (one residual SHIP WITH FIXES) |
| pa-manifest.md | ~1 | TRIVIAL |
| experiment-protocol.md | ~1 | TRIVIAL |
| **Total** | **~162** | |

---

## 8. Summary of Decisions

| Decision | Recommendation | Rationale |
|----------|---------------|-----------|
| REFINE (verdict) → IMPROVE | **YES, change all** | Weaver already uses IMPROVE |
| REFINE (protocol) → IMPROVE | **YES, change all** | Protocol executes the verdict; names must match |
| REFINE (builder) → IMPROVE | **YES, change all** | Builder is spawned by the verdict; names must match |
| REFINE (file suffix) → -improve | **YES, change all** | Suffix references the verdict; must match |
| REBUILD → RETHINK | **YES, change all** | Weaver already uses RETHINK |
| SHIP → RELEASE | **YES, change all verdict instances** | Weaver already uses RELEASE |
| "ship" (English verb) | **NO, keep** | Not a verdict |
| SHIP WITH FIXES → POLISH | **YES, change all** | Weaver already uses POLISH |
| Pass B (POLISH) → Pass B (ENRICH) | **YES, rename pass** | Resolves collision with POLISH verdict |
| IMPROVEMENTS comment | **NO, keep as-is** | Not a verdict term; is builder vocabulary |
| IMPROVEMENT-IDEAS tag | **REMOVE** | Phantom reference; standardize on IMPROVEMENTS |
| Pass 0/1/2 → Cycle 0/1/2 | **YES, change** | Resolves collision with Pass A/B |
| "RELEASE" (musical arc) | **NO, keep** | Not a verdict; is content-form pattern name |

---

*End of terminology migration analysis. 12 files analyzed, ~162 changes identified, 3 collisions resolved, 1 phantom reference flagged.*
